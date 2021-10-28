import { toKorean } from "../modules/convert.ts"
import { disassemble } from "../modules/assemble.ts"
import { InteractLists } from "./interactList.ts"

export class Converter {
    static toKorean(eng: string): string {
        return toKorean(eng);
    }
    
    static toEnglish(kor: string): string {
        const c = disassemble(kor);
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
}