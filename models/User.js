const mongoose = require('mongoose');


//notif: {postID: {email: action}}
/*const notifEmailAction = new mongoose.Schema({
    type: Map,
    of: String
})*/
//postid , email, action
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    /*notifPostID: {
        type: Map,
        of: notifEmailAction
    },*/
    picurl: {
        type: String,
        default: "default_profile_picture.png"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);