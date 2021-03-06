import {
    Hangul
} from "../mod.ts"

const han: Hangul = new Hangul("테스트");

console.log(han.toString());

han.append("!");
han.insert(0, "insert ");

console.log(han.toString());

console.log(Hangul.engToKor("dkssud tprP!"));
console.log(Hangul.engToKor("dkf tn djqtsms answk cjfl : 32암$%@ asakdno"));

console.log(Hangul.korToEng("안녕 세계!"));
console.log(Hangul.korToEng("알 수 없는 문자 처리 : 32dka$%@ asakdno"));

console.log(Hangul.korToEng(han));
console.log(Hangul.engToKor(new Hangul("xptmxm")));