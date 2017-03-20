import controller from './header-controller';
import template from './header.html';
import './style/header.css';

let headerComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller
};

export default headerComponent;