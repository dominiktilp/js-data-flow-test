class ListItemEditController {
  constructor() {

  }

  save() {
    if (this.item._id) {
      this.operations.updateItem(this.item);
    } else {
      this.operations.createItem(this.item);
    }
  }

}

ListItemEditController.$inject = [];

export default ListItemEditController;
