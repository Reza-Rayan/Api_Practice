const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp")

const CourseSchema = new mongoose.Schema({
          name: {
                    type: mongoose.Schema.ObjectId, ref: 'User',
                    // required: true,
          },
          title: {
                    type: String,
                    required: true
          },
          body: {
                    type: String,
                    required: true
          },
          price: {
                    type: String,
                    required: true
          },
          image: {
                    type: String,
                    required: true
          },
          episodes: [{ type: mongoose.Schema.ObjectId, ref: "Episode" }]
})
CourseSchema.plugin(timestamps);


const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;