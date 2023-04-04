const User = require('../../model/user');

const allUsers = async () => {
    return await User.findAll({});
    // return new Promise((resolve, object) => {
    //     User.findAll({}, (err, users) => {
    //         if (err) reject(err)
    //         else resolve(users)
    //      })
    // })
}


const getAllUser = (root, { page, limit }, { check }) => {
    if (!check) {
        const error = new Error('کاربر اعتبار لازم را ندارد');
        throw error;
    }
    return new Promise((resolve, object) => {
        User.paginate({}, { page, limit }, (err, users) => {
            if (err) reject(err)
            else {
                const result = {
                    users: users.docs,
                    paginate: {
                        total: users.total,
                        limit: users.limit,
                        page: users.page,
                        pages: users.pages
                    }
                };
                resolve(result);
            }

        })
    })
}

const getUser = (root, { id }) => {
    return new Promise((resolve, object) => {
        User.findById({ _id: id }, (err, user) => {
            if (err) reject(err)
            else resolve(user)
        })
    })
}

