export default function importTemplates($templateCache) {
      $templateCache.put('content-left.html', '<div><div class="col-xs-12 col-md-4"><div><label>Date of Birth</label><label>MM/DD/YYYY</label></div><div><label>Age</label><label>##</label></div>'+
        '<div><label>Gender</label><label>M/F</label></div><div><label>Medical Record Number</label><label>987564123</label></div></div>'+
        '<div class="col-xs-12 col-md-4 content-left"><div><label>Home Address</label><label>Address Line 1</label></div><div><label>Primary Phone</label><label>(###)###-####</label><div></div></div>');
    	  $templateCache.put('content-right.html', '<div class="content-right pull-right"><div class="col-sm-7"><p>Pending Assessments and Diagnostics</p></div><div class="col-sm-3"><md-icon md-svg-icon="steppers-check" class="md-stepper-icon ng-scope"  role="img" aria-label="steppers-check"></div></div>');
}