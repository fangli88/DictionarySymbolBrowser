import{co as n}from"./p-ab028778.js";const e=new RegExp("__begin__","ig"),t=new RegExp("__end__","ig"),r=new RegExp("^__begin__","i"),u=new RegExp("__end__$","i");function s(n){return n.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function i(n){const e={expression:"",type:"none"};return n.labelExpressionInfo?n.labelExpressionInfo.value?(e.expression=n.labelExpressionInfo.value,e.type="conventional"):n.labelExpressionInfo.expression&&(e.expression=n.labelExpressionInfo.expression,e.type="arcade"):null!=n.labelExpression&&(e.expression=function(n){return n.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}(n.labelExpression),e.type="conventional"),e}function o(n){const e=i(n);if(!e)return null;switch(e.type){case"conventional":return a(e.expression);case"arcade":return e.expression}return null}function c(n){const e=i(n);if(!e)return null;switch(e.type){case"conventional":return function(n){const e=n.match(_);return e&&e[1].trim()||null}(e.expression);case"arcade":return w(e.expression)}return null}function a(s){let i;return s?(i=n(s,(n=>'__begin__$feature["'+n+'"]__end__')),i=r.test(i)?i.replace(r,""):'"'+i,i=u.test(i)?i.replace(u,""):i+'"',i=i.replace(e,'" + ').replace(t,' + "')):i='""',i}const _=/^\s*\{([^}]+)\}\s*$/i,l=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,f=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,g=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function w(n){if(!n)return null;let e=l.exec(n)||f.exec(n);return e?e[1]||e[3]:(e=g.exec(n),e?e[2]:null)}export{o as a,c,s as i,i as l,a as p,w}