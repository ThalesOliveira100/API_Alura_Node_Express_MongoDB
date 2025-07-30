import mongoose, { mongo } from "mongoose";
import { DB_STRING } from ".end";

async function conectaNaDatabase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.mvnvi4s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection
};

export default conectaNaDatabase;