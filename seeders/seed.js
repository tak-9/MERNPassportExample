var db = require("../models");
//createUsers();

async function createUsers() {
    console.log("********* seed.js createUsers *************")

    await db.User.create({
        username: "takuji",
        password: "123",
    });

}

module.exports = {
    createUsers : createUsers,
}