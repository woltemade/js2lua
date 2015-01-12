// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.14-3-25
description: >
    Array.prototype.indexOf - value of 'length' is a negative
    non-integer
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 1: true, 2: false, length: -4294967294.5 }; //length will be 0 finally

        return Array.prototype.indexOf.call(obj, true) === -1 &&
        Array.prototype.indexOf.call(obj, false) === -1;
    }
runTestCase(testcase);
