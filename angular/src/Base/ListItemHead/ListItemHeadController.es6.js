class ListItemHeadController {
  constructor() {

  }

  delete() {
    this.operations.deleteItem(this.item);
  }

  edit() {
    this.operations.edit();
  }
}

ListItemHeadController.$inject = [];

export default ListItemHeadController;
