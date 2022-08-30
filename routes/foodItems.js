import express from 'express';

import { getFoodItems, createFoodItem, updateFoodItem, deleteFoodItem } from '../controllers/foodItems.js'

const router = express.Router();

router.get('/', getFoodItems);
router.post('/', createFoodItem);
router.patch('/:id', updateFoodItem);
router.delete('/:id', deleteFoodItem);

export default router;