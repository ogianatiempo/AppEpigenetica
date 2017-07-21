var electron = require('electron')

electron.app.on('ready', function () {
 var mainWindow = new electron.BrowserWindow({width: 800, height: 600,
    titleBarStyle: 'hidden',
    icon: __dirname + '/assets/icons/png/64x64.png'
 })
 mainWindow.loadURL('file://' + __dirname + '/index.html')
})
