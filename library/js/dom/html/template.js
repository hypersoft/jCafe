
new jCafe("js.dom.html.template.stamp",
  ["js.global.document"],
  function(document){
    return function(HTMLNode){ // stamp template content
      if (HTMLNode) return document.importNode(HTMLNode.content, true);
      return null;
    }
  }
);

new jCafe("js.dom.html.template.import",
  [
    "js.global.document",
    "js.dom.html.template.stamp",
    "js.dom.html.link.transport"
  ],
  function (document, stamp, transport) {
    return function(linkSelector, elementSelector, destinationSelector) {
      var link = document.querySelector(linkSelector);
      if (! link)
        throw "global document query selector: '"+linkSelector
          +"' task failed for template link import"
      var address = elementSelector || linkSelector,
        DocumentFragment = stamp(transport(link, address));
      if (! DocumentFragment)
        throw "global document link: '"+linkSelector
          +"' content query selector: '"+address
            +"' task failed for template link content import"
      var destination = document.querySelector(destinationSelector);
      if (destination === undefined) return DocumentFragment;
      else destination.appendChild(DocumentFragment);        
    };      
  }
);

