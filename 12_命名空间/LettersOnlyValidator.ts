/// <reference path="Validation.ts" />

namespace Validation {
  const lettersRegexp: RegExp = /^[A-Za-z]+$/;
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string): boolean {
      return lettersRegexp.test(s);
    }
  }
}