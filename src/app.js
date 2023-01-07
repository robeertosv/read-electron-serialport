const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createWin() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadURL(path.join(__dirname, 'views/index.html'));
}

app.on('ready', () => {
    createWin()
})