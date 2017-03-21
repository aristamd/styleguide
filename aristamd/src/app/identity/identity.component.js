class IdentityController {
  constructor() {
    this.message = 'Hola, Jose';
  }
}

let identity = {
  template: require('./identity.html'),
  controller: IdentityController
};


export default identity;
