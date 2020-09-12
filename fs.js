const fs = require('fs');

// fs.writeFile('pesan.txt', "Halo Guys", (err) => {
//     if (err) throw err;

//     console.log("file berhasil di buat");
// });

fs.readFile('./pesan.txt', 'utf8', (err, data) => {
    if (err) throw err;

    console.log(data);
})