const sqlite = require('sqlite3')
const DB_PATH = __dirname + '/test.db'

const db = new sqlite.Database(DB_PATH)

db.serialize(()=>{
    db.all(
        `SELECT * FROM tasks`,
        (err,data)=>{
            if(err) throw err
            for(let i of data){
                console.log(i)
            }
        }
    )
})