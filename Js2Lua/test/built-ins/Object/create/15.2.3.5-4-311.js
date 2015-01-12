// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-311
description: >
    Object.create - [[Set]] is set as undefined if it is absent in
    accessor descriptor of one property in 'Properties' (8.12.9 step
    4.b)
includes: [runTestCase.js]
---*/

function testcase() {
        var newObj = Object.create({}, {
            prop: {
                get: function () {
                    return "verifyCreate";
                },
                enumerable: true,
                configurable: true
            }
        });

        var desc = Object.getOwnPropertyDescriptor(newObj, "prop");
        var verifySet = desc.hasOwnProperty("set") && typeof desc.set === "undefined";

        var verifyGet = false;
        if (newObj.prop === "verifyCreate") {
            verifyGet = true;
        }

        var verifyEnumerable = false;
        for (var p in newObj) {
            if (p === "prop") {
                verifyEnumerable = true;
            }
        }

        var verifyConfigurable = false;
        var hasProperty = newObj.hasOwnProperty("prop");
        delete newObj.prop;
        verifyConfigurable = !newObj.hasOwnProperty("prop") && hasProperty;

        return verifySet && verifyGet && verifyEnumerable && verifyConfigurable;
    }
runTestCase(testcase);
