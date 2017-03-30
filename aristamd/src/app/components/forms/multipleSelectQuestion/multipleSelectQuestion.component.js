class MultipleSelectQuestionController {
  constructor() {
    var ctrl = this;

    ctrl.choices = [
      'Choice 1',
      'Choice 2',
      'Choice 3',
      'Choice 4'
    ];

    ctrl.body = {
      choices : [ctrl.choices[0]],
    };

    ctrl.toggleSelection = function (selection) {
      let index = ctrl.body.choices.indexOf(selection);
      if( index === -1 ){
        ctrl.body.choices.push(selection);
      } else {
        ctrl.body.choices.splice(index, 1);
      }
    }

  }
}

let multipleSelect = {
  template: require('./multipleSelectQuestion.html'),
  controller: MultipleSelectQuestionController,
};

export default multipleSelect;
