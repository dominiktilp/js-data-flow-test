import ListItemTypeController from './ListItemTypeController.es6.js';
import ListItemTypeTemplate from './ListItemType.html';

class ListItemType {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.controller = ListItemTypeController;
    this.controllerAs = "vm"
    this.template = ListItemTypeTemplate;
    this.scope = {};
    this.bindToController = {
      type: "=",
      operations: "="
    }
  }

  link(scope, element, attr, ctr) {

  }

  static directiveFactory() {
    return new ListItemType();
  }

}

export default ListItemType.directiveFactory;
