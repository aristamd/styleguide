class MultipleChoiceQuestionController {
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

let multipleChoice = {
  template: require('./multipleChoiceQuestion.html'),
  controller: MultipleChoiceQuestionController,
};

export default multipleChoice;
