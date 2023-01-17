const express = require("express");
const router = express.Router();
const {readDanhSachThu} = require("../controller/danhSachThu");

router.get("/danh_sach_thu", readDanhSachThu);

module.exports = router;