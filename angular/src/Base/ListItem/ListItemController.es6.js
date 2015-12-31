class ListItemController {
  constructor() {
    this.isEdited = false;
    this.edit = this.edit.bind(this);
    this.editType = this.editType.bind(this);
  }

  edit() {
    this.isEdited = true;
  }

  editType() {
    this.typeIsEdited = true;
  }

}

ListItemController.$inject = [];

export default ListItemController;
