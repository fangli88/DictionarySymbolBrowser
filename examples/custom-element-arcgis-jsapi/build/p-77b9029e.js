import{D as e,E as r,K as s,aj as t,a2 as n}from"./p-ab028778.js";let l=class extends t{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,r){return"string"!=typeof e?e:{url:e,...r}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?n(e):null}_encode(e,r,s){const t={};for(const n in e){if("declaredClass"===n)continue;const l=e[n];if(null!=l&&"function"!=typeof l)if(Array.isArray(l)){t[n]=[];for(let e=0;e<l.length;e++)t[n][e]=this._encode(l[e])}else if("object"==typeof l)if(l.toJSON){const e=l.toJSON(s&&s[n]);t[n]=r?e:JSON.stringify(e)}else t[n]=r?l:JSON.stringify(l);else t[n]=l}return t}};e([r({readOnly:!0,dependsOn:["url"]})],l.prototype,"parsedUrl",null),e([r()],l.prototype,"requestOptions",void 0),e([r({type:String})],l.prototype,"url",void 0),l=e([s("esri.tasks.Task")],l);var o=l;export{o as i}