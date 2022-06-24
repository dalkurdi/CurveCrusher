"use strict";(self.webpackChunkgitlanding=self.webpackChunkgitlanding||[]).push([[8947,3980,902],{"./node_modules/refractor/lang/java.js":module=>{function java(Prism){!function(Prism){var keywords=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,classNamePrefix=/(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,className={pattern:RegExp(classNamePrefix+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};Prism.languages.java=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[className,{pattern:RegExp(classNamePrefix+/[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),lookbehind:!0,inside:className.inside}],keyword:keywords,function:[Prism.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),Prism.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),Prism.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":className,keyword:keywords,punctuation:/[<>(),.:]/,operator:/[?&|]/}},namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,(function(){return keywords.source}))),lookbehind:!0,inside:{punctuation:/\./}}})}(Prism)}module.exports=java,java.displayName="java",java.aliases=[]},"./node_modules/refractor/lang/javadoc.js":(module,__unused_webpack_exports,__webpack_require__)=>{var refractorJava=__webpack_require__("./node_modules/refractor/lang/java.js"),refractorJavadoclike=__webpack_require__("./node_modules/refractor/lang/javadoclike.js");function javadoc(Prism){Prism.register(refractorJava),Prism.register(refractorJavadoclike),function(Prism){var codeLinePattern=/(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m,memberReference=/#\s*\w+(?:\s*\([^()]*\))?/.source,reference=/(?:\b[a-zA-Z]\w+\s*\.\s*)*\b[A-Z]\w*(?:\s*<mem>)?|<mem>/.source.replace(/<mem>/g,(function(){return memberReference}));Prism.languages.javadoc=Prism.languages.extend("javadoclike",{}),Prism.languages.insertBefore("javadoc","keyword",{reference:{pattern:RegExp(/(@(?:exception|link|linkplain|see|throws|value)\s+(?:\*\s*)?)/.source+"(?:"+reference+")"),lookbehind:!0,inside:{function:{pattern:/(#\s*)\w+(?=\s*\()/,lookbehind:!0},field:{pattern:/(#\s*)\w+/,lookbehind:!0},namespace:{pattern:/\b(?:[a-z]\w*\s*\.\s*)+/,inside:{punctuation:/\./}},"class-name":/\b[A-Z]\w*/,keyword:Prism.languages.java.keyword,punctuation:/[#()[\],.]/}},"class-name":{pattern:/(@param\s+)<[A-Z]\w*>/,lookbehind:!0,inside:{punctuation:/[.<>]/}},"code-section":[{pattern:/(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,lookbehind:!0,inside:{code:{pattern:codeLinePattern,lookbehind:!0,inside:Prism.languages.java,alias:"language-java"}}},{pattern:/(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,lookbehind:!0,inside:{line:{pattern:codeLinePattern,lookbehind:!0,inside:{tag:Prism.languages.markup.tag,entity:Prism.languages.markup.entity,code:{pattern:/.+/,inside:Prism.languages.java,alias:"language-java"}}}}}],tag:Prism.languages.markup.tag,entity:Prism.languages.markup.entity}),Prism.languages.javadoclike.addSupport("java",Prism.languages.javadoc)}(Prism)}module.exports=javadoc,javadoc.displayName="javadoc",javadoc.aliases=[]},"./node_modules/refractor/lang/javadoclike.js":module=>{function javadoclike(Prism){!function(Prism){var javaDocLike=Prism.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(javaDocLike,"addSupport",{value:function addSupport(languages,docLanguage){"string"==typeof languages&&(languages=[languages]),languages.forEach((function(lang){!function docCommentSupport(lang,callback){var grammar=Prism.languages[lang];if(grammar){var token=grammar["doc-comment"];if(!token){var definition={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}};token=(grammar=Prism.languages.insertBefore(lang,"comment",definition))["doc-comment"]}if(token instanceof RegExp&&(token=grammar["doc-comment"]={pattern:token}),Array.isArray(token))for(var i=0,l=token.length;i<l;i++)token[i]instanceof RegExp&&(token[i]={pattern:token[i]}),callback(token[i]);else callback(token)}}(lang,(function(pattern){pattern.inside||(pattern.inside={}),pattern.inside.rest=docLanguage}))}))}}),javaDocLike.addSupport(["java","javascript","php"],javaDocLike)}(Prism)}module.exports=javadoclike,javadoclike.displayName="javadoclike",javadoclike.aliases=[]}}]);