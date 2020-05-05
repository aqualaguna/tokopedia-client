export default class ClientNotSetError extends Error {
  constructor(m?: string) {
      super(m);
      // Set the prototype explicitly.
      Object.setPrototypeOf(this, ClientNotSetError.prototype);
  }
}