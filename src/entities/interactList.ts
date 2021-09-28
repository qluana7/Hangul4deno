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

export class InteractLists {
    static initalKo: string[] =
        ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ",
        "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
    
    static initals: string[] =
        ["r", "R", "s", "e", "E", "f", "a", "q", "Q", "t", 
        "T", "d", "w", "W", "c", "z", "x", "v", "g"];
    
    static neutralKo: string[] =
        ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ",
        "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
    
    static neutrals: string[] =
        ["k", "o", "i", "O", "j", "p", "u", "P", "h", "hk", "ho",
        "hl", "y", "n", "nj", "np", "nl", "b", "m", "ml", "l"];
    
    static finalKo: string[] =
        ["ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ",
        "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ",
        "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
    
    static finals: string[] =
        ["r", "R", "rt", "s", "sw", "sg", "e", "f", "fr", "fa", "fq",
        "ft", "fx", "fv", "fg", "a", "q", "qt", "t", "T", "d", "w",
        "c", "z", "x", "v", "g"];
    
    static allInteractions: [string, string][] =
        PrivateInteractLists.allFinalInteract.concat(this.neutralKo.map((v, i) => [v, this.neutrals[i]]));
}