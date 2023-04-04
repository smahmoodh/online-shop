const bcrypt = require('bcryptjs');
const User = require('../../model/user');

const signup = async (root, { input }, { secret_key }) => {
    console.log("Signup Mutation");
    console.log("Secret key= " + secret_key);
    console.log("root");
    console.log(root);
    console.log("input.email" + input.email);
    console.log("input.password" + input.password);
    console.log("input.phone" + input.phone);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(input.password, salt);
    // const errors = [];
    // if (validator.isEmpty(input.firstName)) {
    //     errors.push({ message: "نام نمی تواند خالی باشد." });
    // }

    // if (!validator.isEmail(input.email)) {
    //     errors.push({ message: "فرمت ایمیل معتبر نیست" });
    // }

    // if (errors.length > 0) {
    //     const error = new Error("Invalid Input");
    //     error.data = errors;
    //     error.code = 422;
    //     throw error;
    // }


    const newUser = new User({
        firstName: input.firstName,
        lastName: input.lastName,
        phone: input.phone,
        email: input.email,
        password: hash
    });

    newUser.id = newUser._id;
    console.log(newUser);

    // async (err, res) => {
    //     if (err) {
    //         console.log("Error" + err);
    //         reject(err);
    //     }
    //     else {
    //         console.log("Success");
    //         resolve({
    //             token: async () => await User.createToken(newUser, secret_key, '1h'),
    //             newUser
    //         })
    //     }
    // }
    return new Promise((resolve, object) => {
        newUser.save().then(result => {

            console.log(result);
            if (result) {
                console.log("Success");
                resolve({
                    token: async () => await User.createToken(newUser, secret_key, '1h'),
                    newUser
                })
            } else {
                console.log("Error" + err);
                reject(err);
            }
        })
    })
}

const login = async (parent, {email, password}, { secret_key }) => {
    const user = await User.findOne({ 'email': email });
    if (!user) {
        const error = new Error('چنین کاربری در سیستم ثبت نام نکرده است');
        error.code = 401;
        throw error;
    }

    let isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        const error = new Error('پسورد مطابقت ندارد');
        error.code = 401;
        throw error;
    }
    console.log("secret key");
    console.log(secret_key);
    return {
        token: await User.createToken(user, secret_key, '1h'),
        user
    };
}

module.exports = {
    signup,
    login
};