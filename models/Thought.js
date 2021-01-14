const { Schema, model, Types } = require('mongoose');
const date = require('date-and-time');
const now = new Date();
// const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: 'Please enter your reaction.',
        maxLength: 280,
        trim: true
    },
    username: {
        type: String,
        required: 'You must enter a username.',
        trim: true
    },
    createdAt: {
        type: Date,
        default: date.format(now, 'ddd, MMM DD YYYY, hh:mm A')
        // default: Date.now
        // get: createdAtVal => dateFormat(createdAtVal)
    }
},
    {
        toJSON: {
            getters: true
        },
        id: false
    }
)

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'You must enter at least one character.',
        minLength: 1,
        maxLength: 280,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
        // get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: 'Please enter your user name.',
        trim: true
    },
    reactions: [ReactionSchema]
},
    {
        toJSON: {
            virtuals: true,
            // getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;