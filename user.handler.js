const userService = require("./user.service");

const createUser = (req, res) => {
    const { id, name, email } = req.body;

    const user =
        userService.createUser(
            id,
            name,
            email
        );

    res.status(201).json(user);
};

const getUsers = (req, res) => {
    res.json(userService.getAllUsers());
};

const getUserById = (req, res) => {

    const user =
        userService.getUserById(
            req.params.id
        );

    if (!user)
        return res.status(404).json({
            message: "User Not Found"
        });

    res.json(user);
};

const updateUser = (req, res) => {

    const user =
        userService.updateUser(
            req.params.id,
            req.body
        );

    if (!user)
        return res.status(404).json({
            message: "User Not Found"
        });

    res.json(user);
};

const deleteUser = (req, res) => {

    const deleted =
        userService.deleteUser(
            req.params.id
        );

    if (!deleted)
        return res.status(404).json({
            message: "User Not Found"
        });

    res.json({
        message: "User Deleted"
    });
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};