class ListItemTypeSelectController {
  constructor(addTypeService) {
    this.addTypeService = addTypeService;
  }

  selectType(type) {
    this.item.type_id = type._id;
    this.operations.updateItem(this.item).then(
      (item)=>{

      }
    );
  }

  createNewType() {
    this.addTypeService.openModal(this.operations.addType).then(
      (data) => {
        this.selectType(data);
      }
    )
  }
}

ListItemTypeSelectController.$inject = ["addTypeService"];

export default ListItemTypeSelectController;
