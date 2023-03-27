const express = require("express")
const router = express.Router()
const userController = require("../controller/userController")


router.get("/", (req, res) => {
  res.send("Hello World")
})

router.post("/mahasiswa/add", userController.createUser)
router.get("/mahasiswa", userController.getUser)
router.get("/mahasiswa/:npm", userController.getUserByNpm)
router.put("/mahasiswa/:npm", userController.updateUser)
router.delete("/mahasiswa/:npm", userController.deleteUser)

module.exports = router;

