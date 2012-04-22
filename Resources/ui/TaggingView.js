/**
 * Create view for tagging captured image.
 * This view is used on the CameraWindow
 */

var navbars = require('/ui/common/navbars');
var buttons = require('/ui/common/buttons');
var dProcess = require('/data/designProcess');

var _ = require('/lib/underscore');

var CURRENT_STAGE = 'define';

exports.createView = function(event) {

   var container = Ti.UI.createView({
      top: 0,
      left: 0,
      width: Ti.UI.FILL,
      height: Ti.UI.FILL,
      backgroundColor: 'white',
      layout: 'vertical'
   });

   var imageView = Ti.UI.createImageView({
       image: event.media,
       top: 0,
       left:0,
       height: '50%',
   });

   var topBar = navbars.topBar();
   var tagBar = tagSelection();

   container.add(topBar);
   container.add(imageView);
   container.add(tagBar);

   return container;
};

var tagSelection = function() {

   var tagSelectionBar = Ti.UI.createView({
      width: Ti.UI.FILL,
      height: '50dp',
      layout: 'horizontal',
      opacity: '0.8'
   });

   //var buttons =
      //_.map(dProcess.process[CURRENT_STAGE],
            //buttons.tagButton);

   for (var activity in dProcess.process[CURRENT_STAGE]) {
      tagSelectionBar.add(
            buttons.tagButton({
               title: dProcess.process[CURRENT_STAGE][activity]
            }));
   }

   return tagSelectionBar;
};

