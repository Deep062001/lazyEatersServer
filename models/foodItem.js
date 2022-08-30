import mongoose from "mongoose";

const foodItemSchema = mongoose.Schema({
    image: String,
    name : String,
    tags: [String],
    price: Number
});

const foodItem = mongoose.model('foodItem', foodItemSchema);

export default foodItem;