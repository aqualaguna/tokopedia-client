export default class UnauthorizedError extends Error {
  constructor(m?: string) {
      super(m);
      // Set the prototype explicitly.
      Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}