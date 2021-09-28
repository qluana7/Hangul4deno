import { InteractLists, PrivateInteractLists } from "../entities/interactList.ts"

const FINAL:   number = 28;
const NEUTRAL: number = 21;
const INITAL:  number = FINAL * NEUTRAL;

const INITAL_COUNT:  number = 19;
const NEUTRAL_COUNT: number = 21;
const FINAL_COUNT:   number = 28;

class KoreanChar {
    constructor(
        ini: number = -1,
        neu: number = -1,
        fin: number = -1
        ) {
        if (ini < -1 || ini >= INITAL_COUNT  ||
            neu < -1 || neu >= NEUTRAL_COUNT ||
            fin < -1 || fin >= FINAL_COUNT) return;
        
        this.inital    = ini;
        this.neutral   = neu;
        this.final     = fin;
        this.defined = true;
    }
    
    inital:    number = -1;
    neutral:   number = -1;
    final:     number = -1;
    
    readonly firstInital  : number = 12593 // 'ㄱ'
    readonly firstNeutral : number = 12623 // 'ㅏ'
    readonly firstHangul  : number = 44032 // '가'
    
    defined: boolean = false;
    
    toChar(): string | null {
        if (!this.defined) return null;
        
        if (this.inital === -1) {
            if (this.neutral === -1 && this.final === -1)
                return null;
            else if (this.neutral === -1 && this.final !== -1)
                return String.fromCharCode(this.firstInital + this.final + 1);
            else if (this.neutral !== -1 && this.final === -1)
                return String.fromCharCode(this.firstNeutral + this.neutral);
            else
                return null;
        } else if (this.neutral === -1) {
            if (this.final === -1) {
                return InteractLists.initalKo[this.inital];
            } else {
                return null;
            }
        } else if (this.final === -1) {
            return String.fromCharCode(
                this.firstHangul + this.inital * INITAL + this.neutral * FINAL
            );
        } else {
            return String.fromCharCode(
                this.firstHangul + this.inital * INITAL + this.neutral * FINAL + this.final + 1
            );
        }
    }
}

export function toKorean(str: string): string {
    const extract: Function = () => {
        let c = kchar.toChar();
        
        if (c !== null)
            output += c;
        
        kchar = new KoreanChar();
        ext = false;
    }
    const arr = str.split('');
    
    let output: string = "";
    let ext: boolean = false;
    
    let kchar: KoreanChar = new KoreanChar();
    
    for (let i = 0; i <= arr.length; i++) {
        if (i === arr.length) {
            output += kchar.toChar() ?? "";
            continue;
        }
        
        let s: string = '';
        
        if (i + 1 < arr.length)
            s = arr[i] + arr[i + 1];
        
        if (InteractLists.initals.includes(arr[i])) {
            if (PrivateInteractLists.complexFinals.includes(s)) {
                if (s === "E" || s === "Q" || s === "W") i--;
                
                if (i + 2 < arr.length && kchar.inital !== -1) {
                    if (InteractLists.neutrals.includes(arr[i + 2])) {
                        kchar.final = InteractLists.finals.indexOf(arr[i]);
                        extract();
                        continue;
                    }
                }
                
                kchar.final = InteractLists.finals.indexOf(s);
                ext = true;
                i += s.length - 1;
            } else if (kchar.inital !== -1) {
                if (kchar.neutral === -1) {
                    extract();
                    kchar.inital = InteractLists.initals.indexOf(arr[i]);
                } else if (PrivateInteractLists.allFinals.includes(arr[i])) {
                    if (i + 1 < arr.length) {
                        if (InteractLists.neutrals.includes(arr[i + 1])) {
                            i--;
                            extract();
                            continue;
                        }
                    }
                    
                    kchar.final = InteractLists.finals.indexOf(arr[i]);
                } else if (PrivateInteractLists.allFinals.includes(s)) {
                    if (i + 2 < arr.length) {
                        if (InteractLists.neutrals.includes(arr[i + 2])) {
                            i--;
                            extract();
                            continue;
                        }
                    }
                    
                    kchar.final = InteractLists.finals.indexOf(s);
                }
                
                ext = true;
            } else {
                kchar.inital = InteractLists.initals.indexOf(arr[i]);
            }
        } else if (InteractLists.neutrals.includes(arr[i])) {
            if (InteractLists.neutrals.includes(s)) {
                kchar.neutral = InteractLists.neutrals.indexOf(s);
                i += s.length - 1;
            } else {
                kchar.neutral = InteractLists.neutrals.indexOf(arr[i]);
            }
            
            if (kchar.inital === -1) {
                ext = true;
            } else {
                ext = false;
            }
        } else {
            extract();
            output += arr[i];
            continue;
        }
        
        if (ext) extract();
    }
    
    return output;
}