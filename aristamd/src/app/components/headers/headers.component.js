class HeaderController {
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
        transitionTime:500
      };
      ctrl.data = {
        selectedIndex: 0,
      };
    }
 
    ctrl.open = function (size, parentSelector) {    
      var modalInstance = $uibModal.open({
        animation: true,
        component: 'appHeaderModal',
        size: size,
        resolve: {
          'data':ctrl.headerData,
        }
      });
    }
  }
}

let headers = {
  template: require('./header.html'),
  controller: HeaderController,
};

export default headers;