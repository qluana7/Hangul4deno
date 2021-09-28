import { InteractLists } from "../entities/interactList.ts"
import { toKorean } from "../modules/convert.ts"

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