/* this */
interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  // 函数声明
  createCardPicker(this: Deck): () => Card;
  // createCardPicker: (this: Deck) => () => Card;
}
let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // An arrow function cannot have a 'this' parameter.
  // createCardPicker: (this: Deck) => () => {}
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    }
  }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

/* 重载 */
let suits = ["hearts", "spades", "clubs", "diamonds"];
// 重载
function pickCard(x: { suit: string; card: number; }[]): number;
function pickCard(x: number): { suit: string; card: number; };
// 实现
function pickCard(x: (object[] | number)): any {
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  } else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}
