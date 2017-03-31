class BloodPressureDateQuestionController {
  constructor() {
    var ctrl = this;

    ctrl.body = {
      response: new Date(),
      pressure:{
        systolic: 0,
        diastolic: 0,
      },
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

let bloodPressureDate = {
  template: require('./bloodPressureDateQuestion.html'),
  controller: BloodPressureDateQuestionController,
};

export default bloodPressureDate;
