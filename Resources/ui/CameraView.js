//CameraView Component Constructor
function CameraView() {

   var overlay = Ti.UI.createView();

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

   var bottomBar = Ti.UI.createView({
      backgroundColor: 'black',
       height: 50,
       bottom: 0,
       left: 0,
       right: 0,
       layout: 'horizontal',
       color: 'white'
   });

   //camera button
   var cameraButton = Ti.UI.createButton({
      title: 'Camera',
       width: '90dp',
       height: '40dp',
       style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
       font: { fontSize: 11, font: 'Helvetica'}
   });

   cameraButton.addEventListener('click', function(e) {
      //save image
      alert("click!");
   });

   var projectsButton = Titanium.UI.createButton({
      title: 'All Projects',
       width: '110dp',
       height: '40dp',
       left: '0dp',
       style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
       font: { fontSize: 11, font: 'Helvetica'}
   });

   // build the bottom bar
   bottomBar.add(projectsButton);
   bottomBar.add(cameraButton);

   //add buttons to UI
   overlay.add(cameraButton);
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
         alert("camera success!");
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
