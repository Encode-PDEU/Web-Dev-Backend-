const express = require('express')

const router = express.Router()

const {
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
} = require('../Controller/productController')

router.get('/products', getAllProducts)

router.get('/product/:id', getProduct)

router.post('/product', addProduct)

router.patch('/product/:id', updateProduct)

router.delete('/product/:id', deleteProduct)

module.exports = router