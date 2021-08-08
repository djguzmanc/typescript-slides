// Sometimes an object type definition can hold
// multiple values in one of its properties

// Let's think about an HTTP response
type HTTPResponse = {
  status: number;
  body: any;
  url: string;
  headers: { [key: string]: string };
}

const response: HTTPResponse = {
  body: { user: 'Julian', id: 1 },
  headers: { Auth: 'jwt' },
  status: 200,
  url: 'http://api.com/fixTheBug'
};

response.body.notAProp; // ☠️

// The body property can be anything, but we can do something better 
// than just declaring it as `any` type

type GenericHTTPResponse<T> = {
  status: number;
  body: T;
  url: string;
  headers: { [key: string]: string };
}

// Now you can specify which is the body type
const genericResponse: GenericHTTPResponse<{
  user: string,
  id: number,
}> = {
  body: { user: 'Julian', id: 1 },
  headers: { Auth: 'jwt' },
  status: 200,
  url: 'http://api.com/fixTheBug'
};

// TS complains 💥
genericResponse.body.notAProp;


/** CONSTRAINTS */

// Isn't dangerous for a type to accept anything?
// Well, ts let you add some restrictions (constraints)
type ConstrainedHTTPResponse<T extends object> = {
  status: number;
  body: T;
  url: string;
  headers: { [key: string]: string };
}

// Ts complains, the generic type should be something like an
// object, not a string 🤔
const constrainedResponse: ConstrainedHTTPResponse<string> = {
  body: '',
  headers: { Auth: 'jwt' },
  status: 200,
  url: 'http://api.com/fixTheBug'
};

// Some coll use cases:

// Mapping the generic type `T` with default generic types
// Now body is an object with all its properties made optional
type MappedHTTPResponse<T extends object, K = Partial<T>> = {
  status: number;
  body: K;
  url: string;
  headers: { [key: string]: string };
}
