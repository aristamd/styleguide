class AppYesFreeTextNoQuestionController {
  constructor() {
    var ctrl = this;

    ctrl.body = {
      response : '1',
    };

  }
}

let appYesFreeTextNoQuestion = {
  template: require('./appYesFreeTextNoQuestion.html'),
  controller: AppYesFreeTextNoQuestionController,
};

export default appYesFreeTextNoQuestion;
