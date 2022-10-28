const { Post } = require('../models');

const postData = [
    {
        title: 'Waffles Kitty Power',
        post_text: 'Sniff all the things refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am so mesmerizing birds.',
        user_id: '4'
    },
    {
        title: 'Cats Take Over the World',
        post_text: 'S bare fangs at toy run hide in litter box until treats are fed and mess up all the toilet paper meow in empty rooms.',
        user_id: '1'
    },
    {
        title: 'Walk on Keyboard',
        post_text: 'Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am so mesmerizing birds.',
        user_id: '5'
    },
    {
        title: 'Dream About Hunting Birds',
        post_text: 'Then cats take over the world love you, then bite you and push your water glass on the floor, lick butt, jump launch to pounce upon little yarn mouse.',
        user_id: '2'
    },
    {
        title: 'Cucumbers are Evil',
        post_text: 'Flee in terror at cucumber discovered on floor meow to be let out. Walk on keyboard poop in the plant pot eat plants, meow, and throw up because i ate plants',
        user_id: '3'
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;