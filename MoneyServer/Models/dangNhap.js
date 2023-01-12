"dangNhap strict";

const dangNhap = function(dangNhap) {
    this.ten_dang_nhap = dangNhap.ten_dang_nhap;
    this.mat_khau = dangNhap.mat_khau;
    
};

dangNhap.dangnhap = function(dangNhap, result) {
    connection.query("SELECT * FROM thong_tin_tai_khoan WHERE ten_dang_nhap  = (?) AND mat_khau = (?) ", [req.body.tenDangNhap, req.body.matKhau], (err) => {
        res.send("Đăng nhập thành công")
    })
}

module.exports = dangNhap;