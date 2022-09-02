---
title: '入耳式耳机随想'
date: 2020-06-07 19:00:00
updated: 2020-08-27 16:35:00
comment: true
categories:
  - 音频
tags:
  - DIY
  - IEM
  - 入耳式耳机
thumbnail: /iem-idea/2nd.webp
descr: 我把所有的入耳式耳机想法都放在这里，已经实现或正在实际制作的会单独写一篇文章；在这里公开的方案无论是否制作过我都不为实际效果背书。
---

我把所有的入耳式耳机想法都放在这里，已经实现或正在实际制作的会单独写一篇文章；在这里公开的方案无论是否制作过我都不为实际效果背书。**特别是未实践/早期设计**
为什么想法这么多却没几个实际动手的？因为没钱。

<!-- more -->

## Project AXE | IEM-AXE「AXE」测试中

> 史诗巨坑，绝赞制作中 2019.07

DIY 耳机的第一步。[Project AXE - 旗舰耳机 DIY 计划](https://kwaa.dev/p/project-axe/)

## Project 1ST | IEM-IVX「MASTER」构思中

> 终极天坑，停留在想法 2020.01

我总是要给自己找麻烦。[Project 1ST - 电子分频耳机 DIY 计划](https://kwaa.dev/p/project-1st)

## IEM-BA4「BASIS」未实践

> 烂大街单元 + 独特分频

想设计一个成本 500 以内又方便买材料的四单元耳机，于是就有了这玩意。

单边由两个串联 CI-22955 和两个串联 ED-29689 组合，组成四单元双分频双导管。特别在哪里呢？高低频单元都各有一个是半线圈。

由于现在没有闲钱，所以暂时不会进行后续调试。

> IEM-BA4（早期设计）4 单元 2 分频 2 导管

- 22955 + 22955(串联, 半线圈) - 串 20Ω, 并 10uF - 并管绿阻 - 15mm 导管/2mmID
- 29689 + 29689(串联, 半线圈) - 串 10uF - 并管白阻 - 10mm 导管/2mmID

## IEM-UN1「UNIVERSAL」已完成/已废弃

> 由于缺乏乐趣~~市面上太多同类~~，此方案不再更新。

2354 便宜了不少，很适合设计新的单动铁。作为我眼里最合适的全频单元，~~或许以后设计 Project 2ND（如果有）的时候也会用到它。~~ 没有 Project 2ND 了

无趣的同时它好做并且声音不差。

> IEM-UN1（最终设计）1 单元 1 分频 1 导管

- 2354 - 串 39Ω - 棕阻 - 12mm 导管/2mmID

## IEM-BLOOM「BLOOM」构思中

> 现代日呆耳机

大多数时候我都是只想不做，这玩意大概也是一样。

BLOOM 的设计需求是 Galgame / Anisong 专精，所以你可以在它身上找到 334 和 CK100 的一些影子。命名和点兔第三季巧合的重复了，不过我本意是 BLOOM (全屏泛光) 后处理；这也算一种歪打正着吧，毕竟将来测试这玩意的时候肯定会用到点兔角色歌 CD。

低频使用了我喜欢的 38D1XJ007Mi，另设低频衰减开关；中频则为 33AP007。高频使用 30017 和 23991 并联得到中高频 FK 和极高频 WBFK 各两个。30017 和 23991 并联来自 [dhruvmeena96](https://www.head-fi.org/threads/home-made-iems.430688/post-15081696) 的想法，借此获得 20Ω FK / 10Ω WBFK 的直流阻抗。

依然是没钱做不出来，以后再说了。这玩意成本确实高了点，~~以后我可能会再搞一个三单元低配版~~ 参见 IEM-MIDORI。

虽然 30017 容易搞出相位问题，但我就是想试试。之前无意中翻到了说是改进版的 31082，不过只有两根线就没什么意思了。

以 2020 年中旬的淘宝价格，BLOOM 八单元版动铁成本约为 1000 元，十二单元版约为 1500 元。

> IEM-BLOOM_VIII (早期设计) 8 单元 4 分频 3 导管

- 38D1XJ007Mi/8a(并联) - 没想好 - 并管绿阻 - 15mm 导管/2mmID
- 33AP007(并联) - 并管绿阻 - 15mm 导管/2mmID
- TWFK-23991(和 30017 并联) - FK 串 22uF - WBFK 串 470nF - 灰阻 - 15mm 导管/2mmID
- TWFK-30017(和 23991 并联) - FK 串 22uF - WBFK 串 470nF - 白阻 - 10mm 导管/2mmID

还可以堆单元数量，像这样：

> IEM-BLOOM_XII（早期设计）12 单元 4 分频 3 导管

- 38D1XJ007Mi/8a(并联) - 没想好 - 并管绿阻 - 15mm 导管/2mmID
- 33AP007(并联) - 并管绿阻 - 15mm 导管/2mmID
- TWFK-23991\*2(并联, 和 30017 并联) - FK 串 22uF - WBFK 串 470nF - 灰阻 - 15mm 导管/2mmID
- TWFK-30017\*2(并联, 和 23991 并联) - FK 串 22uF - WBFK 串 470nF - 白阻 - 10mm 导管/2mmID

## IEM-MIDORI「翠」构思中

> 恶意的政治隐喻

上面（IEM-BLOOM）说的三单元低配 HUFI 特化型耳机。第一个汉字命名！
为什么叫翠呢？首先是形容它的目标以人声华丽为主；其次是我 2016 年以来一直在祈翠，以这个名字作为一种精神寄托。在这里顺便说一下取名规范吧：

| 姓  | 名     | 字      |
| --- | ------ | ------- |
| IEM | MIDORI | 「翠」  |
| IEM | AXE    | 「AXE」 |

基本思路是延续 CK100 的分频，替换一个更好的低频单元（就是你了，2354！）。原版低频单元 TEC-30033 并没有分频（大概止于 8kHz），这里尝试将 2354 串电阻并电容来压高频。

以 2020 年中旬的淘宝价格，MIDORI 动铁成本约为 300 元。由于我手里有一对剩下的 30017（Project AXE 剩下来的），所以只需要搞定外壳再买一对 2354 就可以开工了。

虽然以 CK100 分频为基础，但我并不想做一个解析强化版 CK100... 主要原因是做不成，毕竟单元都换了。

> IEM-MIDORI（早期设计）3 单元 3 分频 2 导管

- 2354 - 串 4.7Ω - 并 10uF - 绿阻 - 10mm 导管/2mmID
- TWFK-30017 - FK 串 22uF - WBFK 串 0.47uF - 白阻 - 10mm 导管/2mmID