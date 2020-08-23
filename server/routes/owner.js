const router = require('express').Router()
const Owner = require('../models/owner')

const upload = require('../middlewares/upload-photo')

//POST request--create new owner
router.post('/owners', upload.single('photo'), async (req, res) => {
    try {
        const owner = new Owner()
        owner.name = req.body.name
        owner.about = req.body.about
        owner.photo = req.file.path

        await owner.save()

        res.json({
            success: true,
            message: "Successfully created new Owner"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

//GET request--Get all owner
router.get('/owners', async (req, res) => {
    try {
        let owners = await Owner.find()
        res.json({
            success: true,
            owners: owners
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router