(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1409:function(module,exports,__webpack_require__){"use strict";function markup(Prism){Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",(function(env){"entity"===env.type&&(env.attributes.title=env.content.value.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function addInlined(tagName,lang){var includedCdataInside={};includedCdataInside["language-"+lang]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[lang]},includedCdataInside.cdata=/^<!\[CDATA\[|\]\]>$/i;var inside={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:includedCdataInside}};inside["language-"+lang]={pattern:/[\s\S]+/,inside:Prism.languages[lang]};var def={};def[tagName]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,tagName),"i"),lookbehind:!0,greedy:!0,inside:inside},Prism.languages.insertBefore("markup","cdata",def)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup}module.exports=markup,markup.displayName="markup",markup.aliases=["xml","html","mathml","svg"]}}]);