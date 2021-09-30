import {
    HangulBuilder,
    Hangul
} from "../mod.ts"

const builder1 = new HangulBuilder();

builder1.setInitial('ㅇ');
builder1.setNeutral('ㅏ');
builder1.setFinal('ㄴ');

const builder2 = new HangulBuilder('ㄴ', 'ㅕ', 'ㅇ');

const han = new Hangul(' 세계');

han.insert(0,  [builder1.build(), builder2.build()].join(''));
han.append('!');

console.log(han.toString());
console.log(han.toEng());