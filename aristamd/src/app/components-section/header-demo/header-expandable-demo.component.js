class HeaderDemoController {
  constructor($uibModal, $log, $document, $templateCache) {
    let ctrl = this;
   
    ctrl.$onInit = function(){
      ctrl.headerData = {
        left : 'Patient Name',
        expandend:false,
        cleft:$templateCache.get('content-left.html'),
        right:'eConsult Request 12345',
        cright:$templateCache.get('content-right.html'),
        nudge:true,
        transitionTime:400
      };
      ctrl.options = [
      {
        name:'isExpanded',
        type:'boolean (Default: false)',
        description:'If the header is expanded as default.'
      },
      {
        name:'titleLeft',
        type:'string',
        description:'Title on the top left'
      },
      {
        name:'contentLeft',
        type:'string',
        description:'Content that is on the left column of the header'
      },
      {
        name:'titleRight',
        type:'string',
        description:'Title on the top right'
      },
      {
        name:'contentRight',
        type:'string',
        description:'Content that is on the right column of the header'
      },
      {
        name:'nudge',
        type:'boolean (Default: true)',
        description:'Property that enable the on mouseover and on mouseout animation.'
      },
       {
        name:'transitionTime',
        type:'number (300 ms default)',
        description:'Transition time for the animations'
      },
       {
        name:'app-header-directive ',
        type:'directive (required)',
        description:'Directive Required to apply the animations'
      },

      ]
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

