"use strict";(self.webpackChunkgitlanding=self.webpackChunkgitlanding||[]).push([[1627],{"./node_modules/refractor/lang/kumir.js":module=>{function kumir(Prism){!function(Prism){var nonId=/\s\x00-\x1f\x22-\x2f\x3a-\x3f\x5b-\x5e\x60\x7b-\x7e/.source;function wrapId(pattern,flags){return RegExp(pattern.replace(/<nonId>/g,nonId),flags)}Prism.languages.kumir={comment:{pattern:/\|.*/},prolog:{pattern:/#.*/,greedy:!0},string:{pattern:/"[^\n\r"]*"|'[^\n\r']*'/,greedy:!0},boolean:{pattern:wrapId(/(^|[<nonId>])(?:да|нет)(?=[<nonId>]|$)/.source),lookbehind:!0},"operator-word":{pattern:wrapId(/(^|[<nonId>])(?:и|или|не)(?=[<nonId>]|$)/.source),lookbehind:!0,alias:"keyword"},"system-variable":{pattern:wrapId(/(^|[<nonId>])знач(?=[<nonId>]|$)/.source),lookbehind:!0,alias:"keyword"},type:[{pattern:wrapId(/(^|[<nonId>])(?:вещ|лит|лог|сим|цел)(?:\x20*таб)?(?=[<nonId>]|$)/.source),lookbehind:!0,alias:"builtin"},{pattern:wrapId(/(^|[<nonId>])(?:компл|сканкод|файл|цвет)(?=[<nonId>]|$)/.source),lookbehind:!0,alias:"important"}],keyword:{pattern:wrapId(/(^|[<nonId>])(?:алг|арг(?:\x20*рез)?|ввод|ВКЛЮЧИТЬ|вс[её]|выбор|вывод|выход|дано|для|до|дс|если|иначе|исп|использовать|кон(?:(?:\x20+|_)исп)?|кц(?:(?:\x20+|_)при)?|надо|нач|нс|нц|от|пауза|пока|при|раза?|рез|стоп|таб|то|утв|шаг)(?=[<nonId>]|$)/.source),lookbehind:!0},name:{pattern:wrapId(/(^|[<nonId>])[^\d<nonId>][^<nonId>]*(?:\x20+[^<nonId>]+)*(?=[<nonId>]|$)/.source),lookbehind:!0},number:{pattern:wrapId(/(^|[<nonId>])(?:\B\$[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)(?=[<nonId>]|$)/.source,"i"),lookbehind:!0},punctuation:/:=|[(),:;\[\]]/,"operator-char":{pattern:/\*\*?|<[=>]?|>=?|[-+/=]/,alias:"operator"}},Prism.languages.kum=Prism.languages.kumir}(Prism)}module.exports=kumir,kumir.displayName="kumir",kumir.aliases=["kum"]}}]);