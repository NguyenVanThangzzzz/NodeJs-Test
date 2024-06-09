const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 255 },
    img: { type: String, maxLength: 255 },
    createdArt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
