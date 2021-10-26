import { toKorean }      from "../modules/convert.ts"
import { Assembler }     from "../entities/assembler.ts"
import { InteractLists } from "./interactList.ts"
import { HangulBuilder } from "./hangulBuilder.ts"
import { StringType,
         getType }       from "./stringType.ts"
import { random,
         RandomOption }  from "../modules/random.ts"

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
        this.content = s;
    }
    
    private content: string;
    
    /**
     * Convert string of this class to Korean
     * @returns Korean string
     */
    toKor(): string {
        return Hangul.engToKor(this.content);
    }
    
    /**
     * Convert string of this class to English
     * @returns English string
     */
    toEng(): string {
        return Hangul.korToEng(this.content);
    }
    
    /**
     * Append value to string of this class
     * @param value The value that want to append. Also can use HangulBuilder
     */
    append(value: string | HangulBuilder): void {
        if (value instanceof HangulBuilder) {
            this.content += value.build();
        } else {
            this.content += value;
        }
    }
    
    /**
     * Insert value to specific location of string of this class
     * @param index The index that want to append string
     * @param value The value that want to append. Also can use HangulBuilder
     */
    insert(index: number, value: string | HangulBuilder): void {
        if (value instanceof HangulBuilder) {
            this.content = insert(this.content, index, value.build())
        } else {
            this.content = insert(this.content, index, value);
        }
    }
    
    /**
     * Return value of this class as string
     * @returns The string value of this class
     */
    toString(): string {
        return this.content;
    }
    
    
    /**
     * Converts Korean and English mixed strings into normal strings
     * @example Hangul.fix('dㅏㄴ') // '안'
     * @returns Fixed value
     */
    fix(): void {
        this.content = Hangul.fix(this.content);
    }
    
    /**
     * Get type of current value. Refer StringType.
     * @returns The type of string.
     */
    getType(): StringType {
        return Hangul.getType(this.content);
    }
    
    /**
     * Convert specific value to Korean.
     * @example Hangul.engToKor('dks') // '안'
     * @param str The value that want to convert
     * @returns Korean string
     */
    static engToKor(str: string): string {
        return toKorean(str);
    }
    
    /**
     * Convert specific value to English.
     * @example Hangul.korToEng('안') // 'dks'
     * @param str The value that want to convert
     * @returns English string
     */
    static korToEng(str: string): string {
        const c = Assembler.disassemble(str);
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
    
    /**
     * Converts Korean and English mixed strings into normal strings
     * @example Hangul.fix('dㅏㄴ') // '안'
     * @param str The value that want to fix.
     * @returns Fixed value
     */
    static fix(str: string): string {
        return Assembler.assemble(Assembler.disassemble(str));
    }
    
    /**
     * Get type of string object. Refer StringType.
     * @param str The value that want to determine the type
     * @returns The type of string.
     */
    static getType(str: string): StringType {
        return getType(str);
    }
    
    /**
     * Get random hangul
     * @param count The count that want to get
     */
    static random(count: number): Hangul
    /**
     * Get random hangul with option
     * @param count The count that want to get
     * @param opt The option for random
     */
    static random(count: number, opt:  RandomOption): Hangul
    static random(count: number, opt?: RandomOption): Hangul {
        if (opt === undefined) {
            return random(count);
        } else {
            return random(count, opt);
        }
    }
}