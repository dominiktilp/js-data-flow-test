'use strict';

import common from "./common.es6.js";
import angular from 'angular';
import ngRoute from 'angular-route';
import Base from './Base/Base.es6.js';
import {BaseListTestController, BaseListTestTemplate} from './routes/BaseListTest.es6.js';

import './app.scss';
import '!!file?name=index.html!./index.html';

export default angular
  .module('app', ['ngRoute', 'Base'])
  .config(routeConfig)
  .run(run)


function routeConfig($routeProvider) {
  $routeProvider
    .when('/',{
      template: BaseListTestTemplate,
      controller: BaseListTestController,
      controllerAs: "vm"
    })
    .otherwise({ redirectTo:'/' });
}

routeConfig.$inject = ['$routeProvider'];

function run() {

}
