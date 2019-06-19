const { io } = require('../server');

io.on('connection', (client) => {
    console.log('conectado el cliente ');
    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });
    client.on('msjCliente', (msj, callback) => {
        console.log('mensaje recivido:', msj);
        if (msj.usuario) {
            callback({ ok: true });
        } else {
            callback({ ok: false });
        }
        client.broadcast.emit('msjCliente', msj);
    });
    client.emit('msjCliente', {
        usuario: 'admin',
        mensaje: 'ongietorri!'
    });
});