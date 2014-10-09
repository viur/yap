var mongoose = require('mongoose');

module.exports = mongoose.model('Event', {
    text : String,
    done : Boolean
});