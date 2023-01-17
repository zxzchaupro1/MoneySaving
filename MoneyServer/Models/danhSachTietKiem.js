//Danh sach Tiet Kiem
const danhSachTietKiem = function(danhsachTietKiem) {
    this.danhSachTietKiem = danhSachTietKiem.maKhoanTietKiem;
    this.danhSachTietKiem = danhSachTietKiem.tenKhoanTietKiem;
    this.danhSachTietKiem = danhSachTietKiem.soTienTietKiem;
    this.danhSachTietKiem = danhSachTietKiem.ngayTietKiem;
    this.danhSachTietKiem = danhSachTietKiem.maVi;
};

danhSachTietKiem.read = function (result) {
    connection.query("SELECT ten_khoan_tiet_kiem,so_tien_tiet_kiem,ma_vi FROM DBMoney.thong_tin_khoan_tiet_kiem", (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

module.exports = danhSachTietKiem;
