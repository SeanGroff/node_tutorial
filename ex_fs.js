const fs = require('fs');
/**
 * Blocking code (Synchronus)
 */

// read a file
// let secretFile = fs.readFileSync(__dirname + '/public/assets/dummyFile.txt', 'utf8');

// write to a file
// fs.writeFileSync(`${ __dirname }/public/assets/newSecret.txt`, `${ secretFile } New secret key: 1234567890`);

// delete a file
// fs.unlink(theFileNameToDelete);

/**
 * Async
 */
// fs.readFile(__dirname + '/public/assets/dummyFile.txt', 'utf8', (err, data) => {
//   fs.writeFile(`${ __dirname }/public/assets/newSecret.txt`, `${ data } New secret key: 1234567890`);
// });

// make directory
fs.mkdir(`${__dirname}/public/data`, (err, data) => {
  fs.readFile(__dirname + '/public/assets/dummyFile.txt', 'utf8', (err, data) => {
    fs.writeFile(`${ __dirname }/public/data/newSecret.txt`, `${ data } New secret key: 123456789069`);
  });
});