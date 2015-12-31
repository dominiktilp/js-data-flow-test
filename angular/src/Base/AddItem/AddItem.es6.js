import AddItemController from './AddItemController.es6.js';
import AddItemTemplate from './AddItem.html';

class AddItem {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.controller = AddItemController;
    this.controllerAs = "vm";
    this.template = AddItemTemplate;
    this.scope = true;
    this.bindToController = {
      operations: "="
    }
  }

  link(scope, element, attr, ctr) {
  }

  static directiveFactory() {
    return new AddItem();
  }

}

export default AddItem.directiveFactory;
