import { Hangul } from "../mod.ts"

let han = new Hangul("ㅌptm트wnㅇ이qㄴlek");

console.log(Hangul.fix("dks녀d하ㅅpdㅛ"));
han.fix();
console.log(han.toString());