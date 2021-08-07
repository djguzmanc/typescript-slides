// js
function pluckJs(obj, keyName) {
  return obj[keyName];
}

// SmartGuy definition
type SmartGuy = { name: string, age: number };
const obj: SmartGuy = { name: 'Julian', age: 26 };

// No key name check 😐
let prop = pluckJs(obj, 'c');

// let's turn our js function into a well typed with Ts
function pluckTs(obj: SmartGuy, keyName: keyof SmartGuy) {
  return obj[keyName];
}

// TS tells us: watch out!
prop = pluckTs(obj, 'c');

// What about other objects?, let's build a better pluck fn
// with generics
function betterPluckTs<T>(obj: T, keyName: keyof T) {
  return obj[keyName];
}

const fancyObj = { a: 'fancy', object: '😬' };
// the source object could be anything and ts still helps us
prop = betterPluckTs(fancyObj, 'a');

// Ts: That's not a fancyObj prop 🥴
prop = betterPluckTs(fancyObj, 'Object');

