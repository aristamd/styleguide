class FormsController {
  constructor() {
    let ctrl = this;

    ctrl.dateOptions = {
      dateDisabled: false,
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };
  }
}

let forms = {
  template: require('./forms.html'),
  controller: FormsController,
};

export default forms;
