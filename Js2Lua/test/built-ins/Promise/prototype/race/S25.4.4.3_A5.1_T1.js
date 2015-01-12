// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
author: Sam Mikes
description: Promise.race([]) never settles
---*/

var p = Promise.race([]);

p.then(function () {
    $ERROR("Never settles.");
}, function () {
    $ERROR("Never settles.");
}).then($DONE, $DONE);

// use three 'then's to allow above to settle 
// if this is a buggy Promise.race implementation
Promise.resolve().then().then().then($DONE, $DONE);
