class TypeService {
  constructor($http) {
    this.$http = $http;
  }

  create(type) {
    type = {_id: type._id, name: type.name};
    return this.$http.post(`http://localhost:8888/api/types`, {type: type}).then((resp) => {
      return resp.data.type;
    })
  }

  getAll() {
    return this.$http.get("http://localhost:8888/api/types").then((resp) => {
      return resp.data.types;
    })
  }

}

TypeService.$inject = ['$http'];


export default TypeService;
