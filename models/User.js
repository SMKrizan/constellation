const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Please enter a username',
        trim: true,
    },
    email: {
        type: String,
        required: 'An email address is required',
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address.']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
    {
        toJSON: {
            virtuals: true,
            // getters: true
        }
    }
);

UserSchema.virtual('friendCount').get(function () {
    return this.friends.reduce((total, friend) => total + friends.length + 1, 0);
});

const User = model('User', UserSchema);

module.exports = User;