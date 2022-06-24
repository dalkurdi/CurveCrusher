"use strict";(self.webpackChunkgitlanding=self.webpackChunkgitlanding||[]).push([[7097],{"./node_modules/refractor/lang/textile.js":module=>{function textile(Prism){!function(Prism){var modifierRegex=/\([^|()\n]+\)|\[[^\]\n]+\]|\{[^}\n]+\}/.source,parenthesesRegex=/\)|\((?![^|()\n]+\))/.source;function withModifier(source,flags){return RegExp(source.replace(/<MOD>/g,(function(){return"(?:"+modifierRegex+")"})).replace(/<PAR>/g,(function(){return"(?:"+parenthesesRegex+")"})),flags||"")}var modifierTokens={css:{pattern:/\{[^{}]+\}/,inside:{rest:Prism.languages.css}},"class-id":{pattern:/(\()[^()]+(?=\))/,lookbehind:!0,alias:"attr-value"},lang:{pattern:/(\[)[^\[\]]+(?=\])/,lookbehind:!0,alias:"attr-value"},punctuation:/[\\\/]\d+|\S/},textile=Prism.languages.textile=Prism.languages.extend("markup",{phrase:{pattern:/(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,lookbehind:!0,inside:{"block-tag":{pattern:withModifier(/^[a-z]\w*(?:<MOD>|<PAR>|[<>=])*\./.source),inside:{modifier:{pattern:withModifier(/(^[a-z]\w*)(?:<MOD>|<PAR>|[<>=])+(?=\.)/.source),lookbehind:!0,inside:modifierTokens},tag:/^[a-z]\w*/,punctuation:/\.$/}},list:{pattern:withModifier(/^[*#]+<MOD>*\s+\S.*/.source,"m"),inside:{modifier:{pattern:withModifier(/(^[*#]+)<MOD>+/.source),lookbehind:!0,inside:modifierTokens},punctuation:/^[*#]+/}},table:{pattern:withModifier(/^(?:(?:<MOD>|<PAR>|[<>=^~])+\.\s*)?(?:\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.))[^|]*)+\|/.source,"m"),inside:{modifier:{pattern:withModifier(/(^|\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+(?=\.)/.source),lookbehind:!0,inside:modifierTokens},punctuation:/\||^\./}},inline:{pattern:withModifier(/(^|[^a-zA-Z\d])(\*\*|__|\?\?|[*_%@+\-^~])<MOD>*.+?\2(?![a-zA-Z\d])/.source),lookbehind:!0,inside:{bold:{pattern:withModifier(/(^(\*\*?)<MOD>*).+?(?=\2)/.source),lookbehind:!0},italic:{pattern:withModifier(/(^(__?)<MOD>*).+?(?=\2)/.source),lookbehind:!0},cite:{pattern:withModifier(/(^\?\?<MOD>*).+?(?=\?\?)/.source),lookbehind:!0,alias:"string"},code:{pattern:withModifier(/(^@<MOD>*).+?(?=@)/.source),lookbehind:!0,alias:"keyword"},inserted:{pattern:withModifier(/(^\+<MOD>*).+?(?=\+)/.source),lookbehind:!0},deleted:{pattern:withModifier(/(^-<MOD>*).+?(?=-)/.source),lookbehind:!0},span:{pattern:withModifier(/(^%<MOD>*).+?(?=%)/.source),lookbehind:!0},modifier:{pattern:withModifier(/(^\*\*|__|\?\?|[*_%@+\-^~])<MOD>+/.source),lookbehind:!0,inside:modifierTokens},punctuation:/[*_%?@+\-^~]+/}},"link-ref":{pattern:/^\[[^\]]+\]\S+$/m,inside:{string:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0},url:{pattern:/(^\])\S+$/,lookbehind:!0},punctuation:/[\[\]]/}},link:{pattern:withModifier(/"<MOD>*[^"]+":.+?(?=[^\w/]?(?:\s|$))/.source),inside:{text:{pattern:withModifier(/(^"<MOD>*)[^"]+(?=")/.source),lookbehind:!0},modifier:{pattern:withModifier(/(^")<MOD>+/.source),lookbehind:!0,inside:modifierTokens},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[":]/}},image:{pattern:withModifier(/!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\s()]+(?:\([^)]+\))?!(?::.+?(?=[^\w/]?(?:\s|$)))?/.source),inside:{source:{pattern:withModifier(/(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\s()]+(?:\([^)]+\))?(?=!)/.source),lookbehind:!0,alias:"url"},modifier:{pattern:withModifier(/(^!)(?:<MOD>|<PAR>|[<>=])+/.source),lookbehind:!0,inside:modifierTokens},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[!:]/}},footnote:{pattern:/\b\[\d+\]/,alias:"comment",inside:{punctuation:/\[|\]/}},acronym:{pattern:/\b[A-Z\d]+\([^)]+\)/,inside:{comment:{pattern:/(\()[^()]+(?=\))/,lookbehind:!0},punctuation:/[()]/}},mark:{pattern:/\b\((?:C|R|TM)\)/,alias:"comment",inside:{punctuation:/[()]/}}}}}),phraseInside=textile.phrase.inside,nestedPatterns={inline:phraseInside.inline,link:phraseInside.link,image:phraseInside.image,footnote:phraseInside.footnote,acronym:phraseInside.acronym,mark:phraseInside.mark};textile.tag.pattern=/<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;var phraseInlineInside=phraseInside.inline.inside;phraseInlineInside.bold.inside=nestedPatterns,phraseInlineInside.italic.inside=nestedPatterns,phraseInlineInside.inserted.inside=nestedPatterns,phraseInlineInside.deleted.inside=nestedPatterns,phraseInlineInside.span.inside=nestedPatterns;var phraseTableInside=phraseInside.table.inside;phraseTableInside.inline=nestedPatterns.inline,phraseTableInside.link=nestedPatterns.link,phraseTableInside.image=nestedPatterns.image,phraseTableInside.footnote=nestedPatterns.footnote,phraseTableInside.acronym=nestedPatterns.acronym,phraseTableInside.mark=nestedPatterns.mark}(Prism)}module.exports=textile,textile.displayName="textile",textile.aliases=[]}}]);