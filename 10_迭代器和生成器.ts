/* for..of 语句 */
let someArray: (number | string | boolean)[] = [1, "string", false];
for (let entry of someArray) {
  console.log(entry);
}

/* for..of vs. for..in 语句 */
let list: number[] = [4, 5, 6];
// 0, 1, 2 => 取索引
for (let i in list) {
  console.log(i, list[i]);
}
// 4, 5, 6 => 取值
for (let i of list) {
  console.log(`  ${i}`);
}