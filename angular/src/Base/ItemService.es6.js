'use strict';

class ItemService {
  constructor($http) {
    this.$http = $http;
  }

  create(item) {
    return this.$http.post(`http://localhost:8888/api/items`, item).then((resp) => {
      return resp.data.item;
    })
  }

  getAll() {
    return this.$http.get("http://localhost:8888/api/items").then((resp) => {
      return resp.data.items;
    })
  }

  update(item) {
    return this.$http.put(`http://localhost:8888/api/items/${item._id}`, item).then((resp) => {
      return resp.data.item;
    })
  }

  delete(item) {
    return this.$http.delete(`http://localhost:8888/api/items/${item._id}`, item).then((resp) => {
      return resp.data.item;
    })
  }

}

ItemService.$inject = ['$http'];


export default ItemService;
