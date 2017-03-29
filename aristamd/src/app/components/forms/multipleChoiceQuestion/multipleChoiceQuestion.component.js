class MultipleChoiceQuestionController {
  constructor() {
    var ctrl = this;

    ctrl.body = {
      response : '1',
    };

  }
}

let multipleChoice = {
  template: require('./multipleChoiceQuestion.html'),
  controller: MultipleChoiceQuestionController,
};

export default multipleChoice;
