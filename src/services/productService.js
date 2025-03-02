const cloudinary = require('../config/cloudinaryConfig')
const ProductRepository = require('../repositories/productRepository')
const fs = require('fs/promises')

async function createProduct(productDetails){
    // 1.We should check if an image is coming to create the Product, then we should first upload it on cloudinary

    const imagePath = productDetails.imagePath;
    if(imagePath){
        try{
            const cloudinaryResponse = await cloudinary.uploader.upload(imagePath);
            var productImage = cloudinaryResponse.secure_url;
            await fs.unlink(imagePath)
        }catch(error){
            console.log(error)
             throw {reason:'Not able to create product',statusCode: 500}
        }
      
    }

    // 2.->Then use the url from cloudinary and other product Details to add Products in DB
    const product = await ProductRepository.createProduct({
        ...productDetails,
        productImage : productImage
    });

    if(!product){
        throw {reason:'Not able to create Product ', StatusCode : 500}
    }

     return product;
}
module.exports = {
    createProduct
}  