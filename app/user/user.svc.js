'use strict';

/**
 * Service for getting the some user information from GitHub
 */
class UserService {
  /**
   * Constructor that takes the angular http service as its only parameter
   */
  constructor($http){
    this.$http = $http;
  }

  /**
   * Call the Github users API to get some data
   */
  getUsers(){
    return this.$http.get('https://api.github.com/users').then(r => r.data);
  }

  /**
   * Static factory function for the service
   */
  static factory($http){
    return new UserService($http);
  }
};

// In order to preserve dependency annotationsfor minification, we need to set
// the $inject property of the factory function
UserService.factory.$inject = ['$http'];

// Export the service so it can be imported in other files
export { UserService }
