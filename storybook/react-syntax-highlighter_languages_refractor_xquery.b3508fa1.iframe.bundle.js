(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1574:function(module,exports,__webpack_require__){"use strict";function xquery(Prism){!function(Prism){Prism.languages.xquery=Prism.languages.extend("markup",{"xquery-comment":{pattern:/\(:[\s\S]*?:\)/,greedy:!0,alias:"comment"},string:{pattern:/(["'])(?:\1\1|(?!\1)[\s\S])*\1/,greedy:!0},extension:{pattern:/\(#.+?#\)/,alias:"symbol"},variable:/\$[\w-:]+/,axis:{pattern:/(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,lookbehind:!0,alias:"operator"},"keyword-operator":{pattern:/(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,lookbehind:!0,alias:"operator"},keyword:{pattern:/(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,lookbehind:!0},function:/[\w-]+(?::[\w-]+)*(?=\s*\()/,"xquery-element":{pattern:/(element\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"tag"},"xquery-attribute":{pattern:/(attribute\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"attr-name"},builtin:{pattern:/(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|ENTITIES|ENTITY|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|ID|IDREFS?|int|integer|language|long|Name|NCName|negativeInteger|NMTOKENS?|nonNegativeInteger|nonPositiveInteger|normalizedString|NOTATION|positiveInteger|QName|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,lookbehind:!0},number:/\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,operator:[/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}],punctuation:/[[\](){},;:/]/}),Prism.languages.xquery.tag.pattern=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,Prism.languages.xquery.tag.inside["attr-value"].pattern=/=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}|(?!\1)[^\\])*\1|[^\s'">=]+)/i,Prism.languages.xquery.tag.inside["attr-value"].inside.punctuation=/^="|"$/,Prism.languages.xquery.tag.inside["attr-value"].inside.expression={pattern:/{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}/,inside:{rest:Prism.languages.xquery},alias:"language-xquery"};var stringifyToken=function(token){return"string"==typeof token?token:"string"==typeof token.content?token.content:token.content.map(stringifyToken).join("")},walkTokens=function(tokens){for(var openedTags=[],i=0;i<tokens.length;i++){var token=tokens[i],notTagNorBrace=!1;if("string"!=typeof token&&("tag"===token.type&&token.content[0]&&"tag"===token.content[0].type?"</"===token.content[0].content[0].content?openedTags.length>0&&openedTags[openedTags.length-1].tagName===stringifyToken(token.content[0].content[1])&&openedTags.pop():"/>"===token.content[token.content.length-1].content||openedTags.push({tagName:stringifyToken(token.content[0].content[1]),openedBraces:0}):!(openedTags.length>0&&"punctuation"===token.type&&"{"===token.content)||tokens[i+1]&&"punctuation"===tokens[i+1].type&&"{"===tokens[i+1].content||tokens[i-1]&&"plain-text"===tokens[i-1].type&&"{"===tokens[i-1].content?openedTags.length>0&&openedTags[openedTags.length-1].openedBraces>0&&"punctuation"===token.type&&"}"===token.content?openedTags[openedTags.length-1].openedBraces--:"comment"!==token.type&&(notTagNorBrace=!0):openedTags[openedTags.length-1].openedBraces++),(notTagNorBrace||"string"==typeof token)&&openedTags.length>0&&0===openedTags[openedTags.length-1].openedBraces){var plainText=stringifyToken(token);i<tokens.length-1&&("string"==typeof tokens[i+1]||"plain-text"===tokens[i+1].type)&&(plainText+=stringifyToken(tokens[i+1]),tokens.splice(i+1,1)),i>0&&("string"==typeof tokens[i-1]||"plain-text"===tokens[i-1].type)&&(plainText=stringifyToken(tokens[i-1])+plainText,tokens.splice(i-1,1),i--),/^\s+$/.test(plainText)?tokens[i]=plainText:tokens[i]=new Prism.Token("plain-text",plainText,null,plainText)}token.content&&"string"!=typeof token.content&&walkTokens(token.content)}};Prism.hooks.add("after-tokenize",(function(env){"xquery"===env.language&&walkTokens(env.tokens)}))}(Prism)}module.exports=xquery,xquery.displayName="xquery",xquery.aliases=[]}}]);