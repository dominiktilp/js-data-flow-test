class AddTypeService {
  constructor($q, $rootScope) {
    this.$q = $q;
    this.$rootScope = $rootScope;
  }

  openModal() {
    this.defer = this.$q.defer();
    this.$rootScope.$broadcast("openAddTypeModal", {defer: this.defer});
    return this.defer.promise;
  }

}

AddTypeService.$inject = ["$q", "$rootScope"];

export default AddTypeService;
