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
            // tells model which document to search to find thoughts
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            // tells model which document to search to find thoughts
            ref: 'User'
        }
    ]
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function () {
    console.log('this.friends: ', this.friends)
    return this.friends.length;
    // return this.friends.reduce((total, friends) => total + friends.length + 1, 0);
});

const User = model('User', UserSchema);

module.exports = User;