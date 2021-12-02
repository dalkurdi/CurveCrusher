(window.webpackJsonp=window.webpackJsonp||[]).push([[129,82],{1389:function(module,exports,__webpack_require__){"use strict";function markupTemplating(Prism){!function(Prism){function getPlaceholder(language,index){return"___"+language.toUpperCase()+index+"___"}Object.defineProperties(Prism.languages["markup-templating"]={},{buildPlaceholders:{value:function(env,language,placeholderPattern,replaceFilter){if(env.language===language){var tokenStack=env.tokenStack=[];env.code=env.code.replace(placeholderPattern,(function(match){if("function"==typeof replaceFilter&&!replaceFilter(match))return match;for(var placeholder,i=tokenStack.length;-1!==env.code.indexOf(placeholder=getPlaceholder(language,i));)++i;return tokenStack[i]=match,placeholder})),env.grammar=Prism.languages.markup}}},tokenizePlaceholders:{value:function(env,language){if(env.language===language&&env.tokenStack){env.grammar=Prism.languages[language];var j=0,keys=Object.keys(env.tokenStack);!function walkTokens(tokens){for(var i=0;i<tokens.length&&!(j>=keys.length);i++){var token=tokens[i];if("string"==typeof token||token.content&&"string"==typeof token.content){var k=keys[j],t=env.tokenStack[k],s="string"==typeof token?token:token.content,placeholder=getPlaceholder(language,k),index=s.indexOf(placeholder);if(index>-1){++j;var before=s.substring(0,index),middle=new Prism.Token(language,Prism.tokenize(t,env.grammar),"language-"+language,t),after=s.substring(index+placeholder.length),replacement=[];before&&replacement.push.apply(replacement,walkTokens([before])),replacement.push(middle),after&&replacement.push.apply(replacement,walkTokens([after])),"string"==typeof token?tokens.splice.apply(tokens,[i,1].concat(replacement)):token.content=replacement}}else token.content&&walkTokens(token.content)}return tokens}(env.tokens)}}}})}(Prism)}module.exports=markupTemplating,markupTemplating.displayName="markupTemplating",markupTemplating.aliases=[]},1587:function(module,exports,__webpack_require__){"use strict";var refractorMarkupTemplating=__webpack_require__(1389);function smarty(Prism){Prism.register(refractorMarkupTemplating),function(Prism){Prism.languages.smarty={comment:/\{\*[\s\S]*?\*\}/,delimiter:{pattern:/^\{|\}$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,variable:[/\$(?!\d)\w+/,/#(?!\d)\w+#/,{pattern:/(\.|->)(?!\d)\w+/,lookbehind:!0},{pattern:/(\[)(?!\d)\w+(?=\])/,lookbehind:!0}],function:[{pattern:/(\|\s*)@?(?!\d)\w+/,lookbehind:!0},/^\/?(?!\d)\w+/,/(?!\d)\w+(?=\()/],"attr-name":{pattern:/\w+\s*=\s*(?:(?!\d)\w+)?/,inside:{variable:{pattern:/(=\s*)(?!\d)\w+/,lookbehind:!0},operator:/=/}},punctuation:[/[\[\]().,:`]|->/],operator:[/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,/\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,/\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/],keyword:/\b(?:false|off|on|no|true|yes)\b/},Prism.hooks.add("before-tokenize",(function(env){var smartyLitteralMode=!1;Prism.languages["markup-templating"].buildPlaceholders(env,"smarty",/\{\*[\s\S]*?\*\}|\{[\s\S]+?\}/g,(function(match){return"{/literal}"===match&&(smartyLitteralMode=!1),!smartyLitteralMode&&("{literal}"===match&&(smartyLitteralMode=!0),!0)}))})),Prism.hooks.add("after-tokenize",(function(env){Prism.languages["markup-templating"].tokenizePlaceholders(env,"smarty")}))}(Prism)}module.exports=smarty,smarty.displayName="smarty",smarty.aliases=[]}}]);