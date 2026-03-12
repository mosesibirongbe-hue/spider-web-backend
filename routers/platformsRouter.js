const express = require('express')
const platformsController = require('./../controllers/platformsController')
const { identifier } = require('../middlewares/identification');
const router = express.Router()

router.get('/greeting', platformsController.greeting);

router.get('/all-platforms', platformsController.getPlatforms);
router.get('/single-platform', platformsController.singlePlatform);
router.post('/create-platform', identifier, platformsController.createPlatform);

router.put('/update-platform', identifier, platformsController.updatePlatform);
router.delete('/delete-platform', identifier, platformsController.deletePlatform);

module.exports = router