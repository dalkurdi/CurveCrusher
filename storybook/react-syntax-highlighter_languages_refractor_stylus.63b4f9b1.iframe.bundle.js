(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1589:function(module,exports,__webpack_require__){"use strict";function stylus(Prism){!function(Prism){var inside={url:/url\((["']?).*?\1\)/i,string:{pattern:/("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,greedy:!0},interpolation:null,func:null,important:/\B!(?:important|optional)\b/i,keyword:{pattern:/(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,lookbehind:!0},hexcode:/#[\da-f]{3,6}/i,number:/\b\d+(?:\.\d+)?%?/,boolean:/\b(?:true|false)\b/,operator:[/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],punctuation:/[{}()\[\];:,]/};inside.interpolation={pattern:/\{[^\r\n}:]+\}/,alias:"variable",inside:{delimiter:{pattern:/^{|}$/,alias:"punctuation"},rest:inside}},inside.func={pattern:/[\w-]+\([^)]*\).*/,inside:{function:/^[^(]+/,rest:inside}},Prism.languages.stylus={comment:{pattern:/(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},"atrule-declaration":{pattern:/(^\s*)@.+/m,lookbehind:!0,inside:{atrule:/^@[\w-]+/,rest:inside}},"variable-declaration":{pattern:/(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,lookbehind:!0,inside:{variable:/^\S+/,rest:inside}},statement:{pattern:/(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,lookbehind:!0,inside:{keyword:/^\S+/,rest:inside}},"property-declaration":{pattern:/((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,lookbehind:!0,inside:{property:{pattern:/^[^\s:]+/,inside:{interpolation:inside.interpolation}},rest:inside}},selector:{pattern:/(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,lookbehind:!0,inside:{interpolation:inside.interpolation,punctuation:/[{},]/}},func:inside.func,string:inside.string,interpolation:inside.interpolation,punctuation:/[{}()\[\];:.]/}}(Prism)}module.exports=stylus,stylus.displayName="stylus",stylus.aliases=[]}}]);