import mongoose from "mongoose";

const offerSchema = mongoose.Schema({
    offerCode: String,
    name : String,
    percentageOfDiscount: Number,
    maxDiscount: Number
});

const offer = mongoose.model('offer', offerSchema);

export default offer;