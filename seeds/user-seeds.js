const { User } = require('../models');

const userData = [
    {
        username: 'epratnicki',
		email: 'eric@pratnicki.net',
		password: 'hdyiijloju678'
    },
    {
        username: 'vpratnicki',
		email: 'vanessa@pratnicki.net',
		password: 'jjjijijifjf8f'
    },
    {
        username: 'dpratnicki',
		email: 'dawid@pratnicki.net',
		password: 'huuyf5eew'
    },
    {
        username: 'apratnicki',
		email: 'adam@pratnicki.net',
		password: 'jiuhygt678'
    },
    {
        username: 'cpratnicki',
		email: 'charles@pratnicki.net',
		password: 'yiijloju678'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;