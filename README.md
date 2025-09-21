<div>
  <p align="center">
    <h1 align="center">Hangul 4 <a href="https://deno.land"><img width="28px" alt="deno" src="https://deno.land/logo.svg"></a></h1>
  </p>
</div>
<p align="center">
  <span><i><b>The powerful hangul library</i></b></span>
  <br><Br>
  <img alt="GitHub" src="https://img.shields.io/github/license/Lukince/Hangul4deno">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/Lukince/Hangul4deno">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Lukince/Hangul4deno">
  <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FLukince%2FHangul4deno&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>

  <h3 align="center"><b>translations : <a href="https://github.com/Lukince/Hangul4deno/blob/master/docs/README-ko.md">한국어</a></b></h3>
</p>
<br/>

  <i>Please check [README.md](https://github.com/Lukince/Hangul4deno/blob/master/README.md) on github if possible. it changes frequently.</i>



# Features

### Assemble, Disassemble Hangul

```ts
import { Assembler } from "https://deno.land/x/hangul@1.2.0/mod.ts"

const hello = Assembler.assemble(['ㅇ', 'ㅏ', 'ㄴ', 'ㄴ', 'ㅕ', 'ㅇ']);

console.log(hello); // log : 안녕

const dishello = Assembler.disassemble("안녕하세요");
```

### Convert English to Korean, Korean to English
**Note : This is not a translation. This'll assemble after converting according to the QWERTY keyboard**

```ts
import { Hangul } from "https://deno.land/x/hangul@1.2.0/mod.ts"

console.log(Hangul.engToKor("dkssud tprP!"));
// log : 안녕 세계!

console.log(Hangul.korToEng("안녕 세계!"));
// log : dkssud tprP!
```

### Build hangul with initial, neutral and final

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

# Contributors
  [![andjsrk](https://github.com/andjsrk.png?size=32)](https://github.com/andjsrk)
  [![newkincode](https://github.com/newkincode.png?size=32)](https://github.com/newkincode)
