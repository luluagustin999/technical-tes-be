const User = require("../model/userModel");

exports.createUser = async (req, res) => {
  const user = new User({
    nama: req.body.nama,
    npm: req.body.npm,
    alamat: req.body.alamat,
    hobi: req.body.hobi,
  });

  try {
    const save = await user.save();
    res.status(201).json({
      message: "Success menambahkan data mahasiswa",
      data: save,
    });
  } catch (error) {
    res.send(error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const results = await User.find();
    res.status(200).json({
      message: "Success menampilkan seluruh data mahasiswa",
      data: results,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getUserByNpm = async (req, res) => {
  const { npm } = req.params;
  const getUserByNpm = await User.find({ npm: npm });
  res.status(200).json({
    status: 200,
    message: "Success menampilkan detail data mahasiswa",
    data: getUserByNpm,
  });
};


exports.updateUser = async (req, res) => {
  const { npm } = req.params;
  const updateUser = await User.findOneAndUpdate({ npm: npm }, req.body, {
    new: true,
  });

  res.status(200).json({
    status: 200,
    message: "Success mengubah data mahasiswa",
    data: updateUser,
  });
};

exports.deleteUser = async (req, res) => {
  const { npm } = req.params;
  const deleteUser = await User.findOneAndRemove({ npm: npm });
  res.status(200).json({
    status: 200,
    message: "Success menghapus data mahasiswa",
    data: deleteUser,
  });
};