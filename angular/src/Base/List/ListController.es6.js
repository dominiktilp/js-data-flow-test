class ListController {
  constructor(itemService, typeService) {
    this.itemService = itemService;
    this.typeService = typeService;
    this.items = [];
    this.loadItems();


    this.operations = {
      loadItems: this.loadItems.bind(this),
      addItem: this.addItem.bind(this),
      updateItem: this.updateItem.bind(this),
      deleteItem: this.deleteItem.bind(this)
    }
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
      this.items = this.items.map((it)=>{
        var filtered = this.types.filter((ty) => {return ty._id == it.type_id});
        it.type = filtered.length > 0 ? filtered[0] : undefined;
        return it;
      });
      return data;
    })
  }

  addItem(item) {
    return this.itemService.create(item).then((data) => {
      this.loadItems();
      return data;
    })
  }

  updateItem(item) {
    return this.itemService.update(item).then((data) => {
      this.loadItems();
      return data;
    })
  }

  deleteItem(item) {
    return this.itemService.delete(item).then((data) => {
      this.loadItems();
      return data;
    })
  }

}

ListController.$inject = ['itemService', 'typeService'];


export default ListController;
