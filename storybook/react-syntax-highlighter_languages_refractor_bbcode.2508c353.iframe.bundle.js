(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"./node_modules/refractor/lang/bbcode.js":function(module,exports,__webpack_require__){"use strict";function bbcode(Prism){Prism.languages.bbcode={tag:{pattern:/\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,inside:{tag:{pattern:/^\[\/?[^\s=\]]+/,inside:{punctuation:/^\[\/?/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\]/,"attr-name":/[^\s=\]]+/}}},Prism.languages.shortcode=Prism.languages.bbcode}module.exports=bbcode,bbcode.displayName="bbcode",bbcode.aliases=["shortcode"]}}]);