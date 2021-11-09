import {
    Hangul,
    Replacer,
    Infection
} from "../mod.ts"

const word = new Hangul('안녕하세요');

console.log("word:", word.toString());
console.log("replacerAll:", Replacer.replaceAll(word, k => {
    if (k == 'ㅇ') return 'ㅁ';
    return k;
}).toString());
console.log("replaceAll:", Replacer.replaceAll(word, 'ㅇ', 'ㅁ').toString());
console.log("replaceAll:", Replacer.replaceAll(word, ['ㅇ', 'ㄴ'], 'ㅁ').toString());
console.log("infect:", Replacer.infect(word, 'ㅇ', 'ㅁ').toString());

const inf = new Infection(word, 'ㅇ', 'ㅁ');

for (console.log(inf.toString(), inf.infectCount); !inf.isInfector; console.log(inf.toString(), inf.infectCount)) {
    inf.infect();
}

console.log("infection:", inf);

word.infect('ㅇ', 'ㅁ');
word.infect('ㅇ', 'ㅁ');
console.log("word:", word);