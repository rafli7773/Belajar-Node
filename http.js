const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    // // console.log(req);
    // res.write("Hallo Semuanya")
    // res.end();

    if (req.url === '/') {

        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write(data);
            res.end();

        })

        // res.write("<h1>Selamat datang Halaman Utama</h1> <a href='/about'>about</a>");
        // res.end();
    }
    if (req.url === '/about') {
        res.write("Selamat datang di halaman About");
        res.end();
    }
});

server.listen(3000, () => console.log("server berhasil dijalankan"));