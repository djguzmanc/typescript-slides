// What if you want to turn every object property 
// into some custom types, like, making every property
// nullable...
type Warrior = {
  strength: number;
  name: string;
  suitColor: string;
};

/**
 * If your tsconfig file is set to strict null checks,
 * this null assign will throw an error
 */
const warrior: Warrior = {
  name: 'Mauricio',
  strength: null,
  suitColor: 'red',
};

// Let's make every property nullable!
// Wolololoooooooooo 🧙
type ConvertedWarrior = {
  [P in keyof Warrior]: Warrior[P] | null;
}

// There is no error!
const flexibleWarrior: ConvertedWarrior = {
  name: 'Mauricio',
  strength: null,
  suitColor: 'blue',
};

// Wait! I wanted only number props to be nullable
// Let's use conditional types! ❤️‍🔥
// If our type is a number, make it nullable!
type NotMuchFlexibleWarrior = {
  [P in keyof Warrior]: Warrior[P] extends number ? Warrior[P] | null : Warrior[P];
}

// Only strength prop is nullable
const notMuchFlexibleWarrior: NotMuchFlexibleWarrior = {
  name: null,
  strength: null,
  suitColor: 'blue',
};
