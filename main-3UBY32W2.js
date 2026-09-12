var Tb=Object.defineProperty,wb=Object.defineProperties;var Cb=Object.getOwnPropertyDescriptors;var ta=Object.getOwnPropertySymbols;var fp=Object.prototype.hasOwnProperty,hp=Object.prototype.propertyIsEnumerable;var dp=(t,e,n)=>e in t?Tb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,v=(t,e)=>{for(var n in e||={})fp.call(e,n)&&dp(t,n,e[n]);if(ta)for(var n of ta(e))hp.call(e,n)&&dp(t,n,e[n]);return t},C=(t,e)=>wb(t,Cb(e));var na=t=>typeof t=="symbol"?t:t+"",pe=(t,e)=>{var n={};for(var r in t)fp.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&ta)for(var r of ta(t))e.indexOf(r)<0&&hp.call(t,r)&&(n[r]=t[r]);return n};var J=(t,e,n)=>new Promise((r,o)=>{var i=l=>{try{c(n.next(l))}catch(u){o(u)}},s=l=>{try{c(n.throw(l))}catch(u){o(u)}},c=l=>l.done?r(l.value):Promise.resolve(l.value).then(i,s);c((n=n.apply(t,e)).next())});var Be=null,ra=!1,Fl=1,Ib=null,st=Symbol("SIGNAL");function G(t){let e=Be;return Be=t,e}function ia(){return Be}var fi={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function hi(t){if(ra)throw new Error("");if(Be===null)return;Be.consumerOnSignalRead(t);let e=Be.producersTail;if(e!==void 0&&e.producer===t)return;let n,r=Be.recomputing;if(r&&(n=e!==void 0?e.nextProducer:Be.producers,n!==void 0&&n.producer===t)){Be.producersTail=n,n.lastReadVersion=t.version;return}let o=t.consumersTail;if(o!==void 0&&o.consumer===Be&&(!r||Pb(o,Be)))return;let i=Yr(Be),s={producer:t,consumer:Be,nextProducer:n,prevConsumer:o,lastReadVersion:t.version,nextConsumer:void 0};Be.producersTail=s,e!==void 0?e.nextProducer=s:Be.producers=s,i&&yp(t,s)}function pp(){Fl++}function Ll(t){if(!(Yr(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Fl)){if(!t.producerMustRecompute(t)&&!aa(t)){oa(t);return}t.producerRecomputeValue(t),oa(t)}}function Hl(t){if(t.consumers===void 0)return;let e=ra;ra=!0;try{for(let n=t.consumers;n!==void 0;n=n.nextConsumer){let r=n.consumer;r.dirty||Rb(r)}}finally{ra=e}}function Ul(){return Be?.consumerAllowSignalWrites!==!1}function Rb(t){t.dirty=!0,Hl(t),t.consumerMarkedDirty?.(t)}function oa(t){t.dirty=!1,t.lastCleanEpoch=Fl}function pi(t){return t&&mp(t),G(t)}function mp(t){t.producersTail=void 0,t.recomputing=!0}function sa(t,e){G(e),t&&gp(t)}function gp(t){t.recomputing=!1;let e=t.producersTail,n=e!==void 0?e.nextProducer:t.producers;if(n!==void 0){if(Yr(t))do n=jl(n);while(n!==void 0);e!==void 0?e.nextProducer=void 0:t.producers=void 0}}function aa(t){for(let e=t.producers;e!==void 0;e=e.nextProducer){let n=e.producer,r=e.lastReadVersion;if(r!==n.version||(Ll(n),r!==n.version))return!0}return!1}function mi(t){if(Yr(t)){let e=t.producers;for(;e!==void 0;)e=jl(e)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function yp(t,e){let n=t.consumersTail,r=Yr(t);if(n!==void 0?(e.nextConsumer=n.nextConsumer,n.nextConsumer=e):(e.nextConsumer=void 0,t.consumers=e),e.prevConsumer=n,t.consumersTail=e,!r)for(let o=t.producers;o!==void 0;o=o.nextProducer)yp(o.producer,o)}function jl(t){let e=t.producer,n=t.nextProducer,r=t.nextConsumer,o=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,r!==void 0?r.prevConsumer=o:e.consumersTail=o,o!==void 0)o.nextConsumer=r;else if(e.consumers=r,!Yr(e)){let i=e.producers;for(;i!==void 0;)i=jl(i)}return n}function Yr(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Bl(t){Ib?.(t)}function Pb(t,e){let n=e.producersTail;if(n!==void 0){let r=e.producers;do{if(r===t)return!0;if(r===n)break;r=r.nextProducer}while(r!==void 0)}return!1}function Vl(t,e){return Object.is(t,e)}function Mb(){throw new Error}var vp=Mb;function Sp(t){vp(t)}function $l(t){vp=t}var _b=null;function zl(t,e){let n=Object.create(ca);n.value=t,e!==void 0&&(n.equal=e);let r=()=>Dp(n);return r[st]=n,Bl(n),[r,s=>Zr(n,s),s=>Wl(n,s)]}function Dp(t){return hi(t),t.value}function Zr(t,e){Ul()||Sp(t),t.equal(t.value,e)||(t.value=e,kb(t))}function Wl(t,e){Ul()||Sp(t),Zr(t,e(t.value))}var ca=C(v({},fi),{equal:Vl,value:void 0,kind:"signal"});function kb(t){t.version++,pp(),Hl(t),_b?.(t)}function B(t){return typeof t=="function"}function Jr(t){let n=t(r=>{Error.call(r),r.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var la=Jr(t=>function(n){t(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function or(t,e){if(t){let n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Ae=class t{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let i of n)i.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(B(r))try{r()}catch(i){e=i instanceof la?i.errors:[i]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let i of o)try{bp(i)}catch(s){e=e??[],s instanceof la?e=[...e,...s.errors]:e.push(s)}}if(e)throw new la(e)}}add(e){var n;if(e&&e!==this)if(this.closed)bp(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}}_hasParent(e){let{_parentage:n}=this;return n===e||Array.isArray(n)&&n.includes(e)}_addParent(e){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e}_removeParent(e){let{_parentage:n}=this;n===e?this._parentage=null:Array.isArray(n)&&or(n,e)}remove(e){let{_finalizers:n}=this;n&&or(n,e),e instanceof t&&e._removeParent(this)}};Ae.EMPTY=(()=>{let t=new Ae;return t.closed=!0,t})();var ql=Ae.EMPTY;function ua(t){return t instanceof Ae||t&&"closed"in t&&B(t.remove)&&B(t.add)&&B(t.unsubscribe)}function bp(t){B(t)?t():t.unsubscribe()}var Tt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Xr={setTimeout(t,e,...n){let{delegate:r}=Xr;return r?.setTimeout?r.setTimeout(t,e,...n):setTimeout(t,e,...n)},clearTimeout(t){let{delegate:e}=Xr;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function da(t){Xr.setTimeout(()=>{let{onUnhandledError:e}=Tt;if(e)e(t);else throw t})}function gi(){}var Ep=Gl("C",void 0,void 0);function Tp(t){return Gl("E",void 0,t)}function wp(t){return Gl("N",t,void 0)}function Gl(t,e,n){return{kind:t,value:e,error:n}}var ir=null;function eo(t){if(Tt.useDeprecatedSynchronousErrorHandling){let e=!ir;if(e&&(ir={errorThrown:!1,error:null}),t(),e){let{errorThrown:n,error:r}=ir;if(ir=null,n)throw r}}else t()}function Cp(t){Tt.useDeprecatedSynchronousErrorHandling&&ir&&(ir.errorThrown=!0,ir.error=t)}var sr=class extends Ae{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,ua(e)&&e.add(this)):this.destination=Ab}static create(e,n,r){return new cn(e,n,r)}next(e){this.isStopped?Kl(wp(e),this):this._next(e)}error(e){this.isStopped?Kl(Tp(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Kl(Ep,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Nb=Function.prototype.bind;function Ql(t,e){return Nb.call(t,e)}var Yl=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:n}=this;if(n.next)try{n.next(e)}catch(r){fa(r)}}error(e){let{partialObserver:n}=this;if(n.error)try{n.error(e)}catch(r){fa(r)}else fa(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(n){fa(n)}}},cn=class extends sr{constructor(e,n,r){super();let o;if(B(e)||!e)o={next:e??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&Tt.useDeprecatedNextContext?(i=Object.create(e),i.unsubscribe=()=>this.unsubscribe(),o={next:e.next&&Ql(e.next,i),error:e.error&&Ql(e.error,i),complete:e.complete&&Ql(e.complete,i)}):o=e}this.destination=new Yl(o)}};function fa(t){Tt.useDeprecatedSynchronousErrorHandling?Cp(t):da(t)}function xb(t){throw t}function Kl(t,e){let{onStoppedNotification:n}=Tt;n&&Xr.setTimeout(()=>n(t,e))}var Ab={closed:!0,next:gi,error:xb,complete:gi};var to=typeof Symbol=="function"&&Symbol.observable||"@@observable";function at(t){return t}function Zl(...t){return Jl(t)}function Jl(t){return t.length===0?at:t.length===1?t[0]:function(n){return t.reduce((r,o)=>o(r),n)}}var F=(()=>{class t{constructor(n){n&&(this._subscribe=n)}lift(n){let r=new t;return r.source=this,r.operator=n,r}subscribe(n,r,o){let i=Fb(n)?n:new cn(n,r,o);return eo(()=>{let{operator:s,source:c}=this;i.add(s?s.call(i,c):c?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return r=Ip(r),new r((o,i)=>{let s=new cn({next:c=>{try{n(c)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(n)}[to](){return this}pipe(...n){return Jl(n)(this)}toPromise(n){return n=Ip(n),new n((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return t.create=e=>new t(e),t})();function Ip(t){var e;return(e=t??Tt.Promise)!==null&&e!==void 0?e:Promise}function Ob(t){return t&&B(t.next)&&B(t.error)&&B(t.complete)}function Fb(t){return t&&t instanceof sr||Ob(t)&&ua(t)}function Lb(t){return B(t?.lift)}function Y(t){return e=>{if(Lb(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Z(t,e,n,r,o){return new Xl(t,e,n,r,o)}var Xl=class extends sr{constructor(e,n,r,o,i,s){super(e),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(c){try{n(c)}catch(l){e.error(l)}}:super._next,this._error=o?function(c){try{o(c)}catch(l){e.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var Rp=Jr(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var me=(()=>{class t extends F{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let r=new ha(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Rp}next(n){eo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(n)}})}error(n){eo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){eo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:r,isStopped:o,observers:i}=this;return r||o?ql:(this.currentObservers=null,i.push(n),new Ae(()=>{this.currentObservers=null,or(i,n)}))}_checkFinalizedStatuses(n){let{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){let n=new F;return n.source=this,n}}return t.create=(e,n)=>new ha(e,n),t})(),ha=class extends me{constructor(e,n){super(),this.destination=e,this.source=n}next(e){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,e)}error(e){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,e)}complete(){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||n===void 0||n.call(e)}_subscribe(e){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(e))!==null&&r!==void 0?r:ql}};var le=class extends me{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let n=super._subscribe(e);return!n.closed&&e.next(this._value),n}getValue(){let{hasError:e,thrownError:n,_value:r}=this;if(e)throw n;return this._throwIfClosed(),r}next(e){super.next(this._value=e)}};var yi={now(){return(yi.delegate||Date).now()},delegate:void 0};var ar=class extends me{constructor(e=1/0,n=1/0,r=yi){super(),this._bufferSize=e,this._windowTime=n,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=n===1/0,this._bufferSize=Math.max(1,e),this._windowTime=Math.max(1,n)}next(e){let{isStopped:n,_buffer:r,_infiniteTimeWindow:o,_timestampProvider:i,_windowTime:s}=this;n||(r.push(e),!o&&r.push(i.now()+s)),this._trimBuffer(),super.next(e)}_subscribe(e){this._throwIfClosed(),this._trimBuffer();let n=this._innerSubscribe(e),{_infiniteTimeWindow:r,_buffer:o}=this,i=o.slice();for(let s=0;s<i.length&&!e.closed;s+=r?1:2)e.next(i[s]);return this._checkFinalizedStatuses(e),n}_trimBuffer(){let{_bufferSize:e,_timestampProvider:n,_buffer:r,_infiniteTimeWindow:o}=this,i=(o?1:2)*e;if(e<1/0&&i<r.length&&r.splice(0,r.length-i),!o){let s=n.now(),c=0;for(let l=1;l<r.length&&r[l]<=s;l+=2)c=l;c&&r.splice(0,c+1)}}};var pa=class extends Ae{constructor(e,n){super()}schedule(e,n=0){return this}};var vi={setInterval(t,e,...n){let{delegate:r}=vi;return r?.setInterval?r.setInterval(t,e,...n):setInterval(t,e,...n)},clearInterval(t){let{delegate:e}=vi;return(e?.clearInterval||clearInterval)(t)},delegate:void 0};var no=class extends pa{constructor(e,n){super(e,n),this.scheduler=e,this.work=n,this.pending=!1}schedule(e,n=0){var r;if(this.closed)return this;this.state=e;let o=this.id,i=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(i,o,n)),this.pending=!0,this.delay=n,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(i,this.id,n),this}requestAsyncId(e,n,r=0){return vi.setInterval(e.flush.bind(e,this),r)}recycleAsyncId(e,n,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return n;n!=null&&vi.clearInterval(n)}execute(e,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let r=this._execute(e,n);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,n){let r=!1,o;try{this.work(e)}catch(i){r=!0,o=i||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){let{id:e,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,or(r,this),e!=null&&(this.id=this.recycleAsyncId(n,e,null)),this.delay=null,super.unsubscribe()}}};var ro=class t{constructor(e,n=t.now){this.schedulerActionCtor=e,this.now=n}schedule(e,n=0,r){return new this.schedulerActionCtor(this,e).schedule(r,n)}};ro.now=yi.now;var oo=class extends ro{constructor(e,n=ro.now){super(e,n),this.actions=[],this._active=!1}flush(e){let{actions:n}=this;if(this._active){n.push(e);return}let r;this._active=!0;do if(r=e.execute(e.state,e.delay))break;while(e=n.shift());if(this._active=!1,r){for(;e=n.shift();)e.unsubscribe();throw r}}};var Hb=new oo(no),Pp=Hb;var ma=class extends no{constructor(e,n){super(e,n),this.scheduler=e,this.work=n}schedule(e,n=0){return n>0?super.schedule(e,n):(this.delay=n,this.state=e,this.scheduler.flush(this),this)}execute(e,n){return n>0||this.closed?super.execute(e,n):this._execute(e,n)}requestAsyncId(e,n,r=0){return r!=null&&r>0||r==null&&this.delay>0?super.requestAsyncId(e,n,r):(e.flush(this),0)}};var ga=class extends oo{};var eu=new ga(ma);var ue=new F(t=>t.complete());function ya(t){return t&&B(t.schedule)}function Mp(t){return t[t.length-1]}function _p(t){return B(Mp(t))?t.pop():void 0}function Rn(t){return ya(Mp(t))?t.pop():void 0}var Si=function(){return Si=Object.assign||function(e){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Si.apply(this,arguments)};function Np(t,e,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function c(d){try{u(r.next(d))}catch(f){s(f)}}function l(d){try{u(r.throw(d))}catch(f){s(f)}}function u(d){d.done?i(d.value):o(d.value).then(c,l)}u((r=r.apply(t,e||[])).next())})}function kp(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function cr(t){return this instanceof cr?(this.v=t,this):new cr(t)}function xp(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),c("next"),c("throw"),c("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(p){return function(g){return Promise.resolve(g).then(p,f)}}function c(p,g){r[p]&&(o[p]=function(S){return new Promise(function(y,D){i.push([p,S,y,D])>1||l(p,S)})},g&&(o[p]=g(o[p])))}function l(p,g){try{u(r[p](g))}catch(S){h(i[0][3],S)}}function u(p){p.value instanceof cr?Promise.resolve(p.value.v).then(d,f):h(i[0][2],p)}function d(p){l("next",p)}function f(p){l("throw",p)}function h(p,g){p(g),i.shift(),i.length&&l(i[0][0],i[0][1])}}function Ap(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof kp=="function"?kp(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(s){return new Promise(function(c,l){s=t[i](s),o(c,l,s.done,s.value)})}}function o(i,s,c,l){Promise.resolve(l).then(function(u){i({value:u,done:c})},s)}}var va=t=>t&&typeof t.length=="number"&&typeof t!="function";function Sa(t){return B(t?.then)}function Da(t){return B(t[to])}function ba(t){return Symbol.asyncIterator&&B(t?.[Symbol.asyncIterator])}function Ea(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Ub(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ta=Ub();function wa(t){return B(t?.[Ta])}function Ca(t){return xp(this,arguments,function*(){let n=t.getReader();try{for(;;){let{value:r,done:o}=yield cr(n.read());if(o)return yield cr(void 0);yield yield cr(r)}}finally{n.releaseLock()}})}function Ia(t){return B(t?.getReader)}function Te(t){if(t instanceof F)return t;if(t!=null){if(Da(t))return jb(t);if(va(t))return Bb(t);if(Sa(t))return Vb(t);if(ba(t))return Op(t);if(wa(t))return $b(t);if(Ia(t))return zb(t)}throw Ea(t)}function jb(t){return new F(e=>{let n=t[to]();if(B(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Bb(t){return new F(e=>{for(let n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function Vb(t){return new F(e=>{t.then(n=>{e.closed||(e.next(n),e.complete())},n=>e.error(n)).then(null,da)})}function $b(t){return new F(e=>{for(let n of t)if(e.next(n),e.closed)return;e.complete()})}function Op(t){return new F(e=>{Wb(t,e).catch(n=>e.error(n))})}function zb(t){return Op(Ca(t))}function Wb(t,e){var n,r,o,i;return Np(this,void 0,void 0,function*(){try{for(n=Ap(t);r=yield n.next(),!r.done;){let s=r.value;if(e.next(s),e.closed)return}}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}e.complete()})}function Ye(t,e,n,r=0,o=!1){let i=e.schedule(function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(i),!o)return i}function lr(t,e=0){return Y((n,r)=>{n.subscribe(Z(r,o=>Ye(r,t,()=>r.next(o),e),()=>Ye(r,t,()=>r.complete(),e),o=>Ye(r,t,()=>r.error(o),e)))})}function Ra(t,e=0){return Y((n,r)=>{r.add(t.schedule(()=>n.subscribe(r),e))})}function Fp(t,e){return Te(t).pipe(Ra(e),lr(e))}function Lp(t,e){return Te(t).pipe(Ra(e),lr(e))}function Hp(t,e){return new F(n=>{let r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function Up(t,e){return new F(n=>{let r;return Ye(n,e,()=>{r=t[Ta](),Ye(n,e,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){n.error(s);return}i?n.complete():n.next(o)},0,!0)}),()=>B(r?.return)&&r.return()})}function Pa(t,e){if(!t)throw new Error("Iterable cannot be null");return new F(n=>{Ye(n,e,()=>{let r=t[Symbol.asyncIterator]();Ye(n,e,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function jp(t,e){return Pa(Ca(t),e)}function Bp(t,e){if(t!=null){if(Da(t))return Fp(t,e);if(va(t))return Hp(t,e);if(Sa(t))return Lp(t,e);if(ba(t))return Pa(t,e);if(wa(t))return Up(t,e);if(Ia(t))return jp(t,e)}throw Ea(t)}function re(t,e){return e?Bp(t,e):Te(t)}function U(...t){let e=Rn(t);return re(t,e)}function ur(t,e){let n=B(t)?t:()=>t,r=o=>o.error(n());return new F(e?o=>e.schedule(r,0,o):r)}var Pn=class t{constructor(e,n,r){this.kind=e,this.value=n,this.error=r,this.hasValue=e==="N"}observe(e){return qb(this,e)}do(e,n,r){let{kind:o,value:i,error:s}=this;return o==="N"?e?.(i):o==="E"?n?.(s):r?.()}accept(e,n,r){var o;return B((o=e)===null||o===void 0?void 0:o.next)?this.observe(e):this.do(e,n,r)}toObservable(){let{kind:e,value:n,error:r}=this,o=e==="N"?U(n):e==="E"?ur(()=>r):e==="C"?ue:0;if(!o)throw new TypeError(`Unexpected notification kind ${e}`);return o}static createNext(e){return new t("N",e)}static createError(e){return new t("E",void 0,e)}static createComplete(){return t.completeNotification}};Pn.completeNotification=new Pn("C");function qb(t,e){var n,r,o;let{kind:i,value:s,error:c}=t;if(typeof i!="string")throw new TypeError('Invalid notification, missing "kind"');i==="N"?(n=e.next)===null||n===void 0||n.call(e,s):i==="E"?(r=e.error)===null||r===void 0||r.call(e,c):(o=e.complete)===null||o===void 0||o.call(e)}function Ma(t){return!!t&&(t instanceof F||B(t.lift)&&B(t.subscribe))}var ln=Jr(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function tu(t,e){let n=typeof e=="object";return new Promise((r,o)=>{let i=!1,s;t.subscribe({next:c=>{s=c,i=!0},error:o,complete:()=>{i?r(s):n?r(e.defaultValue):o(new ln)}})})}function Vp(t){return t instanceof Date&&!isNaN(t)}function L(t,e){return Y((n,r)=>{let o=0;n.subscribe(Z(r,i=>{r.next(t.call(e,i,o++))}))})}var{isArray:Gb}=Array;function Qb(t,e){return Gb(e)?t(...e):t(e)}function $p(t){return L(e=>Qb(t,e))}var{isArray:Kb}=Array,{getPrototypeOf:Yb,prototype:Zb,keys:Jb}=Object;function zp(t){if(t.length===1){let e=t[0];if(Kb(e))return{args:e,keys:null};if(Xb(e)){let n=Jb(e);return{args:n.map(r=>e[r]),keys:n}}}return{args:t,keys:null}}function Xb(t){return t&&typeof t=="object"&&Yb(t)===Zb}function Wp(t,e){return t.reduce((n,r,o)=>(n[r]=e[o],n),{})}function nu(...t){let e=Rn(t),n=_p(t),{args:r,keys:o}=zp(t);if(r.length===0)return re([],e);let i=new F(eE(r,e,o?s=>Wp(o,s):at));return n?i.pipe($p(n)):i}function eE(t,e,n=at){return r=>{qp(e,()=>{let{length:o}=t,i=new Array(o),s=o,c=o;for(let l=0;l<o;l++)qp(e,()=>{let u=re(t[l],e),d=!1;u.subscribe(Z(r,f=>{i[l]=f,d||(d=!0,c--),c||r.next(n(i.slice()))},()=>{--s||r.complete()}))},r)},r)}}function qp(t,e,n){t?Ye(n,t,e):e()}function Gp(t,e,n,r,o,i,s,c){let l=[],u=0,d=0,f=!1,h=()=>{f&&!l.length&&!u&&e.complete()},p=S=>u<r?g(S):l.push(S),g=S=>{i&&e.next(S),u++;let y=!1;Te(n(S,d++)).subscribe(Z(e,D=>{o?.(D),i?p(D):e.next(D)},()=>{y=!0},void 0,()=>{if(y)try{for(u--;l.length&&u<r;){let D=l.shift();s?Ye(e,s,()=>g(D)):g(D)}h()}catch(D){e.error(D)}}))};return t.subscribe(Z(e,p,()=>{f=!0,h()})),()=>{c?.()}}function we(t,e,n=1/0){return B(e)?we((r,o)=>L((i,s)=>e(r,i,o,s))(Te(t(r,o))),n):(typeof e=="number"&&(n=e),Y((r,o)=>Gp(r,o,t,n)))}function Qp(t=1/0){return we(at,t)}function Kp(){return Qp(1)}function Ut(...t){return Kp()(re(t,Rn(t)))}function Di(t){return new F(e=>{Te(t()).subscribe(e)})}function ru(t=0,e,n=Pp){let r=-1;return e!=null&&(ya(e)?n=e:r=e),new F(o=>{let i=Vp(t)?+t-n.now():t;i<0&&(i=0);let s=0;return n.schedule(function(){o.closed||(o.next(s++),0<=r?this.schedule(void 0,r):o.complete())},i)})}function Me(t,e){return Y((n,r)=>{let o=0;n.subscribe(Z(r,i=>t.call(e,i,o++)&&r.next(i)))})}function jt(t){return Y((e,n)=>{let r=null,o=!1,i;r=e.subscribe(Z(n,void 0,void 0,s=>{i=Te(t(s,jt(t)(e))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function io(t,e){return B(e)?we(t,e,1):we(t,1)}function Yp(t){return Y((e,n)=>{let r=!1;e.subscribe(Z(n,o=>{r=!0,n.next(o)},()=>{r||n.next(t),n.complete()}))})}function un(t){return t<=0?()=>ue:Y((e,n)=>{let r=0;e.subscribe(Z(n,o=>{++r<=t&&(n.next(o),t<=r&&n.complete())}))})}function ou(t,e=at){return t=t??tE,Y((n,r)=>{let o,i=!0;n.subscribe(Z(r,s=>{let c=e(s);(i||!t(o,c))&&(i=!1,o=c,r.next(s))}))})}function tE(t,e){return t===e}function Zp(t=nE){return Y((e,n)=>{let r=!1;e.subscribe(Z(n,o=>{r=!0,n.next(o)},()=>r?n.complete():n.error(t())))})}function nE(){return new ln}function Mn(t){return Y((e,n)=>{try{e.subscribe(n)}finally{n.add(t)}})}function dn(t,e){let n=arguments.length>=2;return r=>r.pipe(t?Me((o,i)=>t(o,i,r)):at,un(1),n?Yp(e):Zp(()=>new ln))}function _a(t){return t<=0?()=>ue:Y((e,n)=>{let r=[];e.subscribe(Z(n,o=>{r.push(o),t<r.length&&r.shift()},()=>{for(let o of r)n.next(o);n.complete()},void 0,()=>{r=null}))})}function iu(){return Y((t,e)=>{t.subscribe(Z(e,n=>{e.next(Pn.createNext(n))},()=>{e.next(Pn.createComplete()),e.complete()},n=>{e.next(Pn.createError(n)),e.complete()}))})}function Bt(t={}){let{connector:e=()=>new me,resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=t;return i=>{let s,c,l,u=0,d=!1,f=!1,h=()=>{c?.unsubscribe(),c=void 0},p=()=>{h(),s=l=void 0,d=f=!1},g=()=>{let S=s;p(),S?.unsubscribe()};return Y((S,y)=>{u++,!f&&!d&&h();let D=l=l??e();y.add(()=>{u--,u===0&&!f&&!d&&(c=su(g,o))}),D.subscribe(y),!s&&u>0&&(s=new cn({next:w=>D.next(w),error:w=>{f=!0,h(),c=su(p,n,w),D.error(w)},complete:()=>{d=!0,h(),c=su(p,r),D.complete()}}),Te(S).subscribe(s))})(i)}}function su(t,e,...n){if(e===!0){t();return}if(e===!1)return;let r=new cn({next:()=>{r.unsubscribe(),t()}});return Te(e(...n)).subscribe(r)}function dr(t,e,n){let r,o=!1;return t&&typeof t=="object"?{bufferSize:r=1/0,windowTime:e=1/0,refCount:o=!1,scheduler:n}=t:r=t??1/0,Bt({connector:()=>new ar(r,e,n),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:o})}function bi(...t){let e=Rn(t);return Y((n,r)=>{(e?Ut(t,n,e):Ut(t,n)).subscribe(r)})}function ct(t,e){return Y((n,r)=>{let o=null,i=0,s=!1,c=()=>s&&!o&&r.complete();n.subscribe(Z(r,l=>{o?.unsubscribe();let u=0,d=i++;Te(t(l,d)).subscribe(o=Z(r,f=>r.next(e?e(l,f,d,u++):f),()=>{o=null,c()}))},()=>{s=!0,c()}))})}function Ei(t){return Y((e,n)=>{Te(t).subscribe(Z(n,()=>n.complete(),gi)),!n.closed&&e.subscribe(n)})}function Ce(t,e,n){let r=B(t)||e||n?{next:t,error:e,complete:n}:t;return r?Y((o,i)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let c=!0;o.subscribe(Z(i,l=>{var u;(u=r.next)===null||u===void 0||u.call(r,l),i.next(l)},()=>{var l;c=!1,(l=r.complete)===null||l===void 0||l.call(r),i.complete()},l=>{var u;c=!1,(u=r.error)===null||u===void 0||u.call(r,l),i.error(l)},()=>{var l,u;c&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):at}var au;function ka(){return au}function Vt(t){let e=au;return au=t,e}var Jp=Symbol("NotFound");function so(t){return t===Jp||t?.name==="\u0275NotFound"}function Xp(t){let e=G(null);try{return t()}finally{G(e)}}var x=class extends Error{code;constructor(e,n){super(co(e,n)),this.code=e}};function sE(t){return`NG0${Math.abs(t)}`}function co(t,e){return`${sE(t)}${e?": "+e:""}`}function te(t){for(let e in t)if(t[e]===te)return e;throw Error("")}function La(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(La).join(", ")}]`;if(t==null)return""+t;let e=t.overriddenName||t.name;if(e)return`${e}`;let n=t.toString();if(n==null)return""+n;let r=n.indexOf(`
`);return r>=0?n.slice(0,r):n}function Eu(t,e){return t?e?`${t} ${e}`:t:e||""}var aE=te({__forward_ref__:te});function Ha(t){return t.__forward_ref__=Ha,t}function Ze(t){return Tu(t)?t():t}function Tu(t){return typeof t=="function"&&t.hasOwnProperty(aE)&&t.__forward_ref__===Ha}function N(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function yr(t){return{providers:t.providers||[],imports:t.imports||[]}}function Pi(t){return cE(t,Ua)}function wu(t){return Pi(t)!==null}function cE(t,e){return t.hasOwnProperty(e)&&t[e]||null}function lE(t){let e=t?.[Ua]??null;return e||null}function lu(t){return t&&t.hasOwnProperty(xa)?t[xa]:null}var Ua=te({\u0275prov:te}),xa=te({\u0275inj:te}),A=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,n){this._desc=e,this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=N({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Cu(t){return t&&!!t.\u0275providers}var Iu=te({\u0275cmp:te}),Ru=te({\u0275dir:te}),Pu=te({\u0275pipe:te}),Mu=te({\u0275mod:te}),wi=te({\u0275fac:te}),vr=te({__NG_ELEMENT_ID__:te}),em=te({__NG_ENV_ID__:te});function _u(t){return ja(t,"@NgModule"),t[Mu]||null}function kn(t){return ja(t,"@Component"),t[Iu]||null}function ku(t){return ja(t,"@Directive"),t[Ru]||null}function om(t){return ja(t,"@Pipe"),t[Pu]||null}function ja(t,e){if(t==null)throw new x(-919,!1)}var im=te({ngErrorCode:te}),uE=te({ngErrorMessage:te}),dE=te({ngTokenPath:te});function Nu(t,e){return sm("",-200,e)}function Ba(t,e){throw new x(-201,!1)}function sm(t,e,n){let r=new x(e,t);return r[im]=e,r[uE]=t,n&&(r[dE]=n),r}function fE(t){return t[im]}var uu;function am(){return uu}function lt(t){let e=uu;return uu=t,e}function xu(t,e,n){let r=Pi(t);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(n&8)return null;if(e!==void 0)return e;Ba(t,"")}var hE={},fr=hE,pE="__NG_DI_FLAG__",du=class{injector;constructor(e){this.injector=e}retrieve(e,n){let r=hr(n)||0;try{return this.injector.get(e,r&8?null:fr,r)}catch(o){if(so(o))return o;throw o}}};function mE(t,e=0){let n=ka();if(n===void 0)throw new x(-203,!1);if(n===null)return xu(t,void 0,e);{let r=gE(e),o=n.retrieve(t,r);if(so(o)){if(r.optional)return null;throw o}return o}}function O(t,e=0){return(am()||mE)(Ze(t),e)}function P(t,e){return O(t,hr(e))}function hr(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function gE(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function fu(t){let e=[];for(let n=0;n<t.length;n++){let r=Ze(t[n]);if(Array.isArray(r)){if(r.length===0)throw new x(900,!1);let o,i=0;for(let s=0;s<r.length;s++){let c=r[s],l=yE(c);typeof l=="number"?l===-1?o=c.token:i|=l:o=c}e.push(O(o,i))}else e.push(O(r))}return e}function yE(t){return t[pE]}function pr(t,e){let n=t.hasOwnProperty(wi);return n?t[wi]:null}function Va(t,e){t.forEach(n=>Array.isArray(n)?Va(n,e):e(n))}function Au(t,e,n){e>=t.length?t.push(n):t.splice(e,0,n)}function Mi(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}var Sr={},wt=[],lo=new A(""),Ou=new A("",-1),Fu=new A(""),Ci=class{get(e,n=fr){if(n===fr){let o=sm("",-201);throw o.name="\u0275NotFound",o}return n}};function uo(t){return{\u0275providers:t}}function cm(...t){return{\u0275providers:Lu(!0,t),\u0275fromNgModule:!0}}function Lu(t,...e){let n=[],r=new Set,o,i=s=>{n.push(s)};return Va(e,s=>{let c=s;Aa(c,i,[],r)&&(o||=[],o.push(c))}),o!==void 0&&lm(o,i),n}function lm(t,e){for(let n=0;n<t.length;n++){let{ngModule:r,providers:o}=t[n];Hu(o,i=>{e(i,r)})}}function Aa(t,e,n,r){if(t=Ze(t),!t)return!1;let o=null,i=lu(t),s=!i&&kn(t);if(!i&&!s){let l=t.ngModule;if(i=lu(l),i)o=l;else return!1}else{if(s&&!s.standalone)return!1;o=t}let c=r.has(o);if(s){if(c)return!1;if(r.add(o),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let u of l)Aa(u,e,n,r)}}else if(i){if(i.imports!=null&&!c){r.add(o);let u;Va(i.imports,d=>{Aa(d,e,n,r)&&(u||=[],u.push(d))}),u!==void 0&&lm(u,e)}if(!c){let u=pr(o)||(()=>new o);e({provide:o,useFactory:u,deps:wt},o),e({provide:Fu,useValue:o,multi:!0},o),e({provide:lo,useValue:()=>O(o),multi:!0},o)}let l=i.providers;if(l!=null&&!c){let u=t;Hu(l,d=>{e(d,u)})}}else return!1;return o!==t&&t.providers!==void 0}function Hu(t,e){for(let n of t)Cu(n)&&(n=n.\u0275providers),Array.isArray(n)?Hu(n,e):e(n)}var vE=te({provide:String,useValue:te});function um(t){return t!==null&&typeof t=="object"&&vE in t}function SE(t){return!!(t&&t.useExisting)}function DE(t){return!!(t&&t.useFactory)}function Oa(t){return typeof t=="function"}var _i=new A(""),Na={},tm={},cu;function ki(){return cu===void 0&&(cu=new Ci),cu}var ye=class{},mr=class extends ye{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,pu(e,s=>this.processProvider(s)),this.records.set(Ou,ao(void 0,this)),o.has("environment")&&this.records.set(ye,ao(void 0,this));let i=this.records.get(_i);i!=null&&typeof i.value=="string"&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(Fu,wt,{self:!0}))}retrieve(e,n){let r=hr(n)||0;try{return this.get(e,fr,r)}catch(o){if(so(o))return o;throw o}}destroy(){Ti(this),this._destroyed=!0;let e=G(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of n)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),G(e)}}onDestroy(e){return Ti(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Ti(this);let n=Vt(this),r=lt(void 0),o;try{return e()}finally{Vt(n),lt(r)}}get(e,n=fr,r){if(Ti(this),e.hasOwnProperty(em))return e[em](this);let o=hr(r),i,s=Vt(this),c=lt(void 0);try{if(!(o&4)){let u=this.records.get(e);if(u===void 0){let d=CE(e)&&Pi(e);d&&this.injectableDefInScope(d)?u=ao(hu(e),Na):u=null,this.records.set(e,u)}if(u!=null)return this.hydrate(e,u,o)}let l=o&2?ki():this.parent;return n=o&8&&n===fr?null:n,l.get(e,n)}catch(l){let u=fE(l);throw u===-200||u===-201?new x(u,null):l}finally{lt(c),Vt(s)}}resolveInjectorInitializers(){let e=G(null),n=Vt(this),r=lt(void 0),o;try{let i=this.get(lo,wt,{self:!0});for(let s of i)s()}finally{Vt(n),lt(r),G(e)}}toString(){return"R3Injector[...]"}processProvider(e){e=Ze(e);let n=Oa(e)?e:Ze(e&&e.provide),r=EE(e);if(!Oa(e)&&e.multi===!0){let o=this.records.get(n);o||(o=ao(void 0,Na,!0),o.factory=()=>fu(o.multi),this.records.set(n,o)),n=e,o.multi.push(e)}this.records.set(n,r)}hydrate(e,n,r){let o=G(null);try{if(n.value===tm)throw Nu("");return n.value===Na&&(n.value=tm,n.value=n.factory(void 0,r)),typeof n.value=="object"&&n.value&&wE(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{G(o)}}injectableDefInScope(e){if(!e.providedIn)return!1;let n=Ze(e.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(e){let n=this._onDestroyHooks.indexOf(e);n!==-1&&this._onDestroyHooks.splice(n,1)}};function hu(t){let e=Pi(t),n=e!==null?e.factory:pr(t);if(n!==null)return n;if(t instanceof A)throw new x(-204,!1);if(t instanceof Function)return bE(t);throw new x(-204,!1)}function bE(t){if(t.length>0)throw new x(-204,!1);let n=lE(t);return n!==null?()=>n.factory(t):()=>new t}function EE(t){if(um(t))return ao(void 0,t.useValue);{let e=dm(t);return ao(e,Na)}}function dm(t,e,n){let r;if(Oa(t)){let o=Ze(t);return pr(o)||hu(o)}else if(um(t))r=()=>Ze(t.useValue);else if(DE(t))r=()=>t.useFactory(...fu(t.deps||[]));else if(SE(t))r=(o,i)=>O(Ze(t.useExisting),i!==void 0&&i&8?8:void 0);else{let o=Ze(t&&(t.useClass||t.provide));if(TE(t))r=()=>new o(...fu(t.deps));else return pr(o)||hu(o)}return r}function Ti(t){if(t.destroyed)throw new x(-205,!1)}function ao(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function TE(t){return!!t.deps}function wE(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function CE(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function pu(t,e){for(let n of t)Array.isArray(n)?pu(n,e):n&&Cu(n)?pu(n.\u0275providers,e):e(n)}function Fe(t,e){let n;t instanceof mr?(Ti(t),n=t):n=new du(t);let r,o=Vt(n),i=lt(void 0);try{return e()}finally{Vt(o),lt(i)}}function fm(){return am()!==void 0||ka()!=null}var Ct=0,W=1,z=2,He=3,mt=4,gt=5,Ni=6,fo=7,Je=8,Nn=9,zt=10,Xe=11,ho=12,Uu=13,po=14,yt=15,mo=16,Dr=17,xi=18,xn=19,ju=20,fn=21,$a=22,Ai=23,ut=24,za=25,go=26,vt=27,hm=1;var An=7,Oi=8,Fi=9,et=10;function On(t){return Array.isArray(t)&&typeof t[hm]=="object"}function It(t){return Array.isArray(t)&&t[hm]===!0}function Bu(t){return(t.flags&4)!==0}function Fn(t){return t.componentOffset>-1}function Wa(t){return(t.flags&1)===1}function br(t){return!!t.template}function yo(t){return(t[z]&512)!==0}function Er(t){return(t[z]&256)===256}var pm="svg",mm="math";function Rt(t){for(;Array.isArray(t);)t=t[Ct];return t}function pn(t,e){return Rt(e[t.index])}function gm(t,e){return t.data[e]}function Wt(t,e){let n=e[t];return On(n)?n:n[Ct]}function qa(t){return(t[z]&128)===128}function ym(t){return It(t[He])}function Li(t,e){return e==null?null:t[e]}function Vu(t){t[Dr]=0}function $u(t){t[z]&1024||(t[z]|=1024,qa(t)&&Ui(t))}function Hi(t){return!!(t[z]&9216||t[ut]?.dirty)}function Ga(t){t[zt].changeDetectionScheduler?.notify(8),t[z]&64&&(t[z]|=1024),Hi(t)&&Ui(t)}function Ui(t){t[zt].changeDetectionScheduler?.notify(0);let e=_n(t);for(;e!==null&&!(e[z]&8192||(e[z]|=8192,!qa(e)));)e=_n(e)}function zu(t,e){if(Er(t))throw new x(911,!1);t[fn]===null&&(t[fn]=[]),t[fn].push(e)}function vm(t,e){if(t[fn]===null)return;let n=t[fn].indexOf(e);n!==-1&&t[fn].splice(n,1)}function _n(t){let e=t[He];return It(e)?e[He]:e}function Sm(t){return t[fo]??=[]}function Dm(t){return t.cleanup??=[]}var oe={lFrame:Nm(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var mu=!1;function bm(){return oe.lFrame.elementDepthCount}function Em(){oe.lFrame.elementDepthCount++}function Wu(){oe.lFrame.elementDepthCount--}function Tm(){return oe.bindingsEnabled}function wm(){return oe.skipHydrationRootTNode!==null}function qu(t){return oe.skipHydrationRootTNode===t}function Gu(){oe.skipHydrationRootTNode=null}function tt(){return oe.lFrame.lView}function Qa(){return oe.lFrame.tView}function qt(){let t=Qu();for(;t!==null&&t.type===64;)t=t.parent;return t}function Qu(){return oe.lFrame.currentTNode}function Cm(){let t=oe.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}function ji(t,e){let n=oe.lFrame;n.currentTNode=t,n.isParent=e}function Ku(){return oe.lFrame.isParent}function Im(){oe.lFrame.isParent=!1}function Yu(){return mu}function Zu(t){let e=mu;return mu=t,e}function Rm(t){return oe.lFrame.bindingIndex=t}function Pm(){return oe.lFrame.inI18n}function Mm(t,e){let n=oe.lFrame;n.bindingIndex=n.bindingRootIndex=t,Ka(e)}function _m(){return oe.lFrame.currentDirectiveIndex}function Ka(t){oe.lFrame.currentDirectiveIndex=t}function Ju(t){oe.lFrame.currentQueryIndex=t}function IE(t){let e=t[W];return e.type===2?e.declTNode:e.type===1?t[gt]:null}function Xu(t,e,n){if(n&4){let o=e,i=t;for(;o=o.parent,o===null&&!(n&1);)if(o=IE(i),o===null||(i=i[po],o.type&10))break;if(o===null)return!1;e=o,t=i}let r=oe.lFrame=km();return r.currentTNode=e,r.lView=t,!0}function Ya(t){let e=km(),n=t[W];oe.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function km(){let t=oe.lFrame,e=t===null?null:t.child;return e===null?Nm(t):e}function Nm(t){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=e),e}function xm(){let t=oe.lFrame;return oe.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var ed=xm;function Za(){let t=xm();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Am(){return oe.lFrame.selectedIndex}function Ln(t){oe.lFrame.selectedIndex=t}function td(){return oe.lFrame.currentNamespace}var Om=!0;function nd(){return Om}function rd(t){Om=t}function gu(t,e=null,n=null,r){let o=od(t,e,n,r);return o.resolveInjectorInitializers(),o}function od(t,e=null,n=null,r,o=new Set){let i=[n||wt,cm(t)],s;return new mr(i,e||ki(),s||null,o)}var $t=class t{static THROW_IF_NOT_FOUND=fr;static NULL=new Ci;static create(e,n){if(Array.isArray(e))return gu({name:""},n,e,"");{let r=e.name??"";return gu({name:r},e.parent,e.providers,r)}}static \u0275prov=N({token:t,providedIn:"any",factory:()=>O(Ou)});static __NG_ELEMENT_ID__=-1},_e=new A(""),Hn=(()=>{class t{static __NG_ELEMENT_ID__=RE;static __NG_ENV_ID__=n=>n}return t})(),yu=class extends Hn{_lView;constructor(e){super(),this._lView=e}get destroyed(){return Er(this._lView)}onDestroy(e){let n=this._lView;return zu(n,e),()=>vm(n,e)}};function RE(){return new yu(tt())}var Fm=!1,Lm=new A(""),mn=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new le(!1);debugTaskTracker=P(Lm,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new F(n=>{n.next(!1),n.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),this.debugTaskTracker?.add(n),n}has(n){return this.pendingTasks.has(n)}remove(n){this.pendingTasks.delete(n),this.debugTaskTracker?.remove(n),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=N({token:t,providedIn:"root",factory:()=>new t})}return t})(),vu=class extends me{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,fm()&&(this.destroyRef=P(Hn,{optional:!0})??void 0,this.pendingTasks=P(mn,{optional:!0})??void 0)}emit(e){let n=G(null);try{super.next(e)}finally{G(n)}}subscribe(e,n,r){let o=e,i=n||(()=>null),s=r;if(e&&typeof e=="object"){let l=e;o=l.next?.bind(l),i=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(i=this.wrapInTimeout(i),o&&(o=this.wrapInTimeout(o)),s&&(s=this.wrapInTimeout(s)));let c=super.subscribe({next:o,error:i,complete:s});return e instanceof Ae&&e.add(c),c}wrapInTimeout(e){return n=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{e(n)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},ze=vu;function Fa(...t){}function id(t){let e,n;function r(){t=Fa;try{n!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(n),e!==void 0&&clearTimeout(e)}catch(o){}}return e=setTimeout(()=>{t(),r()}),typeof requestAnimationFrame=="function"&&(n=requestAnimationFrame(()=>{t(),r()})),()=>r()}function Hm(t){return queueMicrotask(()=>t()),()=>{t=Fa}}var sd="isAngularZone",Ii=sd+"_ID",PE=0,Ve=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new ze(!1);onMicrotaskEmpty=new ze(!1);onStable=new ze(!1);onError=new ze(!1);constructor(e){let{enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:o=!1,scheduleInRootZone:i=Fm}=e;if(typeof Zone>"u")throw new x(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!o&&r,s.shouldCoalesceRunChangeDetection=o,s.callbackScheduled=!1,s.scheduleInRootZone=i,kE(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(sd)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new x(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new x(909,!1)}run(e,n,r){return this._inner.run(e,n,r)}runTask(e,n,r,o){let i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,e,ME,Fa,Fa);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(e,n,r){return this._inner.runGuarded(e,n,r)}runOutsideAngular(e){return this._outer.run(e)}},ME={};function ad(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function _E(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function e(){id(()=>{t.callbackScheduled=!1,Su(t),t.isCheckStableRunning=!0,ad(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{e()}):t._outer.run(()=>{e()}),Su(t)}function kE(t){let e=()=>{_E(t)},n=PE++;t._inner=t._inner.fork({name:"angular",properties:{[sd]:!0,[Ii]:n,[Ii+n]:!0},onInvokeTask:(r,o,i,s,c,l)=>{if(NE(l))return r.invokeTask(i,s,c,l);try{return nm(t),r.invokeTask(i,s,c,l)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&e(),rm(t)}},onInvoke:(r,o,i,s,c,l,u)=>{try{return nm(t),r.invoke(i,s,c,l,u)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!xE(l)&&e(),rm(t)}},onHasTask:(r,o,i,s)=>{r.hasTask(i,s),o===i&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,Su(t),ad(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,o,i,s)=>(r.handleError(i,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function Su(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function nm(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function rm(t){t._nesting--,ad(t)}var Ri=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new ze;onMicrotaskEmpty=new ze;onStable=new ze;onError=new ze;run(e,n,r){return e.apply(n,r)}runGuarded(e,n,r){return e.apply(n,r)}runOutsideAngular(e){return e()}runTask(e,n,r,o){return e.apply(n,r)}};function NE(t){return Um(t,"__ignore_ng_zone__")}function xE(t){return Um(t,"__scheduler_tick__")}function Um(t,e){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[e]===!0}var hn=class{_console=console;handleError(e){this._console.error("ERROR",e)}},Gt=new A("",{factory:()=>{let t=P(Ve),e=P(ye),n;return r=>{t.runOutsideAngular(()=>{e.destroyed&&!n?setTimeout(()=>{throw r}):(n??=e.get(hn),n.handleError(r))})}}}),jm={provide:lo,useValue:()=>{let t=P(hn,{optional:!0})},multi:!0};function vo(t,e){let[n,r,o]=zl(t,e?.equal),i=n,s=i[st];return i.set=r,i.update=o,i.asReadonly=Bm.bind(i),i}function Bm(){let t=this[st];if(t.readonlyFn===void 0){let e=()=>this();e[st]=t,t.readonlyFn=e}return t.readonlyFn}var gr=class{},Bi=new A("",{factory:()=>!0});var cd=new A(""),Ja=(()=>{class t{internalPendingTasks=P(mn);scheduler=P(gr);errorHandler=P(Gt);add(){let n=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(n)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(n))}}run(n){let r=this.add();n().catch(this.errorHandler).finally(r)}static \u0275prov=N({token:t,providedIn:"root",factory:()=>new t})}return t})(),ld=(()=>{class t{static \u0275prov=N({token:t,providedIn:"root",factory:()=>new Du})}return t})(),Du=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let n=e.zone,r=this.queues.get(n);r.has(e)&&(r.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let n=e.zone;this.queues.has(n)||this.queues.set(n,new Set);let r=this.queues.get(n);r.has(e)||r.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[n,r]of this.queues)n===null?e||=this.flushQueue(r):e||=n.run(()=>this.flushQueue(r));e||(this.dirtyEffectCount=0)}}flushQueue(e){let n=!1;for(let r of e)r.dirty&&(this.dirtyEffectCount--,n=!0,r.run());return n}},bu=class{[st];constructor(e){this[st]=e}destroy(){this[st].destroy()}};function Ki(t){return{toString:t}.toString()}function QE(t){return typeof t=="function"}function mg(t,e,n,r){e!==null?e.applyValueToInputSignal(e,r):t[n]=r}var nc=class{previousValue;currentValue;firstChange;constructor(e,n,r){this.previousValue=e,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}},fc=(()=>{let t=()=>gg;return t.ngInherit=!0,t})();function gg(t){return t.type.prototype.ngOnChanges&&(t.setInput=YE),KE}function KE(){let t=vg(this),e=t?.current;if(e){let n=t.previous;if(n===Sr)t.previous=e;else for(let r in e)n[r]=e[r];t.current=null,this.ngOnChanges(e)}}function YE(t,e,n,r,o){let i=this.declaredInputs[r],s=vg(t)||ZE(t,{previous:Sr,current:null}),c=s.current||(s.current={}),l=s.previous,u=l[i];c[i]=new nc(u&&u.currentValue,n,l===Sr),mg(t,e,o,n)}var yg="__ngSimpleChanges__";function vg(t){return t[yg]||null}function ZE(t,e){return t[yg]=e}var Vm=[];var ie=function(t,e=null,n){for(let r=0;r<Vm.length;r++){let o=Vm[r];o(t,e,n)}},X=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(X||{});function JE(t,e,n){let{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=e.type.prototype;if(r){let s=gg(e);(n.preOrderHooks??=[]).push(t,s),(n.preOrderCheckHooks??=[]).push(t,s)}o&&(n.preOrderHooks??=[]).push(0-t,o),i&&((n.preOrderHooks??=[]).push(t,i),(n.preOrderCheckHooks??=[]).push(t,i))}function XE(t,e){for(let n=e.directiveStart,r=e.directiveEnd;n<r;n++){let i=t.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:c,ngAfterViewInit:l,ngAfterViewChecked:u,ngOnDestroy:d}=i;s&&(t.contentHooks??=[]).push(-n,s),c&&((t.contentHooks??=[]).push(n,c),(t.contentCheckHooks??=[]).push(n,c)),l&&(t.viewHooks??=[]).push(-n,l),u&&((t.viewHooks??=[]).push(n,u),(t.viewCheckHooks??=[]).push(n,u)),d!=null&&(t.destroyHooks??=[]).push(n,d)}}function Xa(t,e,n){Sg(t,e,3,n)}function ec(t,e,n,r){(t[z]&3)===n&&Sg(t,e,n,r)}function ud(t,e){let n=t[z];(n&3)===e&&(n&=16383,n+=1,t[z]=n)}function Sg(t,e,n,r){let o=r!==void 0?t[Dr]&65535:0,i=r??-1,s=e.length-1,c=0;for(let l=o;l<s;l++)if(typeof e[l+1]=="number"){if(c=e[l],r!=null&&c>=r)break}else e[l]<0&&(t[Dr]+=65536),(c<i||i==-1)&&(eT(t,n,e,l),t[Dr]=(t[Dr]&4294901760)+l+2),l++}function $m(t,e){ie(X.LifecycleHookStart,t,e);let n=G(null);try{e.call(t)}finally{G(n),ie(X.LifecycleHookEnd,t,e)}}function eT(t,e,n,r){let o=n[r]<0,i=n[r+1],s=o?-n[r]:n[r],c=t[s];o?t[z]>>14<t[Dr]>>16&&(t[z]&3)===e&&(t[z]+=16384,$m(c,i)):$m(c,i)}var Do=-1,Wi=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,n,r,o){this.factory=e,this.name=o,this.canSeeViewProviders=n,this.injectImpl=r}};function tT(t){return(t.flags&8)!==0}function nT(t){return(t.flags&16)!==0}function rT(t,e,n){let r=0;for(;r<n.length;){let o=n[r];if(typeof o=="number"){if(o!==0)break;r++;let i=n[r++],s=n[r++],c=n[r++];t.setAttribute(e,s,c,i)}else{let i=o,s=n[++r];iT(i)?t.setProperty(e,i,s):t.setAttribute(e,i,s),r++}}return r}function oT(t){return t===3||t===4||t===6}function iT(t){return t.charCodeAt(0)===64}function Pd(t,e){if(!(e===null||e.length===0))if(t===null||t.length===0)t=e.slice();else{let n=-1;for(let r=0;r<e.length;r++){let o=e[r];typeof o=="number"?n=o:n===0||(n===-1||n===2?zm(t,n,o,null,e[++r]):zm(t,n,o,null,null))}}return t}function zm(t,e,n,r,o){let i=0,s=t.length;if(e===-1)s=-1;else for(;i<t.length;){let c=t[i++];if(typeof c=="number"){if(c===e){s=-1;break}else if(c>e){s=i-1;break}}}for(;i<t.length;){let c=t[i];if(typeof c=="number")break;if(c===n){o!==null&&(t[i+1]=o);return}i++,o!==null&&i++}s!==-1&&(t.splice(s,0,e),i=s+1),t.splice(i++,0,n),o!==null&&t.splice(i++,0,o)}function Dg(t){return t!==Do}function rc(t){return t&32767}function sT(t){return t>>16}function oc(t,e){let n=sT(t),r=e;for(;n>0;)r=r[po],n--;return r}var pd=!0;function Wm(t){let e=pd;return pd=t,e}var aT=256,bg=aT-1,Eg=5,cT=0,Qt={};function lT(t,e,n){let r;typeof n=="string"?r=n.charCodeAt(0)||0:n.hasOwnProperty(vr)&&(r=n[vr]),r==null&&(r=n[vr]=cT++);let o=r&bg,i=1<<o;e.data[t+(o>>Eg)]|=i}function Tg(t,e){let n=wg(t,e);if(n!==-1)return n;let r=e[W];r.firstCreatePass&&(t.injectorIndex=e.length,dd(r.data,t),dd(e,null),dd(r.blueprint,null));let o=Md(t,e),i=t.injectorIndex;if(Dg(o)){let s=rc(o),c=oc(o,e),l=c[W].data;for(let u=0;u<8;u++)e[i+u]=c[s+u]|l[s+u]}return e[i+8]=o,i}function dd(t,e){t.push(0,0,0,0,0,0,0,0,e)}function wg(t,e){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||e[t.injectorIndex+8]===null?-1:t.injectorIndex}function Md(t,e){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let n=0,r=null,o=e;for(;o!==null;){if(r=Mg(o),r===null)return Do;if(n++,o=o[po],r.injectorIndex!==-1)return r.injectorIndex|n<<16}return Do}function uT(t,e,n){lT(t,e,n)}function Cg(t,e,n){if(n&8||t!==void 0)return t;Ba(e,"NodeInjector")}function Ig(t,e,n,r){if(n&8&&r===void 0&&(r=null),(n&3)===0){let o=t[Nn],i=lt(void 0);try{return o?o.get(e,r,n&8):xu(e,r,n&8)}finally{lt(i)}}return Cg(r,e,n)}function Rg(t,e,n,r=0,o){if(t!==null){if(e[z]&2048&&!(r&2)){let s=mT(t,e,n,r,Qt);if(s!==Qt)return s}let i=Pg(t,e,n,r,Qt);if(i!==Qt)return i}return Ig(e,n,r,o)}function Pg(t,e,n,r,o){let i=hT(n);if(typeof i=="function"){if(!Xu(e,t,r))return r&1?Cg(o,n,r):Ig(e,n,r,o);try{let s;if(s=i(r),s==null&&!(r&8))Ba(n);else return s}finally{ed()}}else if(typeof i=="number"){let s=null,c=wg(t,e),l=Do,u=r&1?e[yt][gt]:null;for((c===-1||r&4)&&(l=c===-1?Md(t,e):e[c+8],l===Do||!Gm(r,!1)?c=-1:(s=e[W],c=rc(l),e=oc(l,e)));c!==-1;){let d=e[W];if(qm(i,c,d.data)){let f=dT(c,e,n,s,r,u);if(f!==Qt)return f}l=e[c+8],l!==Do&&Gm(r,e[W].data[c+8]===u)&&qm(i,c,e)?(s=d,c=rc(l),e=oc(l,e)):c=-1}}return o}function dT(t,e,n,r,o,i){let s=e[W],c=s.data[t+8],l=r==null?Fn(c)&&pd:r!=s&&(c.type&3)!==0,u=o&1&&i===c,d=fT(c,s,n,l,u);return d!==null?md(e,s,d,c,o):Qt}function fT(t,e,n,r,o){let i=t.providerIndexes,s=e.data,c=i&1048575,l=t.directiveStart,u=t.directiveEnd,d=i>>20,f=r?c:c+d,h=o?c+d:u;for(let p=f;p<h;p++){let g=s[p];if(p<l&&n===g||p>=l&&g.type===n)return p}if(o){let p=s[l];if(p&&br(p)&&p.type===n)return l}return null}function md(t,e,n,r,o){let i=t[n],s=e.data;if(i instanceof Wi){let c=i;if(c.resolving)throw Nu("");let l=Wm(c.canSeeViewProviders);c.resolving=!0;let u=s[n].type||s[n],d,f=c.injectImpl?lt(c.injectImpl):null,h=Xu(t,r,0);try{i=t[n]=c.factory(void 0,o,s,t,r),e.firstCreatePass&&n>=r.directiveStart&&JE(n,s[n],e)}finally{f!==null&&lt(f),Wm(l),c.resolving=!1,ed()}}return i}function hT(t){if(typeof t=="string")return t.charCodeAt(0)||0;let e=t.hasOwnProperty(vr)?t[vr]:void 0;return typeof e=="number"?e>=0?e&bg:pT:e}function qm(t,e,n){let r=1<<t;return!!(n[e+(t>>Eg)]&r)}function Gm(t,e){return!(t&2)&&!(t&1&&e)}var Tr=class{_tNode;_lView;constructor(e,n){this._tNode=e,this._lView=n}get(e,n,r){return Rg(this._tNode,this._lView,e,hr(r),n)}};function pT(){return new Tr(qt(),tt())}function Yi(t){return Ki(()=>{let e=t.prototype.constructor,n=e[wi]||gd(e),r=Object.prototype,o=Object.getPrototypeOf(t.prototype).constructor;for(;o&&o!==r;){let i=o[wi]||gd(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function gd(t){return Tu(t)?()=>{let e=gd(Ze(t));return e&&e()}:pr(t)}function mT(t,e,n,r,o){let i=t,s=e;for(;i!==null&&s!==null&&s[z]&2048&&!yo(s);){let c=Pg(i,s,n,r|2,Qt);if(c!==Qt)return c;let l=i.parent;if(!l){let u=s[ju];if(u){let d=u.get(n,Qt,r&-5);if(d!==Qt)return d}l=Mg(s),s=s[po]}i=l}return o}function Mg(t){let e=t[W],n=e.type;return n===2?e.declTNode:n===1?t[gt]:null}function gT(){return _d(qt(),tt())}function _d(t,e){return new kd(pn(t,e))}var kd=(()=>{class t{nativeElement;constructor(n){this.nativeElement=n}static __NG_ELEMENT_ID__=gT}return t})();function _g(t){return(t.flags&128)===128}var Nd=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Nd||{}),kg=new Map,yT=0;function vT(){return yT++}function ST(t){kg.set(t[xn],t)}function yd(t){kg.delete(t[xn])}var Qm="__ngContext__";function qi(t,e){On(e)?(t[Qm]=e[xn],ST(e)):t[Qm]=e}function Ng(t){return Ag(t[ho])}function xg(t){return Ag(t[mt])}function Ag(t){for(;t!==null&&!It(t);)t=t[mt];return t}var DT;function xd(t){DT=t}var hc=new A("",{factory:()=>bT}),bT="ng";var pc=new A(""),Zi=new A("",{providedIn:"platform",factory:()=>"unknown"});var Ji=new A("",{factory:()=>P(_e).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Og=!1,Fg=new A("",{factory:()=>Og});var Km=new WeakMap;function ET(t,e){if(t==null||typeof t!="object")return;let n=Km.get(t);n||(n=new WeakSet,Km.set(t,n)),n.add(e)}var TT=(t,e,n,r)=>{};function wT(t,e,n,r){TT(t,e,n,r)}function Ad(t){return(t.flags&32)===32}var CT=()=>null;function Lg(t,e,n=!1){return CT(t,e,n)}function Hg(t,e){let n=t.contentQueries;if(n!==null){let r=G(null);try{for(let o=0;o<n.length;o+=2){let i=n[o],s=n[o+1];if(s!==-1){let c=t.data[s];Ju(i),c.contentQueries(2,e[s],s)}}}finally{G(r)}}}function vd(t,e,n){Ju(0);let r=G(null);try{e(t,n)}finally{G(r)}}function Ug(t,e,n){if(Bu(e)){let r=G(null);try{let o=e.directiveStart,i=e.directiveEnd;for(let s=o;s<i;s++){let c=t.data[s];if(c.contentQueries){let l=n[s];c.contentQueries(1,l,s)}}}finally{G(r)}}}var Mt=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Mt||{});function IT(t,e){return t.createText(e)}function jg(t,e,n){return t.createElement(e,n)}function ic(t,e,n,r,o){t.insertBefore(e,n,r,o)}function Bg(t,e,n){t.appendChild(e,n)}function Ym(t,e,n,r,o){r!==null?ic(t,e,n,r,o):Bg(t,e,n)}function RT(t,e,n,r){t.removeChild(null,e,n,r)}function PT(t,e,n){t.setAttribute(e,"style",n)}function MT(t,e,n){n===""?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n)}function Vg(t,e,n){let{mergedAttrs:r,classes:o,styles:i}=n;r!==null&&rT(t,e,r),o!==null&&MT(t,e,o),i!==null&&PT(t,e,i)}function $g(t){return t instanceof Function?t():t}function _T(t,e,n){let r=t.length;for(;;){let o=t.indexOf(e,n);if(o===-1)return o;if(o===0||t.charCodeAt(o-1)<=32){let i=e.length;if(o+i===r||t.charCodeAt(o+i)<=32)return o}n=o+1}}var zg="ng-template";function kT(t,e,n,r){let o=0;if(r){for(;o<e.length&&typeof e[o]=="string";o+=2)if(e[o]==="class"&&_T(e[o+1].toLowerCase(),n,0)!==-1)return!0}else if(Od(t))return!1;if(o=e.indexOf(1,o),o>-1){let i;for(;++o<e.length&&typeof(i=e[o])=="string";)if(i.toLowerCase()===n)return!0}return!1}function Od(t){return t.type===4&&t.value!==zg}function NT(t,e,n){let r=t.type===4&&!n?zg:t.value;return e===r}function xT(t,e,n){let r=4,o=t.attrs,i=o!==null?FT(o):0,s=!1;for(let c=0;c<e.length;c++){let l=e[c];if(typeof l=="number"){if(!s&&!Pt(r)&&!Pt(l))return!1;if(s&&Pt(l))continue;s=!1,r=l|r&1;continue}if(!s)if(r&4){if(r=2|r&1,l!==""&&!NT(t,l,n)||l===""&&e.length===1){if(Pt(r))return!1;s=!0}}else if(r&8){if(o===null||!kT(t,o,l,n)){if(Pt(r))return!1;s=!0}}else{let u=e[++c],d=AT(l,o,Od(t),n);if(d===-1){if(Pt(r))return!1;s=!0;continue}if(u!==""){let f;if(d>i?f="":f=o[d+1].toLowerCase(),r&2&&u!==f){if(Pt(r))return!1;s=!0}}}}return Pt(r)||s}function Pt(t){return(t&1)===0}function AT(t,e,n,r){if(e===null)return-1;let o=0;if(r||!n){let i=!1;for(;o<e.length;){let s=e[o];if(s===t)return o;if(s===3||s===6)i=!0;else if(s===1||s===2){let c=e[++o];for(;typeof c=="string";)c=e[++o];continue}else{if(s===4)break;if(s===0){o+=4;continue}}o+=i?1:2}return-1}else return LT(e,t)}function OT(t,e,n=!1){for(let r=0;r<e.length;r++)if(xT(t,e[r],n))return!0;return!1}function FT(t){for(let e=0;e<t.length;e++){let n=t[e];if(oT(n))return e}return t.length}function LT(t,e){let n=t.indexOf(4);if(n>-1)for(n++;n<t.length;){let r=t[n];if(typeof r=="number")return-1;if(r===e)return n;n++}return-1}function Zm(t,e){return t?":not("+e.trim()+")":e}function HT(t){let e=t[0],n=1,r=2,o="",i=!1;for(;n<t.length;){let s=t[n];if(typeof s=="string")if(r&2){let c=t[++n];o+="["+s+(c.length>0?'="'+c+'"':"")+"]"}else r&8?o+="."+s:r&4&&(o+=" "+s);else o!==""&&!Pt(s)&&(e+=Zm(i,o),o=""),r=s,i=i||!Pt(r);n++}return o!==""&&(e+=Zm(i,o)),e}function UT(t){return t.map(HT).join(",")}function jT(t){let e=[],n=[],r=1,o=2;for(;r<t.length;){let i=t[r];if(typeof i=="string")o===2?i!==""&&e.push(i,t[++r]):o===8&&n.push(i);else{if(!Pt(o))break;o=i}r++}return n.length&&e.push(1,...n),e}var Fd={};function Wg(t,e,n,r,o,i,s,c,l,u,d){let f=vt+r,h=f+o,p=BT(f,h),g=typeof u=="function"?u():u;return p[W]={type:t,blueprint:p,template:n,queries:null,viewQuery:c,declTNode:e,data:p.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i=="function"?i():i,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:g,incompleteFirstPass:!1,ssrId:d}}function BT(t,e){let n=[];for(let r=0;r<e;r++)n.push(r<t?null:Fd);return n}function VT(t){let e=t.tView;return e===null||e.incompleteFirstPass?t.tView=Wg(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):e}function qg(t,e,n,r,o,i,s,c,l,u,d){let f=e.blueprint.slice();return f[Ct]=o,f[z]=r|4|128|8|64|1024,(u!==null||t&&t[z]&2048)&&(f[z]|=2048),Vu(f),f[He]=f[po]=t,f[Je]=n,f[zt]=s||t&&t[zt],f[Xe]=c||t&&t[Xe],f[Nn]=l||t&&t[Nn]||null,f[gt]=i,f[xn]=vT(),f[Ni]=d,f[ju]=u,f[yt]=e.type==2?t[yt]:f,f}function $T(t,e,n){let r=pn(e,t),o=VT(n),i=t[zt].rendererFactory,s=Kg(t,qg(t,o,null,Gg(n),r,e,null,i.createRenderer(r,n),null,null,null));return t[e.index]=s}function Gg(t){let e=16;return t.signals?e=4096:t.onPush&&(e=64),e}function Qg(t,e,n,r){if(n===0)return-1;let o=e.length;for(let i=0;i<n;i++)e.push(r),t.blueprint.push(r),t.data.push(null);return o}function Kg(t,e){return t[ho]?t[Uu][mt]=e:t[ho]=e,t[Uu]=e,e}function zT(t,e,n,r){if(!r)if((e[z]&3)===3){let i=t.preOrderCheckHooks;i!==null&&Xa(e,i,n)}else{let i=t.preOrderHooks;i!==null&&ec(e,i,0,n)}Ln(n)}var mc=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(mc||{});function Sd(t,e,n,r){let o=G(null);try{let[i,s,c]=t.inputs[n],l=null;(s&mc.SignalBased)!==0&&(l=e[i][st]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):c!==null&&(r=c.call(e,r)),t.setInput!==null?t.setInput(e,l,r,n,i):mg(e,l,i,r)}finally{G(o)}}var Ir=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(Ir||{}),WT;function Ld(t,e){return WT(t,e)}var nH=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Dd=new WeakMap,Vi=new WeakSet;function qT(t,e){let n=Dd.get(t);if(!n||n.length===0)return;let r=e.parentNode,o=e.previousSibling;for(let i=n.length-1;i>=0;i--){let s=n[i],c=s.parentNode;s===e?(n.splice(i,1),Vi.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(o&&s===o||c&&r&&c!==r)&&(n.splice(i,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function GT(t,e){let n=Dd.get(t);n?n.includes(e)||n.push(e):Dd.set(t,[e])}var bo=new Set,Hd=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Hd||{}),Un=new A(""),Jm=new Set;function Ud(t){Jm.has(t)||(Jm.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Yg=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=N({token:t,providedIn:"root",factory:()=>new t})}return t})();var QT=new A("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:P(ye)})});function Zg(t,e,n){let r=t.get(QT);if(Array.isArray(e))for(let o of e)r.queue.add(o),n?.detachedLeaveAnimationFns?.push(o);else r.queue.add(e),n?.detachedLeaveAnimationFns?.push(e);r.scheduler&&r.scheduler(t)}function KT(t,e){for(let[n,r]of e)Zg(t,r.animateFns)}function Xm(t,e,n,r){let o=t?.[go]?.enter;e!==null&&o&&o.has(n.index)&&KT(r,o)}function So(t,e,n,r,o,i,s,c){if(o!=null){let l,u=!1;It(o)?l=o:On(o)&&(u=!0,o=o[Ct]);let d=Rt(o);t===0&&r!==null?(Xm(c,r,i,n),s==null?Bg(e,r,d):ic(e,r,d,s||null,!0)):t===1&&r!==null?(Xm(c,r,i,n),ic(e,r,d,s||null,!0),qT(i,d)):t===2?(c?.[go]?.leave?.has(i.index)&&GT(i,d),Vi.delete(d),eg(c,i,n,f=>{if(Vi.has(d)){Vi.delete(d);return}RT(e,d,u,f)})):t===3&&(Vi.delete(d),eg(c,i,n,()=>{e.destroyNode(d)})),l!=null&&cw(e,t,n,l,i,r,s)}}function YT(t,e){Jg(t,e),e[Ct]=null,e[gt]=null}function ZT(t,e,n,r,o,i){r[Ct]=o,r[gt]=e,gc(t,r,n,1,o,i)}function Jg(t,e){e[zt].changeDetectionScheduler?.notify(9),gc(t,e,e[Xe],2,null,null)}function JT(t){let e=t[ho];if(!e)return fd(t[W],t);for(;e;){let n=null;if(On(e))n=e[ho];else{let r=e[et];r&&(n=r)}if(!n){for(;e&&!e[mt]&&e!==t;)On(e)&&fd(e[W],e),e=e[He];e===null&&(e=t),On(e)&&fd(e[W],e),n=e&&e[mt]}e=n}}function jd(t,e){let n=t[Fi],r=n.indexOf(e);n.splice(r,1)}function Xg(t,e){if(Er(e))return;let n=e[Xe];n.destroyNode&&gc(t,e,n,3,null,null),JT(e)}function fd(t,e){if(Er(e))return;let n=G(null);try{e[z]&=-129,e[z]|=256,e[ut]&&mi(e[ut]),tw(t,e),ew(t,e),e[W].type===1&&e[Xe].destroy();let r=e[mo];if(r!==null&&It(e[He])){r!==e[He]&&jd(r,e);let o=e[xi];o!==null&&o.detachView(t)}yd(e)}finally{G(n)}}function eg(t,e,n,r){let o=t?.[go];if(o==null||o.leave==null||!o.leave.has(e.index))return r(!1);t&&bo.add(t[xn]),Zg(n,()=>{if(o.leave&&o.leave.has(e.index)){let s=o.leave.get(e.index),c=[];if(s){for(let l=0;l<s.animateFns.length;l++){let u=s.animateFns[l],{promise:d}=u();c.push(d)}o.detachedLeaveAnimationFns=void 0}o.running=Promise.allSettled(c),XT(t,r)}else t&&bo.delete(t[xn]),r(!1)},o)}function XT(t,e){let n=t[go]?.running;if(n){n.then(()=>{t[go].running=void 0,bo.delete(t[xn]),e(!0)});return}e(!1)}function ew(t,e){let n=t.cleanup,r=e[fo];if(n!==null)for(let s=0;s<n.length-1;s+=2)if(typeof n[s]=="string"){let c=n[s+3];c>=0?r[c]():r[-c].unsubscribe(),s+=2}else{let c=r[n[s+1]];n[s].call(c)}r!==null&&(e[fo]=null);let o=e[fn];if(o!==null){e[fn]=null;for(let s=0;s<o.length;s++){let c=o[s];c()}}let i=e[Ai];if(i!==null){e[Ai]=null;for(let s of i)s.destroy()}}function tw(t,e){let n;if(t!=null&&(n=t.destroyHooks)!=null)for(let r=0;r<n.length;r+=2){let o=e[n[r]];if(!(o instanceof Wi)){let i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){let c=o[i[s]],l=i[s+1];ie(X.LifecycleHookStart,c,l);try{l.call(c)}finally{ie(X.LifecycleHookEnd,c,l)}}else{ie(X.LifecycleHookStart,o,i);try{i.call(o)}finally{ie(X.LifecycleHookEnd,o,i)}}}}}function nw(t,e,n){return rw(t,e.parent,n)}function rw(t,e,n){let r=e;for(;r!==null&&r.type&168;)e=r,r=e.parent;if(r===null)return n[Ct];if(Fn(r)){let{encapsulation:o}=t.data[r.directiveStart+r.componentOffset];if(o===Mt.None||o===Mt.Emulated)return null}return pn(r,n)}function ow(t,e,n){return sw(t,e,n)}function iw(t,e,n){return t.type&40?pn(t,n):null}var sw=iw,tg;function ey(t,e,n,r){let o=nw(t,r,e),i=e[Xe],s=r.parent||e[gt],c=ow(s,r,e);if(o!=null)if(Array.isArray(n))for(let l=0;l<n.length;l++)Ym(i,o,n[l],c,!1);else Ym(i,o,n,c,!1);tg!==void 0&&tg(i,r,e,n,o)}function $i(t,e){if(e!==null){let n=e.type;if(n&3)return pn(e,t);if(n&4)return bd(-1,t[e.index]);if(n&8){let r=e.child;if(r!==null)return $i(t,r);{let o=t[e.index];return It(o)?bd(-1,o):Rt(o)}}else{if(n&128)return $i(t,e.next);if(n&32)return Ld(e,t)()||Rt(t[e.index]);{let r=ty(t,e);if(r!==null){if(Array.isArray(r))return r[0];let o=_n(t[yt]);return $i(o,r)}else return $i(t,e.next)}}}return null}function ty(t,e){if(e!==null){let r=t[yt][gt],o=e.projection;return r.projection[o]}return null}function bd(t,e){let n=et+t+1;if(n<e.length){let r=e[n],o=r[W].firstChild;if(o!==null)return $i(r,o)}return e[An]}function Bd(t,e,n,r,o,i,s){for(;n!=null;){let c=r[Nn];if(n.type===128){n=n.next;continue}let l=r[n.index],u=n.type;if(s&&e===0&&(l&&qi(Rt(l),r),n.flags|=2),!Ad(n))if(u&8)Bd(t,e,n.child,r,o,i,!1),So(e,t,c,o,l,n,i,r);else if(u&32){let d=Ld(n,r),f;for(;f=d();)So(e,t,c,o,f,n,i,r);So(e,t,c,o,l,n,i,r)}else u&16?aw(t,e,r,n,o,i):So(e,t,c,o,l,n,i,r);n=s?n.projectionNext:n.next}}function gc(t,e,n,r,o,i){Bd(n,r,t.firstChild,e,o,i,!1)}function aw(t,e,n,r,o,i){let s=n[yt],l=s[gt].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++){let d=l[u];So(e,t,n[Nn],o,d,r,i,n)}else{let u=l,d=s[He];_g(r)&&(u.flags|=128),Bd(t,e,u,d,o,i,!0)}}function cw(t,e,n,r,o,i,s){let c=r[An],l=Rt(r);c!==l&&So(e,t,n,i,c,o,s);for(let u=et;u<r.length;u++){let d=r[u];gc(d[W],d,t,e,i,c)}}function ny(t,e,n,r,o){let i=Am(),s=r&2;try{Ln(-1),s&&e.length>vt&&zT(t,e,vt,!1);let c=s?X.TemplateUpdateStart:X.TemplateCreateStart;ie(c,o,n),n(r,o)}finally{Ln(i);let c=s?X.TemplateUpdateEnd:X.TemplateCreateEnd;ie(c,o,n)}}function ry(t,e,n){fw(t,e,n),(n.flags&64)===64&&hw(t,e,n)}function oy(t,e,n=pn){let r=e.localNames;if(r!==null){let o=e.index+1;for(let i=0;i<r.length;i+=2){let s=r[i+1],c=s===-1?n(e,t):t[s];t[o++]=c}}}function lw(t,e,n,r){let i=r.get(Fg,Og)||n===Mt.ShadowDom||n===Mt.ExperimentalIsolatedShadowDom,s=t.selectRootElement(e,i);return uw(s),s}function uw(t){dw(t)}var dw=()=>null;function fw(t,e,n){let r=n.directiveStart,o=n.directiveEnd;Fn(n)&&$T(e,n,t.data[r+n.componentOffset]),t.firstCreatePass||Tg(n,e);let i=n.initialInputs;for(let s=r;s<o;s++){let c=t.data[s],l=md(e,t,s,n);if(qi(l,e),i!==null&&gw(e,s-r,l,c,n,i),br(c)){let u=Wt(n.index,e);u[Je]=md(e,t,s,n)}}}function hw(t,e,n){let r=n.directiveStart,o=n.directiveEnd,i=n.index,s=_m();try{Ln(i);for(let c=r;c<o;c++){let l=t.data[c],u=e[c];Ka(c),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&pw(l,u)}}finally{Ln(-1),Ka(s)}}function pw(t,e){t.hostBindings!==null&&t.hostBindings(1,e)}function mw(t,e){let n=t.directiveRegistry,r=null;if(n)for(let o=0;o<n.length;o++){let i=n[o];OT(e,i.selectors,!1)&&(r??=[],br(i)?r.unshift(i):r.push(i))}return r}function gw(t,e,n,r,o,i){let s=i[e];if(s!==null)for(let c=0;c<s.length;c+=2){let l=s[c],u=s[c+1];Sd(r,n,l,u)}}function iy(t,e,n,r,o){let i=vt+n,s=e[W],c=o(s,e,t,r,n);e[i]=c,ji(t,!0);let l=t.type===2;return l?(Vg(e[Xe],c,t),(bm()===0||Wa(t))&&qi(c,e),Em()):qi(c,e),nd()&&(!l||!Ad(t))&&ey(s,e,c,t),t}function sy(t){let e=t;return Ku()?Im():(e=e.parent,ji(e,!1)),e}function yw(t,e){let n=t[Nn];if(!n)return;let r;try{r=n.get(Gt,null)}catch(o){r=null}r?.(e)}function ay(t,e,n,r,o){let i=t.inputs?.[r],s=t.hostDirectiveInputs?.[r],c=!1;if(s)for(let l=0;l<s.length;l+=2){let u=s[l],d=s[l+1],f=e.data[u];Sd(f,n[u],d,o),c=!0}if(i)for(let l of i){let u=n[l],d=e.data[l];Sd(d,u,r,o),c=!0}return c}function vw(t,e){let n=Wt(e,t),r=n[W];Sw(r,n);let o=n[Ct];o!==null&&n[Ni]===null&&(n[Ni]=Lg(o,n[Nn])),ie(X.ComponentStart);try{cy(r,n,n[Je])}finally{ie(X.ComponentEnd,n[Je])}}function Sw(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])}function cy(t,e,n){Ya(e);try{let r=t.viewQuery;r!==null&&vd(1,r,n);let o=t.template;o!==null&&ny(t,e,o,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),e[xi]?.finishViewCreation(t),t.staticContentQueries&&Hg(t,e),t.staticViewQueries&&vd(2,t.viewQuery,n);let i=t.components;i!==null&&Dw(e,i)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),r}finally{e[z]&=-5,Za()}}function Dw(t,e){for(let n=0;n<e.length;n++)vw(t,e[n])}function ng(t,e){return!e||e.firstChild===null||_g(t)}function Gi(t,e,n,r,o=!1){for(;n!==null;){if(n.type===128){n=o?n.projectionNext:n.next;continue}let i=e[n.index];i!==null&&r.push(Rt(i)),It(i)&&ly(i,r);let s=n.type;if(s&8)Gi(t,e,n.child,r);else if(s&32){let c=Ld(n,e),l;for(;l=c();)r.push(l)}else if(s&16){let c=ty(e,n);if(Array.isArray(c))r.push(...c);else{let l=_n(e[yt]);Gi(l[W],l,c,r,!0)}}n=o?n.projectionNext:n.next}return r}function ly(t,e){for(let n=et;n<t.length;n++){let r=t[n],o=r[W].firstChild;o!==null&&Gi(r[W],r,o,e)}t[An]!==t[Ct]&&e.push(t[An])}function uy(t){if(t[za]!==null){for(let e of t[za])e.impl.addSequence(e);t[za].length=0}}var dy=[];function bw(t){return t[ut]??Ew(t)}function Ew(t){let e=dy.pop()??Object.create(ww);return e.lView=t,e}function Tw(t){t.lView[ut]!==t&&(t.lView=null,dy.push(t))}var ww=C(v({},fi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Ui(t.lView)},consumerOnSignalRead(){this.lView[ut]=this}});function Cw(t){let e=t[ut]??Object.create(Iw);return e.lView=t,e}var Iw=C(v({},fi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let e=_n(t.lView);for(;e&&!fy(e[W]);)e=_n(e);e&&$u(e)},consumerOnSignalRead(){this.lView[ut]=this}});function fy(t){return t.type!==2}function hy(t){if(t[Ai]===null)return;let e=!0;for(;e;){let n=!1;for(let r of t[Ai])r.dirty&&(n=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));e=n&&!!(t[z]&8192)}}var Rw=100;function py(t,e=0){let r=t[zt].rendererFactory,o=!1;o||r.begin?.();try{Pw(t,e)}finally{o||r.end?.()}}function Pw(t,e){let n=Yu();try{Zu(!0),Ed(t,e);let r=0;for(;Hi(t);){if(r===Rw)throw new x(103,!1);r++,Ed(t,1)}}finally{Zu(n)}}function Mw(t,e,n,r){if(Er(e))return;let o=e[z],i=!1,s=!1;Ya(e);let c=!0,l=null,u=null;i||(fy(t)?(u=bw(e),l=pi(u)):ia()===null?(c=!1,u=Cw(e),l=pi(u)):e[ut]&&(mi(e[ut]),e[ut]=null));try{Vu(e),Rm(t.bindingStartIndex),n!==null&&ny(t,e,n,2,r);let d=(o&3)===3;if(!i)if(d){let p=t.preOrderCheckHooks;p!==null&&Xa(e,p,null)}else{let p=t.preOrderHooks;p!==null&&ec(e,p,0,null),ud(e,0)}if(s||_w(e),hy(e),my(e,0),t.contentQueries!==null&&Hg(t,e),!i)if(d){let p=t.contentCheckHooks;p!==null&&Xa(e,p)}else{let p=t.contentHooks;p!==null&&ec(e,p,1),ud(e,1)}Nw(t,e);let f=t.components;f!==null&&yy(e,f,0);let h=t.viewQuery;if(h!==null&&vd(2,h,r),!i)if(d){let p=t.viewCheckHooks;p!==null&&Xa(e,p)}else{let p=t.viewHooks;p!==null&&ec(e,p,2),ud(e,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),e[$a]){for(let p of e[$a])p();e[$a]=null}i||(uy(e),e[z]&=-73)}catch(d){throw i||Ui(e),d}finally{u!==null&&(sa(u,l),c&&Tw(u)),Za()}}function my(t,e){for(let n=Ng(t);n!==null;n=xg(n))for(let r=et;r<n.length;r++){let o=n[r];gy(o,e)}}function _w(t){for(let e=Ng(t);e!==null;e=xg(e)){if(!(e[z]&2))continue;let n=e[Fi];for(let r=0;r<n.length;r++){let o=n[r];$u(o)}}}function kw(t,e,n){ie(X.ComponentStart);let r=Wt(e,t);try{gy(r,n)}finally{ie(X.ComponentEnd,r[Je])}}function gy(t,e){qa(t)&&Ed(t,e)}function Ed(t,e){let r=t[W],o=t[z],i=t[ut],s=!!(e===0&&o&16);if(s||=!!(o&64&&e===0),s||=!!(o&1024),s||=!!(i?.dirty&&aa(i)),s||=!1,i&&(i.dirty=!1),t[z]&=-9217,s)Mw(r,t,r.template,t[Je]);else if(o&8192){let c=G(null);try{hy(t),my(t,1);let l=r.components;l!==null&&yy(t,l,1),uy(t)}finally{G(c)}}}function yy(t,e,n){for(let r=0;r<e.length;r++)kw(t,e[r],n)}function Nw(t,e){let n=t.hostBindingOpCodes;if(n!==null)try{for(let r=0;r<n.length;r++){let o=n[r];if(o<0)Ln(~o);else{let i=o,s=n[++r],c=n[++r];Mm(s,i);let l=e[i];ie(X.HostBindingsUpdateStart,l);try{c(2,l)}finally{ie(X.HostBindingsUpdateEnd,l)}}}}finally{Ln(-1)}}function Vd(t,e){let n=Yu()?64:1088;for(t[zt].changeDetectionScheduler?.notify(e);t;){t[z]|=n;let r=_n(t);if(yo(t)&&!r)return t;t=r}return null}function xw(t,e,n,r){return[t,!0,0,e,null,r,null,n,null,null]}function Aw(t,e,n,r=!0){let o=e[W];if(Ow(o,e,t,n),r){let s=bd(n,t),c=e[Xe],l=c.parentNode(t[An]);l!==null&&ZT(o,t[gt],c,e,l,s)}let i=e[Ni];i!==null&&i.firstChild!==null&&(i.firstChild=null)}function Td(t,e){if(t.length<=et)return;let n=et+e,r=t[n];if(r){let o=r[mo];o!==null&&o!==t&&jd(o,r),e>0&&(t[n-1][mt]=r[mt]);let i=Mi(t,et+e);YT(r[W],r);let s=i[xi];s!==null&&s.detachView(i[W]),r[He]=null,r[mt]=null,r[z]&=-129}return r}function Ow(t,e,n,r){let o=et+r,i=n.length;r>0&&(n[o-1][mt]=e),r<i-et?(e[mt]=n[o],Au(n,et+r,e)):(n.push(e),e[mt]=null),e[He]=n;let s=e[mo];s!==null&&n!==s&&vy(s,e);let c=e[xi];c!==null&&c.insertView(t),Ga(e),e[z]|=128}function vy(t,e){let n=t[Fi],r=e[He];if(On(r))t[z]|=2;else{let o=r[He][yt];e[yt]!==o&&(t[z]|=2)}n===null?t[Fi]=[e]:n.push(e)}var wr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,n=e[W];return Gi(n,e,n.firstChild,[])}constructor(e,n){this._lView=e,this._cdRefInjectingView=n}get context(){return this._lView[Je]}set context(e){this._lView[Je]=e}get destroyed(){return Er(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[He];if(It(e)){let n=e[Oi],r=n?n.indexOf(this):-1;r>-1&&(Td(e,r),Mi(n,r))}this._attachedToViewContainer=!1}Xg(this._lView[W],this._lView)}onDestroy(e){zu(this._lView,e)}markForCheck(){Vd(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[z]&=-129}reattach(){Ga(this._lView),this._lView[z]|=128}detectChanges(){this._lView[z]|=1024,py(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new x(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=yo(this._lView),n=this._lView[mo];n!==null&&!e&&jd(n,this._lView),Jg(this._lView[W],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new x(902,!1);this._appRef=e;let n=yo(this._lView),r=this._lView[mo];r!==null&&!n&&vy(r,this._lView),Ga(this._lView)}};function $d(t,e,n,r,o){let i=t.data[e];if(i===null)i=Fw(t,e,n,r,o),Pm()&&(i.flags|=32);else if(i.type&64){i.type=n,i.value=r,i.attrs=o;let s=Cm();i.injectorIndex=s===null?-1:s.injectorIndex}return ji(i,!0),i}function Fw(t,e,n,r,o){let i=Qu(),s=Ku(),c=s?i:i&&i.parent,l=t.data[e]=Hw(t,c,n,e,r,o);return Lw(t,l,i,s),l}function Lw(t,e,n,r){t.firstChild===null&&(t.firstChild=e),n!==null&&(r?n.child==null&&e.parent!==null&&(n.child=e):n.next===null&&(n.next=e,e.prev=n))}function Hw(t,e,n,r,o,i){let s=e?e.injectorIndex:-1,c=0;return wm()&&(c|=128),{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:c,providerIndexes:0,value:o,namespace:td(),attrs:i,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var Uw=()=>null;function rg(t,e){return Uw(t,e)}var Sy=class{},yc=class{},wd=class{resolveComponentFactory(e){throw new x(917,!1)}},Xi=class{static NULL=new wd},Cr=class{};var Dy=(()=>{class t{static \u0275prov=N({token:t,providedIn:"root",factory:()=>null})}return t})();var tc={},Cd=class{injector;parentInjector;constructor(e,n){this.injector=e,this.parentInjector=n}get(e,n,r){let o=this.injector.get(e,tc,r);return o!==tc||n===tc?o:this.parentInjector.get(e,n,r)}};function sc(t,e,n){let r=n?t.styles:null,o=n?t.classes:null,i=0;if(e!==null)for(let s=0;s<e.length;s++){let c=e[s];if(typeof c=="number")i=c;else if(i==1)o=Eu(o,c);else if(i==2){let l=c,u=e[++s];r=Eu(r,l+": "+u+";")}}n?t.styles=r:t.stylesWithoutHost=r,n?t.classes=o:t.classesWithoutHost=o}function q(t,e=0){let n=tt();if(n===null)return O(t,e);let r=qt();return Rg(r,n,Ze(t),e)}function jw(t,e,n,r,o){let i=r===null?null:{"":-1},s=o(t,n);if(s!==null){let c=s,l=null,u=null;for(let d of s)if(d.resolveHostDirectives!==null){[c,l,u]=d.resolveHostDirectives(s);break}$w(t,e,n,c,i,l,u)}i!==null&&r!==null&&Bw(n,r,i)}function Bw(t,e,n){let r=t.localNames=[];for(let o=0;o<e.length;o+=2){let i=n[e[o+1]];if(i==null)throw new x(-301,!1);r.push(e[o],i)}}function Vw(t,e,n){e.componentOffset=n,(t.components??=[]).push(e.index)}function $w(t,e,n,r,o,i,s){let c=r.length,l=null;for(let h=0;h<c;h++){let p=r[h];l===null&&br(p)&&(l=p,Vw(t,n,h)),uT(Tg(n,e),t,p.type)}Kw(n,t.data.length,c),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let h=0;h<c;h++){let p=r[h];p.providersResolver&&p.providersResolver(p)}let u=!1,d=!1,f=Qg(t,e,c,null);c>0&&(n.directiveToIndex=new Map);for(let h=0;h<c;h++){let p=r[h];if(n.mergedAttrs=Pd(n.mergedAttrs,p.hostAttrs),Ww(t,n,e,f,p),Qw(f,p,o),s!==null&&s.has(p)){let[S,y]=s.get(p);n.directiveToIndex.set(p.type,[f,S+n.directiveStart,y+n.directiveStart])}else(i===null||!i.has(p))&&n.directiveToIndex.set(p.type,f);p.contentQueries!==null&&(n.flags|=4),(p.hostBindings!==null||p.hostAttrs!==null||p.hostVars!==0)&&(n.flags|=64);let g=p.type.prototype;!u&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((t.preOrderHooks??=[]).push(n.index),u=!0),!d&&(g.ngOnChanges||g.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(n.index),d=!0),f++}zw(t,n,i)}function zw(t,e,n){for(let r=e.directiveStart;r<e.directiveEnd;r++){let o=t.data[r];if(n===null||!n.has(o))og(0,e,o,r),og(1,e,o,r),sg(e,r,!1);else{let i=n.get(o);ig(0,e,i,r),ig(1,e,i,r),sg(e,r,!0)}}}function og(t,e,n,r){let o=t===0?n.inputs:n.outputs;for(let i in o)if(o.hasOwnProperty(i)){let s;t===0?s=e.inputs??={}:s=e.outputs??={},s[i]??=[],s[i].push(r),by(e,i)}}function ig(t,e,n,r){let o=t===0?n.inputs:n.outputs;for(let i in o)if(o.hasOwnProperty(i)){let s=o[i],c;t===0?c=e.hostDirectiveInputs??={}:c=e.hostDirectiveOutputs??={},c[s]??=[],c[s].push(r,i),by(e,s)}}function by(t,e){e==="class"?t.flags|=8:e==="style"&&(t.flags|=16)}function sg(t,e,n){let{attrs:r,inputs:o,hostDirectiveInputs:i}=t;if(r===null||!n&&o===null||n&&i===null||Od(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,c=0;for(;c<r.length;){let l=r[c];if(l===0){c+=4;continue}else if(l===5){c+=2;continue}else if(typeof l=="number")break;if(!n&&o.hasOwnProperty(l)){let u=o[l];for(let d of u)if(d===e){s??=[],s.push(l,r[c+1]);break}}else if(n&&i.hasOwnProperty(l)){let u=i[l];for(let d=0;d<u.length;d+=2)if(u[d]===e){s??=[],s.push(u[d+1],r[c+1]);break}}c+=2}t.initialInputs??=[],t.initialInputs.push(s)}function Ww(t,e,n,r,o){t.data[r]=o;let i=o.factory||(o.factory=pr(o.type,!0)),s=new Wi(i,br(o),q,null);t.blueprint[r]=s,n[r]=s,qw(t,e,r,Qg(t,n,o.hostVars,Fd),o)}function qw(t,e,n,r,o){let i=o.hostBindings;if(i){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let c=~e.index;Gw(s)!=c&&s.push(c),s.push(n,r,i)}}function Gw(t){let e=t.length;for(;e>0;){let n=t[--e];if(typeof n=="number"&&n<0)return n}return 0}function Qw(t,e,n){if(n){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)n[e.exportAs[r]]=t;br(e)&&(n[""]=t)}}function Kw(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function Ey(t,e,n,r,o,i,s,c){let l=e[W],u=l.consts,d=Li(u,s),f=$d(l,t,n,r,d);return i&&jw(l,e,f,Li(u,c),o),f.mergedAttrs=Pd(f.mergedAttrs,f.attrs),f.attrs!==null&&sc(f,f.attrs,!1),f.mergedAttrs!==null&&sc(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function Ty(t,e){XE(t,e),Bu(e)&&t.queries.elementEnd(e)}function Yw(t,e,n,r,o,i){let s=e.consts,c=Li(s,o),l=$d(e,t,n,r,c);if(l.mergedAttrs=Pd(l.mergedAttrs,l.attrs),i!=null){let u=Li(s,i);l.localNames=[];for(let d=0;d<u.length;d+=2)l.localNames.push(u[d],-1)}return l.attrs!==null&&sc(l,l.attrs,!1),l.mergedAttrs!==null&&sc(l,l.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,l),l}function Zw(t,e,n){return function r(o){let i=r.__ngNativeEl__;i!==void 0&&ET(o,i);let s=Fn(t)?Wt(t.index,e):e;Vd(s,5);let c=e[Je],l=ag(e,c,n,o),u=r.__ngNextListenerFn__;for(;u;)l=ag(e,c,u,o)&&l,u=u.__ngNextListenerFn__;return l}}function ag(t,e,n,r){let o=G(null);try{return ie(X.OutputStart,e,n),n(r)!==!1}catch(i){return yw(t,i),!1}finally{ie(X.OutputEnd,e,n),G(o)}}function Jw(t,e,n,r,o,i,s,c){let l=Wa(t),u=!1,d=null;if(!r&&l&&(d=eC(e,n,i,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,u=!0}else{let f=pn(t,n),h=r?r(f):f;wT(n,h,i,c),r||(c.__ngNativeEl__=f);let p=o.listen(h,i,c);if(!Xw(i)){let g=r?S=>r(Rt(S[t.index])):t.index;tC(g,e,n,i,c,p,!1)}}return u}function Xw(t){return t.startsWith("animation")||t.startsWith("transition")}function eC(t,e,n,r){let o=t.cleanup;if(o!=null)for(let i=0;i<o.length-1;i+=2){let s=o[i];if(s===n&&o[i+1]===r){let c=e[fo],l=o[i+2];return c&&c.length>l?c[l]:null}typeof s=="string"&&(i+=2)}return null}function tC(t,e,n,r,o,i,s){let c=e.firstCreatePass?Dm(e):null,l=Sm(n),u=l.length;l.push(o,i),c&&c.push(r,t,u,(u+1)*(s?-1:1))}var Id=Symbol("BINDING");function wy(t){return t.debugInfo?.className||t.type.name||null}var ac=class extends Xi{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let n=kn(e);return new Eo(n,this.ngModule)}};function nC(t){return Object.keys(t).map(e=>{let[n,r,o]=t[e],i={propName:n,templateName:e,isSignal:(r&mc.SignalBased)!==0};return o&&(i.transform=o),i})}function rC(t){return Object.keys(t).map(e=>({propName:t[e],templateName:e}))}function oC(t,e,n){let r=e instanceof ye?e:e?.injector;return r&&t.getStandaloneInjector!==null&&(r=t.getStandaloneInjector(r)||r),r?new Cd(n,r):n}function iC(t){let e=t.get(Cr,null);if(e===null)throw new x(407,!1);let n=t.get(Dy,null),r=t.get(gr,null),o=t.get(Un,null,{optional:!0});return{rendererFactory:e,sanitizer:n,changeDetectionScheduler:r,ngReflect:!1,tracingService:o}}function sC(t,e){let n=Cy(t);return jg(e,n,n==="svg"?pm:n==="math"?mm:null)}function aC(t){if(t?.toLowerCase()==="script")throw new x(905,!1)}function Cy(t){return(t.selectors[0][0]||"div").toLowerCase()}var Eo=class extends yc{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=nC(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=rC(this.componentDef.outputs),this.cachedOutputs}constructor(e,n){super(),this.componentDef=e,this.ngModule=n,this.componentType=e.type,this.selector=UT(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!n}create(e,n,r,o,i,s){ie(X.DynamicComponentStart);let c=G(null);try{let l=this.componentDef,u=oC(l,o||this.ngModule,e),d=iC(u),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(wy(l),()=>this.createComponentRef(d,u,n,r,i,s)):this.createComponentRef(d,u,n,r,i,s)}finally{G(c)}}createComponentRef(e,n,r,o,i,s){let c=this.componentDef,l=cC(o,c,s,i),u=e.rendererFactory.createRenderer(null,c),d=o?lw(u,o,c.encapsulation,n):sC(c,u);aC(d?.tagName);let f=s?.some(cg)||i?.some(g=>typeof g!="function"&&g.bindings.some(cg)),h=qg(null,l,null,512|Gg(c),null,null,e,u,n,null,Lg(d,n,!0));h[vt]=d,Ya(h);let p=null;try{let g=Ey(vt,h,2,"#host",()=>l.directiveRegistry,!0,0);Vg(u,d,g),qi(d,h),ry(l,h,g),Ug(l,g,h),Ty(l,g),r!==void 0&&uC(g,this.ngContentSelectors,r),p=Wt(g.index,h),h[Je]=p[Je],cy(l,h,null)}catch(g){throw p!==null&&yd(p),yd(h),g}finally{ie(X.DynamicComponentEnd),Za()}return new cc(this.componentType,h,!!f)}};function cC(t,e,n,r){let o=t?["ng-version","21.2.23"]:jT(e.selectors[0]),i=null,s=null,c=0;if(n)for(let d of n)c+=d[Id].requiredVars,d.create&&(d.targetIdx=0,(i??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(r)for(let d=0;d<r.length;d++){let f=r[d];if(typeof f!="function")for(let h of f.bindings){c+=h[Id].requiredVars;let p=d+1;h.create&&(h.targetIdx=p,(i??=[]).push(h)),h.update&&(h.targetIdx=p,(s??=[]).push(h))}}let l=[e];if(r)for(let d of r){let f=typeof d=="function"?d:d.type,h=ku(f);l.push(h)}return Wg(0,null,lC(i,s),1,c,l,null,null,null,[o],null)}function lC(t,e){return!t&&!e?null:n=>{if(n&1&&t)for(let r of t)r.create();if(n&2&&e)for(let r of e)r.update()}}function cg(t){let e=t[Id].kind;return e==="input"||e==="twoWay"}var cc=class extends Sy{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,n,r){super(),this._rootLView=n,this._hasInputBindings=r,this._tNode=gm(n[W],vt),this.location=_d(this._tNode,n),this.instance=Wt(this._tNode.index,n)[Je],this.hostView=this.changeDetectorRef=new wr(n,void 0),this.componentType=e}setInput(e,n){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),n))return;let o=this._rootLView,i=ay(r,o[W],o,e,n);this.previousInputValues.set(e,n);let s=Wt(r.index,o);Vd(s,1)}get injector(){return new Tr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function uC(t,e,n){let r=t.projection=[];for(let o=0;o<e.length;o++){let i=n[o];r.push(i!=null&&i.length?Array.from(i):null)}}var es=(()=>{class t{static __NG_ELEMENT_ID__=dC}return t})();function dC(){let t=qt();return fC(t,tt())}var Rd=class t extends es{_lContainer;_hostTNode;_hostLView;constructor(e,n,r){super(),this._lContainer=e,this._hostTNode=n,this._hostLView=r}get element(){return _d(this._hostTNode,this._hostLView)}get injector(){return new Tr(this._hostTNode,this._hostLView)}get parentInjector(){let e=Md(this._hostTNode,this._hostLView);if(Dg(e)){let n=oc(e,this._hostLView),r=rc(e),o=n[W].data[r+8];return new Tr(o,n)}else return new Tr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let n=lg(this._lContainer);return n!==null&&n[e]||null}get length(){return this._lContainer.length-et}createEmbeddedView(e,n,r){let o,i;typeof r=="number"?o=r:r!=null&&(o=r.index,i=r.injector);let s=rg(this._lContainer,e.ssrId),c=e.createEmbeddedViewImpl(n||{},i,s);return this.insertImpl(c,o,ng(this._hostTNode,s)),c}createComponent(e,n,r,o,i,s,c){let l=e&&!QE(e),u;if(l)u=n;else{let y=n||{};u=y.index,r=y.injector,o=y.projectableNodes,i=y.environmentInjector||y.ngModuleRef,s=y.directives,c=y.bindings}let d=l?e:new Eo(kn(e)),f=r||this.parentInjector;if(!i&&d.ngModule==null){let D=(l?f:this.parentInjector).get(ye,null);D&&(i=D)}let h=kn(d.componentType??{}),p=rg(this._lContainer,h?.id??null),g=p?.firstChild??null,S=d.create(f,o,g,i,s,c);return this.insertImpl(S.hostView,u,ng(this._hostTNode,p)),S}insert(e,n){return this.insertImpl(e,n,!0)}insertImpl(e,n,r){let o=e._lView;if(ym(o)){let c=this.indexOf(e);if(c!==-1)this.detach(c);else{let l=o[He],u=new t(l,l[gt],l[He]);u.detach(u.indexOf(e))}}let i=this._adjustIndex(n),s=this._lContainer;return Aw(s,o,i,r),e.attachToViewContainerRef(),Au(hd(s),i,e),e}move(e,n){return this.insert(e,n)}indexOf(e){let n=lg(this._lContainer);return n!==null?n.indexOf(e):-1}remove(e){let n=this._adjustIndex(e,-1),r=Td(this._lContainer,n);r&&(Mi(hd(this._lContainer),n),Xg(r[W],r))}detach(e){let n=this._adjustIndex(e,-1),r=Td(this._lContainer,n);return r&&Mi(hd(this._lContainer),n)!=null?new wr(r):null}_adjustIndex(e,n=0){return e??this.length+n}};function lg(t){return t[Oi]}function hd(t){return t[Oi]||(t[Oi]=[])}function fC(t,e){let n,r=e[t.index];return It(r)?n=r:(n=xw(r,e,null,t),e[t.index]=n,Kg(e,n)),pC(n,e,t,r),new Rd(n,t,e)}function hC(t,e){let n=t[Xe],r=n.createComment(""),o=pn(e,t),i=n.parentNode(o);return ic(n,i,r,n.nextSibling(o),!1),r}var pC=mC;function mC(t,e,n,r){if(t[An])return;let o;n.type&8?o=Rt(r):o=hC(e,n),t[An]=o}var To=class{},vc=class{};var lc=class extends To{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new ac(this);constructor(e,n,r,o=!0){super(),this.ngModuleType=e,this._parent=n;let i=_u(e);this._bootstrapComponents=$g(i.bootstrap),this._r3Injector=od(e,n,[{provide:To,useValue:this},{provide:Xi,useValue:this.componentFactoryResolver},...r],La(e),new Set(["environment"])),o&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},uc=class extends vc{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new lc(this.moduleType,e,[])}};var Qi=class extends To{injector;componentFactoryResolver=new ac(this);instance=null;constructor(e){super();let n=new mr([...e.providers,{provide:To,useValue:this},{provide:Xi,useValue:this.componentFactoryResolver}],e.parent||ki(),e.debugName,new Set(["environment"]));this.injector=n,e.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function ts(t,e,n=null){return new Qi({providers:t,parent:e,debugName:n,runEnvironmentInitializers:!0}).injector}var gC=(()=>{class t{_injector;cachedInjectors=new Map;constructor(n){this._injector=n}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n)){let r=Lu(!1,n.type),o=r.length>0?ts([r],this._injector,""):null;this.cachedInjectors.set(n,o)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=N({token:t,providedIn:"environment",factory:()=>new t(O(ye))})}return t})();function ee(t){return Ki(()=>{let e=Iy(t),n=C(v({},e),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Nd.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&t.dependencies||null,getStandaloneInjector:e.standalone?o=>o.get(gC).getOrCreateStandaloneInjector(n):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Mt.Emulated,styles:t.styles||wt,_:null,schemas:t.schemas||null,tView:null,id:""});e.standalone&&Ud("NgStandalone"),Ry(n);let r=t.dependencies;return n.directiveDefs=ug(r,yC),n.pipeDefs=ug(r,om),n.id=DC(n),n})}function yC(t){return kn(t)||ku(t)}function wo(t){return Ki(()=>({type:t.type,bootstrap:t.bootstrap||wt,declarations:t.declarations||wt,imports:t.imports||wt,exports:t.exports||wt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function vC(t,e){if(t==null)return Sr;let n={};for(let r in t)if(t.hasOwnProperty(r)){let o=t[r],i,s,c,l;Array.isArray(o)?(c=o[0],i=o[1],s=o[2]??i,l=o[3]||null):(i=o,s=o,c=mc.None,l=null),n[i]=[r,c,l],e[i]=s}return n}function SC(t){if(t==null)return Sr;let e={};for(let n in t)t.hasOwnProperty(n)&&(e[t[n]]=n);return e}function Sc(t){return Ki(()=>{let e=Iy(t);return Ry(e),e})}function Iy(t){let e={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputConfig:t.inputs||Sr,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||wt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:vC(t.inputs,e),outputs:SC(t.outputs),debugInfo:null}}function Ry(t){t.features?.forEach(e=>e(t))}function ug(t,e){return t?()=>{let n=typeof t=="function"?t():t,r=[];for(let o of n){let i=e(o);i!==null&&r.push(i)}return r}:null}function DC(t){let e=0,n=typeof t.consts=="function"?"":t.consts,r=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,n,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let i of r.join("|"))e=Math.imul(31,e)+i.charCodeAt(0)<<0;return e+=2147483648,"c"+e}var zd=(()=>{class t{log(n){console.log(n)}warn(n){console.warn(n)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();var Wd=new A("");function ns(t){return!!t&&typeof t.then=="function"}function Py(t){return!!t&&typeof t.subscribe=="function"}var My=new A("");var qd=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((n,r)=>{this.resolve=n,this.reject=r});appInits=P(My,{optional:!0})??[];injector=P($t);constructor(){}runInitializers(){if(this.initialized)return;let n=[];for(let o of this.appInits){let i=Fe(this.injector,o);if(ns(i))n.push(i);else if(Py(i)){let s=new Promise((c,l)=>{i.subscribe({complete:c,error:l})});n.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),n.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Dc=new A("");function _y(){$l(()=>{let t="";throw new x(600,t)})}function ky(t){return t.isBoundToModule}var bC=10;var Co=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=P(Gt);afterRenderManager=P(Yg);zonelessEnabled=P(Bi);rootEffectScheduler=P(ld);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new me;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=P(mn);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(L(n=>!n))}constructor(){P(Un,{optional:!0})}whenStable(){let n;return new Promise(r=>{n=this.isStable.subscribe({next:o=>{o&&r()}})}).finally(()=>{n.unsubscribe()})}_injector=P(ye);_rendererFactory=null;get injector(){return this._injector}bootstrap(n,r){return this.bootstrapImpl(n,r)}bootstrapImpl(n,r,o=$t.NULL){return this._injector.get(Ve).run(()=>{ie(X.BootstrapComponentStart);let s=n instanceof yc;if(!this._injector.get(qd).done){let g="";throw new x(405,g)}let l;s?l=n:l=this._injector.get(Xi).resolveComponentFactory(n),this.componentTypes.push(l.componentType);let u=ky(l)?void 0:this._injector.get(To),d=r||l.selector,f=l.create(o,[],d,u),h=f.location.nativeElement,p=f.injector.get(Wd,null);return p?.registerApplication(h),f.onDestroy(()=>{this.detachView(f.hostView),zi(this.components,f),p?.unregisterApplication(h)}),this._loadComponent(f),ie(X.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){ie(X.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Hd.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw ie(X.ChangeDetectionEnd),new x(101,!1);let n=G(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,G(n),this.afterTick.next(),ie(X.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Cr,null,{optional:!0}));let n=0;for(;this.dirtyFlags!==0&&n++<bC;){ie(X.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{ie(X.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let n=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:o}of this.allViews){if(!r&&!Hi(o))continue;let i=r&&!this.zonelessEnabled?0:1;py(o,i),n=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}n||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:n})=>Hi(n))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(n){let r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){let r=n;zi(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView);try{this.tick()}catch(o){this.internalErrorHandler(o)}this.components.push(n),this._injector.get(Dc,[]).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>zi(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new x(406,!1);let n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function zi(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function dg(t,e,n,r,o){ay(e,t,n,o?"class":"style",r)}function nt(t,e,n,r){let o=tt(),i=o[W],s=t+vt,c=i.firstCreatePass?Ey(s,o,2,e,mw,Tm(),n,r):i.data[s];if(Fn(c)){let l=o[zt].tracingService;if(l&&l.componentCreate){let u=i.data[c.directiveStart+c.componentOffset];return l.componentCreate(wy(u),()=>(fg(t,e,o,c,r),nt))}}return fg(t,e,o,c,r),nt}function fg(t,e,n,r,o){if(iy(r,n,t,e,Ny),Wa(r)){let i=n[W];ry(i,n,r),Ug(i,r,n)}o!=null&&oy(n,r)}function rt(){let t=Qa(),e=qt(),n=sy(e);return t.firstCreatePass&&Ty(t,n),qu(n)&&Gu(),Wu(),n.classesWithoutHost!=null&&tT(n)&&dg(t,n,tt(),n.classesWithoutHost,!0),n.stylesWithoutHost!=null&&nT(n)&&dg(t,n,tt(),n.stylesWithoutHost,!1),rt}function Kt(t,e,n,r){return nt(t,e,n,r),rt(),Kt}function ke(t,e,n,r){let o=tt(),i=o[W],s=t+vt,c=i.firstCreatePass?Yw(s,i,2,e,n,r):i.data[s];return iy(c,o,t,e,Ny),r!=null&&oy(o,c),ke}function We(){let t=qt(),e=sy(t);return qu(e)&&Gu(),Wu(),We}function Le(t,e,n,r){return ke(t,e,n,r),We(),Le}var Ny=(t,e,n,r,o)=>(rd(!0),jg(e[Xe],r,td()));var rs="en-US";var EC=rs;function xy(t){typeof t=="string"&&(EC=t.toLowerCase().replace(/_/g,"-"))}function St(t,e,n){let r=tt(),o=Qa(),i=qt();return(i.type&3||n)&&Jw(i,o,r,n,r[Xe],t,e,Zw(i,r,e)),St}function ge(t,e=""){let n=tt(),r=Qa(),o=t+vt,i=r.firstCreatePass?$d(r,o,1,e,null):r.data[o],s=TC(r,n,i,e);n[o]=s,nd()&&ey(r,n,s,i),ji(i,!1)}var TC=(t,e,n,r)=>(rd(!0),IT(e[Xe],r));var dc=class{ngModuleFactory;componentFactories;constructor(e,n){this.ngModuleFactory=e,this.componentFactories=n}},Gd=(()=>{class t{compileModuleSync(n){return new uc(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){let r=this.compileModuleSync(n),o=_u(n),i=$g(o.declarations).reduce((s,c)=>{let l=kn(c);return l&&s.push(new Eo(l)),s},[]);return new dc(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ay=(()=>{class t{applicationErrorHandler=P(Gt);appRef=P(Co);taskService=P(mn);ngZone=P(Ve);zonelessEnabled=P(Bi);tracing=P(Un,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Ae;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Ii):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(P(cd,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let n=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(n);return}this.switchToMicrotaskScheduler(),this.taskService.remove(n)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let n=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(n)})})}notify(n){if(!this.zonelessEnabled&&n===5)return;switch(n){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?Hm:id;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Ii+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let n=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(n),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let n=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(n)}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Oy(){return[{provide:gr,useExisting:Ay},{provide:Ve,useClass:Ri},{provide:Bi,useValue:!0}]}function wC(){return typeof $localize<"u"&&$localize.locale||rs}var Qd=new A("",{factory:()=>P(Qd,{optional:!0,skipSelf:!0})||wC()});function jn(t){return Xp(t)}var Hy=Symbol("InputSignalNode#UNSET"),UC=C(v({},ca),{transformFn:void 0,applyValueToInputSignal(t,e){Zr(t,e)}});function Uy(t,e){let n=Object.create(UC);n.value=t,n.transformFn=e?.transform;function r(){if(hi(n),n.value===Hy){let o=null;throw new x(-950,o)}return n.value}return r[st]=n,r}function Fy(t,e){return Uy(t,e)}function jC(t){return Uy(Hy,t)}var jy=(Fy.required=jC,Fy);var Kd=new A(""),BC=new A("");function os(t){return!t.moduleRef}function VC(t){let e=os(t)?t.r3Injector:t.moduleRef.injector,n=e.get(Ve);return n.run(()=>{os(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let r=e.get(Gt),o;if(n.runOutsideAngular(()=>{o=n.onError.subscribe({next:r})}),os(t)){let i=()=>e.destroy(),s=t.platformInjector.get(Kd);s.add(i),e.onDestroy(()=>{o.unsubscribe(),s.delete(i)})}else{let i=()=>t.moduleRef.destroy(),s=t.platformInjector.get(Kd);s.add(i),t.moduleRef.onDestroy(()=>{zi(t.allPlatformModules,t.moduleRef),o.unsubscribe(),s.delete(i)})}return zC(r,n,()=>{let i=e.get(mn),s=i.add(),c=e.get(qd);return c.runInitializers(),c.donePromise.then(()=>{let l=e.get(Qd,rs);if(xy(l||rs),!e.get(BC,!0))return os(t)?e.get(Co):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(os(t)){let d=e.get(Co);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return $C?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{i.remove(s)})})})}var $C;function zC(t,e,n){try{let r=n();return ns(r)?r.catch(o=>{throw e.runOutsideAngular(()=>t(o)),o}):r}catch(r){throw e.runOutsideAngular(()=>t(r)),r}}var bc=null;function WC(t=[],e){return $t.create({name:e,providers:[{provide:_i,useValue:"platform"},{provide:Kd,useValue:new Set([()=>bc=null])},...t]})}function qC(t=[]){if(bc)return bc;let e=WC(t);return bc=e,_y(),GC(e),e}function GC(t){let e=t.get(pc,null);Fe(t,()=>{e?.forEach(n=>n())})}var QC=1e4;var E5=QC-1e3;var Yd=(()=>{class t{static __NG_ELEMENT_ID__=KC}return t})();function KC(t){return YC(qt(),tt(),(t&16)===16)}function YC(t,e,n){if(Fn(t)&&!n){let r=Wt(t.index,e);return new wr(r,r)}else if(t.type&175){let r=e[yt];return new wr(r,e)}return null}function By(t){let{rootComponent:e,appProviders:n,platformProviders:r,platformRef:o}=t;ie(X.BootstrapApplicationStart);try{let i=o?.injector??qC(r),s=[Oy(),jm,...n||[]],c=new Qi({providers:s,parent:i,debugName:"",runEnvironmentInitializers:!1});return VC({r3Injector:c.injector,platformInjector:i,rootComponent:e})}catch(i){return Promise.reject(i)}finally{ie(X.BootstrapApplicationEnd)}}var Vy=null;function gn(){return Vy}function Zd(t){Vy??=t}var is=class{},Io=(()=>{class t{historyGo(n){throw new Error("")}static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:()=>P($y),providedIn:"platform"})}return t})();var $y=(()=>{class t extends Io{_location;_history;_doc=P(_e);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return gn().getBaseHref(this._doc)}onPopState(n){let r=gn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){let r=gn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,r,o){this._history.pushState(n,r,o)}replaceState(n,r,o){this._history.replaceState(n,r,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function qy(t,e){return t?e?t.endsWith("/")?e.startsWith("/")?t+e.slice(1):t+e:e.startsWith("/")?t+e:`${t}/${e}`:t:e}function zy(t){let e=t.search(/#|\?|$/);return t[e-1]==="/"?t.slice(0,e-1)+t.slice(e):t}function Bn(t){return t&&t[0]!=="?"?`?${t}`:t}var Ec=(()=>{class t{historyGo(n){throw new Error("")}static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:()=>P(JC),providedIn:"root"})}return t})(),ZC=new A(""),JC=(()=>{class t extends Ec{_platformLocation;_baseHref;_removeListenerFns=[];constructor(n,r){super(),this._platformLocation=n,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??P(_e).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return qy(this._baseHref,n)}path(n=!1){let r=this._platformLocation.pathname+Bn(this._platformLocation.search),o=this._platformLocation.hash;return o&&n?`${r}${o}`:r}pushState(n,r,o,i){let s=this.prepareExternalUrl(o+Bn(i));this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){let s=this.prepareExternalUrl(o+Bn(i));this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}static \u0275fac=function(r){return new(r||t)(O(Io),O(ZC,8))};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ro=(()=>{class t{_subject=new me;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(n){this._locationStrategy=n;let r=this._locationStrategy.getBaseHref();this._basePath=t0(zy(Wy(r))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+Bn(r))}normalize(n){return t.stripTrailingSlash(e0(this._basePath,Wy(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",o=null){this._locationStrategy.pushState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+Bn(r)),o)}replaceState(n,r="",o=null){this._locationStrategy.replaceState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+Bn(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(o=>o(n,r))}subscribe(n,r,o){return this._subject.subscribe({next:n,error:r??void 0,complete:o??void 0})}static normalizeQueryParams=Bn;static joinWithSlash=qy;static stripTrailingSlash=zy;static \u0275fac=function(r){return new(r||t)(O(Ec))};static \u0275prov=N({token:t,factory:()=>XC(),providedIn:"root"})}return t})();function XC(){return new Ro(O(Ec))}function e0(t,e){if(!t||!e.startsWith(t))return e;let n=e.substring(t.length);return n===""||["/",";","?","#"].includes(n[0])?n:e}function Wy(t){return t.replace(/\/index\.html$/,"")}function t0(t){if(new RegExp("^(https?:)?//").test(t)){let[,n]=t.split(/\/\/[^\/]+/);return n}return t}var Tc=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=wo({type:t});static \u0275inj=yr({})}return t})();function ss(t,e){e=encodeURIComponent(e);for(let n of t.split(";")){let r=n.indexOf("="),[o,i]=r==-1?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===e)return decodeURIComponent(i)}return null}var Rr=class{};var Gy="browser";var as=class{_doc;constructor(e){this._doc=e}manager},wc=(()=>{class t extends as{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o,i){return n.addEventListener(r,o,i),()=>this.removeEventListener(n,r,o,i)}removeEventListener(n,r,o,i){return n.removeEventListener(r,o,i)}static \u0275fac=function(r){return new(r||t)(O(_e))};static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})(),Rc=new A(""),tf=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(n,r){this._zone=r,n.forEach(s=>{s.manager=this});let o=n.filter(s=>!(s instanceof wc));this._plugins=o.slice().reverse();let i=n.find(s=>s instanceof wc);i&&this._plugins.push(i)}addEventListener(n,r,o,i){return this._findPluginFor(r).addEventListener(n,r,o,i)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(i=>i.supports(n)),!r)throw new x(5101,!1);return this._eventNameToPlugin.set(n,r),r}static \u0275fac=function(r){return new(r||t)(O(Rc),O(Ve))};static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})(),Jd="ng-app-id";function Qy(t){for(let e of t)e.remove()}function Ky(t,e){let n=e.createElement("style");return n.textContent=t,n}function r0(t,e,n,r){let o=t.head?.querySelectorAll(`style[${Jd}="${e}"],link[${Jd}="${e}"]`);if(o)for(let i of o)i.removeAttribute(Jd),i instanceof HTMLLinkElement?r.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&n.set(i.textContent,{usage:0,elements:[i]})}function ef(t,e){let n=e.createElement("link");return n.setAttribute("rel","stylesheet"),n.setAttribute("href",t),n}var nf=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(n,r,o,i={}){this.doc=n,this.appId=r,this.nonce=o,r0(n,r,this.inline,this.external),this.hosts.add(n.head)}addStyles(n,r){for(let o of n)this.addUsage(o,this.inline,Ky);r?.forEach(o=>this.addUsage(o,this.external,ef))}removeStyles(n,r){for(let o of n)this.removeUsage(o,this.inline);r?.forEach(o=>this.removeUsage(o,this.external))}addUsage(n,r,o){let i=r.get(n);i?i.usage++:r.set(n,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(n,this.doc)))})}removeUsage(n,r){let o=r.get(n);o&&(o.usage--,o.usage<=0&&(Qy(o.elements),r.delete(n)))}ngOnDestroy(){for(let[,{elements:n}]of[...this.inline,...this.external])Qy(n);this.hosts.clear()}addHost(n){this.hosts.add(n);for(let[r,{elements:o}]of this.inline)o.push(this.addElement(n,Ky(r,this.doc)));for(let[r,{elements:o}]of this.external)o.push(this.addElement(n,ef(r,this.doc)))}removeHost(n){this.hosts.delete(n)}addElement(n,r){return this.nonce&&r.setAttribute("nonce",this.nonce),n.appendChild(r)}static \u0275fac=function(r){return new(r||t)(O(_e),O(hc),O(Ji,8),O(Zi))};static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})(),Xd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},rf=/%COMP%/g;var Zy="%COMP%",o0=`_nghost-${Zy}`,i0=`_ngcontent-${Zy}`,s0=!0,a0=new A("",{factory:()=>s0});function c0(t){return i0.replace(rf,t)}function l0(t){return o0.replace(rf,t)}function Jy(t,e){return e.map(n=>n.replace(rf,t))}var of=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(n,r,o,i,s,c,l=null,u=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=s,this.ngZone=c,this.nonce=l,this.tracingService=u,this.defaultRenderer=new cs(n,s,c,this.tracingService)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;let o=this.getOrCreateRenderer(n,r);return o instanceof Ic?o.applyToHost(n):o instanceof ls&&o.applyStyles(),o}getOrCreateRenderer(n,r){let o=this.rendererByCompId,i=o.get(r.id);if(!i){let s=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(r.encapsulation){case Mt.Emulated:i=new Ic(l,u,r,this.appId,d,s,c,f);break;case Mt.ShadowDom:return new Cc(l,n,r,s,c,this.nonce,f,u);case Mt.ExperimentalIsolatedShadowDom:return new Cc(l,n,r,s,c,this.nonce,f);default:i=new ls(l,u,r,d,s,c,f);break}o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(n){this.rendererByCompId.delete(n)}static \u0275fac=function(r){return new(r||t)(O(tf),O(nf),O(hc),O(a0),O(_e),O(Ve),O(Ji),O(Un,8))};static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})(),cs=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,n,r,o){this.eventManager=e,this.doc=n,this.ngZone=r,this.tracingService=o}destroy(){}destroyNode=null;createElement(e,n){return n?this.doc.createElementNS(Xd[n]||n,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,n){(Yy(e)?e.content:e).appendChild(n)}insertBefore(e,n,r){e&&(Yy(e)?e.content:e).insertBefore(n,r)}removeChild(e,n){n.remove()}selectRootElement(e,n){let r=typeof e=="string"?this.doc.querySelector(e):e;if(!r)throw new x(-5104,!1);return n||(r.textContent=""),r}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,n,r,o){if(o){n=o+":"+n;let i=Xd[o];i?e.setAttributeNS(i,n,r):e.setAttribute(n,r)}else e.setAttribute(n,r)}removeAttribute(e,n,r){if(r){let o=Xd[r];o?e.removeAttributeNS(o,n):e.removeAttribute(`${r}:${n}`)}else e.removeAttribute(n)}addClass(e,n){e.classList.add(n)}removeClass(e,n){e.classList.remove(n)}setStyle(e,n,r,o){o&(Ir.DashCase|Ir.Important)?e.style.setProperty(n,r,o&Ir.Important?"important":""):e.style[n]=r}removeStyle(e,n,r){r&Ir.DashCase?e.style.removeProperty(n):e.style[n]=""}setProperty(e,n,r){e!=null&&(e[n]=r)}setValue(e,n){e.nodeValue=n}listen(e,n,r,o){if(typeof e=="string"&&(e=gn().getGlobalEventTarget(this.doc,e),!e))throw new x(5102,!1);let i=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(e,n,i)),this.eventManager.addEventListener(e,n,i,o)}decoratePreventDefault(e){return n=>{if(n==="__ngUnwrap__")return e;e(n)===!1&&n.preventDefault()}}};function Yy(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Cc=class extends cs{hostEl;sharedStylesHost;shadowRoot;constructor(e,n,r,o,i,s,c,l){super(e,o,i,c),this.hostEl=n,this.sharedStylesHost=l,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=Jy(r.id,u);for(let f of u){let h=document.createElement("style");s&&h.setAttribute("nonce",s),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=ef(f,o);s&&h.setAttribute("nonce",s),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,n){return super.appendChild(this.nodeOrShadowRoot(e),n)}insertBefore(e,n,r){return super.insertBefore(this.nodeOrShadowRoot(e),n,r)}removeChild(e,n){return super.removeChild(null,n)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},ls=class extends cs{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,n,r,o,i,s,c,l){super(e,i,s,c),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=o;let u=r.styles;this.styles=l?Jy(l,u):u,this.styleUrls=r.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&bo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ic=class extends ls{contentAttr;hostAttr;constructor(e,n,r,o,i,s,c,l){let u=o+"-"+r.id;super(e,n,r,i,s,c,l,u),this.contentAttr=c0(u),this.hostAttr=l0(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,n){let r=super.createElement(e,n);return super.setAttribute(r,this.contentAttr,""),r}};var Pc=class t extends is{supportsDOMEvents=!0;static makeCurrent(){Zd(new t)}onAndCancel(e,n,r,o){return e.addEventListener(n,r,o),()=>{e.removeEventListener(n,r,o)}}dispatchEvent(e,n){e.dispatchEvent(n)}remove(e){e.remove()}createElement(e,n){return n=n||this.getDefaultDocument(),n.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,n){return n==="window"?window:n==="document"?e:n==="body"?e.body:null}getBaseHref(e){let n=u0();return n==null?null:d0(n)}resetBaseElement(){us=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return ss(document.cookie,e)}},us=null;function u0(){return us=us||document.head.querySelector("base"),us?us.getAttribute("href"):null}function d0(t){return new URL(t,document.baseURI).pathname}var f0=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})(),Xy=["alt","control","meta","shift"],h0={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},p0={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},ev=(()=>{class t extends as{constructor(n){super(n)}supports(n){return t.parseEventName(n)!=null}addEventListener(n,r,o,i){let s=t.parseEventName(r),c=t.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>gn().onAndCancel(n,s.domEventName,c,i))}static parseEventName(n){let r=n.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let i=t._normalizeKey(r.pop()),s="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),s="code."),Xy.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),s+=u+".")}),s+=i,r.length!=0||i.length===0)return null;let l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(n,r){let o=h0[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Xy.forEach(s=>{if(s!==o){let c=p0[s];c(n)&&(i+=s+".")}}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{t.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return n==="esc"?"escape":n}static \u0275fac=function(r){return new(r||t)(O(_e))};static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();function sf(t,e,n){return J(this,null,function*(){let r=v({rootComponent:t},m0(e,n));return By(r)})}function m0(t,e){return{platformRef:e?.platformRef,appProviders:[...D0,...t?.providers??[]],platformProviders:S0}}function g0(){Pc.makeCurrent()}function y0(){return new hn}function v0(){return xd(document),document}var S0=[{provide:Zi,useValue:Gy},{provide:pc,useValue:g0,multi:!0},{provide:_e,useFactory:v0}];var D0=[{provide:_i,useValue:"root"},{provide:hn,useFactory:y0},{provide:Rc,useClass:wc,multi:!0},{provide:Rc,useClass:ev,multi:!0},of,nf,tf,{provide:Cr,useExisting:of},{provide:Rr,useClass:f0},[]];var _t=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(n=>{let r=n.indexOf(":");if(r>0){let o=n.slice(0,r),i=n.slice(r+1).trim();this.addHeaderEntry(o,i)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((n,r)=>{this.addHeaderEntry(r,n)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([n,r])=>{this.setHeaderEntries(n,r)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let n=this.headers.get(e.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,n){return this.clone({name:e,value:n,op:"a"})}set(e,n){return this.clone({name:e,value:n,op:"s"})}delete(e,n){return this.clone({name:e,value:n,op:"d"})}maybeSetNormalizedName(e,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,e)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init();for(let[n,r]of e.headers.entries())this.headers.set(n,r),this.normalizedNames.set(n,e.normalizedNames.get(n))}clone(e){let n=new t;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([e]),n}applyUpdate(e){let n=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(e.name,n);let o=e.op==="a"?(this.headers.get(n)||[]).slice():[];o.push(...r),this.headers.set(n,o);break;case"d":let i=e.value;if(i===void 0)this.headers.delete(n),this.normalizedNames.delete(n);else{let s=Array.isArray(i)?i:[i],c=this.headers.get(n);if(!c)return;c=c.filter(l=>s.indexOf(l)===-1),c.length===0?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,c)}break}}addHeaderEntry(e,n){let r=e.toLowerCase();this.maybeSetNormalizedName(e,r),this.headers.has(r)?this.headers.get(r).push(n):this.headers.set(r,[n])}setHeaderEntries(e,n){let r=(Array.isArray(n)?n:[n]).map(i=>i.toString()),o=e.toLowerCase();this.headers.set(o,r),this.maybeSetNormalizedName(e,o)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>e(this.normalizedNames.get(n),this.headers.get(n)))}};var Mo=class{map=new Map;set(e,n){return this.map.set(e,n),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}},_c=class{encodeKey(e){return tv(e)}encodeValue(e){return tv(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function b0(t,e){let n=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(o=>{let i=o.indexOf("="),[s,c]=i==-1?[e.decodeKey(o),""]:[e.decodeKey(o.slice(0,i)),e.decodeValue(o.slice(i+1))],l=n.get(s)||[];l.push(c),n.set(s,l)}),n}var E0=/%(\d[a-f0-9])/gi,T0={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function tv(t){return encodeURIComponent(t).replace(E0,(e,n)=>T0[n]??e)}function Mc(t){return`${t}`}var yn=class t{map;encoder;updates=null;cloneFrom=null;constructor(e={}){if(this.encoder=e.encoder||new _c,e.fromString){if(e.fromObject)throw new x(2805,!1);this.map=b0(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(n=>{let r=e.fromObject[n],o=Array.isArray(r)?r.map(Mc):[Mc(r)];this.map.set(n,o)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let n=this.map.get(e);return n?n[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,n){return this.clone({param:e,value:n,op:"a"})}appendAll(e){let n=[];return Object.keys(e).forEach(r=>{let o=e[r];Array.isArray(o)?o.forEach(i=>{n.push({param:r,value:i,op:"a"})}):n.push({param:r,value:o,op:"a"})}),this.clone(n)}set(e,n){return this.clone({param:e,value:n,op:"s"})}delete(e,n){return this.clone({param:e,value:n,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let n=this.encoder.encodeKey(e);return this.map.get(e).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let n=new t({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(e),n}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[e,n]of this.cloneFrom.map.entries())this.map.set(e,n);this.updates.forEach(e=>{switch(e.op){case"a":case"s":let n=e.op==="a"?(this.map.get(e.param)||[]).slice():[];n.push(Mc(e.value)),this.map.set(e.param,n);break;case"d":if(e.value!==void 0){let r=(this.map.get(e.param)||[]).slice(),o=r.indexOf(Mc(e.value));o!==-1&&r.splice(o,1),r.length>0?this.map.set(e.param,r):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null}}};function w0(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function nv(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function rv(t){return typeof Blob<"u"&&t instanceof Blob}function ov(t){return typeof FormData<"u"&&t instanceof FormData}function C0(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var iv="Content-Type",sv="Accept",av="text/plain",cv="application/json",I0=`${cv}, ${av}, */*`,Po=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(e,n,r,o){this.url=n,this.method=e.toUpperCase();let i;if(w0(this.method)||o?(this.body=r!==void 0?r:null,i=o):i=r,i){if(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,this.keepalive=!!i.keepalive,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),i.priority&&(this.priority=i.priority),i.cache&&(this.cache=i.cache),i.credentials&&(this.credentials=i.credentials),typeof i.timeout=="number"){if(i.timeout<1||!Number.isInteger(i.timeout))throw new x(2822,"");this.timeout=i.timeout}i.mode&&(this.mode=i.mode),i.redirect&&(this.redirect=i.redirect),i.integrity&&(this.integrity=i.integrity),i.referrer!==void 0&&(this.referrer=i.referrer),i.referrerPolicy&&(this.referrerPolicy=i.referrerPolicy),this.transferCache=i.transferCache}if(this.headers??=new _t,this.context??=new Mo,!this.params)this.params=new yn,this.urlWithParams=n;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=n;else{let c=n.indexOf("?"),l=c===-1?"?":c<n.length-1?"&":"";this.urlWithParams=n+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||nv(this.body)||rv(this.body)||ov(this.body)||C0(this.body)?this.body:this.body instanceof yn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ov(this.body)?null:rv(this.body)?this.body.type||null:nv(this.body)?null:typeof this.body=="string"?av:this.body instanceof yn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?cv:null}clone(e={}){let n=e.method||this.method,r=e.url||this.url,o=e.responseType||this.responseType,i=e.keepalive??this.keepalive,s=e.priority||this.priority,c=e.cache||this.cache,l=e.mode||this.mode,u=e.redirect||this.redirect,d=e.credentials||this.credentials,f=e.referrer??this.referrer,h=e.integrity||this.integrity,p=e.referrerPolicy||this.referrerPolicy,g=e.transferCache??this.transferCache,S=e.timeout??this.timeout,y=e.body!==void 0?e.body:this.body,D=e.withCredentials??this.withCredentials,w=e.reportProgress??this.reportProgress,I=e.headers||this.headers,R=e.params||this.params,M=e.context??this.context;return e.setHeaders!==void 0&&(I=Object.keys(e.setHeaders).reduce((j,Ee)=>j.set(Ee,e.setHeaders[Ee]),I)),e.setParams&&(R=Object.keys(e.setParams).reduce((j,Ee)=>j.set(Ee,e.setParams[Ee]),R)),new t(n,r,y,{params:R,headers:I,context:M,reportProgress:w,responseType:o,withCredentials:D,transferCache:g,keepalive:i,cache:c,priority:s,timeout:S,mode:l,redirect:u,credentials:d,referrer:f,integrity:h,referrerPolicy:p})}},Pr=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Pr||{}),_o=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(e,n=200,r="OK"){this.headers=e.headers||new _t,this.status=e.status!==void 0?e.status:n,this.statusText=e.statusText||r,this.url=e.url||null,this.redirected=e.redirected,this.responseType=e.responseType,this.ok=this.status>=200&&this.status<300}},kc=class t extends _o{constructor(e={}){super(e)}type=Pr.ResponseHeader;clone(e={}){return new t({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},ds=class t extends _o{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=Pr.Response;clone(e={}){return new t({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0,redirected:e.redirected??this.redirected,responseType:e.responseType??this.responseType})}},Vn=class extends _o{name="HttpErrorResponse";message;error;ok=!1;constructor(e){super(e,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},R0=200,P0=204;var M0=new A("");var _0=/^\)\]\}',?\n/;var cf=(()=>{class t{xhrFactory;tracingService=P(Un,{optional:!0});constructor(n){this.xhrFactory=n}maybePropagateTrace(n){return this.tracingService?.propagate?this.tracingService.propagate(n):n}handle(n){if(n.method==="JSONP")throw new x(-2800,!1);let r=this.xhrFactory;return U(null).pipe(ct(()=>new F(i=>{let s=r.build();if(s.open(n.method,n.urlWithParams),n.withCredentials&&(s.withCredentials=!0),n.headers.forEach((y,D)=>s.setRequestHeader(y,D.join(","))),n.headers.has(sv)||s.setRequestHeader(sv,I0),!n.headers.has(iv)){let y=n.detectContentTypeHeader();y!==null&&s.setRequestHeader(iv,y)}if(n.timeout&&(s.timeout=n.timeout),n.responseType){let y=n.responseType.toLowerCase();s.responseType=y!=="json"?y:"text"}let c=n.serializeBody(),l=null,u=()=>{if(l!==null)return l;let y=s.statusText||"OK",D=new _t(s.getAllResponseHeaders()),w=s.responseURL||n.url;return l=new kc({headers:D,status:s.status,statusText:y,url:w}),l},d=this.maybePropagateTrace(()=>{let{headers:y,status:D,statusText:w,url:I}=u(),R=null;D!==P0&&(R=typeof s.response>"u"?s.responseText:s.response),D===0&&(D=R?R0:0);let M=D>=200&&D<300;if(n.responseType==="json"&&typeof R=="string"){let j=R;R=R.replace(_0,"");try{R=R!==""?JSON.parse(R):null}catch(Ee){R=j,M&&(M=!1,R={error:Ee,text:R})}}M?(i.next(new ds({body:R,headers:y,status:D,statusText:w,url:I||void 0})),i.complete()):i.error(new Vn({error:R,headers:y,status:D,statusText:w,url:I||void 0}))}),f=this.maybePropagateTrace(y=>{let{url:D}=u(),w=new Vn({error:y,status:s.status||0,statusText:s.statusText||"Unknown Error",url:D||void 0});i.error(w)}),h=f;n.timeout&&(h=this.maybePropagateTrace(y=>{let{url:D}=u(),w=new Vn({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:D||void 0});i.error(w)}));let p=!1,g=this.maybePropagateTrace(y=>{p||(i.next(u()),p=!0);let D={type:Pr.DownloadProgress,loaded:y.loaded};y.lengthComputable&&(D.total=y.total),n.responseType==="text"&&s.responseText&&(D.partialText=s.responseText),i.next(D)}),S=this.maybePropagateTrace(y=>{let D={type:Pr.UploadProgress,loaded:y.loaded};y.lengthComputable&&(D.total=y.total),i.next(D)});return s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",h),s.addEventListener("abort",f),n.reportProgress&&(s.addEventListener("progress",g),c!==null&&s.upload&&s.upload.addEventListener("progress",S)),s.send(c),i.next({type:Pr.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",h),n.reportProgress&&(s.removeEventListener("progress",g),c!==null&&s.upload&&s.upload.removeEventListener("progress",S)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(r){return new(r||t)(O(Rr))};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),k0=new A("",{factory:()=>!0}),N0="XSRF-TOKEN",x0=new A("",{factory:()=>N0}),A0="X-XSRF-TOKEN",O0=new A("",{factory:()=>A0}),F0=(()=>{class t{cookieName=P(x0);doc=P(_e);lastCookieString="";lastToken=null;parseCount=0;getToken(){let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=ss(n,this.cookieName),this.lastCookieString=n),this.lastToken}static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),lv=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:function(r){let o=null;return r?o=new(r||t):o=O(F0),o},providedIn:"root"})}return t})();function uv(t,e){if(!P(k0)||t.method==="GET"||t.method==="HEAD")return e(t);try{let o=P(Io).href,{origin:i}=new URL(o),{origin:s}=new URL(t.url,i);if(i!==s)return e(t)}catch(o){return e(t)}let n=P(lv).getToken(),r=P(O0);return n!=null&&!t.headers.has(r)&&(t=t.clone({headers:t.headers.set(r,n)})),e(t)}function L0(t,e){return e(t)}function H0(t,e,n){return(r,o)=>Fe(n,()=>e(r,i=>t(i,o)))}var dv=new A("",{factory:()=>[uv]}),fv=new A(""),hv=new A("",{factory:()=>!0});var lf=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:function(r){let o=null;return r?o=new(r||t):o=O(cf),o},providedIn:"root"})}return t})();var Nc=(()=>{class t{backend;injector;chain=null;pendingTasks=P(Ja);contributeToStability=P(hv);constructor(n,r){this.backend=n,this.injector=r}handle(n){if(this.chain===null){let r=this.injector.get(xc,null,{skipSelf:!0}),o=r!==null&&this.backend===r,i=this.injector.get(fv,[],o?{self:!0}:void 0),s=Array.from(new Set([...this.injector.get(dv),...i]));this.chain=s.reduceRight((c,l)=>H0(c,l,this.injector),L0)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(n,o=>this.backend.handle(o)).pipe(Mn(r))}else return this.chain(n,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||t)(O(lf),O(ye))};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xc=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:function(r){let o=null;return r?o=new(r||t):o=O(Nc),o},providedIn:"root"})}return t})();function af(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Ac=(()=>{class t{handler;constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof Po)i=n;else{let l;o.headers instanceof _t?l=o.headers:l=new _t(o.headers);let u;o.params&&(o.params instanceof yn?u=o.params:u=new yn({fromObject:o.params})),i=new Po(n,r,o.body!==void 0?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,referrerPolicy:o.referrerPolicy,integrity:o.integrity,timeout:o.timeout})}let s=U(i).pipe(io(l=>this.handler.handle(l)));if(n instanceof Po||o.observe==="events")return s;let c=s.pipe(Me(l=>l instanceof ds));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return c.pipe(L(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new x(2806,!1);return l.body}));case"blob":return c.pipe(L(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new x(2807,!1);return l.body}));case"text":return c.pipe(L(l=>{if(l.body!==null&&typeof l.body!="string")throw new x(2808,!1);return l.body}));default:return c.pipe(L(l=>l.body))}case"response":return c;default:throw new x(2809,!1)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new yn().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,af(o,r))}post(n,r,o={}){return this.request("POST",n,af(o,r))}put(n,r,o={}){return this.request("PUT",n,af(o,r))}static \u0275fac=function(r){return new(r||t)(O(xc))};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function uf(...t){let e=[Ac,Nc,{provide:xc,useExisting:Nc},{provide:lf,useFactory:()=>P(M0,{optional:!0})??P(cf)},{provide:dv,useValue:uv,multi:!0}];for(let n of t)e.push(...n.\u0275providers);return uo(e)}var pv=(()=>{class t{_doc;constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}static \u0275fac=function(r){return new(r||t)(O(_e))};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var se=(()=>{class t{constructor(){this.raidTierSource=new le(""),this.regionSource=new le(""),this.pokemonListSource=new le(""),this.teraTypeSource=new le(""),this.moveListSource=new le(""),this.loadingSource=new le(!1),this.raidTier=this.raidTierSource.asObservable(),this.regionList=this.regionSource.asObservable(),this.pokemonList=this.pokemonListSource.asObservable(),this.teraType=this.teraTypeSource.asObservable(),this.moveList=this.moveListSource.asObservable(),this.loading=this.loadingSource.asObservable()}changeRaidTier(n){this.raidTierSource.next(n)}changeRegionList(n){this.regionSource.next(n)}changePokemon(n){this.pokemonListSource.next(n)}changeTeraType(n){this.teraTypeSource.next(n)}changeMoveList(n){this.moveListSource.next(n)}changeLoading(n){this.loadingSource.next(n)}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var mv=(()=>{class t{constructor(n){this.stateService=n}valueChanged(){let n=document.getElementById("raidTier"),r=n.selectedIndex,o=n.options[r];this.stateService.changeRaidTier(o.value)}static{this.\u0275fac=function(r){return new(r||t)(q(se))}}static{this.\u0275cmp=ee({type:t,selectors:[["app-raid-tier"]],decls:7,vars:0,consts:[["id","raidTier",3,"change"],["value",""],["value","5"],["value","6"]],template:function(r,o){r&1&&(ke(0,"select",0),St("change",function(){return o.valueChanged()}),ke(1,"option",1),ge(2,"-- Tier --"),We(),ke(3,"option",2),ge(4,"5 Star"),We(),ke(5,"option",3),ge(6,"6 Star"),We()())},encapsulation:2})}}return t})();var m=(function(t){return t.Paldea="Paldea",t.Kitakami="Kitakami",t.Terarium="Terarium",t})(m||{}),a=(function(t){return t.Time="Time",t.HP="HP",t})(a||{}),Yt=[{name:"Abomasnow",region:m.Paldea,info:{moves:["Energy Ball","Ice Punch","Ice Shard","Leer","Blizzard","Snowscape","Aurora Veil"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Blizzard"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Snowscape"},{type:a.HP,threshold:25,action:"Uses Aurora Veil"}]}},{name:"Altaria",region:m.Paldea,info:{moves:["Dragon Pulse","Hurricane","Sing","Mist","Safeguard","Cotton Guard"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Safeguard"},{type:a.HP,threshold:75,action:"Uses"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Cotton Guard"},{type:a.HP,threshold:25,action:"Uses Sing"}]}},{name:"Amoonguss",region:m.Paldea,info:{moves:["Energy Ball","Sludge Bomb","Spore","Clear Smog","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Spore"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Annihilape",region:m.Paldea,info:{moves:["Shadow Claw","Close Combat","Outrage","Leer","Taunt","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Bulk Up"}]}},{name:"Appletun",region:m.Paldea,info:{moves:["Apple Acid","Dragon Pulse","Giga Drain","Body Press","","Growth"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses"},{type:a.HP,threshold:75,action:"Uses Growth"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Arboliva",region:m.Paldea,info:{moves:["Energy Ball","Hyper Voice","Earth Power","Charm","Sunny Day","Growth","Leaf Storm"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Growth"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Leaf Storm"}]}},{name:"Arcanine",region:m.Paldea,info:{moves:["Flamethrower","Crunch","Extreme Speed","Fire Fang","Sunny Day","Leer"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Leer"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Armarouge",region:m.Paldea,info:{moves:["Armor Cannon","Psychic","Night Shade","Will-O-Wisp","Sunny Day","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Sunny Day"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Avalugg",region:m.Paldea,info:{moves:["Icicle Crash","Double-Edge","Crunch","Ice Fang","Snowscape","Iron Defense"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Snowscape"},{type:a.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Baxcalibur",region:m.Paldea,info:{moves:["Dragon Claw","Icicle Crash","Ice Shard","Body Press","Snowscape"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Blissey",region:m.Paldea,info:{moves:["Dazzling Gleam","Hyper Voice","Sing","Seismic Toss","Gravity"],specialMoves:["Seismic Toss","Gravity"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Gravity"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Bombirdier",region:m.Paldea,info:{moves:["Rock Slide","Sucker Punch","Brave Bird","Torment","Knock Off","Feather Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Feather Dance"}]}},{name:"Brambleghast",region:m.Paldea,info:{moves:["Giga Drain","Shadow Ball","Power Whip","Infestation","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Grassy Terrain"}]}},{name:"Braviary",region:m.Paldea,info:{moves:["Acrobatics","Crush Claw","Superpower","Air Slash","Tailwind","Hone Claws"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Tailwind"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Hone Claws"},{type:a.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Breloom",region:m.Paldea,info:{moves:["Seed Bomb","Mach Punch","Worry Seed","Headbutt","Grassy Terrain","Spore"],specialMoves:["Spore"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Bronzong",region:m.Paldea,info:{moves:["Flash Cannon","Extrasensory","Metal Sound","Payback","Rain Dance","Calm Mind","Reflect"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Calm Mind"},{type:a.HP,threshold:25,action:"Uses Reflect"}]}},{name:"Camerupt",region:m.Paldea,info:{moves:["Flamethrower","Earth Power","Yawn","Eruption","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Ceruledge",region:m.Paldea,info:{moves:["Bitter Blade","Shadow Claw","Psycho Cut","Will-O-Wisp","Sunny Day","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Sunny Day"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Swords Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Cetitan",region:m.Paldea,info:{moves:["Ice Spinner","Liquidation","Yawn","Entrainment","Snowscape"],specialMoves:["Yawn","Entrainment"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Clawitzer",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Aura Sphere","Crabhammer","Rain Dance"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Water Pulse"}]}},{name:"Cloyster",region:m.Paldea,info:{moves:["Icicle Spear","Hydro Pump","Ice Shard","Supersonic","Shell Smash"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Shell Smash"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Coalossal",region:m.Paldea,info:{moves:["Heat Crash","Stone Edge","Incinerate","Ancient Power","Sandstorm","Tar Shot","Fire Blast"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Uses Tar Shot"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Fire Blast"}]}},{name:"Copperajah",region:m.Paldea,info:{moves:["Heavy Slam","Strength","Curse","High Horsepower","Sandstorm","Iron Defense"],specialMoves:["Curse"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Corviknight",region:m.Paldea,info:{moves:["Steel Wing","Drill Peck","Taunt","Body Press","Iron Defense","Hone Claws"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Hone Claws"}]}},{name:"Delibird",region:m.Paldea,info:{moves:["Present","Drill Peck","Ice Punch","Blizzard","Snowscape"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Present"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Present"}]}},{name:"Ditto",region:m.Paldea,info:{moves:["Transform"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:50,action:"Stats & Status Reset"}]}},{name:"Dondozo",region:m.Paldea,info:{moves:["Order Up","Waterfall","Heavy Slam","Tickle","Rain Dance","Stockpile"],specialMoves:["Stockpile"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Stockpile"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Dragalge",region:m.Paldea,info:{moves:["Dragon Pulse","Sludge Bomb","Water Pulse","Toxic","Acid Spray","Draco Meteor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Acid Spray"},{type:a.HP,threshold:75,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Draco Meteor"}]}},{name:"Dragapult",region:m.Paldea,info:{moves:["Shadow Ball","Dragon Darts","Thunderbolt","Hex","Reflect","Light Screen"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Light Screen"}]}},{name:"Dragonite",region:m.Paldea,info:{moves:["Dragon Rush","Aerial Ace","Extreme Speed","Hurricane","Safeguard","Dragon Dance","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Safeguard"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:35,action:"Uses Rain Dance"}]}},{name:"Drifblim",region:m.Paldea,info:{moves:["Hex","Air Slash","Thunder Wave","Shadow Ball","Will-O-Wisp"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Eelektross",region:m.Paldea,info:{moves:["Wild Charge","Flamethrower","Discharge","Crush Claw","Ion Deluge","Thunder Wave","Coil"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Ion Deluge"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:25,action:"Uses Coil"}]}},{name:"Eevee",region:m.Paldea,info:{moves:["Tera Blast","Take Down","Shadow Ball","Tickle","Yawn","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Yawn"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Falinks",region:m.Paldea,info:{moves:["Megahorn","Reversal","Headbutt","Brick Break","No Retreat"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:40,action:"Uses No Retreat"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Flapple",region:m.Paldea,info:{moves:["Grav Apple","Dragon Breath","Dragon Rush","Trailblaze","Grassy Terrain","Iron Defense","Dragon Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Dragon Dance"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Florges",region:m.Paldea,info:{moves:["Petal Dance","Moonblast","Psychic","Safeguard","Grassy Terrain","Calm Mind"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Grassy Terrain"}]}},{name:"Froslass",region:m.Paldea,info:{moves:["Frost Breath","Shadow Ball","Scary Face","Draining Kiss","Snowscape","Disable","Aurora Veil"],specialMoves:["Disable"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:25,action:"Uses Aurora Veil"}]}},{name:"Gallade",region:m.Paldea,info:{moves:["Psycho Cut","Brick Break","Shadow Sneak","Fury Cutter","Hypnosis","Disable","Psychic Terrain"],specialMoves:["Disable","Shadow Sneak"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Psychic Terrain"}]}},{name:"Garchomp",region:m.Paldea,info:{moves:["Earthquake","Dragon Claw","Iron Head","Slash","Sandstorm","Bulldoze"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Uses Bulldoze"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Gardevoir",region:m.Paldea,info:{moves:["Psychic","Moonblast","Disable","Draining Kiss","Misty Terrain","Calm Mind","Psychic Terrain"],specialMoves:["Disable"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Psychic Terrain"}]}},{name:"Garganacl",region:m.Paldea,info:{moves:["Salt Cure","Rock Slide","Hammer Arm","Sandstorm"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Gengar",region:m.Paldea,info:{moves:["Shadow Ball","Sludge Bomb","Confuse Ray","Spite","Hypnosis"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Hypnosis"}]}},{name:"Glalie",region:m.Paldea,info:{moves:["Freeze-Dry","Crunch","Headbutt","Frost Breath","Snowscape","Disable"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:85,action:"Uses Snowscape"}]}},{name:"Glimmora",region:m.Paldea,info:{moves:["Power Gem","Sludge Bomb","Mortal Spin","Ancient Power","Sandstorm","Tera Blast"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Tera Blast"}]}},{name:"Goodra",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Sludge Bomb","Power Whip","Rain Dance","Draco Meteor","Acid Armor"],specialMoves:["Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Acid Armor"}]}},{name:"Gothitelle",region:m.Paldea,info:{moves:["Psychic","Thunder Wave","Thunderbolt","Stored Power","Calm Mind","Light Screen"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Calm Mind"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:25,action:"Uses Light Screen"}]}},{name:"Greedent",region:m.Paldea,info:{moves:["Body Slam","Body Press","Bullet Seed","Tail Whip","Stockpile"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Stockpile"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Stockpile"}]}},{name:"Grimmsnarl",region:m.Paldea,info:{moves:["Spirit Break","False Surrender","Scary Face","Foul Play","Light Screen","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Light Screen"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Gyarados",region:m.Paldea,info:{moves:["Aqua Tail","Twister","Hurricane","Crunch","Scary Face","Taunt","Dragon Dance","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:35,action:"Uses Rain Dance"}]}},{name:"Hariyama",region:m.Paldea,info:{moves:["Reversal","Brick Break","Brine","Heavy Slam","Scary Face","Taunt","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Bulk Up"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Hatterene",region:m.Paldea,info:{moves:["Dazzling Gleam","Psychic","Dark Pulse","Charm","Misty Terrain","Calm Mind","Psychic Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Psychic Terrain"}]}},{name:"Haxorus",region:m.Paldea,info:{moves:["Dragon Claw","Crunch","Giga Impact","First Impression","Harden","Dragon Dance"],specialMoves:["Harden","First Impression"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Harden"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Dragon Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Hippowdon",region:m.Paldea,info:{moves:["Earthquake","Yawn","Rock Slide","Body Slam","Stockpile"],specialMoves:["Stockpile"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Yawn"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Stockpile"}]}},{name:"Honchkrow",region:m.Paldea,info:{moves:["Night Slash","Hurricane","Haze","Wing Attack","Nasty Plot"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Nasty Plot"}]}},{name:"Houndoom",region:m.Paldea,info:{moves:["Flamethrower","Crunch","Taunt","Will-O-Wisp","Sunny Day","Howl"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Howl"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Hydreigon",region:m.Paldea,info:{moves:["Dark Pulse","Dragon Pulse","Scary Face","Dragon Rush","Taunt","Reflect","Nasty Plot"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Uses Reflect"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Indeedee (Male)",formName:"indeedee",region:m.Paldea,info:{moves:["Psychic","Hyper Voice","Shadow Ball","Trick Room","Play Nice","Calm Mind"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Play Nice"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Indeedee (Female)",formName:"indeedee",imageAlt:"-f",region:m.Paldea,info:{moves:["Psychic","Hyper Voice","Shadow Ball","Trick Room","Play Nice","Calm Mind"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Play Nice"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Kingambit",region:m.Paldea,info:{moves:["Iron Head","Night Slash","Torment","Slash","Taunt","Metal Burst"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Torment"},{type:a.Time,threshold:15,action:"Uses Metal Burst"}]}},{name:"Krookodile",region:m.Paldea,info:{moves:["Earthquake","Crunch","Sand Tomb","Counter","Torment","Hone Claws"],specialMoves:["Counter"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Torment"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Hone Claws"}]}},{name:"Luxray",region:m.Paldea,info:{moves:["Crunch","Wild Charge","Discharge","Thunder Wave","Electric Terrain","Leer"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Uses Leer"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Electric Terrain"}]}},{name:"Mabosstiff",region:m.Paldea,info:{moves:["Crunch","Play Rough","Take Down","Swagger","Taunt"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Magnezone",region:m.Paldea,info:{moves:["Thunderbolt","Flash Cannon","Tri Attack","Thunder Wave","Magnet Rise","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Magnet Rise"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Mimikyu",region:m.Paldea,info:{moves:["Play Rough","Shadow Claw","Will-O-Wisp","Shadow Sneak","Light Screen","Taunt"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Light Screen"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Mismagius",region:m.Paldea,info:{moves:["Mystical Fire","Shadow Ball","Confuse Ray","Taunt","Light Screen","Nasty Plot"],specialMoves:["Light Screen"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Light Screen"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Nasty Plot"}]}},{name:"Mudsdale",region:m.Paldea,info:{moves:["High Horsepower","Body Press","Rock Smash","Heavy Slam","Scary Face","Iron Defense"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Scary Face"},{type:a.Time,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"}]}},{name:"Noivern",region:m.Paldea,info:{moves:["Air Slash","Dragon Pulse","Acrobatics","Boomburst","Tailwind"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Tailwind"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Tailwind"},{type:a.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Oranguru",region:m.Paldea,info:{moves:["Facade","Psychic","Stored Power","Yawn","Calm Mind","Light Screen"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Calm Mind"},{type:a.HP,threshold:75,action:"Uses Light Screen"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Orthworm",region:m.Paldea,info:{moves:["Iron Head","Earthquake","Stomping Tantrum","Wrap","Sandstorm","Coil"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Uses Coil"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Palafin",region:m.Paldea,info:{moves:["Liquidation","Acrobatics","Charm","Boomburst","Rain Dance","Bulk Up"],specialMoves:["Boomburst"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Passimian",region:m.Paldea,info:{moves:["Reversal","Rock Smash","Facade","Gunk Shot","Taunt","Trailblaze","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Uses Trailblaze"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Bulk Up"}]}},{name:"Pawmot",region:m.Paldea,info:{moves:["Wild Charge","Close Combat","Nuzzle","Sweet Kiss","Double Shock"],specialMoves:["Sweet Kiss"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:80,action:"Uses Nuzzle"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Double Shock"}]}},{name:"Pincurchin",region:m.Paldea,info:{moves:["Zing Zap","Thunder","Surf","Poison Jab","Rain Dance","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Rain Dance"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Polteageist",region:m.Paldea,info:{moves:["Shadow Ball","Mega Drain","Astonish","Will-O-Wisp","Shell Smash"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Shell Smash"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Raichu",region:m.Paldea,info:{moves:["Discharge","Iron Tail","Charm","Nuzzle","Electric Terrain","Thunder Wave"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Electric Terrain"}]}},{name:"Revavroom",region:m.Paldea,info:{moves:["Spin Out","Taunt","Gunk Shot","Overheat","Scary Face","Shift Gear"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Shift Gear"},{type:a.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Rotom",region:m.Paldea,info:{moves:["Discharge","Uproar","Hex","Thunder Wave","Charge","Eerie Impulse"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Charge"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Eerie Impulse"}]}},{name:"Sableye",region:m.Paldea,info:{moves:["Shadow Claw","Foul Play","Will-O-Wisp","Night Shade","Flatter","Torment"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Flatter"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Torment"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Salamence",region:m.Paldea,info:{moves:["Dragon Rush","Aerial Ace","Hyper Voice","Draco Meteor","Dragon Dance","Focus Energy"],specialMoves:["Dragon Rush"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:25,action:"Uses Focus Energy"}]}},{name:"Scizor",region:m.Paldea,info:{moves:["Iron Head","X-Scissor","Bullet Punch","Slash","Iron Defense","Focus Energy"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Iron Defense"},{type:a.HP,threshold:75,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"}]}},{name:"Scyther",region:m.Paldea,info:{moves:["Aerial Ace","X-Scissor","Slash","Agility","Focus Energy","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Focus Energy"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Swords Dance"}]}},{name:"Slaking",region:m.Paldea,info:{moves:["Facade","Shadow Claw","Play Rough","Swagger","Encore"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Encore"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"}]}},{name:"Slowbro",region:m.Paldea,info:{moves:["Zen Headbutt","Liquidation","Yawn","Water Pulse","Curse"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Curse"},{type:a.HP,threshold:70,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Curse"}]}},{name:"Slowking",region:m.Paldea,info:{moves:["Psychic","Surf","Yawn","Water Pulse","Psychic Terrain","Calm Mind"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Psychic Terrain"},{type:a.HP,threshold:70,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"}]}},{name:"Staraptor",region:m.Paldea,info:{moves:["Close Combat","Brave Bird","Quick Attack","Double-Edge"],specialMoves:["Double-Edge"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Brave Bird"}]}},{name:"Talonflame",region:m.Paldea,info:{moves:["Acrobatics","Flare Blitz","Steel Wing","Heat Wave","Bulk Up"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Bulk Up"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Bulk Up"}]}},{name:"Tatsugiri (Curly)",formName:"tatsugiri",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Chilling Water"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tatsugiri (Droopy)",formName:"tatsugiri",imageAlt:"-d",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Chilling Water"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tatsugiri (Stretchy)",formName:"tatsugiri",imageAlt:"-s",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Chilling Water"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tauros (Fire)",formName:"taurospaldeablaze",imageAlt:"-b",region:m.Paldea,info:{moves:["Flare Blitz","Close Combat","Flamethrower","Headbutt","Work Up","Sunny Day"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Work Up"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Sunny Day"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Tauros (Water)",formName:"taurospaldeaaqua",imageAlt:"-a",region:m.Paldea,info:{moves:["Wave Crash","Close Combat","Surf","Headbutt","Work Up","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Work Up"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Rain Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Tinkaton",region:m.Paldea,info:{moves:["Gigaton Hammer","Play Rough","Brutal Swing","Rock Smash","Misty Terrain","Thunder Wave","Charm"],specialMoves:["Charm","Misty Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Thunder Wave"},{type:a.HP,threshold:25,action:"Uses Charm"}]}},{name:"Toxtricity (Amped)",formName:"toxtricity",region:m.Paldea,info:{moves:["Overdrive","Poison Jab","Nuzzle","Boomburst","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Toxtricity (Low Key)",formName:"toxtricity",imageAlt:"-l",region:m.Paldea,info:{moves:["Overdrive","Poison Jab","Nuzzle","Boomburst","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Tsareena",region:m.Paldea,info:{moves:["High Jump Kick","Power Whip","Stomp","Trop Kick","Reflect","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Grassy Terrain"}]}},{name:"Tyranitar",region:m.Paldea,info:{moves:["Rock Slide","Crunch","Screech","Dark Pulse","Dragon Dance","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Volcarona",region:m.Paldea,info:{moves:["Fire Blast","Bug Buzz","Hurricane","Will-O-Wisp","Sunny Day","Quiver Dance"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Quiver Dance"},{type:a.HP,threshold:20,action:"Uses Quiver Dance"}]}},{name:"Weavile",region:m.Paldea,info:{moves:["Ice Punch","Night Slash","Taunt","Facade","Reflect","Swords Dance"],specialMoves:["Reflect"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Swords Dance"}]}},{name:"Zoroark",region:m.Paldea,info:{moves:["Night Daze","Shadow Claw","Taunt","Hyper Voice","Torment","Nasty Plot"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Torment"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Ambipom",region:m.Kitakami,info:{moves:["Double Hit","Screech","Fury Swipes","Knock Off","Trailblaze","Sand Attack"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:90,action:"Uses Trailblaze"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Sand Attack"},{type:a.HP,threshold:15,action:"Uses Sand Attack"}]}},{name:"Basculegion (Male)",formName:"basculegion",region:m.Kitakami,info:{moves:["Liquidation","Aqua Jet","Shadow Ball","Scary Face","Rain Dance","Wave Crash"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Rain Dance"},{type:a.HP,threshold:10,action:"Uses Wave Crash"}]}},{name:"Basculegion (Female)",formName:"basculegion",imageAlt:"-f",region:m.Kitakami,info:{moves:["Liquidation","Aqua Jet","Shadow Ball","Scary Face","Rain Dance","Hydro Pump"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Rain Dance"},{type:a.HP,threshold:10,action:"Uses Hydro Pump"}]}},{name:"Chandelure",region:m.Kitakami,info:{moves:["Shadow Ball","Heat Wave","Confuse Ray","Flamethrower","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Sunny Day"},{type:a.HP,threshold:80,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Sunny Day"},{type:a.HP,threshold:20,action:"Uses Heat Wave"}]}},{name:"Conkeldurr",region:m.Kitakami,info:{moves:["Hammer Arm","Stone Edge","Superpower","Scary Face","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Dusknoir",region:m.Kitakami,info:{moves:["Fire Punch","Brick Break","Shadow Ball","Shadow Punch","Trick Room","Poltergeist"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Trick Room"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Poltergeist"}]}},{name:"Gliscor",region:m.Kitakami,info:{moves:["Poison Jab","Earthquake","Acrobatics","X-Scissor","Sandstorm","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Swords Dance"},{type:a.Time,threshold:15,action:"Uses Sandstorm"}]}},{name:"Golem",region:m.Kitakami,info:{moves:["Earthquake","Stone Edge","Heavy Slam","Defense Curl"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Defense Curl"},{type:a.Time,threshold:70,action:"Uses Defense Curl"},{type:a.Time,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Earthquake"}]}},{name:"Kommo-o",formName:"kommoo",region:m.Kitakami,info:{moves:["Brick Break","Dragon Claw","Boomburst","Scary Face","Clangorous Soul"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Clangorous Soul"},{type:a.HP,threshold:10,action:"Uses Clangorous Soul"}]}},{name:"Ludicolo",region:m.Kitakami,info:{moves:["Energy Ball","Surf","Fake Out","Trailblaze","Rain Dance"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Rain Dance"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:10,action:"Uses Surf"}]}},{name:"Mamoswine",region:m.Kitakami,info:{moves:["Earthquake","Blizzard","Ice Shard","Ancient Power","Snowscape","Amnesia"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Amnesia"},{type:a.HP,threshold:10,action:"Uses Earthquake"}]}},{name:"Mandibuzz",region:m.Kitakami,info:{moves:["Rock Tomb","Dark Pulse","Toxic","Foul Play","Taunt","Nasty Plot"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Nasty Plot"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Mienshao",region:m.Kitakami,info:{moves:["Aura Sphere","Poison Jab","Taunt","Acrobatics","Bulk Up"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:90,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Milotic",region:m.Kitakami,info:{moves:["Chilling Water","Surf","Dragon Pulse","Attract","Rain Dance","Hydro Pump"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Rain Dance"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.HP,threshold:35,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Ninetales",region:m.Kitakami,info:{moves:["Flamethrower","Extrasensory","Will-O-Wisp","Hypnosis","Nasty Plot"],specialMoves:["Hypnosis"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Politoed",region:m.Kitakami,info:{moves:["Surf","Hyper Voice","Weather Ball","Encore","Rain Dance","Hydro Pump"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Poliwrath",region:m.Kitakami,info:{moves:["Liquidation","Brick Break","Haze","Hydro Pump","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Probopass",region:m.Kitakami,info:{moves:["Body Press","Power Gem","Flash Cannon","Harden","Gravity","Zap Cannon"],specialMoves:["Harden"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Gravity"},{type:a.HP,threshold:75,action:"Uses Zap Cannon"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Zap Cannon"}]}},{name:"Shiftry",region:m.Kitakami,info:{moves:["Fake Out","Sucker Punch","Leaf Blade","Extrasensory","Sunny Day","Leaf Storm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Sunny Day"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:10,action:"Uses Leaf Storm"}]}},{name:"Sinistcha",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:15,action:"Uses Matcha Gotcha"}]}},{name:"Snorlax",region:m.Kitakami,info:{moves:["Body Slam","Heavy Slam","Bite","Mud-Slap","Curse"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Curse"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Trevenant",region:m.Kitakami,info:{moves:["Wood Hammer","Shadow Claw","Will-O-Wisp","Hex","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:20,action:"Uses Will-O-Wisp"}]}},{name:"Victreebel",region:m.Kitakami,info:{moves:["Sludge Bomb","Power Whip","Acid Spray","Trailblaze","Sunny Day"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Sunny Day"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Vikavolt",region:m.Kitakami,info:{moves:["Discharge","Bug Buzz","Solar Beam","Zap Cannon"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Discharge"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Zap Cannon"},{type:a.HP,threshold:20,action:"Uses Zap Cannon"}]}},{name:"Yanmega",region:m.Kitakami,info:{moves:["Bug Buzz","Air Slash","Quick Attack","Hypnosis","Supersonic"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Supersonic"}]}},{name:"Alcremie",region:m.Terarium,info:{moves:["Dazzling Gleam","Psychic","Encore","Psyshock","Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Encore"},{type:a.HP,threshold:50,action:"Uses Acid Armor"},{type:a.HP,threshold:25,action:"Uses Acid Armor"},{type:a.Time,threshold:30,action:"Reduce Tera Orb Charge"}]}},{name:"Duraludon",region:m.Terarium,info:{moves:["Flash Cannon","Dragon Pulse","Breaking Swipe","Metal Sound","Light Screen","Draco Meteor","Iron Defense"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:99,action:"Uses Light Screen"},{type:a.HP,threshold:50,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:30,action:"Uses Iron Defense"}]}},{name:"Electivire",region:m.Terarium,info:{moves:["Discharge","Thunder Punch","Fire Punch","Ice Punch","Thunder Wave","Electric Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Uses Discharge"}]}},{name:"Excadrill",region:m.Terarium,info:{moves:["Drill Run","Iron Head","X-Scissor","Rapid Spin","Sandstorm","Earthquake"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Sandstorm"},{type:a.HP,threshold:15,action:"Uses Earthquake"}]}},{name:"Exeggutor",region:m.Terarium,info:{moves:["Psychic","Energy Ball","Uproar","Bulldoze","Sunny Day","Growth"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:99,action:"Uses Sunny Day"},{type:a.HP,threshold:90,action:"Uses Growth"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"}]}},{name:"Flygon",region:m.Terarium,info:{moves:["Dragon Pulse","Scorching Sands","Earthquake","Flamethrower","Sandstorm","Boomburst"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:50,action:"Uses Boomburst"},{type:a.Time,threshold:30,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Boomburst"}]}},{name:"Golurk",region:m.Terarium,info:{moves:["Shadow Punch","Drain Punch","Heavy Slam","Iron Defense","Gravity","Reflect"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Gravity"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Reflect"}]}},{name:"Hitmonchan",region:m.Terarium,info:{moves:["Mach Punch","Mega Punch","Thunder Punch","Throat Chop","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Bulk Up"},{type:a.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Hitmonlee",region:m.Terarium,info:{moves:["Low Sweep","Mega Kick","Blaze Kick","Scary Face","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Bulk Up"},{type:a.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Hitmontop",region:m.Terarium,info:{moves:["Triple Kick","Sucker Punch","Gyro Ball","Triple Axel","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Bulk Up"},{type:a.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Kingdra",region:m.Terarium,info:{moves:["Dragon Pulse","Hydro Pump","Flash Cannon","Yawn","Rain Dance","Focus Energy"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Focus Energy"}]}},{name:"Lapras",region:m.Terarium,info:{moves:["Ice Beam","Freeze-Dry","Sparkling Aria","Body Press","Sing","Mist","Snowscape"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Sing"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Uses Mist"},{type:a.HP,threshold:30,action:"Uses Snowscape"}]}},{name:"Magmortar",region:m.Terarium,info:{moves:["Flamethrower","Psychic","Focus Blast","Clear Smog","Sunny Day","Will-O-Wisp"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Malamar",region:m.Terarium,info:{moves:["Foul Play","Psycho Cut","Night Slash","Taunt","Topsy-Turvy","Superpower"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Topsy-Turvy"},{type:a.HP,threshold:75,action:"Uses Superpower"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"}]}},{name:"Metagross",region:m.Terarium,info:{moves:["Zen Headbutt","Meteor Mash","Agility","Bullet Punch","Light Screen","Magnet Rise"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Light Screen"},{type:a.HP,threshold:50,action:"Uses Magnet Rise"},{type:a.HP,threshold:25,action:"Stats & Status Reset"},{type:a.Time,threshold:20,action:"Reduce Tera Orb Charge"}]}},{name:"Minior",region:m.Terarium,info:{moves:["Power Gem","Acrobatics","Take Down","Swift","Sandstorm","Shell Smash"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Sandstorm"},{type:a.HP,threshold:49,action:"Player Stats & Status Reset"},{type:a.HP,threshold:49,action:"Uses Shell Smash"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"}]}},{name:"Porygon-Z",formName:"porygonz",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Magnet Rise"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Magnet Rise"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:10,action:"Player Stats & Status Reset"}]}},{name:"Porygon2",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Magnet Rise"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Magnet Rise"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Stats & Status Reset"},{type:a.HP,threshold:10,action:"Stats & Status Reset"}]}},{name:"Reuniclus",region:m.Terarium,info:{moves:["Psychic","Psyshock","Gravity","Shadow Ball","Psychic Terrain","Reflect"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Psychic Terrain"},{type:a.HP,threshold:49,action:"Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Reflect"}]}},{name:"Rhyperior",region:m.Terarium,info:{moves:["Earthquake","Rock Wrecker","Brick Break","Surf","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Sandstorm"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Rock Wrecker"}]}},{name:"Skarmory",region:m.Terarium,info:{moves:["Steel Wing","Drill Peck","X-Scissor","Feint","Iron Defense","Swords Dance","Tailwind"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Iron Defense"},{type:a.HP,threshold:70,action:"Uses Swords Dance"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Tailwind"}]}}],Zt=[{name:"Amoonguss",region:m.Paldea,info:{moves:["Energy Ball","Foul Play","Spore","Sludge Bomb","Grassy Terrain"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Grassy Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Grassy Terrain"}]}},{name:"Annihilape",region:m.Paldea,info:{moves:["Close Combat","Shadow Claw","Assurance","Focus Energy","Bulk Up","Rage Fist"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Bulk Up"},{type:a.Time,threshold:5,action:"Uses Rage Fist"}]}},{name:"Armarouge",region:m.Paldea,info:{moves:["Armor Cannon","Psychic","Night Shade","Will-O-Wisp","Calm Mind","Sunny Day"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Calm Mind"},{type:a.Time,threshold:65,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Avalugg",region:m.Paldea,info:{moves:["Icicle Crash","Heavy Slam","Snowscape","Ice Spinner","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Snowscape"},{type:a.Time,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Baxcalibur",region:m.Paldea,info:{moves:["Icicle Spear","Dragon Rush","Snowscape","Body Press"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Blissey",region:m.Paldea,info:{moves:["Dazzling Gleam","Hyper Voice","Sing","Light Screen","Defense Curl"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:95,action:"Uses Defense Curl"},{type:a.HP,threshold:75,action:"Uses Defense Curl"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Sing"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Bombirdier",region:m.Paldea,info:{moves:["Rock Slide","Acrobatics","Knock Off","Feather Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Feather Dance"}]}},{name:"Breloom",region:m.Paldea,info:{moves:["Bullet Seed","Low Sweep","Spore","Aerial Ace","Grassy Terrain"],specialMoves:["Spore"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Ceruledge",region:m.Paldea,info:{moves:["Bitter Blade","Shadow Claw","Psycho Cut","Will-O-Wisp","Sunny Day"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.Time,threshold:65,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Cetitan",region:m.Paldea,info:{moves:["Ice Spinner","Body Slam","Snowscape","Stomping Tantrum","Yawn"],specialMoves:["Yawn"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Uses Snowscape"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Yawn"}]}},{name:"Clawitzer",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Aura Sphere","Crabhammer","Rain Dance"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Water Pulse"}]}},{name:"Clodsire",region:m.Paldea,info:{moves:["Earthquake","Poison Jab","Megahorn","Yawn"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Earthquake"}]}},{name:"Corviknight",region:m.Paldea,info:{moves:["Iron Head","Drill Peck","Body Press","Hone Claws","Tailwind"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Hone Claws"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Tailwind"}]}},{name:"Cyclizar",region:m.Paldea,info:{moves:["Double-Edge","Dragon Claw","Dragon Pulse","Knock Off","Shift Gear"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Dachsbun",region:m.Paldea,info:{moves:["Play Rough","Double-Edge","Bite","Baby-Doll Eyes"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Play Rough"}]}},{name:"Ditto",region:m.Paldea,info:{moves:["Transform"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Dondozo",region:m.Paldea,info:{moves:["Wave Crash","Order Up","Heavy Slam","Yawn","Rain Dance","Curse"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Curse"}]}},{name:"Dragalge",region:m.Paldea,info:{moves:["Dragon Pulse","Sludge Bomb","Water Pulse","Toxic","Acid Spray","Draco Meteor"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Acid Spray"},{type:a.HP,threshold:75,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Draco Meteor"}]}},{name:"Dragapult",region:m.Paldea,info:{moves:["Shadow Ball","Dragon Pulse","Thunderbolt","Flamethrower","Reflect","Light Screen"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Light Screen"}]}},{name:"Dragonite",region:m.Paldea,info:{moves:["Dragon Rush","Extreme Speed","Dragon Dance","Aqua Tail","Light Screen"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:65,action:"Uses Light Screen"},{type:a.Time,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Dragon Dance"}]}},{name:"Espeon",region:m.Paldea,info:{moves:["Tera Blast","Psychic","Psyshock","Tickle","Psychic Terrain","Calm Mind"],specialMoves:["Tickle"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Psychic Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Psychic Terrain"}]}},{name:"Farigiraf",region:m.Paldea,info:{moves:["Twin Beam","Hyper Voice","Low Kick","Uproar","Agility"],specialMoves:["Uproar"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Agility"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Uproar"}]}},{name:"Flareon",region:m.Paldea,info:{moves:["Tera Blast","Flare Blitz","Lava Plume","Will-O-Wisp","Sunny Day","Curse"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Curse"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Frosmoth",region:m.Paldea,info:{moves:["Blizzard","Bug Buzz","Hurricane","Snowscape"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Gallade",region:m.Paldea,info:{moves:["Psycho Cut","Close Combat","Will-O-Wisp","Aerial Ace","Hypnosis","Disable","Psychic Terrain"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Psychic Terrain"}]}},{name:"Garchomp",region:m.Paldea,info:{moves:["Outrage","Earthquake","Flamethrower","Rock Slide","Swords Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Swords Dance"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Gardevoir",region:m.Paldea,info:{moves:["Moonblast","Psychic","Calm Mind","Thunder Wave","Misty Terrain","Psychic Terrain"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Psychic Terrain"}]}},{name:"Garganacl",region:m.Paldea,info:{moves:["Stone Edge","Heavy Slam","Salt Cure","Hammer Arm","Sandstorm","Rock Slide"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sandstorm"},{type:a.Time,threshold:60,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Gengar",region:m.Paldea,info:{moves:["Shadow Ball","Sludge Bomb","Dazzling Gleam","Will-O-Wisp","Hypnosis"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Hypnosis"}]}},{name:"Glaceon",region:m.Paldea,info:{moves:["Tera Blast","Ice Beam","Blizzard","Charm","Snowscape","Calm Mind"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Snowscape"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Snowscape"}]}},{name:"Glimmora",region:m.Paldea,info:{moves:["Power Gem","Sludge Wave","Hyper Beam","Rock Polish","Sandstorm"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sandstorm"},{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:55,action:"Reduce Tera Orb Charge"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"}]}},{name:"Goodra",region:m.Paldea,info:{moves:["Dragon Pulse","Surf","Sludge Bomb","Power Whip","Rain Dance"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Rain Dance"}]}},{name:"Grafaiai",region:m.Paldea,info:{moves:["Knock Off","Gunk Shot","Take Down","Flatter","Toxic"],specialMoves:["Toxic"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Toxic"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Gunk Shot"}]}},{name:"Gyarados",region:m.Paldea,info:{moves:["Aqua Tail","Crunch","Hurricane","Ice Fang","Taunt","Dragon Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Taunt"},{type:a.HP,threshold:20,action:"Uses Dragon Dance"}]}},{name:"Haxorus",region:m.Paldea,info:{moves:["Outrage","Crunch","Giga Impact","First Impression","Dragon Dance"],specialMoves:["First Impression"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Dragon Dance"}]}},{name:"Heracross",region:m.Paldea,info:{moves:["Megahorn","Close Combat","Thrash","Leer","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:75,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Hippowdon",region:m.Paldea,info:{moves:["Earthquake","Ice Fang","Yawn","Rock Slide"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Yawn"},{type:a.HP,threshold:60,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Yawn"}]}},{name:"Hydreigon",region:m.Paldea,info:{moves:["Dark Pulse","Dragon Pulse","Crunch","Taunt","Work Up","Nasty Plot"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:85,action:"Uses Taunt"},{type:a.Time,threshold:75,action:"Uses Work Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Stats & Status Reset"},{type:a.Time,threshold:20,action:"Uses Nasty Plot"}]}},{name:"Jolteon",region:m.Paldea,info:{moves:["Tera Blast","Thunderbolt","Shadow Ball","Thunder Wave","Electric Terrain","Calm Mind"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Electric Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Kilowattrel",region:m.Paldea,info:{moves:["Hurricane","Thunder","Uproar","Scary Face","Charge","Rain Dance"],specialMoves:["Charge","Rain Dance"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Charge"},{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Kingambit",region:m.Paldea,info:{moves:["Iron Head","Night Slash","Kowtow Cleave","Thunder Wave","Swords Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.Time,threshold:65,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Klawf",region:m.Paldea,info:{moves:["Stone Edge","Rock Smash","X-Scissor","Sandstorm","Knock Off","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:49,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Leafeon",region:m.Paldea,info:{moves:["Tera Blast","Leaf Blade","Double Kick","Charm","Sunny Day","Swords Dance"],specialMoves:["Double Kick"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Swords Dance"},{type:a.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Lycanroc",imageAlt:"-d",region:m.Paldea,info:{moves:["Accelerock","Rock Slide","Crunch","Taunt","Sandstorm"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Mabosstiff",region:m.Paldea,info:{moves:["Crunch","Reversal","Outrage","Take Down","Taunt"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Magnezone",region:m.Paldea,info:{moves:["Thunder","Flash Cannon","Tri Attack","Thunder Wave","Rain Dance","Iron Defense","Electric Terrain"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:80,action:"Uses Rain Dance"},{type:a.Time,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Thunder Wave"},{type:a.Time,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Maushold",imageAlt:"-f",region:m.Paldea,info:{moves:["Play Rough","Take Down","Low Kick","Charm","Tidy Up"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Uses Charm"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Tidy Up"}]}},{name:"Mimikyu",region:m.Paldea,info:{moves:["Play Rough","Shadow Claw","Shadow Sneak","Wood Hammer","Misty Terrain","Swords Dance"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Misty Terrain"},{type:a.Time,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Orthworm",region:m.Paldea,info:{moves:["Iron Head","Earthquake","Smack Down","Sandstorm","Coil"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Uses Coil"},{type:a.HP,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Sandstorm"}]}},{name:"Pawmot",region:m.Paldea,info:{moves:["Wild Charge","Close Combat","Double Shock","Nuzzle","Electric Terrain"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Electric Terrain"}]}},{name:"Pelipper",region:m.Paldea,info:{moves:["Hurricane","Hydro Pump","Mist","Supersonic","Rain Dance","Agility"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Agility"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Pincurchin",region:m.Paldea,info:{moves:["Zing Zap","Thunder","Surf","Poison Jab","Thunder Wave","Electric Terrain"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:90,action:"Uses Thunder Wave"},{type:a.Time,threshold:65,action:"Uses Electric Terrain"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Revavroom",region:m.Paldea,info:{moves:["Gunk Shot","Overheat","Iron Head","Taunt","Scary Face","Shift Gear"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Shift Gear"},{type:a.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Salamence",region:m.Paldea,info:{moves:["Outrage","Dual Wingbeat","Flamethrower","Tera Blast","Dragon Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Dragon Dance"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Scizor",region:m.Paldea,info:{moves:["X-Scissor","Bullet Punch","Close Combat","Iron Head","Iron Defense","Focus Energy"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Uses Iron Defense"},{type:a.HP,threshold:75,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Slowking",region:m.Paldea,info:{moves:["Surf","Psyshock","Trick Room","Flamethrower","Light Screen","Rain Dance","Calm Mind"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:70,action:"Uses Light Screen"},{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Trick Room"}]}},{name:"Staraptor",region:m.Paldea,info:{moves:["Close Combat","Brave Bird","Double-Edge","Feather Dance"],specialMoves:["Double-Edge","Feather Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Brave Bird"}]}},{name:"Sylveon",region:m.Paldea,info:{moves:["Tera Blast","Hyper Voice","Moonblast","Yawn","Misty Terrain","Calm Mind"],specialMoves:["Yawn"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Misty Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Misty Terrain"}]}},{name:"Talonflame",region:m.Paldea,info:{moves:["Brave Bird","Flare Blitz","Flamethrower","Tera Blast","Sunny Day","Swords Dance"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Tauros",formName:"taurospaldeacombat",imageAlt:"-p",region:m.Paldea,info:{moves:["Close Combat","Thrash","Zen Headbutt","Raging Bull","Bulk Up","Screech"],specialMoves:["Screech"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Screech"}]}},{name:"Tauros (Fire)",formName:"taurospaldeablaze",imageAlt:"-b",region:m.Paldea,info:{moves:["Flare Blitz","Close Combat","Flamethrower","Headbutt","Sunny Day","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Tauros (Water)",formName:"taurospaldeaaqua",imageAlt:"-a",region:m.Paldea,info:{moves:["Wave Crash","Close Combat","Surf","Headbutt","Rain Dance","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Tinkaton",region:m.Paldea,info:{moves:["Gigaton Hammer","Play Rough","Knock Off","Thunder Wave","Misty Terrain","Sweet Kiss"],specialMoves:["Misty Terrain"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Sweet Kiss"},{type:a.HP,threshold:15,action:"Uses Sweet Kiss"}]}},{name:"Toedscruel",region:m.Paldea,info:{moves:["Energy Ball","Earth Power","Spore","Hex","Grassy Terrain"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Grassy Terrain"},{type:a.Time,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Spore"}]}},{name:"Torkoal",region:m.Paldea,info:{moves:["Lava Plume","Yawn","Clear Smog","Body Slam","Sunny Day","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Yawn"},{type:a.HP,threshold:20,action:"Uses Iron Defense"}]}},{name:"Toxapex",region:m.Paldea,info:{moves:["Water Pulse","Liquidation","Poison Jab","Pin Missile","Chilling Water","Toxic"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:95,action:"Uses Chilling Water"},{type:a.Time,threshold:75,action:"Uses Toxic"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Chilling Water"}]}},{name:"Tyranitar",region:m.Paldea,info:{moves:["Stone Edge","Crunch","Screech","Rock Blast","Iron Defense"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Crunch"},{type:a.HP,threshold:20,action:"Uses Iron Defense"}]}},{name:"Umbreon",region:m.Paldea,info:{moves:["Tera Blast","Dark Pulse","Foul Play","Tickle","Calm Mind","Curse"],specialMoves:["Curse","Tickle"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Calm Mind"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Curse"},{type:a.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Vaporeon",region:m.Paldea,info:{moves:["Tera Blast","Surf","Hyper Voice","Yawn","Rain Dance","Calm Mind"],specialMoves:["Yawn"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Volcarona",region:m.Paldea,info:{moves:["Bug Buzz","Flamethrower","Hurricane","Tailwind","Amnesia","Sunny Day","Light Screen","Quiver Dance"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:85,action:"Uses Amnesia"},{type:a.HP,threshold:75,action:"Uses Sunny Day"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Light Screen"},{type:a.Time,threshold:20,action:"Uses Quiver Dance"}]}},{name:"Ambipom",region:m.Kitakami,info:{moves:["Double Hit","Ice Punch","Fire Punch","Thunder Punch","Screech"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:89,action:"Uses Screech"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Double Hit"}]}},{name:"Basculegion (Male)",formName:"basculegion",region:m.Kitakami,info:{moves:["Wave Crash","Aqua Jet","Crunch","Scary Face","Icy Wind","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Icy Wind"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Basculegion (Female)",formName:"basculegion",imageAlt:"-f",region:m.Kitakami,info:{moves:["Surf","Aqua Jet","Shadow Ball","Scary Face","Icy Wind","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Icy Wind"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Chandelure",region:m.Kitakami,info:{moves:["Flamethrower","Shadow Ball","Will-O-Wisp","Poltergeist","Heat Wave","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Heat Wave"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Sunny Day"},{type:a.HP,threshold:35,action:"Stats & Status Reset"}]}},{name:"Clefable",region:m.Kitakami,info:{moves:["Moonblast","Psychic","Meteor Mash","Encore","Dazzling Gleam","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Encore"},{type:a.HP,threshold:40,action:"Uses Dazzling Gleam"},{type:a.HP,threshold:41,action:"Uses Dazzling Gleam"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Conkeldurr",region:m.Kitakami,info:{moves:["Rock Slide","Close Combat","Mach Punch","Slam","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:89,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:49,action:"Uses Bulk Up"},{type:a.Time,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Crawdaunt",region:m.Kitakami,info:{moves:["Aqua Jet","Crabhammer","Crunch","Giga Impact","Leer","Swords Dance"],specialMoves:["Aqua Jet"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Uses Leer"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Dusknoir",region:m.Kitakami,info:{moves:["Poltergeist","Dark Pulse","Will-O-Wisp","Ice Punch","Gravity","Spite"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Gravity"},{type:a.HP,threshold:70,action:"Uses Spite"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Spite"},{type:a.HP,threshold:10,action:"Stats & Status Reset"}]}},{name:"Gliscor",region:m.Kitakami,info:{moves:["Acrobatics","Knock Off","Quick Attack","Earthquake","Sandstorm","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Swords Dance"},{type:a.Time,threshold:15,action:"Uses Sandstorm"},{type:a.Time,threshold:5,action:"Uses Earthquake"}]}},{name:"Golem",region:m.Kitakami,info:{moves:["Earthquake","Rock Slide","Flail","Smack Down","Stone Edge","Iron Defense"],specialMoves:["Flail"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:85,action:"Uses Stone Edge"},{type:a.Time,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:29,action:"Uses Iron Defense"}]}},{name:"Kommo-o",formName:"kommoo",region:m.Kitakami,info:{moves:["Focus Blast","Dragon Claw","Iron Head","Scary Face","Clangorous Soul","Reversal"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Clangorous Soul"},{type:a.HP,threshold:30,action:"Uses Clangorous Soul"},{type:a.Time,threshold:10,action:"Uses Reversal"}]}},{name:"Leavanny",region:m.Kitakami,info:{moves:["Leaf Blade","X-Scissor","Grassy Glide","Sticky Web","Grassy Terrain","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Grassy Terrain"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Ludicolo",region:m.Kitakami,info:{moves:["Energy Ball","Hydro Pump","Fake Out","Chilling Water","Rain Dance","Teeter Dance"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Uses Chilling Water"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.Time,threshold:20,action:"Uses Teeter Dance"}]}},{name:"Mamoswine",region:m.Kitakami,info:{moves:["Icicle Crash","Ice Shard","Bulldoze","Freeze-Dry","Snowscape","Amnesia","Earthquake"],specialMoves:["Freeze-Dry"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Amnesia"},{type:a.HP,threshold:10,action:"Uses Earthquake"},{type:a.Time,threshold:45,action:"Reduce Tera Orb Charge"}]}},{name:"Mandibuzz",region:m.Kitakami,info:{moves:["Dual Wingbeat","Dark Pulse","Toxic","Bone Rush","Snarl"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Player Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Snarl"},{type:a.HP,threshold:75,action:"Uses Snarl"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Snarl"}]}},{name:"Mienshao",region:m.Kitakami,info:{moves:["Aerial Ace","Brick Break","Aura Sphere","Reversal","Calm Mind"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:90,action:"Uses Calm Mind"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.Time,threshold:20,action:"Uses Aura Sphere"}]}},{name:"Milotic",region:m.Kitakami,info:{moves:["Dragon Pulse","Water Pulse","Safeguard","Aqua Tail","Coil","Hypnosis","Rain Dance"],specialMoves:["Hypnosis"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:99,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Coil"},{type:a.HP,threshold:70,action:"Uses Hypnosis"},{type:a.Time,threshold:60,action:"Uses Rain Dance"},{type:a.Time,threshold:10,action:"Uses Hypnosis"}]}},{name:"Morpeko",region:m.Kitakami,info:{moves:["Aura Wheel","Lash Out","Thunder Wave","Torment","Taunt","Electric Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Ninetales",region:m.Kitakami,info:{moves:["Flamethrower","Extrasensory","Will-O-Wisp","Burning Jealousy","Heat Wave","Sunny Day"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Heat Wave"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Sunny Day"},{type:a.Time,threshold:10,action:"Uses Heat Wave"}]}},{name:"Politoed",region:m.Kitakami,info:{moves:["Chilling Water","Surf","Ice Beam","Encore","Amnesia"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Uses Chilling Water"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:29,action:"Uses Amnesia"}]}},{name:"Poliwrath",region:m.Kitakami,info:{moves:["Brick Break","Liquidation","Focus Blast","Haze","Rain Dance","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Rain Dance"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Quagsire",region:m.Kitakami,info:{moves:["Earthquake","Liquidation","Yawn","Toxic","Curse","Rain Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Uses Curse"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Rain Dance"}]}},{name:"Shiftry",region:m.Kitakami,info:{moves:["Leaf Blade","Sucker Punch","Fake Out","Extrasensory","Sunny Day","Trailblaze","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sunny Day"},{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:70,action:"Uses Trailblaze"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Sinistcha",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:15,action:"Uses Matcha Gotcha"},{type:a.Time,threshold:10,action:"Uses Matcha Gotcha"}]}},{name:"Sinistcha (Masterpiece)",formName:"sinistchamasterpiece",imageAlt:"-m",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:15,action:"Uses Matcha Gotcha"},{type:a.Time,threshold:10,action:"Uses Matcha Gotcha"}]}},{name:"Snorlax",region:m.Kitakami,info:{moves:["Facade","Crunch","Yawn","Heavy Slam"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Stats & Status Reset"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Stats & Status Reset"}]}},{name:"Trevenant",region:m.Kitakami,info:{moves:["Wood Hammer","Shadow Claw","Forest's Curse","Will-O-Wisp","Grassy Terrain","Disable"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Wood Hammer"}]}},{name:"Yanmega",region:m.Kitakami,info:{moves:["Bug Buzz","Air Slash","Quick Attack","Ancient Power"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Ancient Power"},{type:a.HP,threshold:85,action:"Uses Ancient Power"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Ancient Power"}]}},{name:"Alcremie",region:m.Terarium,info:{moves:["Dazzling Gleam","Psychic","Encore","Psyshock","Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Encore"},{type:a.HP,threshold:50,action:"Uses Acid Armor"},{type:a.HP,threshold:25,action:"Uses Acid Armor"},{type:a.Time,threshold:30,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Dugtrio",formName:"dugtrioalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Bulldoze","Iron Head","Ancient Power","Metal Claw","Sandstorm","Earthquake"],specialMoves:["Ancient Power"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Sandstorm"},{type:a.HP,threshold:25,action:"Uses Earthquake"}]}},{name:"Duraludon",region:m.Terarium,info:{moves:["Flash Cannon","Dragon Pulse","Breaking Swipe","Metal Claw","Stealth Rock","Light Screen","Reflect"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Stealth Rock"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Light Screen"},{type:a.HP,threshold:35,action:"Uses Reflect"}]}},{name:"Electivire",region:m.Terarium,info:{moves:["Discharge","Thunder Punch","Earthquake","Brick Break","Electric Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Electric Terrain"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Excadrill",region:m.Terarium,info:{moves:["Iron Head","Earthquake","Drill Run","Slash","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Sandstorm"},{type:a.Time,threshold:25,action:"Uses Sandstorm"}]}},{name:"Exeggutor",formName:"exeggutoralola",imageAlt:"-a",region:m.Terarium,info:{moves:["Dragon Hammer","Extrasensory","Seed Bomb","Hypnosis","Trick Room"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:80,action:"Player Stats & Status Reset"},{type:a.HP,threshold:65,action:"Uses Hypnosis"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Trick Room"},{type:a.HP,threshold:33,action:"Player Stats & Status Reset"}]}},{name:"Flygon",region:m.Terarium,info:{moves:["Earthquake","Dragon Claw","Quick Attack","Breaking Swipe","Dragon Dance","Draco Meteor"],specialMoves:["Quick Attack"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:79,action:"Uses Dragon Dance"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:5,action:"Uses Draco Meteor"}]}},{name:"Golem",formName:"golemalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Heavy Slam","Body Slam","Rock Slide","Discharge","Giga Impact"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Rock Slide"},{type:a.HP,threshold:25,action:"Uses Giga Impact"}]}},{name:"Golurk",region:m.Terarium,info:{moves:["Dynamic Punch","Shadow Punch","Heavy Slam","Ice Punch","Curse"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Curse"},{type:a.HP,threshold:35,action:"Uses Curse"}]}},{name:"Kingdra",region:m.Terarium,info:{moves:["Draco Meteor","Dragon Pulse","Water Pulse","Flash Cannon","Focus Energy","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Focus Energy"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Rain Dance"},{type:a.HP,threshold:5,action:"Uses Draco Meteor"}]}},{name:"Kleavor",region:m.Terarium,info:{moves:["X-Scissor","Close Combat","Air Cutter","Night Slash","Stone Axe","Swords Dance"],specialMoves:["Night Slash"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Stone Axe"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Swords Dance"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Lapras",region:m.Terarium,info:{moves:["Blizzard","Hydro Pump","Body Slam","Sing","Snowscape","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Magmortar",region:m.Terarium,info:{moves:["Lava Plume","Psychic","Scorching Sands","Taunt","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:95,action:"Uses Sunny Day"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Lava Plume"}]}},{name:"Malamar",region:m.Terarium,info:{moves:["Psycho Cut","Night Slash","Foul Play","Pluck","Taunt","Topsy-Turvy"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Topsy-Turvy"},{type:a.HP,threshold:25,action:"Uses Topsy-Turvy"}]}},{name:"Metagross",region:m.Terarium,info:{moves:["Zen Headbutt","Iron Head","Heavy Slam","Aerial Ace","Agility","Hone Claws"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Agility"},{type:a.HP,threshold:80,action:"Uses Iron Head"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Hone Claws"},{type:a.HP,threshold:20,action:"Uses Hone Claws"}]}},{name:"Muk",formName:"mukalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Crunch","Hex","Gunk Shot","Flamethrower","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Ninetales",formName:"ninetalesalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Moonblast","Blizzard","Ice Shard","Dazzling Gleam","Aurora Veil","Calm Mind","Snowscape"],specialMoves:["Moonblast"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Aurora Veil"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:24,action:"Uses Snowscape"}]}},{name:"Overqwil",region:m.Terarium,info:{moves:["Barb Barrage","Crunch","Pin Missile","Fell Stinger","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Toxic"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Uses Barb Barrage"}]}},{name:"Porygon-Z",formName:"porygonz",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Thunder Wave","Trick Room"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Trick Room"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"}]}},{name:"Porygon2",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Thunder Wave","Trick Room"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Trick Room"},{type:a.HP,threshold:45,action:"Stats & Status Reset"}]}},{name:"Reuniclus",region:m.Terarium,info:{moves:["Psychic","Fire Punch","Swift","Rock Tomb","Reflect","Light Screen","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Reflect"},{type:a.HP,threshold:80,action:"Uses Light Screen"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"}]}},{name:"Rhyperior",region:m.Terarium,info:{moves:["Earthquake","Rock Wrecker","Megahorn","Rock Polish","Sandstorm","Iron Defense"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:50,action:"Uses Iron Defense"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Rock Wrecker"},{type:a.HP,threshold:5,action:"Uses Earthquake"}]}},{name:"Sandslash",formName:"sandslashalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Ice Spinner","Iron Head","Earthquake","Triple Axel","Snowscape","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:80,action:"Uses Swords Dance"},{type:a.HP,threshold:35,action:"Player Stats & Status Reset"}]}},{name:"Skarmory",region:m.Terarium,info:{moves:["Drill Peck","Steel Wing","Night Slash","Slash","Taunt","Iron Defense"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:45,action:"Uses Iron Defense"},{type:a.HP,threshold:44,action:"Player Stats & Status Reset"}]}},{name:"Slowbro",formName:"slowbrogalar",imageAlt:"-g",region:m.Terarium,info:{moves:["Shell Side Arm","Zen Headbutt","Chilling Water","Rock Blast","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Slowking",formName:"slowkinggalar",imageAlt:"-g",region:m.Terarium,info:{moves:["Eerie Spell","Power Gem","Yawn","Acid Spray","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Whimsicott",region:m.Terarium,info:{moves:["Energy Ball","Moonblast","Encore","Hurricane","Taunt"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Stats & Status Reset"}]}}];var gv=(()=>{class t{constructor(n){this.stateService=n}ngOnInit(){Object.keys(m).map(r=>{let o=document.createElement("option");o.value=r,o.text=m[r],o.text=="Paldea"&&(o.selected=!0,this.stateService.changeRegionList(o.value)),document.getElementById("regionList").add(o)})}valueChanged(){let n=document.getElementById("regionList"),r=n.selectedIndex,o=n.options[r];this.stateService.changeRegionList(o.value)}static{this.\u0275fac=function(r){return new(r||t)(q(se))}}static{this.\u0275cmp=ee({type:t,selectors:[["app-region"]],decls:3,vars:0,consts:[["id","regionList",3,"change"],["value",""]],template:function(r,o){r&1&&(ke(0,"select",0),St("change",function(){return o.valueChanged()}),ke(1,"option",1),ge(2,"-- Region --"),We()())},encapsulation:2})}}return t})();function ko(t){return t.toLowerCase().replace(/\w/,e=>e.toUpperCase())}function vn(t){(t?[t]:["pokemonTypes","pokemonImageNormal","pokemonImageShiny","pokemonAbility","pokemonStatsWrapper","pokemonActions","pokemonMoves","pokemonHerbs","pokemonTypeAdvantages","pokemonTeraWeaknesses","pokemonTeraAdvantages"]).forEach(n=>{let r=document.getElementById(n);r&&(r.innerHTML="")})}function fe(t,e){t.innerHTML+=e}function fs(t){return`<div class="typeMatchupText ${t.name}">${ko(t.name)} - ${t.multiplier}x</div>`}function df(t,e,n){return String(t).padStart(e,n)}function No(t,e){if(!!!t)throw new Error(e)}function yv(t){return typeof t=="object"&&t!==null}function vv(t,e){if(!!!t)throw new Error(e??"Unexpected invariant triggered.")}var B0=/\r\n|[\n\r]/g;function xo(t,e){let n=0,r=1;for(let o of t.body.matchAll(B0)){if(typeof o.index=="number"||vv(!1),o.index>=e)break;n=o.index+o[0].length,r+=1}return{line:r,column:e+1-n}}function ff(t){return Oc(t.source,xo(t.source,t.start))}function Oc(t,e){let n=t.locationOffset.column-1,r="".padStart(n)+t.body,o=e.line-1,i=t.locationOffset.line-1,s=e.line+i,c=e.line===1?n:0,l=e.column+c,u=`${t.name}:${s}:${l}
`,d=r.split(/\r\n|[\n\r]/g),f=d[o];if(f.length>120){let h=Math.floor(l/80),p=l%80,g=[];for(let S=0;S<f.length;S+=80)g.push(f.slice(S,S+80));return u+Sv([[`${s} |`,g[0]],...g.slice(1,h+1).map(S=>["|",S]),["|","^".padStart(p)],["|",g[h+1]]])}return u+Sv([[`${s-1} |`,d[o-1]],[`${s} |`,f],["|","^".padStart(l)],[`${s+1} |`,d[o+1]]])}function Sv(t){let e=t.filter(([r,o])=>o!==void 0),n=Math.max(...e.map(([r])=>r.length));return e.map(([r,o])=>r.padStart(n)+(o?" "+o:"")).join(`
`)}function V0(t){let e=t[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:t[1],positions:t[2],path:t[3],originalError:t[4],extensions:t[5]}:e}var Fc=class t extends Error{constructor(e,...n){var r,o,i;let{nodes:s,source:c,positions:l,path:u,originalError:d,extensions:f}=V0(n);super(e),this.name="GraphQLError",this.path=u??void 0,this.originalError=d??void 0,this.nodes=Dv(Array.isArray(s)?s:s?[s]:void 0);let h=Dv((r=this.nodes)===null||r===void 0?void 0:r.map(g=>g.loc).filter(g=>g!=null));this.source=c??(h==null||(o=h[0])===null||o===void 0?void 0:o.source),this.positions=l??h?.map(g=>g.start),this.locations=l&&c?l.map(g=>xo(c,g)):h?.map(g=>xo(g.source,g.start));let p=yv(d?.extensions)?d?.extensions:void 0;this.extensions=(i=f??p)!==null&&i!==void 0?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),d!=null&&d.stack?Object.defineProperty(this,"stack",{value:d.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,t):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(let n of this.nodes)n.loc&&(e+=`

`+ff(n.loc));else if(this.source&&this.locations)for(let n of this.locations)e+=`

`+Oc(this.source,n);return e}toJSON(){let e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}};function Dv(t){return t===void 0||t.length===0?void 0:t}function Ie(t,e,n){return new Fc(`Syntax Error: ${n}`,{source:t,positions:[e]})}var Ao=class{constructor(e,n,r){this.start=e.start,this.end=n.end,this.startToken=e,this.endToken=n,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}},Mr=class{constructor(e,n,r,o,i,s){this.kind=e,this.start=n,this.end=r,this.line=o,this.column=i,this.value=s,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}},hf={Name:[],Document:["definitions"],OperationDefinition:["description","name","variableDefinitions","directives","selectionSet"],VariableDefinition:["description","variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["description","name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","directives","locations"],SchemaExtension:["directives","operationTypes"],DirectiveExtension:["name","directives"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],TypeCoordinate:["name"],MemberCoordinate:["name","memberName"],ArgumentCoordinate:["name","fieldName","argumentName"],DirectiveCoordinate:["name"],DirectiveArgumentCoordinate:["name","argumentName"]},$0=new Set(Object.keys(hf));function pf(t){let e=t?.kind;return typeof e=="string"&&$0.has(e)}var qe=(function(t){return t.QUERY="query",t.MUTATION="mutation",t.SUBSCRIPTION="subscription",t})(qe||{});var Lc=(function(t){return t.QUERY="QUERY",t.MUTATION="MUTATION",t.SUBSCRIPTION="SUBSCRIPTION",t.FIELD="FIELD",t.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",t.FRAGMENT_SPREAD="FRAGMENT_SPREAD",t.INLINE_FRAGMENT="INLINE_FRAGMENT",t.VARIABLE_DEFINITION="VARIABLE_DEFINITION",t.SCHEMA="SCHEMA",t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.FIELD_DEFINITION="FIELD_DEFINITION",t.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.ENUM_VALUE="ENUM_VALUE",t.INPUT_OBJECT="INPUT_OBJECT",t.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION",t.DIRECTIVE_DEFINITION="DIRECTIVE_DEFINITION",t})(Lc||{});var E=(function(t){return t.NAME="Name",t.DOCUMENT="Document",t.OPERATION_DEFINITION="OperationDefinition",t.VARIABLE_DEFINITION="VariableDefinition",t.SELECTION_SET="SelectionSet",t.FIELD="Field",t.ARGUMENT="Argument",t.FRAGMENT_SPREAD="FragmentSpread",t.INLINE_FRAGMENT="InlineFragment",t.FRAGMENT_DEFINITION="FragmentDefinition",t.VARIABLE="Variable",t.INT="IntValue",t.FLOAT="FloatValue",t.STRING="StringValue",t.BOOLEAN="BooleanValue",t.NULL="NullValue",t.ENUM="EnumValue",t.LIST="ListValue",t.OBJECT="ObjectValue",t.OBJECT_FIELD="ObjectField",t.DIRECTIVE="Directive",t.NAMED_TYPE="NamedType",t.LIST_TYPE="ListType",t.NON_NULL_TYPE="NonNullType",t.SCHEMA_DEFINITION="SchemaDefinition",t.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",t.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",t.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",t.FIELD_DEFINITION="FieldDefinition",t.INPUT_VALUE_DEFINITION="InputValueDefinition",t.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",t.UNION_TYPE_DEFINITION="UnionTypeDefinition",t.ENUM_TYPE_DEFINITION="EnumTypeDefinition",t.ENUM_VALUE_DEFINITION="EnumValueDefinition",t.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",t.DIRECTIVE_DEFINITION="DirectiveDefinition",t.SCHEMA_EXTENSION="SchemaExtension",t.DIRECTIVE_EXTENSION="DirectiveExtension",t.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",t.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",t.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",t.UNION_TYPE_EXTENSION="UnionTypeExtension",t.ENUM_TYPE_EXTENSION="EnumTypeExtension",t.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",t.TYPE_COORDINATE="TypeCoordinate",t.MEMBER_COORDINATE="MemberCoordinate",t.ARGUMENT_COORDINATE="ArgumentCoordinate",t.DIRECTIVE_COORDINATE="DirectiveCoordinate",t.DIRECTIVE_ARGUMENT_COORDINATE="DirectiveArgumentCoordinate",t})(E||{});function Hc(t){return t===9||t===32}function Oo(t){return t>=48&&t<=57}function bv(t){return t>=97&&t<=122||t>=65&&t<=90}function mf(t){return bv(t)||t===95}function Ev(t){return bv(t)||Oo(t)||t===95}function Tv(t){var e;let n=Number.MAX_SAFE_INTEGER,r=null,o=-1;for(let s=0;s<t.length;++s){var i;let c=t[s],l=z0(c);l!==c.length&&(r=(i=r)!==null&&i!==void 0?i:s,o=s,s!==0&&l<n&&(n=l))}return t.map((s,c)=>c===0?s:s.slice(n)).slice((e=r)!==null&&e!==void 0?e:0,o+1)}function z0(t){let e=0;for(;e<t.length&&Hc(t.charCodeAt(e));)++e;return e}function wv(t,e){let n=t.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),o=r.length===1,i=r.length>1&&r.slice(1).every(p=>p.length===0||Hc(p.charCodeAt(0))),s=n.endsWith('\\"""'),c=t.endsWith('"')&&!s,l=t.endsWith("\\"),u=c||l,d=!(e!=null&&e.minimize)&&(!o||t.length>70||u||i||s),f="",h=o&&Hc(t.charCodeAt(0));return(d&&!h||i)&&(f+=`
`),f+=n,(d||u)&&(f+=`
`),'"""'+f+'"""'}var b=(function(t){return t.SOF="<SOF>",t.EOF="<EOF>",t.BANG="!",t.DOLLAR="$",t.AMP="&",t.PAREN_L="(",t.PAREN_R=")",t.DOT=".",t.SPREAD="...",t.COLON=":",t.EQUALS="=",t.AT="@",t.BRACKET_L="[",t.BRACKET_R="]",t.BRACE_L="{",t.PIPE="|",t.BRACE_R="}",t.NAME="Name",t.INT="Int",t.FLOAT="Float",t.STRING="String",t.BLOCK_STRING="BlockString",t.COMMENT="Comment",t})(b||{});var ps=class{constructor(e){let n=new Mr(b.SOF,0,0,0,0);this.source=e,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==b.EOF)do if(e.next)e=e.next;else{let n=W0(this,e.end);e.next=n,n.prev=e,e=n}while(e.kind===b.COMMENT);return e}};function Iv(t){return t===b.BANG||t===b.DOLLAR||t===b.AMP||t===b.PAREN_L||t===b.PAREN_R||t===b.DOT||t===b.SPREAD||t===b.COLON||t===b.EQUALS||t===b.AT||t===b.BRACKET_L||t===b.BRACKET_R||t===b.BRACE_L||t===b.PIPE||t===b.BRACE_R}function Fo(t){return t>=0&&t<=55295||t>=57344&&t<=1114111}function Uc(t,e){return Rv(t.charCodeAt(e))&&Pv(t.charCodeAt(e+1))}function Rv(t){return t>=55296&&t<=56319}function Pv(t){return t>=56320&&t<=57343}function _r(t,e){let n=t.source.body.codePointAt(e);if(n===void 0)return b.EOF;if(n>=32&&n<=126){let r=String.fromCodePoint(n);return r==='"'?`'"'`:`"${r}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function Ne(t,e,n,r,o){let i=t.line,s=1+n-t.lineStart;return new Mr(e,n,r,i,s,o)}function W0(t,e){let n=t.source.body,r=n.length,o=e;for(;o<r;){let i=n.charCodeAt(o);switch(i){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++t.line,t.lineStart=o;continue;case 13:n.charCodeAt(o+1)===10?o+=2:++o,++t.line,t.lineStart=o;continue;case 35:return q0(t,o);case 33:return Ne(t,b.BANG,o,o+1);case 36:return Ne(t,b.DOLLAR,o,o+1);case 38:return Ne(t,b.AMP,o,o+1);case 40:return Ne(t,b.PAREN_L,o,o+1);case 41:return Ne(t,b.PAREN_R,o,o+1);case 46:if(n.charCodeAt(o+1)===46&&n.charCodeAt(o+2)===46)return Ne(t,b.SPREAD,o,o+3);break;case 58:return Ne(t,b.COLON,o,o+1);case 61:return Ne(t,b.EQUALS,o,o+1);case 64:return Ne(t,b.AT,o,o+1);case 91:return Ne(t,b.BRACKET_L,o,o+1);case 93:return Ne(t,b.BRACKET_R,o,o+1);case 123:return Ne(t,b.BRACE_L,o,o+1);case 124:return Ne(t,b.PIPE,o,o+1);case 125:return Ne(t,b.BRACE_R,o,o+1);case 34:return n.charCodeAt(o+1)===34&&n.charCodeAt(o+2)===34?J0(t,o):Q0(t,o)}if(Oo(i)||i===45)return G0(t,o,i);if(mf(i))return X0(t,o);throw Ie(t.source,o,i===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Fo(i)||Uc(n,o)?`Unexpected character: ${_r(t,o)}.`:`Invalid character: ${_r(t,o)}.`)}return Ne(t,b.EOF,r,r)}function q0(t,e){let n=t.source.body,r=n.length,o=e+1;for(;o<r;){let i=n.charCodeAt(o);if(i===10||i===13)break;if(Fo(i))++o;else if(Uc(n,o))o+=2;else break}return Ne(t,b.COMMENT,e,o,n.slice(e+1,o))}function G0(t,e,n){let r=t.source.body,o=e,i=n,s=!1;if(i===45&&(i=r.charCodeAt(++o)),i===48){if(i=r.charCodeAt(++o),Oo(i))throw Ie(t.source,o,`Invalid number, unexpected digit after 0: ${_r(t,o)}.`)}else o=gf(t,o,i),i=r.charCodeAt(o);if(i===46&&(s=!0,i=r.charCodeAt(++o),o=gf(t,o,i),i=r.charCodeAt(o)),(i===69||i===101)&&(s=!0,i=r.charCodeAt(++o),(i===43||i===45)&&(i=r.charCodeAt(++o)),o=gf(t,o,i),i=r.charCodeAt(o)),i===46||mf(i))throw Ie(t.source,o,`Invalid number, expected digit but got: ${_r(t,o)}.`);return Ne(t,s?b.FLOAT:b.INT,e,o,r.slice(e,o))}function gf(t,e,n){if(!Oo(n))throw Ie(t.source,e,`Invalid number, expected digit but got: ${_r(t,e)}.`);let r=t.source.body,o=e+1;for(;Oo(r.charCodeAt(o));)++o;return o}function Q0(t,e){let n=t.source.body,r=n.length,o=e+1,i=o,s="";for(;o<r;){let c=n.charCodeAt(o);if(c===34)return s+=n.slice(i,o),Ne(t,b.STRING,e,o+1,s);if(c===92){s+=n.slice(i,o);let l=n.charCodeAt(o+1)===117?n.charCodeAt(o+2)===123?K0(t,o):Y0(t,o):Z0(t,o);s+=l.value,o+=l.size,i=o;continue}if(c===10||c===13)break;if(Fo(c))++o;else if(Uc(n,o))o+=2;else throw Ie(t.source,o,`Invalid character within String: ${_r(t,o)}.`)}throw Ie(t.source,o,"Unterminated string.")}function K0(t,e){let n=t.source.body,r=0,o=3;for(;o<12;){let i=n.charCodeAt(e+o++);if(i===125){if(o<5||!Fo(r))break;return{value:String.fromCodePoint(r),size:o}}if(r=r<<4|hs(i),r<0)break}throw Ie(t.source,e,`Invalid Unicode escape sequence: "${n.slice(e,e+o)}".`)}function Y0(t,e){let n=t.source.body,r=Cv(n,e+2);if(Fo(r))return{value:String.fromCodePoint(r),size:6};if(Rv(r)&&n.charCodeAt(e+6)===92&&n.charCodeAt(e+7)===117){let o=Cv(n,e+8);if(Pv(o))return{value:String.fromCodePoint(r,o),size:12}}throw Ie(t.source,e,`Invalid Unicode escape sequence: "${n.slice(e,e+6)}".`)}function Cv(t,e){return hs(t.charCodeAt(e))<<12|hs(t.charCodeAt(e+1))<<8|hs(t.charCodeAt(e+2))<<4|hs(t.charCodeAt(e+3))}function hs(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:-1}function Z0(t,e){let n=t.source.body;switch(n.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Ie(t.source,e,`Invalid character escape sequence: "${n.slice(e,e+2)}".`)}function J0(t,e){let n=t.source.body,r=n.length,o=t.lineStart,i=e+3,s=i,c="",l=[];for(;i<r;){let u=n.charCodeAt(i);if(u===34&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34){c+=n.slice(s,i),l.push(c);let d=Ne(t,b.BLOCK_STRING,e,i+3,Tv(l).join(`
`));return t.line+=l.length-1,t.lineStart=o,d}if(u===92&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34&&n.charCodeAt(i+3)===34){c+=n.slice(s,i),s=i+1,i+=4;continue}if(u===10||u===13){c+=n.slice(s,i),l.push(c),u===13&&n.charCodeAt(i+1)===10?i+=2:++i,c="",s=i,o=i;continue}if(Fo(u))++i;else if(Uc(n,i))i+=2;else throw Ie(t.source,i,`Invalid character within String: ${_r(t,i)}.`)}throw Ie(t.source,i,"Unterminated string.")}function X0(t,e){let n=t.source.body,r=n.length,o=e+1;for(;o<r;){let i=n.charCodeAt(o);if(Ev(i))++o;else break}return Ne(t,b.NAME,e,o,n.slice(e,o))}function Lo(t){return jc(t,[])}function jc(t,e){switch(typeof t){case"string":return JSON.stringify(t);case"function":return t.name?`[function ${t.name}]`:"[function]";case"object":return eI(t,e);default:return String(t)}}function eI(t,e){if(t===null)return"null";if(e.includes(t))return"[Circular]";let n=[...e,t];if(tI(t)){let r=t.toJSON();if(r!==t)return typeof r=="string"?r:jc(r,n)}else if(Array.isArray(t))return rI(t,n);return nI(t,n)}function tI(t){return typeof t.toJSON=="function"}function nI(t,e){let n=Object.entries(t);return n.length===0?"{}":e.length>2?"["+oI(t)+"]":"{ "+n.map(([o,i])=>o+": "+jc(i,e)).join(", ")+" }"}function rI(t,e){if(t.length===0)return"[]";if(e.length>2)return"[Array]";let n=Math.min(10,t.length),r=t.length-n,o=[];for(let i=0;i<n;++i)o.push(jc(t[i],e));return r===1?o.push("... 1 more item"):r>1&&o.push(`... ${r} more items`),"["+o.join(", ")+"]"}function oI(t){let e=Object.prototype.toString.call(t).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof t.constructor=="function"){let n=t.constructor.name;if(typeof n=="string"&&n!=="")return n}return e}var iI=globalThis.process&&!0,Mv=iI?function(e,n){return e instanceof n}:function(e,n){if(e instanceof n)return!0;if(typeof e=="object"&&e!==null){var r;let o=n.prototype[Symbol.toStringTag],i=Symbol.toStringTag in e?e[Symbol.toStringTag]:(r=e.constructor)===null||r===void 0?void 0:r.name;if(o===i){let s=Lo(e);throw new Error(`Cannot use ${o} "${s}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};var Ho=class{constructor(e,n="GraphQL request",r={line:1,column:1}){typeof e=="string"||No(!1,`Body must be a string. Received: ${Lo(e)}.`),this.body=e,this.name=n,this.locationOffset=r,this.locationOffset.line>0||No(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||No(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}};function _v(t){return Mv(t,Ho)}function Vc(t,e){let n=new yf(t,e),r=n.parseDocument();return Object.defineProperty(r,"tokenCount",{enumerable:!1,value:n.tokenCount}),r}var yf=class{constructor(e,n={}){let i=n,{lexer:r}=i,o=pe(i,["lexer"]);if(r)this._lexer=r;else{let s=_v(e)?e:new Ho(e);this._lexer=new ps(s)}this._options=o,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){let e=this.expectToken(b.NAME);return this.node(e,{kind:E.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:E.DOCUMENT,definitions:this.many(b.SOF,this.parseDefinition,b.EOF)})}parseDefinition(){if(this.peek(b.BRACE_L))return this.parseOperationDefinition();let e=this.peekDescription(),n=e?this._lexer.lookahead():this._lexer.token;if(e&&n.kind===b.BRACE_L)throw Ie(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are not supported on shorthand queries.");if(n.kind===b.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition()}if(e)throw Ie(this._lexer.source,this._lexer.token.start,"Unexpected description, only GraphQL definitions support descriptions.");if(n.value==="extend")return this.parseTypeSystemExtension()}throw this.unexpected(n)}parseOperationDefinition(){let e=this._lexer.token;if(this.peek(b.BRACE_L))return this.node(e,{kind:E.OPERATION_DEFINITION,operation:qe.QUERY,description:void 0,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});let n=this.parseDescription(),r=this.parseOperationType(),o;return this.peek(b.NAME)&&(o=this.parseName()),this.node(e,{kind:E.OPERATION_DEFINITION,operation:r,description:n,name:o,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){let e=this.expectToken(b.NAME);switch(e.value){case"query":return qe.QUERY;case"mutation":return qe.MUTATION;case"subscription":return qe.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(b.PAREN_L,this.parseVariableDefinition,b.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:E.VARIABLE_DEFINITION,description:this.parseDescription(),variable:this.parseVariable(),type:(this.expectToken(b.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(b.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){let e=this._lexer.token;return this.expectToken(b.DOLLAR),this.node(e,{kind:E.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:E.SELECTION_SET,selections:this.many(b.BRACE_L,this.parseSelection,b.BRACE_R)})}parseSelection(){return this.peek(b.SPREAD)?this.parseFragment():this.parseField()}parseField(){let e=this._lexer.token,n=this.parseName(),r,o;return this.expectOptionalToken(b.COLON)?(r=n,o=this.parseName()):o=n,this.node(e,{kind:E.FIELD,alias:r,name:o,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(b.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){let n=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(b.PAREN_L,n,b.PAREN_R)}parseArgument(e=!1){let n=this._lexer.token,r=this.parseName();return this.expectToken(b.COLON),this.node(n,{kind:E.ARGUMENT,name:r,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){let e=this._lexer.token;this.expectToken(b.SPREAD);let n=this.expectOptionalKeyword("on");return!n&&this.peek(b.NAME)?this.node(e,{kind:E.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:E.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){let e=this._lexer.token,n=this.parseDescription();return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:E.FRAGMENT_DEFINITION,description:n,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:E.FRAGMENT_DEFINITION,description:n,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){let n=this._lexer.token;switch(n.kind){case b.BRACKET_L:return this.parseList(e);case b.BRACE_L:return this.parseObject(e);case b.INT:return this.advanceLexer(),this.node(n,{kind:E.INT,value:n.value});case b.FLOAT:return this.advanceLexer(),this.node(n,{kind:E.FLOAT,value:n.value});case b.STRING:case b.BLOCK_STRING:return this.parseStringLiteral();case b.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:E.BOOLEAN,value:!0});case"false":return this.node(n,{kind:E.BOOLEAN,value:!1});case"null":return this.node(n,{kind:E.NULL});default:return this.node(n,{kind:E.ENUM,value:n.value})}case b.DOLLAR:if(e)if(this.expectToken(b.DOLLAR),this._lexer.token.kind===b.NAME){let r=this._lexer.token.value;throw Ie(this._lexer.source,n.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){let e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:E.STRING,value:e.value,block:e.kind===b.BLOCK_STRING})}parseList(e){let n=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:E.LIST,values:this.any(b.BRACKET_L,n,b.BRACKET_R)})}parseObject(e){let n=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:E.OBJECT,fields:this.any(b.BRACE_L,n,b.BRACE_R)})}parseObjectField(e){let n=this._lexer.token,r=this.parseName();return this.expectToken(b.COLON),this.node(n,{kind:E.OBJECT_FIELD,name:r,value:this.parseValueLiteral(e)})}parseDirectives(e){let n=[];for(;this.peek(b.AT);)n.push(this.parseDirective(e));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){let n=this._lexer.token;return this.expectToken(b.AT),this.node(n,{kind:E.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){let e=this._lexer.token,n;if(this.expectOptionalToken(b.BRACKET_L)){let r=this.parseTypeReference();this.expectToken(b.BRACKET_R),n=this.node(e,{kind:E.LIST_TYPE,type:r})}else n=this.parseNamedType();return this.expectOptionalToken(b.BANG)?this.node(e,{kind:E.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:E.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(b.STRING)||this.peek(b.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){let e=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");let r=this.parseConstDirectives(),o=this.many(b.BRACE_L,this.parseOperationTypeDefinition,b.BRACE_R);return this.node(e,{kind:E.SCHEMA_DEFINITION,description:n,directives:r,operationTypes:o})}parseOperationTypeDefinition(){let e=this._lexer.token,n=this.parseOperationType();this.expectToken(b.COLON);let r=this.parseNamedType();return this.node(e,{kind:E.OPERATION_TYPE_DEFINITION,operation:n,type:r})}parseScalarTypeDefinition(){let e=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");let r=this.parseName(),o=this.parseConstDirectives();return this.node(e,{kind:E.SCALAR_TYPE_DEFINITION,description:n,name:r,directives:o})}parseObjectTypeDefinition(){let e=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");let r=this.parseName(),o=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:E.OBJECT_TYPE_DEFINITION,description:n,name:r,interfaces:o,directives:i,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(b.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(b.BRACE_L,this.parseFieldDefinition,b.BRACE_R)}parseFieldDefinition(){let e=this._lexer.token,n=this.parseDescription(),r=this.parseName(),o=this.parseArgumentDefs();this.expectToken(b.COLON);let i=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(e,{kind:E.FIELD_DEFINITION,description:n,name:r,arguments:o,type:i,directives:s})}parseArgumentDefs(){return this.optionalMany(b.PAREN_L,this.parseInputValueDef,b.PAREN_R)}parseInputValueDef(){let e=this._lexer.token,n=this.parseDescription(),r=this.parseName();this.expectToken(b.COLON);let o=this.parseTypeReference(),i;this.expectOptionalToken(b.EQUALS)&&(i=this.parseConstValueLiteral());let s=this.parseConstDirectives();return this.node(e,{kind:E.INPUT_VALUE_DEFINITION,description:n,name:r,type:o,defaultValue:i,directives:s})}parseInterfaceTypeDefinition(){let e=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");let r=this.parseName(),o=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:E.INTERFACE_TYPE_DEFINITION,description:n,name:r,interfaces:o,directives:i,fields:s})}parseUnionTypeDefinition(){let e=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseUnionMemberTypes();return this.node(e,{kind:E.UNION_TYPE_DEFINITION,description:n,name:r,directives:o,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(b.EQUALS)?this.delimitedMany(b.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){let e=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();return this.node(e,{kind:E.ENUM_TYPE_DEFINITION,description:n,name:r,directives:o,values:i})}parseEnumValuesDefinition(){return this.optionalMany(b.BRACE_L,this.parseEnumValueDefinition,b.BRACE_R)}parseEnumValueDefinition(){let e=this._lexer.token,n=this.parseDescription(),r=this.parseEnumValueName(),o=this.parseConstDirectives();return this.node(e,{kind:E.ENUM_VALUE_DEFINITION,description:n,name:r,directives:o})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Ie(this._lexer.source,this._lexer.token.start,`${Bc(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){let e=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();return this.node(e,{kind:E.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:r,directives:o,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(b.BRACE_L,this.parseInputValueDef,b.BRACE_R)}parseTypeSystemExtension(){let e=this._lexer.lookahead();if(e.kind===b.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension();case"directive":if(this._options.experimentalDirectivesOnDirectiveDefinitions)return this.parseDirectiveDefinitionExtension();break}throw this.unexpected(e)}parseSchemaExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");let n=this.parseConstDirectives(),r=this.optionalMany(b.BRACE_L,this.parseOperationTypeDefinition,b.BRACE_R);if(n.length===0&&r.length===0)throw this.unexpected();return this.node(e,{kind:E.SCHEMA_EXTENSION,directives:n,operationTypes:r})}parseScalarTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");let n=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(e,{kind:E.SCALAR_TYPE_EXTENSION,name:n,directives:r})}parseObjectTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");let n=this.parseName(),r=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(r.length===0&&o.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:E.OBJECT_TYPE_EXTENSION,name:n,interfaces:r,directives:o,fields:i})}parseInterfaceTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");let n=this.parseName(),r=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(r.length===0&&o.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:E.INTERFACE_TYPE_EXTENSION,name:n,interfaces:r,directives:o,fields:i})}parseUnionTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseUnionMemberTypes();if(r.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:E.UNION_TYPE_EXTENSION,name:n,directives:r,types:o})}parseEnumTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();if(r.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:E.ENUM_TYPE_EXTENSION,name:n,directives:r,values:o})}parseInputObjectTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();if(r.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:E.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:r,fields:o})}parseDirectiveDefinitionExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("directive"),this.expectToken(b.AT);let n=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(e,{kind:E.DIRECTIVE_EXTENSION,name:n,directives:r})}parseDirectiveDefinition(){let e=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(b.AT);let r=this.parseName(),o=this.parseArgumentDefs(),i=this._options.experimentalDirectivesOnDirectiveDefinitions?this.parseConstDirectives():[],s=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");let c=this.parseDirectiveLocations();return this.node(e,{kind:E.DIRECTIVE_DEFINITION,description:n,name:r,arguments:o,directives:i,repeatable:s,locations:c})}parseDirectiveLocations(){return this.delimitedMany(b.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){let e=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(Lc,n.value))return n;throw this.unexpected(e)}parseSchemaCoordinate(){let e=this._lexer.token,n=this.expectOptionalToken(b.AT),r=this.parseName(),o;!n&&this.expectOptionalToken(b.DOT)&&(o=this.parseName());let i;return(n||o)&&this.expectOptionalToken(b.PAREN_L)&&(i=this.parseName(),this.expectToken(b.COLON),this.expectToken(b.PAREN_R)),n?i?this.node(e,{kind:E.DIRECTIVE_ARGUMENT_COORDINATE,name:r,argumentName:i}):this.node(e,{kind:E.DIRECTIVE_COORDINATE,name:r}):o?i?this.node(e,{kind:E.ARGUMENT_COORDINATE,name:r,fieldName:o,argumentName:i}):this.node(e,{kind:E.MEMBER_COORDINATE,name:r,memberName:o}):this.node(e,{kind:E.TYPE_COORDINATE,name:r})}node(e,n){return this._options.noLocation!==!0&&(n.loc=new Ao(e,this._lexer.lastToken,this._lexer.source)),n}peek(e){return this._lexer.token.kind===e}expectToken(e){let n=this._lexer.token;if(n.kind===e)return this.advanceLexer(),n;throw Ie(this._lexer.source,n.start,`Expected ${kv(e)}, found ${Bc(n)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){let n=this._lexer.token;if(n.kind===b.NAME&&n.value===e)this.advanceLexer();else throw Ie(this._lexer.source,n.start,`Expected "${e}", found ${Bc(n)}.`)}expectOptionalKeyword(e){let n=this._lexer.token;return n.kind===b.NAME&&n.value===e?(this.advanceLexer(),!0):!1}unexpected(e){let n=e??this._lexer.token;return Ie(this._lexer.source,n.start,`Unexpected ${Bc(n)}.`)}any(e,n,r){this.expectToken(e);let o=[];for(;!this.expectOptionalToken(r);)o.push(n.call(this));return o}optionalMany(e,n,r){if(this.expectOptionalToken(e)){let o=[];do o.push(n.call(this));while(!this.expectOptionalToken(r));return o}return[]}many(e,n,r){this.expectToken(e);let o=[];do o.push(n.call(this));while(!this.expectOptionalToken(r));return o}delimitedMany(e,n){this.expectOptionalToken(e);let r=[];do r.push(n.call(this));while(this.expectOptionalToken(e));return r}advanceLexer(){let{maxTokens:e}=this._options,n=this._lexer.advance();if(n.kind!==b.EOF&&(++this._tokenCounter,e!==void 0&&this._tokenCounter>e))throw Ie(this._lexer.source,n.start,`Document contains more that ${e} tokens. Parsing aborted.`)}};function Bc(t){let e=t.value;return kv(t.kind)+(e!=null?` "${e}"`:"")}function kv(t){return Iv(t)?`"${t}"`:t}function Nv(t){return`"${t.replace(sI,aI)}"`}var sI=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function aI(t){return cI[t.charCodeAt(0)]}var cI=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"];var Sn=Object.freeze({});function xe(t,e,n=hf){let r=new Map;for(let D of Object.values(E))r.set(D,vf(e,D));let o,i=Array.isArray(t),s=[t],c=-1,l=[],u=t,d,f,h=[],p=[];do{c++;let D=c===s.length,w=D&&l.length!==0;if(D){if(d=p.length===0?void 0:h[h.length-1],u=f,f=p.pop(),w)if(i){u=u.slice();let R=0;for(let[M,j]of l){let Ee=M-R;j===null?(u.splice(Ee,1),R++):u[Ee]=j}}else{u=v({},u);for(let[R,M]of l)u[R]=M}c=o.index,s=o.keys,l=o.edits,i=o.inArray,o=o.prev}else if(f){if(d=i?c:s[c],u=f[d],u==null)continue;h.push(d)}let I;if(!Array.isArray(u)){var g,S;pf(u)||No(!1,`Invalid AST Node: ${Lo(u)}.`);let R=D?(g=r.get(u.kind))===null||g===void 0?void 0:g.leave:(S=r.get(u.kind))===null||S===void 0?void 0:S.enter;if(I=R?.call(e,u,d,f,h,p),I===Sn)break;if(I===!1){if(!D){h.pop();continue}}else if(I!==void 0&&(l.push([d,I]),!D))if(pf(I))u=I;else{h.pop();continue}}if(I===void 0&&w&&l.push([d,u]),D)h.pop();else{var y;o={inArray:i,index:c,keys:s,edits:l,prev:o},i=Array.isArray(u),s=i?u:(y=n[u.kind])!==null&&y!==void 0?y:[],c=-1,l=[],f&&p.push(f),f=u}}while(o!==void 0);return l.length!==0?l[l.length-1][1]:t}function vf(t,e){let n=t[e];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:t.enter,leave:t.leave}}function Uo(t){return xe(t,uI)}var lI=80,uI={Name:{leave:t=>t.value},Variable:{leave:t=>"$"+t.name},Document:{leave:t=>k(t.definitions,`

`)},OperationDefinition:{leave(t){let e=Sf(t.variableDefinitions)?V(`(
`,k(t.variableDefinitions,`
`),`
)`):V("(",k(t.variableDefinitions,", "),")"),n=V("",t.description,`
`)+k([t.operation,k([t.name,e]),k(t.directives," ")]," ");return(n==="query"?"":n+" ")+t.selectionSet}},VariableDefinition:{leave:({variable:t,type:e,defaultValue:n,directives:r,description:o})=>V("",o,`
`)+t+": "+e+V(" = ",n)+V(" ",k(r," "))},SelectionSet:{leave:({selections:t})=>kt(t)},Field:{leave({alias:t,name:e,arguments:n,directives:r,selectionSet:o}){let i=V("",t,": ")+e,s=i+V("(",k(n,", "),")");return s.length>lI&&(s=i+V(`(
`,$c(k(n,`
`)),`
)`)),k([s,k(r," "),o]," ")}},Argument:{leave:({name:t,value:e})=>t+": "+e},FragmentSpread:{leave:({name:t,directives:e})=>"..."+t+V(" ",k(e," "))},InlineFragment:{leave:({typeCondition:t,directives:e,selectionSet:n})=>k(["...",V("on ",t),k(e," "),n]," ")},FragmentDefinition:{leave:({name:t,typeCondition:e,variableDefinitions:n,directives:r,selectionSet:o,description:i})=>V("",i,`
`)+`fragment ${t}${V("(",k(n,", "),")")} on ${e} ${V("",k(r," ")," ")}`+o},IntValue:{leave:({value:t})=>t},FloatValue:{leave:({value:t})=>t},StringValue:{leave:({value:t,block:e})=>e?wv(t):Nv(t)},BooleanValue:{leave:({value:t})=>t?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:t})=>t},ListValue:{leave:({values:t})=>"["+k(t,", ")+"]"},ObjectValue:{leave:({fields:t})=>"{"+k(t,", ")+"}"},ObjectField:{leave:({name:t,value:e})=>t+": "+e},Directive:{leave:({name:t,arguments:e})=>"@"+t+V("(",k(e,", "),")")},NamedType:{leave:({name:t})=>t},ListType:{leave:({type:t})=>"["+t+"]"},NonNullType:{leave:({type:t})=>t+"!"},SchemaDefinition:{leave:({description:t,directives:e,operationTypes:n})=>V("",t,`
`)+k(["schema",k(e," "),kt(n)]," ")},OperationTypeDefinition:{leave:({operation:t,type:e})=>t+": "+e},ScalarTypeDefinition:{leave:({description:t,name:e,directives:n})=>V("",t,`
`)+k(["scalar",e,k(n," ")]," ")},ObjectTypeDefinition:{leave:({description:t,name:e,interfaces:n,directives:r,fields:o})=>V("",t,`
`)+k(["type",e,V("implements ",k(n," & ")),k(r," "),kt(o)]," ")},FieldDefinition:{leave:({description:t,name:e,arguments:n,type:r,directives:o})=>V("",t,`
`)+e+(Sf(n)?V(`(
`,$c(k(n,`
`)),`
)`):V("(",k(n,", "),")"))+": "+r+V(" ",k(o," "))},InputValueDefinition:{leave:({description:t,name:e,type:n,defaultValue:r,directives:o})=>V("",t,`
`)+k([e+": "+n,V("= ",r),k(o," ")]," ")},InterfaceTypeDefinition:{leave:({description:t,name:e,interfaces:n,directives:r,fields:o})=>V("",t,`
`)+k(["interface",e,V("implements ",k(n," & ")),k(r," "),kt(o)]," ")},UnionTypeDefinition:{leave:({description:t,name:e,directives:n,types:r})=>V("",t,`
`)+k(["union",e,k(n," "),V("= ",k(r," | "))]," ")},EnumTypeDefinition:{leave:({description:t,name:e,directives:n,values:r})=>V("",t,`
`)+k(["enum",e,k(n," "),kt(r)]," ")},EnumValueDefinition:{leave:({description:t,name:e,directives:n})=>V("",t,`
`)+k([e,k(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:t,name:e,directives:n,fields:r})=>V("",t,`
`)+k(["input",e,k(n," "),kt(r)]," ")},DirectiveDefinition:{leave:({description:t,name:e,arguments:n,directives:r,repeatable:o,locations:i})=>V("",t,`
`)+"directive @"+e+(Sf(n)?V(`(
`,$c(k(n,`
`)),`
)`):V("(",k(n,", "),")"))+V(" ",k(r," "))+(o?" repeatable":"")+" on "+k(i," | ")},SchemaExtension:{leave:({directives:t,operationTypes:e})=>k(["extend schema",k(t," "),kt(e)]," ")},ScalarTypeExtension:{leave:({name:t,directives:e})=>k(["extend scalar",t,k(e," ")]," ")},ObjectTypeExtension:{leave:({name:t,interfaces:e,directives:n,fields:r})=>k(["extend type",t,V("implements ",k(e," & ")),k(n," "),kt(r)]," ")},InterfaceTypeExtension:{leave:({name:t,interfaces:e,directives:n,fields:r})=>k(["extend interface",t,V("implements ",k(e," & ")),k(n," "),kt(r)]," ")},UnionTypeExtension:{leave:({name:t,directives:e,types:n})=>k(["extend union",t,k(e," "),V("= ",k(n," | "))]," ")},EnumTypeExtension:{leave:({name:t,directives:e,values:n})=>k(["extend enum",t,k(e," "),kt(n)]," ")},InputObjectTypeExtension:{leave:({name:t,directives:e,fields:n})=>k(["extend input",t,k(e," "),kt(n)]," ")},DirectiveExtension:{leave:({name:t,directives:e})=>k(["extend directive @"+t,k(e," ")]," ")},TypeCoordinate:{leave:({name:t})=>t},MemberCoordinate:{leave:({name:t,memberName:e})=>k([t,V(".",e)])},ArgumentCoordinate:{leave:({name:t,fieldName:e,argumentName:n})=>k([t,V(".",e),V("(",n,":)")])},DirectiveCoordinate:{leave:({name:t})=>k(["@",t])},DirectiveArgumentCoordinate:{leave:({name:t,argumentName:e})=>k(["@",t,V("(",e,":)")])}};function k(t,e=""){var n;return(n=t?.filter(r=>r).join(e))!==null&&n!==void 0?n:""}function kt(t){return V(`{
`,$c(k(t,`
`)),`
}`)}function V(t,e,n=""){return e!=null&&e!==""?t+e+n:""}function $c(t){return V("  ",t.replace(/\n/g,`
  `))}function Sf(t){var e;return(e=t?.some(n=>n.includes(`
`)))!==null&&e!==void 0?e:!1}function Df(t,e,n){let r=t.arguments?.find(o=>o.name.value===e);if(!(!r||r.value.kind!==n)&&r.value.kind===E.STRING)return r.value.value}function kr(t){try{return t()}catch(e){}}var jo=kr(()=>globalThis)||kr(()=>window)||kr(()=>self)||kr(()=>global)||kr(function(){return kr.constructor("return this")()});var ms="4.3.0";var xv=new Map;function gs(t){let e=xv.get(t)||1;return xv.set(t,e+1),`${t}:${e}:${Math.random().toString(36).slice(2)}`}function ys(t,e=0){let n=gs("stringifyForDisplay");return JSON.stringify(t,(r,o)=>o===void 0?n:o,e).split(JSON.stringify(n)).join("<undefined>")}var Av="Invariant Violation",bf=class t extends Error{constructor(e=Av){super(e),this.name=Av,Object.setPrototypeOf(this,t.prototype)}},Fv=["debug","log","warn","error","silent"],yI=Fv.indexOf("silent");function T(t,...e){if(!t)throw ve(...e)}function zc(t){return function(e,...n){if(Fv.indexOf(t)>=yI){let r=console[t]||console.log;if(typeof e=="number"){let o=e;e=Lv(o),e||(e=Hv(o,n),n=[])}r(e,...n)}}}T.debug=zc("debug");T.log=zc("log");T.warn=zc("warn");T.error=zc("error");function ve(t,...e){return new bf(Lv(t,e)||Hv(t,e))}var Ov=Symbol.for("ApolloErrorMessageHandler_"+ms);function Ef(t){if(typeof t=="string")return t;try{return ys(t,2).slice(0,1e3)}catch(e){return"<non-serializable>"}}function Lv(t,e=[]){if(t)return jo[Ov]&&jo[Ov](t,e.map(Ef))}function Hv(t,e=[]){if(t)return typeof t=="string"?e.reduce((n,r)=>n.replace(/%[sdfo]/,Ef(r)),t):`An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#${encodeURIComponent(JSON.stringify({version:ms,message:t,args:e.map(Ef)}))}`}function Dn(t,e,n,r){if(n.kind===E.INT||n.kind===E.FLOAT)t[e.value]=Number(n.value);else if(n.kind===E.BOOLEAN||n.kind===E.STRING)t[e.value]=n.value;else if(n.kind===E.OBJECT){let o={};n.fields.map(i=>Dn(o,i.name,i.value,r)),t[e.value]=o}else if(n.kind===E.VARIABLE){let o=(r||{})[n.name.value];t[e.value]=o}else if(n.kind===E.LIST)t[e.value]=n.values.map(o=>{let i={};return Dn(i,e,o,r),i[e.value]});else if(n.kind===E.ENUM)t[e.value]=n.value;else if(n.kind===E.NULL)t[e.value]=null;else throw ve(21,e.value,n.kind)}function Nr(t,e){if(t.arguments&&t.arguments.length){let n={};return t.arguments.forEach(({name:r,value:o})=>Dn(n,r,o,e)),n}return null}function Tf(t){return t[0].toUpperCase()+t.slice(1)}var vI=Symbol.for("apollo.cacheSize"),he=v({},jo[vI]);function Se(t,e){return t.definitions.find(n=>n.kind==="OperationDefinition"&&!!n.name)?.name.value??e}var SI=()=>Object.create(null),{forEach:DI,slice:Uv}=Array.prototype,{hasOwnProperty:bI}=Object.prototype,Re=class t{constructor(e=!0,n=SI){this.weakness=e,this.makeData=n}lookup(){return this.lookupArray(arguments)}lookupArray(e){let n=this;return DI.call(e,r=>n=n.getChildTrie(r)),bI.call(n,"data")?n.data:n.data=this.makeData(Uv.call(e))}peek(){return this.peekArray(arguments)}peekArray(e){let n=this;for(let r=0,o=e.length;n&&r<o;++r){let i=n.mapFor(e[r],!1);n=i&&i.get(e[r])}return n&&n.data}remove(){return this.removeArray(arguments)}removeArray(e){let n;if(e.length){let r=e[0],o=this.mapFor(r,!1),i=o&&o.get(r);i&&(n=i.removeArray(Uv.call(e,1)),!i.data&&!i.weak&&!(i.strong&&i.strong.size)&&o.delete(r))}else n=this.data,delete this.data;return n}getChildTrie(e){let n=this.mapFor(e,!0),r=n.get(e);return r||n.set(e,r=new t(this.weakness,this.makeData)),r}mapFor(e,n){return this.weakness&&EI(e)?this.weak||(n?this.weak=new WeakMap:void 0):this.strong||(n?this.strong=new Map:void 0)}};function EI(t){switch(typeof t){case"object":if(t===null)break;case"function":return!0}return!1}function TI(){}var $n=class{constructor(e=1/0,n=TI){this.max=e,this.dispose=n,this.map=new Map,this.newest=null,this.oldest=null}has(e){return this.map.has(e)}get(e){let n=this.getNode(e);return n&&n.value}get size(){return this.map.size}getNode(e){let n=this.map.get(e);if(n&&n!==this.newest){let{older:r,newer:o}=n;o&&(o.older=r),r&&(r.newer=o),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=o)}return n}set(e,n){let r=this.getNode(e);return r?r.value=n:(r={key:e,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(e,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(e){let n=this.map.get(e);return n?(n===this.newest&&(this.newest=n.older),n===this.oldest&&(this.oldest=n.newer),n.newer&&(n.newer.older=n.older),n.older&&(n.older.newer=n.newer),this.map.delete(e),this.dispose(n.value,e),!0):!1}};function wf(){}var wI=wf,CI=typeof WeakRef<"u"?WeakRef:function(t){return{deref:()=>t}},II=typeof WeakMap<"u"?WeakMap:Map,RI=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:wf,unregister:wf}},PI=10024,Xt=class{constructor(e=1/0,n=wI){this.max=e,this.dispose=n,this.map=new II,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{let r=this.unfinalizedNodes.values();for(let o=0;o<PI;o++){let i=r.next().value;if(!i)break;this.unfinalizedNodes.delete(i);let s=i.key;delete i.key,i.keyRef=new CI(s),this.registry.register(s,i,i)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new RI(this.deleteNode.bind(this))}has(e){return this.map.has(e)}get(e){let n=this.getNode(e);return n&&n.value}getNode(e){let n=this.map.get(e);if(n&&n!==this.newest){let{older:r,newer:o}=n;o&&(o.older=r),r&&(r.newer=o),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=o)}return n}set(e,n){let r=this.getNode(e);return r?r.value=n:(r={key:e,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.scheduleFinalization(r),this.map.set(e,r),this.size++,r.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(e){e===this.newest&&(this.newest=e.older),e===this.oldest&&(this.oldest=e.newer),e.newer&&(e.newer.older=e.older),e.older&&(e.older.newer=e.newer),this.size--;let n=e.key||e.keyRef&&e.keyRef.deref();this.dispose(e.value,n),e.keyRef?this.registry.unregister(e):this.unfinalizedNodes.delete(e),n&&this.map.delete(n)}delete(e){let n=this.map.get(e);return n?(this.deleteNode(n),!0):!1}scheduleFinalization(e){this.unfinalizedNodes.add(e),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}};var Cf=new WeakSet;function jv(t){t.size<=(t.max||-1)||Cf.has(t)||(Cf.add(t),setTimeout(()=>{t.clean(),Cf.delete(t)},100))}var xr=function(t,e){let n=new Xt(t,e);return n.set=function(r,o){let i=Xt.prototype.set.call(this,r,o);return jv(this),i},n},If=function(t,e){let n=new $n(t,e);return n.set=function(r,o){let i=$n.prototype.set.call(this,r,o);return jv(this),i},n};function zn(t,{max:e,makeCacheKey:n=r=>r}){let r=new Re(!0),o=new xr(e);return(...i)=>{let s=r.lookupArray(n(i)),c=o.get(s);if(c){if(c.error)throw c.error;return c.result}let l=o.set(s,{});try{return l.result=t(...i)}catch(u){throw l.error=u,u}}}var Ge=zn((t,e)=>{T(t&&t.kind==="Document",1);let n=t.definitions.filter(r=>r.kind==="OperationDefinition");!1,e&&T(n.length==1&&n[0].operation===e,4,e,e,n[0].operation),xe(t,{Field(r,o,i,s){if(r.alias&&(r.alias.value==="__typename"||r.alias.value.startsWith("__ac_"))&&r.alias.value!==r.name.value){let c=t,l=[];for(let u of s)c=c[u],c.kind===E.FIELD&&l.push(c.alias?.value||c.name.value);throw l.splice(-1,1,r.name.value),ve(5,r.alias.value,l.join("."),n[0].operation,Se(t,"(anonymous)"))}}})},{max:he.checkDocument||2e3});var{toString:MI}=Object.prototype;function Pf(t){return Rf(t)}function Rf(t,e){switch(MI.call(t)){case"[object Array]":{if(e=e||new Map,e.has(t))return e.get(t);let n=t.slice(0);return e.set(t,n),n.forEach(function(r,o){n[o]=Rf(r,e)}),n}case"[object Object]":{if(e=e||new Map,e.has(t))return e.get(t);let n=Object.create(Object.getPrototypeOf(t));return e.set(t,n),Object.keys(t).forEach(r=>{n[r]=Rf(t[r],e)}),n}default:return t}}function dt(t=[]){let e={};return t.forEach(n=>{e[n.name.value]=n}),e}function ft(t){return t.definitions.filter(e=>e.kind==="FragmentDefinition")}function Nt(t,e){switch(t.kind){case"InlineFragment":return t;case"FragmentSpread":{let n=t.name.value;if(typeof e=="function")return e(n);let r=e&&e[n];return T(r,11,n),r}default:return null}}function bn(t){Ge(t);let e;for(let n of t.definitions){if(n.kind==="OperationDefinition")return n;n.kind==="FragmentDefinition"&&!e&&(e=n)}if(e)return e;throw ve(14)}function Pe(t){return Ge(t),t.definitions.filter(e=>e.kind==="OperationDefinition")[0]}function ht(t){return t.kind==="Field"}function Ar(t){return t.match(/^\[(.*)\]$/)}function $e(t){return t.alias?t.alias.value:t.name.value}function xt(t){return t.replace(/[[\]]/g,"")}function Mf(t,e,n){let r=Pe(e)?.operation,o=dt(ft(e));T(r,6);function i(l,u,d,f){let h=!1,p=u.map(g=>{let S=s(l,g,d,f);return h||=S!==g,S});return h?p:u}function s(l,u,d,f){if(Array.isArray(u)&&!f)return i(l,u,d,f);if(l.selectionSet)return c(l.selectionSet,u);if(u===null||!d)return u;if(f){let h=Ar(f);if(h){if(Array.isArray(u))return i(l,u,d,h[1]);!1}let p=n.getScalar(xt(f));if(p)return p.coerceToParsed(u)}return u}function c(l,u,d){if(u===null||typeof u!="object")return u;let f=v({},u),h=!1;Object.hasOwn(u,"__typename")&&(d=u.__typename);let p=new Set(l.selections);return p.forEach(g=>{if(ht(g)){let S=$e(g);if(!Object.hasOwn(u,S))return;let y=u[S],D=s(g,y,d,d?n.getScalarTypeForField(d,g.name.value):void 0);h||=D!==y,f[S]=D}else{let S=Nt(g,o);S&&d&&n.fragmentMatches(S,d)&&S.selectionSet.selections.forEach(y=>p.add(y))}}),h?f:u}return c(bn(e).selectionSet,t,n.getRootTypename(r))}function _f(t){return t.length===0?ue:new F(e=>{let{length:n}=t,r=new Array(n),o=new Map;t.forEach((l,u)=>{o.has(l)||o.set(l,new Set),o.get(l).add(u)});let i=o.size,s=o.size,c;o.forEach((l,u)=>{let d=!1,f=u.subscribe({next:h=>{l.forEach(p=>r[p]=h),d||(d=!0,s--),s||(c||=new Set(t.filter(p=>p.dirty)),c.delete(u),c.size||(e.next(r.slice()),c=void 0))},complete:()=>{i--,i||e.complete()},error:e.error.bind(e)});e.add(f)})})}function it(...t){let e={};return t.forEach(n=>{n&&Reflect.ownKeys(n).forEach(r=>{let o=n[r];o!==void 0&&(e[r]=o)})}),e}function de(t){return t!==null&&typeof t=="object"}var{hasOwnProperty:_I}=Object.prototype,kI=function(t,e,n){return this.merge(t[n],e[n])},Bv=t=>isNaN(+t)?{}:[],Qe=class{options;reconciler;constructor(e={}){this.options=e,this.reconciler=e.reconciler||kI}merge(e,n,r={}){let o=r.atPath;if(o?.length){let[i,...s]=o;e===void 0&&(e=Bv(i));let c=e[i];c===void 0&&s.length&&(c=Bv(s[0]));let l=this.merge(c,n,C(v({},r),{atPath:s}));return c!==l&&(e=this.shallowCopyForMerge(e),e[i]=l),e}return Array.isArray(e)&&Array.isArray(n)&&this.options.arrayMerge==="truncate"&&e.length>n.length&&(e=e.slice(0,n.length),this.pastCopies.add(e)),de(n)&&de(e)?(Object.keys(n).forEach(i=>{if(_I.call(e,i)){let s=e[i];if(n[i]!==s){let c=this.reconciler(e,n,i);c!==s&&(e=this.shallowCopyForMerge(e),e[i]=c)}}else e=this.shallowCopyForMerge(e),e[i]=n[i]}),e):n}isObject=de;pastCopies=new Set;shallowCopyForMerge(e){return de(e)&&(this.pastCopies.has(e)||(Array.isArray(e)?e=e.slice(0):e=v({__proto__:Object.getPrototypeOf(e)},e),this.pastCopies.add(e))),e}};function Or(t){let e={},n=t&&t.variableDefinitions;return n&&n.length&&n.forEach(r=>{r.defaultValue&&Dn(e,r.variable.name,r.defaultValue)}),e}function kf(t,e){let n=e,r=[];return t.definitions.forEach(i=>{if(i.kind==="OperationDefinition")throw ve(12,i.operation,i.name?` named '${i.name.value}'`:"");i.kind==="FragmentDefinition"&&r.push(i)}),typeof n>"u"&&(T(r.length===1,13,r.length),n=r[0].name.value),C(v({},t),{definitions:[{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:n}}]}},...t.definitions]})}function vs(t){T(t.kind==="Document",8),T(t.definitions.length<=1,9);let e=t.definitions[0];return T(e.kind==="FragmentDefinition",10),e}function Ss(t){let e=Pe(t);return T(e&&e.operation==="query",15),e}var NI={};function Ds(t,e){NI[t]=e}var De=Object.assign(function(e){return JSON.stringify(e,xI)},{reset(){Bo=new If(he.canonicalStringify||1e3)}});!1;var Bo;De.reset();function xI(t,e){if(e&&typeof e=="object"){let n=Object.getPrototypeOf(e);if(n===Object.prototype||n===null){let r=Object.keys(e);if(r.every(AI))return e;let o=JSON.stringify(r),i=Bo.get(o);if(!i){r.sort();let c=JSON.stringify(r);i=Bo.get(c)||r,Bo.set(o,i),Bo.set(c,i)}let s=Object.create(n);return i.forEach(c=>{s[c]=e[c]}),s}}return e}function AI(t,e,n){return e===0||n[e-1]<=t}var OI=["connection","include","skip","client","rest","export","nonreactive","stream"],bs=De,Es=Object.assign(function(t,e,n){if(e&&n&&n.connection&&n.connection.key){if(n.connection.filter&&n.connection.filter.length>0){let o=n.connection.filter?n.connection.filter:[];o.sort();let i={};o.forEach(c=>{i[c]=e[c]});let s=bs(i);if(s!=="{}")return`${n.connection.key}(${s})`}return n.connection.key}let r=t;if(e){let o=bs(e);o!=="{}"&&(r+=`(${o})`)}return n&&Object.keys(n).forEach(o=>{OI.indexOf(o)===-1&&(n[o]&&Object.keys(n[o]).length?r+=`@${o}(${bs(n[o])})`:r+=`@${o}`)}),r},{setStringify(t){let e=bs;return bs=t,e}});function En(t){return!!t.errors?.length}function en(t,e,n){let r=new Set(t),o=r.size;return xe(e,{Directive(i){if(r.delete(i.name.value)&&(!n||!r.size))return Sn}}),n?!r.size:r.size<o}function Nf(t){let e=!1;return xe(t,{Directive:{enter(n){if(n.name.value==="client"&&n.arguments&&(e=n.arguments.some(r=>r.name.value==="always"&&r.value.kind==="BooleanValue"&&r.value.value===!0),e))return Sn}}}),e}var ae=Array.isArray;var Wc=zn(function(e,n){return!!e.directives?.some(r=>{if(r.name.value!=="defer")return!1;for(let o of r.arguments??[])if(o.name.value==="if")switch(o.value.kind){case E.BOOLEAN:return o.value.value;case E.VARIABLE:return!!n?.[o.value.name.value]}return!0})},{max:he.isDeferredFragment||2e3,makeCacheKey:([t,e])=>[t,De(e)]});function xf(t){return de(t)&&t.kind==="Document"&&Array.isArray(t.definitions)}function Fr(t){return Array.isArray(t)&&t.length>0}function Ts(t){return t!==null&&typeof t=="object"&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}var Vo=zn(function(e,n){return!!e.directives?.some(r=>{if(r.name.value!=="stream")return!1;for(let o of r.arguments??[])if(o.name.value==="if")switch(o.value.kind){case E.BOOLEAN:return o.value.value;case E.VARIABLE:return!!n?.[o.value.name.value]}return!0})},{max:he.isStreamField||2e3,makeCacheKey:([t,e])=>[t,De(e)]});var Ue=null,Vv={},FI=1,LI=()=>class{constructor(){this.id=["slot",FI++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let e=Ue;e;e=e.parent)if(this.id in e.slots){let n=e.slots[this.id];if(n===Vv)break;return e!==Ue&&(Ue.slots[this.id]=n),!0}return Ue&&(Ue.slots[this.id]=Vv),!1}getValue(){if(this.hasValue())return Ue.slots[this.id]}withValue(e,n,r,o){let i={__proto__:null,[this.id]:e},s=Ue;Ue={parent:s,slots:i};try{return n.apply(o,r)}finally{Ue=s}}static bind(e){let n=Ue;return function(){let r=Ue;try{return Ue=n,e.apply(this,arguments)}finally{Ue=r}}}static noContext(e,n,r){if(Ue){let o=Ue;try{return Ue=null,e.apply(r,n)}finally{Ue=o}}else return e.apply(r,n)}};function $v(t){try{return t()}catch(e){}}var Af="@wry/context:Slot",HI=$v(()=>globalThis)||$v(()=>global)||Object.create(null),zv=HI,Tn=zv[Af]||Array[Af]||(function(t){try{Object.defineProperty(zv,Af,{value:t,enumerable:!1,writable:!1,configurable:!0})}finally{return t}})(LI());var{bind:Wv,noContext:qv}=Tn;var Lr=new Tn;var{hasOwnProperty:Gv}=Object.prototype,ws=Array.from||function(t){let e=[];return t.forEach(n=>e.push(n)),e};function $o(t){let{unsubscribe:e}=t;typeof e=="function"&&(t.unsubscribe=void 0,e())}var Cs=[],BI=100;function zo(t,e){if(!t)throw new Error(e||"assertion failure")}function Kv(t,e){let n=t.length;return n>0&&n===e.length&&t[n-1]===e[n-1]}function Yv(t){switch(t.length){case 0:throw new Error("unknown value");case 1:return t[0];case 2:throw t[1]}}function Zv(t){return t.slice(0)}var Jv=(()=>{class t{constructor(n){this.fn=n,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++t.count}peek(){if(this.value.length===1&&!Wn(this))return Qv(this),this.value[0]}recompute(n){return zo(!this.recomputing,"already recomputing"),Qv(this),Wn(this)?VI(this,n):Yv(this.value)}setDirty(){this.dirty||(this.dirty=!0,Xv(this),$o(this))}dispose(){this.setDirty(),oS(this),Of(this,(n,r)=>{n.setDirty(),iS(n,this)})}forget(){this.dispose()}dependOn(n){n.add(this),this.deps||(this.deps=Cs.pop()||new Set),this.deps.add(n)}forgetDeps(){this.deps&&(ws(this.deps).forEach(n=>n.delete(this)),this.deps.clear(),Cs.push(this.deps),this.deps=null)}}return t.count=0,t})();function Qv(t){let e=Lr.getValue();if(e)return t.parents.add(e),e.childValues.has(t)||e.childValues.set(t,[]),Wn(t)?tS(e,t):nS(e,t),e}function VI(t,e){return oS(t),Lr.withValue(t,$I,[t,e]),WI(t,e)&&zI(t),Yv(t.value)}function $I(t,e){t.recomputing=!0;let{normalizeResult:n}=t,r;n&&t.value.length===1&&(r=Zv(t.value)),t.value.length=0;try{if(t.value[0]=t.fn.apply(null,e),n&&r&&!Kv(r,t.value))try{t.value[0]=n(t.value[0],r[0])}catch(o){}}catch(o){t.value[1]=o}t.recomputing=!1}function Wn(t){return t.dirty||!!(t.dirtyChildren&&t.dirtyChildren.size)}function zI(t){t.dirty=!1,!Wn(t)&&eS(t)}function Xv(t){Of(t,tS)}function eS(t){Of(t,nS)}function Of(t,e){let n=t.parents.size;if(n){let r=ws(t.parents);for(let o=0;o<n;++o)e(r[o],t)}}function tS(t,e){zo(t.childValues.has(e)),zo(Wn(e));let n=!Wn(t);if(!t.dirtyChildren)t.dirtyChildren=Cs.pop()||new Set;else if(t.dirtyChildren.has(e))return;t.dirtyChildren.add(e),n&&Xv(t)}function nS(t,e){zo(t.childValues.has(e)),zo(!Wn(e));let n=t.childValues.get(e);n.length===0?t.childValues.set(e,Zv(e.value)):Kv(n,e.value)||t.setDirty(),rS(t,e),!Wn(t)&&eS(t)}function rS(t,e){let n=t.dirtyChildren;n&&(n.delete(e),n.size===0&&(Cs.length<BI&&Cs.push(n),t.dirtyChildren=null))}function oS(t){t.childValues.size>0&&t.childValues.forEach((e,n)=>{iS(t,n)}),t.forgetDeps(),zo(t.dirtyChildren===null)}function iS(t,e){e.parents.delete(t),t.childValues.delete(e),rS(t,e)}function WI(t,e){if(typeof t.subscribe=="function")try{$o(t),t.unsubscribe=t.subscribe.apply(null,e)}catch(n){return t.setDirty(),!1}return!0}var qI={setDirty:!0,dispose:!0,forget:!0};function Is(t){let e=new Map,n=t&&t.subscribe;function r(o){let i=Lr.getValue();if(i){let s=e.get(o);s||e.set(o,s=new Set),i.dependOn(s),typeof n=="function"&&($o(s),s.unsubscribe=n(o))}}return r.dirty=function(i,s){let c=e.get(i);if(c){let l=s&&Gv.call(qI,s)?s:"setDirty";ws(c).forEach(u=>u[l]()),e.delete(i),$o(c)}},r}var sS;function Lf(...t){return(sS||(sS=new Re(typeof WeakMap=="function"))).lookupArray(t)}var Ff=new Set;function At(t,{max:e=Math.pow(2,16),keyArgs:n,makeCacheKey:r=Lf,normalizeResult:o,subscribe:i,cache:s=$n}=Object.create(null)){let c=typeof s=="function"?new s(e,h=>h.dispose()):s,l=function(){let h=r.apply(null,n?n.apply(null,arguments):arguments);if(h===void 0)return t.apply(null,arguments);let p=c.get(h);p||(c.set(h,p=new Jv(t)),p.normalizeResult=o,p.subscribe=i,p.forget=()=>c.delete(h));let g=p.recompute(Array.prototype.slice.call(arguments));return c.set(h,p),Ff.add(c),Lr.hasValue()||(Ff.forEach(S=>S.clean()),Ff.clear()),g};Object.defineProperty(l,"size",{get:()=>c.size,configurable:!1,enumerable:!1}),Object.freeze(l.options={max:e,keyArgs:n,makeCacheKey:r,normalizeResult:o,subscribe:i,cache:c});function u(h){let p=h&&c.get(h);p&&p.setDirty()}l.dirtyKey=u,l.dirty=function(){u(r.apply(null,arguments))};function d(h){let p=h&&c.get(h);if(p)return p.peek()}l.peekKey=d,l.peek=function(){return d(r.apply(null,arguments))};function f(h){return h?c.delete(h):!1}return l.forgetKey=f,l.forget=function(){return f(r.apply(null,arguments))},l.makeCacheKey=r,l.getKey=n?function(){return r.apply(null,n.apply(null,arguments))}:r,Object.freeze(l)}function tn(t){return{__ref:String(t)}}function aS(t){let e=new Set([t]);return e.forEach(n=>{de(n)&&GI(n)===n&&Object.getOwnPropertyNames(n).forEach(r=>{de(n[r])&&e.add(n[r])})}),t}function GI(t){if(!1)try{Object.freeze(t)}catch(e){if(e instanceof TypeError)return null;throw e}return t}function qn(t){return!1,t}function Hf(t){let e=t[0]||{},n=t.length;if(n>1){let r=new Qe;for(let o=1;o<n;++o)e=r.merge(e,t[o])}return e}function Hr(t,e){return it(t,e,e.variables&&{variables:it(v(v({},t&&t.variables),e.variables))})}function qc(t){return t.catch(()=>{}),t}function Uf(t,e){Ge(e);let n=cS(""),r=cS(""),o=y=>{for(let D=0,w;D<y.length&&(w=y[D]);++D)if(!ae(w)){if(w.kind===E.OPERATION_DEFINITION)return n(w.name&&w.name.value);if(w.kind===E.FRAGMENT_DEFINITION)return r(w.name.value)}return T.error(16),null},i=0;for(let y=e.definitions.length-1;y>=0;--y)e.definitions[y].kind===E.OPERATION_DEFINITION&&++i;let s=QI(t),c=y=>Fr(y)&&y.map(s).some(D=>D&&D.remove),l=new Map,u=!1,d={enter(y){if(c(y.directives))return u=!0,null}},f=xe(e,{Field:d,InlineFragment:d,VariableDefinition:{enter(){return!1}},Variable:{enter(y,D,w,I,R){let M=o(R);M&&M.variables.add(y.name.value)}},FragmentSpread:{enter(y,D,w,I,R){if(c(y.directives))return u=!0,null;let M=o(R);M&&M.fragmentSpreads.add(y.name.value)}},FragmentDefinition:{enter(y,D,w,I){l.set(JSON.stringify(I),y)},leave(y,D,w,I){let R=l.get(JSON.stringify(I));if(y===R)return y;if(i>0&&y.selectionSet.selections.every(M=>M.kind===E.FIELD&&M.name.value==="__typename"))return r(y.name.value).removed=!0,u=!0,null}},Directive:{leave(y){if(s(y))return u=!0,null}}});if(!u)return e;let h=y=>(y.transitiveVars||(y.transitiveVars=new Set(y.variables),y.removed||y.fragmentSpreads.forEach(D=>{h(r(D)).transitiveVars.forEach(w=>{y.transitiveVars.add(w)})})),y),p=new Set;f.definitions.forEach(y=>{y.kind===E.OPERATION_DEFINITION?h(n(y.name&&y.name.value)).fragmentSpreads.forEach(D=>{p.add(D)}):y.kind===E.FRAGMENT_DEFINITION&&i===0&&!r(y.name.value).removed&&p.add(y.name.value)}),p.forEach(y=>{h(r(y)).fragmentSpreads.forEach(D=>{p.add(D)})});let g=y=>!!(!p.has(y)||r(y).removed),S={enter(y){if(g(y.name.value))return null}};return KI(xe(f,{FragmentSpread:S,FragmentDefinition:S,OperationDefinition:{leave(y){if(y.variableDefinitions){let D=h(n(y.name&&y.name.value)).transitiveVars;if(D.size<y.variableDefinitions.length)return C(v({},y),{variableDefinitions:y.variableDefinitions.filter(w=>D.has(w.variable.name.value))})}}}}))}function cS(t){let e=new Map;return function(r=t){let o=e.get(r);return o||e.set(r,o={variables:new Set,fragmentSpreads:new Set}),o}}function QI(t){let e=new Map,n=new Map;return t.forEach(r=>{r&&(r.name?e.set(r.name,r):r.test&&n.set(r.test,r))}),r=>{let o=e.get(r.name.value);return!o&&n.size&&n.forEach((i,s)=>{s(r)&&(o=i)}),o}}function lS(t,e){return!t||t.selectionSet.selections.every(n=>n.kind===E.FRAGMENT_SPREAD&&lS(e[n.name.value],e))}function KI(t){return lS(Pe(t)||vs(t),dt(ft(t)))?null:t}function jf(t){return xe(t,{FragmentSpread(e){if(!e.directives?.some(({name:n})=>n.value==="unmask"))return null}})}function nn({directives:t},e){return!t||!t.length?!0:ZI(t).every(({directive:n,ifArgument:r})=>{let o=!1;return r.value.kind==="Variable"?(o=e&&e[r.value.name.value],T(o!==void 0,17,n.name.value)):o=r.value.value,n.name.value==="skip"?!o:o})}function YI({name:{value:t}}){return t==="skip"||t==="include"}function ZI(t){let e=[];return t&&t.length&&t.forEach(n=>{if(!YI(n))return;let r=n.arguments,o=n.name.value;T(r&&r.length===1,18,o);let i=r[0];T(i.name&&i.name.value==="if",19,o);let s=i.value;T(s&&(s.kind==="Variable"||s.kind==="BooleanValue"),20,o),e.push({directive:n,ifArgument:i})}),e}function Bf(t,e){let n=null;t.directives&&(n={},t.directives.forEach(o=>{n[o.name.value]={},o.arguments&&o.arguments.forEach(({name:i,value:s})=>Dn(n[o.name.value],i,s,e))}));let r=null;return t.arguments&&t.arguments.length&&(r={},t.arguments.forEach(({name:o,value:i})=>Dn(r,o,i,e))),Es(t.name.value,r,n)}function Rs(t){return"dataState"in t?t:C(v({},t),{dataState:t.complete?"complete":t.result===null?"empty":"partial"})}function Gn(t){let e={data:t.data};return t.error&&(e.error=t.error),e}function Wo(t,e=()=>{}){return n=>new F(r=>{let o=e();return n.subscribe({next(i){let s;try{s=t(i,o)}catch(c){r.error(c)}s!==void 0&&r.next(s)},error(i){r.error(i)},complete(){r.complete()}})})}var{toString:uS,hasOwnProperty:JI}=Object.prototype,dS=Function.prototype.toString,Vf=new Map;function Q(t,e){try{return $f(t,e)}finally{Vf.clear()}}function $f(t,e){if(t===e)return!0;let n=uS.call(t),r=uS.call(e);if(n!==r)return!1;switch(n){case"[object Array]":if(t.length!==e.length)return!1;case"[object Object]":{if(hS(t,e))return!0;let o=fS(t),i=fS(e),s=o.length;if(s!==i.length)return!1;for(let c=0;c<s;++c)if(!JI.call(e,o[c]))return!1;for(let c=0;c<s;++c){let l=o[c];if(!$f(t[l],e[l]))return!1}return!0}case"[object Error]":return t.name===e.name&&t.message===e.message;case"[object Number]":if(t!==t)return e!==e;case"[object Boolean]":case"[object Date]":return+t==+e;case"[object RegExp]":case"[object String]":return t==`${e}`;case"[object Map]":case"[object Set]":{if(t.size!==e.size)return!1;if(hS(t,e))return!0;let o=t.entries(),i=n==="[object Map]";for(;;){let s=o.next();if(s.done)break;let[c,l]=s.value;if(!e.has(c)||i&&!$f(l,e.get(c)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":t=new Uint8Array(t),e=new Uint8Array(e);case"[object DataView]":{let o=t.byteLength;if(o===e.byteLength)for(;o--&&t[o]===e[o];);return o===-1}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{let o=dS.call(t);return o!==dS.call(e)?!1:!tR(o,eR)}}return!1}function fS(t){return Object.keys(t).filter(XI,t)}function XI(t){return this[t]!==void 0}var eR="{ [native code] }";function tR(t,e){let n=t.length-e.length;return n>=0&&t.indexOf(e,n)===n}function hS(t,e){let n=Vf.get(t);if(n){if(n.has(e))return!0}else Vf.set(t,n=new Set);return n.add(e),!1}function Ps(t,s,l,i){var c=s,{data:e}=c,n=pe(c,["data"]);var u=l,{data:r}=u,o=pe(u,["data"]);return Q(n,o)&&Gc(bn(t).selectionSet,e,r,{fragmentMap:dt(ft(t)),variables:i})}function Gc(t,e,n,r){if(e===n)return!0;let o=new Set;return t.selections.every(i=>{if(o.has(i)||(o.add(i),!nn(i,r.variables))||pS(i))return!0;if(ht(i)){let s=$e(i),c=e&&e[s],l=n&&n[s],u=i.selectionSet;if(!u)return Q(c,l);let d=Array.isArray(c),f=Array.isArray(l);if(d!==f)return!1;if(d&&f){let h=c.length;if(l.length!==h)return!1;for(let p=0;p<h;++p)if(!Gc(u,c[p],l[p],r))return!1;return!0}return Gc(u,c,l,r)}else{let s=Nt(i,r.fragmentMap);if(s)return pS(s)?!0:Gc(s.selectionSet,e,n,r)}})}function pS(t){return!!t.directives&&t.directives.some(nR)}function nR(t){return t.name.value==="nonreactive"}function rR(t,e){let n,r;function o(i){return i!==n&&(n=i,r=e(n)),r}return Object.assign(t.pipe(L(o),dr({bufferSize:1,refCount:!0})),{getCurrentResult:()=>o(t.getCurrentResult())})}var Ms=zn(function(e,n,r){return rR(e,r)},{max:1,makeCacheKey:t=>t.slice(0,2)});var _s=Symbol.for("apollo.result.extensions"),rn=Symbol.for("apollo.result.streamInfo"),zf=Symbol.for("apollo.observableQuery.variablesUnknown"),Qn=Symbol.for("apollo.cache.handleIncremental");function Wf(...t){return Lf.bind(null,...t)}function qf(){throw new Error("only supported in development mode")}var mS=qf,gS=qf,yS=qf;var ks=class{isIncrementalResult(e){return!1}prepareRequest(e){return T(!en(["defer","stream"],e.query),69),e}extractErrors(){}startRequest=void 0};function oR(t){return t}var wn=class t{transform;cached;resultCache=new WeakSet;getCacheKey(e){return[e]}static identity(){return new t(oR,{cache:!1})}static split(e,n,r=t.identity()){return Object.assign(new t(o=>(e(o)?n:r).transformDocument(o),{cache:!1}),{left:n,right:r})}constructor(e,n={}){this.transform=e,n.getCacheKey&&(this.getCacheKey=n.getCacheKey),this.cached=n.cache!==!1,this.resetCache()}resetCache(){if(this.cached){let e=new Re;this.performWork=At(t.prototype.performWork.bind(this),{makeCacheKey:n=>{let r=this.getCacheKey(n);if(r)return T(Array.isArray(r),22),e.lookupArray(r)},max:he["documentTransform.cache"],cache:Xt})}}performWork(e){return Ge(e),this.transform(e)}transformDocument(e){if(this.resultCache.has(e))return e;let n=this.performWork(e);return this.resultCache.add(n),n}concat(e){return Object.assign(new t(n=>e.transformDocument(this.transformDocument(n)),{cache:!1}),{left:this,right:e})}left;right};var Ns,Kn=Object.assign(t=>{let e=Ns.get(t);return e||(e=Uo(t),Ns.set(t,e)),e},{reset(){Ns=new xr(he.print||2e3)}});Kn.reset();!1;function K(t){return!!(t&&typeof t=="object"&&typeof t.__ref=="string")}var vS={kind:E.FIELD,name:{kind:E.NAME,value:"__typename"}},Yn=Object.assign(function(t){return xe(t,{SelectionSet:{enter(e,n,r){if(r&&r.kind===E.OPERATION_DEFINITION)return;let{selections:o}=e;if(!o||o.some(c=>c.kind===E.FIELD&&(c.name.value==="__typename"||c.name.value.lastIndexOf("__",0)===0)))return;let s=r;if(!(s.kind===E.FIELD&&s.directives&&s.directives.some(c=>c.name.value==="export")))return C(v({},e),{selections:[...o,vS]})}}})},{added(t){return t===vS}});function xs(t){return t===7||t===8}function Ur(t){return!xs(t)}function Gf(t,{client:e}){let n={query:t.query,variables:t.variables||{},extensions:t.extensions||{},operationName:Se(t.query),operationType:Pe(t.query).operation},r=v({},t.context),o=s=>{typeof s=="function"?r=v(v({},r),s(i())):r=v(v({},r),s)},i=()=>Object.freeze(v({},r));return Object.defineProperty(n,"setContext",{enumerable:!1,value:o}),Object.defineProperty(n,"getContext",{enumerable:!1,value:i}),Object.defineProperty(n,"client",{enumerable:!1,value:e}),n}var Zn=class t{static empty(){return new t(()=>ue)}static from(e){if(e.length===0)return t.empty();let[n,...r]=e;return n.concat(...r)}static split(e,n,r=new t((o,i)=>i(o))){let o=new t((i,s)=>{let c=e(i);return!1,c?n.request(i,s):r.request(i,s)});return Object.assign(o,{left:n,right:r})}static execute(e,n,r){return e.request(Gf(n,r),()=>(!1,ue))}static concat(...e){return t.from(e)}constructor(e){e&&(this.request=e)}split(e,n,r){return this.concat(t.split(e,n,r))}concat(...e){return e.length===0?this:e.reduce(this.combine.bind(this),this)}combine(e,n){let r=new t((o,i)=>e.request(o,s=>n.request(s,i)));return Object.assign(r,{left:e,right:n})}request(e,n){throw ve(67)}left;right};var jr=Zn.execute;var qo=class{assumeImmutableResults=!1;lookupFragment(e){return null}getRootTypename(e){return Tf(e)}getScalar(e){}getScalarTypeForField(e,n){}configuresScalars(){return!1}serializeVariables(e,n){return n}batch(e){let n=typeof e.optimistic=="string"?e.optimistic:e.optimistic===!1?null:void 0,r;return this.performTransaction(()=>r=e.update(this),n),r}recordOptimisticTransaction(e,n){this.performTransaction(e,n)}transformDocument(e){return e}transformForLink(e){return e}identify(e){}gc(){return[]}modify(e){return!1}readQuery(e,n=!!e.optimistic){return this.read(C(v({},e),{rootId:e.id||"ROOT_QUERY",optimistic:n}))}fragmentWatches=new Re(!0);watchFragment(e){let{fragment:n,fragmentName:r,from:o}=e,i=this.getFragmentDoc(n,r),c=(Array.isArray(o)?o:[o]).map(p=>{let g=p==null?p:this.toCacheId(p);if(!1){let S=r||vs(n).name.value;g===void 0&&!1&&T.warn(126,S)}return g});if(!Array.isArray(o)){let p=this.watchSingleFragment(c[0],i,e);return o===null?p:Ms(p,Symbol.for("apollo.transform.individualResult"),g=>C(v({},g),{data:g.data??{}}))}let l;function u(p){let g=p.reduce((S,y,D)=>(S.data.push(y.data),S.complete&&=y.complete,S.dataState=S.complete?"complete":"partial",y.missing&&(S.missing||={},S.missing[D]=y.missing),S),{data:[],dataState:"complete",complete:!0});return Q(l,g)||(l=g),l}if(c.length===0)return sR;let d=!1,f=c.map(p=>this.watchSingleFragment(p,i,e)),h=_f(f).pipe(L(u),Ce({subscribe:()=>d=!0,unsubscribe:()=>d=!1}),dr({bufferSize:1,refCount:!0}));return Object.assign(h,{getCurrentResult:()=>{if(d&&l)return l;let p=f.map(g=>g.getCurrentResult());return u(p)}})}onAfterBroadcast=e=>e();watchSingleFragment(e,n,r){if(e===null)return iR;let{optimistic:o=!0,variables:i}=r,s=[n,De({id:e,optimistic:o,variables:i})],c=this.fragmentWatches.lookupArray(s);if(!c.observable){let f=function(p){let g=p.result;return(!d||!Ps(n,{data:d.data},{data:g},r.variables))&&(d={data:g,dataState:p.complete?"complete":"partial",complete:p.complete},p.missing&&(d.missing=p.missing.missing)),d};var l=f;let u=!1,d,h=new F(p=>{u=!0;let g=this.watch({variables:i,returnPartialData:!0,id:e,query:n,optimistic:o,immediate:!0,callback:S=>{h.dirty=!0,this.onAfterBroadcast(()=>{p.next(f(S)),h.dirty=!1})}});return()=>{u=!1,g(),this.fragmentWatches.removeArray(s)}}).pipe(ou(),Bt({connector:()=>new ar(1),resetOnRefCountZero:()=>ru(0)}));c.observable=Object.assign(h,{dirty:!1,getCurrentResult:()=>u&&d?d:f(this.diff({id:e,query:n,returnPartialData:!0,optimistic:o,variables:i}))})}return c.observable}getFragmentDoc=At(kf,{max:he["cache.fragmentQueryDocuments"]||1e3,cache:Xt,makeCacheKey:Wf(this)});readFragment(e,n=!!e.optimistic){let r=e.from!==void 0?this.toCacheId(e.from):e.id;return this.read(C(v({},e),{query:this.getFragmentDoc(e.fragment,e.fragmentName),rootId:r,optimistic:n}))}writeQuery(o){var i=o,{id:e,data:n}=i,r=pe(i,["id","data"]);return this.write(Object.assign(r,{dataId:e||"ROOT_QUERY",result:n}))}writeFragment(i){var s=i,{data:e,fragment:n,fragmentName:r}=s,o=pe(s,["data","fragment","fragmentName"]);let c=o.from!==void 0?this.toCacheId(o.from):o.id;return this.write(Object.assign(o,{query:this.getFragmentDoc(n,r),dataId:c,result:e}))}updateQuery(e,n){return this.batch({update(r){let o=r.readQuery(e),i=n(o);return i==null?o:(r.writeQuery(C(v({},e),{data:i})),i)}})}updateFragment(e,n){return this.batch({update(r){let o=r.readFragment(e),i=n(o);return i==null?o:(r.writeFragment(C(v({},e),{data:i})),i)}})}toCacheId(e){return typeof e=="string"?e:this.identify(e)}};!1;var SS=Object.freeze({data:null,dataState:"complete",complete:!0}),iR=Object.assign(new F(t=>{t.next(SS)}),{dirty:!1,getCurrentResult:()=>SS}),DS=Object.freeze({data:[],dataState:"complete",complete:!0}),sR=Object.assign(new F(t=>{t.next(DS)}),{getCurrentResult:()=>DS});var As=class t extends Error{message;path;query;variables;constructor(e,n,r,o){if(super(e),this.message=e,this.path=n,this.query=r,this.variables=o,this.name="MissingFieldError",Array.isArray(this.path)){this.missing=this.message;for(let i=this.path.length-1;i>=0;--i)this.missing={[this.path[i]]:this.missing}}else this.missing=this.path;this.__proto__=t.prototype}missing};var{hasOwnProperty:be}=Object.prototype;function Yc({__typename:t,id:e,_id:n},r){if(typeof t=="string"&&(r&&(r.keyObject=e!=null?{id:e}:n!=null?{_id:n}:void 0),e==null&&n!=null&&(e=n),e!=null))return`${t}:${typeof e=="number"||typeof e=="string"?e:JSON.stringify(e)}`}var aR={dataIdFromObject:Yc,resultCaching:!0};function bS(t){return it(aR,t)}function ES(t,e){return K(e)?t.get(e.__ref,"__typename"):e&&e.__typename}var Qf=/^[_a-z][_0-9a-z]*/i;function Dt(t){let e=t.match(Qf);return e?e[0]:t}function Qc(t,e,n){return de(e)?ae(e)?e.every(r=>Qc(t,r,n)):t.selections.every(r=>{if(ht(r)&&nn(r,n)){let o=$e(r);return be.call(e,o)&&(!r.selectionSet||Qc(r.selectionSet,e[o],n))}return!0}):!1}function Jn(t){return de(t)&&!K(t)&&!ae(t)}function TS(){return new Qe}function Zc(t,e){let n=dt(ft(t));return{fragmentMap:n,lookupFragment(r){let o=n[r];return!o&&e&&(o=e.lookup(r)),o||null}}}function Kc(t){switch(t.kind){case E.NAMED_TYPE:return t.name.value;case E.LIST_TYPE:return`[${Kc(t.type)}]`;case E.NON_NULL_TYPE:return Kc(t.type)}}var Jc={},Kf=()=>Jc,wS={},Br=class{policies;group;data={};constructor(e,n){this.policies=e,this.group=n}toObject(){return v({},this.data)}has(e){return this.lookup(e,!0)!==void 0}get(e,n){if(this.group.depend(e,n),be.call(this.data,e)){let r=this.data[e];if(r&&be.call(r,n))return r[n]}if(n==="__typename"&&be.call(this.policies.rootTypenamesById,e))return this.policies.rootTypenamesById[e];if(this instanceof on)return this.parent.get(e,n)}lookup(e,n){if(n&&this.group.depend(e,"__exists"),be.call(this.data,e))return this.data[e];if(this instanceof on)return this.parent.lookup(e,n);if(this.policies.rootTypenamesById[e])return{}}merge(e,n){let r;K(e)&&(e=e.__ref),K(n)&&(n=n.__ref);let o=typeof e=="string"?this.lookup(r=e):e,i=typeof n=="string"?this.lookup(r=n):n;if(!i)return;T(typeof r=="string",108),i=this.coerceStoreObject(i,(c,l)=>c.coerceToParsed(l),i.__typename||o?.__typename||this.policies.rootTypenamesById[r]);let s=new Qe({reconciler:cR}).merge(o,i);if(this.data[r]=s,s!==o&&(delete this.refs[r],this.group.caching)){let c={};o||(c.__exists=1),Object.keys(i).forEach(l=>{if(!o||o[l]!==s[l]){c[l]=1;let u=Dt(l);u!==l&&!this.policies.hasKeyArgs(s.__typename,u)&&(c[u]=1),s[l]===void 0&&!(this instanceof on)&&delete s[l]}}),c.__typename&&!(o&&o.__typename)&&this.policies.rootTypenamesById[r]===s.__typename&&delete c.__typename,Object.keys(c).forEach(l=>this.group.dirty(r,l))}}modify(e,n,r){let o=this.lookup(e);if(o){let i={},s=!1,c=!0,l={DELETE:Jc,INVALIDATE:wS,isReference:K,toReference:this.toReference,canRead:this.canRead,readField:(u,d)=>this.policies.readField(typeof u=="string"?{fieldName:u,from:d||tn(e)}:u,{store:this})};if(Object.keys(o).forEach(u=>{let d=Dt(u),f=o[u];if(f===void 0)return;let h=typeof n=="function"?n:n[u]||(r?void 0:n[d]);if(h){let p=h===Kf?Jc:h(qn(f),C(v({},l),{fieldName:d,storeFieldName:u,storage:this.getStorage(e,u)}));if(p===wS)this.group.dirty(e,u);else if(p===Jc&&(p=void 0),p!==f&&(i[u]=p,s=!0,f=p,!1)){let g=S=>{if(this.lookup(S.__ref)===void 0)return!1,!0};if(K(p))g(p);else if(Array.isArray(p)){let S=!1,y;for(let D of p){if(K(D)){if(S=!0,g(D))break}else if(typeof D=="object"&&D){let[w]=this.policies.identify(D);w&&(y=D)}if(S&&y!==void 0){!1;break}}}}}f!==void 0&&(c=!1)}),s)return this.merge(e,i),c&&(this instanceof on?this.data[e]=void 0:delete this.data[e],this.group.dirty(e,"__exists")),!0}return!1}delete(e,n,r){let o=this.lookup(e);if(o){let i=this.getFieldValue(o,"__typename"),s=n&&r?this.policies.getStoreFieldName({typename:i,fieldName:n,args:r}):n;return this.modify(e,s?{[s]:Kf}:Kf,!!r)}return!1}evict(e,n){let r=!1;return e.id&&(be.call(this.data,e.id)&&(r=this.delete(e.id,e.fieldName,e.args)),this instanceof on&&this!==n&&(r=this.parent.evict(e,n)||r),(e.fieldName||r)&&this.group.dirty(e.id,e.fieldName||"__exists")),r}clear(){this.replace(null)}extract(){let e=this.toObject();this.hasScalarConfig()&&(e=Object.fromEntries(Object.entries(e).map(([r,o])=>[r,o&&this.coerceStoreObject(o,(i,s)=>i.coerceToSerialized(s),o?.__typename||this.policies.rootTypenamesById[r])])));let n=[];return this.getRootIdSet().forEach(r=>{be.call(this.policies.rootTypenamesById,r)||n.push(r)}),n.length&&(e.__META={extraRootIds:n.sort()}),e}hasScalarConfig(){return!!this.policies.cache.config.scalars}coerceStoreObject(e,n,r=e.__typename){if(!r||!this.hasScalarConfig())return e;let o=!1,i=Object.entries(e).map(([s,c])=>{let l=Dt(s),u=this.policies.getScalarTypeForField(r,l),d=this.coerceValue(c,n,u,`${r}.${l}`);return o||=d!==c,[s,d]});return o?Object.fromEntries(i):e}coerceValue(e,n,r,o){if(e==null)return e;if(r){let i=Ar(r);if(i){if(Array.isArray(e))return e.map(c=>this.coerceValue(c,n,i[1],o));!1}let s=this.policies.cache.getScalar(xt(r));if(s)return n(s,e)}return Array.isArray(e)?e.map(i=>this.coerceValue(i,n,r,o)):Ts(e)&&"__typename"in e?this.coerceStoreObject(e,n):e}replace(e){if(Object.keys(this.data).forEach(r=>{e&&be.call(e,r)||this.delete(r)}),e){let n=e,{__META:r}=n,o=pe(n,["__META"]);Object.keys(o).forEach(i=>{this.merge(i,o[i])}),r&&r.extraRootIds.forEach(this.retain,this)}}rootIds={};retain(e){return this.rootIds[e]=(this.rootIds[e]||0)+1}release(e){if(this.rootIds[e]>0){let n=--this.rootIds[e];return n||delete this.rootIds[e],n}return 0}getRootIdSet(e=new Set){return Object.keys(this.rootIds).forEach(e.add,e),this instanceof on?this.parent.getRootIdSet(e):Object.keys(this.policies.rootTypenamesById).forEach(e.add,e),e}gc(){let e=this.getRootIdSet(),n=this.toObject();e.forEach(o=>{be.call(n,o)&&(Object.keys(this.findChildRefIds(o)).forEach(e.add,e),delete n[o])});let r=Object.keys(n);if(r.length){let o=this;for(;o instanceof on;)o=o.parent;r.forEach(i=>o.delete(i))}return r}refs={};findChildRefIds(e){if(!be.call(this.refs,e)){let n=this.refs[e]={},r=this.data[e];if(!r)return n;let o=new Set([r]);o.forEach(i=>{K(i)&&(n[i.__ref]=!0),de(i)&&Object.keys(i).forEach(s=>{let c=i[s];de(c)&&o.add(c)})})}return this.refs[e]}makeCacheKey(){return this.group.keyMaker.lookupArray(arguments)}getFieldValue=(e,n)=>qn(K(e)?this.get(e.__ref,n):e&&e[n]);canRead=e=>K(e)?this.has(e.__ref):typeof e=="object";toReference=(e,n)=>{if(typeof e=="string")return tn(e);if(K(e))return e;let[r]=this.policies.identify(e);if(r){let o=tn(r);return n&&this.merge(r,e),o}};get supportsResultCaching(){return this.group.caching}},Xc=class{caching;parent;d=null;keyMaker;constructor(e,n=null){this.caching=e,this.parent=n,this.resetCaching()}resetCaching(){this.d=this.caching?Is():null,this.keyMaker=new Re}depend(e,n){if(this.d){this.d(Yf(e,n));let r=Dt(n);r!==n&&this.d(Yf(e,r)),this.parent&&this.parent.depend(e,n)}}dirty(e,n){this.d&&this.d.dirty(Yf(e,n),n==="__exists"?"forget":"setDirty")}};function Yf(t,e){return e+"#"+t}function Xf(t,e){Cn(t)&&t.group.depend(e,"__exists")}var Zf=class extends Br{constructor({policies:e,resultCaching:n=!0,seed:r}){super(e,new Xc(n)),r&&this.replace(r)}stump=new Jf(this);addLayer(e,n){return this.stump.addLayer(e,n)}removeLayer(){return this}storageTrie=new Re;getStorage(){return this.storageTrie.lookupArray(arguments)}};Br.Root=Zf;var on=class t extends Br{id;parent;replay;group;constructor(e,n,r,o){super(n.policies,o),this.id=e,this.parent=n,this.replay=r,this.group=o,r(this)}addLayer(e,n){return new t(e,this,n,this.group)}removeLayer(e){let n=this.parent.removeLayer(e);return e===this.id?(this.group.caching&&Object.keys(this.data).forEach(r=>{let o=this.data[r],i=n.lookup(r);i?o?o!==i&&Object.keys(o).forEach(s=>{Q(o[s],i[s])||this.group.dirty(r,s)}):(this.group.dirty(r,"__exists"),Object.keys(i).forEach(s=>{this.group.dirty(r,s)})):this.delete(r)}),n):n===this.parent?this:n.addLayer(this.id,this.replay)}toObject(){return v(v({},this.parent.toObject()),this.data)}findChildRefIds(e){let n=this.parent.findChildRefIds(e);return be.call(this.data,e)?v(v({},n),super.findChildRefIds(e)):n}getStorage(...e){let n=this.parent;for(;n.parent;)n=n.parent;return n.getStorage(...e)}},Jf=class extends on{constructor(e){super("EntityStore.Stump",e,()=>{},new Xc(e.group.caching,e.group))}removeLayer(){return this}merge(e,n){return this.parent.merge(e,n)}};function cR(t,e,n){let r=t[n],o=e[n];return Q(r,o)?r:o}function Cn(t){return!!(t&&t.supportsResultCaching)}var Go=new Tn;function CS(t){let e=t.directives?.find(({name:r})=>r.value==="unmask");if(!e)return"mask";let n=e.arguments?.find(({name:r})=>r.value==="mode");return!1,n&&"value"in n.value&&n.value.value==="migrate"?"migrate":"unmask"}function el(t,e,n){return Go.withValue(!0,()=>{let r=Os(t,e,n,!1);return Object.isFrozen(t)&&qn(r),r})}function lR(t,e){if(e.has(t))return e.get(t);let n=Array.isArray(t)?[]:{};return e.set(t,n),n}function Os(t,e,n,r,o){let{knownChanged:i}=n,s=lR(t,n.mutableTargets);if(Array.isArray(t)){for(let[c,l]of Array.from(t.entries())){if(l===null){s[c]=null;continue}let u=Os(l,e,n,r,void 0);i.has(u)&&i.add(s),s[c]=u}return i.has(s)?s:t}for(let c of e.selections){let l;if(r&&i.add(s),c.kind===E.FIELD){let u=$e(c),d=c.selectionSet;if(l=s[u]||t[u],l===void 0)continue;if(d&&l!==null){let f=Os(t[u],d,n,r,void 0);i.has(f)&&(l=f)}s[u]=l,!1}if(c.kind===E.INLINE_FRAGMENT&&(!c.typeCondition||n.cache.fragmentMatches(c,t.__typename))&&(l=Os(t,c.selectionSet,n,r,o)),c.kind===E.FRAGMENT_SPREAD){let u=c.name.value,d=n.fragmentMap[u]||(n.fragmentMap[u]=n.cache.lookupFragment(u));T(d,41,u);let f=CS(c);f!=="mask"&&(l=Os(t,d.selectionSet,n,f==="migrate",o))}i.has(l)&&i.add(s)}return"__typename"in t&&!("__typename"in s)&&(s.__typename=t.__typename),Object.keys(s).length!==Object.keys(t).length&&i.add(s),i.has(s)?s:t}function uR(t,e,n,r,o){let i=()=>(Go.getValue()||(!1,i=()=>e),e);return{get(){return i()},set(s){i=()=>s},enumerable:!0,configurable:!0}}function eh(t,e,n,r){let o=e.definitions.filter(s=>s.kind===E.FRAGMENT_DEFINITION);typeof r>"u"&&(T(o.length===1,43,o.length),r=o[0].name.value);let i=o.find(s=>s.name.value===r);return T(!!i,44,r),t==null||Q(t,{})?t:el(t,i.selectionSet,{operationType:"fragment",operationName:i.name.value,fragmentMap:dt(ft(e)),cache:n,mutableTargets:new WeakMap,knownChanged:new WeakSet})}function th(t,e,n){let r=Pe(e);return T(r,45),t==null?t:el(t,r.selectionSet,{operationType:r.operation,operationName:r.name?.value,fragmentMap:dt(ft(e)),cache:n,mutableTargets:new WeakMap,knownChanged:new WeakSet})}var IS={};function nh(t){let e=JSON.stringify(t);return IS[e]||(IS[e]={})}function rh(t){let e=nh(t);return e.keyFieldsFn||(e.keyFieldsFn=(n,r)=>{let o=(s,c)=>r.readField(c,s),i=r.keyObject=ih(t,s=>{let c=Qo(r.storeObject,s,o);return c===void 0&&n!==r.storeObject&&be.call(n,s[0])&&(c=Qo(n,s,PS)),T(c!==void 0,113,s.join("."),n),c});return`${r.typename}:${JSON.stringify(i)}`})}function oh(t){let e=nh(t);return e.keyArgsFn||(e.keyArgsFn=(n,{field:r,variables:o,fieldName:i})=>{let s=ih(t,l=>{let u=l[0],d=u.charAt(0);if(d==="@"){if(r&&Fr(r.directives)){let f=u.slice(1),h=r.directives.find(g=>g.name.value===f),p=h&&Nr(h,o);return p&&Qo(p,l.slice(1))}return}if(d==="$"){let f=u.slice(1);if(o&&be.call(o,f)){let h=l.slice(0);return h[0]=f,Qo(o,h)}return}if(n)return Qo(n,l)}),c=JSON.stringify(s);return(n||c!=="{}")&&(i+=":"+c),i})}function ih(t,e){let n=new Qe;return RS(t).reduce((r,o)=>{let i=e(o);if(i!==void 0){for(let s=o.length-1;s>=0;--s)i={[o[s]]:i};r=n.merge(r,i)}return r},{})}function RS(t){let e=nh(t);if(!e.paths){let n=e.paths=[],r=[];t.forEach((o,i)=>{ae(o)?(RS(o).forEach(s=>n.push(r.concat(s))),r.length=0):(r.push(o),ae(t[i+1])||(n.push(r.slice(0)),r.length=0))})}return e.paths}function PS(t,e){return t[e]}function Qo(t,e,n){return n=n||PS,MS(e.reduce(function r(o,i){return ae(o)?o.map(s=>r(s,i)):o&&n(o,i)},t))}function MS(t){return de(t)?ae(t)?t.map(MS):ih(Object.keys(t).sort(),e=>Qo(t,e)):t}var sh=new Tn,_S=new WeakMap;function Fs(t){let e=_S.get(t);return e||_S.set(t,e={vars:new Set,dep:Is()}),e}function ah(t){Fs(t).vars.forEach(e=>e.forgetCache(t))}function kS(t){Fs(t).vars.forEach(e=>e.attachCache(t))}function ch(t){let e=new Set,n=new Set,r=function(i){if(arguments.length>0){if(t!==i){t=i,e.forEach(c=>{Fs(c).dep.dirty(r),dR(c)});let s=Array.from(n);n.clear(),s.forEach(c=>c(t))}}else{let s=sh.getValue();s&&(o(s),Fs(s).dep(r))}return t};r.onNextChange=i=>(n.add(i),()=>{n.delete(i)});let o=r.attachCache=i=>(e.add(i),Fs(i).vars.add(r),r);return r.forgetCache=i=>e.delete(i),r}function dR(t){t.broadcastWatches&&t.broadcastWatches()}function uh(t){return t.args!==void 0?t.args:t.field?Nr(t.field,t.variables):null}var fR=()=>{},NS=(t,e)=>e.fieldName,xS=(t,e,{mergeObjects:n})=>n(t,e),AS=(t,e)=>e,OS=(t,e,{streamFieldInfo:n,existingData:r})=>{if(!t&&!r)return e;let o=[],i=t??r,s=n?.isLastChunk?e.length:Math.max(i.length,e.length);for(let c=0;c<s;c++)o[c]=e[c]===void 0?i[c]:e[c];return o},tl=class{config;typePolicies={};toBeAdded={};supertypeMap=new Map;fuzzySubtypes=new Map;cache;rootIdsByTypename={};rootTypenamesById={};usingPossibleTypes=!1;constructor(e){this.config=e,this.config=v({dataIdFromObject:Yc},e),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),e.possibleTypes&&this.addPossibleTypes(e.possibleTypes),e.typePolicies&&this.addTypePolicies(e.typePolicies)}identify(e,n){let r=this,o=n&&(n.typename||n.storeObject?.__typename)||e.__typename;if(o===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];let i=n&&n.storeObject||e,s=C(v({},n),{typename:o,storeObject:i,readField:n&&n.readField||((...d)=>{let f=nl(d,i);return r.readField(f,{store:r.cache.data,variables:f.variables})})}),c,l=o&&this.getTypePolicy(o),u=l&&l.keyFn||this.config.dataIdFromObject;return Go.withValue(!0,()=>{for(;u;){let d=u(v(v({},e),i),s);if(ae(d))u=rh(d);else{c=d;break}}}),c=c?String(c):void 0,s.keyObject?[c,s.keyObject]:[c]}addTypePolicies(e){Object.keys(e).forEach(n=>{let c=e[n],{queryType:r,mutationType:o,subscriptionType:i}=c,s=pe(c,["queryType","mutationType","subscriptionType"]);r&&this.setRootTypename("Query",n),o&&this.setRootTypename("Mutation",n),i&&this.setRootTypename("Subscription",n),be.call(this.toBeAdded,n)?this.toBeAdded[n].push(s):this.toBeAdded[n]=[s]})}updateTypePolicy(e,n,r){let o=this.getTypePolicy(e),{keyFields:i,fields:s}=n;function c(l,u){l.merge=typeof u=="function"?u:u===!0?xS:u===!1?AS:l.merge}c(o,n.merge),o.keyFn=i===!1?fR:ae(i)?rh(i):typeof i=="function"?i:o.keyFn,s&&Object.keys(s).forEach(l=>{let u=r[l];(!u||u?.typename!==e)&&(u=r[l]={typename:e});let d=s[l];if(typeof d=="function")u.scalar?!1:u.read=d;else{let{keyArgs:f,read:h,merge:p,scalar:g}=d;g&&(u.scalar=g),u.scalar&&(!1,u.read=h=void 0,u.merge=p=void 0),u.keyFn=f===!1?NS:ae(f)?oh(f):typeof f=="function"?f:u.keyFn,typeof h=="function"&&(u.read=h),c(u,p)}u.read&&u.merge&&(u.keyFn=u.keyFn||NS)})}setRootTypename(e,n=e){let r="ROOT_"+e.toUpperCase(),o=this.rootTypenamesById[r];n!==o&&(T(!o||o===e,114,e),o&&delete this.rootIdsByTypename[o],this.rootIdsByTypename[n]=r,this.rootTypenamesById[r]=n)}addPossibleTypes(e){this.usingPossibleTypes=!0,Object.keys(e).forEach(n=>{this.getSupertypeSet(n,!0),e[n].forEach(r=>{this.getSupertypeSet(r,!0).add(n);let o=r.match(Qf);(!o||o[0]!==r)&&this.fuzzySubtypes.set(r,new RegExp(r))})})}getTypePolicy(e){if(!be.call(this.typePolicies,e)){let r=this.typePolicies[e]={};r.fields={};let o=this.supertypeMap.get(e);!o&&this.fuzzySubtypes.size&&(o=this.getSupertypeSet(e,!0),this.fuzzySubtypes.forEach((i,s)=>{if(i.test(e)){let c=this.supertypeMap.get(s);c&&c.forEach(l=>o.add(l))}})),o&&o.size&&o.forEach(i=>{let l=this.getTypePolicy(i),{fields:s}=l,c=pe(l,["fields"]);Object.assign(r,c),Object.assign(r.fields,s)})}let n=this.toBeAdded[e];return n&&n.length&&n.splice(0).forEach(r=>{this.updateTypePolicy(e,r,this.typePolicies[e].fields)}),this.typePolicies[e]}getFieldPolicy(e,n){if(e)return this.getTypePolicy(e).fields[n]}getSupertypeSet(e,n){let r=this.supertypeMap.get(e);return!r&&n&&this.supertypeMap.set(e,r=new Set),r}fragmentMatches(e,n,r,o){if(!e.typeCondition)return!0;if(!n)return!1;let i=e.typeCondition.name.value;if(n===i)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(i)){let s=this.getSupertypeSet(n,!0),c=[s],l=f=>{let h=this.getSupertypeSet(f,!1);h&&h.size&&c.indexOf(h)<0&&c.push(h)},u=!!(r&&this.fuzzySubtypes.size),d=!1;for(let f=0;f<c.length;++f){let h=c[f];if(h.has(i))return s.has(i)||(d&&!1&&T.warn(115,n,i),s.add(i)),!0;h.forEach(l),u&&f===c.length-1&&Qc(e.selectionSet,r,o)&&(u=!1,d=!0,this.fuzzySubtypes.forEach((p,g)=>{let S=n.match(p);S&&S[0]===n&&l(g)}))}}return!1}hasKeyArgs(e,n){let r=this.getFieldPolicy(e,n);return!!(r&&r.keyFn)}getStoreFieldName(e){let{typename:n,fieldName:r}=e,o=this.getFieldPolicy(n,r),i,s=o&&o.keyFn;if(s&&n){let c={typename:n,fieldName:r,field:e.field||null,variables:e.variables},l=uh(e);for(;s;){let u=s(l,c);if(ae(u))s=oh(u);else{i=u||r;break}}}return i===void 0&&(i=e.field?Bf(e.field,e.variables):Es(r,uh(e))),i===!1?r:r===Dt(i)?i:r+":"+i}getScalarTypeForField(e,n){return this.getFieldPolicy(e,n)?.scalar}readField(e,n){let r=e.from;if(!r||!(e.field||e.fieldName))return;if(e.typename===void 0){let d=n.store.getFieldValue(r,"__typename");d&&(e.typename=d)}let i=this.getStoreFieldName(e),s=Dt(i),c=n.store.getFieldValue(r,i),l=this.getFieldPolicy(e.typename,s),u=l&&l.read;if(u){let d=FS(this,r,e,n,n.store.getStorage(K(r)?r.__ref:r,i));return sh.withValue(this.cache,u,[c,d])}return c}getReadFunction(e,n){let r=this.getFieldPolicy(e,n);return r&&r.read}getMergeFunction(e,n,r){let o=this.getFieldPolicy(e,n),i=o&&o.merge;return!i&&r&&(o=this.getTypePolicy(r),i=o&&o.merge),i}runMergeFunction(e,n,{field:r,typename:o,merge:i,path:s},c,l){let u=e;if(i===xS)return LS(c.store)(e,n);if(i===AS)return n;c.overwrite&&(e=void 0);let d=c.extensions?.[rn]?.deref()?.peekArray(s);if(d){let{current:h,previous:p}=d;if(p&&Q(p.incoming,n)&&Q(p.streamFieldInfo,h))return p.result}let f=i(e,n,hR(this,void 0,{typename:o,fieldName:r.name.value,field:r,variables:c.variables,path:s},c,l||{},u));return d&&(d.previous={incoming:n,streamFieldInfo:d.current,result:f}),f}};function FS(t,e,n,r,o){let i=t.getStoreFieldName(n),s=Dt(i),c=n.variables||r.variables,{toReference:l,canRead:u}=r.store;return{args:uh(n),field:n.field||null,fieldName:s,storeFieldName:i,variables:c,isReference:K,toReference:l,storage:o,cache:t.cache,canRead:u,readField(...d){return t.readField(nl(d,e,c),r)},mergeObjects:LS(r.store)}}function hR(t,e,n,r,o,i){var l;let s=C(v({},FS(t,e,n,r,o)),{extensions:r.extensions,existingData:i}),c=r.extensions;if(c&&rn in c){let u=c,{[l=rn]:d}=u,f=pe(u,[na(l)]),h=d?.deref()?.peekArray(n.path);h&&(s.streamFieldInfo=h.current),s.extensions=Object.keys(f).length===0?void 0:f}return s}function nl(t,e,n){let{0:r,1:o,length:i}=t,s;return typeof r=="string"?s={fieldName:r,from:i>1?o:e}:(s=v({},r),be.call(s,"from")||(s.from=e)),!1,s.variables===void 0&&(s.variables=n),s}function LS(t){return function(n,r){if(ae(n)||ae(r))throw ve(117);if(de(n)&&de(r)){let o=t.getFieldValue(n,"__typename"),i=t.getFieldValue(r,"__typename");if(o&&i&&o!==i)return r;if(K(n)&&Jn(r))return t.merge(n.__ref,r),n;if(Jn(n)&&K(r))return t.merge(n,r.__ref),r;if(Jn(n)&&Jn(r))return v(v({},n),r)}return r}}function lh(t,e,n,r){!1}function HS(t){return[t.selectionSet,t.objectOrReference,t.context]}var rl=class{executeSelectionSet;executeSubSelectedArray;prunePartialStreamArray;prunePartialBoundaries;config;knownResults=new WeakMap;keyMaker=new Re;constructor(e){this.config=e,this.executeSelectionSet=At(n=>{let r=HS(n),o=this.executeSelectionSet.peek(...r);return o||(Xf(n.context.store,n.enclosingRef.__ref),this.execSelectionSetImpl(n))},{max:he["inMemoryCache.executeSelectionSet"]||5e4,keyArgs:HS,makeCacheKey(n,r,o){if(Cn(o.store))return o.store.makeCacheKey(n,K(r)?r.__ref:r,o.varString)}}),this.executeSubSelectedArray=At(n=>(Xf(n.context.store,n.enclosingRef.__ref),this.execSubSelectedArrayImpl(n)),{max:he["inMemoryCache.executeSubSelectedArray"]||1e4,makeCacheKey({field:n,array:r,context:o}){if(Cn(o.store))return o.store.makeCacheKey(n,r,o.varString)}}),this.prunePartialBoundaries=At(n=>this.prunePartialBoundariesImpl(n),{max:he["inMemoryCache.prunePartialBoundaries"]||2e4,makeCacheKey:({boundaries:n,context:r,selectionSet:o})=>{if(Cn(r.store))return this.keyMaker.lookup(o,n,r.streamInfo,r.deferInfo)}}),this.prunePartialStreamArray=At(n=>{let{field:r,context:o,path:i}=n;return Vo(r,o.variables)&&o.streamInfo?.lookupArray(i).state.depend(),this.prunePartialStreamArrayImpl(n)},{max:he["inMemoryCache.prunePartialStreamArray"]||2e4,makeCacheKey:({field:n,context:r,boundaries:o})=>{if(Cn(r.store))return this.keyMaker.lookup(n,o,r.streamInfo,r.deferInfo)}})}diffQueryAgainstStore(c){var l=c,{store:e,query:n,rootId:r="ROOT_QUERY",variables:o,returnPartialData:i=!0}=l,s=pe(l,["store","query","rootId","variables","returnPartialData"]);let u=Object.hasOwn(s,Qn),d=this.config.cache.policies;o=it(Or(Ss(n)),o);let f=tn(r),h=v(v({store:e,query:n,policies:d,variables:o,varString:De(o)},Zc(n,this.config.fragments)),s[Qn]),p=this.executeSelectionSet({selectionSet:bn(n).selectionSet,objectOrReference:f,enclosingRef:f,context:h});if(u&&gR(p,h)){let j=this.prunePartialBoundaries({selectionSet:bn(n).selectionSet,data:p.result,boundaries:p.partialBoundaries,context:h,path:[]});(!(p.result!==j.result)||!i)&&(p={result:j.result,partialBoundaries:p.partialBoundaries,dataState:j.dataState})}let{result:g,dataState:S,missing:y}=p,D=!!y&&(S!=="streaming"||!u);S==="streaming"&&Object.keys(g).length===0&&(S="empty");let w;(S==="deferPartial"||S==="streamPartial"||S==="streaming"&&!u)&&(S="partial"),S==="partial"&&!i&&(S="empty");let I=S==="complete",M={result:I||S==="streaming"||i&&Object.keys(g).length?g:null,complete:I,get missing(){return D&&(w||=new As(pR(y),y,n,o)),w}};return u&&(M.dataState=S),M}isFresh(e,n,r,o){if(Cn(o.store)&&this.knownResults.get(e)===r){let i=this.executeSelectionSet.peek(r,n,o);if(i&&e===i.result)return!0}return!1}execSelectionSetImpl({selectionSet:e,objectOrReference:n,enclosingRef:r,context:o}){if(K(n)&&!o.policies.rootTypenamesById[n.__ref]&&!o.store.has(n.__ref))return{result:{},dataState:"empty",missing:`Dangling reference to missing ${n.__ref} object`,partialBoundaries:new Ls};let{variables:i,policies:s,store:c}=o,l=c.getFieldValue(n,"__typename"),u=[],d,f,h=new Qe,p=new Ls;typeof l=="string"&&!s.rootIdsByTypename[l]&&u.push({__typename:l});function g(I,R){return I.missing&&(f=h.merge(f,{[R]:I.missing})),I}new Set(e.selections).forEach(I=>{if(nn(I,i))if(ht(I)){let R=s.readField({fieldName:I.name.value,field:I,variables:o.variables,from:n},o),M=$e(I);if(R===void 0){if(!Yn.added(I)){let j=K(n)?n.__ref:n?s.identify(n)[0]:void 0;f=h.merge(f,{[M]:`Can't find field '${I.name.value}' on ${j?`${j} object`:`object ${JSON.stringify(n||{},null,2)}`}`}),d=Ot(d,"empty")}}else if(ae(R))if(R.length>0){let j=g(this.executeSubSelectedArray({field:I,array:R,enclosingRef:r,context:o}),M);R=j.result,d=Ot(d,j.dataState),p.set(M,j.partialBoundaries)}else d=Ot(d,"complete");else if(!I.selectionSet)Yn.added(I)||(d=Ot(d,"complete"));else if(R!=null){if(!1){let Ee=I.name.value;if(l){let an=s.getFieldPolicy(l,Ee);an?.scalar&&!1&&T.warn(119,`${l}.${Ee}`,an.scalar)}}let j=g(this.executeSelectionSet({selectionSet:I.selectionSet,objectOrReference:R,enclosingRef:K(R)?R:r,context:o}),M);R=j.result,p.set(M,j.partialBoundaries),d=Ot(d,j.dataState==="empty"?"partial":j.dataState)}R!==void 0&&u.push({[M]:R})}else{let R=Nt(I,o.lookupFragment);if(!R&&I.kind===E.FRAGMENT_SPREAD)throw ve(120,I.name.value);if(R&&s.fragmentMatches(R,l)){let M=Wc(I,o.variables),j=this.execSelectionSetImpl({selectionSet:R.selectionSet,objectOrReference:n,enclosingRef:r,context:o}),{result:Ee,dataState:an}=j;p.merge(j.partialBoundaries),Ee!==void 0&&u.push(Ee),j.missing&&(f=h.merge(f,j.missing)),M&&(an==="partial"||an==="empty")&&p.add(I),d=Ot(d,M?an==="empty"?"streaming":an==="partial"?"deferPartial":an:an)}}}),d||="complete";let D={result:Hf(u),missing:f,dataState:d,partialBoundaries:p},w=qn(D);return w.result&&this.knownResults.set(w.result,e),w}execSubSelectedArrayImpl({field:e,array:n,enclosingRef:r,context:o}){let i="complete",s,c=new Qe,l=new Ls,u=Vo(e,o.variables);function d(f,h){return f.missing&&(s=c.merge(s,{[h]:f.missing})),f.result}return e.selectionSet&&(n=n.filter(f=>f===void 0||o.store.canRead(f))),n=n.map((f,h)=>{if(f===null)return null;let p;if(ae(f)?p=this.executeSubSelectedArray({field:e,array:f,enclosingRef:r,context:o}):e.selectionSet&&(p=this.executeSelectionSet({selectionSet:e.selectionSet,objectOrReference:f,enclosingRef:K(f)?f:r,context:o})),p){let{dataState:g}=p;return l.set(h,g==="partial"?p.partialBoundaries.clone().add(e):p.partialBoundaries),i=Ot(i,u&&g==="partial"?"streamPartial":g),d(p,h)}return!1,f}),{result:n,dataState:i,missing:s,partialBoundaries:l}}prunePartialBoundariesImpl({boundaries:e,context:n,data:r,path:o,selectionSet:i}){let{variables:s,lookupFragment:c,policies:l}=n;if(r==null||!e)return{result:r,dataState:"complete"};let u=new Qe,d=!1,f="complete",h={};Object.hasOwn(r,"__typename")&&(h.__typename=r.__typename);let p=new Set(i.selections);return p.forEach(g=>{if(!nn(g,s))return;if(ht(g)){let D=$e(g);if(!Object.hasOwn(r,D))return;let w=r[D];if(Array.isArray(w)){let I=this.prunePartialStreamArray({field:g,array:w,boundaries:e.getChild(D),context:n,path:o.concat(D)});d||=I.result!==w,h[D]=I.result,f=Ot(f,I.dataState)}else if(!g.selectionSet)h[D]=w;else{let I=this.prunePartialBoundaries({data:w,selectionSet:g.selectionSet,boundaries:e.getChild(D),context:n,path:o.concat(D)});d||=I.result!==w,f=Ot(f,I.dataState),h[D]=Object.hasOwn(h,D)?u.merge(h[D],I.result):I.result}return}let S=Nt(g,c),y=!1;if(n.deferInfo&&Wc(g,s)){let D=g.directives?.find(I=>I.name.value==="defer"),w=D&&Df(D,"label",E.STRING);y=!!n.deferInfo.peekArray(o.concat(w||[]))}S&&l.fragmentMatches(S,r.__typename)&&(e.has(g)||y?f=Ot(f,"streaming"):S.selectionSet.selections.forEach(p.add,p))}),Object.keys(h).length!==Object.keys(r).length?d=!0:d&&e.hasSelections()&&(d=!Q(h,r)),{result:d?h:r,dataState:f}}prunePartialStreamArrayImpl({field:e,array:n,boundaries:r,context:o,path:i}){if(!r)return{result:n,dataState:"complete"};let s=!1,c="complete",l=[],u=o.streamInfo?.peekArray(i)?.state,d=Math.min(n.length,u?.truncate?u.streamPosition:Number.MAX_SAFE_INTEGER);for(let f=0;f<d;f++){let h=n[f],p={result:h,dataState:"complete"};if(r.getChild(f)?.has(e)){u?(u.truncate=!0,l=l.slice(0,u.streamPosition)):(l=[],c="complete");break}Array.isArray(h)?p=this.prunePartialStreamArray({field:e,array:h,boundaries:r.getChild(f),context:o,path:i.concat(f)}):e.selectionSet&&(p=this.prunePartialBoundaries({data:h,selectionSet:e.selectionSet,boundaries:r.getChild(f),context:o,path:i.concat(f)})),l.push(p.result),s||=p.result!==h,c=Ot(c,p.dataState)}return s||=l.length!==n.length,{result:s?l:n,dataState:c}}};function pR(t){try{JSON.stringify(t,(e,n)=>{if(typeof n=="string")throw n;return n})}catch(e){return e}}function mR(t,e,n){if(!e.selectionSet){let r=new Set([n]);r.forEach(o=>{de(o)&&(T(!K(o),121,ES(t,o),e.name.value),Object.values(o).forEach(r.add,r))})}}var Ls=class t{selections=new Set;children=new Map;add(e){return this.selections.add(e),this}has(e){return this.selections.has(e)}hasSelections(){return this.selections.size>0}getChild(e){return this.children.get(e)}clone(){return new t().merge(this)}set(e,n){let r=this.getChild(e);this.children.set(e,r?r.clone().merge(n):n)}merge(e){return e.selections.forEach(n=>this.add(n)),e.children.forEach((n,r)=>this.set(r,n)),this}};function gR({dataState:t},e){return t==="deferPartial"||t==="streamPartial"?!0:t==="complete"||t==="streaming"?!!(e.streamInfo||e.deferInfo):!1}var yR={empty:{complete:"partial",deferPartial:"partial",streaming:"partial",streamPartial:"partial"},deferPartial:{empty:"partial"},streamPartial:{deferPartial:"deferPartial",empty:"partial"},streaming:{deferPartial:"deferPartial",empty:"partial",streamPartial:"streamPartial"},complete:{deferPartial:"deferPartial",streaming:"streaming",streamPartial:"streamPartial",empty:"partial"},partial:{}};function Ot(t,e){return e==="partial"?"partial":!t||t===e?e:yR[t][e]||t}function dh(t,e,n){let r=`${e}${n}`,o=t.flavors.get(r);return o||t.flavors.set(r,o=t.clientOnly===e&&t.deferred===n?t:C(v({},t),{clientOnly:e,deferred:n})),o}var ol=class{cache;reader;fragments;constructor(e,n,r){this.cache=e,this.reader=n,this.fragments=r}writeToStore(e,{query:n,result:r,dataId:o,variables:i,overwrite:s,extensions:c}){let l=Pe(n),u=TS();i=v(v({},Or(l)),i);let d=C(v({store:e,written:{},merge(h,p){return u.merge(h,p)},variables:i,varString:De(i)},Zc(n,this.fragments)),{overwrite:!!s,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map,extensions:c}),f=this.processSelectionSet({result:r||{},dataId:o,selectionSet:l.selectionSet,mergeTree:{map:new Map},context:d,path:[]});if(!K(f))throw ve(122,r);return d.incomingById.forEach(({storeObject:h,mergeTree:p,fieldNodeSet:g},S)=>{let y=tn(S);if(p&&p.map.size){let D=this.applyMerges(p,y,h,d);if(K(D))return;h=D}if(!1){let D={};g.forEach(R=>{R.selectionSet&&(D[R.name.value]=!0)});let w=R=>D[Dt(R)]===!0,I=R=>{let M=p&&p.map.get(R);return!!(M&&M.info&&M.info.merge)};Object.keys(h).forEach(R=>{w(R)&&!I(R)&&vR(y,h,R,d.store)})}e.merge(S,h)}),e.retain(f.__ref),f}processSelectionSet({dataId:e,result:n,selectionSet:r,context:o,mergeTree:i,path:s}){let{policies:c}=this.cache,l={},u=e&&c.rootTypenamesById[e]||hh(n,r,o.fragmentMap)||e&&o.store.get(e,"__typename");typeof u=="string"&&(l.__typename=u);let d=(...h)=>{let p=nl(h,l,o.variables);if(K(p.from)){let g=o.incomingById.get(p.from.__ref);if(g){let S=c.readField(C(v({},p),{from:g.storeObject}),o);if(S!==void 0)return S}}return c.readField(p,o)},f=new Set;this.flattenFields(r,n,o,u).forEach((h,p)=>{let g=$e(p),S=n[g],y=[...s,p.name.value];if(f.add(p),S!==void 0){let D=c.getStoreFieldName({typename:u,fieldName:p.name.value,field:p,variables:h.variables}),w=US(i,D),I=this.processFieldValue(S,p,p.selectionSet?dh(h,!1,!1):h,w,y),R;p.selectionSet&&(K(I)||Jn(I))&&(R=d("__typename",I));let M=c.getMergeFunction(u,p.name.value,R);M?w.info={field:p,typename:u,merge:M,path:y}:h.extensions?.[rn]&&Array.isArray(I)&&Vo(p,h.variables)?w.info={field:p,typename:u,merge:OS,path:y}:jS(i,D),l=h.merge(l,{[D]:I})}else!1});try{let[h,p]=c.identify(n,{typename:u,selectionSet:r,fragmentMap:o.fragmentMap,storeObject:l,readField:d});e=e||h,p&&(l=o.merge(l,p))}catch(h){if(!e)throw h}if(typeof e=="string"){let h=tn(e),p=o.written[e]||(o.written[e]=[]);if(p.indexOf(r)>=0||(p.push(r),this.reader&&this.reader.isFresh(n,h,r,o)))return h;let g=o.incomingById.get(e);return g?(g.storeObject=o.merge(g.storeObject,l),g.mergeTree=fh(g.mergeTree,i),f.forEach(S=>g.fieldNodeSet.add(S))):o.incomingById.set(e,{storeObject:l,mergeTree:il(i)?void 0:i,fieldNodeSet:f}),h}return l}processFieldValue(e,n,r,o,i){return!n.selectionSet||e===null?e:ae(e)?e.map((s,c)=>{let l=this.processFieldValue(s,n,r,US(o,c),[...i,c]);return jS(o,c),l}):this.processSelectionSet({result:e,selectionSet:n.selectionSet,context:r,mergeTree:o,path:i})}flattenFields(e,n,r,o=hh(n,e,r.fragmentMap)){let i=new Map,{policies:s}=this.cache,c=new Re(!1);return(function l(u,d){let f=c.lookup(u,d.clientOnly,d.deferred);f.visited||(f.visited=!0,u.selections.forEach(h=>{if(!nn(h,r.variables))return;let{clientOnly:p,deferred:g}=d;if(!(p&&g)&&Fr(h.directives)&&h.directives.forEach(S=>{let y=S.name.value;if(y==="client"&&(p=!0),y==="defer"){let D=Nr(S,r.variables);(!D||D.if!==!1)&&(g=!0)}}),ht(h)){let S=i.get(h);S&&(p=p&&S.clientOnly,g=g&&S.deferred),i.set(h,dh(r,p,g))}else{let S=Nt(h,r.lookupFragment);if(!S&&h.kind===E.FRAGMENT_SPREAD)throw ve(124,h.name.value);S&&s.fragmentMatches(S,o,n,r.variables)&&l(S.selectionSet,dh(r,p,g))}}))})(e,r),i}applyMerges(e,n,r,o,i){if(e.map.size&&!K(r)){let s=!ae(r)&&(K(n)||Jn(n))?n:void 0,c=r;s&&!i&&(i=[K(s)?s.__ref:s]);let l,u=(d,f)=>ae(d)?typeof f=="number"?d[f]:void 0:o.store.getFieldValue(d,String(f));e.map.forEach((d,f)=>{let h=u(s,f),p=u(c,f);if(p===void 0)return;i&&i.push(f);let g=this.applyMerges(d,h,p,o,i);g!==p&&(l=l||new Map,l.set(f,g)),i&&T(i.pop()===f)}),l&&(r=ae(c)?c.slice(0):v({},c),l.forEach((d,f)=>{r[f]=d}))}return e.info?this.cache.policies.runMergeFunction(n,r,e.info,o,i&&o.store.getStorage(...i)):r}},VS=[];function US({map:t},e){return t.has(e)||t.set(e,VS.pop()||{map:new Map}),t.get(e)}function fh(t,e){if(t===e||!e||il(e))return t;if(!t||il(t))return e;let n=t.info&&e.info?v(v({},t.info),e.info):t.info||e.info,r=t.map.size&&e.map.size,o=r?new Map:t.map.size?t.map:e.map,i={info:n,map:o};if(r){let s=new Set(e.map.keys());t.map.forEach((c,l)=>{i.map.set(l,fh(c,e.map.get(l))),s.delete(l)}),s.forEach(c=>{i.map.set(c,fh(e.map.get(c),t.map.get(c)))})}return i}function il(t){return!t||!(t.info||t.map.size)}function jS({map:t},e){let n=t.get(e);n&&il(n)&&(VS.push(n),t.delete(e))}var BS=new Set;function vR(t,e,n,r){let o=f=>{let h=r.getFieldValue(f,n);return typeof h=="object"&&h},i=o(t);if(!i)return;let s=o(e);if(!s||K(i)||Q(i,s)||Object.keys(i).every(f=>r.getFieldValue(s,f)!==void 0))return;let c=r.getFieldValue(t,"__typename")||r.getFieldValue(e,"__typename"),l=Dt(n),u=`${c}.${l}`;if(BS.has(u))return;BS.add(u);let d=[];!ae(i)&&!ae(s)&&[i,s].forEach(f=>{let h=r.getFieldValue(f,"__typename");typeof h=="string"&&!d.includes(h)&&d.push(h)}),!1}function hh(t,e,n){let r;for(let o of e.selections)if(ht(o)){if(o.name.value==="__typename")return t[$e(o)]}else r?r.push(o):r=[o];if(typeof t.__typename=="string")return t.__typename;if(r)for(let o of r){let i=hh(t,Nt(o,n).selectionSet,n);if(typeof i=="string")return i}}var Vr=class extends qo{data;optimisticData;config;watches=new Set;storeReader;storeWriter;addTypenameTransform=new wn(Yn);maybeBroadcastWatch;assumeImmutableResults=!0;policies;makeVar=ch;constructor(...e){super(),this.config=bS(e[0]??{}),this.policies=new tl({cache:this,dataIdFromObject:this.config.dataIdFromObject,possibleTypes:this.config.possibleTypes,typePolicies:this.config.typePolicies}),this.init()}init(){let e=this.data=new Br.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=e.stump,this.resetResultCache()}resetResultCache(){let{fragments:e}=this.config;this.addTypenameTransform.resetCache(),e?.resetCaches(),this.storeWriter=new ol(this,this.storeReader=new rl({cache:this,fragments:e}),e),this.maybeBroadcastWatch=At((n,r)=>this.broadcastWatch(n,r),{max:he["inMemoryCache.maybeBroadcastWatch"]||5e3,makeCacheKey:n=>{let r=n.optimistic?this.optimisticData:this.data;if(Cn(r)){let{optimistic:o,id:i,variables:s}=n;return r.makeCacheKey(n.query,n.callback,De({optimistic:o,id:i,variables:s}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach(n=>n.resetCaching())}getRootTypename(e){return this.policies.rootTypenamesById[`ROOT_${e.toUpperCase()}`]}getScalar(e){return this.config.scalars?.[e]}getScalarTypeForField(e,n){return this.policies.getScalarTypeForField(e,n)}configuresScalars(){return!!this.config.scalars}serializeVariables(e,n){if(!n||Object.keys(n).length===0||!this.config.scalars&&!this.config.inputObjects)return n;let r=Pe(e)?.variableDefinitions?.reduce((o,i)=>(o[i.variable.name.value]=Kc(i.type),o),{});return!r||Object.keys(r).length===0?n:this.serializeVariablesValue(n,r)}serializeVariablesValue(e,n,r,o){if(e==null)return e;if(r){let i=Ar(r);if(i){if(Array.isArray(e))return this.serializeInputArray(e,n,i[1],o);!1}let s=this.getScalar(xt(r));if(s)return s.coerceToSerialized(e)}return Array.isArray(e)?this.serializeInputArray(e,n,void 0,o):Ts(e)?this.serializeInputObject(e,n,o):e}serializeInputArray(e,n,r,o){let i=!1,s=e.map(c=>{let l=this.serializeVariablesValue(c,n,r,o);return i||=l!==c,l});return i?s:e}serializeInputObject(e,n,r){let o=!1,i=Object.entries(e).map(([s,c])=>{let l=n[s],u=r?`${r}.${s}`:s;if(!l)return[s,c];let d=this.config.inputObjects?.[xt(l)];if(d){let h=this.serializeVariablesValue(c,d.fields,void 0,u);return o||=h!==c,[s,h]}let f=this.serializeVariablesValue(c,n,l,u);return o||=f!==c,[s,f]});return o?Object.fromEntries(i):e}restore(e){return this.init(),e&&this.data.replace(e),this}extract(e=!1){return(e?this.optimisticData:this.data).extract()}read(e){let{query:n,variables:r,returnPartialData:o=!1}=e;return this.storeReader.diffQueryAgainstStore(C(v({},e),{variables:this.serializeVariables(n,r),store:e.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:o})).result}write(e){let{query:n,variables:r}=e;try{return++this.txCount,this.storeWriter.writeToStore(this.data,C(v({},e),{variables:this.serializeVariables(n,r)}))}finally{!--this.txCount&&e.broadcast!==!1&&this.broadcastWatches()}}modify(e){if(be.call(e,"id")&&!e.id)return!1;let n=e.optimistic?this.optimisticData:this.data;try{return++this.txCount,n.modify(e.id||"ROOT_QUERY",e.fields,!1)}finally{!--this.txCount&&e.broadcast!==!1&&this.broadcastWatches()}}diff(e){let{variables:n}=e;return this.storeReader.diffQueryAgainstStore(C(v({},e),{variables:this.serializeVariables(e.query,n),store:e.optimistic?this.optimisticData:this.data,rootId:e.id||"ROOT_QUERY",config:this.config}))}watch(e){return this.watches.size||kS(this),this.watches.add(e),e.immediate&&this.maybeBroadcastWatch(e),()=>{this.watches.delete(e)&&!this.watches.size&&ah(this),this.maybeBroadcastWatch.forget(e)}}gc(e){De.reset(),Kn.reset();let n=this.optimisticData.gc();return e&&!this.txCount&&e.resetResultCache&&this.resetResultCache(),n}retain(e,n){return(n?this.optimisticData:this.data).retain(e)}release(e,n){return(n?this.optimisticData:this.data).release(e)}identify(e){if(K(e))return e.__ref;try{return this.policies.identify(e)[0]}catch(n){!1}}evict(e){if(!e.id){if(be.call(e,"id"))return!1;e=C(v({},e),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(e,this.data)}finally{!--this.txCount&&e.broadcast!==!1&&this.broadcastWatches()}}reset(e){return this.init(),De.reset(),e&&e.discardWatches?(this.watches.forEach(n=>this.maybeBroadcastWatch.forget(n)),this.watches.clear(),ah(this)):this.broadcastWatches(),Promise.resolve()}removeOptimistic(e){let n=this.optimisticData.removeLayer(e);n!==this.optimisticData&&(this.optimisticData=n,this.broadcastWatches())}txCount=0;batch(e){let{update:n,optimistic:r=!0,removeOptimistic:o,onWatchUpdated:i}=e,s,c=u=>{let{data:d,optimisticData:f}=this;++this.txCount,u&&(this.data=this.optimisticData=u);try{return s=n(this)}finally{--this.txCount,this.data=d,this.optimisticData=f}},l=new Set;return i&&!this.txCount&&this.broadcastWatches(C(v({},e),{onWatchUpdated(u){return l.add(u),!1}})),typeof r=="string"?this.optimisticData=this.optimisticData.addLayer(r,c):r===!1?c(this.data):c(),typeof o=="string"&&(this.optimisticData=this.optimisticData.removeLayer(o)),i&&l.size?(this.broadcastWatches(C(v({},e),{onWatchUpdated(u,d){let f=i.call(this,u,d);return f!==!1&&l.delete(u),f}})),l.size&&l.forEach(u=>this.maybeBroadcastWatch.dirty(u))):this.broadcastWatches(e),s}performTransaction(e,n){return this.batch({update:e,optimistic:n||n!==null})}transformDocument(e){return this.addTypenameTransform.transformDocument(this.addFragmentsToDocument(e))}fragmentMatches(e,n){return this.policies.fragmentMatches(e,n)}lookupFragment(e){return this.config.fragments?.lookup(e)||null}resolvesClientField(e,n){return!!this.policies.getReadFunction(e,n)}broadcastWatches(e){if(!this.txCount){let n=this.onAfterBroadcast,r=new Set;this.onAfterBroadcast=o=>{r.add(o)};try{this.watches.forEach(o=>this.maybeBroadcastWatch(o,e)),r.forEach(o=>o())}finally{this.onAfterBroadcast=n}}}addFragmentsToDocument(e){let{fragments:n}=this.config;return n?n.transform(e):e}broadcastWatch(e,n){let{lastDiff:r}=e,o=this.diff(e);n&&(e.optimistic&&typeof n.optimistic=="string"&&(o.fromOptimisticTransaction=!0),n.onWatchUpdated&&n.onWatchUpdated.call(this,e,o,r)===!1)||(!r||!Q(r.result,o.result))&&e.callback(e.lastDiff=o,r)}};!1;function Xn(t,e){return typeof t=="object"&&t!==null&&t[Symbol.for("apollo.error")]===e}function er(t){Object.defineProperty(t,Symbol.for("apollo.error"),{value:t.name,enumerable:!1,writable:!1,configurable:!1})}function $S(t){return t.map(e=>e.message||"Error message not found.").join(`
`)}var zS=(()=>{class t extends Error{static is(n){return Xn(n,"CombinedProtocolErrors")}static formatMessage=$S;errors;constructor(n){super(t.formatMessage(n,{defaultFormatMessage:$S})),this.name="CombinedProtocolErrors",this.errors=n,er(this),Object.setPrototypeOf(this,t.prototype)}}return t})();function WS(t){return t!==null&&typeof t=="object"&&typeof t.message=="string"&&typeof t.name=="string"&&(typeof t.stack=="string"||typeof t.stack>"u")}var sl=class t extends Error{static is(e){return Xn(e,"UnconventionalError")}constructor(e){super("An error of unexpected shape occurred.",{cause:e}),this.name="UnconventionalError",er(this),Object.setPrototypeOf(this,t.prototype)}};function qS(t){return t.filter(e=>e).map(e=>e.message||"Error message not found.").join(`
`)}var $r=(()=>{class t extends Error{static is(n){return Xn(n,"CombinedGraphQLErrors")}static formatMessage=qS;errors;data;extensions;constructor(n,r=n.errors||[]){super(t.formatMessage(r,{result:n,defaultFormatMessage:qS})),this.errors=r,this.data=n.data,this.extensions=n.extensions,this.name="CombinedGraphQLErrors",er(this),Object.setPrototypeOf(this,t.prototype)}}return t})();var SR=new WeakSet;function ph(t){SR.add(t)}var Hs=class t extends Error{static is(e){return Xn(e,"ServerError")}response;statusCode;bodyText;constructor(e,n){super(e),this.name="ServerError",this.response=n.response,this.statusCode=n.response.status,this.bodyText=n.bodyText,er(this),Object.setPrototypeOf(this,t.prototype)}};var al=Symbol();function GS(t){return"extensions"in t?zS.is(t.extensions[al]):!1}function QS(t){return WS(t)?t:typeof t=="string"?new Error(t,{cause:t}):new sl(t)}var cl=new WeakMap;var H=(function(t){return t[t.loading=1]="loading",t[t.setVariables=2]="setVariables",t[t.fetchMore=3]="fetchMore",t[t.refetch=4]="refetch",t[t.poll=6]="poll",t[t.ready=7]="ready",t[t.error=8]="error",t[t.streaming=9]="streaming",t})(H||{});var{assign:KS,hasOwnProperty:DR}=Object,Ko={loading:!0,networkStatus:H.loading,data:void 0,dataState:"empty",partial:!0},mh={loading:!1,networkStatus:H.ready,data:void 0,dataState:"empty",partial:!0},Yo=new WeakMap;function gh(t,e){let n=t[e];typeof n=="function"&&(t[e]=function(){return Yo.set(t,(Yo.get(t)+1)%1e15),n.apply(this,arguments)})}var Zo=class{options;queryName;variablesUnknown=!1;didWarnOnFeud=!1;lastMissing;get query(){return this.lastQuery}get variables(){return this.options.variables}unsubscribeFromCache;input;subject;isTornDown;queryManager;subscriptions=new Set;waitForNetworkResult;lastQuery;linkSubscription;pollingInfo;get networkStatus(){return this.subject.getValue().result.networkStatus}get cache(){return this.queryManager.cache}constructor({queryManager:e,options:n,transformedQuery:r=e.transform(n.query)}){this.queryManager=e;let{cache:o}=e;Yo.has(o)||(Yo.set(o,0),gh(o,"evict"),gh(o,"modify"),gh(o,"reset")),this.waitForNetworkResult=n.fetchPolicy==="network-only",this.isTornDown=!1,this.subscribeToMore=this.subscribeToMore.bind(this),this.maskResult=this.maskResult.bind(this);let{watchQuery:{fetchPolicy:i="cache-first"}={}}=e.defaultOptions,{fetchPolicy:s=i,initialFetchPolicy:c=s==="standby"?i:s}=n;n[zf]&&(T(s==="standby",84),this.variablesUnknown=!0),this.lastQuery=r,this.options=C(v({},n),{initialFetchPolicy:c,fetchPolicy:s,variables:this.getVariablesWithDefaults(n.variables)}),this.initializeObservablesQueue(),this["@@observable"]=()=>this,Symbol.observable&&(this[Symbol.observable]=()=>this);let l=Pe(this.query);this.queryName=l&&l.name&&l.name.value}initializeObservablesQueue(){this.subject=new le({query:this.query,variables:this.variables,result:Ko,meta:{}});let e=this.subject.pipe(Ce({subscribe:()=>{this.subject.observed||(this.reobserve(),setTimeout(()=>this.updatePolling()))},unsubscribe:()=>{this.subject.observed||this.tearDownQuery()}}),Wo(({query:n,variables:r,result:o,meta:i},s)=>{let{shouldEmit:c}=i;if(o===Ko&&(s.previous=void 0,s.previousVariables=void 0),this.options.fetchPolicy==="standby"||c===2)return;if(c===1)return d();let{previous:l,previousVariables:u}=s;if(l){let f=this.queryManager.getDocumentInfo(n),h=this.queryManager.dataMasking,p=h?f.nonReactiveQuery:n;if((h||f.hasNonreactiveDirective?Ps(p,l,o,r):Q(l,o))&&Q(u,r))return}if(c===3&&(!this.options.notifyOnNetworkStatusChange||Q(l,o)))return;return d();function d(){return s.previous=o,s.previousVariables=r,o}},()=>({})));this.pipe=e.pipe.bind(e),this.subscribe=e.subscribe.bind(e),this.input=new me,this.input.complete=()=>{},this.input.pipe(this.operator).subscribe(this.subject)}subscribe;pipe;[Symbol.observable];"@@observable";getCacheDiff({optimistic:e=!0}={}){return Rs(this.cache.diff({query:this.query,variables:this.variables,returnPartialData:!0,optimistic:e,[Qn]:void 0}))}getInitialResult(e){let n=e||this.options.fetchPolicy;this.queryManager.prioritizeCacheValues&&(n==="network-only"||n==="cache-and-network")&&(n="cache-first");let r=()=>{let o=this.getCacheDiff(),{dataState:i}=o,s=this.options.returnPartialData||o.complete?o.result??void 0:void 0;return s===void 0&&(i="empty"),this.maskResult({data:s,dataState:i,loading:!o.complete,networkStatus:o.complete?H.ready:H.loading,partial:!o.complete})};switch(n){case"cache-only":return C(v({},r()),{loading:!1,networkStatus:H.ready});case"cache-first":return r();case"cache-and-network":return C(v({},r()),{loading:!0,networkStatus:H.loading});case"standby":return mh;default:return Ko}}resubscribeCache(){let{variables:e,fetchPolicy:n}=this.options,r=this.query,o=n==="standby"||n==="no-cache"||this.waitForNetworkResult,i=!ll({query:r,variables:e},this.unsubscribeFromCache)&&!this.waitForNetworkResult;if((o||i)&&this.unsubscribeFromCache?.(),o||!i)return;let s={query:r,variables:e,optimistic:!0,watcher:this,callback:l=>{let u=this.queryManager.getDocumentInfo(r);if((u.hasClientExports||u.hasForcedResolvers)&&(s.lastDiff=void 0),s.lastOwnDiff===l)return;let{result:d}=this.subject.getValue();!l.complete&&(d.error||d===Ko||d===mh)||Q(d.data,l.result)||this.scheduleNotify()}},c=this.cache.watch(s);this.unsubscribeFromCache=Object.assign(()=>{this.unsubscribeFromCache=void 0,c()},{query:r,variables:e})}stableLastResult;getCurrentResult(){let{result:e}=this.subject.getValue(),n=e.networkStatus===H.error||this.hasObservers()||this.options.fetchPolicy==="no-cache"?e:this.getInitialResult();return n===Ko&&(n=this.getInitialResult()),Q(this.stableLastResult,n)||(this.stableLastResult=n),this.stableLastResult}refetch(e){let{fetchPolicy:n}=this.options,r={pollInterval:0};if(n==="no-cache"?r.fetchPolicy="no-cache":r.fetchPolicy="network-only",!1){let o=Ss(this.query),i=o.variableDefinitions;(!i||!i.some(s=>s.variable.name.value==="variables"))&&!1&&T.warn(85,e,o.name?.value||o)}return e&&!Q(this.variables,e)&&(r.variables=this.options.variables=this.getVariablesWithDefaults(v(v({},this.variables),e))),this._reobserve(r,{newNetworkStatus:H.refetch})}fetchMore({query:e,variables:n,context:r,errorPolicy:o,updateQuery:i}){T(this.options.fetchPolicy!=="cache-only",86,Se(this.query,"(anonymous)"));let s=C(v({},it(this.options,{errorPolicy:"none"},{query:e,context:r,errorPolicy:o})),{variables:e?n:v(v({},this.variables),n),fetchPolicy:"no-cache",notifyOnNetworkStatusChange:this.options.notifyOnNetworkStatusChange});s.query=this.transformDocument(s.query),this.lastQuery=e?this.transformDocument(this.options.query):s.query;let c=!1,l=this.options.fetchPolicy!=="no-cache";l||T(i,87);let{finalize:u,pushNotification:d}=this.pushOperation(H.fetchMore);d({source:"newNetworkStatus",kind:"N",value:{}},{shouldEmit:3});let{promise:f,operator:h}=YS(),{observable:p}=this.queryManager.fetchObservableWithInfo(s,{networkStatus:H.fetchMore,exposeExtensions:!0}),g=p.pipe(h,Me(S=>S.kind==="N"&&S.source==="network")).subscribe({next:S=>{c=!1;let y=S.value,D=y[_s];if(xs(S.value.networkStatus)&&u(),l){let w=this.getCacheDiff();this.cache.batch({update:I=>{i?I.updateQuery({query:this.query,variables:this.variables,returnPartialData:!0,optimistic:!1,extensions:D},R=>i(R,{fetchMoreResult:y.data,variables:s.variables})):I.writeQuery({query:s.query,variables:s.variables,data:y.data,extensions:D})},onWatchUpdated:(I,R)=>{if(I.watcher===this&&!Q(R.result,w.result)){c=!0;let M=this.getCurrentResult();Ur(y.networkStatus)&&d({kind:"N",source:"network",value:C(v({},M),{networkStatus:y.networkStatus===H.error?H.ready:y.networkStatus,loading:!1,data:R.result,dataState:R.complete?"complete":"streaming"})})}}})}else{let w=this.getCurrentResult(),I=i(w.data,{fetchMoreResult:y.data,variables:s.variables});d({kind:"N",value:C(v({},w),{networkStatus:H.ready,loading:!1,data:I,dataState:w.dataState==="streaming"?"streaming":"complete"}),source:"network"})}}});return qc(f.then(S=>Gn(this.maskResult(S))).finally(()=>{if(g.unsubscribe(),u(),l&&!c){let S=this.getCurrentResult();S.dataState==="streaming"?d({kind:"N",source:"network",value:C(v({},S),{dataState:"complete",networkStatus:H.ready})}):d({kind:"N",source:"newNetworkStatus",value:{}},{shouldEmit:1})}}))}subscribeToMore(e){let n=this.queryManager.startGraphQLSubscription({query:e.document,variables:e.variables,context:e.context}).subscribe({next:r=>{let{updateQuery:o,onError:i}=e,{error:s}=r;if(s){i?i(s):T.error(88,s);return}o&&this.updateQuery((c,l)=>o(c,v({subscriptionData:r},l)))}});return this.subscriptions.add(n),()=>{this.subscriptions.delete(n)&&n.unsubscribe()}}applyOptions(e){let n=it(this.options,e||{});KS(this.options,n),this.updatePolling()}setVariables(e){return J(this,null,function*(){return e=this.getVariablesWithDefaults(e),Q(this.variables,e)?Gn(this.getCurrentResult()):(this.options.variables=e,this.hasObservers()?this._reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:e},{newNetworkStatus:H.setVariables}):Gn(this.getCurrentResult()))})}updateQuery(e){let{queryManager:n}=this,{result:r,complete:o}=this.getCacheDiff({optimistic:!1}),i=e(r,{variables:this.variables,complete:!!o,previousData:r});i&&(this.cache.writeQuery({query:this.options.query,data:i,variables:this.variables}),n.broadcastQueries())}startPolling(e){this.options.pollInterval=e,this.updatePolling()}stopPolling(){this.options.pollInterval=0,this.updatePolling()}applyNextFetchPolicy(e,n){if(n.nextFetchPolicy){let{fetchPolicy:r="cache-first",initialFetchPolicy:o=r}=n;r==="standby"||(typeof n.nextFetchPolicy=="function"?n.fetchPolicy=n.nextFetchPolicy.call(n,r,{reason:e,options:n,observable:this,initialFetchPolicy:o}):e==="variables-changed"?n.fetchPolicy=o:n.fetchPolicy=n.nextFetchPolicy)}return n.fetchPolicy}fetch(e,n,r,o){let i=this.options.fetchPolicy;e.context??={};let s=!1,c=()=>{s=!0},l=y=>new F(D=>{try{return y.subscribe({next(w){s=!0,D.next(w)},error:w=>D.error(w),complete:()=>D.complete()})}finally{s||(p.override=n,this.input.next({kind:"N",source:"newNetworkStatus",value:{resetError:!0},query:f,variables:h,meta:{shouldEmit:3,fetchPolicy:i}}))}}),{observable:u,fromLink:d}=this.queryManager.fetchObservableWithInfo(e,{networkStatus:n,query:r,onCacheHit:c,fetchQueryOperator:l,observableQuery:this}),{query:f,variables:h}=this,p={abort:()=>{S.unsubscribe()},query:f,variables:h};this.activeOperations.add(p);let g=n==H.refetch||n==H.setVariables;u=u.pipe(o,Bt());let S=u.pipe(Ce({next:y=>{y.source==="newNetworkStatus"||y.kind==="N"&&y.value.loading?p.override=n:delete p.override},finalize:()=>this.activeOperations.delete(p)})).subscribe({next:y=>{let D={};g&&y.kind==="N"&&"loading"in y.value&&!y.value.loading&&(g=!1,D.shouldEmit=1),this.input.next(C(v({},y),{query:f,variables:h,meta:D}))}});return{fromLink:d,subscription:S,observable:u}}didWarnCacheOnlyPolling=!1;updatePolling(){if(this.queryManager.ssrMode)return;let{pollingInfo:e,options:{fetchPolicy:n,pollInterval:r}}=this,o=()=>{let{options:l}=this;return!l.pollInterval||!this.hasObservers()||l.fetchPolicy==="cache-only"||l.fetchPolicy==="standby"};if(o()){!1,this.cancelPolling();return}if(e?.interval===r)return;let i=e||(this.pollingInfo={});i.interval=r;let s=()=>{if(o())return this.cancelPolling();this.pollingInfo&&(!Ur(this.networkStatus)&&!this.options.skipPollAttempt?.()?this._reobserve({fetchPolicy:this.options.initialFetchPolicy==="no-cache"?"no-cache":"network-only"},{newNetworkStatus:H.poll}).then(c,c):c())},c=()=>{let l=this.pollingInfo;l&&(clearTimeout(l.timeout),l.timeout=setTimeout(s,l.interval))};c()}cancelPolling(){this.pollingInfo&&(clearTimeout(this.pollingInfo.timeout),delete this.pollingInfo)}reobserve(e){return this._reobserve(e)}_reobserve(e,n){this.isTornDown=!1;let{newNetworkStatus:r,keepLastMissing:o}=n||{};o||(this.lastMissing=void 0),this.queryManager.obsQueries.add(this);let i=r===H.refetch||r===H.poll,s=this.variables,c=this.options.fetchPolicy,l=it(this.options,e||{});this.variablesUnknown&&=l.fetchPolicy==="standby";let u=i?l:KS(this.options,l),d=this.transformDocument(u.query);this.lastQuery=d,e&&"variables"in e&&(u.variables=this.getVariablesWithDefaults(e.variables)),i||(this.updatePolling(),e&&e.variables&&!Q(e.variables,s)&&u.fetchPolicy!=="standby"&&(u.fetchPolicy===c||typeof u.nextFetchPolicy=="function")&&(this.applyNextFetchPolicy("variables-changed",u),r===void 0&&(r=H.setVariables)));let f=this.networkStatus;r||(r=H.loading,f!==H.loading&&e?.variables&&!Q(e.variables,s)&&(r=H.setVariables),u.fetchPolicy==="standby"&&(r=H.ready)),u.fetchPolicy==="standby"&&this.cancelPolling(),this.resubscribeCache();let{promise:h,operator:p}=YS(u.fetchPolicy==="standby"?{data:void 0}:void 0),{subscription:g,observable:S,fromLink:y}=this.fetch(u,r,d,p);!i&&(y||!this.linkSubscription)&&(this.linkSubscription&&this.linkSubscription.unsubscribe(),this.linkSubscription=g);let D=Object.assign(qc(h.then(w=>Gn(this.maskResult(w))).finally(()=>{!this.hasObservers()&&this.activeOperations.size===0&&this.tearDownQuery()})),{retain:()=>{let w=S.subscribe({}),I=()=>w.unsubscribe();return h.then(I,I),D}});return D}hasObservers(){return this.subject.observed}stop(){this.subject.complete(),this.initializeObservablesQueue(),this.tearDownQuery()}tearDownQuery(){this.isTornDown||(this.resetNotifications(),this.unsubscribeFromCache?.(),this.linkSubscription&&(this.linkSubscription.unsubscribe(),delete this.linkSubscription),this.stopPolling(),this.subscriptions.forEach(e=>e.unsubscribe()),this.subscriptions.clear(),this.queryManager.obsQueries.delete(this),this.isTornDown=!0,this.abortActiveOperations(),this.lastMissing=void 0)}transformDocument(e){return this.queryManager.transform(e)}maskResult(e){let n=this.queryManager.maskOperation({document:this.query,data:e.data,fetchPolicy:this.options.fetchPolicy,cause:this});return n===e.data?e:C(v({},e),{data:n})}dirty=!1;notifyTimeout;resetNotifications(){this.notifyTimeout&&(clearTimeout(this.notifyTimeout),this.notifyTimeout=void 0),this.dirty=!1}scheduleNotify(){this.dirty||(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout(()=>this.notify(!0),0)))}notify(e=!1){if(!e){let l=this.queryManager.getDocumentInfo(this.query);if(l.hasClientExports||l.hasForcedResolvers)return}let{dirty:n,lastMissing:r}=this,{fetchPolicy:o}=this.options;if(this.resetNotifications(),!n||o!=="cache-only"&&o!=="cache-and-network"&&this.activeOperations.size)return;let i=this.getCacheDiff(),s=this.getCurrentResult();if(!Q(i.result,this.getCacheDiff({optimistic:!1}).result)||!i.complete&&s.networkStatus===H.streaming){this.deliverCacheDiff(i);return}if(i.complete)this.lastMissing=void 0;else if(!r||r.dmCount!==Yo.get(this.cache)||!Q(r.variables,this.variables)||!Q(r.missing,i.missing?.missing))this.didWarnOnFeud=!1,this.lastMissing={variables:this.variables,missing:i.missing?.missing,dmCount:Yo.get(this.cache)};else if(o!=="cache-only"){s.dataState==="partial"&&this.deliverCacheDiff(i),!1;return}this.reobserveCacheFirst()}deliverCacheDiff(e){let n=this.getCurrentResult();this.input.next({kind:"N",value:{data:e.result,dataState:e.dataState,networkStatus:n.networkStatus,loading:n.loading,error:void 0,partial:!e.complete},source:"cache",query:this.query,variables:this.variables,meta:{}})}activeOperations=new Set;pushOperation(e){let n=!1,{query:r,variables:o}=this,i=()=>{this.activeOperations.delete(s)},s={override:e,abort:()=>{n=!0,i()},query:r,variables:o};return this.activeOperations.add(s),{finalize:i,pushNotification:(c,l)=>{n||this.input.next(C(v({},c),{query:r,variables:o,meta:v({},l)}))}}}calculateNetworkStatus(e){return e===H.streaming?e:Array.from(this.activeOperations.values()).reverse().find(r=>ll(r,this)&&r.override!==void 0)?.override??e}abortActiveOperations(){this.activeOperations.forEach(e=>e.abort())}reset(){let e=this.options.fetchPolicy==="cache-only";this.lastMissing=void 0,this.setResult(e?mh:Ko,{shouldEmit:e?1:2}),this.abortActiveOperations()}setResult(e,n){this.input.next({source:"setResult",kind:"N",value:e,query:this.query,variables:this.variables,meta:v({},n)})}operator=Wo(e=>{let{query:n,meta:r}=e;if(e.source==="setResult")return{query:n,variables:this.variables,result:e.value,meta:r};if(e.kind==="C")return;let o="resolvedVariables"in e?e.resolvedVariables:void 0;if(e.query!==this.query)return;if(!Q(o,this.variables)){if(!Q(e.variables,this.variables))return;o&&(this.options.variables=o,this.resubscribeCache())}let i=this.variables,s,c=this.subject.getValue();if(e.source==="cache"){if(s=e.value,s.networkStatus===H.ready&&s.dataState==="partial"&&(!this.options.returnPartialData||c.result.networkStatus===H.error)&&this.options.fetchPolicy!=="cache-only")return}else if(e.source==="network")this.waitForNetworkResult&&(this.waitForNetworkResult=!1,this.resubscribeCache()),s=e.kind==="E"?C(v({},ll(c,e)||o&&Q(o,c.variables)?c.result:{data:void 0,dataState:"empty",partial:!0}),{error:e.error,networkStatus:H.error,loading:!1}):e.value,e.kind==="E"&&s.dataState==="streaming"&&(s.dataState=cl.get(e.error)??"complete"),s.error&&(r.shouldEmit=1);else if(e.source==="newNetworkStatus"){let l=ll(c,e)?c.result:this.getInitialResult(r.fetchPolicy),{resetError:u}=e.value,d=u?void 0:l.error,f=d?H.error:H.ready;s=C(v({},l),{error:d,networkStatus:f})}return T(s),s.error||delete s.error,s.networkStatus=this.calculateNetworkStatus(s.networkStatus),s.loading=Ur(s.networkStatus),s=this.maskResult(s),c.result.data!==void 0&&s.data!==c.result.data&&Q(s.data,c.result.data)&&(s.data=c.result.data),{query:n,variables:i,result:s,meta:r}});reobserveCacheFirst(){let{fetchPolicy:e,nextFetchPolicy:n}=this.options;e==="cache-and-network"||e==="network-only"?this._reobserve({fetchPolicy:"cache-first",nextFetchPolicy(r,o){return this.nextFetchPolicy=n,typeof this.nextFetchPolicy=="function"?this.nextFetchPolicy(r,o):e}},{keepLastMissing:!0}):this._reobserve(void 0,{keepLastMissing:!0})}getVariablesWithDefaults(e){return this.queryManager.getVariables(this.query,e)}};function ZS(t){!1}function ll(t,e){return!!(t&&e&&t.query===e.query&&Q(t.variables,e.variables))}function YS(t){let e=t,n,r,o=new Promise((s,c)=>{n=s,r=c}),i=Ce({next(s){if(s.kind==="E")return r(s.error);s.kind==="N"&&s.source!=="newNetworkStatus"&&!s.value.loading&&(e=s.value)},finalize:()=>{if(e)n(e);else{let s="The operation was aborted.",c="AbortError";r(typeof DOMException<"u"?new DOMException(s,c):Object.assign(new Error(s),{name:c}))}}});return{promise:o,operator:i}}function bR(t,e){!1}var JS={},XS=new WeakMap,Jo=class{cache;queryManager;id;observableQuery;incremental;constructor(e,n){this.cache=e.cache;let r=(XS.get(e)||0)+1;XS.set(e,r),this.id=r+"",this.observableQuery=n,this.queryManager=e}get hasNext(){return this.incremental?this.incremental.hasNext:!1}get incrementalHandler(){return this.queryManager.incrementalHandler}maybeHandleIncrementalResult(e,n,r){return this.incrementalHandler.isIncrementalResult(n)?(this.incremental||=this.incrementalHandler.startRequest({query:r}),this.incremental.handle(e,n)):n}markQueryResult(e,{document:n,variables:r,errorPolicy:o,cacheWriteBehavior:i,returnPartialData:s,fetchPolicy:c,networkStatus:l,prunePendingDeferFragments:u}){let d={query:n,variables:r,optimistic:!0};this.observableQuery?.resetNotifications();let f=i===0,h=f?void 0:this.getDiff(C(v({},d),{returnPartialData:o!=="none"||!this.incrementalHandler.extractErrors(e)?.length}),this.getIncrementalInfo({prune:u})),p=this.maybeHandleIncrementalResult(h?.result,e,n),g=C(v({},p),{dataState:p.data==null?"empty":"complete"});return(this.incremental?.getPendingWithInfo?.().some(y=>y.type==="defer"&&!y.delivered)||!this.incremental?.getPendingWithInfo&&this.hasNext&&en(["defer"],n))&&(g.dataState="streaming"),f||!yh(g,o)||this.cache.batch({onWatchUpdated:(y,D)=>{y.watcher===this.observableQuery&&(y.lastOwnDiff=D)},update:y=>{y.writeQuery({query:n,data:g.data,variables:r,overwrite:i===1,extensions:g.extensions});let{dataState:D,result:w}=this.getDiff(C(v({},d),{returnPartialData:s&&(c!=="network-only"||l===H.refetch)}),this.getIncrementalInfo({prune:u}));D==="complete"||D==="streaming"||s&&D==="partial"?g=C(v({},g),{data:w,dataState:D}):!1}}),g}getIncrementalInfo({prune:e}){let n=this.incremental?.getPendingWithInfo?.()??[],r=this.incremental?.streamInfo,o={streamInfo:r};if(e)for(let i of n)i.type==="defer"&&!i.delivered?(o.deferInfo||=new Re(!0,()=>!0),o.deferInfo.lookupArray(i.path.concat(i.label||[]))):r&&i.type==="stream"&&(r.lookupArray(i.path).state.truncate=!0);return o}getDiff(e,n){return Rs(this.cache.diff(C(v({},e),{[Qn]:n})))}markMutationResult(e,n,r=this.cache){let o=[],i=n.cacheWriteBehavior===0,s=this.maybeHandleIncrementalResult(i?void 0:r.diff({id:"ROOT_MUTATION",query:this.queryManager.getDocumentInfo(n.document).asQuery,variables:n.variables,optimistic:!1,returnPartialData:!0}).result,e,n.document);if(n.errorPolicy==="ignore"&&(s=C(v({},s),{errors:[]})),En(s)&&n.errorPolicy==="none")return Promise.resolve(s);let c=()=>C(v({},s),{dataState:this.hasNext?"streaming":"complete"});if(!i&&yh(s,n.errorPolicy)){o.push({result:s.data,dataId:"ROOT_MUTATION",query:n.document,variables:n.variables,extensions:s.extensions});let{updateQueries:u}=n;u&&this.queryManager.getObservableQueries("all").forEach(d=>{let f=d&&d.queryName;if(!f||!Object.hasOwnProperty.call(u,f))return;let h=u[f],{query:p,variables:g}=d,{result:S,complete:y}=d.getCacheDiff({optimistic:!1});if(y&&S){let D=h(S,{mutationResult:c(),queryName:p&&Se(p)||void 0,queryVariables:g});D&&o.push({result:D,dataId:"ROOT_QUERY",query:p,variables:g})}})}let l=n.refetchQueries;if(typeof l=="function"&&(l=l(c())),o.length>0||(l||"").length>0||n.update||n.onQueryUpdated||n.removeOptimistic){let u=[];if(this.queryManager.refetchQueries({updateCache:d=>{i||o.forEach(h=>d.write(h));let{update:f}=n;if(!i){let h=d.diff({id:"ROOT_MUTATION",query:this.queryManager.getDocumentInfo(n.document).asQuery,variables:n.variables,optimistic:!1,returnPartialData:!0});h.complete&&(s=C(v({},s),{data:h.result}))}f&&!this.hasNext&&f(d,s,{context:n.context,variables:n.variables}),!i&&!n.keepRootFields&&!this.hasNext&&d.modify({id:"ROOT_MUTATION",fields(h,{fieldName:p,DELETE:g}){return p==="__typename"?h:g}})},include:l,optimistic:!1,removeOptimistic:n.removeOptimistic,onQueryUpdated:n.onQueryUpdated||null}).forEach(d=>u.push(d)),n.awaitRefetchQueries||n.onQueryUpdated)return Promise.all(u).then(()=>s)}return Promise.resolve(s)}markMutationOptimistic(e,n){let r=typeof e=="function"?e(n.variables,{IGNORE:JS}):e;return r===JS?!1:(this.cache.recordOptimisticTransaction(o=>{try{this.markMutationResult({data:r},n,o)}catch(i){T.error(i)}},this.id),!0)}markSubscriptionResult(e,{document:n,variables:r,errorPolicy:o,cacheWriteBehavior:i}){if(i!==0){if(yh(e,o)){this.cache.write({query:n,result:e.data,dataId:"ROOT_SUBSCRIPTION",variables:r,extensions:e.extensions});let s=this.cache.diff({query:this.queryManager.getDocumentInfo(n).asQuery,id:"ROOT_SUBSCRIPTION",variables:r,optimistic:!1,returnPartialData:!0});s.complete&&(e.data=s.result)}this.queryManager.broadcastQueries()}}};function ER(t,e,n){!1}function yh(t,e="none"){let n=e==="ignore"||e==="all",r=!En(t);return!r&&n&&t.data&&(r=!0),r}var ul=class{defaultOptions;client;clientOptions;assumeImmutableResults;documentTransform;ssrMode;defaultContext;dataMasking;incrementalHandler;localState;queryDeduplication;prioritizeCacheValues=!1;onBroadcast;mutationStore;obsQueries=new Set;fetchCancelFns=new Map;constructor(e){let n=new wn(o=>this.cache.transformDocument(o),{cache:!1});this.client=e.client,this.defaultOptions=e.defaultOptions,this.queryDeduplication=e.queryDeduplication,this.clientOptions=e.clientOptions,this.ssrMode=e.ssrMode,this.assumeImmutableResults=e.assumeImmutableResults,this.dataMasking=e.dataMasking,this.localState=e.localState,this.incrementalHandler=e.incrementalHandler;let r=e.documentTransform;this.documentTransform=r?n.concat(r).concat(n):n,this.incrementalHandler.documentTransform&&(this.documentTransform=this.documentTransform.concat(this.incrementalHandler.documentTransform)),this.defaultContext=e.defaultContext||{},(this.onBroadcast=e.onBroadcast)&&(this.mutationStore={})}get link(){return this.client.link}get cache(){return this.client.cache}stop(){this.obsQueries.forEach(e=>e.stop()),this.cancelPendingFetches(ve(93))}cancelPendingFetches(e){this.fetchCancelFns.forEach(n=>n(e)),this.fetchCancelFns.clear()}mutate(p){return J(this,arguments,function*({mutation:e,variables:n,optimisticResponse:r,updateQueries:o,refetchQueries:i=[],awaitRefetchQueries:s=!1,update:c,onQueryUpdated:l,fetchPolicy:u,errorPolicy:d,keepRootFields:f,context:h}){let g=new Jo(this);e=this.cache.transformForLink(this.transform(e));let{hasClientExports:S}=this.getDocumentInfo(e);n=this.getVariables(e,n),S&&(!1,n=yield this.localState.getExportedVariables({client:this.client,document:e,variables:n,context:h}));let y=this.mutationStore&&(this.mutationStore[g.id]={mutation:e,variables:this.cache.serializeVariables(e,n),loading:!0,error:null}),D=r&&g.markMutationOptimistic(r,{document:e,variables:n,cacheWriteBehavior:u==="no-cache"?0:2,errorPolicy:d,context:h,updateQueries:o,update:c,keepRootFields:f});return this.broadcastQueries(),new Promise((w,I)=>{let R={};return this.getObservableFromLink(e,C(v({},h),{optimisticResponse:D?r:void 0}),n,u,{},!1).observable.pipe(eD(),we(M=>{let j=v({},M);return re(g.markMutationResult(j,{document:e,variables:n,cacheWriteBehavior:u==="no-cache"?0:2,errorPolicy:d,context:h,update:c,updateQueries:o,awaitRefetchQueries:s,refetchQueries:i,removeOptimistic:D?g.id:void 0,onQueryUpdated:l,keepRootFields:f}))})).pipe(L(M=>{if(En(M)&&d==="none")throw new $r(vh(M));return y&&(y.loading=!1,y.error=null),M})).subscribe({next:M=>{if(this.broadcastQueries(),!g.hasNext){let j={data:this.maskOperation({document:e,data:M.data,fetchPolicy:u,cause:R})};En(M)&&(j.error=new $r(M)),Object.keys(M.extensions||{}).length&&(j.extensions=M.extensions),w(j)}},error:M=>{if(y&&(y.loading=!1,y.error=M),D&&this.cache.removeOptimistic(g.id),this.broadcastQueries(),d==="ignore")return w({data:void 0});if(d==="all")return w({data:void 0,error:M});I(M)}})})})}fetchQuery(e,n){return Ge(e.query,qe.QUERY),J(this,null,function*(){return tu(this.fetchObservableWithInfo(e,{networkStatus:n}).observable.pipe(Wo(r=>{switch(r.kind){case"E":throw r.error;case"N":if(r.source!=="newNetworkStatus")return Gn(r.value)}})),{defaultValue:{data:void 0}})})}transform(e){return this.documentTransform.transformDocument(e)}transformCache=new xr(he["queryManager.getDocumentInfo"]||2e3);getDocumentInfo(e){let{transformCache:n}=this;if(!n.has(e)){let o=Pe(e),i={hasClientExports:en(["client","export"],e,!0),hasForcedResolvers:Nf(e),hasNonreactiveDirective:en(["nonreactive"],e),hasIncrementalDirective:en(["defer"],e),nonReactiveQuery:wR(e),clientQuery:en(["client"],e)?e:null,serverQuery:Uf([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"},{name:"unmask"}],e),operationType:o?.operation,defaultVars:Or(o),asQuery:C(v({},e),{definitions:e.definitions.map(s=>s.kind==="OperationDefinition"&&s.operation!=="query"?C(v({},s),{operation:"query"}):s)})};n.set(e,i)}let r=n.get(e);if(r.violation)throw r.violation;return r}getVariables(e,n){let r=this.getDocumentInfo(e).defaultVars,o=Object.entries(n??{}).map(([i,s])=>[i,s===void 0?r[i]:s]);return v(v({},r),Object.fromEntries(o))}watchQuery(e){Ge(e.query,qe.QUERY);let n=this.transform(e.query);return e=C(v({},e),{variables:this.getVariables(n,e.variables)}),typeof e.notifyOnNetworkStatusChange>"u"&&(e.notifyOnNetworkStatusChange=!0),new Zo({queryManager:this,options:e,transformedQuery:n})}query(e){let n=this.transform(e.query);return this.fetchQuery(C(v({},e),{query:n})).then(r=>C(v({},r),{data:this.maskOperation({document:n,data:r?.data,fetchPolicy:e.fetchPolicy})}))}clearStore(e={discardWatches:!0}){return this.cancelPendingFetches(ve(95)),this.obsQueries.forEach(n=>{n.reset()}),this.mutationStore&&(this.mutationStore={}),this.cache.reset(e)}getObservableQueries(e="active"){let n=new Set,r=new Map,o=new Map,i=new Set;return Array.isArray(e)&&e.forEach(s=>{if(typeof s=="string")r.set(s,s),o.set(s,!1);else if(xf(s)){let c=Kn(this.transform(s));r.set(c,Se(s)),o.set(c,!1)}else de(s)&&s.query&&i.add(s)}),this.obsQueries.forEach(s=>{let c=Kn(this.transform(s.options.query));if(e==="all"){n.add(s);return}let{queryName:l,options:{fetchPolicy:u}}=s;e==="active"&&u==="standby"||(e==="active"||l&&o.has(l)||c&&o.has(c))&&(n.add(s),l&&o.set(l,!0),c&&o.set(c,!0))}),i.size&&i.forEach(s=>{let c=new Zo({queryManager:this,options:C(v({},Hr(this.defaultOptions.watchQuery,s)),{fetchPolicy:"network-only"})});n.add(c)}),!1,n}refetchObservableQueries(e=!1){let n=[];return this.getObservableQueries(e?"all":"active").forEach(r=>{let{fetchPolicy:o}=r.options;(e||o!=="standby")&&o!=="cache-only"&&n.push(r.refetch())}),this.broadcastQueries(),Promise.all(n)}startGraphQLSubscription(e){let{query:n,variables:r}=e,{fetchPolicy:o="cache-first",errorPolicy:i="none",context:s={},extensions:c={}}=e;Ge(n,qe.SUBSCRIPTION),n=this.transform(n),r=this.getVariables(n,r);let l;!1;let u=(this.getDocumentInfo(n).hasClientExports?re(this.localState.getExportedVariables({client:this.client,document:n,variables:r,context:s})):U(r)).pipe(we(d=>{let{observable:f,restart:h}=this.getObservableFromLink(n,s,d,o,c),p=new Jo(this);return l=h,f.pipe(L(g=>{p.markSubscriptionResult(g,{document:n,variables:d,errorPolicy:i,cacheWriteBehavior:o==="no-cache"?0:2});let S={data:g.data??void 0};return En(g)?S.error=new $r(g):GS(g)&&(S.error=g.extensions[al],delete g.extensions[al]),g.extensions&&Object.keys(g.extensions).length&&(S.extensions=g.extensions),S.error&&i==="none"&&(S.data=void 0),i==="ignore"&&delete S.error,S}),jt(g=>i==="ignore"?U({data:void 0}):U({data:void 0,error:g})),Me(g=>!!(g.data||g.error)))}));return Object.assign(u,{restart:()=>l?.()})}broadcastQueries(){this.onBroadcast&&this.onBroadcast(),this.obsQueries.forEach(e=>e.notify())}inFlightLinkObservables=new Re(!1);getObservableFromLink(e,n,r,o,i,s=n?.queryDeduplication??this.queryDeduplication){let c={},{serverQuery:l,clientQuery:u,operationType:d,hasIncrementalDirective:f}=this.getDocumentInfo(e),h=Se(e),p={client:this.client};if(r=this.cache.serializeVariables(e,r),l){let{inFlightLinkObservables:S,link:y}=this;try{let w=function(I){return new F(R=>{function M(){return I.subscribe({next:R.next.bind(R),complete:R.complete.bind(R),error:R.error.bind(R)})}let j=M();return c.restart||=()=>{j.unsubscribe(),j=M()},()=>{j.unsubscribe(),c.restart=void 0}})};var g=w;let D=this.incrementalHandler.prepareRequest({query:l,variables:r,context:C(v(v({},this.defaultContext),n),{queryDeduplication:s}),extensions:i});if(n=D.context,s){let I=Kn(l),R=De(r);c=S.lookup(I,R),c.observable||(c.observable=jr(y,D,p).pipe(w,Mn(()=>{S.peek(I,R)===c&&S.remove(I,R)}),d===qe.SUBSCRIPTION?Bt():dr({refCount:!0})))}else c.observable=jr(y,D,p).pipe(w)}catch(D){c.observable=ur(()=>D)}}else c.observable=U({data:{}});if(u){let{operation:S}=Pe(e);!1,T(!f,100,S[0].toUpperCase()+S.slice(1),h??"(anonymous)"),c.observable=c.observable.pipe(we(y=>re(this.localState.execute({client:this.client,document:u,remoteResult:y,context:n,variables:r,fetchPolicy:o}))))}return{restart:()=>c.restart?.(),observable:c.observable.pipe(jt(S=>{throw S=QS(S),ph(S),S}))}}getResultsFromLink(e,{queryInfo:n,cacheWriteBehavior:r,observableQuery:o,exposeExtensions:i,prunePendingDeferFragments:s}){let{errorPolicy:c}=e,l=this.cache.transformForLink(e.query);return this.getObservableFromLink(l,e.context,e.variables,e.fetchPolicy).observable.pipe(L(u=>{let S=n.markQueryResult(u,C(v({},e),{document:l,cacheWriteBehavior:r,returnPartialData:e.returnPartialData,prunePendingDeferFragments:s})),{dataState:d}=S,f=pe(S,["dataState"]),h=En(f);if(h&&c==="none"){o?.resetNotifications();let y=new $r(vh(f));throw cl.set(y,d),y}let p=d!=="complete",g=v({data:f.data},n.hasNext?{loading:!0,networkStatus:H.streaming,dataState:d,partial:p}:{dataState:d,loading:!1,networkStatus:H.ready,partial:p});return i&&"extensions"in f&&(g[_s]=f.extensions),h&&c!=="ignore"&&(g.error=new $r(vh(f)),g.networkStatus!==H.streaming&&(g.networkStatus=H.error)),g}),jt(u=>{if(c==="none")throw o?.resetNotifications(),u;let d={data:void 0,dataState:"empty",loading:!1,networkStatus:H.ready,partial:!0};return c!=="ignore"&&(d.error=u,d.networkStatus=H.error),U(d)}))}fetchObservableWithInfo(e,{networkStatus:n=H.loading,query:r=e.query,fetchQueryOperator:o=l=>l,onCacheHit:i=()=>{},observableQuery:s,exposeExtensions:c}){let l=this.getVariables(r,e.variables),{fetchPolicy:u="cache-first",errorPolicy:d="none",returnPartialData:f=!1,notifyOnNetworkStatusChange:h=!0,context:p={}}=e;this.prioritizeCacheValues&&(u==="network-only"||u==="cache-and-network")&&(u="cache-first");let g=Object.assign({},e,{query:r,variables:l,fetchPolicy:u,errorPolicy:d,returnPartialData:f,networkStatus:n,notifyOnNetworkStatusChange:h,context:p}),S=new Jo(this,s),y=M=>{g.variables=M;let j=u==="no-cache"?0:n===H.refetch&&g.refetchWritePolicy!=="merge"?1:2,Ee=this.fetchQueryByPolicy(g,{queryInfo:S,cacheWriteBehavior:j,onCacheHit:i,observableQuery:s,exposeExtensions:c});return Ee.observable=Ee.observable.pipe(o),g.fetchPolicy!=="standby"&&s?.applyNextFetchPolicy("after-fetch",e),Ee},D=()=>{this.fetchCancelFns.delete(S.id)};this.fetchCancelFns.set(S.id,M=>{w.next({kind:"E",error:M,source:"network"})});let w=new me,I,R;if(this.getDocumentInfo(g.query).hasClientExports)!1,I=re(this.localState.getExportedVariables({client:this.client,document:g.query,variables:g.variables,context:g.context})).pipe(we(M=>y(M).observable)),R=!0;else{let M=y(g.variables);R=M.fromLink,I=M.observable}return{observable:new F(M=>{M.add(D),I.subscribe(M),w.subscribe(M)}).pipe(Bt()),fromLink:R}}refetchQueries({updateCache:e,include:n,optimistic:r=!1,removeOptimistic:o=r?gs("refetchQueries"):void 0,onQueryUpdated:i}){let s=new Map;n&&this.getObservableQueries(n).forEach(l=>{if(l.options.fetchPolicy==="cache-only"||l.variablesUnknown)return;let u=l.getCurrentResult();s.set(l,{oq:l,lastDiff:{result:u?.data,complete:!u?.partial}})});let c=new Map;if(e){let l=new Set;this.cache.batch({update:e,optimistic:r&&o||!1,removeOptimistic:o,onWatchUpdated(u,d,f){let h=u.watcher;if(h instanceof Zo&&!l.has(h)){if(l.add(h),i){s.delete(h);let p=i(h,d,f);return p===!0&&(p=h.refetch().retain()),p!==!1&&c.set(h,p),p}i!==null&&h.options.fetchPolicy!=="cache-only"&&s.set(h,{oq:h,lastDiff:f,diff:d})}}})}return s.size&&s.forEach(({oq:l,lastDiff:u,diff:d})=>{let f;i&&(d||(d=l.getCacheDiff()),f=i(l,d,u)),(!i||f===!0)&&(f=l.refetch().retain()),f!==!1&&c.set(l,f)}),o&&this.cache.removeOptimistic(o),c}noCacheWarningsByCause=new WeakSet;maskOperation(e){let{document:n,data:r}=e;if(!1){let{fetchPolicy:o,cause:i={}}=e,s=Pe(n)?.operation;this.dataMasking&&o==="no-cache"&&!TR(n)&&!this.noCacheWarningsByCause.has(i)&&(this.noCacheWarningsByCause.add(i),!1)}return this.dataMasking?th(r,n,this.cache):r}maskFragment(e){let{data:n,fragment:r,fragmentName:o}=e;return this.dataMasking?eh(n,r,this.cache,o):n}fetchQueryByPolicy({query:e,variables:n,fetchPolicy:r,errorPolicy:o,returnPartialData:i,context:s,networkStatus:c},{cacheWriteBehavior:l,onCacheHit:u,queryInfo:d,observableQuery:f,exposeExtensions:h}){let p=()=>d.getDiff({query:e,variables:n,returnPartialData:!0,optimistic:!0}),g=(y,D)=>{let w=y.result;!1;let I=(M,j=y.dataState)=>(!y.complete&&!i&&(M=void 0,j="empty"),{data:M,dataState:j,loading:Ur(D),networkStatus:D,partial:!y.complete}),R=M=>U({kind:"N",value:I(M),resolvedVariables:n,source:"cache"});return(y.complete||i)&&this.getDocumentInfo(e).hasForcedResolvers?(!1,u(),re(this.localState.execute({client:this.client,document:e,remoteResult:w?{data:w}:void 0,context:s,variables:n,onlyRunForcedResolvers:!0,returnPartialData:!0,fetchPolicy:r}).then(M=>({kind:"N",value:I(M.data||void 0,y.complete?"complete":M.data?"partial":"empty"),resolvedVariables:n,source:"cache"})))):o==="none"&&D===H.refetch&&y.missing?R(void 0):R(w||void 0)},S=({prunePendingDeferFragments:y=!0}={})=>this.getResultsFromLink({query:e,variables:n,context:s,fetchPolicy:r,errorPolicy:o,returnPartialData:i,networkStatus:c},{cacheWriteBehavior:l,queryInfo:d,observableQuery:f,exposeExtensions:h,prunePendingDeferFragments:y}).pipe(eD(),iu(),L(D=>C(v({},D),{resolvedVariables:n,source:"network"})));switch(r){default:case"cache-first":{let y=p();return y.complete?{fromLink:!1,observable:g(y,H.ready)}:i?{fromLink:!0,observable:Ut(g(y,H.loading),S())}:{fromLink:!0,observable:S()}}case"cache-and-network":{let y=p();return y.complete||i?{fromLink:!0,observable:Ut(g(y,H.loading),S({prunePendingDeferFragments:!1}))}:{fromLink:!0,observable:S()}}case"cache-only":return{fromLink:!1,observable:Ut(g(p(),H.ready))};case"network-only":return{fromLink:!0,observable:S({prunePendingDeferFragments:c!==H.refetch})};case"no-cache":return{fromLink:!0,observable:S().pipe(L(y=>(y.kind==="N"&&y.value.data!=null&&this.cache.configuresScalars()&&(y.value.data=Mf(y.value.data,e,this.cache)),y)))};case"standby":return{fromLink:!1,observable:ue}}}};function eD(){let t=!1;return Ce({next(){t=!0},complete(){T(t,104)}})}function TR(t){let e=!0;return xe(t,{FragmentSpread:n=>{if(e=!!n.directives&&n.directives.some(r=>r.name.value==="unmask"),!e)return Sn}}),e}function wR(t){return xe(t,{FragmentSpread:e=>{if(!e.directives?.some(n=>n.name.value==="unmask"))return C(v({},e),{directives:[...e.directives||[],{kind:E.DIRECTIVE,name:{kind:E.NAME,value:"nonreactive"}}]})}})}function vh(t){var s;if(t.extensions?.[rn]==null)return t;let o=t,{extensions:i}=o,c=i,{[s=rn]:e}=c,n=pe(c,[na(s)]),r=pe(o,["extensions"]);return Object.keys(n).length>0&&(r.extensions=n),r}var tD=!1,zr=class{link;cache;disableNetworkFetches;set prioritizeCacheValues(e){this.queryManager.prioritizeCacheValues=e}get prioritizeCacheValues(){return this.queryManager.prioritizeCacheValues}version;queryDeduplication;defaultOptions;devtoolsConfig;refetchEventManager;queryManager;devToolsHookCb;resetStoreCallbacks=[];clearStoreCallbacks=[];constructor(e){!1;let{cache:n,documentTransform:r,ssrMode:o=!1,ssrForceFetchDelay:i=0,queryDeduplication:s=!0,defaultOptions:c,defaultContext:l,assumeImmutableResults:u=n.assumeImmutableResults,localState:d,devtools:f,dataMasking:h,link:p,incrementalHandler:g=new ks,experiments:S=[],refetchEventManager:y}=e;this.link=p,this.cache=n,this.queryDeduplication=s,this.defaultOptions=c||{},this.devtoolsConfig=C(v({},f),{enabled:f?.enabled??!1}),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.watchFragment=this.watchFragment.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.refetchObservableQueries=this.refetchObservableQueries.bind(this),this.version=ms,this.queryManager=new ul({client:this,defaultOptions:this.defaultOptions,defaultContext:l,documentTransform:r,queryDeduplication:s,ssrMode:o,dataMasking:!!h,clientOptions:e,incrementalHandler:g,assumeImmutableResults:u,onBroadcast:this.devtoolsConfig.enabled?()=>{this.devToolsHookCb&&this.devToolsHookCb()}:void 0,localState:d}),this.prioritizeCacheValues=o||i>0,i&&setTimeout(()=>{this.prioritizeCacheValues=!1},i),this.devtoolsConfig.enabled&&this.connectToDevTools(),S.forEach(D=>D.call(this,e)),this.refetchEventManager=y,this.refetchEventManager?.connect(this)}connectToDevTools(){if(typeof window>"u")return;let e=window,n=Symbol.for("apollo.devtools");if((e[n]=e[n]||[]).push(this),e.__APOLLO_CLIENT__=this,!tD&&!1){tD=!0;let r=window,o=r.navigator.userAgent,i;typeof o=="string"&&(o.indexOf("Chrome/")>-1?i="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":o.indexOf("Firefox/")>-1&&(i="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),r.document&&r.top===r.self&&/^(https?|file):$/.test(r.location.protocol)&&i&&setTimeout(()=>{r.__APOLLO_DEVTOOLS_GLOBAL_HOOK__||!1},1e4)}}get documentTransform(){return this.queryManager.documentTransform}get localState(){return this.queryManager.localState}set localState(e){this.queryManager.localState=e}stop(){this.queryManager.stop(),this.refetchEventManager?.disconnect(this)}watchQuery(e){let{refetchOn:n}=e;if(this.defaultOptions.watchQuery){let r=this.defaultOptions.watchQuery.refetchOn,o;n&&typeof n=="object"&&(typeof r=="object"?o=v(v({},r),n):r!=null&&(o=i=>{let s=n[i.source]??r;return typeof s=="function"?s(i):s})),e=Hr(this.defaultOptions.watchQuery,e),o&&(e.refetchOn=o)}if(!1){let{query:r}=e,{refetchEventManager:o}=this;if(n){let i=Se(r,"(anonymous)");o?typeof n=="object"&&Object.keys(n).forEach(s=>{o.hasSource(s)||!1}):!1}}return this.queryManager.watchQuery(e)}query=e=>(this.defaultOptions.query&&(e=Hr(this.defaultOptions.query,e)),!1,this.queryManager.query(e));mutate=e=>{let n=Hr(it({fetchPolicy:"network-only",errorPolicy:"none"},this.defaultOptions.mutate),e);return!1,Ge(n.mutation,qe.MUTATION),this.queryManager.mutate(n)};subscribe(e){let n={},r=this.queryManager.startGraphQLSubscription(e),o=r.pipe(L(i=>C(v({},i),{data:this.queryManager.maskOperation({document:e.query,data:i.data,fetchPolicy:e.fetchPolicy,cause:n})})));return Object.assign(o,{restart:r.restart})}readQuery(e,n=!!e.optimistic){return this.cache.readQuery(C(v({},e),{query:this.transform(e.query)}),n)}watchFragment(e){let n=this.queryManager.dataMasking,r=this.cache.watchFragment(C(v({},e),{fragment:this.transform(e.fragment,n)}));return r}readFragment(e,n=!!e.optimistic){return this.cache.readFragment(C(v({},e),{fragment:this.transform(e.fragment)}),n)}writeQuery(e){let n=this.cache.writeQuery(e);return e.broadcast!==!1&&this.queryManager.broadcastQueries(),n}writeFragment(e){let n=this.cache.writeFragment(e);return e.broadcast!==!1&&this.queryManager.broadcastQueries(),n}__actionHookForDevTools(e){this.devToolsHookCb=e}__requestRaw(e){return jr(this.link,e,{client:this})}resetStore(){return Promise.resolve().then(()=>this.queryManager.clearStore({discardWatches:!1})).then(()=>Promise.all(this.resetStoreCallbacks.map(e=>e()))).then(()=>this.refetchObservableQueries())}clearStore(){return Promise.resolve().then(()=>this.queryManager.clearStore({discardWatches:!0})).then(()=>Promise.all(this.clearStoreCallbacks.map(e=>e())))}onResetStore(e){return this.resetStoreCallbacks.push(e),()=>{this.resetStoreCallbacks=this.resetStoreCallbacks.filter(n=>n!==e)}}onClearStore(e){return this.clearStoreCallbacks.push(e),()=>{this.clearStoreCallbacks=this.clearStoreCallbacks.filter(n=>n!==e)}}reFetchObservableQueries;refetchObservableQueries(e){return this.queryManager.refetchObservableQueries(e)}refetchQueries(e){let n=this.queryManager.refetchQueries(e),r=[],o=[];n.forEach((s,c)=>{r.push(c),o.push(s)});let i=Promise.all(o);return i.queries=r,i.results=o,i.catch(s=>{!1}),i}getObservableQueries(e="active"){return this.queryManager.getObservableQueries(e)}extract(e){return this.cache.extract(e)}restore(e){return this.cache.restore(e)}setLink(e){this.link=e}get defaultContext(){return this.queryManager.defaultContext}maskedFragmentTransform=new wn(jf);transform(e,n=!1){let r=this.queryManager.transform(e);return n?this.maskedFragmentTransform.transformDocument(r):r}};!1;var dl=new Map,Sh=new Map,nD=!0,fl=!1;function rD(t){return t.replace(/[\s,]+/g," ").trim()}function CR(t){return rD(t.source.body.substring(t.start,t.end))}function IR(t){var e=new Set,n=[];return t.definitions.forEach(function(r){if(r.kind==="FragmentDefinition"){var o=r.name.value,i=CR(r.loc),s=Sh.get(o);s&&!s.has(i)?nD&&console.warn("Warning: fragment with name "+o+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):s||Sh.set(o,s=new Set),s.add(i),e.has(i)||(e.add(i),n.push(r))}else n.push(r)}),Si(Si({},t),{definitions:n})}function RR(t){var e=new Set(t.definitions);e.forEach(function(r){r.loc&&delete r.loc,Object.keys(r).forEach(function(o){var i=r[o];i&&typeof i=="object"&&e.add(i)})});var n=t.loc;return n&&(delete n.startToken,delete n.endToken),t}function PR(t){var e=rD(t);if(!dl.has(e)){var n=Vc(t,{experimentalFragmentVariables:fl,allowLegacyFragmentVariables:fl});if(!n||n.kind!=="Document")throw new Error("Not a valid GraphQL document.");dl.set(e,RR(IR(n)))}return dl.get(e)}function tr(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];typeof t=="string"&&(t=[t]);var r=t[0];return e.forEach(function(o,i){o&&o.kind==="Document"?r+=o.loc.source.body:r+=o,r+=t[i+1]}),PR(r)}function oD(){dl.clear(),Sh.clear()}function iD(){nD=!1}function sD(){fl=!0}function aD(){fl=!1}var Us={gql:tr,resetCaches:oD,disableFragmentWarnings:iD,enableExperimentalFragmentVariables:sD,disableExperimentalFragmentVariables:aD};(function(t){t.gql=Us.gql,t.resetCaches=Us.resetCaches,t.disableFragmentWarnings=Us.disableFragmentWarnings,t.enableExperimentalFragmentVariables=Us.enableExperimentalFragmentVariables,t.disableExperimentalFragmentVariables=Us.disableExperimentalFragmentVariables})(tr||(tr={}));tr.default=tr;function cD(t){return new F(e=>(t().then(n=>{e.closed||(e.next(n),e.complete())},n=>{e.closed||e.error(n)}),()=>e.unsubscribe()))}function MR(t,e){return e?t.pipe(L(n=>C(v({},n),{loading:!1})),bi({data:void 0,loading:!0})):t.pipe(L(n=>C(v({},n),{loading:!1})))}var bh=class{zone;constructor(e){this.zone=e}now=Date.now;schedule(e,n=0,r){return this.zone.run(()=>eu.schedule(e,n,r))}};function Eh(t,e){return t.pipe(lr(new bh(e)))}var Th=class{obsQuery;valueChanges;constructor(e,n){this.obsQuery=e,this.valueChanges=Eh(re(this.obsQuery),n)}get options(){return this.obsQuery.options}get variables(){return this.obsQuery.variables}getCurrentResult(){return this.obsQuery.getCurrentResult()}refetch(e){return this.obsQuery.refetch(e)}fetchMore(e){return this.obsQuery.fetchMore(e)}subscribeToMore(e){return this.obsQuery.subscribeToMore(e)}updateQuery(e){return this.obsQuery.updateQuery(e)}stopPolling(){return this.obsQuery.stopPolling()}startPolling(e){return this.obsQuery.startPolling(e)}setVariables(e){return this.obsQuery.setVariables(e)}reobserve(e){return this.obsQuery.reobserve(e)}},lD=new A("APOLLO_FLAGS"),uD=new A("APOLLO_OPTIONS"),_R=new A("APOLLO_NAMED_OPTIONS"),hl=class{ngZone;flags;_client;useMutationLoading;constructor(e,n,r){this.ngZone=e,this.flags=n,this._client=r,this.useMutationLoading=n?.useMutationLoading??!1}watchQuery(e){return new Th(this.ensureClient().watchQuery(v({},e)),this.ngZone)}query(e){return cD(()=>this.ensureClient().query(v({},e)))}mutate(e){return MR(cD(()=>this.ensureClient().mutate(v({},e))),e.useMutationLoading??this.useMutationLoading)}watchFragment(e){let i=e,{useZone:n}=i,r=pe(i,["useZone"]),o=this.ensureClient().watchFragment(v({},r));return n!==!0?o:Eh(o,this.ngZone)}subscribe(e){let i=e,{useZone:n}=i,r=pe(i,["useZone"]),o=this.ensureClient().subscribe(v({},r));return n!==!0?o:Eh(o,this.ngZone)}get client(){return this.ensureClient()}set client(e){if(this._client)throw new Error("Client has been already defined");this._client=e}ensureClient(){return this.checkInstance(),this._client}checkInstance(){if(this._client)return!0;throw new Error("Client has not been defined yet")}},wh=(()=>{class t extends hl{map=new Map;constructor(n,r,o,i){if(super(n,i),r&&this.createDefault(r),o&&typeof o=="object"){for(let s in o)if(o.hasOwnProperty(s)){let c=o[s];this.create(c,s)}}}create(n,r){Dh(r)?this.createNamed(r,n):this.createDefault(n)}default(){return this}use(n){return Dh(n)?this.map.get(n):this.default()}createDefault(n){if(this._client)throw new Error("Apollo has been already created.");this.client=this.ngZone.runOutsideAngular(()=>new zr(n))}createNamed(n,r){if(this.map.has(n))throw new Error(`Client ${n} has been already created`);this.map.set(n,new hl(this.ngZone,this.flags,this.ngZone.runOutsideAngular(()=>new zr(r))))}removeClient(n){Dh(n)?this.map.delete(n):this._client=void 0}static \u0275fac=function(r){return new(r||t)(O(Ve),O(uD,8),O(_R,8),O(lD,8))};static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();function Dh(t){return!!t&&t!=="default"}function dD(t,e={}){return[wh,{provide:uD,useFactory:t},{provide:lD,useValue:e}]}var kR=tr,Ch=kR;var fD=Ch`
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
`,hD=Ch`
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
`;var bt=(()=>{class t{constructor(n){this.apollo=n}getAbilities(){return this.pokemon.pipe(L(n=>n.getPokemon.abilities))}getDexNumber(){return this.pokemon.pipe(L(n=>n.getPokemon.num))}getMove(n){return this.apollo.query({query:hD,variables:{move:n}}).pipe(L(r=>r.data),Me(r=>r!==void 0))}getMoves(){return this.pokemon.pipe(L(n=>{let r=[],o=["dreamworldMoves","eggMoves","eventMoves","tmMoves","tutorMoves","virtualTransferMoves","levelUpMoves"],i=c=>{c&&Object.keys(c).forEach(l=>{let u=c[l];u&&o.forEach(d=>{let f=u[d];Array.isArray(f)&&f.forEach(h=>{r.push(h.move)})})})},s=c=>{c&&c.forEach(l=>{i(l.learnsets),s(l.preevolutions),s(l.evolutions)})};return i(n.getPokemon.learnsets),s(n.getPokemon.preevolutions??null),s(n.getPokemon.evolutions??null),r}))}getPokemon(n){return this.pokemon=this.apollo.query({query:fD,variables:{pokemon:n}}).pipe(L(r=>r.data),Me(r=>r!==void 0)),this.pokemon}getStats(){return this.pokemon.pipe(L(n=>n.getPokemon.baseStats))}getTypes(){return this.pokemon.pipe(L(n=>n.getPokemon.types))}static{this.\u0275fac=function(r){return new(r||t)(O(wh))}}static{this.\u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var pD=(()=>{class t{constructor(n,r){this.stateService=n,this.graphqlService=r,this.pokemonList=document.getElementById("pokemonList"),this.raidTier="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n,this.populatePokemonList()}),this.stateService.regionList.subscribe(n=>{this.region=n,this.populatePokemonList()})}ngAfterViewInit(){this.pokemonList=document.getElementById("pokemonList")}populatePokemonList(){this.pokemonList&&(this.resetPokemonList(),(this.raidTier=="5"?Yt:Zt).sort((r,o)=>r.name.localeCompare(o.name)).filter(r=>r.region==m[this.region]).forEach(r=>{let o=document.createElement("option");o.value=r.name,o.text=r.name,r.formName&&(o.id=r.formName),this.pokemonList.add(o)}))}resetPokemonList(){this.pokemonList.innerHTML="",this.pokemonList.innerHTML='<option value="">-- Pokemon --</option>'}valueChanged(){let n=document.getElementById("pokemonList"),r=n.selectedIndex,o=n.options[r];if(o){let i=o.id;if(vn(),o.value){this.graphqlService.getPokemon(i||o.value.toLowerCase()),this.stateService.changePokemon(o.value);let s=document.getElementById("pokemonContent");s&&(s.style.display="none"),this.stateService.changeLoading(!0)}}}static{this.\u0275fac=function(r){return new(r||t)(q(se),q(bt))}}static{this.\u0275cmp=ee({type:t,selectors:[["app-pokemon-list"]],decls:3,vars:0,consts:[["id","pokemonList",3,"change"],["value",""]],template:function(r,o){r&1&&(ke(0,"select",0),St("change",function(){return o.valueChanged()}),ke(1,"option",1),ge(2,"-- Pokemon --"),We()())},encapsulation:2})}}return t})();var Oe=(function(t){return t.Bug="Bug",t.Dark="Dark",t.Dragon="Dragon",t.Electric="Electric",t.Fairy="Fairy",t.Fighting="Fighting",t.Fire="Fire",t.Flying="Flying",t.Ghost="Ghost",t.Grass="Grass",t.Ground="Ground",t.Ice="Ice",t.Normal="Normal",t.Poison="Poison",t.Psychic="Psychic",t.Rock="Rock",t.Steel="Steel",t.Water="Water",t})(Oe||{}),js=[{name:Oe.Bug,matchup:{offense:{double:["dark","grass","psychic"],immune:[],normal:["bug","dragon","electric","ground","ice","normal","rock","water"],resisted:["fairy","fighting","fire","flying","ghost","poison","steel"]},defense:{double:["fire","flying","rock"],immune:[],normal:["bug","dark","dragon","electric","fairy","ghost","ice","normal","poison","psychic","steel","water"],resisted:["fighting","grass","ground"]}}},{name:Oe.Dark,matchup:{offense:{double:["ghost","psychic"],immune:[],normal:["bug","dragon","electric","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["dark","fairy","fighting"]},defense:{double:["bug","fairy","fighting"],immune:["psychic"],normal:["dragon","electric","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["dark","ghost"]}}},{name:Oe.Dragon,matchup:{offense:{double:["dragon"],immune:["fairy"],normal:["bug","dark","electric","fighting","fire","flying","ghost","grass","ground","ice","normal","poison","psychic","rock","water"],resisted:["steel"]},defense:{double:["dragon","fairy","ice"],immune:[],normal:["bug","dark","fighting","flying","ghost","ground","normal","poison","psychic","rock","steel"],resisted:["electric","fire","grass","water"]}}},{name:Oe.Electric,matchup:{offense:{double:["flying","water"],immune:["ground"],normal:["bug","dark","fairy","fighting","fire","ghost","ice","normal","poison","psychic","rock","steel"],resisted:["dragon","electric","grass"]},defense:{double:["ground"],immune:[],normal:["bug","dark","dragon","fairy","fighting","fire","ghost","grass","ice","normal","poison","psychic","rock","water"],resisted:["electric","flying","steel"]}}},{name:Oe.Fairy,matchup:{offense:{double:["dark","dragon","fighting"],immune:[],normal:["bug","electric","fairy","flying","ghost","grass","ground","ice","normal","psychic","rock","water"],resisted:["fire","poison","steel"]},defense:{double:["poison","steel"],immune:["dragon"],normal:["electric","fairy","fire","flying","ghost","grass","ground","ice","normal","psychic","rock","water"],resisted:["bug","dark","fighting"]}}},{name:Oe.Fighting,matchup:{offense:{double:["dark","ice","normal","rock","steel"],immune:["ghost"],normal:["dragon","electric","fighting","fire","grass","ground","water"],resisted:["bug","fairy","flying","poison","psychic"]},defense:{double:["fairy","flying","psychic"],immune:[],normal:["dragon","electric","fighting","fire","ghost","grass","ground","ice","normal","poison","steel","water"],resisted:["bug","dark","rock"]}}},{name:Oe.Fire,matchup:{offense:{double:["bug","grass","ice","steel"],immune:[],normal:["dark","electric","fairy","fighting","flying","ghost","ground","normal","poison","psychic"],resisted:["dragon","fire","rock","water"]},defense:{double:["ground","rock","water"],immune:[],normal:["dark","dragon","electric","fighting","flying","ghost","normal","poison","psychic"],resisted:["bug","fairy","fire","grass","ice","steel"]}}},{name:Oe.Flying,matchup:{offense:{double:["bug","fighting","grass"],immune:[],normal:["dark","dragon","fairy","fire","flying","ghost","ground","ice","normal","poison","psychic","water"],resisted:["electric","rock","steel"]},defense:{double:["electric","ice","rock"],immune:["ground"],normal:["dark","dragon","fairy","fire","flying","ghost","normal","poison","psychic","steel","water"],resisted:["bug","fighting","grass"]}}},{name:Oe.Ghost,matchup:{offense:{double:["ghost","psychic"],immune:["normal"],normal:["bug","dragon","electric","fairy","fighting","fire","flying","grass","ground","ice","poison","rock","steel","water"],resisted:["dark"]},defense:{double:["dark","ghost"],immune:["fighting","normal"],normal:["dragon","electric","fairy","fire","flying","grass","ground","ice","psychic","rock","steel","water"],resisted:["bug","poison"]}}},{name:Oe.Grass,matchup:{offense:{double:["ground","rock","water"],immune:[],normal:["dark","electric","fairy","fighting","ghost","ice","normal","psychic"],resisted:["bug","dragon","fire","flying","grass","poison","steel"]},defense:{double:["bug","fire","flying","ice","poison"],immune:[],normal:["dark","dragon","fairy","fighting","ghost","normal","psychic","rock","steel"],resisted:["electric","grass","ground","water"]}}},{name:Oe.Ground,matchup:{offense:{double:["electric","fire","poison","rock","steel"],immune:["flying"],normal:["dark","dragon","fairy","fighting","ghost","ground","ice","normal","psychic","water"],resisted:["bug","grass"]},defense:{double:["grass","ice","water"],immune:["electric"],normal:["bug","dark","dragon","fairy","fighting","fire","flying","ghost","ground","normal","psychic","steel"],resisted:["poison","rock"]}}},{name:Oe.Ice,matchup:{offense:{double:["dragon","flying","grass","ground"],immune:[],normal:["bug","dark","electric","fairy","fighting","ghost","normal","poison","psychic","rock"],resisted:["fire","ice","steel","water"]},defense:{double:["fighting","fire","rock","steel"],immune:[],normal:["bug","dark","dragon","electric","fairy","flying","ghost","grass","ground","normal","poison","psychic","water"],resisted:["ice"]}}},{name:Oe.Normal,matchup:{offense:{double:[],immune:["ghost"],normal:["bug","dark","dragon","electric","fairy","fighting","fire","flying","grass","ground","ice","normal","poison","psychic","water"],resisted:["rock","steel"]},defense:{double:["fighting"],immune:["ghost"],normal:["bug","dark","dragon","electric","fairy","fire","flying","grass","ground","ice","normal","poison","psychic","rock","steel","water"],resisted:[]}}},{name:Oe.Poison,matchup:{offense:{double:["fairy","grass"],immune:["steel"],normal:["bug","dark","dragon","electric","fighting","fire","flying","ice","normal","psychic","water"],resisted:["ghost","ground","poison","rock"]},defense:{double:["ground","psychic"],immune:[],normal:["dark","dragon","electric","fire","flying","ghost","ice","normal","rock","steel","water"],resisted:["bug","fairy","fighting","grass","poison"]}}},{name:Oe.Psychic,matchup:{offense:{double:["fighting","poison"],immune:["dark"],normal:["bug","dragon","electric","fairy","fire","flying","ghost","grass","ground","ice","normal","rock","water"],resisted:["psychic","steel"]},defense:{double:["bug","dark","ghost"],immune:[],normal:["dragon","electric","fairy","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["fighting","psychic"]}}},{name:Oe.Rock,matchup:{offense:{double:["bug","fire","flying","ice"],immune:[],normal:["dark","dragon","electric","fairy","ghost","grass","normal","poison","psychic","rock","water"],resisted:["fighting","ground","steel"]},defense:{double:["fighting","grass","ground","steel","water"],immune:[],normal:["bug","dark","dragon","electric","fairy","ghost","ice","psychic","rock"],resisted:["fire","flying","normal","poison"]}}},{name:Oe.Steel,matchup:{offense:{double:["fairy","ice","rock"],immune:[],normal:["bug","dark","dragon","fighting","flying","ghost","grass","ground","normal","poison","psychic"],resisted:["electric","fire","steel","water"]},defense:{double:["fighting","fire","ground"],immune:["poison"],normal:["dark","electric","ghost","water"],resisted:["bug","dragon","fairy","flying","grass","ice","normal","psychic","rock","steel"]}}},{name:Oe.Water,matchup:{offense:{double:["fire","ground","rock"],immune:[],normal:["bug","dark","electric","fairy","fighting","flying","ghost","ice","normal","poison","psychic","steel"],resisted:["dragon","grass","water"]},defense:{double:["electric","grass"],immune:[],normal:["bug","dark","dragon","fairy","fighting","flying","ghost","ground","normal","poison","psychic","rock"],resisted:["fire","ice","steel","water"]}}}];var mD=(()=>{class t{constructor(n){this.stateService=n}ngOnInit(){js.forEach(n=>{let r=document.createElement("option");r.value=n.name,r.text=n.name,document.getElementById("teraList").add(r)})}valueChanged(){let n=document.getElementById("teraList"),r=n.selectedIndex,o=n.options[r];this.stateService.changeTeraType(o.value)}static{this.\u0275fac=function(r){return new(r||t)(q(se))}}static{this.\u0275cmp=ee({type:t,selectors:[["app-tera-type"]],decls:3,vars:0,consts:[["id","teraList",3,"change"],["value",""]],template:function(r,o){r&1&&(ke(0,"select",0),St("change",function(){return o.valueChanged()}),ke(1,"option",1),ge(2,"-- Tera Type --"),We()())},encapsulation:2})}}return t})();var gD=(()=>{class t{constructor(n){this.stateService=n,this.raidTier="",this.pokemonList="",this.teraType="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n}),this.stateService.teraType.subscribe(n=>{this.teraType=n}),this.stateService.regionList.subscribe(n=>{this.region=n})}shareRaid(){let n=location.origin+"/tera-raid-info/";n+=this.raidTier,n+="/"+this.region,n+="/"+this.pokemonList,n+="/"+this.teraType,navigator.clipboard.writeText(n);let r=document.getElementById("shareText");r.innerText="Copied to Clipboard"}shareRaidMouseOut(){let n=document.getElementById("shareText");n.innerText="Share Raid"}static{this.\u0275fac=function(r){return new(r||t)(q(se))}}static{this.\u0275cmp=ee({type:t,selectors:[["app-share-raid"]],decls:3,vars:0,consts:[["id","shareRaid",1,"share",3,"click","mouseout"],["id","shareText",1,"shareText"]],template:function(r,o){r&1&&(ke(0,"div",0),St("click",function(){return o.shareRaid()})("mouseout",function(){return o.shareRaidMouseOut()}),ke(1,"div",1),ge(2,"Share Raid"),We()())},encapsulation:2})}}return t})();var yD=(()=>{class t{constructor(n,r){this.grapghqlService=n,this.stateService=r,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setImages()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setImages(){this.pokemonList&&this.grapghqlService.getDexNumber().subscribe(n=>{let r=this.raidTier=="5"?Yt:Zt,o="";r.filter(i=>i.name==this.pokemonList&&i.region==m[this.region]).forEach(i=>{i.imageAlt&&(o=i.imageAlt)}),fe(document.getElementById("pokemonImageNormal"),`<img alt="Normal" title="Normal" src="./assets/pokemon/${df(n,3,"0")}${o}.png" />`),fe(document.getElementById("pokemonImageShiny"),`<img alt="Shiny" title="Shiny" src="./assets/pokemon/shiny/${df(n,3,"0")}${o}.png" />`)})}static{this.\u0275fac=function(r){return new(r||t)(q(bt),q(se))}}static{this.\u0275cmp=ee({type:t,selectors:[["app-pokemon-images"]],decls:2,vars:0,consts:[["id","pokemonImageNormal",1,"imgNormal"],["id","pokemonImageShiny",1,"imgShiny"]],template:function(r,o){r&1&&Le(0,"div",0)(1,"div",1)},encapsulation:2})}}return t})();var vD=(()=>{class t{constructor(n,r){this.graphqlService=n,this.stateService=r,this.pokemonList=""}ngOnInit(){this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setTypes()})}setTypes(){this.pokemonList&&this.graphqlService.getTypes().subscribe(n=>{n.forEach(r=>{fe(document.getElementById("pokemonTypes"),this.createTypeDisplay(r.name))})})}createTypeDisplay(n){return`<div class="typeText ${n.toLowerCase()}">${n}</div>`}static{this.\u0275fac=function(r){return new(r||t)(q(bt),q(se))}}static{this.\u0275cmp=ee({type:t,selectors:[["app-pokemon-types"]],decls:1,vars:0,consts:[["id","pokemonTypes"]],template:function(r,o){r&1&&Le(0,"div",0)},encapsulation:2})}}return t})();var SD=(()=>{class t{constructor(n,r){this.graphqlService=n,this.stateService=r,this.raidTier="",this.pokemonList=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setAbilities()})}setAbilities(){if(this.pokemonList){let n=document.getElementById("pokemonAbility");this.graphqlService.getAbilities().subscribe(r=>{fe(n,"<h3>Ability:</h3>"),fe(n,this.createAbilityDiv(r.first)),r.second&&fe(n,this.createAbilityDiv(r.second)),this.canShowHidden()&&r.hidden&&fe(n,this.createAbilityDiv(r.hidden,!0))})}}createAbilityDiv(n,r){return`<div class="typeMatchupText" data-info="${n.shortDesc}">${n.name}${r?" (H)":""}</div>`}canShowHidden(){return this.raidTier=="6"||this.raidTier=="5"&&this.pokemonList=="Ditto"}static{this.\u0275fac=function(r){return new(r||t)(q(bt),q(se))}}static{this.\u0275cmp=ee({type:t,selectors:[["app-pokemon-ability"]],decls:1,vars:0,consts:[["id","pokemonAbility"]],template:function(r,o){r&1&&Le(0,"div",0)},encapsulation:2})}}return t})();var DD=(()=>{class t{constructor(n,r){this.graphqlService=n,this.stateService=r}ngOnInit(){this.stateService.pokemonList.subscribe(n=>{n&&this.setStats()})}setStats(){this.graphqlService.getStats().subscribe(n=>{fe(document.getElementById("pokemonStatsWrapper"),this.createStatsDisplay(n))})}createStatsDisplay(n){let r='<div id="pokemonStats"><h3>Base Stats</h3>';return r+=`<div class="stat hp"><p>HP</p><p data-label="HP">${n.hp}</p></div>`,r+=`<div class="stat at"><p>Atk</p><p data-label="Atk">${n.attack}</p></div>`,r+=`<div class="stat df"><p>Def</p><p data-label="Def">${n.defense}</p></div>`,r+=`<div class="stat sa"><p>Sp.Atk</p><p data-label="Sp. Atk">${n.specialattack}</p></div>`,r+=`<div class="stat sd"><p>Sp.Def</p><p data-label="Sp. Def">${n.specialdefense}</p></div>`,r+=`<div class="stat sp"><p>Spd</p><p data-label="Spd">${n.speed}</p></div></div>`,r}static{this.\u0275fac=function(r){return new(r||t)(q(bt),q(se))}}static{this.\u0275cmp=ee({type:t,selectors:[["app-pokemon-stats"]],decls:1,vars:0,consts:[["id","pokemonStatsWrapper"]],template:function(r,o){r&1&&Le(0,"div",0)},encapsulation:2})}}return t})();var pl=(()=>{class t{advantages(n,r=!1){let o=[];return js.filter(i=>i.name.includes(n)).forEach(i=>{let s=i.matchup.offense;s.double.forEach(c=>{o.push({name:c,multiplier:2})}),r&&(s.resisted.forEach(c=>{o.push({name:c,multiplier:.5})}),s.immune.forEach(c=>{o.push({name:c,multiplier:0})}))}),o}weaknesses(n){let r=[];return js.filter(o=>o.name.includes(n)).forEach(o=>{let i=o.matchup.defense;i.double.forEach(s=>{r.push({name:s,multiplier:2})}),i.resisted.forEach(s=>{r.push({name:s,multiplier:.5})}),i.immune.forEach(s=>{r.push({name:s,multiplier:0})})}),r}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var ED=(()=>{class t{constructor(n,r,o){this.stateService=n,this.typeCalcService=r,this.graphqlService=o,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setMoves()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setMoves(){let n=document.getElementById("pokemonMoves"),r=this.raidTier=="5"?Yt:Zt,o=[],i=[],s=[],c=[];this.pokemonList&&(r.filter(l=>l.name==this.pokemonList&&l.region==m[this.region]).forEach(l=>{l.info.specialMoves&&l.info.specialMoves.sort((u,d)=>u.localeCompare(d)).forEach(u=>{i.push(u),this.graphqlService.getMove(u.toLowerCase().replaceAll(" ","").replaceAll("-","")).subscribe(d=>{o.push(d.getMove)})}),l.info.moves.forEach(u=>{i.push(u)})}),this.graphqlService.getMoves().subscribe(l=>{fe(n,"<h3>Moves:</h3>"),i.forEach(h=>{o.push(...l.filter(p=>p.name==h))}),[...new Map(o.map(h=>[h.key,h])).values()].sort((h,p)=>h.name.localeCompare(p.name)).sort((h,p)=>h.category!="Status"&&p.category=="Status"?-1:(p.category!="Status"&&h.category=="Status",1)).forEach(h=>{let p=this.createMoveDiv(h);fe(document.getElementById("pokemonMoves"),p),s.push(p),h.category!="Status"&&c.push(h.type)}),this.stateService.changeMoveList(s.join("")),c=[...new Set(c)];let d=[];c.forEach(h=>{let p=this.typeCalcService.advantages(h);d=d.concat(p)});let f=[];d=[...new Map(d.map(h=>[h.name,h])).values()],d.sort((h,p)=>h.name.localeCompare(p.name)).forEach(h=>{f.push(fs(h))}),f.length&&fe(document.getElementById("pokemonTypeAdvantages"),"<h3>Type Advantages:</h3>"+f.join(""))}))}createMoveDiv(n){let r=`<div class="typeMatchupText ${n.type.toLowerCase()}">${n.name}`;if(r+='<div class="moveStats">',r+=`<div class="type">${n.category.toString()}</div>`,r+=`<div class="bp">Pwr: ${n.basePower=="0"?"--":n.basePower}</div>`,r+=`<div class="pp">PP: ${n.pp}</div>`,r+=`<div class="acc">Acc: ${n.accuracy}</div>`,r+=`<div class="desc">${n.desc=="No additional effect."?n.shortDesc:n.desc}</div>`,n.category!="Status"){let o=this.typeCalcService.advantages(n.type.toString()),i=[];o.forEach(s=>{s.multiplier==2&&i.push(`${ko(s.name)}`)}),i.length&&(r+=`<div class="adv">Advantages: ${i.join(", ")}</div>`)}return r+="</div></div>",r}static{this.\u0275fac=function(r){return new(r||t)(q(se),q(pl),q(bt))}}static{this.\u0275cmp=ee({type:t,selectors:[["app-pokemon-moves"]],decls:1,vars:0,consts:[["id","pokemonMoves",1,"pokemonMoves"]],template:function(r,o){r&1&&Le(0,"div",0)},encapsulation:2})}}return t})();var TD=(()=>{class t{constructor(n){this.stateService=n,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setActions()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setActions(){this.pokemonList&&(fe(document.getElementById("pokemonActions"),"<h3>Actions:</h3>"),(this.raidTier=="5"?Yt:Zt).filter(r=>r.name==this.pokemonList&&r.region==m[this.region]).forEach(r=>{r.info.actions?.sort((o,i)=>i.threshold-o.threshold).forEach(o=>{fe(document.getElementById("pokemonActions"),this.createActionDiv(o))})}))}createActionDiv(n){return`<div class="actions ${n.type.toLowerCase()}-${n.threshold.toString()}" data-info="${n.threshold.toString()}% ${n.type.toString()} Remaining">${n.action}</div>`}static{this.\u0275fac=function(r){return new(r||t)(q(se))}}static{this.\u0275cmp=ee({type:t,selectors:[["app-pokemon-actions"]],decls:1,vars:0,consts:[[1,"pokemonActions"]],template:function(r,o){r&1&&Le(0,"div",0)},encapsulation:2})}}return t})();var wD=(()=>{class t{constructor(n){this.stateService=n,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setHerbs()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setHerbs(){this.pokemonList&&(fe(document.getElementById("pokemonHerbs"),"<h3>Herbs Dropped:</h3>"),(this.raidTier=="5"?Yt:Zt).filter(r=>r.name==this.pokemonList&&r.region==m[this.region]).forEach(r=>{r.info.herbs.sort((o,i)=>o.name.localeCompare(i.name)).forEach(o=>{fe(document.getElementById("pokemonHerbs"),this.createHerbDiv(o))})}))}createHerbDiv(n){return`<div class="herbPill ${n.name.toLowerCase()}">${n.name} - ${n.chance}%</div>`}static{this.\u0275fac=function(r){return new(r||t)(q(se))}}static{this.\u0275cmp=ee({type:t,selectors:[["app-pokemon-herbs"]],decls:1,vars:0,consts:[[1,"pokemonHerbs"]],template:function(r,o){r&1&&Le(0,"div",0)},encapsulation:2})}}return t})();var CD=(()=>{class t{constructor(n,r){this.stateService=n,this.typeCalcService=r,this.raidTier="",this.pokemonList="",this.teraType="",this.moveList=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.handleChange()}),this.stateService.teraType.subscribe(n=>{this.teraType=n,this.handleChange()}),this.stateService.moveList.subscribe(n=>{this.moveList=n,this.handleChange()})}handleChange(){this.pokemonList&&(vn("pokemonTeraAdvantages"),vn("pokemonTeraWeaknesses"),this.pokemonList&&(this.raidTier&&this.teraType&&this.setTypeWeaknesses(),this.moveList&&this.teraType&&this.moveList.includes("Tera Blast")&&this.setTeraTypeAdvantages()),this.teraType?(this.pokemonList&&this.raidTier&&this.setTypeWeaknesses(),this.moveList.includes("Tera Blast")&&this.setTeraTypeAdvantages()):(vn("pokemonTeraAdvantages"),vn("pokemonTeraWeaknesses")),this.stateService.changeLoading(!1))}setTeraTypeAdvantages(){vn("pokemonTeraAdvantages");let n=[];this.typeCalcService.advantages(this.teraType).forEach(o=>{n.push(fs(o))}),n.length&&fe(document.getElementById("pokemonTeraAdvantages"),"<h3>Tera Advantages:</h3>"+n.join(""))}setTypeWeaknesses(){vn("pokemonTeraWeaknesses");let n=[];this.typeCalcService.weaknesses(this.teraType).forEach(o=>{n.push(fs(o))}),n.length&&fe(document.getElementById("pokemonTeraWeaknesses"),"<h3>Tera Weaknesses:</h3>"+n.join(""))}static{this.\u0275fac=function(r){return new(r||t)(q(se),q(pl))}}static{this.\u0275cmp=ee({type:t,selectors:[["app-pokemon-type-matchups"]],decls:3,vars:0,consts:[["id","pokemonTypeAdvantages",1,"pokemonTypeMatchups"],["id","pokemonTeraWeaknesses",1,"pokemonTypeMatchups"],["id","pokemonTeraAdvantages",1,"pokemonTypeMatchups"]],template:function(r,o){r&1&&Le(0,"div",0)(1,"div",1)(2,"div",2)},encapsulation:2})}}return t})();var ml=(()=>{class t{constructor(n){this.stateService=n,this.title="Tera Raid Info"}ngOnInit(){this.stateService.changeRegionList("Paldea"),this.stateService.loading.subscribe(n=>{document.getElementById("dataLoading").hidden=!n,n==!1&&(document.getElementById("pokemonContent").style.display="")})}ngAfterViewInit(){document.getElementById("dataLoading").hidden=!0,this.deleteCache(),this.autoPopulateSelections()}autoPopulateSelections(n,r){let o=n||window.location.href,i=r||window.location.origin;if(o.replace(i,"").length>1&&o.replace(i+"/tera-raid-info/","")){let c=o.replace(i+"/tera-raid-info/","").split("/"),l=new Event("change");if(Number(c[0])){let u=document.getElementById("raidTier");u.value=c[0],u.dispatchEvent(l)}if(c[1]){let u=document.getElementById("regionList");for(let d=0;d<u.length;d++){let f=u[d];f.text==c[1]&&(u.selectedIndex=f.index)}u.dispatchEvent(l)}if(c[2]){let u=ko(c[2].replaceAll("%20"," ").toLowerCase()),d=u.match(/(\(.*\))/);if(d){let h=d[0].split(" ");for(let p=0;p<h.length;p++)u=u.replaceAll(h[p],ko(h[p]))}let f=document.getElementById("pokemonList");f.value=u,f.dispatchEvent(l)}if(c[3]){let u=document.getElementById("teraList");for(let d=0;d<u.length;d++){let f=u[d];f.text==c[3]&&(u.selectedIndex=f.index)}u.dispatchEvent(l)}}}deleteCache(){typeof caches<"u"&&caches.delete("tera-raid-info-1")}static{this.\u0275fac=function(r){return new(r||t)(q(se))}}static{this.\u0275cmp=ee({type:t,selectors:[["app-root"]],decls:35,vars:0,consts:[[1,"header"],[1,"dropdowns"],["id","dataLoading","hidden","true"],["src","./assets/icons/pokeball.gif"],["id","pokemonContent","hidden","false",1,"content"],["id","pokemon"],[1,"pokemonImageWrapper"],["id","pokemonActions"],["id","pokemonHerbs"],[1,"pokemonTypesWrapper"],[1,"footer"],["href","https://github.com/kyle-undefined","target","_blank"],["href","https://www.serebii.net/","target","_blank"],["href","https://www.flaticon.com/authors/creatype","target","_blank"],["href","https://github.com/favware/graphql-pokemon","target","_blank"]],template:function(r,o){r&1&&(nt(0,"header",0)(1,"h1"),ge(2,"Tera Raid Info"),rt(),nt(3,"div",1),Kt(4,"app-raid-tier")(5,"app-region")(6,"app-pokemon-list")(7,"app-tera-type")(8,"app-share-raid"),rt()(),nt(9,"div",2),Kt(10,"img",3),rt(),nt(11,"div",4)(12,"div",5)(13,"div",6),Kt(14,"app-pokemon-images"),rt(),Kt(15,"app-pokemon-types"),rt(),Kt(16,"app-pokemon-stats")(17,"app-pokemon-ability")(18,"app-pokemon-moves")(19,"app-pokemon-actions",7)(20,"app-pokemon-herbs",8)(21,"app-pokemon-type-matchups",9),rt(),nt(22,"footer",10),ge(23," By: "),nt(24,"a",11),ge(25,"Kyle Undefined"),rt(),ge(26," - Design: CronikCRS - Images: "),nt(27,"a",12),ge(28,"Serebii"),rt(),ge(29," & "),nt(30,"a",13),ge(31,"Creatype"),rt(),ge(32," - Data: "),nt(33,"a",14),ge(34,"GraphQL-Pokemon"),rt()())},dependencies:[Tc,mv,gv,pD,mD,gD,yD,vD,SD,DD,ED,TD,wD,CD],encapsulation:2})}}return t})();var $="primary",Js=Symbol("RouteTitle"),_h=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let n=this.params[e];return Array.isArray(n)?n[0]:n}return null}getAll(e){if(this.has(e)){let n=this.params[e];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}};function ri(t){return new _h(t)}function Ih(t,e,n){for(let r=0;r<t.length;r++){let o=t[r],i=e[r];if(o[0]===":")n[o.substring(1)]=i;else if(o!==i.path)return!1}return!0}function OR(t,e,n){let r=n.path.split("/"),o=r.indexOf("**");if(o===-1){if(r.length>t.length||n.pathMatch==="full"&&(e.hasChildren()||r.length<t.length))return null;let l={},u=t.slice(0,r.length);return Ih(r,u,l)?{consumed:u,posParams:l}:null}if(o!==r.lastIndexOf("**"))return null;let i=r.slice(0,o),s=r.slice(o+1);if(i.length+s.length>t.length||n.pathMatch==="full"&&e.hasChildren()&&n.path!=="**")return null;let c={};return!Ih(i,t.slice(0,i.length),c)||!Ih(s,t.slice(t.length-s.length),c)?null:{consumed:t,posParams:c}}function bl(t){return new Promise((e,n)=>{t.pipe(dn()).subscribe({next:r=>e(r),error:r=>n(r)})})}function FR(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(!sn(t[n],e[n]))return!1;return!0}function sn(t,e){let n=t?kh(t):void 0,r=e?kh(e):void 0;if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!xD(t[o],e[o]))return!1;return!0}function kh(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function xD(t,e){if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;let n=[...t].sort(),r=[...e].sort();return n.every((o,i)=>r[i]===o)}else return t===e}function LR(t){return t.length>0?t[t.length-1]:null}function Kr(t){return Ma(t)?t:ns(t)?re(Promise.resolve(t)):U(t)}function AD(t){return Ma(t)?bl(t):Promise.resolve(t)}var HR={exact:LD,subset:HD},OD={exact:UR,subset:jR,ignored:()=>!0},FD={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Nh={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function ID(t,e,n){return HR[n.paths](t.root,e.root,n.matrixParams)&&OD[n.queryParams](t.queryParams,e.queryParams)&&!(n.fragment==="exact"&&t.fragment!==e.fragment)}function UR(t,e){return sn(t,e)}function LD(t,e,n){if(!qr(t.segments,e.segments)||!vl(t.segments,e.segments,n)||t.numberOfChildren!==e.numberOfChildren)return!1;for(let r in e.children)if(!t.children[r]||!LD(t.children[r],e.children[r],n))return!1;return!0}function jR(t,e){return Object.keys(e).length<=Object.keys(t).length&&Object.keys(e).every(n=>xD(t[n],e[n]))}function HD(t,e,n){return UD(t,e,e.segments,n)}function UD(t,e,n,r){if(t.segments.length>n.length){let o=t.segments.slice(0,n.length);return!(!qr(o,n)||e.hasChildren()||!vl(o,n,r))}else if(t.segments.length===n.length){if(!qr(t.segments,n)||!vl(t.segments,n,r))return!1;for(let o in e.children)if(!t.children[o]||!HD(t.children[o],e.children[o],r))return!1;return!0}else{let o=n.slice(0,t.segments.length),i=n.slice(t.segments.length);return!qr(t.segments,o)||!vl(t.segments,o,r)||!t.children[$]?!1:UD(t.children[$],e,i,r)}}function vl(t,e,n){return e.every((r,o)=>OD[n](t[o].parameters,r.parameters))}var Ht=class{root;queryParams;fragment;_queryParamMap;constructor(e=new ne([],{}),n={},r=null){this.root=e,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap??=ri(this.queryParams),this._queryParamMap}toString(){return $R.serialize(this)}},ne=class{segments;children;parent=null;constructor(e,n){this.segments=e,this.children=n,Object.values(n).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Sl(this)}},Wr=class{path;parameters;_parameterMap;constructor(e,n){this.path=e,this.parameters=n}get parameterMap(){return this._parameterMap??=ri(this.parameters),this._parameterMap}toString(){return BD(this)}};function BR(t,e){return qr(t,e)&&t.every((n,r)=>sn(n.parameters,e[r].parameters))}function qr(t,e){return t.length!==e.length?!1:t.every((n,r)=>n.path===e[r].path)}function VR(t,e){let n=[];return Object.entries(t.children).forEach(([r,o])=>{r===$&&(n=n.concat(e(o,r)))}),Object.entries(t.children).forEach(([r,o])=>{r!==$&&(n=n.concat(e(o,r)))}),n}var kl=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:()=>new Gr,providedIn:"root"})}return t})(),Gr=class{parse(e){let n=new Ah(e);return new Ht(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(e){let n=`/${Bs(e.root,!0)}`,r=qR(e.queryParams),o=typeof e.fragment=="string"?`#${zR(e.fragment)}`:"";return`${n}${r}${o}`}},$R=new Gr;function Sl(t){return t.segments.map(e=>BD(e)).join("/")}function Bs(t,e){if(!t.hasChildren())return Sl(t);if(e){let n=t.children[$]?Bs(t.children[$],!1):"",r=[];return Object.entries(t.children).forEach(([o,i])=>{o!==$&&r.push(`${o}:${Bs(i,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}else{let n=VR(t,(r,o)=>o===$?[Bs(t.children[$],!1)]:[`${o}:${Bs(r,!1)}`]);return Object.keys(t.children).length===1&&t.children[$]!=null?`${Sl(t)}/${n[0]}`:`${Sl(t)}/(${n.join("//")})`}}function jD(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function gl(t){return jD(t).replace(/%3B/gi,";")}function zR(t){return encodeURI(t)}function xh(t){return jD(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Dl(t){return decodeURIComponent(t)}function RD(t){return Dl(t.replace(/\+/g,"%20"))}function BD(t){return`${xh(t.path)}${WR(t.parameters)}`}function WR(t){return Object.entries(t).map(([e,n])=>`;${xh(e)}=${xh(n)}`).join("")}function qR(t){let e=Object.entries(t).map(([n,r])=>Array.isArray(r)?r.map(o=>`${gl(n)}=${gl(o)}`).join("&"):`${gl(n)}=${gl(r)}`).filter(n=>n);return e.length?`?${e.join("&")}`:""}var GR=/^[^\/()?;#]+/;function Rh(t){let e=t.match(GR);return e?e[0]:""}var QR=/^[^\/()?;=#]+/;function KR(t){let e=t.match(QR);return e?e[0]:""}var YR=/^[^=?&#]+/;function ZR(t){let e=t.match(YR);return e?e[0]:""}var JR=/^[^&#]+/;function XR(t){let e=t.match(JR);return e?e[0]:""}var Ah=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ne([],{}):new ne([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(e=0){if(e>50)throw new x(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let n=[];for(this.peekStartsWith("(")||n.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),n.push(this.parseSegment());let r={};this.peekStartsWith("/(")&&(this.capture("/"),r=this.parseParens(!0,e));let o={};return this.peekStartsWith("(")&&(o=this.parseParens(!1,e)),(n.length>0||Object.keys(r).length>0)&&(o[$]=new ne(n,r)),o}parseSegment(){let e=Rh(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new x(4009,!1);return this.capture(e),new Wr(Dl(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let n=KR(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let o=Rh(this.remaining);o&&(r=o,this.capture(r))}e[Dl(n)]=Dl(r)}parseQueryParam(e){let n=ZR(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let s=XR(this.remaining);s&&(r=s,this.capture(r))}let o=RD(n),i=RD(r);if(e.hasOwnProperty(o)){let s=e[o];Array.isArray(s)||(s=[s],e[o]=s),s.push(i)}else e[o]=i}parseParens(e,n){let r={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let o=Rh(this.remaining),i=this.remaining[o.length];if(i!=="/"&&i!==")"&&i!==";")throw new x(4010,!1);let s;o.indexOf(":")>-1?(s=o.slice(0,o.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=$);let c=this.parseChildren(n+1);r[s??$]=Object.keys(c).length===1&&c[$]?c[$]:new ne([],c),this.consumeOptional("//")}return r}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new x(4011,!1)}};function VD(t){return t.segments.length>0?new ne([],{[$]:t}):t}function $D(t){let e={};for(let[r,o]of Object.entries(t.children)){let i=$D(o);if(r===$&&i.segments.length===0&&i.hasChildren())for(let[s,c]of Object.entries(i.children))e[s]=c;else(i.segments.length>0||i.hasChildren())&&(e[r]=i)}let n=new ne(t.segments,e);return eP(n)}function eP(t){if(t.numberOfChildren===1&&t.children[$]){let e=t.children[$];return new ne(t.segments.concat(e.segments),e.children)}return t}function oi(t){return t instanceof Ht}function tP(t,e,n=null,r=null,o=new Gr){let i=zD(t);return WD(i,e,n,r,o)}function zD(t){let e;function n(i){let s={};for(let l of i.children){let u=n(l);s[l.outlet]=u}let c=new ne(i.url,s);return i===t&&(e=c),c}let r=n(t.root),o=VD(r);return e??o}function WD(t,e,n,r,o){let i=t;for(;i.parent;)i=i.parent;if(e.length===0)return Ph(i,i,i,n,r,o);let s=nP(e);if(s.toRoot())return Ph(i,i,new ne([],{}),n,r,o);let c=rP(s,i,t),l=c.processChildren?$s(c.segmentGroup,c.index,s.commands):GD(c.segmentGroup,c.index,s.commands);return Ph(i,c.segmentGroup,l,n,r,o)}function El(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function qs(t){return typeof t=="object"&&t!=null&&t.outlets}function PD(t,e,n){t||="\u0275";let r=new Ht;return r.queryParams={[t]:e},n.parse(n.serialize(r)).queryParams[t]}function Ph(t,e,n,r,o,i){let s={};for(let[u,d]of Object.entries(r??{}))s[u]=Array.isArray(d)?d.map(f=>PD(u,f,i)):PD(u,d,i);let c;t===e?c=n:c=qD(t,e,n);let l=VD($D(c));return new Ht(l,s,o)}function qD(t,e,n){let r={};return Object.entries(t.children).forEach(([o,i])=>{i===e?r[o]=n:r[o]=qD(i,e,n)}),new ne(t.segments,r)}var Tl=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,n,r){if(this.isAbsolute=e,this.numberOfDoubleDots=n,this.commands=r,e&&r.length>0&&El(r[0]))throw new x(4003,!1);let o=r.find(qs);if(o&&o!==LR(r))throw new x(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function nP(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Tl(!0,0,t);let e=0,n=!1,r=t.reduce((o,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let c={};return Object.entries(i.outlets).forEach(([l,u])=>{c[l]=typeof u=="string"?u.split("/"):u}),[...o,{outlets:c}]}if(i.segmentPath)return[...o,i.segmentPath]}return typeof i!="string"?[...o,i]:s===0?(i.split("/").forEach((c,l)=>{l==0&&c==="."||(l==0&&c===""?n=!0:c===".."?e++:c!=""&&o.push(c))}),o):[...o,i]},[]);return new Tl(n,e,r)}var ti=class{segmentGroup;processChildren;index;constructor(e,n,r){this.segmentGroup=e,this.processChildren=n,this.index=r}};function rP(t,e,n){if(t.isAbsolute)return new ti(e,!0,0);if(!n)return new ti(e,!1,NaN);if(n.parent===null)return new ti(n,!0,0);let r=El(t.commands[0])?0:1,o=n.segments.length-1+r;return oP(n,o,t.numberOfDoubleDots)}function oP(t,e,n){let r=t,o=e,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new x(4005,!1);o=r.segments.length}return new ti(r,!1,o-i)}function iP(t){return qs(t[0])?t[0].outlets:{[$]:t}}function GD(t,e,n){if(t??=new ne([],{}),t.segments.length===0&&t.hasChildren())return $s(t,e,n);let r=sP(t,e,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){let i=new ne(t.segments.slice(0,r.pathIndex),{});return i.children[$]=new ne(t.segments.slice(r.pathIndex),t.children),$s(i,0,o)}else return r.match&&o.length===0?new ne(t.segments,{}):r.match&&!t.hasChildren()?Oh(t,e,n):r.match?$s(t,0,o):Oh(t,e,n)}function $s(t,e,n){if(n.length===0)return new ne(t.segments,{});{let r=iP(n),o={};if(Object.keys(r).some(i=>i!==$)&&t.children[$]&&t.numberOfChildren===1&&t.children[$].segments.length===0){let i=$s(t.children[$],e,n);return new ne(t.segments,i.children)}return Object.entries(r).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(o[i]=GD(t.children[i],e,s))}),Object.entries(t.children).forEach(([i,s])=>{r[i]===void 0&&(o[i]=s)}),new ne(t.segments,o)}}function sP(t,e,n){let r=0,o=e,i={match:!1,pathIndex:0,commandIndex:0};for(;o<t.segments.length;){if(r>=n.length)return i;let s=t.segments[o],c=n[r];if(qs(c))break;let l=`${c}`,u=r<n.length-1?n[r+1]:null;if(o>0&&l===void 0)break;if(l&&u&&typeof u=="object"&&u.outlets===void 0){if(!_D(l,u,s))return i;r+=2}else{if(!_D(l,{},s))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}function Oh(t,e,n){let r=t.segments.slice(0,e),o=0;for(;o<n.length;){let i=n[o];if(qs(i)){let l=aP(i.outlets);return new ne(r,l)}if(o===0&&El(n[0])){let l=t.segments[e];r.push(new Wr(l.path,MD(n[0]))),o++;continue}let s=qs(i)?i.outlets[$]:`${i}`,c=o<n.length-1?n[o+1]:null;s&&c&&El(c)?(r.push(new Wr(s,MD(c))),o+=2):(r.push(new Wr(s,{})),o++)}return new ne(r,{})}function aP(t){let e={};return Object.entries(t).forEach(([n,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(e[n]=Oh(new ne([],{}),0,r))}),e}function MD(t){let e={};return Object.entries(t).forEach(([n,r])=>e[n]=`${r}`),e}function _D(t,e,n){return t==n.path&&sn(e,n.parameters)}var zs="imperative",je=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(je||{}),Et=class{id;url;constructor(e,n){this.id=e,this.url=n}},ii=class extends Et{type=je.NavigationStart;navigationTrigger;restoredState;constructor(e,n,r="imperative",o=null){super(e,n),this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},nr=class extends Et{urlAfterRedirects;type=je.NavigationEnd;constructor(e,n,r){super(e,n),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ke=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Ke||{}),wl=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(wl||{}),Ft=class extends Et{reason;code;type=je.NavigationCancel;constructor(e,n,r,o){super(e,n),this.reason=r,this.code=o}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function QD(t){return t instanceof Ft&&(t.code===Ke.Redirect||t.code===Ke.SupersededByNewNavigation)}var rr=class extends Et{reason;code;type=je.NavigationSkipped;constructor(e,n,r,o){super(e,n),this.reason=r,this.code=o}},si=class extends Et{error;target;type=je.NavigationError;constructor(e,n,r,o){super(e,n),this.error=r,this.target=o}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Cl=class extends Et{urlAfterRedirects;state;type=je.RoutesRecognized;constructor(e,n,r,o){super(e,n),this.urlAfterRedirects=r,this.state=o}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Fh=class extends Et{urlAfterRedirects;state;type=je.GuardsCheckStart;constructor(e,n,r,o){super(e,n),this.urlAfterRedirects=r,this.state=o}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Lh=class extends Et{urlAfterRedirects;state;shouldActivate;type=je.GuardsCheckEnd;constructor(e,n,r,o,i){super(e,n),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Hh=class extends Et{urlAfterRedirects;state;type=je.ResolveStart;constructor(e,n,r,o){super(e,n),this.urlAfterRedirects=r,this.state=o}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Uh=class extends Et{urlAfterRedirects;state;type=je.ResolveEnd;constructor(e,n,r,o){super(e,n),this.urlAfterRedirects=r,this.state=o}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jh=class{route;type=je.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Bh=class{route;type=je.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Vh=class{snapshot;type=je.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},$h=class{snapshot;type=je.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},zh=class{snapshot;type=je.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Wh=class{snapshot;type=je.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var ai=class{},Gs=class{},ci=class{url;navigationBehaviorOptions;constructor(e,n){this.url=e,this.navigationBehaviorOptions=n}};function cP(t){return!(t instanceof ai)&&!(t instanceof ci)&&!(t instanceof Gs)}var qh=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new Xs(this.rootInjector)}},Xs=(()=>{class t{rootInjector;contexts=new Map;constructor(n){this.rootInjector=n}onChildOutletCreated(n,r){let o=this.getOrCreateContext(n);o.outlet=r,this.contexts.set(n,o)}onChildOutletDestroyed(n){let r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new qh(this.rootInjector),this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}static \u0275fac=function(r){return new(r||t)(O(ye))};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Il=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let n=this.pathFromRoot(e);return n.length>1?n[n.length-2]:null}children(e){let n=Gh(e,this._root);return n?n.children.map(r=>r.value):[]}firstChild(e){let n=Gh(e,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(e){let n=Qh(e,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==e)}pathFromRoot(e){return Qh(e,this._root).map(n=>n.value)}};function Gh(t,e){if(t===e.value)return e;for(let n of e.children){let r=Gh(t,n);if(r)return r}return null}function Qh(t,e){if(t===e.value)return[e];for(let n of e.children){let r=Qh(t,n);if(r.length)return r.unshift(e),r}return[]}var pt=class{value;children;constructor(e,n){this.value=e,this.children=n}toString(){return`TreeNode(${this.value})`}};function ei(t){let e={};return t&&t.children.forEach(n=>e[n.value.outlet]=n),e}var Rl=class extends Il{snapshot;constructor(e,n){super(e),this.snapshot=n,op(this,e)}toString(){return this.snapshot.toString()}};function KD(t,e){let n=lP(t,e),r=new le([new Wr("",{})]),o=new le({}),i=new le({}),s=new le({}),c=new le(""),l=new Qr(r,o,s,c,i,$,t,n.root);return l.snapshot=n.root,new Rl(new pt(l,[]),n)}function lP(t,e){let n={},r={},o={},s=new Qs([],n,o,"",r,$,t,null,{},e);return new Pl("",new pt(s,[]))}var Qr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,n,r,o,i,s,c,l){this.urlSubject=e,this.paramsSubject=n,this.queryParamsSubject=r,this.fragmentSubject=o,this.dataSubject=i,this.outlet=s,this.component=c,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(L(u=>u[Js]))??U(void 0),this.url=e,this.params=n,this.queryParams=r,this.fragment=o,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(L(e=>ri(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(L(e=>ri(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function rp(t,e,n="emptyOnly"){let r,{routeConfig:o}=t;return e!==null&&(n==="always"||o?.path===""||!e.component&&!e.routeConfig?.loadComponent)?r={params:v(v({},e.params),t.params),data:v(v({},e.data),t.data),resolve:v(v(v(v({},t.data),e.data),o?.data),t._resolvedData)}:r={params:v({},t.params),data:v({},t.data),resolve:v(v({},t.data),t._resolvedData??{})},o&&ZD(o)&&(r.resolve[Js]=o.title),r}var Qs=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Js]}constructor(e,n,r,o,i,s,c,l,u,d){this.url=e,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=c,this.routeConfig=l,this._resolve=u,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ri(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ri(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(r=>r.toString()).join("/"),n=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${n}')`}},Pl=class extends Il{url;constructor(e,n){super(n),this.url=e,op(this,n)}toString(){return YD(this._root)}};function op(t,e){e.value._routerState=t,e.children.forEach(n=>op(t,n))}function YD(t){let e=t.children.length>0?` { ${t.children.map(YD).join(", ")} } `:"";return`${t.value}${e}`}function Mh(t){if(t.snapshot){let e=t.snapshot,n=t._futureSnapshot;t.snapshot=n,sn(e.queryParams,n.queryParams)||t.queryParamsSubject.next(n.queryParams),e.fragment!==n.fragment&&t.fragmentSubject.next(n.fragment),sn(e.params,n.params)||t.paramsSubject.next(n.params),FR(e.url,n.url)||t.urlSubject.next(n.url),sn(e.data,n.data)||t.dataSubject.next(n.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Kh(t,e){let n=sn(t.params,e.params)&&BR(t.url,e.url),r=!t.parent!=!e.parent;return n&&!r&&(!t.parent||Kh(t.parent,e.parent))}function ZD(t){return typeof t.title=="string"||t.title===null}var uP=new A(""),JD=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=$;activateEvents=new ze;deactivateEvents=new ze;attachEvents=new ze;detachEvents=new ze;routerOutletData=jy();parentContexts=P(Xs);location=P(es);changeDetector=P(Yd);inputBinder=P(Nl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(n){if(n.name){let{firstChange:r,previousValue:o}=n.name;if(r)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(n){return this.parentContexts.getContext(n)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let n=this.parentContexts.getContext(this.name);n?.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new x(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new x(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new x(4012,!1);this.location.detach();let n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){let n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new x(4013,!1);this._activatedRoute=n;let o=this.location,s=n.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new Yh(n,c,o.injector,this.routerOutletData);this.activated=o.createComponent(s,{index:o.length,injector:l,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(r){return new(r||t)};static \u0275dir=Sc({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[fc]})}return t})(),Yh=class{route;childContexts;parent;outletData;constructor(e,n,r,o){this.route=e,this.childContexts=n,this.parent=r,this.outletData=o}get(e,n){return e===Qr?this.route:e===Xs?this.childContexts:e===uP?this.outletData:this.parent.get(e,n)}},Nl=new A("");var XD=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=ee({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(r,o){r&1&&Kt(0,"router-outlet")},dependencies:[JD],encapsulation:2})}return t})();function ip(t){let e=t.children&&t.children.map(ip),n=e?C(v({},t),{children:e}):v({},t);return!n.component&&!n.loadComponent&&(e||n.loadChildren)&&n.outlet&&n.outlet!==$&&(n.component=XD),n}function dP(t,e,n){let r=Ks(t,e._root,n?n._root:void 0);return new Rl(r,e)}function Ks(t,e,n){if(n&&t.shouldReuseRoute(e.value,n.value.snapshot)){let r=n.value;r._futureSnapshot=e.value;let o=fP(t,e,n);return new pt(r,o)}else{if(t.shouldAttach(e.value)){let i=t.retrieve(e.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=e.value,s.children=e.children.map(c=>Ks(t,c)),s}}let r=hP(e.value),o=e.children.map(i=>Ks(t,i));return new pt(r,o)}}function fP(t,e,n){return e.children.map(r=>{for(let o of n.children)if(t.shouldReuseRoute(r.value,o.value.snapshot))return Ks(t,r,o);return Ks(t,r)})}function hP(t){return new Qr(new le(t.url),new le(t.params),new le(t.queryParams),new le(t.fragment),new le(t.data),t.outlet,t.component,t)}var Ys=class{redirectTo;navigationBehaviorOptions;constructor(e,n){this.redirectTo=e,this.navigationBehaviorOptions=n}},eb="ngNavigationCancelingError";function Ml(t,e){let{redirectTo:n,navigationBehaviorOptions:r}=oi(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,o=tb(!1,Ke.Redirect);return o.url=n,o.navigationBehaviorOptions=r,o}function tb(t,e){let n=new Error(`NavigationCancelingError: ${t||""}`);return n[eb]=!0,n.cancellationCode=e,n}function pP(t){return nb(t)&&oi(t.url)}function nb(t){return!!t&&t[eb]}var Zh=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,n,r,o,i){this.routeReuseStrategy=e,this.futureState=n,this.currState=r,this.forwardEvent=o,this.inputBindingEnabled=i}activate(e){let n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,e),Mh(this.futureState.root),this.activateChildRoutes(n,r,e)}deactivateChildRoutes(e,n,r){let o=ei(n);e.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,o[s],r),delete o[s]}),Object.values(o).forEach(i=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(e,n,r){let o=e.value,i=n?n.value:null;if(o===i)if(o.component){let s=r.getContext(o.outlet);s&&this.deactivateChildRoutes(e,n,s.children)}else this.deactivateChildRoutes(e,n,r);else i&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(e,n){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,n):this.deactivateRouteAndOutlet(e,n)}detachAndStoreRouteSubtree(e,n){let r=n.getContext(e.value.outlet),o=r&&e.value.component?r.children:n,i=ei(e);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);if(r&&r.outlet){let s=r.outlet.detach(),c=r.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:s,route:e,contexts:c})}}deactivateRouteAndOutlet(e,n){let r=n.getContext(e.value.outlet),o=r&&e.value.component?r.children:n,i=ei(e);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(e,n,r){let o=ei(n);e.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new Wh(i.value.snapshot))}),e.children.length&&this.forwardEvent(new $h(e.value.snapshot))}activateRoutes(e,n,r){let o=e.value,i=n?n.value:null;if(Mh(o),o===i)if(o.component){let s=r.getOrCreateContext(o.outlet);this.activateChildRoutes(e,n,s.children)}else this.activateChildRoutes(e,n,r);else if(o.component){let s=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let c=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),s.children.onOutletReAttached(c.contexts),s.attachRef=c.componentRef,s.route=c.route.value,s.outlet&&s.outlet.attach(c.componentRef,c.route.value),Mh(c.route.value),this.activateChildRoutes(e,null,s.children)}else s.attachRef=null,s.route=o,s.outlet&&s.outlet.activateWith(o,s.injector),this.activateChildRoutes(e,null,s.children)}else this.activateChildRoutes(e,null,r)}},_l=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},ni=class{component;route;constructor(e,n){this.component=e,this.route=n}};function mP(t,e,n){let r=t._root,o=e?e._root:null;return Vs(r,o,n,[r.value])}function gP(t){let e=t.routeConfig?t.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:t,guards:e}}function ui(t,e){let n=Symbol(),r=e.get(t,n);return r===n?typeof t=="function"&&!wu(t)?t:e.get(t):r}function Vs(t,e,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=ei(e);return t.children.forEach(s=>{yP(s,i[s.value.outlet],n,r.concat([s.value]),o),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,c])=>Ws(c,n.getContext(s),o)),o}function yP(t,e,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=t.value,s=e?e.value:null,c=n?n.getContext(t.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let l=vP(s,i,i.routeConfig.runGuardsAndResolvers);l?o.canActivateChecks.push(new _l(r)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?Vs(t,e,c?c.children:null,r,o):Vs(t,e,n,r,o),l&&c&&c.outlet&&c.outlet.isActivated&&o.canDeactivateChecks.push(new ni(c.outlet.component,s))}else s&&Ws(e,c,o),o.canActivateChecks.push(new _l(r)),i.component?Vs(t,null,c?c.children:null,r,o):Vs(t,null,n,r,o);return o}function vP(t,e,n){if(typeof n=="function")return Fe(e._environmentInjector,()=>n(t,e));switch(n){case"pathParamsChange":return!qr(t.url,e.url);case"pathParamsOrQueryParamsChange":return!qr(t.url,e.url)||!sn(t.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Kh(t,e)||!sn(t.queryParams,e.queryParams);default:return!Kh(t,e)}}function Ws(t,e,n){let r=ei(t),o=t.value;Object.entries(r).forEach(([i,s])=>{o.component?e?Ws(s,e.children.getContext(i),n):Ws(s,null,n):Ws(s,e,n)}),o.component?e&&e.outlet&&e.outlet.isActivated?n.canDeactivateChecks.push(new ni(e.outlet.component,o)):n.canDeactivateChecks.push(new ni(null,o)):n.canDeactivateChecks.push(new ni(null,o))}function ea(t){return typeof t=="function"}function SP(t){return typeof t=="boolean"}function DP(t){return t&&ea(t.canLoad)}function bP(t){return t&&ea(t.canActivate)}function EP(t){return t&&ea(t.canActivateChild)}function TP(t){return t&&ea(t.canDeactivate)}function wP(t){return t&&ea(t.canMatch)}function rb(t){return t instanceof ln||t?.name==="EmptyError"}var yl=Symbol("INITIAL_VALUE");function li(){return ct(t=>nu(t.map(e=>e.pipe(un(1),bi(yl)))).pipe(L(e=>{for(let n of e)if(n!==!0){if(n===yl)return yl;if(n===!1||CP(n))return n}return!0}),Me(e=>e!==yl),un(1)))}function CP(t){return oi(t)||t instanceof Ys}function ob(t){return t.aborted?U(void 0).pipe(un(1)):new F(e=>{let n=()=>{e.next(),e.complete()};return t.addEventListener("abort",n),()=>t.removeEventListener("abort",n)})}function ib(t){return Ei(ob(t))}function IP(t){return we(e=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:o,canDeactivateChecks:i}}=e;return i.length===0&&o.length===0?U(C(v({},e),{guardsResult:!0})):RP(i,n,r).pipe(we(s=>s&&SP(s)?PP(n,o,t):U(s)),L(s=>C(v({},e),{guardsResult:s})))})}function RP(t,e,n){return re(t).pipe(we(r=>xP(r.component,r.route,n,e)),dn(r=>r!==!0,!0))}function PP(t,e,n){return re(e).pipe(io(r=>Ut(_P(r.route.parent,n),MP(r.route,n),NP(t,r.path),kP(t,r.route))),dn(r=>r!==!0,!0))}function MP(t,e){return t!==null&&e&&e(new zh(t)),U(!0)}function _P(t,e){return t!==null&&e&&e(new Vh(t)),U(!0)}function kP(t,e){let n=e.routeConfig?e.routeConfig.canActivate:null;if(!n||n.length===0)return U(!0);let r=n.map(o=>Di(()=>{let i=e._environmentInjector,s=ui(o,i),c=bP(s)?s.canActivate(e,t):Fe(i,()=>s(e,t));return Kr(c).pipe(dn())}));return U(r).pipe(li())}function NP(t,e){let n=e[e.length-1],o=e.slice(0,e.length-1).reverse().map(i=>gP(i)).filter(i=>i!==null).map(i=>Di(()=>{let s=i.guards.map(c=>{let l=i.node._environmentInjector,u=ui(c,l),d=EP(u)?u.canActivateChild(n,t):Fe(l,()=>u(n,t));return Kr(d).pipe(dn())});return U(s).pipe(li())}));return U(o).pipe(li())}function xP(t,e,n,r){let o=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!o||o.length===0)return U(!0);let i=o.map(s=>{let c=e._environmentInjector,l=ui(s,c),u=TP(l)?l.canDeactivate(t,e,n,r):Fe(c,()=>l(t,e,n,r));return Kr(u).pipe(dn())});return U(i).pipe(li())}function AP(t,e,n,r,o){let i=e.canLoad;if(i===void 0||i.length===0)return U(!0);let s=i.map(c=>{let l=ui(c,t),u=DP(l)?l.canLoad(e,n):Fe(t,()=>l(e,n)),d=Kr(u);return o?d.pipe(ib(o)):d});return U(s).pipe(li(),sb(r))}function sb(t){return Zl(Ce(e=>{if(typeof e!="boolean")throw Ml(t,e)}),L(e=>e===!0))}function OP(t,e,n,r,o,i){let s=e.canMatch;if(!s||s.length===0)return U(!0);let c=s.map(l=>{let u=ui(l,t),d=wP(u)?u.canMatch(e,n,o):Fe(t,()=>u(e,n,o));return Kr(d).pipe(ib(i))});return U(c).pipe(li(),sb(r))}var In=class t extends Error{segmentGroup;constructor(e){super(),this.segmentGroup=e||null,Object.setPrototypeOf(this,t.prototype)}},Zs=class t extends Error{urlTree;constructor(e){super(),this.urlTree=e,Object.setPrototypeOf(this,t.prototype)}};function FP(t){throw new x(4e3,!1)}function LP(t){throw tb(!1,Ke.GuardRejected)}var Jh=class{urlSerializer;urlTree;constructor(e,n){this.urlSerializer=e,this.urlTree=n}lineralizeSegments(e,n){return J(this,null,function*(){let r=[],o=n.root;for(;;){if(r=r.concat(o.segments),o.numberOfChildren===0)return r;if(o.numberOfChildren>1||!o.children[$])throw FP(`${e.redirectTo}`);o=o.children[$]}})}applyRedirectCommands(e,n,r,o,i){return J(this,null,function*(){let s=yield HP(n,o,i);if(s instanceof Ht)throw new Zs(s);let c=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),e,r);if(s[0]==="/")throw new Zs(c);return c})}applyRedirectCreateUrlTree(e,n,r,o){let i=this.createSegmentGroup(e,n.root,r,o);return new Ht(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(e,n){let r={};return Object.entries(e).forEach(([o,i])=>{if(typeof i=="string"&&i[0]===":"){let c=i.substring(1);r[o]=n[c]}else r[o]=i}),r}createSegmentGroup(e,n,r,o){let i=this.createSegments(e,n.segments,r,o),s={};return Object.entries(n.children).forEach(([c,l])=>{s[c]=this.createSegmentGroup(e,l,r,o)}),new ne(i,s)}createSegments(e,n,r,o){return n.map(i=>i.path[0]===":"?this.findPosParam(e,i,o):this.findOrReturn(i,r))}findPosParam(e,n,r){let o=r[n.path.substring(1)];if(!o)throw new x(4001,!1);return o}findOrReturn(e,n){let r=0;for(let o of n){if(o.path===e.path)return n.splice(r),o;r++}return e}};function HP(t,e,n){if(typeof t=="string")return Promise.resolve(t);let r=t;return bl(Kr(Fe(n,()=>r(e))))}function UP(t,e){return t.providers&&!t._injector&&(t._injector=ts(t.providers,e,`Route: ${t.path}`)),t._injector??e}function Lt(t){return t.outlet||$}function jP(t,e){let n=t.filter(r=>Lt(r)===e);return n.push(...t.filter(r=>Lt(r)!==e)),n}var Xh={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function ab(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function BP(t,e,n,r,o,i,s){let c=cb(t,e,n);if(!c.matched)return U(c);let l=ab(i(c));return r=UP(e,r),OP(r,e,n,o,l,s).pipe(L(u=>u===!0?c:v({},Xh)))}function cb(t,e,n){if(e.path==="")return e.pathMatch==="full"&&(t.hasChildren()||n.length>0)?v({},Xh):{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};let o=(e.matcher||OR)(n,t,e);if(!o)return v({},Xh);let i={};Object.entries(o.posParams??{}).forEach(([c,l])=>{i[c]=l.path});let s=o.consumed.length>0?v(v({},i),o.consumed[o.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:o.consumed,remainingSegments:n.slice(o.consumed.length),parameters:s,positionalParamSegments:o.posParams??{}}}function kD(t,e,n,r,o){return n.length>0&&zP(t,n,r,o)?{segmentGroup:new ne(e,$P(r,new ne(n,t.children))),slicedSegments:[]}:n.length===0&&WP(t,n,r)?{segmentGroup:new ne(t.segments,VP(t,n,r,t.children)),slicedSegments:n}:{segmentGroup:new ne(t.segments,t.children),slicedSegments:n}}function VP(t,e,n,r){let o={};for(let i of n)if(xl(t,e,i)&&!r[Lt(i)]){let s=new ne([],{});o[Lt(i)]=s}return v(v({},r),o)}function $P(t,e){let n={};n[$]=e;for(let r of t)if(r.path===""&&Lt(r)!==$){let o=new ne([],{});n[Lt(r)]=o}return n}function zP(t,e,n,r){return n.some(o=>!xl(t,e,o)||!(Lt(o)!==$)?!1:!(r!==void 0&&Lt(o)===r))}function WP(t,e,n){return n.some(r=>xl(t,e,r))}function xl(t,e,n){return(t.hasChildren()||e.length>0)&&n.pathMatch==="full"?!1:n.path===""}function qP(t,e,n){return e.length===0&&!t.children[n]}var ep=class{};function GP(t,e,n,r,o,i,s="emptyOnly",c){return J(this,null,function*(){return new tp(t,e,n,r,o,s,i,c).recognize()})}var QP=31,tp=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,n,r,o,i,s,c,l){this.injector=e,this.configLoader=n,this.rootComponentType=r,this.config=o,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=c,this.abortSignal=l,this.applyRedirects=new Jh(this.urlSerializer,this.urlTree)}noMatchError(e){return new x(4002,`'${e.segmentGroup}'`)}recognize(){return J(this,null,function*(){let e=kD(this.urlTree.root,[],[],this.config).segmentGroup,{children:n,rootSnapshot:r}=yield this.match(e),o=new pt(r,n),i=new Pl("",o),s=tP(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}})}match(e){return J(this,null,function*(){let n=new Qs([],Object.freeze({}),Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),$,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,e,$,n),rootSnapshot:n}}catch(r){if(r instanceof Zs)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof In?this.noMatchError(r):r}})}processSegmentGroup(e,n,r,o,i){return J(this,null,function*(){if(r.segments.length===0&&r.hasChildren())return this.processChildren(e,n,r,i);let s=yield this.processSegment(e,n,r,r.segments,o,!0,i);return s instanceof pt?[s]:[]})}processChildren(e,n,r,o){return J(this,null,function*(){let i=[];for(let l of Object.keys(r.children))l==="primary"?i.unshift(l):i.push(l);let s=[];for(let l of i){let u=r.children[l],d=jP(n,l),f=yield this.processSegmentGroup(e,d,u,l,o);s.push(...f)}let c=lb(s);return KP(c),c})}processSegment(e,n,r,o,i,s,c){return J(this,null,function*(){for(let l of n)try{return yield this.processSegmentAgainstRoute(l._injector??e,n,l,r,o,i,s,c)}catch(u){if(u instanceof In||rb(u))continue;throw u}if(qP(r,o,i))return new ep;throw new In(r)})}processSegmentAgainstRoute(e,n,r,o,i,s,c,l){return J(this,null,function*(){if(Lt(r)!==s&&(s===$||!xl(o,i,r)))throw new In(o);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(e,o,r,i,s,l);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(e,o,n,r,i,s,l);throw new In(o)})}expandSegmentAgainstRouteUsingRedirect(e,n,r,o,i,s,c){return J(this,null,function*(){let{matched:l,parameters:u,consumedSegments:d,positionalParamSegments:f,remainingSegments:h}=cb(n,o,i);if(!l)throw new In(n);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>QP&&(this.allowRedirects=!1));let p=this.createSnapshot(e,o,i,u,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let g=yield this.applyRedirects.applyRedirectCommands(d,o.redirectTo,f,ab(p),e),S=yield this.applyRedirects.lineralizeSegments(o,g);return this.processSegment(e,r,n,S.concat(h),s,!1,c)})}createSnapshot(e,n,r,o,i){let s=new Qs(r,o,Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,ZP(n),Lt(n),n.component??n._loadedComponent??null,n,JP(n),e),c=rp(s,i,this.paramsInheritanceStrategy);return s.params=Object.freeze(c.params),s.data=Object.freeze(c.data),s}matchSegmentAgainstRoute(e,n,r,o,i,s){return J(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=I=>this.createSnapshot(e,r,I.consumedSegments,I.parameters,s),l=yield bl(BP(n,r,o,e,this.urlSerializer,c,this.abortSignal));if(r.path==="**"&&(n.children={}),!l?.matched)throw new In(n);e=r._injector??e;let{routes:u}=yield this.getChildConfig(e,r,o),d=r._loadedInjector??e,{parameters:f,consumedSegments:h,remainingSegments:p}=l,g=this.createSnapshot(e,r,h,f,s),{segmentGroup:S,slicedSegments:y}=kD(n,h,p,u,i);if(y.length===0&&S.hasChildren()){let I=yield this.processChildren(d,u,S,g);return new pt(g,I)}if(u.length===0&&y.length===0)return new pt(g,[]);let D=Lt(r)===i,w=yield this.processSegment(d,u,S,y,D?$:i,!0,g);return new pt(g,w instanceof pt?[w]:[])})}getChildConfig(e,n,r){return J(this,null,function*(){if(n.children)return{routes:n.children,injector:e};if(n.loadChildren){if(n._loadedRoutes!==void 0){let i=n._loadedNgModuleFactory;return i&&!n._loadedInjector&&(n._loadedInjector=i.create(e).injector),{routes:n._loadedRoutes,injector:n._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield bl(AP(e,n,r,this.urlSerializer,this.abortSignal))){let i=yield this.configLoader.loadChildren(e,n);return n._loadedRoutes=i.routes,n._loadedInjector=i.injector,n._loadedNgModuleFactory=i.factory,i}throw LP(n)}return{routes:[],injector:e}})}};function KP(t){t.sort((e,n)=>e.value.outlet===$?-1:n.value.outlet===$?1:e.value.outlet.localeCompare(n.value.outlet))}function YP(t){let e=t.value.routeConfig;return e&&e.path===""}function lb(t){let e=[],n=new Set;for(let r of t){if(!YP(r)){e.push(r);continue}let o=e.find(i=>r.value.routeConfig===i.value.routeConfig);o!==void 0?(o.children.push(...r.children),n.add(o)):e.push(r)}for(let r of n){let o=lb(r.children);e.push(new pt(r.value,o))}return e.filter(r=>!n.has(r))}function ZP(t){return t.data||{}}function JP(t){return t.resolve||{}}function XP(t,e,n,r,o,i,s){return we(c=>J(null,null,function*(){let{state:l,tree:u}=yield GP(t,e,n,r,c.extractedUrl,o,i,s);return C(v({},c),{targetSnapshot:l,urlAfterRedirects:u})}))}function eM(t){return we(e=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=e;if(!r.length)return U(e);let o=new Set(r.map(c=>c.route)),i=new Set;for(let c of o)if(!i.has(c))for(let l of ub(c))i.add(l);let s=0;return re(i).pipe(io(c=>o.has(c)?tM(c,n,t):(c.data=rp(c,c.parent,t).resolve,U(void 0))),Ce(()=>s++),_a(1),we(c=>s===i.size?U(e):ue))})}function ub(t){let e=t.children.map(n=>ub(n)).flat();return[t,...e]}function tM(t,e,n){let r=t.routeConfig,o=t._resolve;return r?.title!==void 0&&!ZD(r)&&(o[Js]=r.title),Di(()=>(t.data=rp(t,t.parent,n).resolve,nM(o,t,e).pipe(L(i=>(t._resolvedData=i,t.data=v(v({},t.data),i),null)))))}function nM(t,e,n){let r=kh(t);if(r.length===0)return U({});let o={};return re(r).pipe(we(i=>rM(t[i],e,n).pipe(dn(),Ce(s=>{if(s instanceof Ys)throw Ml(new Gr,s);o[i]=s}))),_a(1),L(()=>o),jt(i=>rb(i)?ue:ur(i)))}function rM(t,e,n){let r=e._environmentInjector,o=ui(t,r),i=o.resolve?o.resolve(e,n):Fe(r,()=>o(e,n));return Kr(i)}function ND(t){return ct(e=>{let n=t(e);return n?re(n).pipe(L(()=>e)):U(e)})}var db=(()=>{class t{buildTitle(n){let r,o=n.root;for(;o!==void 0;)r=this.getResolvedTitleForRoute(o)??r,o=o.children.find(i=>i.outlet===$);return r}getResolvedTitleForRoute(n){return n.data[Js]}static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:()=>P(oM),providedIn:"root"})}return t})(),oM=(()=>{class t extends db{title;constructor(n){super(),this.title=n}updateTitle(n){let r=this.buildTitle(n);r!==void 0&&this.title.setTitle(r)}static \u0275fac=function(r){return new(r||t)(O(pv))};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Al=new A("",{factory:()=>({})}),Ol=new A(""),fb=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=P(Gd);loadComponent(n,r){return J(this,null,function*(){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let o=J(this,null,function*(){try{let i=yield AD(Fe(n,()=>r.loadComponent())),s=yield pb(hb(i));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=s,s}finally{this.componentLoaders.delete(r)}});return this.componentLoaders.set(r,o),o})}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=J(this,null,function*(){try{let i=yield iM(r,this.compiler,n,this.onLoadEndListener);return r._loadedRoutes=i.routes,r._loadedInjector=i.injector,r._loadedNgModuleFactory=i.factory,i}finally{this.childrenLoaders.delete(r)}});return this.childrenLoaders.set(r,o),o}static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function iM(t,e,n,r){return J(this,null,function*(){let o=yield AD(Fe(n,()=>t.loadChildren())),i=yield pb(hb(o)),s;i instanceof vc||Array.isArray(i)?s=i:s=yield e.compileModuleAsync(i),r&&r(t);let c,l,u=!1,d;return Array.isArray(s)?(l=s,u=!0):(c=s.create(n).injector,d=s,l=c.get(Ol,[],{optional:!0,self:!0}).flat()),{routes:l.map(ip),injector:c,factory:d}})}function sM(t){return t&&typeof t=="object"&&"default"in t}function hb(t){return sM(t)?t.default:t}function pb(t){return J(this,null,function*(){return t})}var sp=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:()=>P(aM),providedIn:"root"})}return t})(),aM=(()=>{class t{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,r){return n}static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),mb=new A("");var cM=()=>{},gb=new A(""),yb=(()=>{class t{currentNavigation=vo(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=vo(null);events=new me;transitionAbortWithErrorSubject=new me;configLoader=P(fb);environmentInjector=P(ye);destroyRef=P(Hn);urlSerializer=P(kl);rootContexts=P(Xs);location=P(Ro);inputBindingEnabled=P(Nl,{optional:!0})!==null;titleStrategy=P(db);options=P(Al,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=P(sp);createViewTransition=P(mb,{optional:!0});navigationErrorHandler=P(gb,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>U(void 0);rootComponentType=null;destroyed=!1;constructor(){let n=o=>this.events.next(new jh(o)),r=o=>this.events.next(new Bh(o));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=n,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(n){let r=++this.navigationId;jn(()=>{this.transitions?.next(C(v({},n),{extractedUrl:this.urlHandlingStrategy.extract(n.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(n){return this.transitions=new le(null),this.transitions.pipe(Me(r=>r!==null),ct(r=>{let o=!1,i=new AbortController,s=()=>!o&&this.currentTransition?.id===r.id;return U(r).pipe(ct(c=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,"",Ke.SupersededByNewNavigation),ue;this.currentTransition=r;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:l?C(v({},l),{previousNavigation:null}):null,abort:()=>i.abort(),routesRecognizeHandler:c.routesRecognizeHandler,beforeActivateHandler:c.beforeActivateHandler});let u=!n.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=c.extras.onSameUrlNavigation??n.onSameUrlNavigation;if(!u&&d!=="reload")return this.events.next(new rr(c.id,this.urlSerializer.serialize(c.rawUrl),"",wl.IgnoredSameUrlNavigation)),c.resolve(!1),ue;if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return U(c).pipe(ct(f=>(this.events.next(new ii(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?ue:Promise.resolve(f))),XP(this.environmentInjector,this.configLoader,this.rootComponentType,n.config,this.urlSerializer,this.paramsInheritanceStrategy,i.signal),Ce(f=>{r.targetSnapshot=f.targetSnapshot,r.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=f.urlAfterRedirects,h)),this.events.next(new Gs)}),ct(f=>re(r.routesRecognizeHandler.deferredHandle??U(void 0)).pipe(L(()=>f))),Ce(()=>{let f=new Cl(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(f)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:f,extractedUrl:h,source:p,restoredState:g,extras:S}=c,y=new ii(f,this.urlSerializer.serialize(h),p,g);this.events.next(y);let D=KD(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=C(v({},c),{targetSnapshot:D,urlAfterRedirects:h,extras:C(v({},S),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(w=>(w.finalUrl=h,w)),U(r)}else return this.events.next(new rr(c.id,this.urlSerializer.serialize(c.extractedUrl),"",wl.IgnoredByUrlHandlingStrategy)),c.resolve(!1),ue}),L(c=>{let l=new Fh(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);return this.events.next(l),this.currentTransition=r=C(v({},c),{guards:mP(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),r}),IP(c=>this.events.next(c)),ct(c=>{if(r.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw Ml(this.urlSerializer,c.guardsResult);let l=new Lh(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);if(this.events.next(l),!s())return ue;if(!c.guardsResult)return this.cancelNavigationTransition(c,"",Ke.GuardRejected),ue;if(c.guards.canActivateChecks.length===0)return U(c);let u=new Hh(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);if(this.events.next(u),!s())return ue;let d=!1;return U(c).pipe(eM(this.paramsInheritanceStrategy),Ce({next:()=>{d=!0;let f=new Uh(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(f)},complete:()=>{d||this.cancelNavigationTransition(c,"",Ke.NoDataFromResolver)}}))}),ND(c=>{let l=d=>{let f=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let h=d._environmentInjector;f.push(this.configLoader.loadComponent(h,d.routeConfig).then(p=>{d.component=p}))}for(let h of d.children)f.push(...l(h));return f},u=l(c.targetSnapshot.root);return u.length===0?U(c):re(Promise.all(u).then(()=>c))}),ND(()=>this.afterPreactivation()),ct(()=>{let{currentSnapshot:c,targetSnapshot:l}=r,u=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return u?re(u).pipe(L(()=>r)):U(r)}),un(1),ct(c=>{let l=dP(n.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);this.currentTransition=r=c=C(v({},c),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new ai);let u=r.beforeActivateHandler.deferredHandle;return u?re(u.then(()=>c)):U(c)}),Ce(c=>{new Zh(n.routeReuseStrategy,r.targetRouterState,r.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s()&&(o=!0,this.currentNavigation.update(l=>(l.abort=cM,l)),this.lastSuccessfulNavigation.set(jn(this.currentNavigation)),this.events.next(new nr(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0))}),Ei(ob(i.signal).pipe(Me(()=>!o&&!r.targetRouterState),Ce(()=>{this.cancelNavigationTransition(r,i.signal.reason+"",Ke.Aborted)}))),Ce({complete:()=>{o=!0}}),Ei(this.transitionAbortWithErrorSubject.pipe(Ce(c=>{throw c}))),Mn(()=>{i.abort(),o||this.cancelNavigationTransition(r,"",Ke.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),jt(c=>{if(o=!0,this.destroyed)return r.resolve(!1),ue;if(nb(c))this.events.next(new Ft(r.id,this.urlSerializer.serialize(r.extractedUrl),c.message,c.cancellationCode)),pP(c)?this.events.next(new ci(c.url,c.navigationBehaviorOptions)):r.resolve(!1);else{let l=new si(r.id,this.urlSerializer.serialize(r.extractedUrl),c,r.targetSnapshot??void 0);try{let u=Fe(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(u instanceof Ys){let{message:d,cancellationCode:f}=Ml(this.urlSerializer,u);this.events.next(new Ft(r.id,this.urlSerializer.serialize(r.extractedUrl),d,f)),this.events.next(new ci(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(l),c}catch(u){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(u)}}return ue}))}))}cancelNavigationTransition(n,r,o){let i=new Ft(n.id,this.urlSerializer.serialize(n.extractedUrl),r,o);this.events.next(i),n.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let n=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=jn(this.currentNavigation),o=r?.targetBrowserUrl??r?.extractedUrl;return n.toString()!==o?.toString()&&!r?.extras.skipLocationChange}static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function lM(t){return t!==zs}var vb=new A("");var uM=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:()=>P(dM),providedIn:"root"})}return t})(),np=class{shouldDetach(e){return!1}store(e,n){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,n){return e.routeConfig===n.routeConfig}shouldDestroyInjector(e){return!0}},dM=(()=>{class t extends np{static \u0275fac=(()=>{let n;return function(o){return(n||(n=Yi(t)))(o||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ap=(()=>{class t{urlSerializer=P(kl);options=P(Al,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=P(Ro);urlHandlingStrategy=P(sp);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ht;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:n,initialUrl:r,targetBrowserUrl:o}){let i=n!==void 0?this.urlHandlingStrategy.merge(n,r):r,s=o??i;return s instanceof Ht?this.urlSerializer.serialize(s):s}routerUrlState(n){return n?.targetBrowserUrl===void 0||n?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(n.finalUrl)}}commitTransition({targetRouterState:n,finalUrl:r,initialUrl:o}){r&&n?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,o),this.routerState=n):this.rawUrlTree=o}routerState=KD(null,P(ye));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:()=>P(fM),providedIn:"root"})}return t})(),fM=(()=>{class t extends ap{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(n){return this.location.subscribe(r=>{r.type==="popstate"&&setTimeout(()=>{n(r.url,r.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(n,r){n instanceof ii?this.updateStateMemento():n instanceof rr?this.commitTransition(r):n instanceof Cl?this.urlUpdateStrategy==="eager"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):n instanceof ai?(this.commitTransition(r),this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):n instanceof Ft&&!QD(n)?this.restoreHistory(r):n instanceof si?this.restoreHistory(r,!0):n instanceof nr&&(this.lastSuccessfulId=n.id,this.currentPageId=this.browserPageId)}setBrowserUrl(n,r){let{extras:o,id:i}=r,{replaceUrl:s,state:c}=o;if(this.location.isCurrentPathEqualTo(n)||s){let l=this.browserPageId,u=v(v({},c),this.generateNgRouterState(i,l,r));this.location.replaceState(n,"",u)}else{let l=v(v({},c),this.generateNgRouterState(i,this.browserPageId+1,r));this.location.go(n,"",l)}}restoreHistory(n,r=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,i=this.currentPageId-o;i!==0?this.location.historyGo(i):this.getCurrentUrlTree()===n.finalUrl&&i===0&&(this.resetInternalState(n),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetInternalState(n),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:n}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(n,r,o){return this.canceledNavigationResolution==="computed"?v({navigationId:n,\u0275routerPageId:r},this.routerUrlState(o)):v({navigationId:n},this.routerUrlState(o))}static \u0275fac=(()=>{let n;return function(o){return(n||(n=Yi(t)))(o||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Sb(t,e){t.events.pipe(Me(n=>n instanceof nr||n instanceof Ft||n instanceof si||n instanceof rr),L(n=>n instanceof nr||n instanceof rr?0:(n instanceof Ft?n.code===Ke.Redirect||n.code===Ke.SupersededByNewNavigation:!1)?2:1),Me(n=>n!==2),un(1)).subscribe(()=>{e()})}var cp=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=P(zd);stateManager=P(ap);options=P(Al,{optional:!0})||{};pendingTasks=P(mn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=P(yb);urlSerializer=P(kl);location=P(Ro);urlHandlingStrategy=P(sp);injector=P(ye);_events=new me;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=P(uM);injectorCleanup=P(vb,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=P(Ol,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!P(Nl,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:n=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Ae;subscribeToNavigationEvents(){let n=this.navigationTransitions.events.subscribe(r=>{try{let o=this.navigationTransitions.currentTransition,i=jn(this.navigationTransitions.currentNavigation);if(o!==null&&i!==null){if(this.stateManager.handleRouterEvent(r,i),r instanceof Ft&&r.code!==Ke.Redirect&&r.code!==Ke.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof nr)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof ci){let s=r.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(r.url,o.currentRawUrl),l=v({scroll:o.extras.scroll,browserUrl:o.extras.browserUrl,info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:o.extras.replaceUrl||this.urlUpdateStrategy==="eager"||lM(o.source)},s);this.scheduleNavigation(c,zs,null,l,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}cP(r)&&this._events.next(r)}catch(o){this.navigationTransitions.transitionAbortWithErrorSubject.next(o)}});this.eventsSubscription.add(n)}resetRootComponentType(n){this.routerState.root.component=n,this.navigationTransitions.rootComponentType=n}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),zs,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((n,r,o,i)=>{this.navigateToSyncWithBrowser(n,o,r,i)})}navigateToSyncWithBrowser(n,r,o,i){let s=o?.navigationId?o:null,c=o?.\u0275routerUrl??n;if(o?.\u0275routerUrl&&(i=C(v({},i),{browserUrl:n})),o){let u=v({},o);delete u.navigationId,delete u.\u0275routerPageId,delete u.\u0275routerUrl,Object.keys(u).length!==0&&(i.state=u)}let l=this.parseUrl(c);this.scheduleNavigation(l,r,s,i).catch(u=>{this.disposed||this.injector.get(Gt)(u)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return jn(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(n){this.config=n.map(ip),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(n,r={}){let{relativeTo:o,queryParams:i,fragment:s,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:s,d=null;switch(c??this.options.defaultQueryParamsHandling){case"merge":d=v(v({},this.currentUrlTree.queryParams),i);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let h=o?o.snapshot:this.routerState.snapshot.root;f=zD(h)}catch(h){(typeof n[0]!="string"||n[0][0]!=="/")&&(n=[]),f=this.currentUrlTree.root}return WD(f,n,d,u??null,this.urlSerializer)}navigateByUrl(n,r={skipLocationChange:!1}){let o=oi(n)?n:this.parseUrl(n),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,zs,null,r)}navigate(n,r={skipLocationChange:!1}){return hM(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){try{return this.urlSerializer.parse(n)}catch(r){return this.console.warn(co(4018,!1)),this.urlSerializer.parse("/")}}isActive(n,r){let o;if(r===!0?o=v({},FD):r===!1?o=v({},Nh):o=v(v({},Nh),r),oi(n))return ID(this.currentUrlTree,n,o);let i=this.parseUrl(n);return ID(this.currentUrlTree,i,o)}removeEmptyProps(n){return Object.entries(n).reduce((r,[o,i])=>(i!=null&&(r[o]=i),r),{})}scheduleNavigation(n,r,o,i,s){if(this.disposed)return Promise.resolve(!1);let c,l,u;s?(c=s.resolve,l=s.reject,u=s.promise):u=new Promise((f,h)=>{c=f,l=h});let d=this.pendingTasks.add();return Sb(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:n,extras:i,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function hM(t){for(let e=0;e<t.length;e++)if(t[e]==null)throw new x(4008,!1)}var pM=new A("");function lp(t,...e){return uo([{provide:Ol,multi:!0,useValue:t},[],{provide:Qr,useFactory:mM},{provide:Dc,multi:!0,useFactory:gM},e.map(n=>n.\u0275providers)])}function mM(){return P(cp).routerState.root}function gM(){let t=P($t);return e=>{let n=t.get(Co);if(e!==n.components[0])return;let r=t.get(cp),o=t.get(yM);t.get(vM)===1&&r.initialNavigation(),t.get(SM,null,{optional:!0})?.setUpPreloading(),t.get(pM,null,{optional:!0})?.init(),r.resetRootComponentType(n.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var yM=new A("",{factory:()=>new me}),vM=new A("",{factory:()=>1});var SM=new A("");var Db=[{path:"",component:ml},{path:"**",redirectTo:""}];var bM=(t,e,n)=>{let r=["POST","PUT","PATCH"].indexOf(t.method.toUpperCase())!==-1,o=u=>["variables","extensions"].indexOf(u.toLowerCase())!==-1,i=t.body.length,s=t.options&&t.options.useMultipart,c;if(s){if(i)return new F(u=>u.error(new Error("File upload is not available when combined with Batching")));if(!r)return new F(u=>u.error(new Error("File upload is not available when GET is used")));if(!n)return new F(u=>u.error(new Error(`To use File upload you need to pass "extractFiles" function from "extract-files" library to HttpLink's options`)));c=n(t.body),s=!!c.files.size}let l={};if(i){if(!r)return new F(u=>u.error(new Error("Batching is not available for GET requests")));l={body:t.body}}else{let u=s?c.clone:t.body;r?l={body:u}:l={params:Object.keys(t.body).reduce((f,h)=>{let p=t.body[h];return f[h]=o(h)?JSON.stringify(p):p,f},{})}}if(s&&r){let u=new FormData;u.append("operations",JSON.stringify(l.body));let d={},f=c.files,h=0;f.forEach(p=>{d[++h]=p}),u.append("map",JSON.stringify(d)),h=0,f.forEach((p,g)=>{u.append(++h+"",g,g.name)}),l.body=u}return e.request(t.method,t.url,v(v({observe:"response",responseType:"json",reportProgress:!1},l),t.options))},EM=t=>t instanceof _t?t:new _t(t);var TM=(t,e)=>t&&e?e.keys().reduce((n,r)=>n.set(r,e.getAll(r)),t):e||t,bb=(t,e)=>t&&e?[...t.keys()].reduce((n,r)=>n.set(r,t.get(r)),e):e||t;function wM(...t){return t.find(e=>typeof e<"u")}function CM(t){let e=EM(t.headers);if(t.clientAwareness){let{name:n,version:r}=t.clientAwareness;n&&!e.has("apollographql-client-name")&&(e=e.set("apollographql-client-name",n)),r&&!e.has("apollographql-client-version")&&(e=e.set("apollographql-client-version",r))}return e}var IM={batchInterval:10,batchMax:10,uri:"graphql",method:"POST",withCredentials:!1,includeQuery:!0,includeExtensions:!1,useMultipart:!1};function di(t,e,n){return wM(t[n],e[n],IM[n])}function RM(t){let e={status:t.status,statusText:t.statusText,ok:t.ok,url:t.url||"",headers:new Headers,type:"error",redirected:!1};t.headers.keys().forEach(r=>{let o=t.headers.getAll(r);o&&o.forEach(i=>e.headers.append(r,i))});let n=typeof t.error=="string"?t.error:JSON.stringify(t.error||{});return t.status>=300?new Hs(`Response not successful: Received status code ${t.status}`,{response:e,bodyText:n}):new Error(t.message)}var up=class extends Zn{httpClient;options;requester;print=Uo;constructor(e,n){super(),this.httpClient=e,this.options=n,this.options.operationPrinter&&(this.print=this.options.operationPrinter),this.requester=r=>new F(o=>{let i=r.getContext(),s=di(i,this.options,"method"),c=di(i,this.options,"includeQuery"),l=di(i,this.options,"includeExtensions"),u=di(i,this.options,"uri"),d=di(i,this.options,"withCredentials"),f=di(i,this.options,"useMultipart"),h=this.options.useGETForQueries===!0,p=bb(i.httpContext,bb(this.options.httpContext,new Mo)),g=r.query.definitions.some(w=>w.kind==="OperationDefinition"&&w.operation==="query");h&&g&&(s="GET");let S=TM(this.options.headers,CM(i)),y={method:s,url:typeof u=="function"?u(r):u,body:{operationName:r.operationName,variables:r.variables},options:{withCredentials:d,useMultipart:f,headers:S,context:p}};l&&(y.body.extensions=r.extensions),c&&(y.body.query=this.print(r.query));let D=bM(y,this.httpClient,this.options.extractFiles).subscribe({next:w=>{r.setContext({response:w}),o.next(w.body)},error:w=>{w instanceof Vn?o.error(RM(w)):o.error(w)},complete:()=>o.complete()});return()=>{D.closed||D.unsubscribe()}})}request(e){return this.requester(e)}},Eb=(()=>{class t{httpClient;constructor(n){this.httpClient=n}create(n){return new up(this.httpClient,n)}static \u0275fac=function(r){return new(r||t)(O(Ac))};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();sf(ml,{providers:[lp(Db),uf(),dD(()=>{let t=P(Eb);return{cache:new Vr,link:t.create({uri:"https://graphqlpokemon.favware.tech/v8"})}})]}).catch(t=>console.error(t));
