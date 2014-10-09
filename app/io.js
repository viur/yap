module.exports = function (io) {

    io.on('connection', function (socket) {
        console.log('a user connected');
        socket.emit('init', {
            name: 'ultrix',
            users: []
        });
    });


};