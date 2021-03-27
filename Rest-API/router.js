const express = require("express");
const router = express.Router();
const Data = require("./db");

router.get("/data", (req,res) => {
   const val = Data.find({});
   res.json(val);
})


router.post("/data", (req,res) => {
  Data.create(req.body)
      .then((bank) => {
        res.json(bank);
      })
      .catch((err) => {
        res.json(err);
      })
})

router.put("/data/:id", (req,res) => {
  Data.findByIdAndUpdate({_id: req.params.id}, req.body)
      .then((bank) => {
        Bank.findOne({_id: req.params.id})
        .then((bank) => {
          res.json(bank);
        })
      })
})


router.delete("/data/:id", (req,res) => {
  Data.findByIdAndRemove({_id: req.params.id})
      .then((bank) => {
        res.json(bank);
      })
})

module.exports = router;
