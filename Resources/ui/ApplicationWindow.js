// designbook application scope
var db = {};

//Application Window Component Constructor
function ApplicationWindow() {

   //create component instance
   var self = Ti.UI.createWindow({
      title: 'Main designbook Window',
      backgroundColor:'#ffffff',
      navBarHidden:true,
      exitOnClose:true
   });

   var cameraWindow = Ti.UI.createWindow({
      url: '/ui/CameraWindow.js',
      title: 'CameraWindow'
   });
   cameraWindow.open();

   return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;