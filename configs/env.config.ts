import dotenv from 'dotenv';

dotenv.config();

export const envConfig = {
    PORT: process.env.PORT || 6969,
    MONGO_URL: process.env.MONGO_URL as string,
}