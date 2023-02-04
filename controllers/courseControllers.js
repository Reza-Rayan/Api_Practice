// Course Model
const Course = require("../models/Course");

exports.getCourses = (req, res) => {
          Course.find({}, (error, courses) => {
                    if (error) {
                              console.log(error)
                    } else {
                              return res.json(courses);
                    }
          })
}

exports.createCourse = (req, res) => {
          //validation

          const newCourse = new Course({
                    title: req.body.title,
                    body: req.body.body,
                    price: req.body.price,
                    image: req.body.image
          });
          newCourse.save((error) => {
                    if (error) {
                              console.log(error)
                    } else {
                              return res.json('new course added ...')
                    }
          })
}

exports.updateCourse = (req, res) => {
          const params = req.params.id;
          Course.findByIdAndUpdate(params, { title: 'title 3' }, (error, course) => {
                    return res.json("course updated");
          })
}

exports.deleteCourse = (req, res) => {
          const params = req.params.id;
          Course.findByIdAndRemove(params, (error, course) => {
                    if (error) {
                              console.log(error);
                    } else {
                              return res.json("course deleted ...")
                    }
          })
}
