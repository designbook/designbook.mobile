//CameraView Component Constructor
function CameraView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	Titanium.Media.showCamera({
		overlay:self,
		showControls:false,
		
		success:function(event) {
			alert("camera success!");
		},
		cancel:function(event) {
			alert("camera cancel!");
		}
	});
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Titanium'),
		height:'auto',
		width:'auto'
	});
	
	//project select button
	var projectButton = Ti.UI.createButton({
		title: 'Project: HACK DAY',
		width: '100dp',
		height: '40dp',
		top: '60dp',
		left: '40dp'
	});
	projectButton.addEventListener('click', function(e) {
		//bring up project selection menu
		alert("show project list");
	});
	
	//design stage select button
	var stageButton = Ti.UI.createButton({
		title: 'Stage: DEFINE',
		width: '100dp',
		height: '40dp',
		top: '60dp',
		right: '40dp'
	});
	stageButton.addEventListener('click', function(e) {
		//bring up stage selection menu
		alert("show design stage list");
	});

	//camera button
	var cameraButton = Ti.UI.createButton({
		title: 'Camera',
		width: '100dp',
		height: '40dp',
		bottom: '60dp'
	});
	cameraButton.addEventListener('click', function(e) {
		//save image
		alert("click!");
	});

	//add buttons to UI	
	self.add(projectButton);
	self.add(stageButton);
	self.add(cameraButton);
	
	return self;
}

module.exports = CameraView;
