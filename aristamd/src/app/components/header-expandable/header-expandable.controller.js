export default class HeaderExpandableController {
  constructor() {
    var ctrl = this;

    ctrl.$onInit = function $onInit() {
      // Upload options 
      ctrl.isExpanded = ctrl.isExpanded ? ctrl.isExpanded : false;
  	  ctrl.nudge = ctrl.nudge ? ctrl.nudge : true;
  	  ctrl.transitionTime = ctrl.transitionTime ?  ctrl.transitionTime : 300;
      ctrl.time = 0 ;
      ctrl.onProcess = false; // flag that avoid multiple cliks on the header
    };
    
    /*Functin that allow users copy the text of the accordion without collapsed*/
    ctrl.mouseDown = function () {
      if (!ctrl.onProcess) {
        ctrl.promise = setInterval(function () { 
        ctrl.time = ctrl.time + 1;
        ctrl.onProcess = true;
        }, 100);
      }
    };

    ctrl.mouseUp = function () {
      clearInterval(ctrl.promise);
      ctrl.onProcess = false;
    };

  }
}