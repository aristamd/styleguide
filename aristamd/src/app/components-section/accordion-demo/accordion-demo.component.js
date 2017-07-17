class AccordionDemoController {
  constructor($scope, $uibModal, $timeout, communicationCenterService) {
  }

  $onInit() {

    this.headerContent1 = '<accordion-header-1></accordion-header-1>';
    this.headerContent2 = '<accordion-header-2></accordion-header-2>';
    this.bodyContent = require('./accordion-content.template.html');

     this.options = [
    {
      name:'header-content',
      type:'string',
      description:'Content for the accordion header. This accepts html, directives and components.'
    },
    {
      name:'body-content',
      type:'string',
      description:'Content for the body header. This accepts html, directives and components.'
    },
    {
      name:'id',
      type:'string',
      description:'Component id. Unique identifier added to the html and used to create the communication channel.'
    },
    ]
  }
}

const accordionDemo = {
  template: require('./accordion-demo.html'),
  controller: AccordionDemoController,
}

export default accordionDemo;
