(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1520:function(module,exports,__webpack_require__){"use strict";function latex(Prism){!function(Prism){var funcPattern=/\\(?:[^a-z()[\]]|[a-z*]+)/i,insideEqu={"equation-command":{pattern:funcPattern,alias:"regex"}};Prism.languages.latex={comment:/%.*/m,cdata:{pattern:/(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0},equation:[{pattern:/\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,inside:insideEqu,alias:"string"},{pattern:/(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0,inside:insideEqu,alias:"string"}],keyword:{pattern:/(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0},url:{pattern:/(\\url\{)[^}]+(?=\})/,lookbehind:!0},headline:{pattern:/(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,lookbehind:!0,alias:"class-name"},function:{pattern:funcPattern,alias:"selector"},punctuation:/[[\]{}&]/},Prism.languages.tex=Prism.languages.latex,Prism.languages.context=Prism.languages.latex}(Prism)}module.exports=latex,latex.displayName="latex",latex.aliases=["tex","context"]}}]);