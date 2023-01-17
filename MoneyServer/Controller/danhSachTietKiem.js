const danhSachTietKiem = require("../models/danhSachTietKiem");

exports.readDanhSachTietKiem = async (req, res) => {
    danhSachTietKiem.read(function (err, danhsachtietkiem) {
        if (err) {
            return res.status(403).send(err);
        }
        res.json(danhsachtietkiem);
    });
};
