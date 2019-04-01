const io = require('socket.io')(8080)

let users = []

const findUser = username => users.find(user => user.username == username)

io.on('connection', socket => {

    console.log('connected')

    socket.on('newConnection', data => {
        users.push({
            username: data.username,
            socketId: socket.id
        })
    })

    socket.on('sendMessage', data => {
        console.log(users)
        const user = findUser(data.to)
        console.log(user)
        if (user) socket.broadcast.to(user.socketId).emit('receivedMessage', data)
    })

    socket.on('disconnect', () => {
        users = users.filter(user => user.socketId !== socket.id)
    })
})