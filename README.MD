# jCafe v0.2

### README

jCafe let's you create a powerful modules system by constructing module units individually. Module units are activated on request, if they are defined. jCafe offers a virtual namespace system, and you can export the namespaces however you like.

Here is an example of using the jCafe namespace with the pre-defined-builtins.

```javascript
var myGlobalRef = jCafe.js.global;

var js = jCafe.js;
js.global.console.log("hello world");

// the end
```

You can also query the namespace by string.
```javascript
var jsGlobal = jCafe('js.global'); // wow, you just did a namespace import!
```

### Why use jCafe?
jCafe can help you organize your coding environment by allowing you to modularize your code into custom, practical namespaces; which makes your code ripe for distribution, sharing, and improvements. You can use jCafe anywhere javascript runs, which means if your code is written correctly, your code can run in the same instances.

Its simple, straightforward. There is no ton of complicated APIs to master. In fact, you can become a jCafe-master, just by browsing the builtin modules. jCafe is perfect for developing custom browser-suites, where your API structure may be less than desireable. jCafe also plays well with HTML5 features.

### So you want to define some static data?
That's simple enough just follow this example.
```javascript
jCafe.link("my.import.data", data);
```
