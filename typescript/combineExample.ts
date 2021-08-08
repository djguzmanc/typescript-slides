// Let you combine the members of two 
// or more types by using the ‘&’ 

interface Employee {
  work: () => string;
}

interface Manager {
  manage: () => string;
}

type Supervisor = Employee & Manager;

// john can both work and manage
let john: Supervisor;