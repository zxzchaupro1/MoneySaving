const danhSachChi = require("../models/danhSachChi");

exports.readDanhSachChi = async (req, res) => {
    danhSachChi.read(function (err, danhsachchi) {
        if (err) {
            return res.status(403).send(err);
        }
        res.json(danhsachchi);
    });
};
