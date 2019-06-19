var socket = io();
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on("disconnect", function() {
    console.log('perdemos conexion con servidor!')
});
socket.on("msjCliente", function(msj) {
    console.log(msj)
});

socket.emit('msjCliente', {
    usuario: 'sweppes',
    mensaje: 'kaizooo!'
}, function(msj) {
    console.log('Callback: ', msj);
});