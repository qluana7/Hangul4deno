import { toKorean } from "../modules/convert.ts"
import { disassemble } from "../assemblers/disassemble.ts"
import { InteractLists } from "./interactList.ts"
import { HangulBuilder } from "./hangulBuilder.ts"

function insert(origin: string, ind: number, value: string): string {
    return [origin.slice(0, ind), value, origin.slice(ind)].join('');
}

/**
 * Specific string class which provides function for hangul
 */
export class Hangul {
    /**
     * Declare new Hangul class
     * @param s Initial value
     */
    constructor(s: string) {
        this.String = s;
    }
    
    private String: string;
    
    /**
     * Convert string of this class to Korean
     * @returns Korean string
     */
    toKor(): string {
        return Hangul.engToKor(this.String);
    }
    
    /**
     * Convert string of this class to English
     * @returns English string
     */
    toEng(): string {
        return Hangul.korToEng(this.String);
    }
    
    /**
     * Append value to string of this class
     * @param value The value want to append. Also can use HangulBuilder
     */
    append(value: string | HangulBuilder): void {
        if (value instanceof HangulBuilder) {
            this.String += value.build();
        } else {
            this.String += value;
        }
    }
    
    /**
     * Insert value to specific location of string of this class
     * @param index The index want to append string
     * @param value The value want to append. Also can use HangulBuilder
     */
    insert(index: number, value: string | HangulBuilder): void {
        if (value instanceof HangulBuilder) {
            this.String = insert(this.String, index, value.build())
        } else {
            this.String = insert(this.String, index, value);
        }
    }
    
    /**
     * Return value of this class as string
     * @returns The string value of this class
     */
    toString(): string {
        return this.String;
    }
    
    /**
     * Convert specific value to Korean.
     * @example Hangul.engToKor('dks') // '안'
     * @param str The value want to convert
     * @returns Korean string
     */
    static engToKor(str: string): string {
        return toKorean(str);
    }
    
    /**
     * Convert specific value to English.
     * @example Hangul.korToEng('안') // 'dks'
     * @param str The value want to convert
     * @returns English string
     */
    static korToEng(str: string): string {
        const c = disassemble(str);
        let r = [];
    
        for (let i = 0; i < c.length; i++) {
            const ko = InteractLists.allInteractions.map(v => v[0]);
            const en = InteractLists.allInteractions.map(v => v[1]);
            r.push(
                ko.includes(c[i]) ?
                en[ko.indexOf(c[i])] :
                c[i]
                );
        }
        
        return r.reduce((p, c) => p + c);
    }
}

// Because of stability, decided to remove it.

/*
declare global {
    interface String {
        toHangul(): Hangul;
    }
}

String.prototype.toHangul = function (): Hangul {
    return new Hangul(this.toString());
}
*/