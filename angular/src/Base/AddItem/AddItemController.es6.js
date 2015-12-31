class AddItemController {
  constructor() {
    this.adding = false;
  }

  add() {
    this.item = {};
    this.adding = true;
  }

  save() {
    this.operations.addItem(this.item).then((data)=>{
      this.item = {};
      this.adding = false;
    });
  }

}

AddItemController.$inject = [];


export default AddItemController;
