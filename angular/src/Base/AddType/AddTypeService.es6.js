class AddTypeService {
  constructor($q, $rootScope) {
    this.$q = $q;
    this.$rootScope = $rootScope;
  }

  openModal(callback) {
    this.defer = this.$q.defer();
    this.$rootScope.$broadcast("openAddTypeModal", {defer: this.defer});

    return this.defer.promise.then((data)=>{
      return callback(data);      
    });
  }

}

AddTypeService.$inject = ["$q", "$rootScope"];

export default AddTypeService;
