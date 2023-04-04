const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const jwt = require('jsonwebtoken');

const User = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    }
});

User.plugin(mongoosePaginate);

User.statics.createToken = async ({ id, email }, secret, exp) => {
    return await jwt.sign({ id, email }, secret, { expiresIn: exp });
}
User.statics.checkToken = async (req, secret_key) => {
    // const token = req.headers['token'];
    const token = req;
    if (token) {
        try {
            return await jwt.verify(token, secret_key);
        } catch (e) {
            const error = new Error('error');
            throw error;
        }
    } else {
        return null
    }
}

module.exports = mongoose.model('User', User);