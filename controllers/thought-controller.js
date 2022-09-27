const { thought, user } = require("../models");

const thoughtController = {
though.find()
.populate(
    {
        path: 'reactions',
        select: '-__v'
    }
    )
    };

    module.exports = thoughtController;