"use strict";(self.webpackChunkgitlanding=self.webpackChunkgitlanding||[]).push([[4732],{"./node_modules/refractor/lang/latex.js":module=>{function latex(Prism){!function(Prism){var funcPattern=/\\(?:[^a-z()[\]]|[a-z*]+)/i,insideEqu={"equation-command":{pattern:funcPattern,alias:"regex"}};Prism.languages.latex={comment:/%.*/,cdata:{pattern:/(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0},equation:[{pattern:/\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,inside:insideEqu,alias:"string"},{pattern:/(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0,inside:insideEqu,alias:"string"}],keyword:{pattern:/(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0},url:{pattern:/(\\url\{)[^}]+(?=\})/,lookbehind:!0},headline:{pattern:/(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0,alias:"class-name"},function:{pattern:funcPattern,alias:"selector"},punctuation:/[[\]{}&]/},Prism.languages.tex=Prism.languages.latex,Prism.languages.context=Prism.languages.latex}(Prism)}module.exports=latex,latex.displayName="latex",latex.aliases=["tex","context"]}}]);