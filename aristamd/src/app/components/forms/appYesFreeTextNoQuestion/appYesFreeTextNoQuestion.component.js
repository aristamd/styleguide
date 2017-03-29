class AppYesFreeTextNoQuestionController {
  constructor() {
    var ctrl = this;

    ctrl.body = {
      response : '1',
    };

  }
}

let components = {
  template: require('./appYesFreeTextNoQuestion.html'),
  controller: AppYesFreeTextNoQuestionController,
};

export default components;
