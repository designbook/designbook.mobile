//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var CameraView = require('ui/CameraView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:true,
		exitOnClose:true
	});
		
	//construct UI
	var cameraView = new CameraView();
	if (cameraView !=  null) {
		// if camera is not available
		// just add the overlay (for testing)
		self.add(cameraView);
	}
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;