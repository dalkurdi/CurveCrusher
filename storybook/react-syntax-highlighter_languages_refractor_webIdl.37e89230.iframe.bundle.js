(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{"./node_modules/refractor/lang/web-idl.js":function(module,exports,__webpack_require__){"use strict";function webIdl(Prism){!function(Prism){var id=/(?:\B-|\b_|\b)[A-Za-z][\w-]*(?![\w-])/.source,type="(?:"+/\b(?:unsigned\s+)?long\s+long(?![\w-])/.source+"|"+/\b(?:unrestricted|unsigned)\s+[a-z]+(?![\w-])/.source+"|"+/(?!(?:unrestricted|unsigned)\b)/.source+id+/(?:\s*<(?:[^<>]|<[^<>]*>)*>)?/.source+")"+/(?:\s*\?)?/.source,typeInside={};for(var key in Prism.languages["web-idl"]={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/"[^"]*"/,greedy:!0},namespace:{pattern:RegExp(/(\bnamespace\s+)/.source+id),lookbehind:!0},"class-name":[{pattern:/(^|[^\w-])(?:iterable|maplike|setlike)\s*<(?:[^<>]|<[^<>]*>)*>/,lookbehind:!0,inside:typeInside},{pattern:RegExp(/(\b(?:attribute|const|deleter|getter|optional|setter)\s+)/.source+type),lookbehind:!0,inside:typeInside},{pattern:RegExp("("+/\bcallback\s+/.source+id+/\s*=\s*/.source+")"+type),lookbehind:!0,inside:typeInside},{pattern:RegExp(/(\btypedef\b\s*)/.source+type),lookbehind:!0,inside:typeInside},{pattern:RegExp(/(\b(?:callback|dictionary|enum|interface(?:\s+mixin)?)\s+)(?!(?:interface|mixin)\b)/.source+id),lookbehind:!0},{pattern:RegExp(/(:\s*)/.source+id),lookbehind:!0},RegExp(id+/(?=\s+(?:implements|includes)\b)/.source),{pattern:RegExp(/(\b(?:implements|includes)\s+)/.source+id),lookbehind:!0},{pattern:RegExp(type+"(?="+/\s*(?:\.{3}\s*)?/.source+id+/\s*[(),;=]/.source+")"),inside:typeInside}],builtin:/\b(?:ArrayBuffer|BigInt64Array|BigUint64Array|ByteString|DOMString|DataView|Float32Array|Float64Array|FrozenArray|Int16Array|Int32Array|Int8Array|ObservableArray|Promise|USVString|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray)\b/,keyword:[/\b(?:async|attribute|callback|const|constructor|deleter|dictionary|enum|getter|implements|includes|inherit|interface|mixin|namespace|null|optional|or|partial|readonly|required|setter|static|stringifier|typedef|unrestricted)\b/,/\b(?:any|bigint|boolean|byte|double|float|iterable|long|maplike|object|octet|record|sequence|setlike|short|symbol|undefined|unsigned|void)\b/],boolean:/\b(?:false|true)\b/,number:{pattern:/(^|[^\w-])-?(?:0x[0-9a-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|NaN|Infinity)(?![\w-])/i,lookbehind:!0},operator:/\.{3}|[=:?<>-]/,punctuation:/[(){}[\].,;]/},Prism.languages["web-idl"])"class-name"!==key&&(typeInside[key]=Prism.languages["web-idl"][key]);Prism.languages.webidl=Prism.languages["web-idl"]}(Prism)}module.exports=webIdl,webIdl.displayName="webIdl",webIdl.aliases=[]}}]);