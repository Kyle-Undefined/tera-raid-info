var Ub=Object.defineProperty,jb=Object.defineProperties;var Bb=Object.getOwnPropertyDescriptors;var ah=Object.getOwnPropertySymbols;var Vb=Object.prototype.hasOwnProperty,$b=Object.prototype.propertyIsEnumerable;var ch=(e,t,n)=>t in e?Ub(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,R=(e,t)=>{for(var n in t||={})Vb.call(t,n)&&ch(e,n,t[n]);if(ah)for(var n of ah(t))$b.call(t,n)&&ch(e,n,t[n]);return e},ae=(e,t)=>jb(e,Bb(t));function zb(e,t){return Object.is(e,t)}var Ie=null,cs=!1,Jc=1,Tr=Symbol("SIGNAL");function re(e){let t=Ie;return Ie=e,t}function uh(){return Ie}var ls={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function dh(e){if(cs)throw new Error("");if(Ie===null)return;Ie.consumerOnSignalRead(e);let t=Ie.nextProducerIndex++;if(ds(Ie),t<Ie.producerNode.length&&Ie.producerNode[t]!==e&&Ao(Ie)){let n=Ie.producerNode[t];us(n,Ie.producerIndexOfThis[t])}Ie.producerNode[t]!==e&&(Ie.producerNode[t]=e,Ie.producerIndexOfThis[t]=Ao(Ie)?ph(e,Ie,t):0),Ie.producerLastReadVersion[t]=e.version}function qb(){Jc++}function Wb(e){if(!(Ao(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===Jc)){if(!e.producerMustRecompute(e)&&!el(e)){lh(e);return}e.producerRecomputeValue(e),lh(e)}}function fh(e){if(e.liveConsumerNode===void 0)return;let t=cs;cs=!0;try{for(let n of e.liveConsumerNode)n.dirty||Qb(n)}finally{cs=t}}function Gb(){return Ie?.consumerAllowSignalWrites!==!1}function Qb(e){e.dirty=!0,fh(e),e.consumerMarkedDirty?.(e)}function lh(e){e.dirty=!1,e.lastCleanEpoch=Jc}function Xc(e){return e&&(e.nextProducerIndex=0),re(e)}function hh(e,t){if(re(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(Ao(e))for(let n=e.nextProducerIndex;n<e.producerNode.length;n++)us(e.producerNode[n],e.producerIndexOfThis[n]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function el(e){ds(e);for(let t=0;t<e.producerNode.length;t++){let n=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==n.version||(Wb(n),r!==n.version))return!0}return!1}function tl(e){if(ds(e),Ao(e))for(let t=0;t<e.producerNode.length;t++)us(e.producerNode[t],e.producerIndexOfThis[t]);e.producerNode.length=e.producerLastReadVersion.length=e.producerIndexOfThis.length=0,e.liveConsumerNode&&(e.liveConsumerNode.length=e.liveConsumerIndexOfThis.length=0)}function ph(e,t,n){if(mh(e),e.liveConsumerNode.length===0&&gh(e))for(let r=0;r<e.producerNode.length;r++)e.producerIndexOfThis[r]=ph(e.producerNode[r],e,r);return e.liveConsumerIndexOfThis.push(n),e.liveConsumerNode.push(t)-1}function us(e,t){if(mh(e),e.liveConsumerNode.length===1&&gh(e))for(let r=0;r<e.producerNode.length;r++)us(e.producerNode[r],e.producerIndexOfThis[r]);let n=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[n],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[n],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let r=e.liveConsumerIndexOfThis[t],o=e.liveConsumerNode[t];ds(o),o.producerIndexOfThis[r]=t}}function Ao(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function ds(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function mh(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}function gh(e){return e.producerNode!==void 0}function Kb(){throw new Error}var yh=Kb;function Yb(){yh()}function vh(e){yh=e}var Zb=null;function Sh(e,t){Gb()||Yb(),e.equal(e.value,t)||(e.value=t,Jb(e))}var bh=ae(R({},ls),{equal:zb,value:void 0,kind:"signal"});function Jb(e){e.version++,qb(),fh(e),Zb?.()}function U(e){return typeof e=="function"}function Er(e){let n=e(r=>{Error.call(r),r.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var fs=Er(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function Gn(e,t){if(e){let n=e.indexOf(t);0<=n&&e.splice(n,1)}}var Se=class e{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let i of n)i.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(U(r))try{r()}catch(i){t=i instanceof fs?i.errors:[i]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let i of o)try{Dh(i)}catch(s){t=t??[],s instanceof fs?t=[...t,...s.errors]:t.push(s)}}if(t)throw new fs(t)}}add(t){var n;if(t&&t!==this)if(this.closed)Dh(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}}_hasParent(t){let{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){let{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&Gn(n,t)}remove(t){let{_finalizers:n}=this;n&&Gn(n,t),t instanceof e&&t._removeParent(this)}};Se.EMPTY=(()=>{let e=new Se;return e.closed=!0,e})();var nl=Se.EMPTY;function hs(e){return e instanceof Se||e&&"closed"in e&&U(e.remove)&&U(e.add)&&U(e.unsubscribe)}function Dh(e){U(e)?e():e.unsubscribe()}var wt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Cr={setTimeout(e,t,...n){let{delegate:r}=Cr;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){let{delegate:t}=Cr;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function ps(e){Cr.setTimeout(()=>{let{onUnhandledError:t}=wt;if(t)t(e);else throw e})}function Fo(){}var wh=rl("C",void 0,void 0);function Th(e){return rl("E",void 0,e)}function Eh(e){return rl("N",e,void 0)}function rl(e,t,n){return{kind:e,value:t,error:n}}var Qn=null;function Ir(e){if(wt.useDeprecatedSynchronousErrorHandling){let t=!Qn;if(t&&(Qn={errorThrown:!1,error:null}),e(),t){let{errorThrown:n,error:r}=Qn;if(Qn=null,n)throw r}}else e()}function Ch(e){wt.useDeprecatedSynchronousErrorHandling&&Qn&&(Qn.errorThrown=!0,Qn.error=e)}var Kn=class extends Se{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,hs(t)&&t.add(this)):this.destination=tD}static create(t,n,r){return new Pr(t,n,r)}next(t){this.isStopped?il(Eh(t),this):this._next(t)}error(t){this.isStopped?il(Th(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?il(wh,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Xb=Function.prototype.bind;function ol(e,t){return Xb.call(e,t)}var sl=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){ms(r)}}error(t){let{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){ms(r)}else ms(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){ms(n)}}},Pr=class extends Kn{constructor(t,n,r){super();let o;if(U(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&wt.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&ol(t.next,i),error:t.error&&ol(t.error,i),complete:t.complete&&ol(t.complete,i)}):o=t}this.destination=new sl(o)}};function ms(e){wt.useDeprecatedSynchronousErrorHandling?Ch(e):ps(e)}function eD(e){throw e}function il(e,t){let{onStoppedNotification:n}=wt;n&&Cr.setTimeout(()=>n(e,t))}var tD={closed:!0,next:Fo,error:eD,complete:Fo};var Kt=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Je(e){return e}function al(...e){return cl(e)}function cl(e){return e.length===0?Je:e.length===1?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}var z=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){let r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){let i=rD(n)?n:new Pr(n,r,o);return Ir(()=>{let{operator:s,source:c}=this;i.add(s?s.call(i,c):c?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return r=Ih(r),new r((o,i)=>{let s=new Pr({next:c=>{try{n(c)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(n)}[Kt](){return this}pipe(...n){return cl(n)(this)}toPromise(n){return n=Ih(n),new n((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function Ih(e){var t;return(t=e??wt.Promise)!==null&&t!==void 0?t:Promise}function nD(e){return e&&U(e.next)&&U(e.error)&&U(e.complete)}function rD(e){return e&&e instanceof Kn||nD(e)&&hs(e)}function ll(e){return U(e?.lift)}function K(e){return t=>{if(ll(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Y(e,t,n,r,o){return new ul(e,t,n,r,o)}var ul=class extends Kn{constructor(t,n,r,o,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(c){try{n(c)}catch(l){t.error(l)}}:super._next,this._error=o?function(c){try{o(c)}catch(l){t.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(c){t.error(c)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};function Mr(){return K((e,t)=>{let n=null;e._refCount++;let r=Y(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount){n=null;return}let o=e._connection,i=n;n=null,o&&(!i||o===i)&&o.unsubscribe(),t.unsubscribe()});e.subscribe(r),r.closed||(n=e.connect())})}var Rr=class extends z{constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,ll(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){let t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new Se;let n=this.getSubject();t.add(this.source.subscribe(Y(n,void 0,()=>{this._teardown(),n.complete()},r=>{this._teardown(),n.error(r)},()=>this._teardown()))),t.closed&&(this._connection=null,t=Se.EMPTY)}return t}refCount(){return Mr()(this)}};var Ph=Er(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var He=(()=>{class e extends z{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let r=new gs(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Ph}next(n){Ir(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(n)}})}error(n){Ir(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){Ir(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:r,isStopped:o,observers:i}=this;return r||o?nl:(this.currentObservers=null,i.push(n),new Se(()=>{this.currentObservers=null,Gn(i,n)}))}_checkFinalizedStatuses(n){let{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){let n=new z;return n.source=this,n}}return e.create=(t,n)=>new gs(t,n),e})(),gs=class extends He{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,t)}error(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,t)}complete(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)}_subscribe(t){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&r!==void 0?r:nl}};var ye=class extends He{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){let{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}};var dl={now(){return(dl.delegate||Date).now()},delegate:void 0};var ys=class extends Se{constructor(t,n){super()}schedule(t,n=0){return this}};var Lo={setInterval(e,t,...n){let{delegate:r}=Lo;return r?.setInterval?r.setInterval(e,t,...n):setInterval(e,t,...n)},clearInterval(e){let{delegate:t}=Lo;return(t?.clearInterval||clearInterval)(e)},delegate:void 0};var vs=class extends ys{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){var r;if(this.closed)return this;this.state=t;let o=this.id,i=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(i,o,n)),this.pending=!0,this.delay=n,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(i,this.id,n),this}requestAsyncId(t,n,r=0){return Lo.setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,n,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return n;n!=null&&Lo.clearInterval(n)}execute(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let r=this._execute(t,n);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let r=!1,o;try{this.work(t)}catch(i){r=!0,o=i||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){let{id:t,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,Gn(r,this),t!=null&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,super.unsubscribe()}}};var _r=class e{constructor(t,n=e.now){this.schedulerActionCtor=t,this.now=n}schedule(t,n=0,r){return new this.schedulerActionCtor(this,t).schedule(r,n)}};_r.now=dl.now;var Ss=class extends _r{constructor(t,n=_r.now){super(t,n),this.actions=[],this._active=!1}flush(t){let{actions:n}=this;if(this._active){n.push(t);return}let r;this._active=!0;do if(r=t.execute(t.state,t.delay))break;while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}}};var bs=class extends vs{constructor(t,n){super(t,n),this.scheduler=t,this.work=n}schedule(t,n=0){return n>0?super.schedule(t,n):(this.delay=n,this.state=t,this.scheduler.flush(this),this)}execute(t,n){return n>0||this.closed?super.execute(t,n):this._execute(t,n)}requestAsyncId(t,n,r=0){return r!=null&&r>0||r==null&&this.delay>0?super.requestAsyncId(t,n,r):(t.flush(this),0)}};var Ds=class extends Ss{};var fl=new Ds(bs);var qe=new z(e=>e.complete());function Mh(e){return e&&U(e.schedule)}function Rh(e){return e[e.length-1]}function _h(e){return U(Rh(e))?e.pop():void 0}function yn(e){return Mh(Rh(e))?e.pop():void 0}var hl=function(e,t){return hl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},hl(e,t)};function xe(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");hl(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var S=function(){return S=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},S.apply(this,arguments)};function We(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Xe(e,t,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function c(d){try{u(r.next(d))}catch(f){s(f)}}function l(d){try{u(r.throw(d))}catch(f){s(f)}}function u(d){d.done?i(d.value):o(d.value).then(c,l)}u((r=r.apply(e,t||[])).next())})}function Tt(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=c(0),s.throw=c(1),s.return=c(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function c(u){return function(d){return l([u,d])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,u[0]&&(n=0)),n;)try{if(r=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(d){u=[6,d],o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function xh(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function be(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function Yn(e){return this instanceof Yn?(this.v=e,this):new Yn(e)}function kh(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),c("next"),c("throw"),c("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(p){return function(g){return Promise.resolve(g).then(p,f)}}function c(p,g){r[p]&&(o[p]=function(v){return new Promise(function(b,y){i.push([p,v,b,y])>1||l(p,v)})},g&&(o[p]=g(o[p])))}function l(p,g){try{u(r[p](g))}catch(v){h(i[0][3],v)}}function u(p){p.value instanceof Yn?Promise.resolve(p.value.v).then(d,f):h(i[0][2],p)}function d(p){l("next",p)}function f(p){l("throw",p)}function h(p,g){p(g),i.shift(),i.length&&l(i[0][0],i[0][1])}}function Nh(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof xh=="function"?xh(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(c,l){s=e[i](s),o(c,l,s.done,s.value)})}}function o(i,s,c,l){Promise.resolve(l).then(function(u){i({value:u,done:c})},s)}}var ws=e=>e&&typeof e.length=="number"&&typeof e!="function";function Ts(e){return U(e?.then)}function Es(e){return U(e[Kt])}function Cs(e){return Symbol.asyncIterator&&U(e?.[Symbol.asyncIterator])}function Is(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function oD(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ps=oD();function Ms(e){return U(e?.[Ps])}function Rs(e){return kh(this,arguments,function*(){let n=e.getReader();try{for(;;){let{value:r,done:o}=yield Yn(n.read());if(o)return yield Yn(void 0);yield yield Yn(r)}}finally{n.releaseLock()}})}function _s(e){return U(e?.getReader)}function ke(e){if(e instanceof z)return e;if(e!=null){if(Es(e))return iD(e);if(ws(e))return sD(e);if(Ts(e))return aD(e);if(Cs(e))return Oh(e);if(Ms(e))return cD(e);if(_s(e))return lD(e)}throw Is(e)}function iD(e){return new z(t=>{let n=e[Kt]();if(U(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function sD(e){return new z(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function aD(e){return new z(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,ps)})}function cD(e){return new z(t=>{for(let n of e)if(t.next(n),t.closed)return;t.complete()})}function Oh(e){return new z(t=>{uD(e,t).catch(n=>t.error(n))})}function lD(e){return Oh(Rs(e))}function uD(e,t){var n,r,o,i;return Xe(this,void 0,void 0,function*(){try{for(n=Nh(e);r=yield n.next(),!r.done;){let s=r.value;if(t.next(s),t.closed)return}}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})}function Ge(e,t,n,r=0,o=!1){let i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function Zn(e,t=0){return K((n,r)=>{n.subscribe(Y(r,o=>Ge(r,e,()=>r.next(o),t),()=>Ge(r,e,()=>r.complete(),t),o=>Ge(r,e,()=>r.error(o),t)))})}function xs(e,t=0){return K((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function Ah(e,t){return ke(e).pipe(xs(t),Zn(t))}function Fh(e,t){return ke(e).pipe(xs(t),Zn(t))}function Lh(e,t){return new z(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function Hh(e,t){return new z(n=>{let r;return Ge(n,t,()=>{r=e[Ps](),Ge(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){n.error(s);return}i?n.complete():n.next(o)},0,!0)}),()=>U(r?.return)&&r.return()})}function ks(e,t){if(!e)throw new Error("Iterable cannot be null");return new z(n=>{Ge(n,t,()=>{let r=e[Symbol.asyncIterator]();Ge(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function Uh(e,t){return ks(Rs(e),t)}function jh(e,t){if(e!=null){if(Es(e))return Ah(e,t);if(ws(e))return Lh(e,t);if(Ts(e))return Fh(e,t);if(Cs(e))return ks(e,t);if(Ms(e))return Hh(e,t);if(_s(e))return Uh(e,t)}throw Is(e)}function fe(e,t){return t?jh(e,t):ke(e)}function H(...e){let t=yn(e);return fe(e,t)}function xr(e,t){let n=U(e)?e:()=>e,r=o=>o.error(n());return new z(t?o=>t.schedule(r,0,o):r)}function pl(e){return!!e&&(e instanceof z||U(e.lift)&&U(e.subscribe))}var Yt=Er(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"});function F(e,t){return K((n,r)=>{let o=0;n.subscribe(Y(r,i=>{r.next(e.call(t,i,o++))}))})}var{isArray:dD}=Array;function fD(e,t){return dD(t)?e(...t):e(t)}function Bh(e){return F(t=>fD(e,t))}var{isArray:hD}=Array,{getPrototypeOf:pD,prototype:mD,keys:gD}=Object;function Vh(e){if(e.length===1){let t=e[0];if(hD(t))return{args:t,keys:null};if(yD(t)){let n=gD(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}function yD(e){return e&&typeof e=="object"&&pD(e)===mD}function $h(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function Ns(...e){let t=yn(e),n=_h(e),{args:r,keys:o}=Vh(e);if(r.length===0)return fe([],t);let i=new z(vD(r,t,o?s=>$h(o,s):Je));return n?i.pipe(Bh(n)):i}function vD(e,t,n=Je){return r=>{zh(t,()=>{let{length:o}=e,i=new Array(o),s=o,c=o;for(let l=0;l<o;l++)zh(t,()=>{let u=fe(e[l],t),d=!1;u.subscribe(Y(r,f=>{i[l]=f,d||(d=!0,c--),c||r.next(n(i.slice()))},()=>{--s||r.complete()}))},r)},r)}}function zh(e,t,n){e?Ge(n,e,t):t()}function qh(e,t,n,r,o,i,s,c){let l=[],u=0,d=0,f=!1,h=()=>{f&&!l.length&&!u&&t.complete()},p=v=>u<r?g(v):l.push(v),g=v=>{i&&t.next(v),u++;let b=!1;ke(n(v,d++)).subscribe(Y(t,y=>{o?.(y),i?p(y):t.next(y)},()=>{b=!0},void 0,()=>{if(b)try{for(u--;l.length&&u<r;){let y=l.shift();s?Ge(t,s,()=>g(y)):g(y)}h()}catch(y){t.error(y)}}))};return e.subscribe(Y(t,p,()=>{f=!0,h()})),()=>{c?.()}}function Pe(e,t,n=1/0){return U(t)?Pe((r,o)=>F((i,s)=>t(r,i,o,s))(ke(e(r,o))),n):(typeof t=="number"&&(n=t),K((r,o)=>qh(r,o,e,n)))}function ml(e=1/0){return Pe(Je,e)}function Wh(){return ml(1)}function kr(...e){return Wh()(fe(e,yn(e)))}function Os(e){return new z(t=>{ke(e()).subscribe(t)})}function et(e,t){return K((n,r)=>{let o=0;n.subscribe(Y(r,i=>e.call(t,i,o++)&&r.next(i)))})}function vn(e){return K((t,n)=>{let r=null,o=!1,i;r=t.subscribe(Y(n,void 0,void 0,s=>{i=ke(e(s,vn(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function Gh(e,t,n,r,o){return(i,s)=>{let c=n,l=t,u=0;i.subscribe(Y(s,d=>{let f=u++;l=c?e(l,d,f):(c=!0,d),r&&s.next(l)},o&&(()=>{c&&s.next(l),s.complete()})))}}function Sn(e,t){return U(t)?Pe(e,t,1):Pe(e,1)}function bn(e){return K((t,n)=>{let r=!1;t.subscribe(Y(n,o=>{r=!0,n.next(o)},()=>{r||n.next(e),n.complete()}))})}function Zt(e){return e<=0?()=>qe:K((t,n)=>{let r=0;t.subscribe(Y(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function As(e=SD){return K((t,n)=>{let r=!1;t.subscribe(Y(n,o=>{r=!0,n.next(o)},()=>r?n.complete():n.error(e())))})}function SD(){return new Yt}function Jn(e){return K((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}function Jt(e,t){let n=arguments.length>=2;return r=>r.pipe(e?et((o,i)=>e(o,i,r)):Je,Zt(1),n?bn(t):As(()=>new Yt))}function Nr(e){return e<=0?()=>qe:K((t,n)=>{let r=[];t.subscribe(Y(n,o=>{r.push(o),e<r.length&&r.shift()},()=>{for(let o of r)n.next(o);n.complete()},void 0,()=>{r=null}))})}function gl(e,t){let n=arguments.length>=2;return r=>r.pipe(e?et((o,i)=>e(o,i,r)):Je,Nr(1),n?bn(t):As(()=>new Yt))}function yl(e,t){return K(Gh(e,t,arguments.length>=2,!0))}function Ho(...e){let t=yn(e);return K((n,r)=>{(t?kr(e,n,t):kr(e,n)).subscribe(r)})}function tt(e,t){return K((n,r)=>{let o=null,i=0,s=!1,c=()=>s&&!o&&r.complete();n.subscribe(Y(r,l=>{o?.unsubscribe();let u=0,d=i++;ke(e(l,d)).subscribe(o=Y(r,f=>r.next(t?t(l,f,d,u++):f),()=>{o=null,c()}))},()=>{s=!0,c()}))})}function vl(e){return K((t,n)=>{ke(e).subscribe(Y(n,()=>n.complete(),Fo)),!n.closed&&t.subscribe(n)})}function Ne(e,t,n){let r=U(e)||t||n?{next:e,error:t,complete:n}:e;return r?K((o,i)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let c=!0;o.subscribe(Y(i,l=>{var u;(u=r.next)===null||u===void 0||u.call(r,l),i.next(l)},()=>{var l;c=!1,(l=r.complete)===null||l===void 0||l.call(r),i.complete()},l=>{var u;c=!1,(u=r.error)===null||u===void 0||u.call(r,l),i.error(l)},()=>{var l,u;c&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):Je}var N=class extends Error{code;constructor(t,n){super(ca(t,n)),this.code=t}};function ca(e,t){return`${`NG0${Math.abs(e)}`}${t?": "+t:""}`}var kp=Symbol("InputSignalNode#UNSET"),bD=ae(R({},bh),{transformFn:void 0,applyValueToInputSignal(e,t){Sh(e,t)}});function Np(e,t){let n=Object.create(bD);n.value=e,n.transformFn=t?.transform;function r(){if(dh(n),n.value===kp)throw new N(-950,!1);return n.value}return r[Tr]=n,r}function la(e){return{toString:e}.toString()}function de(e){for(let t in e)if(e[t]===de)return t;throw Error("Could not find renamed property on target object.")}function rt(e){if(typeof e=="string")return e;if(Array.isArray(e))return"["+e.map(rt).join(", ")+"]";if(e==null)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;let t=e.toString();if(t==null)return""+t;let n=t.indexOf(`
`);return n===-1?t:t.substring(0,n)}function Qh(e,t){return e==null||e===""?t===null?"":t:t==null||t===""?e:e+" "+t}var DD=de({__forward_ref__:de});function Op(e){return e.__forward_ref__=Op,e.toString=function(){return rt(this())},e}function pt(e){return Ap(e)?e():e}function Ap(e){return typeof e=="function"&&e.hasOwnProperty(DD)&&e.__forward_ref__===Op}function k(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function zr(e){return{providers:e.providers||[],imports:e.imports||[]}}function ua(e){return Kh(e,Lp)||Kh(e,Hp)}function Fp(e){return ua(e)!==null}function Kh(e,t){return e.hasOwnProperty(t)?e[t]:null}function wD(e){let t=e&&(e[Lp]||e[Hp]);return t||null}function Yh(e){return e&&(e.hasOwnProperty(Zh)||e.hasOwnProperty(TD))?e[Zh]:null}var Lp=de({\u0275prov:de}),Zh=de({\u0275inj:de}),Hp=de({ngInjectableDef:de}),TD=de({ngInjectorDef:de}),O=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(t,n){this._desc=t,this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=k({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Up(e){return e&&!!e.\u0275providers}var ED=de({\u0275cmp:de}),CD=de({\u0275dir:de}),ID=de({\u0275pipe:de}),PD=de({\u0275mod:de}),Bs=de({\u0275fac:de}),Vo=de({__NG_ELEMENT_ID__:de}),Jh=de({__NG_ENV_ID__:de});function MD(e){return typeof e=="string"?e:e==null?"":String(e)}function RD(e){return typeof e=="function"?e.name||e.toString():typeof e=="object"&&e!=null&&typeof e.type=="function"?e.type.name||e.type.toString():MD(e)}function _D(e,t){let n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new N(-200,e)}function iu(e,t){throw new N(-201,!1)}var q=function(e){return e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}(q||{}),Il;function jp(){return Il}function ht(e){let t=Il;return Il=e,t}function Bp(e,t,n){let r=ua(e);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(n&q.Optional)return null;if(t!==void 0)return t;iu(e,"Injector")}var xD={},$o=xD,kD="__NG_DI_FLAG__",Vs="ngTempTokenPath",ND="ngTokenPath",OD=/\n/gm,AD="\u0275",Xh="__source",Lr;function FD(){return Lr}function Dn(e){let t=Lr;return Lr=e,t}function LD(e,t=q.Default){if(Lr===void 0)throw new N(-203,!1);return Lr===null?Bp(e,void 0,t):Lr.get(e,t&q.Optional?null:void 0,t)}function A(e,t=q.Default){return(jp()||LD)(pt(e),t)}function P(e,t=q.Default){return A(e,da(t))}function da(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function Pl(e){let t=[];for(let n=0;n<e.length;n++){let r=pt(e[n]);if(Array.isArray(r)){if(r.length===0)throw new N(900,!1);let o,i=q.Default;for(let s=0;s<r.length;s++){let c=r[s],l=HD(c);typeof l=="number"?l===-1?o=c.token:i|=l:o=c}t.push(A(o,i))}else t.push(A(r))}return t}function HD(e){return e[kD]}function UD(e,t,n,r){let o=e[Vs];throw t[Xh]&&o.unshift(t[Xh]),e.message=jD(`
`+e.message,o,n,r),e[ND]=o,e[Vs]=null,e}function jD(e,t,n,r=null){e=e&&e.charAt(0)===`
`&&e.charAt(1)==AD?e.slice(2):e;let o=rt(t);if(Array.isArray(t))o=t.map(rt).join(" -> ");else if(typeof t=="object"){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let c=t[s];i.push(s+":"+(typeof c=="string"?JSON.stringify(c):rt(c)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(OD,`
  `)}`}function Ur(e,t){let n=e.hasOwnProperty(Bs);return n?e[Bs]:null}function su(e,t){e.forEach(n=>Array.isArray(n)?su(n,t):t(n))}function Vp(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function $s(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}var zo={},Ft=[],jr=new O(""),$p=new O("",-1),zp=new O(""),zs=class{get(t,n=$o){if(n===$o){let r=new Error(`NullInjectorError: No provider for ${rt(t)}!`);throw r.name="NullInjectorError",r}return n}};function qp(e,t){let n=e[PD]||null;if(!n&&t===!0)throw new Error(`Type ${rt(e)} does not have '\u0275mod' property.`);return n}function tr(e){return e[ED]||null}function Wp(e){return e[CD]||null}function Gp(e){return e[ID]||null}function Qp(e){let t=tr(e)||Wp(e)||Gp(e);return t!==null&&t.standalone}function Xo(e){return{\u0275providers:e}}function BD(...e){return{\u0275providers:Kp(!0,e),\u0275fromNgModule:!0}}function Kp(e,...t){let n=[],r=new Set,o,i=s=>{n.push(s)};return su(t,s=>{let c=s;Ml(c,i,[],r)&&(o||=[],o.push(c))}),o!==void 0&&Yp(o,i),n}function Yp(e,t){for(let n=0;n<e.length;n++){let{ngModule:r,providers:o}=e[n];au(o,i=>{t(i,r)})}}function Ml(e,t,n,r){if(e=pt(e),!e)return!1;let o=null,i=Yh(e),s=!i&&tr(e);if(!i&&!s){let l=e.ngModule;if(i=Yh(l),i)o=l;else return!1}else{if(s&&!s.standalone)return!1;o=e}let c=r.has(o);if(s){if(c)return!1;if(r.add(o),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let u of l)Ml(u,t,n,r)}}else if(i){if(i.imports!=null&&!c){r.add(o);let u;try{su(i.imports,d=>{Ml(d,t,n,r)&&(u||=[],u.push(d))})}finally{}u!==void 0&&Yp(u,t)}if(!c){let u=Ur(o)||(()=>new o);t({provide:o,useFactory:u,deps:Ft},o),t({provide:zp,useValue:o,multi:!0},o),t({provide:jr,useValue:()=>A(o),multi:!0},o)}let l=i.providers;if(l!=null&&!c){let u=e;au(l,d=>{t(d,u)})}}else return!1;return o!==e&&e.providers!==void 0}function au(e,t){for(let n of e)Up(n)&&(n=n.\u0275providers),Array.isArray(n)?au(n,t):t(n)}var VD=de({provide:String,useValue:de});function Zp(e){return e!==null&&typeof e=="object"&&VD in e}function $D(e){return!!(e&&e.useExisting)}function zD(e){return!!(e&&e.useFactory)}function Rl(e){return typeof e=="function"}var fa=new O(""),Fs={},qD={},Sl;function cu(){return Sl===void 0&&(Sl=new zs),Sl}var Qe=class{},qo=class extends Qe{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,xl(t,s=>this.processProvider(s)),this.records.set($p,Or(void 0,this)),o.has("environment")&&this.records.set(Qe,Or(void 0,this));let i=this.records.get(fa);i!=null&&typeof i.value=="string"&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(zp,Ft,q.Self))}destroy(){jo(this),this._destroyed=!0;let t=re(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of n)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),re(t)}}onDestroy(t){return jo(this),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){jo(this);let n=Dn(this),r=ht(void 0),o;try{return t()}finally{Dn(n),ht(r)}}get(t,n=$o,r=q.Default){if(jo(this),t.hasOwnProperty(Jh))return t[Jh](this);r=da(r);let o,i=Dn(this),s=ht(void 0);try{if(!(r&q.SkipSelf)){let l=this.records.get(t);if(l===void 0){let u=ZD(t)&&ua(t);u&&this.injectableDefInScope(u)?l=Or(_l(t),Fs):l=null,this.records.set(t,l)}if(l!=null)return this.hydrate(t,l)}let c=r&q.Self?cu():this.parent;return n=r&q.Optional&&n===$o?null:n,c.get(t,n)}catch(c){if(c.name==="NullInjectorError"){if((c[Vs]=c[Vs]||[]).unshift(rt(t)),i)throw c;return UD(c,t,"R3InjectorError",this.source)}else throw c}finally{ht(s),Dn(i)}}resolveInjectorInitializers(){let t=re(null),n=Dn(this),r=ht(void 0),o;try{let i=this.get(jr,Ft,q.Self);for(let s of i)s()}finally{Dn(n),ht(r),re(t)}}toString(){let t=[],n=this.records;for(let r of n.keys())t.push(rt(r));return`R3Injector[${t.join(", ")}]`}processProvider(t){t=pt(t);let n=Rl(t)?t:pt(t&&t.provide),r=GD(t);if(!Rl(t)&&t.multi===!0){let o=this.records.get(n);o||(o=Or(void 0,Fs,!0),o.factory=()=>Pl(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){let r=re(null);try{return n.value===Fs&&(n.value=qD,n.value=n.factory()),typeof n.value=="object"&&n.value&&YD(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{re(r)}}injectableDefInScope(t){if(!t.providedIn)return!1;let n=pt(t.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(t){let n=this._onDestroyHooks.indexOf(t);n!==-1&&this._onDestroyHooks.splice(n,1)}};function _l(e){let t=ua(e),n=t!==null?t.factory:Ur(e);if(n!==null)return n;if(e instanceof O)throw new N(204,!1);if(e instanceof Function)return WD(e);throw new N(204,!1)}function WD(e){if(e.length>0)throw new N(204,!1);let n=wD(e);return n!==null?()=>n.factory(e):()=>new e}function GD(e){if(Zp(e))return Or(void 0,e.useValue);{let t=QD(e);return Or(t,Fs)}}function QD(e,t,n){let r;if(Rl(e)){let o=pt(e);return Ur(o)||_l(o)}else if(Zp(e))r=()=>pt(e.useValue);else if(zD(e))r=()=>e.useFactory(...Pl(e.deps||[]));else if($D(e))r=()=>A(pt(e.useExisting));else{let o=pt(e&&(e.useClass||e.provide));if(KD(e))r=()=>new o(...Pl(e.deps));else return Ur(o)||_l(o)}return r}function jo(e){if(e.destroyed)throw new N(205,!1)}function Or(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function KD(e){return!!e.deps}function YD(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function ZD(e){return typeof e=="function"||typeof e=="object"&&e instanceof O}function xl(e,t){for(let n of e)Array.isArray(n)?xl(n,t):n&&Up(n)?xl(n.\u0275providers,t):t(n)}function it(e,t){e instanceof qo&&jo(e);let n,r=Dn(e),o=ht(void 0);try{return t()}finally{Dn(r),ht(o)}}function JD(){return jp()!==void 0||FD()!=null}function XD(e){return typeof e=="function"}var tn=0,X=1,V=2,Be=3,Ct=4,Mt=5,qs=6,Ws=7,Ht=8,Wo=9,Tn=10,It=11,Go=12,ep=13,ei=14,Ut=15,Qo=16,Ar=17,ha=18,pa=19,Jp=20,wn=21,bl=22,Gs=23,ot=24,En=25,Xp=1;var nr=7,Qs=8,Ks=9,gt=10;function Xn(e){return Array.isArray(e)&&typeof e[Xp]=="object"}function nn(e){return Array.isArray(e)&&e[Xp]===!0}function em(e){return(e.flags&4)!==0}function qr(e){return e.componentOffset>-1}function tm(e){return(e.flags&1)===1}function Wr(e){return!!e.template}function Ys(e){return(e[V]&512)!==0}function ti(e){return(e[V]&256)===256}var kl=class{previousValue;currentValue;firstChange;constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}};function nm(e,t,n,r){t!==null?t.applyValueToInputSignal(t,r):e[n]=r}var lu=(()=>{let e=()=>rm;return e.ngInherit=!0,e})();function rm(e){return e.type.prototype.ngOnChanges&&(e.setInput=tw),ew}function ew(){let e=im(this),t=e?.current;if(t){let n=e.previous;if(n===zo)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function tw(e,t,n,r,o){let i=this.declaredInputs[r],s=im(e)||nw(e,{previous:zo,current:null}),c=s.current||(s.current={}),l=s.previous,u=l[i];c[i]=new kl(u&&u.currentValue,n,l===zo),nm(e,t,o,n)}var om="__ngSimpleChanges__";function im(e){return e[om]||null}function nw(e,t){return e[om]=t}var tp=null;var mt=function(e,t,n){tp?.(e,t,n)},rw="svg",ow="math";function Xt(e){for(;Array.isArray(e);)e=e[tn];return e}function rn(e,t){return Xt(t[e.index])}function iw(e,t){return e.data[t]}function Cn(e,t){let n=t[e];return Xn(n)?n:n[tn]}function uu(e){return(e[V]&128)===128}function sw(e){return nn(e[Be])}function np(e,t){return t==null?null:e[t]}function sm(e){e[Ar]=0}function du(e){e[V]&1024||(e[V]|=1024,uu(e)&&ga(e))}function ma(e){return!!(e[V]&9216||e[ot]?.dirty)}function Nl(e){e[Tn].changeDetectionScheduler?.notify(9),e[V]&64&&(e[V]|=1024),ma(e)&&ga(e)}function ga(e){e[Tn].changeDetectionScheduler?.notify(0);let t=rr(e);for(;t!==null&&!(t[V]&8192||(t[V]|=8192,!uu(t)));)t=rr(t)}function am(e,t){if(ti(e))throw new N(911,!1);e[wn]===null&&(e[wn]=[]),e[wn].push(t)}function aw(e,t){if(e[wn]===null)return;let n=e[wn].indexOf(t);n!==-1&&e[wn].splice(n,1)}function rr(e){let t=e[Be];return nn(t)?t[Be]:t}function cw(e){return e[Ws]??=[]}function lw(e){return e.cleanup??=[]}var ce={lFrame:mm(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Ol=!1;function uw(){return ce.lFrame.elementDepthCount}function dw(){ce.lFrame.elementDepthCount++}function fw(){ce.lFrame.elementDepthCount--}function cm(){return ce.bindingsEnabled}function hw(){return ce.skipHydrationRootTNode!==null}function pw(e){return ce.skipHydrationRootTNode===e}function mw(){ce.skipHydrationRootTNode=null}function Pt(){return ce.lFrame.lView}function ya(){return ce.lFrame.tView}function Rn(){let e=lm();for(;e!==null&&e.type===64;)e=e.parent;return e}function lm(){return ce.lFrame.currentTNode}function gw(){let e=ce.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function va(e,t){let n=ce.lFrame;n.currentTNode=e,n.isParent=t}function um(){return ce.lFrame.isParent}function yw(){ce.lFrame.isParent=!1}function dm(){return Ol}function rp(e){let t=Ol;return Ol=e,t}function vw(e){return ce.lFrame.bindingIndex=e}function Sw(){return ce.lFrame.inI18n}function bw(e,t){let n=ce.lFrame;n.bindingIndex=n.bindingRootIndex=e,Al(t)}function Dw(){return ce.lFrame.currentDirectiveIndex}function Al(e){ce.lFrame.currentDirectiveIndex=e}function fm(e){ce.lFrame.currentQueryIndex=e}function ww(e){let t=e[X];return t.type===2?t.declTNode:t.type===1?e[Mt]:null}function hm(e,t,n){if(n&q.SkipSelf){let o=t,i=e;for(;o=o.parent,o===null&&!(n&q.Host);)if(o=ww(i),o===null||(i=i[ei],o.type&10))break;if(o===null)return!1;t=o,e=i}let r=ce.lFrame=pm();return r.currentTNode=t,r.lView=e,!0}function fu(e){let t=pm(),n=e[X];ce.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function pm(){let e=ce.lFrame,t=e===null?null:e.child;return t===null?mm(e):t}function mm(e){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=t),t}function gm(){let e=ce.lFrame;return ce.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var ym=gm;function hu(){let e=gm();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Tw(){return ce.lFrame.selectedIndex}function or(e){ce.lFrame.selectedIndex=e}function Ew(){return ce.lFrame.currentNamespace}var vm=!0;function Sm(){return vm}function bm(e){vm=e}function Cw(e,t,n){let{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){let s=rm(t);(n.preOrderHooks??=[]).push(e,s),(n.preOrderCheckHooks??=[]).push(e,s)}o&&(n.preOrderHooks??=[]).push(0-e,o),i&&((n.preOrderHooks??=[]).push(e,i),(n.preOrderCheckHooks??=[]).push(e,i))}function Dm(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){let i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:c,ngAfterViewInit:l,ngAfterViewChecked:u,ngOnDestroy:d}=i;s&&(e.contentHooks??=[]).push(-n,s),c&&((e.contentHooks??=[]).push(n,c),(e.contentCheckHooks??=[]).push(n,c)),l&&(e.viewHooks??=[]).push(-n,l),u&&((e.viewHooks??=[]).push(n,u),(e.viewCheckHooks??=[]).push(n,u)),d!=null&&(e.destroyHooks??=[]).push(n,d)}}function Ls(e,t,n){wm(e,t,3,n)}function Hs(e,t,n,r){(e[V]&3)===n&&wm(e,t,n,r)}function Dl(e,t){let n=e[V];(n&3)===t&&(n&=16383,n+=1,e[V]=n)}function wm(e,t,n,r){let o=r!==void 0?e[Ar]&65535:0,i=r??-1,s=t.length-1,c=0;for(let l=o;l<s;l++)if(typeof t[l+1]=="number"){if(c=t[l],r!=null&&c>=r)break}else t[l]<0&&(e[Ar]+=65536),(c<i||i==-1)&&(Iw(e,n,t,l),e[Ar]=(e[Ar]&4294901760)+l+2),l++}function op(e,t){mt(4,e,t);let n=re(null);try{t.call(e)}finally{re(n),mt(5,e,t)}}function Iw(e,t,n,r){let o=n[r]<0,i=n[r+1],s=o?-n[r]:n[r],c=e[s];o?e[V]>>14<e[Ar]>>16&&(e[V]&3)===t&&(e[V]+=16384,op(c,i)):op(c,i)}var Hr=-1,Ko=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(t,n,r){this.factory=t,this.canSeeViewProviders=n,this.injectImpl=r}};function Pw(e){return e instanceof Ko}function Mw(e){return(e.flags&8)!==0}function Rw(e){return(e.flags&16)!==0}function _w(e,t,n){let r=0;for(;r<n.length;){let o=n[r];if(typeof o=="number"){if(o!==0)break;r++;let i=n[r++],s=n[r++],c=n[r++];e.setAttribute(t,s,c,i)}else{let i=o,s=n[++r];kw(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function xw(e){return e===3||e===4||e===6}function kw(e){return e.charCodeAt(0)===64}function Zs(e,t){if(!(t===null||t.length===0))if(e===null||e.length===0)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){let o=t[r];typeof o=="number"?n=o:n===0||(n===-1||n===2?ip(e,n,o,null,t[++r]):ip(e,n,o,null,null))}}return e}function ip(e,t,n,r,o){let i=0,s=e.length;if(t===-1)s=-1;else for(;i<e.length;){let c=e[i++];if(typeof c=="number"){if(c===t){s=-1;break}else if(c>t){s=i-1;break}}}for(;i<e.length;){let c=e[i];if(typeof c=="number")break;if(c===n){if(r===null){o!==null&&(e[i+1]=o);return}else if(r===e[i+1]){e[i+2]=o;return}}i++,r!==null&&i++,o!==null&&i++}s!==-1&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),r!==null&&e.splice(i++,0,r),o!==null&&e.splice(i++,0,o)}var wl={},Fl=class{injector;parentInjector;constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){r=da(r);let o=this.injector.get(t,wl,r);return o!==wl||n===wl?o:this.parentInjector.get(t,n,r)}};function Tm(e){return e!==Hr}function Js(e){return e&32767}function Nw(e){return e>>16}function Xs(e,t){let n=Nw(e),r=t;for(;n>0;)r=r[ei],n--;return r}var Ll=!0;function sp(e){let t=Ll;return Ll=e,t}var Ow=256,Em=Ow-1,Cm=5,Aw=0,Lt={};function Fw(e,t,n){let r;typeof n=="string"?r=n.charCodeAt(0)||0:n.hasOwnProperty(Vo)&&(r=n[Vo]),r==null&&(r=n[Vo]=Aw++);let o=r&Em,i=1<<o;t.data[e+(o>>Cm)]|=i}function Im(e,t){let n=Pm(e,t);if(n!==-1)return n;let r=t[X];r.firstCreatePass&&(e.injectorIndex=t.length,Tl(r.data,e),Tl(t,null),Tl(r.blueprint,null));let o=pu(e,t),i=e.injectorIndex;if(Tm(o)){let s=Js(o),c=Xs(o,t),l=c[X].data;for(let u=0;u<8;u++)t[i+u]=c[s+u]|l[s+u]}return t[i+8]=o,i}function Tl(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Pm(e,t){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||t[e.injectorIndex+8]===null?-1:e.injectorIndex}function pu(e,t){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;o!==null;){if(r=km(o),r===null)return Hr;if(n++,o=o[ei],r.injectorIndex!==-1)return r.injectorIndex|n<<16}return Hr}function Lw(e,t,n){Fw(e,t,n)}function Mm(e,t,n){if(n&q.Optional||e!==void 0)return e;iu(t,"NodeInjector")}function Rm(e,t,n,r){if(n&q.Optional&&r===void 0&&(r=null),!(n&(q.Self|q.Host))){let o=e[Wo],i=ht(void 0);try{return o?o.get(t,r,n&q.Optional):Bp(t,r,n&q.Optional)}finally{ht(i)}}return Mm(r,t,n)}function _m(e,t,n,r=q.Default,o){if(e!==null){if(t[V]&2048&&!(r&q.Self)){let s=Vw(e,t,n,r,Lt);if(s!==Lt)return s}let i=xm(e,t,n,r,Lt);if(i!==Lt)return i}return Rm(t,n,r,o)}function xm(e,t,n,r,o){let i=jw(n);if(typeof i=="function"){if(!hm(t,e,r))return r&q.Host?Mm(o,n,r):Rm(t,n,r,o);try{let s;if(s=i(r),s==null&&!(r&q.Optional))iu(n);else return s}finally{ym()}}else if(typeof i=="number"){let s=null,c=Pm(e,t),l=Hr,u=r&q.Host?t[Ut][Mt]:null;for((c===-1||r&q.SkipSelf)&&(l=c===-1?pu(e,t):t[c+8],l===Hr||!cp(r,!1)?c=-1:(s=t[X],c=Js(l),t=Xs(l,t)));c!==-1;){let d=t[X];if(ap(i,c,d.data)){let f=Hw(c,t,n,s,r,u);if(f!==Lt)return f}l=t[c+8],l!==Hr&&cp(r,t[X].data[c+8]===u)&&ap(i,c,t)?(s=d,c=Js(l),t=Xs(l,t)):c=-1}}return o}function Hw(e,t,n,r,o,i){let s=t[X],c=s.data[e+8],l=r==null?qr(c)&&Ll:r!=s&&(c.type&3)!==0,u=o&q.Host&&i===c,d=Uw(c,s,n,l,u);return d!==null?Hl(t,s,d,c):Lt}function Uw(e,t,n,r,o){let i=e.providerIndexes,s=t.data,c=i&1048575,l=e.directiveStart,u=e.directiveEnd,d=i>>20,f=r?c:c+d,h=o?c+d:u;for(let p=f;p<h;p++){let g=s[p];if(p<l&&n===g||p>=l&&g.type===n)return p}if(o){let p=s[l];if(p&&Wr(p)&&p.type===n)return l}return null}function Hl(e,t,n,r){let o=e[n],i=t.data;if(Pw(o)){let s=o;s.resolving&&_D(RD(i[n]));let c=sp(s.canSeeViewProviders);s.resolving=!0;let l,u=s.injectImpl?ht(s.injectImpl):null,d=hm(e,r,q.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&Cw(n,i[n],t)}finally{u!==null&&ht(u),sp(c),s.resolving=!1,ym()}}return o}function jw(e){if(typeof e=="string")return e.charCodeAt(0)||0;let t=e.hasOwnProperty(Vo)?e[Vo]:void 0;return typeof t=="number"?t>=0?t&Em:Bw:t}function ap(e,t,n){let r=1<<e;return!!(n[t+(e>>Cm)]&r)}function cp(e,t){return!(e&q.Self)&&!(e&q.Host&&t)}var er=class{_tNode;_lView;constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return _m(this._tNode,this._lView,t,da(r),n)}};function Bw(){return new er(Rn(),Pt())}function mu(e){return la(()=>{let t=e.prototype.constructor,n=t[Bs]||Ul(t),r=Object.prototype,o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){let i=o[Bs]||Ul(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function Ul(e){return Ap(e)?()=>{let t=Ul(pt(e));return t&&t()}:Ur(e)}function Vw(e,t,n,r,o){let i=e,s=t;for(;i!==null&&s!==null&&s[V]&2048&&!Ys(s);){let c=xm(i,s,n,r|q.Self,Lt);if(c!==Lt)return c;let l=i.parent;if(!l){let u=s[Jp];if(u){let d=u.get(n,Lt,r);if(d!==Lt)return d}l=km(s),s=s[ei]}i=l}return o}function km(e){let t=e[X],n=t.type;return n===2?t.declTNode:n===1?e[Mt]:null}function lp(e,t=null,n=null,r){let o=Nm(e,t,n,r);return o.resolveInjectorInitializers(),o}function Nm(e,t=null,n=null,r,o=new Set){let i=[n||Ft,BD(e)];return r=r||(typeof e=="object"?void 0:rt(e)),new qo(i,t||cu(),r||null,o)}var jt=class e{static THROW_IF_NOT_FOUND=$o;static NULL=new zs;static create(t,n){if(Array.isArray(t))return lp({name:""},n,t,"");{let r=t.name??"";return lp({name:r},t.parent,t.providers,r)}}static \u0275prov=k({token:e,providedIn:"any",factory:()=>A($p)});static __NG_ELEMENT_ID__=-1};var $w=new O("");$w.__NG_ELEMENT_ID__=e=>{let t=Rn();if(t===null)throw new N(204,!1);if(t.type&2)return t.value;if(e&q.Optional)return null;throw new N(204,!1)};var Om=!1,Sa=(()=>{class e{static __NG_ELEMENT_ID__=zw;static __NG_ENV_ID__=n=>n}return e})(),jl=class extends Sa{_lView;constructor(t){super(),this._lView=t}onDestroy(t){return am(this._lView,t),()=>aw(this._lView,t)}};function zw(){return new jl(Pt())}var Yo=class{},gu=new O("",{providedIn:"root",factory:()=>!1});var Am=new O(""),Fm=new O(""),_n=(()=>{class e{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new ye(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),n}has(n){return this.pendingTasks.has(n)}remove(n){this.pendingTasks.delete(n),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=k({token:e,providedIn:"root",factory:()=>new e})}return e})();var Bl=class extends He{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(t=!1){super(),this.__isAsync=t,JD()&&(this.destroyRef=P(Sa,{optional:!0})??void 0,this.pendingTasks=P(_n,{optional:!0})??void 0)}emit(t){let n=re(null);try{super.next(t)}finally{re(n)}}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&typeof t=="object"){let l=t;o=l.next?.bind(l),i=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(i=this.wrapInTimeout(i),o&&(o=this.wrapInTimeout(o)),s&&(s=this.wrapInTimeout(s)));let c=super.subscribe({next:o,error:i,complete:s});return t instanceof Se&&t.add(c),c}wrapInTimeout(t){return n=>{let r=this.pendingTasks?.add();setTimeout(()=>{t(n),r!==void 0&&this.pendingTasks?.remove(r)})}}},nt=Bl;function ea(...e){}function Lm(e){let t,n;function r(){e=ea;try{n!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(n),t!==void 0&&clearTimeout(t)}catch{}}return t=setTimeout(()=>{e(),r()}),typeof requestAnimationFrame=="function"&&(n=requestAnimationFrame(()=>{e(),r()})),()=>r()}function up(e){return queueMicrotask(()=>e()),()=>{e=ea}}var yu="isAngularZone",ta=yu+"_ID",qw=0,Te=class e{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new nt(!1);onMicrotaskEmpty=new nt(!1);onStable=new nt(!1);onError=new nt(!1);constructor(t){let{enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:o=!1,scheduleInRootZone:i=Om}=t;if(typeof Zone>"u")throw new N(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!o&&r,s.shouldCoalesceRunChangeDetection=o,s.callbackScheduled=!1,s.scheduleInRootZone=i,Qw(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(yu)===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new N(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new N(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){let i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,Ww,ea,ea);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}},Ww={};function vu(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Gw(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function t(){Lm(()=>{e.callbackScheduled=!1,Vl(e),e.isCheckStableRunning=!0,vu(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{t()}):e._outer.run(()=>{t()}),Vl(e)}function Qw(e){let t=()=>{Gw(e)},n=qw++;e._inner=e._inner.fork({name:"angular",properties:{[yu]:!0,[ta]:n,[ta+n]:!0},onInvokeTask:(r,o,i,s,c,l)=>{if(Kw(l))return r.invokeTask(i,s,c,l);try{return dp(e),r.invokeTask(i,s,c,l)}finally{(e.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&t(),fp(e)}},onInvoke:(r,o,i,s,c,l,u)=>{try{return dp(e),r.invoke(i,s,c,l,u)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!Yw(l)&&t(),fp(e)}},onHasTask:(r,o,i,s)=>{r.hasTask(i,s),o===i&&(s.change=="microTask"?(e._hasPendingMicrotasks=s.microTask,Vl(e),vu(e)):s.change=="macroTask"&&(e.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,o,i,s)=>(r.handleError(i,s),e.runOutsideAngular(()=>e.onError.emit(s)),!1)})}function Vl(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function dp(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function fp(e){e._nesting--,vu(e)}var $l=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new nt;onMicrotaskEmpty=new nt;onStable=new nt;onError=new nt;run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}};function Kw(e){return Hm(e,"__ignore_ng_zone__")}function Yw(e){return Hm(e,"__scheduler_tick__")}function Hm(e,t){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[t]===!0}var In=class{_console=console;handleError(t){this._console.error("ERROR",t)}},Zw=new O("",{providedIn:"root",factory:()=>{let e=P(Te),t=P(In);return n=>e.runOutsideAngular(()=>t.handleError(n))}});function hp(e,t){return Np(e,t)}function Jw(e){return Np(kp,e)}var Um=(hp.required=Jw,hp);function Xw(){return Su(Rn(),Pt())}function Su(e,t){return new ba(rn(e,t))}var ba=(()=>{class e{nativeElement;constructor(n){this.nativeElement=n}static __NG_ELEMENT_ID__=Xw}return e})();var pp=new Set;function bu(e){pp.has(e)||(pp.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}function jm(e){return(e.flags&128)===128}var Bm=function(e){return e[e.OnPush=0]="OnPush",e[e.Default=1]="Default",e}(Bm||{}),Vm=new Map,e0=0;function t0(){return e0++}function n0(e){Vm.set(e[pa],e)}function zl(e){Vm.delete(e[pa])}var mp="__ngContext__";function ni(e,t){Xn(t)?(e[mp]=t[pa],n0(t)):e[mp]=t}function $m(e){return qm(e[Go])}function zm(e){return qm(e[Ct])}function qm(e){for(;e!==null&&!nn(e);)e=e[Ct];return e}var ql;function Wm(e){ql=e}function r0(){if(ql!==void 0)return ql;if(typeof document<"u")return document;throw new N(210,!1)}var Du=new O("",{providedIn:"root",factory:()=>o0}),o0="ng",wu=new O(""),xn=new O("",{providedIn:"platform",factory:()=>"unknown"});var Tu=new O("",{providedIn:"root",factory:()=>r0().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var i0="h",s0="b";var Gm=!1,a0=new O("",{providedIn:"root",factory:()=>Gm});var Qm=function(e){return e[e.CHANGE_DETECTION=0]="CHANGE_DETECTION",e[e.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",e}(Qm||{}),Da=new O("");var c0=(()=>{class e{impl=null;execute(){this.impl?.execute()}static \u0275prov=k({token:e,providedIn:"root",factory:()=>new e})}return e})();var l0=()=>null;function Km(e,t,n=!1){return l0(e,t,n)}function Ym(e,t){let n=e.contentQueries;if(n!==null){let r=re(null);try{for(let o=0;o<n.length;o+=2){let i=n[o],s=n[o+1];if(s!==-1){let c=e.data[s];fm(i),c.contentQueries(2,t[s],s)}}}finally{re(r)}}}function Wl(e,t,n){fm(0);let r=re(null);try{t(e,n)}finally{re(r)}}function Zm(e,t,n){if(em(t)){let r=re(null);try{let o=t.directiveStart,i=t.directiveEnd;for(let s=o;s<i;s++){let c=e.data[s];if(c.contentQueries){let l=n[s];c.contentQueries(1,l,s)}}}finally{re(r)}}}var Bt=function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e}(Bt||{});function Jm(e){return e instanceof Function?e():e}var Pn=function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e}(Pn||{});function u0(e,t,n){let r=e.length;for(;;){let o=e.indexOf(t,n);if(o===-1)return o;if(o===0||e.charCodeAt(o-1)<=32){let i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}var Xm="ng-template";function d0(e,t,n,r){let o=0;if(r){for(;o<t.length&&typeof t[o]=="string";o+=2)if(t[o]==="class"&&u0(t[o+1].toLowerCase(),n,0)!==-1)return!0}else if(Eu(e))return!1;if(o=t.indexOf(1,o),o>-1){let i;for(;++o<t.length&&typeof(i=t[o])=="string";)if(i.toLowerCase()===n)return!0}return!1}function Eu(e){return e.type===4&&e.value!==Xm}function f0(e,t,n){let r=e.type===4&&!n?Xm:e.value;return t===r}function h0(e,t,n){let r=4,o=e.attrs,i=o!==null?g0(o):0,s=!1;for(let c=0;c<t.length;c++){let l=t[c];if(typeof l=="number"){if(!s&&!Et(r)&&!Et(l))return!1;if(s&&Et(l))continue;s=!1,r=l|r&1;continue}if(!s)if(r&4){if(r=2|r&1,l!==""&&!f0(e,l,n)||l===""&&t.length===1){if(Et(r))return!1;s=!0}}else if(r&8){if(o===null||!d0(e,o,l,n)){if(Et(r))return!1;s=!0}}else{let u=t[++c],d=p0(l,o,Eu(e),n);if(d===-1){if(Et(r))return!1;s=!0;continue}if(u!==""){let f;if(d>i?f="":f=o[d+1].toLowerCase(),r&2&&u!==f){if(Et(r))return!1;s=!0}}}}return Et(r)||s}function Et(e){return(e&1)===0}function p0(e,t,n,r){if(t===null)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){let s=t[o];if(s===e)return o;if(s===3||s===6)i=!0;else if(s===1||s===2){let c=t[++o];for(;typeof c=="string";)c=t[++o];continue}else{if(s===4)break;if(s===0){o+=4;continue}}o+=i?1:2}return-1}else return y0(t,e)}function m0(e,t,n=!1){for(let r=0;r<t.length;r++)if(h0(e,t[r],n))return!0;return!1}function g0(e){for(let t=0;t<e.length;t++){let n=e[t];if(xw(n))return t}return e.length}function y0(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){let r=e[n];if(typeof r=="number")return-1;if(r===t)return n;n++}return-1}function gp(e,t){return e?":not("+t.trim()+")":t}function v0(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if(typeof s=="string")if(r&2){let c=e[++n];o+="["+s+(c.length>0?'="'+c+'"':"")+"]"}else r&8?o+="."+s:r&4&&(o+=" "+s);else o!==""&&!Et(s)&&(t+=gp(i,o),o=""),r=s,i=i||!Et(r);n++}return o!==""&&(t+=gp(i,o)),t}function S0(e){return e.map(v0).join(",")}function b0(e){let t=[],n=[],r=1,o=2;for(;r<e.length;){let i=e[r];if(typeof i=="string")o===2?i!==""&&t.push(i,e[++r]):o===8&&n.push(i);else{if(!Et(o))break;o=i}r++}return n.length&&t.push(1,...n),t}var eg={};function D0(e,t){return e.createText(t)}function tg(e,t,n){return e.createElement(t,n)}function na(e,t,n,r,o){e.insertBefore(t,n,r,o)}function ng(e,t,n){e.appendChild(t,n)}function yp(e,t,n,r,o){r!==null?na(e,t,n,r,o):ng(e,t,n)}function w0(e,t,n){e.removeChild(null,t,n)}function T0(e,t,n){e.setAttribute(t,"style",n)}function E0(e,t,n){n===""?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}function rg(e,t,n){let{mergedAttrs:r,classes:o,styles:i}=n;r!==null&&_w(e,t,r),o!==null&&E0(e,t,o),i!==null&&T0(e,t,i)}function C0(e,t,n,r){if(!r)if((t[V]&3)===3){let i=e.preOrderCheckHooks;i!==null&&Ls(t,i,n)}else{let i=e.preOrderHooks;i!==null&&Hs(t,i,0,n)}or(n)}function W(e,t=q.Default){let n=Pt();if(n===null)return A(e,t);let r=Rn();return _m(r,n,pt(e),t)}function og(e,t,n,r,o,i){let s=re(null);try{let c=null;o&Pn.SignalBased&&(c=t[r][Tr]),c!==null&&c.transformFn!==void 0&&(i=c.transformFn(i)),o&Pn.HasDecoratorInputTransform&&(i=e.inputTransforms[r].call(t,i)),e.setInput!==null?e.setInput(t,c,i,n,r):nm(t,c,r,i)}finally{re(s)}}function ig(e,t,n,r,o,i,s,c,l,u,d){let f=t.blueprint.slice();return f[tn]=o,f[V]=r|4|128|8|64|1024,(u!==null||e&&e[V]&2048)&&(f[V]|=2048),sm(f),f[Be]=f[ei]=e,f[Ht]=n,f[Tn]=s||e&&e[Tn],f[It]=c||e&&e[It],f[Wo]=l||e&&e[Wo]||null,f[Mt]=i,f[pa]=t0(),f[qs]=d,f[Jp]=u,f[Ut]=t.type==2?e[Ut]:f,f}function sg(e,t,n,r){if(n===0)return-1;let o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function ag(e,t,n,r,o){let i=Tw(),s=r&2;try{or(-1),s&&t.length>En&&C0(e,t,En,!1),mt(s?2:0,o),n(r,o)}finally{or(i),mt(s?3:1,o)}}function I0(e,t,n){cm()&&(ni(rn(n,t),t),cg(e,t,n))}function cg(e,t,n){L0(e,t,n),(n.flags&64)===64&&H0(e,t,n)}function P0(e,t,n=rn){let r=t.localNames;if(r!==null){let o=t.index+1;for(let i=0;i<r.length;i+=2){let s=r[i+1],c=s===-1?n(t,e):e[s];e[o++]=c}}}function M0(e){let t=e.tView;return t===null||t.incompleteFirstPass?e.tView=lg(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):t}function lg(e,t,n,r,o,i,s,c,l,u,d){let f=En+r,h=f+o,p=R0(f,h),g=typeof u=="function"?u():u;return p[X]={type:e,blueprint:p,template:n,queries:null,viewQuery:c,declTNode:t,data:p.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i=="function"?i():i,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:g,incompleteFirstPass:!1,ssrId:d}}function R0(e,t){let n=[];for(let r=0;r<t;r++)n.push(r<e?null:eg);return n}function _0(e,t,n,r){let i=r.get(a0,Gm)||n===Bt.ShadowDom,s=e.selectRootElement(t,i);return x0(s),s}function x0(e){k0(e)}var k0=()=>null;function vp(e,t,n,r,o){for(let i in t){if(!t.hasOwnProperty(i))continue;let s=t[i];if(s===void 0)continue;r??={};let c,l=Pn.None;Array.isArray(s)?(c=s[0],l=s[1]):c=s;let u=i;if(o!==null){if(!o.hasOwnProperty(i))continue;u=o[i]}e===0?Sp(r,n,u,c,l):Sp(r,n,u,c)}return r}function Sp(e,t,n,r,o){let i;e.hasOwnProperty(n)?(i=e[n]).push(t,r):i=e[n]=[t,r],o!==void 0&&i.push(o)}function N0(e,t,n){let r=t.directiveStart,o=t.directiveEnd,i=e.data,s=t.attrs,c=[],l=null,u=null;for(let d=r;d<o;d++){let f=i[d],h=n?n.get(f):null,p=h?h.inputs:null,g=h?h.outputs:null;l=vp(0,f.inputs,d,l,p),u=vp(1,f.outputs,d,u,g);let v=l!==null&&s!==null&&!Eu(t)?K0(l,d,s):null;c.push(v)}l!==null&&(l.hasOwnProperty("class")&&(t.flags|=8),l.hasOwnProperty("style")&&(t.flags|=16)),t.initialInputs=c,t.inputs=l,t.outputs=u}function O0(e,t,n,r){if(cm()){let o=r===null?null:{"":-1},i=j0(e,n);if(i!==null){let[s,c]=dg(e,n,i);ug(e,t,n,s,o,c)}o&&V0(n,r,o)}n.mergedAttrs=Zs(n.mergedAttrs,n.attrs)}function ug(e,t,n,r,o,i){for(let u=0;u<r.length;u++)Lw(Im(n,t),e,r[u].type);z0(n,e.data.length,r.length);for(let u=0;u<r.length;u++){let d=r[u];d.providersResolver&&d.providersResolver(d)}let s=!1,c=!1,l=sg(e,t,r.length,null);for(let u=0;u<r.length;u++){let d=r[u];n.mergedAttrs=Zs(n.mergedAttrs,d.hostAttrs),q0(e,n,t,l,d),$0(l,d,o),d.contentQueries!==null&&(n.flags|=4),(d.hostBindings!==null||d.hostAttrs!==null||d.hostVars!==0)&&(n.flags|=64);let f=d.type.prototype;!s&&(f.ngOnChanges||f.ngOnInit||f.ngDoCheck)&&((e.preOrderHooks??=[]).push(n.index),s=!0),!c&&(f.ngOnChanges||f.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(n.index),c=!0),l++}N0(e,n,i)}function A0(e,t,n,r,o){let i=o.hostBindings;if(i){let s=e.hostBindingOpCodes;s===null&&(s=e.hostBindingOpCodes=[]);let c=~t.index;F0(s)!=c&&s.push(c),s.push(n,r,i)}}function F0(e){let t=e.length;for(;t>0;){let n=e[--t];if(typeof n=="number"&&n<0)return n}return 0}function L0(e,t,n){let r=n.directiveStart,o=n.directiveEnd;qr(n)&&G0(t,n,e.data[r+n.componentOffset]),e.firstCreatePass||Im(n,t);let i=n.initialInputs;for(let s=r;s<o;s++){let c=e.data[s],l=Hl(t,e,s,n);if(ni(l,t),i!==null&&Q0(t,s-r,l,c,n,i),Wr(c)){let u=Cn(n.index,t);u[Ht]=Hl(t,e,s,n)}}}function H0(e,t,n){let r=n.directiveStart,o=n.directiveEnd,i=n.index,s=Dw();try{or(i);for(let c=r;c<o;c++){let l=e.data[c],u=t[c];Al(c),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&U0(l,u)}}finally{or(-1),Al(s)}}function U0(e,t){e.hostBindings!==null&&e.hostBindings(1,t)}function j0(e,t){let n=e.directiveRegistry,r=null;if(n)for(let o=0;o<n.length;o++){let i=n[o];m0(t,i.selectors,!1)&&(r??=[],Wr(i)?r.unshift(i):r.push(i))}return r}function dg(e,t,n){let r=[],o=null;for(let i of n)i.findHostDirectiveDefs!==null&&(o??=new Map,i.findHostDirectiveDefs(i,r,o)),Wr(i)&&(r.push(i),B0(e,t,r.length-1));return qr(t)?r.push(...n.slice(1)):r.push(...n),[r,o]}function B0(e,t,n){t.componentOffset=n,(e.components??=[]).push(t.index)}function V0(e,t,n){if(t){let r=e.localNames=[];for(let o=0;o<t.length;o+=2){let i=n[t[o+1]];if(i==null)throw new N(-301,!1);r.push(t[o],i)}}}function $0(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;Wr(t)&&(n[""]=e)}}function z0(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function q0(e,t,n,r,o){e.data[r]=o;let i=o.factory||(o.factory=Ur(o.type,!0)),s=new Ko(i,Wr(o),W);e.blueprint[r]=s,n[r]=s,A0(e,t,r,sg(e,n,o.hostVars,eg),o)}function W0(e){let t=16;return e.signals?t=4096:e.onPush&&(t=64),t}function G0(e,t,n){let r=rn(t,e),o=M0(n),i=e[Tn].rendererFactory,s=fg(e,ig(e,o,null,W0(n),r,t,null,i.createRenderer(r,n),null,null,null));return e[t.index]=s}function Q0(e,t,n,r,o,i){let s=i[t];if(s!==null)for(let c=0;c<s.length;){let l=s[c++],u=s[c++],d=s[c++],f=s[c++];og(r,n,l,u,d,f)}}function K0(e,t,n){let r=null,o=0;for(;o<n.length;){let i=n[o];if(i===0){o+=4;continue}else if(i===5){o+=2;continue}if(typeof i=="number")break;if(e.hasOwnProperty(i)){r===null&&(r=[]);let s=e[i];for(let c=0;c<s.length;c+=3)if(s[c]===t){r.push(i,s[c+1],s[c+2],n[o+1]);break}}o+=2}return r}function Y0(e,t,n,r){return[e,!0,0,t,null,r,null,n,null,null]}function fg(e,t){return e[Go]?e[ep][Ct]=t:e[Go]=t,e[ep]=t,t}function hg(e,t){let n=e[Wo],r=n?n.get(In,null):null;r&&r.handleError(t)}function pg(e,t,n,r,o){for(let i=0;i<n.length;){let s=n[i++],c=n[i++],l=n[i++],u=t[s],d=e.data[s];og(d,u,r,c,l,o)}}function Z0(e,t){let n=Cn(t,e),r=n[X];J0(r,n);let o=n[tn];o!==null&&n[qs]===null&&(n[qs]=Km(o,n[Wo])),mg(r,n,n[Ht])}function J0(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}function mg(e,t,n){fu(t);try{let r=e.viewQuery;r!==null&&Wl(1,r,n);let o=e.template;o!==null&&ag(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),t[ha]?.finishViewCreation(e),e.staticContentQueries&&Ym(e,t),e.staticViewQueries&&Wl(2,e.viewQuery,n);let i=e.components;i!==null&&X0(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[V]&=-5,hu()}}function X0(e,t){for(let n=0;n<t.length;n++)Z0(e,t[n])}var ir=function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e}(ir||{}),eT;function Cu(e,t){return eT(e,t)}function gg(e){return(e.flags&32)===32}function Fr(e,t,n,r,o){if(r!=null){let i,s=!1;nn(r)?i=r:Xn(r)&&(s=!0,r=r[tn]);let c=Xt(r);e===0&&n!==null?o==null?ng(t,n,c):na(t,n,c,o||null,!0):e===1&&n!==null?na(t,n,c,o||null,!0):e===2?w0(t,c,s):e===3&&t.destroyNode(c),i!=null&&hT(t,e,i,n,o)}}function tT(e,t){yg(e,t),t[tn]=null,t[Mt]=null}function nT(e,t,n,r,o,i){r[tn]=o,r[Mt]=t,wa(e,r,n,1,o,i)}function yg(e,t){t[Tn].changeDetectionScheduler?.notify(10),wa(e,t,t[It],2,null,null)}function rT(e){let t=e[Go];if(!t)return El(e[X],e);for(;t;){let n=null;if(Xn(t))n=t[Go];else{let r=t[gt];r&&(n=r)}if(!n){for(;t&&!t[Ct]&&t!==e;)Xn(t)&&El(t[X],t),t=t[Be];t===null&&(t=e),Xn(t)&&El(t[X],t),n=t&&t[Ct]}t=n}}function oT(e,t,n,r){let o=gt+r,i=n.length;r>0&&(n[o-1][Ct]=t),r<i-gt?(t[Ct]=n[o],Vp(n,gt+r,t)):(n.push(t),t[Ct]=null),t[Be]=n;let s=t[Qo];s!==null&&n!==s&&vg(s,t);let c=t[ha];c!==null&&c.insertView(e),Nl(t),t[V]|=128}function vg(e,t){let n=e[Ks],r=t[Be];if(Xn(r))e[V]|=2;else{let o=r[Be][Ut];t[Ut]!==o&&(e[V]|=2)}n===null?e[Ks]=[t]:n.push(t)}function Iu(e,t){let n=e[Ks],r=n.indexOf(t);n.splice(r,1)}function Gl(e,t){if(e.length<=gt)return;let n=gt+t,r=e[n];if(r){let o=r[Qo];o!==null&&o!==e&&Iu(o,r),t>0&&(e[n-1][Ct]=r[Ct]);let i=$s(e,gt+t);tT(r[X],r);let s=i[ha];s!==null&&s.detachView(i[X]),r[Be]=null,r[Ct]=null,r[V]&=-129}return r}function Sg(e,t){if(ti(t))return;let n=t[It];n.destroyNode&&wa(e,t,n,3,null,null),rT(t)}function El(e,t){if(ti(t))return;let n=re(null);try{t[V]&=-129,t[V]|=256,t[ot]&&tl(t[ot]),sT(e,t),iT(e,t),t[X].type===1&&t[It].destroy();let r=t[Qo];if(r!==null&&nn(t[Be])){r!==t[Be]&&Iu(r,t);let o=t[ha];o!==null&&o.detachView(e)}zl(t)}finally{re(n)}}function iT(e,t){let n=e.cleanup,r=t[Ws];if(n!==null)for(let s=0;s<n.length-1;s+=2)if(typeof n[s]=="string"){let c=n[s+3];c>=0?r[c]():r[-c].unsubscribe(),s+=2}else{let c=r[n[s+1]];n[s].call(c)}r!==null&&(t[Ws]=null);let o=t[wn];if(o!==null){t[wn]=null;for(let s=0;s<o.length;s++){let c=o[s];c()}}let i=t[Gs];if(i!==null){t[Gs]=null;for(let s of i)s.destroy()}}function sT(e,t){let n;if(e!=null&&(n=e.destroyHooks)!=null)for(let r=0;r<n.length;r+=2){let o=t[n[r]];if(!(o instanceof Ko)){let i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){let c=o[i[s]],l=i[s+1];mt(4,c,l);try{l.call(c)}finally{mt(5,c,l)}}else{mt(4,o,i);try{i.call(o)}finally{mt(5,o,i)}}}}}function aT(e,t,n){return cT(e,t.parent,n)}function cT(e,t,n){let r=t;for(;r!==null&&r.type&168;)t=r,r=t.parent;if(r===null)return n[tn];if(qr(r)){let{encapsulation:o}=e.data[r.directiveStart+r.componentOffset];if(o===Bt.None||o===Bt.Emulated)return null}return rn(r,n)}function lT(e,t,n){return dT(e,t,n)}function uT(e,t,n){return e.type&40?rn(e,n):null}var dT=uT,bp;function bg(e,t,n,r){let o=aT(e,r,t),i=t[It],s=r.parent||t[Mt],c=lT(s,r,t);if(o!=null)if(Array.isArray(n))for(let l=0;l<n.length;l++)yp(i,o,n[l],c,!1);else yp(i,o,n,c,!1);bp!==void 0&&bp(i,r,t,n,o)}function Bo(e,t){if(t!==null){let n=t.type;if(n&3)return rn(t,e);if(n&4)return Ql(-1,e[t.index]);if(n&8){let r=t.child;if(r!==null)return Bo(e,r);{let o=e[t.index];return nn(o)?Ql(-1,o):Xt(o)}}else{if(n&128)return Bo(e,t.next);if(n&32)return Cu(t,e)()||Xt(e[t.index]);{let r=Dg(e,t);if(r!==null){if(Array.isArray(r))return r[0];let o=rr(e[Ut]);return Bo(o,r)}else return Bo(e,t.next)}}}return null}function Dg(e,t){if(t!==null){let r=e[Ut][Mt],o=t.projection;return r.projection[o]}return null}function Ql(e,t){let n=gt+e+1;if(n<t.length){let r=t[n],o=r[X].firstChild;if(o!==null)return Bo(r,o)}return t[nr]}function Pu(e,t,n,r,o,i,s){for(;n!=null;){if(n.type===128){n=n.next;continue}let c=r[n.index],l=n.type;if(s&&t===0&&(c&&ni(Xt(c),r),n.flags|=2),!gg(n))if(l&8)Pu(e,t,n.child,r,o,i,!1),Fr(t,e,o,c,i);else if(l&32){let u=Cu(n,r),d;for(;d=u();)Fr(t,e,o,d,i);Fr(t,e,o,c,i)}else l&16?fT(e,t,r,n,o,i):Fr(t,e,o,c,i);n=s?n.projectionNext:n.next}}function wa(e,t,n,r,o,i){Pu(n,r,e.firstChild,t,o,i,!1)}function fT(e,t,n,r,o,i){let s=n[Ut],l=s[Mt].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++){let d=l[u];Fr(t,e,o,d,i)}else{let u=l,d=s[Be];jm(r)&&(u.flags|=128),Pu(e,t,u,d,o,i,!0)}}function hT(e,t,n,r,o){let i=n[nr],s=Xt(n);i!==s&&Fr(t,e,r,i,o);for(let c=gt;c<n.length;c++){let l=n[c];wa(l[X],l,e,t,r,i)}}function Dp(e,t){return!t||t.firstChild===null||jm(e)}function pT(e,t,n,r=!0){let o=t[X];if(oT(o,t,e,n),r){let s=Ql(n,e),c=t[It],l=c.parentNode(e[nr]);l!==null&&nT(o,e[Mt],c,t,l,s)}let i=t[qs];i!==null&&i.firstChild!==null&&(i.firstChild=null)}function ra(e,t,n,r,o=!1){for(;n!==null;){if(n.type===128){n=o?n.projectionNext:n.next;continue}let i=t[n.index];i!==null&&r.push(Xt(i)),nn(i)&&mT(i,r);let s=n.type;if(s&8)ra(e,t,n.child,r);else if(s&32){let c=Cu(n,t),l;for(;l=c();)r.push(l)}else if(s&16){let c=Dg(t,n);if(Array.isArray(c))r.push(...c);else{let l=rr(t[Ut]);ra(l[X],l,c,r,!0)}}n=o?n.projectionNext:n.next}return r}function mT(e,t){for(let n=gt;n<e.length;n++){let r=e[n],o=r[X].firstChild;o!==null&&ra(r[X],r,o,t)}e[nr]!==e[tn]&&t.push(e[nr])}var wg=[];function gT(e){return e[ot]??yT(e)}function yT(e){let t=wg.pop()??Object.create(ST);return t.lView=e,t}function vT(e){e.lView[ot]!==e&&(e.lView=null,wg.push(e))}var ST=ae(R({},ls),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{ga(e.lView)},consumerOnSignalRead(){this.lView[ot]=this}});function bT(e){let t=e[ot]??Object.create(DT);return t.lView=e,t}var DT=ae(R({},ls),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{let t=rr(e.lView);for(;t&&!Tg(t[X]);)t=rr(t);t&&du(t)},consumerOnSignalRead(){this.lView[ot]=this}});function Tg(e){return e.type!==2}function Eg(e){if(e[Gs]===null)return;let t=!0;for(;t;){let n=!1;for(let r of e[Gs])r.dirty&&(n=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));t=n&&!!(e[V]&8192)}}var wT=100;function Cg(e,t=!0,n=0){let o=e[Tn].rendererFactory,i=!1;i||o.begin?.();try{TT(e,n)}catch(s){throw t&&hg(e,s),s}finally{i||o.end?.()}}function TT(e,t){let n=dm();try{rp(!0),Kl(e,t);let r=0;for(;ma(e);){if(r===wT)throw new N(103,!1);r++,Kl(e,1)}}finally{rp(n)}}function ET(e,t,n,r){if(ti(t))return;let o=t[V],i=!1,s=!1;fu(t);let c=!0,l=null,u=null;i||(Tg(e)?(u=gT(t),l=Xc(u)):uh()===null?(c=!1,u=bT(t),l=Xc(u)):t[ot]&&(tl(t[ot]),t[ot]=null));try{sm(t),vw(e.bindingStartIndex),n!==null&&ag(e,t,n,2,r);let d=(o&3)===3;if(!i)if(d){let p=e.preOrderCheckHooks;p!==null&&Ls(t,p,null)}else{let p=e.preOrderHooks;p!==null&&Hs(t,p,0,null),Dl(t,0)}if(s||CT(t),Eg(t),Ig(t,0),e.contentQueries!==null&&Ym(e,t),!i)if(d){let p=e.contentCheckHooks;p!==null&&Ls(t,p)}else{let p=e.contentHooks;p!==null&&Hs(t,p,1),Dl(t,1)}PT(e,t);let f=e.components;f!==null&&Mg(t,f,0);let h=e.viewQuery;if(h!==null&&Wl(2,h,r),!i)if(d){let p=e.viewCheckHooks;p!==null&&Ls(t,p)}else{let p=e.viewHooks;p!==null&&Hs(t,p,2),Dl(t,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),t[bl]){for(let p of t[bl])p();t[bl]=null}i||(t[V]&=-73)}catch(d){throw i||ga(t),d}finally{u!==null&&(hh(u,l),c&&vT(u)),hu()}}function Ig(e,t){for(let n=$m(e);n!==null;n=zm(n))for(let r=gt;r<n.length;r++){let o=n[r];Pg(o,t)}}function CT(e){for(let t=$m(e);t!==null;t=zm(t)){if(!(t[V]&2))continue;let n=t[Ks];for(let r=0;r<n.length;r++){let o=n[r];du(o)}}}function IT(e,t,n){let r=Cn(t,e);Pg(r,n)}function Pg(e,t){uu(e)&&Kl(e,t)}function Kl(e,t){let r=e[X],o=e[V],i=e[ot],s=!!(t===0&&o&16);if(s||=!!(o&64&&t===0),s||=!!(o&1024),s||=!!(i?.dirty&&el(i)),s||=!1,i&&(i.dirty=!1),e[V]&=-9217,s)ET(r,e,r.template,e[Ht]);else if(o&8192){Eg(e),Ig(e,1);let c=r.components;c!==null&&Mg(e,c,1)}}function Mg(e,t,n){for(let r=0;r<t.length;r++)IT(e,t[r],n)}function PT(e,t){let n=e.hostBindingOpCodes;if(n!==null)try{for(let r=0;r<n.length;r++){let o=n[r];if(o<0)or(~o);else{let i=o,s=n[++r],c=n[++r];bw(s,i);let l=t[i];mt(24,l),c(2,l),mt(25,l)}}}finally{or(-1)}}function Mu(e,t){let n=dm()?64:1088;for(e[Tn].changeDetectionScheduler?.notify(t);e;){e[V]|=n;let r=rr(e);if(Ys(e)&&!r)return e;e=r}return null}var Br=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let t=this._lView,n=t[X];return ra(n,t,n.firstChild,[])}constructor(t,n,r=!0){this._lView=t,this._cdRefInjectingView=n,this.notifyErrorHandler=r}get context(){return this._lView[Ht]}get dirty(){return!!(this._lView[V]&9280)||!!this._lView[ot]?.dirty}set context(t){this._lView[Ht]=t}get destroyed(){return ti(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[Be];if(nn(t)){let n=t[Qs],r=n?n.indexOf(this):-1;r>-1&&(Gl(t,r),$s(n,r))}this._attachedToViewContainer=!1}Sg(this._lView[X],this._lView)}onDestroy(t){am(this._lView,t)}markForCheck(){Mu(this._cdRefInjectingView||this._lView,4)}markForRefresh(){du(this._cdRefInjectingView||this._lView)}detach(){this._lView[V]&=-129}reattach(){Nl(this._lView),this._lView[V]|=128}detectChanges(){this._lView[V]|=1024,Cg(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new N(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=Ys(this._lView),n=this._lView[Qo];n!==null&&!t&&Iu(n,this._lView),yg(this._lView[X],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new N(902,!1);this._appRef=t;let n=Ys(this._lView),r=this._lView[Qo];r!==null&&!n&&vg(r,this._lView),Nl(this._lView)}};function Ru(e,t,n,r,o){let i=e.data[t];if(i===null)i=MT(e,t,n,r,o),Sw()&&(i.flags|=32);else if(i.type&64){i.type=n,i.value=r,i.attrs=o;let s=gw();i.injectorIndex=s===null?-1:s.injectorIndex}return va(i,!0),i}function MT(e,t,n,r,o){let i=lm(),s=um(),c=s?i:i&&i.parent,l=e.data[t]=_T(e,c,n,t,r,o);return RT(e,l,i,s),l}function RT(e,t,n,r){e.firstChild===null&&(e.firstChild=t),n!==null&&(r?n.child==null&&t.parent!==null&&(n.child=t):n.next===null&&(n.next=t,t.prev=n))}function _T(e,t,n,r,o,i){let s=t?t.injectorIndex:-1,c=0;return hw()&&(c|=128),{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:c,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var JA=new RegExp(`^(\\d+)*(${s0}|${i0})*(.*)`);var xT=()=>null;function wp(e,t){return xT(e,t)}var Yl=class{},oa=class{},Zl=class{resolveComponentFactory(t){throw Error(`No component factory found for ${rt(t)}.`)}},Vr=class{static NULL=new Zl},$r=class{};var kT=(()=>{class e{static \u0275prov=k({token:e,providedIn:"root",factory:()=>null})}return e})();function Jl(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(t!==null)for(let s=0;s<t.length;s++){let c=t[s];if(typeof c=="number")i=c;else if(i==1)o=Qh(o,c);else if(i==2){let l=c,u=t[++s];r=Qh(r,l+": "+u+";")}}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}var ia=class extends Vr{ngModule;constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){let n=tr(t);return new Zo(n,this.ngModule)}};function Tp(e,t){let n=[];for(let r in e){if(!e.hasOwnProperty(r))continue;let o=e[r];if(o===void 0)continue;let i=Array.isArray(o),s=i?o[0]:o,c=i?o[1]:Pn.None;t?n.push({propName:s,templateName:r,isSignal:(c&Pn.SignalBased)!==0}):n.push({propName:s,templateName:r})}return n}function NT(e){let t=e.toLowerCase();return t==="svg"?rw:t==="math"?ow:null}var Zo=class extends oa{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;get inputs(){let t=this.componentDef,n=t.inputTransforms,r=Tp(t.inputs,!0);if(n!==null)for(let o of r)n.hasOwnProperty(o.propName)&&(o.transform=n[o.propName]);return r}get outputs(){return Tp(this.componentDef.outputs,!1)}constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=S0(t.selectors),this.ngContentSelectors=t.ngContentSelectors??[],this.isBoundToModule=!!n}create(t,n,r,o){let i=re(null);try{o=o||this.ngModule;let s=o instanceof Qe?o:o?.injector;s&&this.componentDef.getStandaloneInjector!==null&&(s=this.componentDef.getStandaloneInjector(s)||s);let c=s?new Fl(t,s):t,l=c.get($r,null);if(l===null)throw new N(407,!1);let u=c.get(kT,null),d=c.get(Yo,null),f={rendererFactory:l,sanitizer:u,changeDetectionScheduler:d},h=l.createRenderer(null,this.componentDef),p=this.componentDef.selectors[0][0]||"div",g=r?_0(h,r,this.componentDef.encapsulation,c):tg(h,p,NT(p)),v=512;this.componentDef.signals?v|=4096:this.componentDef.onPush||(v|=16);let b=null;g!==null&&(b=Km(g,c,!0));let y=lg(0,null,null,1,0,null,null,null,null,null,null),w=ig(null,y,null,v,null,null,f,h,c,null,b);w[En]=g,fu(w);let D=null;try{let C=r?["ng-version","19.1.4"]:b0(this.componentDef.selectors[0]),E=Ru(y,En,2,"#host",C),[_,L]=dg(y,E,[this.componentDef]);ug(y,w,E,_,{},L);for(let B of _)E.mergedAttrs=Zs(E.mergedAttrs,B.hostAttrs);E.mergedAttrs=Zs(E.mergedAttrs,C),Jl(E,E.mergedAttrs,!0),g&&(rg(h,g,E),ni(g,w)),n!==void 0&&OT(E,this.ngContentSelectors,n),cg(y,w,E),Zm(y,E,w),Dm(y,E),D=Cn(E.index,w),w[Ht]=D[Ht],mg(y,w,null)}catch(C){throw D!==null&&zl(D),zl(w),C}finally{hu()}return new Xl(this.componentType,w)}finally{re(i)}}},Xl=class extends Yl{_rootLView;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(t,n){super(),this._rootLView=n,this._tNode=iw(n[X],En),this.location=Su(this._tNode,n),this.instance=Cn(this._tNode.index,n)[Ht],this.hostView=this.changeDetectorRef=new Br(n,void 0,!1),this.componentType=t}setInput(t,n){let r=this._tNode.inputs,o;if(r!==null&&(o=r[t])){if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),n))return;let i=this._rootLView;pg(i[X],i,o,t,n),this.previousInputValues.set(t,n);let s=Cn(this._tNode.index,i);Mu(s,1)}}get injector(){return new er(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function OT(e,t,n){let r=e.projection=[];for(let o=0;o<t.length;o++){let i=n[o];r.push(i!=null&&i.length?Array.from(i):null)}}var Ta=(()=>{class e{static __NG_ELEMENT_ID__=AT}return e})();function AT(){let e=Rn();return LT(e,Pt())}var FT=Ta,Rg=class extends FT{_lContainer;_hostTNode;_hostLView;constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return Su(this._hostTNode,this._hostLView)}get injector(){return new er(this._hostTNode,this._hostLView)}get parentInjector(){let t=pu(this._hostTNode,this._hostLView);if(Tm(t)){let n=Xs(t,this._hostLView),r=Js(t),o=n[X].data[r+8];return new er(o,n)}else return new er(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let n=Ep(this._lContainer);return n!==null&&n[t]||null}get length(){return this._lContainer.length-gt}createEmbeddedView(t,n,r){let o,i;typeof r=="number"?o=r:r!=null&&(o=r.index,i=r.injector);let s=wp(this._lContainer,t.ssrId),c=t.createEmbeddedViewImpl(n||{},i,s);return this.insertImpl(c,o,Dp(this._hostTNode,s)),c}createComponent(t,n,r,o,i){let s=t&&!XD(t),c;if(s)c=n;else{let g=n||{};c=g.index,r=g.injector,o=g.projectableNodes,i=g.environmentInjector||g.ngModuleRef}let l=s?t:new Zo(tr(t)),u=r||this.parentInjector;if(!i&&l.ngModule==null){let v=(s?u:this.parentInjector).get(Qe,null);v&&(i=v)}let d=tr(l.componentType??{}),f=wp(this._lContainer,d?.id??null),h=f?.firstChild??null,p=l.create(u,o,h,i);return this.insertImpl(p.hostView,c,Dp(this._hostTNode,f)),p}insert(t,n){return this.insertImpl(t,n,!0)}insertImpl(t,n,r){let o=t._lView;if(sw(o)){let c=this.indexOf(t);if(c!==-1)this.detach(c);else{let l=o[Be],u=new Rg(l,l[Mt],l[Be]);u.detach(u.indexOf(t))}}let i=this._adjustIndex(n),s=this._lContainer;return pT(s,o,i,r),t.attachToViewContainerRef(),Vp(Cl(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){let n=Ep(this._lContainer);return n!==null?n.indexOf(t):-1}remove(t){let n=this._adjustIndex(t,-1),r=Gl(this._lContainer,n);r&&($s(Cl(this._lContainer),n),Sg(r[X],r))}detach(t){let n=this._adjustIndex(t,-1),r=Gl(this._lContainer,n);return r&&$s(Cl(this._lContainer),n)!=null?new Br(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function Ep(e){return e[Qs]}function Cl(e){return e[Qs]||(e[Qs]=[])}function LT(e,t){let n,r=t[e.index];return nn(r)?n=r:(n=Y0(r,t,null,e),t[e.index]=n,fg(t,n)),UT(n,t,e,r),new Rg(n,e,t)}function HT(e,t){let n=e[It],r=n.createComment(""),o=rn(t,e),i=n.parentNode(o);return na(n,i,r,n.nextSibling(o),!1),r}var UT=jT;function jT(e,t,n,r){if(e[nr])return;let o;n.type&8?o=Xt(r):o=HT(t,n),e[nr]=o}var Mn=class{},Jo=class{};var eu=class extends Mn{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new ia(this);constructor(t,n,r,o=!0){super(),this.ngModuleType=t,this._parent=n;let i=qp(t);this._bootstrapComponents=Jm(i.bootstrap),this._r3Injector=Nm(t,n,[{provide:Mn,useValue:this},{provide:Vr,useValue:this.componentFactoryResolver},...r],rt(t),new Set(["environment"])),o&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}},tu=class extends Jo{moduleType;constructor(t){super(),this.moduleType=t}create(t){return new eu(this.moduleType,t,[])}};var sa=class extends Mn{injector;componentFactoryResolver=new ia(this);instance=null;constructor(t){super();let n=new qo([...t.providers,{provide:Mn,useValue:this},{provide:Vr,useValue:this.componentFactoryResolver}],t.parent||cu(),t.debugName,new Set(["environment"]));this.injector=n,t.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function _u(e,t,n=null){return new sa({providers:e,parent:t,debugName:n,runEnvironmentInitializers:!0}).injector}var BT=(()=>{class e{_injector;cachedInjectors=new Map;constructor(n){this._injector=n}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n)){let r=Kp(!1,n.type),o=r.length>0?_u([r],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n,o)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=k({token:e,providedIn:"environment",factory:()=>new e(A(Qe))})}return e})();function ee(e){return la(()=>{let t=_g(e),n=ae(R({},t),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection===Bm.OnPush,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&e.dependencies||null,getStandaloneInjector:t.standalone?o=>o.get(BT).getOrCreateStandaloneInjector(n):null,getExternalStyles:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||Bt.Emulated,styles:e.styles||Ft,_:null,schemas:e.schemas||null,tView:null,id:""});t.standalone&&bu("NgStandalone"),xg(n);let r=e.dependencies;return n.directiveDefs=Ip(r,!1),n.pipeDefs=Ip(r,!0),n.id=zT(n),n})}function VT(e){return tr(e)||Wp(e)}function $T(e){return e!==null}function Gr(e){return la(()=>({type:e.type,bootstrap:e.bootstrap||Ft,declarations:e.declarations||Ft,imports:e.imports||Ft,exports:e.exports||Ft,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function Cp(e,t){if(e==null)return zo;let n={};for(let r in e)if(e.hasOwnProperty(r)){let o=e[r],i,s,c=Pn.None;Array.isArray(o)?(c=o[0],i=o[1],s=o[2]??i):(i=o,s=o),t?(n[i]=c!==Pn.None?[r,c]:r,t[i]=s):n[i]=r}return n}function xu(e){return la(()=>{let t=_g(e);return xg(t),t})}function _g(e){let t={};return{type:e.type,providersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:t,inputTransforms:null,inputConfig:e.inputs||zo,exportAs:e.exportAs||null,standalone:e.standalone??!0,signals:e.signals===!0,selectors:e.selectors||Ft,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Cp(e.inputs,t),outputs:Cp(e.outputs),debugInfo:null}}function xg(e){e.features?.forEach(t=>t(e))}function Ip(e,t){if(!e)return null;let n=t?Gp:VT;return()=>(typeof e=="function"?e():e).map(r=>n(r)).filter($T)}function zT(e){let t=0,n=typeof e.consts=="function"?"":e.consts,r=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,n,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery];for(let i of r.join("|"))t=Math.imul(31,t)+i.charCodeAt(0)<<0;return t+=2147483648,"c"+t}var ku=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"platform"})}return e})();var kg=new O("");function ri(e){return!!e&&typeof e.then=="function"}function Ng(e){return!!e&&typeof e.subscribe=="function"}var Og=new O("");var Ag=(()=>{class e{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((n,r)=>{this.resolve=n,this.reject=r});appInits=P(Og,{optional:!0})??[];injector=P(jt);constructor(){}runInitializers(){if(this.initialized)return;let n=[];for(let o of this.appInits){let i=it(this.injector,o);if(ri(i))n.push(i);else if(Ng(i)){let s=new Promise((c,l)=>{i.subscribe({complete:c,error:l})});n.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),n.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),qT=(()=>{class e{static \u0275prov=k({token:e,providedIn:"root",factory:()=>new nu})}return e})(),nu=class{queuedEffectCount=0;queues=new Map;schedule(t){this.enqueue(t)}remove(t){let n=t.zone,r=this.queues.get(n);r.has(t)&&(r.delete(t),this.queuedEffectCount--)}enqueue(t){let n=t.zone;this.queues.has(n)||this.queues.set(n,new Set);let r=this.queues.get(n);r.has(t)||(this.queuedEffectCount++,r.add(t))}flush(){for(;this.queuedEffectCount>0;)for(let[t,n]of this.queues)t===null?this.flushQueue(n):t.run(()=>this.flushQueue(n))}flushQueue(t){for(let n of t)t.delete(n),this.queuedEffectCount--,n.run()}},Ea=new O("");function WT(){vh(()=>{throw new N(600,!1)})}function GT(e){return e.isBoundToModule}var QT=10;function KT(e,t,n){try{let r=n();return ri(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}var en=(()=>{class e{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=P(Zw);afterRenderManager=P(c0);zonelessEnabled=P(gu);rootEffectScheduler=P(qT);dirtyFlags=0;deferredDirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new He;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=P(_n).hasPendingTasks.pipe(F(n=>!n));constructor(){P(Da,{optional:!0})}whenStable(){let n;return new Promise(r=>{n=this.isStable.subscribe({next:o=>{o&&r()}})}).finally(()=>{n.unsubscribe()})}_injector=P(Qe);_rendererFactory=null;get injector(){return this._injector}bootstrap(n,r){let o=n instanceof oa;if(!this._injector.get(Ag).done){let h=!o&&Qp(n),p=!1;throw new N(405,p)}let s;o?s=n:s=this._injector.get(Vr).resolveComponentFactory(n),this.componentTypes.push(s.componentType);let c=GT(s)?void 0:this._injector.get(Mn),l=r||s.selector,u=s.create(jt.NULL,[],l,c),d=u.location.nativeElement,f=u.injector.get(kg,null);return f?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),Us(this.components,u),f?.unregisterApplication(d)}),this._loadComponent(u),u}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick=()=>{if(this.tracingSnapshot!==null){let r=this.tracingSnapshot;this.tracingSnapshot=null,r.run(Qm.CHANGE_DETECTION,this._tick),r.dispose();return}if(this._runningTick)throw new N(101,!1);let n=re(null);try{this._runningTick=!0,this.synchronize()}catch(r){this.internalErrorHandler(r)}finally{this._runningTick=!1,re(n),this.afterTick.next()}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get($r,null,{optional:!0})),this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0;let n=0;for(;this.dirtyFlags!==0&&n++<QT;)this.synchronizeOnce()}synchronizeOnce(){if(this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0,this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let n=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r,notifyErrorHandler:o}of this.allViews)YT(r,o,n,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:n})=>ma(n))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(n){let r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){let r=n;Us(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(Ea,[]).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>Us(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new N(406,!1);let n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Us(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function YT(e,t,n,r){if(!n&&!ma(e))return;Cg(e,t,n&&!r?0:1)}function Pp(e,t,n,r,o){let i=t.inputs,s=o?"class":"style";pg(e,n,i[s],s,r)}function ZT(e,t,n,r,o,i){let s=t.consts,c=np(s,o),l=Ru(t,e,2,r,c);return O0(t,n,l,np(s,i)),l.attrs!==null&&Jl(l,l.attrs,!1),l.mergedAttrs!==null&&Jl(l,l.mergedAttrs,!0),t.queries!==null&&t.queries.elementStart(t,l),l}function oe(e,t,n,r){let o=Pt(),i=ya(),s=En+e,c=o[It],l=i.firstCreatePass?ZT(s,i,o,t,n,r):i.data[s],u=JT(i,o,l,c,t,e);o[s]=u;let d=tm(l);return va(l,!0),rg(c,u,l),!gg(l)&&Sm()&&bg(i,o,u,l),uw()===0&&ni(u,o),dw(),d&&(I0(i,o,l),Zm(i,l,o)),r!==null&&P0(o,l),oe}function he(){let e=Rn();um()?yw():(e=e.parent,va(e,!1));let t=e;pw(t)&&mw(),fw();let n=ya();return n.firstCreatePass&&(Dm(n,e),em(e)&&n.queries.elementEnd(e)),t.classesWithoutHost!=null&&Mw(t)&&Pp(n,t,Pt(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&Rw(t)&&Pp(n,t,Pt(),t.stylesWithoutHost,!1),he}function pe(e,t,n,r){return oe(e,t,n,r),he(),pe}var JT=(e,t,n,r,o,i)=>(bm(!0),tg(r,o,Ew()));var aa="en-US";var XT=aa;function eE(e){typeof e=="string"&&(XT=e.toLowerCase().replace(/_/g,"-"))}var tE=(e,t,n)=>{};function yt(e,t,n,r){let o=Pt(),i=ya(),s=Rn();return rE(i,o,o[It],s,e,t,r),yt}function nE(e,t,n,r){let o=e.cleanup;if(o!=null)for(let i=0;i<o.length-1;i+=2){let s=o[i];if(s===n&&o[i+1]===r){let c=t[Ws],l=o[i+2];return c.length>l?c[l]:null}typeof s=="string"&&(i+=2)}return null}function rE(e,t,n,r,o,i,s){let c=tm(r),u=e.firstCreatePass&&lw(e),d=t[Ht],f=cw(t),h=!0;if(r.type&3||s){let v=rn(r,t),b=s?s(v):v,y=f.length,w=s?C=>s(Xt(C[r.index])):r.index,D=null;if(!s&&c&&(D=nE(e,t,o,r.index)),D!==null){let C=D.__ngLastListenerFn__||D;C.__ngNextListenerFn__=i,D.__ngLastListenerFn__=i,h=!1}else{i=Rp(r,t,d,i),tE(v,o,i);let C=n.listen(b,o,i);f.push(i,C),u&&u.push(o,w,y,y+1)}}else i=Rp(r,t,d,i);let p=r.outputs,g;if(h&&p!==null&&(g=p[o])){let v=g.length;if(v)for(let b=0;b<v;b+=2){let y=g[b],w=g[b+1],E=t[y][w].subscribe(i),_=f.length;f.push(i,E),u&&u.push(o,r.index,_,-(_+1))}}}function Mp(e,t,n,r){let o=re(null);try{return mt(6,t,n),n(r)!==!1}catch(i){return hg(e,i),!1}finally{mt(7,t,n),re(o)}}function Rp(e,t,n,r){return function o(i){if(i===Function)return r;let s=qr(e)?Cn(e.index,t):t;Mu(s,5);let c=Mp(t,n,r,i),l=o.__ngNextListenerFn__;for(;l;)c=Mp(t,n,l,i)&&c,l=l.__ngNextListenerFn__;return c}}function De(e,t=""){let n=Pt(),r=ya(),o=e+En,i=r.firstCreatePass?Ru(r,o,1,t,null):r.data[o],s=oE(r,n,i,t,e);n[o]=s,Sm()&&bg(r,n,s,i),va(i,!1)}var oE=(e,t,n,r,o)=>(bm(!0),D0(t[It],r));var ru=class{ngModuleFactory;componentFactories;constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}},Nu=(()=>{class e{compileModuleSync(n){return new tu(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){let r=this.compileModuleSync(n),o=qp(n),i=Jm(o.declarations).reduce((s,c)=>{let l=tr(c);return l&&s.push(new Zo(l)),s},[]);return new ru(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var iE=(()=>{class e{zone=P(Te);changeDetectionScheduler=P(Yo);applicationRef=P(en);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function sE({ngZoneFactory:e,ignoreChangesOutsideZone:t,scheduleInRootZone:n}){return e??=()=>new Te(ae(R({},aE()),{scheduleInRootZone:n})),[{provide:Te,useFactory:e},{provide:jr,multi:!0,useFactory:()=>{let r=P(iE,{optional:!0});return()=>r.initialize()}},{provide:jr,multi:!0,useFactory:()=>{let r=P(cE);return()=>{r.initialize()}}},t===!0?{provide:Am,useValue:!0}:[],{provide:Fm,useValue:n??Om}]}function aE(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:e?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:e?.runCoalescing??!1}}var cE=(()=>{class e{subscription=new Se;initialized=!1;zone=P(Te);pendingTasks=P(_n);initialize(){if(this.initialized)return;this.initialized=!0;let n=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(n=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Te.assertNotInAngularZone(),queueMicrotask(()=>{n!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(n),n=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Te.assertInAngularZone(),n??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var lE=(()=>{class e{appRef=P(en);taskService=P(_n);ngZone=P(Te);zonelessEnabled=P(gu);tracing=P(Da,{optional:!0});disableScheduling=P(Am,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Se;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(ta):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(P(Fm,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof $l||!this.zoneIsDefined)}notify(n){if(!this.zonelessEnabled&&n===5)return;let r=!1;switch(n){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 8:{this.appRef.deferredDirtyFlags|=8;break}case 6:{this.appRef.dirtyFlags|=2,r=!0;break}case 13:{this.appRef.dirtyFlags|=16,r=!0;break}case 14:{this.appRef.dirtyFlags|=2,r=!0;break}case 12:{r=!0;break}case 10:case 9:case 7:case 11:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(r))return;let o=this.useMicrotaskScheduler?up:Lm;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>o(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>o(()=>this.tick()))}shouldScheduleTick(n){return!(this.disableScheduling&&!n||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(ta+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let n=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){throw this.taskService.remove(n),r}finally{this.cleanup()}this.useMicrotaskScheduler=!0,up(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(n)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let n=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(n)}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function uE(){return typeof $localize<"u"&&$localize.locale||aa}var Ou=new O("",{providedIn:"root",factory:()=>P(Ou,q.Optional|q.SkipSelf)||uE()});var ou=new O(""),dE=new O("");function Uo(e){return!e.moduleRef}function fE(e){let t=Uo(e)?e.r3Injector:e.moduleRef.injector,n=t.get(Te);return n.run(()=>{Uo(e)?e.r3Injector.resolveInjectorInitializers():e.moduleRef.resolveInjectorInitializers();let r=t.get(In,null),o;if(n.runOutsideAngular(()=>{o=n.onError.subscribe({next:i=>{r.handleError(i)}})}),Uo(e)){let i=()=>t.destroy(),s=e.platformInjector.get(ou);s.add(i),t.onDestroy(()=>{o.unsubscribe(),s.delete(i)})}else{let i=()=>e.moduleRef.destroy(),s=e.platformInjector.get(ou);s.add(i),e.moduleRef.onDestroy(()=>{Us(e.allPlatformModules,e.moduleRef),o.unsubscribe(),s.delete(i)})}return KT(r,n,()=>{let i=t.get(Ag);return i.runInitializers(),i.donePromise.then(()=>{let s=t.get(Ou,aa);if(eE(s||aa),!t.get(dE,!0))return Uo(e)?t.get(en):(e.allPlatformModules.push(e.moduleRef),e.moduleRef);if(Uo(e)){let l=t.get(en);return e.rootComponent!==void 0&&l.bootstrap(e.rootComponent),l}else return hE(e.moduleRef,e.allPlatformModules),e.moduleRef})})})}function hE(e,t){let n=e.injector.get(en);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(r=>n.bootstrap(r));else if(e.instance.ngDoBootstrap)e.instance.ngDoBootstrap(n);else throw new N(-403,!1);t.push(e)}var js=null;function pE(e=[],t){return jt.create({name:t,providers:[{provide:fa,useValue:"platform"},{provide:ou,useValue:new Set([()=>js=null])},...e]})}function mE(e=[]){if(js)return js;let t=pE(e);return js=t,WT(),gE(t),t}function gE(e){let t=e.get(wu,null);it(e,()=>{t?.forEach(n=>n())})}var oi=(()=>{class e{static __NG_ELEMENT_ID__=yE}return e})();function yE(e){return vE(Rn(),Pt(),(e&16)===16)}function vE(e,t,n){if(qr(e)&&!n){let r=Cn(e.index,t);return new Br(r,r)}else if(e.type&175){let r=t[Ut];return new Br(r,t)}return null}function Fg(e){try{let{rootComponent:t,appProviders:n,platformProviders:r}=e,o=mE(r),i=[sE({}),{provide:Yo,useExisting:lE},...n||[]],s=new sa({providers:i,parent:o,debugName:"",runEnvironmentInitializers:!1});return fE({r3Injector:s.injector,platformInjector:o,rootComponent:t})}catch(t){return Promise.reject(t)}}var _p=class{[Tr];constructor(t){this[Tr]=t}destroy(){this[Tr].destroy()}};var Bg=null;function Qr(){return Bg}function Vg(e){Bg??=e}var Ca=class{};var Ke=new O(""),$g=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>P(TE),providedIn:"platform"})}return e})();var TE=(()=>{class e extends $g{_location;_history;_doc=P(Ke);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Qr().getBaseHref(this._doc)}onPopState(n){let r=Qr().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){let r=Qr().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,r,o){this._history.pushState(n,r,o)}replaceState(n,r,o){this._history.replaceState(n,r,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function zg(e,t){return e?t?e.endsWith("/")?t.startsWith("/")?e+t.slice(1):e+t:t.startsWith("/")?e+t:`${e}/${t}`:e:t}function Lg(e){let t=e.match(/#|\?|$/),n=t&&t.index||e.length,r=n-(e[n-1]==="/"?1:0);return e.slice(0,r)+e.slice(n)}function sr(e){return e&&e[0]!=="?"?"?"+e:e}var Ia=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>P(qg),providedIn:"root"})}return e})(),EE=new O(""),qg=(()=>{class e extends Ia{_platformLocation;_baseHref;_removeListenerFns=[];constructor(n,r){super(),this._platformLocation=n,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??P(Ke).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return zg(this._baseHref,n)}path(n=!1){let r=this._platformLocation.pathname+sr(this._platformLocation.search),o=this._platformLocation.hash;return o&&n?`${r}${o}`:r}pushState(n,r,o,i){let s=this.prepareExternalUrl(o+sr(i));this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){let s=this.prepareExternalUrl(o+sr(i));this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}static \u0275fac=function(r){return new(r||e)(A($g),A(EE,8))};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ii=(()=>{class e{_subject=new He;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(n){this._locationStrategy=n;let r=this._locationStrategy.getBaseHref();this._basePath=PE(Lg(Hg(r))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+sr(r))}normalize(n){return e.stripTrailingSlash(IE(this._basePath,Hg(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",o=null){this._locationStrategy.pushState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+sr(r)),o)}replaceState(n,r="",o=null){this._locationStrategy.replaceState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+sr(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(o=>o(n,r))}subscribe(n,r,o){return this._subject.subscribe({next:n,error:r??void 0,complete:o??void 0})}static normalizeQueryParams=sr;static joinWithSlash=zg;static stripTrailingSlash=Lg;static \u0275fac=function(r){return new(r||e)(A(Ia))};static \u0275prov=k({token:e,factory:()=>CE(),providedIn:"root"})}return e})();function CE(){return new ii(A(Ia))}function IE(e,t){if(!e||!t.startsWith(e))return t;let n=t.substring(e.length);return n===""||["/",";","?","#"].includes(n[0])?n:t}function Hg(e){return e.replace(/\/index.html$/,"")}function PE(e){if(new RegExp("^(https?:)?//").test(e)){let[,n]=e.split(/\/\/[^\/]+/);return n}return e}function Pa(e,t){t=encodeURIComponent(t);for(let n of e.split(";")){let r=n.indexOf("="),[o,i]=r==-1?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===t)return decodeURIComponent(i)}return null}var Au=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=Gr({type:e});static \u0275inj=zr({})}return e})(),Wg="browser",ME="server";function Fu(e){return e===ME}var Kr=class{};var ai=class{},Ra=class{},Vt=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(n=>{let r=n.indexOf(":");if(r>0){let o=n.slice(0,r),i=n.slice(r+1).trim();this.addHeaderEntry(o,i)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((n,r)=>{this.addHeaderEntry(r,n)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([n,r])=>{this.setHeaderEntries(n,r)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let n=this.headers.get(t.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,n){return this.clone({name:t,value:n,op:"a"})}set(t,n){return this.clone({name:t,value:n,op:"s"})}delete(t,n){return this.clone({name:t,value:n,op:"d"})}maybeSetNormalizedName(t,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,t)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(n=>{this.headers.set(n,t.headers.get(n)),this.normalizedNames.set(n,t.normalizedNames.get(n))})}clone(t){let n=new e;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}applyUpdate(t){let n=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(t.name,n);let o=(t.op==="a"?this.headers.get(n):void 0)||[];o.push(...r),this.headers.set(n,o);break;case"d":let i=t.value;if(!i)this.headers.delete(n),this.normalizedNames.delete(n);else{let s=this.headers.get(n);if(!s)return;s=s.filter(c=>i.indexOf(c)===-1),s.length===0?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,s)}break}}addHeaderEntry(t,n){let r=t.toLowerCase();this.maybeSetNormalizedName(t,r),this.headers.has(r)?this.headers.get(r).push(n):this.headers.set(r,[n])}setHeaderEntries(t,n){let r=(Array.isArray(n)?n:[n]).map(i=>i.toString()),o=t.toLowerCase();this.headers.set(o,r),this.maybeSetNormalizedName(t,o)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>t(this.normalizedNames.get(n),this.headers.get(n)))}};var Hu=class{encodeKey(t){return Gg(t)}encodeValue(t){return Gg(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function _E(e,t){let n=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{let i=o.indexOf("="),[s,c]=i==-1?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,i)),t.decodeValue(o.slice(i+1))],l=n.get(s)||[];l.push(c),n.set(s,l)}),n}var xE=/%(\d[a-f0-9])/gi,kE={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Gg(e){return encodeURIComponent(e).replace(xE,(t,n)=>kE[n]??t)}function Ma(e){return`${e}`}var kn=class e{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new Hu,t.fromString){if(t.fromObject)throw new N(2805,!1);this.map=_E(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(n=>{let r=t.fromObject[n],o=Array.isArray(r)?r.map(Ma):[Ma(r)];this.map.set(n,o)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let n=this.map.get(t);return n?n[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,n){return this.clone({param:t,value:n,op:"a"})}appendAll(t){let n=[];return Object.keys(t).forEach(r=>{let o=t[r];Array.isArray(o)?o.forEach(i=>{n.push({param:r,value:i,op:"a"})}):n.push({param:r,value:o,op:"a"})}),this.clone(n)}set(t,n){return this.clone({param:t,value:n,op:"s"})}delete(t,n){return this.clone({param:t,value:n,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let n=this.encoder.encodeKey(t);return this.map.get(t).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let n=new e({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(t),n}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let n=(t.op==="a"?this.map.get(t.param):void 0)||[];n.push(Ma(t.value)),this.map.set(t.param,n);break;case"d":if(t.value!==void 0){let r=this.map.get(t.param)||[],o=r.indexOf(Ma(t.value));o!==-1&&r.splice(o,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var Uu=class{map=new Map;set(t,n){return this.map.set(t,n),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function NE(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Qg(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Kg(e){return typeof Blob<"u"&&e instanceof Blob}function Yg(e){return typeof FormData<"u"&&e instanceof FormData}function OE(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var Zg="Content-Type",Jg="Accept",ty="X-Request-URL",ny="text/plain",ry="application/json",AE=`${ry}, ${ny}, */*`,si=class e{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(t,n,r,o){this.url=n,this.method=t.toUpperCase();let i;if(NE(this.method)||o?(this.body=r!==void 0?r:null,i=o):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new Vt,this.context??=new Uu,!this.params)this.params=new kn,this.urlWithParams=n;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=n;else{let c=n.indexOf("?"),l=c===-1?"?":c<n.length-1?"&":"";this.urlWithParams=n+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Qg(this.body)||Kg(this.body)||Yg(this.body)||OE(this.body)?this.body:this.body instanceof kn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Yg(this.body)?null:Kg(this.body)?this.body.type||null:Qg(this.body)?null:typeof this.body=="string"?ny:this.body instanceof kn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?ry:null}clone(t={}){let n=t.method||this.method,r=t.url||this.url,o=t.responseType||this.responseType,i=t.transferCache??this.transferCache,s=t.body!==void 0?t.body:this.body,c=t.withCredentials??this.withCredentials,l=t.reportProgress??this.reportProgress,u=t.headers||this.headers,d=t.params||this.params,f=t.context??this.context;return t.setHeaders!==void 0&&(u=Object.keys(t.setHeaders).reduce((h,p)=>h.set(p,t.setHeaders[p]),u)),t.setParams&&(d=Object.keys(t.setParams).reduce((h,p)=>h.set(p,t.setParams[p]),d)),new e(n,r,s,{params:d,headers:u,context:f,reportProgress:l,responseType:o,withCredentials:c,transferCache:i})}},Yr=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(Yr||{}),ci=class{headers;status;statusText;url;ok;type;constructor(t,n=200,r="OK"){this.headers=t.headers||new Vt,this.status=t.status!==void 0?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},ju=class e extends ci{constructor(t={}){super(t)}type=Yr.ResponseHeader;clone(t={}){return new e({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},_a=class e extends ci{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=Yr.Response;clone(t={}){return new e({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},xa=class extends ci{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},FE=200,LE=204;function Lu(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var Bu=(()=>{class e{handler;constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof si)i=n;else{let l;o.headers instanceof Vt?l=o.headers:l=new Vt(o.headers);let u;o.params&&(o.params instanceof kn?u=o.params:u=new kn({fromObject:o.params})),i=new si(n,r,o.body!==void 0?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let s=H(i).pipe(Sn(l=>this.handler.handle(l)));if(n instanceof si||o.observe==="events")return s;let c=s.pipe(et(l=>l instanceof _a));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return c.pipe(F(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new N(2806,!1);return l.body}));case"blob":return c.pipe(F(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new N(2807,!1);return l.body}));case"text":return c.pipe(F(l=>{if(l.body!==null&&typeof l.body!="string")throw new N(2808,!1);return l.body}));case"json":default:return c.pipe(F(l=>l.body))}case"response":return c;default:throw new N(2809,!1)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new kn().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,Lu(o,r))}post(n,r,o={}){return this.request("POST",n,Lu(o,r))}put(n,r,o={}){return this.request("PUT",n,Lu(o,r))}static \u0275fac=function(r){return new(r||e)(A(ai))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var HE=new O("");function UE(e,t){return t(e)}function jE(e,t,n){return(r,o)=>it(n,()=>t(r,i=>e(i,o)))}var oy=new O(""),BE=new O(""),VE=new O("",{providedIn:"root",factory:()=>!0});var Xg=(()=>{class e extends ai{backend;injector;chain=null;pendingTasks=P(_n);contributeToStability=P(VE);constructor(n,r){super(),this.backend=n,this.injector=r}handle(n){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(oy),...this.injector.get(BE,[])]));this.chain=r.reduceRight((o,i)=>jE(o,i,this.injector),UE)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(n,o=>this.backend.handle(o)).pipe(Jn(()=>this.pendingTasks.remove(r)))}else return this.chain(n,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||e)(A(Ra),A(Qe))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var $E=/^\)\]\}',?\n/,zE=RegExp(`^${ty}:`,"m");function qE(e){return"responseURL"in e&&e.responseURL?e.responseURL:zE.test(e.getAllResponseHeaders())?e.getResponseHeader(ty):null}var ey=(()=>{class e{xhrFactory;constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new N(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?fe(r.\u0275loadImpl()):H(null)).pipe(tt(()=>new z(i=>{let s=r.build();if(s.open(n.method,n.urlWithParams),n.withCredentials&&(s.withCredentials=!0),n.headers.forEach((v,b)=>s.setRequestHeader(v,b.join(","))),n.headers.has(Jg)||s.setRequestHeader(Jg,AE),!n.headers.has(Zg)){let v=n.detectContentTypeHeader();v!==null&&s.setRequestHeader(Zg,v)}if(n.responseType){let v=n.responseType.toLowerCase();s.responseType=v!=="json"?v:"text"}let c=n.serializeBody(),l=null,u=()=>{if(l!==null)return l;let v=s.statusText||"OK",b=new Vt(s.getAllResponseHeaders()),y=qE(s)||n.url;return l=new ju({headers:b,status:s.status,statusText:v,url:y}),l},d=()=>{let{headers:v,status:b,statusText:y,url:w}=u(),D=null;b!==LE&&(D=typeof s.response>"u"?s.responseText:s.response),b===0&&(b=D?FE:0);let C=b>=200&&b<300;if(n.responseType==="json"&&typeof D=="string"){let E=D;D=D.replace($E,"");try{D=D!==""?JSON.parse(D):null}catch(_){D=E,C&&(C=!1,D={error:_,text:D})}}C?(i.next(new _a({body:D,headers:v,status:b,statusText:y,url:w||void 0})),i.complete()):i.error(new xa({error:D,headers:v,status:b,statusText:y,url:w||void 0}))},f=v=>{let{url:b}=u(),y=new xa({error:v,status:s.status||0,statusText:s.statusText||"Unknown Error",url:b||void 0});i.error(y)},h=!1,p=v=>{h||(i.next(u()),h=!0);let b={type:Yr.DownloadProgress,loaded:v.loaded};v.lengthComputable&&(b.total=v.total),n.responseType==="text"&&s.responseText&&(b.partialText=s.responseText),i.next(b)},g=v=>{let b={type:Yr.UploadProgress,loaded:v.loaded};v.lengthComputable&&(b.total=v.total),i.next(b)};return s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",f),s.addEventListener("abort",f),n.reportProgress&&(s.addEventListener("progress",p),c!==null&&s.upload&&s.upload.addEventListener("progress",g)),s.send(c),i.next({type:Yr.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",f),n.reportProgress&&(s.removeEventListener("progress",p),c!==null&&s.upload&&s.upload.removeEventListener("progress",g)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(r){return new(r||e)(A(Kr))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),iy=new O(""),WE="XSRF-TOKEN",GE=new O("",{providedIn:"root",factory:()=>WE}),QE="X-XSRF-TOKEN",KE=new O("",{providedIn:"root",factory:()=>QE}),ka=class{},YE=(()=>{class e{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(n,r,o){this.doc=n,this.platform=r,this.cookieName=o}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=Pa(n,this.cookieName),this.lastCookieString=n),this.lastToken}static \u0275fac=function(r){return new(r||e)(A(Ke),A(xn),A(GE))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();function ZE(e,t){let n=e.url.toLowerCase();if(!P(iy)||e.method==="GET"||e.method==="HEAD"||n.startsWith("http://")||n.startsWith("https://"))return t(e);let r=P(ka).getToken(),o=P(KE);return r!=null&&!e.headers.has(o)&&(e=e.clone({headers:e.headers.set(o,r)})),t(e)}function sy(...e){let t=[Bu,ey,Xg,{provide:ai,useExisting:Xg},{provide:Ra,useFactory:()=>P(HE,{optional:!0})??P(ey)},{provide:oy,useValue:ZE,multi:!0},{provide:iy,useValue:!0},{provide:ka,useClass:YE}];for(let n of e)t.push(...n.\u0275providers);return Xo(t)}var $u=class extends Ca{supportsDOMEvents=!0},zu=class e extends $u{static makeCurrent(){Vg(new e)}onAndCancel(t,n,r,o){return t.addEventListener(n,r,o),()=>{t.removeEventListener(n,r,o)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.remove()}createElement(t,n){return n=n||this.getDefaultDocument(),n.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return n==="window"?window:n==="document"?t:n==="body"?t.body:null}getBaseHref(t){let n=XE();return n==null?null:eC(n)}resetBaseElement(){li=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Pa(document.cookie,t)}},li=null;function XE(){return li=li||document.querySelector("base"),li?li.getAttribute("href"):null}function eC(e){return new URL(e,document.baseURI).pathname}var tC=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),qu=new O(""),fy=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(n,r){this._zone=r,n.forEach(o=>{o.manager=this}),this._plugins=n.slice().reverse()}addEventListener(n,r,o,i){return this._findPluginFor(r).addEventListener(n,r,o,i)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(i=>i.supports(n)),!r)throw new N(5101,!1);return this._eventNameToPlugin.set(n,r),r}static \u0275fac=function(r){return new(r||e)(A(qu),A(Te))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),Oa=class{_doc;constructor(t){this._doc=t}manager},Na="ng-app-id";function ay(e){for(let t of e)t.remove()}function cy(e,t){let n=t.createElement("style");return n.textContent=e,n}function nC(e,t,n,r){let o=e.head?.querySelectorAll(`style[${Na}="${t}"],link[${Na}="${t}"]`);if(o)for(let i of o)i.removeAttribute(Na),i instanceof HTMLLinkElement?r.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&n.set(i.textContent,{usage:0,elements:[i]})}function Wu(e,t){let n=t.createElement("link");return n.setAttribute("rel","stylesheet"),n.setAttribute("href",e),n}var hy=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(n,r,o,i={}){this.doc=n,this.appId=r,this.nonce=o,this.isServer=Fu(i),nC(n,r,this.inline,this.external),this.hosts.add(n.head)}addStyles(n,r){for(let o of n)this.addUsage(o,this.inline,cy);r?.forEach(o=>this.addUsage(o,this.external,Wu))}removeStyles(n,r){for(let o of n)this.removeUsage(o,this.inline);r?.forEach(o=>this.removeUsage(o,this.external))}addUsage(n,r,o){let i=r.get(n);i?i.usage++:r.set(n,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(n,this.doc)))})}removeUsage(n,r){let o=r.get(n);o&&(o.usage--,o.usage<=0&&(ay(o.elements),r.delete(n)))}ngOnDestroy(){for(let[,{elements:n}]of[...this.inline,...this.external])ay(n);this.hosts.clear()}addHost(n){this.hosts.add(n);for(let[r,{elements:o}]of this.inline)o.push(this.addElement(n,cy(r,this.doc)));for(let[r,{elements:o}]of this.external)o.push(this.addElement(n,Wu(r,this.doc)))}removeHost(n){this.hosts.delete(n)}addElement(n,r){return this.nonce&&r.setAttribute("nonce",this.nonce),this.isServer&&r.setAttribute(Na,this.appId),n.appendChild(r)}static \u0275fac=function(r){return new(r||e)(A(Ke),A(Du),A(Tu,8),A(xn))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),Vu={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Qu=/%COMP%/g;var py="%COMP%",rC=`_nghost-${py}`,oC=`_ngcontent-${py}`,iC=!0,sC=new O("",{providedIn:"root",factory:()=>iC});function aC(e){return oC.replace(Qu,e)}function cC(e){return rC.replace(Qu,e)}function my(e,t){return t.map(n=>n.replace(Qu,e))}var ly=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(n,r,o,i,s,c,l,u=null,d=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=s,this.platformId=c,this.ngZone=l,this.nonce=u,this.tracingService=d,this.platformIsServer=Fu(c),this.defaultRenderer=new ui(n,s,l,this.platformIsServer,this.tracingService)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Bt.ShadowDom&&(r=ae(R({},r),{encapsulation:Bt.Emulated}));let o=this.getOrCreateRenderer(n,r);return o instanceof Aa?o.applyToHost(n):o instanceof di&&o.applyStyles(),o}getOrCreateRenderer(n,r){let o=this.rendererByCompId,i=o.get(r.id);if(!i){let s=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.platformIsServer,h=this.tracingService;switch(r.encapsulation){case Bt.Emulated:i=new Aa(l,u,r,this.appId,d,s,c,f,h);break;case Bt.ShadowDom:return new Gu(l,u,n,r,s,c,this.nonce,f,h);default:i=new di(l,u,r,d,s,c,f,h);break}o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(n){this.rendererByCompId.delete(n)}static \u0275fac=function(r){return new(r||e)(A(fy),A(hy),A(Du),A(sC),A(Ke),A(xn),A(Te),A(Tu),A(Da,8))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),ui=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,n,r,o,i){this.eventManager=t,this.doc=n,this.ngZone=r,this.platformIsServer=o,this.tracingService=i}destroy(){}destroyNode=null;createElement(t,n){return n?this.doc.createElementNS(Vu[n]||n,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,n){(uy(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(uy(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){n.remove()}selectRootElement(t,n){let r=typeof t=="string"?this.doc.querySelector(t):t;if(!r)throw new N(-5104,!1);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;let i=Vu[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){let o=Vu[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(ir.DashCase|ir.Important)?t.style.setProperty(n,r,o&ir.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&ir.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t!=null&&(t[n]=r)}setValue(t,n){t.nodeValue=n}listen(t,n,r,o){if(typeof t=="string"&&(t=Qr().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${n}`);let i=this.decoratePreventDefault(r);return this.tracingService!==null&&this.tracingService.wrapEventListener&&(i=this.tracingService.wrapEventListener(t,n,i)),this.eventManager.addEventListener(t,n,i,o)}decoratePreventDefault(t){return n=>{if(n==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(n)):t(n))===!1&&n.preventDefault()}}};function uy(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var Gu=class extends ui{sharedStylesHost;hostEl;shadowRoot;constructor(t,n,r,o,i,s,c,l,u){super(t,i,s,l,u),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=o.styles;d=my(o.id,d);for(let h of d){let p=document.createElement("style");c&&p.setAttribute("nonce",c),p.textContent=h,this.shadowRoot.appendChild(p)}let f=o.getExternalStyles?.();if(f)for(let h of f){let p=Wu(h,i);c&&p.setAttribute("nonce",c),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(null,n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},di=class extends ui{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,n,r,o,i,s,c,l,u){super(t,i,s,c,l),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=o;let d=r.styles;this.styles=u?my(u,d):d,this.styleUrls=r.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Aa=class extends di{contentAttr;hostAttr;constructor(t,n,r,o,i,s,c,l,u){let d=o+"-"+r.id;super(t,n,r,i,s,c,l,u,d),this.contentAttr=aC(d),this.hostAttr=cC(d)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,n){let r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}},lC=(()=>{class e extends Oa{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o,i){return n.addEventListener(r,o,i),()=>this.removeEventListener(n,r,o,i)}removeEventListener(n,r,o,i){return n.removeEventListener(r,o,i)}static \u0275fac=function(r){return new(r||e)(A(Ke))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),dy=["alt","control","meta","shift"],uC={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},dC={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},fC=(()=>{class e extends Oa{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,r,o,i){let s=e.parseEventName(r),c=e.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Qr().onAndCancel(n,s.domEventName,c,i))}static parseEventName(n){let r=n.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let i=e._normalizeKey(r.pop()),s="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),s="code."),dy.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),s+=u+".")}),s+=i,r.length!=0||i.length===0)return null;let l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(n,r){let o=uC[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),dy.forEach(s=>{if(s!==o){let c=dC[s];c(n)&&(i+=s+".")}}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return n==="esc"?"escape":n}static \u0275fac=function(r){return new(r||e)(A(Ke))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();function gy(e,t){return Fg(R({rootComponent:e},hC(t)))}function hC(e){return{appProviders:[...vC,...e?.providers??[]],platformProviders:yC}}function pC(){zu.makeCurrent()}function mC(){return new In}function gC(){return Wm(document),document}var yC=[{provide:xn,useValue:Wg},{provide:wu,useValue:pC,multi:!0},{provide:Ke,useFactory:gC,deps:[]}];var vC=[{provide:fa,useValue:"root"},{provide:In,useFactory:mC,deps:[]},{provide:qu,useClass:lC,multi:!0,deps:[Ke,Te,xn]},{provide:qu,useClass:fC,multi:!0,deps:[Ke]},ly,hy,fy,{provide:$r,useExisting:ly},{provide:Kr,useClass:tC,deps:[]},[]];var yy=(()=>{class e{_doc;constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}static \u0275fac=function(r){return new(r||e)(A(Ke))};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var j="primary",Pi=Symbol("RouteTitle"),Xu=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}};function no(e){return new Xu(e)}function bC(e,t,n){let r=n.path.split("/");if(r.length>e.length||n.pathMatch==="full"&&(t.hasChildren()||r.length<e.length))return null;let o={};for(let i=0;i<r.length;i++){let s=r[i],c=e[i];if(s[0]===":")o[s.substring(1)]=c;else if(s!==c.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}function DC(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!$t(e[n],t[n]))return!1;return!0}function $t(e,t){let n=e?ed(e):void 0,r=t?ed(t):void 0;if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!Cy(e[o],t[o]))return!1;return!0}function ed(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Cy(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;let n=[...e].sort(),r=[...t].sort();return n.every((o,i)=>r[i]===o)}else return e===t}function Iy(e){return e.length>0?e[e.length-1]:null}function Nn(e){return pl(e)?e:ri(e)?fe(Promise.resolve(e)):H(e)}var wC={exact:My,subset:Ry},Py={exact:TC,subset:EC,ignored:()=>!0};function vy(e,t,n){return wC[n.paths](e.root,t.root,n.matrixParams)&&Py[n.queryParams](e.queryParams,t.queryParams)&&!(n.fragment==="exact"&&e.fragment!==t.fragment)}function TC(e,t){return $t(e,t)}function My(e,t,n){if(!cr(e.segments,t.segments)||!Ha(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(let r in t.children)if(!e.children[r]||!My(e.children[r],t.children[r],n))return!1;return!0}function EC(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>Cy(e[n],t[n]))}function Ry(e,t,n){return _y(e,t,t.segments,n)}function _y(e,t,n,r){if(e.segments.length>n.length){let o=e.segments.slice(0,n.length);return!(!cr(o,n)||t.hasChildren()||!Ha(o,n,r))}else if(e.segments.length===n.length){if(!cr(e.segments,n)||!Ha(e.segments,n,r))return!1;for(let o in t.children)if(!e.children[o]||!Ry(e.children[o],t.children[o],r))return!1;return!0}else{let o=n.slice(0,e.segments.length),i=n.slice(e.segments.length);return!cr(e.segments,o)||!Ha(e.segments,o,r)||!e.children[j]?!1:_y(e.children[j],t,i,r)}}function Ha(e,t,n){return t.every((r,o)=>Py[n](e[o].parameters,r.parameters))}var sn=class{root;queryParams;fragment;_queryParamMap;constructor(t=new te([],{}),n={},r=null){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap??=no(this.queryParams),this._queryParamMap}toString(){return PC.serialize(this)}},te=class{segments;children;parent=null;constructor(t,n){this.segments=t,this.children=n,Object.values(n).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ua(this)}},ar=class{path;parameters;_parameterMap;constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap??=no(this.parameters),this._parameterMap}toString(){return ky(this)}};function CC(e,t){return cr(e,t)&&e.every((n,r)=>$t(n.parameters,t[r].parameters))}function cr(e,t){return e.length!==t.length?!1:e.every((n,r)=>n.path===t[r].path)}function IC(e,t){let n=[];return Object.entries(e.children).forEach(([r,o])=>{r===j&&(n=n.concat(t(o,r)))}),Object.entries(e.children).forEach(([r,o])=>{r!==j&&(n=n.concat(t(o,r)))}),n}var Id=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>new yi,providedIn:"root"})}return e})(),yi=class{parse(t){let n=new nd(t);return new sn(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){let n=`/${fi(t.root,!0)}`,r=_C(t.queryParams),o=typeof t.fragment=="string"?`#${MC(t.fragment)}`:"";return`${n}${r}${o}`}},PC=new yi;function Ua(e){return e.segments.map(t=>ky(t)).join("/")}function fi(e,t){if(!e.hasChildren())return Ua(e);if(t){let n=e.children[j]?fi(e.children[j],!1):"",r=[];return Object.entries(e.children).forEach(([o,i])=>{o!==j&&r.push(`${o}:${fi(i,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}else{let n=IC(e,(r,o)=>o===j?[fi(e.children[j],!1)]:[`${o}:${fi(r,!1)}`]);return Object.keys(e.children).length===1&&e.children[j]!=null?`${Ua(e)}/${n[0]}`:`${Ua(e)}/(${n.join("//")})`}}function xy(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Fa(e){return xy(e).replace(/%3B/gi,";")}function MC(e){return encodeURI(e)}function td(e){return xy(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ja(e){return decodeURIComponent(e)}function Sy(e){return ja(e.replace(/\+/g,"%20"))}function ky(e){return`${td(e.path)}${RC(e.parameters)}`}function RC(e){return Object.entries(e).map(([t,n])=>`;${td(t)}=${td(n)}`).join("")}function _C(e){let t=Object.entries(e).map(([n,r])=>Array.isArray(r)?r.map(o=>`${Fa(n)}=${Fa(o)}`).join("&"):`${Fa(n)}=${Fa(r)}`).filter(n=>n);return t.length?`?${t.join("&")}`:""}var xC=/^[^\/()?;#]+/;function Ku(e){let t=e.match(xC);return t?t[0]:""}var kC=/^[^\/()?;=#]+/;function NC(e){let t=e.match(kC);return t?t[0]:""}var OC=/^[^=?&#]+/;function AC(e){let t=e.match(OC);return t?t[0]:""}var FC=/^[^&#]+/;function LC(e){let t=e.match(FC);return t?t[0]:""}var nd=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new te([],{}):new te([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(r[j]=new te(t,n)),r}parseSegment(){let t=Ku(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new N(4009,!1);return this.capture(t),new ar(ja(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let n=NC(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let o=Ku(this.remaining);o&&(r=o,this.capture(r))}t[ja(n)]=ja(r)}parseQueryParam(t){let n=AC(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let s=LC(this.remaining);s&&(r=s,this.capture(r))}let o=Sy(n),i=Sy(r);if(t.hasOwnProperty(o)){let s=t[o];Array.isArray(s)||(s=[s],t[o]=s),s.push(i)}else t[o]=i}parseParens(t){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Ku(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new N(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):t&&(i=j);let s=this.parseChildren();n[i]=Object.keys(s).length===1?s[j]:new te([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new N(4011,!1)}};function Ny(e){return e.segments.length>0?new te([],{[j]:e}):e}function Oy(e){let t={};for(let[r,o]of Object.entries(e.children)){let i=Oy(o);if(r===j&&i.segments.length===0&&i.hasChildren())for(let[s,c]of Object.entries(i.children))t[s]=c;else(i.segments.length>0||i.hasChildren())&&(t[r]=i)}let n=new te(e.segments,t);return HC(n)}function HC(e){if(e.numberOfChildren===1&&e.children[j]){let t=e.children[j];return new te(e.segments.concat(t.segments),t.children)}return e}function vi(e){return e instanceof sn}function UC(e,t,n=null,r=null){let o=Ay(e);return Fy(o,t,n,r)}function Ay(e){let t;function n(i){let s={};for(let l of i.children){let u=n(l);s[l.outlet]=u}let c=new te(i.url,s);return i===e&&(t=c),c}let r=n(e.root),o=Ny(r);return t??o}function Fy(e,t,n,r){let o=e;for(;o.parent;)o=o.parent;if(t.length===0)return Yu(o,o,o,n,r);let i=jC(t);if(i.toRoot())return Yu(o,o,new te([],{}),n,r);let s=BC(i,o,e),c=s.processChildren?pi(s.segmentGroup,s.index,i.commands):Hy(s.segmentGroup,s.index,i.commands);return Yu(o,s.segmentGroup,c,n,r)}function Ba(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function Si(e){return typeof e=="object"&&e!=null&&e.outlets}function Yu(e,t,n,r,o){let i={};r&&Object.entries(r).forEach(([l,u])=>{i[l]=Array.isArray(u)?u.map(d=>`${d}`):`${u}`});let s;e===t?s=n:s=Ly(e,t,n);let c=Ny(Oy(s));return new sn(c,i,o)}function Ly(e,t,n){let r={};return Object.entries(e.children).forEach(([o,i])=>{i===t?r[o]=n:r[o]=Ly(i,t,n)}),new te(e.segments,r)}var Va=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&Ba(r[0]))throw new N(4003,!1);let o=r.find(Si);if(o&&o!==Iy(r))throw new N(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function jC(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new Va(!0,0,e);let t=0,n=!1,r=e.reduce((o,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let c={};return Object.entries(i.outlets).forEach(([l,u])=>{c[l]=typeof u=="string"?u.split("/"):u}),[...o,{outlets:c}]}if(i.segmentPath)return[...o,i.segmentPath]}return typeof i!="string"?[...o,i]:s===0?(i.split("/").forEach((c,l)=>{l==0&&c==="."||(l==0&&c===""?n=!0:c===".."?t++:c!=""&&o.push(c))}),o):[...o,i]},[]);return new Va(n,t,r)}var Xr=class{segmentGroup;processChildren;index;constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}};function BC(e,t,n){if(e.isAbsolute)return new Xr(t,!0,0);if(!n)return new Xr(t,!1,NaN);if(n.parent===null)return new Xr(n,!0,0);let r=Ba(e.commands[0])?0:1,o=n.segments.length-1+r;return VC(n,o,e.numberOfDoubleDots)}function VC(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new N(4005,!1);o=r.segments.length}return new Xr(r,!1,o-i)}function $C(e){return Si(e[0])?e[0].outlets:{[j]:e}}function Hy(e,t,n){if(e??=new te([],{}),e.segments.length===0&&e.hasChildren())return pi(e,t,n);let r=zC(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){let i=new te(e.segments.slice(0,r.pathIndex),{});return i.children[j]=new te(e.segments.slice(r.pathIndex),e.children),pi(i,0,o)}else return r.match&&o.length===0?new te(e.segments,{}):r.match&&!e.hasChildren()?rd(e,t,n):r.match?pi(e,0,o):rd(e,t,n)}function pi(e,t,n){if(n.length===0)return new te(e.segments,{});{let r=$C(n),o={};if(Object.keys(r).some(i=>i!==j)&&e.children[j]&&e.numberOfChildren===1&&e.children[j].segments.length===0){let i=pi(e.children[j],t,n);return new te(e.segments,i.children)}return Object.entries(r).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(o[i]=Hy(e.children[i],t,s))}),Object.entries(e.children).forEach(([i,s])=>{r[i]===void 0&&(o[i]=s)}),new te(e.segments,o)}}function zC(e,t,n){let r=0,o=t,i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;let s=e.segments[o],c=n[r];if(Si(c))break;let l=`${c}`,u=r<n.length-1?n[r+1]:null;if(o>0&&l===void 0)break;if(l&&u&&typeof u=="object"&&u.outlets===void 0){if(!Dy(l,u,s))return i;r+=2}else{if(!Dy(l,{},s))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}function rd(e,t,n){let r=e.segments.slice(0,t),o=0;for(;o<n.length;){let i=n[o];if(Si(i)){let l=qC(i.outlets);return new te(r,l)}if(o===0&&Ba(n[0])){let l=e.segments[t];r.push(new ar(l.path,by(n[0]))),o++;continue}let s=Si(i)?i.outlets[j]:`${i}`,c=o<n.length-1?n[o+1]:null;s&&c&&Ba(c)?(r.push(new ar(s,by(c))),o+=2):(r.push(new ar(s,{})),o++)}return new te(r,{})}function qC(e){let t={};return Object.entries(e).forEach(([n,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(t[n]=rd(new te([],{}),0,r))}),t}function by(e){let t={};return Object.entries(e).forEach(([n,r])=>t[n]=`${r}`),t}function Dy(e,t,n){return e==n.path&&$t(t,n.parameters)}var mi="imperative",Ae=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(Ae||{}),vt=class{id;url;constructor(t,n){this.id=t,this.url=n}},bi=class extends vt{type=Ae.NavigationStart;navigationTrigger;restoredState;constructor(t,n,r="imperative",o=null){super(t,n),this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},lr=class extends vt{urlAfterRedirects;type=Ae.NavigationEnd;constructor(t,n,r){super(t,n),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},at=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e}(at||{}),od=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}(od||{}),on=class extends vt{reason;code;type=Ae.NavigationCancel;constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},ur=class extends vt{reason;code;type=Ae.NavigationSkipped;constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o}},Di=class extends vt{error;target;type=Ae.NavigationError;constructor(t,n,r,o){super(t,n),this.error=r,this.target=o}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},$a=class extends vt{urlAfterRedirects;state;type=Ae.RoutesRecognized;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},id=class extends vt{urlAfterRedirects;state;type=Ae.GuardsCheckStart;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},sd=class extends vt{urlAfterRedirects;state;shouldActivate;type=Ae.GuardsCheckEnd;constructor(t,n,r,o,i){super(t,n),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ad=class extends vt{urlAfterRedirects;state;type=Ae.ResolveStart;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cd=class extends vt{urlAfterRedirects;state;type=Ae.ResolveEnd;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ld=class{route;type=Ae.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ud=class{route;type=Ae.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},dd=class{snapshot;type=Ae.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fd=class{snapshot;type=Ae.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},hd=class{snapshot;type=Ae.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},pd=class{snapshot;type=Ae.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var wi=class{},ro=class{url;navigationBehaviorOptions;constructor(t,n){this.url=t,this.navigationBehaviorOptions=n}};function WC(e,t){return e.providers&&!e._injector&&(e._injector=_u(e.providers,t,`Route: ${e.path}`)),e._injector??t}function Rt(e){return e.outlet||j}function GC(e,t){let n=e.filter(r=>Rt(r)===t);return n.push(...e.filter(r=>Rt(r)!==t)),n}function Mi(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let t=e.parent;t;t=t.parent){let n=t.routeConfig;if(n?._loadedInjector)return n._loadedInjector;if(n?._injector)return n._injector}return null}var md=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Mi(this.route?.snapshot)??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new Ya(this.rootInjector)}},Ya=(()=>{class e{rootInjector;contexts=new Map;constructor(n){this.rootInjector=n}onChildOutletCreated(n,r){let o=this.getOrCreateContext(n);o.outlet=r,this.contexts.set(n,o)}onChildOutletDestroyed(n){let r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new md(this.rootInjector),this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}static \u0275fac=function(r){return new(r||e)(A(Qe))};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),za=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){let n=gd(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){let n=gd(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){let n=yd(t,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==t)}pathFromRoot(t){return yd(t,this._root).map(n=>n.value)}};function gd(e,t){if(e===t.value)return t;for(let n of t.children){let r=gd(e,n);if(r)return r}return null}function yd(e,t){if(e===t.value)return[t];for(let n of t.children){let r=yd(e,n);if(r.length)return r.unshift(t),r}return[]}var st=class{value;children;constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}};function Jr(e){let t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t}var qa=class extends za{snapshot;constructor(t,n){super(t),this.snapshot=n,Pd(this,t)}toString(){return this.snapshot.toString()}};function Uy(e){let t=QC(e),n=new ye([new ar("",{})]),r=new ye({}),o=new ye({}),i=new ye({}),s=new ye(""),c=new oo(n,r,i,s,o,j,e,t.root);return c.snapshot=t.root,new qa(new st(c,[]),t)}function QC(e){let t={},n={},r={},o="",i=new eo([],t,r,o,n,j,e,null,{});return new Ga("",new st(i,[]))}var oo=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,n,r,o,i,s,c,l){this.urlSubject=t,this.paramsSubject=n,this.queryParamsSubject=r,this.fragmentSubject=o,this.dataSubject=i,this.outlet=s,this.component=c,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(F(u=>u[Pi]))??H(void 0),this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(F(t=>no(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(F(t=>no(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Wa(e,t,n="emptyOnly"){let r,{routeConfig:o}=e;return t!==null&&(n==="always"||o?.path===""||!t.component&&!t.routeConfig?.loadComponent)?r={params:R(R({},t.params),e.params),data:R(R({},t.data),e.data),resolve:R(R(R(R({},e.data),t.data),o?.data),e._resolvedData)}:r={params:R({},e.params),data:R({},e.data),resolve:R(R({},e.data),e._resolvedData??{})},o&&By(o)&&(r.resolve[Pi]=o.title),r}var eo=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Pi]}constructor(t,n,r,o,i,s,c,l,u){this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=c,this.routeConfig=l,this._resolve=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=no(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=no(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(r=>r.toString()).join("/"),n=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${n}')`}},Ga=class extends za{url;constructor(t,n){super(n),this.url=t,Pd(this,n)}toString(){return jy(this._root)}};function Pd(e,t){t.value._routerState=e,t.children.forEach(n=>Pd(e,n))}function jy(e){let t=e.children.length>0?` { ${e.children.map(jy).join(", ")} } `:"";return`${e.value}${t}`}function Zu(e){if(e.snapshot){let t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,$t(t.queryParams,n.queryParams)||e.queryParamsSubject.next(n.queryParams),t.fragment!==n.fragment&&e.fragmentSubject.next(n.fragment),$t(t.params,n.params)||e.paramsSubject.next(n.params),DC(t.url,n.url)||e.urlSubject.next(n.url),$t(t.data,n.data)||e.dataSubject.next(n.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function vd(e,t){let n=$t(e.params,t.params)&&CC(e.url,t.url),r=!e.parent!=!t.parent;return n&&!r&&(!e.parent||vd(e.parent,t.parent))}function By(e){return typeof e.title=="string"||e.title===null}var KC=new O(""),YC=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=j;activateEvents=new nt;deactivateEvents=new nt;attachEvents=new nt;detachEvents=new nt;routerOutletData=Um(void 0);parentContexts=P(Ya);location=P(Ta);changeDetector=P(oi);inputBinder=P(Md,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(n){if(n.name){let{firstChange:r,previousValue:o}=n.name;if(r)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(n){return this.parentContexts.getContext(n)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let n=this.parentContexts.getContext(this.name);n?.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new N(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new N(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new N(4012,!1);this.location.detach();let n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){let n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new N(4013,!1);this._activatedRoute=n;let o=this.location,s=n.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new Sd(n,c,o.injector,this.routerOutletData);this.activated=o.createComponent(s,{index:o.length,injector:l,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(r){return new(r||e)};static \u0275dir=xu({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[lu]})}return e})(),Sd=class e{route;childContexts;parent;outletData;__ngOutletInjector(t){return new e(this.route,this.childContexts,t,this.outletData)}constructor(t,n,r,o){this.route=t,this.childContexts=n,this.parent=r,this.outletData=o}get(t,n){return t===oo?this.route:t===Ya?this.childContexts:t===KC?this.outletData:this.parent.get(t,n)}},Md=new O("");function ZC(e,t,n){let r=Ti(e,t._root,n?n._root:void 0);return new qa(r,t)}function Ti(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){let r=n.value;r._futureSnapshot=t.value;let o=JC(e,t,n);return new st(r,o)}else{if(e.shouldAttach(t.value)){let i=e.retrieve(t.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(c=>Ti(e,c)),s}}let r=XC(t.value),o=t.children.map(i=>Ti(e,i));return new st(r,o)}}function JC(e,t,n){return t.children.map(r=>{for(let o of n.children)if(e.shouldReuseRoute(r.value,o.value.snapshot))return Ti(e,r,o);return Ti(e,r)})}function XC(e){return new oo(new ye(e.url),new ye(e.params),new ye(e.queryParams),new ye(e.fragment),new ye(e.data),e.outlet,e.component,e)}var Ei=class{redirectTo;navigationBehaviorOptions;constructor(t,n){this.redirectTo=t,this.navigationBehaviorOptions=n}},Vy="ngNavigationCancelingError";function Qa(e,t){let{redirectTo:n,navigationBehaviorOptions:r}=vi(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,o=$y(!1,at.Redirect);return o.url=n,o.navigationBehaviorOptions=r,o}function $y(e,t){let n=new Error(`NavigationCancelingError: ${e||""}`);return n[Vy]=!0,n.cancellationCode=t,n}function eI(e){return zy(e)&&vi(e.url)}function zy(e){return!!e&&e[Vy]}var tI=(e,t,n,r)=>F(o=>(new bd(t,o.targetRouterState,o.currentRouterState,n,r).activate(e),o)),bd=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,n,r,o,i){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=o,this.inputBindingEnabled=i}activate(t){let n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),Zu(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){let o=Jr(n);t.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,o[s],r),delete o[s]}),Object.values(o).forEach(i=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(o===i)if(o.component){let s=r.getContext(o.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,r);else i&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=Jr(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);if(r&&r.outlet){let s=r.outlet.detach(),c=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:c})}}deactivateRouteAndOutlet(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=Jr(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(t,n,r){let o=Jr(n);t.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new pd(i.value.snapshot))}),t.children.length&&this.forwardEvent(new fd(t.value.snapshot))}activateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(Zu(o),o===i)if(o.component){let s=r.getOrCreateContext(o.outlet);this.activateChildRoutes(t,n,s.children)}else this.activateChildRoutes(t,n,r);else if(o.component){let s=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let c=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),s.children.onOutletReAttached(c.contexts),s.attachRef=c.componentRef,s.route=c.route.value,s.outlet&&s.outlet.attach(c.componentRef,c.route.value),Zu(c.route.value),this.activateChildRoutes(t,null,s.children)}else s.attachRef=null,s.route=o,s.outlet&&s.outlet.activateWith(o,s.injector),this.activateChildRoutes(t,null,s.children)}else this.activateChildRoutes(t,null,r)}},Ka=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},to=class{component;route;constructor(t,n){this.component=t,this.route=n}};function nI(e,t,n){let r=e._root,o=t?t._root:null;return hi(r,o,n,[r.value])}function rI(e){let t=e.routeConfig?e.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:e,guards:t}}function so(e,t){let n=Symbol(),r=t.get(e,n);return r===n?typeof e=="function"&&!Fp(e)?e:t.get(e):r}function hi(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=Jr(t);return e.children.forEach(s=>{oI(s,i[s.value.outlet],n,r.concat([s.value]),o),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,c])=>gi(c,n.getContext(s),o)),o}function oI(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,s=t?t.value:null,c=n?n.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let l=iI(s,i,i.routeConfig.runGuardsAndResolvers);l?o.canActivateChecks.push(new Ka(r)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?hi(e,t,c?c.children:null,r,o):hi(e,t,n,r,o),l&&c&&c.outlet&&c.outlet.isActivated&&o.canDeactivateChecks.push(new to(c.outlet.component,s))}else s&&gi(t,c,o),o.canActivateChecks.push(new Ka(r)),i.component?hi(e,null,c?c.children:null,r,o):hi(e,null,n,r,o);return o}function iI(e,t,n){if(typeof n=="function")return n(e,t);switch(n){case"pathParamsChange":return!cr(e.url,t.url);case"pathParamsOrQueryParamsChange":return!cr(e.url,t.url)||!$t(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!vd(e,t)||!$t(e.queryParams,t.queryParams);case"paramsChange":default:return!vd(e,t)}}function gi(e,t,n){let r=Jr(e),o=e.value;Object.entries(r).forEach(([i,s])=>{o.component?t?gi(s,t.children.getContext(i),n):gi(s,null,n):gi(s,t,n)}),o.component?t&&t.outlet&&t.outlet.isActivated?n.canDeactivateChecks.push(new to(t.outlet.component,o)):n.canDeactivateChecks.push(new to(null,o)):n.canDeactivateChecks.push(new to(null,o))}function Ri(e){return typeof e=="function"}function sI(e){return typeof e=="boolean"}function aI(e){return e&&Ri(e.canLoad)}function cI(e){return e&&Ri(e.canActivate)}function lI(e){return e&&Ri(e.canActivateChild)}function uI(e){return e&&Ri(e.canDeactivate)}function dI(e){return e&&Ri(e.canMatch)}function qy(e){return e instanceof Yt||e?.name==="EmptyError"}var La=Symbol("INITIAL_VALUE");function io(){return tt(e=>Ns(e.map(t=>t.pipe(Zt(1),Ho(La)))).pipe(F(t=>{for(let n of t)if(n!==!0){if(n===La)return La;if(n===!1||fI(n))return n}return!0}),et(t=>t!==La),Zt(1)))}function fI(e){return vi(e)||e instanceof Ei}function hI(e,t){return Pe(n=>{let{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return s.length===0&&i.length===0?H(ae(R({},n),{guardsResult:!0})):pI(s,r,o,e).pipe(Pe(c=>c&&sI(c)?mI(r,i,e,t):H(c)),F(c=>ae(R({},n),{guardsResult:c})))})}function pI(e,t,n,r){return fe(e).pipe(Pe(o=>bI(o.component,o.route,n,t,r)),Jt(o=>o!==!0,!0))}function mI(e,t,n,r){return fe(t).pipe(Sn(o=>kr(yI(o.route.parent,r),gI(o.route,r),SI(e,o.path,n),vI(e,o.route,n))),Jt(o=>o!==!0,!0))}function gI(e,t){return e!==null&&t&&t(new hd(e)),H(!0)}function yI(e,t){return e!==null&&t&&t(new dd(e)),H(!0)}function vI(e,t,n){let r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||r.length===0)return H(!0);let o=r.map(i=>Os(()=>{let s=Mi(t)??n,c=so(i,s),l=cI(c)?c.canActivate(t,e):it(s,()=>c(t,e));return Nn(l).pipe(Jt())}));return H(o).pipe(io())}function SI(e,t,n){let r=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(s=>rI(s)).filter(s=>s!==null).map(s=>Os(()=>{let c=s.guards.map(l=>{let u=Mi(s.node)??n,d=so(l,u),f=lI(d)?d.canActivateChild(r,e):it(u,()=>d(r,e));return Nn(f).pipe(Jt())});return H(c).pipe(io())}));return H(i).pipe(io())}function bI(e,t,n,r,o){let i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!i||i.length===0)return H(!0);let s=i.map(c=>{let l=Mi(t)??o,u=so(c,l),d=uI(u)?u.canDeactivate(e,t,n,r):it(l,()=>u(e,t,n,r));return Nn(d).pipe(Jt())});return H(s).pipe(io())}function DI(e,t,n,r){let o=t.canLoad;if(o===void 0||o.length===0)return H(!0);let i=o.map(s=>{let c=so(s,e),l=aI(c)?c.canLoad(t,n):it(e,()=>c(t,n));return Nn(l)});return H(i).pipe(io(),Wy(r))}function Wy(e){return al(Ne(t=>{if(typeof t!="boolean")throw Qa(e,t)}),F(t=>t===!0))}function wI(e,t,n,r){let o=t.canMatch;if(!o||o.length===0)return H(!0);let i=o.map(s=>{let c=so(s,e),l=dI(c)?c.canMatch(t,n):it(e,()=>c(t,n));return Nn(l)});return H(i).pipe(io(),Wy(r))}var Ci=class{segmentGroup;constructor(t){this.segmentGroup=t||null}},Ii=class extends Error{urlTree;constructor(t){super(),this.urlTree=t}};function Zr(e){return xr(new Ci(e))}function TI(e){return xr(new N(4e3,!1))}function EI(e){return xr($y(!1,at.GuardRejected))}var Dd=class{urlSerializer;urlTree;constructor(t,n){this.urlSerializer=t,this.urlTree=n}lineralizeSegments(t,n){let r=[],o=n.root;for(;;){if(r=r.concat(o.segments),o.numberOfChildren===0)return H(r);if(o.numberOfChildren>1||!o.children[j])return TI(`${t.redirectTo}`);o=o.children[j]}}applyRedirectCommands(t,n,r,o,i){if(typeof n!="string"){let c=n,{queryParams:l,fragment:u,routeConfig:d,url:f,outlet:h,params:p,data:g,title:v}=o,b=it(i,()=>c({params:p,data:g,queryParams:l,fragment:u,routeConfig:d,url:f,outlet:h,title:v}));if(b instanceof sn)throw new Ii(b);n=b}let s=this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),t,r);if(n[0]==="/")throw new Ii(s);return s}applyRedirectCreateUrlTree(t,n,r,o){let i=this.createSegmentGroup(t,n.root,r,o);return new sn(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){let r={};return Object.entries(t).forEach(([o,i])=>{if(typeof i=="string"&&i[0]===":"){let c=i.substring(1);r[o]=n[c]}else r[o]=i}),r}createSegmentGroup(t,n,r,o){let i=this.createSegments(t,n.segments,r,o),s={};return Object.entries(n.children).forEach(([c,l])=>{s[c]=this.createSegmentGroup(t,l,r,o)}),new te(i,s)}createSegments(t,n,r,o){return n.map(i=>i.path[0]===":"?this.findPosParam(t,i,o):this.findOrReturn(i,r))}findPosParam(t,n,r){let o=r[n.path.substring(1)];if(!o)throw new N(4001,!1);return o}findOrReturn(t,n){let r=0;for(let o of n){if(o.path===t.path)return n.splice(r),o;r++}return t}},wd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function CI(e,t,n,r,o){let i=Gy(e,t,n);return i.matched?(r=WC(t,r),wI(r,t,n,o).pipe(F(s=>s===!0?i:R({},wd)))):H(i)}function Gy(e,t,n){if(t.path==="**")return II(n);if(t.path==="")return t.pathMatch==="full"&&(e.hasChildren()||n.length>0)?R({},wd):{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};let o=(t.matcher||bC)(n,e,t);if(!o)return R({},wd);let i={};Object.entries(o.posParams??{}).forEach(([c,l])=>{i[c]=l.path});let s=o.consumed.length>0?R(R({},i),o.consumed[o.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:o.consumed,remainingSegments:n.slice(o.consumed.length),parameters:s,positionalParamSegments:o.posParams??{}}}function II(e){return{matched:!0,parameters:e.length>0?Iy(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function wy(e,t,n,r){return n.length>0&&RI(e,n,r)?{segmentGroup:new te(t,MI(r,new te(n,e.children))),slicedSegments:[]}:n.length===0&&_I(e,n,r)?{segmentGroup:new te(e.segments,PI(e,n,r,e.children)),slicedSegments:n}:{segmentGroup:new te(e.segments,e.children),slicedSegments:n}}function PI(e,t,n,r){let o={};for(let i of n)if(Za(e,t,i)&&!r[Rt(i)]){let s=new te([],{});o[Rt(i)]=s}return R(R({},r),o)}function MI(e,t){let n={};n[j]=t;for(let r of e)if(r.path===""&&Rt(r)!==j){let o=new te([],{});n[Rt(r)]=o}return n}function RI(e,t,n){return n.some(r=>Za(e,t,r)&&Rt(r)!==j)}function _I(e,t,n){return n.some(r=>Za(e,t,r))}function Za(e,t,n){return(e.hasChildren()||t.length>0)&&n.pathMatch==="full"?!1:n.path===""}function xI(e,t,n){return t.length===0&&!e.children[n]}var Td=class{};function kI(e,t,n,r,o,i,s="emptyOnly"){return new Ed(e,t,n,r,o,s,i).recognize()}var NI=31,Ed=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,n,r,o,i,s,c){this.injector=t,this.configLoader=n,this.rootComponentType=r,this.config=o,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=c,this.applyRedirects=new Dd(this.urlSerializer,this.urlTree)}noMatchError(t){return new N(4002,`'${t.segmentGroup}'`)}recognize(){let t=wy(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(F(({children:n,rootSnapshot:r})=>{let o=new st(r,n),i=new Ga("",o),s=UC(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}}))}match(t){let n=new eo([],Object.freeze({}),Object.freeze(R({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),j,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,t,j,n).pipe(F(r=>({children:r,rootSnapshot:n})),vn(r=>{if(r instanceof Ii)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof Ci?this.noMatchError(r):r}))}processSegmentGroup(t,n,r,o,i){return r.segments.length===0&&r.hasChildren()?this.processChildren(t,n,r,i):this.processSegment(t,n,r,r.segments,o,!0,i).pipe(F(s=>s instanceof st?[s]:[]))}processChildren(t,n,r,o){let i=[];for(let s of Object.keys(r.children))s==="primary"?i.unshift(s):i.push(s);return fe(i).pipe(Sn(s=>{let c=r.children[s],l=GC(n,s);return this.processSegmentGroup(t,l,c,s,o)}),yl((s,c)=>(s.push(...c),s)),bn(null),gl(),Pe(s=>{if(s===null)return Zr(r);let c=Qy(s);return OI(c),H(c)}))}processSegment(t,n,r,o,i,s,c){return fe(n).pipe(Sn(l=>this.processSegmentAgainstRoute(l._injector??t,n,l,r,o,i,s,c).pipe(vn(u=>{if(u instanceof Ci)return H(null);throw u}))),Jt(l=>!!l),vn(l=>{if(qy(l))return xI(r,o,i)?H(new Td):Zr(r);throw l}))}processSegmentAgainstRoute(t,n,r,o,i,s,c,l){return Rt(r)!==s&&(s===j||!Za(o,i,r))?Zr(o):r.redirectTo===void 0?this.matchSegmentAgainstRoute(t,o,r,i,s,l):this.allowRedirects&&c?this.expandSegmentAgainstRouteUsingRedirect(t,o,n,r,i,s,l):Zr(o)}expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s,c){let{matched:l,parameters:u,consumedSegments:d,positionalParamSegments:f,remainingSegments:h}=Gy(n,o,i);if(!l)return Zr(n);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>NI&&(this.allowRedirects=!1));let p=new eo(i,u,Object.freeze(R({},this.urlTree.queryParams)),this.urlTree.fragment,Ty(o),Rt(o),o.component??o._loadedComponent??null,o,Ey(o)),g=Wa(p,c,this.paramsInheritanceStrategy);p.params=Object.freeze(g.params),p.data=Object.freeze(g.data);let v=this.applyRedirects.applyRedirectCommands(d,o.redirectTo,f,p,t);return this.applyRedirects.lineralizeSegments(o,v).pipe(Pe(b=>this.processSegment(t,r,n,b.concat(h),s,!1,c)))}matchSegmentAgainstRoute(t,n,r,o,i,s){let c=CI(n,r,o,t,this.urlSerializer);return r.path==="**"&&(n.children={}),c.pipe(tt(l=>l.matched?(t=r._injector??t,this.getChildConfig(t,r,o).pipe(tt(({routes:u})=>{let d=r._loadedInjector??t,{parameters:f,consumedSegments:h,remainingSegments:p}=l,g=new eo(h,f,Object.freeze(R({},this.urlTree.queryParams)),this.urlTree.fragment,Ty(r),Rt(r),r.component??r._loadedComponent??null,r,Ey(r)),v=Wa(g,s,this.paramsInheritanceStrategy);g.params=Object.freeze(v.params),g.data=Object.freeze(v.data);let{segmentGroup:b,slicedSegments:y}=wy(n,h,p,u);if(y.length===0&&b.hasChildren())return this.processChildren(d,u,b,g).pipe(F(D=>new st(g,D)));if(u.length===0&&y.length===0)return H(new st(g,[]));let w=Rt(r)===i;return this.processSegment(d,u,b,y,w?j:i,!0,g).pipe(F(D=>new st(g,D instanceof st?[D]:[])))}))):Zr(n)))}getChildConfig(t,n,r){return n.children?H({routes:n.children,injector:t}):n.loadChildren?n._loadedRoutes!==void 0?H({routes:n._loadedRoutes,injector:n._loadedInjector}):DI(t,n,r,this.urlSerializer).pipe(Pe(o=>o?this.configLoader.loadChildren(t,n).pipe(Ne(i=>{n._loadedRoutes=i.routes,n._loadedInjector=i.injector})):EI(n))):H({routes:[],injector:t})}};function OI(e){e.sort((t,n)=>t.value.outlet===j?-1:n.value.outlet===j?1:t.value.outlet.localeCompare(n.value.outlet))}function AI(e){let t=e.value.routeConfig;return t&&t.path===""}function Qy(e){let t=[],n=new Set;for(let r of e){if(!AI(r)){t.push(r);continue}let o=t.find(i=>r.value.routeConfig===i.value.routeConfig);o!==void 0?(o.children.push(...r.children),n.add(o)):t.push(r)}for(let r of n){let o=Qy(r.children);t.push(new st(r.value,o))}return t.filter(r=>!n.has(r))}function Ty(e){return e.data||{}}function Ey(e){return e.resolve||{}}function FI(e,t,n,r,o,i){return Pe(s=>kI(e,t,n,r,s.extractedUrl,o,i).pipe(F(({state:c,tree:l})=>ae(R({},s),{targetSnapshot:c,urlAfterRedirects:l}))))}function LI(e,t){return Pe(n=>{let{targetSnapshot:r,guards:{canActivateChecks:o}}=n;if(!o.length)return H(n);let i=new Set(o.map(l=>l.route)),s=new Set;for(let l of i)if(!s.has(l))for(let u of Ky(l))s.add(u);let c=0;return fe(s).pipe(Sn(l=>i.has(l)?HI(l,r,e,t):(l.data=Wa(l,l.parent,e).resolve,H(void 0))),Ne(()=>c++),Nr(1),Pe(l=>c===s.size?H(n):qe))})}function Ky(e){let t=e.children.map(n=>Ky(n)).flat();return[e,...t]}function HI(e,t,n,r){let o=e.routeConfig,i=e._resolve;return o?.title!==void 0&&!By(o)&&(i[Pi]=o.title),UI(i,e,t,r).pipe(F(s=>(e._resolvedData=s,e.data=Wa(e,e.parent,n).resolve,null)))}function UI(e,t,n,r){let o=ed(e);if(o.length===0)return H({});let i={};return fe(o).pipe(Pe(s=>jI(e[s],t,n,r).pipe(Jt(),Ne(c=>{if(c instanceof Ei)throw Qa(new yi,c);i[s]=c}))),Nr(1),F(()=>i),vn(s=>qy(s)?qe:xr(s)))}function jI(e,t,n,r){let o=Mi(t)??r,i=so(e,o),s=i.resolve?i.resolve(t,n):it(o,()=>i(t,n));return Nn(s)}function Ju(e){return tt(t=>{let n=e(t);return n?fe(n).pipe(F(()=>t)):H(t)})}var Yy=(()=>{class e{buildTitle(n){let r,o=n.root;for(;o!==void 0;)r=this.getResolvedTitleForRoute(o)??r,o=o.children.find(i=>i.outlet===j);return r}getResolvedTitleForRoute(n){return n.data[Pi]}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>P(BI),providedIn:"root"})}return e})(),BI=(()=>{class e extends Yy{title;constructor(n){super(),this.title=n}updateTitle(n){let r=this.buildTitle(n);r!==void 0&&this.title.setTitle(r)}static \u0275fac=function(r){return new(r||e)(A(yy))};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Rd=new O("",{providedIn:"root",factory:()=>({})}),VI=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=ee({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(r,o){r&1&&pe(0,"router-outlet")},dependencies:[YC],encapsulation:2})}return e})();function _d(e){let t=e.children&&e.children.map(_d),n=t?ae(R({},e),{children:t}):R({},e);return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==j&&(n.component=VI),n}var xd=new O(""),$I=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=P(Nu);loadComponent(n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return H(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=Nn(n.loadComponent()).pipe(F(Zy),Ne(i=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=i}),Jn(()=>{this.componentLoaders.delete(n)})),o=new Rr(r,()=>new He).pipe(Mr());return this.componentLoaders.set(n,o),o}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return H({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=zI(r,this.compiler,n,this.onLoadEndListener).pipe(Jn(()=>{this.childrenLoaders.delete(r)})),s=new Rr(i,()=>new He).pipe(Mr());return this.childrenLoaders.set(r,s),s}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function zI(e,t,n,r){return Nn(e.loadChildren()).pipe(F(Zy),Pe(o=>o instanceof Jo||Array.isArray(o)?H(o):fe(t.compileModuleAsync(o))),F(o=>{r&&r(e);let i,s,c=!1;return Array.isArray(o)?(s=o,c=!0):(i=o.create(n).injector,s=i.get(xd,[],{optional:!0,self:!0}).flat()),{routes:s.map(_d),injector:i}}))}function qI(e){return e&&typeof e=="object"&&"default"in e}function Zy(e){return qI(e)?e.default:e}var kd=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>P(WI),providedIn:"root"})}return e})(),WI=(()=>{class e{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,r){return n}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),GI=new O("");var QI=new O(""),KI=(()=>{class e{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new He;transitionAbortSubject=new He;configLoader=P($I);environmentInjector=P(Qe);destroyRef=P(Sa);urlSerializer=P(Id);rootContexts=P(Ya);location=P(ii);inputBindingEnabled=P(Md,{optional:!0})!==null;titleStrategy=P(Yy);options=P(Rd,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=P(kd);createViewTransition=P(GI,{optional:!0});navigationErrorHandler=P(QI,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>H(void 0);rootComponentType=null;destroyed=!1;constructor(){let n=o=>this.events.next(new ld(o)),r=o=>this.events.next(new ud(o));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=n,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(n){let r=++this.navigationId;this.transitions?.next(ae(R(R({},this.transitions.value),n),{id:r}))}setupNavigations(n,r,o){return this.transitions=new ye({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:mi,restoredState:null,currentSnapshot:o.snapshot,targetSnapshot:null,currentRouterState:o,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(et(i=>i.id!==0),F(i=>ae(R({},i),{extractedUrl:this.urlHandlingStrategy.extract(i.rawUrl)})),tt(i=>{let s=!1,c=!1;return H(i).pipe(tt(l=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",at.SupersededByNewNavigation),qe;this.currentTransition=i,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl=="string"?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?ae(R({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let u=!n.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=l.extras.onSameUrlNavigation??n.onSameUrlNavigation;if(!u&&d!=="reload"){let f="";return this.events.next(new ur(l.id,this.urlSerializer.serialize(l.rawUrl),f,od.IgnoredSameUrlNavigation)),l.resolve(!1),qe}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return H(l).pipe(tt(f=>{let h=this.transitions?.getValue();return this.events.next(new bi(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),h!==this.transitions?.getValue()?qe:Promise.resolve(f)}),FI(this.environmentInjector,this.configLoader,this.rootComponentType,n.config,this.urlSerializer,this.paramsInheritanceStrategy),Ne(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation=ae(R({},this.currentNavigation),{finalUrl:f.urlAfterRedirects});let h=new $a(f.id,this.urlSerializer.serialize(f.extractedUrl),this.urlSerializer.serialize(f.urlAfterRedirects),f.targetSnapshot);this.events.next(h)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:f,extractedUrl:h,source:p,restoredState:g,extras:v}=l,b=new bi(f,this.urlSerializer.serialize(h),p,g);this.events.next(b);let y=Uy(this.rootComponentType).snapshot;return this.currentTransition=i=ae(R({},l),{targetSnapshot:y,urlAfterRedirects:h,extras:ae(R({},v),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=h,H(i)}else{let f="";return this.events.next(new ur(l.id,this.urlSerializer.serialize(l.extractedUrl),f,od.IgnoredByUrlHandlingStrategy)),l.resolve(!1),qe}}),Ne(l=>{let u=new id(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),F(l=>(this.currentTransition=i=ae(R({},l),{guards:nI(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),i)),hI(this.environmentInjector,l=>this.events.next(l)),Ne(l=>{if(i.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw Qa(this.urlSerializer,l.guardsResult);let u=new sd(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),et(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",at.GuardRejected),!1)),Ju(l=>{if(l.guards.canActivateChecks.length)return H(l).pipe(Ne(u=>{let d=new ad(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}),tt(u=>{let d=!1;return H(u).pipe(LI(this.paramsInheritanceStrategy,this.environmentInjector),Ne({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(u,"",at.NoDataFromResolver)}}))}),Ne(u=>{let d=new cd(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}))}),Ju(l=>{let u=d=>{let f=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&f.push(this.configLoader.loadComponent(d.routeConfig).pipe(Ne(h=>{d.component=h}),F(()=>{})));for(let h of d.children)f.push(...u(h));return f};return Ns(u(l.targetSnapshot.root)).pipe(bn(null),Zt(1))}),Ju(()=>this.afterPreactivation()),tt(()=>{let{currentSnapshot:l,targetSnapshot:u}=i,d=this.createViewTransition?.(this.environmentInjector,l.root,u.root);return d?fe(d).pipe(F(()=>i)):H(i)}),F(l=>{let u=ZC(n.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=i=ae(R({},l),{targetRouterState:u}),this.currentNavigation.targetRouterState=u,i}),Ne(()=>{this.events.next(new wi)}),tI(this.rootContexts,n.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),Zt(1),Ne({next:l=>{s=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new lr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{s=!0}}),vl(this.transitionAbortSubject.pipe(Ne(l=>{throw l}))),Jn(()=>{!s&&!c&&this.cancelNavigationTransition(i,"",at.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation=null,this.currentTransition=null)}),vn(l=>{if(this.destroyed)return i.resolve(!1),qe;if(c=!0,zy(l))this.events.next(new on(i.id,this.urlSerializer.serialize(i.extractedUrl),l.message,l.cancellationCode)),eI(l)?this.events.next(new ro(l.url,l.navigationBehaviorOptions)):i.resolve(!1);else{let u=new Di(i.id,this.urlSerializer.serialize(i.extractedUrl),l,i.targetSnapshot??void 0);try{let d=it(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(d instanceof Ei){let{message:f,cancellationCode:h}=Qa(this.urlSerializer,d);this.events.next(new on(i.id,this.urlSerializer.serialize(i.extractedUrl),f,h)),this.events.next(new ro(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(u),l}catch(d){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(d)}}return qe}))}))}cancelNavigationTransition(n,r,o){let i=new on(n.id,this.urlSerializer.serialize(n.extractedUrl),r,o);this.events.next(i),n.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let n=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return n.toString()!==r?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function YI(e){return e!==mi}var ZI=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>P(JI),providedIn:"root"})}return e})(),Cd=class{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}},JI=(()=>{class e extends Cd{static \u0275fac=(()=>{let n;return function(o){return(n||(n=mu(e)))(o||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Jy=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:()=>P(XI),providedIn:"root"})}return e})(),XI=(()=>{class e extends Jy{location=P(ii);urlSerializer=P(Id);options=P(Rd,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=P(kd);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new sn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=Uy(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(n){return this.location.subscribe(r=>{r.type==="popstate"&&n(r.url,r.state)})}handleRouterEvent(n,r){if(n instanceof bi)this.stateMemento=this.createStateMemento();else if(n instanceof ur)this.rawUrlTree=r.initialUrl;else if(n instanceof $a){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let o=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(r.targetBrowserUrl??o,r)}}else n instanceof wi?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(r.targetBrowserUrl??this.rawUrlTree,r)):n instanceof on&&(n.code===at.GuardRejected||n.code===at.NoDataFromResolver)?this.restoreHistory(r):n instanceof Di?this.restoreHistory(r,!0):n instanceof lr&&(this.lastSuccessfulId=n.id,this.currentPageId=this.browserPageId)}setBrowserUrl(n,r){let o=n instanceof sn?this.urlSerializer.serialize(n):n;if(this.location.isCurrentPathEqualTo(o)||r.extras.replaceUrl){let i=this.browserPageId,s=R(R({},r.extras.state),this.generateNgRouterState(r.id,i));this.location.replaceState(o,"",s)}else{let i=R(R({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(o,"",i)}}restoreHistory(n,r=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,i=this.currentPageId-o;i!==0?this.location.historyGo(i):this.currentUrlTree===n.finalUrl&&i===0&&(this.resetState(n),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(n),this.resetUrlToCurrentUrlTree())}resetState(n){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(n,r){return this.canceledNavigationResolution==="computed"?{navigationId:n,\u0275routerPageId:r}:{navigationId:n}}static \u0275fac=(()=>{let n;return function(o){return(n||(n=mu(e)))(o||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function eP(e,t){e.events.pipe(et(n=>n instanceof lr||n instanceof on||n instanceof Di||n instanceof ur),F(n=>n instanceof lr||n instanceof ur?0:(n instanceof on?n.code===at.Redirect||n.code===at.SupersededByNewNavigation:!1)?2:1),et(n=>n!==2),Zt(1)).subscribe(()=>{t()})}var tP={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},nP={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Xy=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=P(ku);stateManager=P(Jy);options=P(Rd,{optional:!0})||{};pendingTasks=P(_n);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=P(KI);urlSerializer=P(Id);location=P(ii);urlHandlingStrategy=P(kd);_events=new He;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=P(ZI);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=P(xd,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!P(Md,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:n=>{this.console.warn(n)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Se;subscribeToNavigationEvents(){let n=this.navigationTransitions.events.subscribe(r=>{try{let o=this.navigationTransitions.currentTransition,i=this.navigationTransitions.currentNavigation;if(o!==null&&i!==null){if(this.stateManager.handleRouterEvent(r,i),r instanceof on&&r.code!==at.Redirect&&r.code!==at.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof lr)this.navigated=!0;else if(r instanceof ro){let s=r.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(r.url,o.currentRawUrl),l=R({browserUrl:o.extras.browserUrl,info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:o.extras.replaceUrl||this.urlUpdateStrategy==="eager"||YI(o.source)},s);this.scheduleNavigation(c,mi,null,l,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}oP(r)&&this._events.next(r)}catch(o){this.navigationTransitions.transitionAbortSubject.next(o)}});this.eventsSubscription.add(n)}resetRootComponentType(n){this.routerState.root.component=n,this.navigationTransitions.rootComponentType=n}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),mi,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((n,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(n,"popstate",r)},0)})}navigateToSyncWithBrowser(n,r,o){let i={replaceUrl:!0},s=o?.navigationId?o:null;if(o){let l=R({},o);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(i.state=l)}let c=this.parseUrl(n);this.scheduleNavigation(c,r,s,i)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(n){this.config=n.map(_d),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(n,r={}){let{relativeTo:o,queryParams:i,fragment:s,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:s,d=null;switch(c??this.options.defaultQueryParamsHandling){case"merge":d=R(R({},this.currentUrlTree.queryParams),i);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let h=o?o.snapshot:this.routerState.snapshot.root;f=Ay(h)}catch{(typeof n[0]!="string"||n[0][0]!=="/")&&(n=[]),f=this.currentUrlTree.root}return Fy(f,n,d,u??null)}navigateByUrl(n,r={skipLocationChange:!1}){let o=vi(n)?n:this.parseUrl(n),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,mi,null,r)}navigate(n,r={skipLocationChange:!1}){return rP(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){try{return this.urlSerializer.parse(n)}catch{return this.urlSerializer.parse("/")}}isActive(n,r){let o;if(r===!0?o=R({},tP):r===!1?o=R({},nP):o=r,vi(n))return vy(this.currentUrlTree,n,o);let i=this.parseUrl(n);return vy(this.currentUrlTree,i,o)}removeEmptyProps(n){return Object.entries(n).reduce((r,[o,i])=>(i!=null&&(r[o]=i),r),{})}scheduleNavigation(n,r,o,i,s){if(this.disposed)return Promise.resolve(!1);let c,l,u;s?(c=s.resolve,l=s.reject,u=s.promise):u=new Promise((f,h)=>{c=f,l=h});let d=this.pendingTasks.add();return eP(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:n,extras:i,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(f=>Promise.reject(f))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function rP(e){for(let t=0;t<e.length;t++)if(e[t]==null)throw new N(4008,!1)}function oP(e){return!(e instanceof wi)&&!(e instanceof ro)}var iP=new O("");function ev(e,...t){return Xo([{provide:xd,multi:!0,useValue:e},[],{provide:oo,useFactory:sP,deps:[Xy]},{provide:Ea,multi:!0,useFactory:aP},t.map(n=>n.\u0275providers)])}function sP(e){return e.routerState.root}function aP(){let e=P(jt);return t=>{let n=e.get(en);if(t!==n.components[0])return;let r=e.get(Xy),o=e.get(cP);e.get(lP)===1&&r.initialNavigation(),e.get(uP,null,q.Optional)?.setUpPreloading(),e.get(iP,null,q.Optional)?.init(),r.resetRootComponentType(n.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var cP=new O("",{factory:()=>new He}),lP=new O("",{providedIn:"root",factory:()=>1});var uP=new O("");var le=(()=>{class e{constructor(){this.raidTierSource=new ye(""),this.regionSource=new ye(""),this.pokemonListSource=new ye(""),this.teraTypeSource=new ye(""),this.moveListSource=new ye(""),this.loadingSource=new ye(!1),this.raidTier=this.raidTierSource.asObservable(),this.regionList=this.regionSource.asObservable(),this.pokemonList=this.pokemonListSource.asObservable(),this.teraType=this.teraTypeSource.asObservable(),this.moveList=this.moveListSource.asObservable(),this.loading=this.loadingSource.asObservable()}changeRaidTier(n){this.raidTierSource.next(n)}changeRegionList(n){this.regionSource.next(n)}changePokemon(n){this.pokemonListSource.next(n)}changeTeraType(n){this.teraTypeSource.next(n)}changeMoveList(n){this.moveListSource.next(n)}changeLoading(n){this.loadingSource.next(n)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var tv=(()=>{class e{constructor(n){this.stateService=n}valueChanged(){let n=document.getElementById("raidTier"),r=n.selectedIndex,o=n.options[r];this.stateService.changeRaidTier(o.value)}static{this.\u0275fac=function(r){return new(r||e)(W(le))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-raid-tier"]],decls:7,vars:0,consts:[["id","raidTier",3,"change"],["value",""],["value","5"],["value","6"]],template:function(r,o){r&1&&(oe(0,"select",0),yt("change",function(){return o.valueChanged()}),oe(1,"option",1),De(2,"-- Tier --"),he(),oe(3,"option",2),De(4,"5 Star"),he(),oe(5,"option",3),De(6,"6 Star"),he()())},encapsulation:2})}}return e})();var m=function(e){return e.Paldea="Paldea",e.Kitakami="Kitakami",e.Terarium="Terarium",e}(m||{}),a=function(e){return e.Time="Time",e.HP="HP",e}(a||{}),zt=[{name:"Abomasnow",region:m.Paldea,info:{moves:["Energy Ball","Ice Punch","Ice Shard","Leer","Blizzard","Snowscape","Aurora Veil"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Blizzard"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Snowscape"},{type:a.HP,threshold:25,action:"Uses Aurora Veil"}]}},{name:"Altaria",region:m.Paldea,info:{moves:["Dragon Pulse","Hurricane","Sing","Mist","Safeguard","Cotton Guard"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Safeguard"},{type:a.HP,threshold:75,action:"Uses"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Cotton Guard"},{type:a.HP,threshold:25,action:"Uses Sing"}]}},{name:"Amoonguss",region:m.Paldea,info:{moves:["Energy Ball","Sludge Bomb","Spore","Clear Smog","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Spore"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Annihilape",region:m.Paldea,info:{moves:["Shadow Claw","Close Combat","Outrage","Leer","Taunt","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Bulk Up"}]}},{name:"Appletun",region:m.Paldea,info:{moves:["Apple Acid","Dragon Pulse","Giga Drain","Body Press","","Growth"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses"},{type:a.HP,threshold:75,action:"Uses Growth"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Arboliva",region:m.Paldea,info:{moves:["Energy Ball","Hyper Voice","Earth Power","Charm","Sunny Day","Growth","Leaf Storm"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Growth"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Leaf Storm"}]}},{name:"Arcanine",region:m.Paldea,info:{moves:["Flamethrower","Crunch","Extreme Speed","Fire Fang","Sunny Day","Leer"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Leer"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Armarouge",region:m.Paldea,info:{moves:["Armor Cannon","Psychic","Night Shade","Will-O-Wisp","Sunny Day","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Sunny Day"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Avalugg",region:m.Paldea,info:{moves:["Icicle Crash","Double-Edge","Crunch","Ice Fang","Snowscape","Iron Defense"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Snowscape"},{type:a.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Baxcalibur",region:m.Paldea,info:{moves:["Dragon Claw","Icicle Crash","Ice Shard","Body Press","Snowscape"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Blissey",region:m.Paldea,info:{moves:["Dazzling Gleam","Hyper Voice","Sing","Seismic Toss","Gravity"],specialMoves:["Seismic Toss","Gravity"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Gravity"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Bombirdier",region:m.Paldea,info:{moves:["Rock Slide","Sucker Punch","Brave Bird","Torment","Knock Off","Feather Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Feather Dance"}]}},{name:"Brambleghast",region:m.Paldea,info:{moves:["Giga Drain","Shadow Ball","Power Whip","Infestation","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Grassy Terrain"}]}},{name:"Braviary",region:m.Paldea,info:{moves:["Acrobatics","Crush Claw","Superpower","Air Slash","Tailwind","Hone Claws"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Tailwind"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Hone Claws"},{type:a.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Breloom",region:m.Paldea,info:{moves:["Seed Bomb","Mach Punch","Worry Seed","Headbutt","Grassy Terrain","Spore"],specialMoves:["Spore"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Bronzong",region:m.Paldea,info:{moves:["Flash Cannon","Extrasensory","Metal Sound","Payback","Rain Dance","Calm Mind","Reflect"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Calm Mind"},{type:a.HP,threshold:25,action:"Uses Reflect"}]}},{name:"Camerupt",region:m.Paldea,info:{moves:["Flamethrower","Earth Power","Yawn","Eruption","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Ceruledge",region:m.Paldea,info:{moves:["Bitter Blade","Shadow Claw","Psycho Cut","Will-O-Wisp","Sunny Day","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Sunny Day"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Swords Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Cetitan",region:m.Paldea,info:{moves:["Ice Spinner","Liquidation","Yawn","Entrainment","Snowscape"],specialMoves:["Yawn","Entrainment"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Clawitzer",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Aura Sphere","Crabhammer","Rain Dance"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Water Pulse"}]}},{name:"Cloyster",region:m.Paldea,info:{moves:["Icicle Spear","Hydro Pump","Ice Shard","Supersonic","Shell Smash"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Shell Smash"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Coalossal",region:m.Paldea,info:{moves:["Heat Crash","Stone Edge","Incinerate","Ancient Power","Sandstorm","Tar Shot","Fire Blast"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Uses Tar Shot"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Fire Blast"}]}},{name:"Copperajah",region:m.Paldea,info:{moves:["Heavy Slam","Strength","Curse","High Horsepower","Sandstorm","Iron Defense"],specialMoves:["Curse"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Corviknight",region:m.Paldea,info:{moves:["Steel Wing","Drill Peck","Taunt","Body Press","Iron Defense","Hone Claws"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Hone Claws"}]}},{name:"Delibird",region:m.Paldea,info:{moves:["Present","Drill Peck","Ice Punch","Blizzard","Snowscape"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Present"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Present"}]}},{name:"Ditto",region:m.Paldea,info:{moves:["Transform"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:50,action:"Stats & Status Reset"}]}},{name:"Dondozo",region:m.Paldea,info:{moves:["Order Up","Waterfall","Heavy Slam","Tickle","Rain Dance","Stockpile"],specialMoves:["Stockpile"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Stockpile"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Dragalge",region:m.Paldea,info:{moves:["Dragon Pulse","Sludge Bomb","Water Pulse","Toxic","Acid Spray","Draco Meteor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Acid Spray"},{type:a.HP,threshold:75,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Draco Meteor"}]}},{name:"Dragapult",region:m.Paldea,info:{moves:["Shadow Ball","Dragon Darts","Thunderbolt","Hex","Reflect","Light Screen"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Light Screen"}]}},{name:"Dragonite",region:m.Paldea,info:{moves:["Dragon Rush","Aerial Ace","Extreme Speed","Hurricane","Safeguard","Dragon Dance","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Safeguard"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:35,action:"Uses Rain Dance"}]}},{name:"Drifblim",region:m.Paldea,info:{moves:["Hex","Air Slash","Thunder Wave","Shadow Ball","Will-O-Wisp"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Eelektross",region:m.Paldea,info:{moves:["Wild Charge","Flamethrower","Discharge","Crush Claw","Ion Deluge","Thunder Wave","Coil"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Ion Deluge"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:25,action:"Uses Coil"}]}},{name:"Eevee",region:m.Paldea,info:{moves:["Tera Blast","Take Down","Shadow Ball","Tickle","Yawn","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Yawn"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Falinks",region:m.Paldea,info:{moves:["Megahorn","Reversal","Headbutt","Brick Break","No Retreat"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:40,action:"Uses No Retreat"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Flapple",region:m.Paldea,info:{moves:["Grav Apple","Dragon Breath","Dragon Rush","Trailblaze","Grassy Terrain","Iron Defense","Dragon Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Dragon Dance"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Florges",region:m.Paldea,info:{moves:["Petal Dance","Moonblast","Psychic","Safeguard","Grassy Terrain","Calm Mind"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Grassy Terrain"}]}},{name:"Froslass",region:m.Paldea,info:{moves:["Frost Breath","Shadow Ball","Scary Face","Draining Kiss","Snowscape","Disable","Aurora Veil"],specialMoves:["Disable"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:25,action:"Uses Aurora Veil"}]}},{name:"Gallade",region:m.Paldea,info:{moves:["Psycho Cut","Brick Break","Shadow Sneak","Fury Cutter","Hypnosis","Disable","Psychic Terrain"],specialMoves:["Disable","Shadow Sneak"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Psychic Terrain"}]}},{name:"Garchomp",region:m.Paldea,info:{moves:["Earthquake","Dragon Claw","Iron Head","Slash","Sandstorm","Bulldoze"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Uses Bulldoze"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Gardevoir",region:m.Paldea,info:{moves:["Psychic","Moonblast","Disable","Draining Kiss","Misty Terrain","Calm Mind","Psychic Terrain"],specialMoves:["Disable"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Psychic Terrain"}]}},{name:"Garganacl",region:m.Paldea,info:{moves:["Salt Cure","Rock Slide","Hammer Arm","Sandstorm"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Gengar",region:m.Paldea,info:{moves:["Shadow Ball","Sludge Bomb","Confuse Ray","Spite","Hypnosis"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Hypnosis"}]}},{name:"Glalie",region:m.Paldea,info:{moves:["Freeze-Dry","Crunch","Headbutt","Frost Breath","Snowscape","Disable"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:85,action:"Uses Snowscape"}]}},{name:"Glimmora",region:m.Paldea,info:{moves:["Power Gem","Sludge Bomb","Mortal Spin","Ancient Power","Sandstorm","Tera Blast"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Tera Blast"}]}},{name:"Goodra",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Sludge Bomb","Power Whip","Rain Dance","Draco Meteor","Acid Armor"],specialMoves:["Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Acid Armor"}]}},{name:"Gothitelle",region:m.Paldea,info:{moves:["Psychic","Thunder Wave","Thunderbolt","Stored Power","Calm Mind","Light Screen"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Calm Mind"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:25,action:"Uses Light Screen"}]}},{name:"Greedent",region:m.Paldea,info:{moves:["Body Slam","Body Press","Bullet Seed","Tail Whip","Stockpile"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Stockpile"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Stockpile"}]}},{name:"Grimmsnarl",region:m.Paldea,info:{moves:["Spirit Break","False Surrender","Scary Face","Foul Play","Light Screen","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Light Screen"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Gyarados",region:m.Paldea,info:{moves:["Aqua Tail","Twister","Hurricane","Crunch","Scary Face","Taunt","Dragon Dance","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:35,action:"Uses Rain Dance"}]}},{name:"Hariyama",region:m.Paldea,info:{moves:["Reversal","Brick Break","Brine","Heavy Slam","Scary Face","Taunt","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Bulk Up"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Hatterene",region:m.Paldea,info:{moves:["Dazzling Gleam","Psychic","Dark Pulse","Charm","Misty Terrain","Calm Mind","Psychic Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Psychic Terrain"}]}},{name:"Haxorus",region:m.Paldea,info:{moves:["Dragon Claw","Crunch","Giga Impact","First Impression","Harden","Dragon Dance"],specialMoves:["Harden","First Impression"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Harden"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Dragon Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Hippowdon",region:m.Paldea,info:{moves:["Earthquake","Yawn","Rock Slide","Body Slam","Stockpile"],specialMoves:["Stockpile"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Yawn"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Stockpile"}]}},{name:"Honchkrow",region:m.Paldea,info:{moves:["Night Slash","Hurricane","Haze","Wing Attack","Nasty Plot"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Nasty Plot"}]}},{name:"Houndoom",region:m.Paldea,info:{moves:["Flamethrower","Crunch","Taunt","Will-O-Wisp","Sunny Day","Howl"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Howl"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Hydreigon",region:m.Paldea,info:{moves:["Dark Pulse","Dragon Pulse","Scary Face","Dragon Rush","Taunt","Reflect","Nasty Plot"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Uses Reflect"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Indeedee (Male)",formName:"indeedee",region:m.Paldea,info:{moves:["Psychic","Hyper Voice","Shadow Ball","Trick Room","Play Nice","Calm Mind"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Play Nice"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Indeedee (Female)",formName:"indeedee",imageAlt:"-f",region:m.Paldea,info:{moves:["Psychic","Hyper Voice","Shadow Ball","Trick Room","Play Nice","Calm Mind"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Play Nice"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Kingambit",region:m.Paldea,info:{moves:["Iron Head","Night Slash","Torment","Slash","Taunt","Metal Burst"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Torment"},{type:a.Time,threshold:15,action:"Uses Metal Burst"}]}},{name:"Krookodile",region:m.Paldea,info:{moves:["Earthquake","Crunch","Sand Tomb","Counter","Torment","Hone Claws"],specialMoves:["Counter"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Torment"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Hone Claws"}]}},{name:"Luxray",region:m.Paldea,info:{moves:["Crunch","Wild Charge","Discharge","Thunder Wave","Electric Terrain","Leer"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Uses Leer"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Electric Terrain"}]}},{name:"Mabosstiff",region:m.Paldea,info:{moves:["Crunch","Play Rough","Take Down","Swagger","Taunt"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Magnezone",region:m.Paldea,info:{moves:["Thunderbolt","Flash Cannon","Tri Attack","Thunder Wave","Magnet Rise","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Magnet Rise"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Mimikyu",region:m.Paldea,info:{moves:["Play Rough","Shadow Claw","Will-O-Wisp","Shadow Sneak","Light Screen","Taunt"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Light Screen"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Mismagius",region:m.Paldea,info:{moves:["Mystical Fire","Shadow Ball","Confuse Ray","Taunt","Light Screen","Nasty Plot"],specialMoves:["Light Screen"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Light Screen"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Nasty Plot"}]}},{name:"Mudsdale",region:m.Paldea,info:{moves:["High Horsepower","Body Press","Rock Smash","Heavy Slam","Scary Face","Iron Defense"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Scary Face"},{type:a.Time,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"}]}},{name:"Noivern",region:m.Paldea,info:{moves:["Air Slash","Dragon Pulse","Acrobatics","Boomburst","Tailwind"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Tailwind"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Tailwind"},{type:a.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Oranguru",region:m.Paldea,info:{moves:["Facade","Psychic","Stored Power","Yawn","Calm Mind","Light Screen"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Calm Mind"},{type:a.HP,threshold:75,action:"Uses Light Screen"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Orthworm",region:m.Paldea,info:{moves:["Iron Head","Earthquake","Stomping Tantrum","Wrap","Sandstorm","Coil"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Uses Coil"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Palafin",region:m.Paldea,info:{moves:["Liquidation","Acrobatics","Charm","Boomburst","Rain Dance","Bulk Up"],specialMoves:["Boomburst"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Passimian",region:m.Paldea,info:{moves:["Reversal","Rock Smash","Facade","Gunk Shot","Taunt","Trailblaze","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Uses Trailblaze"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Bulk Up"}]}},{name:"Pawmot",region:m.Paldea,info:{moves:["Wild Charge","Close Combat","Nuzzle","Sweet Kiss","Double Shock"],specialMoves:["Sweet Kiss"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:80,action:"Uses Nuzzle"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Double Shock"}]}},{name:"Pincurchin",region:m.Paldea,info:{moves:["Zing Zap","Thunder","Surf","Poison Jab","Rain Dance","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Rain Dance"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Polteageist",region:m.Paldea,info:{moves:["Shadow Ball","Mega Drain","Astonish","Will-O-Wisp","Shell Smash"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Shell Smash"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Raichu",region:m.Paldea,info:{moves:["Discharge","Iron Tail","Charm","Nuzzle","Electric Terrain","Thunder Wave"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Electric Terrain"}]}},{name:"Revavroom",region:m.Paldea,info:{moves:["Spin Out","Taunt","Gunk Shot","Overheat","Scary Face","Shift Gear"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Shift Gear"},{type:a.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Rotom",region:m.Paldea,info:{moves:["Discharge","Uproar","Hex","Thunder Wave","Charge","Eerie Impulse"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Charge"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Eerie Impulse"}]}},{name:"Sableye",region:m.Paldea,info:{moves:["Shadow Claw","Foul Play","Will-O-Wisp","Night Shade","Flatter","Torment"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Flatter"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Torment"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Salamence",region:m.Paldea,info:{moves:["Dragon Rush","Aerial Ace","Hyper Voice","Draco Meteor","Dragon Dance","Focus Energy"],specialMoves:["Dragon Rush"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:25,action:"Uses Focus Energy"}]}},{name:"Scizor",region:m.Paldea,info:{moves:["Iron Head","X-Scissor","Bullet Punch","Slash","Iron Defense","Focus Energy"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Iron Defense"},{type:a.HP,threshold:75,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"}]}},{name:"Scyther",region:m.Paldea,info:{moves:["Aerial Ace","X-Scissor","Slash","Agility","Focus Energy","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Focus Energy"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Swords Dance"}]}},{name:"Slaking",region:m.Paldea,info:{moves:["Facade","Shadow Claw","Play Rough","Swagger","Encore"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Encore"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"}]}},{name:"Slowbro",region:m.Paldea,info:{moves:["Zen Headbutt","Liquidation","Yawn","Water Pulse","Curse"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Curse"},{type:a.HP,threshold:70,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Curse"}]}},{name:"Slowking",region:m.Paldea,info:{moves:["Psychic","Surf","Yawn","Water Pulse","Psychic Terrain","Calm Mind"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Psychic Terrain"},{type:a.HP,threshold:70,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"}]}},{name:"Staraptor",region:m.Paldea,info:{moves:["Close Combat","Brave Bird","Quick Attack","Double-Edge"],specialMoves:["Double-Edge"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Brave Bird"}]}},{name:"Talonflame",region:m.Paldea,info:{moves:["Acrobatics","Flare Blitz","Steel Wing","Heat Wave","Bulk Up"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Bulk Up"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Bulk Up"}]}},{name:"Tatsugiri (Curly)",formName:"tatsugiri",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Chilling Water"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tatsugiri (Droopy)",formName:"tatsugiri",imageAlt:"-d",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Chilling Water"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tatsugiri (Stretchy)",formName:"tatsugiri",imageAlt:"-s",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Chilling Water"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tauros (Fire)",formName:"taurospaldeablaze",imageAlt:"-b",region:m.Paldea,info:{moves:["Flare Blitz","Close Combat","Flamethrower","Headbutt","Work Up","Sunny Day"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Work Up"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Sunny Day"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Tauros (Water)",formName:"taurospaldeaaqua",imageAlt:"-a",region:m.Paldea,info:{moves:["Wave Crash","Close Combat","Surf","Headbutt","Work Up","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Work Up"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Rain Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Tinkaton",region:m.Paldea,info:{moves:["Gigaton Hammer","Play Rough","Brutal Swing","Rock Smash","Misty Terrain","Thunder Wave","Charm"],specialMoves:["Charm","Misty Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Thunder Wave"},{type:a.HP,threshold:25,action:"Uses Charm"}]}},{name:"Toxtricity (Amped)",formName:"toxtricity",region:m.Paldea,info:{moves:["Overdrive","Poison Jab","Nuzzle","Boomburst","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Toxtricity (Low Key)",formName:"toxtricity",imageAlt:"-l",region:m.Paldea,info:{moves:["Overdrive","Poison Jab","Nuzzle","Boomburst","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Tsareena",region:m.Paldea,info:{moves:["High Jump Kick","Power Whip","Stomp","Trop Kick","Reflect","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Grassy Terrain"}]}},{name:"Tyranitar",region:m.Paldea,info:{moves:["Rock Slide","Crunch","Screech","Dark Pulse","Dragon Dance","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Volcarona",region:m.Paldea,info:{moves:["Fire Blast","Bug Buzz","Hurricane","Will-O-Wisp","Sunny Day","Quiver Dance"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Quiver Dance"},{type:a.HP,threshold:20,action:"Uses Quiver Dance"}]}},{name:"Weavile",region:m.Paldea,info:{moves:["Ice Punch","Night Slash","Taunt","Facade","Reflect","Swords Dance"],specialMoves:["Reflect"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Swords Dance"}]}},{name:"Zoroark",region:m.Paldea,info:{moves:["Night Daze","Shadow Claw","Taunt","Hyper Voice","Torment","Nasty Plot"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Torment"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Ambipom",region:m.Kitakami,info:{moves:["Double Hit","Screech","Fury Swipes","Knock Off","Trailblaze","Sand Attack"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:90,action:"Uses Trailblaze"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Sand Attack"},{type:a.HP,threshold:15,action:"Uses Sand Attack"}]}},{name:"Basculegion (Male)",formName:"basculegion",region:m.Kitakami,info:{moves:["Liquidation","Aqua Jet","Shadow Ball","Scary Face","Rain Dance","Wave Crash"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Rain Dance"},{type:a.HP,threshold:10,action:"Uses Wave Crash"}]}},{name:"Basculegion (Female)",formName:"basculegion",imageAlt:"-f",region:m.Kitakami,info:{moves:["Liquidation","Aqua Jet","Shadow Ball","Scary Face","Rain Dance","Hydro Pump"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Rain Dance"},{type:a.HP,threshold:10,action:"Uses Hydro Pump"}]}},{name:"Chandelure",region:m.Kitakami,info:{moves:["Shadow Ball","Heat Wave","Confuse Ray","Flamethrower","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Sunny Day"},{type:a.HP,threshold:80,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Sunny Day"},{type:a.HP,threshold:20,action:"Uses Heat Wave"}]}},{name:"Conkeldurr",region:m.Kitakami,info:{moves:["Hammer Arm","Stone Edge","Superpower","Scary Face","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Dusknoir",region:m.Kitakami,info:{moves:["Fire Punch","Brick Break","Shadow Ball","Shadow Punch","Trick Room","Poltergeist"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Trick Room"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Poltergeist"}]}},{name:"Gliscor",region:m.Kitakami,info:{moves:["Poison Jab","Earthquake","Acrobatics","X-Scissor","Sandstorm","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Swords Dance"},{type:a.Time,threshold:15,action:"Uses Sandstorm"}]}},{name:"Golem",region:m.Kitakami,info:{moves:["Earthquake","Stone Edge","Heavy Slam","Defense Curl"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Defense Curl"},{type:a.Time,threshold:70,action:"Uses Defense Curl"},{type:a.Time,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Earthquake"}]}},{name:"Kommo-o",formName:"kommoo",region:m.Kitakami,info:{moves:["Brick Break","Dragon Claw","Boomburst","Scary Face","Clangorous Soul"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Clangorous Soul"},{type:a.HP,threshold:10,action:"Uses Clangorous Soul"}]}},{name:"Ludicolo",region:m.Kitakami,info:{moves:["Energy Ball","Surf","Fake Out","Trailblaze","Rain Dance"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Rain Dance"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:10,action:"Uses Surf"}]}},{name:"Mamoswine",region:m.Kitakami,info:{moves:["Earthquake","Blizzard","Ice Shard","Ancient Power","Snowscape","Amnesia"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Amnesia"},{type:a.HP,threshold:10,action:"Uses Earthquake"}]}},{name:"Mandibuzz",region:m.Kitakami,info:{moves:["Rock Tomb","Dark Pulse","Toxic","Foul Play","Taunt","Nasty Plot"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Nasty Plot"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Mienshao",region:m.Kitakami,info:{moves:["Aura Sphere","Poison Jab","Taunt","Acrobatics","Bulk Up"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:90,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Milotic",region:m.Kitakami,info:{moves:["Chilling Water","Surf","Dragon Pulse","Attract","Rain Dance","Hydro Pump"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Rain Dance"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.HP,threshold:35,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Ninetales",region:m.Kitakami,info:{moves:["Flamethrower","Extrasensory","Will-O-Wisp","Hypnosis","Nasty Plot"],specialMoves:["Hypnosis"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Politoed",region:m.Kitakami,info:{moves:["Surf","Hyper Voice","Weather Ball","Encore","Rain Dance","Hydro Pump"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Poliwrath",region:m.Kitakami,info:{moves:["Liquidation","Brick Break","Haze","Hydro Pump","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Probopass",region:m.Kitakami,info:{moves:["Body Press","Power Gem","Flash Cannon","Harden","Gravity","Zap Cannon"],specialMoves:["Harden"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Gravity"},{type:a.HP,threshold:75,action:"Uses Zap Cannon"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Zap Cannon"}]}},{name:"Shiftry",region:m.Kitakami,info:{moves:["Fake Out","Sucker Punch","Leaf Blade","Extrasensory","Sunny Day","Leaf Storm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Sunny Day"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:10,action:"Uses Leaf Storm"}]}},{name:"Sinistcha",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:15,action:"Uses Matcha Gotcha"}]}},{name:"Snorlax",region:m.Kitakami,info:{moves:["Body Slam","Heavy Slam","Bite","Mud-Slap","Curse"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Curse"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Trevenant",region:m.Kitakami,info:{moves:["Wood Hammer","Shadow Claw","Will-O-Wisp","Hex","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:20,action:"Uses Will-O-Wisp"}]}},{name:"Victreebel",region:m.Kitakami,info:{moves:["Sludge Bomb","Power Whip","Acid Spray","Trailblaze","Sunny Day"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Sunny Day"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Vikavolt",region:m.Kitakami,info:{moves:["Discharge","Bug Buzz","Solar Beam","Zap Cannon"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Discharge"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Zap Cannon"},{type:a.HP,threshold:20,action:"Uses Zap Cannon"}]}},{name:"Yanmega",region:m.Kitakami,info:{moves:["Bug Buzz","Air Slash","Quick Attack","Hypnosis","Supersonic"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Supersonic"}]}},{name:"Alcremie",region:m.Terarium,info:{moves:["Dazzling Gleam","Psychic","Encore","Psyshock","Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Encore"},{type:a.HP,threshold:50,action:"Uses Acid Armor"},{type:a.HP,threshold:25,action:"Uses Acid Armor"},{type:a.Time,threshold:30,action:"Reduce Tera Orb Charge"}]}},{name:"Duraludon",region:m.Terarium,info:{moves:["Flash Cannon","Dragon Pulse","Breaking Swipe","Metal Sound","Light Screen","Draco Meteor","Iron Defense"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:99,action:"Uses Light Screen"},{type:a.HP,threshold:50,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:30,action:"Uses Iron Defense"}]}},{name:"Electivire",region:m.Terarium,info:{moves:["Discharge","Thunder Punch","Fire Punch","Ice Punch","Thunder Wave","Electric Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Uses Discharge"}]}},{name:"Excadrill",region:m.Terarium,info:{moves:["Drill Run","Iron Head","X-Scissor","Rapid Spin","Sandstorm","Earthquake"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Sandstorm"},{type:a.HP,threshold:15,action:"Uses Earthquake"}]}},{name:"Exeggutor",region:m.Terarium,info:{moves:["Psychic","Energy Ball","Uproar","Bulldoze","Sunny Day","Growth"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:99,action:"Uses Sunny Day"},{type:a.HP,threshold:90,action:"Uses Growth"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"}]}},{name:"Flygon",region:m.Terarium,info:{moves:["Dragon Pulse","Scorching Sands","Earthquake","Flamethrower","Sandstorm","Boomburst"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:50,action:"Uses Boomburst"},{type:a.Time,threshold:30,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Boomburst"}]}},{name:"Golurk",region:m.Terarium,info:{moves:["Shadow Punch","Drain Punch","Heavy Slam","Iron Defense","Gravity","Reflect"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Gravity"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Reflect"}]}},{name:"Hitmonchan",region:m.Terarium,info:{moves:["Mach Punch","Mega Punch","Thunder Punch","Throat Chop","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Bulk Up"},{type:a.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Hitmonlee",region:m.Terarium,info:{moves:["Low Sweep","Mega Kick","Blaze Kick","Scary Face","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Bulk Up"},{type:a.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Hitmontop",region:m.Terarium,info:{moves:["Triple Kick","Sucker Punch","Gyro Ball","Triple Axel","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Bulk Up"},{type:a.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Kingdra",region:m.Terarium,info:{moves:["Dragon Pulse","Hydro Pump","Flash Cannon","Yawn","Rain Dance","Focus Energy"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Focus Energy"}]}},{name:"Lapras",region:m.Terarium,info:{moves:["Ice Beam","Freeze-Dry","Sparkling Aria","Body Press","Sing","Mist","Snowscape"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Sing"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Uses Mist"},{type:a.HP,threshold:30,action:"Uses Snowscape"}]}},{name:"Magmortar",region:m.Terarium,info:{moves:["Flamethrower","Psychic","Focus Blast","Clear Smog","Sunny Day","Will-O-Wisp"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Malamar",region:m.Terarium,info:{moves:["Foul Play","Psycho Cut","Night Slash","Taunt","Topsy-Turvy","Superpower"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Topsy-Turvy"},{type:a.HP,threshold:75,action:"Uses Superpower"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"}]}},{name:"Metagross",region:m.Terarium,info:{moves:["Zen Headbutt","Meteor Mash","Agility","Bullet Punch","Light Screen","Magnet Rise"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Light Screen"},{type:a.HP,threshold:50,action:"Uses Magnet Rise"},{type:a.HP,threshold:25,action:"Stats & Status Reset"},{type:a.Time,threshold:20,action:"Reduce Tera Orb Charge"}]}},{name:"Minior",region:m.Terarium,info:{moves:["Power Gem","Acrobatics","Take Down","Swift","Sandstorm","Shell Smash"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Sandstorm"},{type:a.HP,threshold:49,action:"Player Stats & Status Reset"},{type:a.HP,threshold:49,action:"Uses Shell Smash"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"}]}},{name:"Porygon-Z",formName:"porygonz",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Magnet Rise"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Magnet Rise"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:10,action:"Player Stats & Status Reset"}]}},{name:"Porygon2",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Magnet Rise"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Magnet Rise"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Stats & Status Reset"},{type:a.HP,threshold:10,action:"Stats & Status Reset"}]}},{name:"Reuniclus",region:m.Terarium,info:{moves:["Psychic","Psyshock","Gravity","Shadow Ball","Psychic Terrain","Reflect"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Psychic Terrain"},{type:a.HP,threshold:49,action:"Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Reflect"}]}},{name:"Rhyperior",region:m.Terarium,info:{moves:["Earthquake","Rock Wrecker","Brick Break","Surf","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Sandstorm"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Rock Wrecker"}]}},{name:"Skarmory",region:m.Terarium,info:{moves:["Steel Wing","Drill Peck","X-Scissor","Feint","Iron Defense","Swords Dance","Tailwind"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Iron Defense"},{type:a.HP,threshold:70,action:"Uses Swords Dance"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Tailwind"}]}}],qt=[{name:"Amoonguss",region:m.Paldea,info:{moves:["Energy Ball","Foul Play","Spore","Sludge Bomb","Grassy Terrain"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Grassy Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Grassy Terrain"}]}},{name:"Annihilape",region:m.Paldea,info:{moves:["Close Combat","Shadow Claw","Assurance","Focus Energy","Bulk Up","Rage Fist"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Bulk Up"},{type:a.Time,threshold:5,action:"Uses Rage Fist"}]}},{name:"Armarouge",region:m.Paldea,info:{moves:["Armor Cannon","Psychic","Night Shade","Will-O-Wisp","Calm Mind","Sunny Day"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Calm Mind"},{type:a.Time,threshold:65,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Avalugg",region:m.Paldea,info:{moves:["Icicle Crash","Heavy Slam","Snowscape","Ice Spinner","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Snowscape"},{type:a.Time,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Baxcalibur",region:m.Paldea,info:{moves:["Icicle Spear","Dragon Rush","Snowscape","Body Press"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Blissey",region:m.Paldea,info:{moves:["Dazzling Gleam","Hyper Voice","Sing","Light Screen","Defense Curl"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:95,action:"Uses Defense Curl"},{type:a.HP,threshold:75,action:"Uses Defense Curl"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Sing"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Bombirdier",region:m.Paldea,info:{moves:["Rock Slide","Acrobatics","Knock Off","Feather Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Feather Dance"}]}},{name:"Breloom",region:m.Paldea,info:{moves:["Bullet Seed","Low Sweep","Spore","Aerial Ace","Grassy Terrain"],specialMoves:["Spore"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Ceruledge",region:m.Paldea,info:{moves:["Bitter Blade","Shadow Claw","Psycho Cut","Will-O-Wisp","Sunny Day"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.Time,threshold:65,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Cetitan",region:m.Paldea,info:{moves:["Ice Spinner","Body Slam","Snowscape","Stomping Tantrum","Yawn"],specialMoves:["Yawn"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Uses Snowscape"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Yawn"}]}},{name:"Clawitzer",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Aura Sphere","Crabhammer","Rain Dance"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Water Pulse"}]}},{name:"Clodsire",region:m.Paldea,info:{moves:["Earthquake","Poison Jab","Megahorn","Yawn"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Earthquake"}]}},{name:"Corviknight",region:m.Paldea,info:{moves:["Iron Head","Drill Peck","Body Press","Hone Claws","Tailwind"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Hone Claws"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Tailwind"}]}},{name:"Cyclizar",region:m.Paldea,info:{moves:["Double-Edge","Dragon Claw","Dragon Pulse","Knock Off","Shift Gear"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Dachsbun",region:m.Paldea,info:{moves:["Play Rough","Double-Edge","Bite","Baby-Doll Eyes"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Play Rough"}]}},{name:"Ditto",region:m.Paldea,info:{moves:["Transform"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Dondozo",region:m.Paldea,info:{moves:["Wave Crash","Order Up","Heavy Slam","Yawn","Rain Dance","Curse"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Curse"}]}},{name:"Dragalge",region:m.Paldea,info:{moves:["Dragon Pulse","Sludge Bomb","Water Pulse","Toxic","Acid Spray","Draco Meteor"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Acid Spray"},{type:a.HP,threshold:75,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Draco Meteor"}]}},{name:"Dragapult",region:m.Paldea,info:{moves:["Shadow Ball","Dragon Pulse","Thunderbolt","Flamethrower","Reflect","Light Screen"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Light Screen"}]}},{name:"Dragonite",region:m.Paldea,info:{moves:["Dragon Rush","Extreme Speed","Dragon Dance","Aqua Tail","Light Screen"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:65,action:"Uses Light Screen"},{type:a.Time,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Dragon Dance"}]}},{name:"Espeon",region:m.Paldea,info:{moves:["Tera Blast","Psychic","Psyshock","Tickle","Psychic Terrain","Calm Mind"],specialMoves:["Tickle"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Psychic Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Psychic Terrain"}]}},{name:"Farigiraf",region:m.Paldea,info:{moves:["Twin Beam","Hyper Voice","Low Kick","Uproar","Agility"],specialMoves:["Uproar"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Agility"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Uproar"}]}},{name:"Flareon",region:m.Paldea,info:{moves:["Tera Blast","Flare Blitz","Lava Plume","Will-O-Wisp","Sunny Day","Curse"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Curse"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Frosmoth",region:m.Paldea,info:{moves:["Blizzard","Bug Buzz","Hurricane","Snowscape"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Gallade",region:m.Paldea,info:{moves:["Psycho Cut","Close Combat","Will-O-Wisp","Aerial Ace","Hypnosis","Disable","Psychic Terrain"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Psychic Terrain"}]}},{name:"Garchomp",region:m.Paldea,info:{moves:["Outrage","Earthquake","Flamethrower","Rock Slide","Swords Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Swords Dance"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Gardevoir",region:m.Paldea,info:{moves:["Moonblast","Psychic","Calm Mind","Thunder Wave","Misty Terrain","Psychic Terrain"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Psychic Terrain"}]}},{name:"Garganacl",region:m.Paldea,info:{moves:["Stone Edge","Heavy Slam","Salt Cure","Hammer Arm","Sandstorm","Rock Slide"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sandstorm"},{type:a.Time,threshold:60,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Gengar",region:m.Paldea,info:{moves:["Shadow Ball","Sludge Bomb","Dazzling Gleam","Will-O-Wisp","Hypnosis"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Hypnosis"}]}},{name:"Glaceon",region:m.Paldea,info:{moves:["Tera Blast","Ice Beam","Blizzard","Charm","Snowscape","Calm Mind"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Snowscape"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Snowscape"}]}},{name:"Glimmora",region:m.Paldea,info:{moves:["Power Gem","Sludge Wave","Hyper Beam","Rock Polish","Sandstorm"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sandstorm"},{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:55,action:"Reduce Tera Orb Charge"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"}]}},{name:"Goodra",region:m.Paldea,info:{moves:["Dragon Pulse","Surf","Sludge Bomb","Power Whip","Rain Dance"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Rain Dance"}]}},{name:"Grafaiai",region:m.Paldea,info:{moves:["Knock Off","Gunk Shot","Take Down","Flatter","Toxic"],specialMoves:["Toxic"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Toxic"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Gunk Shot"}]}},{name:"Gyarados",region:m.Paldea,info:{moves:["Aqua Tail","Crunch","Hurricane","Ice Fang","Taunt","Dragon Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Taunt"},{type:a.HP,threshold:20,action:"Uses Dragon Dance"}]}},{name:"Haxorus",region:m.Paldea,info:{moves:["Outrage","Crunch","Giga Impact","First Impression","Dragon Dance"],specialMoves:["First Impression"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Dragon Dance"}]}},{name:"Heracross",region:m.Paldea,info:{moves:["Megahorn","Close Combat","Thrash","Leer","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:75,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Hippowdon",region:m.Paldea,info:{moves:["Earthquake","Ice Fang","Yawn","Rock Slide"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Yawn"},{type:a.HP,threshold:60,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Yawn"}]}},{name:"Hydreigon",region:m.Paldea,info:{moves:["Dark Pulse","Dragon Pulse","Crunch","Taunt","Work Up","Nasty Plot"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:85,action:"Uses Taunt"},{type:a.Time,threshold:75,action:"Uses Work Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Stats & Status Reset"},{type:a.Time,threshold:20,action:"Uses Nasty Plot"}]}},{name:"Jolteon",region:m.Paldea,info:{moves:["Tera Blast","Thunderbolt","Shadow Ball","Thunder Wave","Electric Terrain","Calm Mind"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Electric Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Kilowattrel",region:m.Paldea,info:{moves:["Hurricane","Thunder","Uproar","Scary Face","Charge","Rain Dance"],specialMoves:["Charge","Rain Dance"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Charge"},{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Kingambit",region:m.Paldea,info:{moves:["Iron Head","Night Slash","Kowtow Cleave","Thunder Wave","Swords Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.Time,threshold:65,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Klawf",region:m.Paldea,info:{moves:["Stone Edge","Rock Smash","X-Scissor","Sandstorm","Knock Off","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:49,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Leafeon",region:m.Paldea,info:{moves:["Tera Blast","Leaf Blade","Double Kick","Charm","Sunny Day","Swords Dance"],specialMoves:["Double Kick"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Swords Dance"},{type:a.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Lycanroc",imageAlt:"-d",region:m.Paldea,info:{moves:["Accelerock","Rock Slide","Crunch","Taunt","Sandstorm"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Mabosstiff",region:m.Paldea,info:{moves:["Crunch","Reversal","Outrage","Take Down","Taunt"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Magnezone",region:m.Paldea,info:{moves:["Thunder","Flash Cannon","Tri Attack","Thunder Wave","Rain Dance","Iron Defense","Electric Terrain"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:80,action:"Uses Rain Dance"},{type:a.Time,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Thunder Wave"},{type:a.Time,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Maushold",imageAlt:"-f",region:m.Paldea,info:{moves:["Play Rough","Take Down","Low Kick","Charm","Tidy Up"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Uses Charm"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Tidy Up"}]}},{name:"Mimikyu",region:m.Paldea,info:{moves:["Play Rough","Shadow Claw","Shadow Sneak","Wood Hammer","Misty Terrain","Swords Dance"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Misty Terrain"},{type:a.Time,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Orthworm",region:m.Paldea,info:{moves:["Iron Head","Earthquake","Smack Down","Sandstorm","Coil"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Uses Coil"},{type:a.HP,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Sandstorm"}]}},{name:"Pawmot",region:m.Paldea,info:{moves:["Wild Charge","Close Combat","Double Shock","Nuzzle","Electric Terrain"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Electric Terrain"}]}},{name:"Pelipper",region:m.Paldea,info:{moves:["Hurricane","Hydro Pump","Mist","Supersonic","Rain Dance","Agility"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Agility"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Pincurchin",region:m.Paldea,info:{moves:["Zing Zap","Thunder","Surf","Poison Jab","Thunder Wave","Electric Terrain"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:90,action:"Uses Thunder Wave"},{type:a.Time,threshold:65,action:"Uses Electric Terrain"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Revavroom",region:m.Paldea,info:{moves:["Gunk Shot","Overheat","Iron Head","Taunt","Scary Face","Shift Gear"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Shift Gear"},{type:a.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Salamence",region:m.Paldea,info:{moves:["Outrage","Dual Wingbeat","Flamethrower","Tera Blast","Dragon Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Dragon Dance"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Scizor",region:m.Paldea,info:{moves:["X-Scissor","Bullet Punch","Close Combat","Iron Head","Iron Defense","Focus Energy"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Uses Iron Defense"},{type:a.HP,threshold:75,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Slowking",region:m.Paldea,info:{moves:["Surf","Psyshock","Trick Room","Flamethrower","Light Screen","Rain Dance","Calm Mind"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:70,action:"Uses Light Screen"},{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Trick Room"}]}},{name:"Staraptor",region:m.Paldea,info:{moves:["Close Combat","Brave Bird","Double-Edge","Feather Dance"],specialMoves:["Double-Edge","Feather Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Brave Bird"}]}},{name:"Sylveon",region:m.Paldea,info:{moves:["Tera Blast","Hyper Voice","Moonblast","Yawn","Misty Terrain","Calm Mind"],specialMoves:["Yawn"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Misty Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Misty Terrain"}]}},{name:"Talonflame",region:m.Paldea,info:{moves:["Brave Bird","Flare Blitz","Flamethrower","Tera Blast","Sunny Day","Swords Dance"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Tauros",formName:"taurospaldeacombat",imageAlt:"-p",region:m.Paldea,info:{moves:["Close Combat","Thrash","Zen Headbutt","Raging Bull","Bulk Up","Screech"],specialMoves:["Screech"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Screech"}]}},{name:"Tauros (Fire)",formName:"taurospaldeablaze",imageAlt:"-b",region:m.Paldea,info:{moves:["Flare Blitz","Close Combat","Flamethrower","Headbutt","Sunny Day","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Tauros (Water)",formName:"taurospaldeaaqua",imageAlt:"-a",region:m.Paldea,info:{moves:["Wave Crash","Close Combat","Surf","Headbutt","Rain Dance","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Tinkaton",region:m.Paldea,info:{moves:["Gigaton Hammer","Play Rough","Knock Off","Thunder Wave","Misty Terrain","Sweet Kiss"],specialMoves:["Misty Terrain"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Sweet Kiss"},{type:a.HP,threshold:15,action:"Uses Sweet Kiss"}]}},{name:"Toedscruel",region:m.Paldea,info:{moves:["Energy Ball","Earth Power","Spore","Hex","Grassy Terrain"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Grassy Terrain"},{type:a.Time,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Spore"}]}},{name:"Torkoal",region:m.Paldea,info:{moves:["Lava Plume","Yawn","Clear Smog","Body Slam","Sunny Day","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Yawn"},{type:a.HP,threshold:20,action:"Uses Iron Defense"}]}},{name:"Toxapex",region:m.Paldea,info:{moves:["Water Pulse","Liquidation","Poison Jab","Pin Missile","Chilling Water","Toxic"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:95,action:"Uses Chilling Water"},{type:a.Time,threshold:75,action:"Uses Toxic"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Chilling Water"}]}},{name:"Tyranitar",region:m.Paldea,info:{moves:["Stone Edge","Crunch","Screech","Rock Blast","Iron Defense"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Crunch"},{type:a.HP,threshold:20,action:"Uses Iron Defense"}]}},{name:"Umbreon",region:m.Paldea,info:{moves:["Tera Blast","Dark Pulse","Foul Play","Tickle","Calm Mind","Curse"],specialMoves:["Curse","Tickle"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Calm Mind"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Curse"},{type:a.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Vaporeon",region:m.Paldea,info:{moves:["Tera Blast","Surf","Hyper Voice","Yawn","Rain Dance","Calm Mind"],specialMoves:["Yawn"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Volcarona",region:m.Paldea,info:{moves:["Bug Buzz","Flamethrower","Hurricane","Tailwind","Amnesia","Sunny Day","Light Screen","Quiver Dance"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:85,action:"Uses Amnesia"},{type:a.HP,threshold:75,action:"Uses Sunny Day"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Light Screen"},{type:a.Time,threshold:20,action:"Uses Quiver Dance"}]}},{name:"Ambipom",region:m.Kitakami,info:{moves:["Double Hit","Ice Punch","Fire Punch","Thunder Punch","Screech"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:89,action:"Uses Screech"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Double Hit"}]}},{name:"Basculegion (Male)",formName:"basculegion",region:m.Kitakami,info:{moves:["Wave Crash","Aqua Jet","Crunch","Scary Face","Icy Wind","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Icy Wind"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Basculegion (Female)",formName:"basculegion",imageAlt:"-f",region:m.Kitakami,info:{moves:["Surf","Aqua Jet","Shadow Ball","Scary Face","Icy Wind","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Icy Wind"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Chandelure",region:m.Kitakami,info:{moves:["Flamethrower","Shadow Ball","Will-O-Wisp","Poltergeist","Heat Wave","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Heat Wave"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Sunny Day"},{type:a.HP,threshold:35,action:"Stats & Status Reset"}]}},{name:"Clefable",region:m.Kitakami,info:{moves:["Moonblast","Psychic","Meteor Mash","Encore","Dazzling Gleam","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Encore"},{type:a.HP,threshold:40,action:"Uses Dazzling Gleam"},{type:a.HP,threshold:41,action:"Uses Dazzling Gleam"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Conkeldurr",region:m.Kitakami,info:{moves:["Rock Slide","Close Combat","Mach Punch","Slam","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:89,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:49,action:"Uses Bulk Up"},{type:a.Time,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Crawdaunt",region:m.Kitakami,info:{moves:["Aqua Jet","Crabhammer","Crunch","Giga Impact","Leer","Swords Dance"],specialMoves:["Aqua Jet"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Uses Leer"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Dusknoir",region:m.Kitakami,info:{moves:["Poltergeist","Dark Pulse","Will-O-Wisp","Ice Punch","Gravity","Spite"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Gravity"},{type:a.HP,threshold:70,action:"Uses Spite"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Spite"},{type:a.HP,threshold:10,action:"Stats & Status Reset"}]}},{name:"Gliscor",region:m.Kitakami,info:{moves:["Acrobatics","Knock Off","Quick Attack","Earthquake","Sandstorm","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Swords Dance"},{type:a.Time,threshold:15,action:"Uses Sandstorm"},{type:a.Time,threshold:5,action:"Uses Earthquake"}]}},{name:"Golem",region:m.Kitakami,info:{moves:["Earthquake","Rock Slide","Flail","Smack Down","Stone Edge","Iron Defense"],specialMoves:["Flail"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:85,action:"Uses Stone Edge"},{type:a.Time,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:29,action:"Uses Iron Defense"}]}},{name:"Kommo-o",formName:"kommoo",region:m.Kitakami,info:{moves:["Focus Blast","Dragon Claw","Iron Head","Scary Face","Clangorous Soul","Reversal"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Clangorous Soul"},{type:a.HP,threshold:30,action:"Uses Clangorous Soul"},{type:a.Time,threshold:10,action:"Uses Reversal"}]}},{name:"Leavanny",region:m.Kitakami,info:{moves:["Leaf Blade","X-Scissor","Grassy Glide","Sticky Web","Grassy Terrain","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Grassy Terrain"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Ludicolo",region:m.Kitakami,info:{moves:["Energy Ball","Hydro Pump","Fake Out","Chilling Water","Rain Dance","Teeter Dance"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Uses Chilling Water"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.Time,threshold:20,action:"Uses Teeter Dance"}]}},{name:"Mamoswine",region:m.Kitakami,info:{moves:["Icicle Crash","Ice Shard","Bulldoze","Freeze-Dry","Snowscape","Amnesia","Earthquake"],specialMoves:["Freeze-Dry"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Amnesia"},{type:a.HP,threshold:10,action:"Uses Earthquake"},{type:a.Time,threshold:45,action:"Reduce Tera Orb Charge"}]}},{name:"Mandibuzz",region:m.Kitakami,info:{moves:["Dual Wingbeat","Dark Pulse","Toxic","Bone Rush","Snarl"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Player Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Snarl"},{type:a.HP,threshold:75,action:"Uses Snarl"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Snarl"}]}},{name:"Mienshao",region:m.Kitakami,info:{moves:["Aerial Ace","Brick Break","Aura Sphere","Reversal","Calm Mind"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:90,action:"Uses Calm Mind"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.Time,threshold:20,action:"Uses Aura Sphere"}]}},{name:"Milotic",region:m.Kitakami,info:{moves:["Dragon Pulse","Water Pulse","Safeguard","Aqua Tail","Coil","Hypnosis","Rain Dance"],specialMoves:["Hypnosis"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:99,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Coil"},{type:a.HP,threshold:70,action:"Uses Hypnosis"},{type:a.Time,threshold:60,action:"Uses Rain Dance"},{type:a.Time,threshold:10,action:"Uses Hypnosis"}]}},{name:"Morpeko",region:m.Kitakami,info:{moves:["Aura Wheel","Lash Out","Thunder Wave","Torment","Taunt","Electric Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Ninetales",region:m.Kitakami,info:{moves:["Flamethrower","Extrasensory","Will-O-Wisp","Burning Jealousy","Heat Wave","Sunny Day"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Heat Wave"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Sunny Day"},{type:a.Time,threshold:10,action:"Uses Heat Wave"}]}},{name:"Politoed",region:m.Kitakami,info:{moves:["Chilling Water","Surf","Ice Beam","Encore","Amnesia"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Uses Chilling Water"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:29,action:"Uses Amnesia"}]}},{name:"Poliwrath",region:m.Kitakami,info:{moves:["Brick Break","Liquidation","Focus Blast","Haze","Rain Dance","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Rain Dance"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Quagsire",region:m.Kitakami,info:{moves:["Earthquake","Liquidation","Yawn","Toxic","Curse","Rain Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Uses Curse"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Rain Dance"}]}},{name:"Shiftry",region:m.Kitakami,info:{moves:["Leaf Blade","Sucker Punch","Fake Out","Extrasensory","Sunny Day","Trailblaze","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sunny Day"},{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:70,action:"Uses Trailblaze"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Sinistcha",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:15,action:"Uses Matcha Gotcha"},{type:a.Time,threshold:10,action:"Uses Matcha Gotcha"}]}},{name:"Sinistcha (Masterpiece)",formName:"sinistchamasterpiece",imageAlt:"-m",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:15,action:"Uses Matcha Gotcha"},{type:a.Time,threshold:10,action:"Uses Matcha Gotcha"}]}},{name:"Snorlax",region:m.Kitakami,info:{moves:["Facade","Crunch","Yawn","Heavy Slam"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Stats & Status Reset"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Stats & Status Reset"}]}},{name:"Trevenant",region:m.Kitakami,info:{moves:["Wood Hammer","Shadow Claw","Forest's Curse","Will-O-Wisp","Grassy Terrain","Disable"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Wood Hammer"}]}},{name:"Yanmega",region:m.Kitakami,info:{moves:["Bug Buzz","Air Slash","Quick Attack","Ancient Power"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Ancient Power"},{type:a.HP,threshold:85,action:"Uses Ancient Power"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Ancient Power"}]}},{name:"Alcremie",region:m.Terarium,info:{moves:["Dazzling Gleam","Psychic","Encore","Psyshock","Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Encore"},{type:a.HP,threshold:50,action:"Uses Acid Armor"},{type:a.HP,threshold:25,action:"Uses Acid Armor"},{type:a.Time,threshold:30,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Dugtrio",formName:"dugtrioalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Bulldoze","Iron Head","Ancient Power","Metal Claw","Sandstorm","Earthquake"],specialMoves:["Ancient Power"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Sandstorm"},{type:a.HP,threshold:25,action:"Uses Earthquake"}]}},{name:"Duraludon",region:m.Terarium,info:{moves:["Flash Cannon","Dragon Pulse","Breaking Swipe","Metal Claw","Stealth Rock","Light Screen","Reflect"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Stealth Rock"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Light Screen"},{type:a.HP,threshold:35,action:"Uses Reflect"}]}},{name:"Electivire",region:m.Terarium,info:{moves:["Discharge","Thunder Punch","Earthquake","Brick Break","Electric Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Electric Terrain"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Excadrill",region:m.Terarium,info:{moves:["Iron Head","Earthquake","Drill Run","Slash","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Sandstorm"},{type:a.Time,threshold:25,action:"Uses Sandstorm"}]}},{name:"Exeggutor",formName:"exeggutoralola",imageAlt:"-a",region:m.Terarium,info:{moves:["Dragon Hammer","Extrasensory","Seed Bomb","Hypnosis","Trick Room"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:80,action:"Player Stats & Status Reset"},{type:a.HP,threshold:65,action:"Uses Hypnosis"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Trick Room"},{type:a.HP,threshold:33,action:"Player Stats & Status Reset"}]}},{name:"Flygon",region:m.Terarium,info:{moves:["Earthquake","Dragon Claw","Quick Attack","Breaking Swipe","Dragon Dance","Draco Meteor"],specialMoves:["Quick Attack"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:79,action:"Uses Dragon Dance"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:5,action:"Uses Draco Meteor"}]}},{name:"Golem",formName:"golemalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Heavy Slam","Body Slam","Rock Slide","Discharge","Giga Impact"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Rock Slide"},{type:a.HP,threshold:25,action:"Uses Giga Impact"}]}},{name:"Golurk",region:m.Terarium,info:{moves:["Dynamic Punch","Shadow Punch","Heavy Slam","Ice Punch","Curse"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Curse"},{type:a.HP,threshold:35,action:"Uses Curse"}]}},{name:"Kingdra",region:m.Terarium,info:{moves:["Draco Meteor","Dragon Pulse","Water Pulse","Flash Cannon","Focus Energy","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Focus Energy"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Rain Dance"},{type:a.HP,threshold:5,action:"Uses Draco Meteor"}]}},{name:"Kleavor",region:m.Terarium,info:{moves:["X-Scissor","Close Combat","Air Cutter","Night Slash","Stone Axe","Swords Dance"],specialMoves:["Night Slash"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Stone Axe"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Swords Dance"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Lapras",region:m.Terarium,info:{moves:["Blizzard","Hydro Pump","Body Slam","Sing","Snowscape","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Magmortar",region:m.Terarium,info:{moves:["Lava Plume","Psychic","Scorching Sands","Taunt","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:95,action:"Uses Sunny Day"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Lava Plume"}]}},{name:"Malamar",region:m.Terarium,info:{moves:["Psycho Cut","Night Slash","Foul Play","Pluck","Taunt","Topsy-Turvy"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Topsy-Turvy"},{type:a.HP,threshold:25,action:"Uses Topsy-Turvy"}]}},{name:"Metagross",region:m.Terarium,info:{moves:["Zen Headbutt","Iron Head","Heavy Slam","Aerial Ace","Agility","Hone Claws"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Agility"},{type:a.HP,threshold:80,action:"Uses Iron Head"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Hone Claws"},{type:a.HP,threshold:20,action:"Uses Hone Claws"}]}},{name:"Muk",formName:"mukalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Crunch","Hex","Gunk Shot","Flamethrower","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Ninetales",formName:"ninetalesalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Moonblast","Blizzard","Ice Shard","Dazzling Gleam","Aurora Veil","Calm Mind","Snowscape"],specialMoves:["Moonblast"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Aurora Veil"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:24,action:"Uses Snowscape"}]}},{name:"Overqwil",region:m.Terarium,info:{moves:["Barb Barrage","Crunch","Pin Missile","Fell Stinger","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Toxic"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Uses Barb Barrage"}]}},{name:"Porygon-Z",formName:"porygonz",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Thunder Wave","Trick Room"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Trick Room"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"}]}},{name:"Porygon2",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Thunder Wave","Trick Room"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Trick Room"},{type:a.HP,threshold:45,action:"Stats & Status Reset"}]}},{name:"Reuniclus",region:m.Terarium,info:{moves:["Psychic","Fire Punch","Swift","Rock Tomb","Reflect","Light Screen","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Reflect"},{type:a.HP,threshold:80,action:"Uses Light Screen"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"}]}},{name:"Rhyperior",region:m.Terarium,info:{moves:["Earthquake","Rock Wrecker","Megahorn","Rock Polish","Sandstorm","Iron Defense"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:50,action:"Uses Iron Defense"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Rock Wrecker"},{type:a.HP,threshold:5,action:"Uses Earthquake"}]}},{name:"Sandslash",formName:"sandslashalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Ice Spinner","Iron Head","Earthquake","Triple Axel","Snowscape","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:80,action:"Uses Swords Dance"},{type:a.HP,threshold:35,action:"Player Stats & Status Reset"}]}},{name:"Skarmory",region:m.Terarium,info:{moves:["Drill Peck","Steel Wing","Night Slash","Slash","Taunt","Iron Defense"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:45,action:"Uses Iron Defense"},{type:a.HP,threshold:44,action:"Player Stats & Status Reset"}]}},{name:"Slowbro",formName:"slowbrogalar",imageAlt:"-g",region:m.Terarium,info:{moves:["Shell Side Arm","Zen Headbutt","Chilling Water","Rock Blast","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Slowking",formName:"slowkinggalar",imageAlt:"-g",region:m.Terarium,info:{moves:["Eerie Spell","Power Gem","Yawn","Acid Spray","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Whimsicott",region:m.Terarium,info:{moves:["Energy Ball","Moonblast","Encore","Hurricane","Taunt"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Stats & Status Reset"}]}}];var nv=(()=>{class e{constructor(n){this.stateService=n}ngOnInit(){Object.keys(m).map(r=>{let o=document.createElement("option");o.value=r,o.text=m[r],o.text=="Paldea"&&(o.selected=!0,this.stateService.changeRegionList(o.value)),document.getElementById("regionList").add(o)})}valueChanged(){let n=document.getElementById("regionList"),r=n.selectedIndex,o=n.options[r];this.stateService.changeRegionList(o.value)}static{this.\u0275fac=function(r){return new(r||e)(W(le))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-region"]],decls:3,vars:0,consts:[["id","regionList",3,"change"],["value",""]],template:function(r,o){r&1&&(oe(0,"select",0),yt("change",function(){return o.valueChanged()}),oe(1,"option",1),De(2,"-- Region --"),he()())},encapsulation:2})}}return e})();function ao(e){return e.toLowerCase().replace(/\w/,t=>t.toUpperCase())}function an(e){(e?[e]:["pokemonTypes","pokemonImageNormal","pokemonImageShiny","pokemonAbility","pokemonStatsWrapper","pokemonActions","pokemonMoves","pokemonHerbs","pokemonTypeAdvantages","pokemonTeraWeaknesses","pokemonTeraAdvantages"]).forEach(n=>{let r=document.getElementById(n);r.innerHTML=""})}function me(e,t){e.innerHTML+=t}function _i(e){return`<div class="typeMatchupText ${e.name}">${ao(e.name)} - ${e.multiplier}x</div>`}function Nd(e,t,n){return String(e).padStart(t,n)}var Od="Invariant Violation",rv=Object.setPrototypeOf,dP=rv===void 0?function(e,t){return e.__proto__=t,e}:rv,ec=function(e){xe(t,e);function t(n){n===void 0&&(n=Od);var r=e.call(this,typeof n=="number"?Od+": "+n+" (see https://github.com/apollographql/invariant-packages)":n)||this;return r.framesToPop=1,r.name=Od,dP(r,t.prototype),r}return t}(Error);function On(e,t){if(!e)throw new ec(t)}var Xa=["debug","log","warn","error","silent"],Ad=Xa.indexOf("log");function Ja(e){return function(){if(Xa.indexOf(e)>=Ad){var t=console[e]||console.log;return t.apply(console,arguments)}}}(function(e){e.debug=Ja("debug"),e.log=Ja("log"),e.warn=Ja("warn"),e.error=Ja("error")})(On||(On={}));function ov(e){var t=Xa[Ad];return Ad=Math.max(0,Xa.indexOf(e)),t}var xi="3.12.8";function Ue(e){try{return e()}catch{}}var co=Ue(function(){return globalThis})||Ue(function(){return window})||Ue(function(){return self})||Ue(function(){return global})||Ue(function(){return Ue.constructor("return this")()});var iv=new Map;function ki(e){var t=iv.get(e)||1;return iv.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function tc(e,t){t===void 0&&(t=0);var n=ki("stringifyForDisplay");return JSON.stringify(e,function(r,o){return o===void 0?n:o},t).split(JSON.stringify(n)).join("<undefined>")}function nc(e){return function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(typeof t=="number"){var o=t;t=Fd(o),t||(t=Ld(o,n),n=[])}e.apply(void 0,[t].concat(n))}}var I=Object.assign(function(t,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];t||On(t,Fd(n,r)||Ld(n,r))},{debug:nc(On.debug),log:nc(On.log),warn:nc(On.warn),error:nc(On.error)});function ue(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new ec(Fd(e,t)||Ld(e,t))}var sv=Symbol.for("ApolloErrorMessageHandler_"+xi);function av(e){if(typeof e=="string")return e;try{return tc(e,2).slice(0,1e3)}catch{return"<non-serializable>"}}function Fd(e,t){if(t===void 0&&(t=[]),!!e)return co[sv]&&co[sv](e,t.map(av))}function Ld(e,t){if(t===void 0&&(t=[]),!!e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:xi,message:e,args:t.map(av)})))}var fP=globalThis.__DEV__!==!1;function lo(e,t){if(!!!e)throw new Error(t)}function cv(e){return typeof e=="object"&&e!==null}function lv(e,t){if(!!!e)throw new Error(t??"Unexpected invariant triggered.")}var hP=/\r\n|[\n\r]/g;function uo(e,t){let n=0,r=1;for(let o of e.body.matchAll(hP)){if(typeof o.index=="number"||lv(!1),o.index>=t)break;n=o.index+o[0].length,r+=1}return{line:r,column:t+1-n}}function Hd(e){return rc(e.source,uo(e.source,e.start))}function rc(e,t){let n=e.locationOffset.column-1,r="".padStart(n)+e.body,o=t.line-1,i=e.locationOffset.line-1,s=t.line+i,c=t.line===1?n:0,l=t.column+c,u=`${e.name}:${s}:${l}
`,d=r.split(/\r\n|[\n\r]/g),f=d[o];if(f.length>120){let h=Math.floor(l/80),p=l%80,g=[];for(let v=0;v<f.length;v+=80)g.push(f.slice(v,v+80));return u+uv([[`${s} |`,g[0]],...g.slice(1,h+1).map(v=>["|",v]),["|","^".padStart(p)],["|",g[h+1]]])}return u+uv([[`${s-1} |`,d[o-1]],[`${s} |`,f],["|","^".padStart(l)],[`${s+1} |`,d[o+1]]])}function uv(e){let t=e.filter(([r,o])=>o!==void 0),n=Math.max(...t.map(([r])=>r.length));return t.map(([r,o])=>r.padStart(n)+(o?" "+o:"")).join(`
`)}function pP(e){let t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}var oc=class e extends Error{constructor(t,...n){var r,o,i;let{nodes:s,source:c,positions:l,path:u,originalError:d,extensions:f}=pP(n);super(t),this.name="GraphQLError",this.path=u??void 0,this.originalError=d??void 0,this.nodes=dv(Array.isArray(s)?s:s?[s]:void 0);let h=dv((r=this.nodes)===null||r===void 0?void 0:r.map(g=>g.loc).filter(g=>g!=null));this.source=c??(h==null||(o=h[0])===null||o===void 0?void 0:o.source),this.positions=l??h?.map(g=>g.start),this.locations=l&&c?l.map(g=>uo(c,g)):h?.map(g=>uo(g.source,g.start));let p=cv(d?.extensions)?d?.extensions:void 0;this.extensions=(i=f??p)!==null&&i!==void 0?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),d!=null&&d.stack?Object.defineProperty(this,"stack",{value:d.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,e):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(let n of this.nodes)n.loc&&(t+=`

`+Hd(n.loc));else if(this.source&&this.locations)for(let n of this.locations)t+=`

`+rc(this.source,n);return t}toJSON(){let t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}};function dv(e){return e===void 0||e.length===0?void 0:e}function Ee(e,t,n){return new oc(`Syntax Error: ${n}`,{source:e,positions:[t]})}var Ni=class{constructor(t,n,r){this.start=t.start,this.end=n.end,this.startToken=t,this.endToken=n,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}},fo=class{constructor(t,n,r,o,i,s){this.kind=t,this.start=n,this.end=r,this.line=o,this.column=i,this.value=s,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}},Ud={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},mP=new Set(Object.keys(Ud));function jd(e){let t=e?.kind;return typeof t=="string"&&mP.has(t)}var dr=function(e){return e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription",e}(dr||{});var ic=function(e){return e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION",e}(ic||{});var M=function(e){return e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",e}(M||{});function sc(e){return e===9||e===32}function ho(e){return e>=48&&e<=57}function fv(e){return e>=97&&e<=122||e>=65&&e<=90}function Bd(e){return fv(e)||e===95}function hv(e){return fv(e)||ho(e)||e===95}function pv(e){var t;let n=Number.MAX_SAFE_INTEGER,r=null,o=-1;for(let s=0;s<e.length;++s){var i;let c=e[s],l=gP(c);l!==c.length&&(r=(i=r)!==null&&i!==void 0?i:s,o=s,s!==0&&l<n&&(n=l))}return e.map((s,c)=>c===0?s:s.slice(n)).slice((t=r)!==null&&t!==void 0?t:0,o+1)}function gP(e){let t=0;for(;t<e.length&&sc(e.charCodeAt(t));)++t;return t}function mv(e,t){let n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),o=r.length===1,i=r.length>1&&r.slice(1).every(p=>p.length===0||sc(p.charCodeAt(0))),s=n.endsWith('\\"""'),c=e.endsWith('"')&&!s,l=e.endsWith("\\"),u=c||l,d=!(t!=null&&t.minimize)&&(!o||e.length>70||u||i||s),f="",h=o&&sc(e.charCodeAt(0));return(d&&!h||i)&&(f+=`
`),f+=n,(d||u)&&(f+=`
`),'"""'+f+'"""'}var T=function(e){return e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment",e}(T||{});var Ai=class{constructor(t){let n=new fo(T.SOF,0,0,0,0);this.source=t,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==T.EOF)do if(t.next)t=t.next;else{let n=yP(this,t.end);t.next=n,n.prev=t,t=n}while(t.kind===T.COMMENT);return t}};function yv(e){return e===T.BANG||e===T.DOLLAR||e===T.AMP||e===T.PAREN_L||e===T.PAREN_R||e===T.SPREAD||e===T.COLON||e===T.EQUALS||e===T.AT||e===T.BRACKET_L||e===T.BRACKET_R||e===T.BRACE_L||e===T.PIPE||e===T.BRACE_R}function po(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function ac(e,t){return vv(e.charCodeAt(t))&&Sv(e.charCodeAt(t+1))}function vv(e){return e>=55296&&e<=56319}function Sv(e){return e>=56320&&e<=57343}function fr(e,t){let n=e.source.body.codePointAt(t);if(n===void 0)return T.EOF;if(n>=32&&n<=126){let r=String.fromCodePoint(n);return r==='"'?`'"'`:`"${r}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function Ce(e,t,n,r,o){let i=e.line,s=1+n-e.lineStart;return new fo(t,n,r,i,s,o)}function yP(e,t){let n=e.source.body,r=n.length,o=t;for(;o<r;){let i=n.charCodeAt(o);switch(i){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++e.line,e.lineStart=o;continue;case 13:n.charCodeAt(o+1)===10?o+=2:++o,++e.line,e.lineStart=o;continue;case 35:return vP(e,o);case 33:return Ce(e,T.BANG,o,o+1);case 36:return Ce(e,T.DOLLAR,o,o+1);case 38:return Ce(e,T.AMP,o,o+1);case 40:return Ce(e,T.PAREN_L,o,o+1);case 41:return Ce(e,T.PAREN_R,o,o+1);case 46:if(n.charCodeAt(o+1)===46&&n.charCodeAt(o+2)===46)return Ce(e,T.SPREAD,o,o+3);break;case 58:return Ce(e,T.COLON,o,o+1);case 61:return Ce(e,T.EQUALS,o,o+1);case 64:return Ce(e,T.AT,o,o+1);case 91:return Ce(e,T.BRACKET_L,o,o+1);case 93:return Ce(e,T.BRACKET_R,o,o+1);case 123:return Ce(e,T.BRACE_L,o,o+1);case 124:return Ce(e,T.PIPE,o,o+1);case 125:return Ce(e,T.BRACE_R,o,o+1);case 34:return n.charCodeAt(o+1)===34&&n.charCodeAt(o+2)===34?EP(e,o):bP(e,o)}if(ho(i)||i===45)return SP(e,o,i);if(Bd(i))return CP(e,o);throw Ee(e.source,o,i===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:po(i)||ac(n,o)?`Unexpected character: ${fr(e,o)}.`:`Invalid character: ${fr(e,o)}.`)}return Ce(e,T.EOF,r,r)}function vP(e,t){let n=e.source.body,r=n.length,o=t+1;for(;o<r;){let i=n.charCodeAt(o);if(i===10||i===13)break;if(po(i))++o;else if(ac(n,o))o+=2;else break}return Ce(e,T.COMMENT,t,o,n.slice(t+1,o))}function SP(e,t,n){let r=e.source.body,o=t,i=n,s=!1;if(i===45&&(i=r.charCodeAt(++o)),i===48){if(i=r.charCodeAt(++o),ho(i))throw Ee(e.source,o,`Invalid number, unexpected digit after 0: ${fr(e,o)}.`)}else o=Vd(e,o,i),i=r.charCodeAt(o);if(i===46&&(s=!0,i=r.charCodeAt(++o),o=Vd(e,o,i),i=r.charCodeAt(o)),(i===69||i===101)&&(s=!0,i=r.charCodeAt(++o),(i===43||i===45)&&(i=r.charCodeAt(++o)),o=Vd(e,o,i),i=r.charCodeAt(o)),i===46||Bd(i))throw Ee(e.source,o,`Invalid number, expected digit but got: ${fr(e,o)}.`);return Ce(e,s?T.FLOAT:T.INT,t,o,r.slice(t,o))}function Vd(e,t,n){if(!ho(n))throw Ee(e.source,t,`Invalid number, expected digit but got: ${fr(e,t)}.`);let r=e.source.body,o=t+1;for(;ho(r.charCodeAt(o));)++o;return o}function bP(e,t){let n=e.source.body,r=n.length,o=t+1,i=o,s="";for(;o<r;){let c=n.charCodeAt(o);if(c===34)return s+=n.slice(i,o),Ce(e,T.STRING,t,o+1,s);if(c===92){s+=n.slice(i,o);let l=n.charCodeAt(o+1)===117?n.charCodeAt(o+2)===123?DP(e,o):wP(e,o):TP(e,o);s+=l.value,o+=l.size,i=o;continue}if(c===10||c===13)break;if(po(c))++o;else if(ac(n,o))o+=2;else throw Ee(e.source,o,`Invalid character within String: ${fr(e,o)}.`)}throw Ee(e.source,o,"Unterminated string.")}function DP(e,t){let n=e.source.body,r=0,o=3;for(;o<12;){let i=n.charCodeAt(t+o++);if(i===125){if(o<5||!po(r))break;return{value:String.fromCodePoint(r),size:o}}if(r=r<<4|Oi(i),r<0)break}throw Ee(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+o)}".`)}function wP(e,t){let n=e.source.body,r=gv(n,t+2);if(po(r))return{value:String.fromCodePoint(r),size:6};if(vv(r)&&n.charCodeAt(t+6)===92&&n.charCodeAt(t+7)===117){let o=gv(n,t+8);if(Sv(o))return{value:String.fromCodePoint(r,o),size:12}}throw Ee(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function gv(e,t){return Oi(e.charCodeAt(t))<<12|Oi(e.charCodeAt(t+1))<<8|Oi(e.charCodeAt(t+2))<<4|Oi(e.charCodeAt(t+3))}function Oi(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function TP(e,t){let n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Ee(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function EP(e,t){let n=e.source.body,r=n.length,o=e.lineStart,i=t+3,s=i,c="",l=[];for(;i<r;){let u=n.charCodeAt(i);if(u===34&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34){c+=n.slice(s,i),l.push(c);let d=Ce(e,T.BLOCK_STRING,t,i+3,pv(l).join(`
`));return e.line+=l.length-1,e.lineStart=o,d}if(u===92&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34&&n.charCodeAt(i+3)===34){c+=n.slice(s,i),s=i+1,i+=4;continue}if(u===10||u===13){c+=n.slice(s,i),l.push(c),u===13&&n.charCodeAt(i+1)===10?i+=2:++i,c="",s=i,o=i;continue}if(po(u))++i;else if(ac(n,i))i+=2;else throw Ee(e.source,i,`Invalid character within String: ${fr(e,i)}.`)}throw Ee(e.source,i,"Unterminated string.")}function CP(e,t){let n=e.source.body,r=n.length,o=t+1;for(;o<r;){let i=n.charCodeAt(o);if(hv(i))++o;else break}return Ce(e,T.NAME,t,o,n.slice(t,o))}function mo(e){return cc(e,[])}function cc(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return IP(e,t);default:return String(e)}}function IP(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";let n=[...t,e];if(PP(e)){let r=e.toJSON();if(r!==e)return typeof r=="string"?r:cc(r,n)}else if(Array.isArray(e))return RP(e,n);return MP(e,n)}function PP(e){return typeof e.toJSON=="function"}function MP(e,t){let n=Object.entries(e);return n.length===0?"{}":t.length>2?"["+_P(e)+"]":"{ "+n.map(([o,i])=>o+": "+cc(i,t)).join(", ")+" }"}function RP(e,t){if(e.length===0)return"[]";if(t.length>2)return"[Array]";let n=Math.min(10,e.length),r=e.length-n,o=[];for(let i=0;i<n;++i)o.push(cc(e[i],t));return r===1?o.push("... 1 more item"):r>1&&o.push(`... ${r} more items`),"["+o.join(", ")+"]"}function _P(e){let t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){let n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}var xP=globalThis.process&&!0,bv=xP?function(t,n){return t instanceof n}:function(t,n){if(t instanceof n)return!0;if(typeof t=="object"&&t!==null){var r;let o=n.prototype[Symbol.toStringTag],i=Symbol.toStringTag in t?t[Symbol.toStringTag]:(r=t.constructor)===null||r===void 0?void 0:r.name;if(o===i){let s=mo(t);throw new Error(`Cannot use ${o} "${s}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};var go=class{constructor(t,n="GraphQL request",r={line:1,column:1}){typeof t=="string"||lo(!1,`Body must be a string. Received: ${mo(t)}.`),this.body=t,this.name=n,this.locationOffset=r,this.locationOffset.line>0||lo(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||lo(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}};function Dv(e){return bv(e,go)}function uc(e,t){let n=new $d(e,t),r=n.parseDocument();return Object.defineProperty(r,"tokenCount",{enumerable:!1,value:n.tokenCount}),r}var $d=class{constructor(t,n={}){let r=Dv(t)?t:new go(t);this._lexer=new Ai(r),this._options=n,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){let t=this.expectToken(T.NAME);return this.node(t,{kind:M.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:M.DOCUMENT,definitions:this.many(T.SOF,this.parseDefinition,T.EOF)})}parseDefinition(){if(this.peek(T.BRACE_L))return this.parseOperationDefinition();let t=this.peekDescription(),n=t?this._lexer.lookahead():this._lexer.token;if(n.kind===T.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw Ee(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){let t=this._lexer.token;if(this.peek(T.BRACE_L))return this.node(t,{kind:M.OPERATION_DEFINITION,operation:dr.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});let n=this.parseOperationType(),r;return this.peek(T.NAME)&&(r=this.parseName()),this.node(t,{kind:M.OPERATION_DEFINITION,operation:n,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){let t=this.expectToken(T.NAME);switch(t.value){case"query":return dr.QUERY;case"mutation":return dr.MUTATION;case"subscription":return dr.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(T.PAREN_L,this.parseVariableDefinition,T.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:M.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(T.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(T.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){let t=this._lexer.token;return this.expectToken(T.DOLLAR),this.node(t,{kind:M.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:M.SELECTION_SET,selections:this.many(T.BRACE_L,this.parseSelection,T.BRACE_R)})}parseSelection(){return this.peek(T.SPREAD)?this.parseFragment():this.parseField()}parseField(){let t=this._lexer.token,n=this.parseName(),r,o;return this.expectOptionalToken(T.COLON)?(r=n,o=this.parseName()):o=n,this.node(t,{kind:M.FIELD,alias:r,name:o,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(T.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){let n=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(T.PAREN_L,n,T.PAREN_R)}parseArgument(t=!1){let n=this._lexer.token,r=this.parseName();return this.expectToken(T.COLON),this.node(n,{kind:M.ARGUMENT,name:r,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){let t=this._lexer.token;this.expectToken(T.SPREAD);let n=this.expectOptionalKeyword("on");return!n&&this.peek(T.NAME)?this.node(t,{kind:M.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:M.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){let t=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:M.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:M.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){let n=this._lexer.token;switch(n.kind){case T.BRACKET_L:return this.parseList(t);case T.BRACE_L:return this.parseObject(t);case T.INT:return this.advanceLexer(),this.node(n,{kind:M.INT,value:n.value});case T.FLOAT:return this.advanceLexer(),this.node(n,{kind:M.FLOAT,value:n.value});case T.STRING:case T.BLOCK_STRING:return this.parseStringLiteral();case T.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:M.BOOLEAN,value:!0});case"false":return this.node(n,{kind:M.BOOLEAN,value:!1});case"null":return this.node(n,{kind:M.NULL});default:return this.node(n,{kind:M.ENUM,value:n.value})}case T.DOLLAR:if(t)if(this.expectToken(T.DOLLAR),this._lexer.token.kind===T.NAME){let r=this._lexer.token.value;throw Ee(this._lexer.source,n.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){let t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:M.STRING,value:t.value,block:t.kind===T.BLOCK_STRING})}parseList(t){let n=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:M.LIST,values:this.any(T.BRACKET_L,n,T.BRACKET_R)})}parseObject(t){let n=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:M.OBJECT,fields:this.any(T.BRACE_L,n,T.BRACE_R)})}parseObjectField(t){let n=this._lexer.token,r=this.parseName();return this.expectToken(T.COLON),this.node(n,{kind:M.OBJECT_FIELD,name:r,value:this.parseValueLiteral(t)})}parseDirectives(t){let n=[];for(;this.peek(T.AT);)n.push(this.parseDirective(t));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){let n=this._lexer.token;return this.expectToken(T.AT),this.node(n,{kind:M.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){let t=this._lexer.token,n;if(this.expectOptionalToken(T.BRACKET_L)){let r=this.parseTypeReference();this.expectToken(T.BRACKET_R),n=this.node(t,{kind:M.LIST_TYPE,type:r})}else n=this.parseNamedType();return this.expectOptionalToken(T.BANG)?this.node(t,{kind:M.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:M.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(T.STRING)||this.peek(T.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");let r=this.parseConstDirectives(),o=this.many(T.BRACE_L,this.parseOperationTypeDefinition,T.BRACE_R);return this.node(t,{kind:M.SCHEMA_DEFINITION,description:n,directives:r,operationTypes:o})}parseOperationTypeDefinition(){let t=this._lexer.token,n=this.parseOperationType();this.expectToken(T.COLON);let r=this.parseNamedType();return this.node(t,{kind:M.OPERATION_TYPE_DEFINITION,operation:n,type:r})}parseScalarTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");let r=this.parseName(),o=this.parseConstDirectives();return this.node(t,{kind:M.SCALAR_TYPE_DEFINITION,description:n,name:r,directives:o})}parseObjectTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");let r=this.parseName(),o=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(t,{kind:M.OBJECT_TYPE_DEFINITION,description:n,name:r,interfaces:o,directives:i,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(T.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(T.BRACE_L,this.parseFieldDefinition,T.BRACE_R)}parseFieldDefinition(){let t=this._lexer.token,n=this.parseDescription(),r=this.parseName(),o=this.parseArgumentDefs();this.expectToken(T.COLON);let i=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(t,{kind:M.FIELD_DEFINITION,description:n,name:r,arguments:o,type:i,directives:s})}parseArgumentDefs(){return this.optionalMany(T.PAREN_L,this.parseInputValueDef,T.PAREN_R)}parseInputValueDef(){let t=this._lexer.token,n=this.parseDescription(),r=this.parseName();this.expectToken(T.COLON);let o=this.parseTypeReference(),i;this.expectOptionalToken(T.EQUALS)&&(i=this.parseConstValueLiteral());let s=this.parseConstDirectives();return this.node(t,{kind:M.INPUT_VALUE_DEFINITION,description:n,name:r,type:o,defaultValue:i,directives:s})}parseInterfaceTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");let r=this.parseName(),o=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(t,{kind:M.INTERFACE_TYPE_DEFINITION,description:n,name:r,interfaces:o,directives:i,fields:s})}parseUnionTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseUnionMemberTypes();return this.node(t,{kind:M.UNION_TYPE_DEFINITION,description:n,name:r,directives:o,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(T.EQUALS)?this.delimitedMany(T.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();return this.node(t,{kind:M.ENUM_TYPE_DEFINITION,description:n,name:r,directives:o,values:i})}parseEnumValuesDefinition(){return this.optionalMany(T.BRACE_L,this.parseEnumValueDefinition,T.BRACE_R)}parseEnumValueDefinition(){let t=this._lexer.token,n=this.parseDescription(),r=this.parseEnumValueName(),o=this.parseConstDirectives();return this.node(t,{kind:M.ENUM_VALUE_DEFINITION,description:n,name:r,directives:o})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Ee(this._lexer.source,this._lexer.token.start,`${lc(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();return this.node(t,{kind:M.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:r,directives:o,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(T.BRACE_L,this.parseInputValueDef,T.BRACE_R)}parseTypeSystemExtension(){let t=this._lexer.lookahead();if(t.kind===T.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");let n=this.parseConstDirectives(),r=this.optionalMany(T.BRACE_L,this.parseOperationTypeDefinition,T.BRACE_R);if(n.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:M.SCHEMA_EXTENSION,directives:n,operationTypes:r})}parseScalarTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");let n=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(t,{kind:M.SCALAR_TYPE_EXTENSION,name:n,directives:r})}parseObjectTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");let n=this.parseName(),r=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(r.length===0&&o.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:M.OBJECT_TYPE_EXTENSION,name:n,interfaces:r,directives:o,fields:i})}parseInterfaceTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");let n=this.parseName(),r=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(r.length===0&&o.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:M.INTERFACE_TYPE_EXTENSION,name:n,interfaces:r,directives:o,fields:i})}parseUnionTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseUnionMemberTypes();if(r.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:M.UNION_TYPE_EXTENSION,name:n,directives:r,types:o})}parseEnumTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();if(r.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:M.ENUM_TYPE_EXTENSION,name:n,directives:r,values:o})}parseInputObjectTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();if(r.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:M.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:r,fields:o})}parseDirectiveDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(T.AT);let r=this.parseName(),o=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");let s=this.parseDirectiveLocations();return this.node(t,{kind:M.DIRECTIVE_DEFINITION,description:n,name:r,arguments:o,repeatable:i,locations:s})}parseDirectiveLocations(){return this.delimitedMany(T.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){let t=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(ic,n.value))return n;throw this.unexpected(t)}node(t,n){return this._options.noLocation!==!0&&(n.loc=new Ni(t,this._lexer.lastToken,this._lexer.source)),n}peek(t){return this._lexer.token.kind===t}expectToken(t){let n=this._lexer.token;if(n.kind===t)return this.advanceLexer(),n;throw Ee(this._lexer.source,n.start,`Expected ${wv(t)}, found ${lc(n)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){let n=this._lexer.token;if(n.kind===T.NAME&&n.value===t)this.advanceLexer();else throw Ee(this._lexer.source,n.start,`Expected "${t}", found ${lc(n)}.`)}expectOptionalKeyword(t){let n=this._lexer.token;return n.kind===T.NAME&&n.value===t?(this.advanceLexer(),!0):!1}unexpected(t){let n=t??this._lexer.token;return Ee(this._lexer.source,n.start,`Unexpected ${lc(n)}.`)}any(t,n,r){this.expectToken(t);let o=[];for(;!this.expectOptionalToken(r);)o.push(n.call(this));return o}optionalMany(t,n,r){if(this.expectOptionalToken(t)){let o=[];do o.push(n.call(this));while(!this.expectOptionalToken(r));return o}return[]}many(t,n,r){this.expectToken(t);let o=[];do o.push(n.call(this));while(!this.expectOptionalToken(r));return o}delimitedMany(t,n){this.expectOptionalToken(t);let r=[];do r.push(n.call(this));while(this.expectOptionalToken(t));return r}advanceLexer(){let{maxTokens:t}=this._options,n=this._lexer.advance();if(n.kind!==T.EOF&&(++this._tokenCounter,t!==void 0&&this._tokenCounter>t))throw Ee(this._lexer.source,n.start,`Document contains more that ${t} tokens. Parsing aborted.`)}};function lc(e){let t=e.value;return wv(e.kind)+(t!=null?` "${t}"`:"")}function wv(e){return yv(e)?`"${e}"`:e}function Tv(e){return`"${e.replace(kP,NP)}"`}var kP=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function NP(e){return OP[e.charCodeAt(0)]}var OP=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"];var cn=Object.freeze({});function Me(e,t,n=Ud){let r=new Map;for(let y of Object.values(M))r.set(y,zd(t,y));let o,i=Array.isArray(e),s=[e],c=-1,l=[],u=e,d,f,h=[],p=[];do{c++;let y=c===s.length,w=y&&l.length!==0;if(y){if(d=p.length===0?void 0:h[h.length-1],u=f,f=p.pop(),w)if(i){u=u.slice();let C=0;for(let[E,_]of l){let L=E-C;_===null?(u.splice(L,1),C++):u[L]=_}}else{u=Object.defineProperties({},Object.getOwnPropertyDescriptors(u));for(let[C,E]of l)u[C]=E}c=o.index,s=o.keys,l=o.edits,i=o.inArray,o=o.prev}else if(f){if(d=i?c:s[c],u=f[d],u==null)continue;h.push(d)}let D;if(!Array.isArray(u)){var g,v;jd(u)||lo(!1,`Invalid AST Node: ${mo(u)}.`);let C=y?(g=r.get(u.kind))===null||g===void 0?void 0:g.leave:(v=r.get(u.kind))===null||v===void 0?void 0:v.enter;if(D=C?.call(t,u,d,f,h,p),D===cn)break;if(D===!1){if(!y){h.pop();continue}}else if(D!==void 0&&(l.push([d,D]),!y))if(jd(D))u=D;else{h.pop();continue}}if(D===void 0&&w&&l.push([d,u]),y)h.pop();else{var b;o={inArray:i,index:c,keys:s,edits:l,prev:o},i=Array.isArray(u),s=i?u:(b=n[u.kind])!==null&&b!==void 0?b:[],c=-1,l=[],f&&p.push(f),f=u}}while(o!==void 0);return l.length!==0?l[l.length-1][1]:e}function zd(e,t){let n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function yo(e){return Me(e,FP)}var AP=80,FP={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>x(e.definitions,`

`)},OperationDefinition:{leave(e){let t=Q("(",x(e.variableDefinitions,", "),")"),n=x([e.operation,x([e.name,t]),x(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r})=>e+": "+t+Q(" = ",n)+Q(" ",x(r," "))},SelectionSet:{leave:({selections:e})=>_t(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:o}){let i=Q("",e,": ")+t,s=i+Q("(",x(n,", "),")");return s.length>AP&&(s=i+Q(`(
`,dc(x(n,`
`)),`
)`)),x([s,x(r," "),o]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+Q(" ",x(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>x(["...",Q("on ",e),x(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:o})=>`fragment ${e}${Q("(",x(n,", "),")")} on ${t} ${Q("",x(r," ")," ")}`+o},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?mv(e):Tv(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+x(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+x(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+Q("(",x(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>Q("",e,`
`)+x(["schema",x(t," "),_t(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>Q("",e,`
`)+x(["scalar",t,x(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:o})=>Q("",e,`
`)+x(["type",t,Q("implements ",x(n," & ")),x(r," "),_t(o)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:o})=>Q("",e,`
`)+t+(Ev(n)?Q(`(
`,dc(x(n,`
`)),`
)`):Q("(",x(n,", "),")"))+": "+r+Q(" ",x(o," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:o})=>Q("",e,`
`)+x([t+": "+n,Q("= ",r),x(o," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:o})=>Q("",e,`
`)+x(["interface",t,Q("implements ",x(n," & ")),x(r," "),_t(o)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>Q("",e,`
`)+x(["union",t,x(n," "),Q("= ",x(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>Q("",e,`
`)+x(["enum",t,x(n," "),_t(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>Q("",e,`
`)+x([t,x(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>Q("",e,`
`)+x(["input",t,x(n," "),_t(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,repeatable:r,locations:o})=>Q("",e,`
`)+"directive @"+t+(Ev(n)?Q(`(
`,dc(x(n,`
`)),`
)`):Q("(",x(n,", "),")"))+(r?" repeatable":"")+" on "+x(o," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>x(["extend schema",x(e," "),_t(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>x(["extend scalar",e,x(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>x(["extend type",e,Q("implements ",x(t," & ")),x(n," "),_t(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>x(["extend interface",e,Q("implements ",x(t," & ")),x(n," "),_t(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>x(["extend union",e,x(t," "),Q("= ",x(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>x(["extend enum",e,x(t," "),_t(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>x(["extend input",e,x(t," "),_t(n)]," ")}};function x(e,t=""){var n;return(n=e?.filter(r=>r).join(t))!==null&&n!==void 0?n:""}function _t(e){return Q(`{
`,dc(x(e,`
`)),`
}`)}function Q(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function dc(e){return Q("  ",e.replace(/\n/g,`
  `))}function Ev(e){var t;return(t=e?.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}function Fi(e){return e.kind===M.FIELD||e.kind===M.FRAGMENT_SPREAD||e.kind===M.INLINE_FRAGMENT}function xt(e,t){var n=e.directives;return!n||!n.length?!0:Cv(n).every(function(r){var o=r.directive,i=r.ifArgument,s=!1;return i.value.kind==="Variable"?(s=t&&t[i.value.name.value],I(s!==void 0,78,o.name.value)):s=i.value.value,o.name.value==="skip"?!s:s})}function ln(e,t,n){var r=new Set(e),o=r.size;return Me(t,{Directive:function(i){if(r.delete(i.name.value)&&(!n||!r.size))return cn}}),n?!r.size:r.size<o}function qd(e){return e&&ln(["client","export"],e,!0)}function ZP(e){var t=e.name.value;return t==="skip"||t==="include"}function Cv(e){var t=[];return e&&e.length&&e.forEach(function(n){if(ZP(n)){var r=n.arguments,o=n.name.value;I(r&&r.length===1,79,o);var i=r[0];I(i.name&&i.name.value==="if",80,o);var s=i.value;I(s&&(s.kind==="Variable"||s.kind==="BooleanValue"),81,o),t.push({directive:n,ifArgument:i})}}),t}function Wd(e){var t,n,r=(t=e.directives)===null||t===void 0?void 0:t.find(function(i){var s=i.name;return s.value==="unmask"});if(!r)return"mask";var o=(n=r.arguments)===null||n===void 0?void 0:n.find(function(i){var s=i.name;return s.value==="mode"});return globalThis.__DEV__!==!1&&o&&(o.value.kind===M.VARIABLE?globalThis.__DEV__!==!1&&I.warn(82):o.value.kind!==M.STRING?globalThis.__DEV__!==!1&&I.warn(83):o.value.value!=="migrate"&&globalThis.__DEV__!==!1&&I.warn(84,o.value.value)),o&&"value"in o.value&&o.value.value==="migrate"?"migrate":"unmask"}var JP=()=>Object.create(null),{forEach:XP,slice:Iv}=Array.prototype,{hasOwnProperty:eM}=Object.prototype,Ve=class e{constructor(t=!0,n=JP){this.weakness=t,this.makeData=n}lookup(){return this.lookupArray(arguments)}lookupArray(t){let n=this;return XP.call(t,r=>n=n.getChildTrie(r)),eM.call(n,"data")?n.data:n.data=this.makeData(Iv.call(t))}peek(){return this.peekArray(arguments)}peekArray(t){let n=this;for(let r=0,o=t.length;n&&r<o;++r){let i=n.mapFor(t[r],!1);n=i&&i.get(t[r])}return n&&n.data}remove(){return this.removeArray(arguments)}removeArray(t){let n;if(t.length){let r=t[0],o=this.mapFor(r,!1),i=o&&o.get(r);i&&(n=i.removeArray(Iv.call(t,1)),!i.data&&!i.weak&&!(i.strong&&i.strong.size)&&o.delete(r))}else n=this.data,delete this.data;return n}getChildTrie(t){let n=this.mapFor(t,!0),r=n.get(t);return r||n.set(t,r=new e(this.weakness,this.makeData)),r}mapFor(t,n){return this.weakness&&tM(t)?this.weak||(n?this.weak=new WeakMap:void 0):this.strong||(n?this.strong=new Map:void 0)}};function tM(e){switch(typeof e){case"object":if(e===null)break;case"function":return!0}return!1}var nM=Ue(function(){return navigator.product})=="ReactNative",ct=typeof WeakMap=="function"&&!(nM&&!global.HermesInternal),vo=typeof WeakSet=="function",Gd=typeof Symbol=="function"&&typeof Symbol.for=="function",An=Gd&&Symbol.asyncIterator,N1=typeof Ue(function(){return window.document.createElement})=="function",O1=Ue(function(){return navigator.userAgent.indexOf("jsdom")>=0})||!1;function Z(e){return e!==null&&typeof e=="object"}function Qd(e,t){var n=t,r=[];e.definitions.forEach(function(i){if(i.kind==="OperationDefinition")throw ue(85,i.operation,i.name?" named '".concat(i.name.value,"'"):"");i.kind==="FragmentDefinition"&&r.push(i)}),typeof n>"u"&&(I(r.length===1,86,r.length),n=r[0].name.value);var o=S(S({},e),{definitions:be([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:n}}]}}],e.definitions,!0)});return o}function lt(e){e===void 0&&(e=[]);var t={};return e.forEach(function(n){t[n.name.value]=n}),t}function un(e,t){switch(e.kind){case"InlineFragment":return e;case"FragmentSpread":{var n=e.name.value;if(typeof t=="function")return t(n);var r=t&&t[n];return I(r,87,n),r||null}default:return null}}function Kd(e){var t=!0;return Me(e,{FragmentSpread:function(n){if(t=!!n.directives&&n.directives.some(function(r){return r.name.value==="unmask"}),!t)return cn}}),t}function rM(){}var Fn=class{constructor(t=1/0,n=rM){this.max=t,this.dispose=n,this.map=new Map,this.newest=null,this.oldest=null}has(t){return this.map.has(t)}get(t){let n=this.getNode(t);return n&&n.value}get size(){return this.map.size}getNode(t){let n=this.map.get(t);if(n&&n!==this.newest){let{older:r,newer:o}=n;o&&(o.older=r),r&&(r.newer=o),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=o)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(t,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(t){let n=this.map.get(t);return n?(n===this.newest&&(this.newest=n.older),n===this.oldest&&(this.oldest=n.newer),n.newer&&(n.newer.older=n.older),n.older&&(n.older.newer=n.newer),this.map.delete(t),this.dispose(n.value,t),!0):!1}};function Yd(){}var oM=Yd,iM=typeof WeakRef<"u"?WeakRef:function(e){return{deref:()=>e}},sM=typeof WeakMap<"u"?WeakMap:Map,aM=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:Yd,unregister:Yd}},cM=10024,Gt=class{constructor(t=1/0,n=oM){this.max=t,this.dispose=n,this.map=new sM,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{let r=this.unfinalizedNodes.values();for(let o=0;o<cM;o++){let i=r.next().value;if(!i)break;this.unfinalizedNodes.delete(i);let s=i.key;delete i.key,i.keyRef=new iM(s),this.registry.register(s,i,i)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new aM(this.deleteNode.bind(this))}has(t){return this.map.has(t)}get(t){let n=this.getNode(t);return n&&n.value}getNode(t){let n=this.map.get(t);if(n&&n!==this.newest){let{older:r,newer:o}=n;o&&(o.older=r),r&&(r.newer=o),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=o)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.scheduleFinalization(r),this.map.set(t,r),this.size++,r.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(t){t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.size--;let n=t.key||t.keyRef&&t.keyRef.deref();this.dispose(t.value,n),t.keyRef?this.registry.unregister(t):this.unfinalizedNodes.delete(t),n&&this.map.delete(n)}delete(t){let n=this.map.get(t);return n?(this.deleteNode(n),!0):!1}scheduleFinalization(t){this.unfinalizedNodes.add(t),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}};var Zd=new WeakSet;function Pv(e){e.size<=(e.max||-1)||Zd.has(e)||(Zd.add(e),setTimeout(function(){e.clean(),Zd.delete(e)},100))}var So=function(e,t){var n=new Gt(e,t);return n.set=function(r,o){var i=Gt.prototype.set.call(this,r,o);return Pv(this),i},n},fc=function(e,t){var n=new Fn(e,t);return n.set=function(r,o){var i=Fn.prototype.set.call(this,r,o);return Pv(this),i},n};var lM=Symbol.for("apollo.cacheSize"),Re=S({},co[lM]);var hr={};function hc(e,t){hr[e]=t}var Mv=globalThis.__DEV__!==!1?dM:void 0,Rv=globalThis.__DEV__!==!1?fM:void 0,_v=globalThis.__DEV__!==!1?xv:void 0;function uM(){var e={parser:1e3,canonicalStringify:1e3,print:2e3,"documentTransform.cache":2e3,"queryManager.getDocumentInfo":2e3,"PersistedQueryLink.persistedQueryHashes":2e3,"fragmentRegistry.transform":2e3,"fragmentRegistry.lookup":1e3,"fragmentRegistry.findFragmentSpreads":4e3,"cache.fragmentQueryDocuments":1e3,"removeTypenameFromVariables.getVariableDefinitions":2e3,"inMemoryCache.maybeBroadcastWatch":5e3,"inMemoryCache.executeSelectionSet":5e4,"inMemoryCache.executeSubSelectedArray":1e4};return Object.fromEntries(Object.entries(e).map(function(t){var n=t[0],r=t[1];return[n,Re[n]||r]}))}function dM(){var e,t,n,r,o;if(globalThis.__DEV__===!1)throw new Error("only supported in development mode");return{limits:uM(),sizes:S({print:(e=hr.print)===null||e===void 0?void 0:e.call(hr),parser:(t=hr.parser)===null||t===void 0?void 0:t.call(hr),canonicalStringify:(n=hr.canonicalStringify)===null||n===void 0?void 0:n.call(hr),links:Xd(this.link),queryManager:{getDocumentInfo:this.queryManager.transformCache.size,documentTransforms:Nv(this.queryManager.documentTransform)}},(o=(r=this.cache).getMemoryInternals)===null||o===void 0?void 0:o.call(r))}}function xv(){return{cache:{fragmentQueryDocuments:Ln(this.getFragmentDoc)}}}function fM(){var e=this.config.fragments;return S(S({},xv.apply(this)),{addTypenameDocumentTransform:Nv(this.addTypenameTransform),inMemoryCache:{executeSelectionSet:Ln(this.storeReader.executeSelectionSet),executeSubSelectedArray:Ln(this.storeReader.executeSubSelectedArray),maybeBroadcastWatch:Ln(this.maybeBroadcastWatch)},fragmentRegistry:{findFragmentSpreads:Ln(e?.findFragmentSpreads),lookup:Ln(e?.lookup),transform:Ln(e?.transform)}})}function hM(e){return!!e&&"dirtyKey"in e}function Ln(e){return hM(e)?e.size:void 0}function kv(e){return e!=null}function Nv(e){return Jd(e).map(function(t){return{cache:t}})}function Jd(e){return e?be(be([Ln(e?.performWork)],Jd(e?.left),!0),Jd(e?.right),!0).filter(kv):[]}function Xd(e){var t;return e?be(be([(t=e?.getMemoryInternals)===null||t===void 0?void 0:t.call(e)],Xd(e?.left),!0),Xd(e?.right),!0).filter(kv):[]}var $e=Object.assign(function(t){return JSON.stringify(t,pM)},{reset:function(){bo=new fc(Re.canonicalStringify||1e3)}});globalThis.__DEV__!==!1&&hc("canonicalStringify",function(){return bo.size});var bo;$e.reset();function pM(e,t){if(t&&typeof t=="object"){var n=Object.getPrototypeOf(t);if(n===Object.prototype||n===null){var r=Object.keys(t);if(r.every(mM))return t;var o=JSON.stringify(r),i=bo.get(o);if(!i){r.sort();var s=JSON.stringify(r);i=bo.get(s)||r,bo.set(o,i),bo.set(s,i)}var c=Object.create(n);return i.forEach(function(l){c[l]=t[l]}),c}}return t}function mM(e,t,n){return t===0||n[t-1]<=e}function St(e){return{__ref:String(e)}}function G(e){return!!(e&&typeof e=="object"&&typeof e.__ref=="string")}function ef(e){return Z(e)&&e.kind==="Document"&&Array.isArray(e.definitions)}function gM(e){return e.kind==="StringValue"}function yM(e){return e.kind==="BooleanValue"}function vM(e){return e.kind==="IntValue"}function SM(e){return e.kind==="FloatValue"}function bM(e){return e.kind==="Variable"}function DM(e){return e.kind==="ObjectValue"}function wM(e){return e.kind==="ListValue"}function TM(e){return e.kind==="EnumValue"}function EM(e){return e.kind==="NullValue"}function Hn(e,t,n,r){if(vM(n)||SM(n))e[t.value]=Number(n.value);else if(yM(n)||gM(n))e[t.value]=n.value;else if(DM(n)){var o={};n.fields.map(function(s){return Hn(o,s.name,s.value,r)}),e[t.value]=o}else if(bM(n)){var i=(r||{})[n.name.value];e[t.value]=i}else if(wM(n))e[t.value]=n.values.map(function(s){var c={};return Hn(c,t,s,r),c[t.value]});else if(TM(n))e[t.value]=n.value;else if(EM(n))e[t.value]=null;else throw ue(96,t.value,n.kind)}function tf(e,t){var n=null;e.directives&&(n={},e.directives.forEach(function(o){n[o.name.value]={},o.arguments&&o.arguments.forEach(function(i){var s=i.name,c=i.value;return Hn(n[o.name.value],s,c,t)})}));var r=null;return e.arguments&&e.arguments.length&&(r={},e.arguments.forEach(function(o){var i=o.name,s=o.value;return Hn(r,i,s,t)})),pc(e.name.value,r,n)}var CM=["connection","include","skip","client","rest","export","nonreactive"],Li=$e,pc=Object.assign(function(e,t,n){if(t&&n&&n.connection&&n.connection.key)if(n.connection.filter&&n.connection.filter.length>0){var r=n.connection.filter?n.connection.filter:[];r.sort();var o={};return r.forEach(function(c){o[c]=t[c]}),"".concat(n.connection.key,"(").concat(Li(o),")")}else return n.connection.key;var i=e;if(t){var s=Li(t);i+="(".concat(s,")")}return n&&Object.keys(n).forEach(function(c){CM.indexOf(c)===-1&&(n[c]&&Object.keys(n[c]).length?i+="@".concat(c,"(").concat(Li(n[c]),")"):i+="@".concat(c))}),i},{setStringify:function(e){var t=Li;return Li=e,t}});function dn(e,t){if(e.arguments&&e.arguments.length){var n={};return e.arguments.forEach(function(r){var o=r.name,i=r.value;return Hn(n,o,i,t)}),n}return null}function je(e){return e.alias?e.alias.value:e.name.value}function Hi(e,t,n){for(var r,o=0,i=t.selections;o<i.length;o++){var s=i[o];if(ze(s)){if(s.name.value==="__typename")return e[je(s)]}else r?r.push(s):r=[s]}if(typeof e.__typename=="string")return e.__typename;if(r)for(var c=0,l=r;c<l.length;c++){var s=l[c],u=Hi(e,un(s,n).selectionSet,n);if(typeof u=="string")return u}}function ze(e){return e.kind==="Field"}function nf(e){return e.kind==="InlineFragment"}function fn(e){I(e&&e.kind==="Document",88);var t=e.definitions.filter(function(n){return n.kind!=="FragmentDefinition"}).map(function(n){if(n.kind!=="OperationDefinition")throw ue(89,n.kind);return n});return I(t.length<=1,90,t.length),e}function ut(e){return fn(e),e.definitions.filter(function(t){return t.kind==="OperationDefinition"})[0]}function Un(e){return e.definitions.filter(function(t){return t.kind==="OperationDefinition"&&!!t.name}).map(function(t){return t.name.value})[0]||null}function dt(e){return e.definitions.filter(function(t){return t.kind==="FragmentDefinition"})}function Ui(e){var t=ut(e);return I(t&&t.operation==="query",91),t}function ji(e){I(e.kind==="Document",92),I(e.definitions.length<=1,93);var t=e.definitions[0];return I(t.kind==="FragmentDefinition",94),t}function kt(e){fn(e);for(var t,n=0,r=e.definitions;n<r.length;n++){var o=r[n];if(o.kind==="OperationDefinition"){var i=o.operation;if(i==="query"||i==="mutation"||i==="subscription")return o}o.kind==="FragmentDefinition"&&!t&&(t=o)}if(t)return t;throw ue(95)}function pr(e){var t=Object.create(null),n=e&&e.variableDefinitions;return n&&n.length&&n.forEach(function(r){r.defaultValue&&Hn(t,r.variable.name,r.defaultValue)}),t}var Fe=null,Ov={},IM=1,PM=()=>class{constructor(){this.id=["slot",IM++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let t=Fe;t;t=t.parent)if(this.id in t.slots){let n=t.slots[this.id];if(n===Ov)break;return t!==Fe&&(Fe.slots[this.id]=n),!0}return Fe&&(Fe.slots[this.id]=Ov),!1}getValue(){if(this.hasValue())return Fe.slots[this.id]}withValue(t,n,r,o){let i={__proto__:null,[this.id]:t},s=Fe;Fe={parent:s,slots:i};try{return n.apply(o,r)}finally{Fe=s}}static bind(t){let n=Fe;return function(){let r=Fe;try{return Fe=n,t.apply(this,arguments)}finally{Fe=r}}}static noContext(t,n,r){if(Fe){let o=Fe;try{return Fe=null,t.apply(r,n)}finally{Fe=o}}else return t.apply(r,n)}};function Av(e){try{return e()}catch{}}var rf="@wry/context:Slot",MM=Av(()=>globalThis)||Av(()=>global)||Object.create(null),Fv=MM,hn=Fv[rf]||Array[rf]||function(e){try{Object.defineProperty(Fv,rf,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}(PM());var{bind:Lv,noContext:Hv}=hn;var mr=new hn;var{hasOwnProperty:Uv}=Object.prototype,Bi=Array.from||function(e){let t=[];return e.forEach(n=>t.push(n)),t};function Do(e){let{unsubscribe:t}=e;typeof t=="function"&&(e.unsubscribe=void 0,t())}var Vi=[],xM=100;function wo(e,t){if(!e)throw new Error(t||"assertion failure")}function Bv(e,t){let n=e.length;return n>0&&n===t.length&&e[n-1]===t[n-1]}function Vv(e){switch(e.length){case 0:throw new Error("unknown value");case 1:return e[0];case 2:throw e[1]}}function $v(e){return e.slice(0)}var zv=(()=>{class e{constructor(n){this.fn=n,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++e.count}peek(){if(this.value.length===1&&!jn(this))return jv(this),this.value[0]}recompute(n){return wo(!this.recomputing,"already recomputing"),jv(this),jn(this)?kM(this,n):Vv(this.value)}setDirty(){this.dirty||(this.dirty=!0,qv(this),Do(this))}dispose(){this.setDirty(),Yv(this),of(this,(n,r)=>{n.setDirty(),Zv(n,this)})}forget(){this.dispose()}dependOn(n){n.add(this),this.deps||(this.deps=Vi.pop()||new Set),this.deps.add(n)}forgetDeps(){this.deps&&(Bi(this.deps).forEach(n=>n.delete(this)),this.deps.clear(),Vi.push(this.deps),this.deps=null)}}return e.count=0,e})();function jv(e){let t=mr.getValue();if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),jn(e)?Gv(t,e):Qv(t,e),t}function kM(e,t){return Yv(e),mr.withValue(e,NM,[e,t]),AM(e,t)&&OM(e),Vv(e.value)}function NM(e,t){e.recomputing=!0;let{normalizeResult:n}=e,r;n&&e.value.length===1&&(r=$v(e.value)),e.value.length=0;try{if(e.value[0]=e.fn.apply(null,t),n&&r&&!Bv(r,e.value))try{e.value[0]=n(e.value[0],r[0])}catch{}}catch(o){e.value[1]=o}e.recomputing=!1}function jn(e){return e.dirty||!!(e.dirtyChildren&&e.dirtyChildren.size)}function OM(e){e.dirty=!1,!jn(e)&&Wv(e)}function qv(e){of(e,Gv)}function Wv(e){of(e,Qv)}function of(e,t){let n=e.parents.size;if(n){let r=Bi(e.parents);for(let o=0;o<n;++o)t(r[o],e)}}function Gv(e,t){wo(e.childValues.has(t)),wo(jn(t));let n=!jn(e);if(!e.dirtyChildren)e.dirtyChildren=Vi.pop()||new Set;else if(e.dirtyChildren.has(t))return;e.dirtyChildren.add(t),n&&qv(e)}function Qv(e,t){wo(e.childValues.has(t)),wo(!jn(t));let n=e.childValues.get(t);n.length===0?e.childValues.set(t,$v(t.value)):Bv(n,t.value)||e.setDirty(),Kv(e,t),!jn(e)&&Wv(e)}function Kv(e,t){let n=e.dirtyChildren;n&&(n.delete(t),n.size===0&&(Vi.length<xM&&Vi.push(n),e.dirtyChildren=null))}function Yv(e){e.childValues.size>0&&e.childValues.forEach((t,n)=>{Zv(e,n)}),e.forgetDeps(),wo(e.dirtyChildren===null)}function Zv(e,t){t.parents.delete(e),e.childValues.delete(t),Kv(e,t)}function AM(e,t){if(typeof e.subscribe=="function")try{Do(e),e.unsubscribe=e.subscribe.apply(null,t)}catch{return e.setDirty(),!1}return!0}var FM={setDirty:!0,dispose:!0,forget:!0};function $i(e){let t=new Map,n=e&&e.subscribe;function r(o){let i=mr.getValue();if(i){let s=t.get(o);s||t.set(o,s=new Set),i.dependOn(s),typeof n=="function"&&(Do(s),s.unsubscribe=n(o))}}return r.dirty=function(i,s){let c=t.get(i);if(c){let l=s&&Uv.call(FM,s)?s:"setDirty";Bi(c).forEach(u=>u[l]()),t.delete(i),Do(c)}},r}var Jv;function LM(...e){return(Jv||(Jv=new Ve(typeof WeakMap=="function"))).lookupArray(e)}var sf=new Set;function pn(e,{max:t=Math.pow(2,16),keyArgs:n,makeCacheKey:r=LM,normalizeResult:o,subscribe:i,cache:s=Fn}=Object.create(null)){let c=typeof s=="function"?new s(t,h=>h.dispose()):s,l=function(){let h=r.apply(null,n?n.apply(null,arguments):arguments);if(h===void 0)return e.apply(null,arguments);let p=c.get(h);p||(c.set(h,p=new zv(e)),p.normalizeResult=o,p.subscribe=i,p.forget=()=>c.delete(h));let g=p.recompute(Array.prototype.slice.call(arguments));return c.set(h,p),sf.add(c),mr.hasValue()||(sf.forEach(v=>v.clean()),sf.clear()),g};Object.defineProperty(l,"size",{get:()=>c.size,configurable:!1,enumerable:!1}),Object.freeze(l.options={max:t,keyArgs:n,makeCacheKey:r,normalizeResult:o,subscribe:i,cache:c});function u(h){let p=h&&c.get(h);p&&p.setDirty()}l.dirtyKey=u,l.dirty=function(){u(r.apply(null,arguments))};function d(h){let p=h&&c.get(h);if(p)return p.peek()}l.peekKey=d,l.peek=function(){return d(r.apply(null,arguments))};function f(h){return h?c.delete(h):!1}return l.forgetKey=f,l.forget=function(){return f(r.apply(null,arguments))},l.makeCacheKey=r,l.getKey=n?function(){return r.apply(null,n.apply(null,arguments))}:r,Object.freeze(l)}function HM(e){return e}var To=function(){function e(t,n){n===void 0&&(n=Object.create(null)),this.resultCache=vo?new WeakSet:new Set,this.transform=t,n.getCacheKey&&(this.getCacheKey=n.getCacheKey),this.cached=n.cache!==!1,this.resetCache()}return e.prototype.getCacheKey=function(t){return[t]},e.identity=function(){return new e(HM,{cache:!1})},e.split=function(t,n,r){return r===void 0&&(r=e.identity()),Object.assign(new e(function(o){var i=t(o)?n:r;return i.transformDocument(o)},{cache:!1}),{left:n,right:r})},e.prototype.resetCache=function(){var t=this;if(this.cached){var n=new Ve(ct);this.performWork=pn(e.prototype.performWork.bind(this),{makeCacheKey:function(r){var o=t.getCacheKey(r);if(o)return I(Array.isArray(o),77),n.lookupArray(o)},max:Re["documentTransform.cache"],cache:Gt})}},e.prototype.performWork=function(t){return fn(t),this.transform(t)},e.prototype.transformDocument=function(t){if(this.resultCache.has(t))return t;var n=this.performWork(t);return this.resultCache.add(n),n},e.prototype.concat=function(t){var n=this;return Object.assign(new e(function(r){return t.transformDocument(n.transformDocument(r))},{cache:!1}),{left:this,right:t})},e}();var zi,Nt=Object.assign(function(e){var t=zi.get(e);return t||(t=yo(e),zi.set(e,t)),t},{reset:function(){zi=new So(Re.print||2e3)}});Nt.reset();globalThis.__DEV__!==!1&&hc("print",function(){return zi?zi.size:0});var ie=Array.isArray;function Le(e){return Array.isArray(e)&&e.length>0}var Xv={kind:M.FIELD,name:{kind:M.NAME,value:"__typename"}};function tS(e,t){return!e||e.selectionSet.selections.every(function(n){return n.kind===M.FRAGMENT_SPREAD&&tS(t[n.name.value],t)})}function UM(e){return tS(ut(e)||ji(e),lt(dt(e)))?null:e}function jM(e){var t=new Map,n=new Map;return e.forEach(function(r){r&&(r.name?t.set(r.name,r):r.test&&n.set(r.test,r))}),function(r){var o=t.get(r.name.value);return!o&&n.size&&n.forEach(function(i,s){s(r)&&(o=i)}),o}}function eS(e){var t=new Map;return function(r){r===void 0&&(r=e);var o=t.get(r);return o||t.set(r,o={variables:new Set,fragmentSpreads:new Set}),o}}function mc(e,t){fn(t);for(var n=eS(""),r=eS(""),o=function(y){for(var w=0,D=void 0;w<y.length&&(D=y[w]);++w)if(!ie(D)){if(D.kind===M.OPERATION_DEFINITION)return n(D.name&&D.name.value);if(D.kind===M.FRAGMENT_DEFINITION)return r(D.name.value)}return globalThis.__DEV__!==!1&&I.error(97),null},i=0,s=t.definitions.length-1;s>=0;--s)t.definitions[s].kind===M.OPERATION_DEFINITION&&++i;var c=jM(e),l=function(y){return Le(y)&&y.map(c).some(function(w){return w&&w.remove})},u=new Map,d=!1,f={enter:function(y){if(l(y.directives))return d=!0,null}},h=Me(t,{Field:f,InlineFragment:f,VariableDefinition:{enter:function(){return!1}},Variable:{enter:function(y,w,D,C,E){var _=o(E);_&&_.variables.add(y.name.value)}},FragmentSpread:{enter:function(y,w,D,C,E){if(l(y.directives))return d=!0,null;var _=o(E);_&&_.fragmentSpreads.add(y.name.value)}},FragmentDefinition:{enter:function(y,w,D,C){u.set(JSON.stringify(C),y)},leave:function(y,w,D,C){var E=u.get(JSON.stringify(C));if(y===E)return y;if(i>0&&y.selectionSet.selections.every(function(_){return _.kind===M.FIELD&&_.name.value==="__typename"}))return r(y.name.value).removed=!0,d=!0,null}},Directive:{leave:function(y){if(c(y))return d=!0,null}}});if(!d)return t;var p=function(y){return y.transitiveVars||(y.transitiveVars=new Set(y.variables),y.removed||y.fragmentSpreads.forEach(function(w){p(r(w)).transitiveVars.forEach(function(D){y.transitiveVars.add(D)})})),y},g=new Set;h.definitions.forEach(function(y){y.kind===M.OPERATION_DEFINITION?p(n(y.name&&y.name.value)).fragmentSpreads.forEach(function(w){g.add(w)}):y.kind===M.FRAGMENT_DEFINITION&&i===0&&!r(y.name.value).removed&&g.add(y.name.value)}),g.forEach(function(y){p(r(y)).fragmentSpreads.forEach(function(w){g.add(w)})});var v=function(y){return!!(!g.has(y)||r(y).removed)},b={enter:function(y){if(v(y.name.value))return null}};return UM(Me(h,{FragmentSpread:b,FragmentDefinition:b,OperationDefinition:{leave:function(y){if(y.variableDefinitions){var w=p(n(y.name&&y.name.value)).transitiveVars;if(w.size<y.variableDefinitions.length)return S(S({},y),{variableDefinitions:y.variableDefinitions.filter(function(D){return w.has(D.variable.name.value)})})}}}}))}var gr=Object.assign(function(e){return Me(e,{SelectionSet:{enter:function(t,n,r){if(!(r&&r.kind===M.OPERATION_DEFINITION)){var o=t.selections;if(o){var i=o.some(function(c){return ze(c)&&(c.name.value==="__typename"||c.name.value.lastIndexOf("__",0)===0)});if(!i){var s=r;if(!(ze(s)&&s.directives&&s.directives.some(function(c){return c.name.value==="export"})))return S(S({},t),{selections:be(be([],o,!0),[Xv],!1)})}}}}}})},{added:function(e){return e===Xv}});function af(e){var t=kt(e),n=t.operation;if(n==="query")return e;var r=Me(e,{OperationDefinition:{enter:function(o){return S(S({},o),{operation:"query"})}}});return r}function qi(e){fn(e);var t=mc([{test:function(n){return n.name.value==="client"},remove:!0}],e);return t}function cf(e){return fn(e),Me(e,{FragmentSpread:function(t){var n;if(!(!((n=t.directives)===null||n===void 0)&&n.some(function(r){return r.name.value==="unmask"})))return S(S({},t),{directives:be(be([],t.directives||[],!0),[{kind:M.DIRECTIVE,name:{kind:M.NAME,value:"nonreactive"}}],!1)})}})}var BM=Object.prototype.hasOwnProperty;function lf(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return yr(e)}function yr(e){var t=e[0]||{},n=e.length;if(n>1)for(var r=new Ze,o=1;o<n;++o)t=r.merge(t,e[o]);return t}var VM=function(e,t,n){return this.merge(e[n],t[n])},Ze=function(){function e(t){t===void 0&&(t=VM),this.reconciler=t,this.isObject=Z,this.pastCopies=new Set}return e.prototype.merge=function(t,n){for(var r=this,o=[],i=2;i<arguments.length;i++)o[i-2]=arguments[i];return Z(n)&&Z(t)?(Object.keys(n).forEach(function(s){if(BM.call(t,s)){var c=t[s];if(n[s]!==c){var l=r.reconciler.apply(r,be([t,n,s],o,!1));l!==c&&(t=r.shallowCopyForMerge(t),t[s]=l)}}else t=r.shallowCopyForMerge(t),t[s]=n[s]}),t):n},e.prototype.shallowCopyForMerge=function(t){return Z(t)&&(this.pastCopies.has(t)||(Array.isArray(t)?t=t.slice(0):t=S({__proto__:Object.getPrototypeOf(t)},t),this.pastCopies.add(t))),t},e}();function $M(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=zM(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zM(e,t){if(e){if(typeof e=="string")return nS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nS(e,t)}}function nS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function rS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hf(e,t,n){return t&&rS(e.prototype,t),n&&rS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var pf=function(){return typeof Symbol=="function"},mf=function(e){return pf()&&!!Symbol[e]},gf=function(e){return mf(e)?Symbol[e]:"@@"+e};pf()&&!mf("observable")&&(Symbol.observable=Symbol("observable"));var qM=gf("iterator"),df=gf("observable"),oS=gf("species");function yc(e,t){var n=e[t];if(n!=null){if(typeof n!="function")throw new TypeError(n+" is not a function");return n}}function Wi(e){var t=e.constructor;return t!==void 0&&(t=t[oS],t===null&&(t=void 0)),t!==void 0?t:$}function WM(e){return e instanceof $}function Eo(e){Eo.log?Eo.log(e):setTimeout(function(){throw e})}function gc(e){Promise.resolve().then(function(){try{e()}catch(t){Eo(t)}})}function iS(e){var t=e._cleanup;if(t!==void 0&&(e._cleanup=void 0,!!t))try{if(typeof t=="function")t();else{var n=yc(t,"unsubscribe");n&&n.call(t)}}catch(r){Eo(r)}}function ff(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function GM(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var n=0;n<t.length&&(sS(e,t[n].type,t[n].value),e._state!=="closed");++n);}}function sS(e,t,n){e._state="running";var r=e._observer;try{var o=yc(r,t);switch(t){case"next":o&&o.call(r,n);break;case"error":if(ff(e),o)o.call(r,n);else throw n;break;case"complete":ff(e),o&&o.call(r);break}}catch(i){Eo(i)}e._state==="closed"?iS(e):e._state==="running"&&(e._state="ready")}function uf(e,t,n){if(e._state!=="closed"){if(e._state==="buffering"){e._queue.push({type:t,value:n});return}if(e._state!=="ready"){e._state="buffering",e._queue=[{type:t,value:n}],gc(function(){return GM(e)});return}sS(e,t,n)}}var QM=function(){function e(n,r){this._cleanup=void 0,this._observer=n,this._queue=void 0,this._state="initializing";var o=new KM(this);try{this._cleanup=r.call(void 0,o)}catch(i){o.error(i)}this._state==="initializing"&&(this._state="ready")}var t=e.prototype;return t.unsubscribe=function(){this._state!=="closed"&&(ff(this),iS(this))},hf(e,[{key:"closed",get:function(){return this._state==="closed"}}]),e}(),KM=function(){function e(n){this._subscription=n}var t=e.prototype;return t.next=function(r){uf(this._subscription,"next",r)},t.error=function(r){uf(this._subscription,"error",r)},t.complete=function(){uf(this._subscription,"complete")},hf(e,[{key:"closed",get:function(){return this._subscription._state==="closed"}}]),e}(),$=function(){function e(n){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if(typeof n!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=n}var t=e.prototype;return t.subscribe=function(r){return(typeof r!="object"||r===null)&&(r={next:r,error:arguments[1],complete:arguments[2]}),new QM(r,this._subscriber)},t.forEach=function(r){var o=this;return new Promise(function(i,s){if(typeof r!="function"){s(new TypeError(r+" is not a function"));return}function c(){l.unsubscribe(),i()}var l=o.subscribe({next:function(u){try{r(u,c)}catch(d){s(d),l.unsubscribe()}},error:s,complete:i})})},t.map=function(r){var o=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var i=Wi(this);return new i(function(s){return o.subscribe({next:function(c){try{c=r(c)}catch(l){return s.error(l)}s.next(c)},error:function(c){s.error(c)},complete:function(){s.complete()}})})},t.filter=function(r){var o=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var i=Wi(this);return new i(function(s){return o.subscribe({next:function(c){try{if(!r(c))return}catch(l){return s.error(l)}s.next(c)},error:function(c){s.error(c)},complete:function(){s.complete()}})})},t.reduce=function(r){var o=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var i=Wi(this),s=arguments.length>1,c=!1,l=arguments[1],u=l;return new i(function(d){return o.subscribe({next:function(f){var h=!c;if(c=!0,!h||s)try{u=r(u,f)}catch(p){return d.error(p)}else u=f},error:function(f){d.error(f)},complete:function(){if(!c&&!s)return d.error(new TypeError("Cannot reduce an empty sequence"));d.next(u),d.complete()}})})},t.concat=function(){for(var r=this,o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];var c=Wi(this);return new c(function(l){var u,d=0;function f(h){u=h.subscribe({next:function(p){l.next(p)},error:function(p){l.error(p)},complete:function(){d===i.length?(u=void 0,l.complete()):f(c.from(i[d++]))}})}return f(r),function(){u&&(u.unsubscribe(),u=void 0)}})},t.flatMap=function(r){var o=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var i=Wi(this);return new i(function(s){var c=[],l=o.subscribe({next:function(d){if(r)try{d=r(d)}catch(h){return s.error(h)}var f=i.from(d).subscribe({next:function(h){s.next(h)},error:function(h){s.error(h)},complete:function(){var h=c.indexOf(f);h>=0&&c.splice(h,1),u()}});c.push(f)},error:function(d){s.error(d)},complete:function(){u()}});function u(){l.closed&&c.length===0&&s.complete()}return function(){c.forEach(function(d){return d.unsubscribe()}),l.unsubscribe()}})},t[df]=function(){return this},e.from=function(r){var o=typeof this=="function"?this:e;if(r==null)throw new TypeError(r+" is not an object");var i=yc(r,df);if(i){var s=i.call(r);if(Object(s)!==s)throw new TypeError(s+" is not an object");return WM(s)&&s.constructor===o?s:new o(function(c){return s.subscribe(c)})}if(mf("iterator")&&(i=yc(r,qM),i))return new o(function(c){gc(function(){if(!c.closed){for(var l=$M(i.call(r)),u;!(u=l()).done;){var d=u.value;if(c.next(d),c.closed)return}c.complete()}})});if(Array.isArray(r))return new o(function(c){gc(function(){if(!c.closed){for(var l=0;l<r.length;++l)if(c.next(r[l]),c.closed)return;c.complete()}})});throw new TypeError(r+" is not observable")},e.of=function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var s=typeof this=="function"?this:e;return new s(function(c){gc(function(){if(!c.closed){for(var l=0;l<o.length;++l)if(c.next(o[l]),c.closed)return;c.complete()}})})},hf(e,null,[{key:oS,get:function(){return this}}]),e}();pf()&&Object.defineProperty($,Symbol("extensions"),{value:{symbol:df,hostReportError:Eo},configurable:!0});function yf(e){var t,n=e.Symbol;if(typeof n=="function")if(n.observable)t=n.observable;else{typeof n.for=="function"?t=n.for("https://github.com/benlesh/symbol-observable"):t=n("https://github.com/benlesh/symbol-observable");try{n.observable=t}catch{}}else t="@@observable";return t}var Co;typeof self<"u"?Co=self:typeof window<"u"?Co=window:typeof global<"u"?Co=global:typeof module<"u"?Co=module:Co=Function("return this")();var lj=yf(Co);var aS=$.prototype,cS="@@observable";aS[cS]||(aS[cS]=function(){return this});function vf(e){return e.catch(function(){}),e}var YM=Object.prototype.toString;function vc(e){return Sf(e)}function Sf(e,t){switch(YM.call(e)){case"[object Array]":{if(t=t||new Map,t.has(e))return t.get(e);var n=e.slice(0);return t.set(e,n),n.forEach(function(o,i){n[i]=Sf(o,t)}),n}case"[object Object]":{if(t=t||new Map,t.has(e))return t.get(e);var r=Object.create(Object.getPrototypeOf(e));return t.set(e,r),Object.keys(e).forEach(function(o){r[o]=Sf(e[o],t)}),r}default:return e}}function ZM(e){var t=new Set([e]);return t.forEach(function(n){Z(n)&&JM(n)===n&&Object.getOwnPropertyNames(n).forEach(function(r){Z(n[r])&&t.add(n[r])})}),e}function JM(e){if(globalThis.__DEV__!==!1&&!Object.isFrozen(e))try{Object.freeze(e)}catch(t){if(t instanceof TypeError)return null;throw t}return e}function Bn(e){return globalThis.__DEV__!==!1&&ZM(e),e}function vr(e,t,n){var r=[];e.forEach(function(o){return o[t]&&r.push(o)}),r.forEach(function(o){return o[t](n)})}function Sc(e,t,n){return new $(function(r){var o={then:function(l){return new Promise(function(u){return u(l())})}};function i(l,u){return function(d){if(l){var f=function(){return r.closed?0:l(d)};o=o.then(f,f).then(function(h){return r.next(h)},function(h){return r.error(h)})}else r[u](d)}}var s={next:i(t,"next"),error:i(n,"error"),complete:function(){o.then(function(){return r.complete()})}},c=e.subscribe(s);return function(){return c.unsubscribe()}})}function bc(e){function t(n){Object.defineProperty(e,n,{value:$})}return Gd&&Symbol.species&&t(Symbol.species),t("@@species"),e}function lS(e){return e&&typeof e.then=="function"}var Sr=function(e){xe(t,e);function t(n){var r=e.call(this,function(o){return r.addObserver(o),function(){return r.removeObserver(o)}})||this;return r.observers=new Set,r.promise=new Promise(function(o,i){r.resolve=o,r.reject=i}),r.handlers={next:function(o){r.sub!==null&&(r.latest=["next",o],r.notify("next",o),vr(r.observers,"next",o))},error:function(o){var i=r.sub;i!==null&&(i&&setTimeout(function(){return i.unsubscribe()}),r.sub=null,r.latest=["error",o],r.reject(o),r.notify("error",o),vr(r.observers,"error",o))},complete:function(){var o=r,i=o.sub,s=o.sources,c=s===void 0?[]:s;if(i!==null){var l=c.shift();l?lS(l)?l.then(function(u){return r.sub=u.subscribe(r.handlers)},r.handlers.error):r.sub=l.subscribe(r.handlers):(i&&setTimeout(function(){return i.unsubscribe()}),r.sub=null,r.latest&&r.latest[0]==="next"?r.resolve(r.latest[1]):r.resolve(),r.notify("complete"),vr(r.observers,"complete"))}}},r.nextResultListeners=new Set,r.cancel=function(o){r.reject(o),r.sources=[],r.handlers.error(o)},r.promise.catch(function(o){}),typeof n=="function"&&(n=[new $(n)]),lS(n)?n.then(function(o){return r.start(o)},r.handlers.error):r.start(n),r}return t.prototype.start=function(n){this.sub===void 0&&(this.sources=Array.from(n),this.handlers.complete())},t.prototype.deliverLastMessage=function(n){if(this.latest){var r=this.latest[0],o=n[r];o&&o.call(n,this.latest[1]),this.sub===null&&r==="next"&&n.complete&&n.complete()}},t.prototype.addObserver=function(n){this.observers.has(n)||(this.deliverLastMessage(n),this.observers.add(n))},t.prototype.removeObserver=function(n){this.observers.delete(n)&&this.observers.size<1&&this.handlers.complete()},t.prototype.notify=function(n,r){var o=this.nextResultListeners;o.size&&(this.nextResultListeners=new Set,o.forEach(function(i){return i(n,r)}))},t.prototype.beforeNext=function(n){var r=!1;this.nextResultListeners.add(function(o,i){r||(r=!0,n(o,i))})},t}($);bc(Sr);function Vn(e){return"incremental"in e}function XM(e){return"hasNext"in e&&"data"in e}function uS(e){return Vn(e)||XM(e)}function dS(e){return Z(e)&&"payload"in e}function Dc(e,t){var n=e,r=new Ze;return Vn(t)&&Le(t.incremental)&&t.incremental.forEach(function(o){for(var i=o.data,s=o.path,c=s.length-1;c>=0;--c){var l=s[c],u=!isNaN(+l),d=u?[]:{};d[l]=i,i=d}n=r.merge(n,i)}),n}function Io(e){var t=wc(e);return Le(t)}function wc(e){var t=Le(e.errors)?e.errors.slice(0):[];return Vn(e)&&Le(e.incremental)&&e.incremental.forEach(function(n){n.errors&&t.push.apply(t,n.errors)}),t}function Qt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Object.create(null);return e.forEach(function(r){r&&Object.keys(r).forEach(function(o){var i=r[o];i!==void 0&&(n[o]=i)})}),n}function Gi(e,t){return Qt(e,t,t.variables&&{variables:Qt(S(S({},e&&e.variables),t.variables))})}function Qi(e){return new $(function(t){t.error(e)})}var Tc=function(e,t,n){var r=new Error(n);throw r.name="ServerError",r.response=e,r.statusCode=e.status,r.result=t,r};function bf(e){for(var t=["query","operationName","variables","extensions","context"],n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];if(t.indexOf(o)<0)throw ue(46,o)}return e}function Df(e,t){var n=S({},e),r=function(i){typeof i=="function"?n=S(S({},n),i(n)):n=S(S({},n),i)},o=function(){return S({},n)};return Object.defineProperty(t,"setContext",{enumerable:!1,value:r}),Object.defineProperty(t,"getContext",{enumerable:!1,value:o}),t}function wf(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName=typeof t.query!="string"?Un(t.query)||void 0:""),t}function Tf(e,t){var n=S({},e),r=new Set(Object.keys(e));return Me(t,{Variable:function(o,i,s){s&&s.kind!=="VariableDefinition"&&r.delete(o.name.value)}}),r.forEach(function(o){delete n[o]}),n}function fS(e,t){return t?t(e):$.of()}function Ki(e){return typeof e=="function"?new bt(e):e}function Ec(e){return e.request.length<=1}var bt=function(){function e(t){t&&(this.request=t)}return e.empty=function(){return new e(function(){return $.of()})},e.from=function(t){return t.length===0?e.empty():t.map(Ki).reduce(function(n,r){return n.concat(r)})},e.split=function(t,n,r){var o=Ki(n),i=Ki(r||new e(fS)),s;return Ec(o)&&Ec(i)?s=new e(function(c){return t(c)?o.request(c)||$.of():i.request(c)||$.of()}):s=new e(function(c,l){return t(c)?o.request(c,l)||$.of():i.request(c,l)||$.of()}),Object.assign(s,{left:o,right:i})},e.execute=function(t,n){return t.request(Df(n.context,wf(bf(n))))||$.of()},e.concat=function(t,n){var r=Ki(t);if(Ec(r))return globalThis.__DEV__!==!1&&I.warn(38,r),r;var o=Ki(n),i;return Ec(o)?i=new e(function(s){return r.request(s,function(c){return o.request(c)||$.of()})||$.of()}):i=new e(function(s,c){return r.request(s,function(l){return o.request(l,c)||$.of()})||$.of()}),Object.assign(i,{left:r,right:o})},e.prototype.split=function(t,n,r){return this.concat(e.split(t,n,r||new e(fS)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(t,n){throw ue(39)},e.prototype.onError=function(t,n){if(n&&n.error)return n.error(t),!1;throw t},e.prototype.setOnError=function(t){return this.onError=t,this},e}();var Po=bt.execute;function Ef(e){var t,n=e[Symbol.asyncIterator]();return t={next:function(){return n.next()}},t[Symbol.asyncIterator]=function(){return this},t}function Cf(e){var t=null,n=null,r=!1,o=[],i=[];function s(f){if(!n){if(i.length){var h=i.shift();if(Array.isArray(h)&&h[0])return h[0]({value:f,done:!1})}o.push(f)}}function c(f){n=f;var h=i.slice();h.forEach(function(p){p[1](f)}),!t||t()}function l(){r=!0;var f=i.slice();f.forEach(function(h){h[0]({value:void 0,done:!0})}),!t||t()}t=function(){t=null,e.removeListener("data",s),e.removeListener("error",c),e.removeListener("end",l),e.removeListener("finish",l),e.removeListener("close",l)},e.on("data",s),e.on("error",c),e.on("end",l),e.on("finish",l),e.on("close",l);function u(){return new Promise(function(f,h){if(n)return h(n);if(o.length)return f({value:o.shift(),done:!1});if(r)return f({value:void 0,done:!0});i.push([f,h])})}var d={next:function(){return u()}};return An&&(d[Symbol.asyncIterator]=function(){return this}),d}function If(e){var t=!1,n={next:function(){return t?Promise.resolve({value:void 0,done:!0}):(t=!0,new Promise(function(r,o){e.then(function(i){r({value:i,done:!1})}).catch(o)}))}};return An&&(n[Symbol.asyncIterator]=function(){return this}),n}function Cc(e){var t={next:function(){return e.read()}};return An&&(t[Symbol.asyncIterator]=function(){return this}),t}function eR(e){return!!e.body}function tR(e){return!!e.getReader}function nR(e){return!!(An&&e[Symbol.asyncIterator])}function rR(e){return!!e.stream}function oR(e){return!!e.arrayBuffer}function iR(e){return!!e.pipe}function hS(e){var t=e;if(eR(e)&&(t=e.body),nR(t))return Ef(t);if(tR(t))return Cc(t.getReader());if(rR(t))return Cc(t.stream().getReader());if(oR(t))return If(t.arrayBuffer());if(iR(t))return Cf(t);throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")}var Yi=Symbol();function pS(e){return e.extensions?Array.isArray(e.extensions[Yi]):!1}function Ic(e){return e.hasOwnProperty("graphQLErrors")}var sR=function(e){var t=be(be(be([],e.graphQLErrors,!0),e.clientErrors,!0),e.protocolErrors,!0);return e.networkError&&t.push(e.networkError),t.map(function(n){return Z(n)&&n.message||"Error message not found."}).join(`
`)},mn=function(e){xe(t,e);function t(n){var r=n.graphQLErrors,o=n.protocolErrors,i=n.clientErrors,s=n.networkError,c=n.errorMessage,l=n.extraInfo,u=e.call(this,c)||this;return u.name="ApolloError",u.graphQLErrors=r||[],u.protocolErrors=o||[],u.clientErrors=i||[],u.networkError=s||null,u.message=c||sR(u),u.extraInfo=l,u.cause=be(be(be([s],r||[],!0),o||[],!0),i||[],!0).find(function(d){return!!d})||null,u.__proto__=t.prototype,u}return t}(Error);var mS=Object.prototype.hasOwnProperty;function gS(e,t){return Xe(this,void 0,void 0,function(){var n,r,o,i,s,c,l,u,d,f,h,p,g,v,b,y,w,D,C,E,_,L,B,se;return Tt(this,function(ge){switch(ge.label){case 0:if(TextDecoder===void 0)throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");n=new TextDecoder("utf-8"),r=(se=e.headers)===null||se===void 0?void 0:se.get("content-type"),o="boundary=",i=r?.includes(o)?r?.substring(r?.indexOf(o)+o.length).replace(/['"]/g,"").replace(/\;(.*)/gm,"").trim():"-",s=`\r
--`.concat(i),c="",l=hS(e),u=!0,ge.label=1;case 1:return u?[4,l.next()]:[3,3];case 2:for(d=ge.sent(),f=d.value,h=d.done,p=typeof f=="string"?f:n.decode(f),g=c.length-s.length+1,u=!h,c+=p,v=c.indexOf(s,g);v>-1;){if(b=void 0,L=[c.slice(0,v),c.slice(v+s.length)],b=L[0],c=L[1],y=b.indexOf(`\r
\r
`),w=aR(b.slice(0,y)),D=w["content-type"],D&&D.toLowerCase().indexOf("application/json")===-1)throw new Error("Unsupported patch content type: application/json is required.");if(C=b.slice(y),C){if(E=yS(e,C),Object.keys(E).length>1||"data"in E||"incremental"in E||"errors"in E||"payload"in E)if(dS(E)){if(_={},"payload"in E){if(Object.keys(E).length===1&&E.payload===null)return[2];_=S({},E.payload)}"errors"in E&&(_=S(S({},_),{extensions:S(S({},"extensions"in _?_.extensions:null),(B={},B[Yi]=E.errors,B))})),t(_)}else t(E);else if(Object.keys(E).length===1&&"hasNext"in E&&!E.hasNext)return[2]}v=c.indexOf(s)}return[3,1];case 3:return[2]}})})}function aR(e){var t={};return e.split(`
`).forEach(function(n){var r=n.indexOf(":");if(r>-1){var o=n.slice(0,r).trim().toLowerCase(),i=n.slice(r+1).trim();t[o]=i}}),t}function yS(e,t){if(e.status>=300){var n=function(){try{return JSON.parse(t)}catch{return t}};Tc(e,n(),"Response not successful: Received status code ".concat(e.status))}try{return JSON.parse(t)}catch(o){var r=o;throw r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,r}}function vS(e,t){e.result&&e.result.errors&&e.result.data&&t.next(e.result),t.error(e)}function SS(e){return function(t){return t.text().then(function(n){return yS(t,n)}).then(function(n){return!Array.isArray(n)&&!mS.call(n,"data")&&!mS.call(n,"errors")&&Tc(t,n,"Server response was missing for query '".concat(Array.isArray(e)?e.map(function(r){return r.operationName}):e.operationName,"'.")),n})}}var Zi=function(e,t){var n;try{n=JSON.stringify(e)}catch(o){var r=ue(42,t,o.message);throw r.parseError=o,r}return n};var cR={includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},lR={accept:"*/*","content-type":"application/json"},uR={method:"POST"},bS={http:cR,headers:lR,options:uR},DS=function(e,t){return t(e)};function wS(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o={},i={};n.forEach(function(f){o=S(S(S({},o),f.options),{headers:S(S({},o.headers),f.headers)}),f.credentials&&(o.credentials=f.credentials),i=S(S({},i),f.http)}),o.headers&&(o.headers=dR(o.headers,i.preserveHeaderCase));var s=e.operationName,c=e.extensions,l=e.variables,u=e.query,d={operationName:s,variables:l};return i.includeExtensions&&(d.extensions=c),i.includeQuery&&(d.query=t(u,Nt)),{options:o,body:d}}function dR(e,t){if(!t){var n={};return Object.keys(Object(e)).forEach(function(i){n[i.toLowerCase()]=e[i]}),n}var r={};Object.keys(Object(e)).forEach(function(i){r[i.toLowerCase()]={originalName:i,value:e[i]}});var o={};return Object.keys(r).forEach(function(i){o[r[i].originalName]=r[i].value}),o}var TS=function(e){if(!e&&typeof fetch>"u")throw ue(40)};var ES=function(e,t){var n=e.getContext(),r=n.uri;return r||(typeof t=="function"?t(e):t||"/graphql")};function CS(e,t){var n=[],r=function(f,h){n.push("".concat(f,"=").concat(encodeURIComponent(h)))};if("query"in t&&r("query",t.query),t.operationName&&r("operationName",t.operationName),t.variables){var o=void 0;try{o=Zi(t.variables,"Variables map")}catch(f){return{parseError:f}}r("variables",o)}if(t.extensions){var i=void 0;try{i=Zi(t.extensions,"Extensions map")}catch(f){return{parseError:f}}r("extensions",i)}var s="",c=e,l=e.indexOf("#");l!==-1&&(s=e.substr(l),c=e.substr(0,l));var u=c.indexOf("?")===-1?"?":"&",d=c+u+n.join("&")+s;return{newURI:d}}var IS=Ue(function(){return fetch}),PS=function(e){e===void 0&&(e={});var t=e.uri,n=t===void 0?"/graphql":t,r=e.fetch,o=e.print,i=o===void 0?DS:o,s=e.includeExtensions,c=e.preserveHeaderCase,l=e.useGETForQueries,u=e.includeUnusedVariables,d=u===void 0?!1:u,f=We(e,["uri","fetch","print","includeExtensions","preserveHeaderCase","useGETForQueries","includeUnusedVariables"]);globalThis.__DEV__!==!1&&TS(r||IS);var h={http:{includeExtensions:s,preserveHeaderCase:c},options:f.fetchOptions,credentials:f.credentials,headers:f.headers};return new bt(function(p){var g=ES(p,n),v=p.getContext(),b={};if(v.clientAwareness){var y=v.clientAwareness,w=y.name,D=y.version;w&&(b["apollographql-client-name"]=w),D&&(b["apollographql-client-version"]=D)}var C=S(S({},b),v.headers),E={http:v.http,options:v.fetchOptions,credentials:v.credentials,headers:C};if(ln(["client"],p.query)){var _=qi(p.query);if(!_)return Qi(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));p.query=_}var L=wS(p,i,bS,h,E),B=L.options,se=L.body;se.variables&&!d&&(se.variables=Tf(se.variables,p.query));var ge;!B.signal&&typeof AbortController<"u"&&(ge=new AbortController,B.signal=ge.signal);var At=function(ft){return ft.kind==="OperationDefinition"&&ft.operation==="mutation"},Dr=function(ft){return ft.kind==="OperationDefinition"&&ft.operation==="subscription"},Oe=Dr(kt(p.query)),gn=ln(["defer"],p.query);if(l&&!p.query.definitions.some(At)&&(B.method="GET"),gn||Oe){B.headers=B.headers||{};var Yc="multipart/mixed;";Oe&&gn&&globalThis.__DEV__!==!1&&I.warn(41),Oe?Yc+="boundary=graphql;subscriptionSpec=1.0,application/json":gn&&(Yc+="deferSpec=20220824,application/json"),B.headers.accept=Yc}if(B.method==="GET"){var rh=CS(g,se),Lb=rh.newURI,oh=rh.parseError;if(oh)return Qi(oh);g=Lb}else try{B.body=Zi(se,"Payload")}catch(ft){return Qi(ft)}return new $(function(ft){var Hb=r||Ue(function(){return fetch})||IS,ih=ft.next.bind(ft);return Hb(g,B).then(function(wr){var Zc;p.setContext({response:wr});var sh=(Zc=wr.headers)===null||Zc===void 0?void 0:Zc.get("content-type");return sh!==null&&/^multipart\/mixed/i.test(sh)?gS(wr,ih):SS(p)(wr).then(ih)}).then(function(){ge=void 0,ft.complete()}).catch(function(wr){ge=void 0,vS(wr,ft)}),function(){ge&&ge.abort()}})})};var Pf=function(e){xe(t,e);function t(n){n===void 0&&(n={});var r=e.call(this,PS(n).request)||this;return r.options=n,r}return t}(bt);var{toString:MS,hasOwnProperty:fR}=Object.prototype,RS=Function.prototype.toString,Mf=new Map;function ne(e,t){try{return Rf(e,t)}finally{Mf.clear()}}var Ji=ne;function Rf(e,t){if(e===t)return!0;let n=MS.call(e),r=MS.call(t);if(n!==r)return!1;switch(n){case"[object Array]":if(e.length!==t.length)return!1;case"[object Object]":{if(xS(e,t))return!0;let o=_S(e),i=_S(t),s=o.length;if(s!==i.length)return!1;for(let c=0;c<s;++c)if(!fR.call(t,o[c]))return!1;for(let c=0;c<s;++c){let l=o[c];if(!Rf(e[l],t[l]))return!1}return!0}case"[object Error]":return e.name===t.name&&e.message===t.message;case"[object Number]":if(e!==e)return t!==t;case"[object Boolean]":case"[object Date]":return+e==+t;case"[object RegExp]":case"[object String]":return e==`${t}`;case"[object Map]":case"[object Set]":{if(e.size!==t.size)return!1;if(xS(e,t))return!0;let o=e.entries(),i=n==="[object Map]";for(;;){let s=o.next();if(s.done)break;let[c,l]=s.value;if(!t.has(c)||i&&!Rf(l,t.get(c)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":e=new Uint8Array(e),t=new Uint8Array(t);case"[object DataView]":{let o=e.byteLength;if(o===t.byteLength)for(;o--&&e[o]===t[o];);return o===-1}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{let o=RS.call(e);return o!==RS.call(t)?!1:!mR(o,pR)}}return!1}function _S(e){return Object.keys(e).filter(hR,e)}function hR(e){return this[e]!==void 0}var pR="{ [native code] }";function mR(e,t){let n=e.length-t.length;return n>=0&&e.indexOf(t,n)===n}function xS(e,t){let n=Mf.get(e);if(n){if(n.has(t))return!0}else Mf.set(e,n=new Set);return n.add(t),!1}function Mc(e,t,n,r){var o=t.data,i=We(t,["data"]),s=n.data,c=We(n,["data"]);return Ji(i,c)&&Pc(kt(e).selectionSet,o,s,{fragmentMap:lt(dt(e)),variables:r})}function Pc(e,t,n,r){if(t===n)return!0;var o=new Set;return e.selections.every(function(i){if(o.has(i)||(o.add(i),!xt(i,r.variables))||kS(i))return!0;if(ze(i)){var s=je(i),c=t&&t[s],l=n&&n[s],u=i.selectionSet;if(!u)return Ji(c,l);var d=Array.isArray(c),f=Array.isArray(l);if(d!==f)return!1;if(d&&f){var h=c.length;if(l.length!==h)return!1;for(var p=0;p<h;++p)if(!Pc(u,c[p],l[p],r))return!1;return!0}return Pc(u,c,l,r)}else{var g=un(i,r.fragmentMap);if(g)return kS(g)?!0:Pc(g.selectionSet,t,n,r)}})}function kS(e){return!!e.directives&&e.directives.some(gR)}function gR(e){return e.name.value==="nonreactive"}var Rc=ct?WeakMap:Map,_c=vo?WeakSet:Set,Mo=new hn,NS=!1;function xc(){NS||(NS=!0,globalThis.__DEV__!==!1&&I.warn(52))}function kc(e,t,n){return Mo.withValue(!0,function(){var r=Xi(e,t,n,!1);return Object.isFrozen(e)&&Bn(r),r})}function yR(e,t){if(t.has(e))return t.get(e);var n=Array.isArray(e)?[]:Object.create(null);return t.set(e,n),n}function Xi(e,t,n,r,o){var i,s=n.knownChanged,c=yR(e,n.mutableTargets);if(Array.isArray(e)){for(var l=0,u=Array.from(e.entries());l<u.length;l++){var d=u[l],f=d[0],h=d[1];if(h===null){c[f]=null;continue}var p=Xi(h,t,n,r,globalThis.__DEV__!==!1?"".concat(o||"","[").concat(f,"]"):void 0);s.has(p)&&s.add(c),c[f]=p}return s.has(c)?c:e}for(var g=0,v=t.selections;g<v.length;g++){var b=v[g],y=void 0;if(r&&s.add(c),b.kind===M.FIELD){var w=je(b),D=b.selectionSet;if(y=c[w]||e[w],y===void 0)continue;if(D&&y!==null){var p=Xi(e[w],D,n,r,globalThis.__DEV__!==!1?"".concat(o||"",".").concat(w):void 0);s.has(p)&&(y=p)}globalThis.__DEV__===!1&&(c[w]=y),globalThis.__DEV__!==!1&&(r&&w!=="__typename"&&!(!((i=Object.getOwnPropertyDescriptor(c,w))===null||i===void 0)&&i.value)?Object.defineProperty(c,w,vR(w,y,o||"",n.operationName,n.operationType)):(delete c[w],c[w]=y))}if(b.kind===M.INLINE_FRAGMENT&&(!b.typeCondition||n.cache.fragmentMatches(b,e.__typename))&&(y=Xi(e,b.selectionSet,n,r,o)),b.kind===M.FRAGMENT_SPREAD){var C=b.name.value,E=n.fragmentMap[C]||(n.fragmentMap[C]=n.cache.lookupFragment(C));I(E,47,C);var _=Wd(b);_!=="mask"&&(y=Xi(e,E.selectionSet,n,_==="migrate",o))}s.has(y)&&s.add(c)}return"__typename"in e&&!("__typename"in c)&&(c.__typename=e.__typename),Object.keys(c).length!==Object.keys(e).length&&s.add(c),s.has(c)?c:e}function vR(e,t,n,r,o){var i=function(){return Mo.getValue()||(globalThis.__DEV__!==!1&&I.warn(48,r?"".concat(o," '").concat(r,"'"):"anonymous ".concat(o),"".concat(n,".").concat(e).replace(/^\./,"")),i=function(){return t}),t};return{get:function(){return i()},set:function(s){i=function(){return s}},enumerable:!0,configurable:!0}}function es(e,t,n,r){if(!n.fragmentMatches)return globalThis.__DEV__!==!1&&xc(),e;var o=t.definitions.filter(function(s){return s.kind===M.FRAGMENT_DEFINITION});typeof r>"u"&&(I(o.length===1,49,o.length),r=o[0].name.value);var i=o.find(function(s){return s.name.value===r});return I(!!i,50,r),e==null||Ji(e,{})?e:kc(e,i.selectionSet,{operationType:"fragment",operationName:i.name.value,fragmentMap:lt(dt(t)),cache:n,mutableTargets:new Rc,knownChanged:new _c})}function _f(e,t,n){var r;if(!n.fragmentMatches)return globalThis.__DEV__!==!1&&xc(),e;var o=ut(t);return I(o,51),e==null?e:kc(e,o.selectionSet,{operationType:o.operation,operationName:(r=o.name)===null||r===void 0?void 0:r.value,fragmentMap:lt(dt(t)),cache:n,mutableTargets:new Rc,knownChanged:new _c})}var Nc=function(){function e(){this.assumeImmutableResults=!1,this.getFragmentDoc=pn(Qd,{max:Re["cache.fragmentQueryDocuments"]||1e3,cache:Gt})}return e.prototype.lookupFragment=function(t){return null},e.prototype.batch=function(t){var n=this,r=typeof t.optimistic=="string"?t.optimistic:t.optimistic===!1?null:void 0,o;return this.performTransaction(function(){return o=t.update(n)},r),o},e.prototype.recordOptimisticTransaction=function(t,n){this.performTransaction(t,n)},e.prototype.transformDocument=function(t){return t},e.prototype.transformForLink=function(t){return t},e.prototype.identify=function(t){},e.prototype.gc=function(){return[]},e.prototype.modify=function(t){return!1},e.prototype.readQuery=function(t,n){return n===void 0&&(n=!!t.optimistic),this.read(S(S({},t),{rootId:t.id||"ROOT_QUERY",optimistic:n}))},e.prototype.watchFragment=function(t){var n=this,r=t.fragment,o=t.fragmentName,i=t.from,s=t.optimistic,c=s===void 0?!0:s,l=We(t,["fragment","fragmentName","from","optimistic"]),u=this.getFragmentDoc(r,o),d=typeof i>"u"||typeof i=="string"?i:this.identify(i),f=!!t[Symbol.for("apollo.dataMasking")];if(globalThis.__DEV__!==!1){var h=o||ji(r).name.value;d||globalThis.__DEV__!==!1&&I.warn(1,h)}var p=S(S({},l),{returnPartialData:!0,id:d,query:u,optimistic:c}),g;return new $(function(v){return n.watch(S(S({},p),{immediate:!0,callback:function(b){var y=f?es(b.result,r,n,o):b.result;if(!(g&&Mc(u,{data:g.result},{data:y},t.variables))){var w={data:y,complete:!!b.complete};b.missing&&(w.missing=yr(b.missing.map(function(D){return D.missing}))),g=S(S({},b),{result:y}),v.next(w)}}}))})},e.prototype.readFragment=function(t,n){return n===void 0&&(n=!!t.optimistic),this.read(S(S({},t),{query:this.getFragmentDoc(t.fragment,t.fragmentName),rootId:t.id,optimistic:n}))},e.prototype.writeQuery=function(t){var n=t.id,r=t.data,o=We(t,["id","data"]);return this.write(Object.assign(o,{dataId:n||"ROOT_QUERY",result:r}))},e.prototype.writeFragment=function(t){var n=t.id,r=t.data,o=t.fragment,i=t.fragmentName,s=We(t,["id","data","fragment","fragmentName"]);return this.write(Object.assign(s,{query:this.getFragmentDoc(o,i),dataId:n,result:r}))},e.prototype.updateQuery=function(t,n){return this.batch({update:function(r){var o=r.readQuery(t),i=n(o);return i==null?o:(r.writeQuery(S(S({},t),{data:i})),i)}})},e.prototype.updateFragment=function(t,n){return this.batch({update:function(r){var o=r.readFragment(t),i=n(o);return i==null?o:(r.writeFragment(S(S({},t),{data:i})),i)}})},e}();globalThis.__DEV__!==!1&&(Nc.prototype.getMemoryInternals=_v);var ts=function(e){xe(t,e);function t(n,r,o,i){var s,c=e.call(this,n)||this;if(c.message=n,c.path=r,c.query=o,c.variables=i,Array.isArray(c.path)){c.missing=c.message;for(var l=c.path.length-1;l>=0;--l)c.missing=(s={},s[c.path[l]]=c.missing,s)}else c.missing=c.path;return c.__proto__=t.prototype,c}return t}(Error);var we=Object.prototype.hasOwnProperty;function ns(e){return e==null}function Ac(e,t){var n=e.__typename,r=e.id,o=e._id;if(typeof n=="string"&&(t&&(t.keyObject=ns(r)?ns(o)?void 0:{_id:o}:{id:r}),ns(r)&&!ns(o)&&(r=o),!ns(r)))return"".concat(n,":").concat(typeof r=="number"||typeof r=="string"?r:JSON.stringify(r))}var OS={dataIdFromObject:Ac,addTypename:!0,resultCaching:!0,canonizeResults:!1};function AS(e){return Qt(OS,e)}function Fc(e){var t=e.canonizeResults;return t===void 0?OS.canonizeResults:t}function FS(e,t){return G(t)?e.get(t.__ref,"__typename"):t&&t.__typename}var xf=/^[_a-z][_0-9a-z]*/i;function Ot(e){var t=e.match(xf);return t?t[0]:e}function Oc(e,t,n){return Z(t)?ie(t)?t.every(function(r){return Oc(e,r,n)}):e.selections.every(function(r){if(ze(r)&&xt(r,n)){var o=je(r);return we.call(t,o)&&(!r.selectionSet||Oc(r.selectionSet,t[o],n))}return!0}):!1}function $n(e){return Z(e)&&!G(e)&&!ie(e)}function LS(){return new Ze}function Lc(e,t){var n=lt(dt(e));return{fragmentMap:n,lookupFragment:function(r){var o=n[r];return!o&&t&&(o=t.lookup(r)),o||null}}}var Hc=Object.create(null),kf=function(){return Hc},HS=Object.create(null),Ro=function(){function e(t,n){var r=this;this.policies=t,this.group=n,this.data=Object.create(null),this.rootIds=Object.create(null),this.refs=Object.create(null),this.getFieldValue=function(o,i){return Bn(G(o)?r.get(o.__ref,i):o&&o[i])},this.canRead=function(o){return G(o)?r.has(o.__ref):typeof o=="object"},this.toReference=function(o,i){if(typeof o=="string")return St(o);if(G(o))return o;var s=r.policies.identify(o)[0];if(s){var c=St(s);return i&&r.merge(s,o),c}}}return e.prototype.toObject=function(){return S({},this.data)},e.prototype.has=function(t){return this.lookup(t,!0)!==void 0},e.prototype.get=function(t,n){if(this.group.depend(t,n),we.call(this.data,t)){var r=this.data[t];if(r&&we.call(r,n))return r[n]}if(n==="__typename"&&we.call(this.policies.rootTypenamesById,t))return this.policies.rootTypenamesById[t];if(this instanceof zn)return this.parent.get(t,n)},e.prototype.lookup=function(t,n){if(n&&this.group.depend(t,"__exists"),we.call(this.data,t))return this.data[t];if(this instanceof zn)return this.parent.lookup(t,n);if(this.policies.rootTypenamesById[t])return Object.create(null)},e.prototype.merge=function(t,n){var r=this,o;G(t)&&(t=t.__ref),G(n)&&(n=n.__ref);var i=typeof t=="string"?this.lookup(o=t):t,s=typeof n=="string"?this.lookup(o=n):n;if(s){I(typeof o=="string",2);var c=new Ze(bR).merge(i,s);if(this.data[o]=c,c!==i&&(delete this.refs[o],this.group.caching)){var l=Object.create(null);i||(l.__exists=1),Object.keys(s).forEach(function(u){if(!i||i[u]!==c[u]){l[u]=1;var d=Ot(u);d!==u&&!r.policies.hasKeyArgs(c.__typename,d)&&(l[d]=1),c[u]===void 0&&!(r instanceof zn)&&delete c[u]}}),l.__typename&&!(i&&i.__typename)&&this.policies.rootTypenamesById[o]===c.__typename&&delete l.__typename,Object.keys(l).forEach(function(u){return r.group.dirty(o,u)})}}},e.prototype.modify=function(t,n){var r=this,o=this.lookup(t);if(o){var i=Object.create(null),s=!1,c=!0,l={DELETE:Hc,INVALIDATE:HS,isReference:G,toReference:this.toReference,canRead:this.canRead,readField:function(u,d){return r.policies.readField(typeof u=="string"?{fieldName:u,from:d||St(t)}:u,{store:r})}};if(Object.keys(o).forEach(function(u){var d=Ot(u),f=o[u];if(f!==void 0){var h=typeof n=="function"?n:n[u]||n[d];if(h){var p=h===kf?Hc:h(Bn(f),S(S({},l),{fieldName:d,storeFieldName:u,storage:r.getStorage(t,u)}));if(p===HS)r.group.dirty(t,u);else if(p===Hc&&(p=void 0),p!==f&&(i[u]=p,s=!0,f=p,globalThis.__DEV__!==!1)){var g=function(E){if(r.lookup(E.__ref)===void 0)return globalThis.__DEV__!==!1&&I.warn(3,E),!0};if(G(p))g(p);else if(Array.isArray(p))for(var v=!1,b=void 0,y=0,w=p;y<w.length;y++){var D=w[y];if(G(D)){if(v=!0,g(D))break}else if(typeof D=="object"&&D){var C=r.policies.identify(D)[0];C&&(b=D)}if(v&&b!==void 0){globalThis.__DEV__!==!1&&I.warn(4,b);break}}}}f!==void 0&&(c=!1)}}),s)return this.merge(t,i),c&&(this instanceof zn?this.data[t]=void 0:delete this.data[t],this.group.dirty(t,"__exists")),!0}return!1},e.prototype.delete=function(t,n,r){var o,i=this.lookup(t);if(i){var s=this.getFieldValue(i,"__typename"),c=n&&r?this.policies.getStoreFieldName({typename:s,fieldName:n,args:r}):n;return this.modify(t,c?(o={},o[c]=kf,o):kf)}return!1},e.prototype.evict=function(t,n){var r=!1;return t.id&&(we.call(this.data,t.id)&&(r=this.delete(t.id,t.fieldName,t.args)),this instanceof zn&&this!==n&&(r=this.parent.evict(t,n)||r),(t.fieldName||r)&&this.group.dirty(t.id,t.fieldName||"__exists")),r},e.prototype.clear=function(){this.replace(null)},e.prototype.extract=function(){var t=this,n=this.toObject(),r=[];return this.getRootIdSet().forEach(function(o){we.call(t.policies.rootTypenamesById,o)||r.push(o)}),r.length&&(n.__META={extraRootIds:r.sort()}),n},e.prototype.replace=function(t){var n=this;if(Object.keys(this.data).forEach(function(i){t&&we.call(t,i)||n.delete(i)}),t){var r=t.__META,o=We(t,["__META"]);Object.keys(o).forEach(function(i){n.merge(i,o[i])}),r&&r.extraRootIds.forEach(this.retain,this)}},e.prototype.retain=function(t){return this.rootIds[t]=(this.rootIds[t]||0)+1},e.prototype.release=function(t){if(this.rootIds[t]>0){var n=--this.rootIds[t];return n||delete this.rootIds[t],n}return 0},e.prototype.getRootIdSet=function(t){return t===void 0&&(t=new Set),Object.keys(this.rootIds).forEach(t.add,t),this instanceof zn?this.parent.getRootIdSet(t):Object.keys(this.policies.rootTypenamesById).forEach(t.add,t),t},e.prototype.gc=function(){var t=this,n=this.getRootIdSet(),r=this.toObject();n.forEach(function(s){we.call(r,s)&&(Object.keys(t.findChildRefIds(s)).forEach(n.add,n),delete r[s])});var o=Object.keys(r);if(o.length){for(var i=this;i instanceof zn;)i=i.parent;o.forEach(function(s){return i.delete(s)})}return o},e.prototype.findChildRefIds=function(t){if(!we.call(this.refs,t)){var n=this.refs[t]=Object.create(null),r=this.data[t];if(!r)return n;var o=new Set([r]);o.forEach(function(i){G(i)&&(n[i.__ref]=!0),Z(i)&&Object.keys(i).forEach(function(s){var c=i[s];Z(c)&&o.add(c)})})}return this.refs[t]},e.prototype.makeCacheKey=function(){return this.group.keyMaker.lookupArray(arguments)},e}();var US=function(){function e(t,n){n===void 0&&(n=null),this.caching=t,this.parent=n,this.d=null,this.resetCaching()}return e.prototype.resetCaching=function(){this.d=this.caching?$i():null,this.keyMaker=new Ve(ct)},e.prototype.depend=function(t,n){if(this.d){this.d(Nf(t,n));var r=Ot(n);r!==n&&this.d(Nf(t,r)),this.parent&&this.parent.depend(t,n)}},e.prototype.dirty=function(t,n){this.d&&this.d.dirty(Nf(t,n),n==="__exists"?"forget":"setDirty")},e}();function Nf(e,t){return t+"#"+e}function Of(e,t){br(e)&&e.group.depend(t,"__exists")}(function(e){var t=function(n){xe(r,n);function r(o){var i=o.policies,s=o.resultCaching,c=s===void 0?!0:s,l=o.seed,u=n.call(this,i,new US(c))||this;return u.stump=new SR(u),u.storageTrie=new Ve(ct),l&&u.replace(l),u}return r.prototype.addLayer=function(o,i){return this.stump.addLayer(o,i)},r.prototype.removeLayer=function(){return this},r.prototype.getStorage=function(){return this.storageTrie.lookupArray(arguments)},r}(e);e.Root=t})(Ro||(Ro={}));var zn=function(e){xe(t,e);function t(n,r,o,i){var s=e.call(this,r.policies,i)||this;return s.id=n,s.parent=r,s.replay=o,s.group=i,o(s),s}return t.prototype.addLayer=function(n,r){return new t(n,this,r,this.group)},t.prototype.removeLayer=function(n){var r=this,o=this.parent.removeLayer(n);return n===this.id?(this.group.caching&&Object.keys(this.data).forEach(function(i){var s=r.data[i],c=o.lookup(i);c?s?s!==c&&Object.keys(s).forEach(function(l){ne(s[l],c[l])||r.group.dirty(i,l)}):(r.group.dirty(i,"__exists"),Object.keys(c).forEach(function(l){r.group.dirty(i,l)})):r.delete(i)}),o):o===this.parent?this:o.addLayer(this.id,this.replay)},t.prototype.toObject=function(){return S(S({},this.parent.toObject()),this.data)},t.prototype.findChildRefIds=function(n){var r=this.parent.findChildRefIds(n);return we.call(this.data,n)?S(S({},r),e.prototype.findChildRefIds.call(this,n)):r},t.prototype.getStorage=function(){for(var n=this.parent;n.parent;)n=n.parent;return n.getStorage.apply(n,arguments)},t}(Ro),SR=function(e){xe(t,e);function t(n){return e.call(this,"EntityStore.Stump",n,function(){},new US(n.group.caching,n.group))||this}return t.prototype.removeLayer=function(){return this},t.prototype.merge=function(n,r){return this.parent.merge(n,r)},t}(zn);function bR(e,t,n){var r=e[n],o=t[n];return ne(r,o)?r:o}function br(e){return!!(e instanceof Ro&&e.group.caching)}function DR(e){return Z(e)?ie(e)?e.slice(0):S({__proto__:Object.getPrototypeOf(e)},e):e}var Af=function(){function e(){this.known=new(vo?WeakSet:Set),this.pool=new Ve(ct),this.passes=new WeakMap,this.keysByJSON=new Map,this.empty=this.admit({})}return e.prototype.isKnown=function(t){return Z(t)&&this.known.has(t)},e.prototype.pass=function(t){if(Z(t)){var n=DR(t);return this.passes.set(n,t),n}return t},e.prototype.admit=function(t){var n=this;if(Z(t)){var r=this.passes.get(t);if(r)return r;var o=Object.getPrototypeOf(t);switch(o){case Array.prototype:{if(this.known.has(t))return t;var i=t.map(this.admit,this),s=this.pool.lookupArray(i);return s.array||(this.known.add(s.array=i),globalThis.__DEV__!==!1&&Object.freeze(i)),s.array}case null:case Object.prototype:{if(this.known.has(t))return t;var c=Object.getPrototypeOf(t),l=[c],u=this.sortedKeys(t);l.push(u.json);var d=l.length;u.sorted.forEach(function(p){l.push(n.admit(t[p]))});var s=this.pool.lookupArray(l);if(!s.object){var f=s.object=Object.create(c);this.known.add(f),u.sorted.forEach(function(p,g){f[p]=l[d+g]}),globalThis.__DEV__!==!1&&Object.freeze(f)}return s.object}}}return t},e.prototype.sortedKeys=function(t){var n=Object.keys(t),r=this.pool.lookupArray(n);if(!r.keys){n.sort();var o=JSON.stringify(n);(r.keys=this.keysByJSON.get(o))||this.keysByJSON.set(o,r.keys={sorted:n,json:o})}return r.keys},e}();function jS(e){return[e.selectionSet,e.objectOrReference,e.context,e.context.canonizeResults]}var BS=function(){function e(t){var n=this;this.knownResults=new(ct?WeakMap:Map),this.config=Qt(t,{addTypename:t.addTypename!==!1,canonizeResults:Fc(t)}),this.canon=t.canon||new Af,this.executeSelectionSet=pn(function(r){var o,i=r.context.canonizeResults,s=jS(r);s[3]=!i;var c=(o=n.executeSelectionSet).peek.apply(o,s);return c?i?S(S({},c),{result:n.canon.admit(c.result)}):c:(Of(r.context.store,r.enclosingRef.__ref),n.execSelectionSetImpl(r))},{max:this.config.resultCacheMaxSize||Re["inMemoryCache.executeSelectionSet"]||5e4,keyArgs:jS,makeCacheKey:function(r,o,i,s){if(br(i.store))return i.store.makeCacheKey(r,G(o)?o.__ref:o,i.varString,s)}}),this.executeSubSelectedArray=pn(function(r){return Of(r.context.store,r.enclosingRef.__ref),n.execSubSelectedArrayImpl(r)},{max:this.config.resultCacheMaxSize||Re["inMemoryCache.executeSubSelectedArray"]||1e4,makeCacheKey:function(r){var o=r.field,i=r.array,s=r.context;if(br(s.store))return s.store.makeCacheKey(o,i,s.varString)}})}return e.prototype.resetCanon=function(){this.canon=new Af},e.prototype.diffQueryAgainstStore=function(t){var n=t.store,r=t.query,o=t.rootId,i=o===void 0?"ROOT_QUERY":o,s=t.variables,c=t.returnPartialData,l=c===void 0?!0:c,u=t.canonizeResults,d=u===void 0?this.config.canonizeResults:u,f=this.config.cache.policies;s=S(S({},pr(Ui(r))),s);var h=St(i),p=this.executeSelectionSet({selectionSet:kt(r).selectionSet,objectOrReference:h,enclosingRef:h,context:S({store:n,query:r,policies:f,variables:s,varString:$e(s),canonizeResults:d},Lc(r,this.config.fragments))}),g;if(p.missing&&(g=[new ts(wR(p.missing),p.missing,r,s)],!l))throw g[0];return{result:p.result,complete:!g,missing:g}},e.prototype.isFresh=function(t,n,r,o){if(br(o.store)&&this.knownResults.get(t)===r){var i=this.executeSelectionSet.peek(r,n,o,this.canon.isKnown(t));if(i&&t===i.result)return!0}return!1},e.prototype.execSelectionSetImpl=function(t){var n=this,r=t.selectionSet,o=t.objectOrReference,i=t.enclosingRef,s=t.context;if(G(o)&&!s.policies.rootTypenamesById[o.__ref]&&!s.store.has(o.__ref))return{result:this.canon.empty,missing:"Dangling reference to missing ".concat(o.__ref," object")};var c=s.variables,l=s.policies,u=s.store,d=u.getFieldValue(o,"__typename"),f=[],h,p=new Ze;this.config.addTypename&&typeof d=="string"&&!l.rootIdsByTypename[d]&&f.push({__typename:d});function g(D,C){var E;return D.missing&&(h=p.merge(h,(E={},E[C]=D.missing,E))),D.result}var v=new Set(r.selections);v.forEach(function(D){var C,E;if(xt(D,c))if(ze(D)){var _=l.readField({fieldName:D.name.value,field:D,variables:s.variables,from:o},s),L=je(D);_===void 0?gr.added(D)||(h=p.merge(h,(C={},C[L]="Can't find field '".concat(D.name.value,"' on ").concat(G(o)?o.__ref+" object":"object "+JSON.stringify(o,null,2)),C))):ie(_)?_.length>0&&(_=g(n.executeSubSelectedArray({field:D,array:_,enclosingRef:i,context:s}),L)):D.selectionSet?_!=null&&(_=g(n.executeSelectionSet({selectionSet:D.selectionSet,objectOrReference:_,enclosingRef:G(_)?_:i,context:s}),L)):s.canonizeResults&&(_=n.canon.pass(_)),_!==void 0&&f.push((E={},E[L]=_,E))}else{var B=un(D,s.lookupFragment);if(!B&&D.kind===M.FRAGMENT_SPREAD)throw ue(10,D.name.value);B&&l.fragmentMatches(B,d)&&B.selectionSet.selections.forEach(v.add,v)}});var b=yr(f),y={result:b,missing:h},w=s.canonizeResults?this.canon.admit(y):Bn(y);return w.result&&this.knownResults.set(w.result,r),w},e.prototype.execSubSelectedArrayImpl=function(t){var n=this,r=t.field,o=t.array,i=t.enclosingRef,s=t.context,c,l=new Ze;function u(d,f){var h;return d.missing&&(c=l.merge(c,(h={},h[f]=d.missing,h))),d.result}return r.selectionSet&&(o=o.filter(s.store.canRead)),o=o.map(function(d,f){return d===null?null:ie(d)?u(n.executeSubSelectedArray({field:r,array:d,enclosingRef:i,context:s}),f):r.selectionSet?u(n.executeSelectionSet({selectionSet:r.selectionSet,objectOrReference:d,enclosingRef:G(d)?d:i,context:s}),f):(globalThis.__DEV__!==!1&&TR(s.store,r,d),d)}),{result:s.canonizeResults?this.canon.admit(o):o,missing:c}},e}();function wR(e){try{JSON.stringify(e,function(t,n){if(typeof n=="string")throw n;return n})}catch(t){return t}}function TR(e,t,n){if(!t.selectionSet){var r=new Set([n]);r.forEach(function(o){Z(o)&&(I(!G(o),11,FS(e,o),t.name.value),Object.values(o).forEach(r.add,r))})}}var _o=new hn,VS=new WeakMap;function rs(e){var t=VS.get(e);return t||VS.set(e,t={vars:new Set,dep:$i()}),t}function Ff(e){rs(e).vars.forEach(function(t){return t.forgetCache(e)})}function $S(e){rs(e).vars.forEach(function(t){return t.attachCache(e)})}function Uc(e){var t=new Set,n=new Set,r=function(i){if(arguments.length>0){if(e!==i){e=i,t.forEach(function(l){rs(l).dep.dirty(r),ER(l)});var s=Array.from(n);n.clear(),s.forEach(function(l){return l(e)})}}else{var c=_o.getValue();c&&(o(c),rs(c).dep(r))}return e};r.onNextChange=function(i){return n.add(i),function(){n.delete(i)}};var o=r.attachCache=function(i){return t.add(i),rs(i).vars.add(r),r};return r.forgetCache=function(i){return t.delete(i)},r}function ER(e){e.broadcastWatches&&e.broadcastWatches()}var zS=Object.create(null);function Lf(e){var t=JSON.stringify(e);return zS[t]||(zS[t]=Object.create(null))}function Hf(e){var t=Lf(e);return t.keyFieldsFn||(t.keyFieldsFn=function(n,r){var o=function(s,c){return r.readField(c,s)},i=r.keyObject=jf(e,function(s){var c=xo(r.storeObject,s,o);return c===void 0&&n!==r.storeObject&&we.call(n,s[0])&&(c=xo(n,s,WS)),I(c!==void 0,5,s.join("."),n),c});return"".concat(r.typename,":").concat(JSON.stringify(i))})}function Uf(e){var t=Lf(e);return t.keyArgsFn||(t.keyArgsFn=function(n,r){var o=r.field,i=r.variables,s=r.fieldName,c=jf(e,function(u){var d=u[0],f=d.charAt(0);if(f==="@"){if(o&&Le(o.directives)){var h=d.slice(1),p=o.directives.find(function(y){return y.name.value===h}),g=p&&dn(p,i);return g&&xo(g,u.slice(1))}return}if(f==="$"){var v=d.slice(1);if(i&&we.call(i,v)){var b=u.slice(0);return b[0]=v,xo(i,b)}return}if(n)return xo(n,u)}),l=JSON.stringify(c);return(n||l!=="{}")&&(s+=":"+l),s})}function jf(e,t){var n=new Ze;return qS(e).reduce(function(r,o){var i,s=t(o);if(s!==void 0){for(var c=o.length-1;c>=0;--c)s=(i={},i[o[c]]=s,i);r=n.merge(r,s)}return r},Object.create(null))}function qS(e){var t=Lf(e);if(!t.paths){var n=t.paths=[],r=[];e.forEach(function(o,i){ie(o)?(qS(o).forEach(function(s){return n.push(r.concat(s))}),r.length=0):(r.push(o),ie(e[i+1])||(n.push(r.slice(0)),r.length=0))})}return t.paths}function WS(e,t){return e[t]}function xo(e,t,n){return n=n||WS,GS(t.reduce(function r(o,i){return ie(o)?o.map(function(s){return r(s,i)}):o&&n(o,i)},e))}function GS(e){return Z(e)?ie(e)?e.map(GS):jf(Object.keys(e).sort(),function(t){return xo(e,t)}):e}function Bf(e){return e.args!==void 0?e.args:e.field?dn(e.field,e.variables):null}var CR=function(){},QS=function(e,t){return t.fieldName},KS=function(e,t,n){var r=n.mergeObjects;return r(e,t)},YS=function(e,t){return t},JS=function(){function e(t){this.config=t,this.typePolicies=Object.create(null),this.toBeAdded=Object.create(null),this.supertypeMap=new Map,this.fuzzySubtypes=new Map,this.rootIdsByTypename=Object.create(null),this.rootTypenamesById=Object.create(null),this.usingPossibleTypes=!1,this.config=S({dataIdFromObject:Ac},t),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),t.possibleTypes&&this.addPossibleTypes(t.possibleTypes),t.typePolicies&&this.addTypePolicies(t.typePolicies)}return e.prototype.identify=function(t,n){var r,o=this,i=n&&(n.typename||((r=n.storeObject)===null||r===void 0?void 0:r.__typename))||t.__typename;if(i===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];var s=n&&n.storeObject||t,c=S(S({},n),{typename:i,storeObject:s,readField:n&&n.readField||function(){var f=jc(arguments,s);return o.readField(f,{store:o.cache.data,variables:f.variables})}}),l,u=i&&this.getTypePolicy(i),d=u&&u.keyFn||this.config.dataIdFromObject;return Mo.withValue(!0,function(){for(;d;){var f=d(S(S({},t),s),c);if(ie(f))d=Hf(f);else{l=f;break}}}),l=l?String(l):void 0,c.keyObject?[l,c.keyObject]:[l]},e.prototype.addTypePolicies=function(t){var n=this;Object.keys(t).forEach(function(r){var o=t[r],i=o.queryType,s=o.mutationType,c=o.subscriptionType,l=We(o,["queryType","mutationType","subscriptionType"]);i&&n.setRootTypename("Query",r),s&&n.setRootTypename("Mutation",r),c&&n.setRootTypename("Subscription",r),we.call(n.toBeAdded,r)?n.toBeAdded[r].push(l):n.toBeAdded[r]=[l]})},e.prototype.updateTypePolicy=function(t,n){var r=this,o=this.getTypePolicy(t),i=n.keyFields,s=n.fields;function c(l,u){l.merge=typeof u=="function"?u:u===!0?KS:u===!1?YS:l.merge}c(o,n.merge),o.keyFn=i===!1?CR:ie(i)?Hf(i):typeof i=="function"?i:o.keyFn,s&&Object.keys(s).forEach(function(l){var u=r.getFieldPolicy(t,l,!0),d=s[l];if(typeof d=="function")u.read=d;else{var f=d.keyArgs,h=d.read,p=d.merge;u.keyFn=f===!1?QS:ie(f)?Uf(f):typeof f=="function"?f:u.keyFn,typeof h=="function"&&(u.read=h),c(u,p)}u.read&&u.merge&&(u.keyFn=u.keyFn||QS)})},e.prototype.setRootTypename=function(t,n){n===void 0&&(n=t);var r="ROOT_"+t.toUpperCase(),o=this.rootTypenamesById[r];n!==o&&(I(!o||o===t,6,t),o&&delete this.rootIdsByTypename[o],this.rootIdsByTypename[n]=r,this.rootTypenamesById[r]=n)},e.prototype.addPossibleTypes=function(t){var n=this;this.usingPossibleTypes=!0,Object.keys(t).forEach(function(r){n.getSupertypeSet(r,!0),t[r].forEach(function(o){n.getSupertypeSet(o,!0).add(r);var i=o.match(xf);(!i||i[0]!==o)&&n.fuzzySubtypes.set(o,new RegExp(o))})})},e.prototype.getTypePolicy=function(t){var n=this;if(!we.call(this.typePolicies,t)){var r=this.typePolicies[t]=Object.create(null);r.fields=Object.create(null);var o=this.supertypeMap.get(t);!o&&this.fuzzySubtypes.size&&(o=this.getSupertypeSet(t,!0),this.fuzzySubtypes.forEach(function(s,c){if(s.test(t)){var l=n.supertypeMap.get(c);l&&l.forEach(function(u){return o.add(u)})}})),o&&o.size&&o.forEach(function(s){var c=n.getTypePolicy(s),l=c.fields,u=We(c,["fields"]);Object.assign(r,u),Object.assign(r.fields,l)})}var i=this.toBeAdded[t];return i&&i.length&&i.splice(0).forEach(function(s){n.updateTypePolicy(t,s)}),this.typePolicies[t]},e.prototype.getFieldPolicy=function(t,n,r){if(t){var o=this.getTypePolicy(t).fields;return o[n]||r&&(o[n]=Object.create(null))}},e.prototype.getSupertypeSet=function(t,n){var r=this.supertypeMap.get(t);return!r&&n&&this.supertypeMap.set(t,r=new Set),r},e.prototype.fragmentMatches=function(t,n,r,o){var i=this;if(!t.typeCondition)return!0;if(!n)return!1;var s=t.typeCondition.name.value;if(n===s)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(s))for(var c=this.getSupertypeSet(n,!0),l=[c],u=function(g){var v=i.getSupertypeSet(g,!1);v&&v.size&&l.indexOf(v)<0&&l.push(v)},d=!!(r&&this.fuzzySubtypes.size),f=!1,h=0;h<l.length;++h){var p=l[h];if(p.has(s))return c.has(s)||(f&&globalThis.__DEV__!==!1&&I.warn(7,n,s),c.add(s)),!0;p.forEach(u),d&&h===l.length-1&&Oc(t.selectionSet,r,o)&&(d=!1,f=!0,this.fuzzySubtypes.forEach(function(g,v){var b=n.match(g);b&&b[0]===n&&u(v)}))}return!1},e.prototype.hasKeyArgs=function(t,n){var r=this.getFieldPolicy(t,n,!1);return!!(r&&r.keyFn)},e.prototype.getStoreFieldName=function(t){var n=t.typename,r=t.fieldName,o=this.getFieldPolicy(n,r,!1),i,s=o&&o.keyFn;if(s&&n)for(var c={typename:n,fieldName:r,field:t.field||null,variables:t.variables},l=Bf(t);s;){var u=s(l,c);if(ie(u))s=Uf(u);else{i=u||r;break}}return i===void 0&&(i=t.field?tf(t.field,t.variables):pc(r,Bf(t))),i===!1?r:r===Ot(i)?i:r+":"+i},e.prototype.readField=function(t,n){var r=t.from;if(r){var o=t.field||t.fieldName;if(o){if(t.typename===void 0){var i=n.store.getFieldValue(r,"__typename");i&&(t.typename=i)}var s=this.getStoreFieldName(t),c=Ot(s),l=n.store.getFieldValue(r,s),u=this.getFieldPolicy(t.typename,c,!1),d=u&&u.read;if(d){var f=ZS(this,r,t,n,n.store.getStorage(G(r)?r.__ref:r,s));return _o.withValue(this.cache,d,[l,f])}return l}}},e.prototype.getReadFunction=function(t,n){var r=this.getFieldPolicy(t,n,!1);return r&&r.read},e.prototype.getMergeFunction=function(t,n,r){var o=this.getFieldPolicy(t,n,!1),i=o&&o.merge;return!i&&r&&(o=this.getTypePolicy(r),i=o&&o.merge),i},e.prototype.runMergeFunction=function(t,n,r,o,i){var s=r.field,c=r.typename,l=r.merge;return l===KS?XS(o.store)(t,n):l===YS?n:(o.overwrite&&(t=void 0),l(t,n,ZS(this,void 0,{typename:c,fieldName:s.name.value,field:s,variables:o.variables},o,i||Object.create(null))))},e}();function ZS(e,t,n,r,o){var i=e.getStoreFieldName(n),s=Ot(i),c=n.variables||r.variables,l=r.store,u=l.toReference,d=l.canRead;return{args:Bf(n),field:n.field||null,fieldName:s,storeFieldName:i,variables:c,isReference:G,toReference:u,storage:o,cache:e.cache,canRead:d,readField:function(){return e.readField(jc(arguments,t,c),r)},mergeObjects:XS(r.store)}}function jc(e,t,n){var r=e[0],o=e[1],i=e.length,s;return typeof r=="string"?s={fieldName:r,from:i>1?o:t}:(s=S({},r),we.call(s,"from")||(s.from=t)),globalThis.__DEV__!==!1&&s.from===void 0&&globalThis.__DEV__!==!1&&I.warn(8,tc(Array.from(e))),s.variables===void 0&&(s.variables=n),s}function XS(e){return function(n,r){if(ie(n)||ie(r))throw ue(9);if(Z(n)&&Z(r)){var o=e.getFieldValue(n,"__typename"),i=e.getFieldValue(r,"__typename"),s=o&&i&&o!==i;if(s)return r;if(G(n)&&$n(r))return e.merge(n.__ref,r),n;if($n(n)&&G(r))return e.merge(n,r.__ref),r;if($n(n)&&$n(r))return S(S({},n),r)}return r}}function Vf(e,t,n){var r="".concat(t).concat(n),o=e.flavors.get(r);return o||e.flavors.set(r,o=e.clientOnly===t&&e.deferred===n?e:S(S({},e),{clientOnly:t,deferred:n})),o}var rb=function(){function e(t,n,r){this.cache=t,this.reader=n,this.fragments=r}return e.prototype.writeToStore=function(t,n){var r=this,o=n.query,i=n.result,s=n.dataId,c=n.variables,l=n.overwrite,u=ut(o),d=LS();c=S(S({},pr(u)),c);var f=S(S({store:t,written:Object.create(null),merge:function(p,g){return d.merge(p,g)},variables:c,varString:$e(c)},Lc(o,this.fragments)),{overwrite:!!l,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map}),h=this.processSelectionSet({result:i||Object.create(null),dataId:s,selectionSet:u.selectionSet,mergeTree:{map:new Map},context:f});if(!G(h))throw ue(12,i);return f.incomingById.forEach(function(p,g){var v=p.storeObject,b=p.mergeTree,y=p.fieldNodeSet,w=St(g);if(b&&b.map.size){var D=r.applyMerges(b,w,v,f);if(G(D))return;v=D}if(globalThis.__DEV__!==!1&&!f.overwrite){var C=Object.create(null);y.forEach(function(L){L.selectionSet&&(C[L.name.value]=!0)});var E=function(L){return C[Ot(L)]===!0},_=function(L){var B=b&&b.map.get(L);return!!(B&&B.info&&B.info.merge)};Object.keys(v).forEach(function(L){E(L)&&!_(L)&&IR(w,v,L,f.store)})}t.merge(g,v)}),t.retain(h.__ref),h},e.prototype.processSelectionSet=function(t){var n=this,r=t.dataId,o=t.result,i=t.selectionSet,s=t.context,c=t.mergeTree,l=this.cache.policies,u=Object.create(null),d=r&&l.rootTypenamesById[r]||Hi(o,i,s.fragmentMap)||r&&s.store.get(r,"__typename");typeof d=="string"&&(u.__typename=d);var f=function(){var D=jc(arguments,u,s.variables);if(G(D.from)){var C=s.incomingById.get(D.from.__ref);if(C){var E=l.readField(S(S({},D),{from:C.storeObject}),s);if(E!==void 0)return E}}return l.readField(D,s)},h=new Set;this.flattenFields(i,o,s,d).forEach(function(D,C){var E,_=je(C),L=o[_];if(h.add(C),L!==void 0){var B=l.getStoreFieldName({typename:d,fieldName:C.name.value,field:C,variables:D.variables}),se=eb(c,B),ge=n.processFieldValue(L,C,C.selectionSet?Vf(D,!1,!1):D,se),At=void 0;C.selectionSet&&(G(ge)||$n(ge))&&(At=f("__typename",ge));var Dr=l.getMergeFunction(d,C.name.value,At);Dr?se.info={field:C,typename:d,merge:Dr}:tb(c,B),u=D.merge(u,(E={},E[B]=ge,E))}else globalThis.__DEV__!==!1&&!D.clientOnly&&!D.deferred&&!gr.added(C)&&!l.getReadFunction(d,C.name.value)&&globalThis.__DEV__!==!1&&I.error(13,je(C),o)});try{var p=l.identify(o,{typename:d,selectionSet:i,fragmentMap:s.fragmentMap,storeObject:u,readField:f}),g=p[0],v=p[1];r=r||g,v&&(u=s.merge(u,v))}catch(D){if(!r)throw D}if(typeof r=="string"){var b=St(r),y=s.written[r]||(s.written[r]=[]);if(y.indexOf(i)>=0||(y.push(i),this.reader&&this.reader.isFresh(o,b,i,s)))return b;var w=s.incomingById.get(r);return w?(w.storeObject=s.merge(w.storeObject,u),w.mergeTree=$f(w.mergeTree,c),h.forEach(function(D){return w.fieldNodeSet.add(D)})):s.incomingById.set(r,{storeObject:u,mergeTree:Bc(c)?void 0:c,fieldNodeSet:h}),b}return u},e.prototype.processFieldValue=function(t,n,r,o){var i=this;return!n.selectionSet||t===null?globalThis.__DEV__!==!1?vc(t):t:ie(t)?t.map(function(s,c){var l=i.processFieldValue(s,n,r,eb(o,c));return tb(o,c),l}):this.processSelectionSet({result:t,selectionSet:n.selectionSet,context:r,mergeTree:o})},e.prototype.flattenFields=function(t,n,r,o){o===void 0&&(o=Hi(n,t,r.fragmentMap));var i=new Map,s=this.cache.policies,c=new Ve(!1);return function l(u,d){var f=c.lookup(u,d.clientOnly,d.deferred);f.visited||(f.visited=!0,u.selections.forEach(function(h){if(xt(h,r.variables)){var p=d.clientOnly,g=d.deferred;if(!(p&&g)&&Le(h.directives)&&h.directives.forEach(function(y){var w=y.name.value;if(w==="client"&&(p=!0),w==="defer"){var D=dn(y,r.variables);(!D||D.if!==!1)&&(g=!0)}}),ze(h)){var v=i.get(h);v&&(p=p&&v.clientOnly,g=g&&v.deferred),i.set(h,Vf(r,p,g))}else{var b=un(h,r.lookupFragment);if(!b&&h.kind===M.FRAGMENT_SPREAD)throw ue(14,h.name.value);b&&s.fragmentMatches(b,o,n,r.variables)&&l(b.selectionSet,Vf(r,p,g))}}}))}(t,r),i},e.prototype.applyMerges=function(t,n,r,o,i){var s,c=this;if(t.map.size&&!G(r)){var l=!ie(r)&&(G(n)||$n(n))?n:void 0,u=r;l&&!i&&(i=[G(l)?l.__ref:l]);var d,f=function(h,p){return ie(h)?typeof p=="number"?h[p]:void 0:o.store.getFieldValue(h,String(p))};t.map.forEach(function(h,p){var g=f(l,p),v=f(u,p);if(v!==void 0){i&&i.push(p);var b=c.applyMerges(h,g,v,o,i);b!==v&&(d=d||new Map,d.set(p,b)),i&&I(i.pop()===p)}}),d&&(r=ie(u)?u.slice(0):S({},u),d.forEach(function(h,p){r[p]=h}))}return t.info?this.cache.policies.runMergeFunction(n,r,t.info,o,i&&(s=o.store).getStorage.apply(s,i)):r},e}();var ob=[];function eb(e,t){var n=e.map;return n.has(t)||n.set(t,ob.pop()||{map:new Map}),n.get(t)}function $f(e,t){if(e===t||!t||Bc(t))return e;if(!e||Bc(e))return t;var n=e.info&&t.info?S(S({},e.info),t.info):e.info||t.info,r=e.map.size&&t.map.size,o=r?new Map:e.map.size?e.map:t.map,i={info:n,map:o};if(r){var s=new Set(t.map.keys());e.map.forEach(function(c,l){i.map.set(l,$f(c,t.map.get(l))),s.delete(l)}),s.forEach(function(c){i.map.set(c,$f(t.map.get(c),e.map.get(c)))})}return i}function Bc(e){return!e||!(e.info||e.map.size)}function tb(e,t){var n=e.map,r=n.get(t);r&&Bc(r)&&(ob.push(r),n.delete(t))}var nb=new Set;function IR(e,t,n,r){var o=function(f){var h=r.getFieldValue(f,n);return typeof h=="object"&&h},i=o(e);if(i){var s=o(t);if(s&&!G(i)&&!ne(i,s)&&!Object.keys(i).every(function(f){return r.getFieldValue(s,f)!==void 0})){var c=r.getFieldValue(e,"__typename")||r.getFieldValue(t,"__typename"),l=Ot(n),u="".concat(c,".").concat(l);if(!nb.has(u)){nb.add(u);var d=[];!ie(i)&&!ie(s)&&[i,s].forEach(function(f){var h=r.getFieldValue(f,"__typename");typeof h=="string"&&!d.includes(h)&&d.push(h)}),globalThis.__DEV__!==!1&&I.warn(15,l,c,d.length?"either ensure all objects of type "+d.join(" and ")+" have an ID or a custom merge function, or ":"",u,S({},i),S({},s))}}}}var os=function(e){xe(t,e);function t(n){n===void 0&&(n={});var r=e.call(this)||this;return r.watches=new Set,r.addTypenameTransform=new To(gr),r.assumeImmutableResults=!0,r.makeVar=Uc,r.txCount=0,r.config=AS(n),r.addTypename=!!r.config.addTypename,r.policies=new JS({cache:r,dataIdFromObject:r.config.dataIdFromObject,possibleTypes:r.config.possibleTypes,typePolicies:r.config.typePolicies}),r.init(),r}return t.prototype.init=function(){var n=this.data=new Ro.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=n.stump,this.resetResultCache()},t.prototype.resetResultCache=function(n){var r=this,o=this.storeReader,i=this.config.fragments;this.storeWriter=new rb(this,this.storeReader=new BS({cache:this,addTypename:this.addTypename,resultCacheMaxSize:this.config.resultCacheMaxSize,canonizeResults:Fc(this.config),canon:n?void 0:o&&o.canon,fragments:i}),i),this.maybeBroadcastWatch=pn(function(s,c){return r.broadcastWatch(s,c)},{max:this.config.resultCacheMaxSize||Re["inMemoryCache.maybeBroadcastWatch"]||5e3,makeCacheKey:function(s){var c=s.optimistic?r.optimisticData:r.data;if(br(c)){var l=s.optimistic,u=s.id,d=s.variables;return c.makeCacheKey(s.query,s.callback,$e({optimistic:l,id:u,variables:d}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach(function(s){return s.resetCaching()})},t.prototype.restore=function(n){return this.init(),n&&this.data.replace(n),this},t.prototype.extract=function(n){return n===void 0&&(n=!1),(n?this.optimisticData:this.data).extract()},t.prototype.read=function(n){var r=n.returnPartialData,o=r===void 0?!1:r;try{return this.storeReader.diffQueryAgainstStore(S(S({},n),{store:n.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:o})).result||null}catch(i){if(i instanceof ts)return null;throw i}},t.prototype.write=function(n){try{return++this.txCount,this.storeWriter.writeToStore(this.data,n)}finally{!--this.txCount&&n.broadcast!==!1&&this.broadcastWatches()}},t.prototype.modify=function(n){if(we.call(n,"id")&&!n.id)return!1;var r=n.optimistic?this.optimisticData:this.data;try{return++this.txCount,r.modify(n.id||"ROOT_QUERY",n.fields)}finally{!--this.txCount&&n.broadcast!==!1&&this.broadcastWatches()}},t.prototype.diff=function(n){return this.storeReader.diffQueryAgainstStore(S(S({},n),{store:n.optimistic?this.optimisticData:this.data,rootId:n.id||"ROOT_QUERY",config:this.config}))},t.prototype.watch=function(n){var r=this;return this.watches.size||$S(this),this.watches.add(n),n.immediate&&this.maybeBroadcastWatch(n),function(){r.watches.delete(n)&&!r.watches.size&&Ff(r),r.maybeBroadcastWatch.forget(n)}},t.prototype.gc=function(n){var r;$e.reset(),Nt.reset(),this.addTypenameTransform.resetCache(),(r=this.config.fragments)===null||r===void 0||r.resetCaches();var o=this.optimisticData.gc();return n&&!this.txCount&&(n.resetResultCache?this.resetResultCache(n.resetResultIdentities):n.resetResultIdentities&&this.storeReader.resetCanon()),o},t.prototype.retain=function(n,r){return(r?this.optimisticData:this.data).retain(n)},t.prototype.release=function(n,r){return(r?this.optimisticData:this.data).release(n)},t.prototype.identify=function(n){if(G(n))return n.__ref;try{return this.policies.identify(n)[0]}catch(r){globalThis.__DEV__!==!1&&I.warn(r)}},t.prototype.evict=function(n){if(!n.id){if(we.call(n,"id"))return!1;n=S(S({},n),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(n,this.data)}finally{!--this.txCount&&n.broadcast!==!1&&this.broadcastWatches()}},t.prototype.reset=function(n){var r=this;return this.init(),$e.reset(),n&&n.discardWatches?(this.watches.forEach(function(o){return r.maybeBroadcastWatch.forget(o)}),this.watches.clear(),Ff(this)):this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(n){var r=this.optimisticData.removeLayer(n);r!==this.optimisticData&&(this.optimisticData=r,this.broadcastWatches())},t.prototype.batch=function(n){var r=this,o=n.update,i=n.optimistic,s=i===void 0?!0:i,c=n.removeOptimistic,l=n.onWatchUpdated,u,d=function(h){var p=r,g=p.data,v=p.optimisticData;++r.txCount,h&&(r.data=r.optimisticData=h);try{return u=o(r)}finally{--r.txCount,r.data=g,r.optimisticData=v}},f=new Set;return l&&!this.txCount&&this.broadcastWatches(S(S({},n),{onWatchUpdated:function(h){return f.add(h),!1}})),typeof s=="string"?this.optimisticData=this.optimisticData.addLayer(s,d):s===!1?d(this.data):d(),typeof c=="string"&&(this.optimisticData=this.optimisticData.removeLayer(c)),l&&f.size?(this.broadcastWatches(S(S({},n),{onWatchUpdated:function(h,p){var g=l.call(this,h,p);return g!==!1&&f.delete(h),g}})),f.size&&f.forEach(function(h){return r.maybeBroadcastWatch.dirty(h)})):this.broadcastWatches(n),u},t.prototype.performTransaction=function(n,r){return this.batch({update:n,optimistic:r||r!==null})},t.prototype.transformDocument=function(n){return this.addTypenameToDocument(this.addFragmentsToDocument(n))},t.prototype.fragmentMatches=function(n,r){return this.policies.fragmentMatches(n,r)},t.prototype.lookupFragment=function(n){var r;return((r=this.config.fragments)===null||r===void 0?void 0:r.lookup(n))||null},t.prototype.broadcastWatches=function(n){var r=this;this.txCount||this.watches.forEach(function(o){return r.maybeBroadcastWatch(o,n)})},t.prototype.addFragmentsToDocument=function(n){var r=this.config.fragments;return r?r.transform(n):n},t.prototype.addTypenameToDocument=function(n){return this.addTypename?this.addTypenameTransform.transformDocument(n):n},t.prototype.broadcastWatch=function(n,r){var o=n.lastDiff,i=this.diff(n);r&&(n.optimistic&&typeof r.optimistic=="string"&&(i.fromOptimisticTransaction=!0),r.onWatchUpdated&&r.onWatchUpdated.call(this,n,i,o)===!1)||(!o||!ne(o.result,i.result))&&n.callback(n.lastDiff=i,o)},t}(Nc);globalThis.__DEV__!==!1&&(os.prototype.getMemoryInternals=Rv);var J=function(e){return e[e.loading=1]="loading",e[e.setVariables=2]="setVariables",e[e.fetchMore=3]="fetchMore",e[e.refetch=4]="refetch",e[e.poll=6]="poll",e[e.ready=7]="ready",e[e.error=8]="error",e}(J||{});function qn(e){return e?e<7:!1}var ib=Object.assign,PR=Object.hasOwnProperty,Vc=function(e){xe(t,e);function t(n){var r=n.queryManager,o=n.queryInfo,i=n.options,s=e.call(this,function(b){try{var y=b._subscription._observer;y&&!y.error&&(y.error=MR)}catch{}var w=!s.observers.size;s.observers.add(b);var D=s.last;return D&&D.error?b.error&&b.error(D.error):D&&D.result&&b.next&&b.next(s.maskResult(D.result)),w&&s.reobserve().catch(function(){}),function(){s.observers.delete(b)&&!s.observers.size&&s.tearDownQuery()}})||this;s.observers=new Set,s.subscriptions=new Set,s.queryInfo=o,s.queryManager=r,s.waitForOwnResult=zf(i.fetchPolicy),s.isTornDown=!1,s.subscribeToMore=s.subscribeToMore.bind(s),s.maskResult=s.maskResult.bind(s);var c=r.defaultOptions.watchQuery,l=c===void 0?{}:c,u=l.fetchPolicy,d=u===void 0?"cache-first":u,f=i.fetchPolicy,h=f===void 0?d:f,p=i.initialFetchPolicy,g=p===void 0?h==="standby"?d:h:p;s.options=S(S({},i),{initialFetchPolicy:g,fetchPolicy:h}),s.queryId=o.queryId||r.generateQueryId();var v=ut(s.query);return s.queryName=v&&v.name&&v.name.value,s}return Object.defineProperty(t.prototype,"query",{get:function(){return this.lastQuery||this.options.query},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"variables",{get:function(){return this.options.variables},enumerable:!1,configurable:!0}),t.prototype.result=function(){var n=this;return new Promise(function(r,o){var i={next:function(c){r(c),n.observers.delete(i),n.observers.size||n.queryManager.removeQuery(n.queryId),setTimeout(function(){s.unsubscribe()},0)},error:o},s=n.subscribe(i)})},t.prototype.resetDiff=function(){this.queryInfo.resetDiff()},t.prototype.getCurrentFullResult=function(n){n===void 0&&(n=!0);var r=this.getLastResult(!0),o=this.queryInfo.networkStatus||r&&r.networkStatus||J.ready,i=S(S({},r),{loading:qn(o),networkStatus:o}),s=this.options.fetchPolicy,c=s===void 0?"cache-first":s;if(!(zf(c)||this.queryManager.getDocumentInfo(this.query).hasForcedResolvers))if(this.waitForOwnResult)this.queryInfo.updateWatch();else{var l=this.queryInfo.getDiff();(l.complete||this.options.returnPartialData)&&(i.data=l.result),ne(i.data,{})&&(i.data=void 0),l.complete?(delete i.partial,l.complete&&i.networkStatus===J.loading&&(c==="cache-first"||c==="cache-only")&&(i.networkStatus=J.ready,i.loading=!1)):i.partial=!0,globalThis.__DEV__!==!1&&!l.complete&&!this.options.partialRefetch&&!i.loading&&!i.data&&!i.error&&Wf(l.missing)}return n&&this.updateLastResult(i),i},t.prototype.getCurrentResult=function(n){return n===void 0&&(n=!0),this.maskResult(this.getCurrentFullResult(n))},t.prototype.isDifferentFromLastResult=function(n,r){if(!this.last)return!0;var o=this.queryManager.getDocumentInfo(this.query),i=this.queryManager.dataMasking,s=i?o.nonReactiveQuery:this.query,c=i||o.hasNonreactiveDirective?!Mc(s,this.last.result,n,this.variables):!ne(this.last.result,n);return c||r&&!ne(this.last.variables,r)},t.prototype.getLast=function(n,r){var o=this.last;if(o&&o[n]&&(!r||ne(o.variables,this.variables)))return o[n]},t.prototype.getLastResult=function(n){return this.getLast("result",n)},t.prototype.getLastError=function(n){return this.getLast("error",n)},t.prototype.resetLastResults=function(){delete this.last,this.isTornDown=!1},t.prototype.resetQueryStoreErrors=function(){this.queryManager.resetErrors(this.queryId)},t.prototype.refetch=function(n){var r,o={pollInterval:0},i=this.options.fetchPolicy;if(i==="cache-and-network"?o.fetchPolicy=i:i==="no-cache"?o.fetchPolicy="no-cache":o.fetchPolicy="network-only",globalThis.__DEV__!==!1&&n&&PR.call(n,"variables")){var s=Ui(this.query),c=s.variableDefinitions;(!c||!c.some(function(l){return l.variable.name.value==="variables"}))&&globalThis.__DEV__!==!1&&I.warn(21,n,((r=s.name)===null||r===void 0?void 0:r.value)||s)}return n&&!ne(this.options.variables,n)&&(o.variables=this.options.variables=S(S({},this.options.variables),n)),this.queryInfo.resetLastWrite(),this.reobserve(o,J.refetch)},t.prototype.fetchMore=function(n){var r=this,o=S(S({},n.query?n:S(S(S(S({},this.options),{query:this.options.query}),n),{variables:S(S({},this.options.variables),n.variables)})),{fetchPolicy:"no-cache"});o.query=this.transformDocument(o.query);var i=this.queryManager.generateQueryId();this.lastQuery=n.query?this.transformDocument(this.options.query):o.query;var s=this.queryInfo,c=s.networkStatus;s.networkStatus=J.fetchMore,o.notifyOnNetworkStatusChange&&this.observe();var l=new Set,u=n?.updateQuery,d=this.options.fetchPolicy!=="no-cache";return d||I(u,22),this.queryManager.fetchQuery(i,o,J.fetchMore).then(function(f){if(r.queryManager.removeQuery(i),s.networkStatus===J.fetchMore&&(s.networkStatus=c),d)r.queryManager.cache.batch({update:function(g){var v=n.updateQuery;v?g.updateQuery({query:r.query,variables:r.variables,returnPartialData:!0,optimistic:!1},function(b){return v(b,{fetchMoreResult:f.data,variables:o.variables})}):g.writeQuery({query:o.query,variables:o.variables,data:f.data})},onWatchUpdated:function(g){l.add(g.query)}});else{var h=r.getLast("result"),p=u(h.data,{fetchMoreResult:f.data,variables:o.variables});r.reportResult(S(S({},h),{data:p}),r.variables)}return r.maskResult(f)}).finally(function(){d&&!l.has(r.query)&&qf(r)})},t.prototype.subscribeToMore=function(n){var r=this,o=this.queryManager.startGraphQLSubscription({query:n.document,variables:n.variables,context:n.context}).subscribe({next:function(i){var s=n.updateQuery;s&&r.updateQuery(function(c,l){var u=l.variables;return s(c,{subscriptionData:i,variables:u})})},error:function(i){if(n.onError){n.onError(i);return}globalThis.__DEV__!==!1&&I.error(23,i)}});return this.subscriptions.add(o),function(){r.subscriptions.delete(o)&&o.unsubscribe()}},t.prototype.setOptions=function(n){return this.reobserve(n)},t.prototype.silentSetOptions=function(n){var r=Qt(this.options,n||{});ib(this.options,r)},t.prototype.setVariables=function(n){return ne(this.variables,n)?this.observers.size?this.result():Promise.resolve():(this.options.variables=n,this.observers.size?this.reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:n},J.setVariables):Promise.resolve())},t.prototype.updateQuery=function(n){var r=this.queryManager,o=r.cache.diff({query:this.options.query,variables:this.variables,returnPartialData:!0,optimistic:!1}).result,i=n(o,{variables:this.variables});i&&(r.cache.writeQuery({query:this.options.query,data:i,variables:this.variables}),r.broadcastQueries())},t.prototype.startPolling=function(n){this.options.pollInterval=n,this.updatePolling()},t.prototype.stopPolling=function(){this.options.pollInterval=0,this.updatePolling()},t.prototype.applyNextFetchPolicy=function(n,r){if(r.nextFetchPolicy){var o=r.fetchPolicy,i=o===void 0?"cache-first":o,s=r.initialFetchPolicy,c=s===void 0?i:s;i==="standby"||(typeof r.nextFetchPolicy=="function"?r.fetchPolicy=r.nextFetchPolicy(i,{reason:n,options:r,observable:this,initialFetchPolicy:c}):n==="variables-changed"?r.fetchPolicy=c:r.fetchPolicy=r.nextFetchPolicy)}return r.fetchPolicy},t.prototype.fetch=function(n,r,o){return this.queryManager.setObservableQuery(this),this.queryManager.fetchConcastWithInfo(this.queryId,n,r,o)},t.prototype.updatePolling=function(){var n=this;if(!this.queryManager.ssrMode){var r=this,o=r.pollingInfo,i=r.options.pollInterval;if(!i||!this.hasObservers()){o&&(clearTimeout(o.timeout),delete this.pollingInfo);return}if(!(o&&o.interval===i)){I(i,24);var s=o||(this.pollingInfo={});s.interval=i;var c=function(){var u,d;n.pollingInfo&&(!qn(n.queryInfo.networkStatus)&&!(!((d=(u=n.options).skipPollAttempt)===null||d===void 0)&&d.call(u))?n.reobserve({fetchPolicy:n.options.initialFetchPolicy==="no-cache"?"no-cache":"network-only"},J.poll).then(l,l):l())},l=function(){var u=n.pollingInfo;u&&(clearTimeout(u.timeout),u.timeout=setTimeout(c,u.interval))};l()}}},t.prototype.updateLastResult=function(n,r){r===void 0&&(r=this.variables);var o=this.getLastError();return o&&this.last&&!ne(r,this.last.variables)&&(o=void 0),this.last=S({result:this.queryManager.assumeImmutableResults?n:vc(n),variables:r},o?{error:o}:null)},t.prototype.reobserveAsConcast=function(n,r){var o=this;this.isTornDown=!1;var i=r===J.refetch||r===J.fetchMore||r===J.poll,s=this.options.variables,c=this.options.fetchPolicy,l=Qt(this.options,n||{}),u=i?l:ib(this.options,l),d=this.transformDocument(u.query);this.lastQuery=d,i||(this.updatePolling(),n&&n.variables&&!ne(n.variables,s)&&u.fetchPolicy!=="standby"&&(u.fetchPolicy===c||typeof u.nextFetchPolicy=="function")&&(this.applyNextFetchPolicy("variables-changed",u),r===void 0&&(r=J.setVariables))),this.waitForOwnResult&&(this.waitForOwnResult=zf(u.fetchPolicy));var f=function(){o.concast===g&&(o.waitForOwnResult=!1)},h=u.variables&&S({},u.variables),p=this.fetch(u,r,d),g=p.concast,v=p.fromLink,b={next:function(y){ne(o.variables,h)&&(f(),o.reportResult(y,h))},error:function(y){ne(o.variables,h)&&(Ic(y)||(y=new mn({networkError:y})),f(),o.reportError(y,h))}};return!i&&(v||!this.concast)&&(this.concast&&this.observer&&this.concast.removeObserver(this.observer),this.concast=g,this.observer=b),g.addObserver(b),g},t.prototype.reobserve=function(n,r){return vf(this.reobserveAsConcast(n,r).promise.then(this.maskResult))},t.prototype.resubscribeAfterError=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=this.last;this.resetLastResults();var i=this.subscribe.apply(this,n);return this.last=o,i},t.prototype.observe=function(){this.reportResult(this.getCurrentFullResult(!1),this.variables)},t.prototype.reportResult=function(n,r){var o=this.getLastError(),i=this.isDifferentFromLastResult(n,r);(o||!n.partial||this.options.returnPartialData)&&this.updateLastResult(n,r),(o||i)&&vr(this.observers,"next",this.maskResult(n))},t.prototype.reportError=function(n,r){var o=S(S({},this.getLastResult()),{error:n,errors:n.graphQLErrors,networkStatus:J.error,loading:!1});this.updateLastResult(o,r),vr(this.observers,"error",this.last.error=n)},t.prototype.hasObservers=function(){return this.observers.size>0},t.prototype.tearDownQuery=function(){this.isTornDown||(this.concast&&this.observer&&(this.concast.removeObserver(this.observer),delete this.concast,delete this.observer),this.stopPolling(),this.subscriptions.forEach(function(n){return n.unsubscribe()}),this.subscriptions.clear(),this.queryManager.stopQuery(this.queryId),this.observers.clear(),this.isTornDown=!0)},t.prototype.transformDocument=function(n){return this.queryManager.transform(n)},t.prototype.maskResult=function(n){return n&&"data"in n?S(S({},n),{data:this.queryManager.maskOperation({document:this.query,data:n.data,fetchPolicy:this.options.fetchPolicy,id:this.queryId})}):n},t}($);bc(Vc);function qf(e){var t=e.options,n=t.fetchPolicy,r=t.nextFetchPolicy;return n==="cache-and-network"||n==="network-only"?e.reobserve({fetchPolicy:"cache-first",nextFetchPolicy:function(o,i){return this.nextFetchPolicy=r,typeof this.nextFetchPolicy=="function"?this.nextFetchPolicy(o,i):n}}):e.reobserve()}function MR(e){globalThis.__DEV__!==!1&&I.error(25,e.message,e.stack)}function Wf(e){globalThis.__DEV__!==!1&&e&&globalThis.__DEV__!==!1&&I.debug(26,e)}function zf(e){return e==="network-only"||e==="no-cache"||e==="standby"}var ko=new(ct?WeakMap:Map);function Gf(e,t){var n=e[t];typeof n=="function"&&(e[t]=function(){return ko.set(e,(ko.get(e)+1)%1e15),n.apply(this,arguments)})}function sb(e){e.notifyTimeout&&(clearTimeout(e.notifyTimeout),e.notifyTimeout=void 0)}var $c=function(){function e(t,n){n===void 0&&(n=t.generateQueryId()),this.queryId=n,this.listeners=new Set,this.document=null,this.lastRequestId=1,this.stopped=!1,this.dirty=!1,this.observableQuery=null;var r=this.cache=t.cache;ko.has(r)||(ko.set(r,0),Gf(r,"evict"),Gf(r,"modify"),Gf(r,"reset"))}return e.prototype.init=function(t){var n=t.networkStatus||J.loading;return this.variables&&this.networkStatus!==J.loading&&!ne(this.variables,t.variables)&&(n=J.setVariables),ne(t.variables,this.variables)||(this.lastDiff=void 0),Object.assign(this,{document:t.document,variables:t.variables,networkError:null,graphQLErrors:this.graphQLErrors||[],networkStatus:n}),t.observableQuery&&this.setObservableQuery(t.observableQuery),t.lastRequestId&&(this.lastRequestId=t.lastRequestId),this},e.prototype.reset=function(){sb(this),this.dirty=!1},e.prototype.resetDiff=function(){this.lastDiff=void 0},e.prototype.getDiff=function(){var t=this.getDiffOptions();if(this.lastDiff&&ne(t,this.lastDiff.options))return this.lastDiff.diff;this.updateWatch(this.variables);var n=this.observableQuery;if(n&&n.options.fetchPolicy==="no-cache")return{complete:!1};var r=this.cache.diff(t);return this.updateLastDiff(r,t),r},e.prototype.updateLastDiff=function(t,n){this.lastDiff=t?{diff:t,options:n||this.getDiffOptions()}:void 0},e.prototype.getDiffOptions=function(t){var n;return t===void 0&&(t=this.variables),{query:this.document,variables:t,returnPartialData:!0,optimistic:!0,canonizeResults:(n=this.observableQuery)===null||n===void 0?void 0:n.options.canonizeResults}},e.prototype.setDiff=function(t){var n=this,r,o=this.lastDiff&&this.lastDiff.diff;t&&!t.complete&&(!((r=this.observableQuery)===null||r===void 0)&&r.getLastError())||(this.updateLastDiff(t),!this.dirty&&!ne(o&&o.result,t&&t.result)&&(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout(function(){return n.notify()},0))))},e.prototype.setObservableQuery=function(t){var n=this;t!==this.observableQuery&&(this.oqListener&&this.listeners.delete(this.oqListener),this.observableQuery=t,t?(t.queryInfo=this,this.listeners.add(this.oqListener=function(){var r=n.getDiff();r.fromOptimisticTransaction?t.observe():qf(t)})):delete this.oqListener)},e.prototype.notify=function(){var t=this;sb(this),this.shouldNotify()&&this.listeners.forEach(function(n){return n(t)}),this.dirty=!1},e.prototype.shouldNotify=function(){if(!this.dirty||!this.listeners.size)return!1;if(qn(this.networkStatus)&&this.observableQuery){var t=this.observableQuery.options.fetchPolicy;if(t!=="cache-only"&&t!=="cache-and-network")return!1}return!0},e.prototype.stop=function(){if(!this.stopped){this.stopped=!0,this.reset(),this.cancel(),this.cancel=e.prototype.cancel;var t=this.observableQuery;t&&t.stopPolling()}},e.prototype.cancel=function(){},e.prototype.updateWatch=function(t){var n=this;t===void 0&&(t=this.variables);var r=this.observableQuery;if(!(r&&r.options.fetchPolicy==="no-cache")){var o=S(S({},this.getDiffOptions(t)),{watcher:this,callback:function(i){return n.setDiff(i)}});(!this.lastWatch||!ne(o,this.lastWatch))&&(this.cancel(),this.cancel=this.cache.watch(this.lastWatch=o))}},e.prototype.resetLastWrite=function(){this.lastWrite=void 0},e.prototype.shouldWrite=function(t,n){var r=this.lastWrite;return!(r&&r.dmCount===ko.get(this.cache)&&ne(n,r.variables)&&ne(t.data,r.result.data))},e.prototype.markResult=function(t,n,r,o){var i=this,s=new Ze,c=Le(t.errors)?t.errors.slice(0):[];if(this.reset(),"incremental"in t&&Le(t.incremental)){var l=Dc(this.getDiff().result,t);t.data=l}else if("hasNext"in t&&t.hasNext){var u=this.getDiff();t.data=s.merge(u.result,t.data)}this.graphQLErrors=c,r.fetchPolicy==="no-cache"?this.updateLastDiff({result:t.data,complete:!0},this.getDiffOptions(r.variables)):o!==0&&(zc(t,r.errorPolicy)?this.cache.performTransaction(function(d){if(i.shouldWrite(t,r.variables))d.writeQuery({query:n,data:t.data,variables:r.variables,overwrite:o===1}),i.lastWrite={result:t,variables:r.variables,dmCount:ko.get(i.cache)};else if(i.lastDiff&&i.lastDiff.diff.complete){t.data=i.lastDiff.diff.result;return}var f=i.getDiffOptions(r.variables),h=d.diff(f);!i.stopped&&ne(i.variables,r.variables)&&i.updateWatch(r.variables),i.updateLastDiff(h,f),h.complete&&(t.data=h.result)}):this.lastWrite=void 0)},e.prototype.markReady=function(){return this.networkError=null,this.networkStatus=J.ready},e.prototype.markError=function(t){return this.networkStatus=J.error,this.lastWrite=void 0,this.reset(),t.graphQLErrors&&(this.graphQLErrors=t.graphQLErrors),t.networkError&&(this.networkError=t.networkError),t},e}();function zc(e,t){t===void 0&&(t="none");var n=t==="ignore"||t==="all",r=!Io(e);return!r&&n&&e.data&&(r=!0),r}var RR=Object.prototype.hasOwnProperty,ab=Object.create(null),cb=function(){function e(t){var n=this;this.clientAwareness={},this.queries=new Map,this.fetchCancelFns=new Map,this.transformCache=new So(Re["queryManager.getDocumentInfo"]||2e3),this.queryIdCounter=1,this.requestIdCounter=1,this.mutationIdCounter=1,this.inFlightLinkObservables=new Ve(!1),this.noCacheWarningsByQueryId=new Set;var r=new To(function(i){return n.cache.transformDocument(i)},{cache:!1});this.cache=t.cache,this.link=t.link,this.defaultOptions=t.defaultOptions,this.queryDeduplication=t.queryDeduplication,this.clientAwareness=t.clientAwareness,this.localState=t.localState,this.ssrMode=t.ssrMode,this.assumeImmutableResults=t.assumeImmutableResults,this.dataMasking=t.dataMasking;var o=t.documentTransform;this.documentTransform=o?r.concat(o).concat(r):r,this.defaultContext=t.defaultContext||Object.create(null),(this.onBroadcast=t.onBroadcast)&&(this.mutationStore=Object.create(null))}return e.prototype.stop=function(){var t=this;this.queries.forEach(function(n,r){t.stopQueryNoBroadcast(r)}),this.cancelPendingFetches(ue(27))},e.prototype.cancelPendingFetches=function(t){this.fetchCancelFns.forEach(function(n){return n(t)}),this.fetchCancelFns.clear()},e.prototype.mutate=function(t){return Xe(this,arguments,void 0,function(n){var r,o,i,s,c,l,u,d=n.mutation,f=n.variables,h=n.optimisticResponse,p=n.updateQueries,g=n.refetchQueries,v=g===void 0?[]:g,b=n.awaitRefetchQueries,y=b===void 0?!1:b,w=n.update,D=n.onQueryUpdated,C=n.fetchPolicy,E=C===void 0?((l=this.defaultOptions.mutate)===null||l===void 0?void 0:l.fetchPolicy)||"network-only":C,_=n.errorPolicy,L=_===void 0?((u=this.defaultOptions.mutate)===null||u===void 0?void 0:u.errorPolicy)||"none":_,B=n.keepRootFields,se=n.context;return Tt(this,function(ge){switch(ge.label){case 0:return I(d,28),I(E==="network-only"||E==="no-cache",29),r=this.generateMutationId(),d=this.cache.transformForLink(this.transform(d)),o=this.getDocumentInfo(d).hasClientExports,f=this.getVariables(d,f),o?[4,this.localState.addExportedVariables(d,f,se)]:[3,2];case 1:f=ge.sent(),ge.label=2;case 2:return i=this.mutationStore&&(this.mutationStore[r]={mutation:d,variables:f,loading:!0,error:null}),s=h&&this.markMutationOptimistic(h,{mutationId:r,document:d,variables:f,fetchPolicy:E,errorPolicy:L,context:se,updateQueries:p,update:w,keepRootFields:B}),this.broadcastQueries(),c=this,[2,new Promise(function(At,Dr){return Sc(c.getObservableFromLink(d,S(S({},se),{optimisticResponse:s?h:void 0}),f,{},!1),function(Oe){if(Io(Oe)&&L==="none")throw new mn({graphQLErrors:wc(Oe)});i&&(i.loading=!1,i.error=null);var gn=S({},Oe);return typeof v=="function"&&(v=v(gn)),L==="ignore"&&Io(gn)&&delete gn.errors,c.markMutationResult({mutationId:r,result:gn,document:d,variables:f,fetchPolicy:E,errorPolicy:L,context:se,update:w,updateQueries:p,awaitRefetchQueries:y,refetchQueries:v,removeOptimistic:s?r:void 0,onQueryUpdated:D,keepRootFields:B})}).subscribe({next:function(Oe){c.broadcastQueries(),(!("hasNext"in Oe)||Oe.hasNext===!1)&&At(S(S({},Oe),{data:c.maskOperation({document:d,data:Oe.data,fetchPolicy:E,id:r})}))},error:function(Oe){i&&(i.loading=!1,i.error=Oe),s&&c.cache.removeOptimistic(r),c.broadcastQueries(),Dr(Oe instanceof mn?Oe:new mn({networkError:Oe}))}})})]}})})},e.prototype.markMutationResult=function(t,n){var r=this;n===void 0&&(n=this.cache);var o=t.result,i=[],s=t.fetchPolicy==="no-cache";if(!s&&zc(o,t.errorPolicy)){if(Vn(o)||i.push({result:o.data,dataId:"ROOT_MUTATION",query:t.document,variables:t.variables}),Vn(o)&&Le(o.incremental)){var c=n.diff({id:"ROOT_MUTATION",query:this.getDocumentInfo(t.document).asQuery,variables:t.variables,optimistic:!1,returnPartialData:!0}),l=void 0;c.result&&(l=Dc(c.result,o)),typeof l<"u"&&(o.data=l,i.push({result:l,dataId:"ROOT_MUTATION",query:t.document,variables:t.variables}))}var u=t.updateQueries;u&&this.queries.forEach(function(f,h){var p=f.observableQuery,g=p&&p.queryName;if(!(!g||!RR.call(u,g))){var v=u[g],b=r.queries.get(h),y=b.document,w=b.variables,D=n.diff({query:y,variables:w,returnPartialData:!0,optimistic:!1}),C=D.result,E=D.complete;if(E&&C){var _=v(C,{mutationResult:o,queryName:y&&Un(y)||void 0,queryVariables:w});_&&i.push({result:_,dataId:"ROOT_QUERY",query:y,variables:w})}}})}if(i.length>0||(t.refetchQueries||"").length>0||t.update||t.onQueryUpdated||t.removeOptimistic){var d=[];if(this.refetchQueries({updateCache:function(f){s||i.forEach(function(v){return f.write(v)});var h=t.update,p=!uS(o)||Vn(o)&&!o.hasNext;if(h){if(!s){var g=f.diff({id:"ROOT_MUTATION",query:r.getDocumentInfo(t.document).asQuery,variables:t.variables,optimistic:!1,returnPartialData:!0});g.complete&&(o=S(S({},o),{data:g.result}),"incremental"in o&&delete o.incremental,"hasNext"in o&&delete o.hasNext)}p&&h(f,o,{context:t.context,variables:t.variables})}!s&&!t.keepRootFields&&p&&f.modify({id:"ROOT_MUTATION",fields:function(v,b){var y=b.fieldName,w=b.DELETE;return y==="__typename"?v:w}})},include:t.refetchQueries,optimistic:!1,removeOptimistic:t.removeOptimistic,onQueryUpdated:t.onQueryUpdated||null}).forEach(function(f){return d.push(f)}),t.awaitRefetchQueries||t.onQueryUpdated)return Promise.all(d).then(function(){return o})}return Promise.resolve(o)},e.prototype.markMutationOptimistic=function(t,n){var r=this,o=typeof t=="function"?t(n.variables,{IGNORE:ab}):t;return o===ab?!1:(this.cache.recordOptimisticTransaction(function(i){try{r.markMutationResult(S(S({},n),{result:{data:o}}),i)}catch(s){globalThis.__DEV__!==!1&&I.error(s)}},n.mutationId),!0)},e.prototype.fetchQuery=function(t,n,r){return this.fetchConcastWithInfo(t,n,r).concast.promise},e.prototype.getQueryStore=function(){var t=Object.create(null);return this.queries.forEach(function(n,r){t[r]={variables:n.variables,networkStatus:n.networkStatus,networkError:n.networkError,graphQLErrors:n.graphQLErrors}}),t},e.prototype.resetErrors=function(t){var n=this.queries.get(t);n&&(n.networkError=void 0,n.graphQLErrors=[])},e.prototype.transform=function(t){return this.documentTransform.transformDocument(t)},e.prototype.getDocumentInfo=function(t){var n=this.transformCache;if(!n.has(t)){var r={hasClientExports:qd(t),hasForcedResolvers:this.localState.shouldForceResolvers(t),hasNonreactiveDirective:ln(["nonreactive"],t),nonReactiveQuery:cf(t),clientQuery:this.localState.clientQuery(t),serverQuery:mc([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"},{name:"unmask"}],t),defaultVars:pr(ut(t)),asQuery:S(S({},t),{definitions:t.definitions.map(function(o){return o.kind==="OperationDefinition"&&o.operation!=="query"?S(S({},o),{operation:"query"}):o})})};n.set(t,r)}return n.get(t)},e.prototype.getVariables=function(t,n){return S(S({},this.getDocumentInfo(t).defaultVars),n)},e.prototype.watchQuery=function(t){var n=this.transform(t.query);t=S(S({},t),{variables:this.getVariables(n,t.variables)}),typeof t.notifyOnNetworkStatusChange>"u"&&(t.notifyOnNetworkStatusChange=!1);var r=new $c(this),o=new Vc({queryManager:this,queryInfo:r,options:t});return o.lastQuery=n,this.queries.set(o.queryId,r),r.init({document:n,observableQuery:o,variables:o.variables}),o},e.prototype.query=function(t,n){var r=this;n===void 0&&(n=this.generateQueryId()),I(t.query,30),I(t.query.kind==="Document",31),I(!t.returnPartialData,32),I(!t.pollInterval,33);var o=this.transform(t.query);return this.fetchQuery(n,S(S({},t),{query:o})).then(function(i){return i&&S(S({},i),{data:r.maskOperation({document:o,data:i.data,fetchPolicy:t.fetchPolicy,id:n})})}).finally(function(){return r.stopQuery(n)})},e.prototype.generateQueryId=function(){return String(this.queryIdCounter++)},e.prototype.generateRequestId=function(){return this.requestIdCounter++},e.prototype.generateMutationId=function(){return String(this.mutationIdCounter++)},e.prototype.stopQueryInStore=function(t){this.stopQueryInStoreNoBroadcast(t),this.broadcastQueries()},e.prototype.stopQueryInStoreNoBroadcast=function(t){var n=this.queries.get(t);n&&n.stop()},e.prototype.clearStore=function(t){return t===void 0&&(t={discardWatches:!0}),this.cancelPendingFetches(ue(34)),this.queries.forEach(function(n){n.observableQuery?n.networkStatus=J.loading:n.stop()}),this.mutationStore&&(this.mutationStore=Object.create(null)),this.cache.reset(t)},e.prototype.getObservableQueries=function(t){var n=this;t===void 0&&(t="active");var r=new Map,o=new Map,i=new Map,s=new Set;return Array.isArray(t)&&t.forEach(function(c){if(typeof c=="string")o.set(c,c),i.set(c,!1);else if(ef(c)){var l=Nt(n.transform(c));o.set(l,Un(c)),i.set(l,!1)}else Z(c)&&c.query&&s.add(c)}),this.queries.forEach(function(c,l){var u=c.observableQuery,d=c.document;if(u){if(t==="all"){r.set(l,u);return}var f=u.queryName,h=u.options.fetchPolicy;if(h==="standby"||t==="active"&&!u.hasObservers())return;(t==="active"||f&&i.has(f)||d&&i.has(Nt(d)))&&(r.set(l,u),f&&i.set(f,!0),d&&i.set(Nt(d),!0))}}),s.size&&s.forEach(function(c){var l=ki("legacyOneTimeQuery"),u=n.getQuery(l).init({document:c.query,variables:c.variables}),d=new Vc({queryManager:n,queryInfo:u,options:S(S({},c),{fetchPolicy:"network-only"})});I(d.queryId===l),u.setObservableQuery(d),r.set(l,d)}),globalThis.__DEV__!==!1&&i.size&&i.forEach(function(c,l){if(!c){var u=o.get(l);u?globalThis.__DEV__!==!1&&I.warn(35,u):globalThis.__DEV__!==!1&&I.warn(36)}}),r},e.prototype.reFetchObservableQueries=function(t){var n=this;t===void 0&&(t=!1);var r=[];return this.getObservableQueries(t?"all":"active").forEach(function(o,i){var s=o.options.fetchPolicy;o.resetLastResults(),(t||s!=="standby"&&s!=="cache-only")&&r.push(o.refetch()),n.getQuery(i).setDiff(null)}),this.broadcastQueries(),Promise.all(r)},e.prototype.setObservableQuery=function(t){this.getQuery(t.queryId).setObservableQuery(t)},e.prototype.startGraphQLSubscription=function(t){var n=this,r=t.query,o=t.variables,i=t.fetchPolicy,s=t.errorPolicy,c=s===void 0?"none":s,l=t.context,u=l===void 0?{}:l,d=t.extensions,f=d===void 0?{}:d;r=this.transform(r),o=this.getVariables(r,o);var h=function(g){return n.getObservableFromLink(r,u,g,f).map(function(v){i!=="no-cache"&&(zc(v,c)&&n.cache.write({query:r,result:v.data,dataId:"ROOT_SUBSCRIPTION",variables:g}),n.broadcastQueries());var b=Io(v),y=pS(v);if(b||y){var w={};if(b&&(w.graphQLErrors=v.errors),y&&(w.protocolErrors=v.extensions[Yi]),c==="none"||y)throw new mn(w)}return c==="ignore"&&delete v.errors,v})};if(this.getDocumentInfo(r).hasClientExports){var p=this.localState.addExportedVariables(r,o,u).then(h);return new $(function(g){var v=null;return p.then(function(b){return v=b.subscribe(g)},g.error),function(){return v&&v.unsubscribe()}})}return h(o)},e.prototype.stopQuery=function(t){this.stopQueryNoBroadcast(t),this.broadcastQueries()},e.prototype.stopQueryNoBroadcast=function(t){this.stopQueryInStoreNoBroadcast(t),this.removeQuery(t)},e.prototype.removeQuery=function(t){this.fetchCancelFns.delete(t),this.queries.has(t)&&(this.getQuery(t).stop(),this.queries.delete(t))},e.prototype.broadcastQueries=function(){this.onBroadcast&&this.onBroadcast(),this.queries.forEach(function(t){return t.notify()})},e.prototype.getLocalState=function(){return this.localState},e.prototype.getObservableFromLink=function(t,n,r,o,i){var s=this,c;i===void 0&&(i=(c=n?.queryDeduplication)!==null&&c!==void 0?c:this.queryDeduplication);var l,u=this.getDocumentInfo(t),d=u.serverQuery,f=u.clientQuery;if(d){var h=this,p=h.inFlightLinkObservables,g=h.link,v={query:d,variables:r,operationName:Un(d)||void 0,context:this.prepareContext(S(S({},n),{forceFetch:!i})),extensions:o};if(n=v.context,i){var b=Nt(d),y=$e(r),w=p.lookup(b,y);if(l=w.observable,!l){var D=new Sr([Po(g,v)]);l=w.observable=D,D.beforeNext(function(){p.remove(b,y)})}}else l=new Sr([Po(g,v)])}else l=new Sr([$.of({data:{}})]),n=this.prepareContext(n);return f&&(l=Sc(l,function(C){return s.localState.runResolvers({document:f,remoteResult:C,context:n,variables:r})})),l},e.prototype.getResultsFromLink=function(t,n,r){var o=t.lastRequestId=this.generateRequestId(),i=this.cache.transformForLink(r.query);return Sc(this.getObservableFromLink(i,r.context,r.variables),function(s){var c=wc(s),l=c.length>0,u=r.errorPolicy;if(o>=t.lastRequestId){if(l&&u==="none")throw t.markError(new mn({graphQLErrors:c}));t.markResult(s,i,r,n),t.markReady()}var d={data:s.data,loading:!1,networkStatus:J.ready};return l&&u==="none"&&(d.data=void 0),l&&u!=="ignore"&&(d.errors=c,d.networkStatus=J.error),d},function(s){var c=Ic(s)?s:new mn({networkError:s});throw o>=t.lastRequestId&&t.markError(c),c})},e.prototype.fetchConcastWithInfo=function(t,n,r,o){var i=this;r===void 0&&(r=J.loading),o===void 0&&(o=n.query);var s=this.getVariables(o,n.variables),c=this.getQuery(t),l=this.defaultOptions.watchQuery,u=n.fetchPolicy,d=u===void 0?l&&l.fetchPolicy||"cache-first":u,f=n.errorPolicy,h=f===void 0?l&&l.errorPolicy||"none":f,p=n.returnPartialData,g=p===void 0?!1:p,v=n.notifyOnNetworkStatusChange,b=v===void 0?!1:v,y=n.context,w=y===void 0?{}:y,D=Object.assign({},n,{query:o,variables:s,fetchPolicy:d,errorPolicy:h,returnPartialData:g,notifyOnNetworkStatusChange:b,context:w}),C=function(se){D.variables=se;var ge=i.fetchQueryByPolicy(c,D,r);return D.fetchPolicy!=="standby"&&ge.sources.length>0&&c.observableQuery&&c.observableQuery.applyNextFetchPolicy("after-fetch",n),ge},E=function(){return i.fetchCancelFns.delete(t)};this.fetchCancelFns.set(t,function(se){E(),setTimeout(function(){return _.cancel(se)})});var _,L;if(this.getDocumentInfo(D.query).hasClientExports)_=new Sr(this.localState.addExportedVariables(D.query,D.variables,D.context).then(C).then(function(se){return se.sources})),L=!0;else{var B=C(D.variables);L=B.fromLink,_=new Sr(B.sources)}return _.promise.then(E,E),{concast:_,fromLink:L}},e.prototype.refetchQueries=function(t){var n=this,r=t.updateCache,o=t.include,i=t.optimistic,s=i===void 0?!1:i,c=t.removeOptimistic,l=c===void 0?s?ki("refetchQueries"):void 0:c,u=t.onQueryUpdated,d=new Map;o&&this.getObservableQueries(o).forEach(function(h,p){d.set(p,{oq:h,lastDiff:n.getQuery(p).getDiff()})});var f=new Map;return r&&this.cache.batch({update:r,optimistic:s&&l||!1,removeOptimistic:l,onWatchUpdated:function(h,p,g){var v=h.watcher instanceof $c&&h.watcher.observableQuery;if(v){if(u){d.delete(v.queryId);var b=u(v,p,g);return b===!0&&(b=v.refetch()),b!==!1&&f.set(v,b),b}u!==null&&d.set(v.queryId,{oq:v,lastDiff:g,diff:p})}}}),d.size&&d.forEach(function(h,p){var g=h.oq,v=h.lastDiff,b=h.diff,y;if(u){if(!b){var w=g.queryInfo;w.reset(),b=w.getDiff()}y=u(g,b,v)}(!u||y===!0)&&(y=g.refetch()),y!==!1&&f.set(g,y),p.indexOf("legacyOneTimeQuery")>=0&&n.stopQueryNoBroadcast(p)}),l&&this.cache.removeOptimistic(l),f},e.prototype.maskOperation=function(t){var n,r,o,i=t.document,s=t.data;if(globalThis.__DEV__!==!1){var c=t.fetchPolicy,l=t.id,u=(n=ut(i))===null||n===void 0?void 0:n.operation,d=((r=u?.[0])!==null&&r!==void 0?r:"o")+l;this.dataMasking&&c==="no-cache"&&!Kd(i)&&!this.noCacheWarningsByQueryId.has(d)&&(this.noCacheWarningsByQueryId.add(d),globalThis.__DEV__!==!1&&I.warn(37,(o=Un(i))!==null&&o!==void 0?o:"Unnamed ".concat(u??"operation")))}return this.dataMasking?_f(s,i,this.cache):s},e.prototype.maskFragment=function(t){var n=t.data,r=t.fragment,o=t.fragmentName;return this.dataMasking?es(n,r,this.cache,o):n},e.prototype.fetchQueryByPolicy=function(t,n,r){var o=this,i=n.query,s=n.variables,c=n.fetchPolicy,l=n.refetchWritePolicy,u=n.errorPolicy,d=n.returnPartialData,f=n.context,h=n.notifyOnNetworkStatusChange,p=t.networkStatus;t.init({document:i,variables:s,networkStatus:r});var g=function(){return t.getDiff()},v=function(C,E){E===void 0&&(E=t.networkStatus||J.loading);var _=C.result;globalThis.__DEV__!==!1&&!d&&!ne(_,{})&&Wf(C.missing);var L=function(B){return $.of(S({data:B,loading:qn(E),networkStatus:E},C.complete?null:{partial:!0}))};return _&&o.getDocumentInfo(i).hasForcedResolvers?o.localState.runResolvers({document:i,remoteResult:{data:_},context:f,variables:s,onlyRunForcedResolvers:!0}).then(function(B){return L(B.data||void 0)}):u==="none"&&E===J.refetch&&Array.isArray(C.missing)?L(void 0):L(_)},b=c==="no-cache"?0:r===J.refetch&&l!=="merge"?1:2,y=function(){return o.getResultsFromLink(t,b,{query:i,variables:s,context:f,fetchPolicy:c,errorPolicy:u})},w=h&&typeof p=="number"&&p!==r&&qn(r);switch(c){default:case"cache-first":{var D=g();return D.complete?{fromLink:!1,sources:[v(D,t.markReady())]}:d||w?{fromLink:!0,sources:[v(D),y()]}:{fromLink:!0,sources:[y()]}}case"cache-and-network":{var D=g();return D.complete||d||w?{fromLink:!0,sources:[v(D),y()]}:{fromLink:!0,sources:[y()]}}case"cache-only":return{fromLink:!1,sources:[v(g(),t.markReady())]};case"network-only":return w?{fromLink:!0,sources:[v(g()),y()]}:{fromLink:!0,sources:[y()]};case"no-cache":return w?{fromLink:!0,sources:[v(t.getDiff()),y()]}:{fromLink:!0,sources:[y()]};case"standby":return{fromLink:!1,sources:[]}}},e.prototype.getQuery=function(t){return t&&!this.queries.has(t)&&this.queries.set(t,new $c(this,t)),this.queries.get(t)},e.prototype.prepareContext=function(t){t===void 0&&(t={});var n=this.localState.prepareContext(t);return S(S(S({},this.defaultContext),n),{clientAwareness:this.clientAwareness})},e}();var lb=function(){function e(t){var n=t.cache,r=t.client,o=t.resolvers,i=t.fragmentMatcher;this.selectionsToResolveCache=new WeakMap,this.cache=n,r&&(this.client=r),o&&this.addResolvers(o),i&&this.setFragmentMatcher(i)}return e.prototype.addResolvers=function(t){var n=this;this.resolvers=this.resolvers||{},Array.isArray(t)?t.forEach(function(r){n.resolvers=lf(n.resolvers,r)}):this.resolvers=lf(this.resolvers,t)},e.prototype.setResolvers=function(t){this.resolvers={},this.addResolvers(t)},e.prototype.getResolvers=function(){return this.resolvers||{}},e.prototype.runResolvers=function(t){return Xe(this,arguments,void 0,function(n){var r=n.document,o=n.remoteResult,i=n.context,s=n.variables,c=n.onlyRunForcedResolvers,l=c===void 0?!1:c;return Tt(this,function(u){return r?[2,this.resolveDocument(r,o.data,i,s,this.fragmentMatcher,l).then(function(d){return S(S({},o),{data:d.result})})]:[2,o]})})},e.prototype.setFragmentMatcher=function(t){this.fragmentMatcher=t},e.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},e.prototype.clientQuery=function(t){return ln(["client"],t)&&this.resolvers?t:null},e.prototype.serverQuery=function(t){return qi(t)},e.prototype.prepareContext=function(t){var n=this.cache;return S(S({},t),{cache:n,getCacheKey:function(r){return n.identify(r)}})},e.prototype.addExportedVariables=function(t){return Xe(this,arguments,void 0,function(n,r,o){return r===void 0&&(r={}),o===void 0&&(o={}),Tt(this,function(i){return n?[2,this.resolveDocument(n,this.buildRootValueFromCache(n,r)||{},this.prepareContext(o),r).then(function(s){return S(S({},r),s.exportedVariables)})]:[2,S({},r)]})})},e.prototype.shouldForceResolvers=function(t){var n=!1;return Me(t,{Directive:{enter:function(r){if(r.name.value==="client"&&r.arguments&&(n=r.arguments.some(function(o){return o.name.value==="always"&&o.value.kind==="BooleanValue"&&o.value.value===!0}),n))return cn}}}),n},e.prototype.buildRootValueFromCache=function(t,n){return this.cache.diff({query:af(t),variables:n,returnPartialData:!0,optimistic:!1}).result},e.prototype.resolveDocument=function(t,n){return Xe(this,arguments,void 0,function(r,o,i,s,c,l){var u,d,f,h,p,g,v,b,y,w,D;return i===void 0&&(i={}),s===void 0&&(s={}),c===void 0&&(c=function(){return!0}),l===void 0&&(l=!1),Tt(this,function(C){return u=kt(r),d=dt(r),f=lt(d),h=this.collectSelectionsToResolve(u,f),p=u.operation,g=p?p.charAt(0).toUpperCase()+p.slice(1):"Query",v=this,b=v.cache,y=v.client,w={fragmentMap:f,context:S(S({},i),{cache:b,client:y}),variables:s,fragmentMatcher:c,defaultOperationType:g,exportedVariables:{},selectionsToResolve:h,onlyRunForcedResolvers:l},D=!1,[2,this.resolveSelectionSet(u.selectionSet,D,o,w).then(function(E){return{result:E,exportedVariables:w.exportedVariables}})]})})},e.prototype.resolveSelectionSet=function(t,n,r,o){return Xe(this,void 0,void 0,function(){var i,s,c,l,u,d=this;return Tt(this,function(f){return i=o.fragmentMap,s=o.context,c=o.variables,l=[r],u=function(h){return Xe(d,void 0,void 0,function(){var p,g;return Tt(this,function(v){return!n&&!o.selectionsToResolve.has(h)?[2]:xt(h,c)?ze(h)?[2,this.resolveField(h,n,r,o).then(function(b){var y;typeof b<"u"&&l.push((y={},y[je(h)]=b,y))})]:(nf(h)?p=h:(p=i[h.name.value],I(p,19,h.name.value)),p&&p.typeCondition&&(g=p.typeCondition.name.value,o.fragmentMatcher(r,g,s))?[2,this.resolveSelectionSet(p.selectionSet,n,r,o).then(function(b){l.push(b)})]:[2]):[2]})})},[2,Promise.all(t.selections.map(u)).then(function(){return yr(l)})]})})},e.prototype.resolveField=function(t,n,r,o){return Xe(this,void 0,void 0,function(){var i,s,c,l,u,d,f,h,p,g=this;return Tt(this,function(v){return r?(i=o.variables,s=t.name.value,c=je(t),l=s!==c,u=r[c]||r[s],d=Promise.resolve(u),(!o.onlyRunForcedResolvers||this.shouldForceResolvers(t))&&(f=r.__typename||o.defaultOperationType,h=this.resolvers&&this.resolvers[f],h&&(p=h[l?s:c],p&&(d=Promise.resolve(_o.withValue(this.cache,p,[r,dn(t,i),o.context,{field:t,fragmentMap:o.fragmentMap}]))))),[2,d.then(function(b){var y,w;if(b===void 0&&(b=u),t.directives&&t.directives.forEach(function(C){C.name.value==="export"&&C.arguments&&C.arguments.forEach(function(E){E.name.value==="as"&&E.value.kind==="StringValue"&&(o.exportedVariables[E.value.value]=b)})}),!t.selectionSet||b==null)return b;var D=(w=(y=t.directives)===null||y===void 0?void 0:y.some(function(C){return C.name.value==="client"}))!==null&&w!==void 0?w:!1;if(Array.isArray(b))return g.resolveSubSelectedArray(t,n||D,b,o);if(t.selectionSet)return g.resolveSelectionSet(t.selectionSet,n||D,b,o)})]):[2,null]})})},e.prototype.resolveSubSelectedArray=function(t,n,r,o){var i=this;return Promise.all(r.map(function(s){if(s===null)return null;if(Array.isArray(s))return i.resolveSubSelectedArray(t,n,s,o);if(t.selectionSet)return i.resolveSelectionSet(t.selectionSet,n,s,o)}))},e.prototype.collectSelectionsToResolve=function(t,n){var r=function(s){return!Array.isArray(s)},o=this.selectionsToResolveCache;function i(s){if(!o.has(s)){var c=new Set;o.set(s,c),Me(s,{Directive:function(l,u,d,f,h){l.name.value==="client"&&h.forEach(function(p){r(p)&&Fi(p)&&c.add(p)})},FragmentSpread:function(l,u,d,f,h){var p=n[l.name.value];I(p,20,l.name.value);var g=i(p);g.size>0&&(h.forEach(function(v){r(v)&&Fi(v)&&c.add(v)}),c.add(l),g.forEach(function(v){c.add(v)}))}})}return o.get(s)}return i(t)},e}();var ub=!1;var is=function(){function e(t){var n=this,r;if(this.resetStoreCallbacks=[],this.clearStoreCallbacks=[],!t.cache)throw ue(16);var o=t.uri,i=t.credentials,s=t.headers,c=t.cache,l=t.documentTransform,u=t.ssrMode,d=u===void 0?!1:u,f=t.ssrForceFetchDelay,h=f===void 0?0:f,p=t.connectToDevTools,g=t.queryDeduplication,v=g===void 0?!0:g,b=t.defaultOptions,y=t.defaultContext,w=t.assumeImmutableResults,D=w===void 0?c.assumeImmutableResults:w,C=t.resolvers,E=t.typeDefs,_=t.fragmentMatcher,L=t.name,B=t.version,se=t.devtools,ge=t.dataMasking,At=t.link;At||(At=o?new Pf({uri:o,credentials:i,headers:s}):bt.empty()),this.link=At,this.cache=c,this.disableNetworkFetches=d||h>0,this.queryDeduplication=v,this.defaultOptions=b||Object.create(null),this.typeDefs=E,this.devtoolsConfig=S(S({},se),{enabled:(r=se?.enabled)!==null&&r!==void 0?r:p}),this.devtoolsConfig.enabled===void 0&&(this.devtoolsConfig.enabled=globalThis.__DEV__!==!1),h&&setTimeout(function(){return n.disableNetworkFetches=!1},h),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.watchFragment=this.watchFragment.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this),this.version=xi,this.localState=new lb({cache:c,client:this,resolvers:C,fragmentMatcher:_}),this.queryManager=new cb({cache:this.cache,link:this.link,defaultOptions:this.defaultOptions,defaultContext:y,documentTransform:l,queryDeduplication:v,ssrMode:d,dataMasking:!!ge,clientAwareness:{name:L,version:B},localState:this.localState,assumeImmutableResults:D,onBroadcast:this.devtoolsConfig.enabled?function(){n.devToolsHookCb&&n.devToolsHookCb({action:{},state:{queries:n.queryManager.getQueryStore(),mutations:n.queryManager.mutationStore||{}},dataWithOptimisticResults:n.cache.extract(!0)})}:void 0}),this.devtoolsConfig.enabled&&this.connectToDevTools()}return e.prototype.connectToDevTools=function(){if(!(typeof window>"u")){var t=window,n=Symbol.for("apollo.devtools");(t[n]=t[n]||[]).push(this),t.__APOLLO_CLIENT__=this,!ub&&globalThis.__DEV__!==!1&&(ub=!0,window.document&&window.top===window.self&&/^(https?|file):$/.test(window.location.protocol)&&setTimeout(function(){if(!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__){var r=window.navigator,o=r&&r.userAgent,i=void 0;typeof o=="string"&&(o.indexOf("Chrome/")>-1?i="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":o.indexOf("Firefox/")>-1&&(i="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),i&&globalThis.__DEV__!==!1&&I.log("Download the Apollo DevTools for a better development experience: %s",i)}},1e4))}},Object.defineProperty(e.prototype,"documentTransform",{get:function(){return this.queryManager.documentTransform},enumerable:!1,configurable:!0}),e.prototype.stop=function(){this.queryManager.stop()},e.prototype.watchQuery=function(t){return this.defaultOptions.watchQuery&&(t=Gi(this.defaultOptions.watchQuery,t)),this.disableNetworkFetches&&(t.fetchPolicy==="network-only"||t.fetchPolicy==="cache-and-network")&&(t=S(S({},t),{fetchPolicy:"cache-first"})),this.queryManager.watchQuery(t)},e.prototype.query=function(t){return this.defaultOptions.query&&(t=Gi(this.defaultOptions.query,t)),I(t.fetchPolicy!=="cache-and-network",17),this.disableNetworkFetches&&t.fetchPolicy==="network-only"&&(t=S(S({},t),{fetchPolicy:"cache-first"})),this.queryManager.query(t)},e.prototype.mutate=function(t){return this.defaultOptions.mutate&&(t=Gi(this.defaultOptions.mutate,t)),this.queryManager.mutate(t)},e.prototype.subscribe=function(t){var n=this,r=this.queryManager.generateQueryId();return this.queryManager.startGraphQLSubscription(t).map(function(o){return S(S({},o),{data:n.queryManager.maskOperation({document:t.query,data:o.data,fetchPolicy:t.fetchPolicy,id:r})})})},e.prototype.readQuery=function(t,n){return n===void 0&&(n=!1),this.cache.readQuery(t,n)},e.prototype.watchFragment=function(t){var n;return this.cache.watchFragment(S(S({},t),(n={},n[Symbol.for("apollo.dataMasking")]=this.queryManager.dataMasking,n)))},e.prototype.readFragment=function(t,n){return n===void 0&&(n=!1),this.cache.readFragment(t,n)},e.prototype.writeQuery=function(t){var n=this.cache.writeQuery(t);return t.broadcast!==!1&&this.queryManager.broadcastQueries(),n},e.prototype.writeFragment=function(t){var n=this.cache.writeFragment(t);return t.broadcast!==!1&&this.queryManager.broadcastQueries(),n},e.prototype.__actionHookForDevTools=function(t){this.devToolsHookCb=t},e.prototype.__requestRaw=function(t){return Po(this.link,t)},e.prototype.resetStore=function(){var t=this;return Promise.resolve().then(function(){return t.queryManager.clearStore({discardWatches:!1})}).then(function(){return Promise.all(t.resetStoreCallbacks.map(function(n){return n()}))}).then(function(){return t.reFetchObservableQueries()})},e.prototype.clearStore=function(){var t=this;return Promise.resolve().then(function(){return t.queryManager.clearStore({discardWatches:!0})}).then(function(){return Promise.all(t.clearStoreCallbacks.map(function(n){return n()}))})},e.prototype.onResetStore=function(t){var n=this;return this.resetStoreCallbacks.push(t),function(){n.resetStoreCallbacks=n.resetStoreCallbacks.filter(function(r){return r!==t})}},e.prototype.onClearStore=function(t){var n=this;return this.clearStoreCallbacks.push(t),function(){n.clearStoreCallbacks=n.clearStoreCallbacks.filter(function(r){return r!==t})}},e.prototype.reFetchObservableQueries=function(t){return this.queryManager.reFetchObservableQueries(t)},e.prototype.refetchQueries=function(t){var n=this.queryManager.refetchQueries(t),r=[],o=[];n.forEach(function(s,c){r.push(c),o.push(s)});var i=Promise.all(o);return i.queries=r,i.results=o,i.catch(function(s){globalThis.__DEV__!==!1&&I.debug(18,s)}),i},e.prototype.getObservableQueries=function(t){return t===void 0&&(t="active"),this.queryManager.getObservableQueries(t)},e.prototype.extract=function(t){return this.cache.extract(t)},e.prototype.restore=function(t){return this.cache.restore(t)},e.prototype.addResolvers=function(t){this.localState.addResolvers(t)},e.prototype.setResolvers=function(t){this.localState.setResolvers(t)},e.prototype.getResolvers=function(){return this.localState.getResolvers()},e.prototype.setLocalStateFragmentMatcher=function(t){this.localState.setFragmentMatcher(t)},e.prototype.setLink=function(t){this.link=this.queryManager.link=t},Object.defineProperty(e.prototype,"defaultContext",{get:function(){return this.queryManager.defaultContext},enumerable:!1,configurable:!0}),e}();globalThis.__DEV__!==!1&&(is.prototype.getMemoryInternals=Mv);var qc=new Map,Qf=new Map,db=!0,Wc=!1;function fb(e){return e.replace(/[\s,]+/g," ").trim()}function _R(e){return fb(e.source.body.substring(e.start,e.end))}function xR(e){var t=new Set,n=[];return e.definitions.forEach(function(r){if(r.kind==="FragmentDefinition"){var o=r.name.value,i=_R(r.loc),s=Qf.get(o);s&&!s.has(i)?db&&console.warn("Warning: fragment with name "+o+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):s||Qf.set(o,s=new Set),s.add(i),t.has(i)||(t.add(i),n.push(r))}else n.push(r)}),S(S({},e),{definitions:n})}function kR(e){var t=new Set(e.definitions);t.forEach(function(r){r.loc&&delete r.loc,Object.keys(r).forEach(function(o){var i=r[o];i&&typeof i=="object"&&t.add(i)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}function NR(e){var t=fb(e);if(!qc.has(t)){var n=uc(e,{experimentalFragmentVariables:Wc,allowLegacyFragmentVariables:Wc});if(!n||n.kind!=="Document")throw new Error("Not a valid GraphQL document.");qc.set(t,kR(xR(n)))}return qc.get(t)}function Wn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];typeof e=="string"&&(e=[e]);var r=e[0];return t.forEach(function(o,i){o&&o.kind==="Document"?r+=o.loc.source.body:r+=o,r+=e[i+1]}),NR(r)}function hb(){qc.clear(),Qf.clear()}function pb(){db=!1}function mb(){Wc=!0}function gb(){Wc=!1}var ss={gql:Wn,resetCaches:hb,disableFragmentWarnings:pb,enableExperimentalFragmentVariables:mb,disableExperimentalFragmentVariables:gb};(function(e){e.gql=ss.gql,e.resetCaches=ss.resetCaches,e.disableFragmentWarnings=ss.disableFragmentWarnings,e.enableExperimentalFragmentVariables=ss.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=ss.disableExperimentalFragmentVariables})(Wn||(Wn={}));Wn.default=Wn;ov(globalThis.__DEV__!==!1?"log":"silent");function yb(e){return new z(t=>(e().then(n=>{t.closed||(t.next(n),t.complete())},n=>{t.closed||t.error(n)}),()=>t.unsubscribe()))}function OR(e,t){return t?e.pipe(Ho({loading:!0}),F(n=>ae(R({},n),{loading:!!n.loading}))):e.pipe(F(n=>ae(R({},n),{loading:!1})))}var Yf=class{zone;constructor(t){this.zone=t}now=Date.now?Date.now:()=>+new Date;schedule(t,n=0,r){return this.zone.run(()=>fl.schedule(t,n,r))}};function Zf(e){return e[Kt]=()=>e,e}function Jf(e,t){return e.pipe(Zn(new Yf(t)))}function AR(e){return function(n){return new z(function(o){let i=e.getCurrentResult(),{loading:s,errors:c,error:l,partial:u,data:d}=i,{partialRefetch:f,fetchPolicy:h}=e.options,p=c||l;return f&&u&&(!d||Object.keys(d).length===0)&&h!=="cache-only"&&!s&&!p&&o.next(ae(R({},i),{loading:!0,networkStatus:J.loading})),n.subscribe(o)})}}var Xf=class{obsQuery;valueChanges;queryId;constructor(t,n,r){this.obsQuery=t;let o=Jf(fe(Zf(this.obsQuery)),n);this.valueChanges=r.useInitialLoading?o.pipe(AR(this.obsQuery)):o,this.queryId=this.obsQuery.queryId}get options(){return this.obsQuery.options}get variables(){return this.obsQuery.variables}result(){return this.obsQuery.result()}getCurrentResult(){return this.obsQuery.getCurrentResult()}getLastResult(){return this.obsQuery.getLastResult()}getLastError(){return this.obsQuery.getLastError()}resetLastResults(){return this.obsQuery.resetLastResults()}refetch(t){return this.obsQuery.refetch(t)}fetchMore(t){return this.obsQuery.fetchMore(t)}subscribeToMore(t){return this.obsQuery.subscribeToMore(t)}updateQuery(t){return this.obsQuery.updateQuery(t)}stopPolling(){return this.obsQuery.stopPolling()}startPolling(t){return this.obsQuery.startPolling(t)}setOptions(t){return this.obsQuery.setOptions(t)}setVariables(t){return this.obsQuery.setVariables(t)}},vb=new O("APOLLO_FLAGS"),Sb=new O("APOLLO_OPTIONS"),FR=new O("APOLLO_NAMED_OPTIONS"),Gc=class{ngZone;flags;_client;useInitialLoading;useMutationLoading;constructor(t,n,r){this.ngZone=t,this.flags=n,this._client=r,this.useInitialLoading=n?.useInitialLoading??!1,this.useMutationLoading=n?.useMutationLoading??!1}watchQuery(t){return new Xf(this.ensureClient().watchQuery(R({},t)),this.ngZone,R({useInitialLoading:this.useInitialLoading},t))}query(t){return yb(()=>this.ensureClient().query(R({},t)))}mutate(t){return OR(yb(()=>this.ensureClient().mutate(R({},t))),t.useMutationLoading??this.useMutationLoading)}watchFragment(t,n){let r=fe(Zf(this.ensureClient().watchFragment(R({},t))));return n&&n.useZone!==!0?r:Jf(r,this.ngZone)}subscribe(t,n){let r=fe(Zf(this.ensureClient().subscribe(R({},t))));return n&&n.useZone!==!0?r:Jf(r,this.ngZone)}get client(){return this.ensureClient()}set client(t){if(this._client)throw new Error("Client has been already defined");this._client=t}ensureClient(){return this.checkInstance(),this._client}checkInstance(){if(this._client)return!0;throw new Error("Client has not been defined yet")}},eh=(()=>{class e extends Gc{map=new Map;constructor(n,r,o,i){if(super(n,i),r&&this.createDefault(r),o&&typeof o=="object"){for(let s in o)if(o.hasOwnProperty(s)){let c=o[s];this.create(c,s)}}}create(n,r){Kf(r)?this.createNamed(r,n):this.createDefault(n)}default(){return this}use(n){return Kf(n)?this.map.get(n):this.default()}createDefault(n){if(this._client)throw new Error("Apollo has been already created.");this.client=this.ngZone.runOutsideAngular(()=>new is(n))}createNamed(n,r){if(this.map.has(n))throw new Error(`Client ${n} has been already created`);this.map.set(n,new Gc(this.ngZone,this.flags,this.ngZone.runOutsideAngular(()=>new is(r))))}removeClient(n){Kf(n)?this.map.delete(n):this._client=void 0}static \u0275fac=function(r){return new(r||e)(A(Te),A(Sb,8),A(FR,8),A(vb,8))};static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();function Kf(e){return!!e&&e!=="default"}function bb(e,t={}){return[eh,{provide:Sb,useFactory:e},{provide:vb,useValue:t}]}var LR=Wn,th=LR;var Db=th`
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
`,wb=th`
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
`;var Dt=(()=>{class e{constructor(n){this.apollo=n}getAbilities(){return this.pokemon.pipe(F(n=>n.getPokemon.abilities))}getDexNumber(){return this.pokemon.pipe(F(n=>n.getPokemon.num))}getMove(n){return this.apollo.query({query:wb,variables:{move:n}}).pipe(F(r=>r.data))}getMoves(){return this.pokemon.pipe(F(n=>{let r=[],o=["dreamworldMoves","eggMoves","eventMoves","tmMoves","tutorMoves","virtualTransferMoves","levelUpMoves"],i=c=>{c&&Object.keys(c).forEach(l=>{let u=c[l];u&&o.forEach(d=>{let f=u[d];Array.isArray(f)&&f.forEach(h=>{r.push(h.move)})})})},s=c=>{c&&c.forEach(l=>{i(l.learnsets),s(l.preevolutions),s(l.evolutions)})};return i(n.getPokemon.learnsets),s(n.getPokemon.preevolutions??null),s(n.getPokemon.evolutions??null),r}))}getPokemon(n){return this.pokemon=this.apollo.query({query:Db,variables:{pokemon:n}}).pipe(F(r=>r.data)),this.pokemon}getStats(){return this.pokemon.pipe(F(n=>n.getPokemon.baseStats))}getTypes(){return this.pokemon.pipe(F(n=>n.getPokemon.types))}static{this.\u0275fac=function(r){return new(r||e)(A(eh))}}static{this.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Tb=(()=>{class e{constructor(n,r){this.stateService=n,this.graphqlService=r,this.pokemonList=document.getElementById("pokemonList"),this.raidTier="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n,this.populatePokemonList()}),this.stateService.regionList.subscribe(n=>{this.region=n,this.populatePokemonList()})}ngAfterViewInit(){this.pokemonList=document.getElementById("pokemonList")}populatePokemonList(){this.pokemonList&&(this.resetPokemonList(),(this.raidTier=="5"?zt:qt).sort((r,o)=>r.name.localeCompare(o.name)).filter(r=>r.region==m[this.region]).forEach(r=>{let o=document.createElement("option");o.value=r.name,o.text=r.name,r.formName&&(o.id=r.formName),this.pokemonList.add(o)}))}resetPokemonList(){this.pokemonList.innerHTML="",this.pokemonList.innerHTML='<option value="">-- Pokemon --</option>'}valueChanged(){let n=document.getElementById("pokemonList"),r=n.selectedIndex,o=n.options[r];if(o){let i=o.id;an(),o.value&&(this.graphqlService.getPokemon(i||o.value.toLowerCase()),this.stateService.changePokemon(o.value),document.getElementById("pokemonContent").style.display="none",this.stateService.changeLoading(!0))}}static{this.\u0275fac=function(r){return new(r||e)(W(le),W(Dt))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-pokemon-list"]],decls:3,vars:0,consts:[["id","pokemonList",3,"change"],["value",""]],template:function(r,o){r&1&&(oe(0,"select",0),yt("change",function(){return o.valueChanged()}),oe(1,"option",1),De(2,"-- Pokemon --"),he()())},encapsulation:2})}}return e})();var _e=function(e){return e.Bug="Bug",e.Dark="Dark",e.Dragon="Dragon",e.Electric="Electric",e.Fairy="Fairy",e.Fighting="Fighting",e.Fire="Fire",e.Flying="Flying",e.Ghost="Ghost",e.Grass="Grass",e.Ground="Ground",e.Ice="Ice",e.Normal="Normal",e.Poison="Poison",e.Psychic="Psychic",e.Rock="Rock",e.Steel="Steel",e.Water="Water",e}(_e||{}),as=[{name:_e.Bug,matchup:{offense:{double:["dark","grass","psychic"],immune:[],normal:["bug","dragon","electric","ground","ice","normal","rock","water"],resisted:["fairy","fighting","fire","flying","ghost","poison","steel"]},defense:{double:["fire","flying","rock"],immune:[],normal:["bug","dark","dragon","electric","fairy","ghost","ice","normal","poison","psychic","steel","water"],resisted:["fighting","grass","ground"]}}},{name:_e.Dark,matchup:{offense:{double:["ghost","psychic"],immune:[],normal:["bug","dragon","electric","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["dark","fairy","fighting"]},defense:{double:["bug","fairy","fighting"],immune:["psychic"],normal:["dragon","electric","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["dark","ghost"]}}},{name:_e.Dragon,matchup:{offense:{double:["dragon"],immune:["fairy"],normal:["bug","dark","electric","fighting","fire","flying","ghost","grass","ground","ice","normal","poison","psychic","rock","water"],resisted:["steel"]},defense:{double:["dragon","fairy","ice"],immune:[],normal:["bug","dark","fighting","flying","ghost","ground","normal","poison","psychic","rock","steel"],resisted:["electric","fire","grass","water"]}}},{name:_e.Electric,matchup:{offense:{double:["flying","water"],immune:["ground"],normal:["bug","dark","fairy","fighting","fire","ghost","ice","normal","poison","psychic","rock","steel"],resisted:["dragon","electric","grass"]},defense:{double:["ground"],immune:[],normal:["bug","dark","dragon","fairy","fighting","fire","ghost","grass","ice","normal","poison","psychic","rock","water"],resisted:["electric","flying","steel"]}}},{name:_e.Fairy,matchup:{offense:{double:["dark","dragon","fighting"],immune:[],normal:["bug","electric","fairy","flying","ghost","grass","ground","ice","normal","psychic","rock","water"],resisted:["fire","poison","steel"]},defense:{double:["poison","steel"],immune:["dragon"],normal:["electric","fairy","fire","flying","ghost","grass","ground","ice","normal","psychic","rock","water"],resisted:["bug","dark","fighting"]}}},{name:_e.Fighting,matchup:{offense:{double:["dark","ice","normal","rock","steel"],immune:["ghost"],normal:["dragon","electric","fighting","fire","grass","ground","water"],resisted:["bug","fairy","flying","poison","psychic"]},defense:{double:["fairy","flying","psychic"],immune:[],normal:["dragon","electric","fighting","fire","ghost","grass","ground","ice","normal","poison","steel","water"],resisted:["bug","dark","rock"]}}},{name:_e.Fire,matchup:{offense:{double:["bug","grass","ice","steel"],immune:[],normal:["dark","electric","fairy","fighting","flying","ghost","ground","normal","poison","psychic"],resisted:["dragon","fire","rock","water"]},defense:{double:["ground","rock","water"],immune:[],normal:["dark","dragon","electric","fighting","flying","ghost","normal","poison","psychic"],resisted:["bug","fairy","fire","grass","ice","steel"]}}},{name:_e.Flying,matchup:{offense:{double:["bug","fighting","grass"],immune:[],normal:["dark","dragon","fairy","fire","flying","ghost","ground","ice","normal","poison","psychic","water"],resisted:["electric","rock","steel"]},defense:{double:["electric","ice","rock"],immune:["ground"],normal:["dark","dragon","fairy","fire","flying","ghost","normal","poison","psychic","steel","water"],resisted:["bug","fighting","grass"]}}},{name:_e.Ghost,matchup:{offense:{double:["ghost","psychic"],immune:["normal"],normal:["bug","dragon","electric","fairy","fighting","fire","flying","grass","ground","ice","poison","rock","steel","water"],resisted:["dark"]},defense:{double:["dark","ghost"],immune:["fighting","normal"],normal:["dragon","electric","fairy","fire","flying","grass","ground","ice","psychic","rock","steel","water"],resisted:["bug","poison"]}}},{name:_e.Grass,matchup:{offense:{double:["ground","rock","water"],immune:[],normal:["dark","electric","fairy","fighting","ghost","ice","normal","psychic"],resisted:["bug","dragon","fire","flying","grass","poison","steel"]},defense:{double:["bug","fire","flying","ice","poison"],immune:[],normal:["dark","dragon","fairy","fighting","ghost","normal","psychic","rock","steel"],resisted:["electric","grass","ground","water"]}}},{name:_e.Ground,matchup:{offense:{double:["electric","fire","poison","rock","steel"],immune:["flying"],normal:["dark","dragon","fairy","fighting","ghost","ground","ice","normal","psychic","water"],resisted:["bug","grass"]},defense:{double:["grass","ice","water"],immune:["electric"],normal:["bug","dark","dragon","fairy","fighting","fire","flying","ghost","ground","normal","psychic","steel"],resisted:["poison","rock"]}}},{name:_e.Ice,matchup:{offense:{double:["dragon","flying","grass","ground"],immune:[],normal:["bug","dark","electric","fairy","fighting","ghost","normal","poison","psychic","rock"],resisted:["fire","ice","steel","water"]},defense:{double:["fighting","fire","rock","steel"],immune:[],normal:["bug","dark","dragon","electric","fairy","flying","ghost","grass","ground","normal","poison","psychic","water"],resisted:["ice"]}}},{name:_e.Normal,matchup:{offense:{double:[],immune:["ghost"],normal:["bug","dark","dragon","electric","fairy","fighting","fire","flying","grass","ground","ice","normal","poison","psychic","water"],resisted:["rock","steel"]},defense:{double:["fighting"],immune:["ghost"],normal:["bug","dark","dragon","electric","fairy","fire","flying","grass","ground","ice","normal","poison","psychic","rock","steel","water"],resisted:[]}}},{name:_e.Poison,matchup:{offense:{double:["fairy","grass"],immune:["steel"],normal:["bug","dark","dragon","electric","fighting","fire","flying","ice","normal","psychic","water"],resisted:["ghost","ground","poison","rock"]},defense:{double:["ground","psychic"],immune:[],normal:["dark","dragon","electric","fire","flying","ghost","ice","normal","rock","steel","water"],resisted:["bug","fairy","fighting","grass","poison"]}}},{name:_e.Psychic,matchup:{offense:{double:["fighting","poison"],immune:["dark"],normal:["bug","dragon","electric","fairy","fire","flying","ghost","grass","ground","ice","normal","rock","water"],resisted:["psychic","steel"]},defense:{double:["bug","dark","ghost"],immune:[],normal:["dragon","electric","fairy","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["fighting","psychic"]}}},{name:_e.Rock,matchup:{offense:{double:["bug","fire","flying","ice"],immune:[],normal:["dark","dragon","electric","fairy","ghost","grass","normal","poison","psychic","rock","water"],resisted:["fighting","ground","steel"]},defense:{double:["fighting","grass","ground","steel","water"],immune:[],normal:["bug","dark","dragon","electric","fairy","ghost","ice","psychic","rock"],resisted:["fire","flying","normal","poison"]}}},{name:_e.Steel,matchup:{offense:{double:["fairy","ice","rock"],immune:[],normal:["bug","dark","dragon","fighting","flying","ghost","grass","ground","normal","poison","psychic"],resisted:["electric","fire","steel","water"]},defense:{double:["fighting","fire","ground"],immune:["poison"],normal:["dark","electric","ghost","water"],resisted:["bug","dragon","fairy","flying","grass","ice","normal","psychic","rock","steel"]}}},{name:_e.Water,matchup:{offense:{double:["fire","ground","rock"],immune:[],normal:["bug","dark","electric","fairy","fighting","flying","ghost","ice","normal","poison","psychic","steel"],resisted:["dragon","grass","water"]},defense:{double:["electric","grass"],immune:[],normal:["bug","dark","dragon","fairy","fighting","flying","ghost","ground","normal","poison","psychic","rock"],resisted:["fire","ice","steel","water"]}}}];var Eb=(()=>{class e{constructor(n){this.stateService=n}ngOnInit(){as.forEach(n=>{let r=document.createElement("option");r.value=n.name,r.text=n.name,document.getElementById("teraList").add(r)})}valueChanged(){let n=document.getElementById("teraList"),r=n.selectedIndex,o=n.options[r];this.stateService.changeTeraType(o.value)}static{this.\u0275fac=function(r){return new(r||e)(W(le))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-tera-type"]],decls:3,vars:0,consts:[["id","teraList",3,"change"],["value",""]],template:function(r,o){r&1&&(oe(0,"select",0),yt("change",function(){return o.valueChanged()}),oe(1,"option",1),De(2,"-- Tera Type --"),he()())},encapsulation:2})}}return e})();var Cb=(()=>{class e{constructor(n){this.stateService=n,this.raidTier="",this.pokemonList="",this.teraType="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n}),this.stateService.teraType.subscribe(n=>{this.teraType=n}),this.stateService.regionList.subscribe(n=>{this.region=n})}shareRaid(){let n=location.origin+"/tera-raid-info/";n+=this.raidTier,n+="/"+this.region,n+="/"+this.pokemonList,n+="/"+this.teraType,navigator.clipboard.writeText(n);let r=document.getElementById("shareText");r.innerText="Copied to Clipboard"}shareRaidMouseOut(){let n=document.getElementById("shareText");n.innerText="Share Raid"}static{this.\u0275fac=function(r){return new(r||e)(W(le))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-share-raid"]],decls:3,vars:0,consts:[["id","shareRaid",1,"share",3,"click","mouseout"],["id","shareText",1,"shareText"]],template:function(r,o){r&1&&(oe(0,"div",0),yt("click",function(){return o.shareRaid()})("mouseout",function(){return o.shareRaidMouseOut()}),oe(1,"div",1),De(2,"Share Raid"),he()())},encapsulation:2})}}return e})();var Ib=(()=>{class e{constructor(n,r){this.grapghqlService=n,this.stateService=r,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setImages()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setImages(){this.pokemonList&&this.grapghqlService.getDexNumber().subscribe(n=>{let r=this.raidTier=="5"?zt:qt,o="";r.filter(i=>i.name==this.pokemonList&&i.region==m[this.region]).forEach(i=>{i.imageAlt&&(o=i.imageAlt)}),me(document.getElementById("pokemonImageNormal"),`<img alt="Normal" title="Normal" src="./assets/pokemon/${Nd(n,3,"0")}${o}.png" />`),me(document.getElementById("pokemonImageShiny"),`<img alt="Shiny" title="Shiny" src="./assets/pokemon/shiny/${Nd(n,3,"0")}${o}.png" />`)})}static{this.\u0275fac=function(r){return new(r||e)(W(Dt),W(le))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-pokemon-images"]],decls:2,vars:0,consts:[["id","pokemonImageNormal",1,"imgNormal"],["id","pokemonImageShiny",1,"imgShiny"]],template:function(r,o){r&1&&pe(0,"div",0)(1,"div",1)},encapsulation:2})}}return e})();var Pb=(()=>{class e{constructor(n,r){this.graphqlService=n,this.stateService=r,this.pokemonList=""}ngOnInit(){this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setTypes()})}setTypes(){this.pokemonList&&this.graphqlService.getTypes().subscribe(n=>{n.forEach(r=>{me(document.getElementById("pokemonTypes"),this.createTypeDisplay(r.name))})})}createTypeDisplay(n){return`<div class="typeText ${n.toLowerCase()}">${n}</div>`}static{this.\u0275fac=function(r){return new(r||e)(W(Dt),W(le))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-pokemon-types"]],decls:1,vars:0,consts:[["id","pokemonTypes"]],template:function(r,o){r&1&&pe(0,"div",0)},encapsulation:2})}}return e})();var Mb=(()=>{class e{constructor(n,r){this.graphqlService=n,this.stateService=r,this.raidTier="",this.pokemonList=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setAbilities()})}setAbilities(){if(this.pokemonList){let n=document.getElementById("pokemonAbility");this.graphqlService.getAbilities().subscribe(r=>{me(n,"<h3>Ability:</h3>"),me(n,this.createAbilityDiv(r.first)),r.second&&me(n,this.createAbilityDiv(r.second)),this.canShowHidden()&&r.hidden&&me(n,this.createAbilityDiv(r.hidden,!0))})}}createAbilityDiv(n,r){return`<div class="typeMatchupText" data-info="${n.shortDesc}">${n.name}${r?" (H)":""}</div>`}canShowHidden(){return this.raidTier=="6"||this.raidTier=="5"&&this.pokemonList=="Ditto"}static{this.\u0275fac=function(r){return new(r||e)(W(Dt),W(le))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-pokemon-ability"]],decls:1,vars:0,consts:[["id","pokemonAbility"]],template:function(r,o){r&1&&pe(0,"div",0)},encapsulation:2})}}return e})();var Rb=(()=>{class e{constructor(n,r){this.graphqlService=n,this.stateService=r}ngOnInit(){this.stateService.pokemonList.subscribe(n=>{n&&this.setStats()})}setStats(){this.graphqlService.getStats().subscribe(n=>{me(document.getElementById("pokemonStatsWrapper"),this.createStatsDisplay(n))})}createStatsDisplay(n){let r='<div id="pokemonStats"><h3>Base Stats</h3>';return r+=`<div class="stat hp"><p>HP</p><p data-label="HP">${n.hp}</p></div>`,r+=`<div class="stat at"><p>Atk</p><p data-label="Atk">${n.attack}</p></div>`,r+=`<div class="stat df"><p>Def</p><p data-label="Def">${n.defense}</p></div>`,r+=`<div class="stat sa"><p>Sp.Atk</p><p data-label="Sp. Atk">${n.specialattack}</p></div>`,r+=`<div class="stat sd"><p>Sp.Def</p><p data-label="Sp. Def">${n.specialdefense}</p></div>`,r+=`<div class="stat sp"><p>Spd</p><p data-label="Spd">${n.speed}</p></div></div>`,r}static{this.\u0275fac=function(r){return new(r||e)(W(Dt),W(le))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-pokemon-stats"]],decls:1,vars:0,consts:[["id","pokemonStatsWrapper"]],template:function(r,o){r&1&&pe(0,"div",0)},encapsulation:2})}}return e})();var Qc=(()=>{class e{advantages(n,r=!1){let o=[];return as.filter(i=>i.name.includes(n)).forEach(i=>{let s=i.matchup.offense;s.double.forEach(c=>{o.push({name:c,multiplier:2})}),r&&(s.resisted.forEach(c=>{o.push({name:c,multiplier:.5})}),s.immune.forEach(c=>{o.push({name:c,multiplier:0})}))}),o}weaknesses(n){let r=[];return as.filter(o=>o.name.includes(n)).forEach(o=>{let i=o.matchup.defense;i.double.forEach(s=>{r.push({name:s,multiplier:2})}),i.resisted.forEach(s=>{r.push({name:s,multiplier:.5})}),i.immune.forEach(s=>{r.push({name:s,multiplier:0})})}),r}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var xb=(()=>{class e{constructor(n,r,o){this.stateService=n,this.typeCalcService=r,this.graphqlService=o,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setMoves()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setMoves(){let n=document.getElementById("pokemonMoves"),r=this.raidTier=="5"?zt:qt,o=[],i=[],s=[],c=[];this.pokemonList&&(r.filter(l=>l.name==this.pokemonList&&l.region==m[this.region]).forEach(l=>{l.info.specialMoves&&l.info.specialMoves.sort((u,d)=>u.localeCompare(d)).forEach(u=>{i.push(u),this.graphqlService.getMove(u.toLowerCase().replaceAll(" ","").replaceAll("-","")).subscribe(d=>{o.push(d.getMove)})}),l.info.moves.forEach(u=>{i.push(u)})}),this.graphqlService.getMoves().subscribe(l=>{me(n,"<h3>Moves:</h3>"),i.forEach(h=>{o.push(...l.filter(p=>p.name==h))}),[...new Map(o.map(h=>[h.key,h])).values()].sort((h,p)=>h.name.localeCompare(p.name)).sort((h,p)=>h.category!="Status"&&p.category=="Status"?-1:(p.category!="Status"&&h.category=="Status",1)).forEach(h=>{let p=this.createMoveDiv(h);me(document.getElementById("pokemonMoves"),p),s.push(p),h.category!="Status"&&c.push(h.type)}),this.stateService.changeMoveList(s.join("")),c=[...new Set(c)];let d=[];c.forEach(h=>{let p=this.typeCalcService.advantages(h);d=d.concat(p)});let f=[];d=[...new Map(d.map(h=>[h.name,h])).values()],d.sort((h,p)=>h.name.localeCompare(p.name)).forEach(h=>{f.push(_i(h))}),f.length&&me(document.getElementById("pokemonTypeAdvantages"),"<h3>Type Advantages:</h3>"+f.join(""))}))}createMoveDiv(n){let r=`<div class="typeMatchupText ${n.type.toLowerCase()}">${n.name}`;if(r+='<div class="moveStats">',r+=`<div class="type">${n.category.toString()}</div>`,r+=`<div class="bp">Pwr: ${n.basePower=="0"?"--":n.basePower}</div>`,r+=`<div class="pp">PP: ${n.pp}</div>`,r+=`<div class="acc">Acc: ${n.accuracy}</div>`,r+=`<div class="desc">${n.desc=="No additional effect."?n.shortDesc:n.desc}</div>`,n.category!="Status"){let o=this.typeCalcService.advantages(n.type.toString()),i=[];o.forEach(s=>{s.multiplier==2&&i.push(`${ao(s.name)}`)}),i.length&&(r+=`<div class="adv">Advantages: ${i.join(", ")}</div>`)}return r+="</div></div>",r}static{this.\u0275fac=function(r){return new(r||e)(W(le),W(Qc),W(Dt))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-pokemon-moves"]],decls:1,vars:0,consts:[["id","pokemonMoves",1,"pokemonMoves"]],template:function(r,o){r&1&&pe(0,"div",0)},encapsulation:2})}}return e})();var kb=(()=>{class e{constructor(n){this.stateService=n,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setActions()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setActions(){this.pokemonList&&(me(document.getElementById("pokemonActions"),"<h3>Actions:</h3>"),(this.raidTier=="5"?zt:qt).filter(r=>r.name==this.pokemonList&&r.region==m[this.region]).forEach(r=>{r.info.actions?.sort((o,i)=>i.threshold-o.threshold).forEach(o=>{me(document.getElementById("pokemonActions"),this.createActionDiv(o))})}))}createActionDiv(n){return`<div class="actions ${n.type.toLowerCase()}-${n.threshold.toString()}" data-info="${n.threshold.toString()}% ${n.type.toString()} Remaining">${n.action}</div>`}static{this.\u0275fac=function(r){return new(r||e)(W(le))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-pokemon-actions"]],decls:1,vars:0,consts:[[1,"pokemonActions"]],template:function(r,o){r&1&&pe(0,"div",0)},encapsulation:2})}}return e})();var Nb=(()=>{class e{constructor(n){this.stateService=n,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setHerbs()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setHerbs(){this.pokemonList&&(me(document.getElementById("pokemonHerbs"),"<h3>Herbs Dropped:</h3>"),(this.raidTier=="5"?zt:qt).filter(r=>r.name==this.pokemonList&&r.region==m[this.region]).forEach(r=>{r.info.herbs.sort((o,i)=>o.name.localeCompare(i.name)).forEach(o=>{me(document.getElementById("pokemonHerbs"),this.createHerbDiv(o))})}))}createHerbDiv(n){return`<div class="herbPill ${n.name.toLowerCase()}">${n.name} - ${n.chance}%</div>`}static{this.\u0275fac=function(r){return new(r||e)(W(le))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-pokemon-herbs"]],decls:1,vars:0,consts:[[1,"pokemonHerbs"]],template:function(r,o){r&1&&pe(0,"div",0)},encapsulation:2})}}return e})();var Ob=(()=>{class e{constructor(n,r){this.stateService=n,this.typeCalcService=r,this.raidTier="",this.pokemonList="",this.teraType="",this.moveList=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.handleChange()}),this.stateService.teraType.subscribe(n=>{this.teraType=n,this.handleChange()}),this.stateService.moveList.subscribe(n=>{this.moveList=n,this.handleChange()})}handleChange(){this.pokemonList&&(an("pokemonTeraAdvantages"),an("pokemonTeraWeaknesses"),this.pokemonList&&(this.raidTier&&this.teraType&&this.setTypeWeaknesses(),this.moveList&&this.teraType&&this.moveList.includes("Tera Blast")&&this.setTeraTypeAdvantages()),this.teraType?(this.pokemonList&&this.raidTier&&this.setTypeWeaknesses(),this.moveList.includes("Tera Blast")&&this.setTeraTypeAdvantages()):(an("pokemonTeraAdvantages"),an("pokemonTeraWeaknesses")),this.stateService.changeLoading(!1))}setTeraTypeAdvantages(){an("pokemonTeraAdvantages");let n=[];this.typeCalcService.advantages(this.teraType).forEach(o=>{n.push(_i(o))}),n.length&&me(document.getElementById("pokemonTeraAdvantages"),"<h3>Tera Advantages:</h3>"+n.join(""))}setTypeWeaknesses(){an("pokemonTeraWeaknesses");let n=[];this.typeCalcService.weaknesses(this.teraType).forEach(o=>{n.push(_i(o))}),n.length&&me(document.getElementById("pokemonTeraWeaknesses"),"<h3>Tera Weaknesses:</h3>"+n.join(""))}static{this.\u0275fac=function(r){return new(r||e)(W(le),W(Qc))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-pokemon-type-matchups"]],decls:3,vars:0,consts:[["id","pokemonTypeAdvantages",1,"pokemonTypeMatchups"],["id","pokemonTeraWeaknesses",1,"pokemonTypeMatchups"],["id","pokemonTeraAdvantages",1,"pokemonTypeMatchups"]],template:function(r,o){r&1&&pe(0,"div",0)(1,"div",1)(2,"div",2)},encapsulation:2})}}return e})();var Kc=(()=>{class e{constructor(n){this.stateService=n,this.title="Tera Raid Info"}ngOnInit(){this.stateService.changeRegionList("Paldea"),this.stateService.loading.subscribe(n=>{document.getElementById("dataLoading").hidden=!n,n==!1&&(document.getElementById("pokemonContent").style.display="")})}ngAfterViewInit(){document.getElementById("dataLoading").hidden=!0,this.deleteCache(),this.autoPopulateSelections()}autoPopulateSelections(n,r){let o=n||window.location.href,i=r||window.location.origin;if(o.replace(i,"").length>1&&o.replace(i+"/tera-raid-info/","")){let c=o.replace(i+"/tera-raid-info/","").split("/"),l=new Event("change");if(Number(c[0])){let u=document.getElementById("raidTier");u.value=c[0],u.dispatchEvent(l)}if(c[1]){let u=document.getElementById("regionList");for(let d=0;d<u.length;d++){let f=u[d];f.text==c[1]&&(u.selectedIndex=f.index)}u.dispatchEvent(l)}if(c[2]){let u=ao(c[2].replaceAll("%20"," ").toLowerCase()),d=u.match(/(\(.*\))/);if(d){let h=d[0].split(" ");for(let p=0;p<h.length;p++)u=u.replaceAll(h[p],ao(h[p]))}let f=document.getElementById("pokemonList");f.value=u,f.dispatchEvent(l)}if(c[3]){let u=document.getElementById("teraList");for(let d=0;d<u.length;d++){let f=u[d];f.text==c[3]&&(u.selectedIndex=f.index)}u.dispatchEvent(l)}}}deleteCache(){caches.delete("tera-raid-info-1")}static{this.\u0275fac=function(r){return new(r||e)(W(le))}}static{this.\u0275cmp=ee({type:e,selectors:[["app-root"]],decls:35,vars:0,consts:[[1,"header"],[1,"dropdowns"],["id","dataLoading","hidden","true"],["src","./assets/icons/pokeball.gif"],["id","pokemonContent","hidden","false",1,"content"],["id","pokemon"],[1,"pokemonImageWrapper"],["id","pokemonActions"],["id","pokemonHerbs"],[1,"pokemonTypesWrapper"],[1,"footer"],["href","https://github.com/kyle-undefined","target","_blank"],["href","https://www.serebii.net/","target","_blank"],["href","https://www.flaticon.com/authors/creatype","target","_blank"],["href","https://github.com/favware/graphql-pokemon","target","_blank"]],template:function(r,o){r&1&&(oe(0,"header",0)(1,"h1"),De(2,"Tera Raid Info"),he(),oe(3,"div",1),pe(4,"app-raid-tier")(5,"app-region")(6,"app-pokemon-list")(7,"app-tera-type")(8,"app-share-raid"),he()(),oe(9,"div",2),pe(10,"img",3),he(),oe(11,"div",4)(12,"div",5)(13,"div",6),pe(14,"app-pokemon-images"),he(),pe(15,"app-pokemon-types"),he(),pe(16,"app-pokemon-stats")(17,"app-pokemon-ability")(18,"app-pokemon-moves")(19,"app-pokemon-actions",7)(20,"app-pokemon-herbs",8)(21,"app-pokemon-type-matchups",9),he(),oe(22,"footer",10),De(23," By: "),oe(24,"a",11),De(25,"Kyle Undefined"),he(),De(26," - Design: CronikCRS - Images: "),oe(27,"a",12),De(28,"Serebii"),he(),De(29," & "),oe(30,"a",13),De(31,"Creatype"),he(),De(32," - Data: "),oe(33,"a",14),De(34,"GraphQL-Pokemon"),he()())},dependencies:[Au,tv,nv,Tb,Eb,Cb,Ib,Pb,Mb,Rb,xb,kb,Nb,Ob],encapsulation:2})}}return e})();var Ab=[{path:"",component:Kc},{path:"**",redirectTo:""}];var jR=(e,t,n)=>{let r=["POST","PUT","PATCH"].indexOf(e.method.toUpperCase())!==-1,o=u=>["variables","extensions"].indexOf(u.toLowerCase())!==-1,i=e.body.length,s=e.options&&e.options.useMultipart,c;if(s){if(i)return new z(u=>u.error(new Error("File upload is not available when combined with Batching")));if(!r)return new z(u=>u.error(new Error("File upload is not available when GET is used")));if(!n)return new z(u=>u.error(new Error(`To use File upload you need to pass "extractFiles" function from "extract-files" library to HttpLink's options`)));c=n(e.body),s=!!c.files.size}let l={};if(i){if(!r)return new z(u=>u.error(new Error("Batching is not available for GET requests")));l={body:e.body}}else{let u=s?c.clone:e.body;r?l={body:u}:l={params:Object.keys(e.body).reduce((f,h)=>{let p=e.body[h];return f[h]=o(h)?JSON.stringify(p):p,f},{})}}if(s&&r){let u=new FormData;u.append("operations",JSON.stringify(l.body));let d={},f=c.files,h=0;f.forEach(p=>{d[++h]=p}),u.append("map",JSON.stringify(d)),h=0,f.forEach((p,g)=>{u.append(++h+"",g,g.name)}),l.body=u}return t.request(e.method,e.url,R(R({observe:"response",responseType:"json",reportProgress:!1},l),e.options))},BR=(e,t)=>e&&t?t.keys().reduce((r,o)=>r.set(o,t.getAll(o)),e):t||e;function VR(...e){return e.find(t=>typeof t<"u")}function $R(e){let t=e.headers&&e.headers instanceof Vt?e.headers:new Vt(e.headers);if(e.clientAwareness){let{name:n,version:r}=e.clientAwareness;n&&!t.has("apollographql-client-name")&&(t=t.set("apollographql-client-name",n)),r&&!t.has("apollographql-client-version")&&(t=t.set("apollographql-client-version",r))}return t}var zR={batchInterval:10,batchMax:10,uri:"graphql",method:"POST",withCredentials:!1,includeQuery:!0,includeExtensions:!1,useMultipart:!1};function Oo(e,t,n){return VR(e[n],t[n],zR[n])}var nh=class extends bt{httpClient;options;requester;print=yo;constructor(t,n){super(),this.httpClient=t,this.options=n,this.options.operationPrinter&&(this.print=this.options.operationPrinter),this.requester=r=>new $(o=>{let i=r.getContext(),s=Oo(i,this.options,"method"),c=Oo(i,this.options,"includeQuery"),l=Oo(i,this.options,"includeExtensions"),u=Oo(i,this.options,"uri"),d=Oo(i,this.options,"withCredentials"),f=Oo(i,this.options,"useMultipart"),h=this.options.useGETForQueries===!0,p=r.query.definitions.some(y=>y.kind==="OperationDefinition"&&y.operation==="query");h&&p&&(s="GET");let g={method:s,url:typeof u=="function"?u(r):u,body:{operationName:r.operationName,variables:r.variables},options:{withCredentials:d,useMultipart:f,headers:this.options.headers}};l&&(g.body.extensions=r.extensions),c&&(g.body.query=this.print(r.query));let v=$R(i);g.options.headers=BR(g.options.headers,v);let b=jR(g,this.httpClient,this.options.extractFiles).subscribe({next:y=>{r.setContext({response:y}),o.next(y.body)},error:y=>o.error(y),complete:()=>o.complete()});return()=>{b.closed||b.unsubscribe()}})}request(t){return this.requester(t)}},Fb=(()=>{class e{httpClient;constructor(n){this.httpClient=n}create(n){return new nh(this.httpClient,n)}static \u0275fac=function(r){return new(r||e)(A(Bu))};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();gy(Kc,{providers:[ev(Ab),sy(),bb(()=>{let e=P(Fb);return{cache:new os,link:e.create({uri:"https://graphqlpokemon.favware.tech/v8"})}})]}).catch(e=>console.error(e));
