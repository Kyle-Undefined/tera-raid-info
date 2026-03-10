var ob=Object.defineProperty,ib=Object.defineProperties;var sb=Object.getOwnPropertyDescriptors;var zs=Object.getOwnPropertySymbols;var Kh=Object.prototype.hasOwnProperty,Yh=Object.prototype.propertyIsEnumerable;var Qh=(e,t,n)=>t in e?ob(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||={})Kh.call(t,n)&&Qh(e,n,t[n]);if(zs)for(var n of zs(t))Yh.call(t,n)&&Qh(e,n,t[n]);return e},C=(e,t)=>ib(e,sb(t));var Ws=e=>typeof e=="symbol"?e:e+"",ve=(e,t)=>{var n={};for(var r in e)Kh.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&zs)for(var r of zs(e))t.indexOf(r)<0&&Yh.call(e,r)&&(n[r]=e[r]);return n};var Z=(e,t,n)=>new Promise((r,o)=>{var i=l=>{try{c(n.next(l))}catch(u){o(u)}},s=l=>{try{c(n.throw(l))}catch(u){o(u)}},c=l=>l.done?r(l.value):Promise.resolve(l.value).then(i,s);c((n=n.apply(e,t)).next())});var je=null,qs=!1,Tl=1,ab=null,rt=Symbol("SIGNAL");function q(e){let t=je;return je=e,t}function Qs(){return je}var ii={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function si(e){if(qs)throw new Error("");if(je===null)return;je.consumerOnSignalRead(e);let t=je.producersTail;if(t!==void 0&&t.producer===e)return;let n,r=je.recomputing;if(r&&(n=t!==void 0?t.nextProducer:je.producers,n!==void 0&&n.producer===e)){je.producersTail=n,n.lastReadVersion=e.version;return}let o=e.consumersTail;if(o!==void 0&&o.consumer===je&&(!r||lb(o,je)))return;let i=Vr(je),s={producer:e,consumer:je,nextProducer:n,prevConsumer:o,lastReadVersion:e.version,nextConsumer:void 0};je.producersTail=s,t!==void 0?t.nextProducer=s:je.producers=s,i&&ep(e,s)}function Zh(){Tl++}function wl(e){if(!(Vr(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===Tl)){if(!e.producerMustRecompute(e)&&!Ys(e)){Gs(e);return}e.producerRecomputeValue(e),Gs(e)}}function Cl(e){if(e.consumers===void 0)return;let t=qs;qs=!0;try{for(let n=e.consumers;n!==void 0;n=n.nextConsumer){let r=n.consumer;r.dirty||cb(r)}}finally{qs=t}}function Il(){return je?.consumerAllowSignalWrites!==!1}function cb(e){e.dirty=!0,Cl(e),e.consumerMarkedDirty?.(e)}function Gs(e){e.dirty=!1,e.lastCleanEpoch=Tl}function ai(e){return e&&Jh(e),q(e)}function Jh(e){e.producersTail=void 0,e.recomputing=!0}function Ks(e,t){q(t),e&&Xh(e)}function Xh(e){e.recomputing=!1;let t=e.producersTail,n=t!==void 0?t.nextProducer:e.producers;if(n!==void 0){if(Vr(e))do n=Rl(n);while(n!==void 0);t!==void 0?t.nextProducer=void 0:e.producers=void 0}}function Ys(e){for(let t=e.producers;t!==void 0;t=t.nextProducer){let n=t.producer,r=t.lastReadVersion;if(r!==n.version||(wl(n),r!==n.version))return!0}return!1}function ci(e){if(Vr(e)){let t=e.producers;for(;t!==void 0;)t=Rl(t)}e.producers=void 0,e.producersTail=void 0,e.consumers=void 0,e.consumersTail=void 0}function ep(e,t){let n=e.consumersTail,r=Vr(e);if(n!==void 0?(t.nextConsumer=n.nextConsumer,n.nextConsumer=t):(t.nextConsumer=void 0,e.consumers=t),t.prevConsumer=n,e.consumersTail=t,!r)for(let o=e.producers;o!==void 0;o=o.nextProducer)ep(o.producer,o)}function Rl(e){let t=e.producer,n=e.nextProducer,r=e.nextConsumer,o=e.prevConsumer;if(e.nextConsumer=void 0,e.prevConsumer=void 0,r!==void 0?r.prevConsumer=o:t.consumersTail=o,o!==void 0)o.nextConsumer=r;else if(t.consumers=r,!Vr(t)){let i=t.producers;for(;i!==void 0;)i=Rl(i)}return n}function Vr(e){return e.consumerIsAlwaysLive||e.consumers!==void 0}function Pl(e){ab?.(e)}function lb(e,t){let n=t.producersTail;if(n!==void 0){let r=t.producers;do{if(r===e)return!0;if(r===n)break;r=r.nextProducer}while(r!==void 0)}return!1}function Ml(e,t){return Object.is(e,t)}function ub(){throw new Error}var tp=ub;function np(e){tp(e)}function _l(e){tp=e}var db=null;function kl(e,t){let n=Object.create(Zs);n.value=e,t!==void 0&&(n.equal=t);let r=()=>rp(n);return r[rt]=n,Pl(n),[r,s=>$r(n,s),s=>Nl(n,s)]}function rp(e){return si(e),e.value}function $r(e,t){Il()||np(e),e.equal(e.value,t)||(e.value=t,fb(e))}function Nl(e,t){Il()||np(e),$r(e,t(e.value))}var Zs=C(g({},ii),{equal:Ml,value:void 0,kind:"signal"});function fb(e){e.version++,Zh(),Cl(e),db?.(e)}function j(e){return typeof e=="function"}function zr(e){let n=e(r=>{Error.call(r),r.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Js=zr(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function Gn(e,t){if(e){let n=e.indexOf(t);0<=n&&e.splice(n,1)}}var Pe=class e{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let i of n)i.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(j(r))try{r()}catch(i){t=i instanceof Js?i.errors:[i]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let i of o)try{op(i)}catch(s){t=t??[],s instanceof Js?t=[...t,...s.errors]:t.push(s)}}if(t)throw new Js(t)}}add(t){var n;if(t&&t!==this)if(this.closed)op(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}}_hasParent(t){let{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){let{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&Gn(n,t)}remove(t){let{_finalizers:n}=this;n&&Gn(n,t),t instanceof e&&t._removeParent(this)}};Pe.EMPTY=(()=>{let e=new Pe;return e.closed=!0,e})();var xl=Pe.EMPTY;function Xs(e){return e instanceof Pe||e&&"closed"in e&&j(e.remove)&&j(e.add)&&j(e.unsubscribe)}function op(e){j(e)?e():e.unsubscribe()}var bt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Wr={setTimeout(e,t,...n){let{delegate:r}=Wr;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){let{delegate:t}=Wr;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function ea(e){Wr.setTimeout(()=>{let{onUnhandledError:t}=bt;if(t)t(e);else throw e})}function li(){}var ip=Al("C",void 0,void 0);function sp(e){return Al("E",void 0,e)}function ap(e){return Al("N",e,void 0)}function Al(e,t,n){return{kind:e,value:t,error:n}}var Qn=null;function qr(e){if(bt.useDeprecatedSynchronousErrorHandling){let t=!Qn;if(t&&(Qn={errorThrown:!1,error:null}),e(),t){let{errorThrown:n,error:r}=Qn;if(Qn=null,n)throw r}}else e()}function cp(e){bt.useDeprecatedSynchronousErrorHandling&&Qn&&(Qn.errorThrown=!0,Qn.error=e)}var Kn=class extends Pe{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,Xs(t)&&t.add(this)):this.destination=mb}static create(t,n,r){return new en(t,n,r)}next(t){this.isStopped?Fl(ap(t),this):this._next(t)}error(t){this.isStopped?Fl(sp(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?Fl(ip,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},hb=Function.prototype.bind;function Ol(e,t){return hb.call(e,t)}var Ll=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){ta(r)}}error(t){let{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){ta(r)}else ta(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){ta(n)}}},en=class extends Kn{constructor(t,n,r){super();let o;if(j(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&bt.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&Ol(t.next,i),error:t.error&&Ol(t.error,i),complete:t.complete&&Ol(t.complete,i)}):o=t}this.destination=new Ll(o)}};function ta(e){bt.useDeprecatedSynchronousErrorHandling?cp(e):ea(e)}function pb(e){throw e}function Fl(e,t){let{onStoppedNotification:n}=bt;n&&Wr.setTimeout(()=>n(e,t))}var mb={closed:!0,next:li,error:pb,complete:li};var Gr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function ot(e){return e}function Hl(...e){return Ul(e)}function Ul(e){return e.length===0?ot:e.length===1?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}var F=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){let r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){let i=yb(n)?n:new en(n,r,o);return qr(()=>{let{operator:s,source:c}=this;i.add(s?s.call(i,c):c?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return r=lp(r),new r((o,i)=>{let s=new en({next:c=>{try{n(c)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(n)}[Gr](){return this}pipe(...n){return Ul(n)(this)}toPromise(n){return n=lp(n),new n((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function lp(e){var t;return(t=e??bt.Promise)!==null&&t!==void 0?t:Promise}function gb(e){return e&&j(e.next)&&j(e.error)&&j(e.complete)}function yb(e){return e&&e instanceof Kn||gb(e)&&Xs(e)}function vb(e){return j(e?.lift)}function Q(e){return t=>{if(vb(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Y(e,t,n,r,o){return new jl(e,t,n,r,o)}var jl=class extends Kn{constructor(t,n,r,o,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(c){try{n(c)}catch(l){t.error(l)}}:super._next,this._error=o?function(c){try{o(c)}catch(l){t.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(c){t.error(c)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};var up=zr(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var fe=(()=>{class e extends F{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let r=new na(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new up}next(n){qr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(n)}})}error(n){qr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){qr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:r,isStopped:o,observers:i}=this;return r||o?xl:(this.currentObservers=null,i.push(n),new Pe(()=>{this.currentObservers=null,Gn(i,n)}))}_checkFinalizedStatuses(n){let{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){let n=new F;return n.source=this,n}}return e.create=(t,n)=>new na(t,n),e})(),na=class extends fe{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,t)}error(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,t)}complete(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)}_subscribe(t){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&r!==void 0?r:xl}};var ce=class extends fe{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){let{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}};var ui={now(){return(ui.delegate||Date).now()},delegate:void 0};var Yn=class extends fe{constructor(t=1/0,n=1/0,r=ui){super(),this._bufferSize=t,this._windowTime=n,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=n===1/0,this._bufferSize=Math.max(1,t),this._windowTime=Math.max(1,n)}next(t){let{isStopped:n,_buffer:r,_infiniteTimeWindow:o,_timestampProvider:i,_windowTime:s}=this;n||(r.push(t),!o&&r.push(i.now()+s)),this._trimBuffer(),super.next(t)}_subscribe(t){this._throwIfClosed(),this._trimBuffer();let n=this._innerSubscribe(t),{_infiniteTimeWindow:r,_buffer:o}=this,i=o.slice();for(let s=0;s<i.length&&!t.closed;s+=r?1:2)t.next(i[s]);return this._checkFinalizedStatuses(t),n}_trimBuffer(){let{_bufferSize:t,_timestampProvider:n,_buffer:r,_infiniteTimeWindow:o}=this,i=(o?1:2)*t;if(t<1/0&&i<r.length&&r.splice(0,r.length-i),!o){let s=n.now(),c=0;for(let l=1;l<r.length&&r[l]<=s;l+=2)c=l;c&&r.splice(0,c+1)}}};var ra=class extends Pe{constructor(t,n){super()}schedule(t,n=0){return this}};var di={setInterval(e,t,...n){let{delegate:r}=di;return r?.setInterval?r.setInterval(e,t,...n):setInterval(e,t,...n)},clearInterval(e){let{delegate:t}=di;return(t?.clearInterval||clearInterval)(e)},delegate:void 0};var Qr=class extends ra{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){var r;if(this.closed)return this;this.state=t;let o=this.id,i=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(i,o,n)),this.pending=!0,this.delay=n,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(i,this.id,n),this}requestAsyncId(t,n,r=0){return di.setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,n,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return n;n!=null&&di.clearInterval(n)}execute(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let r=this._execute(t,n);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let r=!1,o;try{this.work(t)}catch(i){r=!0,o=i||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){let{id:t,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,Gn(r,this),t!=null&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,super.unsubscribe()}}};var Kr=class e{constructor(t,n=e.now){this.schedulerActionCtor=t,this.now=n}schedule(t,n=0,r){return new this.schedulerActionCtor(this,t).schedule(r,n)}};Kr.now=ui.now;var Yr=class extends Kr{constructor(t,n=Kr.now){super(t,n),this.actions=[],this._active=!1}flush(t){let{actions:n}=this;if(this._active){n.push(t);return}let r;this._active=!0;do if(r=t.execute(t.state,t.delay))break;while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}}};var Sb=new Yr(Qr),dp=Sb;var oa=class extends Qr{constructor(t,n){super(t,n),this.scheduler=t,this.work=n}schedule(t,n=0){return n>0?super.schedule(t,n):(this.delay=n,this.state=t,this.scheduler.flush(this),this)}execute(t,n){return n>0||this.closed?super.execute(t,n):this._execute(t,n)}requestAsyncId(t,n,r=0){return r!=null&&r>0||r==null&&this.delay>0?super.requestAsyncId(t,n,r):(t.flush(this),0)}};var ia=class extends Yr{};var Bl=new ia(oa);var le=new F(e=>e.complete());function sa(e){return e&&j(e.schedule)}function fp(e){return e[e.length-1]}function hp(e){return j(fp(e))?e.pop():void 0}function Tn(e){return sa(fp(e))?e.pop():void 0}var fi=function(){return fi=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},fi.apply(this,arguments)};function mp(e,t,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function c(d){try{u(r.next(d))}catch(f){s(f)}}function l(d){try{u(r.throw(d))}catch(f){s(f)}}function u(d){d.done?i(d.value):o(d.value).then(c,l)}u((r=r.apply(e,t||[])).next())})}function pp(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Zn(e){return this instanceof Zn?(this.v=e,this):new Zn(e)}function gp(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),c("next"),c("throw"),c("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(p){return function(v){return Promise.resolve(v).then(p,f)}}function c(p,v){r[p]&&(o[p]=function(S){return new Promise(function(y,D){i.push([p,S,y,D])>1||l(p,S)})},v&&(o[p]=v(o[p])))}function l(p,v){try{u(r[p](v))}catch(S){h(i[0][3],S)}}function u(p){p.value instanceof Zn?Promise.resolve(p.value.v).then(d,f):h(i[0][2],p)}function d(p){l("next",p)}function f(p){l("throw",p)}function h(p,v){p(v),i.shift(),i.length&&l(i[0][0],i[0][1])}}function yp(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof pp=="function"?pp(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(c,l){s=e[i](s),o(c,l,s.done,s.value)})}}function o(i,s,c,l){Promise.resolve(l).then(function(u){i({value:u,done:c})},s)}}var aa=e=>e&&typeof e.length=="number"&&typeof e!="function";function ca(e){return j(e?.then)}function la(e){return j(e[Gr])}function ua(e){return Symbol.asyncIterator&&j(e?.[Symbol.asyncIterator])}function da(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Db(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var fa=Db();function ha(e){return j(e?.[fa])}function pa(e){return gp(this,arguments,function*(){let n=e.getReader();try{for(;;){let{value:r,done:o}=yield Zn(n.read());if(o)return yield Zn(void 0);yield yield Zn(r)}}finally{n.releaseLock()}})}function ma(e){return j(e?.getReader)}function Se(e){if(e instanceof F)return e;if(e!=null){if(la(e))return bb(e);if(aa(e))return Eb(e);if(ca(e))return Tb(e);if(ua(e))return vp(e);if(ha(e))return wb(e);if(ma(e))return Cb(e)}throw da(e)}function bb(e){return new F(t=>{let n=e[Gr]();if(j(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Eb(e){return new F(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function Tb(e){return new F(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,ea)})}function wb(e){return new F(t=>{for(let n of e)if(t.next(n),t.closed)return;t.complete()})}function vp(e){return new F(t=>{Ib(e,t).catch(n=>t.error(n))})}function Cb(e){return vp(pa(e))}function Ib(e,t){var n,r,o,i;return mp(this,void 0,void 0,function*(){try{for(n=yp(e);r=yield n.next(),!r.done;){let s=r.value;if(t.next(s),t.closed)return}}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})}function Ke(e,t,n,r=0,o=!1){let i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function Jn(e,t=0){return Q((n,r)=>{n.subscribe(Y(r,o=>Ke(r,e,()=>r.next(o),t),()=>Ke(r,e,()=>r.complete(),t),o=>Ke(r,e,()=>r.error(o),t)))})}function ga(e,t=0){return Q((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function Sp(e,t){return Se(e).pipe(ga(t),Jn(t))}function Dp(e,t){return Se(e).pipe(ga(t),Jn(t))}function bp(e,t){return new F(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function Ep(e,t){return new F(n=>{let r;return Ke(n,t,()=>{r=e[fa](),Ke(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){n.error(s);return}i?n.complete():n.next(o)},0,!0)}),()=>j(r?.return)&&r.return()})}function ya(e,t){if(!e)throw new Error("Iterable cannot be null");return new F(n=>{Ke(n,t,()=>{let r=e[Symbol.asyncIterator]();Ke(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function Tp(e,t){return ya(pa(e),t)}function wp(e,t){if(e!=null){if(la(e))return Sp(e,t);if(aa(e))return bp(e,t);if(ca(e))return Dp(e,t);if(ua(e))return ya(e,t);if(ha(e))return Ep(e,t);if(ma(e))return Tp(e,t)}throw da(e)}function ne(e,t){return t?wp(e,t):Se(e)}function H(...e){let t=Tn(e);return ne(e,t)}function Xn(e,t){let n=j(e)?e:()=>e,r=o=>o.error(n());return new F(t?o=>t.schedule(r,0,o):r)}var wn=class e{constructor(t,n,r){this.kind=t,this.value=n,this.error=r,this.hasValue=t==="N"}observe(t){return Rb(this,t)}do(t,n,r){let{kind:o,value:i,error:s}=this;return o==="N"?t?.(i):o==="E"?n?.(s):r?.()}accept(t,n,r){var o;return j((o=t)===null||o===void 0?void 0:o.next)?this.observe(t):this.do(t,n,r)}toObservable(){let{kind:t,value:n,error:r}=this,o=t==="N"?H(n):t==="E"?Xn(()=>r):t==="C"?le:0;if(!o)throw new TypeError(`Unexpected notification kind ${t}`);return o}static createNext(t){return new e("N",t)}static createError(t){return new e("E",void 0,t)}static createComplete(){return e.completeNotification}};wn.completeNotification=new wn("C");function Rb(e,t){var n,r,o;let{kind:i,value:s,error:c}=e;if(typeof i!="string")throw new TypeError('Invalid notification, missing "kind"');i==="N"?(n=t.next)===null||n===void 0||n.call(t,s):i==="E"?(r=t.error)===null||r===void 0||r.call(t,c):(o=t.complete)===null||o===void 0||o.call(t)}function va(e){return!!e&&(e instanceof F||j(e.lift)&&j(e.subscribe))}var tn=zr(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"});function Vl(e,t){let n=typeof t=="object";return new Promise((r,o)=>{let i=!1,s;e.subscribe({next:c=>{s=c,i=!0},error:o,complete:()=>{i?r(s):n?r(t.defaultValue):o(new tn)}})})}function Cp(e){return e instanceof Date&&!isNaN(e)}function L(e,t){return Q((n,r)=>{let o=0;n.subscribe(Y(r,i=>{r.next(e.call(t,i,o++))}))})}var{isArray:Pb}=Array;function Mb(e,t){return Pb(t)?e(...t):e(t)}function Ip(e){return L(t=>Mb(e,t))}var{isArray:_b}=Array,{getPrototypeOf:kb,prototype:Nb,keys:xb}=Object;function Rp(e){if(e.length===1){let t=e[0];if(_b(t))return{args:t,keys:null};if(Ab(t)){let n=xb(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}function Ab(e){return e&&typeof e=="object"&&kb(e)===Nb}function Pp(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function $l(...e){let t=Tn(e),n=hp(e),{args:r,keys:o}=Rp(e);if(r.length===0)return ne([],t);let i=new F(Ob(r,t,o?s=>Pp(o,s):ot));return n?i.pipe(Ip(n)):i}function Ob(e,t,n=ot){return r=>{Mp(t,()=>{let{length:o}=e,i=new Array(o),s=o,c=o;for(let l=0;l<o;l++)Mp(t,()=>{let u=ne(e[l],t),d=!1;u.subscribe(Y(r,f=>{i[l]=f,d||(d=!0,c--),c||r.next(n(i.slice()))},()=>{--s||r.complete()}))},r)},r)}}function Mp(e,t,n){e?Ke(n,e,t):t()}function _p(e,t,n,r,o,i,s,c){let l=[],u=0,d=0,f=!1,h=()=>{f&&!l.length&&!u&&t.complete()},p=S=>u<r?v(S):l.push(S),v=S=>{i&&t.next(S),u++;let y=!1;Se(n(S,d++)).subscribe(Y(t,D=>{o?.(D),i?p(D):t.next(D)},()=>{y=!0},void 0,()=>{if(y)try{for(u--;l.length&&u<r;){let D=l.shift();s?Ke(t,s,()=>v(D)):v(D)}h()}catch(D){t.error(D)}}))};return e.subscribe(Y(t,p,()=>{f=!0,h()})),()=>{c?.()}}function De(e,t,n=1/0){return j(t)?De((r,o)=>L((i,s)=>t(r,i,o,s))(Se(e(r,o))),n):(typeof t=="number"&&(n=t),Q((r,o)=>_p(r,o,e,n)))}function kp(e=1/0){return De(ot,e)}function Np(){return kp(1)}function Ot(...e){return Np()(ne(e,Tn(e)))}function hi(e){return new F(t=>{Se(e()).subscribe(t)})}function zl(e=0,t,n=dp){let r=-1;return t!=null&&(sa(t)?n=t:r=t),new F(o=>{let i=Cp(e)?+e-n.now():e;i<0&&(i=0);let s=0;return n.schedule(function(){o.closed||(o.next(s++),0<=r?this.schedule(void 0,r):o.complete())},i)})}function Te(e,t){return Q((n,r)=>{let o=0;n.subscribe(Y(r,i=>e.call(t,i,o++)&&r.next(i)))})}function Ft(e){return Q((t,n)=>{let r=null,o=!1,i;r=t.subscribe(Y(n,void 0,void 0,s=>{i=Se(e(s,Ft(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function Zr(e,t){return j(t)?De(e,t,1):De(e,1)}function xp(e){return Q((t,n)=>{let r=!1;t.subscribe(Y(n,o=>{r=!0,n.next(o)},()=>{r||n.next(e),n.complete()}))})}function nn(e){return e<=0?()=>le:Q((t,n)=>{let r=0;t.subscribe(Y(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function Wl(e,t=ot){return e=e??Fb,Q((n,r)=>{let o,i=!0;n.subscribe(Y(r,s=>{let c=t(s);(i||!e(o,c))&&(i=!1,o=c,r.next(s))}))})}function Fb(e,t){return e===t}function Ap(e=Lb){return Q((t,n)=>{let r=!1;t.subscribe(Y(n,o=>{r=!0,n.next(o)},()=>r?n.complete():n.error(e())))})}function Lb(){return new tn}function Cn(e){return Q((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}function rn(e,t){let n=arguments.length>=2;return r=>r.pipe(e?Te((o,i)=>e(o,i,r)):ot,nn(1),n?xp(t):Ap(()=>new tn))}function Sa(e){return e<=0?()=>le:Q((t,n)=>{let r=[];t.subscribe(Y(n,o=>{r.push(o),e<r.length&&r.shift()},()=>{for(let o of r)n.next(o);n.complete()},void 0,()=>{r=null}))})}function ql(){return Q((e,t)=>{e.subscribe(Y(t,n=>{t.next(wn.createNext(n))},()=>{t.next(wn.createComplete()),t.complete()},n=>{t.next(wn.createError(n)),t.complete()}))})}function Lt(e={}){let{connector:t=()=>new fe,resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=e;return i=>{let s,c,l,u=0,d=!1,f=!1,h=()=>{c?.unsubscribe(),c=void 0},p=()=>{h(),s=l=void 0,d=f=!1},v=()=>{let S=s;p(),S?.unsubscribe()};return Q((S,y)=>{u++,!f&&!d&&h();let D=l=l??t();y.add(()=>{u--,u===0&&!f&&!d&&(c=Gl(v,o))}),D.subscribe(y),!s&&u>0&&(s=new en({next:E=>D.next(E),error:E=>{f=!0,h(),c=Gl(p,n,E),D.error(E)},complete:()=>{d=!0,h(),c=Gl(p,r),D.complete()}}),Se(S).subscribe(s))})(i)}}function Gl(e,t,...n){if(t===!0){e();return}if(t===!1)return;let r=new en({next:()=>{r.unsubscribe(),e()}});return Se(t(...n)).subscribe(r)}function er(e,t,n){let r,o=!1;return e&&typeof e=="object"?{bufferSize:r=1/0,windowTime:t=1/0,refCount:o=!1,scheduler:n}=e:r=e??1/0,Lt({connector:()=>new Yn(r,t,n),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:o})}function pi(...e){let t=Tn(e);return Q((n,r)=>{(t?Ot(e,n,t):Ot(e,n)).subscribe(r)})}function it(e,t){return Q((n,r)=>{let o=null,i=0,s=!1,c=()=>s&&!o&&r.complete();n.subscribe(Y(r,l=>{o?.unsubscribe();let u=0,d=i++;Se(e(l,d)).subscribe(o=Y(r,f=>r.next(t?t(l,f,d,u++):f),()=>{o=null,c()}))},()=>{s=!0,c()}))})}function mi(e){return Q((t,n)=>{Se(e).subscribe(Y(n,()=>n.complete(),li)),!n.closed&&t.subscribe(n)})}function be(e,t,n){let r=j(e)||t||n?{next:e,error:t,complete:n}:e;return r?Q((o,i)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let c=!0;o.subscribe(Y(i,l=>{var u;(u=r.next)===null||u===void 0||u.call(r,l),i.next(l)},()=>{var l;c=!1,(l=r.complete)===null||l===void 0||l.call(r),i.complete()},l=>{var u;c=!1,(u=r.error)===null||u===void 0||u.call(r,l),i.error(l)},()=>{var l,u;c&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):ot}var Ql;function Da(){return Ql}function Ht(e){let t=Ql;return Ql=e,t}var Op=Symbol("NotFound");function Jr(e){return e===Op||e?.name==="\u0275NotFound"}function Fp(e){let t=q(null);try{return e()}finally{q(t)}}var x=class extends Error{code;constructor(t,n){super(eo(t,n)),this.code=t}};function Bb(e){return`NG0${Math.abs(e)}`}function eo(e,t){return`${Bb(e)}${t?": "+t:""}`}function ee(e){for(let t in e)if(e[t]===ee)return t;throw Error("")}function Ia(e){if(typeof e=="string")return e;if(Array.isArray(e))return`[${e.map(Ia).join(", ")}]`;if(e==null)return""+e;let t=e.overriddenName||e.name;if(t)return`${t}`;let n=e.toString();if(n==null)return""+n;let r=n.indexOf(`
`);return r>=0?n.slice(0,r):n}function lu(e,t){return e?t?`${e} ${t}`:e:t||""}var Vb=ee({__forward_ref__:ee});function Ra(e){return e.__forward_ref__=Ra,e}function Ye(e){return uu(e)?e():e}function uu(e){return typeof e=="function"&&e.hasOwnProperty(Vb)&&e.__forward_ref__===Ra}function M(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function sr(e){return{providers:e.providers||[],imports:e.imports||[]}}function bi(e){return $b(e,Pa)}function du(e){return bi(e)!==null}function $b(e,t){return e.hasOwnProperty(t)&&e[t]||null}function zb(e){let t=e?.[Pa]??null;return t||null}function Yl(e){return e&&e.hasOwnProperty(Ea)?e[Ea]:null}var Pa=ee({\u0275prov:ee}),Ea=ee({\u0275inj:ee}),A=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(t,n){this._desc=t,this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=M({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function fu(e){return e&&!!e.\u0275providers}var hu=ee({\u0275cmp:ee}),pu=ee({\u0275dir:ee}),mu=ee({\u0275pipe:ee}),gu=ee({\u0275mod:ee}),yi=ee({\u0275fac:ee}),ar=ee({__NG_ELEMENT_ID__:ee}),Lp=ee({__NG_ENV_ID__:ee});function yu(e){return Ma(e,"@NgModule"),e[gu]||null}function Rn(e){return Ma(e,"@Component"),e[hu]||null}function vu(e){return Ma(e,"@Directive"),e[pu]||null}function Bp(e){return Ma(e,"@Pipe"),e[mu]||null}function Ma(e,t){if(e==null)throw new x(-919,!1)}var Vp=ee({ngErrorCode:ee}),Wb=ee({ngErrorMessage:ee}),qb=ee({ngTokenPath:ee});function Su(e,t){return $p("",-200,t)}function _a(e,t){throw new x(-201,!1)}function $p(e,t,n){let r=new x(t,e);return r[Vp]=t,r[Wb]=e,n&&(r[qb]=n),r}function Gb(e){return e[Vp]}var Zl;function zp(){return Zl}function st(e){let t=Zl;return Zl=e,t}function Du(e,t,n){let r=bi(e);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(n&8)return null;if(t!==void 0)return t;_a(e,"")}var Qb={},tr=Qb,Kb="__NG_DI_FLAG__",Jl=class{injector;constructor(t){this.injector=t}retrieve(t,n){let r=nr(n)||0;try{return this.injector.get(t,r&8?null:tr,r)}catch(o){if(Jr(o))return o;throw o}}};function Yb(e,t=0){let n=Da();if(n===void 0)throw new x(-203,!1);if(n===null)return Du(e,void 0,t);{let r=Zb(t),o=n.retrieve(e,r);if(Jr(o)){if(r.optional)return null;throw o}return o}}function O(e,t=0){return(zp()||Yb)(Ye(e),t)}function I(e,t){return O(e,nr(t))}function nr(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function Zb(e){return{optional:!!(e&8),host:!!(e&1),self:!!(e&2),skipSelf:!!(e&4)}}function Xl(e){let t=[];for(let n=0;n<e.length;n++){let r=Ye(e[n]);if(Array.isArray(r)){if(r.length===0)throw new x(900,!1);let o,i=0;for(let s=0;s<r.length;s++){let c=r[s],l=Jb(c);typeof l=="number"?l===-1?o=c.token:i|=l:o=c}t.push(O(o,i))}else t.push(O(r))}return t}function Jb(e){return e[Kb]}function rr(e,t){let n=e.hasOwnProperty(yi);return n?e[yi]:null}function ka(e,t){e.forEach(n=>Array.isArray(n)?ka(n,t):t(n))}function bu(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function Ei(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}var cr={},Et=[],to=new A(""),Ti=new A("",-1),Eu=new A(""),vi=class{get(t,n=tr){if(n===tr){let o=$p("",-201);throw o.name="\u0275NotFound",o}return n}};function no(e){return{\u0275providers:e}}function Wp(...e){return{\u0275providers:Tu(!0,e),\u0275fromNgModule:!0}}function Tu(e,...t){let n=[],r=new Set,o,i=s=>{n.push(s)};return ka(t,s=>{let c=s;Ta(c,i,[],r)&&(o||=[],o.push(c))}),o!==void 0&&qp(o,i),n}function qp(e,t){for(let n=0;n<e.length;n++){let{ngModule:r,providers:o}=e[n];wu(o,i=>{t(i,r)})}}function Ta(e,t,n,r){if(e=Ye(e),!e)return!1;let o=null,i=Yl(e),s=!i&&Rn(e);if(!i&&!s){let l=e.ngModule;if(i=Yl(l),i)o=l;else return!1}else{if(s&&!s.standalone)return!1;o=e}let c=r.has(o);if(s){if(c)return!1;if(r.add(o),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let u of l)Ta(u,t,n,r)}}else if(i){if(i.imports!=null&&!c){r.add(o);let u;ka(i.imports,d=>{Ta(d,t,n,r)&&(u||=[],u.push(d))}),u!==void 0&&qp(u,t)}if(!c){let u=rr(o)||(()=>new o);t({provide:o,useFactory:u,deps:Et},o),t({provide:Eu,useValue:o,multi:!0},o),t({provide:to,useValue:()=>O(o),multi:!0},o)}let l=i.providers;if(l!=null&&!c){let u=e;wu(l,d=>{t(d,u)})}}else return!1;return o!==e&&e.providers!==void 0}function wu(e,t){for(let n of e)fu(n)&&(n=n.\u0275providers),Array.isArray(n)?wu(n,t):t(n)}var Xb=ee({provide:String,useValue:ee});function Gp(e){return e!==null&&typeof e=="object"&&Xb in e}function eE(e){return!!(e&&e.useExisting)}function tE(e){return!!(e&&e.useFactory)}function wa(e){return typeof e=="function"}var wi=new A(""),ba={},Hp={},Kl;function Ci(){return Kl===void 0&&(Kl=new vi),Kl}var pe=class{},or=class extends pe{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,tu(t,s=>this.processProvider(s)),this.records.set(Ti,Xr(void 0,this)),o.has("environment")&&this.records.set(pe,Xr(void 0,this));let i=this.records.get(wi);i!=null&&typeof i.value=="string"&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(Eu,Et,{self:!0}))}retrieve(t,n){let r=nr(n)||0;try{return this.get(t,tr,r)}catch(o){if(Jr(o))return o;throw o}}destroy(){gi(this),this._destroyed=!0;let t=q(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of n)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),q(t)}}onDestroy(t){return gi(this),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){gi(this);let n=Ht(this),r=st(void 0),o;try{return t()}finally{Ht(n),st(r)}}get(t,n=tr,r){if(gi(this),t.hasOwnProperty(Lp))return t[Lp](this);let o=nr(r),i,s=Ht(this),c=st(void 0);try{if(!(o&4)){let u=this.records.get(t);if(u===void 0){let d=sE(t)&&bi(t);d&&this.injectableDefInScope(d)?u=Xr(eu(t),ba):u=null,this.records.set(t,u)}if(u!=null)return this.hydrate(t,u,o)}let l=o&2?Ci():this.parent;return n=o&8&&n===tr?null:n,l.get(t,n)}catch(l){let u=Gb(l);throw u===-200||u===-201?new x(u,null):l}finally{st(c),Ht(s)}}resolveInjectorInitializers(){let t=q(null),n=Ht(this),r=st(void 0),o;try{let i=this.get(to,Et,{self:!0});for(let s of i)s()}finally{Ht(n),st(r),q(t)}}toString(){return"R3Injector[...]"}processProvider(t){t=Ye(t);let n=wa(t)?t:Ye(t&&t.provide),r=rE(t);if(!wa(t)&&t.multi===!0){let o=this.records.get(n);o||(o=Xr(void 0,ba,!0),o.factory=()=>Xl(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n,r){let o=q(null);try{if(n.value===Hp)throw Su("");return n.value===ba&&(n.value=Hp,n.value=n.factory(void 0,r)),typeof n.value=="object"&&n.value&&iE(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{q(o)}}injectableDefInScope(t){if(!t.providedIn)return!1;let n=Ye(t.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(t){let n=this._onDestroyHooks.indexOf(t);n!==-1&&this._onDestroyHooks.splice(n,1)}};function eu(e){let t=bi(e),n=t!==null?t.factory:rr(e);if(n!==null)return n;if(e instanceof A)throw new x(-204,!1);if(e instanceof Function)return nE(e);throw new x(-204,!1)}function nE(e){if(e.length>0)throw new x(-204,!1);let n=zb(e);return n!==null?()=>n.factory(e):()=>new e}function rE(e){if(Gp(e))return Xr(void 0,e.useValue);{let t=Qp(e);return Xr(t,ba)}}function Qp(e,t,n){let r;if(wa(e)){let o=Ye(e);return rr(o)||eu(o)}else if(Gp(e))r=()=>Ye(e.useValue);else if(tE(e))r=()=>e.useFactory(...Xl(e.deps||[]));else if(eE(e))r=(o,i)=>O(Ye(e.useExisting),i!==void 0&&i&8?8:void 0);else{let o=Ye(e&&(e.useClass||e.provide));if(oE(e))r=()=>new o(...Xl(e.deps));else return rr(o)||eu(o)}return r}function gi(e){if(e.destroyed)throw new x(-205,!1)}function Xr(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function oE(e){return!!e.deps}function iE(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function sE(e){return typeof e=="function"||typeof e=="object"&&e.ngMetadataName==="InjectionToken"}function tu(e,t){for(let n of e)Array.isArray(n)?tu(n,t):n&&fu(n)?tu(n.\u0275providers,t):t(n)}function ke(e,t){let n;e instanceof or?(gi(e),n=e):n=new Jl(e);let r,o=Ht(n),i=st(void 0);try{return t()}finally{Ht(o),st(i)}}function Kp(){return zp()!==void 0||Da()!=null}var Tt=0,$=1,z=2,Oe=3,ft=4,ht=5,Ii=6,ro=7,Ze=8,Pn=9,an=10,Je=11,oo=12,Cu=13,io=14,pt=15,so=16,lr=17,Ri=18,cn=19,Iu=20,on=21,Na=22,Pi=23,at=24,xa=25,Mn=26,mt=27,Yp=1;var _n=7,Mi=8,_i=9,$e=10;function ln(e){return Array.isArray(e)&&typeof e[Yp]=="object"}function gt(e){return Array.isArray(e)&&e[Yp]===!0}function Ru(e){return(e.flags&4)!==0}function kn(e){return e.componentOffset>-1}function Aa(e){return(e.flags&1)===1}function ur(e){return!!e.template}function ao(e){return(e[z]&512)!==0}function dr(e){return(e[z]&256)===256}var Zp="svg",Jp="math";function wt(e){for(;Array.isArray(e);)e=e[Tt];return e}function un(e,t){return wt(t[e.index])}function Pu(e,t){return e.data[t]}function Ct(e,t){let n=t[e];return ln(n)?n:n[Tt]}function Oa(e){return(e[z]&128)===128}function Xp(e){return gt(e[Oe])}function ki(e,t){return t==null?null:e[t]}function Mu(e){e[lr]=0}function _u(e){e[z]&1024||(e[z]|=1024,Oa(e)&&xi(e))}function Ni(e){return!!(e[z]&9216||e[at]?.dirty)}function Fa(e){e[an].changeDetectionScheduler?.notify(8),e[z]&64&&(e[z]|=1024),Ni(e)&&xi(e)}function xi(e){e[an].changeDetectionScheduler?.notify(0);let t=In(e);for(;t!==null&&!(t[z]&8192||(t[z]|=8192,!Oa(t)));)t=In(t)}function ku(e,t){if(dr(e))throw new x(911,!1);e[on]===null&&(e[on]=[]),e[on].push(t)}function em(e,t){if(e[on]===null)return;let n=e[on].indexOf(t);n!==-1&&e[on].splice(n,1)}function In(e){let t=e[Oe];return gt(t)?t[Oe]:t}function tm(e){return e[ro]??=[]}function nm(e){return e.cleanup??=[]}var re={lFrame:pm(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var nu=!1;function rm(){return re.lFrame.elementDepthCount}function om(){re.lFrame.elementDepthCount++}function Nu(){re.lFrame.elementDepthCount--}function im(){return re.bindingsEnabled}function sm(){return re.skipHydrationRootTNode!==null}function xu(e){return re.skipHydrationRootTNode===e}function Au(){re.skipHydrationRootTNode=null}function Xe(){return re.lFrame.lView}function La(){return re.lFrame.tView}function jt(){let e=Ou();for(;e!==null&&e.type===64;)e=e.parent;return e}function Ou(){return re.lFrame.currentTNode}function am(){let e=re.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function Ai(e,t){let n=re.lFrame;n.currentTNode=e,n.isParent=t}function Fu(){return re.lFrame.isParent}function cm(){re.lFrame.isParent=!1}function Lu(){return nu}function Hu(e){let t=nu;return nu=e,t}function lm(e){return re.lFrame.bindingIndex=e}function um(){return re.lFrame.inI18n}function dm(e,t){let n=re.lFrame;n.bindingIndex=n.bindingRootIndex=e,Ha(t)}function fm(){return re.lFrame.currentDirectiveIndex}function Ha(e){re.lFrame.currentDirectiveIndex=e}function Uu(e){re.lFrame.currentQueryIndex=e}function aE(e){let t=e[$];return t.type===2?t.declTNode:t.type===1?e[ht]:null}function ju(e,t,n){if(n&4){let o=t,i=e;for(;o=o.parent,o===null&&!(n&1);)if(o=aE(i),o===null||(i=i[io],o.type&10))break;if(o===null)return!1;t=o,e=i}let r=re.lFrame=hm();return r.currentTNode=t,r.lView=e,!0}function Ua(e){let t=hm(),n=e[$];re.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function hm(){let e=re.lFrame,t=e===null?null:e.child;return t===null?pm(e):t}function pm(e){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=t),t}function mm(){let e=re.lFrame;return re.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var Bu=mm;function ja(){let e=mm();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function gm(){return re.lFrame.selectedIndex}function Nn(e){re.lFrame.selectedIndex=e}function ym(){return re.lFrame.currentNamespace}var vm=!0;function Vu(){return vm}function $u(e){vm=e}function ru(e,t=null,n=null,r){let o=zu(e,t,n,r);return o.resolveInjectorInitializers(),o}function zu(e,t=null,n=null,r,o=new Set){let i=[n||Et,Wp(e)],s;return new or(i,t||Ci(),s||null,o)}var Ut=class e{static THROW_IF_NOT_FOUND=tr;static NULL=new vi;static create(t,n){if(Array.isArray(t))return ru({name:""},n,t,"");{let r=t.name??"";return ru({name:r},t.parent,t.providers,r)}}static \u0275prov=M({token:e,providedIn:"any",factory:()=>O(Ti)});static __NG_ELEMENT_ID__=-1},we=new A(""),xn=(()=>{class e{static __NG_ELEMENT_ID__=cE;static __NG_ENV_ID__=n=>n}return e})(),ou=class extends xn{_lView;constructor(t){super(),this._lView=t}get destroyed(){return dr(this._lView)}onDestroy(t){let n=this._lView;return ku(n,t),()=>em(n,t)}};function cE(){return new ou(Xe())}var Sm=!1,Dm=new A(""),dn=(()=>{class e{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new ce(!1);debugTaskTracker=I(Dm,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new F(n=>{n.next(!1),n.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),this.debugTaskTracker?.add(n),n}has(n){return this.pendingTasks.has(n)}remove(n){this.pendingTasks.delete(n),this.debugTaskTracker?.remove(n),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=M({token:e,providedIn:"root",factory:()=>new e})}return e})(),iu=class extends fe{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(t=!1){super(),this.__isAsync=t,Kp()&&(this.destroyRef=I(xn,{optional:!0})??void 0,this.pendingTasks=I(dn,{optional:!0})??void 0)}emit(t){let n=q(null);try{super.next(t)}finally{q(n)}}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&typeof t=="object"){let l=t;o=l.next?.bind(l),i=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(i=this.wrapInTimeout(i),o&&(o=this.wrapInTimeout(o)),s&&(s=this.wrapInTimeout(s)));let c=super.subscribe({next:o,error:i,complete:s});return t instanceof Pe&&t.add(c),c}wrapInTimeout(t){return n=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{t(n)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},Ve=iu;function Ca(...e){}function Wu(e){let t,n;function r(){e=Ca;try{n!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(n),t!==void 0&&clearTimeout(t)}catch(o){}}return t=setTimeout(()=>{e(),r()}),typeof requestAnimationFrame=="function"&&(n=requestAnimationFrame(()=>{e(),r()})),()=>r()}function bm(e){return queueMicrotask(()=>e()),()=>{e=Ca}}var qu="isAngularZone",Si=qu+"_ID",lE=0,Be=class e{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Ve(!1);onMicrotaskEmpty=new Ve(!1);onStable=new Ve(!1);onError=new Ve(!1);constructor(t){let{enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:o=!1,scheduleInRootZone:i=Sm}=t;if(typeof Zone>"u")throw new x(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!o&&r,s.shouldCoalesceRunChangeDetection=o,s.callbackScheduled=!1,s.scheduleInRootZone=i,fE(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(qu)===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new x(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new x(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){let i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,uE,Ca,Ca);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}},uE={};function Gu(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function dE(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function t(){Wu(()=>{e.callbackScheduled=!1,su(e),e.isCheckStableRunning=!0,Gu(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{t()}):e._outer.run(()=>{t()}),su(e)}function fE(e){let t=()=>{dE(e)},n=lE++;e._inner=e._inner.fork({name:"angular",properties:{[qu]:!0,[Si]:n,[Si+n]:!0},onInvokeTask:(r,o,i,s,c,l)=>{if(hE(l))return r.invokeTask(i,s,c,l);try{return Up(e),r.invokeTask(i,s,c,l)}finally{(e.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&t(),jp(e)}},onInvoke:(r,o,i,s,c,l,u)=>{try{return Up(e),r.invoke(i,s,c,l,u)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!pE(l)&&t(),jp(e)}},onHasTask:(r,o,i,s)=>{r.hasTask(i,s),o===i&&(s.change=="microTask"?(e._hasPendingMicrotasks=s.microTask,su(e),Gu(e)):s.change=="macroTask"&&(e.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,o,i,s)=>(r.handleError(i,s),e.runOutsideAngular(()=>e.onError.emit(s)),!1)})}function su(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function Up(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function jp(e){e._nesting--,Gu(e)}var Di=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Ve;onMicrotaskEmpty=new Ve;onStable=new Ve;onError=new Ve;run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}};function hE(e){return Em(e,"__ignore_ng_zone__")}function pE(e){return Em(e,"__scheduler_tick__")}function Em(e,t){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[t]===!0}var sn=class{_console=console;handleError(t){this._console.error("ERROR",t)}},Bt=new A("",{factory:()=>{let e=I(Be),t=I(pe),n;return r=>{e.runOutsideAngular(()=>{t.destroyed&&!n?setTimeout(()=>{throw r}):(n??=t.get(sn),n.handleError(r))})}}}),Tm={provide:to,useValue:()=>{let e=I(sn,{optional:!0})},multi:!0};function co(e,t){let[n,r,o]=kl(e,t?.equal),i=n,s=i[rt];return i.set=r,i.update=o,i.asReadonly=wm.bind(i),i}function wm(){let e=this[rt];if(e.readonlyFn===void 0){let t=()=>this();t[rt]=e,e.readonlyFn=t}return e.readonlyFn}var ir=class{},Oi=new A("",{factory:()=>!0});var Qu=new A(""),Ba=(()=>{class e{internalPendingTasks=I(dn);scheduler=I(ir);errorHandler=I(Bt);add(){let n=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(n)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(n))}}run(n){let r=this.add();n().catch(this.errorHandler).finally(r)}static \u0275prov=M({token:e,providedIn:"root",factory:()=>new e})}return e})(),Ku=(()=>{class e{static \u0275prov=M({token:e,providedIn:"root",factory:()=>new au})}return e})(),au=class{dirtyEffectCount=0;queues=new Map;add(t){this.enqueue(t),this.schedule(t)}schedule(t){t.dirty&&this.dirtyEffectCount++}remove(t){let n=t.zone,r=this.queues.get(n);r.has(t)&&(r.delete(t),t.dirty&&this.dirtyEffectCount--)}enqueue(t){let n=t.zone;this.queues.has(n)||this.queues.set(n,new Set);let r=this.queues.get(n);r.has(t)||r.add(t)}flush(){for(;this.dirtyEffectCount>0;){let t=!1;for(let[n,r]of this.queues)n===null?t||=this.flushQueue(r):t||=n.run(()=>this.flushQueue(r));t||(this.dirtyEffectCount=0)}}flushQueue(t){let n=!1;for(let r of t)r.dirty&&(this.dirtyEffectCount--,n=!0,r.run());return n}},cu=class{[rt];constructor(t){this[rt]=t}destroy(){this[rt].destroy()}};function Vi(e){return{toString:e}.toString()}function RE(e){return typeof e=="function"}function Zm(e,t,n,r){t!==null?t.applyValueToInputSignal(t,r):e[n]=r}var Wa=class{previousValue;currentValue;firstChange;constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}},tc=(()=>{let e=()=>Jm;return e.ngInherit=!0,e})();function Jm(e){return e.type.prototype.ngOnChanges&&(e.setInput=ME),PE}function PE(){let e=eg(this),t=e?.current;if(t){let n=e.previous;if(n===cr)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function ME(e,t,n,r,o){let i=this.declaredInputs[r],s=eg(e)||_E(e,{previous:cr,current:null}),c=s.current||(s.current={}),l=s.previous,u=l[i];c[i]=new Wa(u&&u.currentValue,n,l===cr),Zm(e,t,o,n)}var Xm="__ngSimpleChanges__";function eg(e){return e[Xm]||null}function _E(e,t){return e[Xm]=t}var Cm=[];var oe=function(e,t=null,n){for(let r=0;r<Cm.length;r++){let o=Cm[r];o(e,t,n)}},J=(function(e){return e[e.TemplateCreateStart=0]="TemplateCreateStart",e[e.TemplateCreateEnd=1]="TemplateCreateEnd",e[e.TemplateUpdateStart=2]="TemplateUpdateStart",e[e.TemplateUpdateEnd=3]="TemplateUpdateEnd",e[e.LifecycleHookStart=4]="LifecycleHookStart",e[e.LifecycleHookEnd=5]="LifecycleHookEnd",e[e.OutputStart=6]="OutputStart",e[e.OutputEnd=7]="OutputEnd",e[e.BootstrapApplicationStart=8]="BootstrapApplicationStart",e[e.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",e[e.BootstrapComponentStart=10]="BootstrapComponentStart",e[e.BootstrapComponentEnd=11]="BootstrapComponentEnd",e[e.ChangeDetectionStart=12]="ChangeDetectionStart",e[e.ChangeDetectionEnd=13]="ChangeDetectionEnd",e[e.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",e[e.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",e[e.AfterRenderHooksStart=16]="AfterRenderHooksStart",e[e.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",e[e.ComponentStart=18]="ComponentStart",e[e.ComponentEnd=19]="ComponentEnd",e[e.DeferBlockStateStart=20]="DeferBlockStateStart",e[e.DeferBlockStateEnd=21]="DeferBlockStateEnd",e[e.DynamicComponentStart=22]="DynamicComponentStart",e[e.DynamicComponentEnd=23]="DynamicComponentEnd",e[e.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",e[e.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",e})(J||{});function kE(e,t,n){let{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){let s=Jm(t);(n.preOrderHooks??=[]).push(e,s),(n.preOrderCheckHooks??=[]).push(e,s)}o&&(n.preOrderHooks??=[]).push(0-e,o),i&&((n.preOrderHooks??=[]).push(e,i),(n.preOrderCheckHooks??=[]).push(e,i))}function NE(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){let i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:c,ngAfterViewInit:l,ngAfterViewChecked:u,ngOnDestroy:d}=i;s&&(e.contentHooks??=[]).push(-n,s),c&&((e.contentHooks??=[]).push(n,c),(e.contentCheckHooks??=[]).push(n,c)),l&&(e.viewHooks??=[]).push(-n,l),u&&((e.viewHooks??=[]).push(n,u),(e.viewCheckHooks??=[]).push(n,u)),d!=null&&(e.destroyHooks??=[]).push(n,d)}}function Va(e,t,n){tg(e,t,3,n)}function $a(e,t,n,r){(e[z]&3)===n&&tg(e,t,n,r)}function Yu(e,t){let n=e[z];(n&3)===t&&(n&=16383,n+=1,e[z]=n)}function tg(e,t,n,r){let o=r!==void 0?e[lr]&65535:0,i=r??-1,s=t.length-1,c=0;for(let l=o;l<s;l++)if(typeof t[l+1]=="number"){if(c=t[l],r!=null&&c>=r)break}else t[l]<0&&(e[lr]+=65536),(c<i||i==-1)&&(xE(e,n,t,l),e[lr]=(e[lr]&4294901760)+l+2),l++}function Im(e,t){oe(J.LifecycleHookStart,e,t);let n=q(null);try{t.call(e)}finally{q(n),oe(J.LifecycleHookEnd,e,t)}}function xE(e,t,n,r){let o=n[r]<0,i=n[r+1],s=o?-n[r]:n[r],c=e[s];o?e[z]>>14<e[lr]>>16&&(e[z]&3)===t&&(e[z]+=16384,Im(c,i)):Im(c,i)}var uo=-1,Hi=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(t,n,r,o){this.factory=t,this.name=o,this.canSeeViewProviders=n,this.injectImpl=r}};function AE(e){return(e.flags&8)!==0}function OE(e){return(e.flags&16)!==0}function FE(e,t,n){let r=0;for(;r<n.length;){let o=n[r];if(typeof o=="number"){if(o!==0)break;r++;let i=n[r++],s=n[r++],c=n[r++];e.setAttribute(t,s,c,i)}else{let i=o,s=n[++r];HE(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function LE(e){return e===3||e===4||e===6}function HE(e){return e.charCodeAt(0)===64}function pd(e,t){if(!(t===null||t.length===0))if(e===null||e.length===0)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){let o=t[r];typeof o=="number"?n=o:n===0||(n===-1||n===2?Rm(e,n,o,null,t[++r]):Rm(e,n,o,null,null))}}return e}function Rm(e,t,n,r,o){let i=0,s=e.length;if(t===-1)s=-1;else for(;i<e.length;){let c=e[i++];if(typeof c=="number"){if(c===t){s=-1;break}else if(c>t){s=i-1;break}}}for(;i<e.length;){let c=e[i];if(typeof c=="number")break;if(c===n){o!==null&&(e[i+1]=o);return}i++,o!==null&&i++}s!==-1&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),o!==null&&e.splice(i++,0,o)}function ng(e){return e!==uo}function qa(e){return e&32767}function UE(e){return e>>16}function Ga(e,t){let n=UE(e),r=t;for(;n>0;)r=r[io],n--;return r}var ed=!0;function Pm(e){let t=ed;return ed=e,t}var jE=256,rg=jE-1,og=5,BE=0,Vt={};function VE(e,t,n){let r;typeof n=="string"?r=n.charCodeAt(0)||0:n.hasOwnProperty(ar)&&(r=n[ar]),r==null&&(r=n[ar]=BE++);let o=r&rg,i=1<<o;t.data[e+(o>>og)]|=i}function ig(e,t){let n=sg(e,t);if(n!==-1)return n;let r=t[$];r.firstCreatePass&&(e.injectorIndex=t.length,Zu(r.data,e),Zu(t,null),Zu(r.blueprint,null));let o=md(e,t),i=e.injectorIndex;if(ng(o)){let s=qa(o),c=Ga(o,t),l=c[$].data;for(let u=0;u<8;u++)t[i+u]=c[s+u]|l[s+u]}return t[i+8]=o,i}function Zu(e,t){e.push(0,0,0,0,0,0,0,0,t)}function sg(e,t){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||t[e.injectorIndex+8]===null?-1:e.injectorIndex}function md(e,t){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;o!==null;){if(r=dg(o),r===null)return uo;if(n++,o=o[io],r.injectorIndex!==-1)return r.injectorIndex|n<<16}return uo}function $E(e,t,n){VE(e,t,n)}function ag(e,t,n){if(n&8||e!==void 0)return e;_a(t,"NodeInjector")}function cg(e,t,n,r){if(n&8&&r===void 0&&(r=null),(n&3)===0){let o=e[Pn],i=st(void 0);try{return o?o.get(t,r,n&8):Du(t,r,n&8)}finally{st(i)}}return ag(r,t,n)}function lg(e,t,n,r=0,o){if(e!==null){if(t[z]&2048&&!(r&2)){let s=QE(e,t,n,r,Vt);if(s!==Vt)return s}let i=ug(e,t,n,r,Vt);if(i!==Vt)return i}return cg(t,n,r,o)}function ug(e,t,n,r,o){let i=qE(n);if(typeof i=="function"){if(!ju(t,e,r))return r&1?ag(o,n,r):cg(t,n,r,o);try{let s;if(s=i(r),s==null&&!(r&8))_a(n);else return s}finally{Bu()}}else if(typeof i=="number"){let s=null,c=sg(e,t),l=uo,u=r&1?t[pt][ht]:null;for((c===-1||r&4)&&(l=c===-1?md(e,t):t[c+8],l===uo||!_m(r,!1)?c=-1:(s=t[$],c=qa(l),t=Ga(l,t)));c!==-1;){let d=t[$];if(Mm(i,c,d.data)){let f=zE(c,t,n,s,r,u);if(f!==Vt)return f}l=t[c+8],l!==uo&&_m(r,t[$].data[c+8]===u)&&Mm(i,c,t)?(s=d,c=qa(l),t=Ga(l,t)):c=-1}}return o}function zE(e,t,n,r,o,i){let s=t[$],c=s.data[e+8],l=r==null?kn(c)&&ed:r!=s&&(c.type&3)!==0,u=o&1&&i===c,d=WE(c,s,n,l,u);return d!==null?td(t,s,d,c,o):Vt}function WE(e,t,n,r,o){let i=e.providerIndexes,s=t.data,c=i&1048575,l=e.directiveStart,u=e.directiveEnd,d=i>>20,f=r?c:c+d,h=o?c+d:u;for(let p=f;p<h;p++){let v=s[p];if(p<l&&n===v||p>=l&&v.type===n)return p}if(o){let p=s[l];if(p&&ur(p)&&p.type===n)return l}return null}function td(e,t,n,r,o){let i=e[n],s=t.data;if(i instanceof Hi){let c=i;if(c.resolving)throw Su("");let l=Pm(c.canSeeViewProviders);c.resolving=!0;let u=s[n].type||s[n],d,f=c.injectImpl?st(c.injectImpl):null,h=ju(e,r,0);try{i=e[n]=c.factory(void 0,o,s,e,r),t.firstCreatePass&&n>=r.directiveStart&&kE(n,s[n],t)}finally{f!==null&&st(f),Pm(l),c.resolving=!1,Bu()}}return i}function qE(e){if(typeof e=="string")return e.charCodeAt(0)||0;let t=e.hasOwnProperty(ar)?e[ar]:void 0;return typeof t=="number"?t>=0?t&rg:GE:t}function Mm(e,t,n){let r=1<<e;return!!(n[t+(e>>og)]&r)}function _m(e,t){return!(e&2)&&!(e&1&&t)}var fr=class{_tNode;_lView;constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return lg(this._tNode,this._lView,t,nr(r),n)}};function GE(){return new fr(jt(),Xe())}function $i(e){return Vi(()=>{let t=e.prototype.constructor,n=t[yi]||nd(t),r=Object.prototype,o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){let i=o[yi]||nd(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function nd(e){return uu(e)?()=>{let t=nd(Ye(e));return t&&t()}:rr(e)}function QE(e,t,n,r,o){let i=e,s=t;for(;i!==null&&s!==null&&s[z]&2048&&!ao(s);){let c=ug(i,s,n,r|2,Vt);if(c!==Vt)return c;let l=i.parent;if(!l){let u=s[Iu];if(u){let d=u.get(n,Vt,r&-5);if(d!==Vt)return d}l=dg(s),s=s[io]}i=l}return o}function dg(e){let t=e[$],n=t.type;return n===2?t.declTNode:n===1?e[ht]:null}function KE(){return gd(jt(),Xe())}function gd(e,t){return new yd(un(e,t))}var yd=(()=>{class e{nativeElement;constructor(n){this.nativeElement=n}static __NG_ELEMENT_ID__=KE}return e})();function fg(e){return(e.flags&128)===128}var vd=(function(e){return e[e.OnPush=0]="OnPush",e[e.Eager=1]="Eager",e[e.Default=1]="Default",e})(vd||{}),hg=new Map,YE=0;function ZE(){return YE++}function JE(e){hg.set(e[cn],e)}function rd(e){hg.delete(e[cn])}var km="__ngContext__";function Ui(e,t){ln(t)?(e[km]=t[cn],JE(t)):e[km]=t}function pg(e){return gg(e[oo])}function mg(e){return gg(e[ft])}function gg(e){for(;e!==null&&!gt(e);)e=e[ft];return e}var XE;function Sd(e){XE=e}var nc=new A("",{factory:()=>eT}),eT="ng";var rc=new A(""),zi=new A("",{providedIn:"platform",factory:()=>"unknown"});var oc=new A("",{factory:()=>I(we).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var yg=!1,vg=new A("",{factory:()=>yg});var tT=(e,t,n,r)=>{};function nT(e,t,n,r){tT(e,t,n,r)}function Dd(e){return(e.flags&32)===32}var rT=()=>null;function Sg(e,t,n=!1){return rT(e,t,n)}function Dg(e,t){let n=e.contentQueries;if(n!==null){let r=q(null);try{for(let o=0;o<n.length;o+=2){let i=n[o],s=n[o+1];if(s!==-1){let c=e.data[s];Uu(i),c.contentQueries(2,t[s],s)}}}finally{q(r)}}}function od(e,t,n){Uu(0);let r=q(null);try{t(e,n)}finally{q(r)}}function bg(e,t,n){if(Ru(t)){let r=q(null);try{let o=t.directiveStart,i=t.directiveEnd;for(let s=o;s<i;s++){let c=e.data[s];if(c.contentQueries){let l=n[s];c.contentQueries(1,l,s)}}}finally{q(r)}}}var Rt=(function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e[e.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",e})(Rt||{});function oT(e,t){return e.createText(t)}function Eg(e,t,n){return e.createElement(t,n)}function Qa(e,t,n,r,o){e.insertBefore(t,n,r,o)}function Tg(e,t,n){e.appendChild(t,n)}function Nm(e,t,n,r,o){r!==null?Qa(e,t,n,r,o):Tg(e,t,n)}function iT(e,t,n,r){e.removeChild(null,t,n,r)}function sT(e,t,n){e.setAttribute(t,"style",n)}function aT(e,t,n){n===""?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}function wg(e,t,n){let{mergedAttrs:r,classes:o,styles:i}=n;r!==null&&FE(e,t,r),o!==null&&aT(e,t,o),i!==null&&sT(e,t,i)}function Cg(e){return e instanceof Function?e():e}function cT(e,t,n){let r=e.length;for(;;){let o=e.indexOf(t,n);if(o===-1)return o;if(o===0||e.charCodeAt(o-1)<=32){let i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}var Ig="ng-template";function lT(e,t,n,r){let o=0;if(r){for(;o<t.length&&typeof t[o]=="string";o+=2)if(t[o]==="class"&&cT(t[o+1].toLowerCase(),n,0)!==-1)return!0}else if(bd(e))return!1;if(o=t.indexOf(1,o),o>-1){let i;for(;++o<t.length&&typeof(i=t[o])=="string";)if(i.toLowerCase()===n)return!0}return!1}function bd(e){return e.type===4&&e.value!==Ig}function uT(e,t,n){let r=e.type===4&&!n?Ig:e.value;return t===r}function dT(e,t,n){let r=4,o=e.attrs,i=o!==null?pT(o):0,s=!1;for(let c=0;c<t.length;c++){let l=t[c];if(typeof l=="number"){if(!s&&!It(r)&&!It(l))return!1;if(s&&It(l))continue;s=!1,r=l|r&1;continue}if(!s)if(r&4){if(r=2|r&1,l!==""&&!uT(e,l,n)||l===""&&t.length===1){if(It(r))return!1;s=!0}}else if(r&8){if(o===null||!lT(e,o,l,n)){if(It(r))return!1;s=!0}}else{let u=t[++c],d=fT(l,o,bd(e),n);if(d===-1){if(It(r))return!1;s=!0;continue}if(u!==""){let f;if(d>i?f="":f=o[d+1].toLowerCase(),r&2&&u!==f){if(It(r))return!1;s=!0}}}}return It(r)||s}function It(e){return(e&1)===0}function fT(e,t,n,r){if(t===null)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){let s=t[o];if(s===e)return o;if(s===3||s===6)i=!0;else if(s===1||s===2){let c=t[++o];for(;typeof c=="string";)c=t[++o];continue}else{if(s===4)break;if(s===0){o+=4;continue}}o+=i?1:2}return-1}else return mT(t,e)}function hT(e,t,n=!1){for(let r=0;r<t.length;r++)if(dT(e,t[r],n))return!0;return!1}function pT(e){for(let t=0;t<e.length;t++){let n=e[t];if(LE(n))return t}return e.length}function mT(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){let r=e[n];if(typeof r=="number")return-1;if(r===t)return n;n++}return-1}function xm(e,t){return e?":not("+t.trim()+")":t}function gT(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if(typeof s=="string")if(r&2){let c=e[++n];o+="["+s+(c.length>0?'="'+c+'"':"")+"]"}else r&8?o+="."+s:r&4&&(o+=" "+s);else o!==""&&!It(s)&&(t+=xm(i,o),o=""),r=s,i=i||!It(r);n++}return o!==""&&(t+=xm(i,o)),t}function yT(e){return e.map(gT).join(",")}function vT(e){let t=[],n=[],r=1,o=2;for(;r<e.length;){let i=e[r];if(typeof i=="string")o===2?i!==""&&t.push(i,e[++r]):o===8&&n.push(i);else{if(!It(o))break;o=i}r++}return n.length&&t.push(1,...n),t}var Ed={};function Rg(e,t,n,r,o,i,s,c,l,u,d){let f=mt+r,h=f+o,p=ST(f,h),v=typeof u=="function"?u():u;return p[$]={type:e,blueprint:p,template:n,queries:null,viewQuery:c,declTNode:t,data:p.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i=="function"?i():i,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:v,incompleteFirstPass:!1,ssrId:d}}function ST(e,t){let n=[];for(let r=0;r<t;r++)n.push(r<e?null:Ed);return n}function DT(e){let t=e.tView;return t===null||t.incompleteFirstPass?e.tView=Rg(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):t}function Pg(e,t,n,r,o,i,s,c,l,u,d){let f=t.blueprint.slice();return f[Tt]=o,f[z]=r|4|128|8|64|1024,(u!==null||e&&e[z]&2048)&&(f[z]|=2048),Mu(f),f[Oe]=f[io]=e,f[Ze]=n,f[an]=s||e&&e[an],f[Je]=c||e&&e[Je],f[Pn]=l||e&&e[Pn]||null,f[ht]=i,f[cn]=ZE(),f[Ii]=d,f[Iu]=u,f[pt]=t.type==2?e[pt]:f,f}function bT(e,t,n){let r=un(t,e),o=DT(n),i=e[an].rendererFactory,s=kg(e,Pg(e,o,null,Mg(n),r,t,null,i.createRenderer(r,n),null,null,null));return e[t.index]=s}function Mg(e){let t=16;return e.signals?t=4096:e.onPush&&(t=64),t}function _g(e,t,n,r){if(n===0)return-1;let o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function kg(e,t){return e[oo]?e[Cu][ft]=t:e[oo]=t,e[Cu]=t,t}function ET(e,t,n,r){if(!r)if((t[z]&3)===3){let i=e.preOrderCheckHooks;i!==null&&Va(t,i,n)}else{let i=e.preOrderHooks;i!==null&&$a(t,i,0,n)}Nn(n)}var ic=(function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e})(ic||{});function id(e,t,n,r){let o=q(null);try{let[i,s,c]=e.inputs[n],l=null;(s&ic.SignalBased)!==0&&(l=t[i][rt]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):c!==null&&(r=c.call(t,r)),e.setInput!==null?e.setInput(t,l,r,n,i):Zm(t,l,i,r)}finally{q(o)}}var gr=(function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e})(gr||{}),TT;function Td(e,t){return TT(e,t)}var ML=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var sd=new WeakMap,ad=new WeakSet;function wT(e,t){let n=sd.get(e);if(!n||n.length===0)return;let r=t.parentNode,o=t.previousSibling;for(let i=n.length-1;i>=0;i--){let s=n[i],c=s.parentNode;s===t?(n.splice(i,1),ad.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(o&&s===o||c&&r&&c!==r)&&(n.splice(i,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function CT(e,t){let n=sd.get(e);n?n.includes(t)||n.push(t):sd.set(e,[t])}var hr=new Set,wd=(function(e){return e[e.CHANGE_DETECTION=0]="CHANGE_DETECTION",e[e.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",e})(wd||{}),yr=new A(""),Am=new Set;function Cd(e){Am.has(e)||(Am.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}var Ng=(()=>{class e{impl=null;execute(){this.impl?.execute()}static \u0275prov=M({token:e,providedIn:"root",factory:()=>new e})}return e})();var IT=new A("",{factory:()=>{let e=I(pe),t=new Set;return e.onDestroy(()=>t.clear()),{queue:t,isScheduled:!1,scheduler:null,injector:e}}});function xg(e,t,n){let r=e.get(IT);if(Array.isArray(t))for(let o of t)r.queue.add(o),n?.detachedLeaveAnimationFns?.push(o);else r.queue.add(t),n?.detachedLeaveAnimationFns?.push(t);r.scheduler&&r.scheduler(e)}function RT(e,t){for(let[n,r]of t)xg(e,r.animateFns)}function Om(e,t,n,r){let o=e?.[Mn]?.enter;t!==null&&o&&o.has(n.index)&&RT(r,o)}function Fm(e,t,n,r){try{n.get(Ti)}catch(s){return r(!1)}let o=e?.[Mn],i=PT(e,t,o);if(i.size===0){let s=!1;if(e){let c=[];sc(e,t,c),s=c.length>0}if(!s)return r(!1)}e&&hr.add(e[cn]),xg(n,()=>MT(e,t,o||void 0,i,r),o||void 0)}function PT(e,t,n){let r=new Map,o=n?.leave;if(o&&o.has(t.index)&&r.set(t.index,o.get(t.index)),e&&o)for(let[i,s]of o){if(r.has(i))continue;let l=e[$].data[i].parent;for(;l;){if(l===t){r.set(i,s);break}l=l.parent}}return r}function MT(e,t,n,r,o){let i=[];if(n&&n.leave)for(let[s]of r){if(!n.leave.has(s))continue;let c=n.leave.get(s);for(let l of c.animateFns){let{promise:u}=l();i.push(u)}n.detachedLeaveAnimationFns=void 0}if(e&&sc(e,t,i),i.length>0){let s=n||e?.[Mn];if(s){let c=s.running;c&&i.push(c),s.running=Promise.allSettled(i),_T(e,s.running,o)}else Promise.allSettled(i).then(()=>{e&&hr.delete(e[cn]),o(!0)})}else e&&hr.delete(e[cn]),o(!1)}function sc(e,t,n){if(kn(t)){let o=Ct(t.index,e);Lm(o,n)}else if(t.type&12){let o=e[t.index];if(gt(o))for(let i=$e;i<o.length;i++){let s=o[i];Lm(s,n)}}let r=t.child;for(;r;)sc(e,r,n),r=r.next}function Lm(e,t){let n=e[Mn];if(n&&n.leave)for(let o of n.leave.values())for(let i of o.animateFns){let{promise:s}=i();t.push(s)}let r=e[$].firstChild;for(;r;)sc(e,r,t),r=r.next}function _T(e,t,n){t.then(()=>{e[Mn]?.running===t&&(e[Mn].running=void 0,hr.delete(e[cn])),n(!0)})}function lo(e,t,n,r,o,i,s,c){if(o!=null){let l,u=!1;gt(o)?l=o:ln(o)&&(u=!0,o=o[Tt]);let d=wt(o);e===0&&r!==null?(Om(c,r,i,n),s==null?Tg(t,r,d):Qa(t,r,d,s||null,!0)):e===1&&r!==null?(Om(c,r,i,n),Qa(t,r,d,s||null,!0),wT(i,d)):e===2?(c?.[Mn]?.leave?.has(i.index)&&CT(i,d),Fm(c,i,n,f=>{if(ad.has(d)){ad.delete(d);return}iT(t,d,u,f)})):e===3&&Fm(c,i,n,()=>{t.destroyNode(d)}),l!=null&&VT(t,e,n,l,i,r,s)}}function kT(e,t){Ag(e,t),t[Tt]=null,t[ht]=null}function NT(e,t,n,r,o,i){r[Tt]=o,r[ht]=t,ac(e,r,n,1,o,i)}function Ag(e,t){t[an].changeDetectionScheduler?.notify(9),ac(e,t,t[Je],2,null,null)}function xT(e){let t=e[oo];if(!t)return Ju(e[$],e);for(;t;){let n=null;if(ln(t))n=t[oo];else{let r=t[$e];r&&(n=r)}if(!n){for(;t&&!t[ft]&&t!==e;)ln(t)&&Ju(t[$],t),t=t[Oe];t===null&&(t=e),ln(t)&&Ju(t[$],t),n=t&&t[ft]}t=n}}function Id(e,t){let n=e[_i],r=n.indexOf(t);n.splice(r,1)}function Og(e,t){if(dr(t))return;let n=t[Je];n.destroyNode&&ac(e,t,n,3,null,null),xT(t)}function Ju(e,t){if(dr(t))return;let n=q(null);try{t[z]&=-129,t[z]|=256,t[at]&&ci(t[at]),OT(e,t),AT(e,t),t[$].type===1&&t[Je].destroy();let r=t[so];if(r!==null&&gt(t[Oe])){r!==t[Oe]&&Id(r,t);let o=t[Ri];o!==null&&o.detachView(e)}rd(t)}finally{q(n)}}function AT(e,t){let n=e.cleanup,r=t[ro];if(n!==null)for(let s=0;s<n.length-1;s+=2)if(typeof n[s]=="string"){let c=n[s+3];c>=0?r[c]():r[-c].unsubscribe(),s+=2}else{let c=r[n[s+1]];n[s].call(c)}r!==null&&(t[ro]=null);let o=t[on];if(o!==null){t[on]=null;for(let s=0;s<o.length;s++){let c=o[s];c()}}let i=t[Pi];if(i!==null){t[Pi]=null;for(let s of i)s.destroy()}}function OT(e,t){let n;if(e!=null&&(n=e.destroyHooks)!=null)for(let r=0;r<n.length;r+=2){let o=t[n[r]];if(!(o instanceof Hi)){let i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){let c=o[i[s]],l=i[s+1];oe(J.LifecycleHookStart,c,l);try{l.call(c)}finally{oe(J.LifecycleHookEnd,c,l)}}else{oe(J.LifecycleHookStart,o,i);try{i.call(o)}finally{oe(J.LifecycleHookEnd,o,i)}}}}}function FT(e,t,n){return LT(e,t.parent,n)}function LT(e,t,n){let r=t;for(;r!==null&&r.type&168;)t=r,r=t.parent;if(r===null)return n[Tt];if(kn(r)){let{encapsulation:o}=e.data[r.directiveStart+r.componentOffset];if(o===Rt.None||o===Rt.Emulated)return null}return un(r,n)}function HT(e,t,n){return jT(e,t,n)}function UT(e,t,n){return e.type&40?un(e,n):null}var jT=UT,Hm;function Fg(e,t,n,r){let o=FT(e,r,t),i=t[Je],s=r.parent||t[ht],c=HT(s,r,t);if(o!=null)if(Array.isArray(n))for(let l=0;l<n.length;l++)Nm(i,o,n[l],c,!1);else Nm(i,o,n,c,!1);Hm!==void 0&&Hm(i,r,t,n,o)}function Fi(e,t){if(t!==null){let n=t.type;if(n&3)return un(t,e);if(n&4)return cd(-1,e[t.index]);if(n&8){let r=t.child;if(r!==null)return Fi(e,r);{let o=e[t.index];return gt(o)?cd(-1,o):wt(o)}}else{if(n&128)return Fi(e,t.next);if(n&32)return Td(t,e)()||wt(e[t.index]);{let r=Lg(e,t);if(r!==null){if(Array.isArray(r))return r[0];let o=In(e[pt]);return Fi(o,r)}else return Fi(e,t.next)}}}return null}function Lg(e,t){if(t!==null){let r=e[pt][ht],o=t.projection;return r.projection[o]}return null}function cd(e,t){let n=$e+e+1;if(n<t.length){let r=t[n],o=r[$].firstChild;if(o!==null)return Fi(r,o)}return t[_n]}function Rd(e,t,n,r,o,i,s){for(;n!=null;){let c=r[Pn];if(n.type===128){n=n.next;continue}let l=r[n.index],u=n.type;if(s&&t===0&&(l&&Ui(wt(l),r),n.flags|=2),!Dd(n))if(u&8)Rd(e,t,n.child,r,o,i,!1),lo(t,e,c,o,l,n,i,r);else if(u&32){let d=Td(n,r),f;for(;f=d();)lo(t,e,c,o,f,n,i,r);lo(t,e,c,o,l,n,i,r)}else u&16?BT(e,t,r,n,o,i):lo(t,e,c,o,l,n,i,r);n=s?n.projectionNext:n.next}}function ac(e,t,n,r,o,i){Rd(n,r,e.firstChild,t,o,i,!1)}function BT(e,t,n,r,o,i){let s=n[pt],l=s[ht].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++){let d=l[u];lo(t,e,n[Pn],o,d,r,i,n)}else{let u=l,d=s[Oe];fg(r)&&(u.flags|=128),Rd(e,t,u,d,o,i,!0)}}function VT(e,t,n,r,o,i,s){let c=r[_n],l=wt(r);c!==l&&lo(t,e,n,i,c,o,s);for(let u=$e;u<r.length;u++){let d=r[u];ac(d[$],d,e,t,i,c)}}function Hg(e,t,n,r,o){let i=gm(),s=r&2;try{Nn(-1),s&&t.length>mt&&ET(e,t,mt,!1);let c=s?J.TemplateUpdateStart:J.TemplateCreateStart;oe(c,o,n),n(r,o)}finally{Nn(i);let c=s?J.TemplateUpdateEnd:J.TemplateCreateEnd;oe(c,o,n)}}function Ug(e,t,n){qT(e,t,n),(n.flags&64)===64&&GT(e,t,n)}function jg(e,t,n=un){let r=t.localNames;if(r!==null){let o=t.index+1;for(let i=0;i<r.length;i+=2){let s=r[i+1],c=s===-1?n(t,e):e[s];e[o++]=c}}}function $T(e,t,n,r){let i=r.get(vg,yg)||n===Rt.ShadowDom||n===Rt.ExperimentalIsolatedShadowDom,s=e.selectRootElement(t,i);return zT(s),s}function zT(e){WT(e)}var WT=()=>null;function qT(e,t,n){let r=n.directiveStart,o=n.directiveEnd;kn(n)&&bT(t,n,e.data[r+n.componentOffset]),e.firstCreatePass||ig(n,t);let i=n.initialInputs;for(let s=r;s<o;s++){let c=e.data[s],l=td(t,e,s,n);if(Ui(l,t),i!==null&&YT(t,s-r,l,c,n,i),ur(c)){let u=Ct(n.index,t);u[Ze]=td(t,e,s,n)}}}function GT(e,t,n){let r=n.directiveStart,o=n.directiveEnd,i=n.index,s=fm();try{Nn(i);for(let c=r;c<o;c++){let l=e.data[c],u=t[c];Ha(c),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&QT(l,u)}}finally{Nn(-1),Ha(s)}}function QT(e,t){e.hostBindings!==null&&e.hostBindings(1,t)}function KT(e,t){let n=e.directiveRegistry,r=null;if(n)for(let o=0;o<n.length;o++){let i=n[o];hT(t,i.selectors,!1)&&(r??=[],ur(i)?r.unshift(i):r.push(i))}return r}function YT(e,t,n,r,o,i){let s=i[t];if(s!==null)for(let c=0;c<s.length;c+=2){let l=s[c],u=s[c+1];id(r,n,l,u)}}function Bg(e,t,n,r,o){let i=mt+n,s=t[$],c=o(s,t,e,r,n);t[i]=c,Ai(e,!0);let l=e.type===2;return l?(wg(t[Je],c,e),(rm()===0||Aa(e))&&Ui(c,t),om()):Ui(c,t),Vu()&&(!l||!Dd(e))&&Fg(s,t,c,e),e}function Vg(e){let t=e;return Fu()?cm():(t=t.parent,Ai(t,!1)),t}function ZT(e,t){let n=e[Pn];if(!n)return;let r;try{r=n.get(Bt,null)}catch(o){r=null}r?.(t)}function $g(e,t,n,r,o){let i=e.inputs?.[r],s=e.hostDirectiveInputs?.[r],c=!1;if(s)for(let l=0;l<s.length;l+=2){let u=s[l],d=s[l+1],f=t.data[u];id(f,n[u],d,o),c=!0}if(i)for(let l of i){let u=n[l],d=t.data[l];id(d,u,r,o),c=!0}return c}function JT(e,t){let n=Ct(t,e),r=n[$];XT(r,n);let o=n[Tt];o!==null&&n[Ii]===null&&(n[Ii]=Sg(o,n[Pn])),oe(J.ComponentStart);try{zg(r,n,n[Ze])}finally{oe(J.ComponentEnd,n[Ze])}}function XT(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}function zg(e,t,n){Ua(t);try{let r=e.viewQuery;r!==null&&od(1,r,n);let o=e.template;o!==null&&Hg(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),t[Ri]?.finishViewCreation(e),e.staticContentQueries&&Dg(e,t),e.staticViewQueries&&od(2,e.viewQuery,n);let i=e.components;i!==null&&ew(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[z]&=-5,ja()}}function ew(e,t){for(let n=0;n<t.length;n++)JT(e,t[n])}function Um(e,t){return!t||t.firstChild===null||fg(e)}function ji(e,t,n,r,o=!1){for(;n!==null;){if(n.type===128){n=o?n.projectionNext:n.next;continue}let i=t[n.index];i!==null&&r.push(wt(i)),gt(i)&&Wg(i,r);let s=n.type;if(s&8)ji(e,t,n.child,r);else if(s&32){let c=Td(n,t),l;for(;l=c();)r.push(l)}else if(s&16){let c=Lg(t,n);if(Array.isArray(c))r.push(...c);else{let l=In(t[pt]);ji(l[$],l,c,r,!0)}}n=o?n.projectionNext:n.next}return r}function Wg(e,t){for(let n=$e;n<e.length;n++){let r=e[n],o=r[$].firstChild;o!==null&&ji(r[$],r,o,t)}e[_n]!==e[Tt]&&t.push(e[_n])}function qg(e){if(e[xa]!==null){for(let t of e[xa])t.impl.addSequence(t);e[xa].length=0}}var Gg=[];function tw(e){return e[at]??nw(e)}function nw(e){let t=Gg.pop()??Object.create(ow);return t.lView=e,t}function rw(e){e.lView[at]!==e&&(e.lView=null,Gg.push(e))}var ow=C(g({},ii),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{xi(e.lView)},consumerOnSignalRead(){this.lView[at]=this}});function iw(e){let t=e[at]??Object.create(sw);return t.lView=e,t}var sw=C(g({},ii),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{let t=In(e.lView);for(;t&&!Qg(t[$]);)t=In(t);t&&_u(t)},consumerOnSignalRead(){this.lView[at]=this}});function Qg(e){return e.type!==2}function Kg(e){if(e[Pi]===null)return;let t=!0;for(;t;){let n=!1;for(let r of e[Pi])r.dirty&&(n=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));t=n&&!!(e[z]&8192)}}var aw=100;function Yg(e,t=0){let r=e[an].rendererFactory,o=!1;o||r.begin?.();try{cw(e,t)}finally{o||r.end?.()}}function cw(e,t){let n=Lu();try{Hu(!0),ld(e,t);let r=0;for(;Ni(e);){if(r===aw)throw new x(103,!1);r++,ld(e,1)}}finally{Hu(n)}}function lw(e,t,n,r){if(dr(t))return;let o=t[z],i=!1,s=!1;Ua(t);let c=!0,l=null,u=null;i||(Qg(e)?(u=tw(t),l=ai(u)):Qs()===null?(c=!1,u=iw(t),l=ai(u)):t[at]&&(ci(t[at]),t[at]=null));try{Mu(t),lm(e.bindingStartIndex),n!==null&&Hg(e,t,n,2,r);let d=(o&3)===3;if(!i)if(d){let p=e.preOrderCheckHooks;p!==null&&Va(t,p,null)}else{let p=e.preOrderHooks;p!==null&&$a(t,p,0,null),Yu(t,0)}if(s||uw(t),Kg(t),Zg(t,0),e.contentQueries!==null&&Dg(e,t),!i)if(d){let p=e.contentCheckHooks;p!==null&&Va(t,p)}else{let p=e.contentHooks;p!==null&&$a(t,p,1),Yu(t,1)}fw(e,t);let f=e.components;f!==null&&Xg(t,f,0);let h=e.viewQuery;if(h!==null&&od(2,h,r),!i)if(d){let p=e.viewCheckHooks;p!==null&&Va(t,p)}else{let p=e.viewHooks;p!==null&&$a(t,p,2),Yu(t,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),t[Na]){for(let p of t[Na])p();t[Na]=null}i||(qg(t),t[z]&=-73)}catch(d){throw i||xi(t),d}finally{u!==null&&(Ks(u,l),c&&rw(u)),ja()}}function Zg(e,t){for(let n=pg(e);n!==null;n=mg(n))for(let r=$e;r<n.length;r++){let o=n[r];Jg(o,t)}}function uw(e){for(let t=pg(e);t!==null;t=mg(t)){if(!(t[z]&2))continue;let n=t[_i];for(let r=0;r<n.length;r++){let o=n[r];_u(o)}}}function dw(e,t,n){oe(J.ComponentStart);let r=Ct(t,e);try{Jg(r,n)}finally{oe(J.ComponentEnd,r[Ze])}}function Jg(e,t){Oa(e)&&ld(e,t)}function ld(e,t){let r=e[$],o=e[z],i=e[at],s=!!(t===0&&o&16);if(s||=!!(o&64&&t===0),s||=!!(o&1024),s||=!!(i?.dirty&&Ys(i)),s||=!1,i&&(i.dirty=!1),e[z]&=-9217,s)lw(r,e,r.template,e[Ze]);else if(o&8192){let c=q(null);try{Kg(e),Zg(e,1);let l=r.components;l!==null&&Xg(e,l,1),qg(e)}finally{q(c)}}}function Xg(e,t,n){for(let r=0;r<t.length;r++)dw(e,t[r],n)}function fw(e,t){let n=e.hostBindingOpCodes;if(n!==null)try{for(let r=0;r<n.length;r++){let o=n[r];if(o<0)Nn(~o);else{let i=o,s=n[++r],c=n[++r];dm(s,i);let l=t[i];oe(J.HostBindingsUpdateStart,l);try{c(2,l)}finally{oe(J.HostBindingsUpdateEnd,l)}}}}finally{Nn(-1)}}function Pd(e,t){let n=Lu()?64:1088;for(e[an].changeDetectionScheduler?.notify(t);e;){e[z]|=n;let r=In(e);if(ao(e)&&!r)return e;e=r}return null}function hw(e,t,n,r){return[e,!0,0,t,null,r,null,n,null,null]}function pw(e,t,n,r=!0){let o=t[$];if(mw(o,t,e,n),r){let s=cd(n,e),c=t[Je],l=c.parentNode(e[_n]);l!==null&&NT(o,e[ht],c,t,l,s)}let i=t[Ii];i!==null&&i.firstChild!==null&&(i.firstChild=null)}function ud(e,t){if(e.length<=$e)return;let n=$e+t,r=e[n];if(r){let o=r[so];o!==null&&o!==e&&Id(o,r),t>0&&(e[n-1][ft]=r[ft]);let i=Ei(e,$e+t);kT(r[$],r);let s=i[Ri];s!==null&&s.detachView(i[$]),r[Oe]=null,r[ft]=null,r[z]&=-129}return r}function mw(e,t,n,r){let o=$e+r,i=n.length;r>0&&(n[o-1][ft]=t),r<i-$e?(t[ft]=n[o],bu(n,$e+r,t)):(n.push(t),t[ft]=null),t[Oe]=n;let s=t[so];s!==null&&n!==s&&ey(s,t);let c=t[Ri];c!==null&&c.insertView(e),Fa(t),t[z]|=128}function ey(e,t){let n=e[_i],r=t[Oe];if(ln(r))e[z]|=2;else{let o=r[Oe][pt];t[pt]!==o&&(e[z]|=2)}n===null?e[_i]=[t]:n.push(t)}var pr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let t=this._lView,n=t[$];return ji(n,t,n.firstChild,[])}constructor(t,n){this._lView=t,this._cdRefInjectingView=n}get context(){return this._lView[Ze]}set context(t){this._lView[Ze]=t}get destroyed(){return dr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[Oe];if(gt(t)){let n=t[Mi],r=n?n.indexOf(this):-1;r>-1&&(ud(t,r),Ei(n,r))}this._attachedToViewContainer=!1}Og(this._lView[$],this._lView)}onDestroy(t){ku(this._lView,t)}markForCheck(){Pd(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[z]&=-129}reattach(){Fa(this._lView),this._lView[z]|=128}detectChanges(){this._lView[z]|=1024,Yg(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new x(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=ao(this._lView),n=this._lView[so];n!==null&&!t&&Id(n,this._lView),Ag(this._lView[$],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new x(902,!1);this._appRef=t;let n=ao(this._lView),r=this._lView[so];r!==null&&!n&&ey(r,this._lView),Fa(this._lView)}};function Md(e,t,n,r,o){let i=e.data[t];if(i===null)i=gw(e,t,n,r,o),um()&&(i.flags|=32);else if(i.type&64){i.type=n,i.value=r,i.attrs=o;let s=am();i.injectorIndex=s===null?-1:s.injectorIndex}return Ai(i,!0),i}function gw(e,t,n,r,o){let i=Ou(),s=Fu(),c=s?i:i&&i.parent,l=e.data[t]=vw(e,c,n,t,r,o);return yw(e,l,i,s),l}function yw(e,t,n,r){e.firstChild===null&&(e.firstChild=t),n!==null&&(r?n.child==null&&t.parent!==null&&(n.child=t):n.next===null&&(n.next=t,t.prev=n))}function vw(e,t,n,r,o,i){let s=t?t.injectorIndex:-1,c=0;return sm()&&(c|=128),{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:c,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var Sw=()=>null;function jm(e,t){return Sw(e,t)}var ty=class{},cc=class{},dd=class{resolveComponentFactory(t){throw new x(917,!1)}},Wi=class{static NULL=new dd},mr=class{};var ny=(()=>{class e{static \u0275prov=M({token:e,providedIn:"root",factory:()=>null})}return e})();var za={},fd=class{injector;parentInjector;constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){let o=this.injector.get(t,za,r);return o!==za||n===za?o:this.parentInjector.get(t,n,r)}};function Ka(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(t!==null)for(let s=0;s<t.length;s++){let c=t[s];if(typeof c=="number")i=c;else if(i==1)o=lu(o,c);else if(i==2){let l=c,u=t[++s];r=lu(r,l+": "+u+";")}}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}function W(e,t=0){let n=Xe();if(n===null)return O(e,t);let r=jt();return lg(r,n,Ye(e),t)}function Dw(e,t,n,r,o){let i=r===null?null:{"":-1},s=o(e,n);if(s!==null){let c=s,l=null,u=null;for(let d of s)if(d.resolveHostDirectives!==null){[c,l,u]=d.resolveHostDirectives(s);break}Tw(e,t,n,c,i,l,u)}i!==null&&r!==null&&bw(n,r,i)}function bw(e,t,n){let r=e.localNames=[];for(let o=0;o<t.length;o+=2){let i=n[t[o+1]];if(i==null)throw new x(-301,!1);r.push(t[o],i)}}function Ew(e,t,n){t.componentOffset=n,(e.components??=[]).push(t.index)}function Tw(e,t,n,r,o,i,s){let c=r.length,l=null;for(let h=0;h<c;h++){let p=r[h];l===null&&ur(p)&&(l=p,Ew(e,n,h)),$E(ig(n,t),e,p.type)}Mw(n,e.data.length,c),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let h=0;h<c;h++){let p=r[h];p.providersResolver&&p.providersResolver(p)}let u=!1,d=!1,f=_g(e,t,c,null);c>0&&(n.directiveToIndex=new Map);for(let h=0;h<c;h++){let p=r[h];if(n.mergedAttrs=pd(n.mergedAttrs,p.hostAttrs),Cw(e,n,t,f,p),Pw(f,p,o),s!==null&&s.has(p)){let[S,y]=s.get(p);n.directiveToIndex.set(p.type,[f,S+n.directiveStart,y+n.directiveStart])}else(i===null||!i.has(p))&&n.directiveToIndex.set(p.type,f);p.contentQueries!==null&&(n.flags|=4),(p.hostBindings!==null||p.hostAttrs!==null||p.hostVars!==0)&&(n.flags|=64);let v=p.type.prototype;!u&&(v.ngOnChanges||v.ngOnInit||v.ngDoCheck)&&((e.preOrderHooks??=[]).push(n.index),u=!0),!d&&(v.ngOnChanges||v.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(n.index),d=!0),f++}ww(e,n,i)}function ww(e,t,n){for(let r=t.directiveStart;r<t.directiveEnd;r++){let o=e.data[r];if(n===null||!n.has(o))Bm(0,t,o,r),Bm(1,t,o,r),$m(t,r,!1);else{let i=n.get(o);Vm(0,t,i,r),Vm(1,t,i,r),$m(t,r,!0)}}}function Bm(e,t,n,r){let o=e===0?n.inputs:n.outputs;for(let i in o)if(o.hasOwnProperty(i)){let s;e===0?s=t.inputs??={}:s=t.outputs??={},s[i]??=[],s[i].push(r),ry(t,i)}}function Vm(e,t,n,r){let o=e===0?n.inputs:n.outputs;for(let i in o)if(o.hasOwnProperty(i)){let s=o[i],c;e===0?c=t.hostDirectiveInputs??={}:c=t.hostDirectiveOutputs??={},c[s]??=[],c[s].push(r,i),ry(t,s)}}function ry(e,t){t==="class"?e.flags|=8:t==="style"&&(e.flags|=16)}function $m(e,t,n){let{attrs:r,inputs:o,hostDirectiveInputs:i}=e;if(r===null||!n&&o===null||n&&i===null||bd(e)){e.initialInputs??=[],e.initialInputs.push(null);return}let s=null,c=0;for(;c<r.length;){let l=r[c];if(l===0){c+=4;continue}else if(l===5){c+=2;continue}else if(typeof l=="number")break;if(!n&&o.hasOwnProperty(l)){let u=o[l];for(let d of u)if(d===t){s??=[],s.push(l,r[c+1]);break}}else if(n&&i.hasOwnProperty(l)){let u=i[l];for(let d=0;d<u.length;d+=2)if(u[d]===t){s??=[],s.push(u[d+1],r[c+1]);break}}c+=2}e.initialInputs??=[],e.initialInputs.push(s)}function Cw(e,t,n,r,o){e.data[r]=o;let i=o.factory||(o.factory=rr(o.type,!0)),s=new Hi(i,ur(o),W,null);e.blueprint[r]=s,n[r]=s,Iw(e,t,r,_g(e,n,o.hostVars,Ed),o)}function Iw(e,t,n,r,o){let i=o.hostBindings;if(i){let s=e.hostBindingOpCodes;s===null&&(s=e.hostBindingOpCodes=[]);let c=~t.index;Rw(s)!=c&&s.push(c),s.push(n,r,i)}}function Rw(e){let t=e.length;for(;t>0;){let n=e[--t];if(typeof n=="number"&&n<0)return n}return 0}function Pw(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;ur(t)&&(n[""]=e)}}function Mw(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function oy(e,t,n,r,o,i,s,c){let l=t[$],u=l.consts,d=ki(u,s),f=Md(l,e,n,r,d);return i&&Dw(l,t,f,ki(u,c),o),f.mergedAttrs=pd(f.mergedAttrs,f.attrs),f.attrs!==null&&Ka(f,f.attrs,!1),f.mergedAttrs!==null&&Ka(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function iy(e,t){NE(e,t),Ru(t)&&e.queries.elementEnd(t)}function _w(e,t,n,r,o,i){let s=t.consts,c=ki(s,o),l=Md(t,e,n,r,c);if(l.mergedAttrs=pd(l.mergedAttrs,l.attrs),i!=null){let u=ki(s,i);l.localNames=[];for(let d=0;d<u.length;d+=2)l.localNames.push(u[d],-1)}return l.attrs!==null&&Ka(l,l.attrs,!1),l.mergedAttrs!==null&&Ka(l,l.mergedAttrs,!0),t.queries!==null&&t.queries.elementStart(t,l),l}function kw(e,t,n){return function r(o){let i=kn(e)?Ct(e.index,t):t;Pd(i,5);let s=t[Ze],c=zm(t,s,n,o),l=r.__ngNextListenerFn__;for(;l;)c=zm(t,s,l,o)&&c,l=l.__ngNextListenerFn__;return c}}function zm(e,t,n,r){let o=q(null);try{return oe(J.OutputStart,t,n),n(r)!==!1}catch(i){return ZT(e,i),!1}finally{oe(J.OutputEnd,t,n),q(o)}}function Nw(e,t,n,r,o,i,s,c){let l=Aa(e),u=!1,d=null;if(!r&&l&&(d=Aw(t,n,i,e.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,u=!0}else{let f=un(e,n),h=r?r(f):f;nT(n,h,i,c);let p=o.listen(h,i,c);if(!xw(i)){let v=r?S=>r(wt(S[e.index])):e.index;Ow(v,t,n,i,c,p,!1)}}return u}function xw(e){return e.startsWith("animation")||e.startsWith("transition")}function Aw(e,t,n,r){let o=e.cleanup;if(o!=null)for(let i=0;i<o.length-1;i+=2){let s=o[i];if(s===n&&o[i+1]===r){let c=t[ro],l=o[i+2];return c&&c.length>l?c[l]:null}typeof s=="string"&&(i+=2)}return null}function Ow(e,t,n,r,o,i,s){let c=t.firstCreatePass?nm(t):null,l=tm(n),u=l.length;l.push(o,i),c&&c.push(r,e,u,(u+1)*(s?-1:1))}var hd=Symbol("BINDING");var Ya=class extends Wi{ngModule;constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){let n=Rn(t);return new fo(n,this.ngModule)}};function Fw(e){return Object.keys(e).map(t=>{let[n,r,o]=e[t],i={propName:n,templateName:t,isSignal:(r&ic.SignalBased)!==0};return o&&(i.transform=o),i})}function Lw(e){return Object.keys(e).map(t=>({propName:e[t],templateName:t}))}function Hw(e,t,n){let r=t instanceof pe?t:t?.injector;return r&&e.getStandaloneInjector!==null&&(r=e.getStandaloneInjector(r)||r),r?new fd(n,r):n}function Uw(e){let t=e.get(mr,null);if(t===null)throw new x(407,!1);let n=e.get(ny,null),r=e.get(ir,null);return{rendererFactory:t,sanitizer:n,changeDetectionScheduler:r,ngReflect:!1}}function jw(e,t){let n=sy(e);return Eg(t,n,n==="svg"?Zp:n==="math"?Jp:null)}function sy(e){return(e.selectors[0][0]||"div").toLowerCase()}var fo=class extends cc{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=Fw(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=Lw(this.componentDef.outputs),this.cachedOutputs}constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=yT(t.selectors),this.ngContentSelectors=t.ngContentSelectors??[],this.isBoundToModule=!!n}create(t,n,r,o,i,s){oe(J.DynamicComponentStart);let c=q(null);try{let l=this.componentDef,u=Bw(r,l,s,i),d=Hw(l,o||this.ngModule,t),f=Uw(d),h=f.rendererFactory.createRenderer(null,l),p=r?$T(h,r,l.encapsulation,d):jw(l,h),v=s?.some(Wm)||i?.some(D=>typeof D!="function"&&D.bindings.some(Wm)),S=Pg(null,u,null,512|Mg(l),null,null,f,h,d,null,Sg(p,d,!0));S[mt]=p,Ua(S);let y=null;try{let D=oy(mt,S,2,"#host",()=>u.directiveRegistry,!0,0);wg(h,p,D),Ui(p,S),Ug(u,S,D),bg(u,D,S),iy(u,D),n!==void 0&&$w(D,this.ngContentSelectors,n),y=Ct(D.index,S),S[Ze]=y[Ze],zg(u,S,null)}catch(D){throw y!==null&&rd(y),rd(S),D}finally{oe(J.DynamicComponentEnd),ja()}return new Za(this.componentType,S,!!v)}finally{q(c)}}};function Bw(e,t,n,r){let o=e?["ng-version","21.2.1"]:vT(t.selectors[0]),i=null,s=null,c=0;if(n)for(let d of n)c+=d[hd].requiredVars,d.create&&(d.targetIdx=0,(i??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(r)for(let d=0;d<r.length;d++){let f=r[d];if(typeof f!="function")for(let h of f.bindings){c+=h[hd].requiredVars;let p=d+1;h.create&&(h.targetIdx=p,(i??=[]).push(h)),h.update&&(h.targetIdx=p,(s??=[]).push(h))}}let l=[t];if(r)for(let d of r){let f=typeof d=="function"?d:d.type,h=vu(f);l.push(h)}return Rg(0,null,Vw(i,s),1,c,l,null,null,null,[o],null)}function Vw(e,t){return!e&&!t?null:n=>{if(n&1&&e)for(let r of e)r.create();if(n&2&&t)for(let r of t)r.update()}}function Wm(e){let t=e[hd].kind;return t==="input"||t==="twoWay"}var Za=class extends ty{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(t,n,r){super(),this._rootLView=n,this._hasInputBindings=r,this._tNode=Pu(n[$],mt),this.location=gd(this._tNode,n),this.instance=Ct(this._tNode.index,n)[Ze],this.hostView=this.changeDetectorRef=new pr(n,void 0),this.componentType=t}setInput(t,n){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),n))return;let o=this._rootLView,i=$g(r,o[$],o,t,n);this.previousInputValues.set(t,n);let s=Ct(r.index,o);Pd(s,1)}get injector(){return new fr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function $w(e,t,n){let r=e.projection=[];for(let o=0;o<t.length;o++){let i=n[o];r.push(i!=null&&i.length?Array.from(i):null)}}var qi=(()=>{class e{static __NG_ELEMENT_ID__=zw}return e})();function zw(){let e=jt();return qw(e,Xe())}var Ww=qi,ay=class extends Ww{_lContainer;_hostTNode;_hostLView;constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return gd(this._hostTNode,this._hostLView)}get injector(){return new fr(this._hostTNode,this._hostLView)}get parentInjector(){let t=md(this._hostTNode,this._hostLView);if(ng(t)){let n=Ga(t,this._hostLView),r=qa(t),o=n[$].data[r+8];return new fr(o,n)}else return new fr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let n=qm(this._lContainer);return n!==null&&n[t]||null}get length(){return this._lContainer.length-$e}createEmbeddedView(t,n,r){let o,i;typeof r=="number"?o=r:r!=null&&(o=r.index,i=r.injector);let s=jm(this._lContainer,t.ssrId),c=t.createEmbeddedViewImpl(n||{},i,s);return this.insertImpl(c,o,Um(this._hostTNode,s)),c}createComponent(t,n,r,o,i,s,c){let l=t&&!RE(t),u;if(l)u=n;else{let y=n||{};u=y.index,r=y.injector,o=y.projectableNodes,i=y.environmentInjector||y.ngModuleRef,s=y.directives,c=y.bindings}let d=l?t:new fo(Rn(t)),f=r||this.parentInjector;if(!i&&d.ngModule==null){let D=(l?f:this.parentInjector).get(pe,null);D&&(i=D)}let h=Rn(d.componentType??{}),p=jm(this._lContainer,h?.id??null),v=p?.firstChild??null,S=d.create(f,o,v,i,s,c);return this.insertImpl(S.hostView,u,Um(this._hostTNode,p)),S}insert(t,n){return this.insertImpl(t,n,!0)}insertImpl(t,n,r){let o=t._lView;if(Xp(o)){let c=this.indexOf(t);if(c!==-1)this.detach(c);else{let l=o[Oe],u=new ay(l,l[ht],l[Oe]);u.detach(u.indexOf(t))}}let i=this._adjustIndex(n),s=this._lContainer;return pw(s,o,i,r),t.attachToViewContainerRef(),bu(Xu(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){let n=qm(this._lContainer);return n!==null?n.indexOf(t):-1}remove(t){let n=this._adjustIndex(t,-1),r=ud(this._lContainer,n);r&&(Ei(Xu(this._lContainer),n),Og(r[$],r))}detach(t){let n=this._adjustIndex(t,-1),r=ud(this._lContainer,n);return r&&Ei(Xu(this._lContainer),n)!=null?new pr(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function qm(e){return e[Mi]}function Xu(e){return e[Mi]||(e[Mi]=[])}function qw(e,t){let n,r=t[e.index];return gt(r)?n=r:(n=hw(r,t,null,e),t[e.index]=n,kg(t,n)),Qw(n,t,e,r),new ay(n,e,t)}function Gw(e,t){let n=e[Je],r=n.createComment(""),o=un(t,e),i=n.parentNode(o);return Qa(n,i,r,n.nextSibling(o),!1),r}var Qw=Kw;function Kw(e,t,n,r){if(e[_n])return;let o;n.type&8?o=wt(r):o=Gw(t,n),e[_n]=o}var ho=class{},lc=class{};var Ja=class extends ho{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Ya(this);constructor(t,n,r,o=!0){super(),this.ngModuleType=t,this._parent=n;let i=yu(t);this._bootstrapComponents=Cg(i.bootstrap),this._r3Injector=zu(t,n,[{provide:ho,useValue:this},{provide:Wi,useValue:this.componentFactoryResolver},...r],Ia(t),new Set(["environment"])),o&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}},Xa=class extends lc{moduleType;constructor(t){super(),this.moduleType=t}create(t){return new Ja(this.moduleType,t,[])}};var Bi=class extends ho{injector;componentFactoryResolver=new Ya(this);instance=null;constructor(t){super();let n=new or([...t.providers,{provide:ho,useValue:this},{provide:Wi,useValue:this.componentFactoryResolver}],t.parent||Ci(),t.debugName,new Set(["environment"]));this.injector=n,t.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function Gi(e,t,n=null){return new Bi({providers:e,parent:t,debugName:n,runEnvironmentInitializers:!0}).injector}var Yw=(()=>{class e{_injector;cachedInjectors=new Map;constructor(n){this._injector=n}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n)){let r=Tu(!1,n.type),o=r.length>0?Gi([r],this._injector,""):null;this.cachedInjectors.set(n,o)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=M({token:e,providedIn:"environment",factory:()=>new e(O(pe))})}return e})();function X(e){return Vi(()=>{let t=cy(e),n=C(g({},t),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection===vd.OnPush,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&e.dependencies||null,getStandaloneInjector:t.standalone?o=>o.get(Yw).getOrCreateStandaloneInjector(n):null,getExternalStyles:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||Rt.Emulated,styles:e.styles||Et,_:null,schemas:e.schemas||null,tView:null,id:""});t.standalone&&Cd("NgStandalone"),ly(n);let r=e.dependencies;return n.directiveDefs=Gm(r,Zw),n.pipeDefs=Gm(r,Bp),n.id=eC(n),n})}function Zw(e){return Rn(e)||vu(e)}function po(e){return Vi(()=>({type:e.type,bootstrap:e.bootstrap||Et,declarations:e.declarations||Et,imports:e.imports||Et,exports:e.exports||Et,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function Jw(e,t){if(e==null)return cr;let n={};for(let r in e)if(e.hasOwnProperty(r)){let o=e[r],i,s,c,l;Array.isArray(o)?(c=o[0],i=o[1],s=o[2]??i,l=o[3]||null):(i=o,s=o,c=ic.None,l=null),n[i]=[r,c,l],t[i]=s}return n}function Xw(e){if(e==null)return cr;let t={};for(let n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}function uc(e){return Vi(()=>{let t=cy(e);return ly(t),t})}function cy(e){let t={};return{type:e.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:t,inputConfig:e.inputs||cr,exportAs:e.exportAs||null,standalone:e.standalone??!0,signals:e.signals===!0,selectors:e.selectors||Et,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:Jw(e.inputs,t),outputs:Xw(e.outputs),debugInfo:null}}function ly(e){e.features?.forEach(t=>t(e))}function Gm(e,t){return e?()=>{let n=typeof e=="function"?e():e,r=[];for(let o of n){let i=t(o);i!==null&&r.push(i)}return r}:null}function eC(e){let t=0,n=typeof e.consts=="function"?"":e.consts,r=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,n,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery];for(let i of r.join("|"))t=Math.imul(31,t)+i.charCodeAt(0)<<0;return t+=2147483648,"c"+t}var _d=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"platform"})}return e})();var kd=new A("");function Qi(e){return!!e&&typeof e.then=="function"}function uy(e){return!!e&&typeof e.subscribe=="function"}var dy=new A("");var Nd=(()=>{class e{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((n,r)=>{this.resolve=n,this.reject=r});appInits=I(dy,{optional:!0})??[];injector=I(Ut);constructor(){}runInitializers(){if(this.initialized)return;let n=[];for(let o of this.appInits){let i=ke(this.injector,o);if(Qi(i))n.push(i);else if(uy(i)){let s=new Promise((c,l)=>{i.subscribe({complete:c,error:l})});n.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),n.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),dc=new A("");function fy(){_l(()=>{let e="";throw new x(600,e)})}function hy(e){return e.isBoundToModule}var tC=10;var mo=(()=>{class e{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=I(Bt);afterRenderManager=I(Ng);zonelessEnabled=I(Oi);rootEffectScheduler=I(Ku);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new fe;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=I(dn);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(L(n=>!n))}constructor(){I(yr,{optional:!0})}whenStable(){let n;return new Promise(r=>{n=this.isStable.subscribe({next:o=>{o&&r()}})}).finally(()=>{n.unsubscribe()})}_injector=I(pe);_rendererFactory=null;get injector(){return this._injector}bootstrap(n,r){return this.bootstrapImpl(n,r)}bootstrapImpl(n,r,o=Ut.NULL){return this._injector.get(Be).run(()=>{oe(J.BootstrapComponentStart);let s=n instanceof cc;if(!this._injector.get(Nd).done){let v="";throw new x(405,v)}let l;s?l=n:l=this._injector.get(Wi).resolveComponentFactory(n),this.componentTypes.push(l.componentType);let u=hy(l)?void 0:this._injector.get(ho),d=r||l.selector,f=l.create(o,[],d,u),h=f.location.nativeElement,p=f.injector.get(kd,null);return p?.registerApplication(h),f.onDestroy(()=>{this.detachView(f.hostView),Li(this.components,f),p?.unregisterApplication(h)}),this._loadComponent(f),oe(J.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){oe(J.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(wd.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw oe(J.ChangeDetectionEnd),new x(101,!1);let n=q(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,q(n),this.afterTick.next(),oe(J.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(mr,null,{optional:!0}));let n=0;for(;this.dirtyFlags!==0&&n++<tC;){oe(J.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{oe(J.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let n=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:o}of this.allViews){if(!r&&!Ni(o))continue;let i=r&&!this.zonelessEnabled?0:1;Yg(o,i),n=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}n||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:n})=>Ni(n))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(n){let r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){let r=n;Li(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView);try{this.tick()}catch(o){this.internalErrorHandler(o)}this.components.push(n),this._injector.get(dc,[]).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>Li(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new x(406,!1);let n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Li(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function Qm(e,t,n,r,o){$g(t,e,n,o?"class":"style",r)}function ct(e,t,n,r){let o=Xe(),i=o[$],s=e+mt,c=i.firstCreatePass?oy(s,o,2,t,KT,im(),n,r):i.data[s];if(Bg(c,o,e,t,py),Aa(c)){let l=o[$];Ug(l,o,c),bg(l,c,o)}return r!=null&&jg(o,c),ct}function et(){let e=La(),t=jt(),n=Vg(t);return e.firstCreatePass&&iy(e,n),xu(n)&&Au(),Nu(),n.classesWithoutHost!=null&&AE(n)&&Qm(e,n,Xe(),n.classesWithoutHost,!0),n.stylesWithoutHost!=null&&OE(n)&&Qm(e,n,Xe(),n.stylesWithoutHost,!1),et}function $t(e,t,n,r){return ct(e,t,n,r),et(),$t}function Ce(e,t,n,r){let o=Xe(),i=o[$],s=e+mt,c=i.firstCreatePass?_w(s,i,2,t,n,r):i.data[s];return Bg(c,o,e,t,py),r!=null&&jg(o,c),Ce}function ze(){let e=jt(),t=Vg(e);return xu(t)&&Au(),Nu(),ze}function Ne(e,t,n,r){return Ce(e,t,n,r),ze(),Ne}var py=(e,t,n,r,o)=>($u(!0),Eg(t[Je],r,ym()));var Ki="en-US";var nC=Ki;function my(e){typeof e=="string"&&(nC=e.toLowerCase().replace(/_/g,"-"))}function yt(e,t,n){let r=Xe(),o=La(),i=jt();return(i.type&3||n)&&Nw(i,o,r,n,r[Je],e,t,kw(i,r,t)),yt}function he(e,t=""){let n=Xe(),r=La(),o=e+mt,i=r.firstCreatePass?Md(r,o,1,t,null):r.data[o],s=rC(r,n,i,t);n[o]=s,Vu()&&Fg(r,n,s,i),Ai(i,!1)}var rC=(e,t,n,r)=>($u(!0),oT(t[Je],r));var ec=class{ngModuleFactory;componentFactories;constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}},xd=(()=>{class e{compileModuleSync(n){return new Xa(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){let r=this.compileModuleSync(n),o=yu(n),i=Cg(o.declarations).reduce((s,c)=>{let l=Rn(c);return l&&s.push(new fo(l)),s},[]);return new ec(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var gy=(()=>{class e{applicationErrorHandler=I(Bt);appRef=I(mo);taskService=I(dn);ngZone=I(Be);zonelessEnabled=I(Oi);tracing=I(yr,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Pe;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Si):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(I(Qu,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let n=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(n);return}this.switchToMicrotaskScheduler(),this.taskService.remove(n)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let n=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(n)})})}notify(n){if(!this.zonelessEnabled&&n===5)return;switch(n){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?bm:Wu;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Si+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let n=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(n),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let n=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(n)}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function yy(){return[{provide:ir,useExisting:gy},{provide:Be,useClass:Di},{provide:Oi,useValue:!0}]}function oC(){return typeof $localize<"u"&&$localize.locale||Ki}var Ad=new A("",{factory:()=>I(Ad,{optional:!0,skipSelf:!0})||oC()});function An(e){return Fp(e)}var Dy=Symbol("InputSignalNode#UNSET"),SC=C(g({},Zs),{transformFn:void 0,applyValueToInputSignal(e,t){$r(e,t)}});function by(e,t){let n=Object.create(SC);n.value=e,n.transformFn=t?.transform;function r(){if(si(n),n.value===Dy){let o=null;throw new x(-950,o)}return n.value}return r[rt]=n,r}function vy(e,t){return by(e,t)}function DC(e){return by(Dy,e)}var Ey=(vy.required=DC,vy);var Od=new A(""),bC=new A("");function Yi(e){return!e.moduleRef}function EC(e){let t=Yi(e)?e.r3Injector:e.moduleRef.injector,n=t.get(Be);return n.run(()=>{Yi(e)?e.r3Injector.resolveInjectorInitializers():e.moduleRef.resolveInjectorInitializers();let r=t.get(Bt),o;if(n.runOutsideAngular(()=>{o=n.onError.subscribe({next:r})}),Yi(e)){let i=()=>t.destroy(),s=e.platformInjector.get(Od);s.add(i),t.onDestroy(()=>{o.unsubscribe(),s.delete(i)})}else{let i=()=>e.moduleRef.destroy(),s=e.platformInjector.get(Od);s.add(i),e.moduleRef.onDestroy(()=>{Li(e.allPlatformModules,e.moduleRef),o.unsubscribe(),s.delete(i)})}return wC(r,n,()=>{let i=t.get(dn),s=i.add(),c=t.get(Nd);return c.runInitializers(),c.donePromise.then(()=>{let l=t.get(Ad,Ki);if(my(l||Ki),!t.get(bC,!0))return Yi(e)?t.get(mo):(e.allPlatformModules.push(e.moduleRef),e.moduleRef);if(Yi(e)){let d=t.get(mo);return e.rootComponent!==void 0&&d.bootstrap(e.rootComponent),d}else return TC?.(e.moduleRef,e.allPlatformModules),e.moduleRef}).finally(()=>{i.remove(s)})})})}var TC;function wC(e,t,n){try{let r=n();return Qi(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e(r)),r}}var fc=null;function CC(e=[],t){return Ut.create({name:t,providers:[{provide:wi,useValue:"platform"},{provide:Od,useValue:new Set([()=>fc=null])},...e]})}function IC(e=[]){if(fc)return fc;let t=CC(e);return fc=t,fy(),RC(t),t}function RC(e){let t=e.get(rc,null);ke(e,()=>{t?.forEach(n=>n())})}var PC=1e4;var JV=PC-1e3;var Fd=(()=>{class e{static __NG_ELEMENT_ID__=MC}return e})();function MC(e){return _C(jt(),Xe(),(e&16)===16)}function _C(e,t,n){if(kn(e)&&!n){let r=Ct(e.index,t);return new pr(r,r)}else if(e.type&175){let r=t[pt];return new pr(r,t)}return null}function Ty(e){let{rootComponent:t,appProviders:n,platformProviders:r,platformRef:o}=e;oe(J.BootstrapApplicationStart);try{let i=o?.injector??IC(r),s=[yy(),Tm,...n||[]],c=new Bi({providers:s,parent:i,debugName:"",runEnvironmentInitializers:!1});return EC({r3Injector:c.injector,platformInjector:i,rootComponent:t})}catch(i){return Promise.reject(i)}finally{oe(J.BootstrapApplicationEnd)}}var wy=null;function fn(){return wy}function Ld(e){wy??=e}var Zi=class{},go=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:()=>I(Cy),providedIn:"platform"})}return e})();var Cy=(()=>{class e extends go{_location;_history;_doc=I(we);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return fn().getBaseHref(this._doc)}onPopState(n){let r=fn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){let r=fn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,r,o){this._history.pushState(n,r,o)}replaceState(n,r,o){this._history.replaceState(n,r,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function Py(e,t){return e?t?e.endsWith("/")?t.startsWith("/")?e+t.slice(1):e+t:t.startsWith("/")?e+t:`${e}/${t}`:e:t}function Iy(e){let t=e.search(/#|\?|$/);return e[t-1]==="/"?e.slice(0,t-1)+e.slice(t):e}function On(e){return e&&e[0]!=="?"?`?${e}`:e}var hc=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:()=>I(NC),providedIn:"root"})}return e})(),kC=new A(""),NC=(()=>{class e extends hc{_platformLocation;_baseHref;_removeListenerFns=[];constructor(n,r){super(),this._platformLocation=n,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??I(we).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Py(this._baseHref,n)}path(n=!1){let r=this._platformLocation.pathname+On(this._platformLocation.search),o=this._platformLocation.hash;return o&&n?`${r}${o}`:r}pushState(n,r,o,i){let s=this.prepareExternalUrl(o+On(i));this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){let s=this.prepareExternalUrl(o+On(i));this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}static \u0275fac=function(r){return new(r||e)(O(go),O(kC,8))};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var yo=(()=>{class e{_subject=new fe;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(n){this._locationStrategy=n;let r=this._locationStrategy.getBaseHref();this._basePath=OC(Iy(Ry(r))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+On(r))}normalize(n){return e.stripTrailingSlash(AC(this._basePath,Ry(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",o=null){this._locationStrategy.pushState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+On(r)),o)}replaceState(n,r="",o=null){this._locationStrategy.replaceState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+On(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(o=>o(n,r))}subscribe(n,r,o){return this._subject.subscribe({next:n,error:r??void 0,complete:o??void 0})}static normalizeQueryParams=On;static joinWithSlash=Py;static stripTrailingSlash=Iy;static \u0275fac=function(r){return new(r||e)(O(hc))};static \u0275prov=M({token:e,factory:()=>xC(),providedIn:"root"})}return e})();function xC(){return new yo(O(hc))}function AC(e,t){if(!e||!t.startsWith(e))return t;let n=t.substring(e.length);return n===""||["/",";","?","#"].includes(n[0])?n:t}function Ry(e){return e.replace(/\/index.html$/,"")}function OC(e){if(new RegExp("^(https?:)?//").test(e)){let[,n]=e.split(/\/\/[^\/]+/);return n}return e}var pc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=po({type:e});static \u0275inj=sr({})}return e})();function Ji(e,t){t=encodeURIComponent(t);for(let n of e.split(";")){let r=n.indexOf("="),[o,i]=r==-1?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===t)return decodeURIComponent(i)}return null}var vr=class{};var My="browser";var Xi=class{_doc;constructor(t){this._doc=t}manager},mc=(()=>{class e extends Xi{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o,i){return n.addEventListener(r,o,i),()=>this.removeEventListener(n,r,o,i)}removeEventListener(n,r,o,i){return n.removeEventListener(r,o,i)}static \u0275fac=function(r){return new(r||e)(O(we))};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})(),vc=new A(""),Bd=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(n,r){this._zone=r,n.forEach(s=>{s.manager=this});let o=n.filter(s=>!(s instanceof mc));this._plugins=o.slice().reverse();let i=n.find(s=>s instanceof mc);i&&this._plugins.push(i)}addEventListener(n,r,o,i){return this._findPluginFor(r).addEventListener(n,r,o,i)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(i=>i.supports(n)),!r)throw new x(5101,!1);return this._eventNameToPlugin.set(n,r),r}static \u0275fac=function(r){return new(r||e)(O(vc),O(Be))};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})(),Hd="ng-app-id";function _y(e){for(let t of e)t.remove()}function ky(e,t){let n=t.createElement("style");return n.textContent=e,n}function LC(e,t,n,r){let o=e.head?.querySelectorAll(`style[${Hd}="${t}"],link[${Hd}="${t}"]`);if(o)for(let i of o)i.removeAttribute(Hd),i instanceof HTMLLinkElement?r.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&n.set(i.textContent,{usage:0,elements:[i]})}function jd(e,t){let n=t.createElement("link");return n.setAttribute("rel","stylesheet"),n.setAttribute("href",e),n}var Vd=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(n,r,o,i={}){this.doc=n,this.appId=r,this.nonce=o,LC(n,r,this.inline,this.external),this.hosts.add(n.head)}addStyles(n,r){for(let o of n)this.addUsage(o,this.inline,ky);r?.forEach(o=>this.addUsage(o,this.external,jd))}removeStyles(n,r){for(let o of n)this.removeUsage(o,this.inline);r?.forEach(o=>this.removeUsage(o,this.external))}addUsage(n,r,o){let i=r.get(n);i?i.usage++:r.set(n,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(n,this.doc)))})}removeUsage(n,r){let o=r.get(n);o&&(o.usage--,o.usage<=0&&(_y(o.elements),r.delete(n)))}ngOnDestroy(){for(let[,{elements:n}]of[...this.inline,...this.external])_y(n);this.hosts.clear()}addHost(n){this.hosts.add(n);for(let[r,{elements:o}]of this.inline)o.push(this.addElement(n,ky(r,this.doc)));for(let[r,{elements:o}]of this.external)o.push(this.addElement(n,jd(r,this.doc)))}removeHost(n){this.hosts.delete(n)}addElement(n,r){return this.nonce&&r.setAttribute("nonce",this.nonce),n.appendChild(r)}static \u0275fac=function(r){return new(r||e)(O(we),O(nc),O(oc,8),O(zi))};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})(),Ud={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},$d=/%COMP%/g;var xy="%COMP%",HC=`_nghost-${xy}`,UC=`_ngcontent-${xy}`,jC=!0,BC=new A("",{factory:()=>jC});function VC(e){return UC.replace($d,e)}function $C(e){return HC.replace($d,e)}function Ay(e,t){return t.map(n=>n.replace($d,e))}var zd=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(n,r,o,i,s,c,l=null,u=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=s,this.ngZone=c,this.nonce=l,this.tracingService=u,this.defaultRenderer=new es(n,s,c,this.tracingService)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;let o=this.getOrCreateRenderer(n,r);return o instanceof yc?o.applyToHost(n):o instanceof ts&&o.applyStyles(),o}getOrCreateRenderer(n,r){let o=this.rendererByCompId,i=o.get(r.id);if(!i){let s=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(r.encapsulation){case Rt.Emulated:i=new yc(l,u,r,this.appId,d,s,c,f);break;case Rt.ShadowDom:return new gc(l,n,r,s,c,this.nonce,f,u);case Rt.ExperimentalIsolatedShadowDom:return new gc(l,n,r,s,c,this.nonce,f);default:i=new ts(l,u,r,d,s,c,f);break}o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(n){this.rendererByCompId.delete(n)}static \u0275fac=function(r){return new(r||e)(O(Bd),O(Vd),O(nc),O(BC),O(we),O(Be),O(oc),O(yr,8))};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})(),es=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,n,r,o){this.eventManager=t,this.doc=n,this.ngZone=r,this.tracingService=o}destroy(){}destroyNode=null;createElement(t,n){return n?this.doc.createElementNS(Ud[n]||n,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,n){(Ny(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(Ny(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){n.remove()}selectRootElement(t,n){let r=typeof t=="string"?this.doc.querySelector(t):t;if(!r)throw new x(-5104,!1);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;let i=Ud[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){let o=Ud[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(gr.DashCase|gr.Important)?t.style.setProperty(n,r,o&gr.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&gr.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t!=null&&(t[n]=r)}setValue(t,n){t.nodeValue=n}listen(t,n,r,o){if(typeof t=="string"&&(t=fn().getGlobalEventTarget(this.doc,t),!t))throw new x(5102,!1);let i=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(t,n,i)),this.eventManager.addEventListener(t,n,i,o)}decoratePreventDefault(t){return n=>{if(n==="__ngUnwrap__")return t;t(n)===!1&&n.preventDefault()}}};function Ny(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var gc=class extends es{hostEl;sharedStylesHost;shadowRoot;constructor(t,n,r,o,i,s,c,l){super(t,o,i,c),this.hostEl=n,this.sharedStylesHost=l,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=Ay(r.id,u);for(let f of u){let h=document.createElement("style");s&&h.setAttribute("nonce",s),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=jd(f,o);s&&h.setAttribute("nonce",s),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(null,n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},ts=class extends es{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,n,r,o,i,s,c,l){super(t,i,s,c),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=o;let u=r.styles;this.styles=l?Ay(l,u):u,this.styleUrls=r.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&hr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},yc=class extends ts{contentAttr;hostAttr;constructor(t,n,r,o,i,s,c,l){let u=o+"-"+r.id;super(t,n,r,i,s,c,l,u),this.contentAttr=VC(u),this.hostAttr=$C(u)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,n){let r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}};var Sc=class e extends Zi{supportsDOMEvents=!0;static makeCurrent(){Ld(new e)}onAndCancel(t,n,r,o){return t.addEventListener(n,r,o),()=>{t.removeEventListener(n,r,o)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.remove()}createElement(t,n){return n=n||this.getDefaultDocument(),n.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return n==="window"?window:n==="document"?t:n==="body"?t.body:null}getBaseHref(t){let n=zC();return n==null?null:WC(n)}resetBaseElement(){ns=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Ji(document.cookie,t)}},ns=null;function zC(){return ns=ns||document.head.querySelector("base"),ns?ns.getAttribute("href"):null}function WC(e){return new URL(e,document.baseURI).pathname}var qC=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})(),Oy=["alt","control","meta","shift"],GC={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},QC={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Fy=(()=>{class e extends Xi{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,r,o,i){let s=e.parseEventName(r),c=e.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>fn().onAndCancel(n,s.domEventName,c,i))}static parseEventName(n){let r=n.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let i=e._normalizeKey(r.pop()),s="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),s="code."),Oy.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),s+=u+".")}),s+=i,r.length!=0||i.length===0)return null;let l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(n,r){let o=GC[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Oy.forEach(s=>{if(s!==o){let c=QC[s];c(n)&&(i+=s+".")}}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return n==="esc"?"escape":n}static \u0275fac=function(r){return new(r||e)(O(we))};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();function Wd(e,t,n){return Z(this,null,function*(){let r=g({rootComponent:e},KC(t,n));return Ty(r)})}function KC(e,t){return{platformRef:t?.platformRef,appProviders:[...e0,...e?.providers??[]],platformProviders:XC}}function YC(){Sc.makeCurrent()}function ZC(){return new sn}function JC(){return Sd(document),document}var XC=[{provide:zi,useValue:My},{provide:rc,useValue:YC,multi:!0},{provide:we,useFactory:JC}];var e0=[{provide:wi,useValue:"root"},{provide:sn,useFactory:ZC},{provide:vc,useClass:mc,multi:!0},{provide:vc,useClass:Fy,multi:!0},zd,Vd,Bd,{provide:mr,useExisting:zd},{provide:vr,useClass:qC},[]];var Pt=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(n=>{let r=n.indexOf(":");if(r>0){let o=n.slice(0,r),i=n.slice(r+1).trim();this.addHeaderEntry(o,i)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((n,r)=>{this.addHeaderEntry(r,n)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([n,r])=>{this.setHeaderEntries(n,r)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let n=this.headers.get(t.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,n){return this.clone({name:t,value:n,op:"a"})}set(t,n){return this.clone({name:t,value:n,op:"s"})}delete(t,n){return this.clone({name:t,value:n,op:"d"})}maybeSetNormalizedName(t,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,t)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(n=>{this.headers.set(n,t.headers.get(n)),this.normalizedNames.set(n,t.normalizedNames.get(n))})}clone(t){let n=new e;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}applyUpdate(t){let n=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(t.name,n);let o=(t.op==="a"?this.headers.get(n):void 0)||[];o.push(...r),this.headers.set(n,o);break;case"d":let i=t.value;if(!i)this.headers.delete(n),this.normalizedNames.delete(n);else{let s=this.headers.get(n);if(!s)return;s=s.filter(c=>i.indexOf(c)===-1),s.length===0?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,s)}break}}addHeaderEntry(t,n){let r=t.toLowerCase();this.maybeSetNormalizedName(t,r),this.headers.has(r)?this.headers.get(r).push(n):this.headers.set(r,[n])}setHeaderEntries(t,n){let r=(Array.isArray(n)?n:[n]).map(i=>i.toString()),o=t.toLowerCase();this.headers.set(o,r),this.maybeSetNormalizedName(t,o)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>t(this.normalizedNames.get(n),this.headers.get(n)))}};var Do=class{map=new Map;set(t,n){return this.map.set(t,n),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}},bc=class{encodeKey(t){return Ly(t)}encodeValue(t){return Ly(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function t0(e,t){let n=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{let i=o.indexOf("="),[s,c]=i==-1?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,i)),t.decodeValue(o.slice(i+1))],l=n.get(s)||[];l.push(c),n.set(s,l)}),n}var n0=/%(\d[a-f0-9])/gi,r0={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Ly(e){return encodeURIComponent(e).replace(n0,(t,n)=>r0[n]??t)}function Dc(e){return`${e}`}var hn=class e{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new bc,t.fromString){if(t.fromObject)throw new x(2805,!1);this.map=t0(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(n=>{let r=t.fromObject[n],o=Array.isArray(r)?r.map(Dc):[Dc(r)];this.map.set(n,o)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let n=this.map.get(t);return n?n[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,n){return this.clone({param:t,value:n,op:"a"})}appendAll(t){let n=[];return Object.keys(t).forEach(r=>{let o=t[r];Array.isArray(o)?o.forEach(i=>{n.push({param:r,value:i,op:"a"})}):n.push({param:r,value:o,op:"a"})}),this.clone(n)}set(t,n){return this.clone({param:t,value:n,op:"s"})}delete(t,n){return this.clone({param:t,value:n,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let n=this.encoder.encodeKey(t);return this.map.get(t).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let n=new e({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(t),n}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let n=(t.op==="a"?this.map.get(t.param):void 0)||[];n.push(Dc(t.value)),this.map.set(t.param,n);break;case"d":if(t.value!==void 0){let r=this.map.get(t.param)||[],o=r.indexOf(Dc(t.value));o!==-1&&r.splice(o,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};function o0(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Hy(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Uy(e){return typeof Blob<"u"&&e instanceof Blob}function jy(e){return typeof FormData<"u"&&e instanceof FormData}function i0(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var By="Content-Type",Vy="Accept",$y="text/plain",zy="application/json",s0=`${zy}, ${$y}, */*`,vo=class e{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(t,n,r,o){this.url=n,this.method=t.toUpperCase();let i;if(o0(this.method)||o?(this.body=r!==void 0?r:null,i=o):i=r,i){if(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,this.keepalive=!!i.keepalive,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),i.priority&&(this.priority=i.priority),i.cache&&(this.cache=i.cache),i.credentials&&(this.credentials=i.credentials),typeof i.timeout=="number"){if(i.timeout<1||!Number.isInteger(i.timeout))throw new x(2822,"");this.timeout=i.timeout}i.mode&&(this.mode=i.mode),i.redirect&&(this.redirect=i.redirect),i.integrity&&(this.integrity=i.integrity),i.referrer&&(this.referrer=i.referrer),i.referrerPolicy&&(this.referrerPolicy=i.referrerPolicy),this.transferCache=i.transferCache}if(this.headers??=new Pt,this.context??=new Do,!this.params)this.params=new hn,this.urlWithParams=n;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=n;else{let c=n.indexOf("?"),l=c===-1?"?":c<n.length-1?"&":"";this.urlWithParams=n+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Hy(this.body)||Uy(this.body)||jy(this.body)||i0(this.body)?this.body:this.body instanceof hn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||jy(this.body)?null:Uy(this.body)?this.body.type||null:Hy(this.body)?null:typeof this.body=="string"?$y:this.body instanceof hn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?zy:null}clone(t={}){let n=t.method||this.method,r=t.url||this.url,o=t.responseType||this.responseType,i=t.keepalive??this.keepalive,s=t.priority||this.priority,c=t.cache||this.cache,l=t.mode||this.mode,u=t.redirect||this.redirect,d=t.credentials||this.credentials,f=t.referrer||this.referrer,h=t.integrity||this.integrity,p=t.referrerPolicy||this.referrerPolicy,v=t.transferCache??this.transferCache,S=t.timeout??this.timeout,y=t.body!==void 0?t.body:this.body,D=t.withCredentials??this.withCredentials,E=t.reportProgress??this.reportProgress,_=t.headers||this.headers,R=t.params||this.params,N=t.context??this.context;return t.setHeaders!==void 0&&(_=Object.keys(t.setHeaders).reduce((ye,Qe)=>ye.set(Qe,t.setHeaders[Qe]),_)),t.setParams&&(R=Object.keys(t.setParams).reduce((ye,Qe)=>ye.set(Qe,t.setParams[Qe]),R)),new e(n,r,y,{params:R,headers:_,context:N,reportProgress:E,responseType:o,withCredentials:D,transferCache:v,keepalive:i,cache:c,priority:s,timeout:S,mode:l,redirect:u,credentials:d,referrer:f,integrity:h,referrerPolicy:p})}},Sr=(function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e})(Sr||{}),bo=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(t,n=200,r="OK"){this.headers=t.headers||new Pt,this.status=t.status!==void 0?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.redirected=t.redirected,this.responseType=t.responseType,this.ok=this.status>=200&&this.status<300}},Ec=class e extends bo{constructor(t={}){super(t)}type=Sr.ResponseHeader;clone(t={}){return new e({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},rs=class e extends bo{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=Sr.Response;clone(t={}){return new e({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0,redirected:t.redirected??this.redirected,responseType:t.responseType??this.responseType})}},So=class extends bo{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},a0=200,c0=204;var l0=new A("");var u0=/^\)\]\}',?\n/;var Gd=(()=>{class e{xhrFactory;tracingService=I(yr,{optional:!0});constructor(n){this.xhrFactory=n}maybePropagateTrace(n){return this.tracingService?.propagate?this.tracingService.propagate(n):n}handle(n){if(n.method==="JSONP")throw new x(-2800,!1);let r=this.xhrFactory;return H(null).pipe(it(()=>new F(i=>{let s=r.build();if(s.open(n.method,n.urlWithParams),n.withCredentials&&(s.withCredentials=!0),n.headers.forEach((y,D)=>s.setRequestHeader(y,D.join(","))),n.headers.has(Vy)||s.setRequestHeader(Vy,s0),!n.headers.has(By)){let y=n.detectContentTypeHeader();y!==null&&s.setRequestHeader(By,y)}if(n.timeout&&(s.timeout=n.timeout),n.responseType){let y=n.responseType.toLowerCase();s.responseType=y!=="json"?y:"text"}let c=n.serializeBody(),l=null,u=()=>{if(l!==null)return l;let y=s.statusText||"OK",D=new Pt(s.getAllResponseHeaders()),E=s.responseURL||n.url;return l=new Ec({headers:D,status:s.status,statusText:y,url:E}),l},d=this.maybePropagateTrace(()=>{let{headers:y,status:D,statusText:E,url:_}=u(),R=null;D!==c0&&(R=typeof s.response>"u"?s.responseText:s.response),D===0&&(D=R?a0:0);let N=D>=200&&D<300;if(n.responseType==="json"&&typeof R=="string"){let ye=R;R=R.replace(u0,"");try{R=R!==""?JSON.parse(R):null}catch(Qe){R=ye,N&&(N=!1,R={error:Qe,text:R})}}N?(i.next(new rs({body:R,headers:y,status:D,statusText:E,url:_||void 0})),i.complete()):i.error(new So({error:R,headers:y,status:D,statusText:E,url:_||void 0}))}),f=this.maybePropagateTrace(y=>{let{url:D}=u(),E=new So({error:y,status:s.status||0,statusText:s.statusText||"Unknown Error",url:D||void 0});i.error(E)}),h=f;n.timeout&&(h=this.maybePropagateTrace(y=>{let{url:D}=u(),E=new So({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:D||void 0});i.error(E)}));let p=!1,v=this.maybePropagateTrace(y=>{p||(i.next(u()),p=!0);let D={type:Sr.DownloadProgress,loaded:y.loaded};y.lengthComputable&&(D.total=y.total),n.responseType==="text"&&s.responseText&&(D.partialText=s.responseText),i.next(D)}),S=this.maybePropagateTrace(y=>{let D={type:Sr.UploadProgress,loaded:y.loaded};y.lengthComputable&&(D.total=y.total),i.next(D)});return s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",h),s.addEventListener("abort",f),n.reportProgress&&(s.addEventListener("progress",v),c!==null&&s.upload&&s.upload.addEventListener("progress",S)),s.send(c),i.next({type:Sr.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",h),n.reportProgress&&(s.removeEventListener("progress",v),c!==null&&s.upload&&s.upload.removeEventListener("progress",S)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(r){return new(r||e)(O(vr))};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function d0(e,t){return t(e)}function f0(e,t,n){return(r,o)=>ke(n,()=>t(r,i=>e(i,o)))}var Wy=new A("",{factory:()=>[]}),qy=new A(""),Gy=new A("",{factory:()=>!0});var Qd=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=O(Gd),o},providedIn:"root"})}return e})();var Tc=(()=>{class e{backend;injector;chain=null;pendingTasks=I(Ba);contributeToStability=I(Gy);constructor(n,r){this.backend=n,this.injector=r}handle(n){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(Wy),...this.injector.get(qy,[])]));this.chain=r.reduceRight((o,i)=>f0(o,i,this.injector),d0)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(n,o=>this.backend.handle(o)).pipe(Cn(r))}else return this.chain(n,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||e)(O(Qd),O(pe))};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Kd=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=O(Tc),o},providedIn:"root"})}return e})();function qd(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,credentials:e.credentials,transferCache:e.transferCache,timeout:e.timeout,keepalive:e.keepalive,priority:e.priority,cache:e.cache,mode:e.mode,redirect:e.redirect,integrity:e.integrity,referrer:e.referrer,referrerPolicy:e.referrerPolicy}}var wc=(()=>{class e{handler;constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof vo)i=n;else{let l;o.headers instanceof Pt?l=o.headers:l=new Pt(o.headers);let u;o.params&&(o.params instanceof hn?u=o.params:u=new hn({fromObject:o.params})),i=new vo(n,r,o.body!==void 0?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,referrerPolicy:o.referrerPolicy,integrity:o.integrity,timeout:o.timeout})}let s=H(i).pipe(Zr(l=>this.handler.handle(l)));if(n instanceof vo||o.observe==="events")return s;let c=s.pipe(Te(l=>l instanceof rs));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return c.pipe(L(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new x(2806,!1);return l.body}));case"blob":return c.pipe(L(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new x(2807,!1);return l.body}));case"text":return c.pipe(L(l=>{if(l.body!==null&&typeof l.body!="string")throw new x(2808,!1);return l.body}));default:return c.pipe(L(l=>l.body))}case"response":return c;default:throw new x(2809,!1)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new hn().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,qd(o,r))}post(n,r,o={}){return this.request("POST",n,qd(o,r))}put(n,r,o={}){return this.request("PUT",n,qd(o,r))}static \u0275fac=function(r){return new(r||e)(O(Kd))};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var h0=new A("",{factory:()=>!0}),p0="XSRF-TOKEN",m0=new A("",{factory:()=>p0}),g0="X-XSRF-TOKEN",y0=new A("",{factory:()=>g0}),v0=(()=>{class e{cookieName=I(m0);doc=I(we);lastCookieString="";lastToken=null;parseCount=0;getToken(){let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ji(n,this.cookieName),this.lastCookieString=n),this.lastToken}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Qy=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=O(v0),o},providedIn:"root"})}return e})();function S0(e,t){if(!I(h0)||e.method==="GET"||e.method==="HEAD")return t(e);try{let o=I(go).href,{origin:i}=new URL(o),{origin:s}=new URL(e.url,i);if(i!==s)return t(e)}catch(o){return t(e)}let n=I(Qy).getToken(),r=I(y0);return n!=null&&!e.headers.has(r)&&(e=e.clone({headers:e.headers.set(r,n)})),t(e)}function Yd(...e){let t=[wc,Tc,{provide:Kd,useExisting:Tc},{provide:Qd,useFactory:()=>I(l0,{optional:!0})??I(Gd)},{provide:Wy,useValue:S0,multi:!0}];for(let n of e)t.push(...n.\u0275providers);return no(t)}var Ky=(()=>{class e{_doc;constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}static \u0275fac=function(r){return new(r||e)(O(we))};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ie=(()=>{class e{constructor(){this.raidTierSource=new ce(""),this.regionSource=new ce(""),this.pokemonListSource=new ce(""),this.teraTypeSource=new ce(""),this.moveListSource=new ce(""),this.loadingSource=new ce(!1),this.raidTier=this.raidTierSource.asObservable(),this.regionList=this.regionSource.asObservable(),this.pokemonList=this.pokemonListSource.asObservable(),this.teraType=this.teraTypeSource.asObservable(),this.moveList=this.moveListSource.asObservable(),this.loading=this.loadingSource.asObservable()}changeRaidTier(n){this.raidTierSource.next(n)}changeRegionList(n){this.regionSource.next(n)}changePokemon(n){this.pokemonListSource.next(n)}changeTeraType(n){this.teraTypeSource.next(n)}changeMoveList(n){this.moveListSource.next(n)}changeLoading(n){this.loadingSource.next(n)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Yy=(()=>{class e{constructor(n){this.stateService=n}valueChanged(){let n=document.getElementById("raidTier"),r=n.selectedIndex,o=n.options[r];this.stateService.changeRaidTier(o.value)}static{this.\u0275fac=function(r){return new(r||e)(W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-raid-tier"]],decls:7,vars:0,consts:[["id","raidTier",3,"change"],["value",""],["value","5"],["value","6"]],template:function(r,o){r&1&&(Ce(0,"select",0),yt("change",function(){return o.valueChanged()}),Ce(1,"option",1),he(2,"-- Tier --"),ze(),Ce(3,"option",2),he(4,"5 Star"),ze(),Ce(5,"option",3),he(6,"6 Star"),ze()())},encapsulation:2})}}return e})();var m=(function(e){return e.Paldea="Paldea",e.Kitakami="Kitakami",e.Terarium="Terarium",e})(m||{}),a=(function(e){return e.Time="Time",e.HP="HP",e})(a||{}),zt=[{name:"Abomasnow",region:m.Paldea,info:{moves:["Energy Ball","Ice Punch","Ice Shard","Leer","Blizzard","Snowscape","Aurora Veil"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Blizzard"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Snowscape"},{type:a.HP,threshold:25,action:"Uses Aurora Veil"}]}},{name:"Altaria",region:m.Paldea,info:{moves:["Dragon Pulse","Hurricane","Sing","Mist","Safeguard","Cotton Guard"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Safeguard"},{type:a.HP,threshold:75,action:"Uses"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Cotton Guard"},{type:a.HP,threshold:25,action:"Uses Sing"}]}},{name:"Amoonguss",region:m.Paldea,info:{moves:["Energy Ball","Sludge Bomb","Spore","Clear Smog","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Spore"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Annihilape",region:m.Paldea,info:{moves:["Shadow Claw","Close Combat","Outrage","Leer","Taunt","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Bulk Up"}]}},{name:"Appletun",region:m.Paldea,info:{moves:["Apple Acid","Dragon Pulse","Giga Drain","Body Press","","Growth"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses"},{type:a.HP,threshold:75,action:"Uses Growth"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Arboliva",region:m.Paldea,info:{moves:["Energy Ball","Hyper Voice","Earth Power","Charm","Sunny Day","Growth","Leaf Storm"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Growth"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Leaf Storm"}]}},{name:"Arcanine",region:m.Paldea,info:{moves:["Flamethrower","Crunch","Extreme Speed","Fire Fang","Sunny Day","Leer"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Leer"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Armarouge",region:m.Paldea,info:{moves:["Armor Cannon","Psychic","Night Shade","Will-O-Wisp","Sunny Day","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Sunny Day"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Avalugg",region:m.Paldea,info:{moves:["Icicle Crash","Double-Edge","Crunch","Ice Fang","Snowscape","Iron Defense"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Snowscape"},{type:a.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Baxcalibur",region:m.Paldea,info:{moves:["Dragon Claw","Icicle Crash","Ice Shard","Body Press","Snowscape"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Blissey",region:m.Paldea,info:{moves:["Dazzling Gleam","Hyper Voice","Sing","Seismic Toss","Gravity"],specialMoves:["Seismic Toss","Gravity"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Gravity"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Bombirdier",region:m.Paldea,info:{moves:["Rock Slide","Sucker Punch","Brave Bird","Torment","Knock Off","Feather Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Feather Dance"}]}},{name:"Brambleghast",region:m.Paldea,info:{moves:["Giga Drain","Shadow Ball","Power Whip","Infestation","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Grassy Terrain"}]}},{name:"Braviary",region:m.Paldea,info:{moves:["Acrobatics","Crush Claw","Superpower","Air Slash","Tailwind","Hone Claws"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Tailwind"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Hone Claws"},{type:a.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Breloom",region:m.Paldea,info:{moves:["Seed Bomb","Mach Punch","Worry Seed","Headbutt","Grassy Terrain","Spore"],specialMoves:["Spore"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Bronzong",region:m.Paldea,info:{moves:["Flash Cannon","Extrasensory","Metal Sound","Payback","Rain Dance","Calm Mind","Reflect"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Calm Mind"},{type:a.HP,threshold:25,action:"Uses Reflect"}]}},{name:"Camerupt",region:m.Paldea,info:{moves:["Flamethrower","Earth Power","Yawn","Eruption","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Ceruledge",region:m.Paldea,info:{moves:["Bitter Blade","Shadow Claw","Psycho Cut","Will-O-Wisp","Sunny Day","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Sunny Day"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Swords Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Cetitan",region:m.Paldea,info:{moves:["Ice Spinner","Liquidation","Yawn","Entrainment","Snowscape"],specialMoves:["Yawn","Entrainment"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Clawitzer",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Aura Sphere","Crabhammer","Rain Dance"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Water Pulse"}]}},{name:"Cloyster",region:m.Paldea,info:{moves:["Icicle Spear","Hydro Pump","Ice Shard","Supersonic","Shell Smash"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Shell Smash"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Coalossal",region:m.Paldea,info:{moves:["Heat Crash","Stone Edge","Incinerate","Ancient Power","Sandstorm","Tar Shot","Fire Blast"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Uses Tar Shot"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Fire Blast"}]}},{name:"Copperajah",region:m.Paldea,info:{moves:["Heavy Slam","Strength","Curse","High Horsepower","Sandstorm","Iron Defense"],specialMoves:["Curse"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Corviknight",region:m.Paldea,info:{moves:["Steel Wing","Drill Peck","Taunt","Body Press","Iron Defense","Hone Claws"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Hone Claws"}]}},{name:"Delibird",region:m.Paldea,info:{moves:["Present","Drill Peck","Ice Punch","Blizzard","Snowscape"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Present"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Present"}]}},{name:"Ditto",region:m.Paldea,info:{moves:["Transform"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:50,action:"Stats & Status Reset"}]}},{name:"Dondozo",region:m.Paldea,info:{moves:["Order Up","Waterfall","Heavy Slam","Tickle","Rain Dance","Stockpile"],specialMoves:["Stockpile"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Stockpile"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Dragalge",region:m.Paldea,info:{moves:["Dragon Pulse","Sludge Bomb","Water Pulse","Toxic","Acid Spray","Draco Meteor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Acid Spray"},{type:a.HP,threshold:75,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Draco Meteor"}]}},{name:"Dragapult",region:m.Paldea,info:{moves:["Shadow Ball","Dragon Darts","Thunderbolt","Hex","Reflect","Light Screen"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Light Screen"}]}},{name:"Dragonite",region:m.Paldea,info:{moves:["Dragon Rush","Aerial Ace","Extreme Speed","Hurricane","Safeguard","Dragon Dance","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Safeguard"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:35,action:"Uses Rain Dance"}]}},{name:"Drifblim",region:m.Paldea,info:{moves:["Hex","Air Slash","Thunder Wave","Shadow Ball","Will-O-Wisp"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Eelektross",region:m.Paldea,info:{moves:["Wild Charge","Flamethrower","Discharge","Crush Claw","Ion Deluge","Thunder Wave","Coil"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Ion Deluge"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:25,action:"Uses Coil"}]}},{name:"Eevee",region:m.Paldea,info:{moves:["Tera Blast","Take Down","Shadow Ball","Tickle","Yawn","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Yawn"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Falinks",region:m.Paldea,info:{moves:["Megahorn","Reversal","Headbutt","Brick Break","No Retreat"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:40,action:"Uses No Retreat"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Flapple",region:m.Paldea,info:{moves:["Grav Apple","Dragon Breath","Dragon Rush","Trailblaze","Grassy Terrain","Iron Defense","Dragon Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Dragon Dance"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Florges",region:m.Paldea,info:{moves:["Petal Dance","Moonblast","Psychic","Safeguard","Grassy Terrain","Calm Mind"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Grassy Terrain"}]}},{name:"Froslass",region:m.Paldea,info:{moves:["Frost Breath","Shadow Ball","Scary Face","Draining Kiss","Snowscape","Disable","Aurora Veil"],specialMoves:["Disable"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:25,action:"Uses Aurora Veil"}]}},{name:"Gallade",region:m.Paldea,info:{moves:["Psycho Cut","Brick Break","Shadow Sneak","Fury Cutter","Hypnosis","Disable","Psychic Terrain"],specialMoves:["Disable","Shadow Sneak"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Psychic Terrain"}]}},{name:"Garchomp",region:m.Paldea,info:{moves:["Earthquake","Dragon Claw","Iron Head","Slash","Sandstorm","Bulldoze"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Uses Bulldoze"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Gardevoir",region:m.Paldea,info:{moves:["Psychic","Moonblast","Disable","Draining Kiss","Misty Terrain","Calm Mind","Psychic Terrain"],specialMoves:["Disable"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Psychic Terrain"}]}},{name:"Garganacl",region:m.Paldea,info:{moves:["Salt Cure","Rock Slide","Hammer Arm","Sandstorm"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Gengar",region:m.Paldea,info:{moves:["Shadow Ball","Sludge Bomb","Confuse Ray","Spite","Hypnosis"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Hypnosis"}]}},{name:"Glalie",region:m.Paldea,info:{moves:["Freeze-Dry","Crunch","Headbutt","Frost Breath","Snowscape","Disable"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:85,action:"Uses Snowscape"}]}},{name:"Glimmora",region:m.Paldea,info:{moves:["Power Gem","Sludge Bomb","Mortal Spin","Ancient Power","Sandstorm","Tera Blast"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Tera Blast"}]}},{name:"Goodra",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Sludge Bomb","Power Whip","Rain Dance","Draco Meteor","Acid Armor"],specialMoves:["Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Acid Armor"}]}},{name:"Gothitelle",region:m.Paldea,info:{moves:["Psychic","Thunder Wave","Thunderbolt","Stored Power","Calm Mind","Light Screen"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Calm Mind"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:25,action:"Uses Light Screen"}]}},{name:"Greedent",region:m.Paldea,info:{moves:["Body Slam","Body Press","Bullet Seed","Tail Whip","Stockpile"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Stockpile"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Stockpile"}]}},{name:"Grimmsnarl",region:m.Paldea,info:{moves:["Spirit Break","False Surrender","Scary Face","Foul Play","Light Screen","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Light Screen"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Gyarados",region:m.Paldea,info:{moves:["Aqua Tail","Twister","Hurricane","Crunch","Scary Face","Taunt","Dragon Dance","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:35,action:"Uses Rain Dance"}]}},{name:"Hariyama",region:m.Paldea,info:{moves:["Reversal","Brick Break","Brine","Heavy Slam","Scary Face","Taunt","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Bulk Up"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Hatterene",region:m.Paldea,info:{moves:["Dazzling Gleam","Psychic","Dark Pulse","Charm","Misty Terrain","Calm Mind","Psychic Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Psychic Terrain"}]}},{name:"Haxorus",region:m.Paldea,info:{moves:["Dragon Claw","Crunch","Giga Impact","First Impression","Harden","Dragon Dance"],specialMoves:["Harden","First Impression"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Harden"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Dragon Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Hippowdon",region:m.Paldea,info:{moves:["Earthquake","Yawn","Rock Slide","Body Slam","Stockpile"],specialMoves:["Stockpile"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Yawn"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Stockpile"}]}},{name:"Honchkrow",region:m.Paldea,info:{moves:["Night Slash","Hurricane","Haze","Wing Attack","Nasty Plot"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Nasty Plot"}]}},{name:"Houndoom",region:m.Paldea,info:{moves:["Flamethrower","Crunch","Taunt","Will-O-Wisp","Sunny Day","Howl"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Howl"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Hydreigon",region:m.Paldea,info:{moves:["Dark Pulse","Dragon Pulse","Scary Face","Dragon Rush","Taunt","Reflect","Nasty Plot"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Uses Reflect"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Indeedee (Male)",formName:"indeedee",region:m.Paldea,info:{moves:["Psychic","Hyper Voice","Shadow Ball","Trick Room","Play Nice","Calm Mind"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Play Nice"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Indeedee (Female)",formName:"indeedee",imageAlt:"-f",region:m.Paldea,info:{moves:["Psychic","Hyper Voice","Shadow Ball","Trick Room","Play Nice","Calm Mind"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Play Nice"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Kingambit",region:m.Paldea,info:{moves:["Iron Head","Night Slash","Torment","Slash","Taunt","Metal Burst"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Torment"},{type:a.Time,threshold:15,action:"Uses Metal Burst"}]}},{name:"Krookodile",region:m.Paldea,info:{moves:["Earthquake","Crunch","Sand Tomb","Counter","Torment","Hone Claws"],specialMoves:["Counter"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Torment"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Hone Claws"}]}},{name:"Luxray",region:m.Paldea,info:{moves:["Crunch","Wild Charge","Discharge","Thunder Wave","Electric Terrain","Leer"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Uses Leer"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Electric Terrain"}]}},{name:"Mabosstiff",region:m.Paldea,info:{moves:["Crunch","Play Rough","Take Down","Swagger","Taunt"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Magnezone",region:m.Paldea,info:{moves:["Thunderbolt","Flash Cannon","Tri Attack","Thunder Wave","Magnet Rise","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Magnet Rise"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Mimikyu",region:m.Paldea,info:{moves:["Play Rough","Shadow Claw","Will-O-Wisp","Shadow Sneak","Light Screen","Taunt"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Light Screen"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Mismagius",region:m.Paldea,info:{moves:["Mystical Fire","Shadow Ball","Confuse Ray","Taunt","Light Screen","Nasty Plot"],specialMoves:["Light Screen"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Light Screen"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Nasty Plot"}]}},{name:"Mudsdale",region:m.Paldea,info:{moves:["High Horsepower","Body Press","Rock Smash","Heavy Slam","Scary Face","Iron Defense"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Scary Face"},{type:a.Time,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"}]}},{name:"Noivern",region:m.Paldea,info:{moves:["Air Slash","Dragon Pulse","Acrobatics","Boomburst","Tailwind"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Tailwind"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Tailwind"},{type:a.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Oranguru",region:m.Paldea,info:{moves:["Facade","Psychic","Stored Power","Yawn","Calm Mind","Light Screen"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Calm Mind"},{type:a.HP,threshold:75,action:"Uses Light Screen"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Orthworm",region:m.Paldea,info:{moves:["Iron Head","Earthquake","Stomping Tantrum","Wrap","Sandstorm","Coil"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Uses Coil"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Palafin",region:m.Paldea,info:{moves:["Liquidation","Acrobatics","Charm","Boomburst","Rain Dance","Bulk Up"],specialMoves:["Boomburst"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:85,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Passimian",region:m.Paldea,info:{moves:["Reversal","Rock Smash","Facade","Gunk Shot","Taunt","Trailblaze","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Uses Trailblaze"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Bulk Up"}]}},{name:"Pawmot",region:m.Paldea,info:{moves:["Wild Charge","Close Combat","Nuzzle","Sweet Kiss","Double Shock"],specialMoves:["Sweet Kiss"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:80,action:"Uses Nuzzle"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Double Shock"}]}},{name:"Pincurchin",region:m.Paldea,info:{moves:["Zing Zap","Thunder","Surf","Poison Jab","Rain Dance","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Rain Dance"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Polteageist",region:m.Paldea,info:{moves:["Shadow Ball","Mega Drain","Astonish","Will-O-Wisp","Shell Smash"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Shell Smash"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Raichu",region:m.Paldea,info:{moves:["Discharge","Iron Tail","Charm","Nuzzle","Electric Terrain","Thunder Wave"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Electric Terrain"}]}},{name:"Revavroom",region:m.Paldea,info:{moves:["Spin Out","Taunt","Gunk Shot","Overheat","Scary Face","Shift Gear"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Shift Gear"},{type:a.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Rotom",region:m.Paldea,info:{moves:["Discharge","Uproar","Hex","Thunder Wave","Charge","Eerie Impulse"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Charge"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Eerie Impulse"}]}},{name:"Sableye",region:m.Paldea,info:{moves:["Shadow Claw","Foul Play","Will-O-Wisp","Night Shade","Flatter","Torment"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Flatter"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Torment"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Salamence",region:m.Paldea,info:{moves:["Dragon Rush","Aerial Ace","Hyper Voice","Draco Meteor","Dragon Dance","Focus Energy"],specialMoves:["Dragon Rush"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:25,action:"Uses Focus Energy"}]}},{name:"Scizor",region:m.Paldea,info:{moves:["Iron Head","X-Scissor","Bullet Punch","Slash","Iron Defense","Focus Energy"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Iron Defense"},{type:a.HP,threshold:75,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"}]}},{name:"Scyther",region:m.Paldea,info:{moves:["Aerial Ace","X-Scissor","Slash","Agility","Focus Energy","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Focus Energy"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Swords Dance"}]}},{name:"Slaking",region:m.Paldea,info:{moves:["Facade","Shadow Claw","Play Rough","Swagger","Encore"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Encore"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"}]}},{name:"Slowbro",region:m.Paldea,info:{moves:["Zen Headbutt","Liquidation","Yawn","Water Pulse","Curse"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Curse"},{type:a.HP,threshold:70,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Curse"}]}},{name:"Slowking",region:m.Paldea,info:{moves:["Psychic","Surf","Yawn","Water Pulse","Psychic Terrain","Calm Mind"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Psychic Terrain"},{type:a.HP,threshold:70,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"}]}},{name:"Staraptor",region:m.Paldea,info:{moves:["Close Combat","Brave Bird","Quick Attack","Double-Edge"],specialMoves:["Double-Edge"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Brave Bird"}]}},{name:"Talonflame",region:m.Paldea,info:{moves:["Acrobatics","Flare Blitz","Steel Wing","Heat Wave","Bulk Up"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Bulk Up"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Bulk Up"}]}},{name:"Tatsugiri (Curly)",formName:"tatsugiri",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Chilling Water"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tatsugiri (Droopy)",formName:"tatsugiri",imageAlt:"-d",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Chilling Water"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tatsugiri (Stretchy)",formName:"tatsugiri",imageAlt:"-s",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Chilling Water"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tauros (Fire)",formName:"taurospaldeablaze",imageAlt:"-b",region:m.Paldea,info:{moves:["Flare Blitz","Close Combat","Flamethrower","Headbutt","Work Up","Sunny Day"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Work Up"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Sunny Day"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Tauros (Water)",formName:"taurospaldeaaqua",imageAlt:"-a",region:m.Paldea,info:{moves:["Wave Crash","Close Combat","Surf","Headbutt","Work Up","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Work Up"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Rain Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Tinkaton",region:m.Paldea,info:{moves:["Gigaton Hammer","Play Rough","Brutal Swing","Rock Smash","Misty Terrain","Thunder Wave","Charm"],specialMoves:["Charm","Misty Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:80,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Thunder Wave"},{type:a.HP,threshold:25,action:"Uses Charm"}]}},{name:"Toxtricity (Amped)",formName:"toxtricity",region:m.Paldea,info:{moves:["Overdrive","Poison Jab","Nuzzle","Boomburst","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Toxtricity (Low Key)",formName:"toxtricity",imageAlt:"-l",region:m.Paldea,info:{moves:["Overdrive","Poison Jab","Nuzzle","Boomburst","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Electric Terrain"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Tsareena",region:m.Paldea,info:{moves:["High Jump Kick","Power Whip","Stomp","Trop Kick","Reflect","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Grassy Terrain"}]}},{name:"Tyranitar",region:m.Paldea,info:{moves:["Rock Slide","Crunch","Screech","Dark Pulse","Dragon Dance","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Volcarona",region:m.Paldea,info:{moves:["Fire Blast","Bug Buzz","Hurricane","Will-O-Wisp","Sunny Day","Quiver Dance"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Quiver Dance"},{type:a.HP,threshold:20,action:"Uses Quiver Dance"}]}},{name:"Weavile",region:m.Paldea,info:{moves:["Ice Punch","Night Slash","Taunt","Facade","Reflect","Swords Dance"],specialMoves:["Reflect"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Swords Dance"}]}},{name:"Zoroark",region:m.Paldea,info:{moves:["Night Daze","Shadow Claw","Taunt","Hyper Voice","Torment","Nasty Plot"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Uses Torment"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Ambipom",region:m.Kitakami,info:{moves:["Double Hit","Screech","Fury Swipes","Knock Off","Trailblaze","Sand Attack"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:90,action:"Uses Trailblaze"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Sand Attack"},{type:a.HP,threshold:15,action:"Uses Sand Attack"}]}},{name:"Basculegion (Male)",formName:"basculegion",region:m.Kitakami,info:{moves:["Liquidation","Aqua Jet","Shadow Ball","Scary Face","Rain Dance","Wave Crash"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Rain Dance"},{type:a.HP,threshold:10,action:"Uses Wave Crash"}]}},{name:"Basculegion (Female)",formName:"basculegion",imageAlt:"-f",region:m.Kitakami,info:{moves:["Liquidation","Aqua Jet","Shadow Ball","Scary Face","Rain Dance","Hydro Pump"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Rain Dance"},{type:a.HP,threshold:10,action:"Uses Hydro Pump"}]}},{name:"Chandelure",region:m.Kitakami,info:{moves:["Shadow Ball","Heat Wave","Confuse Ray","Flamethrower","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Sunny Day"},{type:a.HP,threshold:80,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Sunny Day"},{type:a.HP,threshold:20,action:"Uses Heat Wave"}]}},{name:"Conkeldurr",region:m.Kitakami,info:{moves:["Hammer Arm","Stone Edge","Superpower","Scary Face","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Dusknoir",region:m.Kitakami,info:{moves:["Fire Punch","Brick Break","Shadow Ball","Shadow Punch","Trick Room","Poltergeist"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Trick Room"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Poltergeist"}]}},{name:"Gliscor",region:m.Kitakami,info:{moves:["Poison Jab","Earthquake","Acrobatics","X-Scissor","Sandstorm","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Swords Dance"},{type:a.Time,threshold:15,action:"Uses Sandstorm"}]}},{name:"Golem",region:m.Kitakami,info:{moves:["Earthquake","Stone Edge","Heavy Slam","Defense Curl"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Defense Curl"},{type:a.Time,threshold:70,action:"Uses Defense Curl"},{type:a.Time,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Earthquake"}]}},{name:"Kommo-o",formName:"kommoo",region:m.Kitakami,info:{moves:["Brick Break","Dragon Claw","Boomburst","Scary Face","Clangorous Soul"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Clangorous Soul"},{type:a.HP,threshold:10,action:"Uses Clangorous Soul"}]}},{name:"Ludicolo",region:m.Kitakami,info:{moves:["Energy Ball","Surf","Fake Out","Trailblaze","Rain Dance"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Rain Dance"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:10,action:"Uses Surf"}]}},{name:"Mamoswine",region:m.Kitakami,info:{moves:["Earthquake","Blizzard","Ice Shard","Ancient Power","Snowscape","Amnesia"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Amnesia"},{type:a.HP,threshold:10,action:"Uses Earthquake"}]}},{name:"Mandibuzz",region:m.Kitakami,info:{moves:["Rock Tomb","Dark Pulse","Toxic","Foul Play","Taunt","Nasty Plot"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Nasty Plot"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Mienshao",region:m.Kitakami,info:{moves:["Aura Sphere","Poison Jab","Taunt","Acrobatics","Bulk Up"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.Time,threshold:90,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Milotic",region:m.Kitakami,info:{moves:["Chilling Water","Surf","Dragon Pulse","Attract","Rain Dance","Hydro Pump"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Rain Dance"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.HP,threshold:35,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Ninetales",region:m.Kitakami,info:{moves:["Flamethrower","Extrasensory","Will-O-Wisp","Hypnosis","Nasty Plot"],specialMoves:["Hypnosis"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Politoed",region:m.Kitakami,info:{moves:["Surf","Hyper Voice","Weather Ball","Encore","Rain Dance","Hydro Pump"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Poliwrath",region:m.Kitakami,info:{moves:["Liquidation","Brick Break","Haze","Hydro Pump","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Probopass",region:m.Kitakami,info:{moves:["Body Press","Power Gem","Flash Cannon","Harden","Gravity","Zap Cannon"],specialMoves:["Harden"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Gravity"},{type:a.HP,threshold:75,action:"Uses Zap Cannon"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Zap Cannon"}]}},{name:"Shiftry",region:m.Kitakami,info:{moves:["Fake Out","Sucker Punch","Leaf Blade","Extrasensory","Sunny Day","Leaf Storm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Sunny Day"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:10,action:"Uses Leaf Storm"}]}},{name:"Sinistcha",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:15,action:"Uses Matcha Gotcha"}]}},{name:"Snorlax",region:m.Kitakami,info:{moves:["Body Slam","Heavy Slam","Bite","Mud-Slap","Curse"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Curse"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Trevenant",region:m.Kitakami,info:{moves:["Wood Hammer","Shadow Claw","Will-O-Wisp","Hex","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:20,action:"Uses Will-O-Wisp"}]}},{name:"Victreebel",region:m.Kitakami,info:{moves:["Sludge Bomb","Power Whip","Acid Spray","Trailblaze","Sunny Day"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Sunny Day"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Vikavolt",region:m.Kitakami,info:{moves:["Discharge","Bug Buzz","Solar Beam","Zap Cannon"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Uses Discharge"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Zap Cannon"},{type:a.HP,threshold:20,action:"Uses Zap Cannon"}]}},{name:"Yanmega",region:m.Kitakami,info:{moves:["Bug Buzz","Air Slash","Quick Attack","Hypnosis","Supersonic"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Supersonic"}]}},{name:"Alcremie",region:m.Terarium,info:{moves:["Dazzling Gleam","Psychic","Encore","Psyshock","Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Encore"},{type:a.HP,threshold:50,action:"Uses Acid Armor"},{type:a.HP,threshold:25,action:"Uses Acid Armor"},{type:a.Time,threshold:30,action:"Reduce Tera Orb Charge"}]}},{name:"Duraludon",region:m.Terarium,info:{moves:["Flash Cannon","Dragon Pulse","Breaking Swipe","Metal Sound","Light Screen","Draco Meteor","Iron Defense"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:99,action:"Uses Light Screen"},{type:a.HP,threshold:50,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:30,action:"Uses Iron Defense"}]}},{name:"Electivire",region:m.Terarium,info:{moves:["Discharge","Thunder Punch","Fire Punch","Ice Punch","Thunder Wave","Electric Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Uses Discharge"}]}},{name:"Excadrill",region:m.Terarium,info:{moves:["Drill Run","Iron Head","X-Scissor","Rapid Spin","Sandstorm","Earthquake"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Sandstorm"},{type:a.HP,threshold:15,action:"Uses Earthquake"}]}},{name:"Exeggutor",region:m.Terarium,info:{moves:["Psychic","Energy Ball","Uproar","Bulldoze","Sunny Day","Growth"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:99,action:"Uses Sunny Day"},{type:a.HP,threshold:90,action:"Uses Growth"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"}]}},{name:"Flygon",region:m.Terarium,info:{moves:["Dragon Pulse","Scorching Sands","Earthquake","Flamethrower","Sandstorm","Boomburst"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:50,action:"Uses Boomburst"},{type:a.Time,threshold:30,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Boomburst"}]}},{name:"Golurk",region:m.Terarium,info:{moves:["Shadow Punch","Drain Punch","Heavy Slam","Iron Defense","Gravity","Reflect"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Gravity"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Reflect"}]}},{name:"Hitmonchan",region:m.Terarium,info:{moves:["Mach Punch","Mega Punch","Thunder Punch","Throat Chop","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Bulk Up"},{type:a.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Hitmonlee",region:m.Terarium,info:{moves:["Low Sweep","Mega Kick","Blaze Kick","Scary Face","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Bulk Up"},{type:a.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Hitmontop",region:m.Terarium,info:{moves:["Triple Kick","Sucker Punch","Gyro Ball","Triple Axel","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Bulk Up"},{type:a.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Kingdra",region:m.Terarium,info:{moves:["Dragon Pulse","Hydro Pump","Flash Cannon","Yawn","Rain Dance","Focus Energy"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Focus Energy"}]}},{name:"Lapras",region:m.Terarium,info:{moves:["Ice Beam","Freeze-Dry","Sparkling Aria","Body Press","Sing","Mist","Snowscape"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Sing"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Uses Mist"},{type:a.HP,threshold:30,action:"Uses Snowscape"}]}},{name:"Magmortar",region:m.Terarium,info:{moves:["Flamethrower","Psychic","Focus Blast","Clear Smog","Sunny Day","Will-O-Wisp"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sunny Day"},{type:a.HP,threshold:75,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Malamar",region:m.Terarium,info:{moves:["Foul Play","Psycho Cut","Night Slash","Taunt","Topsy-Turvy","Superpower"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Topsy-Turvy"},{type:a.HP,threshold:75,action:"Uses Superpower"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"}]}},{name:"Metagross",region:m.Terarium,info:{moves:["Zen Headbutt","Meteor Mash","Agility","Bullet Punch","Light Screen","Magnet Rise"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Light Screen"},{type:a.HP,threshold:50,action:"Uses Magnet Rise"},{type:a.HP,threshold:25,action:"Stats & Status Reset"},{type:a.Time,threshold:20,action:"Reduce Tera Orb Charge"}]}},{name:"Minior",region:m.Terarium,info:{moves:["Power Gem","Acrobatics","Take Down","Swift","Sandstorm","Shell Smash"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Sandstorm"},{type:a.HP,threshold:49,action:"Player Stats & Status Reset"},{type:a.HP,threshold:49,action:"Uses Shell Smash"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"}]}},{name:"Porygon-Z",formName:"porygonz",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Magnet Rise"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Magnet Rise"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:10,action:"Player Stats & Status Reset"}]}},{name:"Porygon2",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Magnet Rise"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Magnet Rise"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Stats & Status Reset"},{type:a.HP,threshold:10,action:"Stats & Status Reset"}]}},{name:"Reuniclus",region:m.Terarium,info:{moves:["Psychic","Psyshock","Gravity","Shadow Ball","Psychic Terrain","Reflect"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Psychic Terrain"},{type:a.HP,threshold:49,action:"Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Reflect"}]}},{name:"Rhyperior",region:m.Terarium,info:{moves:["Earthquake","Rock Wrecker","Brick Break","Surf","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Sandstorm"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Rock Wrecker"}]}},{name:"Skarmory",region:m.Terarium,info:{moves:["Steel Wing","Drill Peck","X-Scissor","Feint","Iron Defense","Swords Dance","Tailwind"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Iron Defense"},{type:a.HP,threshold:70,action:"Uses Swords Dance"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Tailwind"}]}}],Wt=[{name:"Amoonguss",region:m.Paldea,info:{moves:["Energy Ball","Foul Play","Spore","Sludge Bomb","Grassy Terrain"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Grassy Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Grassy Terrain"}]}},{name:"Annihilape",region:m.Paldea,info:{moves:["Close Combat","Shadow Claw","Assurance","Focus Energy","Bulk Up","Rage Fist"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Bulk Up"},{type:a.Time,threshold:5,action:"Uses Rage Fist"}]}},{name:"Armarouge",region:m.Paldea,info:{moves:["Armor Cannon","Psychic","Night Shade","Will-O-Wisp","Calm Mind","Sunny Day"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Calm Mind"},{type:a.Time,threshold:65,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Avalugg",region:m.Paldea,info:{moves:["Icicle Crash","Heavy Slam","Snowscape","Ice Spinner","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Snowscape"},{type:a.Time,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Baxcalibur",region:m.Paldea,info:{moves:["Icicle Spear","Dragon Rush","Snowscape","Body Press"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Snowscape"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Blissey",region:m.Paldea,info:{moves:["Dazzling Gleam","Hyper Voice","Sing","Light Screen","Defense Curl"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:95,action:"Uses Defense Curl"},{type:a.HP,threshold:75,action:"Uses Defense Curl"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Sing"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Bombirdier",region:m.Paldea,info:{moves:["Rock Slide","Acrobatics","Knock Off","Feather Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Feather Dance"}]}},{name:"Breloom",region:m.Paldea,info:{moves:["Bullet Seed","Low Sweep","Spore","Aerial Ace","Grassy Terrain"],specialMoves:["Spore"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Ceruledge",region:m.Paldea,info:{moves:["Bitter Blade","Shadow Claw","Psycho Cut","Will-O-Wisp","Sunny Day"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.Time,threshold:65,action:"Uses Will-O-Wisp"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Cetitan",region:m.Paldea,info:{moves:["Ice Spinner","Body Slam","Snowscape","Stomping Tantrum","Yawn"],specialMoves:["Yawn"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Uses Snowscape"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Yawn"}]}},{name:"Clawitzer",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Aura Sphere","Crabhammer","Rain Dance"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Rain Dance"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Water Pulse"}]}},{name:"Clodsire",region:m.Paldea,info:{moves:["Earthquake","Poison Jab","Megahorn","Yawn"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Yawn"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Earthquake"}]}},{name:"Corviknight",region:m.Paldea,info:{moves:["Iron Head","Drill Peck","Body Press","Hone Claws","Tailwind"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:75,action:"Uses Hone Claws"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Tailwind"}]}},{name:"Cyclizar",region:m.Paldea,info:{moves:["Double-Edge","Dragon Claw","Dragon Pulse","Knock Off","Shift Gear"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Dachsbun",region:m.Paldea,info:{moves:["Play Rough","Double-Edge","Bite","Baby-Doll Eyes"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Play Rough"}]}},{name:"Ditto",region:m.Paldea,info:{moves:["Transform"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Dondozo",region:m.Paldea,info:{moves:["Wave Crash","Order Up","Heavy Slam","Yawn","Rain Dance","Curse"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Curse"}]}},{name:"Dragalge",region:m.Paldea,info:{moves:["Dragon Pulse","Sludge Bomb","Water Pulse","Toxic","Acid Spray","Draco Meteor"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Acid Spray"},{type:a.HP,threshold:75,action:"Uses Draco Meteor"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Draco Meteor"}]}},{name:"Dragapult",region:m.Paldea,info:{moves:["Shadow Ball","Dragon Pulse","Thunderbolt","Flamethrower","Reflect","Light Screen"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Reflect"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Light Screen"}]}},{name:"Dragonite",region:m.Paldea,info:{moves:["Dragon Rush","Extreme Speed","Dragon Dance","Aqua Tail","Light Screen"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:65,action:"Uses Light Screen"},{type:a.Time,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Dragon Dance"}]}},{name:"Espeon",region:m.Paldea,info:{moves:["Tera Blast","Psychic","Psyshock","Tickle","Psychic Terrain","Calm Mind"],specialMoves:["Tickle"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Psychic Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Psychic Terrain"}]}},{name:"Farigiraf",region:m.Paldea,info:{moves:["Twin Beam","Hyper Voice","Low Kick","Uproar","Agility"],specialMoves:["Uproar"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Agility"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Uproar"}]}},{name:"Flareon",region:m.Paldea,info:{moves:["Tera Blast","Flare Blitz","Lava Plume","Will-O-Wisp","Sunny Day","Curse"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Curse"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Frosmoth",region:m.Paldea,info:{moves:["Blizzard","Bug Buzz","Hurricane","Snowscape"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:80,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Gallade",region:m.Paldea,info:{moves:["Psycho Cut","Close Combat","Will-O-Wisp","Aerial Ace","Hypnosis","Disable","Psychic Terrain"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Psychic Terrain"}]}},{name:"Garchomp",region:m.Paldea,info:{moves:["Outrage","Earthquake","Flamethrower","Rock Slide","Swords Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Swords Dance"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Gardevoir",region:m.Paldea,info:{moves:["Moonblast","Psychic","Calm Mind","Thunder Wave","Misty Terrain","Psychic Terrain"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Uses Calm Mind"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Psychic Terrain"}]}},{name:"Garganacl",region:m.Paldea,info:{moves:["Stone Edge","Heavy Slam","Salt Cure","Hammer Arm","Sandstorm","Rock Slide"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sandstorm"},{type:a.Time,threshold:60,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Gengar",region:m.Paldea,info:{moves:["Shadow Ball","Sludge Bomb","Dazzling Gleam","Will-O-Wisp","Hypnosis"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.Time,threshold:85,action:"Uses Hypnosis"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Hypnosis"}]}},{name:"Glaceon",region:m.Paldea,info:{moves:["Tera Blast","Ice Beam","Blizzard","Charm","Snowscape","Calm Mind"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Snowscape"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Snowscape"}]}},{name:"Glimmora",region:m.Paldea,info:{moves:["Power Gem","Sludge Wave","Hyper Beam","Rock Polish","Sandstorm"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sandstorm"},{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:55,action:"Reduce Tera Orb Charge"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"}]}},{name:"Goodra",region:m.Paldea,info:{moves:["Dragon Pulse","Surf","Sludge Bomb","Power Whip","Rain Dance"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Rain Dance"}]}},{name:"Grafaiai",region:m.Paldea,info:{moves:["Knock Off","Gunk Shot","Take Down","Flatter","Toxic"],specialMoves:["Toxic"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Toxic"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Gunk Shot"}]}},{name:"Gyarados",region:m.Paldea,info:{moves:["Aqua Tail","Crunch","Hurricane","Ice Fang","Taunt","Dragon Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Taunt"},{type:a.HP,threshold:20,action:"Uses Dragon Dance"}]}},{name:"Haxorus",region:m.Paldea,info:{moves:["Outrage","Crunch","Giga Impact","First Impression","Dragon Dance"],specialMoves:["First Impression"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Dragon Dance"}]}},{name:"Heracross",region:m.Paldea,info:{moves:["Megahorn","Close Combat","Thrash","Leer","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:75,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Hippowdon",region:m.Paldea,info:{moves:["Earthquake","Ice Fang","Yawn","Rock Slide"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Yawn"},{type:a.HP,threshold:60,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Yawn"}]}},{name:"Hydreigon",region:m.Paldea,info:{moves:["Dark Pulse","Dragon Pulse","Crunch","Taunt","Work Up","Nasty Plot"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:85,action:"Uses Taunt"},{type:a.Time,threshold:75,action:"Uses Work Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Stats & Status Reset"},{type:a.Time,threshold:20,action:"Uses Nasty Plot"}]}},{name:"Jolteon",region:m.Paldea,info:{moves:["Tera Blast","Thunderbolt","Shadow Ball","Thunder Wave","Electric Terrain","Calm Mind"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Electric Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Kilowattrel",region:m.Paldea,info:{moves:["Hurricane","Thunder","Uproar","Scary Face","Charge","Rain Dance"],specialMoves:["Charge","Rain Dance"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Charge"},{type:a.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Kingambit",region:m.Paldea,info:{moves:["Iron Head","Night Slash","Kowtow Cleave","Thunder Wave","Swords Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.Time,threshold:65,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Klawf",region:m.Paldea,info:{moves:["Stone Edge","Rock Smash","X-Scissor","Sandstorm","Knock Off","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:80,action:"Uses Knock Off"},{type:a.HP,threshold:49,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Leafeon",region:m.Paldea,info:{moves:["Tera Blast","Leaf Blade","Double Kick","Charm","Sunny Day","Swords Dance"],specialMoves:["Double Kick"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Swords Dance"},{type:a.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Lycanroc",imageAlt:"-d",region:m.Paldea,info:{moves:["Accelerock","Rock Slide","Crunch","Taunt","Sandstorm"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Mabosstiff",region:m.Paldea,info:{moves:["Crunch","Reversal","Outrage","Take Down","Taunt"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:80,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Magnezone",region:m.Paldea,info:{moves:["Thunder","Flash Cannon","Tri Attack","Thunder Wave","Rain Dance","Iron Defense","Electric Terrain"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:80,action:"Uses Rain Dance"},{type:a.Time,threshold:75,action:"Uses Iron Defense"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Thunder Wave"},{type:a.Time,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Maushold",imageAlt:"-f",region:m.Paldea,info:{moves:["Play Rough","Take Down","Low Kick","Charm","Tidy Up"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Uses Charm"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Tidy Up"}]}},{name:"Mimikyu",region:m.Paldea,info:{moves:["Play Rough","Shadow Claw","Shadow Sneak","Wood Hammer","Misty Terrain","Swords Dance"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Misty Terrain"},{type:a.Time,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Orthworm",region:m.Paldea,info:{moves:["Iron Head","Earthquake","Smack Down","Sandstorm","Coil"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.Time,threshold:95,action:"Uses Coil"},{type:a.HP,threshold:80,action:"Uses Sandstorm"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Sandstorm"}]}},{name:"Pawmot",region:m.Paldea,info:{moves:["Wild Charge","Close Combat","Double Shock","Nuzzle","Electric Terrain"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:80,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Electric Terrain"}]}},{name:"Pelipper",region:m.Paldea,info:{moves:["Hurricane","Hydro Pump","Mist","Supersonic","Rain Dance","Agility"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Agility"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Pincurchin",region:m.Paldea,info:{moves:["Zing Zap","Thunder","Surf","Poison Jab","Thunder Wave","Electric Terrain"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:90,action:"Uses Thunder Wave"},{type:a.Time,threshold:65,action:"Uses Electric Terrain"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Revavroom",region:m.Paldea,info:{moves:["Gunk Shot","Overheat","Iron Head","Taunt","Scary Face","Shift Gear"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Uses Scary Face"},{type:a.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Shift Gear"},{type:a.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Salamence",region:m.Paldea,info:{moves:["Outrage","Dual Wingbeat","Flamethrower","Tera Blast","Dragon Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Dragon Dance"},{type:a.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Scizor",region:m.Paldea,info:{moves:["X-Scissor","Bullet Punch","Close Combat","Iron Head","Iron Defense","Focus Energy"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Uses Iron Defense"},{type:a.HP,threshold:75,action:"Uses Focus Energy"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Slowking",region:m.Paldea,info:{moves:["Surf","Psyshock","Trick Room","Flamethrower","Light Screen","Rain Dance","Calm Mind"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:70,action:"Uses Light Screen"},{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Trick Room"}]}},{name:"Staraptor",region:m.Paldea,info:{moves:["Close Combat","Brave Bird","Double-Edge","Feather Dance"],specialMoves:["Double-Edge","Feather Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Brave Bird"}]}},{name:"Sylveon",region:m.Paldea,info:{moves:["Tera Blast","Hyper Voice","Moonblast","Yawn","Misty Terrain","Calm Mind"],specialMoves:["Yawn"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Misty Terrain"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Misty Terrain"}]}},{name:"Talonflame",region:m.Paldea,info:{moves:["Brave Bird","Flare Blitz","Flamethrower","Tera Blast","Sunny Day","Swords Dance"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Tauros",formName:"taurospaldeacombat",imageAlt:"-p",region:m.Paldea,info:{moves:["Close Combat","Thrash","Zen Headbutt","Raging Bull","Bulk Up","Screech"],specialMoves:["Screech"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Screech"}]}},{name:"Tauros (Fire)",formName:"taurospaldeablaze",imageAlt:"-b",region:m.Paldea,info:{moves:["Flare Blitz","Close Combat","Flamethrower","Headbutt","Sunny Day","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Tauros (Water)",formName:"taurospaldeaaqua",imageAlt:"-a",region:m.Paldea,info:{moves:["Wave Crash","Close Combat","Surf","Headbutt","Rain Dance","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Tinkaton",region:m.Paldea,info:{moves:["Gigaton Hammer","Play Rough","Knock Off","Thunder Wave","Misty Terrain","Sweet Kiss"],specialMoves:["Misty Terrain"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.Time,threshold:90,action:"Uses Misty Terrain"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Sweet Kiss"},{type:a.HP,threshold:15,action:"Uses Sweet Kiss"}]}},{name:"Toedscruel",region:m.Paldea,info:{moves:["Energy Ball","Earth Power","Spore","Hex","Grassy Terrain"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Grassy Terrain"},{type:a.Time,threshold:75,action:"Uses Spore"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Spore"}]}},{name:"Torkoal",region:m.Paldea,info:{moves:["Lava Plume","Yawn","Clear Smog","Body Slam","Sunny Day","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Sunny Day"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Yawn"},{type:a.HP,threshold:20,action:"Uses Iron Defense"}]}},{name:"Toxapex",region:m.Paldea,info:{moves:["Water Pulse","Liquidation","Poison Jab","Pin Missile","Chilling Water","Toxic"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:a.HP,threshold:95,action:"Uses Chilling Water"},{type:a.Time,threshold:75,action:"Uses Toxic"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Chilling Water"}]}},{name:"Tyranitar",region:m.Paldea,info:{moves:["Stone Edge","Crunch","Screech","Rock Blast","Iron Defense"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Crunch"},{type:a.HP,threshold:20,action:"Uses Iron Defense"}]}},{name:"Umbreon",region:m.Paldea,info:{moves:["Tera Blast","Dark Pulse","Foul Play","Tickle","Calm Mind","Curse"],specialMoves:["Curse","Tickle"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Calm Mind"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Curse"},{type:a.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Vaporeon",region:m.Paldea,info:{moves:["Tera Blast","Surf","Hyper Voice","Yawn","Rain Dance","Calm Mind"],specialMoves:["Yawn"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:a.HP,threshold:90,action:"Uses Rain Dance"},{type:a.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"},{type:a.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Volcarona",region:m.Paldea,info:{moves:["Bug Buzz","Flamethrower","Hurricane","Tailwind","Amnesia","Sunny Day","Light Screen","Quiver Dance"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:a.HP,threshold:85,action:"Uses Amnesia"},{type:a.HP,threshold:75,action:"Uses Sunny Day"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Light Screen"},{type:a.Time,threshold:20,action:"Uses Quiver Dance"}]}},{name:"Ambipom",region:m.Kitakami,info:{moves:["Double Hit","Ice Punch","Fire Punch","Thunder Punch","Screech"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:89,action:"Uses Screech"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Uses Double Hit"}]}},{name:"Basculegion (Male)",formName:"basculegion",region:m.Kitakami,info:{moves:["Wave Crash","Aqua Jet","Crunch","Scary Face","Icy Wind","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Icy Wind"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Basculegion (Female)",formName:"basculegion",imageAlt:"-f",region:m.Kitakami,info:{moves:["Surf","Aqua Jet","Shadow Ball","Scary Face","Icy Wind","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Icy Wind"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:60,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Chandelure",region:m.Kitakami,info:{moves:["Flamethrower","Shadow Ball","Will-O-Wisp","Poltergeist","Heat Wave","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Heat Wave"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Sunny Day"},{type:a.HP,threshold:35,action:"Stats & Status Reset"}]}},{name:"Clefable",region:m.Kitakami,info:{moves:["Moonblast","Psychic","Meteor Mash","Encore","Dazzling Gleam","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Encore"},{type:a.HP,threshold:40,action:"Uses Dazzling Gleam"},{type:a.HP,threshold:41,action:"Uses Dazzling Gleam"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Conkeldurr",region:m.Kitakami,info:{moves:["Rock Slide","Close Combat","Mach Punch","Slam","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:89,action:"Uses Bulk Up"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:49,action:"Uses Bulk Up"},{type:a.Time,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Crawdaunt",region:m.Kitakami,info:{moves:["Aqua Jet","Crabhammer","Crunch","Giga Impact","Leer","Swords Dance"],specialMoves:["Aqua Jet"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Uses Leer"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Dusknoir",region:m.Kitakami,info:{moves:["Poltergeist","Dark Pulse","Will-O-Wisp","Ice Punch","Gravity","Spite"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Gravity"},{type:a.HP,threshold:70,action:"Uses Spite"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Spite"},{type:a.HP,threshold:10,action:"Stats & Status Reset"}]}},{name:"Gliscor",region:m.Kitakami,info:{moves:["Acrobatics","Knock Off","Quick Attack","Earthquake","Sandstorm","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Swords Dance"},{type:a.Time,threshold:15,action:"Uses Sandstorm"},{type:a.Time,threshold:5,action:"Uses Earthquake"}]}},{name:"Golem",region:m.Kitakami,info:{moves:["Earthquake","Rock Slide","Flail","Smack Down","Stone Edge","Iron Defense"],specialMoves:["Flail"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:85,action:"Uses Stone Edge"},{type:a.Time,threshold:45,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:29,action:"Uses Iron Defense"}]}},{name:"Kommo-o",formName:"kommoo",region:m.Kitakami,info:{moves:["Focus Blast","Dragon Claw","Iron Head","Scary Face","Clangorous Soul","Reversal"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.HP,threshold:60,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Clangorous Soul"},{type:a.HP,threshold:30,action:"Uses Clangorous Soul"},{type:a.Time,threshold:10,action:"Uses Reversal"}]}},{name:"Leavanny",region:m.Kitakami,info:{moves:["Leaf Blade","X-Scissor","Grassy Glide","Sticky Web","Grassy Terrain","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Grassy Terrain"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Ludicolo",region:m.Kitakami,info:{moves:["Energy Ball","Hydro Pump","Fake Out","Chilling Water","Rain Dance","Teeter Dance"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Rain Dance"},{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Uses Chilling Water"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.Time,threshold:20,action:"Uses Teeter Dance"}]}},{name:"Mamoswine",region:m.Kitakami,info:{moves:["Icicle Crash","Ice Shard","Bulldoze","Freeze-Dry","Snowscape","Amnesia","Earthquake"],specialMoves:["Freeze-Dry"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Uses Amnesia"},{type:a.HP,threshold:10,action:"Uses Earthquake"},{type:a.Time,threshold:45,action:"Reduce Tera Orb Charge"}]}},{name:"Mandibuzz",region:m.Kitakami,info:{moves:["Dual Wingbeat","Dark Pulse","Toxic","Bone Rush","Snarl"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Player Stats & Status Reset"},{type:a.HP,threshold:90,action:"Uses Snarl"},{type:a.HP,threshold:75,action:"Uses Snarl"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Snarl"}]}},{name:"Mienshao",region:m.Kitakami,info:{moves:["Aerial Ace","Brick Break","Aura Sphere","Reversal","Calm Mind"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:a.HP,threshold:90,action:"Uses Calm Mind"},{type:a.HP,threshold:65,action:"Player Stats & Status Reset"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.Time,threshold:20,action:"Uses Aura Sphere"}]}},{name:"Milotic",region:m.Kitakami,info:{moves:["Dragon Pulse","Water Pulse","Safeguard","Aqua Tail","Coil","Hypnosis","Rain Dance"],specialMoves:["Hypnosis"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:99,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Coil"},{type:a.HP,threshold:70,action:"Uses Hypnosis"},{type:a.Time,threshold:60,action:"Uses Rain Dance"},{type:a.Time,threshold:10,action:"Uses Hypnosis"}]}},{name:"Morpeko",region:m.Kitakami,info:{moves:["Aura Wheel","Lash Out","Thunder Wave","Torment","Taunt","Electric Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:75,action:"Uses Taunt"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Ninetales",region:m.Kitakami,info:{moves:["Flamethrower","Extrasensory","Will-O-Wisp","Burning Jealousy","Heat Wave","Sunny Day"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Heat Wave"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:25,action:"Uses Sunny Day"},{type:a.Time,threshold:10,action:"Uses Heat Wave"}]}},{name:"Politoed",region:m.Kitakami,info:{moves:["Chilling Water","Surf","Ice Beam","Encore","Amnesia"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Uses Chilling Water"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:30,action:"Stats & Status Reset"},{type:a.HP,threshold:29,action:"Uses Amnesia"}]}},{name:"Poliwrath",region:m.Kitakami,info:{moves:["Brick Break","Liquidation","Focus Blast","Haze","Rain Dance","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Uses Rain Dance"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:45,action:"Uses Bulk Up"},{type:a.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Quagsire",region:m.Kitakami,info:{moves:["Earthquake","Liquidation","Yawn","Toxic","Curse","Rain Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Uses Curse"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Rain Dance"}]}},{name:"Shiftry",region:m.Kitakami,info:{moves:["Leaf Blade","Sucker Punch","Fake Out","Extrasensory","Sunny Day","Trailblaze","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sunny Day"},{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:70,action:"Uses Trailblaze"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Sinistcha",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:15,action:"Uses Matcha Gotcha"},{type:a.Time,threshold:10,action:"Uses Matcha Gotcha"}]}},{name:"Sinistcha (Masterpiece)",formName:"sinistchamasterpiece",imageAlt:"-m",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:85,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Grassy Terrain"},{type:a.HP,threshold:40,action:"Uses Grassy Terrain"},{type:a.HP,threshold:15,action:"Uses Matcha Gotcha"},{type:a.Time,threshold:10,action:"Uses Matcha Gotcha"}]}},{name:"Snorlax",region:m.Kitakami,info:{moves:["Facade","Crunch","Yawn","Heavy Slam"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:70,action:"Stats & Status Reset"},{type:a.HP,threshold:40,action:"Stats & Status Reset"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Stats & Status Reset"}]}},{name:"Trevenant",region:m.Kitakami,info:{moves:["Wood Hammer","Shadow Claw","Forest's Curse","Will-O-Wisp","Grassy Terrain","Disable"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:100,action:"Uses Grassy Terrain"},{type:a.HP,threshold:75,action:"Uses Disable"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Wood Hammer"}]}},{name:"Yanmega",region:m.Kitakami,info:{moves:["Bug Buzz","Air Slash","Quick Attack","Ancient Power"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Ancient Power"},{type:a.HP,threshold:85,action:"Uses Ancient Power"},{type:a.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Ancient Power"}]}},{name:"Alcremie",region:m.Terarium,info:{moves:["Dazzling Gleam","Psychic","Encore","Psyshock","Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Uses Encore"},{type:a.HP,threshold:50,action:"Uses Acid Armor"},{type:a.HP,threshold:25,action:"Uses Acid Armor"},{type:a.Time,threshold:30,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Dugtrio",formName:"dugtrioalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Bulldoze","Iron Head","Ancient Power","Metal Claw","Sandstorm","Earthquake"],specialMoves:["Ancient Power"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Sandstorm"},{type:a.HP,threshold:25,action:"Uses Earthquake"}]}},{name:"Duraludon",region:m.Terarium,info:{moves:["Flash Cannon","Dragon Pulse","Breaking Swipe","Metal Claw","Stealth Rock","Light Screen","Reflect"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Stealth Rock"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Light Screen"},{type:a.HP,threshold:35,action:"Uses Reflect"}]}},{name:"Electivire",region:m.Terarium,info:{moves:["Discharge","Thunder Punch","Earthquake","Brick Break","Electric Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Electric Terrain"},{type:a.HP,threshold:70,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Electric Terrain"},{type:a.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Excadrill",region:m.Terarium,info:{moves:["Iron Head","Earthquake","Drill Run","Slash","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Sandstorm"},{type:a.Time,threshold:25,action:"Uses Sandstorm"}]}},{name:"Exeggutor",formName:"exeggutoralola",imageAlt:"-a",region:m.Terarium,info:{moves:["Dragon Hammer","Extrasensory","Seed Bomb","Hypnosis","Trick Room"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.HP,threshold:80,action:"Player Stats & Status Reset"},{type:a.HP,threshold:65,action:"Uses Hypnosis"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Trick Room"},{type:a.HP,threshold:33,action:"Player Stats & Status Reset"}]}},{name:"Flygon",region:m.Terarium,info:{moves:["Earthquake","Dragon Claw","Quick Attack","Breaking Swipe","Dragon Dance","Draco Meteor"],specialMoves:["Quick Attack"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.HP,threshold:79,action:"Uses Dragon Dance"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:45,action:"Uses Dragon Dance"},{type:a.HP,threshold:5,action:"Uses Draco Meteor"}]}},{name:"Golem",formName:"golemalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Heavy Slam","Body Slam","Rock Slide","Discharge","Giga Impact"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Rock Slide"},{type:a.HP,threshold:25,action:"Uses Giga Impact"}]}},{name:"Golurk",region:m.Terarium,info:{moves:["Dynamic Punch","Shadow Punch","Heavy Slam","Ice Punch","Curse"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Player Stats & Status Reset"},{type:a.HP,threshold:95,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Curse"},{type:a.HP,threshold:35,action:"Uses Curse"}]}},{name:"Kingdra",region:m.Terarium,info:{moves:["Draco Meteor","Dragon Pulse","Water Pulse","Flash Cannon","Focus Energy","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Focus Energy"},{type:a.HP,threshold:65,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Rain Dance"},{type:a.HP,threshold:5,action:"Uses Draco Meteor"}]}},{name:"Kleavor",region:m.Terarium,info:{moves:["X-Scissor","Close Combat","Air Cutter","Night Slash","Stone Axe","Swords Dance"],specialMoves:["Night Slash"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.HP,threshold:95,action:"Uses Stone Axe"},{type:a.HP,threshold:75,action:"Player Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:35,action:"Uses Swords Dance"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Lapras",region:m.Terarium,info:{moves:["Blizzard","Hydro Pump","Body Slam","Sing","Snowscape","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:50,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Rain Dance"},{type:a.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Magmortar",region:m.Terarium,info:{moves:["Lava Plume","Psychic","Scorching Sands","Taunt","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:95,action:"Uses Sunny Day"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Player Stats & Status Reset"},{type:a.HP,threshold:20,action:"Uses Lava Plume"}]}},{name:"Malamar",region:m.Terarium,info:{moves:["Psycho Cut","Night Slash","Foul Play","Pluck","Taunt","Topsy-Turvy"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Topsy-Turvy"},{type:a.HP,threshold:25,action:"Uses Topsy-Turvy"}]}},{name:"Metagross",region:m.Terarium,info:{moves:["Zen Headbutt","Iron Head","Heavy Slam","Aerial Ace","Agility","Hone Claws"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Agility"},{type:a.HP,threshold:80,action:"Uses Iron Head"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Hone Claws"},{type:a.HP,threshold:20,action:"Uses Hone Claws"}]}},{name:"Muk",formName:"mukalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Crunch","Hex","Gunk Shot","Flamethrower","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Ninetales",formName:"ninetalesalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Moonblast","Blizzard","Ice Shard","Dazzling Gleam","Aurora Veil","Calm Mind","Snowscape"],specialMoves:["Moonblast"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Aurora Veil"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Uses Calm Mind"},{type:a.HP,threshold:24,action:"Uses Snowscape"}]}},{name:"Overqwil",region:m.Terarium,info:{moves:["Barb Barrage","Crunch","Pin Missile","Fell Stinger","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Toxic"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Uses Barb Barrage"}]}},{name:"Porygon-Z",formName:"porygonz",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Thunder Wave","Trick Room"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Trick Room"},{type:a.HP,threshold:45,action:"Player Stats & Status Reset"}]}},{name:"Porygon2",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Thunder Wave","Trick Room"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:95,action:"Player Stats & Status Reset"},{type:a.HP,threshold:75,action:"Uses Thunder Wave"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Trick Room"},{type:a.HP,threshold:45,action:"Stats & Status Reset"}]}},{name:"Reuniclus",region:m.Terarium,info:{moves:["Psychic","Fire Punch","Swift","Rock Tomb","Reflect","Light Screen","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Reflect"},{type:a.HP,threshold:80,action:"Uses Light Screen"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Player Stats & Status Reset"},{type:a.HP,threshold:35,action:"Uses Calm Mind"}]}},{name:"Rhyperior",region:m.Terarium,info:{moves:["Earthquake","Rock Wrecker","Megahorn","Rock Polish","Sandstorm","Iron Defense"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Sandstorm"},{type:a.HP,threshold:50,action:"Uses Iron Defense"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:25,action:"Uses Rock Wrecker"},{type:a.HP,threshold:5,action:"Uses Earthquake"}]}},{name:"Sandslash",formName:"sandslashalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Ice Spinner","Iron Head","Earthquake","Triple Axel","Snowscape","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Snowscape"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:80,action:"Uses Swords Dance"},{type:a.HP,threshold:35,action:"Player Stats & Status Reset"}]}},{name:"Skarmory",region:m.Terarium,info:{moves:["Drill Peck","Steel Wing","Night Slash","Slash","Taunt","Iron Defense"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:45,action:"Uses Iron Defense"},{type:a.HP,threshold:44,action:"Player Stats & Status Reset"}]}},{name:"Slowbro",formName:"slowbrogalar",imageAlt:"-g",region:m.Terarium,info:{moves:["Shell Side Arm","Zen Headbutt","Chilling Water","Rock Blast","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Slowking",formName:"slowkinggalar",imageAlt:"-g",region:m.Terarium,info:{moves:["Eerie Spell","Power Gem","Yawn","Acid Spray","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.HP,threshold:90,action:"Stats & Status Reset"},{type:a.Time,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:50,action:"Uses Toxic"},{type:a.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Whimsicott",region:m.Terarium,info:{moves:["Energy Ball","Moonblast","Encore","Hurricane","Taunt"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:a.Time,threshold:100,action:"Uses Taunt"},{type:a.HP,threshold:80,action:"Stats & Status Reset"},{type:a.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:a.HP,threshold:40,action:"Stats & Status Reset"}]}}];var Zy=(()=>{class e{constructor(n){this.stateService=n}ngOnInit(){Object.keys(m).map(r=>{let o=document.createElement("option");o.value=r,o.text=m[r],o.text=="Paldea"&&(o.selected=!0,this.stateService.changeRegionList(o.value)),document.getElementById("regionList").add(o)})}valueChanged(){let n=document.getElementById("regionList"),r=n.selectedIndex,o=n.options[r];this.stateService.changeRegionList(o.value)}static{this.\u0275fac=function(r){return new(r||e)(W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-region"]],decls:3,vars:0,consts:[["id","regionList",3,"change"],["value",""]],template:function(r,o){r&1&&(Ce(0,"select",0),yt("change",function(){return o.valueChanged()}),Ce(1,"option",1),he(2,"-- Region --"),ze()())},encapsulation:2})}}return e})();function Eo(e){return e.toLowerCase().replace(/\w/,t=>t.toUpperCase())}function pn(e){(e?[e]:["pokemonTypes","pokemonImageNormal","pokemonImageShiny","pokemonAbility","pokemonStatsWrapper","pokemonActions","pokemonMoves","pokemonHerbs","pokemonTypeAdvantages","pokemonTeraWeaknesses","pokemonTeraAdvantages"]).forEach(n=>{let r=document.getElementById(n);r&&(r.innerHTML="")})}function de(e,t){e.innerHTML+=t}function os(e){return`<div class="typeMatchupText ${e.name}">${Eo(e.name)} - ${e.multiplier}x</div>`}function Zd(e,t,n){return String(e).padStart(t,n)}function To(e,t){if(!!!e)throw new Error(t)}function Jy(e){return typeof e=="object"&&e!==null}function Xy(e,t){if(!!!e)throw new Error(t??"Unexpected invariant triggered.")}var E0=/\r\n|[\n\r]/g;function wo(e,t){let n=0,r=1;for(let o of e.body.matchAll(E0)){if(typeof o.index=="number"||Xy(!1),o.index>=t)break;n=o.index+o[0].length,r+=1}return{line:r,column:t+1-n}}function Jd(e){return Cc(e.source,wo(e.source,e.start))}function Cc(e,t){let n=e.locationOffset.column-1,r="".padStart(n)+e.body,o=t.line-1,i=e.locationOffset.line-1,s=t.line+i,c=t.line===1?n:0,l=t.column+c,u=`${e.name}:${s}:${l}
`,d=r.split(/\r\n|[\n\r]/g),f=d[o];if(f.length>120){let h=Math.floor(l/80),p=l%80,v=[];for(let S=0;S<f.length;S+=80)v.push(f.slice(S,S+80));return u+ev([[`${s} |`,v[0]],...v.slice(1,h+1).map(S=>["|",S]),["|","^".padStart(p)],["|",v[h+1]]])}return u+ev([[`${s-1} |`,d[o-1]],[`${s} |`,f],["|","^".padStart(l)],[`${s+1} |`,d[o+1]]])}function ev(e){let t=e.filter(([r,o])=>o!==void 0),n=Math.max(...t.map(([r])=>r.length));return t.map(([r,o])=>r.padStart(n)+(o?" "+o:"")).join(`
`)}function T0(e){let t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}var Ic=class e extends Error{constructor(t,...n){var r,o,i;let{nodes:s,source:c,positions:l,path:u,originalError:d,extensions:f}=T0(n);super(t),this.name="GraphQLError",this.path=u??void 0,this.originalError=d??void 0,this.nodes=tv(Array.isArray(s)?s:s?[s]:void 0);let h=tv((r=this.nodes)===null||r===void 0?void 0:r.map(v=>v.loc).filter(v=>v!=null));this.source=c??(h==null||(o=h[0])===null||o===void 0?void 0:o.source),this.positions=l??h?.map(v=>v.start),this.locations=l&&c?l.map(v=>wo(c,v)):h?.map(v=>wo(v.source,v.start));let p=Jy(d?.extensions)?d?.extensions:void 0;this.extensions=(i=f??p)!==null&&i!==void 0?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),d!=null&&d.stack?Object.defineProperty(this,"stack",{value:d.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,e):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(let n of this.nodes)n.loc&&(t+=`

`+Jd(n.loc));else if(this.source&&this.locations)for(let n of this.locations)t+=`

`+Cc(this.source,n);return t}toJSON(){let t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}};function tv(e){return e===void 0||e.length===0?void 0:e}function Ee(e,t,n){return new Ic(`Syntax Error: ${n}`,{source:e,positions:[t]})}var Co=class{constructor(t,n,r){this.start=t.start,this.end=n.end,this.startToken=t,this.endToken=n,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}},Dr=class{constructor(t,n,r,o,i,s){this.kind=t,this.start=n,this.end=r,this.line=o,this.column=i,this.value=s,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}},Xd={Name:[],Document:["definitions"],OperationDefinition:["description","name","variableDefinitions","directives","selectionSet"],VariableDefinition:["description","variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["description","name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],TypeCoordinate:["name"],MemberCoordinate:["name","memberName"],ArgumentCoordinate:["name","fieldName","argumentName"],DirectiveCoordinate:["name"],DirectiveArgumentCoordinate:["name","argumentName"]},w0=new Set(Object.keys(Xd));function ef(e){let t=e?.kind;return typeof t=="string"&&w0.has(t)}var We=(function(e){return e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription",e})(We||{});var Rc=(function(e){return e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION",e})(Rc||{});var w=(function(e){return e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",e.TYPE_COORDINATE="TypeCoordinate",e.MEMBER_COORDINATE="MemberCoordinate",e.ARGUMENT_COORDINATE="ArgumentCoordinate",e.DIRECTIVE_COORDINATE="DirectiveCoordinate",e.DIRECTIVE_ARGUMENT_COORDINATE="DirectiveArgumentCoordinate",e})(w||{});function Pc(e){return e===9||e===32}function Io(e){return e>=48&&e<=57}function nv(e){return e>=97&&e<=122||e>=65&&e<=90}function tf(e){return nv(e)||e===95}function rv(e){return nv(e)||Io(e)||e===95}function ov(e){var t;let n=Number.MAX_SAFE_INTEGER,r=null,o=-1;for(let s=0;s<e.length;++s){var i;let c=e[s],l=C0(c);l!==c.length&&(r=(i=r)!==null&&i!==void 0?i:s,o=s,s!==0&&l<n&&(n=l))}return e.map((s,c)=>c===0?s:s.slice(n)).slice((t=r)!==null&&t!==void 0?t:0,o+1)}function C0(e){let t=0;for(;t<e.length&&Pc(e.charCodeAt(t));)++t;return t}function iv(e,t){let n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),o=r.length===1,i=r.length>1&&r.slice(1).every(p=>p.length===0||Pc(p.charCodeAt(0))),s=n.endsWith('\\"""'),c=e.endsWith('"')&&!s,l=e.endsWith("\\"),u=c||l,d=!(t!=null&&t.minimize)&&(!o||e.length>70||u||i||s),f="",h=o&&Pc(e.charCodeAt(0));return(d&&!h||i)&&(f+=`
`),f+=n,(d||u)&&(f+=`
`),'"""'+f+'"""'}var b=(function(e){return e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.DOT=".",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment",e})(b||{});var ss=class{constructor(t){let n=new Dr(b.SOF,0,0,0,0);this.source=t,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==b.EOF)do if(t.next)t=t.next;else{let n=I0(this,t.end);t.next=n,n.prev=t,t=n}while(t.kind===b.COMMENT);return t}};function av(e){return e===b.BANG||e===b.DOLLAR||e===b.AMP||e===b.PAREN_L||e===b.PAREN_R||e===b.DOT||e===b.SPREAD||e===b.COLON||e===b.EQUALS||e===b.AT||e===b.BRACKET_L||e===b.BRACKET_R||e===b.BRACE_L||e===b.PIPE||e===b.BRACE_R}function Ro(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function Mc(e,t){return cv(e.charCodeAt(t))&&lv(e.charCodeAt(t+1))}function cv(e){return e>=55296&&e<=56319}function lv(e){return e>=56320&&e<=57343}function br(e,t){let n=e.source.body.codePointAt(t);if(n===void 0)return b.EOF;if(n>=32&&n<=126){let r=String.fromCodePoint(n);return r==='"'?`'"'`:`"${r}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function Ie(e,t,n,r,o){let i=e.line,s=1+n-e.lineStart;return new Dr(t,n,r,i,s,o)}function I0(e,t){let n=e.source.body,r=n.length,o=t;for(;o<r;){let i=n.charCodeAt(o);switch(i){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++e.line,e.lineStart=o;continue;case 13:n.charCodeAt(o+1)===10?o+=2:++o,++e.line,e.lineStart=o;continue;case 35:return R0(e,o);case 33:return Ie(e,b.BANG,o,o+1);case 36:return Ie(e,b.DOLLAR,o,o+1);case 38:return Ie(e,b.AMP,o,o+1);case 40:return Ie(e,b.PAREN_L,o,o+1);case 41:return Ie(e,b.PAREN_R,o,o+1);case 46:if(n.charCodeAt(o+1)===46&&n.charCodeAt(o+2)===46)return Ie(e,b.SPREAD,o,o+3);break;case 58:return Ie(e,b.COLON,o,o+1);case 61:return Ie(e,b.EQUALS,o,o+1);case 64:return Ie(e,b.AT,o,o+1);case 91:return Ie(e,b.BRACKET_L,o,o+1);case 93:return Ie(e,b.BRACKET_R,o,o+1);case 123:return Ie(e,b.BRACE_L,o,o+1);case 124:return Ie(e,b.PIPE,o,o+1);case 125:return Ie(e,b.BRACE_R,o,o+1);case 34:return n.charCodeAt(o+1)===34&&n.charCodeAt(o+2)===34?x0(e,o):M0(e,o)}if(Io(i)||i===45)return P0(e,o,i);if(tf(i))return A0(e,o);throw Ee(e.source,o,i===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Ro(i)||Mc(n,o)?`Unexpected character: ${br(e,o)}.`:`Invalid character: ${br(e,o)}.`)}return Ie(e,b.EOF,r,r)}function R0(e,t){let n=e.source.body,r=n.length,o=t+1;for(;o<r;){let i=n.charCodeAt(o);if(i===10||i===13)break;if(Ro(i))++o;else if(Mc(n,o))o+=2;else break}return Ie(e,b.COMMENT,t,o,n.slice(t+1,o))}function P0(e,t,n){let r=e.source.body,o=t,i=n,s=!1;if(i===45&&(i=r.charCodeAt(++o)),i===48){if(i=r.charCodeAt(++o),Io(i))throw Ee(e.source,o,`Invalid number, unexpected digit after 0: ${br(e,o)}.`)}else o=nf(e,o,i),i=r.charCodeAt(o);if(i===46&&(s=!0,i=r.charCodeAt(++o),o=nf(e,o,i),i=r.charCodeAt(o)),(i===69||i===101)&&(s=!0,i=r.charCodeAt(++o),(i===43||i===45)&&(i=r.charCodeAt(++o)),o=nf(e,o,i),i=r.charCodeAt(o)),i===46||tf(i))throw Ee(e.source,o,`Invalid number, expected digit but got: ${br(e,o)}.`);return Ie(e,s?b.FLOAT:b.INT,t,o,r.slice(t,o))}function nf(e,t,n){if(!Io(n))throw Ee(e.source,t,`Invalid number, expected digit but got: ${br(e,t)}.`);let r=e.source.body,o=t+1;for(;Io(r.charCodeAt(o));)++o;return o}function M0(e,t){let n=e.source.body,r=n.length,o=t+1,i=o,s="";for(;o<r;){let c=n.charCodeAt(o);if(c===34)return s+=n.slice(i,o),Ie(e,b.STRING,t,o+1,s);if(c===92){s+=n.slice(i,o);let l=n.charCodeAt(o+1)===117?n.charCodeAt(o+2)===123?_0(e,o):k0(e,o):N0(e,o);s+=l.value,o+=l.size,i=o;continue}if(c===10||c===13)break;if(Ro(c))++o;else if(Mc(n,o))o+=2;else throw Ee(e.source,o,`Invalid character within String: ${br(e,o)}.`)}throw Ee(e.source,o,"Unterminated string.")}function _0(e,t){let n=e.source.body,r=0,o=3;for(;o<12;){let i=n.charCodeAt(t+o++);if(i===125){if(o<5||!Ro(r))break;return{value:String.fromCodePoint(r),size:o}}if(r=r<<4|is(i),r<0)break}throw Ee(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+o)}".`)}function k0(e,t){let n=e.source.body,r=sv(n,t+2);if(Ro(r))return{value:String.fromCodePoint(r),size:6};if(cv(r)&&n.charCodeAt(t+6)===92&&n.charCodeAt(t+7)===117){let o=sv(n,t+8);if(lv(o))return{value:String.fromCodePoint(r,o),size:12}}throw Ee(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function sv(e,t){return is(e.charCodeAt(t))<<12|is(e.charCodeAt(t+1))<<8|is(e.charCodeAt(t+2))<<4|is(e.charCodeAt(t+3))}function is(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function N0(e,t){let n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Ee(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function x0(e,t){let n=e.source.body,r=n.length,o=e.lineStart,i=t+3,s=i,c="",l=[];for(;i<r;){let u=n.charCodeAt(i);if(u===34&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34){c+=n.slice(s,i),l.push(c);let d=Ie(e,b.BLOCK_STRING,t,i+3,ov(l).join(`
`));return e.line+=l.length-1,e.lineStart=o,d}if(u===92&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34&&n.charCodeAt(i+3)===34){c+=n.slice(s,i),s=i+1,i+=4;continue}if(u===10||u===13){c+=n.slice(s,i),l.push(c),u===13&&n.charCodeAt(i+1)===10?i+=2:++i,c="",s=i,o=i;continue}if(Ro(u))++i;else if(Mc(n,i))i+=2;else throw Ee(e.source,i,`Invalid character within String: ${br(e,i)}.`)}throw Ee(e.source,i,"Unterminated string.")}function A0(e,t){let n=e.source.body,r=n.length,o=t+1;for(;o<r;){let i=n.charCodeAt(o);if(rv(i))++o;else break}return Ie(e,b.NAME,t,o,n.slice(t,o))}function Po(e){return _c(e,[])}function _c(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return O0(e,t);default:return String(e)}}function O0(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";let n=[...t,e];if(F0(e)){let r=e.toJSON();if(r!==e)return typeof r=="string"?r:_c(r,n)}else if(Array.isArray(e))return H0(e,n);return L0(e,n)}function F0(e){return typeof e.toJSON=="function"}function L0(e,t){let n=Object.entries(e);return n.length===0?"{}":t.length>2?"["+U0(e)+"]":"{ "+n.map(([o,i])=>o+": "+_c(i,t)).join(", ")+" }"}function H0(e,t){if(e.length===0)return"[]";if(t.length>2)return"[Array]";let n=Math.min(10,e.length),r=e.length-n,o=[];for(let i=0;i<n;++i)o.push(_c(e[i],t));return r===1?o.push("... 1 more item"):r>1&&o.push(`... ${r} more items`),"["+o.join(", ")+"]"}function U0(e){let t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){let n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}var j0=globalThis.process&&!0,uv=j0?function(t,n){return t instanceof n}:function(t,n){if(t instanceof n)return!0;if(typeof t=="object"&&t!==null){var r;let o=n.prototype[Symbol.toStringTag],i=Symbol.toStringTag in t?t[Symbol.toStringTag]:(r=t.constructor)===null||r===void 0?void 0:r.name;if(o===i){let s=Po(t);throw new Error(`Cannot use ${o} "${s}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};var Mo=class{constructor(t,n="GraphQL request",r={line:1,column:1}){typeof t=="string"||To(!1,`Body must be a string. Received: ${Po(t)}.`),this.body=t,this.name=n,this.locationOffset=r,this.locationOffset.line>0||To(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||To(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}};function dv(e){return uv(e,Mo)}function Nc(e,t){let n=new rf(e,t),r=n.parseDocument();return Object.defineProperty(r,"tokenCount",{enumerable:!1,value:n.tokenCount}),r}var rf=class{constructor(t,n={}){let i=n,{lexer:r}=i,o=ve(i,["lexer"]);if(r)this._lexer=r;else{let s=dv(t)?t:new Mo(t);this._lexer=new ss(s)}this._options=o,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){let t=this.expectToken(b.NAME);return this.node(t,{kind:w.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:w.DOCUMENT,definitions:this.many(b.SOF,this.parseDefinition,b.EOF)})}parseDefinition(){if(this.peek(b.BRACE_L))return this.parseOperationDefinition();let t=this.peekDescription(),n=t?this._lexer.lookahead():this._lexer.token;if(t&&n.kind===b.BRACE_L)throw Ee(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are not supported on shorthand queries.");if(n.kind===b.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition()}if(t)throw Ee(this._lexer.source,this._lexer.token.start,"Unexpected description, only GraphQL definitions support descriptions.");if(n.value==="extend")return this.parseTypeSystemExtension()}throw this.unexpected(n)}parseOperationDefinition(){let t=this._lexer.token;if(this.peek(b.BRACE_L))return this.node(t,{kind:w.OPERATION_DEFINITION,operation:We.QUERY,description:void 0,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});let n=this.parseDescription(),r=this.parseOperationType(),o;return this.peek(b.NAME)&&(o=this.parseName()),this.node(t,{kind:w.OPERATION_DEFINITION,operation:r,description:n,name:o,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){let t=this.expectToken(b.NAME);switch(t.value){case"query":return We.QUERY;case"mutation":return We.MUTATION;case"subscription":return We.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(b.PAREN_L,this.parseVariableDefinition,b.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:w.VARIABLE_DEFINITION,description:this.parseDescription(),variable:this.parseVariable(),type:(this.expectToken(b.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(b.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){let t=this._lexer.token;return this.expectToken(b.DOLLAR),this.node(t,{kind:w.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:w.SELECTION_SET,selections:this.many(b.BRACE_L,this.parseSelection,b.BRACE_R)})}parseSelection(){return this.peek(b.SPREAD)?this.parseFragment():this.parseField()}parseField(){let t=this._lexer.token,n=this.parseName(),r,o;return this.expectOptionalToken(b.COLON)?(r=n,o=this.parseName()):o=n,this.node(t,{kind:w.FIELD,alias:r,name:o,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(b.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){let n=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(b.PAREN_L,n,b.PAREN_R)}parseArgument(t=!1){let n=this._lexer.token,r=this.parseName();return this.expectToken(b.COLON),this.node(n,{kind:w.ARGUMENT,name:r,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){let t=this._lexer.token;this.expectToken(b.SPREAD);let n=this.expectOptionalKeyword("on");return!n&&this.peek(b.NAME)?this.node(t,{kind:w.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:w.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){let t=this._lexer.token,n=this.parseDescription();return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:w.FRAGMENT_DEFINITION,description:n,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:w.FRAGMENT_DEFINITION,description:n,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){let n=this._lexer.token;switch(n.kind){case b.BRACKET_L:return this.parseList(t);case b.BRACE_L:return this.parseObject(t);case b.INT:return this.advanceLexer(),this.node(n,{kind:w.INT,value:n.value});case b.FLOAT:return this.advanceLexer(),this.node(n,{kind:w.FLOAT,value:n.value});case b.STRING:case b.BLOCK_STRING:return this.parseStringLiteral();case b.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:w.BOOLEAN,value:!0});case"false":return this.node(n,{kind:w.BOOLEAN,value:!1});case"null":return this.node(n,{kind:w.NULL});default:return this.node(n,{kind:w.ENUM,value:n.value})}case b.DOLLAR:if(t)if(this.expectToken(b.DOLLAR),this._lexer.token.kind===b.NAME){let r=this._lexer.token.value;throw Ee(this._lexer.source,n.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){let t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:w.STRING,value:t.value,block:t.kind===b.BLOCK_STRING})}parseList(t){let n=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:w.LIST,values:this.any(b.BRACKET_L,n,b.BRACKET_R)})}parseObject(t){let n=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:w.OBJECT,fields:this.any(b.BRACE_L,n,b.BRACE_R)})}parseObjectField(t){let n=this._lexer.token,r=this.parseName();return this.expectToken(b.COLON),this.node(n,{kind:w.OBJECT_FIELD,name:r,value:this.parseValueLiteral(t)})}parseDirectives(t){let n=[];for(;this.peek(b.AT);)n.push(this.parseDirective(t));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){let n=this._lexer.token;return this.expectToken(b.AT),this.node(n,{kind:w.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){let t=this._lexer.token,n;if(this.expectOptionalToken(b.BRACKET_L)){let r=this.parseTypeReference();this.expectToken(b.BRACKET_R),n=this.node(t,{kind:w.LIST_TYPE,type:r})}else n=this.parseNamedType();return this.expectOptionalToken(b.BANG)?this.node(t,{kind:w.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:w.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(b.STRING)||this.peek(b.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");let r=this.parseConstDirectives(),o=this.many(b.BRACE_L,this.parseOperationTypeDefinition,b.BRACE_R);return this.node(t,{kind:w.SCHEMA_DEFINITION,description:n,directives:r,operationTypes:o})}parseOperationTypeDefinition(){let t=this._lexer.token,n=this.parseOperationType();this.expectToken(b.COLON);let r=this.parseNamedType();return this.node(t,{kind:w.OPERATION_TYPE_DEFINITION,operation:n,type:r})}parseScalarTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");let r=this.parseName(),o=this.parseConstDirectives();return this.node(t,{kind:w.SCALAR_TYPE_DEFINITION,description:n,name:r,directives:o})}parseObjectTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");let r=this.parseName(),o=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(t,{kind:w.OBJECT_TYPE_DEFINITION,description:n,name:r,interfaces:o,directives:i,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(b.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(b.BRACE_L,this.parseFieldDefinition,b.BRACE_R)}parseFieldDefinition(){let t=this._lexer.token,n=this.parseDescription(),r=this.parseName(),o=this.parseArgumentDefs();this.expectToken(b.COLON);let i=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(t,{kind:w.FIELD_DEFINITION,description:n,name:r,arguments:o,type:i,directives:s})}parseArgumentDefs(){return this.optionalMany(b.PAREN_L,this.parseInputValueDef,b.PAREN_R)}parseInputValueDef(){let t=this._lexer.token,n=this.parseDescription(),r=this.parseName();this.expectToken(b.COLON);let o=this.parseTypeReference(),i;this.expectOptionalToken(b.EQUALS)&&(i=this.parseConstValueLiteral());let s=this.parseConstDirectives();return this.node(t,{kind:w.INPUT_VALUE_DEFINITION,description:n,name:r,type:o,defaultValue:i,directives:s})}parseInterfaceTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");let r=this.parseName(),o=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(t,{kind:w.INTERFACE_TYPE_DEFINITION,description:n,name:r,interfaces:o,directives:i,fields:s})}parseUnionTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseUnionMemberTypes();return this.node(t,{kind:w.UNION_TYPE_DEFINITION,description:n,name:r,directives:o,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(b.EQUALS)?this.delimitedMany(b.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();return this.node(t,{kind:w.ENUM_TYPE_DEFINITION,description:n,name:r,directives:o,values:i})}parseEnumValuesDefinition(){return this.optionalMany(b.BRACE_L,this.parseEnumValueDefinition,b.BRACE_R)}parseEnumValueDefinition(){let t=this._lexer.token,n=this.parseDescription(),r=this.parseEnumValueName(),o=this.parseConstDirectives();return this.node(t,{kind:w.ENUM_VALUE_DEFINITION,description:n,name:r,directives:o})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Ee(this._lexer.source,this._lexer.token.start,`${kc(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();return this.node(t,{kind:w.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:r,directives:o,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(b.BRACE_L,this.parseInputValueDef,b.BRACE_R)}parseTypeSystemExtension(){let t=this._lexer.lookahead();if(t.kind===b.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");let n=this.parseConstDirectives(),r=this.optionalMany(b.BRACE_L,this.parseOperationTypeDefinition,b.BRACE_R);if(n.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:w.SCHEMA_EXTENSION,directives:n,operationTypes:r})}parseScalarTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");let n=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(t,{kind:w.SCALAR_TYPE_EXTENSION,name:n,directives:r})}parseObjectTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");let n=this.parseName(),r=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(r.length===0&&o.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:w.OBJECT_TYPE_EXTENSION,name:n,interfaces:r,directives:o,fields:i})}parseInterfaceTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");let n=this.parseName(),r=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(r.length===0&&o.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:w.INTERFACE_TYPE_EXTENSION,name:n,interfaces:r,directives:o,fields:i})}parseUnionTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseUnionMemberTypes();if(r.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:w.UNION_TYPE_EXTENSION,name:n,directives:r,types:o})}parseEnumTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();if(r.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:w.ENUM_TYPE_EXTENSION,name:n,directives:r,values:o})}parseInputObjectTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();if(r.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:w.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:r,fields:o})}parseDirectiveDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(b.AT);let r=this.parseName(),o=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");let s=this.parseDirectiveLocations();return this.node(t,{kind:w.DIRECTIVE_DEFINITION,description:n,name:r,arguments:o,repeatable:i,locations:s})}parseDirectiveLocations(){return this.delimitedMany(b.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){let t=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(Rc,n.value))return n;throw this.unexpected(t)}parseSchemaCoordinate(){let t=this._lexer.token,n=this.expectOptionalToken(b.AT),r=this.parseName(),o;!n&&this.expectOptionalToken(b.DOT)&&(o=this.parseName());let i;return(n||o)&&this.expectOptionalToken(b.PAREN_L)&&(i=this.parseName(),this.expectToken(b.COLON),this.expectToken(b.PAREN_R)),n?i?this.node(t,{kind:w.DIRECTIVE_ARGUMENT_COORDINATE,name:r,argumentName:i}):this.node(t,{kind:w.DIRECTIVE_COORDINATE,name:r}):o?i?this.node(t,{kind:w.ARGUMENT_COORDINATE,name:r,fieldName:o,argumentName:i}):this.node(t,{kind:w.MEMBER_COORDINATE,name:r,memberName:o}):this.node(t,{kind:w.TYPE_COORDINATE,name:r})}node(t,n){return this._options.noLocation!==!0&&(n.loc=new Co(t,this._lexer.lastToken,this._lexer.source)),n}peek(t){return this._lexer.token.kind===t}expectToken(t){let n=this._lexer.token;if(n.kind===t)return this.advanceLexer(),n;throw Ee(this._lexer.source,n.start,`Expected ${fv(t)}, found ${kc(n)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){let n=this._lexer.token;if(n.kind===b.NAME&&n.value===t)this.advanceLexer();else throw Ee(this._lexer.source,n.start,`Expected "${t}", found ${kc(n)}.`)}expectOptionalKeyword(t){let n=this._lexer.token;return n.kind===b.NAME&&n.value===t?(this.advanceLexer(),!0):!1}unexpected(t){let n=t??this._lexer.token;return Ee(this._lexer.source,n.start,`Unexpected ${kc(n)}.`)}any(t,n,r){this.expectToken(t);let o=[];for(;!this.expectOptionalToken(r);)o.push(n.call(this));return o}optionalMany(t,n,r){if(this.expectOptionalToken(t)){let o=[];do o.push(n.call(this));while(!this.expectOptionalToken(r));return o}return[]}many(t,n,r){this.expectToken(t);let o=[];do o.push(n.call(this));while(!this.expectOptionalToken(r));return o}delimitedMany(t,n){this.expectOptionalToken(t);let r=[];do r.push(n.call(this));while(this.expectOptionalToken(t));return r}advanceLexer(){let{maxTokens:t}=this._options,n=this._lexer.advance();if(n.kind!==b.EOF&&(++this._tokenCounter,t!==void 0&&this._tokenCounter>t))throw Ee(this._lexer.source,n.start,`Document contains more that ${t} tokens. Parsing aborted.`)}};function kc(e){let t=e.value;return fv(e.kind)+(t!=null?` "${t}"`:"")}function fv(e){return av(e)?`"${e}"`:e}function hv(e){return`"${e.replace(B0,V0)}"`}var B0=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function V0(e){return $0[e.charCodeAt(0)]}var $0=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"];var mn=Object.freeze({});function Re(e,t,n=Xd){let r=new Map;for(let D of Object.values(w))r.set(D,of(t,D));let o,i=Array.isArray(e),s=[e],c=-1,l=[],u=e,d,f,h=[],p=[];do{c++;let D=c===s.length,E=D&&l.length!==0;if(D){if(d=p.length===0?void 0:h[h.length-1],u=f,f=p.pop(),E)if(i){u=u.slice();let R=0;for(let[N,ye]of l){let Qe=N-R;ye===null?(u.splice(Qe,1),R++):u[Qe]=ye}}else{u=g({},u);for(let[R,N]of l)u[R]=N}c=o.index,s=o.keys,l=o.edits,i=o.inArray,o=o.prev}else if(f){if(d=i?c:s[c],u=f[d],u==null)continue;h.push(d)}let _;if(!Array.isArray(u)){var v,S;ef(u)||To(!1,`Invalid AST Node: ${Po(u)}.`);let R=D?(v=r.get(u.kind))===null||v===void 0?void 0:v.leave:(S=r.get(u.kind))===null||S===void 0?void 0:S.enter;if(_=R?.call(t,u,d,f,h,p),_===mn)break;if(_===!1){if(!D){h.pop();continue}}else if(_!==void 0&&(l.push([d,_]),!D))if(ef(_))u=_;else{h.pop();continue}}if(_===void 0&&E&&l.push([d,u]),D)h.pop();else{var y;o={inArray:i,index:c,keys:s,edits:l,prev:o},i=Array.isArray(u),s=i?u:(y=n[u.kind])!==null&&y!==void 0?y:[],c=-1,l=[],f&&p.push(f),f=u}}while(o!==void 0);return l.length!==0?l[l.length-1][1]:e}function of(e,t){let n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function _o(e){return Re(e,W0)}var z0=80,W0={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>P(e.definitions,`

`)},OperationDefinition:{leave(e){let t=sf(e.variableDefinitions)?B(`(
`,P(e.variableDefinitions,`
`),`
)`):B("(",P(e.variableDefinitions,", "),")"),n=B("",e.description,`
`)+P([e.operation,P([e.name,t]),P(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r,description:o})=>B("",o,`
`)+e+": "+t+B(" = ",n)+B(" ",P(r," "))},SelectionSet:{leave:({selections:e})=>Mt(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:o}){let i=B("",e,": ")+t,s=i+B("(",P(n,", "),")");return s.length>z0&&(s=i+B(`(
`,xc(P(n,`
`)),`
)`)),P([s,P(r," "),o]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+B(" ",P(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>P(["...",B("on ",e),P(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:o,description:i})=>B("",i,`
`)+`fragment ${e}${B("(",P(n,", "),")")} on ${t} ${B("",P(r," ")," ")}`+o},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?iv(e):hv(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+P(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+P(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+B("(",P(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>B("",e,`
`)+P(["schema",P(t," "),Mt(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>B("",e,`
`)+P(["scalar",t,P(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:o})=>B("",e,`
`)+P(["type",t,B("implements ",P(n," & ")),P(r," "),Mt(o)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:o})=>B("",e,`
`)+t+(sf(n)?B(`(
`,xc(P(n,`
`)),`
)`):B("(",P(n,", "),")"))+": "+r+B(" ",P(o," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:o})=>B("",e,`
`)+P([t+": "+n,B("= ",r),P(o," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:o})=>B("",e,`
`)+P(["interface",t,B("implements ",P(n," & ")),P(r," "),Mt(o)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>B("",e,`
`)+P(["union",t,P(n," "),B("= ",P(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>B("",e,`
`)+P(["enum",t,P(n," "),Mt(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>B("",e,`
`)+P([t,P(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>B("",e,`
`)+P(["input",t,P(n," "),Mt(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,repeatable:r,locations:o})=>B("",e,`
`)+"directive @"+t+(sf(n)?B(`(
`,xc(P(n,`
`)),`
)`):B("(",P(n,", "),")"))+(r?" repeatable":"")+" on "+P(o," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>P(["extend schema",P(e," "),Mt(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>P(["extend scalar",e,P(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>P(["extend type",e,B("implements ",P(t," & ")),P(n," "),Mt(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>P(["extend interface",e,B("implements ",P(t," & ")),P(n," "),Mt(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>P(["extend union",e,P(t," "),B("= ",P(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>P(["extend enum",e,P(t," "),Mt(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>P(["extend input",e,P(t," "),Mt(n)]," ")},TypeCoordinate:{leave:({name:e})=>e},MemberCoordinate:{leave:({name:e,memberName:t})=>P([e,B(".",t)])},ArgumentCoordinate:{leave:({name:e,fieldName:t,argumentName:n})=>P([e,B(".",t),B("(",n,":)")])},DirectiveCoordinate:{leave:({name:e})=>P(["@",e])},DirectiveArgumentCoordinate:{leave:({name:e,argumentName:t})=>P(["@",e,B("(",t,":)")])}};function P(e,t=""){var n;return(n=e?.filter(r=>r).join(t))!==null&&n!==void 0?n:""}function Mt(e){return B(`{
`,xc(P(e,`
`)),`
}`)}function B(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function xc(e){return B("  ",e.replace(/\n/g,`
  `))}function sf(e){var t;return(t=e?.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}function Er(e){try{return e()}catch(t){}}var ko=Er(()=>globalThis)||Er(()=>window)||Er(()=>self)||Er(()=>global)||Er(function(){return Er.constructor("return this")()});var as="4.1.6";var pv=new Map;function cs(e){let t=pv.get(e)||1;return pv.set(e,t+1),`${e}:${t}:${Math.random().toString(36).slice(2)}`}function ls(e,t=0){let n=cs("stringifyForDisplay");return JSON.stringify(e,(r,o)=>o===void 0?n:o,t).split(JSON.stringify(n)).join("<undefined>")}var mv="Invariant Violation",af=class e extends Error{constructor(t=mv){super(t),this.name=mv,Object.setPrototypeOf(this,e.prototype)}},yv=["debug","log","warn","error","silent"],J0=yv.indexOf("silent");function T(e,...t){if(!e)throw me(...t)}function Ac(e){return function(t,...n){if(yv.indexOf(e)>=J0){let r=console[e]||console.log;if(typeof t=="number"){let o=t;t=vv(o),t||(t=Sv(o,n),n=[])}r(t,...n)}}}T.debug=Ac("debug");T.log=Ac("log");T.warn=Ac("warn");T.error=Ac("error");function me(e,...t){return new af(vv(e,t)||Sv(e,t))}var gv=Symbol.for("ApolloErrorMessageHandler_"+as);function cf(e){if(typeof e=="string")return e;try{return ls(e,2).slice(0,1e3)}catch(t){return"<non-serializable>"}}function vv(e,t=[]){if(e)return ko[gv]&&ko[gv](e,t.map(cf))}function Sv(e,t=[]){if(e)return typeof e=="string"?t.reduce((n,r)=>n.replace(/%[sdfo]/,cf(r)),e):`An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#${encodeURIComponent(JSON.stringify({version:as,message:e,args:t.map(cf)}))}`}function gn(e,t,n,r){if(n.kind===w.INT||n.kind===w.FLOAT)e[t.value]=Number(n.value);else if(n.kind===w.BOOLEAN||n.kind===w.STRING)e[t.value]=n.value;else if(n.kind===w.OBJECT){let o={};n.fields.map(i=>gn(o,i.name,i.value,r)),e[t.value]=o}else if(n.kind===w.VARIABLE){let o=(r||{})[n.name.value];e[t.value]=o}else if(n.kind===w.LIST)e[t.value]=n.values.map(o=>{let i={};return gn(i,t,o,r),i[t.value]});else if(n.kind===w.ENUM)e[t.value]=n.value;else if(n.kind===w.NULL)e[t.value]=null;else throw me(19,t.value,n.kind)}function Tr(e,t){if(e.arguments&&e.arguments.length){let n={};return e.arguments.forEach(({name:r,value:o})=>gn(n,r,o,t)),n}return null}var X0=Symbol.for("apollo.cacheSize"),Me=g({},ko[X0]);function xe(e,t){return e.definitions.find(n=>n.kind==="OperationDefinition"&&!!n.name)?.name.value??t}var eI=()=>Object.create(null),{forEach:tI,slice:Dv}=Array.prototype,{hasOwnProperty:nI}=Object.prototype,Fe=class e{constructor(t=!0,n=eI){this.weakness=t,this.makeData=n}lookup(){return this.lookupArray(arguments)}lookupArray(t){let n=this;return tI.call(t,r=>n=n.getChildTrie(r)),nI.call(n,"data")?n.data:n.data=this.makeData(Dv.call(t))}peek(){return this.peekArray(arguments)}peekArray(t){let n=this;for(let r=0,o=t.length;n&&r<o;++r){let i=n.mapFor(t[r],!1);n=i&&i.get(t[r])}return n&&n.data}remove(){return this.removeArray(arguments)}removeArray(t){let n;if(t.length){let r=t[0],o=this.mapFor(r,!1),i=o&&o.get(r);i&&(n=i.removeArray(Dv.call(t,1)),!i.data&&!i.weak&&!(i.strong&&i.strong.size)&&o.delete(r))}else n=this.data,delete this.data;return n}getChildTrie(t){let n=this.mapFor(t,!0),r=n.get(t);return r||n.set(t,r=new e(this.weakness,this.makeData)),r}mapFor(t,n){return this.weakness&&rI(t)?this.weak||(n?this.weak=new WeakMap:void 0):this.strong||(n?this.strong=new Map:void 0)}};function rI(e){switch(typeof e){case"object":if(e===null)break;case"function":return!0}return!1}function oI(){}var Fn=class{constructor(t=1/0,n=oI){this.max=t,this.dispose=n,this.map=new Map,this.newest=null,this.oldest=null}has(t){return this.map.has(t)}get(t){let n=this.getNode(t);return n&&n.value}get size(){return this.map.size}getNode(t){let n=this.map.get(t);if(n&&n!==this.newest){let{older:r,newer:o}=n;o&&(o.older=r),r&&(r.newer=o),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=o)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(t,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(t){let n=this.map.get(t);return n?(n===this.newest&&(this.newest=n.older),n===this.oldest&&(this.oldest=n.newer),n.newer&&(n.newer.older=n.older),n.older&&(n.older.newer=n.newer),this.map.delete(t),this.dispose(n.value,t),!0):!1}};function lf(){}var iI=lf,sI=typeof WeakRef<"u"?WeakRef:function(e){return{deref:()=>e}},aI=typeof WeakMap<"u"?WeakMap:Map,cI=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:lf,unregister:lf}},lI=10024,Gt=class{constructor(t=1/0,n=iI){this.max=t,this.dispose=n,this.map=new aI,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{let r=this.unfinalizedNodes.values();for(let o=0;o<lI;o++){let i=r.next().value;if(!i)break;this.unfinalizedNodes.delete(i);let s=i.key;delete i.key,i.keyRef=new sI(s),this.registry.register(s,i,i)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new cI(this.deleteNode.bind(this))}has(t){return this.map.has(t)}get(t){let n=this.getNode(t);return n&&n.value}getNode(t){let n=this.map.get(t);if(n&&n!==this.newest){let{older:r,newer:o}=n;o&&(o.older=r),r&&(r.newer=o),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=o)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.scheduleFinalization(r),this.map.set(t,r),this.size++,r.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(t){t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.size--;let n=t.key||t.keyRef&&t.keyRef.deref();this.dispose(t.value,n),t.keyRef?this.registry.unregister(t):this.unfinalizedNodes.delete(t),n&&this.map.delete(n)}delete(t){let n=this.map.get(t);return n?(this.deleteNode(n),!0):!1}scheduleFinalization(t){this.unfinalizedNodes.add(t),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}};var uf=new WeakSet;function bv(e){e.size<=(e.max||-1)||uf.has(e)||(uf.add(e),setTimeout(()=>{e.clean(),uf.delete(e)},100))}var wr=function(e,t){let n=new Gt(e,t);return n.set=function(r,o){let i=Gt.prototype.set.call(this,r,o);return bv(this),i},n},df=function(e,t){let n=new Fn(e,t);return n.set=function(r,o){let i=Fn.prototype.set.call(this,r,o);return bv(this),i},n};function Oc(e,{max:t,makeCacheKey:n=r=>r}){let r=new Fe(!0),o=new wr(t);return(...i)=>{let s=r.lookupArray(n(i)),c=o.get(s);if(c){if(c.error)throw c.error;return c.result}let l=o.set(s,{});try{return l.result=e(...i)}catch(u){throw l.error=u,u}}}var qe=Oc((e,t)=>{T(e&&e.kind==="Document",1);let n=e.definitions.filter(r=>r.kind==="OperationDefinition");!1,t&&T(n.length==1&&n[0].operation===t,4,t,t,n[0].operation),Re(e,{Field(r,o,i,s){if(r.alias&&(r.alias.value==="__typename"||r.alias.value.startsWith("__ac_"))&&r.alias.value!==r.name.value){let c=e,l=[];for(let u of s)c=c[u],c.kind===w.FIELD&&l.push(c.alias?.value||c.name.value);throw l.splice(-1,1,r.name.value),me(5,r.alias.value,l.join("."),n[0].operation,xe(e,"(anonymous)"))}}})},{max:Me.checkDocument||2e3});var{toString:uI}=Object.prototype;function hf(e){return ff(e)}function ff(e,t){switch(uI.call(e)){case"[object Array]":{if(t=t||new Map,t.has(e))return t.get(e);let n=e.slice(0);return t.set(e,n),n.forEach(function(r,o){n[o]=ff(r,t)}),n}case"[object Object]":{if(t=t||new Map,t.has(e))return t.get(e);let n=Object.create(Object.getPrototypeOf(e));return t.set(e,n),Object.keys(e).forEach(r=>{n[r]=ff(e[r],t)}),n}default:return e}}function pf(e){return e.length===0?le:new F(t=>{let{length:n}=e,r=new Array(n),o=new Map;e.forEach((l,u)=>{o.has(l)||o.set(l,new Set),o.get(l).add(u)});let i=o.size,s=o.size,c;o.forEach((l,u)=>{let d=!1,f=u.subscribe({next:h=>{l.forEach(p=>r[p]=h),d||(d=!0,s--),s||(c||=new Set(e.filter(p=>p.dirty)),c.delete(u),c.size||(t.next(r.slice()),c=void 0))},complete:()=>{i--,i||t.complete()},error:t.error.bind(t)});t.add(f)})})}function vt(...e){let t={};return e.forEach(n=>{n&&Reflect.ownKeys(n).forEach(r=>{let o=n[r];o!==void 0&&(t[r]=o)})}),t}function _t(e=[]){let t={};return e.forEach(n=>{t[n.name.value]=n}),t}function ue(e){return e!==null&&typeof e=="object"}var{hasOwnProperty:dI}=Object.prototype,fI=function(e,t,n){return this.merge(e[n],t[n])},Ev=e=>isNaN(+e)?{}:[],nt=class{options;reconciler;constructor(t={}){this.options=t,this.reconciler=t.reconciler||fI}merge(t,n,r={}){let o=r.atPath;if(o?.length){let[i,...s]=o;t===void 0&&(t=Ev(i));let c=t[i];c===void 0&&s.length&&(c=Ev(s[0]));let l=this.merge(c,n,C(g({},r),{atPath:s}));return c!==l&&(t=this.shallowCopyForMerge(t),t[i]=l),t}return Array.isArray(t)&&Array.isArray(n)&&this.options.arrayMerge==="truncate"&&t.length>n.length&&(t=t.slice(0,n.length),this.pastCopies.add(t)),ue(n)&&ue(t)?(Object.keys(n).forEach(i=>{if(dI.call(t,i)){let s=t[i];if(n[i]!==s){let c=this.reconciler(t,n,i);c!==s&&(t=this.shallowCopyForMerge(t),t[i]=c)}}else t=this.shallowCopyForMerge(t),t[i]=n[i]}),t):n}isObject=ue;pastCopies=new Set;shallowCopyForMerge(t){return ue(t)&&(this.pastCopies.has(t)||(Array.isArray(t)?t=t.slice(0):t=g({__proto__:Object.getPrototypeOf(t)},t),this.pastCopies.add(t))),t}};function Cr(e){let t={},n=e&&e.variableDefinitions;return n&&n.length&&n.forEach(r=>{r.defaultValue&&gn(t,r.variable.name,r.defaultValue)}),t}function Ln(e,t){switch(e.kind){case"InlineFragment":return e;case"FragmentSpread":{let n=e.name.value;if(typeof t=="function")return t(n);let r=t&&t[n];return T(r,9,n),r||null}default:return null}}function mf(e,t){let n=t,r=[];return e.definitions.forEach(i=>{if(i.kind==="OperationDefinition")throw me(10,i.operation,i.name?` named '${i.name.value}'`:"");i.kind==="FragmentDefinition"&&r.push(i)}),typeof n>"u"&&(T(r.length===1,11,r.length),n=r[0].name.value),C(g({},e),{definitions:[{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:n}}]}},...e.definitions]})}function us(e){T(e.kind==="Document",6),T(e.definitions.length<=1,7);let t=e.definitions[0];return T(t.kind==="FragmentDefinition",8),t}function kt(e){return e.definitions.filter(t=>t.kind==="FragmentDefinition")}function No(e){qe(e);let t;for(let n of e.definitions){if(n.kind==="OperationDefinition")return n;n.kind==="FragmentDefinition"&&!t&&(t=n)}if(t)return t;throw me(12)}function Le(e){return qe(e),e.definitions.filter(t=>t.kind==="OperationDefinition")[0]}function ds(e){let t=Le(e);return T(t&&t.operation==="query",13),t}var hI={};function fs(e,t){hI[e]=t}var Ae=Object.assign(function(t){return JSON.stringify(t,pI)},{reset(){xo=new df(Me.canonicalStringify||1e3)}});!1;var xo;Ae.reset();function pI(e,t){if(t&&typeof t=="object"){let n=Object.getPrototypeOf(t);if(n===Object.prototype||n===null){let r=Object.keys(t);if(r.every(mI))return t;let o=JSON.stringify(r),i=xo.get(o);if(!i){r.sort();let c=JSON.stringify(r);i=xo.get(c)||r,xo.set(o,i),xo.set(c,i)}let s=Object.create(n);return i.forEach(c=>{s[c]=t[c]}),s}}return t}function mI(e,t,n){return t===0||n[t-1]<=e}var gI=["connection","include","skip","client","rest","export","nonreactive","stream"],hs=Ae,ps=Object.assign(function(e,t,n){if(t&&n&&n.connection&&n.connection.key){if(n.connection.filter&&n.connection.filter.length>0){let o=n.connection.filter?n.connection.filter:[];o.sort();let i={};o.forEach(c=>{i[c]=t[c]});let s=hs(i);if(s!=="{}")return`${n.connection.key}(${s})`}return n.connection.key}let r=e;if(t){let o=hs(t);o!=="{}"&&(r+=`(${o})`)}return n&&Object.keys(n).forEach(o=>{gI.indexOf(o)===-1&&(n[o]&&Object.keys(n[o]).length?r+=`@${o}(${hs(n[o])})`:r+=`@${o}`)}),r},{setStringify(e){let t=hs;return hs=e,t}});function yn(e){return!!e.errors?.length}function Qt(e,t,n){let r=new Set(e),o=r.size;return Re(t,{Directive(i){if(r.delete(i.name.value)&&(!n||!r.size))return mn}}),n?!r.size:r.size<o}function gf(e){let t=!1;return Re(e,{Directive:{enter(n){if(n.name.value==="client"&&n.arguments&&(t=n.arguments.some(r=>r.name.value==="always"&&r.value.kind==="BooleanValue"&&r.value.value===!0),t))return mn}}}),t}var se=Array.isArray;function yf(e){return ue(e)&&e.kind==="Document"&&Array.isArray(e.definitions)}function Kt(e){return e.kind==="Field"}function Ir(e){return Array.isArray(e)&&e.length>0}function Yt(e){return{__ref:String(e)}}function Tv(e){let t=new Set([e]);return t.forEach(n=>{ue(n)&&yI(n)===n&&Object.getOwnPropertyNames(n).forEach(r=>{ue(n[r])&&t.add(n[r])})}),e}function yI(e){if(!1)try{Object.freeze(e)}catch(t){if(t instanceof TypeError)return null;throw t}return e}function Hn(e){return!1,e}function vf(e){let t=e[0]||{},n=e.length;if(n>1){let r=new nt;for(let o=1;o<n;++o)t=r.merge(t,e[o])}return t}function Rr(e,t){return vt(e,t,t.variables&&{variables:vt(g(g({},e&&e.variables),t.variables))})}function Fc(e){return e.catch(()=>{}),e}function Sf(e,t){qe(t);let n=wv(""),r=wv(""),o=y=>{for(let D=0,E;D<y.length&&(E=y[D]);++D)if(!se(E)){if(E.kind===w.OPERATION_DEFINITION)return n(E.name&&E.name.value);if(E.kind===w.FRAGMENT_DEFINITION)return r(E.name.value)}return T.error(14),null},i=0;for(let y=t.definitions.length-1;y>=0;--y)t.definitions[y].kind===w.OPERATION_DEFINITION&&++i;let s=vI(e),c=y=>Ir(y)&&y.map(s).some(D=>D&&D.remove),l=new Map,u=!1,d={enter(y){if(c(y.directives))return u=!0,null}},f=Re(t,{Field:d,InlineFragment:d,VariableDefinition:{enter(){return!1}},Variable:{enter(y,D,E,_,R){let N=o(R);N&&N.variables.add(y.name.value)}},FragmentSpread:{enter(y,D,E,_,R){if(c(y.directives))return u=!0,null;let N=o(R);N&&N.fragmentSpreads.add(y.name.value)}},FragmentDefinition:{enter(y,D,E,_){l.set(JSON.stringify(_),y)},leave(y,D,E,_){let R=l.get(JSON.stringify(_));if(y===R)return y;if(i>0&&y.selectionSet.selections.every(N=>N.kind===w.FIELD&&N.name.value==="__typename"))return r(y.name.value).removed=!0,u=!0,null}},Directive:{leave(y){if(s(y))return u=!0,null}}});if(!u)return t;let h=y=>(y.transitiveVars||(y.transitiveVars=new Set(y.variables),y.removed||y.fragmentSpreads.forEach(D=>{h(r(D)).transitiveVars.forEach(E=>{y.transitiveVars.add(E)})})),y),p=new Set;f.definitions.forEach(y=>{y.kind===w.OPERATION_DEFINITION?h(n(y.name&&y.name.value)).fragmentSpreads.forEach(D=>{p.add(D)}):y.kind===w.FRAGMENT_DEFINITION&&i===0&&!r(y.name.value).removed&&p.add(y.name.value)}),p.forEach(y=>{h(r(y)).fragmentSpreads.forEach(D=>{p.add(D)})});let v=y=>!!(!p.has(y)||r(y).removed),S={enter(y){if(v(y.name.value))return null}};return SI(Re(f,{FragmentSpread:S,FragmentDefinition:S,OperationDefinition:{leave(y){if(y.variableDefinitions){let D=h(n(y.name&&y.name.value)).transitiveVars;if(D.size<y.variableDefinitions.length)return C(g({},y),{variableDefinitions:y.variableDefinitions.filter(E=>D.has(E.variable.name.value))})}}}}))}function wv(e){let t=new Map;return function(r=e){let o=t.get(r);return o||t.set(r,o={variables:new Set,fragmentSpreads:new Set}),o}}function vI(e){let t=new Map,n=new Map;return e.forEach(r=>{r&&(r.name?t.set(r.name,r):r.test&&n.set(r.test,r))}),r=>{let o=t.get(r.name.value);return!o&&n.size&&n.forEach((i,s)=>{s(r)&&(o=i)}),o}}function Cv(e,t){return!e||e.selectionSet.selections.every(n=>n.kind===w.FRAGMENT_SPREAD&&Cv(t[n.name.value],t))}function SI(e){return Cv(Le(e)||us(e),_t(kt(e)))?null:e}function Df(e){return Re(e,{FragmentSpread(t){if(!t.directives?.some(({name:n})=>n.value==="unmask"))return null}})}function lt(e){return e.alias?e.alias.value:e.name.value}function vn({directives:e},t){return!e||!e.length?!0:bI(e).every(({directive:n,ifArgument:r})=>{let o=!1;return r.value.kind==="Variable"?(o=t&&t[r.value.name.value],T(o!==void 0,15,n.name.value)):o=r.value.value,n.name.value==="skip"?!o:o})}function DI({name:{value:e}}){return e==="skip"||e==="include"}function bI(e){let t=[];return e&&e.length&&e.forEach(n=>{if(!DI(n))return;let r=n.arguments,o=n.name.value;T(r&&r.length===1,16,o);let i=r[0];T(i.name&&i.name.value==="if",17,o);let s=i.value;T(s&&(s.kind==="Variable"||s.kind==="BooleanValue"),18,o),t.push({directive:n,ifArgument:i})}),t}function bf(e,t){let n=null;e.directives&&(n={},e.directives.forEach(o=>{n[o.name.value]={},o.arguments&&o.arguments.forEach(({name:i,value:s})=>gn(n[o.name.value],i,s,t))}));let r=null;return e.arguments&&e.arguments.length&&(r={},e.arguments.forEach(({name:o,value:i})=>gn(r,o,i,t))),ps(e.name.value,r,n)}function Un(e){let t={data:e.data};return e.error&&(t.error=e.error),t}function Ao(e,t=()=>{}){return n=>new F(r=>{let o=t();return n.subscribe({next(i){let s;try{s=e(i,o)}catch(c){r.error(c)}s!==void 0&&r.next(s)},error(i){r.error(i)},complete(){r.complete()}})})}var{toString:Iv,hasOwnProperty:EI}=Object.prototype,Rv=Function.prototype.toString,Ef=new Map;function K(e,t){try{return Tf(e,t)}finally{Ef.clear()}}function Tf(e,t){if(e===t)return!0;let n=Iv.call(e),r=Iv.call(t);if(n!==r)return!1;switch(n){case"[object Array]":if(e.length!==t.length)return!1;case"[object Object]":{if(Mv(e,t))return!0;let o=Pv(e),i=Pv(t),s=o.length;if(s!==i.length)return!1;for(let c=0;c<s;++c)if(!EI.call(t,o[c]))return!1;for(let c=0;c<s;++c){let l=o[c];if(!Tf(e[l],t[l]))return!1}return!0}case"[object Error]":return e.name===t.name&&e.message===t.message;case"[object Number]":if(e!==e)return t!==t;case"[object Boolean]":case"[object Date]":return+e==+t;case"[object RegExp]":case"[object String]":return e==`${t}`;case"[object Map]":case"[object Set]":{if(e.size!==t.size)return!1;if(Mv(e,t))return!0;let o=e.entries(),i=n==="[object Map]";for(;;){let s=o.next();if(s.done)break;let[c,l]=s.value;if(!t.has(c)||i&&!Tf(l,t.get(c)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":e=new Uint8Array(e),t=new Uint8Array(t);case"[object DataView]":{let o=e.byteLength;if(o===t.byteLength)for(;o--&&e[o]===t[o];);return o===-1}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{let o=Rv.call(e);return o!==Rv.call(t)?!1:!CI(o,wI)}}return!1}function Pv(e){return Object.keys(e).filter(TI,e)}function TI(e){return this[e]!==void 0}var wI="{ [native code] }";function CI(e,t){let n=e.length-t.length;return n>=0&&e.indexOf(t,n)===n}function Mv(e,t){let n=Ef.get(e);if(n){if(n.has(t))return!0}else Ef.set(e,n=new Set);return n.add(t),!1}function ms(e,s,l,i){var c=s,{data:t}=c,n=ve(c,["data"]);var u=l,{data:r}=u,o=ve(u,["data"]);return K(n,o)&&Lc(No(e).selectionSet,t,r,{fragmentMap:_t(kt(e)),variables:i})}function Lc(e,t,n,r){if(t===n)return!0;let o=new Set;return e.selections.every(i=>{if(o.has(i)||(o.add(i),!vn(i,r.variables))||_v(i))return!0;if(Kt(i)){let s=lt(i),c=t&&t[s],l=n&&n[s],u=i.selectionSet;if(!u)return K(c,l);let d=Array.isArray(c),f=Array.isArray(l);if(d!==f)return!1;if(d&&f){let h=c.length;if(l.length!==h)return!1;for(let p=0;p<h;++p)if(!Lc(u,c[p],l[p],r))return!1;return!0}return Lc(u,c,l,r)}else{let s=Ln(i,r.fragmentMap);if(s)return _v(s)?!0:Lc(s.selectionSet,t,n,r)}})}function _v(e){return!!e.directives&&e.directives.some(II)}function II(e){return e.name.value==="nonreactive"}function RI(e,t){let n,r;function o(i){return i!==n&&(n=i,r=t(n)),r}return Object.assign(e.pipe(L(o),er({bufferSize:1,refCount:!0})),{getCurrentResult:()=>o(e.getCurrentResult())})}var gs=Oc(function(t,n,r){return RI(t,r)},{max:1,makeCacheKey:e=>e.slice(0,2)});var ys=Symbol.for("apollo.result.extensions"),ut=Symbol.for("apollo.result.streamInfo"),wf=Symbol.for("apollo.observableQuery.variablesUnknown");var He=null,kv={},PI=1,MI=()=>class{constructor(){this.id=["slot",PI++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let t=He;t;t=t.parent)if(this.id in t.slots){let n=t.slots[this.id];if(n===kv)break;return t!==He&&(He.slots[this.id]=n),!0}return He&&(He.slots[this.id]=kv),!1}getValue(){if(this.hasValue())return He.slots[this.id]}withValue(t,n,r,o){let i={__proto__:null,[this.id]:t},s=He;He={parent:s,slots:i};try{return n.apply(o,r)}finally{He=s}}static bind(t){let n=He;return function(){let r=He;try{return He=n,t.apply(this,arguments)}finally{He=r}}}static noContext(t,n,r){if(He){let o=He;try{return He=null,t.apply(r,n)}finally{He=o}}else return t.apply(r,n)}};function Nv(e){try{return e()}catch(t){}}var Cf="@wry/context:Slot",_I=Nv(()=>globalThis)||Nv(()=>global)||Object.create(null),xv=_I,Sn=xv[Cf]||Array[Cf]||(function(e){try{Object.defineProperty(xv,Cf,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}})(MI());var{bind:Av,noContext:Ov}=Sn;var Pr=new Sn;var{hasOwnProperty:Fv}=Object.prototype,vs=Array.from||function(e){let t=[];return e.forEach(n=>t.push(n)),t};function Oo(e){let{unsubscribe:t}=e;typeof t=="function"&&(e.unsubscribe=void 0,t())}var Ss=[],xI=100;function Fo(e,t){if(!e)throw new Error(t||"assertion failure")}function Hv(e,t){let n=e.length;return n>0&&n===t.length&&e[n-1]===t[n-1]}function Uv(e){switch(e.length){case 0:throw new Error("unknown value");case 1:return e[0];case 2:throw e[1]}}function jv(e){return e.slice(0)}var Bv=(()=>{class e{constructor(n){this.fn=n,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++e.count}peek(){if(this.value.length===1&&!jn(this))return Lv(this),this.value[0]}recompute(n){return Fo(!this.recomputing,"already recomputing"),Lv(this),jn(this)?AI(this,n):Uv(this.value)}setDirty(){this.dirty||(this.dirty=!0,Vv(this),Oo(this))}dispose(){this.setDirty(),Gv(this),If(this,(n,r)=>{n.setDirty(),Qv(n,this)})}forget(){this.dispose()}dependOn(n){n.add(this),this.deps||(this.deps=Ss.pop()||new Set),this.deps.add(n)}forgetDeps(){this.deps&&(vs(this.deps).forEach(n=>n.delete(this)),this.deps.clear(),Ss.push(this.deps),this.deps=null)}}return e.count=0,e})();function Lv(e){let t=Pr.getValue();if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),jn(e)?zv(t,e):Wv(t,e),t}function AI(e,t){return Gv(e),Pr.withValue(e,OI,[e,t]),LI(e,t)&&FI(e),Uv(e.value)}function OI(e,t){e.recomputing=!0;let{normalizeResult:n}=e,r;n&&e.value.length===1&&(r=jv(e.value)),e.value.length=0;try{if(e.value[0]=e.fn.apply(null,t),n&&r&&!Hv(r,e.value))try{e.value[0]=n(e.value[0],r[0])}catch(o){}}catch(o){e.value[1]=o}e.recomputing=!1}function jn(e){return e.dirty||!!(e.dirtyChildren&&e.dirtyChildren.size)}function FI(e){e.dirty=!1,!jn(e)&&$v(e)}function Vv(e){If(e,zv)}function $v(e){If(e,Wv)}function If(e,t){let n=e.parents.size;if(n){let r=vs(e.parents);for(let o=0;o<n;++o)t(r[o],e)}}function zv(e,t){Fo(e.childValues.has(t)),Fo(jn(t));let n=!jn(e);if(!e.dirtyChildren)e.dirtyChildren=Ss.pop()||new Set;else if(e.dirtyChildren.has(t))return;e.dirtyChildren.add(t),n&&Vv(e)}function Wv(e,t){Fo(e.childValues.has(t)),Fo(!jn(t));let n=e.childValues.get(t);n.length===0?e.childValues.set(t,jv(t.value)):Hv(n,t.value)||e.setDirty(),qv(e,t),!jn(e)&&$v(e)}function qv(e,t){let n=e.dirtyChildren;n&&(n.delete(t),n.size===0&&(Ss.length<xI&&Ss.push(n),e.dirtyChildren=null))}function Gv(e){e.childValues.size>0&&e.childValues.forEach((t,n)=>{Qv(e,n)}),e.forgetDeps(),Fo(e.dirtyChildren===null)}function Qv(e,t){t.parents.delete(e),e.childValues.delete(t),qv(e,t)}function LI(e,t){if(typeof e.subscribe=="function")try{Oo(e),e.unsubscribe=e.subscribe.apply(null,t)}catch(n){return e.setDirty(),!1}return!0}var HI={setDirty:!0,dispose:!0,forget:!0};function Ds(e){let t=new Map,n=e&&e.subscribe;function r(o){let i=Pr.getValue();if(i){let s=t.get(o);s||t.set(o,s=new Set),i.dependOn(s),typeof n=="function"&&(Oo(s),s.unsubscribe=n(o))}}return r.dirty=function(i,s){let c=t.get(i);if(c){let l=s&&Fv.call(HI,s)?s:"setDirty";vs(c).forEach(u=>u[l]()),t.delete(i),Oo(c)}},r}var Kv;function Pf(...e){return(Kv||(Kv=new Fe(typeof WeakMap=="function"))).lookupArray(e)}var Rf=new Set;function Dn(e,{max:t=Math.pow(2,16),keyArgs:n,makeCacheKey:r=Pf,normalizeResult:o,subscribe:i,cache:s=Fn}=Object.create(null)){let c=typeof s=="function"?new s(t,h=>h.dispose()):s,l=function(){let h=r.apply(null,n?n.apply(null,arguments):arguments);if(h===void 0)return e.apply(null,arguments);let p=c.get(h);p||(c.set(h,p=new Bv(e)),p.normalizeResult=o,p.subscribe=i,p.forget=()=>c.delete(h));let v=p.recompute(Array.prototype.slice.call(arguments));return c.set(h,p),Rf.add(c),Pr.hasValue()||(Rf.forEach(S=>S.clean()),Rf.clear()),v};Object.defineProperty(l,"size",{get:()=>c.size,configurable:!1,enumerable:!1}),Object.freeze(l.options={max:t,keyArgs:n,makeCacheKey:r,normalizeResult:o,subscribe:i,cache:c});function u(h){let p=h&&c.get(h);p&&p.setDirty()}l.dirtyKey=u,l.dirty=function(){u(r.apply(null,arguments))};function d(h){let p=h&&c.get(h);if(p)return p.peek()}l.peekKey=d,l.peek=function(){return d(r.apply(null,arguments))};function f(h){return h?c.delete(h):!1}return l.forgetKey=f,l.forget=function(){return f(r.apply(null,arguments))},l.makeCacheKey=r,l.getKey=n?function(){return r.apply(null,n.apply(null,arguments))}:r,Object.freeze(l)}function Mf(...e){return Pf.bind(null,...e)}function _f(){throw new Error("only supported in development mode")}var Yv=_f,Zv=_f,Jv=_f;var bs=class{isIncrementalResult(t){return!1}prepareRequest(t){return T(!Qt(["defer","stream"],t.query),67),t}extractErrors(){}startRequest=void 0};function kf(e,{client:t}){let n={query:e.query,variables:e.variables||{},extensions:e.extensions||{},operationName:xe(e.query),operationType:Le(e.query).operation},r=g({},e.context),o=s=>{typeof s=="function"?r=g(g({},r),s(i())):r=g(g({},r),s)},i=()=>Object.freeze(g({},r));return Object.defineProperty(n,"setContext",{enumerable:!1,value:o}),Object.defineProperty(n,"getContext",{enumerable:!1,value:i}),Object.defineProperty(n,"client",{enumerable:!1,value:t}),n}var Bn=class e{static empty(){return new e(()=>le)}static from(t){if(t.length===0)return e.empty();let[n,...r]=t;return n.concat(...r)}static split(t,n,r=new e((o,i)=>i(o))){let o=new e((i,s)=>{let c=t(i);return!1,c?n.request(i,s):r.request(i,s)});return Object.assign(o,{left:n,right:r})}static execute(t,n,r){return t.request(kf(n,r),()=>(!1,le))}static concat(...t){return e.from(t)}constructor(t){t&&(this.request=t)}split(t,n,r){return this.concat(e.split(t,n,r))}concat(...t){return t.length===0?this:t.reduce(this.combine.bind(this),this)}combine(t,n){let r=new e((o,i)=>t.request(o,s=>n.request(s,i)));return Object.assign(r,{left:t,right:n})}request(t,n){throw me(65)}left;right};var Mr=Bn.execute;function UI(e){return e}var bn=class e{transform;cached;resultCache=new WeakSet;getCacheKey(t){return[t]}static identity(){return new e(UI,{cache:!1})}static split(t,n,r=e.identity()){return Object.assign(new e(o=>(t(o)?n:r).transformDocument(o),{cache:!1}),{left:n,right:r})}constructor(t,n={}){this.transform=t,n.getCacheKey&&(this.getCacheKey=n.getCacheKey),this.cached=n.cache!==!1,this.resetCache()}resetCache(){if(this.cached){let t=new Fe;this.performWork=Dn(e.prototype.performWork.bind(this),{makeCacheKey:n=>{let r=this.getCacheKey(n);if(r)return T(Array.isArray(r),20),t.lookupArray(r)},max:Me["documentTransform.cache"],cache:Gt})}}performWork(t){return qe(t),this.transform(t)}transformDocument(t){if(this.resultCache.has(t))return t;let n=this.performWork(t);return this.resultCache.add(n),n}concat(t){return Object.assign(new e(n=>t.transformDocument(this.transformDocument(n)),{cache:!1}),{left:this,right:t})}left;right};var Es,Vn=Object.assign(e=>{let t=Es.get(e);return t||(t=_o(e),Es.set(e,t)),t},{reset(){Es=new wr(Me.print||2e3)}});Vn.reset();!1;function G(e){return!!(e&&typeof e=="object"&&typeof e.__ref=="string")}var Xv={kind:w.FIELD,name:{kind:w.NAME,value:"__typename"}},_r=Object.assign(function(e){return Re(e,{SelectionSet:{enter(t,n,r){if(r&&r.kind===w.OPERATION_DEFINITION)return;let{selections:o}=t;if(!o||o.some(c=>c.kind===w.FIELD&&(c.name.value==="__typename"||c.name.value.lastIndexOf("__",0)===0)))return;let s=r;if(!(s.kind===w.FIELD&&s.directives&&s.directives.some(c=>c.name.value==="export")))return C(g({},t),{selections:[...o,Xv]})}}})},{added(e){return e===Xv}});function Ts(e){return e===7||e===8}function kr(e){return!Ts(e)}var Lo=class{assumeImmutableResults=!1;lookupFragment(t){return null}batch(t){let n=typeof t.optimistic=="string"?t.optimistic:t.optimistic===!1?null:void 0,r;return this.performTransaction(()=>r=t.update(this),n),r}recordOptimisticTransaction(t,n){this.performTransaction(t,n)}transformDocument(t){return t}transformForLink(t){return t}identify(t){}gc(){return[]}modify(t){return!1}readQuery(t,n=!!t.optimistic){return this.read(C(g({},t),{rootId:t.id||"ROOT_QUERY",optimistic:n}))}fragmentWatches=new Fe(!0);watchFragment(t){let{fragment:n,fragmentName:r,from:o}=t,i=this.getFragmentDoc(n,r),c=(Array.isArray(o)?o:[o]).map(p=>{let v=p==null?p:this.toCacheId(p);if(!1){let S=r||us(n).name.value;v===void 0&&!1&&T.warn(113,S)}return v});if(!Array.isArray(o)){let p=this.watchSingleFragment(c[0],i,t);return o===null?p:gs(p,Symbol.for("apollo.transform.individualResult"),v=>C(g({},v),{data:v.data??{}}))}let l;function u(p){let v=p.reduce((S,y,D)=>(S.data.push(y.data),S.complete&&=y.complete,S.dataState=S.complete?"complete":"partial",y.missing&&(S.missing||={},S.missing[D]=y.missing),S),{data:[],dataState:"complete",complete:!0});return K(l,v)||(l=v),l}if(c.length===0)return BI;let d=!1,f=c.map(p=>this.watchSingleFragment(p,i,t)),h=pf(f).pipe(L(u),be({subscribe:()=>d=!0,unsubscribe:()=>d=!1}),er({bufferSize:1,refCount:!0}));return Object.assign(h,{getCurrentResult:()=>{if(d&&l)return l;let p=f.map(v=>v.getCurrentResult());return u(p)}})}onAfterBroadcast=t=>t();watchSingleFragment(t,n,r){if(t===null)return jI;let{optimistic:o=!0,variables:i}=r,s=[n,Ae({id:t,optimistic:o,variables:i})],c=this.fragmentWatches.lookupArray(s);if(!c.observable){let f=function(p){let v=p.result;return(!d||!ms(n,{data:d.data},{data:v},r.variables))&&(d={data:v,dataState:p.complete?"complete":"partial",complete:p.complete},p.missing&&(d.missing=p.missing.missing)),d};var l=f;let u=!1,d,h=new F(p=>{u=!0;let v=this.watch({variables:i,returnPartialData:!0,id:t,query:n,optimistic:o,immediate:!0,callback:S=>{h.dirty=!0,this.onAfterBroadcast(()=>{p.next(f(S)),h.dirty=!1})}});return()=>{u=!1,v(),this.fragmentWatches.removeArray(s)}}).pipe(Wl(),Lt({connector:()=>new Yn(1),resetOnRefCountZero:()=>zl(0)}));c.observable=Object.assign(h,{dirty:!1,getCurrentResult:()=>u&&d?d:f(this.diff({id:t,query:n,returnPartialData:!0,optimistic:o,variables:i}))})}return c.observable}getFragmentDoc=Dn(mf,{max:Me["cache.fragmentQueryDocuments"]||1e3,cache:Gt,makeCacheKey:Mf(this)});readFragment(t,n=!!t.optimistic){let r=t.from!==void 0?this.toCacheId(t.from):t.id;return this.read(C(g({},t),{query:this.getFragmentDoc(t.fragment,t.fragmentName),rootId:r,optimistic:n}))}writeQuery(o){var i=o,{id:t,data:n}=i,r=ve(i,["id","data"]);return this.write(Object.assign(r,{dataId:t||"ROOT_QUERY",result:n}))}writeFragment(i){var s=i,{data:t,fragment:n,fragmentName:r}=s,o=ve(s,["data","fragment","fragmentName"]);let c=o.from!==void 0?this.toCacheId(o.from):o.id;return this.write(Object.assign(o,{query:this.getFragmentDoc(n,r),dataId:c,result:t}))}updateQuery(t,n){return this.batch({update(r){let o=r.readQuery(t),i=n(o);return i==null?o:(r.writeQuery(C(g({},t),{data:i})),i)}})}updateFragment(t,n){return this.batch({update(r){let o=r.readFragment(t),i=n(o);return i==null?o:(r.writeFragment(C(g({},t),{data:i})),i)}})}toCacheId(t){return typeof t=="string"?t:this.identify(t)}};!1;var eS=Object.freeze({data:null,dataState:"complete",complete:!0}),jI=Object.assign(new F(e=>{e.next(eS)}),{dirty:!1,getCurrentResult:()=>eS}),tS=Object.freeze({data:[],dataState:"complete",complete:!0}),BI=Object.assign(new F(e=>{e.next(tS)}),{getCurrentResult:()=>tS});var ws=class e extends Error{message;path;query;variables;constructor(t,n,r,o){if(super(t),this.message=t,this.path=n,this.query=r,this.variables=o,this.name="MissingFieldError",Array.isArray(this.path)){this.missing=this.message;for(let i=this.path.length-1;i>=0;--i)this.missing={[this.path[i]]:this.missing}}else this.missing=this.path;this.__proto__=e.prototype}missing};var{hasOwnProperty:ge}=Object.prototype;function Uc({__typename:e,id:t,_id:n},r){if(typeof e=="string"&&(r&&(r.keyObject=t!=null?{id:t}:n!=null?{_id:n}:void 0),t==null&&n!=null&&(t=n),t!=null))return`${e}:${typeof t=="number"||typeof t=="string"?t:JSON.stringify(t)}`}var VI={dataIdFromObject:Uc,resultCaching:!0};function nS(e){return vt(VI,e)}function rS(e,t){return G(t)?e.get(t.__ref,"__typename"):t&&t.__typename}var Nf=/^[_a-z][_0-9a-z]*/i;function Nt(e){let t=e.match(Nf);return t?t[0]:e}function Hc(e,t,n){return ue(t)?se(t)?t.every(r=>Hc(e,r,n)):e.selections.every(r=>{if(Kt(r)&&vn(r,n)){let o=lt(r);return ge.call(t,o)&&(!r.selectionSet||Hc(r.selectionSet,t[o],n))}return!0}):!1}function $n(e){return ue(e)&&!G(e)&&!se(e)}function oS(){return new nt}function jc(e,t){let n=_t(kt(e));return{fragmentMap:n,lookupFragment(r){let o=n[r];return!o&&t&&(o=t.lookup(r)),o||null}}}var Bc={},xf=()=>Bc,iS={},Nr=class{policies;group;data={};constructor(t,n){this.policies=t,this.group=n}toObject(){return g({},this.data)}has(t){return this.lookup(t,!0)!==void 0}get(t,n){if(this.group.depend(t,n),ge.call(this.data,t)){let r=this.data[t];if(r&&ge.call(r,n))return r[n]}if(n==="__typename"&&ge.call(this.policies.rootTypenamesById,t))return this.policies.rootTypenamesById[t];if(this instanceof Zt)return this.parent.get(t,n)}lookup(t,n){if(n&&this.group.depend(t,"__exists"),ge.call(this.data,t))return this.data[t];if(this instanceof Zt)return this.parent.lookup(t,n);if(this.policies.rootTypenamesById[t])return{}}merge(t,n){let r;G(t)&&(t=t.__ref),G(n)&&(n=n.__ref);let o=typeof t=="string"?this.lookup(r=t):t,i=typeof n=="string"?this.lookup(r=n):n;if(!i)return;T(typeof r=="string",99);let s=new nt({reconciler:$I}).merge(o,i);if(this.data[r]=s,s!==o&&(delete this.refs[r],this.group.caching)){let c={};o||(c.__exists=1),Object.keys(i).forEach(l=>{if(!o||o[l]!==s[l]){c[l]=1;let u=Nt(l);u!==l&&!this.policies.hasKeyArgs(s.__typename,u)&&(c[u]=1),s[l]===void 0&&!(this instanceof Zt)&&delete s[l]}}),c.__typename&&!(o&&o.__typename)&&this.policies.rootTypenamesById[r]===s.__typename&&delete c.__typename,Object.keys(c).forEach(l=>this.group.dirty(r,l))}}modify(t,n,r){let o=this.lookup(t);if(o){let i={},s=!1,c=!0,l={DELETE:Bc,INVALIDATE:iS,isReference:G,toReference:this.toReference,canRead:this.canRead,readField:(u,d)=>this.policies.readField(typeof u=="string"?{fieldName:u,from:d||Yt(t)}:u,{store:this})};if(Object.keys(o).forEach(u=>{let d=Nt(u),f=o[u];if(f===void 0)return;let h=typeof n=="function"?n:n[u]||(r?void 0:n[d]);if(h){let p=h===xf?Bc:h(Hn(f),C(g({},l),{fieldName:d,storeFieldName:u,storage:this.getStorage(t,u)}));if(p===iS)this.group.dirty(t,u);else if(p===Bc&&(p=void 0),p!==f&&(i[u]=p,s=!0,f=p,!1)){let v=S=>{if(this.lookup(S.__ref)===void 0)return!1,!0};if(G(p))v(p);else if(Array.isArray(p)){let S=!1,y;for(let D of p){if(G(D)){if(S=!0,v(D))break}else if(typeof D=="object"&&D){let[E]=this.policies.identify(D);E&&(y=D)}if(S&&y!==void 0){!1;break}}}}}f!==void 0&&(c=!1)}),s)return this.merge(t,i),c&&(this instanceof Zt?this.data[t]=void 0:delete this.data[t],this.group.dirty(t,"__exists")),!0}return!1}delete(t,n,r){let o=this.lookup(t);if(o){let i=this.getFieldValue(o,"__typename"),s=n&&r?this.policies.getStoreFieldName({typename:i,fieldName:n,args:r}):n;return this.modify(t,s?{[s]:xf}:xf,!!r)}return!1}evict(t,n){let r=!1;return t.id&&(ge.call(this.data,t.id)&&(r=this.delete(t.id,t.fieldName,t.args)),this instanceof Zt&&this!==n&&(r=this.parent.evict(t,n)||r),(t.fieldName||r)&&this.group.dirty(t.id,t.fieldName||"__exists")),r}clear(){this.replace(null)}extract(){let t=this.toObject(),n=[];return this.getRootIdSet().forEach(r=>{ge.call(this.policies.rootTypenamesById,r)||n.push(r)}),n.length&&(t.__META={extraRootIds:n.sort()}),t}replace(t){if(Object.keys(this.data).forEach(r=>{t&&ge.call(t,r)||this.delete(r)}),t){let n=t,{__META:r}=n,o=ve(n,["__META"]);Object.keys(o).forEach(i=>{this.merge(i,o[i])}),r&&r.extraRootIds.forEach(this.retain,this)}}rootIds={};retain(t){return this.rootIds[t]=(this.rootIds[t]||0)+1}release(t){if(this.rootIds[t]>0){let n=--this.rootIds[t];return n||delete this.rootIds[t],n}return 0}getRootIdSet(t=new Set){return Object.keys(this.rootIds).forEach(t.add,t),this instanceof Zt?this.parent.getRootIdSet(t):Object.keys(this.policies.rootTypenamesById).forEach(t.add,t),t}gc(){let t=this.getRootIdSet(),n=this.toObject();t.forEach(o=>{ge.call(n,o)&&(Object.keys(this.findChildRefIds(o)).forEach(t.add,t),delete n[o])});let r=Object.keys(n);if(r.length){let o=this;for(;o instanceof Zt;)o=o.parent;r.forEach(i=>o.delete(i))}return r}refs={};findChildRefIds(t){if(!ge.call(this.refs,t)){let n=this.refs[t]={},r=this.data[t];if(!r)return n;let o=new Set([r]);o.forEach(i=>{G(i)&&(n[i.__ref]=!0),ue(i)&&Object.keys(i).forEach(s=>{let c=i[s];ue(c)&&o.add(c)})})}return this.refs[t]}makeCacheKey(){return this.group.keyMaker.lookupArray(arguments)}getFieldValue=(t,n)=>Hn(G(t)?this.get(t.__ref,n):t&&t[n]);canRead=t=>G(t)?this.has(t.__ref):typeof t=="object";toReference=(t,n)=>{if(typeof t=="string")return Yt(t);if(G(t))return t;let[r]=this.policies.identify(t);if(r){let o=Yt(r);return n&&this.merge(r,t),o}};get supportsResultCaching(){return this.group.caching}},Vc=class{caching;parent;d=null;keyMaker;constructor(t,n=null){this.caching=t,this.parent=n,this.resetCaching()}resetCaching(){this.d=this.caching?Ds():null,this.keyMaker=new Fe}depend(t,n){if(this.d){this.d(Af(t,n));let r=Nt(n);r!==n&&this.d(Af(t,r)),this.parent&&this.parent.depend(t,n)}}dirty(t,n){this.d&&this.d.dirty(Af(t,n),n==="__exists"?"forget":"setDirty")}};function Af(e,t){return t+"#"+e}function Lf(e,t){xr(e)&&e.group.depend(t,"__exists")}var Of=class extends Nr{constructor({policies:t,resultCaching:n=!0,seed:r}){super(t,new Vc(n)),r&&this.replace(r)}stump=new Ff(this);addLayer(t,n){return this.stump.addLayer(t,n)}removeLayer(){return this}storageTrie=new Fe;getStorage(){return this.storageTrie.lookupArray(arguments)}};Nr.Root=Of;var Zt=class e extends Nr{id;parent;replay;group;constructor(t,n,r,o){super(n.policies,o),this.id=t,this.parent=n,this.replay=r,this.group=o,r(this)}addLayer(t,n){return new e(t,this,n,this.group)}removeLayer(t){let n=this.parent.removeLayer(t);return t===this.id?(this.group.caching&&Object.keys(this.data).forEach(r=>{let o=this.data[r],i=n.lookup(r);i?o?o!==i&&Object.keys(o).forEach(s=>{K(o[s],i[s])||this.group.dirty(r,s)}):(this.group.dirty(r,"__exists"),Object.keys(i).forEach(s=>{this.group.dirty(r,s)})):this.delete(r)}),n):n===this.parent?this:n.addLayer(this.id,this.replay)}toObject(){return g(g({},this.parent.toObject()),this.data)}findChildRefIds(t){let n=this.parent.findChildRefIds(t);return ge.call(this.data,t)?g(g({},n),super.findChildRefIds(t)):n}getStorage(...t){let n=this.parent;for(;n.parent;)n=n.parent;return n.getStorage(...t)}},Ff=class extends Zt{constructor(t){super("EntityStore.Stump",t,()=>{},new Vc(t.group.caching,t.group))}removeLayer(){return this}merge(t,n){return this.parent.merge(t,n)}};function $I(e,t,n){let r=e[n],o=t[n];return K(r,o)?r:o}function xr(e){return!!(e&&e.supportsResultCaching)}var Ho=new Sn;function sS(e){let t=e.directives?.find(({name:r})=>r.value==="unmask");if(!t)return"mask";let n=t.arguments?.find(({name:r})=>r.value==="mode");return!1,n&&"value"in n.value&&n.value.value==="migrate"?"migrate":"unmask"}function $c(e,t,n){return Ho.withValue(!0,()=>{let r=Cs(e,t,n,!1);return Object.isFrozen(e)&&Hn(r),r})}function zI(e,t){if(t.has(e))return t.get(e);let n=Array.isArray(e)?[]:{};return t.set(e,n),n}function Cs(e,t,n,r,o){let{knownChanged:i}=n,s=zI(e,n.mutableTargets);if(Array.isArray(e)){for(let[c,l]of Array.from(e.entries())){if(l===null){s[c]=null;continue}let u=Cs(l,t,n,r,void 0);i.has(u)&&i.add(s),s[c]=u}return i.has(s)?s:e}for(let c of t.selections){let l;if(r&&i.add(s),c.kind===w.FIELD){let u=lt(c),d=c.selectionSet;if(l=s[u]||e[u],l===void 0)continue;if(d&&l!==null){let f=Cs(e[u],d,n,r,void 0);i.has(f)&&(l=f)}s[u]=l,!1}if(c.kind===w.INLINE_FRAGMENT&&(!c.typeCondition||n.cache.fragmentMatches(c,e.__typename))&&(l=Cs(e,c.selectionSet,n,r,o)),c.kind===w.FRAGMENT_SPREAD){let u=c.name.value,d=n.fragmentMap[u]||(n.fragmentMap[u]=n.cache.lookupFragment(u));T(d,39,u);let f=sS(c);f!=="mask"&&(l=Cs(e,d.selectionSet,n,f==="migrate",o))}i.has(l)&&i.add(s)}return"__typename"in e&&!("__typename"in s)&&(s.__typename=e.__typename),Object.keys(s).length!==Object.keys(e).length&&i.add(s),i.has(s)?s:e}function WI(e,t,n,r,o){let i=()=>(Ho.getValue()||(!1,i=()=>t),t);return{get(){return i()},set(s){i=()=>s},enumerable:!0,configurable:!0}}function Hf(e,t,n,r){let o=t.definitions.filter(s=>s.kind===w.FRAGMENT_DEFINITION);typeof r>"u"&&(T(o.length===1,41,o.length),r=o[0].name.value);let i=o.find(s=>s.name.value===r);return T(!!i,42,r),e==null||K(e,{})?e:$c(e,i.selectionSet,{operationType:"fragment",operationName:i.name.value,fragmentMap:_t(kt(t)),cache:n,mutableTargets:new WeakMap,knownChanged:new WeakSet})}function Uf(e,t,n){let r=Le(t);return T(r,43),e==null?e:$c(e,r.selectionSet,{operationType:r.operation,operationName:r.name?.value,fragmentMap:_t(kt(t)),cache:n,mutableTargets:new WeakMap,knownChanged:new WeakSet})}var aS={};function jf(e){let t=JSON.stringify(e);return aS[t]||(aS[t]={})}function Bf(e){let t=jf(e);return t.keyFieldsFn||(t.keyFieldsFn=(n,r)=>{let o=(s,c)=>r.readField(c,s),i=r.keyObject=$f(e,s=>{let c=Uo(r.storeObject,s,o);return c===void 0&&n!==r.storeObject&&ge.call(n,s[0])&&(c=Uo(n,s,lS)),T(c!==void 0,102,s.join("."),n),c});return`${r.typename}:${JSON.stringify(i)}`})}function Vf(e){let t=jf(e);return t.keyArgsFn||(t.keyArgsFn=(n,{field:r,variables:o,fieldName:i})=>{let s=$f(e,l=>{let u=l[0],d=u.charAt(0);if(d==="@"){if(r&&Ir(r.directives)){let f=u.slice(1),h=r.directives.find(v=>v.name.value===f),p=h&&Tr(h,o);return p&&Uo(p,l.slice(1))}return}if(d==="$"){let f=u.slice(1);if(o&&ge.call(o,f)){let h=l.slice(0);return h[0]=f,Uo(o,h)}return}if(n)return Uo(n,l)}),c=JSON.stringify(s);return(n||c!=="{}")&&(i+=":"+c),i})}function $f(e,t){let n=new nt;return cS(e).reduce((r,o)=>{let i=t(o);if(i!==void 0){for(let s=o.length-1;s>=0;--s)i={[o[s]]:i};r=n.merge(r,i)}return r},{})}function cS(e){let t=jf(e);if(!t.paths){let n=t.paths=[],r=[];e.forEach((o,i)=>{se(o)?(cS(o).forEach(s=>n.push(r.concat(s))),r.length=0):(r.push(o),se(e[i+1])||(n.push(r.slice(0)),r.length=0))})}return t.paths}function lS(e,t){return e[t]}function Uo(e,t,n){return n=n||lS,uS(t.reduce(function r(o,i){return se(o)?o.map(s=>r(s,i)):o&&n(o,i)},e))}function uS(e){return ue(e)?se(e)?e.map(uS):$f(Object.keys(e).sort(),t=>Uo(e,t)):e}var zf=new Sn,dS=new WeakMap;function Is(e){let t=dS.get(e);return t||dS.set(e,t={vars:new Set,dep:Ds()}),t}function Wf(e){Is(e).vars.forEach(t=>t.forgetCache(e))}function fS(e){Is(e).vars.forEach(t=>t.attachCache(e))}function qf(e){let t=new Set,n=new Set,r=function(i){if(arguments.length>0){if(e!==i){e=i,t.forEach(c=>{Is(c).dep.dirty(r),qI(c)});let s=Array.from(n);n.clear(),s.forEach(c=>c(e))}}else{let s=zf.getValue();s&&(o(s),Is(s).dep(r))}return e};r.onNextChange=i=>(n.add(i),()=>{n.delete(i)});let o=r.attachCache=i=>(t.add(i),Is(i).vars.add(r),r);return r.forgetCache=i=>t.delete(i),r}function qI(e){e.broadcastWatches&&e.broadcastWatches()}function Gf(e){return e.args!==void 0?e.args:e.field?Tr(e.field,e.variables):null}var GI=()=>{},hS=(e,t)=>t.fieldName,pS=(e,t,{mergeObjects:n})=>n(e,t),mS=(e,t)=>t,gS=(e,t,{streamFieldInfo:n,existingData:r})=>{if(!e&&!r)return t;let o=[],i=e??r,s=n?.isLastChunk?t.length:Math.max(i.length,t.length);for(let c=0;c<s;c++)o[c]=t[c]===void 0?i[c]:t[c];return o},zc=class{config;typePolicies={};toBeAdded={};supertypeMap=new Map;fuzzySubtypes=new Map;cache;rootIdsByTypename={};rootTypenamesById={};usingPossibleTypes=!1;constructor(t){this.config=t,this.config=g({dataIdFromObject:Uc},t),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),t.possibleTypes&&this.addPossibleTypes(t.possibleTypes),t.typePolicies&&this.addTypePolicies(t.typePolicies)}identify(t,n){let r=this,o=n&&(n.typename||n.storeObject?.__typename)||t.__typename;if(o===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];let i=n&&n.storeObject||t,s=C(g({},n),{typename:o,storeObject:i,readField:n&&n.readField||((...d)=>{let f=Wc(d,i);return r.readField(f,{store:r.cache.data,variables:f.variables})})}),c,l=o&&this.getTypePolicy(o),u=l&&l.keyFn||this.config.dataIdFromObject;return Ho.withValue(!0,()=>{for(;u;){let d=u(g(g({},t),i),s);if(se(d))u=Bf(d);else{c=d;break}}}),c=c?String(c):void 0,s.keyObject?[c,s.keyObject]:[c]}addTypePolicies(t){Object.keys(t).forEach(n=>{let c=t[n],{queryType:r,mutationType:o,subscriptionType:i}=c,s=ve(c,["queryType","mutationType","subscriptionType"]);r&&this.setRootTypename("Query",n),o&&this.setRootTypename("Mutation",n),i&&this.setRootTypename("Subscription",n),ge.call(this.toBeAdded,n)?this.toBeAdded[n].push(s):this.toBeAdded[n]=[s]})}updateTypePolicy(t,n,r){let o=this.getTypePolicy(t),{keyFields:i,fields:s}=n;function c(l,u){l.merge=typeof u=="function"?u:u===!0?pS:u===!1?mS:l.merge}c(o,n.merge),o.keyFn=i===!1?GI:se(i)?Bf(i):typeof i=="function"?i:o.keyFn,s&&Object.keys(s).forEach(l=>{let u=r[l];(!u||u?.typename!==t)&&(u=r[l]={typename:t});let d=s[l];if(typeof d=="function")u.read=d;else{let{keyArgs:f,read:h,merge:p}=d;u.keyFn=f===!1?hS:se(f)?Vf(f):typeof f=="function"?f:u.keyFn,typeof h=="function"&&(u.read=h),c(u,p)}u.read&&u.merge&&(u.keyFn=u.keyFn||hS)})}setRootTypename(t,n=t){let r="ROOT_"+t.toUpperCase(),o=this.rootTypenamesById[r];n!==o&&(T(!o||o===t,103,t),o&&delete this.rootIdsByTypename[o],this.rootIdsByTypename[n]=r,this.rootTypenamesById[r]=n)}addPossibleTypes(t){this.usingPossibleTypes=!0,Object.keys(t).forEach(n=>{this.getSupertypeSet(n,!0),t[n].forEach(r=>{this.getSupertypeSet(r,!0).add(n);let o=r.match(Nf);(!o||o[0]!==r)&&this.fuzzySubtypes.set(r,new RegExp(r))})})}getTypePolicy(t){if(!ge.call(this.typePolicies,t)){let r=this.typePolicies[t]={};r.fields={};let o=this.supertypeMap.get(t);!o&&this.fuzzySubtypes.size&&(o=this.getSupertypeSet(t,!0),this.fuzzySubtypes.forEach((i,s)=>{if(i.test(t)){let c=this.supertypeMap.get(s);c&&c.forEach(l=>o.add(l))}})),o&&o.size&&o.forEach(i=>{let l=this.getTypePolicy(i),{fields:s}=l,c=ve(l,["fields"]);Object.assign(r,c),Object.assign(r.fields,s)})}let n=this.toBeAdded[t];return n&&n.length&&n.splice(0).forEach(r=>{this.updateTypePolicy(t,r,this.typePolicies[t].fields)}),this.typePolicies[t]}getFieldPolicy(t,n){if(t)return this.getTypePolicy(t).fields[n]}getSupertypeSet(t,n){let r=this.supertypeMap.get(t);return!r&&n&&this.supertypeMap.set(t,r=new Set),r}fragmentMatches(t,n,r,o){if(!t.typeCondition)return!0;if(!n)return!1;let i=t.typeCondition.name.value;if(n===i)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(i)){let s=this.getSupertypeSet(n,!0),c=[s],l=f=>{let h=this.getSupertypeSet(f,!1);h&&h.size&&c.indexOf(h)<0&&c.push(h)},u=!!(r&&this.fuzzySubtypes.size),d=!1;for(let f=0;f<c.length;++f){let h=c[f];if(h.has(i))return s.has(i)||(d&&!1&&T.warn(104,n,i),s.add(i)),!0;h.forEach(l),u&&f===c.length-1&&Hc(t.selectionSet,r,o)&&(u=!1,d=!0,this.fuzzySubtypes.forEach((p,v)=>{let S=n.match(p);S&&S[0]===n&&l(v)}))}}return!1}hasKeyArgs(t,n){let r=this.getFieldPolicy(t,n);return!!(r&&r.keyFn)}getStoreFieldName(t){let{typename:n,fieldName:r}=t,o=this.getFieldPolicy(n,r),i,s=o&&o.keyFn;if(s&&n){let c={typename:n,fieldName:r,field:t.field||null,variables:t.variables},l=Gf(t);for(;s;){let u=s(l,c);if(se(u))s=Vf(u);else{i=u||r;break}}}return i===void 0&&(i=t.field?bf(t.field,t.variables):ps(r,Gf(t))),i===!1?r:r===Nt(i)?i:r+":"+i}readField(t,n){let r=t.from;if(!r||!(t.field||t.fieldName))return;if(t.typename===void 0){let d=n.store.getFieldValue(r,"__typename");d&&(t.typename=d)}let i=this.getStoreFieldName(t),s=Nt(i),c=n.store.getFieldValue(r,i),l=this.getFieldPolicy(t.typename,s),u=l&&l.read;if(u){let d=yS(this,r,t,n,n.store.getStorage(G(r)?r.__ref:r,i));return zf.withValue(this.cache,u,[c,d])}return c}getReadFunction(t,n){let r=this.getFieldPolicy(t,n);return r&&r.read}getMergeFunction(t,n,r){let o=this.getFieldPolicy(t,n),i=o&&o.merge;return!i&&r&&(o=this.getTypePolicy(r),i=o&&o.merge),i}runMergeFunction(t,n,{field:r,typename:o,merge:i,path:s},c,l){let u=t;if(i===pS)return vS(c.store)(t,n);if(i===mS)return n;c.overwrite&&(t=void 0);let d=c.extensions?.[ut]?.deref()?.peekArray(s);if(d){let{current:h,previous:p}=d;if(p&&K(p.incoming,n)&&K(p.streamFieldInfo,h))return p.result}let f=i(t,n,QI(this,void 0,{typename:o,fieldName:r.name.value,field:r,variables:c.variables,path:s},c,l||{},u));return d&&(d.previous={incoming:n,streamFieldInfo:d.current,result:f}),f}};function yS(e,t,n,r,o){let i=e.getStoreFieldName(n),s=Nt(i),c=n.variables||r.variables,{toReference:l,canRead:u}=r.store;return{args:Gf(n),field:n.field||null,fieldName:s,storeFieldName:i,variables:c,isReference:G,toReference:l,storage:o,cache:e.cache,canRead:u,readField(...d){return e.readField(Wc(d,t,c),r)},mergeObjects:vS(r.store)}}function QI(e,t,n,r,o,i){var l;let s=C(g({},yS(e,t,n,r,o)),{extensions:r.extensions,existingData:i}),c=r.extensions;if(c&&ut in c){let u=c,{[l=ut]:d}=u,f=ve(u,[Ws(l)]),h=d?.deref()?.peekArray(n.path);h&&(s.streamFieldInfo=h.current),s.extensions=Object.keys(f).length===0?void 0:f}return s}function Wc(e,t,n){let{0:r,1:o,length:i}=e,s;return typeof r=="string"?s={fieldName:r,from:i>1?o:t}:(s=g({},r),ge.call(s,"from")||(s.from=t)),!1,s.variables===void 0&&(s.variables=n),s}function vS(e){return function(n,r){if(se(n)||se(r))throw me(106);if(ue(n)&&ue(r)){let o=e.getFieldValue(n,"__typename"),i=e.getFieldValue(r,"__typename");if(o&&i&&o!==i)return r;if(G(n)&&$n(r))return e.merge(n.__ref,r),n;if($n(n)&&G(r))return e.merge(n,r.__ref),r;if($n(n)&&$n(r))return g(g({},n),r)}return r}}function SS(e){return[e.selectionSet,e.objectOrReference,e.context]}var qc=class{executeSelectionSet;executeSubSelectedArray;config;knownResults=new WeakMap;constructor(t){this.config=t,this.executeSelectionSet=Dn(n=>{let r=SS(n),o=this.executeSelectionSet.peek(...r);return o||(Lf(n.context.store,n.enclosingRef.__ref),this.execSelectionSetImpl(n))},{max:Me["inMemoryCache.executeSelectionSet"]||5e4,keyArgs:SS,makeCacheKey(n,r,o){if(xr(o.store))return o.store.makeCacheKey(n,G(r)?r.__ref:r,o.varString)}}),this.executeSubSelectedArray=Dn(n=>(Lf(n.context.store,n.enclosingRef.__ref),this.execSubSelectedArrayImpl(n)),{max:Me["inMemoryCache.executeSubSelectedArray"]||1e4,makeCacheKey({field:n,array:r,context:o}){if(xr(o.store))return o.store.makeCacheKey(n,r,o.varString)}})}diffQueryAgainstStore({store:t,query:n,rootId:r="ROOT_QUERY",variables:o,returnPartialData:i=!0}){let s=this.config.cache.policies;o=g(g({},Cr(ds(n))),o);let c=Yt(r),l=this.executeSelectionSet({selectionSet:No(n).selectionSet,objectOrReference:c,enclosingRef:c,context:g({store:t,query:n,policies:s,variables:o,varString:Ae(o)},jc(n,this.config.fragments))}),u;l.missing&&(u=new ws(KI(l.missing),l.missing,n,o));let d=!u,{result:f}=l;return{result:d?f:i?Object.keys(f).length===0?null:f:null,complete:d,missing:u}}isFresh(t,n,r,o){if(xr(o.store)&&this.knownResults.get(t)===r){let i=this.executeSelectionSet.peek(r,n,o);if(i&&t===i.result)return!0}return!1}execSelectionSetImpl({selectionSet:t,objectOrReference:n,enclosingRef:r,context:o}){if(G(n)&&!o.policies.rootTypenamesById[n.__ref]&&!o.store.has(n.__ref))return{result:{},missing:`Dangling reference to missing ${n.__ref} object`};let{variables:i,policies:s,store:c}=o,l=c.getFieldValue(n,"__typename"),u=[],d,f=new nt;typeof l=="string"&&!s.rootIdsByTypename[l]&&u.push({__typename:l});function h(D,E){return D.missing&&(d=f.merge(d,{[E]:D.missing})),D.result}let p=new Set(t.selections);p.forEach(D=>{if(vn(D,i))if(Kt(D)){let E=s.readField({fieldName:D.name.value,field:D,variables:o.variables,from:n},o),_=lt(D);E===void 0?_r.added(D)||(d=f.merge(d,{[_]:`Can't find field '${D.name.value}' on ${G(n)?n.__ref+" object":"object "+JSON.stringify(n,null,2)}`})):se(E)?E.length>0&&(E=h(this.executeSubSelectedArray({field:D,array:E,enclosingRef:r,context:o}),_)):D.selectionSet&&E!=null&&(E=h(this.executeSelectionSet({selectionSet:D.selectionSet,objectOrReference:E,enclosingRef:G(E)?E:r,context:o}),_)),E!==void 0&&u.push({[_]:E})}else{let E=Ln(D,o.lookupFragment);if(!E&&D.kind===w.FRAGMENT_SPREAD)throw me(107,D.name.value);E&&s.fragmentMatches(E,l)&&E.selectionSet.selections.forEach(p.add,p)}});let S={result:vf(u),missing:d},y=Hn(S);return y.result&&this.knownResults.set(y.result,t),y}execSubSelectedArrayImpl({field:t,array:n,enclosingRef:r,context:o}){let i,s=new nt;function c(l,u){return l.missing&&(i=s.merge(i,{[u]:l.missing})),l.result}return t.selectionSet&&(n=n.filter(l=>l===void 0||o.store.canRead(l))),n=n.map((l,u)=>l===null?null:se(l)?c(this.executeSubSelectedArray({field:t,array:l,enclosingRef:r,context:o}),u):t.selectionSet?c(this.executeSelectionSet({selectionSet:t.selectionSet,objectOrReference:l,enclosingRef:G(l)?l:r,context:o}),u):(!1,l)),{result:n,missing:i}}};function KI(e){try{JSON.stringify(e,(t,n)=>{if(typeof n=="string")throw n;return n})}catch(t){return t}}function YI(e,t,n){if(!t.selectionSet){let r=new Set([n]);r.forEach(o=>{ue(o)&&(T(!G(o),108,rS(e,o),t.name.value),Object.values(o).forEach(r.add,r))})}}function Qf(e,t,n){let r=`${t}${n}`,o=e.flavors.get(r);return o||e.flavors.set(r,o=e.clientOnly===t&&e.deferred===n?e:C(g({},e),{clientOnly:t,deferred:n})),o}var Gc=class{cache;reader;fragments;constructor(t,n,r){this.cache=t,this.reader=n,this.fragments=r}writeToStore(t,{query:n,result:r,dataId:o,variables:i,overwrite:s,extensions:c}){let l=Le(n),u=oS();i=g(g({},Cr(l)),i);let d=C(g({store:t,written:{},merge(h,p){return u.merge(h,p)},variables:i,varString:Ae(i)},jc(n,this.fragments)),{overwrite:!!s,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map,extensions:c}),f=this.processSelectionSet({result:r||{},dataId:o,selectionSet:l.selectionSet,mergeTree:{map:new Map},context:d,path:[]});if(!G(f))throw me(109,r);return d.incomingById.forEach(({storeObject:h,mergeTree:p,fieldNodeSet:v},S)=>{let y=Yt(S);if(p&&p.map.size){let D=this.applyMerges(p,y,h,d);if(G(D))return;h=D}if(!1){let D={};v.forEach(R=>{R.selectionSet&&(D[R.name.value]=!0)});let E=R=>D[Nt(R)]===!0,_=R=>{let N=p&&p.map.get(R);return!!(N&&N.info&&N.info.merge)};Object.keys(h).forEach(R=>{E(R)&&!_(R)&&ZI(y,h,R,d.store)})}t.merge(S,h)}),t.retain(f.__ref),f}processSelectionSet({dataId:t,result:n,selectionSet:r,context:o,mergeTree:i,path:s}){let{policies:c}=this.cache,l={},u=t&&c.rootTypenamesById[t]||Yf(n,r,o.fragmentMap)||t&&o.store.get(t,"__typename");typeof u=="string"&&(l.__typename=u);let d=(...h)=>{let p=Wc(h,l,o.variables);if(G(p.from)){let v=o.incomingById.get(p.from.__ref);if(v){let S=c.readField(C(g({},p),{from:v.storeObject}),o);if(S!==void 0)return S}}return c.readField(p,o)},f=new Set;this.flattenFields(r,n,o,u).forEach((h,p)=>{let v=lt(p),S=n[v],y=[...s,p.name.value];if(f.add(p),S!==void 0){let D=c.getStoreFieldName({typename:u,fieldName:p.name.value,field:p,variables:h.variables}),E=DS(i,D),_=this.processFieldValue(S,p,p.selectionSet?Qf(h,!1,!1):h,E,y),R;p.selectionSet&&(G(_)||$n(_))&&(R=d("__typename",_));let N=c.getMergeFunction(u,p.name.value,R);N?E.info={field:p,typename:u,merge:N,path:y}:Qt(["stream"],p)&&Array.isArray(_)&&h.extensions?.[ut]?E.info={field:p,typename:u,merge:gS,path:y}:bS(i,D),l=h.merge(l,{[D]:_})}else!1});try{let[h,p]=c.identify(n,{typename:u,selectionSet:r,fragmentMap:o.fragmentMap,storeObject:l,readField:d});t=t||h,p&&(l=o.merge(l,p))}catch(h){if(!t)throw h}if(typeof t=="string"){let h=Yt(t),p=o.written[t]||(o.written[t]=[]);if(p.indexOf(r)>=0||(p.push(r),this.reader&&this.reader.isFresh(n,h,r,o)))return h;let v=o.incomingById.get(t);return v?(v.storeObject=o.merge(v.storeObject,l),v.mergeTree=Kf(v.mergeTree,i),f.forEach(S=>v.fieldNodeSet.add(S))):o.incomingById.set(t,{storeObject:l,mergeTree:Qc(i)?void 0:i,fieldNodeSet:f}),h}return l}processFieldValue(t,n,r,o,i){return!n.selectionSet||t===null?t:se(t)?t.map((s,c)=>{let l=this.processFieldValue(s,n,r,DS(o,c),[...i,c]);return bS(o,c),l}):this.processSelectionSet({result:t,selectionSet:n.selectionSet,context:r,mergeTree:o,path:i})}flattenFields(t,n,r,o=Yf(n,t,r.fragmentMap)){let i=new Map,{policies:s}=this.cache,c=new Fe(!1);return(function l(u,d){let f=c.lookup(u,d.clientOnly,d.deferred);f.visited||(f.visited=!0,u.selections.forEach(h=>{if(!vn(h,r.variables))return;let{clientOnly:p,deferred:v}=d;if(!(p&&v)&&Ir(h.directives)&&h.directives.forEach(S=>{let y=S.name.value;if(y==="client"&&(p=!0),y==="defer"){let D=Tr(S,r.variables);(!D||D.if!==!1)&&(v=!0)}}),Kt(h)){let S=i.get(h);S&&(p=p&&S.clientOnly,v=v&&S.deferred),i.set(h,Qf(r,p,v))}else{let S=Ln(h,r.lookupFragment);if(!S&&h.kind===w.FRAGMENT_SPREAD)throw me(111,h.name.value);S&&s.fragmentMatches(S,o,n,r.variables)&&l(S.selectionSet,Qf(r,p,v))}}))})(t,r),i}applyMerges(t,n,r,o,i){if(t.map.size&&!G(r)){let s=!se(r)&&(G(n)||$n(n))?n:void 0,c=r;s&&!i&&(i=[G(s)?s.__ref:s]);let l,u=(d,f)=>se(d)?typeof f=="number"?d[f]:void 0:o.store.getFieldValue(d,String(f));t.map.forEach((d,f)=>{let h=u(s,f),p=u(c,f);if(p===void 0)return;i&&i.push(f);let v=this.applyMerges(d,h,p,o,i);v!==p&&(l=l||new Map,l.set(f,v)),i&&T(i.pop()===f)}),l&&(r=se(c)?c.slice(0):g({},c),l.forEach((d,f)=>{r[f]=d}))}return t.info?this.cache.policies.runMergeFunction(n,r,t.info,o,i&&o.store.getStorage(...i)):r}},TS=[];function DS({map:e},t){return e.has(t)||e.set(t,TS.pop()||{map:new Map}),e.get(t)}function Kf(e,t){if(e===t||!t||Qc(t))return e;if(!e||Qc(e))return t;let n=e.info&&t.info?g(g({},e.info),t.info):e.info||t.info,r=e.map.size&&t.map.size,o=r?new Map:e.map.size?e.map:t.map,i={info:n,map:o};if(r){let s=new Set(t.map.keys());e.map.forEach((c,l)=>{i.map.set(l,Kf(c,t.map.get(l))),s.delete(l)}),s.forEach(c=>{i.map.set(c,Kf(t.map.get(c),e.map.get(c)))})}return i}function Qc(e){return!e||!(e.info||e.map.size)}function bS({map:e},t){let n=e.get(t);n&&Qc(n)&&(TS.push(n),e.delete(t))}var ES=new Set;function ZI(e,t,n,r){let o=f=>{let h=r.getFieldValue(f,n);return typeof h=="object"&&h},i=o(e);if(!i)return;let s=o(t);if(!s||G(i)||K(i,s)||Object.keys(i).every(f=>r.getFieldValue(s,f)!==void 0))return;let c=r.getFieldValue(e,"__typename")||r.getFieldValue(t,"__typename"),l=Nt(n),u=`${c}.${l}`;if(ES.has(u))return;ES.add(u);let d=[];!se(i)&&!se(s)&&[i,s].forEach(f=>{let h=r.getFieldValue(f,"__typename");typeof h=="string"&&!d.includes(h)&&d.push(h)}),!1}function Yf(e,t,n){let r;for(let o of t.selections)if(Kt(o)){if(o.name.value==="__typename")return e[lt(o)]}else r?r.push(o):r=[o];if(typeof e.__typename=="string")return e.__typename;if(r)for(let o of r){let i=Yf(e,Ln(o,n).selectionSet,n);if(typeof i=="string")return i}}var Ar=class extends Lo{data;optimisticData;config;watches=new Set;storeReader;storeWriter;addTypenameTransform=new bn(_r);maybeBroadcastWatch;assumeImmutableResults=!0;policies;makeVar=qf;constructor(t={}){super(),this.config=nS(t),this.policies=new zc({cache:this,dataIdFromObject:this.config.dataIdFromObject,possibleTypes:this.config.possibleTypes,typePolicies:this.config.typePolicies}),this.init()}init(){let t=this.data=new Nr.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=t.stump,this.resetResultCache()}resetResultCache(){let{fragments:t}=this.config;this.addTypenameTransform.resetCache(),t?.resetCaches(),this.storeWriter=new Gc(this,this.storeReader=new qc({cache:this,fragments:t}),t),this.maybeBroadcastWatch=Dn((n,r)=>this.broadcastWatch(n,r),{max:Me["inMemoryCache.maybeBroadcastWatch"]||5e3,makeCacheKey:n=>{let r=n.optimistic?this.optimisticData:this.data;if(xr(r)){let{optimistic:o,id:i,variables:s}=n;return r.makeCacheKey(n.query,n.callback,Ae({optimistic:o,id:i,variables:s}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach(n=>n.resetCaching())}restore(t){return this.init(),t&&this.data.replace(t),this}extract(t=!1){return(t?this.optimisticData:this.data).extract()}read(t){let{returnPartialData:n=!1}=t;return this.storeReader.diffQueryAgainstStore(C(g({},t),{store:t.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:n})).result}write(t){try{return++this.txCount,this.storeWriter.writeToStore(this.data,t)}finally{!--this.txCount&&t.broadcast!==!1&&this.broadcastWatches()}}modify(t){if(ge.call(t,"id")&&!t.id)return!1;let n=t.optimistic?this.optimisticData:this.data;try{return++this.txCount,n.modify(t.id||"ROOT_QUERY",t.fields,!1)}finally{!--this.txCount&&t.broadcast!==!1&&this.broadcastWatches()}}diff(t){return this.storeReader.diffQueryAgainstStore(C(g({},t),{store:t.optimistic?this.optimisticData:this.data,rootId:t.id||"ROOT_QUERY",config:this.config}))}watch(t){return this.watches.size||fS(this),this.watches.add(t),t.immediate&&this.maybeBroadcastWatch(t),()=>{this.watches.delete(t)&&!this.watches.size&&Wf(this),this.maybeBroadcastWatch.forget(t)}}gc(t){Ae.reset(),Vn.reset();let n=this.optimisticData.gc();return t&&!this.txCount&&t.resetResultCache&&this.resetResultCache(),n}retain(t,n){return(n?this.optimisticData:this.data).retain(t)}release(t,n){return(n?this.optimisticData:this.data).release(t)}identify(t){if(G(t))return t.__ref;try{return this.policies.identify(t)[0]}catch(n){!1}}evict(t){if(!t.id){if(ge.call(t,"id"))return!1;t=C(g({},t),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(t,this.data)}finally{!--this.txCount&&t.broadcast!==!1&&this.broadcastWatches()}}reset(t){return this.init(),Ae.reset(),t&&t.discardWatches?(this.watches.forEach(n=>this.maybeBroadcastWatch.forget(n)),this.watches.clear(),Wf(this)):this.broadcastWatches(),Promise.resolve()}removeOptimistic(t){let n=this.optimisticData.removeLayer(t);n!==this.optimisticData&&(this.optimisticData=n,this.broadcastWatches())}txCount=0;batch(t){let{update:n,optimistic:r=!0,removeOptimistic:o,onWatchUpdated:i}=t,s,c=u=>{let{data:d,optimisticData:f}=this;++this.txCount,u&&(this.data=this.optimisticData=u);try{return s=n(this)}finally{--this.txCount,this.data=d,this.optimisticData=f}},l=new Set;return i&&!this.txCount&&this.broadcastWatches(C(g({},t),{onWatchUpdated(u){return l.add(u),!1}})),typeof r=="string"?this.optimisticData=this.optimisticData.addLayer(r,c):r===!1?c(this.data):c(),typeof o=="string"&&(this.optimisticData=this.optimisticData.removeLayer(o)),i&&l.size?(this.broadcastWatches(C(g({},t),{onWatchUpdated(u,d){let f=i.call(this,u,d);return f!==!1&&l.delete(u),f}})),l.size&&l.forEach(u=>this.maybeBroadcastWatch.dirty(u))):this.broadcastWatches(t),s}performTransaction(t,n){return this.batch({update:t,optimistic:n||n!==null})}transformDocument(t){return this.addTypenameTransform.transformDocument(this.addFragmentsToDocument(t))}fragmentMatches(t,n){return this.policies.fragmentMatches(t,n)}lookupFragment(t){return this.config.fragments?.lookup(t)||null}resolvesClientField(t,n){return!!this.policies.getReadFunction(t,n)}broadcastWatches(t){if(!this.txCount){let n=this.onAfterBroadcast,r=new Set;this.onAfterBroadcast=o=>{r.add(o)};try{this.watches.forEach(o=>this.maybeBroadcastWatch(o,t)),r.forEach(o=>o())}finally{this.onAfterBroadcast=n}}}addFragmentsToDocument(t){let{fragments:n}=this.config;return n?n.transform(t):t}broadcastWatch(t,n){let{lastDiff:r}=t,o=this.diff(t);n&&(t.optimistic&&typeof n.optimistic=="string"&&(o.fromOptimisticTransaction=!0),n.onWatchUpdated&&n.onWatchUpdated.call(this,t,o,r)===!1)||(!r||!K(r.result,o.result))&&t.callback(t.lastDiff=o,r)}};!1;function jo(e,t){return typeof e=="object"&&e!==null&&e[Symbol.for("apollo.error")]===t}function Bo(e){Object.defineProperty(e,Symbol.for("apollo.error"),{value:e.name,enumerable:!1,writable:!1,configurable:!1})}function wS(e){return e.map(t=>t.message||"Error message not found.").join(`
`)}var CS=(()=>{class e extends Error{static is(n){return jo(n,"CombinedProtocolErrors")}static formatMessage=wS;errors;constructor(n){super(e.formatMessage(n,{defaultFormatMessage:wS})),this.name="CombinedProtocolErrors",this.errors=n,Bo(this),Object.setPrototypeOf(this,e.prototype)}}return e})();function IS(e){return e!==null&&typeof e=="object"&&typeof e.message=="string"&&typeof e.name=="string"&&(typeof e.stack=="string"||typeof e.stack>"u")}var Kc=class e extends Error{static is(t){return jo(t,"UnconventionalError")}constructor(t){super("An error of unexpected shape occurred.",{cause:t}),this.name="UnconventionalError",Bo(this),Object.setPrototypeOf(this,e.prototype)}};function RS(e){return e.filter(t=>t).map(t=>t.message||"Error message not found.").join(`
`)}var Or=(()=>{class e extends Error{static is(n){return jo(n,"CombinedGraphQLErrors")}static formatMessage=RS;errors;data;extensions;constructor(n,r=n.errors||[]){super(e.formatMessage(r,{result:n,defaultFormatMessage:RS})),this.errors=r,this.data=n.data,this.extensions=n.extensions,this.name="CombinedGraphQLErrors",Bo(this),Object.setPrototypeOf(this,e.prototype)}}return e})();var JI=new WeakSet;function Zf(e){JI.add(e)}var Yc=Symbol();function PS(e){return"extensions"in e?CS.is(e.extensions[Yc]):!1}function MS(e){return IS(e)?e:typeof e=="string"?new Error(e,{cause:e}):new Kc(e)}var U=(function(e){return e[e.loading=1]="loading",e[e.setVariables=2]="setVariables",e[e.fetchMore=3]="fetchMore",e[e.refetch=4]="refetch",e[e.poll=6]="poll",e[e.ready=7]="ready",e[e.error=8]="error",e[e.streaming=9]="streaming",e})(U||{});var{assign:_S,hasOwnProperty:XI}=Object,Vo={loading:!0,networkStatus:U.loading,data:void 0,dataState:"empty",partial:!0},Jf={loading:!1,networkStatus:U.ready,data:void 0,dataState:"empty",partial:!0},$o=class{options;queryName;variablesUnknown=!1;_lastWrite;get query(){return this.lastQuery}get variables(){return this.options.variables}unsubscribeFromCache;input;subject;isTornDown;queryManager;subscriptions=new Set;waitForNetworkResult;lastQuery;linkSubscription;pollingInfo;get networkStatus(){return this.subject.getValue().result.networkStatus}get cache(){return this.queryManager.cache}constructor({queryManager:t,options:n,transformedQuery:r=t.transform(n.query)}){this.queryManager=t,this.waitForNetworkResult=n.fetchPolicy==="network-only",this.isTornDown=!1,this.subscribeToMore=this.subscribeToMore.bind(this),this.maskResult=this.maskResult.bind(this);let{watchQuery:{fetchPolicy:o="cache-first"}={}}=t.defaultOptions,{fetchPolicy:i=o,initialFetchPolicy:s=i==="standby"?o:i}=n;n[wf]&&(T(i==="standby",80),this.variablesUnknown=!0),this.lastQuery=r,this.options=C(g({},n),{initialFetchPolicy:s,fetchPolicy:i,variables:this.getVariablesWithDefaults(n.variables)}),this.initializeObservablesQueue(),this["@@observable"]=()=>this,Symbol.observable&&(this[Symbol.observable]=()=>this);let c=Le(this.query);this.queryName=c&&c.name&&c.name.value}initializeObservablesQueue(){this.subject=new ce({query:this.query,variables:this.variables,result:Vo,meta:{}});let t=this.subject.pipe(be({subscribe:()=>{this.subject.observed||(this.reobserve(),setTimeout(()=>this.updatePolling()))},unsubscribe:()=>{this.subject.observed||this.tearDownQuery()}}),Ao(({query:n,variables:r,result:o,meta:i},s)=>{let{shouldEmit:c}=i;if(o===Vo&&(s.previous=void 0,s.previousVariables=void 0),this.options.fetchPolicy==="standby"||c===2)return;if(c===1)return d();let{previous:l,previousVariables:u}=s;if(l){let f=this.queryManager.getDocumentInfo(n),h=this.queryManager.dataMasking,p=h?f.nonReactiveQuery:n;if((h||f.hasNonreactiveDirective?ms(p,l,o,r):K(l,o))&&K(u,r))return}if(c===3&&(!this.options.notifyOnNetworkStatusChange||K(l,o)))return;return d();function d(){return s.previous=o,s.previousVariables=r,o}},()=>({})));this.pipe=t.pipe.bind(t),this.subscribe=t.subscribe.bind(t),this.input=new fe,this.input.complete=()=>{},this.input.pipe(this.operator).subscribe(this.subject)}subscribe;pipe;[Symbol.observable];"@@observable";getCacheDiff({optimistic:t=!0}={}){return this.cache.diff({query:this.query,variables:this.variables,returnPartialData:!0,optimistic:t})}getInitialResult(t){let n=t||this.options.fetchPolicy;this.queryManager.prioritizeCacheValues&&(n==="network-only"||n==="cache-and-network")&&(n="cache-first");let r=()=>{let o=this.getCacheDiff(),i=this.options.returnPartialData||o.complete?o.result??void 0:void 0;return this.maskResult({data:i,dataState:o.complete?"complete":i===void 0?"empty":"partial",loading:!o.complete,networkStatus:o.complete?U.ready:U.loading,partial:!o.complete})};switch(n){case"cache-only":return C(g({},r()),{loading:!1,networkStatus:U.ready});case"cache-first":return r();case"cache-and-network":return C(g({},r()),{loading:!0,networkStatus:U.loading});case"standby":return Jf;default:return Vo}}resubscribeCache(){let{variables:t,fetchPolicy:n}=this.options,r=this.query,o=n==="standby"||n==="no-cache"||this.waitForNetworkResult,i=!Rs({query:r,variables:t},this.unsubscribeFromCache)&&!this.waitForNetworkResult;if((o||i)&&this.unsubscribeFromCache?.(),o||!i)return;let s={query:r,variables:t,optimistic:!0,watcher:this,callback:l=>{let u=this.queryManager.getDocumentInfo(r);if((u.hasClientExports||u.hasForcedResolvers)&&(s.lastDiff=void 0),s.lastOwnDiff===l)return;let{result:d}=this.subject.getValue();!l.complete&&(d.error||d===Vo||d===Jf)||K(d.data,l.result)||this.scheduleNotify()}},c=this.cache.watch(s);this.unsubscribeFromCache=Object.assign(()=>{this.unsubscribeFromCache=void 0,c()},{query:r,variables:t})}stableLastResult;getCurrentResult(){let{result:t}=this.subject.getValue(),n=t.networkStatus===U.error||this.hasObservers()||this.options.fetchPolicy==="no-cache"?t:this.getInitialResult();return n===Vo&&(n=this.getInitialResult()),K(this.stableLastResult,n)||(this.stableLastResult=n),this.stableLastResult}refetch(t){let{fetchPolicy:n}=this.options,r={pollInterval:0};if(n==="no-cache"?r.fetchPolicy="no-cache":r.fetchPolicy="network-only",!1){let o=ds(this.query),i=o.variableDefinitions;(!i||!i.some(s=>s.variable.name.value==="variables"))&&!1&&T.warn(81,t,o.name?.value||o)}return t&&!K(this.variables,t)&&(r.variables=this.options.variables=this.getVariablesWithDefaults(g(g({},this.variables),t))),this._lastWrite=void 0,this._reobserve(r,{newNetworkStatus:U.refetch})}fetchMore({query:t,variables:n,context:r,errorPolicy:o,updateQuery:i}){T(this.options.fetchPolicy!=="cache-only",82,xe(this.query,"(anonymous)"));let s=C(g({},vt(this.options,{errorPolicy:"none"},{query:t,context:r,errorPolicy:o})),{variables:t?n:g(g({},this.variables),n),fetchPolicy:"no-cache",notifyOnNetworkStatusChange:this.options.notifyOnNetworkStatusChange});s.query=this.transformDocument(s.query),this.lastQuery=t?this.transformDocument(this.options.query):s.query;let c=!1,l=this.options.fetchPolicy!=="no-cache";l||T(i,83);let{finalize:u,pushNotification:d}=this.pushOperation(U.fetchMore);d({source:"newNetworkStatus",kind:"N",value:{}},{shouldEmit:3});let{promise:f,operator:h}=kS(),{observable:p}=this.queryManager.fetchObservableWithInfo(s,{networkStatus:U.fetchMore,exposeExtensions:!0}),v=p.pipe(h,Te(S=>S.kind==="N"&&S.source==="network")).subscribe({next:S=>{c=!1;let y=S.value,D=y[ys];if(Ts(S.value.networkStatus)&&u(),l){let E=this.getCacheDiff();this.cache.batch({update:_=>{i?_.updateQuery({query:this.query,variables:this.variables,returnPartialData:!0,optimistic:!1,extensions:D},R=>i(R,{fetchMoreResult:y.data,variables:s.variables})):_.writeQuery({query:s.query,variables:s.variables,data:y.data,extensions:D})},onWatchUpdated:(_,R)=>{if(_.watcher===this&&!K(R.result,E.result)){c=!0;let N=this.getCurrentResult();kr(y.networkStatus)&&d({kind:"N",source:"network",value:C(g({},N),{networkStatus:y.networkStatus===U.error?U.ready:y.networkStatus,loading:!1,data:R.result,dataState:y.dataState==="streaming"?"streaming":"complete"})})}}})}else{let E=this.getCurrentResult(),_=i(E.data,{fetchMoreResult:y.data,variables:s.variables});d({kind:"N",value:C(g({},E),{networkStatus:U.ready,loading:!1,data:_,dataState:E.dataState==="streaming"?"streaming":"complete"}),source:"network"})}}});return Fc(f.then(S=>Un(this.maskResult(S))).finally(()=>{if(v.unsubscribe(),u(),l&&!c){let S=this.getCurrentResult();S.dataState==="streaming"?d({kind:"N",source:"network",value:C(g({},S),{dataState:"complete",networkStatus:U.ready})}):d({kind:"N",source:"newNetworkStatus",value:{}},{shouldEmit:1})}}))}subscribeToMore(t){let n=this.queryManager.startGraphQLSubscription({query:t.document,variables:t.variables,context:t.context}).subscribe({next:r=>{let{updateQuery:o,onError:i}=t,{error:s}=r;if(s){i?i(s):T.error(84,s);return}o&&this.updateQuery((c,l)=>o(c,g({subscriptionData:r},l)))}});return this.subscriptions.add(n),()=>{this.subscriptions.delete(n)&&n.unsubscribe()}}applyOptions(t){let n=vt(this.options,t||{});_S(this.options,n),this.updatePolling()}setVariables(t){return Z(this,null,function*(){return t=this.getVariablesWithDefaults(t),K(this.variables,t)?Un(this.getCurrentResult()):(this.options.variables=t,this.hasObservers()?this._reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:t},{newNetworkStatus:U.setVariables}):Un(this.getCurrentResult()))})}updateQuery(t){let{queryManager:n}=this,{result:r,complete:o}=this.getCacheDiff({optimistic:!1}),i=t(r,{variables:this.variables,complete:!!o,previousData:r});i&&(this.cache.writeQuery({query:this.options.query,data:i,variables:this.variables}),n.broadcastQueries())}startPolling(t){this.options.pollInterval=t,this.updatePolling()}stopPolling(){this.options.pollInterval=0,this.updatePolling()}applyNextFetchPolicy(t,n){if(n.nextFetchPolicy){let{fetchPolicy:r="cache-first",initialFetchPolicy:o=r}=n;r==="standby"||(typeof n.nextFetchPolicy=="function"?n.fetchPolicy=n.nextFetchPolicy.call(n,r,{reason:t,options:n,observable:this,initialFetchPolicy:o}):t==="variables-changed"?n.fetchPolicy=o:n.fetchPolicy=n.nextFetchPolicy)}return n.fetchPolicy}fetch(t,n,r,o){let i=this.options.fetchPolicy;t.context??={};let s=!1,c=()=>{s=!0},l=y=>new F(D=>{try{return y.subscribe({next(E){s=!0,D.next(E)},error:E=>D.error(E),complete:()=>D.complete()})}finally{s||(p.override=n,this.input.next({kind:"N",source:"newNetworkStatus",value:{resetError:!0},query:f,variables:h,meta:{shouldEmit:3,fetchPolicy:i}}))}}),{observable:u,fromLink:d}=this.queryManager.fetchObservableWithInfo(t,{networkStatus:n,query:r,onCacheHit:c,fetchQueryOperator:l,observableQuery:this}),{query:f,variables:h}=this,p={abort:()=>{S.unsubscribe()},query:f,variables:h};this.activeOperations.add(p);let v=n==U.refetch||n==U.setVariables;u=u.pipe(o,Lt());let S=u.pipe(be({next:y=>{y.source==="newNetworkStatus"||y.kind==="N"&&y.value.loading?p.override=n:delete p.override},finalize:()=>this.activeOperations.delete(p)})).subscribe({next:y=>{let D={};v&&y.kind==="N"&&"loading"in y.value&&!y.value.loading&&(v=!1,D.shouldEmit=1),this.input.next(C(g({},y),{query:f,variables:h,meta:D}))}});return{fromLink:d,subscription:S,observable:u}}didWarnCacheOnlyPolling=!1;updatePolling(){if(this.queryManager.ssrMode)return;let{pollingInfo:t,options:{fetchPolicy:n,pollInterval:r}}=this,o=()=>{let{options:l}=this;return!l.pollInterval||!this.hasObservers()||l.fetchPolicy==="cache-only"||l.fetchPolicy==="standby"};if(o()){!1,this.cancelPolling();return}if(t?.interval===r)return;let i=t||(this.pollingInfo={});i.interval=r;let s=()=>{if(o())return this.cancelPolling();this.pollingInfo&&(!kr(this.networkStatus)&&!this.options.skipPollAttempt?.()?this._reobserve({fetchPolicy:this.options.initialFetchPolicy==="no-cache"?"no-cache":"network-only"},{newNetworkStatus:U.poll}).then(c,c):c())},c=()=>{let l=this.pollingInfo;l&&(clearTimeout(l.timeout),l.timeout=setTimeout(s,l.interval))};c()}cancelPolling(){this.pollingInfo&&(clearTimeout(this.pollingInfo.timeout),delete this.pollingInfo)}reobserve(t){return this._reobserve(t)}_reobserve(t,n){this.isTornDown=!1;let{newNetworkStatus:r}=n||{};this.queryManager.obsQueries.add(this);let o=r===U.refetch||r===U.poll,i=this.variables,s=this.options.fetchPolicy,c=vt(this.options,t||{});this.variablesUnknown&&=c.fetchPolicy==="standby";let l=o?c:_S(this.options,c),u=this.transformDocument(l.query);this.lastQuery=u,t&&"variables"in t&&(l.variables=this.getVariablesWithDefaults(t.variables)),o||(this.updatePolling(),t&&t.variables&&!K(t.variables,i)&&l.fetchPolicy!=="standby"&&(l.fetchPolicy===s||typeof l.nextFetchPolicy=="function")&&(this.applyNextFetchPolicy("variables-changed",l),r===void 0&&(r=U.setVariables)));let d=this.networkStatus;r||(r=U.loading,d!==U.loading&&t?.variables&&!K(t.variables,i)&&(r=U.setVariables),l.fetchPolicy==="standby"&&(r=U.ready)),l.fetchPolicy==="standby"&&this.cancelPolling(),this.resubscribeCache();let{promise:f,operator:h}=kS(l.fetchPolicy==="standby"?{data:void 0}:void 0),{subscription:p,observable:v,fromLink:S}=this.fetch(l,r,u,h);!o&&(S||!this.linkSubscription)&&(this.linkSubscription&&this.linkSubscription.unsubscribe(),this.linkSubscription=p);let y=Object.assign(Fc(f.then(D=>Un(this.maskResult(D))).finally(()=>{!this.hasObservers()&&this.activeOperations.size===0&&this.tearDownQuery()})),{retain:()=>{let D=v.subscribe({}),E=()=>D.unsubscribe();return f.then(E,E),y}});return y}hasObservers(){return this.subject.observed}stop(){this.subject.complete(),this.initializeObservablesQueue(),this.tearDownQuery()}tearDownQuery(){this.isTornDown||(this.resetNotifications(),this.unsubscribeFromCache?.(),this.linkSubscription&&(this.linkSubscription.unsubscribe(),delete this.linkSubscription),this.stopPolling(),this.subscriptions.forEach(t=>t.unsubscribe()),this.subscriptions.clear(),this.queryManager.obsQueries.delete(this),this.isTornDown=!0,this.abortActiveOperations(),this._lastWrite=void 0)}transformDocument(t){return this.queryManager.transform(t)}maskResult(t){let n=this.queryManager.maskOperation({document:this.query,data:t.data,fetchPolicy:this.options.fetchPolicy,cause:this});return n===t.data?t:C(g({},t),{data:n})}dirty=!1;notifyTimeout;resetNotifications(){this.notifyTimeout&&(clearTimeout(this.notifyTimeout),this.notifyTimeout=void 0),this.dirty=!1}scheduleNotify(){this.dirty||(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout(()=>this.notify(!0),0)))}notify(t=!1){if(!t){let r=this.queryManager.getDocumentInfo(this.query);if(r.hasClientExports||r.hasForcedResolvers)return}let{dirty:n}=this;if(this.resetNotifications(),n&&(this.options.fetchPolicy==="cache-only"||this.options.fetchPolicy==="cache-and-network"||!this.activeOperations.size)){let r=this.getCacheDiff();K(r.result,this.getCacheDiff({optimistic:!1}).result)?this.reobserveCacheFirst():this.input.next({kind:"N",value:{data:r.result,dataState:r.complete?"complete":r.result?"partial":"empty",networkStatus:U.ready,loading:!1,error:void 0,partial:!r.complete},source:"cache",query:this.query,variables:this.variables,meta:{}})}}activeOperations=new Set;pushOperation(t){let n=!1,{query:r,variables:o}=this,i=()=>{this.activeOperations.delete(s)},s={override:t,abort:()=>{n=!0,i()},query:r,variables:o};return this.activeOperations.add(s),{finalize:i,pushNotification:(c,l)=>{n||this.input.next(C(g({},c),{query:r,variables:o,meta:g({},l)}))}}}calculateNetworkStatus(t){return t===U.streaming?t:Array.from(this.activeOperations.values()).reverse().find(r=>Rs(r,this)&&r.override!==void 0)?.override??t}abortActiveOperations(){this.activeOperations.forEach(t=>t.abort())}reset(){let t=this.options.fetchPolicy==="cache-only";this.setResult(t?Jf:Vo,{shouldEmit:t?1:2}),this.abortActiveOperations()}setResult(t,n){this.input.next({source:"setResult",kind:"N",value:t,query:this.query,variables:this.variables,meta:g({},n)})}operator=Ao(t=>{let{query:n,variables:r,meta:o}=t;if(t.source==="setResult")return{query:n,variables:r,result:t.value,meta:o};if(t.kind==="C"||!Rs(t,this))return;let i,s=this.subject.getValue();if(t.source==="cache"){if(i=t.value,i.networkStatus===U.ready&&i.partial&&(!this.options.returnPartialData||s.result.networkStatus===U.error)&&this.options.fetchPolicy!=="cache-only")return}else if(t.source==="network")this.waitForNetworkResult&&(this.waitForNetworkResult=!1,this.resubscribeCache()),i=t.kind==="E"?C(g({},Rs(s,t)?s.result:{data:void 0,dataState:"empty",partial:!0}),{error:t.error,networkStatus:U.error,loading:!1}):t.value,t.kind==="E"&&i.dataState==="streaming"&&(i.dataState="complete"),i.error&&(o.shouldEmit=1);else if(t.source==="newNetworkStatus"){let c=Rs(s,t)?s.result:this.getInitialResult(o.fetchPolicy),{resetError:l}=t.value,u=l?void 0:c.error,d=u?U.error:U.ready;i=C(g({},c),{error:u,networkStatus:d})}return T(i),i.error||delete i.error,i.networkStatus=this.calculateNetworkStatus(i.networkStatus),i.loading=kr(i.networkStatus),i=this.maskResult(i),{query:n,variables:r,result:i,meta:o}});reobserveCacheFirst(){let{fetchPolicy:t,nextFetchPolicy:n}=this.options;t==="cache-and-network"||t==="network-only"?this.reobserve({fetchPolicy:"cache-first",nextFetchPolicy(r,o){return this.nextFetchPolicy=n,typeof this.nextFetchPolicy=="function"?this.nextFetchPolicy(r,o):t}}):this.reobserve()}getVariablesWithDefaults(t){return this.queryManager.getVariables(this.query,t)}};function NS(e){!1}function Rs(e,t){return!!(e&&t&&e.query===t.query&&K(e.variables,t.variables))}function kS(e){let t=e,n,r,o=new Promise((s,c)=>{n=s,r=c}),i=be({next(s){if(s.kind==="E")return r(s.error);s.kind==="N"&&s.source!=="newNetworkStatus"&&!s.value.loading&&(t=s.value)},finalize:()=>{if(t)n(t);else{let s="The operation was aborted.",c="AbortError";r(typeof DOMException<"u"?new DOMException(s,c):Object.assign(new Error(s),{name:c}))}}});return{promise:o,operator:i}}var xS={},zo=new WeakMap;function Xf(e,t){let n=e[t];typeof n=="function"&&(e[t]=function(){return zo.set(e,(zo.get(e)+1)%1e15),n.apply(this,arguments)})}var AS=new WeakMap,Wo=class{lastRequestId=1;cache;queryManager;id;observableQuery;incremental;constructor(t,n){let r=this.cache=t.cache,o=(AS.get(t)||0)+1;AS.set(t,o),this.id=o+"",this.observableQuery=n,this.queryManager=t,zo.has(r)||(zo.set(r,0),Xf(r,"evict"),Xf(r,"modify"),Xf(r,"reset"))}_lastWrite;get lastWrite(){return(this.observableQuery||this)._lastWrite}set lastWrite(t){(this.observableQuery||this)._lastWrite=t}resetLastWrite(){this.lastWrite=void 0}shouldWrite(t,n){let{lastWrite:r}=this;return!(r&&r.dmCount===zo.get(this.cache)&&K(n,r.variables)&&K(t.data,r.result.data)&&t.extensions?.[ut]===r.result.extensions?.[ut])}get hasNext(){return this.incremental?this.incremental.hasNext:!1}maybeHandleIncrementalResult(t,n,r){let{incrementalHandler:o}=this.queryManager;return o.isIncrementalResult(n)?(this.incremental||=o.startRequest({query:r}),this.incremental.handle(t,n)):n}markQueryResult(t,{document:n,variables:r,errorPolicy:o,cacheWriteBehavior:i}){let s={query:n,variables:r,returnPartialData:!0,optimistic:!0};this.observableQuery?.resetNotifications();let c=i===0,l=c?void 0:this.cache.diff(s),u=this.maybeHandleIncrementalResult(l?.result,t,n);return c||(eh(u,o)?this.cache.batch({onWatchUpdated:(d,f)=>{d.watcher===this.observableQuery&&(d.lastOwnDiff=f)},update:d=>{if(this.shouldWrite(u,r))d.writeQuery({query:n,data:u.data,variables:r,overwrite:i===1,extensions:u.extensions}),this.lastWrite={result:u,variables:r,dmCount:zo.get(this.cache)};else if(l&&l.complete){u=C(g({},u),{data:l.result});return}let f=d.diff(s);f.complete&&(u=C(g({},u),{data:f.result}))}}):this.lastWrite=void 0),u}markMutationResult(t,n,r=this.cache){let o=[],i=n.cacheWriteBehavior===0,s=this.maybeHandleIncrementalResult(i?void 0:r.diff({id:"ROOT_MUTATION",query:this.queryManager.getDocumentInfo(n.document).asQuery,variables:n.variables,optimistic:!1,returnPartialData:!0}).result,t,n.document);if(n.errorPolicy==="ignore"&&(s=C(g({},s),{errors:[]})),yn(s)&&n.errorPolicy==="none")return Promise.resolve(s);let c=()=>C(g({},s),{dataState:this.hasNext?"streaming":"complete"});if(!i&&eh(s,n.errorPolicy)){o.push({result:s.data,dataId:"ROOT_MUTATION",query:n.document,variables:n.variables,extensions:s.extensions});let{updateQueries:u}=n;u&&this.queryManager.getObservableQueries("all").forEach(d=>{let f=d&&d.queryName;if(!f||!Object.hasOwnProperty.call(u,f))return;let h=u[f],{query:p,variables:v}=d,{result:S,complete:y}=d.getCacheDiff({optimistic:!1});if(y&&S){let D=h(S,{mutationResult:c(),queryName:p&&xe(p)||void 0,queryVariables:v});D&&o.push({result:D,dataId:"ROOT_QUERY",query:p,variables:v})}})}let l=n.refetchQueries;if(typeof l=="function"&&(l=l(c())),o.length>0||(l||"").length>0||n.update||n.onQueryUpdated||n.removeOptimistic){let u=[];if(this.queryManager.refetchQueries({updateCache:d=>{i||o.forEach(h=>d.write(h));let{update:f}=n;if(f){if(!i){let h=d.diff({id:"ROOT_MUTATION",query:this.queryManager.getDocumentInfo(n.document).asQuery,variables:n.variables,optimistic:!1,returnPartialData:!0});h.complete&&(s=C(g({},s),{data:h.result}))}this.hasNext||f(d,s,{context:n.context,variables:n.variables})}!i&&!n.keepRootFields&&!this.hasNext&&d.modify({id:"ROOT_MUTATION",fields(h,{fieldName:p,DELETE:v}){return p==="__typename"?h:v}})},include:l,optimistic:!1,removeOptimistic:n.removeOptimistic,onQueryUpdated:n.onQueryUpdated||null}).forEach(d=>u.push(d)),n.awaitRefetchQueries||n.onQueryUpdated)return Promise.all(u).then(()=>s)}return Promise.resolve(s)}markMutationOptimistic(t,n){let r=typeof t=="function"?t(n.variables,{IGNORE:xS}):t;return r===xS?!1:(this.cache.recordOptimisticTransaction(o=>{try{this.markMutationResult({data:r},n,o)}catch(i){T.error(i)}},this.id),!0)}markSubscriptionResult(t,{document:n,variables:r,errorPolicy:o,cacheWriteBehavior:i}){i!==0&&(eh(t,o)&&this.cache.write({query:n,result:t.data,dataId:"ROOT_SUBSCRIPTION",variables:r,extensions:t.extensions}),this.queryManager.broadcastQueries())}};function eh(e,t="none"){let n=t==="ignore"||t==="all",r=!yn(e);return!r&&n&&e.data&&(r=!0),r}var Zc=class{defaultOptions;client;clientOptions;assumeImmutableResults;documentTransform;ssrMode;defaultContext;dataMasking;incrementalHandler;localState;queryDeduplication;prioritizeCacheValues=!1;onBroadcast;mutationStore;obsQueries=new Set;fetchCancelFns=new Map;constructor(t){let n=new bn(o=>this.cache.transformDocument(o),{cache:!1});this.client=t.client,this.defaultOptions=t.defaultOptions,this.queryDeduplication=t.queryDeduplication,this.clientOptions=t.clientOptions,this.ssrMode=t.ssrMode,this.assumeImmutableResults=t.assumeImmutableResults,this.dataMasking=t.dataMasking,this.localState=t.localState,this.incrementalHandler=t.incrementalHandler;let r=t.documentTransform;this.documentTransform=r?n.concat(r).concat(n):n,this.defaultContext=t.defaultContext||{},(this.onBroadcast=t.onBroadcast)&&(this.mutationStore={})}get link(){return this.client.link}get cache(){return this.client.cache}stop(){this.obsQueries.forEach(t=>t.stop()),this.cancelPendingFetches(me(87))}cancelPendingFetches(t){this.fetchCancelFns.forEach(n=>n(t)),this.fetchCancelFns.clear()}mutate(p){return Z(this,arguments,function*({mutation:t,variables:n,optimisticResponse:r,updateQueries:o,refetchQueries:i=[],awaitRefetchQueries:s=!1,update:c,onQueryUpdated:l,fetchPolicy:u,errorPolicy:d,keepRootFields:f,context:h}){let v=new Wo(this);t=this.cache.transformForLink(this.transform(t));let{hasClientExports:S}=this.getDocumentInfo(t);n=this.getVariables(t,n),S&&(!1,n=yield this.localState.getExportedVariables({client:this.client,document:t,variables:n,context:h}));let y=this.mutationStore&&(this.mutationStore[v.id]={mutation:t,variables:n,loading:!0,error:null}),D=r&&v.markMutationOptimistic(r,{document:t,variables:n,cacheWriteBehavior:u==="no-cache"?0:2,errorPolicy:d,context:h,updateQueries:o,update:c,keepRootFields:f});return this.broadcastQueries(),new Promise((E,_)=>{let R={};return this.getObservableFromLink(t,C(g({},h),{optimisticResponse:D?r:void 0}),n,u,{},!1).observable.pipe(OS(),De(N=>{let ye=g({},N);return ne(v.markMutationResult(ye,{document:t,variables:n,cacheWriteBehavior:u==="no-cache"?0:2,errorPolicy:d,context:h,update:c,updateQueries:o,awaitRefetchQueries:s,refetchQueries:i,removeOptimistic:D?v.id:void 0,onQueryUpdated:l,keepRootFields:f}))})).pipe(L(N=>{if(yn(N)&&d==="none")throw new Or(th(N));return y&&(y.loading=!1,y.error=null),N})).subscribe({next:N=>{if(this.broadcastQueries(),!v.hasNext){let ye={data:this.maskOperation({document:t,data:N.data,fetchPolicy:u,cause:R})};yn(N)&&(ye.error=new Or(N)),Object.keys(N.extensions||{}).length&&(ye.extensions=N.extensions),E(ye)}},error:N=>{if(y&&(y.loading=!1,y.error=N),D&&this.cache.removeOptimistic(v.id),this.broadcastQueries(),d==="ignore")return E({data:void 0});if(d==="all")return E({data:void 0,error:N});_(N)}})})})}fetchQuery(t,n){return qe(t.query,We.QUERY),Z(this,null,function*(){return Vl(this.fetchObservableWithInfo(t,{networkStatus:n}).observable.pipe(Ao(r=>{switch(r.kind){case"E":throw r.error;case"N":if(r.source!=="newNetworkStatus")return Un(r.value)}})),{defaultValue:{data:void 0}})})}transform(t){return this.documentTransform.transformDocument(t)}transformCache=new wr(Me["queryManager.getDocumentInfo"]||2e3);getDocumentInfo(t){let{transformCache:n}=this;if(!n.has(t)){let o=Le(t),i={hasClientExports:Qt(["client","export"],t,!0),hasForcedResolvers:gf(t),hasNonreactiveDirective:Qt(["nonreactive"],t),hasIncrementalDirective:Qt(["defer"],t),nonReactiveQuery:tR(t),clientQuery:Qt(["client"],t)?t:null,serverQuery:Sf([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"},{name:"unmask"}],t),operationType:o?.operation,defaultVars:Cr(o),asQuery:C(g({},t),{definitions:t.definitions.map(s=>s.kind==="OperationDefinition"&&s.operation!=="query"?C(g({},s),{operation:"query"}):s)})};n.set(t,i)}let r=n.get(t);if(r.violation)throw r.violation;return r}getVariables(t,n){let r=this.getDocumentInfo(t).defaultVars,o=Object.entries(n??{}).map(([i,s])=>[i,s===void 0?r[i]:s]);return g(g({},r),Object.fromEntries(o))}watchQuery(t){qe(t.query,We.QUERY);let n=this.transform(t.query);return t=C(g({},t),{variables:this.getVariables(n,t.variables)}),typeof t.notifyOnNetworkStatusChange>"u"&&(t.notifyOnNetworkStatusChange=!0),new $o({queryManager:this,options:t,transformedQuery:n})}query(t){let n=this.transform(t.query);return this.fetchQuery(C(g({},t),{query:n})).then(r=>C(g({},r),{data:this.maskOperation({document:n,data:r?.data,fetchPolicy:t.fetchPolicy})}))}requestIdCounter=1;generateRequestId(){return this.requestIdCounter++}clearStore(t={discardWatches:!0}){return this.cancelPendingFetches(me(89)),this.obsQueries.forEach(n=>{n.reset()}),this.mutationStore&&(this.mutationStore={}),this.cache.reset(t)}getObservableQueries(t="active"){let n=new Set,r=new Map,o=new Map,i=new Set;return Array.isArray(t)&&t.forEach(s=>{if(typeof s=="string")r.set(s,s),o.set(s,!1);else if(yf(s)){let c=Vn(this.transform(s));r.set(c,xe(s)),o.set(c,!1)}else ue(s)&&s.query&&i.add(s)}),this.obsQueries.forEach(s=>{let c=Vn(this.transform(s.options.query));if(t==="all"){n.add(s);return}let{queryName:l,options:{fetchPolicy:u}}=s;t==="active"&&u==="standby"||(t==="active"||l&&o.has(l)||c&&o.has(c))&&(n.add(s),l&&o.set(l,!0),c&&o.set(c,!0))}),i.size&&i.forEach(s=>{let c=new $o({queryManager:this,options:C(g({},Rr(this.defaultOptions.watchQuery,s)),{fetchPolicy:"network-only"})});n.add(c)}),!1,n}refetchObservableQueries(t=!1){let n=[];return this.getObservableQueries(t?"all":"active").forEach(r=>{let{fetchPolicy:o}=r.options;(t||o!=="standby")&&o!=="cache-only"&&n.push(r.refetch())}),this.broadcastQueries(),Promise.all(n)}startGraphQLSubscription(t){let{query:n,variables:r}=t,{fetchPolicy:o="cache-first",errorPolicy:i="none",context:s={},extensions:c={}}=t;qe(n,We.SUBSCRIPTION),n=this.transform(n),r=this.getVariables(n,r);let l;!1;let u=(this.getDocumentInfo(n).hasClientExports?ne(this.localState.getExportedVariables({client:this.client,document:n,variables:r,context:s})):H(r)).pipe(De(d=>{let{observable:f,restart:h}=this.getObservableFromLink(n,s,d,o,c),p=new Wo(this);return l=h,f.pipe(L(v=>{p.markSubscriptionResult(v,{document:n,variables:d,errorPolicy:i,cacheWriteBehavior:o==="no-cache"?0:2});let S={data:v.data??void 0};return yn(v)?S.error=new Or(v):PS(v)&&(S.error=v.extensions[Yc],delete v.extensions[Yc]),v.extensions&&Object.keys(v.extensions).length&&(S.extensions=v.extensions),S.error&&i==="none"&&(S.data=void 0),i==="ignore"&&delete S.error,S}),Ft(v=>i==="ignore"?H({data:void 0}):H({data:void 0,error:v})),Te(v=>!!(v.data||v.error)))}));return Object.assign(u,{restart:()=>l?.()})}broadcastQueries(){this.onBroadcast&&this.onBroadcast(),this.obsQueries.forEach(t=>t.notify())}inFlightLinkObservables=new Fe(!1);getObservableFromLink(t,n,r,o,i,s=n?.queryDeduplication??this.queryDeduplication){let c={},{serverQuery:l,clientQuery:u,operationType:d,hasIncrementalDirective:f}=this.getDocumentInfo(t),h=xe(t),p={client:this.client};if(l){let{inFlightLinkObservables:S,link:y}=this;try{let E=function(_){return new F(R=>{function N(){return _.subscribe({next:R.next.bind(R),complete:R.complete.bind(R),error:R.error.bind(R)})}let ye=N();return c.restart||=()=>{ye.unsubscribe(),ye=N()},()=>{ye.unsubscribe(),c.restart=void 0}})};var v=E;let D=this.incrementalHandler.prepareRequest({query:l,variables:r,context:C(g(g({},this.defaultContext),n),{queryDeduplication:s}),extensions:i});if(n=D.context,s){let _=Vn(l),R=Ae(r);c=S.lookup(_,R),c.observable||(c.observable=Mr(y,D,p).pipe(E,Cn(()=>{S.peek(_,R)===c&&S.remove(_,R)}),d===We.SUBSCRIPTION?Lt():er({refCount:!0})))}else c.observable=Mr(y,D,p).pipe(E)}catch(D){c.observable=Xn(()=>D)}}else c.observable=H({data:{}});if(u){let{operation:S}=Le(t);!1,T(!f,94,S[0].toUpperCase()+S.slice(1),h??"(anonymous)"),c.observable=c.observable.pipe(De(y=>ne(this.localState.execute({client:this.client,document:u,remoteResult:y,context:n,variables:r,fetchPolicy:o}))))}return{restart:()=>c.restart?.(),observable:c.observable.pipe(Ft(S=>{throw S=MS(S),Zf(S),S}))}}getResultsFromLink(t,{queryInfo:n,cacheWriteBehavior:r,observableQuery:o,exposeExtensions:i}){let s=n.lastRequestId=this.generateRequestId(),{errorPolicy:c}=t,l=this.cache.transformForLink(t.query);return this.getObservableFromLink(l,t.context,t.variables,t.fetchPolicy).observable.pipe(L(u=>{let d=n.markQueryResult(u,C(g({},t),{document:l,cacheWriteBehavior:r})),f=yn(d);if(f&&c==="none")throw n.resetLastWrite(),o?.resetNotifications(),new Or(th(d));let h=g({data:d.data},n.hasNext?{loading:!0,networkStatus:U.streaming,dataState:"streaming",partial:!0}:{dataState:d.data?"complete":"empty",loading:!1,networkStatus:U.ready,partial:!d.data});return i&&"extensions"in d&&(h[ys]=d.extensions),f&&(c==="none"&&(h.data=void 0,h.dataState="empty"),c!=="ignore"&&(h.error=new Or(th(d)),h.dataState!=="streaming"&&(h.networkStatus=U.error))),h}),Ft(u=>{if(s>=n.lastRequestId&&c==="none")throw n.resetLastWrite(),o?.resetNotifications(),u;let d={data:void 0,dataState:"empty",loading:!1,networkStatus:U.ready,partial:!0};return c!=="ignore"&&(d.error=u,d.networkStatus=U.error),H(d)}))}fetchObservableWithInfo(t,{networkStatus:n=U.loading,query:r=t.query,fetchQueryOperator:o=l=>l,onCacheHit:i=()=>{},observableQuery:s,exposeExtensions:c}){let l=this.getVariables(r,t.variables),{fetchPolicy:u="cache-first",errorPolicy:d="none",returnPartialData:f=!1,notifyOnNetworkStatusChange:h=!0,context:p={}}=t;this.prioritizeCacheValues&&(u==="network-only"||u==="cache-and-network")&&(u="cache-first");let v=Object.assign({},t,{query:r,variables:l,fetchPolicy:u,errorPolicy:d,returnPartialData:f,notifyOnNetworkStatusChange:h,context:p}),S=new Wo(this,s),y=N=>{v.variables=N;let ye=u==="no-cache"?0:n===U.refetch&&v.refetchWritePolicy!=="merge"?1:2,Qe=this.fetchQueryByPolicy(v,{queryInfo:S,cacheWriteBehavior:ye,onCacheHit:i,observableQuery:s,exposeExtensions:c});return Qe.observable=Qe.observable.pipe(o),v.fetchPolicy!=="standby"&&s?.applyNextFetchPolicy("after-fetch",t),Qe},D=()=>{this.fetchCancelFns.delete(S.id)};this.fetchCancelFns.set(S.id,N=>{E.next({kind:"E",error:N,source:"network"})});let E=new fe,_,R;if(this.getDocumentInfo(v.query).hasClientExports)!1,_=ne(this.localState.getExportedVariables({client:this.client,document:v.query,variables:v.variables,context:v.context})).pipe(De(N=>y(N).observable)),R=!0;else{let N=y(v.variables);R=N.fromLink,_=N.observable}return{observable:new F(N=>{N.add(D),_.subscribe(N),E.subscribe(N)}).pipe(Lt()),fromLink:R}}refetchQueries({updateCache:t,include:n,optimistic:r=!1,removeOptimistic:o=r?cs("refetchQueries"):void 0,onQueryUpdated:i}){let s=new Map;n&&this.getObservableQueries(n).forEach(l=>{if(l.options.fetchPolicy==="cache-only"||l.variablesUnknown)return;let u=l.getCurrentResult();s.set(l,{oq:l,lastDiff:{result:u?.data,complete:!u?.partial}})});let c=new Map;if(t){let l=new Set;this.cache.batch({update:t,optimistic:r&&o||!1,removeOptimistic:o,onWatchUpdated(u,d,f){let h=u.watcher;if(h instanceof $o&&!l.has(h)){if(l.add(h),i){s.delete(h);let p=i(h,d,f);return p===!0&&(p=h.refetch().retain()),p!==!1&&c.set(h,p),p}i!==null&&h.options.fetchPolicy!=="cache-only"&&s.set(h,{oq:h,lastDiff:f,diff:d})}}})}return s.size&&s.forEach(({oq:l,lastDiff:u,diff:d})=>{let f;i&&(d||(d=l.getCacheDiff()),f=i(l,d,u)),(!i||f===!0)&&(f=l.refetch().retain()),f!==!1&&c.set(l,f)}),o&&this.cache.removeOptimistic(o),c}noCacheWarningsByCause=new WeakSet;maskOperation(t){let{document:n,data:r}=t;if(!1){let{fetchPolicy:o,cause:i={}}=t,s=Le(n)?.operation;this.dataMasking&&o==="no-cache"&&!eR(n)&&!this.noCacheWarningsByCause.has(i)&&(this.noCacheWarningsByCause.add(i),!1)}return this.dataMasking?Uf(r,n,this.cache):r}maskFragment(t){let{data:n,fragment:r,fragmentName:o}=t;return this.dataMasking?Hf(n,r,this.cache,o):n}fetchQueryByPolicy({query:t,variables:n,fetchPolicy:r,errorPolicy:o,returnPartialData:i,context:s},{cacheWriteBehavior:c,onCacheHit:l,queryInfo:u,observableQuery:d,exposeExtensions:f}){let h=()=>this.cache.diff({query:t,variables:n,returnPartialData:!0,optimistic:!0}),p=(S,y)=>{let D=S.result;!1;let E=R=>(!S.complete&&!i&&(R=void 0),{data:R,dataState:S.complete?"complete":R?"partial":"empty",loading:kr(y),networkStatus:y,partial:!S.complete}),_=R=>H({kind:"N",value:E(R),source:"cache"});return(S.complete||i)&&this.getDocumentInfo(t).hasForcedResolvers?(!1,l(),ne(this.localState.execute({client:this.client,document:t,remoteResult:D?{data:D}:void 0,context:s,variables:n,onlyRunForcedResolvers:!0,returnPartialData:!0,fetchPolicy:r}).then(R=>({kind:"N",value:E(R.data||void 0),source:"cache"})))):o==="none"&&y===U.refetch&&S.missing?_(void 0):_(D||void 0)},v=()=>this.getResultsFromLink({query:t,variables:n,context:s,fetchPolicy:r,errorPolicy:o},{cacheWriteBehavior:c,queryInfo:u,observableQuery:d,exposeExtensions:f}).pipe(OS(),ql(),L(S=>C(g({},S),{source:"network"})));switch(r){default:case"cache-first":{let S=h();return S.complete?{fromLink:!1,observable:p(S,U.ready)}:i?{fromLink:!0,observable:Ot(p(S,U.loading),v())}:{fromLink:!0,observable:v()}}case"cache-and-network":{let S=h();return S.complete||i?{fromLink:!0,observable:Ot(p(S,U.loading),v())}:{fromLink:!0,observable:v()}}case"cache-only":return{fromLink:!1,observable:Ot(p(h(),U.ready))};case"network-only":return{fromLink:!0,observable:v()};case"no-cache":return{fromLink:!0,observable:v()};case"standby":return{fromLink:!1,observable:le}}}};function OS(){let e=!1;return be({next(){e=!0},complete(){T(e,98)}})}function eR(e){let t=!0;return Re(e,{FragmentSpread:n=>{if(t=!!n.directives&&n.directives.some(r=>r.name.value==="unmask"),!t)return mn}}),t}function tR(e){return Re(e,{FragmentSpread:t=>{if(!t.directives?.some(n=>n.name.value==="unmask"))return C(g({},t),{directives:[...t.directives||[],{kind:w.DIRECTIVE,name:{kind:w.NAME,value:"nonreactive"}}]})}})}function th(e){var s;if(e.extensions?.[ut]==null)return e;let o=e,{extensions:i}=o,c=i,{[s=ut]:t}=c,n=ve(c,[Ws(s)]),r=ve(o,["extensions"]);return Object.keys(n).length>0&&(r.extensions=n),r}var FS=!1,Fr=class{link;cache;disableNetworkFetches;set prioritizeCacheValues(t){this.queryManager.prioritizeCacheValues=t}get prioritizeCacheValues(){return this.queryManager.prioritizeCacheValues}version;queryDeduplication;defaultOptions;devtoolsConfig;queryManager;devToolsHookCb;resetStoreCallbacks=[];clearStoreCallbacks=[];constructor(t){!1;let{cache:n,documentTransform:r,ssrMode:o=!1,ssrForceFetchDelay:i=0,queryDeduplication:s=!0,defaultOptions:c,defaultContext:l,assumeImmutableResults:u=n.assumeImmutableResults,localState:d,devtools:f,dataMasking:h,link:p,incrementalHandler:v=new bs,experiments:S=[]}=t;this.link=p,this.cache=n,this.queryDeduplication=s,this.defaultOptions=c||{},this.devtoolsConfig=C(g({},f),{enabled:f?.enabled??!1}),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.watchFragment=this.watchFragment.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.refetchObservableQueries=this.refetchObservableQueries.bind(this),this.version=as,this.queryManager=new Zc({client:this,defaultOptions:this.defaultOptions,defaultContext:l,documentTransform:r,queryDeduplication:s,ssrMode:o,dataMasking:!!h,clientOptions:t,incrementalHandler:v,assumeImmutableResults:u,onBroadcast:this.devtoolsConfig.enabled?()=>{this.devToolsHookCb&&this.devToolsHookCb()}:void 0,localState:d}),this.prioritizeCacheValues=o||i>0,i&&setTimeout(()=>{this.prioritizeCacheValues=!1},i),this.devtoolsConfig.enabled&&this.connectToDevTools(),S.forEach(y=>y.call(this,t))}connectToDevTools(){if(typeof window>"u")return;let t=window,n=Symbol.for("apollo.devtools");(t[n]=t[n]||[]).push(this),t.__APOLLO_CLIENT__=this,!FS&&!1&&(FS=!0,window.document&&window.top===window.self&&/^(https?|file):$/.test(window.location.protocol)&&setTimeout(()=>{if(!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__){let r=window.navigator,o=r&&r.userAgent,i;typeof o=="string"&&(o.indexOf("Chrome/")>-1?i="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":o.indexOf("Firefox/")>-1&&(i="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),i&&!1&&T.log("Download the Apollo DevTools for a better development experience: %s",i)}},1e4))}get documentTransform(){return this.queryManager.documentTransform}get localState(){return this.queryManager.localState}set localState(t){this.queryManager.localState=t}stop(){this.queryManager.stop()}watchQuery(t){return this.defaultOptions.watchQuery&&(t=Rr(this.defaultOptions.watchQuery,t)),this.queryManager.watchQuery(t)}query(t){return this.defaultOptions.query&&(t=Rr(this.defaultOptions.query,t)),!1,this.queryManager.query(t)}mutate(t){let n=Rr(vt({fetchPolicy:"network-only",errorPolicy:"none"},this.defaultOptions.mutate),t);return!1,qe(n.mutation,We.MUTATION),this.queryManager.mutate(n)}subscribe(t){let n={},r=this.queryManager.startGraphQLSubscription(t),o=r.pipe(L(i=>C(g({},i),{data:this.queryManager.maskOperation({document:t.query,data:i.data,fetchPolicy:t.fetchPolicy,cause:n})})));return Object.assign(o,{restart:r.restart})}readQuery(t,n=!1){return this.cache.readQuery(C(g({},t),{query:this.transform(t.query)}),n)}watchFragment(t){let n=this.queryManager.dataMasking,r=this.cache.watchFragment(C(g({},t),{fragment:this.transform(t.fragment,n)}));return r}readFragment(t,n=!1){return this.cache.readFragment(C(g({},t),{fragment:this.transform(t.fragment)}),n)}writeQuery(t){let n=this.cache.writeQuery(t);return t.broadcast!==!1&&this.queryManager.broadcastQueries(),n}writeFragment(t){let n=this.cache.writeFragment(t);return t.broadcast!==!1&&this.queryManager.broadcastQueries(),n}__actionHookForDevTools(t){this.devToolsHookCb=t}__requestRaw(t){return Mr(this.link,t,{client:this})}resetStore(){return Promise.resolve().then(()=>this.queryManager.clearStore({discardWatches:!1})).then(()=>Promise.all(this.resetStoreCallbacks.map(t=>t()))).then(()=>this.refetchObservableQueries())}clearStore(){return Promise.resolve().then(()=>this.queryManager.clearStore({discardWatches:!0})).then(()=>Promise.all(this.clearStoreCallbacks.map(t=>t())))}onResetStore(t){return this.resetStoreCallbacks.push(t),()=>{this.resetStoreCallbacks=this.resetStoreCallbacks.filter(n=>n!==t)}}onClearStore(t){return this.clearStoreCallbacks.push(t),()=>{this.clearStoreCallbacks=this.clearStoreCallbacks.filter(n=>n!==t)}}reFetchObservableQueries;refetchObservableQueries(t){return this.queryManager.refetchObservableQueries(t)}refetchQueries(t){let n=this.queryManager.refetchQueries(t),r=[],o=[];n.forEach((s,c)=>{r.push(c),o.push(s)});let i=Promise.all(o);return i.queries=r,i.results=o,i.catch(s=>{!1}),i}getObservableQueries(t="active"){return this.queryManager.getObservableQueries(t)}extract(t){return this.cache.extract(t)}restore(t){return this.cache.restore(t)}setLink(t){this.link=t}get defaultContext(){return this.queryManager.defaultContext}maskedFragmentTransform=new bn(Df);transform(t,n=!1){let r=this.queryManager.transform(t);return n?this.maskedFragmentTransform.transformDocument(r):r}};!1;var Jc=new Map,nh=new Map,LS=!0,Xc=!1;function HS(e){return e.replace(/[\s,]+/g," ").trim()}function nR(e){return HS(e.source.body.substring(e.start,e.end))}function rR(e){var t=new Set,n=[];return e.definitions.forEach(function(r){if(r.kind==="FragmentDefinition"){var o=r.name.value,i=nR(r.loc),s=nh.get(o);s&&!s.has(i)?LS&&console.warn("Warning: fragment with name "+o+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):s||nh.set(o,s=new Set),s.add(i),t.has(i)||(t.add(i),n.push(r))}else n.push(r)}),fi(fi({},e),{definitions:n})}function oR(e){var t=new Set(e.definitions);t.forEach(function(r){r.loc&&delete r.loc,Object.keys(r).forEach(function(o){var i=r[o];i&&typeof i=="object"&&t.add(i)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}function iR(e){var t=HS(e);if(!Jc.has(t)){var n=Nc(e,{experimentalFragmentVariables:Xc,allowLegacyFragmentVariables:Xc});if(!n||n.kind!=="Document")throw new Error("Not a valid GraphQL document.");Jc.set(t,oR(rR(n)))}return Jc.get(t)}function zn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];typeof e=="string"&&(e=[e]);var r=e[0];return t.forEach(function(o,i){o&&o.kind==="Document"?r+=o.loc.source.body:r+=o,r+=e[i+1]}),iR(r)}function US(){Jc.clear(),nh.clear()}function jS(){LS=!1}function BS(){Xc=!0}function VS(){Xc=!1}var Ps={gql:zn,resetCaches:US,disableFragmentWarnings:jS,enableExperimentalFragmentVariables:BS,disableExperimentalFragmentVariables:VS};(function(e){e.gql=Ps.gql,e.resetCaches=Ps.resetCaches,e.disableFragmentWarnings=Ps.disableFragmentWarnings,e.enableExperimentalFragmentVariables=Ps.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=Ps.disableExperimentalFragmentVariables})(zn||(zn={}));zn.default=zn;function $S(e){return new F(t=>(e().then(n=>{t.closed||(t.next(n),t.complete())},n=>{t.closed||t.error(n)}),()=>t.unsubscribe()))}function sR(e,t){return t?e.pipe(L(n=>C(g({},n),{loading:!1})),pi({data:void 0,loading:!0})):e.pipe(L(n=>C(g({},n),{loading:!1})))}var oh=class{zone;constructor(t){this.zone=t}now=Date.now;schedule(t,n=0,r){return this.zone.run(()=>Bl.schedule(t,n,r))}};function ih(e,t){return e.pipe(Jn(new oh(t)))}var sh=class{obsQuery;valueChanges;constructor(t,n){this.obsQuery=t,this.valueChanges=ih(ne(this.obsQuery),n)}get options(){return this.obsQuery.options}get variables(){return this.obsQuery.variables}getCurrentResult(){return this.obsQuery.getCurrentResult()}refetch(t){return this.obsQuery.refetch(t)}fetchMore(t){return this.obsQuery.fetchMore(t)}subscribeToMore(t){return this.obsQuery.subscribeToMore(t)}updateQuery(t){return this.obsQuery.updateQuery(t)}stopPolling(){return this.obsQuery.stopPolling()}startPolling(t){return this.obsQuery.startPolling(t)}setVariables(t){return this.obsQuery.setVariables(t)}reobserve(t){return this.obsQuery.reobserve(t)}},zS=new A("APOLLO_FLAGS"),WS=new A("APOLLO_OPTIONS"),aR=new A("APOLLO_NAMED_OPTIONS"),el=class{ngZone;flags;_client;useMutationLoading;constructor(t,n,r){this.ngZone=t,this.flags=n,this._client=r,this.useMutationLoading=n?.useMutationLoading??!1}watchQuery(t){return new sh(this.ensureClient().watchQuery(g({},t)),this.ngZone)}query(t){return $S(()=>this.ensureClient().query(g({},t)))}mutate(t){return sR($S(()=>this.ensureClient().mutate(g({},t))),t.useMutationLoading??this.useMutationLoading)}watchFragment(t){let i=t,{useZone:n}=i,r=ve(i,["useZone"]),o=this.ensureClient().watchFragment(g({},r));return n!==!0?o:ih(o,this.ngZone)}subscribe(t){let i=t,{useZone:n}=i,r=ve(i,["useZone"]),o=this.ensureClient().subscribe(g({},r));return n!==!0?o:ih(o,this.ngZone)}get client(){return this.ensureClient()}set client(t){if(this._client)throw new Error("Client has been already defined");this._client=t}ensureClient(){return this.checkInstance(),this._client}checkInstance(){if(this._client)return!0;throw new Error("Client has not been defined yet")}},ah=(()=>{class e extends el{map=new Map;constructor(n,r,o,i){if(super(n,i),r&&this.createDefault(r),o&&typeof o=="object"){for(let s in o)if(o.hasOwnProperty(s)){let c=o[s];this.create(c,s)}}}create(n,r){rh(r)?this.createNamed(r,n):this.createDefault(n)}default(){return this}use(n){return rh(n)?this.map.get(n):this.default()}createDefault(n){if(this._client)throw new Error("Apollo has been already created.");this.client=this.ngZone.runOutsideAngular(()=>new Fr(n))}createNamed(n,r){if(this.map.has(n))throw new Error(`Client ${n} has been already created`);this.map.set(n,new el(this.ngZone,this.flags,this.ngZone.runOutsideAngular(()=>new Fr(r))))}removeClient(n){rh(n)?this.map.delete(n):this._client=void 0}static \u0275fac=function(r){return new(r||e)(O(Be),O(WS,8),O(aR,8),O(zS,8))};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();function rh(e){return!!e&&e!=="default"}function qS(e,t={}){return[ah,{provide:WS,useFactory:e},{provide:zS,useValue:t}]}var cR=zn,ch=cR;var GS=ch`
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
`,QS=ch`
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
`;var St=(()=>{class e{constructor(n){this.apollo=n}getAbilities(){return this.pokemon.pipe(L(n=>n.getPokemon.abilities))}getDexNumber(){return this.pokemon.pipe(L(n=>n.getPokemon.num))}getMove(n){return this.apollo.query({query:QS,variables:{move:n}}).pipe(L(r=>r.data),Te(r=>r!==void 0))}getMoves(){return this.pokemon.pipe(L(n=>{let r=[],o=["dreamworldMoves","eggMoves","eventMoves","tmMoves","tutorMoves","virtualTransferMoves","levelUpMoves"],i=c=>{c&&Object.keys(c).forEach(l=>{let u=c[l];u&&o.forEach(d=>{let f=u[d];Array.isArray(f)&&f.forEach(h=>{r.push(h.move)})})})},s=c=>{c&&c.forEach(l=>{i(l.learnsets),s(l.preevolutions),s(l.evolutions)})};return i(n.getPokemon.learnsets),s(n.getPokemon.preevolutions??null),s(n.getPokemon.evolutions??null),r}))}getPokemon(n){return this.pokemon=this.apollo.query({query:GS,variables:{pokemon:n}}).pipe(L(r=>r.data),Te(r=>r!==void 0)),this.pokemon}getStats(){return this.pokemon.pipe(L(n=>n.getPokemon.baseStats))}getTypes(){return this.pokemon.pipe(L(n=>n.getPokemon.types))}static{this.\u0275fac=function(r){return new(r||e)(O(ah))}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var KS=(()=>{class e{constructor(n,r){this.stateService=n,this.graphqlService=r,this.pokemonList=document.getElementById("pokemonList"),this.raidTier="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n,this.populatePokemonList()}),this.stateService.regionList.subscribe(n=>{this.region=n,this.populatePokemonList()})}ngAfterViewInit(){this.pokemonList=document.getElementById("pokemonList")}populatePokemonList(){this.pokemonList&&(this.resetPokemonList(),(this.raidTier=="5"?zt:Wt).sort((r,o)=>r.name.localeCompare(o.name)).filter(r=>r.region==m[this.region]).forEach(r=>{let o=document.createElement("option");o.value=r.name,o.text=r.name,r.formName&&(o.id=r.formName),this.pokemonList.add(o)}))}resetPokemonList(){this.pokemonList.innerHTML="",this.pokemonList.innerHTML='<option value="">-- Pokemon --</option>'}valueChanged(){let n=document.getElementById("pokemonList"),r=n.selectedIndex,o=n.options[r];if(o){let i=o.id;if(pn(),o.value){this.graphqlService.getPokemon(i||o.value.toLowerCase()),this.stateService.changePokemon(o.value);let s=document.getElementById("pokemonContent");s&&(s.style.display="none"),this.stateService.changeLoading(!0)}}}static{this.\u0275fac=function(r){return new(r||e)(W(ie),W(St))}}static{this.\u0275cmp=X({type:e,selectors:[["app-pokemon-list"]],decls:3,vars:0,consts:[["id","pokemonList",3,"change"],["value",""]],template:function(r,o){r&1&&(Ce(0,"select",0),yt("change",function(){return o.valueChanged()}),Ce(1,"option",1),he(2,"-- Pokemon --"),ze()())},encapsulation:2})}}return e})();var _e=(function(e){return e.Bug="Bug",e.Dark="Dark",e.Dragon="Dragon",e.Electric="Electric",e.Fairy="Fairy",e.Fighting="Fighting",e.Fire="Fire",e.Flying="Flying",e.Ghost="Ghost",e.Grass="Grass",e.Ground="Ground",e.Ice="Ice",e.Normal="Normal",e.Poison="Poison",e.Psychic="Psychic",e.Rock="Rock",e.Steel="Steel",e.Water="Water",e})(_e||{}),Ms=[{name:_e.Bug,matchup:{offense:{double:["dark","grass","psychic"],immune:[],normal:["bug","dragon","electric","ground","ice","normal","rock","water"],resisted:["fairy","fighting","fire","flying","ghost","poison","steel"]},defense:{double:["fire","flying","rock"],immune:[],normal:["bug","dark","dragon","electric","fairy","ghost","ice","normal","poison","psychic","steel","water"],resisted:["fighting","grass","ground"]}}},{name:_e.Dark,matchup:{offense:{double:["ghost","psychic"],immune:[],normal:["bug","dragon","electric","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["dark","fairy","fighting"]},defense:{double:["bug","fairy","fighting"],immune:["psychic"],normal:["dragon","electric","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["dark","ghost"]}}},{name:_e.Dragon,matchup:{offense:{double:["dragon"],immune:["fairy"],normal:["bug","dark","electric","fighting","fire","flying","ghost","grass","ground","ice","normal","poison","psychic","rock","water"],resisted:["steel"]},defense:{double:["dragon","fairy","ice"],immune:[],normal:["bug","dark","fighting","flying","ghost","ground","normal","poison","psychic","rock","steel"],resisted:["electric","fire","grass","water"]}}},{name:_e.Electric,matchup:{offense:{double:["flying","water"],immune:["ground"],normal:["bug","dark","fairy","fighting","fire","ghost","ice","normal","poison","psychic","rock","steel"],resisted:["dragon","electric","grass"]},defense:{double:["ground"],immune:[],normal:["bug","dark","dragon","fairy","fighting","fire","ghost","grass","ice","normal","poison","psychic","rock","water"],resisted:["electric","flying","steel"]}}},{name:_e.Fairy,matchup:{offense:{double:["dark","dragon","fighting"],immune:[],normal:["bug","electric","fairy","flying","ghost","grass","ground","ice","normal","psychic","rock","water"],resisted:["fire","poison","steel"]},defense:{double:["poison","steel"],immune:["dragon"],normal:["electric","fairy","fire","flying","ghost","grass","ground","ice","normal","psychic","rock","water"],resisted:["bug","dark","fighting"]}}},{name:_e.Fighting,matchup:{offense:{double:["dark","ice","normal","rock","steel"],immune:["ghost"],normal:["dragon","electric","fighting","fire","grass","ground","water"],resisted:["bug","fairy","flying","poison","psychic"]},defense:{double:["fairy","flying","psychic"],immune:[],normal:["dragon","electric","fighting","fire","ghost","grass","ground","ice","normal","poison","steel","water"],resisted:["bug","dark","rock"]}}},{name:_e.Fire,matchup:{offense:{double:["bug","grass","ice","steel"],immune:[],normal:["dark","electric","fairy","fighting","flying","ghost","ground","normal","poison","psychic"],resisted:["dragon","fire","rock","water"]},defense:{double:["ground","rock","water"],immune:[],normal:["dark","dragon","electric","fighting","flying","ghost","normal","poison","psychic"],resisted:["bug","fairy","fire","grass","ice","steel"]}}},{name:_e.Flying,matchup:{offense:{double:["bug","fighting","grass"],immune:[],normal:["dark","dragon","fairy","fire","flying","ghost","ground","ice","normal","poison","psychic","water"],resisted:["electric","rock","steel"]},defense:{double:["electric","ice","rock"],immune:["ground"],normal:["dark","dragon","fairy","fire","flying","ghost","normal","poison","psychic","steel","water"],resisted:["bug","fighting","grass"]}}},{name:_e.Ghost,matchup:{offense:{double:["ghost","psychic"],immune:["normal"],normal:["bug","dragon","electric","fairy","fighting","fire","flying","grass","ground","ice","poison","rock","steel","water"],resisted:["dark"]},defense:{double:["dark","ghost"],immune:["fighting","normal"],normal:["dragon","electric","fairy","fire","flying","grass","ground","ice","psychic","rock","steel","water"],resisted:["bug","poison"]}}},{name:_e.Grass,matchup:{offense:{double:["ground","rock","water"],immune:[],normal:["dark","electric","fairy","fighting","ghost","ice","normal","psychic"],resisted:["bug","dragon","fire","flying","grass","poison","steel"]},defense:{double:["bug","fire","flying","ice","poison"],immune:[],normal:["dark","dragon","fairy","fighting","ghost","normal","psychic","rock","steel"],resisted:["electric","grass","ground","water"]}}},{name:_e.Ground,matchup:{offense:{double:["electric","fire","poison","rock","steel"],immune:["flying"],normal:["dark","dragon","fairy","fighting","ghost","ground","ice","normal","psychic","water"],resisted:["bug","grass"]},defense:{double:["grass","ice","water"],immune:["electric"],normal:["bug","dark","dragon","fairy","fighting","fire","flying","ghost","ground","normal","psychic","steel"],resisted:["poison","rock"]}}},{name:_e.Ice,matchup:{offense:{double:["dragon","flying","grass","ground"],immune:[],normal:["bug","dark","electric","fairy","fighting","ghost","normal","poison","psychic","rock"],resisted:["fire","ice","steel","water"]},defense:{double:["fighting","fire","rock","steel"],immune:[],normal:["bug","dark","dragon","electric","fairy","flying","ghost","grass","ground","normal","poison","psychic","water"],resisted:["ice"]}}},{name:_e.Normal,matchup:{offense:{double:[],immune:["ghost"],normal:["bug","dark","dragon","electric","fairy","fighting","fire","flying","grass","ground","ice","normal","poison","psychic","water"],resisted:["rock","steel"]},defense:{double:["fighting"],immune:["ghost"],normal:["bug","dark","dragon","electric","fairy","fire","flying","grass","ground","ice","normal","poison","psychic","rock","steel","water"],resisted:[]}}},{name:_e.Poison,matchup:{offense:{double:["fairy","grass"],immune:["steel"],normal:["bug","dark","dragon","electric","fighting","fire","flying","ice","normal","psychic","water"],resisted:["ghost","ground","poison","rock"]},defense:{double:["ground","psychic"],immune:[],normal:["dark","dragon","electric","fire","flying","ghost","ice","normal","rock","steel","water"],resisted:["bug","fairy","fighting","grass","poison"]}}},{name:_e.Psychic,matchup:{offense:{double:["fighting","poison"],immune:["dark"],normal:["bug","dragon","electric","fairy","fire","flying","ghost","grass","ground","ice","normal","rock","water"],resisted:["psychic","steel"]},defense:{double:["bug","dark","ghost"],immune:[],normal:["dragon","electric","fairy","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["fighting","psychic"]}}},{name:_e.Rock,matchup:{offense:{double:["bug","fire","flying","ice"],immune:[],normal:["dark","dragon","electric","fairy","ghost","grass","normal","poison","psychic","rock","water"],resisted:["fighting","ground","steel"]},defense:{double:["fighting","grass","ground","steel","water"],immune:[],normal:["bug","dark","dragon","electric","fairy","ghost","ice","psychic","rock"],resisted:["fire","flying","normal","poison"]}}},{name:_e.Steel,matchup:{offense:{double:["fairy","ice","rock"],immune:[],normal:["bug","dark","dragon","fighting","flying","ghost","grass","ground","normal","poison","psychic"],resisted:["electric","fire","steel","water"]},defense:{double:["fighting","fire","ground"],immune:["poison"],normal:["dark","electric","ghost","water"],resisted:["bug","dragon","fairy","flying","grass","ice","normal","psychic","rock","steel"]}}},{name:_e.Water,matchup:{offense:{double:["fire","ground","rock"],immune:[],normal:["bug","dark","electric","fairy","fighting","flying","ghost","ice","normal","poison","psychic","steel"],resisted:["dragon","grass","water"]},defense:{double:["electric","grass"],immune:[],normal:["bug","dark","dragon","fairy","fighting","flying","ghost","ground","normal","poison","psychic","rock"],resisted:["fire","ice","steel","water"]}}}];var YS=(()=>{class e{constructor(n){this.stateService=n}ngOnInit(){Ms.forEach(n=>{let r=document.createElement("option");r.value=n.name,r.text=n.name,document.getElementById("teraList").add(r)})}valueChanged(){let n=document.getElementById("teraList"),r=n.selectedIndex,o=n.options[r];this.stateService.changeTeraType(o.value)}static{this.\u0275fac=function(r){return new(r||e)(W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-tera-type"]],decls:3,vars:0,consts:[["id","teraList",3,"change"],["value",""]],template:function(r,o){r&1&&(Ce(0,"select",0),yt("change",function(){return o.valueChanged()}),Ce(1,"option",1),he(2,"-- Tera Type --"),ze()())},encapsulation:2})}}return e})();var ZS=(()=>{class e{constructor(n){this.stateService=n,this.raidTier="",this.pokemonList="",this.teraType="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n}),this.stateService.teraType.subscribe(n=>{this.teraType=n}),this.stateService.regionList.subscribe(n=>{this.region=n})}shareRaid(){let n=location.origin+"/tera-raid-info/";n+=this.raidTier,n+="/"+this.region,n+="/"+this.pokemonList,n+="/"+this.teraType,navigator.clipboard.writeText(n);let r=document.getElementById("shareText");r.innerText="Copied to Clipboard"}shareRaidMouseOut(){let n=document.getElementById("shareText");n.innerText="Share Raid"}static{this.\u0275fac=function(r){return new(r||e)(W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-share-raid"]],decls:3,vars:0,consts:[["id","shareRaid",1,"share",3,"click","mouseout"],["id","shareText",1,"shareText"]],template:function(r,o){r&1&&(Ce(0,"div",0),yt("click",function(){return o.shareRaid()})("mouseout",function(){return o.shareRaidMouseOut()}),Ce(1,"div",1),he(2,"Share Raid"),ze()())},encapsulation:2})}}return e})();var JS=(()=>{class e{constructor(n,r){this.grapghqlService=n,this.stateService=r,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setImages()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setImages(){this.pokemonList&&this.grapghqlService.getDexNumber().subscribe(n=>{let r=this.raidTier=="5"?zt:Wt,o="";r.filter(i=>i.name==this.pokemonList&&i.region==m[this.region]).forEach(i=>{i.imageAlt&&(o=i.imageAlt)}),de(document.getElementById("pokemonImageNormal"),`<img alt="Normal" title="Normal" src="./assets/pokemon/${Zd(n,3,"0")}${o}.png" />`),de(document.getElementById("pokemonImageShiny"),`<img alt="Shiny" title="Shiny" src="./assets/pokemon/shiny/${Zd(n,3,"0")}${o}.png" />`)})}static{this.\u0275fac=function(r){return new(r||e)(W(St),W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-pokemon-images"]],decls:2,vars:0,consts:[["id","pokemonImageNormal",1,"imgNormal"],["id","pokemonImageShiny",1,"imgShiny"]],template:function(r,o){r&1&&Ne(0,"div",0)(1,"div",1)},encapsulation:2})}}return e})();var XS=(()=>{class e{constructor(n,r){this.graphqlService=n,this.stateService=r,this.pokemonList=""}ngOnInit(){this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setTypes()})}setTypes(){this.pokemonList&&this.graphqlService.getTypes().subscribe(n=>{n.forEach(r=>{de(document.getElementById("pokemonTypes"),this.createTypeDisplay(r.name))})})}createTypeDisplay(n){return`<div class="typeText ${n.toLowerCase()}">${n}</div>`}static{this.\u0275fac=function(r){return new(r||e)(W(St),W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-pokemon-types"]],decls:1,vars:0,consts:[["id","pokemonTypes"]],template:function(r,o){r&1&&Ne(0,"div",0)},encapsulation:2})}}return e})();var eD=(()=>{class e{constructor(n,r){this.graphqlService=n,this.stateService=r,this.raidTier="",this.pokemonList=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setAbilities()})}setAbilities(){if(this.pokemonList){let n=document.getElementById("pokemonAbility");this.graphqlService.getAbilities().subscribe(r=>{de(n,"<h3>Ability:</h3>"),de(n,this.createAbilityDiv(r.first)),r.second&&de(n,this.createAbilityDiv(r.second)),this.canShowHidden()&&r.hidden&&de(n,this.createAbilityDiv(r.hidden,!0))})}}createAbilityDiv(n,r){return`<div class="typeMatchupText" data-info="${n.shortDesc}">${n.name}${r?" (H)":""}</div>`}canShowHidden(){return this.raidTier=="6"||this.raidTier=="5"&&this.pokemonList=="Ditto"}static{this.\u0275fac=function(r){return new(r||e)(W(St),W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-pokemon-ability"]],decls:1,vars:0,consts:[["id","pokemonAbility"]],template:function(r,o){r&1&&Ne(0,"div",0)},encapsulation:2})}}return e})();var tD=(()=>{class e{constructor(n,r){this.graphqlService=n,this.stateService=r}ngOnInit(){this.stateService.pokemonList.subscribe(n=>{n&&this.setStats()})}setStats(){this.graphqlService.getStats().subscribe(n=>{de(document.getElementById("pokemonStatsWrapper"),this.createStatsDisplay(n))})}createStatsDisplay(n){let r='<div id="pokemonStats"><h3>Base Stats</h3>';return r+=`<div class="stat hp"><p>HP</p><p data-label="HP">${n.hp}</p></div>`,r+=`<div class="stat at"><p>Atk</p><p data-label="Atk">${n.attack}</p></div>`,r+=`<div class="stat df"><p>Def</p><p data-label="Def">${n.defense}</p></div>`,r+=`<div class="stat sa"><p>Sp.Atk</p><p data-label="Sp. Atk">${n.specialattack}</p></div>`,r+=`<div class="stat sd"><p>Sp.Def</p><p data-label="Sp. Def">${n.specialdefense}</p></div>`,r+=`<div class="stat sp"><p>Spd</p><p data-label="Spd">${n.speed}</p></div></div>`,r}static{this.\u0275fac=function(r){return new(r||e)(W(St),W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-pokemon-stats"]],decls:1,vars:0,consts:[["id","pokemonStatsWrapper"]],template:function(r,o){r&1&&Ne(0,"div",0)},encapsulation:2})}}return e})();var tl=(()=>{class e{advantages(n,r=!1){let o=[];return Ms.filter(i=>i.name.includes(n)).forEach(i=>{let s=i.matchup.offense;s.double.forEach(c=>{o.push({name:c,multiplier:2})}),r&&(s.resisted.forEach(c=>{o.push({name:c,multiplier:.5})}),s.immune.forEach(c=>{o.push({name:c,multiplier:0})}))}),o}weaknesses(n){let r=[];return Ms.filter(o=>o.name.includes(n)).forEach(o=>{let i=o.matchup.defense;i.double.forEach(s=>{r.push({name:s,multiplier:2})}),i.resisted.forEach(s=>{r.push({name:s,multiplier:.5})}),i.immune.forEach(s=>{r.push({name:s,multiplier:0})})}),r}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var rD=(()=>{class e{constructor(n,r,o){this.stateService=n,this.typeCalcService=r,this.graphqlService=o,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setMoves()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setMoves(){let n=document.getElementById("pokemonMoves"),r=this.raidTier=="5"?zt:Wt,o=[],i=[],s=[],c=[];this.pokemonList&&(r.filter(l=>l.name==this.pokemonList&&l.region==m[this.region]).forEach(l=>{l.info.specialMoves&&l.info.specialMoves.sort((u,d)=>u.localeCompare(d)).forEach(u=>{i.push(u),this.graphqlService.getMove(u.toLowerCase().replaceAll(" ","").replaceAll("-","")).subscribe(d=>{o.push(d.getMove)})}),l.info.moves.forEach(u=>{i.push(u)})}),this.graphqlService.getMoves().subscribe(l=>{de(n,"<h3>Moves:</h3>"),i.forEach(h=>{o.push(...l.filter(p=>p.name==h))}),[...new Map(o.map(h=>[h.key,h])).values()].sort((h,p)=>h.name.localeCompare(p.name)).sort((h,p)=>h.category!="Status"&&p.category=="Status"?-1:(p.category!="Status"&&h.category=="Status",1)).forEach(h=>{let p=this.createMoveDiv(h);de(document.getElementById("pokemonMoves"),p),s.push(p),h.category!="Status"&&c.push(h.type)}),this.stateService.changeMoveList(s.join("")),c=[...new Set(c)];let d=[];c.forEach(h=>{let p=this.typeCalcService.advantages(h);d=d.concat(p)});let f=[];d=[...new Map(d.map(h=>[h.name,h])).values()],d.sort((h,p)=>h.name.localeCompare(p.name)).forEach(h=>{f.push(os(h))}),f.length&&de(document.getElementById("pokemonTypeAdvantages"),"<h3>Type Advantages:</h3>"+f.join(""))}))}createMoveDiv(n){let r=`<div class="typeMatchupText ${n.type.toLowerCase()}">${n.name}`;if(r+='<div class="moveStats">',r+=`<div class="type">${n.category.toString()}</div>`,r+=`<div class="bp">Pwr: ${n.basePower=="0"?"--":n.basePower}</div>`,r+=`<div class="pp">PP: ${n.pp}</div>`,r+=`<div class="acc">Acc: ${n.accuracy}</div>`,r+=`<div class="desc">${n.desc=="No additional effect."?n.shortDesc:n.desc}</div>`,n.category!="Status"){let o=this.typeCalcService.advantages(n.type.toString()),i=[];o.forEach(s=>{s.multiplier==2&&i.push(`${Eo(s.name)}`)}),i.length&&(r+=`<div class="adv">Advantages: ${i.join(", ")}</div>`)}return r+="</div></div>",r}static{this.\u0275fac=function(r){return new(r||e)(W(ie),W(tl),W(St))}}static{this.\u0275cmp=X({type:e,selectors:[["app-pokemon-moves"]],decls:1,vars:0,consts:[["id","pokemonMoves",1,"pokemonMoves"]],template:function(r,o){r&1&&Ne(0,"div",0)},encapsulation:2})}}return e})();var oD=(()=>{class e{constructor(n){this.stateService=n,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setActions()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setActions(){this.pokemonList&&(de(document.getElementById("pokemonActions"),"<h3>Actions:</h3>"),(this.raidTier=="5"?zt:Wt).filter(r=>r.name==this.pokemonList&&r.region==m[this.region]).forEach(r=>{r.info.actions?.sort((o,i)=>i.threshold-o.threshold).forEach(o=>{de(document.getElementById("pokemonActions"),this.createActionDiv(o))})}))}createActionDiv(n){return`<div class="actions ${n.type.toLowerCase()}-${n.threshold.toString()}" data-info="${n.threshold.toString()}% ${n.type.toString()} Remaining">${n.action}</div>`}static{this.\u0275fac=function(r){return new(r||e)(W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-pokemon-actions"]],decls:1,vars:0,consts:[[1,"pokemonActions"]],template:function(r,o){r&1&&Ne(0,"div",0)},encapsulation:2})}}return e})();var iD=(()=>{class e{constructor(n){this.stateService=n,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setHerbs()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setHerbs(){this.pokemonList&&(de(document.getElementById("pokemonHerbs"),"<h3>Herbs Dropped:</h3>"),(this.raidTier=="5"?zt:Wt).filter(r=>r.name==this.pokemonList&&r.region==m[this.region]).forEach(r=>{r.info.herbs.sort((o,i)=>o.name.localeCompare(i.name)).forEach(o=>{de(document.getElementById("pokemonHerbs"),this.createHerbDiv(o))})}))}createHerbDiv(n){return`<div class="herbPill ${n.name.toLowerCase()}">${n.name} - ${n.chance}%</div>`}static{this.\u0275fac=function(r){return new(r||e)(W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-pokemon-herbs"]],decls:1,vars:0,consts:[[1,"pokemonHerbs"]],template:function(r,o){r&1&&Ne(0,"div",0)},encapsulation:2})}}return e})();var sD=(()=>{class e{constructor(n,r){this.stateService=n,this.typeCalcService=r,this.raidTier="",this.pokemonList="",this.teraType="",this.moveList=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.handleChange()}),this.stateService.teraType.subscribe(n=>{this.teraType=n,this.handleChange()}),this.stateService.moveList.subscribe(n=>{this.moveList=n,this.handleChange()})}handleChange(){this.pokemonList&&(pn("pokemonTeraAdvantages"),pn("pokemonTeraWeaknesses"),this.pokemonList&&(this.raidTier&&this.teraType&&this.setTypeWeaknesses(),this.moveList&&this.teraType&&this.moveList.includes("Tera Blast")&&this.setTeraTypeAdvantages()),this.teraType?(this.pokemonList&&this.raidTier&&this.setTypeWeaknesses(),this.moveList.includes("Tera Blast")&&this.setTeraTypeAdvantages()):(pn("pokemonTeraAdvantages"),pn("pokemonTeraWeaknesses")),this.stateService.changeLoading(!1))}setTeraTypeAdvantages(){pn("pokemonTeraAdvantages");let n=[];this.typeCalcService.advantages(this.teraType).forEach(o=>{n.push(os(o))}),n.length&&de(document.getElementById("pokemonTeraAdvantages"),"<h3>Tera Advantages:</h3>"+n.join(""))}setTypeWeaknesses(){pn("pokemonTeraWeaknesses");let n=[];this.typeCalcService.weaknesses(this.teraType).forEach(o=>{n.push(os(o))}),n.length&&de(document.getElementById("pokemonTeraWeaknesses"),"<h3>Tera Weaknesses:</h3>"+n.join(""))}static{this.\u0275fac=function(r){return new(r||e)(W(ie),W(tl))}}static{this.\u0275cmp=X({type:e,selectors:[["app-pokemon-type-matchups"]],decls:3,vars:0,consts:[["id","pokemonTypeAdvantages",1,"pokemonTypeMatchups"],["id","pokemonTeraWeaknesses",1,"pokemonTypeMatchups"],["id","pokemonTeraAdvantages",1,"pokemonTypeMatchups"]],template:function(r,o){r&1&&Ne(0,"div",0)(1,"div",1)(2,"div",2)},encapsulation:2})}}return e})();var nl=(()=>{class e{constructor(n){this.stateService=n,this.title="Tera Raid Info"}ngOnInit(){this.stateService.changeRegionList("Paldea"),this.stateService.loading.subscribe(n=>{document.getElementById("dataLoading").hidden=!n,n==!1&&(document.getElementById("pokemonContent").style.display="")})}ngAfterViewInit(){document.getElementById("dataLoading").hidden=!0,this.deleteCache(),this.autoPopulateSelections()}autoPopulateSelections(n,r){let o=n||window.location.href,i=r||window.location.origin;if(o.replace(i,"").length>1&&o.replace(i+"/tera-raid-info/","")){let c=o.replace(i+"/tera-raid-info/","").split("/"),l=new Event("change");if(Number(c[0])){let u=document.getElementById("raidTier");u.value=c[0],u.dispatchEvent(l)}if(c[1]){let u=document.getElementById("regionList");for(let d=0;d<u.length;d++){let f=u[d];f.text==c[1]&&(u.selectedIndex=f.index)}u.dispatchEvent(l)}if(c[2]){let u=Eo(c[2].replaceAll("%20"," ").toLowerCase()),d=u.match(/(\(.*\))/);if(d){let h=d[0].split(" ");for(let p=0;p<h.length;p++)u=u.replaceAll(h[p],Eo(h[p]))}let f=document.getElementById("pokemonList");f.value=u,f.dispatchEvent(l)}if(c[3]){let u=document.getElementById("teraList");for(let d=0;d<u.length;d++){let f=u[d];f.text==c[3]&&(u.selectedIndex=f.index)}u.dispatchEvent(l)}}}deleteCache(){typeof caches<"u"&&caches.delete("tera-raid-info-1")}static{this.\u0275fac=function(r){return new(r||e)(W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-root"]],decls:35,vars:0,consts:[[1,"header"],[1,"dropdowns"],["id","dataLoading","hidden","true"],["src","./assets/icons/pokeball.gif"],["id","pokemonContent","hidden","false",1,"content"],["id","pokemon"],[1,"pokemonImageWrapper"],["id","pokemonActions"],["id","pokemonHerbs"],[1,"pokemonTypesWrapper"],[1,"footer"],["href","https://github.com/kyle-undefined","target","_blank"],["href","https://www.serebii.net/","target","_blank"],["href","https://www.flaticon.com/authors/creatype","target","_blank"],["href","https://github.com/favware/graphql-pokemon","target","_blank"]],template:function(r,o){r&1&&(ct(0,"header",0)(1,"h1"),he(2,"Tera Raid Info"),et(),ct(3,"div",1),$t(4,"app-raid-tier")(5,"app-region")(6,"app-pokemon-list")(7,"app-tera-type")(8,"app-share-raid"),et()(),ct(9,"div",2),$t(10,"img",3),et(),ct(11,"div",4)(12,"div",5)(13,"div",6),$t(14,"app-pokemon-images"),et(),$t(15,"app-pokemon-types"),et(),$t(16,"app-pokemon-stats")(17,"app-pokemon-ability")(18,"app-pokemon-moves")(19,"app-pokemon-actions",7)(20,"app-pokemon-herbs",8)(21,"app-pokemon-type-matchups",9),et(),ct(22,"footer",10),he(23," By: "),ct(24,"a",11),he(25,"Kyle Undefined"),et(),he(26," - Design: CronikCRS - Images: "),ct(27,"a",12),he(28,"Serebii"),et(),he(29," & "),ct(30,"a",13),he(31,"Creatype"),et(),he(32," - Data: "),ct(33,"a",14),he(34,"GraphQL-Pokemon"),et()())},dependencies:[pc,Yy,Zy,KS,YS,ZS,JS,XS,eD,tD,rD,oD,iD,sD],encapsulation:2})}}return e})();var V="primary",Bs=Symbol("RouteTitle"),hh=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}};function Yo(e){return new hh(e)}function lh(e,t,n){for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(o[0]===":")n[o.substring(1)]=i;else if(o!==i.path)return!1}return!0}function fR(e,t,n){let r=n.path.split("/"),o=r.indexOf("**");if(o===-1){if(r.length>e.length||n.pathMatch==="full"&&(t.hasChildren()||r.length<e.length))return null;let l={},u=e.slice(0,r.length);return lh(r,u,l)?{consumed:u,posParams:l}:null}if(o!==r.lastIndexOf("**"))return null;let i=r.slice(0,o),s=r.slice(o+1);if(i.length+s.length>e.length||n.pathMatch==="full"&&t.hasChildren()&&n.path!=="**")return null;let c={};return!lh(i,e.slice(0,i.length),c)||!lh(s,e.slice(e.length-s.length),c)?null:{consumed:e,posParams:c}}function cl(e){return new Promise((t,n)=>{e.pipe(rn()).subscribe({next:r=>t(r),error:r=>n(r)})})}function hR(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!Jt(e[n],t[n]))return!1;return!0}function Jt(e,t){let n=e?ph(e):void 0,r=t?ph(t):void 0;if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!pD(e[o],t[o]))return!1;return!0}function ph(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function pD(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;let n=[...e].sort(),r=[...t].sort();return n.every((o,i)=>r[i]===o)}else return e===t}function pR(e){return e.length>0?e[e.length-1]:null}function Br(e){return va(e)?e:Qi(e)?ne(Promise.resolve(e)):H(e)}function mD(e){return va(e)?cl(e):Promise.resolve(e)}var mR={exact:vD,subset:SD},gD={exact:gR,subset:yR,ignored:()=>!0},yD={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},mh={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function aD(e,t,n){return mR[n.paths](e.root,t.root,n.matrixParams)&&gD[n.queryParams](e.queryParams,t.queryParams)&&!(n.fragment==="exact"&&e.fragment!==t.fragment)}function gR(e,t){return Jt(e,t)}function vD(e,t,n){if(!Hr(e.segments,t.segments)||!il(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(let r in t.children)if(!e.children[r]||!vD(e.children[r],t.children[r],n))return!1;return!0}function yR(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>pD(e[n],t[n]))}function SD(e,t,n){return DD(e,t,t.segments,n)}function DD(e,t,n,r){if(e.segments.length>n.length){let o=e.segments.slice(0,n.length);return!(!Hr(o,n)||t.hasChildren()||!il(o,n,r))}else if(e.segments.length===n.length){if(!Hr(e.segments,n)||!il(e.segments,n,r))return!1;for(let o in t.children)if(!e.children[o]||!SD(e.children[o],t.children[o],r))return!1;return!0}else{let o=n.slice(0,e.segments.length),i=n.slice(e.segments.length);return!Hr(e.segments,o)||!il(e.segments,o,r)||!e.children[V]?!1:DD(e.children[V],t,i,r)}}function il(e,t,n){return t.every((r,o)=>gD[n](e[o].parameters,r.parameters))}var At=class{root;queryParams;fragment;_queryParamMap;constructor(t=new te([],{}),n={},r=null){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap??=Yo(this.queryParams),this._queryParamMap}toString(){return DR.serialize(this)}},te=class{segments;children;parent=null;constructor(t,n){this.segments=t,this.children=n,Object.values(n).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return sl(this)}},Lr=class{path;parameters;_parameterMap;constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap??=Yo(this.parameters),this._parameterMap}toString(){return ED(this)}};function vR(e,t){return Hr(e,t)&&e.every((n,r)=>Jt(n.parameters,t[r].parameters))}function Hr(e,t){return e.length!==t.length?!1:e.every((n,r)=>n.path===t[r].path)}function SR(e,t){let n=[];return Object.entries(e.children).forEach(([r,o])=>{r===V&&(n=n.concat(t(o,r)))}),Object.entries(e.children).forEach(([r,o])=>{r!==V&&(n=n.concat(t(o,r)))}),n}var vl=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:()=>new Ur,providedIn:"root"})}return e})(),Ur=class{parse(t){let n=new yh(t);return new At(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){let n=`/${_s(t.root,!0)}`,r=TR(t.queryParams),o=typeof t.fragment=="string"?`#${bR(t.fragment)}`:"";return`${n}${r}${o}`}},DR=new Ur;function sl(e){return e.segments.map(t=>ED(t)).join("/")}function _s(e,t){if(!e.hasChildren())return sl(e);if(t){let n=e.children[V]?_s(e.children[V],!1):"",r=[];return Object.entries(e.children).forEach(([o,i])=>{o!==V&&r.push(`${o}:${_s(i,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}else{let n=SR(e,(r,o)=>o===V?[_s(e.children[V],!1)]:[`${o}:${_s(r,!1)}`]);return Object.keys(e.children).length===1&&e.children[V]!=null?`${sl(e)}/${n[0]}`:`${sl(e)}/(${n.join("//")})`}}function bD(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function rl(e){return bD(e).replace(/%3B/gi,";")}function bR(e){return encodeURI(e)}function gh(e){return bD(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function al(e){return decodeURIComponent(e)}function cD(e){return al(e.replace(/\+/g,"%20"))}function ED(e){return`${gh(e.path)}${ER(e.parameters)}`}function ER(e){return Object.entries(e).map(([t,n])=>`;${gh(t)}=${gh(n)}`).join("")}function TR(e){let t=Object.entries(e).map(([n,r])=>Array.isArray(r)?r.map(o=>`${rl(n)}=${rl(o)}`).join("&"):`${rl(n)}=${rl(r)}`).filter(n=>n);return t.length?`?${t.join("&")}`:""}var wR=/^[^\/()?;#]+/;function uh(e){let t=e.match(wR);return t?t[0]:""}var CR=/^[^\/()?;=#]+/;function IR(e){let t=e.match(CR);return t?t[0]:""}var RR=/^[^=?&#]+/;function PR(e){let t=e.match(RR);return t?t[0]:""}var MR=/^[^&#]+/;function _R(e){let t=e.match(MR);return t?t[0]:""}var yh=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new te([],{}):new te([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(t=0){if(t>50)throw new x(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let n=[];for(this.peekStartsWith("(")||n.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),n.push(this.parseSegment());let r={};this.peekStartsWith("/(")&&(this.capture("/"),r=this.parseParens(!0,t));let o={};return this.peekStartsWith("(")&&(o=this.parseParens(!1,t)),(n.length>0||Object.keys(r).length>0)&&(o[V]=new te(n,r)),o}parseSegment(){let t=uh(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new x(4009,!1);return this.capture(t),new Lr(al(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let n=IR(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let o=uh(this.remaining);o&&(r=o,this.capture(r))}t[al(n)]=al(r)}parseQueryParam(t){let n=PR(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let s=_R(this.remaining);s&&(r=s,this.capture(r))}let o=cD(n),i=cD(r);if(t.hasOwnProperty(o)){let s=t[o];Array.isArray(s)||(s=[s],t[o]=s),s.push(i)}else t[o]=i}parseParens(t,n){let r={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let o=uh(this.remaining),i=this.remaining[o.length];if(i!=="/"&&i!==")"&&i!==";")throw new x(4010,!1);let s;o.indexOf(":")>-1?(s=o.slice(0,o.indexOf(":")),this.capture(s),this.capture(":")):t&&(s=V);let c=this.parseChildren(n+1);r[s??V]=Object.keys(c).length===1&&c[V]?c[V]:new te([],c),this.consumeOptional("//")}return r}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new x(4011,!1)}};function TD(e){return e.segments.length>0?new te([],{[V]:e}):e}function wD(e){let t={};for(let[r,o]of Object.entries(e.children)){let i=wD(o);if(r===V&&i.segments.length===0&&i.hasChildren())for(let[s,c]of Object.entries(i.children))t[s]=c;else(i.segments.length>0||i.hasChildren())&&(t[r]=i)}let n=new te(e.segments,t);return kR(n)}function kR(e){if(e.numberOfChildren===1&&e.children[V]){let t=e.children[V];return new te(e.segments.concat(t.segments),t.children)}return e}function Zo(e){return e instanceof At}function NR(e,t,n=null,r=null,o=new Ur){let i=CD(e);return ID(i,t,n,r,o)}function CD(e){let t;function n(i){let s={};for(let l of i.children){let u=n(l);s[l.outlet]=u}let c=new te(i.url,s);return i===e&&(t=c),c}let r=n(e.root),o=TD(r);return t??o}function ID(e,t,n,r,o){let i=e;for(;i.parent;)i=i.parent;if(t.length===0)return dh(i,i,i,n,r,o);let s=xR(t);if(s.toRoot())return dh(i,i,new te([],{}),n,r,o);let c=AR(s,i,e),l=c.processChildren?Ns(c.segmentGroup,c.index,s.commands):PD(c.segmentGroup,c.index,s.commands);return dh(i,c.segmentGroup,l,n,r,o)}function ll(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function Os(e){return typeof e=="object"&&e!=null&&e.outlets}function lD(e,t,n){e||="\u0275";let r=new At;return r.queryParams={[e]:t},n.parse(n.serialize(r)).queryParams[e]}function dh(e,t,n,r,o,i){let s={};for(let[u,d]of Object.entries(r??{}))s[u]=Array.isArray(d)?d.map(f=>lD(u,f,i)):lD(u,d,i);let c;e===t?c=n:c=RD(e,t,n);let l=TD(wD(c));return new At(l,s,o)}function RD(e,t,n){let r={};return Object.entries(e.children).forEach(([o,i])=>{i===t?r[o]=n:r[o]=RD(i,t,n)}),new te(e.segments,r)}var ul=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&ll(r[0]))throw new x(4003,!1);let o=r.find(Os);if(o&&o!==pR(r))throw new x(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function xR(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new ul(!0,0,e);let t=0,n=!1,r=e.reduce((o,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let c={};return Object.entries(i.outlets).forEach(([l,u])=>{c[l]=typeof u=="string"?u.split("/"):u}),[...o,{outlets:c}]}if(i.segmentPath)return[...o,i.segmentPath]}return typeof i!="string"?[...o,i]:s===0?(i.split("/").forEach((c,l)=>{l==0&&c==="."||(l==0&&c===""?n=!0:c===".."?t++:c!=""&&o.push(c))}),o):[...o,i]},[]);return new ul(n,t,r)}var Qo=class{segmentGroup;processChildren;index;constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}};function AR(e,t,n){if(e.isAbsolute)return new Qo(t,!0,0);if(!n)return new Qo(t,!1,NaN);if(n.parent===null)return new Qo(n,!0,0);let r=ll(e.commands[0])?0:1,o=n.segments.length-1+r;return OR(n,o,e.numberOfDoubleDots)}function OR(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new x(4005,!1);o=r.segments.length}return new Qo(r,!1,o-i)}function FR(e){return Os(e[0])?e[0].outlets:{[V]:e}}function PD(e,t,n){if(e??=new te([],{}),e.segments.length===0&&e.hasChildren())return Ns(e,t,n);let r=LR(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){let i=new te(e.segments.slice(0,r.pathIndex),{});return i.children[V]=new te(e.segments.slice(r.pathIndex),e.children),Ns(i,0,o)}else return r.match&&o.length===0?new te(e.segments,{}):r.match&&!e.hasChildren()?vh(e,t,n):r.match?Ns(e,0,o):vh(e,t,n)}function Ns(e,t,n){if(n.length===0)return new te(e.segments,{});{let r=FR(n),o={};if(Object.keys(r).some(i=>i!==V)&&e.children[V]&&e.numberOfChildren===1&&e.children[V].segments.length===0){let i=Ns(e.children[V],t,n);return new te(e.segments,i.children)}return Object.entries(r).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(o[i]=PD(e.children[i],t,s))}),Object.entries(e.children).forEach(([i,s])=>{r[i]===void 0&&(o[i]=s)}),new te(e.segments,o)}}function LR(e,t,n){let r=0,o=t,i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;let s=e.segments[o],c=n[r];if(Os(c))break;let l=`${c}`,u=r<n.length-1?n[r+1]:null;if(o>0&&l===void 0)break;if(l&&u&&typeof u=="object"&&u.outlets===void 0){if(!dD(l,u,s))return i;r+=2}else{if(!dD(l,{},s))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}function vh(e,t,n){let r=e.segments.slice(0,t),o=0;for(;o<n.length;){let i=n[o];if(Os(i)){let l=HR(i.outlets);return new te(r,l)}if(o===0&&ll(n[0])){let l=e.segments[t];r.push(new Lr(l.path,uD(n[0]))),o++;continue}let s=Os(i)?i.outlets[V]:`${i}`,c=o<n.length-1?n[o+1]:null;s&&c&&ll(c)?(r.push(new Lr(s,uD(c))),o+=2):(r.push(new Lr(s,{})),o++)}return new te(r,{})}function HR(e){let t={};return Object.entries(e).forEach(([n,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(t[n]=vh(new te([],{}),0,r))}),t}function uD(e){let t={};return Object.entries(e).forEach(([n,r])=>t[n]=`${r}`),t}function dD(e,t,n){return e==n.path&&Jt(t,n.parameters)}var xs="imperative",Ue=(function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e})(Ue||{}),Dt=class{id;url;constructor(t,n){this.id=t,this.url=n}},Jo=class extends Dt{type=Ue.NavigationStart;navigationTrigger;restoredState;constructor(t,n,r="imperative",o=null){super(t,n),this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Wn=class extends Dt{urlAfterRedirects;type=Ue.NavigationEnd;constructor(t,n,r){super(t,n),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ge=(function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e[e.Aborted=4]="Aborted",e})(Ge||{}),dl=(function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e})(dl||{}),xt=class extends Dt{reason;code;type=Ue.NavigationCancel;constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function MD(e){return e instanceof xt&&(e.code===Ge.Redirect||e.code===Ge.SupersededByNewNavigation)}var qn=class extends Dt{reason;code;type=Ue.NavigationSkipped;constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o}},Xo=class extends Dt{error;target;type=Ue.NavigationError;constructor(t,n,r,o){super(t,n),this.error=r,this.target=o}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},fl=class extends Dt{urlAfterRedirects;state;type=Ue.RoutesRecognized;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Sh=class extends Dt{urlAfterRedirects;state;type=Ue.GuardsCheckStart;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Dh=class extends Dt{urlAfterRedirects;state;shouldActivate;type=Ue.GuardsCheckEnd;constructor(t,n,r,o,i){super(t,n),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},bh=class extends Dt{urlAfterRedirects;state;type=Ue.ResolveStart;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Eh=class extends Dt{urlAfterRedirects;state;type=Ue.ResolveEnd;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Th=class{route;type=Ue.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},wh=class{route;type=Ue.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Ch=class{snapshot;type=Ue.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ih=class{snapshot;type=Ue.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Rh=class{snapshot;type=Ue.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ph=class{snapshot;type=Ue.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var ei=class{},Fs=class{},ti=class{url;navigationBehaviorOptions;constructor(t,n){this.url=t,this.navigationBehaviorOptions=n}};function UR(e){return!(e instanceof ei)&&!(e instanceof ti)&&!(e instanceof Fs)}var Mh=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new Vs(this.rootInjector)}},Vs=(()=>{class e{rootInjector;contexts=new Map;constructor(n){this.rootInjector=n}onChildOutletCreated(n,r){let o=this.getOrCreateContext(n);o.outlet=r,this.contexts.set(n,o)}onChildOutletDestroyed(n){let r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new Mh(this.rootInjector),this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}static \u0275fac=function(r){return new(r||e)(O(pe))};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),hl=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){let n=_h(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){let n=_h(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){let n=kh(t,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==t)}pathFromRoot(t){return kh(t,this._root).map(n=>n.value)}};function _h(e,t){if(e===t.value)return t;for(let n of t.children){let r=_h(e,n);if(r)return r}return null}function kh(e,t){if(e===t.value)return[t];for(let n of t.children){let r=kh(e,n);if(r.length)return r.unshift(t),r}return[]}var dt=class{value;children;constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}};function Go(e){let t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t}var pl=class extends hl{snapshot;constructor(t,n){super(t),this.snapshot=n,Bh(this,t)}toString(){return this.snapshot.toString()}};function _D(e,t){let n=jR(e,t),r=new ce([new Lr("",{})]),o=new ce({}),i=new ce({}),s=new ce({}),c=new ce(""),l=new jr(r,o,s,c,i,V,e,n.root);return l.snapshot=n.root,new pl(new dt(l,[]),n)}function jR(e,t){let n={},r={},o={},s=new Ls([],n,o,"",r,V,e,null,{},t);return new ml("",new dt(s,[]))}var jr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,n,r,o,i,s,c,l){this.urlSubject=t,this.paramsSubject=n,this.queryParamsSubject=r,this.fragmentSubject=o,this.dataSubject=i,this.outlet=s,this.component=c,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(L(u=>u[Bs]))??H(void 0),this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(L(t=>Yo(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(L(t=>Yo(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function jh(e,t,n="emptyOnly"){let r,{routeConfig:o}=e;return t!==null&&(n==="always"||o?.path===""||!t.component&&!t.routeConfig?.loadComponent)?r={params:g(g({},t.params),e.params),data:g(g({},t.data),e.data),resolve:g(g(g(g({},e.data),t.data),o?.data),e._resolvedData)}:r={params:g({},e.params),data:g({},e.data),resolve:g(g({},e.data),e._resolvedData??{})},o&&ND(o)&&(r.resolve[Bs]=o.title),r}var Ls=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Bs]}constructor(t,n,r,o,i,s,c,l,u,d){this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=c,this.routeConfig=l,this._resolve=u,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Yo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Yo(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(r=>r.toString()).join("/"),n=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${n}')`}},ml=class extends hl{url;constructor(t,n){super(n),this.url=t,Bh(this,n)}toString(){return kD(this._root)}};function Bh(e,t){t.value._routerState=e,t.children.forEach(n=>Bh(e,n))}function kD(e){let t=e.children.length>0?` { ${e.children.map(kD).join(", ")} } `:"";return`${e.value}${t}`}function fh(e){if(e.snapshot){let t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,Jt(t.queryParams,n.queryParams)||e.queryParamsSubject.next(n.queryParams),t.fragment!==n.fragment&&e.fragmentSubject.next(n.fragment),Jt(t.params,n.params)||e.paramsSubject.next(n.params),hR(t.url,n.url)||e.urlSubject.next(n.url),Jt(t.data,n.data)||e.dataSubject.next(n.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function Nh(e,t){let n=Jt(e.params,t.params)&&vR(e.url,t.url),r=!e.parent!=!t.parent;return n&&!r&&(!e.parent||Nh(e.parent,t.parent))}function ND(e){return typeof e.title=="string"||e.title===null}var BR=new A(""),xD=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=V;activateEvents=new Ve;deactivateEvents=new Ve;attachEvents=new Ve;detachEvents=new Ve;routerOutletData=Ey();parentContexts=I(Vs);location=I(qi);changeDetector=I(Fd);inputBinder=I(Sl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(n){if(n.name){let{firstChange:r,previousValue:o}=n.name;if(r)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(n){return this.parentContexts.getContext(n)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let n=this.parentContexts.getContext(this.name);n?.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new x(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new x(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new x(4012,!1);this.location.detach();let n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){let n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new x(4013,!1);this._activatedRoute=n;let o=this.location,s=n.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new xh(n,c,o.injector,this.routerOutletData);this.activated=o.createComponent(s,{index:o.length,injector:l,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(r){return new(r||e)};static \u0275dir=uc({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[tc]})}return e})(),xh=class{route;childContexts;parent;outletData;constructor(t,n,r,o){this.route=t,this.childContexts=n,this.parent=r,this.outletData=o}get(t,n){return t===jr?this.route:t===Vs?this.childContexts:t===BR?this.outletData:this.parent.get(t,n)}},Sl=new A("");var AD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=X({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(r,o){r&1&&$t(0,"router-outlet")},dependencies:[xD],encapsulation:2})}return e})();function Vh(e){let t=e.children&&e.children.map(Vh),n=t?C(g({},e),{children:t}):g({},e);return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==V&&(n.component=AD),n}function VR(e,t,n){let r=Hs(e,t._root,n?n._root:void 0);return new pl(r,t)}function Hs(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){let r=n.value;r._futureSnapshot=t.value;let o=$R(e,t,n);return new dt(r,o)}else{if(e.shouldAttach(t.value)){let i=e.retrieve(t.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(c=>Hs(e,c)),s}}let r=zR(t.value),o=t.children.map(i=>Hs(e,i));return new dt(r,o)}}function $R(e,t,n){return t.children.map(r=>{for(let o of n.children)if(e.shouldReuseRoute(r.value,o.value.snapshot))return Hs(e,r,o);return Hs(e,r)})}function zR(e){return new jr(new ce(e.url),new ce(e.params),new ce(e.queryParams),new ce(e.fragment),new ce(e.data),e.outlet,e.component,e)}var Us=class{redirectTo;navigationBehaviorOptions;constructor(t,n){this.redirectTo=t,this.navigationBehaviorOptions=n}},OD="ngNavigationCancelingError";function gl(e,t){let{redirectTo:n,navigationBehaviorOptions:r}=Zo(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,o=FD(!1,Ge.Redirect);return o.url=n,o.navigationBehaviorOptions=r,o}function FD(e,t){let n=new Error(`NavigationCancelingError: ${e||""}`);return n[OD]=!0,n.cancellationCode=t,n}function WR(e){return LD(e)&&Zo(e.url)}function LD(e){return!!e&&e[OD]}var Ah=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,n,r,o,i){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=o,this.inputBindingEnabled=i}activate(t){let n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),fh(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){let o=Go(n);t.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,o[s],r),delete o[s]}),Object.values(o).forEach(i=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(o===i)if(o.component){let s=r.getContext(o.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,r);else i&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=Go(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);if(r&&r.outlet){let s=r.outlet.detach(),c=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:c})}}deactivateRouteAndOutlet(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=Go(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(t,n,r){let o=Go(n);t.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new Ph(i.value.snapshot))}),t.children.length&&this.forwardEvent(new Ih(t.value.snapshot))}activateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(fh(o),o===i)if(o.component){let s=r.getOrCreateContext(o.outlet);this.activateChildRoutes(t,n,s.children)}else this.activateChildRoutes(t,n,r);else if(o.component){let s=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let c=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),s.children.onOutletReAttached(c.contexts),s.attachRef=c.componentRef,s.route=c.route.value,s.outlet&&s.outlet.attach(c.componentRef,c.route.value),fh(c.route.value),this.activateChildRoutes(t,null,s.children)}else s.attachRef=null,s.route=o,s.outlet&&s.outlet.activateWith(o,s.injector),this.activateChildRoutes(t,null,s.children)}else this.activateChildRoutes(t,null,r)}},yl=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},Ko=class{component;route;constructor(t,n){this.component=t,this.route=n}};function qR(e,t,n){let r=e._root,o=t?t._root:null;return ks(r,o,n,[r.value])}function GR(e){let t=e.routeConfig?e.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:e,guards:t}}function ri(e,t){let n=Symbol(),r=t.get(e,n);return r===n?typeof e=="function"&&!du(e)?e:t.get(e):r}function ks(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=Go(t);return e.children.forEach(s=>{QR(s,i[s.value.outlet],n,r.concat([s.value]),o),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,c])=>As(c,n.getContext(s),o)),o}function QR(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,s=t?t.value:null,c=n?n.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let l=KR(s,i,i.routeConfig.runGuardsAndResolvers);l?o.canActivateChecks.push(new yl(r)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?ks(e,t,c?c.children:null,r,o):ks(e,t,n,r,o),l&&c&&c.outlet&&c.outlet.isActivated&&o.canDeactivateChecks.push(new Ko(c.outlet.component,s))}else s&&As(t,c,o),o.canActivateChecks.push(new yl(r)),i.component?ks(e,null,c?c.children:null,r,o):ks(e,null,n,r,o);return o}function KR(e,t,n){if(typeof n=="function")return ke(t._environmentInjector,()=>n(e,t));switch(n){case"pathParamsChange":return!Hr(e.url,t.url);case"pathParamsOrQueryParamsChange":return!Hr(e.url,t.url)||!Jt(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Nh(e,t)||!Jt(e.queryParams,t.queryParams);default:return!Nh(e,t)}}function As(e,t,n){let r=Go(e),o=e.value;Object.entries(r).forEach(([i,s])=>{o.component?t?As(s,t.children.getContext(i),n):As(s,null,n):As(s,t,n)}),o.component?t&&t.outlet&&t.outlet.isActivated?n.canDeactivateChecks.push(new Ko(t.outlet.component,o)):n.canDeactivateChecks.push(new Ko(null,o)):n.canDeactivateChecks.push(new Ko(null,o))}function $s(e){return typeof e=="function"}function YR(e){return typeof e=="boolean"}function ZR(e){return e&&$s(e.canLoad)}function JR(e){return e&&$s(e.canActivate)}function XR(e){return e&&$s(e.canActivateChild)}function eP(e){return e&&$s(e.canDeactivate)}function tP(e){return e&&$s(e.canMatch)}function HD(e){return e instanceof tn||e?.name==="EmptyError"}var ol=Symbol("INITIAL_VALUE");function ni(){return it(e=>$l(e.map(t=>t.pipe(nn(1),pi(ol)))).pipe(L(t=>{for(let n of t)if(n!==!0){if(n===ol)return ol;if(n===!1||nP(n))return n}return!0}),Te(t=>t!==ol),nn(1)))}function nP(e){return Zo(e)||e instanceof Us}function UD(e){return e.aborted?H(void 0).pipe(nn(1)):new F(t=>{let n=()=>{t.next(),t.complete()};return e.addEventListener("abort",n),()=>e.removeEventListener("abort",n)})}function jD(e){return mi(UD(e))}function rP(e){return De(t=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:o,canDeactivateChecks:i}}=t;return i.length===0&&o.length===0?H(C(g({},t),{guardsResult:!0})):oP(i,n,r).pipe(De(s=>s&&YR(s)?iP(n,o,e):H(s)),L(s=>C(g({},t),{guardsResult:s})))})}function oP(e,t,n){return ne(e).pipe(De(r=>uP(r.component,r.route,n,t)),rn(r=>r!==!0,!0))}function iP(e,t,n){return ne(t).pipe(Zr(r=>Ot(aP(r.route.parent,n),sP(r.route,n),lP(e,r.path),cP(e,r.route))),rn(r=>r!==!0,!0))}function sP(e,t){return e!==null&&t&&t(new Rh(e)),H(!0)}function aP(e,t){return e!==null&&t&&t(new Ch(e)),H(!0)}function cP(e,t){let n=t.routeConfig?t.routeConfig.canActivate:null;if(!n||n.length===0)return H(!0);let r=n.map(o=>hi(()=>{let i=t._environmentInjector,s=ri(o,i),c=JR(s)?s.canActivate(t,e):ke(i,()=>s(t,e));return Br(c).pipe(rn())}));return H(r).pipe(ni())}function lP(e,t){let n=t[t.length-1],o=t.slice(0,t.length-1).reverse().map(i=>GR(i)).filter(i=>i!==null).map(i=>hi(()=>{let s=i.guards.map(c=>{let l=i.node._environmentInjector,u=ri(c,l),d=XR(u)?u.canActivateChild(n,e):ke(l,()=>u(n,e));return Br(d).pipe(rn())});return H(s).pipe(ni())}));return H(o).pipe(ni())}function uP(e,t,n,r){let o=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!o||o.length===0)return H(!0);let i=o.map(s=>{let c=t._environmentInjector,l=ri(s,c),u=eP(l)?l.canDeactivate(e,t,n,r):ke(c,()=>l(e,t,n,r));return Br(u).pipe(rn())});return H(i).pipe(ni())}function dP(e,t,n,r,o){let i=t.canLoad;if(i===void 0||i.length===0)return H(!0);let s=i.map(c=>{let l=ri(c,e),u=ZR(l)?l.canLoad(t,n):ke(e,()=>l(t,n)),d=Br(u);return o?d.pipe(jD(o)):d});return H(s).pipe(ni(),BD(r))}function BD(e){return Hl(be(t=>{if(typeof t!="boolean")throw gl(e,t)}),L(t=>t===!0))}function fP(e,t,n,r,o,i){let s=t.canMatch;if(!s||s.length===0)return H(!0);let c=s.map(l=>{let u=ri(l,e),d=tP(u)?u.canMatch(t,n,o):ke(e,()=>u(t,n,o));return Br(d).pipe(jD(i))});return H(c).pipe(ni(),BD(r))}var En=class e extends Error{segmentGroup;constructor(t){super(),this.segmentGroup=t||null,Object.setPrototypeOf(this,e.prototype)}},js=class e extends Error{urlTree;constructor(t){super(),this.urlTree=t,Object.setPrototypeOf(this,e.prototype)}};function hP(e){throw new x(4e3,!1)}function pP(e){throw FD(!1,Ge.GuardRejected)}var Oh=class{urlSerializer;urlTree;constructor(t,n){this.urlSerializer=t,this.urlTree=n}lineralizeSegments(t,n){return Z(this,null,function*(){let r=[],o=n.root;for(;;){if(r=r.concat(o.segments),o.numberOfChildren===0)return r;if(o.numberOfChildren>1||!o.children[V])throw hP(`${t.redirectTo}`);o=o.children[V]}})}applyRedirectCommands(t,n,r,o,i){return Z(this,null,function*(){let s=yield mP(n,o,i);if(s instanceof At)throw new js(s);let c=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),t,r);if(s[0]==="/")throw new js(c);return c})}applyRedirectCreateUrlTree(t,n,r,o){let i=this.createSegmentGroup(t,n.root,r,o);return new At(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){let r={};return Object.entries(t).forEach(([o,i])=>{if(typeof i=="string"&&i[0]===":"){let c=i.substring(1);r[o]=n[c]}else r[o]=i}),r}createSegmentGroup(t,n,r,o){let i=this.createSegments(t,n.segments,r,o),s={};return Object.entries(n.children).forEach(([c,l])=>{s[c]=this.createSegmentGroup(t,l,r,o)}),new te(i,s)}createSegments(t,n,r,o){return n.map(i=>i.path[0]===":"?this.findPosParam(t,i,o):this.findOrReturn(i,r))}findPosParam(t,n,r){let o=r[n.path.substring(1)];if(!o)throw new x(4001,!1);return o}findOrReturn(t,n){let r=0;for(let o of n){if(o.path===t.path)return n.splice(r),o;r++}return t}};function mP(e,t,n){if(typeof e=="string")return Promise.resolve(e);let r=e;return cl(Br(ke(n,()=>r(t))))}function gP(e,t){return e.providers&&!e._injector&&(e._injector=Gi(e.providers,t,`Route: ${e.path}`)),e._injector??t}function Xt(e){return e.outlet||V}function yP(e,t){let n=e.filter(r=>Xt(r)===t);return n.push(...e.filter(r=>Xt(r)!==t)),n}var Fh={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function VD(e){return{routeConfig:e.routeConfig,url:e.url,params:e.params,queryParams:e.queryParams,fragment:e.fragment,data:e.data,outlet:e.outlet,title:e.title,paramMap:e.paramMap,queryParamMap:e.queryParamMap}}function vP(e,t,n,r,o,i,s){let c=$D(e,t,n);if(!c.matched)return H(c);let l=VD(i(c));return r=gP(t,r),fP(r,t,n,o,l,s).pipe(L(u=>u===!0?c:g({},Fh)))}function $D(e,t,n){if(t.path==="")return t.pathMatch==="full"&&(e.hasChildren()||n.length>0)?g({},Fh):{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};let o=(t.matcher||fR)(n,e,t);if(!o)return g({},Fh);let i={};Object.entries(o.posParams??{}).forEach(([c,l])=>{i[c]=l.path});let s=o.consumed.length>0?g(g({},i),o.consumed[o.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:o.consumed,remainingSegments:n.slice(o.consumed.length),parameters:s,positionalParamSegments:o.posParams??{}}}function fD(e,t,n,r){return n.length>0&&bP(e,n,r)?{segmentGroup:new te(t,DP(r,new te(n,e.children))),slicedSegments:[]}:n.length===0&&EP(e,n,r)?{segmentGroup:new te(e.segments,SP(e,n,r,e.children)),slicedSegments:n}:{segmentGroup:new te(e.segments,e.children),slicedSegments:n}}function SP(e,t,n,r){let o={};for(let i of n)if(Dl(e,t,i)&&!r[Xt(i)]){let s=new te([],{});o[Xt(i)]=s}return g(g({},r),o)}function DP(e,t){let n={};n[V]=t;for(let r of e)if(r.path===""&&Xt(r)!==V){let o=new te([],{});n[Xt(r)]=o}return n}function bP(e,t,n){return n.some(r=>Dl(e,t,r)&&Xt(r)!==V)}function EP(e,t,n){return n.some(r=>Dl(e,t,r))}function Dl(e,t,n){return(e.hasChildren()||t.length>0)&&n.pathMatch==="full"?!1:n.path===""}function TP(e,t,n){return t.length===0&&!e.children[n]}var Lh=class{};function wP(e,t,n,r,o,i,s="emptyOnly",c){return Z(this,null,function*(){return new Hh(e,t,n,r,o,s,i,c).recognize()})}var CP=31,Hh=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,n,r,o,i,s,c,l){this.injector=t,this.configLoader=n,this.rootComponentType=r,this.config=o,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=c,this.abortSignal=l,this.applyRedirects=new Oh(this.urlSerializer,this.urlTree)}noMatchError(t){return new x(4002,`'${t.segmentGroup}'`)}recognize(){return Z(this,null,function*(){let t=fD(this.urlTree.root,[],[],this.config).segmentGroup,{children:n,rootSnapshot:r}=yield this.match(t),o=new dt(r,n),i=new ml("",o),s=NR(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}})}match(t){return Z(this,null,function*(){let n=new Ls([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),V,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,t,V,n),rootSnapshot:n}}catch(r){if(r instanceof js)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof En?this.noMatchError(r):r}})}processSegmentGroup(t,n,r,o,i){return Z(this,null,function*(){if(r.segments.length===0&&r.hasChildren())return this.processChildren(t,n,r,i);let s=yield this.processSegment(t,n,r,r.segments,o,!0,i);return s instanceof dt?[s]:[]})}processChildren(t,n,r,o){return Z(this,null,function*(){let i=[];for(let l of Object.keys(r.children))l==="primary"?i.unshift(l):i.push(l);let s=[];for(let l of i){let u=r.children[l],d=yP(n,l),f=yield this.processSegmentGroup(t,d,u,l,o);s.push(...f)}let c=zD(s);return IP(c),c})}processSegment(t,n,r,o,i,s,c){return Z(this,null,function*(){for(let l of n)try{return yield this.processSegmentAgainstRoute(l._injector??t,n,l,r,o,i,s,c)}catch(u){if(u instanceof En||HD(u))continue;throw u}if(TP(r,o,i))return new Lh;throw new En(r)})}processSegmentAgainstRoute(t,n,r,o,i,s,c,l){return Z(this,null,function*(){if(Xt(r)!==s&&(s===V||!Dl(o,i,r)))throw new En(o);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(t,o,r,i,s,l);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(t,o,n,r,i,s,l);throw new En(o)})}expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s,c){return Z(this,null,function*(){let{matched:l,parameters:u,consumedSegments:d,positionalParamSegments:f,remainingSegments:h}=$D(n,o,i);if(!l)throw new En(n);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>CP&&(this.allowRedirects=!1));let p=this.createSnapshot(t,o,i,u,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let v=yield this.applyRedirects.applyRedirectCommands(d,o.redirectTo,f,VD(p),t),S=yield this.applyRedirects.lineralizeSegments(o,v);return this.processSegment(t,r,n,S.concat(h),s,!1,c)})}createSnapshot(t,n,r,o,i){let s=new Ls(r,o,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,PP(n),Xt(n),n.component??n._loadedComponent??null,n,MP(n),t),c=jh(s,i,this.paramsInheritanceStrategy);return s.params=Object.freeze(c.params),s.data=Object.freeze(c.data),s}matchSegmentAgainstRoute(t,n,r,o,i,s){return Z(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=_=>this.createSnapshot(t,r,_.consumedSegments,_.parameters,s),l=yield cl(vP(n,r,o,t,this.urlSerializer,c,this.abortSignal));if(r.path==="**"&&(n.children={}),!l?.matched)throw new En(n);t=r._injector??t;let{routes:u}=yield this.getChildConfig(t,r,o),d=r._loadedInjector??t,{parameters:f,consumedSegments:h,remainingSegments:p}=l,v=this.createSnapshot(t,r,h,f,s),{segmentGroup:S,slicedSegments:y}=fD(n,h,p,u);if(y.length===0&&S.hasChildren()){let _=yield this.processChildren(d,u,S,v);return new dt(v,_)}if(u.length===0&&y.length===0)return new dt(v,[]);let D=Xt(r)===i,E=yield this.processSegment(d,u,S,y,D?V:i,!0,v);return new dt(v,E instanceof dt?[E]:[])})}getChildConfig(t,n,r){return Z(this,null,function*(){if(n.children)return{routes:n.children,injector:t};if(n.loadChildren){if(n._loadedRoutes!==void 0){let i=n._loadedNgModuleFactory;return i&&!n._loadedInjector&&(n._loadedInjector=i.create(t).injector),{routes:n._loadedRoutes,injector:n._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield cl(dP(t,n,r,this.urlSerializer,this.abortSignal))){let i=yield this.configLoader.loadChildren(t,n);return n._loadedRoutes=i.routes,n._loadedInjector=i.injector,n._loadedNgModuleFactory=i.factory,i}throw pP(n)}return{routes:[],injector:t}})}};function IP(e){e.sort((t,n)=>t.value.outlet===V?-1:n.value.outlet===V?1:t.value.outlet.localeCompare(n.value.outlet))}function RP(e){let t=e.value.routeConfig;return t&&t.path===""}function zD(e){let t=[],n=new Set;for(let r of e){if(!RP(r)){t.push(r);continue}let o=t.find(i=>r.value.routeConfig===i.value.routeConfig);o!==void 0?(o.children.push(...r.children),n.add(o)):t.push(r)}for(let r of n){let o=zD(r.children);t.push(new dt(r.value,o))}return t.filter(r=>!n.has(r))}function PP(e){return e.data||{}}function MP(e){return e.resolve||{}}function _P(e,t,n,r,o,i,s){return De(c=>Z(null,null,function*(){let{state:l,tree:u}=yield wP(e,t,n,r,c.extractedUrl,o,i,s);return C(g({},c),{targetSnapshot:l,urlAfterRedirects:u})}))}function kP(e){return De(t=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=t;if(!r.length)return H(t);let o=new Set(r.map(c=>c.route)),i=new Set;for(let c of o)if(!i.has(c))for(let l of WD(c))i.add(l);let s=0;return ne(i).pipe(Zr(c=>o.has(c)?NP(c,n,e):(c.data=jh(c,c.parent,e).resolve,H(void 0))),be(()=>s++),Sa(1),De(c=>s===i.size?H(t):le))})}function WD(e){let t=e.children.map(n=>WD(n)).flat();return[e,...t]}function NP(e,t,n){let r=e.routeConfig,o=e._resolve;return r?.title!==void 0&&!ND(r)&&(o[Bs]=r.title),hi(()=>(e.data=jh(e,e.parent,n).resolve,xP(o,e,t).pipe(L(i=>(e._resolvedData=i,e.data=g(g({},e.data),i),null)))))}function xP(e,t,n){let r=ph(e);if(r.length===0)return H({});let o={};return ne(r).pipe(De(i=>AP(e[i],t,n).pipe(rn(),be(s=>{if(s instanceof Us)throw gl(new Ur,s);o[i]=s}))),Sa(1),L(()=>o),Ft(i=>HD(i)?le:Xn(i)))}function AP(e,t,n){let r=t._environmentInjector,o=ri(e,r),i=o.resolve?o.resolve(t,n):ke(r,()=>o(t,n));return Br(i)}function hD(e){return it(t=>{let n=e(t);return n?ne(n).pipe(L(()=>t)):H(t)})}var qD=(()=>{class e{buildTitle(n){let r,o=n.root;for(;o!==void 0;)r=this.getResolvedTitleForRoute(o)??r,o=o.children.find(i=>i.outlet===V);return r}getResolvedTitleForRoute(n){return n.data[Bs]}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:()=>I(OP),providedIn:"root"})}return e})(),OP=(()=>{class e extends qD{title;constructor(n){super(),this.title=n}updateTitle(n){let r=this.buildTitle(n);r!==void 0&&this.title.setTitle(r)}static \u0275fac=function(r){return new(r||e)(O(Ky))};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),bl=new A("",{factory:()=>({})}),El=new A(""),GD=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=I(xd);loadComponent(n,r){return Z(this,null,function*(){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let o=Z(this,null,function*(){try{let i=yield mD(ke(n,()=>r.loadComponent())),s=yield KD(QD(i));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=s,s}finally{this.componentLoaders.delete(r)}});return this.componentLoaders.set(r,o),o})}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=Z(this,null,function*(){try{let i=yield FP(r,this.compiler,n,this.onLoadEndListener);return r._loadedRoutes=i.routes,r._loadedInjector=i.injector,r._loadedNgModuleFactory=i.factory,i}finally{this.childrenLoaders.delete(r)}});return this.childrenLoaders.set(r,o),o}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function FP(e,t,n,r){return Z(this,null,function*(){let o=yield mD(ke(n,()=>e.loadChildren())),i=yield KD(QD(o)),s;i instanceof lc||Array.isArray(i)?s=i:s=yield t.compileModuleAsync(i),r&&r(e);let c,l,u=!1,d;return Array.isArray(s)?(l=s,u=!0):(c=s.create(n).injector,d=s,l=c.get(El,[],{optional:!0,self:!0}).flat()),{routes:l.map(Vh),injector:c,factory:d}})}function LP(e){return e&&typeof e=="object"&&"default"in e}function QD(e){return LP(e)?e.default:e}function KD(e){return Z(this,null,function*(){return e})}var $h=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:()=>I(HP),providedIn:"root"})}return e})(),HP=(()=>{class e{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,r){return n}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),YD=new A("");var UP=()=>{},ZD=new A(""),JD=(()=>{class e{currentNavigation=co(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=co(null);events=new fe;transitionAbortWithErrorSubject=new fe;configLoader=I(GD);environmentInjector=I(pe);destroyRef=I(xn);urlSerializer=I(vl);rootContexts=I(Vs);location=I(yo);inputBindingEnabled=I(Sl,{optional:!0})!==null;titleStrategy=I(qD);options=I(bl,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=I($h);createViewTransition=I(YD,{optional:!0});navigationErrorHandler=I(ZD,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>H(void 0);rootComponentType=null;destroyed=!1;constructor(){let n=o=>this.events.next(new Th(o)),r=o=>this.events.next(new wh(o));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=n,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(n){let r=++this.navigationId;An(()=>{this.transitions?.next(C(g({},n),{extractedUrl:this.urlHandlingStrategy.extract(n.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(n){return this.transitions=new ce(null),this.transitions.pipe(Te(r=>r!==null),it(r=>{let o=!1,i=new AbortController,s=()=>!o&&this.currentTransition?.id===r.id;return H(r).pipe(it(c=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,"",Ge.SupersededByNewNavigation),le;this.currentTransition=r;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:l?C(g({},l),{previousNavigation:null}):null,abort:()=>i.abort(),routesRecognizeHandler:c.routesRecognizeHandler,beforeActivateHandler:c.beforeActivateHandler});let u=!n.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=c.extras.onSameUrlNavigation??n.onSameUrlNavigation;if(!u&&d!=="reload")return this.events.next(new qn(c.id,this.urlSerializer.serialize(c.rawUrl),"",dl.IgnoredSameUrlNavigation)),c.resolve(!1),le;if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return H(c).pipe(it(f=>(this.events.next(new Jo(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?le:Promise.resolve(f))),_P(this.environmentInjector,this.configLoader,this.rootComponentType,n.config,this.urlSerializer,this.paramsInheritanceStrategy,i.signal),be(f=>{r.targetSnapshot=f.targetSnapshot,r.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=f.urlAfterRedirects,h)),this.events.next(new Fs)}),it(f=>ne(r.routesRecognizeHandler.deferredHandle??H(void 0)).pipe(L(()=>f))),be(()=>{let f=new fl(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(f)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:f,extractedUrl:h,source:p,restoredState:v,extras:S}=c,y=new Jo(f,this.urlSerializer.serialize(h),p,v);this.events.next(y);let D=_D(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=C(g({},c),{targetSnapshot:D,urlAfterRedirects:h,extras:C(g({},S),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(E=>(E.finalUrl=h,E)),H(r)}else return this.events.next(new qn(c.id,this.urlSerializer.serialize(c.extractedUrl),"",dl.IgnoredByUrlHandlingStrategy)),c.resolve(!1),le}),L(c=>{let l=new Sh(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);return this.events.next(l),this.currentTransition=r=C(g({},c),{guards:qR(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),r}),rP(c=>this.events.next(c)),it(c=>{if(r.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw gl(this.urlSerializer,c.guardsResult);let l=new Dh(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);if(this.events.next(l),!s())return le;if(!c.guardsResult)return this.cancelNavigationTransition(c,"",Ge.GuardRejected),le;if(c.guards.canActivateChecks.length===0)return H(c);let u=new bh(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);if(this.events.next(u),!s())return le;let d=!1;return H(c).pipe(kP(this.paramsInheritanceStrategy),be({next:()=>{d=!0;let f=new Eh(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(f)},complete:()=>{d||this.cancelNavigationTransition(c,"",Ge.NoDataFromResolver)}}))}),hD(c=>{let l=d=>{let f=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let h=d._environmentInjector;f.push(this.configLoader.loadComponent(h,d.routeConfig).then(p=>{d.component=p}))}for(let h of d.children)f.push(...l(h));return f},u=l(c.targetSnapshot.root);return u.length===0?H(c):ne(Promise.all(u).then(()=>c))}),hD(()=>this.afterPreactivation()),it(()=>{let{currentSnapshot:c,targetSnapshot:l}=r,u=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return u?ne(u).pipe(L(()=>r)):H(r)}),nn(1),it(c=>{let l=VR(n.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);this.currentTransition=r=c=C(g({},c),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new ei);let u=r.beforeActivateHandler.deferredHandle;return u?ne(u.then(()=>c)):H(c)}),be(c=>{new Ah(n.routeReuseStrategy,r.targetRouterState,r.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s()&&(o=!0,this.currentNavigation.update(l=>(l.abort=UP,l)),this.lastSuccessfulNavigation.set(An(this.currentNavigation)),this.events.next(new Wn(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0))}),mi(UD(i.signal).pipe(Te(()=>!o&&!r.targetRouterState),be(()=>{this.cancelNavigationTransition(r,i.signal.reason+"",Ge.Aborted)}))),be({complete:()=>{o=!0}}),mi(this.transitionAbortWithErrorSubject.pipe(be(c=>{throw c}))),Cn(()=>{i.abort(),o||this.cancelNavigationTransition(r,"",Ge.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ft(c=>{if(o=!0,this.destroyed)return r.resolve(!1),le;if(LD(c))this.events.next(new xt(r.id,this.urlSerializer.serialize(r.extractedUrl),c.message,c.cancellationCode)),WR(c)?this.events.next(new ti(c.url,c.navigationBehaviorOptions)):r.resolve(!1);else{let l=new Xo(r.id,this.urlSerializer.serialize(r.extractedUrl),c,r.targetSnapshot??void 0);try{let u=ke(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(u instanceof Us){let{message:d,cancellationCode:f}=gl(this.urlSerializer,u);this.events.next(new xt(r.id,this.urlSerializer.serialize(r.extractedUrl),d,f)),this.events.next(new ti(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(l),c}catch(u){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(u)}}return le}))}))}cancelNavigationTransition(n,r,o){let i=new xt(n.id,this.urlSerializer.serialize(n.extractedUrl),r,o);this.events.next(i),n.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let n=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=An(this.currentNavigation),o=r?.targetBrowserUrl??r?.extractedUrl;return n.toString()!==o?.toString()&&!r?.extras.skipLocationChange}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function jP(e){return e!==xs}var XD=new A("");var BP=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:()=>I(VP),providedIn:"root"})}return e})(),Uh=class{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}shouldDestroyInjector(t){return!0}},VP=(()=>{class e extends Uh{static \u0275fac=(()=>{let n;return function(o){return(n||(n=$i(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),zh=(()=>{class e{urlSerializer=I(vl);options=I(bl,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=I(yo);urlHandlingStrategy=I($h);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new At;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:n,initialUrl:r,targetBrowserUrl:o}){let i=n!==void 0?this.urlHandlingStrategy.merge(n,r):r,s=o??i;return s instanceof At?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:n,finalUrl:r,initialUrl:o}){r&&n?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,o),this.routerState=n):this.rawUrlTree=o}routerState=_D(null,I(pe));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:()=>I($P),providedIn:"root"})}return e})(),$P=(()=>{class e extends zh{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(n){return this.location.subscribe(r=>{r.type==="popstate"&&setTimeout(()=>{n(r.url,r.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(n,r){n instanceof Jo?this.updateStateMemento():n instanceof qn?this.commitTransition(r):n instanceof fl?this.urlUpdateStrategy==="eager"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):n instanceof ei?(this.commitTransition(r),this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):n instanceof xt&&!MD(n)?this.restoreHistory(r):n instanceof Xo?this.restoreHistory(r,!0):n instanceof Wn&&(this.lastSuccessfulId=n.id,this.currentPageId=this.browserPageId)}setBrowserUrl(n,{extras:r,id:o}){let{replaceUrl:i,state:s}=r;if(this.location.isCurrentPathEqualTo(n)||i){let c=this.browserPageId,l=g(g({},s),this.generateNgRouterState(o,c));this.location.replaceState(n,"",l)}else{let c=g(g({},s),this.generateNgRouterState(o,this.browserPageId+1));this.location.go(n,"",c)}}restoreHistory(n,r=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,i=this.currentPageId-o;i!==0?this.location.historyGo(i):this.getCurrentUrlTree()===n.finalUrl&&i===0&&(this.resetInternalState(n),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetInternalState(n),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:n}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(n,r){return this.canceledNavigationResolution==="computed"?{navigationId:n,\u0275routerPageId:r}:{navigationId:n}}static \u0275fac=(()=>{let n;return function(o){return(n||(n=$i(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function eb(e,t){e.events.pipe(Te(n=>n instanceof Wn||n instanceof xt||n instanceof Xo||n instanceof qn),L(n=>n instanceof Wn||n instanceof qn?0:(n instanceof xt?n.code===Ge.Redirect||n.code===Ge.SupersededByNewNavigation:!1)?2:1),Te(n=>n!==2),nn(1)).subscribe(()=>{t()})}var Wh=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=I(_d);stateManager=I(zh);options=I(bl,{optional:!0})||{};pendingTasks=I(dn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=I(JD);urlSerializer=I(vl);location=I(yo);urlHandlingStrategy=I($h);injector=I(pe);_events=new fe;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=I(BP);injectorCleanup=I(XD,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=I(El,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!I(Sl,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:n=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Pe;subscribeToNavigationEvents(){let n=this.navigationTransitions.events.subscribe(r=>{try{let o=this.navigationTransitions.currentTransition,i=An(this.navigationTransitions.currentNavigation);if(o!==null&&i!==null){if(this.stateManager.handleRouterEvent(r,i),r instanceof xt&&r.code!==Ge.Redirect&&r.code!==Ge.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof Wn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof ti){let s=r.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(r.url,o.currentRawUrl),l=g({scroll:o.extras.scroll,browserUrl:o.extras.browserUrl,info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:o.extras.replaceUrl||this.urlUpdateStrategy==="eager"||jP(o.source)},s);this.scheduleNavigation(c,xs,null,l,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}UR(r)&&this._events.next(r)}catch(o){this.navigationTransitions.transitionAbortWithErrorSubject.next(o)}});this.eventsSubscription.add(n)}resetRootComponentType(n){this.routerState.root.component=n,this.navigationTransitions.rootComponentType=n}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),xs,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((n,r,o,i)=>{this.navigateToSyncWithBrowser(n,o,r,i)})}navigateToSyncWithBrowser(n,r,o,i){let s=o?.navigationId?o:null;if(o){let l=g({},o);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(i.state=l)}let c=this.parseUrl(n);this.scheduleNavigation(c,r,s,i).catch(l=>{this.disposed||this.injector.get(Bt)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return An(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(n){this.config=n.map(Vh),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(n,r={}){let{relativeTo:o,queryParams:i,fragment:s,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:s,d=null;switch(c??this.options.defaultQueryParamsHandling){case"merge":d=g(g({},this.currentUrlTree.queryParams),i);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let h=o?o.snapshot:this.routerState.snapshot.root;f=CD(h)}catch(h){(typeof n[0]!="string"||n[0][0]!=="/")&&(n=[]),f=this.currentUrlTree.root}return ID(f,n,d,u??null,this.urlSerializer)}navigateByUrl(n,r={skipLocationChange:!1}){let o=Zo(n)?n:this.parseUrl(n),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,xs,null,r)}navigate(n,r={skipLocationChange:!1}){return zP(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){try{return this.urlSerializer.parse(n)}catch(r){return this.console.warn(eo(4018,!1)),this.urlSerializer.parse("/")}}isActive(n,r){let o;if(r===!0?o=g({},yD):r===!1?o=g({},mh):o=g(g({},mh),r),Zo(n))return aD(this.currentUrlTree,n,o);let i=this.parseUrl(n);return aD(this.currentUrlTree,i,o)}removeEmptyProps(n){return Object.entries(n).reduce((r,[o,i])=>(i!=null&&(r[o]=i),r),{})}scheduleNavigation(n,r,o,i,s){if(this.disposed)return Promise.resolve(!1);let c,l,u;s?(c=s.resolve,l=s.reject,u=s.promise):u=new Promise((f,h)=>{c=f,l=h});let d=this.pendingTasks.add();return eb(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:n,extras:i,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function zP(e){for(let t=0;t<e.length;t++)if(e[t]==null)throw new x(4008,!1)}var WP=new A("");function qh(e,...t){return no([{provide:El,multi:!0,useValue:e},[],{provide:jr,useFactory:qP},{provide:dc,multi:!0,useFactory:GP},t.map(n=>n.\u0275providers)])}function qP(){return I(Wh).routerState.root}function GP(){let e=I(Ut);return t=>{let n=e.get(mo);if(t!==n.components[0])return;let r=e.get(Wh),o=e.get(QP);e.get(KP)===1&&r.initialNavigation(),e.get(YP,null,{optional:!0})?.setUpPreloading(),e.get(WP,null,{optional:!0})?.init(),r.resetRootComponentType(n.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var QP=new A("",{factory:()=>new fe}),KP=new A("",{factory:()=>1});var YP=new A("");var tb=[{path:"",component:nl},{path:"**",redirectTo:""}];var JP=(e,t,n)=>{let r=["POST","PUT","PATCH"].indexOf(e.method.toUpperCase())!==-1,o=u=>["variables","extensions"].indexOf(u.toLowerCase())!==-1,i=e.body.length,s=e.options&&e.options.useMultipart,c;if(s){if(i)return new F(u=>u.error(new Error("File upload is not available when combined with Batching")));if(!r)return new F(u=>u.error(new Error("File upload is not available when GET is used")));if(!n)return new F(u=>u.error(new Error(`To use File upload you need to pass "extractFiles" function from "extract-files" library to HttpLink's options`)));c=n(e.body),s=!!c.files.size}let l={};if(i){if(!r)return new F(u=>u.error(new Error("Batching is not available for GET requests")));l={body:e.body}}else{let u=s?c.clone:e.body;r?l={body:u}:l={params:Object.keys(e.body).reduce((f,h)=>{let p=e.body[h];return f[h]=o(h)?JSON.stringify(p):p,f},{})}}if(s&&r){let u=new FormData;u.append("operations",JSON.stringify(l.body));let d={},f=c.files,h=0;f.forEach(p=>{d[++h]=p}),u.append("map",JSON.stringify(d)),h=0,f.forEach((p,v)=>{u.append(++h+"",v,v.name)}),l.body=u}return t.request(e.method,e.url,g(g({observe:"response",responseType:"json",reportProgress:!1},l),e.options))},XP=(e,t)=>e&&t?t.keys().reduce((r,o)=>r.set(o,t.getAll(o)),e):t||e,nb=(e,t)=>e&&t?[...e.keys()].reduce((n,r)=>n.set(r,e.get(r)),t):t||e;function eM(...e){return e.find(t=>typeof t<"u")}function tM(e){let t=e.headers&&e.headers instanceof Pt?e.headers:new Pt(e.headers);if(e.clientAwareness){let{name:n,version:r}=e.clientAwareness;n&&!t.has("apollographql-client-name")&&(t=t.set("apollographql-client-name",n)),r&&!t.has("apollographql-client-version")&&(t=t.set("apollographql-client-version",r))}return t}var nM={batchInterval:10,batchMax:10,uri:"graphql",method:"POST",withCredentials:!1,includeQuery:!0,includeExtensions:!1,useMultipart:!1};function oi(e,t,n){return eM(e[n],t[n],nM[n])}var Gh=class extends Bn{httpClient;options;requester;print=_o;constructor(t,n){super(),this.httpClient=t,this.options=n,this.options.operationPrinter&&(this.print=this.options.operationPrinter),this.requester=r=>new F(o=>{let i=r.getContext(),s=oi(i,this.options,"method"),c=oi(i,this.options,"includeQuery"),l=oi(i,this.options,"includeExtensions"),u=oi(i,this.options,"uri"),d=oi(i,this.options,"withCredentials"),f=oi(i,this.options,"useMultipart"),h=this.options.useGETForQueries===!0,p=nb(i.httpContext,nb(this.options.httpContext,new Do)),v=r.query.definitions.some(E=>E.kind==="OperationDefinition"&&E.operation==="query");h&&v&&(s="GET");let S={method:s,url:typeof u=="function"?u(r):u,body:{operationName:r.operationName,variables:r.variables},options:{withCredentials:d,useMultipart:f,headers:this.options.headers,context:p}};l&&(S.body.extensions=r.extensions),c&&(S.body.query=this.print(r.query));let y=tM(i);S.options.headers=XP(S.options.headers,y);let D=JP(S,this.httpClient,this.options.extractFiles).subscribe({next:E=>{r.setContext({response:E}),o.next(E.body)},error:E=>o.error(E),complete:()=>o.complete()});return()=>{D.closed||D.unsubscribe()}})}request(t){return this.requester(t)}},rb=(()=>{class e{httpClient;constructor(n){this.httpClient=n}create(n){return new Gh(this.httpClient,n)}static \u0275fac=function(r){return new(r||e)(O(wc))};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();Wd(nl,{providers:[qh(tb),Yd(),qS(()=>{let e=I(rb);return{cache:new Ar,link:e.create({uri:"https://graphqlpokemon.favware.tech/v8"})}})]}).catch(e=>console.error(e));
