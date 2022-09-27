const { User, Thought } = require("../models");

user.find()
      .populate({
        path: "friends",
        select: "-__v",
      }
      );

module.exports = userController;      