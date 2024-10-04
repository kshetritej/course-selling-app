import { config } from 'dotenv';

config();

export const envConfig = {
    PORT: process.env.PORT || 6969,
    MONGO_URL: process.env.MONGO_URL as string,
    USER_JWT_SECRET: process.env.USER_JWT_SECRET as string,
    ADMIN_JWT_SECRET: process.env.ADMIN_JWT_SECRET as string,
}