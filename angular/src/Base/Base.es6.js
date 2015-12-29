'use strict';

import angular from 'angular';

import List from './List/List.es6.js'
import ListItem from './ListItem/ListItem.es6.js'
import ListItemHead from './ListItemHead/ListItemHead.es6.js'
import ItemService from './ItemService.es6.js'

export default angular
  .module('Base', [])
  .config(config)
  .directive('list', List)
  .directive('listItem', ListItem)
  .directive('listItemHead', ListItemHead)
  .service('itemService', ItemService)


  function config($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
  }
