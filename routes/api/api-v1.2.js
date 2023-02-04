const express = require("express");
const router = express.Router();


router.get("/courses", (req, res) => {
      res.json({
          data: [
                    {
                              title: 'title 1',
                              content: 'content number 1'
                    },
                    {
                              title: 'title 2',
                              content: 'content number 2'
                    },
          ]
      })
})

module.exports = router