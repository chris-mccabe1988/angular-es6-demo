import angular from 'angular';
import * as UserModule from './user/user.module';
 
angular.module('myES6App',[])
  .factory('UserService', UserModule.service)
  .controller('UserController', UserModule.controller);
