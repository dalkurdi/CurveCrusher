"use strict";(self.webpackChunkgitlanding=self.webpackChunkgitlanding||[]).push([[2822],{"./node_modules/refractor/lang/smalltalk.js":module=>{function smalltalk(Prism){Prism.languages.smalltalk={comment:{pattern:/"(?:""|[^"])*"/,greedy:!0},char:{pattern:/\$./,greedy:!0},string:{pattern:/'(?:''|[^'])*'/,greedy:!0},symbol:/#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,"block-arguments":{pattern:/(\[\s*):[^\[|]*\|/,lookbehind:!0,inside:{variable:/:[\da-z]+/i,punctuation:/\|/}},"temporary-variables":{pattern:/\|[^|]+\|/,inside:{variable:/[\da-z]+/i,punctuation:/\|/}},keyword:/\b(?:new|nil|self|super)\b/,boolean:/\b(?:false|true)\b/,number:[/\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,/\b\d+(?:\.\d+)?(?:e-?\d+)?/],operator:/[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,punctuation:/[.;:?\[\](){}]/}}module.exports=smalltalk,smalltalk.displayName="smalltalk",smalltalk.aliases=[]}}]);