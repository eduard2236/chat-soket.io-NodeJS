var socket = io.connect('http://192.168.1.128:6677',{forceNew:true});
socket.on('messages', function(data){
    console.log(data)
    render(data)
});

function render(data){
    //se reciben los datos del objeto messages y se recorren con map tambien se puede utilizar un bucle for
    var html = data.map(function(message, index){
        return (`
            <div class="message">
                <strong>${message.nickname}<strong>
                <p>${message.text}<p>
            </div> 
        `);
    }).join(' ');
    document.getElementById('messages').innerHTML = html;
}