class MultipleChoiceFreeTextQuestionController {
  constructor() {
    var ctrl = this;

    ctrl.choices = [
      'Choice 1',
      'Choice 2',
      'Choice 3',
      'Choice 4'
    ];

    ctrl.body = {
      response : ctrl.choices[0],
    };

  }
}

let multipleChoiceFreeText = {
  template: require('./multipleChoiceFreeTextQuestion.html'),
  controller: MultipleChoiceFreeTextQuestionController,
};

export default multipleChoiceFreeText;
