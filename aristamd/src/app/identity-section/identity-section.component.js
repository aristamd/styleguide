class IdentityController {
  constructor() {
    this.message = 'Hello Arista';
  }
}

let identity = {
  template: require('./identity-section.html'),
  controller: IdentityController
};


export default identity;
