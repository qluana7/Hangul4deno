<div>
  <p align="center">
    <h1 align="center">Hangul 4 <a href="https://deno.land"><img width="28px" alt="deno" src="https://deno.land/logo.svg"></a></h1>
  </p>
</div>
<p align="center">
  <span><i><b>강력한 한글 라이브러리</i></b></span>
  <br><Br>
  <img alt="GitHub" src="https://img.shields.io/github/license/Lukince/Hangul4deno">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/Lukince/Hangul4deno">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Lukince/Hangul4deno">
  <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FLukince%2FHangul4deno&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
</p>

  <i>[README.md](https://github.com/Lukince/Hangul4deno/blob/master/README.md)는 자주 변경됩니다. 가능하다면 Github에서 읽어주세요.</i>

# 기능

### 한글 분해, 조립

```ts
import { Assembler } from "https://deno.land/x/hangul@1.2.0/mod.ts"

const hello = Assembler.assemble(['ㅇ', 'ㅏ', 'ㄴ', 'ㄴ', 'ㅕ', 'ㅇ']);

console.log(hello); // log : 안녕

const dishello = Assembler.disassemble("안녕하세요");
```

### 영어에서 한글로, 한글에서 영어로
**참고 : 이것은 번역이 아닙니다. QWERTY 자판에 따라 변환 후 조립됩니다.**

```ts
import { Hangul } from "https://deno.land/x/hangul@1.2.0/mod.ts"

console.log(Hangul.engToKor("dkssud tprP!"));
// log : 안녕 세계!

console.log(Hangul.korToEng("안녕 세계!"));
// log : dkssud tprP!
```

### 초성, 중성, 종성으로 글자를 조립

```ts
import { HangulBuilder } from "https://deno.land/x/hangul@1.2.0/mod.ts"

const builder1 = new HangulBuilder();

builder1.setInitial('ㅇ');
builder1.setNeutral('ㅏ');
builder1.setFinal('ㄴ');

const builder2 = new HangulBuilder('ㄴ', 'ㅕ', 'ㅇ');

console.log([builder1.build(), builder2.build()].join(''));
// log : 안녕
```

# 기여자
  [![andjsrk](https://github.com/andjsrk.png?size=32)](https://github.com/andjsrk)
