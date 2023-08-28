const { User } = require("../models");

const connection = require("../config/connection");

const users = [
    {
        username: "Jeff",
        email: "jeffrpar@gmail.com",
        friends: [],
        thoughts: [],
    },
];

// Creates a connection to mongodb
connection.once("open", async () => {

    // Delete the entries in the collection
    await User.deleteMany({});

    // Wait for the Users array to be inserted into the database
    await User.collection.insertMany(users);

    // Log out a pretty table for comments and posts
    console.table(users);
    console.info("seeding complete! 🌱");
    process.exit(0);
});