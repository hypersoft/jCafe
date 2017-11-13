/**
 * javascript:jCafe - WebScript Engineering Toolkit                     (v0.22)
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
 *      is with the compliance of these terms.
 *  ~9: use of the name "jCafe" is with the claims of the compliance within    -
 *      these terms.
 *  ~0  for the factual-wrong-doing within these terms by a source-            -
 *      modification-holder is with this damage claim of these ownership rights.
**/

var jCafe = {/* Fresh Coffee Served Daily */};

/* for the boiling water.... */ (function(loader, paths, modules) {

var rt = Object.create(null);

// a not-too-cheap property writer
function defineProperty(o, p, n, v) {
  // p = "hidden fixed component accessor": specification-list
  if (arguments.length === 3)
    return defineProperty(o, "default", (n = p), v);    
  var type; // gotchas
  if ((type = typeof o) !== 'object' && type !== 'function') throw new TypeError(
    "1st parameter type error: expected property host; got: "+type);
  if (p && (type = typeof p) !== 'string') throw new TypeError(
    "2nd parameter type error: expected string for property profile; got: "+type);
  if ((type = typeof n) !== 'string') throw new TypeError(
    "3rd parameter type error: expected string for property name; got: "+type);
  var type, profile = profile = (p || "default").split(" "),
     defn = {value: v, enumerable:true, writable: true, configurable: true};
  profile.contains = function(q){return this.indexOf(q) !== -1;};
  if (profile.contains("hidden")) defn.enumerable = false;
  if (profile.contains("fixed")) defn.configurable = false;
  if (profile.contains("component")) defn.writable = false;
  if (profile.contains("constant")) defn.writable = defn.configurable = false; // same as: fixed component
  if (profile.contains("system")) defn.enumerable = defn.writable = defn.configurable = false; // same as: fixed hidden component
  if (profile.contains("utility")) defn.enumerable = defn.writable = false; // same as: hidden component
  var accessorIsKnowable = false;
  if ([undefined, null, "default", ""].indexOf(p) !== -1)
    if (typeof v === 'object' && ((typeof (v.get || v.set)) === 'function')) {
      profile.push("accessor"); accessorIsKnowable = true;
    }
  if (profile.contains("accessor") || v && ((typeof (v.get || v.set)) === 'function')) {
    var type = typeof v;
    if (!v || type !== 'object') throw "4th parameter type error: expected object with get and or set property values";
    if (! accessorIsKnowable ) 
      if (v.get === undefined && v.set === undefined) throw "4th parameter type error: expected object: {get: function(){}}, {set: function(v)} or {get: function(){}, set: function(v){}}";
    delete defn.value; delete defn.writable;
    if (v.set) { type = typeof v.set;
      if (type !== 'function') throw "4th parameter type error: expected type of (Object) parameter.set === function; got: "+type;
      defn.set = v.set;
    }
    if (v.get) { type = typeof v.get;
      if (type !== 'function') throw "4th parameter type error: expected type of (Object) parameter.get === function; got: "+type;
      defn.get = v.get;
    }
  }
  return Object.defineProperty(o, n, defn);
};

// short-cut for defineProperty
var defineComponent = function(o, n, v) {
  return defineProperty(o, "component", n, v);
}

// short-cut for defineProperty
var defineConstant = function(o, n, v) {
  return defineProperty(o, "constant", n, v);
}

// short-cut for defineProperty
var defineSystem = function(o, n, v) {
  return defineProperty(o, "system", n, v);
}

// short-cut for defineProperty
var defineUtility = function(o, n, v) {
  return defineProperty(o, "utility", n, v);
}

var listSplitter = ",";
var protectedJavascriptRootMethods = 'apply, call, bind, toString, valueOf, constructor, __defineGetter__, __defineSetter__, __lookupGetter__, __lookupSetter__'.split(listSplitter);
var protectedJavascriptRootProperties = '__proto__, prototype, constructor, name'.split(listSplitter);

var protectedJCafeRootMethods = 'defineSystem, defineConstant, defineUtility, defineComponent, protectedRootName, protectedUnitName, module, link'.split(listSplitter);
var protectedJCafeRootNames = 'rt, jcafe, jCafe'.split(listSplitter);

var protectedJCafeUnitNames = '__unit__, name'.split(listSplitter);
var protectedJavascriptUnitNames = '__proto__, __defineGetter__, __defineSetter__, __lookupGetter__, __lookupSetter__'.split(listSplitter);

var protectedRootNames = protectedJCafeRootNames.concat(
  protectedJCafeRootMethods,
    protectedJavascriptRootProperties,
      protectedJavascriptRootMethods
);

var indexContains = function (dexer, query) {
  return dexer.indexOf(query) !== -1;
}

function protectedRootName(name) {
  return indexContains(protectedRootNames, name)
}

var protectedUnitNames = protectedJCafeUnitNames.concat(
  protectedJavascriptUnitNames
);
function protectedUnitName(name) {
  return indexContains(protectedUnitNames, name);
}

var guardRootName = function(n) {
  if (protectedRootName(n)) throw "root name: "+n+"; is a protected root name";
}

var guardUnitName = function(p, n) {
  guardRootName(p);
  if (protectedUnitName(n))
    throw "unit name: "+n+"; is a protected unit name";
};

var get = function (name) {
  var actual = paths[name];
  if (actual === undefined) {
    var module = modules[name];
    if (module !== undefined) return module;
    throw 'unit [' + name + '] was undefined';
  }
  if (actual.compiled) return actual.module[actual.name];
  else return compile(name);
};

var set = function (name, components, builder) {
  if (typeof name !== 'string')
    throw 'unit name must be a string';
  else if (components === undefined)
    throw 'no unit header for ' + name;
  else if (builder === undefined)
    throw 'no unit builder for ' + name;
  var module = getUnitParent(name), unitName = getUnitName(name),
    unit = { module: module, name: unitName, compiled: false,
      components: components, builder: builder,
    };
  defineComponent(module, unitName, {get: function(){return get(name)} });
  return paths[name] = module.__unit__[unitName] = unit;
};

// YES: WRITE TO jCafe
jCafe = function(n) {
  // jCafe(n) will get(n) or set(parameters...); for the keyword: ((new)?jCafe.set:jCafe.get)(...)
  if (this.constructor !== jCafe) return get(n);
  else Object.setPrototypeOf(this, set.apply(jCafe, arguments));
}

// this is a system-value
defineSystem(jCafe, "prototype", Object.freeze({constructor: jCafe }));

// link runtime with jCafe
defineComponent(jCafe, "rt", rt);
defineComponent(rt, "jCafe", jCafe);

// make our define systems a public interface
defineComponent(jCafe, "defineComponent", defineComponent); // read-only
defineComponent(jCafe, "defineUtility", defineUtility); // hidden, read-only
defineComponent(jCafe, "defineSystem", defineSystem); // hidden, read-only, unconfigurable
defineComponent(jCafe, "defineConsant", defineConstant); // read-only, unconfigurable

// make rt like a module
var jCafeRuntimeModuleName = 'jcafe';
defineConstant(rt, "name", jCafeRuntimeModuleName);

defineComponent(jCafe, "protectedRootName", protectedRootName);
defineComponent(jCafe, "protectedUnitName", protectedUnitName);

var getUnitParent = function(n) {
  return jCafe.module(getUnitParentName(n));
};

var unitSeparator = ".";

var getUnitParentName = function(n) {
  if (! indexContains(n, unitSeparator)) return jCafeRuntimeModuleName; // no more data
  var stack = n.split(unitSeparator);
  stack.pop();
  return stack.join(unitSeparator);
}

var getUnitName = function(n) {
  var stack = n.split(unitSeparator);
  var out = stack.pop()
  guardUnitName(n, out);
  return out;
}

// module context
jCafe.module = function(n) {
  if (n === jCafeRuntimeModuleName) // break-create-loop
    return rt;
  var module = modules[n];
  if (module !== undefined) return module;
  var minor = getUnitName(n); // me name
  (module = modules[n]  // request === jCafe(n)/paths[n]
    = getUnitParent(n)[minor] // write+/create getUnitParent.me = me
        = Object.create(rt) // inherit runtime
  );
  defineConstant(module, "name", n);
  defineSystem(module, "__unit__", Object.create(null))
  if (! indexContains(n, unitSeparator)) jCafe[n] = module;
  return module; // return request
}

// used internally, this one fires up the module & unit builder
var compile = function (name) {
  var actual = paths[name];
  if (actual === undefined)
     throw "unit identifier  '"+ name + "' has no definition";
  var components = actual.components;
  var tool = actual.builder;
  var module = getUnitParent(name);
  var unit = build(module, tool, components);
  if (unit === undefined)
     throw "failed to initialize unit: '"+ name + "'; unit-builder returned undefined";
  // override the first-run-getter, and update the value
  defineProperty(module, actual.name, unit)
  actual.compiled = true;
  return unit;
};

var build = function (scope, callback, names) {
  if (typeof scope === 'string') scope = modules[scope];
  var len = names.length;
  var units = new Array(len);
  for (var i = 0; i < len; ++i)
    units[i] = get(names[i]);
  return callback.apply(scope, units);
};

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

  new jCafe("js.util.console",
    [],
    function () {
      if (typeof console === "undefined")
        console = { log: function () {throw "global reference: console was not known"} };
      return console;
    }
  );
  
  return /* BLEND: READY */;
  
})();

