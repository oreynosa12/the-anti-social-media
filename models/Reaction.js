const { Schema, model } = require('mongoose');


// Schema to create User model
const ReactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
    reactionbody: {
        type: String,
        required: true,
        max_length: 280,
    },
   
      userName: 
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },

      createdAt: {
        type: Date,
        default: Date.now(),
        },
      
      
  },
  {
    toJSON: {
        virtuals:true,
      getters: true,
    },
  }
);


module.exports = ReactionSchema;