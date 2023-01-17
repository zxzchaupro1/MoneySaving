const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const connection = require("./database/mysqlDatabase");

const app = express();
// Middlewares
app.use(bodyParser.json());
app.use(cors());


// database init
function mysqlConnect() {
    global.connection = mysql.createConnection(connection);

    global.connection.connect(function(err) {
        if (err) {
            console.log("error when connecting to db");
            setTimeout(mysqlConnect, 2000);
        }
        console.log("connected to database");
    });
    global.connection.on("error", function(err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            mysqlConnect();
        } else {
            throw err;
        }
    });
}

mysqlConnect();

// Routes
const thongTinNguoiDung = require("./routes/dangKy");
const dangnhap = require("./routes/dangnhap");
const danhSachChi = require("./routes/danhSachChi");
const danhSachThu = require("./routes/danhSachThu");
const danhSachTietKiem = require("./routes/danhSachTietKiem");

// Middlewares
app.use("/api", danhSachChi);
app.use("/api", danhSachThu);
app.use("/api", danhSachTietKiem);

// Routes
// app.use("/api", dangnhap);


// PORT
const port = 3003;

// Starting a server
app.listen(port, () => {
    console.log(`app is running at ${port}`);
});