'use strict';

var BaseListTestTemplate = require('./BaseListTest.html');

class BaseListTestController {
  constructor() {
    this.title = "ListTest with base directives";    
  }

}

BaseListTestController.$inject = [];


export {BaseListTestTemplate, BaseListTestController};
