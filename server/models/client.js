const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
    companyName: {
        type: String,
        require: true,
    },

    password: {
        type: String,
        required: true,
        minLength: 8,
        match: [
            /(?=(.*[0-9]))(?=.*[a-z])(?=(.*[A-Z])).{8,}/,
            "Minimum 8 characters, must include lowercase, uppercase, & 1 number",
          ],
    },
    identity: {
        type: Schema.Types.ObjectId,
        ref: "Cards"
    }
});

const Client = model("Client", clientSchema);

module.exports = Client;