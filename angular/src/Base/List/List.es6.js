import ListItemController from './ListController.es6.js';
import ListItemTemplate from './List.html';

class List {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.controller = ListItemController;
    this.controllerAs = "vm";
    this.template = ListItemTemplate;
    this.scope = true;
    this.bindToController = {
    }
  }

  link(scope, element, attr, ctr) {
  }

  static directiveFactory() {
    return new List();
  }

}

export default List.directiveFactory;
