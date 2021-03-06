/*
 * Single Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 2.0 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 2.0 or later');
}
else if (Ti.Platform.osname === 'mobileweb') {
	alert('Mobile web is not yet supported by this template');
}
else {
	
	// setup some pre-load settings
	// iphone app settings
	Titanium.UI.iPhone.statusBarHidden = true;

	//require and open top level UI component
	var ApplicationWindow = require('ui/ApplicationWindow');
	new ApplicationWindow().open();
}
