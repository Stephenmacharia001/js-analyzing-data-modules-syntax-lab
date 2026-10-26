require('datejs');

//create a combine user function with rest parameters (...args)
function combineUsers(...args) {
  // initialize the return object 
  const combineObject = {
    users: []  };

    //loop through args to isolate each array 
    for(let i = 0; i < args.length; i++) {
      const currentArray =args[i];
      conmbineObject.Users = [...combineObject.users, ...currentArray];
    }
    combineObject.merge_date = Date.today().toString('m/d/yyyy');
    return combineObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};