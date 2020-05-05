export default class InvalidConfigError extends Error {
  constructor(m?: string) {
      super(m);
      // Set the prototype explicitly.
      Object.setPrototypeOf(this, InvalidConfigError.prototype);
  }
}