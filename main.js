/*WHAT THIS PAGE IS FOR:

This page is used for initializing and handling windows, handling IPC messages,
and various other things.

*/


const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

//General electron stuff
const path = require('path')
const url = require('url')
require ('electron-reload')(__dirname)


//This keeps your window looking like it last did!
const windowStateKeeper = require('electron-window-state')


//Set the app name:
app.setName("Tabbimajig");


//File system reader.
const fs = require("fs");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let editWindow;




function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 640, height: 480, show: false})
  // Create the edit window (for entering URLs).
  editWindow = new BrowserWindow({width: 400, height: 75, show: false, parent: mainWindow, frame: false})

  //Load the home.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'home.html'),
    protocol: 'file:',
    slashes: true
  }))

  //Load the edit.html of the app.
  editWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'edit.html'),
    protocol: 'file:',
    slashes: true
  }))

  //Shows nothing until everything is loaded.
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  })

  //Normaly I have the DevTools open, but I don't think it's necessary for
  //demonstration purposes, given the "unfinishedness" of everything.
  //However, if you're brave, just uncomment below. ;)

  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  // Emitted when the window is closed.
  editWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    editWindow = null
  })

}



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})


const {ipcMain} = require('electron')

//A silly test to see how IPC worked. :)
ipcMain.on('hey', function() {
  console.log('hey');  // prints "eorn"
  //event.sender.send('eorn', data.toString())
})

//This gets printed to the console upon clicking "edit" next to an URL.
//arg = the URL string
//arg2 = the URL ID
ipcMain.on('editAnUrl', function(event, arg, arg2) {
  console.log('passing In URL: ' + arg + "_" + arg2);
  editWindow.show();

  editWindow.webContents.send('editAnUrl', arg, arg2);
})

//This gets printed to the console upon clicking "save" in the editWindow.
//arg = the URL string
//arg2 = the URL ID
ipcMain.on('saveAnUrl', function(event, arg, arg2, arg3) {
  console.log('Saving URL: ' + arg + "_" + arg3);
  editWindow.hide();

  mainWindow.webContents.send('saveAnUrl', arg, arg2, arg3);
})

//If the user doesn't want to edit an URl after all...
ipcMain.on('cancelEdit', function() {
  editWindow.hide();
})


//
ipcMain.on('my-msg', function (event, arg) {
  editWindow.webContents.send('my-msg', arg);
});



ipcMain.on('good', function(event, arg) {
  console.log('Saving good: '+ arg);

  mainWindow.webContents.send('good', arg);
})


ipcMain.on('sendTab', function(event, arg, arg2) {
  console.log(`got day ${arg2} tab: ${arg}`);

  mainWindow.webContents.send('deliverTab', arg, arg2);
})

ipcMain.on('sendURL', function(event, arg, arg2) {
  console.log(`got day ${arg2} url: ${arg}`);

  mainWindow.webContents.send('deliverURL', arg, arg2);
})

ipcMain.on('callForTabsAndURLs', function(event, index) {
  console.log('day = ' + index);

  mainWindow.webContents.send('getTabsAndURLs', index);
})
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
