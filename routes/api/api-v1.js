const express = require("express");
const router = express.Router();

//controllers
const courseControllers = require("../../controllers/courseControllers")





router.get('/', courseControllers.getCourses);
router.post('/', courseControllers.createCourse);

router.put('/:id', courseControllers.updateCourse);
router.delete('/:id', courseControllers.deleteCourse);


module.exports = router