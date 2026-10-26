// Load the datejs package outside the function as required by Step 5
require('datejs');

/**
 * Task 2 - Step 1: Create a combineUsers function with a rest parameter (...args)
 * @param  {...Array<string>} args - Indeterminate arrays of usernames
 * @returns {Object} combinedObject
 */
function combineUsers(...args) {
  
  // Step 2: Initialize the Return Object
  const combinedObject = {
    users: []
  };

  // Step 3 & 4: Loop through args and merge items using the spread operator
  for (let i = 0; i < args.length; i++) {
    const currentArray = args[i];
    combinedObject.users = [...combinedObject.users, ...currentArray];
  }

  // Step 5: Get today's date formatted as M/d/yyyy with a fail-safe fallback
  if (typeof Date.today === 'function') {
    // Standard  utilizing the datejs prototype
    combinedObject.merge_date = Date.today().toString('M/d/yyyy');
  } else {
    // Environmental sandbox fallback formatting matching M/d/yyyy perfectly
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();
    combinedObject.merge_date = `${month}/${day}/${year}`;
  }

  // Step 7: Return the object
  return combinedObject;
}

module.exports = { combineUsers };


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};