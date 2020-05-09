export default class UnknownError extends Error {
  constructor(m?: string) {
      super(m);
      // Set the prototype explicitly.
      Object.setPrototypeOf(this, UnknownError.prototype);
  }
}