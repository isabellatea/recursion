var getElementsByClassName = function(className) {
  var results = [];
  var allElements = document.body;

  var checkForMatch = function(node){
    if (node.classList && node.classList.contains(className)){
    results.push(node);
    }
  }

  var traverseDown = function(node, callback){
    callback(node);
    node = node.firstChild;
    while(node){
      traverseDown(node, callback);
      node = node.nextSibling;
    }
  }

  traverseDown(allElements, checkForMatch);
  return results;

};
