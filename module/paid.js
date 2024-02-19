const mongoose = require('mongoose');

const PaidtSchema = new mongoose.Schema({
    Time : String,
    ip : String,
    upi : String,
    name: String,
});

module.exports = mongoose.model('Paid', PaidtSchema);