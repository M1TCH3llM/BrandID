const { Schema, model } = require("mongoose");

const cardSchema = new Schema({
    cardNumber: [{
        type: Number,
    }],
    sideA: [{
        type: String,
    }],
    sideB: [{
        type: String,
    }]
});

const Cards = model("Cards", cardSchema);

module.exports = Cards;