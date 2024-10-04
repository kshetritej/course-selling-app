const express = require("express")
import {adminRouter} from "./admin/admin.routes";
import {userRouter} from "./user/user.routes";

const PORT = 6969;

const app = express();

app.use(express.json());
app.use('/', userRouter);
app.use('/admin', adminRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})