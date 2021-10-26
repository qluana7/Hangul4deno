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
        finalLimit: option?.finalLimit,
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
        if (opt.exclude?.initial?.enabled ?? false)
            list = except(list, opt.exclude?.initial?.data ?? ComplexInteractionLists.complexInitialKo);
        builder.setInitial(list[new Range(0, list.length - 1).random()]);
        
        list = InteractLists.neutralKo;
        if (opt.exclude?.neutral?.enabled ?? false)
            list = except(list, opt.exclude?.neutral?.data ?? ComplexInteractionLists.complexNeutralKo);
        builder.setNeutral(list[new Range(0, list.length - 1).random()]);
        
        if (opt.allowFinal!) {
            if (opt.finalLimit !== undefined)
            {
                const num: number = opt.finalLimit instanceof Range ? opt.finalLimit.random() : opt.finalLimit;
                if (fl !== num && b) {
                    list = InteractLists.finalKo;
                    if (opt.exclude?.final?.enabled ?? false)
                        list = except(list, opt.exclude?.final?.data ?? ComplexInteractionLists.complexFinalKo);
                    
                    builder.setFinal(list[new Range(0, list.length - 1).random()]);
                    fl++;
                }
            }
        }
        
        out += builder.build();
    }
    
    return new Hangul(out);
}

/**
 * The option for Hangul.random() function
 */
export interface RandomOption {
    /**
     * Set the limit of hangul which has final.
     * If allowFinal option set to true, this option will be ignored.
     * @default undefined
     */
    finalLimit?         : number | Range;
    /**
     * Set whether allowing generate hangul which has final.
     * If this set to true, finalLimit option will be ignored.
     * @default true
     */
    allowFinal?         : boolean;
    /**
     * Set variance of count.
     * When calling random function, it set to random value in range.
     * Then added or subtract to count
     * @default Range.empty
     */
    countVariance?      : Range;
    /**
     * The exculde option.
     * Refer ExcludeOption description.
     * @default undefined
     */
    exclude?            : ExcludeOption;
}

/**
 * The exclude option.
 * If "enabled" of each property set to true, data of it will exclude from all initial, neutral or final data.
 * However, if data unset, then use default value. (See ComplexInteractionLists)
 */
export interface ExcludeOption {
    /**
     * The initial exclude option. data will removed from initial list when get random.
     * @default ComplexInteractionLists.complexInitialKo
     */
    initial? : ExcludeData<Initial>;
    /**
     * The neutral exclude option. data will removed from neutral list when get random.
     * @default ComplexInteractionLists.complexNeutralKo
     */
    neutral? : ExcludeData<Neutral>;
    /**
     * The final exclude option. data will removed from final list when get random.
     * @default ComplexInteractionLists.complexFinalKo
     */
    final?   : ExcludeData<Final>;
}

/**
 * The exclude data.
 */
export interface ExcludeData<T extends Initial | Neutral | Final> {
    /**
     * Determine whether the data is enable
     * @default false
     */
    enabled? : boolean,
    /**
     * The data of exclude.
     * @default refer description of each option in ExcludeOption
     */
    data?    : T[]
}

/**
 * The class provides range.
 */
export class Range {
    /**
     * Initialize object with range
     * @param start Start of range
     * @param end End of range
     */
    constructor(start: number, end: number) {
        this.start = start;
        this.end = end;
    }
    
    /** Start of range */
    public start: number;
    /** End of range */
    public end  : number;
    
    /** Empty range. It is same as Range(0, 0). */
    public static empty = new Range(0, 0);
    
    /**
     * Generate random number in range.
     * This also includes start of range and end of range.
     * @returns A random number in range
     */
    public random(): number {
        return Math.floor(Math.random() * (this.end + 1 - this.start) + this.start)
    }
}

function randomBoolean(): boolean {
    return Math.round(Math.random()) === 1;
}