import"./p-476cf7c4.js";import{D as e,E as t,K as i,aC as r,U as s,z as o,k as a,b as n,F as p,dO as l,aU as u,y as d}from"./p-ab028778.js";import"./p-2ef6e039.js";import"./p-7575e94f.js";import"./p-73b795c3.js";import"./p-e07a8dfe.js";import"./p-b92ca348.js";import"./p-3cd8f347.js";import c from"./p-f16fbea1.js";import"./p-1ff061ae.js";import"./p-2ceb0941.js";import"./p-8fc84c2d.js";import"./p-1cce98ff.js";import"./p-e7501203.js";import"./p-00f58755.js";import"./p-c5691699.js";import{w as h}from"./p-f3cc8f75.js";import{R as m}from"./p-e2c62b7c.js";import"./p-dc697c54.js";import"./p-a1a69fdc.js";import"./p-754df0ae.js";import"./p-89accc4e.js";import"./p-4a36891c.js";import f from"./p-11ca1b07.js";import"./p-8509ef38.js";import"./p-15538a25.js";import"./p-48626aa9.js";import"./p-a747e129.js";import"./p-f53b64f4.js";import"./p-b9c578c1.js";import"./p-dd888632.js";import"./p-8ff7604b.js";import"./p-c3d3c04d.js";import"./p-2500de92.js";import"./p-311069c2.js";import"./p-6501f469.js";import"./p-bfb72207.js";import"./p-17b09f4f.js";import"./p-0913eaf8.js";import"./p-4b9da55e.js";import{t as y}from"./p-a6dff060.js";let j=class extends r{constructor(e){super(e),this.type="csv"}load(e){const t=n(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),s(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>c.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:o.fromJSON(e.extent)})))}async _startWorker(e){this._connection=await h("CSVSourceWorker",{strategy:a("feature-layers-workers")?"dedicated":"local",signal:e});const t=await this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map((e=>e.toJSON())),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:e});this.locationInfo=t.locationInfo,this.sourceJSON=t.layerDefinition,this.columnDelimiter=t.columnDelimiter}};e([t()],j.prototype,"type",void 0),e([t()],j.prototype,"url",void 0),e([t()],j.prototype,"delimiter",void 0),e([t()],j.prototype,"fields",void 0),e([t()],j.prototype,"latitudeField",void 0),e([t()],j.prototype,"longitudeField",void 0),e([t()],j.prototype,"spatialReference",void 0),e([t()],j.prototype,"timeInfo",void 0),e([t()],j.prototype,"locationInfo",void 0),e([t()],j.prototype,"sourceJSON",void 0),e([t()],j.prototype,"columnDelimiter",void 0),j=e([i("esri.layers.graphics.sources.CSVSource")],j);var g=j;let b=class extends f{constructor(...e){super(...e),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=d.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get capabilities(){return{data:{supportsAttachment:!1,supportsM:!1,supportsZ:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsQuery:!0,supportsResizeAttachments:!1,supportsUpdate:!1},query:y,queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){this._set("url",e)}async createGraphicsSource(e){const t=new g({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.columnDelimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(m.from(e)||this.createQuery()))).then((e=>{if(e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(m.from(e)||this.createQuery())))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(m.from(e)||this.createQuery())))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(m.from(e)||this.createQuery())))}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};e([t({readOnly:!0,dependsOn:["loaded"],autoTracked:!1,json:{read:!1,write:!1}})],b.prototype,"capabilities",null),e([t({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],b.prototype,"delimiter",void 0),e([t({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],b.prototype,"editingEnabled",void 0),e([t({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],b.prototype,"fields",void 0),e([t({type:Boolean,readOnly:!0,dependsOn:["loaded"]})],b.prototype,"isTable",null),e([p("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],b.prototype,"readWebMapLabelsVisible",null),e([t({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],b.prototype,"latitudeField",void 0),e([t({type:["show","hide"]})],b.prototype,"listMode",void 0),e([t({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],b.prototype,"locationType",void 0),e([t({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],b.prototype,"longitudeField",void 0),e([t({type:["CSV"]})],b.prototype,"operationalLayerType",void 0),e([t()],b.prototype,"outFields",void 0),e([t({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],b.prototype,"path",void 0),e([t({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],b.prototype,"portalItem",void 0),e([t({json:{read:!1},cast:null,type:g,readOnly:!0})],b.prototype,"source",void 0),e([t({json:{read:!1},value:"csv",readOnly:!0})],b.prototype,"type",void 0),e([t({json:{read:l,write:{isRequired:!0,ignoreOrigin:!0,writer:u}}})],b.prototype,"url",null),b=e([i("esri.layers.CSVLayer")],b);var v=b;export default v;