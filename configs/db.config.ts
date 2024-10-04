import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { envConfig } from './env.config';

dotenv.config();

export const connectToDb = async () => {
    await mongoose.connect(envConfig.MONGO_URL)
}
