const { BrowserWindow, app, ipcMain } = require("electron");
const path = require("path");
const Bot = require('./core.js');


function createWindow(){
    const window =  new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js'),
        }
    });
    window.loadFile('index.html');
}


async function main(){
    await app.whenReady();
    createWindow();
}

ipcMain.on("openApp", (event) =>{
    Bot.create();
});

ipcMain.on("closeApp", (event, args) =>{
    Bot.close();
});

ipcMain.on("load-qr", (event, args) =>{
    console.log("hola");
});
main();
