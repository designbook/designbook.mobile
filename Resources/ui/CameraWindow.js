var win = Ti.UI.currentWindow;

var navbars = require('/ui/common/navbars');
var taggingView = require('/ui/TaggingView');
var buttonHelper = require('/ui/common/buttons');

var bottomBar = navbars.bottomBar(false);
var topBar = navbars.topBar();

// create the camera overlay
var overlay = Ti.UI.createView();
overlay.add(bottomBar);
overlay.add(topBar);

Titanium.Media.showCamera({

   showControls: false,
   allowEditing: false,
   autohide: false,
   saveToPhotoGallery: true,
   overlay: overlay,

   success:function(event) {
      // gets called after a picture is taken
      // save it, move to next view
      Ti.API.info('in success function');

      // place our picture into our window
      var imageView = taggingView.createView(event);
      win.add(imageView);

      // programatically hide the camera
      Ti.API.info('hiding camera');
      Ti.Media.hideCamera();
   },

   cancel:function(event) {
      alert("camera cancel!");
   },

   error:function(error) {
      if (error.code == Titanium.Media.NO_CAMERA) {

         var imageView = taggingView.createView({
            media: '/images/test.png'
         });
         win.add(imageView);

      } else {
         alert("Camera Error: " + error.code);
      }
   }
});
