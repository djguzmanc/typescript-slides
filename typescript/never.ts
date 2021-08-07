type Person = {
  role: 'ADMIN' | 'PLAYER' | 'CLIENT',
}

// This function forgets to consider the CLIENT role
// with no warning or notification
const doSomething = (person: Person) => {
  switch (person.role) {
    case 'ADMIN':
      break;
    case 'PLAYER':
      break;
  }
}

// Let's use Ts never type to force us to
// consider every case
const doSomethingSafe = (person: Person) => {
  switch (person.role) {
    case 'ADMIN':
      break;
    case 'PLAYER':
        break;
    default:
      // Error here 🥳!
      const a: never = person.role;
  }
}

// If you fell uncomfortable with the unused 'a' variable:

// This function return type is never because
// it nevers reach its end
const ups = (a: never): never => {
  throw new Error(`${a} Didn't expect to reach here 😨`);
}

// Considering all cases 😎
const doSomethingSafer = (person: Person) => {
  switch (person.role) {
    case 'ADMIN':
      break;
    case 'PLAYER':
      break;
    case 'CLIENT':
      break;
    default:
      ups(person.role);
  }
}
