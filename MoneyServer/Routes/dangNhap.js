const express = require("express");
const router = express.Router();
const {
    dangNhapTaiKhoan,

} = require("../controllers/dangNhap");

router.get("/thongTinTaiKhoan", dangNhapTaiKhoan); //Tạo một user mới

module.exports = router;