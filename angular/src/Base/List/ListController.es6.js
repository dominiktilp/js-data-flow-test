class ListController {
  constructor(itemService) {
    this.itemService = itemService;
    this.loadItems();

    this.operations = {
      loadItems: this.loadItems.bind(this),
      addItem: this.addItem.bind(this),
      updateItem: this.updateItem.bind(this),
      deleteItem: this.deleteItem.bind(this)
    }
  }

  loadItems() {
    this.itemService.getAll().then((data) => {
      this.items = data;
    })
  }

  addItem(item) {
    this.itemService.create(item).then((data) => {
      this.loadItems();
    })
  }

  updateItem(item) {
    this.itemService.update(item).then((data) => {
      this.loadItems();
    })
  }

  deleteItem(item) {
    this.itemService.delete(item).then((data) => {
      this.loadItems();
    })
  }

}

ListController.$inject = ['itemService'];


export default ListController;
