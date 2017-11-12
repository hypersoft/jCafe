/**
 * javascript:jCafe - WebScript Engineering Toolkit                      (v0.2)
 *
 * (C) Hypersoft-Systems: U.-S.-A. ~11-12-2017: NOW-TIME
 *                         <hypersoft.systems@gmail.com>
 *
 *  Author: Triston-Jerard: Taylor <pc.wiz.tt@gmail.com>
 *
 *  Credit: TinyMCE: "Bolt"; LGPL
 *
 *  Purpose: javascript, compatibility, S.-D.-K., code-forms, module-loader,
 *           components, templates, imports, prototypes, styling, DHTML,
 *           HTML5, WebComponents, WebScripting, interface, DOM.
 *
 *  License:
 *
 *  ~1: a workman is worthy of his/her hire.
 *  ~2: a license is a permission to do a wrong.
 *  ~3: zero-permission is given to do a wrong.
 *  ~4: a matter must be expressed to be resolved.
 *  ~5: the name of this contrivance is by the ownership of the rights-holder.
 *  ~6: the value of this contrivance is an original-work.
 *  ~7: transportation of this work, with this name, as this contrivance,      -
 *      is with the lack of the modification of this source-model, by a        -
 *      foreign-modification-copy-rights-holder.
 *  ~8: freedom for the listing, linking and selling as the derivative-works   -
 *      is with the compliance of these terms
 *  ~9: use of the name "jCafe" is with the claims of the compliance within    -
 *      these terms.
 *  ~0  for the factual-wrong-doing within these terms by a source-            -
 *      modification-holder is with this damage claim of these ownership rights.
**/

var jCafe = {/* Fresh Coffe Served Daily */};

/* for the boiling water.... */ (function(loader, paths, modules) {

var rt = modules.rt = Object.create(null);

// this is a protected names registry
var rootKeys = '__proto__, prototype, compile, rt, build, child, parent, module, set, get, link, name, constructor, children, jCafe, arguments, apply, call, toString, valueOf'.split(",");
var childKeys = ['children', 'name', '__proto__'];

var get = function (name) {
  var actual = paths[name];
  if (actual === undefined) {
    var module = modules[name];
    if (module !== undefined) return module;
    throw 'component [' + name + '] was undefined';
  } else if (actual.singleton === undefined) jCafe.compile(name);
  return actual.singleton;
};

Object.defineProperties(rt, {

guardChildren: {value: function(p, n) {
  guardNameSpace(p);
  if (childKeys.indexOf(n) === -1) return;
    throw "reserved name collision: '"+p+"'; '"+n+"' is a reserved name";
}, writable: false},

guardNameSpace: {value: function(n) {
  if (rootKeys.indexOf(n.split(".")[0]) !== -1)
    throw 'component name: '+n+' is reserved';
}, writable: false},

});

var set = function (name, components, builder) {
  if (typeof name !== 'string')
    throw 'component name must be a string';
  else if (components === undefined)
    throw 'no component header for ' + name;
  else if (builder === undefined)
    throw 'no component builder for ' + name;
  var module = parentModule(name), child = jCafe.child(name),
    unit = { module: module, name: child, singleton: undefined,
      components: components, builder: builder,
    };
  Object.defineProperty(module, child, {
    get: function(){return get(name)}, configurable: true, enumerable: true
  });
  return paths[name] = module.children[child] = unit;
};

// YES: WRITE TO jCafe
jCafe = function(n) {
  // jCafe(n) will get(n) or set(parameters...); for the keyword: ((new)?jCafe.set:jCafe.get)(...)
  if (this.constructor !== jCafe) return get(n);
  else Object.setPrototypeOf(this, set.apply(jCafe, arguments));
}

Object.defineProperty(jCafe, "rt", {value: rt,
  enumerable: true, writable: false, configurable: true
});

modules.rt = jCafe.rt;

Object.defineProperty(rt, "jCafe", {value: rt,
  enumerable: true, writable: false, configurable: true
});

// PROTECT: PUBLIC ASSETS
Object.defineProperties(jCafe, {
  // this is a sentinel-value
  prototype: {value: Object.freeze({constructor: jCafe}), writable: false, configurable: false, enumerable: false},
});

parentModule = function(n) {
  return jCafe.module(jCafe.parent(n));
}

var RUNTIME = 'root';

// module context
jCafe.module = function(n) {
  if (n === RUNTIME) // break-create-loop
    return modules.rt;
  var module = modules[n];
  if (module !== undefined) return module;
  var minor = jCafe.child(n); // me name
  (module = modules[n]  // request === jCafe(n)/paths[n]
    = parentModule(n)[minor] // write+/create parentModule.me = me
        = Object.create(modules.rt) // inherit runtime
  ).name = n; // jCafe(n).name
  Object.defineProperty(module, "children", {
    value:Object.create(null),
      enumerable:false, writable: false, configurable: false
  });
  if (n.indexOf(".") === -1) jCafe[n] = module;
  return module; // return request
}

// used internally, this one fires up the module & unit builder
jCafe.compile = function (name) {
  var actual = paths[name];
  if (actual === undefined)
     throw "identifier  '"+ name + "' returned undefined";
  var components = actual.components;
  var tool = actual.builder;
  var module = parentModule(name);
  var singleton = jCafe.build(module, tool, components);
  if (singleton === undefined)
     throw "failed to initialize name-space: '"+ name + "'; builder returned undefined";
  return actual.singleton = singleton;
};

jCafe.build = function (scope, callback, names) {
  if (typeof scope === 'string') scope = modules[scope];
  var len = names.length;
  var singletons = new Array(len);
  for (var i = 0; i < len; ++i)
    singletons[i] = get(names[i]);
  return callback.apply(scope, singletons);
};

jCafe.parent = function(n) {
  if (n.indexOf(".") === -1) return RUNTIME; // no more data
  var stack = n.split(".");
  stack.pop();
  return stack.join('.');
}

jCafe.child = function(n) {
  var stack = n.split(".");
  var out = stack.pop()
  guardChildren(n, out);
  return out;
}

// this helps with minification when using a lot of global references
jCafe.link = function (name, ref) {
  new jCafe(name, [], function () { return ref; });
};

jCafe.link("js.global", loader);

return /* PERCOLATOR */;
  
})/* load: jCafe Express */(this, Object.create(null), Object.create(null));


