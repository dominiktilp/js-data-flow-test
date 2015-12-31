'use strict';

import angular from 'angular';

import List from './List/List.es6.js'
import ListItem from './ListItem/ListItem.es6.js'
import AddItem from './AddItem/AddItem.es6.js'
import ListItemHead from './ListItemHead/ListItemHead.es6.js'
import ListItemEdit from './ListItemEdit/ListItemEdit.es6.js'

import AddType from './AddType/AddType.es6.js'
import ListItemType from './ListItemType/ListItemType.es6.js'
import ListItemTypeSelect from './ListItemTypeSelect/ListItemTypeSelect.es6.js'
import AddTypeService from './AddType/AddTypeService.es6.js'

import ItemService from './ItemService.es6.js'
import TypeService from './TypeService.es6.js'

export default angular
  .module('Base', [])
  .config(config)
  .directive('list', List)
  .directive('listItem', ListItem)
  .directive('listItemHead', ListItemHead)
  .directive('listItemEdit', ListItemEdit)
  .directive('addItem', AddItem)
  .directive('listItemType', ListItemType)
  .directive('listItemTypeSelect', ListItemTypeSelect)
  .directive('addType', AddType)
  .service('addTypeService', AddTypeService)
  .service('itemService', ItemService)
  .service('typeService', TypeService)


  function config($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
  }
