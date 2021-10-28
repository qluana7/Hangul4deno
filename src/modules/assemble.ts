import { InteractLists } from "../entities/interactList.ts"
import { toKorean } from "./convert.ts"

export function assemble(str: string): string {
    const c = str.split('');
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
    
    return toKorean(r.reduce((p, c) => p + c));
}

export function disassemble(str: string): string[] {
    const ch: string[] = str.split('');
    
    const start:  number = 44032; // '가'
    const inilen: number = 588;
    const neulen: number = 28;
    
    const output: string[] = [];
    
    for (let i = 0; i < ch.length; i++) {
        const c = str.charCodeAt(i);
        if (c < 44032 || 55203 < c) {
            output.push(ch[i]);
            continue;
        }
        
        const ac = c - start;
        
        const ini = Math.floor(ac / inilen);
        const neu = Math.floor(ac % inilen / neulen);
        const fin = ac % inilen % neulen - 1;
        
        output.push(InteractLists.initialKo[ini]);
        output.push(InteractLists.neutralKo[neu]);
        
        if (fin !== -1) output.push(InteractLists.finalKo[fin]);
    }
    
    return output;
}