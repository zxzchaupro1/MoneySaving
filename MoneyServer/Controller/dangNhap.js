const dangNhapTaiKhoan = require("../models/dangnhap");

exports.dangnhapTaiKhoan = async(req, res) => {
    if (!req.body.ten_dang_nhap || !req.body.mat_khau) {
        return res.status(422).json({
            ten_dang_nhap: "required",
            mat_khau: "required",
        });
    }

    const dangNhap = new DangNhap(req.body);
    dangNhap.login(dangNhap, function(err, dangNhap) {
        if (err) {
            return res.status(403).send(err);
        }
        res.json(dangNhap);
    });
};