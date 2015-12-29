'use strict';

import ListItemHeadController from './ListItemHeadController.es6.js';
import ListItemHeadTemplate from './ListItemHead.html';

class ListItemHead {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.controller = ListItemHeadController;
    this.controllerAs = "vm"
    this.template = ListItemHeadTemplate;
    this.scope = {};
    this.bindToController = {
      item: "=",
      operations: "="
    }
  }

  link(scope, element, attr, ctr) {

  }

  static directiveFactory() {
    return new ListItemHead();
  }

}

export default ListItemHead.directiveFactory;
