const express = require("express");
const router = express.Router();
const {readDanhSachChi} = require("../controller/danhSachChi");

router.get("/danh_sach_chi", readDanhSachChi);

module.exports = router;