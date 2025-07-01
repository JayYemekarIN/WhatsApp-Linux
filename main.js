const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: true, // ✅ Change to true to show window controls
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      webviewTag: true
    },
    icon: path.join(__dirname, 'assets/icon.png')
  });

  // ✅ Optional - set modern Chrome user agent
  win.webContents.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
  );

  win.loadFile('index.html');
  Menu.setApplicationMenu(null);
}

app.whenReady().then(createWindow);
