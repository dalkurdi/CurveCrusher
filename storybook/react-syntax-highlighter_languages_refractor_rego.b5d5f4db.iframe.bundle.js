(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{"./node_modules/refractor/lang/rego.js":function(module,exports,__webpack_require__){"use strict";function rego(Prism){Prism.languages.rego={comment:/#.*/,property:{pattern:/(^|[^\\.])(?:"(?:\\.|[^\\"\r\n])*"|`[^`]*`|\b[a-z_]\w*\b)(?=\s*:(?!=))/i,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:as|default|else|import|not|null|package|set(?=\s*\()|some|with)\b/,boolean:/\b(?:false|true)\b/,function:{pattern:/\b[a-z_]\w*\b(?:\s*\.\s*\b[a-z_]\w*\b)*(?=\s*\()/i,inside:{namespace:/\b\w+\b(?=\s*\.)/,punctuation:/\./}},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,operator:/[-+*/%|&]|[<>:=]=?|!=|\b_\b/,punctuation:/[,;.\[\]{}()]/}}module.exports=rego,rego.displayName="rego",rego.aliases=[]}}]);