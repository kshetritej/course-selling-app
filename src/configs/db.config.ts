import mongoose from 'mongoose';
import { envConfig } from './env.config';

export const connectToDb = async () => {
    console.log('Connecting to db...')
    await mongoose.connect(envConfig.MONGO_URL)
}
