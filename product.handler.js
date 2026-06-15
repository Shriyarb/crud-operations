const productService = require("./product.service");

const createProduct = (req, res) => {

    const{
        id,
        name,
        price,
        stock
    } = req.body;

    res.status(201).json();

    const product= productService.createProduct(
        id,
        name,
        price,
        stock
    );
    res.status(201).json(product);
};
 

const getProducts = (req, res) => {
    res.json(productService.getAllProducts());
};

const getProductById = (req, res) => {

    const product =
        productService.getProductById(
            req.params.id
        );

    if (!product)
        return res.status(404).json({
            message: "Product Not Found"
        });

    res.json(product);
};

const updateProduct = (req, res) => {

    const product =
        productService.updateProduct(
            req.params.id,
            req.body
        );

    if (!product)
        return res.status(404).json({
            message: "product Not Found"
        });

    res.json(product);
};

const deleteProduct = (req, res) => {

    const deleted =
        productService.deleteProduct(
            req.params.id
        );

    if (!deleted)
        return res.status(404).json({
            message: "Product Not Found"
        });

    res.json({
        message: "Product Deleted"
    });
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
