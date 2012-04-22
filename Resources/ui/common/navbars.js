
exports.bottomBar = function(/* bool */ isCameraActive) {

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
};

exports.topBar = function() {

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

   var projectSelector = buttonHelper.
      blackButton({'title':'Project: HACK DAY',
                   'top':'10dp',
                   'left': '10dp'});

   projectSelector.addEventListener('click', function(e) {
      //bring up project selection menu
      alert("show project list");
   });

   var stageSelector = buttonHelper.
      blackButton({'title':'Stage: EMPATHIZE',
                   'top': '10dp',
                   'left': '10dp'});

   stageSelector.addEventListener('click', function(e) {
      //bring up stage selection menu
      alert("show design stage list");
   });

   // add buttons to top bar
   topBar.add(projectSelector);
   topBar.add(stageSelector);

   return topBar;
};
