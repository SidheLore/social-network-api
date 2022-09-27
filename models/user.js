const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: "Username is Required",
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: "Username is Required",
      unique: true,
      match: [/.+@.+\..+/],
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ]
}
);

const user = model('user', userSchema);

module.exports = user;
  