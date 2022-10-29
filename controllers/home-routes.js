const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);
    Post.findAll({
        attributes: [
            'id',
            'title',
            'post_text',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        // pass a single object into the homepage temp
        console.log(dbPostData[0]);
        const posts = dbPostData.map(post => post.get({ plain: true }));

        res.render('homepage', { 
          posts,
          loggedIn: req.session.loggedIn
         });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

// single post route
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
          id: req.params.id
        },
        attributes: ['id', 'post_text', 'title', 'created_at'],
        include: [
          {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
              model: User,
              attributes: ['username']
            }
          },
          {
            model: User,
            attributes: ['username']
          }
        ]
      })
        .then(dbPostData => {
          if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
    
          // serialize the data
          const post = dbPostData.get({ plain: true });
    
          // pass data to template
          res.render('single-post', { 
            post,
            loggedIn: req.session.loggedIn
           });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

//login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }

    res.render('login');
});

module.exports = router;