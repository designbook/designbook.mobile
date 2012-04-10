var BottomBar = function(/* bool */ isCameraActive) {

   var bottomBar = Ti.UI.createView({
      backgroundColor: 'black',
      height: 50,
      bottom: 0,
      left: 0,
      right: 0,
      layout: 'horizontal',
      color: 'white'
   });

   // TODO: initialize using a global constants list
   // //if (isCameraActive) {
      //cameraImg = ACTIVE_CAMERA_BUTTON;
   //} else {
      //cameraImg = PASSIVE_CAMERA_BUTTON;
   //}

   //camera button
   var cameraButton = Ti.UI.createButton({
      title: 'Click',
      width: '90dp',
      height: '40dp',
      style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
      font: { fontSize: 11, font: 'Helvetica'}
   });

   // list all projects
   var projectsButton = Titanium.UI.createButton({
      title: 'All Projects',
      width: '110dp',
      height: '40dp',
      left: '0dp',
      style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
      font: { fontSize: 11, font: 'Helvetica'}
   });

   projectsButton.addEventListener('click', function(e) {
      // load the all projects window
      alert("list all projects");
   });

   cameraButton.addEventListener('click', function(e) {
      // capture an image. 
      Ti.API.info('about to picture');
      Ti.Media.takePicture();
   });

   // build the bottom bar
   bottomBar.add(projectsButton);
   bottomBar.add(cameraButton);

   return bottomBar;
}

exports.createBottomBar = BottomBar;
