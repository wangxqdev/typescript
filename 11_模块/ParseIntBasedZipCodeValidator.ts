/* 导入一个模块中的某个导出内容 */
import { StringValidator } from "./Validation";

class ParseIntBasedZipCodeValidator implements StringValidator {
  isAcceptable(s: string): boolean {
    return s.length === 5 && parseInt(s).toString() === s;
  }
}
/* 重新导出 */
// export { ZipCodeValidator as RegExpBasedZipCodeValidator } from "./ZipCodeValidator"