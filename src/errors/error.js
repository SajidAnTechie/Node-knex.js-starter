class BaseError extends Error {
  constructor(message) {
    this.message = message;
  }
}

export default BaseError;
