// --- Directions
// Array.prototype.filter creates a new array populated with the results of calling a provided function on every element in the calling array.

// Implement Array.prototype.filter. 
// To avoid overwriting the actual Array.prototype.filter instead implement it as Array.prototype.myFilter.

Array.prototype.myFilter = function (callbackFn, thisArg) {
  // length of array arg being called with custom myFilter
  const len = this.length;
  const results = [];

  for (let i = 0; i < len; i++) {
    // Cache value in case the callback function modifies it.
    const cachedI = this[i];
    if (
      // Ignore index if value is not defined for index (e.g. in sparse arrays).
      Object.hasOwn(this, i) &&
      callbackFn.call(thisArg, cachedI, i, this)
    ) {
      results.push(cachedI);
    }
  }

  return results;
};

module.exports = Array.prototype.myFilter;
