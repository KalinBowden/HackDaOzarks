const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const notifyBtn = document.getElementById('CA')
const MP = document.getElementById('MP')
const AI = document.getElementById('AI')
const create = document.getElementById('create')
const addInv = document.getElementById('btnAdd');
var updated = require('jsonfile-updater');

// XML vars
var fs = require("fs");
var jsonUser = "";
var newOBJ;
var jsonAssets;
var newAsset;

var assetArray = [];
var yearArray = [];
var valueArray = [];

var count = 0;
var hold0;
var hold1;
var hold2;

// Create Account vars
var inputEmail4 = document.getElementById('inputEmail4')
var inputPassword4 = document.getElementById('inputPassword4')
var inputAddress = document.getElementById('inputAddress')
var inputAddress2 = document.getElementById('inputAddress2')
var inputCity = document.getElementById('inputCity')
var inputState = document.getElementById('inputState')
var inputZip = document.getElementById('inputZip')
var data = document.getElementById('data');

var win;

// log in
var exampleInputEmail1 = document.getElementById('exampleInputEmail1')
var exampleInputPassword1 = document.getElementById('exampleInputPassword1')

if (notifyBtn)
{
    notifyBtn.addEventListener('click', function() {
  const modalPath = path.join('file://', __dirname, 'CreateAccount.html')
 win = new BrowserWindow({ width: 550, height: 535 })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
})
}


if (MP)
{
    MP.addEventListener('click', function() {
    //
     if (exampleInputEmail1.value == newOBJ.user && exampleInputPassword1.value == newOBJ.pass){         
  const modalPath = path.join('file://', __dirname, 'MainMenu.html')
  let win = new BrowserWindow({ width: 550, height: 535 })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.once('ready-to-show', () => {
  this.hide();
``})
  win.show()
     }
     else if (exampleInputEmail1.value != newOBJ.user){
         alert("Email does not exist")
     }
     else if (exampleInputPassword1.value != newOBJ.pass){
         alert("Invalid Email and Password combination")
     }
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
        

        var fs = require('fs');
        function getParsedPackage() {
            return JSON.parse(fs.readFileSync('./binDB/users.json'))
        }

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
newOBJ = JSON.parse(jsonUser);

 var readStream = fs.createReadStream("./binDB/assets.txt");


 var readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream('./binDB/assets.txt'),
    output: process.stdout,
    console: false
});

rd.on('line', function(line) {
    if (count == 3 && data)
    {
        count = 0;
        d = '<div class="row"><div class="col">'+hold0+'</div><div class="col">'+hold1+'</div><div class="col">'+hold2+'</div></div>';
        data.innerHTML += d;
    }

    if (count == 0)
    {
        hold0 = line;
    }
    else if (count == 1)
    {
        hold1 = line;
    }
    else if (count == 2)
    {
        hold2 = line;
    }
    count++
});

});


if (addInv)
{
    addInv.addEventListener('click', function()
    {
        var asset = document.getElementById('asset');
        var years = document.getElementById('years');
        var value = document.getElementById('value');

        var logger = fs.createWriteStream('./binDB/assets.txt', {
        flags: 'a' // 'a' means appending (old data will be preserved)
        })

        logger.write(asset.value + '\r\n') // append string to your file
        logger.write(years.value + '\r\n') // again
        logger.write(value.value + '\r\n') // again


    })
}

win.on('closed', function()
{
win.hide();
});