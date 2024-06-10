const mongoose = require('mongoose');

const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);
const Schema = mongoose.Schema;


const Course = new Schema({
    name: { type: String, required: true, },
    description: { type: String, maxLength: 255 },
    img: { type: String, maxLength: 255 },
    videoid: { type: String, required: true, },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true },
    createdArt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
