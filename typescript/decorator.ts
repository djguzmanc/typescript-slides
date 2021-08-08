// What if there is repetitive logic that needs
// to be executed among multiple methods?

// Think about a function that gets executed  whenever
// an user clicks on a confirmation button, or get cancelled
// if hits the cancel button 😵

class FancyComponent {
  deleteUserFromDb(userId: string): void {
    // Delete the user 
  }
}

// A non recoverable action like deleting an user may ask
// from a confirmation first, let's decorate this function
// so we will always ask for confirmation before execute
// such dangerous code

function AreYouSure(prompt: string) {
  return function (
    // Either the constructor function of the class for 
    // a static method, or the prototype of the class for an instance method.
    target: any,

    // The name of the method.
    propertyKey: string,

    // The Property Descriptor for the method.
    descriptor: PropertyDescriptor
  ) {
    // We get the original method
    let originalMethod = descriptor.value;

    // Turn the function into a new one with our custom logic
    descriptor.value = function (...args: any[]) {
      const confirmation = confirm(prompt);

      // If the user confirms the action we execute
      // the original method
      if (confirmation) {
        let result = originalMethod.apply(this, args);
        return result;
      }
    }
  }
}

// 💥💥💥💥💥
class FancierComponent {
  @AreYouSure('This action cannot be rolled back')
  deleteUserFromDb(userId: string): void {
    // Delete the user 
  }
}