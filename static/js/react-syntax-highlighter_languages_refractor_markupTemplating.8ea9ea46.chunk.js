(this["webpackJsonpgl-landing-page"]=this["webpackJsonpgl-landing-page"]||[]).push([[81],{566:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,c=i.length;-1!==t.code.indexOf(o=n(a,c));)++c;return i[c]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function i(c){for(var g=0;g<c.length&&!(o>=r.length);g++){var p=c[g];if("string"===typeof p||p.content&&"string"===typeof p.content){var s=r[o],u=t.tokenStack[s],l="string"===typeof p?p:p.content,f=n(a,s),k=l.indexOf(f);if(k>-1){++o;var d=l.substring(0,k),h=new e.Token(a,e.tokenize(u,t.grammar),"language-"+a,u),m=l.substring(k+f.length),y=[];d&&y.push.apply(y,i([d])),y.push(h),m&&y.push.apply(y,i([m])),"string"===typeof p?c.splice.apply(c,[g,1].concat(y)):p.content=y}}else p.content&&i(p.content)}return c}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.8ea9ea46.chunk.js.map