/* Grinding Coffee Beans... */(function initializeGlobalObjects() {

  jCafe.link("js.lang.Number", Number);
  jCafe.link("js.lang.Math", Math);
  jCafe.link("js.lang.Object", Object);
  jCafe.link("js.lang.Array", Array);
  jCafe.link("js.lang.String", String);
  jCafe.link("js.lang.Error", Error);

  jCafe.link("js.global.window", window);
  jCafe.link("js.global.document", document);
  jCafe.link("js.global.navigator", navigator);
  
  new jCafe("js.global.console",
    ['js.global.window'],
    function (window) {
      if (typeof window.console === "undefined")
        console = { log: function () {throw "global reference: console was not known"} };
      return window.console;
    }
  );
  new jCafe("js.dom.html.template.stamp",
    ["js.global.document"],
    function(document){
      return function(HTMLNode){ // stamp template content
        if (HTMLNode) return document.importNode(HTMLNode.content, true);
        return null;
      }
    }
  );
  new jCafe("js.dom.html.link.transport",
    [],
    function(document){ // transport link content
      return function(HTMLLink, HTMLElementSelector){return HTMLLink.import.querySelector(HTMLElementSelector);}
    }
  );
  new jCafe("js.dom.html.template.import",
    ["js.global.document", "js.dom.html.template.stamp", "js.dom.html.link.transport"],
    function (document, stamp, transport) {
      return function(linkSelector, elementSelector, destinationSelector) {
        var link = document.querySelector(linkSelector);
        if (! link)
          throw "global document query selector: '"+linkSelector+"' task failed for template link import"
        var address = elementSelector || linkSelector,
          DocumentFragment = stamp(transport(link, address));
        if (! DocumentFragment)
          throw "global document link: '"+linkSelector+"' content query selector: '"+address+"' task failed for template link content import"
        var destination = document.querySelector(destinationSelector);
        if (destination === undefined) return DocumentFragment;
        else destination.appendChild(DocumentFragment);        
      };      
    });

  return /* BLEND: READY */;
})();


