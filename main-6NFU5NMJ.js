var Vb=Object.defineProperty,$b=Object.defineProperties;var zb=Object.getOwnPropertyDescriptors;var sh=Object.getOwnPropertySymbols;var qb=Object.prototype.hasOwnProperty,Wb=Object.prototype.propertyIsEnumerable;var ah=(e,t,n)=>t in e?Vb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,R=(e,t)=>{for(var n in t||={})qb.call(t,n)&&ah(e,n,t[n]);if(sh)for(var n of sh(t))Wb.call(t,n)&&ah(e,n,t[n]);return e},ue=(e,t)=>$b(e,zb(t));function Gb(e,t){return Object.is(e,t)}var Ie=null,ns=!1,Yc=1,wr=Symbol("SIGNAL");function re(e){let t=Ie;return Ie=e,t}function lh(){return Ie}var rs={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function uh(e){if(ns)throw new Error("");if(Ie===null)return;Ie.consumerOnSignalRead(e);let t=Ie.nextProducerIndex++;if(is(Ie),t<Ie.producerNode.length&&Ie.producerNode[t]!==e&&ko(Ie)){let n=Ie.producerNode[t];os(n,Ie.producerIndexOfThis[t])}Ie.producerNode[t]!==e&&(Ie.producerNode[t]=e,Ie.producerIndexOfThis[t]=ko(Ie)?hh(e,Ie,t):0),Ie.producerLastReadVersion[t]=e.version}function Qb(){Yc++}function Kb(e){if(!(ko(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===Yc)){if(!e.producerMustRecompute(e)&&!Jc(e)){ch(e);return}e.producerRecomputeValue(e),ch(e)}}function dh(e){if(e.liveConsumerNode===void 0)return;let t=ns;ns=!0;try{for(let n of e.liveConsumerNode)n.dirty||Zb(n)}finally{ns=t}}function Yb(){return Ie?.consumerAllowSignalWrites!==!1}function Zb(e){e.dirty=!0,dh(e),e.consumerMarkedDirty?.(e)}function ch(e){e.dirty=!1,e.lastCleanEpoch=Yc}function Zc(e){return e&&(e.nextProducerIndex=0),re(e)}function fh(e,t){if(re(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(ko(e))for(let n=e.nextProducerIndex;n<e.producerNode.length;n++)os(e.producerNode[n],e.producerIndexOfThis[n]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function Jc(e){is(e);for(let t=0;t<e.producerNode.length;t++){let n=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==n.version||(Kb(n),r!==n.version))return!0}return!1}function Xc(e){if(is(e),ko(e))for(let t=0;t<e.producerNode.length;t++)os(e.producerNode[t],e.producerIndexOfThis[t]);e.producerNode.length=e.producerLastReadVersion.length=e.producerIndexOfThis.length=0,e.liveConsumerNode&&(e.liveConsumerNode.length=e.liveConsumerIndexOfThis.length=0)}function hh(e,t,n){if(ph(e),e.liveConsumerNode.length===0&&mh(e))for(let r=0;r<e.producerNode.length;r++)e.producerIndexOfThis[r]=hh(e.producerNode[r],e,r);return e.liveConsumerIndexOfThis.push(n),e.liveConsumerNode.push(t)-1}function os(e,t){if(ph(e),e.liveConsumerNode.length===1&&mh(e))for(let r=0;r<e.producerNode.length;r++)os(e.producerNode[r],e.producerIndexOfThis[r]);let n=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[n],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[n],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let r=e.liveConsumerIndexOfThis[t],o=e.liveConsumerNode[t];is(o),o.producerIndexOfThis[r]=t}}function ko(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function is(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function ph(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}function mh(e){return e.producerNode!==void 0}function Jb(){throw new Error}var gh=Jb;function Xb(e){gh(e)}function yh(e){gh=e}var eD=null;function vh(e,t){Yb()||Xb(e),e.equal(e.value,t)||(e.value=t,tD(e))}var Sh=ue(R({},rs),{equal:Gb,value:void 0,kind:"signal"});function tD(e){e.version++,Qb(),dh(e),eD?.()}var el;function No(){return el}function Kt(e){let t=el;return el=e,t}var tl=Symbol("NotFound");function U(e){return typeof e=="function"}function Tr(e){let n=e(r=>{Error.call(r),r.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var ss=Tr(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function zn(e,t){if(e){let n=e.indexOf(t);0<=n&&e.splice(n,1)}}var be=class e{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let i of n)i.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(U(r))try{r()}catch(i){t=i instanceof ss?i.errors:[i]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let i of o)try{bh(i)}catch(s){t=t??[],s instanceof ss?t=[...t,...s.errors]:t.push(s)}}if(t)throw new ss(t)}}add(t){var n;if(t&&t!==this)if(this.closed)bh(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}}_hasParent(t){let{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){let{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&zn(n,t)}remove(t){let{_finalizers:n}=this;n&&zn(n,t),t instanceof e&&t._removeParent(this)}};be.EMPTY=(()=>{let e=new be;return e.closed=!0,e})();var nl=be.EMPTY;function as(e){return e instanceof be||e&&"closed"in e&&U(e.remove)&&U(e.add)&&U(e.unsubscribe)}function bh(e){U(e)?e():e.unsubscribe()}var Tt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Er={setTimeout(e,t,...n){let{delegate:r}=Er;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){let{delegate:t}=Er;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function cs(e){Er.setTimeout(()=>{let{onUnhandledError:t}=Tt;if(t)t(e);else throw e})}function Oo(){}var Dh=rl("C",void 0,void 0);function wh(e){return rl("E",void 0,e)}function Th(e){return rl("N",e,void 0)}function rl(e,t,n){return{kind:e,value:t,error:n}}var qn=null;function Cr(e){if(Tt.useDeprecatedSynchronousErrorHandling){let t=!qn;if(t&&(qn={errorThrown:!1,error:null}),e(),t){let{errorThrown:n,error:r}=qn;if(qn=null,n)throw r}}else e()}function Eh(e){Tt.useDeprecatedSynchronousErrorHandling&&qn&&(qn.errorThrown=!0,qn.error=e)}var Wn=class extends be{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,as(t)&&t.add(this)):this.destination=oD}static create(t,n,r){return new Ir(t,n,r)}next(t){this.isStopped?il(Th(t),this):this._next(t)}error(t){this.isStopped?il(wh(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?il(Dh,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},nD=Function.prototype.bind;function ol(e,t){return nD.call(e,t)}var sl=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){ls(r)}}error(t){let{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){ls(r)}else ls(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){ls(n)}}},Ir=class extends Wn{constructor(t,n,r){super();let o;if(U(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&Tt.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&ol(t.next,i),error:t.error&&ol(t.error,i),complete:t.complete&&ol(t.complete,i)}):o=t}this.destination=new sl(o)}};function ls(e){Tt.useDeprecatedSynchronousErrorHandling?Eh(e):cs(e)}function rD(e){throw e}function il(e,t){let{onStoppedNotification:n}=Tt;n&&Er.setTimeout(()=>n(e,t))}var oD={closed:!0,next:Oo,error:rD,complete:Oo};var Yt=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Xe(e){return e}function al(...e){return cl(e)}function cl(e){return e.length===0?Xe:e.length===1?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}var V=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){let r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){let i=sD(n)?n:new Ir(n,r,o);return Cr(()=>{let{operator:s,source:c}=this;i.add(s?s.call(i,c):c?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return r=Ch(r),new r((o,i)=>{let s=new Ir({next:c=>{try{n(c)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(n)}[Yt](){return this}pipe(...n){return cl(n)(this)}toPromise(n){return n=Ch(n),new n((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function Ch(e){var t;return(t=e??Tt.Promise)!==null&&t!==void 0?t:Promise}function iD(e){return e&&U(e.next)&&U(e.error)&&U(e.complete)}function sD(e){return e&&e instanceof Wn||iD(e)&&as(e)}function ll(e){return U(e?.lift)}function K(e){return t=>{if(ll(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Y(e,t,n,r,o){return new ul(e,t,n,r,o)}var ul=class extends Wn{constructor(t,n,r,o,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(c){try{n(c)}catch(l){t.error(l)}}:super._next,this._error=o?function(c){try{o(c)}catch(l){t.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(c){t.error(c)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};function Pr(){return K((e,t)=>{let n=null;e._refCount++;let r=Y(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount){n=null;return}let o=e._connection,i=n;n=null,o&&(!i||o===i)&&o.unsubscribe(),t.unsubscribe()});e.subscribe(r),r.closed||(n=e.connect())})}var Mr=class extends V{constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,ll(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){let t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new be;let n=this.getSubject();t.add(this.source.subscribe(Y(n,void 0,()=>{this._teardown(),n.complete()},r=>{this._teardown(),n.error(r)},()=>this._teardown()))),t.closed&&(this._connection=null,t=be.EMPTY)}return t}refCount(){return Pr()(this)}};var Ih=Tr(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Ue=(()=>{class e extends V{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let r=new us(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Ih}next(n){Cr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(n)}})}error(n){Cr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){Cr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:r,isStopped:o,observers:i}=this;return r||o?nl:(this.currentObservers=null,i.push(n),new be(()=>{this.currentObservers=null,zn(i,n)}))}_checkFinalizedStatuses(n){let{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){let n=new V;return n.source=this,n}}return e.create=(t,n)=>new us(t,n),e})(),us=class extends Ue{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,t)}error(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,t)}complete(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)}_subscribe(t){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&r!==void 0?r:nl}};var ve=class extends Ue{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){let{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}};var dl={now(){return(dl.delegate||Date).now()},delegate:void 0};var ds=class extends be{constructor(t,n){super()}schedule(t,n=0){return this}};var Ao={setInterval(e,t,...n){let{delegate:r}=Ao;return r?.setInterval?r.setInterval(e,t,...n):setInterval(e,t,...n)},clearInterval(e){let{delegate:t}=Ao;return(t?.clearInterval||clearInterval)(e)},delegate:void 0};var fs=class extends ds{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){var r;if(this.closed)return this;this.state=t;let o=this.id,i=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(i,o,n)),this.pending=!0,this.delay=n,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(i,this.id,n),this}requestAsyncId(t,n,r=0){return Ao.setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,n,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return n;n!=null&&Ao.clearInterval(n)}execute(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let r=this._execute(t,n);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let r=!1,o;try{this.work(t)}catch(i){r=!0,o=i||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){let{id:t,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,zn(r,this),t!=null&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,super.unsubscribe()}}};var Rr=class e{constructor(t,n=e.now){this.schedulerActionCtor=t,this.now=n}schedule(t,n=0,r){return new this.schedulerActionCtor(this,t).schedule(r,n)}};Rr.now=dl.now;var hs=class extends Rr{constructor(t,n=Rr.now){super(t,n),this.actions=[],this._active=!1}flush(t){let{actions:n}=this;if(this._active){n.push(t);return}let r;this._active=!0;do if(r=t.execute(t.state,t.delay))break;while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}}};var ps=class extends fs{constructor(t,n){super(t,n),this.scheduler=t,this.work=n}schedule(t,n=0){return n>0?super.schedule(t,n):(this.delay=n,this.state=t,this.scheduler.flush(this),this)}execute(t,n){return n>0||this.closed?super.execute(t,n):this._execute(t,n)}requestAsyncId(t,n,r=0){return r!=null&&r>0||r==null&&this.delay>0?super.requestAsyncId(t,n,r):(t.flush(this),0)}};var ms=class extends hs{};var fl=new ms(ps);var We=new V(e=>e.complete());function Ph(e){return e&&U(e.schedule)}function Mh(e){return e[e.length-1]}function Rh(e){return U(Mh(e))?e.pop():void 0}function vn(e){return Ph(Mh(e))?e.pop():void 0}var hl=function(e,t){return hl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},hl(e,t)};function ke(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");hl(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var v=function(){return v=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},v.apply(this,arguments)};function Ge(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function et(e,t,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function c(d){try{u(r.next(d))}catch(f){s(f)}}function l(d){try{u(r.throw(d))}catch(f){s(f)}}function u(d){d.done?i(d.value):o(d.value).then(c,l)}u((r=r.apply(e,t||[])).next())})}function Et(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=c(0),s.throw=c(1),s.return=c(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function c(u){return function(d){return l([u,d])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,u[0]&&(n=0)),n;)try{if(r=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(d){u=[6,d],o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function _h(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function De(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function Gn(e){return this instanceof Gn?(this.v=e,this):new Gn(e)}function xh(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),c("next"),c("throw"),c("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(h){return function(g){return Promise.resolve(g).then(h,f)}}function c(h,g){r[h]&&(o[h]=function(y){return new Promise(function(b,S){i.push([h,y,b,S])>1||l(h,y)})},g&&(o[h]=g(o[h])))}function l(h,g){try{u(r[h](g))}catch(y){p(i[0][3],y)}}function u(h){h.value instanceof Gn?Promise.resolve(h.value.v).then(d,f):p(i[0][2],h)}function d(h){l("next",h)}function f(h){l("throw",h)}function p(h,g){h(g),i.shift(),i.length&&l(i[0][0],i[0][1])}}function kh(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof _h=="function"?_h(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(c,l){s=e[i](s),o(c,l,s.done,s.value)})}}function o(i,s,c,l){Promise.resolve(l).then(function(u){i({value:u,done:c})},s)}}var gs=e=>e&&typeof e.length=="number"&&typeof e!="function";function ys(e){return U(e?.then)}function vs(e){return U(e[Yt])}function Ss(e){return Symbol.asyncIterator&&U(e?.[Symbol.asyncIterator])}function bs(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function aD(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ds=aD();function ws(e){return U(e?.[Ds])}function Ts(e){return xh(this,arguments,function*(){let n=e.getReader();try{for(;;){let{value:r,done:o}=yield Gn(n.read());if(o)return yield Gn(void 0);yield yield Gn(r)}}finally{n.releaseLock()}})}function Es(e){return U(e?.getReader)}function Ne(e){if(e instanceof V)return e;if(e!=null){if(vs(e))return cD(e);if(gs(e))return lD(e);if(ys(e))return uD(e);if(Ss(e))return Nh(e);if(ws(e))return dD(e);if(Es(e))return fD(e)}throw bs(e)}function cD(e){return new V(t=>{let n=e[Yt]();if(U(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function lD(e){return new V(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function uD(e){return new V(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,cs)})}function dD(e){return new V(t=>{for(let n of e)if(t.next(n),t.closed)return;t.complete()})}function Nh(e){return new V(t=>{hD(e,t).catch(n=>t.error(n))})}function fD(e){return Nh(Ts(e))}function hD(e,t){var n,r,o,i;return et(this,void 0,void 0,function*(){try{for(n=kh(e);r=yield n.next(),!r.done;){let s=r.value;if(t.next(s),t.closed)return}}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})}function Qe(e,t,n,r=0,o=!1){let i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function Qn(e,t=0){return K((n,r)=>{n.subscribe(Y(r,o=>Qe(r,e,()=>r.next(o),t),()=>Qe(r,e,()=>r.complete(),t),o=>Qe(r,e,()=>r.error(o),t)))})}function Cs(e,t=0){return K((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function Oh(e,t){return Ne(e).pipe(Cs(t),Qn(t))}function Ah(e,t){return Ne(e).pipe(Cs(t),Qn(t))}function Fh(e,t){return new V(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function Lh(e,t){return new V(n=>{let r;return Qe(n,t,()=>{r=e[Ds](),Qe(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){n.error(s);return}i?n.complete():n.next(o)},0,!0)}),()=>U(r?.return)&&r.return()})}function Is(e,t){if(!e)throw new Error("Iterable cannot be null");return new V(n=>{Qe(n,t,()=>{let r=e[Symbol.asyncIterator]();Qe(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function Hh(e,t){return Is(Ts(e),t)}function Uh(e,t){if(e!=null){if(vs(e))return Oh(e,t);if(gs(e))return Fh(e,t);if(ys(e))return Ah(e,t);if(Ss(e))return Is(e,t);if(ws(e))return Lh(e,t);if(Es(e))return Hh(e,t)}throw bs(e)}function he(e,t){return t?Uh(e,t):Ne(e)}function L(...e){let t=vn(e);return he(e,t)}function _r(e,t){let n=U(e)?e:()=>e,r=o=>o.error(n());return new V(t?o=>t.schedule(r,0,o):r)}function pl(e){return!!e&&(e instanceof V||U(e.lift)&&U(e.subscribe))}var Zt=Tr(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"});function F(e,t){return K((n,r)=>{let o=0;n.subscribe(Y(r,i=>{r.next(e.call(t,i,o++))}))})}var{isArray:pD}=Array;function mD(e,t){return pD(t)?e(...t):e(t)}function jh(e){return F(t=>mD(e,t))}var{isArray:gD}=Array,{getPrototypeOf:yD,prototype:vD,keys:SD}=Object;function Bh(e){if(e.length===1){let t=e[0];if(gD(t))return{args:t,keys:null};if(bD(t)){let n=SD(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}function bD(e){return e&&typeof e=="object"&&yD(e)===vD}function Vh(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function Ps(...e){let t=vn(e),n=Rh(e),{args:r,keys:o}=Bh(e);if(r.length===0)return he([],t);let i=new V(DD(r,t,o?s=>Vh(o,s):Xe));return n?i.pipe(jh(n)):i}function DD(e,t,n=Xe){return r=>{$h(t,()=>{let{length:o}=e,i=new Array(o),s=o,c=o;for(let l=0;l<o;l++)$h(t,()=>{let u=he(e[l],t),d=!1;u.subscribe(Y(r,f=>{i[l]=f,d||(d=!0,c--),c||r.next(n(i.slice()))},()=>{--s||r.complete()}))},r)},r)}}function $h(e,t,n){e?Qe(n,e,t):t()}function zh(e,t,n,r,o,i,s,c){let l=[],u=0,d=0,f=!1,p=()=>{f&&!l.length&&!u&&t.complete()},h=y=>u<r?g(y):l.push(y),g=y=>{i&&t.next(y),u++;let b=!1;Ne(n(y,d++)).subscribe(Y(t,S=>{o?.(S),i?h(S):t.next(S)},()=>{b=!0},void 0,()=>{if(b)try{for(u--;l.length&&u<r;){let S=l.shift();s?Qe(t,s,()=>g(S)):g(S)}p()}catch(S){t.error(S)}}))};return e.subscribe(Y(t,h,()=>{f=!0,p()})),()=>{c?.()}}function Pe(e,t,n=1/0){return U(t)?Pe((r,o)=>F((i,s)=>t(r,i,o,s))(Ne(e(r,o))),n):(typeof t=="number"&&(n=t),K((r,o)=>zh(r,o,e,n)))}function ml(e=1/0){return Pe(Xe,e)}function qh(){return ml(1)}function xr(...e){return qh()(he(e,vn(e)))}function Ms(e){return new V(t=>{Ne(e()).subscribe(t)})}function tt(e,t){return K((n,r)=>{let o=0;n.subscribe(Y(r,i=>e.call(t,i,o++)&&r.next(i)))})}function Sn(e){return K((t,n)=>{let r=null,o=!1,i;r=t.subscribe(Y(n,void 0,void 0,s=>{i=Ne(e(s,Sn(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function Wh(e,t,n,r,o){return(i,s)=>{let c=n,l=t,u=0;i.subscribe(Y(s,d=>{let f=u++;l=c?e(l,d,f):(c=!0,d),r&&s.next(l)},o&&(()=>{c&&s.next(l),s.complete()})))}}function bn(e,t){return U(t)?Pe(e,t,1):Pe(e,1)}function Dn(e){return K((t,n)=>{let r=!1;t.subscribe(Y(n,o=>{r=!0,n.next(o)},()=>{r||n.next(e),n.complete()}))})}function Jt(e){return e<=0?()=>We:K((t,n)=>{let r=0;t.subscribe(Y(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function Rs(e=wD){return K((t,n)=>{let r=!1;t.subscribe(Y(n,o=>{r=!0,n.next(o)},()=>r?n.complete():n.error(e())))})}function wD(){return new Zt}function Kn(e){return K((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}function Xt(e,t){let n=arguments.length>=2;return r=>r.pipe(e?tt((o,i)=>e(o,i,r)):Xe,Jt(1),n?Dn(t):Rs(()=>new Zt))}function kr(e){return e<=0?()=>We:K((t,n)=>{let r=[];t.subscribe(Y(n,o=>{r.push(o),e<r.length&&r.shift()},()=>{for(let o of r)n.next(o);n.complete()},void 0,()=>{r=null}))})}function gl(e,t){let n=arguments.length>=2;return r=>r.pipe(e?tt((o,i)=>e(o,i,r)):Xe,kr(1),n?Dn(t):Rs(()=>new Zt))}function yl(e,t){return K(Wh(e,t,arguments.length>=2,!0))}function Fo(...e){let t=vn(e);return K((n,r)=>{(t?xr(e,n,t):xr(e,n)).subscribe(r)})}function nt(e,t){return K((n,r)=>{let o=null,i=0,s=!1,c=()=>s&&!o&&r.complete();n.subscribe(Y(r,l=>{o?.unsubscribe();let u=0,d=i++;Ne(e(l,d)).subscribe(o=Y(r,f=>r.next(t?t(l,f,d,u++):f),()=>{o=null,c()}))},()=>{s=!0,c()}))})}function vl(e){return K((t,n)=>{Ne(e).subscribe(Y(n,()=>n.complete(),Oo)),!n.closed&&t.subscribe(n)})}function Oe(e,t,n){let r=U(e)||t||n?{next:e,error:t,complete:n}:e;return r?K((o,i)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let c=!0;o.subscribe(Y(i,l=>{var u;(u=r.next)===null||u===void 0||u.call(r,l),i.next(l)},()=>{var l;c=!1,(l=r.complete)===null||l===void 0||l.call(r),i.complete()},l=>{var u;c=!1,(u=r.error)===null||u===void 0||u.call(r,l),i.error(l)},()=>{var l,u;c&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):Xe}var N=class extends Error{code;constructor(t,n){super(na(t,n)),this.code=t}};function na(e,t){return`${`NG0${Math.abs(e)}`}${t?": "+t:""}`}var Np=Symbol("InputSignalNode#UNSET"),TD=ue(R({},Sh),{transformFn:void 0,applyValueToInputSignal(e,t){vh(e,t)}});function Op(e,t){let n=Object.create(TD);n.value=e,n.transformFn=t?.transform;function r(){if(uh(n),n.value===Np){let o=null;throw new N(-950,o)}return n.value}return r[wr]=n,r}function ra(e){return{toString:e}.toString()}function de(e){for(let t in e)if(e[t]===de)return t;throw Error("Could not find renamed property on target object.")}function ot(e){if(typeof e=="string")return e;if(Array.isArray(e))return`[${e.map(ot).join(", ")}]`;if(e==null)return""+e;let t=e.overriddenName||e.name;if(t)return`${t}`;let n=e.toString();if(n==null)return""+n;let r=n.indexOf(`
`);return r>=0?n.slice(0,r):n}function Gh(e,t){return e?t?`${e} ${t}`:e:t||""}var ED=de({__forward_ref__:de});function Ap(e){return e.__forward_ref__=Ap,e.toString=function(){return ot(this())},e}function pt(e){return Fp(e)?e():e}function Fp(e){return typeof e=="function"&&e.hasOwnProperty(ED)&&e.__forward_ref__===Ap}function k(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function $r(e){return{providers:e.providers||[],imports:e.imports||[]}}function oa(e){return Qh(e,Hp)||Qh(e,Up)}function Lp(e){return oa(e)!==null}function Qh(e,t){return e.hasOwnProperty(t)?e[t]:null}function CD(e){let t=e&&(e[Hp]||e[Up]);return t||null}function Kh(e){return e&&(e.hasOwnProperty(Yh)||e.hasOwnProperty(ID))?e[Yh]:null}var Hp=de({\u0275prov:de}),Yh=de({\u0275inj:de}),Up=de({ngInjectableDef:de}),ID=de({ngInjectorDef:de}),O=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(t,n){this._desc=t,this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=k({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function jp(e){return e&&!!e.\u0275providers}var PD=de({\u0275cmp:de}),MD=de({\u0275dir:de}),RD=de({\u0275pipe:de}),_D=de({\u0275mod:de}),As=de({\u0275fac:de}),jo=de({__NG_ELEMENT_ID__:de}),Zh=de({__NG_ENV_ID__:de});function xD(e){return typeof e=="string"?e:e==null?"":String(e)}function kD(e){return typeof e=="function"?e.name||e.toString():typeof e=="object"&&e!=null&&typeof e.type=="function"?e.type.name||e.type.toString():xD(e)}function Bp(e,t){throw new N(-200,e)}function iu(e,t){throw new N(-201,!1)}var $=function(e){return e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}($||{}),Pl;function Vp(){return Pl}function ht(e){let t=Pl;return Pl=e,t}function $p(e,t,n){let r=oa(e);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(n&$.Optional)return null;if(t!==void 0)return t;iu(e,"Injector")}var ND={},Yn=ND,OD="__NG_DI_FLAG__",Fs=class{injector;constructor(t){this.injector=t}retrieve(t,n){let r=n;return this.injector.get(t,r.optional?tl:Yn,r)}},Ls="ngTempTokenPath",AD="ngTokenPath",FD=/\n/gm,LD="\u0275",Jh="__source";function HD(e,t=$.Default){if(No()===void 0)throw new N(-203,!1);if(No()===null)return $p(e,void 0,t);{let n=No(),r;return n instanceof Fs?r=n.injector:r=n,r.get(e,t&$.Optional?null:void 0,t)}}function A(e,t=$.Default){return(Vp()||HD)(pt(e),t)}function I(e,t=$.Default){return A(e,ia(t))}function ia(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function Ml(e){let t=[];for(let n=0;n<e.length;n++){let r=pt(e[n]);if(Array.isArray(r)){if(r.length===0)throw new N(900,!1);let o,i=$.Default;for(let s=0;s<r.length;s++){let c=r[s],l=UD(c);typeof l=="number"?l===-1?o=c.token:i|=l:o=c}t.push(A(o,i))}else t.push(A(r))}return t}function UD(e){return e[OD]}function jD(e,t,n,r){let o=e[Ls];throw t[Jh]&&o.unshift(t[Jh]),e.message=BD(`
`+e.message,o,n,r),e[AD]=o,e[Ls]=null,e}function BD(e,t,n,r=null){e=e&&e.charAt(0)===`
`&&e.charAt(1)==LD?e.slice(2):e;let o=ot(t);if(Array.isArray(t))o=t.map(ot).join(" -> ");else if(typeof t=="object"){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let c=t[s];i.push(s+":"+(typeof c=="string"?JSON.stringify(c):ot(c)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(FD,`
  `)}`}function Lr(e,t){let n=e.hasOwnProperty(As);return n?e[As]:null}function su(e,t){e.forEach(n=>Array.isArray(n)?su(n,t):t(n))}function zp(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function Hs(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}var Hr={},Ht=[],Ur=new O(""),qp=new O("",-1),Wp=new O(""),Us=class{get(t,n=Yn){if(n===Yn){let r=new Error(`NullInjectorError: No provider for ${ot(t)}!`);throw r.name="NullInjectorError",r}return n}};function Gp(e,t){let n=e[_D]||null;if(!n&&t===!0)throw new Error(`Type ${ot(e)} does not have '\u0275mod' property.`);return n}function jr(e){return e[PD]||null}function VD(e){return e[MD]||null}function $D(e){return e[RD]||null}function Qo(e){return{\u0275providers:e}}function zD(...e){return{\u0275providers:Qp(!0,e),\u0275fromNgModule:!0}}function Qp(e,...t){let n=[],r=new Set,o,i=s=>{n.push(s)};return su(t,s=>{let c=s;Rl(c,i,[],r)&&(o||=[],o.push(c))}),o!==void 0&&Kp(o,i),n}function Kp(e,t){for(let n=0;n<e.length;n++){let{ngModule:r,providers:o}=e[n];au(o,i=>{t(i,r)})}}function Rl(e,t,n,r){if(e=pt(e),!e)return!1;let o=null,i=Kh(e),s=!i&&jr(e);if(!i&&!s){let l=e.ngModule;if(i=Kh(l),i)o=l;else return!1}else{if(s&&!s.standalone)return!1;o=e}let c=r.has(o);if(s){if(c)return!1;if(r.add(o),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let u of l)Rl(u,t,n,r)}}else if(i){if(i.imports!=null&&!c){r.add(o);let u;try{su(i.imports,d=>{Rl(d,t,n,r)&&(u||=[],u.push(d))})}finally{}u!==void 0&&Kp(u,t)}if(!c){let u=Lr(o)||(()=>new o);t({provide:o,useFactory:u,deps:Ht},o),t({provide:Wp,useValue:o,multi:!0},o),t({provide:Ur,useValue:()=>A(o),multi:!0},o)}let l=i.providers;if(l!=null&&!c){let u=e;au(l,d=>{t(d,u)})}}else return!1;return o!==e&&e.providers!==void 0}function au(e,t){for(let n of e)jp(n)&&(n=n.\u0275providers),Array.isArray(n)?au(n,t):t(n)}var qD=de({provide:String,useValue:de});function Yp(e){return e!==null&&typeof e=="object"&&qD in e}function WD(e){return!!(e&&e.useExisting)}function GD(e){return!!(e&&e.useFactory)}function _l(e){return typeof e=="function"}var sa=new O(""),_s={},Xh={},Sl;function cu(){return Sl===void 0&&(Sl=new Us),Sl}var Ke=class{},Bo=class extends Ke{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,kl(t,s=>this.processProvider(s)),this.records.set(qp,Nr(void 0,this)),o.has("environment")&&this.records.set(Ke,Nr(void 0,this));let i=this.records.get(sa);i!=null&&typeof i.value=="string"&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(Wp,Ht,$.Self))}retrieve(t,n){let r=n;return this.get(t,r.optional?tl:Yn,r)}destroy(){Ho(this),this._destroyed=!0;let t=re(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of n)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),re(t)}}onDestroy(t){return Ho(this),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){Ho(this);let n=Kt(this),r=ht(void 0),o;try{return t()}finally{Kt(n),ht(r)}}get(t,n=Yn,r=$.Default){if(Ho(this),t.hasOwnProperty(Zh))return t[Zh](this);r=ia(r);let o,i=Kt(this),s=ht(void 0);try{if(!(r&$.SkipSelf)){let l=this.records.get(t);if(l===void 0){let u=XD(t)&&oa(t);u&&this.injectableDefInScope(u)?l=Nr(xl(t),_s):l=null,this.records.set(t,l)}if(l!=null)return this.hydrate(t,l)}let c=r&$.Self?cu():this.parent;return n=r&$.Optional&&n===Yn?null:n,c.get(t,n)}catch(c){if(c.name==="NullInjectorError"){if((c[Ls]=c[Ls]||[]).unshift(ot(t)),i)throw c;return jD(c,t,"R3InjectorError",this.source)}else throw c}finally{ht(s),Kt(i)}}resolveInjectorInitializers(){let t=re(null),n=Kt(this),r=ht(void 0),o;try{let i=this.get(Ur,Ht,$.Self);for(let s of i)s()}finally{Kt(n),ht(r),re(t)}}toString(){let t=[],n=this.records;for(let r of n.keys())t.push(ot(r));return`R3Injector[${t.join(", ")}]`}processProvider(t){t=pt(t);let n=_l(t)?t:pt(t&&t.provide),r=KD(t);if(!_l(t)&&t.multi===!0){let o=this.records.get(n);o||(o=Nr(void 0,_s,!0),o.factory=()=>Ml(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){let r=re(null);try{return n.value===Xh?Bp(ot(t)):n.value===_s&&(n.value=Xh,n.value=n.factory()),typeof n.value=="object"&&n.value&&JD(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{re(r)}}injectableDefInScope(t){if(!t.providedIn)return!1;let n=pt(t.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(t){let n=this._onDestroyHooks.indexOf(t);n!==-1&&this._onDestroyHooks.splice(n,1)}};function xl(e){let t=oa(e),n=t!==null?t.factory:Lr(e);if(n!==null)return n;if(e instanceof O)throw new N(204,!1);if(e instanceof Function)return QD(e);throw new N(204,!1)}function QD(e){if(e.length>0)throw new N(204,!1);let n=CD(e);return n!==null?()=>n.factory(e):()=>new e}function KD(e){if(Yp(e))return Nr(void 0,e.useValue);{let t=YD(e);return Nr(t,_s)}}function YD(e,t,n){let r;if(_l(e)){let o=pt(e);return Lr(o)||xl(o)}else if(Yp(e))r=()=>pt(e.useValue);else if(GD(e))r=()=>e.useFactory(...Ml(e.deps||[]));else if(WD(e))r=()=>A(pt(e.useExisting));else{let o=pt(e&&(e.useClass||e.provide));if(ZD(e))r=()=>new o(...Ml(e.deps));else return Lr(o)||xl(o)}return r}function Ho(e){if(e.destroyed)throw new N(205,!1)}function Nr(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function ZD(e){return!!e.deps}function JD(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function XD(e){return typeof e=="function"||typeof e=="object"&&e instanceof O}function kl(e,t){for(let n of e)Array.isArray(n)?kl(n,t):n&&jp(n)?kl(n.\u0275providers,t):t(n)}function it(e,t){let n;e instanceof Bo?(Ho(e),n=e):n=new Fs(e);let r,o=Kt(n),i=ht(void 0);try{return t()}finally{Kt(o),ht(i)}}function ew(){return Vp()!==void 0||No()!=null}function tw(e){return typeof e=="function"}var nn=0,X=1,z=2,Ve=3,It=4,_t=5,js=6,Bs=7,yt=8,Vo=9,Tn=10,Pt=11,$o=12,ep=13,Ko=14,jt=15,zo=16,Or=17,aa=18,ca=19,Zp=20,wn=21,bl=22,Vs=23,mt=24,Dl=25,En=26,Jp=1;var Xn=7,$s=8,zs=9,gt=10;function Zn(e){return Array.isArray(e)&&typeof e[Jp]=="object"}function rn(e){return Array.isArray(e)&&e[Jp]===!0}function Xp(e){return(e.flags&4)!==0}function Yo(e){return e.componentOffset>-1}function em(e){return(e.flags&1)===1}function nr(e){return!!e.template}function qs(e){return(e[z]&512)!==0}function Zo(e){return(e[z]&256)===256}var Nl=class{previousValue;currentValue;firstChange;constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}};function tm(e,t,n,r){t!==null?t.applyValueToInputSignal(t,r):e[n]=r}var lu=(()=>{let e=()=>nm;return e.ngInherit=!0,e})();function nm(e){return e.type.prototype.ngOnChanges&&(e.setInput=rw),nw}function nw(){let e=om(this),t=e?.current;if(t){let n=e.previous;if(n===Hr)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function rw(e,t,n,r,o){let i=this.declaredInputs[r],s=om(e)||ow(e,{previous:Hr,current:null}),c=s.current||(s.current={}),l=s.previous,u=l[i];c[i]=new Nl(u&&u.currentValue,n,l===Hr),tm(e,t,o,n)}var rm="__ngSimpleChanges__";function om(e){return e[rm]||null}function ow(e,t){return e[rm]=t}var tp=null;var fe=function(e,t=null,n){tp?.(e,t,n)},iw="svg",sw="math";function en(e){for(;Array.isArray(e);)e=e[nn];return e}function Pn(e,t){return en(t[e.index])}function aw(e,t){return e.data[t]}function Cn(e,t){let n=t[e];return Zn(n)?n:n[nn]}function uu(e){return(e[z]&128)===128}function cw(e){return rn(e[Ve])}function np(e,t){return t==null?null:e[t]}function im(e){e[Or]=0}function sm(e){e[z]&1024||(e[z]|=1024,uu(e)&&ua(e))}function la(e){return!!(e[z]&9216||e[mt]?.dirty)}function Ol(e){e[Tn].changeDetectionScheduler?.notify(8),e[z]&64&&(e[z]|=1024),la(e)&&ua(e)}function ua(e){e[Tn].changeDetectionScheduler?.notify(0);let t=er(e);for(;t!==null&&!(t[z]&8192||(t[z]|=8192,!uu(t)));)t=er(t)}function am(e,t){if(Zo(e))throw new N(911,!1);e[wn]===null&&(e[wn]=[]),e[wn].push(t)}function lw(e,t){if(e[wn]===null)return;let n=e[wn].indexOf(t);n!==-1&&e[wn].splice(n,1)}function er(e){let t=e[Ve];return rn(t)?t[Ve]:t}function uw(e){return e[Bs]??=[]}function dw(e){return e.cleanup??=[]}var ae={lFrame:pm(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Al=!1;function fw(){return ae.lFrame.elementDepthCount}function hw(){ae.lFrame.elementDepthCount++}function pw(){ae.lFrame.elementDepthCount--}function mw(){return ae.bindingsEnabled}function gw(){return ae.skipHydrationRootTNode!==null}function yw(e){return ae.skipHydrationRootTNode===e}function vw(){ae.skipHydrationRootTNode=null}function Mt(){return ae.lFrame.lView}function da(){return ae.lFrame.tView}function Mn(){let e=cm();for(;e!==null&&e.type===64;)e=e.parent;return e}function cm(){return ae.lFrame.currentTNode}function Sw(){let e=ae.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function fa(e,t){let n=ae.lFrame;n.currentTNode=e,n.isParent=t}function lm(){return ae.lFrame.isParent}function bw(){ae.lFrame.isParent=!1}function um(){return Al}function rp(e){let t=Al;return Al=e,t}function Dw(e){return ae.lFrame.bindingIndex=e}function ww(){return ae.lFrame.inI18n}function Tw(e,t){let n=ae.lFrame;n.bindingIndex=n.bindingRootIndex=e,Fl(t)}function Ew(){return ae.lFrame.currentDirectiveIndex}function Fl(e){ae.lFrame.currentDirectiveIndex=e}function dm(e){ae.lFrame.currentQueryIndex=e}function Cw(e){let t=e[X];return t.type===2?t.declTNode:t.type===1?e[_t]:null}function fm(e,t,n){if(n&$.SkipSelf){let o=t,i=e;for(;o=o.parent,o===null&&!(n&$.Host);)if(o=Cw(i),o===null||(i=i[Ko],o.type&10))break;if(o===null)return!1;t=o,e=i}let r=ae.lFrame=hm();return r.currentTNode=t,r.lView=e,!0}function du(e){let t=hm(),n=e[X];ae.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function hm(){let e=ae.lFrame,t=e===null?null:e.child;return t===null?pm(e):t}function pm(e){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=t),t}function mm(){let e=ae.lFrame;return ae.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var gm=mm;function fu(){let e=mm();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Iw(){return ae.lFrame.selectedIndex}function tr(e){ae.lFrame.selectedIndex=e}function Pw(){return ae.lFrame.currentNamespace}var ym=!0;function vm(){return ym}function Sm(e){ym=e}function Mw(e,t,n){let{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){let s=nm(t);(n.preOrderHooks??=[]).push(e,s),(n.preOrderCheckHooks??=[]).push(e,s)}o&&(n.preOrderHooks??=[]).push(0-e,o),i&&((n.preOrderHooks??=[]).push(e,i),(n.preOrderCheckHooks??=[]).push(e,i))}function Rw(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){let i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:c,ngAfterViewInit:l,ngAfterViewChecked:u,ngOnDestroy:d}=i;s&&(e.contentHooks??=[]).push(-n,s),c&&((e.contentHooks??=[]).push(n,c),(e.contentCheckHooks??=[]).push(n,c)),l&&(e.viewHooks??=[]).push(-n,l),u&&((e.viewHooks??=[]).push(n,u),(e.viewCheckHooks??=[]).push(n,u)),d!=null&&(e.destroyHooks??=[]).push(n,d)}}function xs(e,t,n){bm(e,t,3,n)}function ks(e,t,n,r){(e[z]&3)===n&&bm(e,t,n,r)}function wl(e,t){let n=e[z];(n&3)===t&&(n&=16383,n+=1,e[z]=n)}function bm(e,t,n,r){let o=r!==void 0?e[Or]&65535:0,i=r??-1,s=t.length-1,c=0;for(let l=o;l<s;l++)if(typeof t[l+1]=="number"){if(c=t[l],r!=null&&c>=r)break}else t[l]<0&&(e[Or]+=65536),(c<i||i==-1)&&(_w(e,n,t,l),e[Or]=(e[Or]&4294901760)+l+2),l++}function op(e,t){fe(4,e,t);let n=re(null);try{t.call(e)}finally{re(n),fe(5,e,t)}}function _w(e,t,n,r){let o=n[r]<0,i=n[r+1],s=o?-n[r]:n[r],c=e[s];o?e[z]>>14<e[Or]>>16&&(e[z]&3)===t&&(e[z]+=16384,op(c,i)):op(c,i)}var Fr=-1,qo=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(t,n,r){this.factory=t,this.canSeeViewProviders=n,this.injectImpl=r}};function xw(e){return(e.flags&8)!==0}function kw(e){return(e.flags&16)!==0}function Nw(e,t,n){let r=0;for(;r<n.length;){let o=n[r];if(typeof o=="number"){if(o!==0)break;r++;let i=n[r++],s=n[r++],c=n[r++];e.setAttribute(t,s,c,i)}else{let i=o,s=n[++r];Aw(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function Ow(e){return e===3||e===4||e===6}function Aw(e){return e.charCodeAt(0)===64}function Dm(e,t){if(!(t===null||t.length===0))if(e===null||e.length===0)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){let o=t[r];typeof o=="number"?n=o:n===0||(n===-1||n===2?ip(e,n,o,null,t[++r]):ip(e,n,o,null,null))}}return e}function ip(e,t,n,r,o){let i=0,s=e.length;if(t===-1)s=-1;else for(;i<e.length;){let c=e[i++];if(typeof c=="number"){if(c===t){s=-1;break}else if(c>t){s=i-1;break}}}for(;i<e.length;){let c=e[i];if(typeof c=="number")break;if(c===n){o!==null&&(e[i+1]=o);return}i++,o!==null&&i++}s!==-1&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),o!==null&&e.splice(i++,0,o)}var Tl={},Ll=class{injector;parentInjector;constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){r=ia(r);let o=this.injector.get(t,Tl,r);return o!==Tl||n===Tl?o:this.parentInjector.get(t,n,r)}};function wm(e){return e!==Fr}function Ws(e){return e&32767}function Fw(e){return e>>16}function Gs(e,t){let n=Fw(e),r=t;for(;n>0;)r=r[Ko],n--;return r}var Hl=!0;function sp(e){let t=Hl;return Hl=e,t}var Lw=256,Tm=Lw-1,Em=5,Hw=0,Ut={};function Uw(e,t,n){let r;typeof n=="string"?r=n.charCodeAt(0)||0:n.hasOwnProperty(jo)&&(r=n[jo]),r==null&&(r=n[jo]=Hw++);let o=r&Tm,i=1<<o;t.data[e+(o>>Em)]|=i}function Cm(e,t){let n=Im(e,t);if(n!==-1)return n;let r=t[X];r.firstCreatePass&&(e.injectorIndex=t.length,El(r.data,e),El(t,null),El(r.blueprint,null));let o=hu(e,t),i=e.injectorIndex;if(wm(o)){let s=Ws(o),c=Gs(o,t),l=c[X].data;for(let u=0;u<8;u++)t[i+u]=c[s+u]|l[s+u]}return t[i+8]=o,i}function El(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Im(e,t){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||t[e.injectorIndex+8]===null?-1:e.injectorIndex}function hu(e,t){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;o!==null;){if(r=xm(o),r===null)return Fr;if(n++,o=o[Ko],r.injectorIndex!==-1)return r.injectorIndex|n<<16}return Fr}function jw(e,t,n){Uw(e,t,n)}function Pm(e,t,n){if(n&$.Optional||e!==void 0)return e;iu(t,"NodeInjector")}function Mm(e,t,n,r){if(n&$.Optional&&r===void 0&&(r=null),(n&($.Self|$.Host))===0){let o=e[Vo],i=ht(void 0);try{return o?o.get(t,r,n&$.Optional):$p(t,r,n&$.Optional)}finally{ht(i)}}return Pm(r,t,n)}function Rm(e,t,n,r=$.Default,o){if(e!==null){if(t[z]&2048&&!(r&$.Self)){let s=qw(e,t,n,r,Ut);if(s!==Ut)return s}let i=_m(e,t,n,r,Ut);if(i!==Ut)return i}return Mm(t,n,r,o)}function _m(e,t,n,r,o){let i=$w(n);if(typeof i=="function"){if(!fm(t,e,r))return r&$.Host?Pm(o,n,r):Mm(t,n,r,o);try{let s;if(s=i(r),s==null&&!(r&$.Optional))iu(n);else return s}finally{gm()}}else if(typeof i=="number"){let s=null,c=Im(e,t),l=Fr,u=r&$.Host?t[jt][_t]:null;for((c===-1||r&$.SkipSelf)&&(l=c===-1?hu(e,t):t[c+8],l===Fr||!cp(r,!1)?c=-1:(s=t[X],c=Ws(l),t=Gs(l,t)));c!==-1;){let d=t[X];if(ap(i,c,d.data)){let f=Bw(c,t,n,s,r,u);if(f!==Ut)return f}l=t[c+8],l!==Fr&&cp(r,t[X].data[c+8]===u)&&ap(i,c,t)?(s=d,c=Ws(l),t=Gs(l,t)):c=-1}}return o}function Bw(e,t,n,r,o,i){let s=t[X],c=s.data[e+8],l=r==null?Yo(c)&&Hl:r!=s&&(c.type&3)!==0,u=o&$.Host&&i===c,d=Vw(c,s,n,l,u);return d!==null?Ul(t,s,d,c):Ut}function Vw(e,t,n,r,o){let i=e.providerIndexes,s=t.data,c=i&1048575,l=e.directiveStart,u=e.directiveEnd,d=i>>20,f=r?c:c+d,p=o?c+d:u;for(let h=f;h<p;h++){let g=s[h];if(h<l&&n===g||h>=l&&g.type===n)return h}if(o){let h=s[l];if(h&&nr(h)&&h.type===n)return l}return null}function Ul(e,t,n,r){let o=e[n],i=t.data;if(o instanceof qo){let s=o;s.resolving&&Bp(kD(i[n]));let c=sp(s.canSeeViewProviders);s.resolving=!0;let l,u=s.injectImpl?ht(s.injectImpl):null,d=fm(e,r,$.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&Mw(n,i[n],t)}finally{u!==null&&ht(u),sp(c),s.resolving=!1,gm()}}return o}function $w(e){if(typeof e=="string")return e.charCodeAt(0)||0;let t=e.hasOwnProperty(jo)?e[jo]:void 0;return typeof t=="number"?t>=0?t&Tm:zw:t}function ap(e,t,n){let r=1<<e;return!!(n[t+(e>>Em)]&r)}function cp(e,t){return!(e&$.Self)&&!(e&$.Host&&t)}var Jn=class{_tNode;_lView;constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return Rm(this._tNode,this._lView,t,ia(r),n)}};function zw(){return new Jn(Mn(),Mt())}function pu(e){return ra(()=>{let t=e.prototype.constructor,n=t[As]||jl(t),r=Object.prototype,o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){let i=o[As]||jl(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function jl(e){return Fp(e)?()=>{let t=jl(pt(e));return t&&t()}:Lr(e)}function qw(e,t,n,r,o){let i=e,s=t;for(;i!==null&&s!==null&&s[z]&2048&&!qs(s);){let c=_m(i,s,n,r|$.Self,Ut);if(c!==Ut)return c;let l=i.parent;if(!l){let u=s[Zp];if(u){let d=u.get(n,Ut,r);if(d!==Ut)return d}l=xm(s),s=s[Ko]}i=l}return o}function xm(e){let t=e[X],n=t.type;return n===2?t.declTNode:n===1?e[_t]:null}function lp(e,t=null,n=null,r){let o=km(e,t,n,r);return o.resolveInjectorInitializers(),o}function km(e,t=null,n=null,r,o=new Set){let i=[n||Ht,zD(e)];return r=r||(typeof e=="object"?void 0:ot(e)),new Bo(i,t||cu(),r||null,o)}var Rt=class e{static THROW_IF_NOT_FOUND=Yn;static NULL=new Us;static create(t,n){if(Array.isArray(t))return lp({name:""},n,t,"");{let r=t.name??"";return lp({name:r},t.parent,t.providers,r)}}static \u0275prov=k({token:e,providedIn:"any",factory:()=>A(qp)});static __NG_ELEMENT_ID__=-1};var Ww=new O("");Ww.__NG_ELEMENT_ID__=e=>{let t=Mn();if(t===null)throw new N(204,!1);if(t.type&2)return t.value;if(e&$.Optional)return null;throw new N(204,!1)};var Nm=!1,ha=(()=>{class e{static __NG_ELEMENT_ID__=Gw;static __NG_ENV_ID__=n=>n}return e})(),Bl=class extends ha{_lView;constructor(t){super(),this._lView=t}onDestroy(t){return am(this._lView,t),()=>lw(this._lView,t)}};function Gw(){return new Bl(Mt())}var Wo=class{},mu=new O("",{providedIn:"root",factory:()=>!1});var Om=new O(""),Am=new O(""),Rn=(()=>{class e{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new ve(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),n}has(n){return this.pendingTasks.has(n)}remove(n){this.pendingTasks.delete(n),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=k({token:e,providedIn:"root",factory:()=>new e})}return e})();var Vl=class extends Ue{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(t=!1){super(),this.__isAsync=t,ew()&&(this.destroyRef=I(ha,{optional:!0})??void 0,this.pendingTasks=I(Rn,{optional:!0})??void 0)}emit(t){let n=re(null);try{super.next(t)}finally{re(n)}}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&typeof t=="object"){let l=t;o=l.next?.bind(l),i=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(i=this.wrapInTimeout(i),o&&(o=this.wrapInTimeout(o)),s&&(s=this.wrapInTimeout(s)));let c=super.subscribe({next:o,error:i,complete:s});return t instanceof be&&t.add(c),c}wrapInTimeout(t){return n=>{let r=this.pendingTasks?.add();setTimeout(()=>{t(n),r!==void 0&&this.pendingTasks?.remove(r)})}}},rt=Vl;function Qs(...e){}function Fm(e){let t,n;function r(){e=Qs;try{n!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(n),t!==void 0&&clearTimeout(t)}catch{}}return t=setTimeout(()=>{e(),r()}),typeof requestAnimationFrame=="function"&&(n=requestAnimationFrame(()=>{e(),r()})),()=>r()}function up(e){return queueMicrotask(()=>e()),()=>{e=Qs}}var gu="isAngularZone",Ks=gu+"_ID",Qw=0,Me=class e{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new rt(!1);onMicrotaskEmpty=new rt(!1);onStable=new rt(!1);onError=new rt(!1);constructor(t){let{enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:o=!1,scheduleInRootZone:i=Nm}=t;if(typeof Zone>"u")throw new N(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!o&&r,s.shouldCoalesceRunChangeDetection=o,s.callbackScheduled=!1,s.scheduleInRootZone=i,Zw(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(gu)===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new N(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new N(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){let i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,Kw,Qs,Qs);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}},Kw={};function yu(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Yw(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function t(){Fm(()=>{e.callbackScheduled=!1,$l(e),e.isCheckStableRunning=!0,yu(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{t()}):e._outer.run(()=>{t()}),$l(e)}function Zw(e){let t=()=>{Yw(e)},n=Qw++;e._inner=e._inner.fork({name:"angular",properties:{[gu]:!0,[Ks]:n,[Ks+n]:!0},onInvokeTask:(r,o,i,s,c,l)=>{if(Jw(l))return r.invokeTask(i,s,c,l);try{return dp(e),r.invokeTask(i,s,c,l)}finally{(e.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&t(),fp(e)}},onInvoke:(r,o,i,s,c,l,u)=>{try{return dp(e),r.invoke(i,s,c,l,u)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!Xw(l)&&t(),fp(e)}},onHasTask:(r,o,i,s)=>{r.hasTask(i,s),o===i&&(s.change=="microTask"?(e._hasPendingMicrotasks=s.microTask,$l(e),yu(e)):s.change=="macroTask"&&(e.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,o,i,s)=>(r.handleError(i,s),e.runOutsideAngular(()=>e.onError.emit(s)),!1)})}function $l(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function dp(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function fp(e){e._nesting--,yu(e)}var zl=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new rt;onMicrotaskEmpty=new rt;onStable=new rt;onError=new rt;run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}};function Jw(e){return Lm(e,"__ignore_ng_zone__")}function Xw(e){return Lm(e,"__scheduler_tick__")}function Lm(e,t){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[t]===!0}var In=class{_console=console;handleError(t){this._console.error("ERROR",t)}},e0=new O("",{providedIn:"root",factory:()=>{let e=I(Me),t=I(In);return n=>e.runOutsideAngular(()=>t.handleError(n))}});function hp(e,t){return Op(e,t)}function t0(e){return Op(Np,e)}var Hm=(hp.required=t0,hp);function n0(){return vu(Mn(),Mt())}function vu(e,t){return new pa(Pn(e,t))}var pa=(()=>{class e{nativeElement;constructor(n){this.nativeElement=n}static __NG_ELEMENT_ID__=n0}return e})();function Um(e){return(e.flags&128)===128}var jm=function(e){return e[e.OnPush=0]="OnPush",e[e.Default=1]="Default",e}(jm||{}),Bm=new Map,r0=0;function o0(){return r0++}function i0(e){Bm.set(e[ca],e)}function ql(e){Bm.delete(e[ca])}var pp="__ngContext__";function ma(e,t){Zn(t)?(e[pp]=t[ca],i0(t)):e[pp]=t}function Vm(e){return zm(e[$o])}function $m(e){return zm(e[It])}function zm(e){for(;e!==null&&!rn(e);)e=e[It];return e}var Wl;function qm(e){Wl=e}function s0(){if(Wl!==void 0)return Wl;if(typeof document<"u")return document;throw new N(210,!1)}var Su=new O("",{providedIn:"root",factory:()=>a0}),a0="ng",bu=new O(""),rr=new O("",{providedIn:"platform",factory:()=>"unknown"});var Du=new O("",{providedIn:"root",factory:()=>s0().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var c0="h",l0="b";var Wm=!1,u0=new O("",{providedIn:"root",factory:()=>Wm});var Gm=function(e){return e[e.CHANGE_DETECTION=0]="CHANGE_DETECTION",e[e.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",e}(Gm||{}),ga=new O(""),mp=new Set;function wu(e){mp.has(e)||(mp.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}var d0=(()=>{class e{impl=null;execute(){this.impl?.execute()}static \u0275prov=k({token:e,providedIn:"root",factory:()=>new e})}return e})();var f0=()=>null;function Qm(e,t,n=!1){return f0(e,t,n)}function Km(e,t){let n=e.contentQueries;if(n!==null){let r=re(null);try{for(let o=0;o<n.length;o+=2){let i=n[o],s=n[o+1];if(s!==-1){let c=e.data[s];dm(i),c.contentQueries(2,t[s],s)}}}finally{re(r)}}}function Gl(e,t,n){dm(0);let r=re(null);try{t(e,n)}finally{re(r)}}function Ym(e,t,n){if(Xp(t)){let r=re(null);try{let o=t.directiveStart,i=t.directiveEnd;for(let s=o;s<i;s++){let c=e.data[s];if(c.contentQueries){let l=n[s];c.contentQueries(1,l,s)}}}finally{re(r)}}}var Bt=function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e}(Bt||{});function Zm(e){return e instanceof Function?e():e}function h0(e,t,n){let r=e.length;for(;;){let o=e.indexOf(t,n);if(o===-1)return o;if(o===0||e.charCodeAt(o-1)<=32){let i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}var Jm="ng-template";function p0(e,t,n,r){let o=0;if(r){for(;o<t.length&&typeof t[o]=="string";o+=2)if(t[o]==="class"&&h0(t[o+1].toLowerCase(),n,0)!==-1)return!0}else if(Tu(e))return!1;if(o=t.indexOf(1,o),o>-1){let i;for(;++o<t.length&&typeof(i=t[o])=="string";)if(i.toLowerCase()===n)return!0}return!1}function Tu(e){return e.type===4&&e.value!==Jm}function m0(e,t,n){let r=e.type===4&&!n?Jm:e.value;return t===r}function g0(e,t,n){let r=4,o=e.attrs,i=o!==null?S0(o):0,s=!1;for(let c=0;c<t.length;c++){let l=t[c];if(typeof l=="number"){if(!s&&!Ct(r)&&!Ct(l))return!1;if(s&&Ct(l))continue;s=!1,r=l|r&1;continue}if(!s)if(r&4){if(r=2|r&1,l!==""&&!m0(e,l,n)||l===""&&t.length===1){if(Ct(r))return!1;s=!0}}else if(r&8){if(o===null||!p0(e,o,l,n)){if(Ct(r))return!1;s=!0}}else{let u=t[++c],d=y0(l,o,Tu(e),n);if(d===-1){if(Ct(r))return!1;s=!0;continue}if(u!==""){let f;if(d>i?f="":f=o[d+1].toLowerCase(),r&2&&u!==f){if(Ct(r))return!1;s=!0}}}}return Ct(r)||s}function Ct(e){return(e&1)===0}function y0(e,t,n,r){if(t===null)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){let s=t[o];if(s===e)return o;if(s===3||s===6)i=!0;else if(s===1||s===2){let c=t[++o];for(;typeof c=="string";)c=t[++o];continue}else{if(s===4)break;if(s===0){o+=4;continue}}o+=i?1:2}return-1}else return b0(t,e)}function v0(e,t,n=!1){for(let r=0;r<t.length;r++)if(g0(e,t[r],n))return!0;return!1}function S0(e){for(let t=0;t<e.length;t++){let n=e[t];if(Ow(n))return t}return e.length}function b0(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){let r=e[n];if(typeof r=="number")return-1;if(r===t)return n;n++}return-1}function gp(e,t){return e?":not("+t.trim()+")":t}function D0(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if(typeof s=="string")if(r&2){let c=e[++n];o+="["+s+(c.length>0?'="'+c+'"':"")+"]"}else r&8?o+="."+s:r&4&&(o+=" "+s);else o!==""&&!Ct(s)&&(t+=gp(i,o),o=""),r=s,i=i||!Ct(r);n++}return o!==""&&(t+=gp(i,o)),t}function w0(e){return e.map(D0).join(",")}function T0(e){let t=[],n=[],r=1,o=2;for(;r<e.length;){let i=e[r];if(typeof i=="string")o===2?i!==""&&t.push(i,e[++r]):o===8&&n.push(i);else{if(!Ct(o))break;o=i}r++}return n.length&&t.push(1,...n),t}var Xm={};function E0(e,t){return e.createText(t)}function eg(e,t,n){return e.createElement(t,n)}function Ys(e,t,n,r,o){e.insertBefore(t,n,r,o)}function tg(e,t,n){e.appendChild(t,n)}function yp(e,t,n,r,o){r!==null?Ys(e,t,n,r,o):tg(e,t,n)}function C0(e,t,n){e.removeChild(null,t,n)}function I0(e,t,n){e.setAttribute(t,"style",n)}function P0(e,t,n){n===""?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}function ng(e,t,n){let{mergedAttrs:r,classes:o,styles:i}=n;r!==null&&Nw(e,t,r),o!==null&&P0(e,t,o),i!==null&&I0(e,t,i)}function rg(e,t,n,r,o,i,s,c,l,u,d){let f=En+r,p=f+o,h=M0(f,p),g=typeof u=="function"?u():u;return h[X]={type:e,blueprint:h,template:n,queries:null,viewQuery:c,declTNode:t,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i=="function"?i():i,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:g,incompleteFirstPass:!1,ssrId:d}}function M0(e,t){let n=[];for(let r=0;r<t;r++)n.push(r<e?null:Xm);return n}function R0(e){let t=e.tView;return t===null||t.incompleteFirstPass?e.tView=rg(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):t}function og(e,t,n,r,o,i,s,c,l,u,d){let f=t.blueprint.slice();return f[nn]=o,f[z]=r|4|128|8|64|1024,(u!==null||e&&e[z]&2048)&&(f[z]|=2048),im(f),f[Ve]=f[Ko]=e,f[yt]=n,f[Tn]=s||e&&e[Tn],f[Pt]=c||e&&e[Pt],f[Vo]=l||e&&e[Vo]||null,f[_t]=i,f[ca]=o0(),f[js]=d,f[Zp]=u,f[jt]=t.type==2?e[jt]:f,f}function _0(e,t,n){let r=Pn(t,e),o=R0(n),i=e[Tn].rendererFactory,s=ag(e,og(e,o,null,ig(n),r,t,null,i.createRenderer(r,n),null,null,null));return e[t.index]=s}function ig(e){let t=16;return e.signals?t=4096:e.onPush&&(t=64),t}function sg(e,t,n,r){if(n===0)return-1;let o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function ag(e,t){return e[$o]?e[ep][It]=t:e[$o]=t,e[ep]=t,t}function x0(e,t,n,r){if(!r)if((t[z]&3)===3){let i=e.preOrderCheckHooks;i!==null&&xs(t,i,n)}else{let i=e.preOrderHooks;i!==null&&ks(t,i,0,n)}tr(n)}var ya=function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e}(ya||{});function Ql(e,t,n,r){let o=re(null);try{let[i,s,c]=e.inputs[n],l=null;(s&ya.SignalBased)!==0&&(l=t[i][wr]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):c!==null&&(r=c.call(t,r)),e.setInput!==null?e.setInput(t,l,r,n,i):tm(t,l,i,r)}finally{re(o)}}function cg(e,t,n,r,o){let i=Iw(),s=r&2;try{tr(-1),s&&t.length>En&&x0(e,t,En,!1),fe(s?2:0,o),n(r,o)}finally{tr(i),fe(s?3:1,o)}}function lg(e,t,n){F0(e,t,n),(n.flags&64)===64&&L0(e,t,n)}function k0(e,t,n=Pn){let r=t.localNames;if(r!==null){let o=t.index+1;for(let i=0;i<r.length;i+=2){let s=r[i+1],c=s===-1?n(t,e):e[s];e[o++]=c}}}function N0(e,t,n,r){let i=r.get(u0,Wm)||n===Bt.ShadowDom,s=e.selectRootElement(t,i);return O0(s),s}function O0(e){A0(e)}var A0=()=>null;function F0(e,t,n){let r=n.directiveStart,o=n.directiveEnd;Yo(n)&&_0(t,n,e.data[r+n.componentOffset]),e.firstCreatePass||Cm(n,t);let i=n.initialInputs;for(let s=r;s<o;s++){let c=e.data[s],l=Ul(t,e,s,n);if(ma(l,t),i!==null&&j0(t,s-r,l,c,n,i),nr(c)){let u=Cn(n.index,t);u[yt]=Ul(t,e,s,n)}}}function L0(e,t,n){let r=n.directiveStart,o=n.directiveEnd,i=n.index,s=Ew();try{tr(i);for(let c=r;c<o;c++){let l=e.data[c],u=t[c];Fl(c),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&H0(l,u)}}finally{tr(-1),Fl(s)}}function H0(e,t){e.hostBindings!==null&&e.hostBindings(1,t)}function U0(e,t){let n=e.directiveRegistry,r=null;if(n)for(let o=0;o<n.length;o++){let i=n[o];v0(t,i.selectors,!1)&&(r??=[],nr(i)?r.unshift(i):r.push(i))}return r}function j0(e,t,n,r,o,i){let s=i[t];if(s!==null)for(let c=0;c<s.length;c+=2){let l=s[c],u=s[c+1];Ql(r,n,l,u)}}function ug(e,t){let n=e[Vo],r=n?n.get(In,null):null;r&&r.handleError(t)}function dg(e,t,n,r,o){let i=e.inputs?.[r],s=e.hostDirectiveInputs?.[r],c=!1;if(s)for(let l=0;l<s.length;l+=2){let u=s[l],d=s[l+1],f=t.data[u];Ql(f,n[u],d,o),c=!0}if(i)for(let l of i){let u=n[l],d=t.data[l];Ql(d,u,r,o),c=!0}return c}function B0(e,t){let n=Cn(t,e),r=n[X];V0(r,n);let o=n[nn];o!==null&&n[js]===null&&(n[js]=Qm(o,n[Vo])),fe(18),fg(r,n,n[yt]),fe(19,n[yt])}function V0(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}function fg(e,t,n){du(t);try{let r=e.viewQuery;r!==null&&Gl(1,r,n);let o=e.template;o!==null&&cg(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),t[aa]?.finishViewCreation(e),e.staticContentQueries&&Km(e,t),e.staticViewQueries&&Gl(2,e.viewQuery,n);let i=e.components;i!==null&&$0(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[z]&=-5,fu()}}function $0(e,t){for(let n=0;n<t.length;n++)B0(e,t[n])}function vp(e,t){return!t||t.firstChild===null||Um(e)}var z0;function Eu(e,t){return z0(e,t)}var or=function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e}(or||{});function hg(e){return(e.flags&32)===32}function Ar(e,t,n,r,o){if(r!=null){let i,s=!1;rn(r)?i=r:Zn(r)&&(s=!0,r=r[nn]);let c=en(r);e===0&&n!==null?o==null?tg(t,n,c):Ys(t,n,c,o||null,!0):e===1&&n!==null?Ys(t,n,c,o||null,!0):e===2?C0(t,c,s):e===3&&t.destroyNode(c),i!=null&&nT(t,e,i,n,o)}}function q0(e,t){pg(e,t),t[nn]=null,t[_t]=null}function W0(e,t,n,r,o,i){r[nn]=o,r[_t]=t,va(e,r,n,1,o,i)}function pg(e,t){t[Tn].changeDetectionScheduler?.notify(9),va(e,t,t[Pt],2,null,null)}function G0(e){let t=e[$o];if(!t)return Cl(e[X],e);for(;t;){let n=null;if(Zn(t))n=t[$o];else{let r=t[gt];r&&(n=r)}if(!n){for(;t&&!t[It]&&t!==e;)Zn(t)&&Cl(t[X],t),t=t[Ve];t===null&&(t=e),Zn(t)&&Cl(t[X],t),n=t&&t[It]}t=n}}function Cu(e,t){let n=e[zs],r=n.indexOf(t);n.splice(r,1)}function mg(e,t){if(Zo(t))return;let n=t[Pt];n.destroyNode&&va(e,t,n,3,null,null),G0(t)}function Cl(e,t){if(Zo(t))return;let n=re(null);try{t[z]&=-129,t[z]|=256,t[mt]&&Xc(t[mt]),K0(e,t),Q0(e,t),t[X].type===1&&t[Pt].destroy();let r=t[zo];if(r!==null&&rn(t[Ve])){r!==t[Ve]&&Cu(r,t);let o=t[aa];o!==null&&o.detachView(e)}ql(t)}finally{re(n)}}function Q0(e,t){let n=e.cleanup,r=t[Bs];if(n!==null)for(let s=0;s<n.length-1;s+=2)if(typeof n[s]=="string"){let c=n[s+3];c>=0?r[c]():r[-c].unsubscribe(),s+=2}else{let c=r[n[s+1]];n[s].call(c)}r!==null&&(t[Bs]=null);let o=t[wn];if(o!==null){t[wn]=null;for(let s=0;s<o.length;s++){let c=o[s];c()}}let i=t[Vs];if(i!==null){t[Vs]=null;for(let s of i)s.destroy()}}function K0(e,t){let n;if(e!=null&&(n=e.destroyHooks)!=null)for(let r=0;r<n.length;r+=2){let o=t[n[r]];if(!(o instanceof qo)){let i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){let c=o[i[s]],l=i[s+1];fe(4,c,l);try{l.call(c)}finally{fe(5,c,l)}}else{fe(4,o,i);try{i.call(o)}finally{fe(5,o,i)}}}}}function Y0(e,t,n){return Z0(e,t.parent,n)}function Z0(e,t,n){let r=t;for(;r!==null&&r.type&168;)t=r,r=t.parent;if(r===null)return n[nn];if(Yo(r)){let{encapsulation:o}=e.data[r.directiveStart+r.componentOffset];if(o===Bt.None||o===Bt.Emulated)return null}return Pn(r,n)}function J0(e,t,n){return eT(e,t,n)}function X0(e,t,n){return e.type&40?Pn(e,n):null}var eT=X0,Sp;function gg(e,t,n,r){let o=Y0(e,r,t),i=t[Pt],s=r.parent||t[_t],c=J0(s,r,t);if(o!=null)if(Array.isArray(n))for(let l=0;l<n.length;l++)yp(i,o,n[l],c,!1);else yp(i,o,n,c,!1);Sp!==void 0&&Sp(i,r,t,n,o)}function Uo(e,t){if(t!==null){let n=t.type;if(n&3)return Pn(t,e);if(n&4)return Kl(-1,e[t.index]);if(n&8){let r=t.child;if(r!==null)return Uo(e,r);{let o=e[t.index];return rn(o)?Kl(-1,o):en(o)}}else{if(n&128)return Uo(e,t.next);if(n&32)return Eu(t,e)()||en(e[t.index]);{let r=yg(e,t);if(r!==null){if(Array.isArray(r))return r[0];let o=er(e[jt]);return Uo(o,r)}else return Uo(e,t.next)}}}return null}function yg(e,t){if(t!==null){let r=e[jt][_t],o=t.projection;return r.projection[o]}return null}function Kl(e,t){let n=gt+e+1;if(n<t.length){let r=t[n],o=r[X].firstChild;if(o!==null)return Uo(r,o)}return t[Xn]}function Iu(e,t,n,r,o,i,s){for(;n!=null;){if(n.type===128){n=n.next;continue}let c=r[n.index],l=n.type;if(s&&t===0&&(c&&ma(en(c),r),n.flags|=2),!hg(n))if(l&8)Iu(e,t,n.child,r,o,i,!1),Ar(t,e,o,c,i);else if(l&32){let u=Eu(n,r),d;for(;d=u();)Ar(t,e,o,d,i);Ar(t,e,o,c,i)}else l&16?tT(e,t,r,n,o,i):Ar(t,e,o,c,i);n=s?n.projectionNext:n.next}}function va(e,t,n,r,o,i){Iu(n,r,e.firstChild,t,o,i,!1)}function tT(e,t,n,r,o,i){let s=n[jt],l=s[_t].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++){let d=l[u];Ar(t,e,o,d,i)}else{let u=l,d=s[Ve];Um(r)&&(u.flags|=128),Iu(e,t,u,d,o,i,!0)}}function nT(e,t,n,r,o){let i=n[Xn],s=en(n);i!==s&&Ar(t,e,r,i,o);for(let c=gt;c<n.length;c++){let l=n[c];va(l[X],l,e,t,r,i)}}function Zs(e,t,n,r,o=!1){for(;n!==null;){if(n.type===128){n=o?n.projectionNext:n.next;continue}let i=t[n.index];i!==null&&r.push(en(i)),rn(i)&&rT(i,r);let s=n.type;if(s&8)Zs(e,t,n.child,r);else if(s&32){let c=Eu(n,t),l;for(;l=c();)r.push(l)}else if(s&16){let c=yg(t,n);if(Array.isArray(c))r.push(...c);else{let l=er(t[jt]);Zs(l[X],l,c,r,!0)}}n=o?n.projectionNext:n.next}return r}function rT(e,t){for(let n=gt;n<e.length;n++){let r=e[n],o=r[X].firstChild;o!==null&&Zs(r[X],r,o,t)}e[Xn]!==e[nn]&&t.push(e[Xn])}function vg(e){if(e[Dl]!==null){for(let t of e[Dl])t.impl.addSequence(t);e[Dl].length=0}}var Sg=[];function oT(e){return e[mt]??iT(e)}function iT(e){let t=Sg.pop()??Object.create(aT);return t.lView=e,t}function sT(e){e.lView[mt]!==e&&(e.lView=null,Sg.push(e))}var aT=ue(R({},rs),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{ua(e.lView)},consumerOnSignalRead(){this.lView[mt]=this}});function cT(e){let t=e[mt]??Object.create(lT);return t.lView=e,t}var lT=ue(R({},rs),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{let t=er(e.lView);for(;t&&!bg(t[X]);)t=er(t);t&&sm(t)},consumerOnSignalRead(){this.lView[mt]=this}});function bg(e){return e.type!==2}function Dg(e){if(e[Vs]===null)return;let t=!0;for(;t;){let n=!1;for(let r of e[Vs])r.dirty&&(n=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));t=n&&!!(e[z]&8192)}}var uT=100;function wg(e,t=!0,n=0){let o=e[Tn].rendererFactory,i=!1;i||o.begin?.();try{dT(e,n)}catch(s){throw t&&ug(e,s),s}finally{i||o.end?.()}}function dT(e,t){let n=um();try{rp(!0),Yl(e,t);let r=0;for(;la(e);){if(r===uT)throw new N(103,!1);r++,Yl(e,1)}}finally{rp(n)}}function fT(e,t,n,r){if(Zo(t))return;let o=t[z],i=!1,s=!1;du(t);let c=!0,l=null,u=null;i||(bg(e)?(u=oT(t),l=Zc(u)):lh()===null?(c=!1,u=cT(t),l=Zc(u)):t[mt]&&(Xc(t[mt]),t[mt]=null));try{im(t),Dw(e.bindingStartIndex),n!==null&&cg(e,t,n,2,r);let d=(o&3)===3;if(!i)if(d){let h=e.preOrderCheckHooks;h!==null&&xs(t,h,null)}else{let h=e.preOrderHooks;h!==null&&ks(t,h,0,null),wl(t,0)}if(s||hT(t),Dg(t),Tg(t,0),e.contentQueries!==null&&Km(e,t),!i)if(d){let h=e.contentCheckHooks;h!==null&&xs(t,h)}else{let h=e.contentHooks;h!==null&&ks(t,h,1),wl(t,1)}mT(e,t);let f=e.components;f!==null&&Cg(t,f,0);let p=e.viewQuery;if(p!==null&&Gl(2,p,r),!i)if(d){let h=e.viewCheckHooks;h!==null&&xs(t,h)}else{let h=e.viewHooks;h!==null&&ks(t,h,2),wl(t,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),t[bl]){for(let h of t[bl])h();t[bl]=null}i||(vg(t),t[z]&=-73)}catch(d){throw i||ua(t),d}finally{u!==null&&(fh(u,l),c&&sT(u)),fu()}}function Tg(e,t){for(let n=Vm(e);n!==null;n=$m(n))for(let r=gt;r<n.length;r++){let o=n[r];Eg(o,t)}}function hT(e){for(let t=Vm(e);t!==null;t=$m(t)){if(!(t[z]&2))continue;let n=t[zs];for(let r=0;r<n.length;r++){let o=n[r];sm(o)}}}function pT(e,t,n){fe(18);let r=Cn(t,e);Eg(r,n),fe(19,r[yt])}function Eg(e,t){uu(e)&&Yl(e,t)}function Yl(e,t){let r=e[X],o=e[z],i=e[mt],s=!!(t===0&&o&16);if(s||=!!(o&64&&t===0),s||=!!(o&1024),s||=!!(i?.dirty&&Jc(i)),s||=!1,i&&(i.dirty=!1),e[z]&=-9217,s)fT(r,e,r.template,e[yt]);else if(o&8192){Dg(e),Tg(e,1);let c=r.components;c!==null&&Cg(e,c,1),vg(e)}}function Cg(e,t,n){for(let r=0;r<t.length;r++)pT(e,t[r],n)}function mT(e,t){let n=e.hostBindingOpCodes;if(n!==null)try{for(let r=0;r<n.length;r++){let o=n[r];if(o<0)tr(~o);else{let i=o,s=n[++r],c=n[++r];Tw(s,i);let l=t[i];fe(24,l),c(2,l),fe(25,l)}}}finally{tr(-1)}}function Pu(e,t){let n=um()?64:1088;for(e[Tn].changeDetectionScheduler?.notify(t);e;){e[z]|=n;let r=er(e);if(qs(e)&&!r)return e;e=r}return null}function gT(e,t,n,r){return[e,!0,0,t,null,r,null,n,null,null]}function yT(e,t,n,r=!0){let o=t[X];if(vT(o,t,e,n),r){let s=Kl(n,e),c=t[Pt],l=c.parentNode(e[Xn]);l!==null&&W0(o,e[_t],c,t,l,s)}let i=t[js];i!==null&&i.firstChild!==null&&(i.firstChild=null)}function Zl(e,t){if(e.length<=gt)return;let n=gt+t,r=e[n];if(r){let o=r[zo];o!==null&&o!==e&&Cu(o,r),t>0&&(e[n-1][It]=r[It]);let i=Hs(e,gt+t);q0(r[X],r);let s=i[aa];s!==null&&s.detachView(i[X]),r[Ve]=null,r[It]=null,r[z]&=-129}return r}function vT(e,t,n,r){let o=gt+r,i=n.length;r>0&&(n[o-1][It]=t),r<i-gt?(t[It]=n[o],zp(n,gt+r,t)):(n.push(t),t[It]=null),t[Ve]=n;let s=t[zo];s!==null&&n!==s&&Ig(s,t);let c=t[aa];c!==null&&c.insertView(e),Ol(t),t[z]|=128}function Ig(e,t){let n=e[zs],r=t[Ve];if(Zn(r))e[z]|=2;else{let o=r[Ve][jt];t[jt]!==o&&(e[z]|=2)}n===null?e[zs]=[t]:n.push(t)}var Js=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let t=this._lView,n=t[X];return Zs(n,t,n.firstChild,[])}constructor(t,n,r=!0){this._lView=t,this._cdRefInjectingView=n,this.notifyErrorHandler=r}get context(){return this._lView[yt]}set context(t){this._lView[yt]=t}get destroyed(){return Zo(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[Ve];if(rn(t)){let n=t[$s],r=n?n.indexOf(this):-1;r>-1&&(Zl(t,r),Hs(n,r))}this._attachedToViewContainer=!1}mg(this._lView[X],this._lView)}onDestroy(t){am(this._lView,t)}markForCheck(){Pu(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[z]&=-129}reattach(){Ol(this._lView),this._lView[z]|=128}detectChanges(){this._lView[z]|=1024,wg(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new N(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=qs(this._lView),n=this._lView[zo];n!==null&&!t&&Cu(n,this._lView),pg(this._lView[X],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new N(902,!1);this._appRef=t;let n=qs(this._lView),r=this._lView[zo];r!==null&&!n&&Ig(r,this._lView),Ol(this._lView)}};function Pg(e,t,n,r,o){let i=e.data[t];if(i===null)i=ST(e,t,n,r,o),ww()&&(i.flags|=32);else if(i.type&64){i.type=n,i.value=r,i.attrs=o;let s=Sw();i.injectorIndex=s===null?-1:s.injectorIndex}return fa(i,!0),i}function ST(e,t,n,r,o){let i=cm(),s=lm(),c=s?i:i&&i.parent,l=e.data[t]=DT(e,c,n,t,r,o);return bT(e,l,i,s),l}function bT(e,t,n,r){e.firstChild===null&&(e.firstChild=t),n!==null&&(r?n.child==null&&t.parent!==null&&(n.child=t):n.next===null&&(n.next=t,t.prev=n))}function DT(e,t,n,r,o,i){let s=t?t.injectorIndex:-1,c=0;return gw()&&(c|=128),{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:c,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var uF=new RegExp(`^(\\d+)*(${l0}|${c0})*(.*)`);var wT=()=>null;function bp(e,t){return wT(e,t)}var TT=class{},Mg=class{},Jl=class{resolveComponentFactory(t){throw Error(`No component factory found for ${ot(t)}.`)}},Sa=class{static NULL=new Jl},Br=class{};var ET=(()=>{class e{static \u0275prov=k({token:e,providedIn:"root",factory:()=>null})}return e})();function Dp(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(t!==null)for(let s=0;s<t.length;s++){let c=t[s];if(typeof c=="number")i=c;else if(i==1)o=Gh(o,c);else if(i==2){let l=c,u=t[++s];r=Gh(r,l+": "+u+";")}}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}function q(e,t=$.Default){let n=Mt();if(n===null)return A(e,t);let r=Mn();return Rm(r,n,pt(e),t)}function CT(e,t,n,r,o){let i=r===null?null:{"":-1},s=o(e,n);if(s!==null){let c,l=null,u=null,d=PT(s);d===null?c=s:[c,l,u]=d,_T(e,t,n,c,i,l,u)}i!==null&&r!==null&&IT(n,r,i)}function IT(e,t,n){let r=e.localNames=[];for(let o=0;o<t.length;o+=2){let i=n[t[o+1]];if(i==null)throw new N(-301,!1);r.push(t[o],i)}}function PT(e){let t=null,n=!1;for(let s=0;s<e.length;s++){let c=e[s];if(s===0&&nr(c)&&(t=c),c.findHostDirectiveDefs!==null){n=!0;break}}if(!n)return null;let r=null,o=null,i=null;for(let s of e)s.findHostDirectiveDefs!==null&&(r??=[],o??=new Map,i??=new Map,MT(s,r,i,o)),s===t&&(r??=[],r.push(s));return r!==null?(r.push(...t===null?e:e.slice(1)),[r,o,i]):null}function MT(e,t,n,r){let o=t.length;e.findHostDirectiveDefs(e,t,r),n.set(e,[o,t.length-1])}function RT(e,t,n){t.componentOffset=n,(e.components??=[]).push(t.index)}function _T(e,t,n,r,o,i,s){let c=r.length,l=!1;for(let p=0;p<c;p++){let h=r[p];!l&&nr(h)&&(l=!0,RT(e,n,p)),jw(Cm(n,t),e,h.type)}FT(n,e.data.length,c);for(let p=0;p<c;p++){let h=r[p];h.providersResolver&&h.providersResolver(h)}let u=!1,d=!1,f=sg(e,t,c,null);c>0&&(n.directiveToIndex=new Map);for(let p=0;p<c;p++){let h=r[p];if(n.mergedAttrs=Dm(n.mergedAttrs,h.hostAttrs),kT(e,n,t,f,h),AT(f,h,o),s!==null&&s.has(h)){let[y,b]=s.get(h);n.directiveToIndex.set(h.type,[f,y+n.directiveStart,b+n.directiveStart])}else(i===null||!i.has(h))&&n.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(n.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(n.flags|=64);let g=h.type.prototype;!u&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((e.preOrderHooks??=[]).push(n.index),u=!0),!d&&(g.ngOnChanges||g.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(n.index),d=!0),f++}xT(e,n,i)}function xT(e,t,n){for(let r=t.directiveStart;r<t.directiveEnd;r++){let o=e.data[r];if(n===null||!n.has(o))wp(0,t,o,r),wp(1,t,o,r),Ep(t,r,!1);else{let i=n.get(o);Tp(0,t,i,r),Tp(1,t,i,r),Ep(t,r,!0)}}}function wp(e,t,n,r){let o=e===0?n.inputs:n.outputs;for(let i in o)if(o.hasOwnProperty(i)){let s;e===0?s=t.inputs??={}:s=t.outputs??={},s[i]??=[],s[i].push(r),Rg(t,i)}}function Tp(e,t,n,r){let o=e===0?n.inputs:n.outputs;for(let i in o)if(o.hasOwnProperty(i)){let s=o[i],c;e===0?c=t.hostDirectiveInputs??={}:c=t.hostDirectiveOutputs??={},c[s]??=[],c[s].push(r,i),Rg(t,s)}}function Rg(e,t){t==="class"?e.flags|=8:t==="style"&&(e.flags|=16)}function Ep(e,t,n){let{attrs:r,inputs:o,hostDirectiveInputs:i}=e;if(r===null||!n&&o===null||n&&i===null||Tu(e)){e.initialInputs??=[],e.initialInputs.push(null);return}let s=null,c=0;for(;c<r.length;){let l=r[c];if(l===0){c+=4;continue}else if(l===5){c+=2;continue}else if(typeof l=="number")break;if(!n&&o.hasOwnProperty(l)){let u=o[l];for(let d of u)if(d===t){s??=[],s.push(l,r[c+1]);break}}else if(n&&i.hasOwnProperty(l)){let u=i[l];for(let d=0;d<u.length;d+=2)if(u[d]===t){s??=[],s.push(u[d+1],r[c+1]);break}}c+=2}e.initialInputs??=[],e.initialInputs.push(s)}function kT(e,t,n,r,o){e.data[r]=o;let i=o.factory||(o.factory=Lr(o.type,!0)),s=new qo(i,nr(o),q);e.blueprint[r]=s,n[r]=s,NT(e,t,r,sg(e,n,o.hostVars,Xm),o)}function NT(e,t,n,r,o){let i=o.hostBindings;if(i){let s=e.hostBindingOpCodes;s===null&&(s=e.hostBindingOpCodes=[]);let c=~t.index;OT(s)!=c&&s.push(c),s.push(n,r,i)}}function OT(e){let t=e.length;for(;t>0;){let n=e[--t];if(typeof n=="number"&&n<0)return n}return 0}function AT(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;nr(t)&&(n[""]=e)}}function FT(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function _g(e,t,n,r,o,i,s,c){let l=t.consts,u=np(l,s),d=Pg(t,e,2,r,u);return i&&CT(t,n,d,np(l,c),o),d.mergedAttrs=Dm(d.mergedAttrs,d.attrs),d.attrs!==null&&Dp(d,d.attrs,!1),d.mergedAttrs!==null&&Dp(d,d.mergedAttrs,!0),t.queries!==null&&t.queries.elementStart(t,d),d}function xg(e,t){Rw(e,t),Xp(t)&&e.queries.elementEnd(t)}var Xs=class extends Sa{ngModule;constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){let n=jr(t);return new Go(n,this.ngModule)}};function LT(e){return Object.keys(e).map(t=>{let[n,r,o]=e[t],i={propName:n,templateName:t,isSignal:(r&ya.SignalBased)!==0};return o&&(i.transform=o),i})}function HT(e){return Object.keys(e).map(t=>({propName:e[t],templateName:t}))}function UT(e,t,n){let r=t instanceof Ke?t:t?.injector;return r&&e.getStandaloneInjector!==null&&(r=e.getStandaloneInjector(r)||r),r?new Ll(n,r):n}function jT(e){let t=e.get(Br,null);if(t===null)throw new N(407,!1);let n=e.get(ET,null),r=e.get(Wo,null);return{rendererFactory:t,sanitizer:n,changeDetectionScheduler:r}}function BT(e,t){let n=(e.selectors[0][0]||"div").toLowerCase();return eg(t,n,n==="svg"?iw:n==="math"?sw:null)}var Go=class extends Mg{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=LT(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=HT(this.componentDef.outputs),this.cachedOutputs}constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=w0(t.selectors),this.ngContentSelectors=t.ngContentSelectors??[],this.isBoundToModule=!!n}create(t,n,r,o){fe(22);let i=re(null);try{let s=this.componentDef,c=r?["ng-version","19.2.3"]:T0(this.componentDef.selectors[0]),l=rg(0,null,null,1,0,null,null,null,null,[c],null),u=UT(s,o||this.ngModule,t),d=jT(u),f=d.rendererFactory.createRenderer(null,s),p=r?N0(f,r,s.encapsulation,u):BT(s,f),h=og(null,l,null,512|ig(s),null,null,d,f,u,null,Qm(p,u,!0));h[En]=p,du(h);let g=null;try{let y=_g(En,l,h,"#host",()=>[this.componentDef],!0,0);p&&(ng(f,p,y),ma(p,h)),lg(l,h,y),Ym(l,y,h),xg(l,y),n!==void 0&&VT(y,this.ngContentSelectors,n),g=Cn(y.index,h),h[yt]=g[yt],fg(l,h,null)}catch(y){throw g!==null&&ql(g),ql(h),y}finally{fe(23),fu()}return new Xl(this.componentType,h)}finally{re(i)}}},Xl=class extends TT{_rootLView;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(t,n){super(),this._rootLView=n,this._tNode=aw(n[X],En),this.location=vu(this._tNode,n),this.instance=Cn(this._tNode.index,n)[yt],this.hostView=this.changeDetectorRef=new Js(n,void 0,!1),this.componentType=t}setInput(t,n){let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),n))return;let o=this._rootLView,i=dg(r,o[X],o,t,n);this.previousInputValues.set(t,n);let s=Cn(r.index,o);Pu(s,1)}get injector(){return new Jn(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function VT(e,t,n){let r=e.projection=[];for(let o=0;o<t.length;o++){let i=n[o];r.push(i!=null&&i.length?Array.from(i):null)}}var ba=(()=>{class e{static __NG_ELEMENT_ID__=$T}return e})();function $T(){let e=Mn();return qT(e,Mt())}var zT=ba,kg=class extends zT{_lContainer;_hostTNode;_hostLView;constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return vu(this._hostTNode,this._hostLView)}get injector(){return new Jn(this._hostTNode,this._hostLView)}get parentInjector(){let t=hu(this._hostTNode,this._hostLView);if(wm(t)){let n=Gs(t,this._hostLView),r=Ws(t),o=n[X].data[r+8];return new Jn(o,n)}else return new Jn(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let n=Cp(this._lContainer);return n!==null&&n[t]||null}get length(){return this._lContainer.length-gt}createEmbeddedView(t,n,r){let o,i;typeof r=="number"?o=r:r!=null&&(o=r.index,i=r.injector);let s=bp(this._lContainer,t.ssrId),c=t.createEmbeddedViewImpl(n||{},i,s);return this.insertImpl(c,o,vp(this._hostTNode,s)),c}createComponent(t,n,r,o,i){let s=t&&!tw(t),c;if(s)c=n;else{let g=n||{};c=g.index,r=g.injector,o=g.projectableNodes,i=g.environmentInjector||g.ngModuleRef}let l=s?t:new Go(jr(t)),u=r||this.parentInjector;if(!i&&l.ngModule==null){let y=(s?u:this.parentInjector).get(Ke,null);y&&(i=y)}let d=jr(l.componentType??{}),f=bp(this._lContainer,d?.id??null),p=f?.firstChild??null,h=l.create(u,o,p,i);return this.insertImpl(h.hostView,c,vp(this._hostTNode,f)),h}insert(t,n){return this.insertImpl(t,n,!0)}insertImpl(t,n,r){let o=t._lView;if(cw(o)){let c=this.indexOf(t);if(c!==-1)this.detach(c);else{let l=o[Ve],u=new kg(l,l[_t],l[Ve]);u.detach(u.indexOf(t))}}let i=this._adjustIndex(n),s=this._lContainer;return yT(s,o,i,r),t.attachToViewContainerRef(),zp(Il(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){let n=Cp(this._lContainer);return n!==null?n.indexOf(t):-1}remove(t){let n=this._adjustIndex(t,-1),r=Zl(this._lContainer,n);r&&(Hs(Il(this._lContainer),n),mg(r[X],r))}detach(t){let n=this._adjustIndex(t,-1),r=Zl(this._lContainer,n);return r&&Hs(Il(this._lContainer),n)!=null?new Js(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function Cp(e){return e[$s]}function Il(e){return e[$s]||(e[$s]=[])}function qT(e,t){let n,r=t[e.index];return rn(r)?n=r:(n=gT(r,t,null,e),t[e.index]=n,ag(t,n)),GT(n,t,e,r),new kg(n,e,t)}function WT(e,t){let n=e[Pt],r=n.createComment(""),o=Pn(t,e),i=n.parentNode(o);return Ys(n,i,r,n.nextSibling(o),!1),r}var GT=QT;function QT(e,t,n,r){if(e[Xn])return;let o;n.type&8?o=en(r):o=WT(t,n),e[Xn]=o}var Vr=class{},Mu=class{};var eu=class extends Vr{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Xs(this);constructor(t,n,r,o=!0){super(),this.ngModuleType=t,this._parent=n;let i=Gp(t);this._bootstrapComponents=Zm(i.bootstrap),this._r3Injector=km(t,n,[{provide:Vr,useValue:this},{provide:Sa,useValue:this.componentFactoryResolver},...r],ot(t),new Set(["environment"])),o&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}},tu=class extends Mu{moduleType;constructor(t){super(),this.moduleType=t}create(t){return new eu(this.moduleType,t,[])}};var ea=class extends Vr{injector;componentFactoryResolver=new Xs(this);instance=null;constructor(t){super();let n=new Bo([...t.providers,{provide:Vr,useValue:this},{provide:Sa,useValue:this.componentFactoryResolver}],t.parent||cu(),t.debugName,new Set(["environment"]));this.injector=n,t.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function Ru(e,t,n=null){return new ea({providers:e,parent:t,debugName:n,runEnvironmentInitializers:!0}).injector}var KT=(()=>{class e{_injector;cachedInjectors=new Map;constructor(n){this._injector=n}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n)){let r=Qp(!1,n.type),o=r.length>0?Ru([r],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n,o)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=k({token:e,providedIn:"environment",factory:()=>new e(A(Ke))})}return e})();function ee(e){return ra(()=>{let t=Ng(e),n=ue(R({},t),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection===jm.OnPush,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&e.dependencies||null,getStandaloneInjector:t.standalone?o=>o.get(KT).getOrCreateStandaloneInjector(n):null,getExternalStyles:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||Bt.Emulated,styles:e.styles||Ht,_:null,schemas:e.schemas||null,tView:null,id:""});t.standalone&&wu("NgStandalone"),Og(n);let r=e.dependencies;return n.directiveDefs=Ip(r,!1),n.pipeDefs=Ip(r,!0),n.id=eE(n),n})}function YT(e){return jr(e)||VD(e)}function ZT(e){return e!==null}function zr(e){return ra(()=>({type:e.type,bootstrap:e.bootstrap||Ht,declarations:e.declarations||Ht,imports:e.imports||Ht,exports:e.exports||Ht,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function JT(e,t){if(e==null)return Hr;let n={};for(let r in e)if(e.hasOwnProperty(r)){let o=e[r],i,s,c,l;Array.isArray(o)?(c=o[0],i=o[1],s=o[2]??i,l=o[3]||null):(i=o,s=o,c=ya.None,l=null),n[i]=[r,c,l],t[i]=s}return n}function XT(e){if(e==null)return Hr;let t={};for(let n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}function _u(e){return ra(()=>{let t=Ng(e);return Og(t),t})}function Ng(e){let t={};return{type:e.type,providersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:t,inputConfig:e.inputs||Hr,exportAs:e.exportAs||null,standalone:e.standalone??!0,signals:e.signals===!0,selectors:e.selectors||Ht,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:JT(e.inputs,t),outputs:XT(e.outputs),debugInfo:null}}function Og(e){e.features?.forEach(t=>t(e))}function Ip(e,t){if(!e)return null;let n=t?$D:YT;return()=>(typeof e=="function"?e():e).map(r=>n(r)).filter(ZT)}function eE(e){let t=0,n=typeof e.consts=="function"?"":e.consts,r=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,n,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery];for(let i of r.join("|"))t=Math.imul(31,t)+i.charCodeAt(0)<<0;return t+=2147483648,"c"+t}var xu=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"platform"})}return e})();var Ag=new O("");var tE=(()=>{class e{static \u0275prov=k({token:e,providedIn:"root",factory:()=>new nu})}return e})(),nu=class{queuedEffectCount=0;queues=new Map;schedule(t){this.enqueue(t)}remove(t){let n=t.zone,r=this.queues.get(n);r.has(t)&&(r.delete(t),this.queuedEffectCount--)}enqueue(t){let n=t.zone;this.queues.has(n)||this.queues.set(n,new Set);let r=this.queues.get(n);r.has(t)||(this.queuedEffectCount++,r.add(t))}flush(){for(;this.queuedEffectCount>0;)for(let[t,n]of this.queues)t===null?this.flushQueue(n):t.run(()=>this.flushQueue(n))}flushQueue(t){for(let n of t)t.delete(n),this.queuedEffectCount--,n.run()}};function Jo(e){return!!e&&typeof e.then=="function"}function Fg(e){return!!e&&typeof e.subscribe=="function"}var Lg=new O("");var Hg=(()=>{class e{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((n,r)=>{this.resolve=n,this.reject=r});appInits=I(Lg,{optional:!0})??[];injector=I(Rt);constructor(){}runInitializers(){if(this.initialized)return;let n=[];for(let o of this.appInits){let i=it(this.injector,o);if(Jo(i))n.push(i);else if(Fg(i)){let s=new Promise((c,l)=>{i.subscribe({complete:c,error:l})});n.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),n.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Da=new O("");function nE(){yh(()=>{throw new N(600,!1)})}function rE(e){return e.isBoundToModule}var oE=10;var tn=(()=>{class e{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=I(e0);afterRenderManager=I(d0);zonelessEnabled=I(mu);rootEffectScheduler=I(tE);dirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new Ue;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=I(Rn).hasPendingTasks.pipe(F(n=>!n));constructor(){I(ga,{optional:!0})}whenStable(){let n;return new Promise(r=>{n=this.isStable.subscribe({next:o=>{o&&r()}})}).finally(()=>{n.unsubscribe()})}_injector=I(Ke);_rendererFactory=null;get injector(){return this._injector}bootstrap(n,r){fe(10);let o=n instanceof Mg;if(!this._injector.get(Hg).done){let p="";throw new N(405,p)}let s;o?s=n:s=this._injector.get(Sa).resolveComponentFactory(n),this.componentTypes.push(s.componentType);let c=rE(s)?void 0:this._injector.get(Vr),l=r||s.selector,u=s.create(Rt.NULL,[],l,c),d=u.location.nativeElement,f=u.injector.get(Ag,null);return f?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),Ns(this.components,u),f?.unregisterApplication(d)}),this._loadComponent(u),fe(11,u),u}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){fe(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(Gm.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new N(101,!1);let n=re(null);try{this._runningTick=!0,this.synchronize()}catch(r){this.internalErrorHandler(r)}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,re(n),this.afterTick.next(),fe(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Br,null,{optional:!0}));let n=0;for(;this.dirtyFlags!==0&&n++<oE;)fe(14),this.synchronizeOnce(),fe(15)}synchronizeOnce(){if(this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let n=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r,notifyErrorHandler:o}of this.allViews)iE(r,o,n,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:n})=>la(n))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(n){let r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){let r=n;Ns(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(Da,[]).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>Ns(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new N(406,!1);let n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Ns(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function iE(e,t,n,r){if(!n&&!la(e))return;wg(e,t,n&&!r?0:1)}function Pp(e,t,n,r,o){dg(t,e,n,o?"class":"style",r)}function oe(e,t,n,r){let o=Mt(),i=da(),s=En+e,c=o[Pt],l=i.firstCreatePass?_g(s,i,o,t,U0,mw(),n,r):i.data[s],u=sE(i,o,l,c,t,e);o[s]=u;let d=em(l);return fa(l,!0),ng(c,u,l),!hg(l)&&vm()&&gg(i,o,u,l),(fw()===0||d)&&ma(u,o),hw(),d&&(lg(i,o,l),Ym(i,l,o)),r!==null&&k0(o,l),oe}function pe(){let e=Mn();lm()?bw():(e=e.parent,fa(e,!1));let t=e;yw(t)&&vw(),pw();let n=da();return n.firstCreatePass&&xg(n,t),t.classesWithoutHost!=null&&xw(t)&&Pp(n,t,Mt(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&kw(t)&&Pp(n,t,Mt(),t.stylesWithoutHost,!1),pe}function me(e,t,n,r){return oe(e,t,n,r),pe(),me}var sE=(e,t,n,r,o,i)=>(Sm(!0),eg(r,o,Pw()));var ta="en-US";var aE=ta;function cE(e){typeof e=="string"&&(aE=e.toLowerCase().replace(/_/g,"-"))}var lE=(e,t,n)=>{};function vt(e,t,n,r){let o=Mt(),i=da(),s=Mn();return dE(i,o,o[Pt],s,e,t,r),vt}function uE(e,t,n,r){let o=e.cleanup;if(o!=null)for(let i=0;i<o.length-1;i+=2){let s=o[i];if(s===n&&o[i+1]===r){let c=t[Bs],l=o[i+2];return c.length>l?c[l]:null}typeof s=="string"&&(i+=2)}return null}function dE(e,t,n,r,o,i,s){let c=em(r),u=e.firstCreatePass?dw(e):null,d=t[yt],f=uw(t),p=!0;if(r.type&3||s){let h=Pn(r,t),g=s?s(h):h,y=f.length,b=s?T=>s(en(T[r.index])):r.index,S=null;if(!s&&c&&(S=uE(e,t,o,r.index)),S!==null){let T=S.__ngLastListenerFn__||S;T.__ngNextListenerFn__=i,S.__ngLastListenerFn__=i,p=!1}else{i=_p(r,t,d,i),lE(g,o,i);let T=n.listen(g,o,i);f.push(i,T),u&&u.push(o,b,y,y+1)}}else i=_p(r,t,d,i);if(p){let h=r.outputs?.[o],g=r.hostDirectiveOutputs?.[o];if(g&&g.length)for(let y=0;y<g.length;y+=2){let b=g[y],S=g[y+1];Mp(r,e,t,b,S,o,i,f,u)}if(h&&h.length)for(let y of h)Mp(r,e,t,y,o,o,i,f,u)}}function Mp(e,t,n,r,o,i,s,c,l){let u=n[r],f=t.data[r].outputs[o],h=u[f].subscribe(s),g=c.length;c.push(s,h),l&&l.push(i,e.index,g,-(g+1))}function Rp(e,t,n,r){let o=re(null);try{return fe(6,t,n),n(r)!==!1}catch(i){return ug(e,i),!1}finally{fe(7,t,n),re(o)}}function _p(e,t,n,r){return function o(i){if(i===Function)return r;let s=Yo(e)?Cn(e.index,t):t;Pu(s,5);let c=Rp(t,n,r,i),l=o.__ngNextListenerFn__;for(;l;)c=Rp(t,n,l,i)&&c,l=l.__ngNextListenerFn__;return c}}function we(e,t=""){let n=Mt(),r=da(),o=e+En,i=r.firstCreatePass?Pg(r,o,1,t,null):r.data[o],s=fE(r,n,i,t,e);n[o]=s,vm()&&gg(r,n,s,i),fa(i,!1)}var fE=(e,t,n,r,o)=>(Sm(!0),E0(t[Pt],r));var ru=class{ngModuleFactory;componentFactories;constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}},ku=(()=>{class e{compileModuleSync(n){return new tu(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){let r=this.compileModuleSync(n),o=Gp(n),i=Zm(o.declarations).reduce((s,c)=>{let l=jr(c);return l&&s.push(new Go(l)),s},[]);return new ru(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var hE=(()=>{class e{zone=I(Me);changeDetectionScheduler=I(Wo);applicationRef=I(tn);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function pE({ngZoneFactory:e,ignoreChangesOutsideZone:t,scheduleInRootZone:n}){return e??=()=>new Me(ue(R({},mE()),{scheduleInRootZone:n})),[{provide:Me,useFactory:e},{provide:Ur,multi:!0,useFactory:()=>{let r=I(hE,{optional:!0});return()=>r.initialize()}},{provide:Ur,multi:!0,useFactory:()=>{let r=I(gE);return()=>{r.initialize()}}},t===!0?{provide:Om,useValue:!0}:[],{provide:Am,useValue:n??Nm}]}function mE(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:e?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:e?.runCoalescing??!1}}var gE=(()=>{class e{subscription=new be;initialized=!1;zone=I(Me);pendingTasks=I(Rn);initialize(){if(this.initialized)return;this.initialized=!0;let n=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(n=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Me.assertNotInAngularZone(),queueMicrotask(()=>{n!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(n),n=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Me.assertInAngularZone(),n??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var yE=(()=>{class e{appRef=I(tn);taskService=I(Rn);ngZone=I(Me);zonelessEnabled=I(mu);tracing=I(ga,{optional:!0});disableScheduling=I(Om,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new be;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Ks):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(I(Am,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof zl||!this.zoneIsDefined)}notify(n){if(!this.zonelessEnabled&&n===5)return;let r=!1;switch(n){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,r=!0;break}case 12:{this.appRef.dirtyFlags|=16,r=!0;break}case 13:{this.appRef.dirtyFlags|=2,r=!0;break}case 11:{r=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(r))return;let o=this.useMicrotaskScheduler?up:Fm;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>o(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>o(()=>this.tick()))}shouldScheduleTick(n){return!(this.disableScheduling&&!n||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Ks+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let n=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){throw this.taskService.remove(n),r}finally{this.cleanup()}this.useMicrotaskScheduler=!0,up(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(n)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let n=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(n)}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function vE(){return typeof $localize<"u"&&$localize.locale||ta}var Nu=new O("",{providedIn:"root",factory:()=>I(Nu,$.Optional|$.SkipSelf)||vE()});var ou=new O(""),SE=new O("");function Lo(e){return!e.moduleRef}function bE(e){let t=Lo(e)?e.r3Injector:e.moduleRef.injector,n=t.get(Me);return n.run(()=>{Lo(e)?e.r3Injector.resolveInjectorInitializers():e.moduleRef.resolveInjectorInitializers();let r=t.get(In,null),o;if(n.runOutsideAngular(()=>{o=n.onError.subscribe({next:i=>{r.handleError(i)}})}),Lo(e)){let i=()=>t.destroy(),s=e.platformInjector.get(ou);s.add(i),t.onDestroy(()=>{o.unsubscribe(),s.delete(i)})}else{let i=()=>e.moduleRef.destroy(),s=e.platformInjector.get(ou);s.add(i),e.moduleRef.onDestroy(()=>{Ns(e.allPlatformModules,e.moduleRef),o.unsubscribe(),s.delete(i)})}return wE(r,n,()=>{let i=t.get(Hg);return i.runInitializers(),i.donePromise.then(()=>{let s=t.get(Nu,ta);if(cE(s||ta),!t.get(SE,!0))return Lo(e)?t.get(tn):(e.allPlatformModules.push(e.moduleRef),e.moduleRef);if(Lo(e)){let l=t.get(tn);return e.rootComponent!==void 0&&l.bootstrap(e.rootComponent),l}else return DE(e.moduleRef,e.allPlatformModules),e.moduleRef})})})}function DE(e,t){let n=e.injector.get(tn);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(r=>n.bootstrap(r));else if(e.instance.ngDoBootstrap)e.instance.ngDoBootstrap(n);else throw new N(-403,!1);t.push(e)}function wE(e,t,n){try{let r=n();return Jo(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}var Os=null;function TE(e=[],t){return Rt.create({name:t,providers:[{provide:sa,useValue:"platform"},{provide:ou,useValue:new Set([()=>Os=null])},...e]})}function EE(e=[]){if(Os)return Os;let t=TE(e);return Os=t,nE(),CE(t),t}function CE(e){let t=e.get(bu,null);it(e,()=>{t?.forEach(n=>n())})}var Xo=(()=>{class e{static __NG_ELEMENT_ID__=IE}return e})();function IE(e){return PE(Mn(),Mt(),(e&16)===16)}function PE(e,t,n){if(Yo(e)&&!n){let r=Cn(e.index,t);return new Js(r,r)}else if(e.type&175){let r=t[jt];return new Js(r,t)}return null}function Ug(e){fe(8);try{let{rootComponent:t,appProviders:n,platformProviders:r}=e,o=EE(r),i=[pE({}),{provide:Wo,useExisting:yE},...n||[]],s=new ea({providers:i,parent:o,debugName:"",runEnvironmentInitializers:!1});return bE({r3Injector:s.injector,platformInjector:o,rootComponent:t})}catch(t){return Promise.reject(t)}finally{fe(9)}}var xp=class{[wr];constructor(t){this[wr]=t}destroy(){this[wr].destroy()}};var zg=null;function qr(){return zg}function qg(e){zg??=e}var wa=class{};var Ye=new O(""),Wg=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>I(xE),providedIn:"platform"})}return e})();var xE=(()=>{class e extends Wg{_location;_history;_doc=I(Ye);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return qr().getBaseHref(this._doc)}onPopState(n){let r=qr().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){let r=qr().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,r,o){this._history.pushState(n,r,o)}replaceState(n,r,o){this._history.replaceState(n,r,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function Gg(e,t){return e?t?e.endsWith("/")?t.startsWith("/")?e+t.slice(1):e+t:t.startsWith("/")?e+t:`${e}/${t}`:e:t}function jg(e){let t=e.search(/#|\?|$/);return e[t-1]==="/"?e.slice(0,t-1)+e.slice(t):e}function ir(e){return e&&e[0]!=="?"?`?${e}`:e}var Ta=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>I(Qg),providedIn:"root"})}return e})(),kE=new O(""),Qg=(()=>{class e extends Ta{_platformLocation;_baseHref;_removeListenerFns=[];constructor(n,r){super(),this._platformLocation=n,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??I(Ye).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Gg(this._baseHref,n)}path(n=!1){let r=this._platformLocation.pathname+ir(this._platformLocation.search),o=this._platformLocation.hash;return o&&n?`${r}${o}`:r}pushState(n,r,o,i){let s=this.prepareExternalUrl(o+ir(i));this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){let s=this.prepareExternalUrl(o+ir(i));this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}static \u0275fac=function(r){return new(r||e)(A(Wg),A(kE,8))};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ei=(()=>{class e{_subject=new Ue;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(n){this._locationStrategy=n;let r=this._locationStrategy.getBaseHref();this._basePath=AE(jg(Bg(r))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+ir(r))}normalize(n){return e.stripTrailingSlash(OE(this._basePath,Bg(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",o=null){this._locationStrategy.pushState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+ir(r)),o)}replaceState(n,r="",o=null){this._locationStrategy.replaceState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+ir(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(o=>o(n,r))}subscribe(n,r,o){return this._subject.subscribe({next:n,error:r??void 0,complete:o??void 0})}static normalizeQueryParams=ir;static joinWithSlash=Gg;static stripTrailingSlash=jg;static \u0275fac=function(r){return new(r||e)(A(Ta))};static \u0275prov=k({token:e,factory:()=>NE(),providedIn:"root"})}return e})();function NE(){return new ei(A(Ta))}function OE(e,t){if(!e||!t.startsWith(e))return t;let n=t.substring(e.length);return n===""||["/",";","?","#"].includes(n[0])?n:t}function Bg(e){return e.replace(/\/index.html$/,"")}function AE(e){if(new RegExp("^(https?:)?//").test(e)){let[,n]=e.split(/\/\/[^\/]+/);return n}return e}function Ea(e,t){t=encodeURIComponent(t);for(let n of e.split(";")){let r=n.indexOf("="),[o,i]=r==-1?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===t)return decodeURIComponent(i)}return null}var Ou=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=zr({type:e});static \u0275inj=$r({})}return e})(),Kg="browser",FE="server";function Au(e){return e===FE}var Wr=class{};var ni=class{},Ia=class{},Vt=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(n=>{let r=n.indexOf(":");if(r>0){let o=n.slice(0,r),i=n.slice(r+1).trim();this.addHeaderEntry(o,i)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((n,r)=>{this.addHeaderEntry(r,n)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([n,r])=>{this.setHeaderEntries(n,r)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let n=this.headers.get(t.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,n){return this.clone({name:t,value:n,op:"a"})}set(t,n){return this.clone({name:t,value:n,op:"s"})}delete(t,n){return this.clone({name:t,value:n,op:"d"})}maybeSetNormalizedName(t,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,t)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(n=>{this.headers.set(n,t.headers.get(n)),this.normalizedNames.set(n,t.normalizedNames.get(n))})}clone(t){let n=new e;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}applyUpdate(t){let n=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(t.name,n);let o=(t.op==="a"?this.headers.get(n):void 0)||[];o.push(...r),this.headers.set(n,o);break;case"d":let i=t.value;if(!i)this.headers.delete(n),this.normalizedNames.delete(n);else{let s=this.headers.get(n);if(!s)return;s=s.filter(c=>i.indexOf(c)===-1),s.length===0?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,s)}break}}addHeaderEntry(t,n){let r=t.toLowerCase();this.maybeSetNormalizedName(t,r),this.headers.has(r)?this.headers.get(r).push(n):this.headers.set(r,[n])}setHeaderEntries(t,n){let r=(Array.isArray(n)?n:[n]).map(i=>i.toString()),o=t.toLowerCase();this.headers.set(o,r),this.maybeSetNormalizedName(t,o)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>t(this.normalizedNames.get(n),this.headers.get(n)))}};var Lu=class{encodeKey(t){return Yg(t)}encodeValue(t){return Yg(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function HE(e,t){let n=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{let i=o.indexOf("="),[s,c]=i==-1?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,i)),t.decodeValue(o.slice(i+1))],l=n.get(s)||[];l.push(c),n.set(s,l)}),n}var UE=/%(\d[a-f0-9])/gi,jE={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Yg(e){return encodeURIComponent(e).replace(UE,(t,n)=>jE[n]??t)}function Ca(e){return`${e}`}var _n=class e{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new Lu,t.fromString){if(t.fromObject)throw new N(2805,!1);this.map=HE(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(n=>{let r=t.fromObject[n],o=Array.isArray(r)?r.map(Ca):[Ca(r)];this.map.set(n,o)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let n=this.map.get(t);return n?n[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,n){return this.clone({param:t,value:n,op:"a"})}appendAll(t){let n=[];return Object.keys(t).forEach(r=>{let o=t[r];Array.isArray(o)?o.forEach(i=>{n.push({param:r,value:i,op:"a"})}):n.push({param:r,value:o,op:"a"})}),this.clone(n)}set(t,n){return this.clone({param:t,value:n,op:"s"})}delete(t,n){return this.clone({param:t,value:n,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let n=this.encoder.encodeKey(t);return this.map.get(t).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let n=new e({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(t),n}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let n=(t.op==="a"?this.map.get(t.param):void 0)||[];n.push(Ca(t.value)),this.map.set(t.param,n);break;case"d":if(t.value!==void 0){let r=this.map.get(t.param)||[],o=r.indexOf(Ca(t.value));o!==-1&&r.splice(o,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var Hu=class{map=new Map;set(t,n){return this.map.set(t,n),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function BE(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Zg(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Jg(e){return typeof Blob<"u"&&e instanceof Blob}function Xg(e){return typeof FormData<"u"&&e instanceof FormData}function VE(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var ey="Content-Type",ty="Accept",oy="X-Request-URL",iy="text/plain",sy="application/json",$E=`${sy}, ${iy}, */*`,ti=class e{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(t,n,r,o){this.url=n,this.method=t.toUpperCase();let i;if(BE(this.method)||o?(this.body=r!==void 0?r:null,i=o):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new Vt,this.context??=new Hu,!this.params)this.params=new _n,this.urlWithParams=n;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=n;else{let c=n.indexOf("?"),l=c===-1?"?":c<n.length-1?"&":"";this.urlWithParams=n+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Zg(this.body)||Jg(this.body)||Xg(this.body)||VE(this.body)?this.body:this.body instanceof _n?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Xg(this.body)?null:Jg(this.body)?this.body.type||null:Zg(this.body)?null:typeof this.body=="string"?iy:this.body instanceof _n?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?sy:null}clone(t={}){let n=t.method||this.method,r=t.url||this.url,o=t.responseType||this.responseType,i=t.transferCache??this.transferCache,s=t.body!==void 0?t.body:this.body,c=t.withCredentials??this.withCredentials,l=t.reportProgress??this.reportProgress,u=t.headers||this.headers,d=t.params||this.params,f=t.context??this.context;return t.setHeaders!==void 0&&(u=Object.keys(t.setHeaders).reduce((p,h)=>p.set(h,t.setHeaders[h]),u)),t.setParams&&(d=Object.keys(t.setParams).reduce((p,h)=>p.set(h,t.setParams[h]),d)),new e(n,r,s,{params:d,headers:u,context:f,reportProgress:l,responseType:o,withCredentials:c,transferCache:i})}},Gr=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(Gr||{}),ri=class{headers;status;statusText;url;ok;type;constructor(t,n=200,r="OK"){this.headers=t.headers||new Vt,this.status=t.status!==void 0?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},Uu=class e extends ri{constructor(t={}){super(t)}type=Gr.ResponseHeader;clone(t={}){return new e({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},Pa=class e extends ri{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=Gr.Response;clone(t={}){return new e({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},Ma=class extends ri{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},zE=200,qE=204;function Fu(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var ju=(()=>{class e{handler;constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof ti)i=n;else{let l;o.headers instanceof Vt?l=o.headers:l=new Vt(o.headers);let u;o.params&&(o.params instanceof _n?u=o.params:u=new _n({fromObject:o.params})),i=new ti(n,r,o.body!==void 0?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let s=L(i).pipe(bn(l=>this.handler.handle(l)));if(n instanceof ti||o.observe==="events")return s;let c=s.pipe(tt(l=>l instanceof Pa));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return c.pipe(F(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new N(2806,!1);return l.body}));case"blob":return c.pipe(F(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new N(2807,!1);return l.body}));case"text":return c.pipe(F(l=>{if(l.body!==null&&typeof l.body!="string")throw new N(2808,!1);return l.body}));case"json":default:return c.pipe(F(l=>l.body))}case"response":return c;default:throw new N(2809,!1)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new _n().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,Fu(o,r))}post(n,r,o={}){return this.request("POST",n,Fu(o,r))}put(n,r,o={}){return this.request("PUT",n,Fu(o,r))}static \u0275fac=function(r){return new(r||e)(A(ni))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var WE=new O("");function GE(e,t){return t(e)}function QE(e,t,n){return(r,o)=>it(n,()=>t(r,i=>e(i,o)))}var ay=new O(""),KE=new O(""),YE=new O("",{providedIn:"root",factory:()=>!0});var ny=(()=>{class e extends ni{backend;injector;chain=null;pendingTasks=I(Rn);contributeToStability=I(YE);constructor(n,r){super(),this.backend=n,this.injector=r}handle(n){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(ay),...this.injector.get(KE,[])]));this.chain=r.reduceRight((o,i)=>QE(o,i,this.injector),GE)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(n,o=>this.backend.handle(o)).pipe(Kn(()=>this.pendingTasks.remove(r)))}else return this.chain(n,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||e)(A(Ia),A(Ke))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var ZE=/^\)\]\}',?\n/,JE=RegExp(`^${oy}:`,"m");function XE(e){return"responseURL"in e&&e.responseURL?e.responseURL:JE.test(e.getAllResponseHeaders())?e.getResponseHeader(oy):null}var ry=(()=>{class e{xhrFactory;constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new N(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?he(r.\u0275loadImpl()):L(null)).pipe(nt(()=>new V(i=>{let s=r.build();if(s.open(n.method,n.urlWithParams),n.withCredentials&&(s.withCredentials=!0),n.headers.forEach((y,b)=>s.setRequestHeader(y,b.join(","))),n.headers.has(ty)||s.setRequestHeader(ty,$E),!n.headers.has(ey)){let y=n.detectContentTypeHeader();y!==null&&s.setRequestHeader(ey,y)}if(n.responseType){let y=n.responseType.toLowerCase();s.responseType=y!=="json"?y:"text"}let c=n.serializeBody(),l=null,u=()=>{if(l!==null)return l;let y=s.statusText||"OK",b=new Vt(s.getAllResponseHeaders()),S=XE(s)||n.url;return l=new Uu({headers:b,status:s.status,statusText:y,url:S}),l},d=()=>{let{headers:y,status:b,statusText:S,url:T}=u(),D=null;b!==qE&&(D=typeof s.response>"u"?s.responseText:s.response),b===0&&(b=D?zE:0);let C=b>=200&&b<300;if(n.responseType==="json"&&typeof D=="string"){let M=D;D=D.replace(ZE,"");try{D=D!==""?JSON.parse(D):null}catch(_){D=M,C&&(C=!1,D={error:_,text:D})}}C?(i.next(new Pa({body:D,headers:y,status:b,statusText:S,url:T||void 0})),i.complete()):i.error(new Ma({error:D,headers:y,status:b,statusText:S,url:T||void 0}))},f=y=>{let{url:b}=u(),S=new Ma({error:y,status:s.status||0,statusText:s.statusText||"Unknown Error",url:b||void 0});i.error(S)},p=!1,h=y=>{p||(i.next(u()),p=!0);let b={type:Gr.DownloadProgress,loaded:y.loaded};y.lengthComputable&&(b.total=y.total),n.responseType==="text"&&s.responseText&&(b.partialText=s.responseText),i.next(b)},g=y=>{let b={type:Gr.UploadProgress,loaded:y.loaded};y.lengthComputable&&(b.total=y.total),i.next(b)};return s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",f),s.addEventListener("abort",f),n.reportProgress&&(s.addEventListener("progress",h),c!==null&&s.upload&&s.upload.addEventListener("progress",g)),s.send(c),i.next({type:Gr.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",f),n.reportProgress&&(s.removeEventListener("progress",h),c!==null&&s.upload&&s.upload.removeEventListener("progress",g)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(r){return new(r||e)(A(Wr))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),cy=new O(""),eC="XSRF-TOKEN",tC=new O("",{providedIn:"root",factory:()=>eC}),nC="X-XSRF-TOKEN",rC=new O("",{providedIn:"root",factory:()=>nC}),Ra=class{},oC=(()=>{class e{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(n,r,o){this.doc=n,this.platform=r,this.cookieName=o}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ea(n,this.cookieName),this.lastCookieString=n),this.lastToken}static \u0275fac=function(r){return new(r||e)(A(Ye),A(rr),A(tC))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();function iC(e,t){let n=e.url.toLowerCase();if(!I(cy)||e.method==="GET"||e.method==="HEAD"||n.startsWith("http://")||n.startsWith("https://"))return t(e);let r=I(Ra).getToken(),o=I(rC);return r!=null&&!e.headers.has(o)&&(e=e.clone({headers:e.headers.set(o,r)})),t(e)}function ly(...e){let t=[ju,ry,ny,{provide:ni,useExisting:ny},{provide:Ia,useFactory:()=>I(WE,{optional:!0})??I(ry)},{provide:ay,useValue:iC,multi:!0},{provide:cy,useValue:!0},{provide:Ra,useClass:oC}];for(let n of e)t.push(...n.\u0275providers);return Qo(t)}var Vu=class extends wa{supportsDOMEvents=!0},$u=class e extends Vu{static makeCurrent(){qg(new e)}onAndCancel(t,n,r,o){return t.addEventListener(n,r,o),()=>{t.removeEventListener(n,r,o)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.remove()}createElement(t,n){return n=n||this.getDefaultDocument(),n.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return n==="window"?window:n==="document"?t:n==="body"?t.body:null}getBaseHref(t){let n=aC();return n==null?null:cC(n)}resetBaseElement(){oi=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Ea(document.cookie,t)}},oi=null;function aC(){return oi=oi||document.querySelector("base"),oi?oi.getAttribute("href"):null}function cC(e){return new URL(e,document.baseURI).pathname}var lC=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),zu=new O(""),my=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(n,r){this._zone=r,n.forEach(o=>{o.manager=this}),this._plugins=n.slice().reverse()}addEventListener(n,r,o,i){return this._findPluginFor(r).addEventListener(n,r,o,i)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(i=>i.supports(n)),!r)throw new N(5101,!1);return this._eventNameToPlugin.set(n,r),r}static \u0275fac=function(r){return new(r||e)(A(zu),A(Me))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),xa=class{_doc;constructor(t){this._doc=t}manager},_a="ng-app-id";function uy(e){for(let t of e)t.remove()}function dy(e,t){let n=t.createElement("style");return n.textContent=e,n}function uC(e,t,n,r){let o=e.head?.querySelectorAll(`style[${_a}="${t}"],link[${_a}="${t}"]`);if(o)for(let i of o)i.removeAttribute(_a),i instanceof HTMLLinkElement?r.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&n.set(i.textContent,{usage:0,elements:[i]})}function qu(e,t){let n=t.createElement("link");return n.setAttribute("rel","stylesheet"),n.setAttribute("href",e),n}var gy=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(n,r,o,i={}){this.doc=n,this.appId=r,this.nonce=o,this.isServer=Au(i),uC(n,r,this.inline,this.external),this.hosts.add(n.head)}addStyles(n,r){for(let o of n)this.addUsage(o,this.inline,dy);r?.forEach(o=>this.addUsage(o,this.external,qu))}removeStyles(n,r){for(let o of n)this.removeUsage(o,this.inline);r?.forEach(o=>this.removeUsage(o,this.external))}addUsage(n,r,o){let i=r.get(n);i?i.usage++:r.set(n,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(n,this.doc)))})}removeUsage(n,r){let o=r.get(n);o&&(o.usage--,o.usage<=0&&(uy(o.elements),r.delete(n)))}ngOnDestroy(){for(let[,{elements:n}]of[...this.inline,...this.external])uy(n);this.hosts.clear()}addHost(n){this.hosts.add(n);for(let[r,{elements:o}]of this.inline)o.push(this.addElement(n,dy(r,this.doc)));for(let[r,{elements:o}]of this.external)o.push(this.addElement(n,qu(r,this.doc)))}removeHost(n){this.hosts.delete(n)}addElement(n,r){return this.nonce&&r.setAttribute("nonce",this.nonce),this.isServer&&r.setAttribute(_a,this.appId),n.appendChild(r)}static \u0275fac=function(r){return new(r||e)(A(Ye),A(Su),A(Du,8),A(rr))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),Bu={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Gu=/%COMP%/g;var yy="%COMP%",dC=`_nghost-${yy}`,fC=`_ngcontent-${yy}`,hC=!0,pC=new O("",{providedIn:"root",factory:()=>hC});function mC(e){return fC.replace(Gu,e)}function gC(e){return dC.replace(Gu,e)}function vy(e,t){return t.map(n=>n.replace(Gu,e))}var fy=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(n,r,o,i,s,c,l,u=null,d=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=s,this.platformId=c,this.ngZone=l,this.nonce=u,this.tracingService=d,this.platformIsServer=Au(c),this.defaultRenderer=new ii(n,s,l,this.platformIsServer,this.tracingService)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Bt.ShadowDom&&(r=ue(R({},r),{encapsulation:Bt.Emulated}));let o=this.getOrCreateRenderer(n,r);return o instanceof ka?o.applyToHost(n):o instanceof si&&o.applyStyles(),o}getOrCreateRenderer(n,r){let o=this.rendererByCompId,i=o.get(r.id);if(!i){let s=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.platformIsServer,p=this.tracingService;switch(r.encapsulation){case Bt.Emulated:i=new ka(l,u,r,this.appId,d,s,c,f,p);break;case Bt.ShadowDom:return new Wu(l,u,n,r,s,c,this.nonce,f,p);default:i=new si(l,u,r,d,s,c,f,p);break}o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(n){this.rendererByCompId.delete(n)}static \u0275fac=function(r){return new(r||e)(A(my),A(gy),A(Su),A(pC),A(Ye),A(rr),A(Me),A(Du),A(ga,8))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),ii=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,n,r,o,i){this.eventManager=t,this.doc=n,this.ngZone=r,this.platformIsServer=o,this.tracingService=i}destroy(){}destroyNode=null;createElement(t,n){return n?this.doc.createElementNS(Bu[n]||n,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,n){(hy(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(hy(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){n.remove()}selectRootElement(t,n){let r=typeof t=="string"?this.doc.querySelector(t):t;if(!r)throw new N(-5104,!1);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;let i=Bu[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){let o=Bu[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(or.DashCase|or.Important)?t.style.setProperty(n,r,o&or.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&or.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t!=null&&(t[n]=r)}setValue(t,n){t.nodeValue=n}listen(t,n,r,o){if(typeof t=="string"&&(t=qr().getGlobalEventTarget(this.doc,t),!t))throw new N(5102,!1);let i=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(t,n,i)),this.eventManager.addEventListener(t,n,i,o)}decoratePreventDefault(t){return n=>{if(n==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(n)):t(n))===!1&&n.preventDefault()}}};function hy(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var Wu=class extends ii{sharedStylesHost;hostEl;shadowRoot;constructor(t,n,r,o,i,s,c,l,u){super(t,i,s,l,u),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=o.styles;d=vy(o.id,d);for(let p of d){let h=document.createElement("style");c&&h.setAttribute("nonce",c),h.textContent=p,this.shadowRoot.appendChild(h)}let f=o.getExternalStyles?.();if(f)for(let p of f){let h=qu(p,i);c&&h.setAttribute("nonce",c),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(null,n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},si=class extends ii{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,n,r,o,i,s,c,l,u){super(t,i,s,c,l),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=o;let d=r.styles;this.styles=u?vy(u,d):d,this.styleUrls=r.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ka=class extends si{contentAttr;hostAttr;constructor(t,n,r,o,i,s,c,l,u){let d=o+"-"+r.id;super(t,n,r,i,s,c,l,u,d),this.contentAttr=mC(d),this.hostAttr=gC(d)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,n){let r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}},yC=(()=>{class e extends xa{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o,i){return n.addEventListener(r,o,i),()=>this.removeEventListener(n,r,o,i)}removeEventListener(n,r,o,i){return n.removeEventListener(r,o,i)}static \u0275fac=function(r){return new(r||e)(A(Ye))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),py=["alt","control","meta","shift"],vC={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},SC={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},bC=(()=>{class e extends xa{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,r,o,i){let s=e.parseEventName(r),c=e.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>qr().onAndCancel(n,s.domEventName,c,i))}static parseEventName(n){let r=n.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let i=e._normalizeKey(r.pop()),s="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),s="code."),py.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),s+=u+".")}),s+=i,r.length!=0||i.length===0)return null;let l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(n,r){let o=vC[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),py.forEach(s=>{if(s!==o){let c=SC[s];c(n)&&(i+=s+".")}}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return n==="esc"?"escape":n}static \u0275fac=function(r){return new(r||e)(A(Ye))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();function Sy(e,t){return Ug(R({rootComponent:e},DC(t)))}function DC(e){return{appProviders:[...IC,...e?.providers??[]],platformProviders:CC}}function wC(){$u.makeCurrent()}function TC(){return new In}function EC(){return qm(document),document}var CC=[{provide:rr,useValue:Kg},{provide:bu,useValue:wC,multi:!0},{provide:Ye,useFactory:EC,deps:[]}];var IC=[{provide:sa,useValue:"root"},{provide:In,useFactory:TC,deps:[]},{provide:zu,useClass:yC,multi:!0,deps:[Ye]},{provide:zu,useClass:bC,multi:!0,deps:[Ye]},fy,gy,my,{provide:Br,useExisting:fy},{provide:Wr,useClass:lC,deps:[]},[]];var by=(()=>{class e{_doc;constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}static \u0275fac=function(r){return new(r||e)(A(Ye))};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var j="primary",Di=Symbol("RouteTitle"),Ju=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}};function Xr(e){return new Ju(e)}function MC(e,t,n){let r=n.path.split("/");if(r.length>e.length||n.pathMatch==="full"&&(t.hasChildren()||r.length<e.length))return null;let o={};for(let i=0;i<r.length;i++){let s=r[i],c=e[i];if(s[0]===":")o[s.substring(1)]=c;else if(s!==c.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}function RC(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!$t(e[n],t[n]))return!1;return!0}function $t(e,t){let n=e?Xu(e):void 0,r=t?Xu(t):void 0;if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!My(e[o],t[o]))return!1;return!0}function Xu(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function My(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;let n=[...e].sort(),r=[...t].sort();return n.every((o,i)=>r[i]===o)}else return e===t}function Ry(e){return e.length>0?e[e.length-1]:null}function xn(e){return pl(e)?e:Jo(e)?he(Promise.resolve(e)):L(e)}var _C={exact:xy,subset:ky},_y={exact:xC,subset:kC,ignored:()=>!0};function Dy(e,t,n){return _C[n.paths](e.root,t.root,n.matrixParams)&&_y[n.queryParams](e.queryParams,t.queryParams)&&!(n.fragment==="exact"&&e.fragment!==t.fragment)}function xC(e,t){return $t(e,t)}function xy(e,t,n){if(!ar(e.segments,t.segments)||!Aa(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(let r in t.children)if(!e.children[r]||!xy(e.children[r],t.children[r],n))return!1;return!0}function kC(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>My(e[n],t[n]))}function ky(e,t,n){return Ny(e,t,t.segments,n)}function Ny(e,t,n,r){if(e.segments.length>n.length){let o=e.segments.slice(0,n.length);return!(!ar(o,n)||t.hasChildren()||!Aa(o,n,r))}else if(e.segments.length===n.length){if(!ar(e.segments,n)||!Aa(e.segments,n,r))return!1;for(let o in t.children)if(!e.children[o]||!ky(e.children[o],t.children[o],r))return!1;return!0}else{let o=n.slice(0,e.segments.length),i=n.slice(e.segments.length);return!ar(e.segments,o)||!Aa(e.segments,o,r)||!e.children[j]?!1:Ny(e.children[j],t,i,r)}}function Aa(e,t,n){return t.every((r,o)=>_y[n](e[o].parameters,r.parameters))}var sn=class{root;queryParams;fragment;_queryParamMap;constructor(t=new te([],{}),n={},r=null){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap??=Xr(this.queryParams),this._queryParamMap}toString(){return AC.serialize(this)}},te=class{segments;children;parent=null;constructor(t,n){this.segments=t,this.children=n,Object.values(n).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Fa(this)}},sr=class{path;parameters;_parameterMap;constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap??=Xr(this.parameters),this._parameterMap}toString(){return Ay(this)}};function NC(e,t){return ar(e,t)&&e.every((n,r)=>$t(n.parameters,t[r].parameters))}function ar(e,t){return e.length!==t.length?!1:e.every((n,r)=>n.path===t[r].path)}function OC(e,t){let n=[];return Object.entries(e.children).forEach(([r,o])=>{r===j&&(n=n.concat(t(o,r)))}),Object.entries(e.children).forEach(([r,o])=>{r!==j&&(n=n.concat(t(o,r)))}),n}var Cd=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>new di,providedIn:"root"})}return e})(),di=class{parse(t){let n=new td(t);return new sn(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){let n=`/${ai(t.root,!0)}`,r=HC(t.queryParams),o=typeof t.fragment=="string"?`#${FC(t.fragment)}`:"";return`${n}${r}${o}`}},AC=new di;function Fa(e){return e.segments.map(t=>Ay(t)).join("/")}function ai(e,t){if(!e.hasChildren())return Fa(e);if(t){let n=e.children[j]?ai(e.children[j],!1):"",r=[];return Object.entries(e.children).forEach(([o,i])=>{o!==j&&r.push(`${o}:${ai(i,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}else{let n=OC(e,(r,o)=>o===j?[ai(e.children[j],!1)]:[`${o}:${ai(r,!1)}`]);return Object.keys(e.children).length===1&&e.children[j]!=null?`${Fa(e)}/${n[0]}`:`${Fa(e)}/(${n.join("//")})`}}function Oy(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Na(e){return Oy(e).replace(/%3B/gi,";")}function FC(e){return encodeURI(e)}function ed(e){return Oy(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function La(e){return decodeURIComponent(e)}function wy(e){return La(e.replace(/\+/g,"%20"))}function Ay(e){return`${ed(e.path)}${LC(e.parameters)}`}function LC(e){return Object.entries(e).map(([t,n])=>`;${ed(t)}=${ed(n)}`).join("")}function HC(e){let t=Object.entries(e).map(([n,r])=>Array.isArray(r)?r.map(o=>`${Na(n)}=${Na(o)}`).join("&"):`${Na(n)}=${Na(r)}`).filter(n=>n);return t.length?`?${t.join("&")}`:""}var UC=/^[^\/()?;#]+/;function Qu(e){let t=e.match(UC);return t?t[0]:""}var jC=/^[^\/()?;=#]+/;function BC(e){let t=e.match(jC);return t?t[0]:""}var VC=/^[^=?&#]+/;function $C(e){let t=e.match(VC);return t?t[0]:""}var zC=/^[^&#]+/;function qC(e){let t=e.match(zC);return t?t[0]:""}var td=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new te([],{}):new te([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(r[j]=new te(t,n)),r}parseSegment(){let t=Qu(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new N(4009,!1);return this.capture(t),new sr(La(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let n=BC(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let o=Qu(this.remaining);o&&(r=o,this.capture(r))}t[La(n)]=La(r)}parseQueryParam(t){let n=$C(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let s=qC(this.remaining);s&&(r=s,this.capture(r))}let o=wy(n),i=wy(r);if(t.hasOwnProperty(o)){let s=t[o];Array.isArray(s)||(s=[s],t[o]=s),s.push(i)}else t[o]=i}parseParens(t){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Qu(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new N(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):t&&(i=j);let s=this.parseChildren();n[i]=Object.keys(s).length===1?s[j]:new te([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new N(4011,!1)}};function Fy(e){return e.segments.length>0?new te([],{[j]:e}):e}function Ly(e){let t={};for(let[r,o]of Object.entries(e.children)){let i=Ly(o);if(r===j&&i.segments.length===0&&i.hasChildren())for(let[s,c]of Object.entries(i.children))t[s]=c;else(i.segments.length>0||i.hasChildren())&&(t[r]=i)}let n=new te(e.segments,t);return WC(n)}function WC(e){if(e.numberOfChildren===1&&e.children[j]){let t=e.children[j];return new te(e.segments.concat(t.segments),t.children)}return e}function fi(e){return e instanceof sn}function GC(e,t,n=null,r=null){let o=Hy(e);return Uy(o,t,n,r)}function Hy(e){let t;function n(i){let s={};for(let l of i.children){let u=n(l);s[l.outlet]=u}let c=new te(i.url,s);return i===e&&(t=c),c}let r=n(e.root),o=Fy(r);return t??o}function Uy(e,t,n,r){let o=e;for(;o.parent;)o=o.parent;if(t.length===0)return Ku(o,o,o,n,r);let i=QC(t);if(i.toRoot())return Ku(o,o,new te([],{}),n,r);let s=KC(i,o,e),c=s.processChildren?li(s.segmentGroup,s.index,i.commands):By(s.segmentGroup,s.index,i.commands);return Ku(o,s.segmentGroup,c,n,r)}function Ua(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function hi(e){return typeof e=="object"&&e!=null&&e.outlets}function Ku(e,t,n,r,o){let i={};r&&Object.entries(r).forEach(([l,u])=>{i[l]=Array.isArray(u)?u.map(d=>`${d}`):`${u}`});let s;e===t?s=n:s=jy(e,t,n);let c=Fy(Ly(s));return new sn(c,i,o)}function jy(e,t,n){let r={};return Object.entries(e.children).forEach(([o,i])=>{i===t?r[o]=n:r[o]=jy(i,t,n)}),new te(e.segments,r)}var ja=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&Ua(r[0]))throw new N(4003,!1);let o=r.find(hi);if(o&&o!==Ry(r))throw new N(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function QC(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new ja(!0,0,e);let t=0,n=!1,r=e.reduce((o,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let c={};return Object.entries(i.outlets).forEach(([l,u])=>{c[l]=typeof u=="string"?u.split("/"):u}),[...o,{outlets:c}]}if(i.segmentPath)return[...o,i.segmentPath]}return typeof i!="string"?[...o,i]:s===0?(i.split("/").forEach((c,l)=>{l==0&&c==="."||(l==0&&c===""?n=!0:c===".."?t++:c!=""&&o.push(c))}),o):[...o,i]},[]);return new ja(n,t,r)}var Yr=class{segmentGroup;processChildren;index;constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}};function KC(e,t,n){if(e.isAbsolute)return new Yr(t,!0,0);if(!n)return new Yr(t,!1,NaN);if(n.parent===null)return new Yr(n,!0,0);let r=Ua(e.commands[0])?0:1,o=n.segments.length-1+r;return YC(n,o,e.numberOfDoubleDots)}function YC(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new N(4005,!1);o=r.segments.length}return new Yr(r,!1,o-i)}function ZC(e){return hi(e[0])?e[0].outlets:{[j]:e}}function By(e,t,n){if(e??=new te([],{}),e.segments.length===0&&e.hasChildren())return li(e,t,n);let r=JC(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){let i=new te(e.segments.slice(0,r.pathIndex),{});return i.children[j]=new te(e.segments.slice(r.pathIndex),e.children),li(i,0,o)}else return r.match&&o.length===0?new te(e.segments,{}):r.match&&!e.hasChildren()?nd(e,t,n):r.match?li(e,0,o):nd(e,t,n)}function li(e,t,n){if(n.length===0)return new te(e.segments,{});{let r=ZC(n),o={};if(Object.keys(r).some(i=>i!==j)&&e.children[j]&&e.numberOfChildren===1&&e.children[j].segments.length===0){let i=li(e.children[j],t,n);return new te(e.segments,i.children)}return Object.entries(r).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(o[i]=By(e.children[i],t,s))}),Object.entries(e.children).forEach(([i,s])=>{r[i]===void 0&&(o[i]=s)}),new te(e.segments,o)}}function JC(e,t,n){let r=0,o=t,i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;let s=e.segments[o],c=n[r];if(hi(c))break;let l=`${c}`,u=r<n.length-1?n[r+1]:null;if(o>0&&l===void 0)break;if(l&&u&&typeof u=="object"&&u.outlets===void 0){if(!Ey(l,u,s))return i;r+=2}else{if(!Ey(l,{},s))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}function nd(e,t,n){let r=e.segments.slice(0,t),o=0;for(;o<n.length;){let i=n[o];if(hi(i)){let l=XC(i.outlets);return new te(r,l)}if(o===0&&Ua(n[0])){let l=e.segments[t];r.push(new sr(l.path,Ty(n[0]))),o++;continue}let s=hi(i)?i.outlets[j]:`${i}`,c=o<n.length-1?n[o+1]:null;s&&c&&Ua(c)?(r.push(new sr(s,Ty(c))),o+=2):(r.push(new sr(s,{})),o++)}return new te(r,{})}function XC(e){let t={};return Object.entries(e).forEach(([n,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(t[n]=nd(new te([],{}),0,r))}),t}function Ty(e){let t={};return Object.entries(e).forEach(([n,r])=>t[n]=`${r}`),t}function Ey(e,t,n){return e==n.path&&$t(t,n.parameters)}var Ha="imperative",Fe=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(Fe||{}),St=class{id;url;constructor(t,n){this.id=t,this.url=n}},pi=class extends St{type=Fe.NavigationStart;navigationTrigger;restoredState;constructor(t,n,r="imperative",o=null){super(t,n),this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},cr=class extends St{urlAfterRedirects;type=Fe.NavigationEnd;constructor(t,n,r){super(t,n),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},at=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e}(at||{}),rd=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}(rd||{}),on=class extends St{reason;code;type=Fe.NavigationCancel;constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},lr=class extends St{reason;code;type=Fe.NavigationSkipped;constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o}},mi=class extends St{error;target;type=Fe.NavigationError;constructor(t,n,r,o){super(t,n),this.error=r,this.target=o}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ba=class extends St{urlAfterRedirects;state;type=Fe.RoutesRecognized;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},od=class extends St{urlAfterRedirects;state;type=Fe.GuardsCheckStart;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},id=class extends St{urlAfterRedirects;state;shouldActivate;type=Fe.GuardsCheckEnd;constructor(t,n,r,o,i){super(t,n),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},sd=class extends St{urlAfterRedirects;state;type=Fe.ResolveStart;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ad=class extends St{urlAfterRedirects;state;type=Fe.ResolveEnd;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cd=class{route;type=Fe.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ld=class{route;type=Fe.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ud=class{snapshot;type=Fe.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},dd=class{snapshot;type=Fe.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fd=class{snapshot;type=Fe.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},hd=class{snapshot;type=Fe.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var gi=class{},eo=class{url;navigationBehaviorOptions;constructor(t,n){this.url=t,this.navigationBehaviorOptions=n}};function eI(e,t){return e.providers&&!e._injector&&(e._injector=Ru(e.providers,t,`Route: ${e.path}`)),e._injector??t}function xt(e){return e.outlet||j}function tI(e,t){let n=e.filter(r=>xt(r)===t);return n.push(...e.filter(r=>xt(r)!==t)),n}function wi(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let t=e.parent;t;t=t.parent){let n=t.routeConfig;if(n?._loadedInjector)return n._loadedInjector;if(n?._injector)return n._injector}return null}var pd=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return wi(this.route?.snapshot)??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new Qa(this.rootInjector)}},Qa=(()=>{class e{rootInjector;contexts=new Map;constructor(n){this.rootInjector=n}onChildOutletCreated(n,r){let o=this.getOrCreateContext(n);o.outlet=r,this.contexts.set(n,o)}onChildOutletDestroyed(n){let r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new pd(this.rootInjector),this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}static \u0275fac=function(r){return new(r||e)(A(Ke))};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Va=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){let n=md(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){let n=md(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){let n=gd(t,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==t)}pathFromRoot(t){return gd(t,this._root).map(n=>n.value)}};function md(e,t){if(e===t.value)return t;for(let n of t.children){let r=md(e,n);if(r)return r}return null}function gd(e,t){if(e===t.value)return[t];for(let n of t.children){let r=gd(e,n);if(r.length)return r.unshift(t),r}return[]}var st=class{value;children;constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}};function Kr(e){let t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t}var $a=class extends Va{snapshot;constructor(t,n){super(t),this.snapshot=n,Id(this,t)}toString(){return this.snapshot.toString()}};function Vy(e){let t=nI(e),n=new ve([new sr("",{})]),r=new ve({}),o=new ve({}),i=new ve({}),s=new ve(""),c=new to(n,r,i,s,o,j,e,t.root);return c.snapshot=t.root,new $a(new st(c,[]),t)}function nI(e){let t={},n={},r={},o="",i=new Zr([],t,r,o,n,j,e,null,{});return new qa("",new st(i,[]))}var to=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,n,r,o,i,s,c,l){this.urlSubject=t,this.paramsSubject=n,this.queryParamsSubject=r,this.fragmentSubject=o,this.dataSubject=i,this.outlet=s,this.component=c,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(F(u=>u[Di]))??L(void 0),this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(F(t=>Xr(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(F(t=>Xr(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function za(e,t,n="emptyOnly"){let r,{routeConfig:o}=e;return t!==null&&(n==="always"||o?.path===""||!t.component&&!t.routeConfig?.loadComponent)?r={params:R(R({},t.params),e.params),data:R(R({},t.data),e.data),resolve:R(R(R(R({},e.data),t.data),o?.data),e._resolvedData)}:r={params:R({},e.params),data:R({},e.data),resolve:R(R({},e.data),e._resolvedData??{})},o&&zy(o)&&(r.resolve[Di]=o.title),r}var Zr=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Di]}constructor(t,n,r,o,i,s,c,l,u){this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=c,this.routeConfig=l,this._resolve=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Xr(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Xr(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(r=>r.toString()).join("/"),n=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${n}')`}},qa=class extends Va{url;constructor(t,n){super(n),this.url=t,Id(this,n)}toString(){return $y(this._root)}};function Id(e,t){t.value._routerState=e,t.children.forEach(n=>Id(e,n))}function $y(e){let t=e.children.length>0?` { ${e.children.map($y).join(", ")} } `:"";return`${e.value}${t}`}function Yu(e){if(e.snapshot){let t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,$t(t.queryParams,n.queryParams)||e.queryParamsSubject.next(n.queryParams),t.fragment!==n.fragment&&e.fragmentSubject.next(n.fragment),$t(t.params,n.params)||e.paramsSubject.next(n.params),RC(t.url,n.url)||e.urlSubject.next(n.url),$t(t.data,n.data)||e.dataSubject.next(n.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function yd(e,t){let n=$t(e.params,t.params)&&NC(e.url,t.url),r=!e.parent!=!t.parent;return n&&!r&&(!e.parent||yd(e.parent,t.parent))}function zy(e){return typeof e.title=="string"||e.title===null}var rI=new O(""),oI=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=j;activateEvents=new rt;deactivateEvents=new rt;attachEvents=new rt;detachEvents=new rt;routerOutletData=Hm(void 0);parentContexts=I(Qa);location=I(ba);changeDetector=I(Xo);inputBinder=I(Pd,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(n){if(n.name){let{firstChange:r,previousValue:o}=n.name;if(r)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(n){return this.parentContexts.getContext(n)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let n=this.parentContexts.getContext(this.name);n?.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new N(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new N(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new N(4012,!1);this.location.detach();let n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){let n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new N(4013,!1);this._activatedRoute=n;let o=this.location,s=n.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new vd(n,c,o.injector,this.routerOutletData);this.activated=o.createComponent(s,{index:o.length,injector:l,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(r){return new(r||e)};static \u0275dir=_u({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[lu]})}return e})(),vd=class e{route;childContexts;parent;outletData;__ngOutletInjector(t){return new e(this.route,this.childContexts,t,this.outletData)}constructor(t,n,r,o){this.route=t,this.childContexts=n,this.parent=r,this.outletData=o}get(t,n){return t===to?this.route:t===Qa?this.childContexts:t===rI?this.outletData:this.parent.get(t,n)}},Pd=new O("");function iI(e,t,n){let r=yi(e,t._root,n?n._root:void 0);return new $a(r,t)}function yi(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){let r=n.value;r._futureSnapshot=t.value;let o=sI(e,t,n);return new st(r,o)}else{if(e.shouldAttach(t.value)){let i=e.retrieve(t.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(c=>yi(e,c)),s}}let r=aI(t.value),o=t.children.map(i=>yi(e,i));return new st(r,o)}}function sI(e,t,n){return t.children.map(r=>{for(let o of n.children)if(e.shouldReuseRoute(r.value,o.value.snapshot))return yi(e,r,o);return yi(e,r)})}function aI(e){return new to(new ve(e.url),new ve(e.params),new ve(e.queryParams),new ve(e.fragment),new ve(e.data),e.outlet,e.component,e)}var vi=class{redirectTo;navigationBehaviorOptions;constructor(t,n){this.redirectTo=t,this.navigationBehaviorOptions=n}},qy="ngNavigationCancelingError";function Wa(e,t){let{redirectTo:n,navigationBehaviorOptions:r}=fi(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,o=Wy(!1,at.Redirect);return o.url=n,o.navigationBehaviorOptions=r,o}function Wy(e,t){let n=new Error(`NavigationCancelingError: ${e||""}`);return n[qy]=!0,n.cancellationCode=t,n}function cI(e){return Gy(e)&&fi(e.url)}function Gy(e){return!!e&&e[qy]}var lI=(e,t,n,r)=>F(o=>(new Sd(t,o.targetRouterState,o.currentRouterState,n,r).activate(e),o)),Sd=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,n,r,o,i){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=o,this.inputBindingEnabled=i}activate(t){let n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),Yu(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){let o=Kr(n);t.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,o[s],r),delete o[s]}),Object.values(o).forEach(i=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(o===i)if(o.component){let s=r.getContext(o.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,r);else i&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=Kr(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);if(r&&r.outlet){let s=r.outlet.detach(),c=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:c})}}deactivateRouteAndOutlet(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=Kr(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(t,n,r){let o=Kr(n);t.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new hd(i.value.snapshot))}),t.children.length&&this.forwardEvent(new dd(t.value.snapshot))}activateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(Yu(o),o===i)if(o.component){let s=r.getOrCreateContext(o.outlet);this.activateChildRoutes(t,n,s.children)}else this.activateChildRoutes(t,n,r);else if(o.component){let s=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let c=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),s.children.onOutletReAttached(c.contexts),s.attachRef=c.componentRef,s.route=c.route.value,s.outlet&&s.outlet.attach(c.componentRef,c.route.value),Yu(c.route.value),this.activateChildRoutes(t,null,s.children)}else s.attachRef=null,s.route=o,s.outlet&&s.outlet.activateWith(o,s.injector),this.activateChildRoutes(t,null,s.children)}else this.activateChildRoutes(t,null,r)}},Ga=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},Jr=class{component;route;constructor(t,n){this.component=t,this.route=n}};function uI(e,t,n){let r=e._root,o=t?t._root:null;return ci(r,o,n,[r.value])}function dI(e){let t=e.routeConfig?e.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:e,guards:t}}function ro(e,t){let n=Symbol(),r=t.get(e,n);return r===n?typeof e=="function"&&!Lp(e)?e:t.get(e):r}function ci(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=Kr(t);return e.children.forEach(s=>{fI(s,i[s.value.outlet],n,r.concat([s.value]),o),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,c])=>ui(c,n.getContext(s),o)),o}function fI(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,s=t?t.value:null,c=n?n.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let l=hI(s,i,i.routeConfig.runGuardsAndResolvers);l?o.canActivateChecks.push(new Ga(r)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?ci(e,t,c?c.children:null,r,o):ci(e,t,n,r,o),l&&c&&c.outlet&&c.outlet.isActivated&&o.canDeactivateChecks.push(new Jr(c.outlet.component,s))}else s&&ui(t,c,o),o.canActivateChecks.push(new Ga(r)),i.component?ci(e,null,c?c.children:null,r,o):ci(e,null,n,r,o);return o}function hI(e,t,n){if(typeof n=="function")return n(e,t);switch(n){case"pathParamsChange":return!ar(e.url,t.url);case"pathParamsOrQueryParamsChange":return!ar(e.url,t.url)||!$t(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!yd(e,t)||!$t(e.queryParams,t.queryParams);case"paramsChange":default:return!yd(e,t)}}function ui(e,t,n){let r=Kr(e),o=e.value;Object.entries(r).forEach(([i,s])=>{o.component?t?ui(s,t.children.getContext(i),n):ui(s,null,n):ui(s,t,n)}),o.component?t&&t.outlet&&t.outlet.isActivated?n.canDeactivateChecks.push(new Jr(t.outlet.component,o)):n.canDeactivateChecks.push(new Jr(null,o)):n.canDeactivateChecks.push(new Jr(null,o))}function Ti(e){return typeof e=="function"}function pI(e){return typeof e=="boolean"}function mI(e){return e&&Ti(e.canLoad)}function gI(e){return e&&Ti(e.canActivate)}function yI(e){return e&&Ti(e.canActivateChild)}function vI(e){return e&&Ti(e.canDeactivate)}function SI(e){return e&&Ti(e.canMatch)}function Qy(e){return e instanceof Zt||e?.name==="EmptyError"}var Oa=Symbol("INITIAL_VALUE");function no(){return nt(e=>Ps(e.map(t=>t.pipe(Jt(1),Fo(Oa)))).pipe(F(t=>{for(let n of t)if(n!==!0){if(n===Oa)return Oa;if(n===!1||bI(n))return n}return!0}),tt(t=>t!==Oa),Jt(1)))}function bI(e){return fi(e)||e instanceof vi}function DI(e,t){return Pe(n=>{let{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return s.length===0&&i.length===0?L(ue(R({},n),{guardsResult:!0})):wI(s,r,o,e).pipe(Pe(c=>c&&pI(c)?TI(r,i,e,t):L(c)),F(c=>ue(R({},n),{guardsResult:c})))})}function wI(e,t,n,r){return he(e).pipe(Pe(o=>MI(o.component,o.route,n,t,r)),Xt(o=>o!==!0,!0))}function TI(e,t,n,r){return he(t).pipe(bn(o=>xr(CI(o.route.parent,r),EI(o.route,r),PI(e,o.path,n),II(e,o.route,n))),Xt(o=>o!==!0,!0))}function EI(e,t){return e!==null&&t&&t(new fd(e)),L(!0)}function CI(e,t){return e!==null&&t&&t(new ud(e)),L(!0)}function II(e,t,n){let r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||r.length===0)return L(!0);let o=r.map(i=>Ms(()=>{let s=wi(t)??n,c=ro(i,s),l=gI(c)?c.canActivate(t,e):it(s,()=>c(t,e));return xn(l).pipe(Xt())}));return L(o).pipe(no())}function PI(e,t,n){let r=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(s=>dI(s)).filter(s=>s!==null).map(s=>Ms(()=>{let c=s.guards.map(l=>{let u=wi(s.node)??n,d=ro(l,u),f=yI(d)?d.canActivateChild(r,e):it(u,()=>d(r,e));return xn(f).pipe(Xt())});return L(c).pipe(no())}));return L(i).pipe(no())}function MI(e,t,n,r,o){let i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!i||i.length===0)return L(!0);let s=i.map(c=>{let l=wi(t)??o,u=ro(c,l),d=vI(u)?u.canDeactivate(e,t,n,r):it(l,()=>u(e,t,n,r));return xn(d).pipe(Xt())});return L(s).pipe(no())}function RI(e,t,n,r){let o=t.canLoad;if(o===void 0||o.length===0)return L(!0);let i=o.map(s=>{let c=ro(s,e),l=mI(c)?c.canLoad(t,n):it(e,()=>c(t,n));return xn(l)});return L(i).pipe(no(),Ky(r))}function Ky(e){return al(Oe(t=>{if(typeof t!="boolean")throw Wa(e,t)}),F(t=>t===!0))}function _I(e,t,n,r){let o=t.canMatch;if(!o||o.length===0)return L(!0);let i=o.map(s=>{let c=ro(s,e),l=SI(c)?c.canMatch(t,n):it(e,()=>c(t,n));return xn(l)});return L(i).pipe(no(),Ky(r))}var Si=class{segmentGroup;constructor(t){this.segmentGroup=t||null}},bi=class extends Error{urlTree;constructor(t){super(),this.urlTree=t}};function Qr(e){return _r(new Si(e))}function xI(e){return _r(new N(4e3,!1))}function kI(e){return _r(Wy(!1,at.GuardRejected))}var bd=class{urlSerializer;urlTree;constructor(t,n){this.urlSerializer=t,this.urlTree=n}lineralizeSegments(t,n){let r=[],o=n.root;for(;;){if(r=r.concat(o.segments),o.numberOfChildren===0)return L(r);if(o.numberOfChildren>1||!o.children[j])return xI(`${t.redirectTo}`);o=o.children[j]}}applyRedirectCommands(t,n,r,o,i){if(typeof n!="string"){let c=n,{queryParams:l,fragment:u,routeConfig:d,url:f,outlet:p,params:h,data:g,title:y}=o,b=it(i,()=>c({params:h,data:g,queryParams:l,fragment:u,routeConfig:d,url:f,outlet:p,title:y}));if(b instanceof sn)throw new bi(b);n=b}let s=this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),t,r);if(n[0]==="/")throw new bi(s);return s}applyRedirectCreateUrlTree(t,n,r,o){let i=this.createSegmentGroup(t,n.root,r,o);return new sn(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){let r={};return Object.entries(t).forEach(([o,i])=>{if(typeof i=="string"&&i[0]===":"){let c=i.substring(1);r[o]=n[c]}else r[o]=i}),r}createSegmentGroup(t,n,r,o){let i=this.createSegments(t,n.segments,r,o),s={};return Object.entries(n.children).forEach(([c,l])=>{s[c]=this.createSegmentGroup(t,l,r,o)}),new te(i,s)}createSegments(t,n,r,o){return n.map(i=>i.path[0]===":"?this.findPosParam(t,i,o):this.findOrReturn(i,r))}findPosParam(t,n,r){let o=r[n.path.substring(1)];if(!o)throw new N(4001,!1);return o}findOrReturn(t,n){let r=0;for(let o of n){if(o.path===t.path)return n.splice(r),o;r++}return t}},Dd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function NI(e,t,n,r,o){let i=Yy(e,t,n);return i.matched?(r=eI(t,r),_I(r,t,n,o).pipe(F(s=>s===!0?i:R({},Dd)))):L(i)}function Yy(e,t,n){if(t.path==="**")return OI(n);if(t.path==="")return t.pathMatch==="full"&&(e.hasChildren()||n.length>0)?R({},Dd):{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};let o=(t.matcher||MC)(n,e,t);if(!o)return R({},Dd);let i={};Object.entries(o.posParams??{}).forEach(([c,l])=>{i[c]=l.path});let s=o.consumed.length>0?R(R({},i),o.consumed[o.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:o.consumed,remainingSegments:n.slice(o.consumed.length),parameters:s,positionalParamSegments:o.posParams??{}}}function OI(e){return{matched:!0,parameters:e.length>0?Ry(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function Cy(e,t,n,r){return n.length>0&&LI(e,n,r)?{segmentGroup:new te(t,FI(r,new te(n,e.children))),slicedSegments:[]}:n.length===0&&HI(e,n,r)?{segmentGroup:new te(e.segments,AI(e,n,r,e.children)),slicedSegments:n}:{segmentGroup:new te(e.segments,e.children),slicedSegments:n}}function AI(e,t,n,r){let o={};for(let i of n)if(Ka(e,t,i)&&!r[xt(i)]){let s=new te([],{});o[xt(i)]=s}return R(R({},r),o)}function FI(e,t){let n={};n[j]=t;for(let r of e)if(r.path===""&&xt(r)!==j){let o=new te([],{});n[xt(r)]=o}return n}function LI(e,t,n){return n.some(r=>Ka(e,t,r)&&xt(r)!==j)}function HI(e,t,n){return n.some(r=>Ka(e,t,r))}function Ka(e,t,n){return(e.hasChildren()||t.length>0)&&n.pathMatch==="full"?!1:n.path===""}function UI(e,t,n){return t.length===0&&!e.children[n]}var wd=class{};function jI(e,t,n,r,o,i,s="emptyOnly"){return new Td(e,t,n,r,o,s,i).recognize()}var BI=31,Td=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,n,r,o,i,s,c){this.injector=t,this.configLoader=n,this.rootComponentType=r,this.config=o,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=c,this.applyRedirects=new bd(this.urlSerializer,this.urlTree)}noMatchError(t){return new N(4002,`'${t.segmentGroup}'`)}recognize(){let t=Cy(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(F(({children:n,rootSnapshot:r})=>{let o=new st(r,n),i=new qa("",o),s=GC(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}}))}match(t){let n=new Zr([],Object.freeze({}),Object.freeze(R({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),j,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,t,j,n).pipe(F(r=>({children:r,rootSnapshot:n})),Sn(r=>{if(r instanceof bi)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof Si?this.noMatchError(r):r}))}processSegmentGroup(t,n,r,o,i){return r.segments.length===0&&r.hasChildren()?this.processChildren(t,n,r,i):this.processSegment(t,n,r,r.segments,o,!0,i).pipe(F(s=>s instanceof st?[s]:[]))}processChildren(t,n,r,o){let i=[];for(let s of Object.keys(r.children))s==="primary"?i.unshift(s):i.push(s);return he(i).pipe(bn(s=>{let c=r.children[s],l=tI(n,s);return this.processSegmentGroup(t,l,c,s,o)}),yl((s,c)=>(s.push(...c),s)),Dn(null),gl(),Pe(s=>{if(s===null)return Qr(r);let c=Zy(s);return VI(c),L(c)}))}processSegment(t,n,r,o,i,s,c){return he(n).pipe(bn(l=>this.processSegmentAgainstRoute(l._injector??t,n,l,r,o,i,s,c).pipe(Sn(u=>{if(u instanceof Si)return L(null);throw u}))),Xt(l=>!!l),Sn(l=>{if(Qy(l))return UI(r,o,i)?L(new wd):Qr(r);throw l}))}processSegmentAgainstRoute(t,n,r,o,i,s,c,l){return xt(r)!==s&&(s===j||!Ka(o,i,r))?Qr(o):r.redirectTo===void 0?this.matchSegmentAgainstRoute(t,o,r,i,s,l):this.allowRedirects&&c?this.expandSegmentAgainstRouteUsingRedirect(t,o,n,r,i,s,l):Qr(o)}expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s,c){let{matched:l,parameters:u,consumedSegments:d,positionalParamSegments:f,remainingSegments:p}=Yy(n,o,i);if(!l)return Qr(n);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>BI&&(this.allowRedirects=!1));let h=new Zr(i,u,Object.freeze(R({},this.urlTree.queryParams)),this.urlTree.fragment,Iy(o),xt(o),o.component??o._loadedComponent??null,o,Py(o)),g=za(h,c,this.paramsInheritanceStrategy);h.params=Object.freeze(g.params),h.data=Object.freeze(g.data);let y=this.applyRedirects.applyRedirectCommands(d,o.redirectTo,f,h,t);return this.applyRedirects.lineralizeSegments(o,y).pipe(Pe(b=>this.processSegment(t,r,n,b.concat(p),s,!1,c)))}matchSegmentAgainstRoute(t,n,r,o,i,s){let c=NI(n,r,o,t,this.urlSerializer);return r.path==="**"&&(n.children={}),c.pipe(nt(l=>l.matched?(t=r._injector??t,this.getChildConfig(t,r,o).pipe(nt(({routes:u})=>{let d=r._loadedInjector??t,{parameters:f,consumedSegments:p,remainingSegments:h}=l,g=new Zr(p,f,Object.freeze(R({},this.urlTree.queryParams)),this.urlTree.fragment,Iy(r),xt(r),r.component??r._loadedComponent??null,r,Py(r)),y=za(g,s,this.paramsInheritanceStrategy);g.params=Object.freeze(y.params),g.data=Object.freeze(y.data);let{segmentGroup:b,slicedSegments:S}=Cy(n,p,h,u);if(S.length===0&&b.hasChildren())return this.processChildren(d,u,b,g).pipe(F(D=>new st(g,D)));if(u.length===0&&S.length===0)return L(new st(g,[]));let T=xt(r)===i;return this.processSegment(d,u,b,S,T?j:i,!0,g).pipe(F(D=>new st(g,D instanceof st?[D]:[])))}))):Qr(n)))}getChildConfig(t,n,r){return n.children?L({routes:n.children,injector:t}):n.loadChildren?n._loadedRoutes!==void 0?L({routes:n._loadedRoutes,injector:n._loadedInjector}):RI(t,n,r,this.urlSerializer).pipe(Pe(o=>o?this.configLoader.loadChildren(t,n).pipe(Oe(i=>{n._loadedRoutes=i.routes,n._loadedInjector=i.injector})):kI(n))):L({routes:[],injector:t})}};function VI(e){e.sort((t,n)=>t.value.outlet===j?-1:n.value.outlet===j?1:t.value.outlet.localeCompare(n.value.outlet))}function $I(e){let t=e.value.routeConfig;return t&&t.path===""}function Zy(e){let t=[],n=new Set;for(let r of e){if(!$I(r)){t.push(r);continue}let o=t.find(i=>r.value.routeConfig===i.value.routeConfig);o!==void 0?(o.children.push(...r.children),n.add(o)):t.push(r)}for(let r of n){let o=Zy(r.children);t.push(new st(r.value,o))}return t.filter(r=>!n.has(r))}function Iy(e){return e.data||{}}function Py(e){return e.resolve||{}}function zI(e,t,n,r,o,i){return Pe(s=>jI(e,t,n,r,s.extractedUrl,o,i).pipe(F(({state:c,tree:l})=>ue(R({},s),{targetSnapshot:c,urlAfterRedirects:l}))))}function qI(e,t){return Pe(n=>{let{targetSnapshot:r,guards:{canActivateChecks:o}}=n;if(!o.length)return L(n);let i=new Set(o.map(l=>l.route)),s=new Set;for(let l of i)if(!s.has(l))for(let u of Jy(l))s.add(u);let c=0;return he(s).pipe(bn(l=>i.has(l)?WI(l,r,e,t):(l.data=za(l,l.parent,e).resolve,L(void 0))),Oe(()=>c++),kr(1),Pe(l=>c===s.size?L(n):We))})}function Jy(e){let t=e.children.map(n=>Jy(n)).flat();return[e,...t]}function WI(e,t,n,r){let o=e.routeConfig,i=e._resolve;return o?.title!==void 0&&!zy(o)&&(i[Di]=o.title),GI(i,e,t,r).pipe(F(s=>(e._resolvedData=s,e.data=za(e,e.parent,n).resolve,null)))}function GI(e,t,n,r){let o=Xu(e);if(o.length===0)return L({});let i={};return he(o).pipe(Pe(s=>QI(e[s],t,n,r).pipe(Xt(),Oe(c=>{if(c instanceof vi)throw Wa(new di,c);i[s]=c}))),kr(1),F(()=>i),Sn(s=>Qy(s)?We:_r(s)))}function QI(e,t,n,r){let o=wi(t)??r,i=ro(e,o),s=i.resolve?i.resolve(t,n):it(o,()=>i(t,n));return xn(s)}function Zu(e){return nt(t=>{let n=e(t);return n?he(n).pipe(F(()=>t)):L(t)})}var Xy=(()=>{class e{buildTitle(n){let r,o=n.root;for(;o!==void 0;)r=this.getResolvedTitleForRoute(o)??r,o=o.children.find(i=>i.outlet===j);return r}getResolvedTitleForRoute(n){return n.data[Di]}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>I(KI),providedIn:"root"})}return e})(),KI=(()=>{class e extends Xy{title;constructor(n){super(),this.title=n}updateTitle(n){let r=this.buildTitle(n);r!==void 0&&this.title.setTitle(r)}static \u0275fac=function(r){return new(r||e)(A(by))};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Md=new O("",{providedIn:"root",factory:()=>({})}),YI=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=ee({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(r,o){r&1&&me(0,"router-outlet")},dependencies:[oI],encapsulation:2})}return e})();function Rd(e){let t=e.children&&e.children.map(Rd),n=t?ue(R({},e),{children:t}):R({},e);return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==j&&(n.component=YI),n}var _d=new O(""),ZI=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=I(ku);loadComponent(n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return L(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=xn(n.loadComponent()).pipe(F(ev),Oe(i=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=i}),Kn(()=>{this.componentLoaders.delete(n)})),o=new Mr(r,()=>new Ue).pipe(Pr());return this.componentLoaders.set(n,o),o}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return L({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=JI(r,this.compiler,n,this.onLoadEndListener).pipe(Kn(()=>{this.childrenLoaders.delete(r)})),s=new Mr(i,()=>new Ue).pipe(Pr());return this.childrenLoaders.set(r,s),s}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function JI(e,t,n,r){return xn(e.loadChildren()).pipe(F(ev),Pe(o=>o instanceof Mu||Array.isArray(o)?L(o):he(t.compileModuleAsync(o))),F(o=>{r&&r(e);let i,s,c=!1;return Array.isArray(o)?(s=o,c=!0):(i=o.create(n).injector,s=i.get(_d,[],{optional:!0,self:!0}).flat()),{routes:s.map(Rd),injector:i}}))}function XI(e){return e&&typeof e=="object"&&"default"in e}function ev(e){return XI(e)?e.default:e}var xd=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>I(eP),providedIn:"root"})}return e})(),eP=(()=>{class e{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,r){return n}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),tP=new O("");var nP=new O(""),rP=(()=>{class e{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Ue;transitionAbortSubject=new Ue;configLoader=I(ZI);environmentInjector=I(Ke);destroyRef=I(ha);urlSerializer=I(Cd);rootContexts=I(Qa);location=I(ei);inputBindingEnabled=I(Pd,{optional:!0})!==null;titleStrategy=I(Xy);options=I(Md,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=I(xd);createViewTransition=I(tP,{optional:!0});navigationErrorHandler=I(nP,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>L(void 0);rootComponentType=null;destroyed=!1;constructor(){let n=o=>this.events.next(new cd(o)),r=o=>this.events.next(new ld(o));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=n,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(n){let r=++this.navigationId;this.transitions?.next(ue(R({},n),{extractedUrl:this.urlHandlingStrategy.extract(n.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r}))}setupNavigations(n){return this.transitions=new ve(null),this.transitions.pipe(tt(r=>r!==null),nt(r=>{let o=!1,i=!1;return L(r).pipe(nt(s=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,"",at.SupersededByNewNavigation),We;this.currentTransition=r,this.currentNavigation={id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:this.lastSuccessfulNavigation?ue(R({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!n.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),l=s.extras.onSameUrlNavigation??n.onSameUrlNavigation;if(!c&&l!=="reload"){let u="";return this.events.next(new lr(s.id,this.urlSerializer.serialize(s.rawUrl),u,rd.IgnoredSameUrlNavigation)),s.resolve(!1),We}if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return L(s).pipe(nt(u=>(this.events.next(new pi(u.id,this.urlSerializer.serialize(u.extractedUrl),u.source,u.restoredState)),u.id!==this.navigationId?We:Promise.resolve(u))),zI(this.environmentInjector,this.configLoader,this.rootComponentType,n.config,this.urlSerializer,this.paramsInheritanceStrategy),Oe(u=>{r.targetSnapshot=u.targetSnapshot,r.urlAfterRedirects=u.urlAfterRedirects,this.currentNavigation=ue(R({},this.currentNavigation),{finalUrl:u.urlAfterRedirects});let d=new Ba(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:u,extractedUrl:d,source:f,restoredState:p,extras:h}=s,g=new pi(u,this.urlSerializer.serialize(d),f,p);this.events.next(g);let y=Vy(this.rootComponentType).snapshot;return this.currentTransition=r=ue(R({},s),{targetSnapshot:y,urlAfterRedirects:d,extras:ue(R({},h),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=d,L(r)}else{let u="";return this.events.next(new lr(s.id,this.urlSerializer.serialize(s.extractedUrl),u,rd.IgnoredByUrlHandlingStrategy)),s.resolve(!1),We}}),Oe(s=>{let c=new od(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(c)}),F(s=>(this.currentTransition=r=ue(R({},s),{guards:uI(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),r)),DI(this.environmentInjector,s=>this.events.next(s)),Oe(s=>{if(r.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Wa(this.urlSerializer,s.guardsResult);let c=new id(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);this.events.next(c)}),tt(s=>s.guardsResult?!0:(this.cancelNavigationTransition(s,"",at.GuardRejected),!1)),Zu(s=>{if(s.guards.canActivateChecks.length!==0)return L(s).pipe(Oe(c=>{let l=new sd(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}),nt(c=>{let l=!1;return L(c).pipe(qI(this.paramsInheritanceStrategy,this.environmentInjector),Oe({next:()=>l=!0,complete:()=>{l||this.cancelNavigationTransition(c,"",at.NoDataFromResolver)}}))}),Oe(c=>{let l=new ad(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}))}),Zu(s=>{let c=l=>{let u=[];l.routeConfig?.loadComponent&&!l.routeConfig._loadedComponent&&u.push(this.configLoader.loadComponent(l.routeConfig).pipe(Oe(d=>{l.component=d}),F(()=>{})));for(let d of l.children)u.push(...c(d));return u};return Ps(c(s.targetSnapshot.root)).pipe(Dn(null),Jt(1))}),Zu(()=>this.afterPreactivation()),nt(()=>{let{currentSnapshot:s,targetSnapshot:c}=r,l=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return l?he(l).pipe(F(()=>r)):L(r)}),F(s=>{let c=iI(n.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=r=ue(R({},s),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,r}),Oe(()=>{this.events.next(new gi)}),lI(this.rootContexts,n.routeReuseStrategy,s=>this.events.next(s),this.inputBindingEnabled),Jt(1),Oe({next:s=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new cr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0)},complete:()=>{o=!0}}),vl(this.transitionAbortSubject.pipe(Oe(s=>{throw s}))),Kn(()=>{!o&&!i&&this.cancelNavigationTransition(r,"",at.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation=null,this.currentTransition=null)}),Sn(s=>{if(this.destroyed)return r.resolve(!1),We;if(i=!0,Gy(s))this.events.next(new on(r.id,this.urlSerializer.serialize(r.extractedUrl),s.message,s.cancellationCode)),cI(s)?this.events.next(new eo(s.url,s.navigationBehaviorOptions)):r.resolve(!1);else{let c=new mi(r.id,this.urlSerializer.serialize(r.extractedUrl),s,r.targetSnapshot??void 0);try{let l=it(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof vi){let{message:u,cancellationCode:d}=Wa(this.urlSerializer,l);this.events.next(new on(r.id,this.urlSerializer.serialize(r.extractedUrl),u,d)),this.events.next(new eo(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(l){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(l)}}return We}))}))}cancelNavigationTransition(n,r,o){let i=new on(n.id,this.urlSerializer.serialize(n.extractedUrl),r,o);this.events.next(i),n.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let n=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return n.toString()!==r?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function oP(e){return e!==Ha}var iP=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>I(sP),providedIn:"root"})}return e})(),Ed=class{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}},sP=(()=>{class e extends Ed{static \u0275fac=(()=>{let n;return function(o){return(n||(n=pu(e)))(o||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),tv=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>I(aP),providedIn:"root"})}return e})(),aP=(()=>{class e extends tv{location=I(ei);urlSerializer=I(Cd);options=I(Md,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=I(xd);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new sn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=Vy(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(n){return this.location.subscribe(r=>{r.type==="popstate"&&n(r.url,r.state)})}handleRouterEvent(n,r){if(n instanceof pi)this.stateMemento=this.createStateMemento();else if(n instanceof lr)this.rawUrlTree=r.initialUrl;else if(n instanceof Ba){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let o=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(r.targetBrowserUrl??o,r)}}else n instanceof gi?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(r.targetBrowserUrl??this.rawUrlTree,r)):n instanceof on&&(n.code===at.GuardRejected||n.code===at.NoDataFromResolver)?this.restoreHistory(r):n instanceof mi?this.restoreHistory(r,!0):n instanceof cr&&(this.lastSuccessfulId=n.id,this.currentPageId=this.browserPageId)}setBrowserUrl(n,r){let o=n instanceof sn?this.urlSerializer.serialize(n):n;if(this.location.isCurrentPathEqualTo(o)||r.extras.replaceUrl){let i=this.browserPageId,s=R(R({},r.extras.state),this.generateNgRouterState(r.id,i));this.location.replaceState(o,"",s)}else{let i=R(R({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(o,"",i)}}restoreHistory(n,r=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,i=this.currentPageId-o;i!==0?this.location.historyGo(i):this.currentUrlTree===n.finalUrl&&i===0&&(this.resetState(n),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(n),this.resetUrlToCurrentUrlTree())}resetState(n){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(n,r){return this.canceledNavigationResolution==="computed"?{navigationId:n,\u0275routerPageId:r}:{navigationId:n}}static \u0275fac=(()=>{let n;return function(o){return(n||(n=pu(e)))(o||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function cP(e,t){e.events.pipe(tt(n=>n instanceof cr||n instanceof on||n instanceof mi||n instanceof lr),F(n=>n instanceof cr||n instanceof lr?0:(n instanceof on?n.code===at.Redirect||n.code===at.SupersededByNewNavigation:!1)?2:1),tt(n=>n!==2),Jt(1)).subscribe(()=>{t()})}var lP={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},uP={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},nv=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=I(xu);stateManager=I(tv);options=I(Md,{optional:!0})||{};pendingTasks=I(Rn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=I(rP);urlSerializer=I(Cd);location=I(ei);urlHandlingStrategy=I(xd);_events=new Ue;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=I(iP);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=I(_d,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!I(Pd,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:n=>{this.console.warn(n)}}),this.subscribeToNavigationEvents()}eventsSubscription=new be;subscribeToNavigationEvents(){let n=this.navigationTransitions.events.subscribe(r=>{try{let o=this.navigationTransitions.currentTransition,i=this.navigationTransitions.currentNavigation;if(o!==null&&i!==null){if(this.stateManager.handleRouterEvent(r,i),r instanceof on&&r.code!==at.Redirect&&r.code!==at.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof cr)this.navigated=!0;else if(r instanceof eo){let s=r.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(r.url,o.currentRawUrl),l=R({browserUrl:o.extras.browserUrl,info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:o.extras.replaceUrl||this.urlUpdateStrategy==="eager"||oP(o.source)},s);this.scheduleNavigation(c,Ha,null,l,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}fP(r)&&this._events.next(r)}catch(o){this.navigationTransitions.transitionAbortSubject.next(o)}});this.eventsSubscription.add(n)}resetRootComponentType(n){this.routerState.root.component=n,this.navigationTransitions.rootComponentType=n}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ha,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((n,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(n,"popstate",r)},0)})}navigateToSyncWithBrowser(n,r,o){let i={replaceUrl:!0},s=o?.navigationId?o:null;if(o){let l=R({},o);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(i.state=l)}let c=this.parseUrl(n);this.scheduleNavigation(c,r,s,i)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(n){this.config=n.map(Rd),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(n,r={}){let{relativeTo:o,queryParams:i,fragment:s,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:s,d=null;switch(c??this.options.defaultQueryParamsHandling){case"merge":d=R(R({},this.currentUrlTree.queryParams),i);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let p=o?o.snapshot:this.routerState.snapshot.root;f=Hy(p)}catch{(typeof n[0]!="string"||n[0][0]!=="/")&&(n=[]),f=this.currentUrlTree.root}return Uy(f,n,d,u??null)}navigateByUrl(n,r={skipLocationChange:!1}){let o=fi(n)?n:this.parseUrl(n),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,Ha,null,r)}navigate(n,r={skipLocationChange:!1}){return dP(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){try{return this.urlSerializer.parse(n)}catch{return this.urlSerializer.parse("/")}}isActive(n,r){let o;if(r===!0?o=R({},lP):r===!1?o=R({},uP):o=r,fi(n))return Dy(this.currentUrlTree,n,o);let i=this.parseUrl(n);return Dy(this.currentUrlTree,i,o)}removeEmptyProps(n){return Object.entries(n).reduce((r,[o,i])=>(i!=null&&(r[o]=i),r),{})}scheduleNavigation(n,r,o,i,s){if(this.disposed)return Promise.resolve(!1);let c,l,u;s?(c=s.resolve,l=s.reject,u=s.promise):u=new Promise((f,p)=>{c=f,l=p});let d=this.pendingTasks.add();return cP(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:n,extras:i,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(f=>Promise.reject(f))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function dP(e){for(let t=0;t<e.length;t++)if(e[t]==null)throw new N(4008,!1)}function fP(e){return!(e instanceof gi)&&!(e instanceof eo)}var hP=new O("");function rv(e,...t){return Qo([{provide:_d,multi:!0,useValue:e},[],{provide:to,useFactory:pP,deps:[nv]},{provide:Da,multi:!0,useFactory:mP},t.map(n=>n.\u0275providers)])}function pP(e){return e.routerState.root}function mP(){let e=I(Rt);return t=>{let n=e.get(tn);if(t!==n.components[0])return;let r=e.get(nv),o=e.get(gP);e.get(yP)===1&&r.initialNavigation(),e.get(vP,null,$.Optional)?.setUpPreloading(),e.get(hP,null,$.Optional)?.init(),r.resetRootComponentType(n.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var gP=new O("",{factory:()=>new Ue}),yP=new O("",{providedIn:"root",factory:()=>1});var vP=new O("");var ce=(()=>{class e{constructor(){this.raidTierSource=new ve(""),this.regionSource=new ve(""),this.pokemonListSource=new ve(""),this.teraTypeSource=new ve(""),this.moveListSource=new ve(""),this.loadingSource=new ve(!1),this.raidTier=this.raidTierSource.asObservable(),this.regionList=this.regionSource.asObservable(),this.pokemonList=this.pokemonListSource.asObservable(),this.teraType=this.teraTypeSource.asObservable(),this.moveList=this.moveListSource.asObservable(),this.loading=this.loadingSource.asObservable()}changeRaidTier(n){this.raidTierSource.next(n)}changeRegionList(n){this.regionSource.next(n)}changePokemon(n){this.pokemonListSource.next(n)}changeTeraType(n){this.teraTypeSource.next(n)}changeMoveList(n){this.moveListSource.next(n)}changeLoading(n){this.loadingSource.next(n)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var ov=(()=>{class e{constructor(n){this.stateService=n}valueChanged(){let n=document.getElementById("raidTier"),r=n.selectedIndex,o=n.options[r];this.stateService.changeRaidTier(o.value)}static{this.\u0275fac=function(r){return new(r||e)(q(ce))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-raid-tier"]],decls:7,vars:0,consts:[["id","raidTier",3,"change"],["value",""],["value","5"],["value","6"]],template:function(r,o){r&1&&(oe(0,"select",0),vt("change",function(){return o.valueChanged()}),oe(1,"option",1),we(2,"-- Tier --"),pe(),oe(3,"option",2),we(4,"5 Star"),pe(),oe(5,"option",3),we(6,"6 Star"),pe()())},encapsulation:2})}}return e})();var m=function(e){return e.Paldea="Paldea",e.Kitakami="Kitakami",e.Terarium="Terarium",e}(m||{}),a=function(e){return e.Time="Time",e.HP="HP",e}(a||{}),zt=[{name:"Abomasnow",region:m.Paldea,info:{moves:["Energy Ball","Ice Punch","Ice Shard","Leer","Blizzard","Snowscape","Aurora Veil"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Blizzard"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Snowscape"},{type:a.HP,threshold:25,action:"Uses Aurora Veil"}]}},{name:"Altaria",region:m.Paldea,info:{moves:["Dragon Pulse","Hurricane","Sing","Mist","Safeguard","Cotton Guard"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Safeguard"},{type:a.HP,threshold:75,action:"Uses"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Cotton Guard"},{type:a.HP,threshold:25,action:"Uses Sing"}]}},{name:"Amoonguss",region:m.Paldea,info:{moves:["Energy Ball","Sludge Bomb","Spore","Clear Smog","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Spore"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Annihilape",region:m.Paldea,info:{moves:["Shadow Claw","Close Combat","Outrage","Leer","Taunt","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Bulk Up"}]}},{name:"Appletun",region:m.Paldea,info:{moves:["Apple Acid","Dragon Pulse","Giga Drain","Body Press","","Growth"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses"},{type:a.HP,threshold:75,action:"Uses Growth"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Arboliva",region:m.Paldea,info:{moves:["Energy Ball","Hyper Voice","Earth Power","Charm","Sunny Day","Growth","Leaf Storm"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Growth"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Leaf Storm"}]}},{name:"Arcanine",region:m.Paldea,info:{moves:["Flamethrower","Crunch","Extreme Speed","Fire Fang","Sunny Day","Leer"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Leer"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Armarouge",region:m.Paldea,info:{moves:["Armor Cannon","Psychic","Night Shade","Will-O-Wisp","Sunny Day","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Sunny Day"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Avalugg",region:m.Paldea,info:{moves:["Icicle Crash","Double-Edge","Crunch","Ice Fang","Snowscape","Iron Defense"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Snowscape"},{type:a.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Baxcalibur",region:m.Paldea,info:{moves:["Dragon Claw","Icicle Crash","Ice Shard","Body Press","Snowscape"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Blissey",region:m.Paldea,info:{moves:["Dazzling Gleam","Hyper Voice","Sing","Seismic Toss","Gravity"],specialMoves:["Seismic Toss","Gravity"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Gravity"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Bombirdier",region:m.Paldea,info:{moves:["Rock Slide","Sucker Punch","Brave Bird","Torment","Knock Off","Feather Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Feather Dance"}]}},{name:"Brambleghast",region:m.Paldea,info:{moves:["Giga Drain","Shadow Ball","Power Whip","Infestation","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Grassy Terrain"}]}},{name:"Braviary",region:m.Paldea,info:{moves:["Acrobatics","Crush Claw","Superpower","Air Slash","Tailwind","Hone Claws"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Tailwind"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Hone Claws"},{type:a.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Breloom",region:m.Paldea,info:{moves:["Seed Bomb","Mach Punch","Worry Seed","Headbutt","Grassy Terrain","Spore"],specialMoves:["Spore"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Bronzong",region:m.Paldea,info:{moves:["Flash Cannon","Extrasensory","Metal Sound","Payback","Rain Dance","Calm Mind","Reflect"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Calm Mind"},{type:a.HP,threshold:25,action:"Uses Reflect"}]}},{name:"Camerupt",region:m.Paldea,info:{moves:["Flamethrower","Earth Power","Yawn","Eruption","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Ceruledge",region:m.Paldea,info:{moves:["Bitter Blade","Shadow Claw","Psycho Cut","Will-O-Wisp","Sunny Day","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Sunny Day"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Swords Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Cetitan",region:m.Paldea,info:{moves:["Ice Spinner","Liquidation","Yawn","Entrainment","Snowscape"],specialMoves:["Yawn","Entrainment"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Clawitzer",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Aura Sphere","Crabhammer","Rain Dance"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Water Pulse"}]}},{name:"Cloyster",region:m.Paldea,info:{moves:["Icicle Spear","Hydro Pump","Ice Shard","Supersonic","Shell Smash"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Shell Smash"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Coalossal",region:m.Paldea,info:{moves:["Heat Crash","Stone Edge","Incinerate","Ancient Power","Sandstorm","Tar Shot","Fire Blast"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Uses Tar Shot"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Fire Blast"}]}},{name:"Copperajah",region:m.Paldea,info:{moves:["Heavy Slam","Strength","Curse","High Horsepower","Sandstorm","Iron Defense"],specialMoves:["Curse"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Corviknight",region:m.Paldea,info:{moves:["Steel Wing","Drill Peck","Taunt","Body Press","Iron Defense","Hone Claws"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Hone Claws"}]}},{name:"Delibird",region:m.Paldea,info:{moves:["Present","Drill Peck","Ice Punch","Blizzard","Snowscape"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Present"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Present"}]}},{name:"Ditto",region:m.Paldea,info:{moves:["Transform"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:50,action:"Stats & Status Reset"}]}},{name:"Dondozo",region:m.Paldea,info:{moves:["Order Up","Waterfall","Heavy Slam","Tickle","Rain Dance","Stockpile"],specialMoves:["Stockpile"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Stockpile"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Dragalge",region:m.Paldea,info:{moves:["Dragon Pulse","Sludge Bomb","Water Pulse","Toxic","Acid Spray","Draco Meteor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Acid Spray"},{type:a.HP,threshold:75,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Draco Meteor"}]}},{name:"Dragapult",region:m.Paldea,info:{moves:["Shadow Ball","Dragon Darts","Thunderbolt","Hex","Reflect","Light Screen"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Light Screen"}]}},{name:"Dragonite",region:m.Paldea,info:{moves:["Dragon Rush","Aerial Ace","Extreme Speed","Hurricane","Safeguard","Dragon Dance","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Safeguard"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:35,action:"Uses Rain Dance"}]}},{name:"Drifblim",region:m.Paldea,info:{moves:["Hex","Air Slash","Thunder Wave","Shadow Ball","Will-O-Wisp"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Eelektross",region:m.Paldea,info:{moves:["Wild Charge","Flamethrower","Discharge","Crush Claw","Ion Deluge","Thunder Wave","Coil"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Ion Deluge"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:25,action:"Uses Coil"}]}},{name:"Eevee",region:m.Paldea,info:{moves:["Tera Blast","Take Down","Shadow Ball","Tickle","Yawn","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Yawn"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Falinks",region:m.Paldea,info:{moves:["Megahorn","Reversal","Headbutt","Brick Break","No Retreat"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:40,action:"Uses No Retreat"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Flapple",region:m.Paldea,info:{moves:["Grav Apple","Dragon Breath","Dragon Rush","Trailblaze","Grassy Terrain","Iron Defense","Dragon Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Dragon Dance"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Florges",region:m.Paldea,info:{moves:["Petal Dance","Moonblast","Psychic","Safeguard","Grassy Terrain","Calm Mind"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Grassy Terrain"}]}},{name:"Froslass",region:m.Paldea,info:{moves:["Frost Breath","Shadow Ball","Scary Face","Draining Kiss","Snowscape","Disable","Aurora Veil"],specialMoves:["Disable"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:25,action:"Uses Aurora Veil"}]}},{name:"Gallade",region:m.Paldea,info:{moves:["Psycho Cut","Brick Break","Shadow Sneak","Fury Cutter","Hypnosis","Disable","Psychic Terrain"],specialMoves:["Disable","Shadow Sneak"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Psychic Terrain"}]}},{name:"Garchomp",region:m.Paldea,info:{moves:["Earthquake","Dragon Claw","Iron Head","Slash","Sandstorm","Bulldoze"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Uses Bulldoze"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Gardevoir",region:m.Paldea,info:{moves:["Psychic","Moonblast","Disable","Draining Kiss","Misty Terrain","Calm Mind","Psychic Terrain"],specialMoves:["Disable"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Psychic Terrain"}]}},{name:"Garganacl",region:m.Paldea,info:{moves:["Salt Cure","Rock Slide","Hammer Arm","Sandstorm"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Gengar",region:m.Paldea,info:{moves:["Shadow Ball","Sludge Bomb","Confuse Ray","Spite","Hypnosis"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Hypnosis"}]}},{name:"Glalie",region:m.Paldea,info:{moves:["Freeze-Dry","Crunch","Headbutt","Frost Breath","Snowscape","Disable"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:85,action:"Uses Snowscape"}]}},{name:"Glimmora",region:m.Paldea,info:{moves:["Power Gem","Sludge Bomb","Mortal Spin","Ancient Power","Sandstorm","Tera Blast"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Tera Blast"}]}},{name:"Goodra",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Sludge Bomb","Power Whip","Rain Dance","Draco Meteor","Acid Armor"],specialMoves:["Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Acid Armor"}]}},{name:"Gothitelle",region:m.Paldea,info:{moves:["Psychic","Thunder Wave","Thunderbolt","Stored Power","Calm Mind","Light Screen"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Calm Mind"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:25,action:"Uses Light Screen"}]}},{name:"Greedent",region:m.Paldea,info:{moves:["Body Slam","Body Press","Bullet Seed","Tail Whip","Stockpile"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Stockpile"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Stockpile"}]}},{name:"Grimmsnarl",region:m.Paldea,info:{moves:["Spirit Break","False Surrender","Scary Face","Foul Play","Light Screen","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Light Screen"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Gyarados",region:m.Paldea,info:{moves:["Aqua Tail","Twister","Hurricane","Crunch","Scary Face","Taunt","Dragon Dance","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:35,action:"Uses Rain Dance"}]}},{name:"Hariyama",region:m.Paldea,info:{moves:["Reversal","Brick Break","Brine","Heavy Slam","Scary Face","Taunt","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Bulk Up"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Hatterene",region:m.Paldea,info:{moves:["Dazzling Gleam","Psychic","Dark Pulse","Charm","Misty Terrain","Calm Mind","Psychic Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Psychic Terrain"}]}},{name:"Haxorus",region:m.Paldea,info:{moves:["Dragon Claw","Crunch","Giga Impact","First Impression","Harden","Dragon Dance"],specialMoves:["Harden","First Impression"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Harden"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Dragon Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Hippowdon",region:m.Paldea,info:{moves:["Earthquake","Yawn","Rock Slide","Body Slam","Stockpile"],specialMoves:["Stockpile"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Yawn"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Stockpile"}]}},{name:"Honchkrow",region:m.Paldea,info:{moves:["Night Slash","Hurricane","Haze","Wing Attack","Nasty Plot"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Nasty Plot"}]}},{name:"Houndoom",region:m.Paldea,info:{moves:["Flamethrower","Crunch","Taunt","Will-O-Wisp","Sunny Day","Howl"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Howl"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Hydreigon",region:m.Paldea,info:{moves:["Dark Pulse","Dragon Pulse","Scary Face","Dragon Rush","Taunt","Reflect","Nasty Plot"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Uses Reflect"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Indeedee (Male)",formName:"indeedee",region:m.Paldea,info:{moves:["Psychic","Hyper Voice","Shadow Ball","Trick Room","Play Nice","Calm Mind"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Play Nice"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Indeedee (Female)",formName:"indeedee",imageAlt:"-f",region:m.Paldea,info:{moves:["Psychic","Hyper Voice","Shadow Ball","Trick Room","Play Nice","Calm Mind"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Play Nice"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Kingambit",region:m.Paldea,info:{moves:["Iron Head","Night Slash","Torment","Slash","Taunt","Metal Burst"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Torment"},{type:a.Time,threshold:15,action:"Uses Metal Burst"}]}},{name:"Krookodile",region:m.Paldea,info:{moves:["Earthquake","Crunch","Sand Tomb","Counter","Torment","Hone Claws"],specialMoves:["Counter"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Torment"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Hone Claws"}]}},{name:"Luxray",region:m.Paldea,info:{moves:["Crunch","Wild Charge","Discharge","Thunder Wave","Electric Terrain","Leer"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Uses Leer"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Electric Terrain"}]}},{name:"Mabosstiff",region:m.Paldea,info:{moves:["Crunch","Play Rough","Take Down","Swagger","Taunt"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Magnezone",region:m.Paldea,info:{moves:["Thunderbolt","Flash Cannon","Tri Attack","Thunder Wave","Magnet Rise","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Magnet Rise"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Mimikyu",region:m.Paldea,info:{moves:["Play Rough","Shadow Claw","Will-O-Wisp","Shadow Sneak","Light Screen","Taunt"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Light Screen"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Mismagius",region:m.Paldea,info:{moves:["Mystical Fire","Shadow Ball","Confuse Ray","Taunt","Light Screen","Nasty Plot"],specialMoves:["Light Screen"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Light Screen"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Nasty Plot"}]}},{name:"Mudsdale",region:m.Paldea,info:{moves:["High Horsepower","Body Press","Rock Smash","Heavy Slam","Scary Face","Iron Defense"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Scary Face"},{type:a.Time,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"}]}},{name:"Noivern",region:m.Paldea,info:{moves:["Air Slash","Dragon Pulse","Acrobatics","Boomburst","Tailwind"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Tailwind"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Tailwind"},{type:a.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Oranguru",region:m.Paldea,info:{moves:["Facade","Psychic","Stored Power","Yawn","Calm Mind","Light Screen"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Calm Mind"},{type:a.HP,threshold:75,action:"Uses Light Screen"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Orthworm",region:m.Paldea,info:{moves:["Iron Head","Earthquake","Stomping Tantrum","Wrap","Sandstorm","Coil"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Uses Coil"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Palafin",region:m.Paldea,info:{moves:["Liquidation","Acrobatics","Charm","Boomburst","Rain Dance","Bulk Up"],specialMoves:["Boomburst"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Passimian",region:m.Paldea,info:{moves:["Reversal","Rock Smash","Facade","Gunk Shot","Taunt","Trailblaze","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Uses Trailblaze"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Bulk Up"}]}},{name:"Pawmot",region:m.Paldea,info:{moves:["Wild Charge","Close Combat","Nuzzle","Sweet Kiss","Double Shock"],specialMoves:["Sweet Kiss"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:80,action:"Uses Nuzzle"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Double Shock"}]}},{name:"Pincurchin",region:m.Paldea,info:{moves:["Zing Zap","Thunder","Surf","Poison Jab","Rain Dance","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Rain Dance"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Polteageist",region:m.Paldea,info:{moves:["Shadow Ball","Mega Drain","Astonish","Will-O-Wisp","Shell Smash"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Shell Smash"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Raichu",region:m.Paldea,info:{moves:["Discharge","Iron Tail","Charm","Nuzzle","Electric Terrain","Thunder Wave"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Electric Terrain"}]}},{name:"Revavroom",region:m.Paldea,info:{moves:["Spin Out","Taunt","Gunk Shot","Overheat","Scary Face","Shift Gear"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Shift Gear"},{type:a.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Rotom",region:m.Paldea,info:{moves:["Discharge","Uproar","Hex","Thunder Wave","Charge","Eerie Impulse"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Charge"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Eerie Impulse"}]}},{name:"Sableye",region:m.Paldea,info:{moves:["Shadow Claw","Foul Play","Will-O-Wisp","Night Shade","Flatter","Torment"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Flatter"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Torment"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Salamence",region:m.Paldea,info:{moves:["Dragon Rush","Aerial Ace","Hyper Voice","Draco Meteor","Dragon Dance","Focus Energy"],specialMoves:["Dragon Rush"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:25,action:"Uses Focus Energy"}]}},{name:"Scizor",region:m.Paldea,info:{moves:["Iron Head","X-Scissor","Bullet Punch","Slash","Iron Defense","Focus Energy"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Iron Defense"},{type:a.HP,threshold:75,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"}]}},{name:"Scyther",region:m.Paldea,info:{moves:["Aerial Ace","X-Scissor","Slash","Agility","Focus Energy","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Focus Energy"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Swords Dance"}]}},{name:"Slaking",region:m.Paldea,info:{moves:["Facade","Shadow Claw","Play Rough","Swagger","Encore"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Encore"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"}]}},{name:"Slowbro",region:m.Paldea,info:{moves:["Zen Headbutt","Liquidation","Yawn","Water Pulse","Curse"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Curse"},{type:a.HP,threshold:70,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Curse"}]}},{name:"Slowking",region:m.Paldea,info:{moves:["Psychic","Surf","Yawn","Water Pulse","Psychic Terrain","Calm Mind"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Psychic Terrain"},{type:a.HP,threshold:70,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"}]}},{name:"Staraptor",region:m.Paldea,info:{moves:["Close Combat","Brave Bird","Quick Attack","Double-Edge"],specialMoves:["Double-Edge"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Brave Bird"}]}},{name:"Talonflame",region:m.Paldea,info:{moves:["Acrobatics","Flare Blitz","Steel Wing","Heat Wave","Bulk Up"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Bulk Up"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Bulk Up"}]}},{name:"Tatsugiri (Curly)",formName:"tatsugiri",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Chilling Water"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tatsugiri (Droopy)",formName:"tatsugiri",imageAlt:"-d",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Chilling Water"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tatsugiri (Stretchy)",formName:"tatsugiri",imageAlt:"-s",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Chilling Water"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tauros (Fire)",formName:"taurospaldeablaze",imageAlt:"-b",region:m.Paldea,info:{moves:["Flare Blitz","Close Combat","Flamethrower","Headbutt","Work Up","Sunny Day"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Work Up"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Sunny Day"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Tauros (Water)",formName:"taurospaldeaaqua",imageAlt:"-a",region:m.Paldea,info:{moves:["Wave Crash","Close Combat","Surf","Headbutt","Work Up","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Work Up"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Rain Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Tinkaton",region:m.Paldea,info:{moves:["Gigaton Hammer","Play Rough","Brutal Swing","Rock Smash","Misty Terrain","Thunder Wave","Charm"],specialMoves:["Charm","Misty Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Thunder Wave"},{type:a.HP,threshold:25,action:"Uses Charm"}]}},{name:"Toxtricity (Amped)",formName:"toxtricity",region:m.Paldea,info:{moves:["Overdrive","Poison Jab","Nuzzle","Boomburst","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Toxtricity (Low Key)",formName:"toxtricity",imageAlt:"-l",region:m.Paldea,info:{moves:["Overdrive","Poison Jab","Nuzzle","Boomburst","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Tsareena",region:m.Paldea,info:{moves:["High Jump Kick","Power Whip","Stomp","Trop Kick","Reflect","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Grassy Terrain"}]}},{name:"Tyranitar",region:m.Paldea,info:{moves:["Rock Slide","Crunch","Screech","Dark Pulse","Dragon Dance","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Volcarona",region:m.Paldea,info:{moves:["Fire Blast","Bug Buzz","Hurricane","Will-O-Wisp","Sunny Day","Quiver Dance"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Quiver Dance"},{type:a.HP,threshold:20,action:"Uses Quiver Dance"}]}},{name:"Weavile",region:m.Paldea,info:{moves:["Ice Punch","Night Slash","Taunt","Facade","Reflect","Swords Dance"],specialMoves:["Reflect"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Swords Dance"}]}},{name:"Zoroark",region:m.Paldea,info:{moves:["Night Daze","Shadow Claw","Taunt","Hyper Voice","Torment","Nasty Plot"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Torment"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Ambipom",region:m.Kitakami,info:{moves:["Double Hit","Screech","Fury Swipes","Knock Off","Trailblaze","Sand Attack"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:90,action:"Uses Trailblaze"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Sand Attack"},{type:a.HP,threshold:15,action:"Uses Sand Attack"}]}},{name:"Basculegion (Male)",formName:"basculegion",region:m.Kitakami,info:{moves:["Liquidation","Aqua Jet","Shadow Ball","Scary Face","Rain Dance","Wave Crash"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Rain Dance"},{type:a.HP,threshold:10,action:"Uses Wave Crash"}]}},{name:"Basculegion (Female)",formName:"basculegion",imageAlt:"-f",region:m.Kitakami,info:{moves:["Liquidation","Aqua Jet","Shadow Ball","Scary Face","Rain Dance","Hydro Pump"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Rain Dance"},{type:a.HP,threshold:10,action:"Uses Hydro Pump"}]}},{name:"Chandelure",region:m.Kitakami,info:{moves:["Shadow Ball","Heat Wave","Confuse Ray","Flamethrower","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Sunny Day"},{type:a.HP,threshold:80,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Sunny Day"},{type:a.HP,threshold:20,action:"Uses Heat Wave"}]}},{name:"Conkeldurr",region:m.Kitakami,info:{moves:["Hammer Arm","Stone Edge","Superpower","Scary Face","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Dusknoir",region:m.Kitakami,info:{moves:["Fire Punch","Brick Break","Shadow Ball","Shadow Punch","Trick Room","Poltergeist"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Trick Room"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Poltergeist"}]}},{name:"Gliscor",region:m.Kitakami,info:{moves:["Poison Jab","Earthquake","Acrobatics","X-Scissor","Sandstorm","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Swords Dance"},{type:a.Time,threshold:15,action:"Uses Sandstorm"}]}},{name:"Golem",region:m.Kitakami,info:{moves:["Earthquake","Stone Edge","Heavy Slam","Defense Curl"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Defense Curl"},{type:a.Time,threshold:70,action:"Uses Defense Curl"},{type:a.Time,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Earthquake"}]}},{name:"Kommo-o",formName:"kommoo",region:m.Kitakami,info:{moves:["Brick Break","Dragon Claw","Boomburst","Scary Face","Clangorous Soul"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Clangorous Soul"},{type:a.HP,threshold:10,action:"Uses Clangorous Soul"}]}},{name:"Ludicolo",region:m.Kitakami,info:{moves:["Energy Ball","Surf","Fake Out","Trailblaze","Rain Dance"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Rain Dance"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:10,action:"Uses Surf"}]}},{name:"Mamoswine",region:m.Kitakami,info:{moves:["Earthquake","Blizzard","Ice Shard","Ancient Power","Snowscape","Amnesia"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Amnesia"},{type:a.HP,threshold:10,action:"Uses Earthquake"}]}},{name:"Mandibuzz",region:m.Kitakami,info:{moves:["Rock Tomb","Dark Pulse","Toxic","Foul Play","Taunt","Nasty Plot"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Nasty Plot"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Mienshao",region:m.Kitakami,info:{moves:["Aura Sphere","Poison Jab","Taunt","Acrobatics","Bulk Up"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:90,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Milotic",region:m.Kitakami,info:{moves:["Chilling Water","Surf","Dragon Pulse","Attract","Rain Dance","Hydro Pump"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Rain Dance"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.HP,threshold:35,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Ninetales",region:m.Kitakami,info:{moves:["Flamethrower","Extrasensory","Will-O-Wisp","Hypnosis","Nasty Plot"],specialMoves:["Hypnosis"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Politoed",region:m.Kitakami,info:{moves:["Surf","Hyper Voice","Weather Ball","Encore","Rain Dance","Hydro Pump"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Poliwrath",region:m.Kitakami,info:{moves:["Liquidation","Brick Break","Haze","Hydro Pump","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Probopass",region:m.Kitakami,info:{moves:["Body Press","Power Gem","Flash Cannon","Harden","Gravity","Zap Cannon"],specialMoves:["Harden"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Gravity"},{type:a.HP,threshold:75,action:"Uses Zap Cannon"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Zap Cannon"}]}},{name:"Shiftry",region:m.Kitakami,info:{moves:["Fake Out","Sucker Punch","Leaf Blade","Extrasensory","Sunny Day","Leaf Storm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Sunny Day"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:10,action:"Uses Leaf Storm"}]}},{name:"Sinistcha",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:15,action:"Uses Matcha Gotcha"}]}},{name:"Snorlax",region:m.Kitakami,info:{moves:["Body Slam","Heavy Slam","Bite","Mud-Slap","Curse"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Curse"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Trevenant",region:m.Kitakami,info:{moves:["Wood Hammer","Shadow Claw","Will-O-Wisp","Hex","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:20,action:"Uses Will-O-Wisp"}]}},{name:"Victreebel",region:m.Kitakami,info:{moves:["Sludge Bomb","Power Whip","Acid Spray","Trailblaze","Sunny Day"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Sunny Day"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Vikavolt",region:m.Kitakami,info:{moves:["Discharge","Bug Buzz","Solar Beam","Zap Cannon"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Discharge"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Zap Cannon"},{type:a.HP,threshold:20,action:"Uses Zap Cannon"}]}},{name:"Yanmega",region:m.Kitakami,info:{moves:["Bug Buzz","Air Slash","Quick Attack","Hypnosis","Supersonic"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Supersonic"}]}},{name:"Alcremie",region:m.Terarium,info:{moves:["Dazzling Gleam","Psychic","Encore","Psyshock","Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Encore"},{type:a.HP,threshold:50,action:"Uses Acid Armor"},{type:a.HP,threshold:25,action:"Uses Acid Armor"},{type:a.Time,threshold:30,action:"Reduce Tera Orb Charge"}]}},{name:"Duraludon",region:m.Terarium,info:{moves:["Flash Cannon","Dragon Pulse","Breaking Swipe","Metal Sound","Light Screen","Draco Meteor","Iron Defense"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:99,action:"Uses Light Screen"},{type:a.HP,threshold:50,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:30,action:"Uses Iron Defense"}]}},{name:"Electivire",region:m.Terarium,info:{moves:["Discharge","Thunder Punch","Fire Punch","Ice Punch","Thunder Wave","Electric Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Uses Discharge"}]}},{name:"Excadrill",region:m.Terarium,info:{moves:["Drill Run","Iron Head","X-Scissor","Rapid Spin","Sandstorm","Earthquake"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Sandstorm"},{type:a.HP,threshold:15,action:"Uses Earthquake"}]}},{name:"Exeggutor",region:m.Terarium,info:{moves:["Psychic","Energy Ball","Uproar","Bulldoze","Sunny Day","Growth"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:99,action:"Uses Sunny Day"},{type:a.HP,threshold:90,action:"Uses Growth"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"}]}},{name:"Flygon",region:m.Terarium,info:{moves:["Dragon Pulse","Scorching Sands","Earthquake","Flamethrower","Sandstorm","Boomburst"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:50,action:"Uses Boomburst"},{type:a.Time,threshold:30,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Boomburst"}]}},{name:"Golurk",region:m.Terarium,info:{moves:["Shadow Punch","Drain Punch","Heavy Slam","Iron Defense","Gravity","Reflect"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Gravity"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Reflect"}]}},{name:"Hitmonchan",region:m.Terarium,info:{moves:["Mach Punch","Mega Punch","Thunder Punch","Throat Chop","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Bulk Up"},{type:a.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Hitmonlee",region:m.Terarium,info:{moves:["Low Sweep","Mega Kick","Blaze Kick","Scary Face","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Bulk Up"},{type:a.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Hitmontop",region:m.Terarium,info:{moves:["Triple Kick","Sucker Punch","Gyro Ball","Triple Axel","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Bulk Up"},{type:a.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Kingdra",region:m.Terarium,info:{moves:["Dragon Pulse","Hydro Pump","Flash Cannon","Yawn","Rain Dance","Focus Energy"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Focus Energy"}]}},{name:"Lapras",region:m.Terarium,info:{moves:["Ice Beam","Freeze-Dry","Sparkling Aria","Body Press","Sing","Mist","Snowscape"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Sing"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Uses Mist"},{type:a.HP,threshold:30,action:"Uses Snowscape"}]}},{name:"Magmortar",region:m.Terarium,info:{moves:["Flamethrower","Psychic","Focus Blast","Clear Smog","Sunny Day","Will-O-Wisp"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Malamar",region:m.Terarium,info:{moves:["Foul Play","Psycho Cut","Night Slash","Taunt","Topsy-Turvy","Superpower"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Topsy-Turvy"},{type:a.HP,threshold:75,action:"Uses Superpower"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"}]}},{name:"Metagross",region:m.Terarium,info:{moves:["Zen Headbutt","Meteor Mash","Agility","Bullet Punch","Light Screen","Magnet Rise"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Light Screen"},{type:a.HP,threshold:50,action:"Uses Magnet Rise"},{type:a.HP,threshold:25,action:"Stats & Status Reset"},{type:a.Time,threshold:20,action:"Reduce Tera Orb Charge"}]}},{name:"Minior",region:m.Terarium,info:{moves:["Power Gem","Acrobatics","Take Down","Swift","Sandstorm","Shell Smash"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Sandstorm"},{type:a.HP,threshold:49,action:"Player Stats & Status Reset"},{type:a.HP,threshold:49,action:"Uses Shell Smash"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"}]}},{name:"Porygon-Z",formName:"porygonz",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Magnet Rise"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Magnet Rise"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:10,action:"Player Stats & Status Reset"}]}},{name:"Porygon2",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Magnet Rise"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Magnet Rise"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Stats & Status Reset"},{type:a.HP,threshold:10,action:"Stats & Status Reset"}]}},{name:"Reuniclus",region:m.Terarium,info:{moves:["Psychic","Psyshock","Gravity","Shadow Ball","Psychic Terrain","Reflect"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Psychic Terrain"},{type:a.HP,threshold:49,action:"Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Reflect"}]}},{name:"Rhyperior",region:m.Terarium,info:{moves:["Earthquake","Rock Wrecker","Brick Break","Surf","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Sandstorm"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Rock Wrecker"}]}},{name:"Skarmory",region:m.Terarium,info:{moves:["Steel Wing","Drill Peck","X-Scissor","Feint","Iron Defense","Swords Dance","Tailwind"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Iron Defense"},{type:a.HP,threshold:70,action:"Uses Swords Dance"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Tailwind"}]}}],qt=[{name:"Amoonguss",region:m.Paldea,info:{moves:["Energy Ball","Foul Play","Spore","Sludge Bomb","Grassy Terrain"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Grassy Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Grassy Terrain"}]}},{name:"Annihilape",region:m.Paldea,info:{moves:["Close Combat","Shadow Claw","Assurance","Focus Energy","Bulk Up","Rage Fist"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Bulk Up"},{type:a.Time,threshold:5,action:"Uses Rage Fist"}]}},{name:"Armarouge",region:m.Paldea,info:{moves:["Armor Cannon","Psychic","Night Shade","Will-O-Wisp","Calm Mind","Sunny Day"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Calm Mind"},{type:a.Time,threshold:65,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Avalugg",region:m.Paldea,info:{moves:["Icicle Crash","Heavy Slam","Snowscape","Ice Spinner","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Snowscape"},{type:a.Time,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Baxcalibur",region:m.Paldea,info:{moves:["Icicle Spear","Dragon Rush","Snowscape","Body Press"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Blissey",region:m.Paldea,info:{moves:["Dazzling Gleam","Hyper Voice","Sing","Light Screen","Defense Curl"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:95,action:"Uses Defense Curl"},{type:a.HP,threshold:75,action:"Uses Defense Curl"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Sing"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Bombirdier",region:m.Paldea,info:{moves:["Rock Slide","Acrobatics","Knock Off","Feather Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Feather Dance"}]}},{name:"Breloom",region:m.Paldea,info:{moves:["Bullet Seed","Low Sweep","Spore","Aerial Ace","Grassy Terrain"],specialMoves:["Spore"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Ceruledge",region:m.Paldea,info:{moves:["Bitter Blade","Shadow Claw","Psycho Cut","Will-O-Wisp","Sunny Day"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.Time,threshold:65,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Cetitan",region:m.Paldea,info:{moves:["Ice Spinner","Body Slam","Snowscape","Stomping Tantrum","Yawn"],specialMoves:["Yawn"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Uses Snowscape"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Yawn"}]}},{name:"Clawitzer",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Aura Sphere","Crabhammer","Rain Dance"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Water Pulse"}]}},{name:"Clodsire",region:m.Paldea,info:{moves:["Earthquake","Poison Jab","Megahorn","Yawn"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Earthquake"}]}},{name:"Corviknight",region:m.Paldea,info:{moves:["Iron Head","Drill Peck","Body Press","Hone Claws","Tailwind"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Hone Claws"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Tailwind"}]}},{name:"Cyclizar",region:m.Paldea,info:{moves:["Double-Edge","Dragon Claw","Dragon Pulse","Knock Off","Shift Gear"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Dachsbun",region:m.Paldea,info:{moves:["Play Rough","Double-Edge","Bite","Baby-Doll Eyes"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Play Rough"}]}},{name:"Ditto",region:m.Paldea,info:{moves:["Transform"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Dondozo",region:m.Paldea,info:{moves:["Wave Crash","Order Up","Heavy Slam","Yawn","Rain Dance","Curse"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Curse"}]}},{name:"Dragalge",region:m.Paldea,info:{moves:["Dragon Pulse","Sludge Bomb","Water Pulse","Toxic","Acid Spray","Draco Meteor"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Acid Spray"},{type:a.HP,threshold:75,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Draco Meteor"}]}},{name:"Dragapult",region:m.Paldea,info:{moves:["Shadow Ball","Dragon Pulse","Thunderbolt","Flamethrower","Reflect","Light Screen"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Light Screen"}]}},{name:"Dragonite",region:m.Paldea,info:{moves:["Dragon Rush","Extreme Speed","Dragon Dance","Aqua Tail","Light Screen"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:65,action:"Uses Light Screen"},{type:a.Time,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Dragon Dance"}]}},{name:"Espeon",region:m.Paldea,info:{moves:["Tera Blast","Psychic","Psyshock","Tickle","Psychic Terrain","Calm Mind"],specialMoves:["Tickle"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Psychic Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Psychic Terrain"}]}},{name:"Farigiraf",region:m.Paldea,info:{moves:["Twin Beam","Hyper Voice","Low Kick","Uproar","Agility"],specialMoves:["Uproar"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Agility"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Uproar"}]}},{name:"Flareon",region:m.Paldea,info:{moves:["Tera Blast","Flare Blitz","Lava Plume","Will-O-Wisp","Sunny Day","Curse"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Curse"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Frosmoth",region:m.Paldea,info:{moves:["Blizzard","Bug Buzz","Hurricane","Snowscape"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Gallade",region:m.Paldea,info:{moves:["Psycho Cut","Close Combat","Will-O-Wisp","Aerial Ace","Hypnosis","Disable","Psychic Terrain"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Psychic Terrain"}]}},{name:"Garchomp",region:m.Paldea,info:{moves:["Outrage","Earthquake","Flamethrower","Rock Slide","Swords Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Swords Dance"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Gardevoir",region:m.Paldea,info:{moves:["Moonblast","Psychic","Calm Mind","Thunder Wave","Misty Terrain","Psychic Terrain"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Psychic Terrain"}]}},{name:"Garganacl",region:m.Paldea,info:{moves:["Stone Edge","Heavy Slam","Salt Cure","Hammer Arm","Sandstorm","Rock Slide"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sandstorm"},{type:a.Time,threshold:60,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Gengar",region:m.Paldea,info:{moves:["Shadow Ball","Sludge Bomb","Dazzling Gleam","Will-O-Wisp","Hypnosis"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Hypnosis"}]}},{name:"Glaceon",region:m.Paldea,info:{moves:["Tera Blast","Ice Beam","Blizzard","Charm","Snowscape","Calm Mind"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Snowscape"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Snowscape"}]}},{name:"Glimmora",region:m.Paldea,info:{moves:["Power Gem","Sludge Wave","Hyper Beam","Rock Polish","Sandstorm"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sandstorm"},{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:55,action:"Reduce Tera Orb Charge"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"}]}},{name:"Goodra",region:m.Paldea,info:{moves:["Dragon Pulse","Surf","Sludge Bomb","Power Whip","Rain Dance"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Rain Dance"}]}},{name:"Grafaiai",region:m.Paldea,info:{moves:["Knock Off","Gunk Shot","Take Down","Flatter","Toxic"],specialMoves:["Toxic"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Toxic"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Gunk Shot"}]}},{name:"Gyarados",region:m.Paldea,info:{moves:["Aqua Tail","Crunch","Hurricane","Ice Fang","Taunt","Dragon Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Taunt"},{type:a.HP,threshold:20,action:"Uses Dragon Dance"}]}},{name:"Haxorus",region:m.Paldea,info:{moves:["Outrage","Crunch","Giga Impact","First Impression","Dragon Dance"],specialMoves:["First Impression"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Dragon Dance"}]}},{name:"Heracross",region:m.Paldea,info:{moves:["Megahorn","Close Combat","Thrash","Leer","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:75,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Hippowdon",region:m.Paldea,info:{moves:["Earthquake","Ice Fang","Yawn","Rock Slide"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Yawn"},{type:a.HP,threshold:60,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Yawn"}]}},{name:"Hydreigon",region:m.Paldea,info:{moves:["Dark Pulse","Dragon Pulse","Crunch","Taunt","Work Up","Nasty Plot"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:85,action:"Uses Taunt"},{type:a.Time,threshold:75,action:"Uses Work Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Stats & Status Reset"},{type:a.Time,threshold:20,action:"Uses Nasty Plot"}]}},{name:"Jolteon",region:m.Paldea,info:{moves:["Tera Blast","Thunderbolt","Shadow Ball","Thunder Wave","Electric Terrain","Calm Mind"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Electric Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Kilowattrel",region:m.Paldea,info:{moves:["Hurricane","Thunder","Uproar","Scary Face","Charge","Rain Dance"],specialMoves:["Charge","Rain Dance"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Charge"},{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Kingambit",region:m.Paldea,info:{moves:["Iron Head","Night Slash","Kowtow Cleave","Thunder Wave","Swords Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.Time,threshold:65,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Klawf",region:m.Paldea,info:{moves:["Stone Edge","Rock Smash","X-Scissor","Sandstorm","Knock Off","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:49,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Leafeon",region:m.Paldea,info:{moves:["Tera Blast","Leaf Blade","Double Kick","Charm","Sunny Day","Swords Dance"],specialMoves:["Double Kick"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Swords Dance"},{type:a.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Lycanroc",imageAlt:"-d",region:m.Paldea,info:{moves:["Accelerock","Rock Slide","Crunch","Taunt","Sandstorm"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Mabosstiff",region:m.Paldea,info:{moves:["Crunch","Reversal","Outrage","Take Down","Taunt"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Magnezone",region:m.Paldea,info:{moves:["Thunder","Flash Cannon","Tri Attack","Thunder Wave","Rain Dance","Iron Defense","Electric Terrain"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:80,action:"Uses Rain Dance"},{type:a.Time,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Thunder Wave"},{type:a.Time,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Maushold",imageAlt:"-f",region:m.Paldea,info:{moves:["Play Rough","Take Down","Low Kick","Charm","Tidy Up"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Uses Charm"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Tidy Up"}]}},{name:"Mimikyu",region:m.Paldea,info:{moves:["Play Rough","Shadow Claw","Shadow Sneak","Wood Hammer","Misty Terrain","Swords Dance"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Misty Terrain"},{type:a.Time,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Orthworm",region:m.Paldea,info:{moves:["Iron Head","Earthquake","Smack Down","Sandstorm","Coil"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Uses Coil"},{type:a.HP,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Sandstorm"}]}},{name:"Pawmot",region:m.Paldea,info:{moves:["Wild Charge","Close Combat","Double Shock","Nuzzle","Electric Terrain"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Electric Terrain"}]}},{name:"Pelipper",region:m.Paldea,info:{moves:["Hurricane","Hydro Pump","Mist","Supersonic","Rain Dance","Agility"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Agility"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Pincurchin",region:m.Paldea,info:{moves:["Zing Zap","Thunder","Surf","Poison Jab","Thunder Wave","Electric Terrain"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:90,action:"Uses Thunder Wave"},{type:a.Time,threshold:65,action:"Uses Electric Terrain"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Revavroom",region:m.Paldea,info:{moves:["Gunk Shot","Overheat","Iron Head","Taunt","Scary Face","Shift Gear"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Shift Gear"},{type:a.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Salamence",region:m.Paldea,info:{moves:["Outrage","Dual Wingbeat","Flamethrower","Tera Blast","Dragon Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Dragon Dance"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Scizor",region:m.Paldea,info:{moves:["X-Scissor","Bullet Punch","Close Combat","Iron Head","Iron Defense","Focus Energy"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Uses Iron Defense"},{type:a.HP,threshold:75,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Slowking",region:m.Paldea,info:{moves:["Surf","Psyshock","Trick Room","Flamethrower","Light Screen","Rain Dance","Calm Mind"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:70,action:"Uses Light Screen"},{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Trick Room"}]}},{name:"Staraptor",region:m.Paldea,info:{moves:["Close Combat","Brave Bird","Double-Edge","Feather Dance"],specialMoves:["Double-Edge","Feather Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Brave Bird"}]}},{name:"Sylveon",region:m.Paldea,info:{moves:["Tera Blast","Hyper Voice","Moonblast","Yawn","Misty Terrain","Calm Mind"],specialMoves:["Yawn"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Misty Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Misty Terrain"}]}},{name:"Talonflame",region:m.Paldea,info:{moves:["Brave Bird","Flare Blitz","Flamethrower","Tera Blast","Sunny Day","Swords Dance"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Tauros",formName:"taurospaldeacombat",imageAlt:"-p",region:m.Paldea,info:{moves:["Close Combat","Thrash","Zen Headbutt","Raging Bull","Bulk Up","Screech"],specialMoves:["Screech"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Screech"}]}},{name:"Tauros (Fire)",formName:"taurospaldeablaze",imageAlt:"-b",region:m.Paldea,info:{moves:["Flare Blitz","Close Combat","Flamethrower","Headbutt","Sunny Day","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Tauros (Water)",formName:"taurospaldeaaqua",imageAlt:"-a",region:m.Paldea,info:{moves:["Wave Crash","Close Combat","Surf","Headbutt","Rain Dance","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Tinkaton",region:m.Paldea,info:{moves:["Gigaton Hammer","Play Rough","Knock Off","Thunder Wave","Misty Terrain","Sweet Kiss"],specialMoves:["Misty Terrain"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Sweet Kiss"},{type:a.HP,threshold:15,action:"Uses Sweet Kiss"}]}},{name:"Toedscruel",region:m.Paldea,info:{moves:["Energy Ball","Earth Power","Spore","Hex","Grassy Terrain"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Grassy Terrain"},{type:a.Time,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Spore"}]}},{name:"Torkoal",region:m.Paldea,info:{moves:["Lava Plume","Yawn","Clear Smog","Body Slam","Sunny Day","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Yawn"},{type:a.HP,threshold:20,action:"Uses Iron Defense"}]}},{name:"Toxapex",region:m.Paldea,info:{moves:["Water Pulse","Liquidation","Poison Jab","Pin Missile","Chilling Water","Toxic"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:95,action:"Uses Chilling Water"},{type:a.Time,threshold:75,action:"Uses Toxic"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Chilling Water"}]}},{name:"Tyranitar",region:m.Paldea,info:{moves:["Stone Edge","Crunch","Screech","Rock Blast","Iron Defense"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Crunch"},{type:a.HP,threshold:20,action:"Uses Iron Defense"}]}},{name:"Umbreon",region:m.Paldea,info:{moves:["Tera Blast","Dark Pulse","Foul Play","Tickle","Calm Mind","Curse"],specialMoves:["Curse","Tickle"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Calm Mind"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Curse"},{type:a.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Vaporeon",region:m.Paldea,info:{moves:["Tera Blast","Surf","Hyper Voice","Yawn","Rain Dance","Calm Mind"],specialMoves:["Yawn"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Volcarona",region:m.Paldea,info:{moves:["Bug Buzz","Flamethrower","Hurricane","Tailwind","Amnesia","Sunny Day","Light Screen","Quiver Dance"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:85,action:"Uses Amnesia"},{type:a.HP,threshold:75,action:"Uses Sunny Day"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Light Screen"},{type:a.Time,threshold:20,action:"Uses Quiver Dance"}]}},{name:"Ambipom",region:m.Kitakami,info:{moves:["Double Hit","Ice Punch","Fire Punch","Thunder Punch","Screech"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:89,action:"Uses Screech"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Double Hit"}]}},{name:"Basculegion (Male)",formName:"basculegion",region:m.Kitakami,info:{moves:["Wave Crash","Aqua Jet","Crunch","Scary Face","Icy Wind","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Icy Wind"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Basculegion (Female)",formName:"basculegion",imageAlt:"-f",region:m.Kitakami,info:{moves:["Surf","Aqua Jet","Shadow Ball","Scary Face","Icy Wind","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Icy Wind"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Chandelure",region:m.Kitakami,info:{moves:["Flamethrower","Shadow Ball","Will-O-Wisp","Poltergeist","Heat Wave","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Heat Wave"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Sunny Day"},{type:a.HP,threshold:35,action:"Stats & Status Reset"}]}},{name:"Clefable",region:m.Kitakami,info:{moves:["Moonblast","Psychic","Meteor Mash","Encore","Dazzling Gleam","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Encore"},{type:a.HP,threshold:40,action:"Uses Dazzling Gleam"},{type:a.HP,threshold:41,action:"Uses Dazzling Gleam"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Conkeldurr",region:m.Kitakami,info:{moves:["Rock Slide","Close Combat","Mach Punch","Slam","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:89,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:49,action:"Uses Bulk Up"},{type:a.Time,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Crawdaunt",region:m.Kitakami,info:{moves:["Aqua Jet","Crabhammer","Crunch","Giga Impact","Leer","Swords Dance"],specialMoves:["Aqua Jet"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Uses Leer"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Dusknoir",region:m.Kitakami,info:{moves:["Poltergeist","Dark Pulse","Will-O-Wisp","Ice Punch","Gravity","Spite"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Gravity"},{type:a.HP,threshold:70,action:"Uses Spite"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Spite"},{type:a.HP,threshold:10,action:"Stats & Status Reset"}]}},{name:"Gliscor",region:m.Kitakami,info:{moves:["Acrobatics","Knock Off","Quick Attack","Earthquake","Sandstorm","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Swords Dance"},{type:a.Time,threshold:15,action:"Uses Sandstorm"},{type:a.Time,threshold:5,action:"Uses Earthquake"}]}},{name:"Golem",region:m.Kitakami,info:{moves:["Earthquake","Rock Slide","Flail","Smack Down","Stone Edge","Iron Defense"],specialMoves:["Flail"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:85,action:"Uses Stone Edge"},{type:a.Time,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:29,action:"Uses Iron Defense"}]}},{name:"Kommo-o",formName:"kommoo",region:m.Kitakami,info:{moves:["Focus Blast","Dragon Claw","Iron Head","Scary Face","Clangorous Soul","Reversal"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Clangorous Soul"},{type:a.HP,threshold:30,action:"Uses Clangorous Soul"},{type:a.Time,threshold:10,action:"Uses Reversal"}]}},{name:"Leavanny",region:m.Kitakami,info:{moves:["Leaf Blade","X-Scissor","Grassy Glide","Sticky Web","Grassy Terrain","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Grassy Terrain"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Ludicolo",region:m.Kitakami,info:{moves:["Energy Ball","Hydro Pump","Fake Out","Chilling Water","Rain Dance","Teeter Dance"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Uses Chilling Water"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.Time,threshold:20,action:"Uses Teeter Dance"}]}},{name:"Mamoswine",region:m.Kitakami,info:{moves:["Icicle Crash","Ice Shard","Bulldoze","Freeze-Dry","Snowscape","Amnesia","Earthquake"],specialMoves:["Freeze-Dry"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Amnesia"},{type:a.HP,threshold:10,action:"Uses Earthquake"},{type:a.Time,threshold:45,action:"Reduce Tera Orb Charge"}]}},{name:"Mandibuzz",region:m.Kitakami,info:{moves:["Dual Wingbeat","Dark Pulse","Toxic","Bone Rush","Snarl"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Player Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Snarl"},{type:a.HP,threshold:75,action:"Uses Snarl"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Snarl"}]}},{name:"Mienshao",region:m.Kitakami,info:{moves:["Aerial Ace","Brick Break","Aura Sphere","Reversal","Calm Mind"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:90,action:"Uses Calm Mind"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.Time,threshold:20,action:"Uses Aura Sphere"}]}},{name:"Milotic",region:m.Kitakami,info:{moves:["Dragon Pulse","Water Pulse","Safeguard","Aqua Tail","Coil","Hypnosis","Rain Dance"],specialMoves:["Hypnosis"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:99,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Coil"},{type:a.HP,threshold:70,action:"Uses Hypnosis"},{type:a.Time,threshold:60,action:"Uses Rain Dance"},{type:a.Time,threshold:10,action:"Uses Hypnosis"}]}},{name:"Morpeko",region:m.Kitakami,info:{moves:["Aura Wheel","Lash Out","Thunder Wave","Torment","Taunt","Electric Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Ninetales",region:m.Kitakami,info:{moves:["Flamethrower","Extrasensory","Will-O-Wisp","Burning Jealousy","Heat Wave","Sunny Day"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Heat Wave"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Sunny Day"},{type:a.Time,threshold:10,action:"Uses Heat Wave"}]}},{name:"Politoed",region:m.Kitakami,info:{moves:["Chilling Water","Surf","Ice Beam","Encore","Amnesia"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Uses Chilling Water"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:29,action:"Uses Amnesia"}]}},{name:"Poliwrath",region:m.Kitakami,info:{moves:["Brick Break","Liquidation","Focus Blast","Haze","Rain Dance","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Rain Dance"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Quagsire",region:m.Kitakami,info:{moves:["Earthquake","Liquidation","Yawn","Toxic","Curse","Rain Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Uses Curse"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Rain Dance"}]}},{name:"Shiftry",region:m.Kitakami,info:{moves:["Leaf Blade","Sucker Punch","Fake Out","Extrasensory","Sunny Day","Trailblaze","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sunny Day"},{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:70,action:"Uses Trailblaze"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Sinistcha",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:15,action:"Uses Matcha Gotcha"},{type:a.Time,threshold:10,action:"Uses Matcha Gotcha"}]}},{name:"Sinistcha (Masterpiece)",formName:"sinistchamasterpiece",imageAlt:"-m",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:15,action:"Uses Matcha Gotcha"},{type:a.Time,threshold:10,action:"Uses Matcha Gotcha"}]}},{name:"Snorlax",region:m.Kitakami,info:{moves:["Facade","Crunch","Yawn","Heavy Slam"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Stats & Status Reset"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Stats & Status Reset"}]}},{name:"Trevenant",region:m.Kitakami,info:{moves:["Wood Hammer","Shadow Claw","Forest's Curse","Will-O-Wisp","Grassy Terrain","Disable"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Wood Hammer"}]}},{name:"Yanmega",region:m.Kitakami,info:{moves:["Bug Buzz","Air Slash","Quick Attack","Ancient Power"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Ancient Power"},{type:a.HP,threshold:85,action:"Uses Ancient Power"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Ancient Power"}]}},{name:"Alcremie",region:m.Terarium,info:{moves:["Dazzling Gleam","Psychic","Encore","Psyshock","Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Encore"},{type:a.HP,threshold:50,action:"Uses Acid Armor"},{type:a.HP,threshold:25,action:"Uses Acid Armor"},{type:a.Time,threshold:30,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Dugtrio",formName:"dugtrioalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Bulldoze","Iron Head","Ancient Power","Metal Claw","Sandstorm","Earthquake"],specialMoves:["Ancient Power"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Sandstorm"},{type:a.HP,threshold:25,action:"Uses Earthquake"}]}},{name:"Duraludon",region:m.Terarium,info:{moves:["Flash Cannon","Dragon Pulse","Breaking Swipe","Metal Claw","Stealth Rock","Light Screen","Reflect"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Stealth Rock"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Light Screen"},{type:a.HP,threshold:35,action:"Uses Reflect"}]}},{name:"Electivire",region:m.Terarium,info:{moves:["Discharge","Thunder Punch","Earthquake","Brick Break","Electric Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Electric Terrain"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Excadrill",region:m.Terarium,info:{moves:["Iron Head","Earthquake","Drill Run","Slash","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Sandstorm"},{type:a.Time,threshold:25,action:"Uses Sandstorm"}]}},{name:"Exeggutor",formName:"exeggutoralola",imageAlt:"-a",region:m.Terarium,info:{moves:["Dragon Hammer","Extrasensory","Seed Bomb","Hypnosis","Trick Room"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:80,action:"Player Stats & Status Reset"},{type:a.HP,threshold:65,action:"Uses Hypnosis"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Trick Room"},{type:a.HP,threshold:33,action:"Player Stats & Status Reset"}]}},{name:"Flygon",region:m.Terarium,info:{moves:["Earthquake","Dragon Claw","Quick Attack","Breaking Swipe","Dragon Dance","Draco Meteor"],specialMoves:["Quick Attack"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:79,action:"Uses Dragon Dance"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:5,action:"Uses Draco Meteor"}]}},{name:"Golem",formName:"golemalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Heavy Slam","Body Slam","Rock Slide","Discharge","Giga Impact"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Rock Slide"},{type:a.HP,threshold:25,action:"Uses Giga Impact"}]}},{name:"Golurk",region:m.Terarium,info:{moves:["Dynamic Punch","Shadow Punch","Heavy Slam","Ice Punch","Curse"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Curse"},{type:a.HP,threshold:35,action:"Uses Curse"}]}},{name:"Kingdra",region:m.Terarium,info:{moves:["Draco Meteor","Dragon Pulse","Water Pulse","Flash Cannon","Focus Energy","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Focus Energy"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Rain Dance"},{type:a.HP,threshold:5,action:"Uses Draco Meteor"}]}},{name:"Kleavor",region:m.Terarium,info:{moves:["X-Scissor","Close Combat","Air Cutter","Night Slash","Stone Axe","Swords Dance"],specialMoves:["Night Slash"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Stone Axe"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Swords Dance"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Lapras",region:m.Terarium,info:{moves:["Blizzard","Hydro Pump","Body Slam","Sing","Snowscape","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Magmortar",region:m.Terarium,info:{moves:["Lava Plume","Psychic","Scorching Sands","Taunt","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:95,action:"Uses Sunny Day"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Lava Plume"}]}},{name:"Malamar",region:m.Terarium,info:{moves:["Psycho Cut","Night Slash","Foul Play","Pluck","Taunt","Topsy-Turvy"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Topsy-Turvy"},{type:a.HP,threshold:25,action:"Uses Topsy-Turvy"}]}},{name:"Metagross",region:m.Terarium,info:{moves:["Zen Headbutt","Iron Head","Heavy Slam","Aerial Ace","Agility","Hone Claws"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Agility"},{type:a.HP,threshold:80,action:"Uses Iron Head"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Hone Claws"},{type:a.HP,threshold:20,action:"Uses Hone Claws"}]}},{name:"Muk",formName:"mukalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Crunch","Hex","Gunk Shot","Flamethrower","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Ninetales",formName:"ninetalesalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Moonblast","Blizzard","Ice Shard","Dazzling Gleam","Aurora Veil","Calm Mind","Snowscape"],specialMoves:["Moonblast"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Aurora Veil"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:24,action:"Uses Snowscape"}]}},{name:"Overqwil",region:m.Terarium,info:{moves:["Barb Barrage","Crunch","Pin Missile","Fell Stinger","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Toxic"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Uses Barb Barrage"}]}},{name:"Porygon-Z",formName:"porygonz",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Thunder Wave","Trick Room"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Trick Room"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"}]}},{name:"Porygon2",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Thunder Wave","Trick Room"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Trick Room"},{type:a.HP,threshold:45,action:"Stats & Status Reset"}]}},{name:"Reuniclus",region:m.Terarium,info:{moves:["Psychic","Fire Punch","Swift","Rock Tomb","Reflect","Light Screen","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Reflect"},{type:a.HP,threshold:80,action:"Uses Light Screen"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"}]}},{name:"Rhyperior",region:m.Terarium,info:{moves:["Earthquake","Rock Wrecker","Megahorn","Rock Polish","Sandstorm","Iron Defense"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:50,action:"Uses Iron Defense"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Rock Wrecker"},{type:a.HP,threshold:5,action:"Uses Earthquake"}]}},{name:"Sandslash",formName:"sandslashalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Ice Spinner","Iron Head","Earthquake","Triple Axel","Snowscape","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:80,action:"Uses Swords Dance"},{type:a.HP,threshold:35,action:"Player Stats & Status Reset"}]}},{name:"Skarmory",region:m.Terarium,info:{moves:["Drill Peck","Steel Wing","Night Slash","Slash","Taunt","Iron Defense"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:45,action:"Uses Iron Defense"},{type:a.HP,threshold:44,action:"Player Stats & Status Reset"}]}},{name:"Slowbro",formName:"slowbrogalar",imageAlt:"-g",region:m.Terarium,info:{moves:["Shell Side Arm","Zen Headbutt","Chilling Water","Rock Blast","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Slowking",formName:"slowkinggalar",imageAlt:"-g",region:m.Terarium,info:{moves:["Eerie Spell","Power Gem","Yawn","Acid Spray","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Whimsicott",region:m.Terarium,info:{moves:["Energy Ball","Moonblast","Encore","Hurricane","Taunt"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Stats & Status Reset"}]}}];var iv=(()=>{class e{constructor(n){this.stateService=n}ngOnInit(){Object.keys(m).map(r=>{let o=document.createElement("option");o.value=r,o.text=m[r],o.text=="Paldea"&&(o.selected=!0,this.stateService.changeRegionList(o.value)),document.getElementById("regionList").add(o)})}valueChanged(){let n=document.getElementById("regionList"),r=n.selectedIndex,o=n.options[r];this.stateService.changeRegionList(o.value)}static{this.\u0275fac=function(r){return new(r||e)(q(ce))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-region"]],decls:3,vars:0,consts:[["id","regionList",3,"change"],["value",""]],template:function(r,o){r&1&&(oe(0,"select",0),vt("change",function(){return o.valueChanged()}),oe(1,"option",1),we(2,"-- Region --"),pe()())},encapsulation:2})}}return e})();function oo(e){return e.toLowerCase().replace(/\w/,t=>t.toUpperCase())}function an(e){(e?[e]:["pokemonTypes","pokemonImageNormal","pokemonImageShiny","pokemonAbility","pokemonStatsWrapper","pokemonActions","pokemonMoves","pokemonHerbs","pokemonTypeAdvantages","pokemonTeraWeaknesses","pokemonTeraAdvantages"]).forEach(n=>{let r=document.getElementById(n);r.innerHTML=""})}function ge(e,t){e.innerHTML+=t}function Ei(e){return`<div class="typeMatchupText ${e.name}">${oo(e.name)} - ${e.multiplier}x</div>`}function kd(e,t,n){return String(e).padStart(t,n)}var Nd="Invariant Violation",sv=Object.setPrototypeOf,SP=sv===void 0?function(e,t){return e.__proto__=t,e}:sv,Ja=function(e){ke(t,e);function t(n){n===void 0&&(n=Nd);var r=e.call(this,typeof n=="number"?Nd+": "+n+" (see https://github.com/apollographql/invariant-packages)":n)||this;return r.framesToPop=1,r.name=Nd,SP(r,t.prototype),r}return t}(Error);function kn(e,t){if(!e)throw new Ja(t)}var Za=["debug","log","warn","error","silent"],Od=Za.indexOf("log");function Ya(e){return function(){if(Za.indexOf(e)>=Od){var t=console[e]||console.log;return t.apply(console,arguments)}}}(function(e){e.debug=Ya("debug"),e.log=Ya("log"),e.warn=Ya("warn"),e.error=Ya("error")})(kn||(kn={}));function av(e){var t=Za[Od];return Od=Math.max(0,Za.indexOf(e)),t}var Ci="3.12.11";function je(e){try{return e()}catch{}}var io=je(function(){return globalThis})||je(function(){return window})||je(function(){return self})||je(function(){return global})||je(function(){return je.constructor("return this")()});var cv=new Map;function Ii(e){var t=cv.get(e)||1;return cv.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function Xa(e,t){t===void 0&&(t=0);var n=Ii("stringifyForDisplay");return JSON.stringify(e,function(r,o){return o===void 0?n:o},t).split(JSON.stringify(n)).join("<undefined>")}function ec(e){return function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(typeof t=="number"){var o=t;t=Ad(o),t||(t=Fd(o,n),n=[])}e.apply(void 0,[t].concat(n))}}var E=Object.assign(function(t,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];t||kn(t,Ad(n,r)||Fd(n,r))},{debug:ec(kn.debug),log:ec(kn.log),warn:ec(kn.warn),error:ec(kn.error)});function le(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Ja(Ad(e,t)||Fd(e,t))}var lv=Symbol.for("ApolloErrorMessageHandler_"+Ci);function uv(e){if(typeof e=="string")return e;try{return Xa(e,2).slice(0,1e3)}catch{return"<non-serializable>"}}function Ad(e,t){if(t===void 0&&(t=[]),!!e)return io[lv]&&io[lv](e,t.map(uv))}function Fd(e,t){if(t===void 0&&(t=[]),!!e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:Ci,message:e,args:t.map(uv)})))}var bP=globalThis.__DEV__!==!1;function so(e,t){if(!!!e)throw new Error(t)}function dv(e){return typeof e=="object"&&e!==null}function fv(e,t){if(!!!e)throw new Error(t??"Unexpected invariant triggered.")}var DP=/\r\n|[\n\r]/g;function ao(e,t){let n=0,r=1;for(let o of e.body.matchAll(DP)){if(typeof o.index=="number"||fv(!1),o.index>=t)break;n=o.index+o[0].length,r+=1}return{line:r,column:t+1-n}}function Ld(e){return tc(e.source,ao(e.source,e.start))}function tc(e,t){let n=e.locationOffset.column-1,r="".padStart(n)+e.body,o=t.line-1,i=e.locationOffset.line-1,s=t.line+i,c=t.line===1?n:0,l=t.column+c,u=`${e.name}:${s}:${l}
`,d=r.split(/\r\n|[\n\r]/g),f=d[o];if(f.length>120){let p=Math.floor(l/80),h=l%80,g=[];for(let y=0;y<f.length;y+=80)g.push(f.slice(y,y+80));return u+hv([[`${s} |`,g[0]],...g.slice(1,p+1).map(y=>["|",y]),["|","^".padStart(h)],["|",g[p+1]]])}return u+hv([[`${s-1} |`,d[o-1]],[`${s} |`,f],["|","^".padStart(l)],[`${s+1} |`,d[o+1]]])}function hv(e){let t=e.filter(([r,o])=>o!==void 0),n=Math.max(...t.map(([r])=>r.length));return t.map(([r,o])=>r.padStart(n)+(o?" "+o:"")).join(`
`)}function wP(e){let t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}var nc=class e extends Error{constructor(t,...n){var r,o,i;let{nodes:s,source:c,positions:l,path:u,originalError:d,extensions:f}=wP(n);super(t),this.name="GraphQLError",this.path=u??void 0,this.originalError=d??void 0,this.nodes=pv(Array.isArray(s)?s:s?[s]:void 0);let p=pv((r=this.nodes)===null||r===void 0?void 0:r.map(g=>g.loc).filter(g=>g!=null));this.source=c??(p==null||(o=p[0])===null||o===void 0?void 0:o.source),this.positions=l??p?.map(g=>g.start),this.locations=l&&c?l.map(g=>ao(c,g)):p?.map(g=>ao(g.source,g.start));let h=dv(d?.extensions)?d?.extensions:void 0;this.extensions=(i=f??h)!==null&&i!==void 0?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),d!=null&&d.stack?Object.defineProperty(this,"stack",{value:d.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,e):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(let n of this.nodes)n.loc&&(t+=`

`+Ld(n.loc));else if(this.source&&this.locations)for(let n of this.locations)t+=`

`+tc(this.source,n);return t}toJSON(){let t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}};function pv(e){return e===void 0||e.length===0?void 0:e}function Ee(e,t,n){return new nc(`Syntax Error: ${n}`,{source:e,positions:[t]})}var Pi=class{constructor(t,n,r){this.start=t.start,this.end=n.end,this.startToken=t,this.endToken=n,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}},co=class{constructor(t,n,r,o,i,s){this.kind=t,this.start=n,this.end=r,this.line=o,this.column=i,this.value=s,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}},Hd={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},TP=new Set(Object.keys(Hd));function Ud(e){let t=e?.kind;return typeof t=="string"&&TP.has(t)}var ur=function(e){return e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription",e}(ur||{});var rc=function(e){return e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION",e}(rc||{});var P=function(e){return e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",e}(P||{});function oc(e){return e===9||e===32}function lo(e){return e>=48&&e<=57}function mv(e){return e>=97&&e<=122||e>=65&&e<=90}function jd(e){return mv(e)||e===95}function gv(e){return mv(e)||lo(e)||e===95}function yv(e){var t;let n=Number.MAX_SAFE_INTEGER,r=null,o=-1;for(let s=0;s<e.length;++s){var i;let c=e[s],l=EP(c);l!==c.length&&(r=(i=r)!==null&&i!==void 0?i:s,o=s,s!==0&&l<n&&(n=l))}return e.map((s,c)=>c===0?s:s.slice(n)).slice((t=r)!==null&&t!==void 0?t:0,o+1)}function EP(e){let t=0;for(;t<e.length&&oc(e.charCodeAt(t));)++t;return t}function vv(e,t){let n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),o=r.length===1,i=r.length>1&&r.slice(1).every(h=>h.length===0||oc(h.charCodeAt(0))),s=n.endsWith('\\"""'),c=e.endsWith('"')&&!s,l=e.endsWith("\\"),u=c||l,d=!(t!=null&&t.minimize)&&(!o||e.length>70||u||i||s),f="",p=o&&oc(e.charCodeAt(0));return(d&&!p||i)&&(f+=`
`),f+=n,(d||u)&&(f+=`
`),'"""'+f+'"""'}var w=function(e){return e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment",e}(w||{});var Ri=class{constructor(t){let n=new co(w.SOF,0,0,0,0);this.source=t,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==w.EOF)do if(t.next)t=t.next;else{let n=CP(this,t.end);t.next=n,n.prev=t,t=n}while(t.kind===w.COMMENT);return t}};function bv(e){return e===w.BANG||e===w.DOLLAR||e===w.AMP||e===w.PAREN_L||e===w.PAREN_R||e===w.SPREAD||e===w.COLON||e===w.EQUALS||e===w.AT||e===w.BRACKET_L||e===w.BRACKET_R||e===w.BRACE_L||e===w.PIPE||e===w.BRACE_R}function uo(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function ic(e,t){return Dv(e.charCodeAt(t))&&wv(e.charCodeAt(t+1))}function Dv(e){return e>=55296&&e<=56319}function wv(e){return e>=56320&&e<=57343}function dr(e,t){let n=e.source.body.codePointAt(t);if(n===void 0)return w.EOF;if(n>=32&&n<=126){let r=String.fromCodePoint(n);return r==='"'?`'"'`:`"${r}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function Ce(e,t,n,r,o){let i=e.line,s=1+n-e.lineStart;return new co(t,n,r,i,s,o)}function CP(e,t){let n=e.source.body,r=n.length,o=t;for(;o<r;){let i=n.charCodeAt(o);switch(i){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++e.line,e.lineStart=o;continue;case 13:n.charCodeAt(o+1)===10?o+=2:++o,++e.line,e.lineStart=o;continue;case 35:return IP(e,o);case 33:return Ce(e,w.BANG,o,o+1);case 36:return Ce(e,w.DOLLAR,o,o+1);case 38:return Ce(e,w.AMP,o,o+1);case 40:return Ce(e,w.PAREN_L,o,o+1);case 41:return Ce(e,w.PAREN_R,o,o+1);case 46:if(n.charCodeAt(o+1)===46&&n.charCodeAt(o+2)===46)return Ce(e,w.SPREAD,o,o+3);break;case 58:return Ce(e,w.COLON,o,o+1);case 61:return Ce(e,w.EQUALS,o,o+1);case 64:return Ce(e,w.AT,o,o+1);case 91:return Ce(e,w.BRACKET_L,o,o+1);case 93:return Ce(e,w.BRACKET_R,o,o+1);case 123:return Ce(e,w.BRACE_L,o,o+1);case 124:return Ce(e,w.PIPE,o,o+1);case 125:return Ce(e,w.BRACE_R,o,o+1);case 34:return n.charCodeAt(o+1)===34&&n.charCodeAt(o+2)===34?kP(e,o):MP(e,o)}if(lo(i)||i===45)return PP(e,o,i);if(jd(i))return NP(e,o);throw Ee(e.source,o,i===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:uo(i)||ic(n,o)?`Unexpected character: ${dr(e,o)}.`:`Invalid character: ${dr(e,o)}.`)}return Ce(e,w.EOF,r,r)}function IP(e,t){let n=e.source.body,r=n.length,o=t+1;for(;o<r;){let i=n.charCodeAt(o);if(i===10||i===13)break;if(uo(i))++o;else if(ic(n,o))o+=2;else break}return Ce(e,w.COMMENT,t,o,n.slice(t+1,o))}function PP(e,t,n){let r=e.source.body,o=t,i=n,s=!1;if(i===45&&(i=r.charCodeAt(++o)),i===48){if(i=r.charCodeAt(++o),lo(i))throw Ee(e.source,o,`Invalid number, unexpected digit after 0: ${dr(e,o)}.`)}else o=Bd(e,o,i),i=r.charCodeAt(o);if(i===46&&(s=!0,i=r.charCodeAt(++o),o=Bd(e,o,i),i=r.charCodeAt(o)),(i===69||i===101)&&(s=!0,i=r.charCodeAt(++o),(i===43||i===45)&&(i=r.charCodeAt(++o)),o=Bd(e,o,i),i=r.charCodeAt(o)),i===46||jd(i))throw Ee(e.source,o,`Invalid number, expected digit but got: ${dr(e,o)}.`);return Ce(e,s?w.FLOAT:w.INT,t,o,r.slice(t,o))}function Bd(e,t,n){if(!lo(n))throw Ee(e.source,t,`Invalid number, expected digit but got: ${dr(e,t)}.`);let r=e.source.body,o=t+1;for(;lo(r.charCodeAt(o));)++o;return o}function MP(e,t){let n=e.source.body,r=n.length,o=t+1,i=o,s="";for(;o<r;){let c=n.charCodeAt(o);if(c===34)return s+=n.slice(i,o),Ce(e,w.STRING,t,o+1,s);if(c===92){s+=n.slice(i,o);let l=n.charCodeAt(o+1)===117?n.charCodeAt(o+2)===123?RP(e,o):_P(e,o):xP(e,o);s+=l.value,o+=l.size,i=o;continue}if(c===10||c===13)break;if(uo(c))++o;else if(ic(n,o))o+=2;else throw Ee(e.source,o,`Invalid character within String: ${dr(e,o)}.`)}throw Ee(e.source,o,"Unterminated string.")}function RP(e,t){let n=e.source.body,r=0,o=3;for(;o<12;){let i=n.charCodeAt(t+o++);if(i===125){if(o<5||!uo(r))break;return{value:String.fromCodePoint(r),size:o}}if(r=r<<4|Mi(i),r<0)break}throw Ee(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+o)}".`)}function _P(e,t){let n=e.source.body,r=Sv(n,t+2);if(uo(r))return{value:String.fromCodePoint(r),size:6};if(Dv(r)&&n.charCodeAt(t+6)===92&&n.charCodeAt(t+7)===117){let o=Sv(n,t+8);if(wv(o))return{value:String.fromCodePoint(r,o),size:12}}throw Ee(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function Sv(e,t){return Mi(e.charCodeAt(t))<<12|Mi(e.charCodeAt(t+1))<<8|Mi(e.charCodeAt(t+2))<<4|Mi(e.charCodeAt(t+3))}function Mi(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function xP(e,t){let n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Ee(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function kP(e,t){let n=e.source.body,r=n.length,o=e.lineStart,i=t+3,s=i,c="",l=[];for(;i<r;){let u=n.charCodeAt(i);if(u===34&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34){c+=n.slice(s,i),l.push(c);let d=Ce(e,w.BLOCK_STRING,t,i+3,yv(l).join(`
`));return e.line+=l.length-1,e.lineStart=o,d}if(u===92&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34&&n.charCodeAt(i+3)===34){c+=n.slice(s,i),s=i+1,i+=4;continue}if(u===10||u===13){c+=n.slice(s,i),l.push(c),u===13&&n.charCodeAt(i+1)===10?i+=2:++i,c="",s=i,o=i;continue}if(uo(u))++i;else if(ic(n,i))i+=2;else throw Ee(e.source,i,`Invalid character within String: ${dr(e,i)}.`)}throw Ee(e.source,i,"Unterminated string.")}function NP(e,t){let n=e.source.body,r=n.length,o=t+1;for(;o<r;){let i=n.charCodeAt(o);if(gv(i))++o;else break}return Ce(e,w.NAME,t,o,n.slice(t,o))}function fo(e){return sc(e,[])}function sc(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return OP(e,t);default:return String(e)}}function OP(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";let n=[...t,e];if(AP(e)){let r=e.toJSON();if(r!==e)return typeof r=="string"?r:sc(r,n)}else if(Array.isArray(e))return LP(e,n);return FP(e,n)}function AP(e){return typeof e.toJSON=="function"}function FP(e,t){let n=Object.entries(e);return n.length===0?"{}":t.length>2?"["+HP(e)+"]":"{ "+n.map(([o,i])=>o+": "+sc(i,t)).join(", ")+" }"}function LP(e,t){if(e.length===0)return"[]";if(t.length>2)return"[Array]";let n=Math.min(10,e.length),r=e.length-n,o=[];for(let i=0;i<n;++i)o.push(sc(e[i],t));return r===1?o.push("... 1 more item"):r>1&&o.push(`... ${r} more items`),"["+o.join(", ")+"]"}function HP(e){let t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){let n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}var UP=globalThis.process&&!0,Tv=UP?function(t,n){return t instanceof n}:function(t,n){if(t instanceof n)return!0;if(typeof t=="object"&&t!==null){var r;let o=n.prototype[Symbol.toStringTag],i=Symbol.toStringTag in t?t[Symbol.toStringTag]:(r=t.constructor)===null||r===void 0?void 0:r.name;if(o===i){let s=fo(t);throw new Error(`Cannot use ${o} "${s}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};var ho=class{constructor(t,n="GraphQL request",r={line:1,column:1}){typeof t=="string"||so(!1,`Body must be a string. Received: ${fo(t)}.`),this.body=t,this.name=n,this.locationOffset=r,this.locationOffset.line>0||so(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||so(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}};function Ev(e){return Tv(e,ho)}function cc(e,t){let n=new Vd(e,t),r=n.parseDocument();return Object.defineProperty(r,"tokenCount",{enumerable:!1,value:n.tokenCount}),r}var Vd=class{constructor(t,n={}){let r=Ev(t)?t:new ho(t);this._lexer=new Ri(r),this._options=n,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){let t=this.expectToken(w.NAME);return this.node(t,{kind:P.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:P.DOCUMENT,definitions:this.many(w.SOF,this.parseDefinition,w.EOF)})}parseDefinition(){if(this.peek(w.BRACE_L))return this.parseOperationDefinition();let t=this.peekDescription(),n=t?this._lexer.lookahead():this._lexer.token;if(n.kind===w.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw Ee(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){let t=this._lexer.token;if(this.peek(w.BRACE_L))return this.node(t,{kind:P.OPERATION_DEFINITION,operation:ur.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});let n=this.parseOperationType(),r;return this.peek(w.NAME)&&(r=this.parseName()),this.node(t,{kind:P.OPERATION_DEFINITION,operation:n,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){let t=this.expectToken(w.NAME);switch(t.value){case"query":return ur.QUERY;case"mutation":return ur.MUTATION;case"subscription":return ur.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(w.PAREN_L,this.parseVariableDefinition,w.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:P.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(w.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(w.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){let t=this._lexer.token;return this.expectToken(w.DOLLAR),this.node(t,{kind:P.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:P.SELECTION_SET,selections:this.many(w.BRACE_L,this.parseSelection,w.BRACE_R)})}parseSelection(){return this.peek(w.SPREAD)?this.parseFragment():this.parseField()}parseField(){let t=this._lexer.token,n=this.parseName(),r,o;return this.expectOptionalToken(w.COLON)?(r=n,o=this.parseName()):o=n,this.node(t,{kind:P.FIELD,alias:r,name:o,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(w.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){let n=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(w.PAREN_L,n,w.PAREN_R)}parseArgument(t=!1){let n=this._lexer.token,r=this.parseName();return this.expectToken(w.COLON),this.node(n,{kind:P.ARGUMENT,name:r,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){let t=this._lexer.token;this.expectToken(w.SPREAD);let n=this.expectOptionalKeyword("on");return!n&&this.peek(w.NAME)?this.node(t,{kind:P.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:P.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){let t=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:P.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:P.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){let n=this._lexer.token;switch(n.kind){case w.BRACKET_L:return this.parseList(t);case w.BRACE_L:return this.parseObject(t);case w.INT:return this.advanceLexer(),this.node(n,{kind:P.INT,value:n.value});case w.FLOAT:return this.advanceLexer(),this.node(n,{kind:P.FLOAT,value:n.value});case w.STRING:case w.BLOCK_STRING:return this.parseStringLiteral();case w.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:P.BOOLEAN,value:!0});case"false":return this.node(n,{kind:P.BOOLEAN,value:!1});case"null":return this.node(n,{kind:P.NULL});default:return this.node(n,{kind:P.ENUM,value:n.value})}case w.DOLLAR:if(t)if(this.expectToken(w.DOLLAR),this._lexer.token.kind===w.NAME){let r=this._lexer.token.value;throw Ee(this._lexer.source,n.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){let t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:P.STRING,value:t.value,block:t.kind===w.BLOCK_STRING})}parseList(t){let n=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:P.LIST,values:this.any(w.BRACKET_L,n,w.BRACKET_R)})}parseObject(t){let n=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:P.OBJECT,fields:this.any(w.BRACE_L,n,w.BRACE_R)})}parseObjectField(t){let n=this._lexer.token,r=this.parseName();return this.expectToken(w.COLON),this.node(n,{kind:P.OBJECT_FIELD,name:r,value:this.parseValueLiteral(t)})}parseDirectives(t){let n=[];for(;this.peek(w.AT);)n.push(this.parseDirective(t));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){let n=this._lexer.token;return this.expectToken(w.AT),this.node(n,{kind:P.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){let t=this._lexer.token,n;if(this.expectOptionalToken(w.BRACKET_L)){let r=this.parseTypeReference();this.expectToken(w.BRACKET_R),n=this.node(t,{kind:P.LIST_TYPE,type:r})}else n=this.parseNamedType();return this.expectOptionalToken(w.BANG)?this.node(t,{kind:P.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:P.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(w.STRING)||this.peek(w.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");let r=this.parseConstDirectives(),o=this.many(w.BRACE_L,this.parseOperationTypeDefinition,w.BRACE_R);return this.node(t,{kind:P.SCHEMA_DEFINITION,description:n,directives:r,operationTypes:o})}parseOperationTypeDefinition(){let t=this._lexer.token,n=this.parseOperationType();this.expectToken(w.COLON);let r=this.parseNamedType();return this.node(t,{kind:P.OPERATION_TYPE_DEFINITION,operation:n,type:r})}parseScalarTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");let r=this.parseName(),o=this.parseConstDirectives();return this.node(t,{kind:P.SCALAR_TYPE_DEFINITION,description:n,name:r,directives:o})}parseObjectTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");let r=this.parseName(),o=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(t,{kind:P.OBJECT_TYPE_DEFINITION,description:n,name:r,interfaces:o,directives:i,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(w.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(w.BRACE_L,this.parseFieldDefinition,w.BRACE_R)}parseFieldDefinition(){let t=this._lexer.token,n=this.parseDescription(),r=this.parseName(),o=this.parseArgumentDefs();this.expectToken(w.COLON);let i=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(t,{kind:P.FIELD_DEFINITION,description:n,name:r,arguments:o,type:i,directives:s})}parseArgumentDefs(){return this.optionalMany(w.PAREN_L,this.parseInputValueDef,w.PAREN_R)}parseInputValueDef(){let t=this._lexer.token,n=this.parseDescription(),r=this.parseName();this.expectToken(w.COLON);let o=this.parseTypeReference(),i;this.expectOptionalToken(w.EQUALS)&&(i=this.parseConstValueLiteral());let s=this.parseConstDirectives();return this.node(t,{kind:P.INPUT_VALUE_DEFINITION,description:n,name:r,type:o,defaultValue:i,directives:s})}parseInterfaceTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");let r=this.parseName(),o=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(t,{kind:P.INTERFACE_TYPE_DEFINITION,description:n,name:r,interfaces:o,directives:i,fields:s})}parseUnionTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseUnionMemberTypes();return this.node(t,{kind:P.UNION_TYPE_DEFINITION,description:n,name:r,directives:o,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(w.EQUALS)?this.delimitedMany(w.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();return this.node(t,{kind:P.ENUM_TYPE_DEFINITION,description:n,name:r,directives:o,values:i})}parseEnumValuesDefinition(){return this.optionalMany(w.BRACE_L,this.parseEnumValueDefinition,w.BRACE_R)}parseEnumValueDefinition(){let t=this._lexer.token,n=this.parseDescription(),r=this.parseEnumValueName(),o=this.parseConstDirectives();return this.node(t,{kind:P.ENUM_VALUE_DEFINITION,description:n,name:r,directives:o})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Ee(this._lexer.source,this._lexer.token.start,`${ac(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();return this.node(t,{kind:P.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:r,directives:o,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(w.BRACE_L,this.parseInputValueDef,w.BRACE_R)}parseTypeSystemExtension(){let t=this._lexer.lookahead();if(t.kind===w.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");let n=this.parseConstDirectives(),r=this.optionalMany(w.BRACE_L,this.parseOperationTypeDefinition,w.BRACE_R);if(n.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:P.SCHEMA_EXTENSION,directives:n,operationTypes:r})}parseScalarTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");let n=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(t,{kind:P.SCALAR_TYPE_EXTENSION,name:n,directives:r})}parseObjectTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");let n=this.parseName(),r=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(r.length===0&&o.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:P.OBJECT_TYPE_EXTENSION,name:n,interfaces:r,directives:o,fields:i})}parseInterfaceTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");let n=this.parseName(),r=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(r.length===0&&o.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:P.INTERFACE_TYPE_EXTENSION,name:n,interfaces:r,directives:o,fields:i})}parseUnionTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseUnionMemberTypes();if(r.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:P.UNION_TYPE_EXTENSION,name:n,directives:r,types:o})}parseEnumTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();if(r.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:P.ENUM_TYPE_EXTENSION,name:n,directives:r,values:o})}parseInputObjectTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();if(r.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:P.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:r,fields:o})}parseDirectiveDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(w.AT);let r=this.parseName(),o=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");let s=this.parseDirectiveLocations();return this.node(t,{kind:P.DIRECTIVE_DEFINITION,description:n,name:r,arguments:o,repeatable:i,locations:s})}parseDirectiveLocations(){return this.delimitedMany(w.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){let t=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(rc,n.value))return n;throw this.unexpected(t)}node(t,n){return this._options.noLocation!==!0&&(n.loc=new Pi(t,this._lexer.lastToken,this._lexer.source)),n}peek(t){return this._lexer.token.kind===t}expectToken(t){let n=this._lexer.token;if(n.kind===t)return this.advanceLexer(),n;throw Ee(this._lexer.source,n.start,`Expected ${Cv(t)}, found ${ac(n)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){let n=this._lexer.token;if(n.kind===w.NAME&&n.value===t)this.advanceLexer();else throw Ee(this._lexer.source,n.start,`Expected "${t}", found ${ac(n)}.`)}expectOptionalKeyword(t){let n=this._lexer.token;return n.kind===w.NAME&&n.value===t?(this.advanceLexer(),!0):!1}unexpected(t){let n=t??this._lexer.token;return Ee(this._lexer.source,n.start,`Unexpected ${ac(n)}.`)}any(t,n,r){this.expectToken(t);let o=[];for(;!this.expectOptionalToken(r);)o.push(n.call(this));return o}optionalMany(t,n,r){if(this.expectOptionalToken(t)){let o=[];do o.push(n.call(this));while(!this.expectOptionalToken(r));return o}return[]}many(t,n,r){this.expectToken(t);let o=[];do o.push(n.call(this));while(!this.expectOptionalToken(r));return o}delimitedMany(t,n){this.expectOptionalToken(t);let r=[];do r.push(n.call(this));while(this.expectOptionalToken(t));return r}advanceLexer(){let{maxTokens:t}=this._options,n=this._lexer.advance();if(n.kind!==w.EOF&&(++this._tokenCounter,t!==void 0&&this._tokenCounter>t))throw Ee(this._lexer.source,n.start,`Document contains more that ${t} tokens. Parsing aborted.`)}};function ac(e){let t=e.value;return Cv(e.kind)+(t!=null?` "${t}"`:"")}function Cv(e){return bv(e)?`"${e}"`:e}function Iv(e){return`"${e.replace(jP,BP)}"`}var jP=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function BP(e){return VP[e.charCodeAt(0)]}var VP=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"];var cn=Object.freeze({});function Re(e,t,n=Hd){let r=new Map;for(let S of Object.values(P))r.set(S,$d(t,S));let o,i=Array.isArray(e),s=[e],c=-1,l=[],u=e,d,f,p=[],h=[];do{c++;let S=c===s.length,T=S&&l.length!==0;if(S){if(d=h.length===0?void 0:p[p.length-1],u=f,f=h.pop(),T)if(i){u=u.slice();let C=0;for(let[M,_]of l){let H=M-C;_===null?(u.splice(H,1),C++):u[H]=_}}else{u=Object.defineProperties({},Object.getOwnPropertyDescriptors(u));for(let[C,M]of l)u[C]=M}c=o.index,s=o.keys,l=o.edits,i=o.inArray,o=o.prev}else if(f){if(d=i?c:s[c],u=f[d],u==null)continue;p.push(d)}let D;if(!Array.isArray(u)){var g,y;Ud(u)||so(!1,`Invalid AST Node: ${fo(u)}.`);let C=S?(g=r.get(u.kind))===null||g===void 0?void 0:g.leave:(y=r.get(u.kind))===null||y===void 0?void 0:y.enter;if(D=C?.call(t,u,d,f,p,h),D===cn)break;if(D===!1){if(!S){p.pop();continue}}else if(D!==void 0&&(l.push([d,D]),!S))if(Ud(D))u=D;else{p.pop();continue}}if(D===void 0&&T&&l.push([d,u]),S)p.pop();else{var b;o={inArray:i,index:c,keys:s,edits:l,prev:o},i=Array.isArray(u),s=i?u:(b=n[u.kind])!==null&&b!==void 0?b:[],c=-1,l=[],f&&h.push(f),f=u}}while(o!==void 0);return l.length!==0?l[l.length-1][1]:e}function $d(e,t){let n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function po(e){return Re(e,zP)}var $P=80,zP={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>x(e.definitions,`

`)},OperationDefinition:{leave(e){let t=Q("(",x(e.variableDefinitions,", "),")"),n=x([e.operation,x([e.name,t]),x(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r})=>e+": "+t+Q(" = ",n)+Q(" ",x(r," "))},SelectionSet:{leave:({selections:e})=>kt(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:o}){let i=Q("",e,": ")+t,s=i+Q("(",x(n,", "),")");return s.length>$P&&(s=i+Q(`(
`,lc(x(n,`
`)),`
)`)),x([s,x(r," "),o]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+Q(" ",x(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>x(["...",Q("on ",e),x(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:o})=>`fragment ${e}${Q("(",x(n,", "),")")} on ${t} ${Q("",x(r," ")," ")}`+o},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?vv(e):Iv(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+x(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+x(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+Q("(",x(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>Q("",e,`
`)+x(["schema",x(t," "),kt(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>Q("",e,`
`)+x(["scalar",t,x(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:o})=>Q("",e,`
`)+x(["type",t,Q("implements ",x(n," & ")),x(r," "),kt(o)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:o})=>Q("",e,`
`)+t+(Pv(n)?Q(`(
`,lc(x(n,`
`)),`
)`):Q("(",x(n,", "),")"))+": "+r+Q(" ",x(o," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:o})=>Q("",e,`
`)+x([t+": "+n,Q("= ",r),x(o," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:o})=>Q("",e,`
`)+x(["interface",t,Q("implements ",x(n," & ")),x(r," "),kt(o)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>Q("",e,`
`)+x(["union",t,x(n," "),Q("= ",x(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>Q("",e,`
`)+x(["enum",t,x(n," "),kt(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>Q("",e,`
`)+x([t,x(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>Q("",e,`
`)+x(["input",t,x(n," "),kt(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,repeatable:r,locations:o})=>Q("",e,`
`)+"directive @"+t+(Pv(n)?Q(`(
`,lc(x(n,`
`)),`
)`):Q("(",x(n,", "),")"))+(r?" repeatable":"")+" on "+x(o," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>x(["extend schema",x(e," "),kt(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>x(["extend scalar",e,x(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>x(["extend type",e,Q("implements ",x(t," & ")),x(n," "),kt(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>x(["extend interface",e,Q("implements ",x(t," & ")),x(n," "),kt(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>x(["extend union",e,x(t," "),Q("= ",x(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>x(["extend enum",e,x(t," "),kt(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>x(["extend input",e,x(t," "),kt(n)]," ")}};function x(e,t=""){var n;return(n=e?.filter(r=>r).join(t))!==null&&n!==void 0?n:""}function kt(e){return Q(`{
`,lc(x(e,`
`)),`
}`)}function Q(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function lc(e){return Q("  ",e.replace(/\n/g,`
  `))}function Pv(e){var t;return(t=e?.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}function _i(e){return e.kind===P.FIELD||e.kind===P.FRAGMENT_SPREAD||e.kind===P.INLINE_FRAGMENT}function Nt(e,t){var n=e.directives;return!n||!n.length?!0:Mv(n).every(function(r){var o=r.directive,i=r.ifArgument,s=!1;return i.value.kind==="Variable"?(s=t&&t[i.value.name.value],E(s!==void 0,78,o.name.value)):s=i.value.value,o.name.value==="skip"?!s:s})}function ln(e,t,n){var r=new Set(e),o=r.size;return Re(t,{Directive:function(i){if(r.delete(i.name.value)&&(!n||!r.size))return cn}}),n?!r.size:r.size<o}function zd(e){return e&&ln(["client","export"],e,!0)}function iM(e){var t=e.name.value;return t==="skip"||t==="include"}function Mv(e){var t=[];return e&&e.length&&e.forEach(function(n){if(iM(n)){var r=n.arguments,o=n.name.value;E(r&&r.length===1,79,o);var i=r[0];E(i.name&&i.name.value==="if",80,o);var s=i.value;E(s&&(s.kind==="Variable"||s.kind==="BooleanValue"),81,o),t.push({directive:n,ifArgument:i})}}),t}function qd(e){var t,n,r=(t=e.directives)===null||t===void 0?void 0:t.find(function(i){var s=i.name;return s.value==="unmask"});if(!r)return"mask";var o=(n=r.arguments)===null||n===void 0?void 0:n.find(function(i){var s=i.name;return s.value==="mode"});return globalThis.__DEV__!==!1&&o&&(o.value.kind===P.VARIABLE?globalThis.__DEV__!==!1&&E.warn(82):o.value.kind!==P.STRING?globalThis.__DEV__!==!1&&E.warn(83):o.value.value!=="migrate"&&globalThis.__DEV__!==!1&&E.warn(84,o.value.value)),o&&"value"in o.value&&o.value.value==="migrate"?"migrate":"unmask"}var sM=()=>Object.create(null),{forEach:aM,slice:Rv}=Array.prototype,{hasOwnProperty:cM}=Object.prototype,$e=class e{constructor(t=!0,n=sM){this.weakness=t,this.makeData=n}lookup(){return this.lookupArray(arguments)}lookupArray(t){let n=this;return aM.call(t,r=>n=n.getChildTrie(r)),cM.call(n,"data")?n.data:n.data=this.makeData(Rv.call(t))}peek(){return this.peekArray(arguments)}peekArray(t){let n=this;for(let r=0,o=t.length;n&&r<o;++r){let i=n.mapFor(t[r],!1);n=i&&i.get(t[r])}return n&&n.data}remove(){return this.removeArray(arguments)}removeArray(t){let n;if(t.length){let r=t[0],o=this.mapFor(r,!1),i=o&&o.get(r);i&&(n=i.removeArray(Rv.call(t,1)),!i.data&&!i.weak&&!(i.strong&&i.strong.size)&&o.delete(r))}else n=this.data,delete this.data;return n}getChildTrie(t){let n=this.mapFor(t,!0),r=n.get(t);return r||n.set(t,r=new e(this.weakness,this.makeData)),r}mapFor(t,n){return this.weakness&&lM(t)?this.weak||(n?this.weak=new WeakMap:void 0):this.strong||(n?this.strong=new Map:void 0)}};function lM(e){switch(typeof e){case"object":if(e===null)break;case"function":return!0}return!1}var uM=je(function(){return navigator.product})=="ReactNative",ct=typeof WeakMap=="function"&&!(uM&&!global.HermesInternal),mo=typeof WeakSet=="function",Wd=typeof Symbol=="function"&&typeof Symbol.for=="function",Nn=Wd&&Symbol.asyncIterator,rU=typeof je(function(){return window.document.createElement})=="function",oU=je(function(){return navigator.userAgent.indexOf("jsdom")>=0})||!1;function Z(e){return e!==null&&typeof e=="object"}function Gd(e,t){var n=t,r=[];e.definitions.forEach(function(i){if(i.kind==="OperationDefinition")throw le(85,i.operation,i.name?" named '".concat(i.name.value,"'"):"");i.kind==="FragmentDefinition"&&r.push(i)}),typeof n>"u"&&(E(r.length===1,86,r.length),n=r[0].name.value);var o=v(v({},e),{definitions:De([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:n}}]}}],e.definitions,!0)});return o}function lt(e){e===void 0&&(e=[]);var t={};return e.forEach(function(n){t[n.name.value]=n}),t}function un(e,t){switch(e.kind){case"InlineFragment":return e;case"FragmentSpread":{var n=e.name.value;if(typeof t=="function")return t(n);var r=t&&t[n];return E(r,87,n),r||null}default:return null}}function Qd(e){var t=!0;return Re(e,{FragmentSpread:function(n){if(t=!!n.directives&&n.directives.some(function(r){return r.name.value==="unmask"}),!t)return cn}}),t}function dM(){}var On=class{constructor(t=1/0,n=dM){this.max=t,this.dispose=n,this.map=new Map,this.newest=null,this.oldest=null}has(t){return this.map.has(t)}get(t){let n=this.getNode(t);return n&&n.value}get size(){return this.map.size}getNode(t){let n=this.map.get(t);if(n&&n!==this.newest){let{older:r,newer:o}=n;o&&(o.older=r),r&&(r.newer=o),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=o)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(t,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(t){let n=this.map.get(t);return n?(n===this.newest&&(this.newest=n.older),n===this.oldest&&(this.oldest=n.newer),n.newer&&(n.newer.older=n.older),n.older&&(n.older.newer=n.newer),this.map.delete(t),this.dispose(n.value,t),!0):!1}};function Kd(){}var fM=Kd,hM=typeof WeakRef<"u"?WeakRef:function(e){return{deref:()=>e}},pM=typeof WeakMap<"u"?WeakMap:Map,mM=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:Kd,unregister:Kd}},gM=10024,Gt=class{constructor(t=1/0,n=fM){this.max=t,this.dispose=n,this.map=new pM,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{let r=this.unfinalizedNodes.values();for(let o=0;o<gM;o++){let i=r.next().value;if(!i)break;this.unfinalizedNodes.delete(i);let s=i.key;delete i.key,i.keyRef=new hM(s),this.registry.register(s,i,i)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new mM(this.deleteNode.bind(this))}has(t){return this.map.has(t)}get(t){let n=this.getNode(t);return n&&n.value}getNode(t){let n=this.map.get(t);if(n&&n!==this.newest){let{older:r,newer:o}=n;o&&(o.older=r),r&&(r.newer=o),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=o)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.scheduleFinalization(r),this.map.set(t,r),this.size++,r.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(t){t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.size--;let n=t.key||t.keyRef&&t.keyRef.deref();this.dispose(t.value,n),t.keyRef?this.registry.unregister(t):this.unfinalizedNodes.delete(t),n&&this.map.delete(n)}delete(t){let n=this.map.get(t);return n?(this.deleteNode(n),!0):!1}scheduleFinalization(t){this.unfinalizedNodes.add(t),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}};var Yd=new WeakSet;function _v(e){e.size<=(e.max||-1)||Yd.has(e)||(Yd.add(e),setTimeout(function(){e.clean(),Yd.delete(e)},100))}var go=function(e,t){var n=new Gt(e,t);return n.set=function(r,o){var i=Gt.prototype.set.call(this,r,o);return _v(this),i},n},uc=function(e,t){var n=new On(e,t);return n.set=function(r,o){var i=On.prototype.set.call(this,r,o);return _v(this),i},n};var yM=Symbol.for("apollo.cacheSize"),_e=v({},io[yM]);var fr={};function dc(e,t){fr[e]=t}var xv=globalThis.__DEV__!==!1?SM:void 0,kv=globalThis.__DEV__!==!1?bM:void 0,Nv=globalThis.__DEV__!==!1?Ov:void 0;function vM(){var e={parser:1e3,canonicalStringify:1e3,print:2e3,"documentTransform.cache":2e3,"queryManager.getDocumentInfo":2e3,"PersistedQueryLink.persistedQueryHashes":2e3,"fragmentRegistry.transform":2e3,"fragmentRegistry.lookup":1e3,"fragmentRegistry.findFragmentSpreads":4e3,"cache.fragmentQueryDocuments":1e3,"removeTypenameFromVariables.getVariableDefinitions":2e3,"inMemoryCache.maybeBroadcastWatch":5e3,"inMemoryCache.executeSelectionSet":5e4,"inMemoryCache.executeSubSelectedArray":1e4};return Object.fromEntries(Object.entries(e).map(function(t){var n=t[0],r=t[1];return[n,_e[n]||r]}))}function SM(){var e,t,n,r,o;if(globalThis.__DEV__===!1)throw new Error("only supported in development mode");return{limits:vM(),sizes:v({print:(e=fr.print)===null||e===void 0?void 0:e.call(fr),parser:(t=fr.parser)===null||t===void 0?void 0:t.call(fr),canonicalStringify:(n=fr.canonicalStringify)===null||n===void 0?void 0:n.call(fr),links:Jd(this.link),queryManager:{getDocumentInfo:this.queryManager.transformCache.size,documentTransforms:Fv(this.queryManager.documentTransform)}},(o=(r=this.cache).getMemoryInternals)===null||o===void 0?void 0:o.call(r))}}function Ov(){return{cache:{fragmentQueryDocuments:An(this.getFragmentDoc)}}}function bM(){var e=this.config.fragments;return v(v({},Ov.apply(this)),{addTypenameDocumentTransform:Fv(this.addTypenameTransform),inMemoryCache:{executeSelectionSet:An(this.storeReader.executeSelectionSet),executeSubSelectedArray:An(this.storeReader.executeSubSelectedArray),maybeBroadcastWatch:An(this.maybeBroadcastWatch)},fragmentRegistry:{findFragmentSpreads:An(e?.findFragmentSpreads),lookup:An(e?.lookup),transform:An(e?.transform)}})}function DM(e){return!!e&&"dirtyKey"in e}function An(e){return DM(e)?e.size:void 0}function Av(e){return e!=null}function Fv(e){return Zd(e).map(function(t){return{cache:t}})}function Zd(e){return e?De(De([An(e?.performWork)],Zd(e?.left),!0),Zd(e?.right),!0).filter(Av):[]}function Jd(e){var t;return e?De(De([(t=e?.getMemoryInternals)===null||t===void 0?void 0:t.call(e)],Jd(e?.left),!0),Jd(e?.right),!0).filter(Av):[]}var ze=Object.assign(function(t){return JSON.stringify(t,wM)},{reset:function(){yo=new uc(_e.canonicalStringify||1e3)}});globalThis.__DEV__!==!1&&dc("canonicalStringify",function(){return yo.size});var yo;ze.reset();function wM(e,t){if(t&&typeof t=="object"){var n=Object.getPrototypeOf(t);if(n===Object.prototype||n===null){var r=Object.keys(t);if(r.every(TM))return t;var o=JSON.stringify(r),i=yo.get(o);if(!i){r.sort();var s=JSON.stringify(r);i=yo.get(s)||r,yo.set(o,i),yo.set(s,i)}var c=Object.create(n);return i.forEach(function(l){c[l]=t[l]}),c}}return t}function TM(e,t,n){return t===0||n[t-1]<=e}function bt(e){return{__ref:String(e)}}function W(e){return!!(e&&typeof e=="object"&&typeof e.__ref=="string")}function Xd(e){return Z(e)&&e.kind==="Document"&&Array.isArray(e.definitions)}function EM(e){return e.kind==="StringValue"}function CM(e){return e.kind==="BooleanValue"}function IM(e){return e.kind==="IntValue"}function PM(e){return e.kind==="FloatValue"}function MM(e){return e.kind==="Variable"}function RM(e){return e.kind==="ObjectValue"}function _M(e){return e.kind==="ListValue"}function xM(e){return e.kind==="EnumValue"}function kM(e){return e.kind==="NullValue"}function Fn(e,t,n,r){if(IM(n)||PM(n))e[t.value]=Number(n.value);else if(CM(n)||EM(n))e[t.value]=n.value;else if(RM(n)){var o={};n.fields.map(function(s){return Fn(o,s.name,s.value,r)}),e[t.value]=o}else if(MM(n)){var i=(r||{})[n.name.value];e[t.value]=i}else if(_M(n))e[t.value]=n.values.map(function(s){var c={};return Fn(c,t,s,r),c[t.value]});else if(xM(n))e[t.value]=n.value;else if(kM(n))e[t.value]=null;else throw le(96,t.value,n.kind)}function ef(e,t){var n=null;e.directives&&(n={},e.directives.forEach(function(o){n[o.name.value]={},o.arguments&&o.arguments.forEach(function(i){var s=i.name,c=i.value;return Fn(n[o.name.value],s,c,t)})}));var r=null;return e.arguments&&e.arguments.length&&(r={},e.arguments.forEach(function(o){var i=o.name,s=o.value;return Fn(r,i,s,t)})),fc(e.name.value,r,n)}var NM=["connection","include","skip","client","rest","export","nonreactive"],xi=ze,fc=Object.assign(function(e,t,n){if(t&&n&&n.connection&&n.connection.key)if(n.connection.filter&&n.connection.filter.length>0){var r=n.connection.filter?n.connection.filter:[];r.sort();var o={};return r.forEach(function(c){o[c]=t[c]}),"".concat(n.connection.key,"(").concat(xi(o),")")}else return n.connection.key;var i=e;if(t){var s=xi(t);i+="(".concat(s,")")}return n&&Object.keys(n).forEach(function(c){NM.indexOf(c)===-1&&(n[c]&&Object.keys(n[c]).length?i+="@".concat(c,"(").concat(xi(n[c]),")"):i+="@".concat(c))}),i},{setStringify:function(e){var t=xi;return xi=e,t}});function dn(e,t){if(e.arguments&&e.arguments.length){var n={};return e.arguments.forEach(function(r){var o=r.name,i=r.value;return Fn(n,o,i,t)}),n}return null}function Be(e){return e.alias?e.alias.value:e.name.value}function ki(e,t,n){for(var r,o=0,i=t.selections;o<i.length;o++){var s=i[o];if(qe(s)){if(s.name.value==="__typename")return e[Be(s)]}else r?r.push(s):r=[s]}if(typeof e.__typename=="string")return e.__typename;if(r)for(var c=0,l=r;c<l.length;c++){var s=l[c],u=ki(e,un(s,n).selectionSet,n);if(typeof u=="string")return u}}function qe(e){return e.kind==="Field"}function tf(e){return e.kind==="InlineFragment"}function fn(e){E(e&&e.kind==="Document",88);var t=e.definitions.filter(function(n){return n.kind!=="FragmentDefinition"}).map(function(n){if(n.kind!=="OperationDefinition")throw le(89,n.kind);return n});return E(t.length<=1,90,t.length),e}function ut(e){return fn(e),e.definitions.filter(function(t){return t.kind==="OperationDefinition"})[0]}function Ln(e){return e.definitions.filter(function(t){return t.kind==="OperationDefinition"&&!!t.name}).map(function(t){return t.name.value})[0]||null}function dt(e){return e.definitions.filter(function(t){return t.kind==="FragmentDefinition"})}function Ni(e){var t=ut(e);return E(t&&t.operation==="query",91),t}function Oi(e){E(e.kind==="Document",92),E(e.definitions.length<=1,93);var t=e.definitions[0];return E(t.kind==="FragmentDefinition",94),t}function Ot(e){fn(e);for(var t,n=0,r=e.definitions;n<r.length;n++){var o=r[n];if(o.kind==="OperationDefinition"){var i=o.operation;if(i==="query"||i==="mutation"||i==="subscription")return o}o.kind==="FragmentDefinition"&&!t&&(t=o)}if(t)return t;throw le(95)}function hr(e){var t=Object.create(null),n=e&&e.variableDefinitions;return n&&n.length&&n.forEach(function(r){r.defaultValue&&Fn(t,r.variable.name,r.defaultValue)}),t}var Le=null,Lv={},OM=1,AM=()=>class{constructor(){this.id=["slot",OM++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let t=Le;t;t=t.parent)if(this.id in t.slots){let n=t.slots[this.id];if(n===Lv)break;return t!==Le&&(Le.slots[this.id]=n),!0}return Le&&(Le.slots[this.id]=Lv),!1}getValue(){if(this.hasValue())return Le.slots[this.id]}withValue(t,n,r,o){let i={__proto__:null,[this.id]:t},s=Le;Le={parent:s,slots:i};try{return n.apply(o,r)}finally{Le=s}}static bind(t){let n=Le;return function(){let r=Le;try{return Le=n,t.apply(this,arguments)}finally{Le=r}}}static noContext(t,n,r){if(Le){let o=Le;try{return Le=null,t.apply(r,n)}finally{Le=o}}else return t.apply(r,n)}};function Hv(e){try{return e()}catch{}}var nf="@wry/context:Slot",FM=Hv(()=>globalThis)||Hv(()=>global)||Object.create(null),Uv=FM,hn=Uv[nf]||Array[nf]||function(e){try{Object.defineProperty(Uv,nf,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}(AM());var{bind:jv,noContext:Bv}=hn;var pr=new hn;var{hasOwnProperty:Vv}=Object.prototype,Ai=Array.from||function(e){let t=[];return e.forEach(n=>t.push(n)),t};function vo(e){let{unsubscribe:t}=e;typeof t=="function"&&(e.unsubscribe=void 0,t())}var Fi=[],UM=100;function So(e,t){if(!e)throw new Error(t||"assertion failure")}function zv(e,t){let n=e.length;return n>0&&n===t.length&&e[n-1]===t[n-1]}function qv(e){switch(e.length){case 0:throw new Error("unknown value");case 1:return e[0];case 2:throw e[1]}}function Wv(e){return e.slice(0)}var Gv=(()=>{class e{constructor(n){this.fn=n,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++e.count}peek(){if(this.value.length===1&&!Hn(this))return $v(this),this.value[0]}recompute(n){return So(!this.recomputing,"already recomputing"),$v(this),Hn(this)?jM(this,n):qv(this.value)}setDirty(){this.dirty||(this.dirty=!0,Qv(this),vo(this))}dispose(){this.setDirty(),Xv(this),rf(this,(n,r)=>{n.setDirty(),eS(n,this)})}forget(){this.dispose()}dependOn(n){n.add(this),this.deps||(this.deps=Fi.pop()||new Set),this.deps.add(n)}forgetDeps(){this.deps&&(Ai(this.deps).forEach(n=>n.delete(this)),this.deps.clear(),Fi.push(this.deps),this.deps=null)}}return e.count=0,e})();function $v(e){let t=pr.getValue();if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),Hn(e)?Yv(t,e):Zv(t,e),t}function jM(e,t){return Xv(e),pr.withValue(e,BM,[e,t]),$M(e,t)&&VM(e),qv(e.value)}function BM(e,t){e.recomputing=!0;let{normalizeResult:n}=e,r;n&&e.value.length===1&&(r=Wv(e.value)),e.value.length=0;try{if(e.value[0]=e.fn.apply(null,t),n&&r&&!zv(r,e.value))try{e.value[0]=n(e.value[0],r[0])}catch{}}catch(o){e.value[1]=o}e.recomputing=!1}function Hn(e){return e.dirty||!!(e.dirtyChildren&&e.dirtyChildren.size)}function VM(e){e.dirty=!1,!Hn(e)&&Kv(e)}function Qv(e){rf(e,Yv)}function Kv(e){rf(e,Zv)}function rf(e,t){let n=e.parents.size;if(n){let r=Ai(e.parents);for(let o=0;o<n;++o)t(r[o],e)}}function Yv(e,t){So(e.childValues.has(t)),So(Hn(t));let n=!Hn(e);if(!e.dirtyChildren)e.dirtyChildren=Fi.pop()||new Set;else if(e.dirtyChildren.has(t))return;e.dirtyChildren.add(t),n&&Qv(e)}function Zv(e,t){So(e.childValues.has(t)),So(!Hn(t));let n=e.childValues.get(t);n.length===0?e.childValues.set(t,Wv(t.value)):zv(n,t.value)||e.setDirty(),Jv(e,t),!Hn(e)&&Kv(e)}function Jv(e,t){let n=e.dirtyChildren;n&&(n.delete(t),n.size===0&&(Fi.length<UM&&Fi.push(n),e.dirtyChildren=null))}function Xv(e){e.childValues.size>0&&e.childValues.forEach((t,n)=>{eS(e,n)}),e.forgetDeps(),So(e.dirtyChildren===null)}function eS(e,t){t.parents.delete(e),e.childValues.delete(t),Jv(e,t)}function $M(e,t){if(typeof e.subscribe=="function")try{vo(e),e.unsubscribe=e.subscribe.apply(null,t)}catch{return e.setDirty(),!1}return!0}var zM={setDirty:!0,dispose:!0,forget:!0};function Li(e){let t=new Map,n=e&&e.subscribe;function r(o){let i=pr.getValue();if(i){let s=t.get(o);s||t.set(o,s=new Set),i.dependOn(s),typeof n=="function"&&(vo(s),s.unsubscribe=n(o))}}return r.dirty=function(i,s){let c=t.get(i);if(c){let l=s&&Vv.call(zM,s)?s:"setDirty";Ai(c).forEach(u=>u[l]()),t.delete(i),vo(c)}},r}var tS;function qM(...e){return(tS||(tS=new $e(typeof WeakMap=="function"))).lookupArray(e)}var of=new Set;function pn(e,{max:t=Math.pow(2,16),keyArgs:n,makeCacheKey:r=qM,normalizeResult:o,subscribe:i,cache:s=On}=Object.create(null)){let c=typeof s=="function"?new s(t,p=>p.dispose()):s,l=function(){let p=r.apply(null,n?n.apply(null,arguments):arguments);if(p===void 0)return e.apply(null,arguments);let h=c.get(p);h||(c.set(p,h=new Gv(e)),h.normalizeResult=o,h.subscribe=i,h.forget=()=>c.delete(p));let g=h.recompute(Array.prototype.slice.call(arguments));return c.set(p,h),of.add(c),pr.hasValue()||(of.forEach(y=>y.clean()),of.clear()),g};Object.defineProperty(l,"size",{get:()=>c.size,configurable:!1,enumerable:!1}),Object.freeze(l.options={max:t,keyArgs:n,makeCacheKey:r,normalizeResult:o,subscribe:i,cache:c});function u(p){let h=p&&c.get(p);h&&h.setDirty()}l.dirtyKey=u,l.dirty=function(){u(r.apply(null,arguments))};function d(p){let h=p&&c.get(p);if(h)return h.peek()}l.peekKey=d,l.peek=function(){return d(r.apply(null,arguments))};function f(p){return p?c.delete(p):!1}return l.forgetKey=f,l.forget=function(){return f(r.apply(null,arguments))},l.makeCacheKey=r,l.getKey=n?function(){return r.apply(null,n.apply(null,arguments))}:r,Object.freeze(l)}function WM(e){return e}var bo=function(){function e(t,n){n===void 0&&(n=Object.create(null)),this.resultCache=mo?new WeakSet:new Set,this.transform=t,n.getCacheKey&&(this.getCacheKey=n.getCacheKey),this.cached=n.cache!==!1,this.resetCache()}return e.prototype.getCacheKey=function(t){return[t]},e.identity=function(){return new e(WM,{cache:!1})},e.split=function(t,n,r){return r===void 0&&(r=e.identity()),Object.assign(new e(function(o){var i=t(o)?n:r;return i.transformDocument(o)},{cache:!1}),{left:n,right:r})},e.prototype.resetCache=function(){var t=this;if(this.cached){var n=new $e(ct);this.performWork=pn(e.prototype.performWork.bind(this),{makeCacheKey:function(r){var o=t.getCacheKey(r);if(o)return E(Array.isArray(o),77),n.lookupArray(o)},max:_e["documentTransform.cache"],cache:Gt})}},e.prototype.performWork=function(t){return fn(t),this.transform(t)},e.prototype.transformDocument=function(t){if(this.resultCache.has(t))return t;var n=this.performWork(t);return this.resultCache.add(n),n},e.prototype.concat=function(t){var n=this;return Object.assign(new e(function(r){return t.transformDocument(n.transformDocument(r))},{cache:!1}),{left:this,right:t})},e}();var Hi,At=Object.assign(function(e){var t=Hi.get(e);return t||(t=po(e),Hi.set(e,t)),t},{reset:function(){Hi=new go(_e.print||2e3)}});At.reset();globalThis.__DEV__!==!1&&dc("print",function(){return Hi?Hi.size:0});var ie=Array.isArray;function He(e){return Array.isArray(e)&&e.length>0}var nS={kind:P.FIELD,name:{kind:P.NAME,value:"__typename"}};function oS(e,t){return!e||e.selectionSet.selections.every(function(n){return n.kind===P.FRAGMENT_SPREAD&&oS(t[n.name.value],t)})}function GM(e){return oS(ut(e)||Oi(e),lt(dt(e)))?null:e}function QM(e){var t=new Map,n=new Map;return e.forEach(function(r){r&&(r.name?t.set(r.name,r):r.test&&n.set(r.test,r))}),function(r){var o=t.get(r.name.value);return!o&&n.size&&n.forEach(function(i,s){s(r)&&(o=i)}),o}}function rS(e){var t=new Map;return function(r){r===void 0&&(r=e);var o=t.get(r);return o||t.set(r,o={variables:new Set,fragmentSpreads:new Set}),o}}function hc(e,t){fn(t);for(var n=rS(""),r=rS(""),o=function(S){for(var T=0,D=void 0;T<S.length&&(D=S[T]);++T)if(!ie(D)){if(D.kind===P.OPERATION_DEFINITION)return n(D.name&&D.name.value);if(D.kind===P.FRAGMENT_DEFINITION)return r(D.name.value)}return globalThis.__DEV__!==!1&&E.error(97),null},i=0,s=t.definitions.length-1;s>=0;--s)t.definitions[s].kind===P.OPERATION_DEFINITION&&++i;var c=QM(e),l=function(S){return He(S)&&S.map(c).some(function(T){return T&&T.remove})},u=new Map,d=!1,f={enter:function(S){if(l(S.directives))return d=!0,null}},p=Re(t,{Field:f,InlineFragment:f,VariableDefinition:{enter:function(){return!1}},Variable:{enter:function(S,T,D,C,M){var _=o(M);_&&_.variables.add(S.name.value)}},FragmentSpread:{enter:function(S,T,D,C,M){if(l(S.directives))return d=!0,null;var _=o(M);_&&_.fragmentSpreads.add(S.name.value)}},FragmentDefinition:{enter:function(S,T,D,C){u.set(JSON.stringify(C),S)},leave:function(S,T,D,C){var M=u.get(JSON.stringify(C));if(S===M)return S;if(i>0&&S.selectionSet.selections.every(function(_){return _.kind===P.FIELD&&_.name.value==="__typename"}))return r(S.name.value).removed=!0,d=!0,null}},Directive:{leave:function(S){if(c(S))return d=!0,null}}});if(!d)return t;var h=function(S){return S.transitiveVars||(S.transitiveVars=new Set(S.variables),S.removed||S.fragmentSpreads.forEach(function(T){h(r(T)).transitiveVars.forEach(function(D){S.transitiveVars.add(D)})})),S},g=new Set;p.definitions.forEach(function(S){S.kind===P.OPERATION_DEFINITION?h(n(S.name&&S.name.value)).fragmentSpreads.forEach(function(T){g.add(T)}):S.kind===P.FRAGMENT_DEFINITION&&i===0&&!r(S.name.value).removed&&g.add(S.name.value)}),g.forEach(function(S){h(r(S)).fragmentSpreads.forEach(function(T){g.add(T)})});var y=function(S){return!!(!g.has(S)||r(S).removed)},b={enter:function(S){if(y(S.name.value))return null}};return GM(Re(p,{FragmentSpread:b,FragmentDefinition:b,OperationDefinition:{leave:function(S){if(S.variableDefinitions){var T=h(n(S.name&&S.name.value)).transitiveVars;if(T.size<S.variableDefinitions.length)return v(v({},S),{variableDefinitions:S.variableDefinitions.filter(function(D){return T.has(D.variable.name.value)})})}}}}))}var mr=Object.assign(function(e){return Re(e,{SelectionSet:{enter:function(t,n,r){if(!(r&&r.kind===P.OPERATION_DEFINITION)){var o=t.selections;if(o){var i=o.some(function(c){return qe(c)&&(c.name.value==="__typename"||c.name.value.lastIndexOf("__",0)===0)});if(!i){var s=r;if(!(qe(s)&&s.directives&&s.directives.some(function(c){return c.name.value==="export"})))return v(v({},t),{selections:De(De([],o,!0),[nS],!1)})}}}}}})},{added:function(e){return e===nS}});function sf(e){var t=Ot(e),n=t.operation;if(n==="query")return e;var r=Re(e,{OperationDefinition:{enter:function(o){return v(v({},o),{operation:"query"})}}});return r}function Ui(e){fn(e);var t=hc([{test:function(n){return n.name.value==="client"},remove:!0}],e);return t}function af(e){return fn(e),Re(e,{FragmentSpread:function(t){var n;if(!(!((n=t.directives)===null||n===void 0)&&n.some(function(r){return r.name.value==="unmask"})))return v(v({},t),{directives:De(De([],t.directives||[],!0),[{kind:P.DIRECTIVE,name:{kind:P.NAME,value:"nonreactive"}}],!1)})}})}var KM=Object.prototype.hasOwnProperty;function cf(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return gr(e)}function gr(e){var t=e[0]||{},n=e.length;if(n>1)for(var r=new Je,o=1;o<n;++o)t=r.merge(t,e[o]);return t}var YM=function(e,t,n){return this.merge(e[n],t[n])},Je=function(){function e(t){t===void 0&&(t=YM),this.reconciler=t,this.isObject=Z,this.pastCopies=new Set}return e.prototype.merge=function(t,n){for(var r=this,o=[],i=2;i<arguments.length;i++)o[i-2]=arguments[i];return Z(n)&&Z(t)?(Object.keys(n).forEach(function(s){if(KM.call(t,s)){var c=t[s];if(n[s]!==c){var l=r.reconciler.apply(r,De([t,n,s],o,!1));l!==c&&(t=r.shallowCopyForMerge(t),t[s]=l)}}else t=r.shallowCopyForMerge(t),t[s]=n[s]}),t):n},e.prototype.shallowCopyForMerge=function(t){return Z(t)&&(this.pastCopies.has(t)||(Array.isArray(t)?t=t.slice(0):t=v({__proto__:Object.getPrototypeOf(t)},t),this.pastCopies.add(t))),t},e}();function ZM(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=JM(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JM(e,t){if(e){if(typeof e=="string")return iS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return iS(e,t)}}function iS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function sS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ff(e,t,n){return t&&sS(e.prototype,t),n&&sS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var hf=function(){return typeof Symbol=="function"},pf=function(e){return hf()&&!!Symbol[e]},mf=function(e){return pf(e)?Symbol[e]:"@@"+e};hf()&&!pf("observable")&&(Symbol.observable=Symbol("observable"));var XM=mf("iterator"),uf=mf("observable"),aS=mf("species");function mc(e,t){var n=e[t];if(n!=null){if(typeof n!="function")throw new TypeError(n+" is not a function");return n}}function ji(e){var t=e.constructor;return t!==void 0&&(t=t[aS],t===null&&(t=void 0)),t!==void 0?t:B}function eR(e){return e instanceof B}function Do(e){Do.log?Do.log(e):setTimeout(function(){throw e})}function pc(e){Promise.resolve().then(function(){try{e()}catch(t){Do(t)}})}function cS(e){var t=e._cleanup;if(t!==void 0&&(e._cleanup=void 0,!!t))try{if(typeof t=="function")t();else{var n=mc(t,"unsubscribe");n&&n.call(t)}}catch(r){Do(r)}}function df(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function tR(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var n=0;n<t.length&&(lS(e,t[n].type,t[n].value),e._state!=="closed");++n);}}function lS(e,t,n){e._state="running";var r=e._observer;try{var o=mc(r,t);switch(t){case"next":o&&o.call(r,n);break;case"error":if(df(e),o)o.call(r,n);else throw n;break;case"complete":df(e),o&&o.call(r);break}}catch(i){Do(i)}e._state==="closed"?cS(e):e._state==="running"&&(e._state="ready")}function lf(e,t,n){if(e._state!=="closed"){if(e._state==="buffering"){e._queue.push({type:t,value:n});return}if(e._state!=="ready"){e._state="buffering",e._queue=[{type:t,value:n}],pc(function(){return tR(e)});return}lS(e,t,n)}}var nR=function(){function e(n,r){this._cleanup=void 0,this._observer=n,this._queue=void 0,this._state="initializing";var o=new rR(this);try{this._cleanup=r.call(void 0,o)}catch(i){o.error(i)}this._state==="initializing"&&(this._state="ready")}var t=e.prototype;return t.unsubscribe=function(){this._state!=="closed"&&(df(this),cS(this))},ff(e,[{key:"closed",get:function(){return this._state==="closed"}}]),e}(),rR=function(){function e(n){this._subscription=n}var t=e.prototype;return t.next=function(r){lf(this._subscription,"next",r)},t.error=function(r){lf(this._subscription,"error",r)},t.complete=function(){lf(this._subscription,"complete")},ff(e,[{key:"closed",get:function(){return this._subscription._state==="closed"}}]),e}(),B=function(){function e(n){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if(typeof n!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=n}var t=e.prototype;return t.subscribe=function(r){return(typeof r!="object"||r===null)&&(r={next:r,error:arguments[1],complete:arguments[2]}),new nR(r,this._subscriber)},t.forEach=function(r){var o=this;return new Promise(function(i,s){if(typeof r!="function"){s(new TypeError(r+" is not a function"));return}function c(){l.unsubscribe(),i()}var l=o.subscribe({next:function(u){try{r(u,c)}catch(d){s(d),l.unsubscribe()}},error:s,complete:i})})},t.map=function(r){var o=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var i=ji(this);return new i(function(s){return o.subscribe({next:function(c){try{c=r(c)}catch(l){return s.error(l)}s.next(c)},error:function(c){s.error(c)},complete:function(){s.complete()}})})},t.filter=function(r){var o=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var i=ji(this);return new i(function(s){return o.subscribe({next:function(c){try{if(!r(c))return}catch(l){return s.error(l)}s.next(c)},error:function(c){s.error(c)},complete:function(){s.complete()}})})},t.reduce=function(r){var o=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var i=ji(this),s=arguments.length>1,c=!1,l=arguments[1],u=l;return new i(function(d){return o.subscribe({next:function(f){var p=!c;if(c=!0,!p||s)try{u=r(u,f)}catch(h){return d.error(h)}else u=f},error:function(f){d.error(f)},complete:function(){if(!c&&!s)return d.error(new TypeError("Cannot reduce an empty sequence"));d.next(u),d.complete()}})})},t.concat=function(){for(var r=this,o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];var c=ji(this);return new c(function(l){var u,d=0;function f(p){u=p.subscribe({next:function(h){l.next(h)},error:function(h){l.error(h)},complete:function(){d===i.length?(u=void 0,l.complete()):f(c.from(i[d++]))}})}return f(r),function(){u&&(u.unsubscribe(),u=void 0)}})},t.flatMap=function(r){var o=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var i=ji(this);return new i(function(s){var c=[],l=o.subscribe({next:function(d){if(r)try{d=r(d)}catch(p){return s.error(p)}var f=i.from(d).subscribe({next:function(p){s.next(p)},error:function(p){s.error(p)},complete:function(){var p=c.indexOf(f);p>=0&&c.splice(p,1),u()}});c.push(f)},error:function(d){s.error(d)},complete:function(){u()}});function u(){l.closed&&c.length===0&&s.complete()}return function(){c.forEach(function(d){return d.unsubscribe()}),l.unsubscribe()}})},t[uf]=function(){return this},e.from=function(r){var o=typeof this=="function"?this:e;if(r==null)throw new TypeError(r+" is not an object");var i=mc(r,uf);if(i){var s=i.call(r);if(Object(s)!==s)throw new TypeError(s+" is not an object");return eR(s)&&s.constructor===o?s:new o(function(c){return s.subscribe(c)})}if(pf("iterator")&&(i=mc(r,XM),i))return new o(function(c){pc(function(){if(!c.closed){for(var l=ZM(i.call(r)),u;!(u=l()).done;){var d=u.value;if(c.next(d),c.closed)return}c.complete()}})});if(Array.isArray(r))return new o(function(c){pc(function(){if(!c.closed){for(var l=0;l<r.length;++l)if(c.next(r[l]),c.closed)return;c.complete()}})});throw new TypeError(r+" is not observable")},e.of=function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var s=typeof this=="function"?this:e;return new s(function(c){pc(function(){if(!c.closed){for(var l=0;l<o.length;++l)if(c.next(o[l]),c.closed)return;c.complete()}})})},ff(e,null,[{key:aS,get:function(){return this}}]),e}();hf()&&Object.defineProperty(B,Symbol("extensions"),{value:{symbol:uf,hostReportError:Do},configurable:!0});function gf(e){var t,n=e.Symbol;if(typeof n=="function")if(n.observable)t=n.observable;else{typeof n.for=="function"?t=n.for("https://github.com/benlesh/symbol-observable"):t=n("https://github.com/benlesh/symbol-observable");try{n.observable=t}catch{}}else t="@@observable";return t}var wo;typeof self<"u"?wo=self:typeof window<"u"?wo=window:typeof global<"u"?wo=global:typeof module<"u"?wo=module:wo=Function("return this")();var Nj=gf(wo);var uS=B.prototype,dS="@@observable";uS[dS]||(uS[dS]=function(){return this});function yf(e){return e.catch(function(){}),e}var oR=Object.prototype.toString;function gc(e){return vf(e)}function vf(e,t){switch(oR.call(e)){case"[object Array]":{if(t=t||new Map,t.has(e))return t.get(e);var n=e.slice(0);return t.set(e,n),n.forEach(function(o,i){n[i]=vf(o,t)}),n}case"[object Object]":{if(t=t||new Map,t.has(e))return t.get(e);var r=Object.create(Object.getPrototypeOf(e));return t.set(e,r),Object.keys(e).forEach(function(o){r[o]=vf(e[o],t)}),r}default:return e}}function iR(e){var t=new Set([e]);return t.forEach(function(n){Z(n)&&sR(n)===n&&Object.getOwnPropertyNames(n).forEach(function(r){Z(n[r])&&t.add(n[r])})}),e}function sR(e){if(globalThis.__DEV__!==!1&&!Object.isFrozen(e))try{Object.freeze(e)}catch(t){if(t instanceof TypeError)return null;throw t}return e}function Un(e){return globalThis.__DEV__!==!1&&iR(e),e}function yr(e,t,n){var r=[];e.forEach(function(o){return o[t]&&r.push(o)}),r.forEach(function(o){return o[t](n)})}function yc(e,t,n){return new B(function(r){var o={then:function(l){return new Promise(function(u){return u(l())})}};function i(l,u){return function(d){if(l){var f=function(){return r.closed?0:l(d)};o=o.then(f,f).then(function(p){return r.next(p)},function(p){return r.error(p)})}else r[u](d)}}var s={next:i(t,"next"),error:i(n,"error"),complete:function(){o.then(function(){return r.complete()})}},c=e.subscribe(s);return function(){return c.unsubscribe()}})}function vc(e){function t(n){Object.defineProperty(e,n,{value:B})}return Wd&&Symbol.species&&t(Symbol.species),t("@@species"),e}function fS(e){return e&&typeof e.then=="function"}var vr=function(e){ke(t,e);function t(n){var r=e.call(this,function(o){return r.addObserver(o),function(){return r.removeObserver(o)}})||this;return r.observers=new Set,r.promise=new Promise(function(o,i){r.resolve=o,r.reject=i}),r.handlers={next:function(o){r.sub!==null&&(r.latest=["next",o],r.notify("next",o),yr(r.observers,"next",o))},error:function(o){var i=r.sub;i!==null&&(i&&setTimeout(function(){return i.unsubscribe()}),r.sub=null,r.latest=["error",o],r.reject(o),r.notify("error",o),yr(r.observers,"error",o))},complete:function(){var o=r,i=o.sub,s=o.sources,c=s===void 0?[]:s;if(i!==null){var l=c.shift();l?fS(l)?l.then(function(u){return r.sub=u.subscribe(r.handlers)},r.handlers.error):r.sub=l.subscribe(r.handlers):(i&&setTimeout(function(){return i.unsubscribe()}),r.sub=null,r.latest&&r.latest[0]==="next"?r.resolve(r.latest[1]):r.resolve(),r.notify("complete"),yr(r.observers,"complete"))}}},r.nextResultListeners=new Set,r.cancel=function(o){r.reject(o),r.sources=[],r.handlers.error(o)},r.promise.catch(function(o){}),typeof n=="function"&&(n=[new B(n)]),fS(n)?n.then(function(o){return r.start(o)},r.handlers.error):r.start(n),r}return t.prototype.start=function(n){this.sub===void 0&&(this.sources=Array.from(n),this.handlers.complete())},t.prototype.deliverLastMessage=function(n){if(this.latest){var r=this.latest[0],o=n[r];o&&o.call(n,this.latest[1]),this.sub===null&&r==="next"&&n.complete&&n.complete()}},t.prototype.addObserver=function(n){this.observers.has(n)||(this.deliverLastMessage(n),this.observers.add(n))},t.prototype.removeObserver=function(n){this.observers.delete(n)&&this.observers.size<1&&this.handlers.complete()},t.prototype.notify=function(n,r){var o=this.nextResultListeners;o.size&&(this.nextResultListeners=new Set,o.forEach(function(i){return i(n,r)}))},t.prototype.beforeNext=function(n){var r=!1;this.nextResultListeners.add(function(o,i){r||(r=!0,n(o,i))})},t}(B);vc(vr);function jn(e){return"incremental"in e}function aR(e){return"hasNext"in e&&"data"in e}function hS(e){return jn(e)||aR(e)}function pS(e){return Z(e)&&"payload"in e}function Sc(e,t){var n=e,r=new Je;return jn(t)&&He(t.incremental)&&t.incremental.forEach(function(o){for(var i=o.data,s=o.path,c=s.length-1;c>=0;--c){var l=s[c],u=!isNaN(+l),d=u?[]:{};d[l]=i,i=d}n=r.merge(n,i)}),n}function To(e){var t=bc(e);return He(t)}function bc(e){var t=He(e.errors)?e.errors.slice(0):[];return jn(e)&&He(e.incremental)&&e.incremental.forEach(function(n){n.errors&&t.push.apply(t,n.errors)}),t}function Qt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Object.create(null);return e.forEach(function(r){r&&Object.keys(r).forEach(function(o){var i=r[o];i!==void 0&&(n[o]=i)})}),n}function Bi(e,t){return Qt(e,t,t.variables&&{variables:Qt(v(v({},e&&e.variables),t.variables))})}function Vi(e){return new B(function(t){t.error(e)})}var Dc=function(e,t,n){var r=new Error(n);throw r.name="ServerError",r.response=e,r.statusCode=e.status,r.result=t,r};function Sf(e){for(var t=["query","operationName","variables","extensions","context"],n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];if(t.indexOf(o)<0)throw le(46,o)}return e}function bf(e,t){var n=v({},e),r=function(i){typeof i=="function"?n=v(v({},n),i(n)):n=v(v({},n),i)},o=function(){return v({},n)};return Object.defineProperty(t,"setContext",{enumerable:!1,value:r}),Object.defineProperty(t,"getContext",{enumerable:!1,value:o}),t}function Df(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName=typeof t.query!="string"?Ln(t.query)||void 0:""),t}function wf(e,t){var n=v({},e),r=new Set(Object.keys(e));return Re(t,{Variable:function(o,i,s){s&&s.kind!=="VariableDefinition"&&r.delete(o.name.value)}}),r.forEach(function(o){delete n[o]}),n}function mS(e,t){return t?t(e):B.of()}function $i(e){return typeof e=="function"?new Dt(e):e}function wc(e){return e.request.length<=1}var Dt=function(){function e(t){t&&(this.request=t)}return e.empty=function(){return new e(function(){return B.of()})},e.from=function(t){return t.length===0?e.empty():t.map($i).reduce(function(n,r){return n.concat(r)})},e.split=function(t,n,r){var o=$i(n),i=$i(r||new e(mS)),s;return wc(o)&&wc(i)?s=new e(function(c){return t(c)?o.request(c)||B.of():i.request(c)||B.of()}):s=new e(function(c,l){return t(c)?o.request(c,l)||B.of():i.request(c,l)||B.of()}),Object.assign(s,{left:o,right:i})},e.execute=function(t,n){return t.request(bf(n.context,Df(Sf(n))))||B.of()},e.concat=function(t,n){var r=$i(t);if(wc(r))return globalThis.__DEV__!==!1&&E.warn(38,r),r;var o=$i(n),i;return wc(o)?i=new e(function(s){return r.request(s,function(c){return o.request(c)||B.of()})||B.of()}):i=new e(function(s,c){return r.request(s,function(l){return o.request(l,c)||B.of()})||B.of()}),Object.assign(i,{left:r,right:o})},e.prototype.split=function(t,n,r){return this.concat(e.split(t,n,r||new e(mS)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(t,n){throw le(39)},e.prototype.onError=function(t,n){if(n&&n.error)return n.error(t),!1;throw t},e.prototype.setOnError=function(t){return this.onError=t,this},e}();var Eo=Dt.execute;function Tf(e){var t,n=e[Symbol.asyncIterator]();return t={next:function(){return n.next()}},t[Symbol.asyncIterator]=function(){return this},t}function Ef(e){var t=null,n=null,r=!1,o=[],i=[];function s(f){if(!n){if(i.length){var p=i.shift();if(Array.isArray(p)&&p[0])return p[0]({value:f,done:!1})}o.push(f)}}function c(f){n=f;var p=i.slice();p.forEach(function(h){h[1](f)}),!t||t()}function l(){r=!0;var f=i.slice();f.forEach(function(p){p[0]({value:void 0,done:!0})}),!t||t()}t=function(){t=null,e.removeListener("data",s),e.removeListener("error",c),e.removeListener("end",l),e.removeListener("finish",l),e.removeListener("close",l)},e.on("data",s),e.on("error",c),e.on("end",l),e.on("finish",l),e.on("close",l);function u(){return new Promise(function(f,p){if(n)return p(n);if(o.length)return f({value:o.shift(),done:!1});if(r)return f({value:void 0,done:!0});i.push([f,p])})}var d={next:function(){return u()}};return Nn&&(d[Symbol.asyncIterator]=function(){return this}),d}function Cf(e){var t=!1,n={next:function(){return t?Promise.resolve({value:void 0,done:!0}):(t=!0,new Promise(function(r,o){e.then(function(i){r({value:i,done:!1})}).catch(o)}))}};return Nn&&(n[Symbol.asyncIterator]=function(){return this}),n}function Tc(e){var t={next:function(){return e.read()}};return Nn&&(t[Symbol.asyncIterator]=function(){return this}),t}function cR(e){return!!e.body}function lR(e){return!!e.getReader}function uR(e){return!!(Nn&&e[Symbol.asyncIterator])}function dR(e){return!!e.stream}function fR(e){return!!e.arrayBuffer}function hR(e){return!!e.pipe}function gS(e){var t=e;if(cR(e)&&(t=e.body),uR(t))return Tf(t);if(lR(t))return Tc(t.getReader());if(dR(t))return Tc(t.stream().getReader());if(fR(t))return Cf(t.arrayBuffer());if(hR(t))return Ef(t);throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")}var zi=Symbol();function yS(e){return e.extensions?Array.isArray(e.extensions[zi]):!1}function Ec(e){return e.hasOwnProperty("graphQLErrors")}var pR=function(e){var t=De(De(De([],e.graphQLErrors,!0),e.clientErrors,!0),e.protocolErrors,!0);return e.networkError&&t.push(e.networkError),t.map(function(n){return Z(n)&&n.message||"Error message not found."}).join(`
`)},mn=function(e){ke(t,e);function t(n){var r=n.graphQLErrors,o=n.protocolErrors,i=n.clientErrors,s=n.networkError,c=n.errorMessage,l=n.extraInfo,u=e.call(this,c)||this;return u.name="ApolloError",u.graphQLErrors=r||[],u.protocolErrors=o||[],u.clientErrors=i||[],u.networkError=s||null,u.message=c||pR(u),u.extraInfo=l,u.cause=De(De(De([s],r||[],!0),o||[],!0),i||[],!0).find(function(d){return!!d})||null,u.__proto__=t.prototype,u}return t}(Error);var vS=Object.prototype.hasOwnProperty;function SS(e,t){return et(this,void 0,void 0,function(){var n,r,o,i,s,c,l,u,d,f,p,h,g,y,b,S,T,D,C,M,_,H,G,se;return Et(this,function(ye){switch(ye.label){case 0:if(TextDecoder===void 0)throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");n=new TextDecoder("utf-8"),r=(se=e.headers)===null||se===void 0?void 0:se.get("content-type"),o="boundary=",i=r?.includes(o)?r?.substring(r?.indexOf(o)+o.length).replace(/['"]/g,"").replace(/\;(.*)/gm,"").trim():"-",s=`\r
--`.concat(i),c="",l=gS(e),u=!0,ye.label=1;case 1:return u?[4,l.next()]:[3,3];case 2:for(d=ye.sent(),f=d.value,p=d.done,h=typeof f=="string"?f:n.decode(f),g=c.length-s.length+1,u=!p,c+=h,y=c.indexOf(s,g);y>-1;){if(b=void 0,H=[c.slice(0,y),c.slice(y+s.length)],b=H[0],c=H[1],S=b.indexOf(`\r
\r
`),T=mR(b.slice(0,S)),D=T["content-type"],D&&D.toLowerCase().indexOf("application/json")===-1)throw new Error("Unsupported patch content type: application/json is required.");if(C=b.slice(S),C){if(M=bS(e,C),Object.keys(M).length>1||"data"in M||"incremental"in M||"errors"in M||"payload"in M)if(pS(M)){if(_={},"payload"in M){if(Object.keys(M).length===1&&M.payload===null)return[2];_=v({},M.payload)}"errors"in M&&(_=v(v({},_),{extensions:v(v({},"extensions"in _?_.extensions:null),(G={},G[zi]=M.errors,G))})),t(_)}else t(M);else if(Object.keys(M).length===1&&"hasNext"in M&&!M.hasNext)return[2]}y=c.indexOf(s)}return[3,1];case 3:return[2]}})})}function mR(e){var t={};return e.split(`
`).forEach(function(n){var r=n.indexOf(":");if(r>-1){var o=n.slice(0,r).trim().toLowerCase(),i=n.slice(r+1).trim();t[o]=i}}),t}function bS(e,t){if(e.status>=300){var n=function(){try{return JSON.parse(t)}catch{return t}};Dc(e,n(),"Response not successful: Received status code ".concat(e.status))}try{return JSON.parse(t)}catch(o){var r=o;throw r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,r}}function DS(e,t){e.result&&e.result.errors&&e.result.data&&t.next(e.result),t.error(e)}function wS(e){return function(t){return t.text().then(function(n){return bS(t,n)}).then(function(n){return!Array.isArray(n)&&!vS.call(n,"data")&&!vS.call(n,"errors")&&Dc(t,n,"Server response was missing for query '".concat(Array.isArray(e)?e.map(function(r){return r.operationName}):e.operationName,"'.")),n})}}var qi=function(e,t){var n;try{n=JSON.stringify(e)}catch(o){var r=le(42,t,o.message);throw r.parseError=o,r}return n};var gR={includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},yR={accept:"*/*","content-type":"application/json"},vR={method:"POST"},TS={http:gR,headers:yR,options:vR},ES=function(e,t){return t(e)};function CS(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o={},i={};n.forEach(function(f){o=v(v(v({},o),f.options),{headers:v(v({},o.headers),f.headers)}),f.credentials&&(o.credentials=f.credentials),i=v(v({},i),f.http)}),o.headers&&(o.headers=SR(o.headers,i.preserveHeaderCase));var s=e.operationName,c=e.extensions,l=e.variables,u=e.query,d={operationName:s,variables:l};return i.includeExtensions&&(d.extensions=c),i.includeQuery&&(d.query=t(u,At)),{options:o,body:d}}function SR(e,t){if(!t){var n={};return Object.keys(Object(e)).forEach(function(i){n[i.toLowerCase()]=e[i]}),n}var r={};Object.keys(Object(e)).forEach(function(i){r[i.toLowerCase()]={originalName:i,value:e[i]}});var o={};return Object.keys(r).forEach(function(i){o[r[i].originalName]=r[i].value}),o}var IS=function(e){if(!e&&typeof fetch>"u")throw le(40)};var PS=function(e,t){var n=e.getContext(),r=n.uri;return r||(typeof t=="function"?t(e):t||"/graphql")};function MS(e,t){var n=[],r=function(f,p){n.push("".concat(f,"=").concat(encodeURIComponent(p)))};if("query"in t&&r("query",t.query),t.operationName&&r("operationName",t.operationName),t.variables){var o=void 0;try{o=qi(t.variables,"Variables map")}catch(f){return{parseError:f}}r("variables",o)}if(t.extensions){var i=void 0;try{i=qi(t.extensions,"Extensions map")}catch(f){return{parseError:f}}r("extensions",i)}var s="",c=e,l=e.indexOf("#");l!==-1&&(s=e.substr(l),c=e.substr(0,l));var u=c.indexOf("?")===-1?"?":"&",d=c+u+n.join("&")+s;return{newURI:d}}var RS=je(function(){return fetch}),_S=function(e){e===void 0&&(e={});var t=e.uri,n=t===void 0?"/graphql":t,r=e.fetch,o=e.print,i=o===void 0?ES:o,s=e.includeExtensions,c=e.preserveHeaderCase,l=e.useGETForQueries,u=e.includeUnusedVariables,d=u===void 0?!1:u,f=Ge(e,["uri","fetch","print","includeExtensions","preserveHeaderCase","useGETForQueries","includeUnusedVariables"]);globalThis.__DEV__!==!1&&IS(r||RS);var p={http:{includeExtensions:s,preserveHeaderCase:c},options:f.fetchOptions,credentials:f.credentials,headers:f.headers};return new Dt(function(h){var g=PS(h,n),y=h.getContext(),b={};if(y.clientAwareness){var S=y.clientAwareness,T=S.name,D=S.version;T&&(b["apollographql-client-name"]=T),D&&(b["apollographql-client-version"]=D)}var C=v(v({},b),y.headers),M={http:y.http,options:y.fetchOptions,credentials:y.credentials,headers:C};if(ln(["client"],h.query)){var _=Ui(h.query);if(!_)return Vi(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));h.query=_}var H=CS(h,i,TS,p,M),G=H.options,se=H.body;se.variables&&!d&&(se.variables=wf(se.variables,h.query));var ye;!G.signal&&typeof AbortController<"u"&&(ye=new AbortController,G.signal=ye.signal);var Lt=function(ft){return ft.kind==="OperationDefinition"&&ft.operation==="mutation"},br=function(ft){return ft.kind==="OperationDefinition"&&ft.operation==="subscription"},Ae=br(Ot(h.query)),yn=ln(["defer"],h.query);if(l&&!h.query.definitions.some(Lt)&&(G.method="GET"),yn||Ae){G.headers=G.headers||{};var Qc="multipart/mixed;";Ae&&yn&&globalThis.__DEV__!==!1&&E.warn(41),Ae?Qc+="boundary=graphql;subscriptionSpec=1.0,application/json":yn&&(Qc+="deferSpec=20220824,application/json"),G.headers.accept=Qc}if(G.method==="GET"){var nh=MS(g,se),jb=nh.newURI,rh=nh.parseError;if(rh)return Vi(rh);g=jb}else try{G.body=qi(se,"Payload")}catch(ft){return Vi(ft)}return new B(function(ft){var Bb=r||je(function(){return fetch})||RS,oh=ft.next.bind(ft);return Bb(g,G).then(function(Dr){var Kc;h.setContext({response:Dr});var ih=(Kc=Dr.headers)===null||Kc===void 0?void 0:Kc.get("content-type");return ih!==null&&/^multipart\/mixed/i.test(ih)?SS(Dr,oh):wS(h)(Dr).then(oh)}).then(function(){ye=void 0,ft.complete()}).catch(function(Dr){ye=void 0,DS(Dr,ft)}),function(){ye&&ye.abort()}})})};var If=function(e){ke(t,e);function t(n){n===void 0&&(n={});var r=e.call(this,_S(n).request)||this;return r.options=n,r}return t}(Dt);var{toString:xS,hasOwnProperty:bR}=Object.prototype,kS=Function.prototype.toString,Pf=new Map;function ne(e,t){try{return Mf(e,t)}finally{Pf.clear()}}var Wi=ne;function Mf(e,t){if(e===t)return!0;let n=xS.call(e),r=xS.call(t);if(n!==r)return!1;switch(n){case"[object Array]":if(e.length!==t.length)return!1;case"[object Object]":{if(OS(e,t))return!0;let o=NS(e),i=NS(t),s=o.length;if(s!==i.length)return!1;for(let c=0;c<s;++c)if(!bR.call(t,o[c]))return!1;for(let c=0;c<s;++c){let l=o[c];if(!Mf(e[l],t[l]))return!1}return!0}case"[object Error]":return e.name===t.name&&e.message===t.message;case"[object Number]":if(e!==e)return t!==t;case"[object Boolean]":case"[object Date]":return+e==+t;case"[object RegExp]":case"[object String]":return e==`${t}`;case"[object Map]":case"[object Set]":{if(e.size!==t.size)return!1;if(OS(e,t))return!0;let o=e.entries(),i=n==="[object Map]";for(;;){let s=o.next();if(s.done)break;let[c,l]=s.value;if(!t.has(c)||i&&!Mf(l,t.get(c)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":e=new Uint8Array(e),t=new Uint8Array(t);case"[object DataView]":{let o=e.byteLength;if(o===t.byteLength)for(;o--&&e[o]===t[o];);return o===-1}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{let o=kS.call(e);return o!==kS.call(t)?!1:!TR(o,wR)}}return!1}function NS(e){return Object.keys(e).filter(DR,e)}function DR(e){return this[e]!==void 0}var wR="{ [native code] }";function TR(e,t){let n=e.length-t.length;return n>=0&&e.indexOf(t,n)===n}function OS(e,t){let n=Pf.get(e);if(n){if(n.has(t))return!0}else Pf.set(e,n=new Set);return n.add(t),!1}function Ic(e,t,n,r){var o=t.data,i=Ge(t,["data"]),s=n.data,c=Ge(n,["data"]);return Wi(i,c)&&Cc(Ot(e).selectionSet,o,s,{fragmentMap:lt(dt(e)),variables:r})}function Cc(e,t,n,r){if(t===n)return!0;var o=new Set;return e.selections.every(function(i){if(o.has(i)||(o.add(i),!Nt(i,r.variables))||AS(i))return!0;if(qe(i)){var s=Be(i),c=t&&t[s],l=n&&n[s],u=i.selectionSet;if(!u)return Wi(c,l);var d=Array.isArray(c),f=Array.isArray(l);if(d!==f)return!1;if(d&&f){var p=c.length;if(l.length!==p)return!1;for(var h=0;h<p;++h)if(!Cc(u,c[h],l[h],r))return!1;return!0}return Cc(u,c,l,r)}else{var g=un(i,r.fragmentMap);if(g)return AS(g)?!0:Cc(g.selectionSet,t,n,r)}})}function AS(e){return!!e.directives&&e.directives.some(ER)}function ER(e){return e.name.value==="nonreactive"}var Pc=ct?WeakMap:Map,Mc=mo?WeakSet:Set,Co=new hn,FS=!1;function Rc(){FS||(FS=!0,globalThis.__DEV__!==!1&&E.warn(52))}function _c(e,t,n){return Co.withValue(!0,function(){var r=Gi(e,t,n,!1);return Object.isFrozen(e)&&Un(r),r})}function CR(e,t){if(t.has(e))return t.get(e);var n=Array.isArray(e)?[]:Object.create(null);return t.set(e,n),n}function Gi(e,t,n,r,o){var i,s=n.knownChanged,c=CR(e,n.mutableTargets);if(Array.isArray(e)){for(var l=0,u=Array.from(e.entries());l<u.length;l++){var d=u[l],f=d[0],p=d[1];if(p===null){c[f]=null;continue}var h=Gi(p,t,n,r,globalThis.__DEV__!==!1?"".concat(o||"","[").concat(f,"]"):void 0);s.has(h)&&s.add(c),c[f]=h}return s.has(c)?c:e}for(var g=0,y=t.selections;g<y.length;g++){var b=y[g],S=void 0;if(r&&s.add(c),b.kind===P.FIELD){var T=Be(b),D=b.selectionSet;if(S=c[T]||e[T],S===void 0)continue;if(D&&S!==null){var h=Gi(e[T],D,n,r,globalThis.__DEV__!==!1?"".concat(o||"",".").concat(T):void 0);s.has(h)&&(S=h)}globalThis.__DEV__===!1&&(c[T]=S),globalThis.__DEV__!==!1&&(r&&T!=="__typename"&&!(!((i=Object.getOwnPropertyDescriptor(c,T))===null||i===void 0)&&i.value)?Object.defineProperty(c,T,IR(T,S,o||"",n.operationName,n.operationType)):(delete c[T],c[T]=S))}if(b.kind===P.INLINE_FRAGMENT&&(!b.typeCondition||n.cache.fragmentMatches(b,e.__typename))&&(S=Gi(e,b.selectionSet,n,r,o)),b.kind===P.FRAGMENT_SPREAD){var C=b.name.value,M=n.fragmentMap[C]||(n.fragmentMap[C]=n.cache.lookupFragment(C));E(M,47,C);var _=qd(b);_!=="mask"&&(S=Gi(e,M.selectionSet,n,_==="migrate",o))}s.has(S)&&s.add(c)}return"__typename"in e&&!("__typename"in c)&&(c.__typename=e.__typename),Object.keys(c).length!==Object.keys(e).length&&s.add(c),s.has(c)?c:e}function IR(e,t,n,r,o){var i=function(){return Co.getValue()||(globalThis.__DEV__!==!1&&E.warn(48,r?"".concat(o," '").concat(r,"'"):"anonymous ".concat(o),"".concat(n,".").concat(e).replace(/^\./,"")),i=function(){return t}),t};return{get:function(){return i()},set:function(s){i=function(){return s}},enumerable:!0,configurable:!0}}function Qi(e,t,n,r){if(!n.fragmentMatches)return globalThis.__DEV__!==!1&&Rc(),e;var o=t.definitions.filter(function(s){return s.kind===P.FRAGMENT_DEFINITION});typeof r>"u"&&(E(o.length===1,49,o.length),r=o[0].name.value);var i=o.find(function(s){return s.name.value===r});return E(!!i,50,r),e==null||Wi(e,{})?e:_c(e,i.selectionSet,{operationType:"fragment",operationName:i.name.value,fragmentMap:lt(dt(t)),cache:n,mutableTargets:new Pc,knownChanged:new Mc})}function Rf(e,t,n){var r;if(!n.fragmentMatches)return globalThis.__DEV__!==!1&&Rc(),e;var o=ut(t);return E(o,51),e==null?e:_c(e,o.selectionSet,{operationType:o.operation,operationName:(r=o.name)===null||r===void 0?void 0:r.value,fragmentMap:lt(dt(t)),cache:n,mutableTargets:new Pc,knownChanged:new Mc})}var xc=function(){function e(){this.assumeImmutableResults=!1,this.getFragmentDoc=pn(Gd,{max:_e["cache.fragmentQueryDocuments"]||1e3,cache:Gt})}return e.prototype.lookupFragment=function(t){return null},e.prototype.batch=function(t){var n=this,r=typeof t.optimistic=="string"?t.optimistic:t.optimistic===!1?null:void 0,o;return this.performTransaction(function(){return o=t.update(n)},r),o},e.prototype.recordOptimisticTransaction=function(t,n){this.performTransaction(t,n)},e.prototype.transformDocument=function(t){return t},e.prototype.transformForLink=function(t){return t},e.prototype.identify=function(t){},e.prototype.gc=function(){return[]},e.prototype.modify=function(t){return!1},e.prototype.readQuery=function(t,n){return n===void 0&&(n=!!t.optimistic),this.read(v(v({},t),{rootId:t.id||"ROOT_QUERY",optimistic:n}))},e.prototype.watchFragment=function(t){var n=this,r=t.fragment,o=t.fragmentName,i=t.from,s=t.optimistic,c=s===void 0?!0:s,l=Ge(t,["fragment","fragmentName","from","optimistic"]),u=this.getFragmentDoc(r,o),d=typeof i>"u"||typeof i=="string"?i:this.identify(i),f=!!t[Symbol.for("apollo.dataMasking")];if(globalThis.__DEV__!==!1){var p=o||Oi(r).name.value;d||globalThis.__DEV__!==!1&&E.warn(1,p)}var h=v(v({},l),{returnPartialData:!0,id:d,query:u,optimistic:c}),g;return new B(function(y){return n.watch(v(v({},h),{immediate:!0,callback:function(b){var S=f?Qi(b.result,r,n,o):b.result;if(!(g&&Ic(u,{data:g.result},{data:S},t.variables))){var T={data:S,complete:!!b.complete};b.missing&&(T.missing=gr(b.missing.map(function(D){return D.missing}))),g=v(v({},b),{result:S}),y.next(T)}}}))})},e.prototype.readFragment=function(t,n){return n===void 0&&(n=!!t.optimistic),this.read(v(v({},t),{query:this.getFragmentDoc(t.fragment,t.fragmentName),rootId:t.id,optimistic:n}))},e.prototype.writeQuery=function(t){var n=t.id,r=t.data,o=Ge(t,["id","data"]);return this.write(Object.assign(o,{dataId:n||"ROOT_QUERY",result:r}))},e.prototype.writeFragment=function(t){var n=t.id,r=t.data,o=t.fragment,i=t.fragmentName,s=Ge(t,["id","data","fragment","fragmentName"]);return this.write(Object.assign(s,{query:this.getFragmentDoc(o,i),dataId:n,result:r}))},e.prototype.updateQuery=function(t,n){return this.batch({update:function(r){var o=r.readQuery(t),i=n(o);return i==null?o:(r.writeQuery(v(v({},t),{data:i})),i)}})},e.prototype.updateFragment=function(t,n){return this.batch({update:function(r){var o=r.readFragment(t),i=n(o);return i==null?o:(r.writeFragment(v(v({},t),{data:i})),i)}})},e}();globalThis.__DEV__!==!1&&(xc.prototype.getMemoryInternals=Nv);var Ki=function(e){ke(t,e);function t(n,r,o,i){var s,c=e.call(this,n)||this;if(c.message=n,c.path=r,c.query=o,c.variables=i,Array.isArray(c.path)){c.missing=c.message;for(var l=c.path.length-1;l>=0;--l)c.missing=(s={},s[c.path[l]]=c.missing,s)}else c.missing=c.path;return c.__proto__=t.prototype,c}return t}(Error);var Te=Object.prototype.hasOwnProperty;function Yi(e){return e==null}function Nc(e,t){var n=e.__typename,r=e.id,o=e._id;if(typeof n=="string"&&(t&&(t.keyObject=Yi(r)?Yi(o)?void 0:{_id:o}:{id:r}),Yi(r)&&!Yi(o)&&(r=o),!Yi(r)))return"".concat(n,":").concat(typeof r=="number"||typeof r=="string"?r:JSON.stringify(r))}var LS={dataIdFromObject:Nc,addTypename:!0,resultCaching:!0,canonizeResults:!1};function HS(e){return Qt(LS,e)}function Oc(e){var t=e.canonizeResults;return t===void 0?LS.canonizeResults:t}function US(e,t){return W(t)?e.get(t.__ref,"__typename"):t&&t.__typename}var _f=/^[_a-z][_0-9a-z]*/i;function Ft(e){var t=e.match(_f);return t?t[0]:e}function kc(e,t,n){return Z(t)?ie(t)?t.every(function(r){return kc(e,r,n)}):e.selections.every(function(r){if(qe(r)&&Nt(r,n)){var o=Be(r);return Te.call(t,o)&&(!r.selectionSet||kc(r.selectionSet,t[o],n))}return!0}):!1}function Bn(e){return Z(e)&&!W(e)&&!ie(e)}function jS(){return new Je}function Ac(e,t){var n=lt(dt(e));return{fragmentMap:n,lookupFragment:function(r){var o=n[r];return!o&&t&&(o=t.lookup(r)),o||null}}}var Fc=Object.create(null),xf=function(){return Fc},BS=Object.create(null),Io=function(){function e(t,n){var r=this;this.policies=t,this.group=n,this.data=Object.create(null),this.rootIds=Object.create(null),this.refs=Object.create(null),this.getFieldValue=function(o,i){return Un(W(o)?r.get(o.__ref,i):o&&o[i])},this.canRead=function(o){return W(o)?r.has(o.__ref):typeof o=="object"},this.toReference=function(o,i){if(typeof o=="string")return bt(o);if(W(o))return o;var s=r.policies.identify(o)[0];if(s){var c=bt(s);return i&&r.merge(s,o),c}}}return e.prototype.toObject=function(){return v({},this.data)},e.prototype.has=function(t){return this.lookup(t,!0)!==void 0},e.prototype.get=function(t,n){if(this.group.depend(t,n),Te.call(this.data,t)){var r=this.data[t];if(r&&Te.call(r,n))return r[n]}if(n==="__typename"&&Te.call(this.policies.rootTypenamesById,t))return this.policies.rootTypenamesById[t];if(this instanceof Vn)return this.parent.get(t,n)},e.prototype.lookup=function(t,n){if(n&&this.group.depend(t,"__exists"),Te.call(this.data,t))return this.data[t];if(this instanceof Vn)return this.parent.lookup(t,n);if(this.policies.rootTypenamesById[t])return Object.create(null)},e.prototype.merge=function(t,n){var r=this,o;W(t)&&(t=t.__ref),W(n)&&(n=n.__ref);var i=typeof t=="string"?this.lookup(o=t):t,s=typeof n=="string"?this.lookup(o=n):n;if(s){E(typeof o=="string",2);var c=new Je(MR).merge(i,s);if(this.data[o]=c,c!==i&&(delete this.refs[o],this.group.caching)){var l=Object.create(null);i||(l.__exists=1),Object.keys(s).forEach(function(u){if(!i||i[u]!==c[u]){l[u]=1;var d=Ft(u);d!==u&&!r.policies.hasKeyArgs(c.__typename,d)&&(l[d]=1),c[u]===void 0&&!(r instanceof Vn)&&delete c[u]}}),l.__typename&&!(i&&i.__typename)&&this.policies.rootTypenamesById[o]===c.__typename&&delete l.__typename,Object.keys(l).forEach(function(u){return r.group.dirty(o,u)})}}},e.prototype.modify=function(t,n){var r=this,o=this.lookup(t);if(o){var i=Object.create(null),s=!1,c=!0,l={DELETE:Fc,INVALIDATE:BS,isReference:W,toReference:this.toReference,canRead:this.canRead,readField:function(u,d){return r.policies.readField(typeof u=="string"?{fieldName:u,from:d||bt(t)}:u,{store:r})}};if(Object.keys(o).forEach(function(u){var d=Ft(u),f=o[u];if(f!==void 0){var p=typeof n=="function"?n:n[u]||n[d];if(p){var h=p===xf?Fc:p(Un(f),v(v({},l),{fieldName:d,storeFieldName:u,storage:r.getStorage(t,u)}));if(h===BS)r.group.dirty(t,u);else if(h===Fc&&(h=void 0),h!==f&&(i[u]=h,s=!0,f=h,globalThis.__DEV__!==!1)){var g=function(M){if(r.lookup(M.__ref)===void 0)return globalThis.__DEV__!==!1&&E.warn(3,M),!0};if(W(h))g(h);else if(Array.isArray(h))for(var y=!1,b=void 0,S=0,T=h;S<T.length;S++){var D=T[S];if(W(D)){if(y=!0,g(D))break}else if(typeof D=="object"&&D){var C=r.policies.identify(D)[0];C&&(b=D)}if(y&&b!==void 0){globalThis.__DEV__!==!1&&E.warn(4,b);break}}}}f!==void 0&&(c=!1)}}),s)return this.merge(t,i),c&&(this instanceof Vn?this.data[t]=void 0:delete this.data[t],this.group.dirty(t,"__exists")),!0}return!1},e.prototype.delete=function(t,n,r){var o,i=this.lookup(t);if(i){var s=this.getFieldValue(i,"__typename"),c=n&&r?this.policies.getStoreFieldName({typename:s,fieldName:n,args:r}):n;return this.modify(t,c?(o={},o[c]=xf,o):xf)}return!1},e.prototype.evict=function(t,n){var r=!1;return t.id&&(Te.call(this.data,t.id)&&(r=this.delete(t.id,t.fieldName,t.args)),this instanceof Vn&&this!==n&&(r=this.parent.evict(t,n)||r),(t.fieldName||r)&&this.group.dirty(t.id,t.fieldName||"__exists")),r},e.prototype.clear=function(){this.replace(null)},e.prototype.extract=function(){var t=this,n=this.toObject(),r=[];return this.getRootIdSet().forEach(function(o){Te.call(t.policies.rootTypenamesById,o)||r.push(o)}),r.length&&(n.__META={extraRootIds:r.sort()}),n},e.prototype.replace=function(t){var n=this;if(Object.keys(this.data).forEach(function(i){t&&Te.call(t,i)||n.delete(i)}),t){var r=t.__META,o=Ge(t,["__META"]);Object.keys(o).forEach(function(i){n.merge(i,o[i])}),r&&r.extraRootIds.forEach(this.retain,this)}},e.prototype.retain=function(t){return this.rootIds[t]=(this.rootIds[t]||0)+1},e.prototype.release=function(t){if(this.rootIds[t]>0){var n=--this.rootIds[t];return n||delete this.rootIds[t],n}return 0},e.prototype.getRootIdSet=function(t){return t===void 0&&(t=new Set),Object.keys(this.rootIds).forEach(t.add,t),this instanceof Vn?this.parent.getRootIdSet(t):Object.keys(this.policies.rootTypenamesById).forEach(t.add,t),t},e.prototype.gc=function(){var t=this,n=this.getRootIdSet(),r=this.toObject();n.forEach(function(s){Te.call(r,s)&&(Object.keys(t.findChildRefIds(s)).forEach(n.add,n),delete r[s])});var o=Object.keys(r);if(o.length){for(var i=this;i instanceof Vn;)i=i.parent;o.forEach(function(s){return i.delete(s)})}return o},e.prototype.findChildRefIds=function(t){if(!Te.call(this.refs,t)){var n=this.refs[t]=Object.create(null),r=this.data[t];if(!r)return n;var o=new Set([r]);o.forEach(function(i){W(i)&&(n[i.__ref]=!0),Z(i)&&Object.keys(i).forEach(function(s){var c=i[s];Z(c)&&o.add(c)})})}return this.refs[t]},e.prototype.makeCacheKey=function(){return this.group.keyMaker.lookupArray(arguments)},e}();var VS=function(){function e(t,n){n===void 0&&(n=null),this.caching=t,this.parent=n,this.d=null,this.resetCaching()}return e.prototype.resetCaching=function(){this.d=this.caching?Li():null,this.keyMaker=new $e(ct)},e.prototype.depend=function(t,n){if(this.d){this.d(kf(t,n));var r=Ft(n);r!==n&&this.d(kf(t,r)),this.parent&&this.parent.depend(t,n)}},e.prototype.dirty=function(t,n){this.d&&this.d.dirty(kf(t,n),n==="__exists"?"forget":"setDirty")},e}();function kf(e,t){return t+"#"+e}function Nf(e,t){Sr(e)&&e.group.depend(t,"__exists")}(function(e){var t=function(n){ke(r,n);function r(o){var i=o.policies,s=o.resultCaching,c=s===void 0?!0:s,l=o.seed,u=n.call(this,i,new VS(c))||this;return u.stump=new PR(u),u.storageTrie=new $e(ct),l&&u.replace(l),u}return r.prototype.addLayer=function(o,i){return this.stump.addLayer(o,i)},r.prototype.removeLayer=function(){return this},r.prototype.getStorage=function(){return this.storageTrie.lookupArray(arguments)},r}(e);e.Root=t})(Io||(Io={}));var Vn=function(e){ke(t,e);function t(n,r,o,i){var s=e.call(this,r.policies,i)||this;return s.id=n,s.parent=r,s.replay=o,s.group=i,o(s),s}return t.prototype.addLayer=function(n,r){return new t(n,this,r,this.group)},t.prototype.removeLayer=function(n){var r=this,o=this.parent.removeLayer(n);return n===this.id?(this.group.caching&&Object.keys(this.data).forEach(function(i){var s=r.data[i],c=o.lookup(i);c?s?s!==c&&Object.keys(s).forEach(function(l){ne(s[l],c[l])||r.group.dirty(i,l)}):(r.group.dirty(i,"__exists"),Object.keys(c).forEach(function(l){r.group.dirty(i,l)})):r.delete(i)}),o):o===this.parent?this:o.addLayer(this.id,this.replay)},t.prototype.toObject=function(){return v(v({},this.parent.toObject()),this.data)},t.prototype.findChildRefIds=function(n){var r=this.parent.findChildRefIds(n);return Te.call(this.data,n)?v(v({},r),e.prototype.findChildRefIds.call(this,n)):r},t.prototype.getStorage=function(){for(var n=this.parent;n.parent;)n=n.parent;return n.getStorage.apply(n,arguments)},t}(Io),PR=function(e){ke(t,e);function t(n){return e.call(this,"EntityStore.Stump",n,function(){},new VS(n.group.caching,n.group))||this}return t.prototype.removeLayer=function(){return this},t.prototype.merge=function(n,r){return this.parent.merge(n,r)},t}(Vn);function MR(e,t,n){var r=e[n],o=t[n];return ne(r,o)?r:o}function Sr(e){return!!(e instanceof Io&&e.group.caching)}function RR(e){return Z(e)?ie(e)?e.slice(0):v({__proto__:Object.getPrototypeOf(e)},e):e}var Of=function(){function e(){this.known=new(mo?WeakSet:Set),this.pool=new $e(ct),this.passes=new WeakMap,this.keysByJSON=new Map,this.empty=this.admit({})}return e.prototype.isKnown=function(t){return Z(t)&&this.known.has(t)},e.prototype.pass=function(t){if(Z(t)){var n=RR(t);return this.passes.set(n,t),n}return t},e.prototype.admit=function(t){var n=this;if(Z(t)){var r=this.passes.get(t);if(r)return r;var o=Object.getPrototypeOf(t);switch(o){case Array.prototype:{if(this.known.has(t))return t;var i=t.map(this.admit,this),s=this.pool.lookupArray(i);return s.array||(this.known.add(s.array=i),globalThis.__DEV__!==!1&&Object.freeze(i)),s.array}case null:case Object.prototype:{if(this.known.has(t))return t;var c=Object.getPrototypeOf(t),l=[c],u=this.sortedKeys(t);l.push(u.json);var d=l.length;u.sorted.forEach(function(h){l.push(n.admit(t[h]))});var s=this.pool.lookupArray(l);if(!s.object){var f=s.object=Object.create(c);this.known.add(f),u.sorted.forEach(function(h,g){f[h]=l[d+g]}),globalThis.__DEV__!==!1&&Object.freeze(f)}return s.object}}}return t},e.prototype.sortedKeys=function(t){var n=Object.keys(t),r=this.pool.lookupArray(n);if(!r.keys){n.sort();var o=JSON.stringify(n);(r.keys=this.keysByJSON.get(o))||this.keysByJSON.set(o,r.keys={sorted:n,json:o})}return r.keys},e}();function $S(e){return[e.selectionSet,e.objectOrReference,e.context,e.context.canonizeResults]}var zS=function(){function e(t){var n=this;this.knownResults=new(ct?WeakMap:Map),this.config=Qt(t,{addTypename:t.addTypename!==!1,canonizeResults:Oc(t)}),this.canon=t.canon||new Of,this.executeSelectionSet=pn(function(r){var o,i=r.context.canonizeResults,s=$S(r);s[3]=!i;var c=(o=n.executeSelectionSet).peek.apply(o,s);return c?i?v(v({},c),{result:n.canon.admit(c.result)}):c:(Nf(r.context.store,r.enclosingRef.__ref),n.execSelectionSetImpl(r))},{max:this.config.resultCacheMaxSize||_e["inMemoryCache.executeSelectionSet"]||5e4,keyArgs:$S,makeCacheKey:function(r,o,i,s){if(Sr(i.store))return i.store.makeCacheKey(r,W(o)?o.__ref:o,i.varString,s)}}),this.executeSubSelectedArray=pn(function(r){return Nf(r.context.store,r.enclosingRef.__ref),n.execSubSelectedArrayImpl(r)},{max:this.config.resultCacheMaxSize||_e["inMemoryCache.executeSubSelectedArray"]||1e4,makeCacheKey:function(r){var o=r.field,i=r.array,s=r.context;if(Sr(s.store))return s.store.makeCacheKey(o,i,s.varString)}})}return e.prototype.resetCanon=function(){this.canon=new Of},e.prototype.diffQueryAgainstStore=function(t){var n=t.store,r=t.query,o=t.rootId,i=o===void 0?"ROOT_QUERY":o,s=t.variables,c=t.returnPartialData,l=c===void 0?!0:c,u=t.canonizeResults,d=u===void 0?this.config.canonizeResults:u,f=this.config.cache.policies;s=v(v({},hr(Ni(r))),s);var p=bt(i),h=this.executeSelectionSet({selectionSet:Ot(r).selectionSet,objectOrReference:p,enclosingRef:p,context:v({store:n,query:r,policies:f,variables:s,varString:ze(s),canonizeResults:d},Ac(r,this.config.fragments))}),g;if(h.missing&&(g=[new Ki(_R(h.missing),h.missing,r,s)],!l))throw g[0];return{result:h.result,complete:!g,missing:g}},e.prototype.isFresh=function(t,n,r,o){if(Sr(o.store)&&this.knownResults.get(t)===r){var i=this.executeSelectionSet.peek(r,n,o,this.canon.isKnown(t));if(i&&t===i.result)return!0}return!1},e.prototype.execSelectionSetImpl=function(t){var n=this,r=t.selectionSet,o=t.objectOrReference,i=t.enclosingRef,s=t.context;if(W(o)&&!s.policies.rootTypenamesById[o.__ref]&&!s.store.has(o.__ref))return{result:this.canon.empty,missing:"Dangling reference to missing ".concat(o.__ref," object")};var c=s.variables,l=s.policies,u=s.store,d=u.getFieldValue(o,"__typename"),f=[],p,h=new Je;this.config.addTypename&&typeof d=="string"&&!l.rootIdsByTypename[d]&&f.push({__typename:d});function g(D,C){var M;return D.missing&&(p=h.merge(p,(M={},M[C]=D.missing,M))),D.result}var y=new Set(r.selections);y.forEach(function(D){var C,M;if(Nt(D,c))if(qe(D)){var _=l.readField({fieldName:D.name.value,field:D,variables:s.variables,from:o},s),H=Be(D);_===void 0?mr.added(D)||(p=h.merge(p,(C={},C[H]="Can't find field '".concat(D.name.value,"' on ").concat(W(o)?o.__ref+" object":"object "+JSON.stringify(o,null,2)),C))):ie(_)?_.length>0&&(_=g(n.executeSubSelectedArray({field:D,array:_,enclosingRef:i,context:s}),H)):D.selectionSet?_!=null&&(_=g(n.executeSelectionSet({selectionSet:D.selectionSet,objectOrReference:_,enclosingRef:W(_)?_:i,context:s}),H)):s.canonizeResults&&(_=n.canon.pass(_)),_!==void 0&&f.push((M={},M[H]=_,M))}else{var G=un(D,s.lookupFragment);if(!G&&D.kind===P.FRAGMENT_SPREAD)throw le(10,D.name.value);G&&l.fragmentMatches(G,d)&&G.selectionSet.selections.forEach(y.add,y)}});var b=gr(f),S={result:b,missing:p},T=s.canonizeResults?this.canon.admit(S):Un(S);return T.result&&this.knownResults.set(T.result,r),T},e.prototype.execSubSelectedArrayImpl=function(t){var n=this,r=t.field,o=t.array,i=t.enclosingRef,s=t.context,c,l=new Je;function u(d,f){var p;return d.missing&&(c=l.merge(c,(p={},p[f]=d.missing,p))),d.result}return r.selectionSet&&(o=o.filter(s.store.canRead)),o=o.map(function(d,f){return d===null?null:ie(d)?u(n.executeSubSelectedArray({field:r,array:d,enclosingRef:i,context:s}),f):r.selectionSet?u(n.executeSelectionSet({selectionSet:r.selectionSet,objectOrReference:d,enclosingRef:W(d)?d:i,context:s}),f):(globalThis.__DEV__!==!1&&xR(s.store,r,d),d)}),{result:s.canonizeResults?this.canon.admit(o):o,missing:c}},e}();function _R(e){try{JSON.stringify(e,function(t,n){if(typeof n=="string")throw n;return n})}catch(t){return t}}function xR(e,t,n){if(!t.selectionSet){var r=new Set([n]);r.forEach(function(o){Z(o)&&(E(!W(o),11,US(e,o),t.name.value),Object.values(o).forEach(r.add,r))})}}var Po=new hn,qS=new WeakMap;function Zi(e){var t=qS.get(e);return t||qS.set(e,t={vars:new Set,dep:Li()}),t}function Af(e){Zi(e).vars.forEach(function(t){return t.forgetCache(e)})}function WS(e){Zi(e).vars.forEach(function(t){return t.attachCache(e)})}function Lc(e){var t=new Set,n=new Set,r=function(i){if(arguments.length>0){if(e!==i){e=i,t.forEach(function(l){Zi(l).dep.dirty(r),kR(l)});var s=Array.from(n);n.clear(),s.forEach(function(l){return l(e)})}}else{var c=Po.getValue();c&&(o(c),Zi(c).dep(r))}return e};r.onNextChange=function(i){return n.add(i),function(){n.delete(i)}};var o=r.attachCache=function(i){return t.add(i),Zi(i).vars.add(r),r};return r.forgetCache=function(i){return t.delete(i)},r}function kR(e){e.broadcastWatches&&e.broadcastWatches()}var GS=Object.create(null);function Ff(e){var t=JSON.stringify(e);return GS[t]||(GS[t]=Object.create(null))}function Lf(e){var t=Ff(e);return t.keyFieldsFn||(t.keyFieldsFn=function(n,r){var o=function(s,c){return r.readField(c,s)},i=r.keyObject=Uf(e,function(s){var c=Mo(r.storeObject,s,o);return c===void 0&&n!==r.storeObject&&Te.call(n,s[0])&&(c=Mo(n,s,KS)),E(c!==void 0,5,s.join("."),n),c});return"".concat(r.typename,":").concat(JSON.stringify(i))})}function Hf(e){var t=Ff(e);return t.keyArgsFn||(t.keyArgsFn=function(n,r){var o=r.field,i=r.variables,s=r.fieldName,c=Uf(e,function(u){var d=u[0],f=d.charAt(0);if(f==="@"){if(o&&He(o.directives)){var p=d.slice(1),h=o.directives.find(function(S){return S.name.value===p}),g=h&&dn(h,i);return g&&Mo(g,u.slice(1))}return}if(f==="$"){var y=d.slice(1);if(i&&Te.call(i,y)){var b=u.slice(0);return b[0]=y,Mo(i,b)}return}if(n)return Mo(n,u)}),l=JSON.stringify(c);return(n||l!=="{}")&&(s+=":"+l),s})}function Uf(e,t){var n=new Je;return QS(e).reduce(function(r,o){var i,s=t(o);if(s!==void 0){for(var c=o.length-1;c>=0;--c)s=(i={},i[o[c]]=s,i);r=n.merge(r,s)}return r},Object.create(null))}function QS(e){var t=Ff(e);if(!t.paths){var n=t.paths=[],r=[];e.forEach(function(o,i){ie(o)?(QS(o).forEach(function(s){return n.push(r.concat(s))}),r.length=0):(r.push(o),ie(e[i+1])||(n.push(r.slice(0)),r.length=0))})}return t.paths}function KS(e,t){return e[t]}function Mo(e,t,n){return n=n||KS,YS(t.reduce(function r(o,i){return ie(o)?o.map(function(s){return r(s,i)}):o&&n(o,i)},e))}function YS(e){return Z(e)?ie(e)?e.map(YS):Uf(Object.keys(e).sort(),function(t){return Mo(e,t)}):e}function jf(e){return e.args!==void 0?e.args:e.field?dn(e.field,e.variables):null}var NR=function(){},ZS=function(e,t){return t.fieldName},JS=function(e,t,n){var r=n.mergeObjects;return r(e,t)},XS=function(e,t){return t},tb=function(){function e(t){this.config=t,this.typePolicies=Object.create(null),this.toBeAdded=Object.create(null),this.supertypeMap=new Map,this.fuzzySubtypes=new Map,this.rootIdsByTypename=Object.create(null),this.rootTypenamesById=Object.create(null),this.usingPossibleTypes=!1,this.config=v({dataIdFromObject:Nc},t),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),t.possibleTypes&&this.addPossibleTypes(t.possibleTypes),t.typePolicies&&this.addTypePolicies(t.typePolicies)}return e.prototype.identify=function(t,n){var r,o=this,i=n&&(n.typename||((r=n.storeObject)===null||r===void 0?void 0:r.__typename))||t.__typename;if(i===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];var s=n&&n.storeObject||t,c=v(v({},n),{typename:i,storeObject:s,readField:n&&n.readField||function(){var f=Hc(arguments,s);return o.readField(f,{store:o.cache.data,variables:f.variables})}}),l,u=i&&this.getTypePolicy(i),d=u&&u.keyFn||this.config.dataIdFromObject;return Co.withValue(!0,function(){for(;d;){var f=d(v(v({},t),s),c);if(ie(f))d=Lf(f);else{l=f;break}}}),l=l?String(l):void 0,c.keyObject?[l,c.keyObject]:[l]},e.prototype.addTypePolicies=function(t){var n=this;Object.keys(t).forEach(function(r){var o=t[r],i=o.queryType,s=o.mutationType,c=o.subscriptionType,l=Ge(o,["queryType","mutationType","subscriptionType"]);i&&n.setRootTypename("Query",r),s&&n.setRootTypename("Mutation",r),c&&n.setRootTypename("Subscription",r),Te.call(n.toBeAdded,r)?n.toBeAdded[r].push(l):n.toBeAdded[r]=[l]})},e.prototype.updateTypePolicy=function(t,n){var r=this,o=this.getTypePolicy(t),i=n.keyFields,s=n.fields;function c(l,u){l.merge=typeof u=="function"?u:u===!0?JS:u===!1?XS:l.merge}c(o,n.merge),o.keyFn=i===!1?NR:ie(i)?Lf(i):typeof i=="function"?i:o.keyFn,s&&Object.keys(s).forEach(function(l){var u=r.getFieldPolicy(t,l,!0),d=s[l];if(typeof d=="function")u.read=d;else{var f=d.keyArgs,p=d.read,h=d.merge;u.keyFn=f===!1?ZS:ie(f)?Hf(f):typeof f=="function"?f:u.keyFn,typeof p=="function"&&(u.read=p),c(u,h)}u.read&&u.merge&&(u.keyFn=u.keyFn||ZS)})},e.prototype.setRootTypename=function(t,n){n===void 0&&(n=t);var r="ROOT_"+t.toUpperCase(),o=this.rootTypenamesById[r];n!==o&&(E(!o||o===t,6,t),o&&delete this.rootIdsByTypename[o],this.rootIdsByTypename[n]=r,this.rootTypenamesById[r]=n)},e.prototype.addPossibleTypes=function(t){var n=this;this.usingPossibleTypes=!0,Object.keys(t).forEach(function(r){n.getSupertypeSet(r,!0),t[r].forEach(function(o){n.getSupertypeSet(o,!0).add(r);var i=o.match(_f);(!i||i[0]!==o)&&n.fuzzySubtypes.set(o,new RegExp(o))})})},e.prototype.getTypePolicy=function(t){var n=this;if(!Te.call(this.typePolicies,t)){var r=this.typePolicies[t]=Object.create(null);r.fields=Object.create(null);var o=this.supertypeMap.get(t);!o&&this.fuzzySubtypes.size&&(o=this.getSupertypeSet(t,!0),this.fuzzySubtypes.forEach(function(s,c){if(s.test(t)){var l=n.supertypeMap.get(c);l&&l.forEach(function(u){return o.add(u)})}})),o&&o.size&&o.forEach(function(s){var c=n.getTypePolicy(s),l=c.fields,u=Ge(c,["fields"]);Object.assign(r,u),Object.assign(r.fields,l)})}var i=this.toBeAdded[t];return i&&i.length&&i.splice(0).forEach(function(s){n.updateTypePolicy(t,s)}),this.typePolicies[t]},e.prototype.getFieldPolicy=function(t,n,r){if(t){var o=this.getTypePolicy(t).fields;return o[n]||r&&(o[n]=Object.create(null))}},e.prototype.getSupertypeSet=function(t,n){var r=this.supertypeMap.get(t);return!r&&n&&this.supertypeMap.set(t,r=new Set),r},e.prototype.fragmentMatches=function(t,n,r,o){var i=this;if(!t.typeCondition)return!0;if(!n)return!1;var s=t.typeCondition.name.value;if(n===s)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(s))for(var c=this.getSupertypeSet(n,!0),l=[c],u=function(g){var y=i.getSupertypeSet(g,!1);y&&y.size&&l.indexOf(y)<0&&l.push(y)},d=!!(r&&this.fuzzySubtypes.size),f=!1,p=0;p<l.length;++p){var h=l[p];if(h.has(s))return c.has(s)||(f&&globalThis.__DEV__!==!1&&E.warn(7,n,s),c.add(s)),!0;h.forEach(u),d&&p===l.length-1&&kc(t.selectionSet,r,o)&&(d=!1,f=!0,this.fuzzySubtypes.forEach(function(g,y){var b=n.match(g);b&&b[0]===n&&u(y)}))}return!1},e.prototype.hasKeyArgs=function(t,n){var r=this.getFieldPolicy(t,n,!1);return!!(r&&r.keyFn)},e.prototype.getStoreFieldName=function(t){var n=t.typename,r=t.fieldName,o=this.getFieldPolicy(n,r,!1),i,s=o&&o.keyFn;if(s&&n)for(var c={typename:n,fieldName:r,field:t.field||null,variables:t.variables},l=jf(t);s;){var u=s(l,c);if(ie(u))s=Hf(u);else{i=u||r;break}}return i===void 0&&(i=t.field?ef(t.field,t.variables):fc(r,jf(t))),i===!1?r:r===Ft(i)?i:r+":"+i},e.prototype.readField=function(t,n){var r=t.from;if(r){var o=t.field||t.fieldName;if(o){if(t.typename===void 0){var i=n.store.getFieldValue(r,"__typename");i&&(t.typename=i)}var s=this.getStoreFieldName(t),c=Ft(s),l=n.store.getFieldValue(r,s),u=this.getFieldPolicy(t.typename,c,!1),d=u&&u.read;if(d){var f=eb(this,r,t,n,n.store.getStorage(W(r)?r.__ref:r,s));return Po.withValue(this.cache,d,[l,f])}return l}}},e.prototype.getReadFunction=function(t,n){var r=this.getFieldPolicy(t,n,!1);return r&&r.read},e.prototype.getMergeFunction=function(t,n,r){var o=this.getFieldPolicy(t,n,!1),i=o&&o.merge;return!i&&r&&(o=this.getTypePolicy(r),i=o&&o.merge),i},e.prototype.runMergeFunction=function(t,n,r,o,i){var s=r.field,c=r.typename,l=r.merge;return l===JS?nb(o.store)(t,n):l===XS?n:(o.overwrite&&(t=void 0),l(t,n,eb(this,void 0,{typename:c,fieldName:s.name.value,field:s,variables:o.variables},o,i||Object.create(null))))},e}();function eb(e,t,n,r,o){var i=e.getStoreFieldName(n),s=Ft(i),c=n.variables||r.variables,l=r.store,u=l.toReference,d=l.canRead;return{args:jf(n),field:n.field||null,fieldName:s,storeFieldName:i,variables:c,isReference:W,toReference:u,storage:o,cache:e.cache,canRead:d,readField:function(){return e.readField(Hc(arguments,t,c),r)},mergeObjects:nb(r.store)}}function Hc(e,t,n){var r=e[0],o=e[1],i=e.length,s;return typeof r=="string"?s={fieldName:r,from:i>1?o:t}:(s=v({},r),Te.call(s,"from")||(s.from=t)),globalThis.__DEV__!==!1&&s.from===void 0&&globalThis.__DEV__!==!1&&E.warn(8,Xa(Array.from(e))),s.variables===void 0&&(s.variables=n),s}function nb(e){return function(n,r){if(ie(n)||ie(r))throw le(9);if(Z(n)&&Z(r)){var o=e.getFieldValue(n,"__typename"),i=e.getFieldValue(r,"__typename"),s=o&&i&&o!==i;if(s)return r;if(W(n)&&Bn(r))return e.merge(n.__ref,r),n;if(Bn(n)&&W(r))return e.merge(n,r.__ref),r;if(Bn(n)&&Bn(r))return v(v({},n),r)}return r}}function Bf(e,t,n){var r="".concat(t).concat(n),o=e.flavors.get(r);return o||e.flavors.set(r,o=e.clientOnly===t&&e.deferred===n?e:v(v({},e),{clientOnly:t,deferred:n})),o}var sb=function(){function e(t,n,r){this.cache=t,this.reader=n,this.fragments=r}return e.prototype.writeToStore=function(t,n){var r=this,o=n.query,i=n.result,s=n.dataId,c=n.variables,l=n.overwrite,u=ut(o),d=jS();c=v(v({},hr(u)),c);var f=v(v({store:t,written:Object.create(null),merge:function(h,g){return d.merge(h,g)},variables:c,varString:ze(c)},Ac(o,this.fragments)),{overwrite:!!l,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map}),p=this.processSelectionSet({result:i||Object.create(null),dataId:s,selectionSet:u.selectionSet,mergeTree:{map:new Map},context:f});if(!W(p))throw le(12,i);return f.incomingById.forEach(function(h,g){var y=h.storeObject,b=h.mergeTree,S=h.fieldNodeSet,T=bt(g);if(b&&b.map.size){var D=r.applyMerges(b,T,y,f);if(W(D))return;y=D}if(globalThis.__DEV__!==!1&&!f.overwrite){var C=Object.create(null);S.forEach(function(H){H.selectionSet&&(C[H.name.value]=!0)});var M=function(H){return C[Ft(H)]===!0},_=function(H){var G=b&&b.map.get(H);return!!(G&&G.info&&G.info.merge)};Object.keys(y).forEach(function(H){M(H)&&!_(H)&&OR(T,y,H,f.store)})}t.merge(g,y)}),t.retain(p.__ref),p},e.prototype.processSelectionSet=function(t){var n=this,r=t.dataId,o=t.result,i=t.selectionSet,s=t.context,c=t.mergeTree,l=this.cache.policies,u=Object.create(null),d=r&&l.rootTypenamesById[r]||ki(o,i,s.fragmentMap)||r&&s.store.get(r,"__typename");typeof d=="string"&&(u.__typename=d);var f=function(){var D=Hc(arguments,u,s.variables);if(W(D.from)){var C=s.incomingById.get(D.from.__ref);if(C){var M=l.readField(v(v({},D),{from:C.storeObject}),s);if(M!==void 0)return M}}return l.readField(D,s)},p=new Set;this.flattenFields(i,o,s,d).forEach(function(D,C){var M,_=Be(C),H=o[_];if(p.add(C),H!==void 0){var G=l.getStoreFieldName({typename:d,fieldName:C.name.value,field:C,variables:D.variables}),se=rb(c,G),ye=n.processFieldValue(H,C,C.selectionSet?Bf(D,!1,!1):D,se),Lt=void 0;C.selectionSet&&(W(ye)||Bn(ye))&&(Lt=f("__typename",ye));var br=l.getMergeFunction(d,C.name.value,Lt);br?se.info={field:C,typename:d,merge:br}:ob(c,G),u=D.merge(u,(M={},M[G]=ye,M))}else globalThis.__DEV__!==!1&&!D.clientOnly&&!D.deferred&&!mr.added(C)&&!l.getReadFunction(d,C.name.value)&&globalThis.__DEV__!==!1&&E.error(13,Be(C),o)});try{var h=l.identify(o,{typename:d,selectionSet:i,fragmentMap:s.fragmentMap,storeObject:u,readField:f}),g=h[0],y=h[1];r=r||g,y&&(u=s.merge(u,y))}catch(D){if(!r)throw D}if(typeof r=="string"){var b=bt(r),S=s.written[r]||(s.written[r]=[]);if(S.indexOf(i)>=0||(S.push(i),this.reader&&this.reader.isFresh(o,b,i,s)))return b;var T=s.incomingById.get(r);return T?(T.storeObject=s.merge(T.storeObject,u),T.mergeTree=Vf(T.mergeTree,c),p.forEach(function(D){return T.fieldNodeSet.add(D)})):s.incomingById.set(r,{storeObject:u,mergeTree:Uc(c)?void 0:c,fieldNodeSet:p}),b}return u},e.prototype.processFieldValue=function(t,n,r,o){var i=this;return!n.selectionSet||t===null?globalThis.__DEV__!==!1?gc(t):t:ie(t)?t.map(function(s,c){var l=i.processFieldValue(s,n,r,rb(o,c));return ob(o,c),l}):this.processSelectionSet({result:t,selectionSet:n.selectionSet,context:r,mergeTree:o})},e.prototype.flattenFields=function(t,n,r,o){o===void 0&&(o=ki(n,t,r.fragmentMap));var i=new Map,s=this.cache.policies,c=new $e(!1);return function l(u,d){var f=c.lookup(u,d.clientOnly,d.deferred);f.visited||(f.visited=!0,u.selections.forEach(function(p){if(Nt(p,r.variables)){var h=d.clientOnly,g=d.deferred;if(!(h&&g)&&He(p.directives)&&p.directives.forEach(function(S){var T=S.name.value;if(T==="client"&&(h=!0),T==="defer"){var D=dn(S,r.variables);(!D||D.if!==!1)&&(g=!0)}}),qe(p)){var y=i.get(p);y&&(h=h&&y.clientOnly,g=g&&y.deferred),i.set(p,Bf(r,h,g))}else{var b=un(p,r.lookupFragment);if(!b&&p.kind===P.FRAGMENT_SPREAD)throw le(14,p.name.value);b&&s.fragmentMatches(b,o,n,r.variables)&&l(b.selectionSet,Bf(r,h,g))}}}))}(t,r),i},e.prototype.applyMerges=function(t,n,r,o,i){var s,c=this;if(t.map.size&&!W(r)){var l=!ie(r)&&(W(n)||Bn(n))?n:void 0,u=r;l&&!i&&(i=[W(l)?l.__ref:l]);var d,f=function(p,h){return ie(p)?typeof h=="number"?p[h]:void 0:o.store.getFieldValue(p,String(h))};t.map.forEach(function(p,h){var g=f(l,h),y=f(u,h);if(y!==void 0){i&&i.push(h);var b=c.applyMerges(p,g,y,o,i);b!==y&&(d=d||new Map,d.set(h,b)),i&&E(i.pop()===h)}}),d&&(r=ie(u)?u.slice(0):v({},u),d.forEach(function(p,h){r[h]=p}))}return t.info?this.cache.policies.runMergeFunction(n,r,t.info,o,i&&(s=o.store).getStorage.apply(s,i)):r},e}();var ab=[];function rb(e,t){var n=e.map;return n.has(t)||n.set(t,ab.pop()||{map:new Map}),n.get(t)}function Vf(e,t){if(e===t||!t||Uc(t))return e;if(!e||Uc(e))return t;var n=e.info&&t.info?v(v({},e.info),t.info):e.info||t.info,r=e.map.size&&t.map.size,o=r?new Map:e.map.size?e.map:t.map,i={info:n,map:o};if(r){var s=new Set(t.map.keys());e.map.forEach(function(c,l){i.map.set(l,Vf(c,t.map.get(l))),s.delete(l)}),s.forEach(function(c){i.map.set(c,Vf(t.map.get(c),e.map.get(c)))})}return i}function Uc(e){return!e||!(e.info||e.map.size)}function ob(e,t){var n=e.map,r=n.get(t);r&&Uc(r)&&(ab.push(r),n.delete(t))}var ib=new Set;function OR(e,t,n,r){var o=function(f){var p=r.getFieldValue(f,n);return typeof p=="object"&&p},i=o(e);if(i){var s=o(t);if(s&&!W(i)&&!ne(i,s)&&!Object.keys(i).every(function(f){return r.getFieldValue(s,f)!==void 0})){var c=r.getFieldValue(e,"__typename")||r.getFieldValue(t,"__typename"),l=Ft(n),u="".concat(c,".").concat(l);if(!ib.has(u)){ib.add(u);var d=[];!ie(i)&&!ie(s)&&[i,s].forEach(function(f){var p=r.getFieldValue(f,"__typename");typeof p=="string"&&!d.includes(p)&&d.push(p)}),globalThis.__DEV__!==!1&&E.warn(15,l,c,d.length?"either ensure all objects of type "+d.join(" and ")+" have an ID or a custom merge function, or ":"",u,v({},i),v({},s))}}}}var Ji=function(e){ke(t,e);function t(n){n===void 0&&(n={});var r=e.call(this)||this;return r.watches=new Set,r.addTypenameTransform=new bo(mr),r.assumeImmutableResults=!0,r.makeVar=Lc,r.txCount=0,r.config=HS(n),r.addTypename=!!r.config.addTypename,r.policies=new tb({cache:r,dataIdFromObject:r.config.dataIdFromObject,possibleTypes:r.config.possibleTypes,typePolicies:r.config.typePolicies}),r.init(),r}return t.prototype.init=function(){var n=this.data=new Io.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=n.stump,this.resetResultCache()},t.prototype.resetResultCache=function(n){var r=this,o=this.storeReader,i=this.config.fragments;this.storeWriter=new sb(this,this.storeReader=new zS({cache:this,addTypename:this.addTypename,resultCacheMaxSize:this.config.resultCacheMaxSize,canonizeResults:Oc(this.config),canon:n?void 0:o&&o.canon,fragments:i}),i),this.maybeBroadcastWatch=pn(function(s,c){return r.broadcastWatch(s,c)},{max:this.config.resultCacheMaxSize||_e["inMemoryCache.maybeBroadcastWatch"]||5e3,makeCacheKey:function(s){var c=s.optimistic?r.optimisticData:r.data;if(Sr(c)){var l=s.optimistic,u=s.id,d=s.variables;return c.makeCacheKey(s.query,s.callback,ze({optimistic:l,id:u,variables:d}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach(function(s){return s.resetCaching()})},t.prototype.restore=function(n){return this.init(),n&&this.data.replace(n),this},t.prototype.extract=function(n){return n===void 0&&(n=!1),(n?this.optimisticData:this.data).extract()},t.prototype.read=function(n){var r=n.returnPartialData,o=r===void 0?!1:r;try{return this.storeReader.diffQueryAgainstStore(v(v({},n),{store:n.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:o})).result||null}catch(i){if(i instanceof Ki)return null;throw i}},t.prototype.write=function(n){try{return++this.txCount,this.storeWriter.writeToStore(this.data,n)}finally{!--this.txCount&&n.broadcast!==!1&&this.broadcastWatches()}},t.prototype.modify=function(n){if(Te.call(n,"id")&&!n.id)return!1;var r=n.optimistic?this.optimisticData:this.data;try{return++this.txCount,r.modify(n.id||"ROOT_QUERY",n.fields)}finally{!--this.txCount&&n.broadcast!==!1&&this.broadcastWatches()}},t.prototype.diff=function(n){return this.storeReader.diffQueryAgainstStore(v(v({},n),{store:n.optimistic?this.optimisticData:this.data,rootId:n.id||"ROOT_QUERY",config:this.config}))},t.prototype.watch=function(n){var r=this;return this.watches.size||WS(this),this.watches.add(n),n.immediate&&this.maybeBroadcastWatch(n),function(){r.watches.delete(n)&&!r.watches.size&&Af(r),r.maybeBroadcastWatch.forget(n)}},t.prototype.gc=function(n){var r;ze.reset(),At.reset(),this.addTypenameTransform.resetCache(),(r=this.config.fragments)===null||r===void 0||r.resetCaches();var o=this.optimisticData.gc();return n&&!this.txCount&&(n.resetResultCache?this.resetResultCache(n.resetResultIdentities):n.resetResultIdentities&&this.storeReader.resetCanon()),o},t.prototype.retain=function(n,r){return(r?this.optimisticData:this.data).retain(n)},t.prototype.release=function(n,r){return(r?this.optimisticData:this.data).release(n)},t.prototype.identify=function(n){if(W(n))return n.__ref;try{return this.policies.identify(n)[0]}catch(r){globalThis.__DEV__!==!1&&E.warn(r)}},t.prototype.evict=function(n){if(!n.id){if(Te.call(n,"id"))return!1;n=v(v({},n),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(n,this.data)}finally{!--this.txCount&&n.broadcast!==!1&&this.broadcastWatches()}},t.prototype.reset=function(n){var r=this;return this.init(),ze.reset(),n&&n.discardWatches?(this.watches.forEach(function(o){return r.maybeBroadcastWatch.forget(o)}),this.watches.clear(),Af(this)):this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(n){var r=this.optimisticData.removeLayer(n);r!==this.optimisticData&&(this.optimisticData=r,this.broadcastWatches())},t.prototype.batch=function(n){var r=this,o=n.update,i=n.optimistic,s=i===void 0?!0:i,c=n.removeOptimistic,l=n.onWatchUpdated,u,d=function(p){var h=r,g=h.data,y=h.optimisticData;++r.txCount,p&&(r.data=r.optimisticData=p);try{return u=o(r)}finally{--r.txCount,r.data=g,r.optimisticData=y}},f=new Set;return l&&!this.txCount&&this.broadcastWatches(v(v({},n),{onWatchUpdated:function(p){return f.add(p),!1}})),typeof s=="string"?this.optimisticData=this.optimisticData.addLayer(s,d):s===!1?d(this.data):d(),typeof c=="string"&&(this.optimisticData=this.optimisticData.removeLayer(c)),l&&f.size?(this.broadcastWatches(v(v({},n),{onWatchUpdated:function(p,h){var g=l.call(this,p,h);return g!==!1&&f.delete(p),g}})),f.size&&f.forEach(function(p){return r.maybeBroadcastWatch.dirty(p)})):this.broadcastWatches(n),u},t.prototype.performTransaction=function(n,r){return this.batch({update:n,optimistic:r||r!==null})},t.prototype.transformDocument=function(n){return this.addTypenameToDocument(this.addFragmentsToDocument(n))},t.prototype.fragmentMatches=function(n,r){return this.policies.fragmentMatches(n,r)},t.prototype.lookupFragment=function(n){var r;return((r=this.config.fragments)===null||r===void 0?void 0:r.lookup(n))||null},t.prototype.broadcastWatches=function(n){var r=this;this.txCount||this.watches.forEach(function(o){return r.maybeBroadcastWatch(o,n)})},t.prototype.addFragmentsToDocument=function(n){var r=this.config.fragments;return r?r.transform(n):n},t.prototype.addTypenameToDocument=function(n){return this.addTypename?this.addTypenameTransform.transformDocument(n):n},t.prototype.broadcastWatch=function(n,r){var o=n.lastDiff,i=this.diff(n);r&&(n.optimistic&&typeof r.optimistic=="string"&&(i.fromOptimisticTransaction=!0),r.onWatchUpdated&&r.onWatchUpdated.call(this,n,i,o)===!1)||(!o||!ne(o.result,i.result))&&n.callback(n.lastDiff=i,o)},t}(xc);globalThis.__DEV__!==!1&&(Ji.prototype.getMemoryInternals=kv);var J=function(e){return e[e.loading=1]="loading",e[e.setVariables=2]="setVariables",e[e.fetchMore=3]="fetchMore",e[e.refetch=4]="refetch",e[e.poll=6]="poll",e[e.ready=7]="ready",e[e.error=8]="error",e}(J||{});function gn(e){return e?e<7:!1}var cb=Object.assign,AR=Object.hasOwnProperty,jc=function(e){ke(t,e);function t(n){var r=n.queryManager,o=n.queryInfo,i=n.options,s=e.call(this,function(b){try{var S=b._subscription._observer;S&&!S.error&&(S.error=FR)}catch{}var T=!s.observers.size;s.observers.add(b);var D=s.last;return D&&D.error?b.error&&b.error(D.error):D&&D.result&&b.next&&b.next(s.maskResult(D.result)),T&&s.reobserve().catch(function(){}),function(){s.observers.delete(b)&&!s.observers.size&&s.tearDownQuery()}})||this;s.observers=new Set,s.subscriptions=new Set,s.queryInfo=o,s.queryManager=r,s.waitForOwnResult=$f(i.fetchPolicy),s.isTornDown=!1,s.subscribeToMore=s.subscribeToMore.bind(s),s.maskResult=s.maskResult.bind(s);var c=r.defaultOptions.watchQuery,l=c===void 0?{}:c,u=l.fetchPolicy,d=u===void 0?"cache-first":u,f=i.fetchPolicy,p=f===void 0?d:f,h=i.initialFetchPolicy,g=h===void 0?p==="standby"?d:p:h;s.options=v(v({},i),{initialFetchPolicy:g,fetchPolicy:p}),s.queryId=o.queryId||r.generateQueryId();var y=ut(s.query);return s.queryName=y&&y.name&&y.name.value,s}return Object.defineProperty(t.prototype,"query",{get:function(){return this.lastQuery||this.options.query},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"variables",{get:function(){return this.options.variables},enumerable:!1,configurable:!0}),t.prototype.result=function(){var n=this;return new Promise(function(r,o){var i={next:function(c){r(c),n.observers.delete(i),n.observers.size||n.queryManager.removeQuery(n.queryId),setTimeout(function(){s.unsubscribe()},0)},error:o},s=n.subscribe(i)})},t.prototype.resetDiff=function(){this.queryInfo.resetDiff()},t.prototype.getCurrentFullResult=function(n){n===void 0&&(n=!0);var r=this.getLastResult(!0),o=this.queryInfo.networkStatus||r&&r.networkStatus||J.ready,i=v(v({},r),{loading:gn(o),networkStatus:o}),s=this.options.fetchPolicy,c=s===void 0?"cache-first":s;if(!($f(c)||this.queryManager.getDocumentInfo(this.query).hasForcedResolvers))if(this.waitForOwnResult)this.queryInfo.updateWatch();else{var l=this.queryInfo.getDiff();(l.complete||this.options.returnPartialData)&&(i.data=l.result),ne(i.data,{})&&(i.data=void 0),l.complete?(delete i.partial,l.complete&&i.networkStatus===J.loading&&(c==="cache-first"||c==="cache-only")&&(i.networkStatus=J.ready,i.loading=!1)):i.partial=!0,globalThis.__DEV__!==!1&&!l.complete&&!this.options.partialRefetch&&!i.loading&&!i.data&&!i.error&&qf(l.missing)}return n&&this.updateLastResult(i),i},t.prototype.getCurrentResult=function(n){return n===void 0&&(n=!0),this.maskResult(this.getCurrentFullResult(n))},t.prototype.isDifferentFromLastResult=function(n,r){if(!this.last)return!0;var o=this.queryManager.getDocumentInfo(this.query),i=this.queryManager.dataMasking,s=i?o.nonReactiveQuery:this.query,c=i||o.hasNonreactiveDirective?!Ic(s,this.last.result,n,this.variables):!ne(this.last.result,n);return c||r&&!ne(this.last.variables,r)},t.prototype.getLast=function(n,r){var o=this.last;if(o&&o[n]&&(!r||ne(o.variables,this.variables)))return o[n]},t.prototype.getLastResult=function(n){return this.getLast("result",n)},t.prototype.getLastError=function(n){return this.getLast("error",n)},t.prototype.resetLastResults=function(){delete this.last,this.isTornDown=!1},t.prototype.resetQueryStoreErrors=function(){this.queryManager.resetErrors(this.queryId)},t.prototype.refetch=function(n){var r,o={pollInterval:0},i=this.options.fetchPolicy;if(i==="cache-and-network"?o.fetchPolicy=i:i==="no-cache"?o.fetchPolicy="no-cache":o.fetchPolicy="network-only",globalThis.__DEV__!==!1&&n&&AR.call(n,"variables")){var s=Ni(this.query),c=s.variableDefinitions;(!c||!c.some(function(l){return l.variable.name.value==="variables"}))&&globalThis.__DEV__!==!1&&E.warn(21,n,((r=s.name)===null||r===void 0?void 0:r.value)||s)}return n&&!ne(this.options.variables,n)&&(o.variables=this.options.variables=v(v({},this.options.variables),n)),this.queryInfo.resetLastWrite(),this.reobserve(o,J.refetch)},t.prototype.fetchMore=function(n){var r=this,o=v(v({},n.query?n:v(v(v(v({},this.options),{query:this.options.query}),n),{variables:v(v({},this.options.variables),n.variables)})),{fetchPolicy:"no-cache"});o.query=this.transformDocument(o.query);var i=this.queryManager.generateQueryId();this.lastQuery=n.query?this.transformDocument(this.options.query):o.query;var s=this.queryInfo,c=s.networkStatus;s.networkStatus=J.fetchMore,o.notifyOnNetworkStatusChange&&this.observe();var l=new Set,u=n?.updateQuery,d=this.options.fetchPolicy!=="no-cache";return d||E(u,22),this.queryManager.fetchQuery(i,o,J.fetchMore).then(function(f){if(r.queryManager.removeQuery(i),s.networkStatus===J.fetchMore&&(s.networkStatus=c),d)r.queryManager.cache.batch({update:function(g){var y=n.updateQuery;y?g.updateQuery({query:r.query,variables:r.variables,returnPartialData:!0,optimistic:!1},function(b){return y(b,{fetchMoreResult:f.data,variables:o.variables})}):g.writeQuery({query:o.query,variables:o.variables,data:f.data})},onWatchUpdated:function(g){l.add(g.query)}});else{var p=r.getLast("result"),h=u(p.data,{fetchMoreResult:f.data,variables:o.variables});r.reportResult(v(v({},p),{networkStatus:c,loading:gn(c),data:h}),r.variables)}return r.maskResult(f)}).finally(function(){d&&!l.has(r.query)&&zf(r)})},t.prototype.subscribeToMore=function(n){var r=this,o=this.queryManager.startGraphQLSubscription({query:n.document,variables:n.variables,context:n.context}).subscribe({next:function(i){var s=n.updateQuery;s&&r.updateQuery(function(c,l){var u=l.variables;return s(c,{subscriptionData:i,variables:u})})},error:function(i){if(n.onError){n.onError(i);return}globalThis.__DEV__!==!1&&E.error(23,i)}});return this.subscriptions.add(o),function(){r.subscriptions.delete(o)&&o.unsubscribe()}},t.prototype.setOptions=function(n){return this.reobserve(n)},t.prototype.silentSetOptions=function(n){var r=Qt(this.options,n||{});cb(this.options,r)},t.prototype.setVariables=function(n){return ne(this.variables,n)?this.observers.size?this.result():Promise.resolve():(this.options.variables=n,this.observers.size?this.reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:n},J.setVariables):Promise.resolve())},t.prototype.updateQuery=function(n){var r=this.queryManager,o=r.cache.diff({query:this.options.query,variables:this.variables,returnPartialData:!0,optimistic:!1}).result,i=n(o,{variables:this.variables});i&&(r.cache.writeQuery({query:this.options.query,data:i,variables:this.variables}),r.broadcastQueries())},t.prototype.startPolling=function(n){this.options.pollInterval=n,this.updatePolling()},t.prototype.stopPolling=function(){this.options.pollInterval=0,this.updatePolling()},t.prototype.applyNextFetchPolicy=function(n,r){if(r.nextFetchPolicy){var o=r.fetchPolicy,i=o===void 0?"cache-first":o,s=r.initialFetchPolicy,c=s===void 0?i:s;i==="standby"||(typeof r.nextFetchPolicy=="function"?r.fetchPolicy=r.nextFetchPolicy(i,{reason:n,options:r,observable:this,initialFetchPolicy:c}):n==="variables-changed"?r.fetchPolicy=c:r.fetchPolicy=r.nextFetchPolicy)}return r.fetchPolicy},t.prototype.fetch=function(n,r,o){return this.queryManager.setObservableQuery(this),this.queryManager.fetchConcastWithInfo(this.queryId,n,r,o)},t.prototype.updatePolling=function(){var n=this;if(!this.queryManager.ssrMode){var r=this,o=r.pollingInfo,i=r.options.pollInterval;if(!i||!this.hasObservers()){o&&(clearTimeout(o.timeout),delete this.pollingInfo);return}if(!(o&&o.interval===i)){E(i,24);var s=o||(this.pollingInfo={});s.interval=i;var c=function(){var u,d;n.pollingInfo&&(!gn(n.queryInfo.networkStatus)&&!(!((d=(u=n.options).skipPollAttempt)===null||d===void 0)&&d.call(u))?n.reobserve({fetchPolicy:n.options.initialFetchPolicy==="no-cache"?"no-cache":"network-only"},J.poll).then(l,l):l())},l=function(){var u=n.pollingInfo;u&&(clearTimeout(u.timeout),u.timeout=setTimeout(c,u.interval))};l()}}},t.prototype.updateLastResult=function(n,r){r===void 0&&(r=this.variables);var o=this.getLastError();return o&&this.last&&!ne(r,this.last.variables)&&(o=void 0),this.last=v({result:this.queryManager.assumeImmutableResults?n:gc(n),variables:r},o?{error:o}:null)},t.prototype.reobserveAsConcast=function(n,r){var o=this;this.isTornDown=!1;var i=r===J.refetch||r===J.fetchMore||r===J.poll,s=this.options.variables,c=this.options.fetchPolicy,l=Qt(this.options,n||{}),u=i?l:cb(this.options,l),d=this.transformDocument(u.query);this.lastQuery=d,i||(this.updatePolling(),n&&n.variables&&!ne(n.variables,s)&&u.fetchPolicy!=="standby"&&(u.fetchPolicy===c||typeof u.nextFetchPolicy=="function")&&(this.applyNextFetchPolicy("variables-changed",u),r===void 0&&(r=J.setVariables))),this.waitForOwnResult&&(this.waitForOwnResult=$f(u.fetchPolicy));var f=function(){o.concast===g&&(o.waitForOwnResult=!1)},p=u.variables&&v({},u.variables),h=this.fetch(u,r,d),g=h.concast,y=h.fromLink,b={next:function(S){ne(o.variables,p)&&(f(),o.reportResult(S,p))},error:function(S){ne(o.variables,p)&&(Ec(S)||(S=new mn({networkError:S})),f(),o.reportError(S,p))}};return!i&&(y||!this.concast)&&(this.concast&&this.observer&&this.concast.removeObserver(this.observer),this.concast=g,this.observer=b),g.addObserver(b),g},t.prototype.reobserve=function(n,r){return yf(this.reobserveAsConcast(n,r).promise.then(this.maskResult))},t.prototype.resubscribeAfterError=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=this.last;this.resetLastResults();var i=this.subscribe.apply(this,n);return this.last=o,i},t.prototype.observe=function(){this.reportResult(this.getCurrentFullResult(!1),this.variables)},t.prototype.reportResult=function(n,r){var o=this.getLastError(),i=this.isDifferentFromLastResult(n,r);(o||!n.partial||this.options.returnPartialData)&&this.updateLastResult(n,r),(o||i)&&yr(this.observers,"next",this.maskResult(n))},t.prototype.reportError=function(n,r){var o=v(v({},this.getLastResult()),{error:n,errors:n.graphQLErrors,networkStatus:J.error,loading:!1});this.updateLastResult(o,r),yr(this.observers,"error",this.last.error=n)},t.prototype.hasObservers=function(){return this.observers.size>0},t.prototype.tearDownQuery=function(){this.isTornDown||(this.concast&&this.observer&&(this.concast.removeObserver(this.observer),delete this.concast,delete this.observer),this.stopPolling(),this.subscriptions.forEach(function(n){return n.unsubscribe()}),this.subscriptions.clear(),this.queryManager.stopQuery(this.queryId),this.observers.clear(),this.isTornDown=!0)},t.prototype.transformDocument=function(n){return this.queryManager.transform(n)},t.prototype.maskResult=function(n){return n&&"data"in n?v(v({},n),{data:this.queryManager.maskOperation({document:this.query,data:n.data,fetchPolicy:this.options.fetchPolicy,id:this.queryId})}):n},t}(B);vc(jc);function zf(e){var t=e.options,n=t.fetchPolicy,r=t.nextFetchPolicy;return n==="cache-and-network"||n==="network-only"?e.reobserve({fetchPolicy:"cache-first",nextFetchPolicy:function(o,i){return this.nextFetchPolicy=r,typeof this.nextFetchPolicy=="function"?this.nextFetchPolicy(o,i):n}}):e.reobserve()}function FR(e){globalThis.__DEV__!==!1&&E.error(25,e.message,e.stack)}function qf(e){globalThis.__DEV__!==!1&&e&&globalThis.__DEV__!==!1&&E.debug(26,e)}function $f(e){return e==="network-only"||e==="no-cache"||e==="standby"}var Ro=new(ct?WeakMap:Map);function Wf(e,t){var n=e[t];typeof n=="function"&&(e[t]=function(){return Ro.set(e,(Ro.get(e)+1)%1e15),n.apply(this,arguments)})}function lb(e){e.notifyTimeout&&(clearTimeout(e.notifyTimeout),e.notifyTimeout=void 0)}var Bc=function(){function e(t,n){n===void 0&&(n=t.generateQueryId()),this.queryId=n,this.listeners=new Set,this.document=null,this.lastRequestId=1,this.stopped=!1,this.dirty=!1,this.observableQuery=null;var r=this.cache=t.cache;Ro.has(r)||(Ro.set(r,0),Wf(r,"evict"),Wf(r,"modify"),Wf(r,"reset"))}return e.prototype.init=function(t){var n=t.networkStatus||J.loading;return this.variables&&this.networkStatus!==J.loading&&!ne(this.variables,t.variables)&&(n=J.setVariables),ne(t.variables,this.variables)||(this.lastDiff=void 0),Object.assign(this,{document:t.document,variables:t.variables,networkError:null,graphQLErrors:this.graphQLErrors||[],networkStatus:n}),t.observableQuery&&this.setObservableQuery(t.observableQuery),t.lastRequestId&&(this.lastRequestId=t.lastRequestId),this},e.prototype.reset=function(){lb(this),this.dirty=!1},e.prototype.resetDiff=function(){this.lastDiff=void 0},e.prototype.getDiff=function(){var t=this.getDiffOptions();if(this.lastDiff&&ne(t,this.lastDiff.options))return this.lastDiff.diff;this.updateWatch(this.variables);var n=this.observableQuery;if(n&&n.options.fetchPolicy==="no-cache")return{complete:!1};var r=this.cache.diff(t);return this.updateLastDiff(r,t),r},e.prototype.updateLastDiff=function(t,n){this.lastDiff=t?{diff:t,options:n||this.getDiffOptions()}:void 0},e.prototype.getDiffOptions=function(t){var n;return t===void 0&&(t=this.variables),{query:this.document,variables:t,returnPartialData:!0,optimistic:!0,canonizeResults:(n=this.observableQuery)===null||n===void 0?void 0:n.options.canonizeResults}},e.prototype.setDiff=function(t){var n=this,r,o=this.lastDiff&&this.lastDiff.diff;t&&!t.complete&&(!((r=this.observableQuery)===null||r===void 0)&&r.getLastError())||(this.updateLastDiff(t),!this.dirty&&!ne(o&&o.result,t&&t.result)&&(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout(function(){return n.notify()},0))))},e.prototype.setObservableQuery=function(t){var n=this;t!==this.observableQuery&&(this.oqListener&&this.listeners.delete(this.oqListener),this.observableQuery=t,t?(t.queryInfo=this,this.listeners.add(this.oqListener=function(){var r=n.getDiff();r.fromOptimisticTransaction?t.observe():zf(t)})):delete this.oqListener)},e.prototype.notify=function(){var t=this;lb(this),this.shouldNotify()&&this.listeners.forEach(function(n){return n(t)}),this.dirty=!1},e.prototype.shouldNotify=function(){if(!this.dirty||!this.listeners.size)return!1;if(gn(this.networkStatus)&&this.observableQuery){var t=this.observableQuery.options.fetchPolicy;if(t!=="cache-only"&&t!=="cache-and-network")return!1}return!0},e.prototype.stop=function(){if(!this.stopped){this.stopped=!0,this.reset(),this.cancel(),this.cancel=e.prototype.cancel;var t=this.observableQuery;t&&t.stopPolling()}},e.prototype.cancel=function(){},e.prototype.updateWatch=function(t){var n=this;t===void 0&&(t=this.variables);var r=this.observableQuery;if(!(r&&r.options.fetchPolicy==="no-cache")){var o=v(v({},this.getDiffOptions(t)),{watcher:this,callback:function(i){return n.setDiff(i)}});(!this.lastWatch||!ne(o,this.lastWatch))&&(this.cancel(),this.cancel=this.cache.watch(this.lastWatch=o))}},e.prototype.resetLastWrite=function(){this.lastWrite=void 0},e.prototype.shouldWrite=function(t,n){var r=this.lastWrite;return!(r&&r.dmCount===Ro.get(this.cache)&&ne(n,r.variables)&&ne(t.data,r.result.data))},e.prototype.markResult=function(t,n,r,o){var i=this,s=new Je,c=He(t.errors)?t.errors.slice(0):[];if(this.reset(),"incremental"in t&&He(t.incremental)){var l=Sc(this.getDiff().result,t);t.data=l}else if("hasNext"in t&&t.hasNext){var u=this.getDiff();t.data=s.merge(u.result,t.data)}this.graphQLErrors=c,r.fetchPolicy==="no-cache"?this.updateLastDiff({result:t.data,complete:!0},this.getDiffOptions(r.variables)):o!==0&&(Vc(t,r.errorPolicy)?this.cache.performTransaction(function(d){if(i.shouldWrite(t,r.variables))d.writeQuery({query:n,data:t.data,variables:r.variables,overwrite:o===1}),i.lastWrite={result:t,variables:r.variables,dmCount:Ro.get(i.cache)};else if(i.lastDiff&&i.lastDiff.diff.complete){t.data=i.lastDiff.diff.result;return}var f=i.getDiffOptions(r.variables),p=d.diff(f);!i.stopped&&ne(i.variables,r.variables)&&i.updateWatch(r.variables),i.updateLastDiff(p,f),p.complete&&(t.data=p.result)}):this.lastWrite=void 0)},e.prototype.markReady=function(){return this.networkError=null,this.networkStatus=J.ready},e.prototype.markError=function(t){return this.networkStatus=J.error,this.lastWrite=void 0,this.reset(),t.graphQLErrors&&(this.graphQLErrors=t.graphQLErrors),t.networkError&&(this.networkError=t.networkError),t},e}();function Vc(e,t){t===void 0&&(t="none");var n=t==="ignore"||t==="all",r=!To(e);return!r&&n&&e.data&&(r=!0),r}var LR=Object.prototype.hasOwnProperty,ub=Object.create(null),db=function(){function e(t){var n=this;this.clientAwareness={},this.queries=new Map,this.fetchCancelFns=new Map,this.transformCache=new go(_e["queryManager.getDocumentInfo"]||2e3),this.queryIdCounter=1,this.requestIdCounter=1,this.mutationIdCounter=1,this.inFlightLinkObservables=new $e(!1),this.noCacheWarningsByQueryId=new Set;var r=new bo(function(i){return n.cache.transformDocument(i)},{cache:!1});this.cache=t.cache,this.link=t.link,this.defaultOptions=t.defaultOptions,this.queryDeduplication=t.queryDeduplication,this.clientAwareness=t.clientAwareness,this.localState=t.localState,this.ssrMode=t.ssrMode,this.assumeImmutableResults=t.assumeImmutableResults,this.dataMasking=t.dataMasking;var o=t.documentTransform;this.documentTransform=o?r.concat(o).concat(r):r,this.defaultContext=t.defaultContext||Object.create(null),(this.onBroadcast=t.onBroadcast)&&(this.mutationStore=Object.create(null))}return e.prototype.stop=function(){var t=this;this.queries.forEach(function(n,r){t.stopQueryNoBroadcast(r)}),this.cancelPendingFetches(le(27))},e.prototype.cancelPendingFetches=function(t){this.fetchCancelFns.forEach(function(n){return n(t)}),this.fetchCancelFns.clear()},e.prototype.mutate=function(t){return et(this,arguments,void 0,function(n){var r,o,i,s,c,l,u,d=n.mutation,f=n.variables,p=n.optimisticResponse,h=n.updateQueries,g=n.refetchQueries,y=g===void 0?[]:g,b=n.awaitRefetchQueries,S=b===void 0?!1:b,T=n.update,D=n.onQueryUpdated,C=n.fetchPolicy,M=C===void 0?((l=this.defaultOptions.mutate)===null||l===void 0?void 0:l.fetchPolicy)||"network-only":C,_=n.errorPolicy,H=_===void 0?((u=this.defaultOptions.mutate)===null||u===void 0?void 0:u.errorPolicy)||"none":_,G=n.keepRootFields,se=n.context;return Et(this,function(ye){switch(ye.label){case 0:return E(d,28),E(M==="network-only"||M==="no-cache",29),r=this.generateMutationId(),d=this.cache.transformForLink(this.transform(d)),o=this.getDocumentInfo(d).hasClientExports,f=this.getVariables(d,f),o?[4,this.localState.addExportedVariables(d,f,se)]:[3,2];case 1:f=ye.sent(),ye.label=2;case 2:return i=this.mutationStore&&(this.mutationStore[r]={mutation:d,variables:f,loading:!0,error:null}),s=p&&this.markMutationOptimistic(p,{mutationId:r,document:d,variables:f,fetchPolicy:M,errorPolicy:H,context:se,updateQueries:h,update:T,keepRootFields:G}),this.broadcastQueries(),c=this,[2,new Promise(function(Lt,br){return yc(c.getObservableFromLink(d,v(v({},se),{optimisticResponse:s?p:void 0}),f,{},!1),function(Ae){if(To(Ae)&&H==="none")throw new mn({graphQLErrors:bc(Ae)});i&&(i.loading=!1,i.error=null);var yn=v({},Ae);return typeof y=="function"&&(y=y(yn)),H==="ignore"&&To(yn)&&delete yn.errors,c.markMutationResult({mutationId:r,result:yn,document:d,variables:f,fetchPolicy:M,errorPolicy:H,context:se,update:T,updateQueries:h,awaitRefetchQueries:S,refetchQueries:y,removeOptimistic:s?r:void 0,onQueryUpdated:D,keepRootFields:G})}).subscribe({next:function(Ae){c.broadcastQueries(),(!("hasNext"in Ae)||Ae.hasNext===!1)&&Lt(v(v({},Ae),{data:c.maskOperation({document:d,data:Ae.data,fetchPolicy:M,id:r})}))},error:function(Ae){i&&(i.loading=!1,i.error=Ae),s&&c.cache.removeOptimistic(r),c.broadcastQueries(),br(Ae instanceof mn?Ae:new mn({networkError:Ae}))}})})]}})})},e.prototype.markMutationResult=function(t,n){var r=this;n===void 0&&(n=this.cache);var o=t.result,i=[],s=t.fetchPolicy==="no-cache";if(!s&&Vc(o,t.errorPolicy)){if(jn(o)||i.push({result:o.data,dataId:"ROOT_MUTATION",query:t.document,variables:t.variables}),jn(o)&&He(o.incremental)){var c=n.diff({id:"ROOT_MUTATION",query:this.getDocumentInfo(t.document).asQuery,variables:t.variables,optimistic:!1,returnPartialData:!0}),l=void 0;c.result&&(l=Sc(c.result,o)),typeof l<"u"&&(o.data=l,i.push({result:l,dataId:"ROOT_MUTATION",query:t.document,variables:t.variables}))}var u=t.updateQueries;u&&this.queries.forEach(function(f,p){var h=f.observableQuery,g=h&&h.queryName;if(!(!g||!LR.call(u,g))){var y=u[g],b=r.queries.get(p),S=b.document,T=b.variables,D=n.diff({query:S,variables:T,returnPartialData:!0,optimistic:!1}),C=D.result,M=D.complete;if(M&&C){var _=y(C,{mutationResult:o,queryName:S&&Ln(S)||void 0,queryVariables:T});_&&i.push({result:_,dataId:"ROOT_QUERY",query:S,variables:T})}}})}if(i.length>0||(t.refetchQueries||"").length>0||t.update||t.onQueryUpdated||t.removeOptimistic){var d=[];if(this.refetchQueries({updateCache:function(f){s||i.forEach(function(y){return f.write(y)});var p=t.update,h=!hS(o)||jn(o)&&!o.hasNext;if(p){if(!s){var g=f.diff({id:"ROOT_MUTATION",query:r.getDocumentInfo(t.document).asQuery,variables:t.variables,optimistic:!1,returnPartialData:!0});g.complete&&(o=v(v({},o),{data:g.result}),"incremental"in o&&delete o.incremental,"hasNext"in o&&delete o.hasNext)}h&&p(f,o,{context:t.context,variables:t.variables})}!s&&!t.keepRootFields&&h&&f.modify({id:"ROOT_MUTATION",fields:function(y,b){var S=b.fieldName,T=b.DELETE;return S==="__typename"?y:T}})},include:t.refetchQueries,optimistic:!1,removeOptimistic:t.removeOptimistic,onQueryUpdated:t.onQueryUpdated||null}).forEach(function(f){return d.push(f)}),t.awaitRefetchQueries||t.onQueryUpdated)return Promise.all(d).then(function(){return o})}return Promise.resolve(o)},e.prototype.markMutationOptimistic=function(t,n){var r=this,o=typeof t=="function"?t(n.variables,{IGNORE:ub}):t;return o===ub?!1:(this.cache.recordOptimisticTransaction(function(i){try{r.markMutationResult(v(v({},n),{result:{data:o}}),i)}catch(s){globalThis.__DEV__!==!1&&E.error(s)}},n.mutationId),!0)},e.prototype.fetchQuery=function(t,n,r){return this.fetchConcastWithInfo(t,n,r).concast.promise},e.prototype.getQueryStore=function(){var t=Object.create(null);return this.queries.forEach(function(n,r){t[r]={variables:n.variables,networkStatus:n.networkStatus,networkError:n.networkError,graphQLErrors:n.graphQLErrors}}),t},e.prototype.resetErrors=function(t){var n=this.queries.get(t);n&&(n.networkError=void 0,n.graphQLErrors=[])},e.prototype.transform=function(t){return this.documentTransform.transformDocument(t)},e.prototype.getDocumentInfo=function(t){var n=this.transformCache;if(!n.has(t)){var r={hasClientExports:zd(t),hasForcedResolvers:this.localState.shouldForceResolvers(t),hasNonreactiveDirective:ln(["nonreactive"],t),nonReactiveQuery:af(t),clientQuery:this.localState.clientQuery(t),serverQuery:hc([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"},{name:"unmask"}],t),defaultVars:hr(ut(t)),asQuery:v(v({},t),{definitions:t.definitions.map(function(o){return o.kind==="OperationDefinition"&&o.operation!=="query"?v(v({},o),{operation:"query"}):o})})};n.set(t,r)}return n.get(t)},e.prototype.getVariables=function(t,n){return v(v({},this.getDocumentInfo(t).defaultVars),n)},e.prototype.watchQuery=function(t){var n=this.transform(t.query);t=v(v({},t),{variables:this.getVariables(n,t.variables)}),typeof t.notifyOnNetworkStatusChange>"u"&&(t.notifyOnNetworkStatusChange=!1);var r=new Bc(this),o=new jc({queryManager:this,queryInfo:r,options:t});return o.lastQuery=n,this.queries.set(o.queryId,r),r.init({document:n,observableQuery:o,variables:o.variables}),o},e.prototype.query=function(t,n){var r=this;n===void 0&&(n=this.generateQueryId()),E(t.query,30),E(t.query.kind==="Document",31),E(!t.returnPartialData,32),E(!t.pollInterval,33);var o=this.transform(t.query);return this.fetchQuery(n,v(v({},t),{query:o})).then(function(i){return i&&v(v({},i),{data:r.maskOperation({document:o,data:i.data,fetchPolicy:t.fetchPolicy,id:n})})}).finally(function(){return r.stopQuery(n)})},e.prototype.generateQueryId=function(){return String(this.queryIdCounter++)},e.prototype.generateRequestId=function(){return this.requestIdCounter++},e.prototype.generateMutationId=function(){return String(this.mutationIdCounter++)},e.prototype.stopQueryInStore=function(t){this.stopQueryInStoreNoBroadcast(t),this.broadcastQueries()},e.prototype.stopQueryInStoreNoBroadcast=function(t){var n=this.queries.get(t);n&&n.stop()},e.prototype.clearStore=function(t){return t===void 0&&(t={discardWatches:!0}),this.cancelPendingFetches(le(34)),this.queries.forEach(function(n){n.observableQuery?n.networkStatus=J.loading:n.stop()}),this.mutationStore&&(this.mutationStore=Object.create(null)),this.cache.reset(t)},e.prototype.getObservableQueries=function(t){var n=this;t===void 0&&(t="active");var r=new Map,o=new Map,i=new Map,s=new Set;return Array.isArray(t)&&t.forEach(function(c){if(typeof c=="string")o.set(c,c),i.set(c,!1);else if(Xd(c)){var l=At(n.transform(c));o.set(l,Ln(c)),i.set(l,!1)}else Z(c)&&c.query&&s.add(c)}),this.queries.forEach(function(c,l){var u=c.observableQuery,d=c.document;if(u){if(t==="all"){r.set(l,u);return}var f=u.queryName,p=u.options.fetchPolicy;if(p==="standby"||t==="active"&&!u.hasObservers())return;(t==="active"||f&&i.has(f)||d&&i.has(At(d)))&&(r.set(l,u),f&&i.set(f,!0),d&&i.set(At(d),!0))}}),s.size&&s.forEach(function(c){var l=Ii("legacyOneTimeQuery"),u=n.getQuery(l).init({document:c.query,variables:c.variables}),d=new jc({queryManager:n,queryInfo:u,options:v(v({},c),{fetchPolicy:"network-only"})});E(d.queryId===l),u.setObservableQuery(d),r.set(l,d)}),globalThis.__DEV__!==!1&&i.size&&i.forEach(function(c,l){if(!c){var u=o.get(l);u?globalThis.__DEV__!==!1&&E.warn(35,u):globalThis.__DEV__!==!1&&E.warn(36)}}),r},e.prototype.reFetchObservableQueries=function(t){var n=this;t===void 0&&(t=!1);var r=[];return this.getObservableQueries(t?"all":"active").forEach(function(o,i){var s=o.options.fetchPolicy;o.resetLastResults(),(t||s!=="standby"&&s!=="cache-only")&&r.push(o.refetch()),n.getQuery(i).setDiff(null)}),this.broadcastQueries(),Promise.all(r)},e.prototype.setObservableQuery=function(t){this.getQuery(t.queryId).setObservableQuery(t)},e.prototype.startGraphQLSubscription=function(t){var n=this,r=t.query,o=t.variables,i=t.fetchPolicy,s=t.errorPolicy,c=s===void 0?"none":s,l=t.context,u=l===void 0?{}:l,d=t.extensions,f=d===void 0?{}:d;r=this.transform(r),o=this.getVariables(r,o);var p=function(g){return n.getObservableFromLink(r,u,g,f).map(function(y){i!=="no-cache"&&(Vc(y,c)&&n.cache.write({query:r,result:y.data,dataId:"ROOT_SUBSCRIPTION",variables:g}),n.broadcastQueries());var b=To(y),S=yS(y);if(b||S){var T={};if(b&&(T.graphQLErrors=y.errors),S&&(T.protocolErrors=y.extensions[zi]),c==="none"||S)throw new mn(T)}return c==="ignore"&&delete y.errors,y})};if(this.getDocumentInfo(r).hasClientExports){var h=this.localState.addExportedVariables(r,o,u).then(p);return new B(function(g){var y=null;return h.then(function(b){return y=b.subscribe(g)},g.error),function(){return y&&y.unsubscribe()}})}return p(o)},e.prototype.stopQuery=function(t){this.stopQueryNoBroadcast(t),this.broadcastQueries()},e.prototype.stopQueryNoBroadcast=function(t){this.stopQueryInStoreNoBroadcast(t),this.removeQuery(t)},e.prototype.removeQuery=function(t){this.fetchCancelFns.delete(t),this.queries.has(t)&&(this.getQuery(t).stop(),this.queries.delete(t))},e.prototype.broadcastQueries=function(){this.onBroadcast&&this.onBroadcast(),this.queries.forEach(function(t){return t.notify()})},e.prototype.getLocalState=function(){return this.localState},e.prototype.getObservableFromLink=function(t,n,r,o,i){var s=this,c;i===void 0&&(i=(c=n?.queryDeduplication)!==null&&c!==void 0?c:this.queryDeduplication);var l,u=this.getDocumentInfo(t),d=u.serverQuery,f=u.clientQuery;if(d){var p=this,h=p.inFlightLinkObservables,g=p.link,y={query:d,variables:r,operationName:Ln(d)||void 0,context:this.prepareContext(v(v({},n),{forceFetch:!i})),extensions:o};if(n=y.context,i){var b=At(d),S=ze(r),T=h.lookup(b,S);if(l=T.observable,!l){var D=new vr([Eo(g,y)]);l=T.observable=D,D.beforeNext(function(){h.remove(b,S)})}}else l=new vr([Eo(g,y)])}else l=new vr([B.of({data:{}})]),n=this.prepareContext(n);return f&&(l=yc(l,function(C){return s.localState.runResolvers({document:f,remoteResult:C,context:n,variables:r})})),l},e.prototype.getResultsFromLink=function(t,n,r){var o=t.lastRequestId=this.generateRequestId(),i=this.cache.transformForLink(r.query);return yc(this.getObservableFromLink(i,r.context,r.variables),function(s){var c=bc(s),l=c.length>0,u=r.errorPolicy;if(o>=t.lastRequestId){if(l&&u==="none")throw t.markError(new mn({graphQLErrors:c}));t.markResult(s,i,r,n),t.markReady()}var d={data:s.data,loading:!1,networkStatus:J.ready};return l&&u==="none"&&(d.data=void 0),l&&u!=="ignore"&&(d.errors=c,d.networkStatus=J.error),d},function(s){var c=Ec(s)?s:new mn({networkError:s});throw o>=t.lastRequestId&&t.markError(c),c})},e.prototype.fetchConcastWithInfo=function(t,n,r,o){var i=this;r===void 0&&(r=J.loading),o===void 0&&(o=n.query);var s=this.getVariables(o,n.variables),c=this.getQuery(t),l=this.defaultOptions.watchQuery,u=n.fetchPolicy,d=u===void 0?l&&l.fetchPolicy||"cache-first":u,f=n.errorPolicy,p=f===void 0?l&&l.errorPolicy||"none":f,h=n.returnPartialData,g=h===void 0?!1:h,y=n.notifyOnNetworkStatusChange,b=y===void 0?!1:y,S=n.context,T=S===void 0?{}:S,D=Object.assign({},n,{query:o,variables:s,fetchPolicy:d,errorPolicy:p,returnPartialData:g,notifyOnNetworkStatusChange:b,context:T}),C=function(se){D.variables=se;var ye=i.fetchQueryByPolicy(c,D,r);return D.fetchPolicy!=="standby"&&ye.sources.length>0&&c.observableQuery&&c.observableQuery.applyNextFetchPolicy("after-fetch",n),ye},M=function(){return i.fetchCancelFns.delete(t)};this.fetchCancelFns.set(t,function(se){M(),setTimeout(function(){return _.cancel(se)})});var _,H;if(this.getDocumentInfo(D.query).hasClientExports)_=new vr(this.localState.addExportedVariables(D.query,D.variables,D.context).then(C).then(function(se){return se.sources})),H=!0;else{var G=C(D.variables);H=G.fromLink,_=new vr(G.sources)}return _.promise.then(M,M),{concast:_,fromLink:H}},e.prototype.refetchQueries=function(t){var n=this,r=t.updateCache,o=t.include,i=t.optimistic,s=i===void 0?!1:i,c=t.removeOptimistic,l=c===void 0?s?Ii("refetchQueries"):void 0:c,u=t.onQueryUpdated,d=new Map;o&&this.getObservableQueries(o).forEach(function(p,h){d.set(h,{oq:p,lastDiff:n.getQuery(h).getDiff()})});var f=new Map;return r&&this.cache.batch({update:r,optimistic:s&&l||!1,removeOptimistic:l,onWatchUpdated:function(p,h,g){var y=p.watcher instanceof Bc&&p.watcher.observableQuery;if(y){if(u){d.delete(y.queryId);var b=u(y,h,g);return b===!0&&(b=y.refetch()),b!==!1&&f.set(y,b),b}u!==null&&d.set(y.queryId,{oq:y,lastDiff:g,diff:h})}}}),d.size&&d.forEach(function(p,h){var g=p.oq,y=p.lastDiff,b=p.diff,S;if(u){if(!b){var T=g.queryInfo;T.reset(),b=T.getDiff()}S=u(g,b,y)}(!u||S===!0)&&(S=g.refetch()),S!==!1&&f.set(g,S),h.indexOf("legacyOneTimeQuery")>=0&&n.stopQueryNoBroadcast(h)}),l&&this.cache.removeOptimistic(l),f},e.prototype.maskOperation=function(t){var n,r,o,i=t.document,s=t.data;if(globalThis.__DEV__!==!1){var c=t.fetchPolicy,l=t.id,u=(n=ut(i))===null||n===void 0?void 0:n.operation,d=((r=u?.[0])!==null&&r!==void 0?r:"o")+l;this.dataMasking&&c==="no-cache"&&!Qd(i)&&!this.noCacheWarningsByQueryId.has(d)&&(this.noCacheWarningsByQueryId.add(d),globalThis.__DEV__!==!1&&E.warn(37,(o=Ln(i))!==null&&o!==void 0?o:"Unnamed ".concat(u??"operation")))}return this.dataMasking?Rf(s,i,this.cache):s},e.prototype.maskFragment=function(t){var n=t.data,r=t.fragment,o=t.fragmentName;return this.dataMasking?Qi(n,r,this.cache,o):n},e.prototype.fetchQueryByPolicy=function(t,n,r){var o=this,i=n.query,s=n.variables,c=n.fetchPolicy,l=n.refetchWritePolicy,u=n.errorPolicy,d=n.returnPartialData,f=n.context,p=n.notifyOnNetworkStatusChange,h=t.networkStatus;t.init({document:i,variables:s,networkStatus:r});var g=function(){return t.getDiff()},y=function(C,M){M===void 0&&(M=t.networkStatus||J.loading);var _=C.result;globalThis.__DEV__!==!1&&!d&&!ne(_,{})&&qf(C.missing);var H=function(G){return B.of(v({data:G,loading:gn(M),networkStatus:M},C.complete?null:{partial:!0}))};return _&&o.getDocumentInfo(i).hasForcedResolvers?o.localState.runResolvers({document:i,remoteResult:{data:_},context:f,variables:s,onlyRunForcedResolvers:!0}).then(function(G){return H(G.data||void 0)}):u==="none"&&M===J.refetch&&Array.isArray(C.missing)?H(void 0):H(_)},b=c==="no-cache"?0:r===J.refetch&&l!=="merge"?1:2,S=function(){return o.getResultsFromLink(t,b,{query:i,variables:s,context:f,fetchPolicy:c,errorPolicy:u})},T=p&&typeof h=="number"&&h!==r&&gn(r);switch(c){default:case"cache-first":{var D=g();return D.complete?{fromLink:!1,sources:[y(D,t.markReady())]}:d||T?{fromLink:!0,sources:[y(D),S()]}:{fromLink:!0,sources:[S()]}}case"cache-and-network":{var D=g();return D.complete||d||T?{fromLink:!0,sources:[y(D),S()]}:{fromLink:!0,sources:[S()]}}case"cache-only":return{fromLink:!1,sources:[y(g(),t.markReady())]};case"network-only":return T?{fromLink:!0,sources:[y(g()),S()]}:{fromLink:!0,sources:[S()]};case"no-cache":return T?{fromLink:!0,sources:[y(t.getDiff()),S()]}:{fromLink:!0,sources:[S()]};case"standby":return{fromLink:!1,sources:[]}}},e.prototype.getQuery=function(t){return t&&!this.queries.has(t)&&this.queries.set(t,new Bc(this,t)),this.queries.get(t)},e.prototype.prepareContext=function(t){t===void 0&&(t={});var n=this.localState.prepareContext(t);return v(v(v({},this.defaultContext),n),{clientAwareness:this.clientAwareness})},e}();var fb=function(){function e(t){var n=t.cache,r=t.client,o=t.resolvers,i=t.fragmentMatcher;this.selectionsToResolveCache=new WeakMap,this.cache=n,r&&(this.client=r),o&&this.addResolvers(o),i&&this.setFragmentMatcher(i)}return e.prototype.addResolvers=function(t){var n=this;this.resolvers=this.resolvers||{},Array.isArray(t)?t.forEach(function(r){n.resolvers=cf(n.resolvers,r)}):this.resolvers=cf(this.resolvers,t)},e.prototype.setResolvers=function(t){this.resolvers={},this.addResolvers(t)},e.prototype.getResolvers=function(){return this.resolvers||{}},e.prototype.runResolvers=function(t){return et(this,arguments,void 0,function(n){var r=n.document,o=n.remoteResult,i=n.context,s=n.variables,c=n.onlyRunForcedResolvers,l=c===void 0?!1:c;return Et(this,function(u){return r?[2,this.resolveDocument(r,o.data,i,s,this.fragmentMatcher,l).then(function(d){return v(v({},o),{data:d.result})})]:[2,o]})})},e.prototype.setFragmentMatcher=function(t){this.fragmentMatcher=t},e.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},e.prototype.clientQuery=function(t){return ln(["client"],t)&&this.resolvers?t:null},e.prototype.serverQuery=function(t){return Ui(t)},e.prototype.prepareContext=function(t){var n=this.cache;return v(v({},t),{cache:n,getCacheKey:function(r){return n.identify(r)}})},e.prototype.addExportedVariables=function(t){return et(this,arguments,void 0,function(n,r,o){return r===void 0&&(r={}),o===void 0&&(o={}),Et(this,function(i){return n?[2,this.resolveDocument(n,this.buildRootValueFromCache(n,r)||{},this.prepareContext(o),r).then(function(s){return v(v({},r),s.exportedVariables)})]:[2,v({},r)]})})},e.prototype.shouldForceResolvers=function(t){var n=!1;return Re(t,{Directive:{enter:function(r){if(r.name.value==="client"&&r.arguments&&(n=r.arguments.some(function(o){return o.name.value==="always"&&o.value.kind==="BooleanValue"&&o.value.value===!0}),n))return cn}}}),n},e.prototype.buildRootValueFromCache=function(t,n){return this.cache.diff({query:sf(t),variables:n,returnPartialData:!0,optimistic:!1}).result},e.prototype.resolveDocument=function(t,n){return et(this,arguments,void 0,function(r,o,i,s,c,l){var u,d,f,p,h,g,y,b,S,T,D;return i===void 0&&(i={}),s===void 0&&(s={}),c===void 0&&(c=function(){return!0}),l===void 0&&(l=!1),Et(this,function(C){return u=Ot(r),d=dt(r),f=lt(d),p=this.collectSelectionsToResolve(u,f),h=u.operation,g=h?h.charAt(0).toUpperCase()+h.slice(1):"Query",y=this,b=y.cache,S=y.client,T={fragmentMap:f,context:v(v({},i),{cache:b,client:S}),variables:s,fragmentMatcher:c,defaultOperationType:g,exportedVariables:{},selectionsToResolve:p,onlyRunForcedResolvers:l},D=!1,[2,this.resolveSelectionSet(u.selectionSet,D,o,T).then(function(M){return{result:M,exportedVariables:T.exportedVariables}})]})})},e.prototype.resolveSelectionSet=function(t,n,r,o){return et(this,void 0,void 0,function(){var i,s,c,l,u,d=this;return Et(this,function(f){return i=o.fragmentMap,s=o.context,c=o.variables,l=[r],u=function(p){return et(d,void 0,void 0,function(){var h,g;return Et(this,function(y){return!n&&!o.selectionsToResolve.has(p)?[2]:Nt(p,c)?qe(p)?[2,this.resolveField(p,n,r,o).then(function(b){var S;typeof b<"u"&&l.push((S={},S[Be(p)]=b,S))})]:(tf(p)?h=p:(h=i[p.name.value],E(h,19,p.name.value)),h&&h.typeCondition&&(g=h.typeCondition.name.value,o.fragmentMatcher(r,g,s))?[2,this.resolveSelectionSet(h.selectionSet,n,r,o).then(function(b){l.push(b)})]:[2]):[2]})})},[2,Promise.all(t.selections.map(u)).then(function(){return gr(l)})]})})},e.prototype.resolveField=function(t,n,r,o){return et(this,void 0,void 0,function(){var i,s,c,l,u,d,f,p,h,g=this;return Et(this,function(y){return r?(i=o.variables,s=t.name.value,c=Be(t),l=s!==c,u=r[c]||r[s],d=Promise.resolve(u),(!o.onlyRunForcedResolvers||this.shouldForceResolvers(t))&&(f=r.__typename||o.defaultOperationType,p=this.resolvers&&this.resolvers[f],p&&(h=p[l?s:c],h&&(d=Promise.resolve(Po.withValue(this.cache,h,[r,dn(t,i),o.context,{field:t,fragmentMap:o.fragmentMap}]))))),[2,d.then(function(b){var S,T;if(b===void 0&&(b=u),t.directives&&t.directives.forEach(function(C){C.name.value==="export"&&C.arguments&&C.arguments.forEach(function(M){M.name.value==="as"&&M.value.kind==="StringValue"&&(o.exportedVariables[M.value.value]=b)})}),!t.selectionSet||b==null)return b;var D=(T=(S=t.directives)===null||S===void 0?void 0:S.some(function(C){return C.name.value==="client"}))!==null&&T!==void 0?T:!1;if(Array.isArray(b))return g.resolveSubSelectedArray(t,n||D,b,o);if(t.selectionSet)return g.resolveSelectionSet(t.selectionSet,n||D,b,o)})]):[2,null]})})},e.prototype.resolveSubSelectedArray=function(t,n,r,o){var i=this;return Promise.all(r.map(function(s){if(s===null)return null;if(Array.isArray(s))return i.resolveSubSelectedArray(t,n,s,o);if(t.selectionSet)return i.resolveSelectionSet(t.selectionSet,n,s,o)}))},e.prototype.collectSelectionsToResolve=function(t,n){var r=function(s){return!Array.isArray(s)},o=this.selectionsToResolveCache;function i(s){if(!o.has(s)){var c=new Set;o.set(s,c),Re(s,{Directive:function(l,u,d,f,p){l.name.value==="client"&&p.forEach(function(h){r(h)&&_i(h)&&c.add(h)})},FragmentSpread:function(l,u,d,f,p){var h=n[l.name.value];E(h,20,l.name.value);var g=i(h);g.size>0&&(p.forEach(function(y){r(y)&&_i(y)&&c.add(y)}),c.add(l),g.forEach(function(y){c.add(y)}))}})}return o.get(s)}return i(t)},e}();var hb=!1;var Xi=function(){function e(t){var n=this,r;if(this.resetStoreCallbacks=[],this.clearStoreCallbacks=[],!t.cache)throw le(16);var o=t.uri,i=t.credentials,s=t.headers,c=t.cache,l=t.documentTransform,u=t.ssrMode,d=u===void 0?!1:u,f=t.ssrForceFetchDelay,p=f===void 0?0:f,h=t.connectToDevTools,g=t.queryDeduplication,y=g===void 0?!0:g,b=t.defaultOptions,S=t.defaultContext,T=t.assumeImmutableResults,D=T===void 0?c.assumeImmutableResults:T,C=t.resolvers,M=t.typeDefs,_=t.fragmentMatcher,H=t.name,G=t.version,se=t.devtools,ye=t.dataMasking,Lt=t.link;Lt||(Lt=o?new If({uri:o,credentials:i,headers:s}):Dt.empty()),this.link=Lt,this.cache=c,this.disableNetworkFetches=d||p>0,this.queryDeduplication=y,this.defaultOptions=b||Object.create(null),this.typeDefs=M,this.devtoolsConfig=v(v({},se),{enabled:(r=se?.enabled)!==null&&r!==void 0?r:h}),this.devtoolsConfig.enabled===void 0&&(this.devtoolsConfig.enabled=globalThis.__DEV__!==!1),p&&setTimeout(function(){return n.disableNetworkFetches=!1},p),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.watchFragment=this.watchFragment.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this),this.version=Ci,this.localState=new fb({cache:c,client:this,resolvers:C,fragmentMatcher:_}),this.queryManager=new db({cache:this.cache,link:this.link,defaultOptions:this.defaultOptions,defaultContext:S,documentTransform:l,queryDeduplication:y,ssrMode:d,dataMasking:!!ye,clientAwareness:{name:H,version:G},localState:this.localState,assumeImmutableResults:D,onBroadcast:this.devtoolsConfig.enabled?function(){n.devToolsHookCb&&n.devToolsHookCb({action:{},state:{queries:n.queryManager.getQueryStore(),mutations:n.queryManager.mutationStore||{}},dataWithOptimisticResults:n.cache.extract(!0)})}:void 0}),this.devtoolsConfig.enabled&&this.connectToDevTools()}return e.prototype.connectToDevTools=function(){if(!(typeof window>"u")){var t=window,n=Symbol.for("apollo.devtools");(t[n]=t[n]||[]).push(this),t.__APOLLO_CLIENT__=this,!hb&&globalThis.__DEV__!==!1&&(hb=!0,window.document&&window.top===window.self&&/^(https?|file):$/.test(window.location.protocol)&&setTimeout(function(){if(!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__){var r=window.navigator,o=r&&r.userAgent,i=void 0;typeof o=="string"&&(o.indexOf("Chrome/")>-1?i="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":o.indexOf("Firefox/")>-1&&(i="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),i&&globalThis.__DEV__!==!1&&E.log("Download the Apollo DevTools for a better development experience: %s",i)}},1e4))}},Object.defineProperty(e.prototype,"documentTransform",{get:function(){return this.queryManager.documentTransform},enumerable:!1,configurable:!0}),e.prototype.stop=function(){this.queryManager.stop()},e.prototype.watchQuery=function(t){return this.defaultOptions.watchQuery&&(t=Bi(this.defaultOptions.watchQuery,t)),this.disableNetworkFetches&&(t.fetchPolicy==="network-only"||t.fetchPolicy==="cache-and-network")&&(t=v(v({},t),{fetchPolicy:"cache-first"})),this.queryManager.watchQuery(t)},e.prototype.query=function(t){return this.defaultOptions.query&&(t=Bi(this.defaultOptions.query,t)),E(t.fetchPolicy!=="cache-and-network",17),this.disableNetworkFetches&&t.fetchPolicy==="network-only"&&(t=v(v({},t),{fetchPolicy:"cache-first"})),this.queryManager.query(t)},e.prototype.mutate=function(t){return this.defaultOptions.mutate&&(t=Bi(this.defaultOptions.mutate,t)),this.queryManager.mutate(t)},e.prototype.subscribe=function(t){var n=this,r=this.queryManager.generateQueryId();return this.queryManager.startGraphQLSubscription(t).map(function(o){return v(v({},o),{data:n.queryManager.maskOperation({document:t.query,data:o.data,fetchPolicy:t.fetchPolicy,id:r})})})},e.prototype.readQuery=function(t,n){return n===void 0&&(n=!1),this.cache.readQuery(t,n)},e.prototype.watchFragment=function(t){var n;return this.cache.watchFragment(v(v({},t),(n={},n[Symbol.for("apollo.dataMasking")]=this.queryManager.dataMasking,n)))},e.prototype.readFragment=function(t,n){return n===void 0&&(n=!1),this.cache.readFragment(t,n)},e.prototype.writeQuery=function(t){var n=this.cache.writeQuery(t);return t.broadcast!==!1&&this.queryManager.broadcastQueries(),n},e.prototype.writeFragment=function(t){var n=this.cache.writeFragment(t);return t.broadcast!==!1&&this.queryManager.broadcastQueries(),n},e.prototype.__actionHookForDevTools=function(t){this.devToolsHookCb=t},e.prototype.__requestRaw=function(t){return Eo(this.link,t)},e.prototype.resetStore=function(){var t=this;return Promise.resolve().then(function(){return t.queryManager.clearStore({discardWatches:!1})}).then(function(){return Promise.all(t.resetStoreCallbacks.map(function(n){return n()}))}).then(function(){return t.reFetchObservableQueries()})},e.prototype.clearStore=function(){var t=this;return Promise.resolve().then(function(){return t.queryManager.clearStore({discardWatches:!0})}).then(function(){return Promise.all(t.clearStoreCallbacks.map(function(n){return n()}))})},e.prototype.onResetStore=function(t){var n=this;return this.resetStoreCallbacks.push(t),function(){n.resetStoreCallbacks=n.resetStoreCallbacks.filter(function(r){return r!==t})}},e.prototype.onClearStore=function(t){var n=this;return this.clearStoreCallbacks.push(t),function(){n.clearStoreCallbacks=n.clearStoreCallbacks.filter(function(r){return r!==t})}},e.prototype.reFetchObservableQueries=function(t){return this.queryManager.reFetchObservableQueries(t)},e.prototype.refetchQueries=function(t){var n=this.queryManager.refetchQueries(t),r=[],o=[];n.forEach(function(s,c){r.push(c),o.push(s)});var i=Promise.all(o);return i.queries=r,i.results=o,i.catch(function(s){globalThis.__DEV__!==!1&&E.debug(18,s)}),i},e.prototype.getObservableQueries=function(t){return t===void 0&&(t="active"),this.queryManager.getObservableQueries(t)},e.prototype.extract=function(t){return this.cache.extract(t)},e.prototype.restore=function(t){return this.cache.restore(t)},e.prototype.addResolvers=function(t){this.localState.addResolvers(t)},e.prototype.setResolvers=function(t){this.localState.setResolvers(t)},e.prototype.getResolvers=function(){return this.localState.getResolvers()},e.prototype.setLocalStateFragmentMatcher=function(t){this.localState.setFragmentMatcher(t)},e.prototype.setLink=function(t){this.link=this.queryManager.link=t},Object.defineProperty(e.prototype,"defaultContext",{get:function(){return this.queryManager.defaultContext},enumerable:!1,configurable:!0}),e}();globalThis.__DEV__!==!1&&(Xi.prototype.getMemoryInternals=xv);var $c=new Map,Gf=new Map,pb=!0,zc=!1;function mb(e){return e.replace(/[\s,]+/g," ").trim()}function HR(e){return mb(e.source.body.substring(e.start,e.end))}function UR(e){var t=new Set,n=[];return e.definitions.forEach(function(r){if(r.kind==="FragmentDefinition"){var o=r.name.value,i=HR(r.loc),s=Gf.get(o);s&&!s.has(i)?pb&&console.warn("Warning: fragment with name "+o+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):s||Gf.set(o,s=new Set),s.add(i),t.has(i)||(t.add(i),n.push(r))}else n.push(r)}),v(v({},e),{definitions:n})}function jR(e){var t=new Set(e.definitions);t.forEach(function(r){r.loc&&delete r.loc,Object.keys(r).forEach(function(o){var i=r[o];i&&typeof i=="object"&&t.add(i)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}function BR(e){var t=mb(e);if(!$c.has(t)){var n=cc(e,{experimentalFragmentVariables:zc,allowLegacyFragmentVariables:zc});if(!n||n.kind!=="Document")throw new Error("Not a valid GraphQL document.");$c.set(t,jR(UR(n)))}return $c.get(t)}function $n(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];typeof e=="string"&&(e=[e]);var r=e[0];return t.forEach(function(o,i){o&&o.kind==="Document"?r+=o.loc.source.body:r+=o,r+=e[i+1]}),BR(r)}function gb(){$c.clear(),Gf.clear()}function yb(){pb=!1}function vb(){zc=!0}function Sb(){zc=!1}var es={gql:$n,resetCaches:gb,disableFragmentWarnings:yb,enableExperimentalFragmentVariables:vb,disableExperimentalFragmentVariables:Sb};(function(e){e.gql=es.gql,e.resetCaches=es.resetCaches,e.disableFragmentWarnings=es.disableFragmentWarnings,e.enableExperimentalFragmentVariables=es.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=es.disableExperimentalFragmentVariables})($n||($n={}));$n.default=$n;av(globalThis.__DEV__!==!1?"log":"silent");function bb(e){return new V(t=>(e().then(n=>{t.closed||(t.next(n),t.complete())},n=>{t.closed||t.error(n)}),()=>t.unsubscribe()))}function VR(e,t){return t?e.pipe(Fo({loading:!0}),F(n=>ue(R({},n),{loading:!!n.loading}))):e.pipe(F(n=>ue(R({},n),{loading:!1})))}var Kf=class{zone;constructor(t){this.zone=t}now=Date.now?Date.now:()=>+new Date;schedule(t,n=0,r){return this.zone.run(()=>fl.schedule(t,n,r))}};function Yf(e){return e[Yt]=()=>e,e}function Zf(e,t){return e.pipe(Qn(new Kf(t)))}function $R(e){return function(n){return new V(function(o){let i=e.getCurrentResult(),{loading:s,errors:c,error:l,partial:u,data:d}=i,{partialRefetch:f,fetchPolicy:p}=e.options,h=c||l;return f&&u&&(!d||Object.keys(d).length===0)&&p!=="cache-only"&&!s&&!h&&o.next(ue(R({},i),{loading:!0,networkStatus:J.loading})),n.subscribe(o)})}}var Jf=class{obsQuery;valueChanges;queryId;constructor(t,n,r){this.obsQuery=t;let o=Zf(he(Yf(this.obsQuery)),n);this.valueChanges=r.useInitialLoading?o.pipe($R(this.obsQuery)):o,this.queryId=this.obsQuery.queryId}get options(){return this.obsQuery.options}get variables(){return this.obsQuery.variables}result(){return this.obsQuery.result()}getCurrentResult(){return this.obsQuery.getCurrentResult()}getLastResult(){return this.obsQuery.getLastResult()}getLastError(){return this.obsQuery.getLastError()}resetLastResults(){return this.obsQuery.resetLastResults()}refetch(t){return this.obsQuery.refetch(t)}fetchMore(t){return this.obsQuery.fetchMore(t)}subscribeToMore(t){return this.obsQuery.subscribeToMore(t)}updateQuery(t){return this.obsQuery.updateQuery(t)}stopPolling(){return this.obsQuery.stopPolling()}startPolling(t){return this.obsQuery.startPolling(t)}setOptions(t){return this.obsQuery.setOptions(t)}setVariables(t){return this.obsQuery.setVariables(t)}},Db=new O("APOLLO_FLAGS"),wb=new O("APOLLO_OPTIONS"),zR=new O("APOLLO_NAMED_OPTIONS"),qc=class{ngZone;flags;_client;useInitialLoading;useMutationLoading;constructor(t,n,r){this.ngZone=t,this.flags=n,this._client=r,this.useInitialLoading=n?.useInitialLoading??!1,this.useMutationLoading=n?.useMutationLoading??!1}watchQuery(t){return new Jf(this.ensureClient().watchQuery(R({},t)),this.ngZone,R({useInitialLoading:this.useInitialLoading},t))}query(t){return bb(()=>this.ensureClient().query(R({},t)))}mutate(t){return VR(bb(()=>this.ensureClient().mutate(R({},t))),t.useMutationLoading??this.useMutationLoading)}watchFragment(t,n){let r=he(Yf(this.ensureClient().watchFragment(R({},t))));return n&&n.useZone!==!0?r:Zf(r,this.ngZone)}subscribe(t,n){let r=he(Yf(this.ensureClient().subscribe(R({},t))));return n&&n.useZone!==!0?r:Zf(r,this.ngZone)}get client(){return this.ensureClient()}set client(t){if(this._client)throw new Error("Client has been already defined");this._client=t}ensureClient(){return this.checkInstance(),this._client}checkInstance(){if(this._client)return!0;throw new Error("Client has not been defined yet")}},Xf=(()=>{class e extends qc{map=new Map;constructor(n,r,o,i){if(super(n,i),r&&this.createDefault(r),o&&typeof o=="object"){for(let s in o)if(o.hasOwnProperty(s)){let c=o[s];this.create(c,s)}}}create(n,r){Qf(r)?this.createNamed(r,n):this.createDefault(n)}default(){return this}use(n){return Qf(n)?this.map.get(n):this.default()}createDefault(n){if(this._client)throw new Error("Apollo has been already created.");this.client=this.ngZone.runOutsideAngular(()=>new Xi(n))}createNamed(n,r){if(this.map.has(n))throw new Error(`Client ${n} has been already created`);this.map.set(n,new qc(this.ngZone,this.flags,this.ngZone.runOutsideAngular(()=>new Xi(r))))}removeClient(n){Qf(n)?this.map.delete(n):this._client=void 0}static \u0275fac=function(r){return new(r||e)(A(Me),A(wb,8),A(zR,8),A(Db,8))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();function Qf(e){return!!e&&e!=="default"}function Tb(e,t={}){return[Xf,{provide:wb,useFactory:e},{provide:Db,useValue:t}]}var qR=$n,eh=qR;var Eb=eh`
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
`,Cb=eh`
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
`;var wt=(()=>{class e{constructor(n){this.apollo=n}getAbilities(){return this.pokemon.pipe(F(n=>n.getPokemon.abilities))}getDexNumber(){return this.pokemon.pipe(F(n=>n.getPokemon.num))}getMove(n){return this.apollo.query({query:Cb,variables:{move:n}}).pipe(F(r=>r.data))}getMoves(){return this.pokemon.pipe(F(n=>{let r=[],o=["dreamworldMoves","eggMoves","eventMoves","tmMoves","tutorMoves","virtualTransferMoves","levelUpMoves"],i=c=>{c&&Object.keys(c).forEach(l=>{let u=c[l];u&&o.forEach(d=>{let f=u[d];Array.isArray(f)&&f.forEach(p=>{r.push(p.move)})})})},s=c=>{c&&c.forEach(l=>{i(l.learnsets),s(l.preevolutions),s(l.evolutions)})};return i(n.getPokemon.learnsets),s(n.getPokemon.preevolutions??null),s(n.getPokemon.evolutions??null),r}))}getPokemon(n){return this.pokemon=this.apollo.query({query:Eb,variables:{pokemon:n}}).pipe(F(r=>r.data)),this.pokemon}getStats(){return this.pokemon.pipe(F(n=>n.getPokemon.baseStats))}getTypes(){return this.pokemon.pipe(F(n=>n.getPokemon.types))}static{this.\u0275fac=function(r){return new(r||e)(A(Xf))}}static{this.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Ib=(()=>{class e{constructor(n,r){this.stateService=n,this.graphqlService=r,this.pokemonList=document.getElementById("pokemonList"),this.raidTier="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n,this.populatePokemonList()}),this.stateService.regionList.subscribe(n=>{this.region=n,this.populatePokemonList()})}ngAfterViewInit(){this.pokemonList=document.getElementById("pokemonList")}populatePokemonList(){this.pokemonList&&(this.resetPokemonList(),(this.raidTier=="5"?zt:qt).sort((r,o)=>r.name.localeCompare(o.name)).filter(r=>r.region==m[this.region]).forEach(r=>{let o=document.createElement("option");o.value=r.name,o.text=r.name,r.formName&&(o.id=r.formName),this.pokemonList.add(o)}))}resetPokemonList(){this.pokemonList.innerHTML="",this.pokemonList.innerHTML='<option value="">-- Pokemon --</option>'}valueChanged(){let n=document.getElementById("pokemonList"),r=n.selectedIndex,o=n.options[r];if(o){let i=o.id;an(),o.value&&(this.graphqlService.getPokemon(i||o.value.toLowerCase()),this.stateService.changePokemon(o.value),document.getElementById("pokemonContent").style.display="none",this.stateService.changeLoading(!0))}}static{this.\u0275fac=function(r){return new(r||e)(q(ce),q(wt))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-pokemon-list"]],decls:3,vars:0,consts:[["id","pokemonList",3,"change"],["value",""]],template:function(r,o){r&1&&(oe(0,"select",0),vt("change",function(){return o.valueChanged()}),oe(1,"option",1),we(2,"-- Pokemon --"),pe()())},encapsulation:2})}}return e})();var xe=function(e){return e.Bug="Bug",e.Dark="Dark",e.Dragon="Dragon",e.Electric="Electric",e.Fairy="Fairy",e.Fighting="Fighting",e.Fire="Fire",e.Flying="Flying",e.Ghost="Ghost",e.Grass="Grass",e.Ground="Ground",e.Ice="Ice",e.Normal="Normal",e.Poison="Poison",e.Psychic="Psychic",e.Rock="Rock",e.Steel="Steel",e.Water="Water",e}(xe||{}),ts=[{name:xe.Bug,matchup:{offense:{double:["dark","grass","psychic"],immune:[],normal:["bug","dragon","electric","ground","ice","normal","rock","water"],resisted:["fairy","fighting","fire","flying","ghost","poison","steel"]},defense:{double:["fire","flying","rock"],immune:[],normal:["bug","dark","dragon","electric","fairy","ghost","ice","normal","poison","psychic","steel","water"],resisted:["fighting","grass","ground"]}}},{name:xe.Dark,matchup:{offense:{double:["ghost","psychic"],immune:[],normal:["bug","dragon","electric","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["dark","fairy","fighting"]},defense:{double:["bug","fairy","fighting"],immune:["psychic"],normal:["dragon","electric","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["dark","ghost"]}}},{name:xe.Dragon,matchup:{offense:{double:["dragon"],immune:["fairy"],normal:["bug","dark","electric","fighting","fire","flying","ghost","grass","ground","ice","normal","poison","psychic","rock","water"],resisted:["steel"]},defense:{double:["dragon","fairy","ice"],immune:[],normal:["bug","dark","fighting","flying","ghost","ground","normal","poison","psychic","rock","steel"],resisted:["electric","fire","grass","water"]}}},{name:xe.Electric,matchup:{offense:{double:["flying","water"],immune:["ground"],normal:["bug","dark","fairy","fighting","fire","ghost","ice","normal","poison","psychic","rock","steel"],resisted:["dragon","electric","grass"]},defense:{double:["ground"],immune:[],normal:["bug","dark","dragon","fairy","fighting","fire","ghost","grass","ice","normal","poison","psychic","rock","water"],resisted:["electric","flying","steel"]}}},{name:xe.Fairy,matchup:{offense:{double:["dark","dragon","fighting"],immune:[],normal:["bug","electric","fairy","flying","ghost","grass","ground","ice","normal","psychic","rock","water"],resisted:["fire","poison","steel"]},defense:{double:["poison","steel"],immune:["dragon"],normal:["electric","fairy","fire","flying","ghost","grass","ground","ice","normal","psychic","rock","water"],resisted:["bug","dark","fighting"]}}},{name:xe.Fighting,matchup:{offense:{double:["dark","ice","normal","rock","steel"],immune:["ghost"],normal:["dragon","electric","fighting","fire","grass","ground","water"],resisted:["bug","fairy","flying","poison","psychic"]},defense:{double:["fairy","flying","psychic"],immune:[],normal:["dragon","electric","fighting","fire","ghost","grass","ground","ice","normal","poison","steel","water"],resisted:["bug","dark","rock"]}}},{name:xe.Fire,matchup:{offense:{double:["bug","grass","ice","steel"],immune:[],normal:["dark","electric","fairy","fighting","flying","ghost","ground","normal","poison","psychic"],resisted:["dragon","fire","rock","water"]},defense:{double:["ground","rock","water"],immune:[],normal:["dark","dragon","electric","fighting","flying","ghost","normal","poison","psychic"],resisted:["bug","fairy","fire","grass","ice","steel"]}}},{name:xe.Flying,matchup:{offense:{double:["bug","fighting","grass"],immune:[],normal:["dark","dragon","fairy","fire","flying","ghost","ground","ice","normal","poison","psychic","water"],resisted:["electric","rock","steel"]},defense:{double:["electric","ice","rock"],immune:["ground"],normal:["dark","dragon","fairy","fire","flying","ghost","normal","poison","psychic","steel","water"],resisted:["bug","fighting","grass"]}}},{name:xe.Ghost,matchup:{offense:{double:["ghost","psychic"],immune:["normal"],normal:["bug","dragon","electric","fairy","fighting","fire","flying","grass","ground","ice","poison","rock","steel","water"],resisted:["dark"]},defense:{double:["dark","ghost"],immune:["fighting","normal"],normal:["dragon","electric","fairy","fire","flying","grass","ground","ice","psychic","rock","steel","water"],resisted:["bug","poison"]}}},{name:xe.Grass,matchup:{offense:{double:["ground","rock","water"],immune:[],normal:["dark","electric","fairy","fighting","ghost","ice","normal","psychic"],resisted:["bug","dragon","fire","flying","grass","poison","steel"]},defense:{double:["bug","fire","flying","ice","poison"],immune:[],normal:["dark","dragon","fairy","fighting","ghost","normal","psychic","rock","steel"],resisted:["electric","grass","ground","water"]}}},{name:xe.Ground,matchup:{offense:{double:["electric","fire","poison","rock","steel"],immune:["flying"],normal:["dark","dragon","fairy","fighting","ghost","ground","ice","normal","psychic","water"],resisted:["bug","grass"]},defense:{double:["grass","ice","water"],immune:["electric"],normal:["bug","dark","dragon","fairy","fighting","fire","flying","ghost","ground","normal","psychic","steel"],resisted:["poison","rock"]}}},{name:xe.Ice,matchup:{offense:{double:["dragon","flying","grass","ground"],immune:[],normal:["bug","dark","electric","fairy","fighting","ghost","normal","poison","psychic","rock"],resisted:["fire","ice","steel","water"]},defense:{double:["fighting","fire","rock","steel"],immune:[],normal:["bug","dark","dragon","electric","fairy","flying","ghost","grass","ground","normal","poison","psychic","water"],resisted:["ice"]}}},{name:xe.Normal,matchup:{offense:{double:[],immune:["ghost"],normal:["bug","dark","dragon","electric","fairy","fighting","fire","flying","grass","ground","ice","normal","poison","psychic","water"],resisted:["rock","steel"]},defense:{double:["fighting"],immune:["ghost"],normal:["bug","dark","dragon","electric","fairy","fire","flying","grass","ground","ice","normal","poison","psychic","rock","steel","water"],resisted:[]}}},{name:xe.Poison,matchup:{offense:{double:["fairy","grass"],immune:["steel"],normal:["bug","dark","dragon","electric","fighting","fire","flying","ice","normal","psychic","water"],resisted:["ghost","ground","poison","rock"]},defense:{double:["ground","psychic"],immune:[],normal:["dark","dragon","electric","fire","flying","ghost","ice","normal","rock","steel","water"],resisted:["bug","fairy","fighting","grass","poison"]}}},{name:xe.Psychic,matchup:{offense:{double:["fighting","poison"],immune:["dark"],normal:["bug","dragon","electric","fairy","fire","flying","ghost","grass","ground","ice","normal","rock","water"],resisted:["psychic","steel"]},defense:{double:["bug","dark","ghost"],immune:[],normal:["dragon","electric","fairy","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["fighting","psychic"]}}},{name:xe.Rock,matchup:{offense:{double:["bug","fire","flying","ice"],immune:[],normal:["dark","dragon","electric","fairy","ghost","grass","normal","poison","psychic","rock","water"],resisted:["fighting","ground","steel"]},defense:{double:["fighting","grass","ground","steel","water"],immune:[],normal:["bug","dark","dragon","electric","fairy","ghost","ice","psychic","rock"],resisted:["fire","flying","normal","poison"]}}},{name:xe.Steel,matchup:{offense:{double:["fairy","ice","rock"],immune:[],normal:["bug","dark","dragon","fighting","flying","ghost","grass","ground","normal","poison","psychic"],resisted:["electric","fire","steel","water"]},defense:{double:["fighting","fire","ground"],immune:["poison"],normal:["dark","electric","ghost","water"],resisted:["bug","dragon","fairy","flying","grass","ice","normal","psychic","rock","steel"]}}},{name:xe.Water,matchup:{offense:{double:["fire","ground","rock"],immune:[],normal:["bug","dark","electric","fairy","fighting","flying","ghost","ice","normal","poison","psychic","steel"],resisted:["dragon","grass","water"]},defense:{double:["electric","grass"],immune:[],normal:["bug","dark","dragon","fairy","fighting","flying","ghost","ground","normal","poison","psychic","rock"],resisted:["fire","ice","steel","water"]}}}];var Pb=(()=>{class e{constructor(n){this.stateService=n}ngOnInit(){ts.forEach(n=>{let r=document.createElement("option");r.value=n.name,r.text=n.name,document.getElementById("teraList").add(r)})}valueChanged(){let n=document.getElementById("teraList"),r=n.selectedIndex,o=n.options[r];this.stateService.changeTeraType(o.value)}static{this.\u0275fac=function(r){return new(r||e)(q(ce))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-tera-type"]],decls:3,vars:0,consts:[["id","teraList",3,"change"],["value",""]],template:function(r,o){r&1&&(oe(0,"select",0),vt("change",function(){return o.valueChanged()}),oe(1,"option",1),we(2,"-- Tera Type --"),pe()())},encapsulation:2})}}return e})();var Mb=(()=>{class e{constructor(n){this.stateService=n,this.raidTier="",this.pokemonList="",this.teraType="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n}),this.stateService.teraType.subscribe(n=>{this.teraType=n}),this.stateService.regionList.subscribe(n=>{this.region=n})}shareRaid(){let n=location.origin+"/tera-raid-info/";n+=this.raidTier,n+="/"+this.region,n+="/"+this.pokemonList,n+="/"+this.teraType,navigator.clipboard.writeText(n);let r=document.getElementById("shareText");r.innerText="Copied to Clipboard"}shareRaidMouseOut(){let n=document.getElementById("shareText");n.innerText="Share Raid"}static{this.\u0275fac=function(r){return new(r||e)(q(ce))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-share-raid"]],decls:3,vars:0,consts:[["id","shareRaid",1,"share",3,"click","mouseout"],["id","shareText",1,"shareText"]],template:function(r,o){r&1&&(oe(0,"div",0),vt("click",function(){return o.shareRaid()})("mouseout",function(){return o.shareRaidMouseOut()}),oe(1,"div",1),we(2,"Share Raid"),pe()())},encapsulation:2})}}return e})();var Rb=(()=>{class e{constructor(n,r){this.grapghqlService=n,this.stateService=r,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setImages()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setImages(){this.pokemonList&&this.grapghqlService.getDexNumber().subscribe(n=>{let r=this.raidTier=="5"?zt:qt,o="";r.filter(i=>i.name==this.pokemonList&&i.region==m[this.region]).forEach(i=>{i.imageAlt&&(o=i.imageAlt)}),ge(document.getElementById("pokemonImageNormal"),`<img alt="Normal" title="Normal" src="./assets/pokemon/${kd(n,3,"0")}${o}.png" />`),ge(document.getElementById("pokemonImageShiny"),`<img alt="Shiny" title="Shiny" src="./assets/pokemon/shiny/${kd(n,3,"0")}${o}.png" />`)})}static{this.\u0275fac=function(r){return new(r||e)(q(wt),q(ce))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-pokemon-images"]],decls:2,vars:0,consts:[["id","pokemonImageNormal",1,"imgNormal"],["id","pokemonImageShiny",1,"imgShiny"]],template:function(r,o){r&1&&me(0,"div",0)(1,"div",1)},encapsulation:2})}}return e})();var _b=(()=>{class e{constructor(n,r){this.graphqlService=n,this.stateService=r,this.pokemonList=""}ngOnInit(){this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setTypes()})}setTypes(){this.pokemonList&&this.graphqlService.getTypes().subscribe(n=>{n.forEach(r=>{ge(document.getElementById("pokemonTypes"),this.createTypeDisplay(r.name))})})}createTypeDisplay(n){return`<div class="typeText ${n.toLowerCase()}">${n}</div>`}static{this.\u0275fac=function(r){return new(r||e)(q(wt),q(ce))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-pokemon-types"]],decls:1,vars:0,consts:[["id","pokemonTypes"]],template:function(r,o){r&1&&me(0,"div",0)},encapsulation:2})}}return e})();var xb=(()=>{class e{constructor(n,r){this.graphqlService=n,this.stateService=r,this.raidTier="",this.pokemonList=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setAbilities()})}setAbilities(){if(this.pokemonList){let n=document.getElementById("pokemonAbility");this.graphqlService.getAbilities().subscribe(r=>{ge(n,"<h3>Ability:</h3>"),ge(n,this.createAbilityDiv(r.first)),r.second&&ge(n,this.createAbilityDiv(r.second)),this.canShowHidden()&&r.hidden&&ge(n,this.createAbilityDiv(r.hidden,!0))})}}createAbilityDiv(n,r){return`<div class="typeMatchupText" data-info="${n.shortDesc}">${n.name}${r?" (H)":""}</div>`}canShowHidden(){return this.raidTier=="6"||this.raidTier=="5"&&this.pokemonList=="Ditto"}static{this.\u0275fac=function(r){return new(r||e)(q(wt),q(ce))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-pokemon-ability"]],decls:1,vars:0,consts:[["id","pokemonAbility"]],template:function(r,o){r&1&&me(0,"div",0)},encapsulation:2})}}return e})();var kb=(()=>{class e{constructor(n,r){this.graphqlService=n,this.stateService=r}ngOnInit(){this.stateService.pokemonList.subscribe(n=>{n&&this.setStats()})}setStats(){this.graphqlService.getStats().subscribe(n=>{ge(document.getElementById("pokemonStatsWrapper"),this.createStatsDisplay(n))})}createStatsDisplay(n){let r='<div id="pokemonStats"><h3>Base Stats</h3>';return r+=`<div class="stat hp"><p>HP</p><p data-label="HP">${n.hp}</p></div>`,r+=`<div class="stat at"><p>Atk</p><p data-label="Atk">${n.attack}</p></div>`,r+=`<div class="stat df"><p>Def</p><p data-label="Def">${n.defense}</p></div>`,r+=`<div class="stat sa"><p>Sp.Atk</p><p data-label="Sp. Atk">${n.specialattack}</p></div>`,r+=`<div class="stat sd"><p>Sp.Def</p><p data-label="Sp. Def">${n.specialdefense}</p></div>`,r+=`<div class="stat sp"><p>Spd</p><p data-label="Spd">${n.speed}</p></div></div>`,r}static{this.\u0275fac=function(r){return new(r||e)(q(wt),q(ce))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-pokemon-stats"]],decls:1,vars:0,consts:[["id","pokemonStatsWrapper"]],template:function(r,o){r&1&&me(0,"div",0)},encapsulation:2})}}return e})();var Wc=(()=>{class e{advantages(n,r=!1){let o=[];return ts.filter(i=>i.name.includes(n)).forEach(i=>{let s=i.matchup.offense;s.double.forEach(c=>{o.push({name:c,multiplier:2})}),r&&(s.resisted.forEach(c=>{o.push({name:c,multiplier:.5})}),s.immune.forEach(c=>{o.push({name:c,multiplier:0})}))}),o}weaknesses(n){let r=[];return ts.filter(o=>o.name.includes(n)).forEach(o=>{let i=o.matchup.defense;i.double.forEach(s=>{r.push({name:s,multiplier:2})}),i.resisted.forEach(s=>{r.push({name:s,multiplier:.5})}),i.immune.forEach(s=>{r.push({name:s,multiplier:0})})}),r}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Ob=(()=>{class e{constructor(n,r,o){this.stateService=n,this.typeCalcService=r,this.graphqlService=o,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setMoves()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setMoves(){let n=document.getElementById("pokemonMoves"),r=this.raidTier=="5"?zt:qt,o=[],i=[],s=[],c=[];this.pokemonList&&(r.filter(l=>l.name==this.pokemonList&&l.region==m[this.region]).forEach(l=>{l.info.specialMoves&&l.info.specialMoves.sort((u,d)=>u.localeCompare(d)).forEach(u=>{i.push(u),this.graphqlService.getMove(u.toLowerCase().replaceAll(" ","").replaceAll("-","")).subscribe(d=>{o.push(d.getMove)})}),l.info.moves.forEach(u=>{i.push(u)})}),this.graphqlService.getMoves().subscribe(l=>{ge(n,"<h3>Moves:</h3>"),i.forEach(p=>{o.push(...l.filter(h=>h.name==p))}),[...new Map(o.map(p=>[p.key,p])).values()].sort((p,h)=>p.name.localeCompare(h.name)).sort((p,h)=>p.category!="Status"&&h.category=="Status"?-1:(h.category!="Status"&&p.category=="Status",1)).forEach(p=>{let h=this.createMoveDiv(p);ge(document.getElementById("pokemonMoves"),h),s.push(h),p.category!="Status"&&c.push(p.type)}),this.stateService.changeMoveList(s.join("")),c=[...new Set(c)];let d=[];c.forEach(p=>{let h=this.typeCalcService.advantages(p);d=d.concat(h)});let f=[];d=[...new Map(d.map(p=>[p.name,p])).values()],d.sort((p,h)=>p.name.localeCompare(h.name)).forEach(p=>{f.push(Ei(p))}),f.length&&ge(document.getElementById("pokemonTypeAdvantages"),"<h3>Type Advantages:</h3>"+f.join(""))}))}createMoveDiv(n){let r=`<div class="typeMatchupText ${n.type.toLowerCase()}">${n.name}`;if(r+='<div class="moveStats">',r+=`<div class="type">${n.category.toString()}</div>`,r+=`<div class="bp">Pwr: ${n.basePower=="0"?"--":n.basePower}</div>`,r+=`<div class="pp">PP: ${n.pp}</div>`,r+=`<div class="acc">Acc: ${n.accuracy}</div>`,r+=`<div class="desc">${n.desc=="No additional effect."?n.shortDesc:n.desc}</div>`,n.category!="Status"){let o=this.typeCalcService.advantages(n.type.toString()),i=[];o.forEach(s=>{s.multiplier==2&&i.push(`${oo(s.name)}`)}),i.length&&(r+=`<div class="adv">Advantages: ${i.join(", ")}</div>`)}return r+="</div></div>",r}static{this.\u0275fac=function(r){return new(r||e)(q(ce),q(Wc),q(wt))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-pokemon-moves"]],decls:1,vars:0,consts:[["id","pokemonMoves",1,"pokemonMoves"]],template:function(r,o){r&1&&me(0,"div",0)},encapsulation:2})}}return e})();var Ab=(()=>{class e{constructor(n){this.stateService=n,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setActions()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setActions(){this.pokemonList&&(ge(document.getElementById("pokemonActions"),"<h3>Actions:</h3>"),(this.raidTier=="5"?zt:qt).filter(r=>r.name==this.pokemonList&&r.region==m[this.region]).forEach(r=>{r.info.actions?.sort((o,i)=>i.threshold-o.threshold).forEach(o=>{ge(document.getElementById("pokemonActions"),this.createActionDiv(o))})}))}createActionDiv(n){return`<div class="actions ${n.type.toLowerCase()}-${n.threshold.toString()}" data-info="${n.threshold.toString()}% ${n.type.toString()} Remaining">${n.action}</div>`}static{this.\u0275fac=function(r){return new(r||e)(q(ce))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-pokemon-actions"]],decls:1,vars:0,consts:[[1,"pokemonActions"]],template:function(r,o){r&1&&me(0,"div",0)},encapsulation:2})}}return e})();var Fb=(()=>{class e{constructor(n){this.stateService=n,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setHerbs()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setHerbs(){this.pokemonList&&(ge(document.getElementById("pokemonHerbs"),"<h3>Herbs Dropped:</h3>"),(this.raidTier=="5"?zt:qt).filter(r=>r.name==this.pokemonList&&r.region==m[this.region]).forEach(r=>{r.info.herbs.sort((o,i)=>o.name.localeCompare(i.name)).forEach(o=>{ge(document.getElementById("pokemonHerbs"),this.createHerbDiv(o))})}))}createHerbDiv(n){return`<div class="herbPill ${n.name.toLowerCase()}">${n.name} - ${n.chance}%</div>`}static{this.\u0275fac=function(r){return new(r||e)(q(ce))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-pokemon-herbs"]],decls:1,vars:0,consts:[[1,"pokemonHerbs"]],template:function(r,o){r&1&&me(0,"div",0)},encapsulation:2})}}return e})();var Lb=(()=>{class e{constructor(n,r){this.stateService=n,this.typeCalcService=r,this.raidTier="",this.pokemonList="",this.teraType="",this.moveList=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.handleChange()}),this.stateService.teraType.subscribe(n=>{this.teraType=n,this.handleChange()}),this.stateService.moveList.subscribe(n=>{this.moveList=n,this.handleChange()})}handleChange(){this.pokemonList&&(an("pokemonTeraAdvantages"),an("pokemonTeraWeaknesses"),this.pokemonList&&(this.raidTier&&this.teraType&&this.setTypeWeaknesses(),this.moveList&&this.teraType&&this.moveList.includes("Tera Blast")&&this.setTeraTypeAdvantages()),this.teraType?(this.pokemonList&&this.raidTier&&this.setTypeWeaknesses(),this.moveList.includes("Tera Blast")&&this.setTeraTypeAdvantages()):(an("pokemonTeraAdvantages"),an("pokemonTeraWeaknesses")),this.stateService.changeLoading(!1))}setTeraTypeAdvantages(){an("pokemonTeraAdvantages");let n=[];this.typeCalcService.advantages(this.teraType).forEach(o=>{n.push(Ei(o))}),n.length&&ge(document.getElementById("pokemonTeraAdvantages"),"<h3>Tera Advantages:</h3>"+n.join(""))}setTypeWeaknesses(){an("pokemonTeraWeaknesses");let n=[];this.typeCalcService.weaknesses(this.teraType).forEach(o=>{n.push(Ei(o))}),n.length&&ge(document.getElementById("pokemonTeraWeaknesses"),"<h3>Tera Weaknesses:</h3>"+n.join(""))}static{this.\u0275fac=function(r){return new(r||e)(q(ce),q(Wc))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-pokemon-type-matchups"]],decls:3,vars:0,consts:[["id","pokemonTypeAdvantages",1,"pokemonTypeMatchups"],["id","pokemonTeraWeaknesses",1,"pokemonTypeMatchups"],["id","pokemonTeraAdvantages",1,"pokemonTypeMatchups"]],template:function(r,o){r&1&&me(0,"div",0)(1,"div",1)(2,"div",2)},encapsulation:2})}}return e})();var Gc=(()=>{class e{constructor(n){this.stateService=n,this.title="Tera Raid Info"}ngOnInit(){this.stateService.changeRegionList("Paldea"),this.stateService.loading.subscribe(n=>{document.getElementById("dataLoading").hidden=!n,n==!1&&(document.getElementById("pokemonContent").style.display="")})}ngAfterViewInit(){document.getElementById("dataLoading").hidden=!0,this.deleteCache(),this.autoPopulateSelections()}autoPopulateSelections(n,r){let o=n||window.location.href,i=r||window.location.origin;if(o.replace(i,"").length>1&&o.replace(i+"/tera-raid-info/","")){let c=o.replace(i+"/tera-raid-info/","").split("/"),l=new Event("change");if(Number(c[0])){let u=document.getElementById("raidTier");u.value=c[0],u.dispatchEvent(l)}if(c[1]){let u=document.getElementById("regionList");for(let d=0;d<u.length;d++){let f=u[d];f.text==c[1]&&(u.selectedIndex=f.index)}u.dispatchEvent(l)}if(c[2]){let u=oo(c[2].replaceAll("%20"," ").toLowerCase()),d=u.match(/(\(.*\))/);if(d){let p=d[0].split(" ");for(let h=0;h<p.length;h++)u=u.replaceAll(p[h],oo(p[h]))}let f=document.getElementById("pokemonList");f.value=u,f.dispatchEvent(l)}if(c[3]){let u=document.getElementById("teraList");for(let d=0;d<u.length;d++){let f=u[d];f.text==c[3]&&(u.selectedIndex=f.index)}u.dispatchEvent(l)}}}deleteCache(){caches.delete("tera-raid-info-1")}static{this.\u0275fac=function(r){return new(r||e)(q(ce))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-root"]],decls:35,vars:0,consts:[[1,"header"],[1,"dropdowns"],["id","dataLoading","hidden","true"],["src","./assets/icons/pokeball.gif"],["id","pokemonContent","hidden","false",1,"content"],["id","pokemon"],[1,"pokemonImageWrapper"],["id","pokemonActions"],["id","pokemonHerbs"],[1,"pokemonTypesWrapper"],[1,"footer"],["href","https://github.com/kyle-undefined","target","_blank"],["href","https://www.serebii.net/","target","_blank"],["href","https://www.flaticon.com/authors/creatype","target","_blank"],["href","https://github.com/favware/graphql-pokemon","target","_blank"]],template:function(r,o){r&1&&(oe(0,"header",0)(1,"h1"),we(2,"Tera Raid Info"),pe(),oe(3,"div",1),me(4,"app-raid-tier")(5,"app-region")(6,"app-pokemon-list")(7,"app-tera-type")(8,"app-share-raid"),pe()(),oe(9,"div",2),me(10,"img",3),pe(),oe(11,"div",4)(12,"div",5)(13,"div",6),me(14,"app-pokemon-images"),pe(),me(15,"app-pokemon-types"),pe(),me(16,"app-pokemon-stats")(17,"app-pokemon-ability")(18,"app-pokemon-moves")(19,"app-pokemon-actions",7)(20,"app-pokemon-herbs",8)(21,"app-pokemon-type-matchups",9),pe(),oe(22,"footer",10),we(23," By: "),oe(24,"a",11),we(25,"Kyle Undefined"),pe(),we(26," - Design: CronikCRS - Images: "),oe(27,"a",12),we(28,"Serebii"),pe(),we(29," & "),oe(30,"a",13),we(31,"Creatype"),pe(),we(32," - Data: "),oe(33,"a",14),we(34,"GraphQL-Pokemon"),pe()())},dependencies:[Ou,ov,iv,Ib,Pb,Mb,Rb,_b,xb,kb,Ob,Ab,Fb,Lb],encapsulation:2})}}return e})();var Hb=[{path:"",component:Gc},{path:"**",redirectTo:""}];var QR=(e,t,n)=>{let r=["POST","PUT","PATCH"].indexOf(e.method.toUpperCase())!==-1,o=u=>["variables","extensions"].indexOf(u.toLowerCase())!==-1,i=e.body.length,s=e.options&&e.options.useMultipart,c;if(s){if(i)return new V(u=>u.error(new Error("File upload is not available when combined with Batching")));if(!r)return new V(u=>u.error(new Error("File upload is not available when GET is used")));if(!n)return new V(u=>u.error(new Error(`To use File upload you need to pass "extractFiles" function from "extract-files" library to HttpLink's options`)));c=n(e.body),s=!!c.files.size}let l={};if(i){if(!r)return new V(u=>u.error(new Error("Batching is not available for GET requests")));l={body:e.body}}else{let u=s?c.clone:e.body;r?l={body:u}:l={params:Object.keys(e.body).reduce((f,p)=>{let h=e.body[p];return f[p]=o(p)?JSON.stringify(h):h,f},{})}}if(s&&r){let u=new FormData;u.append("operations",JSON.stringify(l.body));let d={},f=c.files,p=0;f.forEach(h=>{d[++p]=h}),u.append("map",JSON.stringify(d)),p=0,f.forEach((h,g)=>{u.append(++p+"",g,g.name)}),l.body=u}return t.request(e.method,e.url,R(R({observe:"response",responseType:"json",reportProgress:!1},l),e.options))},KR=(e,t)=>e&&t?t.keys().reduce((r,o)=>r.set(o,t.getAll(o)),e):t||e;function YR(...e){return e.find(t=>typeof t<"u")}function ZR(e){let t=e.headers&&e.headers instanceof Vt?e.headers:new Vt(e.headers);if(e.clientAwareness){let{name:n,version:r}=e.clientAwareness;n&&!t.has("apollographql-client-name")&&(t=t.set("apollographql-client-name",n)),r&&!t.has("apollographql-client-version")&&(t=t.set("apollographql-client-version",r))}return t}var JR={batchInterval:10,batchMax:10,uri:"graphql",method:"POST",withCredentials:!1,includeQuery:!0,includeExtensions:!1,useMultipart:!1};function xo(e,t,n){return YR(e[n],t[n],JR[n])}var th=class extends Dt{httpClient;options;requester;print=po;constructor(t,n){super(),this.httpClient=t,this.options=n,this.options.operationPrinter&&(this.print=this.options.operationPrinter),this.requester=r=>new B(o=>{let i=r.getContext(),s=xo(i,this.options,"method"),c=xo(i,this.options,"includeQuery"),l=xo(i,this.options,"includeExtensions"),u=xo(i,this.options,"uri"),d=xo(i,this.options,"withCredentials"),f=xo(i,this.options,"useMultipart"),p=this.options.useGETForQueries===!0,h=r.query.definitions.some(S=>S.kind==="OperationDefinition"&&S.operation==="query");p&&h&&(s="GET");let g={method:s,url:typeof u=="function"?u(r):u,body:{operationName:r.operationName,variables:r.variables},options:{withCredentials:d,useMultipart:f,headers:this.options.headers}};l&&(g.body.extensions=r.extensions),c&&(g.body.query=this.print(r.query));let y=ZR(i);g.options.headers=KR(g.options.headers,y);let b=QR(g,this.httpClient,this.options.extractFiles).subscribe({next:S=>{r.setContext({response:S}),o.next(S.body)},error:S=>o.error(S),complete:()=>o.complete()});return()=>{b.closed||b.unsubscribe()}})}request(t){return this.requester(t)}},Ub=(()=>{class e{httpClient;constructor(n){this.httpClient=n}create(n){return new th(this.httpClient,n)}static \u0275fac=function(r){return new(r||e)(A(ju))};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();Sy(Gc,{providers:[rv(Hb),ly(),Tb(()=>{let e=I(Ub);return{cache:new Ji,link:e.create({uri:"https://graphqlpokemon.favware.tech/v8"})}})]}).catch(e=>console.error(e));
