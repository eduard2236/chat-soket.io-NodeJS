var socket = io.connect('http://192.168.1.128:6677',{forceNew:true});
socket.on('messages', function(data){
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
    var div_msgs = document.getElementById('messages')
    div_msgs.innerHTML = html;
    div_msgs.scrollTop = div_msgs.scrollHeight
}

function addMessage(e){
    
    var message= {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    };
    document.getElementById('nickname').style.display='none'
    socket.emit('add-message', message);
    document.getElementById('text').value = "";
    return false;
}
function pulsar(e){
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("enviar").click();
    }
}
