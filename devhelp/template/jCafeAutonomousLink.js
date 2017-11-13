// unit: acme.jcafe.link.template

(function jCafeAutonomousLink (jCafePath) {

  // if you need a back reference to your unit data or definition.
  var jCafeSelf, jCafeUnit;

  // do stuff: check compatibility, setup: tables, constructors; etc...

  // prepare jCafe output
  jCafeSelf = function() {
  
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

