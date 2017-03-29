class AppYesNoQuestionController {
  constructor() {
    var ctrl = this;

    ctrl.body = {
      response : '1',
    };

  }
}

let appYesNoQuestion = {
  template: require('./appYesNoQuestion.html'),
  controller: AppYesNoQuestionController,
};

export default appYesNoQuestion;
