import ListItemTypeSelectController from './ListItemTypeSelectController.es6.js';
import ListItemTypeSelectTemplate from './ListItemTypeSelect.html';

class ListItemTypeSelect {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.controller = ListItemTypeSelectController;
    this.controllerAs = "vm"
    this.template = ListItemTypeSelectTemplate;
    this.scope = {};
    this.bindToController = {
      item: "=",
      types: "=",
      operations: "="
    }
  }

  link(scope, element, attr, ctr) {

  }

  static directiveFactory() {
    return new ListItemTypeSelect();
  }

}

export default ListItemTypeSelect.directiveFactory;
