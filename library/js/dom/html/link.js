
new jCafe("js.dom.html.link.transport",
  [],
  function(){ // transport link content
    return function(HTMLLink, HTMLElementSelector){return HTMLLink.import.querySelector(HTMLElementSelector);}
  }
);


