const express = require("express");

const router = express.Router();

// import controller
const {createUser} = require("../controllers/createUser");

const {getUser} = require("../controllers/getUserDetails");
const {getUserById} = require("../controllers/getUserDetails");

const {updateUser} = require("../controllers/updateUser")
const {deleteUser} = require("../controllers/deleteUser")

// define API routes
// create User routes
router.post("/createUser" , createUser);

// get user routes
router.get("/getUser", getUser);

// getUserById routes
router.get("/getUserById/:id",getUserById);

// UpdateUserById routes
router.put("/updateUser/:id",updateUser);

// deleleteUserById routes
router.delete("/deleteUser/:id",deleteUser);

module.exports = router;