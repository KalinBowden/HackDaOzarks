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


// Create Account vars
var inputEmail4 = document.getElementById('inputEmail4')
var inputPassword4 = document.getElementById('inputPassword4')
var inputAddress = document.getElementById('inputAddress')
var inputAddress2 = document.getElementById('inputAddress2')
var inputCity = document.getElementById('inputCity')
var inputState = document.getElementById('inputState')
var inputZip = document.getElementById('inputZip')
var data = document.getElementById('data');

// log in
var exampleInputEmail1 = document.getElementById('exampleInputEmail1')
var exampleInputPassword1 = document.getElementById('exampleInputPassword1')

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
    //
     if (exampleInputEmail1.value == newOBJ.user && exampleInputPassword1.value == newOBJ.pass){         
  const modalPath = path.join('file://', __dirname, 'MainMenu.html')
  let win = new BrowserWindow({ width: 550, height: 535 })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
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
jsonAssets = fs.readFileSync("./binDB/assets.json");
newAsset = JSON.parse(jsonAssets);

var t = "";
for (var i = 0; i < newAsset.length; i++)
{
    t += newAsset[i];
}

alert(t);

if (data)
{
var d = "";

for (var i=0; i<newAsset.length; i++)
   for (var item in newAsset) {
       d += '<div class="row"><div class="col">'+JSON.parse(item)[asset]+'</div><div class="col">'+JSON.parse(item)[1]+'</div><div class="col">'+JSON.parse(item)[2]+'</div></div>'
   }

// for (var i = 0; i < 1; i++)
// {
//     d += '<div class="row"><div class="col">'+newAsset[i]+'</div><div class="col">'+newAsset[i]+'</div><div class="col">'+newAsset[i]+'</div></div>'
// }
    data.innerHTML = d;
}

});


if (addInv)
{
    addInv.addEventListener('click', function()
    {
        var asset = document.getElementById('asset');
        var years = document.getElementById('years');
        var value = document.getElementById('value');

        var myObj = { 
        "asset": asset.value,
        "years": years.value,
        "value": value.value };

        var content = JSON.stringify(myObj);

        fs.readFile('./binDB/assets.json', function (err, data) {
    var json = JSON.parse(data)
    json.push(content)

    fs.writeFile('./binDB/assets.json', JSON.stringify(json))
    });
    })
}