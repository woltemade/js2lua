// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.17-7-2
description: >
    Array.prototype.some considers new value of elements in array
    after it is called
includes: [runTestCase.js]
---*/

function testcase() { 
 
  function callbackfn(val, idx, obj)
  {
    arr[4] = 6;
    if(val < 6)
      return false;
    else 
      return true;
  }

  var arr = [1,2,3,4,5];
  
  if(arr.some(callbackfn) === true)    
    return true;  
  
 }
runTestCase(testcase);
