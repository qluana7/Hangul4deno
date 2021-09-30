import { KoreanChar } from "../modules/convert.ts"
import { InteractLists } from "./interactList.ts"

/**
 * The builder which combine pieces of hangul
 */
export class HangulBuilder {
    private kchar: KoreanChar;
    
    constructor()
    constructor(initial:  string, neutral:  string, final:  string)
    constructor(initial:  string, neutral:  string, final?: string)
    constructor(initial:  string, neutral?: string, final?: string)
    constructor(initial?: string, neutral?: string, final?: string) {
        this.kchar = new KoreanChar();
        if (initial !== undefined) this.setInitial(initial);
        if (neutral !== undefined) this.setNeutral(neutral);
        if (final   !== undefined) this.setFinal(final);
        
    }
    
    /**
     * Set initial of this
     * @param ch The value must be included in InteractLists.initialKo
     */
    setInitial(ch: string): void {
        this.kchar.initial = InteractLists.initialKo.indexOf(ch);
    }
    
    /**
     * Set neutral of this
     * @param ch The value must be included in InteractLists.neutralKo
     */
    setNeutral(ch: string): void {
        this.kchar.neutral = InteractLists.neutralKo.indexOf(ch);
    }
    
    /**
     * Set final of this
     * @param ch The value must be included in InteractLists.finalKo
     */
    setFinal(ch: string): void {
        this.kchar.final = InteractLists.finalKo.indexOf(ch);
    }
    
    /**
     * Assemble initial, neutral and final.
     * Then export as hangul
     * @returns Assembled string as hangul
     */
    build(): string {
        return this.kchar.toChar() ?? "";
    }
}