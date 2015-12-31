import AddTypeController from './AddTypeController.es6.js';
import AddTypeTemplate from './AddType.html';

class AddType {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.controller = AddTypeController;
    this.controllerAs = "vm";
    this.template = AddTypeTemplate;
    this.scope = true;
    this.bindToController = {
      operations: "=",
      types: "="
    }
  }

  link(scope, element, attr, ctrl) {
    scope.$on('openAddTypeModal', (event, data) => {
      ctrl.openModal(data.defer);
    });
  }

  static directiveFactory() {
    return new AddType();
  }

}

export default AddType.directiveFactory;
