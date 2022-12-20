const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    score: {
        type: Number,
        require: true,
    },
    totalScore: {
        type: Number,
        require: true,
    }
},
    { timestamps: true }
);


module.exports = mongoose.model("User", userSchema);