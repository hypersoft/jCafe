# jCafe v0.2

### README

jCafe let's you create a powerful modules system by constructing module units individually. Module units are activated on request, if they are defined. jCafe offers a virtual namespace system, and you can export the namespaces however you like.

Here is an example of using the jCafe namespace with the pre-defined-builtins.

```javascript
var jsGlobal = jCafe.js.global;
// do something with the global object ...

// perform an import of the js namespace
var js = jCafe.js;
js.global.console.log("hello world"); // now, that is how you do "something"

// tune-in, tune-up, turn-out, turned-up ...
```

You can also query the namespace by string.
```javascript
var jsGlobal = jCafe('js.global'); // wow, you just did a namespace import!
```

Creating new units is simple. One way is to create a static reference.
```
// create a static reference to data
jCafe.link("my.import.data", data);
```

The way of "all-ways" in creating units follows the format: `new jCafe(UNIT_NAME, [UNIT_UNITS], UNIT_BUILDER)`.


`UNIT_NAME` is your jCafe namespace path to your `UNIT_BUILDER` function output.
The `UNIT_BUILDER` is called with all of the instantiated  `UNIT_UNITS` which
are referenced by string. The `this` object of the builder, is the resulting
unit's namespace/module/package.


### Why use jCafe?
You can visit many coffee shops to search for good java, but like most java-lovers, you want a coffee house with a nice view of the storefront. Simple, subtle, dependable, spacious; and best of all: within your budget.

jCafe can help you organize your coding environment by allowing you to modularize your code into custom, practical namespaces; which makes your code ripe for distribution, sharing, and improvements. You can use jCafe anywhere javascript runs, which means if your code is written correctly, your code can run in the same instances.

Its no longer a difficult task to shop around for coffee. jCafe can bring you any brand in the world, and our unique flavor-enhancing-process, is sure to bring out the most of the magic in your beans.

There is no ton of complicated APIs to master with jCafe. In fact, you can become a jCafe: master, just by browsing the builtin modules. jCafe is perfect for developing custom browser-suites, where your API structure may be less than desireable. jCafe also plays well with HTML5 features.

