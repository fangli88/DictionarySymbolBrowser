import{cF as e,cG as i,cH as t,cI as n,cc as l,cJ as d}from"./p-dc4230e0.js";const o=["oid","global-id"],s=["oid","global-id","guid"];function r({displayField:e,editFieldsInfo:d,fields:o,objectIdField:s,title:r},a){if(!o)return null;const c=b({editFieldsInfo:d,fields:o,objectIdField:s},a);if(!c.length)return null;const u=function(e){const t=i(e),{titleBase:n}=e;return t?`${n}: {${t.trim()}}`:n}({titleBase:r,fields:o,displayField:e}),f=[new t,new n];return new l({title:u,content:f,fieldInfos:c})}const a=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],c=(e,{editFieldsInfo:i,objectIdField:t,visibleFieldNames:n})=>n?n.has(e.name):!(f(e.name,i)||t&&e.name===t||o.indexOf(e.type)>-1||a.some((i=>i.test(e.name))));function u(e,i){return"oid"===e.type?-1:"oid"===i.type?1:p(e)?-1:p(i)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((i.alias||i.name).toLocaleLowerCase())}function f(e,i){if(!e||!i)return!1;const{creationDateField:t,creatorField:n,editDateField:l,editorField:d}=i;return-1!==[t&&t.toLowerCase(),n&&n.toLowerCase(),l&&l.toLowerCase(),d&&d.toLowerCase()].indexOf(e.toLowerCase())}function F(e,i){return e.editable&&-1===s.indexOf(e.type)&&!f(e.name,i)}function b({editFieldsInfo:i,fields:t,objectIdField:n},l){return function(e,i){const t=e;return i&&(e=e.filter((e=>-1===i.indexOf(e.type)))),e===t&&(e=e.slice()),e.sort(u),e}(t,(null==l?void 0:l.ignoreFieldTypes)||g).map((t=>new e({fieldName:t.name,isEditable:F(t,i),label:t.alias,format:m(t),visible:c(t,{editFieldsInfo:i,objectIdField:n,visibleFieldNames:null==l?void 0:l.visibleFieldNames})})))}function m(e){switch(e.type){case"small-integer":case"integer":case"single":return new d({digitSeparator:!0,places:0});case"double":return new d({digitSeparator:!0,places:2});case"date":return new d({dateFormat:"long-month-day-year"});default:return null}}function p(e){return"name"===(e.name&&e.name.toLowerCase())||"name"===(e.alias&&e.alias.toLowerCase())||void 0}const g=["geometry","blob","raster","guid","xml"];export{r as a}