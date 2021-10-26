import {
    Hangul
} from "../entities/hangul.ts";
import {
    HangulBuilder
} from "../entities/hangulBuilder.ts"
import {
    InteractLists,
    ComplexInteractionLists,
    Initial,
    Neutral,
    Final
} from "../entities/interactList.ts"

export function random(count: number): Hangul
export function random(count: number, option: RandomOption): Hangul
export function random(count: number, option?: RandomOption): Hangul {
    const opt: RandomOption = {
        finalLimit: option?.finalLimit ?? -1,
        //allowNonAssembled: option?.allowFinal ?? false,
        allowFinal: option?.allowFinal ?? true,
        countVariance: option?.countVariance ?? Range.empty,
        exclude: option?.exclude
    };
    
    const except = (origin: string[], exclude: string[]): string[] =>
        origin.filter(l => !exclude.includes(l));
    
    count += opt.countVariance!.random();
    
    let out: string = "";
    let fl: number = 0;
    
    for (let i = 0; i < count; i++) {
        const b = randomBoolean();
        
        const builder = new HangulBuilder();
        
        let list: string[];
        
        list = InteractLists.initialKo;
        if (opt.exclude?.initial?.enabled)
            list = except(list, opt.exclude.initial.data ?? ComplexInteractionLists.complexInitialKo);
        builder.setInitial(list[new Range(0, list.length - 1).random()]);
        
        list = InteractLists.neutralKo;
        if (opt.exclude?.neutral?.enabled)
            list = except(list, opt.exclude.neutral.data ?? ComplexInteractionLists.complexNeutralKo);
        builder.setNeutral(list[new Range(0, list.length - 1).random()]);
        
        if (opt.allowFinal!) {
            if (fl !== opt.finalLimit! && b) {
                list = InteractLists.finalKo;
                if (opt.exclude?.final?.enabled)
                    list = except(list, opt.exclude.final.data ?? ComplexInteractionLists.complexFinalKo);
                
                builder.setFinal(list[new Range(0, list.length - 1).random()]);
                fl++;
            }
        }
        
        out += builder.build();
    }
    
    return new Hangul(out);
}

export interface RandomOption {
    finalLimit?         : number | Range;
    //allowNonAssembled?  : boolean;
    allowFinal?         : boolean;
    countVariance?      : Range;
    exclude?            : ExcludeOption;
}

interface ExcludeOption {
    initial? : ExcludeData<Initial>;
    neutral? : ExcludeData<Neutral>;
    final?   : ExcludeData<Final>;
}

interface ExcludeData<T> {
    enabled : boolean,
    data?   : T[]
}

export class Range {
    constructor(start: number, end: number) {
        this.start = start;
        this.end = end;
    }
    
    public start: number;
    public end  : number;
    
    public static empty = new Range(0, 0);
    
    public random(): number {
        return Math.floor(Math.random() * (this.end + 1 - this.start) + this.start)
    }
}

function randomBoolean(): boolean {
    return Math.round(Math.random()) === 1;
}