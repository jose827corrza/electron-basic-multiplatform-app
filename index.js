const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      title: "Basic Electron",
      center: true,
      // show:false,
    })
  
    win.loadURL('https://devdocs.io').then(() => {
      const currentURL = win.webContents.getURL();
      console.log(currentURL);
    })
    win.show();
  }
  app.dock.setMenu()
  app.whenReady().then(() => {
    createWindow();
  });

  