const {createProduct} = require('../services/productService')

async function addProduct(req, res) {
    

    try{
        const product = await createProduct({
            productName: req.body.productName,
            description: req.body.description,
            imagePath: req.file.path,
            price: req.body.price,
            category: req.body.category, //if categoty is undefined, veg will be store
            inStock: req.body.inStock // If in Stock is undefined, then true will be stored
        });
        return res.status(201).json({
            success: true,
            message:'Successfully created the Product',
            error:{},
            data: product
        })
    }catch(erro){
        console.log(error)
        return res.status(error.statusCode).json({
            success: false,
            message: error.reason,
            data:{},
            error:error
        });
    }
   
}

module.exports = {
    addProduct
}