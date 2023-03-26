const mongoose = require("mongoose")
const Schema = mongoose.Schema

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
    }
  },
  hobi: {
    type: [String],
    required: true,
  },
})

userSchema.method("toJSON", function(){
  const {_id, ...object} = this.toObject()
  object.id = _id
  return object
})


module.exports = mongoose.model("User", userSchema)