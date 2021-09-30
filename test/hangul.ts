import {
    Hangul
} from "../mod.ts"

const han = "테스트".toHangul();

console.log(han.toString());

han.append("!");
han.insert(0, "Insert ");

console.log(han.toString());

console.log(Hangul.engToKor("dkssud tprP!"));
console.log(Hangul.engToKor("dkf tn djqtsms answk cjfl : 32암$%@ asakdno"));

console.log(Hangul.korToEng("안녕 세계!"));
console.log(Hangul.korToEng("알 수 없는 문자 처리 : 32dka$%@ asakdno"));