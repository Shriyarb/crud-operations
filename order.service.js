let orders = [];

function createOrder(
    id,
    userId,
    productId,
    quantity
) {

    const order = {
        id,
        userId,
        productId,
        quantity
    };

    orders.push(order);

    return order;
}

function getAllOrders() {
    return orders;
}

function getOrderById(id) {

    return orders.find(
        order => order.id == id
    );
}

function updateOrder(id, data) {

    const order =
        orders.find(
            order => order.id == id
        );

    if (!order)
        return null;

    order.userId = data.userId;
    order.productId = data.productId;
    order.quantity = data.quantity;

    return order;
}

function deleteOrder(id) {

    const index =
        orders.findIndex(
            order => order.id == id
        );

    if (index === -1)
        return false;

    orders.splice(index, 1);

    return true;
}

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder
};