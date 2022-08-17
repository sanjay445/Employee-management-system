const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/KEMS', err => {
    if(!err){
        console.log('DB Connection Sucessful');
    } else {
        console.log('Error in Connection' + err);
    }
})

module.exports = mongoose;