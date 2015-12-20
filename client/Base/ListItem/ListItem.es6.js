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
      item: "="
    }
  }

  link(scope, element, attr, ctr) {

  }

  static directiveFactory() {
    return new ListItem();
  }

}

export default ListItem.directiveFactory;
