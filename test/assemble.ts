import {
    Assembler
} from "../mod.ts"

console.log(Assembler.assemble("ㅇㅏㄴㄴㅕㅇ ㅅㅔㄱㅖ!"));
console.log(
    Assembler.assemble(["ㅇ", "ㅏ", "ㄹ", " ",
                    "ㅅ", "ㅜ", " ",
                    "ㅇ", "ㅓ", "ㅄ", "ㄴ", "ㅡ", "ㄴ", " ",
                    "ㅁ", "ㅜ", "ㄴ", "ㅈ", "ㅏ", " ",
                    "ㅊ", "ㅓ", "ㄹ", "ㅣ", " ", ":", " ",
                    "3", "2", "암", "$", "%", "@", " ",
                    "a", "s", "a", "k", "d", "o"]));