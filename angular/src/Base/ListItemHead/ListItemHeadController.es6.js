class ListItemHeadController {
  constructor() {

  }

  delete() {
    this.operations.deleteItem(this.item);
  }

  edit() {
    this.operations.updateItem(this.item);
  }
}

ListItemHeadController.$inject = [];

export default ListItemHeadController;
