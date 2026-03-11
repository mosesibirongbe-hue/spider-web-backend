const { createPlatformSchema } = require('../middlewares/validator')
const platform = require("../models/platformsModel");

exports.getPlatforms = async (req, res) => {
    const { page } = req.query
    const platformsPerPage = 10;

    try {
        let pageNum = 0;
        if (page <= 1) {
            pageNum = 0
        } else {
            pageNum = page - 1
        }
        const result = await platform.find()
            .sort({ createdAt: -1 })
            .skip(pageNum * platformsPerPage)
            .limit(platformsPerPage)
            .populate({
                path: 'userId',
                select: 'email'
            });
        res.status(200).json({ success: true, message: 'platforms', data: result });
    } catch (error) {
        console.log(error);
    }
}

exports.singlePlatform = async (req, res) => {
    const { _id } = req.query;

    try {

        const existingPlatform = await platform.findOne({ _id })
            .populate({
                path: 'userId',
                select: 'email',
            });
        if (!existingPlatform) {
            return res
                .status(404)
                .json({ success: false, message: 'platform unavailable' });
        }
        res.status(200).json({ success: true, message: 'single platform', data: existingPlatform });
    } catch (error) {
        console.log(error);
    }
}

exports.createPlatform = async (req, res) => {
    const { title, description } = req.body;
    const { userId } = req.user;
    // const userId = req.user.userId;

    try {
        const { error, value } = createPlatformSchema.validate({
            title,
            description,
            userId,
        });
        if (error) {
            return res
                .status(401)
                .json({ success: false, message: error.details[0].message });
        }

        const result = await platform.create({
            title, description, userId,
        })
        res.status(201).json({ success: true, message: 'platform created', data: result });
    } catch (error) {
        console.log(error)
    }
}

exports.updatePlatform = async (req, res) => {
    const {_id} = req.query;
    const { title, description } = req.body;
    const userId = req.user.userId;

    try {
        const { error, value } = createPlatformSchema.validate({
            title,
            description,
            userId,
        });
        if (error) {
            return res
                .status(401)
                .json({ success: false, message: error.details[0].message });
        }

        const existingPlatform = await platform.findOne({ _id })
        if (!existingPlatform) {
            return res
                .status(404)
                .json({ success: false, message: 'platform unavailable' });
        }
        if (existingPlatform.userId.toString() !== userId) {
            return res
                .status(404)
                .json({ success: false, message: 'Unauthorized' });
        }
        existingPlatform.title = title;
        existingPlatform.description = description;

        const result = await existingPlatform.save();
        res.status(201).json({ success: true, message: 'platform Updated', data: result });
    } catch (error) {
        console.log(error)
    }
}


exports.deletePlatform = async (req, res) => {
    const {_id} = req.query;
   const userId = req.user.userId;

    try {
        
        const existingPlatform = await platform.findOne({ _id })
        if (!existingPlatform) {
            return res
                .status(404)
                .json({ success: false, message: 'platform already unavailable' });
        }
        if (existingPlatform.userId.toString() !== userId) {
            return res
                .status(404)
                .json({ success: false, message: 'Unauthorized' });
        }
        
        await platform.deleteOne({_id})
        res.status(201).json({ success: true, message: 'platform Deleted' });
    } catch (error) {
        console.log(error)
    }
}