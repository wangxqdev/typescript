/* 数字枚举 */
// enum Direction {
//     UP = 1,
//     DOWN,
//     LEFT,
//     RIGHT,
// }

/* 字符串枚举 */
// enum Directions {
//     UP = "UP",
//     DOWN = "DOWN",
//     LEFT = "LEFT",
//     RIGHT = "RIGHT",
// }

/* 异构枚举 */
enum BooleanLikeHeterogeneous {
    No = 0,
    Yes = "YES",
}

/* 计算的和常量成员 */
enum FileAccess {
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    G = "123".length
}

/* 运行时的枚举 */
enum E {
    X, Y, Z
}
function f(obj: { X: number }): (number | E) {
    return obj.X;
}
console.log(f(E));

/* 反向映射 */
enum Enum {
    A
}
let a: (Enum | number) = Enum.A;
let nameOfA: string = Enum[a];
console.log(nameOfA);

/* const 枚举 */
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

/* 外部枚举 */
declare enum EnumOut {
    A = 1,
    B,
    C = 2
}
