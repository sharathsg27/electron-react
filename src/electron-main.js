const electron = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

const {app, BrowserWindow} = electron;

//Create main window
function createMainWindow () {
    const windowOptions = {
        width: 1080,
        minWidth: 680,
        height: 840,
        title: 'Electron-React'
    };

    mainWindow = new BrowserWindow(windowOptions);

    mainWindow.loadURL('http://localhost:3000');

    //Debug mode
    mainWindow.webContents.openDevTools();
}

//When the App is ready
app.on('ready', ()=> {
   createMainWindow();
});


//When all the app windows are closed
app.on('window-all-closed', ()=> {
   if (process.platform !== 'darwin') {
       app.quit();
   }
});

//Activate Window
app.on('activate', () => {
    if (mainWindow === null) {
        createMainWindow();
    }
});