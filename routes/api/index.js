const express = require("express");
const router = express.Router();

const apiV1 = require("./api-v1")
const apiV12 = require("./api-v1.2")
router.get('/', (req,res)=>{
          res.status(401).send('<p>Hello API Page</p>')
})


router.use('/admin/v1/courses', apiV1);
// router.use('/v1.2', apiV12);


module.exports = router