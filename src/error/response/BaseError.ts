export default class BaseError extends Error {
  constructor(error_code: number,messages: string, reason: string) {
      super(`
        ${error_code}: ${messages}
        ${reason}
      `);
      // Set the prototype explicitly.
      Object.setPrototypeOf(this, BaseError.prototype);
  }
}