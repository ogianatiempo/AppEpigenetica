// Requirements
var remote = require('electron').remote
var fs = require('fs')
const storage = require('electron-storage');
window.$ = window.jQuery = require('jquery')
require('bootstrap')

// Save functions
function save_pdf () {
 remote.getCurrentWindow().webContents.printToPDF({
   portrait: false
 }, function (err, data) {
   fs.writeFile('informe.pdf', data, function (err) {
     if (err) alert('error generating pdf! ' + err.message)
     else alert('informe guardado como pdf!')
   })
 })
}

// Event listeners
window.addEventListener('keydown', function (e) {
  if (e.keyCode == 80) {
  };
});

$("#btn-print").click(function(){
  save_pdf()
})

$("#btn-save").click(function(){
  alert($("#nombre").val());
  alert($("#texto").val())
})
