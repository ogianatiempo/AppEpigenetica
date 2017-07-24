// Requirements
var remote = require('electron').remote
var fs = require('fs')
window.$ = window.jQuery = require('jquery')
require('bootstrap')

// Smooth scroll
$('a[href*=\\#]').on('click', function(event){
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
});

// Save functions
function save_data (fileName, content) {
  fs.writeFile(fileName, content, (err) => {
        if(err){
            console.error("An error ocurred creating the file "+ err.message);
        };
        alert("The file has been succesfully saved");
    });
}

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

// Random video
var videos = fs.readdirSync('assets/videos/')
var random_video = videos[Math.floor(Math.random() * videos.length)]

var video = $('<video />', {
    id: 'video',
    src: 'assets/videos/'+random_video,
    type: 'video/mp4',
    controls: true
});

$(document).ready(function() {
  video.appendTo($('#video_div'));
});

// Event listeners
window.addEventListener('keydown', function (e) {
  if (e.keyCode == 80) {
  };
});

$("#btn-print").click(function(){
  save_pdf()
})

$("#btn-save").click(function(){
  let fileName = $("#nombre").val()+".txt";
  let content = $("#texto").val();
  save_data(fileName, content);
})
