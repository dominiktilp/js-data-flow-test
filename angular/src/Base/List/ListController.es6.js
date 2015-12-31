class ListController {
  constructor(itemService, typeService) {
    this.itemService = itemService;
    this.typeService = typeService;
    this.items = [];
    this.loadItems();

    this.setTypeForItem = this.setTypeForItem.bind(this);
    this.loadItems = this.loadItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addType = this.addType.bind(this);

    this.operations = {
      loadItems: this.loadItems,
      addItem: this.addItem,
      updateItem: this.updateItem,
      deleteItem: this.deleteItem,
      addType: this.addType
    }
  }

  setTypeForItem(item) {
    var filtered = this.types.filter((ty) => {return ty._id == item.type_id});
    item.type = filtered.length > 0 ? filtered[0] : undefined;
    return item;
  }

  loadItems() {
    return this.itemService.getAll().then((data) => {
      this.items = data;
      this.loadTypes();
      return data;
    })
  }

  loadTypes() {
    return this.typeService.getAll().then((data) => {
      this.types = data;
      this.items = this.items.map(this.setTypeForItem);
      return data;
    })
  }

  addItem(item) {
    return this.itemService.create(item).then((data) => {
      this.items.push(data);
      // this.loadItems();
      return data;
    })
  }

  updateItem(item) {
    return this.itemService.update(item).then((data) => {
      var index = this.items.map((it)=>{return it._id}).indexOf(item._id);
      var newItem = this.setTypeForItem(angular.copy(data));
      this.items.splice(index, 1, newItem);
      // this.loadItems();
      return data;
    })
  }

  deleteItem(item) {
    return this.itemService.delete(item).then((data) => {
      var index = this.items.map((it)=>{return it._id}).indexOf(item._id);
      this.items.splice(index, 1);
      // this.loadItems();
      return data;
    })
  }

  addType(type) {
    return this.typeService.create(type).then((data) => {
      this.types.push(data);
      // this.loadItems();
      return data;
    });
  }

}

ListController.$inject = ['itemService', 'typeService'];


export default ListController;
