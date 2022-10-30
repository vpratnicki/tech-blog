const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment } = require('../../models');

// get all comments
router.get('/', (req, res) => {
    Comment.findAll()
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// create comments
router.post('/', withAuth, (req, res) => {
  //check the session
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      // use the id from the session
      user_id: req.session.user_id
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

// update comments
router.put('/:id', withAuth, (req, res) => {
    Comment.update(
      {
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
      },
      {
      where: {
        id: req.params.id
      }
    })
      .then(dbCommentData => {
        if (!dbCommentData[0]) {
          res.status(404).json({ message: 'No comment found with this id' });
          return;
        }
        res.json(dbCommentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// destory comments
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbCommentData => {
        if (!dbCommentData) {
          res.status(404).json({ message: 'No comment found with this id!' });
          return;
        }
        res.json(dbCommentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;
