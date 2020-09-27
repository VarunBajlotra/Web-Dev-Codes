const fs = require('fs');
const path = require('path');

let file = path.join(__dirname,'Hello.txt');

console.log(__dirname);

fs.readFile(
    file,
    {
        encoding:'utf8'
    },
    (err,data)=>{
        if(err) throw new Error('Could not read')
        console.log(data)
    }
)

// fs.writeFile(
//     file,
//     'Hello World!',
//     {
//         encoding:'utf8',
//         flag:'a'
//     },
//     (err)=>{
//         if(err) throw err
//         console.log('File written successfully!');
//     }
// )

console.log('Code is getting executed');