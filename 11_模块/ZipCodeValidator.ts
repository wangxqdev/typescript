/* 将整个模块导入到一个变量，并通过它来访问模块的导出部分 */
import * as validator from "./Validation";

/* 导出声明 */
// export const numberRegexp = /^[0-9]+$/;
// export class ZipCodeValidator implements StringValidator {
//   isAcceptable(s: string): boolean {
//     return s.length === 5 && numberRegexp.test(s);
//   }
// }

/* 默认导出 */
// export default class ZipCodeValidator implements validator.StringValidator {
//   isAcceptable(s: string): boolean {
//     return s.length === 5 && numberRegexp.test(s);
//   }
// }
class ZipCodeValidator implements validator.StringValidator {
  static numberRegexp: RegExp = /^[0-9]+$/;
  isAcceptable(s: string): boolean {
    return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
  }
}
/* 导出语句 */
// export { ZipCodeValidator };
// export { ZipCodeValidator as mainValidator };

/* export = 和 import = require() */
export = ZipCodeValidator;