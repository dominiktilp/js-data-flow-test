'use strict';

import angular from 'angular';

import List from './List/List.es6.js'
import ListItem from './ListItem/ListItem.es6.js'

export default angular
  .module('Base', [])
  .directive('list', List)
  .directive('listItem', ListItem)
