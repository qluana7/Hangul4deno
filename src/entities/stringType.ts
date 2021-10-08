export type StringType = "Unknown" | "Mixed" | "Korean" | "English"

export function getType(str: string): StringType {
    const isKorean  = (s: string) => ('가' <= s && s <= '힣');
    const isEnglish = (s: string) => ('A'  <= s && s <= 'Z' )
                                  || ('a'  <= s && s <= 'z' );
    
    let splited = str.split('');
    let korean  = splited.some(v => isKorean(v));
    let english = splited.some(v => isEnglish(v));
    let sign    = splited.filter(v => !isKorean(v) && !isEnglish(v)).length != 0
    
    if (sign) return "Unknown"
    else if (korean  && !english) return "Korean"
    else if (english && !korean)  return "English"
    else if (korean  && english)  return "Mixed"
    else return "Unknown"
}