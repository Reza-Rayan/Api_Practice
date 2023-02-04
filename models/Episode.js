const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp")

const EpisodeSchema = new mongoose.Schema({
          course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
          title: {
                    type: String,
                    required: true
          },
          body: {
                    type: String,
                    required: true
          },
          videoUrl: {
                    type: String,
                    required: true
          },
          numberVideo: {
                    type: String,
                    required: true
          },
          viewCount:
          {
                    type: Number,
                    default: 0
          },
          commentCount: {
                    type: Number,
                    default: 0
          }
})
EpisodeSchema.plugin(timestamps);


const Episode = mongoose.model("Episode", EpisodeSchema);

module.exports = Course;