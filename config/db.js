const mongoose = require('mongoose');
const user = process.env.DB_USER;
const password = process.env.DB_PASS;

const connection = async() => {
    console.log(user);
    console.log(password);
    try {
        const database = await mongoose.connect(
            `mongodb+srv://${user}:${password}@cluster0.khf4agn.mongodb.net/?retryWrites=true&w=majority`
        );
        console.log("Database connected");
        return database;
    } catch (error) {
        console.log(error);
    }
};

connection();