const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const FacebookStrategy = require('passport-facebook').Strategy

const {Users} = require('./db')

passport.use(new FacebookStrategy({
    clientID:'576799066462775',
    clientSecret:'b3b4f8b5147c496a0683841e75cc0b04',
    callbackURL:'http://localhost:4321/login/facebook/callback'
},async function(token,rt,profile,done){
    let user = await Users.findOne({
        where:{username:profile.displayName}
    })
    if(user){
        done(null,user)
    }
    user = await Users.create({
        username:profile.displayName,
        fbId:profile.id,
        fbToken:token
    })
    done(null,user)  
}))

passport.use(new LocalStrategy(
    function(username,password,done){
        Users.findOne({
            where:{username:username}
        }).then((user)=>{
            if(!user){
                return done(null,false)
            }
            if(user.password != password){
                return done(null,false)
            }
            done(null,user)
        }).catch(done)
    }
))

passport.serializeUser(
    function(user,done){
        done(null,user.id)
    }
)

passport.deserializeUser(
    function(userId,done){
        Users.findByPk(userId).then((user)=>{
            done(null,user)
        }).catch(done)
    }
)

module.exports=passport
