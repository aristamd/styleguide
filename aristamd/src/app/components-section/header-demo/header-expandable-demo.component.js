class HeaderDemoController {
  constructor($uibModal, $log, $document) {
    let ctrl = this;
   
    ctrl.$onInit = function(){
      ctrl.headerData = {
        left : 'Patient Name',
        expandend:false,
        cleft:'<div><div class="col-xs-12 col-md-4"><div><label>Date of Birth</label><label>MM/DD/YYYY</label></div><div><label>Age</label><label>##</label></div>'+
        '<div><label>Gender</label><label>M/F</label></div><div><label>Medical Record Number</label><label>987564123</label></div></div>'+
        '<div class="col-xs-12 col-md-5 content-left"><div><label>Home Address</label><label>Address Line 1</label></div><div><label>Primary Phone</label><label>(###)###-####</label><div></div></div>',
        right:'Econsult Request 12345',
        cright:'<div class="content-right pull-right"><div class="col-sm-7"><p>Pending Assessments and Diagnostics</p></div><div class="col-sm-3"><md-icon md-svg-icon="steppers-check" class="md-stepper-icon ng-scope"  role="img" aria-label="steppers-check"></div></div>',
        nudge:true,
        transitionTime:400
      };
      ctrl.data = {
        selectedIndex: 0,
      };
    }
 
    ctrl.open = function (size, parentSelector) {    
      var modalInstance = $uibModal.open({
        animation: true,
        component: 'headerModal',
        size: size,
        resolve: {
          'data':ctrl.headerData,
        }
      });
        modalInstance.result.then(function (selectedItem) {
           alert('a');
    });
  }
}
}

let headerDemo = {
  template: require('./header-expandable-demo.html'),
  controller: HeaderDemoController,
};

export default headerDemo;