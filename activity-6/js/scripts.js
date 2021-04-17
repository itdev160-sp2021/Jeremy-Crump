//Array
var messages = [];

// Message Type
var messageType = {
    out: 'out-message',
    in: 'in=message',
    unknown: 'unknown-message'
};

function Message(type,user,message){
    this.type = type;
    this.user = user;
    this.message = message;
}
//function to create and return an element for the supplied
function createMessageElement(message) {

//create text element for the message
var messageText = document.createTextNode(message.user + ': ' + message.message);

//Create the element and add the message text
var messageEl = document.createElement('div');
messageEl.appendChild(messageText);

//Add a class using the message type
messageEl.className = message.type;

return messageEl;
}

// button click event handler to add a message
function addMessageHandler(event){
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messageContainerEl = document.getElementById('message-container');

    //Determine message type and set message variables accordingly
    switch(event.target.id){
        case 'send-button':
            user = "Jeremy";
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Jon';
            type = messageType.in;
            break;
        default:
            user = 'Unknown';
            type = messageType.unknown;
    }

    //Create new message

    if(messageInput.value != ''){
        //Construct a message and it adds to the array
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        //Create a message element
        var el = createMessageElement(message);

        //Add the message element to the DOM
        messagesContainerEl.appendChild(el);

        //reset input
        messageInput.value = '';
    }
}
    //load view with pre-loaded messages
    var messagesContainerEl = document.getElementById('message-container');

    for(var i=0; i< messages.length; i++){
        var message = messages[i];
        var el = createMessageElement(message);

        messagesContainerEl.appendChild(el);
    }


var init = function(){
    //Wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;


};

init();
