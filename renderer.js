const { ipcRenderer } = require("electron");

const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");

let appAbierta = false;

openButton.addEventListener('click', () => {
    if(!appAbierta){
        ipcRenderer.send("openApp");
        openButton.className = "btn btn-secondary";
        closeButton.className = "btn btn-primary";
        appAbierta = true;
    }
});

closeButton.addEventListener('click', () => {
    if(appAbierta) {
        ipcRenderer.send("closeApp");
        closeButton.className = "btn btn-secondary";
        openButton.className = "btn btn-primary";
        appAbierta = false;
    }
});

const a = document.createElement('div');
a.innerHTML = "holaaaa";
document.body.appendChild(a);