# jCafe Honeyblend (RC3) v0.27

### README

jCafe lets you create a powerful modules system by constructing module units individually. Module units are activated on request, if they are defined. jCafe offers a virtual namespace system, and you can export the namespaces however you like.

Here is an example of using the jCafe namespace with the pre-defined-builtins.

```javascript
var jsGlobal = jCafe.js.global;
// do something with the global object ...

// perform an import of the js namespace
var js = jCafe.js;
js.util.console.log("hello world"); // now, that is how you do "something"

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

The namespace/module/package is created automatically for each unit. A unit can
request a module reference through `[UNIT_UNITS]`. Each namespace inherits it's
javascript prototype from jCafe.rt (rt=run-time).


### Why use jCafe?
You can visit many coffee shops to search for good java, but like most java-lovers, you want a coffee house with a nice view of the storefront. Simple, subtle, dependable, spacious; and best of all: within your budget.

jCafe can help you organize your coding environment by allowing you to modularize your code into custom, practical namespaces; which makes your code ripe for distribution, sharing, and improvements. You can use jCafe anywhere javascript runs, which means if your code is written correctly, your code can run in the same instances.

Its no longer a difficult task to shop around for coffee. jCafe can bring you any brand in the world, and jCafe's unique flavor-enhancing-process, is sure to bring out the most of the magic in your beans.

There is no ton of complicated APIs to master with jCafe. In fact, you can
become a jCafe: master, just by browsing the builtin modules. If that was not 
enough to get your inner-j-guru-salivating, it might help to know that jCafe is 
perfect for developing custom browser-suites, where your API structure may be 
less than desireable. The age old problem of which "browser-api-is-it?", is 
easily put to rest with jCafe's re-usable, transportable, and shareable jCafe:
units.

### Performing a System Build
It is not required that you build your jCafe system using a structured
filing-system, but in the long run, this will tremendously help your
development efforts. The drawback to this is that, there is currently no IDE
capable of handling this kind of project filing system, so you will have to
perform the build to get context-sensitive IDE support.

The benefits of using a structured filing-system is that, your unit and module
modifications can be time-stamped-individually, which makes for a nice
versioning system when using the jCafe Module Builder.

To fire-up the jCafe Module Builder issue the command at your unix-terminal
from within the root directory of the jCafe project:

```bash
bin/build jCafe.js library > build/jcafe.js

# or if you are ready to do some real-blending
bin/build -h|--help # to get started with the house blender.
```

Talk about franchise licensing opportunities:

 `bin/build --suite jCafe:Shop --main jCafe.js library`

You should file an issue on the blender if you find one. Thanks.

If this feature is not suitable for your purpose, you can always implement
your own strategy for building your jCafe distribution. Some people like to
use npm, gulp, bower, etc; however Hypersoft-Systems: U.-S.-A. does not utilize
any such technology for development.

The jCafe build system is a quick-put-together due to time constraints.
A better Unix builder could be made, and might be in the future-time; what is
available now should be considered a working-project-structuring-reference-implementation.

