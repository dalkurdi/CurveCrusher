(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1451:function(module,exports,__webpack_require__){"use strict";function coffeescript(Prism){!function(Prism){var comment=/#(?!\{).+/,interpolation={pattern:/#\{[^}]+\}/,alias:"variable"};Prism.languages.coffeescript=Prism.languages.extend("javascript",{comment:comment,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:interpolation}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),Prism.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:comment,interpolation:interpolation}}}),Prism.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},rest:Prism.languages.javascript}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:interpolation}}]}),Prism.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete Prism.languages.coffeescript["template-string"],Prism.languages.coffee=Prism.languages.coffeescript}(Prism)}module.exports=coffeescript,coffeescript.displayName="coffeescript",coffeescript.aliases=["coffee"]}}]);