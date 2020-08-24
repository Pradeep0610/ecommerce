const router = require('express').Router()
const Product = require('../models/product')

const upload = require('../middlewares/upload-photo')
// title: String,
// description: String,
// photo: String,
// price: Number,
// stockQuantity: Number,
// rating: [Number]
//POST request--create new product
router.post('/products', upload.single('photo'), async (req, res) => {
    try {
        let product = new Product()
        product.categoryID = req.body.categoryID
        product.ownerID = req.body.ownerID
        product.title = req.body.title
        product.description = req.body.description
        product.photo = req.file.path       //Incase of S3, req.file.location
        product.price = req.body.price
        product.stockQuantity = req.body.stockQuantity

        await product.save()

        res.json({
            status: true,
            message: "Successfully saved",
            data: req.body,
            file: req.file
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            request: req.body,
            file: req.file
        })
    }
})

//GET request--get all products
router.get('/products', async (req, res) => {
    try {
        let products = await Product.find()
        res.json({
            success: true,
            products: products
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

//GET request--get single product
router.get('/products/:id', async (req, res) => {
    try {
        let product = await Product.findOne({ _id: req.params.id })
        res.json({
            success: true,
            product: product
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

//PUT request--update single product
router.put('/products/:id', upload.single('photo'), async (req, res) => {
    try {
        let product = await Product.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    title: req.body.title,
                    price: req.body.price,
                    category: req.body.categoryID,
                    photo: req.file.path,
                    description: req.body.description,
                    owner: req.body.ownerID
                }
            },
            { upsert: true }
        )

        res.json({
            success: true,
            updatedProduct: product
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

//DELETE request--delete single product
router.delete('/products/:id', async (req, res) => {
    try {
        let deletedProduct = await Product.findOneAndDelete({ _id: req.params.id })

        if (deletedProduct) {
            res.json({
                success: true,
                message: "Successfully deleted",
                product: deletedProduct
            })
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router