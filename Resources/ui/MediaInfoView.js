/*
 * Tag and add notes to a captured media
 */

stage = 'define';
activities = ['Personas', 'Touch Points', 'Affinity Diagrams', 
              'Empathy Maps', 'Process Flowcharts', 'Ecosystem Maps'];

var navbars = require('/ui/common/navbars');
var bottomBar = navbars.createBottomBar(false);

var infoView = Titanium.UI.createView({
   top: 0,
   bottom: 0,
   left: 0,
   right: 0,
   layout: 'vertical'
});

var imgView = Titanium.UI.createView({
   image: media,
   left: '20dp',
   right: '20dp',
   top: '20dp',
   height: '50%',
});

var createActivities = function(this_stage, this_activities) {

   var activityTagsView = Titanium.UI.createView({
      left: '10dp',
      right: '10dp',

      layout: 'horizontal',

   });

   for (activity in this_activities) {
      var activityButton = Titanium.UI.createButton({
         title: activity,
         left: '10dp',
         width: 'auto',
         height: '40dp'
      });
      activityTagsView.add(activityButton);
   }

   return activityTagsView;
}

var activityTagsView = createActivities(stage, activities);

infoView.add(imgView);
infoView.add(tagView);
infoView.add(notesView);
infoView.add(bottomBar);

