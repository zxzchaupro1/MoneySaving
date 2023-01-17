const danhSachThu = require("../models/danhSachThu");

exports.readDanhSachThu = async (req, res) => {
    danhSachThu.read(function (err, danhsachthu) {
        if (err) {
            return res.status(403).send(err);
        }
        res.json(danhsachthu);
    });
};
