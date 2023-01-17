//Danh sach chi
const danhSachChi = function(danhsachchi) {
    this.danhSachChi = danhSachChi.maKhoanChi;
    this.danhSachChi = danhSachChi.tenKhoanChi;
    this.danhSachChi = danhSachChi.soTienChi;
    this.danhSachChi = danhSachChi.ngayChi;
    this.danhSachChi = danhSachChi.maVi;
};

danhSachChi.read = function (result) {
    connection.query("SELECT ten_khoan_chi,so_tien_chi,ma_vi FROM DBMoney.thong_tin_khoan_chi", (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

module.exports = danhSachChi;
