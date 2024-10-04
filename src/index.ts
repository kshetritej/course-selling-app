import express from "express";
import { connectToDb } from "./configs/db.config";
import { adminRouter } from "./admin/admin.routes";
import { userRouter } from "./user/user.routes";
import { envConfig } from './configs/env.config';

const port = envConfig.PORT;
const app = express();

app.use(express.json());
app.use('/', userRouter);
app.use('/admin', adminRouter);

app.listen(port, () => {
    connectToDb().then(() => {
        console.log(`Server is running on port ${port}`);
    });
})