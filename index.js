'use strict';

// this is just here as a temporary measure, until I find time to implement this.
// Otherwise, it might block the boot of SHPS
module.exports = class Dependency {
    static init() { return new Dependency(); }
};
