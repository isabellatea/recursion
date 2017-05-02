
var stringifyJSON = function(obj) {

  //addresses various input types
  if (obj === null || typeof obj === undefined || typeof obj === 'boolean' || typeof obj === 'number' || obj.constructor === Function){
    return '' + obj;
  } 

  //strings
  if (typeof obj === 'string'){
    return '"' + obj + '"';
  }

  //arrays
  if (Array.isArray(obj)){
    if (obj.length){
      var stringedArray = [];

      for (var i = 0; i < obj.length; i++){
        stringedArray.push(stringifyJSON(obj[i]));
      }
      return '[' + stringedArray + ']';
    } else {
      return '[]';
    }
  }

  //objects
  if (obj.constructor === Object){
    var stringifiedProperties = [];
    var objKeys = Object.keys(obj);
    
    if (objKeys.length){
      for (var i = 0; i <= objKeys.length; i++){
        if (objKeys[i] === undefined || obj[objKeys[i]] === undefined || !objKeys[i] || typeof objKeys[i] === 'function' || typeof obj[objKeys[i]] === 'function'){
        } else {
          stringifiedProperties.push(stringifyJSON(objKeys[i]) + ":" + stringifyJSON(obj[objKeys[i]]));
        }
      }
    }
    return '{' + stringifiedProperties.join(",") + '}';

  } else {
    return {};
  }

};