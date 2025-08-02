import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function conectaNaDatabase() {
    mongoose.connect(process.env.DB_STRING);

    return mongoose.connection
};

export default conectaNaDatabase;