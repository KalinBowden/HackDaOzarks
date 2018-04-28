const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const notifyBtn = document.getElementById('CA')

notifyBtn.addEventListener('click', function() {
  const modalPath = path.join('file://', __dirname, 'CreateAccount.html')
  let win = new BrowserWindow({ width: 400, height: 200 })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
})