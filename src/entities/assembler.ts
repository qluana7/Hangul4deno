import { assemble } from "../assemblers/assemble.ts"
import {} from "../assemblers/disassemble.ts"

export class Assembler {
    static assemble(str: string | string[]): string {
        if (typeof str === "string")
            return assemble(str as string);
        else
            return assemble((str as string[]).reduce((p, c) => p + c));
    }
}