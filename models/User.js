const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp")

const UserSchema = new mongoose.Schema({
          name: {
                    type: String,
                    required: true,
          },
          email: {
                    type: String,
                    required: true
          },
          password: {
                    type: String,
                    required: true
          },
          courses: [{type: mongoose.Schema.ObjectId , ref:"Course"}]
})
UserSchema.plugin(timestamps);


const User = mongoose.model("User", UserSchema);

module.exports = User;