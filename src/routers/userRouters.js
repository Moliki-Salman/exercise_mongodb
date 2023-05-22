// this is used to test the controller 
const router = require("express").Router();
const controller = require("../controller/userController");

router
.post("/", controller.createUser)
.get("/", controller.getAllUsers)
.get("/:id", controller.getUser)
.put("/:id", controller.updateUser)
.delete("/:id", controller.deleteUser)

module.exports = router;