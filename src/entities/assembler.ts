import { assemble, disassemble } from "../modules/assemble.ts"
import { Hangul } from "./hangul.ts"

/**
 * Provide hangul assemble and disassemble function.
 */
export class Assembler {
    /**
     * This will assemble pieces of hangul.
     * @example Assembler.assemble(['ㅇ','ㅏ','ㄴ']) // '안'
     * @param str The array value which want to assemble
     * @returns Assembled hangul
     */
    static assemble(str: string[]): string {
        return assemble((str as string[]).reduce((p, c) => p + c));
    }
    
    /**
     * This will disassemble hangul.
     * @example Assembler.disassemble(new Hangul('안')) //['ㅇ','ㅏ','ㄴ']
     * @param han The hangul class to disassemble
     * @returns Disassembled hangul
     */
    static disassemble(han: Hangul): string[]
    /**
     * This will disassemble hangul.
     * @example Assembler.disassemble('안') // ['ㅇ','ㅏ','ㄴ']
     * @param str The string value to disassemble
     * @returns Disassembled hangul
     */
    static disassemble(str: string): string[]
    static disassemble(obj: Hangul | string): string[] {
        return disassemble(obj instanceof Hangul ? obj.toString() : obj);
    }
}
