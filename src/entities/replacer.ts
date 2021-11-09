import { Hangul } from "./hangul.ts"
import { Assembler } from "./assembler.ts"

import {
    Initial,
    Neutral,
    Final
} from "./interactList.ts"

/**
 * Provides static method replacing characters in disassembled korean
 */
export class Replacer {
    /**
     * Replace first character using replace function.
     * @param input The string or Hangul class to replace
     * @param replacer The replace function. The letter value will replace as return value.
     */
    static infect<T extends Initial | Neutral | Final>(input: Hangul | string, replacer: (letter: T) => T): Hangul
    /**
     * Replace first character that match with `from` to `to`.
     * @param input The string or Hangul class to replace
     * @param from The korean character that you want to select.
     * @param to The korean character to replace.
     */
    static infect<T extends Initial | Neutral | Final>(input: Hangul | string, from: T,   to: T): Hangul
    /**
     * Replace first character that included in `from` to `to`.
     * @param input The string or Hangul class to replace
     * @param from The korean character array that you want to select.
     * @param to The korean character to replace.
     */
    static infect<T extends Initial | Neutral | Final>(input: Hangul | string, from: T[], to: T): Hangul
    static infect<T extends Initial | Neutral | Final>(input: Hangul | string, para1: any, para2?: T): Hangul {
        const inf =
            para1 instanceof Function
             ? new Infection(input, para1)
              : new Infection(input, para1, para2);
        
        inf.infect();
        return new Hangul(inf.toString());
    }
    
    /**
     * Replace all characters using replace function.
     * @param input The string or Hangul class to replace
     * @param replacer The replace function. The letter value will replace as return value.
     */
    static replaceAll<T extends Initial | Neutral | Final>(input: Hangul | string, replacer: (letter: T) => T): Hangul
    /**
     * Replace all characters that match with `from` to `to`.
     * @param input The string or Hangul class to replace
     * @param from The korean character that you want to select.
     * @param to The korean character to replace.
     */
    static replaceAll<T extends Initial | Neutral | Final>(input: Hangul | string, from: T,   to: T): Hangul
    /**
     * Replace all characters that included in `from` to `to`.
     * @param input The string or Hangul class to replace
     * @param from The korean character array that you want to select.
     * @param to The korean character to replace.
     */
    static replaceAll<T extends Initial | Neutral | Final>(input: Hangul | string, from: T[], to: T): Hangul
    static replaceAll<T extends Initial | Neutral | Final>(input: Hangul | string, para1: any, para2?: T): Hangul {
        const inf =
            para1 instanceof Function
             ? new Infection(input, para1)
              : new Infection(input, para1, para2);
        
        for (;!inf.isInfector;) inf.infect();
        
        return new Hangul(inf.toString());
    }
}

/**
 * Provides that sequentially replace function for single object.
 */
export class Infection<T extends Initial | Neutral | Final> {
    /**
     * Declare new `Infection` class with replace function.
     * @param str Original string or Hangul class
     * @param replacer The replace function. The letter value will replace as return value.
     */
    constructor(str: Hangul | string, replacer: (letter: T) => T)
    /**
     * Declare new `Infection` class with `from` and `to`
     * @param str Original string or Hangul class
     * @param from The korean character that you want to select.
     * @param to The korean character to replace.
     */
    constructor(str: Hangul | string, from: T,   to: T)
    /**
     * Declare new `Infection` class with `from` and `to`
     * @param str Original string or Hangul class
     * @param from The korean character array that you want to select.
     * @param to The korean character to replace.
     */
    constructor(str: Hangul | string, from: T[], to: T)
    constructor(str: Hangul | string, para1: T | T[] | Function, para2?: T) {
        this.word = str instanceof Hangul ? str.toString() : str;
        
        if (para1 instanceof Function) {
            this.replacer = para1 as (letter: T) => T;
        } else {
            this.from = para1;
            this.to = para2 as T;
        }
    }
    
    private word: string;
    
    /** The replace function. The letter value will replace as return value. */
    replacer?: (letter: T) => T;
    
    /** The korean character or array that you want to select. */
    from?: T | T[];
    /** The korean character to replace. */
    to?: T;
    
    /** Whether all value that match with `from` replace to `to` */
    isInfector: boolean = false;
    /** The count of how many values have been replaced. */
    infectCount: number = 0;
    
    /** Replace first value that match with `from` to `to` */
    infect(): void {
        const w = Assembler.disassemble(this.word);
        
        if (this.replacer !== undefined) {
            for(let i = 0; i < w.length; i++) {
                if (!/[ㄱ-ㅣ]/.test(w[i])) continue;
                if (this.replacer(w[i] as T) !== w[i]) { w[i] = this.replacer(w[i] as T); break; }
            }
            
            if (w.map(l => this.replacer!(l as T)).every((v, ind) => v === w[ind])) this.isInfector = true;
        } else {
            for (let i = 0; i < w.length; i++) {
                if (!/[ㄱ-ㅣ]/.test(w[i])) continue;
                if ((this.from as T[]).includes(w[i] as T)) { w[i] = this.to!; break; }
            }
            
            if (w.every(v => !this.from!.includes(v as T))) this.isInfector = true;
        }
        
        this.infectCount++;
        this.word = Assembler.assemble(w);
    }
    
    /** return current string. */
    toString(): string {
        return this.word;
    }
}