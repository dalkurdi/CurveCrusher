(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{"./node_modules/refractor/lang/tremor.js":function(module,exports,__webpack_require__){"use strict";function tremor(Prism){!function(Prism){Prism.languages.tremor={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},"interpolated-string":null,extractor:{pattern:/\b[a-z_]\w*\|(?:[^\r\n\\|]|\\(?:\r\n|[\s\S]))*\|/i,greedy:!0,inside:{regex:{pattern:/(^re)\|[\s\S]+/,lookbehind:!0},function:/^\w+/,value:/\|[\s\S]+/}},identifier:{pattern:/`[^`]*`/,greedy:!0},function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())\b/,keyword:/\b(?:args|as|by|case|config|connect|connector|const|copy|create|default|define|deploy|drop|each|emit|end|erase|event|flow|fn|for|from|group|having|insert|into|intrinsic|let|links|match|merge|mod|move|of|operator|patch|pipeline|recur|script|select|set|sliding|state|stream|to|tumbling|update|use|when|where|window|with)\b/,boolean:/\b(?:false|null|true)\b/i,number:/\b(?:0b[01_]*|0x[0-9a-fA-F_]*|\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee][+-]?[\d_]+)?)\b/,"pattern-punctuation":{pattern:/%(?=[({[])/,alias:"punctuation"},operator:/[-+*\/%~!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?>?=?|(?:absent|and|not|or|present|xor)\b/,punctuation:/::|[;\[\]()\{\},.:]/};var interpolationPattern=/#\{(?:[^"{}]|\{[^{}]*\}|"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*")*\}/.source;Prism.languages.tremor["interpolated-string"]={pattern:RegExp(/(^|[^\\])/.source+'(?:"""(?:'+/[^"\\#]|\\[\s\S]|"(?!"")|#(?!\{)/.source+"|"+interpolationPattern+')*"""|"(?:'+/[^"\\\r\n#]|\\(?:\r\n|[\s\S])|#(?!\{)/.source+"|"+interpolationPattern+')*")'),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:RegExp(interpolationPattern),inside:{punctuation:/^#\{|\}$/,expression:{pattern:/[\s\S]+/,inside:Prism.languages.tremor}}},string:/[\s\S]+/}},Prism.languages.troy=Prism.languages.tremor,Prism.languages.trickle=Prism.languages.tremor}(Prism)}module.exports=tremor,tremor.displayName="tremor",tremor.aliases=[]}}]);