class HeaderDemoController {
  constructor($uibModal, $log, $document, $templateCache) {
    let ctrl = this;
   
    ctrl.$onInit = function(){
      ctrl.headerData = {
        left : 'Patient Name',
        expandend:false,
        cleft:$templateCache.get('content-left.html'),
        right:'Econsult Request 12345',
        cright:$templateCache.get('content-right.html'),
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
    });
  }
}
}

let headerDemo = {
  template: require('./header-expandable-demo.html'),
  controller: HeaderDemoController,
};

export default headerDemo;

