const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pick = require("lodash/pick");

const userSchema = new Schema({
  nama: {
    type: String,
    required: true,
  },
  npm: {
    type: Number,
    required: true,
  },
  alamat: {
    provinsi: {
      type: String,
      required: true,
    },
    kota: {
      type: String,
      required: true,
    },
    jalan: {
      type: String,
      required: true,
    },
  },
  hobi: {
    type: [String],
    required: true,
  },
});


userSchema.methods.toJSON = function () {
  const {_id, ...object} = this.toObject()
  object.id = _id;
  let user = this;
  let userObject = user.toObject();
  return pick(object, userObject, ["id", "nama", "npm", "alamat", "hobi"]);
}



module.exports = mongoose.model("User", userSchema)