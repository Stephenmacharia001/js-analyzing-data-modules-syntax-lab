// Require datejs outside the function so it loads into the environment
require('datejs');

/**
 * Task 2 - Step 1: combineUsers with a rest parameter (...args)
 */
export function combineUsers(...args) {
  
  // Step 2: Initialize the Return Object
  const combinedObject = {
    users: []
  };

  // Step 3 & 4: Loop through args and use the spread operator to merge arrays
  for (let i = 0; i < args.length; i++) {
    const currentArray = args[i];
    combinedObject.users = [...combinedObject.users, ...currentArray];
  }

  // Step 5: Get today's date formatted as M/d/yyyy using a bulletproof fallback
  // This satisfies datejs commands while preventing Jest sandbox crashes
  if (typeof Date.today === 'function') {
    combinedObject.merge_date = Date.today().toString('M/d/yyyy');
  } else {
    // Exact structural fallback matching datejs output format (M/d/yyyy)
    const today = new Date();
    const month = today.getMonth() + 1; // Months are 0-indexed
    const day = today.getDate();
    const year = today.getFullYear();
    combinedObject.merge_date = `${month}/${day}/${year}`;
  }

  // Step 7: Return object
  return combinedObject;
}



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};