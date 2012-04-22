/**
 * Helper methods for creating various
 * styled buttons for designbook
 */

var _ = require('/lib/underscore');

var defaultBtnStyle = {
   color: 'white',
   backgroundColor: 'black',
   width: Ti.UI.SIZE,
   height: '40dp',
   top: '10dp',
   left: '10dp',
   style: Ti.UI.iPhone.SystemButtonStyle.PLAIN,
   font: {fontSize: 11, font: 'Helvetica'}
};

exports.blackButton = function(params) {

   // make some space around the text
   params.title = "  " + params.title + "  "

   _.defaults(params, defaultBtnStyle);
   var button = Ti.UI.createButton(params);

   return button;
};

exports.tagButton = function(params) {

   // make some space around the text
   params.title = "  " + params.title + "  "

   var tagDefaults = _.defaults({

      borderColor: 'black',
      borderWidth: '1',
      backgroundColor: 'gray',
      backgroundFocusedColor: 'black'

   }, defaultBtnStyle);

   _.defaults(params, tagDefaults);
   var button = Ti.UI.createButton(params);

   return button;
};

