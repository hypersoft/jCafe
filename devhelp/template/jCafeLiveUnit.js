// unit: acme.jcafe.link.template

(function jCafeLiveUnit (jCafePath) {

  // this is how one constructs a private data space with pre-initialization,
  // for a function, or other data
  
  // if you need a back reference to your unit data or definition.
  var jCafeSelf, jCafeUnit;

  // todo: check/setup environment/browser compatibility;
  // ...
  // todo: create: data-tables, functions, prototypes; etc...
  // ...
  
  // todo: final:
  /* jCafe unit output */ jCafeSelf =

  // you will generally, want to return a function, but you can return anything.
  // you could request a module, and configure that module to be "you" using:
  // jCafe.module(jCafePath); /* rather than */ var myFunctionDemo =
  
  function() {
    // local values: jCafePath, jCafeSelf, jCafeUnit
    // you could also return this function, bound to an object, so as to,
    // return a linked object method as a single unit.
    return "wow, that was cool, do it again with another value type";
    
  }; // jCafe prepared output

  // jCafe: link prepared output
  jCafeUnit = jCafe.link(jCafePath, jCafeSelf); 

  return /* NOTHING */;
 
}).apply (

  this, // whatever you want keyword "this" to be, during: initialization
  
  [ // initializer parameters
    /* jCafePath = */ "acme.jcafe.link.template"
  ]
  
);

