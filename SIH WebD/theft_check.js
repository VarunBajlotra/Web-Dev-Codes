console.log('in theft check');

const route = require('express').Router()
const Excel = require('exceljs');

   route.post('/',(req,res)=>{

    var workbook = new Excel.Workbook();
    workbook.xlsx.readFile("DATASET.xlsx")
      .then(function() {
        // use workbook
        var worksheet_row = workbook.getWorksheet('Sheet1').getColumn('A').values
        //  console.log(worksheet_row);
         for(let i=0;i<worksheet_row.length;i++){
          // console.log(req.body.carNumber);
             if( worksheet_row[i] == req.body.carNumber){
                 res.send('found');
             }
         }
      });
})

module.exports = route