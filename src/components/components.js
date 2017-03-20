import angular from 'angular';

import headerComponent from './header/header-component';

let ComponentsModule = angular.module('ComponentsModule', [])
    .component('headerComponent', headerComponent)
    .name;

export { ComponentsModule };