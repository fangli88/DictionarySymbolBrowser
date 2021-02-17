import"./p-476cf7c4.js";import{D as e,E as t,K as r,L as i,I as s,J as n,s as o,l,c8 as a,U as d,e9 as u,m as p,bI as c,M as y,cc as h,F as f,b9 as v,b as m}from"./p-dc4230e0.js";import{T as b}from"./p-a4de41b0.js";import"./p-643e1e47.js";import{y as w}from"./p-66f366a9.js";import"./p-540c739d.js";import{l as g,b as j}from"./p-05aa0405.js";import"./p-f1856c76.js";import"./p-6e5ff36c.js";import{l as C,b as I,d as F,c as x}from"./p-5e52b0f8.js";import"./p-6a7ee25c.js";import{p as P}from"./p-6d77caaa.js";import{d as R}from"./p-536a38f2.js";import{s as T}from"./p-a1a69fdc.js";import{s as S}from"./p-3a5e7221.js";import{l as q}from"./p-ab0e571f.js";import{a as L}from"./p-43e6d0b9.js";import"./p-e7885fe3.js";import{d as O,b as B,c as V,a as N}from"./p-1b868368.js";let E=class extends i{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};e([t({type:String,json:{write:{enabled:!0,isRequired:!0}}})],E.prototype,"field",void 0),e([t({readOnly:!0,nonNullable:!0,json:{read:!1}})],E.prototype,"type",void 0),E=e([r("esri.layers.pointCloudFilters.PointCloudFilter")],E);var D,M=E;let $=D=class extends M{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new D({field:this.field,requiredClearBits:o(this.requiredClearBits),requiredSetBits:o(this.requiredSetBits)})}};e([t({type:[s],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],$.prototype,"requiredClearBits",void 0),e([t({type:[s],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],$.prototype,"requiredSetBits",void 0),e([n({pointCloudBitfieldFilter:"bitfield"})],$.prototype,"type",void 0),$=D=e([r("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],$);var A,G=$;let K=A=class extends M{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new A({field:this.field,includedReturns:o(this.includedReturns)})}};e([t({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],K.prototype,"includedReturns",void 0),e([n({pointCloudReturnFilter:"return"})],K.prototype,"type",void 0),K=A=e([r("esri.layers.pointCloudFilters.PointCloudReturnFilter")],K);var k,_=K;let z=k=class extends M{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new k({field:this.field,mode:this.mode,values:o(this.values)})}};e([t({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"mode",void 0),e([n({pointCloudValueFilter:"value"})],z.prototype,"type",void 0),e([t({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"values",void 0),z=k=e([r("esri.layers.pointCloudFilters.PointCloudValueFilter")],z);const J={key:"type",base:M,typeMap:{value:z,bitfield:G,return:_}};var U;let H=U=class extends O{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new U({...this.cloneProperties(),field:o(this.field)})}};e([n({pointCloudRGBRenderer:"point-cloud-rgb"})],H.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],H.prototype,"field",void 0),H=U=e([r("esri.renderers.PointCloudRGBRenderer")],H);const Q={key:"type",base:O,typeMap:{"point-cloud-class-breaks":B,"point-cloud-rgb":H,"point-cloud-stretch":V,"point-cloud-unique-value":N},errorContext:"renderer"},W=l.getLogger("esri.layers.PointCloudLayer"),X=q();let Y=class extends(b(P(C(R(S(g(j))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}get fieldsIndex(){return new T(this.fields)}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}readServiceFields(e,t,r){return Array.isArray(e)?e.map((e=>{const t=new w;return"FieldTypeInteger"===e.type&&((e=o(e)).type="esriFieldTypeInteger"),t.read(e,r),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((e=>new w({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,r,i){a("layerDefinition.drawingInfo.renderer",e.write(null,i),t)}load(e){const t=m(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)));return this.addResolvingPromise(r),d(this)}createPopupTemplate(e){const t=L(this,e);return this.formatPopupTemplateReturnsField(t),this.formatPopupTemplateRGBField(t),t}formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const r=e.fieldInfos.find((e=>e.fieldName===t.name));if(!r)return;const i=new u({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`\n        var returnValue = $feature.${t.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],i],r.fieldName="expression/pcl-returns-decoded"}formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const r=e.fieldInfos.find((e=>e.fieldName===t.name));if(!r)return;const i=new u({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`\n        var rgb = $feature.${t.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],i],r.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new p("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new p("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const e of this.attributeStorageInfo)if(e.name===r.name){const r=c(this.parsedUrl.path,`./statistics/${e.key}`);return y(r,{query:{f:"json"},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new p("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){return this._debouncedSaveOperations(0,{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"})}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new p("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new p("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((t=>t.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&W.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&W.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};e([t({type:["PointCloudLayer"]})],Y.prototype,"operationalLayerType",void 0),e([t(I)],Y.prototype,"popupEnabled",void 0),e([t({type:h,json:{name:"popupInfo",write:!0}})],Y.prototype,"popupTemplate",void 0),e([t({readOnly:!0,json:{read:!1},dependsOn:["fields","title","attributeStorageInfo"]})],Y.prototype,"defaultPopupTemplate",null),e([t({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],Y.prototype,"opacity",void 0),e([t({type:["show","hide"]})],Y.prototype,"listMode",void 0),e([t({types:[J],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],Y.prototype,"filters",void 0),e([t({type:[w]})],Y.prototype,"fields",void 0),e([t({readOnly:!0,dependsOn:["fields"]})],Y.prototype,"fieldsIndex",null),e([f("service","fields",["fields","attributeStorageInfo"])],Y.prototype,"readServiceFields",null),e([t(X.outFields)],Y.prototype,"outFields",void 0),e([t({readOnly:!0})],Y.prototype,"attributeStorageInfo",void 0),e([t(F)],Y.prototype,"elevationInfo",null),e([t({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],Y.prototype,"path",void 0),e([t(x)],Y.prototype,"legendEnabled",void 0),e([t({types:Q,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:Q},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],Y.prototype,"renderer",void 0),e([v("renderer")],Y.prototype,"writeRenderer",null),e([t({json:{read:!1},readOnly:!0})],Y.prototype,"type",void 0),Y=e([r("esri.layers.PointCloudLayer")],Y);var Z=Y;export default Z;