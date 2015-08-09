'use strict';

import { UserCtrl } from './user.ctrl'
import { UserService } from './user.svc'

let controller = UserCtrl;
let service = UserService.factory;

export { service };
export { controller };
