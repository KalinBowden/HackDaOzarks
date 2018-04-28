const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const notifyBtn = document.getElementById('CA')
const MP = document.getElementById('MP')
const AI = document.getElementById('AI')


if (notifyBtn)
{
    notifyBtn.addEventListener('click', function() {
  const modalPath = path.join('file://', __dirname, 'CreateAccount.html')
  let win = new BrowserWindow({ width: 550, height: 535 })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
})
}


if (MP)
{
    MP.addEventListener('click', function() {
  const modalPath = path.join('file://', __dirname, 'MainMenu.html')
  let win = new BrowserWindow({ width: 550, height: 535 })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
})
}


if (AI)
{
    AI.addEventListener('click', function() {
  const modalPath = path.join('file://', __dirname, 'AddInventoy.html')
  let win = new BrowserWindow({ width: 550, height: 535 })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
})
}