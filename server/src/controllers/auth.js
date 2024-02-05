// import db
const db = require('../db')

// query info: select * from users
// async - await
exports.getUsers = async (req, res) => {
    try {
        const {rows} = await db.query('select * from users');
        console.log(rows);
    } catch (error) {
        console.log(error.message);
    }
};