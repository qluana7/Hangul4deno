export class PrivateInteractLists {
    static complexFinals: string[] =
        ["rt", "sw", "sg", "fr", "fa", "fq", "ft", "fx", "fv", "fg", "qt"];
    
    static allFinalKo: string[] =
        ["ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄸ", "ㄹ", "ㄺ", "ㄻ", "ㄼ",
        "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅃ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ",
        "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
    
    static allFinals: string[] =
        ["r", "R", "rt", "s", "sw", "sg", "e", "E", "f", "fr", "fa", "fq",
        "ft", "fx", "fv", "fg", "a", "q", "Q", "qt", "t", "T", "d", "w",
        "W", "c", "z", "x", "v", "g"];
    
    static allFinalInteract: [string, string][] =
        this.allFinalKo.map((v, i) => [v, this.allFinals[i]]);
}

/**
 * The class of collection of hangul or english pieces
 */
export class InteractLists {
    /** The array of initial of hangul as korean */
    static initialKo: string[] =
        ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ",
        "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
    
    /** The array of initial of hangul as english */
    static initials: string[] =
        ["r", "R", "s", "e", "E", "f", "a", "q", "Q", "t", 
        "T", "d", "w", "W", "c", "z", "x", "v", "g"];
    
    /** The array of neutral of hangul as korean */
    static neutralKo: string[] =
        ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ",
        "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
    
    /** The array of neutral of hangul as english */
    static neutrals: string[] =
        ["k", "o", "i", "O", "j", "p", "u", "P", "h", "hk", "ho",
        "hl", "y", "n", "nj", "np", "nl", "b", "m", "ml", "l"];
    
    /** The array of final of hangul as korean */
    static finalKo: string[] =
        ["ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ",
        "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ",
        "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
    
    /** The array of final of hangul as english */
    static finals: string[] =
        ["r", "R", "rt", "s", "sw", "sg", "e", "f", "fr", "fa", "fq",
        "ft", "fx", "fv", "fg", "a", "q", "qt", "t", "T", "d", "w",
        "c", "z", "x", "v", "g"];
    
    /** All tuple array which mapped initial, neutral and final as [korean, english]. */
    static allInteractions: [string, string][] =
        PrivateInteractLists.allFinalInteract.concat(this.neutralKo.map((v, i) => [v, this.neutrals[i]]));
}