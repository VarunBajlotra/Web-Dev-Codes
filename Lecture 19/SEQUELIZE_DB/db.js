const Sequelize = require('sequelize')

const db = new Sequelize({
    //for sqlite
    dialect: 'sqlite',
    storage: __dirname + '/tasks.db',
    //for server based
    host:'',
    username:'',
    password:'',
    database:''
})

const Tasks = db.define('Task',{
    name:{
        type:Sequelize.STRING(100)
    },
    description:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    done:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        default:false
    }
})

module.exports = {
    db,Tasks
}