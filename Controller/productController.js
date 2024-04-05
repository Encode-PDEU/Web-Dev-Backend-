const {default: mongoose} = require('mongoose')
const Product = require('../Models/productModel')

const getAllProducts = async(req,res) => {
    const product = await Product.find({}).sort({createdAt: -1})

    res.status(200).json(product)
}

const getProduct = async(req, res) => {
    const {id} = req.params 

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Not a valid mongoose ID.'})
    }

    const product = await Product.findById(id)

    if(!product) {
        return res.status(400).json({error: 'No such product ID.'})
    }

    res.status(200).json(product)
}

const addProduct = async(req, res) => {
    const {Name, Description, Quantity, BuyingPrice, MRP, Category} = req.body;

    try {
        const product = await Product.create({Name, Description, Quantity, BuyingPrice, MRP, Category})
        res.status(200).json(product)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const updateProduct = async(req,res) => {
    const {id} = req.params 

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Not a valid mongoose ID.'})
    }

    const product = await Product.findByIdAndUpdate({_id: id}, req.body, {
        runValidators: true,
        new: true
    })

    if(!product){
        return res.status(404).json({Error: 'No such product available'})
    }

    res.status(200).json(product)
}

const deleteProduct = async(req,res) => {
    const {id} = req.params 

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Not a valid mongoose ID.'})
    }

    const product = await Product.findByIdAndDelete({_id: id})
    console.log("Deleted...")

    if(!product){
        return res.status(404).json({Error: 'No such product available'})
    }

    res.status(200).json(product)
}

module.exports = {
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}