const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const notifyBtn = document.getElementById('CA')
const MP = document.getElementById('MP')
const AI = document.getElementById('AI')
const create = document.getElementById('create')

// XML vars
var fs = require("fs");
var jsonUser = "";


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
        
        var email = inputEmail4.value;
        var password = inputPassword4.value;
        var address = inputAddress.value;
        var address2 = inputAddress2.value;
        var city = inputCity.value;
        var state = inputState.value;
        var zip = inputZip.value;

        var myObj = { 
        "user": email,
        "pass": password,
        "add": address,
        "add2": address2,
        "city": city,
        "st": state,
        "zip": zip };

        var content = JSON.stringify(myObj);

        fs.writeFile("./binDB/users.json", content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }

        alert("The file was saved!");
    });

    } )
}


document.addEventListener("DOMContentLoaded", function()
{
jsonUser = fs.readFileSync("./binDB/users.json");
var newOBJ = JSON.parse(jsonUser);
alert(newOBJ.user + " " + newOBJ.pass)
});