class AppYesNoFreeTextQuestionController {
  constructor() {
    var ctrl = this;

    ctrl.body = {
      response : '1',
    };

  }
}

let appYesNoFreeText = {
  template: require('./appYesNoFreeTextQuestion.html'),
  controller: AppYesNoFreeTextQuestionController,
};

export default appYesNoFreeText;
