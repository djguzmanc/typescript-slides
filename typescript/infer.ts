// Let's say you have a dynamic array with multiple
// combinations of types, it may have string, numbers or objects,
// just numbers, just strings... any combination

const data = ['hello', 12, { world: null }];

typeof data; // (string | number | { world: null })[]
// or Array<string | number | { world: null }> if you prefer

// Now you need to create a variable that holds one value from that array
const value = data[0];
typeof value; // string | number | { world: null }

// It means that we could rewrite our definition like
const valueWithType: string | number | { world: null } = data[0];
// And Ts will not complain

// But what if your array content changes? You'll be
// forced to rewrite the line 15
// So, instead of being updating the type definitions, rely
// on typescript features!

// Let's unwrap what is inside our array...
// By definition, the array type has a generic type (its contents)
// Ok, typescript, help me inferring that 😅
type FlattenArray<T> = T extends Array<infer R> ? R : T;

// With the help of conditional types, we ask, if our type (T) is an
// array (T extends Array<infer R>) return whatever R is, if not,
// just return the same type (T)

const array = ['hello', 3];
// inner value is an string, a number
const innerValue: FlattenArray<typeof array> = array[0];

// value2 is an string, a number o an object
const value2: FlattenArray<typeof data> = array[0];

// No matter if your array contents changes, the type will always be
// up to date! 😉
