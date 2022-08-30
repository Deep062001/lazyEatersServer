import mongoose from "mongoose";
import foodItem from "../models/foodItem.js";

export const getFoodItems = async (req, res) => {
    try{
        const foodItems = await foodItem.find();
        res.status(200).json(foodItems);
    } catch(error){
        res.status(404).json({message: error.message});
    }
};

export const createFoodItem = async (req, res) => {
    const foodItemFromRequest = req.body;
    const newFoodItem = new foodItem(foodItemFromRequest);
    try{
        await newFoodItem.save();
        res.status(201).json(newFoodItem);
    } catch(error){
        res.status(409).json( { message: error.message });
    }
}

export const updateFoodItem = async (req, res) => {
    const { id : _id } = req.params;
    const foodItemFromRequest = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No food item with this id");

    const updatedFoodItem = await foodItem.findByIdAndUpdate(_id, { ...foodItemFromRequest, _id}, { new: true });
    res.json(updatedFoodItem);
}

export const deleteFoodItem = async (req, res) => {
    const {id : _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No food item with this id");
    await foodItem.findByIdAndRemove(_id);

    res.json({message : "Food Item deleted succesfully"});
}