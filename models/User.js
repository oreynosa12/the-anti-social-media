const { Schema, model } = require('mongoose');


// Schema to create User model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    // friendCount: [friends],
  },
  {
    toJSON: {
        virtuals:true,
      getters: true,
    },
  }
);

const User = model('User', userSchema);

module.exports = User;
