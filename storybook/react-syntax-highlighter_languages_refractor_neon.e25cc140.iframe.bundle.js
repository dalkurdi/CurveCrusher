"use strict";(self.webpackChunkgitlanding=self.webpackChunkgitlanding||[]).push([[7996],{"./node_modules/refractor/lang/neon.js":module=>{function neon(Prism){Prism.languages.neon={comment:{pattern:/#.*/,greedy:!0},datetime:{pattern:/(^|[[{(=:,\s])\d\d\d\d-\d\d?-\d\d?(?:(?:[Tt]| +)\d\d?:\d\d:\d\d(?:\.\d*)? *(?:Z|[-+]\d\d?(?::?\d\d)?)?)?(?=$|[\]}),\s])/,lookbehind:!0,alias:"number"},key:{pattern:/(^|[[{(,\s])[^,:=[\]{}()'"\s]+(?=\s*:(?:$|[\]}),\s])|\s*=)/,lookbehind:!0,alias:"atrule"},number:{pattern:/(^|[[{(=:,\s])[+-]?(?:0x[\da-fA-F]+|0o[0-7]+|0b[01]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:[eE][+-]?\d+)?)(?=$|[\]}),:=\s])/,lookbehind:!0},boolean:{pattern:/(^|[[{(=:,\s])(?:false|no|true|yes)(?=$|[\]}),:=\s])/i,lookbehind:!0},null:{pattern:/(^|[[{(=:,\s])(?:null)(?=$|[\]}),:=\s])/i,lookbehind:!0,alias:"keyword"},string:{pattern:/(^|[[{(=:,\s])(?:('''|""")\r?\n(?:(?:[^\r\n]|\r?\n(?![\t ]*\2))*\r?\n)?[\t ]*\2|'[^'\r\n]*'|"(?:\\.|[^\\"\r\n])*")/,lookbehind:!0,greedy:!0},literal:{pattern:/(^|[[{(=:,\s])(?:[^#"',:=[\]{}()\s`-]|[:-][^"',=[\]{}()\s])(?:[^,:=\]})(\s]|:(?![\s,\]})]|$)|[ \t]+[^#,:=\]})(\s])*/,lookbehind:!0,alias:"string"},punctuation:/[,:=[\]{}()-]/}}module.exports=neon,neon.displayName="neon",neon.aliases=[]}}]);