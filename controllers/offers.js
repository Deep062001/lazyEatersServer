import mongoose from "mongoose";
import offer from "../models/offer.js";

export const getOffers = async (req, res) => {
    try{
        const offers = await offer.find();
        res.status(200).json(offers);
    } catch(error){
        res.status(404).json({message: error.message});
    }
};

export const createOffer = async (req, res) => {
    const offerFromRequest = req.body;
    const newOffer = new offer(offerFromRequest);
    try{
        await newOffer.save();
        res.status(201).json(newOffer);
    } catch(error){
        res.status(409).json( { message: error.message });
    }
}

export const updateOffer = async (req, res) => {
    const { id : _id } = req.params;
    const offerFromRequest = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No offer with this id");

    const updatedOffer = await offer.findByIdAndUpdate(_id, { ...offerFromRequest, _id}, { new: true });
    res.json(updatedOffer);
}

export const deleteOffer = async (req, res) => {
    const {id : _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No offer with this id");
    await offer.findByIdAndRemove(_id);

    res.json({message : "Offer deleted succesfully"});
}