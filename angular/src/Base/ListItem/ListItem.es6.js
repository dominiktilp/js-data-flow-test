'use strict';

import ListItemController from './ListItemController.es6.js';
import ListItemTemplate from './ListItem.html';

class ListItem {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.controller = ListItemController;
    this.controllerAs = "vm"
    this.template = ListItemTemplate;
    this.scope = {};
    this.bindToController = {
      item: "=",
      operations: "=",
      types: "="
    }
  }

  link(scope, element, attr, ctrl) {
    
  }

  static directiveFactory() {
    return new ListItem();
  }

}

export default ListItem.directiveFactory;
