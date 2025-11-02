var oD=Object.defineProperty,iD=Object.defineProperties;var sD=Object.getOwnPropertyDescriptors;var cs=Object.getOwnPropertySymbols;var bh=Object.prototype.hasOwnProperty,Dh=Object.prototype.propertyIsEnumerable;var Sh=(e,t,n)=>t in e?oD(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,M=(e,t)=>{for(var n in t||={})bh.call(t,n)&&Sh(e,n,t[n]);if(cs)for(var n of cs(t))Dh.call(t,n)&&Sh(e,n,t[n]);return e},ae=(e,t)=>iD(e,sD(t));var ll=(e,t)=>{var n={};for(var r in e)bh.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&cs)for(var r of cs(e))t.indexOf(r)<0&&Dh.call(e,r)&&(n[r]=e[r]);return n};function wh(e,t){return Object.is(e,t)}var Pe=null,ls=!1,dl=1,Er=Symbol("SIGNAL");function ee(e){let t=Pe;return Pe=e,t}function fl(){return Pe}var us={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function hl(e){if(ls)throw new Error("");if(Pe===null)return;Pe.consumerOnSignalRead(e);let t=Pe.nextProducerIndex++;if(fs(Pe),t<Pe.producerNode.length&&Pe.producerNode[t]!==e&&Ho(Pe)){let n=Pe.producerNode[t];ds(n,Pe.producerIndexOfThis[t])}Pe.producerNode[t]!==e&&(Pe.producerNode[t]=e,Pe.producerIndexOfThis[t]=Ho(Pe)?Ph(e,Pe,t):0),Pe.producerLastReadVersion[t]=e.version}function Th(){dl++}function Eh(e){if(!(Ho(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===dl)){if(!e.producerMustRecompute(e)&&!gl(e)){ul(e);return}e.producerRecomputeValue(e),ul(e)}}function pl(e){if(e.liveConsumerNode===void 0)return;let t=ls;ls=!0;try{for(let n of e.liveConsumerNode)n.dirty||aD(n)}finally{ls=t}}function Ch(){return Pe?.consumerAllowSignalWrites!==!1}function aD(e){e.dirty=!0,pl(e),e.consumerMarkedDirty?.(e)}function ul(e){e.dirty=!1,e.lastCleanEpoch=dl}function ml(e){return e&&(e.nextProducerIndex=0),ee(e)}function Ih(e,t){if(ee(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(Ho(e))for(let n=e.nextProducerIndex;n<e.producerNode.length;n++)ds(e.producerNode[n],e.producerIndexOfThis[n]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function gl(e){fs(e);for(let t=0;t<e.producerNode.length;t++){let n=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==n.version||(Eh(n),r!==n.version))return!0}return!1}function yl(e){if(fs(e),Ho(e))for(let t=0;t<e.producerNode.length;t++)ds(e.producerNode[t],e.producerIndexOfThis[t]);e.producerNode.length=e.producerLastReadVersion.length=e.producerIndexOfThis.length=0,e.liveConsumerNode&&(e.liveConsumerNode.length=e.liveConsumerIndexOfThis.length=0)}function Ph(e,t,n){if(Rh(e),e.liveConsumerNode.length===0&&Mh(e))for(let r=0;r<e.producerNode.length;r++)e.producerIndexOfThis[r]=Ph(e.producerNode[r],e,r);return e.liveConsumerIndexOfThis.push(n),e.liveConsumerNode.push(t)-1}function ds(e,t){if(Rh(e),e.liveConsumerNode.length===1&&Mh(e))for(let r=0;r<e.producerNode.length;r++)ds(e.producerNode[r],e.producerIndexOfThis[r]);let n=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[n],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[n],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let r=e.liveConsumerIndexOfThis[t],o=e.liveConsumerNode[t];fs(o),o.producerIndexOfThis[r]=t}}function Ho(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function fs(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function Rh(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}function Mh(e){return e.producerNode!==void 0}function cD(){throw new Error}var _h=cD;function lD(e){_h(e)}function vl(e){_h=e}var uD=null;function Sl(e,t){Ch()||lD(e),e.equal(e.value,t)||(e.value=t,dD(e))}var bl=ae(M({},us),{equal:wh,value:void 0,kind:"signal"});function dD(e){e.version++,Th(),pl(e),uD?.()}var Dl;function Uo(){return Dl}function Qt(e){let t=Dl;return Dl=e,t}var hs=Symbol("NotFound");function j(e){return typeof e=="function"}function Cr(e){let n=e(r=>{Error.call(r),r.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var ps=Cr(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function Gn(e,t){if(e){let n=e.indexOf(t);0<=n&&e.splice(n,1)}}var be=class e{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let i of n)i.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(j(r))try{r()}catch(i){t=i instanceof ps?i.errors:[i]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let i of o)try{xh(i)}catch(s){t=t??[],s instanceof ps?t=[...t,...s.errors]:t.push(s)}}if(t)throw new ps(t)}}add(t){var n;if(t&&t!==this)if(this.closed)xh(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}}_hasParent(t){let{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){let{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&Gn(n,t)}remove(t){let{_finalizers:n}=this;n&&Gn(n,t),t instanceof e&&t._removeParent(this)}};be.EMPTY=(()=>{let e=new be;return e.closed=!0,e})();var wl=be.EMPTY;function ms(e){return e instanceof be||e&&"closed"in e&&j(e.remove)&&j(e.add)&&j(e.unsubscribe)}function xh(e){j(e)?e():e.unsubscribe()}var wt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ir={setTimeout(e,t,...n){let{delegate:r}=Ir;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){let{delegate:t}=Ir;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function gs(e){Ir.setTimeout(()=>{let{onUnhandledError:t}=wt;if(t)t(e);else throw e})}function jo(){}var kh=Tl("C",void 0,void 0);function Nh(e){return Tl("E",void 0,e)}function Oh(e){return Tl("N",e,void 0)}function Tl(e,t,n){return{kind:e,value:t,error:n}}var Qn=null;function Pr(e){if(wt.useDeprecatedSynchronousErrorHandling){let t=!Qn;if(t&&(Qn={errorThrown:!1,error:null}),e(),t){let{errorThrown:n,error:r}=Qn;if(Qn=null,n)throw r}}else e()}function Ah(e){wt.useDeprecatedSynchronousErrorHandling&&Qn&&(Qn.errorThrown=!0,Qn.error=e)}var Yn=class extends be{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,ms(t)&&t.add(this)):this.destination=DD}static create(t,n,r){return new Rr(t,n,r)}next(t){this.isStopped?Cl(Oh(t),this):this._next(t)}error(t){this.isStopped?Cl(Nh(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?Cl(kh,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},SD=Function.prototype.bind;function El(e,t){return SD.call(e,t)}var Il=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){ys(r)}}error(t){let{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){ys(r)}else ys(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){ys(n)}}},Rr=class extends Yn{constructor(t,n,r){super();let o;if(j(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&wt.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&El(t.next,i),error:t.error&&El(t.error,i),complete:t.complete&&El(t.complete,i)}):o=t}this.destination=new Il(o)}};function ys(e){wt.useDeprecatedSynchronousErrorHandling?Ah(e):gs(e)}function bD(e){throw e}function Cl(e,t){let{onStoppedNotification:n}=wt;n&&Ir.setTimeout(()=>n(e,t))}var DD={closed:!0,next:jo,error:bD,complete:jo};var Yt=typeof Symbol=="function"&&Symbol.observable||"@@observable";function et(e){return e}function Pl(...e){return Rl(e)}function Rl(e){return e.length===0?et:e.length===1?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}var z=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){let r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){let i=TD(n)?n:new Rr(n,r,o);return Pr(()=>{let{operator:s,source:c}=this;i.add(s?s.call(i,c):c?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return r=Fh(r),new r((o,i)=>{let s=new Rr({next:c=>{try{n(c)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(n)}[Yt](){return this}pipe(...n){return Rl(n)(this)}toPromise(n){return n=Fh(n),new n((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function Fh(e){var t;return(t=e??wt.Promise)!==null&&t!==void 0?t:Promise}function wD(e){return e&&j(e.next)&&j(e.error)&&j(e.complete)}function TD(e){return e&&e instanceof Yn||wD(e)&&ms(e)}function Ml(e){return j(e?.lift)}function Y(e){return t=>{if(Ml(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function K(e,t,n,r,o){return new _l(e,t,n,r,o)}var _l=class extends Yn{constructor(t,n,r,o,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(c){try{n(c)}catch(l){t.error(l)}}:super._next,this._error=o?function(c){try{o(c)}catch(l){t.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(c){t.error(c)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};function Mr(){return Y((e,t)=>{let n=null;e._refCount++;let r=K(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount){n=null;return}let o=e._connection,i=n;n=null,o&&(!i||o===i)&&o.unsubscribe(),t.unsubscribe()});e.subscribe(r),r.closed||(n=e.connect())})}var _r=class extends z{constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,Ml(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){let t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new be;let n=this.getSubject();t.add(this.source.subscribe(K(n,void 0,()=>{this._teardown(),n.complete()},r=>{this._teardown(),n.error(r)},()=>this._teardown()))),t.closed&&(this._connection=null,t=be.EMPTY)}return t}refCount(){return Mr()(this)}};var Lh=Cr(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Fe=(()=>{class e extends z{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let r=new vs(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Lh}next(n){Pr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(n)}})}error(n){Pr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){Pr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:r,isStopped:o,observers:i}=this;return r||o?wl:(this.currentObservers=null,i.push(n),new be(()=>{this.currentObservers=null,Gn(i,n)}))}_checkFinalizedStatuses(n){let{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){let n=new z;return n.source=this,n}}return e.create=(t,n)=>new vs(t,n),e})(),vs=class extends Fe{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,t)}error(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,t)}complete(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)}_subscribe(t){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&r!==void 0?r:wl}};var Se=class extends Fe{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){let{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}};var xl={now(){return(xl.delegate||Date).now()},delegate:void 0};var Ss=class extends be{constructor(t,n){super()}schedule(t,n=0){return this}};var Bo={setInterval(e,t,...n){let{delegate:r}=Bo;return r?.setInterval?r.setInterval(e,t,...n):setInterval(e,t,...n)},clearInterval(e){let{delegate:t}=Bo;return(t?.clearInterval||clearInterval)(e)},delegate:void 0};var bs=class extends Ss{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){var r;if(this.closed)return this;this.state=t;let o=this.id,i=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(i,o,n)),this.pending=!0,this.delay=n,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(i,this.id,n),this}requestAsyncId(t,n,r=0){return Bo.setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,n,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return n;n!=null&&Bo.clearInterval(n)}execute(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let r=this._execute(t,n);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let r=!1,o;try{this.work(t)}catch(i){r=!0,o=i||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){let{id:t,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,Gn(r,this),t!=null&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,super.unsubscribe()}}};var xr=class e{constructor(t,n=e.now){this.schedulerActionCtor=t,this.now=n}schedule(t,n=0,r){return new this.schedulerActionCtor(this,t).schedule(r,n)}};xr.now=xl.now;var Ds=class extends xr{constructor(t,n=xr.now){super(t,n),this.actions=[],this._active=!1}flush(t){let{actions:n}=this;if(this._active){n.push(t);return}let r;this._active=!0;do if(r=t.execute(t.state,t.delay))break;while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}}};var ws=class extends bs{constructor(t,n){super(t,n),this.scheduler=t,this.work=n}schedule(t,n=0){return n>0?super.schedule(t,n):(this.delay=n,this.state=t,this.scheduler.flush(this),this)}execute(t,n){return n>0||this.closed?super.execute(t,n):this._execute(t,n)}requestAsyncId(t,n,r=0){return r!=null&&r>0||r==null&&this.delay>0?super.requestAsyncId(t,n,r):(t.flush(this),0)}};var Ts=class extends Ds{};var kl=new Ts(ws);var Ge=new z(e=>e.complete());function Hh(e){return e&&j(e.schedule)}function Uh(e){return e[e.length-1]}function jh(e){return j(Uh(e))?e.pop():void 0}function Sn(e){return Hh(Uh(e))?e.pop():void 0}var Nl=function(e,t){return Nl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},Nl(e,t)};function ke(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Nl(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var v=function(){return v=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},v.apply(this,arguments)};function Qe(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function tt(e,t,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function c(d){try{u(r.next(d))}catch(h){s(h)}}function l(d){try{u(r.throw(d))}catch(h){s(h)}}function u(d){d.done?i(d.value):o(d.value).then(c,l)}u((r=r.apply(e,t||[])).next())})}function Tt(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=c(0),s.throw=c(1),s.return=c(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function c(u){return function(d){return l([u,d])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,u[0]&&(n=0)),n;)try{if(r=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(d){u=[6,d],o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Bh(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function De(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function Kn(e){return this instanceof Kn?(this.v=e,this):new Kn(e)}function Vh(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),c("next"),c("throw"),c("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(f){return function(g){return Promise.resolve(g).then(f,h)}}function c(f,g){r[f]&&(o[f]=function(y){return new Promise(function(b,S){i.push([f,y,b,S])>1||l(f,y)})},g&&(o[f]=g(o[f])))}function l(f,g){try{u(r[f](g))}catch(y){p(i[0][3],y)}}function u(f){f.value instanceof Kn?Promise.resolve(f.value.v).then(d,h):p(i[0][2],f)}function d(f){l("next",f)}function h(f){l("throw",f)}function p(f,g){f(g),i.shift(),i.length&&l(i[0][0],i[0][1])}}function $h(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof Bh=="function"?Bh(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(c,l){s=e[i](s),o(c,l,s.done,s.value)})}}function o(i,s,c,l){Promise.resolve(l).then(function(u){i({value:u,done:c})},s)}}var Es=e=>e&&typeof e.length=="number"&&typeof e!="function";function Cs(e){return j(e?.then)}function Is(e){return j(e[Yt])}function Ps(e){return Symbol.asyncIterator&&j(e?.[Symbol.asyncIterator])}function Rs(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function ED(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ms=ED();function _s(e){return j(e?.[Ms])}function xs(e){return Vh(this,arguments,function*(){let n=e.getReader();try{for(;;){let{value:r,done:o}=yield Kn(n.read());if(o)return yield Kn(void 0);yield yield Kn(r)}}finally{n.releaseLock()}})}function ks(e){return j(e?.getReader)}function Ne(e){if(e instanceof z)return e;if(e!=null){if(Is(e))return CD(e);if(Es(e))return ID(e);if(Cs(e))return PD(e);if(Ps(e))return zh(e);if(_s(e))return RD(e);if(ks(e))return MD(e)}throw Rs(e)}function CD(e){return new z(t=>{let n=e[Yt]();if(j(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ID(e){return new z(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function PD(e){return new z(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,gs)})}function RD(e){return new z(t=>{for(let n of e)if(t.next(n),t.closed)return;t.complete()})}function zh(e){return new z(t=>{_D(e,t).catch(n=>t.error(n))})}function MD(e){return zh(xs(e))}function _D(e,t){var n,r,o,i;return tt(this,void 0,void 0,function*(){try{for(n=$h(e);r=yield n.next(),!r.done;){let s=r.value;if(t.next(s),t.closed)return}}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})}function Ye(e,t,n,r=0,o=!1){let i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function Zn(e,t=0){return Y((n,r)=>{n.subscribe(K(r,o=>Ye(r,e,()=>r.next(o),t),()=>Ye(r,e,()=>r.complete(),t),o=>Ye(r,e,()=>r.error(o),t)))})}function Ns(e,t=0){return Y((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function qh(e,t){return Ne(e).pipe(Ns(t),Zn(t))}function Wh(e,t){return Ne(e).pipe(Ns(t),Zn(t))}function Gh(e,t){return new z(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function Qh(e,t){return new z(n=>{let r;return Ye(n,t,()=>{r=e[Ms](),Ye(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){n.error(s);return}i?n.complete():n.next(o)},0,!0)}),()=>j(r?.return)&&r.return()})}function Os(e,t){if(!e)throw new Error("Iterable cannot be null");return new z(n=>{Ye(n,t,()=>{let r=e[Symbol.asyncIterator]();Ye(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function Yh(e,t){return Os(xs(e),t)}function Kh(e,t){if(e!=null){if(Is(e))return qh(e,t);if(Es(e))return Gh(e,t);if(Cs(e))return Wh(e,t);if(Ps(e))return Os(e,t);if(_s(e))return Qh(e,t);if(ks(e))return Yh(e,t)}throw Rs(e)}function fe(e,t){return t?Kh(e,t):Ne(e)}function L(...e){let t=Sn(e);return fe(e,t)}function kr(e,t){let n=j(e)?e:()=>e,r=o=>o.error(n());return new z(t?o=>t.schedule(r,0,o):r)}function Ol(e){return!!e&&(e instanceof z||j(e.lift)&&j(e.subscribe))}var Kt=Cr(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"});function F(e,t){return Y((n,r)=>{let o=0;n.subscribe(K(r,i=>{r.next(e.call(t,i,o++))}))})}var{isArray:xD}=Array;function kD(e,t){return xD(t)?e(...t):e(t)}function Zh(e){return F(t=>kD(e,t))}var{isArray:ND}=Array,{getPrototypeOf:OD,prototype:AD,keys:FD}=Object;function Jh(e){if(e.length===1){let t=e[0];if(ND(t))return{args:t,keys:null};if(LD(t)){let n=FD(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}function LD(e){return e&&typeof e=="object"&&OD(e)===AD}function Xh(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function As(...e){let t=Sn(e),n=jh(e),{args:r,keys:o}=Jh(e);if(r.length===0)return fe([],t);let i=new z(HD(r,t,o?s=>Xh(o,s):et));return n?i.pipe(Zh(n)):i}function HD(e,t,n=et){return r=>{ep(t,()=>{let{length:o}=e,i=new Array(o),s=o,c=o;for(let l=0;l<o;l++)ep(t,()=>{let u=fe(e[l],t),d=!1;u.subscribe(K(r,h=>{i[l]=h,d||(d=!0,c--),c||r.next(n(i.slice()))},()=>{--s||r.complete()}))},r)},r)}}function ep(e,t,n){e?Ye(n,e,t):t()}function tp(e,t,n,r,o,i,s,c){let l=[],u=0,d=0,h=!1,p=()=>{h&&!l.length&&!u&&t.complete()},f=y=>u<r?g(y):l.push(y),g=y=>{i&&t.next(y),u++;let b=!1;Ne(n(y,d++)).subscribe(K(t,S=>{o?.(S),i?f(S):t.next(S)},()=>{b=!0},void 0,()=>{if(b)try{for(u--;l.length&&u<r;){let S=l.shift();s?Ye(t,s,()=>g(S)):g(S)}p()}catch(S){t.error(S)}}))};return e.subscribe(K(t,f,()=>{h=!0,p()})),()=>{c?.()}}function Re(e,t,n=1/0){return j(t)?Re((r,o)=>F((i,s)=>t(r,i,o,s))(Ne(e(r,o))),n):(typeof t=="number"&&(n=t),Y((r,o)=>tp(r,o,e,n)))}function np(e=1/0){return Re(et,e)}function rp(){return np(1)}function Nr(...e){return rp()(fe(e,Sn(e)))}function Fs(e){return new z(t=>{Ne(e()).subscribe(t)})}function nt(e,t){return Y((n,r)=>{let o=0;n.subscribe(K(r,i=>e.call(t,i,o++)&&r.next(i)))})}function bn(e){return Y((t,n)=>{let r=null,o=!1,i;r=t.subscribe(K(n,void 0,void 0,s=>{i=Ne(e(s,bn(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function op(e,t,n,r,o){return(i,s)=>{let c=n,l=t,u=0;i.subscribe(K(s,d=>{let h=u++;l=c?e(l,d,h):(c=!0,d),r&&s.next(l)},o&&(()=>{c&&s.next(l),s.complete()})))}}function Dn(e,t){return j(t)?Re(e,t,1):Re(e,1)}function wn(e){return Y((t,n)=>{let r=!1;t.subscribe(K(n,o=>{r=!0,n.next(o)},()=>{r||n.next(e),n.complete()}))})}function Zt(e){return e<=0?()=>Ge:Y((t,n)=>{let r=0;t.subscribe(K(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function Ls(e=UD){return Y((t,n)=>{let r=!1;t.subscribe(K(n,o=>{r=!0,n.next(o)},()=>r?n.complete():n.error(e())))})}function UD(){return new Kt}function Jn(e){return Y((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}function Jt(e,t){let n=arguments.length>=2;return r=>r.pipe(e?nt((o,i)=>e(o,i,r)):et,Zt(1),n?wn(t):Ls(()=>new Kt))}function Or(e){return e<=0?()=>Ge:Y((t,n)=>{let r=[];t.subscribe(K(n,o=>{r.push(o),e<r.length&&r.shift()},()=>{for(let o of r)n.next(o);n.complete()},void 0,()=>{r=null}))})}function Al(e,t){let n=arguments.length>=2;return r=>r.pipe(e?nt((o,i)=>e(o,i,r)):et,Or(1),n?wn(t):Ls(()=>new Kt))}function Fl(e,t){return Y(op(e,t,arguments.length>=2,!0))}function Vo(...e){let t=Sn(e);return Y((n,r)=>{(t?Nr(e,n,t):Nr(e,n)).subscribe(r)})}function rt(e,t){return Y((n,r)=>{let o=null,i=0,s=!1,c=()=>s&&!o&&r.complete();n.subscribe(K(r,l=>{o?.unsubscribe();let u=0,d=i++;Ne(e(l,d)).subscribe(o=K(r,h=>r.next(t?t(l,h,d,u++):h),()=>{o=null,c()}))},()=>{s=!0,c()}))})}function Ll(e){return Y((t,n)=>{Ne(e).subscribe(K(n,()=>n.complete(),jo)),!n.closed&&t.subscribe(n)})}function Le(e,t,n){let r=j(e)||t||n?{next:e,error:t,complete:n}:e;return r?Y((o,i)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let c=!0;o.subscribe(K(i,l=>{var u;(u=r.next)===null||u===void 0||u.call(r,l),i.next(l)},()=>{var l;c=!1,(l=r.complete)===null||l===void 0||l.call(r),i.complete()},l=>{var u;c=!1,(u=r.error)===null||u===void 0||u.call(r,l),i.error(l)},()=>{var l,u;c&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):et}var O=class extends Error{code;constructor(t,n){super(BD(t,n)),this.code=t}};function jD(e){return`NG0${Math.abs(e)}`}function BD(e,t){return`${jD(e)}${t?": "+t:""}`}var qp=Symbol("InputSignalNode#UNSET"),VD=ae(M({},bl),{transformFn:void 0,applyValueToInputSignal(e,t){Sl(e,t)}});function Wp(e,t){let n=Object.create(VD);n.value=e,n.transformFn=t?.transform;function r(){if(hl(n),n.value===qp){let o=null;throw new O(-950,o)}return n.value}return r[Er]=n,r}function ua(e){return{toString:e}.toString()}function de(e){for(let t in e)if(e[t]===de)return t;throw Error("Could not find renamed property on target object.")}function ot(e){if(typeof e=="string")return e;if(Array.isArray(e))return`[${e.map(ot).join(", ")}]`;if(e==null)return""+e;let t=e.overriddenName||e.name;if(t)return`${t}`;let n=e.toString();if(n==null)return""+n;let r=n.indexOf(`
`);return r>=0?n.slice(0,r):n}function ip(e,t){return e?t?`${e} ${t}`:e:t||""}var $D=de({__forward_ref__:de});function Gp(e){return e.__forward_ref__=Gp,e.toString=function(){return ot(this())},e}function pt(e){return Qp(e)?e():e}function Qp(e){return typeof e=="function"&&e.hasOwnProperty($D)&&e.__forward_ref__===Gp}function k(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function zr(e){return{providers:e.providers||[],imports:e.imports||[]}}function da(e){return sp(e,Kp)||sp(e,Zp)}function Yp(e){return da(e)!==null}function sp(e,t){return e.hasOwnProperty(t)?e[t]:null}function zD(e){let t=e&&(e[Kp]||e[Zp]);return t||null}function ap(e){return e&&(e.hasOwnProperty(cp)||e.hasOwnProperty(qD))?e[cp]:null}var Kp=de({\u0275prov:de}),cp=de({\u0275inj:de}),Zp=de({ngInjectableDef:de}),qD=de({ngInjectorDef:de}),N=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(t,n){this._desc=t,this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=k({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Jp(e){return e&&!!e.\u0275providers}var WD=de({\u0275cmp:de}),GD=de({\u0275dir:de}),QD=de({\u0275pipe:de}),YD=de({\u0275mod:de}),$s=de({\u0275fac:de}),Wo=de({__NG_ELEMENT_ID__:de}),lp=de({__NG_ENV_ID__:de});function KD(e){return typeof e=="string"?e:e==null?"":String(e)}function ZD(e){return typeof e=="function"?e.name||e.toString():typeof e=="object"&&e!=null&&typeof e.type=="function"?e.type.name||e.type.toString():KD(e)}function Xp(e,t){throw new O(-200,e)}function Eu(e,t){throw new O(-201,!1)}var B=function(e){return e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}(B||{}),Wl;function em(){return Wl}function ht(e){let t=Wl;return Wl=e,t}function tm(e,t,n){let r=da(e);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(n&B.Optional)return null;if(t!==void 0)return t;Eu(e,"Injector")}var JD={},Xn=JD,XD="__NG_DI_FLAG__",zs=class{injector;constructor(t){this.injector=t}retrieve(t,n){let r=n;return this.injector.get(t,r.optional?hs:Xn,r)}},qs="ngTempTokenPath",ew="ngTokenPath",tw=/\n/gm,nw="\u0275",up="__source";function rw(e,t=B.Default){if(Uo()===void 0)throw new O(-203,!1);if(Uo()===null)return tm(e,void 0,t);{let n=Uo(),r;return n instanceof zs?r=n.injector:r=n,r.get(e,t&B.Optional?null:void 0,t)}}function A(e,t=B.Default){return(em()||rw)(pt(e),t)}function P(e,t=B.Default){return A(e,fa(t))}function fa(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function Gl(e){let t=[];for(let n=0;n<e.length;n++){let r=pt(e[n]);if(Array.isArray(r)){if(r.length===0)throw new O(900,!1);let o,i=B.Default;for(let s=0;s<r.length;s++){let c=r[s],l=ow(c);typeof l=="number"?l===-1?o=c.token:i|=l:o=c}t.push(A(o,i))}else t.push(A(r))}return t}function ow(e){return e[XD]}function iw(e,t,n,r){let o=e[qs];throw t[up]&&o.unshift(t[up]),e.message=sw(`
`+e.message,o,n,r),e[ew]=o,e[qs]=null,e}function sw(e,t,n,r=null){e=e&&e.charAt(0)===`
`&&e.charAt(1)==nw?e.slice(2):e;let o=ot(t);if(Array.isArray(t))o=t.map(ot).join(" -> ");else if(typeof t=="object"){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let c=t[s];i.push(s+":"+(typeof c=="string"?JSON.stringify(c):ot(c)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(tw,`
  `)}`}function Ur(e,t){let n=e.hasOwnProperty($s);return n?e[$s]:null}function Cu(e,t){e.forEach(n=>Array.isArray(n)?Cu(n,t):t(n))}function nm(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function Ws(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}var jr={},Ht=[],Go=new N(""),rm=new N("",-1),om=new N(""),Gs=class{get(t,n=Xn){if(n===Xn){let r=new Error(`NullInjectorError: No provider for ${ot(t)}!`);throw r.name="NullInjectorError",r}return n}};function im(e,t){let n=e[YD]||null;if(!n&&t===!0)throw new Error(`Type ${ot(e)} does not have '\u0275mod' property.`);return n}function Br(e){return e[WD]||null}function aw(e){return e[GD]||null}function cw(e){return e[QD]||null}function ha(e){return{\u0275providers:e}}function lw(...e){return{\u0275providers:sm(!0,e),\u0275fromNgModule:!0}}function sm(e,...t){let n=[],r=new Set,o,i=s=>{n.push(s)};return Cu(t,s=>{let c=s;Ql(c,i,[],r)&&(o||=[],o.push(c))}),o!==void 0&&am(o,i),n}function am(e,t){for(let n=0;n<e.length;n++){let{ngModule:r,providers:o}=e[n];Iu(o,i=>{t(i,r)})}}function Ql(e,t,n,r){if(e=pt(e),!e)return!1;let o=null,i=ap(e),s=!i&&Br(e);if(!i&&!s){let l=e.ngModule;if(i=ap(l),i)o=l;else return!1}else{if(s&&!s.standalone)return!1;o=e}let c=r.has(o);if(s){if(c)return!1;if(r.add(o),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let u of l)Ql(u,t,n,r)}}else if(i){if(i.imports!=null&&!c){r.add(o);let u;try{Cu(i.imports,d=>{Ql(d,t,n,r)&&(u||=[],u.push(d))})}finally{}u!==void 0&&am(u,t)}if(!c){let u=Ur(o)||(()=>new o);t({provide:o,useFactory:u,deps:Ht},o),t({provide:om,useValue:o,multi:!0},o),t({provide:Go,useValue:()=>A(o),multi:!0},o)}let l=i.providers;if(l!=null&&!c){let u=e;Iu(l,d=>{t(d,u)})}}else return!1;return o!==e&&e.providers!==void 0}function Iu(e,t){for(let n of e)Jp(n)&&(n=n.\u0275providers),Array.isArray(n)?Iu(n,t):t(n)}var uw=de({provide:String,useValue:de});function cm(e){return e!==null&&typeof e=="object"&&uw in e}function dw(e){return!!(e&&e.useExisting)}function fw(e){return!!(e&&e.useFactory)}function Yl(e){return typeof e=="function"}var pa=new N(""),Hs={},dp={},Hl;function Pu(){return Hl===void 0&&(Hl=new Gs),Hl}var Ze=class{},Qo=class extends Ze{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,Zl(t,s=>this.processProvider(s)),this.records.set(rm,Ar(void 0,this)),o.has("environment")&&this.records.set(Ze,Ar(void 0,this));let i=this.records.get(pa);i!=null&&typeof i.value=="string"&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(om,Ht,B.Self))}retrieve(t,n){let r=n;return this.get(t,r.optional?hs:Xn,r)}destroy(){zo(this),this._destroyed=!0;let t=ee(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of n)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ee(t)}}onDestroy(t){return zo(this),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){zo(this);let n=Qt(this),r=ht(void 0),o;try{return t()}finally{Qt(n),ht(r)}}get(t,n=Xn,r=B.Default){if(zo(this),t.hasOwnProperty(lp))return t[lp](this);r=fa(r);let o,i=Qt(this),s=ht(void 0);try{if(!(r&B.SkipSelf)){let l=this.records.get(t);if(l===void 0){let u=vw(t)&&da(t);u&&this.injectableDefInScope(u)?l=Ar(Kl(t),Hs):l=null,this.records.set(t,l)}if(l!=null)return this.hydrate(t,l,r)}let c=r&B.Self?Pu():this.parent;return n=r&B.Optional&&n===Xn?null:n,c.get(t,n)}catch(c){if(c.name==="NullInjectorError"){if((c[qs]=c[qs]||[]).unshift(ot(t)),i)throw c;return iw(c,t,"R3InjectorError",this.source)}else throw c}finally{ht(s),Qt(i)}}resolveInjectorInitializers(){let t=ee(null),n=Qt(this),r=ht(void 0),o;try{let i=this.get(Go,Ht,B.Self);for(let s of i)s()}finally{Qt(n),ht(r),ee(t)}}toString(){let t=[],n=this.records;for(let r of n.keys())t.push(ot(r));return`R3Injector[${t.join(", ")}]`}processProvider(t){t=pt(t);let n=Yl(t)?t:pt(t&&t.provide),r=pw(t);if(!Yl(t)&&t.multi===!0){let o=this.records.get(n);o||(o=Ar(void 0,Hs,!0),o.factory=()=>Gl(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n,r){let o=ee(null);try{return n.value===dp?Xp(ot(t)):n.value===Hs&&(n.value=dp,n.value=n.factory(void 0,r)),typeof n.value=="object"&&n.value&&yw(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{ee(o)}}injectableDefInScope(t){if(!t.providedIn)return!1;let n=pt(t.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(t){let n=this._onDestroyHooks.indexOf(t);n!==-1&&this._onDestroyHooks.splice(n,1)}};function Kl(e){let t=da(e),n=t!==null?t.factory:Ur(e);if(n!==null)return n;if(e instanceof N)throw new O(204,!1);if(e instanceof Function)return hw(e);throw new O(204,!1)}function hw(e){if(e.length>0)throw new O(204,!1);let n=zD(e);return n!==null?()=>n.factory(e):()=>new e}function pw(e){if(cm(e))return Ar(void 0,e.useValue);{let t=mw(e);return Ar(t,Hs)}}function mw(e,t,n){let r;if(Yl(e)){let o=pt(e);return Ur(o)||Kl(o)}else if(cm(e))r=()=>pt(e.useValue);else if(fw(e))r=()=>e.useFactory(...Gl(e.deps||[]));else if(dw(e))r=(o,i)=>A(pt(e.useExisting),i!==void 0&&i&B.Optional?B.Optional:void 0);else{let o=pt(e&&(e.useClass||e.provide));if(gw(e))r=()=>new o(...Gl(e.deps));else return Ur(o)||Kl(o)}return r}function zo(e){if(e.destroyed)throw new O(205,!1)}function Ar(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function gw(e){return!!e.deps}function yw(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function vw(e){return typeof e=="function"||typeof e=="object"&&e instanceof N}function Zl(e,t){for(let n of e)Array.isArray(n)?Zl(n,t):n&&Jp(n)?Zl(n.\u0275providers,t):t(n)}function it(e,t){let n;e instanceof Qo?(zo(e),n=e):n=new zs(e);let r,o=Qt(n),i=ht(void 0);try{return t()}finally{Qt(o),ht(i)}}function Sw(){return em()!==void 0||Uo()!=null}function bw(e){return typeof e=="function"}var tn=0,J=1,q=2,$e=3,Ct=4,Rt=5,Qs=6,Ys=7,yt=8,Vr=9,En=10,It=11,Yo=12,fp=13,ti=14,jt=15,Ko=16,Fr=17,ma=18,ga=19,lm=20,Tn=21,Ul=22,Ks=23,mt=24,jl=25,Cn=26,um=1;var nr=7,Zs=8,Js=9,gt=10;function er(e){return Array.isArray(e)&&typeof e[um]=="object"}function nn(e){return Array.isArray(e)&&e[um]===!0}function dm(e){return(e.flags&4)!==0}function ni(e){return e.componentOffset>-1}function fm(e){return(e.flags&1)===1}function sr(e){return!!e.template}function Xs(e){return(e[q]&512)!==0}function qr(e){return(e[q]&256)===256}var Jl=class{previousValue;currentValue;firstChange;constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}};function hm(e,t,n,r){t!==null?t.applyValueToInputSignal(t,r):e[n]=r}var Ru=(()=>{let e=()=>pm;return e.ngInherit=!0,e})();function pm(e){return e.type.prototype.ngOnChanges&&(e.setInput=ww),Dw}function Dw(){let e=gm(this),t=e?.current;if(t){let n=e.previous;if(n===jr)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function ww(e,t,n,r,o){let i=this.declaredInputs[r],s=gm(e)||Tw(e,{previous:jr,current:null}),c=s.current||(s.current={}),l=s.previous,u=l[i];c[i]=new Jl(u&&u.currentValue,n,l===jr),hm(e,t,o,n)}var mm="__ngSimpleChanges__";function gm(e){return e[mm]||null}function Tw(e,t){return e[mm]=t}var hp=null;var he=function(e,t=null,n){hp?.(e,t,n)},Ew="svg",Cw="math";function Xt(e){for(;Array.isArray(e);)e=e[tn];return e}function Rn(e,t){return Xt(t[e.index])}function Iw(e,t){return e.data[t]}function In(e,t){let n=t[e];return er(n)?n:n[tn]}function Mu(e){return(e[q]&128)===128}function Pw(e){return nn(e[$e])}function pp(e,t){return t==null?null:e[t]}function ym(e){e[Fr]=0}function vm(e){e[q]&1024||(e[q]|=1024,Mu(e)&&va(e))}function ya(e){return!!(e[q]&9216||e[mt]?.dirty)}function Xl(e){e[En].changeDetectionScheduler?.notify(8),e[q]&64&&(e[q]|=1024),ya(e)&&va(e)}function va(e){e[En].changeDetectionScheduler?.notify(0);let t=rr(e);for(;t!==null&&!(t[q]&8192||(t[q]|=8192,!Mu(t)));)t=rr(t)}function Sm(e,t){if(qr(e))throw new O(911,!1);e[Tn]===null&&(e[Tn]=[]),e[Tn].push(t)}function Rw(e,t){if(e[Tn]===null)return;let n=e[Tn].indexOf(t);n!==-1&&e[Tn].splice(n,1)}function rr(e){let t=e[$e];return nn(t)?t[$e]:t}function bm(e){return e[Ys]??=[]}function Dm(e){return e.cleanup??=[]}var ce={lFrame:Rm(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var eu=!1;function Mw(){return ce.lFrame.elementDepthCount}function _w(){ce.lFrame.elementDepthCount++}function xw(){ce.lFrame.elementDepthCount--}function kw(){return ce.bindingsEnabled}function Nw(){return ce.skipHydrationRootTNode!==null}function Ow(e){return ce.skipHydrationRootTNode===e}function Aw(){ce.skipHydrationRootTNode=null}function Pt(){return ce.lFrame.lView}function Sa(){return ce.lFrame.tView}function Mn(){let e=wm();for(;e!==null&&e.type===64;)e=e.parent;return e}function wm(){return ce.lFrame.currentTNode}function Fw(){let e=ce.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function ba(e,t){let n=ce.lFrame;n.currentTNode=e,n.isParent=t}function Tm(){return ce.lFrame.isParent}function Lw(){ce.lFrame.isParent=!1}function Em(){return eu}function mp(e){let t=eu;return eu=e,t}function Hw(e){return ce.lFrame.bindingIndex=e}function Uw(){return ce.lFrame.inI18n}function jw(e,t){let n=ce.lFrame;n.bindingIndex=n.bindingRootIndex=e,tu(t)}function Bw(){return ce.lFrame.currentDirectiveIndex}function tu(e){ce.lFrame.currentDirectiveIndex=e}function Cm(e){ce.lFrame.currentQueryIndex=e}function Vw(e){let t=e[J];return t.type===2?t.declTNode:t.type===1?e[Rt]:null}function Im(e,t,n){if(n&B.SkipSelf){let o=t,i=e;for(;o=o.parent,o===null&&!(n&B.Host);)if(o=Vw(i),o===null||(i=i[ti],o.type&10))break;if(o===null)return!1;t=o,e=i}let r=ce.lFrame=Pm();return r.currentTNode=t,r.lView=e,!0}function _u(e){let t=Pm(),n=e[J];ce.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function Pm(){let e=ce.lFrame,t=e===null?null:e.child;return t===null?Rm(e):t}function Rm(e){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=t),t}function Mm(){let e=ce.lFrame;return ce.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var _m=Mm;function xu(){let e=Mm();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function $w(){return ce.lFrame.selectedIndex}function or(e){ce.lFrame.selectedIndex=e}function zw(){return ce.lFrame.currentNamespace}var xm=!0;function km(){return xm}function Nm(e){xm=e}function qw(e,t,n){let{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){let s=pm(t);(n.preOrderHooks??=[]).push(e,s),(n.preOrderCheckHooks??=[]).push(e,s)}o&&(n.preOrderHooks??=[]).push(0-e,o),i&&((n.preOrderHooks??=[]).push(e,i),(n.preOrderCheckHooks??=[]).push(e,i))}function Ww(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){let i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:c,ngAfterViewInit:l,ngAfterViewChecked:u,ngOnDestroy:d}=i;s&&(e.contentHooks??=[]).push(-n,s),c&&((e.contentHooks??=[]).push(n,c),(e.contentCheckHooks??=[]).push(n,c)),l&&(e.viewHooks??=[]).push(-n,l),u&&((e.viewHooks??=[]).push(n,u),(e.viewCheckHooks??=[]).push(n,u)),d!=null&&(e.destroyHooks??=[]).push(n,d)}}function Us(e,t,n){Om(e,t,3,n)}function js(e,t,n,r){(e[q]&3)===n&&Om(e,t,n,r)}function Bl(e,t){let n=e[q];(n&3)===t&&(n&=16383,n+=1,e[q]=n)}function Om(e,t,n,r){let o=r!==void 0?e[Fr]&65535:0,i=r??-1,s=t.length-1,c=0;for(let l=o;l<s;l++)if(typeof t[l+1]=="number"){if(c=t[l],r!=null&&c>=r)break}else t[l]<0&&(e[Fr]+=65536),(c<i||i==-1)&&(Gw(e,n,t,l),e[Fr]=(e[Fr]&4294901760)+l+2),l++}function gp(e,t){he(4,e,t);let n=ee(null);try{t.call(e)}finally{ee(n),he(5,e,t)}}function Gw(e,t,n,r){let o=n[r]<0,i=n[r+1],s=o?-n[r]:n[r],c=e[s];o?e[q]>>14<e[Fr]>>16&&(e[q]&3)===t&&(e[q]+=16384,gp(c,i)):gp(c,i)}var Hr=-1,Zo=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(t,n,r){this.factory=t,this.canSeeViewProviders=n,this.injectImpl=r}};function Qw(e){return(e.flags&8)!==0}function Yw(e){return(e.flags&16)!==0}function Kw(e,t,n){let r=0;for(;r<n.length;){let o=n[r];if(typeof o=="number"){if(o!==0)break;r++;let i=n[r++],s=n[r++],c=n[r++];e.setAttribute(t,s,c,i)}else{let i=o,s=n[++r];Jw(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function Zw(e){return e===3||e===4||e===6}function Jw(e){return e.charCodeAt(0)===64}function Am(e,t){if(!(t===null||t.length===0))if(e===null||e.length===0)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){let o=t[r];typeof o=="number"?n=o:n===0||(n===-1||n===2?yp(e,n,o,null,t[++r]):yp(e,n,o,null,null))}}return e}function yp(e,t,n,r,o){let i=0,s=e.length;if(t===-1)s=-1;else for(;i<e.length;){let c=e[i++];if(typeof c=="number"){if(c===t){s=-1;break}else if(c>t){s=i-1;break}}}for(;i<e.length;){let c=e[i];if(typeof c=="number")break;if(c===n){o!==null&&(e[i+1]=o);return}i++,o!==null&&i++}s!==-1&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),o!==null&&e.splice(i++,0,o)}function Fm(e){return e!==Hr}function ea(e){return e&32767}function Xw(e){return e>>16}function ta(e,t){let n=Xw(e),r=t;for(;n>0;)r=r[ti],n--;return r}var nu=!0;function vp(e){let t=nu;return nu=e,t}var eT=256,Lm=eT-1,Hm=5,tT=0,Ut={};function nT(e,t,n){let r;typeof n=="string"?r=n.charCodeAt(0)||0:n.hasOwnProperty(Wo)&&(r=n[Wo]),r==null&&(r=n[Wo]=tT++);let o=r&Lm,i=1<<o;t.data[e+(o>>Hm)]|=i}function Um(e,t){let n=jm(e,t);if(n!==-1)return n;let r=t[J];r.firstCreatePass&&(e.injectorIndex=t.length,Vl(r.data,e),Vl(t,null),Vl(r.blueprint,null));let o=ku(e,t),i=e.injectorIndex;if(Fm(o)){let s=ea(o),c=ta(o,t),l=c[J].data;for(let u=0;u<8;u++)t[i+u]=c[s+u]|l[s+u]}return t[i+8]=o,i}function Vl(e,t){e.push(0,0,0,0,0,0,0,0,t)}function jm(e,t){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||t[e.injectorIndex+8]===null?-1:e.injectorIndex}function ku(e,t){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;o!==null;){if(r=qm(o),r===null)return Hr;if(n++,o=o[ti],r.injectorIndex!==-1)return r.injectorIndex|n<<16}return Hr}function rT(e,t,n){nT(e,t,n)}function Bm(e,t,n){if(n&B.Optional||e!==void 0)return e;Eu(t,"NodeInjector")}function Vm(e,t,n,r){if(n&B.Optional&&r===void 0&&(r=null),(n&(B.Self|B.Host))===0){let o=e[Vr],i=ht(void 0);try{return o?o.get(t,r,n&B.Optional):tm(t,r,n&B.Optional)}finally{ht(i)}}return Bm(r,t,n)}function $m(e,t,n,r=B.Default,o){if(e!==null){if(t[q]&2048&&!(r&B.Self)){let s=cT(e,t,n,r,Ut);if(s!==Ut)return s}let i=zm(e,t,n,r,Ut);if(i!==Ut)return i}return Vm(t,n,r,o)}function zm(e,t,n,r,o){let i=sT(n);if(typeof i=="function"){if(!Im(t,e,r))return r&B.Host?Bm(o,n,r):Vm(t,n,r,o);try{let s;if(s=i(r),s==null&&!(r&B.Optional))Eu(n);else return s}finally{_m()}}else if(typeof i=="number"){let s=null,c=jm(e,t),l=Hr,u=r&B.Host?t[jt][Rt]:null;for((c===-1||r&B.SkipSelf)&&(l=c===-1?ku(e,t):t[c+8],l===Hr||!bp(r,!1)?c=-1:(s=t[J],c=ea(l),t=ta(l,t)));c!==-1;){let d=t[J];if(Sp(i,c,d.data)){let h=oT(c,t,n,s,r,u);if(h!==Ut)return h}l=t[c+8],l!==Hr&&bp(r,t[J].data[c+8]===u)&&Sp(i,c,t)?(s=d,c=ea(l),t=ta(l,t)):c=-1}}return o}function oT(e,t,n,r,o,i){let s=t[J],c=s.data[e+8],l=r==null?ni(c)&&nu:r!=s&&(c.type&3)!==0,u=o&B.Host&&i===c,d=iT(c,s,n,l,u);return d!==null?ru(t,s,d,c,o):Ut}function iT(e,t,n,r,o){let i=e.providerIndexes,s=t.data,c=i&1048575,l=e.directiveStart,u=e.directiveEnd,d=i>>20,h=r?c:c+d,p=o?c+d:u;for(let f=h;f<p;f++){let g=s[f];if(f<l&&n===g||f>=l&&g.type===n)return f}if(o){let f=s[l];if(f&&sr(f)&&f.type===n)return l}return null}function ru(e,t,n,r,o){let i=e[n],s=t.data;if(i instanceof Zo){let c=i;c.resolving&&Xp(ZD(s[n]));let l=vp(c.canSeeViewProviders);c.resolving=!0;let u,d=c.injectImpl?ht(c.injectImpl):null,h=Im(e,r,B.Default);try{i=e[n]=c.factory(void 0,o,s,e,r),t.firstCreatePass&&n>=r.directiveStart&&qw(n,s[n],t)}finally{d!==null&&ht(d),vp(l),c.resolving=!1,_m()}}return i}function sT(e){if(typeof e=="string")return e.charCodeAt(0)||0;let t=e.hasOwnProperty(Wo)?e[Wo]:void 0;return typeof t=="number"?t>=0?t&Lm:aT:t}function Sp(e,t,n){let r=1<<e;return!!(n[t+(e>>Hm)]&r)}function bp(e,t){return!(e&B.Self)&&!(e&B.Host&&t)}var tr=class{_tNode;_lView;constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return $m(this._tNode,this._lView,t,fa(r),n)}};function aT(){return new tr(Mn(),Pt())}function Nu(e){return ua(()=>{let t=e.prototype.constructor,n=t[$s]||ou(t),r=Object.prototype,o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){let i=o[$s]||ou(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function ou(e){return Qp(e)?()=>{let t=ou(pt(e));return t&&t()}:Ur(e)}function cT(e,t,n,r,o){let i=e,s=t;for(;i!==null&&s!==null&&s[q]&2048&&!Xs(s);){let c=zm(i,s,n,r|B.Self,Ut);if(c!==Ut)return c;let l=i.parent;if(!l){let u=s[lm];if(u){let d=u.get(n,Ut,r);if(d!==Ut)return d}l=qm(s),s=s[ti]}i=l}return o}function qm(e){let t=e[J],n=t.type;return n===2?t.declTNode:n===1?e[Rt]:null}function Dp(e,t=null,n=null,r){let o=Wm(e,t,n,r);return o.resolveInjectorInitializers(),o}function Wm(e,t=null,n=null,r,o=new Set){let i=[n||Ht,lw(e)];return r=r||(typeof e=="object"?void 0:ot(e)),new Qo(i,t||Pu(),r||null,o)}var Pn=class e{static THROW_IF_NOT_FOUND=Xn;static NULL=new Gs;static create(t,n){if(Array.isArray(t))return Dp({name:""},n,t,"");{let r=t.name??"";return Dp({name:r},t.parent,t.providers,r)}}static \u0275prov=k({token:e,providedIn:"any",factory:()=>A(rm)});static __NG_ELEMENT_ID__=-1};var lT=new N("");lT.__NG_ELEMENT_ID__=e=>{let t=Mn();if(t===null)throw new O(204,!1);if(t.type&2)return t.value;if(e&B.Optional)return null;throw new O(204,!1)};var Gm=!1,ri=(()=>{class e{static __NG_ELEMENT_ID__=uT;static __NG_ENV_ID__=n=>n}return e})(),iu=class extends ri{_lView;constructor(t){super(),this._lView=t}onDestroy(t){let n=this._lView;return qr(n)?(t(),()=>{}):(Sm(n,t),()=>Rw(n,t))}};function uT(){return new iu(Pt())}var Jo=class{},Qm=new N("",{providedIn:"root",factory:()=>!1});var Ym=new N(""),Km=new N(""),_n=(()=>{class e{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new Se(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),n}has(n){return this.pendingTasks.has(n)}remove(n){this.pendingTasks.delete(n),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=k({token:e,providedIn:"root",factory:()=>new e})}return e})();var su=class extends Fe{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(t=!1){super(),this.__isAsync=t,Sw()&&(this.destroyRef=P(ri,{optional:!0})??void 0,this.pendingTasks=P(_n,{optional:!0})??void 0)}emit(t){let n=ee(null);try{super.next(t)}finally{ee(n)}}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&typeof t=="object"){let l=t;o=l.next?.bind(l),i=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(i=this.wrapInTimeout(i),o&&(o=this.wrapInTimeout(o)),s&&(s=this.wrapInTimeout(s)));let c=super.subscribe({next:o,error:i,complete:s});return t instanceof be&&t.add(c),c}wrapInTimeout(t){return n=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{t(n)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},Ke=su;function na(...e){}function Zm(e){let t,n;function r(){e=na;try{n!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(n),t!==void 0&&clearTimeout(t)}catch{}}return t=setTimeout(()=>{e(),r()}),typeof requestAnimationFrame=="function"&&(n=requestAnimationFrame(()=>{e(),r()})),()=>r()}function wp(e){return queueMicrotask(()=>e()),()=>{e=na}}var Ou="isAngularZone",ra=Ou+"_ID",dT=0,Ce=class e{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Ke(!1);onMicrotaskEmpty=new Ke(!1);onStable=new Ke(!1);onError=new Ke(!1);constructor(t){let{enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:o=!1,scheduleInRootZone:i=Gm}=t;if(typeof Zone>"u")throw new O(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!o&&r,s.shouldCoalesceRunChangeDetection=o,s.callbackScheduled=!1,s.scheduleInRootZone=i,pT(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Ou)===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new O(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new O(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){let i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,fT,na,na);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}},fT={};function Au(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function hT(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function t(){Zm(()=>{e.callbackScheduled=!1,au(e),e.isCheckStableRunning=!0,Au(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{t()}):e._outer.run(()=>{t()}),au(e)}function pT(e){let t=()=>{hT(e)},n=dT++;e._inner=e._inner.fork({name:"angular",properties:{[Ou]:!0,[ra]:n,[ra+n]:!0},onInvokeTask:(r,o,i,s,c,l)=>{if(mT(l))return r.invokeTask(i,s,c,l);try{return Tp(e),r.invokeTask(i,s,c,l)}finally{(e.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&t(),Ep(e)}},onInvoke:(r,o,i,s,c,l,u)=>{try{return Tp(e),r.invoke(i,s,c,l,u)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!gT(l)&&t(),Ep(e)}},onHasTask:(r,o,i,s)=>{r.hasTask(i,s),o===i&&(s.change=="microTask"?(e._hasPendingMicrotasks=s.microTask,au(e),Au(e)):s.change=="macroTask"&&(e.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,o,i,s)=>(r.handleError(i,s),e.runOutsideAngular(()=>e.onError.emit(s)),!1)})}function au(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function Tp(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Ep(e){e._nesting--,Au(e)}var cu=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Ke;onMicrotaskEmpty=new Ke;onStable=new Ke;onError=new Ke;run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}};function mT(e){return Jm(e,"__ignore_ng_zone__")}function gT(e){return Jm(e,"__scheduler_tick__")}function Jm(e,t){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[t]===!0}var en=class{_console=console;handleError(t){this._console.error("ERROR",t)}},yT=new N("",{providedIn:"root",factory:()=>{let e=P(Ce),t=P(en);return n=>e.runOutsideAngular(()=>t.handleError(n))}});function Cp(e,t){return Wp(e,t)}function vT(e){return Wp(qp,e)}var Xm=(Cp.required=vT,Cp);function ST(){return Fu(Mn(),Pt())}function Fu(e,t){return new eg(Rn(e,t))}var eg=(()=>{class e{nativeElement;constructor(n){this.nativeElement=n}static __NG_ELEMENT_ID__=ST}return e})();function tg(e){return(e.flags&128)===128}var ng=function(e){return e[e.OnPush=0]="OnPush",e[e.Default=1]="Default",e}(ng||{}),rg=new Map,bT=0;function DT(){return bT++}function wT(e){rg.set(e[ga],e)}function lu(e){rg.delete(e[ga])}var Ip="__ngContext__";function Da(e,t){er(t)?(e[Ip]=t[ga],wT(t)):e[Ip]=t}function og(e){return sg(e[Yo])}function ig(e){return sg(e[Ct])}function sg(e){for(;e!==null&&!nn(e);)e=e[Ct];return e}var uu;function ag(e){uu=e}function TT(){if(uu!==void 0)return uu;if(typeof document<"u")return document;throw new O(210,!1)}var Lu=new N("",{providedIn:"root",factory:()=>ET}),ET="ng",Hu=new N(""),oi=new N("",{providedIn:"platform",factory:()=>"unknown"});var Uu=new N("",{providedIn:"root",factory:()=>TT().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var CT="h",IT="b";var cg=!1,PT=new N("",{providedIn:"root",factory:()=>cg});var lg=function(e){return e[e.CHANGE_DETECTION=0]="CHANGE_DETECTION",e[e.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",e}(lg||{}),wa=new N(""),Pp=new Set;function ug(e){Pp.has(e)||(Pp.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}var RT=(()=>{class e{impl=null;execute(){this.impl?.execute()}static \u0275prov=k({token:e,providedIn:"root",factory:()=>new e})}return e})();var MT=(e,t,n,r)=>{};function _T(e,t,n,r){MT(e,t,n,r)}var xT=()=>null;function dg(e,t,n=!1){return xT(e,t,n)}function fg(e,t){let n=e.contentQueries;if(n!==null){let r=ee(null);try{for(let o=0;o<n.length;o+=2){let i=n[o],s=n[o+1];if(s!==-1){let c=e.data[s];Cm(i),c.contentQueries(2,t[s],s)}}}finally{ee(r)}}}function du(e,t,n){Cm(0);let r=ee(null);try{t(e,n)}finally{ee(r)}}function hg(e,t,n){if(dm(t)){let r=ee(null);try{let o=t.directiveStart,i=t.directiveEnd;for(let s=o;s<i;s++){let c=e.data[s];if(c.contentQueries){let l=n[s];c.contentQueries(1,l,s)}}}finally{ee(r)}}}var Bt=function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e}(Bt||{});function pg(e){return e instanceof Function?e():e}function kT(e,t,n){let r=e.length;for(;;){let o=e.indexOf(t,n);if(o===-1)return o;if(o===0||e.charCodeAt(o-1)<=32){let i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}var mg="ng-template";function NT(e,t,n,r){let o=0;if(r){for(;o<t.length&&typeof t[o]=="string";o+=2)if(t[o]==="class"&&kT(t[o+1].toLowerCase(),n,0)!==-1)return!0}else if(ju(e))return!1;if(o=t.indexOf(1,o),o>-1){let i;for(;++o<t.length&&typeof(i=t[o])=="string";)if(i.toLowerCase()===n)return!0}return!1}function ju(e){return e.type===4&&e.value!==mg}function OT(e,t,n){let r=e.type===4&&!n?mg:e.value;return t===r}function AT(e,t,n){let r=4,o=e.attrs,i=o!==null?HT(o):0,s=!1;for(let c=0;c<t.length;c++){let l=t[c];if(typeof l=="number"){if(!s&&!Et(r)&&!Et(l))return!1;if(s&&Et(l))continue;s=!1,r=l|r&1;continue}if(!s)if(r&4){if(r=2|r&1,l!==""&&!OT(e,l,n)||l===""&&t.length===1){if(Et(r))return!1;s=!0}}else if(r&8){if(o===null||!NT(e,o,l,n)){if(Et(r))return!1;s=!0}}else{let u=t[++c],d=FT(l,o,ju(e),n);if(d===-1){if(Et(r))return!1;s=!0;continue}if(u!==""){let h;if(d>i?h="":h=o[d+1].toLowerCase(),r&2&&u!==h){if(Et(r))return!1;s=!0}}}}return Et(r)||s}function Et(e){return(e&1)===0}function FT(e,t,n,r){if(t===null)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){let s=t[o];if(s===e)return o;if(s===3||s===6)i=!0;else if(s===1||s===2){let c=t[++o];for(;typeof c=="string";)c=t[++o];continue}else{if(s===4)break;if(s===0){o+=4;continue}}o+=i?1:2}return-1}else return UT(t,e)}function LT(e,t,n=!1){for(let r=0;r<t.length;r++)if(AT(e,t[r],n))return!0;return!1}function HT(e){for(let t=0;t<e.length;t++){let n=e[t];if(Zw(n))return t}return e.length}function UT(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){let r=e[n];if(typeof r=="number")return-1;if(r===t)return n;n++}return-1}function Rp(e,t){return e?":not("+t.trim()+")":t}function jT(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if(typeof s=="string")if(r&2){let c=e[++n];o+="["+s+(c.length>0?'="'+c+'"':"")+"]"}else r&8?o+="."+s:r&4&&(o+=" "+s);else o!==""&&!Et(s)&&(t+=Rp(i,o),o=""),r=s,i=i||!Et(r);n++}return o!==""&&(t+=Rp(i,o)),t}function BT(e){return e.map(jT).join(",")}function VT(e){let t=[],n=[],r=1,o=2;for(;r<e.length;){let i=e[r];if(typeof i=="string")o===2?i!==""&&t.push(i,e[++r]):o===8&&n.push(i);else{if(!Et(o))break;o=i}r++}return n.length&&t.push(1,...n),t}var gg={};function $T(e,t){return e.createText(t)}function yg(e,t,n){return e.createElement(t,n)}function oa(e,t,n,r,o){e.insertBefore(t,n,r,o)}function vg(e,t,n){e.appendChild(t,n)}function Mp(e,t,n,r,o){r!==null?oa(e,t,n,r,o):vg(e,t,n)}function zT(e,t,n){e.removeChild(null,t,n)}function qT(e,t,n){e.setAttribute(t,"style",n)}function WT(e,t,n){n===""?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}function Sg(e,t,n){let{mergedAttrs:r,classes:o,styles:i}=n;r!==null&&Kw(e,t,r),o!==null&&WT(e,t,o),i!==null&&qT(e,t,i)}function bg(e,t,n,r,o,i,s,c,l,u,d){let h=Cn+r,p=h+o,f=GT(h,p),g=typeof u=="function"?u():u;return f[J]={type:e,blueprint:f,template:n,queries:null,viewQuery:c,declTNode:t,data:f.slice().fill(null,h),bindingStartIndex:h,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i=="function"?i():i,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:g,incompleteFirstPass:!1,ssrId:d}}function GT(e,t){let n=[];for(let r=0;r<t;r++)n.push(r<e?null:gg);return n}function QT(e){let t=e.tView;return t===null||t.incompleteFirstPass?e.tView=bg(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):t}function Dg(e,t,n,r,o,i,s,c,l,u,d){let h=t.blueprint.slice();return h[tn]=o,h[q]=r|4|128|8|64|1024,(u!==null||e&&e[q]&2048)&&(h[q]|=2048),ym(h),h[$e]=h[ti]=e,h[yt]=n,h[En]=s||e&&e[En],h[It]=c||e&&e[It],h[Vr]=l||e&&e[Vr]||null,h[Rt]=i,h[ga]=DT(),h[Qs]=d,h[lm]=u,h[jt]=t.type==2?e[jt]:h,h}function YT(e,t,n){let r=Rn(t,e),o=QT(n),i=e[En].rendererFactory,s=Eg(e,Dg(e,o,null,wg(n),r,t,null,i.createRenderer(r,n),null,null,null));return e[t.index]=s}function wg(e){let t=16;return e.signals?t=4096:e.onPush&&(t=64),t}function Tg(e,t,n,r){if(n===0)return-1;let o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function Eg(e,t){return e[Yo]?e[fp][Ct]=t:e[Yo]=t,e[fp]=t,t}function KT(e,t,n,r){if(!r)if((t[q]&3)===3){let i=e.preOrderCheckHooks;i!==null&&Us(t,i,n)}else{let i=e.preOrderHooks;i!==null&&js(t,i,0,n)}or(n)}var Ta=function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e}(Ta||{});function fu(e,t,n,r){let o=ee(null);try{let[i,s,c]=e.inputs[n],l=null;(s&Ta.SignalBased)!==0&&(l=t[i][Er]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):c!==null&&(r=c.call(t,r)),e.setInput!==null?e.setInput(t,l,r,n,i):hm(t,l,i,r)}finally{ee(o)}}function Cg(e,t,n,r,o){let i=$w(),s=r&2;try{or(-1),s&&t.length>Cn&&KT(e,t,Cn,!1),he(s?2:0,o),n(r,o)}finally{or(i),he(s?3:1,o)}}function Ig(e,t,n){tE(e,t,n),(n.flags&64)===64&&nE(e,t,n)}function ZT(e,t,n=Rn){let r=t.localNames;if(r!==null){let o=t.index+1;for(let i=0;i<r.length;i+=2){let s=r[i+1],c=s===-1?n(t,e):e[s];e[o++]=c}}}function JT(e,t,n,r){let i=r.get(PT,cg)||n===Bt.ShadowDom,s=e.selectRootElement(t,i);return XT(s),s}function XT(e){eE(e)}var eE=()=>null;function tE(e,t,n){let r=n.directiveStart,o=n.directiveEnd;ni(n)&&YT(t,n,e.data[r+n.componentOffset]),e.firstCreatePass||Um(n,t);let i=n.initialInputs;for(let s=r;s<o;s++){let c=e.data[s],l=ru(t,e,s,n);if(Da(l,t),i!==null&&iE(t,s-r,l,c,n,i),sr(c)){let u=In(n.index,t);u[yt]=ru(t,e,s,n)}}}function nE(e,t,n){let r=n.directiveStart,o=n.directiveEnd,i=n.index,s=Bw();try{or(i);for(let c=r;c<o;c++){let l=e.data[c],u=t[c];tu(c),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&rE(l,u)}}finally{or(-1),tu(s)}}function rE(e,t){e.hostBindings!==null&&e.hostBindings(1,t)}function oE(e,t){let n=e.directiveRegistry,r=null;if(n)for(let o=0;o<n.length;o++){let i=n[o];LT(t,i.selectors,!1)&&(r??=[],sr(i)?r.unshift(i):r.push(i))}return r}function iE(e,t,n,r,o,i){let s=i[t];if(s!==null)for(let c=0;c<s.length;c+=2){let l=s[c],u=s[c+1];fu(r,n,l,u)}}function sE(e,t){let n=e[Vr],r=n?n.get(en,null):null;r&&r.handleError(t)}function Pg(e,t,n,r,o){let i=e.inputs?.[r],s=e.hostDirectiveInputs?.[r],c=!1;if(s)for(let l=0;l<s.length;l+=2){let u=s[l],d=s[l+1],h=t.data[u];fu(h,n[u],d,o),c=!0}if(i)for(let l of i){let u=n[l],d=t.data[l];fu(d,u,r,o),c=!0}return c}function aE(e,t){let n=In(t,e),r=n[J];cE(r,n);let o=n[tn];o!==null&&n[Qs]===null&&(n[Qs]=dg(o,n[Vr])),he(18),Rg(r,n,n[yt]),he(19,n[yt])}function cE(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}function Rg(e,t,n){_u(t);try{let r=e.viewQuery;r!==null&&du(1,r,n);let o=e.template;o!==null&&Cg(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),t[ma]?.finishViewCreation(e),e.staticContentQueries&&fg(e,t),e.staticViewQueries&&du(2,e.viewQuery,n);let i=e.components;i!==null&&lE(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[q]&=-5,xu()}}function lE(e,t){for(let n=0;n<t.length;n++)aE(e,t[n])}function _p(e,t){return!t||t.firstChild===null||tg(e)}var uE;function Bu(e,t){return uE(e,t)}var Wr=function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e}(Wr||{});function Mg(e){return(e.flags&32)===32}function Lr(e,t,n,r,o){if(r!=null){let i,s=!1;nn(r)?i=r:er(r)&&(s=!0,r=r[tn]);let c=Xt(r);e===0&&n!==null?o==null?vg(t,n,c):oa(t,n,c,o||null,!0):e===1&&n!==null?oa(t,n,c,o||null,!0):e===2?zT(t,c,s):e===3&&t.destroyNode(c),i!=null&&wE(t,e,i,n,o)}}function dE(e,t){_g(e,t),t[tn]=null,t[Rt]=null}function fE(e,t,n,r,o,i){r[tn]=o,r[Rt]=t,Ea(e,r,n,1,o,i)}function _g(e,t){t[En].changeDetectionScheduler?.notify(9),Ea(e,t,t[It],2,null,null)}function hE(e){let t=e[Yo];if(!t)return $l(e[J],e);for(;t;){let n=null;if(er(t))n=t[Yo];else{let r=t[gt];r&&(n=r)}if(!n){for(;t&&!t[Ct]&&t!==e;)er(t)&&$l(t[J],t),t=t[$e];t===null&&(t=e),er(t)&&$l(t[J],t),n=t&&t[Ct]}t=n}}function Vu(e,t){let n=e[Js],r=n.indexOf(t);n.splice(r,1)}function xg(e,t){if(qr(t))return;let n=t[It];n.destroyNode&&Ea(e,t,n,3,null,null),hE(t)}function $l(e,t){if(qr(t))return;let n=ee(null);try{t[q]&=-129,t[q]|=256,t[mt]&&yl(t[mt]),mE(e,t),pE(e,t),t[J].type===1&&t[It].destroy();let r=t[Ko];if(r!==null&&nn(t[$e])){r!==t[$e]&&Vu(r,t);let o=t[ma];o!==null&&o.detachView(e)}lu(t)}finally{ee(n)}}function pE(e,t){let n=e.cleanup,r=t[Ys];if(n!==null)for(let s=0;s<n.length-1;s+=2)if(typeof n[s]=="string"){let c=n[s+3];c>=0?r[c]():r[-c].unsubscribe(),s+=2}else{let c=r[n[s+1]];n[s].call(c)}r!==null&&(t[Ys]=null);let o=t[Tn];if(o!==null){t[Tn]=null;for(let s=0;s<o.length;s++){let c=o[s];c()}}let i=t[Ks];if(i!==null){t[Ks]=null;for(let s of i)s.destroy()}}function mE(e,t){let n;if(e!=null&&(n=e.destroyHooks)!=null)for(let r=0;r<n.length;r+=2){let o=t[n[r]];if(!(o instanceof Zo)){let i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){let c=o[i[s]],l=i[s+1];he(4,c,l);try{l.call(c)}finally{he(5,c,l)}}else{he(4,o,i);try{i.call(o)}finally{he(5,o,i)}}}}}function gE(e,t,n){return yE(e,t.parent,n)}function yE(e,t,n){let r=t;for(;r!==null&&r.type&168;)t=r,r=t.parent;if(r===null)return n[tn];if(ni(r)){let{encapsulation:o}=e.data[r.directiveStart+r.componentOffset];if(o===Bt.None||o===Bt.Emulated)return null}return Rn(r,n)}function vE(e,t,n){return bE(e,t,n)}function SE(e,t,n){return e.type&40?Rn(e,n):null}var bE=SE,xp;function kg(e,t,n,r){let o=gE(e,r,t),i=t[It],s=r.parent||t[Rt],c=vE(s,r,t);if(o!=null)if(Array.isArray(n))for(let l=0;l<n.length;l++)Mp(i,o,n[l],c,!1);else Mp(i,o,n,c,!1);xp!==void 0&&xp(i,r,t,n,o)}function qo(e,t){if(t!==null){let n=t.type;if(n&3)return Rn(t,e);if(n&4)return hu(-1,e[t.index]);if(n&8){let r=t.child;if(r!==null)return qo(e,r);{let o=e[t.index];return nn(o)?hu(-1,o):Xt(o)}}else{if(n&128)return qo(e,t.next);if(n&32)return Bu(t,e)()||Xt(e[t.index]);{let r=Ng(e,t);if(r!==null){if(Array.isArray(r))return r[0];let o=rr(e[jt]);return qo(o,r)}else return qo(e,t.next)}}}return null}function Ng(e,t){if(t!==null){let r=e[jt][Rt],o=t.projection;return r.projection[o]}return null}function hu(e,t){let n=gt+e+1;if(n<t.length){let r=t[n],o=r[J].firstChild;if(o!==null)return qo(r,o)}return t[nr]}function $u(e,t,n,r,o,i,s){for(;n!=null;){if(n.type===128){n=n.next;continue}let c=r[n.index],l=n.type;if(s&&t===0&&(c&&Da(Xt(c),r),n.flags|=2),!Mg(n))if(l&8)$u(e,t,n.child,r,o,i,!1),Lr(t,e,o,c,i);else if(l&32){let u=Bu(n,r),d;for(;d=u();)Lr(t,e,o,d,i);Lr(t,e,o,c,i)}else l&16?DE(e,t,r,n,o,i):Lr(t,e,o,c,i);n=s?n.projectionNext:n.next}}function Ea(e,t,n,r,o,i){$u(n,r,e.firstChild,t,o,i,!1)}function DE(e,t,n,r,o,i){let s=n[jt],l=s[Rt].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++){let d=l[u];Lr(t,e,o,d,i)}else{let u=l,d=s[$e];tg(r)&&(u.flags|=128),$u(e,t,u,d,o,i,!0)}}function wE(e,t,n,r,o){let i=n[nr],s=Xt(n);i!==s&&Lr(t,e,r,i,o);for(let c=gt;c<n.length;c++){let l=n[c];Ea(l[J],l,e,t,r,i)}}function ia(e,t,n,r,o=!1){for(;n!==null;){if(n.type===128){n=o?n.projectionNext:n.next;continue}let i=t[n.index];i!==null&&r.push(Xt(i)),nn(i)&&TE(i,r);let s=n.type;if(s&8)ia(e,t,n.child,r);else if(s&32){let c=Bu(n,t),l;for(;l=c();)r.push(l)}else if(s&16){let c=Ng(t,n);if(Array.isArray(c))r.push(...c);else{let l=rr(t[jt]);ia(l[J],l,c,r,!0)}}n=o?n.projectionNext:n.next}return r}function TE(e,t){for(let n=gt;n<e.length;n++){let r=e[n],o=r[J].firstChild;o!==null&&ia(r[J],r,o,t)}e[nr]!==e[tn]&&t.push(e[nr])}function Og(e){if(e[jl]!==null){for(let t of e[jl])t.impl.addSequence(t);e[jl].length=0}}var Ag=[];function EE(e){return e[mt]??CE(e)}function CE(e){let t=Ag.pop()??Object.create(PE);return t.lView=e,t}function IE(e){e.lView[mt]!==e&&(e.lView=null,Ag.push(e))}var PE=ae(M({},us),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{va(e.lView)},consumerOnSignalRead(){this.lView[mt]=this}});function RE(e){let t=e[mt]??Object.create(ME);return t.lView=e,t}var ME=ae(M({},us),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{let t=rr(e.lView);for(;t&&!Fg(t[J]);)t=rr(t);t&&vm(t)},consumerOnSignalRead(){this.lView[mt]=this}});function Fg(e){return e.type!==2}function Lg(e){if(e[Ks]===null)return;let t=!0;for(;t;){let n=!1;for(let r of e[Ks])r.dirty&&(n=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));t=n&&!!(e[q]&8192)}}var _E=100;function Hg(e,t=!0,n=0){let o=e[En].rendererFactory,i=!1;i||o.begin?.();try{xE(e,n)}catch(s){throw t&&sE(e,s),s}finally{i||o.end?.()}}function xE(e,t){let n=Em();try{mp(!0),pu(e,t);let r=0;for(;ya(e);){if(r===_E)throw new O(103,!1);r++,pu(e,1)}}finally{mp(n)}}function kE(e,t,n,r){if(qr(t))return;let o=t[q],i=!1,s=!1;_u(t);let c=!0,l=null,u=null;i||(Fg(e)?(u=EE(t),l=ml(u)):fl()===null?(c=!1,u=RE(t),l=ml(u)):t[mt]&&(yl(t[mt]),t[mt]=null));try{ym(t),Hw(e.bindingStartIndex),n!==null&&Cg(e,t,n,2,r);let d=(o&3)===3;if(!i)if(d){let f=e.preOrderCheckHooks;f!==null&&Us(t,f,null)}else{let f=e.preOrderHooks;f!==null&&js(t,f,0,null),Bl(t,0)}if(s||NE(t),Lg(t),Ug(t,0),e.contentQueries!==null&&fg(e,t),!i)if(d){let f=e.contentCheckHooks;f!==null&&Us(t,f)}else{let f=e.contentHooks;f!==null&&js(t,f,1),Bl(t,1)}AE(e,t);let h=e.components;h!==null&&Bg(t,h,0);let p=e.viewQuery;if(p!==null&&du(2,p,r),!i)if(d){let f=e.viewCheckHooks;f!==null&&Us(t,f)}else{let f=e.viewHooks;f!==null&&js(t,f,2),Bl(t,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),t[Ul]){for(let f of t[Ul])f();t[Ul]=null}i||(Og(t),t[q]&=-73)}catch(d){throw i||va(t),d}finally{u!==null&&(Ih(u,l),c&&IE(u)),xu()}}function Ug(e,t){for(let n=og(e);n!==null;n=ig(n))for(let r=gt;r<n.length;r++){let o=n[r];jg(o,t)}}function NE(e){for(let t=og(e);t!==null;t=ig(t)){if(!(t[q]&2))continue;let n=t[Js];for(let r=0;r<n.length;r++){let o=n[r];vm(o)}}}function OE(e,t,n){he(18);let r=In(t,e);jg(r,n),he(19,r[yt])}function jg(e,t){Mu(e)&&pu(e,t)}function pu(e,t){let r=e[J],o=e[q],i=e[mt],s=!!(t===0&&o&16);if(s||=!!(o&64&&t===0),s||=!!(o&1024),s||=!!(i?.dirty&&gl(i)),s||=!1,i&&(i.dirty=!1),e[q]&=-9217,s)kE(r,e,r.template,e[yt]);else if(o&8192){Lg(e),Ug(e,1);let c=r.components;c!==null&&Bg(e,c,1),Og(e)}}function Bg(e,t,n){for(let r=0;r<t.length;r++)OE(e,t[r],n)}function AE(e,t){let n=e.hostBindingOpCodes;if(n!==null)try{for(let r=0;r<n.length;r++){let o=n[r];if(o<0)or(~o);else{let i=o,s=n[++r],c=n[++r];jw(s,i);let l=t[i];he(24,l),c(2,l),he(25,l)}}}finally{or(-1)}}function zu(e,t){let n=Em()?64:1088;for(e[En].changeDetectionScheduler?.notify(t);e;){e[q]|=n;let r=rr(e);if(Xs(e)&&!r)return e;e=r}return null}function FE(e,t,n,r){return[e,!0,0,t,null,r,null,n,null,null]}function LE(e,t,n,r=!0){let o=t[J];if(HE(o,t,e,n),r){let s=hu(n,e),c=t[It],l=c.parentNode(e[nr]);l!==null&&fE(o,e[Rt],c,t,l,s)}let i=t[Qs];i!==null&&i.firstChild!==null&&(i.firstChild=null)}function mu(e,t){if(e.length<=gt)return;let n=gt+t,r=e[n];if(r){let o=r[Ko];o!==null&&o!==e&&Vu(o,r),t>0&&(e[n-1][Ct]=r[Ct]);let i=Ws(e,gt+t);dE(r[J],r);let s=i[ma];s!==null&&s.detachView(i[J]),r[$e]=null,r[Ct]=null,r[q]&=-129}return r}function HE(e,t,n,r){let o=gt+r,i=n.length;r>0&&(n[o-1][Ct]=t),r<i-gt?(t[Ct]=n[o],nm(n,gt+r,t)):(n.push(t),t[Ct]=null),t[$e]=n;let s=t[Ko];s!==null&&n!==s&&Vg(s,t);let c=t[ma];c!==null&&c.insertView(e),Xl(t),t[q]|=128}function Vg(e,t){let n=e[Js],r=t[$e];if(er(r))e[q]|=2;else{let o=r[$e][jt];t[jt]!==o&&(e[q]|=2)}n===null?e[Js]=[t]:n.push(t)}var sa=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let t=this._lView,n=t[J];return ia(n,t,n.firstChild,[])}constructor(t,n,r=!0){this._lView=t,this._cdRefInjectingView=n,this.notifyErrorHandler=r}get context(){return this._lView[yt]}set context(t){this._lView[yt]=t}get destroyed(){return qr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[$e];if(nn(t)){let n=t[Zs],r=n?n.indexOf(this):-1;r>-1&&(mu(t,r),Ws(n,r))}this._attachedToViewContainer=!1}xg(this._lView[J],this._lView)}onDestroy(t){Sm(this._lView,t)}markForCheck(){zu(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[q]&=-129}reattach(){Xl(this._lView),this._lView[q]|=128}detectChanges(){this._lView[q]|=1024,Hg(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new O(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=Xs(this._lView),n=this._lView[Ko];n!==null&&!t&&Vu(n,this._lView),_g(this._lView[J],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new O(902,!1);this._appRef=t;let n=Xs(this._lView),r=this._lView[Ko];r!==null&&!n&&Vg(r,this._lView),Xl(this._lView)}};function $g(e,t,n,r,o){let i=e.data[t];if(i===null)i=UE(e,t,n,r,o),Uw()&&(i.flags|=32);else if(i.type&64){i.type=n,i.value=r,i.attrs=o;let s=Fw();i.injectorIndex=s===null?-1:s.injectorIndex}return ba(i,!0),i}function UE(e,t,n,r,o){let i=wm(),s=Tm(),c=s?i:i&&i.parent,l=e.data[t]=BE(e,c,n,t,r,o);return jE(e,l,i,s),l}function jE(e,t,n,r){e.firstChild===null&&(e.firstChild=t),n!==null&&(r?n.child==null&&t.parent!==null&&(n.child=t):n.next===null&&(n.next=t,t.prev=n))}function BE(e,t,n,r,o,i){let s=t?t.injectorIndex:-1,c=0;return Nw()&&(c|=128),{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:c,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var bF=new RegExp(`^(\\d+)*(${IT}|${CT})*(.*)`);var VE=()=>null;function kp(e,t){return VE(e,t)}var $E=class{},zg=class{},gu=class{resolveComponentFactory(t){throw Error(`No component factory found for ${ot(t)}.`)}},Ca=class{static NULL=new gu},$r=class{};var zE=(()=>{class e{static \u0275prov=k({token:e,providedIn:"root",factory:()=>null})}return e})();var zl={},yu=class{injector;parentInjector;constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){r=fa(r);let o=this.injector.get(t,zl,r);return o!==zl||n===zl?o:this.parentInjector.get(t,n,r)}};function Np(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(t!==null)for(let s=0;s<t.length;s++){let c=t[s];if(typeof c=="number")i=c;else if(i==1)o=ip(o,c);else if(i==2){let l=c,u=t[++s];r=ip(r,l+": "+u+";")}}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}function Q(e,t=B.Default){let n=Pt();if(n===null)return A(e,t);let r=Mn();return $m(r,n,pt(e),t)}function qE(e,t,n,r,o){let i=r===null?null:{"":-1},s=o(e,n);if(s!==null){let c,l=null,u=null,d=GE(s);d===null?c=s:[c,l,u]=d,KE(e,t,n,c,i,l,u)}i!==null&&r!==null&&WE(n,r,i)}function WE(e,t,n){let r=e.localNames=[];for(let o=0;o<t.length;o+=2){let i=n[t[o+1]];if(i==null)throw new O(-301,!1);r.push(t[o],i)}}function GE(e){let t=null,n=!1;for(let s=0;s<e.length;s++){let c=e[s];if(s===0&&sr(c)&&(t=c),c.findHostDirectiveDefs!==null){n=!0;break}}if(!n)return null;let r=null,o=null,i=null;for(let s of e)s.findHostDirectiveDefs!==null&&(r??=[],o??=new Map,i??=new Map,QE(s,r,i,o)),s===t&&(r??=[],r.push(s));return r!==null?(r.push(...t===null?e:e.slice(1)),[r,o,i]):null}function QE(e,t,n,r){let o=t.length;e.findHostDirectiveDefs(e,t,r),n.set(e,[o,t.length-1])}function YE(e,t,n){t.componentOffset=n,(e.components??=[]).push(t.index)}function KE(e,t,n,r,o,i,s){let c=r.length,l=!1;for(let p=0;p<c;p++){let f=r[p];!l&&sr(f)&&(l=!0,YE(e,n,p)),rT(Um(n,t),e,f.type)}n0(n,e.data.length,c);for(let p=0;p<c;p++){let f=r[p];f.providersResolver&&f.providersResolver(f)}let u=!1,d=!1,h=Tg(e,t,c,null);c>0&&(n.directiveToIndex=new Map);for(let p=0;p<c;p++){let f=r[p];if(n.mergedAttrs=Am(n.mergedAttrs,f.hostAttrs),JE(e,n,t,h,f),t0(h,f,o),s!==null&&s.has(f)){let[y,b]=s.get(f);n.directiveToIndex.set(f.type,[h,y+n.directiveStart,b+n.directiveStart])}else(i===null||!i.has(f))&&n.directiveToIndex.set(f.type,h);f.contentQueries!==null&&(n.flags|=4),(f.hostBindings!==null||f.hostAttrs!==null||f.hostVars!==0)&&(n.flags|=64);let g=f.type.prototype;!u&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((e.preOrderHooks??=[]).push(n.index),u=!0),!d&&(g.ngOnChanges||g.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(n.index),d=!0),h++}ZE(e,n,i)}function ZE(e,t,n){for(let r=t.directiveStart;r<t.directiveEnd;r++){let o=e.data[r];if(n===null||!n.has(o))Op(0,t,o,r),Op(1,t,o,r),Fp(t,r,!1);else{let i=n.get(o);Ap(0,t,i,r),Ap(1,t,i,r),Fp(t,r,!0)}}}function Op(e,t,n,r){let o=e===0?n.inputs:n.outputs;for(let i in o)if(o.hasOwnProperty(i)){let s;e===0?s=t.inputs??={}:s=t.outputs??={},s[i]??=[],s[i].push(r),qg(t,i)}}function Ap(e,t,n,r){let o=e===0?n.inputs:n.outputs;for(let i in o)if(o.hasOwnProperty(i)){let s=o[i],c;e===0?c=t.hostDirectiveInputs??={}:c=t.hostDirectiveOutputs??={},c[s]??=[],c[s].push(r,i),qg(t,s)}}function qg(e,t){t==="class"?e.flags|=8:t==="style"&&(e.flags|=16)}function Fp(e,t,n){let{attrs:r,inputs:o,hostDirectiveInputs:i}=e;if(r===null||!n&&o===null||n&&i===null||ju(e)){e.initialInputs??=[],e.initialInputs.push(null);return}let s=null,c=0;for(;c<r.length;){let l=r[c];if(l===0){c+=4;continue}else if(l===5){c+=2;continue}else if(typeof l=="number")break;if(!n&&o.hasOwnProperty(l)){let u=o[l];for(let d of u)if(d===t){s??=[],s.push(l,r[c+1]);break}}else if(n&&i.hasOwnProperty(l)){let u=i[l];for(let d=0;d<u.length;d+=2)if(u[d]===t){s??=[],s.push(u[d+1],r[c+1]);break}}c+=2}e.initialInputs??=[],e.initialInputs.push(s)}function JE(e,t,n,r,o){e.data[r]=o;let i=o.factory||(o.factory=Ur(o.type,!0)),s=new Zo(i,sr(o),Q);e.blueprint[r]=s,n[r]=s,XE(e,t,r,Tg(e,n,o.hostVars,gg),o)}function XE(e,t,n,r,o){let i=o.hostBindings;if(i){let s=e.hostBindingOpCodes;s===null&&(s=e.hostBindingOpCodes=[]);let c=~t.index;e0(s)!=c&&s.push(c),s.push(n,r,i)}}function e0(e){let t=e.length;for(;t>0;){let n=e[--t];if(typeof n=="number"&&n<0)return n}return 0}function t0(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;sr(t)&&(n[""]=e)}}function n0(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Wg(e,t,n,r,o,i,s,c){let l=t.consts,u=pp(l,s),d=$g(t,e,2,r,u);return i&&qE(t,n,d,pp(l,c),o),d.mergedAttrs=Am(d.mergedAttrs,d.attrs),d.attrs!==null&&Np(d,d.attrs,!1),d.mergedAttrs!==null&&Np(d,d.mergedAttrs,!0),t.queries!==null&&t.queries.elementStart(t,d),d}function Gg(e,t){Ww(e,t),dm(t)&&e.queries.elementEnd(t)}var aa=class extends Ca{ngModule;constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){let n=Br(t);return new Xo(n,this.ngModule)}};function r0(e){return Object.keys(e).map(t=>{let[n,r,o]=e[t],i={propName:n,templateName:t,isSignal:(r&Ta.SignalBased)!==0};return o&&(i.transform=o),i})}function o0(e){return Object.keys(e).map(t=>({propName:e[t],templateName:t}))}function i0(e,t,n){let r=t instanceof Ze?t:t?.injector;return r&&e.getStandaloneInjector!==null&&(r=e.getStandaloneInjector(r)||r),r?new yu(n,r):n}function s0(e){let t=e.get($r,null);if(t===null)throw new O(407,!1);let n=e.get(zE,null),r=e.get(Jo,null);return{rendererFactory:t,sanitizer:n,changeDetectionScheduler:r}}function a0(e,t){let n=(e.selectors[0][0]||"div").toLowerCase();return yg(t,n,n==="svg"?Ew:n==="math"?Cw:null)}var Xo=class extends zg{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=r0(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=o0(this.componentDef.outputs),this.cachedOutputs}constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=BT(t.selectors),this.ngContentSelectors=t.ngContentSelectors??[],this.isBoundToModule=!!n}create(t,n,r,o){he(22);let i=ee(null);try{let s=this.componentDef,c=r?["ng-version","19.2.15"]:VT(this.componentDef.selectors[0]),l=bg(0,null,null,1,0,null,null,null,null,[c],null),u=i0(s,o||this.ngModule,t),d=s0(u),h=d.rendererFactory.createRenderer(null,s),p=r?JT(h,r,s.encapsulation,u):a0(s,h),f=Dg(null,l,null,512|wg(s),null,null,d,h,u,null,dg(p,u,!0));f[Cn]=p,_u(f);let g=null;try{let y=Wg(Cn,l,f,"#host",()=>[this.componentDef],!0,0);p&&(Sg(h,p,y),Da(p,f)),Ig(l,f,y),hg(l,y,f),Gg(l,y),n!==void 0&&c0(y,this.ngContentSelectors,n),g=In(y.index,f),f[yt]=g[yt],Rg(l,f,null)}catch(y){throw g!==null&&lu(g),lu(f),y}finally{he(23),xu()}return new vu(this.componentType,f)}finally{ee(i)}}},vu=class extends $E{_rootLView;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(t,n){super(),this._rootLView=n,this._tNode=Iw(n[J],Cn),this.location=Fu(this._tNode,n),this.instance=In(this._tNode.index,n)[yt],this.hostView=this.changeDetectorRef=new sa(n,void 0,!1),this.componentType=t}setInput(t,n){let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),n))return;let o=this._rootLView,i=Pg(r,o[J],o,t,n);this.previousInputValues.set(t,n);let s=In(r.index,o);zu(s,1)}get injector(){return new tr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function c0(e,t,n){let r=e.projection=[];for(let o=0;o<t.length;o++){let i=n[o];r.push(i!=null&&i.length?Array.from(i):null)}}var Ia=(()=>{class e{static __NG_ELEMENT_ID__=l0}return e})();function l0(){let e=Mn();return d0(e,Pt())}var u0=Ia,Qg=class extends u0{_lContainer;_hostTNode;_hostLView;constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return Fu(this._hostTNode,this._hostLView)}get injector(){return new tr(this._hostTNode,this._hostLView)}get parentInjector(){let t=ku(this._hostTNode,this._hostLView);if(Fm(t)){let n=ta(t,this._hostLView),r=ea(t),o=n[J].data[r+8];return new tr(o,n)}else return new tr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let n=Lp(this._lContainer);return n!==null&&n[t]||null}get length(){return this._lContainer.length-gt}createEmbeddedView(t,n,r){let o,i;typeof r=="number"?o=r:r!=null&&(o=r.index,i=r.injector);let s=kp(this._lContainer,t.ssrId),c=t.createEmbeddedViewImpl(n||{},i,s);return this.insertImpl(c,o,_p(this._hostTNode,s)),c}createComponent(t,n,r,o,i){let s=t&&!bw(t),c;if(s)c=n;else{let g=n||{};c=g.index,r=g.injector,o=g.projectableNodes,i=g.environmentInjector||g.ngModuleRef}let l=s?t:new Xo(Br(t)),u=r||this.parentInjector;if(!i&&l.ngModule==null){let y=(s?u:this.parentInjector).get(Ze,null);y&&(i=y)}let d=Br(l.componentType??{}),h=kp(this._lContainer,d?.id??null),p=h?.firstChild??null,f=l.create(u,o,p,i);return this.insertImpl(f.hostView,c,_p(this._hostTNode,h)),f}insert(t,n){return this.insertImpl(t,n,!0)}insertImpl(t,n,r){let o=t._lView;if(Pw(o)){let c=this.indexOf(t);if(c!==-1)this.detach(c);else{let l=o[$e],u=new Qg(l,l[Rt],l[$e]);u.detach(u.indexOf(t))}}let i=this._adjustIndex(n),s=this._lContainer;return LE(s,o,i,r),t.attachToViewContainerRef(),nm(ql(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){let n=Lp(this._lContainer);return n!==null?n.indexOf(t):-1}remove(t){let n=this._adjustIndex(t,-1),r=mu(this._lContainer,n);r&&(Ws(ql(this._lContainer),n),xg(r[J],r))}detach(t){let n=this._adjustIndex(t,-1),r=mu(this._lContainer,n);return r&&Ws(ql(this._lContainer),n)!=null?new sa(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function Lp(e){return e[Zs]}function ql(e){return e[Zs]||(e[Zs]=[])}function d0(e,t){let n,r=t[e.index];return nn(r)?n=r:(n=FE(r,t,null,e),t[e.index]=n,Eg(t,n)),h0(n,t,e,r),new Qg(n,e,t)}function f0(e,t){let n=e[It],r=n.createComment(""),o=Rn(t,e),i=n.parentNode(o);return oa(n,i,r,n.nextSibling(o),!1),r}var h0=p0;function p0(e,t,n,r){if(e[nr])return;let o;n.type&8?o=Xt(r):o=f0(t,n),e[nr]=o}var ei=class{},qu=class{};var Su=class extends ei{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new aa(this);constructor(t,n,r,o=!0){super(),this.ngModuleType=t,this._parent=n;let i=im(t);this._bootstrapComponents=pg(i.bootstrap),this._r3Injector=Wm(t,n,[{provide:ei,useValue:this},{provide:Ca,useValue:this.componentFactoryResolver},...r],ot(t),new Set(["environment"])),o&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}},bu=class extends qu{moduleType;constructor(t){super(),this.moduleType=t}create(t){return new Su(this.moduleType,t,[])}};var ca=class extends ei{injector;componentFactoryResolver=new aa(this);instance=null;constructor(t){super();let n=new Qo([...t.providers,{provide:ei,useValue:this},{provide:Ca,useValue:this.componentFactoryResolver}],t.parent||Pu(),t.debugName,new Set(["environment"]));this.injector=n,t.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function Pa(e,t,n=null){return new ca({providers:e,parent:t,debugName:n,runEnvironmentInitializers:!0}).injector}var m0=(()=>{class e{_injector;cachedInjectors=new Map;constructor(n){this._injector=n}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n)){let r=sm(!1,n.type),o=r.length>0?Pa([r],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n,o)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=k({token:e,providedIn:"environment",factory:()=>new e(A(Ze))})}return e})();function te(e){return ua(()=>{let t=Yg(e),n=ae(M({},t),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection===ng.OnPush,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&e.dependencies||null,getStandaloneInjector:t.standalone?o=>o.get(m0).getOrCreateStandaloneInjector(n):null,getExternalStyles:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||Bt.Emulated,styles:e.styles||Ht,_:null,schemas:e.schemas||null,tView:null,id:""});t.standalone&&ug("NgStandalone"),Kg(n);let r=e.dependencies;return n.directiveDefs=Hp(r,!1),n.pipeDefs=Hp(r,!0),n.id=b0(n),n})}function g0(e){return Br(e)||aw(e)}function y0(e){return e!==null}function Gr(e){return ua(()=>({type:e.type,bootstrap:e.bootstrap||Ht,declarations:e.declarations||Ht,imports:e.imports||Ht,exports:e.exports||Ht,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function v0(e,t){if(e==null)return jr;let n={};for(let r in e)if(e.hasOwnProperty(r)){let o=e[r],i,s,c,l;Array.isArray(o)?(c=o[0],i=o[1],s=o[2]??i,l=o[3]||null):(i=o,s=o,c=Ta.None,l=null),n[i]=[r,c,l],t[i]=s}return n}function S0(e){if(e==null)return jr;let t={};for(let n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}function Wu(e){return ua(()=>{let t=Yg(e);return Kg(t),t})}function Yg(e){let t={};return{type:e.type,providersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:t,inputConfig:e.inputs||jr,exportAs:e.exportAs||null,standalone:e.standalone??!0,signals:e.signals===!0,selectors:e.selectors||Ht,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:v0(e.inputs,t),outputs:S0(e.outputs),debugInfo:null}}function Kg(e){e.features?.forEach(t=>t(e))}function Hp(e,t){if(!e)return null;let n=t?cw:g0;return()=>(typeof e=="function"?e():e).map(r=>n(r)).filter(y0)}function b0(e){let t=0,n=typeof e.consts=="function"?"":e.consts,r=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,n,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery];for(let i of r.join("|"))t=Math.imul(31,t)+i.charCodeAt(0)<<0;return t+=2147483648,"c"+t}var Zg=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"platform"})}return e})();var Jg=new N("");var D0=(()=>{class e{static \u0275prov=k({token:e,providedIn:"root",factory:()=>new Du})}return e})(),Du=class{queuedEffectCount=0;queues=new Map;schedule(t){this.enqueue(t)}remove(t){let n=t.zone,r=this.queues.get(n);r.has(t)&&(r.delete(t),this.queuedEffectCount--)}enqueue(t){let n=t.zone;this.queues.has(n)||this.queues.set(n,new Set);let r=this.queues.get(n);r.has(t)||(this.queuedEffectCount++,r.add(t))}flush(){for(;this.queuedEffectCount>0;)for(let[t,n]of this.queues)t===null?this.flushQueue(n):t.run(()=>this.flushQueue(n))}flushQueue(t){for(let n of t)t.delete(n),this.queuedEffectCount--,n.run()}};function Ra(e){return!!e&&typeof e.then=="function"}function w0(e){return!!e&&typeof e.subscribe=="function"}var T0=new N("");var Xg=(()=>{class e{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((n,r)=>{this.resolve=n,this.reject=r});appInits=P(T0,{optional:!0})??[];injector=P(Pn);constructor(){}runInitializers(){if(this.initialized)return;let n=[];for(let o of this.appInits){let i=it(this.injector,o);if(Ra(i))n.push(i);else if(w0(i)){let s=new Promise((c,l)=>{i.subscribe({complete:c,error:l})});n.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),n.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Gu=new N("");function E0(){vl(()=>{throw new O(600,!1)})}function C0(e){return e.isBoundToModule}var I0=10;var ir=(()=>{class e{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=P(yT);afterRenderManager=P(RT);zonelessEnabled=P(Qm);rootEffectScheduler=P(D0);dirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new Fe;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=P(_n).hasPendingTasks.pipe(F(n=>!n));constructor(){P(wa,{optional:!0})}whenStable(){let n;return new Promise(r=>{n=this.isStable.subscribe({next:o=>{o&&r()}})}).finally(()=>{n.unsubscribe()})}_injector=P(Ze);_rendererFactory=null;get injector(){return this._injector}bootstrap(n,r){return this.bootstrapImpl(n,r)}bootstrapImpl(n,r,o=Pn.NULL){he(10);let i=n instanceof zg;if(!this._injector.get(Xg).done){let f="";throw new O(405,f)}let c;i?c=n:c=this._injector.get(Ca).resolveComponentFactory(n),this.componentTypes.push(c.componentType);let l=C0(c)?void 0:this._injector.get(ei),u=r||c.selector,d=c.create(o,[],u,l),h=d.location.nativeElement,p=d.injector.get(Jg,null);return p?.registerApplication(h),d.onDestroy(()=>{this.detachView(d.hostView),Bs(this.components,d),p?.unregisterApplication(h)}),this._loadComponent(d),he(11,d),d}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){he(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(lg.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new O(101,!1);let n=ee(null);try{this._runningTick=!0,this.synchronize()}catch(r){this.internalErrorHandler(r)}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,ee(n),this.afterTick.next(),he(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get($r,null,{optional:!0}));let n=0;for(;this.dirtyFlags!==0&&n++<I0;)he(14),this.synchronizeOnce(),he(15)}synchronizeOnce(){if(this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let n=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r,notifyErrorHandler:o}of this.allViews)P0(r,o,n,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:n})=>ya(n))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(n){let r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){let r=n;Bs(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(Gu,[]).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>Bs(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new O(406,!1);let n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Bs(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function P0(e,t,n,r){if(!n&&!ya(e))return;Hg(e,t,n&&!r?0:1)}function Up(e,t,n,r,o){Pg(t,e,n,o?"class":"style",r)}function oe(e,t,n,r){let o=Pt(),i=Sa(),s=Cn+e,c=o[It],l=i.firstCreatePass?Wg(s,i,o,t,oE,kw(),n,r):i.data[s],u=R0(i,o,l,c,t,e);o[s]=u;let d=fm(l);return ba(l,!0),Sg(c,u,l),!Mg(l)&&km()&&kg(i,o,u,l),(Mw()===0||d)&&Da(u,o),_w(),d&&(Ig(i,o,l),hg(i,l,o)),r!==null&&ZT(o,l),oe}function me(){let e=Mn();Tm()?Lw():(e=e.parent,ba(e,!1));let t=e;Ow(t)&&Aw(),xw();let n=Sa();return n.firstCreatePass&&Gg(n,t),t.classesWithoutHost!=null&&Qw(t)&&Up(n,t,Pt(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&Yw(t)&&Up(n,t,Pt(),t.stylesWithoutHost,!1),me}function ge(e,t,n,r){return oe(e,t,n,r),me(),ge}var R0=(e,t,n,r,o,i)=>(Nm(!0),yg(r,o,zw()));var la="en-US";var M0=la;function _0(e){typeof e=="string"&&(M0=e.toLowerCase().replace(/_/g,"-"))}function jp(e,t,n){return function r(o){if(o===Function)return n;let i=ni(e)?In(e.index,t):t;zu(i,5);let s=t[yt],c=Bp(t,s,n,o),l=r.__ngNextListenerFn__;for(;l;)c=Bp(t,s,l,o)&&c,l=l.__ngNextListenerFn__;return c}}function Bp(e,t,n,r){let o=ee(null);try{return he(6,t,n),n(r)!==!1}catch(i){return x0(e,i),!1}finally{he(7,t,n),ee(o)}}function x0(e,t){let n=e[Vr],r=n?n.get(en,null):null;r&&r.handleError(t)}function Vp(e,t,n,r,o,i){let s=t[n],c=t[J],u=c.data[n].outputs[r],d=s[u],h=c.firstCreatePass?Dm(c):null,p=bm(t),f=d.subscribe(i),g=p.length;p.push(i,f),h&&h.push(o,e.index,g,-(g+1))}function Mt(e,t,n,r){let o=Pt(),i=Sa(),s=Mn();return N0(i,o,o[It],s,e,t,r),Mt}function k0(e,t,n,r){let o=e.cleanup;if(o!=null)for(let i=0;i<o.length-1;i+=2){let s=o[i];if(s===n&&o[i+1]===r){let c=t[Ys],l=o[i+2];return c.length>l?c[l]:null}typeof s=="string"&&(i+=2)}return null}function N0(e,t,n,r,o,i,s){let c=fm(r),u=e.firstCreatePass?Dm(e):null,d=bm(t),h=!0;if(r.type&3||s){let p=Rn(r,t),f=s?s(p):p,g=d.length,y=s?S=>s(Xt(S[r.index])):r.index,b=null;if(!s&&c&&(b=k0(e,t,o,r.index)),b!==null){let S=b.__ngLastListenerFn__||b;S.__ngNextListenerFn__=i,b.__ngLastListenerFn__=i,h=!1}else{i=jp(r,t,i),_T(t,f,o,i);let S=n.listen(f,o,i);d.push(i,S),u&&u.push(o,y,g,g+1)}}else i=jp(r,t,i);if(h){let p=r.outputs?.[o],f=r.hostDirectiveOutputs?.[o];if(f&&f.length)for(let g=0;g<f.length;g+=2){let y=f[g],b=f[g+1];Vp(r,t,y,b,o,i)}if(p&&p.length)for(let g of p)Vp(r,t,g,o,o,i)}}function we(e,t=""){let n=Pt(),r=Sa(),o=e+Cn,i=r.firstCreatePass?$g(r,o,1,t,null):r.data[o],s=O0(r,n,i,t,e);n[o]=s,km()&&kg(r,n,s,i),ba(i,!1)}var O0=(e,t,n,r,o)=>(Nm(!0),$T(t[It],r));var wu=class{ngModuleFactory;componentFactories;constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}},ey=(()=>{class e{compileModuleSync(n){return new bu(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){let r=this.compileModuleSync(n),o=im(n),i=pg(o.declarations).reduce((s,c)=>{let l=Br(c);return l&&s.push(new Xo(l)),s},[]);return new wu(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var A0=(()=>{class e{zone=P(Ce);changeDetectionScheduler=P(Jo);applicationRef=P(ir);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function F0({ngZoneFactory:e,ignoreChangesOutsideZone:t,scheduleInRootZone:n}){return e??=()=>new Ce(ae(M({},L0()),{scheduleInRootZone:n})),[{provide:Ce,useFactory:e},{provide:Go,multi:!0,useFactory:()=>{let r=P(A0,{optional:!0});return()=>r.initialize()}},{provide:Go,multi:!0,useFactory:()=>{let r=P(H0);return()=>{r.initialize()}}},t===!0?{provide:Ym,useValue:!0}:[],{provide:Km,useValue:n??Gm}]}function L0(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:e?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:e?.runCoalescing??!1}}var H0=(()=>{class e{subscription=new be;initialized=!1;zone=P(Ce);pendingTasks=P(_n);initialize(){if(this.initialized)return;this.initialized=!0;let n=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(n=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Ce.assertNotInAngularZone(),queueMicrotask(()=>{n!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(n),n=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Ce.assertInAngularZone(),n??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var U0=(()=>{class e{appRef=P(ir);taskService=P(_n);ngZone=P(Ce);zonelessEnabled=P(Qm);tracing=P(wa,{optional:!0});disableScheduling=P(Ym,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new be;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(ra):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(P(Km,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof cu||!this.zoneIsDefined)}notify(n){if(!this.zonelessEnabled&&n===5)return;let r=!1;switch(n){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,r=!0;break}case 12:{this.appRef.dirtyFlags|=16,r=!0;break}case 13:{this.appRef.dirtyFlags|=2,r=!0;break}case 11:{r=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(r))return;let o=this.useMicrotaskScheduler?wp:Zm;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>o(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>o(()=>this.tick()))}shouldScheduleTick(n){return!(this.disableScheduling&&!n||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(ra+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let n=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){throw this.taskService.remove(n),r}finally{this.cleanup()}this.useMicrotaskScheduler=!0,wp(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(n)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let n=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(n)}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function j0(){return typeof $localize<"u"&&$localize.locale||la}var ty=new N("",{providedIn:"root",factory:()=>P(ty,B.Optional|B.SkipSelf)||j0()});var Tu=new N(""),B0=new N("");function $o(e){return!e.moduleRef}function V0(e){let t=$o(e)?e.r3Injector:e.moduleRef.injector,n=t.get(Ce);return n.run(()=>{$o(e)?e.r3Injector.resolveInjectorInitializers():e.moduleRef.resolveInjectorInitializers();let r=t.get(en,null),o;if(n.runOutsideAngular(()=>{o=n.onError.subscribe({next:i=>{r.handleError(i)}})}),$o(e)){let i=()=>t.destroy(),s=e.platformInjector.get(Tu);s.add(i),t.onDestroy(()=>{o.unsubscribe(),s.delete(i)})}else{let i=()=>e.moduleRef.destroy(),s=e.platformInjector.get(Tu);s.add(i),e.moduleRef.onDestroy(()=>{Bs(e.allPlatformModules,e.moduleRef),o.unsubscribe(),s.delete(i)})}return z0(r,n,()=>{let i=t.get(Xg);return i.runInitializers(),i.donePromise.then(()=>{let s=t.get(ty,la);if(_0(s||la),!t.get(B0,!0))return $o(e)?t.get(ir):(e.allPlatformModules.push(e.moduleRef),e.moduleRef);if($o(e)){let l=t.get(ir);return e.rootComponent!==void 0&&l.bootstrap(e.rootComponent),l}else return $0(e.moduleRef,e.allPlatformModules),e.moduleRef})})})}function $0(e,t){let n=e.injector.get(ir);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(r=>n.bootstrap(r));else if(e.instance.ngDoBootstrap)e.instance.ngDoBootstrap(n);else throw new O(-403,!1);t.push(e)}function z0(e,t,n){try{let r=n();return Ra(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}var Vs=null;function q0(e=[],t){return Pn.create({name:t,providers:[{provide:pa,useValue:"platform"},{provide:Tu,useValue:new Set([()=>Vs=null])},...e]})}function W0(e=[]){if(Vs)return Vs;let t=q0(e);return Vs=t,E0(),G0(t),t}function G0(e){let t=e.get(Hu,null);it(e,()=>{t?.forEach(n=>n())})}var Qu=(()=>{class e{static __NG_ELEMENT_ID__=Q0}return e})();function Q0(e){return Y0(Mn(),Pt(),(e&16)===16)}function Y0(e,t,n){if(ni(e)&&!n){let r=In(e.index,t);return new sa(r,r)}else if(e.type&175){let r=t[jt];return new sa(r,t)}return null}function ny(e){let{rootComponent:t,appProviders:n,platformProviders:r,platformRef:o}=e;he(8);try{let i=o?.injector??W0(r),s=[F0({}),{provide:Jo,useExisting:U0},...n||[]],c=new ca({providers:s,parent:i,debugName:"",runEnvironmentInitializers:!1});return V0({r3Injector:c.injector,platformInjector:i,rootComponent:t})}catch(i){return Promise.reject(i)}finally{he(9)}}var $p=class{[Er];constructor(t){this[Er]=t}destroy(){this[Er].destroy()}};var Oe=new N("");var iy=null;function rn(){return iy}function Yu(e){iy??=e}var ii=class{},Ku=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>P(sy),providedIn:"platform"})}return e})();var sy=(()=>{class e extends Ku{_location;_history;_doc=P(Oe);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return rn().getBaseHref(this._doc)}onPopState(n){let r=rn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){let r=rn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,r,o){this._history.pushState(n,r,o)}replaceState(n,r,o){this._history.replaceState(n,r,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function ay(e,t){return e?t?e.endsWith("/")?t.startsWith("/")?e+t.slice(1):e+t:t.startsWith("/")?e+t:`${e}/${t}`:e:t}function ry(e){let t=e.search(/#|\?|$/);return e[t-1]==="/"?e.slice(0,t-1)+e.slice(t):e}function xn(e){return e&&e[0]!=="?"?`?${e}`:e}var Ma=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>P(ly),providedIn:"root"})}return e})(),cy=new N(""),ly=(()=>{class e extends Ma{_platformLocation;_baseHref;_removeListenerFns=[];constructor(n,r){super(),this._platformLocation=n,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??P(Oe).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return ay(this._baseHref,n)}path(n=!1){let r=this._platformLocation.pathname+xn(this._platformLocation.search),o=this._platformLocation.hash;return o&&n?`${r}${o}`:r}pushState(n,r,o,i){let s=this.prepareExternalUrl(o+xn(i));this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){let s=this.prepareExternalUrl(o+xn(i));this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}static \u0275fac=function(r){return new(r||e)(A(Ku),A(cy,8))};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Qr=(()=>{class e{_subject=new Fe;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(n){this._locationStrategy=n;let r=this._locationStrategy.getBaseHref();this._basePath=J0(ry(oy(r))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+xn(r))}normalize(n){return e.stripTrailingSlash(Z0(this._basePath,oy(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",o=null){this._locationStrategy.pushState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+xn(r)),o)}replaceState(n,r="",o=null){this._locationStrategy.replaceState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+xn(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(o=>o(n,r))}subscribe(n,r,o){return this._subject.subscribe({next:n,error:r??void 0,complete:o??void 0})}static normalizeQueryParams=xn;static joinWithSlash=ay;static stripTrailingSlash=ry;static \u0275fac=function(r){return new(r||e)(A(Ma))};static \u0275prov=k({token:e,factory:()=>K0(),providedIn:"root"})}return e})();function K0(){return new Qr(A(Ma))}function Z0(e,t){if(!e||!t.startsWith(e))return t;let n=t.substring(e.length);return n===""||["/",";","?","#"].includes(n[0])?n:t}function oy(e){return e.replace(/\/index.html$/,"")}function J0(e){if(new RegExp("^(https?:)?//").test(e)){let[,n]=e.split(/\/\/[^\/]+/);return n}return e}var _a=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=Gr({type:e});static \u0275inj=zr({})}return e})();function si(e,t){t=encodeURIComponent(t);for(let n of e.split(";")){let r=n.indexOf("="),[o,i]=r==-1?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===t)return decodeURIComponent(i)}return null}var Zu="browser",uy="server";function xa(e){return e===uy}var ar=class{};var Oa=new N(""),td=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(n,r){this._zone=r,n.forEach(o=>{o.manager=this}),this._plugins=n.slice().reverse()}addEventListener(n,r,o,i){return this._findPluginFor(r).addEventListener(n,r,o,i)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(i=>i.supports(n)),!r)throw new O(5101,!1);return this._eventNameToPlugin.set(n,r),r}static \u0275fac=function(r){return new(r||e)(A(Oa),A(Ce))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),ai=class{_doc;constructor(t){this._doc=t}manager},ka="ng-app-id";function dy(e){for(let t of e)t.remove()}function fy(e,t){let n=t.createElement("style");return n.textContent=e,n}function eC(e,t,n,r){let o=e.head?.querySelectorAll(`style[${ka}="${t}"],link[${ka}="${t}"]`);if(o)for(let i of o)i.removeAttribute(ka),i instanceof HTMLLinkElement?r.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&n.set(i.textContent,{usage:0,elements:[i]})}function Xu(e,t){let n=t.createElement("link");return n.setAttribute("rel","stylesheet"),n.setAttribute("href",e),n}var nd=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(n,r,o,i={}){this.doc=n,this.appId=r,this.nonce=o,this.isServer=xa(i),eC(n,r,this.inline,this.external),this.hosts.add(n.head)}addStyles(n,r){for(let o of n)this.addUsage(o,this.inline,fy);r?.forEach(o=>this.addUsage(o,this.external,Xu))}removeStyles(n,r){for(let o of n)this.removeUsage(o,this.inline);r?.forEach(o=>this.removeUsage(o,this.external))}addUsage(n,r,o){let i=r.get(n);i?i.usage++:r.set(n,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(n,this.doc)))})}removeUsage(n,r){let o=r.get(n);o&&(o.usage--,o.usage<=0&&(dy(o.elements),r.delete(n)))}ngOnDestroy(){for(let[,{elements:n}]of[...this.inline,...this.external])dy(n);this.hosts.clear()}addHost(n){this.hosts.add(n);for(let[r,{elements:o}]of this.inline)o.push(this.addElement(n,fy(r,this.doc)));for(let[r,{elements:o}]of this.external)o.push(this.addElement(n,Xu(r,this.doc)))}removeHost(n){this.hosts.delete(n)}addElement(n,r){return this.nonce&&r.setAttribute("nonce",this.nonce),this.isServer&&r.setAttribute(ka,this.appId),n.appendChild(r)}static \u0275fac=function(r){return new(r||e)(A(Oe),A(Lu),A(Uu,8),A(oi))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),Ju={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},rd=/%COMP%/g;var py="%COMP%",tC=`_nghost-${py}`,nC=`_ngcontent-${py}`,rC=!0,oC=new N("",{providedIn:"root",factory:()=>rC});function iC(e){return nC.replace(rd,e)}function sC(e){return tC.replace(rd,e)}function my(e,t){return t.map(n=>n.replace(rd,e))}var od=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(n,r,o,i,s,c,l,u=null,d=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=s,this.platformId=c,this.ngZone=l,this.nonce=u,this.tracingService=d,this.platformIsServer=xa(c),this.defaultRenderer=new ci(n,s,l,this.platformIsServer,this.tracingService)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Bt.ShadowDom&&(r=ae(M({},r),{encapsulation:Bt.Emulated}));let o=this.getOrCreateRenderer(n,r);return o instanceof Na?o.applyToHost(n):o instanceof li&&o.applyStyles(),o}getOrCreateRenderer(n,r){let o=this.rendererByCompId,i=o.get(r.id);if(!i){let s=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.platformIsServer,p=this.tracingService;switch(r.encapsulation){case Bt.Emulated:i=new Na(l,u,r,this.appId,d,s,c,h,p);break;case Bt.ShadowDom:return new ed(l,u,n,r,s,c,this.nonce,h,p);default:i=new li(l,u,r,d,s,c,h,p);break}o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(n){this.rendererByCompId.delete(n)}static \u0275fac=function(r){return new(r||e)(A(td),A(nd),A(Lu),A(oC),A(Oe),A(oi),A(Ce),A(Uu),A(wa,8))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),ci=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,n,r,o,i){this.eventManager=t,this.doc=n,this.ngZone=r,this.platformIsServer=o,this.tracingService=i}destroy(){}destroyNode=null;createElement(t,n){return n?this.doc.createElementNS(Ju[n]||n,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,n){(hy(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(hy(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){n.remove()}selectRootElement(t,n){let r=typeof t=="string"?this.doc.querySelector(t):t;if(!r)throw new O(-5104,!1);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;let i=Ju[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){let o=Ju[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(Wr.DashCase|Wr.Important)?t.style.setProperty(n,r,o&Wr.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&Wr.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t!=null&&(t[n]=r)}setValue(t,n){t.nodeValue=n}listen(t,n,r,o){if(typeof t=="string"&&(t=rn().getGlobalEventTarget(this.doc,t),!t))throw new O(5102,!1);let i=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(t,n,i)),this.eventManager.addEventListener(t,n,i,o)}decoratePreventDefault(t){return n=>{if(n==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(n)):t(n))===!1&&n.preventDefault()}}};function hy(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var ed=class extends ci{sharedStylesHost;hostEl;shadowRoot;constructor(t,n,r,o,i,s,c,l,u){super(t,i,s,l,u),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=o.styles;d=my(o.id,d);for(let p of d){let f=document.createElement("style");c&&f.setAttribute("nonce",c),f.textContent=p,this.shadowRoot.appendChild(f)}let h=o.getExternalStyles?.();if(h)for(let p of h){let f=Xu(p,i);c&&f.setAttribute("nonce",c),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(null,n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},li=class extends ci{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,n,r,o,i,s,c,l,u){super(t,i,s,c,l),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=o;let d=r.styles;this.styles=u?my(u,d):d,this.styleUrls=r.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Na=class extends li{contentAttr;hostAttr;constructor(t,n,r,o,i,s,c,l,u){let d=o+"-"+r.id;super(t,n,r,i,s,c,l,u,d),this.contentAttr=iC(d),this.hostAttr=sC(d)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,n){let r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}};var Aa=class e extends ii{supportsDOMEvents=!0;static makeCurrent(){Yu(new e)}onAndCancel(t,n,r,o){return t.addEventListener(n,r,o),()=>{t.removeEventListener(n,r,o)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.remove()}createElement(t,n){return n=n||this.getDefaultDocument(),n.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return n==="window"?window:n==="document"?t:n==="body"?t.body:null}getBaseHref(t){let n=aC();return n==null?null:cC(n)}resetBaseElement(){ui=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return si(document.cookie,t)}},ui=null;function aC(){return ui=ui||document.head.querySelector("base"),ui?ui.getAttribute("href"):null}function cC(e){return new URL(e,document.baseURI).pathname}var lC=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),yy=(()=>{class e extends ai{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o,i){return n.addEventListener(r,o,i),()=>this.removeEventListener(n,r,o,i)}removeEventListener(n,r,o,i){return n.removeEventListener(r,o,i)}static \u0275fac=function(r){return new(r||e)(A(Oe))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),gy=["alt","control","meta","shift"],uC={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},dC={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},vy=(()=>{class e extends ai{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,r,o,i){let s=e.parseEventName(r),c=e.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>rn().onAndCancel(n,s.domEventName,c,i))}static parseEventName(n){let r=n.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let i=e._normalizeKey(r.pop()),s="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),s="code."),gy.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),s+=u+".")}),s+=i,r.length!=0||i.length===0)return null;let l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(n,r){let o=uC[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),gy.forEach(s=>{if(s!==o){let c=dC[s];c(n)&&(i+=s+".")}}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return n==="esc"?"escape":n}static \u0275fac=function(r){return new(r||e)(A(Oe))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();function id(e,t,n){return ny(M({rootComponent:e,platformRef:n?.platformRef},fC(t)))}function fC(e){return{appProviders:[...yC,...e?.providers??[]],platformProviders:gC}}function hC(){Aa.makeCurrent()}function pC(){return new en}function mC(){return ag(document),document}var gC=[{provide:oi,useValue:Zu},{provide:Hu,useValue:hC,multi:!0},{provide:Oe,useFactory:mC}];var yC=[{provide:pa,useValue:"root"},{provide:en,useFactory:pC},{provide:Oa,useClass:yy,multi:!0,deps:[Oe]},{provide:Oa,useClass:vy,multi:!0,deps:[Oe]},od,nd,td,{provide:$r,useExisting:od},{provide:ar,useClass:lC},[]];var Kr=class{},di=class{},_t=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(n=>{let r=n.indexOf(":");if(r>0){let o=n.slice(0,r),i=n.slice(r+1).trim();this.addHeaderEntry(o,i)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((n,r)=>{this.addHeaderEntry(r,n)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([n,r])=>{this.setHeaderEntries(n,r)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let n=this.headers.get(t.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,n){return this.clone({name:t,value:n,op:"a"})}set(t,n){return this.clone({name:t,value:n,op:"s"})}delete(t,n){return this.clone({name:t,value:n,op:"d"})}maybeSetNormalizedName(t,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,t)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(n=>{this.headers.set(n,t.headers.get(n)),this.normalizedNames.set(n,t.normalizedNames.get(n))})}clone(t){let n=new e;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}applyUpdate(t){let n=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(t.name,n);let o=(t.op==="a"?this.headers.get(n):void 0)||[];o.push(...r),this.headers.set(n,o);break;case"d":let i=t.value;if(!i)this.headers.delete(n),this.normalizedNames.delete(n);else{let s=this.headers.get(n);if(!s)return;s=s.filter(c=>i.indexOf(c)===-1),s.length===0?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,s)}break}}addHeaderEntry(t,n){let r=t.toLowerCase();this.maybeSetNormalizedName(t,r),this.headers.has(r)?this.headers.get(r).push(n):this.headers.set(r,[n])}setHeaderEntries(t,n){let r=(Array.isArray(n)?n:[n]).map(i=>i.toString()),o=t.toLowerCase();this.headers.set(o,r),this.maybeSetNormalizedName(t,o)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>t(this.normalizedNames.get(n),this.headers.get(n)))}};var La=class{encodeKey(t){return Sy(t)}encodeValue(t){return Sy(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function vC(e,t){let n=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{let i=o.indexOf("="),[s,c]=i==-1?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,i)),t.decodeValue(o.slice(i+1))],l=n.get(s)||[];l.push(c),n.set(s,l)}),n}var SC=/%(\d[a-f0-9])/gi,bC={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Sy(e){return encodeURIComponent(e).replace(SC,(t,n)=>bC[n]??t)}function Fa(e){return`${e}`}var on=class e{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new La,t.fromString){if(t.fromObject)throw new O(2805,!1);this.map=vC(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(n=>{let r=t.fromObject[n],o=Array.isArray(r)?r.map(Fa):[Fa(r)];this.map.set(n,o)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let n=this.map.get(t);return n?n[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,n){return this.clone({param:t,value:n,op:"a"})}appendAll(t){let n=[];return Object.keys(t).forEach(r=>{let o=t[r];Array.isArray(o)?o.forEach(i=>{n.push({param:r,value:i,op:"a"})}):n.push({param:r,value:o,op:"a"})}),this.clone(n)}set(t,n){return this.clone({param:t,value:n,op:"s"})}delete(t,n){return this.clone({param:t,value:n,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let n=this.encoder.encodeKey(t);return this.map.get(t).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let n=new e({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(t),n}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let n=(t.op==="a"?this.map.get(t.param):void 0)||[];n.push(Fa(t.value)),this.map.set(t.param,n);break;case"d":if(t.value!==void 0){let r=this.map.get(t.param)||[],o=r.indexOf(Fa(t.value));o!==-1&&r.splice(o,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var Ha=class{map=new Map;set(t,n){return this.map.set(t,n),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function DC(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function by(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Dy(e){return typeof Blob<"u"&&e instanceof Blob}function wy(e){return typeof FormData<"u"&&e instanceof FormData}function wC(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var Ty="Content-Type",Ey="Accept",Cy="X-Request-URL",Iy="text/plain",Py="application/json",TC=`${Py}, ${Iy}, */*`,Yr=class e{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(t,n,r,o){this.url=n,this.method=t.toUpperCase();let i;if(DC(this.method)||o?(this.body=r!==void 0?r:null,i=o):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new _t,this.context??=new Ha,!this.params)this.params=new on,this.urlWithParams=n;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=n;else{let c=n.indexOf("?"),l=c===-1?"?":c<n.length-1?"&":"";this.urlWithParams=n+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||by(this.body)||Dy(this.body)||wy(this.body)||wC(this.body)?this.body:this.body instanceof on?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||wy(this.body)?null:Dy(this.body)?this.body.type||null:by(this.body)?null:typeof this.body=="string"?Iy:this.body instanceof on?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Py:null}clone(t={}){let n=t.method||this.method,r=t.url||this.url,o=t.responseType||this.responseType,i=t.transferCache??this.transferCache,s=t.body!==void 0?t.body:this.body,c=t.withCredentials??this.withCredentials,l=t.reportProgress??this.reportProgress,u=t.headers||this.headers,d=t.params||this.params,h=t.context??this.context;return t.setHeaders!==void 0&&(u=Object.keys(t.setHeaders).reduce((p,f)=>p.set(f,t.setHeaders[f]),u)),t.setParams&&(d=Object.keys(t.setParams).reduce((p,f)=>p.set(f,t.setParams[f]),d)),new e(n,r,s,{params:d,headers:u,context:h,reportProgress:l,responseType:o,withCredentials:c,transferCache:i})}},cr=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(cr||{}),Zr=class{headers;status;statusText;url;ok;type;constructor(t,n=200,r="OK"){this.headers=t.headers||new _t,this.status=t.status!==void 0?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},Ua=class e extends Zr{constructor(t={}){super(t)}type=cr.ResponseHeader;clone(t={}){return new e({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},fi=class e extends Zr{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=cr.Response;clone(t={}){return new e({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},hi=class extends Zr{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},EC=200,CC=204;function sd(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var Ba=(()=>{class e{handler;constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof Yr)i=n;else{let l;o.headers instanceof _t?l=o.headers:l=new _t(o.headers);let u;o.params&&(o.params instanceof on?u=o.params:u=new on({fromObject:o.params})),i=new Yr(n,r,o.body!==void 0?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let s=L(i).pipe(Dn(l=>this.handler.handle(l)));if(n instanceof Yr||o.observe==="events")return s;let c=s.pipe(nt(l=>l instanceof fi));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return c.pipe(F(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new O(2806,!1);return l.body}));case"blob":return c.pipe(F(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new O(2807,!1);return l.body}));case"text":return c.pipe(F(l=>{if(l.body!==null&&typeof l.body!="string")throw new O(2808,!1);return l.body}));case"json":default:return c.pipe(F(l=>l.body))}case"response":return c;default:throw new O(2809,!1)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new on().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,sd(o,r))}post(n,r,o={}){return this.request("POST",n,sd(o,r))}put(n,r,o={}){return this.request("PUT",n,sd(o,r))}static \u0275fac=function(r){return new(r||e)(A(Kr))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var IC=new N("");function PC(e,t){return t(e)}function RC(e,t,n){return(r,o)=>it(n,()=>t(r,i=>e(i,o)))}var Ry=new N(""),My=new N(""),_y=new N("",{providedIn:"root",factory:()=>!0});var ja=(()=>{class e extends Kr{backend;injector;chain=null;pendingTasks=P(_n);contributeToStability=P(_y);constructor(n,r){super(),this.backend=n,this.injector=r}handle(n){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(Ry),...this.injector.get(My,[])]));this.chain=r.reduceRight((o,i)=>RC(o,i,this.injector),PC)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(n,o=>this.backend.handle(o)).pipe(Jn(()=>this.pendingTasks.remove(r)))}else return this.chain(n,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||e)(A(di),A(Ze))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var MC=/^\)\]\}',?\n/,_C=RegExp(`^${Cy}:`,"m");function xC(e){return"responseURL"in e&&e.responseURL?e.responseURL:_C.test(e.getAllResponseHeaders())?e.getResponseHeader(Cy):null}var ad=(()=>{class e{xhrFactory;constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new O(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?fe(r.\u0275loadImpl()):L(null)).pipe(rt(()=>new z(i=>{let s=r.build();if(s.open(n.method,n.urlWithParams),n.withCredentials&&(s.withCredentials=!0),n.headers.forEach((y,b)=>s.setRequestHeader(y,b.join(","))),n.headers.has(Ey)||s.setRequestHeader(Ey,TC),!n.headers.has(Ty)){let y=n.detectContentTypeHeader();y!==null&&s.setRequestHeader(Ty,y)}if(n.responseType){let y=n.responseType.toLowerCase();s.responseType=y!=="json"?y:"text"}let c=n.serializeBody(),l=null,u=()=>{if(l!==null)return l;let y=s.statusText||"OK",b=new _t(s.getAllResponseHeaders()),S=xC(s)||n.url;return l=new Ua({headers:b,status:s.status,statusText:y,url:S}),l},d=()=>{let{headers:y,status:b,statusText:S,url:T}=u(),D=null;b!==CC&&(D=typeof s.response>"u"?s.responseText:s.response),b===0&&(b=D?EC:0);let I=b>=200&&b<300;if(n.responseType==="json"&&typeof D=="string"){let R=D;D=D.replace(MC,"");try{D=D!==""?JSON.parse(D):null}catch(x){D=R,I&&(I=!1,D={error:x,text:D})}}I?(i.next(new fi({body:D,headers:y,status:b,statusText:S,url:T||void 0})),i.complete()):i.error(new hi({error:D,headers:y,status:b,statusText:S,url:T||void 0}))},h=y=>{let{url:b}=u(),S=new hi({error:y,status:s.status||0,statusText:s.statusText||"Unknown Error",url:b||void 0});i.error(S)},p=!1,f=y=>{p||(i.next(u()),p=!0);let b={type:cr.DownloadProgress,loaded:y.loaded};y.lengthComputable&&(b.total=y.total),n.responseType==="text"&&s.responseText&&(b.partialText=s.responseText),i.next(b)},g=y=>{let b={type:cr.UploadProgress,loaded:y.loaded};y.lengthComputable&&(b.total=y.total),i.next(b)};return s.addEventListener("load",d),s.addEventListener("error",h),s.addEventListener("timeout",h),s.addEventListener("abort",h),n.reportProgress&&(s.addEventListener("progress",f),c!==null&&s.upload&&s.upload.addEventListener("progress",g)),s.send(c),i.next({type:cr.Sent}),()=>{s.removeEventListener("error",h),s.removeEventListener("abort",h),s.removeEventListener("load",d),s.removeEventListener("timeout",h),n.reportProgress&&(s.removeEventListener("progress",f),c!==null&&s.upload&&s.upload.removeEventListener("progress",g)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(r){return new(r||e)(A(ar))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),xy=new N(""),kC="XSRF-TOKEN",NC=new N("",{providedIn:"root",factory:()=>kC}),OC="X-XSRF-TOKEN",AC=new N("",{providedIn:"root",factory:()=>OC}),pi=class{},FC=(()=>{class e{doc;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(n,r){this.doc=n,this.cookieName=r}getToken(){let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=si(n,this.cookieName),this.lastCookieString=n),this.lastToken}static \u0275fac=function(r){return new(r||e)(A(Oe),A(NC))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();function LC(e,t){let n=e.url.toLowerCase();if(!P(xy)||e.method==="GET"||e.method==="HEAD"||n.startsWith("http://")||n.startsWith("https://"))return t(e);let r=P(pi).getToken(),o=P(AC);return r!=null&&!e.headers.has(o)&&(e=e.clone({headers:e.headers.set(o,r)})),t(e)}function cd(...e){let t=[Ba,ad,ja,{provide:Kr,useExisting:ja},{provide:di,useFactory:()=>P(IC,{optional:!0})??P(ad)},{provide:Ry,useValue:LC,multi:!0},{provide:xy,useValue:!0},{provide:pi,useClass:FC}];for(let n of e)t.push(...n.\u0275providers);return ha(t)}var ky=(()=>{class e{_doc;constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}static \u0275fac=function(r){return new(r||e)(A(Oe))};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var V="primary",Ii=Symbol("RouteTitle"),hd=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}};function ro(e){return new hd(e)}function jC(e,t,n){let r=n.path.split("/");if(r.length>e.length||n.pathMatch==="full"&&(t.hasChildren()||r.length<e.length))return null;let o={};for(let i=0;i<r.length;i++){let s=r[i],c=e[i];if(s[0]===":")o[s.substring(1)]=c;else if(s!==c.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}function BC(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!Vt(e[n],t[n]))return!1;return!0}function Vt(e,t){let n=e?pd(e):void 0,r=t?pd(t):void 0;if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!jy(e[o],t[o]))return!1;return!0}function pd(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function jy(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;let n=[...e].sort(),r=[...t].sort();return n.every((o,i)=>r[i]===o)}else return e===t}function By(e){return e.length>0?e[e.length-1]:null}function On(e){return Ol(e)?e:Ra(e)?fe(Promise.resolve(e)):L(e)}var VC={exact:$y,subset:zy},Vy={exact:$C,subset:zC,ignored:()=>!0};function Ny(e,t,n){return VC[n.paths](e.root,t.root,n.matrixParams)&&Vy[n.queryParams](e.queryParams,t.queryParams)&&!(n.fragment==="exact"&&e.fragment!==t.fragment)}function $C(e,t){return Vt(e,t)}function $y(e,t,n){if(!ur(e.segments,t.segments)||!za(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(let r in t.children)if(!e.children[r]||!$y(e.children[r],t.children[r],n))return!1;return!0}function zC(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>jy(e[n],t[n]))}function zy(e,t,n){return qy(e,t,t.segments,n)}function qy(e,t,n,r){if(e.segments.length>n.length){let o=e.segments.slice(0,n.length);return!(!ur(o,n)||t.hasChildren()||!za(o,n,r))}else if(e.segments.length===n.length){if(!ur(e.segments,n)||!za(e.segments,n,r))return!1;for(let o in t.children)if(!e.children[o]||!zy(e.children[o],t.children[o],r))return!1;return!0}else{let o=n.slice(0,e.segments.length),i=n.slice(e.segments.length);return!ur(e.segments,o)||!za(e.segments,o,r)||!e.children[V]?!1:qy(e.children[V],t,i,r)}}function za(e,t,n){return t.every((r,o)=>Vy[n](e[o].parameters,r.parameters))}var an=class{root;queryParams;fragment;_queryParamMap;constructor(t=new ne([],{}),n={},r=null){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap??=ro(this.queryParams),this._queryParamMap}toString(){return GC.serialize(this)}},ne=class{segments;children;parent=null;constructor(t,n){this.segments=t,this.children=n,Object.values(n).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return qa(this)}},lr=class{path;parameters;_parameterMap;constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap??=ro(this.parameters),this._parameterMap}toString(){return Gy(this)}};function qC(e,t){return ur(e,t)&&e.every((n,r)=>Vt(n.parameters,t[r].parameters))}function ur(e,t){return e.length!==t.length?!1:e.every((n,r)=>n.path===t[r].path)}function WC(e,t){let n=[];return Object.entries(e.children).forEach(([r,o])=>{r===V&&(n=n.concat(t(o,r)))}),Object.entries(e.children).forEach(([r,o])=>{r!==V&&(n=n.concat(t(o,r)))}),n}var oc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>new oo,providedIn:"root"})}return e})(),oo=class{parse(t){let n=new gd(t);return new an(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){let n=`/${mi(t.root,!0)}`,r=KC(t.queryParams),o=typeof t.fragment=="string"?`#${QC(t.fragment)}`:"";return`${n}${r}${o}`}},GC=new oo;function qa(e){return e.segments.map(t=>Gy(t)).join("/")}function mi(e,t){if(!e.hasChildren())return qa(e);if(t){let n=e.children[V]?mi(e.children[V],!1):"",r=[];return Object.entries(e.children).forEach(([o,i])=>{o!==V&&r.push(`${o}:${mi(i,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}else{let n=WC(e,(r,o)=>o===V?[mi(e.children[V],!1)]:[`${o}:${mi(r,!1)}`]);return Object.keys(e.children).length===1&&e.children[V]!=null?`${qa(e)}/${n[0]}`:`${qa(e)}/(${n.join("//")})`}}function Wy(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Va(e){return Wy(e).replace(/%3B/gi,";")}function QC(e){return encodeURI(e)}function md(e){return Wy(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Wa(e){return decodeURIComponent(e)}function Oy(e){return Wa(e.replace(/\+/g,"%20"))}function Gy(e){return`${md(e.path)}${YC(e.parameters)}`}function YC(e){return Object.entries(e).map(([t,n])=>`;${md(t)}=${md(n)}`).join("")}function KC(e){let t=Object.entries(e).map(([n,r])=>Array.isArray(r)?r.map(o=>`${Va(n)}=${Va(o)}`).join("&"):`${Va(n)}=${Va(r)}`).filter(n=>n);return t.length?`?${t.join("&")}`:""}var ZC=/^[^\/()?;#]+/;function ld(e){let t=e.match(ZC);return t?t[0]:""}var JC=/^[^\/()?;=#]+/;function XC(e){let t=e.match(JC);return t?t[0]:""}var eI=/^[^=?&#]+/;function tI(e){let t=e.match(eI);return t?t[0]:""}var nI=/^[^&#]+/;function rI(e){let t=e.match(nI);return t?t[0]:""}var gd=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ne([],{}):new ne([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(r[V]=new ne(t,n)),r}parseSegment(){let t=ld(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new O(4009,!1);return this.capture(t),new lr(Wa(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let n=XC(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let o=ld(this.remaining);o&&(r=o,this.capture(r))}t[Wa(n)]=Wa(r)}parseQueryParam(t){let n=tI(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let s=rI(this.remaining);s&&(r=s,this.capture(r))}let o=Oy(n),i=Oy(r);if(t.hasOwnProperty(o)){let s=t[o];Array.isArray(s)||(s=[s],t[o]=s),s.push(i)}else t[o]=i}parseParens(t){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=ld(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new O(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):t&&(i=V);let s=this.parseChildren();n[i]=Object.keys(s).length===1?s[V]:new ne([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new O(4011,!1)}};function Qy(e){return e.segments.length>0?new ne([],{[V]:e}):e}function Yy(e){let t={};for(let[r,o]of Object.entries(e.children)){let i=Yy(o);if(r===V&&i.segments.length===0&&i.hasChildren())for(let[s,c]of Object.entries(i.children))t[s]=c;else(i.segments.length>0||i.hasChildren())&&(t[r]=i)}let n=new ne(e.segments,t);return oI(n)}function oI(e){if(e.numberOfChildren===1&&e.children[V]){let t=e.children[V];return new ne(e.segments.concat(t.segments),t.children)}return e}function io(e){return e instanceof an}function iI(e,t,n=null,r=null){let o=Ky(e);return Zy(o,t,n,r)}function Ky(e){let t;function n(i){let s={};for(let l of i.children){let u=n(l);s[l.outlet]=u}let c=new ne(i.url,s);return i===e&&(t=c),c}let r=n(e.root),o=Qy(r);return t??o}function Zy(e,t,n,r){let o=e;for(;o.parent;)o=o.parent;if(t.length===0)return ud(o,o,o,n,r);let i=sI(t);if(i.toRoot())return ud(o,o,new ne([],{}),n,r);let s=aI(i,o,e),c=s.processChildren?yi(s.segmentGroup,s.index,i.commands):Xy(s.segmentGroup,s.index,i.commands);return ud(o,s.segmentGroup,c,n,r)}function Qa(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function Si(e){return typeof e=="object"&&e!=null&&e.outlets}function ud(e,t,n,r,o){let i={};r&&Object.entries(r).forEach(([l,u])=>{i[l]=Array.isArray(u)?u.map(d=>`${d}`):`${u}`});let s;e===t?s=n:s=Jy(e,t,n);let c=Qy(Yy(s));return new an(c,i,o)}function Jy(e,t,n){let r={};return Object.entries(e.children).forEach(([o,i])=>{i===t?r[o]=n:r[o]=Jy(i,t,n)}),new ne(e.segments,r)}var Ya=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&Qa(r[0]))throw new O(4003,!1);let o=r.find(Si);if(o&&o!==By(r))throw new O(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function sI(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new Ya(!0,0,e);let t=0,n=!1,r=e.reduce((o,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let c={};return Object.entries(i.outlets).forEach(([l,u])=>{c[l]=typeof u=="string"?u.split("/"):u}),[...o,{outlets:c}]}if(i.segmentPath)return[...o,i.segmentPath]}return typeof i!="string"?[...o,i]:s===0?(i.split("/").forEach((c,l)=>{l==0&&c==="."||(l==0&&c===""?n=!0:c===".."?t++:c!=""&&o.push(c))}),o):[...o,i]},[]);return new Ya(n,t,r)}var eo=class{segmentGroup;processChildren;index;constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}};function aI(e,t,n){if(e.isAbsolute)return new eo(t,!0,0);if(!n)return new eo(t,!1,NaN);if(n.parent===null)return new eo(n,!0,0);let r=Qa(e.commands[0])?0:1,o=n.segments.length-1+r;return cI(n,o,e.numberOfDoubleDots)}function cI(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new O(4005,!1);o=r.segments.length}return new eo(r,!1,o-i)}function lI(e){return Si(e[0])?e[0].outlets:{[V]:e}}function Xy(e,t,n){if(e??=new ne([],{}),e.segments.length===0&&e.hasChildren())return yi(e,t,n);let r=uI(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){let i=new ne(e.segments.slice(0,r.pathIndex),{});return i.children[V]=new ne(e.segments.slice(r.pathIndex),e.children),yi(i,0,o)}else return r.match&&o.length===0?new ne(e.segments,{}):r.match&&!e.hasChildren()?yd(e,t,n):r.match?yi(e,0,o):yd(e,t,n)}function yi(e,t,n){if(n.length===0)return new ne(e.segments,{});{let r=lI(n),o={};if(Object.keys(r).some(i=>i!==V)&&e.children[V]&&e.numberOfChildren===1&&e.children[V].segments.length===0){let i=yi(e.children[V],t,n);return new ne(e.segments,i.children)}return Object.entries(r).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(o[i]=Xy(e.children[i],t,s))}),Object.entries(e.children).forEach(([i,s])=>{r[i]===void 0&&(o[i]=s)}),new ne(e.segments,o)}}function uI(e,t,n){let r=0,o=t,i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;let s=e.segments[o],c=n[r];if(Si(c))break;let l=`${c}`,u=r<n.length-1?n[r+1]:null;if(o>0&&l===void 0)break;if(l&&u&&typeof u=="object"&&u.outlets===void 0){if(!Fy(l,u,s))return i;r+=2}else{if(!Fy(l,{},s))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}function yd(e,t,n){let r=e.segments.slice(0,t),o=0;for(;o<n.length;){let i=n[o];if(Si(i)){let l=dI(i.outlets);return new ne(r,l)}if(o===0&&Qa(n[0])){let l=e.segments[t];r.push(new lr(l.path,Ay(n[0]))),o++;continue}let s=Si(i)?i.outlets[V]:`${i}`,c=o<n.length-1?n[o+1]:null;s&&c&&Qa(c)?(r.push(new lr(s,Ay(c))),o+=2):(r.push(new lr(s,{})),o++)}return new ne(r,{})}function dI(e){let t={};return Object.entries(e).forEach(([n,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(t[n]=yd(new ne([],{}),0,r))}),t}function Ay(e){let t={};return Object.entries(e).forEach(([n,r])=>t[n]=`${r}`),t}function Fy(e,t,n){return e==n.path&&Vt(t,n.parameters)}var Ga="imperative",He=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(He||{}),vt=class{id;url;constructor(t,n){this.id=t,this.url=n}},so=class extends vt{type=He.NavigationStart;navigationTrigger;restoredState;constructor(t,n,r="imperative",o=null){super(t,n),this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},kn=class extends vt{urlAfterRedirects;type=He.NavigationEnd;constructor(t,n,r){super(t,n),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},at=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e}(at||{}),Ka=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}(Ka||{}),sn=class extends vt{reason;code;type=He.NavigationCancel;constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Nn=class extends vt{reason;code;type=He.NavigationSkipped;constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o}},bi=class extends vt{error;target;type=He.NavigationError;constructor(t,n,r,o){super(t,n),this.error=r,this.target=o}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Za=class extends vt{urlAfterRedirects;state;type=He.RoutesRecognized;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},vd=class extends vt{urlAfterRedirects;state;type=He.GuardsCheckStart;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Sd=class extends vt{urlAfterRedirects;state;shouldActivate;type=He.GuardsCheckEnd;constructor(t,n,r,o,i){super(t,n),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},bd=class extends vt{urlAfterRedirects;state;type=He.ResolveStart;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Dd=class extends vt{urlAfterRedirects;state;type=He.ResolveEnd;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},wd=class{route;type=He.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Td=class{route;type=He.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Ed=class{snapshot;type=He.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Cd=class{snapshot;type=He.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Id=class{snapshot;type=He.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Pd=class{snapshot;type=He.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Di=class{},ao=class{url;navigationBehaviorOptions;constructor(t,n){this.url=t,this.navigationBehaviorOptions=n}};function fI(e,t){return e.providers&&!e._injector&&(e._injector=Pa(e.providers,t,`Route: ${e.path}`)),e._injector??t}function xt(e){return e.outlet||V}function hI(e,t){let n=e.filter(r=>xt(r)===t);return n.push(...e.filter(r=>xt(r)!==t)),n}function Pi(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let t=e.parent;t;t=t.parent){let n=t.routeConfig;if(n?._loadedInjector)return n._loadedInjector;if(n?._injector)return n._injector}return null}var Rd=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Pi(this.route?.snapshot)??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new Ri(this.rootInjector)}},Ri=(()=>{class e{rootInjector;contexts=new Map;constructor(n){this.rootInjector=n}onChildOutletCreated(n,r){let o=this.getOrCreateContext(n);o.outlet=r,this.contexts.set(n,o)}onChildOutletDestroyed(n){let r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new Rd(this.rootInjector),this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}static \u0275fac=function(r){return new(r||e)(A(Ze))};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ja=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){let n=Md(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){let n=Md(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){let n=_d(t,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==t)}pathFromRoot(t){return _d(t,this._root).map(n=>n.value)}};function Md(e,t){if(e===t.value)return t;for(let n of t.children){let r=Md(e,n);if(r)return r}return null}function _d(e,t){if(e===t.value)return[t];for(let n of t.children){let r=_d(e,n);if(r.length)return r.unshift(t),r}return[]}var st=class{value;children;constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}};function Xr(e){let t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t}var Xa=class extends Ja{snapshot;constructor(t,n){super(t),this.snapshot=n,Ud(this,t)}toString(){return this.snapshot.toString()}};function ev(e){let t=pI(e),n=new Se([new lr("",{})]),r=new Se({}),o=new Se({}),i=new Se({}),s=new Se(""),c=new dr(n,r,i,s,o,V,e,t.root);return c.snapshot=t.root,new Xa(new st(c,[]),t)}function pI(e){let t={},n={},r={},o="",i=new to([],t,r,o,n,V,e,null,{});return new tc("",new st(i,[]))}var dr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,n,r,o,i,s,c,l){this.urlSubject=t,this.paramsSubject=n,this.queryParamsSubject=r,this.fragmentSubject=o,this.dataSubject=i,this.outlet=s,this.component=c,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(F(u=>u[Ii]))??L(void 0),this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(F(t=>ro(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(F(t=>ro(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ec(e,t,n="emptyOnly"){let r,{routeConfig:o}=e;return t!==null&&(n==="always"||o?.path===""||!t.component&&!t.routeConfig?.loadComponent)?r={params:M(M({},t.params),e.params),data:M(M({},t.data),e.data),resolve:M(M(M(M({},e.data),t.data),o?.data),e._resolvedData)}:r={params:M({},e.params),data:M({},e.data),resolve:M(M({},e.data),e._resolvedData??{})},o&&nv(o)&&(r.resolve[Ii]=o.title),r}var to=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Ii]}constructor(t,n,r,o,i,s,c,l,u){this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=c,this.routeConfig=l,this._resolve=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ro(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ro(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(r=>r.toString()).join("/"),n=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${n}')`}},tc=class extends Ja{url;constructor(t,n){super(n),this.url=t,Ud(this,n)}toString(){return tv(this._root)}};function Ud(e,t){t.value._routerState=e,t.children.forEach(n=>Ud(e,n))}function tv(e){let t=e.children.length>0?` { ${e.children.map(tv).join(", ")} } `:"";return`${e.value}${t}`}function dd(e){if(e.snapshot){let t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,Vt(t.queryParams,n.queryParams)||e.queryParamsSubject.next(n.queryParams),t.fragment!==n.fragment&&e.fragmentSubject.next(n.fragment),Vt(t.params,n.params)||e.paramsSubject.next(n.params),BC(t.url,n.url)||e.urlSubject.next(n.url),Vt(t.data,n.data)||e.dataSubject.next(n.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function xd(e,t){let n=Vt(e.params,t.params)&&qC(e.url,t.url),r=!e.parent!=!t.parent;return n&&!r&&(!e.parent||xd(e.parent,t.parent))}function nv(e){return typeof e.title=="string"||e.title===null}var mI=new N(""),rv=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=V;activateEvents=new Ke;deactivateEvents=new Ke;attachEvents=new Ke;detachEvents=new Ke;routerOutletData=Xm(void 0);parentContexts=P(Ri);location=P(Ia);changeDetector=P(Qu);inputBinder=P(ic,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(n){if(n.name){let{firstChange:r,previousValue:o}=n.name;if(r)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(n){return this.parentContexts.getContext(n)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let n=this.parentContexts.getContext(this.name);n?.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new O(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new O(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new O(4012,!1);this.location.detach();let n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){let n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new O(4013,!1);this._activatedRoute=n;let o=this.location,s=n.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new kd(n,c,o.injector,this.routerOutletData);this.activated=o.createComponent(s,{index:o.length,injector:l,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(r){return new(r||e)};static \u0275dir=Wu({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ru]})}return e})(),kd=class{route;childContexts;parent;outletData;constructor(t,n,r,o){this.route=t,this.childContexts=n,this.parent=r,this.outletData=o}get(t,n){return t===dr?this.route:t===Ri?this.childContexts:t===mI?this.outletData:this.parent.get(t,n)}},ic=new N("");var ov=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=te({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(r,o){r&1&&ge(0,"router-outlet")},dependencies:[rv],encapsulation:2})}return e})();function jd(e){let t=e.children&&e.children.map(jd),n=t?ae(M({},e),{children:t}):M({},e);return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==V&&(n.component=ov),n}function gI(e,t,n){let r=wi(e,t._root,n?n._root:void 0);return new Xa(r,t)}function wi(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){let r=n.value;r._futureSnapshot=t.value;let o=yI(e,t,n);return new st(r,o)}else{if(e.shouldAttach(t.value)){let i=e.retrieve(t.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(c=>wi(e,c)),s}}let r=vI(t.value),o=t.children.map(i=>wi(e,i));return new st(r,o)}}function yI(e,t,n){return t.children.map(r=>{for(let o of n.children)if(e.shouldReuseRoute(r.value,o.value.snapshot))return wi(e,r,o);return wi(e,r)})}function vI(e){return new dr(new Se(e.url),new Se(e.params),new Se(e.queryParams),new Se(e.fragment),new Se(e.data),e.outlet,e.component,e)}var Ti=class{redirectTo;navigationBehaviorOptions;constructor(t,n){this.redirectTo=t,this.navigationBehaviorOptions=n}},iv="ngNavigationCancelingError";function nc(e,t){let{redirectTo:n,navigationBehaviorOptions:r}=io(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,o=sv(!1,at.Redirect);return o.url=n,o.navigationBehaviorOptions=r,o}function sv(e,t){let n=new Error(`NavigationCancelingError: ${e||""}`);return n[iv]=!0,n.cancellationCode=t,n}function SI(e){return av(e)&&io(e.url)}function av(e){return!!e&&e[iv]}var bI=(e,t,n,r)=>F(o=>(new Nd(t,o.targetRouterState,o.currentRouterState,n,r).activate(e),o)),Nd=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,n,r,o,i){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=o,this.inputBindingEnabled=i}activate(t){let n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),dd(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){let o=Xr(n);t.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,o[s],r),delete o[s]}),Object.values(o).forEach(i=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(o===i)if(o.component){let s=r.getContext(o.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,r);else i&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=Xr(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);if(r&&r.outlet){let s=r.outlet.detach(),c=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:c})}}deactivateRouteAndOutlet(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=Xr(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(t,n,r){let o=Xr(n);t.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new Pd(i.value.snapshot))}),t.children.length&&this.forwardEvent(new Cd(t.value.snapshot))}activateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(dd(o),o===i)if(o.component){let s=r.getOrCreateContext(o.outlet);this.activateChildRoutes(t,n,s.children)}else this.activateChildRoutes(t,n,r);else if(o.component){let s=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let c=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),s.children.onOutletReAttached(c.contexts),s.attachRef=c.componentRef,s.route=c.route.value,s.outlet&&s.outlet.attach(c.componentRef,c.route.value),dd(c.route.value),this.activateChildRoutes(t,null,s.children)}else s.attachRef=null,s.route=o,s.outlet&&s.outlet.activateWith(o,s.injector),this.activateChildRoutes(t,null,s.children)}else this.activateChildRoutes(t,null,r)}},rc=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},no=class{component;route;constructor(t,n){this.component=t,this.route=n}};function DI(e,t,n){let r=e._root,o=t?t._root:null;return gi(r,o,n,[r.value])}function wI(e){let t=e.routeConfig?e.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:e,guards:t}}function lo(e,t){let n=Symbol(),r=t.get(e,n);return r===n?typeof e=="function"&&!Yp(e)?e:t.get(e):r}function gi(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=Xr(t);return e.children.forEach(s=>{TI(s,i[s.value.outlet],n,r.concat([s.value]),o),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,c])=>vi(c,n.getContext(s),o)),o}function TI(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,s=t?t.value:null,c=n?n.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let l=EI(s,i,i.routeConfig.runGuardsAndResolvers);l?o.canActivateChecks.push(new rc(r)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?gi(e,t,c?c.children:null,r,o):gi(e,t,n,r,o),l&&c&&c.outlet&&c.outlet.isActivated&&o.canDeactivateChecks.push(new no(c.outlet.component,s))}else s&&vi(t,c,o),o.canActivateChecks.push(new rc(r)),i.component?gi(e,null,c?c.children:null,r,o):gi(e,null,n,r,o);return o}function EI(e,t,n){if(typeof n=="function")return n(e,t);switch(n){case"pathParamsChange":return!ur(e.url,t.url);case"pathParamsOrQueryParamsChange":return!ur(e.url,t.url)||!Vt(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!xd(e,t)||!Vt(e.queryParams,t.queryParams);case"paramsChange":default:return!xd(e,t)}}function vi(e,t,n){let r=Xr(e),o=e.value;Object.entries(r).forEach(([i,s])=>{o.component?t?vi(s,t.children.getContext(i),n):vi(s,null,n):vi(s,t,n)}),o.component?t&&t.outlet&&t.outlet.isActivated?n.canDeactivateChecks.push(new no(t.outlet.component,o)):n.canDeactivateChecks.push(new no(null,o)):n.canDeactivateChecks.push(new no(null,o))}function Mi(e){return typeof e=="function"}function CI(e){return typeof e=="boolean"}function II(e){return e&&Mi(e.canLoad)}function PI(e){return e&&Mi(e.canActivate)}function RI(e){return e&&Mi(e.canActivateChild)}function MI(e){return e&&Mi(e.canDeactivate)}function _I(e){return e&&Mi(e.canMatch)}function cv(e){return e instanceof Kt||e?.name==="EmptyError"}var $a=Symbol("INITIAL_VALUE");function co(){return rt(e=>As(e.map(t=>t.pipe(Zt(1),Vo($a)))).pipe(F(t=>{for(let n of t)if(n!==!0){if(n===$a)return $a;if(n===!1||xI(n))return n}return!0}),nt(t=>t!==$a),Zt(1)))}function xI(e){return io(e)||e instanceof Ti}function kI(e,t){return Re(n=>{let{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return s.length===0&&i.length===0?L(ae(M({},n),{guardsResult:!0})):NI(s,r,o,e).pipe(Re(c=>c&&CI(c)?OI(r,i,e,t):L(c)),F(c=>ae(M({},n),{guardsResult:c})))})}function NI(e,t,n,r){return fe(e).pipe(Re(o=>UI(o.component,o.route,n,t,r)),Jt(o=>o!==!0,!0))}function OI(e,t,n,r){return fe(t).pipe(Dn(o=>Nr(FI(o.route.parent,r),AI(o.route,r),HI(e,o.path,n),LI(e,o.route,n))),Jt(o=>o!==!0,!0))}function AI(e,t){return e!==null&&t&&t(new Id(e)),L(!0)}function FI(e,t){return e!==null&&t&&t(new Ed(e)),L(!0)}function LI(e,t,n){let r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||r.length===0)return L(!0);let o=r.map(i=>Fs(()=>{let s=Pi(t)??n,c=lo(i,s),l=PI(c)?c.canActivate(t,e):it(s,()=>c(t,e));return On(l).pipe(Jt())}));return L(o).pipe(co())}function HI(e,t,n){let r=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(s=>wI(s)).filter(s=>s!==null).map(s=>Fs(()=>{let c=s.guards.map(l=>{let u=Pi(s.node)??n,d=lo(l,u),h=RI(d)?d.canActivateChild(r,e):it(u,()=>d(r,e));return On(h).pipe(Jt())});return L(c).pipe(co())}));return L(i).pipe(co())}function UI(e,t,n,r,o){let i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!i||i.length===0)return L(!0);let s=i.map(c=>{let l=Pi(t)??o,u=lo(c,l),d=MI(u)?u.canDeactivate(e,t,n,r):it(l,()=>u(e,t,n,r));return On(d).pipe(Jt())});return L(s).pipe(co())}function jI(e,t,n,r){let o=t.canLoad;if(o===void 0||o.length===0)return L(!0);let i=o.map(s=>{let c=lo(s,e),l=II(c)?c.canLoad(t,n):it(e,()=>c(t,n));return On(l)});return L(i).pipe(co(),lv(r))}function lv(e){return Pl(Le(t=>{if(typeof t!="boolean")throw nc(e,t)}),F(t=>t===!0))}function BI(e,t,n,r){let o=t.canMatch;if(!o||o.length===0)return L(!0);let i=o.map(s=>{let c=lo(s,e),l=_I(c)?c.canMatch(t,n):it(e,()=>c(t,n));return On(l)});return L(i).pipe(co(),lv(r))}var Ei=class{segmentGroup;constructor(t){this.segmentGroup=t||null}},Ci=class extends Error{urlTree;constructor(t){super(),this.urlTree=t}};function Jr(e){return kr(new Ei(e))}function VI(e){return kr(new O(4e3,!1))}function $I(e){return kr(sv(!1,at.GuardRejected))}var Od=class{urlSerializer;urlTree;constructor(t,n){this.urlSerializer=t,this.urlTree=n}lineralizeSegments(t,n){let r=[],o=n.root;for(;;){if(r=r.concat(o.segments),o.numberOfChildren===0)return L(r);if(o.numberOfChildren>1||!o.children[V])return VI(`${t.redirectTo}`);o=o.children[V]}}applyRedirectCommands(t,n,r,o,i){if(typeof n!="string"){let c=n,{queryParams:l,fragment:u,routeConfig:d,url:h,outlet:p,params:f,data:g,title:y}=o,b=it(i,()=>c({params:f,data:g,queryParams:l,fragment:u,routeConfig:d,url:h,outlet:p,title:y}));if(b instanceof an)throw new Ci(b);n=b}let s=this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),t,r);if(n[0]==="/")throw new Ci(s);return s}applyRedirectCreateUrlTree(t,n,r,o){let i=this.createSegmentGroup(t,n.root,r,o);return new an(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){let r={};return Object.entries(t).forEach(([o,i])=>{if(typeof i=="string"&&i[0]===":"){let c=i.substring(1);r[o]=n[c]}else r[o]=i}),r}createSegmentGroup(t,n,r,o){let i=this.createSegments(t,n.segments,r,o),s={};return Object.entries(n.children).forEach(([c,l])=>{s[c]=this.createSegmentGroup(t,l,r,o)}),new ne(i,s)}createSegments(t,n,r,o){return n.map(i=>i.path[0]===":"?this.findPosParam(t,i,o):this.findOrReturn(i,r))}findPosParam(t,n,r){let o=r[n.path.substring(1)];if(!o)throw new O(4001,!1);return o}findOrReturn(t,n){let r=0;for(let o of n){if(o.path===t.path)return n.splice(r),o;r++}return t}},Ad={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function zI(e,t,n,r,o){let i=uv(e,t,n);return i.matched?(r=fI(t,r),BI(r,t,n,o).pipe(F(s=>s===!0?i:M({},Ad)))):L(i)}function uv(e,t,n){if(t.path==="**")return qI(n);if(t.path==="")return t.pathMatch==="full"&&(e.hasChildren()||n.length>0)?M({},Ad):{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};let o=(t.matcher||jC)(n,e,t);if(!o)return M({},Ad);let i={};Object.entries(o.posParams??{}).forEach(([c,l])=>{i[c]=l.path});let s=o.consumed.length>0?M(M({},i),o.consumed[o.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:o.consumed,remainingSegments:n.slice(o.consumed.length),parameters:s,positionalParamSegments:o.posParams??{}}}function qI(e){return{matched:!0,parameters:e.length>0?By(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function Ly(e,t,n,r){return n.length>0&&QI(e,n,r)?{segmentGroup:new ne(t,GI(r,new ne(n,e.children))),slicedSegments:[]}:n.length===0&&YI(e,n,r)?{segmentGroup:new ne(e.segments,WI(e,n,r,e.children)),slicedSegments:n}:{segmentGroup:new ne(e.segments,e.children),slicedSegments:n}}function WI(e,t,n,r){let o={};for(let i of n)if(sc(e,t,i)&&!r[xt(i)]){let s=new ne([],{});o[xt(i)]=s}return M(M({},r),o)}function GI(e,t){let n={};n[V]=t;for(let r of e)if(r.path===""&&xt(r)!==V){let o=new ne([],{});n[xt(r)]=o}return n}function QI(e,t,n){return n.some(r=>sc(e,t,r)&&xt(r)!==V)}function YI(e,t,n){return n.some(r=>sc(e,t,r))}function sc(e,t,n){return(e.hasChildren()||t.length>0)&&n.pathMatch==="full"?!1:n.path===""}function KI(e,t,n){return t.length===0&&!e.children[n]}var Fd=class{};function ZI(e,t,n,r,o,i,s="emptyOnly"){return new Ld(e,t,n,r,o,s,i).recognize()}var JI=31,Ld=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,n,r,o,i,s,c){this.injector=t,this.configLoader=n,this.rootComponentType=r,this.config=o,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=c,this.applyRedirects=new Od(this.urlSerializer,this.urlTree)}noMatchError(t){return new O(4002,`'${t.segmentGroup}'`)}recognize(){let t=Ly(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(F(({children:n,rootSnapshot:r})=>{let o=new st(r,n),i=new tc("",o),s=iI(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}}))}match(t){let n=new to([],Object.freeze({}),Object.freeze(M({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),V,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,t,V,n).pipe(F(r=>({children:r,rootSnapshot:n})),bn(r=>{if(r instanceof Ci)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof Ei?this.noMatchError(r):r}))}processSegmentGroup(t,n,r,o,i){return r.segments.length===0&&r.hasChildren()?this.processChildren(t,n,r,i):this.processSegment(t,n,r,r.segments,o,!0,i).pipe(F(s=>s instanceof st?[s]:[]))}processChildren(t,n,r,o){let i=[];for(let s of Object.keys(r.children))s==="primary"?i.unshift(s):i.push(s);return fe(i).pipe(Dn(s=>{let c=r.children[s],l=hI(n,s);return this.processSegmentGroup(t,l,c,s,o)}),Fl((s,c)=>(s.push(...c),s)),wn(null),Al(),Re(s=>{if(s===null)return Jr(r);let c=dv(s);return XI(c),L(c)}))}processSegment(t,n,r,o,i,s,c){return fe(n).pipe(Dn(l=>this.processSegmentAgainstRoute(l._injector??t,n,l,r,o,i,s,c).pipe(bn(u=>{if(u instanceof Ei)return L(null);throw u}))),Jt(l=>!!l),bn(l=>{if(cv(l))return KI(r,o,i)?L(new Fd):Jr(r);throw l}))}processSegmentAgainstRoute(t,n,r,o,i,s,c,l){return xt(r)!==s&&(s===V||!sc(o,i,r))?Jr(o):r.redirectTo===void 0?this.matchSegmentAgainstRoute(t,o,r,i,s,l):this.allowRedirects&&c?this.expandSegmentAgainstRouteUsingRedirect(t,o,n,r,i,s,l):Jr(o)}expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s,c){let{matched:l,parameters:u,consumedSegments:d,positionalParamSegments:h,remainingSegments:p}=uv(n,o,i);if(!l)return Jr(n);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>JI&&(this.allowRedirects=!1));let f=new to(i,u,Object.freeze(M({},this.urlTree.queryParams)),this.urlTree.fragment,Hy(o),xt(o),o.component??o._loadedComponent??null,o,Uy(o)),g=ec(f,c,this.paramsInheritanceStrategy);f.params=Object.freeze(g.params),f.data=Object.freeze(g.data);let y=this.applyRedirects.applyRedirectCommands(d,o.redirectTo,h,f,t);return this.applyRedirects.lineralizeSegments(o,y).pipe(Re(b=>this.processSegment(t,r,n,b.concat(p),s,!1,c)))}matchSegmentAgainstRoute(t,n,r,o,i,s){let c=zI(n,r,o,t,this.urlSerializer);return r.path==="**"&&(n.children={}),c.pipe(rt(l=>l.matched?(t=r._injector??t,this.getChildConfig(t,r,o).pipe(rt(({routes:u})=>{let d=r._loadedInjector??t,{parameters:h,consumedSegments:p,remainingSegments:f}=l,g=new to(p,h,Object.freeze(M({},this.urlTree.queryParams)),this.urlTree.fragment,Hy(r),xt(r),r.component??r._loadedComponent??null,r,Uy(r)),y=ec(g,s,this.paramsInheritanceStrategy);g.params=Object.freeze(y.params),g.data=Object.freeze(y.data);let{segmentGroup:b,slicedSegments:S}=Ly(n,p,f,u);if(S.length===0&&b.hasChildren())return this.processChildren(d,u,b,g).pipe(F(D=>new st(g,D)));if(u.length===0&&S.length===0)return L(new st(g,[]));let T=xt(r)===i;return this.processSegment(d,u,b,S,T?V:i,!0,g).pipe(F(D=>new st(g,D instanceof st?[D]:[])))}))):Jr(n)))}getChildConfig(t,n,r){return n.children?L({routes:n.children,injector:t}):n.loadChildren?n._loadedRoutes!==void 0?L({routes:n._loadedRoutes,injector:n._loadedInjector}):jI(t,n,r,this.urlSerializer).pipe(Re(o=>o?this.configLoader.loadChildren(t,n).pipe(Le(i=>{n._loadedRoutes=i.routes,n._loadedInjector=i.injector})):$I(n))):L({routes:[],injector:t})}};function XI(e){e.sort((t,n)=>t.value.outlet===V?-1:n.value.outlet===V?1:t.value.outlet.localeCompare(n.value.outlet))}function eP(e){let t=e.value.routeConfig;return t&&t.path===""}function dv(e){let t=[],n=new Set;for(let r of e){if(!eP(r)){t.push(r);continue}let o=t.find(i=>r.value.routeConfig===i.value.routeConfig);o!==void 0?(o.children.push(...r.children),n.add(o)):t.push(r)}for(let r of n){let o=dv(r.children);t.push(new st(r.value,o))}return t.filter(r=>!n.has(r))}function Hy(e){return e.data||{}}function Uy(e){return e.resolve||{}}function tP(e,t,n,r,o,i){return Re(s=>ZI(e,t,n,r,s.extractedUrl,o,i).pipe(F(({state:c,tree:l})=>ae(M({},s),{targetSnapshot:c,urlAfterRedirects:l}))))}function nP(e,t){return Re(n=>{let{targetSnapshot:r,guards:{canActivateChecks:o}}=n;if(!o.length)return L(n);let i=new Set(o.map(l=>l.route)),s=new Set;for(let l of i)if(!s.has(l))for(let u of fv(l))s.add(u);let c=0;return fe(s).pipe(Dn(l=>i.has(l)?rP(l,r,e,t):(l.data=ec(l,l.parent,e).resolve,L(void 0))),Le(()=>c++),Or(1),Re(l=>c===s.size?L(n):Ge))})}function fv(e){let t=e.children.map(n=>fv(n)).flat();return[e,...t]}function rP(e,t,n,r){let o=e.routeConfig,i=e._resolve;return o?.title!==void 0&&!nv(o)&&(i[Ii]=o.title),oP(i,e,t,r).pipe(F(s=>(e._resolvedData=s,e.data=ec(e,e.parent,n).resolve,null)))}function oP(e,t,n,r){let o=pd(e);if(o.length===0)return L({});let i={};return fe(o).pipe(Re(s=>iP(e[s],t,n,r).pipe(Jt(),Le(c=>{if(c instanceof Ti)throw nc(new oo,c);i[s]=c}))),Or(1),F(()=>i),bn(s=>cv(s)?Ge:kr(s)))}function iP(e,t,n,r){let o=Pi(t)??r,i=lo(e,o),s=i.resolve?i.resolve(t,n):it(o,()=>i(t,n));return On(s)}function fd(e){return rt(t=>{let n=e(t);return n?fe(n).pipe(F(()=>t)):L(t)})}var hv=(()=>{class e{buildTitle(n){let r,o=n.root;for(;o!==void 0;)r=this.getResolvedTitleForRoute(o)??r,o=o.children.find(i=>i.outlet===V);return r}getResolvedTitleForRoute(n){return n.data[Ii]}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>P(sP),providedIn:"root"})}return e})(),sP=(()=>{class e extends hv{title;constructor(n){super(),this.title=n}updateTitle(n){let r=this.buildTitle(n);r!==void 0&&this.title.setTitle(r)}static \u0275fac=function(r){return new(r||e)(A(ky))};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ac=new N("",{providedIn:"root",factory:()=>({})}),cc=new N(""),pv=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=P(ey);loadComponent(n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return L(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=On(n.loadComponent()).pipe(F(mv),Le(i=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=i}),Jn(()=>{this.componentLoaders.delete(n)})),o=new _r(r,()=>new Fe).pipe(Mr());return this.componentLoaders.set(n,o),o}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return L({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=aP(r,this.compiler,n,this.onLoadEndListener).pipe(Jn(()=>{this.childrenLoaders.delete(r)})),s=new _r(i,()=>new Fe).pipe(Mr());return this.childrenLoaders.set(r,s),s}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function aP(e,t,n,r){return On(e.loadChildren()).pipe(F(mv),Re(o=>o instanceof qu||Array.isArray(o)?L(o):fe(t.compileModuleAsync(o))),F(o=>{r&&r(e);let i,s,c=!1;return Array.isArray(o)?(s=o,c=!0):(i=o.create(n).injector,s=i.get(cc,[],{optional:!0,self:!0}).flat()),{routes:s.map(jd),injector:i}}))}function cP(e){return e&&typeof e=="object"&&"default"in e}function mv(e){return cP(e)?e.default:e}var Bd=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>P(lP),providedIn:"root"})}return e})(),lP=(()=>{class e{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,r){return n}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),gv=new N("");var yv=new N(""),vv=(()=>{class e{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Fe;transitionAbortSubject=new Fe;configLoader=P(pv);environmentInjector=P(Ze);destroyRef=P(ri);urlSerializer=P(oc);rootContexts=P(Ri);location=P(Qr);inputBindingEnabled=P(ic,{optional:!0})!==null;titleStrategy=P(hv);options=P(ac,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=P(Bd);createViewTransition=P(gv,{optional:!0});navigationErrorHandler=P(yv,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>L(void 0);rootComponentType=null;destroyed=!1;constructor(){let n=o=>this.events.next(new wd(o)),r=o=>this.events.next(new Td(o));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=n,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(n){let r=++this.navigationId;this.transitions?.next(ae(M({},n),{extractedUrl:this.urlHandlingStrategy.extract(n.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r}))}setupNavigations(n){return this.transitions=new Se(null),this.transitions.pipe(nt(r=>r!==null),rt(r=>{let o=!1,i=!1;return L(r).pipe(rt(s=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,"",at.SupersededByNewNavigation),Ge;this.currentTransition=r,this.currentNavigation={id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:this.lastSuccessfulNavigation?ae(M({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!n.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),l=s.extras.onSameUrlNavigation??n.onSameUrlNavigation;if(!c&&l!=="reload"){let u="";return this.events.next(new Nn(s.id,this.urlSerializer.serialize(s.rawUrl),u,Ka.IgnoredSameUrlNavigation)),s.resolve(!1),Ge}if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return L(s).pipe(rt(u=>(this.events.next(new so(u.id,this.urlSerializer.serialize(u.extractedUrl),u.source,u.restoredState)),u.id!==this.navigationId?Ge:Promise.resolve(u))),tP(this.environmentInjector,this.configLoader,this.rootComponentType,n.config,this.urlSerializer,this.paramsInheritanceStrategy),Le(u=>{r.targetSnapshot=u.targetSnapshot,r.urlAfterRedirects=u.urlAfterRedirects,this.currentNavigation=ae(M({},this.currentNavigation),{finalUrl:u.urlAfterRedirects});let d=new Za(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:u,extractedUrl:d,source:h,restoredState:p,extras:f}=s,g=new so(u,this.urlSerializer.serialize(d),h,p);this.events.next(g);let y=ev(this.rootComponentType).snapshot;return this.currentTransition=r=ae(M({},s),{targetSnapshot:y,urlAfterRedirects:d,extras:ae(M({},f),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=d,L(r)}else{let u="";return this.events.next(new Nn(s.id,this.urlSerializer.serialize(s.extractedUrl),u,Ka.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Ge}}),Le(s=>{let c=new vd(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(c)}),F(s=>(this.currentTransition=r=ae(M({},s),{guards:DI(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),r)),kI(this.environmentInjector,s=>this.events.next(s)),Le(s=>{if(r.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw nc(this.urlSerializer,s.guardsResult);let c=new Sd(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);this.events.next(c)}),nt(s=>s.guardsResult?!0:(this.cancelNavigationTransition(s,"",at.GuardRejected),!1)),fd(s=>{if(s.guards.canActivateChecks.length!==0)return L(s).pipe(Le(c=>{let l=new bd(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}),rt(c=>{let l=!1;return L(c).pipe(nP(this.paramsInheritanceStrategy,this.environmentInjector),Le({next:()=>l=!0,complete:()=>{l||this.cancelNavigationTransition(c,"",at.NoDataFromResolver)}}))}),Le(c=>{let l=new Dd(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}))}),fd(s=>{let c=l=>{let u=[];l.routeConfig?.loadComponent&&!l.routeConfig._loadedComponent&&u.push(this.configLoader.loadComponent(l.routeConfig).pipe(Le(d=>{l.component=d}),F(()=>{})));for(let d of l.children)u.push(...c(d));return u};return As(c(s.targetSnapshot.root)).pipe(wn(null),Zt(1))}),fd(()=>this.afterPreactivation()),rt(()=>{let{currentSnapshot:s,targetSnapshot:c}=r,l=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return l?fe(l).pipe(F(()=>r)):L(r)}),F(s=>{let c=gI(n.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=r=ae(M({},s),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,r}),Le(()=>{this.events.next(new Di)}),bI(this.rootContexts,n.routeReuseStrategy,s=>this.events.next(s),this.inputBindingEnabled),Zt(1),Le({next:s=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new kn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0)},complete:()=>{o=!0}}),Ll(this.transitionAbortSubject.pipe(Le(s=>{throw s}))),Jn(()=>{!o&&!i&&this.cancelNavigationTransition(r,"",at.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation=null,this.currentTransition=null)}),bn(s=>{if(this.destroyed)return r.resolve(!1),Ge;if(i=!0,av(s))this.events.next(new sn(r.id,this.urlSerializer.serialize(r.extractedUrl),s.message,s.cancellationCode)),SI(s)?this.events.next(new ao(s.url,s.navigationBehaviorOptions)):r.resolve(!1);else{let c=new bi(r.id,this.urlSerializer.serialize(r.extractedUrl),s,r.targetSnapshot??void 0);try{let l=it(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof Ti){let{message:u,cancellationCode:d}=nc(this.urlSerializer,l);this.events.next(new sn(r.id,this.urlSerializer.serialize(r.extractedUrl),u,d)),this.events.next(new ao(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(l){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(l)}}return Ge}))}))}cancelNavigationTransition(n,r,o){let i=new sn(n.id,this.urlSerializer.serialize(n.extractedUrl),r,o);this.events.next(i),n.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let n=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return n.toString()!==r?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function uP(e){return e!==Ga}var dP=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>P(fP),providedIn:"root"})}return e})(),Hd=class{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}},fP=(()=>{class e extends Hd{static \u0275fac=(()=>{let n;return function(o){return(n||(n=Nu(e)))(o||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Sv=(()=>{class e{urlSerializer=P(oc);options=P(ac,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=P(Qr);urlHandlingStrategy=P(Bd);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new an;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:n,initialUrl:r,targetBrowserUrl:o}){let i=n!==void 0?this.urlHandlingStrategy.merge(n,r):r,s=o??i;return s instanceof an?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:n,finalUrl:r,initialUrl:o}){r&&n?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,o),this.routerState=n):this.rawUrlTree=o}routerState=ev(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:n}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n??this.rawUrlTree)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>P(hP),providedIn:"root"})}return e})(),hP=(()=>{class e extends Sv{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(n){return this.location.subscribe(r=>{r.type==="popstate"&&setTimeout(()=>{n(r.url,r.state,"popstate")})})}handleRouterEvent(n,r){n instanceof so?this.updateStateMemento():n instanceof Nn?this.commitTransition(r):n instanceof Za?this.urlUpdateStrategy==="eager"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):n instanceof Di?(this.commitTransition(r),this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):n instanceof sn&&(n.code===at.GuardRejected||n.code===at.NoDataFromResolver)?this.restoreHistory(r):n instanceof bi?this.restoreHistory(r,!0):n instanceof kn&&(this.lastSuccessfulId=n.id,this.currentPageId=this.browserPageId)}setBrowserUrl(n,{extras:r,id:o}){let{replaceUrl:i,state:s}=r;if(this.location.isCurrentPathEqualTo(n)||i){let c=this.browserPageId,l=M(M({},s),this.generateNgRouterState(o,c));this.location.replaceState(n,"",l)}else{let c=M(M({},s),this.generateNgRouterState(o,this.browserPageId+1));this.location.go(n,"",c)}}restoreHistory(n,r=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,i=this.currentPageId-o;i!==0?this.location.historyGo(i):this.getCurrentUrlTree()===n.finalUrl&&i===0&&(this.resetInternalState(n),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetInternalState(n),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(n,r){return this.canceledNavigationResolution==="computed"?{navigationId:n,\u0275routerPageId:r}:{navigationId:n}}static \u0275fac=(()=>{let n;return function(o){return(n||(n=Nu(e)))(o||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function bv(e,t){e.events.pipe(nt(n=>n instanceof kn||n instanceof sn||n instanceof bi||n instanceof Nn),F(n=>n instanceof kn||n instanceof Nn?0:(n instanceof sn?n.code===at.Redirect||n.code===at.SupersededByNewNavigation:!1)?2:1),nt(n=>n!==2),Zt(1)).subscribe(()=>{t()})}var pP={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},mP={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Vd=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=P(Zg);stateManager=P(Sv);options=P(ac,{optional:!0})||{};pendingTasks=P(_n);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=P(vv);urlSerializer=P(oc);location=P(Qr);urlHandlingStrategy=P(Bd);_events=new Fe;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=P(dP);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=P(cc,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!P(ic,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:n=>{this.console.warn(n)}}),this.subscribeToNavigationEvents()}eventsSubscription=new be;subscribeToNavigationEvents(){let n=this.navigationTransitions.events.subscribe(r=>{try{let o=this.navigationTransitions.currentTransition,i=this.navigationTransitions.currentNavigation;if(o!==null&&i!==null){if(this.stateManager.handleRouterEvent(r,i),r instanceof sn&&r.code!==at.Redirect&&r.code!==at.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof kn)this.navigated=!0;else if(r instanceof ao){let s=r.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(r.url,o.currentRawUrl),l=M({browserUrl:o.extras.browserUrl,info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:o.extras.replaceUrl||this.urlUpdateStrategy==="eager"||uP(o.source)},s);this.scheduleNavigation(c,Ga,null,l,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}yP(r)&&this._events.next(r)}catch(o){this.navigationTransitions.transitionAbortSubject.next(o)}});this.eventsSubscription.add(n)}resetRootComponentType(n){this.routerState.root.component=n,this.navigationTransitions.rootComponentType=n}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ga,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((n,r,o)=>{this.navigateToSyncWithBrowser(n,o,r)})}navigateToSyncWithBrowser(n,r,o){let i={replaceUrl:!0},s=o?.navigationId?o:null;if(o){let l=M({},o);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(i.state=l)}let c=this.parseUrl(n);this.scheduleNavigation(c,r,s,i)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(n){this.config=n.map(jd),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(n,r={}){let{relativeTo:o,queryParams:i,fragment:s,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:s,d=null;switch(c??this.options.defaultQueryParamsHandling){case"merge":d=M(M({},this.currentUrlTree.queryParams),i);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}d!==null&&(d=this.removeEmptyProps(d));let h;try{let p=o?o.snapshot:this.routerState.snapshot.root;h=Ky(p)}catch{(typeof n[0]!="string"||n[0][0]!=="/")&&(n=[]),h=this.currentUrlTree.root}return Zy(h,n,d,u??null)}navigateByUrl(n,r={skipLocationChange:!1}){let o=io(n)?n:this.parseUrl(n),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,Ga,null,r)}navigate(n,r={skipLocationChange:!1}){return gP(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){try{return this.urlSerializer.parse(n)}catch{return this.urlSerializer.parse("/")}}isActive(n,r){let o;if(r===!0?o=M({},pP):r===!1?o=M({},mP):o=r,io(n))return Ny(this.currentUrlTree,n,o);let i=this.parseUrl(n);return Ny(this.currentUrlTree,i,o)}removeEmptyProps(n){return Object.entries(n).reduce((r,[o,i])=>(i!=null&&(r[o]=i),r),{})}scheduleNavigation(n,r,o,i,s){if(this.disposed)return Promise.resolve(!1);let c,l,u;s?(c=s.resolve,l=s.reject,u=s.promise):u=new Promise((h,p)=>{c=h,l=p});let d=this.pendingTasks.add();return bv(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:n,extras:i,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(h=>Promise.reject(h))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function gP(e){for(let t=0;t<e.length;t++)if(e[t]==null)throw new O(4008,!1)}function yP(e){return!(e instanceof Di)&&!(e instanceof ao)}var vP=new N("");function $d(e,...t){return ha([{provide:cc,multi:!0,useValue:e},[],{provide:dr,useFactory:SP,deps:[Vd]},{provide:Gu,multi:!0,useFactory:bP},t.map(n=>n.\u0275providers)])}function SP(e){return e.routerState.root}function bP(){let e=P(Pn);return t=>{let n=e.get(ir);if(t!==n.components[0])return;let r=e.get(Vd),o=e.get(DP);e.get(wP)===1&&r.initialNavigation(),e.get(TP,null,B.Optional)?.setUpPreloading(),e.get(vP,null,B.Optional)?.init(),r.resetRootComponentType(n.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var DP=new N("",{factory:()=>new Fe}),wP=new N("",{providedIn:"root",factory:()=>1});var TP=new N("");var le=(()=>{class e{constructor(){this.raidTierSource=new Se(""),this.regionSource=new Se(""),this.pokemonListSource=new Se(""),this.teraTypeSource=new Se(""),this.moveListSource=new Se(""),this.loadingSource=new Se(!1),this.raidTier=this.raidTierSource.asObservable(),this.regionList=this.regionSource.asObservable(),this.pokemonList=this.pokemonListSource.asObservable(),this.teraType=this.teraTypeSource.asObservable(),this.moveList=this.moveListSource.asObservable(),this.loading=this.loadingSource.asObservable()}changeRaidTier(n){this.raidTierSource.next(n)}changeRegionList(n){this.regionSource.next(n)}changePokemon(n){this.pokemonListSource.next(n)}changeTeraType(n){this.teraTypeSource.next(n)}changeMoveList(n){this.moveListSource.next(n)}changeLoading(n){this.loadingSource.next(n)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Dv=(()=>{class e{constructor(n){this.stateService=n}valueChanged(){let n=document.getElementById("raidTier"),r=n.selectedIndex,o=n.options[r];this.stateService.changeRaidTier(o.value)}static{this.\u0275fac=function(r){return new(r||e)(Q(le))}}static{this.\u0275cmp=te({type:e,selectors:[["app-raid-tier"]],decls:7,vars:0,consts:[["id","raidTier",3,"change"],["value",""],["value","5"],["value","6"]],template:function(r,o){r&1&&(oe(0,"select",0),Mt("change",function(){return o.valueChanged()}),oe(1,"option",1),we(2,"-- Tier --"),me(),oe(3,"option",2),we(4,"5 Star"),me(),oe(5,"option",3),we(6,"6 Star"),me()())},encapsulation:2})}}return e})();var m=function(e){return e.Paldea="Paldea",e.Kitakami="Kitakami",e.Terarium="Terarium",e}(m||{}),a=function(e){return e.Time="Time",e.HP="HP",e}(a||{}),$t=[{name:"Abomasnow",region:m.Paldea,info:{moves:["Energy Ball","Ice Punch","Ice Shard","Leer","Blizzard","Snowscape","Aurora Veil"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Blizzard"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Snowscape"},{type:a.HP,threshold:25,action:"Uses Aurora Veil"}]}},{name:"Altaria",region:m.Paldea,info:{moves:["Dragon Pulse","Hurricane","Sing","Mist","Safeguard","Cotton Guard"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Safeguard"},{type:a.HP,threshold:75,action:"Uses"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Cotton Guard"},{type:a.HP,threshold:25,action:"Uses Sing"}]}},{name:"Amoonguss",region:m.Paldea,info:{moves:["Energy Ball","Sludge Bomb","Spore","Clear Smog","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Spore"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Annihilape",region:m.Paldea,info:{moves:["Shadow Claw","Close Combat","Outrage","Leer","Taunt","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Bulk Up"}]}},{name:"Appletun",region:m.Paldea,info:{moves:["Apple Acid","Dragon Pulse","Giga Drain","Body Press","","Growth"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses"},{type:a.HP,threshold:75,action:"Uses Growth"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Arboliva",region:m.Paldea,info:{moves:["Energy Ball","Hyper Voice","Earth Power","Charm","Sunny Day","Growth","Leaf Storm"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Growth"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Leaf Storm"}]}},{name:"Arcanine",region:m.Paldea,info:{moves:["Flamethrower","Crunch","Extreme Speed","Fire Fang","Sunny Day","Leer"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Leer"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Armarouge",region:m.Paldea,info:{moves:["Armor Cannon","Psychic","Night Shade","Will-O-Wisp","Sunny Day","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Sunny Day"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Avalugg",region:m.Paldea,info:{moves:["Icicle Crash","Double-Edge","Crunch","Ice Fang","Snowscape","Iron Defense"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Snowscape"},{type:a.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Baxcalibur",region:m.Paldea,info:{moves:["Dragon Claw","Icicle Crash","Ice Shard","Body Press","Snowscape"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Blissey",region:m.Paldea,info:{moves:["Dazzling Gleam","Hyper Voice","Sing","Seismic Toss","Gravity"],specialMoves:["Seismic Toss","Gravity"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Gravity"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Bombirdier",region:m.Paldea,info:{moves:["Rock Slide","Sucker Punch","Brave Bird","Torment","Knock Off","Feather Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Feather Dance"}]}},{name:"Brambleghast",region:m.Paldea,info:{moves:["Giga Drain","Shadow Ball","Power Whip","Infestation","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Grassy Terrain"}]}},{name:"Braviary",region:m.Paldea,info:{moves:["Acrobatics","Crush Claw","Superpower","Air Slash","Tailwind","Hone Claws"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Tailwind"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Hone Claws"},{type:a.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Breloom",region:m.Paldea,info:{moves:["Seed Bomb","Mach Punch","Worry Seed","Headbutt","Grassy Terrain","Spore"],specialMoves:["Spore"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Bronzong",region:m.Paldea,info:{moves:["Flash Cannon","Extrasensory","Metal Sound","Payback","Rain Dance","Calm Mind","Reflect"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Calm Mind"},{type:a.HP,threshold:25,action:"Uses Reflect"}]}},{name:"Camerupt",region:m.Paldea,info:{moves:["Flamethrower","Earth Power","Yawn","Eruption","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Ceruledge",region:m.Paldea,info:{moves:["Bitter Blade","Shadow Claw","Psycho Cut","Will-O-Wisp","Sunny Day","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Sunny Day"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Swords Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Cetitan",region:m.Paldea,info:{moves:["Ice Spinner","Liquidation","Yawn","Entrainment","Snowscape"],specialMoves:["Yawn","Entrainment"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Clawitzer",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Aura Sphere","Crabhammer","Rain Dance"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Water Pulse"}]}},{name:"Cloyster",region:m.Paldea,info:{moves:["Icicle Spear","Hydro Pump","Ice Shard","Supersonic","Shell Smash"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Shell Smash"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Coalossal",region:m.Paldea,info:{moves:["Heat Crash","Stone Edge","Incinerate","Ancient Power","Sandstorm","Tar Shot","Fire Blast"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Uses Tar Shot"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Fire Blast"}]}},{name:"Copperajah",region:m.Paldea,info:{moves:["Heavy Slam","Strength","Curse","High Horsepower","Sandstorm","Iron Defense"],specialMoves:["Curse"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Corviknight",region:m.Paldea,info:{moves:["Steel Wing","Drill Peck","Taunt","Body Press","Iron Defense","Hone Claws"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Hone Claws"}]}},{name:"Delibird",region:m.Paldea,info:{moves:["Present","Drill Peck","Ice Punch","Blizzard","Snowscape"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Present"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Present"}]}},{name:"Ditto",region:m.Paldea,info:{moves:["Transform"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:50,action:"Stats & Status Reset"}]}},{name:"Dondozo",region:m.Paldea,info:{moves:["Order Up","Waterfall","Heavy Slam","Tickle","Rain Dance","Stockpile"],specialMoves:["Stockpile"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Stockpile"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Dragalge",region:m.Paldea,info:{moves:["Dragon Pulse","Sludge Bomb","Water Pulse","Toxic","Acid Spray","Draco Meteor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Acid Spray"},{type:a.HP,threshold:75,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Draco Meteor"}]}},{name:"Dragapult",region:m.Paldea,info:{moves:["Shadow Ball","Dragon Darts","Thunderbolt","Hex","Reflect","Light Screen"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Light Screen"}]}},{name:"Dragonite",region:m.Paldea,info:{moves:["Dragon Rush","Aerial Ace","Extreme Speed","Hurricane","Safeguard","Dragon Dance","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Safeguard"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:35,action:"Uses Rain Dance"}]}},{name:"Drifblim",region:m.Paldea,info:{moves:["Hex","Air Slash","Thunder Wave","Shadow Ball","Will-O-Wisp"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Eelektross",region:m.Paldea,info:{moves:["Wild Charge","Flamethrower","Discharge","Crush Claw","Ion Deluge","Thunder Wave","Coil"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Ion Deluge"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:25,action:"Uses Coil"}]}},{name:"Eevee",region:m.Paldea,info:{moves:["Tera Blast","Take Down","Shadow Ball","Tickle","Yawn","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Yawn"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Falinks",region:m.Paldea,info:{moves:["Megahorn","Reversal","Headbutt","Brick Break","No Retreat"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:40,action:"Uses No Retreat"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Flapple",region:m.Paldea,info:{moves:["Grav Apple","Dragon Breath","Dragon Rush","Trailblaze","Grassy Terrain","Iron Defense","Dragon Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Dragon Dance"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Florges",region:m.Paldea,info:{moves:["Petal Dance","Moonblast","Psychic","Safeguard","Grassy Terrain","Calm Mind"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Grassy Terrain"}]}},{name:"Froslass",region:m.Paldea,info:{moves:["Frost Breath","Shadow Ball","Scary Face","Draining Kiss","Snowscape","Disable","Aurora Veil"],specialMoves:["Disable"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:25,action:"Uses Aurora Veil"}]}},{name:"Gallade",region:m.Paldea,info:{moves:["Psycho Cut","Brick Break","Shadow Sneak","Fury Cutter","Hypnosis","Disable","Psychic Terrain"],specialMoves:["Disable","Shadow Sneak"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Psychic Terrain"}]}},{name:"Garchomp",region:m.Paldea,info:{moves:["Earthquake","Dragon Claw","Iron Head","Slash","Sandstorm","Bulldoze"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Uses Bulldoze"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Gardevoir",region:m.Paldea,info:{moves:["Psychic","Moonblast","Disable","Draining Kiss","Misty Terrain","Calm Mind","Psychic Terrain"],specialMoves:["Disable"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Psychic Terrain"}]}},{name:"Garganacl",region:m.Paldea,info:{moves:["Salt Cure","Rock Slide","Hammer Arm","Sandstorm"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Gengar",region:m.Paldea,info:{moves:["Shadow Ball","Sludge Bomb","Confuse Ray","Spite","Hypnosis"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Hypnosis"}]}},{name:"Glalie",region:m.Paldea,info:{moves:["Freeze-Dry","Crunch","Headbutt","Frost Breath","Snowscape","Disable"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:85,action:"Uses Snowscape"}]}},{name:"Glimmora",region:m.Paldea,info:{moves:["Power Gem","Sludge Bomb","Mortal Spin","Ancient Power","Sandstorm","Tera Blast"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Tera Blast"}]}},{name:"Goodra",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Sludge Bomb","Power Whip","Rain Dance","Draco Meteor","Acid Armor"],specialMoves:["Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Acid Armor"}]}},{name:"Gothitelle",region:m.Paldea,info:{moves:["Psychic","Thunder Wave","Thunderbolt","Stored Power","Calm Mind","Light Screen"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Calm Mind"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:25,action:"Uses Light Screen"}]}},{name:"Greedent",region:m.Paldea,info:{moves:["Body Slam","Body Press","Bullet Seed","Tail Whip","Stockpile"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Stockpile"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Stockpile"}]}},{name:"Grimmsnarl",region:m.Paldea,info:{moves:["Spirit Break","False Surrender","Scary Face","Foul Play","Light Screen","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Light Screen"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Gyarados",region:m.Paldea,info:{moves:["Aqua Tail","Twister","Hurricane","Crunch","Scary Face","Taunt","Dragon Dance","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:35,action:"Uses Rain Dance"}]}},{name:"Hariyama",region:m.Paldea,info:{moves:["Reversal","Brick Break","Brine","Heavy Slam","Scary Face","Taunt","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Bulk Up"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Hatterene",region:m.Paldea,info:{moves:["Dazzling Gleam","Psychic","Dark Pulse","Charm","Misty Terrain","Calm Mind","Psychic Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Psychic Terrain"}]}},{name:"Haxorus",region:m.Paldea,info:{moves:["Dragon Claw","Crunch","Giga Impact","First Impression","Harden","Dragon Dance"],specialMoves:["Harden","First Impression"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Harden"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Dragon Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Hippowdon",region:m.Paldea,info:{moves:["Earthquake","Yawn","Rock Slide","Body Slam","Stockpile"],specialMoves:["Stockpile"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Yawn"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Stockpile"}]}},{name:"Honchkrow",region:m.Paldea,info:{moves:["Night Slash","Hurricane","Haze","Wing Attack","Nasty Plot"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Nasty Plot"}]}},{name:"Houndoom",region:m.Paldea,info:{moves:["Flamethrower","Crunch","Taunt","Will-O-Wisp","Sunny Day","Howl"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Howl"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Hydreigon",region:m.Paldea,info:{moves:["Dark Pulse","Dragon Pulse","Scary Face","Dragon Rush","Taunt","Reflect","Nasty Plot"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Uses Reflect"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Indeedee (Male)",formName:"indeedee",region:m.Paldea,info:{moves:["Psychic","Hyper Voice","Shadow Ball","Trick Room","Play Nice","Calm Mind"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Play Nice"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Indeedee (Female)",formName:"indeedee",imageAlt:"-f",region:m.Paldea,info:{moves:["Psychic","Hyper Voice","Shadow Ball","Trick Room","Play Nice","Calm Mind"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Play Nice"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Kingambit",region:m.Paldea,info:{moves:["Iron Head","Night Slash","Torment","Slash","Taunt","Metal Burst"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Torment"},{type:a.Time,threshold:15,action:"Uses Metal Burst"}]}},{name:"Krookodile",region:m.Paldea,info:{moves:["Earthquake","Crunch","Sand Tomb","Counter","Torment","Hone Claws"],specialMoves:["Counter"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Torment"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Hone Claws"}]}},{name:"Luxray",region:m.Paldea,info:{moves:["Crunch","Wild Charge","Discharge","Thunder Wave","Electric Terrain","Leer"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Uses Leer"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Electric Terrain"}]}},{name:"Mabosstiff",region:m.Paldea,info:{moves:["Crunch","Play Rough","Take Down","Swagger","Taunt"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Magnezone",region:m.Paldea,info:{moves:["Thunderbolt","Flash Cannon","Tri Attack","Thunder Wave","Magnet Rise","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Magnet Rise"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Mimikyu",region:m.Paldea,info:{moves:["Play Rough","Shadow Claw","Will-O-Wisp","Shadow Sneak","Light Screen","Taunt"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Light Screen"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Mismagius",region:m.Paldea,info:{moves:["Mystical Fire","Shadow Ball","Confuse Ray","Taunt","Light Screen","Nasty Plot"],specialMoves:["Light Screen"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Light Screen"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Nasty Plot"}]}},{name:"Mudsdale",region:m.Paldea,info:{moves:["High Horsepower","Body Press","Rock Smash","Heavy Slam","Scary Face","Iron Defense"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Scary Face"},{type:a.Time,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"}]}},{name:"Noivern",region:m.Paldea,info:{moves:["Air Slash","Dragon Pulse","Acrobatics","Boomburst","Tailwind"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Tailwind"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Tailwind"},{type:a.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Oranguru",region:m.Paldea,info:{moves:["Facade","Psychic","Stored Power","Yawn","Calm Mind","Light Screen"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Calm Mind"},{type:a.HP,threshold:75,action:"Uses Light Screen"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Orthworm",region:m.Paldea,info:{moves:["Iron Head","Earthquake","Stomping Tantrum","Wrap","Sandstorm","Coil"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Uses Coil"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Palafin",region:m.Paldea,info:{moves:["Liquidation","Acrobatics","Charm","Boomburst","Rain Dance","Bulk Up"],specialMoves:["Boomburst"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Passimian",region:m.Paldea,info:{moves:["Reversal","Rock Smash","Facade","Gunk Shot","Taunt","Trailblaze","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Uses Trailblaze"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Bulk Up"}]}},{name:"Pawmot",region:m.Paldea,info:{moves:["Wild Charge","Close Combat","Nuzzle","Sweet Kiss","Double Shock"],specialMoves:["Sweet Kiss"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:80,action:"Uses Nuzzle"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Double Shock"}]}},{name:"Pincurchin",region:m.Paldea,info:{moves:["Zing Zap","Thunder","Surf","Poison Jab","Rain Dance","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Rain Dance"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Polteageist",region:m.Paldea,info:{moves:["Shadow Ball","Mega Drain","Astonish","Will-O-Wisp","Shell Smash"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Shell Smash"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Raichu",region:m.Paldea,info:{moves:["Discharge","Iron Tail","Charm","Nuzzle","Electric Terrain","Thunder Wave"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Electric Terrain"}]}},{name:"Revavroom",region:m.Paldea,info:{moves:["Spin Out","Taunt","Gunk Shot","Overheat","Scary Face","Shift Gear"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Shift Gear"},{type:a.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Rotom",region:m.Paldea,info:{moves:["Discharge","Uproar","Hex","Thunder Wave","Charge","Eerie Impulse"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Charge"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Eerie Impulse"}]}},{name:"Sableye",region:m.Paldea,info:{moves:["Shadow Claw","Foul Play","Will-O-Wisp","Night Shade","Flatter","Torment"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Flatter"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Torment"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Salamence",region:m.Paldea,info:{moves:["Dragon Rush","Aerial Ace","Hyper Voice","Draco Meteor","Dragon Dance","Focus Energy"],specialMoves:["Dragon Rush"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:25,action:"Uses Focus Energy"}]}},{name:"Scizor",region:m.Paldea,info:{moves:["Iron Head","X-Scissor","Bullet Punch","Slash","Iron Defense","Focus Energy"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Iron Defense"},{type:a.HP,threshold:75,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"}]}},{name:"Scyther",region:m.Paldea,info:{moves:["Aerial Ace","X-Scissor","Slash","Agility","Focus Energy","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Focus Energy"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Swords Dance"}]}},{name:"Slaking",region:m.Paldea,info:{moves:["Facade","Shadow Claw","Play Rough","Swagger","Encore"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Encore"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"}]}},{name:"Slowbro",region:m.Paldea,info:{moves:["Zen Headbutt","Liquidation","Yawn","Water Pulse","Curse"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Curse"},{type:a.HP,threshold:70,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Curse"}]}},{name:"Slowking",region:m.Paldea,info:{moves:["Psychic","Surf","Yawn","Water Pulse","Psychic Terrain","Calm Mind"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Psychic Terrain"},{type:a.HP,threshold:70,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"}]}},{name:"Staraptor",region:m.Paldea,info:{moves:["Close Combat","Brave Bird","Quick Attack","Double-Edge"],specialMoves:["Double-Edge"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Brave Bird"}]}},{name:"Talonflame",region:m.Paldea,info:{moves:["Acrobatics","Flare Blitz","Steel Wing","Heat Wave","Bulk Up"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Bulk Up"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Bulk Up"}]}},{name:"Tatsugiri (Curly)",formName:"tatsugiri",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Chilling Water"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tatsugiri (Droopy)",formName:"tatsugiri",imageAlt:"-d",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Chilling Water"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tatsugiri (Stretchy)",formName:"tatsugiri",imageAlt:"-s",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Chilling Water"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tauros (Fire)",formName:"taurospaldeablaze",imageAlt:"-b",region:m.Paldea,info:{moves:["Flare Blitz","Close Combat","Flamethrower","Headbutt","Work Up","Sunny Day"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Work Up"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Sunny Day"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Tauros (Water)",formName:"taurospaldeaaqua",imageAlt:"-a",region:m.Paldea,info:{moves:["Wave Crash","Close Combat","Surf","Headbutt","Work Up","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Work Up"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Rain Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Tinkaton",region:m.Paldea,info:{moves:["Gigaton Hammer","Play Rough","Brutal Swing","Rock Smash","Misty Terrain","Thunder Wave","Charm"],specialMoves:["Charm","Misty Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Thunder Wave"},{type:a.HP,threshold:25,action:"Uses Charm"}]}},{name:"Toxtricity (Amped)",formName:"toxtricity",region:m.Paldea,info:{moves:["Overdrive","Poison Jab","Nuzzle","Boomburst","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Toxtricity (Low Key)",formName:"toxtricity",imageAlt:"-l",region:m.Paldea,info:{moves:["Overdrive","Poison Jab","Nuzzle","Boomburst","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Tsareena",region:m.Paldea,info:{moves:["High Jump Kick","Power Whip","Stomp","Trop Kick","Reflect","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Grassy Terrain"}]}},{name:"Tyranitar",region:m.Paldea,info:{moves:["Rock Slide","Crunch","Screech","Dark Pulse","Dragon Dance","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Volcarona",region:m.Paldea,info:{moves:["Fire Blast","Bug Buzz","Hurricane","Will-O-Wisp","Sunny Day","Quiver Dance"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Quiver Dance"},{type:a.HP,threshold:20,action:"Uses Quiver Dance"}]}},{name:"Weavile",region:m.Paldea,info:{moves:["Ice Punch","Night Slash","Taunt","Facade","Reflect","Swords Dance"],specialMoves:["Reflect"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Swords Dance"}]}},{name:"Zoroark",region:m.Paldea,info:{moves:["Night Daze","Shadow Claw","Taunt","Hyper Voice","Torment","Nasty Plot"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Torment"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Ambipom",region:m.Kitakami,info:{moves:["Double Hit","Screech","Fury Swipes","Knock Off","Trailblaze","Sand Attack"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:90,action:"Uses Trailblaze"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Sand Attack"},{type:a.HP,threshold:15,action:"Uses Sand Attack"}]}},{name:"Basculegion (Male)",formName:"basculegion",region:m.Kitakami,info:{moves:["Liquidation","Aqua Jet","Shadow Ball","Scary Face","Rain Dance","Wave Crash"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Rain Dance"},{type:a.HP,threshold:10,action:"Uses Wave Crash"}]}},{name:"Basculegion (Female)",formName:"basculegion",imageAlt:"-f",region:m.Kitakami,info:{moves:["Liquidation","Aqua Jet","Shadow Ball","Scary Face","Rain Dance","Hydro Pump"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Rain Dance"},{type:a.HP,threshold:10,action:"Uses Hydro Pump"}]}},{name:"Chandelure",region:m.Kitakami,info:{moves:["Shadow Ball","Heat Wave","Confuse Ray","Flamethrower","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Sunny Day"},{type:a.HP,threshold:80,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Sunny Day"},{type:a.HP,threshold:20,action:"Uses Heat Wave"}]}},{name:"Conkeldurr",region:m.Kitakami,info:{moves:["Hammer Arm","Stone Edge","Superpower","Scary Face","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Dusknoir",region:m.Kitakami,info:{moves:["Fire Punch","Brick Break","Shadow Ball","Shadow Punch","Trick Room","Poltergeist"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Trick Room"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Poltergeist"}]}},{name:"Gliscor",region:m.Kitakami,info:{moves:["Poison Jab","Earthquake","Acrobatics","X-Scissor","Sandstorm","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Swords Dance"},{type:a.Time,threshold:15,action:"Uses Sandstorm"}]}},{name:"Golem",region:m.Kitakami,info:{moves:["Earthquake","Stone Edge","Heavy Slam","Defense Curl"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Defense Curl"},{type:a.Time,threshold:70,action:"Uses Defense Curl"},{type:a.Time,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Earthquake"}]}},{name:"Kommo-o",formName:"kommoo",region:m.Kitakami,info:{moves:["Brick Break","Dragon Claw","Boomburst","Scary Face","Clangorous Soul"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Clangorous Soul"},{type:a.HP,threshold:10,action:"Uses Clangorous Soul"}]}},{name:"Ludicolo",region:m.Kitakami,info:{moves:["Energy Ball","Surf","Fake Out","Trailblaze","Rain Dance"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Rain Dance"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:10,action:"Uses Surf"}]}},{name:"Mamoswine",region:m.Kitakami,info:{moves:["Earthquake","Blizzard","Ice Shard","Ancient Power","Snowscape","Amnesia"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Amnesia"},{type:a.HP,threshold:10,action:"Uses Earthquake"}]}},{name:"Mandibuzz",region:m.Kitakami,info:{moves:["Rock Tomb","Dark Pulse","Toxic","Foul Play","Taunt","Nasty Plot"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Nasty Plot"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Mienshao",region:m.Kitakami,info:{moves:["Aura Sphere","Poison Jab","Taunt","Acrobatics","Bulk Up"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:90,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Milotic",region:m.Kitakami,info:{moves:["Chilling Water","Surf","Dragon Pulse","Attract","Rain Dance","Hydro Pump"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Rain Dance"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.HP,threshold:35,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Ninetales",region:m.Kitakami,info:{moves:["Flamethrower","Extrasensory","Will-O-Wisp","Hypnosis","Nasty Plot"],specialMoves:["Hypnosis"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Politoed",region:m.Kitakami,info:{moves:["Surf","Hyper Voice","Weather Ball","Encore","Rain Dance","Hydro Pump"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Poliwrath",region:m.Kitakami,info:{moves:["Liquidation","Brick Break","Haze","Hydro Pump","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Probopass",region:m.Kitakami,info:{moves:["Body Press","Power Gem","Flash Cannon","Harden","Gravity","Zap Cannon"],specialMoves:["Harden"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Gravity"},{type:a.HP,threshold:75,action:"Uses Zap Cannon"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Zap Cannon"}]}},{name:"Shiftry",region:m.Kitakami,info:{moves:["Fake Out","Sucker Punch","Leaf Blade","Extrasensory","Sunny Day","Leaf Storm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Sunny Day"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:10,action:"Uses Leaf Storm"}]}},{name:"Sinistcha",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:15,action:"Uses Matcha Gotcha"}]}},{name:"Snorlax",region:m.Kitakami,info:{moves:["Body Slam","Heavy Slam","Bite","Mud-Slap","Curse"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Curse"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Trevenant",region:m.Kitakami,info:{moves:["Wood Hammer","Shadow Claw","Will-O-Wisp","Hex","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:20,action:"Uses Will-O-Wisp"}]}},{name:"Victreebel",region:m.Kitakami,info:{moves:["Sludge Bomb","Power Whip","Acid Spray","Trailblaze","Sunny Day"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Sunny Day"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Vikavolt",region:m.Kitakami,info:{moves:["Discharge","Bug Buzz","Solar Beam","Zap Cannon"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Discharge"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Zap Cannon"},{type:a.HP,threshold:20,action:"Uses Zap Cannon"}]}},{name:"Yanmega",region:m.Kitakami,info:{moves:["Bug Buzz","Air Slash","Quick Attack","Hypnosis","Supersonic"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Supersonic"}]}},{name:"Alcremie",region:m.Terarium,info:{moves:["Dazzling Gleam","Psychic","Encore","Psyshock","Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Encore"},{type:a.HP,threshold:50,action:"Uses Acid Armor"},{type:a.HP,threshold:25,action:"Uses Acid Armor"},{type:a.Time,threshold:30,action:"Reduce Tera Orb Charge"}]}},{name:"Duraludon",region:m.Terarium,info:{moves:["Flash Cannon","Dragon Pulse","Breaking Swipe","Metal Sound","Light Screen","Draco Meteor","Iron Defense"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:99,action:"Uses Light Screen"},{type:a.HP,threshold:50,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:30,action:"Uses Iron Defense"}]}},{name:"Electivire",region:m.Terarium,info:{moves:["Discharge","Thunder Punch","Fire Punch","Ice Punch","Thunder Wave","Electric Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Uses Discharge"}]}},{name:"Excadrill",region:m.Terarium,info:{moves:["Drill Run","Iron Head","X-Scissor","Rapid Spin","Sandstorm","Earthquake"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Sandstorm"},{type:a.HP,threshold:15,action:"Uses Earthquake"}]}},{name:"Exeggutor",region:m.Terarium,info:{moves:["Psychic","Energy Ball","Uproar","Bulldoze","Sunny Day","Growth"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:99,action:"Uses Sunny Day"},{type:a.HP,threshold:90,action:"Uses Growth"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"}]}},{name:"Flygon",region:m.Terarium,info:{moves:["Dragon Pulse","Scorching Sands","Earthquake","Flamethrower","Sandstorm","Boomburst"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:50,action:"Uses Boomburst"},{type:a.Time,threshold:30,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Boomburst"}]}},{name:"Golurk",region:m.Terarium,info:{moves:["Shadow Punch","Drain Punch","Heavy Slam","Iron Defense","Gravity","Reflect"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Gravity"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Reflect"}]}},{name:"Hitmonchan",region:m.Terarium,info:{moves:["Mach Punch","Mega Punch","Thunder Punch","Throat Chop","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Bulk Up"},{type:a.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Hitmonlee",region:m.Terarium,info:{moves:["Low Sweep","Mega Kick","Blaze Kick","Scary Face","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Bulk Up"},{type:a.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Hitmontop",region:m.Terarium,info:{moves:["Triple Kick","Sucker Punch","Gyro Ball","Triple Axel","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Bulk Up"},{type:a.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Kingdra",region:m.Terarium,info:{moves:["Dragon Pulse","Hydro Pump","Flash Cannon","Yawn","Rain Dance","Focus Energy"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Focus Energy"}]}},{name:"Lapras",region:m.Terarium,info:{moves:["Ice Beam","Freeze-Dry","Sparkling Aria","Body Press","Sing","Mist","Snowscape"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Sing"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Uses Mist"},{type:a.HP,threshold:30,action:"Uses Snowscape"}]}},{name:"Magmortar",region:m.Terarium,info:{moves:["Flamethrower","Psychic","Focus Blast","Clear Smog","Sunny Day","Will-O-Wisp"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Malamar",region:m.Terarium,info:{moves:["Foul Play","Psycho Cut","Night Slash","Taunt","Topsy-Turvy","Superpower"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Topsy-Turvy"},{type:a.HP,threshold:75,action:"Uses Superpower"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"}]}},{name:"Metagross",region:m.Terarium,info:{moves:["Zen Headbutt","Meteor Mash","Agility","Bullet Punch","Light Screen","Magnet Rise"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Light Screen"},{type:a.HP,threshold:50,action:"Uses Magnet Rise"},{type:a.HP,threshold:25,action:"Stats & Status Reset"},{type:a.Time,threshold:20,action:"Reduce Tera Orb Charge"}]}},{name:"Minior",region:m.Terarium,info:{moves:["Power Gem","Acrobatics","Take Down","Swift","Sandstorm","Shell Smash"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Sandstorm"},{type:a.HP,threshold:49,action:"Player Stats & Status Reset"},{type:a.HP,threshold:49,action:"Uses Shell Smash"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"}]}},{name:"Porygon-Z",formName:"porygonz",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Magnet Rise"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Magnet Rise"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:10,action:"Player Stats & Status Reset"}]}},{name:"Porygon2",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Magnet Rise"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Magnet Rise"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Stats & Status Reset"},{type:a.HP,threshold:10,action:"Stats & Status Reset"}]}},{name:"Reuniclus",region:m.Terarium,info:{moves:["Psychic","Psyshock","Gravity","Shadow Ball","Psychic Terrain","Reflect"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Psychic Terrain"},{type:a.HP,threshold:49,action:"Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Reflect"}]}},{name:"Rhyperior",region:m.Terarium,info:{moves:["Earthquake","Rock Wrecker","Brick Break","Surf","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Sandstorm"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Rock Wrecker"}]}},{name:"Skarmory",region:m.Terarium,info:{moves:["Steel Wing","Drill Peck","X-Scissor","Feint","Iron Defense","Swords Dance","Tailwind"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Iron Defense"},{type:a.HP,threshold:70,action:"Uses Swords Dance"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Tailwind"}]}}],zt=[{name:"Amoonguss",region:m.Paldea,info:{moves:["Energy Ball","Foul Play","Spore","Sludge Bomb","Grassy Terrain"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Grassy Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Grassy Terrain"}]}},{name:"Annihilape",region:m.Paldea,info:{moves:["Close Combat","Shadow Claw","Assurance","Focus Energy","Bulk Up","Rage Fist"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Bulk Up"},{type:a.Time,threshold:5,action:"Uses Rage Fist"}]}},{name:"Armarouge",region:m.Paldea,info:{moves:["Armor Cannon","Psychic","Night Shade","Will-O-Wisp","Calm Mind","Sunny Day"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Calm Mind"},{type:a.Time,threshold:65,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Avalugg",region:m.Paldea,info:{moves:["Icicle Crash","Heavy Slam","Snowscape","Ice Spinner","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Snowscape"},{type:a.Time,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Baxcalibur",region:m.Paldea,info:{moves:["Icicle Spear","Dragon Rush","Snowscape","Body Press"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Blissey",region:m.Paldea,info:{moves:["Dazzling Gleam","Hyper Voice","Sing","Light Screen","Defense Curl"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:95,action:"Uses Defense Curl"},{type:a.HP,threshold:75,action:"Uses Defense Curl"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Sing"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Bombirdier",region:m.Paldea,info:{moves:["Rock Slide","Acrobatics","Knock Off","Feather Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Feather Dance"}]}},{name:"Breloom",region:m.Paldea,info:{moves:["Bullet Seed","Low Sweep","Spore","Aerial Ace","Grassy Terrain"],specialMoves:["Spore"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Ceruledge",region:m.Paldea,info:{moves:["Bitter Blade","Shadow Claw","Psycho Cut","Will-O-Wisp","Sunny Day"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.Time,threshold:65,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Cetitan",region:m.Paldea,info:{moves:["Ice Spinner","Body Slam","Snowscape","Stomping Tantrum","Yawn"],specialMoves:["Yawn"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Uses Snowscape"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Yawn"}]}},{name:"Clawitzer",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Aura Sphere","Crabhammer","Rain Dance"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Water Pulse"}]}},{name:"Clodsire",region:m.Paldea,info:{moves:["Earthquake","Poison Jab","Megahorn","Yawn"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Earthquake"}]}},{name:"Corviknight",region:m.Paldea,info:{moves:["Iron Head","Drill Peck","Body Press","Hone Claws","Tailwind"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Hone Claws"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Tailwind"}]}},{name:"Cyclizar",region:m.Paldea,info:{moves:["Double-Edge","Dragon Claw","Dragon Pulse","Knock Off","Shift Gear"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Dachsbun",region:m.Paldea,info:{moves:["Play Rough","Double-Edge","Bite","Baby-Doll Eyes"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Play Rough"}]}},{name:"Ditto",region:m.Paldea,info:{moves:["Transform"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Dondozo",region:m.Paldea,info:{moves:["Wave Crash","Order Up","Heavy Slam","Yawn","Rain Dance","Curse"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Curse"}]}},{name:"Dragalge",region:m.Paldea,info:{moves:["Dragon Pulse","Sludge Bomb","Water Pulse","Toxic","Acid Spray","Draco Meteor"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Acid Spray"},{type:a.HP,threshold:75,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Draco Meteor"}]}},{name:"Dragapult",region:m.Paldea,info:{moves:["Shadow Ball","Dragon Pulse","Thunderbolt","Flamethrower","Reflect","Light Screen"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Light Screen"}]}},{name:"Dragonite",region:m.Paldea,info:{moves:["Dragon Rush","Extreme Speed","Dragon Dance","Aqua Tail","Light Screen"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:65,action:"Uses Light Screen"},{type:a.Time,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Dragon Dance"}]}},{name:"Espeon",region:m.Paldea,info:{moves:["Tera Blast","Psychic","Psyshock","Tickle","Psychic Terrain","Calm Mind"],specialMoves:["Tickle"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Psychic Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Psychic Terrain"}]}},{name:"Farigiraf",region:m.Paldea,info:{moves:["Twin Beam","Hyper Voice","Low Kick","Uproar","Agility"],specialMoves:["Uproar"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Agility"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Uproar"}]}},{name:"Flareon",region:m.Paldea,info:{moves:["Tera Blast","Flare Blitz","Lava Plume","Will-O-Wisp","Sunny Day","Curse"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Curse"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Frosmoth",region:m.Paldea,info:{moves:["Blizzard","Bug Buzz","Hurricane","Snowscape"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Gallade",region:m.Paldea,info:{moves:["Psycho Cut","Close Combat","Will-O-Wisp","Aerial Ace","Hypnosis","Disable","Psychic Terrain"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Psychic Terrain"}]}},{name:"Garchomp",region:m.Paldea,info:{moves:["Outrage","Earthquake","Flamethrower","Rock Slide","Swords Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Swords Dance"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Gardevoir",region:m.Paldea,info:{moves:["Moonblast","Psychic","Calm Mind","Thunder Wave","Misty Terrain","Psychic Terrain"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Psychic Terrain"}]}},{name:"Garganacl",region:m.Paldea,info:{moves:["Stone Edge","Heavy Slam","Salt Cure","Hammer Arm","Sandstorm","Rock Slide"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sandstorm"},{type:a.Time,threshold:60,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Gengar",region:m.Paldea,info:{moves:["Shadow Ball","Sludge Bomb","Dazzling Gleam","Will-O-Wisp","Hypnosis"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Hypnosis"}]}},{name:"Glaceon",region:m.Paldea,info:{moves:["Tera Blast","Ice Beam","Blizzard","Charm","Snowscape","Calm Mind"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Snowscape"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Snowscape"}]}},{name:"Glimmora",region:m.Paldea,info:{moves:["Power Gem","Sludge Wave","Hyper Beam","Rock Polish","Sandstorm"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sandstorm"},{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:55,action:"Reduce Tera Orb Charge"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"}]}},{name:"Goodra",region:m.Paldea,info:{moves:["Dragon Pulse","Surf","Sludge Bomb","Power Whip","Rain Dance"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Rain Dance"}]}},{name:"Grafaiai",region:m.Paldea,info:{moves:["Knock Off","Gunk Shot","Take Down","Flatter","Toxic"],specialMoves:["Toxic"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Toxic"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Gunk Shot"}]}},{name:"Gyarados",region:m.Paldea,info:{moves:["Aqua Tail","Crunch","Hurricane","Ice Fang","Taunt","Dragon Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Taunt"},{type:a.HP,threshold:20,action:"Uses Dragon Dance"}]}},{name:"Haxorus",region:m.Paldea,info:{moves:["Outrage","Crunch","Giga Impact","First Impression","Dragon Dance"],specialMoves:["First Impression"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Dragon Dance"}]}},{name:"Heracross",region:m.Paldea,info:{moves:["Megahorn","Close Combat","Thrash","Leer","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:75,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Hippowdon",region:m.Paldea,info:{moves:["Earthquake","Ice Fang","Yawn","Rock Slide"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Yawn"},{type:a.HP,threshold:60,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Yawn"}]}},{name:"Hydreigon",region:m.Paldea,info:{moves:["Dark Pulse","Dragon Pulse","Crunch","Taunt","Work Up","Nasty Plot"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:85,action:"Uses Taunt"},{type:a.Time,threshold:75,action:"Uses Work Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Stats & Status Reset"},{type:a.Time,threshold:20,action:"Uses Nasty Plot"}]}},{name:"Jolteon",region:m.Paldea,info:{moves:["Tera Blast","Thunderbolt","Shadow Ball","Thunder Wave","Electric Terrain","Calm Mind"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Electric Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Kilowattrel",region:m.Paldea,info:{moves:["Hurricane","Thunder","Uproar","Scary Face","Charge","Rain Dance"],specialMoves:["Charge","Rain Dance"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Charge"},{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Kingambit",region:m.Paldea,info:{moves:["Iron Head","Night Slash","Kowtow Cleave","Thunder Wave","Swords Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.Time,threshold:65,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Klawf",region:m.Paldea,info:{moves:["Stone Edge","Rock Smash","X-Scissor","Sandstorm","Knock Off","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:49,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Leafeon",region:m.Paldea,info:{moves:["Tera Blast","Leaf Blade","Double Kick","Charm","Sunny Day","Swords Dance"],specialMoves:["Double Kick"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Swords Dance"},{type:a.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Lycanroc",imageAlt:"-d",region:m.Paldea,info:{moves:["Accelerock","Rock Slide","Crunch","Taunt","Sandstorm"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Mabosstiff",region:m.Paldea,info:{moves:["Crunch","Reversal","Outrage","Take Down","Taunt"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Magnezone",region:m.Paldea,info:{moves:["Thunder","Flash Cannon","Tri Attack","Thunder Wave","Rain Dance","Iron Defense","Electric Terrain"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:80,action:"Uses Rain Dance"},{type:a.Time,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Thunder Wave"},{type:a.Time,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Maushold",imageAlt:"-f",region:m.Paldea,info:{moves:["Play Rough","Take Down","Low Kick","Charm","Tidy Up"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Uses Charm"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Tidy Up"}]}},{name:"Mimikyu",region:m.Paldea,info:{moves:["Play Rough","Shadow Claw","Shadow Sneak","Wood Hammer","Misty Terrain","Swords Dance"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Misty Terrain"},{type:a.Time,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Orthworm",region:m.Paldea,info:{moves:["Iron Head","Earthquake","Smack Down","Sandstorm","Coil"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Uses Coil"},{type:a.HP,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Sandstorm"}]}},{name:"Pawmot",region:m.Paldea,info:{moves:["Wild Charge","Close Combat","Double Shock","Nuzzle","Electric Terrain"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Electric Terrain"}]}},{name:"Pelipper",region:m.Paldea,info:{moves:["Hurricane","Hydro Pump","Mist","Supersonic","Rain Dance","Agility"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Agility"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Pincurchin",region:m.Paldea,info:{moves:["Zing Zap","Thunder","Surf","Poison Jab","Thunder Wave","Electric Terrain"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:90,action:"Uses Thunder Wave"},{type:a.Time,threshold:65,action:"Uses Electric Terrain"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Revavroom",region:m.Paldea,info:{moves:["Gunk Shot","Overheat","Iron Head","Taunt","Scary Face","Shift Gear"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Shift Gear"},{type:a.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Salamence",region:m.Paldea,info:{moves:["Outrage","Dual Wingbeat","Flamethrower","Tera Blast","Dragon Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Dragon Dance"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Scizor",region:m.Paldea,info:{moves:["X-Scissor","Bullet Punch","Close Combat","Iron Head","Iron Defense","Focus Energy"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Uses Iron Defense"},{type:a.HP,threshold:75,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Slowking",region:m.Paldea,info:{moves:["Surf","Psyshock","Trick Room","Flamethrower","Light Screen","Rain Dance","Calm Mind"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:70,action:"Uses Light Screen"},{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Trick Room"}]}},{name:"Staraptor",region:m.Paldea,info:{moves:["Close Combat","Brave Bird","Double-Edge","Feather Dance"],specialMoves:["Double-Edge","Feather Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Brave Bird"}]}},{name:"Sylveon",region:m.Paldea,info:{moves:["Tera Blast","Hyper Voice","Moonblast","Yawn","Misty Terrain","Calm Mind"],specialMoves:["Yawn"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Misty Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Misty Terrain"}]}},{name:"Talonflame",region:m.Paldea,info:{moves:["Brave Bird","Flare Blitz","Flamethrower","Tera Blast","Sunny Day","Swords Dance"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Tauros",formName:"taurospaldeacombat",imageAlt:"-p",region:m.Paldea,info:{moves:["Close Combat","Thrash","Zen Headbutt","Raging Bull","Bulk Up","Screech"],specialMoves:["Screech"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Screech"}]}},{name:"Tauros (Fire)",formName:"taurospaldeablaze",imageAlt:"-b",region:m.Paldea,info:{moves:["Flare Blitz","Close Combat","Flamethrower","Headbutt","Sunny Day","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Tauros (Water)",formName:"taurospaldeaaqua",imageAlt:"-a",region:m.Paldea,info:{moves:["Wave Crash","Close Combat","Surf","Headbutt","Rain Dance","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Tinkaton",region:m.Paldea,info:{moves:["Gigaton Hammer","Play Rough","Knock Off","Thunder Wave","Misty Terrain","Sweet Kiss"],specialMoves:["Misty Terrain"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Sweet Kiss"},{type:a.HP,threshold:15,action:"Uses Sweet Kiss"}]}},{name:"Toedscruel",region:m.Paldea,info:{moves:["Energy Ball","Earth Power","Spore","Hex","Grassy Terrain"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Grassy Terrain"},{type:a.Time,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Spore"}]}},{name:"Torkoal",region:m.Paldea,info:{moves:["Lava Plume","Yawn","Clear Smog","Body Slam","Sunny Day","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Yawn"},{type:a.HP,threshold:20,action:"Uses Iron Defense"}]}},{name:"Toxapex",region:m.Paldea,info:{moves:["Water Pulse","Liquidation","Poison Jab","Pin Missile","Chilling Water","Toxic"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:95,action:"Uses Chilling Water"},{type:a.Time,threshold:75,action:"Uses Toxic"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Chilling Water"}]}},{name:"Tyranitar",region:m.Paldea,info:{moves:["Stone Edge","Crunch","Screech","Rock Blast","Iron Defense"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Crunch"},{type:a.HP,threshold:20,action:"Uses Iron Defense"}]}},{name:"Umbreon",region:m.Paldea,info:{moves:["Tera Blast","Dark Pulse","Foul Play","Tickle","Calm Mind","Curse"],specialMoves:["Curse","Tickle"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Calm Mind"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Curse"},{type:a.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Vaporeon",region:m.Paldea,info:{moves:["Tera Blast","Surf","Hyper Voice","Yawn","Rain Dance","Calm Mind"],specialMoves:["Yawn"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Volcarona",region:m.Paldea,info:{moves:["Bug Buzz","Flamethrower","Hurricane","Tailwind","Amnesia","Sunny Day","Light Screen","Quiver Dance"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:85,action:"Uses Amnesia"},{type:a.HP,threshold:75,action:"Uses Sunny Day"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Light Screen"},{type:a.Time,threshold:20,action:"Uses Quiver Dance"}]}},{name:"Ambipom",region:m.Kitakami,info:{moves:["Double Hit","Ice Punch","Fire Punch","Thunder Punch","Screech"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:89,action:"Uses Screech"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Double Hit"}]}},{name:"Basculegion (Male)",formName:"basculegion",region:m.Kitakami,info:{moves:["Wave Crash","Aqua Jet","Crunch","Scary Face","Icy Wind","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Icy Wind"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Basculegion (Female)",formName:"basculegion",imageAlt:"-f",region:m.Kitakami,info:{moves:["Surf","Aqua Jet","Shadow Ball","Scary Face","Icy Wind","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Icy Wind"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Chandelure",region:m.Kitakami,info:{moves:["Flamethrower","Shadow Ball","Will-O-Wisp","Poltergeist","Heat Wave","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Heat Wave"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Sunny Day"},{type:a.HP,threshold:35,action:"Stats & Status Reset"}]}},{name:"Clefable",region:m.Kitakami,info:{moves:["Moonblast","Psychic","Meteor Mash","Encore","Dazzling Gleam","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Encore"},{type:a.HP,threshold:40,action:"Uses Dazzling Gleam"},{type:a.HP,threshold:41,action:"Uses Dazzling Gleam"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Conkeldurr",region:m.Kitakami,info:{moves:["Rock Slide","Close Combat","Mach Punch","Slam","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:89,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:49,action:"Uses Bulk Up"},{type:a.Time,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Crawdaunt",region:m.Kitakami,info:{moves:["Aqua Jet","Crabhammer","Crunch","Giga Impact","Leer","Swords Dance"],specialMoves:["Aqua Jet"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Uses Leer"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Dusknoir",region:m.Kitakami,info:{moves:["Poltergeist","Dark Pulse","Will-O-Wisp","Ice Punch","Gravity","Spite"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Gravity"},{type:a.HP,threshold:70,action:"Uses Spite"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Spite"},{type:a.HP,threshold:10,action:"Stats & Status Reset"}]}},{name:"Gliscor",region:m.Kitakami,info:{moves:["Acrobatics","Knock Off","Quick Attack","Earthquake","Sandstorm","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Swords Dance"},{type:a.Time,threshold:15,action:"Uses Sandstorm"},{type:a.Time,threshold:5,action:"Uses Earthquake"}]}},{name:"Golem",region:m.Kitakami,info:{moves:["Earthquake","Rock Slide","Flail","Smack Down","Stone Edge","Iron Defense"],specialMoves:["Flail"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:85,action:"Uses Stone Edge"},{type:a.Time,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:29,action:"Uses Iron Defense"}]}},{name:"Kommo-o",formName:"kommoo",region:m.Kitakami,info:{moves:["Focus Blast","Dragon Claw","Iron Head","Scary Face","Clangorous Soul","Reversal"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Clangorous Soul"},{type:a.HP,threshold:30,action:"Uses Clangorous Soul"},{type:a.Time,threshold:10,action:"Uses Reversal"}]}},{name:"Leavanny",region:m.Kitakami,info:{moves:["Leaf Blade","X-Scissor","Grassy Glide","Sticky Web","Grassy Terrain","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Grassy Terrain"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Ludicolo",region:m.Kitakami,info:{moves:["Energy Ball","Hydro Pump","Fake Out","Chilling Water","Rain Dance","Teeter Dance"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Uses Chilling Water"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.Time,threshold:20,action:"Uses Teeter Dance"}]}},{name:"Mamoswine",region:m.Kitakami,info:{moves:["Icicle Crash","Ice Shard","Bulldoze","Freeze-Dry","Snowscape","Amnesia","Earthquake"],specialMoves:["Freeze-Dry"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Amnesia"},{type:a.HP,threshold:10,action:"Uses Earthquake"},{type:a.Time,threshold:45,action:"Reduce Tera Orb Charge"}]}},{name:"Mandibuzz",region:m.Kitakami,info:{moves:["Dual Wingbeat","Dark Pulse","Toxic","Bone Rush","Snarl"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Player Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Snarl"},{type:a.HP,threshold:75,action:"Uses Snarl"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Snarl"}]}},{name:"Mienshao",region:m.Kitakami,info:{moves:["Aerial Ace","Brick Break","Aura Sphere","Reversal","Calm Mind"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:90,action:"Uses Calm Mind"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.Time,threshold:20,action:"Uses Aura Sphere"}]}},{name:"Milotic",region:m.Kitakami,info:{moves:["Dragon Pulse","Water Pulse","Safeguard","Aqua Tail","Coil","Hypnosis","Rain Dance"],specialMoves:["Hypnosis"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:99,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Coil"},{type:a.HP,threshold:70,action:"Uses Hypnosis"},{type:a.Time,threshold:60,action:"Uses Rain Dance"},{type:a.Time,threshold:10,action:"Uses Hypnosis"}]}},{name:"Morpeko",region:m.Kitakami,info:{moves:["Aura Wheel","Lash Out","Thunder Wave","Torment","Taunt","Electric Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Ninetales",region:m.Kitakami,info:{moves:["Flamethrower","Extrasensory","Will-O-Wisp","Burning Jealousy","Heat Wave","Sunny Day"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Heat Wave"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Sunny Day"},{type:a.Time,threshold:10,action:"Uses Heat Wave"}]}},{name:"Politoed",region:m.Kitakami,info:{moves:["Chilling Water","Surf","Ice Beam","Encore","Amnesia"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Uses Chilling Water"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:29,action:"Uses Amnesia"}]}},{name:"Poliwrath",region:m.Kitakami,info:{moves:["Brick Break","Liquidation","Focus Blast","Haze","Rain Dance","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Rain Dance"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Quagsire",region:m.Kitakami,info:{moves:["Earthquake","Liquidation","Yawn","Toxic","Curse","Rain Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Uses Curse"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Rain Dance"}]}},{name:"Shiftry",region:m.Kitakami,info:{moves:["Leaf Blade","Sucker Punch","Fake Out","Extrasensory","Sunny Day","Trailblaze","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sunny Day"},{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:70,action:"Uses Trailblaze"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Sinistcha",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:15,action:"Uses Matcha Gotcha"},{type:a.Time,threshold:10,action:"Uses Matcha Gotcha"}]}},{name:"Sinistcha (Masterpiece)",formName:"sinistchamasterpiece",imageAlt:"-m",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:15,action:"Uses Matcha Gotcha"},{type:a.Time,threshold:10,action:"Uses Matcha Gotcha"}]}},{name:"Snorlax",region:m.Kitakami,info:{moves:["Facade","Crunch","Yawn","Heavy Slam"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Stats & Status Reset"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Stats & Status Reset"}]}},{name:"Trevenant",region:m.Kitakami,info:{moves:["Wood Hammer","Shadow Claw","Forest's Curse","Will-O-Wisp","Grassy Terrain","Disable"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Wood Hammer"}]}},{name:"Yanmega",region:m.Kitakami,info:{moves:["Bug Buzz","Air Slash","Quick Attack","Ancient Power"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Ancient Power"},{type:a.HP,threshold:85,action:"Uses Ancient Power"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Ancient Power"}]}},{name:"Alcremie",region:m.Terarium,info:{moves:["Dazzling Gleam","Psychic","Encore","Psyshock","Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Encore"},{type:a.HP,threshold:50,action:"Uses Acid Armor"},{type:a.HP,threshold:25,action:"Uses Acid Armor"},{type:a.Time,threshold:30,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Dugtrio",formName:"dugtrioalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Bulldoze","Iron Head","Ancient Power","Metal Claw","Sandstorm","Earthquake"],specialMoves:["Ancient Power"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Sandstorm"},{type:a.HP,threshold:25,action:"Uses Earthquake"}]}},{name:"Duraludon",region:m.Terarium,info:{moves:["Flash Cannon","Dragon Pulse","Breaking Swipe","Metal Claw","Stealth Rock","Light Screen","Reflect"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Stealth Rock"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Light Screen"},{type:a.HP,threshold:35,action:"Uses Reflect"}]}},{name:"Electivire",region:m.Terarium,info:{moves:["Discharge","Thunder Punch","Earthquake","Brick Break","Electric Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Electric Terrain"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Excadrill",region:m.Terarium,info:{moves:["Iron Head","Earthquake","Drill Run","Slash","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Sandstorm"},{type:a.Time,threshold:25,action:"Uses Sandstorm"}]}},{name:"Exeggutor",formName:"exeggutoralola",imageAlt:"-a",region:m.Terarium,info:{moves:["Dragon Hammer","Extrasensory","Seed Bomb","Hypnosis","Trick Room"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:80,action:"Player Stats & Status Reset"},{type:a.HP,threshold:65,action:"Uses Hypnosis"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Trick Room"},{type:a.HP,threshold:33,action:"Player Stats & Status Reset"}]}},{name:"Flygon",region:m.Terarium,info:{moves:["Earthquake","Dragon Claw","Quick Attack","Breaking Swipe","Dragon Dance","Draco Meteor"],specialMoves:["Quick Attack"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:79,action:"Uses Dragon Dance"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:5,action:"Uses Draco Meteor"}]}},{name:"Golem",formName:"golemalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Heavy Slam","Body Slam","Rock Slide","Discharge","Giga Impact"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Rock Slide"},{type:a.HP,threshold:25,action:"Uses Giga Impact"}]}},{name:"Golurk",region:m.Terarium,info:{moves:["Dynamic Punch","Shadow Punch","Heavy Slam","Ice Punch","Curse"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Curse"},{type:a.HP,threshold:35,action:"Uses Curse"}]}},{name:"Kingdra",region:m.Terarium,info:{moves:["Draco Meteor","Dragon Pulse","Water Pulse","Flash Cannon","Focus Energy","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Focus Energy"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Rain Dance"},{type:a.HP,threshold:5,action:"Uses Draco Meteor"}]}},{name:"Kleavor",region:m.Terarium,info:{moves:["X-Scissor","Close Combat","Air Cutter","Night Slash","Stone Axe","Swords Dance"],specialMoves:["Night Slash"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Stone Axe"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Swords Dance"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Lapras",region:m.Terarium,info:{moves:["Blizzard","Hydro Pump","Body Slam","Sing","Snowscape","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Magmortar",region:m.Terarium,info:{moves:["Lava Plume","Psychic","Scorching Sands","Taunt","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:95,action:"Uses Sunny Day"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Lava Plume"}]}},{name:"Malamar",region:m.Terarium,info:{moves:["Psycho Cut","Night Slash","Foul Play","Pluck","Taunt","Topsy-Turvy"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Topsy-Turvy"},{type:a.HP,threshold:25,action:"Uses Topsy-Turvy"}]}},{name:"Metagross",region:m.Terarium,info:{moves:["Zen Headbutt","Iron Head","Heavy Slam","Aerial Ace","Agility","Hone Claws"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Agility"},{type:a.HP,threshold:80,action:"Uses Iron Head"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Hone Claws"},{type:a.HP,threshold:20,action:"Uses Hone Claws"}]}},{name:"Muk",formName:"mukalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Crunch","Hex","Gunk Shot","Flamethrower","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Ninetales",formName:"ninetalesalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Moonblast","Blizzard","Ice Shard","Dazzling Gleam","Aurora Veil","Calm Mind","Snowscape"],specialMoves:["Moonblast"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Aurora Veil"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:24,action:"Uses Snowscape"}]}},{name:"Overqwil",region:m.Terarium,info:{moves:["Barb Barrage","Crunch","Pin Missile","Fell Stinger","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Toxic"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Uses Barb Barrage"}]}},{name:"Porygon-Z",formName:"porygonz",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Thunder Wave","Trick Room"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Trick Room"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"}]}},{name:"Porygon2",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Thunder Wave","Trick Room"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Trick Room"},{type:a.HP,threshold:45,action:"Stats & Status Reset"}]}},{name:"Reuniclus",region:m.Terarium,info:{moves:["Psychic","Fire Punch","Swift","Rock Tomb","Reflect","Light Screen","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Reflect"},{type:a.HP,threshold:80,action:"Uses Light Screen"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"}]}},{name:"Rhyperior",region:m.Terarium,info:{moves:["Earthquake","Rock Wrecker","Megahorn","Rock Polish","Sandstorm","Iron Defense"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:50,action:"Uses Iron Defense"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Rock Wrecker"},{type:a.HP,threshold:5,action:"Uses Earthquake"}]}},{name:"Sandslash",formName:"sandslashalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Ice Spinner","Iron Head","Earthquake","Triple Axel","Snowscape","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:80,action:"Uses Swords Dance"},{type:a.HP,threshold:35,action:"Player Stats & Status Reset"}]}},{name:"Skarmory",region:m.Terarium,info:{moves:["Drill Peck","Steel Wing","Night Slash","Slash","Taunt","Iron Defense"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:45,action:"Uses Iron Defense"},{type:a.HP,threshold:44,action:"Player Stats & Status Reset"}]}},{name:"Slowbro",formName:"slowbrogalar",imageAlt:"-g",region:m.Terarium,info:{moves:["Shell Side Arm","Zen Headbutt","Chilling Water","Rock Blast","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Slowking",formName:"slowkinggalar",imageAlt:"-g",region:m.Terarium,info:{moves:["Eerie Spell","Power Gem","Yawn","Acid Spray","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Whimsicott",region:m.Terarium,info:{moves:["Energy Ball","Moonblast","Encore","Hurricane","Taunt"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Stats & Status Reset"}]}}];var wv=(()=>{class e{constructor(n){this.stateService=n}ngOnInit(){Object.keys(m).map(r=>{let o=document.createElement("option");o.value=r,o.text=m[r],o.text=="Paldea"&&(o.selected=!0,this.stateService.changeRegionList(o.value)),document.getElementById("regionList").add(o)})}valueChanged(){let n=document.getElementById("regionList"),r=n.selectedIndex,o=n.options[r];this.stateService.changeRegionList(o.value)}static{this.\u0275fac=function(r){return new(r||e)(Q(le))}}static{this.\u0275cmp=te({type:e,selectors:[["app-region"]],decls:3,vars:0,consts:[["id","regionList",3,"change"],["value",""]],template:function(r,o){r&1&&(oe(0,"select",0),Mt("change",function(){return o.valueChanged()}),oe(1,"option",1),we(2,"-- Region --"),me()())},encapsulation:2})}}return e})();function uo(e){return e.toLowerCase().replace(/\w/,t=>t.toUpperCase())}function cn(e){(e?[e]:["pokemonTypes","pokemonImageNormal","pokemonImageShiny","pokemonAbility","pokemonStatsWrapper","pokemonActions","pokemonMoves","pokemonHerbs","pokemonTypeAdvantages","pokemonTeraWeaknesses","pokemonTeraAdvantages"]).forEach(n=>{let r=document.getElementById(n);r.innerHTML=""})}function ye(e,t){e.innerHTML+=t}function _i(e){return`<div class="typeMatchupText ${e.name}">${uo(e.name)} - ${e.multiplier}x</div>`}function zd(e,t,n){return String(e).padStart(t,n)}var qd="Invariant Violation",Tv=Object.setPrototypeOf,CP=Tv===void 0?function(e,t){return e.__proto__=t,e}:Tv,dc=function(e){ke(t,e);function t(n){n===void 0&&(n=qd);var r=e.call(this,typeof n=="number"?qd+": "+n+" (see https://github.com/apollographql/invariant-packages)":n)||this;return r.framesToPop=1,r.name=qd,CP(r,t.prototype),r}return t}(Error);function An(e,t){if(!e)throw new dc(t)}var uc=["debug","log","warn","error","silent"],Wd=uc.indexOf("log");function lc(e){return function(){if(uc.indexOf(e)>=Wd){var t=console[e]||console.log;return t.apply(console,arguments)}}}(function(e){e.debug=lc("debug"),e.log=lc("log"),e.warn=lc("warn"),e.error=lc("error")})(An||(An={}));function Ev(e){var t=uc[Wd];return Wd=Math.max(0,uc.indexOf(e)),t}var xi="3.12.11";function Be(e){try{return e()}catch{}}var fo=Be(function(){return globalThis})||Be(function(){return window})||Be(function(){return self})||Be(function(){return global})||Be(function(){return Be.constructor("return this")()});var Cv=new Map;function ki(e){var t=Cv.get(e)||1;return Cv.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function fc(e,t){t===void 0&&(t=0);var n=ki("stringifyForDisplay");return JSON.stringify(e,function(r,o){return o===void 0?n:o},t).split(JSON.stringify(n)).join("<undefined>")}function hc(e){return function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(typeof t=="number"){var o=t;t=Gd(o),t||(t=Qd(o,n),n=[])}e.apply(void 0,[t].concat(n))}}var C=Object.assign(function(t,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];t||An(t,Gd(n,r)||Qd(n,r))},{debug:hc(An.debug),log:hc(An.log),warn:hc(An.warn),error:hc(An.error)});function ue(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new dc(Gd(e,t)||Qd(e,t))}var Iv=Symbol.for("ApolloErrorMessageHandler_"+xi);function Pv(e){if(typeof e=="string")return e;try{return fc(e,2).slice(0,1e3)}catch{return"<non-serializable>"}}function Gd(e,t){if(t===void 0&&(t=[]),!!e)return fo[Iv]&&fo[Iv](e,t.map(Pv))}function Qd(e,t){if(t===void 0&&(t=[]),!!e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:xi,message:e,args:t.map(Pv)})))}var IP=globalThis.__DEV__!==!1;function ho(e,t){if(!!!e)throw new Error(t)}function Rv(e){return typeof e=="object"&&e!==null}function Mv(e,t){if(!!!e)throw new Error(t??"Unexpected invariant triggered.")}var PP=/\r\n|[\n\r]/g;function po(e,t){let n=0,r=1;for(let o of e.body.matchAll(PP)){if(typeof o.index=="number"||Mv(!1),o.index>=t)break;n=o.index+o[0].length,r+=1}return{line:r,column:t+1-n}}function Yd(e){return pc(e.source,po(e.source,e.start))}function pc(e,t){let n=e.locationOffset.column-1,r="".padStart(n)+e.body,o=t.line-1,i=e.locationOffset.line-1,s=t.line+i,c=t.line===1?n:0,l=t.column+c,u=`${e.name}:${s}:${l}
`,d=r.split(/\r\n|[\n\r]/g),h=d[o];if(h.length>120){let p=Math.floor(l/80),f=l%80,g=[];for(let y=0;y<h.length;y+=80)g.push(h.slice(y,y+80));return u+_v([[`${s} |`,g[0]],...g.slice(1,p+1).map(y=>["|",y]),["|","^".padStart(f)],["|",g[p+1]]])}return u+_v([[`${s-1} |`,d[o-1]],[`${s} |`,h],["|","^".padStart(l)],[`${s+1} |`,d[o+1]]])}function _v(e){let t=e.filter(([r,o])=>o!==void 0),n=Math.max(...t.map(([r])=>r.length));return t.map(([r,o])=>r.padStart(n)+(o?" "+o:"")).join(`
`)}function RP(e){let t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}var mc=class e extends Error{constructor(t,...n){var r,o,i;let{nodes:s,source:c,positions:l,path:u,originalError:d,extensions:h}=RP(n);super(t),this.name="GraphQLError",this.path=u??void 0,this.originalError=d??void 0,this.nodes=xv(Array.isArray(s)?s:s?[s]:void 0);let p=xv((r=this.nodes)===null||r===void 0?void 0:r.map(g=>g.loc).filter(g=>g!=null));this.source=c??(p==null||(o=p[0])===null||o===void 0?void 0:o.source),this.positions=l??p?.map(g=>g.start),this.locations=l&&c?l.map(g=>po(c,g)):p?.map(g=>po(g.source,g.start));let f=Rv(d?.extensions)?d?.extensions:void 0;this.extensions=(i=h??f)!==null&&i!==void 0?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),d!=null&&d.stack?Object.defineProperty(this,"stack",{value:d.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,e):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(let n of this.nodes)n.loc&&(t+=`

`+Yd(n.loc));else if(this.source&&this.locations)for(let n of this.locations)t+=`

`+pc(this.source,n);return t}toJSON(){let t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}};function xv(e){return e===void 0||e.length===0?void 0:e}function Ee(e,t,n){return new mc(`Syntax Error: ${n}`,{source:e,positions:[t]})}var Ni=class{constructor(t,n,r){this.start=t.start,this.end=n.end,this.startToken=t,this.endToken=n,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}},mo=class{constructor(t,n,r,o,i,s){this.kind=t,this.start=n,this.end=r,this.line=o,this.column=i,this.value=s,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}},Kd={Name:[],Document:["definitions"],OperationDefinition:["description","name","variableDefinitions","directives","selectionSet"],VariableDefinition:["description","variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["description","name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],TypeCoordinate:["name"],MemberCoordinate:["name","memberName"],ArgumentCoordinate:["name","fieldName","argumentName"],DirectiveCoordinate:["name"],DirectiveArgumentCoordinate:["name","argumentName"]},MP=new Set(Object.keys(Kd));function Zd(e){let t=e?.kind;return typeof t=="string"&&MP.has(t)}var fr=function(e){return e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription",e}(fr||{});var gc=function(e){return e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION",e}(gc||{});var E=function(e){return e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",e.TYPE_COORDINATE="TypeCoordinate",e.MEMBER_COORDINATE="MemberCoordinate",e.ARGUMENT_COORDINATE="ArgumentCoordinate",e.DIRECTIVE_COORDINATE="DirectiveCoordinate",e.DIRECTIVE_ARGUMENT_COORDINATE="DirectiveArgumentCoordinate",e}(E||{});function yc(e){return e===9||e===32}function go(e){return e>=48&&e<=57}function kv(e){return e>=97&&e<=122||e>=65&&e<=90}function Jd(e){return kv(e)||e===95}function Nv(e){return kv(e)||go(e)||e===95}function Ov(e){var t;let n=Number.MAX_SAFE_INTEGER,r=null,o=-1;for(let s=0;s<e.length;++s){var i;let c=e[s],l=_P(c);l!==c.length&&(r=(i=r)!==null&&i!==void 0?i:s,o=s,s!==0&&l<n&&(n=l))}return e.map((s,c)=>c===0?s:s.slice(n)).slice((t=r)!==null&&t!==void 0?t:0,o+1)}function _P(e){let t=0;for(;t<e.length&&yc(e.charCodeAt(t));)++t;return t}function Av(e,t){let n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),o=r.length===1,i=r.length>1&&r.slice(1).every(f=>f.length===0||yc(f.charCodeAt(0))),s=n.endsWith('\\"""'),c=e.endsWith('"')&&!s,l=e.endsWith("\\"),u=c||l,d=!(t!=null&&t.minimize)&&(!o||e.length>70||u||i||s),h="",p=o&&yc(e.charCodeAt(0));return(d&&!p||i)&&(h+=`
`),h+=n,(d||u)&&(h+=`
`),'"""'+h+'"""'}var w=function(e){return e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.DOT=".",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment",e}(w||{});var Ai=class{constructor(t){let n=new mo(w.SOF,0,0,0,0);this.source=t,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==w.EOF)do if(t.next)t=t.next;else{let n=xP(this,t.end);t.next=n,n.prev=t,t=n}while(t.kind===w.COMMENT);return t}};function Lv(e){return e===w.BANG||e===w.DOLLAR||e===w.AMP||e===w.PAREN_L||e===w.PAREN_R||e===w.DOT||e===w.SPREAD||e===w.COLON||e===w.EQUALS||e===w.AT||e===w.BRACKET_L||e===w.BRACKET_R||e===w.BRACE_L||e===w.PIPE||e===w.BRACE_R}function yo(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function vc(e,t){return Hv(e.charCodeAt(t))&&Uv(e.charCodeAt(t+1))}function Hv(e){return e>=55296&&e<=56319}function Uv(e){return e>=56320&&e<=57343}function hr(e,t){let n=e.source.body.codePointAt(t);if(n===void 0)return w.EOF;if(n>=32&&n<=126){let r=String.fromCodePoint(n);return r==='"'?`'"'`:`"${r}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function Ie(e,t,n,r,o){let i=e.line,s=1+n-e.lineStart;return new mo(t,n,r,i,s,o)}function xP(e,t){let n=e.source.body,r=n.length,o=t;for(;o<r;){let i=n.charCodeAt(o);switch(i){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++e.line,e.lineStart=o;continue;case 13:n.charCodeAt(o+1)===10?o+=2:++o,++e.line,e.lineStart=o;continue;case 35:return kP(e,o);case 33:return Ie(e,w.BANG,o,o+1);case 36:return Ie(e,w.DOLLAR,o,o+1);case 38:return Ie(e,w.AMP,o,o+1);case 40:return Ie(e,w.PAREN_L,o,o+1);case 41:return Ie(e,w.PAREN_R,o,o+1);case 46:if(n.charCodeAt(o+1)===46&&n.charCodeAt(o+2)===46)return Ie(e,w.SPREAD,o,o+3);break;case 58:return Ie(e,w.COLON,o,o+1);case 61:return Ie(e,w.EQUALS,o,o+1);case 64:return Ie(e,w.AT,o,o+1);case 91:return Ie(e,w.BRACKET_L,o,o+1);case 93:return Ie(e,w.BRACKET_R,o,o+1);case 123:return Ie(e,w.BRACE_L,o,o+1);case 124:return Ie(e,w.PIPE,o,o+1);case 125:return Ie(e,w.BRACE_R,o,o+1);case 34:return n.charCodeAt(o+1)===34&&n.charCodeAt(o+2)===34?HP(e,o):OP(e,o)}if(go(i)||i===45)return NP(e,o,i);if(Jd(i))return UP(e,o);throw Ee(e.source,o,i===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:yo(i)||vc(n,o)?`Unexpected character: ${hr(e,o)}.`:`Invalid character: ${hr(e,o)}.`)}return Ie(e,w.EOF,r,r)}function kP(e,t){let n=e.source.body,r=n.length,o=t+1;for(;o<r;){let i=n.charCodeAt(o);if(i===10||i===13)break;if(yo(i))++o;else if(vc(n,o))o+=2;else break}return Ie(e,w.COMMENT,t,o,n.slice(t+1,o))}function NP(e,t,n){let r=e.source.body,o=t,i=n,s=!1;if(i===45&&(i=r.charCodeAt(++o)),i===48){if(i=r.charCodeAt(++o),go(i))throw Ee(e.source,o,`Invalid number, unexpected digit after 0: ${hr(e,o)}.`)}else o=Xd(e,o,i),i=r.charCodeAt(o);if(i===46&&(s=!0,i=r.charCodeAt(++o),o=Xd(e,o,i),i=r.charCodeAt(o)),(i===69||i===101)&&(s=!0,i=r.charCodeAt(++o),(i===43||i===45)&&(i=r.charCodeAt(++o)),o=Xd(e,o,i),i=r.charCodeAt(o)),i===46||Jd(i))throw Ee(e.source,o,`Invalid number, expected digit but got: ${hr(e,o)}.`);return Ie(e,s?w.FLOAT:w.INT,t,o,r.slice(t,o))}function Xd(e,t,n){if(!go(n))throw Ee(e.source,t,`Invalid number, expected digit but got: ${hr(e,t)}.`);let r=e.source.body,o=t+1;for(;go(r.charCodeAt(o));)++o;return o}function OP(e,t){let n=e.source.body,r=n.length,o=t+1,i=o,s="";for(;o<r;){let c=n.charCodeAt(o);if(c===34)return s+=n.slice(i,o),Ie(e,w.STRING,t,o+1,s);if(c===92){s+=n.slice(i,o);let l=n.charCodeAt(o+1)===117?n.charCodeAt(o+2)===123?AP(e,o):FP(e,o):LP(e,o);s+=l.value,o+=l.size,i=o;continue}if(c===10||c===13)break;if(yo(c))++o;else if(vc(n,o))o+=2;else throw Ee(e.source,o,`Invalid character within String: ${hr(e,o)}.`)}throw Ee(e.source,o,"Unterminated string.")}function AP(e,t){let n=e.source.body,r=0,o=3;for(;o<12;){let i=n.charCodeAt(t+o++);if(i===125){if(o<5||!yo(r))break;return{value:String.fromCodePoint(r),size:o}}if(r=r<<4|Oi(i),r<0)break}throw Ee(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+o)}".`)}function FP(e,t){let n=e.source.body,r=Fv(n,t+2);if(yo(r))return{value:String.fromCodePoint(r),size:6};if(Hv(r)&&n.charCodeAt(t+6)===92&&n.charCodeAt(t+7)===117){let o=Fv(n,t+8);if(Uv(o))return{value:String.fromCodePoint(r,o),size:12}}throw Ee(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function Fv(e,t){return Oi(e.charCodeAt(t))<<12|Oi(e.charCodeAt(t+1))<<8|Oi(e.charCodeAt(t+2))<<4|Oi(e.charCodeAt(t+3))}function Oi(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function LP(e,t){let n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Ee(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function HP(e,t){let n=e.source.body,r=n.length,o=e.lineStart,i=t+3,s=i,c="",l=[];for(;i<r;){let u=n.charCodeAt(i);if(u===34&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34){c+=n.slice(s,i),l.push(c);let d=Ie(e,w.BLOCK_STRING,t,i+3,Ov(l).join(`
`));return e.line+=l.length-1,e.lineStart=o,d}if(u===92&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34&&n.charCodeAt(i+3)===34){c+=n.slice(s,i),s=i+1,i+=4;continue}if(u===10||u===13){c+=n.slice(s,i),l.push(c),u===13&&n.charCodeAt(i+1)===10?i+=2:++i,c="",s=i,o=i;continue}if(yo(u))++i;else if(vc(n,i))i+=2;else throw Ee(e.source,i,`Invalid character within String: ${hr(e,i)}.`)}throw Ee(e.source,i,"Unterminated string.")}function UP(e,t){let n=e.source.body,r=n.length,o=t+1;for(;o<r;){let i=n.charCodeAt(o);if(Nv(i))++o;else break}return Ie(e,w.NAME,t,o,n.slice(t,o))}function vo(e){return Sc(e,[])}function Sc(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return jP(e,t);default:return String(e)}}function jP(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";let n=[...t,e];if(BP(e)){let r=e.toJSON();if(r!==e)return typeof r=="string"?r:Sc(r,n)}else if(Array.isArray(e))return $P(e,n);return VP(e,n)}function BP(e){return typeof e.toJSON=="function"}function VP(e,t){let n=Object.entries(e);return n.length===0?"{}":t.length>2?"["+zP(e)+"]":"{ "+n.map(([o,i])=>o+": "+Sc(i,t)).join(", ")+" }"}function $P(e,t){if(e.length===0)return"[]";if(t.length>2)return"[Array]";let n=Math.min(10,e.length),r=e.length-n,o=[];for(let i=0;i<n;++i)o.push(Sc(e[i],t));return r===1?o.push("... 1 more item"):r>1&&o.push(`... ${r} more items`),"["+o.join(", ")+"]"}function zP(e){let t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){let n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}var qP=globalThis.process&&!0,jv=qP?function(t,n){return t instanceof n}:function(t,n){if(t instanceof n)return!0;if(typeof t=="object"&&t!==null){var r;let o=n.prototype[Symbol.toStringTag],i=Symbol.toStringTag in t?t[Symbol.toStringTag]:(r=t.constructor)===null||r===void 0?void 0:r.name;if(o===i){let s=vo(t);throw new Error(`Cannot use ${o} "${s}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};var So=class{constructor(t,n="GraphQL request",r={line:1,column:1}){typeof t=="string"||ho(!1,`Body must be a string. Received: ${vo(t)}.`),this.body=t,this.name=n,this.locationOffset=r,this.locationOffset.line>0||ho(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||ho(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}};function Bv(e){return jv(e,So)}function Dc(e,t){let n=new ef(e,t),r=n.parseDocument();return Object.defineProperty(r,"tokenCount",{enumerable:!1,value:n.tokenCount}),r}var ef=class{constructor(t,n={}){let i=n,{lexer:r}=i,o=ll(i,["lexer"]);if(r)this._lexer=r;else{let s=Bv(t)?t:new So(t);this._lexer=new Ai(s)}this._options=o,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){let t=this.expectToken(w.NAME);return this.node(t,{kind:E.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:E.DOCUMENT,definitions:this.many(w.SOF,this.parseDefinition,w.EOF)})}parseDefinition(){if(this.peek(w.BRACE_L))return this.parseOperationDefinition();let t=this.peekDescription(),n=t?this._lexer.lookahead():this._lexer.token;if(t&&n.kind===w.BRACE_L)throw Ee(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are not supported on shorthand queries.");if(n.kind===w.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition()}if(t)throw Ee(this._lexer.source,this._lexer.token.start,"Unexpected description, only GraphQL definitions support descriptions.");switch(n.value){case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){let t=this._lexer.token;if(this.peek(w.BRACE_L))return this.node(t,{kind:E.OPERATION_DEFINITION,operation:fr.QUERY,description:void 0,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});let n=this.parseDescription(),r=this.parseOperationType(),o;return this.peek(w.NAME)&&(o=this.parseName()),this.node(t,{kind:E.OPERATION_DEFINITION,operation:r,description:n,name:o,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){let t=this.expectToken(w.NAME);switch(t.value){case"query":return fr.QUERY;case"mutation":return fr.MUTATION;case"subscription":return fr.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(w.PAREN_L,this.parseVariableDefinition,w.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:E.VARIABLE_DEFINITION,description:this.parseDescription(),variable:this.parseVariable(),type:(this.expectToken(w.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(w.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){let t=this._lexer.token;return this.expectToken(w.DOLLAR),this.node(t,{kind:E.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:E.SELECTION_SET,selections:this.many(w.BRACE_L,this.parseSelection,w.BRACE_R)})}parseSelection(){return this.peek(w.SPREAD)?this.parseFragment():this.parseField()}parseField(){let t=this._lexer.token,n=this.parseName(),r,o;return this.expectOptionalToken(w.COLON)?(r=n,o=this.parseName()):o=n,this.node(t,{kind:E.FIELD,alias:r,name:o,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(w.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){let n=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(w.PAREN_L,n,w.PAREN_R)}parseArgument(t=!1){let n=this._lexer.token,r=this.parseName();return this.expectToken(w.COLON),this.node(n,{kind:E.ARGUMENT,name:r,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){let t=this._lexer.token;this.expectToken(w.SPREAD);let n=this.expectOptionalKeyword("on");return!n&&this.peek(w.NAME)?this.node(t,{kind:E.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:E.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){let t=this._lexer.token,n=this.parseDescription();return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:E.FRAGMENT_DEFINITION,description:n,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:E.FRAGMENT_DEFINITION,description:n,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){let n=this._lexer.token;switch(n.kind){case w.BRACKET_L:return this.parseList(t);case w.BRACE_L:return this.parseObject(t);case w.INT:return this.advanceLexer(),this.node(n,{kind:E.INT,value:n.value});case w.FLOAT:return this.advanceLexer(),this.node(n,{kind:E.FLOAT,value:n.value});case w.STRING:case w.BLOCK_STRING:return this.parseStringLiteral();case w.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:E.BOOLEAN,value:!0});case"false":return this.node(n,{kind:E.BOOLEAN,value:!1});case"null":return this.node(n,{kind:E.NULL});default:return this.node(n,{kind:E.ENUM,value:n.value})}case w.DOLLAR:if(t)if(this.expectToken(w.DOLLAR),this._lexer.token.kind===w.NAME){let r=this._lexer.token.value;throw Ee(this._lexer.source,n.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){let t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:E.STRING,value:t.value,block:t.kind===w.BLOCK_STRING})}parseList(t){let n=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:E.LIST,values:this.any(w.BRACKET_L,n,w.BRACKET_R)})}parseObject(t){let n=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:E.OBJECT,fields:this.any(w.BRACE_L,n,w.BRACE_R)})}parseObjectField(t){let n=this._lexer.token,r=this.parseName();return this.expectToken(w.COLON),this.node(n,{kind:E.OBJECT_FIELD,name:r,value:this.parseValueLiteral(t)})}parseDirectives(t){let n=[];for(;this.peek(w.AT);)n.push(this.parseDirective(t));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){let n=this._lexer.token;return this.expectToken(w.AT),this.node(n,{kind:E.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){let t=this._lexer.token,n;if(this.expectOptionalToken(w.BRACKET_L)){let r=this.parseTypeReference();this.expectToken(w.BRACKET_R),n=this.node(t,{kind:E.LIST_TYPE,type:r})}else n=this.parseNamedType();return this.expectOptionalToken(w.BANG)?this.node(t,{kind:E.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:E.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(w.STRING)||this.peek(w.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");let r=this.parseConstDirectives(),o=this.many(w.BRACE_L,this.parseOperationTypeDefinition,w.BRACE_R);return this.node(t,{kind:E.SCHEMA_DEFINITION,description:n,directives:r,operationTypes:o})}parseOperationTypeDefinition(){let t=this._lexer.token,n=this.parseOperationType();this.expectToken(w.COLON);let r=this.parseNamedType();return this.node(t,{kind:E.OPERATION_TYPE_DEFINITION,operation:n,type:r})}parseScalarTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");let r=this.parseName(),o=this.parseConstDirectives();return this.node(t,{kind:E.SCALAR_TYPE_DEFINITION,description:n,name:r,directives:o})}parseObjectTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");let r=this.parseName(),o=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(t,{kind:E.OBJECT_TYPE_DEFINITION,description:n,name:r,interfaces:o,directives:i,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(w.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(w.BRACE_L,this.parseFieldDefinition,w.BRACE_R)}parseFieldDefinition(){let t=this._lexer.token,n=this.parseDescription(),r=this.parseName(),o=this.parseArgumentDefs();this.expectToken(w.COLON);let i=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(t,{kind:E.FIELD_DEFINITION,description:n,name:r,arguments:o,type:i,directives:s})}parseArgumentDefs(){return this.optionalMany(w.PAREN_L,this.parseInputValueDef,w.PAREN_R)}parseInputValueDef(){let t=this._lexer.token,n=this.parseDescription(),r=this.parseName();this.expectToken(w.COLON);let o=this.parseTypeReference(),i;this.expectOptionalToken(w.EQUALS)&&(i=this.parseConstValueLiteral());let s=this.parseConstDirectives();return this.node(t,{kind:E.INPUT_VALUE_DEFINITION,description:n,name:r,type:o,defaultValue:i,directives:s})}parseInterfaceTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");let r=this.parseName(),o=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(t,{kind:E.INTERFACE_TYPE_DEFINITION,description:n,name:r,interfaces:o,directives:i,fields:s})}parseUnionTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseUnionMemberTypes();return this.node(t,{kind:E.UNION_TYPE_DEFINITION,description:n,name:r,directives:o,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(w.EQUALS)?this.delimitedMany(w.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();return this.node(t,{kind:E.ENUM_TYPE_DEFINITION,description:n,name:r,directives:o,values:i})}parseEnumValuesDefinition(){return this.optionalMany(w.BRACE_L,this.parseEnumValueDefinition,w.BRACE_R)}parseEnumValueDefinition(){let t=this._lexer.token,n=this.parseDescription(),r=this.parseEnumValueName(),o=this.parseConstDirectives();return this.node(t,{kind:E.ENUM_VALUE_DEFINITION,description:n,name:r,directives:o})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Ee(this._lexer.source,this._lexer.token.start,`${bc(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();return this.node(t,{kind:E.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:r,directives:o,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(w.BRACE_L,this.parseInputValueDef,w.BRACE_R)}parseTypeSystemExtension(){let t=this._lexer.lookahead();if(t.kind===w.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");let n=this.parseConstDirectives(),r=this.optionalMany(w.BRACE_L,this.parseOperationTypeDefinition,w.BRACE_R);if(n.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:E.SCHEMA_EXTENSION,directives:n,operationTypes:r})}parseScalarTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");let n=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(t,{kind:E.SCALAR_TYPE_EXTENSION,name:n,directives:r})}parseObjectTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");let n=this.parseName(),r=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(r.length===0&&o.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:E.OBJECT_TYPE_EXTENSION,name:n,interfaces:r,directives:o,fields:i})}parseInterfaceTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");let n=this.parseName(),r=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(r.length===0&&o.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:E.INTERFACE_TYPE_EXTENSION,name:n,interfaces:r,directives:o,fields:i})}parseUnionTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseUnionMemberTypes();if(r.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:E.UNION_TYPE_EXTENSION,name:n,directives:r,types:o})}parseEnumTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();if(r.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:E.ENUM_TYPE_EXTENSION,name:n,directives:r,values:o})}parseInputObjectTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();if(r.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:E.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:r,fields:o})}parseDirectiveDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(w.AT);let r=this.parseName(),o=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");let s=this.parseDirectiveLocations();return this.node(t,{kind:E.DIRECTIVE_DEFINITION,description:n,name:r,arguments:o,repeatable:i,locations:s})}parseDirectiveLocations(){return this.delimitedMany(w.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){let t=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(gc,n.value))return n;throw this.unexpected(t)}parseSchemaCoordinate(){let t=this._lexer.token,n=this.expectOptionalToken(w.AT),r=this.parseName(),o;!n&&this.expectOptionalToken(w.DOT)&&(o=this.parseName());let i;return(n||o)&&this.expectOptionalToken(w.PAREN_L)&&(i=this.parseName(),this.expectToken(w.COLON),this.expectToken(w.PAREN_R)),n?i?this.node(t,{kind:E.DIRECTIVE_ARGUMENT_COORDINATE,name:r,argumentName:i}):this.node(t,{kind:E.DIRECTIVE_COORDINATE,name:r}):o?i?this.node(t,{kind:E.ARGUMENT_COORDINATE,name:r,fieldName:o,argumentName:i}):this.node(t,{kind:E.MEMBER_COORDINATE,name:r,memberName:o}):this.node(t,{kind:E.TYPE_COORDINATE,name:r})}node(t,n){return this._options.noLocation!==!0&&(n.loc=new Ni(t,this._lexer.lastToken,this._lexer.source)),n}peek(t){return this._lexer.token.kind===t}expectToken(t){let n=this._lexer.token;if(n.kind===t)return this.advanceLexer(),n;throw Ee(this._lexer.source,n.start,`Expected ${Vv(t)}, found ${bc(n)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){let n=this._lexer.token;if(n.kind===w.NAME&&n.value===t)this.advanceLexer();else throw Ee(this._lexer.source,n.start,`Expected "${t}", found ${bc(n)}.`)}expectOptionalKeyword(t){let n=this._lexer.token;return n.kind===w.NAME&&n.value===t?(this.advanceLexer(),!0):!1}unexpected(t){let n=t??this._lexer.token;return Ee(this._lexer.source,n.start,`Unexpected ${bc(n)}.`)}any(t,n,r){this.expectToken(t);let o=[];for(;!this.expectOptionalToken(r);)o.push(n.call(this));return o}optionalMany(t,n,r){if(this.expectOptionalToken(t)){let o=[];do o.push(n.call(this));while(!this.expectOptionalToken(r));return o}return[]}many(t,n,r){this.expectToken(t);let o=[];do o.push(n.call(this));while(!this.expectOptionalToken(r));return o}delimitedMany(t,n){this.expectOptionalToken(t);let r=[];do r.push(n.call(this));while(this.expectOptionalToken(t));return r}advanceLexer(){let{maxTokens:t}=this._options,n=this._lexer.advance();if(n.kind!==w.EOF&&(++this._tokenCounter,t!==void 0&&this._tokenCounter>t))throw Ee(this._lexer.source,n.start,`Document contains more that ${t} tokens. Parsing aborted.`)}};function bc(e){let t=e.value;return Vv(e.kind)+(t!=null?` "${t}"`:"")}function Vv(e){return Lv(e)?`"${e}"`:e}function $v(e){return`"${e.replace(WP,GP)}"`}var WP=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function GP(e){return QP[e.charCodeAt(0)]}var QP=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"];var ln=Object.freeze({});function Me(e,t,n=Kd){let r=new Map;for(let S of Object.values(E))r.set(S,tf(t,S));let o,i=Array.isArray(e),s=[e],c=-1,l=[],u=e,d,h,p=[],f=[];do{c++;let S=c===s.length,T=S&&l.length!==0;if(S){if(d=f.length===0?void 0:p[p.length-1],u=h,h=f.pop(),T)if(i){u=u.slice();let I=0;for(let[R,x]of l){let U=R-I;x===null?(u.splice(U,1),I++):u[U]=x}}else{u=M({},u);for(let[I,R]of l)u[I]=R}c=o.index,s=o.keys,l=o.edits,i=o.inArray,o=o.prev}else if(h){if(d=i?c:s[c],u=h[d],u==null)continue;p.push(d)}let D;if(!Array.isArray(u)){var g,y;Zd(u)||ho(!1,`Invalid AST Node: ${vo(u)}.`);let I=S?(g=r.get(u.kind))===null||g===void 0?void 0:g.leave:(y=r.get(u.kind))===null||y===void 0?void 0:y.enter;if(D=I?.call(t,u,d,h,p,f),D===ln)break;if(D===!1){if(!S){p.pop();continue}}else if(D!==void 0&&(l.push([d,D]),!S))if(Zd(D))u=D;else{p.pop();continue}}if(D===void 0&&T&&l.push([d,u]),S)p.pop();else{var b;o={inArray:i,index:c,keys:s,edits:l,prev:o},i=Array.isArray(u),s=i?u:(b=n[u.kind])!==null&&b!==void 0?b:[],c=-1,l=[],h&&f.push(h),h=u}}while(o!==void 0);return l.length!==0?l[l.length-1][1]:e}function tf(e,t){let n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function bo(e){return Me(e,KP)}var YP=80,KP={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>_(e.definitions,`

`)},OperationDefinition:{leave(e){let t=nf(e.variableDefinitions)?H(`(
`,_(e.variableDefinitions,`
`),`
)`):H("(",_(e.variableDefinitions,", "),")"),n=H("",e.description,`
`)+_([e.operation,_([e.name,t]),_(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r,description:o})=>H("",o,`
`)+e+": "+t+H(" = ",n)+H(" ",_(r," "))},SelectionSet:{leave:({selections:e})=>kt(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:o}){let i=H("",e,": ")+t,s=i+H("(",_(n,", "),")");return s.length>YP&&(s=i+H(`(
`,wc(_(n,`
`)),`
)`)),_([s,_(r," "),o]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+H(" ",_(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>_(["...",H("on ",e),_(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:o,description:i})=>H("",i,`
`)+`fragment ${e}${H("(",_(n,", "),")")} on ${t} ${H("",_(r," ")," ")}`+o},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?Av(e):$v(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+_(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+_(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+H("(",_(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>H("",e,`
`)+_(["schema",_(t," "),kt(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>H("",e,`
`)+_(["scalar",t,_(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:o})=>H("",e,`
`)+_(["type",t,H("implements ",_(n," & ")),_(r," "),kt(o)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:o})=>H("",e,`
`)+t+(nf(n)?H(`(
`,wc(_(n,`
`)),`
)`):H("(",_(n,", "),")"))+": "+r+H(" ",_(o," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:o})=>H("",e,`
`)+_([t+": "+n,H("= ",r),_(o," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:o})=>H("",e,`
`)+_(["interface",t,H("implements ",_(n," & ")),_(r," "),kt(o)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>H("",e,`
`)+_(["union",t,_(n," "),H("= ",_(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>H("",e,`
`)+_(["enum",t,_(n," "),kt(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>H("",e,`
`)+_([t,_(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>H("",e,`
`)+_(["input",t,_(n," "),kt(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,repeatable:r,locations:o})=>H("",e,`
`)+"directive @"+t+(nf(n)?H(`(
`,wc(_(n,`
`)),`
)`):H("(",_(n,", "),")"))+(r?" repeatable":"")+" on "+_(o," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>_(["extend schema",_(e," "),kt(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>_(["extend scalar",e,_(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>_(["extend type",e,H("implements ",_(t," & ")),_(n," "),kt(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>_(["extend interface",e,H("implements ",_(t," & ")),_(n," "),kt(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>_(["extend union",e,_(t," "),H("= ",_(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>_(["extend enum",e,_(t," "),kt(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>_(["extend input",e,_(t," "),kt(n)]," ")},TypeCoordinate:{leave:({name:e})=>e},MemberCoordinate:{leave:({name:e,memberName:t})=>_([e,H(".",t)])},ArgumentCoordinate:{leave:({name:e,fieldName:t,argumentName:n})=>_([e,H(".",t),H("(",n,":)")])},DirectiveCoordinate:{leave:({name:e})=>_(["@",e])},DirectiveArgumentCoordinate:{leave:({name:e,argumentName:t})=>_(["@",e,H("(",t,":)")])}};function _(e,t=""){var n;return(n=e?.filter(r=>r).join(t))!==null&&n!==void 0?n:""}function kt(e){return H(`{
`,wc(_(e,`
`)),`
}`)}function H(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function wc(e){return H("  ",e.replace(/\n/g,`
  `))}function nf(e){var t;return(t=e?.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}function Fi(e){return e.kind===E.FIELD||e.kind===E.FRAGMENT_SPREAD||e.kind===E.INLINE_FRAGMENT}function Nt(e,t){var n=e.directives;return!n||!n.length?!0:zv(n).every(function(r){var o=r.directive,i=r.ifArgument,s=!1;return i.value.kind==="Variable"?(s=t&&t[i.value.name.value],C(s!==void 0,78,o.name.value)):s=i.value.value,o.name.value==="skip"?!s:s})}function un(e,t,n){var r=new Set(e),o=r.size;return Me(t,{Directive:function(i){if(r.delete(i.name.value)&&(!n||!r.size))return ln}}),n?!r.size:r.size<o}function rf(e){return e&&un(["client","export"],e,!0)}function hR(e){var t=e.name.value;return t==="skip"||t==="include"}function zv(e){var t=[];return e&&e.length&&e.forEach(function(n){if(hR(n)){var r=n.arguments,o=n.name.value;C(r&&r.length===1,79,o);var i=r[0];C(i.name&&i.name.value==="if",80,o);var s=i.value;C(s&&(s.kind==="Variable"||s.kind==="BooleanValue"),81,o),t.push({directive:n,ifArgument:i})}}),t}function of(e){var t,n,r=(t=e.directives)===null||t===void 0?void 0:t.find(function(i){var s=i.name;return s.value==="unmask"});if(!r)return"mask";var o=(n=r.arguments)===null||n===void 0?void 0:n.find(function(i){var s=i.name;return s.value==="mode"});return globalThis.__DEV__!==!1&&o&&(o.value.kind===E.VARIABLE?globalThis.__DEV__!==!1&&C.warn(82):o.value.kind!==E.STRING?globalThis.__DEV__!==!1&&C.warn(83):o.value.value!=="migrate"&&globalThis.__DEV__!==!1&&C.warn(84,o.value.value)),o&&"value"in o.value&&o.value.value==="migrate"?"migrate":"unmask"}var pR=()=>Object.create(null),{forEach:mR,slice:qv}=Array.prototype,{hasOwnProperty:gR}=Object.prototype,ze=class e{constructor(t=!0,n=pR){this.weakness=t,this.makeData=n}lookup(){return this.lookupArray(arguments)}lookupArray(t){let n=this;return mR.call(t,r=>n=n.getChildTrie(r)),gR.call(n,"data")?n.data:n.data=this.makeData(qv.call(t))}peek(){return this.peekArray(arguments)}peekArray(t){let n=this;for(let r=0,o=t.length;n&&r<o;++r){let i=n.mapFor(t[r],!1);n=i&&i.get(t[r])}return n&&n.data}remove(){return this.removeArray(arguments)}removeArray(t){let n;if(t.length){let r=t[0],o=this.mapFor(r,!1),i=o&&o.get(r);i&&(n=i.removeArray(qv.call(t,1)),!i.data&&!i.weak&&!(i.strong&&i.strong.size)&&o.delete(r))}else n=this.data,delete this.data;return n}getChildTrie(t){let n=this.mapFor(t,!0),r=n.get(t);return r||n.set(t,r=new e(this.weakness,this.makeData)),r}mapFor(t,n){return this.weakness&&yR(t)?this.weak||(n?this.weak=new WeakMap:void 0):this.strong||(n?this.strong=new Map:void 0)}};function yR(e){switch(typeof e){case"object":if(e===null)break;case"function":return!0}return!1}var vR=Be(function(){return navigator.product})=="ReactNative",ct=typeof WeakMap=="function"&&!(vR&&!global.HermesInternal),Do=typeof WeakSet=="function",sf=typeof Symbol=="function"&&typeof Symbol.for=="function",Fn=sf&&Symbol.asyncIterator,iB=typeof Be(function(){return window.document.createElement})=="function",sB=Be(function(){return navigator.userAgent.indexOf("jsdom")>=0})||!1;function Z(e){return e!==null&&typeof e=="object"}function af(e,t){var n=t,r=[];e.definitions.forEach(function(i){if(i.kind==="OperationDefinition")throw ue(85,i.operation,i.name?" named '".concat(i.name.value,"'"):"");i.kind==="FragmentDefinition"&&r.push(i)}),typeof n>"u"&&(C(r.length===1,86,r.length),n=r[0].name.value);var o=v(v({},e),{definitions:De([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:n}}]}}],e.definitions,!0)});return o}function lt(e){e===void 0&&(e=[]);var t={};return e.forEach(function(n){t[n.name.value]=n}),t}function dn(e,t){switch(e.kind){case"InlineFragment":return e;case"FragmentSpread":{var n=e.name.value;if(typeof t=="function")return t(n);var r=t&&t[n];return C(r,87,n),r||null}default:return null}}function cf(e){var t=!0;return Me(e,{FragmentSpread:function(n){if(t=!!n.directives&&n.directives.some(function(r){return r.name.value==="unmask"}),!t)return ln}}),t}function SR(){}var Ln=class{constructor(t=1/0,n=SR){this.max=t,this.dispose=n,this.map=new Map,this.newest=null,this.oldest=null}has(t){return this.map.has(t)}get(t){let n=this.getNode(t);return n&&n.value}get size(){return this.map.size}getNode(t){let n=this.map.get(t);if(n&&n!==this.newest){let{older:r,newer:o}=n;o&&(o.older=r),r&&(r.newer=o),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=o)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(t,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(t){let n=this.map.get(t);return n?(n===this.newest&&(this.newest=n.older),n===this.oldest&&(this.oldest=n.newer),n.newer&&(n.newer.older=n.older),n.older&&(n.older.newer=n.newer),this.map.delete(t),this.dispose(n.value,t),!0):!1}};function lf(){}var bR=lf,DR=typeof WeakRef<"u"?WeakRef:function(e){return{deref:()=>e}},wR=typeof WeakMap<"u"?WeakMap:Map,TR=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:lf,unregister:lf}},ER=10024,Wt=class{constructor(t=1/0,n=bR){this.max=t,this.dispose=n,this.map=new wR,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{let r=this.unfinalizedNodes.values();for(let o=0;o<ER;o++){let i=r.next().value;if(!i)break;this.unfinalizedNodes.delete(i);let s=i.key;delete i.key,i.keyRef=new DR(s),this.registry.register(s,i,i)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new TR(this.deleteNode.bind(this))}has(t){return this.map.has(t)}get(t){let n=this.getNode(t);return n&&n.value}getNode(t){let n=this.map.get(t);if(n&&n!==this.newest){let{older:r,newer:o}=n;o&&(o.older=r),r&&(r.newer=o),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=o)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.scheduleFinalization(r),this.map.set(t,r),this.size++,r.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(t){t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.size--;let n=t.key||t.keyRef&&t.keyRef.deref();this.dispose(t.value,n),t.keyRef?this.registry.unregister(t):this.unfinalizedNodes.delete(t),n&&this.map.delete(n)}delete(t){let n=this.map.get(t);return n?(this.deleteNode(n),!0):!1}scheduleFinalization(t){this.unfinalizedNodes.add(t),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}};var uf=new WeakSet;function Wv(e){e.size<=(e.max||-1)||uf.has(e)||(uf.add(e),setTimeout(function(){e.clean(),uf.delete(e)},100))}var wo=function(e,t){var n=new Wt(e,t);return n.set=function(r,o){var i=Wt.prototype.set.call(this,r,o);return Wv(this),i},n},Tc=function(e,t){var n=new Ln(e,t);return n.set=function(r,o){var i=Ln.prototype.set.call(this,r,o);return Wv(this),i},n};var CR=Symbol.for("apollo.cacheSize"),_e=v({},fo[CR]);var pr={};function Ec(e,t){pr[e]=t}var Gv=globalThis.__DEV__!==!1?PR:void 0,Qv=globalThis.__DEV__!==!1?RR:void 0,Yv=globalThis.__DEV__!==!1?Kv:void 0;function IR(){var e={parser:1e3,canonicalStringify:1e3,print:2e3,"documentTransform.cache":2e3,"queryManager.getDocumentInfo":2e3,"PersistedQueryLink.persistedQueryHashes":2e3,"fragmentRegistry.transform":2e3,"fragmentRegistry.lookup":1e3,"fragmentRegistry.findFragmentSpreads":4e3,"cache.fragmentQueryDocuments":1e3,"removeTypenameFromVariables.getVariableDefinitions":2e3,"inMemoryCache.maybeBroadcastWatch":5e3,"inMemoryCache.executeSelectionSet":5e4,"inMemoryCache.executeSubSelectedArray":1e4};return Object.fromEntries(Object.entries(e).map(function(t){var n=t[0],r=t[1];return[n,_e[n]||r]}))}function PR(){var e,t,n,r,o;if(globalThis.__DEV__===!1)throw new Error("only supported in development mode");return{limits:IR(),sizes:v({print:(e=pr.print)===null||e===void 0?void 0:e.call(pr),parser:(t=pr.parser)===null||t===void 0?void 0:t.call(pr),canonicalStringify:(n=pr.canonicalStringify)===null||n===void 0?void 0:n.call(pr),links:ff(this.link),queryManager:{getDocumentInfo:this.queryManager.transformCache.size,documentTransforms:Jv(this.queryManager.documentTransform)}},(o=(r=this.cache).getMemoryInternals)===null||o===void 0?void 0:o.call(r))}}function Kv(){return{cache:{fragmentQueryDocuments:Hn(this.getFragmentDoc)}}}function RR(){var e=this.config.fragments;return v(v({},Kv.apply(this)),{addTypenameDocumentTransform:Jv(this.addTypenameTransform),inMemoryCache:{executeSelectionSet:Hn(this.storeReader.executeSelectionSet),executeSubSelectedArray:Hn(this.storeReader.executeSubSelectedArray),maybeBroadcastWatch:Hn(this.maybeBroadcastWatch)},fragmentRegistry:{findFragmentSpreads:Hn(e?.findFragmentSpreads),lookup:Hn(e?.lookup),transform:Hn(e?.transform)}})}function MR(e){return!!e&&"dirtyKey"in e}function Hn(e){return MR(e)?e.size:void 0}function Zv(e){return e!=null}function Jv(e){return df(e).map(function(t){return{cache:t}})}function df(e){return e?De(De([Hn(e?.performWork)],df(e?.left),!0),df(e?.right),!0).filter(Zv):[]}function ff(e){var t;return e?De(De([(t=e?.getMemoryInternals)===null||t===void 0?void 0:t.call(e)],ff(e?.left),!0),ff(e?.right),!0).filter(Zv):[]}var qe=Object.assign(function(t){return JSON.stringify(t,_R)},{reset:function(){To=new Tc(_e.canonicalStringify||1e3)}});globalThis.__DEV__!==!1&&Ec("canonicalStringify",function(){return To.size});var To;qe.reset();function _R(e,t){if(t&&typeof t=="object"){var n=Object.getPrototypeOf(t);if(n===Object.prototype||n===null){var r=Object.keys(t);if(r.every(xR))return t;var o=JSON.stringify(r),i=To.get(o);if(!i){r.sort();var s=JSON.stringify(r);i=To.get(s)||r,To.set(o,i),To.set(s,i)}var c=Object.create(n);return i.forEach(function(l){c[l]=t[l]}),c}}return t}function xR(e,t,n){return t===0||n[t-1]<=e}function St(e){return{__ref:String(e)}}function W(e){return!!(e&&typeof e=="object"&&typeof e.__ref=="string")}function hf(e){return Z(e)&&e.kind==="Document"&&Array.isArray(e.definitions)}function kR(e){return e.kind==="StringValue"}function NR(e){return e.kind==="BooleanValue"}function OR(e){return e.kind==="IntValue"}function AR(e){return e.kind==="FloatValue"}function FR(e){return e.kind==="Variable"}function LR(e){return e.kind==="ObjectValue"}function HR(e){return e.kind==="ListValue"}function UR(e){return e.kind==="EnumValue"}function jR(e){return e.kind==="NullValue"}function Un(e,t,n,r){if(OR(n)||AR(n))e[t.value]=Number(n.value);else if(NR(n)||kR(n))e[t.value]=n.value;else if(LR(n)){var o={};n.fields.map(function(s){return Un(o,s.name,s.value,r)}),e[t.value]=o}else if(FR(n)){var i=(r||{})[n.name.value];e[t.value]=i}else if(HR(n))e[t.value]=n.values.map(function(s){var c={};return Un(c,t,s,r),c[t.value]});else if(UR(n))e[t.value]=n.value;else if(jR(n))e[t.value]=null;else throw ue(96,t.value,n.kind)}function pf(e,t){var n=null;e.directives&&(n={},e.directives.forEach(function(o){n[o.name.value]={},o.arguments&&o.arguments.forEach(function(i){var s=i.name,c=i.value;return Un(n[o.name.value],s,c,t)})}));var r=null;return e.arguments&&e.arguments.length&&(r={},e.arguments.forEach(function(o){var i=o.name,s=o.value;return Un(r,i,s,t)})),Cc(e.name.value,r,n)}var BR=["connection","include","skip","client","rest","export","nonreactive"],Li=qe,Cc=Object.assign(function(e,t,n){if(t&&n&&n.connection&&n.connection.key)if(n.connection.filter&&n.connection.filter.length>0){var r=n.connection.filter?n.connection.filter:[];r.sort();var o={};return r.forEach(function(c){o[c]=t[c]}),"".concat(n.connection.key,"(").concat(Li(o),")")}else return n.connection.key;var i=e;if(t){var s=Li(t);i+="(".concat(s,")")}return n&&Object.keys(n).forEach(function(c){BR.indexOf(c)===-1&&(n[c]&&Object.keys(n[c]).length?i+="@".concat(c,"(").concat(Li(n[c]),")"):i+="@".concat(c))}),i},{setStringify:function(e){var t=Li;return Li=e,t}});function fn(e,t){if(e.arguments&&e.arguments.length){var n={};return e.arguments.forEach(function(r){var o=r.name,i=r.value;return Un(n,o,i,t)}),n}return null}function Ve(e){return e.alias?e.alias.value:e.name.value}function Hi(e,t,n){for(var r,o=0,i=t.selections;o<i.length;o++){var s=i[o];if(We(s)){if(s.name.value==="__typename")return e[Ve(s)]}else r?r.push(s):r=[s]}if(typeof e.__typename=="string")return e.__typename;if(r)for(var c=0,l=r;c<l.length;c++){var s=l[c],u=Hi(e,dn(s,n).selectionSet,n);if(typeof u=="string")return u}}function We(e){return e.kind==="Field"}function mf(e){return e.kind==="InlineFragment"}function hn(e){C(e&&e.kind==="Document",88);var t=e.definitions.filter(function(n){return n.kind!=="FragmentDefinition"}).map(function(n){if(n.kind!=="OperationDefinition")throw ue(89,n.kind);return n});return C(t.length<=1,90,t.length),e}function ut(e){return hn(e),e.definitions.filter(function(t){return t.kind==="OperationDefinition"})[0]}function jn(e){return e.definitions.filter(function(t){return t.kind==="OperationDefinition"&&!!t.name}).map(function(t){return t.name.value})[0]||null}function dt(e){return e.definitions.filter(function(t){return t.kind==="FragmentDefinition"})}function Ui(e){var t=ut(e);return C(t&&t.operation==="query",91),t}function ji(e){C(e.kind==="Document",92),C(e.definitions.length<=1,93);var t=e.definitions[0];return C(t.kind==="FragmentDefinition",94),t}function Ot(e){hn(e);for(var t,n=0,r=e.definitions;n<r.length;n++){var o=r[n];if(o.kind==="OperationDefinition"){var i=o.operation;if(i==="query"||i==="mutation"||i==="subscription")return o}o.kind==="FragmentDefinition"&&!t&&(t=o)}if(t)return t;throw ue(95)}function mr(e){var t=Object.create(null),n=e&&e.variableDefinitions;return n&&n.length&&n.forEach(function(r){r.defaultValue&&Un(t,r.variable.name,r.defaultValue)}),t}var Ue=null,Xv={},VR=1,$R=()=>class{constructor(){this.id=["slot",VR++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let t=Ue;t;t=t.parent)if(this.id in t.slots){let n=t.slots[this.id];if(n===Xv)break;return t!==Ue&&(Ue.slots[this.id]=n),!0}return Ue&&(Ue.slots[this.id]=Xv),!1}getValue(){if(this.hasValue())return Ue.slots[this.id]}withValue(t,n,r,o){let i={__proto__:null,[this.id]:t},s=Ue;Ue={parent:s,slots:i};try{return n.apply(o,r)}finally{Ue=s}}static bind(t){let n=Ue;return function(){let r=Ue;try{return Ue=n,t.apply(this,arguments)}finally{Ue=r}}}static noContext(t,n,r){if(Ue){let o=Ue;try{return Ue=null,t.apply(r,n)}finally{Ue=o}}else return t.apply(r,n)}};function eS(e){try{return e()}catch{}}var gf="@wry/context:Slot",zR=eS(()=>globalThis)||eS(()=>global)||Object.create(null),tS=zR,pn=tS[gf]||Array[gf]||function(e){try{Object.defineProperty(tS,gf,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}($R());var{bind:nS,noContext:rS}=pn;var gr=new pn;var{hasOwnProperty:oS}=Object.prototype,Bi=Array.from||function(e){let t=[];return e.forEach(n=>t.push(n)),t};function Eo(e){let{unsubscribe:t}=e;typeof t=="function"&&(e.unsubscribe=void 0,t())}var Vi=[],GR=100;function Co(e,t){if(!e)throw new Error(t||"assertion failure")}function sS(e,t){let n=e.length;return n>0&&n===t.length&&e[n-1]===t[n-1]}function aS(e){switch(e.length){case 0:throw new Error("unknown value");case 1:return e[0];case 2:throw e[1]}}function cS(e){return e.slice(0)}var lS=(()=>{class e{constructor(n){this.fn=n,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++e.count}peek(){if(this.value.length===1&&!Bn(this))return iS(this),this.value[0]}recompute(n){return Co(!this.recomputing,"already recomputing"),iS(this),Bn(this)?QR(this,n):aS(this.value)}setDirty(){this.dirty||(this.dirty=!0,uS(this),Eo(this))}dispose(){this.setDirty(),mS(this),yf(this,(n,r)=>{n.setDirty(),gS(n,this)})}forget(){this.dispose()}dependOn(n){n.add(this),this.deps||(this.deps=Vi.pop()||new Set),this.deps.add(n)}forgetDeps(){this.deps&&(Bi(this.deps).forEach(n=>n.delete(this)),this.deps.clear(),Vi.push(this.deps),this.deps=null)}}return e.count=0,e})();function iS(e){let t=gr.getValue();if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),Bn(e)?fS(t,e):hS(t,e),t}function QR(e,t){return mS(e),gr.withValue(e,YR,[e,t]),ZR(e,t)&&KR(e),aS(e.value)}function YR(e,t){e.recomputing=!0;let{normalizeResult:n}=e,r;n&&e.value.length===1&&(r=cS(e.value)),e.value.length=0;try{if(e.value[0]=e.fn.apply(null,t),n&&r&&!sS(r,e.value))try{e.value[0]=n(e.value[0],r[0])}catch{}}catch(o){e.value[1]=o}e.recomputing=!1}function Bn(e){return e.dirty||!!(e.dirtyChildren&&e.dirtyChildren.size)}function KR(e){e.dirty=!1,!Bn(e)&&dS(e)}function uS(e){yf(e,fS)}function dS(e){yf(e,hS)}function yf(e,t){let n=e.parents.size;if(n){let r=Bi(e.parents);for(let o=0;o<n;++o)t(r[o],e)}}function fS(e,t){Co(e.childValues.has(t)),Co(Bn(t));let n=!Bn(e);if(!e.dirtyChildren)e.dirtyChildren=Vi.pop()||new Set;else if(e.dirtyChildren.has(t))return;e.dirtyChildren.add(t),n&&uS(e)}function hS(e,t){Co(e.childValues.has(t)),Co(!Bn(t));let n=e.childValues.get(t);n.length===0?e.childValues.set(t,cS(t.value)):sS(n,t.value)||e.setDirty(),pS(e,t),!Bn(e)&&dS(e)}function pS(e,t){let n=e.dirtyChildren;n&&(n.delete(t),n.size===0&&(Vi.length<GR&&Vi.push(n),e.dirtyChildren=null))}function mS(e){e.childValues.size>0&&e.childValues.forEach((t,n)=>{gS(e,n)}),e.forgetDeps(),Co(e.dirtyChildren===null)}function gS(e,t){t.parents.delete(e),e.childValues.delete(t),pS(e,t)}function ZR(e,t){if(typeof e.subscribe=="function")try{Eo(e),e.unsubscribe=e.subscribe.apply(null,t)}catch{return e.setDirty(),!1}return!0}var JR={setDirty:!0,dispose:!0,forget:!0};function $i(e){let t=new Map,n=e&&e.subscribe;function r(o){let i=gr.getValue();if(i){let s=t.get(o);s||t.set(o,s=new Set),i.dependOn(s),typeof n=="function"&&(Eo(s),s.unsubscribe=n(o))}}return r.dirty=function(i,s){let c=t.get(i);if(c){let l=s&&oS.call(JR,s)?s:"setDirty";Bi(c).forEach(u=>u[l]()),t.delete(i),Eo(c)}},r}var yS;function XR(...e){return(yS||(yS=new ze(typeof WeakMap=="function"))).lookupArray(e)}var vf=new Set;function mn(e,{max:t=Math.pow(2,16),keyArgs:n,makeCacheKey:r=XR,normalizeResult:o,subscribe:i,cache:s=Ln}=Object.create(null)){let c=typeof s=="function"?new s(t,p=>p.dispose()):s,l=function(){let p=r.apply(null,n?n.apply(null,arguments):arguments);if(p===void 0)return e.apply(null,arguments);let f=c.get(p);f||(c.set(p,f=new lS(e)),f.normalizeResult=o,f.subscribe=i,f.forget=()=>c.delete(p));let g=f.recompute(Array.prototype.slice.call(arguments));return c.set(p,f),vf.add(c),gr.hasValue()||(vf.forEach(y=>y.clean()),vf.clear()),g};Object.defineProperty(l,"size",{get:()=>c.size,configurable:!1,enumerable:!1}),Object.freeze(l.options={max:t,keyArgs:n,makeCacheKey:r,normalizeResult:o,subscribe:i,cache:c});function u(p){let f=p&&c.get(p);f&&f.setDirty()}l.dirtyKey=u,l.dirty=function(){u(r.apply(null,arguments))};function d(p){let f=p&&c.get(p);if(f)return f.peek()}l.peekKey=d,l.peek=function(){return d(r.apply(null,arguments))};function h(p){return p?c.delete(p):!1}return l.forgetKey=h,l.forget=function(){return h(r.apply(null,arguments))},l.makeCacheKey=r,l.getKey=n?function(){return r.apply(null,n.apply(null,arguments))}:r,Object.freeze(l)}function eM(e){return e}var Io=function(){function e(t,n){n===void 0&&(n=Object.create(null)),this.resultCache=Do?new WeakSet:new Set,this.transform=t,n.getCacheKey&&(this.getCacheKey=n.getCacheKey),this.cached=n.cache!==!1,this.resetCache()}return e.prototype.getCacheKey=function(t){return[t]},e.identity=function(){return new e(eM,{cache:!1})},e.split=function(t,n,r){return r===void 0&&(r=e.identity()),Object.assign(new e(function(o){var i=t(o)?n:r;return i.transformDocument(o)},{cache:!1}),{left:n,right:r})},e.prototype.resetCache=function(){var t=this;if(this.cached){var n=new ze(ct);this.performWork=mn(e.prototype.performWork.bind(this),{makeCacheKey:function(r){var o=t.getCacheKey(r);if(o)return C(Array.isArray(o),77),n.lookupArray(o)},max:_e["documentTransform.cache"],cache:Wt})}},e.prototype.performWork=function(t){return hn(t),this.transform(t)},e.prototype.transformDocument=function(t){if(this.resultCache.has(t))return t;var n=this.performWork(t);return this.resultCache.add(n),n},e.prototype.concat=function(t){var n=this;return Object.assign(new e(function(r){return t.transformDocument(n.transformDocument(r))},{cache:!1}),{left:this,right:t})},e}();var zi,At=Object.assign(function(e){var t=zi.get(e);return t||(t=bo(e),zi.set(e,t)),t},{reset:function(){zi=new wo(_e.print||2e3)}});At.reset();globalThis.__DEV__!==!1&&Ec("print",function(){return zi?zi.size:0});var ie=Array.isArray;function je(e){return Array.isArray(e)&&e.length>0}var vS={kind:E.FIELD,name:{kind:E.NAME,value:"__typename"}};function bS(e,t){return!e||e.selectionSet.selections.every(function(n){return n.kind===E.FRAGMENT_SPREAD&&bS(t[n.name.value],t)})}function tM(e){return bS(ut(e)||ji(e),lt(dt(e)))?null:e}function nM(e){var t=new Map,n=new Map;return e.forEach(function(r){r&&(r.name?t.set(r.name,r):r.test&&n.set(r.test,r))}),function(r){var o=t.get(r.name.value);return!o&&n.size&&n.forEach(function(i,s){s(r)&&(o=i)}),o}}function SS(e){var t=new Map;return function(r){r===void 0&&(r=e);var o=t.get(r);return o||t.set(r,o={variables:new Set,fragmentSpreads:new Set}),o}}function Ic(e,t){hn(t);for(var n=SS(""),r=SS(""),o=function(S){for(var T=0,D=void 0;T<S.length&&(D=S[T]);++T)if(!ie(D)){if(D.kind===E.OPERATION_DEFINITION)return n(D.name&&D.name.value);if(D.kind===E.FRAGMENT_DEFINITION)return r(D.name.value)}return globalThis.__DEV__!==!1&&C.error(97),null},i=0,s=t.definitions.length-1;s>=0;--s)t.definitions[s].kind===E.OPERATION_DEFINITION&&++i;var c=nM(e),l=function(S){return je(S)&&S.map(c).some(function(T){return T&&T.remove})},u=new Map,d=!1,h={enter:function(S){if(l(S.directives))return d=!0,null}},p=Me(t,{Field:h,InlineFragment:h,VariableDefinition:{enter:function(){return!1}},Variable:{enter:function(S,T,D,I,R){var x=o(R);x&&x.variables.add(S.name.value)}},FragmentSpread:{enter:function(S,T,D,I,R){if(l(S.directives))return d=!0,null;var x=o(R);x&&x.fragmentSpreads.add(S.name.value)}},FragmentDefinition:{enter:function(S,T,D,I){u.set(JSON.stringify(I),S)},leave:function(S,T,D,I){var R=u.get(JSON.stringify(I));if(S===R)return S;if(i>0&&S.selectionSet.selections.every(function(x){return x.kind===E.FIELD&&x.name.value==="__typename"}))return r(S.name.value).removed=!0,d=!0,null}},Directive:{leave:function(S){if(c(S))return d=!0,null}}});if(!d)return t;var f=function(S){return S.transitiveVars||(S.transitiveVars=new Set(S.variables),S.removed||S.fragmentSpreads.forEach(function(T){f(r(T)).transitiveVars.forEach(function(D){S.transitiveVars.add(D)})})),S},g=new Set;p.definitions.forEach(function(S){S.kind===E.OPERATION_DEFINITION?f(n(S.name&&S.name.value)).fragmentSpreads.forEach(function(T){g.add(T)}):S.kind===E.FRAGMENT_DEFINITION&&i===0&&!r(S.name.value).removed&&g.add(S.name.value)}),g.forEach(function(S){f(r(S)).fragmentSpreads.forEach(function(T){g.add(T)})});var y=function(S){return!!(!g.has(S)||r(S).removed)},b={enter:function(S){if(y(S.name.value))return null}};return tM(Me(p,{FragmentSpread:b,FragmentDefinition:b,OperationDefinition:{leave:function(S){if(S.variableDefinitions){var T=f(n(S.name&&S.name.value)).transitiveVars;if(T.size<S.variableDefinitions.length)return v(v({},S),{variableDefinitions:S.variableDefinitions.filter(function(D){return T.has(D.variable.name.value)})})}}}}))}var yr=Object.assign(function(e){return Me(e,{SelectionSet:{enter:function(t,n,r){if(!(r&&r.kind===E.OPERATION_DEFINITION)){var o=t.selections;if(o){var i=o.some(function(c){return We(c)&&(c.name.value==="__typename"||c.name.value.lastIndexOf("__",0)===0)});if(!i){var s=r;if(!(We(s)&&s.directives&&s.directives.some(function(c){return c.name.value==="export"})))return v(v({},t),{selections:De(De([],o,!0),[vS],!1)})}}}}}})},{added:function(e){return e===vS}});function Sf(e){var t=Ot(e),n=t.operation;if(n==="query")return e;var r=Me(e,{OperationDefinition:{enter:function(o){return v(v({},o),{operation:"query"})}}});return r}function qi(e){hn(e);var t=Ic([{test:function(n){return n.name.value==="client"},remove:!0}],e);return t}function bf(e){return hn(e),Me(e,{FragmentSpread:function(t){var n;if(!(!((n=t.directives)===null||n===void 0)&&n.some(function(r){return r.name.value==="unmask"})))return v(v({},t),{directives:De(De([],t.directives||[],!0),[{kind:E.DIRECTIVE,name:{kind:E.NAME,value:"nonreactive"}}],!1)})}})}var rM=Object.prototype.hasOwnProperty;function Df(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return vr(e)}function vr(e){var t=e[0]||{},n=e.length;if(n>1)for(var r=new Xe,o=1;o<n;++o)t=r.merge(t,e[o]);return t}var oM=function(e,t,n){return this.merge(e[n],t[n])},Xe=function(){function e(t){t===void 0&&(t=oM),this.reconciler=t,this.isObject=Z,this.pastCopies=new Set}return e.prototype.merge=function(t,n){for(var r=this,o=[],i=2;i<arguments.length;i++)o[i-2]=arguments[i];return Z(n)&&Z(t)?(Object.keys(n).forEach(function(s){if(rM.call(t,s)){var c=t[s];if(n[s]!==c){var l=r.reconciler.apply(r,De([t,n,s],o,!1));l!==c&&(t=r.shallowCopyForMerge(t),t[s]=l)}}else t=r.shallowCopyForMerge(t),t[s]=n[s]}),t):n},e.prototype.shallowCopyForMerge=function(t){return Z(t)&&(this.pastCopies.has(t)||(Array.isArray(t)?t=t.slice(0):t=v({__proto__:Object.getPrototypeOf(t)},t),this.pastCopies.add(t))),t},e}();function iM(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=sM(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sM(e,t){if(e){if(typeof e=="string")return DS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DS(e,t)}}function DS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function wS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Cf(e,t,n){return t&&wS(e.prototype,t),n&&wS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var If=function(){return typeof Symbol=="function"},Pf=function(e){return If()&&!!Symbol[e]},Rf=function(e){return Pf(e)?Symbol[e]:"@@"+e};If()&&!Pf("observable")&&(Symbol.observable=Symbol("observable"));var aM=Rf("iterator"),Tf=Rf("observable"),TS=Rf("species");function Rc(e,t){var n=e[t];if(n!=null){if(typeof n!="function")throw new TypeError(n+" is not a function");return n}}function Wi(e){var t=e.constructor;return t!==void 0&&(t=t[TS],t===null&&(t=void 0)),t!==void 0?t:$}function cM(e){return e instanceof $}function Po(e){Po.log?Po.log(e):setTimeout(function(){throw e})}function Pc(e){Promise.resolve().then(function(){try{e()}catch(t){Po(t)}})}function ES(e){var t=e._cleanup;if(t!==void 0&&(e._cleanup=void 0,!!t))try{if(typeof t=="function")t();else{var n=Rc(t,"unsubscribe");n&&n.call(t)}}catch(r){Po(r)}}function Ef(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function lM(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var n=0;n<t.length&&(CS(e,t[n].type,t[n].value),e._state!=="closed");++n);}}function CS(e,t,n){e._state="running";var r=e._observer;try{var o=Rc(r,t);switch(t){case"next":o&&o.call(r,n);break;case"error":if(Ef(e),o)o.call(r,n);else throw n;break;case"complete":Ef(e),o&&o.call(r);break}}catch(i){Po(i)}e._state==="closed"?ES(e):e._state==="running"&&(e._state="ready")}function wf(e,t,n){if(e._state!=="closed"){if(e._state==="buffering"){e._queue.push({type:t,value:n});return}if(e._state!=="ready"){e._state="buffering",e._queue=[{type:t,value:n}],Pc(function(){return lM(e)});return}CS(e,t,n)}}var uM=function(){function e(n,r){this._cleanup=void 0,this._observer=n,this._queue=void 0,this._state="initializing";var o=new dM(this);try{this._cleanup=r.call(void 0,o)}catch(i){o.error(i)}this._state==="initializing"&&(this._state="ready")}var t=e.prototype;return t.unsubscribe=function(){this._state!=="closed"&&(Ef(this),ES(this))},Cf(e,[{key:"closed",get:function(){return this._state==="closed"}}]),e}(),dM=function(){function e(n){this._subscription=n}var t=e.prototype;return t.next=function(r){wf(this._subscription,"next",r)},t.error=function(r){wf(this._subscription,"error",r)},t.complete=function(){wf(this._subscription,"complete")},Cf(e,[{key:"closed",get:function(){return this._subscription._state==="closed"}}]),e}(),$=function(){function e(n){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if(typeof n!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=n}var t=e.prototype;return t.subscribe=function(r){return(typeof r!="object"||r===null)&&(r={next:r,error:arguments[1],complete:arguments[2]}),new uM(r,this._subscriber)},t.forEach=function(r){var o=this;return new Promise(function(i,s){if(typeof r!="function"){s(new TypeError(r+" is not a function"));return}function c(){l.unsubscribe(),i()}var l=o.subscribe({next:function(u){try{r(u,c)}catch(d){s(d),l.unsubscribe()}},error:s,complete:i})})},t.map=function(r){var o=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var i=Wi(this);return new i(function(s){return o.subscribe({next:function(c){try{c=r(c)}catch(l){return s.error(l)}s.next(c)},error:function(c){s.error(c)},complete:function(){s.complete()}})})},t.filter=function(r){var o=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var i=Wi(this);return new i(function(s){return o.subscribe({next:function(c){try{if(!r(c))return}catch(l){return s.error(l)}s.next(c)},error:function(c){s.error(c)},complete:function(){s.complete()}})})},t.reduce=function(r){var o=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var i=Wi(this),s=arguments.length>1,c=!1,l=arguments[1],u=l;return new i(function(d){return o.subscribe({next:function(h){var p=!c;if(c=!0,!p||s)try{u=r(u,h)}catch(f){return d.error(f)}else u=h},error:function(h){d.error(h)},complete:function(){if(!c&&!s)return d.error(new TypeError("Cannot reduce an empty sequence"));d.next(u),d.complete()}})})},t.concat=function(){for(var r=this,o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];var c=Wi(this);return new c(function(l){var u,d=0;function h(p){u=p.subscribe({next:function(f){l.next(f)},error:function(f){l.error(f)},complete:function(){d===i.length?(u=void 0,l.complete()):h(c.from(i[d++]))}})}return h(r),function(){u&&(u.unsubscribe(),u=void 0)}})},t.flatMap=function(r){var o=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var i=Wi(this);return new i(function(s){var c=[],l=o.subscribe({next:function(d){if(r)try{d=r(d)}catch(p){return s.error(p)}var h=i.from(d).subscribe({next:function(p){s.next(p)},error:function(p){s.error(p)},complete:function(){var p=c.indexOf(h);p>=0&&c.splice(p,1),u()}});c.push(h)},error:function(d){s.error(d)},complete:function(){u()}});function u(){l.closed&&c.length===0&&s.complete()}return function(){c.forEach(function(d){return d.unsubscribe()}),l.unsubscribe()}})},t[Tf]=function(){return this},e.from=function(r){var o=typeof this=="function"?this:e;if(r==null)throw new TypeError(r+" is not an object");var i=Rc(r,Tf);if(i){var s=i.call(r);if(Object(s)!==s)throw new TypeError(s+" is not an object");return cM(s)&&s.constructor===o?s:new o(function(c){return s.subscribe(c)})}if(Pf("iterator")&&(i=Rc(r,aM),i))return new o(function(c){Pc(function(){if(!c.closed){for(var l=iM(i.call(r)),u;!(u=l()).done;){var d=u.value;if(c.next(d),c.closed)return}c.complete()}})});if(Array.isArray(r))return new o(function(c){Pc(function(){if(!c.closed){for(var l=0;l<r.length;++l)if(c.next(r[l]),c.closed)return;c.complete()}})});throw new TypeError(r+" is not observable")},e.of=function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var s=typeof this=="function"?this:e;return new s(function(c){Pc(function(){if(!c.closed){for(var l=0;l<o.length;++l)if(c.next(o[l]),c.closed)return;c.complete()}})})},Cf(e,null,[{key:TS,get:function(){return this}}]),e}();If()&&Object.defineProperty($,Symbol("extensions"),{value:{symbol:Tf,hostReportError:Po},configurable:!0});function Mf(e){var t,n=e.Symbol;if(typeof n=="function")if(n.observable)t=n.observable;else{typeof n.for=="function"?t=n.for("https://github.com/benlesh/symbol-observable"):t=n("https://github.com/benlesh/symbol-observable");try{n.observable=t}catch{}}else t="@@observable";return t}var Ro;typeof self<"u"?Ro=self:typeof window<"u"?Ro=window:typeof global<"u"?Ro=global:typeof module<"u"?Ro=module:Ro=Function("return this")();var A2=Mf(Ro);var IS=$.prototype,PS="@@observable";IS[PS]||(IS[PS]=function(){return this});function _f(e){return e.catch(function(){}),e}var fM=Object.prototype.toString;function Mc(e){return xf(e)}function xf(e,t){switch(fM.call(e)){case"[object Array]":{if(t=t||new Map,t.has(e))return t.get(e);var n=e.slice(0);return t.set(e,n),n.forEach(function(o,i){n[i]=xf(o,t)}),n}case"[object Object]":{if(t=t||new Map,t.has(e))return t.get(e);var r=Object.create(Object.getPrototypeOf(e));return t.set(e,r),Object.keys(e).forEach(function(o){r[o]=xf(e[o],t)}),r}default:return e}}function hM(e){var t=new Set([e]);return t.forEach(function(n){Z(n)&&pM(n)===n&&Object.getOwnPropertyNames(n).forEach(function(r){Z(n[r])&&t.add(n[r])})}),e}function pM(e){if(globalThis.__DEV__!==!1&&!Object.isFrozen(e))try{Object.freeze(e)}catch(t){if(t instanceof TypeError)return null;throw t}return e}function Vn(e){return globalThis.__DEV__!==!1&&hM(e),e}function Sr(e,t,n){var r=[];e.forEach(function(o){return o[t]&&r.push(o)}),r.forEach(function(o){return o[t](n)})}function _c(e,t,n){return new $(function(r){var o={then:function(l){return new Promise(function(u){return u(l())})}};function i(l,u){return function(d){if(l){var h=function(){return r.closed?0:l(d)};o=o.then(h,h).then(function(p){return r.next(p)},function(p){return r.error(p)})}else r[u](d)}}var s={next:i(t,"next"),error:i(n,"error"),complete:function(){o.then(function(){return r.complete()})}},c=e.subscribe(s);return function(){return c.unsubscribe()}})}function xc(e){function t(n){Object.defineProperty(e,n,{value:$})}return sf&&Symbol.species&&t(Symbol.species),t("@@species"),e}function RS(e){return e&&typeof e.then=="function"}var br=function(e){ke(t,e);function t(n){var r=e.call(this,function(o){return r.addObserver(o),function(){return r.removeObserver(o)}})||this;return r.observers=new Set,r.promise=new Promise(function(o,i){r.resolve=o,r.reject=i}),r.handlers={next:function(o){r.sub!==null&&(r.latest=["next",o],r.notify("next",o),Sr(r.observers,"next",o))},error:function(o){var i=r.sub;i!==null&&(i&&setTimeout(function(){return i.unsubscribe()}),r.sub=null,r.latest=["error",o],r.reject(o),r.notify("error",o),Sr(r.observers,"error",o))},complete:function(){var o=r,i=o.sub,s=o.sources,c=s===void 0?[]:s;if(i!==null){var l=c.shift();l?RS(l)?l.then(function(u){return r.sub=u.subscribe(r.handlers)},r.handlers.error):r.sub=l.subscribe(r.handlers):(i&&setTimeout(function(){return i.unsubscribe()}),r.sub=null,r.latest&&r.latest[0]==="next"?r.resolve(r.latest[1]):r.resolve(),r.notify("complete"),Sr(r.observers,"complete"))}}},r.nextResultListeners=new Set,r.cancel=function(o){r.reject(o),r.sources=[],r.handlers.error(o)},r.promise.catch(function(o){}),typeof n=="function"&&(n=[new $(n)]),RS(n)?n.then(function(o){return r.start(o)},r.handlers.error):r.start(n),r}return t.prototype.start=function(n){this.sub===void 0&&(this.sources=Array.from(n),this.handlers.complete())},t.prototype.deliverLastMessage=function(n){if(this.latest){var r=this.latest[0],o=n[r];o&&o.call(n,this.latest[1]),this.sub===null&&r==="next"&&n.complete&&n.complete()}},t.prototype.addObserver=function(n){this.observers.has(n)||(this.deliverLastMessage(n),this.observers.add(n))},t.prototype.removeObserver=function(n){this.observers.delete(n)&&this.observers.size<1&&this.handlers.complete()},t.prototype.notify=function(n,r){var o=this.nextResultListeners;o.size&&(this.nextResultListeners=new Set,o.forEach(function(i){return i(n,r)}))},t.prototype.beforeNext=function(n){var r=!1;this.nextResultListeners.add(function(o,i){r||(r=!0,n(o,i))})},t}($);xc(br);function $n(e){return"incremental"in e}function mM(e){return"hasNext"in e&&"data"in e}function MS(e){return $n(e)||mM(e)}function _S(e){return Z(e)&&"payload"in e}function kc(e,t){var n=e,r=new Xe;return $n(t)&&je(t.incremental)&&t.incremental.forEach(function(o){for(var i=o.data,s=o.path,c=s.length-1;c>=0;--c){var l=s[c],u=!isNaN(+l),d=u?[]:{};d[l]=i,i=d}n=r.merge(n,i)}),n}function Mo(e){var t=Nc(e);return je(t)}function Nc(e){var t=je(e.errors)?e.errors.slice(0):[];return $n(e)&&je(e.incremental)&&e.incremental.forEach(function(n){n.errors&&t.push.apply(t,n.errors)}),t}function Gt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Object.create(null);return e.forEach(function(r){r&&Object.keys(r).forEach(function(o){var i=r[o];i!==void 0&&(n[o]=i)})}),n}function Gi(e,t){return Gt(e,t,t.variables&&{variables:Gt(v(v({},e&&e.variables),t.variables))})}function Qi(e){return new $(function(t){t.error(e)})}var Oc=function(e,t,n){var r=new Error(n);throw r.name="ServerError",r.response=e,r.statusCode=e.status,r.result=t,r};function kf(e){for(var t=["query","operationName","variables","extensions","context"],n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];if(t.indexOf(o)<0)throw ue(46,o)}return e}function Nf(e,t){var n=v({},e),r=function(i){typeof i=="function"?n=v(v({},n),i(n)):n=v(v({},n),i)},o=function(){return v({},n)};return Object.defineProperty(t,"setContext",{enumerable:!1,value:r}),Object.defineProperty(t,"getContext",{enumerable:!1,value:o}),t}function Of(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName=typeof t.query!="string"?jn(t.query)||void 0:""),t}function Af(e,t){var n=v({},e),r=new Set(Object.keys(e));return Me(t,{Variable:function(o,i,s){s&&s.kind!=="VariableDefinition"&&r.delete(o.name.value)}}),r.forEach(function(o){delete n[o]}),n}function xS(e,t){return t?t(e):$.of()}function Yi(e){return typeof e=="function"?new bt(e):e}function Ac(e){return e.request.length<=1}var bt=function(){function e(t){t&&(this.request=t)}return e.empty=function(){return new e(function(){return $.of()})},e.from=function(t){return t.length===0?e.empty():t.map(Yi).reduce(function(n,r){return n.concat(r)})},e.split=function(t,n,r){var o=Yi(n),i=Yi(r||new e(xS)),s;return Ac(o)&&Ac(i)?s=new e(function(c){return t(c)?o.request(c)||$.of():i.request(c)||$.of()}):s=new e(function(c,l){return t(c)?o.request(c,l)||$.of():i.request(c,l)||$.of()}),Object.assign(s,{left:o,right:i})},e.execute=function(t,n){return t.request(Nf(n.context,Of(kf(n))))||$.of()},e.concat=function(t,n){var r=Yi(t);if(Ac(r))return globalThis.__DEV__!==!1&&C.warn(38,r),r;var o=Yi(n),i;return Ac(o)?i=new e(function(s){return r.request(s,function(c){return o.request(c)||$.of()})||$.of()}):i=new e(function(s,c){return r.request(s,function(l){return o.request(l,c)||$.of()})||$.of()}),Object.assign(i,{left:r,right:o})},e.prototype.split=function(t,n,r){return this.concat(e.split(t,n,r||new e(xS)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(t,n){throw ue(39)},e.prototype.onError=function(t,n){if(n&&n.error)return n.error(t),!1;throw t},e.prototype.setOnError=function(t){return this.onError=t,this},e}();var _o=bt.execute;function Ff(e){var t,n=e[Symbol.asyncIterator]();return t={next:function(){return n.next()}},t[Symbol.asyncIterator]=function(){return this},t}function Lf(e){var t=null,n=null,r=!1,o=[],i=[];function s(h){if(!n){if(i.length){var p=i.shift();if(Array.isArray(p)&&p[0])return p[0]({value:h,done:!1})}o.push(h)}}function c(h){n=h;var p=i.slice();p.forEach(function(f){f[1](h)}),!t||t()}function l(){r=!0;var h=i.slice();h.forEach(function(p){p[0]({value:void 0,done:!0})}),!t||t()}t=function(){t=null,e.removeListener("data",s),e.removeListener("error",c),e.removeListener("end",l),e.removeListener("finish",l),e.removeListener("close",l)},e.on("data",s),e.on("error",c),e.on("end",l),e.on("finish",l),e.on("close",l);function u(){return new Promise(function(h,p){if(n)return p(n);if(o.length)return h({value:o.shift(),done:!1});if(r)return h({value:void 0,done:!0});i.push([h,p])})}var d={next:function(){return u()}};return Fn&&(d[Symbol.asyncIterator]=function(){return this}),d}function Hf(e){var t=!1,n={next:function(){return t?Promise.resolve({value:void 0,done:!0}):(t=!0,new Promise(function(r,o){e.then(function(i){r({value:i,done:!1})}).catch(o)}))}};return Fn&&(n[Symbol.asyncIterator]=function(){return this}),n}function Fc(e){var t={next:function(){return e.read()}};return Fn&&(t[Symbol.asyncIterator]=function(){return this}),t}function gM(e){return!!e.body}function yM(e){return!!e.getReader}function vM(e){return!!(Fn&&e[Symbol.asyncIterator])}function SM(e){return!!e.stream}function bM(e){return!!e.arrayBuffer}function DM(e){return!!e.pipe}function kS(e){var t=e;if(gM(e)&&(t=e.body),vM(t))return Ff(t);if(yM(t))return Fc(t.getReader());if(SM(t))return Fc(t.stream().getReader());if(bM(t))return Hf(t.arrayBuffer());if(DM(t))return Lf(t);throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")}var Ki=Symbol();function NS(e){return e.extensions?Array.isArray(e.extensions[Ki]):!1}function Lc(e){return e.hasOwnProperty("graphQLErrors")}var wM=function(e){var t=De(De(De([],e.graphQLErrors,!0),e.clientErrors,!0),e.protocolErrors,!0);return e.networkError&&t.push(e.networkError),t.map(function(n){return Z(n)&&n.message||"Error message not found."}).join(`
`)},gn=function(e){ke(t,e);function t(n){var r=n.graphQLErrors,o=n.protocolErrors,i=n.clientErrors,s=n.networkError,c=n.errorMessage,l=n.extraInfo,u=e.call(this,c)||this;return u.name="ApolloError",u.graphQLErrors=r||[],u.protocolErrors=o||[],u.clientErrors=i||[],u.networkError=s||null,u.message=c||wM(u),u.extraInfo=l,u.cause=De(De(De([s],r||[],!0),o||[],!0),i||[],!0).find(function(d){return!!d})||null,u.__proto__=t.prototype,u}return t}(Error);var OS=Object.prototype.hasOwnProperty;function AS(e,t){return tt(this,void 0,void 0,function(){var n,r,o,i,s,c,l,u,d,h,p,f,g,y,b,S,T,D,I,R,x,U,G,se;return Tt(this,function(ve){switch(ve.label){case 0:if(TextDecoder===void 0)throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");n=new TextDecoder("utf-8"),r=(se=e.headers)===null||se===void 0?void 0:se.get("content-type"),o="boundary=",i=r?.includes(o)?r?.substring(r?.indexOf(o)+o.length).replace(/['"]/g,"").replace(/\;(.*)/gm,"").trim():"-",s=`\r
--`.concat(i),c="",l=kS(e),u=!0,ve.label=1;case 1:return u?[4,l.next()]:[3,3];case 2:for(d=ve.sent(),h=d.value,p=d.done,f=typeof h=="string"?h:n.decode(h),g=c.length-s.length+1,u=!p,c+=f,y=c.indexOf(s,g);y>-1;){if(b=void 0,U=[c.slice(0,y),c.slice(y+s.length)],b=U[0],c=U[1],S=b.indexOf(`\r
\r
`),T=TM(b.slice(0,S)),D=T["content-type"],D&&D.toLowerCase().indexOf("application/json")===-1)throw new Error("Unsupported patch content type: application/json is required.");if(I=b.slice(S),I){if(R=FS(e,I),Object.keys(R).length>1||"data"in R||"incremental"in R||"errors"in R||"payload"in R)if(_S(R)){if(x={},"payload"in R){if(Object.keys(R).length===1&&R.payload===null)return[2];x=v({},R.payload)}"errors"in R&&(x=v(v({},x),{extensions:v(v({},"extensions"in x?x.extensions:null),(G={},G[Ki]=R.errors,G))})),t(x)}else t(R);else if(Object.keys(R).length===1&&"hasNext"in R&&!R.hasNext)return[2]}y=c.indexOf(s)}return[3,1];case 3:return[2]}})})}function TM(e){var t={};return e.split(`
`).forEach(function(n){var r=n.indexOf(":");if(r>-1){var o=n.slice(0,r).trim().toLowerCase(),i=n.slice(r+1).trim();t[o]=i}}),t}function FS(e,t){if(e.status>=300){var n=function(){try{return JSON.parse(t)}catch{return t}};Oc(e,n(),"Response not successful: Received status code ".concat(e.status))}try{return JSON.parse(t)}catch(o){var r=o;throw r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,r}}function LS(e,t){e.result&&e.result.errors&&e.result.data&&t.next(e.result),t.error(e)}function HS(e){return function(t){return t.text().then(function(n){return FS(t,n)}).then(function(n){return!Array.isArray(n)&&!OS.call(n,"data")&&!OS.call(n,"errors")&&Oc(t,n,"Server response was missing for query '".concat(Array.isArray(e)?e.map(function(r){return r.operationName}):e.operationName,"'.")),n})}}var Zi=function(e,t){var n;try{n=JSON.stringify(e)}catch(o){var r=ue(42,t,o.message);throw r.parseError=o,r}return n};var EM={includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},CM={accept:"*/*","content-type":"application/json"},IM={method:"POST"},US={http:EM,headers:CM,options:IM},jS=function(e,t){return t(e)};function BS(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o={},i={};n.forEach(function(h){o=v(v(v({},o),h.options),{headers:v(v({},o.headers),h.headers)}),h.credentials&&(o.credentials=h.credentials),i=v(v({},i),h.http)}),o.headers&&(o.headers=PM(o.headers,i.preserveHeaderCase));var s=e.operationName,c=e.extensions,l=e.variables,u=e.query,d={operationName:s,variables:l};return i.includeExtensions&&(d.extensions=c),i.includeQuery&&(d.query=t(u,At)),{options:o,body:d}}function PM(e,t){if(!t){var n={};return Object.keys(Object(e)).forEach(function(i){n[i.toLowerCase()]=e[i]}),n}var r={};Object.keys(Object(e)).forEach(function(i){r[i.toLowerCase()]={originalName:i,value:e[i]}});var o={};return Object.keys(r).forEach(function(i){o[r[i].originalName]=r[i].value}),o}var VS=function(e){if(!e&&typeof fetch>"u")throw ue(40)};var $S=function(e,t){var n=e.getContext(),r=n.uri;return r||(typeof t=="function"?t(e):t||"/graphql")};function zS(e,t){var n=[],r=function(h,p){n.push("".concat(h,"=").concat(encodeURIComponent(p)))};if("query"in t&&r("query",t.query),t.operationName&&r("operationName",t.operationName),t.variables){var o=void 0;try{o=Zi(t.variables,"Variables map")}catch(h){return{parseError:h}}r("variables",o)}if(t.extensions){var i=void 0;try{i=Zi(t.extensions,"Extensions map")}catch(h){return{parseError:h}}r("extensions",i)}var s="",c=e,l=e.indexOf("#");l!==-1&&(s=e.substr(l),c=e.substr(0,l));var u=c.indexOf("?")===-1?"?":"&",d=c+u+n.join("&")+s;return{newURI:d}}var qS=Be(function(){return fetch}),WS=function(e){e===void 0&&(e={});var t=e.uri,n=t===void 0?"/graphql":t,r=e.fetch,o=e.print,i=o===void 0?jS:o,s=e.includeExtensions,c=e.preserveHeaderCase,l=e.useGETForQueries,u=e.includeUnusedVariables,d=u===void 0?!1:u,h=Qe(e,["uri","fetch","print","includeExtensions","preserveHeaderCase","useGETForQueries","includeUnusedVariables"]);globalThis.__DEV__!==!1&&VS(r||qS);var p={http:{includeExtensions:s,preserveHeaderCase:c},options:h.fetchOptions,credentials:h.credentials,headers:h.headers};return new bt(function(f){var g=$S(f,n),y=f.getContext(),b={};if(y.clientAwareness){var S=y.clientAwareness,T=S.name,D=S.version;T&&(b["apollographql-client-name"]=T),D&&(b["apollographql-client-version"]=D)}var I=v(v({},b),y.headers),R={http:y.http,options:y.fetchOptions,credentials:y.credentials,headers:I};if(un(["client"],f.query)){var x=qi(f.query);if(!x)return Qi(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));f.query=x}var U=BS(f,i,US,p,R),G=U.options,se=U.body;se.variables&&!d&&(se.variables=Af(se.variables,f.query));var ve;!G.signal&&typeof AbortController<"u"&&(ve=new AbortController,G.signal=ve.signal);var Lt=function(ft){return ft.kind==="OperationDefinition"&&ft.operation==="mutation"},wr=function(ft){return ft.kind==="OperationDefinition"&&ft.operation==="subscription"},Ae=wr(Ot(f.query)),vn=un(["defer"],f.query);if(l&&!f.query.definitions.some(Lt)&&(G.method="GET"),vn||Ae){G.headers=G.headers||{};var al="multipart/mixed;";Ae&&vn&&globalThis.__DEV__!==!1&&C.warn(41),Ae?al+="boundary=graphql;subscriptionSpec=1.0,application/json":vn&&(al+="deferSpec=20220824,application/json"),G.headers.accept=al}if(G.method==="GET"){var mh=zS(g,se),nD=mh.newURI,gh=mh.parseError;if(gh)return Qi(gh);g=nD}else try{G.body=Zi(se,"Payload")}catch(ft){return Qi(ft)}return new $(function(ft){var rD=r||Be(function(){return fetch})||qS,yh=ft.next.bind(ft);return rD(g,G).then(function(Tr){var cl;f.setContext({response:Tr});var vh=(cl=Tr.headers)===null||cl===void 0?void 0:cl.get("content-type");return vh!==null&&/^multipart\/mixed/i.test(vh)?AS(Tr,yh):HS(f)(Tr).then(yh)}).then(function(){ve=void 0,ft.complete()}).catch(function(Tr){ve=void 0,LS(Tr,ft)}),function(){ve&&ve.abort()}})})};var Uf=function(e){ke(t,e);function t(n){n===void 0&&(n={});var r=e.call(this,WS(n).request)||this;return r.options=n,r}return t}(bt);var{toString:GS,hasOwnProperty:RM}=Object.prototype,QS=Function.prototype.toString,jf=new Map;function re(e,t){try{return Bf(e,t)}finally{jf.clear()}}var Ji=re;function Bf(e,t){if(e===t)return!0;let n=GS.call(e),r=GS.call(t);if(n!==r)return!1;switch(n){case"[object Array]":if(e.length!==t.length)return!1;case"[object Object]":{if(KS(e,t))return!0;let o=YS(e),i=YS(t),s=o.length;if(s!==i.length)return!1;for(let c=0;c<s;++c)if(!RM.call(t,o[c]))return!1;for(let c=0;c<s;++c){let l=o[c];if(!Bf(e[l],t[l]))return!1}return!0}case"[object Error]":return e.name===t.name&&e.message===t.message;case"[object Number]":if(e!==e)return t!==t;case"[object Boolean]":case"[object Date]":return+e==+t;case"[object RegExp]":case"[object String]":return e==`${t}`;case"[object Map]":case"[object Set]":{if(e.size!==t.size)return!1;if(KS(e,t))return!0;let o=e.entries(),i=n==="[object Map]";for(;;){let s=o.next();if(s.done)break;let[c,l]=s.value;if(!t.has(c)||i&&!Bf(l,t.get(c)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":e=new Uint8Array(e),t=new Uint8Array(t);case"[object DataView]":{let o=e.byteLength;if(o===t.byteLength)for(;o--&&e[o]===t[o];);return o===-1}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{let o=QS.call(e);return o!==QS.call(t)?!1:!xM(o,_M)}}return!1}function YS(e){return Object.keys(e).filter(MM,e)}function MM(e){return this[e]!==void 0}var _M="{ [native code] }";function xM(e,t){let n=e.length-t.length;return n>=0&&e.indexOf(t,n)===n}function KS(e,t){let n=jf.get(e);if(n){if(n.has(t))return!0}else jf.set(e,n=new Set);return n.add(t),!1}function Uc(e,t,n,r){var o=t.data,i=Qe(t,["data"]),s=n.data,c=Qe(n,["data"]);return Ji(i,c)&&Hc(Ot(e).selectionSet,o,s,{fragmentMap:lt(dt(e)),variables:r})}function Hc(e,t,n,r){if(t===n)return!0;var o=new Set;return e.selections.every(function(i){if(o.has(i)||(o.add(i),!Nt(i,r.variables))||ZS(i))return!0;if(We(i)){var s=Ve(i),c=t&&t[s],l=n&&n[s],u=i.selectionSet;if(!u)return Ji(c,l);var d=Array.isArray(c),h=Array.isArray(l);if(d!==h)return!1;if(d&&h){var p=c.length;if(l.length!==p)return!1;for(var f=0;f<p;++f)if(!Hc(u,c[f],l[f],r))return!1;return!0}return Hc(u,c,l,r)}else{var g=dn(i,r.fragmentMap);if(g)return ZS(g)?!0:Hc(g.selectionSet,t,n,r)}})}function ZS(e){return!!e.directives&&e.directives.some(kM)}function kM(e){return e.name.value==="nonreactive"}var jc=ct?WeakMap:Map,Bc=Do?WeakSet:Set,xo=new pn,JS=!1;function Vc(){JS||(JS=!0,globalThis.__DEV__!==!1&&C.warn(52))}function $c(e,t,n){return xo.withValue(!0,function(){var r=Xi(e,t,n,!1);return Object.isFrozen(e)&&Vn(r),r})}function NM(e,t){if(t.has(e))return t.get(e);var n=Array.isArray(e)?[]:Object.create(null);return t.set(e,n),n}function Xi(e,t,n,r,o){var i,s=n.knownChanged,c=NM(e,n.mutableTargets);if(Array.isArray(e)){for(var l=0,u=Array.from(e.entries());l<u.length;l++){var d=u[l],h=d[0],p=d[1];if(p===null){c[h]=null;continue}var f=Xi(p,t,n,r,globalThis.__DEV__!==!1?"".concat(o||"","[").concat(h,"]"):void 0);s.has(f)&&s.add(c),c[h]=f}return s.has(c)?c:e}for(var g=0,y=t.selections;g<y.length;g++){var b=y[g],S=void 0;if(r&&s.add(c),b.kind===E.FIELD){var T=Ve(b),D=b.selectionSet;if(S=c[T]||e[T],S===void 0)continue;if(D&&S!==null){var f=Xi(e[T],D,n,r,globalThis.__DEV__!==!1?"".concat(o||"",".").concat(T):void 0);s.has(f)&&(S=f)}globalThis.__DEV__===!1&&(c[T]=S),globalThis.__DEV__!==!1&&(r&&T!=="__typename"&&!(!((i=Object.getOwnPropertyDescriptor(c,T))===null||i===void 0)&&i.value)?Object.defineProperty(c,T,OM(T,S,o||"",n.operationName,n.operationType)):(delete c[T],c[T]=S))}if(b.kind===E.INLINE_FRAGMENT&&(!b.typeCondition||n.cache.fragmentMatches(b,e.__typename))&&(S=Xi(e,b.selectionSet,n,r,o)),b.kind===E.FRAGMENT_SPREAD){var I=b.name.value,R=n.fragmentMap[I]||(n.fragmentMap[I]=n.cache.lookupFragment(I));C(R,47,I);var x=of(b);x!=="mask"&&(S=Xi(e,R.selectionSet,n,x==="migrate",o))}s.has(S)&&s.add(c)}return"__typename"in e&&!("__typename"in c)&&(c.__typename=e.__typename),Object.keys(c).length!==Object.keys(e).length&&s.add(c),s.has(c)?c:e}function OM(e,t,n,r,o){var i=function(){return xo.getValue()||(globalThis.__DEV__!==!1&&C.warn(48,r?"".concat(o," '").concat(r,"'"):"anonymous ".concat(o),"".concat(n,".").concat(e).replace(/^\./,"")),i=function(){return t}),t};return{get:function(){return i()},set:function(s){i=function(){return s}},enumerable:!0,configurable:!0}}function es(e,t,n,r){if(!n.fragmentMatches)return globalThis.__DEV__!==!1&&Vc(),e;var o=t.definitions.filter(function(s){return s.kind===E.FRAGMENT_DEFINITION});typeof r>"u"&&(C(o.length===1,49,o.length),r=o[0].name.value);var i=o.find(function(s){return s.name.value===r});return C(!!i,50,r),e==null||Ji(e,{})?e:$c(e,i.selectionSet,{operationType:"fragment",operationName:i.name.value,fragmentMap:lt(dt(t)),cache:n,mutableTargets:new jc,knownChanged:new Bc})}function Vf(e,t,n){var r;if(!n.fragmentMatches)return globalThis.__DEV__!==!1&&Vc(),e;var o=ut(t);return C(o,51),e==null?e:$c(e,o.selectionSet,{operationType:o.operation,operationName:(r=o.name)===null||r===void 0?void 0:r.value,fragmentMap:lt(dt(t)),cache:n,mutableTargets:new jc,knownChanged:new Bc})}var zc=function(){function e(){this.assumeImmutableResults=!1,this.getFragmentDoc=mn(af,{max:_e["cache.fragmentQueryDocuments"]||1e3,cache:Wt})}return e.prototype.lookupFragment=function(t){return null},e.prototype.batch=function(t){var n=this,r=typeof t.optimistic=="string"?t.optimistic:t.optimistic===!1?null:void 0,o;return this.performTransaction(function(){return o=t.update(n)},r),o},e.prototype.recordOptimisticTransaction=function(t,n){this.performTransaction(t,n)},e.prototype.transformDocument=function(t){return t},e.prototype.transformForLink=function(t){return t},e.prototype.identify=function(t){},e.prototype.gc=function(){return[]},e.prototype.modify=function(t){return!1},e.prototype.readQuery=function(t,n){return n===void 0&&(n=!!t.optimistic),this.read(v(v({},t),{rootId:t.id||"ROOT_QUERY",optimistic:n}))},e.prototype.watchFragment=function(t){var n=this,r=t.fragment,o=t.fragmentName,i=t.from,s=t.optimistic,c=s===void 0?!0:s,l=Qe(t,["fragment","fragmentName","from","optimistic"]),u=this.getFragmentDoc(r,o),d=typeof i>"u"||typeof i=="string"?i:this.identify(i),h=!!t[Symbol.for("apollo.dataMasking")];if(globalThis.__DEV__!==!1){var p=o||ji(r).name.value;d||globalThis.__DEV__!==!1&&C.warn(1,p)}var f=v(v({},l),{returnPartialData:!0,id:d,query:u,optimistic:c}),g;return new $(function(y){return n.watch(v(v({},f),{immediate:!0,callback:function(b){var S=h?es(b.result,r,n,o):b.result;if(!(g&&Uc(u,{data:g.result},{data:S},t.variables))){var T={data:S,complete:!!b.complete};b.missing&&(T.missing=vr(b.missing.map(function(D){return D.missing}))),g=v(v({},b),{result:S}),y.next(T)}}}))})},e.prototype.readFragment=function(t,n){return n===void 0&&(n=!!t.optimistic),this.read(v(v({},t),{query:this.getFragmentDoc(t.fragment,t.fragmentName),rootId:t.id,optimistic:n}))},e.prototype.writeQuery=function(t){var n=t.id,r=t.data,o=Qe(t,["id","data"]);return this.write(Object.assign(o,{dataId:n||"ROOT_QUERY",result:r}))},e.prototype.writeFragment=function(t){var n=t.id,r=t.data,o=t.fragment,i=t.fragmentName,s=Qe(t,["id","data","fragment","fragmentName"]);return this.write(Object.assign(s,{query:this.getFragmentDoc(o,i),dataId:n,result:r}))},e.prototype.updateQuery=function(t,n){return this.batch({update:function(r){var o=r.readQuery(t),i=n(o);return i==null?o:(r.writeQuery(v(v({},t),{data:i})),i)}})},e.prototype.updateFragment=function(t,n){return this.batch({update:function(r){var o=r.readFragment(t),i=n(o);return i==null?o:(r.writeFragment(v(v({},t),{data:i})),i)}})},e}();globalThis.__DEV__!==!1&&(zc.prototype.getMemoryInternals=Yv);var ts=function(e){ke(t,e);function t(n,r,o,i){var s,c=e.call(this,n)||this;if(c.message=n,c.path=r,c.query=o,c.variables=i,Array.isArray(c.path)){c.missing=c.message;for(var l=c.path.length-1;l>=0;--l)c.missing=(s={},s[c.path[l]]=c.missing,s)}else c.missing=c.path;return c.__proto__=t.prototype,c}return t}(Error);var Te=Object.prototype.hasOwnProperty;function ns(e){return e==null}function Wc(e,t){var n=e.__typename,r=e.id,o=e._id;if(typeof n=="string"&&(t&&(t.keyObject=ns(r)?ns(o)?void 0:{_id:o}:{id:r}),ns(r)&&!ns(o)&&(r=o),!ns(r)))return"".concat(n,":").concat(typeof r=="number"||typeof r=="string"?r:JSON.stringify(r))}var XS={dataIdFromObject:Wc,addTypename:!0,resultCaching:!0,canonizeResults:!1};function eb(e){return Gt(XS,e)}function Gc(e){var t=e.canonizeResults;return t===void 0?XS.canonizeResults:t}function tb(e,t){return W(t)?e.get(t.__ref,"__typename"):t&&t.__typename}var $f=/^[_a-z][_0-9a-z]*/i;function Ft(e){var t=e.match($f);return t?t[0]:e}function qc(e,t,n){return Z(t)?ie(t)?t.every(function(r){return qc(e,r,n)}):e.selections.every(function(r){if(We(r)&&Nt(r,n)){var o=Ve(r);return Te.call(t,o)&&(!r.selectionSet||qc(r.selectionSet,t[o],n))}return!0}):!1}function zn(e){return Z(e)&&!W(e)&&!ie(e)}function nb(){return new Xe}function Qc(e,t){var n=lt(dt(e));return{fragmentMap:n,lookupFragment:function(r){var o=n[r];return!o&&t&&(o=t.lookup(r)),o||null}}}var Yc=Object.create(null),zf=function(){return Yc},rb=Object.create(null),ko=function(){function e(t,n){var r=this;this.policies=t,this.group=n,this.data=Object.create(null),this.rootIds=Object.create(null),this.refs=Object.create(null),this.getFieldValue=function(o,i){return Vn(W(o)?r.get(o.__ref,i):o&&o[i])},this.canRead=function(o){return W(o)?r.has(o.__ref):typeof o=="object"},this.toReference=function(o,i){if(typeof o=="string")return St(o);if(W(o))return o;var s=r.policies.identify(o)[0];if(s){var c=St(s);return i&&r.merge(s,o),c}}}return e.prototype.toObject=function(){return v({},this.data)},e.prototype.has=function(t){return this.lookup(t,!0)!==void 0},e.prototype.get=function(t,n){if(this.group.depend(t,n),Te.call(this.data,t)){var r=this.data[t];if(r&&Te.call(r,n))return r[n]}if(n==="__typename"&&Te.call(this.policies.rootTypenamesById,t))return this.policies.rootTypenamesById[t];if(this instanceof qn)return this.parent.get(t,n)},e.prototype.lookup=function(t,n){if(n&&this.group.depend(t,"__exists"),Te.call(this.data,t))return this.data[t];if(this instanceof qn)return this.parent.lookup(t,n);if(this.policies.rootTypenamesById[t])return Object.create(null)},e.prototype.merge=function(t,n){var r=this,o;W(t)&&(t=t.__ref),W(n)&&(n=n.__ref);var i=typeof t=="string"?this.lookup(o=t):t,s=typeof n=="string"?this.lookup(o=n):n;if(s){C(typeof o=="string",2);var c=new Xe(FM).merge(i,s);if(this.data[o]=c,c!==i&&(delete this.refs[o],this.group.caching)){var l=Object.create(null);i||(l.__exists=1),Object.keys(s).forEach(function(u){if(!i||i[u]!==c[u]){l[u]=1;var d=Ft(u);d!==u&&!r.policies.hasKeyArgs(c.__typename,d)&&(l[d]=1),c[u]===void 0&&!(r instanceof qn)&&delete c[u]}}),l.__typename&&!(i&&i.__typename)&&this.policies.rootTypenamesById[o]===c.__typename&&delete l.__typename,Object.keys(l).forEach(function(u){return r.group.dirty(o,u)})}}},e.prototype.modify=function(t,n){var r=this,o=this.lookup(t);if(o){var i=Object.create(null),s=!1,c=!0,l={DELETE:Yc,INVALIDATE:rb,isReference:W,toReference:this.toReference,canRead:this.canRead,readField:function(u,d){return r.policies.readField(typeof u=="string"?{fieldName:u,from:d||St(t)}:u,{store:r})}};if(Object.keys(o).forEach(function(u){var d=Ft(u),h=o[u];if(h!==void 0){var p=typeof n=="function"?n:n[u]||n[d];if(p){var f=p===zf?Yc:p(Vn(h),v(v({},l),{fieldName:d,storeFieldName:u,storage:r.getStorage(t,u)}));if(f===rb)r.group.dirty(t,u);else if(f===Yc&&(f=void 0),f!==h&&(i[u]=f,s=!0,h=f,globalThis.__DEV__!==!1)){var g=function(R){if(r.lookup(R.__ref)===void 0)return globalThis.__DEV__!==!1&&C.warn(3,R),!0};if(W(f))g(f);else if(Array.isArray(f))for(var y=!1,b=void 0,S=0,T=f;S<T.length;S++){var D=T[S];if(W(D)){if(y=!0,g(D))break}else if(typeof D=="object"&&D){var I=r.policies.identify(D)[0];I&&(b=D)}if(y&&b!==void 0){globalThis.__DEV__!==!1&&C.warn(4,b);break}}}}h!==void 0&&(c=!1)}}),s)return this.merge(t,i),c&&(this instanceof qn?this.data[t]=void 0:delete this.data[t],this.group.dirty(t,"__exists")),!0}return!1},e.prototype.delete=function(t,n,r){var o,i=this.lookup(t);if(i){var s=this.getFieldValue(i,"__typename"),c=n&&r?this.policies.getStoreFieldName({typename:s,fieldName:n,args:r}):n;return this.modify(t,c?(o={},o[c]=zf,o):zf)}return!1},e.prototype.evict=function(t,n){var r=!1;return t.id&&(Te.call(this.data,t.id)&&(r=this.delete(t.id,t.fieldName,t.args)),this instanceof qn&&this!==n&&(r=this.parent.evict(t,n)||r),(t.fieldName||r)&&this.group.dirty(t.id,t.fieldName||"__exists")),r},e.prototype.clear=function(){this.replace(null)},e.prototype.extract=function(){var t=this,n=this.toObject(),r=[];return this.getRootIdSet().forEach(function(o){Te.call(t.policies.rootTypenamesById,o)||r.push(o)}),r.length&&(n.__META={extraRootIds:r.sort()}),n},e.prototype.replace=function(t){var n=this;if(Object.keys(this.data).forEach(function(i){t&&Te.call(t,i)||n.delete(i)}),t){var r=t.__META,o=Qe(t,["__META"]);Object.keys(o).forEach(function(i){n.merge(i,o[i])}),r&&r.extraRootIds.forEach(this.retain,this)}},e.prototype.retain=function(t){return this.rootIds[t]=(this.rootIds[t]||0)+1},e.prototype.release=function(t){if(this.rootIds[t]>0){var n=--this.rootIds[t];return n||delete this.rootIds[t],n}return 0},e.prototype.getRootIdSet=function(t){return t===void 0&&(t=new Set),Object.keys(this.rootIds).forEach(t.add,t),this instanceof qn?this.parent.getRootIdSet(t):Object.keys(this.policies.rootTypenamesById).forEach(t.add,t),t},e.prototype.gc=function(){var t=this,n=this.getRootIdSet(),r=this.toObject();n.forEach(function(s){Te.call(r,s)&&(Object.keys(t.findChildRefIds(s)).forEach(n.add,n),delete r[s])});var o=Object.keys(r);if(o.length){for(var i=this;i instanceof qn;)i=i.parent;o.forEach(function(s){return i.delete(s)})}return o},e.prototype.findChildRefIds=function(t){if(!Te.call(this.refs,t)){var n=this.refs[t]=Object.create(null),r=this.data[t];if(!r)return n;var o=new Set([r]);o.forEach(function(i){W(i)&&(n[i.__ref]=!0),Z(i)&&Object.keys(i).forEach(function(s){var c=i[s];Z(c)&&o.add(c)})})}return this.refs[t]},e.prototype.makeCacheKey=function(){return this.group.keyMaker.lookupArray(arguments)},e}();var ob=function(){function e(t,n){n===void 0&&(n=null),this.caching=t,this.parent=n,this.d=null,this.resetCaching()}return e.prototype.resetCaching=function(){this.d=this.caching?$i():null,this.keyMaker=new ze(ct)},e.prototype.depend=function(t,n){if(this.d){this.d(qf(t,n));var r=Ft(n);r!==n&&this.d(qf(t,r)),this.parent&&this.parent.depend(t,n)}},e.prototype.dirty=function(t,n){this.d&&this.d.dirty(qf(t,n),n==="__exists"?"forget":"setDirty")},e}();function qf(e,t){return t+"#"+e}function Wf(e,t){Dr(e)&&e.group.depend(t,"__exists")}(function(e){var t=function(n){ke(r,n);function r(o){var i=o.policies,s=o.resultCaching,c=s===void 0?!0:s,l=o.seed,u=n.call(this,i,new ob(c))||this;return u.stump=new AM(u),u.storageTrie=new ze(ct),l&&u.replace(l),u}return r.prototype.addLayer=function(o,i){return this.stump.addLayer(o,i)},r.prototype.removeLayer=function(){return this},r.prototype.getStorage=function(){return this.storageTrie.lookupArray(arguments)},r}(e);e.Root=t})(ko||(ko={}));var qn=function(e){ke(t,e);function t(n,r,o,i){var s=e.call(this,r.policies,i)||this;return s.id=n,s.parent=r,s.replay=o,s.group=i,o(s),s}return t.prototype.addLayer=function(n,r){return new t(n,this,r,this.group)},t.prototype.removeLayer=function(n){var r=this,o=this.parent.removeLayer(n);return n===this.id?(this.group.caching&&Object.keys(this.data).forEach(function(i){var s=r.data[i],c=o.lookup(i);c?s?s!==c&&Object.keys(s).forEach(function(l){re(s[l],c[l])||r.group.dirty(i,l)}):(r.group.dirty(i,"__exists"),Object.keys(c).forEach(function(l){r.group.dirty(i,l)})):r.delete(i)}),o):o===this.parent?this:o.addLayer(this.id,this.replay)},t.prototype.toObject=function(){return v(v({},this.parent.toObject()),this.data)},t.prototype.findChildRefIds=function(n){var r=this.parent.findChildRefIds(n);return Te.call(this.data,n)?v(v({},r),e.prototype.findChildRefIds.call(this,n)):r},t.prototype.getStorage=function(){for(var n=this.parent;n.parent;)n=n.parent;return n.getStorage.apply(n,arguments)},t}(ko),AM=function(e){ke(t,e);function t(n){return e.call(this,"EntityStore.Stump",n,function(){},new ob(n.group.caching,n.group))||this}return t.prototype.removeLayer=function(){return this},t.prototype.merge=function(n,r){return this.parent.merge(n,r)},t}(qn);function FM(e,t,n){var r=e[n],o=t[n];return re(r,o)?r:o}function Dr(e){return!!(e instanceof ko&&e.group.caching)}function LM(e){return Z(e)?ie(e)?e.slice(0):v({__proto__:Object.getPrototypeOf(e)},e):e}var Gf=function(){function e(){this.known=new(Do?WeakSet:Set),this.pool=new ze(ct),this.passes=new WeakMap,this.keysByJSON=new Map,this.empty=this.admit({})}return e.prototype.isKnown=function(t){return Z(t)&&this.known.has(t)},e.prototype.pass=function(t){if(Z(t)){var n=LM(t);return this.passes.set(n,t),n}return t},e.prototype.admit=function(t){var n=this;if(Z(t)){var r=this.passes.get(t);if(r)return r;var o=Object.getPrototypeOf(t);switch(o){case Array.prototype:{if(this.known.has(t))return t;var i=t.map(this.admit,this),s=this.pool.lookupArray(i);return s.array||(this.known.add(s.array=i),globalThis.__DEV__!==!1&&Object.freeze(i)),s.array}case null:case Object.prototype:{if(this.known.has(t))return t;var c=Object.getPrototypeOf(t),l=[c],u=this.sortedKeys(t);l.push(u.json);var d=l.length;u.sorted.forEach(function(f){l.push(n.admit(t[f]))});var s=this.pool.lookupArray(l);if(!s.object){var h=s.object=Object.create(c);this.known.add(h),u.sorted.forEach(function(f,g){h[f]=l[d+g]}),globalThis.__DEV__!==!1&&Object.freeze(h)}return s.object}}}return t},e.prototype.sortedKeys=function(t){var n=Object.keys(t),r=this.pool.lookupArray(n);if(!r.keys){n.sort();var o=JSON.stringify(n);(r.keys=this.keysByJSON.get(o))||this.keysByJSON.set(o,r.keys={sorted:n,json:o})}return r.keys},e}();function ib(e){return[e.selectionSet,e.objectOrReference,e.context,e.context.canonizeResults]}var sb=function(){function e(t){var n=this;this.knownResults=new(ct?WeakMap:Map),this.config=Gt(t,{addTypename:t.addTypename!==!1,canonizeResults:Gc(t)}),this.canon=t.canon||new Gf,this.executeSelectionSet=mn(function(r){var o,i=r.context.canonizeResults,s=ib(r);s[3]=!i;var c=(o=n.executeSelectionSet).peek.apply(o,s);return c?i?v(v({},c),{result:n.canon.admit(c.result)}):c:(Wf(r.context.store,r.enclosingRef.__ref),n.execSelectionSetImpl(r))},{max:this.config.resultCacheMaxSize||_e["inMemoryCache.executeSelectionSet"]||5e4,keyArgs:ib,makeCacheKey:function(r,o,i,s){if(Dr(i.store))return i.store.makeCacheKey(r,W(o)?o.__ref:o,i.varString,s)}}),this.executeSubSelectedArray=mn(function(r){return Wf(r.context.store,r.enclosingRef.__ref),n.execSubSelectedArrayImpl(r)},{max:this.config.resultCacheMaxSize||_e["inMemoryCache.executeSubSelectedArray"]||1e4,makeCacheKey:function(r){var o=r.field,i=r.array,s=r.context;if(Dr(s.store))return s.store.makeCacheKey(o,i,s.varString)}})}return e.prototype.resetCanon=function(){this.canon=new Gf},e.prototype.diffQueryAgainstStore=function(t){var n=t.store,r=t.query,o=t.rootId,i=o===void 0?"ROOT_QUERY":o,s=t.variables,c=t.returnPartialData,l=c===void 0?!0:c,u=t.canonizeResults,d=u===void 0?this.config.canonizeResults:u,h=this.config.cache.policies;s=v(v({},mr(Ui(r))),s);var p=St(i),f=this.executeSelectionSet({selectionSet:Ot(r).selectionSet,objectOrReference:p,enclosingRef:p,context:v({store:n,query:r,policies:h,variables:s,varString:qe(s),canonizeResults:d},Qc(r,this.config.fragments))}),g;if(f.missing&&(g=[new ts(HM(f.missing),f.missing,r,s)],!l))throw g[0];return{result:f.result,complete:!g,missing:g}},e.prototype.isFresh=function(t,n,r,o){if(Dr(o.store)&&this.knownResults.get(t)===r){var i=this.executeSelectionSet.peek(r,n,o,this.canon.isKnown(t));if(i&&t===i.result)return!0}return!1},e.prototype.execSelectionSetImpl=function(t){var n=this,r=t.selectionSet,o=t.objectOrReference,i=t.enclosingRef,s=t.context;if(W(o)&&!s.policies.rootTypenamesById[o.__ref]&&!s.store.has(o.__ref))return{result:this.canon.empty,missing:"Dangling reference to missing ".concat(o.__ref," object")};var c=s.variables,l=s.policies,u=s.store,d=u.getFieldValue(o,"__typename"),h=[],p,f=new Xe;this.config.addTypename&&typeof d=="string"&&!l.rootIdsByTypename[d]&&h.push({__typename:d});function g(D,I){var R;return D.missing&&(p=f.merge(p,(R={},R[I]=D.missing,R))),D.result}var y=new Set(r.selections);y.forEach(function(D){var I,R;if(Nt(D,c))if(We(D)){var x=l.readField({fieldName:D.name.value,field:D,variables:s.variables,from:o},s),U=Ve(D);x===void 0?yr.added(D)||(p=f.merge(p,(I={},I[U]="Can't find field '".concat(D.name.value,"' on ").concat(W(o)?o.__ref+" object":"object "+JSON.stringify(o,null,2)),I))):ie(x)?x.length>0&&(x=g(n.executeSubSelectedArray({field:D,array:x,enclosingRef:i,context:s}),U)):D.selectionSet?x!=null&&(x=g(n.executeSelectionSet({selectionSet:D.selectionSet,objectOrReference:x,enclosingRef:W(x)?x:i,context:s}),U)):s.canonizeResults&&(x=n.canon.pass(x)),x!==void 0&&h.push((R={},R[U]=x,R))}else{var G=dn(D,s.lookupFragment);if(!G&&D.kind===E.FRAGMENT_SPREAD)throw ue(10,D.name.value);G&&l.fragmentMatches(G,d)&&G.selectionSet.selections.forEach(y.add,y)}});var b=vr(h),S={result:b,missing:p},T=s.canonizeResults?this.canon.admit(S):Vn(S);return T.result&&this.knownResults.set(T.result,r),T},e.prototype.execSubSelectedArrayImpl=function(t){var n=this,r=t.field,o=t.array,i=t.enclosingRef,s=t.context,c,l=new Xe;function u(d,h){var p;return d.missing&&(c=l.merge(c,(p={},p[h]=d.missing,p))),d.result}return r.selectionSet&&(o=o.filter(s.store.canRead)),o=o.map(function(d,h){return d===null?null:ie(d)?u(n.executeSubSelectedArray({field:r,array:d,enclosingRef:i,context:s}),h):r.selectionSet?u(n.executeSelectionSet({selectionSet:r.selectionSet,objectOrReference:d,enclosingRef:W(d)?d:i,context:s}),h):(globalThis.__DEV__!==!1&&UM(s.store,r,d),d)}),{result:s.canonizeResults?this.canon.admit(o):o,missing:c}},e}();function HM(e){try{JSON.stringify(e,function(t,n){if(typeof n=="string")throw n;return n})}catch(t){return t}}function UM(e,t,n){if(!t.selectionSet){var r=new Set([n]);r.forEach(function(o){Z(o)&&(C(!W(o),11,tb(e,o),t.name.value),Object.values(o).forEach(r.add,r))})}}var No=new pn,ab=new WeakMap;function rs(e){var t=ab.get(e);return t||ab.set(e,t={vars:new Set,dep:$i()}),t}function Qf(e){rs(e).vars.forEach(function(t){return t.forgetCache(e)})}function cb(e){rs(e).vars.forEach(function(t){return t.attachCache(e)})}function Kc(e){var t=new Set,n=new Set,r=function(i){if(arguments.length>0){if(e!==i){e=i,t.forEach(function(l){rs(l).dep.dirty(r),jM(l)});var s=Array.from(n);n.clear(),s.forEach(function(l){return l(e)})}}else{var c=No.getValue();c&&(o(c),rs(c).dep(r))}return e};r.onNextChange=function(i){return n.add(i),function(){n.delete(i)}};var o=r.attachCache=function(i){return t.add(i),rs(i).vars.add(r),r};return r.forgetCache=function(i){return t.delete(i)},r}function jM(e){e.broadcastWatches&&e.broadcastWatches()}var lb=Object.create(null);function Yf(e){var t=JSON.stringify(e);return lb[t]||(lb[t]=Object.create(null))}function Kf(e){var t=Yf(e);return t.keyFieldsFn||(t.keyFieldsFn=function(n,r){var o=function(s,c){return r.readField(c,s)},i=r.keyObject=Jf(e,function(s){var c=Oo(r.storeObject,s,o);return c===void 0&&n!==r.storeObject&&Te.call(n,s[0])&&(c=Oo(n,s,db)),C(c!==void 0,5,s.join("."),n),c});return"".concat(r.typename,":").concat(JSON.stringify(i))})}function Zf(e){var t=Yf(e);return t.keyArgsFn||(t.keyArgsFn=function(n,r){var o=r.field,i=r.variables,s=r.fieldName,c=Jf(e,function(u){var d=u[0],h=d.charAt(0);if(h==="@"){if(o&&je(o.directives)){var p=d.slice(1),f=o.directives.find(function(S){return S.name.value===p}),g=f&&fn(f,i);return g&&Oo(g,u.slice(1))}return}if(h==="$"){var y=d.slice(1);if(i&&Te.call(i,y)){var b=u.slice(0);return b[0]=y,Oo(i,b)}return}if(n)return Oo(n,u)}),l=JSON.stringify(c);return(n||l!=="{}")&&(s+=":"+l),s})}function Jf(e,t){var n=new Xe;return ub(e).reduce(function(r,o){var i,s=t(o);if(s!==void 0){for(var c=o.length-1;c>=0;--c)s=(i={},i[o[c]]=s,i);r=n.merge(r,s)}return r},Object.create(null))}function ub(e){var t=Yf(e);if(!t.paths){var n=t.paths=[],r=[];e.forEach(function(o,i){ie(o)?(ub(o).forEach(function(s){return n.push(r.concat(s))}),r.length=0):(r.push(o),ie(e[i+1])||(n.push(r.slice(0)),r.length=0))})}return t.paths}function db(e,t){return e[t]}function Oo(e,t,n){return n=n||db,fb(t.reduce(function r(o,i){return ie(o)?o.map(function(s){return r(s,i)}):o&&n(o,i)},e))}function fb(e){return Z(e)?ie(e)?e.map(fb):Jf(Object.keys(e).sort(),function(t){return Oo(e,t)}):e}function Xf(e){return e.args!==void 0?e.args:e.field?fn(e.field,e.variables):null}var BM=function(){},hb=function(e,t){return t.fieldName},pb=function(e,t,n){var r=n.mergeObjects;return r(e,t)},mb=function(e,t){return t},yb=function(){function e(t){this.config=t,this.typePolicies=Object.create(null),this.toBeAdded=Object.create(null),this.supertypeMap=new Map,this.fuzzySubtypes=new Map,this.rootIdsByTypename=Object.create(null),this.rootTypenamesById=Object.create(null),this.usingPossibleTypes=!1,this.config=v({dataIdFromObject:Wc},t),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),t.possibleTypes&&this.addPossibleTypes(t.possibleTypes),t.typePolicies&&this.addTypePolicies(t.typePolicies)}return e.prototype.identify=function(t,n){var r,o=this,i=n&&(n.typename||((r=n.storeObject)===null||r===void 0?void 0:r.__typename))||t.__typename;if(i===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];var s=n&&n.storeObject||t,c=v(v({},n),{typename:i,storeObject:s,readField:n&&n.readField||function(){var h=Zc(arguments,s);return o.readField(h,{store:o.cache.data,variables:h.variables})}}),l,u=i&&this.getTypePolicy(i),d=u&&u.keyFn||this.config.dataIdFromObject;return xo.withValue(!0,function(){for(;d;){var h=d(v(v({},t),s),c);if(ie(h))d=Kf(h);else{l=h;break}}}),l=l?String(l):void 0,c.keyObject?[l,c.keyObject]:[l]},e.prototype.addTypePolicies=function(t){var n=this;Object.keys(t).forEach(function(r){var o=t[r],i=o.queryType,s=o.mutationType,c=o.subscriptionType,l=Qe(o,["queryType","mutationType","subscriptionType"]);i&&n.setRootTypename("Query",r),s&&n.setRootTypename("Mutation",r),c&&n.setRootTypename("Subscription",r),Te.call(n.toBeAdded,r)?n.toBeAdded[r].push(l):n.toBeAdded[r]=[l]})},e.prototype.updateTypePolicy=function(t,n){var r=this,o=this.getTypePolicy(t),i=n.keyFields,s=n.fields;function c(l,u){l.merge=typeof u=="function"?u:u===!0?pb:u===!1?mb:l.merge}c(o,n.merge),o.keyFn=i===!1?BM:ie(i)?Kf(i):typeof i=="function"?i:o.keyFn,s&&Object.keys(s).forEach(function(l){var u=r.getFieldPolicy(t,l,!0),d=s[l];if(typeof d=="function")u.read=d;else{var h=d.keyArgs,p=d.read,f=d.merge;u.keyFn=h===!1?hb:ie(h)?Zf(h):typeof h=="function"?h:u.keyFn,typeof p=="function"&&(u.read=p),c(u,f)}u.read&&u.merge&&(u.keyFn=u.keyFn||hb)})},e.prototype.setRootTypename=function(t,n){n===void 0&&(n=t);var r="ROOT_"+t.toUpperCase(),o=this.rootTypenamesById[r];n!==o&&(C(!o||o===t,6,t),o&&delete this.rootIdsByTypename[o],this.rootIdsByTypename[n]=r,this.rootTypenamesById[r]=n)},e.prototype.addPossibleTypes=function(t){var n=this;this.usingPossibleTypes=!0,Object.keys(t).forEach(function(r){n.getSupertypeSet(r,!0),t[r].forEach(function(o){n.getSupertypeSet(o,!0).add(r);var i=o.match($f);(!i||i[0]!==o)&&n.fuzzySubtypes.set(o,new RegExp(o))})})},e.prototype.getTypePolicy=function(t){var n=this;if(!Te.call(this.typePolicies,t)){var r=this.typePolicies[t]=Object.create(null);r.fields=Object.create(null);var o=this.supertypeMap.get(t);!o&&this.fuzzySubtypes.size&&(o=this.getSupertypeSet(t,!0),this.fuzzySubtypes.forEach(function(s,c){if(s.test(t)){var l=n.supertypeMap.get(c);l&&l.forEach(function(u){return o.add(u)})}})),o&&o.size&&o.forEach(function(s){var c=n.getTypePolicy(s),l=c.fields,u=Qe(c,["fields"]);Object.assign(r,u),Object.assign(r.fields,l)})}var i=this.toBeAdded[t];return i&&i.length&&i.splice(0).forEach(function(s){n.updateTypePolicy(t,s)}),this.typePolicies[t]},e.prototype.getFieldPolicy=function(t,n,r){if(t){var o=this.getTypePolicy(t).fields;return o[n]||r&&(o[n]=Object.create(null))}},e.prototype.getSupertypeSet=function(t,n){var r=this.supertypeMap.get(t);return!r&&n&&this.supertypeMap.set(t,r=new Set),r},e.prototype.fragmentMatches=function(t,n,r,o){var i=this;if(!t.typeCondition)return!0;if(!n)return!1;var s=t.typeCondition.name.value;if(n===s)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(s))for(var c=this.getSupertypeSet(n,!0),l=[c],u=function(g){var y=i.getSupertypeSet(g,!1);y&&y.size&&l.indexOf(y)<0&&l.push(y)},d=!!(r&&this.fuzzySubtypes.size),h=!1,p=0;p<l.length;++p){var f=l[p];if(f.has(s))return c.has(s)||(h&&globalThis.__DEV__!==!1&&C.warn(7,n,s),c.add(s)),!0;f.forEach(u),d&&p===l.length-1&&qc(t.selectionSet,r,o)&&(d=!1,h=!0,this.fuzzySubtypes.forEach(function(g,y){var b=n.match(g);b&&b[0]===n&&u(y)}))}return!1},e.prototype.hasKeyArgs=function(t,n){var r=this.getFieldPolicy(t,n,!1);return!!(r&&r.keyFn)},e.prototype.getStoreFieldName=function(t){var n=t.typename,r=t.fieldName,o=this.getFieldPolicy(n,r,!1),i,s=o&&o.keyFn;if(s&&n)for(var c={typename:n,fieldName:r,field:t.field||null,variables:t.variables},l=Xf(t);s;){var u=s(l,c);if(ie(u))s=Zf(u);else{i=u||r;break}}return i===void 0&&(i=t.field?pf(t.field,t.variables):Cc(r,Xf(t))),i===!1?r:r===Ft(i)?i:r+":"+i},e.prototype.readField=function(t,n){var r=t.from;if(r){var o=t.field||t.fieldName;if(o){if(t.typename===void 0){var i=n.store.getFieldValue(r,"__typename");i&&(t.typename=i)}var s=this.getStoreFieldName(t),c=Ft(s),l=n.store.getFieldValue(r,s),u=this.getFieldPolicy(t.typename,c,!1),d=u&&u.read;if(d){var h=gb(this,r,t,n,n.store.getStorage(W(r)?r.__ref:r,s));return No.withValue(this.cache,d,[l,h])}return l}}},e.prototype.getReadFunction=function(t,n){var r=this.getFieldPolicy(t,n,!1);return r&&r.read},e.prototype.getMergeFunction=function(t,n,r){var o=this.getFieldPolicy(t,n,!1),i=o&&o.merge;return!i&&r&&(o=this.getTypePolicy(r),i=o&&o.merge),i},e.prototype.runMergeFunction=function(t,n,r,o,i){var s=r.field,c=r.typename,l=r.merge;return l===pb?vb(o.store)(t,n):l===mb?n:(o.overwrite&&(t=void 0),l(t,n,gb(this,void 0,{typename:c,fieldName:s.name.value,field:s,variables:o.variables},o,i||Object.create(null))))},e}();function gb(e,t,n,r,o){var i=e.getStoreFieldName(n),s=Ft(i),c=n.variables||r.variables,l=r.store,u=l.toReference,d=l.canRead;return{args:Xf(n),field:n.field||null,fieldName:s,storeFieldName:i,variables:c,isReference:W,toReference:u,storage:o,cache:e.cache,canRead:d,readField:function(){return e.readField(Zc(arguments,t,c),r)},mergeObjects:vb(r.store)}}function Zc(e,t,n){var r=e[0],o=e[1],i=e.length,s;return typeof r=="string"?s={fieldName:r,from:i>1?o:t}:(s=v({},r),Te.call(s,"from")||(s.from=t)),globalThis.__DEV__!==!1&&s.from===void 0&&globalThis.__DEV__!==!1&&C.warn(8,fc(Array.from(e))),s.variables===void 0&&(s.variables=n),s}function vb(e){return function(n,r){if(ie(n)||ie(r))throw ue(9);if(Z(n)&&Z(r)){var o=e.getFieldValue(n,"__typename"),i=e.getFieldValue(r,"__typename"),s=o&&i&&o!==i;if(s)return r;if(W(n)&&zn(r))return e.merge(n.__ref,r),n;if(zn(n)&&W(r))return e.merge(n,r.__ref),r;if(zn(n)&&zn(r))return v(v({},n),r)}return r}}function eh(e,t,n){var r="".concat(t).concat(n),o=e.flavors.get(r);return o||e.flavors.set(r,o=e.clientOnly===t&&e.deferred===n?e:v(v({},e),{clientOnly:t,deferred:n})),o}var wb=function(){function e(t,n,r){this.cache=t,this.reader=n,this.fragments=r}return e.prototype.writeToStore=function(t,n){var r=this,o=n.query,i=n.result,s=n.dataId,c=n.variables,l=n.overwrite,u=ut(o),d=nb();c=v(v({},mr(u)),c);var h=v(v({store:t,written:Object.create(null),merge:function(f,g){return d.merge(f,g)},variables:c,varString:qe(c)},Qc(o,this.fragments)),{overwrite:!!l,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map}),p=this.processSelectionSet({result:i||Object.create(null),dataId:s,selectionSet:u.selectionSet,mergeTree:{map:new Map},context:h});if(!W(p))throw ue(12,i);return h.incomingById.forEach(function(f,g){var y=f.storeObject,b=f.mergeTree,S=f.fieldNodeSet,T=St(g);if(b&&b.map.size){var D=r.applyMerges(b,T,y,h);if(W(D))return;y=D}if(globalThis.__DEV__!==!1&&!h.overwrite){var I=Object.create(null);S.forEach(function(U){U.selectionSet&&(I[U.name.value]=!0)});var R=function(U){return I[Ft(U)]===!0},x=function(U){var G=b&&b.map.get(U);return!!(G&&G.info&&G.info.merge)};Object.keys(y).forEach(function(U){R(U)&&!x(U)&&VM(T,y,U,h.store)})}t.merge(g,y)}),t.retain(p.__ref),p},e.prototype.processSelectionSet=function(t){var n=this,r=t.dataId,o=t.result,i=t.selectionSet,s=t.context,c=t.mergeTree,l=this.cache.policies,u=Object.create(null),d=r&&l.rootTypenamesById[r]||Hi(o,i,s.fragmentMap)||r&&s.store.get(r,"__typename");typeof d=="string"&&(u.__typename=d);var h=function(){var D=Zc(arguments,u,s.variables);if(W(D.from)){var I=s.incomingById.get(D.from.__ref);if(I){var R=l.readField(v(v({},D),{from:I.storeObject}),s);if(R!==void 0)return R}}return l.readField(D,s)},p=new Set;this.flattenFields(i,o,s,d).forEach(function(D,I){var R,x=Ve(I),U=o[x];if(p.add(I),U!==void 0){var G=l.getStoreFieldName({typename:d,fieldName:I.name.value,field:I,variables:D.variables}),se=Sb(c,G),ve=n.processFieldValue(U,I,I.selectionSet?eh(D,!1,!1):D,se),Lt=void 0;I.selectionSet&&(W(ve)||zn(ve))&&(Lt=h("__typename",ve));var wr=l.getMergeFunction(d,I.name.value,Lt);wr?se.info={field:I,typename:d,merge:wr}:bb(c,G),u=D.merge(u,(R={},R[G]=ve,R))}else globalThis.__DEV__!==!1&&!D.clientOnly&&!D.deferred&&!yr.added(I)&&!l.getReadFunction(d,I.name.value)&&globalThis.__DEV__!==!1&&C.error(13,Ve(I),o)});try{var f=l.identify(o,{typename:d,selectionSet:i,fragmentMap:s.fragmentMap,storeObject:u,readField:h}),g=f[0],y=f[1];r=r||g,y&&(u=s.merge(u,y))}catch(D){if(!r)throw D}if(typeof r=="string"){var b=St(r),S=s.written[r]||(s.written[r]=[]);if(S.indexOf(i)>=0||(S.push(i),this.reader&&this.reader.isFresh(o,b,i,s)))return b;var T=s.incomingById.get(r);return T?(T.storeObject=s.merge(T.storeObject,u),T.mergeTree=th(T.mergeTree,c),p.forEach(function(D){return T.fieldNodeSet.add(D)})):s.incomingById.set(r,{storeObject:u,mergeTree:Jc(c)?void 0:c,fieldNodeSet:p}),b}return u},e.prototype.processFieldValue=function(t,n,r,o){var i=this;return!n.selectionSet||t===null?globalThis.__DEV__!==!1?Mc(t):t:ie(t)?t.map(function(s,c){var l=i.processFieldValue(s,n,r,Sb(o,c));return bb(o,c),l}):this.processSelectionSet({result:t,selectionSet:n.selectionSet,context:r,mergeTree:o})},e.prototype.flattenFields=function(t,n,r,o){o===void 0&&(o=Hi(n,t,r.fragmentMap));var i=new Map,s=this.cache.policies,c=new ze(!1);return function l(u,d){var h=c.lookup(u,d.clientOnly,d.deferred);h.visited||(h.visited=!0,u.selections.forEach(function(p){if(Nt(p,r.variables)){var f=d.clientOnly,g=d.deferred;if(!(f&&g)&&je(p.directives)&&p.directives.forEach(function(S){var T=S.name.value;if(T==="client"&&(f=!0),T==="defer"){var D=fn(S,r.variables);(!D||D.if!==!1)&&(g=!0)}}),We(p)){var y=i.get(p);y&&(f=f&&y.clientOnly,g=g&&y.deferred),i.set(p,eh(r,f,g))}else{var b=dn(p,r.lookupFragment);if(!b&&p.kind===E.FRAGMENT_SPREAD)throw ue(14,p.name.value);b&&s.fragmentMatches(b,o,n,r.variables)&&l(b.selectionSet,eh(r,f,g))}}}))}(t,r),i},e.prototype.applyMerges=function(t,n,r,o,i){var s,c=this;if(t.map.size&&!W(r)){var l=!ie(r)&&(W(n)||zn(n))?n:void 0,u=r;l&&!i&&(i=[W(l)?l.__ref:l]);var d,h=function(p,f){return ie(p)?typeof f=="number"?p[f]:void 0:o.store.getFieldValue(p,String(f))};t.map.forEach(function(p,f){var g=h(l,f),y=h(u,f);if(y!==void 0){i&&i.push(f);var b=c.applyMerges(p,g,y,o,i);b!==y&&(d=d||new Map,d.set(f,b)),i&&C(i.pop()===f)}}),d&&(r=ie(u)?u.slice(0):v({},u),d.forEach(function(p,f){r[f]=p}))}return t.info?this.cache.policies.runMergeFunction(n,r,t.info,o,i&&(s=o.store).getStorage.apply(s,i)):r},e}();var Tb=[];function Sb(e,t){var n=e.map;return n.has(t)||n.set(t,Tb.pop()||{map:new Map}),n.get(t)}function th(e,t){if(e===t||!t||Jc(t))return e;if(!e||Jc(e))return t;var n=e.info&&t.info?v(v({},e.info),t.info):e.info||t.info,r=e.map.size&&t.map.size,o=r?new Map:e.map.size?e.map:t.map,i={info:n,map:o};if(r){var s=new Set(t.map.keys());e.map.forEach(function(c,l){i.map.set(l,th(c,t.map.get(l))),s.delete(l)}),s.forEach(function(c){i.map.set(c,th(t.map.get(c),e.map.get(c)))})}return i}function Jc(e){return!e||!(e.info||e.map.size)}function bb(e,t){var n=e.map,r=n.get(t);r&&Jc(r)&&(Tb.push(r),n.delete(t))}var Db=new Set;function VM(e,t,n,r){var o=function(h){var p=r.getFieldValue(h,n);return typeof p=="object"&&p},i=o(e);if(i){var s=o(t);if(s&&!W(i)&&!re(i,s)&&!Object.keys(i).every(function(h){return r.getFieldValue(s,h)!==void 0})){var c=r.getFieldValue(e,"__typename")||r.getFieldValue(t,"__typename"),l=Ft(n),u="".concat(c,".").concat(l);if(!Db.has(u)){Db.add(u);var d=[];!ie(i)&&!ie(s)&&[i,s].forEach(function(h){var p=r.getFieldValue(h,"__typename");typeof p=="string"&&!d.includes(p)&&d.push(p)}),globalThis.__DEV__!==!1&&C.warn(15,l,c,d.length?"either ensure all objects of type "+d.join(" and ")+" have an ID or a custom merge function, or ":"",u,v({},i),v({},s))}}}}var os=function(e){ke(t,e);function t(n){n===void 0&&(n={});var r=e.call(this)||this;return r.watches=new Set,r.addTypenameTransform=new Io(yr),r.assumeImmutableResults=!0,r.makeVar=Kc,r.txCount=0,r.config=eb(n),r.addTypename=!!r.config.addTypename,r.policies=new yb({cache:r,dataIdFromObject:r.config.dataIdFromObject,possibleTypes:r.config.possibleTypes,typePolicies:r.config.typePolicies}),r.init(),r}return t.prototype.init=function(){var n=this.data=new ko.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=n.stump,this.resetResultCache()},t.prototype.resetResultCache=function(n){var r=this,o=this.storeReader,i=this.config.fragments;this.storeWriter=new wb(this,this.storeReader=new sb({cache:this,addTypename:this.addTypename,resultCacheMaxSize:this.config.resultCacheMaxSize,canonizeResults:Gc(this.config),canon:n?void 0:o&&o.canon,fragments:i}),i),this.maybeBroadcastWatch=mn(function(s,c){return r.broadcastWatch(s,c)},{max:this.config.resultCacheMaxSize||_e["inMemoryCache.maybeBroadcastWatch"]||5e3,makeCacheKey:function(s){var c=s.optimistic?r.optimisticData:r.data;if(Dr(c)){var l=s.optimistic,u=s.id,d=s.variables;return c.makeCacheKey(s.query,s.callback,qe({optimistic:l,id:u,variables:d}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach(function(s){return s.resetCaching()})},t.prototype.restore=function(n){return this.init(),n&&this.data.replace(n),this},t.prototype.extract=function(n){return n===void 0&&(n=!1),(n?this.optimisticData:this.data).extract()},t.prototype.read=function(n){var r=n.returnPartialData,o=r===void 0?!1:r;try{return this.storeReader.diffQueryAgainstStore(v(v({},n),{store:n.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:o})).result||null}catch(i){if(i instanceof ts)return null;throw i}},t.prototype.write=function(n){try{return++this.txCount,this.storeWriter.writeToStore(this.data,n)}finally{!--this.txCount&&n.broadcast!==!1&&this.broadcastWatches()}},t.prototype.modify=function(n){if(Te.call(n,"id")&&!n.id)return!1;var r=n.optimistic?this.optimisticData:this.data;try{return++this.txCount,r.modify(n.id||"ROOT_QUERY",n.fields)}finally{!--this.txCount&&n.broadcast!==!1&&this.broadcastWatches()}},t.prototype.diff=function(n){return this.storeReader.diffQueryAgainstStore(v(v({},n),{store:n.optimistic?this.optimisticData:this.data,rootId:n.id||"ROOT_QUERY",config:this.config}))},t.prototype.watch=function(n){var r=this;return this.watches.size||cb(this),this.watches.add(n),n.immediate&&this.maybeBroadcastWatch(n),function(){r.watches.delete(n)&&!r.watches.size&&Qf(r),r.maybeBroadcastWatch.forget(n)}},t.prototype.gc=function(n){var r;qe.reset(),At.reset(),this.addTypenameTransform.resetCache(),(r=this.config.fragments)===null||r===void 0||r.resetCaches();var o=this.optimisticData.gc();return n&&!this.txCount&&(n.resetResultCache?this.resetResultCache(n.resetResultIdentities):n.resetResultIdentities&&this.storeReader.resetCanon()),o},t.prototype.retain=function(n,r){return(r?this.optimisticData:this.data).retain(n)},t.prototype.release=function(n,r){return(r?this.optimisticData:this.data).release(n)},t.prototype.identify=function(n){if(W(n))return n.__ref;try{return this.policies.identify(n)[0]}catch(r){globalThis.__DEV__!==!1&&C.warn(r)}},t.prototype.evict=function(n){if(!n.id){if(Te.call(n,"id"))return!1;n=v(v({},n),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(n,this.data)}finally{!--this.txCount&&n.broadcast!==!1&&this.broadcastWatches()}},t.prototype.reset=function(n){var r=this;return this.init(),qe.reset(),n&&n.discardWatches?(this.watches.forEach(function(o){return r.maybeBroadcastWatch.forget(o)}),this.watches.clear(),Qf(this)):this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(n){var r=this.optimisticData.removeLayer(n);r!==this.optimisticData&&(this.optimisticData=r,this.broadcastWatches())},t.prototype.batch=function(n){var r=this,o=n.update,i=n.optimistic,s=i===void 0?!0:i,c=n.removeOptimistic,l=n.onWatchUpdated,u,d=function(p){var f=r,g=f.data,y=f.optimisticData;++r.txCount,p&&(r.data=r.optimisticData=p);try{return u=o(r)}finally{--r.txCount,r.data=g,r.optimisticData=y}},h=new Set;return l&&!this.txCount&&this.broadcastWatches(v(v({},n),{onWatchUpdated:function(p){return h.add(p),!1}})),typeof s=="string"?this.optimisticData=this.optimisticData.addLayer(s,d):s===!1?d(this.data):d(),typeof c=="string"&&(this.optimisticData=this.optimisticData.removeLayer(c)),l&&h.size?(this.broadcastWatches(v(v({},n),{onWatchUpdated:function(p,f){var g=l.call(this,p,f);return g!==!1&&h.delete(p),g}})),h.size&&h.forEach(function(p){return r.maybeBroadcastWatch.dirty(p)})):this.broadcastWatches(n),u},t.prototype.performTransaction=function(n,r){return this.batch({update:n,optimistic:r||r!==null})},t.prototype.transformDocument=function(n){return this.addTypenameToDocument(this.addFragmentsToDocument(n))},t.prototype.fragmentMatches=function(n,r){return this.policies.fragmentMatches(n,r)},t.prototype.lookupFragment=function(n){var r;return((r=this.config.fragments)===null||r===void 0?void 0:r.lookup(n))||null},t.prototype.broadcastWatches=function(n){var r=this;this.txCount||this.watches.forEach(function(o){return r.maybeBroadcastWatch(o,n)})},t.prototype.addFragmentsToDocument=function(n){var r=this.config.fragments;return r?r.transform(n):n},t.prototype.addTypenameToDocument=function(n){return this.addTypename?this.addTypenameTransform.transformDocument(n):n},t.prototype.broadcastWatch=function(n,r){var o=n.lastDiff,i=this.diff(n);r&&(n.optimistic&&typeof r.optimistic=="string"&&(i.fromOptimisticTransaction=!0),r.onWatchUpdated&&r.onWatchUpdated.call(this,n,i,o)===!1)||(!o||!re(o.result,i.result))&&n.callback(n.lastDiff=i,o)},t}(zc);globalThis.__DEV__!==!1&&(os.prototype.getMemoryInternals=Qv);var X=function(e){return e[e.loading=1]="loading",e[e.setVariables=2]="setVariables",e[e.fetchMore=3]="fetchMore",e[e.refetch=4]="refetch",e[e.poll=6]="poll",e[e.ready=7]="ready",e[e.error=8]="error",e}(X||{});function yn(e){return e?e<7:!1}var Eb=Object.assign,$M=Object.hasOwnProperty,Xc=function(e){ke(t,e);function t(n){var r=n.queryManager,o=n.queryInfo,i=n.options,s=e.call(this,function(b){try{var S=b._subscription._observer;S&&!S.error&&(S.error=zM)}catch{}var T=!s.observers.size;s.observers.add(b);var D=s.last;return D&&D.error?b.error&&b.error(D.error):D&&D.result&&b.next&&b.next(s.maskResult(D.result)),T&&s.reobserve().catch(function(){}),function(){s.observers.delete(b)&&!s.observers.size&&s.tearDownQuery()}})||this;s.observers=new Set,s.subscriptions=new Set,s.queryInfo=o,s.queryManager=r,s.waitForOwnResult=nh(i.fetchPolicy),s.isTornDown=!1,s.subscribeToMore=s.subscribeToMore.bind(s),s.maskResult=s.maskResult.bind(s);var c=r.defaultOptions.watchQuery,l=c===void 0?{}:c,u=l.fetchPolicy,d=u===void 0?"cache-first":u,h=i.fetchPolicy,p=h===void 0?d:h,f=i.initialFetchPolicy,g=f===void 0?p==="standby"?d:p:f;s.options=v(v({},i),{initialFetchPolicy:g,fetchPolicy:p}),s.queryId=o.queryId||r.generateQueryId();var y=ut(s.query);return s.queryName=y&&y.name&&y.name.value,s}return Object.defineProperty(t.prototype,"query",{get:function(){return this.lastQuery||this.options.query},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"variables",{get:function(){return this.options.variables},enumerable:!1,configurable:!0}),t.prototype.result=function(){var n=this;return new Promise(function(r,o){var i={next:function(c){r(c),n.observers.delete(i),n.observers.size||n.queryManager.removeQuery(n.queryId),setTimeout(function(){s.unsubscribe()},0)},error:o},s=n.subscribe(i)})},t.prototype.resetDiff=function(){this.queryInfo.resetDiff()},t.prototype.getCurrentFullResult=function(n){n===void 0&&(n=!0);var r=this.getLastResult(!0),o=this.queryInfo.networkStatus||r&&r.networkStatus||X.ready,i=v(v({},r),{loading:yn(o),networkStatus:o}),s=this.options.fetchPolicy,c=s===void 0?"cache-first":s;if(!(nh(c)||this.queryManager.getDocumentInfo(this.query).hasForcedResolvers))if(this.waitForOwnResult)this.queryInfo.updateWatch();else{var l=this.queryInfo.getDiff();(l.complete||this.options.returnPartialData)&&(i.data=l.result),re(i.data,{})&&(i.data=void 0),l.complete?(delete i.partial,l.complete&&i.networkStatus===X.loading&&(c==="cache-first"||c==="cache-only")&&(i.networkStatus=X.ready,i.loading=!1)):i.partial=!0,globalThis.__DEV__!==!1&&!l.complete&&!this.options.partialRefetch&&!i.loading&&!i.data&&!i.error&&oh(l.missing)}return n&&this.updateLastResult(i),i},t.prototype.getCurrentResult=function(n){return n===void 0&&(n=!0),this.maskResult(this.getCurrentFullResult(n))},t.prototype.isDifferentFromLastResult=function(n,r){if(!this.last)return!0;var o=this.queryManager.getDocumentInfo(this.query),i=this.queryManager.dataMasking,s=i?o.nonReactiveQuery:this.query,c=i||o.hasNonreactiveDirective?!Uc(s,this.last.result,n,this.variables):!re(this.last.result,n);return c||r&&!re(this.last.variables,r)},t.prototype.getLast=function(n,r){var o=this.last;if(o&&o[n]&&(!r||re(o.variables,this.variables)))return o[n]},t.prototype.getLastResult=function(n){return this.getLast("result",n)},t.prototype.getLastError=function(n){return this.getLast("error",n)},t.prototype.resetLastResults=function(){delete this.last,this.isTornDown=!1},t.prototype.resetQueryStoreErrors=function(){this.queryManager.resetErrors(this.queryId)},t.prototype.refetch=function(n){var r,o={pollInterval:0},i=this.options.fetchPolicy;if(i==="cache-and-network"?o.fetchPolicy=i:i==="no-cache"?o.fetchPolicy="no-cache":o.fetchPolicy="network-only",globalThis.__DEV__!==!1&&n&&$M.call(n,"variables")){var s=Ui(this.query),c=s.variableDefinitions;(!c||!c.some(function(l){return l.variable.name.value==="variables"}))&&globalThis.__DEV__!==!1&&C.warn(21,n,((r=s.name)===null||r===void 0?void 0:r.value)||s)}return n&&!re(this.options.variables,n)&&(o.variables=this.options.variables=v(v({},this.options.variables),n)),this.queryInfo.resetLastWrite(),this.reobserve(o,X.refetch)},t.prototype.fetchMore=function(n){var r=this,o=v(v({},n.query?n:v(v(v(v({},this.options),{query:this.options.query}),n),{variables:v(v({},this.options.variables),n.variables)})),{fetchPolicy:"no-cache"});o.query=this.transformDocument(o.query);var i=this.queryManager.generateQueryId();this.lastQuery=n.query?this.transformDocument(this.options.query):o.query;var s=this.queryInfo,c=s.networkStatus;s.networkStatus=X.fetchMore,o.notifyOnNetworkStatusChange&&this.observe();var l=new Set,u=n?.updateQuery,d=this.options.fetchPolicy!=="no-cache";return d||C(u,22),this.queryManager.fetchQuery(i,o,X.fetchMore).then(function(h){if(r.queryManager.removeQuery(i),s.networkStatus===X.fetchMore&&(s.networkStatus=c),d)r.queryManager.cache.batch({update:function(g){var y=n.updateQuery;y?g.updateQuery({query:r.query,variables:r.variables,returnPartialData:!0,optimistic:!1},function(b){return y(b,{fetchMoreResult:h.data,variables:o.variables})}):g.writeQuery({query:o.query,variables:o.variables,data:h.data})},onWatchUpdated:function(g){l.add(g.query)}});else{var p=r.getLast("result"),f=u(p.data,{fetchMoreResult:h.data,variables:o.variables});r.reportResult(v(v({},p),{networkStatus:c,loading:yn(c),data:f}),r.variables)}return r.maskResult(h)}).finally(function(){d&&!l.has(r.query)&&rh(r)})},t.prototype.subscribeToMore=function(n){var r=this,o=this.queryManager.startGraphQLSubscription({query:n.document,variables:n.variables,context:n.context}).subscribe({next:function(i){var s=n.updateQuery;s&&r.updateQuery(function(c,l){var u=l.variables;return s(c,{subscriptionData:i,variables:u})})},error:function(i){if(n.onError){n.onError(i);return}globalThis.__DEV__!==!1&&C.error(23,i)}});return this.subscriptions.add(o),function(){r.subscriptions.delete(o)&&o.unsubscribe()}},t.prototype.setOptions=function(n){return this.reobserve(n)},t.prototype.silentSetOptions=function(n){var r=Gt(this.options,n||{});Eb(this.options,r)},t.prototype.setVariables=function(n){return re(this.variables,n)?this.observers.size?this.result():Promise.resolve():(this.options.variables=n,this.observers.size?this.reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:n},X.setVariables):Promise.resolve())},t.prototype.updateQuery=function(n){var r=this.queryManager,o=r.cache.diff({query:this.options.query,variables:this.variables,returnPartialData:!0,optimistic:!1}).result,i=n(o,{variables:this.variables});i&&(r.cache.writeQuery({query:this.options.query,data:i,variables:this.variables}),r.broadcastQueries())},t.prototype.startPolling=function(n){this.options.pollInterval=n,this.updatePolling()},t.prototype.stopPolling=function(){this.options.pollInterval=0,this.updatePolling()},t.prototype.applyNextFetchPolicy=function(n,r){if(r.nextFetchPolicy){var o=r.fetchPolicy,i=o===void 0?"cache-first":o,s=r.initialFetchPolicy,c=s===void 0?i:s;i==="standby"||(typeof r.nextFetchPolicy=="function"?r.fetchPolicy=r.nextFetchPolicy(i,{reason:n,options:r,observable:this,initialFetchPolicy:c}):n==="variables-changed"?r.fetchPolicy=c:r.fetchPolicy=r.nextFetchPolicy)}return r.fetchPolicy},t.prototype.fetch=function(n,r,o){return this.queryManager.setObservableQuery(this),this.queryManager.fetchConcastWithInfo(this.queryId,n,r,o)},t.prototype.updatePolling=function(){var n=this;if(!this.queryManager.ssrMode){var r=this,o=r.pollingInfo,i=r.options.pollInterval;if(!i||!this.hasObservers()){o&&(clearTimeout(o.timeout),delete this.pollingInfo);return}if(!(o&&o.interval===i)){C(i,24);var s=o||(this.pollingInfo={});s.interval=i;var c=function(){var u,d;n.pollingInfo&&(!yn(n.queryInfo.networkStatus)&&!(!((d=(u=n.options).skipPollAttempt)===null||d===void 0)&&d.call(u))?n.reobserve({fetchPolicy:n.options.initialFetchPolicy==="no-cache"?"no-cache":"network-only"},X.poll).then(l,l):l())},l=function(){var u=n.pollingInfo;u&&(clearTimeout(u.timeout),u.timeout=setTimeout(c,u.interval))};l()}}},t.prototype.updateLastResult=function(n,r){r===void 0&&(r=this.variables);var o=this.getLastError();return o&&this.last&&!re(r,this.last.variables)&&(o=void 0),this.last=v({result:this.queryManager.assumeImmutableResults?n:Mc(n),variables:r},o?{error:o}:null)},t.prototype.reobserveAsConcast=function(n,r){var o=this;this.isTornDown=!1;var i=r===X.refetch||r===X.fetchMore||r===X.poll,s=this.options.variables,c=this.options.fetchPolicy,l=Gt(this.options,n||{}),u=i?l:Eb(this.options,l),d=this.transformDocument(u.query);this.lastQuery=d,i||(this.updatePolling(),n&&n.variables&&!re(n.variables,s)&&u.fetchPolicy!=="standby"&&(u.fetchPolicy===c||typeof u.nextFetchPolicy=="function")&&(this.applyNextFetchPolicy("variables-changed",u),r===void 0&&(r=X.setVariables))),this.waitForOwnResult&&(this.waitForOwnResult=nh(u.fetchPolicy));var h=function(){o.concast===g&&(o.waitForOwnResult=!1)},p=u.variables&&v({},u.variables),f=this.fetch(u,r,d),g=f.concast,y=f.fromLink,b={next:function(S){re(o.variables,p)&&(h(),o.reportResult(S,p))},error:function(S){re(o.variables,p)&&(Lc(S)||(S=new gn({networkError:S})),h(),o.reportError(S,p))}};return!i&&(y||!this.concast)&&(this.concast&&this.observer&&this.concast.removeObserver(this.observer),this.concast=g,this.observer=b),g.addObserver(b),g},t.prototype.reobserve=function(n,r){return _f(this.reobserveAsConcast(n,r).promise.then(this.maskResult))},t.prototype.resubscribeAfterError=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=this.last;this.resetLastResults();var i=this.subscribe.apply(this,n);return this.last=o,i},t.prototype.observe=function(){this.reportResult(this.getCurrentFullResult(!1),this.variables)},t.prototype.reportResult=function(n,r){var o=this.getLastError(),i=this.isDifferentFromLastResult(n,r);(o||!n.partial||this.options.returnPartialData)&&this.updateLastResult(n,r),(o||i)&&Sr(this.observers,"next",this.maskResult(n))},t.prototype.reportError=function(n,r){var o=v(v({},this.getLastResult()),{error:n,errors:n.graphQLErrors,networkStatus:X.error,loading:!1});this.updateLastResult(o,r),Sr(this.observers,"error",this.last.error=n)},t.prototype.hasObservers=function(){return this.observers.size>0},t.prototype.tearDownQuery=function(){this.isTornDown||(this.concast&&this.observer&&(this.concast.removeObserver(this.observer),delete this.concast,delete this.observer),this.stopPolling(),this.subscriptions.forEach(function(n){return n.unsubscribe()}),this.subscriptions.clear(),this.queryManager.stopQuery(this.queryId),this.observers.clear(),this.isTornDown=!0)},t.prototype.transformDocument=function(n){return this.queryManager.transform(n)},t.prototype.maskResult=function(n){return n&&"data"in n?v(v({},n),{data:this.queryManager.maskOperation({document:this.query,data:n.data,fetchPolicy:this.options.fetchPolicy,id:this.queryId})}):n},t}($);xc(Xc);function rh(e){var t=e.options,n=t.fetchPolicy,r=t.nextFetchPolicy;return n==="cache-and-network"||n==="network-only"?e.reobserve({fetchPolicy:"cache-first",nextFetchPolicy:function(o,i){return this.nextFetchPolicy=r,typeof this.nextFetchPolicy=="function"?this.nextFetchPolicy(o,i):n}}):e.reobserve()}function zM(e){globalThis.__DEV__!==!1&&C.error(25,e.message,e.stack)}function oh(e){globalThis.__DEV__!==!1&&e&&globalThis.__DEV__!==!1&&C.debug(26,e)}function nh(e){return e==="network-only"||e==="no-cache"||e==="standby"}var Ao=new(ct?WeakMap:Map);function ih(e,t){var n=e[t];typeof n=="function"&&(e[t]=function(){return Ao.set(e,(Ao.get(e)+1)%1e15),n.apply(this,arguments)})}function Cb(e){e.notifyTimeout&&(clearTimeout(e.notifyTimeout),e.notifyTimeout=void 0)}var el=function(){function e(t,n){n===void 0&&(n=t.generateQueryId()),this.queryId=n,this.listeners=new Set,this.document=null,this.lastRequestId=1,this.stopped=!1,this.dirty=!1,this.observableQuery=null;var r=this.cache=t.cache;Ao.has(r)||(Ao.set(r,0),ih(r,"evict"),ih(r,"modify"),ih(r,"reset"))}return e.prototype.init=function(t){var n=t.networkStatus||X.loading;return this.variables&&this.networkStatus!==X.loading&&!re(this.variables,t.variables)&&(n=X.setVariables),re(t.variables,this.variables)||(this.lastDiff=void 0),Object.assign(this,{document:t.document,variables:t.variables,networkError:null,graphQLErrors:this.graphQLErrors||[],networkStatus:n}),t.observableQuery&&this.setObservableQuery(t.observableQuery),t.lastRequestId&&(this.lastRequestId=t.lastRequestId),this},e.prototype.reset=function(){Cb(this),this.dirty=!1},e.prototype.resetDiff=function(){this.lastDiff=void 0},e.prototype.getDiff=function(){var t=this.getDiffOptions();if(this.lastDiff&&re(t,this.lastDiff.options))return this.lastDiff.diff;this.updateWatch(this.variables);var n=this.observableQuery;if(n&&n.options.fetchPolicy==="no-cache")return{complete:!1};var r=this.cache.diff(t);return this.updateLastDiff(r,t),r},e.prototype.updateLastDiff=function(t,n){this.lastDiff=t?{diff:t,options:n||this.getDiffOptions()}:void 0},e.prototype.getDiffOptions=function(t){var n;return t===void 0&&(t=this.variables),{query:this.document,variables:t,returnPartialData:!0,optimistic:!0,canonizeResults:(n=this.observableQuery)===null||n===void 0?void 0:n.options.canonizeResults}},e.prototype.setDiff=function(t){var n=this,r,o=this.lastDiff&&this.lastDiff.diff;t&&!t.complete&&(!((r=this.observableQuery)===null||r===void 0)&&r.getLastError())||(this.updateLastDiff(t),!this.dirty&&!re(o&&o.result,t&&t.result)&&(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout(function(){return n.notify()},0))))},e.prototype.setObservableQuery=function(t){var n=this;t!==this.observableQuery&&(this.oqListener&&this.listeners.delete(this.oqListener),this.observableQuery=t,t?(t.queryInfo=this,this.listeners.add(this.oqListener=function(){var r=n.getDiff();r.fromOptimisticTransaction?t.observe():rh(t)})):delete this.oqListener)},e.prototype.notify=function(){var t=this;Cb(this),this.shouldNotify()&&this.listeners.forEach(function(n){return n(t)}),this.dirty=!1},e.prototype.shouldNotify=function(){if(!this.dirty||!this.listeners.size)return!1;if(yn(this.networkStatus)&&this.observableQuery){var t=this.observableQuery.options.fetchPolicy;if(t!=="cache-only"&&t!=="cache-and-network")return!1}return!0},e.prototype.stop=function(){if(!this.stopped){this.stopped=!0,this.reset(),this.cancel(),this.cancel=e.prototype.cancel;var t=this.observableQuery;t&&t.stopPolling()}},e.prototype.cancel=function(){},e.prototype.updateWatch=function(t){var n=this;t===void 0&&(t=this.variables);var r=this.observableQuery;if(!(r&&r.options.fetchPolicy==="no-cache")){var o=v(v({},this.getDiffOptions(t)),{watcher:this,callback:function(i){return n.setDiff(i)}});(!this.lastWatch||!re(o,this.lastWatch))&&(this.cancel(),this.cancel=this.cache.watch(this.lastWatch=o))}},e.prototype.resetLastWrite=function(){this.lastWrite=void 0},e.prototype.shouldWrite=function(t,n){var r=this.lastWrite;return!(r&&r.dmCount===Ao.get(this.cache)&&re(n,r.variables)&&re(t.data,r.result.data))},e.prototype.markResult=function(t,n,r,o){var i=this,s=new Xe,c=je(t.errors)?t.errors.slice(0):[];if(this.reset(),"incremental"in t&&je(t.incremental)){var l=kc(this.getDiff().result,t);t.data=l}else if("hasNext"in t&&t.hasNext){var u=this.getDiff();t.data=s.merge(u.result,t.data)}this.graphQLErrors=c,r.fetchPolicy==="no-cache"?this.updateLastDiff({result:t.data,complete:!0},this.getDiffOptions(r.variables)):o!==0&&(tl(t,r.errorPolicy)?this.cache.performTransaction(function(d){if(i.shouldWrite(t,r.variables))d.writeQuery({query:n,data:t.data,variables:r.variables,overwrite:o===1}),i.lastWrite={result:t,variables:r.variables,dmCount:Ao.get(i.cache)};else if(i.lastDiff&&i.lastDiff.diff.complete){t.data=i.lastDiff.diff.result;return}var h=i.getDiffOptions(r.variables),p=d.diff(h);!i.stopped&&re(i.variables,r.variables)&&i.updateWatch(r.variables),i.updateLastDiff(p,h),p.complete&&(t.data=p.result)}):this.lastWrite=void 0)},e.prototype.markReady=function(){return this.networkError=null,this.networkStatus=X.ready},e.prototype.markError=function(t){return this.networkStatus=X.error,this.lastWrite=void 0,this.reset(),t.graphQLErrors&&(this.graphQLErrors=t.graphQLErrors),t.networkError&&(this.networkError=t.networkError),t},e}();function tl(e,t){t===void 0&&(t="none");var n=t==="ignore"||t==="all",r=!Mo(e);return!r&&n&&e.data&&(r=!0),r}var qM=Object.prototype.hasOwnProperty,Ib=Object.create(null),Pb=function(){function e(t){var n=this;this.clientAwareness={},this.queries=new Map,this.fetchCancelFns=new Map,this.transformCache=new wo(_e["queryManager.getDocumentInfo"]||2e3),this.queryIdCounter=1,this.requestIdCounter=1,this.mutationIdCounter=1,this.inFlightLinkObservables=new ze(!1),this.noCacheWarningsByQueryId=new Set;var r=new Io(function(i){return n.cache.transformDocument(i)},{cache:!1});this.cache=t.cache,this.link=t.link,this.defaultOptions=t.defaultOptions,this.queryDeduplication=t.queryDeduplication,this.clientAwareness=t.clientAwareness,this.localState=t.localState,this.ssrMode=t.ssrMode,this.assumeImmutableResults=t.assumeImmutableResults,this.dataMasking=t.dataMasking;var o=t.documentTransform;this.documentTransform=o?r.concat(o).concat(r):r,this.defaultContext=t.defaultContext||Object.create(null),(this.onBroadcast=t.onBroadcast)&&(this.mutationStore=Object.create(null))}return e.prototype.stop=function(){var t=this;this.queries.forEach(function(n,r){t.stopQueryNoBroadcast(r)}),this.cancelPendingFetches(ue(27))},e.prototype.cancelPendingFetches=function(t){this.fetchCancelFns.forEach(function(n){return n(t)}),this.fetchCancelFns.clear()},e.prototype.mutate=function(t){return tt(this,arguments,void 0,function(n){var r,o,i,s,c,l,u,d=n.mutation,h=n.variables,p=n.optimisticResponse,f=n.updateQueries,g=n.refetchQueries,y=g===void 0?[]:g,b=n.awaitRefetchQueries,S=b===void 0?!1:b,T=n.update,D=n.onQueryUpdated,I=n.fetchPolicy,R=I===void 0?((l=this.defaultOptions.mutate)===null||l===void 0?void 0:l.fetchPolicy)||"network-only":I,x=n.errorPolicy,U=x===void 0?((u=this.defaultOptions.mutate)===null||u===void 0?void 0:u.errorPolicy)||"none":x,G=n.keepRootFields,se=n.context;return Tt(this,function(ve){switch(ve.label){case 0:return C(d,28),C(R==="network-only"||R==="no-cache",29),r=this.generateMutationId(),d=this.cache.transformForLink(this.transform(d)),o=this.getDocumentInfo(d).hasClientExports,h=this.getVariables(d,h),o?[4,this.localState.addExportedVariables(d,h,se)]:[3,2];case 1:h=ve.sent(),ve.label=2;case 2:return i=this.mutationStore&&(this.mutationStore[r]={mutation:d,variables:h,loading:!0,error:null}),s=p&&this.markMutationOptimistic(p,{mutationId:r,document:d,variables:h,fetchPolicy:R,errorPolicy:U,context:se,updateQueries:f,update:T,keepRootFields:G}),this.broadcastQueries(),c=this,[2,new Promise(function(Lt,wr){return _c(c.getObservableFromLink(d,v(v({},se),{optimisticResponse:s?p:void 0}),h,{},!1),function(Ae){if(Mo(Ae)&&U==="none")throw new gn({graphQLErrors:Nc(Ae)});i&&(i.loading=!1,i.error=null);var vn=v({},Ae);return typeof y=="function"&&(y=y(vn)),U==="ignore"&&Mo(vn)&&delete vn.errors,c.markMutationResult({mutationId:r,result:vn,document:d,variables:h,fetchPolicy:R,errorPolicy:U,context:se,update:T,updateQueries:f,awaitRefetchQueries:S,refetchQueries:y,removeOptimistic:s?r:void 0,onQueryUpdated:D,keepRootFields:G})}).subscribe({next:function(Ae){c.broadcastQueries(),(!("hasNext"in Ae)||Ae.hasNext===!1)&&Lt(v(v({},Ae),{data:c.maskOperation({document:d,data:Ae.data,fetchPolicy:R,id:r})}))},error:function(Ae){i&&(i.loading=!1,i.error=Ae),s&&c.cache.removeOptimistic(r),c.broadcastQueries(),wr(Ae instanceof gn?Ae:new gn({networkError:Ae}))}})})]}})})},e.prototype.markMutationResult=function(t,n){var r=this;n===void 0&&(n=this.cache);var o=t.result,i=[],s=t.fetchPolicy==="no-cache";if(!s&&tl(o,t.errorPolicy)){if($n(o)||i.push({result:o.data,dataId:"ROOT_MUTATION",query:t.document,variables:t.variables}),$n(o)&&je(o.incremental)){var c=n.diff({id:"ROOT_MUTATION",query:this.getDocumentInfo(t.document).asQuery,variables:t.variables,optimistic:!1,returnPartialData:!0}),l=void 0;c.result&&(l=kc(c.result,o)),typeof l<"u"&&(o.data=l,i.push({result:l,dataId:"ROOT_MUTATION",query:t.document,variables:t.variables}))}var u=t.updateQueries;u&&this.queries.forEach(function(h,p){var f=h.observableQuery,g=f&&f.queryName;if(!(!g||!qM.call(u,g))){var y=u[g],b=r.queries.get(p),S=b.document,T=b.variables,D=n.diff({query:S,variables:T,returnPartialData:!0,optimistic:!1}),I=D.result,R=D.complete;if(R&&I){var x=y(I,{mutationResult:o,queryName:S&&jn(S)||void 0,queryVariables:T});x&&i.push({result:x,dataId:"ROOT_QUERY",query:S,variables:T})}}})}if(i.length>0||(t.refetchQueries||"").length>0||t.update||t.onQueryUpdated||t.removeOptimistic){var d=[];if(this.refetchQueries({updateCache:function(h){s||i.forEach(function(y){return h.write(y)});var p=t.update,f=!MS(o)||$n(o)&&!o.hasNext;if(p){if(!s){var g=h.diff({id:"ROOT_MUTATION",query:r.getDocumentInfo(t.document).asQuery,variables:t.variables,optimistic:!1,returnPartialData:!0});g.complete&&(o=v(v({},o),{data:g.result}),"incremental"in o&&delete o.incremental,"hasNext"in o&&delete o.hasNext)}f&&p(h,o,{context:t.context,variables:t.variables})}!s&&!t.keepRootFields&&f&&h.modify({id:"ROOT_MUTATION",fields:function(y,b){var S=b.fieldName,T=b.DELETE;return S==="__typename"?y:T}})},include:t.refetchQueries,optimistic:!1,removeOptimistic:t.removeOptimistic,onQueryUpdated:t.onQueryUpdated||null}).forEach(function(h){return d.push(h)}),t.awaitRefetchQueries||t.onQueryUpdated)return Promise.all(d).then(function(){return o})}return Promise.resolve(o)},e.prototype.markMutationOptimistic=function(t,n){var r=this,o=typeof t=="function"?t(n.variables,{IGNORE:Ib}):t;return o===Ib?!1:(this.cache.recordOptimisticTransaction(function(i){try{r.markMutationResult(v(v({},n),{result:{data:o}}),i)}catch(s){globalThis.__DEV__!==!1&&C.error(s)}},n.mutationId),!0)},e.prototype.fetchQuery=function(t,n,r){return this.fetchConcastWithInfo(t,n,r).concast.promise},e.prototype.getQueryStore=function(){var t=Object.create(null);return this.queries.forEach(function(n,r){t[r]={variables:n.variables,networkStatus:n.networkStatus,networkError:n.networkError,graphQLErrors:n.graphQLErrors}}),t},e.prototype.resetErrors=function(t){var n=this.queries.get(t);n&&(n.networkError=void 0,n.graphQLErrors=[])},e.prototype.transform=function(t){return this.documentTransform.transformDocument(t)},e.prototype.getDocumentInfo=function(t){var n=this.transformCache;if(!n.has(t)){var r={hasClientExports:rf(t),hasForcedResolvers:this.localState.shouldForceResolvers(t),hasNonreactiveDirective:un(["nonreactive"],t),nonReactiveQuery:bf(t),clientQuery:this.localState.clientQuery(t),serverQuery:Ic([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"},{name:"unmask"}],t),defaultVars:mr(ut(t)),asQuery:v(v({},t),{definitions:t.definitions.map(function(o){return o.kind==="OperationDefinition"&&o.operation!=="query"?v(v({},o),{operation:"query"}):o})})};n.set(t,r)}return n.get(t)},e.prototype.getVariables=function(t,n){return v(v({},this.getDocumentInfo(t).defaultVars),n)},e.prototype.watchQuery=function(t){var n=this.transform(t.query);t=v(v({},t),{variables:this.getVariables(n,t.variables)}),typeof t.notifyOnNetworkStatusChange>"u"&&(t.notifyOnNetworkStatusChange=!1);var r=new el(this),o=new Xc({queryManager:this,queryInfo:r,options:t});return o.lastQuery=n,this.queries.set(o.queryId,r),r.init({document:n,observableQuery:o,variables:o.variables}),o},e.prototype.query=function(t,n){var r=this;n===void 0&&(n=this.generateQueryId()),C(t.query,30),C(t.query.kind==="Document",31),C(!t.returnPartialData,32),C(!t.pollInterval,33);var o=this.transform(t.query);return this.fetchQuery(n,v(v({},t),{query:o})).then(function(i){return i&&v(v({},i),{data:r.maskOperation({document:o,data:i.data,fetchPolicy:t.fetchPolicy,id:n})})}).finally(function(){return r.stopQuery(n)})},e.prototype.generateQueryId=function(){return String(this.queryIdCounter++)},e.prototype.generateRequestId=function(){return this.requestIdCounter++},e.prototype.generateMutationId=function(){return String(this.mutationIdCounter++)},e.prototype.stopQueryInStore=function(t){this.stopQueryInStoreNoBroadcast(t),this.broadcastQueries()},e.prototype.stopQueryInStoreNoBroadcast=function(t){var n=this.queries.get(t);n&&n.stop()},e.prototype.clearStore=function(t){return t===void 0&&(t={discardWatches:!0}),this.cancelPendingFetches(ue(34)),this.queries.forEach(function(n){n.observableQuery?n.networkStatus=X.loading:n.stop()}),this.mutationStore&&(this.mutationStore=Object.create(null)),this.cache.reset(t)},e.prototype.getObservableQueries=function(t){var n=this;t===void 0&&(t="active");var r=new Map,o=new Map,i=new Map,s=new Set;return Array.isArray(t)&&t.forEach(function(c){if(typeof c=="string")o.set(c,c),i.set(c,!1);else if(hf(c)){var l=At(n.transform(c));o.set(l,jn(c)),i.set(l,!1)}else Z(c)&&c.query&&s.add(c)}),this.queries.forEach(function(c,l){var u=c.observableQuery,d=c.document;if(u){if(t==="all"){r.set(l,u);return}var h=u.queryName,p=u.options.fetchPolicy;if(p==="standby"||t==="active"&&!u.hasObservers())return;(t==="active"||h&&i.has(h)||d&&i.has(At(d)))&&(r.set(l,u),h&&i.set(h,!0),d&&i.set(At(d),!0))}}),s.size&&s.forEach(function(c){var l=ki("legacyOneTimeQuery"),u=n.getQuery(l).init({document:c.query,variables:c.variables}),d=new Xc({queryManager:n,queryInfo:u,options:v(v({},c),{fetchPolicy:"network-only"})});C(d.queryId===l),u.setObservableQuery(d),r.set(l,d)}),globalThis.__DEV__!==!1&&i.size&&i.forEach(function(c,l){if(!c){var u=o.get(l);u?globalThis.__DEV__!==!1&&C.warn(35,u):globalThis.__DEV__!==!1&&C.warn(36)}}),r},e.prototype.reFetchObservableQueries=function(t){var n=this;t===void 0&&(t=!1);var r=[];return this.getObservableQueries(t?"all":"active").forEach(function(o,i){var s=o.options.fetchPolicy;o.resetLastResults(),(t||s!=="standby"&&s!=="cache-only")&&r.push(o.refetch()),n.getQuery(i).setDiff(null)}),this.broadcastQueries(),Promise.all(r)},e.prototype.setObservableQuery=function(t){this.getQuery(t.queryId).setObservableQuery(t)},e.prototype.startGraphQLSubscription=function(t){var n=this,r=t.query,o=t.variables,i=t.fetchPolicy,s=t.errorPolicy,c=s===void 0?"none":s,l=t.context,u=l===void 0?{}:l,d=t.extensions,h=d===void 0?{}:d;r=this.transform(r),o=this.getVariables(r,o);var p=function(g){return n.getObservableFromLink(r,u,g,h).map(function(y){i!=="no-cache"&&(tl(y,c)&&n.cache.write({query:r,result:y.data,dataId:"ROOT_SUBSCRIPTION",variables:g}),n.broadcastQueries());var b=Mo(y),S=NS(y);if(b||S){var T={};if(b&&(T.graphQLErrors=y.errors),S&&(T.protocolErrors=y.extensions[Ki]),c==="none"||S)throw new gn(T)}return c==="ignore"&&delete y.errors,y})};if(this.getDocumentInfo(r).hasClientExports){var f=this.localState.addExportedVariables(r,o,u).then(p);return new $(function(g){var y=null;return f.then(function(b){return y=b.subscribe(g)},g.error),function(){return y&&y.unsubscribe()}})}return p(o)},e.prototype.stopQuery=function(t){this.stopQueryNoBroadcast(t),this.broadcastQueries()},e.prototype.stopQueryNoBroadcast=function(t){this.stopQueryInStoreNoBroadcast(t),this.removeQuery(t)},e.prototype.removeQuery=function(t){this.fetchCancelFns.delete(t),this.queries.has(t)&&(this.getQuery(t).stop(),this.queries.delete(t))},e.prototype.broadcastQueries=function(){this.onBroadcast&&this.onBroadcast(),this.queries.forEach(function(t){return t.notify()})},e.prototype.getLocalState=function(){return this.localState},e.prototype.getObservableFromLink=function(t,n,r,o,i){var s=this,c;i===void 0&&(i=(c=n?.queryDeduplication)!==null&&c!==void 0?c:this.queryDeduplication);var l,u=this.getDocumentInfo(t),d=u.serverQuery,h=u.clientQuery;if(d){var p=this,f=p.inFlightLinkObservables,g=p.link,y={query:d,variables:r,operationName:jn(d)||void 0,context:this.prepareContext(v(v({},n),{forceFetch:!i})),extensions:o};if(n=y.context,i){var b=At(d),S=qe(r),T=f.lookup(b,S);if(l=T.observable,!l){var D=new br([_o(g,y)]);l=T.observable=D,D.beforeNext(function(){f.remove(b,S)})}}else l=new br([_o(g,y)])}else l=new br([$.of({data:{}})]),n=this.prepareContext(n);return h&&(l=_c(l,function(I){return s.localState.runResolvers({document:h,remoteResult:I,context:n,variables:r})})),l},e.prototype.getResultsFromLink=function(t,n,r){var o=t.lastRequestId=this.generateRequestId(),i=this.cache.transformForLink(r.query);return _c(this.getObservableFromLink(i,r.context,r.variables),function(s){var c=Nc(s),l=c.length>0,u=r.errorPolicy;if(o>=t.lastRequestId){if(l&&u==="none")throw t.markError(new gn({graphQLErrors:c}));t.markResult(s,i,r,n),t.markReady()}var d={data:s.data,loading:!1,networkStatus:X.ready};return l&&u==="none"&&(d.data=void 0),l&&u!=="ignore"&&(d.errors=c,d.networkStatus=X.error),d},function(s){var c=Lc(s)?s:new gn({networkError:s});throw o>=t.lastRequestId&&t.markError(c),c})},e.prototype.fetchConcastWithInfo=function(t,n,r,o){var i=this;r===void 0&&(r=X.loading),o===void 0&&(o=n.query);var s=this.getVariables(o,n.variables),c=this.getQuery(t),l=this.defaultOptions.watchQuery,u=n.fetchPolicy,d=u===void 0?l&&l.fetchPolicy||"cache-first":u,h=n.errorPolicy,p=h===void 0?l&&l.errorPolicy||"none":h,f=n.returnPartialData,g=f===void 0?!1:f,y=n.notifyOnNetworkStatusChange,b=y===void 0?!1:y,S=n.context,T=S===void 0?{}:S,D=Object.assign({},n,{query:o,variables:s,fetchPolicy:d,errorPolicy:p,returnPartialData:g,notifyOnNetworkStatusChange:b,context:T}),I=function(se){D.variables=se;var ve=i.fetchQueryByPolicy(c,D,r);return D.fetchPolicy!=="standby"&&ve.sources.length>0&&c.observableQuery&&c.observableQuery.applyNextFetchPolicy("after-fetch",n),ve},R=function(){return i.fetchCancelFns.delete(t)};this.fetchCancelFns.set(t,function(se){R(),setTimeout(function(){return x.cancel(se)})});var x,U;if(this.getDocumentInfo(D.query).hasClientExports)x=new br(this.localState.addExportedVariables(D.query,D.variables,D.context).then(I).then(function(se){return se.sources})),U=!0;else{var G=I(D.variables);U=G.fromLink,x=new br(G.sources)}return x.promise.then(R,R),{concast:x,fromLink:U}},e.prototype.refetchQueries=function(t){var n=this,r=t.updateCache,o=t.include,i=t.optimistic,s=i===void 0?!1:i,c=t.removeOptimistic,l=c===void 0?s?ki("refetchQueries"):void 0:c,u=t.onQueryUpdated,d=new Map;o&&this.getObservableQueries(o).forEach(function(p,f){d.set(f,{oq:p,lastDiff:n.getQuery(f).getDiff()})});var h=new Map;return r&&this.cache.batch({update:r,optimistic:s&&l||!1,removeOptimistic:l,onWatchUpdated:function(p,f,g){var y=p.watcher instanceof el&&p.watcher.observableQuery;if(y){if(u){d.delete(y.queryId);var b=u(y,f,g);return b===!0&&(b=y.refetch()),b!==!1&&h.set(y,b),b}u!==null&&d.set(y.queryId,{oq:y,lastDiff:g,diff:f})}}}),d.size&&d.forEach(function(p,f){var g=p.oq,y=p.lastDiff,b=p.diff,S;if(u){if(!b){var T=g.queryInfo;T.reset(),b=T.getDiff()}S=u(g,b,y)}(!u||S===!0)&&(S=g.refetch()),S!==!1&&h.set(g,S),f.indexOf("legacyOneTimeQuery")>=0&&n.stopQueryNoBroadcast(f)}),l&&this.cache.removeOptimistic(l),h},e.prototype.maskOperation=function(t){var n,r,o,i=t.document,s=t.data;if(globalThis.__DEV__!==!1){var c=t.fetchPolicy,l=t.id,u=(n=ut(i))===null||n===void 0?void 0:n.operation,d=((r=u?.[0])!==null&&r!==void 0?r:"o")+l;this.dataMasking&&c==="no-cache"&&!cf(i)&&!this.noCacheWarningsByQueryId.has(d)&&(this.noCacheWarningsByQueryId.add(d),globalThis.__DEV__!==!1&&C.warn(37,(o=jn(i))!==null&&o!==void 0?o:"Unnamed ".concat(u??"operation")))}return this.dataMasking?Vf(s,i,this.cache):s},e.prototype.maskFragment=function(t){var n=t.data,r=t.fragment,o=t.fragmentName;return this.dataMasking?es(n,r,this.cache,o):n},e.prototype.fetchQueryByPolicy=function(t,n,r){var o=this,i=n.query,s=n.variables,c=n.fetchPolicy,l=n.refetchWritePolicy,u=n.errorPolicy,d=n.returnPartialData,h=n.context,p=n.notifyOnNetworkStatusChange,f=t.networkStatus;t.init({document:i,variables:s,networkStatus:r});var g=function(){return t.getDiff()},y=function(I,R){R===void 0&&(R=t.networkStatus||X.loading);var x=I.result;globalThis.__DEV__!==!1&&!d&&!re(x,{})&&oh(I.missing);var U=function(G){return $.of(v({data:G,loading:yn(R),networkStatus:R},I.complete?null:{partial:!0}))};return x&&o.getDocumentInfo(i).hasForcedResolvers?o.localState.runResolvers({document:i,remoteResult:{data:x},context:h,variables:s,onlyRunForcedResolvers:!0}).then(function(G){return U(G.data||void 0)}):u==="none"&&R===X.refetch&&Array.isArray(I.missing)?U(void 0):U(x)},b=c==="no-cache"?0:r===X.refetch&&l!=="merge"?1:2,S=function(){return o.getResultsFromLink(t,b,{query:i,variables:s,context:h,fetchPolicy:c,errorPolicy:u})},T=p&&typeof f=="number"&&f!==r&&yn(r);switch(c){default:case"cache-first":{var D=g();return D.complete?{fromLink:!1,sources:[y(D,t.markReady())]}:d||T?{fromLink:!0,sources:[y(D),S()]}:{fromLink:!0,sources:[S()]}}case"cache-and-network":{var D=g();return D.complete||d||T?{fromLink:!0,sources:[y(D),S()]}:{fromLink:!0,sources:[S()]}}case"cache-only":return{fromLink:!1,sources:[y(g(),t.markReady())]};case"network-only":return T?{fromLink:!0,sources:[y(g()),S()]}:{fromLink:!0,sources:[S()]};case"no-cache":return T?{fromLink:!0,sources:[y(t.getDiff()),S()]}:{fromLink:!0,sources:[S()]};case"standby":return{fromLink:!1,sources:[]}}},e.prototype.getQuery=function(t){return t&&!this.queries.has(t)&&this.queries.set(t,new el(this,t)),this.queries.get(t)},e.prototype.prepareContext=function(t){t===void 0&&(t={});var n=this.localState.prepareContext(t);return v(v(v({},this.defaultContext),n),{clientAwareness:this.clientAwareness})},e}();var Rb=function(){function e(t){var n=t.cache,r=t.client,o=t.resolvers,i=t.fragmentMatcher;this.selectionsToResolveCache=new WeakMap,this.cache=n,r&&(this.client=r),o&&this.addResolvers(o),i&&this.setFragmentMatcher(i)}return e.prototype.addResolvers=function(t){var n=this;this.resolvers=this.resolvers||{},Array.isArray(t)?t.forEach(function(r){n.resolvers=Df(n.resolvers,r)}):this.resolvers=Df(this.resolvers,t)},e.prototype.setResolvers=function(t){this.resolvers={},this.addResolvers(t)},e.prototype.getResolvers=function(){return this.resolvers||{}},e.prototype.runResolvers=function(t){return tt(this,arguments,void 0,function(n){var r=n.document,o=n.remoteResult,i=n.context,s=n.variables,c=n.onlyRunForcedResolvers,l=c===void 0?!1:c;return Tt(this,function(u){return r?[2,this.resolveDocument(r,o.data,i,s,this.fragmentMatcher,l).then(function(d){return v(v({},o),{data:d.result})})]:[2,o]})})},e.prototype.setFragmentMatcher=function(t){this.fragmentMatcher=t},e.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},e.prototype.clientQuery=function(t){return un(["client"],t)&&this.resolvers?t:null},e.prototype.serverQuery=function(t){return qi(t)},e.prototype.prepareContext=function(t){var n=this.cache;return v(v({},t),{cache:n,getCacheKey:function(r){return n.identify(r)}})},e.prototype.addExportedVariables=function(t){return tt(this,arguments,void 0,function(n,r,o){return r===void 0&&(r={}),o===void 0&&(o={}),Tt(this,function(i){return n?[2,this.resolveDocument(n,this.buildRootValueFromCache(n,r)||{},this.prepareContext(o),r).then(function(s){return v(v({},r),s.exportedVariables)})]:[2,v({},r)]})})},e.prototype.shouldForceResolvers=function(t){var n=!1;return Me(t,{Directive:{enter:function(r){if(r.name.value==="client"&&r.arguments&&(n=r.arguments.some(function(o){return o.name.value==="always"&&o.value.kind==="BooleanValue"&&o.value.value===!0}),n))return ln}}}),n},e.prototype.buildRootValueFromCache=function(t,n){return this.cache.diff({query:Sf(t),variables:n,returnPartialData:!0,optimistic:!1}).result},e.prototype.resolveDocument=function(t,n){return tt(this,arguments,void 0,function(r,o,i,s,c,l){var u,d,h,p,f,g,y,b,S,T,D;return i===void 0&&(i={}),s===void 0&&(s={}),c===void 0&&(c=function(){return!0}),l===void 0&&(l=!1),Tt(this,function(I){return u=Ot(r),d=dt(r),h=lt(d),p=this.collectSelectionsToResolve(u,h),f=u.operation,g=f?f.charAt(0).toUpperCase()+f.slice(1):"Query",y=this,b=y.cache,S=y.client,T={fragmentMap:h,context:v(v({},i),{cache:b,client:S}),variables:s,fragmentMatcher:c,defaultOperationType:g,exportedVariables:{},selectionsToResolve:p,onlyRunForcedResolvers:l},D=!1,[2,this.resolveSelectionSet(u.selectionSet,D,o,T).then(function(R){return{result:R,exportedVariables:T.exportedVariables}})]})})},e.prototype.resolveSelectionSet=function(t,n,r,o){return tt(this,void 0,void 0,function(){var i,s,c,l,u,d=this;return Tt(this,function(h){return i=o.fragmentMap,s=o.context,c=o.variables,l=[r],u=function(p){return tt(d,void 0,void 0,function(){var f,g;return Tt(this,function(y){return!n&&!o.selectionsToResolve.has(p)?[2]:Nt(p,c)?We(p)?[2,this.resolveField(p,n,r,o).then(function(b){var S;typeof b<"u"&&l.push((S={},S[Ve(p)]=b,S))})]:(mf(p)?f=p:(f=i[p.name.value],C(f,19,p.name.value)),f&&f.typeCondition&&(g=f.typeCondition.name.value,o.fragmentMatcher(r,g,s))?[2,this.resolveSelectionSet(f.selectionSet,n,r,o).then(function(b){l.push(b)})]:[2]):[2]})})},[2,Promise.all(t.selections.map(u)).then(function(){return vr(l)})]})})},e.prototype.resolveField=function(t,n,r,o){return tt(this,void 0,void 0,function(){var i,s,c,l,u,d,h,p,f,g=this;return Tt(this,function(y){return r?(i=o.variables,s=t.name.value,c=Ve(t),l=s!==c,u=r[c]||r[s],d=Promise.resolve(u),(!o.onlyRunForcedResolvers||this.shouldForceResolvers(t))&&(h=r.__typename||o.defaultOperationType,p=this.resolvers&&this.resolvers[h],p&&(f=p[l?s:c],f&&(d=Promise.resolve(No.withValue(this.cache,f,[r,fn(t,i),o.context,{field:t,fragmentMap:o.fragmentMap}]))))),[2,d.then(function(b){var S,T;if(b===void 0&&(b=u),t.directives&&t.directives.forEach(function(I){I.name.value==="export"&&I.arguments&&I.arguments.forEach(function(R){R.name.value==="as"&&R.value.kind==="StringValue"&&(o.exportedVariables[R.value.value]=b)})}),!t.selectionSet||b==null)return b;var D=(T=(S=t.directives)===null||S===void 0?void 0:S.some(function(I){return I.name.value==="client"}))!==null&&T!==void 0?T:!1;if(Array.isArray(b))return g.resolveSubSelectedArray(t,n||D,b,o);if(t.selectionSet)return g.resolveSelectionSet(t.selectionSet,n||D,b,o)})]):[2,null]})})},e.prototype.resolveSubSelectedArray=function(t,n,r,o){var i=this;return Promise.all(r.map(function(s){if(s===null)return null;if(Array.isArray(s))return i.resolveSubSelectedArray(t,n,s,o);if(t.selectionSet)return i.resolveSelectionSet(t.selectionSet,n,s,o)}))},e.prototype.collectSelectionsToResolve=function(t,n){var r=function(s){return!Array.isArray(s)},o=this.selectionsToResolveCache;function i(s){if(!o.has(s)){var c=new Set;o.set(s,c),Me(s,{Directive:function(l,u,d,h,p){l.name.value==="client"&&p.forEach(function(f){r(f)&&Fi(f)&&c.add(f)})},FragmentSpread:function(l,u,d,h,p){var f=n[l.name.value];C(f,20,l.name.value);var g=i(f);g.size>0&&(p.forEach(function(y){r(y)&&Fi(y)&&c.add(y)}),c.add(l),g.forEach(function(y){c.add(y)}))}})}return o.get(s)}return i(t)},e}();var Mb=!1;var is=function(){function e(t){var n=this,r;if(this.resetStoreCallbacks=[],this.clearStoreCallbacks=[],!t.cache)throw ue(16);var o=t.uri,i=t.credentials,s=t.headers,c=t.cache,l=t.documentTransform,u=t.ssrMode,d=u===void 0?!1:u,h=t.ssrForceFetchDelay,p=h===void 0?0:h,f=t.connectToDevTools,g=t.queryDeduplication,y=g===void 0?!0:g,b=t.defaultOptions,S=t.defaultContext,T=t.assumeImmutableResults,D=T===void 0?c.assumeImmutableResults:T,I=t.resolvers,R=t.typeDefs,x=t.fragmentMatcher,U=t.name,G=t.version,se=t.devtools,ve=t.dataMasking,Lt=t.link;Lt||(Lt=o?new Uf({uri:o,credentials:i,headers:s}):bt.empty()),this.link=Lt,this.cache=c,this.disableNetworkFetches=d||p>0,this.queryDeduplication=y,this.defaultOptions=b||Object.create(null),this.typeDefs=R,this.devtoolsConfig=v(v({},se),{enabled:(r=se?.enabled)!==null&&r!==void 0?r:f}),this.devtoolsConfig.enabled===void 0&&(this.devtoolsConfig.enabled=globalThis.__DEV__!==!1),p&&setTimeout(function(){return n.disableNetworkFetches=!1},p),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.watchFragment=this.watchFragment.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this),this.version=xi,this.localState=new Rb({cache:c,client:this,resolvers:I,fragmentMatcher:x}),this.queryManager=new Pb({cache:this.cache,link:this.link,defaultOptions:this.defaultOptions,defaultContext:S,documentTransform:l,queryDeduplication:y,ssrMode:d,dataMasking:!!ve,clientAwareness:{name:U,version:G},localState:this.localState,assumeImmutableResults:D,onBroadcast:this.devtoolsConfig.enabled?function(){n.devToolsHookCb&&n.devToolsHookCb({action:{},state:{queries:n.queryManager.getQueryStore(),mutations:n.queryManager.mutationStore||{}},dataWithOptimisticResults:n.cache.extract(!0)})}:void 0}),this.devtoolsConfig.enabled&&this.connectToDevTools()}return e.prototype.connectToDevTools=function(){if(!(typeof window>"u")){var t=window,n=Symbol.for("apollo.devtools");(t[n]=t[n]||[]).push(this),t.__APOLLO_CLIENT__=this,!Mb&&globalThis.__DEV__!==!1&&(Mb=!0,window.document&&window.top===window.self&&/^(https?|file):$/.test(window.location.protocol)&&setTimeout(function(){if(!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__){var r=window.navigator,o=r&&r.userAgent,i=void 0;typeof o=="string"&&(o.indexOf("Chrome/")>-1?i="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":o.indexOf("Firefox/")>-1&&(i="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),i&&globalThis.__DEV__!==!1&&C.log("Download the Apollo DevTools for a better development experience: %s",i)}},1e4))}},Object.defineProperty(e.prototype,"documentTransform",{get:function(){return this.queryManager.documentTransform},enumerable:!1,configurable:!0}),e.prototype.stop=function(){this.queryManager.stop()},e.prototype.watchQuery=function(t){return this.defaultOptions.watchQuery&&(t=Gi(this.defaultOptions.watchQuery,t)),this.disableNetworkFetches&&(t.fetchPolicy==="network-only"||t.fetchPolicy==="cache-and-network")&&(t=v(v({},t),{fetchPolicy:"cache-first"})),this.queryManager.watchQuery(t)},e.prototype.query=function(t){return this.defaultOptions.query&&(t=Gi(this.defaultOptions.query,t)),C(t.fetchPolicy!=="cache-and-network",17),this.disableNetworkFetches&&t.fetchPolicy==="network-only"&&(t=v(v({},t),{fetchPolicy:"cache-first"})),this.queryManager.query(t)},e.prototype.mutate=function(t){return this.defaultOptions.mutate&&(t=Gi(this.defaultOptions.mutate,t)),this.queryManager.mutate(t)},e.prototype.subscribe=function(t){var n=this,r=this.queryManager.generateQueryId();return this.queryManager.startGraphQLSubscription(t).map(function(o){return v(v({},o),{data:n.queryManager.maskOperation({document:t.query,data:o.data,fetchPolicy:t.fetchPolicy,id:r})})})},e.prototype.readQuery=function(t,n){return n===void 0&&(n=!1),this.cache.readQuery(t,n)},e.prototype.watchFragment=function(t){var n;return this.cache.watchFragment(v(v({},t),(n={},n[Symbol.for("apollo.dataMasking")]=this.queryManager.dataMasking,n)))},e.prototype.readFragment=function(t,n){return n===void 0&&(n=!1),this.cache.readFragment(t,n)},e.prototype.writeQuery=function(t){var n=this.cache.writeQuery(t);return t.broadcast!==!1&&this.queryManager.broadcastQueries(),n},e.prototype.writeFragment=function(t){var n=this.cache.writeFragment(t);return t.broadcast!==!1&&this.queryManager.broadcastQueries(),n},e.prototype.__actionHookForDevTools=function(t){this.devToolsHookCb=t},e.prototype.__requestRaw=function(t){return _o(this.link,t)},e.prototype.resetStore=function(){var t=this;return Promise.resolve().then(function(){return t.queryManager.clearStore({discardWatches:!1})}).then(function(){return Promise.all(t.resetStoreCallbacks.map(function(n){return n()}))}).then(function(){return t.reFetchObservableQueries()})},e.prototype.clearStore=function(){var t=this;return Promise.resolve().then(function(){return t.queryManager.clearStore({discardWatches:!0})}).then(function(){return Promise.all(t.clearStoreCallbacks.map(function(n){return n()}))})},e.prototype.onResetStore=function(t){var n=this;return this.resetStoreCallbacks.push(t),function(){n.resetStoreCallbacks=n.resetStoreCallbacks.filter(function(r){return r!==t})}},e.prototype.onClearStore=function(t){var n=this;return this.clearStoreCallbacks.push(t),function(){n.clearStoreCallbacks=n.clearStoreCallbacks.filter(function(r){return r!==t})}},e.prototype.reFetchObservableQueries=function(t){return this.queryManager.reFetchObservableQueries(t)},e.prototype.refetchQueries=function(t){var n=this.queryManager.refetchQueries(t),r=[],o=[];n.forEach(function(s,c){r.push(c),o.push(s)});var i=Promise.all(o);return i.queries=r,i.results=o,i.catch(function(s){globalThis.__DEV__!==!1&&C.debug(18,s)}),i},e.prototype.getObservableQueries=function(t){return t===void 0&&(t="active"),this.queryManager.getObservableQueries(t)},e.prototype.extract=function(t){return this.cache.extract(t)},e.prototype.restore=function(t){return this.cache.restore(t)},e.prototype.addResolvers=function(t){this.localState.addResolvers(t)},e.prototype.setResolvers=function(t){this.localState.setResolvers(t)},e.prototype.getResolvers=function(){return this.localState.getResolvers()},e.prototype.setLocalStateFragmentMatcher=function(t){this.localState.setFragmentMatcher(t)},e.prototype.setLink=function(t){this.link=this.queryManager.link=t},Object.defineProperty(e.prototype,"defaultContext",{get:function(){return this.queryManager.defaultContext},enumerable:!1,configurable:!0}),e}();globalThis.__DEV__!==!1&&(is.prototype.getMemoryInternals=Gv);var nl=new Map,sh=new Map,_b=!0,rl=!1;function xb(e){return e.replace(/[\s,]+/g," ").trim()}function WM(e){return xb(e.source.body.substring(e.start,e.end))}function GM(e){var t=new Set,n=[];return e.definitions.forEach(function(r){if(r.kind==="FragmentDefinition"){var o=r.name.value,i=WM(r.loc),s=sh.get(o);s&&!s.has(i)?_b&&console.warn("Warning: fragment with name "+o+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):s||sh.set(o,s=new Set),s.add(i),t.has(i)||(t.add(i),n.push(r))}else n.push(r)}),v(v({},e),{definitions:n})}function QM(e){var t=new Set(e.definitions);t.forEach(function(r){r.loc&&delete r.loc,Object.keys(r).forEach(function(o){var i=r[o];i&&typeof i=="object"&&t.add(i)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}function YM(e){var t=xb(e);if(!nl.has(t)){var n=Dc(e,{experimentalFragmentVariables:rl,allowLegacyFragmentVariables:rl});if(!n||n.kind!=="Document")throw new Error("Not a valid GraphQL document.");nl.set(t,QM(GM(n)))}return nl.get(t)}function Wn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];typeof e=="string"&&(e=[e]);var r=e[0];return t.forEach(function(o,i){o&&o.kind==="Document"?r+=o.loc.source.body:r+=o,r+=e[i+1]}),YM(r)}function kb(){nl.clear(),sh.clear()}function Nb(){_b=!1}function Ob(){rl=!0}function Ab(){rl=!1}var ss={gql:Wn,resetCaches:kb,disableFragmentWarnings:Nb,enableExperimentalFragmentVariables:Ob,disableExperimentalFragmentVariables:Ab};(function(e){e.gql=ss.gql,e.resetCaches=ss.resetCaches,e.disableFragmentWarnings=ss.disableFragmentWarnings,e.enableExperimentalFragmentVariables=ss.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=ss.disableExperimentalFragmentVariables})(Wn||(Wn={}));Wn.default=Wn;Ev(globalThis.__DEV__!==!1?"log":"silent");function Fb(e){return new z(t=>(e().then(n=>{t.closed||(t.next(n),t.complete())},n=>{t.closed||t.error(n)}),()=>t.unsubscribe()))}function KM(e,t){return t?e.pipe(Vo({loading:!0}),F(n=>ae(M({},n),{loading:!!n.loading}))):e.pipe(F(n=>ae(M({},n),{loading:!1})))}var ch=class{zone;constructor(t){this.zone=t}now=Date.now?Date.now:()=>+new Date;schedule(t,n=0,r){return this.zone.run(()=>kl.schedule(t,n,r))}};function lh(e){return e[Yt]=()=>e,e}function uh(e,t){return e.pipe(Zn(new ch(t)))}function ZM(e){return function(n){return new z(function(o){let i=e.getCurrentResult(),{loading:s,errors:c,error:l,partial:u,data:d}=i,{partialRefetch:h,fetchPolicy:p}=e.options,f=c||l;return h&&u&&(!d||Object.keys(d).length===0)&&p!=="cache-only"&&!s&&!f&&o.next(ae(M({},i),{loading:!0,networkStatus:X.loading})),n.subscribe(o)})}}var dh=class{obsQuery;valueChanges;queryId;constructor(t,n,r){this.obsQuery=t;let o=uh(fe(lh(this.obsQuery)),n);this.valueChanges=r.useInitialLoading?o.pipe(ZM(this.obsQuery)):o,this.queryId=this.obsQuery.queryId}get options(){return this.obsQuery.options}get variables(){return this.obsQuery.variables}result(){return this.obsQuery.result()}getCurrentResult(){return this.obsQuery.getCurrentResult()}getLastResult(){return this.obsQuery.getLastResult()}getLastError(){return this.obsQuery.getLastError()}resetLastResults(){return this.obsQuery.resetLastResults()}refetch(t){return this.obsQuery.refetch(t)}fetchMore(t){return this.obsQuery.fetchMore(t)}subscribeToMore(t){return this.obsQuery.subscribeToMore(t)}updateQuery(t){return this.obsQuery.updateQuery(t)}stopPolling(){return this.obsQuery.stopPolling()}startPolling(t){return this.obsQuery.startPolling(t)}setOptions(t){return this.obsQuery.setOptions(t)}setVariables(t){return this.obsQuery.setVariables(t)}},Lb=new N("APOLLO_FLAGS"),Hb=new N("APOLLO_OPTIONS"),JM=new N("APOLLO_NAMED_OPTIONS"),ol=class{ngZone;flags;_client;useInitialLoading;useMutationLoading;constructor(t,n,r){this.ngZone=t,this.flags=n,this._client=r,this.useInitialLoading=n?.useInitialLoading??!1,this.useMutationLoading=n?.useMutationLoading??!1}watchQuery(t){return new dh(this.ensureClient().watchQuery(M({},t)),this.ngZone,M({useInitialLoading:this.useInitialLoading},t))}query(t){return Fb(()=>this.ensureClient().query(M({},t)))}mutate(t){return KM(Fb(()=>this.ensureClient().mutate(M({},t))),t.useMutationLoading??this.useMutationLoading)}watchFragment(t,n){let r=fe(lh(this.ensureClient().watchFragment(M({},t))));return n&&n.useZone!==!0?r:uh(r,this.ngZone)}subscribe(t,n){let r=fe(lh(this.ensureClient().subscribe(M({},t))));return n&&n.useZone!==!0?r:uh(r,this.ngZone)}get client(){return this.ensureClient()}set client(t){if(this._client)throw new Error("Client has been already defined");this._client=t}ensureClient(){return this.checkInstance(),this._client}checkInstance(){if(this._client)return!0;throw new Error("Client has not been defined yet")}},fh=(()=>{class e extends ol{map=new Map;constructor(n,r,o,i){if(super(n,i),r&&this.createDefault(r),o&&typeof o=="object"){for(let s in o)if(o.hasOwnProperty(s)){let c=o[s];this.create(c,s)}}}create(n,r){ah(r)?this.createNamed(r,n):this.createDefault(n)}default(){return this}use(n){return ah(n)?this.map.get(n):this.default()}createDefault(n){if(this._client)throw new Error("Apollo has been already created.");this.client=this.ngZone.runOutsideAngular(()=>new is(n))}createNamed(n,r){if(this.map.has(n))throw new Error(`Client ${n} has been already created`);this.map.set(n,new ol(this.ngZone,this.flags,this.ngZone.runOutsideAngular(()=>new is(r))))}removeClient(n){ah(n)?this.map.delete(n):this._client=void 0}static \u0275fac=function(r){return new(r||e)(A(Ce),A(Hb,8),A(JM,8),A(Lb,8))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();function ah(e){return!!e&&e!=="default"}function Ub(e,t={}){return[fh,{provide:Hb,useFactory:e},{provide:Lb,useValue:t}]}var XM=Wn,hh=XM;var jb=hh`
	query GetPokemon($pokemon: PokemonEnum!) {
		getPokemon(pokemon: $pokemon) {
			abilities {
				first {
					name
					key
					desc
					shortDesc
				}
				second {
					name
					key
					desc
					shortDesc
				}
				hidden {
					name
					key
					desc
					shortDesc
				}
			}
			key
			num
			types {
				name
			}
			baseStats {
				hp
				attack
				defense
				specialattack
				specialdefense
				speed
			}
			learnsets {
				generation3 {
					dreamworldMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					eggMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					eventMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					tmMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					tutorMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					virtualTransferMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					levelUpMoves {
						generation
						level
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
				}
				generation4 {
					dreamworldMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					eggMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					eventMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					tmMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					tutorMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					virtualTransferMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					levelUpMoves {
						generation
						level
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
				}
				generation5 {
					dreamworldMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					eggMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					eventMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					tmMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					tutorMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					virtualTransferMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					levelUpMoves {
						generation
						level
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
				}
				generation6 {
					dreamworldMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					eggMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					eventMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					tmMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					tutorMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					virtualTransferMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					levelUpMoves {
						generation
						level
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
				}
				generation7 {
					dreamworldMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					eggMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					eventMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					tmMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					tutorMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					virtualTransferMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					levelUpMoves {
						generation
						level
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
				}
				generation8 {
					dreamworldMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					eggMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					eventMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					tmMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					tutorMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					virtualTransferMoves {
						generation
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
					levelUpMoves {
						generation
						level
						move {
							key
							accuracy
							basePower
							category
							desc
							name
							pp
							priority
							shortDesc
							target
							type
						}
					}
				}
			}
			evolutions {
				key
				learnsets {
					generation3 {
						dreamworldMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eggMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eventMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tmMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tutorMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						virtualTransferMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						levelUpMoves {
							generation
							level
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
					}
					generation4 {
						dreamworldMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eggMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eventMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tmMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tutorMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						virtualTransferMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						levelUpMoves {
							generation
							level
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
					}
					generation5 {
						dreamworldMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eggMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eventMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tmMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tutorMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						virtualTransferMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						levelUpMoves {
							generation
							level
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
					}
					generation6 {
						dreamworldMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eggMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eventMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tmMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tutorMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						virtualTransferMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						levelUpMoves {
							generation
							level
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
					}
					generation7 {
						dreamworldMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eggMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eventMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tmMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tutorMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						virtualTransferMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						levelUpMoves {
							generation
							level
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
					}
					generation8 {
						dreamworldMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eggMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eventMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tmMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tutorMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						virtualTransferMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						levelUpMoves {
							generation
							level
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
					}
				}
				evolutions {
					key
					learnsets {
						generation3 {
							dreamworldMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eggMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eventMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tmMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tutorMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							virtualTransferMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							levelUpMoves {
								generation
								level
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
						}
						generation4 {
							dreamworldMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eggMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eventMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tmMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tutorMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							virtualTransferMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							levelUpMoves {
								generation
								level
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
						}
						generation5 {
							dreamworldMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eggMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eventMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tmMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tutorMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							virtualTransferMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							levelUpMoves {
								generation
								level
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
						}
						generation6 {
							dreamworldMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eggMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eventMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tmMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tutorMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							virtualTransferMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							levelUpMoves {
								generation
								level
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
						}
						generation7 {
							dreamworldMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eggMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eventMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tmMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tutorMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							virtualTransferMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							levelUpMoves {
								generation
								level
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
						}
						generation8 {
							dreamworldMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eggMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eventMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tmMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tutorMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							virtualTransferMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							levelUpMoves {
								generation
								level
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
						}
					}
				}
			}
			preevolutions {
				key
				learnsets {
					generation3 {
						dreamworldMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eggMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eventMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tmMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tutorMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						virtualTransferMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						levelUpMoves {
							generation
							level
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
					}
					generation4 {
						dreamworldMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eggMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eventMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tmMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tutorMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						virtualTransferMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						levelUpMoves {
							generation
							level
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
					}
					generation5 {
						dreamworldMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eggMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eventMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tmMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tutorMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						virtualTransferMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						levelUpMoves {
							generation
							level
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
					}
					generation6 {
						dreamworldMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eggMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eventMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tmMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tutorMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						virtualTransferMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						levelUpMoves {
							generation
							level
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
					}
					generation7 {
						dreamworldMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eggMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eventMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tmMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tutorMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						virtualTransferMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						levelUpMoves {
							generation
							level
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
					}
					generation8 {
						dreamworldMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eggMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						eventMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tmMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						tutorMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						virtualTransferMoves {
							generation
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
						levelUpMoves {
							generation
							level
							move {
								key
								accuracy
								basePower
								category
								desc
								name
								pp
								priority
								shortDesc
								target
								type
							}
						}
					}
				}
				preevolutions {
					key
					learnsets {
						generation3 {
							dreamworldMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eggMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eventMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tmMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tutorMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							virtualTransferMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							levelUpMoves {
								generation
								level
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
						}
						generation4 {
							dreamworldMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eggMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eventMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tmMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tutorMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							virtualTransferMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							levelUpMoves {
								generation
								level
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
						}
						generation5 {
							dreamworldMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eggMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eventMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tmMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tutorMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							virtualTransferMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							levelUpMoves {
								generation
								level
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
						}
						generation6 {
							dreamworldMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eggMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eventMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tmMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tutorMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							virtualTransferMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							levelUpMoves {
								generation
								level
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
						}
						generation7 {
							dreamworldMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eggMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eventMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tmMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tutorMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							virtualTransferMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							levelUpMoves {
								generation
								level
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
						}
						generation8 {
							dreamworldMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eggMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							eventMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tmMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							tutorMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							virtualTransferMoves {
								generation
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
							levelUpMoves {
								generation
								level
								move {
									key
									accuracy
									basePower
									category
									desc
									name
									pp
									priority
									shortDesc
									target
									type
								}
							}
						}
					}
				}
			}
		}
	}
`,Bb=hh`
	query getMove($move: MovesEnum!) {
		getMove(move: $move) {
			key
			name
			shortDesc
			type
			basePower
			pp
			category
			accuracy
			priority
			target
			desc
		}
	}
`;var Dt=(()=>{class e{constructor(n){this.apollo=n}getAbilities(){return this.pokemon.pipe(F(n=>n.getPokemon.abilities))}getDexNumber(){return this.pokemon.pipe(F(n=>n.getPokemon.num))}getMove(n){return this.apollo.query({query:Bb,variables:{move:n}}).pipe(F(r=>r.data))}getMoves(){return this.pokemon.pipe(F(n=>{let r=[],o=["dreamworldMoves","eggMoves","eventMoves","tmMoves","tutorMoves","virtualTransferMoves","levelUpMoves"],i=c=>{c&&Object.keys(c).forEach(l=>{let u=c[l];u&&o.forEach(d=>{let h=u[d];Array.isArray(h)&&h.forEach(p=>{r.push(p.move)})})})},s=c=>{c&&c.forEach(l=>{i(l.learnsets),s(l.preevolutions),s(l.evolutions)})};return i(n.getPokemon.learnsets),s(n.getPokemon.preevolutions??null),s(n.getPokemon.evolutions??null),r}))}getPokemon(n){return this.pokemon=this.apollo.query({query:jb,variables:{pokemon:n}}).pipe(F(r=>r.data)),this.pokemon}getStats(){return this.pokemon.pipe(F(n=>n.getPokemon.baseStats))}getTypes(){return this.pokemon.pipe(F(n=>n.getPokemon.types))}static{this.\u0275fac=function(r){return new(r||e)(A(fh))}}static{this.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Vb=(()=>{class e{constructor(n,r){this.stateService=n,this.graphqlService=r,this.pokemonList=document.getElementById("pokemonList"),this.raidTier="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n,this.populatePokemonList()}),this.stateService.regionList.subscribe(n=>{this.region=n,this.populatePokemonList()})}ngAfterViewInit(){this.pokemonList=document.getElementById("pokemonList")}populatePokemonList(){this.pokemonList&&(this.resetPokemonList(),(this.raidTier=="5"?$t:zt).sort((r,o)=>r.name.localeCompare(o.name)).filter(r=>r.region==m[this.region]).forEach(r=>{let o=document.createElement("option");o.value=r.name,o.text=r.name,r.formName&&(o.id=r.formName),this.pokemonList.add(o)}))}resetPokemonList(){this.pokemonList.innerHTML="",this.pokemonList.innerHTML='<option value="">-- Pokemon --</option>'}valueChanged(){let n=document.getElementById("pokemonList"),r=n.selectedIndex,o=n.options[r];if(o){let i=o.id;cn(),o.value&&(this.graphqlService.getPokemon(i||o.value.toLowerCase()),this.stateService.changePokemon(o.value),document.getElementById("pokemonContent").style.display="none",this.stateService.changeLoading(!0))}}static{this.\u0275fac=function(r){return new(r||e)(Q(le),Q(Dt))}}static{this.\u0275cmp=te({type:e,selectors:[["app-pokemon-list"]],decls:3,vars:0,consts:[["id","pokemonList",3,"change"],["value",""]],template:function(r,o){r&1&&(oe(0,"select",0),Mt("change",function(){return o.valueChanged()}),oe(1,"option",1),we(2,"-- Pokemon --"),me()())},encapsulation:2})}}return e})();var xe=function(e){return e.Bug="Bug",e.Dark="Dark",e.Dragon="Dragon",e.Electric="Electric",e.Fairy="Fairy",e.Fighting="Fighting",e.Fire="Fire",e.Flying="Flying",e.Ghost="Ghost",e.Grass="Grass",e.Ground="Ground",e.Ice="Ice",e.Normal="Normal",e.Poison="Poison",e.Psychic="Psychic",e.Rock="Rock",e.Steel="Steel",e.Water="Water",e}(xe||{}),as=[{name:xe.Bug,matchup:{offense:{double:["dark","grass","psychic"],immune:[],normal:["bug","dragon","electric","ground","ice","normal","rock","water"],resisted:["fairy","fighting","fire","flying","ghost","poison","steel"]},defense:{double:["fire","flying","rock"],immune:[],normal:["bug","dark","dragon","electric","fairy","ghost","ice","normal","poison","psychic","steel","water"],resisted:["fighting","grass","ground"]}}},{name:xe.Dark,matchup:{offense:{double:["ghost","psychic"],immune:[],normal:["bug","dragon","electric","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["dark","fairy","fighting"]},defense:{double:["bug","fairy","fighting"],immune:["psychic"],normal:["dragon","electric","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["dark","ghost"]}}},{name:xe.Dragon,matchup:{offense:{double:["dragon"],immune:["fairy"],normal:["bug","dark","electric","fighting","fire","flying","ghost","grass","ground","ice","normal","poison","psychic","rock","water"],resisted:["steel"]},defense:{double:["dragon","fairy","ice"],immune:[],normal:["bug","dark","fighting","flying","ghost","ground","normal","poison","psychic","rock","steel"],resisted:["electric","fire","grass","water"]}}},{name:xe.Electric,matchup:{offense:{double:["flying","water"],immune:["ground"],normal:["bug","dark","fairy","fighting","fire","ghost","ice","normal","poison","psychic","rock","steel"],resisted:["dragon","electric","grass"]},defense:{double:["ground"],immune:[],normal:["bug","dark","dragon","fairy","fighting","fire","ghost","grass","ice","normal","poison","psychic","rock","water"],resisted:["electric","flying","steel"]}}},{name:xe.Fairy,matchup:{offense:{double:["dark","dragon","fighting"],immune:[],normal:["bug","electric","fairy","flying","ghost","grass","ground","ice","normal","psychic","rock","water"],resisted:["fire","poison","steel"]},defense:{double:["poison","steel"],immune:["dragon"],normal:["electric","fairy","fire","flying","ghost","grass","ground","ice","normal","psychic","rock","water"],resisted:["bug","dark","fighting"]}}},{name:xe.Fighting,matchup:{offense:{double:["dark","ice","normal","rock","steel"],immune:["ghost"],normal:["dragon","electric","fighting","fire","grass","ground","water"],resisted:["bug","fairy","flying","poison","psychic"]},defense:{double:["fairy","flying","psychic"],immune:[],normal:["dragon","electric","fighting","fire","ghost","grass","ground","ice","normal","poison","steel","water"],resisted:["bug","dark","rock"]}}},{name:xe.Fire,matchup:{offense:{double:["bug","grass","ice","steel"],immune:[],normal:["dark","electric","fairy","fighting","flying","ghost","ground","normal","poison","psychic"],resisted:["dragon","fire","rock","water"]},defense:{double:["ground","rock","water"],immune:[],normal:["dark","dragon","electric","fighting","flying","ghost","normal","poison","psychic"],resisted:["bug","fairy","fire","grass","ice","steel"]}}},{name:xe.Flying,matchup:{offense:{double:["bug","fighting","grass"],immune:[],normal:["dark","dragon","fairy","fire","flying","ghost","ground","ice","normal","poison","psychic","water"],resisted:["electric","rock","steel"]},defense:{double:["electric","ice","rock"],immune:["ground"],normal:["dark","dragon","fairy","fire","flying","ghost","normal","poison","psychic","steel","water"],resisted:["bug","fighting","grass"]}}},{name:xe.Ghost,matchup:{offense:{double:["ghost","psychic"],immune:["normal"],normal:["bug","dragon","electric","fairy","fighting","fire","flying","grass","ground","ice","poison","rock","steel","water"],resisted:["dark"]},defense:{double:["dark","ghost"],immune:["fighting","normal"],normal:["dragon","electric","fairy","fire","flying","grass","ground","ice","psychic","rock","steel","water"],resisted:["bug","poison"]}}},{name:xe.Grass,matchup:{offense:{double:["ground","rock","water"],immune:[],normal:["dark","electric","fairy","fighting","ghost","ice","normal","psychic"],resisted:["bug","dragon","fire","flying","grass","poison","steel"]},defense:{double:["bug","fire","flying","ice","poison"],immune:[],normal:["dark","dragon","fairy","fighting","ghost","normal","psychic","rock","steel"],resisted:["electric","grass","ground","water"]}}},{name:xe.Ground,matchup:{offense:{double:["electric","fire","poison","rock","steel"],immune:["flying"],normal:["dark","dragon","fairy","fighting","ghost","ground","ice","normal","psychic","water"],resisted:["bug","grass"]},defense:{double:["grass","ice","water"],immune:["electric"],normal:["bug","dark","dragon","fairy","fighting","fire","flying","ghost","ground","normal","psychic","steel"],resisted:["poison","rock"]}}},{name:xe.Ice,matchup:{offense:{double:["dragon","flying","grass","ground"],immune:[],normal:["bug","dark","electric","fairy","fighting","ghost","normal","poison","psychic","rock"],resisted:["fire","ice","steel","water"]},defense:{double:["fighting","fire","rock","steel"],immune:[],normal:["bug","dark","dragon","electric","fairy","flying","ghost","grass","ground","normal","poison","psychic","water"],resisted:["ice"]}}},{name:xe.Normal,matchup:{offense:{double:[],immune:["ghost"],normal:["bug","dark","dragon","electric","fairy","fighting","fire","flying","grass","ground","ice","normal","poison","psychic","water"],resisted:["rock","steel"]},defense:{double:["fighting"],immune:["ghost"],normal:["bug","dark","dragon","electric","fairy","fire","flying","grass","ground","ice","normal","poison","psychic","rock","steel","water"],resisted:[]}}},{name:xe.Poison,matchup:{offense:{double:["fairy","grass"],immune:["steel"],normal:["bug","dark","dragon","electric","fighting","fire","flying","ice","normal","psychic","water"],resisted:["ghost","ground","poison","rock"]},defense:{double:["ground","psychic"],immune:[],normal:["dark","dragon","electric","fire","flying","ghost","ice","normal","rock","steel","water"],resisted:["bug","fairy","fighting","grass","poison"]}}},{name:xe.Psychic,matchup:{offense:{double:["fighting","poison"],immune:["dark"],normal:["bug","dragon","electric","fairy","fire","flying","ghost","grass","ground","ice","normal","rock","water"],resisted:["psychic","steel"]},defense:{double:["bug","dark","ghost"],immune:[],normal:["dragon","electric","fairy","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["fighting","psychic"]}}},{name:xe.Rock,matchup:{offense:{double:["bug","fire","flying","ice"],immune:[],normal:["dark","dragon","electric","fairy","ghost","grass","normal","poison","psychic","rock","water"],resisted:["fighting","ground","steel"]},defense:{double:["fighting","grass","ground","steel","water"],immune:[],normal:["bug","dark","dragon","electric","fairy","ghost","ice","psychic","rock"],resisted:["fire","flying","normal","poison"]}}},{name:xe.Steel,matchup:{offense:{double:["fairy","ice","rock"],immune:[],normal:["bug","dark","dragon","fighting","flying","ghost","grass","ground","normal","poison","psychic"],resisted:["electric","fire","steel","water"]},defense:{double:["fighting","fire","ground"],immune:["poison"],normal:["dark","electric","ghost","water"],resisted:["bug","dragon","fairy","flying","grass","ice","normal","psychic","rock","steel"]}}},{name:xe.Water,matchup:{offense:{double:["fire","ground","rock"],immune:[],normal:["bug","dark","electric","fairy","fighting","flying","ghost","ice","normal","poison","psychic","steel"],resisted:["dragon","grass","water"]},defense:{double:["electric","grass"],immune:[],normal:["bug","dark","dragon","fairy","fighting","flying","ghost","ground","normal","poison","psychic","rock"],resisted:["fire","ice","steel","water"]}}}];var $b=(()=>{class e{constructor(n){this.stateService=n}ngOnInit(){as.forEach(n=>{let r=document.createElement("option");r.value=n.name,r.text=n.name,document.getElementById("teraList").add(r)})}valueChanged(){let n=document.getElementById("teraList"),r=n.selectedIndex,o=n.options[r];this.stateService.changeTeraType(o.value)}static{this.\u0275fac=function(r){return new(r||e)(Q(le))}}static{this.\u0275cmp=te({type:e,selectors:[["app-tera-type"]],decls:3,vars:0,consts:[["id","teraList",3,"change"],["value",""]],template:function(r,o){r&1&&(oe(0,"select",0),Mt("change",function(){return o.valueChanged()}),oe(1,"option",1),we(2,"-- Tera Type --"),me()())},encapsulation:2})}}return e})();var zb=(()=>{class e{constructor(n){this.stateService=n,this.raidTier="",this.pokemonList="",this.teraType="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n}),this.stateService.teraType.subscribe(n=>{this.teraType=n}),this.stateService.regionList.subscribe(n=>{this.region=n})}shareRaid(){let n=location.origin+"/tera-raid-info/";n+=this.raidTier,n+="/"+this.region,n+="/"+this.pokemonList,n+="/"+this.teraType,navigator.clipboard.writeText(n);let r=document.getElementById("shareText");r.innerText="Copied to Clipboard"}shareRaidMouseOut(){let n=document.getElementById("shareText");n.innerText="Share Raid"}static{this.\u0275fac=function(r){return new(r||e)(Q(le))}}static{this.\u0275cmp=te({type:e,selectors:[["app-share-raid"]],decls:3,vars:0,consts:[["id","shareRaid",1,"share",3,"click","mouseout"],["id","shareText",1,"shareText"]],template:function(r,o){r&1&&(oe(0,"div",0),Mt("click",function(){return o.shareRaid()})("mouseout",function(){return o.shareRaidMouseOut()}),oe(1,"div",1),we(2,"Share Raid"),me()())},encapsulation:2})}}return e})();var qb=(()=>{class e{constructor(n,r){this.grapghqlService=n,this.stateService=r,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setImages()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setImages(){this.pokemonList&&this.grapghqlService.getDexNumber().subscribe(n=>{let r=this.raidTier=="5"?$t:zt,o="";r.filter(i=>i.name==this.pokemonList&&i.region==m[this.region]).forEach(i=>{i.imageAlt&&(o=i.imageAlt)}),ye(document.getElementById("pokemonImageNormal"),`<img alt="Normal" title="Normal" src="./assets/pokemon/${zd(n,3,"0")}${o}.png" />`),ye(document.getElementById("pokemonImageShiny"),`<img alt="Shiny" title="Shiny" src="./assets/pokemon/shiny/${zd(n,3,"0")}${o}.png" />`)})}static{this.\u0275fac=function(r){return new(r||e)(Q(Dt),Q(le))}}static{this.\u0275cmp=te({type:e,selectors:[["app-pokemon-images"]],decls:2,vars:0,consts:[["id","pokemonImageNormal",1,"imgNormal"],["id","pokemonImageShiny",1,"imgShiny"]],template:function(r,o){r&1&&ge(0,"div",0)(1,"div",1)},encapsulation:2})}}return e})();var Wb=(()=>{class e{constructor(n,r){this.graphqlService=n,this.stateService=r,this.pokemonList=""}ngOnInit(){this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setTypes()})}setTypes(){this.pokemonList&&this.graphqlService.getTypes().subscribe(n=>{n.forEach(r=>{ye(document.getElementById("pokemonTypes"),this.createTypeDisplay(r.name))})})}createTypeDisplay(n){return`<div class="typeText ${n.toLowerCase()}">${n}</div>`}static{this.\u0275fac=function(r){return new(r||e)(Q(Dt),Q(le))}}static{this.\u0275cmp=te({type:e,selectors:[["app-pokemon-types"]],decls:1,vars:0,consts:[["id","pokemonTypes"]],template:function(r,o){r&1&&ge(0,"div",0)},encapsulation:2})}}return e})();var Gb=(()=>{class e{constructor(n,r){this.graphqlService=n,this.stateService=r,this.raidTier="",this.pokemonList=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setAbilities()})}setAbilities(){if(this.pokemonList){let n=document.getElementById("pokemonAbility");this.graphqlService.getAbilities().subscribe(r=>{ye(n,"<h3>Ability:</h3>"),ye(n,this.createAbilityDiv(r.first)),r.second&&ye(n,this.createAbilityDiv(r.second)),this.canShowHidden()&&r.hidden&&ye(n,this.createAbilityDiv(r.hidden,!0))})}}createAbilityDiv(n,r){return`<div class="typeMatchupText" data-info="${n.shortDesc}">${n.name}${r?" (H)":""}</div>`}canShowHidden(){return this.raidTier=="6"||this.raidTier=="5"&&this.pokemonList=="Ditto"}static{this.\u0275fac=function(r){return new(r||e)(Q(Dt),Q(le))}}static{this.\u0275cmp=te({type:e,selectors:[["app-pokemon-ability"]],decls:1,vars:0,consts:[["id","pokemonAbility"]],template:function(r,o){r&1&&ge(0,"div",0)},encapsulation:2})}}return e})();var Qb=(()=>{class e{constructor(n,r){this.graphqlService=n,this.stateService=r}ngOnInit(){this.stateService.pokemonList.subscribe(n=>{n&&this.setStats()})}setStats(){this.graphqlService.getStats().subscribe(n=>{ye(document.getElementById("pokemonStatsWrapper"),this.createStatsDisplay(n))})}createStatsDisplay(n){let r='<div id="pokemonStats"><h3>Base Stats</h3>';return r+=`<div class="stat hp"><p>HP</p><p data-label="HP">${n.hp}</p></div>`,r+=`<div class="stat at"><p>Atk</p><p data-label="Atk">${n.attack}</p></div>`,r+=`<div class="stat df"><p>Def</p><p data-label="Def">${n.defense}</p></div>`,r+=`<div class="stat sa"><p>Sp.Atk</p><p data-label="Sp. Atk">${n.specialattack}</p></div>`,r+=`<div class="stat sd"><p>Sp.Def</p><p data-label="Sp. Def">${n.specialdefense}</p></div>`,r+=`<div class="stat sp"><p>Spd</p><p data-label="Spd">${n.speed}</p></div></div>`,r}static{this.\u0275fac=function(r){return new(r||e)(Q(Dt),Q(le))}}static{this.\u0275cmp=te({type:e,selectors:[["app-pokemon-stats"]],decls:1,vars:0,consts:[["id","pokemonStatsWrapper"]],template:function(r,o){r&1&&ge(0,"div",0)},encapsulation:2})}}return e})();var il=(()=>{class e{advantages(n,r=!1){let o=[];return as.filter(i=>i.name.includes(n)).forEach(i=>{let s=i.matchup.offense;s.double.forEach(c=>{o.push({name:c,multiplier:2})}),r&&(s.resisted.forEach(c=>{o.push({name:c,multiplier:.5})}),s.immune.forEach(c=>{o.push({name:c,multiplier:0})}))}),o}weaknesses(n){let r=[];return as.filter(o=>o.name.includes(n)).forEach(o=>{let i=o.matchup.defense;i.double.forEach(s=>{r.push({name:s,multiplier:2})}),i.resisted.forEach(s=>{r.push({name:s,multiplier:.5})}),i.immune.forEach(s=>{r.push({name:s,multiplier:0})})}),r}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Kb=(()=>{class e{constructor(n,r,o){this.stateService=n,this.typeCalcService=r,this.graphqlService=o,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setMoves()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setMoves(){let n=document.getElementById("pokemonMoves"),r=this.raidTier=="5"?$t:zt,o=[],i=[],s=[],c=[];this.pokemonList&&(r.filter(l=>l.name==this.pokemonList&&l.region==m[this.region]).forEach(l=>{l.info.specialMoves&&l.info.specialMoves.sort((u,d)=>u.localeCompare(d)).forEach(u=>{i.push(u),this.graphqlService.getMove(u.toLowerCase().replaceAll(" ","").replaceAll("-","")).subscribe(d=>{o.push(d.getMove)})}),l.info.moves.forEach(u=>{i.push(u)})}),this.graphqlService.getMoves().subscribe(l=>{ye(n,"<h3>Moves:</h3>"),i.forEach(p=>{o.push(...l.filter(f=>f.name==p))}),[...new Map(o.map(p=>[p.key,p])).values()].sort((p,f)=>p.name.localeCompare(f.name)).sort((p,f)=>p.category!="Status"&&f.category=="Status"?-1:(f.category!="Status"&&p.category=="Status",1)).forEach(p=>{let f=this.createMoveDiv(p);ye(document.getElementById("pokemonMoves"),f),s.push(f),p.category!="Status"&&c.push(p.type)}),this.stateService.changeMoveList(s.join("")),c=[...new Set(c)];let d=[];c.forEach(p=>{let f=this.typeCalcService.advantages(p);d=d.concat(f)});let h=[];d=[...new Map(d.map(p=>[p.name,p])).values()],d.sort((p,f)=>p.name.localeCompare(f.name)).forEach(p=>{h.push(_i(p))}),h.length&&ye(document.getElementById("pokemonTypeAdvantages"),"<h3>Type Advantages:</h3>"+h.join(""))}))}createMoveDiv(n){let r=`<div class="typeMatchupText ${n.type.toLowerCase()}">${n.name}`;if(r+='<div class="moveStats">',r+=`<div class="type">${n.category.toString()}</div>`,r+=`<div class="bp">Pwr: ${n.basePower=="0"?"--":n.basePower}</div>`,r+=`<div class="pp">PP: ${n.pp}</div>`,r+=`<div class="acc">Acc: ${n.accuracy}</div>`,r+=`<div class="desc">${n.desc=="No additional effect."?n.shortDesc:n.desc}</div>`,n.category!="Status"){let o=this.typeCalcService.advantages(n.type.toString()),i=[];o.forEach(s=>{s.multiplier==2&&i.push(`${uo(s.name)}`)}),i.length&&(r+=`<div class="adv">Advantages: ${i.join(", ")}</div>`)}return r+="</div></div>",r}static{this.\u0275fac=function(r){return new(r||e)(Q(le),Q(il),Q(Dt))}}static{this.\u0275cmp=te({type:e,selectors:[["app-pokemon-moves"]],decls:1,vars:0,consts:[["id","pokemonMoves",1,"pokemonMoves"]],template:function(r,o){r&1&&ge(0,"div",0)},encapsulation:2})}}return e})();var Zb=(()=>{class e{constructor(n){this.stateService=n,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setActions()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setActions(){this.pokemonList&&(ye(document.getElementById("pokemonActions"),"<h3>Actions:</h3>"),(this.raidTier=="5"?$t:zt).filter(r=>r.name==this.pokemonList&&r.region==m[this.region]).forEach(r=>{r.info.actions?.sort((o,i)=>i.threshold-o.threshold).forEach(o=>{ye(document.getElementById("pokemonActions"),this.createActionDiv(o))})}))}createActionDiv(n){return`<div class="actions ${n.type.toLowerCase()}-${n.threshold.toString()}" data-info="${n.threshold.toString()}% ${n.type.toString()} Remaining">${n.action}</div>`}static{this.\u0275fac=function(r){return new(r||e)(Q(le))}}static{this.\u0275cmp=te({type:e,selectors:[["app-pokemon-actions"]],decls:1,vars:0,consts:[[1,"pokemonActions"]],template:function(r,o){r&1&&ge(0,"div",0)},encapsulation:2})}}return e})();var Jb=(()=>{class e{constructor(n){this.stateService=n,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setHerbs()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setHerbs(){this.pokemonList&&(ye(document.getElementById("pokemonHerbs"),"<h3>Herbs Dropped:</h3>"),(this.raidTier=="5"?$t:zt).filter(r=>r.name==this.pokemonList&&r.region==m[this.region]).forEach(r=>{r.info.herbs.sort((o,i)=>o.name.localeCompare(i.name)).forEach(o=>{ye(document.getElementById("pokemonHerbs"),this.createHerbDiv(o))})}))}createHerbDiv(n){return`<div class="herbPill ${n.name.toLowerCase()}">${n.name} - ${n.chance}%</div>`}static{this.\u0275fac=function(r){return new(r||e)(Q(le))}}static{this.\u0275cmp=te({type:e,selectors:[["app-pokemon-herbs"]],decls:1,vars:0,consts:[[1,"pokemonHerbs"]],template:function(r,o){r&1&&ge(0,"div",0)},encapsulation:2})}}return e})();var Xb=(()=>{class e{constructor(n,r){this.stateService=n,this.typeCalcService=r,this.raidTier="",this.pokemonList="",this.teraType="",this.moveList=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.handleChange()}),this.stateService.teraType.subscribe(n=>{this.teraType=n,this.handleChange()}),this.stateService.moveList.subscribe(n=>{this.moveList=n,this.handleChange()})}handleChange(){this.pokemonList&&(cn("pokemonTeraAdvantages"),cn("pokemonTeraWeaknesses"),this.pokemonList&&(this.raidTier&&this.teraType&&this.setTypeWeaknesses(),this.moveList&&this.teraType&&this.moveList.includes("Tera Blast")&&this.setTeraTypeAdvantages()),this.teraType?(this.pokemonList&&this.raidTier&&this.setTypeWeaknesses(),this.moveList.includes("Tera Blast")&&this.setTeraTypeAdvantages()):(cn("pokemonTeraAdvantages"),cn("pokemonTeraWeaknesses")),this.stateService.changeLoading(!1))}setTeraTypeAdvantages(){cn("pokemonTeraAdvantages");let n=[];this.typeCalcService.advantages(this.teraType).forEach(o=>{n.push(_i(o))}),n.length&&ye(document.getElementById("pokemonTeraAdvantages"),"<h3>Tera Advantages:</h3>"+n.join(""))}setTypeWeaknesses(){cn("pokemonTeraWeaknesses");let n=[];this.typeCalcService.weaknesses(this.teraType).forEach(o=>{n.push(_i(o))}),n.length&&ye(document.getElementById("pokemonTeraWeaknesses"),"<h3>Tera Weaknesses:</h3>"+n.join(""))}static{this.\u0275fac=function(r){return new(r||e)(Q(le),Q(il))}}static{this.\u0275cmp=te({type:e,selectors:[["app-pokemon-type-matchups"]],decls:3,vars:0,consts:[["id","pokemonTypeAdvantages",1,"pokemonTypeMatchups"],["id","pokemonTeraWeaknesses",1,"pokemonTypeMatchups"],["id","pokemonTeraAdvantages",1,"pokemonTypeMatchups"]],template:function(r,o){r&1&&ge(0,"div",0)(1,"div",1)(2,"div",2)},encapsulation:2})}}return e})();var sl=(()=>{class e{constructor(n){this.stateService=n,this.title="Tera Raid Info"}ngOnInit(){this.stateService.changeRegionList("Paldea"),this.stateService.loading.subscribe(n=>{document.getElementById("dataLoading").hidden=!n,n==!1&&(document.getElementById("pokemonContent").style.display="")})}ngAfterViewInit(){document.getElementById("dataLoading").hidden=!0,this.deleteCache(),this.autoPopulateSelections()}autoPopulateSelections(n,r){let o=n||window.location.href,i=r||window.location.origin;if(o.replace(i,"").length>1&&o.replace(i+"/tera-raid-info/","")){let c=o.replace(i+"/tera-raid-info/","").split("/"),l=new Event("change");if(Number(c[0])){let u=document.getElementById("raidTier");u.value=c[0],u.dispatchEvent(l)}if(c[1]){let u=document.getElementById("regionList");for(let d=0;d<u.length;d++){let h=u[d];h.text==c[1]&&(u.selectedIndex=h.index)}u.dispatchEvent(l)}if(c[2]){let u=uo(c[2].replaceAll("%20"," ").toLowerCase()),d=u.match(/(\(.*\))/);if(d){let p=d[0].split(" ");for(let f=0;f<p.length;f++)u=u.replaceAll(p[f],uo(p[f]))}let h=document.getElementById("pokemonList");h.value=u,h.dispatchEvent(l)}if(c[3]){let u=document.getElementById("teraList");for(let d=0;d<u.length;d++){let h=u[d];h.text==c[3]&&(u.selectedIndex=h.index)}u.dispatchEvent(l)}}}deleteCache(){caches.delete("tera-raid-info-1")}static{this.\u0275fac=function(r){return new(r||e)(Q(le))}}static{this.\u0275cmp=te({type:e,selectors:[["app-root"]],decls:35,vars:0,consts:[[1,"header"],[1,"dropdowns"],["id","dataLoading","hidden","true"],["src","./assets/icons/pokeball.gif"],["id","pokemonContent","hidden","false",1,"content"],["id","pokemon"],[1,"pokemonImageWrapper"],["id","pokemonActions"],["id","pokemonHerbs"],[1,"pokemonTypesWrapper"],[1,"footer"],["href","https://github.com/kyle-undefined","target","_blank"],["href","https://www.serebii.net/","target","_blank"],["href","https://www.flaticon.com/authors/creatype","target","_blank"],["href","https://github.com/favware/graphql-pokemon","target","_blank"]],template:function(r,o){r&1&&(oe(0,"header",0)(1,"h1"),we(2,"Tera Raid Info"),me(),oe(3,"div",1),ge(4,"app-raid-tier")(5,"app-region")(6,"app-pokemon-list")(7,"app-tera-type")(8,"app-share-raid"),me()(),oe(9,"div",2),ge(10,"img",3),me(),oe(11,"div",4)(12,"div",5)(13,"div",6),ge(14,"app-pokemon-images"),me(),ge(15,"app-pokemon-types"),me(),ge(16,"app-pokemon-stats")(17,"app-pokemon-ability")(18,"app-pokemon-moves")(19,"app-pokemon-actions",7)(20,"app-pokemon-herbs",8)(21,"app-pokemon-type-matchups",9),me(),oe(22,"footer",10),we(23," By: "),oe(24,"a",11),we(25,"Kyle Undefined"),me(),we(26," - Design: CronikCRS - Images: "),oe(27,"a",12),we(28,"Serebii"),me(),we(29," & "),oe(30,"a",13),we(31,"Creatype"),me(),we(32," - Data: "),oe(33,"a",14),we(34,"GraphQL-Pokemon"),me()())},dependencies:[_a,Dv,wv,Vb,$b,zb,qb,Wb,Gb,Qb,Kb,Zb,Jb,Xb],encapsulation:2})}}return e})();var eD=[{path:"",component:sl},{path:"**",redirectTo:""}];var n_=(e,t,n)=>{let r=["POST","PUT","PATCH"].indexOf(e.method.toUpperCase())!==-1,o=u=>["variables","extensions"].indexOf(u.toLowerCase())!==-1,i=e.body.length,s=e.options&&e.options.useMultipart,c;if(s){if(i)return new z(u=>u.error(new Error("File upload is not available when combined with Batching")));if(!r)return new z(u=>u.error(new Error("File upload is not available when GET is used")));if(!n)return new z(u=>u.error(new Error(`To use File upload you need to pass "extractFiles" function from "extract-files" library to HttpLink's options`)));c=n(e.body),s=!!c.files.size}let l={};if(i){if(!r)return new z(u=>u.error(new Error("Batching is not available for GET requests")));l={body:e.body}}else{let u=s?c.clone:e.body;r?l={body:u}:l={params:Object.keys(e.body).reduce((h,p)=>{let f=e.body[p];return h[p]=o(p)?JSON.stringify(f):f,h},{})}}if(s&&r){let u=new FormData;u.append("operations",JSON.stringify(l.body));let d={},h=c.files,p=0;h.forEach(f=>{d[++p]=f}),u.append("map",JSON.stringify(d)),p=0,h.forEach((f,g)=>{u.append(++p+"",g,g.name)}),l.body=u}return t.request(e.method,e.url,M(M({observe:"response",responseType:"json",reportProgress:!1},l),e.options))},r_=(e,t)=>e&&t?t.keys().reduce((r,o)=>r.set(o,t.getAll(o)),e):t||e;function o_(...e){return e.find(t=>typeof t<"u")}function i_(e){let t=e.headers&&e.headers instanceof _t?e.headers:new _t(e.headers);if(e.clientAwareness){let{name:n,version:r}=e.clientAwareness;n&&!t.has("apollographql-client-name")&&(t=t.set("apollographql-client-name",n)),r&&!t.has("apollographql-client-version")&&(t=t.set("apollographql-client-version",r))}return t}var s_={batchInterval:10,batchMax:10,uri:"graphql",method:"POST",withCredentials:!1,includeQuery:!0,includeExtensions:!1,useMultipart:!1};function Lo(e,t,n){return o_(e[n],t[n],s_[n])}var ph=class extends bt{httpClient;options;requester;print=bo;constructor(t,n){super(),this.httpClient=t,this.options=n,this.options.operationPrinter&&(this.print=this.options.operationPrinter),this.requester=r=>new $(o=>{let i=r.getContext(),s=Lo(i,this.options,"method"),c=Lo(i,this.options,"includeQuery"),l=Lo(i,this.options,"includeExtensions"),u=Lo(i,this.options,"uri"),d=Lo(i,this.options,"withCredentials"),h=Lo(i,this.options,"useMultipart"),p=this.options.useGETForQueries===!0,f=r.query.definitions.some(S=>S.kind==="OperationDefinition"&&S.operation==="query");p&&f&&(s="GET");let g={method:s,url:typeof u=="function"?u(r):u,body:{operationName:r.operationName,variables:r.variables},options:{withCredentials:d,useMultipart:h,headers:this.options.headers}};l&&(g.body.extensions=r.extensions),c&&(g.body.query=this.print(r.query));let y=i_(i);g.options.headers=r_(g.options.headers,y);let b=n_(g,this.httpClient,this.options.extractFiles).subscribe({next:S=>{r.setContext({response:S}),o.next(S.body)},error:S=>o.error(S),complete:()=>o.complete()});return()=>{b.closed||b.unsubscribe()}})}request(t){return this.requester(t)}},tD=(()=>{class e{httpClient;constructor(n){this.httpClient=n}create(n){return new ph(this.httpClient,n)}static \u0275fac=function(r){return new(r||e)(A(Ba))};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();id(sl,{providers:[$d(eD),cd(),Ub(()=>{let e=P(tD);return{cache:new os,link:e.create({uri:"https://graphqlpokemon.favware.tech/v8"})}})]}).catch(e=>console.error(e));
