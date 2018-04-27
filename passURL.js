/*WHAT THIS PAGE IS FOR:

Dealing with the editWindow operations.

*/



const {ipcRenderer} = require('electron');

//Verifying the darn thing actually got the message, then use message data
ipcRenderer.send('good', 'haie');
var idToSend = '';
var oldURL = '';
ipcRenderer.on('editAnUrl', function(event, arg, arg2){
  console.log("got it!!! " + arg + "_" + arg2);
    $('.enterArea').val(arg);
    oldURL = arg;
    idToSend = arg2;
});





$('.saveURLTab').on('mouseup', function() {
  ipcRenderer.send('saveAnUrl', $('.enterArea').val(), oldURL, idToSend);
});

$(document).keypress(function(e) {
  if (e.which == 13) { //Enter
    e.preventDefault();
    ipcRenderer.send('saveAnUrl', $('.enterArea').val(), oldURL, idToSend);
  }
});


$('.cancelURLTab').on('mouseup', function() {
  ipcRenderer.send('cancelEdit');
});

$(document).keydown(function(e) {
  if (e.which == 27) { //Escape
    e.preventDefault();
    ipcRenderer.send('cancelEdit');
  }
});

ipcRenderer.on('saveAnUrl', function(event, arg, arg2, arg3){
  console.log("okay");
});


/*
var ipc = require('electron').ipcRenderer;
ipc.on('my-msg', function(e, arg) {
  console.log('this was sent from win1', arg);

  $('.enterArea').val(arg);
});
*/
