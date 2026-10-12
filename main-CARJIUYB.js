var Hp=Object.defineProperty,pD=Object.defineProperties;var mD=Object.getOwnPropertyDescriptors;var wa=Object.getOwnPropertySymbols;var Vp=Object.prototype.hasOwnProperty,Up=Object.prototype.propertyIsEnumerable;var Lp=(t,e,n)=>e in t?Hp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,S=(t,e)=>{for(var n in e||={})Vp.call(e,n)&&Lp(t,n,e[n]);if(wa)for(var n of wa(e))Up.call(e,n)&&Lp(t,n,e[n]);return t},C=(t,e)=>pD(t,mD(e));var Ca=t=>typeof t=="symbol"?t:t+"",ge=(t,e)=>{var n={};for(var r in t)Vp.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&wa)for(var r of wa(t))e.indexOf(r)<0&&Up.call(t,r)&&(n[r]=t[r]);return n};var gD=(t,e)=>{for(var n in e)Hp(t,n,{get:e[n],enumerable:!0})};var it=null,Ia=!1,Mr=1,yD=null,Xe=Symbol("SIGNAL");function L(t){let e=it;return it=t,e}function xa(){return it}var xr={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Ai(t){if(Ia)throw new Error("");if(it===null)return;it.consumerOnSignalRead(t);let e=it.producersTail;if(e!==void 0&&e.producer===t)return;let n,r=it.recomputing;if(r&&(n=e!==void 0?e.nextProducer:it.producers,n!==void 0&&n.producer===t)){it.producersTail=n,n.lastReadVersion=t.version,n.knownValidAtEpoch=Mr;return}let o=t.consumersTail;if(o!==void 0&&o.consumer===it&&(!r||o.knownValidAtEpoch===Mr))return;let i=Ro(it),s={producer:t,consumer:it,nextProducer:n,prevConsumer:void 0,knownValidAtEpoch:Mr,lastReadVersion:t.version,nextConsumer:void 0};it.producersTail=s,e!==void 0?e.nextProducer=s:it.producers=s,i&&Gp(t,s)}function jp(){Mr++}function Oi(t){if(!(Ro(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Mr)){if(!t.producerMustRecompute(t)&&!Na(t)){Pa(t);return}t.producerRecomputeValue(t),Pa(t)}}function hu(t){if(t.consumers===void 0)return;let e=Ia;Ia=!0;try{for(let n=t.consumers;n!==void 0;n=n.nextConsumer){let r=n.consumer;r.dirty||vD(r)}}finally{Ia=e}}function pu(){return it?.consumerAllowSignalWrites!==!1}function vD(t){t.dirty=!0,hu(t),t.consumerMarkedDirty?.(t)}function Pa(t){t.dirty=!1,t.lastCleanEpoch=Mr}function xo(t){return t&&Bp(t),L(t)}function Bp(t){if(t.producersTail?.knownValidAtEpoch===Mr){let e=t.producers;for(;e!==void 0;)e.knownValidAtEpoch=null,e=e.nextProducer}t.producersTail=void 0,t.recomputing=!0}function Fi(t,e){L(e),t&&$p(t)}function $p(t){t.recomputing=!1;let e=t.producersTail,n=e!==void 0?e.nextProducer:t.producers;if(n!==void 0){if(Ro(t))do n=mu(n);while(n!==void 0);e!==void 0?e.nextProducer=void 0:t.producers=void 0}}function Na(t){for(let e=t.producers;e!==void 0;e=e.nextProducer){let n=e.producer,r=e.lastReadVersion;if(r!==n.version||(Oi(n),r!==n.version))return!0}return!1}function No(t){if(Ro(t)){let e=t.producers;for(;e!==void 0;)e=mu(e)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function Gp(t,e){let n=t.consumersTail,r=Ro(t);if(n!==void 0?(e.nextConsumer=n.nextConsumer,n.nextConsumer=e):(e.nextConsumer=void 0,t.consumers=e),e.prevConsumer=n,t.consumersTail=e,!r)for(let o=t.producers;o!==void 0;o=o.nextProducer)Gp(o.producer,o)}function mu(t){let e=t.producer,n=t.nextProducer,r=t.nextConsumer,o=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,r!==void 0?r.prevConsumer=o:e.consumersTail=o,o!==void 0)o.nextConsumer=r;else if(e.consumers=r,!Ro(e)){let i=e.producers;for(;i!==void 0;)i=mu(i)}return n}function Ro(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Ra(t){yD?.(t)}function ka(t,e){return Object.is(t,e)}function Li(t,e){let n=Object.create(SD);n.computation=t,e!==void 0&&(n.equal=e);let r=()=>{if(Oi(n),Ai(n),n.value===Pr)throw n.error;return n.value};return r[Xe]=n,Ra(n),r}var _a=Symbol("UNSET"),Ma=Symbol("COMPUTING"),Pr=Symbol("ERRORED"),SD=C(S({},xr),{value:_a,dirty:!0,error:null,equal:ka,kind:"computed",producerMustRecompute(t){return t.value===_a||t.value===Ma},producerRecomputeValue(t){if(t.value===Ma)throw new Error("");let e=t.value;t.value=Ma;let n=xo(t),r,o=!1;try{r=t.computation(),L(null),o=e!==_a&&e!==Pr&&r!==Pr&&t.equal(e,r)}catch(i){r=Pr,t.error=i}finally{Fi(t,n)}if(o){t.value=e;return}t.value=r,t.version++}});function bD(){throw new Error}var Wp=bD;function zp(t){Wp(t)}function gu(t){Wp=t}var ED=null;function yu(t,e){let n=Object.create(Su);n.value=t,e!==void 0&&(n.equal=e);let r=()=>qp(n);return r[Xe]=n,Ra(n),[r,s=>Hi(n,s),s=>vu(n,s)]}function qp(t){return Ai(t),t.value}function Hi(t,e){pu()||zp(t),t.equal(t.value,e)||(t.value=e,DD(t))}function vu(t,e){pu()||zp(t),Hi(t,e(t.value))}var Su=C(S({},xr),{equal:ka,value:void 0,kind:"signal"});function DD(t){t.version++,jp(),hu(t),ED?.(t)}var bu=C(S({},xr),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Eu(t){if(t.dirty=!1,t.version>0&&!Na(t))return;t.version++;let e=xo(t);try{t.cleanup(),t.fn()}finally{Fi(t,e)}}var Du;function Aa(){return Du}function Kt(t){let e=Du;return Du=t,e}var Qp=Symbol("NotFound");function ko(t){return t===Qp||t?.name==="\u0275NotFound"}function Kp(t){let e=L(null);try{return t()}finally{L(e)}}function Q(t){return typeof t=="function"}function Ao(t){let n=t(r=>{Error.call(r),r.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Oa=Ao(t=>function(n){t(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function Nr(t,e){if(t){let n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Le=class t{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let i of n)i.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(Q(r))try{r()}catch(i){e=i instanceof Oa?i.errors:[i]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let i of o)try{Yp(i)}catch(s){e=e??[],s instanceof Oa?e=[...e,...s.errors]:e.push(s)}}if(e)throw new Oa(e)}}add(e){var n;if(e&&e!==this)if(this.closed)Yp(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}}_hasParent(e){let{_parentage:n}=this;return n===e||Array.isArray(n)&&n.includes(e)}_addParent(e){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e}_removeParent(e){let{_parentage:n}=this;n===e?this._parentage=null:Array.isArray(n)&&Nr(n,e)}remove(e){let{_finalizers:n}=this;n&&Nr(n,e),e instanceof t&&e._removeParent(this)}};Le.EMPTY=(()=>{let t=new Le;return t.closed=!0,t})();var Tu=Le.EMPTY;function Fa(t){return t instanceof Le||t&&"closed"in t&&Q(t.remove)&&Q(t.add)&&Q(t.unsubscribe)}function Yp(t){Q(t)?t():t.unsubscribe()}var Ht={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Oo={setTimeout(t,e,...n){let{delegate:r}=Oo;return r?.setTimeout?r.setTimeout(t,e,...n):setTimeout(t,e,...n)},clearTimeout(t){let{delegate:e}=Oo;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function La(t){Oo.setTimeout(()=>{let{onUnhandledError:e}=Ht;if(e)e(t);else throw t})}function wu(){}var Zp=Cu("C",void 0,void 0);function Jp(t){return Cu("E",void 0,t)}function Xp(t){return Cu("N",t,void 0)}function Cu(t,e,n){return{kind:t,value:e,error:n}}var Rr=null;function Fo(t){if(Ht.useDeprecatedSynchronousErrorHandling){let e=!Rr;if(e&&(Rr={errorThrown:!1,error:null}),t(),e){let{errorThrown:n,error:r}=Rr;if(Rr=null,n)throw r}}else t()}function em(t){Ht.useDeprecatedSynchronousErrorHandling&&Rr&&(Rr.errorThrown=!0,Rr.error=t)}var kr=class extends Le{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Fa(e)&&e.add(this)):this.destination=CD}static create(e,n,r){return new Sn(e,n,r)}next(e){this.isStopped?_u(Xp(e),this):this._next(e)}error(e){this.isStopped?_u(Jp(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?_u(Zp,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},TD=Function.prototype.bind;function Iu(t,e){return TD.call(t,e)}var Mu=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:n}=this;if(n.next)try{n.next(e)}catch(r){Ha(r)}}error(e){let{partialObserver:n}=this;if(n.error)try{n.error(e)}catch(r){Ha(r)}else Ha(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(n){Ha(n)}}},Sn=class extends kr{constructor(e,n,r){super();let o;if(Q(e)||!e)o={next:e??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&Ht.useDeprecatedNextContext?(i=Object.create(e),i.unsubscribe=()=>this.unsubscribe(),o={next:e.next&&Iu(e.next,i),error:e.error&&Iu(e.error,i),complete:e.complete&&Iu(e.complete,i)}):o=e}this.destination=new Mu(o)}};function Ha(t){Ht.useDeprecatedSynchronousErrorHandling?em(t):La(t)}function wD(t){throw t}function _u(t,e){let{onStoppedNotification:n}=Ht;n&&Oo.setTimeout(()=>n(t,e))}var CD={closed:!0,next:wu,error:wD,complete:wu};var Lo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Vt(t){return t}function tm(t){return t.length===0?Vt:t.length===1?t[0]:function(n){return t.reduce((r,o)=>o(r),n)}}var F=class t{constructor(e){e&&(this._subscribe=e)}lift(e){let n=new t;return n.source=this,n.operator=e,n}subscribe(e,n,r){let o=_D(e)?e:new Sn(e,n,r);return Fo(()=>{let{operator:i,source:s}=this;o.add(i?i.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(n){e.error(n)}}forEach(e,n){return n=nm(n),new n((r,o)=>{let i=new Sn({next:s=>{try{e(s)}catch(c){o(c),i.unsubscribe()}},error:o,complete:r});this.subscribe(i)})}_subscribe(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)}[Lo](){return this}pipe(...e){return tm(e)(this)}toPromise(e){return e=nm(e),new e((n,r)=>{let o;this.subscribe(i=>o=i,i=>r(i),()=>n(o))})}};F.create=t=>new F(t);function nm(t){var e;return(e=t??Ht.Promise)!==null&&e!==void 0?e:Promise}function ID(t){return t&&Q(t.next)&&Q(t.error)&&Q(t.complete)}function _D(t){return t&&t instanceof kr||ID(t)&&Fa(t)}function MD(t){return Q(t?.lift)}function ce(t){return e=>{if(MD(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function ye(t,e,n,r,o){return new Pu(t,e,n,r,o)}var Pu=class extends kr{constructor(e,n,r,o,i,s){super(e),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(c){try{n(c)}catch(l){e.error(l)}}:super._next,this._error=o?function(c){try{o(c)}catch(l){e.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var rm=Ao(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var ve=class extends F{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let n=new Va(this,this);return n.operator=e,n}_throwIfClosed(){if(this.closed)throw new rm}next(e){Fo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let n of this.currentObservers)n.next(e)}})}error(e){Fo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:n}=this;for(;n.length;)n.shift().error(e)}})}complete(){Fo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:n,isStopped:r,observers:o}=this;return n||r?Tu:(this.currentObservers=null,o.push(e),new Le(()=>{this.currentObservers=null,Nr(o,e)}))}_checkFinalizedStatuses(e){let{hasError:n,thrownError:r,isStopped:o}=this;n?e.error(r):o&&e.complete()}asObservable(){let e=new F;return e.source=this,e}};ve.create=(t,e)=>new Va(t,e);var Va=class extends ve{constructor(e,n){super(),this.destination=e,this.source=n}next(e){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,e)}error(e){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,e)}complete(){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||n===void 0||n.call(e)}_subscribe(e){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(e))!==null&&r!==void 0?r:Tu}};var lt=class extends ve{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let n=super._subscribe(e);return!n.closed&&e.next(this._value),n}getValue(){let{hasError:e,thrownError:n,_value:r}=this;if(e)throw n;return this._throwIfClosed(),r}next(e){super.next(this._value=e)}};var Vi={now(){return(Vi.delegate||Date).now()},delegate:void 0};var Ar=class extends ve{constructor(e=1/0,n=1/0,r=Vi){super(),this._bufferSize=e,this._windowTime=n,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=n===1/0,this._bufferSize=Math.max(1,e),this._windowTime=Math.max(1,n)}next(e){let{isStopped:n,_buffer:r,_infiniteTimeWindow:o,_timestampProvider:i,_windowTime:s}=this;n||(r.push(e),!o&&r.push(i.now()+s)),this._trimBuffer(),super.next(e)}_subscribe(e){this._throwIfClosed(),this._trimBuffer();let n=this._innerSubscribe(e),{_infiniteTimeWindow:r,_buffer:o}=this,i=o.slice();for(let s=0;s<i.length&&!e.closed;s+=r?1:2)e.next(i[s]);return this._checkFinalizedStatuses(e),n}_trimBuffer(){let{_bufferSize:e,_timestampProvider:n,_buffer:r,_infiniteTimeWindow:o}=this,i=(o?1:2)*e;if(e<1/0&&i<r.length&&r.splice(0,r.length-i),!o){let s=n.now(),c=0;for(let l=1;l<r.length&&r[l]<=s;l+=2)c=l;c&&r.splice(0,c+1)}}};var Ua=class extends Le{constructor(e,n){super()}schedule(e,n=0){return this}};var Ui={setInterval(t,e,...n){let{delegate:r}=Ui;return r?.setInterval?r.setInterval(t,e,...n):setInterval(t,e,...n)},clearInterval(t){let{delegate:e}=Ui;return(e?.clearInterval||clearInterval)(t)},delegate:void 0};var Ho=class extends Ua{constructor(e,n){super(e,n),this.scheduler=e,this.work=n,this.pending=!1}schedule(e,n=0){var r;if(this.closed)return this;this.state=e;let o=this.id,i=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(i,o,n)),this.pending=!0,this.delay=n,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(i,this.id,n),this}requestAsyncId(e,n,r=0){return Ui.setInterval(e.flush.bind(e,this),r)}recycleAsyncId(e,n,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return n;n!=null&&Ui.clearInterval(n)}execute(e,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let r=this._execute(e,n);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,n){let r=!1,o;try{this.work(e)}catch(i){r=!0,o=i||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){let{id:e,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,Nr(r,this),e!=null&&(this.id=this.recycleAsyncId(n,e,null)),this.delay=null,super.unsubscribe()}}};var Vo=class t{constructor(e,n=t.now){this.schedulerActionCtor=e,this.now=n}schedule(e,n=0,r){return new this.schedulerActionCtor(this,e).schedule(r,n)}};Vo.now=Vi.now;var Uo=class extends Vo{constructor(e,n=Vo.now){super(e,n),this.actions=[],this._active=!1}flush(e){let{actions:n}=this;if(this._active){n.push(e);return}let r;this._active=!0;do if(r=e.execute(e.state,e.delay))break;while(e=n.shift());if(this._active=!1,r){for(;e=n.shift();)e.unsubscribe();throw r}}};var PD=new Uo(Ho),om=PD;var ja=class extends Ho{constructor(e,n){super(e,n),this.scheduler=e,this.work=n}schedule(e,n=0){return n>0?super.schedule(e,n):(this.delay=n,this.state=e,this.scheduler.flush(this),this)}execute(e,n){return n>0||this.closed?super.execute(e,n):this._execute(e,n)}requestAsyncId(e,n,r=0){return r!=null&&r>0||r==null&&this.delay>0?super.requestAsyncId(e,n,r):(e.flush(this),0)}};var Ba=class extends Uo{};var xu=new Ba(ja);var Yt=new F(t=>t.complete());function $a(t){return t&&Q(t.schedule)}function im(t){return t[t.length-1]}function Ga(t){return Q(im(t))?t.pop():void 0}function Zn(t){return $a(im(t))?t.pop():void 0}var ji=function(){return ji=Object.assign||function(e){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ji.apply(this,arguments)};function am(t,e,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function c(d){try{u(r.next(d))}catch(f){s(f)}}function l(d){try{u(r.throw(d))}catch(f){s(f)}}function u(d){d.done?i(d.value):o(d.value).then(c,l)}u((r=r.apply(t,e||[])).next())})}function sm(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Or(t){return this instanceof Or?(this.v=t,this):new Or(t)}function cm(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),c("next"),c("throw"),c("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(h){return function(m){return Promise.resolve(m).then(h,f)}}function c(h,m){r[h]&&(o[h]=function(v){return new Promise(function(y,b){i.push([h,v,y,b])>1||l(h,v)})},m&&(o[h]=m(o[h])))}function l(h,m){try{u(r[h](m))}catch(v){p(i[0][3],v)}}function u(h){h.value instanceof Or?Promise.resolve(h.value.v).then(d,f):p(i[0][2],h)}function d(h){l("next",h)}function f(h){l("throw",h)}function p(h,m){h(m),i.shift(),i.length&&l(i[0][0],i[0][1])}}function lm(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof sm=="function"?sm(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(s){return new Promise(function(c,l){s=t[i](s),o(c,l,s.done,s.value)})}}function o(i,s,c,l){Promise.resolve(l).then(function(u){i({value:u,done:c})},s)}}var Wa=(t=>t&&typeof t.length=="number"&&typeof t!="function");function za(t){return Q(t?.then)}function qa(t){return Q(t[Lo])}function Qa(t){return Symbol.asyncIterator&&Q(t?.[Symbol.asyncIterator])}function Ka(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function xD(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ya=xD();function Za(t){return Q(t?.[Ya])}function Ja(t){return cm(this,arguments,function*(){let n=t.getReader();try{for(;;){let{value:r,done:o}=yield Or(n.read());if(o)return yield Or(void 0);yield yield Or(r)}}finally{n.releaseLock()}})}function Xa(t){return Q(t?.getReader)}function He(t){if(t instanceof F)return t;if(t!=null){if(qa(t))return ND(t);if(Wa(t))return RD(t);if(za(t))return kD(t);if(Qa(t))return um(t);if(Za(t))return AD(t);if(Xa(t))return OD(t)}throw Ka(t)}function ND(t){return new F(e=>{let n=t[Lo]();if(Q(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function RD(t){return new F(e=>{for(let n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function kD(t){return new F(e=>{t.then(n=>{e.closed||(e.next(n),e.complete())},n=>e.error(n)).then(null,La)})}function AD(t){return new F(e=>{for(let n of t)if(e.next(n),e.closed)return;e.complete()})}function um(t){return new F(e=>{FD(t,e).catch(n=>e.error(n))})}function OD(t){return um(Ja(t))}function FD(t,e){var n,r,o,i;return am(this,void 0,void 0,function*(){try{for(n=lm(t);r=yield n.next(),!r.done;){let s=r.value;if(e.next(s),e.closed)return}}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}e.complete()})}function ut(t,e,n,r=0,o=!1){let i=e.schedule(function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(i),!o)return i}function Fr(t,e=0){return ce((n,r)=>{n.subscribe(ye(r,o=>ut(r,t,()=>r.next(o),e),()=>ut(r,t,()=>r.complete(),e),o=>ut(r,t,()=>r.error(o),e)))})}function ec(t,e=0){return ce((n,r)=>{r.add(t.schedule(()=>n.subscribe(r),e))})}function dm(t,e){return He(t).pipe(ec(e),Fr(e))}function fm(t,e){return He(t).pipe(ec(e),Fr(e))}function hm(t,e){return new F(n=>{let r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function pm(t,e){return new F(n=>{let r;return ut(n,e,()=>{r=t[Ya](),ut(n,e,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){n.error(s);return}i?n.complete():n.next(o)},0,!0)}),()=>Q(r?.return)&&r.return()})}function tc(t,e){if(!t)throw new Error("Iterable cannot be null");return new F(n=>{ut(n,e,()=>{let r=t[Symbol.asyncIterator]();ut(n,e,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function mm(t,e){return tc(Ja(t),e)}function gm(t,e){if(t!=null){if(qa(t))return dm(t,e);if(Wa(t))return hm(t,e);if(za(t))return fm(t,e);if(Qa(t))return tc(t,e);if(Za(t))return pm(t,e);if(Xa(t))return mm(t,e)}throw Ka(t)}function Ve(t,e){return e?gm(t,e):He(t)}function We(...t){let e=Zn(t);return Ve(t,e)}function Bi(t,e){let n=Q(t)?t:()=>t,r=o=>o.error(n());return new F(e?o=>e.schedule(r,0,o):r)}var ym;(function(t){t.NEXT="N",t.ERROR="E",t.COMPLETE="C"})(ym||(ym={}));var Jn=class t{constructor(e,n,r){this.kind=e,this.value=n,this.error=r,this.hasValue=e==="N"}observe(e){return LD(this,e)}do(e,n,r){let{kind:o,value:i,error:s}=this;return o==="N"?e?.(i):o==="E"?n?.(s):r?.()}accept(e,n,r){var o;return Q((o=e)===null||o===void 0?void 0:o.next)?this.observe(e):this.do(e,n,r)}toObservable(){let{kind:e,value:n,error:r}=this,o=e==="N"?We(n):e==="E"?Bi(()=>r):e==="C"?Yt:0;if(!o)throw new TypeError(`Unexpected notification kind ${e}`);return o}static createNext(e){return new t("N",e)}static createError(e){return new t("E",void 0,e)}static createComplete(){return t.completeNotification}};Jn.completeNotification=new Jn("C");function LD(t,e){var n,r,o;let{kind:i,value:s,error:c}=t;if(typeof i!="string")throw new TypeError('Invalid notification, missing "kind"');i==="N"?(n=e.next)===null||n===void 0||n.call(e,s):i==="E"?(r=e.error)===null||r===void 0||r.call(e,c):(o=e.complete)===null||o===void 0||o.call(e)}var vm=Ao(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Nu(t,e){let n=typeof e=="object";return new Promise((r,o)=>{let i=!1,s;t.subscribe({next:c=>{s=c,i=!0},error:o,complete:()=>{i?r(s):n?r(e.defaultValue):o(new vm)}})})}function Sm(t){return t instanceof Date&&!isNaN(t)}function z(t,e){return ce((n,r)=>{let o=0;n.subscribe(ye(r,i=>{r.next(t.call(e,i,o++))}))})}var{isArray:HD}=Array;function VD(t,e){return HD(e)?t(...e):t(e)}function nc(t){return z(e=>VD(t,e))}var{isArray:UD}=Array,{getPrototypeOf:jD,prototype:BD,keys:$D}=Object;function rc(t){if(t.length===1){let e=t[0];if(UD(e))return{args:e,keys:null};if(GD(e)){let n=$D(e);return{args:n.map(r=>e[r]),keys:n}}}return{args:t,keys:null}}function GD(t){return t&&typeof t=="object"&&jD(t)===BD}function oc(t,e){return t.reduce((n,r,o)=>(n[r]=e[o],n),{})}function $i(...t){let e=Zn(t),n=Ga(t),{args:r,keys:o}=rc(t);if(r.length===0)return Ve([],e);let i=new F(WD(r,e,o?s=>oc(o,s):Vt));return n?i.pipe(nc(n)):i}function WD(t,e,n=Vt){return r=>{bm(e,()=>{let{length:o}=t,i=new Array(o),s=o,c=o;for(let l=0;l<o;l++)bm(e,()=>{let u=Ve(t[l],e),d=!1;u.subscribe(ye(r,f=>{i[l]=f,d||(d=!0,c--),c||r.next(n(i.slice()))},()=>{--s||r.complete()}))},r)},r)}}function bm(t,e,n){t?ut(n,t,e):e()}function Em(t,e,n,r,o,i,s,c){let l=[],u=0,d=0,f=!1,p=()=>{f&&!l.length&&!u&&e.complete()},h=v=>u<r?m(v):l.push(v),m=v=>{i&&e.next(v),u++;let y=!1;He(n(v,d++)).subscribe(ye(e,b=>{o?.(b),i?h(b):e.next(b)},()=>{y=!0},void 0,()=>{if(y)try{for(u--;l.length&&u<r;){let b=l.shift();s?ut(e,s,()=>m(b)):m(b)}p()}catch(b){e.error(b)}}))};return t.subscribe(ye(e,h,()=>{f=!0,p()})),()=>{c?.()}}function Mt(t,e,n=1/0){return Q(e)?Mt((r,o)=>z((i,s)=>e(r,i,o,s))(He(t(r,o))),n):(typeof e=="number"&&(n=e),ce((r,o)=>Em(r,o,t,n)))}function Dm(t=1/0){return Mt(Vt,t)}function Tm(){return Dm(1)}function Xn(...t){return Tm()(Ve(t,Zn(t)))}function Gi(...t){let e=Ga(t),{args:n,keys:r}=rc(t),o=new F(i=>{let{length:s}=n;if(!s){i.complete();return}let c=new Array(s),l=s,u=s;for(let d=0;d<s;d++){let f=!1;He(n[d]).subscribe(ye(i,p=>{f||(f=!0,u--),c[d]=p},()=>l--,void 0,()=>{(!l||!f)&&(u||i.next(r?oc(r,c):c),i.complete())}))}});return e?o.pipe(nc(e)):o}function Ru(t=0,e,n=om){let r=-1;return e!=null&&($a(e)?n=e:r=e),new F(o=>{let i=Sm(t)?+t-n.now():t;i<0&&(i=0);let s=0;return n.schedule(function(){o.closed||(o.next(s++),0<=r?this.schedule(void 0,r):o.complete())},i)})}function Pt(t,e){return ce((n,r)=>{let o=0;n.subscribe(ye(r,i=>t.call(e,i,o++)&&r.next(i)))})}function er(t){return ce((e,n)=>{let r=null,o=!1,i;r=e.subscribe(ye(n,void 0,void 0,s=>{i=He(t(s,er(t)(e))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function ku(t,e){return Q(e)?Mt(t,e,1):Mt(t,1)}function Wi(t,e=Vt){return t=t??zD,ce((n,r)=>{let o,i=!0;n.subscribe(ye(r,s=>{let c=e(s);(i||!t(o,c))&&(i=!1,o=c,r.next(s))}))})}function zD(t,e){return t===e}function tr(t){return ce((e,n)=>{try{e.subscribe(n)}finally{n.add(t)}})}function Au(){return ce((t,e)=>{t.subscribe(ye(e,n=>{e.next(Jn.createNext(n))},()=>{e.next(Jn.createComplete()),e.complete()},n=>{e.next(Jn.createError(n)),e.complete()}))})}function Zt(t={}){let{connector:e=()=>new ve,resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=t;return i=>{let s,c,l,u=0,d=!1,f=!1,p=()=>{c?.unsubscribe(),c=void 0},h=()=>{p(),s=l=void 0,d=f=!1},m=()=>{let v=s;h(),v?.unsubscribe()};return ce((v,y)=>{u++,!f&&!d&&p();let b=l=l??e();y.add(()=>{u--,u===0&&!f&&!d&&(c=Ou(m,o))}),b.subscribe(y),!s&&u>0&&(s=new Sn({next:D=>b.next(D),error:D=>{f=!0,p(),c=Ou(h,n,D),b.error(D)},complete:()=>{d=!0,p(),c=Ou(h,r),b.complete()}}),He(v).subscribe(s))})(i)}}function Ou(t,e,...n){if(e===!0){t();return}if(e===!1)return;let r=new Sn({next:()=>{r.unsubscribe(),t()}});return He(e(...n)).subscribe(r)}function bn(t,e,n){let r,o=!1;return t&&typeof t=="object"?{bufferSize:r=1/0,windowTime:e=1/0,refCount:o=!1,scheduler:n}=t:r=t??1/0,Zt({connector:()=>new Ar(r,e,n),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:o})}function jo(...t){let e=Zn(t);return ce((n,r)=>{(e?Xn(t,n,e):Xn(t,n)).subscribe(r)})}function Bo(t,e){return ce((n,r)=>{let o=null,i=0,s=!1,c=()=>s&&!o&&r.complete();n.subscribe(ye(r,l=>{o?.unsubscribe();let u=0,d=i++;He(t(l,d)).subscribe(o=ye(r,f=>r.next(e?e(l,f,d,u++):f),()=>{o=null,c()}))},()=>{s=!0,c()}))})}function En(t,e,n){let r=Q(t)||e||n?{next:t,error:e,complete:n}:t;return r?ce((o,i)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let c=!0;o.subscribe(ye(i,l=>{var u;(u=r.next)===null||u===void 0||u.call(r,l),i.next(l)},()=>{var l;c=!1,(l=r.complete)===null||l===void 0||l.call(r),i.complete()},l=>{var u;c=!1,(u=r.error)===null||u===void 0||u.call(r,l),i.error(l)},()=>{var l,u;c&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):Vt}var U=class extends Error{code;constructor(e,n){super(Zi(e,n)),this.code=e}};function qD(t){return`NG0${Math.abs(t)}`}function Zi(t,e){return`${qD(t)}${e?": "+e:""}`}function se(t){for(let e in t)if(t[e]===se)return e;throw Error("")}function Mm(t,e){for(let n in e)Object.hasOwn(e,n)&&!Object.hasOwn(t,n)&&(t[n]=e[n])}function dc(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(dc).join(", ")}]`;if(t==null)return""+t;let e=t.overriddenName||t.name;if(e)return`${e}`;let n=t.toString();if(n==null)return""+n;let r=n.indexOf(`
`);return r>=0?n.slice(0,r):n}function Ku(t,e){return t?e?`${t} ${e}`:t:e||""}var QD=se({__forward_ref__:se});function Xt(t){return t.__forward_ref__=Xt,t}function ze(t){return Yu(t)?t():t}function Yu(t){return typeof t=="function"&&Object.hasOwn(t,QD)&&t.__forward_ref__===Xt}function Y(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function Br(t){return{providers:t.providers||[],imports:t.imports||[]}}function fc(t){return KD(t,hc)}function KD(t,e){return Object.hasOwn(t,e)&&t[e]||null}function YD(t){let e=t?.[hc]??null;return e||null}function Lu(t){return t&&Object.hasOwn(t,sc)?t[sc]:null}var hc=se({\u0275prov:se}),sc=se({\u0275inj:se}),H=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,n){this._desc=e,this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=Y({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Zu(t){return t&&!!t.\u0275providers}var Ji=se({\u0275cmp:se}),Xi=se({\u0275dir:se}),Ju=se({\u0275pipe:se});var qi=se({\u0275fac:se}),$r=se({__NG_ELEMENT_ID__:se}),wm=se({__NG_ENV_ID__:se});function Gr(t){return Xu(t,"@Component"),t[Ji]||null}function pc(t){return Xu(t,"@Directive"),t[Xi]||null}function Pm(t){return Xu(t,"@Pipe"),t[Ju]||null}function Xu(t,e){if(t==null)throw new U(-919,!1)}function es(t){return typeof t=="string"?t:t==null?"":String(t)}var xm=se({ngErrorCode:se}),ZD=se({ngErrorMessage:se}),JD=se({ngTokenPath:se});function ed(t,e){return Nm("",-200,e)}function mc(t,e){throw new U(-201,!1)}function Nm(t,e,n){let r=new U(e,t);return r[xm]=e,r[ZD]=t,n&&(r[JD]=n),r}function XD(t){return t[xm]}var Hu;function Rm(){return Hu}function bt(t){let e=Hu;return Hu=t,e}function td(t,e,n){let r=fc(t);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(n&8)return null;if(e!==void 0)return e;mc(t,"")}var eT={},Lr=eT,tT="__NG_DI_FLAG__",Vu=class{injector;constructor(e){this.injector=e}retrieve(e,n){let r=Hr(n)||0;try{return this.injector.get(e,r&8?null:Lr,r)}catch(o){if(ko(o))return o;throw o}}};function nT(t,e=0){let n=Aa();if(n===void 0)throw new U(-203,!1);if(n===null)return td(t,void 0,e);{let r=rT(e),o=n.retrieve(t,r);if(ko(o)){if(r.optional)return null;throw o}return o}}function q(t,e=0){return(Rm()||nT)(ze(t),e)}function I(t,e){return q(t,Hr(e))}function Hr(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function rT(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Uu(t){let e=[];for(let n=0;n<t.length;n++){let r=ze(t[n]);if(Array.isArray(r)){if(r.length===0)throw new U(900,!1);let o,i=0;for(let s=0;s<r.length;s++){let c=r[s],l=oT(c);typeof l=="number"?l===-1?o=c.token:i|=l:o=c}e.push(q(o,i))}else e.push(q(r))}return e}function oT(t){return t[tT]}function Vr(t,e){let n=Object.hasOwn(t,qi);return n?t[qi]:null}function km(t,e,n){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++){let o=t[r],i=e[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}function Am(t){return t.flat(Number.POSITIVE_INFINITY)}function gc(t,e){t.forEach(n=>Array.isArray(n)?gc(n,e):e(n))}function nd(t,e,n){e>=t.length?t.push(n):t.splice(e,0,n)}function ts(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}function Om(t,e,n,r){let o=t.length;if(o==e)t.push(n,r);else if(o===1)t.push(r,t[0]),t[0]=n;else{for(o--,t.push(t[o-1],t[o]);o>e;){let i=o-2;t[o]=t[i],o--}t[e]=n,t[e+1]=r}}function Fm(t,e,n){let r=Wo(t,e);return r>=0?t[r|1]=n:(r=~r,Om(t,r,e,n)),r}function yc(t,e){let n=Wo(t,e);if(n>=0)return t[n|1]}function Wo(t,e){return iT(t,e,1)}function iT(t,e,n){let r=0,o=t.length>>n;for(;o!==r;){let i=r+(o-r>>1),s=t[i<<n];if(e===s)return i<<n;s>e?o=i:r=i+1}return~(o<<n)}var nr={},dt=[],ns=new H(""),vc=new H("",-1),rd=new H(""),Go=class{get(e,n=Lr){if(n===Lr){let o=Nm("",-201);throw o.name="\u0275NotFound",o}return n}};function rs(t){return{\u0275providers:t}}function Lm(...t){return{\u0275providers:od(!0,t),\u0275fromNgModule:!0}}function od(t,...e){let n=[],r=new Set,o,i=s=>{n.push(s)};return gc(e,s=>{let c=s;ac(c,i,[],r)&&(o||=[],o.push(c))}),o!==void 0&&Hm(o,i),n}function Hm(t,e){for(let n=0;n<t.length;n++){let{ngModule:r,providers:o}=t[n];id(o,i=>{e(i,r)})}}function ac(t,e,n,r){if(t=ze(t),!t)return!1;let o=null,i=Lu(t),s=!i&&Gr(t);if(!i&&!s){let l=t.ngModule;if(i=Lu(l),i)o=l;else return!1}else{if(s&&!s.standalone)return!1;o=t}let c=r.has(o);if(s){if(c)return!1;if(r.add(o),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let u of l)ac(u,e,n,r)}}else if(i){if(i.imports!=null&&!c){r.add(o);let u;gc(i.imports,d=>{ac(d,e,n,r)&&(u||=[],u.push(d))}),u!==void 0&&Hm(u,e)}if(!c){let u=Vr(o)||(()=>new o);e({provide:o,useFactory:u,deps:dt},o),e({provide:rd,useValue:o,multi:!0},o),e({provide:ns,useValue:()=>q(o),multi:!0},o)}let l=i.providers;if(l!=null&&!c){let u=t;id(l,d=>{e(d,u)})}}else return!1;return o!==t&&t.providers!==void 0}function id(t,e){for(let n of t)Zu(n)&&(n=n.\u0275providers),Array.isArray(n)?id(n,e):e(n)}var sT=se({provide:String,useValue:se});function Vm(t){return t!==null&&typeof t=="object"&&sT in t}function aT(t){return!!(t&&t.useExisting)}function cT(t){return!!(t&&t.useFactory)}function Ur(t){return typeof t=="function"}function Um(t){return!!t.useClass}var os=new H(""),ic={},Cm={},Fu;function is(){return Fu===void 0&&(Fu=new Go),Fu}var ft=class{},jr=class extends ft{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,Bu(e,s=>this.processProvider(s)),this.records.set(vc,$o(void 0,this)),o.has("environment")&&this.records.set(ft,$o(void 0,this));let i=this.records.get(os);i!=null&&typeof i.value=="string"&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(rd,dt,{self:!0}))}retrieve(e,n){let r=Hr(n)||0;try{return this.get(e,Lr,r)}catch(o){if(ko(o))return o;throw o}}destroy(){zi(this),this._destroyed=!0;let e=L(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of n)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),L(e)}}onDestroy(e){return zi(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){zi(this);let n=Kt(this),r=bt(void 0),o;try{return e()}finally{Kt(n),bt(r)}}get(e,n=Lr,r){if(zi(this),Object.hasOwn(e,wm))return e[wm](this);let o=Hr(r),i,s=Kt(this),c=bt(void 0);try{if(!(o&4)){let u=this.records.get(e);if(u===void 0){let d=hT(e)&&fc(e);d&&this.injectableDefInScope(d)?u=$o(ju(e),ic):u=null,this.records.set(e,u)}if(u!=null)return this.hydrate(e,u,o)}let l=o&2?is():this.parent;return n=o&8&&n===Lr?null:n,l.get(e,n)}catch(l){let u=XD(l);throw u===-200||u===-201?new U(u,null):l}finally{bt(c),Kt(s)}}resolveInjectorInitializers(){let e=L(null),n=Kt(this),r=bt(void 0),o;try{let i=this.get(ns,dt,{self:!0});for(let s of i)s()}finally{Kt(n),bt(r),L(e)}}toString(){return"R3Injector[...]"}processProvider(e){e=ze(e);let n=Ur(e)?e:ze(e&&e.provide),r=uT(e);if(!Ur(e)&&e.multi===!0){let o=this.records.get(n);o||(o=$o(void 0,ic,!0),o.factory=()=>Uu(o.multi),this.records.set(n,o)),n=e,o.multi.push(e)}this.records.set(n,r)}hydrate(e,n,r){let o=L(null);try{if(n.value===Cm)throw ed("");return n.value===ic&&(n.value=Cm,n.value=n.factory(void 0,r)),typeof n.value=="object"&&n.value&&fT(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{L(o)}}injectableDefInScope(e){if(!e.providedIn)return!1;let n=ze(e.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(e){let n=this._onDestroyHooks.indexOf(e);n!==-1&&this._onDestroyHooks.splice(n,1)}};function ju(t){let e=fc(t),n=e!==null?e.factory:Vr(t);if(n!==null)return n;if(t instanceof H)throw new U(-204,!1);if(t instanceof Function)return lT(t);throw new U(-204,!1)}function lT(t){if(t.length>0)throw new U(-204,!1);let n=YD(t);return n!==null?()=>n.factory(t):()=>new t}function uT(t){if(Vm(t))return $o(void 0,t.useValue);{let e=sd(t);return $o(e,ic)}}function sd(t,e,n){let r;if(Ur(t)){let o=ze(t);return Vr(o)||ju(o)}else if(Vm(t))r=()=>ze(t.useValue);else if(cT(t))r=()=>t.useFactory(...Uu(t.deps||[]));else if(aT(t))r=(o,i)=>q(ze(t.useExisting),i!==void 0&&i&8?8:void 0);else{let o=ze(t&&(t.useClass||t.provide));if(dT(t))r=()=>new o(...Uu(t.deps));else return Vr(o)||ju(o)}return r}function zi(t){if(t.destroyed)throw new U(-205,!1)}function $o(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function dT(t){return!!t.deps}function fT(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function hT(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Bu(t,e){for(let n of t)Array.isArray(n)?Bu(n,e):n&&Zu(n)?Bu(n.\u0275providers,e):e(n)}function zo(t,e){let n;t instanceof jr?(zi(t),n=t):n=new Vu(t);let r,o=Kt(n),i=bt(void 0);try{return e()}finally{Kt(o),bt(i)}}function jm(){return Rm()!==void 0||Aa()!=null}var Ut=0,j=1,G=2,_e=3,xt=4,pt=5,qo=6,Qo=7,De=8,In=9,en=10,Se=11,Ko=12,ad=13,rr=14,mt=15,or=16,Wr=17,tn=18,ss=19,cd=20,Dn=21,Sc=22,Tn=23,Dt=24,zr=25,Bm=26,as=27,je=28,$m=1,ld=6,qr=7,cs=8,Qr=9,Te=10;function _n(t){return Array.isArray(t)&&typeof t[$m]=="object"}function Nt(t){return Array.isArray(t)&&t[$m]===!0}function ud(t){return(t.flags&4)!==0}function Mn(t){return t.componentOffset>-1}function bc(t){return(t.flags&1)===1}function nn(t){return!!t.template}function Yo(t){return(t[G]&512)!==0}function Kr(t){return(t[G]&256)===256}var Gm="svg",Wm="math";function qe(t){for(;Array.isArray(t);)t=t[Ut];return t}function dd(t,e){return qe(e[t])}function Rt(t,e){return qe(e[t.index])}function Ec(t,e){return t.data[e]}function zm(t,e){return t[e]}function kt(t,e){let n=e[t];return _n(n)?n:n[Ut]}function Dc(t){return(t[G]&128)===128}function qm(t){return Nt(t[_e])}function rn(t,e){return e==null?null:t[e]}function fd(t){t[Wr]=0}function hd(t){t[G]&1024||(t[G]|=1024,Dc(t)&&Yr(t))}function Qm(t,e){for(;t>0;)e=e[rr],t--;return e}function ls(t){return!!(t[G]&9216||t[Dt]?.dirty)}function Tc(t){t[en].changeDetectionScheduler?.notify(8),t[G]&64&&(t[G]|=1024),ls(t)&&Yr(t)}function Yr(t){t[en].changeDetectionScheduler?.notify(0);let e=wn(t);for(;e!==null&&!(e[G]&8192||(e[G]|=8192,!Dc(e)));)e=wn(e)}function wc(t,e){if(Kr(t))throw new U(911,!1);t[Dn]===null&&(t[Dn]=[]),t[Dn].push(e)}function Km(t,e){if(t[Dn]===null)return;let n=t[Dn].indexOf(e);n!==-1&&t[Dn].splice(n,1)}function wn(t){let e=t[_e];return Nt(e)?e[_e]:e}function pd(t){return t[Qo]??=[]}function md(t){return t.cleanup??=[]}function Ym(t,e,n,r){let o=pd(e);o.push(n),t.firstCreatePass&&md(t).push(r,o.length-1)}var K={lFrame:hg(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var $u=!1;function Zm(){return K.lFrame.elementDepthCount}function Jm(){K.lFrame.elementDepthCount++}function gd(){K.lFrame.elementDepthCount--}function Xm(){return K.bindingsEnabled}function eg(){return K.skipHydrationRootTNode!==null}function yd(t){return K.skipHydrationRootTNode===t}function vd(){K.skipHydrationRootTNode=null}function Z(){return K.lFrame.lView}function Be(){return K.lFrame.tView}function xe(t){return K.lFrame.contextLView=t,t[De]}function Ne(t){return K.lFrame.contextLView=null,t}function tt(){let t=Sd();for(;t!==null&&t.type===64;)t=t.parent;return t}function Sd(){return K.lFrame.currentTNode}function tg(){let t=K.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}function Zo(t,e){let n=K.lFrame;n.currentTNode=t,n.isParent=e}function bd(){return K.lFrame.isParent}function ng(){K.lFrame.isParent=!1}function rg(){return K.lFrame.contextLView}function Ed(){return $u}function Qi(t){let e=$u;return $u=t,e}function og(){let t=K.lFrame,e=t.bindingRootIndex;return e===-1&&(e=t.bindingRootIndex=t.tView.bindingStartIndex),e}function ig(){return K.lFrame.bindingIndex}function sg(t){return K.lFrame.bindingIndex=t}function Zr(){return K.lFrame.bindingIndex++}function Dd(t){let e=K.lFrame,n=e.bindingIndex;return e.bindingIndex=e.bindingIndex+t,n}function ag(){return K.lFrame.inI18n}function cg(t,e){let n=K.lFrame;n.bindingIndex=n.bindingRootIndex=t,Cc(e)}function lg(){return K.lFrame.currentDirectiveIndex}function Cc(t){K.lFrame.currentDirectiveIndex=t}function ug(t){let e=K.lFrame.currentDirectiveIndex;return e===-1?null:t[e]}function dg(){return K.lFrame.currentQueryIndex}function Ic(t){K.lFrame.currentQueryIndex=t}function pT(t){let e=t[j];return e.type===2?e.declTNode:e.type===1?t[pt]:null}function Td(t,e,n){if(n&4){let o=e,i=t;for(;o=o.parent,o===null&&!(n&1);)if(o=pT(i),o===null||(i=i[rr],o.type&10))break;if(o===null)return!1;e=o,t=i}let r=K.lFrame=fg();return r.currentTNode=e,r.lView=t,!0}function _c(t){let e=fg(),n=t[j];K.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function fg(){let t=K.lFrame,e=t===null?null:t.child;return e===null?hg(t):e}function hg(t){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=e),e}function pg(){let t=K.lFrame;return K.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var wd=pg;function Mc(){let t=pg();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function mg(t){return(K.lFrame.contextLView=Qm(t,K.lFrame.contextLView))[De]}function Pn(){return K.lFrame.selectedIndex}function ir(t){K.lFrame.selectedIndex=t}function us(){let t=K.lFrame;return Ec(t.tView,t.selectedIndex)}function Cd(){return K.lFrame.currentNamespace}var gg=!0;function Pc(){return gg}function xc(t){gg=t}function Gu(t,e=null,n=null,r){let o=yg(t,e,n,r);return o.resolveInjectorInitializers(),o}function yg(t,e=null,n=null,r,o=new Set){let i=[n||dt,Lm(t)],s;return new jr(i,e||is(),s||null,o)}var ht=class t{static THROW_IF_NOT_FOUND=Lr;static NULL=new Go;static create(e,n){if(Array.isArray(e))return Gu({name:""},n,e,"");{let r=e.name??"";return Gu({name:r},e.parent,e.providers,r)}}static \u0275prov=Y({token:t,providedIn:"any",factory:()=>q(vc)});static __NG_ELEMENT_ID__=-1},nt=new H(""),et=class{static __NG_ELEMENT_ID__=mT;static __NG_ENV_ID__=e=>e},cc=class extends et{_lView;constructor(e){super(),this._lView=e}get destroyed(){return Kr(this._lView)}onDestroy(e){let n=this._lView;return wc(n,e),()=>Km(n,e)}};function mT(){return new cc(Z())}var vg=!1,Sg=new H(""),Jr=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new lt(!1);debugTaskTracker=I(Sg,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new F(n=>{n.next(!1),n.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),this.debugTaskTracker?.add(n),n}has(n){return this.pendingTasks.has(n)}remove(n){this.pendingTasks.delete(n),this.debugTaskTracker?.remove(n),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=Y({token:t,providedIn:"root",factory:()=>new t})}return t})(),Wu=class extends ve{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,jm()&&(this.destroyRef=I(et,{optional:!0})??void 0,this.pendingTasks=I(Jr,{optional:!0})??void 0)}emit(e){let n=L(null);try{super.next(e)}finally{L(n)}}subscribe(e,n,r){let o=e,i=n||(()=>null),s=r;if(e&&typeof e=="object"){let l=e;o=l.next?.bind(l),i=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(i=this.wrapInTimeout(i),o&&(o=this.wrapInTimeout(o)),s&&(s=this.wrapInTimeout(s)));let c=super.subscribe({next:o,error:i,complete:s});return e instanceof Le&&e.add(c),c}wrapInTimeout(e){return n=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{e(n)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},Et=Wu;function lc(...t){}function Id(t){let e,n;function r(){t=lc;try{n!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(n),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{t(),r()}),typeof requestAnimationFrame=="function"&&(n=requestAnimationFrame(()=>{t(),r()})),()=>r()}function bg(t){return queueMicrotask(()=>t()),()=>{t=lc}}var _d="isAngularZone",Ki=_d+"_ID",gT=0,Ue=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Et(!1);onMicrotaskEmpty=new Et(!1);onStable=new Et(!1);onError=new Et(!1);constructor(e){let{enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:o=!1,scheduleInRootZone:i=vg}=e;if(typeof Zone>"u")throw new U(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!o&&r,s.shouldCoalesceRunChangeDetection=o,s.callbackScheduled=!1,s.scheduleInRootZone=i,ST(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(_d)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new U(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new U(909,!1)}run(e,n,r){return this._inner.run(e,n,r)}runTask(e,n,r,o){let i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,e,yT,lc,lc);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(e,n,r){return this._inner.runGuarded(e,n,r)}runOutsideAngular(e){return this._outer.run(e)}},yT={};function Md(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function vT(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function e(){Id(()=>{t.callbackScheduled=!1,zu(t),t.isCheckStableRunning=!0,Md(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{e()}):t._outer.run(()=>{e()}),zu(t)}function ST(t){let e=()=>{vT(t)},n=gT++;t._inner=t._inner.fork({name:"angular",properties:{[_d]:!0,[Ki]:n,[Ki+n]:!0},onInvokeTask:(r,o,i,s,c,l)=>{if(bT(l))return r.invokeTask(i,s,c,l);try{return Im(t),r.invokeTask(i,s,c,l)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&e(),_m(t)}},onInvoke:(r,o,i,s,c,l,u)=>{try{return Im(t),r.invoke(i,s,c,l,u)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!ET(l)&&e(),_m(t)}},onHasTask:(r,o,i,s)=>{r.hasTask(i,s),o===i&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,zu(t),Md(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,o,i,s)=>(r.handleError(i,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function zu(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Im(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function _m(t){t._nesting--,Md(t)}var Yi=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Et;onMicrotaskEmpty=new Et;onStable=new Et;onError=new Et;run(e,n,r){return e.apply(n,r)}runGuarded(e,n,r){return e.apply(n,r)}runOutsideAngular(e){return e()}runTask(e,n,r,o){return e.apply(n,r)}};function bT(t){return Eg(t,"__ignore_ng_zone__")}function ET(t){return Eg(t,"__scheduler_tick__")}function Eg(t,e){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[e]===!0}var Jt=class{_console=console;handleError(e){this._console.error("ERROR",e)}};function Dg(t){return DT(t)?t:new qu(t)}function DT(t){return t instanceof Error||typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.message=="string"}var qu=class extends Error{constructor(e){super(String(e),{cause:e}),this.name="ErrorBoundaryWrappedError"}},Xr=new H("",{factory:()=>{let t=I(Ue),e=I(ft),n;return r=>{t.runOutsideAngular(()=>{e.destroyed&&!n?setTimeout(()=>{throw r}):(n??=e.get(Jt),n.handleError(r))})}}}),Tg={provide:ns,useValue:()=>{let t=I(Jt,{optional:!0})},multi:!0};function be(t,e){let[n,r,o]=yu(t,e?.equal),i=n,s=i[Xe];return i.set=r,i.update=o,i.asReadonly=wg.bind(i),i}function wg(){let t=this[Xe];if(t.readonlyFn===void 0){let e=()=>this();e[Xe]=t,t.readonlyFn=e}return t.readonlyFn}var ds=new H("",{factory:()=>TT}),TT="ng";var Nc=new H(""),fs=new H("",{providedIn:"platform",factory:()=>"unknown"});var hs=new H("",{factory:()=>I(nt).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var ps=(()=>{class t{view;node;constructor(n,r){this.view=n,this.node=r}static __NG_ELEMENT_ID__=wT}return t})();function wT(){return new ps(Z(),tt())}var Cn=class{},ms=new H("",{factory:()=>!0});var Pd=new H(""),Rc=(()=>{class t{static \u0275prov=Y({token:t,providedIn:"root",factory:()=>new Qu})}return t})(),Qu=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let n=e.zone,r=this.queues.get(n);r.has(e)&&(r.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let n=e.zone;this.queues.has(n)||this.queues.set(n,new Set);let r=this.queues.get(n);r.has(e)||r.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[n,r]of this.queues)n===null?e||=this.flushQueue(r):e||=n.run(()=>this.flushQueue(r));e||(this.dirtyEffectCount=0)}}flushQueue(e){let n=!1;for(let r of e)r.dirty&&(this.dirtyEffectCount--,n=!0,r.run());return n}},uc=class{[Xe];constructor(e){this[Xe]=e}destroy(){this[Xe].destroy()}};function on(t,e){let n=e?.injector??I(ht),r=e?.manualCleanup!==!0?n.get(et):null,o,i=n.get(ps,null,{optional:!0}),s=n.get(Cn);return i!==null?(o=Ig(i.view,s,t),r instanceof cc&&r._lView===i.view&&(r=null)):o=_T(t,n.get(Rc),s),o.injector=n,r!==null&&(o.onDestroyFns=[r.onDestroy(()=>o.destroy())]),new uc(o)}var Cg=C(S({},bu),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Qi(!1);try{Eu(this)}finally{Qi(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=L(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],L(t)}}}),CT=C(S({},Cg),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(No(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),IT=C(S({},Cg),{consumerMarkedDirty(){this.view[G]|=8192,Yr(this.view),this.notifier.notify(13)},destroy(){if(No(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Tn]?.delete(this)}});function Ig(t,e,n){let r=Object.create(IT);return r.view=t,r.zone=typeof Zone<"u"?Zone.current:null,r.notifier=e,r.userFn=n,r.fn=_g(r,n),t[Tn]??=new Set,t[Tn].add(r),r.consumerMarkedDirty(r),r}function _T(t,e,n){let r=Object.create(CT);return r.userFn=t,r.fn=_g(r,t),r.scheduler=e,r.notifier=n,r.zone=typeof Zone<"u"?Zone.current:null,r.scheduler.add(r),r.notifier.notify(12),r}function _g(t,e){return()=>{e(n=>(t.cleanupFns??=[]).push(n))}}var gs=(()=>{class t{internalPendingTasks=I(Jr);scheduler=I(Cn);errorHandler=I(Xr);add(){let n=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(n)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(n))}}run(n){let r=this.add();try{n().catch(this.errorHandler).finally(r)}catch(o){this.errorHandler(o),r()}}static \u0275prov=Y({token:t,providedIn:"root",factory:()=>new t})}return t})();var ly=Symbol("InputSignalNode#UNSET");function _s(t){return{toString:t}.toString()}var te=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(te||{}),Hc=class{previousValue;currentValue;firstChange;constructor(e,n,r){this.previousValue=e,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}};function uy(t,e,n,r){e!==null?e.applyValueToInputSignal(e,r):t[n]=r}var dy=null,tl=(()=>{dy=Mg;let t=()=>Mg;return t.ngInherit=!0,t})();function zT(){return dy}function Mg(t){return t.type.prototype.ngOnChanges&&(t.setInput=QT),qT}function qT(){let t=fy(this),e=t?.current;if(e){let n=t.previous;if(n===nr)t.previous=e;else for(let r in e)n[r]=e[r];t.current=null,this.ngOnChanges(e)}}function QT(t,e,n,r,o){let i=this.declaredInputs[r],s=fy(t)||KT(t,{previous:nr,current:null}),c=s.current||(s.current={}),l=s.previous,u=l[i];c[i]=new Hc(u&&u.currentValue,n,l===nr),uy(t,e,o,n)}var Ud="__ngSimpleChanges__";function fy(t){return Object.hasOwn(t,Ud)&&t[Ud]||null}function KT(t,e){return t[Ud]=e}var Pg=[];var oe=function(t,e=null,n){for(let r=0;r<Pg.length;r++){let o=Pg[r];o(t,e,n)}};function YT(t,e,n){let{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=e.type.prototype;if(r){let s=zT()(e);(n.preOrderHooks??=[]).push(t,s),(n.preOrderCheckHooks??=[]).push(t,s)}o&&(n.preOrderHooks??=[]).push(0-t,o),i&&((n.preOrderHooks??=[]).push(t,i),(n.preOrderCheckHooks??=[]).push(t,i))}function ZT(t,e){for(let n=e.directiveStart,r=e.directiveEnd;n<r;n++){let i=t.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:c,ngAfterViewInit:l,ngAfterViewChecked:u,ngOnDestroy:d}=i;s&&(t.contentHooks??=[]).push(-n,s),c&&((t.contentHooks??=[]).push(n,c),(t.contentCheckHooks??=[]).push(n,c)),l&&(t.viewHooks??=[]).push(-n,l),u&&((t.viewHooks??=[]).push(n,u),(t.viewCheckHooks??=[]).push(n,u)),d!=null&&(t.destroyHooks??=[]).push(n,d)}}function Ac(t,e,n){hy(t,e,3,n)}function Oc(t,e,n,r){(t[G]&3)===n&&hy(t,e,n,r)}function xd(t,e){let n=t[G];(n&3)===e&&(n&=16383,n+=1,t[G]=n)}function hy(t,e,n,r){let o=r!==void 0?t[Wr]&65535:0,i=r??-1,s=e.length-1,c=0;for(let l=o;l<s;l++)if(typeof e[l+1]=="number"){if(c=e[l],r!=null&&c>=r)break}else e[l]<0&&(t[Wr]+=65536),(c<i||i==-1)&&(JT(t,n,e,l),t[Wr]=(t[Wr]&4294901760)+l+2),l++}function xg(t,e){oe(te.LifecycleHookStart,t,e);let n=L(null);try{e.call(t)}finally{L(n),oe(te.LifecycleHookEnd,t,e)}}function JT(t,e,n,r){let o=n[r]<0,i=n[r+1],s=o?-n[r]:n[r],c=t[s];o?t[G]>>14<t[Wr]>>16&&(t[G]&3)===e&&(t[G]+=16384,xg(c,i)):xg(c,i)}var ei=-1,no=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,n,r,o){this.factory=e,this.name=o,this.canSeeViewProviders=n,this.injectImpl=r}};function XT(t){return(t.flags&8)!==0}function ew(t){return(t.flags&16)!==0}function tw(t,e,n){let r=0;for(;r<n.length;){let o=n[r];if(typeof o=="number"){if(o!==0)break;r++;let i=n[r++],s=n[r++],c=n[r++];t.setAttribute(e,s,c,i)}else{let i=o,s=n[++r];rw(i)?t.setProperty(e,i,s):t.setAttribute(e,i,s),r++}}return r}function nw(t){return t===3||t===4||t===6}function rw(t){return t.charCodeAt(0)===64}function ti(t,e){if(!(e===null||e.length===0))if(t===null||t.length===0)t=e.slice();else{let n=-1;for(let r=0;r<e.length;r++){let o=e[r];typeof o=="number"?n=o:n===0||(n===-1||n===2?Ng(t,n,o,null,e[++r]):Ng(t,n,o,null,null))}}return t}function Ng(t,e,n,r,o){let i=0,s=t.length;if(e===-1)s=-1;else for(;i<t.length;){let c=t[i++];if(typeof c=="number"){if(c===e){s=-1;break}else if(c>e){s=i-1;break}}}for(;i<t.length;){let c=t[i];if(typeof c=="number")break;if(c===n){o!==null&&(t[i+1]=o);return}i++,o!==null&&i++}s!==-1&&(t.splice(s,0,e),i=s+1),t.splice(i++,0,n),o!==null&&t.splice(i++,0,o)}function py(t){return t!==ei}function Vc(t){return t&32767}function ow(t){return t>>16}function Uc(t,e){let n=ow(t),r=e;for(;n>0;)r=r[rr],n--;return r}var jd=!0;function Rg(t){let e=jd;return jd=t,e}var iw=256,my=iw-1,gy=5,sw=0,sn={};function aw(t,e,n){let r;typeof n=="string"?r=n.charCodeAt(0)||0:Object.hasOwn(n,$r)&&(r=n[$r]),r==null&&(r=n[$r]=sw++);let o=r&my,i=1<<o;e.data[t+(o>>gy)]|=i}function jc(t,e){let n=yy(t,e);if(n!==-1)return n;let r=e[j];r.firstCreatePass&&(t.injectorIndex=e.length,Nd(r.data,t),Nd(e,null),Nd(r.blueprint,null));let o=yf(t,e),i=t.injectorIndex;if(py(o)){let s=Vc(o),c=Uc(o,e),l=c[j].data;for(let u=0;u<8;u++)e[i+u]=c[s+u]|l[s+u]}return e[i+8]=o,i}function Nd(t,e){t.push(0,0,0,0,0,0,0,0,e)}function yy(t,e){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||e[t.injectorIndex+8]===null?-1:t.injectorIndex}function yf(t,e){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let n=0,r=null,o=e;for(;o!==null;){if(r=Dy(o),r===null)return ei;if(n++,o=o[rr],r.injectorIndex!==-1)return r.injectorIndex|n<<16}return ei}function Bd(t,e,n){aw(t,e,n)}function vy(t,e,n){if(n&8||t!==void 0)return t;mc(e,"NodeInjector")}function Sy(t,e,n,r){if(n&8&&r===void 0&&(r=null),(n&3)===0){let o=t[In],i=bt(void 0);try{return o?o.get(e,r,n&8):td(e,r,n&8)}finally{bt(i)}}return vy(r,e,n)}function by(t,e,n,r=0,o){if(t!==null){if(e[G]&2048&&!(r&2)){let s=dw(t,e,n,r,sn);if(s!==sn)return s}let i=Ey(t,e,n,r,sn);if(i!==sn)return i}return Sy(e,n,r,o)}function Ey(t,e,n,r,o){let i=lw(n);if(typeof i=="function"){if(!Td(e,t,r))return r&1?vy(o,n,r):Sy(e,n,r,o);try{let s;if(s=i(r),s==null&&!(r&8))mc(n);else return s}finally{wd()}}else if(typeof i=="number"){let s=null,c=yy(t,e),l=ei,u=r&1?e[mt][pt]:null;for((c===-1||r&4)&&(l=c===-1?yf(t,e):e[c+8],l===ei||!Ag(r,!1)?c=-1:(s=e[j],c=Vc(l),e=Uc(l,e)));c!==-1;){let d=e[j];if(kg(i,c,d.data)){let f=cw(c,e,n,s,r,u);if(f!==sn)return f}l=e[c+8],l!==ei&&Ag(r,e[j].data[c+8]===u)&&kg(i,c,e)?(s=d,c=Vc(l),e=Uc(l,e)):c=-1}}return o}function cw(t,e,n,r,o,i){let s=e[j],c=s.data[t+8],l=r==null?Mn(c)&&jd:r!=s&&(c.type&3)!==0,u=o&1&&i===c,d=Fc(c,s,n,l,u);return d!==null?Ss(e,s,d,c,o):sn}function Fc(t,e,n,r,o){let i=t.providerIndexes,s=e.data,c=i&1048575,l=t.directiveStart,u=t.directiveEnd,d=i>>20,f=r?c:c+d,p=o?c+d:u;for(let h=f;h<p;h++){let m=s[h];if(h<l&&n===m||h>=l&&m.type===n)return h}if(o){let h=s[l];if(h&&nn(h)&&h.type===n)return l}return null}function Ss(t,e,n,r,o){let i=t[n],s=e.data;if(i instanceof no){let c=i;if(c.resolving)throw ed("");let l=Rg(c.canSeeViewProviders);c.resolving=!0;let u=s[n].type||s[n],d,f=c.injectImpl?bt(c.injectImpl):null,p=Td(t,r,0);try{i=t[n]=c.factory(void 0,o,s,t,r),e.firstCreatePass&&n>=r.directiveStart&&YT(n,s[n],e)}finally{f!==null&&bt(f),Rg(l),c.resolving=!1,wd()}}return i}function lw(t){if(typeof t=="string")return t.charCodeAt(0)||0;let e=Object.hasOwn(t,$r)?t[$r]:void 0;return typeof e=="number"?e>=0?e&my:uw:e}function kg(t,e,n){let r=1<<t;return!!(n[e+(t>>gy)]&r)}function Ag(t,e){return!(t&2)&&!(t&1&&e)}var xn=class{_tNode;_lView;constructor(e,n){this._tNode=e,this._lView=n}get(e,n,r){return by(this._tNode,this._lView,e,Hr(r),n)}};function uw(){return new xn(tt(),Z())}function oi(t){return _s(()=>{let e=t.prototype.constructor,n=e[qi]||$d(e),r=Object.prototype,o=Object.getPrototypeOf(t.prototype).constructor;for(;o&&o!==r;){let i=o[qi]||$d(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function $d(t){return Yu(t)?()=>{let e=$d(ze(t));return e&&e()}:Vr(t)}function dw(t,e,n,r,o){let i=t,s=e;for(;i!==null&&s!==null&&s[G]&2048&&!Yo(s);){let c=Ey(i,s,n,r|2,sn);if(c!==sn)return c;r&=-5;let l=i.parent;if(!l){let u=s[cd];if(u){let d=u.get(n,sn,r);if(d!==sn)return d}l=Dy(s),s=s[rr]}i=l}return o}function Dy(t){let e=t[j],n=e.type;return n===2?e.declTNode:n===1?t[pt]:null}function ar(t){return{token:t.token,providedIn:t.autoProvided===!1?null:"root",factory:t.factory,value:void 0}}function fw(){return ii(tt(),Z())}function ii(t,e){return new an(Rt(t,e))}var an=(()=>{class t{nativeElement;constructor(n){this.nativeElement=n}static __NG_ELEMENT_ID__=fw}return t})();function hw(t){return t instanceof an?t.nativeElement:t}function pw(){return this._results[Symbol.iterator]()}var Bc=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new ve}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,n){return this._results.reduce(e,n)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,n){this.dirty=!1;let r=Am(e);(this._changesDetected=!km(this._results,r,n))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=pw};function Ty(t){return(t.flags&128)===128}var vf=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(vf||{}),wy=new Map,mw=0;function gw(){return mw++}function yw(t){wy.set(t[ss],t)}function Gd(t){wy.delete(t[ss])}var Og="__ngContext__";function ni(t,e){_n(e)?(t[Og]=e[ss],yw(e)):t[Og]=e}function Cy(t){return _y(t[Ko])}function Iy(t){return _y(t[xt])}function _y(t){for(;t!==null&&!Nt(t);)t=t[xt];return t}var Wd;function Sf(t){Wd=t}function My(){if(Wd!==void 0)return Wd;if(typeof document<"u")return document;throw new U(210,!1)}var Py="r";var xy="di";var Ny=!1,Ry=new H("",{factory:()=>Ny});var Fg=new WeakMap;function vw(t,e){if(t==null||typeof t!="object")return;let n=Fg.get(t);n||(n=new WeakSet,Fg.set(t,n)),n.add(e)}var Sw=(t,e,n,r)=>{};function bw(t,e,n,r){Sw(t,e,n,r)}function bf(t){return(t.flags&32)===32}var Ew=()=>null;function ky(t,e,n=!1){return Ew(t,e,n)}function Ay(t,e){let n=t.contentQueries;if(n!==null){let r=L(null);try{for(let o=0;o<n.length;o+=2){let i=n[o],s=n[o+1];if(s!==-1){let c=t.data[s];Ic(i),c.contentQueries(2,e[s],s)}}}finally{L(r)}}}function zd(t,e,n){Ic(0);let r=L(null);try{e(t,n)}finally{L(r)}}function Oy(t,e,n){if(ud(e)){let r=L(null);try{let o=e.directiveStart,i=e.directiveEnd;for(let s=o;s<i;s++){let c=t.data[s];if(c.contentQueries){let l=n[s];c.contentQueries(1,l,s)}}}finally{L(r)}}}var Bt=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Bt||{}),qd=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}`}};function $c(t){return t instanceof qd?t.changingThisBreaksApplicationSecurity:t}function Dw(t,e){return t.createText(e)}function Tw(t,e,n){t.setValue(e,n)}function Fy(t,e,n){return t.createElement(e,n)}function eo(t,e,n,r,o){t.insertBefore(e,n,r,o)}function Ly(t,e,n){t.appendChild(e,n)}function Lg(t,e,n,r,o){r!==null?eo(t,e,n,r,o):Ly(t,e,n)}function Hy(t,e,n,r){t.removeChild(null,e,n,r)}function ww(t,e,n){t.setAttribute(e,"style",n)}function Cw(t,e,n){n===""?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n)}function Vy(t,e,n){let{mergedAttrs:r,classes:o,styles:i}=n;r!==null&&tw(t,e,r),o!==null&&Cw(t,e,o),i!==null&&ww(t,e,i)}function Iw(t,e,n){let r=t.length;for(;;){let o=t.indexOf(e,n);if(o===-1)return o;if(o===0||t.charCodeAt(o-1)<=32){let i=e.length;if(o+i===r||t.charCodeAt(o+i)<=32)return o}n=o+1}}var Uy="ng-template";function _w(t,e,n,r){let o=0;if(r){for(;o<e.length&&typeof e[o]=="string";o+=2)if(e[o]==="class"&&Iw(e[o+1].toLowerCase(),n,0)!==-1)return!0}else if(Ef(t))return!1;if(o=e.indexOf(1,o),o>-1){let i;for(;++o<e.length&&typeof(i=e[o])=="string";)if(i.toLowerCase()===n)return!0}return!1}function Ef(t){return t.type===4&&t.value!==Uy}function Mw(t,e,n){let r=t.type===4&&!n?Uy:t.value;return e===r}function Pw(t,e,n){let r=4,o=t.attrs,i=o!==null?Rw(o):0,s=!1;for(let c=0;c<e.length;c++){let l=e[c];if(typeof l=="number"){if(!s&&!jt(r)&&!jt(l))return!1;if(s&&jt(l))continue;s=!1,r=l|r&1;continue}if(!s)if(r&4){if(r=2|r&1,l!==""&&!Mw(t,l,n)||l===""&&e.length===1){if(jt(r))return!1;s=!0}}else if(r&8){if(o===null||!_w(t,o,l,n)){if(jt(r))return!1;s=!0}}else{let u=e[++c],d=xw(l,o,Ef(t),n);if(d===-1){if(jt(r))return!1;s=!0;continue}if(u!==""){let f;if(d>i?f="":f=o[d+1].toLowerCase(),r&2&&u!==f){if(jt(r))return!1;s=!0}}}}return jt(r)||s}function jt(t){return(t&1)===0}function xw(t,e,n,r){if(e===null)return-1;let o=0;if(r||!n){let i=!1;for(;o<e.length;){let s=e[o];if(s===t)return o;if(s===3||s===6)i=!0;else if(s===1||s===2){let c=e[++o];for(;typeof c=="string";)c=e[++o];continue}else{if(s===4)break;if(s===0){o+=4;continue}}o+=i?1:2}return-1}else return kw(e,t)}function Nw(t,e,n=!1){for(let r=0;r<e.length;r++)if(Pw(t,e[r],n))return!0;return!1}function Rw(t){for(let e=0;e<t.length;e++){let n=t[e];if(nw(n))return e}return t.length}function kw(t,e){let n=t.indexOf(4);if(n>-1)for(n++;n<t.length;){let r=t[n];if(typeof r=="number")return-1;if(r===e)return n;n++}return-1}function Hg(t,e){return t?":not("+e.trim()+")":e}function Aw(t){let e=t[0],n=1,r=2,o="",i=!1;for(;n<t.length;){let s=t[n];if(typeof s=="string")if(r&2){let c=t[++n];o+="["+s+(c.length>0?'="'+c+'"':"")+"]"}else r&8?o+="."+s:r&4&&(o+=" "+s);else o!==""&&!jt(s)&&(e+=Hg(i,o),o=""),r=s,i=i||!jt(r);n++}return o!==""&&(e+=Hg(i,o)),e}function Ow(t){return t.map(Aw).join(",")}function Fw(t){let e=[],n=[],r=1,o=2;for(;r<t.length;){let i=t[r];if(typeof i=="string")o===2?i!==""&&e.push(i,t[++r]):o===8&&n.push(i);else{if(!jt(o))break;o=i}r++}return n.length&&e.push(1,...n),e}var At={},Nn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(Nn||{}),Lw;function Df(t,e){return Lw(t,e)}var Tf=new Set;var AV=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Qd=new WeakMap;function jy(t){return t?t[rr]??t:null}var Jo=new WeakSet;function Hw(t,e,n){let r=Qd.get(t);if(!r||r.length===0)return;let o=e.parentNode,i=e.previousSibling,s=jy(n);for(let c=r.length-1;c>=0;c--){let{el:l,declarationView:u}=r[c],d=l.parentNode;l===e?(r.splice(c,1),Jo.add(l),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):i&&l===i?(r.splice(c,1),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),l.parentNode?.removeChild(l)):d&&o&&d!==o&&(s===null||u===null||s===u)&&(r.splice(c,1),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),l.parentNode?.removeChild(l))}}function Vw(t,e,n){let r=jy(n),o=Qd.get(t);o?o.some(i=>i.el===e)||o.push({el:e,declarationView:r}):Qd.set(t,[{el:e,declarationView:r}])}var nl=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(nl||{}),cn=new H(""),Vg=new Set;function cr(t){Vg.has(t)||(Vg.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var wf=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=Y({token:t,providedIn:"root",factory:()=>new t})}return t})(),By=[0,1,2,3],$y=(()=>{class t{ngZone=I(Ue);scheduler=I(Cn);errorHandler=I(Jt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){I(cn,{optional:!0})}execute(){let n=this.sequences.size>0;n&&oe(te.AfterRenderHooksStart),this.executing=!0;for(let r of By)for(let o of this.sequences)if(!(o.erroredOrDestroyed||!o.hooks[r]))try{o.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let i=o.hooks[r];return i(o.pipelinedValue)},o.snapshot))}catch(i){o.erroredOrDestroyed=!0,this.errorHandler?.handleError(i)}this.executing=!1;for(let r of this.sequences)r.afterRun(),r.once&&(this.sequences.delete(r),r.destroy());for(let r of this.deferredRegistrations)this.sequences.add(r);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),n&&oe(te.AfterRenderHooksEnd)}register(n){let{view:r}=n;r!==void 0?((r[zr]??=[]).push(n),Yr(r),r[G]|=8192):this.addSequence(n)}addSequence(n){this.executing?this.deferredRegistrations.add(n):this.sequences.add(n),this.scheduler.notify(7)}unregister(n){this.executing&&this.sequences.has(n)?(n.erroredOrDestroyed=!0,n.pipelinedValue=void 0,n.once=!0):(this.sequences.delete(n),this.deferredRegistrations.delete(n))}maybeTrace(n,r){return r?r.run(nl.AFTER_NEXT_RENDER,n):n()}static \u0275prov=Y({token:t,providedIn:"root",factory:()=>new t})}return t})(),Gc=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(e,n,r,o,i,s=null){this.impl=e,this.hooks=n,this.view=r,this.once=o,this.snapshot=s,this.unregisterOnDestroy=i?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let e=this.view?.[zr];e&&(this.view[zr]=e.filter(n=>n!==this))}};function Cf(t,e){let n=e?.injector??I(ht);return cr("NgAfterNextRender"),jw(t,n,e,!0)}function Uw(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function jw(t,e,n,r){let o=e.get(wf);o.impl??=e.get($y);let i=e.get(cn,null,{optional:!0}),s=n?.manualCleanup!==!0?e.get(et):null,c=e.get(ps,null,{optional:!0}),l=new Gc(o.impl,Uw(t),c?.view,r,s,i?.snapshot(null));return o.impl.register(l),l}var Kd=null,Gy=null;function Ug(t,e,n,r){Kd?.maybeQueueEnterAnimation(t,e,n,r)}function jg(t,e,n,r){Kd===null?r(!1):Kd.runLeaveAnimationsWithCallback(t,e,n,r)}function Bw(t){Gy?.initViewDetachAnimations(t)}function $w(t){Gy?.clearViewDetachAnimations(t)}function Xo(t,e,n,r,o,i,s,c){if(o!=null){let l,u=!1;Nt(o)?l=o:_n(o)&&(u=!0,o=o[Ut]);let d=qe(o);t===0&&r!==null?(Ug(c,r,i,n),s==null?Ly(e,r,d):eo(e,r,d,s||null,!0)):t===1&&r!==null?(eo(e,r,d,s||null,!0),Hw(i,d,c),Jo.has(d)||Ug(c,r,i,n)):t===2?(c?.[Bm]?.leave?.has(i.index)&&Vw(i,d,c),Jo.delete(d),jg(c,i,n,f=>{if(Jo.has(d)){Jo.delete(d);return}Hy(e,d,u,f)})):t===3&&(Jo.delete(d),jg(c,i,n,()=>{e.destroyNode(d)})),l!=null&&nC(e,t,n,l,i,r,s)}}function Gw(t,e){Wy(t,e),e[Ut]=null,e[pt]=null}function Ww(t,e,n,r,o,i){r[Ut]=o,r[pt]=e,ol(t,r,n,1,o,i)}function Wy(t,e){e[en].changeDetectionScheduler?.notify(9),ol(t,e,e[Se],2,null,null)}function zw(t){let e=t[Ko];if(!e)return Rd(t[j],t);for(;e;){let n=null;if(_n(e))n=e[Ko];else{let r=e[Te];r&&(n=r)}if(!n){for(;e&&!e[xt]&&e!==t;)_n(e)&&Rd(e[j],e),e=e[_e];e===null&&(e=t),_n(e)&&Rd(e[j],e),n=e&&e[xt]}e=n}}function If(t,e){let n=t[Qr],r=n.indexOf(e);n.splice(r,1)}function rl(t,e){if(Kr(e))return;let n=e[Se];n.destroyNode&&ol(t,e,n,3,null,null),zw(e)}function Rd(t,e){if(Kr(e))return;let n=L(null);try{e[G]&=-129,e[G]|=256,e[Dt]&&No(e[Dt]),Qw(t,e),qw(t,e),e[j].type===1&&e[Se].destroy();let r=e[or];if(r!==null&&Nt(e[_e])){r!==e[_e]&&If(r,e);let o=e[tn];o!==null&&o.detachView(t)}Gd(e)}finally{L(n)}}function qw(t,e){let n=t.cleanup,r=e[Qo];if(n!==null)for(let s=0;s<n.length-1;s+=2)if(typeof n[s]=="string"){let c=n[s+3];c>=0?r[c]():r[-c].unsubscribe(),s+=2}else{let c=r[n[s+1]];n[s].call(c)}r!==null&&(e[Qo]=null);let o=e[Dn];if(o!==null){e[Dn]=null;for(let s=0;s<o.length;s++){let c=o[s];c()}}let i=e[Tn];if(i!==null){e[Tn]=null;for(let s of i)s.destroy()}}function Qw(t,e){let n;if(t!=null&&(n=t.destroyHooks)!=null)for(let r=0;r<n.length;r+=2){let o=e[n[r]];if(!(o instanceof no)){let i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){let c=o[i[s]],l=i[s+1];oe(te.LifecycleHookStart,c,l);try{l.call(c)}finally{oe(te.LifecycleHookEnd,c,l)}}else{oe(te.LifecycleHookStart,o,i);try{i.call(o)}finally{oe(te.LifecycleHookEnd,o,i)}}}}}function Kw(t,e,n){if(e===null)throw new U(510,!1);return Yw(t,e.parent,n)}function Yw(t,e,n){let r=e;for(;r!==null&&r.type&168;)e=r,r=e.parent;if(r===null)return n[Ut];if(Mn(r)){let{encapsulation:o}=t.data[r.directiveStart+r.componentOffset];if(o===Bt.None||o===Bt.Emulated)return null}return Rt(r,n)}function Zw(t,e,n){return Xw(t,e,n)}function Jw(t,e,n){return t.type&40?Rt(t,n):null}var Xw=Jw,Bg;function _f(t,e,n,r){let o=Kw(t,r,e),i=e[Se],s=r.parent||e[pt],c=Zw(s,r,e);if(o!=null)if(Array.isArray(n))for(let l=0;l<n.length;l++)Lg(i,o,n[l],c,!1);else Lg(i,o,n,c,!1);Bg!==void 0&&Bg(i,r,e,n,o)}function ys(t,e){if(e!==null){let n=e.type;if(n&3)return Rt(e,t);if(n&4)return Yd(-1,t[e.index]);if(n&8){let r=e.child;if(r!==null)return ys(t,r);{let o=t[e.index];return Nt(o)?Yd(-1,o):qe(o)}}else{if(n&128)return ys(t,e.next);if(n&32)return Df(e,t)()||qe(t[e.index]);{let r=zy(t,e);if(r!==null){if(Array.isArray(r))return r[0];let o=wn(t[mt]);return ys(o,r)}else return ys(t,e.next)}}}return null}function zy(t,e){if(e!==null){let r=t[mt][pt],o=e.projection;return r.projection[o]}return null}function Yd(t,e){let n=Te+t+1;if(n<e.length){let r=e[n],o=r[j].firstChild;if(o!==null)return ys(r,o)}return e[qr]}function Mf(t,e,n,r,o,i,s){for(;n!=null;){let c=r[In];if(n.type===128){n=n.next;continue}let l=r[n.index],u=n.type;if(s&&e===0&&(l&&ni(qe(l),r),n.flags|=2),!bf(n))if(u&8)Mf(t,e,n.child,r,o,i,!1),Xo(e,t,c,o,l,n,i,r);else if(u&32){let d=Df(n,r),f;for(;f=d();)Xo(e,t,c,o,f,n,i,r);Xo(e,t,c,o,l,n,i,r)}else u&16?tC(t,e,r,n,o,i):Xo(e,t,c,o,l,n,i,r);n=s?n.projectionNext:n.next}}function ol(t,e,n,r,o,i){t.type===3?eC(n,r,e,o,i):Mf(n,r,t.firstChild,e,o,i,!1)}function eC(t,e,n,r,o){let s=n[j].firstChild,c=s.next,l=qe(n[s.index]),u=qe(n[c.index]),d=c.index+1,f=n[d];if(e===1||e===0)r!==null&&(f&&f.hasChildNodes()?eo(t,r,f,o,!0):(eo(t,r,l,o,!0),eo(t,r,u,o,!0)));else if(e===2){if(f||(f=document.createDocumentFragment(),n[d]=f),l&&l.parentNode===f)return;let p=l;for(;p!==null;){let h=p.nextSibling;if(f.appendChild(p),p===u)break;p=h}}}function tC(t,e,n,r,o,i){let s=n[mt],l=s[pt].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++){let d=l[u];Xo(e,t,n[In],o,d,r,i,n)}else{let u=l,d=s[_e];Ty(r)&&(u.flags|=128),Mf(t,e,u,d,o,i,!0)}}function nC(t,e,n,r,o,i,s){let c=r[qr],l=qe(r);if(c!==l&&Xo(e,t,n,i,c,o,s),(r[G]&4)===0)for(let u=Te;u<r.length;u++){let d=r[u];ol(d[j],d,t,e,i,c)}}function rC(t,e,n,r,o){if(e)o?t.addClass(n,r):t.removeClass(n,r);else{let i=r.indexOf("-")===-1?void 0:Nn.DashCase;o==null?t.removeStyle(n,r,i):(typeof o=="string"&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=Nn.Important),t.setStyle(n,r,o,i))}}function Pf(t,e,n,r,o,i,s,c,l,u,d){let f=je+r,p=f+o,h=oC(f,p),m=typeof u=="function"?u():u;return h[j]={type:t,blueprint:h,template:n,queries:null,viewQuery:c,declTNode:e,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i=="function"?i():i,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:m,incompleteFirstPass:!1,ssrId:d}}function oC(t,e){let n=[];for(let r=0;r<e;r++)n.push(r<t?null:At);return n}function iC(t){let e=t.tView;return e===null||e.incompleteFirstPass?t.tView=Pf(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):e}function xf(t,e,n,r,o,i,s,c,l,u,d){let f=e.blueprint.slice();return f[Ut]=o,f[G]=r|4|128|8|64|1024,(u!==null||t&&t[G]&2048)&&(f[G]|=2048),fd(f),f[_e]=f[rr]=t,f[De]=n,f[en]=s||t&&t[en],f[Se]=c||t&&t[Se],f[In]=l||t&&t[In]||null,f[pt]=i,f[ss]=gw(),f[qo]=d,f[cd]=u,f[mt]=e.type==2?t[mt]:f,f}function sC(t,e,n){let r=Rt(e,t),o=iC(n),i=t[en].rendererFactory,s=Nf(t,xf(t,o,null,qy(n),r,e,null,i.createRenderer(r,n),null,null,null));return t[e.index]=s}function qy(t){let e=16;return t.signals?e=4096:t.onPush&&(e=64),e}function Qy(t,e,n,r){if(n===0)return-1;let o=e.length;for(let i=0;i<n;i++)e.push(r),t.blueprint.push(r),t.data.push(null);return o}function Nf(t,e){return t[Ko]?t[ad][xt]=e:t[Ko]=e,t[ad]=e,e}function N(t=1){Ky(Be(),Z(),Pn()+t,!1)}function Ky(t,e,n,r){if(!r)if((e[G]&3)===3){let i=t.preOrderCheckHooks;i!==null&&Ac(e,i,n)}else{let i=t.preOrderHooks;i!==null&&Oc(e,i,0,n)}ir(n)}var Ms=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Ms||{});function ro(t,e,n,r){let o=L(null);try{let[i,s,c]=t.inputs[n],l=null;(s&Ms.SignalBased)!==0&&(l=e[i][Xe]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):c!==null&&(r=c.call(e,r)),t.setInput!==null?t.setInput(e,l,r,n,i):uy(e,l,i,r)}finally{L(o)}}function Yy(t,e,n,r,o){let i=Pn(),s=r&2;try{ir(-1),s&&e.length>je&&Ky(t,e,je,!1);let c=s?te.TemplateUpdateStart:te.TemplateCreateStart;oe(c,o,n),n(r,o)}finally{ir(i);let c=s?te.TemplateUpdateEnd:te.TemplateCreateEnd;oe(c,o,n)}}function Zy(t,e,n){hC(t,e,n),(n.flags&64)===64&&pC(t,e,n)}function Rf(t,e,n=Rt){let r=e.localNames;if(r!==null){let o=e.index+1;for(let i=0;i<r.length;i+=2){let s=r[i+1],c=s===-1?n(e,t):t[s];t[o++]=c}}}function aC(t,e,n,r){let i=r.get(Ry,Ny)||n===Bt.ShadowDom||n===Bt.ExperimentalIsolatedShadowDom,s=t.selectRootElement(e,i);return cC(s),s}function cC(t){lC(t)}var lC=()=>null;function uC(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function dC(t,e,n,r,o,i){let s=e[j];if(kf(t,s,e,n,r)){Mn(t)&&fC(e,t.index);return}t.type&3&&(n=uC(n)),Jy(t,e,n,r,o,i)}function Jy(t,e,n,r,o,i){if(t.type&3){let s=Rt(t,e);r=i!=null?i(r,t.value||"",n):r,r=Xy(n,s,r),o.setProperty(s,n,r)}else t.type&12}function Xy(t,e,n){return t==="src"&&(e.tagName==="IMG"||e.tagName==="VIDEO")?n==null?"":$c(n):n}function fC(t,e){let n=kt(e,t);n[G]&16||(n[G]|=64)}function hC(t,e,n){let r=n.directiveStart,o=n.directiveEnd;Mn(n)&&sC(e,n,t.data[r+n.componentOffset]),t.firstCreatePass||jc(n,e);let i=n.initialInputs;for(let s=r;s<o;s++){let c=t.data[s],l=Ss(e,t,s,n);if(ni(l,e),i!==null&&SC(e,s-r,l,c,n,i),nn(c)){let u=kt(n.index,e);u[De]=Ss(e,t,s,n)}}}function pC(t,e,n){let r=n.directiveStart,o=n.directiveEnd,i=n.index,s=lg();try{ir(i);for(let c=r;c<o;c++){let l=t.data[c],u=e[c];Cc(c),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&mC(l,u)}}finally{ir(-1),Cc(s)}}function mC(t,e){t.hostBindings!==null&&t.hostBindings(1,e)}function gC(t,e){let n=t.directiveRegistry,r=null;if(n)for(let o=0;o<n.length;o++){let i=n[o];Nw(e,i.selectors,!1)&&(r??=[],nn(i)?r.unshift(i):r.push(i))}return r}function yC(t,e,n,r,o,i){let s=Rt(t,e);r=Xy(n,s,r),vC(e[Se],s,i,t.value,n,r,o)}function vC(t,e,n,r,o,i,s){if(i==null)s?.(i,r||"",o),t.removeAttribute(e,o,n);else{let c=s==null?es(i):s(i,r||"",o);t.setAttribute(e,o,c,n)}}function SC(t,e,n,r,o,i){let s=i[e];if(s!==null)for(let c=0;c<s.length;c+=2){let l=s[c],u=s[c+1];ro(r,n,l,u)}}function ev(t,e,n,r,o){let i=je+n,s=e[j],c=o(s,e,t,r,n);e[i]=c,Zo(t,!0);let l=t.type===2;return l?(Vy(e[Se],c,t),(Zm()===0||bc(t))&&ni(c,e),Jm()):ni(c,e),Pc()&&(!l||!bf(t))&&_f(s,e,c,t),t}function tv(t){let e=t;return bd()?ng():(e=e.parent,Zo(e,!1)),e}function bC(t,e){let n=t[In];if(!n)return;let r;try{r=n.get(Xr,null)}catch{r=null}r?.(e)}function kf(t,e,n,r,o){let i=t.inputs?.[r],s=t.hostDirectiveInputs?.[r],c=!1;if(s)for(let l=0;l<s.length;l+=2){let u=s[l],d=s[l+1],f=e.data[u];ro(f,n[u],d,o),c=!0}if(i)for(let l of i){let u=n[l],d=e.data[l];ro(d,u,r,o),c=!0}return c}function EC(t,e,n,r,o,i){let s=null,c=null,l=null,u=!1,d=t.directiveToIndex.get(r.type);if(typeof d=="number"?s=d:[s,c,l]=d,c!==null&&l!==null&&t.hostDirectiveInputs&&Object.hasOwn(t.hostDirectiveInputs,o)){let f=t.hostDirectiveInputs[o];for(let p=0;p<f.length;p+=2){let h=f[p];if(h>=c&&h<=l){let m=e.data[h],v=f[p+1];ro(m,n[h],v,i),u=!0}else if(h>l)break}}return s!==null&&Object.hasOwn(r.inputs,o)&&(ro(r,n[s],o,i),u=!0),u}function DC(t,e){let n=kt(e,t),r=n[j];TC(r,n);let o=n[Ut];o!==null&&n[qo]===null&&(n[qo]=ky(o,n[In])),oe(te.ComponentStart);try{Af(r,n,n[De])}finally{oe(te.ComponentEnd,n[De])}}function TC(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])}function Af(t,e,n){_c(e);try{let r=t.viewQuery;r!==null&&zd(1,r,n);let o=t.template;o!==null&&Yy(t,e,o,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),e[tn]?.finishViewCreation(t),t.staticContentQueries&&Ay(t,e),t.staticViewQueries&&zd(2,t.viewQuery,n);let i=t.components;i!==null&&wC(e,i)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),r}finally{e[G]&=-5,Mc()}}function wC(t,e){for(let n=0;n<e.length;n++)DC(t,e[n])}function il(t,e,n,r){let o=L(null);try{let i=e.tView,c=t[G]&4096?4096:16,l=xf(t,i,n,c,null,e,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),u=t[e.index];l[or]=u;let d=t[tn];return d!==null&&(l[tn]=d.createEmbeddedView(i)),Af(i,l,n),l}finally{L(o)}}function bs(t,e){return!e||e.firstChild===null||Ty(t)}function Es(t,e,n,r,o=!1){if(t.type===3){let i=t.firstChild,s=i.next,c=qe(e[i.index]),l=qe(e[s.index]),u=c;for(;u!==null&&(r.push(u),u!==l);)u=u.nextSibling;return r}for(;n!==null;){if(n.type===128){n=o?n.projectionNext:n.next;continue}let i=e[n.index];if(i!==null)if(Nt(i)){let c=i[qr];c!==i[Ut]&&r.push(qe(i)),i[G]&4||nv(i,r),r.push(c)}else r.push(qe(i));let s=n.type;if(s&8)Es(t,e,n.child,r);else if(s&32){let c=Df(n,e),l;for(;l=c();)r.push(l)}else if(s&16){let c=zy(e,n);if(Array.isArray(c))r.push(...c);else{let l=wn(e[mt]);Es(l[j],l,c,r,!0)}}n=o?n.projectionNext:n.next}return r}function nv(t,e){for(let n=Te;n<t.length;n++){let r=t[n],o=r[j].firstChild;o!==null&&Es(r[j],r,o,e)}}function rv(t){if(t[zr]!==null){for(let e of t[zr])e.impl.addSequence(e);t[zr].length=0}}var ov=[];function CC(t){return t[Dt]??IC(t)}function IC(t){let e=ov.pop()??Object.create(MC);return e.lView=t,e}function _C(t){t.lView[Dt]!==t&&(t.lView=null,ov.push(t))}var MC=C(S({},xr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Yr(t.lView)},consumerOnSignalRead(){this.lView[Dt]=this}});function PC(t){let e=t[Dt]??Object.create(xC);return e.lView=t,e}var xC=C(S({},xr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let e=wn(t.lView);for(;e&&!iv(e[j]);)e=wn(e);e&&hd(e)},consumerOnSignalRead(){this.lView[Dt]=this}});function iv(t){return t.type!==2}function sv(t){if(t[Tn]===null)return;let e=!0;for(;e;){let n=!1;for(let r of t[Tn])if(r.dirty&&(n=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()),t[Tn]===null))return;e=n&&!!(t[G]&8192)}}var NC=100;function av(t,e=0){let r=t[en].rendererFactory,o=!1;o||r.begin?.();try{RC(t,e)}finally{o||r.end?.()}}function RC(t,e){let n=Ed();try{Qi(!0),Zd(t,e);let r=0;for(;ls(t);){if(r===NC)throw new U(103,!1);r++,Zd(t,1)}}finally{Qi(n)}}function kC(t,e,n,r){if(Kr(e))return;let o=e[G],i=!1,s=!1;_c(e);let c=!0,l=null,u=null;i||(iv(t)?(u=CC(e),l=xo(u)):xa()===null?(c=!1,u=PC(e),l=xo(u)):e[Dt]&&(No(e[Dt]),e[Dt]=null));try{fd(e),sg(t.bindingStartIndex),n!==null&&Yy(t,e,n,2,r);let d=(o&3)===3;if(!i)if(d){let h=t.preOrderCheckHooks;h!==null&&Ac(e,h,null)}else{let h=t.preOrderHooks;h!==null&&Oc(e,h,0,null),xd(e,0)}if(s||AC(e),sv(e),cv(e,0),t.contentQueries!==null&&Ay(t,e),!i)if(d){let h=t.contentCheckHooks;h!==null&&Ac(e,h)}else{let h=t.contentHooks;h!==null&&Oc(e,h,1),xd(e,1)}FC(t,e);let f=t.components;f!==null&&uv(e,f,0);let p=t.viewQuery;if(p!==null&&zd(2,p,r),!i)if(d){let h=t.viewCheckHooks;h!==null&&Ac(e,h)}else{let h=t.viewHooks;h!==null&&Oc(e,h,2),xd(e,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),e[Sc]){for(let h of e[Sc])h();e[Sc]=null}i||(rv(e),e[G]&=-73)}catch(d){let f=!1,p=d,h=e;for(;h!==null;){if(Nt(h)){h=h[_e];continue}let m=h[as];if(m)try{let v=e[mt][De],y=v?.constructor,b={declarationInstance:v,declarationType:y,caughtBy:m},D=L(null);try{m(Dg(p),b)}finally{L(D)}f=!0;break}catch(v){p=v}h=h[_e]}if(!f)throw i||Yr(e),p}finally{u!==null&&(Fi(u,l),c&&_C(u)),Mc()}}function cv(t,e){for(let n=Cy(t);n!==null;n=Iy(n))for(let r=Te;r<n.length;r++){let o=n[r];lv(o,e)}}function AC(t){for(let e=Cy(t);e!==null;e=Iy(e)){if(!(e[G]&2))continue;let n=e[Qr];for(let r=0;r<n.length;r++){let o=n[r];hd(o)}}}function OC(t,e,n){oe(te.ComponentStart);let r=kt(e,t);try{lv(r,n)}finally{oe(te.ComponentEnd,r[De])}}function lv(t,e){Dc(t)&&Zd(t,e)}function Zd(t,e){let r=t[j],o=t[G],i=t[Dt],s=!!(e===0&&o&16);if(s||=!!(o&64&&e===0),s||=!!(o&1024),s||=!!(i?.dirty&&Na(i)),s||=!1,i&&(i.dirty=!1),t[G]&=-9217,s)kC(r,t,r.template,t[De]);else if(o&8192){let c=L(null);try{sv(t),cv(t,1);let l=r.components;l!==null&&uv(t,l,1),rv(t)}finally{L(c)}}}function uv(t,e,n){for(let r=0;r<e.length;r++)OC(t,e[r],n)}function FC(t,e){let n=t.hostBindingOpCodes;if(n!==null)try{for(let r=0;r<n.length;r++){let o=n[r];if(o<0)ir(~o);else{let i=o,s=n[++r],c=n[++r];cg(s,i);let l=e[i];oe(te.HostBindingsUpdateStart,l);try{c(2,l)}finally{oe(te.HostBindingsUpdateEnd,l)}}}}finally{ir(-1)}}function Of(t,e){let n=Ed()?64:1088;for(t[en].changeDetectionScheduler?.notify(e);t;){t[G]|=n;let r=wn(t);if(Yo(t)&&!r)return t;t=r}return null}function dv(t,e,n,r){return[t,!0,0,e,null,r,null,n,null,null]}function fv(t,e){let n=Te+e;if(n<t.length)return t[n]}function sl(t,e,n,r=!0){let o=e[j];if(LC(o,e,t,n),r){let s=Yd(n,t),c=e[Se],l=c.parentNode(t[qr]);l!==null&&Ww(o,t[pt],c,e,l,s)}let i=e[qo];i!==null&&i.firstChild!==null&&(i.firstChild=null)}function hv(t,e){let n=Ds(t,e);return n!==void 0&&rl(n[j],n),n}function Ds(t,e){if(t.length<=Te)return;let n=Te+e,r=t[n];if(r){let o=r[or];o!==null&&o!==t&&If(o,r),e>0&&(t[n-1][xt]=r[xt]);let i=ts(t,Te+e);Gw(r[j],r);let s=i[tn];s!==null&&s.detachView(i[j]),r[_e]=null,r[xt]=null,r[G]&=-129}return r}function LC(t,e,n,r){let o=Te+r,i=n.length;r>0&&(n[o-1][xt]=e),r<i-Te?(e[xt]=n[o],nd(n,Te+r,e)):(n.push(e),e[xt]=null),e[_e]=n;let s=e[or];s!==null&&n!==s&&pv(s,e);let c=e[tn];c!==null&&c.insertView(t),Tc(e),e[G]|=128}function pv(t,e){let n=t[Qr],r=e[_e];if(_n(r))t[G]|=2;else{let o=r[_e][mt];e[mt]!==o&&(t[G]|=2)}n===null?t[Qr]=[e]:n.push(e)}var sr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,n=e[j];return Es(n,e,n.firstChild,[])}constructor(e,n){this._lView=e,this._cdRefInjectingView=n}get context(){return this._lView[De]}set context(e){this._lView[De]=e}get destroyed(){return Kr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[_e];if(Nt(e)){let n=e[cs],r=n?n.indexOf(this):-1;r>-1&&(Ds(e,r),ts(n,r))}this._attachedToViewContainer=!1}rl(this._lView[j],this._lView)}onDestroy(e){wc(this._lView,e)}markForCheck(){Of(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[G]&=-129}reattach(){Tc(this._lView),this._lView[G]|=128}detectChanges(){this._lView[G]|=1024,av(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new U(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=Yo(this._lView),n=this._lView[or];n!==null&&!e&&If(n,this._lView),Wy(this._lView[j],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new U(902,!1);this._appRef=e;let n=Yo(this._lView),r=this._lView[or];r!==null&&!n&&pv(r,this._lView),Tc(this._lView)}};var Ts=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=HC;constructor(n,r,o){this._declarationLView=n,this._declarationTContainer=r,this.elementRef=o}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(n,r){return this.createEmbeddedViewImpl(n,r)}createEmbeddedViewImpl(n,r,o){let i=il(this._declarationLView,this._declarationTContainer,n,{embeddedViewInjector:r,dehydratedView:o});return new sr(i)}}return t})();function HC(){return Ff(tt(),Z())}function Ff(t,e){return t.type&4?new Ts(e,t,ii(t,e)):null}function al(t,e,n,r,o){let i=t.data[e];if(i===null)i=VC(t,e,n,r,o),ag()&&(i.flags|=32);else if(i.type&64){i.type=n,i.value=r,i.attrs=o;let s=tg();i.injectorIndex=s===null?-1:s.injectorIndex}return Zo(i,!0),i}function VC(t,e,n,r,o){let i=Sd(),s=bd(),c=s?i:i&&i.parent,l=t.data[e]=jC(t,c,n,e,r,o);return UC(t,l,i,s),l}function UC(t,e,n,r){t.firstChild===null&&(t.firstChild=e),n!==null&&(r?n.child==null&&e.parent!==null&&(n.child=e):n.next===null&&(n.next=e,e.prev=n))}function jC(t,e,n,r,o,i){let s=e?e.injectorIndex:-1,c=0;return eg()&&(c|=128),{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:c,providerIndexes:0,value:o,namespace:Cd(),attrs:i,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function BC(t){let e=t[ld]??[],r=t[_e][Se],o=[];for(let i of e)i.data[xy]!==void 0?o.push(i):$C(i,r);t[ld]=o}function $C(t,e){let n=0,r=t.firstChild;if(r){let o=t.data[Py];for(;n<o;){let i=r.nextSibling;Hy(e,r,!1),r=i,n++}}}var GC=()=>null,WC=()=>null;function Jd(t,e){return GC(t,e)}function mv(t,e,n){return WC(t,e,n)}var gv=class{},oo=class{},Rn=class{destroyNode=null;static __NG_ELEMENT_ID__=()=>zC()};function zC(){let t=Z(),e=tt(),n=kt(e.index,t);return(_n(n)?n:t)[Se]}var yv=(()=>{class t{static \u0275prov=Y({token:t,providedIn:"root",factory:()=>null})}return t})();function vv(t){return t.debugInfo?.className||t.type.name||null}var Lc={},Wc=class{injector;parentInjector;constructor(e,n){this.injector=e,this.parentInjector=n}get(e,n,r){let o=this.injector.get(e,Lc,r);return o!==Lc||n===Lc?o:this.parentInjector.get(e,n,r)}};function qC(t,e,n){return t[e]=n}function QC(t,e){return t[e]}function kn(t,e,n){if(n===At)return!1;let r=t[e];return Object.is(r,n)?!1:(t[e]=n,!0)}function KC(t,e,n,r){let o=kn(t,e,n);return kn(t,e+1,r)||o}function to(t,e,n){return function r(o){let i=r.__ngNativeEl__;i!==void 0&&vw(o,i);let s=Mn(t)?kt(t.index,e):e;Of(s,5);let c=e[De],l=$g(e,c,n,o),u=r.__ngNextListenerFn__;for(;u;)l=$g(e,c,u,o)&&l,u=u.__ngNextListenerFn__;return l}}function $g(t,e,n,r){let o=L(null);try{return oe(te.OutputStart,e,n),n(r)!==!1}catch(i){return bC(t,i),!1}finally{oe(te.OutputEnd,e,n),L(o)}}function Lf(t,e,n,r,o,i,s,c){let l=bc(t),u=!1,d=null;if(!r&&l&&(d=ZC(e,n,i,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,u=!0}else{let f=Rt(t,n),p=r?r(f):f;bw(n,p,i,c),r||(c.__ngNativeEl__=f);let h=o.listen(p,i,c);if(!YC(i)){let m=r?v=>r(qe(v[t.index])):t.index;Sv(m,e,n,i,c,h,!1)}}return u}function YC(t){return t.startsWith("animation")||t.startsWith("transition")}function ZC(t,e,n,r){let o=t.cleanup;if(o!=null)for(let i=0;i<o.length-1;i+=2){let s=o[i];if(s===n&&o[i+1]===r){let c=e[Qo],l=o[i+2];return c&&c.length>l?c[l]:null}typeof s=="string"&&(i+=2)}return null}function Sv(t,e,n,r,o,i,s){let c=e.firstCreatePass?md(e):null,l=pd(n),u=l.length;l.push(o,i),c&&c.push(r,t,u,(u+1)*(s?-1:1))}function Gg(t,e,n,r,o){let i=null,s=null,c=null,l=!1,u=t.directiveToIndex.get(n.type);if(typeof u=="number"?i=u:[i,s,c]=u,s!==null&&c!==null&&t.hostDirectiveOutputs&&Object.hasOwn(t.hostDirectiveOutputs,r)){let d=t.hostDirectiveOutputs[r];for(let f=0;f<d.length;f+=2){let p=d[f];if(p>=s&&p<=c)l=!0,zc(t,e,p,d[f+1],r,o);else if(p>c)break}}return Object.hasOwn(n.outputs,r)&&(l=!0,zc(t,e,i,r,r,o)),l}function zc(t,e,n,r,o,i){let s=e[n],c=e[j],u=c.data[n].outputs[r],f=s[u].subscribe(i);Sv(t.index,c,e,o,i,f,!0)}function An(){JC()}function JC(){let t=Z(),e=Be(),n=tt();if(e.firstCreatePass&&eI(e,n),n.controlDirectiveIndex===-1)return;cr("NgSignalForms");let r=t[n.controlDirectiveIndex];e.data[n.controlDirectiveIndex].controlDef.create(r,new qc(t,e,n))}function On(){XC()}function XC(){let t=Z(),e=Be(),n=us();if(n.controlDirectiveIndex===-1)return;let r=e.data[n.controlDirectiveIndex].controlDef,o=t[n.controlDirectiveIndex];r.update(o,new qc(t,e,n))}var qc=class{lView;tView;tNode;hasPassThrough;constructor(e,n,r){this.lView=e,this.tView=n,this.tNode=r,this.hasPassThrough=!!(r.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get nativeElement(){return Rt(this.tNode,this.lView)}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(e,n){let r=this.tView.data[this.tNode.customControlIndex];Gg(this.tNode,this.lView,r,e,to(this.tNode,this.lView,n))}listenToCustomControlModel(e){let n=this.tNode.flags&1024?"valueChange":"checkedChange",r=this.tView.data[this.tNode.customControlIndex];Gg(this.tNode,this.lView,r,n,to(this.tNode,this.lView,e))}listenToDom(e,n){Lf(this.tNode,this.tView,this.lView,void 0,this.lView[Se],e,n,to(this.tNode,this.lView,n))}setInputOnDirectives(e,n,r){let o=this.tNode.inputs?.[e],i=this.tNode.hostDirectiveInputs?.[e];if(!o&&!i)return!1;let s=!1;if(o)for(let c of o){if(c===this.tNode.controlDirectiveIndex)continue;let l=this.lView[c],u=this.tView.data[c];(!r||r(zg(l,u,e)))&&(ro(u,l,e,n),s=!0)}if(i)for(let c=0;c<i.length;c+=2){let l=i[c];if(l===this.tNode.controlDirectiveIndex)continue;let u=this.lView[l],d=i[c+1],f=this.tView.data[l];(!r||r(zg(u,f,e)))&&(ro(f,u,d,n),s=!0)}return s}setCustomControlModelInput(e){let n=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";EC(this.tNode,this.tView,this.lView,n,r,e)}customControlHasInput(e){if(this.tNode.customControlIndex===-1)return!1;let n=this.tView.data[this.tNode.customControlIndex];return(n.signalFormsInputPresence??=this._buildCustomControlInputCache(n))[e]===!0}_buildCustomControlInputCache(e){let n={};for(let r in e.inputs)n[r]=!0;if(e.hostDirectives!==null){let r=[...e.hostDirectives];for(;r.length>0;){let o=r.shift();if(typeof o!="function"){for(let s in o.inputs)n[o.inputs[s]]=!0;let i=Wg(o.directive);i!==null&&r.push(...i);continue}for(let i of o()){if(typeof i=="function")continue;if(i.inputs)for(let c=0;c<i.inputs.length;c+=2){let l=i.inputs[c+1]||i.inputs[c];n[l]=!0}let s=Wg(i.directive);s!==null&&r.push(...s)}}}return n}};function Wg(t){return typeof t=="function"&&"\u0275dir"in t?t.\u0275dir.hostDirectives??null:null}function zg(t,e,n){if(!e.inputs||!Object.hasOwn(e.inputs,n))return;let[r,o]=e.inputs[n];if((o&Ms.SignalBased)!==0){let s=t[r][Xe];return s.value===ly?void 0:s.value}return t[r]}function eI(t,e,n){for(let o=e.directiveStart;o<e.directiveEnd;o++)if(t.data[o].controlDef){e.controlDirectiveIndex=o;break}if(e.controlDirectiveIndex===-1)return;let r=t.data[e.controlDirectiveIndex].controlDef;if(r.passThroughInput&&(e.inputs?.[r.passThroughInput]?.length??0)>1){e.flags|=4096;return}tI(t,e)}function tI(t,e){for(let n=e.directiveStart;n<e.directiveEnd;n++){let r=t.data[n];if(!(e.directiveToIndex&&!e.directiveToIndex.has(r.type))){if(qg(r,"value")){e.flags|=1024,e.customControlIndex=n;return}if(qg(r,"checked")){e.flags|=2048,e.customControlIndex=n;return}}}if(e.hostDirectiveInputs!==null&&e.hostDirectiveOutputs!==null&&e.directiveToIndex!==null){let n=(r,o)=>{let i=e.hostDirectiveInputs[r],s=e.hostDirectiveOutputs[r+"Change"];if(!i||!s)return!1;for(let c=0;c<i.length;c+=2){let l=i[c];for(let u=0;u<s.length;u+=2){let d=s[u];if(l===d)for(let f of e.directiveToIndex.values()){if(!Array.isArray(f))continue;let[p,h,m]=f;if(l>=h&&l<=m)return e.flags|=o,e.customControlIndex=p,!0}}}return!1};if(n("value",1024)||n("checked",2048))return}}function qg(t,e){return nI(t,e)&&rI(t,e+"Change")}function nI(t,e){return e in t.inputs}function rI(t,e){return e in t.outputs}var Xd=Symbol("BINDING");var so=new H("");function Qc(t,e,n){let r=n?t.styles:null,o=n?t.classes:null,i=0;if(e!==null)for(let s=0;s<e.length;s++){let c=e[s];if(typeof c=="number")i=c;else if(i==1)o=Ku(o,c);else if(i==2){let l=c,u=e[++s];r=Ku(r,l+": "+u+";")}}n?t.styles=r:t.stylesWithoutHost=r,n?t.classes=o:t.classesWithoutHost=o}function ue(t,e=0){let n=Z();if(n===null)return q(t,e);let r=tt();return by(r,n,ze(t),e)}function oI(t,e,n,r,o){let i=r===null?null:{"":-1},s=o(t,n);if(s!==null){let c=s,l=null,u=null;for(let d of s)if(d.resolveHostDirectives!==null){[c,l,u]=d.resolveHostDirectives(s);break}aI(t,e,n,c,i,l,u)}i!==null&&r!==null&&iI(n,r,i)}function iI(t,e,n){let r=t.localNames=[];for(let o=0;o<e.length;o+=2){let i=n[e[o+1]];if(i==null)throw new U(-301,!1);r.push(e[o],i)}}function sI(t,e,n){e.componentOffset=n,(t.components??=[]).push(e.index)}function aI(t,e,n,r,o,i,s){let c=r.length,l=null;for(let p=0;p<c;p++){let h=r[p];l===null&&nn(h)&&(l=h,sI(t,n,p)),Bd(jc(n,e),t,h.type)}hI(n,t.data.length,c),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let p=0;p<c;p++){let h=r[p];h.providersResolver&&h.providersResolver(h)}let u=!1,d=!1,f=Qy(t,e,c,null);c>0&&(n.directiveToIndex=new Map);for(let p=0;p<c;p++){let h=r[p];if(n.mergedAttrs=ti(n.mergedAttrs,h.hostAttrs),lI(t,n,e,f,h),fI(f,h,o),s!==null&&s.has(h)){let[v,y]=s.get(h);n.directiveToIndex.set(h.type,[f,v+n.directiveStart,y+n.directiveStart])}else(i===null||!i.has(h))&&n.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(n.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(n.flags|=64);let m=h.type.prototype;!u&&(m.ngOnChanges||m.ngOnInit||m.ngDoCheck)&&((t.preOrderHooks??=[]).push(n.index),u=!0),!d&&(m.ngOnChanges||m.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(n.index),d=!0),f++}cI(t,n,i)}function cI(t,e,n){for(let r=e.directiveStart;r<e.directiveEnd;r++){let o=t.data[r];if(n===null||!n.has(o))Qg(0,e,o,r),Qg(1,e,o,r),Yg(e,r,!1);else{let i=n.get(o);Kg(0,e,i,r),Kg(1,e,i,r),Yg(e,r,!0)}}}function Qg(t,e,n,r){let o=t===0?n.inputs:n.outputs;for(let i in o)if(Object.hasOwn(o,i)){let s;t===0?s=e.inputs??={}:s=e.outputs??={},s[i]??=[],s[i].push(r),bv(e,i)}}function Kg(t,e,n,r){let o=t===0?n.inputs:n.outputs;for(let i in o)if(Object.hasOwn(o,i)){let s=o[i],c;t===0?c=e.hostDirectiveInputs??={}:c=e.hostDirectiveOutputs??={},c[s]??=[],c[s].push(r,i),bv(e,s)}}function bv(t,e){e==="class"?t.flags|=8:e==="style"&&(t.flags|=16)}function Yg(t,e,n){let{attrs:r,inputs:o,hostDirectiveInputs:i}=t;if(r===null||!n&&o===null||n&&i===null||Ef(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,c=0;for(;c<r.length;){let l=r[c];if(l===0){c+=4;continue}else if(l===5){c+=2;continue}else if(typeof l=="number")break;if(!n&&Object.hasOwn(o,l)){let u=o[l];for(let d of u)if(d===e){s??=[],s.push(l,r[c+1]);break}}else if(n&&Object.hasOwn(i,l)){let u=i[l];for(let d=0;d<u.length;d+=2)if(u[d]===e){s??=[],s.push(u[d+1],r[c+1]);break}}c+=2}t.initialInputs??=[],t.initialInputs.push(s)}function lI(t,e,n,r,o){t.data[r]=o;let i=o.factory||(o.factory=Vr(o.type,!0)),s=new no(i,nn(o),ue,null);t.blueprint[r]=s,n[r]=s,uI(t,e,r,Qy(t,n,o.hostVars,At),o)}function uI(t,e,n,r,o){let i=o.hostBindings;if(i){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let c=~e.index;dI(s)!=c&&s.push(c),s.push(n,r,i)}}function dI(t){let e=t.length;for(;e>0;){let n=t[--e];if(typeof n=="number"&&n<0)return n}return 0}function fI(t,e,n){if(n){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)n[e.exportAs[r]]=t;nn(e)&&(n[""]=t)}}function hI(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function Ev(t,e,n,r,o,i,s,c){let l=e[j],u=l.consts,d=rn(u,s),f=al(l,t,n,r,d);return i&&oI(l,e,f,rn(u,c),o),f.mergedAttrs=ti(f.mergedAttrs,f.attrs),f.attrs!==null&&Qc(f,f.attrs,!1),f.mergedAttrs!==null&&Qc(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function Dv(t,e){ZT(t,e),ud(e)&&t.queries.elementEnd(e)}function pI(t,e,n,r,o,i){let s=e.consts,c=rn(s,o),l=al(e,t,n,r,c);if(l.mergedAttrs=ti(l.mergedAttrs,l.attrs),i!=null){let u=rn(s,i);l.localNames=[];for(let d=0;d<u.length;d+=2)l.localNames.push(u[d],-1)}return l.attrs!==null&&Qc(l,l.attrs,!1),l.mergedAttrs!==null&&Qc(l,l.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,l),l}var Tv=typeof ShadowRoot<"u",mI=typeof Document<"u";function gI(t){return Object.keys(t).map(e=>{let[n,r,o]=t[e],i={propName:n,templateName:e,isSignal:(r&Ms.SignalBased)!==0};return o&&(i.transform=o),i})}function yI(t){return Object.keys(t).map(e=>({propName:t[e],templateName:e}))}function vI(t,e,n){let r=e instanceof ft?e:e?.injector;return r&&t.getStandaloneInjector!==null&&(r=t.getStandaloneInjector(r)||r),r?new Wc(n,r):n}function SI(t){let e=t.get(oo,null);if(e===null)throw new U(407,!1);let n=t.get(yv,null),r=t.get(Cn,null),o=t.get(cn,null,{optional:!0});return{rendererFactory:e,sanitizer:n,changeDetectionScheduler:r,ngReflect:!1,tracingService:o}}function bI(t,e,n){let r=wv(t);return Fy(e,r,r==="svg"?Gm:r==="math"?Wm:n)}function EI(t){if((t&&"localName"in t&&typeof t.localName=="string"?t.localName:t?.tagName)?.toLowerCase()==="script")throw new U(905,!1)}function wv(t){return(t.selectors[0][0]||"div").toLowerCase()}var ws=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=gI(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=yI(this.componentDef.outputs),this.cachedOutputs}constructor(e,n){this.componentDef=e,this.ngModule=n,this.componentType=e.type,this.selector=Ow(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!n}create(e,n,r,o,i,s,c,l){oe(te.DynamicComponentStart);let u=L(null);try{let d=this.componentDef,f=vI(d,o||this.ngModule,e),p=SI(f),h=p.tracingService;return h&&h.componentCreate?h.componentCreate(vv(d),()=>this.createComponentRef(p,f,n,r,i,s,c,l)):this.createComponentRef(p,f,n,r,i,s,c,l)}finally{L(u)}}createComponentRef(e,n,r,o,i,s,c,l){let u=this.componentDef,d=DI(o,u,s,i,l),f=e.rendererFactory.createRenderer(null,u),p=o?aC(f,o,u.encapsulation,n):bI(u,f,c??null);EI(p);let h=n.get(so,null),m=TI(p,()=>n.get(nt,null)??My());h&&h.addHost(m);let v=s?.some(Zg)||i?.some(D=>typeof D!="function"&&D.bindings.some(Zg)),y=xf(null,d,null,512|qy(u),null,null,e,f,n,null,ky(p,n,!0));h&&Tv&&m instanceof ShadowRoot&&wc(y,()=>{h.removeHost(m)}),y[je]=p,_c(y);let b=null;try{let D=Ev(je,y,2,"#host",()=>d.directiveRegistry,!0,0);Vy(f,p,D),ni(p,y),Zy(d,y,D),Oy(d,D,y),Dv(d,D),r!==void 0&&CI(D,this.ngContentSelectors,r),b=kt(D.index,y),y[De]=b[De],Af(d,y,null)}catch(D){throw b!==null&&Gd(b),Gd(y),D}finally{oe(te.DynamicComponentEnd),Mc()}return new Kc(this.componentType,y,!!v)}};function DI(t,e,n,r,o){let i=t?["ng-version","22.2.2"]:Fw(e.selectors[0]),s=null,c=null,l=0;if(n)for(let f of n)l+=f[Xd].requiredVars,f.create&&(f.targetIdx=0,(s??=[]).push(f)),f.update&&(f.targetIdx=0,(c??=[]).push(f));if(r)for(let f=0;f<r.length;f++){let p=r[f];if(typeof p!="function")for(let h of p.bindings){l+=h[Xd].requiredVars;let m=f+1;h.create&&(h.targetIdx=m,(s??=[]).push(h)),h.update&&(h.targetIdx=m,(c??=[]).push(h))}}let u=[e];if(r)for(let f of r){let p=typeof f=="function"?f:f.type,h=pc(p);u.push(h)}return Pf(0,null,wI(s,c),1,l,u,null,null,null,[i],null)}function TI(t,e){let n=t.getRootNode?.();return mI&&n instanceof Document?n.head:n&&Tv&&n instanceof ShadowRoot?n:e().head}function wI(t,e){return!t&&!e?null:n=>{if(n&1&&t)for(let r of t)r.create();if(n&2&&e)for(let r of e)r.update()}}function Zg(t){let e=t[Xd].kind;return e==="input"||e==="twoWay"}var Kc=class extends gv{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,n,r){super(),this._rootLView=n,this._hasInputBindings=r,this._tNode=Ec(n[j],je),this.location=ii(this._tNode,n),this.instance=kt(this._tNode.index,n)[De],this.hostView=this.changeDetectorRef=new sr(n,void 0),this.componentType=e}setInput(e,n){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),n))return;let o=this._rootLView,i=kf(r,o[j],o,e,n);this.previousInputValues.set(e,n);let s=kt(r.index,o);Of(s,1)}get injector(){return new xn(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function CI(t,e,n){let r=t.projection=[];for(let o=0;o<e.length;o++){let i=n[o];r.push(i!=null&&i.length?Array.from(i):null)}}var cl=(()=>{class t{static __NG_ELEMENT_ID__=II}return t})();function II(){let t=tt();return Cv(t,Z())}var ef=class t extends cl{_lContainer;_hostTNode;_hostLView;constructor(e,n,r){super(),this._lContainer=e,this._hostTNode=n,this._hostLView=r}get element(){return ii(this._hostTNode,this._hostLView)}get injector(){return new xn(this._hostTNode,this._hostLView)}get parentInjector(){let e=yf(this._hostTNode,this._hostLView);if(py(e)){let n=Uc(e,this._hostLView),r=Vc(e),o=n[j].data[r+8];return new xn(o,n)}else return new xn(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let n=Jg(this._lContainer);return n!==null&&n[e]||null}get length(){return this._lContainer.length-Te}createEmbeddedView(e,n,r){let o,i,s;typeof r=="number"?o=r:r!=null&&(o=r.index,i=r.injector,s=r.onError);let c=Jd(this._lContainer,e.ssrId),l=e.createEmbeddedViewImpl(n||{},i,c);return s&&(l._lView[as]=s),this.insertImpl(l,o,bs(this._hostTNode,c)),l}createComponent(e,n,r,o,i,s,c){let l,u,d=n||{};l=d.index,r=d.injector,o=d.projectableNodes,i=d.environmentInjector||d.ngModuleRef,s=d.directives,c=d.bindings,u=d.onError;let f=new ws(Gr(e)),p=r||this.parentInjector;if(!i&&f.ngModule==null){let D=this.parentInjector.get(ft,null);D&&(i=D)}let h=Gr(f.componentType??{}),m=Jd(this._lContainer,h?.id??null),v=m?.firstChild??null,y=f.create(p,o,v,i,s,c,this._getHostElementNamespace());return u&&(y.hostView._lView[as]=u),this.insertImpl(y.hostView,l,bs(this._hostTNode,m)),y}_getHostElementNamespace(){if(this._hostTNode.type&2){let e=this._hostTNode.parent??this._hostLView[pt];return e!==null&&e.type&2&&typeof e.value=="string"&&e.value.toLowerCase()==="foreignobject"?null:e?.namespace??null}return this._hostTNode.namespace}insert(e,n){return this.insertImpl(e,n,!0)}insertImpl(e,n,r){let o=e._lView;if(qm(o)){let c=this.indexOf(e);if(c!==-1)this.detach(c);else{let l=o[_e],u=new t(l,l[pt],l[_e]);u.detach(u.indexOf(e))}}let i=this._adjustIndex(n),s=this._lContainer;return sl(s,o,i,r),e.attachToViewContainerRef(),nd(kd(s),i,e),e}move(e,n){return this.insert(e,n)}indexOf(e){let n=Jg(this._lContainer);return n!==null?n.indexOf(e):-1}remove(e){let n=this._adjustIndex(e,-1),r=Ds(this._lContainer,n);r&&(ts(kd(this._lContainer),n),rl(r[j],r))}detach(e){let n=this._adjustIndex(e,-1),r=Ds(this._lContainer,n);return r&&ts(kd(this._lContainer),n)!=null?new sr(r):null}_adjustIndex(e,n=0){return e??this.length+n}};function Jg(t){return t[cs]}function kd(t){return t[cs]||(t[cs]=[])}function Cv(t,e){let n,r=e[t.index];return Nt(r)?n=r:(n=dv(r,e,null,t),e[t.index]=n,Nf(e,n)),MI(n,e,t,r),new ef(n,t,e)}function _I(t,e){let n=t[Se],r=n.createComment(""),o=Rt(e,t),i=n.parentNode(o);return eo(n,i,r,n.nextSibling(o),!1),r}var MI=NI,PI=()=>!1;function xI(t,e,n){return PI(t,e,n)}function NI(t,e,n,r){if(t[qr])return;let o;n.type&8?o=qe(r):o=_I(e,n),t[qr]=o}var tf=class t{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},nf=class t{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let n=e.queries;if(n!==null){let r=e.contentQueries!==null?e.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){let s=n.getByIndex(i),c=this.queries[s.indexInDeclarationView];o.push(c.clone())}return new t(o)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let n=0;n<this.queries.length;n++)Mv(e,n).matches!==null&&this.queries[n].setDirty()}},rf=class{flags;read;predicate;constructor(e,n,r=null){this.flags=n,this.read=r,typeof e=="string"?this.predicate=HI(e):this.predicate=e}},of=class t{queries;constructor(e=[]){this.queries=e}elementStart(e,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(e,n)}elementEnd(e){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(e)}embeddedTView(e){let n=null;for(let r=0;r<this.length;r++){let o=n!==null?n.length:0,i=this.getByIndex(r).embeddedTView(e,o);i&&(i.indexInDeclarationView=r,n!==null?n.push(i):n=[i])}return n!==null?new t(n):null}template(e,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(e,n)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},sf=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,n=-1){this.metadata=e,this._declarationNodeIndex=n}elementStart(e,n){this.isApplyingToNode(n)&&this.matchTNode(e,n)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,n){this.elementStart(e,n)}embeddedTView(e,n){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,n),new t(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let n=this._declarationNodeIndex,r=e.parent;for(;r!==null&&r.type&8&&r.index!==n;)r=r.parent;return n===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(e,n){let r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){let i=r[o];this.matchTNodeWithReadOption(e,n,RI(n,i)),this.matchTNodeWithReadOption(e,n,Fc(n,e,i,!1,!1))}else r===Ts?n.type&4&&this.matchTNodeWithReadOption(e,n,-1):this.matchTNodeWithReadOption(e,n,Fc(n,e,r,!1,!1))}matchTNodeWithReadOption(e,n,r){if(r!==null){let o=this.metadata.read;if(o!==null)if(o===an||o===cl||o===ht||o===Ts&&n.type&4)this.addMatch(n.index,-2);else{let i=Fc(n,e,o,!1,!1);i!==null&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(e,n){this.matches===null?this.matches=[e,n]:this.matches.push(e,n)}};function RI(t,e){let n=t.localNames;if(n!==null){for(let r=0;r<n.length;r+=2)if(n[r]===e)return n[r+1]}return null}function kI(t,e){return t.type&11?ii(t,e):t.type&4?Ff(t,e):null}function AI(t,e,n,r){return n===-1?kI(e,t):n===-2?OI(t,e,r):Ss(t,t[j],n,e)}function OI(t,e,n){if(n===an)return ii(e,t);if(n===Ts)return Ff(e,t);if(n===cl)return Cv(e,t);if(n===ht)return new xn(e,t)}function Iv(t,e,n,r){let o=e[tn].queries[r];if(o.matches===null){let i=t.data,s=n.matches,c=[];for(let l=0;s!==null&&l<s.length;l+=2){let u=s[l];if(u<0)c.push(null);else{let d=i[u];c.push(AI(e,d,s[l+1],n.metadata.read))}}o.matches=c}return o.matches}function af(t,e,n,r){let o=t.queries.getByIndex(n),i=o.matches;if(i!==null){let s=Iv(t,e,o,n);for(let c=0;c<i.length;c+=2){let l=i[c];if(l>0)r.push(s[c/2]);else{let u=i[c+1],d=e[-l];for(let f=Te;f<d.length;f++){let p=d[f];p[or]===p[_e]&&af(p[j],p,u,r)}if(d[Qr]!==null){let f=d[Qr];for(let p=0;p<f.length;p++){let h=f[p];af(h[j],h,u,r)}}}}}return r}function _v(t,e){return t[tn].queries[e].queryList}function FI(t,e,n){let r=new Bc((n&4)===4);return Ym(t,e,r,r.destroy),(e[tn]??=new nf).queries.push(new tf(r))-1}function LI(t,e,n){let r=Be();return r.firstCreatePass&&(VI(r,new rf(t,e,n),-1),(e&2)===2&&(r.staticViewQueries=!0)),FI(r,Z(),e)}function HI(t){return t.split(",").map(e=>e.trim())}function VI(t,e,n){t.queries===null&&(t.queries=new of),t.queries.track(new sf(e,n))}function Mv(t,e){return t.queries.getByIndex(e)}function UI(t,e){let n=t[j],r=Mv(n,e);return r.crossesNgTemplate?af(n,t,e,[]):Iv(n,t,r,e)}function Pv(t,e,n){let r,o=Li(()=>{r._dirtyCounter();let i=BI(r,t);if(e&&i===void 0)throw new U(-951,!1);return i});return r=o[Xe],r._dirtyCounter=be(0),r._flatValue=void 0,o}function xv(t){return Pv(!0,!1,t)}function Nv(t){return Pv(!0,!0,t)}function jI(t,e){let n=t[Xe];n._lView=Z(),n._queryIndex=e,n._queryList=_v(n._lView,e),n._queryList.onDirty(()=>n._dirtyCounter.update(r=>r+1))}function BI(t,e){let n=t._lView,r=t._queryIndex;if(n===void 0||r===void 0||n[G]&4)return e?void 0:dt;let o=_v(n,r),i=UI(n,r);return o.reset(i,hw),e?o.first:o._changesDetected||t._flatValue===void 0?t._flatValue=o.toArray():t._flatValue}function Ps(t){return!!t&&typeof t.then=="function"}function Rv(t){return!!t&&typeof t.subscribe=="function"}var Yc=class{};var Cs=class extends Yc{injector;instance=null;constructor(e){super();let n=new jr([...e.providers,{provide:Yc,useValue:this}],e.parent||is(),e.debugName,new Set(["environment"]));this.injector=n,e.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function kv(t,e,n=null){return new Cs({providers:t,parent:e,debugName:n,runEnvironmentInitializers:!0}).injector}var $I=(()=>{class t{_injector;cachedInjectors=new Map;constructor(n){this._injector=n}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n)){let r=od(!1,n.type),o=r.length>0?kv([r],this._injector,""):null;this.cachedInjectors.set(n,o)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Y({token:t,providedIn:"environment",factory:()=>new t(q(ft))})}return t})();function ie(t){return _s(()=>{let e=Av(t),n=C(S({},e),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection!==vf.Eager,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&t.dependencies||null,getStandaloneInjector:e.standalone?o=>o.get($I).getOrCreateStandaloneInjector(n):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Bt.Emulated,styles:t.styles||dt,_:null,schemas:t.schemas||null,tView:null,id:""});e.standalone&&cr("NgStandalone"),Ov(n);let r=t.dependencies;return n.directiveDefs=Xg(r,GI),n.pipeDefs=Xg(r,Pm),n.id=qI(n),n})}function GI(t){return Gr(t)||pc(t)}function si(t){return _s(()=>({type:t.type,bootstrap:t.bootstrap||dt,declarations:t.declarations||dt,imports:t.imports||dt,exports:t.exports||dt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function WI(t,e){if(t==null)return nr;let n={};for(let r in t)if(Object.hasOwn(t,r)){let o=t[r],i,s,c,l;Array.isArray(o)?(c=o[0],i=o[1],s=o[2]??i,l=o[3]||null):(i=o,s=o,c=Ms.None,l=null),n[i]=[r,c,l],e[i]=s}return n}function zI(t){if(t==null)return nr;let e={};for(let n in t)Object.hasOwn(t,n)&&(e[t[n]]=n);return e}function Tt(t){return _s(()=>{let e=Av(t);return Ov(e),e})}function Av(t){let e={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputConfig:t.inputs||nr,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||dt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:WI(t.inputs,e),outputs:zI(t.outputs),debugInfo:null}}function Ov(t){t.features?.forEach(e=>e(t))}function Xg(t,e){return t?()=>{let n=typeof t=="function"?t():t,r=[];for(let o of n){let i=e(o);i!==null&&r.push(i)}return r}:null}function qI(t){let e=0,n=typeof t.consts=="function"?"":t.consts,r=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,n,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let i of r.join("|"))e=Math.imul(31,e)+i.charCodeAt(0)<<0;return e+=2147483648,"c"+e}var Fv=new H("");var Hf=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((n,r)=>{this.resolve=n,this.reject=r});appInits=I(Fv,{optional:!0})??[];injector=I(ht);constructor(){}runInitializers(){if(this.initialized)return;let n=[];for(let o of this.appInits){let i=zo(this.injector,o);if(Ps(i))n.push(i);else if(Rv(i)){let s=new Promise((c,l)=>{i.subscribe({complete:c,error:l})});n.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),n.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||t)};static \u0275prov=ar({token:t,factory:t.\u0275fac})}return t})();function Vf(t){return e=>{e.controlDef={create:(n,r)=>{n?.\u0275ngControlCreate(r)},update:(n,r)=>{n?.\u0275ngControlUpdate?.(r)},passThroughInput:t}}}function QI(t){return Object.getPrototypeOf(t.prototype).constructor}function ln(t){let e=QI(t.type),n=!0,r=[t];for(;e&&e!==Function.prototype&&e!==Object.prototype;){let o,i=Object.hasOwn(e,Ji)?e[Ji]:void 0,s=Object.hasOwn(e,Xi)?e[Xi]:void 0;if(nn(t))o=i??s;else{if(i)throw new U(903,!1);o=s}if(o){if(n){r.push(o);let l=t;l.inputs=Ad(t.inputs),l.declaredInputs=Ad(t.declaredInputs),l.outputs=Ad(t.outputs);let u=o.hostBindings;u&&XI(t,u);let d=o.viewQuery,f=o.contentQueries;if(d&&ZI(t,d),f&&JI(t,f),KI(t,o),Mm(t.outputs,o.outputs),nn(o)&&o.data.animation){let p=t.data;p.animation=(p.animation||[]).concat(o.data.animation)}}let c=o.features;if(c)for(let l=0;l<c.length;l++){let u=c[l];u&&u.ngInherit&&u(t),u===ln&&(n=!1)}}e=Object.getPrototypeOf(e)}YI(r)}function KI(t,e){for(let n in e.inputs){if(!Object.hasOwn(e.inputs,n)||Object.hasOwn(t.inputs,n))continue;let r=e.inputs[n];r!==void 0&&(t.inputs[n]=r,t.declaredInputs[n]=e.declaredInputs[n])}}function YI(t){let e=0,n=null;for(let r=t.length-1;r>=0;r--){let o=t[r];o.hostVars=e+=o.hostVars,o.hostAttrs=ti(o.hostAttrs,n=ti(n,o.hostAttrs))}}function Ad(t){return t===nr?{}:t===dt?[]:t}function ZI(t,e){let n=t.viewQuery;n?t.viewQuery=(r,o)=>{e(r,o),n(r,o)}:t.viewQuery=e}function JI(t,e){let n=t.contentQueries;n?t.contentQueries=(r,o,i)=>{e(r,o,i),n(r,o,i)}:t.contentQueries=e}function XI(t,e){let n=t.hostBindings;n?t.hostBindings=(r,o)=>{e(r,o),n(r,o)}:t.hostBindings=e}function e_(t,e,n,r,o,i,s,c){if(n.firstCreatePass){t.mergedAttrs=ti(t.mergedAttrs,t.attrs);let d=t.tView=Pf(2,t,o,i,s,n.directiveRegistry,n.pipeRegistry,null,n.schemas,n.consts,null);n.queries!==null&&(n.queries.template(n,t),d.queries=n.queries.embeddedTView(t))}c&&(t.flags|=c),Zo(t,!1);let l=t_(n,e,t,r);Pc()&&_f(n,e,l,t),ni(l,e);let u=dv(l,e,l,t);e[r+je]=u,Nf(e,u),xI(u,t,e)}function Zc(t,e,n,r,o,i,s,c,l,u,d){let f=n+je,p;if(e.firstCreatePass){if(p=al(e,f,4,s||null,c||null),u!=null){let h=rn(e.consts,u);p.localNames=[];for(let m=0;m<h.length;m+=2)p.localNames.push(h[m],-1)}}else p=e.data[f];return e_(p,t,e,n,r,o,i,l),u!=null&&Rf(t,p,d),p}var t_=n_;function n_(t,e,n,r){return xc(!0),e[Se].createComment("")}var Uf=new H("");var Lv=new H("");function Hv(){gu(t=>{let e="";throw new U(-600,e)})}var r_=10;var ai=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=I(Xr);afterRenderManager=I(wf);zonelessEnabled=I(ms);rootEffectScheduler=I(Rc);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new ve;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=I(Jr);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(z(n=>!n))}constructor(){I(cn,{optional:!0})}whenStable(){let n;return new Promise(r=>{n=this.isStable.subscribe({next:o=>{o&&r()}})}).finally(()=>{n.unsubscribe()})}_injector=I(ft);_rendererFactory=null;get injector(){return this._injector}bootstrap(n,r){return this.bootstrapImpl(n,r)}bootstrapImpl(n,r,o=ht.NULL){return this._injector.get(Ue).run(()=>{if(oe(te.BootstrapComponentStart),!this._injector.get(Hf).done){let b="";throw new U(405,b)}let c=Gr(n),l=this._injector.get(Yc),u=new ws(c,l);this.componentTypes.push(n);let{hostElement:d,directives:f,bindings:p}=o_(r),h=d||u.selector,m=u.create(o,[],h,l.injector,f,p),v=m.location.nativeElement,y=m.injector.get(Uf,null);return y?.registerApplication(v),m.onDestroy(()=>{this.detachView(m.hostView),vs(this.components,m),y?.unregisterApplication(v)}),this._loadComponent(m),oe(te.BootstrapComponentEnd,m),m})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){oe(te.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(nl.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw oe(te.ChangeDetectionEnd),new U(101,!1);let n=L(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,L(n),this.afterTick.next(),oe(te.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(oo,null,{optional:!0}));let n=0;for(;this.dirtyFlags!==0&&n++<r_;){oe(te.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{oe(te.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let n=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:o}of this.allViews){if(!r&&!ls(o))continue;let i=r&&!this.zonelessEnabled?0:1;av(o,i),n=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}n||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:n})=>ls(n))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(n){let r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){let r=n;vs(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView);try{this.tick()}catch(o){this.internalErrorHandler(o)}this.components.push(n),this._injector.get(Lv,[]).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>vs(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new U(406,!1);let n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||t)};static \u0275prov=ar({token:t,factory:t.\u0275fac})}return t})();function o_(t){return t===void 0||typeof t=="string"||t instanceof Element?{hostElement:t}:t}function vs(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function st(t,e,n,r){let o=Z(),i=Zr();if(kn(o,i,e)){let s=Be(),c=us();yC(c,o,t,e,n,r)}return st}var cf=class{destroy(e){}updateValue(e,n){}swap(e,n){let r=Math.min(e,n),o=Math.max(e,n),i=this.detach(o);if(o-r>1){let s=this.detach(r);this.attach(r,i),this.attach(o,s)}else this.attach(r,i)}move(e,n){this.attach(n,this.detach(e))}};function Od(t,e,n,r,o){return t===n&&Object.is(e,r)?1:Object.is(o(t,e),o(n,r))?-1:0}function i_(t,e,n,r){let o,i,s=0,c=t.length-1,l=void 0;if(Array.isArray(e)){L(r);let u=e.length-1;for(L(null);s<=c&&s<=u;){let d=t.at(s),f=e[s],p=Od(s,d,s,f,n);if(p!==0){p<0&&t.updateValue(s,f),s++;continue}let h=t.at(c),m=e[u],v=Od(c,h,u,m,n);if(v!==0){v<0&&t.updateValue(c,m),c--,u--;continue}let y=n(s,d),b=n(c,h),D=n(s,f);if(Object.is(D,b)){let P=n(u,m);Object.is(P,y)?(t.swap(s,c),t.updateValue(c,m),u--,c--):t.move(c,s),t.updateValue(s,f),s++;continue}if(o??=new Jc,i??=ty(t,s,c,n),lf(t,o,s,D))t.updateValue(s,f),s++,c++;else if(i.has(D))o.set(y,t.detach(s)),c--;else{let P=t.create(s,e[s]);t.attach(s,P),s++,c++}}for(;s<=u;)ey(t,o,n,s,e[s]),s++}else if(e!=null){L(r);let u=e[Symbol.iterator]();L(null);let d=u.next();for(;!d.done&&s<=c;){let f=t.at(s),p=d.value,h=Od(s,f,s,p,n);if(h!==0)h<0&&t.updateValue(s,p),s++,d=u.next();else{o??=new Jc,i??=ty(t,s,c,n);let m=n(s,p);if(lf(t,o,s,m))t.updateValue(s,p),s++,c++,d=u.next();else if(!i.has(m))t.attach(s,t.create(s,p)),s++,c++,d=u.next();else{let v=n(s,f);o.set(v,t.detach(s)),c--}}}for(;!d.done;)ey(t,o,n,t.length,d.value),d=u.next()}for(;s<=c;)t.destroy(t.detach(c--));o?.forEach(u=>{t.destroy(u)})}function lf(t,e,n,r){return e!==void 0&&e.has(r)?(t.attach(n,e.get(r)),e.delete(r),!0):!1}function ey(t,e,n,r,o){if(lf(t,e,r,n(r,o)))t.updateValue(r,o);else{let i=t.create(r,o);t.attach(r,i)}}function ty(t,e,n,r){let o=new Set;for(let i=e;i<=n;i++)o.add(r(i,t.at(i)));return o}var Jc=class{kvMap=new Map;_vMap=void 0;has(e){return this.kvMap.has(e)}delete(e){if(!this.has(e))return!1;let n=this.kvMap.get(e);return this._vMap!==void 0&&this._vMap.has(n)?(this.kvMap.set(e,this._vMap.get(n)),this._vMap.delete(n)):this.kvMap.delete(e),!0}get(e){return this.kvMap.get(e)}set(e,n){if(this.kvMap.has(e)){let r=this.kvMap.get(e);this._vMap===void 0&&(this._vMap=new Map);let o=this._vMap;for(;o.has(r);)r=o.get(r);o.set(r,n)}else this.kvMap.set(e,n)}forEach(e){for(let[n,r]of this.kvMap)if(e(r,n),this._vMap!==void 0){let o=this._vMap;for(;o.has(r);)r=o.get(r),e(r,n)}}};function Re(t,e,n,r,o,i,s,c){cr("NgControlFlow");let l=Z(),u=Be(),d=rn(u.consts,i);return Zc(l,u,t,e,n,r,o,d,256,s,c),jf}function jf(t,e,n,r,o,i,s,c){return cr("NgControlFlow"),s_(t,e,n,r,o,i,s,c),jf}function s_(t,e,n,r,o,i,s,c){let l=Z(),u=Be(),d=rn(u.consts,i);Zc(l,u,t,e,n,r,o,d,512,s,c)}function ke(t,e){cr("NgControlFlow");let n=Z(),r=Zr(),o=n[r]!==At?n[r]:-1,i=o!==-1?Xc(n,je+o):void 0,s=0;if(kn(n,r,t)){let c=L(null);try{if(i!==void 0&&hv(i,s),t!==-1){let l=je+t,u=Xc(n,l),d=hf(n[j],l),f=mv(u,d,n),p=il(n,d,e,{dehydratedView:f});sl(u,p,s,bs(d,f))}}finally{L(c)}}else if(i!==void 0){let c=fv(i,s);c!==void 0&&(c[De]=e)}}var uf=class{lContainer;$implicit;$index;constructor(e,n,r){this.lContainer=e,this.$implicit=n,this.$index=r}get $count(){return this.lContainer.length-Te}};function Bf(t){return t}function Fn(t,e){return e}var df=class{hasEmptyBlock;trackByFn;liveCollection;constructor(e,n,r){this.hasEmptyBlock=e,this.trackByFn=n,this.liveCollection=r}};function de(t,e,n,r,o,i,s,c,l,u,d,f,p){cr("NgControlFlow");let h=Z(),m=Be(),v=l!==void 0,y=Z(),b=c?s.bind(y[mt][De]):s,D=new df(v,b);y[je+t]=D,Zc(h,m,t+1,e,n,r,o,rn(m.consts,i),256),v&&Zc(h,m,t+2,l,u,d,f,rn(m.consts,p),512)}var ff=class extends cf{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(e,n,r){super(),this.lContainer=e,this.hostLView=n,this.templateTNode=r}get length(){return this.lContainer.length-Te}at(e){return this.getLView(e)[De].$implicit}attach(e,n){let r=n[qo];this.needsIndexUpdate||=e!==this.length,sl(this.lContainer,n,e,bs(this.templateTNode,r)),a_(this.lContainer,e)}detach(e){return this.needsIndexUpdate||=e!==this.length-1,c_(this.lContainer,e),l_(this.lContainer,e)}create(e,n){let r=Jd(this.lContainer,this.templateTNode.tView.ssrId);return il(this.hostLView,this.templateTNode,new uf(this.lContainer,n,e),{dehydratedView:r})}destroy(e){rl(e[j],e)}updateValue(e,n){this.getLView(e)[De].$implicit=n}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let e=0;e<this.length;e++)this.getLView(e)[De].$index=e}getLView(e){return u_(this.lContainer,e)}};function fe(t){let e=L(null),n=Pn();try{let r=Z(),o=r[j],i=r[n],s=n+1,c=Xc(r,s);if(i.liveCollection===void 0){let u=hf(o,s);i.liveCollection=new ff(c,r,u)}else i.liveCollection.reset();let l=i.liveCollection;if(i_(l,t,i.trackByFn,e),l.updateIndexes(),i.hasEmptyBlock){let u=Zr(),d=l.length===0;if(kn(r,u,d)){let f=n+2,p=Xc(r,f);if(d){let h=hf(o,f),m=mv(p,h,r),v=il(r,h,void 0,{dehydratedView:m});sl(p,v,0,bs(h,m))}else o.firstUpdatePass&&BC(p),hv(p,0)}}}finally{L(e)}}function Xc(t,e){return t[e]}function a_(t,e){if(t.length<=Te)return;let n=Te+e,r=t[n];r&&$w(r)}function c_(t,e){if(t.length<=Te)return;let n=Te+e,r=t[n];r&&Bw(r)}function l_(t,e){return Ds(t,e)}function u_(t,e){return fv(t,e)}function hf(t,e){return Ec(t,e)}function gt(t,e,n){let r=Z(),o=Zr();if(kn(r,o,e)){let i=Be(),s=us();dC(s,r,t,e,r[Se],n)}return gt}function ny(t,e,n,r,o){kf(e,t,n,o?"class":"style",r)}function B(t,e,n,r){let o=Z(),i=o[j],s=t+je,c=i.firstCreatePass?Ev(s,o,2,e,gC,Xm(),n,r):i.data[s];if(Mn(c)){let l=o[en].tracingService;if(l&&l.componentCreate){let u=i.data[c.directiveStart+c.componentOffset];return l.componentCreate(vv(u),()=>(ry(t,e,o,c,r),B))}}return ry(t,e,o,c,r),B}function ry(t,e,n,r,o){if(ev(r,n,t,e,Vv),bc(r)){let i=n[j];Zy(i,n,r),Oy(i,r,n)}o!=null&&Rf(n,r)}function $(){let t=Be(),e=tt(),n=tv(e);return t.firstCreatePass&&Dv(t,n),yd(n)&&vd(),gd(),n.classesWithoutHost!=null&&XT(n)&&ny(t,n,Z(),n.classesWithoutHost,!0),n.stylesWithoutHost!=null&&ew(n)&&ny(t,n,Z(),n.stylesWithoutHost,!1),$}function Ln(t,e,n,r){return B(t,e,n,r),$(),Ln}function A(t,e,n,r){let o=Z(),i=o[j],s=t+je,c=i.firstCreatePass?pI(s,i,2,e,n,r):i.data[s];return ev(c,o,t,e,Vv),r!=null&&Rf(o,c),A}function O(){let t=tt(),e=tv(t);return yd(e)&&vd(),gd(),O}function xs(t,e,n,r){return A(t,e,n,r),O(),xs}var Vv=(t,e,n,r,o)=>(xc(!0),Fy(e[Se],r,Cd()));function $t(){return Z()}function lr(t,e,n){let r=Z(),o=Zr();if(kn(r,o,e)){let i=Be(),s=us();Jy(s,r,t,e,r[Se],n)}return lr}var Ns="en-US";var d_=Ns;function Uv(t){typeof t=="string"&&(d_=t.toLowerCase().replace(/_/g,"-"))}function Qe(t,e,n){let r=Z(),o=Be(),i=tt();return f_(o,r,r[Se],i,t,e,n),Qe}function wt(t,e,n){let r=Z(),o=Be(),i=tt();return(i.type&3||n)&&Lf(i,o,r,n,r[Se],t,e,to(i,r,e)),wt}function f_(t,e,n,r,o,i,s){let c=!0,l=null;if((r.type&3||s)&&(l??=to(r,e,i),Lf(r,t,e,s,n,o,i,l)&&(c=!1)),c){let u=r.outputs?.[o],d=r.hostDirectiveOutputs?.[o];if(d&&d.length)for(let f=0;f<d.length;f+=2){let p=d[f],h=d[f+1];l??=to(r,e,i),zc(r,e,p,h,o,l)}if(u&&u.length)for(let f of u)l??=to(r,e,i),zc(r,e,f,o,o,l)}}function ne(t=1){return mg(t)}function un(t,e,n,r){return jI(t,LI(e,n,r)),un}function Hn(t=1){Ic(dg()+t)}function $f(t){let e=rg();return zm(e,je+t)}function kc(t,e){return t<<17|e<<2}function io(t){return t>>17&32767}function h_(t){return(t&2)==2}function p_(t,e){return t&131071|e<<17}function pf(t){return t|2}function ri(t){return(t&131068)>>2}function Fd(t,e){return t&-131069|e<<2}function m_(t){return(t&1)===1}function mf(t){return t|1}function g_(t,e,n,r,o,i){let s=i?e.classBindings:e.styleBindings,c=io(s),l=ri(s);t[r]=n;let u=!1,d;if(Array.isArray(n)){let f=n;d=f[1],(d===null||Wo(f,d)>0)&&(u=!0)}else d=n;if(o)if(l!==0){let p=io(t[c+1]);t[r+1]=kc(p,c),p!==0&&(t[p+1]=Fd(t[p+1],r)),t[c+1]=p_(t[c+1],r)}else t[r+1]=kc(c,0),c!==0&&(t[c+1]=Fd(t[c+1],r)),c=r;else t[r+1]=kc(l,0),c===0?c=r:t[l+1]=Fd(t[l+1],r),l=r;u&&(t[r+1]=pf(t[r+1])),oy(t,d,r,!0),oy(t,d,r,!1),y_(e,d,t,r,i),s=kc(c,l),i?e.classBindings=s:e.styleBindings=s}function y_(t,e,n,r,o){let i=o?t.residualClasses:t.residualStyles;i!=null&&typeof e=="string"&&Wo(i,e)>=0&&(n[r+1]=mf(n[r+1]))}function oy(t,e,n,r){let o=t[n+1],i=e===null,s=r?io(o):ri(o),c=!1;for(;s!==0&&(c===!1||i);){let l=t[s],u=t[s+1];v_(l,e)&&(c=!0,t[s+1]=r?mf(u):pf(u)),s=r?io(u):ri(u)}c&&(t[n+1]=r?pf(o):mf(o))}function v_(t,e){return t===null||e==null||(Array.isArray(t)?t[1]:t)===e?!0:Array.isArray(t)&&typeof e=="string"?Wo(t,e)>=0:!1}function ci(t,e){return S_(t,e,null,!0),ci}function S_(t,e,n,r){let o=Z(),i=Be(),s=Dd(2);if(i.firstUpdatePass&&E_(i,t,s,r),e!==At&&kn(o,s,e)){let c=i.data[Pn()];I_(i,c,o,o[Se],t,o[s+1]=__(e,n),r,s)}}function b_(t,e){return e>=t.expandoStartIndex}function E_(t,e,n,r){let o=t.data;if(o[n+1]===null){let i=o[Pn()],s=b_(t,n);M_(i,r)&&e===null&&!s&&(e=!1),e=D_(o,i,e,r),g_(o,i,e,n,s,r)}}function D_(t,e,n,r){let o=ug(t),i=r?e.residualClasses:e.residualStyles;if(o===null)(r?e.classBindings:e.styleBindings)===0&&(n=Ld(null,t,e,n,r),n=Is(n,e.attrs,r),i=null);else{let s=e.directiveStylingLast;if(s===-1||t[s]!==o)if(n=Ld(o,t,e,n,r),i===null){let l=T_(t,e,r);l!==void 0&&Array.isArray(l)&&(l=Ld(null,t,e,l[1],r),l=Is(l,e.attrs,r),w_(t,e,r,l))}else i=C_(t,e,r)}return i!==void 0&&(r?e.residualClasses=i:e.residualStyles=i),n}function T_(t,e,n){let r=n?e.classBindings:e.styleBindings;if(ri(r)!==0)return t[io(r)]}function w_(t,e,n,r){let o=n?e.classBindings:e.styleBindings;t[io(o)]=r}function C_(t,e,n){let r,o=e.directiveEnd;for(let i=1+e.directiveStylingLast;i<o;i++){let s=t[i].hostAttrs;r=Is(r,s,n)}return Is(r,e.attrs,n)}function Ld(t,e,n,r,o){let i=null,s=n.directiveEnd,c=n.directiveStylingLast;for(c===-1?c=n.directiveStart:c++;c<s&&(i=e[c],r=Is(r,i.hostAttrs,o),i!==t);)c++;return t!==null&&(n.directiveStylingLast=c),r}function Is(t,e,n){let r=n?1:2,o=-1;if(e!==null)for(let i=0;i<e.length;i++){let s=e[i];typeof s=="number"?o=s:o===r&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),Fm(t,s,n?!0:e[++i]))}return t===void 0?null:t}function I_(t,e,n,r,o,i,s,c){if(!(e.type&3))return;let l=t.data,u=l[c+1],d=m_(u)?iy(l,e,n,o,ri(u),s):void 0;if(!el(d)){el(i)||h_(u)&&(i=iy(l,null,n,o,c,s));let f=dd(Pn(),n);rC(r,s,f,o,i)}}function iy(t,e,n,r,o,i){let s=e===null,c;for(;o>0;){let l=t[o],u=Array.isArray(l),d=u?l[1]:l,f=d===null,p=n[o+1];p===At&&(p=f?dt:void 0);let h=f?yc(p,r):d===r?p:void 0;if(u&&!el(h)&&(h=yc(l,r)),el(h)&&(c=h,s))return c;let m=t[o+1];o=s?io(m):ri(m)}if(e!==null){let l=i?e.residualClasses:e.residualStyles;l!=null&&(c=yc(l,r))}return c}function el(t){return t!==void 0}function __(t,e){return t==null||t===""||(typeof e=="string"?t=$c(t)+e:typeof t=="object"&&(t=dc($c(t)))),t}function M_(t,e){return(t.flags&(e?8:16))!==0}function M(t,e=""){let n=Z(),r=Be(),o=t+je,i=r.firstCreatePass?al(r,o,1,e,null):r.data[o],s=P_(r,n,i,e);n[o]=s,Pc()&&_f(r,n,s,i),Zo(i,!1)}var P_=(t,e,n,r)=>(xc(!0),Dw(e[Se],r));function x_(t,e,n,r=""){return kn(t,Zr(),n)?e+es(n)+r:At}function N_(t,e,n,r,o,i=""){let s=ig(),c=KC(t,s,n,o);return Dd(2),c?e+es(n)+r+es(o)+i:At}function re(t){return Ke("",t),re}function Ke(t,e,n){let r=Z(),o=x_(r,t,e,n);return o!==At&&jv(r,Pn(),o),Ke}function dn(t,e,n,r,o){let i=Z(),s=N_(i,t,e,n,r,o);return s!==At&&jv(i,Pn(),s),dn}function jv(t,e,n){let r=dd(e,t);Tw(t[Se],r,n)}function sy(t,e,n){let r=Be();r.firstCreatePass&&Bv(e,r.data,r.blueprint,nn(t),n)}function Bv(t,e,n,r,o){if(t=ze(t),Array.isArray(t))for(let i=0;i<t.length;i++)Bv(t[i],e,n,r,o);else{let i=Be(),s=Z(),c=tt(),l=Ur(t)?t:ze(t.provide),u=sd(t),d=c.providerIndexes&1048575,f=c.directiveStart,p=c.providerIndexes>>20;if(Ur(t)||!t.multi){let h=new no(u,o,ue,null),m=Vd(l,e,o?d:d+p,f);m===-1?(Bd(jc(c,s),i,l),Hd(i,t,e.length),e.push(l),c.directiveStart++,c.directiveEnd++,o&&(c.providerIndexes+=1048576),n.push(h),s.push(h)):(n[m]=h,s[m]=h)}else{let h=Vd(l,e,d+p,f),m=Vd(l,e,d,d+p),v=h>=0&&n[h],y=m>=0&&n[m];if(o&&!y||!o&&!v){Bd(jc(c,s),i,l);let b=A_(o?k_:R_,n.length,o,r,u,t);!o&&y&&(n[m].providerFactory=b),Hd(i,t,e.length,0),e.push(l),c.directiveStart++,c.directiveEnd++,o&&(c.providerIndexes+=1048576),n.push(b),s.push(b)}else{let b=$v(n[o?m:h],u,!o&&r);Hd(i,t,h>-1?h:m,b)}!o&&r&&y&&n[m].componentProviders++}}}function Hd(t,e,n,r){let o=Ur(e),i=Um(e);if(o||i){let l=(i?ze(e.useClass):e).prototype.ngOnDestroy;if(l){let u=t.destroyHooks||(t.destroyHooks=[]);if(!o&&e.multi){let d=u.indexOf(n);d===-1?u.push(n,[r,l]):u[d+1].push(r,l)}else u.push(n,l)}}}function $v(t,e,n){return n&&t.componentProviders++,t.multi.push(e)-1}function Vd(t,e,n,r){for(let o=n;o<r;o++)if(e[o]===t)return o;return-1}function R_(t,e,n,r,o){return gf(this.multi,[])}function k_(t,e,n,r,o){let i=this.multi,s;if(this.providerFactory){let c=this.providerFactory.componentProviders,l=Ss(r,r[j],this.providerFactory.index,o);s=l.slice(0,c),gf(i,s);for(let u=c;u<l.length;u++)s.push(l[u])}else s=[],gf(i,s);return s}function gf(t,e){for(let n=0;n<t.length;n++){let r=t[n];e.push(r())}return e}function A_(t,e,n,r,o,i){let s=new no(t,n,ue,null);return s.multi=[],s.index=e,s.componentProviders=0,$v(s,o,r&&!n),s}function ao(t,e){return n=>{n.providersResolver=(r,o)=>sy(r,o?o(t):t,!1),e&&(n.viewProvidersResolver=(r,o)=>sy(r,o?o(e):e,!0))}}function Gf(t,e){let n=og()+t,r=Z();return r[n]===At?qC(r,n,e()):QC(r,n)}var Gv=(()=>{class t{applicationErrorHandler=I(Xr);appRef=I(ai);taskService=I(Jr);ngZone=I(Ue);zonelessEnabled=I(ms);tracing=I(cn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Le;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Ki):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(I(Pd,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let n=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(n);return}this.switchToMicrotaskScheduler(),this.taskService.remove(n)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let n=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(n)})})}notify(n){if(!this.zonelessEnabled&&n===5)return;switch(n){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?bg:Id;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Ki+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let n=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(n),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let n=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(n)}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=ar({token:t,factory:t.\u0275fac})}return t})();function Wv(){return[{provide:Cn,useExisting:Gv},{provide:Ue,useClass:Yi},{provide:ms,useValue:!0}]}function O_(){return typeof $localize<"u"&&$localize.locale||Ns}var Wf=new H("",{factory:()=>I(Wf,{optional:!0,skipSelf:!0})||O_()});function he(t,e){return Li(t,e?.equal)}function yt(t){return Kp(t)}var zv=class t extends Error{_brand;constructor(e){super(e)}static IDLE=new t("IDLE");static LOADING=new t("LOADING")};function qv(t,e){return xv(e)}function $_(t,e){return Nv(e)}var ur=(qv.required=$_,qv);var G_=1e4;var H$=G_-1e3;var ks=(()=>{class t{static __NG_ELEMENT_ID__=W_}return t})();function W_(t){return z_(tt(),Z(),(t&16)===16)}function z_(t,e,n){if(Mn(t)&&!n){let r=kt(t.index,e);return new sr(r,r)}else if(t.type&175){let r=e[mt];return new sr(r,e)}return null}var zf=new H(""),q_=new H("");function Rs(t){return!t.moduleRef}function Q_(t){let e=Rs(t)?t.r3Injector:t.moduleRef.injector,n=e.get(Ue);return n.run(()=>{Rs(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let r=e.get(Xr),o;if(n.runOutsideAngular(()=>{o=n.onError.subscribe({next:r})}),Rs(t)){let i=()=>e.destroy(),s=t.platformInjector.get(zf);s.add(i),e.onDestroy(()=>{o.unsubscribe(),s.delete(i)})}else{let i=()=>t.moduleRef.destroy(),s=t.platformInjector.get(zf);s.add(i),t.moduleRef.onDestroy(()=>{vs(t.allPlatformModules,t.moduleRef),o.unsubscribe(),s.delete(i)})}return Y_(r,n,()=>{let i=e.get(Jr),s=i.add(),c=e.get(Hf);return c.runInitializers(),c.donePromise.then(()=>{let l=e.get(Wf,Ns);if(Uv(l||Ns),!e.get(q_,!0))return Rs(t)?e.get(ai):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Rs(t)){let d=e.get(ai);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return K_?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{i.remove(s)})})})}var K_;function Y_(t,e,n){try{let r=n();return Ps(r)?r.catch(o=>{throw e.runOutsideAngular(()=>t(o)),o}):r}catch(r){throw e.runOutsideAngular(()=>t(r)),r}}var ll=null;function Z_(t=[],e){return ht.create({name:e,providers:[{provide:os,useValue:"platform"},{provide:zf,useValue:new Set([()=>ll=null])},...t]})}function J_(t=[]){if(ll)return ll;let e=Z_(t);return ll=e,Hv(),X_(e),e}function X_(t){let e=t.get(Nc,null);zo(t,()=>{e?.forEach(n=>n())})}function Qv(t){let{rootComponent:e,appProviders:n,platformProviders:r,platformRef:o}=t;oe(te.BootstrapApplicationStart);try{let i=o?.injector??J_(r),s=[Wv(),Tg,...n||[]],c=new Cs({providers:s,parent:i,debugName:"",runEnvironmentInitializers:!1});return Q_({r3Injector:c.injector,platformInjector:i,rootComponent:e})}catch(i){return Promise.reject(i)}finally{oe(te.BootstrapApplicationEnd)}}function qf(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}var Kv=null;function Gt(){return Kv}function Qf(t){Kv??=t}var As=class{},ul=(()=>{class t{historyGo(n){throw new Error("")}static \u0275fac=function(r){return new(r||t)};static \u0275prov=Y({token:t,factory:()=>I(Yv),providedIn:"platform"})}return t})();var Yv=(()=>{class t extends ul{_location;_history;_doc=I(nt);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Gt().getBaseHref(this._doc)}onPopState(n){let r=Gt().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){let r=Gt().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,r,o){this._history.pushState(n,r,o)}replaceState(n,r,o){this._history.replaceState(n,r,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||t)};static \u0275prov=Y({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Os(t,e){e=encodeURIComponent(e);for(let n of t.split(";")){let r=n.indexOf("="),[o,i]=r==-1?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()!==e)continue;let s=i;try{s=decodeURIComponent(i)}catch{}return s.length>1&&s[0]==='"'&&s[s.length-1]==='"'&&(s=s.slice(1,-1)),s}return null}var Zv="browser";var Fs=class{_doc;constructor(e){this._doc=e}manager},dl=(()=>{class t extends Fs{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o,i){return n.addEventListener(r,o,i),()=>this.removeEventListener(n,r,o,i)}removeEventListener(n,r,o,i){return n.removeEventListener(r,o,i)}static \u0275fac=function(r){return new(r||t)(q(nt))};static \u0275prov=Y({token:t,factory:t.\u0275fac})}return t})(),pl=new H(""),Jf=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(n,r){this._zone=r,n.forEach(s=>{s.manager=this});let o=n.filter(s=>!(s instanceof dl));this._plugins=o.slice().reverse();let i=n.find(s=>s instanceof dl);i&&this._plugins.push(i)}addEventListener(n,r,o,i){return this._findPluginFor(r).addEventListener(n,r,o,i)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(i=>i.supports(n)),!r)throw new U(-5101,!1);return this._eventNameToPlugin.set(n,r),r}static \u0275fac=function(r){return new(r||t)(q(pl),q(Ue))};static \u0275prov=Y({token:t,factory:t.\u0275fac})}return t})(),Kf="ng-app-id";function Jv(t){for(let e of t)e.remove()}function Xv(t,e){let n=e.createElement("style");return n.textContent=t,n}function t0(t,e,n,r){let o=t.head?.querySelectorAll(`style[${Kf}="${e}"],link[${Kf}="${e}"]`);if(!o||o.length===0)return!1;for(let i of o)i.removeAttribute(Kf),i instanceof HTMLLinkElement?r.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&n.set(i.textContent,{usage:0,elements:[i]});return!0}function Zf(t,e){let n=e.createElement("link");return n.setAttribute("rel","stylesheet"),n.setAttribute("href",t),n}var Xf=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(n,r,o,i={}){this.doc=n,this.appId=r,this.nonce=o,t0(n,r,this.inline,this.external)&&this.hosts.add(n.head)}addStyles(n,r){for(let o of n)this.addUsage(o,this.inline,Xv);r?.forEach(o=>this.addUsage(o,this.external,Zf))}removeStyles(n,r){for(let o of n)this.removeUsage(o,this.inline);r?.forEach(o=>this.removeUsage(o,this.external))}addUsage(n,r,o){let i=r.get(n);i?i.usage++:r.set(n,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(n,this.doc)))})}removeUsage(n,r){let o=r.get(n);o&&(o.usage--,o.usage<=0&&(Jv(o.elements),r.delete(n)))}ngOnDestroy(){for(let[,{elements:n}]of[...this.inline,...this.external])Jv(n);this.hosts.clear()}addHost(n){if(!this.hosts.has(n)){this.hosts.add(n);for(let[r,{elements:o}]of this.inline)o.push(this.addElement(n,Xv(r,this.doc)));for(let[r,{elements:o}]of this.external)o.push(this.addElement(n,Zf(r,this.doc)))}}removeHost(n){this.hosts.delete(n);for(let r of[...this.inline.values(),...this.external.values()]){let o=[];for(let i of r.elements)i.parentNode===n?i.remove():o.push(i);r.elements=o}}addElement(n,r){return this.nonce&&r.setAttribute("nonce",this.nonce),n.appendChild(r)}static \u0275fac=function(r){return new(r||t)(q(nt),q(ds),q(hs,8),q(fs))};static \u0275prov=Y({token:t,factory:t.\u0275fac})}return t})(),Yf={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},eh=/%COMP%/g;var tS="%COMP%",n0=`_nghost-${tS}`,r0=`_ngcontent-${tS}`,o0=!0,i0=new H("",{factory:()=>o0}),s0=new H("");function a0(t){return r0.replace(eh,t)}function c0(t){return n0.replace(eh,t)}function nS(t,e){return e.map(n=>n.replace(eh,t))}var th=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(n,r,o,i,s,c,l=null,u=null,d=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=s,this.ngZone=c,this.nonce=l,this.tracingService=u,this.cssVarNamespace=d??"",this.defaultRenderer=new Ls(n,s,c,this.tracingService,this.cssVarNamespace)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;let o=this.getOrCreateRenderer(n,r);return o instanceof hl?o.applyToHost(n):o instanceof Hs&&o.applyStyles(),o}getOrCreateRenderer(n,r){let o=this.rendererByCompId,i=o.get(r.id);if(!i){let s=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(r.encapsulation){case Bt.Emulated:i=new hl(l,u,r,this.appId,d,s,c,f,this.cssVarNamespace);break;case Bt.ShadowDom:return new fl(l,n,r,s,c,this.nonce,f,this.cssVarNamespace,u);case Bt.ExperimentalIsolatedShadowDom:return new fl(l,n,r,s,c,this.nonce,f,this.cssVarNamespace);default:i=new Hs(l,u,r,d,s,c,f,this.cssVarNamespace);break}o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(n){this.rendererByCompId.delete(n)}static \u0275fac=function(r){return new(r||t)(q(Jf),q(so),q(ds),q(i0),q(nt),q(Ue),q(hs),q(cn,8),q(s0,8))};static \u0275prov=Y({token:t,factory:t.\u0275fac})}return t})(),Ls=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,n,r,o,i=""){this.eventManager=e,this.doc=n,this.ngZone=r,this.tracingService=o,this.cssVarNamespace=i}destroy(){}destroyNode=null;createElement(e,n){return n?this.doc.createElementNS(Yf[n]||n,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,n){(eS(e)?e.content:e).appendChild(n)}insertBefore(e,n,r){if(e){let o=eS(e)?e.content:e;if(r!=null&&r.parentNode!==o)throw new U(-5106,!1);o.insertBefore(n,r)}}removeChild(e,n){n.remove()}selectRootElement(e,n){let r=typeof e=="string"?this.doc.querySelector(e):e;if(!r)throw new U(-5104,!1);return n||(r.textContent=""),r}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,n,r,o){if(o){n=o+":"+n;let i=Yf[o];i?e.setAttributeNS(i,n,r):e.setAttribute(n,r)}else e.setAttribute(n,r)}removeAttribute(e,n,r){if(r){let o=Yf[r];o?e.removeAttributeNS(o,n):e.removeAttribute(`${r}:${n}`)}else e.removeAttribute(n)}addClass(e,n){e.classList.add(n)}removeClass(e,n){e.classList.remove(n)}setStyle(e,n,r,o){let i=n.startsWith("--");i&&(n=n.replace("%NS%",this.cssVarNamespace)),i||o&(Nn.DashCase|Nn.Important)?e.style.setProperty(n,r,o&Nn.Important?"important":""):e.style[n]=r}removeStyle(e,n,r){let o=n.startsWith("--");o&&(n=n.replace("%NS%",this.cssVarNamespace)),o||r&Nn.DashCase?e.style.removeProperty(n):e.style[n]=""}setProperty(e,n,r){e!=null&&(e[n]=r)}setValue(e,n){e.nodeValue=n}listen(e,n,r,o){if(typeof e=="string"&&(e=Gt().getGlobalEventTarget(this.doc,e),!e))throw new U(-5102,!1);let i=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(e,n,i)),this.eventManager.addEventListener(e,n,i,o)}decoratePreventDefault(e){return n=>{if(n==="__ngUnwrap__")return e;e(n)===!1&&n.preventDefault()}}};function eS(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var fl=class extends Ls{hostEl;sharedStylesHost;shadowRoot;constructor(e,n,r,o,i,s,c,l,u){super(e,o,i,c,l),this.hostEl=n,this.sharedStylesHost=u,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=r.styles;d=nS(r.id,d).map(p=>p.replace(/%NS%/g,l));for(let p of d){let h=document.createElement("style");s&&h.setAttribute("nonce",s),h.textContent=p,this.shadowRoot.appendChild(h)}let f=r.getExternalStyles?.();if(f)for(let p of f){let h=Zf(p,o);s&&h.setAttribute("nonce",s),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,n){return super.appendChild(this.nodeOrShadowRoot(e),n)}insertBefore(e,n,r){return super.insertBefore(this.nodeOrShadowRoot(e),n,r)}removeChild(e,n){return super.removeChild(null,n)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Hs=class extends Ls{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,n,r,o,i,s,c,l,u){super(e,i,s,c,l),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=o;let d=r.styles,f=u?nS(u,d):d;this.styles=f.map(p=>p.replace(/%NS%/g,l)),this.styleUrls=r.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Tf.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},hl=class extends Hs{contentAttr;hostAttr;constructor(e,n,r,o,i,s,c,l,u){let d=o+"-"+r.id;super(e,n,r,i,s,c,l,u,d),this.contentAttr=a0(d),this.hostAttr=c0(d)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,n){let r=super.createElement(e,n);return super.setAttribute(r,this.contentAttr,""),r}};var ml=class t extends As{supportsDOMEvents=!0;static makeCurrent(){Qf(new t)}onAndCancel(e,n,r,o){return e.addEventListener(n,r,o),()=>{e.removeEventListener(n,r,o)}}dispatchEvent(e,n){e.dispatchEvent(n)}remove(e){e.remove()}createElement(e,n){return n=n||this.getDefaultDocument(),n.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,n){return n==="window"?window:n==="document"?e:n==="body"?e.body:null}getBaseHref(e){let n=l0();return n==null?null:u0(n)}resetBaseElement(){Vs=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Os(document.cookie,e)}},Vs=null;function l0(){return Vs=Vs||document.head.querySelector("base"),Vs?Vs.getAttribute("href"):null}function u0(t){return new URL(t,document.baseURI).pathname}var rS=["alt","control","meta","shift"],d0={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},f0={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},oS=(()=>{class t extends Fs{constructor(n){super(n)}supports(n){return t.parseEventName(n)!=null}addEventListener(n,r,o,i){let s=t.parseEventName(r),c=t.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Gt().onAndCancel(n,s.domEventName,c,i))}static parseEventName(n){let r=n.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let i=t._normalizeKey(r.pop()),s="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),s="code."),rS.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),s+=u+".")}),s+=i,r.length!=0||i.length===0)return null;let l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(n,r){let o=d0[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),rS.forEach(s=>{if(s!==o){let c=f0[s];c(n)&&(i+=s+".")}}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{t.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return n==="esc"?"escape":n}static \u0275fac=function(r){return new(r||t)(q(nt))};static \u0275prov=Y({token:t,factory:t.\u0275fac})}return t})();async function nh(t,e,n){let r=S({rootComponent:t},h0(e,n));return Qv(r)}function h0(t,e){return{platformRef:e?.platformRef,appProviders:[...v0,...t?.providers??[]],platformProviders:y0}}function p0(){ml.makeCurrent()}function m0(){return new Jt}function g0(){return Sf(document),document}var y0=[{provide:fs,useValue:Zv},{provide:Nc,useValue:p0,multi:!0},{provide:nt,useFactory:g0}];var v0=[{provide:os,useValue:"root"},{provide:Jt,useFactory:m0},{provide:pl,useClass:dl,multi:!0},{provide:pl,useClass:oS,multi:!0},th,{provide:so,useClass:Xf},{provide:Xf,useExisting:so},Jf,{provide:oo,useExisting:th},[]];var Ot=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(n=>{let r=n.indexOf(":");if(r>0){let o=n.slice(0,r),i=n.slice(r+1).trim();this.addHeaderEntry(o,i)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((n,r)=>{this.addHeaderEntry(r,n)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([n,r])=>{this.setHeaderEntries(n,r)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let n=this.headers.get(e.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,n){return this.clone({name:e,value:n,op:"a"})}set(e,n){return this.clone({name:e,value:n,op:"s"})}delete(e,n){return this.clone({name:e,value:n,op:"d"})}maybeSetNormalizedName(e,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,e)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init();for(let[n,r]of e.headers.entries())this.headers.set(n,r),this.normalizedNames.set(n,e.normalizedNames.get(n))}clone(e){let n=new t;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([e]),n}applyUpdate(e){let n=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(e.name,n);let o=e.op==="a"?(this.headers.get(n)||[]).slice():[];o.push(...r),this.headers.set(n,o);break;case"d":let i=e.value;if(i===void 0)this.headers.delete(n),this.normalizedNames.delete(n);else{let s=Array.isArray(i)?i:[i],c=this.headers.get(n);if(!c)return;c=c.filter(l=>s.indexOf(l)===-1),c.length===0?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,c)}break}}addHeaderEntry(e,n){let r=e.toLowerCase();this.maybeSetNormalizedName(e,r),this.headers.has(r)?this.headers.get(r).push(n):this.headers.set(r,[n])}setHeaderEntries(e,n){let r=(Array.isArray(n)?n:[n]).map(i=>i.toString()),o=e.toLowerCase();this.headers.set(o,r),this.maybeSetNormalizedName(e,o)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>e(this.normalizedNames.get(n),this.headers.get(n)))}};var ui=class{map=new Map;set(e,n){return this.map.set(e,n),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}},yl=class{encodeKey(e){return iS(e)}encodeValue(e){return iS(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function S0(t,e){let n=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(o=>{let i=o.indexOf("="),[s,c]=i==-1?[e.decodeKey(o),""]:[e.decodeKey(o.slice(0,i)),e.decodeValue(o.slice(i+1))],l=n.get(s)||[];l.push(c),n.set(s,l)}),n}var b0=/%(\d[a-f0-9])/gi,E0={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function iS(t){return encodeURIComponent(t).replace(b0,(e,n)=>E0[n]??e)}function gl(t){return`${t}`}var Un=class t{map;encoder;updates=null;cloneFrom=null;constructor(e={}){if(this.encoder=e.encoder||new yl,e.fromString){if(e.fromObject)throw new U(2805,!1);this.map=S0(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(n=>{let r=e.fromObject[n],o=Array.isArray(r)?r.map(gl):[gl(r)];this.map.set(n,o)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let n=this.map.get(e);return n?n[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,n){return this.clone({param:e,value:n,op:"a"})}appendAll(e){let n=[];return Object.keys(e).forEach(r=>{let o=e[r];Array.isArray(o)?o.forEach(i=>{n.push({param:r,value:i,op:"a"})}):n.push({param:r,value:o,op:"a"})}),this.clone(n)}set(e,n){return this.clone({param:e,value:n,op:"s"})}delete(e,n){return this.clone({param:e,value:n,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let n=this.encoder.encodeKey(e);return this.map.get(e).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let n=new t({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(e),n}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[e,n]of this.cloneFrom.map.entries())this.map.set(e,n);this.updates.forEach(e=>{switch(e.op){case"a":case"s":let n=e.op==="a"?(this.map.get(e.param)||[]).slice():[];n.push(gl(e.value)),this.map.set(e.param,n);break;case"d":if(e.value!==void 0){let r=(this.map.get(e.param)||[]).slice(),o=r.indexOf(gl(e.value));o!==-1&&r.splice(o,1),r.length>0?this.map.set(e.param,r):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null}}};function D0(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function sS(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function aS(t){return typeof Blob<"u"&&t instanceof Blob}function cS(t){return typeof FormData<"u"&&t instanceof FormData}function T0(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var rh="Content-Type",lS="Accept",fS="text/plain",hS="application/json",w0=`${hS}, ${fS}, */*`,li=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(e,n,r,o){this.url=n,this.method=e.toUpperCase();let i;if(D0(this.method)||o?(this.body=r!==void 0?r:null,i=o):i=r,i){if(this.reportProgress=!!i.reportProgress,this.reportUploadProgress=!!i.reportUploadProgress,this.reportDownloadProgress=!!i.reportDownloadProgress,this.withCredentials=!!i.withCredentials,this.keepalive=!!i.keepalive,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),i.priority&&(this.priority=i.priority),i.cache&&(this.cache=i.cache),i.credentials&&(this.credentials=i.credentials),typeof i.timeout=="number"){if(i.timeout<1||!Number.isInteger(i.timeout))throw new U(2822,"");this.timeout=i.timeout}i.mode&&(this.mode=i.mode),i.redirect&&(this.redirect=i.redirect),i.integrity&&(this.integrity=i.integrity),i.referrer!==void 0&&(this.referrer=i.referrer),i.referrerPolicy&&(this.referrerPolicy=i.referrerPolicy),this.transferCache=i.transferCache}if(this.headers??=new Ot,this.context??=new ui,!this.params)this.params=new Un,this.urlWithParams=n;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=n;else{let c=n,l="",u=n.indexOf("#");u!==-1&&(l=n.substring(u),c=n.substring(0,u));let d=c.indexOf("?"),f=d===-1?"?":d<c.length-1?"&":"";this.urlWithParams=c+f+s+l}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||sS(this.body)||aS(this.body)||cS(this.body)||T0(this.body)?this.body:this.body instanceof Un?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||cS(this.body)?null:aS(this.body)?this.body.type||null:sS(this.body)?null:typeof this.body=="string"?fS:this.body instanceof Un?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?hS:null}clone(e={}){let n=e.method||this.method,r=e.url||this.url,o=e.responseType||this.responseType,i=e.keepalive??this.keepalive,s=e.priority||this.priority,c=e.cache||this.cache,l=e.mode||this.mode,u=e.redirect||this.redirect,d=e.credentials||this.credentials,f=e.referrer??this.referrer,p=e.integrity||this.integrity,h=e.referrerPolicy||this.referrerPolicy,m=e.transferCache??this.transferCache,v=e.timeout??this.timeout,y=e.body!==void 0?e.body:this.body,b=e.withCredentials??this.withCredentials,D=e.reportProgress??this.reportProgress,P=e.reportUploadProgress??this.reportUploadProgress,_=e.reportDownloadProgress??this.reportDownloadProgress,k=e.headers||this.headers,ee=e.params||this.params,Ze=e.context??this.context;return e.setHeaders!==void 0&&(k=Object.keys(e.setHeaders).reduce((Je,Yn)=>Je.set(Yn,e.setHeaders[Yn]),k)),e.setParams&&(ee=Object.keys(e.setParams).reduce((Je,Yn)=>Je.set(Yn,e.setParams[Yn]),ee)),new t(n,r,y,{params:ee,headers:k,context:Ze,reportProgress:D,reportUploadProgress:P,reportDownloadProgress:_,responseType:o,withCredentials:b,transferCache:m,keepalive:i,cache:c,priority:s,timeout:v,mode:l,redirect:u,credentials:d,referrer:f,integrity:p,referrerPolicy:h})}},lo=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(lo||{}),di=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(e,n=200,r="OK"){this.headers=e.headers||new Ot,this.status=e.status!==void 0?e.status:n,this.statusText=e.statusText||r,this.url=e.url||null,this.redirected=e.redirected,this.responseType=e.responseType,this.ok=this.status>=200&&this.status<300}},vl=class t extends di{constructor(e={}){super(e)}type=lo.ResponseHeader;clone(e={}){return new t({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},Us=class t extends di{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=lo.Response;clone(e={}){return new t({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0,redirected:e.redirected??this.redirected,responseType:e.responseType??this.responseType})}},Vn=class extends di{name="HttpErrorResponse";message;error;ok=!1;constructor(e){super(e,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},C0=200;var I0=/^\)\]\}',?\n/,xG=1024*1024,pS=new H("",{factory:()=>null}),Sl=(()=>{class t{fetchImpl=I(ih,{optional:!0})?.fetch??((...n)=>globalThis.fetch(...n));ngZone=I(Ue);destroyRef=I(et);maxResponseSize=I(pS);handle(n){return new F(r=>{let o=new AbortController,i=!1,s={next:l=>{l.type===lo.Response&&(i=!0),r.next(l)},error:l=>{i=!0,r.error(l)},complete:()=>{i=!0,r.complete()}};this.doRequest(n,o.signal,s).then(sh,l=>s.error(new Vn({error:l})));let c;return n.timeout&&(c=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{o.signal.aborted||o.abort(new DOMException("signal timed out","TimeoutError"))},n.timeout))),()=>{c!==void 0&&clearTimeout(c),!i&&!o.signal.aborted&&o.abort()}})}async doRequest(n,r,o){let i=this.createRequestInit(n),s;try{let y=this.ngZone.runOutsideAngular(()=>this.fetchImpl(n.urlWithParams,S({signal:r},i)));_0(y),o.next({type:lo.Sent}),s=await y}catch(y){o.error(new Vn({error:y,status:y.status??0,statusText:y.statusText,url:n.urlWithParams,headers:y.headers}));return}let c=new Ot(s.headers),l=s.statusText,u=s.url||n.urlWithParams,d=s.status,f=null,p=n.reportProgress||n.reportDownloadProgress;if(p&&o.next(new vl({headers:c,status:d,statusText:l,url:u})),s.body){let y=s.headers.get(rh)??"",b=s.headers.get("content-length"),D=b!==null?Number(b):NaN;this.maxResponseSize!==null&&Number.isFinite(D)&&D>this.maxResponseSize&&(await s.body.cancel(),uS(this.maxResponseSize));let P=[],_=s.body.getReader(),k=0,ee,Ze,Je=typeof Zone<"u"&&Zone.current,Yn=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await _.cancel(),Yn=!0;break}let{done:du,value:fu}=await _.read();if(du)break;if(P.push(fu),k+=fu.length,this.maxResponseSize!==null&&k>this.maxResponseSize&&(await _.cancel(),uS(this.maxResponseSize)),p){Ze=n.responseType==="text"?(Ze??"")+(ee??=dS(y)).decode(fu,{stream:!0}):void 0;let Fp=()=>o.next({type:lo.DownloadProgress,total:Number.isFinite(D)?D:void 0,loaded:k,partialText:Ze});Je?Je.run(Fp):Fp()}}}),Yn){o.complete();return}let hD=this.concatChunks(P,k);try{f=this.parseBody(n,hD,y,d)}catch(du){o.error(new Vn({error:du,headers:new Ot(s.headers),status:s.status,statusText:s.statusText,url:s.url||n.urlWithParams}));return}}d===0&&(d=f?C0:0);let h=d>=200&&d<300,m=s.redirected,v=s.type;h?(o.next(new Us({body:f,headers:c,status:d,statusText:l,url:u,redirected:m,responseType:v})),o.complete()):o.error(new Vn({error:f,headers:c,status:d,statusText:l,url:u,redirected:m,responseType:v}))}parseBody(n,r,o,i){switch(n.responseType){case"json":let s=new TextDecoder().decode(r).replace(I0,"");if(s==="")return null;try{return JSON.parse(s)}catch(c){if(i<200||i>=300)return s;throw c}case"text":return dS(o).decode(r);case"blob":return new Blob([r],{type:o});case"arraybuffer":return r.buffer}}createRequestInit(n){if(n.reportUploadProgress)throw new U(2824,!1);let r={},o;if(o=n.credentials,n.withCredentials&&(o="include"),n.headers.forEach((i,s)=>r[i]=s.join(",")),n.headers.has(lS)||(r[lS]=w0),!n.headers.has(rh)){let i=n.detectContentTypeHeader();i!==null&&(r[rh]=i)}return{body:n.serializeBody(),method:n.method,headers:r,credentials:o,keepalive:n.keepalive,cache:n.cache,priority:n.priority,mode:n.mode,redirect:n.redirect,referrer:n.referrer,integrity:n.integrity,referrerPolicy:n.referrerPolicy}}concatChunks(n,r){let o=new Uint8Array(r),i=0;for(let s of n)o.set(s,i),i+=s.length;return o}static \u0275fac=function(r){return new(r||t)};static \u0275prov=ar({token:t,factory:t.\u0275fac})}return t})(),ih=class{};function sh(){}function _0(t){t.then(sh,sh)}function uS(t){throw new U(-2825,!1)}var M0=/charset=\s*["']?([^;"'\s]+)["']?/i;function dS(t){let e=t.match(M0);if(e!==null)try{return new TextDecoder(e[1])}catch{}return new TextDecoder}var P0=new H("",{factory:()=>!0}),x0="XSRF-TOKEN",N0=new H("",{factory:()=>x0}),R0="X-XSRF-TOKEN",k0=new H("",{factory:()=>R0}),A0=(()=>{class t{cookieName=I(N0);doc=I(nt);lastCookieString="";lastToken=null;parseCount=0;getToken(){let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=Os(n,this.cookieName),this.lastCookieString=n),this.lastToken}static \u0275fac=function(r){return new(r||t)};static \u0275prov=ar({token:t,factory:t.\u0275fac})}return t})(),mS=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=Y({token:t,factory:function(r){let o=null;return r?o=new(r||t):o=q(A0),o},providedIn:"root"})}return t})();function gS(t,e){if(!I(P0)||t.method==="GET"||t.method==="HEAD")return e(t);try{let o=I(ul).href,{origin:i}=new URL(o),{origin:s}=new URL(t.url,i);if(i!==s)return e(t)}catch{return e(t)}let n=I(mS).getToken(),r=I(k0);return n!=null&&!t.headers.has(r)&&(t=t.clone({headers:t.headers.set(r,n)})),e(t)}function O0(t,e){return e(t)}function F0(t,e,n){return(r,o)=>zo(n,()=>e(r,i=>t(i,o)))}var yS=new H("",{factory:()=>[gS]}),vS=new H(""),SS=new H("",{factory:()=>!0});var ah=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=Y({token:t,factory:function(r){let o=null;return r?o=new(r||t):o=q(Sl),o},providedIn:"root"})}return t})();var bl=(()=>{class t{backend;injector;chain=null;pendingTasks=I(gs);contributeToStability=I(SS);constructor(n,r){this.backend=n,this.injector=r}handle(n){if(this.chain===null){let o=this.injector.get(El,null,{skipSelf:!0}),i=o!==null&&this.backend===o,s=this.injector.get(vS,[],i?{self:!0}:void 0),c=Array.from(new Set([...this.injector.get(yS),...s]));this.chain=c.reduceRight((l,u)=>F0(l,u,this.injector),O0)}let r=this.chain;if(this.contributeToStability){let o=this.pendingTasks.add();return yt(()=>r(n,i=>this.backend.handle(i))).pipe(tr(o))}else return yt(()=>r(n,o=>this.backend.handle(o)))}static \u0275fac=function(r){return new(r||t)(q(ah),q(ft))};static \u0275prov=Y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),El=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=Y({token:t,factory:function(r){let o=null;return r?o=new(r||t):o=q(bl),o},providedIn:"root"})}return t})();function oh(t,e){return S({body:e},t)}var Dl=(()=>{class t{handler;constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof li)i=n;else{let l;o.headers instanceof Ot?l=o.headers:l=new Ot(o.headers);let u;o.params&&(o.params instanceof Un?u=o.params:u=new Un({fromObject:o.params})),i=new li(n,r,o.body!==void 0?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,reportUploadProgress:o.reportUploadProgress,reportDownloadProgress:o.reportDownloadProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,referrerPolicy:o.referrerPolicy,integrity:o.integrity,timeout:o.timeout})}let s=We(i).pipe(ku(l=>this.handler.handle(l)));if(n instanceof li||o.observe==="events")return s;let c=s.pipe(Pt(l=>l instanceof Us));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return c.pipe(z(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new U(2806,!1);return l.body}));case"blob":return c.pipe(z(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new U(2807,!1);return l.body}));case"text":return c.pipe(z(l=>{if(l.body!==null&&typeof l.body!="string")throw new U(2808,!1);return l.body}));default:return c.pipe(z(l=>l.body))}case"response":return c;default:throw new U(2809,!1)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new Un().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,oh(o,r))}post(n,r,o={}){return this.request("POST",n,oh(o,r))}put(n,r,o={}){return this.request("PUT",n,oh(o,r))}static \u0275fac=function(r){return new(r||t)(q(El))};static \u0275prov=Y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ch(...t){let e=[Dl,Sl,bl,{provide:El,useExisting:bl},{provide:ah,useFactory:()=>I(Sl)},{provide:yS,useValue:gS,multi:!0}];for(let n of t)e.push(...n.\u0275providers);return rs(e)}function Tl(t,e){let r=!e?.manualCleanup?e?.injector?.get(et)??I(et):null,o=H0(e?.equal),i;e?.requireSync?i=be({kind:0},{equal:o}):i=be({kind:1,value:e?.initialValue},{equal:o});let s,c=t.subscribe({next:l=>i.set({kind:1,value:l}),error:l=>{i.set({kind:2,error:l}),s?.()},complete:()=>{s?.()}});if(e?.requireSync&&i().kind===0)throw new U(601,!1);return s=r?.onDestroy(c.unsubscribe.bind(c)),he(()=>{let l=i();switch(l.kind){case 1:return l.value;case 2:throw l.error;case 0:throw new U(601,!1)}},{equal:e?.equal})}function H0(t=Object.is){return(e,n)=>e.kind===1&&n.kind===1&&t(e.value,n.value)}var rt=(()=>{class t{constructor(){this.raidTierSource=new lt("6"),this.regionSource=new lt("Paldea"),this.pokemonListSource=new lt(""),this.teraTypeSource=new lt(""),this.moveListSource=new lt(""),this.loadingSource=new lt(!1),this.raidTier=this.raidTierSource.asObservable(),this.regionList=this.regionSource.asObservable(),this.pokemonList=this.pokemonListSource.asObservable(),this.teraType=this.teraTypeSource.asObservable(),this.moveList=this.moveListSource.asObservable(),this.loading=this.loadingSource.asObservable(),this.selection$=$i([this.raidTier,this.regionList,this.pokemonList,this.teraType]).pipe(z(([n,r,o,i])=>({tier:n,region:r,pokemon:o,tera:i}))),this.selection=Tl(this.selection$,{requireSync:!0})}changeRaidTier(n){n!==this.raidTierSource.value&&this.changePokemon(""),this.raidTierSource.next(n)}changeRegionList(n){n!==this.regionSource.value&&this.changePokemon(""),this.regionSource.next(n)}changePokemon(n){this.pokemonListSource.next(n)}changeTeraType(n){this.teraTypeSource.next(n)}changeMoveList(n){this.moveListSource.next(n)}changeLoading(n){this.loadingSource.next(n)}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275prov=Y({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var g;(function(t){t.Paldea="Paldea",t.Kitakami="Kitakami",t.Terarium="Terarium"})(g||(g={}));var a;(function(t){t.Time="Time",t.HP="HP"})(a||(a={}));var bS=[{name:"Abomasnow",region:g.Paldea,info:{moves:["Energy Ball","Ice Punch","Ice Shard","Leer","Blizzard","Snowscape","Aurora Veil"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Blizzard"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Snowscape"},{type:a.HP,threshold:25,action:"Uses Aurora Veil"}]}},{name:"Altaria",region:g.Paldea,info:{moves:["Dragon Pulse","Hurricane","Sing","Mist","Safeguard","Cotton Guard"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Safeguard"},{type:a.HP,threshold:75,action:"Uses"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Cotton Guard"},{type:a.HP,threshold:25,action:"Uses Sing"}]}},{name:"Amoonguss",region:g.Paldea,info:{moves:["Energy Ball","Sludge Bomb","Spore","Clear Smog","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Spore"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Annihilape",region:g.Paldea,info:{moves:["Shadow Claw","Close Combat","Outrage","Leer","Taunt","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Bulk Up"}]}},{name:"Appletun",region:g.Paldea,info:{moves:["Apple Acid","Dragon Pulse","Giga Drain","Body Press","","Growth"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses"},{type:a.HP,threshold:75,action:"Uses Growth"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Arboliva",region:g.Paldea,info:{moves:["Energy Ball","Hyper Voice","Earth Power","Charm","Sunny Day","Growth","Leaf Storm"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Growth"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Leaf Storm"}]}},{name:"Arcanine",region:g.Paldea,info:{moves:["Flamethrower","Crunch","Extreme Speed","Fire Fang","Sunny Day","Leer"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Leer"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Armarouge",region:g.Paldea,info:{moves:["Armor Cannon","Psychic","Night Shade","Will-O-Wisp","Sunny Day","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Sunny Day"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Avalugg",region:g.Paldea,info:{moves:["Icicle Crash","Double-Edge","Crunch","Ice Fang","Snowscape","Iron Defense"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Snowscape"},{type:a.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Baxcalibur",region:g.Paldea,info:{moves:["Dragon Claw","Icicle Crash","Ice Shard","Body Press","Snowscape"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Blissey",region:g.Paldea,info:{moves:["Dazzling Gleam","Hyper Voice","Sing","Seismic Toss","Gravity"],specialMoves:["Seismic Toss","Gravity"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Gravity"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Bombirdier",region:g.Paldea,info:{moves:["Rock Slide","Sucker Punch","Brave Bird","Torment","Knock Off","Feather Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Feather Dance"}]}},{name:"Brambleghast",region:g.Paldea,info:{moves:["Giga Drain","Shadow Ball","Power Whip","Infestation","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Grassy Terrain"}]}},{name:"Braviary",region:g.Paldea,info:{moves:["Acrobatics","Crush Claw","Superpower","Air Slash","Tailwind","Hone Claws"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Tailwind"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Hone Claws"},{type:a.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Breloom",region:g.Paldea,info:{moves:["Seed Bomb","Mach Punch","Worry Seed","Headbutt","Grassy Terrain","Spore"],specialMoves:["Spore"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Bronzong",region:g.Paldea,info:{moves:["Flash Cannon","Extrasensory","Metal Sound","Payback","Rain Dance","Calm Mind","Reflect"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Calm Mind"},{type:a.HP,threshold:25,action:"Uses Reflect"}]}},{name:"Camerupt",region:g.Paldea,info:{moves:["Flamethrower","Earth Power","Yawn","Eruption","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Ceruledge",region:g.Paldea,info:{moves:["Bitter Blade","Shadow Claw","Psycho Cut","Will-O-Wisp","Sunny Day","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Sunny Day"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Swords Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Cetitan",region:g.Paldea,info:{moves:["Ice Spinner","Liquidation","Yawn","Entrainment","Snowscape"],specialMoves:["Yawn","Entrainment"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Clawitzer",region:g.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Aura Sphere","Crabhammer","Rain Dance"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Water Pulse"}]}},{name:"Cloyster",region:g.Paldea,info:{moves:["Icicle Spear","Hydro Pump","Ice Shard","Supersonic","Shell Smash"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Shell Smash"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Coalossal",region:g.Paldea,info:{moves:["Heat Crash","Stone Edge","Incinerate","Ancient Power","Sandstorm","Tar Shot","Fire Blast"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Uses Tar Shot"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Fire Blast"}]}},{name:"Copperajah",region:g.Paldea,info:{moves:["Heavy Slam","Strength","Curse","High Horsepower","Sandstorm","Iron Defense"],specialMoves:["Curse"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Corviknight",region:g.Paldea,info:{moves:["Steel Wing","Drill Peck","Taunt","Body Press","Iron Defense","Hone Claws"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Hone Claws"}]}},{name:"Delibird",region:g.Paldea,info:{moves:["Present","Drill Peck","Ice Punch","Blizzard","Snowscape"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Present"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Present"}]}},{name:"Ditto",region:g.Paldea,info:{moves:["Transform"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:50,action:"Stats & Status Reset"}]}},{name:"Dondozo",region:g.Paldea,info:{moves:["Order Up","Waterfall","Heavy Slam","Tickle","Rain Dance","Stockpile"],specialMoves:["Stockpile"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Stockpile"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Dragalge",region:g.Paldea,info:{moves:["Dragon Pulse","Sludge Bomb","Water Pulse","Toxic","Acid Spray","Draco Meteor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Acid Spray"},{type:a.HP,threshold:75,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Draco Meteor"}]}},{name:"Dragapult",region:g.Paldea,info:{moves:["Shadow Ball","Dragon Darts","Thunderbolt","Hex","Reflect","Light Screen"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Light Screen"}]}},{name:"Dragonite",region:g.Paldea,info:{moves:["Dragon Rush","Aerial Ace","Extreme Speed","Hurricane","Safeguard","Dragon Dance","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Safeguard"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:35,action:"Uses Rain Dance"}]}},{name:"Drifblim",region:g.Paldea,info:{moves:["Hex","Air Slash","Thunder Wave","Shadow Ball","Will-O-Wisp"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Eelektross",region:g.Paldea,info:{moves:["Wild Charge","Flamethrower","Discharge","Crush Claw","Ion Deluge","Thunder Wave","Coil"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Ion Deluge"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:25,action:"Uses Coil"}]}},{name:"Eevee",region:g.Paldea,info:{moves:["Tera Blast","Take Down","Shadow Ball","Tickle","Yawn","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Yawn"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Falinks",region:g.Paldea,info:{moves:["Megahorn","Reversal","Headbutt","Brick Break","No Retreat"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:40,action:"Uses No Retreat"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Flapple",region:g.Paldea,info:{moves:["Grav Apple","Dragon Breath","Dragon Rush","Trailblaze","Grassy Terrain","Iron Defense","Dragon Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Dragon Dance"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Florges",region:g.Paldea,info:{moves:["Petal Dance","Moonblast","Psychic","Safeguard","Grassy Terrain","Calm Mind"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Grassy Terrain"}]}},{name:"Froslass",region:g.Paldea,info:{moves:["Frost Breath","Shadow Ball","Scary Face","Draining Kiss","Snowscape","Disable","Aurora Veil"],specialMoves:["Disable"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:25,action:"Uses Aurora Veil"}]}},{name:"Gallade",region:g.Paldea,info:{moves:["Psycho Cut","Brick Break","Shadow Sneak","Fury Cutter","Hypnosis","Disable","Psychic Terrain"],specialMoves:["Disable","Shadow Sneak"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Psychic Terrain"}]}},{name:"Garchomp",region:g.Paldea,info:{moves:["Earthquake","Dragon Claw","Iron Head","Slash","Sandstorm","Bulldoze"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Uses Bulldoze"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Gardevoir",region:g.Paldea,info:{moves:["Psychic","Moonblast","Disable","Draining Kiss","Misty Terrain","Calm Mind","Psychic Terrain"],specialMoves:["Disable"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Psychic Terrain"}]}},{name:"Garganacl",region:g.Paldea,info:{moves:["Salt Cure","Rock Slide","Hammer Arm","Sandstorm"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Gengar",region:g.Paldea,info:{moves:["Shadow Ball","Sludge Bomb","Confuse Ray","Spite","Hypnosis"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Hypnosis"}]}},{name:"Glalie",region:g.Paldea,info:{moves:["Freeze-Dry","Crunch","Headbutt","Frost Breath","Snowscape","Disable"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:85,action:"Uses Snowscape"}]}},{name:"Glimmora",region:g.Paldea,info:{moves:["Power Gem","Sludge Bomb","Mortal Spin","Ancient Power","Sandstorm","Tera Blast"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Tera Blast"}]}},{name:"Goodra",region:g.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Sludge Bomb","Power Whip","Rain Dance","Draco Meteor","Acid Armor"],specialMoves:["Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Acid Armor"}]}},{name:"Gothitelle",region:g.Paldea,info:{moves:["Psychic","Thunder Wave","Thunderbolt","Stored Power","Calm Mind","Light Screen"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Calm Mind"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:25,action:"Uses Light Screen"}]}},{name:"Greedent",region:g.Paldea,info:{moves:["Body Slam","Body Press","Bullet Seed","Tail Whip","Stockpile"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Stockpile"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Stockpile"}]}},{name:"Grimmsnarl",region:g.Paldea,info:{moves:["Spirit Break","False Surrender","Scary Face","Foul Play","Light Screen","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Light Screen"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Gyarados",region:g.Paldea,info:{moves:["Aqua Tail","Twister","Hurricane","Crunch","Scary Face","Taunt","Dragon Dance","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:35,action:"Uses Rain Dance"}]}},{name:"Hariyama",region:g.Paldea,info:{moves:["Reversal","Brick Break","Brine","Heavy Slam","Scary Face","Taunt","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Bulk Up"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Hatterene",region:g.Paldea,info:{moves:["Dazzling Gleam","Psychic","Dark Pulse","Charm","Misty Terrain","Calm Mind","Psychic Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Psychic Terrain"}]}},{name:"Haxorus",region:g.Paldea,info:{moves:["Dragon Claw","Crunch","Giga Impact","First Impression","Harden","Dragon Dance"],specialMoves:["Harden","First Impression"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Harden"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Dragon Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Hippowdon",region:g.Paldea,info:{moves:["Earthquake","Yawn","Rock Slide","Body Slam","Stockpile"],specialMoves:["Stockpile"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Yawn"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Stockpile"}]}},{name:"Honchkrow",region:g.Paldea,info:{moves:["Night Slash","Hurricane","Haze","Wing Attack","Nasty Plot"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Nasty Plot"}]}},{name:"Houndoom",region:g.Paldea,info:{moves:["Flamethrower","Crunch","Taunt","Will-O-Wisp","Sunny Day","Howl"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Howl"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Hydreigon",region:g.Paldea,info:{moves:["Dark Pulse","Dragon Pulse","Scary Face","Dragon Rush","Taunt","Reflect","Nasty Plot"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Uses Reflect"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Indeedee (Male)",formName:"indeedee",region:g.Paldea,info:{moves:["Psychic","Hyper Voice","Shadow Ball","Trick Room","Play Nice","Calm Mind"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Play Nice"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Indeedee (Female)",formName:"indeedee",imageAlt:"-f",region:g.Paldea,info:{moves:["Psychic","Hyper Voice","Shadow Ball","Trick Room","Play Nice","Calm Mind"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Play Nice"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Kingambit",region:g.Paldea,info:{moves:["Iron Head","Night Slash","Torment","Slash","Taunt","Metal Burst"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Torment"},{type:a.Time,threshold:15,action:"Uses Metal Burst"}]}},{name:"Krookodile",region:g.Paldea,info:{moves:["Earthquake","Crunch","Sand Tomb","Counter","Torment","Hone Claws"],specialMoves:["Counter"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Torment"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Hone Claws"}]}},{name:"Luxray",region:g.Paldea,info:{moves:["Crunch","Wild Charge","Discharge","Thunder Wave","Electric Terrain","Leer"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Uses Leer"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Electric Terrain"}]}},{name:"Mabosstiff",region:g.Paldea,info:{moves:["Crunch","Play Rough","Take Down","Swagger","Taunt"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Magnezone",region:g.Paldea,info:{moves:["Thunderbolt","Flash Cannon","Tri Attack","Thunder Wave","Magnet Rise","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Magnet Rise"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Mimikyu",region:g.Paldea,info:{moves:["Play Rough","Shadow Claw","Will-O-Wisp","Shadow Sneak","Light Screen","Taunt"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Light Screen"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Mismagius",region:g.Paldea,info:{moves:["Mystical Fire","Shadow Ball","Confuse Ray","Taunt","Light Screen","Nasty Plot"],specialMoves:["Light Screen"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Light Screen"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Nasty Plot"}]}},{name:"Mudsdale",region:g.Paldea,info:{moves:["High Horsepower","Body Press","Rock Smash","Heavy Slam","Scary Face","Iron Defense"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Scary Face"},{type:a.Time,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"}]}},{name:"Noivern",region:g.Paldea,info:{moves:["Air Slash","Dragon Pulse","Acrobatics","Boomburst","Tailwind"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Tailwind"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Tailwind"},{type:a.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Oranguru",region:g.Paldea,info:{moves:["Facade","Psychic","Stored Power","Yawn","Calm Mind","Light Screen"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Calm Mind"},{type:a.HP,threshold:75,action:"Uses Light Screen"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Orthworm",region:g.Paldea,info:{moves:["Iron Head","Earthquake","Stomping Tantrum","Wrap","Sandstorm","Coil"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Uses Coil"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Palafin",region:g.Paldea,info:{moves:["Liquidation","Acrobatics","Charm","Boomburst","Rain Dance","Bulk Up"],specialMoves:["Boomburst"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Passimian",region:g.Paldea,info:{moves:["Reversal","Rock Smash","Facade","Gunk Shot","Taunt","Trailblaze","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Uses Trailblaze"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Bulk Up"}]}},{name:"Pawmot",region:g.Paldea,info:{moves:["Wild Charge","Close Combat","Nuzzle","Sweet Kiss","Double Shock"],specialMoves:["Sweet Kiss"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:80,action:"Uses Nuzzle"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Double Shock"}]}},{name:"Pincurchin",region:g.Paldea,info:{moves:["Zing Zap","Thunder","Surf","Poison Jab","Rain Dance","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Rain Dance"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Polteageist",region:g.Paldea,info:{moves:["Shadow Ball","Mega Drain","Astonish","Will-O-Wisp","Shell Smash"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Shell Smash"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Raichu",region:g.Paldea,info:{moves:["Discharge","Iron Tail","Charm","Nuzzle","Electric Terrain","Thunder Wave"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Electric Terrain"}]}},{name:"Revavroom",region:g.Paldea,info:{moves:["Spin Out","Taunt","Gunk Shot","Overheat","Scary Face","Shift Gear"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Shift Gear"},{type:a.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Rotom",region:g.Paldea,info:{moves:["Discharge","Uproar","Hex","Thunder Wave","Charge","Eerie Impulse"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Charge"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Eerie Impulse"}]}},{name:"Sableye",region:g.Paldea,info:{moves:["Shadow Claw","Foul Play","Will-O-Wisp","Night Shade","Flatter","Torment"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Flatter"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Torment"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Salamence",region:g.Paldea,info:{moves:["Dragon Rush","Aerial Ace","Hyper Voice","Draco Meteor","Dragon Dance","Focus Energy"],specialMoves:["Dragon Rush"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:25,action:"Uses Focus Energy"}]}},{name:"Scizor",region:g.Paldea,info:{moves:["Iron Head","X-Scissor","Bullet Punch","Slash","Iron Defense","Focus Energy"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Iron Defense"},{type:a.HP,threshold:75,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"}]}},{name:"Scyther",region:g.Paldea,info:{moves:["Aerial Ace","X-Scissor","Slash","Agility","Focus Energy","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Focus Energy"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Swords Dance"}]}},{name:"Slaking",region:g.Paldea,info:{moves:["Facade","Shadow Claw","Play Rough","Swagger","Encore"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Encore"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"}]}},{name:"Slowbro",region:g.Paldea,info:{moves:["Zen Headbutt","Liquidation","Yawn","Water Pulse","Curse"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Curse"},{type:a.HP,threshold:70,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Curse"}]}},{name:"Slowking",region:g.Paldea,info:{moves:["Psychic","Surf","Yawn","Water Pulse","Psychic Terrain","Calm Mind"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Psychic Terrain"},{type:a.HP,threshold:70,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"}]}},{name:"Staraptor",region:g.Paldea,info:{moves:["Close Combat","Brave Bird","Quick Attack","Double-Edge"],specialMoves:["Double-Edge"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Brave Bird"}]}},{name:"Talonflame",region:g.Paldea,info:{moves:["Acrobatics","Flare Blitz","Steel Wing","Heat Wave","Bulk Up"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Bulk Up"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Bulk Up"}]}},{name:"Tatsugiri (Curly)",formName:"tatsugiri",region:g.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Chilling Water"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tatsugiri (Droopy)",formName:"tatsugiri",imageAlt:"-d",region:g.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Chilling Water"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tatsugiri (Stretchy)",formName:"tatsugiri",imageAlt:"-s",region:g.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Chilling Water"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tauros (Fire)",formName:"taurospaldeablaze",imageAlt:"-b",region:g.Paldea,info:{moves:["Flare Blitz","Close Combat","Flamethrower","Headbutt","Work Up","Sunny Day"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Work Up"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Sunny Day"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Tauros (Water)",formName:"taurospaldeaaqua",imageAlt:"-a",region:g.Paldea,info:{moves:["Wave Crash","Close Combat","Surf","Headbutt","Work Up","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Work Up"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Rain Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Tinkaton",region:g.Paldea,info:{moves:["Gigaton Hammer","Play Rough","Brutal Swing","Rock Smash","Misty Terrain","Thunder Wave","Charm"],specialMoves:["Charm","Misty Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Thunder Wave"},{type:a.HP,threshold:25,action:"Uses Charm"}]}},{name:"Toxtricity (Amped)",formName:"toxtricity",region:g.Paldea,info:{moves:["Overdrive","Poison Jab","Nuzzle","Boomburst","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Toxtricity (Low Key)",formName:"toxtricity",imageAlt:"-l",region:g.Paldea,info:{moves:["Overdrive","Poison Jab","Nuzzle","Boomburst","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Tsareena",region:g.Paldea,info:{moves:["High Jump Kick","Power Whip","Stomp","Trop Kick","Reflect","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Grassy Terrain"}]}},{name:"Tyranitar",region:g.Paldea,info:{moves:["Rock Slide","Crunch","Screech","Dark Pulse","Dragon Dance","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Volcarona",region:g.Paldea,info:{moves:["Fire Blast","Bug Buzz","Hurricane","Will-O-Wisp","Sunny Day","Quiver Dance"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Quiver Dance"},{type:a.HP,threshold:20,action:"Uses Quiver Dance"}]}},{name:"Weavile",region:g.Paldea,info:{moves:["Ice Punch","Night Slash","Taunt","Facade","Reflect","Swords Dance"],specialMoves:["Reflect"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Swords Dance"}]}},{name:"Zoroark",region:g.Paldea,info:{moves:["Night Daze","Shadow Claw","Taunt","Hyper Voice","Torment","Nasty Plot"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Torment"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Ambipom",region:g.Kitakami,info:{moves:["Double Hit","Screech","Fury Swipes","Knock Off","Trailblaze","Sand Attack"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:90,action:"Uses Trailblaze"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Sand Attack"},{type:a.HP,threshold:15,action:"Uses Sand Attack"}]}},{name:"Basculegion (Male)",formName:"basculegion",region:g.Kitakami,info:{moves:["Liquidation","Aqua Jet","Shadow Ball","Scary Face","Rain Dance","Wave Crash"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Rain Dance"},{type:a.HP,threshold:10,action:"Uses Wave Crash"}]}},{name:"Basculegion (Female)",formName:"basculegion",imageAlt:"-f",region:g.Kitakami,info:{moves:["Liquidation","Aqua Jet","Shadow Ball","Scary Face","Rain Dance","Hydro Pump"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Rain Dance"},{type:a.HP,threshold:10,action:"Uses Hydro Pump"}]}},{name:"Chandelure",region:g.Kitakami,info:{moves:["Shadow Ball","Heat Wave","Confuse Ray","Flamethrower","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Sunny Day"},{type:a.HP,threshold:80,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Sunny Day"},{type:a.HP,threshold:20,action:"Uses Heat Wave"}]}},{name:"Conkeldurr",region:g.Kitakami,info:{moves:["Hammer Arm","Stone Edge","Superpower","Scary Face","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Dusknoir",region:g.Kitakami,info:{moves:["Fire Punch","Brick Break","Shadow Ball","Shadow Punch","Trick Room","Poltergeist"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Trick Room"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Poltergeist"}]}},{name:"Gliscor",region:g.Kitakami,info:{moves:["Poison Jab","Earthquake","Acrobatics","X-Scissor","Sandstorm","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Swords Dance"},{type:a.Time,threshold:15,action:"Uses Sandstorm"}]}},{name:"Golem",region:g.Kitakami,info:{moves:["Earthquake","Stone Edge","Heavy Slam","Defense Curl"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Defense Curl"},{type:a.Time,threshold:70,action:"Uses Defense Curl"},{type:a.Time,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Earthquake"}]}},{name:"Kommo-o",formName:"kommoo",region:g.Kitakami,info:{moves:["Brick Break","Dragon Claw","Boomburst","Scary Face","Clangorous Soul"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Clangorous Soul"},{type:a.HP,threshold:10,action:"Uses Clangorous Soul"}]}},{name:"Ludicolo",region:g.Kitakami,info:{moves:["Energy Ball","Surf","Fake Out","Trailblaze","Rain Dance"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Rain Dance"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:10,action:"Uses Surf"}]}},{name:"Mamoswine",region:g.Kitakami,info:{moves:["Earthquake","Blizzard","Ice Shard","Ancient Power","Snowscape","Amnesia"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Amnesia"},{type:a.HP,threshold:10,action:"Uses Earthquake"}]}},{name:"Mandibuzz",region:g.Kitakami,info:{moves:["Rock Tomb","Dark Pulse","Toxic","Foul Play","Taunt","Nasty Plot"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Nasty Plot"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Mienshao",region:g.Kitakami,info:{moves:["Aura Sphere","Poison Jab","Taunt","Acrobatics","Bulk Up"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:90,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Milotic",region:g.Kitakami,info:{moves:["Chilling Water","Surf","Dragon Pulse","Attract","Rain Dance","Hydro Pump"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Rain Dance"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.HP,threshold:35,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Ninetales",region:g.Kitakami,info:{moves:["Flamethrower","Extrasensory","Will-O-Wisp","Hypnosis","Nasty Plot"],specialMoves:["Hypnosis"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Politoed",region:g.Kitakami,info:{moves:["Surf","Hyper Voice","Weather Ball","Encore","Rain Dance","Hydro Pump"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Poliwrath",region:g.Kitakami,info:{moves:["Liquidation","Brick Break","Haze","Hydro Pump","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Probopass",region:g.Kitakami,info:{moves:["Body Press","Power Gem","Flash Cannon","Harden","Gravity","Zap Cannon"],specialMoves:["Harden"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Gravity"},{type:a.HP,threshold:75,action:"Uses Zap Cannon"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Zap Cannon"}]}},{name:"Shiftry",region:g.Kitakami,info:{moves:["Fake Out","Sucker Punch","Leaf Blade","Extrasensory","Sunny Day","Leaf Storm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Sunny Day"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:10,action:"Uses Leaf Storm"}]}},{name:"Sinistcha",region:g.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:15,action:"Uses Matcha Gotcha"}]}},{name:"Snorlax",region:g.Kitakami,info:{moves:["Body Slam","Heavy Slam","Bite","Mud-Slap","Curse"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Curse"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Trevenant",region:g.Kitakami,info:{moves:["Wood Hammer","Shadow Claw","Will-O-Wisp","Hex","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:20,action:"Uses Will-O-Wisp"}]}},{name:"Victreebel",region:g.Kitakami,info:{moves:["Sludge Bomb","Power Whip","Acid Spray","Trailblaze","Sunny Day"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Sunny Day"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Vikavolt",region:g.Kitakami,info:{moves:["Discharge","Bug Buzz","Solar Beam","Zap Cannon"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Discharge"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Zap Cannon"},{type:a.HP,threshold:20,action:"Uses Zap Cannon"}]}},{name:"Yanmega",region:g.Kitakami,info:{moves:["Bug Buzz","Air Slash","Quick Attack","Hypnosis","Supersonic"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Supersonic"}]}},{name:"Alcremie",region:g.Terarium,info:{moves:["Dazzling Gleam","Psychic","Encore","Psyshock","Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Encore"},{type:a.HP,threshold:50,action:"Uses Acid Armor"},{type:a.HP,threshold:25,action:"Uses Acid Armor"},{type:a.Time,threshold:30,action:"Reduce Tera Orb Charge"}]}},{name:"Duraludon",region:g.Terarium,info:{moves:["Flash Cannon","Dragon Pulse","Breaking Swipe","Metal Sound","Light Screen","Draco Meteor","Iron Defense"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:99,action:"Uses Light Screen"},{type:a.HP,threshold:50,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:30,action:"Uses Iron Defense"}]}},{name:"Electivire",region:g.Terarium,info:{moves:["Discharge","Thunder Punch","Fire Punch","Ice Punch","Thunder Wave","Electric Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Uses Discharge"}]}},{name:"Excadrill",region:g.Terarium,info:{moves:["Drill Run","Iron Head","X-Scissor","Rapid Spin","Sandstorm","Earthquake"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Sandstorm"},{type:a.HP,threshold:15,action:"Uses Earthquake"}]}},{name:"Exeggutor",region:g.Terarium,info:{moves:["Psychic","Energy Ball","Uproar","Bulldoze","Sunny Day","Growth"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:99,action:"Uses Sunny Day"},{type:a.HP,threshold:90,action:"Uses Growth"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"}]}},{name:"Flygon",region:g.Terarium,info:{moves:["Dragon Pulse","Scorching Sands","Earthquake","Flamethrower","Sandstorm","Boomburst"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:50,action:"Uses Boomburst"},{type:a.Time,threshold:30,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Boomburst"}]}},{name:"Golurk",region:g.Terarium,info:{moves:["Shadow Punch","Drain Punch","Heavy Slam","Iron Defense","Gravity","Reflect"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Gravity"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Reflect"}]}},{name:"Hitmonchan",region:g.Terarium,info:{moves:["Mach Punch","Mega Punch","Thunder Punch","Throat Chop","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Bulk Up"},{type:a.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Hitmonlee",region:g.Terarium,info:{moves:["Low Sweep","Mega Kick","Blaze Kick","Scary Face","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Bulk Up"},{type:a.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Hitmontop",region:g.Terarium,info:{moves:["Triple Kick","Sucker Punch","Gyro Ball","Triple Axel","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Bulk Up"},{type:a.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Kingdra",region:g.Terarium,info:{moves:["Dragon Pulse","Hydro Pump","Flash Cannon","Yawn","Rain Dance","Focus Energy"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Focus Energy"}]}},{name:"Lapras",region:g.Terarium,info:{moves:["Ice Beam","Freeze-Dry","Sparkling Aria","Body Press","Sing","Mist","Snowscape"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Sing"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Uses Mist"},{type:a.HP,threshold:30,action:"Uses Snowscape"}]}},{name:"Magmortar",region:g.Terarium,info:{moves:["Flamethrower","Psychic","Focus Blast","Clear Smog","Sunny Day","Will-O-Wisp"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Malamar",region:g.Terarium,info:{moves:["Foul Play","Psycho Cut","Night Slash","Taunt","Topsy-Turvy","Superpower"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Topsy-Turvy"},{type:a.HP,threshold:75,action:"Uses Superpower"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"}]}},{name:"Metagross",region:g.Terarium,info:{moves:["Zen Headbutt","Meteor Mash","Agility","Bullet Punch","Light Screen","Magnet Rise"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Light Screen"},{type:a.HP,threshold:50,action:"Uses Magnet Rise"},{type:a.HP,threshold:25,action:"Stats & Status Reset"},{type:a.Time,threshold:20,action:"Reduce Tera Orb Charge"}]}},{name:"Minior",region:g.Terarium,info:{moves:["Power Gem","Acrobatics","Take Down","Swift","Sandstorm","Shell Smash"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Sandstorm"},{type:a.HP,threshold:49,action:"Player Stats & Status Reset"},{type:a.HP,threshold:49,action:"Uses Shell Smash"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"}]}},{name:"Porygon-Z",formName:"porygonz",region:g.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Magnet Rise"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Magnet Rise"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:10,action:"Player Stats & Status Reset"}]}},{name:"Porygon2",region:g.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Magnet Rise"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Magnet Rise"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Stats & Status Reset"},{type:a.HP,threshold:10,action:"Stats & Status Reset"}]}},{name:"Reuniclus",region:g.Terarium,info:{moves:["Psychic","Psyshock","Gravity","Shadow Ball","Psychic Terrain","Reflect"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Psychic Terrain"},{type:a.HP,threshold:49,action:"Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Reflect"}]}},{name:"Rhyperior",region:g.Terarium,info:{moves:["Earthquake","Rock Wrecker","Brick Break","Surf","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Sandstorm"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Rock Wrecker"}]}},{name:"Skarmory",region:g.Terarium,info:{moves:["Steel Wing","Drill Peck","X-Scissor","Feint","Iron Defense","Swords Dance","Tailwind"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Iron Defense"},{type:a.HP,threshold:70,action:"Uses Swords Dance"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Tailwind"}]}}],ES=[{name:"Amoonguss",region:g.Paldea,info:{moves:["Energy Ball","Foul Play","Spore","Sludge Bomb","Grassy Terrain"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Grassy Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Grassy Terrain"}]}},{name:"Annihilape",region:g.Paldea,info:{moves:["Close Combat","Shadow Claw","Assurance","Focus Energy","Bulk Up","Rage Fist"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Bulk Up"},{type:a.Time,threshold:5,action:"Uses Rage Fist"}]}},{name:"Armarouge",region:g.Paldea,info:{moves:["Armor Cannon","Psychic","Night Shade","Will-O-Wisp","Calm Mind","Sunny Day"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Calm Mind"},{type:a.Time,threshold:65,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Avalugg",region:g.Paldea,info:{moves:["Icicle Crash","Heavy Slam","Snowscape","Ice Spinner","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Snowscape"},{type:a.Time,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Baxcalibur",region:g.Paldea,info:{moves:["Icicle Spear","Dragon Rush","Snowscape","Body Press"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Blissey",region:g.Paldea,info:{moves:["Dazzling Gleam","Hyper Voice","Sing","Light Screen","Defense Curl"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:95,action:"Uses Defense Curl"},{type:a.HP,threshold:75,action:"Uses Defense Curl"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Sing"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Bombirdier",region:g.Paldea,info:{moves:["Rock Slide","Acrobatics","Knock Off","Feather Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Feather Dance"}]}},{name:"Breloom",region:g.Paldea,info:{moves:["Bullet Seed","Low Sweep","Spore","Aerial Ace","Grassy Terrain"],specialMoves:["Spore"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Ceruledge",region:g.Paldea,info:{moves:["Bitter Blade","Shadow Claw","Psycho Cut","Will-O-Wisp","Sunny Day"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.Time,threshold:65,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Cetitan",region:g.Paldea,info:{moves:["Ice Spinner","Body Slam","Snowscape","Stomping Tantrum","Yawn"],specialMoves:["Yawn"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Uses Snowscape"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Yawn"}]}},{name:"Clawitzer",region:g.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Aura Sphere","Crabhammer","Rain Dance"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Water Pulse"}]}},{name:"Clodsire",region:g.Paldea,info:{moves:["Earthquake","Poison Jab","Megahorn","Yawn"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Earthquake"}]}},{name:"Corviknight",region:g.Paldea,info:{moves:["Iron Head","Drill Peck","Body Press","Hone Claws","Tailwind"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Hone Claws"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Tailwind"}]}},{name:"Cyclizar",region:g.Paldea,info:{moves:["Double-Edge","Dragon Claw","Dragon Pulse","Knock Off","Shift Gear"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Dachsbun",region:g.Paldea,info:{moves:["Play Rough","Double-Edge","Bite","Baby-Doll Eyes"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Play Rough"}]}},{name:"Ditto",region:g.Paldea,info:{moves:["Transform"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Dondozo",region:g.Paldea,info:{moves:["Wave Crash","Order Up","Heavy Slam","Yawn","Rain Dance","Curse"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Curse"}]}},{name:"Dragalge",region:g.Paldea,info:{moves:["Dragon Pulse","Sludge Bomb","Water Pulse","Toxic","Acid Spray","Draco Meteor"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Acid Spray"},{type:a.HP,threshold:75,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Draco Meteor"}]}},{name:"Dragapult",region:g.Paldea,info:{moves:["Shadow Ball","Dragon Pulse","Thunderbolt","Flamethrower","Reflect","Light Screen"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Light Screen"}]}},{name:"Dragonite",region:g.Paldea,info:{moves:["Dragon Rush","Extreme Speed","Dragon Dance","Aqua Tail","Light Screen"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:65,action:"Uses Light Screen"},{type:a.Time,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Dragon Dance"}]}},{name:"Espeon",region:g.Paldea,info:{moves:["Tera Blast","Psychic","Psyshock","Tickle","Psychic Terrain","Calm Mind"],specialMoves:["Tickle"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Psychic Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Psychic Terrain"}]}},{name:"Farigiraf",region:g.Paldea,info:{moves:["Twin Beam","Hyper Voice","Low Kick","Uproar","Agility"],specialMoves:["Uproar"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Agility"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Uproar"}]}},{name:"Flareon",region:g.Paldea,info:{moves:["Tera Blast","Flare Blitz","Lava Plume","Will-O-Wisp","Sunny Day","Curse"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Curse"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Frosmoth",region:g.Paldea,info:{moves:["Blizzard","Bug Buzz","Hurricane","Snowscape"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Gallade",region:g.Paldea,info:{moves:["Psycho Cut","Close Combat","Will-O-Wisp","Aerial Ace","Hypnosis","Disable","Psychic Terrain"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Psychic Terrain"}]}},{name:"Garchomp",region:g.Paldea,info:{moves:["Outrage","Earthquake","Flamethrower","Rock Slide","Swords Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Swords Dance"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Gardevoir",region:g.Paldea,info:{moves:["Moonblast","Psychic","Calm Mind","Thunder Wave","Misty Terrain","Psychic Terrain"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Psychic Terrain"}]}},{name:"Garganacl",region:g.Paldea,info:{moves:["Stone Edge","Heavy Slam","Salt Cure","Hammer Arm","Sandstorm","Rock Slide"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sandstorm"},{type:a.Time,threshold:60,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Gengar",region:g.Paldea,info:{moves:["Shadow Ball","Sludge Bomb","Dazzling Gleam","Will-O-Wisp","Hypnosis"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Hypnosis"}]}},{name:"Glaceon",region:g.Paldea,info:{moves:["Tera Blast","Ice Beam","Blizzard","Charm","Snowscape","Calm Mind"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Snowscape"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Snowscape"}]}},{name:"Glimmora",region:g.Paldea,info:{moves:["Power Gem","Sludge Wave","Hyper Beam","Rock Polish","Sandstorm"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sandstorm"},{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:55,action:"Reduce Tera Orb Charge"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"}]}},{name:"Goodra",region:g.Paldea,info:{moves:["Dragon Pulse","Surf","Sludge Bomb","Power Whip","Rain Dance"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Rain Dance"}]}},{name:"Grafaiai",region:g.Paldea,info:{moves:["Knock Off","Gunk Shot","Take Down","Flatter","Toxic"],specialMoves:["Toxic"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Toxic"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Gunk Shot"}]}},{name:"Gyarados",region:g.Paldea,info:{moves:["Aqua Tail","Crunch","Hurricane","Ice Fang","Taunt","Dragon Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Taunt"},{type:a.HP,threshold:20,action:"Uses Dragon Dance"}]}},{name:"Haxorus",region:g.Paldea,info:{moves:["Outrage","Crunch","Giga Impact","First Impression","Dragon Dance"],specialMoves:["First Impression"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Dragon Dance"}]}},{name:"Heracross",region:g.Paldea,info:{moves:["Megahorn","Close Combat","Thrash","Leer","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:75,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Hippowdon",region:g.Paldea,info:{moves:["Earthquake","Ice Fang","Yawn","Rock Slide"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Yawn"},{type:a.HP,threshold:60,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Yawn"}]}},{name:"Hydreigon",region:g.Paldea,info:{moves:["Dark Pulse","Dragon Pulse","Crunch","Taunt","Work Up","Nasty Plot"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:85,action:"Uses Taunt"},{type:a.Time,threshold:75,action:"Uses Work Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Stats & Status Reset"},{type:a.Time,threshold:20,action:"Uses Nasty Plot"}]}},{name:"Jolteon",region:g.Paldea,info:{moves:["Tera Blast","Thunderbolt","Shadow Ball","Thunder Wave","Electric Terrain","Calm Mind"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Electric Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Kilowattrel",region:g.Paldea,info:{moves:["Hurricane","Thunder","Uproar","Scary Face","Charge","Rain Dance"],specialMoves:["Charge","Rain Dance"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Charge"},{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Kingambit",region:g.Paldea,info:{moves:["Iron Head","Night Slash","Kowtow Cleave","Thunder Wave","Swords Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.Time,threshold:65,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Klawf",region:g.Paldea,info:{moves:["Stone Edge","Rock Smash","X-Scissor","Sandstorm","Knock Off","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:49,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Leafeon",region:g.Paldea,info:{moves:["Tera Blast","Leaf Blade","Double Kick","Charm","Sunny Day","Swords Dance"],specialMoves:["Double Kick"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Swords Dance"},{type:a.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Lycanroc",imageAlt:"-d",region:g.Paldea,info:{moves:["Accelerock","Rock Slide","Crunch","Taunt","Sandstorm"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Mabosstiff",region:g.Paldea,info:{moves:["Crunch","Reversal","Outrage","Take Down","Taunt"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Magnezone",region:g.Paldea,info:{moves:["Thunder","Flash Cannon","Tri Attack","Thunder Wave","Rain Dance","Iron Defense","Electric Terrain"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:80,action:"Uses Rain Dance"},{type:a.Time,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Thunder Wave"},{type:a.Time,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Maushold",imageAlt:"-f",region:g.Paldea,info:{moves:["Play Rough","Take Down","Low Kick","Charm","Tidy Up"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Uses Charm"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Tidy Up"}]}},{name:"Mimikyu",region:g.Paldea,info:{moves:["Play Rough","Shadow Claw","Shadow Sneak","Wood Hammer","Misty Terrain","Swords Dance"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Misty Terrain"},{type:a.Time,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Orthworm",region:g.Paldea,info:{moves:["Iron Head","Earthquake","Smack Down","Sandstorm","Coil"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Uses Coil"},{type:a.HP,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Sandstorm"}]}},{name:"Pawmot",region:g.Paldea,info:{moves:["Wild Charge","Close Combat","Double Shock","Nuzzle","Electric Terrain"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Electric Terrain"}]}},{name:"Pelipper",region:g.Paldea,info:{moves:["Hurricane","Hydro Pump","Mist","Supersonic","Rain Dance","Agility"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Agility"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Pincurchin",region:g.Paldea,info:{moves:["Zing Zap","Thunder","Surf","Poison Jab","Thunder Wave","Electric Terrain"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:90,action:"Uses Thunder Wave"},{type:a.Time,threshold:65,action:"Uses Electric Terrain"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Revavroom",region:g.Paldea,info:{moves:["Gunk Shot","Overheat","Iron Head","Taunt","Scary Face","Shift Gear"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Shift Gear"},{type:a.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Salamence",region:g.Paldea,info:{moves:["Outrage","Dual Wingbeat","Flamethrower","Tera Blast","Dragon Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Dragon Dance"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Scizor",region:g.Paldea,info:{moves:["X-Scissor","Bullet Punch","Close Combat","Iron Head","Iron Defense","Focus Energy"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Uses Iron Defense"},{type:a.HP,threshold:75,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Slowking",region:g.Paldea,info:{moves:["Surf","Psyshock","Trick Room","Flamethrower","Light Screen","Rain Dance","Calm Mind"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:70,action:"Uses Light Screen"},{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Trick Room"}]}},{name:"Staraptor",region:g.Paldea,info:{moves:["Close Combat","Brave Bird","Double-Edge","Feather Dance"],specialMoves:["Double-Edge","Feather Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Brave Bird"}]}},{name:"Sylveon",region:g.Paldea,info:{moves:["Tera Blast","Hyper Voice","Moonblast","Yawn","Misty Terrain","Calm Mind"],specialMoves:["Yawn"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Misty Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Misty Terrain"}]}},{name:"Talonflame",region:g.Paldea,info:{moves:["Brave Bird","Flare Blitz","Flamethrower","Tera Blast","Sunny Day","Swords Dance"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Tauros",formName:"taurospaldeacombat",imageAlt:"-p",region:g.Paldea,info:{moves:["Close Combat","Thrash","Zen Headbutt","Raging Bull","Bulk Up","Screech"],specialMoves:["Screech"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Screech"}]}},{name:"Tauros (Fire)",formName:"taurospaldeablaze",imageAlt:"-b",region:g.Paldea,info:{moves:["Flare Blitz","Close Combat","Flamethrower","Headbutt","Sunny Day","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Tauros (Water)",formName:"taurospaldeaaqua",imageAlt:"-a",region:g.Paldea,info:{moves:["Wave Crash","Close Combat","Surf","Headbutt","Rain Dance","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Tinkaton",region:g.Paldea,info:{moves:["Gigaton Hammer","Play Rough","Knock Off","Thunder Wave","Misty Terrain","Sweet Kiss"],specialMoves:["Misty Terrain"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Sweet Kiss"},{type:a.HP,threshold:15,action:"Uses Sweet Kiss"}]}},{name:"Toedscruel",region:g.Paldea,info:{moves:["Energy Ball","Earth Power","Spore","Hex","Grassy Terrain"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Grassy Terrain"},{type:a.Time,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Spore"}]}},{name:"Torkoal",region:g.Paldea,info:{moves:["Lava Plume","Yawn","Clear Smog","Body Slam","Sunny Day","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Yawn"},{type:a.HP,threshold:20,action:"Uses Iron Defense"}]}},{name:"Toxapex",region:g.Paldea,info:{moves:["Water Pulse","Liquidation","Poison Jab","Pin Missile","Chilling Water","Toxic"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:95,action:"Uses Chilling Water"},{type:a.Time,threshold:75,action:"Uses Toxic"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Chilling Water"}]}},{name:"Tyranitar",region:g.Paldea,info:{moves:["Stone Edge","Crunch","Screech","Rock Blast","Iron Defense"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Crunch"},{type:a.HP,threshold:20,action:"Uses Iron Defense"}]}},{name:"Umbreon",region:g.Paldea,info:{moves:["Tera Blast","Dark Pulse","Foul Play","Tickle","Calm Mind","Curse"],specialMoves:["Curse","Tickle"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Calm Mind"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Curse"},{type:a.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Vaporeon",region:g.Paldea,info:{moves:["Tera Blast","Surf","Hyper Voice","Yawn","Rain Dance","Calm Mind"],specialMoves:["Yawn"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Volcarona",region:g.Paldea,info:{moves:["Bug Buzz","Flamethrower","Hurricane","Tailwind","Amnesia","Sunny Day","Light Screen","Quiver Dance"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:85,action:"Uses Amnesia"},{type:a.HP,threshold:75,action:"Uses Sunny Day"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Light Screen"},{type:a.Time,threshold:20,action:"Uses Quiver Dance"}]}},{name:"Ambipom",region:g.Kitakami,info:{moves:["Double Hit","Ice Punch","Fire Punch","Thunder Punch","Screech"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:89,action:"Uses Screech"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Double Hit"}]}},{name:"Basculegion (Male)",formName:"basculegion",region:g.Kitakami,info:{moves:["Wave Crash","Aqua Jet","Crunch","Scary Face","Icy Wind","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Icy Wind"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Basculegion (Female)",formName:"basculegion",imageAlt:"-f",region:g.Kitakami,info:{moves:["Surf","Aqua Jet","Shadow Ball","Scary Face","Icy Wind","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Icy Wind"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Chandelure",region:g.Kitakami,info:{moves:["Flamethrower","Shadow Ball","Will-O-Wisp","Poltergeist","Heat Wave","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Heat Wave"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Sunny Day"},{type:a.HP,threshold:35,action:"Stats & Status Reset"}]}},{name:"Clefable",region:g.Kitakami,info:{moves:["Moonblast","Psychic","Meteor Mash","Encore","Dazzling Gleam","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Encore"},{type:a.HP,threshold:40,action:"Uses Dazzling Gleam"},{type:a.HP,threshold:41,action:"Uses Dazzling Gleam"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Conkeldurr",region:g.Kitakami,info:{moves:["Rock Slide","Close Combat","Mach Punch","Slam","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:89,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:49,action:"Uses Bulk Up"},{type:a.Time,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Crawdaunt",region:g.Kitakami,info:{moves:["Aqua Jet","Crabhammer","Crunch","Giga Impact","Leer","Swords Dance"],specialMoves:["Aqua Jet"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Uses Leer"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Dusknoir",region:g.Kitakami,info:{moves:["Poltergeist","Dark Pulse","Will-O-Wisp","Ice Punch","Gravity","Spite"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Gravity"},{type:a.HP,threshold:70,action:"Uses Spite"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Spite"},{type:a.HP,threshold:10,action:"Stats & Status Reset"}]}},{name:"Gliscor",region:g.Kitakami,info:{moves:["Acrobatics","Knock Off","Quick Attack","Earthquake","Sandstorm","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Swords Dance"},{type:a.Time,threshold:15,action:"Uses Sandstorm"},{type:a.Time,threshold:5,action:"Uses Earthquake"}]}},{name:"Golem",region:g.Kitakami,info:{moves:["Earthquake","Rock Slide","Flail","Smack Down","Stone Edge","Iron Defense"],specialMoves:["Flail"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:85,action:"Uses Stone Edge"},{type:a.Time,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:29,action:"Uses Iron Defense"}]}},{name:"Kommo-o",formName:"kommoo",region:g.Kitakami,info:{moves:["Focus Blast","Dragon Claw","Iron Head","Scary Face","Clangorous Soul","Reversal"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Clangorous Soul"},{type:a.HP,threshold:30,action:"Uses Clangorous Soul"},{type:a.Time,threshold:10,action:"Uses Reversal"}]}},{name:"Leavanny",region:g.Kitakami,info:{moves:["Leaf Blade","X-Scissor","Grassy Glide","Sticky Web","Grassy Terrain","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Grassy Terrain"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Ludicolo",region:g.Kitakami,info:{moves:["Energy Ball","Hydro Pump","Fake Out","Chilling Water","Rain Dance","Teeter Dance"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Uses Chilling Water"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.Time,threshold:20,action:"Uses Teeter Dance"}]}},{name:"Mamoswine",region:g.Kitakami,info:{moves:["Icicle Crash","Ice Shard","Bulldoze","Freeze-Dry","Snowscape","Amnesia","Earthquake"],specialMoves:["Freeze-Dry"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Amnesia"},{type:a.HP,threshold:10,action:"Uses Earthquake"},{type:a.Time,threshold:45,action:"Reduce Tera Orb Charge"}]}},{name:"Mandibuzz",region:g.Kitakami,info:{moves:["Dual Wingbeat","Dark Pulse","Toxic","Bone Rush","Snarl"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Player Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Snarl"},{type:a.HP,threshold:75,action:"Uses Snarl"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Snarl"}]}},{name:"Mienshao",region:g.Kitakami,info:{moves:["Aerial Ace","Brick Break","Aura Sphere","Reversal","Calm Mind"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:90,action:"Uses Calm Mind"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.Time,threshold:20,action:"Uses Aura Sphere"}]}},{name:"Milotic",region:g.Kitakami,info:{moves:["Dragon Pulse","Water Pulse","Safeguard","Aqua Tail","Coil","Hypnosis","Rain Dance"],specialMoves:["Hypnosis"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:99,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Coil"},{type:a.HP,threshold:70,action:"Uses Hypnosis"},{type:a.Time,threshold:60,action:"Uses Rain Dance"},{type:a.Time,threshold:10,action:"Uses Hypnosis"}]}},{name:"Morpeko",region:g.Kitakami,info:{moves:["Aura Wheel","Lash Out","Thunder Wave","Torment","Taunt","Electric Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Ninetales",region:g.Kitakami,info:{moves:["Flamethrower","Extrasensory","Will-O-Wisp","Burning Jealousy","Heat Wave","Sunny Day"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Heat Wave"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Sunny Day"},{type:a.Time,threshold:10,action:"Uses Heat Wave"}]}},{name:"Politoed",region:g.Kitakami,info:{moves:["Chilling Water","Surf","Ice Beam","Encore","Amnesia"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Uses Chilling Water"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:29,action:"Uses Amnesia"}]}},{name:"Poliwrath",region:g.Kitakami,info:{moves:["Brick Break","Liquidation","Focus Blast","Haze","Rain Dance","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Rain Dance"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Quagsire",region:g.Kitakami,info:{moves:["Earthquake","Liquidation","Yawn","Toxic","Curse","Rain Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Uses Curse"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Rain Dance"}]}},{name:"Shiftry",region:g.Kitakami,info:{moves:["Leaf Blade","Sucker Punch","Fake Out","Extrasensory","Sunny Day","Trailblaze","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sunny Day"},{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:70,action:"Uses Trailblaze"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Sinistcha",region:g.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:15,action:"Uses Matcha Gotcha"},{type:a.Time,threshold:10,action:"Uses Matcha Gotcha"}]}},{name:"Sinistcha (Masterpiece)",formName:"sinistchamasterpiece",imageAlt:"-m",region:g.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:15,action:"Uses Matcha Gotcha"},{type:a.Time,threshold:10,action:"Uses Matcha Gotcha"}]}},{name:"Snorlax",region:g.Kitakami,info:{moves:["Facade","Crunch","Yawn","Heavy Slam"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Stats & Status Reset"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Stats & Status Reset"}]}},{name:"Trevenant",region:g.Kitakami,info:{moves:["Wood Hammer","Shadow Claw","Forest's Curse","Will-O-Wisp","Grassy Terrain","Disable"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Wood Hammer"}]}},{name:"Yanmega",region:g.Kitakami,info:{moves:["Bug Buzz","Air Slash","Quick Attack","Ancient Power"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Ancient Power"},{type:a.HP,threshold:85,action:"Uses Ancient Power"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Ancient Power"}]}},{name:"Alcremie",region:g.Terarium,info:{moves:["Dazzling Gleam","Psychic","Encore","Psyshock","Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Encore"},{type:a.HP,threshold:50,action:"Uses Acid Armor"},{type:a.HP,threshold:25,action:"Uses Acid Armor"},{type:a.Time,threshold:30,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Dugtrio",formName:"dugtrioalola",imageAlt:"-a",region:g.Terarium,info:{moves:["Bulldoze","Iron Head","Ancient Power","Metal Claw","Sandstorm","Earthquake"],specialMoves:["Ancient Power"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Sandstorm"},{type:a.HP,threshold:25,action:"Uses Earthquake"}]}},{name:"Duraludon",region:g.Terarium,info:{moves:["Flash Cannon","Dragon Pulse","Breaking Swipe","Metal Claw","Stealth Rock","Light Screen","Reflect"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Stealth Rock"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Light Screen"},{type:a.HP,threshold:35,action:"Uses Reflect"}]}},{name:"Electivire",region:g.Terarium,info:{moves:["Discharge","Thunder Punch","Earthquake","Brick Break","Electric Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Electric Terrain"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Excadrill",region:g.Terarium,info:{moves:["Iron Head","Earthquake","Drill Run","Slash","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Sandstorm"},{type:a.Time,threshold:25,action:"Uses Sandstorm"}]}},{name:"Exeggutor",formName:"exeggutoralola",imageAlt:"-a",region:g.Terarium,info:{moves:["Dragon Hammer","Extrasensory","Seed Bomb","Hypnosis","Trick Room"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:80,action:"Player Stats & Status Reset"},{type:a.HP,threshold:65,action:"Uses Hypnosis"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Trick Room"},{type:a.HP,threshold:33,action:"Player Stats & Status Reset"}]}},{name:"Flygon",region:g.Terarium,info:{moves:["Earthquake","Dragon Claw","Quick Attack","Breaking Swipe","Dragon Dance","Draco Meteor"],specialMoves:["Quick Attack"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:79,action:"Uses Dragon Dance"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:5,action:"Uses Draco Meteor"}]}},{name:"Golem",formName:"golemalola",imageAlt:"-a",region:g.Terarium,info:{moves:["Heavy Slam","Body Slam","Rock Slide","Discharge","Giga Impact"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Rock Slide"},{type:a.HP,threshold:25,action:"Uses Giga Impact"}]}},{name:"Golurk",region:g.Terarium,info:{moves:["Dynamic Punch","Shadow Punch","Heavy Slam","Ice Punch","Curse"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Curse"},{type:a.HP,threshold:35,action:"Uses Curse"}]}},{name:"Kingdra",region:g.Terarium,info:{moves:["Draco Meteor","Dragon Pulse","Water Pulse","Flash Cannon","Focus Energy","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Focus Energy"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Rain Dance"},{type:a.HP,threshold:5,action:"Uses Draco Meteor"}]}},{name:"Kleavor",region:g.Terarium,info:{moves:["X-Scissor","Close Combat","Air Cutter","Night Slash","Stone Axe","Swords Dance"],specialMoves:["Night Slash"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Stone Axe"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Swords Dance"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Lapras",region:g.Terarium,info:{moves:["Blizzard","Hydro Pump","Body Slam","Sing","Snowscape","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Magmortar",region:g.Terarium,info:{moves:["Lava Plume","Psychic","Scorching Sands","Taunt","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:95,action:"Uses Sunny Day"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Lava Plume"}]}},{name:"Malamar",region:g.Terarium,info:{moves:["Psycho Cut","Night Slash","Foul Play","Pluck","Taunt","Topsy-Turvy"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Topsy-Turvy"},{type:a.HP,threshold:25,action:"Uses Topsy-Turvy"}]}},{name:"Metagross",region:g.Terarium,info:{moves:["Zen Headbutt","Iron Head","Heavy Slam","Aerial Ace","Agility","Hone Claws"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Agility"},{type:a.HP,threshold:80,action:"Uses Iron Head"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Hone Claws"},{type:a.HP,threshold:20,action:"Uses Hone Claws"}]}},{name:"Muk",formName:"mukalola",imageAlt:"-a",region:g.Terarium,info:{moves:["Crunch","Hex","Gunk Shot","Flamethrower","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Ninetales",formName:"ninetalesalola",imageAlt:"-a",region:g.Terarium,info:{moves:["Moonblast","Blizzard","Ice Shard","Dazzling Gleam","Aurora Veil","Calm Mind","Snowscape"],specialMoves:["Moonblast"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Aurora Veil"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:24,action:"Uses Snowscape"}]}},{name:"Overqwil",region:g.Terarium,info:{moves:["Barb Barrage","Crunch","Pin Missile","Fell Stinger","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Toxic"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Uses Barb Barrage"}]}},{name:"Porygon-Z",formName:"porygonz",region:g.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Thunder Wave","Trick Room"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Trick Room"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"}]}},{name:"Porygon2",region:g.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Thunder Wave","Trick Room"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Trick Room"},{type:a.HP,threshold:45,action:"Stats & Status Reset"}]}},{name:"Reuniclus",region:g.Terarium,info:{moves:["Psychic","Fire Punch","Swift","Rock Tomb","Reflect","Light Screen","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Reflect"},{type:a.HP,threshold:80,action:"Uses Light Screen"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"}]}},{name:"Rhyperior",region:g.Terarium,info:{moves:["Earthquake","Rock Wrecker","Megahorn","Rock Polish","Sandstorm","Iron Defense"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:50,action:"Uses Iron Defense"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Rock Wrecker"},{type:a.HP,threshold:5,action:"Uses Earthquake"}]}},{name:"Sandslash",formName:"sandslashalola",imageAlt:"-a",region:g.Terarium,info:{moves:["Ice Spinner","Iron Head","Earthquake","Triple Axel","Snowscape","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:80,action:"Uses Swords Dance"},{type:a.HP,threshold:35,action:"Player Stats & Status Reset"}]}},{name:"Skarmory",region:g.Terarium,info:{moves:["Drill Peck","Steel Wing","Night Slash","Slash","Taunt","Iron Defense"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:45,action:"Uses Iron Defense"},{type:a.HP,threshold:44,action:"Player Stats & Status Reset"}]}},{name:"Slowbro",formName:"slowbrogalar",imageAlt:"-g",region:g.Terarium,info:{moves:["Shell Side Arm","Zen Headbutt","Chilling Water","Rock Blast","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Slowking",formName:"slowkinggalar",imageAlt:"-g",region:g.Terarium,info:{moves:["Eerie Spell","Power Gem","Yawn","Acid Spray","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Whimsicott",region:g.Terarium,info:{moves:["Energy Ball","Moonblast","Encore","Hurricane","Taunt"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Stats & Status Reset"}]}}];function DS(t){return wl(t,[])}function wl(t,e){switch(typeof t){case"string":return JSON.stringify(t);case"function":return t.name?`[function ${t.name}]`:"[function]";case"object":return V0(t,e);default:return String(t)}}function V0(t,e){if(t===null)return"null";if(e.includes(t))return"[Circular]";let n=[...e,t];if(U0(t)){let r=t.toJSON();if(r!==t)return typeof r=="string"?r:wl(r,n)}else if(Array.isArray(t))return B0(t,n);return j0(t,n)}function U0(t){return typeof t.toJSON=="function"}function j0(t,e){let n=Object.entries(t);return n.length===0?"{}":e.length>2?"["+$0(t)+"]":"{ "+n.map(([o,i])=>o+": "+wl(i,e)).join(", ")+" }"}function B0(t,e){if(t.length===0)return"[]";if(e.length>2)return"[Array]";let n=Math.min(10,t.length),r=t.length-n,o=[];for(let i=0;i<n;++i)o.push(wl(t[i],e));return r===1?o.push("... 1 more item"):r>1&&o.push(`... ${r} more items`),"["+o.join(", ")+"]"}function $0(t){let e=Object.prototype.toString.call(t).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof t.constructor=="function"){let n=t.constructor.name;if(typeof n=="string"&&n!=="")return n}return e}function G0(t,e){return t?.__kind===e}var TS=G0;function wS(t){return typeof t=="object"&&t!==null}function CS(t,e){if(!t)throw new Error(e??"Unexpected invariant triggered.")}var W0=/\r\n|[\n\r]/g;function fi(t,e){let n=0,r=1;for(let o of t.body.matchAll(W0)){if(typeof o.index!="number"&&CS(!1),o.index>=e)break;n=o.index+o[0].length,r+=1}return{line:r,column:e+1-n}}function lh(t){return Cl(t.source,fi(t.source,t.start))}function Cl(t,e){let n=t.locationOffset.column-1,r="".padStart(n)+t.body,o=e.line-1,i=t.locationOffset.line-1,s=e.line+i,c=e.line===1?n:0,l=e.column+c,u=`${t.name}:${s}:${l}
`,d=r.split(/\r\n|[\n\r]/g),f=d[o];if(f.length>120){let p=Math.floor(l/80),h=l%80,m=[];for(let v=0;v<f.length;v+=80)m.push(f.slice(v,v+80));return u+IS([[`${s} |`,m[0]],...m.slice(1,p+1).map(v=>["|",v]),["|","^".padStart(h)],["|",m[p+1]]])}return u+IS([[`${s-1} |`,d[o-1]],[`${s} |`,f],["|","^".padStart(l)],[`${s+1} |`,d[o+1]]])}function IS(t){let e=t.filter(([r,o])=>o!==void 0),n=Math.max(...e.map(([r])=>r.length));return e.map(([r,o])=>r.padStart(n)+(o?" "+o:"")).join(`
`)}var Il=class t extends Error{constructor(e,n={}){let{nodes:r,source:o,positions:i,path:s,originalError:c,cause:l,extensions:u}=n,d="cause"in n,f=d?l:c,p=d||c!=null?{cause:f}:void 0;super(e,p),this.name="GraphQLError",this.path=s??void 0;let h=c??(l instanceof Error?l:void 0);this.originalError=h,this.nodes=_S(Array.isArray(r)?r:r?[r]:void 0);let m=_S(this.nodes?.map(y=>y.loc).filter(y=>y!=null));this.source=o??m?.[0]?.source,this.positions=i??m?.map(y=>y.start),this.locations=i&&o?i.map(y=>fi(o,y)):m?.map(y=>fi(y.source,y.start));let v=wS(h?.extensions)?h.extensions:void 0;this.extensions=u??v??Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),c?.stack!=null?Object.defineProperty(this,"stack",{value:c.stack,writable:!0,configurable:!0}):Error.captureStackTrace!=null?Error.captureStackTrace(this,t):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(let n of this.nodes)n.loc&&(e+=`

`+lh(n.loc));else if(this.source&&this.locations)for(let n of this.locations)e+=`

`+Cl(this.source,n);return e}toJSON(){let e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}};function _S(t){return t===void 0||t.length===0?void 0:t}var hi=class{constructor(e,n,r){this.start=e.start,this.end=n.end,this.startToken=e,this.endToken=n,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}},uo=class{constructor(e,n,r,o,i,s){this.kind=e,this.start=n,this.end=r,this.line=o,this.column=i,this.value=s,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}},uh={Name:[],Document:["definitions"],OperationDefinition:["description","name","variableDefinitions","directives","selectionSet"],VariableDefinition:["description","variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentArgument:["name","value"],FragmentSpread:["name","arguments","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["description","name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","directives","locations"],SchemaExtension:["directives","operationTypes"],DirectiveExtension:["name","directives"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],TypeCoordinate:["name"],MemberCoordinate:["name","memberName"],ArgumentCoordinate:["name","fieldName","argumentName"],DirectiveCoordinate:["name"],DirectiveArgumentCoordinate:["name","argumentName"]},z0=new Set(Object.keys(uh));function dh(t){let e=t?.kind;return typeof e=="string"&&z0.has(e)}var vt={QUERY:"query",MUTATION:"mutation",SUBSCRIPTION:"subscription"};var T={};gD(T,{ARGUMENT:()=>X0,ARGUMENT_COORDINATE:()=>UM,BOOLEAN:()=>cM,DIRECTIVE:()=>pM,DIRECTIVE_ARGUMENT_COORDINATE:()=>BM,DIRECTIVE_COORDINATE:()=>jM,DIRECTIVE_DEFINITION:()=>PM,DIRECTIVE_EXTENSION:()=>NM,DOCUMENT:()=>Q0,ENUM:()=>uM,ENUM_TYPE_DEFINITION:()=>IM,ENUM_TYPE_EXTENSION:()=>FM,ENUM_VALUE_DEFINITION:()=>_M,FIELD:()=>J0,FIELD_DEFINITION:()=>DM,FLOAT:()=>sM,FRAGMENT_ARGUMENT:()=>eM,FRAGMENT_DEFINITION:()=>rM,FRAGMENT_SPREAD:()=>tM,INLINE_FRAGMENT:()=>nM,INPUT_OBJECT_TYPE_DEFINITION:()=>MM,INPUT_OBJECT_TYPE_EXTENSION:()=>LM,INPUT_VALUE_DEFINITION:()=>TM,INT:()=>iM,INTERFACE_TYPE_DEFINITION:()=>wM,INTERFACE_TYPE_EXTENSION:()=>AM,LIST:()=>dM,LIST_TYPE:()=>gM,MEMBER_COORDINATE:()=>VM,NAME:()=>q0,NAMED_TYPE:()=>mM,NON_NULL_TYPE:()=>yM,NULL:()=>lM,OBJECT:()=>fM,OBJECT_FIELD:()=>hM,OBJECT_TYPE_DEFINITION:()=>EM,OBJECT_TYPE_EXTENSION:()=>kM,OPERATION_DEFINITION:()=>K0,OPERATION_TYPE_DEFINITION:()=>SM,SCALAR_TYPE_DEFINITION:()=>bM,SCALAR_TYPE_EXTENSION:()=>RM,SCHEMA_DEFINITION:()=>vM,SCHEMA_EXTENSION:()=>xM,SELECTION_SET:()=>Z0,STRING:()=>aM,TYPE_COORDINATE:()=>HM,UNION_TYPE_DEFINITION:()=>CM,UNION_TYPE_EXTENSION:()=>OM,VARIABLE:()=>oM,VARIABLE_DEFINITION:()=>Y0});var q0="Name",Q0="Document",K0="OperationDefinition",Y0="VariableDefinition",Z0="SelectionSet",J0="Field",X0="Argument",eM="FragmentArgument",tM="FragmentSpread",nM="InlineFragment",rM="FragmentDefinition",oM="Variable",iM="IntValue",sM="FloatValue",aM="StringValue",cM="BooleanValue",lM="NullValue",uM="EnumValue",dM="ListValue",fM="ObjectValue",hM="ObjectField",pM="Directive",mM="NamedType",gM="ListType",yM="NonNullType",vM="SchemaDefinition",SM="OperationTypeDefinition",bM="ScalarTypeDefinition",EM="ObjectTypeDefinition",DM="FieldDefinition",TM="InputValueDefinition",wM="InterfaceTypeDefinition",CM="UnionTypeDefinition",IM="EnumTypeDefinition",_M="EnumValueDefinition",MM="InputObjectTypeDefinition",PM="DirectiveDefinition",xM="SchemaExtension",NM="DirectiveExtension",RM="ScalarTypeExtension",kM="ObjectTypeExtension",AM="InterfaceTypeExtension",OM="UnionTypeExtension",FM="EnumTypeExtension",LM="InputObjectTypeExtension",HM="TypeCoordinate",VM="MemberCoordinate",UM="ArgumentCoordinate",jM="DirectiveCoordinate",BM="DirectiveArgumentCoordinate";function js(t,e){if(!t)throw new Error(e)}function _l(t){return t===9||t===32}function fo(t){return t>=48&&t<=57}function MS(t){return t>=97&&t<=122||t>=65&&t<=90}function fh(t){return MS(t)||t===95}function PS(t){return MS(t)||fo(t)||t===95}function xS(t){let e=Number.MAX_SAFE_INTEGER,n=null,r=-1;for(let o=0;o<t.length;++o){let i=t[o],s=$M(i);s!==i.length&&(n??=o,r=o,o!==0&&s<e&&(e=s))}return t.map((o,i)=>i===0?o:o.slice(e)).slice(n??0,r+1)}function $M(t){let e=0;for(;e<t.length&&_l(t.charCodeAt(e));)++e;return e}function NS(t,e){let n=t.replaceAll('"""','\\"""'),r=n.split(/\r\n|[\n\r]/g),o=r.length===1,i=r.length>1&&r.slice(1).every(h=>h.length===0||_l(h.charCodeAt(0))),s=n.endsWith('\\"""'),c=t.endsWith('"')&&!s,l=t.endsWith("\\"),u=c||l,d=!e?.minimize&&(!o||t.length>70||u||i||s),f="",p=o&&_l(t.charCodeAt(0));return(d&&!p||i)&&(f+=`
`),f+=n,(d||u)&&(f+=`
`),'"""'+f+'"""'}function RS(t){return`"${t.replace(GM,WM)}"`}var GM=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function WM(t){return zM[t.charCodeAt(0)]}var zM=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"];var jn=Object.freeze({});function Ae(t,e,n=uh){let r=new Map;for(let m of Object.values(T))r.set(m,hh(e,m));let o,i=Array.isArray(t),s=[t],c=-1,l=[],u=t,d,f,p=[],h=[];do{c++;let m=c===s.length,v=m&&l.length!==0;if(m){if(d=h.length===0?void 0:p[p.length-1],u=f,f=h.pop(),v)if(i){u=u.slice();let b=0;for(let[D,P]of l){let _=D-b;P===null?(u.splice(_,1),b++):u[_]=P}}else{u=S({},u);for(let[b,D]of l)u[b]=D}c=o.index,s=o.keys,l=o.edits,i=o.inArray,o=o.prev}else if(f!=null){if(d=i?c:s[c],u=f[d],u==null)continue;p.push(d)}let y;if(!Array.isArray(u)){if(dh(u)||js(!1,`Invalid AST Node: ${DS(u)}.`),y=(m?r.get(u.kind)?.leave:r.get(u.kind)?.enter)?.call(e,u,d,f,p,h),y===jn)break;if(y===!1){if(!m){p.pop();continue}}else if(y!==void 0&&(l.push([d,y]),!m))if(dh(y))u=y;else{p.pop();continue}}y===void 0&&v&&l.push([d,u]),m?p.pop():(o={inArray:i,index:c,keys:s,edits:l,prev:o},i=Array.isArray(u),s=i?u:n[u.kind]??[],c=-1,l=[],f!=null&&h.push(f),f=u)}while(o!==void 0);return l.length!==0?l.at(-1)[1]:t}function hh(t,e){let n=t[e];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:t.enter,leave:t.leave}}function pi(t){return Ae(t,qM)}var mh=80,qM={Name:{leave:t=>t.value},Variable:{leave:t=>"$"+t.name},Document:{leave:t=>R(t.definitions,`

`)},OperationDefinition:{leave(t){let e=ph(t.variableDefinitions)?W(`(
`,R(t.variableDefinitions,`
`),`
)`):W("(",R(t.variableDefinitions,", "),")"),n=W("",t.description,`
`)+R([t.operation,R([t.name,e]),R(t.directives," ")]," ");return(n==="query"?"":n+" ")+t.selectionSet}},VariableDefinition:{leave:({variable:t,type:e,defaultValue:n,directives:r,description:o})=>W("",o,`
`)+t+": "+e+W(" = ",n)+W(" ",R(r," "))},SelectionSet:{leave:({selections:t})=>Ft(t)},Field:{leave({alias:t,name:e,arguments:n,directives:r,selectionSet:o}){let i=R([W("",t,": "),e],"");return R([kS(i,n),W(" ",R(r," ")),W(" ",o)])}},Argument:{leave:({name:t,value:e})=>t+": "+e},FragmentArgument:{leave:({name:t,value:e})=>t+": "+e},FragmentSpread:{leave:({name:t,arguments:e,directives:n})=>{let r="..."+t;return kS(r,e)+W(" ",R(n," "))}},InlineFragment:{leave:({typeCondition:t,directives:e,selectionSet:n})=>R(["...",W("on ",t),R(e," "),n]," ")},FragmentDefinition:{leave:({name:t,typeCondition:e,variableDefinitions:n,directives:r,selectionSet:o,description:i})=>W("",i,`
`)+`fragment ${t}${W("(",R(n,", "),")")} on ${e} ${W("",R(r," ")," ")}`+o},IntValue:{leave:({value:t})=>t},FloatValue:{leave:({value:t})=>t},StringValue:{leave:({value:t,block:e})=>e===!0?NS(t):RS(t)},BooleanValue:{leave:({value:t})=>t?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:t})=>t},ListValue:{leave:({values:t})=>{let e="["+R(t,", ")+"]";return e.length>mh?`[
`+Bs(R(t,`
`))+`
]`:e}},ObjectValue:{leave:({fields:t})=>{let e="{ "+R(t,", ")+" }";return e.length>mh?Ft(t):e}},ObjectField:{leave:({name:t,value:e})=>t+": "+e},Directive:{leave:({name:t,arguments:e})=>"@"+t+W("(",R(e,", "),")")},NamedType:{leave:({name:t})=>t},ListType:{leave:({type:t})=>"["+t+"]"},NonNullType:{leave:({type:t})=>t+"!"},SchemaDefinition:{leave:({description:t,directives:e,operationTypes:n})=>W("",t,`
`)+R(["schema",R(e," "),Ft(n)]," ")},OperationTypeDefinition:{leave:({operation:t,type:e})=>t+": "+e},ScalarTypeDefinition:{leave:({description:t,name:e,directives:n})=>W("",t,`
`)+R(["scalar",e,R(n," ")]," ")},ObjectTypeDefinition:{leave:({description:t,name:e,interfaces:n,directives:r,fields:o})=>W("",t,`
`)+R(["type",e,W("implements ",R(n," & ")),R(r," "),Ft(o)]," ")},FieldDefinition:{leave:({description:t,name:e,arguments:n,type:r,directives:o})=>W("",t,`
`)+e+(ph(n)?W(`(
`,Bs(R(n,`
`)),`
)`):W("(",R(n,", "),")"))+": "+r+W(" ",R(o," "))},InputValueDefinition:{leave:({description:t,name:e,type:n,defaultValue:r,directives:o})=>W("",t,`
`)+R([e+": "+n,W("= ",r),R(o," ")]," ")},InterfaceTypeDefinition:{leave:({description:t,name:e,interfaces:n,directives:r,fields:o})=>W("",t,`
`)+R(["interface",e,W("implements ",R(n," & ")),R(r," "),Ft(o)]," ")},UnionTypeDefinition:{leave:({description:t,name:e,directives:n,types:r})=>W("",t,`
`)+R(["union",e,R(n," "),W("= ",R(r," | "))]," ")},EnumTypeDefinition:{leave:({description:t,name:e,directives:n,values:r})=>W("",t,`
`)+R(["enum",e,R(n," "),Ft(r)]," ")},EnumValueDefinition:{leave:({description:t,name:e,directives:n})=>W("",t,`
`)+R([e,R(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:t,name:e,directives:n,fields:r})=>W("",t,`
`)+R(["input",e,R(n," "),Ft(r)]," ")},DirectiveDefinition:{leave:({description:t,name:e,arguments:n,directives:r,repeatable:o,locations:i})=>W("",t,`
`)+"directive @"+e+(ph(n)?W(`(
`,Bs(R(n,`
`)),`
)`):W("(",R(n,", "),")"))+W(" ",R(r," "))+(o?" repeatable":"")+" on "+R(i," | ")},SchemaExtension:{leave:({directives:t,operationTypes:e})=>R(["extend schema",R(t," "),Ft(e)]," ")},ScalarTypeExtension:{leave:({name:t,directives:e})=>R(["extend scalar",t,R(e," ")]," ")},ObjectTypeExtension:{leave:({name:t,interfaces:e,directives:n,fields:r})=>R(["extend type",t,W("implements ",R(e," & ")),R(n," "),Ft(r)]," ")},InterfaceTypeExtension:{leave:({name:t,interfaces:e,directives:n,fields:r})=>R(["extend interface",t,W("implements ",R(e," & ")),R(n," "),Ft(r)]," ")},UnionTypeExtension:{leave:({name:t,directives:e,types:n})=>R(["extend union",t,R(e," "),W("= ",R(n," | "))]," ")},EnumTypeExtension:{leave:({name:t,directives:e,values:n})=>R(["extend enum",t,R(e," "),Ft(n)]," ")},InputObjectTypeExtension:{leave:({name:t,directives:e,fields:n})=>R(["extend input",t,R(e," "),Ft(n)]," ")},DirectiveExtension:{leave:({name:t,directives:e})=>R(["extend directive @"+t,R(e," ")]," ")},TypeCoordinate:{leave:({name:t})=>t},MemberCoordinate:{leave:({name:t,memberName:e})=>R([t,W(".",e)])},ArgumentCoordinate:{leave:({name:t,fieldName:e,argumentName:n})=>R([t,W(".",e),W("(",n,":)")])},DirectiveCoordinate:{leave:({name:t})=>R(["@",t])},DirectiveArgumentCoordinate:{leave:({name:t,argumentName:e})=>R(["@",t,W("(",e,":)")])}};function R(t,e=""){return t?.filter(n=>n!==void 0&&n!=="").join(e)??""}function Ft(t){return W(`{
`,Bs(R(t,`
`)),`
}`)}function W(t,e,n=""){return e!=null&&e!==""?t+e+n:""}function Bs(t){return W("  ",t.replaceAll(`
`,`
  `))}function ph(t){return t?.some(e=>e.includes(`
`))??!1}function kS(t,e){let n=t+W("(",R(e,", "),")");return n.length>mh&&(n=t+W(`(
`,Bs(R(e,`
`)),`
)`)),n}var gh={QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",FRAGMENT_VARIABLE_DEFINITION:"FRAGMENT_VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION",DIRECTIVE_DEFINITION:"DIRECTIVE_DEFINITION"};function Ee(t,e,n){return new Il(`Syntax Error: ${n}`,{source:t,positions:[e]})}function QM(){let t;try{let e=globalThis.process;typeof e?.getBuiltinModule=="function"&&(t=e.getBuiltinModule("node:diagnostics_channel"))}catch{}return t}var ho=QM(),yh=ho?.tracingChannel("graphql:parse"),J4=ho?.tracingChannel("graphql:validate"),X4=ho?.tracingChannel("graphql:execute"),eW=ho?.tracingChannel("graphql:execute:variableCoercion"),tW=ho?.tracingChannel("graphql:execute:rootSelectionSet"),nW=ho?.tracingChannel("graphql:subscribe"),rW=ho?.tracingChannel("graphql:resolve"),KM=["start","end","asyncStart","asyncEnd","error"];function AS(t){if(t==null)return!1;let e=t.hasSubscribers;if(e!==void 0)return e;for(let n of KM)if(t[n].hasSubscribers)return!0;return!1}var E={SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",DOT:".",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"};var Gs=class{constructor(e){let n=new uo(E.SOF,0,0,0,0);this.source=e,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==E.EOF)do if(e.next)e=e.next;else{let n=YM(this,e.end);e.next=n,n.prev=e,e=n}while(e.kind===E.COMMENT);return e}};function FS(t){return t===E.BANG||t===E.DOLLAR||t===E.AMP||t===E.PAREN_L||t===E.PAREN_R||t===E.DOT||t===E.SPREAD||t===E.COLON||t===E.EQUALS||t===E.AT||t===E.BRACKET_L||t===E.BRACKET_R||t===E.BRACE_L||t===E.PIPE||t===E.BRACE_R}function mi(t){return t>=0&&t<=55295||t>=57344&&t<=1114111}function Pl(t,e){return LS(t.charCodeAt(e))&&HS(t.charCodeAt(e+1))}function LS(t){return t>=55296&&t<=56319}function HS(t){return t>=56320&&t<=57343}function po(t,e){let n=t.source.body.codePointAt(e);if(n===void 0)return E.EOF;if(n>=32&&n<=126){let r=String.fromCodePoint(n);return r==='"'?`'"'`:`"${r}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function Oe(t,e,n,r,o){let i=t.line,s=1+n-t.lineStart;return new uo(e,n,r,i,s,o)}function YM(t,e){let n=t.source.body,r=n.length,o=e;for(;o<r;){let i=n.charCodeAt(o);switch(i){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++t.line,t.lineStart=o;continue;case 13:n.charCodeAt(o+1)===10?o+=2:++o,++t.line,t.lineStart=o;continue;case 35:return ZM(t,o);case 33:return Oe(t,E.BANG,o,o+1);case 36:return Oe(t,E.DOLLAR,o,o+1);case 38:return Oe(t,E.AMP,o,o+1);case 40:return Oe(t,E.PAREN_L,o,o+1);case 41:return Oe(t,E.PAREN_R,o,o+1);case 46:{let s=n.charCodeAt(o+1);if(s===46&&n.charCodeAt(o+2)===46)return Oe(t,E.SPREAD,o,o+3);if(s===46)throw Ee(t.source,o,'Unexpected "..", did you mean "..."?');if(fo(s)){let c=t.source.body.slice(o+1,Ml(t,o+1,s));throw Ee(t.source,o,`Invalid number, expected digit before ".", did you mean "0.${c}"?`)}break}case 58:return Oe(t,E.COLON,o,o+1);case 61:return Oe(t,E.EQUALS,o,o+1);case 64:return Oe(t,E.AT,o,o+1);case 91:return Oe(t,E.BRACKET_L,o,o+1);case 93:return Oe(t,E.BRACKET_R,o,o+1);case 123:return Oe(t,E.BRACE_L,o,o+1);case 124:return Oe(t,E.PIPE,o,o+1);case 125:return Oe(t,E.BRACE_R,o,o+1);case 34:return n.charCodeAt(o+1)===34&&n.charCodeAt(o+2)===34?rP(t,o):XM(t,o)}if(fo(i)||i===45)return JM(t,o,i);if(fh(i))return oP(t,o);throw Ee(t.source,o,i===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:mi(i)||Pl(n,o)?`Unexpected character: ${po(t,o)}.`:`Invalid character: ${po(t,o)}.`)}return Oe(t,E.EOF,r,r)}function ZM(t,e){let n=t.source.body,r=n.length,o=e+1;for(;o<r;){let i=n.charCodeAt(o);if(i===10||i===13)break;if(mi(i))++o;else if(Pl(n,o))o+=2;else break}return Oe(t,E.COMMENT,e,o,n.slice(e+1,o))}function JM(t,e,n){let r=t.source.body,o=e,i=n,s=!1;if(i===45&&(i=r.charCodeAt(++o)),i===48){if(i=r.charCodeAt(++o),fo(i))throw Ee(t.source,o,`Invalid number, unexpected digit after 0: ${po(t,o)}.`)}else o=Ml(t,o,i),i=r.charCodeAt(o);if(i===46&&(s=!0,i=r.charCodeAt(++o),o=Ml(t,o,i),i=r.charCodeAt(o)),(i===69||i===101)&&(s=!0,i=r.charCodeAt(++o),(i===43||i===45)&&(i=r.charCodeAt(++o)),o=Ml(t,o,i),i=r.charCodeAt(o)),i===46||fh(i))throw Ee(t.source,o,`Invalid number, expected digit but got: ${po(t,o)}.`);return Oe(t,s?E.FLOAT:E.INT,e,o,r.slice(e,o))}function Ml(t,e,n){if(!fo(n))throw Ee(t.source,e,`Invalid number, expected digit but got: ${po(t,e)}.`);let r=t.source.body,o=e+1;for(;fo(r.charCodeAt(o));)++o;return o}function XM(t,e){let n=t.source.body,r=n.length,o=e+1,i=o,s="";for(;o<r;){let c=n.charCodeAt(o);if(c===34)return s+=n.slice(i,o),Oe(t,E.STRING,e,o+1,s);if(c===92){s+=n.slice(i,o);let l=n.charCodeAt(o+1)===117?n.charCodeAt(o+2)===123?eP(t,o):tP(t,o):nP(t,o);s+=l.value,o+=l.size,i=o;continue}if(c===10||c===13)break;if(mi(c))++o;else if(Pl(n,o))o+=2;else throw Ee(t.source,o,`Invalid character within String: ${po(t,o)}.`)}throw Ee(t.source,o,"Unterminated string.")}function eP(t,e){let n=t.source.body,r=0,o=3;for(;o<12;){let i=n.charCodeAt(e+o++);if(i===125){if(o<5||!mi(r))break;return{value:String.fromCodePoint(r),size:o}}if(r=r<<4|$s(i),r<0)break}throw Ee(t.source,e,`Invalid Unicode escape sequence: "${n.slice(e,e+o)}".`)}function tP(t,e){let n=t.source.body,r=OS(n,e+2);if(mi(r))return{value:String.fromCodePoint(r),size:6};if(LS(r)&&n.charCodeAt(e+6)===92&&n.charCodeAt(e+7)===117){let o=OS(n,e+8);if(HS(o))return{value:String.fromCodePoint(r,o),size:12}}throw Ee(t.source,e,`Invalid Unicode escape sequence: "${n.slice(e,e+6)}".`)}function OS(t,e){return $s(t.charCodeAt(e))<<12|$s(t.charCodeAt(e+1))<<8|$s(t.charCodeAt(e+2))<<4|$s(t.charCodeAt(e+3))}function $s(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:-1}function nP(t,e){let n=t.source.body;switch(n.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Ee(t.source,e,`Invalid character escape sequence: "${n.slice(e,e+2)}".`)}function rP(t,e){let n=t.source.body,r=n.length,o=t.lineStart,i=e+3,s=i,c="",l=[];for(;i<r;){let u=n.charCodeAt(i);if(u===34&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34){c+=n.slice(s,i),l.push(c);let d=Oe(t,E.BLOCK_STRING,e,i+3,xS(l).join(`
`));return t.line+=l.length-1,t.lineStart=o,d}if(u===92&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34&&n.charCodeAt(i+3)===34){c+=n.slice(s,i),s=i+1,i+=4;continue}if(u===10||u===13){c+=n.slice(s,i),l.push(c),u===13&&n.charCodeAt(i+1)===10?i+=2:++i,c="",s=i,o=i;continue}if(mi(u))++i;else if(Pl(n,i))i+=2;else throw Ee(t.source,i,`Invalid character within String: ${po(t,i)}.`)}throw Ee(t.source,i,"Unterminated string.")}function oP(t,e){let n=t.source.body,r=n.length,o=e+1;for(;o<r;){let i=n.charCodeAt(o);if(PS(i))++o;else break}return Oe(t,E.NAME,e,o,n.slice(e,o))}var VS=Symbol("Source"),gi=class{constructor(e,n="GraphQL request",r={line:1,column:1}){this.__kind=VS,this.body=e,this.name=n,this.locationOffset=r,this.locationOffset.line>0||js(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||js(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}};function US(t){return TS(t,VS,gi)}function Nl(t,e){return AS(yh)?yh.traceSync(()=>jS(t,e),{source:t}):jS(t,e)}function jS(t,e){let n=new vh(t,e),r=n.parseDocument();return Object.defineProperty(r,"tokenCount",{enumerable:!1,value:n.tokenCount}),r}var vh=class{constructor(e,n={}){let i=n,{lexer:r}=i,o=ge(i,["lexer"]);if(r)this._lexer=r;else{let s=US(e)?e:new gi(e);this._lexer=new Gs(s)}this._options=o,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){let e=this.expectToken(E.NAME);return this.node(e,{kind:T.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:T.DOCUMENT,definitions:this.many(E.SOF,this.parseDefinition,E.EOF)})}parseDefinition(){if(this.peek(E.BRACE_L))return this.parseOperationDefinition();let e=this.peekDescription(),n=e?this._lexer.lookahead():this._lexer.token;if(e&&n.kind===E.BRACE_L)throw Ee(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are not supported on shorthand queries.");if(n.kind===E.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition()}if(e)throw Ee(this._lexer.source,this._lexer.token.start,"Unexpected description, only GraphQL definitions support descriptions.");if(n.value==="extend")return this.parseTypeSystemExtension()}throw this.unexpected(n)}parseOperationDefinition(){let e=this._lexer.token;if(this.peek(E.BRACE_L))return this.node(e,{kind:T.OPERATION_DEFINITION,operation:vt.QUERY,description:void 0,name:void 0,variableDefinitions:void 0,directives:void 0,selectionSet:this.parseSelectionSet()});let n=this.parseDescription(),r=this.parseOperationType(),o;return this.peek(E.NAME)&&(o=this.parseName()),this.node(e,{kind:T.OPERATION_DEFINITION,operation:r,description:n,name:o,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){let e=this.expectToken(E.NAME);switch(e.value){case"query":return vt.QUERY;case"mutation":return vt.MUTATION;case"subscription":return vt.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(E.PAREN_L,this.parseVariableDefinition,E.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:T.VARIABLE_DEFINITION,description:this.parseDescription(),variable:this.parseVariable(),type:(this.expectToken(E.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(E.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){let e=this._lexer.token;return this.expectToken(E.DOLLAR),this.node(e,{kind:T.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:T.SELECTION_SET,selections:this.many(E.BRACE_L,this.parseSelection,E.BRACE_R)})}parseSelection(){return this.peek(E.SPREAD)?this.parseFragment():this.parseField()}parseField(){let e=this._lexer.token,n=this.parseName(),r,o;return this.expectOptionalToken(E.COLON)?(r=n,o=this.parseName()):o=n,this.node(e,{kind:T.FIELD,alias:r,name:o,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(E.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){let n=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(E.PAREN_L,n,E.PAREN_R)}parseFragmentArguments(){let e=this.parseFragmentArgument;return this.optionalMany(E.PAREN_L,e,E.PAREN_R)}parseArgument(e=!1){let n=this._lexer.token,r=this.parseName();return this.expectToken(E.COLON),this.node(n,{kind:T.ARGUMENT,name:r,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragmentArgument(){let e=this._lexer.token,n=this.parseName();return this.expectToken(E.COLON),this.node(e,{kind:T.FRAGMENT_ARGUMENT,name:n,value:this.parseValueLiteral(!1)})}parseFragment(){let e=this._lexer.token;this.expectToken(E.SPREAD);let n=this.expectOptionalKeyword("on");if(!n&&this.peek(E.NAME)){let r=this.parseFragmentName();return this.peek(E.PAREN_L)&&this._options.experimentalFragmentArguments?this.node(e,{kind:T.FRAGMENT_SPREAD,name:r,arguments:this.parseFragmentArguments(),directives:this.parseDirectives(!1)}):this.node(e,{kind:T.FRAGMENT_SPREAD,name:r,directives:this.parseDirectives(!1)})}return this.node(e,{kind:T.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){let e=this._lexer.token,n=this.parseDescription();return this.expectKeyword("fragment"),this._options.experimentalFragmentArguments===!0?this.node(e,{kind:T.FRAGMENT_DEFINITION,description:n,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:T.FRAGMENT_DEFINITION,description:n,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){let n=this._lexer.token;switch(n.kind){case E.BRACKET_L:return this.parseList(e);case E.BRACE_L:return this.parseObject(e);case E.INT:return this.advanceLexer(),this.node(n,{kind:T.INT,value:n.value});case E.FLOAT:return this.advanceLexer(),this.node(n,{kind:T.FLOAT,value:n.value});case E.STRING:case E.BLOCK_STRING:return this.parseStringLiteral();case E.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:T.BOOLEAN,value:!0});case"false":return this.node(n,{kind:T.BOOLEAN,value:!1});case"null":return this.node(n,{kind:T.NULL});default:return this.node(n,{kind:T.ENUM,value:n.value})}case E.DOLLAR:if(e)if(this.expectToken(E.DOLLAR),this._lexer.token.kind===E.NAME){let r=this._lexer.token.value;throw Ee(this._lexer.source,n.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){let e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:T.STRING,value:e.value,block:e.kind===E.BLOCK_STRING})}parseList(e){let n=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:T.LIST,values:this.any(E.BRACKET_L,n,E.BRACKET_R)})}parseObject(e){let n=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:T.OBJECT,fields:this.any(E.BRACE_L,n,E.BRACE_R)})}parseObjectField(e){let n=this._lexer.token,r=this.parseName();return this.expectToken(E.COLON),this.node(n,{kind:T.OBJECT_FIELD,name:r,value:this.parseValueLiteral(e)})}parseDirectives(e){let n=[];for(;this.peek(E.AT);)n.push(this.parseDirective(e));if(n.length)return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){let n=this._lexer.token;return this.expectToken(E.AT),this.node(n,{kind:T.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){let e=this._lexer.token,n;if(this.expectOptionalToken(E.BRACKET_L)){let r=this.parseTypeReference();this.expectToken(E.BRACKET_R),n=this.node(e,{kind:T.LIST_TYPE,type:r})}else n=this.parseNamedType();return this.expectOptionalToken(E.BANG)?this.node(e,{kind:T.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:T.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(E.STRING)||this.peek(E.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){let e=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");let r=this.parseConstDirectives(),o=this.many(E.BRACE_L,this.parseOperationTypeDefinition,E.BRACE_R);return this.node(e,{kind:T.SCHEMA_DEFINITION,description:n,directives:r,operationTypes:o})}parseOperationTypeDefinition(){let e=this._lexer.token,n=this.parseOperationType();this.expectToken(E.COLON);let r=this.parseNamedType();return this.node(e,{kind:T.OPERATION_TYPE_DEFINITION,operation:n,type:r})}parseScalarTypeDefinition(){let e=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");let r=this.parseName(),o=this.parseConstDirectives();return this.node(e,{kind:T.SCALAR_TYPE_DEFINITION,description:n,name:r,directives:o})}parseObjectTypeDefinition(){let e=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");let r=this.parseName(),o=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:T.OBJECT_TYPE_DEFINITION,description:n,name:r,interfaces:o,directives:i,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(E.AMP,this.parseNamedType):void 0}parseFieldsDefinition(){return this.optionalMany(E.BRACE_L,this.parseFieldDefinition,E.BRACE_R)}parseFieldDefinition(){let e=this._lexer.token,n=this.parseDescription(),r=this.parseName(),o=this.parseArgumentDefs();this.expectToken(E.COLON);let i=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(e,{kind:T.FIELD_DEFINITION,description:n,name:r,arguments:o,type:i,directives:s})}parseArgumentDefs(){return this.optionalMany(E.PAREN_L,this.parseInputValueDef,E.PAREN_R)}parseInputValueDef(){let e=this._lexer.token,n=this.parseDescription(),r=this.parseName();this.expectToken(E.COLON);let o=this.parseTypeReference(),i;this.expectOptionalToken(E.EQUALS)&&(i=this.parseConstValueLiteral());let s=this.parseConstDirectives();return this.node(e,{kind:T.INPUT_VALUE_DEFINITION,description:n,name:r,type:o,defaultValue:i,directives:s})}parseInterfaceTypeDefinition(){let e=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");let r=this.parseName(),o=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:T.INTERFACE_TYPE_DEFINITION,description:n,name:r,interfaces:o,directives:i,fields:s})}parseUnionTypeDefinition(){let e=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseUnionMemberTypes();return this.node(e,{kind:T.UNION_TYPE_DEFINITION,description:n,name:r,directives:o,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(E.EQUALS)?this.delimitedMany(E.PIPE,this.parseNamedType):void 0}parseEnumTypeDefinition(){let e=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();return this.node(e,{kind:T.ENUM_TYPE_DEFINITION,description:n,name:r,directives:o,values:i})}parseEnumValuesDefinition(){return this.optionalMany(E.BRACE_L,this.parseEnumValueDefinition,E.BRACE_R)}parseEnumValueDefinition(){let e=this._lexer.token,n=this.parseDescription(),r=this.parseEnumValueName(),o=this.parseConstDirectives();return this.node(e,{kind:T.ENUM_VALUE_DEFINITION,description:n,name:r,directives:o})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Ee(this._lexer.source,this._lexer.token.start,`${xl(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){let e=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();return this.node(e,{kind:T.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:r,directives:o,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(E.BRACE_L,this.parseInputValueDef,E.BRACE_R)}parseTypeSystemExtension(){let e=this._lexer.lookahead();if(e.kind===E.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension();case"directive":return this.parseDirectiveExtension()}throw this.unexpected(e)}parseSchemaExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");let n=this.parseConstDirectives(),r=this.optionalMany(E.BRACE_L,this.parseOperationTypeDefinition,E.BRACE_R);if(n===void 0&&r===void 0)throw this.unexpected();return this.node(e,{kind:T.SCHEMA_EXTENSION,directives:n,operationTypes:r})}parseScalarTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");let n=this.parseName(),r=this.parseConstDirectives();if(r===void 0)throw this.unexpected();return this.node(e,{kind:T.SCALAR_TYPE_EXTENSION,name:n,directives:r})}parseObjectTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");let n=this.parseName(),r=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(r===void 0&&o===void 0&&i===void 0)throw this.unexpected();return this.node(e,{kind:T.OBJECT_TYPE_EXTENSION,name:n,interfaces:r,directives:o,fields:i})}parseInterfaceTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");let n=this.parseName(),r=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(r===void 0&&o===void 0&&i===void 0)throw this.unexpected();return this.node(e,{kind:T.INTERFACE_TYPE_EXTENSION,name:n,interfaces:r,directives:o,fields:i})}parseUnionTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseUnionMemberTypes();if(r===void 0&&o===void 0)throw this.unexpected();return this.node(e,{kind:T.UNION_TYPE_EXTENSION,name:n,directives:r,types:o})}parseEnumTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();if(r===void 0&&o===void 0)throw this.unexpected();return this.node(e,{kind:T.ENUM_TYPE_EXTENSION,name:n,directives:r,values:o})}parseInputObjectTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();if(r===void 0&&o===void 0)throw this.unexpected();return this.node(e,{kind:T.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:r,fields:o})}parseDirectiveExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("directive"),this.expectToken(E.AT);let n=this.parseName(),r=this.parseConstDirectives();if(r===void 0)throw this.unexpected();return this.node(e,{kind:T.DIRECTIVE_EXTENSION,name:n,directives:r})}parseDirectiveDefinition(){let e=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(E.AT);let r=this.parseName(),o=this.parseArgumentDefs(),i=this.parseConstDirectives(),s=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");let c=this.parseDirectiveLocations();return this.node(e,{kind:T.DIRECTIVE_DEFINITION,description:n,name:r,arguments:o,directives:i,repeatable:s,locations:c})}parseDirectiveLocations(){return this.delimitedMany(E.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){let e=this._lexer.token,n=this.parseName();if(Object.hasOwn(gh,n.value))return n;throw this.unexpected(e)}parseSchemaCoordinate(){let e=this._lexer.token,n=this.expectOptionalToken(E.AT),r=this.parseName(),o;!n&&this.expectOptionalToken(E.DOT)&&(o=this.parseName());let i;return(n||o)&&this.expectOptionalToken(E.PAREN_L)&&(i=this.parseName(),this.expectToken(E.COLON),this.expectToken(E.PAREN_R)),n?i?this.node(e,{kind:T.DIRECTIVE_ARGUMENT_COORDINATE,name:r,argumentName:i}):this.node(e,{kind:T.DIRECTIVE_COORDINATE,name:r}):o?i?this.node(e,{kind:T.ARGUMENT_COORDINATE,name:r,fieldName:o,argumentName:i}):this.node(e,{kind:T.MEMBER_COORDINATE,name:r,memberName:o}):this.node(e,{kind:T.TYPE_COORDINATE,name:r})}node(e,n){return this._options.noLocation!==!0&&(n.loc=new hi(e,this._lexer.lastToken,this._lexer.source)),n}peek(e){return this._lexer.token.kind===e}expectToken(e){let n=this._lexer.token;if(n.kind===e)return this.advanceLexer(),n;throw Ee(this._lexer.source,n.start,`Expected ${BS(e)}, found ${xl(n)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){let n=this._lexer.token;if(n.kind===E.NAME&&n.value===e)this.advanceLexer();else throw Ee(this._lexer.source,n.start,`Expected "${e}", found ${xl(n)}.`)}expectOptionalKeyword(e){let n=this._lexer.token;return n.kind===E.NAME&&n.value===e?(this.advanceLexer(),!0):!1}unexpected(e){let n=e??this._lexer.token;return Ee(this._lexer.source,n.start,`Unexpected ${xl(n)}.`)}any(e,n,r){this.expectToken(e);let o=[];for(;!this.expectOptionalToken(r);)o.push(n.call(this));return o}optionalMany(e,n,r){if(this.expectOptionalToken(e)){let o=[];do o.push(n.call(this));while(!this.expectOptionalToken(r));return o}}many(e,n,r){this.expectToken(e);let o=[];do o.push(n.call(this));while(!this.expectOptionalToken(r));return o}delimitedMany(e,n){this.expectOptionalToken(e);let r=[];do r.push(n.call(this));while(this.expectOptionalToken(e));return r}advanceLexer(){let{maxTokens:e}=this._options,n=this._lexer.advance();if(n.kind!==E.EOF&&(++this._tokenCounter,e!==void 0&&this._tokenCounter>e))throw Ee(this._lexer.source,n.start,`Document contains more than ${e} tokens. Parsing aborted.`)}};function xl(t){let e=t.value;return BS(t.kind)+(e!=null?` "${e}"`:"")}function BS(t){return FS(t)?`"${t}"`:t}function Sh(t,e,n){let r=t.arguments?.find(o=>o.name.value===e);if(!(!r||r.value.kind!==n)&&r.value.kind===T.STRING)return r.value.value}function mo(t){try{return t()}catch{}}var yi=mo(()=>globalThis)||mo(()=>window)||mo(()=>self)||mo(()=>global)||mo(function(){return mo.constructor("return this")()});var Ws="4.3.3";var $S=new Map;function zs(t){let e=$S.get(t)||1;return $S.set(t,e+1),`${t}:${e}:${Math.random().toString(36).slice(2)}`}function qs(t,e=0){let n=zs("stringifyForDisplay");return JSON.stringify(t,(r,o)=>o===void 0?n:o,e).split(JSON.stringify(n)).join("<undefined>")}var GS="Invariant Violation",bh=class t extends Error{constructor(e=GS){super(e),this.name=GS,Object.setPrototypeOf(this,t.prototype)}},zS=["debug","log","warn","error","silent"],uP=zS.indexOf("silent");function w(t,...e){if(!t)throw we(...e)}function Rl(t){return function(e,...n){if(zS.indexOf(t)>=uP){let r=console[t]||console.log;if(typeof e=="number"){let o=e;e=qS(o),e||(e=QS(o,n),n=[])}r(e,...n)}}}w.debug=Rl("debug");w.log=Rl("log");w.warn=Rl("warn");w.error=Rl("error");function we(t,...e){return new bh(qS(t,e)||QS(t,e))}var WS=Symbol.for("ApolloErrorMessageHandler_"+Ws);function Eh(t){if(typeof t=="string")return t;try{return qs(t,2).slice(0,1e3)}catch{return"<non-serializable>"}}function qS(t,e=[]){if(t)return yi[WS]&&yi[WS](t,e.map(Eh))}function QS(t,e=[]){if(t)return typeof t=="string"?e.reduce((n,r)=>n.replace(/%[sdfo]/,Eh(r)),t):`An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#${encodeURIComponent(JSON.stringify({version:Ws,message:t,args:e.map(Eh)}))}`}function Bn(t,e,n,r){if(n.kind===T.INT||n.kind===T.FLOAT)t[e.value]=Number(n.value);else if(n.kind===T.BOOLEAN||n.kind===T.STRING)t[e.value]=n.value;else if(n.kind===T.OBJECT){let o={};n.fields.map(i=>Bn(o,i.name,i.value,r)),t[e.value]=o}else if(n.kind===T.VARIABLE){let o=(r||{})[n.name.value];t[e.value]=o}else if(n.kind===T.LIST)t[e.value]=n.values.map(o=>{let i={};return Bn(i,e,o,r),i[e.value]});else if(n.kind===T.ENUM)t[e.value]=n.value;else if(n.kind===T.NULL)t[e.value]=null;else throw we(21,e.value,n.kind)}function go(t,e){if(t.arguments&&t.arguments.length){let n={};return t.arguments.forEach(({name:r,value:o})=>Bn(n,r,o,e)),n}return null}function Dh(t){return t[0].toUpperCase()+t.slice(1)}var dP=Symbol.for("apollo.cacheSize"),me=S({},yi[dP]);function Ce(t,e){return t.definitions.find(n=>n.kind==="OperationDefinition"&&!!n.name)?.name.value??e}var fP=()=>Object.create(null),{forEach:hP,slice:KS}=Array.prototype,{hasOwnProperty:pP}=Object.prototype,Me=class t{constructor(e=!0,n=fP){this.weakness=e,this.makeData=n}lookup(){return this.lookupArray(arguments)}lookupArray(e){let n=this;return hP.call(e,r=>n=n.getChildTrie(r)),pP.call(n,"data")?n.data:n.data=this.makeData(KS.call(e))}peek(){return this.peekArray(arguments)}peekArray(e){let n=this;for(let r=0,o=e.length;n&&r<o;++r){let i=n.mapFor(e[r],!1);n=i&&i.get(e[r])}return n&&n.data}remove(){return this.removeArray(arguments)}removeArray(e){let n;if(e.length){let r=e[0],o=this.mapFor(r,!1),i=o&&o.get(r);i&&(n=i.removeArray(KS.call(e,1)),!i.data&&!i.weak&&!(i.strong&&i.strong.size)&&o.delete(r))}else n=this.data,delete this.data;return n}getChildTrie(e){let n=this.mapFor(e,!0),r=n.get(e);return r||n.set(e,r=new t(this.weakness,this.makeData)),r}mapFor(e,n){return this.weakness&&mP(e)?this.weak||(n?this.weak=new WeakMap:void 0):this.strong||(n?this.strong=new Map:void 0)}};function mP(t){switch(typeof t){case"object":if(t===null)break;case"function":return!0}return!1}function gP(){}var dr=class{constructor(e=1/0,n=gP){this.max=e,this.dispose=n,this.map=new Map,this.newest=null,this.oldest=null}has(e){return this.map.has(e)}get(e){let n=this.getNode(e);return n&&n.value}get size(){return this.map.size}getNode(e){let n=this.map.get(e);if(n&&n!==this.newest){let{older:r,newer:o}=n;o&&(o.older=r),r&&(r.newer=o),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=o)}return n}set(e,n){let r=this.getNode(e);return r?r.value=n:(r={key:e,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(e,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(e){let n=this.map.get(e);return n?(n===this.newest&&(this.newest=n.older),n===this.oldest&&(this.oldest=n.newer),n.newer&&(n.newer.older=n.older),n.older&&(n.older.newer=n.newer),this.map.delete(e),this.dispose(n.value,e),!0):!1}};function Th(){}var yP=Th,vP=typeof WeakRef<"u"?WeakRef:function(t){return{deref:()=>t}},SP=typeof WeakMap<"u"?WeakMap:Map,bP=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:Th,unregister:Th}},EP=10024,fn=class{constructor(e=1/0,n=yP){this.max=e,this.dispose=n,this.map=new SP,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{let r=this.unfinalizedNodes.values();for(let o=0;o<EP;o++){let i=r.next().value;if(!i)break;this.unfinalizedNodes.delete(i);let s=i.key;delete i.key,i.keyRef=new vP(s),this.registry.register(s,i,i)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new bP(this.deleteNode.bind(this))}has(e){return this.map.has(e)}get(e){let n=this.getNode(e);return n&&n.value}getNode(e){let n=this.map.get(e);if(n&&n!==this.newest){let{older:r,newer:o}=n;o&&(o.older=r),r&&(r.newer=o),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=o)}return n}set(e,n){let r=this.getNode(e);return r?r.value=n:(r={key:e,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.scheduleFinalization(r),this.map.set(e,r),this.size++,r.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(e){e===this.newest&&(this.newest=e.older),e===this.oldest&&(this.oldest=e.newer),e.newer&&(e.newer.older=e.older),e.older&&(e.older.newer=e.newer),this.size--;let n=e.key||e.keyRef&&e.keyRef.deref();this.dispose(e.value,n),e.keyRef?this.registry.unregister(e):this.unfinalizedNodes.delete(e),n&&this.map.delete(n)}delete(e){let n=this.map.get(e);return n?(this.deleteNode(n),!0):!1}scheduleFinalization(e){this.unfinalizedNodes.add(e),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}};var wh=new WeakSet;function YS(t){t.size<=(t.max||-1)||wh.has(t)||(wh.add(t),setTimeout(()=>{t.clean(),wh.delete(t)},100))}var yo=function(t,e){let n=new fn(t,e);return n.set=function(r,o){let i=fn.prototype.set.call(this,r,o);return YS(this),i},n},Ch=function(t,e){let n=new dr(t,e);return n.set=function(r,o){let i=dr.prototype.set.call(this,r,o);return YS(this),i},n};function fr(t,{max:e,makeCacheKey:n=r=>r}){let r=new Me(!0),o=new yo(e);return(...i)=>{let s=r.lookupArray(n(i)),c=o.get(s);if(c){if(c.error)throw c.error;return c.result}let l=o.set(s,{});try{return l.result=t(...i)}catch(u){throw l.error=u,u}}}var at=fr((t,e)=>{w(t&&t.kind==="Document",1);let n=t.definitions.filter(r=>r.kind==="OperationDefinition");!1,e&&w(n.length==1&&n[0].operation===e,4,e,e,n[0].operation),Ae(t,{Field(r,o,i,s){if(r.alias&&(r.alias.value==="__typename"||r.alias.value.startsWith("__ac_"))&&r.alias.value!==r.name.value){let c=t,l=[];for(let u of s)c=c[u],c.kind===T.FIELD&&l.push(c.alias?.value||c.name.value);throw l.splice(-1,1,r.name.value),we(5,r.alias.value,l.join("."),n[0].operation,Ce(t,"(anonymous)"))}}})},{max:me.checkDocument||2e3});var{toString:DP}=Object.prototype;function _h(t){return Ih(t)}function Ih(t,e){switch(DP.call(t)){case"[object Array]":{if(e=e||new Map,e.has(t))return e.get(t);let n=t.slice(0);return e.set(t,n),n.forEach(function(r,o){n[o]=Ih(r,e)}),n}case"[object Object]":{if(e=e||new Map,e.has(t))return e.get(t);let n=Object.create(Object.getPrototypeOf(t));return e.set(t,n),Object.keys(t).forEach(r=>{n[r]=Ih(t[r],e)}),n}default:return t}}function Ct(t=[]){let e={};return t.forEach(n=>{e[n.name.value]=n}),e}function It(t){return t.definitions.filter(e=>e.kind==="FragmentDefinition")}function Wt(t,e){switch(t.kind){case"InlineFragment":return t;case"FragmentSpread":{let n=t.name.value;if(typeof e=="function")return e(n);let r=e&&e[n];return w(r,11,n),r}default:return null}}function $n(t){at(t);let e;for(let n of t.definitions){if(n.kind==="OperationDefinition")return n;n.kind==="FragmentDefinition"&&!e&&(e=n)}if(e)return e;throw we(14)}function Pe(t){return at(t),t.definitions.filter(e=>e.kind==="OperationDefinition")[0]}function _t(t){return t.kind==="Field"}function vo(t){return t.match(/^\[(.*)\]$/)}function ot(t){return t.alias?t.alias.value:t.name.value}function zt(t){return t.replace(/[[\]]/g,"")}function Mh(t,e,n){let r=Pe(e)?.operation,o=Ct(It(e));w(r,6);function i(l,u,d,f){let p=!1,h=u.map(m=>{let v=s(l,m,d,f);return p||=v!==m,v});return p?h:u}function s(l,u,d,f){if(Array.isArray(u)&&!f)return i(l,u,d,f);if(l.selectionSet)return c(l.selectionSet,u);if(u===null||!d)return u;if(f){let p=vo(f);if(p){if(Array.isArray(u))return i(l,u,d,p[1]);!1}let h=n.getScalar(zt(f));if(h)return h.coerceToParsed(u)}return u}function c(l,u,d){if(u===null||typeof u!="object")return u;let f=S({},u),p=!1;Object.hasOwn(u,"__typename")&&(d=u.__typename);let h=new Set(l.selections);return h.forEach(m=>{if(_t(m)){let v=ot(m);if(!Object.hasOwn(u,v))return;let y=u[v],b=s(m,y,d,d?n.getScalarTypeForField(d,m.name.value):void 0);p||=b!==y,f[v]=b}else{let v=Wt(m,o);v&&d&&n.fragmentMatches(v,d)&&v.selectionSet.selections.forEach(y=>h.add(y))}}),p?f:u}return c($n(e).selectionSet,t,n.getRootTypename(r))}function Ph(t){return t.length===0?Yt:new F(e=>{let{length:n}=t,r=new Array(n),o=new Map;t.forEach((l,u)=>{o.has(l)||o.set(l,new Set),o.get(l).add(u)});let i=o.size,s=o.size,c;o.forEach((l,u)=>{let d=!1,f=u.subscribe({next:p=>{l.forEach(h=>r[h]=p),d||(d=!0,s--),s||(c||=new Set(t.filter(h=>h.dirty)),c.delete(u),c.size||(e.next(r.slice()),c=void 0))},complete:()=>{i--,i||e.complete()},error:e.error.bind(e)});e.add(f)})})}function St(...t){let e={};return t.forEach(n=>{n&&Reflect.ownKeys(n).forEach(r=>{let o=n[r];o!==void 0&&(e[r]=o)})}),e}function le(t){return t!==null&&typeof t=="object"}var{hasOwnProperty:TP}=Object.prototype,wP=function(t,e,n){return this.merge(t[n],e[n])},ZS=t=>isNaN(+t)?{}:[],ct=class{options;reconciler;constructor(e={}){this.options=e,this.reconciler=e.reconciler||wP}merge(e,n,r={}){let o=r.atPath;if(o?.length){let[i,...s]=o;e===void 0&&(e=ZS(i));let c=e[i];c===void 0&&s.length&&(c=ZS(s[0]));let l=this.merge(c,n,C(S({},r),{atPath:s}));return c!==l&&(e=this.shallowCopyForMerge(e),e[i]=l),e}return Array.isArray(e)&&Array.isArray(n)&&this.options.arrayMerge==="truncate"&&e.length>n.length&&(e=e.slice(0,n.length),this.pastCopies.add(e)),le(n)&&le(e)?(Object.keys(n).forEach(i=>{if(TP.call(e,i)){let s=e[i];if(n[i]!==s){let c=this.reconciler(e,n,i);c!==s&&(e=this.shallowCopyForMerge(e),e[i]=c)}}else e=this.shallowCopyForMerge(e),e[i]=n[i]}),e):n}isObject=le;pastCopies=new Set;shallowCopyForMerge(e){return le(e)&&(this.pastCopies.has(e)||(Array.isArray(e)?e=e.slice(0):e=S({__proto__:Object.getPrototypeOf(e)},e),this.pastCopies.add(e))),e}};function So(t){let e={},n=t&&t.variableDefinitions;return n&&n.length&&n.forEach(r=>{r.defaultValue&&Bn(e,r.variable.name,r.defaultValue)}),e}function xh(t,e){let n=e,r=[];return t.definitions.forEach(i=>{if(i.kind==="OperationDefinition")throw we(12,i.operation,i.name?` named '${i.name.value}'`:"");i.kind==="FragmentDefinition"&&r.push(i)}),typeof n>"u"&&(w(r.length===1,13,r.length),n=r[0].name.value),C(S({},t),{definitions:[{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:n}}]}},...t.definitions]})}function Qs(t){w(t.kind==="Document",8),w(t.definitions.length<=1,9);let e=t.definitions[0];return w(e.kind==="FragmentDefinition",10),e}function Ks(t){let e=Pe(t);return w(e&&e.operation==="query",15),e}var CP={};function Ys(t,e){CP[t]=e}var $e=Object.assign(function(e){return JSON.stringify(e,IP)},{reset(){vi=new Ch(me.canonicalStringify||1e3)}});!1;var vi;$e.reset();function IP(t,e){if(e&&typeof e=="object"){let n=Object.getPrototypeOf(e);if(n===Object.prototype||n===null){let r=Object.keys(e);if(r.every(_P))return e;let o=JSON.stringify(r),i=vi.get(o);if(!i){r.sort();let c=JSON.stringify(r);i=vi.get(c)||r,vi.set(o,i),vi.set(c,i)}let s=Object.create(n);return i.forEach(c=>{s[c]=e[c]}),s}}return e}function _P(t,e,n){return e===0||n[e-1]<=t}var MP=["connection","include","skip","client","rest","export","nonreactive","stream"],Zs=$e,Js=Object.assign(function(t,e,n){if(e&&n&&n.connection&&n.connection.key){if(n.connection.filter&&n.connection.filter.length>0){let o=n.connection.filter?n.connection.filter:[];o.sort();let i={};o.forEach(c=>{i[c]=e[c]});let s=Zs(i);if(s!=="{}")return`${n.connection.key}(${s})`}return n.connection.key}let r=t;if(e){let o=Zs(e);o!=="{}"&&(r+=`(${o})`)}return n&&Object.keys(n).forEach(o=>{MP.indexOf(o)===-1&&(n[o]&&Object.keys(n[o]).length?r+=`@${o}(${Zs(n[o])})`:r+=`@${o}`)}),r},{setStringify(t){let e=Zs;return Zs=t,e}});function Gn(t){return!!t.errors?.length}function hn(t,e,n){let r=new Set(t),o=r.size;return Ae(e,{Directive(i){if(r.delete(i.name.value)&&(!n||!r.size))return jn}}),n?!r.size:r.size<o}function Nh(t){let e=!1;return Ae(t,{Directive:{enter(n){if(n.name.value==="client"&&n.arguments&&(e=n.arguments.some(r=>r.name.value==="always"&&r.value.kind==="BooleanValue"&&r.value.value===!0),e))return jn}}}),e}var ae=Array.isArray;var PP=fr(function(t){let e=t.directives?.find(n=>n.name.value==="defer");if(!e)return!1;for(let n of e.arguments??[])if(n.name.value==="if")switch(n.value.kind){case T.BOOLEAN:return n.value.value;case T.VARIABLE:let r=n.value.name.value;return o=>!!o?.[r]}return!0},{max:me.isDeferredFragment||2e3});function kl(t,e){let n=PP(t);return typeof n=="function"?n(e):n}function Rh(t){return le(t)&&t.kind==="Document"&&Array.isArray(t.definitions)}function bo(t){return Array.isArray(t)&&t.length>0}function Xs(t){return t!==null&&typeof t=="object"&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}var xP=fr(function(t){let e=t.directives?.find(n=>n.name.value==="stream");if(!e)return!1;for(let n of e.arguments??[])if(n.name.value==="if")switch(n.value.kind){case T.BOOLEAN:return n.value.value;case T.VARIABLE:{let r=n.value.name.value;return o=>!!o?.[r]}}return!0},{max:me.isStreamField||2e3});function Si(t,e){let n=xP(t);return typeof n=="function"?n(e):n}var Ye=null,JS={},NP=1,RP=()=>class{constructor(){this.id=["slot",NP++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let e=Ye;e;e=e.parent)if(this.id in e.slots){let n=e.slots[this.id];if(n===JS)break;return e!==Ye&&(Ye.slots[this.id]=n),!0}return Ye&&(Ye.slots[this.id]=JS),!1}getValue(){if(this.hasValue())return Ye.slots[this.id]}withValue(e,n,r,o){let i={__proto__:null,[this.id]:e},s=Ye;Ye={parent:s,slots:i};try{return n.apply(o,r)}finally{Ye=s}}static bind(e){let n=Ye;return function(){let r=Ye;try{return Ye=n,e.apply(this,arguments)}finally{Ye=r}}}static noContext(e,n,r){if(Ye){let o=Ye;try{return Ye=null,e.apply(r,n)}finally{Ye=o}}else return e.apply(r,n)}};function XS(t){try{return t()}catch{}}var kh="@wry/context:Slot",kP=XS(()=>globalThis)||XS(()=>global)||Object.create(null),eb=kP,Wn=eb[kh]||Array[kh]||(function(t){try{Object.defineProperty(eb,kh,{value:t,enumerable:!1,writable:!1,configurable:!0})}finally{return t}})(RP());var{bind:tb,noContext:nb}=Wn;var Eo=new Wn;var{hasOwnProperty:rb}=Object.prototype,ea=Array.from||function(t){let e=[];return t.forEach(n=>e.push(n)),e};function bi(t){let{unsubscribe:e}=t;typeof e=="function"&&(t.unsubscribe=void 0,e())}var ta=[],FP=100;function Ei(t,e){if(!t)throw new Error(e||"assertion failure")}function ib(t,e){let n=t.length;return n>0&&n===e.length&&t[n-1]===e[n-1]}function sb(t){switch(t.length){case 0:throw new Error("unknown value");case 1:return t[0];case 2:throw t[1]}}function ab(t){return t.slice(0)}var na=class t{constructor(e){this.fn=e,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++t.count}peek(){if(this.value.length===1&&!hr(this))return ob(this),this.value[0]}recompute(e){return Ei(!this.recomputing,"already recomputing"),ob(this),hr(this)?LP(this,e):sb(this.value)}setDirty(){this.dirty||(this.dirty=!0,cb(this),bi(this))}dispose(){this.setDirty(),hb(this),Ah(this,(e,n)=>{e.setDirty(),pb(e,this)})}forget(){this.dispose()}dependOn(e){e.add(this),this.deps||(this.deps=ta.pop()||new Set),this.deps.add(e)}forgetDeps(){this.deps&&(ea(this.deps).forEach(e=>e.delete(this)),this.deps.clear(),ta.push(this.deps),this.deps=null)}};na.count=0;function ob(t){let e=Eo.getValue();if(e)return t.parents.add(e),e.childValues.has(t)||e.childValues.set(t,[]),hr(t)?ub(e,t):db(e,t),e}function LP(t,e){return hb(t),Eo.withValue(t,HP,[t,e]),UP(t,e)&&VP(t),sb(t.value)}function HP(t,e){t.recomputing=!0;let{normalizeResult:n}=t,r;n&&t.value.length===1&&(r=ab(t.value)),t.value.length=0;try{if(t.value[0]=t.fn.apply(null,e),n&&r&&!ib(r,t.value))try{t.value[0]=n(t.value[0],r[0])}catch{}}catch(o){t.value[1]=o}t.recomputing=!1}function hr(t){return t.dirty||!!(t.dirtyChildren&&t.dirtyChildren.size)}function VP(t){t.dirty=!1,!hr(t)&&lb(t)}function cb(t){Ah(t,ub)}function lb(t){Ah(t,db)}function Ah(t,e){let n=t.parents.size;if(n){let r=ea(t.parents);for(let o=0;o<n;++o)e(r[o],t)}}function ub(t,e){Ei(t.childValues.has(e)),Ei(hr(e));let n=!hr(t);if(!t.dirtyChildren)t.dirtyChildren=ta.pop()||new Set;else if(t.dirtyChildren.has(e))return;t.dirtyChildren.add(e),n&&cb(t)}function db(t,e){Ei(t.childValues.has(e)),Ei(!hr(e));let n=t.childValues.get(e);n.length===0?t.childValues.set(e,ab(e.value)):ib(n,e.value)||t.setDirty(),fb(t,e),!hr(t)&&lb(t)}function fb(t,e){let n=t.dirtyChildren;n&&(n.delete(e),n.size===0&&(ta.length<FP&&ta.push(n),t.dirtyChildren=null))}function hb(t){t.childValues.size>0&&t.childValues.forEach((e,n)=>{pb(t,n)}),t.forgetDeps(),Ei(t.dirtyChildren===null)}function pb(t,e){e.parents.delete(t),t.childValues.delete(e),fb(t,e)}function UP(t,e){if(typeof t.subscribe=="function")try{bi(t),t.unsubscribe=t.subscribe.apply(null,e)}catch{return t.setDirty(),!1}return!0}var jP={setDirty:!0,dispose:!0,forget:!0};function ra(t){let e=new Map,n=t&&t.subscribe;function r(o){let i=Eo.getValue();if(i){let s=e.get(o);s||e.set(o,s=new Set),i.dependOn(s),typeof n=="function"&&(bi(s),s.unsubscribe=n(o))}}return r.dirty=function(i,s){let c=e.get(i);if(c){let l=s&&rb.call(jP,s)?s:"setDirty";ea(c).forEach(u=>u[l]()),e.delete(i),bi(c)}},r}var mb;function Fh(...t){return(mb||(mb=new Me(typeof WeakMap=="function"))).lookupArray(t)}var Oh=new Set;function qt(t,{max:e=Math.pow(2,16),keyArgs:n,makeCacheKey:r=Fh,normalizeResult:o,subscribe:i,cache:s=dr}=Object.create(null)){let c=typeof s=="function"?new s(e,p=>p.dispose()):s,l=function(){let p=r.apply(null,n?n.apply(null,arguments):arguments);if(p===void 0)return t.apply(null,arguments);let h=c.get(p);h||(c.set(p,h=new na(t)),h.normalizeResult=o,h.subscribe=i,h.forget=()=>c.delete(p));let m=h.recompute(Array.prototype.slice.call(arguments));return c.set(p,h),Oh.add(c),Eo.hasValue()||(Oh.forEach(v=>v.clean()),Oh.clear()),m};Object.defineProperty(l,"size",{get:()=>c.size,configurable:!1,enumerable:!1}),Object.freeze(l.options={max:e,keyArgs:n,makeCacheKey:r,normalizeResult:o,subscribe:i,cache:c});function u(p){let h=p&&c.get(p);h&&h.setDirty()}l.dirtyKey=u,l.dirty=function(){u(r.apply(null,arguments))};function d(p){let h=p&&c.get(p);if(h)return h.peek()}l.peekKey=d,l.peek=function(){return d(r.apply(null,arguments))};function f(p){return p?c.delete(p):!1}return l.forgetKey=f,l.forget=function(){return f(r.apply(null,arguments))},l.makeCacheKey=r,l.getKey=n?function(){return r.apply(null,n.apply(null,arguments))}:r,Object.freeze(l)}function pn(t){return{__ref:String(t)}}function gb(t){let e=new Set([t]);return e.forEach(n=>{le(n)&&BP(n)===n&&Object.getOwnPropertyNames(n).forEach(r=>{le(n[r])&&e.add(n[r])})}),t}function BP(t){if(!1)try{Object.freeze(t)}catch(e){if(e instanceof TypeError)return null;throw e}return t}function pr(t){return!1,t}function Lh(t){let e=t[0]||{},n=t.length;if(n>1){let r=new ct;for(let o=1;o<n;++o)e=r.merge(e,t[o])}return e}function Do(t,e){return St(t,e,e.variables&&{variables:St(S(S({},t&&t.variables),e.variables))})}function Al(t){return t.catch(()=>{}),t}function Hh(t,e){at(e);let n=yb(""),r=yb(""),o=y=>{for(let b=0,D;b<y.length&&(D=y[b]);++b)if(!ae(D)){if(D.kind===T.OPERATION_DEFINITION)return n(D.name&&D.name.value);if(D.kind===T.FRAGMENT_DEFINITION)return r(D.name.value)}return w.error(16),null},i=0;for(let y=e.definitions.length-1;y>=0;--y)e.definitions[y].kind===T.OPERATION_DEFINITION&&++i;let s=$P(t),c=y=>bo(y)&&y.map(s).some(b=>b&&b.remove),l=new Map,u=!1,d={enter(y){if(c(y.directives))return u=!0,null}},f=Ae(e,{Field:d,InlineFragment:d,VariableDefinition:{enter(){return!1}},Variable:{enter(y,b,D,P,_){let k=o(_);k&&k.variables.add(y.name.value)}},FragmentSpread:{enter(y,b,D,P,_){if(c(y.directives))return u=!0,null;let k=o(_);k&&k.fragmentSpreads.add(y.name.value)}},FragmentDefinition:{enter(y,b,D,P){l.set(JSON.stringify(P),y)},leave(y,b,D,P){let _=l.get(JSON.stringify(P));if(y===_)return y;if(i>0&&y.selectionSet.selections.every(k=>k.kind===T.FIELD&&k.name.value==="__typename"))return r(y.name.value).removed=!0,u=!0,null}},Directive:{leave(y){if(s(y))return u=!0,null}}});if(!u)return e;let p=y=>(y.transitiveVars||(y.transitiveVars=new Set(y.variables),y.removed||y.fragmentSpreads.forEach(b=>{p(r(b)).transitiveVars.forEach(D=>{y.transitiveVars.add(D)})})),y),h=new Set;f.definitions.forEach(y=>{y.kind===T.OPERATION_DEFINITION?p(n(y.name&&y.name.value)).fragmentSpreads.forEach(b=>{h.add(b)}):y.kind===T.FRAGMENT_DEFINITION&&i===0&&!r(y.name.value).removed&&h.add(y.name.value)}),h.forEach(y=>{p(r(y)).fragmentSpreads.forEach(b=>{h.add(b)})});let m=y=>!!(!h.has(y)||r(y).removed),v={enter(y){if(m(y.name.value))return null}};return GP(Ae(f,{FragmentSpread:v,FragmentDefinition:v,OperationDefinition:{leave(y){if(y.variableDefinitions){let b=p(n(y.name&&y.name.value)).transitiveVars;if(b.size<y.variableDefinitions.length)return C(S({},y),{variableDefinitions:y.variableDefinitions.filter(D=>b.has(D.variable.name.value))})}}}}))}function yb(t){let e=new Map;return function(r=t){let o=e.get(r);return o||e.set(r,o={variables:new Set,fragmentSpreads:new Set}),o}}function $P(t){let e=new Map,n=new Map;return t.forEach(r=>{r&&(r.name?e.set(r.name,r):r.test&&n.set(r.test,r))}),r=>{let o=e.get(r.name.value);return!o&&n.size&&n.forEach((i,s)=>{s(r)&&(o=i)}),o}}function vb(t,e){return!t||t.selectionSet.selections.every(n=>n.kind===T.FRAGMENT_SPREAD&&vb(e[n.name.value],e))}function GP(t){return vb(Pe(t)||Qs(t),Ct(It(t)))?null:t}function Vh(t){return Ae(t,{FragmentSpread(e){if(!e.directives?.some(({name:n})=>n.value==="unmask"))return null}})}function mn({directives:t},e){return!t||!t.length?!0:zP(t).every(({directive:n,ifArgument:r})=>{let o=!1;return r.value.kind==="Variable"?(o=e&&e[r.value.name.value],w(o!==void 0,17,n.name.value)):o=r.value.value,n.name.value==="skip"?!o:o})}function WP({name:{value:t}}){return t==="skip"||t==="include"}function zP(t){let e=[];return t&&t.length&&t.forEach(n=>{if(!WP(n))return;let r=n.arguments,o=n.name.value;w(r&&r.length===1,18,o);let i=r[0];w(i.name&&i.name.value==="if",19,o);let s=i.value;w(s&&(s.kind==="Variable"||s.kind==="BooleanValue"),20,o),e.push({directive:n,ifArgument:i})}),e}function Uh(t,e){let n=null;t.directives&&(n={},t.directives.forEach(o=>{n[o.name.value]={},o.arguments&&o.arguments.forEach(({name:i,value:s})=>Bn(n[o.name.value],i,s,e))}));let r=null;return t.arguments&&t.arguments.length&&(r={},t.arguments.forEach(({name:o,value:i})=>Bn(r,o,i,e))),Js(t.name.value,r,n)}function oa(t){return"dataState"in t?t:C(S({},t),{dataState:t.complete?"complete":t.result===null?"empty":"partial"})}function mr(t){let e={data:t.data};return t.error&&(e.error=t.error),e}function Di(t,e=()=>{}){return n=>new F(r=>{let o=e();return n.subscribe({next(i){let s;try{s=t(i,o)}catch(c){r.error(c)}s!==void 0&&r.next(s)},error(i){r.error(i)},complete(){r.complete()}})})}var{toString:Sb,hasOwnProperty:qP}=Object.prototype,bb=Function.prototype.toString,jh=new Map;function J(t,e){try{return Bh(t,e)}finally{jh.clear()}}function Bh(t,e){if(t===e)return!0;let n=Sb.call(t),r=Sb.call(e);if(n!==r)return!1;switch(n){case"[object Array]":if(t.length!==e.length)return!1;case"[object Object]":{if(Db(t,e))return!0;let o=Eb(t),i=Eb(e),s=o.length;if(s!==i.length)return!1;for(let c=0;c<s;++c)if(!qP.call(e,o[c]))return!1;for(let c=0;c<s;++c){let l=o[c];if(!Bh(t[l],e[l]))return!1}return!0}case"[object Error]":return t.name===e.name&&t.message===e.message;case"[object Number]":if(t!==t)return e!==e;case"[object Boolean]":case"[object Date]":return+t==+e;case"[object RegExp]":case"[object String]":return t==`${e}`;case"[object Map]":case"[object Set]":{if(t.size!==e.size)return!1;if(Db(t,e))return!0;let o=t.entries(),i=n==="[object Map]";for(;;){let s=o.next();if(s.done)break;let[c,l]=s.value;if(!e.has(c)||i&&!Bh(l,e.get(c)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":t=new Uint8Array(t),e=new Uint8Array(e);case"[object DataView]":{let o=t.byteLength;if(o===e.byteLength)for(;o--&&t[o]===e[o];);return o===-1}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{let o=bb.call(t);return o!==bb.call(e)?!1:!YP(o,KP)}}return!1}function Eb(t){return Object.keys(t).filter(QP,t)}function QP(t){return this[t]!==void 0}var KP="{ [native code] }";function YP(t,e){let n=t.length-e.length;return n>=0&&t.indexOf(e,n)===n}function Db(t,e){let n=jh.get(t);if(n){if(n.has(e))return!0}else jh.set(t,n=new Set);return n.add(e),!1}function ia(t,s,l,i){var c=s,{data:e}=c,n=ge(c,["data"]);var u=l,{data:r}=u,o=ge(u,["data"]);return J(n,o)&&Ol($n(t).selectionSet,e,r,{fragmentMap:Ct(It(t)),variables:i})}function Ol(t,e,n,r){if(e===n)return!0;let o=new Set;return t.selections.every(i=>{if(o.has(i)||(o.add(i),!mn(i,r.variables))||Tb(i))return!0;if(_t(i)){let s=ot(i),c=e&&e[s],l=n&&n[s],u=i.selectionSet;if(!u)return J(c,l);let d=Array.isArray(c),f=Array.isArray(l);if(d!==f)return!1;if(d&&f){let p=c.length;if(l.length!==p)return!1;for(let h=0;h<p;++h)if(!Ol(u,c[h],l[h],r))return!1;return!0}return Ol(u,c,l,r)}else{let s=Wt(i,r.fragmentMap);if(s)return Tb(s)?!0:Ol(s.selectionSet,e,n,r)}})}function Tb(t){return!!t.directives&&t.directives.some(ZP)}function ZP(t){return t.name.value==="nonreactive"}function JP(t,e){let n,r;function o(i){return i!==n&&(n=i,r=e(n)),r}return Object.assign(t.pipe(z(o),bn({bufferSize:1,refCount:!0})),{getCurrentResult:()=>o(t.getCurrentResult())})}var sa=fr(function(e,n,r){return JP(e,r)},{max:1,makeCacheKey:t=>t.slice(0,2)});var aa=Symbol.for("apollo.result.extensions"),gn=Symbol.for("apollo.result.streamInfo"),$h=Symbol.for("apollo.observableQuery.variablesUnknown"),gr=Symbol.for("apollo.cache.handleIncremental");function Gh(...t){return Fh.bind(null,...t)}function Wh(){throw new Error("only supported in development mode")}var wb=Wh,Cb=Wh,Ib=Wh;var ca=class{isIncrementalResult(e){return!1}prepareRequest(e){return w(!hn(["defer","stream"],e.query),69),e}extractErrors(){}startRequest=void 0};function XP(t){return t}var zn=class t{transform;cached;resultCache=new WeakSet;getCacheKey(e){return[e]}static identity(){return new t(XP,{cache:!1})}static split(e,n,r=t.identity()){return Object.assign(new t(o=>(e(o)?n:r).transformDocument(o),{cache:!1}),{left:n,right:r})}constructor(e,n={}){this.transform=e,n.getCacheKey&&(this.getCacheKey=n.getCacheKey),this.cached=n.cache!==!1,this.resetCache()}resetCache(){if(this.cached){let e=new Me;this.performWork=qt(t.prototype.performWork.bind(this),{makeCacheKey:n=>{let r=this.getCacheKey(n);if(r)return w(Array.isArray(r),22),e.lookupArray(r)},max:me["documentTransform.cache"],cache:fn})}}performWork(e){return at(e),this.transform(e)}transformDocument(e){if(this.resultCache.has(e))return e;let n=this.performWork(e);return this.resultCache.add(n),n}concat(e){return Object.assign(new t(n=>e.transformDocument(this.transformDocument(n)),{cache:!1}),{left:this,right:e})}left;right};var la,yr=Object.assign(t=>{let e=la.get(t);return e||(e=pi(t),la.set(t,e)),e},{reset(){la=new yo(me.print||2e3)}});yr.reset();!1;function X(t){return!!(t&&typeof t=="object"&&typeof t.__ref=="string")}var _b={kind:T.FIELD,name:{kind:T.NAME,value:"__typename"}},vr=Object.assign(function(t){return Ae(t,{SelectionSet:{enter(e,n,r){if(r&&r.kind===T.OPERATION_DEFINITION)return;let{selections:o}=e;if(!o||o.some(c=>c.kind===T.FIELD&&(c.name.value==="__typename"||c.name.value.lastIndexOf("__",0)===0)))return;let s=r;if(!(s.kind===T.FIELD&&s.directives&&s.directives.some(c=>c.name.value==="export")))return C(S({},e),{selections:[...o,_b]})}}})},{added(t){return t===_b}});function ua(t){return t===7||t===8}function To(t){return!ua(t)}function zh(t,{client:e}){let n={query:t.query,variables:t.variables||{},extensions:t.extensions||{},operationName:Ce(t.query),operationType:Pe(t.query).operation},r=S({},t.context),o=s=>{typeof s=="function"?r=S(S({},r),s(i())):r=S(S({},r),s)},i=()=>Object.freeze(S({},r));return Object.defineProperty(n,"setContext",{enumerable:!1,value:o}),Object.defineProperty(n,"getContext",{enumerable:!1,value:i}),Object.defineProperty(n,"client",{enumerable:!1,value:e}),n}var Sr=class t{static empty(){return new t(()=>Yt)}static from(e){if(e.length===0)return t.empty();let[n,...r]=e;return n.concat(...r)}static split(e,n,r=new t((o,i)=>i(o))){let o=new t((i,s)=>{let c=e(i);return!1,c?n.request(i,s):r.request(i,s)});return Object.assign(o,{left:n,right:r})}static execute(e,n,r){return e.request(zh(n,r),()=>(!1,Yt))}static concat(...e){return t.from(e)}constructor(e){e&&(this.request=e)}split(e,n,r){return this.concat(t.split(e,n,r))}concat(...e){return e.length===0?this:e.reduce(this.combine.bind(this),this)}combine(e,n){let r=new t((o,i)=>e.request(o,s=>n.request(s,i)));return Object.assign(r,{left:e,right:n})}request(e,n){throw we(67)}left;right};var wo=Sr.execute;var Ti=class{assumeImmutableResults=!1;lookupFragment(e){return null}getRootTypename(e){return Dh(e)}getScalar(e){}getScalarTypeForField(e,n){}configuresScalars(){return!1}serializeVariables(e,n){return n}batch(e){let n=typeof e.optimistic=="string"?e.optimistic:e.optimistic===!1?null:void 0,r;return this.performTransaction(()=>r=e.update(this),n),r}recordOptimisticTransaction(e,n){this.performTransaction(e,n)}transformDocument(e){return e}transformForLink(e){return e}identify(e){}gc(){return[]}modify(e){return!1}readQuery(e,n=!!e.optimistic){return this.read(C(S({},e),{rootId:e.id||"ROOT_QUERY",optimistic:n}))}fragmentWatches=new Me(!0);watchFragment(e){let{fragment:n,fragmentName:r,from:o}=e,i=this.getFragmentDoc(n,r),c=(Array.isArray(o)?o:[o]).map(h=>{let m=h==null?h:this.toCacheId(h);if(!1){let v=r||Qs(n).name.value;m===void 0&&!1&&w.warn(126,v)}return m});if(!Array.isArray(o)){let h=this.watchSingleFragment(c[0],i,e);return o===null?h:sa(h,Symbol.for("apollo.transform.individualResult"),m=>C(S({},m),{data:m.data??{}}))}let l;function u(h){let m=h.reduce((v,y,b)=>(v.data.push(y.data),v.complete&&=y.complete,v.dataState=v.complete?"complete":"partial",y.missing&&(v.missing||={},v.missing[b]=y.missing),v),{data:[],dataState:"complete",complete:!0});return J(l,m)||(l=m),l}if(c.length===0)return tx;let d=!1,f=c.map(h=>this.watchSingleFragment(h,i,e)),p=Ph(f).pipe(z(u),En({subscribe:()=>d=!0,unsubscribe:()=>d=!1}),bn({bufferSize:1,refCount:!0}));return Object.assign(p,{getCurrentResult:()=>{if(d&&l)return l;let h=f.map(m=>m.getCurrentResult());return u(h)}})}onAfterBroadcast=e=>e();watchSingleFragment(e,n,r){if(e===null)return ex;let{optimistic:o=!0,variables:i}=r,s=[n,$e({id:e,optimistic:o,variables:i})],c=this.fragmentWatches.lookupArray(s);if(!c.observable){let f=function(h){let m=h.result;return(!d||!ia(n,{data:d.data},{data:m},r.variables))&&(d={data:m,dataState:h.complete?"complete":"partial",complete:h.complete},h.missing&&(d.missing=h.missing.missing)),d};var l=f;let u=!1,d,p=new F(h=>{u=!0;let m=this.watch({variables:i,returnPartialData:!0,id:e,query:n,optimistic:o,immediate:!0,callback:v=>{p.dirty=!0,this.onAfterBroadcast(()=>{h.next(f(v)),p.dirty=!1})}});return()=>{u=!1,m(),this.fragmentWatches.removeArray(s)}}).pipe(Wi(),Zt({connector:()=>new Ar(1),resetOnRefCountZero:()=>Ru(0)}));c.observable=Object.assign(p,{dirty:!1,getCurrentResult:()=>u&&d?d:f(this.diff({id:e,query:n,returnPartialData:!0,optimistic:o,variables:i}))})}return c.observable}getFragmentDoc=qt(xh,{max:me["cache.fragmentQueryDocuments"]||1e3,cache:fn,makeCacheKey:Gh(this)});readFragment(e,n=!!e.optimistic){let r=e.from!==void 0?this.toCacheId(e.from):e.id;return this.read(C(S({},e),{query:this.getFragmentDoc(e.fragment,e.fragmentName),rootId:r,optimistic:n}))}writeQuery(o){var i=o,{id:e,data:n}=i,r=ge(i,["id","data"]);return this.write(Object.assign(r,{dataId:e||"ROOT_QUERY",result:n}))}writeFragment(i){var s=i,{data:e,fragment:n,fragmentName:r}=s,o=ge(s,["data","fragment","fragmentName"]);let c=o.from!==void 0?this.toCacheId(o.from):o.id;return this.write(Object.assign(o,{query:this.getFragmentDoc(n,r),dataId:c,result:e}))}updateQuery(e,n){return this.batch({update(r){let o=r.readQuery(e),i=n(o);return i==null?o:(r.writeQuery(C(S({},e),{data:i})),i)}})}updateFragment(e,n){return this.batch({update(r){let o=r.readFragment(e),i=n(o);return i==null?o:(r.writeFragment(C(S({},e),{data:i})),i)}})}toCacheId(e){return typeof e=="string"?e:this.identify(e)}};!1;var Mb=Object.freeze({data:null,dataState:"complete",complete:!0}),ex=Object.assign(new F(t=>{t.next(Mb)}),{dirty:!1,getCurrentResult:()=>Mb}),Pb=Object.freeze({data:[],dataState:"complete",complete:!0}),tx=Object.assign(new F(t=>{t.next(Pb)}),{getCurrentResult:()=>Pb});var da=class t extends Error{message;path;query;variables;constructor(e,n,r,o){if(super(e),this.message=e,this.path=n,this.query=r,this.variables=o,this.name="MissingFieldError",Array.isArray(this.path)){this.missing=this.message;for(let i=this.path.length-1;i>=0;--i)this.missing={[this.path[i]]:this.missing}}else this.missing=this.path;this.__proto__=t.prototype}missing};var{hasOwnProperty:Ie}=Object.prototype;function Hl({__typename:t,id:e,_id:n},r){if(typeof t=="string"&&(r&&(r.keyObject=e!=null?{id:e}:n!=null?{_id:n}:void 0),e==null&&n!=null&&(e=n),e!=null))return`${t}:${typeof e=="number"||typeof e=="string"?e:JSON.stringify(e)}`}var nx={dataIdFromObject:Hl,resultCaching:!0};function xb(t){return St(nx,t)}function Nb(t,e){return X(e)?t.get(e.__ref,"__typename"):e&&e.__typename}var qh=/^[_a-z][_0-9a-z]*/i;function Lt(t){let e=t.match(qh);return e?e[0]:t}function Fl(t,e,n){return le(e)?ae(e)?e.every(r=>Fl(t,r,n)):t.selections.every(r=>{if(_t(r)&&mn(r,n)){let o=ot(r);return Ie.call(e,o)&&(!r.selectionSet||Fl(r.selectionSet,e[o],n))}return!0}):!1}function br(t){return le(t)&&!X(t)&&!ae(t)}function Rb(){return new ct}function Vl(t,e){let n=Ct(It(t));return{fragmentMap:n,lookupFragment(r){let o=n[r];return!o&&e&&(o=e.lookup(r)),o||null}}}function Ll(t){switch(t.kind){case T.NAMED_TYPE:return t.name.value;case T.LIST_TYPE:return`[${Ll(t.type)}]`;case T.NON_NULL_TYPE:return Ll(t.type)}}var Ul={},Qh=()=>Ul,kb={},Co=class{policies;group;data={};constructor(e,n){this.policies=e,this.group=n}toObject(){return S({},this.data)}has(e){return this.lookup(e,!0)!==void 0}get(e,n){if(this.group.depend(e,n),Ie.call(this.data,e)){let r=this.data[e];if(r&&Ie.call(r,n))return r[n]}if(n==="__typename"&&Ie.call(this.policies.rootTypenamesById,e))return this.policies.rootTypenamesById[e];if(this instanceof yn)return this.parent.get(e,n)}lookup(e,n){if(n&&this.group.depend(e,"__exists"),Ie.call(this.data,e))return this.data[e];if(this instanceof yn)return this.parent.lookup(e,n);if(this.policies.rootTypenamesById[e])return{}}merge(e,n){let r;X(e)&&(e=e.__ref),X(n)&&(n=n.__ref);let o=typeof e=="string"?this.lookup(r=e):e,i=typeof n=="string"?this.lookup(r=n):n;if(!i)return;w(typeof r=="string",108),i=this.coerceStoreObject(i,(c,l)=>c.coerceToParsed(l),i.__typename||o?.__typename||this.policies.rootTypenamesById[r]);let s=new ct({reconciler:rx}).merge(o,i);if(this.data[r]=s,s!==o&&(delete this.refs[r],this.group.caching)){let c={};o||(c.__exists=1),Object.keys(i).forEach(l=>{if(!o||o[l]!==s[l]){c[l]=1;let u=Lt(l);u!==l&&!this.policies.hasKeyArgs(s.__typename,u)&&(c[u]=1),s[l]===void 0&&!(this instanceof yn)&&delete s[l]}}),c.__typename&&!(o&&o.__typename)&&this.policies.rootTypenamesById[r]===s.__typename&&delete c.__typename,Object.keys(c).forEach(l=>this.group.dirty(r,l))}}modify(e,n,r){let o=this.lookup(e);if(o){let i={},s=!1,c=!0,l={DELETE:Ul,INVALIDATE:kb,isReference:X,toReference:this.toReference,canRead:this.canRead,readField:(u,d)=>this.policies.readField(typeof u=="string"?{fieldName:u,from:d||pn(e)}:u,{store:this})};if(Object.keys(o).forEach(u=>{let d=Lt(u),f=o[u];if(f===void 0)return;let p=typeof n=="function"?n:n[u]||(r?void 0:n[d]);if(p){let h=p===Qh?Ul:p(pr(f),C(S({},l),{fieldName:d,storeFieldName:u,storage:this.getStorage(e,u)}));if(h===kb)this.group.dirty(e,u);else if(h===Ul&&(h=void 0),h!==f&&(i[u]=h,s=!0,f=h,!1)){let m=v=>{if(this.lookup(v.__ref)===void 0)return!1,!0};if(X(h))m(h);else if(Array.isArray(h)){let v=!1,y;for(let b of h){if(X(b)){if(v=!0,m(b))break}else if(typeof b=="object"&&b){let[D]=this.policies.identify(b);D&&(y=b)}if(v&&y!==void 0){!1;break}}}}}f!==void 0&&(c=!1)}),s)return this.merge(e,i),c&&(this instanceof yn?this.data[e]=void 0:delete this.data[e],this.group.dirty(e,"__exists")),!0}return!1}delete(e,n,r){let o=this.lookup(e);if(o){let i=this.getFieldValue(o,"__typename"),s=n&&r?this.policies.getStoreFieldName({typename:i,fieldName:n,args:r}):n;return this.modify(e,s?{[s]:Qh}:Qh,!!r)}return!1}evict(e,n){let r=!1;return e.id&&(Ie.call(this.data,e.id)&&(r=this.delete(e.id,e.fieldName,e.args)),this instanceof yn&&this!==n&&(r=this.parent.evict(e,n)||r),(e.fieldName||r)&&this.group.dirty(e.id,e.fieldName||"__exists")),r}clear(){this.replace(null)}extract(){let e=this.toObject();this.hasScalarConfig()&&(e=Object.fromEntries(Object.entries(e).map(([r,o])=>[r,o&&this.coerceStoreObject(o,(i,s)=>i.coerceToSerialized(s),o?.__typename||this.policies.rootTypenamesById[r])])));let n=[];return this.getRootIdSet().forEach(r=>{Ie.call(this.policies.rootTypenamesById,r)||n.push(r)}),n.length&&(e.__META={extraRootIds:n.sort()}),e}hasScalarConfig(){return!!this.policies.cache.config.scalars}coerceStoreObject(e,n,r=e.__typename){if(!r||!this.hasScalarConfig())return e;let o=!1,i=Object.entries(e).map(([s,c])=>{let l=Lt(s),u=this.policies.getScalarTypeForField(r,l),d=this.coerceValue(c,n,u,`${r}.${l}`);return o||=d!==c,[s,d]});return o?Object.fromEntries(i):e}coerceValue(e,n,r,o){if(e==null)return e;if(r){let i=vo(r);if(i){if(Array.isArray(e))return e.map(c=>this.coerceValue(c,n,i[1],o));!1}let s=this.policies.cache.getScalar(zt(r));if(s)return n(s,e)}return Array.isArray(e)?e.map(i=>this.coerceValue(i,n,r,o)):Xs(e)&&"__typename"in e?this.coerceStoreObject(e,n):e}replace(e){if(Object.keys(this.data).forEach(r=>{e&&Ie.call(e,r)||this.delete(r)}),e){let n=e,{__META:r}=n,o=ge(n,["__META"]);Object.keys(o).forEach(i=>{this.merge(i,o[i])}),r&&r.extraRootIds.forEach(this.retain,this)}}rootIds={};retain(e){return this.rootIds[e]=(this.rootIds[e]||0)+1}release(e){if(this.rootIds[e]>0){let n=--this.rootIds[e];return n||delete this.rootIds[e],n}return 0}getRootIdSet(e=new Set){return Object.keys(this.rootIds).forEach(e.add,e),this instanceof yn?this.parent.getRootIdSet(e):Object.keys(this.policies.rootTypenamesById).forEach(e.add,e),e}gc(){let e=this.getRootIdSet(),n=this.toObject();e.forEach(o=>{Ie.call(n,o)&&(Object.keys(this.findChildRefIds(o)).forEach(e.add,e),delete n[o])});let r=Object.keys(n);if(r.length){let o=this;for(;o instanceof yn;)o=o.parent;r.forEach(i=>o.delete(i))}return r}refs={};findChildRefIds(e){if(!Ie.call(this.refs,e)){let n=this.refs[e]={},r=this.data[e];if(!r)return n;let o=new Set([r]);o.forEach(i=>{X(i)&&(n[i.__ref]=!0),le(i)&&Object.keys(i).forEach(s=>{let c=i[s];le(c)&&o.add(c)})})}return this.refs[e]}makeCacheKey(){return this.group.keyMaker.lookupArray(arguments)}getFieldValue=(e,n)=>pr(X(e)?this.get(e.__ref,n):e&&e[n]);canRead=e=>X(e)?this.has(e.__ref):typeof e=="object";toReference=(e,n)=>{if(typeof e=="string")return pn(e);if(X(e))return e;let[r]=this.policies.identify(e);if(r){let o=pn(r);return n&&this.merge(r,e),o}};get supportsResultCaching(){return this.group.caching}},jl=class{caching;parent;d=null;keyMaker;constructor(e,n=null){this.caching=e,this.parent=n,this.resetCaching()}resetCaching(){this.d=this.caching?ra():null,this.keyMaker=new Me}depend(e,n){if(this.d){this.d(Kh(e,n));let r=Lt(n);r!==n&&this.d(Kh(e,r)),this.parent&&this.parent.depend(e,n)}}dirty(e,n){this.d&&this.d.dirty(Kh(e,n),n==="__exists"?"forget":"setDirty")}};function Kh(t,e){return e+"#"+t}function Jh(t,e){qn(t)&&t.group.depend(e,"__exists")}var Yh=class extends Co{constructor({policies:e,resultCaching:n=!0,seed:r}){super(e,new jl(n)),r&&this.replace(r)}stump=new Zh(this);addLayer(e,n){return this.stump.addLayer(e,n)}removeLayer(){return this}storageTrie=new Me;getStorage(){return this.storageTrie.lookupArray(arguments)}};Co.Root=Yh;var yn=class t extends Co{id;parent;replay;group;constructor(e,n,r,o){super(n.policies,o),this.id=e,this.parent=n,this.replay=r,this.group=o,r(this)}addLayer(e,n){return new t(e,this,n,this.group)}removeLayer(e){let n=this.parent.removeLayer(e);return e===this.id?(this.group.caching&&Object.keys(this.data).forEach(r=>{let o=this.data[r],i=n.lookup(r);i?o?o!==i&&Object.keys(o).forEach(s=>{J(o[s],i[s])||this.group.dirty(r,s)}):(this.group.dirty(r,"__exists"),Object.keys(i).forEach(s=>{this.group.dirty(r,s)})):this.delete(r)}),n):n===this.parent?this:n.addLayer(this.id,this.replay)}toObject(){return S(S({},this.parent.toObject()),this.data)}findChildRefIds(e){let n=this.parent.findChildRefIds(e);return Ie.call(this.data,e)?S(S({},n),super.findChildRefIds(e)):n}getStorage(...e){let n=this.parent;for(;n.parent;)n=n.parent;return n.getStorage(...e)}},Zh=class extends yn{constructor(e){super("EntityStore.Stump",e,()=>{},new jl(e.group.caching,e.group))}removeLayer(){return this}merge(e,n){return this.parent.merge(e,n)}};function rx(t,e,n){let r=t[n],o=e[n];return J(r,o)?r:o}function qn(t){return!!(t&&t.supportsResultCaching)}var wi=new Wn;function Ab(t){let e=t.directives?.find(({name:r})=>r.value==="unmask");if(!e)return"mask";let n=e.arguments?.find(({name:r})=>r.value==="mode");return!1,n&&"value"in n.value&&n.value.value==="migrate"?"migrate":"unmask"}function Bl(t,e,n){return wi.withValue(!0,()=>{let r=fa(t,e,n,!1);return Object.isFrozen(t)&&pr(r),r})}function ox(t,e){if(e.has(t))return e.get(t);let n=Array.isArray(t)?[]:{};return e.set(t,n),n}function fa(t,e,n,r,o){let{knownChanged:i}=n,s=ox(t,n.mutableTargets);if(Array.isArray(t)){for(let[c,l]of Array.from(t.entries())){if(l===null){s[c]=null;continue}let u=fa(l,e,n,r,void 0);i.has(u)&&i.add(s),s[c]=u}return i.has(s)?s:t}for(let c of e.selections){let l;if(r&&i.add(s),c.kind===T.FIELD){let u=ot(c),d=c.selectionSet;if(l=s[u]||t[u],l===void 0)continue;if(d&&l!==null){let f=fa(t[u],d,n,r,void 0);i.has(f)&&(l=f)}s[u]=l,!1}if(c.kind===T.INLINE_FRAGMENT&&(!c.typeCondition||n.cache.fragmentMatches(c,t.__typename))&&(l=fa(t,c.selectionSet,n,r,o)),c.kind===T.FRAGMENT_SPREAD){let u=c.name.value,d=n.fragmentMap[u]||(n.fragmentMap[u]=n.cache.lookupFragment(u));w(d,41,u);let f=Ab(c);f!=="mask"&&(l=fa(t,d.selectionSet,n,f==="migrate",o))}i.has(l)&&i.add(s)}return"__typename"in t&&!("__typename"in s)&&(s.__typename=t.__typename),Object.keys(s).length!==Object.keys(t).length&&i.add(s),i.has(s)?s:t}function ix(t,e,n,r,o){let i=()=>(wi.getValue()||(!1,i=()=>e),e);return{get(){return i()},set(s){i=()=>s},enumerable:!0,configurable:!0}}function Xh(t,e,n,r){let o=e.definitions.filter(s=>s.kind===T.FRAGMENT_DEFINITION);typeof r>"u"&&(w(o.length===1,43,o.length),r=o[0].name.value);let i=o.find(s=>s.name.value===r);return w(!!i,44,r),t==null||J(t,{})?t:Bl(t,i.selectionSet,{operationType:"fragment",operationName:i.name.value,fragmentMap:Ct(It(e)),cache:n,mutableTargets:new WeakMap,knownChanged:new WeakSet})}function ep(t,e,n){let r=Pe(e);return w(r,45),t==null?t:Bl(t,r.selectionSet,{operationType:r.operation,operationName:r.name?.value,fragmentMap:Ct(It(e)),cache:n,mutableTargets:new WeakMap,knownChanged:new WeakSet})}var Ob={};function tp(t){let e=JSON.stringify(t);return Ob[e]||(Ob[e]={})}function np(t){let e=tp(t);return e.keyFieldsFn||(e.keyFieldsFn=(n,r)=>{let o=(s,c)=>r.readField(c,s),i=r.keyObject=op(t,s=>{let c=Ci(r.storeObject,s,o);return c===void 0&&n!==r.storeObject&&Ie.call(n,s[0])&&(c=Ci(n,s,Lb)),w(c!==void 0,113,s.join("."),n),c});return`${r.typename}:${JSON.stringify(i)}`})}function rp(t){let e=tp(t);return e.keyArgsFn||(e.keyArgsFn=(n,{field:r,variables:o,fieldName:i})=>{let s=op(t,l=>{let u=l[0],d=u.charAt(0);if(d==="@"){if(r&&bo(r.directives)){let f=u.slice(1),p=r.directives.find(m=>m.name.value===f),h=p&&go(p,o);return h&&Ci(h,l.slice(1))}return}if(d==="$"){let f=u.slice(1);if(o&&Ie.call(o,f)){let p=l.slice(0);return p[0]=f,Ci(o,p)}return}if(n)return Ci(n,l)}),c=JSON.stringify(s);return(n||c!=="{}")&&(i+=":"+c),i})}function op(t,e){let n=new ct;return Fb(t).reduce((r,o)=>{let i=e(o);if(i!==void 0){for(let s=o.length-1;s>=0;--s)i={[o[s]]:i};r=n.merge(r,i)}return r},{})}function Fb(t){let e=tp(t);if(!e.paths){let n=e.paths=[],r=[];t.forEach((o,i)=>{ae(o)?(Fb(o).forEach(s=>n.push(r.concat(s))),r.length=0):(r.push(o),ae(t[i+1])||(n.push(r.slice(0)),r.length=0))})}return e.paths}function Lb(t,e){return t[e]}function Ci(t,e,n){return n=n||Lb,Hb(e.reduce(function r(o,i){return ae(o)?o.map(s=>r(s,i)):o&&n(o,i)},t))}function Hb(t){return le(t)?ae(t)?t.map(Hb):op(Object.keys(t).sort(),e=>Ci(t,e)):t}var ip=new Wn,Vb=new WeakMap;function ha(t){let e=Vb.get(t);return e||Vb.set(t,e={vars:new Set,dep:ra()}),e}function sp(t){ha(t).vars.forEach(e=>e.forgetCache(t))}function Ub(t){ha(t).vars.forEach(e=>e.attachCache(t))}function ap(t){let e=new Set,n=new Set,r=function(i){if(arguments.length>0){if(t!==i){t=i,e.forEach(c=>{ha(c).dep.dirty(r),sx(c)});let s=Array.from(n);n.clear(),s.forEach(c=>c(t))}}else{let s=ip.getValue();s&&(o(s),ha(s).dep(r))}return t};r.onNextChange=i=>(n.add(i),()=>{n.delete(i)});let o=r.attachCache=i=>(e.add(i),ha(i).vars.add(r),r);return r.forgetCache=i=>e.delete(i),r}function sx(t){t.broadcastWatches&&t.broadcastWatches()}function lp(t){return t.args!==void 0?t.args:t.field?go(t.field,t.variables):null}var ax=()=>{},jb=(t,e)=>e.fieldName,Bb=(t,e,{mergeObjects:n})=>n(t,e),$b=(t,e)=>e,Gb=(t,e,{streamFieldInfo:n,existingData:r})=>{if(!t&&!r)return e;let o=[],i=t??r,s=n?.isLastChunk?e.length:Math.max(i.length,e.length);for(let c=0;c<s;c++)o[c]=e[c]===void 0?i[c]:e[c];return o},$l=class{config;typePolicies={};toBeAdded={};supertypeMap=new Map;fuzzySubtypes=new Map;cache;rootIdsByTypename={};rootTypenamesById={};usingPossibleTypes=!1;constructor(e){this.config=e,this.config=S({dataIdFromObject:Hl},e),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),e.possibleTypes&&this.addPossibleTypes(e.possibleTypes),e.typePolicies&&this.addTypePolicies(e.typePolicies)}identify(e,n){let r=this,o=n&&(n.typename||n.storeObject?.__typename)||e.__typename;if(o===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];let i=n&&n.storeObject||e,s=C(S({},n),{typename:o,storeObject:i,readField:n&&n.readField||((...d)=>{let f=Gl(d,i);return r.readField(f,{store:r.cache.data,variables:f.variables})})}),c,l=o&&this.getTypePolicy(o),u=l&&l.keyFn||this.config.dataIdFromObject;return wi.withValue(!0,()=>{for(;u;){let d=u(S(S({},e),i),s);if(ae(d))u=np(d);else{c=d;break}}}),c=c?String(c):void 0,s.keyObject?[c,s.keyObject]:[c]}addTypePolicies(e){Object.keys(e).forEach(n=>{let c=e[n],{queryType:r,mutationType:o,subscriptionType:i}=c,s=ge(c,["queryType","mutationType","subscriptionType"]);r&&this.setRootTypename("Query",n),o&&this.setRootTypename("Mutation",n),i&&this.setRootTypename("Subscription",n),Ie.call(this.toBeAdded,n)?this.toBeAdded[n].push(s):this.toBeAdded[n]=[s]})}updateTypePolicy(e,n,r){let o=this.getTypePolicy(e),{keyFields:i,fields:s}=n;function c(l,u){l.merge=typeof u=="function"?u:u===!0?Bb:u===!1?$b:l.merge}c(o,n.merge),o.keyFn=i===!1?ax:ae(i)?np(i):typeof i=="function"?i:o.keyFn,s&&Object.keys(s).forEach(l=>{let u=r[l];(!u||u?.typename!==e)&&(u=r[l]={typename:e});let d=s[l];if(typeof d=="function")u.scalar?!1:u.read=d;else{let{keyArgs:f,read:p,merge:h,scalar:m}=d;m&&(u.scalar=m),u.scalar&&(!1,u.read=p=void 0,u.merge=h=void 0),u.keyFn=f===!1?jb:ae(f)?rp(f):typeof f=="function"?f:u.keyFn,typeof p=="function"&&(u.read=p),c(u,h)}u.read&&u.merge&&(u.keyFn=u.keyFn||jb)})}setRootTypename(e,n=e){let r="ROOT_"+e.toUpperCase(),o=this.rootTypenamesById[r];n!==o&&(w(!o||o===e,114,e),o&&delete this.rootIdsByTypename[o],this.rootIdsByTypename[n]=r,this.rootTypenamesById[r]=n)}addPossibleTypes(e){this.usingPossibleTypes=!0,Object.keys(e).forEach(n=>{this.getSupertypeSet(n,!0),e[n].forEach(r=>{this.getSupertypeSet(r,!0).add(n);let o=r.match(qh);(!o||o[0]!==r)&&this.fuzzySubtypes.set(r,new RegExp(r))})})}getTypePolicy(e){if(!Ie.call(this.typePolicies,e)){let r=this.typePolicies[e]={};r.fields={};let o=this.supertypeMap.get(e);!o&&this.fuzzySubtypes.size&&(o=this.getSupertypeSet(e,!0),this.fuzzySubtypes.forEach((i,s)=>{if(i.test(e)){let c=this.supertypeMap.get(s);c&&c.forEach(l=>o.add(l))}})),o&&o.size&&o.forEach(i=>{let l=this.getTypePolicy(i),{fields:s}=l,c=ge(l,["fields"]);Object.assign(r,c),Object.assign(r.fields,s)})}let n=this.toBeAdded[e];return n&&n.length&&n.splice(0).forEach(r=>{this.updateTypePolicy(e,r,this.typePolicies[e].fields)}),this.typePolicies[e]}getFieldPolicy(e,n){if(e)return this.getTypePolicy(e).fields[n]}getSupertypeSet(e,n){let r=this.supertypeMap.get(e);return!r&&n&&this.supertypeMap.set(e,r=new Set),r}fragmentMatches(e,n,r,o){if(!e.typeCondition)return!0;if(!n)return!1;let i=e.typeCondition.name.value;if(n===i)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(i)){let s=this.getSupertypeSet(n,!0),c=[s],l=f=>{let p=this.getSupertypeSet(f,!1);p&&p.size&&c.indexOf(p)<0&&c.push(p)},u=!!(r&&this.fuzzySubtypes.size),d=!1;for(let f=0;f<c.length;++f){let p=c[f];if(p.has(i))return s.has(i)||(d&&!1&&w.warn(115,n,i),s.add(i)),!0;p.forEach(l),u&&f===c.length-1&&Fl(e.selectionSet,r,o)&&(u=!1,d=!0,this.fuzzySubtypes.forEach((h,m)=>{let v=n.match(h);v&&v[0]===n&&l(m)}))}}return!1}hasKeyArgs(e,n){let r=this.getFieldPolicy(e,n);return!!(r&&r.keyFn)}getStoreFieldName(e){let{typename:n,fieldName:r}=e,o=this.getFieldPolicy(n,r),i,s=o&&o.keyFn;if(s&&n){let c={typename:n,fieldName:r,field:e.field||null,variables:e.variables},l=lp(e);for(;s;){let u=s(l,c);if(ae(u))s=rp(u);else{i=u||r;break}}}return i===void 0&&(i=e.field?Uh(e.field,e.variables):Js(r,lp(e))),i===!1?r:r===Lt(i)?i:r+":"+i}getScalarTypeForField(e,n){return this.getFieldPolicy(e,n)?.scalar}readField(e,n){let r=e.from;if(!r||!(e.field||e.fieldName))return;if(e.typename===void 0){let d=n.store.getFieldValue(r,"__typename");d&&(e.typename=d)}let i=this.getStoreFieldName(e),s=Lt(i),c=n.store.getFieldValue(r,i),l=this.getFieldPolicy(e.typename,s),u=l&&l.read;if(u){let d=Wb(this,r,e,n,n.store.getStorage(X(r)?r.__ref:r,i));return ip.withValue(this.cache,u,[c,d])}return c}getReadFunction(e,n){let r=this.getFieldPolicy(e,n);return r&&r.read}getMergeFunction(e,n,r){let o=this.getFieldPolicy(e,n),i=o&&o.merge;return!i&&r&&(o=this.getTypePolicy(r),i=o&&o.merge),i}runMergeFunction(e,n,{field:r,typename:o,merge:i,path:s},c,l){let u=e;if(i===Bb)return zb(c.store)(e,n);if(i===$b)return n;c.overwrite&&(e=void 0);let d=c.extensions?.[gn]?.deref()?.peekArray(s);if(d){let{current:p,previous:h}=d;if(h&&J(h.incoming,n)&&J(h.streamFieldInfo,p))return h.result}let f=i(e,n,cx(this,void 0,{typename:o,fieldName:r.name.value,field:r,variables:c.variables,path:s},c,l||{},u));return d&&(d.previous={incoming:n,streamFieldInfo:d.current,result:f}),f}};function Wb(t,e,n,r,o){let i=t.getStoreFieldName(n),s=Lt(i),c=n.variables||r.variables,{toReference:l,canRead:u}=r.store;return{args:lp(n),field:n.field||null,fieldName:s,storeFieldName:i,variables:c,isReference:X,toReference:l,storage:o,cache:t.cache,canRead:u,readField(...d){return t.readField(Gl(d,e,c),r)},mergeObjects:zb(r.store)}}function cx(t,e,n,r,o,i){var l;let s=C(S({},Wb(t,e,n,r,o)),{extensions:r.extensions,existingData:i}),c=r.extensions;if(c&&gn in c){let u=c,{[l=gn]:d}=u,f=ge(u,[Ca(l)]),p=d?.deref()?.peekArray(n.path);p&&(s.streamFieldInfo=p.current),s.extensions=Object.keys(f).length===0?void 0:f}return s}function Gl(t,e,n){let{0:r,1:o,length:i}=t,s;return typeof r=="string"?s={fieldName:r,from:i>1?o:e}:(s=S({},r),Ie.call(s,"from")||(s.from=e)),!1,s.variables===void 0&&(s.variables=n),s}function zb(t){return function(n,r){if(ae(n)||ae(r))throw we(117);if(le(n)&&le(r)){let o=t.getFieldValue(n,"__typename"),i=t.getFieldValue(r,"__typename");if(o&&i&&o!==i)return r;if(X(n)&&br(r))return t.merge(n.__ref,r),n;if(br(n)&&X(r))return t.merge(n,r.__ref),r;if(br(n)&&br(r))return S(S({},n),r)}return r}}function cp(t,e,n,r){!1}function qb(t){return[t.selectionSet,t.objectOrReference,t.context]}var Wl=class{executeSelectionSet;executeSubSelectedArray;prunePartialStreamArray;prunePartialBoundaries;config;knownResults=new WeakMap;keyMaker=new Me;constructor(e){this.config=e,this.executeSelectionSet=qt(n=>{let r=qb(n),o=this.executeSelectionSet.peek(...r);return o||(Jh(n.context.store,n.enclosingRef.__ref),this.execSelectionSetImpl(n))},{max:me["inMemoryCache.executeSelectionSet"]||5e4,keyArgs:qb,makeCacheKey(n,r,o){if(qn(o.store))return o.store.makeCacheKey(n,X(r)?r.__ref:r,o.varString)}}),this.executeSubSelectedArray=qt(n=>(Jh(n.context.store,n.enclosingRef.__ref),this.execSubSelectedArrayImpl(n)),{max:me["inMemoryCache.executeSubSelectedArray"]||1e4,makeCacheKey({field:n,array:r,context:o}){if(qn(o.store))return o.store.makeCacheKey(n,r,o.varString)}}),this.prunePartialBoundaries=qt(n=>this.prunePartialBoundariesImpl(n),{max:me["inMemoryCache.prunePartialBoundaries"]||2e4,makeCacheKey:({boundaries:n,context:r,selectionSet:o})=>{if(qn(r.store))return this.keyMaker.lookup(o,n,r.streamInfo,r.deferInfo)}}),this.prunePartialStreamArray=qt(n=>{let{field:r,context:o,path:i}=n;return Si(r,o.variables)&&o.streamInfo?.lookupArray(i).state.depend(),this.prunePartialStreamArrayImpl(n)},{max:me["inMemoryCache.prunePartialStreamArray"]||2e4,makeCacheKey:({field:n,context:r,boundaries:o})=>{if(qn(r.store))return this.keyMaker.lookup(n,o,r.streamInfo,r.deferInfo)}})}diffQueryAgainstStore(c){var l=c,{store:e,query:n,rootId:r="ROOT_QUERY",variables:o,returnPartialData:i=!0}=l,s=ge(l,["store","query","rootId","variables","returnPartialData"]);let u=Object.hasOwn(s,gr),d=this.config.cache.policies;o=St(So(Ks(n)),o);let f=pn(r),p=S(S({store:e,query:n,policies:d,variables:o,varString:$e(o)},Vl(n,this.config.fragments)),s[gr]),h=this.executeSelectionSet({selectionSet:$n(n).selectionSet,objectOrReference:f,enclosingRef:f,context:p});if(u&&dx(h,p)){let ee=this.prunePartialBoundaries({selectionSet:$n(n).selectionSet,data:h.result,boundaries:h.partialBoundaries,context:p,path:[]});(!(h.result!==ee.result)||!i)&&(h={result:ee.result,partialBoundaries:h.partialBoundaries,dataState:ee.dataState})}let{result:m,dataState:v,missing:y}=h,b=!!y&&(v!=="streaming"||!u);v==="streaming"&&Object.keys(m).length===0&&(v="empty");let D;(v==="deferPartial"||v==="streamPartial"||v==="streaming"&&!u)&&(v="partial"),v==="partial"&&!i&&(v="empty");let P=v==="complete",k={result:P||v==="streaming"||i&&Object.keys(m).length?m:null,complete:P,get missing(){return b&&(D||=new da(lx(y),y,n,o)),D}};return u&&(k.dataState=v),k}isFresh(e,n,r,o){if(qn(o.store)&&this.knownResults.get(e)===r){let i=this.executeSelectionSet.peek(r,n,o);if(i&&e===i.result)return!0}return!1}execSelectionSetImpl({selectionSet:e,objectOrReference:n,enclosingRef:r,context:o}){if(X(n)&&!o.policies.rootTypenamesById[n.__ref]&&!o.store.has(n.__ref))return{result:{},dataState:"empty",missing:`Dangling reference to missing ${n.__ref} object`,partialBoundaries:new pa};let{variables:i,policies:s,store:c}=o,l=c.getFieldValue(n,"__typename"),u=[],d,f,p=new ct,h=new pa;typeof l=="string"&&!s.rootIdsByTypename[l]&&u.push({__typename:l});function m(P,_){return P.missing&&(f=p.merge(f,{[_]:P.missing})),P}new Set(e.selections).forEach(P=>{if(mn(P,i))if(_t(P)){let _=s.readField({fieldName:P.name.value,field:P,variables:o.variables,from:n},o),k=ot(P);if(_===void 0){if(!vr.added(P)){let ee=X(n)?n.__ref:n?s.identify(n)[0]:void 0;f=p.merge(f,{[k]:`Can't find field '${P.name.value}' on ${ee?`${ee} object`:`object ${JSON.stringify(n||{},null,2)}`}`}),d=Qt(d,"empty")}}else if(ae(_))if(_.length>0){let ee=m(this.executeSubSelectedArray({field:P,array:_,enclosingRef:r,context:o}),k);_=ee.result,d=Qt(d,ee.dataState),h.set(k,ee.partialBoundaries)}else d=Qt(d,"complete");else if(!P.selectionSet)vr.added(P)||(d=Qt(d,"complete"));else if(_!=null){if(!1){let Ze=P.name.value;if(l){let Je=s.getFieldPolicy(l,Ze);Je?.scalar&&!1&&w.warn(119,`${l}.${Ze}`,Je.scalar)}}let ee=m(this.executeSelectionSet({selectionSet:P.selectionSet,objectOrReference:_,enclosingRef:X(_)?_:r,context:o}),k);_=ee.result,h.set(k,ee.partialBoundaries),d=Qt(d,ee.dataState==="empty"?"partial":ee.dataState)}_!==void 0&&u.push({[k]:_})}else{let _=Wt(P,o.lookupFragment);if(!_&&P.kind===T.FRAGMENT_SPREAD)throw we(120,P.name.value);if(_&&s.fragmentMatches(_,l)){let k=kl(P,o.variables),ee=this.execSelectionSetImpl({selectionSet:_.selectionSet,objectOrReference:n,enclosingRef:r,context:o}),{result:Ze,dataState:Je}=ee;h.merge(ee.partialBoundaries),Ze!==void 0&&u.push(Ze),ee.missing&&(f=p.merge(f,ee.missing)),k&&(Je==="partial"||Je==="empty")&&h.add(P),d=Qt(d,k?Je==="empty"?"streaming":Je==="partial"?"deferPartial":Je:Je)}}}),d||="complete";let b={result:Lh(u),missing:f,dataState:d,partialBoundaries:h},D=pr(b);return D.result&&this.knownResults.set(D.result,e),D}execSubSelectedArrayImpl({field:e,array:n,enclosingRef:r,context:o}){let i="complete",s,c=new ct,l=new pa,u=Si(e,o.variables);function d(f,p){return f.missing&&(s=c.merge(s,{[p]:f.missing})),f.result}return e.selectionSet&&(n=n.filter(f=>f===void 0||o.store.canRead(f))),n=n.map((f,p)=>{if(f===null)return null;let h;if(ae(f)?h=this.executeSubSelectedArray({field:e,array:f,enclosingRef:r,context:o}):e.selectionSet&&(h=this.executeSelectionSet({selectionSet:e.selectionSet,objectOrReference:f,enclosingRef:X(f)?f:r,context:o})),h){let{dataState:m}=h;return l.set(p,m==="partial"?h.partialBoundaries.clone().add(e):h.partialBoundaries),i=Qt(i,u&&m==="partial"?"streamPartial":m),d(h,p)}return!1,f}),{result:n,dataState:i,missing:s,partialBoundaries:l}}prunePartialBoundariesImpl({boundaries:e,context:n,data:r,path:o,selectionSet:i}){let{variables:s,lookupFragment:c,policies:l}=n;if(r==null||!e)return{result:r,dataState:"complete"};let u=new ct,d=!1,f="complete",p={};Object.hasOwn(r,"__typename")&&(p.__typename=r.__typename);let h=new Set(i.selections);return h.forEach(m=>{if(!mn(m,s))return;if(_t(m)){let b=ot(m);if(!Object.hasOwn(r,b))return;let D=r[b];if(Array.isArray(D)){let P=this.prunePartialStreamArray({field:m,array:D,boundaries:e.getChild(b),context:n,path:o.concat(b)});d||=P.result!==D,p[b]=P.result,f=Qt(f,P.dataState)}else if(!m.selectionSet)p[b]=D;else{let P=this.prunePartialBoundaries({data:D,selectionSet:m.selectionSet,boundaries:e.getChild(b),context:n,path:o.concat(b)});d||=P.result!==D,f=Qt(f,P.dataState),p[b]=Object.hasOwn(p,b)?u.merge(p[b],P.result):P.result}return}let v=Wt(m,c),y=!1;if(n.deferInfo&&kl(m,s)){let b=m.directives?.find(P=>P.name.value==="defer"),D=b&&Sh(b,"label",T.STRING);y=!!n.deferInfo.peekArray(o.concat(D||[]))}v&&l.fragmentMatches(v,r.__typename)&&(e.has(m)||y?f=Qt(f,"streaming"):v.selectionSet.selections.forEach(h.add,h))}),Object.keys(p).length!==Object.keys(r).length?d=!0:d&&e.hasSelections()&&(d=!J(p,r)),{result:d?p:r,dataState:f}}prunePartialStreamArrayImpl({field:e,array:n,boundaries:r,context:o,path:i}){if(!r)return{result:n,dataState:"complete"};let s=!1,c="complete",l=[],u=o.streamInfo?.peekArray(i)?.state,d=Math.min(n.length,u?.truncate?u.streamPosition:Number.MAX_SAFE_INTEGER);for(let f=0;f<d;f++){let p=n[f],h={result:p,dataState:"complete"};if(r.getChild(f)?.has(e)){u?(u.truncate=!0,l=l.slice(0,u.streamPosition)):(l=[],c="complete");break}Array.isArray(p)?h=this.prunePartialStreamArray({field:e,array:p,boundaries:r.getChild(f),context:o,path:i.concat(f)}):e.selectionSet&&(h=this.prunePartialBoundaries({data:p,selectionSet:e.selectionSet,boundaries:r.getChild(f),context:o,path:i.concat(f)})),l.push(h.result),s||=h.result!==p,c=Qt(c,h.dataState)}return s||=l.length!==n.length,{result:s?l:n,dataState:c}}};function lx(t){try{JSON.stringify(t,(e,n)=>{if(typeof n=="string")throw n;return n})}catch(e){return e}}function ux(t,e,n){if(!e.selectionSet){let r=new Set([n]);r.forEach(o=>{le(o)&&(w(!X(o),121,Nb(t,o),e.name.value),Object.values(o).forEach(r.add,r))})}}var pa=class t{selections=new Set;children=new Map;add(e){return this.selections.add(e),this}has(e){return this.selections.has(e)}hasSelections(){return this.selections.size>0}getChild(e){return this.children.get(e)}clone(){return new t().merge(this)}set(e,n){let r=this.getChild(e);this.children.set(e,r?r.clone().merge(n):n)}merge(e){return e.selections.forEach(n=>this.add(n)),e.children.forEach((n,r)=>this.set(r,n)),this}};function dx({dataState:t},e){return t==="deferPartial"||t==="streamPartial"?!0:t==="complete"||t==="streaming"?!!(e.streamInfo||e.deferInfo):!1}var fx={empty:{complete:"partial",deferPartial:"partial",streaming:"partial",streamPartial:"partial"},deferPartial:{empty:"partial"},streamPartial:{deferPartial:"deferPartial",empty:"partial"},streaming:{deferPartial:"deferPartial",empty:"partial",streamPartial:"streamPartial"},complete:{deferPartial:"deferPartial",streaming:"streaming",streamPartial:"streamPartial",empty:"partial"},partial:{}};function Qt(t,e){return e==="partial"?"partial":!t||t===e?e:fx[t][e]||t}function up(t,e,n){let r=`${e}${n}`,o=t.flavors.get(r);return o||t.flavors.set(r,o=t.clientOnly===e&&t.deferred===n?t:C(S({},t),{clientOnly:e,deferred:n})),o}var zl=class{cache;reader;fragments;constructor(e,n,r){this.cache=e,this.reader=n,this.fragments=r}writeToStore(e,{query:n,result:r,dataId:o,variables:i,overwrite:s,extensions:c}){let l=Pe(n),u=Rb();i=S(S({},So(l)),i);let d=C(S({store:e,written:{},merge(p,h){return u.merge(p,h)},variables:i,varString:$e(i)},Vl(n,this.fragments)),{overwrite:!!s,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map,extensions:c}),f=this.processSelectionSet({result:r||{},dataId:o,selectionSet:l.selectionSet,mergeTree:{map:new Map},context:d,path:[]});if(!X(f))throw we(122,r);return d.incomingById.forEach(({storeObject:p,mergeTree:h,fieldNodeSet:m},v)=>{let y=pn(v);if(h&&h.map.size){let b=this.applyMerges(h,y,p,d);if(X(b))return;p=b}if(!1){let b={};m.forEach(_=>{_.selectionSet&&(b[_.name.value]=!0)});let D=_=>b[Lt(_)]===!0,P=_=>{let k=h&&h.map.get(_);return!!(k&&k.info&&k.info.merge)};Object.keys(p).forEach(_=>{D(_)&&!P(_)&&hx(y,p,_,d.store)})}e.merge(v,p)}),e.retain(f.__ref),f}processSelectionSet({dataId:e,result:n,selectionSet:r,context:o,mergeTree:i,path:s}){let{policies:c}=this.cache,l={},u=e&&c.rootTypenamesById[e]||fp(n,r,o.fragmentMap)||e&&o.store.get(e,"__typename");typeof u=="string"&&(l.__typename=u);let d=(...p)=>{let h=Gl(p,l,o.variables);if(X(h.from)){let m=o.incomingById.get(h.from.__ref);if(m){let v=c.readField(C(S({},h),{from:m.storeObject}),o);if(v!==void 0)return v}}return c.readField(h,o)},f=new Set;this.flattenFields(r,n,o,u).forEach((p,h)=>{let m=ot(h),v=n[m],y=[...s,h.name.value];if(f.add(h),v!==void 0){let b=c.getStoreFieldName({typename:u,fieldName:h.name.value,field:h,variables:p.variables}),D=Qb(i,b),P=this.processFieldValue(v,h,h.selectionSet?up(p,!1,!1):p,D,y),_;h.selectionSet&&(X(P)||br(P))&&(_=d("__typename",P));let k=c.getMergeFunction(u,h.name.value,_);k?D.info={field:h,typename:u,merge:k,path:y}:p.extensions?.[gn]&&Array.isArray(P)&&Si(h,p.variables)?D.info={field:h,typename:u,merge:Gb,path:y}:Kb(i,b),l=p.merge(l,{[b]:P})}else!1});try{let[p,h]=c.identify(n,{typename:u,selectionSet:r,fragmentMap:o.fragmentMap,storeObject:l,readField:d});e=e||p,h&&(l=o.merge(l,h))}catch(p){if(!e)throw p}if(typeof e=="string"){let p=pn(e),h=o.written[e]||(o.written[e]=[]);if(h.indexOf(r)>=0||(h.push(r),this.reader&&this.reader.isFresh(n,p,r,o)))return p;let m=o.incomingById.get(e);return m?(m.storeObject=o.merge(m.storeObject,l),m.mergeTree=dp(m.mergeTree,i),f.forEach(v=>m.fieldNodeSet.add(v))):o.incomingById.set(e,{storeObject:l,mergeTree:ql(i)?void 0:i,fieldNodeSet:f}),p}return l}processFieldValue(e,n,r,o,i){return!n.selectionSet||e===null?e:ae(e)?e.map((s,c)=>{let l=this.processFieldValue(s,n,r,Qb(o,c),[...i,c]);return Kb(o,c),l}):this.processSelectionSet({result:e,selectionSet:n.selectionSet,context:r,mergeTree:o,path:i})}flattenFields(e,n,r,o=fp(n,e,r.fragmentMap)){let i=new Map,{policies:s}=this.cache,c=new Me(!1);return(function l(u,d){let f=c.lookup(u,d.clientOnly,d.deferred);f.visited||(f.visited=!0,u.selections.forEach(p=>{if(!mn(p,r.variables))return;let{clientOnly:h,deferred:m}=d;if(!(h&&m)&&bo(p.directives)&&p.directives.forEach(v=>{let y=v.name.value;if(y==="client"&&(h=!0),y==="defer"){let b=go(v,r.variables);(!b||b.if!==!1)&&(m=!0)}}),_t(p)){let v=i.get(p);v&&(h=h&&v.clientOnly,m=m&&v.deferred),i.set(p,up(r,h,m))}else{let v=Wt(p,r.lookupFragment);if(!v&&p.kind===T.FRAGMENT_SPREAD)throw we(124,p.name.value);v&&s.fragmentMatches(v,o,n,r.variables)&&l(v.selectionSet,up(r,h,m))}}))})(e,r),i}applyMerges(e,n,r,o,i){if(e.map.size&&!X(r)){let s=!ae(r)&&(X(n)||br(n))?n:void 0,c=r;s&&!i&&(i=[X(s)?s.__ref:s]);let l,u=(d,f)=>ae(d)?typeof f=="number"?d[f]:void 0:o.store.getFieldValue(d,String(f));e.map.forEach((d,f)=>{let p=u(s,f),h=u(c,f);if(h===void 0)return;i&&i.push(f);let m=this.applyMerges(d,p,h,o,i);m!==h&&(l=l||new Map,l.set(f,m)),i&&w(i.pop()===f)}),l&&(r=ae(c)?c.slice(0):S({},c),l.forEach((d,f)=>{r[f]=d}))}return e.info?this.cache.policies.runMergeFunction(n,r,e.info,o,i&&o.store.getStorage(...i)):r}},Zb=[];function Qb({map:t},e){return t.has(e)||t.set(e,Zb.pop()||{map:new Map}),t.get(e)}function dp(t,e){if(t===e||!e||ql(e))return t;if(!t||ql(t))return e;let n=t.info&&e.info?S(S({},t.info),e.info):t.info||e.info,r=t.map.size&&e.map.size,o=r?new Map:t.map.size?t.map:e.map,i={info:n,map:o};if(r){let s=new Set(e.map.keys());t.map.forEach((c,l)=>{i.map.set(l,dp(c,e.map.get(l))),s.delete(l)}),s.forEach(c=>{i.map.set(c,dp(e.map.get(c),t.map.get(c)))})}return i}function ql(t){return!t||!(t.info||t.map.size)}function Kb({map:t},e){let n=t.get(e);n&&ql(n)&&(Zb.push(n),t.delete(e))}var Yb=new Set;function hx(t,e,n,r){let o=f=>{let p=r.getFieldValue(f,n);return typeof p=="object"&&p},i=o(t);if(!i)return;let s=o(e);if(!s||X(i)||J(i,s)||Object.keys(i).every(f=>r.getFieldValue(s,f)!==void 0))return;let c=r.getFieldValue(t,"__typename")||r.getFieldValue(e,"__typename"),l=Lt(n),u=`${c}.${l}`;if(Yb.has(u))return;Yb.add(u);let d=[];!ae(i)&&!ae(s)&&[i,s].forEach(f=>{let p=r.getFieldValue(f,"__typename");typeof p=="string"&&!d.includes(p)&&d.push(p)}),!1}function fp(t,e,n){let r;for(let o of e.selections)if(_t(o)){if(o.name.value==="__typename")return t[ot(o)]}else r?r.push(o):r=[o];if(typeof t.__typename=="string")return t.__typename;if(r)for(let o of r){let i=fp(t,Wt(o,n).selectionSet,n);if(typeof i=="string")return i}}var Io=class extends Ti{data;optimisticData;config;watches=new Set;storeReader;storeWriter;addTypenameTransform=new zn(vr);maybeBroadcastWatch;assumeImmutableResults=!0;policies;makeVar=ap;constructor(...e){super(),this.config=xb(e[0]??{}),this.policies=new $l({cache:this,dataIdFromObject:this.config.dataIdFromObject,possibleTypes:this.config.possibleTypes,typePolicies:this.config.typePolicies}),this.init()}init(){let e=this.data=new Co.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=e.stump,this.resetResultCache()}resetResultCache(){let{fragments:e}=this.config;this.addTypenameTransform.resetCache(),e?.resetCaches(),this.storeWriter=new zl(this,this.storeReader=new Wl({cache:this,fragments:e}),e),this.maybeBroadcastWatch=qt((n,r)=>this.broadcastWatch(n,r),{max:me["inMemoryCache.maybeBroadcastWatch"]||5e3,makeCacheKey:n=>{let r=n.optimistic?this.optimisticData:this.data;if(qn(r)){let{optimistic:o,id:i,variables:s}=n;return r.makeCacheKey(n.query,n.callback,$e({optimistic:o,id:i,variables:s}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach(n=>n.resetCaching())}getRootTypename(e){return this.policies.rootTypenamesById[`ROOT_${e.toUpperCase()}`]}getScalar(e){return this.config.scalars?.[e]}getScalarTypeForField(e,n){return this.policies.getScalarTypeForField(e,n)}configuresScalars(){return!!this.config.scalars}serializeVariables(e,n){if(!n||Object.keys(n).length===0||!this.config.scalars&&!this.config.inputObjects)return n;let r=Pe(e)?.variableDefinitions?.reduce((o,i)=>(o[i.variable.name.value]=Ll(i.type),o),{});return!r||Object.keys(r).length===0?n:this.serializeVariablesValue(n,r)}serializeVariablesValue(e,n,r,o){if(e==null)return e;if(r){let i=vo(r);if(i){if(Array.isArray(e))return this.serializeInputArray(e,n,i[1],o);!1}let s=this.getScalar(zt(r));if(s)return s.coerceToSerialized(e)}return Array.isArray(e)?this.serializeInputArray(e,n,void 0,o):Xs(e)?this.serializeInputObject(e,n,o):e}serializeInputArray(e,n,r,o){let i=!1,s=e.map(c=>{let l=this.serializeVariablesValue(c,n,r,o);return i||=l!==c,l});return i?s:e}serializeInputObject(e,n,r){let o=!1,i=Object.entries(e).map(([s,c])=>{let l=n[s],u=r?`${r}.${s}`:s;if(!l)return[s,c];let d=this.config.inputObjects?.[zt(l)];if(d){let p=this.serializeVariablesValue(c,d.fields,void 0,u);return o||=p!==c,[s,p]}let f=this.serializeVariablesValue(c,n,l,u);return o||=f!==c,[s,f]});return o?Object.fromEntries(i):e}restore(e){return this.init(),e&&this.data.replace(e),this}extract(e=!1){return(e?this.optimisticData:this.data).extract()}read(e){let{query:n,variables:r,returnPartialData:o=!1}=e;return this.storeReader.diffQueryAgainstStore(C(S({},e),{variables:this.serializeVariables(n,r),store:e.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:o})).result}write(e){let{query:n,variables:r}=e;try{return++this.txCount,this.storeWriter.writeToStore(this.data,C(S({},e),{variables:this.serializeVariables(n,r)}))}finally{!--this.txCount&&e.broadcast!==!1&&this.broadcastWatches()}}modify(e){if(Ie.call(e,"id")&&!e.id)return!1;let n=e.optimistic?this.optimisticData:this.data;try{return++this.txCount,n.modify(e.id||"ROOT_QUERY",e.fields,!1)}finally{!--this.txCount&&e.broadcast!==!1&&this.broadcastWatches()}}diff(e){let{variables:n}=e;return this.storeReader.diffQueryAgainstStore(C(S({},e),{variables:this.serializeVariables(e.query,n),store:e.optimistic?this.optimisticData:this.data,rootId:e.id||"ROOT_QUERY",config:this.config}))}watch(e){return this.watches.size||Ub(this),this.watches.add(e),e.immediate&&this.maybeBroadcastWatch(e),()=>{this.watches.delete(e)&&!this.watches.size&&sp(this),this.maybeBroadcastWatch.forget(e)}}gc(e){$e.reset(),yr.reset();let n=this.optimisticData.gc();return e&&!this.txCount&&e.resetResultCache&&this.resetResultCache(),n}retain(e,n){return(n?this.optimisticData:this.data).retain(e)}release(e,n){return(n?this.optimisticData:this.data).release(e)}identify(e){if(X(e))return e.__ref;try{return this.policies.identify(e)[0]}catch(n){!1}}evict(e){if(!e.id){if(Ie.call(e,"id"))return!1;e=C(S({},e),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(e,this.data)}finally{!--this.txCount&&e.broadcast!==!1&&this.broadcastWatches()}}reset(e){return this.init(),$e.reset(),e&&e.discardWatches?(this.watches.forEach(n=>this.maybeBroadcastWatch.forget(n)),this.watches.clear(),sp(this)):this.broadcastWatches(),Promise.resolve()}removeOptimistic(e){let n=this.optimisticData.removeLayer(e);n!==this.optimisticData&&(this.optimisticData=n,this.broadcastWatches())}txCount=0;batch(e){let{update:n,optimistic:r=!0,removeOptimistic:o,onWatchUpdated:i}=e,s,c=u=>{let{data:d,optimisticData:f}=this;++this.txCount,u&&(this.data=this.optimisticData=u);try{return s=n(this)}finally{--this.txCount,this.data=d,this.optimisticData=f}},l=new Set;return i&&!this.txCount&&this.broadcastWatches(C(S({},e),{onWatchUpdated(u){return l.add(u),!1}})),typeof r=="string"?this.optimisticData=this.optimisticData.addLayer(r,c):r===!1?c(this.data):c(),typeof o=="string"&&(this.optimisticData=this.optimisticData.removeLayer(o)),i&&l.size?(this.broadcastWatches(C(S({},e),{onWatchUpdated(u,d){let f=i.call(this,u,d);return f!==!1&&l.delete(u),f}})),l.size&&l.forEach(u=>this.maybeBroadcastWatch.dirty(u))):this.broadcastWatches(e),s}performTransaction(e,n){return this.batch({update:e,optimistic:n||n!==null})}transformDocument(e){return this.addTypenameTransform.transformDocument(this.addFragmentsToDocument(e))}fragmentMatches(e,n){return this.policies.fragmentMatches(e,n)}lookupFragment(e){return this.config.fragments?.lookup(e)||null}resolvesClientField(e,n){return!!this.policies.getReadFunction(e,n)}broadcastWatches(e){if(!this.txCount){let n=this.onAfterBroadcast,r=new Set;this.onAfterBroadcast=o=>{r.add(o)};try{this.watches.forEach(o=>this.maybeBroadcastWatch(o,e)),r.forEach(o=>o())}finally{this.onAfterBroadcast=n}}}addFragmentsToDocument(e){let{fragments:n}=this.config;return n?n.transform(e):e}broadcastWatch(e,n){let{lastDiff:r}=e,o=this.diff(e);n&&(e.optimistic&&typeof n.optimistic=="string"&&(o.fromOptimisticTransaction=!0),n.onWatchUpdated&&n.onWatchUpdated.call(this,e,o,r)===!1)||(!r||!J(r.result,o.result))&&e.callback(e.lastDiff=o,r)}};!1;function Er(t,e){return typeof t=="object"&&t!==null&&t[Symbol.for("apollo.error")]===e}function Dr(t){Object.defineProperty(t,Symbol.for("apollo.error"),{value:t.name,enumerable:!1,writable:!1,configurable:!1})}function Jb(t){return t.map(e=>e.message||"Error message not found.").join(`
`)}var Ql=class t extends Error{static is(e){return Er(e,"CombinedProtocolErrors")}static formatMessage=Jb;errors;constructor(e){super(t.formatMessage(e,{defaultFormatMessage:Jb})),this.name="CombinedProtocolErrors",this.errors=e,Dr(this),Object.setPrototypeOf(this,t.prototype)}};function Xb(t){return t!==null&&typeof t=="object"&&typeof t.message=="string"&&typeof t.name=="string"&&(typeof t.stack=="string"||typeof t.stack>"u")}var Kl=class t extends Error{static is(e){return Er(e,"UnconventionalError")}constructor(e){super("An error of unexpected shape occurred.",{cause:e}),this.name="UnconventionalError",Dr(this),Object.setPrototypeOf(this,t.prototype)}};function eE(t){return t.filter(e=>e).map(e=>e.message||"Error message not found.").join(`
`)}var Qn=class t extends Error{static is(e){return Er(e,"CombinedGraphQLErrors")}static formatMessage=eE;errors;data;extensions;constructor(e,n=e.errors||[]){super(t.formatMessage(n,{result:e,defaultFormatMessage:eE})),this.errors=n,this.data=e.data,this.extensions=e.extensions,this.name="CombinedGraphQLErrors",Dr(this),Object.setPrototypeOf(this,t.prototype)}};var px=new WeakSet;function hp(t){px.add(t)}var ma=class t extends Error{static is(e){return Er(e,"ServerError")}response;statusCode;bodyText;constructor(e,n){super(e),this.name="ServerError",this.response=n.response,this.statusCode=n.response.status,this.bodyText=n.bodyText,Dr(this),Object.setPrototypeOf(this,t.prototype)}};var Yl=Symbol();function tE(t){return"extensions"in t?Ql.is(t.extensions[Yl]):!1}function nE(t){return Xb(t)?t:typeof t=="string"?new Error(t,{cause:t}):new Kl(t)}var Zl=new WeakMap;var V;(function(t){t[t.loading=1]="loading",t[t.setVariables=2]="setVariables",t[t.fetchMore=3]="fetchMore",t[t.refetch=4]="refetch",t[t.poll=6]="poll",t[t.ready=7]="ready",t[t.error=8]="error",t[t.streaming=9]="streaming"})(V||(V={}));var{assign:rE,hasOwnProperty:mx}=Object,Ii={loading:!0,networkStatus:V.loading,data:void 0,dataState:"empty",partial:!0},pp={loading:!1,networkStatus:V.ready,data:void 0,dataState:"empty",partial:!0},_i=new WeakMap;function mp(t,e){let n=t[e];typeof n=="function"&&(t[e]=function(){return _i.set(t,(_i.get(t)+1)%1e15),n.apply(this,arguments)})}var Mi=class{options;queryName;variablesUnknown=!1;didWarnOnFeud=!1;lastMissing;get query(){return this.lastQuery}get variables(){return this.options.variables}unsubscribeFromCache;input;subject;isTornDown;queryManager;subscriptions=new Set;waitForNetworkResult;lastQuery;linkSubscription;pollingInfo;get networkStatus(){return this.subject.getValue().result.networkStatus}get cache(){return this.queryManager.cache}constructor({queryManager:e,options:n,transformedQuery:r=e.transform(n.query)}){this.queryManager=e;let{cache:o}=e;_i.has(o)||(_i.set(o,0),mp(o,"evict"),mp(o,"modify"),mp(o,"reset")),this.waitForNetworkResult=n.fetchPolicy==="network-only",this.isTornDown=!1,this.subscribeToMore=this.subscribeToMore.bind(this),this.maskResult=this.maskResult.bind(this);let{watchQuery:{fetchPolicy:i="cache-first"}={}}=e.defaultOptions,{fetchPolicy:s=i,initialFetchPolicy:c=s==="standby"?i:s}=n;n[$h]&&(w(s==="standby",84),this.variablesUnknown=!0),this.lastQuery=r,this.options=C(S({},n),{initialFetchPolicy:c,fetchPolicy:s,variables:this.getVariablesWithDefaults(n.variables)}),this.initializeObservablesQueue(),this["@@observable"]=()=>this,Symbol.observable&&(this[Symbol.observable]=()=>this);let l=Pe(this.query);this.queryName=l&&l.name&&l.name.value}initializeObservablesQueue(){this.subject=new lt({query:this.query,variables:this.variables,result:Ii,meta:{}});let e=this.subject.pipe(En({subscribe:()=>{this.subject.observed||(this.reobserve(),setTimeout(()=>this.updatePolling()))},unsubscribe:()=>{this.subject.observed||this.tearDownQuery()}}),Di(({query:n,variables:r,result:o,meta:i},s)=>{let{shouldEmit:c}=i;if(o===Ii&&(s.previous=void 0,s.previousVariables=void 0),this.options.fetchPolicy==="standby"||c===2)return;if(c===1)return d();let{previous:l,previousVariables:u}=s;if(l){let f=this.queryManager.getDocumentInfo(n),p=this.queryManager.dataMasking,h=p?f.nonReactiveQuery:n;if((p||f.hasNonreactiveDirective?ia(h,l,o,r):J(l,o))&&J(u,r))return}if(c===3&&(!this.options.notifyOnNetworkStatusChange||J(l,o)))return;return d();function d(){return s.previous=o,s.previousVariables=r,o}},()=>({})));this.pipe=e.pipe.bind(e),this.subscribe=e.subscribe.bind(e),this.input=new ve,this.input.complete=()=>{},this.input.pipe(this.operator).subscribe(this.subject)}subscribe;pipe;[Symbol.observable];"@@observable";getCacheDiff({optimistic:e=!0}={}){return oa(this.cache.diff({query:this.query,variables:this.variables,returnPartialData:!0,optimistic:e,[gr]:void 0}))}getInitialResult(e){let n=e||this.options.fetchPolicy;this.queryManager.prioritizeCacheValues&&(n==="network-only"||n==="cache-and-network")&&(n="cache-first");let r=()=>{let o=this.getCacheDiff(),{dataState:i}=o,s=this.options.returnPartialData||o.complete?o.result??void 0:void 0;return s===void 0&&(i="empty"),this.maskResult({data:s,dataState:i,loading:!o.complete,networkStatus:o.complete?V.ready:V.loading,partial:!o.complete})};switch(n){case"cache-only":return C(S({},r()),{loading:!1,networkStatus:V.ready});case"cache-first":return r();case"cache-and-network":return C(S({},r()),{loading:!0,networkStatus:V.loading});case"standby":return pp;default:return Ii}}resubscribeCache(){let{variables:e,fetchPolicy:n}=this.options,r=this.query,o=n==="standby"||n==="no-cache"||this.waitForNetworkResult,i=!Jl({query:r,variables:e},this.unsubscribeFromCache)&&!this.waitForNetworkResult;if((o||i)&&this.unsubscribeFromCache?.(),o||!i)return;let s={query:r,variables:e,optimistic:!0,watcher:this,callback:l=>{let u=this.queryManager.getDocumentInfo(r);if((u.hasClientExports||u.hasForcedResolvers)&&(s.lastDiff=void 0),s.lastOwnDiff===l)return;let{result:d}=this.subject.getValue();!l.complete&&(d.error||d===Ii||d===pp)||J(d.data,l.result)||this.scheduleNotify()}},c=this.cache.watch(s);this.unsubscribeFromCache=Object.assign(()=>{this.unsubscribeFromCache=void 0,c()},{query:r,variables:e})}stableLastResult;getCurrentResult(){let{result:e}=this.subject.getValue(),n=e.networkStatus===V.error||this.hasObservers()||this.options.fetchPolicy==="no-cache"?e:this.getInitialResult();return n===Ii&&(n=this.getInitialResult()),J(this.stableLastResult,n)||(this.stableLastResult=n),this.stableLastResult}refetch(e){let{fetchPolicy:n}=this.options,r={pollInterval:0};if(n==="no-cache"?r.fetchPolicy="no-cache":r.fetchPolicy="network-only",!1){let o=Ks(this.query),i=o.variableDefinitions;(!i||!i.some(s=>s.variable.name.value==="variables"))&&!1&&w.warn(85,e,o.name?.value||o)}return e&&!J(this.variables,e)&&(r.variables=this.options.variables=this.getVariablesWithDefaults(S(S({},this.variables),e))),this._reobserve(r,{newNetworkStatus:V.refetch})}fetchMore({query:e,variables:n,context:r,errorPolicy:o,updateQuery:i}){w(this.options.fetchPolicy!=="cache-only",86,Ce(this.query,"(anonymous)"));let s=C(S({},St(this.options,{errorPolicy:"none"},{query:e,context:r,errorPolicy:o})),{variables:e?n:S(S({},this.variables),n),fetchPolicy:"no-cache",notifyOnNetworkStatusChange:this.options.notifyOnNetworkStatusChange});s.query=this.transformDocument(s.query),this.lastQuery=e?this.transformDocument(this.options.query):s.query;let c=!1,l=this.options.fetchPolicy!=="no-cache";l||w(i,87);let{finalize:u,pushNotification:d}=this.pushOperation(V.fetchMore);d({source:"newNetworkStatus",kind:"N",value:{}},{shouldEmit:3});let{promise:f,operator:p}=oE(),{observable:h}=this.queryManager.fetchObservableWithInfo(s,{networkStatus:V.fetchMore,exposeExtensions:!0}),m=h.pipe(p,Pt(v=>v.kind==="N"&&v.source==="network")).subscribe({next:v=>{c=!1;let y=v.value,b=y[aa];if(ua(v.value.networkStatus)&&u(),l){let D=this.getCacheDiff();this.cache.batch({update:P=>{i?P.updateQuery({query:this.query,variables:this.variables,returnPartialData:!0,optimistic:!1,extensions:b},_=>i(_,{fetchMoreResult:y.data,variables:s.variables})):P.writeQuery({query:s.query,variables:s.variables,data:y.data,extensions:b})},onWatchUpdated:(P,_)=>{if(P.watcher===this&&!J(_.result,D.result)){c=!0;let k=this.getCurrentResult();To(y.networkStatus)&&d({kind:"N",source:"network",value:C(S({},k),{networkStatus:y.networkStatus===V.error?V.ready:y.networkStatus,loading:!1,data:_.result,dataState:_.complete?"complete":"streaming"})})}}})}else{let D=this.getCurrentResult(),P=i(D.data,{fetchMoreResult:y.data,variables:s.variables});d({kind:"N",value:C(S({},D),{networkStatus:V.ready,loading:!1,data:P,dataState:D.dataState==="streaming"?"streaming":"complete"}),source:"network"})}}});return Al(f.then(v=>mr(this.maskResult(v))).finally(()=>{if(m.unsubscribe(),u(),l&&!c){let v=this.getCurrentResult();v.dataState==="streaming"?d({kind:"N",source:"network",value:C(S({},v),{dataState:"complete",networkStatus:V.ready})}):d({kind:"N",source:"newNetworkStatus",value:{}},{shouldEmit:1})}}))}subscribeToMore(e){let n=this.queryManager.startGraphQLSubscription({query:e.document,variables:e.variables,context:e.context}).subscribe({next:r=>{let{updateQuery:o,onError:i}=e,{error:s}=r;if(s){i?i(s):w.error(88,s);return}o&&this.updateQuery((c,l)=>o(c,S({subscriptionData:r},l)))}});return this.subscriptions.add(n),()=>{this.subscriptions.delete(n)&&n.unsubscribe()}}applyOptions(e){let n=St(this.options,e||{});rE(this.options,n),this.updatePolling()}async setVariables(e){return e=this.getVariablesWithDefaults(e),J(this.variables,e)?mr(this.getCurrentResult()):(this.options.variables=e,this.hasObservers()?this._reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:e},{newNetworkStatus:V.setVariables}):mr(this.getCurrentResult()))}updateQuery(e){let{queryManager:n}=this,{result:r,complete:o}=this.getCacheDiff({optimistic:!1}),i=e(r,{variables:this.variables,complete:!!o,previousData:r});i&&(this.cache.writeQuery({query:this.options.query,data:i,variables:this.variables}),n.broadcastQueries())}startPolling(e){this.options.pollInterval=e,this.updatePolling()}stopPolling(){this.options.pollInterval=0,this.updatePolling()}applyNextFetchPolicy(e,n){if(n.nextFetchPolicy){let{fetchPolicy:r="cache-first",initialFetchPolicy:o=r}=n;r==="standby"||(typeof n.nextFetchPolicy=="function"?n.fetchPolicy=n.nextFetchPolicy.call(n,r,{reason:e,options:n,observable:this,initialFetchPolicy:o}):e==="variables-changed"?n.fetchPolicy=o:n.fetchPolicy=n.nextFetchPolicy)}return n.fetchPolicy}fetch(e,n,r,o){let i=this.options.fetchPolicy;e.context??={};let s=!1,c=()=>{s=!0},l=y=>new F(b=>{try{return y.subscribe({next(D){s=!0,b.next(D)},error:D=>b.error(D),complete:()=>b.complete()})}finally{s||(h.override=n,this.input.next({kind:"N",source:"newNetworkStatus",value:{resetError:!0},query:f,variables:p,meta:{shouldEmit:3,fetchPolicy:i}}))}}),{observable:u,fromLink:d}=this.queryManager.fetchObservableWithInfo(e,{networkStatus:n,query:r,onCacheHit:c,fetchQueryOperator:l,observableQuery:this}),{query:f,variables:p}=this,h={abort:()=>{v.unsubscribe()},query:f,variables:p};this.activeOperations.add(h);let m=n==V.refetch||n==V.setVariables;u=u.pipe(o,Zt());let v=u.pipe(En({next:y=>{y.source==="newNetworkStatus"||y.kind==="N"&&y.value.loading?h.override=n:delete h.override},finalize:()=>this.activeOperations.delete(h)})).subscribe({next:y=>{let b={};m&&y.kind==="N"&&"loading"in y.value&&!y.value.loading&&(m=!1,b.shouldEmit=1),this.input.next(C(S({},y),{query:f,variables:p,meta:b}))}});return{fromLink:d,subscription:v,observable:u}}didWarnCacheOnlyPolling=!1;updatePolling(){if(this.queryManager.ssrMode)return;let{pollingInfo:e,options:{fetchPolicy:n,pollInterval:r}}=this,o=()=>{let{options:l}=this;return!l.pollInterval||!this.hasObservers()||l.fetchPolicy==="cache-only"||l.fetchPolicy==="standby"};if(o()){!1,this.cancelPolling();return}if(e?.interval===r)return;let i=e||(this.pollingInfo={});i.interval=r;let s=()=>{if(o())return this.cancelPolling();this.pollingInfo&&(!To(this.networkStatus)&&!this.options.skipPollAttempt?.()?this._reobserve({fetchPolicy:this.options.initialFetchPolicy==="no-cache"?"no-cache":"network-only"},{newNetworkStatus:V.poll}).then(c,c):c())},c=()=>{let l=this.pollingInfo;l&&(clearTimeout(l.timeout),l.timeout=setTimeout(s,l.interval))};c()}cancelPolling(){this.pollingInfo&&(clearTimeout(this.pollingInfo.timeout),delete this.pollingInfo)}reobserve(e){return this._reobserve(e)}_reobserve(e,n){this.isTornDown=!1;let{newNetworkStatus:r,keepLastMissing:o}=n||{};o||(this.lastMissing=void 0),this.queryManager.obsQueries.add(this);let i=r===V.refetch||r===V.poll,s=this.variables,c=this.options.fetchPolicy,l=St(this.options,e||{});this.variablesUnknown&&=l.fetchPolicy==="standby";let u=i?l:rE(this.options,l),d=this.transformDocument(u.query);this.lastQuery=d,e&&"variables"in e&&(u.variables=this.getVariablesWithDefaults(e.variables)),i||(this.updatePolling(),e&&e.variables&&!J(e.variables,s)&&u.fetchPolicy!=="standby"&&(u.fetchPolicy===c||typeof u.nextFetchPolicy=="function")&&(this.applyNextFetchPolicy("variables-changed",u),r===void 0&&(r=V.setVariables)));let f=this.networkStatus;r||(r=V.loading,f!==V.loading&&e?.variables&&!J(e.variables,s)&&(r=V.setVariables),u.fetchPolicy==="standby"&&(r=V.ready)),u.fetchPolicy==="standby"&&this.cancelPolling(),this.resubscribeCache();let{promise:p,operator:h}=oE(u.fetchPolicy==="standby"?{data:void 0}:void 0),{subscription:m,observable:v,fromLink:y}=this.fetch(u,r,d,h);!i&&(y||!this.linkSubscription)&&(this.linkSubscription&&this.linkSubscription.unsubscribe(),this.linkSubscription=m);let b=Object.assign(Al(p.then(D=>mr(this.maskResult(D))).finally(()=>{!this.hasObservers()&&this.activeOperations.size===0&&this.tearDownQuery()})),{retain:()=>{let D=v.subscribe({}),P=()=>D.unsubscribe();return p.then(P,P),b}});return b}hasObservers(){return this.subject.observed}stop(){this.subject.complete(),this.initializeObservablesQueue(),this.tearDownQuery()}tearDownQuery(){this.isTornDown||(this.resetNotifications(),this.unsubscribeFromCache?.(),this.linkSubscription&&(this.linkSubscription.unsubscribe(),delete this.linkSubscription),this.stopPolling(),this.subscriptions.forEach(e=>e.unsubscribe()),this.subscriptions.clear(),this.queryManager.obsQueries.delete(this),this.isTornDown=!0,this.abortActiveOperations(),this.lastMissing=void 0)}transformDocument(e){return this.queryManager.transform(e)}maskResult(e){let n=this.queryManager.maskOperation({document:this.query,data:e.data,fetchPolicy:this.options.fetchPolicy,cause:this});return n===e.data?e:C(S({},e),{data:n})}dirty=!1;notifyTimeout;resetNotifications(){this.notifyTimeout&&(clearTimeout(this.notifyTimeout),this.notifyTimeout=void 0),this.dirty=!1}scheduleNotify(){this.dirty||(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout(()=>this.notify(!0),0)))}notify(e=!1){if(!e){let l=this.queryManager.getDocumentInfo(this.query);if(l.hasClientExports||l.hasForcedResolvers)return}let{dirty:n,lastMissing:r}=this,{fetchPolicy:o}=this.options;if(this.resetNotifications(),!n||o!=="cache-only"&&o!=="cache-and-network"&&this.activeOperations.size)return;let i=this.getCacheDiff(),s=this.getCurrentResult();if(!J(i.result,this.getCacheDiff({optimistic:!1}).result)||!i.complete&&s.networkStatus===V.streaming){this.deliverCacheDiff(i);return}if(i.complete)this.lastMissing=void 0;else if(!r||r.dmCount!==_i.get(this.cache)||!J(r.variables,this.variables)||!J(r.missing,i.missing?.missing))this.didWarnOnFeud=!1,this.lastMissing={variables:this.variables,missing:i.missing?.missing,dmCount:_i.get(this.cache)};else if(o!=="cache-only"){s.dataState==="partial"&&this.deliverCacheDiff(i),!1;return}this.reobserveCacheFirst()}deliverCacheDiff(e){let n=this.getCurrentResult();this.input.next({kind:"N",value:{data:e.result,dataState:e.dataState,networkStatus:n.networkStatus,loading:n.loading,error:void 0,partial:!e.complete},source:"cache",query:this.query,variables:this.variables,meta:{}})}activeOperations=new Set;pushOperation(e){let n=!1,{query:r,variables:o}=this,i=()=>{this.activeOperations.delete(s)},s={override:e,abort:()=>{n=!0,i()},query:r,variables:o};return this.activeOperations.add(s),{finalize:i,pushNotification:(c,l)=>{n||this.input.next(C(S({},c),{query:r,variables:o,meta:S({},l)}))}}}calculateNetworkStatus(e){return e===V.streaming?e:Array.from(this.activeOperations.values()).reverse().find(r=>Jl(r,this)&&r.override!==void 0)?.override??e}abortActiveOperations(){this.activeOperations.forEach(e=>e.abort())}reset(){let e=this.options.fetchPolicy==="cache-only";this.lastMissing=void 0,this.setResult(e?pp:Ii,{shouldEmit:e?1:2}),this.abortActiveOperations()}setResult(e,n){this.input.next({source:"setResult",kind:"N",value:e,query:this.query,variables:this.variables,meta:S({},n)})}operator=Di(e=>{let{query:n,meta:r}=e;if(e.source==="setResult")return{query:n,variables:this.variables,result:e.value,meta:r};if(e.kind==="C")return;let o="resolvedVariables"in e?e.resolvedVariables:void 0;if(e.query!==this.query)return;if(!J(o,this.variables)){if(!J(e.variables,this.variables))return;o&&(this.options.variables=o,this.resubscribeCache())}let i=this.variables,s,c=this.subject.getValue();if(e.source==="cache"){if(s=e.value,s.networkStatus===V.ready&&s.dataState==="partial"&&(!this.options.returnPartialData||c.result.networkStatus===V.error)&&this.options.fetchPolicy!=="cache-only")return}else if(e.source==="network")this.waitForNetworkResult&&(this.waitForNetworkResult=!1,this.resubscribeCache()),s=e.kind==="E"?C(S({},Jl(c,e)||o&&J(o,c.variables)?c.result:{data:void 0,dataState:"empty",partial:!0}),{error:e.error,networkStatus:V.error,loading:!1}):e.value,e.kind==="E"&&s.dataState==="streaming"&&(s.dataState=Zl.get(e.error)??"complete"),s.error&&(r.shouldEmit=1);else if(e.source==="newNetworkStatus"){let l=Jl(c,e)?c.result:this.getInitialResult(r.fetchPolicy),{resetError:u}=e.value,d=u?void 0:l.error,f=d?V.error:V.ready;s=C(S({},l),{error:d,networkStatus:f})}return w(s),s.error||delete s.error,s.networkStatus=this.calculateNetworkStatus(s.networkStatus),s.loading=To(s.networkStatus),s=this.maskResult(s),c.result.data!==void 0&&s.data!==c.result.data&&J(s.data,c.result.data)&&(s.data=c.result.data),{query:n,variables:i,result:s,meta:r}});reobserveCacheFirst(){let{fetchPolicy:e,nextFetchPolicy:n}=this.options;e==="cache-and-network"||e==="network-only"?this._reobserve({fetchPolicy:"cache-first",nextFetchPolicy(r,o){return this.nextFetchPolicy=n,typeof this.nextFetchPolicy=="function"?this.nextFetchPolicy(r,o):e}},{keepLastMissing:!0}):this._reobserve(void 0,{keepLastMissing:!0})}getVariablesWithDefaults(e){return this.queryManager.getVariables(this.query,e)}};function iE(t){!1}function Jl(t,e){return!!(t&&e&&t.query===e.query&&J(t.variables,e.variables))}function oE(t){let e=t,n,r,o=new Promise((s,c)=>{n=s,r=c}),i=En({next(s){if(s.kind==="E")return r(s.error);s.kind==="N"&&s.source!=="newNetworkStatus"&&!s.value.loading&&(e=s.value)},finalize:()=>{if(e)n(e);else{let s="The operation was aborted.",c="AbortError";r(typeof DOMException<"u"?new DOMException(s,c):Object.assign(new Error(s),{name:c}))}}});return{promise:o,operator:i}}function gx(t,e){!1}var sE={},aE=new WeakMap,Pi=class{cache;queryManager;id;observableQuery;incremental;constructor(e,n){this.cache=e.cache;let r=(aE.get(e)||0)+1;aE.set(e,r),this.id=r+"",this.observableQuery=n,this.queryManager=e}get hasNext(){return this.incremental?this.incremental.hasNext:!1}get incrementalHandler(){return this.queryManager.incrementalHandler}maybeHandleIncrementalResult(e,n,r){return this.incrementalHandler.isIncrementalResult(n)?(this.incremental||=this.incrementalHandler.startRequest({query:r}),this.incremental.handle(e,n)):n}markQueryResult(e,{document:n,variables:r,errorPolicy:o,cacheWriteBehavior:i,returnPartialData:s,fetchPolicy:c,networkStatus:l,prunePendingDeferFragments:u}){let d={query:n,variables:r,optimistic:!0};this.observableQuery?.resetNotifications();let f=i===0,p=f?void 0:this.getDiff(C(S({},d),{returnPartialData:o!=="none"||!this.incrementalHandler.extractErrors(e)?.length}),this.getIncrementalInfo({prune:u})),h=this.maybeHandleIncrementalResult(p?.result,e,n),m=C(S({},h),{dataState:h.data==null?"empty":"complete"});return(this.incremental?.getPendingWithInfo?.().some(y=>y.type==="defer"&&!y.delivered)||!this.incremental?.getPendingWithInfo&&this.hasNext&&hn(["defer"],n))&&(m.dataState="streaming"),f||!gp(m,o)||this.cache.batch({onWatchUpdated:(y,b)=>{y.watcher===this.observableQuery&&(y.lastOwnDiff=b)},update:y=>{y.writeQuery({query:n,data:m.data,variables:r,overwrite:i===1,extensions:m.extensions});let{dataState:b,result:D}=this.getDiff(C(S({},d),{returnPartialData:s&&(c!=="network-only"||l===V.refetch)}),this.getIncrementalInfo({prune:u}));b==="complete"||b==="streaming"||s&&b==="partial"?m=C(S({},m),{data:D,dataState:b}):!1}}),m}getIncrementalInfo({prune:e}){let n=this.incremental?.getPendingWithInfo?.()??[],r=this.incremental?.streamInfo,o={streamInfo:r};if(e)for(let i of n)i.type==="defer"&&!i.delivered?(o.deferInfo||=new Me(!0,()=>!0),o.deferInfo.lookupArray(i.path.concat(i.label||[]))):r&&i.type==="stream"&&(r.lookupArray(i.path).state.truncate=!0);return o}getDiff(e,n){return oa(this.cache.diff(C(S({},e),{[gr]:n})))}markMutationResult(e,n,r=this.cache){let o=[],i=n.cacheWriteBehavior===0,s=this.maybeHandleIncrementalResult(i?void 0:r.diff({id:"ROOT_MUTATION",query:this.queryManager.getDocumentInfo(n.document).asQuery,variables:n.variables,optimistic:!1,returnPartialData:!0}).result,e,n.document);if(n.errorPolicy==="ignore"&&(s=C(S({},s),{errors:[]})),Gn(s)&&n.errorPolicy==="none")return Promise.resolve(s);let c=()=>C(S({},s),{dataState:this.hasNext?"streaming":"complete"});if(!i&&gp(s,n.errorPolicy)){o.push({result:s.data,dataId:"ROOT_MUTATION",query:n.document,variables:n.variables,extensions:s.extensions});let{updateQueries:u}=n;u&&this.queryManager.getObservableQueries("all").forEach(d=>{let f=d&&d.queryName;if(!f||!Object.hasOwnProperty.call(u,f))return;let p=u[f],{query:h,variables:m}=d,{result:v,complete:y}=d.getCacheDiff({optimistic:!1});if(y&&v){let b=p(v,{mutationResult:c(),queryName:h&&Ce(h)||void 0,queryVariables:m});b&&o.push({result:b,dataId:"ROOT_QUERY",query:h,variables:m})}})}let l=n.refetchQueries;if(typeof l=="function"&&(l=l(c())),o.length>0||(l||"").length>0||n.update||n.onQueryUpdated||n.removeOptimistic){let u=[];if(this.queryManager.refetchQueries({updateCache:d=>{i||o.forEach(p=>d.write(p));let{update:f}=n;if(!i){let p=d.diff({id:"ROOT_MUTATION",query:this.queryManager.getDocumentInfo(n.document).asQuery,variables:n.variables,optimistic:!1,returnPartialData:!0});p.complete&&(s=C(S({},s),{data:p.result}))}f&&!this.hasNext&&f(d,s,{context:n.context,variables:n.variables}),!i&&!n.keepRootFields&&!this.hasNext&&d.modify({id:"ROOT_MUTATION",fields(p,{fieldName:h,DELETE:m}){return h==="__typename"?p:m}})},include:l,optimistic:!1,removeOptimistic:n.removeOptimistic,onQueryUpdated:n.onQueryUpdated||null}).forEach(d=>u.push(d)),n.awaitRefetchQueries||n.onQueryUpdated)return Promise.all(u).then(()=>s)}return Promise.resolve(s)}markMutationOptimistic(e,n){let r=typeof e=="function"?e(n.variables,{IGNORE:sE}):e;return r===sE?!1:(this.cache.recordOptimisticTransaction(o=>{try{this.markMutationResult({data:r},n,o)}catch(i){w.error(i)}},this.id),!0)}markSubscriptionResult(e,{document:n,variables:r,errorPolicy:o,cacheWriteBehavior:i}){if(i!==0){if(gp(e,o)){this.cache.write({query:n,result:e.data,dataId:"ROOT_SUBSCRIPTION",variables:r,extensions:e.extensions});let s=this.cache.diff({query:this.queryManager.getDocumentInfo(n).asQuery,id:"ROOT_SUBSCRIPTION",variables:r,optimistic:!1,returnPartialData:!0});s.complete&&(e.data=s.result)}this.queryManager.broadcastQueries()}}};function yx(t,e,n){!1}function gp(t,e="none"){let n=e==="ignore"||e==="all",r=!Gn(t);return!r&&n&&t.data&&(r=!0),r}var Xl=class{defaultOptions;client;clientOptions;assumeImmutableResults;documentTransform;ssrMode;defaultContext;dataMasking;incrementalHandler;localState;queryDeduplication;prioritizeCacheValues=!1;onBroadcast;mutationStore;obsQueries=new Set;fetchCancelFns=new Map;constructor(e){let n=new zn(o=>this.cache.transformDocument(o),{cache:!1});this.client=e.client,this.defaultOptions=e.defaultOptions,this.queryDeduplication=e.queryDeduplication,this.clientOptions=e.clientOptions,this.ssrMode=e.ssrMode,this.assumeImmutableResults=e.assumeImmutableResults,this.dataMasking=e.dataMasking,this.localState=e.localState,this.incrementalHandler=e.incrementalHandler;let r=e.documentTransform;this.documentTransform=r?n.concat(r).concat(n):n,this.incrementalHandler.documentTransform&&(this.documentTransform=this.documentTransform.concat(this.incrementalHandler.documentTransform)),this.defaultContext=e.defaultContext||{},(this.onBroadcast=e.onBroadcast)&&(this.mutationStore={})}get link(){return this.client.link}get cache(){return this.client.cache}stop(){this.obsQueries.forEach(e=>e.stop()),this.cancelPendingFetches(we(93))}cancelPendingFetches(e){this.fetchCancelFns.forEach(n=>n(e)),this.fetchCancelFns.clear()}async mutate({mutation:e,variables:n,optimisticResponse:r,updateQueries:o,refetchQueries:i=[],awaitRefetchQueries:s=!1,update:c,onQueryUpdated:l,fetchPolicy:u,errorPolicy:d,keepRootFields:f,context:p}){let h=new Pi(this);e=this.cache.transformForLink(this.transform(e));let{hasClientExports:m}=this.getDocumentInfo(e);n=this.getVariables(e,n),m&&(!1,n=await this.localState.getExportedVariables({client:this.client,document:e,variables:n,context:p}));let v=this.mutationStore&&(this.mutationStore[h.id]={mutation:e,variables:this.cache.serializeVariables(e,n),loading:!0,error:null}),y=r&&h.markMutationOptimistic(r,{document:e,variables:n,cacheWriteBehavior:u==="no-cache"?0:2,errorPolicy:d,context:p,updateQueries:o,update:c,keepRootFields:f});return this.broadcastQueries(),new Promise((b,D)=>{let P={};return this.getObservableFromLink(e,C(S({},p),{optimisticResponse:y?r:void 0}),n,u,{},!1).observable.pipe(cE(),Mt(_=>{let k=S({},_);return Ve(h.markMutationResult(k,{document:e,variables:n,cacheWriteBehavior:u==="no-cache"?0:2,errorPolicy:d,context:p,update:c,updateQueries:o,awaitRefetchQueries:s,refetchQueries:i,removeOptimistic:y?h.id:void 0,onQueryUpdated:l,keepRootFields:f}))})).pipe(z(_=>{if(Gn(_)&&d==="none")throw new Qn(yp(_));return v&&(v.loading=!1,v.error=null),_})).subscribe({next:_=>{if(this.broadcastQueries(),!h.hasNext){let k={data:this.maskOperation({document:e,data:_.data,fetchPolicy:u,cause:P})};Gn(_)&&(k.error=new Qn(_)),Object.keys(_.extensions||{}).length&&(k.extensions=_.extensions),b(k)}},error:_=>{if(v&&(v.loading=!1,v.error=_),y&&this.cache.removeOptimistic(h.id),this.broadcastQueries(),d==="ignore")return b({data:void 0});if(d==="all")return b({data:void 0,error:_});D(_)}})})}fetchQuery(e,n){return at(e.query,vt.QUERY),(async()=>Nu(this.fetchObservableWithInfo(e,{networkStatus:n}).observable.pipe(Di(r=>{switch(r.kind){case"E":throw r.error;case"N":if(r.source!=="newNetworkStatus")return mr(r.value)}})),{defaultValue:{data:void 0}}))()}transform(e){return this.documentTransform.transformDocument(e)}transformCache=new yo(me["queryManager.getDocumentInfo"]||2e3);getDocumentInfo(e){let{transformCache:n}=this;if(!n.has(e)){let o=Pe(e),i={hasClientExports:hn(["client","export"],e,!0),hasForcedResolvers:Nh(e),hasNonreactiveDirective:hn(["nonreactive"],e),hasIncrementalDirective:hn(["defer"],e),nonReactiveQuery:Sx(e),clientQuery:hn(["client"],e)?e:null,serverQuery:Hh([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"},{name:"unmask"}],e),operationType:o?.operation,defaultVars:So(o),asQuery:C(S({},e),{definitions:e.definitions.map(s=>s.kind==="OperationDefinition"&&s.operation!=="query"?C(S({},s),{operation:"query"}):s)})};n.set(e,i)}let r=n.get(e);if(r.violation)throw r.violation;return r}getVariables(e,n){let r=this.getDocumentInfo(e).defaultVars,o=Object.entries(n??{}).map(([i,s])=>[i,s===void 0?r[i]:s]);return S(S({},r),Object.fromEntries(o))}watchQuery(e){at(e.query,vt.QUERY);let n=this.transform(e.query);return e=C(S({},e),{variables:this.getVariables(n,e.variables)}),typeof e.notifyOnNetworkStatusChange>"u"&&(e.notifyOnNetworkStatusChange=!0),new Mi({queryManager:this,options:e,transformedQuery:n})}query(e){let n=this.transform(e.query);return this.fetchQuery(C(S({},e),{query:n})).then(r=>C(S({},r),{data:this.maskOperation({document:n,data:r?.data,fetchPolicy:e.fetchPolicy})}))}clearStore(e={discardWatches:!0}){return this.cancelPendingFetches(we(95)),this.obsQueries.forEach(n=>{n.reset()}),this.mutationStore&&(this.mutationStore={}),this.cache.reset(e)}getObservableQueries(e="active"){let n=new Set,r=new Map,o=new Map,i=new Set;return Array.isArray(e)&&e.forEach(s=>{if(typeof s=="string")r.set(s,s),o.set(s,!1);else if(Rh(s)){let c=yr(this.transform(s));r.set(c,Ce(s)),o.set(c,!1)}else le(s)&&s.query&&i.add(s)}),this.obsQueries.forEach(s=>{let c=yr(this.transform(s.options.query));if(e==="all"){n.add(s);return}let{queryName:l,options:{fetchPolicy:u}}=s;e==="active"&&u==="standby"||(e==="active"||l&&o.has(l)||c&&o.has(c))&&(n.add(s),l&&o.set(l,!0),c&&o.set(c,!0))}),i.size&&i.forEach(s=>{let c=new Mi({queryManager:this,options:C(S({},Do(this.defaultOptions.watchQuery,s)),{fetchPolicy:"network-only"})});n.add(c)}),!1,n}refetchObservableQueries(e=!1){let n=[];return this.getObservableQueries(e?"all":"active").forEach(r=>{let{fetchPolicy:o}=r.options;(e||o!=="standby")&&o!=="cache-only"&&n.push(r.refetch())}),this.broadcastQueries(),Promise.all(n)}startGraphQLSubscription(e){let{query:n,variables:r}=e,{fetchPolicy:o="cache-first",errorPolicy:i="none",context:s={},extensions:c={}}=e;at(n,vt.SUBSCRIPTION),n=this.transform(n),r=this.getVariables(n,r);let l;!1;let u=(this.getDocumentInfo(n).hasClientExports?Ve(this.localState.getExportedVariables({client:this.client,document:n,variables:r,context:s})):We(r)).pipe(Mt(d=>{let{observable:f,restart:p}=this.getObservableFromLink(n,s,d,o,c),h=new Pi(this);return l=p,f.pipe(z(m=>{h.markSubscriptionResult(m,{document:n,variables:d,errorPolicy:i,cacheWriteBehavior:o==="no-cache"?0:2});let v={data:m.data??void 0};return Gn(m)?v.error=new Qn(m):tE(m)&&(v.error=m.extensions[Yl],delete m.extensions[Yl]),m.extensions&&Object.keys(m.extensions).length&&(v.extensions=m.extensions),v.error&&i==="none"&&(v.data=void 0),i==="ignore"&&delete v.error,v}),er(m=>i==="ignore"?We({data:void 0}):We({data:void 0,error:m})),Pt(m=>!!(m.data||m.error)))}));return Object.assign(u,{restart:()=>l?.()})}broadcastQueries(){this.onBroadcast&&this.onBroadcast(),this.obsQueries.forEach(e=>e.notify())}inFlightLinkObservables=new Me(!1);getObservableFromLink(e,n,r,o,i,s=n?.queryDeduplication??this.queryDeduplication){let c={},{serverQuery:l,clientQuery:u,operationType:d,hasIncrementalDirective:f}=this.getDocumentInfo(e),p=Ce(e),h={client:this.client};if(r=this.cache.serializeVariables(e,r),l){let{inFlightLinkObservables:v,link:y}=this;try{let D=function(P){return new F(_=>{function k(){return P.subscribe({next:_.next.bind(_),complete:_.complete.bind(_),error:_.error.bind(_)})}let ee=k();return c.restart||=()=>{ee.unsubscribe(),ee=k()},()=>{ee.unsubscribe(),c.restart=void 0}})};var m=D;let b=this.incrementalHandler.prepareRequest({query:l,variables:r,context:C(S(S({},this.defaultContext),n),{queryDeduplication:s}),extensions:i});if(n=b.context,s){let P=yr(l),_=$e(r);c=v.lookup(P,_),c.observable||(c.observable=wo(y,b,h).pipe(D,tr(()=>{v.peek(P,_)===c&&v.remove(P,_)}),d===vt.SUBSCRIPTION?Zt():bn({refCount:!0})))}else c.observable=wo(y,b,h).pipe(D)}catch(b){c.observable=Bi(()=>b)}}else c.observable=We({data:{}});if(u){let{operation:v}=Pe(e);!1,w(!f,100,v[0].toUpperCase()+v.slice(1),p??"(anonymous)"),c.observable=c.observable.pipe(Mt(y=>Ve(this.localState.execute({client:this.client,document:u,remoteResult:y,context:n,variables:r,fetchPolicy:o}))))}return{restart:()=>c.restart?.(),observable:c.observable.pipe(er(v=>{throw v=nE(v),hp(v),v}))}}getResultsFromLink(e,{queryInfo:n,cacheWriteBehavior:r,observableQuery:o,exposeExtensions:i,prunePendingDeferFragments:s}){let{errorPolicy:c}=e,l=this.cache.transformForLink(e.query);return this.getObservableFromLink(l,e.context,e.variables,e.fetchPolicy).observable.pipe(z(u=>{let v=n.markQueryResult(u,C(S({},e),{document:l,cacheWriteBehavior:r,returnPartialData:e.returnPartialData,prunePendingDeferFragments:s})),{dataState:d}=v,f=ge(v,["dataState"]),p=Gn(f);if(p&&c==="none"){o?.resetNotifications();let y=new Qn(yp(f));throw Zl.set(y,d),y}let h=d!=="complete",m=S({data:f.data},n.hasNext?{loading:!0,networkStatus:V.streaming,dataState:d,partial:h}:{dataState:d,loading:!1,networkStatus:V.ready,partial:h});return i&&"extensions"in f&&(m[aa]=f.extensions),p&&c!=="ignore"&&(m.error=new Qn(yp(f)),m.networkStatus!==V.streaming&&(m.networkStatus=V.error)),m}),er(u=>{if(c==="none")throw o?.resetNotifications(),u;let d={data:void 0,dataState:"empty",loading:!1,networkStatus:V.ready,partial:!0};return c!=="ignore"&&(d.error=u,d.networkStatus=V.error),We(d)}))}fetchObservableWithInfo(e,{networkStatus:n=V.loading,query:r=e.query,fetchQueryOperator:o=l=>l,onCacheHit:i=()=>{},observableQuery:s,exposeExtensions:c}){let l=this.getVariables(r,e.variables),{fetchPolicy:u="cache-first",errorPolicy:d="none",returnPartialData:f=!1,notifyOnNetworkStatusChange:p=!0,context:h={}}=e;this.prioritizeCacheValues&&(u==="network-only"||u==="cache-and-network")&&(u="cache-first");let m=Object.assign({},e,{query:r,variables:l,fetchPolicy:u,errorPolicy:d,returnPartialData:f,networkStatus:n,notifyOnNetworkStatusChange:p,context:h}),v=new Pi(this,s),y=k=>{m.variables=k;let ee=u==="no-cache"?0:n===V.refetch&&m.refetchWritePolicy!=="merge"?1:2,Ze=this.fetchQueryByPolicy(m,{queryInfo:v,cacheWriteBehavior:ee,onCacheHit:i,observableQuery:s,exposeExtensions:c});return Ze.observable=Ze.observable.pipe(o),m.fetchPolicy!=="standby"&&s?.applyNextFetchPolicy("after-fetch",e),Ze},b=()=>{this.fetchCancelFns.delete(v.id)};this.fetchCancelFns.set(v.id,k=>{D.next({kind:"E",error:k,source:"network"})});let D=new ve,P,_;if(this.getDocumentInfo(m.query).hasClientExports)!1,P=Ve(this.localState.getExportedVariables({client:this.client,document:m.query,variables:m.variables,context:m.context})).pipe(Mt(k=>y(k).observable)),_=!0;else{let k=y(m.variables);_=k.fromLink,P=k.observable}return{observable:new F(k=>{k.add(b),P.subscribe(k),D.subscribe(k)}).pipe(Zt()),fromLink:_}}refetchQueries({updateCache:e,include:n,optimistic:r=!1,removeOptimistic:o=r?zs("refetchQueries"):void 0,onQueryUpdated:i}){let s=new Map;n&&this.getObservableQueries(n).forEach(l=>{if(l.options.fetchPolicy==="cache-only"||l.variablesUnknown)return;let u=l.getCurrentResult();s.set(l,{oq:l,lastDiff:{result:u?.data,complete:!u?.partial}})});let c=new Map;if(e){let l=new Set;this.cache.batch({update:e,optimistic:r&&o||!1,removeOptimistic:o,onWatchUpdated(u,d,f){let p=u.watcher;if(p instanceof Mi&&!l.has(p)){if(l.add(p),i){s.delete(p);let h=i(p,d,f);return h===!0&&(h=p.refetch().retain()),h!==!1&&c.set(p,h),h}i!==null&&p.options.fetchPolicy!=="cache-only"&&s.set(p,{oq:p,lastDiff:f,diff:d})}}})}return s.size&&s.forEach(({oq:l,lastDiff:u,diff:d})=>{let f;i&&(d||(d=l.getCacheDiff()),f=i(l,d,u)),(!i||f===!0)&&(f=l.refetch().retain()),f!==!1&&c.set(l,f)}),o&&this.cache.removeOptimistic(o),c}noCacheWarningsByCause=new WeakSet;maskOperation(e){let{document:n,data:r}=e;if(!1){let{fetchPolicy:o,cause:i={}}=e,s=Pe(n)?.operation;this.dataMasking&&o==="no-cache"&&!vx(n)&&!this.noCacheWarningsByCause.has(i)&&(this.noCacheWarningsByCause.add(i),!1)}return this.dataMasking?ep(r,n,this.cache):r}maskFragment(e){let{data:n,fragment:r,fragmentName:o}=e;return this.dataMasking?Xh(n,r,this.cache,o):n}fetchQueryByPolicy({query:e,variables:n,fetchPolicy:r,errorPolicy:o,returnPartialData:i,context:s,networkStatus:c},{cacheWriteBehavior:l,onCacheHit:u,queryInfo:d,observableQuery:f,exposeExtensions:p}){let h=()=>d.getDiff({query:e,variables:n,returnPartialData:!0,optimistic:!0}),m=(y,b)=>{let D=y.result;!1;let P=(k,ee=y.dataState)=>(!y.complete&&!i&&(k=void 0,ee="empty"),{data:k,dataState:ee,loading:To(b),networkStatus:b,partial:!y.complete}),_=k=>We({kind:"N",value:P(k),resolvedVariables:n,source:"cache"});return(y.complete||i)&&this.getDocumentInfo(e).hasForcedResolvers?(!1,u(),Ve(this.localState.execute({client:this.client,document:e,remoteResult:D?{data:D}:void 0,context:s,variables:n,onlyRunForcedResolvers:!0,returnPartialData:!0,fetchPolicy:r}).then(k=>({kind:"N",value:P(k.data||void 0,y.complete?"complete":k.data?"partial":"empty"),resolvedVariables:n,source:"cache"})))):o==="none"&&b===V.refetch&&y.missing?_(void 0):_(D||void 0)},v=({prunePendingDeferFragments:y=!0}={})=>this.getResultsFromLink({query:e,variables:n,context:s,fetchPolicy:r,errorPolicy:o,returnPartialData:i,networkStatus:c},{cacheWriteBehavior:l,queryInfo:d,observableQuery:f,exposeExtensions:p,prunePendingDeferFragments:y}).pipe(cE(),Au(),z(b=>C(S({},b),{resolvedVariables:n,source:"network"})));switch(r){default:case"cache-first":{let y=h();return y.complete?{fromLink:!1,observable:m(y,V.ready)}:i?{fromLink:!0,observable:Xn(m(y,V.loading),v())}:{fromLink:!0,observable:v()}}case"cache-and-network":{let y=h();return y.complete||i?{fromLink:!0,observable:Xn(m(y,V.loading),v({prunePendingDeferFragments:!1}))}:{fromLink:!0,observable:v()}}case"cache-only":return{fromLink:!1,observable:Xn(m(h(),V.ready))};case"network-only":return{fromLink:!0,observable:v({prunePendingDeferFragments:c!==V.refetch})};case"no-cache":return{fromLink:!0,observable:v().pipe(z(y=>(y.kind==="N"&&y.value.data!=null&&this.cache.configuresScalars()&&(y.value.data=Mh(y.value.data,e,this.cache)),y)))};case"standby":return{fromLink:!1,observable:Yt}}}};function cE(){let t=!1;return En({next(){t=!0},complete(){w(t,104)}})}function vx(t){let e=!0;return Ae(t,{FragmentSpread:n=>{if(e=!!n.directives&&n.directives.some(r=>r.name.value==="unmask"),!e)return jn}}),e}function Sx(t){return Ae(t,{FragmentSpread:e=>{if(!e.directives?.some(n=>n.name.value==="unmask"))return C(S({},e),{directives:[...e.directives||[],{kind:T.DIRECTIVE,name:{kind:T.NAME,value:"nonreactive"}}]})}})}function yp(t){var s;if(t.extensions?.[gn]==null)return t;let o=t,{extensions:i}=o,c=i,{[s=gn]:e}=c,n=ge(c,[Ca(s)]),r=ge(o,["extensions"]);return Object.keys(n).length>0&&(r.extensions=n),r}var lE=!1,_o=class{link;cache;disableNetworkFetches;set prioritizeCacheValues(e){this.queryManager.prioritizeCacheValues=e}get prioritizeCacheValues(){return this.queryManager.prioritizeCacheValues}version;queryDeduplication;defaultOptions;devtoolsConfig;refetchEventManager;queryManager;devToolsHookCb;resetStoreCallbacks=[];clearStoreCallbacks=[];constructor(e){!1;let{cache:n,documentTransform:r,ssrMode:o=!1,ssrForceFetchDelay:i=0,queryDeduplication:s=!0,defaultOptions:c,defaultContext:l,assumeImmutableResults:u=n.assumeImmutableResults,localState:d,devtools:f,dataMasking:p,link:h,incrementalHandler:m=new ca,experiments:v=[],refetchEventManager:y}=e;this.link=h,this.cache=n,this.queryDeduplication=s,this.defaultOptions=c||{},this.devtoolsConfig=C(S({},f),{enabled:f?.enabled??!1}),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.watchFragment=this.watchFragment.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.refetchObservableQueries=this.refetchObservableQueries.bind(this),this.version=Ws,this.queryManager=new Xl({client:this,defaultOptions:this.defaultOptions,defaultContext:l,documentTransform:r,queryDeduplication:s,ssrMode:o,dataMasking:!!p,clientOptions:e,incrementalHandler:m,assumeImmutableResults:u,onBroadcast:this.devtoolsConfig.enabled?()=>{this.devToolsHookCb&&this.devToolsHookCb()}:void 0,localState:d}),this.prioritizeCacheValues=o||i>0,i&&setTimeout(()=>{this.prioritizeCacheValues=!1},i),this.devtoolsConfig.enabled&&this.connectToDevTools(),v.forEach(b=>b.call(this,e)),this.refetchEventManager=y,this.refetchEventManager?.connect(this)}connectToDevTools(){if(typeof window>"u")return;let e=window,n=Symbol.for("apollo.devtools");if((e[n]=e[n]||[]).push(this),e.__APOLLO_CLIENT__=this,!lE&&!1){lE=!0;let r=window,o=r.navigator.userAgent,i;typeof o=="string"&&(o.indexOf("Chrome/")>-1?i="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":o.indexOf("Firefox/")>-1&&(i="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),r.document&&r.top===r.self&&/^(https?|file):$/.test(r.location.protocol)&&i&&setTimeout(()=>{r.__APOLLO_DEVTOOLS_GLOBAL_HOOK__||!1},1e4)}}get documentTransform(){return this.queryManager.documentTransform}get localState(){return this.queryManager.localState}set localState(e){this.queryManager.localState=e}stop(){this.queryManager.stop(),this.refetchEventManager?.disconnect(this)}watchQuery(e){let{refetchOn:n}=e;if(this.defaultOptions.watchQuery){let r=this.defaultOptions.watchQuery.refetchOn,o;n&&typeof n=="object"&&(typeof r=="object"?o=S(S({},r),n):r!=null&&(o=i=>{let s=n[i.source]??r;return typeof s=="function"?s(i):s})),e=Do(this.defaultOptions.watchQuery,e),o&&(e.refetchOn=o)}if(!1){let{query:r}=e,{refetchEventManager:o}=this;if(n){let i=Ce(r,"(anonymous)");o?typeof n=="object"&&Object.keys(n).forEach(s=>{o.hasSource(s)||!1}):!1}}return this.queryManager.watchQuery(e)}query=e=>(this.defaultOptions.query&&(e=Do(this.defaultOptions.query,e)),!1,this.queryManager.query(e));mutate=e=>{let n=Do(St({fetchPolicy:"network-only",errorPolicy:"none"},this.defaultOptions.mutate),e);return!1,at(n.mutation,vt.MUTATION),this.queryManager.mutate(n)};subscribe(e){let n={},r=this.queryManager.startGraphQLSubscription(e),o=r.pipe(z(i=>C(S({},i),{data:this.queryManager.maskOperation({document:e.query,data:i.data,fetchPolicy:e.fetchPolicy,cause:n})})));return Object.assign(o,{restart:r.restart})}readQuery(e,n=!!e.optimistic){return this.cache.readQuery(C(S({},e),{query:this.transform(e.query)}),n)}watchFragment(e){let n=this.queryManager.dataMasking,r=this.cache.watchFragment(C(S({},e),{fragment:this.transform(e.fragment,n)}));return r}readFragment(e,n=!!e.optimistic){return this.cache.readFragment(C(S({},e),{fragment:this.transform(e.fragment)}),n)}writeQuery(e){let n=this.cache.writeQuery(e);return e.broadcast!==!1&&this.queryManager.broadcastQueries(),n}writeFragment(e){let n=this.cache.writeFragment(e);return e.broadcast!==!1&&this.queryManager.broadcastQueries(),n}__actionHookForDevTools(e){this.devToolsHookCb=e}__requestRaw(e){return wo(this.link,e,{client:this})}resetStore(){return Promise.resolve().then(()=>this.queryManager.clearStore({discardWatches:!1})).then(()=>Promise.all(this.resetStoreCallbacks.map(e=>e()))).then(()=>this.refetchObservableQueries())}clearStore(){return Promise.resolve().then(()=>this.queryManager.clearStore({discardWatches:!0})).then(()=>Promise.all(this.clearStoreCallbacks.map(e=>e())))}onResetStore(e){return this.resetStoreCallbacks.push(e),()=>{this.resetStoreCallbacks=this.resetStoreCallbacks.filter(n=>n!==e)}}onClearStore(e){return this.clearStoreCallbacks.push(e),()=>{this.clearStoreCallbacks=this.clearStoreCallbacks.filter(n=>n!==e)}}reFetchObservableQueries;refetchObservableQueries(e){return this.queryManager.refetchObservableQueries(e)}refetchQueries(e){let n=this.queryManager.refetchQueries(e),r=[],o=[];n.forEach((s,c)=>{r.push(c),o.push(s)});let i=Promise.all(o);return i.queries=r,i.results=o,i.catch(s=>{!1}),i}getObservableQueries(e="active"){return this.queryManager.getObservableQueries(e)}extract(e){return this.cache.extract(e)}restore(e){return this.cache.restore(e)}setLink(e){this.link=e}get defaultContext(){return this.queryManager.defaultContext}maskedFragmentTransform=new zn(Vh);transform(e,n=!1){let r=this.queryManager.transform(e);return n?this.maskedFragmentTransform.transformDocument(r):r}};!1;var eu=new Map,vp=new Map,uE=!0,ya=!1;function dE(t){return t.replace(/[\s,]+/g," ").trim()}function bx(t){return dE(t.source.body.substring(t.start,t.end))}function Ex(t){var e=new Set,n=[];return t.definitions.forEach(function(r){if(r.kind==="FragmentDefinition"){var o=r.name.value,i=bx(r.loc),s=vp.get(o);s&&!s.has(i)?uE&&console.warn("Warning: fragment with name "+o+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):s||vp.set(o,s=new Set),s.add(i),e.has(i)||(e.add(i),n.push(r))}else n.push(r)}),ji(ji({},t),{definitions:n})}function Dx(t){var e=new Set(t.definitions);e.forEach(function(r){r.loc&&delete r.loc,Object.keys(r).forEach(function(o){var i=r[o];i&&typeof i=="object"&&e.add(i)})});var n=t.loc;return n&&(delete n.startToken,delete n.endToken),t}function Tx(t){var e=dE(t);if(!eu.has(e)){var n=Nl(t,{experimentalFragmentVariables:ya,allowLegacyFragmentVariables:ya,experimentalFragmentArguments:ya});if(!n||n.kind!=="Document")throw new Error("Not a valid GraphQL document.");eu.set(e,Dx(Ex(n)))}return eu.get(e)}function Tr(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];typeof t=="string"&&(t=[t]);var r=t[0];return e.forEach(function(o,i){o&&o.kind==="Document"?r+=o.loc.source.body:r+=o,r+=t[i+1]}),Tx(r)}function fE(){eu.clear(),vp.clear()}function hE(){uE=!1}function pE(){ya=!0}function mE(){ya=!1}var ga={gql:Tr,resetCaches:fE,disableFragmentWarnings:hE,enableExperimentalFragmentVariables:pE,disableExperimentalFragmentVariables:mE};(function(t){t.gql=ga.gql,t.resetCaches=ga.resetCaches,t.disableFragmentWarnings=ga.disableFragmentWarnings,t.enableExperimentalFragmentVariables=ga.enableExperimentalFragmentVariables,t.disableExperimentalFragmentVariables=ga.disableExperimentalFragmentVariables})(Tr||(Tr={}));Tr.default=Tr;function gE(t){return new F(e=>(t().then(n=>{e.closed||(e.next(n),e.complete())},n=>{e.closed||e.error(n)}),()=>e.unsubscribe()))}function wx(t,e){return e?t.pipe(z(n=>C(S({},n),{loading:!1})),jo({data:void 0,loading:!0})):t.pipe(z(n=>C(S({},n),{loading:!1})))}var bp=class{zone;constructor(e){this.zone=e}now=Date.now;schedule(e,n=0,r){return this.zone.run(()=>xu.schedule(e,n,r))}};function Ep(t,e){return t.pipe(Fr(new bp(e)))}var Dp=class{obsQuery;valueChanges;constructor(e,n){this.obsQuery=e,this.valueChanges=Ep(Ve(this.obsQuery),n)}get options(){return this.obsQuery.options}get variables(){return this.obsQuery.variables}getCurrentResult(){return this.obsQuery.getCurrentResult()}refetch(e){return this.obsQuery.refetch(e)}fetchMore(e){return this.obsQuery.fetchMore(e)}subscribeToMore(e){return this.obsQuery.subscribeToMore(e)}updateQuery(e){return this.obsQuery.updateQuery(e)}stopPolling(){return this.obsQuery.stopPolling()}startPolling(e){return this.obsQuery.startPolling(e)}setVariables(e){return this.obsQuery.setVariables(e)}reobserve(e){return this.obsQuery.reobserve(e)}},yE=new H("APOLLO_FLAGS"),vE=new H("APOLLO_OPTIONS"),Cx=new H("APOLLO_NAMED_OPTIONS"),tu=class{ngZone;flags;_client;useMutationLoading;constructor(e,n,r){this.ngZone=e,this.flags=n,this._client=r,this.useMutationLoading=n?.useMutationLoading??!1}watchQuery(e){return new Dp(this.ensureClient().watchQuery(S({},e)),this.ngZone)}query(e){return gE(()=>this.ensureClient().query(S({},e)))}mutate(e){return wx(gE(()=>this.ensureClient().mutate(S({},e))),e.useMutationLoading??this.useMutationLoading)}watchFragment(e){let i=e,{useZone:n}=i,r=ge(i,["useZone"]),o=this.ensureClient().watchFragment(S({},r));return n!==!0?o:Ep(o,this.ngZone)}subscribe(e){let i=e,{useZone:n}=i,r=ge(i,["useZone"]),o=this.ensureClient().subscribe(S({},r));return n!==!0?o:Ep(o,this.ngZone)}get client(){return this.ensureClient()}set client(e){if(this._client)throw new Error("Client has been already defined");this._client=e}ensureClient(){return this.checkInstance(),this._client}checkInstance(){if(this._client)return!0;throw new Error("Client has not been defined yet")}},Tp=(()=>{class t extends tu{map=new Map;constructor(n,r,o,i){if(super(n,i),r&&this.createDefault(r),o&&typeof o=="object"){for(let s in o)if(o.hasOwnProperty(s)){let c=o[s];this.create(c,s)}}}create(n,r){Sp(r)?this.createNamed(r,n):this.createDefault(n)}default(){return this}use(n){return Sp(n)?this.map.get(n):this.default()}createDefault(n){if(this._client)throw new Error("Apollo has been already created.");this.client=this.ngZone.runOutsideAngular(()=>new _o(n))}createNamed(n,r){if(this.map.has(n))throw new Error(`Client ${n} has been already created`);this.map.set(n,new tu(this.ngZone,this.flags,this.ngZone.runOutsideAngular(()=>new _o(r))))}removeClient(n){Sp(n)?this.map.delete(n):this._client=void 0}static \u0275fac=function(r){return new(r||t)(q(Ue),q(vE,8),q(Cx,8),q(yE,8))};static \u0275prov=Y({token:t,factory:t.\u0275fac})}return t})();function Sp(t){return!!t&&t!=="default"}function SE(t,e={}){return[Tp,{provide:vE,useFactory:t},{provide:yE,useValue:e}]}var Ix=Tr,wp=Ix;var bE=wp`
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
`,EE=wp`
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
`;var DE=(()=>{class t{constructor(n){this.apollo=n}getAbilities(){return this.pokemon.pipe(z(n=>n.getPokemon.abilities))}getDexNumber(){return this.pokemon.pipe(z(n=>n.getPokemon.num))}getMove(n){return this.apollo.query({query:EE,variables:{move:n}}).pipe(z(r=>r.data),Pt(r=>r!==void 0))}getMoves(){return this.pokemon.pipe(z(n=>{let r=[],o=["dreamworldMoves","eggMoves","eventMoves","tmMoves","tutorMoves","virtualTransferMoves","levelUpMoves"],i=c=>{c&&Object.keys(c).forEach(l=>{let u=c[l];u&&o.forEach(d=>{let f=u[d];Array.isArray(f)&&f.forEach(p=>{r.push(p.move)})})})},s=c=>{c&&c.forEach(l=>{i(l.learnsets),s(l.preevolutions),s(l.evolutions)})};return i(n.getPokemon.learnsets),s(n.getPokemon.preevolutions??null),s(n.getPokemon.evolutions??null),r}))}getPokemon(n){return this.pokemon=this.apollo.query({query:bE,variables:{pokemon:n}}).pipe(z(r=>r.data),Pt(r=>r!==void 0),bn({bufferSize:1,refCount:!0})),this.pokemon}getStats(){return this.pokemon.pipe(z(n=>n.getPokemon.baseStats))}getTypes(){return this.pokemon.pipe(z(n=>n.getPokemon.types))}static{this.\u0275fac=function(r){return new(r||t)(q(Tp))}}static{this.\u0275prov=Y({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function va(t,e){return(t==="5"?bS:t==="6"?ES:[]).filter(n=>n.region===g[e]).slice().sort((n,r)=>n.name.localeCompare(r.name))}var Ge=(()=>{class t{constructor(){this.state=I(rt),this.graphql=I(DE),this.refresh=new ve,this.loading=be(!1),this.error=be(""),this.view=Tl($i([this.state.selection$.pipe(z(({tier:n,region:r,pokemon:o})=>({tier:n,region:r,pokemon:o})),Wi((n,r)=>n.tier===r.tier&&n.region===r.region&&n.pokemon===r.pokemon)),this.refresh.pipe(jo(void 0))]).pipe(Bo(([n])=>{let r=va(n.tier,n.region).find(i=>i.name===n.pokemon);if(this.error.set(""),!r)return this.loading.set(!1),We(null);this.loading.set(!0);let o=r.formName||r.name.toLowerCase();return this.graphql.getPokemon(o).pipe(Bo(i=>this.raidMoves(r).pipe(z(s=>({raid:r,pokemon:i.getPokemon,tier:n.tier,region:n.region,moves:s})))),er(()=>(this.error.set("Could not load this raid. Please try again."),We(null))),tr(()=>this.loading.set(!1)))})),{initialValue:null})}raidMoves(n){return this.graphql.getMoves().pipe(Bo(r=>{let o=[...new Set([...n.info.moves,...n.info.specialMoves??[]].filter(Boolean))];if(!o.length)return We([]);let i=new Map(r.map(s=>[s.name,s]));return Gi(o.map(s=>{let c=i.get(s);return c?We(c):this.graphql.getMove(s.toLowerCase().replace(/[^a-z0-9]/g,"")).pipe(z(l=>l.getMove))}))}),z(r=>r.slice().sort((o,i)=>+(o.category==="Status")-+(i.category==="Status")||o.name.localeCompare(i.name))))}retry(){this.refresh.next()}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275prov=Y({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Fe;(function(t){t.Bug="Bug",t.Dark="Dark",t.Dragon="Dragon",t.Electric="Electric",t.Fairy="Fairy",t.Fighting="Fighting",t.Fire="Fire",t.Flying="Flying",t.Ghost="Ghost",t.Grass="Grass",t.Ground="Ground",t.Ice="Ice",t.Normal="Normal",t.Poison="Poison",t.Psychic="Psychic",t.Rock="Rock",t.Steel="Steel",t.Water="Water"})(Fe||(Fe={}));var Mo=[{name:Fe.Bug,matchup:{offense:{double:["dark","grass","psychic"],immune:[],normal:["bug","dragon","electric","ground","ice","normal","rock","water"],resisted:["fairy","fighting","fire","flying","ghost","poison","steel"]},defense:{double:["fire","flying","rock"],immune:[],normal:["bug","dark","dragon","electric","fairy","ghost","ice","normal","poison","psychic","steel","water"],resisted:["fighting","grass","ground"]}}},{name:Fe.Dark,matchup:{offense:{double:["ghost","psychic"],immune:[],normal:["bug","dragon","electric","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["dark","fairy","fighting"]},defense:{double:["bug","fairy","fighting"],immune:["psychic"],normal:["dragon","electric","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["dark","ghost"]}}},{name:Fe.Dragon,matchup:{offense:{double:["dragon"],immune:["fairy"],normal:["bug","dark","electric","fighting","fire","flying","ghost","grass","ground","ice","normal","poison","psychic","rock","water"],resisted:["steel"]},defense:{double:["dragon","fairy","ice"],immune:[],normal:["bug","dark","fighting","flying","ghost","ground","normal","poison","psychic","rock","steel"],resisted:["electric","fire","grass","water"]}}},{name:Fe.Electric,matchup:{offense:{double:["flying","water"],immune:["ground"],normal:["bug","dark","fairy","fighting","fire","ghost","ice","normal","poison","psychic","rock","steel"],resisted:["dragon","electric","grass"]},defense:{double:["ground"],immune:[],normal:["bug","dark","dragon","fairy","fighting","fire","ghost","grass","ice","normal","poison","psychic","rock","water"],resisted:["electric","flying","steel"]}}},{name:Fe.Fairy,matchup:{offense:{double:["dark","dragon","fighting"],immune:[],normal:["bug","electric","fairy","flying","ghost","grass","ground","ice","normal","psychic","rock","water"],resisted:["fire","poison","steel"]},defense:{double:["poison","steel"],immune:["dragon"],normal:["electric","fairy","fire","flying","ghost","grass","ground","ice","normal","psychic","rock","water"],resisted:["bug","dark","fighting"]}}},{name:Fe.Fighting,matchup:{offense:{double:["dark","ice","normal","rock","steel"],immune:["ghost"],normal:["dragon","electric","fighting","fire","grass","ground","water"],resisted:["bug","fairy","flying","poison","psychic"]},defense:{double:["fairy","flying","psychic"],immune:[],normal:["dragon","electric","fighting","fire","ghost","grass","ground","ice","normal","poison","steel","water"],resisted:["bug","dark","rock"]}}},{name:Fe.Fire,matchup:{offense:{double:["bug","grass","ice","steel"],immune:[],normal:["dark","electric","fairy","fighting","flying","ghost","ground","normal","poison","psychic"],resisted:["dragon","fire","rock","water"]},defense:{double:["ground","rock","water"],immune:[],normal:["dark","dragon","electric","fighting","flying","ghost","normal","poison","psychic"],resisted:["bug","fairy","fire","grass","ice","steel"]}}},{name:Fe.Flying,matchup:{offense:{double:["bug","fighting","grass"],immune:[],normal:["dark","dragon","fairy","fire","flying","ghost","ground","ice","normal","poison","psychic","water"],resisted:["electric","rock","steel"]},defense:{double:["electric","ice","rock"],immune:["ground"],normal:["dark","dragon","fairy","fire","flying","ghost","normal","poison","psychic","steel","water"],resisted:["bug","fighting","grass"]}}},{name:Fe.Ghost,matchup:{offense:{double:["ghost","psychic"],immune:["normal"],normal:["bug","dragon","electric","fairy","fighting","fire","flying","grass","ground","ice","poison","rock","steel","water"],resisted:["dark"]},defense:{double:["dark","ghost"],immune:["fighting","normal"],normal:["dragon","electric","fairy","fire","flying","grass","ground","ice","psychic","rock","steel","water"],resisted:["bug","poison"]}}},{name:Fe.Grass,matchup:{offense:{double:["ground","rock","water"],immune:[],normal:["dark","electric","fairy","fighting","ghost","ice","normal","psychic"],resisted:["bug","dragon","fire","flying","grass","poison","steel"]},defense:{double:["bug","fire","flying","ice","poison"],immune:[],normal:["dark","dragon","fairy","fighting","ghost","normal","psychic","rock","steel"],resisted:["electric","grass","ground","water"]}}},{name:Fe.Ground,matchup:{offense:{double:["electric","fire","poison","rock","steel"],immune:["flying"],normal:["dark","dragon","fairy","fighting","ghost","ground","ice","normal","psychic","water"],resisted:["bug","grass"]},defense:{double:["grass","ice","water"],immune:["electric"],normal:["bug","dark","dragon","fairy","fighting","fire","flying","ghost","ground","normal","psychic","steel"],resisted:["poison","rock"]}}},{name:Fe.Ice,matchup:{offense:{double:["dragon","flying","grass","ground"],immune:[],normal:["bug","dark","electric","fairy","fighting","ghost","normal","poison","psychic","rock"],resisted:["fire","ice","steel","water"]},defense:{double:["fighting","fire","rock","steel"],immune:[],normal:["bug","dark","dragon","electric","fairy","flying","ghost","grass","ground","normal","poison","psychic","water"],resisted:["ice"]}}},{name:Fe.Normal,matchup:{offense:{double:[],immune:["ghost"],normal:["bug","dark","dragon","electric","fairy","fighting","fire","flying","grass","ground","ice","normal","poison","psychic","water"],resisted:["rock","steel"]},defense:{double:["fighting"],immune:["ghost"],normal:["bug","dark","dragon","electric","fairy","fire","flying","grass","ground","ice","normal","poison","psychic","rock","steel","water"],resisted:[]}}},{name:Fe.Poison,matchup:{offense:{double:["fairy","grass"],immune:["steel"],normal:["bug","dark","dragon","electric","fighting","fire","flying","ice","normal","psychic","water"],resisted:["ghost","ground","poison","rock"]},defense:{double:["ground","psychic"],immune:[],normal:["dark","dragon","electric","fire","flying","ghost","ice","normal","rock","steel","water"],resisted:["bug","fairy","fighting","grass","poison"]}}},{name:Fe.Psychic,matchup:{offense:{double:["fighting","poison"],immune:["dark"],normal:["bug","dragon","electric","fairy","fire","flying","ghost","grass","ground","ice","normal","rock","water"],resisted:["psychic","steel"]},defense:{double:["bug","dark","ghost"],immune:[],normal:["dragon","electric","fairy","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["fighting","psychic"]}}},{name:Fe.Rock,matchup:{offense:{double:["bug","fire","flying","ice"],immune:[],normal:["dark","dragon","electric","fairy","ghost","grass","normal","poison","psychic","rock","water"],resisted:["fighting","ground","steel"]},defense:{double:["fighting","grass","ground","steel","water"],immune:[],normal:["bug","dark","dragon","electric","fairy","ghost","ice","psychic","rock"],resisted:["fire","flying","normal","poison"]}}},{name:Fe.Steel,matchup:{offense:{double:["fairy","ice","rock"],immune:[],normal:["bug","dark","dragon","fighting","flying","ghost","grass","ground","normal","poison","psychic"],resisted:["electric","fire","steel","water"]},defense:{double:["fighting","fire","ground"],immune:["poison"],normal:["dark","electric","ghost","water"],resisted:["bug","dragon","fairy","flying","grass","ice","normal","psychic","rock","steel"]}}},{name:Fe.Water,matchup:{offense:{double:["fire","ground","rock"],immune:[],normal:["bug","dark","electric","fairy","fighting","flying","ghost","ice","normal","poison","psychic","steel"],resisted:["dragon","grass","water"]},defense:{double:["electric","grass"],immune:[],normal:["bug","dark","dragon","fairy","fighting","flying","ghost","ground","normal","poison","psychic","rock"],resisted:["fire","ice","steel","water"]}}}];var RE=(()=>{class t{_renderer;_elementRef;onChange=n=>{};onTouched=()=>{};constructor(n,r){this._renderer=n,this._elementRef=r}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}static \u0275fac=function(r){return new(r||t)(ue(Rn),ue(an))};static \u0275dir=Tt({type:t})}return t})(),Np=(()=>{class t extends RE{static \u0275fac=(()=>{let n;return function(o){return(n||(n=oi(t)))(o||t)}})();static \u0275dir=Tt({type:t,features:[ln]})}return t})(),au=new H("");var Px={provide:au,useExisting:Xt(()=>kE),multi:!0};function xx(){let t=Gt()?Gt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Nx=new H(""),kE=(()=>{class t extends RE{_compositionMode;_composing=!1;constructor(n,r,o){super(n,r),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!xx())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}static \u0275fac=function(r){return new(r||t)(ue(Rn),ue(an),ue(Nx,8))};static \u0275dir=Tt({type:t,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&Qe("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[ao([Px]),ln]})}return t})();function Rp(t){return t==null||kp(t)===0}function kp(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var AE=new H(""),Rx=new H(""),kx=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Cp=class{static min(e){return Ax(e)}static max(e){return Ox(e)}static required(e){return OE(e)}static requiredTrue(e){return Fx(e)}static email(e){return Lx(e)}static minLength(e){return Hx(e)}static maxLength(e){return Vx(e)}static pattern(e){return Ux(e)}static nullValidator(e){return ru()}static compose(e){return jE(e)}static composeAsync(e){return $E(e)}};function Ax(t){return e=>{if(e.value==null||t==null)return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function Ox(t){return e=>{if(e.value==null||t==null)return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function OE(t){return Rp(t.value)?{required:!0}:null}function Fx(t){return t.value===!0?null:{required:!0}}function Lx(t){return Rp(t.value)||kx.test(t.value)?null:{email:!0}}function Hx(t){return e=>{let n=e.value?.length??kp(e.value);return n===null||n===0?null:n<t?{minlength:{requiredLength:t,actualLength:n}}:null}}function Vx(t){return e=>{let n=e.value?.length??kp(e.value);return n!==null&&n>t?{maxlength:{requiredLength:t,actualLength:n}}:null}}function Ux(t){if(!t)return ru;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),r=>{if(Rp(r.value))return null;let o=r.value;return e.test(o)?null:{pattern:{requiredPattern:n,actualValue:o}}}}function ru(t){return null}function FE(t){return t!=null}function LE(t){return Ps(t)?Ve(t):t}function HE(t){let e={};return t.forEach(n=>{e=n!=null?S(S({},e),n):e}),Object.keys(e).length===0?null:e}function VE(t,e){return e.map(n=>n(t))}function jx(t){return!t.validate}function UE(t){return t.map(e=>jx(e)?e:n=>e.validate(n))}function jE(t){if(!t)return null;let e=t.filter(FE);return e.length==0?null:function(n){return HE(VE(n,e))}}function BE(t){return t!=null?jE(UE(t)):null}function $E(t){if(!t)return null;let e=t.filter(FE);return e.length==0?null:function(n){let r=VE(n,e).map(LE);return Gi(r).pipe(z(HE))}}function GE(t){return t!=null?$E(UE(t)):null}function TE(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Bx(t){return t._rawValidators}function $x(t){return t._rawAsyncValidators}function Ip(t){return t?Array.isArray(t)?t:[t]:[]}function ou(t,e){return Array.isArray(t)?t.includes(e):t===e}function wE(t,e){let n=Ip(e);return Ip(t).forEach(o=>{ou(n,o)||n.push(o)}),n}function CE(t,e){return Ip(e).filter(n=>!ou(t,n))}var iu=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=BE(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=GE(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},_p=class extends iu{name;get formDirective(){return null}get path(){return null}};var Sa="VALID",nu="INVALID",xi="PENDING",ba="DISABLED",Po=class{},su=class extends Po{value;source;constructor(e,n){super(),this.value=e,this.source=n}},Ea=class extends Po{pristine;source;constructor(e,n){super(),this.pristine=e,this.source=n}},Da=class extends Po{touched;source;constructor(e,n){super(),this.touched=e,this.source=n}},Ni=class extends Po{status;source;constructor(e,n){super(),this.status=e,this.source=n}};var Ta=class extends Po{source;constructor(e){super(),this.source=e}};function Gx(t){return(cu(t)?t.validators:t)||null}function Wx(t){return Array.isArray(t)?BE(t):t||null}function zx(t,e){return(cu(e)?e.asyncValidators:t)||null}function qx(t){return Array.isArray(t)?GE(t):t||null}function cu(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var Mp=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=be(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,n){this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return yt(this.statusReactive)}set status(e){yt(()=>this.statusReactive.set(e))}_status=he(()=>this.statusReactive());statusReactive=be(void 0);get valid(){return this.status===Sa}get invalid(){return this.status===nu}get pending(){return this.status===xi}get disabled(){return this.status===ba}get enabled(){return this.status!==ba}errors;get pristine(){return yt(this.pristineReactive)}set pristine(e){yt(()=>this.pristineReactive.set(e))}_pristine=he(()=>this.pristineReactive());pristineReactive=be(!0);get dirty(){return!this.pristine}get touched(){return yt(this.touchedReactive)}set touched(e){yt(()=>this.touchedReactive.set(e))}_touched=he(()=>this.touchedReactive());touchedReactive=be(!1);get untouched(){return!this.touched}_events=new ve;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(wE(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(wE(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(CE(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(CE(e,this._rawAsyncValidators))}hasValidator(e){return ou(this._rawValidators,e)}hasAsyncValidator(e){return ou(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let r=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(C(S({},e),{sourceControl:r})),n&&e.emitEvent!==!1&&this._events.next(new Da(!0,r))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=e.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:r})}),e.onlySelf||this._parent?._updateTouched(e,r),n&&e.emitEvent!==!1&&this._events.next(new Da(!1,r))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let r=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(C(S({},e),{sourceControl:r})),n&&e.emitEvent!==!1&&this._events.next(new Ea(!1,r))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=e.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,r),n&&e.emitEvent!==!1&&this._events.next(new Ea(!0,r))}markAsPending(e={}){this.status=xi;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Ni(this.status,n)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(C(S({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=ba,this.errors=null,this._forEachChild(o=>{o.disable(C(S({},e),{onlySelf:!0}))}),this._updateValue();let r=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new su(this.value,r)),this._events.next(new Ni(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(C(S({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=Sa,this._forEachChild(r=>{r.enable(C(S({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(C(S({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e,n){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},n),this._parent?._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Sa||this.status===xi)&&this._runAsyncValidator(r,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new su(this.value,n)),this._events.next(new Ni(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(C(S({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ba:Sa}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=xi,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1,shouldHaveEmitted:e!==!1};let r=LE(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((r,o)=>r&&r._find(o),this)}getError(e,n){let r=n?this.get(n):this;return r?.errors?r.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,r){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||r)&&this._events.next(new Ni(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,r)}_initObservables(){this.valueChanges=new Et,this.statusChanges=new Et}_calculateStatus(){return this._allControlsDisabled()?ba:this.errors?nu:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(xi)?xi:this._anyControlsHaveStatus(nu)?nu:Sa}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let r=!this._anyControlsDirty(),o=this.pristine!==r;this.pristine=r,e.onlySelf||this._parent?._updatePristine(e,n),o&&this._events.next(new Ea(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new Da(this.touched,n)),e.onlySelf||this._parent?._updateTouched(e,n)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){cu(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Wx(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=qx(this._rawAsyncValidators)}_updateHasRequiredValidator(){yt(()=>this._hasRequired.set(this.hasValidator(Cp.required)))}};function Qx(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function Kx(t,e,n,r){switch(n){case"name":t.setAttribute(e,n,r);break;case"disabled":case"readonly":case"required":r?t.setAttribute(e,n,""):t.removeAttribute(e,n);break;case"max":case"min":case"minLength":case"maxLength":r!==void 0?t.setAttribute(e,n,r.toString()):t.removeAttribute(e,n);break}}var Pp=class{kind;context;control;message;constructor({kind:e,context:n,control:r}){this.kind=e,this.context=n,this.control=r}};var Yx=(()=>{class t{_validator=ru;_onChange;_enabled;ngOnChanges(n){if(this.inputName in n){let r=this.normalizeInput(n[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):ru,this._onChange?.()}}validate(n){return this._validator(n)}registerOnValidatorChange(n){this._onChange=n}enabled(n){return n!=null}static \u0275fac=function(r){return new(r||t)};static \u0275dir=Tt({type:t,features:[tl]})}return t})();var Zx={provide:AE,useExisting:Xt(()=>WE),multi:!0};var WE=(()=>{class t extends Yx{required;inputName="required";normalizeInput=qf;createValidator=n=>OE;enabled(n){return n}static \u0275fac=(()=>{let n;return function(o){return(n||(n=oi(t)))(o||t)}})();static \u0275dir=Tt({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,o){r&2&&st("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[ao([Zx]),ln]})}return t})();var Jx=new H(""),zE=new H("",{factory:()=>Ap}),Ap="always";function Xx(t,e){return[...e.path,t]}function IE(t,e,n=Ap){tN(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),nN(t,e),oN(t,e),rN(t,e),eN(t,e)}function _E(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function eN(t,e){if(e.valueAccessor.setDisabledState){let n=r=>{e.valueAccessor.setDisabledState(r)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function tN(t,e){let n=Bx(t);e.validator!==null?t.setValidators(TE(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let r=$x(t);e.asyncValidator!==null?t.setAsyncValidators(TE(r,e.asyncValidator)):typeof r=="function"&&t.setAsyncValidators([r]);let o=()=>t.updateValueAndValidity();_E(e._rawValidators,o),_E(e._rawAsyncValidators,o)}function nN(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&qE(t,e)})}function rN(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&qE(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function qE(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function oN(t,e){let n=(r,o)=>{e.valueAccessor.writeValue(r),o&&e.viewToModelUpdate(r)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function iN(t,e){if(!Object.hasOwn(t,"model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function sN(t){return Object.getPrototypeOf(t.constructor)===Np}function aN(t,e){if(!e)return null;Array.isArray(e);let n,r,o;return e.forEach(i=>{i.constructor===kE?n=i:sN(i)?r=i:o=i}),o||r||n||null}var cN={provide:Jx,useFactory:()=>{let t=I(Ri,{self:!0});return{setParseErrors:e=>{t.setParseErrorSource(e)},set onReset(e){t.onReset=e}}}},Ri=class extends iu{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(e){this.userOnReset=e,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(n=>{n instanceof Ta&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=aN(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(e,n,r){super(),this.injector=e,this.renderer=n,this.rawValueAccessors=r,this.injector?.get(et)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let e=this.injector?.get(ks);if(!this.control||!e)return;let n=e.markForCheck.bind(e);this.subscription=new Le,this.subscription.add(this.control.valueChanges.subscribe(n)),this.subscription.add(this.control.statusChanges.subscribe(n)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(r=>{r instanceof Ta&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(e){!e.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!e.customControl||(this.isCustomControlBased=!0,e.listenToCustomControlModel(o=>{this.control?.markAsDirty(),this.control?.setValue(o,{emitModelToViewChange:!1}),this.viewToModelUpdate(o)}),e.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Qx(e.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(o=>o instanceof WE))}ngControlUpdate(e,n){if(!this.isCustomControlBased)return;let r=this.control,o=this.customControlBindings;Object.is(o.value,r.value)||(o.value=r.value,e.setCustomControlModelInput(r.value)),this.bindControlProperty(e,o,"touched",r.touched),this.bindControlProperty(e,o,"dirty",r.dirty),this.bindControlProperty(e,o,"valid",r.valid),this.bindControlProperty(e,o,"invalid",r.invalid),this.bindControlProperty(e,o,"pending",r.pending),this.bindControlProperty(e,o,"disabled",r.disabled),this.shouldBindRequired&&this.bindControlProperty(e,o,"required",this.isRequired);let i=r.errors;if(o.errors!==i){o.errors=i;let s=this._convertErrors(i);e.setInputOnDirectives("errors",s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(e,n,r,o){if(n[r]===o)return;n[r]=o;let i=e.setInputOnDirectives(r,o);this.isNativeFormElement&&!i&&(r==="disabled"||r==="required")&&this.renderer&&Kx(this.renderer,e.nativeElement,r,o)}_convertErrors(e){if(e===null)return[];let n=this.control;return Object.entries(e).map(([r,o])=>new Pp({context:o,kind:r,control:n}))}setParseErrorSource(e){if(e===void 0)return;let n=null,r=he(()=>{let o=e();return o.length===0?null:o.reduce((i,s)=>(i[s.kind]=s,i),{})});this.parseErrorsValidator=(()=>n).bind(this),on(()=>{n=r(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(e){this.parseErrorsValidator&&(e?.removeValidators(this.parseErrorsValidator),e?.updateValueAndValidity({emitEvent:!1}))}},xp=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var wr=(()=>{class t extends xp{constructor(n){super(n)}static \u0275fac=function(r){return new(r||t)(ue(Ri,2))};static \u0275dir=Tt({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ci("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[ln]})}return t})();function ME(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function PE(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var lN=class extends Mp{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,n,r){super(Gx(n),zx(r,n)),this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),cu(n)&&(n.nonNullable||n.initialValueIsDefault)&&(PE(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){yt(()=>{this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)})}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),n.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,n?.emitEvent!==!1&&this._events.next(new Ta(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ME(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ME(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){PE(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var uN={provide:Ri,useExisting:Xt(()=>Kn)},xE=Promise.resolve(),Kn=(()=>{class t extends Ri{_changeDetectorRef;callSetDisabledState;control=new lN;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name="";isDisabled;model;options;update=new Et;constructor(n,r,o,i,s,c,l,u){super(l,u,i),this._changeDetectorRef=s,this.callSetDisabledState=c,this._parent=n,this._setValidators(r),this._setAsyncValidators(o)}ngOnChanges(n){if(this._registered,this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),iN(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}\u0275ngControlCreate(n){super.ngControlCreate(n)}\u0275ngControlUpdate(n){super.ngControlUpdate(n,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,IE(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(n){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,IE(this.control,this,n))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){xE.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,o=r!==0&&qf(r);xE.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?Xx(n,this._parent):[n]}static \u0275fac=function(r){return new(r||t)(ue(_p,9),ue(AE,10),ue(Rx,10),ue(au,10),ue(ks,8),ue(zE,8),ue(ht,8),ue(Rn,8))};static \u0275dir=Tt({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[ao([uN,cN]),ln,tl,Vf(null)]})}return t})();var dN={provide:au,useExisting:Xt(()=>vn),multi:!0};function QE(t,e){return t==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${t}: ${e}`.slice(0,50))}function fN(t){return t.split(":")[0]}var vn=(()=>{class t extends Np{value;_optionMap=new Map;_idCounter=0;set compareWith(n){this._compareWith=n}_compareWith=Object.is;appRefInjector=I(ai).injector;destroyRef=I(et);cdr=I(ks);_queuedWrite=!1;_writeValueAfterRender(){this._queuedWrite||this.appRefInjector.destroyed||(this._queuedWrite=!0,Cf({write:()=>{this.destroyRef.destroyed||(this._queuedWrite=!1,this.writeValue(this.value))}},{injector:this.appRefInjector}))}writeValue(n){this.cdr.markForCheck(),this.value=n;let r=this._getOptionId(n),o=QE(r,n);this.setProperty("value",o)}registerOnChange(n){this.onChange=r=>{this.value=this._getOptionValue(r),n(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(n){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r),n))return r;return null}_getOptionValue(n){let r=fN(n);return this._optionMap.has(r)?this._optionMap.get(r):n}static \u0275fac=(()=>{let n;return function(o){return(n||(n=oi(t)))(o||t)}})();static \u0275dir=Tt({type:t,selectors:[["select","formControlName","",3,"multiple","",3,"ngNoCva",""],["select","formControl","",3,"multiple","",3,"ngNoCva",""],["select","ngModel","",3,"multiple","",3,"ngNoCva",""]],hostBindings:function(r,o){r&1&&Qe("change",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[ao([dN]),ln]})}return t})(),Cr=(()=>{class t{_element;_renderer;_select;id;constructor(n,r,o){this._element=n,this._renderer=r,this._select=o,this._select&&(this.id=this._select._registerOption())}set ngValue(n){this._select!=null&&(this._select._optionMap.set(this.id,n),this._setElementValue(QE(this.id,n)),this._select._writeValueAfterRender())}set value(n){this._setElementValue(n),this._select?._writeValueAfterRender()}_setElementValue(n){this._renderer.setProperty(this._element.nativeElement,"value",n)}ngOnDestroy(){this._select?._optionMap.delete(this.id),this._select?._writeValueAfterRender()}static \u0275fac=function(r){return new(r||t)(ue(an),ue(Rn),ue(vn,9))};static \u0275dir=Tt({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return t})(),hN={provide:au,useExisting:Xt(()=>KE),multi:!0};function NE(t,e){return t==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${t}: ${e}`.slice(0,50))}function pN(t){return t.split(":")[0]}var KE=(()=>{class t extends Np{value;_optionMap=new Map;_idCounter=0;set compareWith(n){this._compareWith=n}_compareWith=Object.is;writeValue(n){this.value=n;let r;if(Array.isArray(n)){let o=n.map(i=>this._getOptionId(i));r=(i,s)=>{i._setSelected(o.indexOf(s)>-1)}}else r=o=>{o._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(n){this.onChange=r=>{let o=[],i=r.selectedOptions;if(i!==void 0){let s=i;for(let c=0;c<s.length;c++){let l=s[c],u=this._getOptionValue(l.value);o.push(u)}}else{let s=r.options;for(let c=0;c<s.length;c++){let l=s[c];if(l.selected){let u=this._getOptionValue(l.value);o.push(u)}}}this.value=o,n(o)}}_registerOption(n){let r=(this._idCounter++).toString();return this._optionMap.set(r,n),r}_getOptionId(n){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r)._value,n))return r;return null}_getOptionValue(n){let r=pN(n);return this._optionMap.has(r)?this._optionMap.get(r)._value:n}static \u0275fac=(()=>{let n;return function(o){return(n||(n=oi(t)))(o||t)}})();static \u0275dir=Tt({type:t,selectors:[["select","multiple","","formControlName","",3,"ngNoCva",""],["select","multiple","","formControl","",3,"ngNoCva",""],["select","multiple","","ngModel","",3,"ngNoCva",""]],hostBindings:function(r,o){r&1&&Qe("change",function(s){return o.onChange(s.target)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[ao([hN]),ln]})}return t})(),Ir=(()=>{class t{_element;_renderer;_select;id;_value;constructor(n,r,o){this._element=n,this._renderer=r,this._select=o,this._select&&(this.id=this._select._registerOption(this))}set ngValue(n){this._select!=null&&(this._value=n,this._setElementValue(NE(this.id,n)),this._select.writeValue(this._select.value))}set value(n){this._select?(this._value=n,this._setElementValue(NE(this.id,n)),this._select.writeValue(this._select.value)):this._setElementValue(n)}_setElementValue(n){this._renderer.setProperty(this._element.nativeElement,"value",n)}_setSelected(n){this._renderer.setProperty(this._element.nativeElement,"selected",n)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(r){return new(r||t)(ue(an),ue(Rn),ue(KE,9))};static \u0275dir=Tt({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return t})();var mN=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=si({type:t});static \u0275inj=Br({})}return t})();var _r=(()=>{class t{static withConfig(n){return{ngModule:t,providers:[{provide:zE,useValue:n.callSetDisabledState??Ap}]}}static \u0275fac=function(r){return new(r||t)};static \u0275mod=si({type:t});static \u0275inj=Br({imports:[mN]})}return t})();var gN=["select"];function yN(t,e){if(t&1&&(B(0,"option",4),M(1),$()),t&2){let n=e.$implicit;gt("value",n),N(),re(n+" \u2605")}}var YE=(()=>{class t{constructor(){this.state=I(rt),this.select=ur("select"),this.options=["5","6"]}valueChanged(n=this.select()?.nativeElement.value??""){this.state.changeRaidTier(n)}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=ie({type:t,selectors:[["app-raid-tier"]],viewQuery:function(r,o){r&1&&un(o.select,gN,5),r&2&&Hn()},decls:8,vars:1,consts:[["select",""],["for","raidTier"],["id","raidTier",3,"ngModelChange","ngModel"],["value",""],[3,"value"]],template:function(r,o){r&1&&(B(0,"label",1),M(1,"Raid tier"),$(),B(2,"select",2,0),An(),Qe("ngModelChange",function(s){return o.valueChanged(s)}),B(4,"option",3),M(5,"Choose raid tier"),$(),de(6,yN,2,2,"option",4,Fn),$()),r&2&&(N(2),gt("ngModel",o.state.selection().tier),On(),N(4),fe(o.options))},dependencies:[_r,Cr,Ir,vn,wr,Kn],encapsulation:2})}}return t})();var vN=["select"];function SN(t,e){if(t&1&&(B(0,"option",4),M(1),$()),t&2){let n=e.$implicit;gt("value",n),N(),re(n)}}var ZE=(()=>{class t{constructor(){this.state=I(rt),this.select=ur("select"),this.options=Object.values(g)}valueChanged(n=this.select()?.nativeElement.value??""){this.state.changeRegionList(n)}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=ie({type:t,selectors:[["app-region"]],viewQuery:function(r,o){r&1&&un(o.select,vN,5),r&2&&Hn()},decls:8,vars:1,consts:[["select",""],["for","regionList"],["id","regionList",3,"ngModelChange","ngModel"],["value",""],[3,"value"]],template:function(r,o){r&1&&(B(0,"label",1),M(1,"Region"),$(),B(2,"select",2,0),An(),Qe("ngModelChange",function(s){return o.valueChanged(s)}),B(4,"option",3),M(5,"Choose region"),$(),de(6,SN,2,2,"option",4,Fn),$()),r&2&&(N(2),gt("ngModel",o.state.selection().region),On(),N(4),fe(o.options))},dependencies:[_r,Cr,Ir,vn,wr,Kn],encapsulation:2})}}return t})();var bN=["select"];function EN(t,e){if(t&1&&(B(0,"option",4),M(1),$()),t&2){let n=e.$implicit;gt("value",n),N(),re(n)}}var JE=(()=>{class t{constructor(){this.state=I(rt),this.select=ur("select"),this.options=he(()=>va(this.state.selection().tier,this.state.selection().region).map(n=>n.name))}valueChanged(n=this.select()?.nativeElement.value??""){this.state.changePokemon(n)}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=ie({type:t,selectors:[["app-pokemon-list"]],viewQuery:function(r,o){r&1&&un(o.select,bN,5),r&2&&Hn()},decls:8,vars:1,consts:[["select",""],["for","pokemonList"],["id","pokemonList",3,"ngModelChange","ngModel"],["value",""],[3,"value"]],template:function(r,o){r&1&&(B(0,"label",1),M(1,"Pok\xE9mon"),$(),B(2,"select",2,0),An(),Qe("ngModelChange",function(s){return o.valueChanged(s)}),B(4,"option",3),M(5,"Choose Pok\xE9mon"),$(),de(6,EN,2,2,"option",4,Fn),$()),r&2&&(N(2),gt("ngModel",o.state.selection().pokemon),On(),N(4),fe(o.options()))},dependencies:[_r,Cr,Ir,vn,wr,Kn],encapsulation:2})}}return t})();var DN=["select"];function TN(t,e){if(t&1&&(B(0,"option",4),M(1),$()),t&2){let n=e.$implicit;gt("value",n),N(),re(n)}}var XE=(()=>{class t{constructor(){this.state=I(rt),this.select=ur("select"),this.options=Mo.map(n=>n.name)}valueChanged(n=this.select()?.nativeElement.value??""){this.state.changeTeraType(n)}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=ie({type:t,selectors:[["app-tera-type"]],viewQuery:function(r,o){r&1&&un(o.select,DN,5),r&2&&Hn()},decls:8,vars:1,consts:[["select",""],["for","teraList"],["id","teraList",3,"ngModelChange","ngModel"],["value",""],[3,"value"]],template:function(r,o){r&1&&(B(0,"label",1),M(1,"Tera type"),$(),B(2,"select",2,0),An(),Qe("ngModelChange",function(s){return o.valueChanged(s)}),B(4,"option",3),M(5,"Choose Tera type"),$(),de(6,TN,2,2,"option",4,Fn),$()),r&2&&(N(2),gt("ngModel",o.state.selection().tera),On(),N(4),fe(o.options))},dependencies:[_r,Cr,Ir,vn,wr,Kn],encapsulation:2})}}return t})();function wN(t,e){if(t&1&&(A(0,"span",2),M(1),O()),t&2){let n=ne();N(),re(n.status())}}function CN(t,e){if(t&1){let n=$t();A(0,"input",4,0),wt("focus",function(){xe(n);let o=$f(1);return Ne(o.select())}),O()}if(t&2){let n=ne();lr("value",n.fallbackUrl())}}var eD=(()=>{class t{constructor(){this.state=I(rt),this.status=be(""),this.fallbackUrl=be(""),on(()=>{this.state.selection(),this.status.set(""),this.fallbackUrl.set("")})}async shareRaid(){let n=this.state.selection();if(!n.pokemon)return;let r=new URL(document.baseURI),o=[n.tier,n.region,n.pokemon,n.tera].map(encodeURIComponent).join("/"),i=new URL(o,r).href;try{await navigator.clipboard.writeText(i),this.fallbackUrl.set(""),this.status.set("Raid link copied")}catch{this.fallbackUrl.set(i),this.status.set("Copy this raid link")}}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=ie({type:t,selectors:[["app-share-raid"]],decls:4,vars:3,consts:[["link",""],["type","button",1,"tri-primary",3,"click","disabled"],["role","status",1,"tri-share-result"],["aria-label","Raid link","readonly","",3,"value"],["aria-label","Raid link","readonly","",3,"focus","value"]],template:function(r,o){r&1&&(A(0,"button",1),wt("click",function(){return o.shareRaid()}),M(1,` Share raid
`),O(),Re(2,wN,2,1,"span",2),Re(3,CN,2,1,"input",3)),r&2&&(lr("disabled",!o.state.selection().pokemon),N(2),ke(o.status()?2:-1),N(),ke(o.fallbackUrl()?3:-1))},encapsulation:2})}}return t})();function IN(t,e){if(t&1&&(A(0,"div",0)(1,"figure",1),xs(2,"img",2),A(3,"figcaption"),M(4,"Normal"),O()(),A(5,"figure",3),xs(6,"img",2),A(7,"figcaption"),M(8,"Shiny"),O()()()),t&2){let n=e,r=ne();N(2),lr("src","./assets/pokemon/"+r.imageName()+".png")("alt",n.raid.name+" normal"),N(4),lr("src","./assets/pokemon/shiny/"+r.imageName()+".png")("alt",n.raid.name+" shiny")}}var tD=(()=>{class t{constructor(){this.data=I(Ge),this.imageName=he(()=>{let n=this.data.view();return n?String(n.pokemon.num).padStart(3,"0")+(n.raid.imageAlt??""):""})}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=ie({type:t,selectors:[["app-pokemon-images"]],decls:1,vars:1,consts:[[1,"tri-art","grid","grid-cols-2","gap-3"],["id","pokemonImageNormal"],["width","190","height","190",3,"src","alt"],["id","pokemonImageShiny"]],template:function(r,o){if(r&1&&Re(0,IN,9,4,"div",0),r&2){let i;ke((i=o.data.view())?0:-1,i)}},encapsulation:2})}}return t})();var _N=(t,e)=>e.name;function MN(t,e){if(t&1&&(A(0,"span",1),M(1),O()),t&2){let n=e.$implicit;st("data-type",n.name),N(),re(n.name)}}function PN(t,e){t&1&&(A(0,"div",0),de(1,MN,2,2,"span",1,_N),O()),t&2&&(N(),fe(e.pokemon.types))}var nD=(()=>{class t{constructor(){this.data=I(Ge)}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=ie({type:t,selectors:[["app-pokemon-types"]],decls:1,vars:1,consts:[["id","pokemonTypes","aria-label","Pok\xE9mon types",1,"tri-tagset","justify-center","mt-3"],[1,"tri-tag"]],template:function(r,o){if(r&1&&Re(0,PN,3,0,"div",0),r&2){let i;ke((i=o.data.view())?0:-1,i)}},encapsulation:2})}}return t})();var xN=(t,e)=>e.ability.name;function NN(t,e){if(t&1){let n=$t();A(0,"button",5),wt("pointerenter",function(){let o=xe(n).$implicit,i=ne();return Ne(i.preview.set(o.ability))})("pointerleave",function(){xe(n);let o=ne();return Ne(o.preview.set(null))})("focus",function(){let o=xe(n).$implicit,i=ne();return Ne(i.preview.set(o.ability))})("blur",function(){xe(n);let o=ne();return Ne(o.preview.set(null))})("click",function(){let o=xe(n).$implicit,i=ne();return Ne(i.toggle(o.ability))}),M(1),O()}if(t&2){let n=e.$implicit,r=ne();st("aria-pressed",r.pinned()===n.ability),N(),dn(" ",n.ability.name,"",n.hidden?" (H)":""," ")}}function RN(t,e){if(t&1){let n=$t();A(0,"div",4)(1,"div",6)(2,"strong"),M(3),O(),A(4,"button",7),wt("click",function(){xe(n);let o=ne();return Ne(o.close())}),M(5," Close "),O()(),A(6,"p"),M(7),O()()}if(t&2){let n=e;N(3),re(n.name),N(4),re(n.shortDesc)}}var rD=(()=>{class t{constructor(){this.data=I(Ge),this.abilities=he(()=>{let n=this.data.view();if(!n)return[];let{first:r,second:o,hidden:i}=n.pokemon.abilities;return[r&&{ability:r,hidden:!1},o&&{ability:o,hidden:!1},(n.tier==="6"||n.raid.name==="Ditto")&&i&&{ability:i,hidden:!0}].filter(Boolean)}),this.preview=be(null),this.pinned=be(null),this.inspected=he(()=>this.pinned()??this.preview()),on(()=>{this.data.view(),this.close()})}toggle(n){this.preview.set(null),this.pinned.set(this.pinned()===n?null:n)}close(){this.pinned.set(null),this.preview.set(null)}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=ie({type:t,selectors:[["app-pokemon-ability"]],decls:7,vars:1,consts:[["id","pokemonAbility","aria-labelledby","abilities-heading",3,"keydown.escape"],["id","abilities-heading"],[1,"tri-chips"],["type","button","aria-controls","ability-detail",1,"tri-info-btn"],["id","ability-detail",1,"tri-inspect"],["type","button","aria-controls","ability-detail",1,"tri-info-btn",3,"pointerenter","pointerleave","focus","blur","click"],[1,"tri-inspect-top"],["type","button","aria-label","Close ability details",3,"click"]],template:function(r,o){if(r&1&&(A(0,"section",0),wt("keydown.escape",function(){return o.close()}),A(1,"h3",1),M(2,"Abilities"),O(),A(3,"div",2),de(4,NN,2,3,"button",3,xN),O(),Re(6,RN,8,2,"div",4),O()),r&2){let i;N(4),fe(o.abilities()),N(2),ke((i=o.inspected())?6:-1,i)}},encapsulation:2})}}return t})();var kN=(t,e)=>e.label;function AN(t,e){if(t&1&&(A(0,"div",3)(1,"dt"),M(2),O(),A(3,"dd"),M(4),O()()),t&2){let n=e.$implicit;N(2),re(n.label),N(2),re(n.value)}}var oD=(()=>{class t{constructor(){this.data=I(Ge),this.stats=he(()=>{let n=this.data.view()?.pokemon.baseStats;return n?[{label:"HP",value:n.hp},{label:"Atk",value:n.attack},{label:"Def",value:n.defense},{label:"Sp. Atk",value:n.specialattack},{label:"Sp. Def",value:n.specialdefense},{label:"Spd",value:n.speed}]:[]})}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=ie({type:t,selectors:[["app-pokemon-stats"]],decls:6,vars:0,consts:[["id","pokemonStatsWrapper","aria-labelledby","stats-heading"],["id","stats-heading"],["id","pokemonStats",1,"tri-stats"],[1,"tri-stat"]],template:function(r,o){r&1&&(A(0,"section",0)(1,"h3",1),M(2,"Base stats"),O(),A(3,"dl",2),de(4,AN,5,2,"div",3,kN),O()()),r&2&&(N(4),fe(o.stats()))},encapsulation:2})}}return t})();var uu=(()=>{class t{advantages(n,r=!1){let o=[];return Mo.filter(i=>i.name.toLowerCase()===n.toLowerCase()).forEach(i=>{let s=i.matchup.offense;s.double.forEach(c=>{o.push({name:c,multiplier:2})}),r&&(s.resisted.forEach(c=>{o.push({name:c,multiplier:.5})}),s.immune.forEach(c=>{o.push({name:c,multiplier:0})}))}),o}weaknesses(n){let r=[];return Mo.filter(o=>o.name.toLowerCase()===n.toLowerCase()).forEach(o=>{let i=o.matchup.defense;i.double.forEach(s=>{r.push({name:s,multiplier:2})}),i.resisted.forEach(s=>{r.push({name:s,multiplier:.5})}),i.immune.forEach(s=>{r.push({name:s,multiplier:0})})}),r}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275prov=Y({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var ON=()=>[],FN=(t,e)=>e.key;function LN(t,e){if(t&1){let n=$t();A(0,"button",5),wt("pointerenter",function(){let o=xe(n).$implicit,i=ne();return Ne(i.preview.set(o))})("pointerleave",function(){xe(n);let o=ne();return Ne(o.preview.set(null))})("focus",function(){let o=xe(n).$implicit,i=ne();return Ne(i.preview.set(o))})("blur",function(){xe(n);let o=ne();return Ne(o.preview.set(null))})("click",function(){let o=xe(n).$implicit,i=ne();return Ne(i.toggle(o))}),M(1),O()}if(t&2){let n=e.$implicit,r=ne();st("data-type",n.type)("aria-pressed",r.pinned()===n),N(),Ke(" ",n.name," ")}}function HN(t,e){t&1&&(A(0,"p",9),M(1),O()),t&2&&(N(),Ke("Super effective against: ",e))}function VN(t,e){if(t&1){let n=$t();A(0,"div",4)(1,"div",6)(2,"strong"),M(3),O(),A(4,"button",7),wt("click",function(){xe(n);let o=ne();return Ne(o.close())}),M(5," Close "),O()(),A(6,"div",8)(7,"span"),M(8),O(),A(9,"span"),M(10),O(),A(11,"span"),M(12),O(),A(13,"span"),M(14),O()(),A(15,"p"),M(16),O(),Re(17,HN,2,1,"p",9),O()}if(t&2){let n,r=e,o=ne();N(3),re(r.name),N(5),dn("",r.type," \xB7 ",r.category),N(2),Ke("Power ",r.basePower==="0"?"\u2014":r.basePower),N(2),Ke("Accuracy ",r.accuracy),N(2),Ke("PP ",r.pp),N(2),Ke(" ",r.desc==="No additional effect."?r.shortDesc:r.desc," "),N(),ke((n=o.advantages(r))?17:-1,n)}}var iD=(()=>{class t{constructor(){this.data=I(Ge),this.preview=be(null),this.pinned=be(null),this.inspected=he(()=>this.pinned()??this.preview()),this.typeCalc=I(uu),on(()=>{this.data.view(),this.close()})}toggle(n){this.preview.set(null),this.pinned.set(this.pinned()===n?null:n)}close(){this.pinned.set(null),this.preview.set(null)}advantages(n){return n.category==="Status"?"":this.typeCalc.advantages(n.type).map(r=>r.name.charAt(0).toUpperCase()+r.name.slice(1)).join(", ")}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=ie({type:t,selectors:[["app-pokemon-moves"]],decls:7,vars:2,consts:[["id","pokemonMoves","aria-labelledby","moves-heading",3,"keydown.escape"],["id","moves-heading"],[1,"tri-chips"],["type","button","aria-controls","move-detail",1,"tri-info-btn"],["id","move-detail",1,"tri-inspect"],["type","button","aria-controls","move-detail",1,"tri-info-btn",3,"pointerenter","pointerleave","focus","blur","click"],[1,"tri-inspect-top"],["type","button","aria-label","Close move details",3,"click"],[1,"tri-inspect-meta"],[1,"tri-muted","mt-2"]],template:function(r,o){if(r&1&&(A(0,"section",0),wt("keydown.escape",function(){return o.close()}),A(1,"h3",1),M(2,"Moves"),O(),A(3,"div",2),de(4,LN,2,3,"button",3,FN),O(),Re(6,VN,18,8,"div",4),O()),r&2){let i;N(4),fe(o.data.view()?.moves??Gf(1,ON)),N(2),ke((i=o.inspected())?6:-1,i)}},encapsulation:2})}}return t})();function UN(t,e){if(t&1&&(A(0,"li",4)(1,"span",5),M(2),O(),A(3,"span"),M(4),O()()),t&2){let n=e.$implicit;N(),ci("tri-time",n.type==="Time"),N(),dn("",n.threshold,"% ",n.type),N(2),re(n.action)}}var sD=(()=>{class t{constructor(){this.data=I(Ge),this.actions=he(()=>[...this.data.view()?.raid.info.actions??[]].sort((n,r)=>r.threshold-n.threshold))}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=ie({type:t,selectors:[["app-pokemon-actions"]],decls:9,vars:1,consts:[["id","pokemonActions",1,"tri-block"],["open",""],[1,"tri-muted"],[1,"tri-actions"],[1,"tri-action"],[1,"tri-threshold"]],template:function(r,o){r&1&&(A(0,"section",0)(1,"details",1)(2,"summary"),M(3," Raid actions "),A(4,"span",2),M(5),O()(),A(6,"ol",3),de(7,UN,5,5,"li",4,Bf),O()()()),r&2&&(N(5),Ke("(",o.actions().length,")"),N(2),fe(o.actions()))},encapsulation:2})}}return t})();var jN=(t,e)=>e.name;function BN(t,e){if(t&1&&(A(0,"span",3),M(1),A(2,"strong"),M(3),O()()),t&2){let n=e.$implicit;N(),Ke("",n.name," "),N(2),Ke("",n.chance,"%")}}function $N(t,e){t&1&&(A(0,"p",4),M(1,"No Herba Mystica drops."),O())}function GN(t,e){t&1&&(A(0,"section",0)(1,"h3",1),M(2,"Herba Mystica"),O(),A(3,"div",2),de(4,BN,4,2,"span",3,jN,!1,$N,2,0,"p",4),O()()),t&2&&(N(4),fe(e.raid.info.herbs))}var aD=(()=>{class t{constructor(){this.data=I(Ge)}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=ie({type:t,selectors:[["app-pokemon-herbs"]],decls:1,vars:1,consts:[["id","pokemonHerbs","aria-labelledby","herbs-heading",1,"tri-block"],["id","herbs-heading"],[1,"tri-chips"],[1,"tri-tag","tri-herbs"],[1,"tri-muted"]],template:function(r,o){if(r&1&&Re(0,GN,7,1,"section",0),r&2){let i;ke((i=o.data.view())?0:-1,i)}},encapsulation:2})}}return t})();var cD=(t,e)=>e.name,WN=(t,e)=>e.label;function zN(t,e){if(t&1&&(A(0,"span",3),M(1),O()),t&2){let n=e.$implicit,r=ne();st("data-type",r.title(n.name)),N(),Ke("",r.title(n.name)," 2\xD7")}}function qN(t,e){t&1&&(A(0,"span",4),M(1,"No super effective move types."),O())}function QN(t,e){if(t&1&&(A(0,"span",3),M(1),O()),t&2){let n=e.$implicit,r=ne(3);st("data-type",r.title(n.name)),N(),re(r.title(n.name))}}function KN(t,e){if(t&1&&(A(0,"div",7)(1,"span"),M(2),O(),A(3,"div",8),de(4,QN,2,2,"span",3,cD),O()()),t&2){let n=e.$implicit;N(2),re(n.label),N(2),fe(n.types)}}function YN(t,e){if(t&1&&de(0,KN,6,1,"div",7,WN),t&2){let n=ne();fe(n.groups())}}function ZN(t,e){t&1&&(A(0,"p",4),M(1," Choose a Tera type to see weaknesses, resistances, and immunities. "),O())}var lD=(()=>{class t{constructor(){this.data=I(Ge),this.state=I(rt),this.typeCalc=I(uu),this.offense=he(()=>{let n=this.data.view()?.moves??[],r=[...new Set(n.filter(o=>o.category!=="Status"&&o.name!=="Tera Blast").map(o=>o.type))];return n.some(o=>o.name==="Tera Blast")&&this.state.selection().tera&&r.push(this.state.selection().tera),[...new Map(r.flatMap(o=>this.typeCalc.advantages(o)).map(o=>[o.name,o])).values()].sort((o,i)=>o.name.localeCompare(i.name))}),this.teraMatchups=he(()=>this.typeCalc.weaknesses(this.state.selection().tera)),this.groups=he(()=>[{label:"Weak to \xB7 2\xD7",types:this.teraMatchups().filter(n=>n.multiplier===2)},{label:"Resists \xB7 \xBD\xD7",types:this.teraMatchups().filter(n=>n.multiplier===.5)},{label:"Immune \xB7 0\xD7",types:this.teraMatchups().filter(n=>n.multiplier===0)}].filter(n=>n.types.length))}title(n){return n.charAt(0).toUpperCase()+n.slice(1)}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=ie({type:t,selectors:[["app-pokemon-type-matchups"]],decls:12,vars:2,consts:[["id","pokemonTypeAdvantages","aria-labelledby","advantages-heading",1,"tri-block"],["id","advantages-heading"],[1,"tri-chips"],[1,"tri-tag"],[1,"tri-muted"],["id","pokemonTeraWeaknesses","aria-labelledby","tera-heading",1,"tri-block"],["id","tera-heading"],[1,"tri-match-row"],[1,"tri-tagset"]],template:function(r,o){r&1&&(A(0,"section",0)(1,"h3",1),M(2,"Move advantages"),O(),A(3,"div",2),de(4,zN,2,2,"span",3,cD,!1,qN,2,0,"span",4),O()(),A(7,"section",5)(8,"h3",6),M(9,"Tera matchups"),O(),Re(10,YN,2,0)(11,ZN,2,0,"p",4),O()),r&2&&(N(4),fe(o.offense()),N(6),ke(o.state.selection().tera?10:11))},encapsulation:2})}}return t})();function JN(t,e){t&1&&(B(0,"section",7)(1,"h2"),M(2,"Choose your raid"),$(),B(3,"p"),M(4," Select a raid tier, region, and Pok\xE9mon above to see its moves, abilities, actions, and matchups. "),$()())}function XN(t,e){t&1&&(B(0,"div",8),Ln(1,"img",16),B(2,"p"),M(3,"Loading raid\u2026"),$()())}function eR(t,e){if(t&1){let n=$t();B(0,"section",9)(1,"h2"),M(2),$(),B(3,"button",17),Qe("click",function(){xe(n);let o=ne();return Ne(o.data.retry())}),M(4," Try again "),$()()}if(t&2){let n=ne();N(2),re(n.data.error())}}function tR(t,e){if(t&1&&(B(0,"div",21)(1,"span",25),M(2,"Tera type"),$(),B(3,"span",26),M(4),$()()),t&2){let n=e;N(3),st("data-type",n),N(),re(n)}}function nR(t,e){if(t&1&&(B(0,"article",10)(1,"div",18)(2,"div")(3,"p",19),M(4),$(),B(5,"h2",20),M(6),$()(),Re(7,tR,5,2,"div",21),$(),B(8,"div",22)(9,"div",23),Ln(10,"app-pokemon-images")(11,"app-pokemon-types"),$(),B(12,"div",24),Ln(13,"app-pokemon-stats")(14,"app-pokemon-ability")(15,"app-pokemon-moves"),$()(),Ln(16,"app-pokemon-actions")(17,"app-pokemon-herbs")(18,"app-pokemon-type-matchups"),$()),t&2){let n,r=e,o=ne();N(4),dn(" ",r.tier," \u2605 raid \xB7 ",r.region," "),N(2),re(r.raid.name),N(),ke((n=o.state.selection().tera)?7:-1,n)}}var uD=(()=>{class t{constructor(){this.title="Tera Raid Info",this.state=I(rt),this.data=I(Ge)}ngOnInit(){this.autoPopulateSelections()}home(){this.state.changePokemon(""),this.state.changeTeraType(""),history.replaceState(null,"",new URL(document.baseURI).pathname)}autoPopulateSelections(n=window.location.href,r=window.location.origin){let o;try{let p=new URL(n,r),h=new URL(document.baseURI).pathname,m=p.pathname;m.startsWith("/tera-raid-info/")?m=m.slice(16):m.startsWith(h)&&(m=m.slice(h.length)),o=m.split("/").map(decodeURIComponent)}catch{return}let[i,s,c,l]=o;if(i!=="5"&&i!=="6")return;let u=Object.values(g).find(p=>p.toLowerCase()===s?.toLowerCase());if(!u)return;this.state.changeRaidTier(i),this.state.changeRegionList(u);let d=va(i,u).find(p=>p.name.toLowerCase()===c?.toLowerCase());d&&this.state.changePokemon(d.name);let f=Mo.find(p=>p.name.toLowerCase()===l?.toLowerCase());f&&this.state.changeTeraType(f.name)}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=ie({type:t,selectors:[["app-root"]],decls:42,vars:1,consts:[[1,"tri-product","mx-auto","w-full","max-w-5xl"],[1,"tri-top"],[1,"tri-brand"],["aria-hidden","true",1,"tri-brand-mark"],[1,"tri-top-actions"],["type","button",1,"tri-link",3,"click"],["aria-label","Choose your raid",1,"tri-filter"],[1,"tri-home"],["id","dataLoading","role","status",1,"tri-home"],["role","alert",1,"tri-home"],["id","pokemonContent","aria-labelledby","pokemon-name",1,"tri-detail"],[1,"tri-footer"],["href","https://github.com/kyle-undefined","target","_blank","rel","noopener noreferrer"],["href","https://www.serebii.net/","target","_blank","rel","noopener noreferrer"],["href","https://www.flaticon.com/authors/creatype","target","_blank","rel","noopener noreferrer"],["href","https://github.com/favware/graphql-pokemon","target","_blank","rel","noopener noreferrer"],["src","./assets/icons/pokeball.gif","alt","","width","64","height","64"],["type","button",1,"tri-primary",3,"click"],[1,"tri-identity"],[1,"tri-context"],["id","pokemon-name"],[1,"tri-tagset"],[1,"tri-main"],["id","pokemon",1,"tri-art-column"],[1,"tri-summary"],[1,"tri-tera-label"],[1,"tri-tag"]],template:function(r,o){if(r&1&&(B(0,"div",0)(1,"header")(2,"div",1)(3,"div",2)(4,"span",3),M(5,"\u25C7"),$(),B(6,"div")(7,"h1"),M(8,"Tera Raid Info"),$(),B(9,"small"),M(10,"Scarlet & Violet \xB7 Raid companion"),$()()(),B(11,"div",4)(12,"button",5),Qe("click",function(){return o.home()}),M(13,"Home"),$(),Ln(14,"app-share-raid"),$()(),B(15,"nav",6),Ln(16,"app-raid-tier")(17,"app-region")(18,"app-pokemon-list")(19,"app-tera-type"),$()(),B(20,"main"),Re(21,JN,5,0,"section",7)(22,XN,4,0,"div",8)(23,eR,5,1,"section",9)(24,nR,19,4,"article",10),$(),B(25,"footer",11)(26,"span"),M(27,"By "),B(28,"a",12),M(29,"Kyle Undefined"),$(),M(30," \xB7 Original design CronikCRS"),$(),B(31,"span"),M(32,"Images: "),B(33,"a",13),M(34,"Serebii"),$(),M(35," & "),B(36,"a",14),M(37,"Creatype"),$()(),B(38,"span"),M(39,"Data: "),B(40,"a",15),M(41,"GraphQL-Pokemon"),$()()()()),r&2){let i;N(21),ke(o.state.selection().pokemon?o.data.loading()?22:o.data.error()?23:(i=o.data.view())?24:-1:21,i)}},dependencies:[YE,ZE,JE,XE,eD,tD,nD,rD,oD,iD,sD,aD,lD],encapsulation:2})}}return t})();var rR=(t,e,n)=>{let r=["POST","PUT","PATCH"].indexOf(t.method.toUpperCase())!==-1,o=u=>["variables","extensions"].indexOf(u.toLowerCase())!==-1,i=t.body.length,s=t.options&&t.options.useMultipart,c;if(s){if(i)return new F(u=>u.error(new Error("File upload is not available when combined with Batching")));if(!r)return new F(u=>u.error(new Error("File upload is not available when GET is used")));if(!n)return new F(u=>u.error(new Error(`To use File upload you need to pass "extractFiles" function from "extract-files" library to HttpLink's options`)));c=n(t.body),s=!!c.files.size}let l={};if(i){if(!r)return new F(u=>u.error(new Error("Batching is not available for GET requests")));l={body:t.body}}else{let u=s?c.clone:t.body;r?l={body:u}:l={params:Object.keys(t.body).reduce((f,p)=>{let h=t.body[p];return f[p]=o(p)?JSON.stringify(h):h,f},{})}}if(s&&r){let u=new FormData;u.append("operations",JSON.stringify(l.body));let d={},f=c.files,p=0;f.forEach(h=>{d[++p]=h}),u.append("map",JSON.stringify(d)),p=0,f.forEach((h,m)=>{u.append(++p+"",m,m.name)}),l.body=u}return e.request(t.method,t.url,S(S({observe:"response",responseType:"json",reportProgress:!1},l),t.options))},oR=t=>t instanceof Ot?t:new Ot(t);var iR=(t,e)=>t&&e?e.keys().reduce((n,r)=>n.set(r,e.getAll(r)),t):e||t,dD=(t,e)=>t&&e?[...t.keys()].reduce((n,r)=>n.set(r,t.get(r)),e):e||t;function sR(...t){return t.find(e=>typeof e<"u")}function aR(t){let e=oR(t.headers);if(t.clientAwareness){let{name:n,version:r}=t.clientAwareness;n&&!e.has("apollographql-client-name")&&(e=e.set("apollographql-client-name",n)),r&&!e.has("apollographql-client-version")&&(e=e.set("apollographql-client-version",r))}return e}var cR={batchInterval:10,batchMax:10,uri:"graphql",method:"POST",withCredentials:!1,includeQuery:!0,includeExtensions:!1,useMultipart:!1};function ki(t,e,n){return sR(t[n],e[n],cR[n])}function lR(t){let e={status:t.status,statusText:t.statusText,ok:t.ok,url:t.url||"",headers:new Headers,type:"error",redirected:!1};t.headers.keys().forEach(r=>{let o=t.headers.getAll(r);o&&o.forEach(i=>e.headers.append(r,i))});let n=typeof t.error=="string"?t.error:JSON.stringify(t.error||{});return t.status>=300?new ma(`Response not successful: Received status code ${t.status}`,{response:e,bodyText:n}):new Error(t.message)}var Op=class extends Sr{httpClient;options;requester;print=pi;constructor(e,n){super(),this.httpClient=e,this.options=n,this.options.operationPrinter&&(this.print=this.options.operationPrinter),this.requester=r=>new F(o=>{let i=r.getContext(),s=ki(i,this.options,"method"),c=ki(i,this.options,"includeQuery"),l=ki(i,this.options,"includeExtensions"),u=ki(i,this.options,"uri"),d=ki(i,this.options,"withCredentials"),f=ki(i,this.options,"useMultipart"),p=this.options.useGETForQueries===!0,h=dD(i.httpContext,dD(this.options.httpContext,new ui)),m=r.query.definitions.some(D=>D.kind==="OperationDefinition"&&D.operation==="query");p&&m&&(s="GET");let v=iR(this.options.headers,aR(i)),y={method:s,url:typeof u=="function"?u(r):u,body:{operationName:r.operationName,variables:r.variables},options:{withCredentials:d,useMultipart:f,headers:v,context:h}};l&&(y.body.extensions=r.extensions),c&&(y.body.query=this.print(r.query));let b=rR(y,this.httpClient,this.options.extractFiles).subscribe({next:D=>{r.setContext({response:D}),o.next(D.body)},error:D=>{D instanceof Vn?o.error(lR(D)):o.error(D)},complete:()=>o.complete()});return()=>{b.closed||b.unsubscribe()}})}request(e){return this.requester(e)}},fD=(()=>{class t{httpClient;constructor(n){this.httpClient=n}create(n){return new Op(this.httpClient,n)}static \u0275fac=function(r){return new(r||t)(q(Dl))};static \u0275prov=Y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();nh(uD,{providers:[ch(),SE(()=>{let t=I(fD);return{cache:new Io,link:t.create({uri:"https://graphqlpokemon.favware.tech/v8"})}})]}).catch(t=>console.error(t));
