const express = require("express");
const router = express.Router();

//@desc     GET all products from database
//@route    GET /api/products
router.get("/", (req, res) => {});

//@desc     GET all products from database
//@route    GET /api/products/:id
router.get("/:id", (req, res) => {});

module.exports = router;
