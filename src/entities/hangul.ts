import { toKorean } from "../modules/convert.ts"

export class Hangul {
    constructor(s: string) {
        this.String = s;
    }
    
    private String: String;
    
    static toKor(str: string): string {
        return toKorean(str);
    }
    
    // TODO : Make "toEng" method.
}

declare global {
    interface String {
        toHangul(s: string): Hangul;
    }
}

String.prototype.toHangul = (s: string): Hangul => new Hangul(s);