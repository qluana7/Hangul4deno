import {
    Hangul,
    Range,
    Final
} from "../mod.ts"

console.log(Hangul.random(5));
console.log(Hangul.random(5, {allowFinal: false, countVariance: new Range(-2, 2)}));
console.log(Hangul.random(4, {finalLimit: 2}));

const ex_final: Final[] = [ "ㄲ", "ㄳ", "ㄵ", "ㄶ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", 
                            "ㄿ", "ㅀ", "ㅄ", "ㅋ", "ㅌ", "ㅊ", "ㅍ", "ㅎ" ];

console.log(Hangul.random(3, 
    {
        finalLimit: new Range(0, 1),
        countVariance: new Range(-2, 1),
        exclude: {
            initial: { enabled: true },
            neutral: { enabled: true,
                       data: [ "ㅒ", "ㅘ", "ㅙ", "ㅚ", "ㅝ", "ㅞ", "ㅟ" ] },
            final:   { enabled: true,
                       data: ex_final }
        }
    }
));
