// Check if a variable is wether a number o wether a string...
// ezpz lemon squeezy

function someFn(param: string | number) {
  if (typeof param === 'string') {
    // param could be handled as a string
    param.toLocaleLowerCase();
  } else {
    // param could be handled as a number
    // This is well known as type narrowing
    param.toExponential();
  }
}

// What about complex (non class) types?

type Animal = {
  name: string;
  isDomestic: boolean;
}

function isAnimal(obj: unknown): obj is Animal {
  if ((obj as object).hasOwnProperty('name')) return true;
  return false;
}

type Vehicle = {
  wheels: number;
  isAutomatic: boolean;
}

// You could use `any` type instead of `unknown`, avoiding
// the "as object" cast. But, in that case, you're implicitly
// assuming your param is always an object with the `hasOwnProperty`
// function...
function isVehicle(obj: unknown): obj is Vehicle {
  if ((obj as object).hasOwnProperty('wheels')) return true;
  return false;
}

function someFn2(param: unknown) {
  if (isAnimal(param)) {
    // Object can be safety handled as an Animal
    console.log(param.isDomestic);
  } else if (isVehicle(param)) {
    // Object can be safety handled as a Vehicle
    console.log(param.isAutomatic);
  }
}

// Don't you like the ifs? 😑
function onLineGuard(obj: unknown): asserts obj is Vehicle {
  if (!(obj as object).hasOwnProperty('wheels'))
    throw new Error("Not a Vehicle!");
}

function someFn3(param: unknown) {
  onLineGuard(param);

  // Object can be safety handled as a Vehicle
  console.log(param.isAutomatic);
}

