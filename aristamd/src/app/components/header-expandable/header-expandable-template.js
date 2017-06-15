export default function importTemplates($templateCache) {
      $templateCache.put('content-left.html', '<div class="col-sm-8 col-md-7 col-lg-6"><div><label class="amd__modal-content--right-align">Date of Birth</label><label>MM/DD/YYYY</label></div><div><label class="amd__modal-content--right-align">Age</label><label>##</label></div>'+
        '<div><label class="amd__modal-content--right-align">Gender</label><label>M/F</label></div><div><label class="amd__modal-content--right-align">Medical Record Number</label><label>987564123</label></div></div>'+
        '<div class="col-xs-12 col-md-5"><div><label>Home Address</label><div class="app__header-content-div">Address Line 1</div></div><div><label>Primary Phone</label><div class="app__header-content-div">(###)###-####</div><div></div>');
    	  $templateCache.put('content-right.html', 
    	  	'<div class="col-sm-12 no-padder"><div class="col-sm-5"></div><div class="col-sm-9 col-md-4 no-padder pull-right"><label class="amd__modal-content--left">Pending Assessments and Diagnostics </label><md-icon md-svg-icon="steppers-check" class="md-stepper-icon app__header-icon--align" role="img" aria-label="steppers-check"></md-icon></div></div>'+
    	  	'<div class="col-sm-12"><button class="btn btn-default app__header-btn pull-right" ng-click="$ctrl.test($event)">Routine Visit Note Captured <md-icon md-svg-icon="steppers-check" class="md-stepper-icon ng-scope" '+
    	  	'role="img" aria-label="steppers-check"></button></div>');
}