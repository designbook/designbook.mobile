//CameraView Component Constructor
var CameraView = function(w1in) {

   var navbars = require('/ui/common/navbars');
   var bottomBar = navbars.createBottomBar(false);

   var topBar = TopBar();

   // create the camera overlay
   var overlay = Ti.UI.createView();
   overlay.add(bottomBar);
   overlay.add(topBar);

   // don't show camera if not present (for simulator testing)'
   if (Titanium.Media.isCameraSupported == false) {
      // just render the overlay
      return overlay;
   }

   Titanium.Media.showCamera({
      showControls: false,
      allowEditing: false,
      autohide: false,
      saveToPhotoGallery: true,
      overlay: overlay,

      success:function(event) {
         // gets called after a picture is taken
         // save it, move to next screen
         Ti.API.info('in success function');
         // place our picture into our window
         var imageView = Ti.UI.createImageView({
            image: event.media,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
         });

         var testLabel = Ti.UI.createLabel({
            width: '100dp',
            height: '50dp',
            title: 'TESTING THIS IMAGE',
            color: 'white',
         });
         
         imageView.add(testLabel);

         // programatically hide the camera
         Ti.Media.hideCamera();
      },
      cancel:function(event) {
         alert("camera cancel!");
      },
      error:function(error) {
         if (error.code == Titanium.Media.NO_CAMERA) {
            alert("No camera here.")
         } else {
            alert("Camera Error: " + error.code);
         }
      }
   });

   return null;
}

module.exports = CameraView;

var TopBar = function() {
	
   var topBar = Ti.UI.createView({
      backgroundColor: 'transparent',
       opacity: 0.7,
       top: 0,
       left: 0,
       right: 0,
       height: 60,
       layout: 'horizontal',
       color: 'white'
   });

   var projectSelector = Ti.UI.createButton({
      title: 'Project: HACK DAY',
       backgroundColor: 'black',
       width: '120dp',
       height: '30dp',
       top: '10dp',
       left: '10dp',
       style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
       font: { fontSize: 11, font: 'Helvetica'}
   });

   projectSelector.addEventListener('click', function(e) {
      //bring up project selection menu
      alert("show project list");
   });

   var stageSelector = Ti.UI.createButton({
      title: 'Stage: DEFINE',
       backgroundColor: 'black',
       width: '100dp',
       height: '30dp',
       top: '10dp',
       left: '10dp',
       style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
       font: { fontSize: 11, font: 'Helvetica'}
   });

   stageSelector.addEventListener('click', function(e) {
      //bring up stage selection menu
      alert("show design stage list");
   });

   // add buttons to top bar
   topBar.add(projectSelector);
   topBar.add(stageSelector);
   
   return topBar;
}
