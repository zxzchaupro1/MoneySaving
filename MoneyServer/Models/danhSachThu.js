//Danh sach Thu
const danhSachThu = function(danhsachThu) {
    this.danhSachThu = danhSachThu.maKhoanThu;
    this.danhSachThu = danhSachThu.tenKhoanThu;
    this.danhSachThu = danhSachThu.soTienThu;
    this.danhSachThu = danhSachThu.ngayThu;
    this.danhSachThu = danhSachThu.maVi;
};

danhSachThu.read = function (result) {
    connection.query("SELECT ten_khoan_thu,so_tien_thu,ma_vi FROM DBMoney.thong_tin_khoan_thu", (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

module.exports = danhSachThu;
