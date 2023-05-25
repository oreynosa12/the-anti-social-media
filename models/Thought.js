const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction');


// Schema to create User model
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
      
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
   
      userName: 
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },

    reactions: [ReactionSchema],

      
  },
  {
    toJSON: {
        virtuals:true,
      getters: true,
    },
  }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
