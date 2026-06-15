let users = [];

function createUser(id, name, email) {
    const user = { id, name, email };
    users.push(user);
    return user;
}

function getAllUsers() {
    return users;
}

function getUserById(id) {
    return users.find(user => user.id == id);
}

function updateUser(id, data) {
    const user = users.find(user => user.id == id);

    if (!user) return null;

    user.name = data.name;
    user.email = data.email;

    return user;
}

function deleteUser(id) {
    const index = users.findIndex(user => user.id == id);

    if (index === -1) return false;

    users.splice(index, 1);

    return true;
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};