class WholeNumberDateQuestionController {
  constructor() {
    var ctrl = this;

    ctrl.body = {
      response: new Date(),
      number: 0,
    };

    ctrl.isPickerOpened = false;

    ctrl.openPicker = function() {
      ctrl.isPickerOpened = true;
    };

    ctrl.dateOptions = {
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };

  }
}

let wholeNumberDate = {
  template: require('./wholeNumberDateQuestion.html'),
  controller: WholeNumberDateQuestionController,
};

export default wholeNumberDate;
