class AddTypeController {
  constructor(typeService,$q) {
    this.show = false;
    this.typeService = typeService;
    this.$q = $q;
  }

  openModal(defer) {
    this.defer = defer || this.$q.defer();
    this.type = {};
    this.show = true;
    return this.defer.promise;
  }

  save() {
    this.show = false;
    this.defer.resolve(this.type);
  }

  cancel() {
    this.show = false;
    this.defer.reject();
  }

}

AddTypeController.$inject = ["typeService", "$q"];


export default AddTypeController;
