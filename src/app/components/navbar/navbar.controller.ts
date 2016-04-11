module angularTsOnboard {
  'use strict';

  export class NavbarController {
    public date: Date;

    /* @ngInject */
    constructor () {
      this.date = new Date();
    }
  }
}
