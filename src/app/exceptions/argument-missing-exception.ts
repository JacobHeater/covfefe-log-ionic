export class ArgumentMissingException extends Error {
  constructor(argName: string) {
    super(`Argument ${argName} was expected, but was not provided.`);
  }
}
