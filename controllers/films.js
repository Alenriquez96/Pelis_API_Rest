const films= require('../utils/films.js')

const getProduct = async (req, res) => {

    if (req.params.id) {
        const product = await products.getProductById(req.params.id); // Devuelve 1
        res.render('products', { "products": product }); // Pinta datos en el pug
    } else {
        const allProducts = await products.getAllProducts();
        res.render('products', {"products":allProducts }); // Pinta datos en el pug
    }
}
// const createProduct = async (req, res) => {
//     console.log(req.body)//objeto de un nuevo producto
//     const newProduct = req.body;//{} nuevo producto a guardar
//     const answer = await products.createProduct(newProduct)
//     res.send(`Producto ${answer.title} en el sistema, con Id : ${answer.id}`)
// }

const product = {
    getProduct,
    //createProduct
}
module.exports = product;