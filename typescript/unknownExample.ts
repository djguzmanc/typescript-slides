// Let's know how to use a Unknown type
function isString(someVariable: unknown): someVariable is string {
  return true;
}

let newVariable: unknown;
if (typeof newVariable === 'string' ) {
  newVariable.toLowerCase(); 
}