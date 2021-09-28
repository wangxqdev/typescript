/// <reference path="./Validation.ts"/>

namespace Validation {
  const numberRegexp: RegExp = /^[0-9]+$/;
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}