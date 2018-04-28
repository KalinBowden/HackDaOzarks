const {app, BrowserWindow} = require('electron')
  const path = require('path')
  const url = require('url')
  
  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 600, height: 535})
  
    // and load the index.html of the app.
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
  }

  function createCreateAccount()
  {
      var caw = new BrowserWindow({width: 400, height: 700});
      caw.loadURL(url.format({
      pathname: path.join(__dirname, 'CreateAccount.html'),
      protocol: 'file:',
      slashes: true
    }));
  }
  
  app.on('ready', createWindow)