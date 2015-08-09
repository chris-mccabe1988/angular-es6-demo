'use strict';

/**
 * A simple controller for displaying some user information
 */
class UserCtrl {
  /**
   * The constructor for the controller takes the user service as its only
   * parameter
   */
  constructor(userSvc) {
    this.userSvc = userSvc;
    this.init();
  }

  /**
   * Use the UserService to initialize the user property of the class with the
   * information from GitHub
   *
   * Note the use of 'this' in the arrow function!!
   */
  init(){
    this.userSvc.getUsers().then(users => {
      this.users = users;
    });
  }
}

// Just like the service, we need to set the $inject property for minification
UserCtrl.$inject = ['UserService'];

export { UserCtrl };
