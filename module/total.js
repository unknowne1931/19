const mongoose = require('mongoose');

const PaidlstSchema = new mongoose.Schema({
    Time : String,
    ip : String,
    Country : String,
    upi : String,
    name: String,
});

module.exports = mongoose.model('Paidlist', PaidlstSchema);