import ListItemEditController from './ListItemEditController.es6.js';
import ListItemEditTemplate from './ListItemEdit.html';

class ListItemEdit {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.controller = ListItemEditController;
    this.controllerAs = "vm"
    this.template = ListItemEditTemplate;
    this.scope = {};
    this.bindToController = {
      item: "=",
      operations: "="
    }
  }

  link(scope, element, attr, ctr) {

  }

  static directiveFactory() {
    return new ListItemEdit();
  }

}

export default ListItemEdit.directiveFactory;
