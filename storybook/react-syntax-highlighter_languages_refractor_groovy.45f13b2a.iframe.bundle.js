(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1494:function(module,exports,__webpack_require__){"use strict";function groovy(Prism){Prism.languages.groovy=Prism.languages.extend("clike",{keyword:/\b(?:as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,string:[{pattern:/("""|''')[\s\S]*?\1|(?:\$\/)(?:\$\/\$|[\s\S])*?\/\$/,greedy:!0},{pattern:/(["'\/])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0}],number:/\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?[\d]+)?)[glidf]?\b/i,operator:{pattern:/(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.{1,2}(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,lookbehind:!0},punctuation:/\.+|[{}[\];(),:$]/}),Prism.languages.insertBefore("groovy","string",{shebang:{pattern:/#!.+/,alias:"comment"}}),Prism.languages.insertBefore("groovy","punctuation",{"spock-block":/\b(?:setup|given|when|then|and|cleanup|expect|where):/}),Prism.languages.insertBefore("groovy","function",{annotation:{alias:"punctuation",pattern:/(^|[^.])@\w+/,lookbehind:!0}}),Prism.hooks.add("wrap",(function(env){if("groovy"===env.language&&"string"===env.type){var delimiter=env.content.value[0];if("'"!=delimiter){var pattern=/([^\\])(?:\$(?:\{.*?\}|[\w.]+))/;"$"===delimiter&&(pattern=/([^\$])(?:\$(?:\{.*?\}|[\w.]+))/),env.content.value=env.content.value.replace(/&lt;/g,"<").replace(/&amp;/g,"&"),env.content=Prism.highlight(env.content.value,{expression:{pattern:pattern,lookbehind:!0,inside:Prism.languages.groovy}}),env.classes.push("/"===delimiter?"regex":"gstring")}}}))}module.exports=groovy,groovy.displayName="groovy",groovy.aliases=[]}}]);