class DateQuestionController {
  constructor() {
    var ctrl = this;

    ctrl.body = {
      response: new Date(),
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

let date = {
  template: require('./dateQuestion.html'),
  controller: DateQuestionController,
};

export default date;
