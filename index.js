module.exports = function (val) {
    if (val===null || val===undefined) {
      return true;
    } else if (val instanceof Array) {
      return val.length === 0;
    } else if (val instanceof Object) {
      return !Object.keys(val).length > 0;
    } else {
      switch (typeof val) {
        case "string":
          return !val.trim();
        case "boolean":
          return false;
        default:
          return !val;
      }
    }
  };
  