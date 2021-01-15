const { User, Thought } = require('../models');

const userController = {
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
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

    async deleteUser({ params }, res) {
        try {
            const delUser = await User.findOneAndDelete({ _id: params.id })
            let delThoughts = delUser.thoughts
            if (delThoughts.length) {
                const deleteThoughts = await Thought.deleteMany({ _id: { '$in': delThoughts } })
                res.json(deleteThoughts)
                return deleteThoughts.deletedCount
            }
            res.status(404).json({ message: 'There are no thoughts saved for that user.' })
            return;
        } catch (err) {
            console.error(err)
        }
    },

    addFriend({ params, body }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: params.friendId } },
            { new: true, runValidators: true }
        )
            .then(dbFriendData => {
                if (!dbFriendData) {
                    res.status(404).json({ message: 'Something is wrong with the information you provided.' });
                    return;
                }
                res.json(dbFriendData);
            })
            .catch(err => res.status(400).json(err));
    },

    removeFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
            .then(dbFriendData => {
                if (!dbFriendData) {
                    res.status(404).json({ message: 'No friend with that id was found for that user.' });
                    return;
                }
                res.json(dbFriendData)
            })
            .catch(err => res.status(400).json(err));
    }
}

module.exports = userController;