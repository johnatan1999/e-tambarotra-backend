export class CoreException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CoreException';
  }
}
