import{k as t,h as e,aF as s,al as r,D as i,E as n,K as o,aj as a,l as h,bj as c,b7 as u,t as l,U as f,O as d,m as g,bk as p,bl as m,b,T as w,B as y,ad as k,a7 as E,bm as v,bn as O,i as S,bo as N,M as j,a0 as I,a5 as P,j as _,aA as M,bp as C}from"./p-ab028778.js";import{d as A}from"./p-e07a8dfe.js";const R={geometryEngineWorker:()=>import("./p-37048644.js"),CSVSourceWorker:()=>import("./p-39f82b0c.js"),EdgeProcessingWorker:()=>import("./p-68e86a3c.js"),ElevationSamplerWorker:()=>import("./p-671f190d.js"),GeoJSONSourceWorker:()=>import("./p-93cfe568.js"),LercWorker:()=>import("./p-384e50e3.js"),MemorySourceWorker:()=>import("./p-bba6d8f0.js"),PBFDecoderWorker:()=>import("./p-da2a6e9c.js"),Pipeline:()=>import("./p-9029ef66.js").then((function(t){return t.P})),PointCloudWorker:()=>import("./p-be3b30e3.js"),RasterWorker:()=>import("./p-6087676a.js"),SceneLayerWorker:()=>import("./p-510e6693.js"),WorkerTileHandler:()=>import("./p-dabd3f90.js")};var T;!function(t){t[t.HANDSHAKE=0]="HANDSHAKE",t[t.CONFIGURE=1]="CONFIGURE",t[t.CONFIGURED=2]="CONFIGURED",t[t.OPEN=3]="OPEN",t[t.OPENED=4]="OPENED",t[t.RESPONSE=5]="RESPONSE",t[t.INVOKE=6]="INVOKE",t[t.ABORT=7]="ABORT",t[t.CLOSE=8]="CLOSE",t[t.OPEN_PORT=9]="OPEN_PORT",t[t.ON=10]="ON"}(T||(T={}));let D=0;function L(){return D++}function W(t){return t?"string"==typeof t?JSON.stringify({name:"message",message:t}):t.toJSON?JSON.stringify(t):JSON.stringify({name:t.name,message:t.message,details:t.details||{stack:t.stack}}):null}function G(t,e,s,r){if(e.type===T.OPEN_PORT)return void t.postMessage(e,[e.port]);if(e.type!==T.INVOKE&&e.type!==T.RESPONSE)return void t.postMessage(e);let i;!function(t){return t&&"object"==typeof t&&("result"in t||"transferList"in t)}(s)?(i=F(r),e.data=s):(i=F(s.transferList),e.data=s.result),i?t.postMessage(e,i):t.postMessage(e)}function U(t){if(!t)return null;const e=t.data;return e?"string"==typeof e?JSON.parse(e):e:null}function F(e){if(!e||!e.length)return null;if(t("esri-workers-arraybuffer-transfer"))return e;const s=e.filter((t=>{return!((e=t)instanceof ArrayBuffer||e&&e.constructor&&"ArrayBuffer"===e.constructor.name);var e}));return s.length?s:null}class B{constructor(t,e,s,r){this.resolve=t,this.reject=e,this.callback=s,this.signal=r}}class H{constructor(){this._tasks=new Array}get length(){return this._tasks.length}push(t,s){return e(((e,r)=>this._tasks.push(new B(e,r,t,s))))}unshift(t,s){return e(((e,r)=>this._tasks.unshift(new B(e,r,t,s))))}process(){if(0===this._tasks.length)return!1;const t=this._tasks.shift();try{s(t.signal);const e=t.callback();e&&"object"==typeof e&&"then"in e&&"function"==typeof e.then?e.then(t.resolve,t.reject):t.resolve(e)}catch(e){t.reject(e)}return!0}cancelAll(){const t=r();for(const e of this._tasks)e.reject(t);this._tasks.length=0}}let x=class extends a{constructor(){super(...arguments),this.SCHEDULER_LOG_SLOW_TASKS=!1}};i([n()],x.prototype,"SCHEDULER_LOG_SLOW_TASKS",void 0),x=i([o("esri.views.support.DebugFlags")],x);const J=new x,K=h.getLogger("esri.views.support.Scheduler");var q;!function(t){t.REMOTE_CLIENT="remote client",t.STREAM_DATA_LOADER="stream loader",t.ELEVATION_QUERY="elevation query",t.TERRAIN_SURFACE="terrain surface",t.SURFACE_GEOMETRY_UPDATES="surface geometry updates",t.GRAPHICS_CORE="Graphics3D",t.I3S_CONTROLLER="I3S",t.POINT_CLOUD_LAYER="point cloud",t.FEATURE_TILE_FETCHER="feature fetcher",t.FEATURE_FETCH_QUEUE="feature fetch queue",t.LABELER="labeler",t.GRAPHICS_DECONFLICTOR="graphics deconflictor",t.FILTER_VISIBILITY="Graphics3D filter visibility",t.FEATURE_QUERY_ENGINE="feature query",t.SCALE_VISIBILITY="Graphics3D scale visibility",t.FRUSTUM_VISIBILITY="Graphics3D frustum visibility",t.POINT_OF_INTEREST_FREQUENT="POI frequent",t.POINT_OF_INTEREST_INFREQUENT="POI infrequent",t.FEATURE_TILE_TREE="feature tile tree",t.FEATURE_TILE_TREE_ACTIVE="fast feature tile tree",t.ELEVATION_ALIGNMENT="elevation alignment",t.TEXT_TEXTURE_ATLAS="text texture atlas",t.TEXTURE_UNLOAD="texture unload",t.OVERLAY_MANAGER="overlay manager",t.LINE_OF_SIGHT_TOOL="line of sight tool",t.LINE_OF_SIGHT_TOOL_INTERACTIVE="interactive line of sight tool",t.ELEVATION_PROFILE="elevation profile",t[t.TEST_PRIO=1]="TEST_PRIO"}(q||(q={}));const $={[q.REMOTE_CLIENT]:1,[q.STREAM_DATA_LOADER]:1,[q.FEATURE_FETCH_QUEUE]:1,[q.ELEVATION_QUERY]:1,[q.TERRAIN_SURFACE]:2,[q.SURFACE_GEOMETRY_UPDATES]:2,[q.GRAPHICS_CORE]:3,[q.I3S_CONTROLLER]:4,[q.POINT_CLOUD_LAYER]:4,[q.FEATURE_TILE_FETCHER]:4,[q.LABELER]:8,[q.GRAPHICS_DECONFLICTOR]:8,[q.FILTER_VISIBILITY]:8,[q.FEATURE_QUERY_ENGINE]:8,[q.SCALE_VISIBILITY]:8,[q.FRUSTUM_VISIBILITY]:8,[q.POINT_OF_INTEREST_FREQUENT]:6,[q.POINT_OF_INTEREST_INFREQUENT]:30,[q.FEATURE_TILE_TREE]:16,[q.FEATURE_TILE_TREE_ACTIVE]:1,[q.ELEVATION_ALIGNMENT]:12,[q.TEXT_TEXTURE_ATLAS]:12,[q.TEXTURE_UNLOAD]:12,[q.OVERLAY_MANAGER]:12,[q.LINE_OF_SIGHT_TOOL]:16,[q.LINE_OF_SIGHT_TOOL_INTERACTIVE]:1};function V(t){return t in $?$[t]:"number"==typeof t?t:1}var z,Q;!function(t){t.Scheduler=class{constructor(t){this._now=t,this.updating=!0,this.performanceInfo={total:new c("total"),tasks:new Array},this._budget=null,this._state=1,this._tasks=new u,this._runQueue=new u,this._load=0,this._idleStateCallbacks=new u,this._idleUpdatesStartFired=!1,this._maxReschedule=X,this._forceTask=!1,this._safetyBudget=0,this._debug=!1,this._debugHandle=A(J,"SCHEDULER_LOG_SLOW_TASKS",(t=>this._debug=t)),this._budget=new s(t),tt.length=0;for(const t in q)Z.set(q[t],this.performanceInfo.tasks.length),this.performanceInfo.tasks.push(new c(q[t])),tt.push(0);let e;const r=this;this._test={get state(){return l(e)?r._state:e},set state(t){e=t},FRAME_SAFETY_BUDGET:5,INTERACTING_BUDGET:33.333333333333336,IDLE_BUDGET:100,get budget(){return r._budget.budget},usedBudget:0,updateTask:t=>this._updateTask(t),getState:t=>this._getState(t),getRuntime:t=>this._getRuntime(t),resetRuntimes:()=>this._resetRuntimes(),getRunning:()=>this._getRunning()}}destroy(){this._debugHandle&&this._debugHandle.remove()}registerTask(t,s,r){const i=V(t),n=new e(this,t,s,r,i);return this._tasks.push(n),n}registerIdleStateCallbacks(t,e){const s={idleBegin:t,idleEnd:e};this._idleStateCallbacks.push(s),2===this.state&&this._idleUpdatesStartFired&&s.idleBegin();const r=this;return{remove:()=>this._removeIdleStateCallbacks(s),set idleBegin(t){r._idleUpdatesStartFired&&(s.idleEnd(),2===r._state&&t()),s.idleBegin=t},set idleEnd(t){s.idleEnd=t}}}get now(){return this._now()}get load(){return this._load}set state(t){this._state!==t&&(this._state=t,2!==this.state&&this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._idleStateCallbacks.forAll((t=>t.idleEnd()))))}get state(){return l(this._test.state)?this._state:this._test.state}updateBudget(t){this._test.usedBudget=0,this._safetyBudget=5;let e=t.frameDuration,s=1;switch(this.state){case 2:this._safetyBudget=0,e=Math.max(100,t.frameDuration),s=30;break;case 1:e=Math.max(33.333333333333336,t.frameDuration)}return e-=t.elapsedFrameTime+this._safetyBudget,2!==this.state&&e<0&&!this._forceTask?(this._forceTask=!0,!1):(e=Math.max(e,s),this._budget.reset(e,this.state),this._maxReschedule=X,this._updateLoad(),this._schedule())}frame(){switch(this._forceTask=!1,this.state){case 2:this._idleUpdatesStartFired||(this._idleUpdatesStartFired=!0,this._idleStateCallbacks.forAll((t=>t.idleBegin()))),this._runIdle();break;case 1:this._runInteracting();break;default:this._runAnimating()}this._test.usedBudget=this._budget.elapsed}_removeIdleStateCallbacks(t){this._idleUpdatesStartFired&&t.idleEnd(),this._idleStateCallbacks.removeUnordered(t)}removeTask(t){this._tasks.removeUnordered(t),this._runQueue.removeUnordered(t)}_updateTask(t){this._tasks.forAll((e=>{e.name===t&&e.setPriority(t)}))}_getState(t){if(this._runQueue.some((e=>e.name===t)))return Q.SCHEDULED;let e=Q.IDLE;return this._tasks.forAll((s=>{s.name===t&&s.needsUpdate&&(s.schedulePriority<=1?e=Q.READY:e!==Q.READY&&(e=Q.WAITING))})),e}_getRuntime(t){let e=0;return this._tasks.forAll((s=>{s.name===t&&(e+=s.runtime)})),e}_resetRuntimes(){this._tasks.forAll((t=>t.runtime=0))}_getRunning(){const t=new Map;if(this._tasks.forAll((e=>{e.needsUpdate&&t.set(e.name,(t.get(e.name)||0)+1)})),0===t.size)return null;let e="";return t.forEach(((t,s)=>{e+=t>1?` ${t}x ${s}`:` ${s}`})),e}_runIdle(){this._run()}_runInteracting(){this._run()}_runAnimating(){this._run()}_updateLoad(){const t=this._tasks.reduce(((t,e)=>e.needsUpdate?++t:t),0);this._load=.9*this._load+t*(1-.9)}_schedule(){if(this._maxReschedule<=0)return!1;for(this._runQueue.filterInPlace((t=>!!t.needsUpdate||(t.schedulePriority=t.priority,!1)));0===this._runQueue.length;){let t=!1,e=0;if(this._tasks.forAll((s=>{if(0!==s.schedulePriority&&s.needsUpdate)switch(t=!0,e=Math.max(e,s.priority),s.schedulePriority){case 1:s.schedulePriority=0,this._runQueue.push(s);break;default:--s.schedulePriority}})),!t)return this.updating=!1,!1;this._maxReschedule===X&&(this._maxReschedule=e),--this._maxReschedule}return this.updating=!0,!0}_run(){const t=this._budget.now();for(let t=0;t<tt.length;++t)tt[t]=0;do{for(;this._runQueue.length>0;){const e=this._budget.now(),s=this._runQueue.pop();this._budget.resetProgress();try{s.processQueue(this._budget),!this._budget.done&&s.needsUpdate&&s.update(this._budget)}catch(t){K.error(`Exception in task "${s.name}"`,t)}s.schedulePriority=s.priority;const r=this._budget.now()-e;if(s.runtime+=r,tt[Z.get(s.task)]+=r,this._debug&&this._budget.elapsed>2*this._budget.budget&&console.log("Task",s.name,"used",this._budget.elapsed,"of max",this._budget.budget,"ms"),this._budget.remaining<=0)return void this._recordFrameTaskTimes(tt,this._budget.now()-t)}}while(this._schedule());this._recordFrameTaskTimes(tt,this._budget.now()-t)}_recordFrameTaskTimes(t,e){for(let e=0;e<t.length;++e)this.performanceInfo.tasks[e].record(t[e]);this.performanceInfo.total.record(e)}get test(){return this._test}};let e=class extends a{constructor(t,e,s,r,i){super({}),this._scheduler=t,this.name=e,this.update=s,this._needsUpdateCB=r,this._priority=i,this.runtime=0,this._queue=new H,this.updating=!1,this.schedulePriority=this._priority}normalizeCtorArgs(){return{}}remove(){this.processQueue(Y),this._scheduler.removeTask(this)}get priority(){return this._priority}setPriority(t){this.name=t,this._priority=V(t),0!==this.schedulePriority&&(this.schedulePriority=this._priority)}get task(){return this.name}set task(t){this.setPriority(t)}get needsUpdate(){return this._queue.length>0||this._needsUpdateCB()}schedule(t,e){return this.updating=!0,this._queue.push(t,e)}reschedule(t,e){return this.updating=!0,this._queue.unshift(t,e)}processQueue(t){for(;!t.done&&this._queue.process();)t.madeProgress();0===this._queue.length&&(this.updating=!1)}};i([n()],e.prototype,"updating",void 0),e=i([o("esri.views.support.SchedulerTask")],e);class s{constructor(t){this.now=t,this._begin=0,this._budget=0,this._state=2,this._didWork=!1,this._enabled=!0}run(t){return!this.done&&(!0===t()&&(this._didWork=!0),!0)}get done(){return this._didWork&&this.elapsed>=this._budget&&this._enabled}get budget(){return this._budget}madeProgress(){this._didWork=!0}get state(){return this._state}get enabled(){return this._enabled}set enabled(t){this._enabled=t}reset(t,e){this._begin=this.now(),this._budget=t,this._state=e,this._didWork=!1}get remaining(){return Math.max(this._budget-this.elapsed,0)}get elapsed(){return this.now()-this._begin}resetProgress(){this._didWork=!1}get hasProgressed(){return this._didWork}}t.Budget=s}(z||(z={})),function(t){t.SCHEDULED="s",t.READY="r",t.WAITING="w",t.IDLE="i"}(Q||(Q={}));const Y=(()=>{const t=new z.Budget((()=>performance.now()));return t.enabled=!1,t})(),X=Number.MAX_SAFE_INTEGER,Z=new Map,tt=new Array,{CLOSE:et,ABORT:st,INVOKE:rt,RESPONSE:it,OPEN_PORT:nt,ON:ot}=T;class at{constructor(t){this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._invoke=t,this._timer=null,this._process=this._process.bind(this)}push(t){t.type===T.ABORT?this._cancelledJobIds.add(t.jobId):(this._invokeMessages.push(t),null===this._timer&&(this._timer=setTimeout(this._process,0)))}clear(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null}_process(){this._timer=null;for(const t of this._invokeMessages)this._cancelledJobIds.has(t.jobId)||this._invoke(t);this._cancelledJobIds.clear(),this._invokeMessages.length=0}}class ht{constructor(t,e){this._port=t,this._outJobs=new Map,this._inJobs=new Map,this._invokeQueue=new at((t=>this._onInvokeMessage(t))),this._messageQueue=new Array,this._client=e.client,this._onMessage=this._onMessage.bind(this),this._channel=e.channel,e.scheduler&&(this._frameTask=e.scheduler.registerTask(q.REMOTE_CLIENT,(t=>this._update(t)),(()=>this._messageQueue.length>0))),this._port.addEventListener("message",this._onMessage),this._port.start()}static connect(t){const e=new MessageChannel;let s;s="function"==typeof t?new t:"default"in t&&"function"==typeof t.default?new t.default:t;const r=new ht(e.port1,{channel:e,client:s});return"object"==typeof s&&"remoteClient"in s&&(s.remoteClient=r),ht.clients.set(r,s),e.port2}static loadWorker(t){const e=R[t];return e?e():f(null)}close(){this._post({type:et}),this._close()}isBusy(){return this._outJobs.size>0}invoke(t,s,i){const n=i&&i.signal,o=i&&i.transferList;if(!this._port)return d(new g("worker:port-closed",`Cannot call invoke('${t}'), port is closed`,{methodName:t,data:s}));const a=L();return e(((e,i)=>{const h=p(n,(()=>{var t;const e=this._outJobs.get(a);e&&(this._outJobs.delete(a),null==(t=e.abortHandle)||t.remove(),this._post({type:st,jobId:a}),i(r()))}));this._outJobs.set(a,{resolve:e,reject:i,abortHandle:h,debugInfo:t}),this._post({type:rt,jobId:a,methodName:t,abortable:null!=n},s,o)}))}on(t,e){const s=new MessageChannel;function r(t){e(t.data)}return this._port.postMessage({type:T.ON,eventType:t,port:s.port2},[s.port2]),s.port1.addEventListener("message",r),s.port1.start(),{remove(){s.port1.postMessage({type:T.CLOSE}),s.port1.close(),s.port1.removeEventListener("message",r)}}}openPort(){const t=new MessageChannel;return this._post({type:nt,port:t.port2}),t.port1}_close(){this._channel&&(this._channel=null),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach((t=>{var e;null==(e=t.abortHandle)||e.remove(),t.reject(r(`Worker closing, aborting job calling '${t.debugInfo}'`))})),this._inJobs.clear(),this._outJobs.clear(),this._invokeQueue.clear(),this._port=this._client=null,this._frameTask=m(this._frameTask)}_onMessage(t){b(this._frameTask)?this._messageQueue.push(t):this._processMessage(t)}_processMessage(t){const e=U(t);if(e)switch(e.type){case it:this._onResponseMessage(e);break;case rt:this._invokeQueue.push(e);break;case st:this._onAbortMessage(e);break;case et:this._onCloseMessage();break;case nt:this._onOpenPortMessage(e);break;case ot:this._onOnMessage(e)}}_onAbortMessage(t){const e=this._inJobs,s=t.jobId,r=e.get(s);this._invokeQueue.push(t),r&&(r.controller&&r.controller.abort(),e.delete(s))}_onCloseMessage(){const t=this._client;this._close(),t&&"destroy"in t&&ht.clients.get(this)===t&&t.destroy(),ht.clients.delete(this),t&&t.remoteClient&&(t.remoteClient=null)}_onInvokeMessage(t){const{methodName:e,jobId:s,data:r,abortable:i}=t,n=i?w():null,o=this._inJobs;let a,h=this._client,c=h[e];try{if(!c&&e&&-1!==e.indexOf(".")){const t=e.split(".");for(let e=0;e<t.length-1;e++)h=h[t[e]],c=h[t[e+1]]}if("function"!=typeof c)throw new TypeError(`${e} is not a function`);a=c.call(h,r,{client:this,signal:n?n.signal:null})}catch(t){return void this._post({type:it,jobId:s,error:W(t)})}y(a)?(o.set(s,{controller:n,promise:a}),a.then((t=>{o.has(s)&&(o.delete(s),this._post({type:it,jobId:s},t))}),(t=>{o.has(s)&&(o.delete(s),k(t)||this._post({type:it,jobId:s,error:W(t||{message:`Error encountered at method ${e}`})}))}))):this._post({type:it,jobId:s},a)}_onOpenPortMessage(t){new ht(t.port,{client:this._client})}_onOnMessage(t){const{port:e}=t,s=this._client.on(t.eventType,(t=>{e.postMessage(t)})),r=E(t.port,"message",(t=>{U(t).type===T.CLOSE&&(r.remove(),s.remove(),e.close())}))}_onResponseMessage(t){var e;const{jobId:s,error:r,data:i}=t,n=this._outJobs;if(!n.has(s))return;const o=n.get(s);n.delete(s),null==(e=o.abortHandle)||e.remove(),r?o.reject(g.fromJSON(JSON.parse(r))):o.resolve(i)}_update(t){for(;!t.done&&this._messageQueue.length>0;)this._processMessage(this._messageQueue.shift()),t.madeProgress()}_post(t,e,s){return G(this._port,t,e,s)}}ht.clients=new Map;const ct=h.getLogger("esri.core.workers.Connection");class ut{constructor(){this._clients=new Array,this._clientPromises=new Array,this._clientIdx=0}destroy(){this.close()}get closed(){return!this._clients||!this._clients.length}open(t,r){return e(((e,i)=>{let n=!0;const o=t=>{s(r.signal),n&&(n=!1,t())};this._clients.length=t.length,this._clientPromises.length=t.length;for(let s=0;s<t.length;++s){const n=t[s];v(n)?this._clientPromises[s]=n.then((t=>(this._clients[s]=new ht(t,r),o(e),this._clients[s])),(()=>(o(i),null))):(this._clients[s]=new ht(n,r),this._clientPromises[s]=f(this._clients[s]),o(e))}}))}broadcast(t,e,s){const r=new Array(this._clientPromises.length);for(let i=0;i<this._clientPromises.length;++i)r[i]=this._clientPromises[i].then((r=>r.invoke(t,e,s)));return r}close(){for(const t of this._clientPromises)t.then((t=>t.close()));this._clients.length=0,this._clientPromises.length=0}getAvailableClient(){let t;for(let e=0;e<this._clients.length;++e){const s=this._clients[e];if(s){if(!s.isBusy())return f(s)}else t=t||[],t.push(this._clientPromises[e])}return t?O(t):(this._clientIdx=(this._clientIdx+1)%this._clients.length,f(this._clients[this._clientIdx]))}invoke(t,e,s){let r=null;return Array.isArray(s)?(ct.warn("invoke()","The transferList parameter is deprecated, use the options object instead"),r={transferList:s}):r=s,this.closed?d(new Error("Connection closed")):this.getAvailableClient().then((s=>s.invoke(t,e,r)))}on(t,e){return S(this._clientPromises).then((()=>N(this._clients.map((s=>s.on(t,e))))))}openPorts(){return e((t=>{const e=new Array(this._clientPromises.length);let s=e.length;for(let r=0;r<this._clientPromises.length;++r)this._clientPromises[r].then((i=>{e[r]=i.openPort(),0==--s&&t(e)}))}))}get test(){return{numClients:this._clients.length}}}const lt={};class ft{constructor(){const t=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach((e=>{this[e]=(...s)=>t[e](...s)}))}}const dt=j.MutationObserver||j.WebKitMutationObserver,gt=function(){let t;if(j.process&&j.process.nextTick)t=t=>{j.process.nextTick(t)};else if(j.Promise)t=t=>{j.Promise.resolve().then(t)};else if(dt){const e=[],s=document.createElement("div");new dt((()=>{for(;e.length>0;)e.shift()()})).observe(s,{attributes:!0}),t=t=>{e.push(t),s.setAttribute("queueStatus","1")}}return t}(),pt=(()=>{const t=j.MessageEvent;try{new t("message",{data:null})}catch{return(t,e={})=>{const{data:s,bubbles:r=!1,cancelable:i=!1}=e,n=document.createEvent("Event");return n.initEvent(t,r,i),n.data=s,n}}return(e,s)=>new t(e,s)})();class mt{constructor(){this._dispatcher=new ft,this._isInitialized=!1,this._workerPostMessage({type:T.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(t){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=t,t&&this.addEventListener("message",t)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(t){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=t,t&&this.addEventListener("messageerror",t)}get onerror(){return this._onerrorHandler}set onerror(t){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=t,t&&this.addEventListener("error",t)}postMessage(t){gt((()=>{this._workerMessageHandler(pt("message",{data:t}))}))}dispatchEvent(t){return this._dispatcher.dispatchEvent(t)}addEventListener(t,e,s){this._dispatcher.addEventListener(t,e,s)}removeEventListener(t,e,s){this._dispatcher.removeEventListener(t,e,s)}_workerPostMessage(t){gt((()=>{this.dispatchEvent(pt("message",{data:t}))}))}async _workerMessageHandler(t){const e=U(t);if(e)switch(e.type){case T.CONFIGURE:this._isInitialized||this._workerPostMessage({type:T.CONFIGURED});break;case T.OPEN:{const{modulePath:t,jobId:s}=e;let r=await ht.loadWorker(t);r||(r=await import(t));const i=ht.connect(r);this._workerPostMessage({type:T.OPENED,jobId:s,data:i});break}}}}const bt=h.getLogger("esri.core.workers");t.add("esri-workers-arraybuffer-transfer",!t("safari")||t("safari")>=12);const{CONFIGURED:wt,CONFIGURE:yt,HANDSHAKE:kt}=T;let Et;try{Et=URL.createObjectURL(new Blob(['var esriConfig,workerPath,globalId=0,outgoing=new Map,configured=!1,HANDSHAKE=0,CONFIGURE=1,CONFIGURED=2,OPEN=3,OPENED=4,RESPONSE=5,INVOKE=6,ABORT=7;function createAbortError(){var e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,r,t){var o=t&&t.signal,n=globalId++;return new Promise((function(t,a){if(o){if(o.aborted)return a(createAbortError());o.addEventListener("abort",(function(){outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:ABORT,jobId:n}),a(createAbortError()))}))}outgoing.set(n,{resolve:t,reject:a}),self.postMessage({type:INVOKE,jobId:n,methodName:e,abortable:null!=o,data:r})}))}function messageHandler(e){var r=receiveMessage(e);if(r){var t=r.jobId;switch(r.type){case CONFIGURE:var o=r.configure;if(configured)return;configured=!0,esriConfig=o.esriConfig,workerPath=esriConfig.workers.workerPath,self.dojoConfig=o.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(o.loaderConfig)),self.postMessage({type:CONFIGURED});break;case OPEN:var n;function a(e){var r=n.connect(e);self.postMessage({type:OPENED,jobId:t,data:r},[r])}"function"==typeof define&&define.amd?require([workerPath],(function(e){(n=e.default||e).loadWorker(r.modulePath).then((function(e){return e||new Promise((function(e){require([r.modulePath],e)}))})).then(a)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((function(e){return(n=e.default).loadWorker(r.modulePath)})).then((function(e){return e||System.import(r.modulePath)})).then(a):(self.RemoteClient||importScripts(workerPath),(n=self.RemoteClient.default||self.RemoteClient).loadWorker(r.modulePath).then(a));break;case RESPONSE:if(outgoing.has(t)){var i=outgoing.get(t);outgoing.delete(t),r.error?i.reject(JSON.parse(r.error)):i.resolve(r.data)}}}}self.addEventListener("message",messageHandler),self.postMessage({type:HANDSHAKE});'],{type:"text/javascript"}))}catch(D){}const vt="Failed to create Worker. Fallback to execute module in main thread";async function Ot(s){return e((e=>{function r(n){const o=U(n);if(o)switch(o.type){case kt:!function(e){let s;if(null!=I.default){const t={...I};delete t.default,s=JSON.parse(JSON.stringify(t))}else s=JSON.parse(JSON.stringify(I));s.assetsPath=P(s.assetsPath),s.locale=_(),s.has={"csp-restrictions":t("csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":t("esri-2d-update-debug"),"esri-atomics":t("esri-atomics"),"esri-secure-context":t("esri-secure-context"),"esri-shared-array-buffer":t("esri-shared-array-buffer"),"esri-tiles-debug":t("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":t("esri-workers-arraybuffer-transfer"),"host-webworker":1},s.workers.loaderUrl&&(s.workers.loaderUrl=P(s.workers.loaderUrl)),s.workers.workerPath=P(s.workers.workerPath?s.workers.workerPath:M("esri/core/workers/RemoteClient.js"));const r=I.workers.loaderConfig,i=function(t){var e;const s={async:t.async,isDebug:t.isDebug,locale:t.locale,baseUrl:t.baseUrl,has:{...t.has},map:{...t.map},packages:t.packages&&t.packages.concat()||[],paths:{...t.paths}};return t.hasOwnProperty("async")||(s.async=!0),t.hasOwnProperty("isDebug")||(s.isDebug=!1),t.baseUrl||(s.baseUrl=lt.baseUrl),null==(e=lt.packages)||e.forEach((t=>{!function(t,e){for(const s of t)if(s.name===e.name)return;t.push(e)}(s.packages,t)})),s}({baseUrl:null==r?void 0:r.baseUrl,locale:_(),has:{"csp-restrictions":t("csp-restrictions"),"dojo-test-sniff":0,"host-webworker":1,...null==r?void 0:r.has},map:{...null==r?void 0:r.map},paths:{...null==r?void 0:r.paths},packages:(null==r?void 0:r.packages)||[]});e.postMessage({type:yt,configure:{esriConfig:s,loaderConfig:i}})}(s);break;case wt:s.removeEventListener("message",r),s.removeEventListener("error",i),e(s)}}function i(t){t.preventDefault(),s.removeEventListener("message",r),s.removeEventListener("error",i),bt.warn("Failed to create Worker. Fallback to execute module in main thread",t),(s=new mt).addEventListener("message",r),s.addEventListener("error",i)}s.addEventListener("message",r),s.addEventListener("error",i)}))}const St=h.getLogger("esri.core.workers"),{ABORT:Nt,INVOKE:jt,OPEN:It,OPENED:Pt,RESPONSE:_t}=T;class Mt{constructor(t,e){this._outJobs=new Map,this._inJobs=new Map,this.worker=t,this.id=e,t.addEventListener("message",this._onMessage.bind(this)),t.addEventListener("error",(t=>{t.preventDefault(),St.error(t)}))}static async create(e){const s=await async function(){if(!t("esri-workers"))return Ot(new mt);let e;if(Et)try{e=new Worker(Et)}catch(t){bt.warn(vt,event),e=new mt}else bt.warn(vt,event),e=new mt;return Ot(e)}();return new Mt(s,e)}terminate(){this.worker.terminate()}async open(t,s={}){const{signal:r}=s,i=L();return e(((e,s)=>{const n={resolve:e,reject:s,abortHandle:p(r,(()=>{this._outJobs.delete(i),this._post({type:Nt,jobId:i})}))};this._outJobs.set(i,n),this._post({type:It,jobId:i,modulePath:t})}))}_onMessage(t){const e=U(t);if(e)switch(e.type){case Pt:this._onOpenedMessage(e);break;case _t:this._onResponseMessage(e);break;case Nt:this._onAbortMessage(e);break;case jt:this._onInvokeMessage(e)}}_onAbortMessage(t){const e=this._inJobs,s=t.jobId,r=e.get(s);r&&(r.controller&&r.controller.abort(),e.delete(s))}_onInvokeMessage(t){const{methodName:e,jobId:s,data:r,abortable:i}=t,n=i?w():null,o=this._inJobs,a=C[e];let h;try{if("function"!=typeof a)throw new TypeError(`${e} is not a function`);h=a.call(null,r,{signal:n?n.signal:null})}catch(t){return void this._post({type:_t,jobId:s,error:W(t)})}y(h)?(o.set(s,{controller:n,promise:h}),h.then((t=>{o.has(s)&&(o.delete(s),this._post({type:_t,jobId:s},t))}),(t=>{o.has(s)&&(o.delete(s),t||(t={message:"Error encountered at method"+e}),k(t)||this._post({type:_t,jobId:s,error:W(t||{message:`Error encountered at method ${e}`})}))}))):this._post({type:_t,jobId:s},h)}_onOpenedMessage(t){var e;const{jobId:s,data:r}=t,i=this._outJobs.get(s);i&&(this._outJobs.delete(s),null==(e=i.abortHandle)||e.remove(),i.resolve(r))}_onResponseMessage(t){var e;const{jobId:s,error:r,data:i}=t,n=this._outJobs.get(s);n&&(this._outJobs.delete(s),null==(e=n.abortHandle)||e.remove(),r?n.reject(g.fromJSON(JSON.parse(r))):n.resolve(i))}_post(t,e,s){return G(this.worker,t,e,s)}}let Ct=t("esri-workers-debug")?1:t("host-browser")?navigator.hardwareConcurrency-1:0;Ct||(Ct=t("safari")&&t("mac")||t("trident")?7:2);let At=0;const Rt=[];function Tt(t,e){return Dt(t,{client:e})}async function Dt(t,e){const s=new ut;return await s.open(t,e),s}async function Lt(e,r={}){if("string"!=typeof e)throw new g("workers:undefined-module","modulePath is missing");let i=r.strategy||"distributed";if(t("host-webworker")&&!t("esri-workers")&&(i="local"),"local"===i){let t=await ht.loadWorker(e);t||(t=await import(e)),s(r.signal);const i=r.client||t;return Dt([ht.connect(t)],{...r,client:i})}if(await async function(){if(Gt)return Gt;Wt=w();const t=[];for(let e=0;e<Ct;e++){const s=Mt.create(e).then((t=>(Rt[e]=t,t)));t.push(s)}return Gt=S(t),Gt}(),s(r.signal),"dedicated"===i){const t=At++%Ct;return Dt([await Rt[t].open(e,r)],r)}if(r.maxNumWorkers&&r.maxNumWorkers>0){const t=Math.min(r.maxNumWorkers,Ct);if(t<Ct){const s=new Array(t);for(let i=0;i<t;++i){const t=At++%Ct;s[i]=Rt[t].open(e,r)}return Dt(s,r)}}return Dt(Rt.map((t=>t.open(e,r))),r)}let Wt,Gt=null;export{H as m,Tt as u,Lt as w}