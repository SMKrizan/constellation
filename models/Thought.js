const { Schema, model, Types } = require('mongoose');
const date = require('date-and-time');
const now = new Date();


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
    }
},
    {
        id: false
    }
)

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'Your entry must have at least one and no more than 280 characters.',
        minLength: 1,
        maxLength: 280,
        trim: true
    },
    createdAt: {
        type: Date,
        default: date.format(now, 'ddd, MMM DD YYYY, hh:mm A')
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
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;