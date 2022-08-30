import express from 'express';

import { getOffers, createOffer, updateOffer, deleteOffer } from '../controllers/offers.js'

const router = express.Router();

router.get('/', getOffers);
router.post('/', createOffer);
router.patch('/:id', updateOffer);
router.delete('/:id', deleteOffer);

export default router;