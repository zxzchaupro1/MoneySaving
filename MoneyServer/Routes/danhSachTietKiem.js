const express = require("express");
const router = express.Router();
const {readDanhSachTietKiem} = require("../controller/danhSachTietKiem");

router.get("/danh_sach_tiet_kiem", readDanhSachTietKiem);

module.exports = router;