import mongoose, {Schema, model,  isObjectIdOrHexString} from "mongoose"
import { User } from "./user.model";
const ObjectId = mongoose.Types.ObjectId;


const purchaseSchema = new Schema ({
    userId: ObjectId, 
    courseId: ObjectId,
    purchaseDate: Date,
    purchaseExpiryData: Date,
})

export const Purchase = model("Purchase", purchaseSchema);
