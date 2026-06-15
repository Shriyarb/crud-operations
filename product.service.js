let products = [];

function createProduct(id, name, price, stock) {
    const product = {
        id,
        name,
        price,
        stock
    };

    products.push(product);

    return product;
}

function getAllProducts() {
    return products;
}

function getProductById(id) {
    return products.find(
        product => product.id == id
    );
}

function updateProduct(id, data) {

    const product =
        products.find(
            product => product.id == id
        );

    if (!product)
        return null;

    product.name = data.name;
    product.price = data.price;
    product.stock = data.stock;

    return product;
}

function deleteProduct(id) {

    const index =
        products.findIndex(
            product => product.id == id
        );

    if (index === -1)
        return false;

    products.splice(index, 1);

    return true;
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};