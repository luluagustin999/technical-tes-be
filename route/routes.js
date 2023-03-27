const express = require("express")
const router = express.Router()
const userController = require("../controller/userController")


router.get("/", (req, res) => {
  res.send("Hello World")
})

router.post("/mahasiswa/add", userController.createUser)
router.get("/mahasiswa", userController.getUser)
router.put("/mahasiswa/:id", userController.updateUser)
router.put("/mahasiswa/:id", userController.deleteUser)

module.exports = router;

