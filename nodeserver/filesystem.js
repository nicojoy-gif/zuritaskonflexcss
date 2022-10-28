let fs = require('fs');

fs.writeFile('Firstfile.txt', 'Hello', (err) => {
    if (err) throw err;
    console.log('created')
});
