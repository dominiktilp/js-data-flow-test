class ListItemController {
  constructor() {
    this.isEdited = false;
    this.edit = this._edit.bind(this);
  }

  _edit() {
    this.isEdited = true;
  }
}

ListItemController.$inject = [];

export default ListItemController;
