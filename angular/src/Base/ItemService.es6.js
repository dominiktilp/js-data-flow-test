class ItemService {
  constructor($http) {
    this.$http = $http;
  }

  create(item) {
    item = {_id: item._id, name: item.name, description: item.description, type_id: item.type_id};
    return this.$http.post(`http://localhost:8888/api/items`, {item: item}).then((resp) => {
      return resp.data.item;
    })
  }

  getAll() {
    return this.$http.get("http://localhost:8888/api/items").then((resp) => {
      return resp.data.items;
    })
  }

  update(item) {
    item = {_id: item._id, name: item.name, description: item.description, type_id: item.type_id};
    return this.$http.put(`http://localhost:8888/api/items/${item._id}`, {item: item}).then((resp) => {
      return resp.data.item;
    })
  }

  delete(item) {
    item = {_id: item._id, name: item.name, description: item.description, type_id: item.type_id};
    return this.$http.delete(`http://localhost:8888/api/items/${item._id}`, {item: item}).then((resp) => {
      return resp.data.item;
    })
  }

}

ItemService.$inject = ['$http'];


export default ItemService;
