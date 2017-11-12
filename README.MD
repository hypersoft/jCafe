# jCafe v0.2

### README

jCafe let's you create a powerful modules system by constructing module units individually. Module units are activated on request, if they are defined. jCafe offers a virtual namespace system, and you can export the name spaces however you like.

Here is an example of using the jCafe namespace with the pre-defined-builtins.

```javascript
var myGlobalRef = jCafe.js.global;

var js = jCafe.js;
js.global.console.log("hello world");

// the end
```

You can also query the namespace by string.
```
var jsGlobal = jCafe('js.global'); // wow, you just did a namespace import!
```

### Why use jCafe?
jCafe can help you organize your coding environment by allowing you to modularize your code into custom, practical namespaces; which makes your code ripe for distribution, sharing, and improvements.
