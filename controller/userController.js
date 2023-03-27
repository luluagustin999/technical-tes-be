const User = require("../model/userModel")

exports.createUser = async (req, res) => {
  const user = new User({
    nama: req.body.nama,
    npm: req.body.npm,
    alamat: req.body.alamat,
    hobi: req.body.hobi,
  })

  try {
    const save = await user.save()
    res.status(201).json ({
      message : "Success menambahkan data mahasiswa",
      data: save,
    });
  } catch (error) {
    res.send(error)
  }
}

exports.getUser = async (req, res) => {

  try {
    const results = await User.find();
    res.status(200).json({
      message : "Success menampilkan seluruh data mahasiswa",
      data: results,
    });
  } catch (error) {
    console.log(error)
  }
}

exports.updateUser = async (req, res) => {
  const updateUser = await User.findOneAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.json(updateUser)
}

exports.deleteUser = async (req, res) => {
  const deleteUser = await User.findOneAndDelete(req.params.id, req.body, {
    new: true,
  })
  res.json(deleteUser)
}
