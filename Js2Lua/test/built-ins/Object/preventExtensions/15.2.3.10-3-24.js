// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.10-3-24
description: >
    Object.preventExtensions - [[Extensible]]: false on a prototype
    doesn't prevent adding properties to an instance that inherits
    from that prototype
includes: [runTestCase.js]
---*/

function testcase() {
        var proto = {};
        var preCheck = Object.isExtensible(proto);
        Object.preventExtensions(proto);

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;
        var child = new ConstructFun();

        child.prop = 10;

        return preCheck && child.hasOwnProperty("prop");
    }
runTestCase(testcase);
