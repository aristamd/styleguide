class HeaderDemoController {
  constructor($uibModal, $log, $document) {
    let ctrl = this;
   
    ctrl.$onInit = function(){
      ctrl.headerData = {
        left : 'Patient Name',
        expandend:false,
        cleft:'<div class="row"><div class="col-xs-6"><p>Hola</p></div></div>',
        right:'Econsult Request 12345',
        cright:'',
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