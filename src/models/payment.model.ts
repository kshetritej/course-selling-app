import mongoose, {Schema, model,  isObjectIdOrHexString} from "mongoose"
import { User } from "./user.model";
const ObjectId = mongoose.Types.ObjectId;


const purchaseSchema = new Schema ({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    }, 
    courseId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Course"
    },
    purchaseDate: Date,
    purchaseExpiryData: Date,
})

export const Purchase = model("Purchase", purchaseSchema);
