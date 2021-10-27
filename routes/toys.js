const express = require('express');
const router = express.Router();

const toysController = require('../app/controllers/ToysCotroller');


router.get('/create', toysController.create)
router.get('/stored', toysController.detail)
router.get('/boy', toysController.findBoy)
router.get('/girl', toysController.findGirl)
router.post('/save', toysController.save)
router.get('/:id/edit', toysController.edit);
router.post('/:id/update', toysController.update);
router.get('/:id/delete', toysController.delete);
router.get('/:slug', toysController.show);


module.exports = router;