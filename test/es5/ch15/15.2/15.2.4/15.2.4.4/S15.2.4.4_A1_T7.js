// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The valueOf method returns its "this" value
 *
 * @path ch15/15.2/15.2.4/15.2.4.4/S15.2.4.4_A1_T7.js
 * @description "this" value is "void 0"
 */

//CHECK#1
if (typeof Object.prototype.valueOf !== "function") {
  $ERROR('#1: valueOf method defined');
}

var obj=new Object(void 0);

//CHECK#2
if (typeof obj.valueOf !== "function") {
  $ERROR('#2: valueOf method accessed');
}

//CHECK#3
if (obj.valueOf()!==obj) {
  $ERROR('#3: The valueOf method returns its this value');
}


