const socket = io()

setTimeout(()=>{
    console.log('Connected ' + socket.id)
},1000)

// socket.on('connect',()=>{
//     console.log('Connected ' + socket.id)
// })

socket.on('chat_received',(data)=>{
    console.log('Chat received successfully by server.')
    $('#chats').append(
        $('<li>').text(
            `${data.username} : ${data.msg}`
        )
    )
})

socket.on('loggedin',()=>{
    $('#loginform').hide()
    $('#chatbox').show()
})

$(()=>{
    $('#chatbox').hide()
    $('#login').click(()=>{
        console.log("Login Successfull")
        socket.emit('login',{
            username:$('#username').val()
        })
    })
    $('#send').click(()=>{
        console.log('Sending chat')
        socket.emit('chat',{
            msg:$('#msg').val()
        })
    })
})