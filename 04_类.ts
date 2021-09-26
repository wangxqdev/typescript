/* 公共，私有与受保护的修饰符 */
/* 默认为 public */

/* readonly 修饰符 */
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
// 错误! name 是只读的.
// dad.name = "Man with the 3-piece suit";

/* 存取器 */
let passcode = "secret passcode";

class Employee {

  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}