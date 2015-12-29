'use strict';

var BaseListTestTemplate = require('./BaseListTest.html');

class BaseListTestController {
  constructor($http) {
    this.title = "ListTest with base directives";

  }

}

BaseListTestController.$inject = ['$http'];


export {BaseListTestTemplate, BaseListTestController};
