'use strict';

var BaseListTestTemplate = require('./BaseListTest.html');

class BaseListTestController {
  constructor($http, itemService) {
    this.title = "ListTest with base directives";
        
  }



}

BaseListTestController.$inject = ['$http', 'itemService'];


export {BaseListTestTemplate, BaseListTestController};
