const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const notifyBtn = document.getElementById('CA')
const MP = document.getElementById('MP')
const AI = document.getElementById('AI')
const create = document.getElementById('create')

// Create Account vars
var inputEmail4 = document.getElementById('inputEmail4')
var inputPassword4 = document.getElementById('inputPassword4')
var inputAddress = document.getElementById('inputAddress')
var inputAddress2 = document.getElementById('inputAddress2')
var inputCity = document.getElementById('inputCity')
var inputState = document.getElementById('inputState')
var inputZip = document.getElementById('inputZip')




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


// account creation
if (create)
{
    create.addEventListener('click', function()
{
    var temp = "";

    temp += inputEmail4.value;
    temp += " ";
    temp += inputPassword4.value;
    temp += " ";
    temp += inputAddress.value;
    temp += " ";
    temp += inputAddress2.value;
    temp += " ";
    temp += inputCity.value;
    temp += " "; 
    temp += inputState.value;
    temp += " ";
    temp += inputZip.value;
    temp += " ";

    alert(temp);    
} )
}


