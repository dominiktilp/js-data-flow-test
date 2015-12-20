'use strict';

class ListController {
  constructor() {
    this.items = [];
  }

  addItem() {
    this.items.push({id: Math.random().toString(36).substr(2, 9)})
  }
}

ListController.$inject = [];


export default ListController;
