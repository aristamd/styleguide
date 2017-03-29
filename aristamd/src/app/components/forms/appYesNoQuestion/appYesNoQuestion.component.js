class AppYesNoQuestionController {
  constructor() {
    var ctrl = this;

    ctrl.body = {
      response : '1',
    };

  }
}

let components = {
  template: require('./appYesNoQuestion.html'),
  controller: AppYesNoQuestionController,
};

export default components;
