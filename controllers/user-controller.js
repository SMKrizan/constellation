const { User } = require('../models');

const userController = {
    getAllUsers(req, res) {
        User.find({})
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user with that id was found.' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    createUser({ body }, res) {
        User.create(body)
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    updateUserById({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user with this id was found.' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user with that id was found.' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    addFriend({ params, body }, res) {
        console.log('addFriend-params: ', params);
        console.log('addFriend-body: ', body);
        User.findOneAndUpdate(
            { _id: params.userId }, 
            { $push: { friendId: params.friendId } },
            { new: true, runValidators: true }
        )
        .select('-__v')
        .then(dbFriendData => {
            if (!dbFriendData) {
                res.status(404).json({ message: 'No user with that id was found.' });
                return;
            }
            res.json(dbFriendData);
        })
        .catch(err => res.status(400).json(err));
    },

    removeFriend({ params }, res) {
        console.log('removeFriend-params: ', params);
        console.log('removeFriend-params.friendId: ', params.friendId)
        User.findOneAndDelete({ friendId: params.friendId })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    }
}

module.exports = userController;