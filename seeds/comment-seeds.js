const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'The cat was chasing the mouse if it smells like fish eat as much as you wish or cats are the world for waffles.',
        user_id: '1',
        post_id: '1'
    },
    {
        comment_text: 'Dream about hunting birds run outside as soon as door open yet sit on the laptop and try to hold own back foot to clean it but foot reflexively kicks you in face.',
        user_id: '2',
        post_id: '2'
    },
    {
        comment_text: 'Catch small lizards, bring them into house, then unable to find them on carpet meow meow.',
        user_id: '3',
        post_id: '3'
    },
    {
        comment_text: 'Eat as much as you wish or cats are the world for waffles.',
        user_id: '4',
        post_id: '4'
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;