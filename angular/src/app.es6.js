'use strict';

import common from "./common.es6.js";
import angular from 'angular';
import ngRoute from 'angular-route';
import Base from './Base/Base.es6.js';
import {BaseListTestController, BaseListTestTemplate} from './routes/BaseListTest.es6.js';

import './app.scss';
import '!!file?name=index.html!./index.html';

if (module.hot) {
  module.hot.accept();

}

export default angular
  .module('app', ['ngRoute', 'Base'])
  .config(config)
  .run(run)


function config($routeProvider, $httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  
  $routeProvider
    .when('/',{
      template: BaseListTestTemplate,
      controller: BaseListTestController,
      controllerAs: "vm"
    })
    .otherwise({ redirectTo:'/' });
}

config.$inject = ['$routeProvider', '$httpProvider'];

function run() {

}
