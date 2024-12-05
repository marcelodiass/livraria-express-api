import mongoose from "mongoose";

async function conectDatabase() {
    mongoose.connect("mongodb+srv://admin:admin123@livraria.xeg5f.mongodb.net/livraria?retryWrites=true&w=majority&appName=livraria");

    return mongoose.connection;
}

export default conectDatabase;


