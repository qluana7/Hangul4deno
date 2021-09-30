import { assemble } from "../assemblers/assemble.ts"
import { disassemble } from "../assemblers/disassemble.ts"
import {} from "../assemblers/disassemble.ts"

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
     * This will disassemble hanugl.
     * @example Assembler.disassemble('안') // ['ㅇ','ㅏ','ㄴ']
     * @param str The string value which want to disassemble
     * @returns Disassembled hangul
     */
    static disassemble(str: string): string[] {
        return disassemble(str);
    }
}