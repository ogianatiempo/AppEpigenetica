var remote = require('electron').remote
var fs = require('fs')
window.$ = window.jQuery = require('jquery')
require('bootstrap')

function save () {
 remote.getCurrentWindow().webContents.printToPDF({
   portrait: false
 }, function (err, data) {
   fs.writeFile('informe.pdf', data, function (err) {
     if (err) alert('error generating pdf! ' + err.message)
     else alert('informe guardado como pdf!')
   })
 })
}

window.addEventListener('keydown', function (e) {
  if (e.keyCode == 80) save()
})

$("#btn-print").click(function(){
  save()
})

$(document).ready(function(){
  $("body").append("<p>Hola</p>");
})
