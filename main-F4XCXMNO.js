var nb=Object.defineProperty,rb=Object.defineProperties;var ob=Object.getOwnPropertyDescriptors;var js=Object.getOwnPropertySymbols;var Vh=Object.prototype.hasOwnProperty,$h=Object.prototype.propertyIsEnumerable;var Bh=(e,t,n)=>t in e?nb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||={})Vh.call(t,n)&&Bh(e,n,t[n]);if(js)for(var n of js(t))$h.call(t,n)&&Bh(e,n,t[n]);return e},C=(e,t)=>rb(e,ob(t));var Bs=e=>typeof e=="symbol"?e:e+"",ve=(e,t)=>{var n={};for(var r in e)Vh.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&js)for(var r of js(e))t.indexOf(r)<0&&$h.call(e,r)&&(n[r]=e[r]);return n};var ee=(e,t,n)=>new Promise((r,o)=>{var i=l=>{try{c(n.next(l))}catch(u){o(u)}},a=l=>{try{c(n.throw(l))}catch(u){o(u)}},c=l=>l.done?r(l.value):Promise.resolve(l.value).then(i,a);c((n=n.apply(e,t)).next())});var je=null,Vs=!1,bl=1,ib=null,ut=Symbol("SIGNAL");function q(e){let t=je;return je=e,t}function $s(){return je}var zs={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Ws(e){if(Vs)throw new Error("");if(je===null)return;je.consumerOnSignalRead(e);let t=je.producersTail;if(t!==void 0&&t.producer===e)return;let n,r=je.recomputing;if(r&&(n=t!==void 0?t.nextProducer:je.producers,n!==void 0&&n.producer===e)){je.producersTail=n,n.lastReadVersion=e.version;return}let o=e.consumersTail;if(o!==void 0&&o.consumer===je&&(!r||ab(o,je)))return;let i=jr(je),a={producer:e,consumer:je,nextProducer:n,prevConsumer:o,lastReadVersion:e.version,nextConsumer:void 0};je.producersTail=a,t!==void 0?t.nextProducer=a:je.producers=a,i&&Qh(e,a)}function zh(){bl++}function Wh(e){if(!(jr(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===bl)){if(!e.producerMustRecompute(e)&&!qs(e)){Dl(e);return}e.producerRecomputeValue(e),Dl(e)}}function El(e){if(e.consumers===void 0)return;let t=Vs;Vs=!0;try{for(let n=e.consumers;n!==void 0;n=n.nextConsumer){let r=n.consumer;r.dirty||sb(r)}}finally{Vs=t}}function Tl(){return je?.consumerAllowSignalWrites!==!1}function sb(e){e.dirty=!0,El(e),e.consumerMarkedDirty?.(e)}function Dl(e){e.dirty=!1,e.lastCleanEpoch=bl}function Gs(e){return e&&Gh(e),q(e)}function Gh(e){e.producersTail=void 0,e.recomputing=!0}function wl(e,t){q(t),e&&qh(e)}function qh(e){e.recomputing=!1;let t=e.producersTail,n=t!==void 0?t.nextProducer:e.producers;if(n!==void 0){if(jr(e))do n=Cl(n);while(n!==void 0);t!==void 0?t.nextProducer=void 0:e.producers=void 0}}function qs(e){for(let t=e.producers;t!==void 0;t=t.nextProducer){let n=t.producer,r=t.lastReadVersion;if(r!==n.version||(Wh(n),r!==n.version))return!0}return!1}function oi(e){if(jr(e)){let t=e.producers;for(;t!==void 0;)t=Cl(t)}e.producers=void 0,e.producersTail=void 0,e.consumers=void 0,e.consumersTail=void 0}function Qh(e,t){let n=e.consumersTail,r=jr(e);if(n!==void 0?(t.nextConsumer=n.nextConsumer,n.nextConsumer=t):(t.nextConsumer=void 0,e.consumers=t),t.prevConsumer=n,e.consumersTail=t,!r)for(let o=e.producers;o!==void 0;o=o.nextProducer)Qh(o.producer,o)}function Cl(e){let t=e.producer,n=e.nextProducer,r=e.nextConsumer,o=e.prevConsumer;if(e.nextConsumer=void 0,e.prevConsumer=void 0,r!==void 0?r.prevConsumer=o:t.consumersTail=o,o!==void 0)o.nextConsumer=r;else if(t.consumers=r,!jr(t)){let i=t.producers;for(;i!==void 0;)i=Cl(i)}return n}function jr(e){return e.consumerIsAlwaysLive||e.consumers!==void 0}function Kh(e){ib?.(e)}function ab(e,t){let n=t.producersTail;if(n!==void 0){let r=t.producers;do{if(r===e)return!0;if(r===n)break;r=r.nextProducer}while(r!==void 0)}return!1}function Yh(e,t){return Object.is(e,t)}function cb(){throw new Error}var Zh=cb;function Jh(e){Zh(e)}function Il(e){Zh=e}var lb=null;function Rl(e,t){let n=Object.create(Qs);n.value=e,t!==void 0&&(n.equal=t);let r=()=>Xh(n);return r[ut]=n,Kh(n),[r,a=>ii(n,a),a=>ep(n,a)]}function Xh(e){return Ws(e),e.value}function ii(e,t){Tl()||Jh(e),e.equal(e.value,t)||(e.value=t,ub(e))}function ep(e,t){Tl()||Jh(e),ii(e,t(e.value))}var Qs=C(g({},zs),{equal:Yh,value:void 0,kind:"signal"});function ub(e){e.version++,zh(),El(e),lb?.(e)}function Pl(e){let t=q(null);try{return e()}finally{q(t)}}function j(e){return typeof e=="function"}function Br(e){let n=e(r=>{Error.call(r),r.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Ks=Br(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function Gn(e,t){if(e){let n=e.indexOf(t);0<=n&&e.splice(n,1)}}var Re=class e{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let i of n)i.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(j(r))try{r()}catch(i){t=i instanceof Ks?i.errors:[i]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let i of o)try{tp(i)}catch(a){t=t??[],a instanceof Ks?t=[...t,...a.errors]:t.push(a)}}if(t)throw new Ks(t)}}add(t){var n;if(t&&t!==this)if(this.closed)tp(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}}_hasParent(t){let{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){let{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&Gn(n,t)}remove(t){let{_finalizers:n}=this;n&&Gn(n,t),t instanceof e&&t._removeParent(this)}};Re.EMPTY=(()=>{let e=new Re;return e.closed=!0,e})();var Ml=Re.EMPTY;function Ys(e){return e instanceof Re||e&&"closed"in e&&j(e.remove)&&j(e.add)&&j(e.unsubscribe)}function tp(e){j(e)?e():e.unsubscribe()}var St={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Vr={setTimeout(e,t,...n){let{delegate:r}=Vr;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){let{delegate:t}=Vr;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function Zs(e){Vr.setTimeout(()=>{let{onUnhandledError:t}=St;if(t)t(e);else throw e})}function si(){}var np=_l("C",void 0,void 0);function rp(e){return _l("E",void 0,e)}function op(e){return _l("N",e,void 0)}function _l(e,t,n){return{kind:e,value:t,error:n}}var qn=null;function $r(e){if(St.useDeprecatedSynchronousErrorHandling){let t=!qn;if(t&&(qn={errorThrown:!1,error:null}),e(),t){let{errorThrown:n,error:r}=qn;if(qn=null,n)throw r}}else e()}function ip(e){St.useDeprecatedSynchronousErrorHandling&&qn&&(qn.errorThrown=!0,qn.error=e)}var Qn=class extends Re{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,Ys(t)&&t.add(this)):this.destination=hb}static create(t,n,r){return new en(t,n,r)}next(t){this.isStopped?Nl(op(t),this):this._next(t)}error(t){this.isStopped?Nl(rp(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?Nl(np,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},db=Function.prototype.bind;function kl(e,t){return db.call(e,t)}var xl=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){Js(r)}}error(t){let{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){Js(r)}else Js(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){Js(n)}}},en=class extends Qn{constructor(t,n,r){super();let o;if(j(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&St.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&kl(t.next,i),error:t.error&&kl(t.error,i),complete:t.complete&&kl(t.complete,i)}):o=t}this.destination=new xl(o)}};function Js(e){St.useDeprecatedSynchronousErrorHandling?ip(e):Zs(e)}function fb(e){throw e}function Nl(e,t){let{onStoppedNotification:n}=St;n&&Vr.setTimeout(()=>n(e,t))}var hb={closed:!0,next:si,error:fb,complete:si};var zr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function nt(e){return e}function Al(...e){return Ol(e)}function Ol(e){return e.length===0?nt:e.length===1?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}var O=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){let r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){let i=mb(n)?n:new en(n,r,o);return $r(()=>{let{operator:a,source:c}=this;i.add(a?a.call(i,c):c?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return r=sp(r),new r((o,i)=>{let a=new en({next:c=>{try{n(c)}catch(l){i(l),a.unsubscribe()}},error:i,complete:o});this.subscribe(a)})}_subscribe(n){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(n)}[zr](){return this}pipe(...n){return Ol(n)(this)}toPromise(n){return n=sp(n),new n((r,o)=>{let i;this.subscribe(a=>i=a,a=>o(a),()=>r(i))})}}return e.create=t=>new e(t),e})();function sp(e){var t;return(t=e??St.Promise)!==null&&t!==void 0?t:Promise}function pb(e){return e&&j(e.next)&&j(e.error)&&j(e.complete)}function mb(e){return e&&e instanceof Qn||pb(e)&&Ys(e)}function gb(e){return j(e?.lift)}function Q(e){return t=>{if(gb(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Z(e,t,n,r,o){return new Fl(e,t,n,r,o)}var Fl=class extends Qn{constructor(t,n,r,o,i,a){super(t),this.onFinalize=i,this.shouldUnsubscribe=a,this._next=n?function(c){try{n(c)}catch(l){t.error(l)}}:super._next,this._error=o?function(c){try{o(c)}catch(l){t.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(c){t.error(c)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};var ap=Br(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var he=(()=>{class e extends O{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let r=new Xs(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new ap}next(n){$r(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(n)}})}error(n){$r(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){$r(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:r,isStopped:o,observers:i}=this;return r||o?Ml:(this.currentObservers=null,i.push(n),new Re(()=>{this.currentObservers=null,Gn(i,n)}))}_checkFinalizedStatuses(n){let{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){let n=new O;return n.source=this,n}}return e.create=(t,n)=>new Xs(t,n),e})(),Xs=class extends he{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,t)}error(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,t)}complete(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)}_subscribe(t){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&r!==void 0?r:Ml}};var ce=class extends he{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){let{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}};var ai={now(){return(ai.delegate||Date).now()},delegate:void 0};var Kn=class extends he{constructor(t=1/0,n=1/0,r=ai){super(),this._bufferSize=t,this._windowTime=n,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=n===1/0,this._bufferSize=Math.max(1,t),this._windowTime=Math.max(1,n)}next(t){let{isStopped:n,_buffer:r,_infiniteTimeWindow:o,_timestampProvider:i,_windowTime:a}=this;n||(r.push(t),!o&&r.push(i.now()+a)),this._trimBuffer(),super.next(t)}_subscribe(t){this._throwIfClosed(),this._trimBuffer();let n=this._innerSubscribe(t),{_infiniteTimeWindow:r,_buffer:o}=this,i=o.slice();for(let a=0;a<i.length&&!t.closed;a+=r?1:2)t.next(i[a]);return this._checkFinalizedStatuses(t),n}_trimBuffer(){let{_bufferSize:t,_timestampProvider:n,_buffer:r,_infiniteTimeWindow:o}=this,i=(o?1:2)*t;if(t<1/0&&i<r.length&&r.splice(0,r.length-i),!o){let a=n.now(),c=0;for(let l=1;l<r.length&&r[l]<=a;l+=2)c=l;c&&r.splice(0,c+1)}}};var ea=class extends Re{constructor(t,n){super()}schedule(t,n=0){return this}};var ci={setInterval(e,t,...n){let{delegate:r}=ci;return r?.setInterval?r.setInterval(e,t,...n):setInterval(e,t,...n)},clearInterval(e){let{delegate:t}=ci;return(t?.clearInterval||clearInterval)(e)},delegate:void 0};var Wr=class extends ea{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){var r;if(this.closed)return this;this.state=t;let o=this.id,i=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(i,o,n)),this.pending=!0,this.delay=n,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(i,this.id,n),this}requestAsyncId(t,n,r=0){return ci.setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,n,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return n;n!=null&&ci.clearInterval(n)}execute(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let r=this._execute(t,n);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let r=!1,o;try{this.work(t)}catch(i){r=!0,o=i||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){let{id:t,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,Gn(r,this),t!=null&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,super.unsubscribe()}}};var Gr=class e{constructor(t,n=e.now){this.schedulerActionCtor=t,this.now=n}schedule(t,n=0,r){return new this.schedulerActionCtor(this,t).schedule(r,n)}};Gr.now=ai.now;var qr=class extends Gr{constructor(t,n=Gr.now){super(t,n),this.actions=[],this._active=!1}flush(t){let{actions:n}=this;if(this._active){n.push(t);return}let r;this._active=!0;do if(r=t.execute(t.state,t.delay))break;while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}}};var yb=new qr(Wr),cp=yb;var ta=class extends Wr{constructor(t,n){super(t,n),this.scheduler=t,this.work=n}schedule(t,n=0){return n>0?super.schedule(t,n):(this.delay=n,this.state=t,this.scheduler.flush(this),this)}execute(t,n){return n>0||this.closed?super.execute(t,n):this._execute(t,n)}requestAsyncId(t,n,r=0){return r!=null&&r>0||r==null&&this.delay>0?super.requestAsyncId(t,n,r):(t.flush(this),0)}};var na=class extends qr{};var Ll=new na(ta);var le=new O(e=>e.complete());function ra(e){return e&&j(e.schedule)}function lp(e){return e[e.length-1]}function up(e){return j(lp(e))?e.pop():void 0}function Tn(e){return ra(lp(e))?e.pop():void 0}var li=function(){return li=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},li.apply(this,arguments)};function fp(e,t,n,r){function o(i){return i instanceof n?i:new n(function(a){a(i)})}return new(n||(n=Promise))(function(i,a){function c(d){try{u(r.next(d))}catch(f){a(f)}}function l(d){try{u(r.throw(d))}catch(f){a(f)}}function u(d){d.done?i(d.value):o(d.value).then(c,l)}u((r=r.apply(e,t||[])).next())})}function dp(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Yn(e){return this instanceof Yn?(this.v=e,this):new Yn(e)}function hp(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),c("next"),c("throw"),c("return",a),o[Symbol.asyncIterator]=function(){return this},o;function a(h){return function(S){return Promise.resolve(S).then(h,f)}}function c(h,S){r[h]&&(o[h]=function(y){return new Promise(function(v,D){i.push([h,y,v,D])>1||l(h,y)})},S&&(o[h]=S(o[h])))}function l(h,S){try{u(r[h](S))}catch(y){p(i[0][3],y)}}function u(h){h.value instanceof Yn?Promise.resolve(h.value.v).then(d,f):p(i[0][2],h)}function d(h){l("next",h)}function f(h){l("throw",h)}function p(h,S){h(S),i.shift(),i.length&&l(i[0][0],i[0][1])}}function pp(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof dp=="function"?dp(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(a){return new Promise(function(c,l){a=e[i](a),o(c,l,a.done,a.value)})}}function o(i,a,c,l){Promise.resolve(l).then(function(u){i({value:u,done:c})},a)}}var oa=e=>e&&typeof e.length=="number"&&typeof e!="function";function ia(e){return j(e?.then)}function sa(e){return j(e[zr])}function aa(e){return Symbol.asyncIterator&&j(e?.[Symbol.asyncIterator])}function ca(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function vb(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var la=vb();function ua(e){return j(e?.[la])}function da(e){return hp(this,arguments,function*(){let n=e.getReader();try{for(;;){let{value:r,done:o}=yield Yn(n.read());if(o)return yield Yn(void 0);yield yield Yn(r)}}finally{n.releaseLock()}})}function fa(e){return j(e?.getReader)}function Se(e){if(e instanceof O)return e;if(e!=null){if(sa(e))return Sb(e);if(oa(e))return Db(e);if(ia(e))return bb(e);if(aa(e))return mp(e);if(ua(e))return Eb(e);if(fa(e))return Tb(e)}throw ca(e)}function Sb(e){return new O(t=>{let n=e[zr]();if(j(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Db(e){return new O(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function bb(e){return new O(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,Zs)})}function Eb(e){return new O(t=>{for(let n of e)if(t.next(n),t.closed)return;t.complete()})}function mp(e){return new O(t=>{wb(e,t).catch(n=>t.error(n))})}function Tb(e){return mp(da(e))}function wb(e,t){var n,r,o,i;return fp(this,void 0,void 0,function*(){try{for(n=pp(e);r=yield n.next(),!r.done;){let a=r.value;if(t.next(a),t.closed)return}}catch(a){o={error:a}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})}function qe(e,t,n,r=0,o=!1){let i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function Zn(e,t=0){return Q((n,r)=>{n.subscribe(Z(r,o=>qe(r,e,()=>r.next(o),t),()=>qe(r,e,()=>r.complete(),t),o=>qe(r,e,()=>r.error(o),t)))})}function ha(e,t=0){return Q((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function gp(e,t){return Se(e).pipe(ha(t),Zn(t))}function yp(e,t){return Se(e).pipe(ha(t),Zn(t))}function vp(e,t){return new O(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function Sp(e,t){return new O(n=>{let r;return qe(n,t,()=>{r=e[la](),qe(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(a){n.error(a);return}i?n.complete():n.next(o)},0,!0)}),()=>j(r?.return)&&r.return()})}function pa(e,t){if(!e)throw new Error("Iterable cannot be null");return new O(n=>{qe(n,t,()=>{let r=e[Symbol.asyncIterator]();qe(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function Dp(e,t){return pa(da(e),t)}function bp(e,t){if(e!=null){if(sa(e))return gp(e,t);if(oa(e))return vp(e,t);if(ia(e))return yp(e,t);if(aa(e))return pa(e,t);if(ua(e))return Sp(e,t);if(fa(e))return Dp(e,t)}throw ca(e)}function ue(e,t){return t?bp(e,t):Se(e)}function U(...e){let t=Tn(e);return ue(e,t)}function Jn(e,t){let n=j(e)?e:()=>e,r=o=>o.error(n());return new O(t?o=>t.schedule(r,0,o):r)}var wn=class e{constructor(t,n,r){this.kind=t,this.value=n,this.error=r,this.hasValue=t==="N"}observe(t){return Cb(this,t)}do(t,n,r){let{kind:o,value:i,error:a}=this;return o==="N"?t?.(i):o==="E"?n?.(a):r?.()}accept(t,n,r){var o;return j((o=t)===null||o===void 0?void 0:o.next)?this.observe(t):this.do(t,n,r)}toObservable(){let{kind:t,value:n,error:r}=this,o=t==="N"?U(n):t==="E"?Jn(()=>r):t==="C"?le:0;if(!o)throw new TypeError(`Unexpected notification kind ${t}`);return o}static createNext(t){return new e("N",t)}static createError(t){return new e("E",void 0,t)}static createComplete(){return e.completeNotification}};wn.completeNotification=new wn("C");function Cb(e,t){var n,r,o;let{kind:i,value:a,error:c}=e;if(typeof i!="string")throw new TypeError('Invalid notification, missing "kind"');i==="N"?(n=t.next)===null||n===void 0||n.call(t,a):i==="E"?(r=t.error)===null||r===void 0||r.call(t,c):(o=t.complete)===null||o===void 0||o.call(t)}function ma(e){return!!e&&(e instanceof O||j(e.lift)&&j(e.subscribe))}var tn=Br(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"});function Hl(e,t){let n=typeof t=="object";return new Promise((r,o)=>{let i=!1,a;e.subscribe({next:c=>{a=c,i=!0},error:o,complete:()=>{i?r(a):n?r(t.defaultValue):o(new tn)}})})}function Ep(e){return e instanceof Date&&!isNaN(e)}function L(e,t){return Q((n,r)=>{let o=0;n.subscribe(Z(r,i=>{r.next(e.call(t,i,o++))}))})}var{isArray:Ib}=Array;function Rb(e,t){return Ib(t)?e(...t):e(t)}function Tp(e){return L(t=>Rb(e,t))}var{isArray:Pb}=Array,{getPrototypeOf:Mb,prototype:_b,keys:kb}=Object;function wp(e){if(e.length===1){let t=e[0];if(Pb(t))return{args:t,keys:null};if(Nb(t)){let n=kb(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}function Nb(e){return e&&typeof e=="object"&&Mb(e)===_b}function Cp(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function Ul(...e){let t=Tn(e),n=up(e),{args:r,keys:o}=wp(e);if(r.length===0)return ue([],t);let i=new O(xb(r,t,o?a=>Cp(o,a):nt));return n?i.pipe(Tp(n)):i}function xb(e,t,n=nt){return r=>{Ip(t,()=>{let{length:o}=e,i=new Array(o),a=o,c=o;for(let l=0;l<o;l++)Ip(t,()=>{let u=ue(e[l],t),d=!1;u.subscribe(Z(r,f=>{i[l]=f,d||(d=!0,c--),c||r.next(n(i.slice()))},()=>{--a||r.complete()}))},r)},r)}}function Ip(e,t,n){e?qe(n,e,t):t()}function Rp(e,t,n,r,o,i,a,c){let l=[],u=0,d=0,f=!1,p=()=>{f&&!l.length&&!u&&t.complete()},h=y=>u<r?S(y):l.push(y),S=y=>{i&&t.next(y),u++;let v=!1;Se(n(y,d++)).subscribe(Z(t,D=>{o?.(D),i?h(D):t.next(D)},()=>{v=!0},void 0,()=>{if(v)try{for(u--;l.length&&u<r;){let D=l.shift();a?qe(t,a,()=>S(D)):S(D)}p()}catch(D){t.error(D)}}))};return e.subscribe(Z(t,h,()=>{f=!0,p()})),()=>{c?.()}}function De(e,t,n=1/0){return j(t)?De((r,o)=>L((i,a)=>t(r,i,o,a))(Se(e(r,o))),n):(typeof t=="number"&&(n=t),Q((r,o)=>Rp(r,o,e,n)))}function Pp(e=1/0){return De(nt,e)}function Mp(){return Pp(1)}function At(...e){return Mp()(ue(e,Tn(e)))}function ui(e){return new O(t=>{Se(e()).subscribe(t)})}function jl(e=0,t,n=cp){let r=-1;return t!=null&&(ra(t)?n=t:r=t),new O(o=>{let i=Ep(e)?+e-n.now():e;i<0&&(i=0);let a=0;return n.schedule(function(){o.closed||(o.next(a++),0<=r?this.schedule(void 0,r):o.complete())},i)})}function Ee(e,t){return Q((n,r)=>{let o=0;n.subscribe(Z(r,i=>e.call(t,i,o++)&&r.next(i)))})}function Ot(e){return Q((t,n)=>{let r=null,o=!1,i;r=t.subscribe(Z(n,void 0,void 0,a=>{i=Se(e(a,Ot(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function Qr(e,t){return j(t)?De(e,t,1):De(e,1)}function _p(e){return Q((t,n)=>{let r=!1;t.subscribe(Z(n,o=>{r=!0,n.next(o)},()=>{r||n.next(e),n.complete()}))})}function nn(e){return e<=0?()=>le:Q((t,n)=>{let r=0;t.subscribe(Z(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function Bl(e,t=nt){return e=e??Ab,Q((n,r)=>{let o,i=!0;n.subscribe(Z(r,a=>{let c=t(a);(i||!e(o,c))&&(i=!1,o=c,r.next(a))}))})}function Ab(e,t){return e===t}function kp(e=Ob){return Q((t,n)=>{let r=!1;t.subscribe(Z(n,o=>{r=!0,n.next(o)},()=>r?n.complete():n.error(e())))})}function Ob(){return new tn}function Cn(e){return Q((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}function rn(e,t){let n=arguments.length>=2;return r=>r.pipe(e?Ee((o,i)=>e(o,i,r)):nt,nn(1),n?_p(t):kp(()=>new tn))}function ga(e){return e<=0?()=>le:Q((t,n)=>{let r=[];t.subscribe(Z(n,o=>{r.push(o),e<r.length&&r.shift()},()=>{for(let o of r)n.next(o);n.complete()},void 0,()=>{r=null}))})}function Vl(){return Q((e,t)=>{e.subscribe(Z(t,n=>{t.next(wn.createNext(n))},()=>{t.next(wn.createComplete()),t.complete()},n=>{t.next(wn.createError(n)),t.complete()}))})}function Ft(e={}){let{connector:t=()=>new he,resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=e;return i=>{let a,c,l,u=0,d=!1,f=!1,p=()=>{c?.unsubscribe(),c=void 0},h=()=>{p(),a=l=void 0,d=f=!1},S=()=>{let y=a;h(),y?.unsubscribe()};return Q((y,v)=>{u++,!f&&!d&&p();let D=l=l??t();v.add(()=>{u--,u===0&&!f&&!d&&(c=$l(S,o))}),D.subscribe(v),!a&&u>0&&(a=new en({next:E=>D.next(E),error:E=>{f=!0,p(),c=$l(h,n,E),D.error(E)},complete:()=>{d=!0,p(),c=$l(h,r),D.complete()}}),Se(y).subscribe(a))})(i)}}function $l(e,t,...n){if(t===!0){e();return}if(t===!1)return;let r=new en({next:()=>{r.unsubscribe(),e()}});return Se(t(...n)).subscribe(r)}function Xn(e,t,n){let r,o=!1;return e&&typeof e=="object"?{bufferSize:r=1/0,windowTime:t=1/0,refCount:o=!1,scheduler:n}=e:r=e??1/0,Ft({connector:()=>new Kn(r,t,n),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:o})}function di(...e){let t=Tn(e);return Q((n,r)=>{(t?At(e,n,t):At(e,n)).subscribe(r)})}function Dt(e,t){return Q((n,r)=>{let o=null,i=0,a=!1,c=()=>a&&!o&&r.complete();n.subscribe(Z(r,l=>{o?.unsubscribe();let u=0,d=i++;Se(e(l,d)).subscribe(o=Z(r,f=>r.next(t?t(l,f,d,u++):f),()=>{o=null,c()}))},()=>{a=!0,c()}))})}function fi(e){return Q((t,n)=>{Se(e).subscribe(Z(n,()=>n.complete(),si)),!n.closed&&t.subscribe(n)})}function Pe(e,t,n){let r=j(e)||t||n?{next:e,error:t,complete:n}:e;return r?Q((o,i)=>{var a;(a=r.subscribe)===null||a===void 0||a.call(r);let c=!0;o.subscribe(Z(i,l=>{var u;(u=r.next)===null||u===void 0||u.call(r,l),i.next(l)},()=>{var l;c=!1,(l=r.complete)===null||l===void 0||l.call(r),i.complete()},l=>{var u;c=!1,(u=r.error)===null||u===void 0||u.call(r,l),i.error(l)},()=>{var l,u;c&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):nt}var zl;function ya(){return zl}function Lt(e){let t=zl;return zl=e,t}var Np=Symbol("NotFound");function Kr(e){return e===Np||e?.name==="\u0275NotFound"}var k=class extends Error{code;constructor(t,n){super(Zr(t,n)),this.code=t}};function Ub(e){return`NG0${Math.abs(e)}`}function Zr(e,t){return`${Ub(e)}${t?": "+t:""}`}function te(e){for(let t in e)if(e[t]===te)return t;throw Error("")}function In(e){if(typeof e=="string")return e;if(Array.isArray(e))return`[${e.map(In).join(", ")}]`;if(e==null)return""+e;let t=e.overriddenName||e.name;if(t)return`${t}`;let n=e.toString();if(n==null)return""+n;let r=n.indexOf(`
`);return r>=0?n.slice(0,r):n}function iu(e,t){return e?t?`${e} ${t}`:e:t||""}var jb=te({__forward_ref__:te});function Ta(e){return e.__forward_ref__=Ta,e.toString=function(){return In(this())},e}function Qe(e){return su(e)?e():e}function su(e){return typeof e=="function"&&e.hasOwnProperty(jb)&&e.__forward_ref__===Ta}function M(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function ir(e){return{providers:e.providers||[],imports:e.imports||[]}}function vi(e){return Bb(e,wa)}function au(e){return vi(e)!==null}function Bb(e,t){return e.hasOwnProperty(t)&&e[t]||null}function Vb(e){let t=e?.[wa]??null;return t||null}function Gl(e){return e&&e.hasOwnProperty(Sa)?e[Sa]:null}var wa=te({\u0275prov:te}),Sa=te({\u0275inj:te}),N=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(t,n){this._desc=t,this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=M({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function cu(e){return e&&!!e.\u0275providers}var lu=te({\u0275cmp:te}),uu=te({\u0275dir:te}),du=te({\u0275pipe:te}),fu=te({\u0275mod:te}),pi=te({\u0275fac:te}),sr=te({__NG_ELEMENT_ID__:te}),xp=te({__NG_ENV_ID__:te});function hu(e){return Ca(e,"@NgModule"),e[fu]||null}function Pn(e){return Ca(e,"@Component"),e[lu]||null}function pu(e){return Ca(e,"@Directive"),e[uu]||null}function Lp(e){return Ca(e,"@Pipe"),e[du]||null}function Ca(e,t){if(e==null)throw new k(-919,!1)}var Hp=te({ngErrorCode:te}),$b=te({ngErrorMessage:te}),zb=te({ngTokenPath:te});function mu(e,t){return Up("",-200,t)}function Ia(e,t){throw new k(-201,!1)}function Up(e,t,n){let r=new k(t,e);return r[Hp]=t,r[$b]=e,n&&(r[zb]=n),r}function Wb(e){return e[Hp]}var ql;function jp(){return ql}function rt(e){let t=ql;return ql=e,t}function gu(e,t,n){let r=vi(e);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(n&8)return null;if(t!==void 0)return t;Ia(e,"")}var Gb={},er=Gb,qb="__NG_DI_FLAG__",Ql=class{injector;constructor(t){this.injector=t}retrieve(t,n){let r=tr(n)||0;try{return this.injector.get(t,r&8?null:er,r)}catch(o){if(Kr(o))return o;throw o}}};function Qb(e,t=0){let n=ya();if(n===void 0)throw new k(-203,!1);if(n===null)return gu(e,void 0,t);{let r=Kb(t),o=n.retrieve(e,r);if(Kr(o)){if(r.optional)return null;throw o}return o}}function A(e,t=0){return(jp()||Qb)(Qe(e),t)}function I(e,t){return A(e,tr(t))}function tr(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function Kb(e){return{optional:!!(e&8),host:!!(e&1),self:!!(e&2),skipSelf:!!(e&4)}}function Kl(e){let t=[];for(let n=0;n<e.length;n++){let r=Qe(e[n]);if(Array.isArray(r)){if(r.length===0)throw new k(900,!1);let o,i=0;for(let a=0;a<r.length;a++){let c=r[a],l=Yb(c);typeof l=="number"?l===-1?o=c.token:i|=l:o=c}t.push(A(o,i))}else t.push(A(r))}return t}function Yb(e){return e[qb]}function nr(e,t){let n=e.hasOwnProperty(pi);return n?e[pi]:null}function Ra(e,t){e.forEach(n=>Array.isArray(n)?Ra(n,t):t(n))}function yu(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function Si(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}var ar={},bt=[],Jr=new N(""),vu=new N("",-1),Su=new N(""),mi=class{get(t,n=er){if(n===er){let o=Up("",-201);throw o.name="\u0275NotFound",o}return n}};function Xr(e){return{\u0275providers:e}}function Bp(...e){return{\u0275providers:Du(!0,e),\u0275fromNgModule:!0}}function Du(e,...t){let n=[],r=new Set,o,i=a=>{n.push(a)};return Ra(t,a=>{let c=a;Da(c,i,[],r)&&(o||=[],o.push(c))}),o!==void 0&&Vp(o,i),n}function Vp(e,t){for(let n=0;n<e.length;n++){let{ngModule:r,providers:o}=e[n];bu(o,i=>{t(i,r)})}}function Da(e,t,n,r){if(e=Qe(e),!e)return!1;let o=null,i=Gl(e),a=!i&&Pn(e);if(!i&&!a){let l=e.ngModule;if(i=Gl(l),i)o=l;else return!1}else{if(a&&!a.standalone)return!1;o=e}let c=r.has(o);if(a){if(c)return!1;if(r.add(o),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let u of l)Da(u,t,n,r)}}else if(i){if(i.imports!=null&&!c){r.add(o);let u;Ra(i.imports,d=>{Da(d,t,n,r)&&(u||=[],u.push(d))}),u!==void 0&&Vp(u,t)}if(!c){let u=nr(o)||(()=>new o);t({provide:o,useFactory:u,deps:bt},o),t({provide:Su,useValue:o,multi:!0},o),t({provide:Jr,useValue:()=>A(o),multi:!0},o)}let l=i.providers;if(l!=null&&!c){let u=e;bu(l,d=>{t(d,u)})}}else return!1;return o!==e&&e.providers!==void 0}function bu(e,t){for(let n of e)cu(n)&&(n=n.\u0275providers),Array.isArray(n)?bu(n,t):t(n)}var Zb=te({provide:String,useValue:te});function $p(e){return e!==null&&typeof e=="object"&&Zb in e}function Jb(e){return!!(e&&e.useExisting)}function Xb(e){return!!(e&&e.useFactory)}function ba(e){return typeof e=="function"}var Di=new N(""),va={},Ap={},Wl;function bi(){return Wl===void 0&&(Wl=new mi),Wl}var me=class{},rr=class extends me{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,Zl(t,a=>this.processProvider(a)),this.records.set(vu,Yr(void 0,this)),o.has("environment")&&this.records.set(me,Yr(void 0,this));let i=this.records.get(Di);i!=null&&typeof i.value=="string"&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(Su,bt,{self:!0}))}retrieve(t,n){let r=tr(n)||0;try{return this.get(t,er,r)}catch(o){if(Kr(o))return o;throw o}}destroy(){hi(this),this._destroyed=!0;let t=q(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of n)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),q(t)}}onDestroy(t){return hi(this),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){hi(this);let n=Lt(this),r=rt(void 0),o;try{return t()}finally{Lt(n),rt(r)}}get(t,n=er,r){if(hi(this),t.hasOwnProperty(xp))return t[xp](this);let o=tr(r),i,a=Lt(this),c=rt(void 0);try{if(!(o&4)){let u=this.records.get(t);if(u===void 0){let d=oE(t)&&vi(t);d&&this.injectableDefInScope(d)?u=Yr(Yl(t),va):u=null,this.records.set(t,u)}if(u!=null)return this.hydrate(t,u,o)}let l=o&2?bi():this.parent;return n=o&8&&n===er?null:n,l.get(t,n)}catch(l){let u=Wb(l);throw u===-200||u===-201?new k(u,null):l}finally{rt(c),Lt(a)}}resolveInjectorInitializers(){let t=q(null),n=Lt(this),r=rt(void 0),o;try{let i=this.get(Jr,bt,{self:!0});for(let a of i)a()}finally{Lt(n),rt(r),q(t)}}toString(){let t=[],n=this.records;for(let r of n.keys())t.push(In(r));return`R3Injector[${t.join(", ")}]`}processProvider(t){t=Qe(t);let n=ba(t)?t:Qe(t&&t.provide),r=tE(t);if(!ba(t)&&t.multi===!0){let o=this.records.get(n);o||(o=Yr(void 0,va,!0),o.factory=()=>Kl(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n,r){let o=q(null);try{if(n.value===Ap)throw mu(In(t));return n.value===va&&(n.value=Ap,n.value=n.factory(void 0,r)),typeof n.value=="object"&&n.value&&rE(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{q(o)}}injectableDefInScope(t){if(!t.providedIn)return!1;let n=Qe(t.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(t){let n=this._onDestroyHooks.indexOf(t);n!==-1&&this._onDestroyHooks.splice(n,1)}};function Yl(e){let t=vi(e),n=t!==null?t.factory:nr(e);if(n!==null)return n;if(e instanceof N)throw new k(204,!1);if(e instanceof Function)return eE(e);throw new k(204,!1)}function eE(e){if(e.length>0)throw new k(204,!1);let n=Vb(e);return n!==null?()=>n.factory(e):()=>new e}function tE(e){if($p(e))return Yr(void 0,e.useValue);{let t=zp(e);return Yr(t,va)}}function zp(e,t,n){let r;if(ba(e)){let o=Qe(e);return nr(o)||Yl(o)}else if($p(e))r=()=>Qe(e.useValue);else if(Xb(e))r=()=>e.useFactory(...Kl(e.deps||[]));else if(Jb(e))r=(o,i)=>A(Qe(e.useExisting),i!==void 0&&i&8?8:void 0);else{let o=Qe(e&&(e.useClass||e.provide));if(nE(e))r=()=>new o(...Kl(e.deps));else return nr(o)||Yl(o)}return r}function hi(e){if(e.destroyed)throw new k(205,!1)}function Yr(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function nE(e){return!!e.deps}function rE(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function oE(e){return typeof e=="function"||typeof e=="object"&&e.ngMetadataName==="InjectionToken"}function Zl(e,t){for(let n of e)Array.isArray(n)?Zl(n,t):n&&cu(n)?Zl(n.\u0275providers,t):t(n)}function ke(e,t){let n;e instanceof rr?(hi(e),n=e):n=new Ql(e);let r,o=Lt(n),i=rt(void 0);try{return t()}finally{Lt(o),rt(i)}}function Wp(){return jp()!==void 0||ya()!=null}var Et=0,z=1,$=2,Oe=3,dt=4,ft=5,Ei=6,eo=7,Ke=8,Mn=9,an=10,Ye=11,to=12,Eu=13,no=14,ht=15,ro=16,cr=17,Ti=18,_n=19,Tu=20,on=21,Pa=22,wi=23,ot=24,Ma=25,Ci=26,pt=27,Gp=1;var kn=7,Ii=8,Ri=9,Ze=10;function cn(e){return Array.isArray(e)&&typeof e[Gp]=="object"}function Tt(e){return Array.isArray(e)&&e[Gp]===!0}function wu(e){return(e.flags&4)!==0}function lr(e){return e.componentOffset>-1}function _a(e){return(e.flags&1)===1}function ur(e){return!!e.template}function oo(e){return(e[$]&512)!==0}function dr(e){return(e[$]&256)===256}var qp="svg",Qp="math";function wt(e){for(;Array.isArray(e);)e=e[Et];return e}function ln(e,t){return wt(t[e.index])}function Cu(e,t){return e.data[t]}function Ut(e,t){let n=t[e];return cn(n)?n:n[Et]}function ka(e){return(e[$]&128)===128}function Kp(e){return Tt(e[Oe])}function Pi(e,t){return t==null?null:e[t]}function Iu(e){e[cr]=0}function Ru(e){e[$]&1024||(e[$]|=1024,ka(e)&&_i(e))}function Mi(e){return!!(e[$]&9216||e[ot]?.dirty)}function Na(e){e[an].changeDetectionScheduler?.notify(8),e[$]&64&&(e[$]|=1024),Mi(e)&&_i(e)}function _i(e){e[an].changeDetectionScheduler?.notify(0);let t=Rn(e);for(;t!==null&&!(t[$]&8192||(t[$]|=8192,!ka(t)));)t=Rn(t)}function Pu(e,t){if(dr(e))throw new k(911,!1);e[on]===null&&(e[on]=[]),e[on].push(t)}function Yp(e,t){if(e[on]===null)return;let n=e[on].indexOf(t);n!==-1&&e[on].splice(n,1)}function Rn(e){let t=e[Oe];return Tt(t)?t[Oe]:t}function Zp(e){return e[eo]??=[]}function Jp(e){return e.cleanup??=[]}var re={lFrame:um(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Jl=!1;function Xp(){return re.lFrame.elementDepthCount}function em(){re.lFrame.elementDepthCount++}function Mu(){re.lFrame.elementDepthCount--}function tm(){return re.bindingsEnabled}function nm(){return re.skipHydrationRootTNode!==null}function _u(e){return re.skipHydrationRootTNode===e}function ku(){re.skipHydrationRootTNode=null}function Je(){return re.lFrame.lView}function xa(){return re.lFrame.tView}function jt(){let e=Nu();for(;e!==null&&e.type===64;)e=e.parent;return e}function Nu(){return re.lFrame.currentTNode}function rm(){let e=re.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function ki(e,t){let n=re.lFrame;n.currentTNode=e,n.isParent=t}function xu(){return re.lFrame.isParent}function om(){re.lFrame.isParent=!1}function Au(){return Jl}function Ou(e){let t=Jl;return Jl=e,t}function im(e){return re.lFrame.bindingIndex=e}function sm(){return re.lFrame.inI18n}function am(e,t){let n=re.lFrame;n.bindingIndex=n.bindingRootIndex=e,Aa(t)}function cm(){return re.lFrame.currentDirectiveIndex}function Aa(e){re.lFrame.currentDirectiveIndex=e}function Fu(e){re.lFrame.currentQueryIndex=e}function iE(e){let t=e[z];return t.type===2?t.declTNode:t.type===1?e[ft]:null}function Lu(e,t,n){if(n&4){let o=t,i=e;for(;o=o.parent,o===null&&!(n&1);)if(o=iE(i),o===null||(i=i[no],o.type&10))break;if(o===null)return!1;t=o,e=i}let r=re.lFrame=lm();return r.currentTNode=t,r.lView=e,!0}function Oa(e){let t=lm(),n=e[z];re.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function lm(){let e=re.lFrame,t=e===null?null:e.child;return t===null?um(e):t}function um(e){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=t),t}function dm(){let e=re.lFrame;return re.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var Hu=dm;function Fa(){let e=dm();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function fm(){return re.lFrame.selectedIndex}function Nn(e){re.lFrame.selectedIndex=e}function hm(){return re.lFrame.currentNamespace}var pm=!0;function Uu(){return pm}function ju(e){pm=e}function Xl(e,t=null,n=null,r){let o=Bu(e,t,n,r);return o.resolveInjectorInitializers(),o}function Bu(e,t=null,n=null,r,o=new Set){let i=[n||bt,Bp(e)];return r=r||(typeof e=="object"?void 0:In(e)),new rr(i,t||bi(),r||null,o)}var Ht=class e{static THROW_IF_NOT_FOUND=er;static NULL=new mi;static create(t,n){if(Array.isArray(t))return Xl({name:""},n,t,"");{let r=t.name??"";return Xl({name:r},t.parent,t.providers,r)}}static \u0275prov=M({token:e,providedIn:"any",factory:()=>A(vu)});static __NG_ELEMENT_ID__=-1},Te=new N(""),xn=(()=>{class e{static __NG_ELEMENT_ID__=sE;static __NG_ENV_ID__=n=>n}return e})(),eu=class extends xn{_lView;constructor(t){super(),this._lView=t}get destroyed(){return dr(this._lView)}onDestroy(t){let n=this._lView;return Pu(n,t),()=>Yp(n,t)}};function sE(){return new eu(Je())}var mm=!1,gm=new N(""),un=(()=>{class e{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new ce(!1);debugTaskTracker=I(gm,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new O(n=>{n.next(!1),n.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),this.debugTaskTracker?.add(n),n}has(n){return this.pendingTasks.has(n)}remove(n){this.pendingTasks.delete(n),this.debugTaskTracker?.remove(n),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=M({token:e,providedIn:"root",factory:()=>new e})}return e})(),tu=class extends he{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(t=!1){super(),this.__isAsync=t,Wp()&&(this.destroyRef=I(xn,{optional:!0})??void 0,this.pendingTasks=I(un,{optional:!0})??void 0)}emit(t){let n=q(null);try{super.next(t)}finally{q(n)}}subscribe(t,n,r){let o=t,i=n||(()=>null),a=r;if(t&&typeof t=="object"){let l=t;o=l.next?.bind(l),i=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(i=this.wrapInTimeout(i),o&&(o=this.wrapInTimeout(o)),a&&(a=this.wrapInTimeout(a)));let c=super.subscribe({next:o,error:i,complete:a});return t instanceof Re&&t.add(c),c}wrapInTimeout(t){return n=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{t(n)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},Ve=tu;function Ea(...e){}function Vu(e){let t,n;function r(){e=Ea;try{n!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(n),t!==void 0&&clearTimeout(t)}catch(o){}}return t=setTimeout(()=>{e(),r()}),typeof requestAnimationFrame=="function"&&(n=requestAnimationFrame(()=>{e(),r()})),()=>r()}function ym(e){return queueMicrotask(()=>e()),()=>{e=Ea}}var $u="isAngularZone",gi=$u+"_ID",aE=0,Be=class e{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Ve(!1);onMicrotaskEmpty=new Ve(!1);onStable=new Ve(!1);onError=new Ve(!1);constructor(t){let{enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:o=!1,scheduleInRootZone:i=mm}=t;if(typeof Zone>"u")throw new k(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!o&&r,a.shouldCoalesceRunChangeDetection=o,a.callbackScheduled=!1,a.scheduleInRootZone=i,uE(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get($u)===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new k(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new k(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){let i=this._inner,a=i.scheduleEventTask("NgZoneEvent: "+o,t,cE,Ea,Ea);try{return i.runTask(a,n,r)}finally{i.cancelTask(a)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}},cE={};function zu(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function lE(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function t(){Vu(()=>{e.callbackScheduled=!1,nu(e),e.isCheckStableRunning=!0,zu(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{t()}):e._outer.run(()=>{t()}),nu(e)}function uE(e){let t=()=>{lE(e)},n=aE++;e._inner=e._inner.fork({name:"angular",properties:{[$u]:!0,[gi]:n,[gi+n]:!0},onInvokeTask:(r,o,i,a,c,l)=>{if(dE(l))return r.invokeTask(i,a,c,l);try{return Op(e),r.invokeTask(i,a,c,l)}finally{(e.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&t(),Fp(e)}},onInvoke:(r,o,i,a,c,l,u)=>{try{return Op(e),r.invoke(i,a,c,l,u)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!fE(l)&&t(),Fp(e)}},onHasTask:(r,o,i,a)=>{r.hasTask(i,a),o===i&&(a.change=="microTask"?(e._hasPendingMicrotasks=a.microTask,nu(e),zu(e)):a.change=="macroTask"&&(e.hasPendingMacrotasks=a.macroTask))},onHandleError:(r,o,i,a)=>(r.handleError(i,a),e.runOutsideAngular(()=>e.onError.emit(a)),!1)})}function nu(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function Op(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Fp(e){e._nesting--,zu(e)}var yi=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Ve;onMicrotaskEmpty=new Ve;onStable=new Ve;onError=new Ve;run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}};function dE(e){return vm(e,"__ignore_ng_zone__")}function fE(e){return vm(e,"__scheduler_tick__")}function vm(e,t){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[t]===!0}var sn=class{_console=console;handleError(t){this._console.error("ERROR",t)}},Bt=new N("",{factory:()=>{let e=I(Be),t=I(me),n;return r=>{e.runOutsideAngular(()=>{t.destroyed&&!n?setTimeout(()=>{throw r}):(n??=t.get(sn),n.handleError(r))})}}}),Sm={provide:Jr,useValue:()=>{let e=I(sn,{optional:!0})},multi:!0};function io(e,t){let[n,r,o]=Rl(e,t?.equal),i=n,a=i[ut];return i.set=r,i.update=o,i.asReadonly=Dm.bind(i),i}function Dm(){let e=this[ut];if(e.readonlyFn===void 0){let t=()=>this();t[ut]=e,e.readonlyFn=t}return e.readonlyFn}var or=class{},Ni=new N("",{factory:()=>!0});var Wu=new N(""),La=(()=>{class e{internalPendingTasks=I(un);scheduler=I(or);errorHandler=I(Bt);add(){let n=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(n)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(n))}}run(n){let r=this.add();n().catch(this.errorHandler).finally(r)}static \u0275prov=M({token:e,providedIn:"root",factory:()=>new e})}return e})(),Gu=(()=>{class e{static \u0275prov=M({token:e,providedIn:"root",factory:()=>new ru})}return e})(),ru=class{dirtyEffectCount=0;queues=new Map;add(t){this.enqueue(t),this.schedule(t)}schedule(t){t.dirty&&this.dirtyEffectCount++}remove(t){let n=t.zone,r=this.queues.get(n);r.has(t)&&(r.delete(t),t.dirty&&this.dirtyEffectCount--)}enqueue(t){let n=t.zone;this.queues.has(n)||this.queues.set(n,new Set);let r=this.queues.get(n);r.has(t)||r.add(t)}flush(){for(;this.dirtyEffectCount>0;){let t=!1;for(let[n,r]of this.queues)n===null?t||=this.flushQueue(r):t||=n.run(()=>this.flushQueue(r));t||(this.dirtyEffectCount=0)}}flushQueue(t){let n=!1;for(let r of t)r.dirty&&(this.dirtyEffectCount--,n=!0,r.run());return n}},ou=class{[ut];constructor(t){this[ut]=t}destroy(){this[ut].destroy()}};function dn(e){return Pl(e)}function Ui(e){return{toString:e}.toString()}function CE(e){return typeof e=="function"}function Gm(e,t,n,r){t!==null?t.applyValueToInputSignal(t,r):e[n]=r}var Ba=class{previousValue;currentValue;firstChange;constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}},Za=(()=>{let e=()=>qm;return e.ngInherit=!0,e})();function qm(e){return e.type.prototype.ngOnChanges&&(e.setInput=RE),IE}function IE(){let e=Km(this),t=e?.current;if(t){let n=e.previous;if(n===ar)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function RE(e,t,n,r,o){let i=this.declaredInputs[r],a=Km(e)||PE(e,{previous:ar,current:null}),c=a.current||(a.current={}),l=a.previous,u=l[i];c[i]=new Ba(u&&u.currentValue,n,l===ar),Gm(e,t,o,n)}var Qm="__ngSimpleChanges__";function Km(e){return e[Qm]||null}function PE(e,t){return e[Qm]=t}var bm=[];var oe=function(e,t=null,n){for(let r=0;r<bm.length;r++){let o=bm[r];o(e,t,n)}},J=(function(e){return e[e.TemplateCreateStart=0]="TemplateCreateStart",e[e.TemplateCreateEnd=1]="TemplateCreateEnd",e[e.TemplateUpdateStart=2]="TemplateUpdateStart",e[e.TemplateUpdateEnd=3]="TemplateUpdateEnd",e[e.LifecycleHookStart=4]="LifecycleHookStart",e[e.LifecycleHookEnd=5]="LifecycleHookEnd",e[e.OutputStart=6]="OutputStart",e[e.OutputEnd=7]="OutputEnd",e[e.BootstrapApplicationStart=8]="BootstrapApplicationStart",e[e.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",e[e.BootstrapComponentStart=10]="BootstrapComponentStart",e[e.BootstrapComponentEnd=11]="BootstrapComponentEnd",e[e.ChangeDetectionStart=12]="ChangeDetectionStart",e[e.ChangeDetectionEnd=13]="ChangeDetectionEnd",e[e.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",e[e.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",e[e.AfterRenderHooksStart=16]="AfterRenderHooksStart",e[e.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",e[e.ComponentStart=18]="ComponentStart",e[e.ComponentEnd=19]="ComponentEnd",e[e.DeferBlockStateStart=20]="DeferBlockStateStart",e[e.DeferBlockStateEnd=21]="DeferBlockStateEnd",e[e.DynamicComponentStart=22]="DynamicComponentStart",e[e.DynamicComponentEnd=23]="DynamicComponentEnd",e[e.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",e[e.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",e})(J||{});function ME(e,t,n){let{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){let a=qm(t);(n.preOrderHooks??=[]).push(e,a),(n.preOrderCheckHooks??=[]).push(e,a)}o&&(n.preOrderHooks??=[]).push(0-e,o),i&&((n.preOrderHooks??=[]).push(e,i),(n.preOrderCheckHooks??=[]).push(e,i))}function _E(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){let i=e.data[n].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:c,ngAfterViewInit:l,ngAfterViewChecked:u,ngOnDestroy:d}=i;a&&(e.contentHooks??=[]).push(-n,a),c&&((e.contentHooks??=[]).push(n,c),(e.contentCheckHooks??=[]).push(n,c)),l&&(e.viewHooks??=[]).push(-n,l),u&&((e.viewHooks??=[]).push(n,u),(e.viewCheckHooks??=[]).push(n,u)),d!=null&&(e.destroyHooks??=[]).push(n,d)}}function Ha(e,t,n){Ym(e,t,3,n)}function Ua(e,t,n,r){(e[$]&3)===n&&Ym(e,t,n,r)}function qu(e,t){let n=e[$];(n&3)===t&&(n&=16383,n+=1,e[$]=n)}function Ym(e,t,n,r){let o=r!==void 0?e[cr]&65535:0,i=r??-1,a=t.length-1,c=0;for(let l=o;l<a;l++)if(typeof t[l+1]=="number"){if(c=t[l],r!=null&&c>=r)break}else t[l]<0&&(e[cr]+=65536),(c<i||i==-1)&&(kE(e,n,t,l),e[cr]=(e[cr]&4294901760)+l+2),l++}function Em(e,t){oe(J.LifecycleHookStart,e,t);let n=q(null);try{t.call(e)}finally{q(n),oe(J.LifecycleHookEnd,e,t)}}function kE(e,t,n,r){let o=n[r]<0,i=n[r+1],a=o?-n[r]:n[r],c=e[a];o?e[$]>>14<e[cr]>>16&&(e[$]&3)===t&&(e[$]+=16384,Em(c,i)):Em(c,i)}var ao=-1,Oi=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(t,n,r,o){this.factory=t,this.name=o,this.canSeeViewProviders=n,this.injectImpl=r}};function NE(e){return(e.flags&8)!==0}function xE(e){return(e.flags&16)!==0}function AE(e,t,n){let r=0;for(;r<n.length;){let o=n[r];if(typeof o=="number"){if(o!==0)break;r++;let i=n[r++],a=n[r++],c=n[r++];e.setAttribute(t,a,c,i)}else{let i=o,a=n[++r];FE(i)?e.setProperty(t,i,a):e.setAttribute(t,i,a),r++}}return r}function OE(e){return e===3||e===4||e===6}function FE(e){return e.charCodeAt(0)===64}function ld(e,t){if(!(t===null||t.length===0))if(e===null||e.length===0)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){let o=t[r];typeof o=="number"?n=o:n===0||(n===-1||n===2?Tm(e,n,o,null,t[++r]):Tm(e,n,o,null,null))}}return e}function Tm(e,t,n,r,o){let i=0,a=e.length;if(t===-1)a=-1;else for(;i<e.length;){let c=e[i++];if(typeof c=="number"){if(c===t){a=-1;break}else if(c>t){a=i-1;break}}}for(;i<e.length;){let c=e[i];if(typeof c=="number")break;if(c===n){o!==null&&(e[i+1]=o);return}i++,o!==null&&i++}a!==-1&&(e.splice(a,0,t),i=a+1),e.splice(i++,0,n),o!==null&&e.splice(i++,0,o)}function Zm(e){return e!==ao}function Va(e){return e&32767}function LE(e){return e>>16}function $a(e,t){let n=LE(e),r=t;for(;n>0;)r=r[no],n--;return r}var Zu=!0;function wm(e){let t=Zu;return Zu=e,t}var HE=256,Jm=HE-1,Xm=5,UE=0,Vt={};function jE(e,t,n){let r;typeof n=="string"?r=n.charCodeAt(0)||0:n.hasOwnProperty(sr)&&(r=n[sr]),r==null&&(r=n[sr]=UE++);let o=r&Jm,i=1<<o;t.data[e+(o>>Xm)]|=i}function eg(e,t){let n=tg(e,t);if(n!==-1)return n;let r=t[z];r.firstCreatePass&&(e.injectorIndex=t.length,Qu(r.data,e),Qu(t,null),Qu(r.blueprint,null));let o=ud(e,t),i=e.injectorIndex;if(Zm(o)){let a=Va(o),c=$a(o,t),l=c[z].data;for(let u=0;u<8;u++)t[i+u]=c[a+u]|l[a+u]}return t[i+8]=o,i}function Qu(e,t){e.push(0,0,0,0,0,0,0,0,t)}function tg(e,t){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||t[e.injectorIndex+8]===null?-1:e.injectorIndex}function ud(e,t){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;o!==null;){if(r=sg(o),r===null)return ao;if(n++,o=o[no],r.injectorIndex!==-1)return r.injectorIndex|n<<16}return ao}function BE(e,t,n){jE(e,t,n)}function ng(e,t,n){if(n&8||e!==void 0)return e;Ia(t,"NodeInjector")}function rg(e,t,n,r){if(n&8&&r===void 0&&(r=null),(n&3)===0){let o=e[Mn],i=rt(void 0);try{return o?o.get(t,r,n&8):gu(t,r,n&8)}finally{rt(i)}}return ng(r,t,n)}function og(e,t,n,r=0,o){if(e!==null){if(t[$]&2048&&!(r&2)){let a=GE(e,t,n,r,Vt);if(a!==Vt)return a}let i=ig(e,t,n,r,Vt);if(i!==Vt)return i}return rg(t,n,r,o)}function ig(e,t,n,r,o){let i=zE(n);if(typeof i=="function"){if(!Lu(t,e,r))return r&1?ng(o,n,r):rg(t,n,r,o);try{let a;if(a=i(r),a==null&&!(r&8))Ia(n);else return a}finally{Hu()}}else if(typeof i=="number"){let a=null,c=tg(e,t),l=ao,u=r&1?t[ht][ft]:null;for((c===-1||r&4)&&(l=c===-1?ud(e,t):t[c+8],l===ao||!Im(r,!1)?c=-1:(a=t[z],c=Va(l),t=$a(l,t)));c!==-1;){let d=t[z];if(Cm(i,c,d.data)){let f=VE(c,t,n,a,r,u);if(f!==Vt)return f}l=t[c+8],l!==ao&&Im(r,t[z].data[c+8]===u)&&Cm(i,c,t)?(a=d,c=Va(l),t=$a(l,t)):c=-1}}return o}function VE(e,t,n,r,o,i){let a=t[z],c=a.data[e+8],l=r==null?lr(c)&&Zu:r!=a&&(c.type&3)!==0,u=o&1&&i===c,d=$E(c,a,n,l,u);return d!==null?Ju(t,a,d,c,o):Vt}function $E(e,t,n,r,o){let i=e.providerIndexes,a=t.data,c=i&1048575,l=e.directiveStart,u=e.directiveEnd,d=i>>20,f=r?c:c+d,p=o?c+d:u;for(let h=f;h<p;h++){let S=a[h];if(h<l&&n===S||h>=l&&S.type===n)return h}if(o){let h=a[l];if(h&&ur(h)&&h.type===n)return l}return null}function Ju(e,t,n,r,o){let i=e[n],a=t.data;if(i instanceof Oi){let c=i;if(c.resolving)throw mu("");let l=wm(c.canSeeViewProviders);c.resolving=!0;let u=a[n].type||a[n],d,f=c.injectImpl?rt(c.injectImpl):null,p=Lu(e,r,0);try{i=e[n]=c.factory(void 0,o,a,e,r),t.firstCreatePass&&n>=r.directiveStart&&ME(n,a[n],t)}finally{f!==null&&rt(f),wm(l),c.resolving=!1,Hu()}}return i}function zE(e){if(typeof e=="string")return e.charCodeAt(0)||0;let t=e.hasOwnProperty(sr)?e[sr]:void 0;return typeof t=="number"?t>=0?t&Jm:WE:t}function Cm(e,t,n){let r=1<<e;return!!(n[t+(e>>Xm)]&r)}function Im(e,t){return!(e&2)&&!(e&1&&t)}var fr=class{_tNode;_lView;constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return og(this._tNode,this._lView,t,tr(r),n)}};function WE(){return new fr(jt(),Je())}function Ja(e){return Ui(()=>{let t=e.prototype.constructor,n=t[pi]||Xu(t),r=Object.prototype,o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){let i=o[pi]||Xu(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function Xu(e){return su(e)?()=>{let t=Xu(Qe(e));return t&&t()}:nr(e)}function GE(e,t,n,r,o){let i=e,a=t;for(;i!==null&&a!==null&&a[$]&2048&&!oo(a);){let c=ig(i,a,n,r|2,Vt);if(c!==Vt)return c;let l=i.parent;if(!l){let u=a[Tu];if(u){let d=u.get(n,Vt,r);if(d!==Vt)return d}l=sg(a),a=a[no]}i=l}return o}function sg(e){let t=e[z],n=t.type;return n===2?t.declTNode:n===1?e[ft]:null}function qE(){return dd(jt(),Je())}function dd(e,t){return new fd(ln(e,t))}var fd=(()=>{class e{nativeElement;constructor(n){this.nativeElement=n}static __NG_ELEMENT_ID__=qE}return e})();function ag(e){return(e.flags&128)===128}var hd=(function(e){return e[e.OnPush=0]="OnPush",e[e.Default=1]="Default",e})(hd||{}),cg=new Map,QE=0;function KE(){return QE++}function YE(e){cg.set(e[_n],e)}function ed(e){cg.delete(e[_n])}var Rm="__ngContext__";function Fi(e,t){cn(t)?(e[Rm]=t[_n],YE(t)):e[Rm]=t}function lg(e){return dg(e[to])}function ug(e){return dg(e[dt])}function dg(e){for(;e!==null&&!Tt(e);)e=e[dt];return e}var ZE;function pd(e){ZE=e}var Xa=new N("",{factory:()=>JE}),JE="ng";var ec=new N(""),ji=new N("",{providedIn:"platform",factory:()=>"unknown"});var tc=new N("",{factory:()=>I(Te).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var fg=!1,hg=new N("",{factory:()=>fg});var XE=(e,t,n,r)=>{};function eT(e,t,n,r){XE(e,t,n,r)}function md(e){return(e.flags&32)===32}var tT=()=>null;function pg(e,t,n=!1){return tT(e,t,n)}function mg(e,t){let n=e.contentQueries;if(n!==null){let r=q(null);try{for(let o=0;o<n.length;o+=2){let i=n[o],a=n[o+1];if(a!==-1){let c=e.data[a];Fu(i),c.contentQueries(2,t[a],a)}}}finally{q(r)}}}function td(e,t,n){Fu(0);let r=q(null);try{t(e,n)}finally{q(r)}}function gg(e,t,n){if(wu(t)){let r=q(null);try{let o=t.directiveStart,i=t.directiveEnd;for(let a=o;a<i;a++){let c=e.data[a];if(c.contentQueries){let l=n[a];c.contentQueries(1,l,a)}}}finally{q(r)}}}var It=(function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e[e.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",e})(It||{});function nT(e,t){return e.createText(t)}function yg(e,t,n){return e.createElement(t,n)}function za(e,t,n,r,o){e.insertBefore(t,n,r,o)}function vg(e,t,n){e.appendChild(t,n)}function Pm(e,t,n,r,o){r!==null?za(e,t,n,r,o):vg(e,t,n)}function rT(e,t,n,r){e.removeChild(null,t,n,r)}function oT(e,t,n){e.setAttribute(t,"style",n)}function iT(e,t,n){n===""?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}function Sg(e,t,n){let{mergedAttrs:r,classes:o,styles:i}=n;r!==null&&AE(e,t,r),o!==null&&iT(e,t,o),i!==null&&oT(e,t,i)}function Dg(e){return e instanceof Function?e():e}function sT(e,t,n){let r=e.length;for(;;){let o=e.indexOf(t,n);if(o===-1)return o;if(o===0||e.charCodeAt(o-1)<=32){let i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}var bg="ng-template";function aT(e,t,n,r){let o=0;if(r){for(;o<t.length&&typeof t[o]=="string";o+=2)if(t[o]==="class"&&sT(t[o+1].toLowerCase(),n,0)!==-1)return!0}else if(gd(e))return!1;if(o=t.indexOf(1,o),o>-1){let i;for(;++o<t.length&&typeof(i=t[o])=="string";)if(i.toLowerCase()===n)return!0}return!1}function gd(e){return e.type===4&&e.value!==bg}function cT(e,t,n){let r=e.type===4&&!n?bg:e.value;return t===r}function lT(e,t,n){let r=4,o=e.attrs,i=o!==null?fT(o):0,a=!1;for(let c=0;c<t.length;c++){let l=t[c];if(typeof l=="number"){if(!a&&!Ct(r)&&!Ct(l))return!1;if(a&&Ct(l))continue;a=!1,r=l|r&1;continue}if(!a)if(r&4){if(r=2|r&1,l!==""&&!cT(e,l,n)||l===""&&t.length===1){if(Ct(r))return!1;a=!0}}else if(r&8){if(o===null||!aT(e,o,l,n)){if(Ct(r))return!1;a=!0}}else{let u=t[++c],d=uT(l,o,gd(e),n);if(d===-1){if(Ct(r))return!1;a=!0;continue}if(u!==""){let f;if(d>i?f="":f=o[d+1].toLowerCase(),r&2&&u!==f){if(Ct(r))return!1;a=!0}}}}return Ct(r)||a}function Ct(e){return(e&1)===0}function uT(e,t,n,r){if(t===null)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){let a=t[o];if(a===e)return o;if(a===3||a===6)i=!0;else if(a===1||a===2){let c=t[++o];for(;typeof c=="string";)c=t[++o];continue}else{if(a===4)break;if(a===0){o+=4;continue}}o+=i?1:2}return-1}else return hT(t,e)}function dT(e,t,n=!1){for(let r=0;r<t.length;r++)if(lT(e,t[r],n))return!0;return!1}function fT(e){for(let t=0;t<e.length;t++){let n=e[t];if(OE(n))return t}return e.length}function hT(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){let r=e[n];if(typeof r=="number")return-1;if(r===t)return n;n++}return-1}function Mm(e,t){return e?":not("+t.trim()+")":t}function pT(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let a=e[n];if(typeof a=="string")if(r&2){let c=e[++n];o+="["+a+(c.length>0?'="'+c+'"':"")+"]"}else r&8?o+="."+a:r&4&&(o+=" "+a);else o!==""&&!Ct(a)&&(t+=Mm(i,o),o=""),r=a,i=i||!Ct(r);n++}return o!==""&&(t+=Mm(i,o)),t}function mT(e){return e.map(pT).join(",")}function gT(e){let t=[],n=[],r=1,o=2;for(;r<e.length;){let i=e[r];if(typeof i=="string")o===2?i!==""&&t.push(i,e[++r]):o===8&&n.push(i);else{if(!Ct(o))break;o=i}r++}return n.length&&t.push(1,...n),t}var yd={};function Eg(e,t,n,r,o,i,a,c,l,u,d){let f=pt+r,p=f+o,h=yT(f,p),S=typeof u=="function"?u():u;return h[z]={type:e,blueprint:h,template:n,queries:null,viewQuery:c,declTNode:t,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i=="function"?i():i,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:S,incompleteFirstPass:!1,ssrId:d}}function yT(e,t){let n=[];for(let r=0;r<t;r++)n.push(r<e?null:yd);return n}function vT(e){let t=e.tView;return t===null||t.incompleteFirstPass?e.tView=Eg(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):t}function Tg(e,t,n,r,o,i,a,c,l,u,d){let f=t.blueprint.slice();return f[Et]=o,f[$]=r|4|128|8|64|1024,(u!==null||e&&e[$]&2048)&&(f[$]|=2048),Iu(f),f[Oe]=f[no]=e,f[Ke]=n,f[an]=a||e&&e[an],f[Ye]=c||e&&e[Ye],f[Mn]=l||e&&e[Mn]||null,f[ft]=i,f[_n]=KE(),f[Ei]=d,f[Tu]=u,f[ht]=t.type==2?e[ht]:f,f}function ST(e,t,n){let r=ln(t,e),o=vT(n),i=e[an].rendererFactory,a=Ig(e,Tg(e,o,null,wg(n),r,t,null,i.createRenderer(r,n),null,null,null));return e[t.index]=a}function wg(e){let t=16;return e.signals?t=4096:e.onPush&&(t=64),t}function Cg(e,t,n,r){if(n===0)return-1;let o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function Ig(e,t){return e[to]?e[Eu][dt]=t:e[to]=t,e[Eu]=t,t}function DT(e,t,n,r){if(!r)if((t[$]&3)===3){let i=e.preOrderCheckHooks;i!==null&&Ha(t,i,n)}else{let i=e.preOrderHooks;i!==null&&Ua(t,i,0,n)}Nn(n)}var nc=(function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e})(nc||{});function nd(e,t,n,r){let o=q(null);try{let[i,a,c]=e.inputs[n],l=null;(a&nc.SignalBased)!==0&&(l=t[i][ut]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):c!==null&&(r=c.call(t,r)),e.setInput!==null?e.setInput(t,l,r,n,i):Gm(t,l,i,r)}finally{q(o)}}var mr=(function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e})(mr||{}),bT;function vd(e,t){return bT(e,t)}var co=new Set,Sd=(function(e){return e[e.CHANGE_DETECTION=0]="CHANGE_DETECTION",e[e.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",e})(Sd||{}),gr=new N(""),_m=new Set;function Dd(e){_m.has(e)||(_m.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}var Rg=(()=>{class e{impl=null;execute(){this.impl?.execute()}static \u0275prov=M({token:e,providedIn:"root",factory:()=>new e})}return e})();var Pg=new N("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:I(me)})});function Mg(e,t,n){let r=e.get(Pg);if(Array.isArray(t))for(let o of t)r.queue.add(o),n?.detachedLeaveAnimationFns?.push(o);else r.queue.add(t),n?.detachedLeaveAnimationFns?.push(t);r.scheduler&&r.scheduler(e)}function ET(e,t){for(let[n,r]of t)Mg(e,r.animateFns)}function TT(e,t){let n=e.get(Pg);if(Array.isArray(t))for(let r of t)n.queue.delete(r);else n.queue.delete(t)}function km(e,t,n,r){let o=e?.[Ci]?.enter;t!==null&&o&&o.has(n.index)&&ET(r,o)}function so(e,t,n,r,o,i,a,c){if(o!=null){let l,u=!1;Tt(o)?l=o:cn(o)&&(u=!0,o=o[Et]);let d=wt(o);e===0&&r!==null?(km(c,r,i,n),a==null?vg(t,r,d):za(t,r,d,a||null,!0)):e===1&&r!==null?(km(c,r,i,n),za(t,r,d,a||null,!0)):e===2?Nm(c,i,n,f=>{rT(t,d,u,f)}):e===3&&Nm(c,i,n,()=>{t.destroyNode(d)}),l!=null&&FT(t,e,n,l,i,r,a)}}function wT(e,t){_g(e,t),t[Et]=null,t[ft]=null}function CT(e,t,n,r,o,i){r[Et]=o,r[ft]=t,rc(e,r,n,1,o,i)}function _g(e,t){t[an].changeDetectionScheduler?.notify(9),rc(e,t,t[Ye],2,null,null)}function IT(e){let t=e[to];if(!t)return Ku(e[z],e);for(;t;){let n=null;if(cn(t))n=t[to];else{let r=t[Ze];r&&(n=r)}if(!n){for(;t&&!t[dt]&&t!==e;)cn(t)&&Ku(t[z],t),t=t[Oe];t===null&&(t=e),cn(t)&&Ku(t[z],t),n=t&&t[dt]}t=n}}function bd(e,t){let n=e[Ri],r=n.indexOf(t);n.splice(r,1)}function kg(e,t){if(dr(t))return;let n=t[Ye];n.destroyNode&&rc(e,t,n,3,null,null),IT(t)}function Ku(e,t){if(dr(t))return;let n=q(null);try{t[$]&=-129,t[$]|=256,t[ot]&&oi(t[ot]),MT(e,t),PT(e,t),t[z].type===1&&t[Ye].destroy();let r=t[ro];if(r!==null&&Tt(t[Oe])){r!==t[Oe]&&bd(r,t);let o=t[Ti];o!==null&&o.detachView(e)}ed(t)}finally{q(n)}}function Nm(e,t,n,r){let o=e?.[Ci];if(o?.enter?.has(t.index)&&TT(n,o.enter.get(t.index).animateFns),o==null||o.leave==null||!o.leave.has(t.index))return r(!1);e&&co.add(e[_n]),Mg(n,()=>{if(o.leave&&o.leave.has(t.index)){let a=o.leave.get(t.index),c=[];if(a){for(let l=0;l<a.animateFns.length;l++){let u=a.animateFns[l],{promise:d}=u();c.push(d)}o.detachedLeaveAnimationFns=void 0}o.running=Promise.allSettled(c),RT(e,r)}else e&&co.delete(e[_n]),r(!1)},o)}function RT(e,t){let n=e[Ci]?.running;if(n){n.then(()=>{e[Ci].running=void 0,co.delete(e[_n]),t(!0)});return}t(!1)}function PT(e,t){let n=e.cleanup,r=t[eo];if(n!==null)for(let a=0;a<n.length-1;a+=2)if(typeof n[a]=="string"){let c=n[a+3];c>=0?r[c]():r[-c].unsubscribe(),a+=2}else{let c=r[n[a+1]];n[a].call(c)}r!==null&&(t[eo]=null);let o=t[on];if(o!==null){t[on]=null;for(let a=0;a<o.length;a++){let c=o[a];c()}}let i=t[wi];if(i!==null){t[wi]=null;for(let a of i)a.destroy()}}function MT(e,t){let n;if(e!=null&&(n=e.destroyHooks)!=null)for(let r=0;r<n.length;r+=2){let o=t[n[r]];if(!(o instanceof Oi)){let i=n[r+1];if(Array.isArray(i))for(let a=0;a<i.length;a+=2){let c=o[i[a]],l=i[a+1];oe(J.LifecycleHookStart,c,l);try{l.call(c)}finally{oe(J.LifecycleHookEnd,c,l)}}else{oe(J.LifecycleHookStart,o,i);try{i.call(o)}finally{oe(J.LifecycleHookEnd,o,i)}}}}}function _T(e,t,n){return kT(e,t.parent,n)}function kT(e,t,n){let r=t;for(;r!==null&&r.type&168;)t=r,r=t.parent;if(r===null)return n[Et];if(lr(r)){let{encapsulation:o}=e.data[r.directiveStart+r.componentOffset];if(o===It.None||o===It.Emulated)return null}return ln(r,n)}function NT(e,t,n){return AT(e,t,n)}function xT(e,t,n){return e.type&40?ln(e,n):null}var AT=xT,xm;function Ng(e,t,n,r){let o=_T(e,r,t),i=t[Ye],a=r.parent||t[ft],c=NT(a,r,t);if(o!=null)if(Array.isArray(n))for(let l=0;l<n.length;l++)Pm(i,o,n[l],c,!1);else Pm(i,o,n,c,!1);xm!==void 0&&xm(i,r,t,n,o)}function xi(e,t){if(t!==null){let n=t.type;if(n&3)return ln(t,e);if(n&4)return rd(-1,e[t.index]);if(n&8){let r=t.child;if(r!==null)return xi(e,r);{let o=e[t.index];return Tt(o)?rd(-1,o):wt(o)}}else{if(n&128)return xi(e,t.next);if(n&32)return vd(t,e)()||wt(e[t.index]);{let r=xg(e,t);if(r!==null){if(Array.isArray(r))return r[0];let o=Rn(e[ht]);return xi(o,r)}else return xi(e,t.next)}}}return null}function xg(e,t){if(t!==null){let r=e[ht][ft],o=t.projection;return r.projection[o]}return null}function rd(e,t){let n=Ze+e+1;if(n<t.length){let r=t[n],o=r[z].firstChild;if(o!==null)return xi(r,o)}return t[kn]}function Ed(e,t,n,r,o,i,a){for(;n!=null;){let c=r[Mn];if(n.type===128){n=n.next;continue}let l=r[n.index],u=n.type;if(a&&t===0&&(l&&Fi(wt(l),r),n.flags|=2),!md(n))if(u&8)Ed(e,t,n.child,r,o,i,!1),so(t,e,c,o,l,n,i,r);else if(u&32){let d=vd(n,r),f;for(;f=d();)so(t,e,c,o,f,n,i,r);so(t,e,c,o,l,n,i,r)}else u&16?OT(e,t,r,n,o,i):so(t,e,c,o,l,n,i,r);n=a?n.projectionNext:n.next}}function rc(e,t,n,r,o,i){Ed(n,r,e.firstChild,t,o,i,!1)}function OT(e,t,n,r,o,i){let a=n[ht],l=a[ft].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++){let d=l[u];so(t,e,n[Mn],o,d,r,i,n)}else{let u=l,d=a[Oe];ag(r)&&(u.flags|=128),Ed(e,t,u,d,o,i,!0)}}function FT(e,t,n,r,o,i,a){let c=r[kn],l=wt(r);c!==l&&so(t,e,n,i,c,o,a);for(let u=Ze;u<r.length;u++){let d=r[u];rc(d[z],d,e,t,i,c)}}function Ag(e,t,n,r,o){let i=fm(),a=r&2;try{Nn(-1),a&&t.length>pt&&DT(e,t,pt,!1);let c=a?J.TemplateUpdateStart:J.TemplateCreateStart;oe(c,o,n),n(r,o)}finally{Nn(i);let c=a?J.TemplateUpdateEnd:J.TemplateCreateEnd;oe(c,o,n)}}function Og(e,t,n){jT(e,t,n),(n.flags&64)===64&&BT(e,t,n)}function Fg(e,t,n=ln){let r=t.localNames;if(r!==null){let o=t.index+1;for(let i=0;i<r.length;i+=2){let a=r[i+1],c=a===-1?n(t,e):e[a];e[o++]=c}}}function LT(e,t,n,r){let i=r.get(hg,fg)||n===It.ShadowDom||n===It.ExperimentalIsolatedShadowDom,a=e.selectRootElement(t,i);return HT(a),a}function HT(e){UT(e)}var UT=()=>null;function jT(e,t,n){let r=n.directiveStart,o=n.directiveEnd;lr(n)&&ST(t,n,e.data[r+n.componentOffset]),e.firstCreatePass||eg(n,t);let i=n.initialInputs;for(let a=r;a<o;a++){let c=e.data[a],l=Ju(t,e,a,n);if(Fi(l,t),i!==null&&zT(t,a-r,l,c,n,i),ur(c)){let u=Ut(n.index,t);u[Ke]=Ju(t,e,a,n)}}}function BT(e,t,n){let r=n.directiveStart,o=n.directiveEnd,i=n.index,a=cm();try{Nn(i);for(let c=r;c<o;c++){let l=e.data[c],u=t[c];Aa(c),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&VT(l,u)}}finally{Nn(-1),Aa(a)}}function VT(e,t){e.hostBindings!==null&&e.hostBindings(1,t)}function $T(e,t){let n=e.directiveRegistry,r=null;if(n)for(let o=0;o<n.length;o++){let i=n[o];dT(t,i.selectors,!1)&&(r??=[],ur(i)?r.unshift(i):r.push(i))}return r}function zT(e,t,n,r,o,i){let a=i[t];if(a!==null)for(let c=0;c<a.length;c+=2){let l=a[c],u=a[c+1];nd(r,n,l,u)}}function Lg(e,t,n,r,o){let i=pt+n,a=t[z],c=o(a,t,e,r,n);t[i]=c,ki(e,!0);let l=e.type===2;return l?(Sg(t[Ye],c,e),(Xp()===0||_a(e))&&Fi(c,t),em()):Fi(c,t),Uu()&&(!l||!md(e))&&Ng(a,t,c,e),e}function Hg(e){let t=e;return xu()?om():(t=t.parent,ki(t,!1)),t}function WT(e,t){let n=e[Mn];if(!n)return;let r;try{r=n.get(Bt,null)}catch(o){r=null}r?.(t)}function Ug(e,t,n,r,o){let i=e.inputs?.[r],a=e.hostDirectiveInputs?.[r],c=!1;if(a)for(let l=0;l<a.length;l+=2){let u=a[l],d=a[l+1],f=t.data[u];nd(f,n[u],d,o),c=!0}if(i)for(let l of i){let u=n[l],d=t.data[l];nd(d,u,r,o),c=!0}return c}function GT(e,t){let n=Ut(t,e),r=n[z];qT(r,n);let o=n[Et];o!==null&&n[Ei]===null&&(n[Ei]=pg(o,n[Mn])),oe(J.ComponentStart);try{jg(r,n,n[Ke])}finally{oe(J.ComponentEnd,n[Ke])}}function qT(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}function jg(e,t,n){Oa(t);try{let r=e.viewQuery;r!==null&&td(1,r,n);let o=e.template;o!==null&&Ag(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),t[Ti]?.finishViewCreation(e),e.staticContentQueries&&mg(e,t),e.staticViewQueries&&td(2,e.viewQuery,n);let i=e.components;i!==null&&QT(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[$]&=-5,Fa()}}function QT(e,t){for(let n=0;n<t.length;n++)GT(e,t[n])}function Am(e,t){return!t||t.firstChild===null||ag(e)}function Li(e,t,n,r,o=!1){for(;n!==null;){if(n.type===128){n=o?n.projectionNext:n.next;continue}let i=t[n.index];i!==null&&r.push(wt(i)),Tt(i)&&Bg(i,r);let a=n.type;if(a&8)Li(e,t,n.child,r);else if(a&32){let c=vd(n,t),l;for(;l=c();)r.push(l)}else if(a&16){let c=xg(t,n);if(Array.isArray(c))r.push(...c);else{let l=Rn(t[ht]);Li(l[z],l,c,r,!0)}}n=o?n.projectionNext:n.next}return r}function Bg(e,t){for(let n=Ze;n<e.length;n++){let r=e[n],o=r[z].firstChild;o!==null&&Li(r[z],r,o,t)}e[kn]!==e[Et]&&t.push(e[kn])}function Vg(e){if(e[Ma]!==null){for(let t of e[Ma])t.impl.addSequence(t);e[Ma].length=0}}var $g=[];function KT(e){return e[ot]??YT(e)}function YT(e){let t=$g.pop()??Object.create(JT);return t.lView=e,t}function ZT(e){e.lView[ot]!==e&&(e.lView=null,$g.push(e))}var JT=C(g({},zs),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{_i(e.lView)},consumerOnSignalRead(){this.lView[ot]=this}});function XT(e){let t=e[ot]??Object.create(ew);return t.lView=e,t}var ew=C(g({},zs),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{let t=Rn(e.lView);for(;t&&!zg(t[z]);)t=Rn(t);t&&Ru(t)},consumerOnSignalRead(){this.lView[ot]=this}});function zg(e){return e.type!==2}function Wg(e){if(e[wi]===null)return;let t=!0;for(;t;){let n=!1;for(let r of e[wi])r.dirty&&(n=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));t=n&&!!(e[$]&8192)}}var tw=100;function Gg(e,t=0){let r=e[an].rendererFactory,o=!1;o||r.begin?.();try{nw(e,t)}finally{o||r.end?.()}}function nw(e,t){let n=Au();try{Ou(!0),od(e,t);let r=0;for(;Mi(e);){if(r===tw)throw new k(103,!1);r++,od(e,1)}}finally{Ou(n)}}function rw(e,t,n,r){if(dr(t))return;let o=t[$],i=!1,a=!1;Oa(t);let c=!0,l=null,u=null;i||(zg(e)?(u=KT(t),l=Gs(u)):$s()===null?(c=!1,u=XT(t),l=Gs(u)):t[ot]&&(oi(t[ot]),t[ot]=null));try{Iu(t),im(e.bindingStartIndex),n!==null&&Ag(e,t,n,2,r);let d=(o&3)===3;if(!i)if(d){let h=e.preOrderCheckHooks;h!==null&&Ha(t,h,null)}else{let h=e.preOrderHooks;h!==null&&Ua(t,h,0,null),qu(t,0)}if(a||ow(t),Wg(t),qg(t,0),e.contentQueries!==null&&mg(e,t),!i)if(d){let h=e.contentCheckHooks;h!==null&&Ha(t,h)}else{let h=e.contentHooks;h!==null&&Ua(t,h,1),qu(t,1)}sw(e,t);let f=e.components;f!==null&&Kg(t,f,0);let p=e.viewQuery;if(p!==null&&td(2,p,r),!i)if(d){let h=e.viewCheckHooks;h!==null&&Ha(t,h)}else{let h=e.viewHooks;h!==null&&Ua(t,h,2),qu(t,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),t[Pa]){for(let h of t[Pa])h();t[Pa]=null}i||(Vg(t),t[$]&=-73)}catch(d){throw i||_i(t),d}finally{u!==null&&(wl(u,l),c&&ZT(u)),Fa()}}function qg(e,t){for(let n=lg(e);n!==null;n=ug(n))for(let r=Ze;r<n.length;r++){let o=n[r];Qg(o,t)}}function ow(e){for(let t=lg(e);t!==null;t=ug(t)){if(!(t[$]&2))continue;let n=t[Ri];for(let r=0;r<n.length;r++){let o=n[r];Ru(o)}}}function iw(e,t,n){oe(J.ComponentStart);let r=Ut(t,e);try{Qg(r,n)}finally{oe(J.ComponentEnd,r[Ke])}}function Qg(e,t){ka(e)&&od(e,t)}function od(e,t){let r=e[z],o=e[$],i=e[ot],a=!!(t===0&&o&16);if(a||=!!(o&64&&t===0),a||=!!(o&1024),a||=!!(i?.dirty&&qs(i)),a||=!1,i&&(i.dirty=!1),e[$]&=-9217,a)rw(r,e,r.template,e[Ke]);else if(o&8192){let c=q(null);try{Wg(e),qg(e,1);let l=r.components;l!==null&&Kg(e,l,1),Vg(e)}finally{q(c)}}}function Kg(e,t,n){for(let r=0;r<t.length;r++)iw(e,t[r],n)}function sw(e,t){let n=e.hostBindingOpCodes;if(n!==null)try{for(let r=0;r<n.length;r++){let o=n[r];if(o<0)Nn(~o);else{let i=o,a=n[++r],c=n[++r];am(a,i);let l=t[i];oe(J.HostBindingsUpdateStart,l);try{c(2,l)}finally{oe(J.HostBindingsUpdateEnd,l)}}}}finally{Nn(-1)}}function Td(e,t){let n=Au()?64:1088;for(e[an].changeDetectionScheduler?.notify(t);e;){e[$]|=n;let r=Rn(e);if(oo(e)&&!r)return e;e=r}return null}function aw(e,t,n,r){return[e,!0,0,t,null,r,null,n,null,null]}function cw(e,t,n,r=!0){let o=t[z];if(lw(o,t,e,n),r){let a=rd(n,e),c=t[Ye],l=c.parentNode(e[kn]);l!==null&&CT(o,e[ft],c,t,l,a)}let i=t[Ei];i!==null&&i.firstChild!==null&&(i.firstChild=null)}function id(e,t){if(e.length<=Ze)return;let n=Ze+t,r=e[n];if(r){let o=r[ro];o!==null&&o!==e&&bd(o,r),t>0&&(e[n-1][dt]=r[dt]);let i=Si(e,Ze+t);wT(r[z],r);let a=i[Ti];a!==null&&a.detachView(i[z]),r[Oe]=null,r[dt]=null,r[$]&=-129}return r}function lw(e,t,n,r){let o=Ze+r,i=n.length;r>0&&(n[o-1][dt]=t),r<i-Ze?(t[dt]=n[o],yu(n,Ze+r,t)):(n.push(t),t[dt]=null),t[Oe]=n;let a=t[ro];a!==null&&n!==a&&Yg(a,t);let c=t[Ti];c!==null&&c.insertView(e),Na(t),t[$]|=128}function Yg(e,t){let n=e[Ri],r=t[Oe];if(cn(r))e[$]|=2;else{let o=r[Oe][ht];t[ht]!==o&&(e[$]|=2)}n===null?e[Ri]=[t]:n.push(t)}var hr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let t=this._lView,n=t[z];return Li(n,t,n.firstChild,[])}constructor(t,n){this._lView=t,this._cdRefInjectingView=n}get context(){return this._lView[Ke]}set context(t){this._lView[Ke]=t}get destroyed(){return dr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[Oe];if(Tt(t)){let n=t[Ii],r=n?n.indexOf(this):-1;r>-1&&(id(t,r),Si(n,r))}this._attachedToViewContainer=!1}kg(this._lView[z],this._lView)}onDestroy(t){Pu(this._lView,t)}markForCheck(){Td(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[$]&=-129}reattach(){Na(this._lView),this._lView[$]|=128}detectChanges(){this._lView[$]|=1024,Gg(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new k(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=oo(this._lView),n=this._lView[ro];n!==null&&!t&&bd(n,this._lView),_g(this._lView[z],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new k(902,!1);this._appRef=t;let n=oo(this._lView),r=this._lView[ro];r!==null&&!n&&Yg(r,this._lView),Na(this._lView)}};function wd(e,t,n,r,o){let i=e.data[t];if(i===null)i=uw(e,t,n,r,o),sm()&&(i.flags|=32);else if(i.type&64){i.type=n,i.value=r,i.attrs=o;let a=rm();i.injectorIndex=a===null?-1:a.injectorIndex}return ki(i,!0),i}function uw(e,t,n,r,o){let i=Nu(),a=xu(),c=a?i:i&&i.parent,l=e.data[t]=fw(e,c,n,t,r,o);return dw(e,l,i,a),l}function dw(e,t,n,r){e.firstChild===null&&(e.firstChild=t),n!==null&&(r?n.child==null&&t.parent!==null&&(n.child=t):n.next===null&&(n.next=t,t.prev=n))}function fw(e,t,n,r,o,i){let a=t?t.injectorIndex:-1,c=0;return nm()&&(c|=128),{type:n,index:r,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,fieldIndex:-1,customControlIndex:-1,propertyBindings:null,flags:c,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var hw=()=>null;function Om(e,t){return hw(e,t)}var Zg=class{},oc=class{},sd=class{resolveComponentFactory(t){throw new k(917,!1)}},Bi=class{static NULL=new sd},pr=class{};var Jg=(()=>{class e{static \u0275prov=M({token:e,providedIn:"root",factory:()=>null})}return e})();var ja={},ad=class{injector;parentInjector;constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){let o=this.injector.get(t,ja,r);return o!==ja||n===ja?o:this.parentInjector.get(t,n,r)}};function Wa(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(t!==null)for(let a=0;a<t.length;a++){let c=t[a];if(typeof c=="number")i=c;else if(i==1)o=iu(o,c);else if(i==2){let l=c,u=t[++a];r=iu(r,l+": "+u+";")}}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}function W(e,t=0){let n=Je();if(n===null)return A(e,t);let r=jt();return og(r,n,Qe(e),t)}function pw(e,t,n,r,o){let i=r===null?null:{"":-1},a=o(e,n);if(a!==null){let c=a,l=null,u=null;for(let d of a)if(d.resolveHostDirectives!==null){[c,l,u]=d.resolveHostDirectives(a);break}yw(e,t,n,c,i,l,u)}i!==null&&r!==null&&mw(n,r,i)}function mw(e,t,n){let r=e.localNames=[];for(let o=0;o<t.length;o+=2){let i=n[t[o+1]];if(i==null)throw new k(-301,!1);r.push(t[o],i)}}function gw(e,t,n){t.componentOffset=n,(e.components??=[]).push(t.index)}function yw(e,t,n,r,o,i,a){let c=r.length,l=null;for(let p=0;p<c;p++){let h=r[p];l===null&&ur(h)&&(l=h,gw(e,n,p)),BE(eg(n,t),e,h.type)}Tw(n,e.data.length,c),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let p=0;p<c;p++){let h=r[p];h.providersResolver&&h.providersResolver(h)}let u=!1,d=!1,f=Cg(e,t,c,null);c>0&&(n.directiveToIndex=new Map);for(let p=0;p<c;p++){let h=r[p];if(n.mergedAttrs=ld(n.mergedAttrs,h.hostAttrs),Sw(e,n,t,f,h),Ew(f,h,o),a!==null&&a.has(h)){let[y,v]=a.get(h);n.directiveToIndex.set(h.type,[f,y+n.directiveStart,v+n.directiveStart])}else(i===null||!i.has(h))&&n.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(n.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(n.flags|=64);let S=h.type.prototype;!u&&(S.ngOnChanges||S.ngOnInit||S.ngDoCheck)&&((e.preOrderHooks??=[]).push(n.index),u=!0),!d&&(S.ngOnChanges||S.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(n.index),d=!0),f++}vw(e,n,i)}function vw(e,t,n){for(let r=t.directiveStart;r<t.directiveEnd;r++){let o=e.data[r];if(n===null||!n.has(o))Fm(0,t,o,r),Fm(1,t,o,r),Hm(t,r,!1);else{let i=n.get(o);Lm(0,t,i,r),Lm(1,t,i,r),Hm(t,r,!0)}}}function Fm(e,t,n,r){let o=e===0?n.inputs:n.outputs;for(let i in o)if(o.hasOwnProperty(i)){let a;e===0?a=t.inputs??={}:a=t.outputs??={},a[i]??=[],a[i].push(r),Xg(t,i)}}function Lm(e,t,n,r){let o=e===0?n.inputs:n.outputs;for(let i in o)if(o.hasOwnProperty(i)){let a=o[i],c;e===0?c=t.hostDirectiveInputs??={}:c=t.hostDirectiveOutputs??={},c[a]??=[],c[a].push(r,i),Xg(t,a)}}function Xg(e,t){t==="class"?e.flags|=8:t==="style"&&(e.flags|=16)}function Hm(e,t,n){let{attrs:r,inputs:o,hostDirectiveInputs:i}=e;if(r===null||!n&&o===null||n&&i===null||gd(e)){e.initialInputs??=[],e.initialInputs.push(null);return}let a=null,c=0;for(;c<r.length;){let l=r[c];if(l===0){c+=4;continue}else if(l===5){c+=2;continue}else if(typeof l=="number")break;if(!n&&o.hasOwnProperty(l)){let u=o[l];for(let d of u)if(d===t){a??=[],a.push(l,r[c+1]);break}}else if(n&&i.hasOwnProperty(l)){let u=i[l];for(let d=0;d<u.length;d+=2)if(u[d]===t){a??=[],a.push(u[d+1],r[c+1]);break}}c+=2}e.initialInputs??=[],e.initialInputs.push(a)}function Sw(e,t,n,r,o){e.data[r]=o;let i=o.factory||(o.factory=nr(o.type,!0)),a=new Oi(i,ur(o),W,null);e.blueprint[r]=a,n[r]=a,Dw(e,t,r,Cg(e,n,o.hostVars,yd),o)}function Dw(e,t,n,r,o){let i=o.hostBindings;if(i){let a=e.hostBindingOpCodes;a===null&&(a=e.hostBindingOpCodes=[]);let c=~t.index;bw(a)!=c&&a.push(c),a.push(n,r,i)}}function bw(e){let t=e.length;for(;t>0;){let n=e[--t];if(typeof n=="number"&&n<0)return n}return 0}function Ew(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;ur(t)&&(n[""]=e)}}function Tw(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function ey(e,t,n,r,o,i,a,c){let l=t[z],u=l.consts,d=Pi(u,a),f=wd(l,e,n,r,d);return i&&pw(l,t,f,Pi(u,c),o),f.mergedAttrs=ld(f.mergedAttrs,f.attrs),f.attrs!==null&&Wa(f,f.attrs,!1),f.mergedAttrs!==null&&Wa(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function ty(e,t){_E(e,t),wu(t)&&e.queries.elementEnd(t)}function ww(e,t,n,r,o,i){let a=t.consts,c=Pi(a,o),l=wd(t,e,n,r,c);if(l.mergedAttrs=ld(l.mergedAttrs,l.attrs),i!=null){let u=Pi(a,i);l.localNames=[];for(let d=0;d<u.length;d+=2)l.localNames.push(u[d],-1)}return l.attrs!==null&&Wa(l,l.attrs,!1),l.mergedAttrs!==null&&Wa(l,l.mergedAttrs,!0),t.queries!==null&&t.queries.elementStart(t,l),l}function Cw(e,t,n){return function r(o){let i=lr(e)?Ut(e.index,t):t;Td(i,5);let a=t[Ke],c=Um(t,a,n,o),l=r.__ngNextListenerFn__;for(;l;)c=Um(t,a,l,o)&&c,l=l.__ngNextListenerFn__;return c}}function Um(e,t,n,r){let o=q(null);try{return oe(J.OutputStart,t,n),n(r)!==!1}catch(i){return WT(e,i),!1}finally{oe(J.OutputEnd,t,n),q(o)}}function Iw(e,t,n,r,o,i,a,c){let l=_a(e),u=!1,d=null;if(!r&&l&&(d=Pw(t,n,i,e.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=a,d.__ngLastListenerFn__=a,u=!0}else{let f=ln(e,n),p=r?r(f):f;eT(n,p,i,c);let h=o.listen(p,i,c);if(!Rw(i)){let S=r?y=>r(wt(y[e.index])):e.index;Mw(S,t,n,i,c,h,!1)}}return u}function Rw(e){return e.startsWith("animation")||e.startsWith("transition")}function Pw(e,t,n,r){let o=e.cleanup;if(o!=null)for(let i=0;i<o.length-1;i+=2){let a=o[i];if(a===n&&o[i+1]===r){let c=t[eo],l=o[i+2];return c&&c.length>l?c[l]:null}typeof a=="string"&&(i+=2)}return null}function Mw(e,t,n,r,o,i,a){let c=t.firstCreatePass?Jp(t):null,l=Zp(n),u=l.length;l.push(o,i),c&&c.push(r,e,u,(u+1)*(a?-1:1))}var cd=Symbol("BINDING");var Ga=class extends Bi{ngModule;constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){let n=Pn(t);return new lo(n,this.ngModule)}};function _w(e){return Object.keys(e).map(t=>{let[n,r,o]=e[t],i={propName:n,templateName:t,isSignal:(r&nc.SignalBased)!==0};return o&&(i.transform=o),i})}function kw(e){return Object.keys(e).map(t=>({propName:e[t],templateName:t}))}function Nw(e,t,n){let r=t instanceof me?t:t?.injector;return r&&e.getStandaloneInjector!==null&&(r=e.getStandaloneInjector(r)||r),r?new ad(n,r):n}function xw(e){let t=e.get(pr,null);if(t===null)throw new k(407,!1);let n=e.get(Jg,null),r=e.get(or,null);return{rendererFactory:t,sanitizer:n,changeDetectionScheduler:r,ngReflect:!1}}function Aw(e,t){let n=ny(e);return yg(t,n,n==="svg"?qp:n==="math"?Qp:null)}function ny(e){return(e.selectors[0][0]||"div").toLowerCase()}var lo=class extends oc{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=_w(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=kw(this.componentDef.outputs),this.cachedOutputs}constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=mT(t.selectors),this.ngContentSelectors=t.ngContentSelectors??[],this.isBoundToModule=!!n}create(t,n,r,o,i,a){oe(J.DynamicComponentStart);let c=q(null);try{let l=this.componentDef,u=Ow(r,l,a,i),d=Nw(l,o||this.ngModule,t),f=xw(d),p=f.rendererFactory.createRenderer(null,l),h=r?LT(p,r,l.encapsulation,d):Aw(l,p),S=a?.some(jm)||i?.some(D=>typeof D!="function"&&D.bindings.some(jm)),y=Tg(null,u,null,512|wg(l),null,null,f,p,d,null,pg(h,d,!0));y[pt]=h,Oa(y);let v=null;try{let D=ey(pt,y,2,"#host",()=>u.directiveRegistry,!0,0);Sg(p,h,D),Fi(h,y),Og(u,y,D),gg(u,D,y),ty(u,D),n!==void 0&&Lw(D,this.ngContentSelectors,n),v=Ut(D.index,y),y[Ke]=v[Ke],jg(u,y,null)}catch(D){throw v!==null&&ed(v),ed(y),D}finally{oe(J.DynamicComponentEnd),Fa()}return new qa(this.componentType,y,!!S)}finally{q(c)}}};function Ow(e,t,n,r){let o=e?["ng-version","21.1.3"]:gT(t.selectors[0]),i=null,a=null,c=0;if(n)for(let d of n)c+=d[cd].requiredVars,d.create&&(d.targetIdx=0,(i??=[]).push(d)),d.update&&(d.targetIdx=0,(a??=[]).push(d));if(r)for(let d=0;d<r.length;d++){let f=r[d];if(typeof f!="function")for(let p of f.bindings){c+=p[cd].requiredVars;let h=d+1;p.create&&(p.targetIdx=h,(i??=[]).push(p)),p.update&&(p.targetIdx=h,(a??=[]).push(p))}}let l=[t];if(r)for(let d of r){let f=typeof d=="function"?d:d.type,p=pu(f);l.push(p)}return Eg(0,null,Fw(i,a),1,c,l,null,null,null,[o],null)}function Fw(e,t){return!e&&!t?null:n=>{if(n&1&&e)for(let r of e)r.create();if(n&2&&t)for(let r of t)r.update()}}function jm(e){let t=e[cd].kind;return t==="input"||t==="twoWay"}var qa=class extends Zg{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(t,n,r){super(),this._rootLView=n,this._hasInputBindings=r,this._tNode=Cu(n[z],pt),this.location=dd(this._tNode,n),this.instance=Ut(this._tNode.index,n)[Ke],this.hostView=this.changeDetectorRef=new hr(n,void 0),this.componentType=t}setInput(t,n){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),n))return;let o=this._rootLView,i=Ug(r,o[z],o,t,n);this.previousInputValues.set(t,n);let a=Ut(r.index,o);Td(a,1)}get injector(){return new fr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function Lw(e,t,n){let r=e.projection=[];for(let o=0;o<t.length;o++){let i=n[o];r.push(i!=null&&i.length?Array.from(i):null)}}var Vi=(()=>{class e{static __NG_ELEMENT_ID__=Hw}return e})();function Hw(){let e=jt();return jw(e,Je())}var Uw=Vi,ry=class extends Uw{_lContainer;_hostTNode;_hostLView;constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return dd(this._hostTNode,this._hostLView)}get injector(){return new fr(this._hostTNode,this._hostLView)}get parentInjector(){let t=ud(this._hostTNode,this._hostLView);if(Zm(t)){let n=$a(t,this._hostLView),r=Va(t),o=n[z].data[r+8];return new fr(o,n)}else return new fr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let n=Bm(this._lContainer);return n!==null&&n[t]||null}get length(){return this._lContainer.length-Ze}createEmbeddedView(t,n,r){let o,i;typeof r=="number"?o=r:r!=null&&(o=r.index,i=r.injector);let a=Om(this._lContainer,t.ssrId),c=t.createEmbeddedViewImpl(n||{},i,a);return this.insertImpl(c,o,Am(this._hostTNode,a)),c}createComponent(t,n,r,o,i,a,c){let l=t&&!CE(t),u;if(l)u=n;else{let v=n||{};u=v.index,r=v.injector,o=v.projectableNodes,i=v.environmentInjector||v.ngModuleRef,a=v.directives,c=v.bindings}let d=l?t:new lo(Pn(t)),f=r||this.parentInjector;if(!i&&d.ngModule==null){let D=(l?f:this.parentInjector).get(me,null);D&&(i=D)}let p=Pn(d.componentType??{}),h=Om(this._lContainer,p?.id??null),S=h?.firstChild??null,y=d.create(f,o,S,i,a,c);return this.insertImpl(y.hostView,u,Am(this._hostTNode,h)),y}insert(t,n){return this.insertImpl(t,n,!0)}insertImpl(t,n,r){let o=t._lView;if(Kp(o)){let c=this.indexOf(t);if(c!==-1)this.detach(c);else{let l=o[Oe],u=new ry(l,l[ft],l[Oe]);u.detach(u.indexOf(t))}}let i=this._adjustIndex(n),a=this._lContainer;return cw(a,o,i,r),t.attachToViewContainerRef(),yu(Yu(a),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){let n=Bm(this._lContainer);return n!==null?n.indexOf(t):-1}remove(t){let n=this._adjustIndex(t,-1),r=id(this._lContainer,n);r&&(Si(Yu(this._lContainer),n),kg(r[z],r))}detach(t){let n=this._adjustIndex(t,-1),r=id(this._lContainer,n);return r&&Si(Yu(this._lContainer),n)!=null?new hr(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function Bm(e){return e[Ii]}function Yu(e){return e[Ii]||(e[Ii]=[])}function jw(e,t){let n,r=t[e.index];return Tt(r)?n=r:(n=aw(r,t,null,e),t[e.index]=n,Ig(t,n)),Vw(n,t,e,r),new ry(n,e,t)}function Bw(e,t){let n=e[Ye],r=n.createComment(""),o=ln(t,e),i=n.parentNode(o);return za(n,i,r,n.nextSibling(o),!1),r}var Vw=$w;function $w(e,t,n,r){if(e[kn])return;let o;n.type&8?o=wt(r):o=Bw(t,n),e[kn]=o}var uo=class{},ic=class{};var Qa=class extends uo{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Ga(this);constructor(t,n,r,o=!0){super(),this.ngModuleType=t,this._parent=n;let i=hu(t);this._bootstrapComponents=Dg(i.bootstrap),this._r3Injector=Bu(t,n,[{provide:uo,useValue:this},{provide:Bi,useValue:this.componentFactoryResolver},...r],In(t),new Set(["environment"])),o&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}},Ka=class extends ic{moduleType;constructor(t){super(),this.moduleType=t}create(t){return new Qa(this.moduleType,t,[])}};var Hi=class extends uo{injector;componentFactoryResolver=new Ga(this);instance=null;constructor(t){super();let n=new rr([...t.providers,{provide:uo,useValue:this},{provide:Bi,useValue:this.componentFactoryResolver}],t.parent||bi(),t.debugName,new Set(["environment"]));this.injector=n,t.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function $i(e,t,n=null){return new Hi({providers:e,parent:t,debugName:n,runEnvironmentInitializers:!0}).injector}var zw=(()=>{class e{_injector;cachedInjectors=new Map;constructor(n){this._injector=n}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n)){let r=Du(!1,n.type),o=r.length>0?$i([r],this._injector,""):null;this.cachedInjectors.set(n,o)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=M({token:e,providedIn:"environment",factory:()=>new e(A(me))})}return e})();function X(e){return Ui(()=>{let t=oy(e),n=C(g({},t),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection===hd.OnPush,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&e.dependencies||null,getStandaloneInjector:t.standalone?o=>o.get(zw).getOrCreateStandaloneInjector(n):null,getExternalStyles:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||It.Emulated,styles:e.styles||bt,_:null,schemas:e.schemas||null,tView:null,id:""});t.standalone&&Dd("NgStandalone"),iy(n);let r=e.dependencies;return n.directiveDefs=Vm(r,Ww),n.pipeDefs=Vm(r,Lp),n.id=Qw(n),n})}function Ww(e){return Pn(e)||pu(e)}function fo(e){return Ui(()=>({type:e.type,bootstrap:e.bootstrap||bt,declarations:e.declarations||bt,imports:e.imports||bt,exports:e.exports||bt,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function Gw(e,t){if(e==null)return ar;let n={};for(let r in e)if(e.hasOwnProperty(r)){let o=e[r],i,a,c,l;Array.isArray(o)?(c=o[0],i=o[1],a=o[2]??i,l=o[3]||null):(i=o,a=o,c=nc.None,l=null),n[i]=[r,c,l],t[i]=a}return n}function qw(e){if(e==null)return ar;let t={};for(let n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}function sc(e){return Ui(()=>{let t=oy(e);return iy(t),t})}function oy(e){let t={};return{type:e.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:t,inputConfig:e.inputs||ar,exportAs:e.exportAs||null,standalone:e.standalone??!0,signals:e.signals===!0,selectors:e.selectors||bt,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,inputs:Gw(e.inputs,t),outputs:qw(e.outputs),debugInfo:null}}function iy(e){e.features?.forEach(t=>t(e))}function Vm(e,t){return e?()=>{let n=typeof e=="function"?e():e,r=[];for(let o of n){let i=t(o);i!==null&&r.push(i)}return r}:null}function Qw(e){let t=0,n=typeof e.consts=="function"?"":e.consts,r=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,n,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery];for(let i of r.join("|"))t=Math.imul(31,t)+i.charCodeAt(0)<<0;return t+=2147483648,"c"+t}var Cd=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"platform"})}return e})();var Id=new N("");function zi(e){return!!e&&typeof e.then=="function"}function sy(e){return!!e&&typeof e.subscribe=="function"}var ay=new N("");var Rd=(()=>{class e{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((n,r)=>{this.resolve=n,this.reject=r});appInits=I(ay,{optional:!0})??[];injector=I(Ht);constructor(){}runInitializers(){if(this.initialized)return;let n=[];for(let o of this.appInits){let i=ke(this.injector,o);if(zi(i))n.push(i);else if(sy(i)){let a=new Promise((c,l)=>{i.subscribe({complete:c,error:l})});n.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),n.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ac=new N("");function cy(){Il(()=>{let e="";throw new k(600,e)})}function ly(e){return e.isBoundToModule}var Kw=10;var ho=(()=>{class e{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=I(Bt);afterRenderManager=I(Rg);zonelessEnabled=I(Ni);rootEffectScheduler=I(Gu);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new he;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=I(un);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(L(n=>!n))}constructor(){I(gr,{optional:!0})}whenStable(){let n;return new Promise(r=>{n=this.isStable.subscribe({next:o=>{o&&r()}})}).finally(()=>{n.unsubscribe()})}_injector=I(me);_rendererFactory=null;get injector(){return this._injector}bootstrap(n,r){return this.bootstrapImpl(n,r)}bootstrapImpl(n,r,o=Ht.NULL){return this._injector.get(Be).run(()=>{oe(J.BootstrapComponentStart);let a=n instanceof oc;if(!this._injector.get(Rd).done){let S="";throw new k(405,S)}let l;a?l=n:l=this._injector.get(Bi).resolveComponentFactory(n),this.componentTypes.push(l.componentType);let u=ly(l)?void 0:this._injector.get(uo),d=r||l.selector,f=l.create(o,[],d,u),p=f.location.nativeElement,h=f.injector.get(Id,null);return h?.registerApplication(p),f.onDestroy(()=>{this.detachView(f.hostView),Ai(this.components,f),h?.unregisterApplication(p)}),this._loadComponent(f),oe(J.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){oe(J.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Sd.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw oe(J.ChangeDetectionEnd),new k(101,!1);let n=q(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,q(n),this.afterTick.next(),oe(J.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(pr,null,{optional:!0}));let n=0;for(;this.dirtyFlags!==0&&n++<Kw;){oe(J.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{oe(J.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let n=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:o}of this.allViews){if(!r&&!Mi(o))continue;let i=r&&!this.zonelessEnabled?0:1;Gg(o,i),n=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}n||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:n})=>Mi(n))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(n){let r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){let r=n;Ai(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView);try{this.tick()}catch(o){this.internalErrorHandler(o)}this.components.push(n),this._injector.get(ac,[]).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>Ai(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new k(406,!1);let n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Ai(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var SL=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";function $m(e,t,n,r,o){Ug(t,e,n,o?"class":"style",r)}function it(e,t,n,r){let o=Je(),i=o[z],a=e+pt,c=i.firstCreatePass?ey(a,o,2,t,$T,tm(),n,r):i.data[a];if(Lg(c,o,e,t,uy),_a(c)){let l=o[z];Og(l,o,c),gg(l,c,o)}return r!=null&&Fg(o,c),it}function Xe(){let e=xa(),t=jt(),n=Hg(t);return e.firstCreatePass&&ty(e,n),_u(n)&&ku(),Mu(),n.classesWithoutHost!=null&&NE(n)&&$m(e,n,Je(),n.classesWithoutHost,!0),n.stylesWithoutHost!=null&&xE(n)&&$m(e,n,Je(),n.stylesWithoutHost,!1),Xe}function $t(e,t,n,r){return it(e,t,n,r),Xe(),$t}function we(e,t,n,r){let o=Je(),i=o[z],a=e+pt,c=i.firstCreatePass?ww(a,i,2,t,n,r):i.data[a];return Lg(c,o,e,t,uy),r!=null&&Fg(o,c),we}function $e(){let e=jt(),t=Hg(e);return _u(t)&&ku(),Mu(),$e}function Ne(e,t,n,r){return we(e,t,n,r),$e(),Ne}var uy=(e,t,n,r,o)=>(ju(!0),yg(t[Ye],r,hm()));var Wi="en-US";var Yw=Wi;function dy(e){typeof e=="string"&&(Yw=e.toLowerCase().replace(/_/g,"-"))}function mt(e,t,n){let r=Je(),o=xa(),i=jt();return(i.type&3||n)&&Iw(i,o,r,n,r[Ye],e,t,Cw(i,r,t)),mt}function pe(e,t=""){let n=Je(),r=xa(),o=e+pt,i=r.firstCreatePass?wd(r,o,1,t,null):r.data[o],a=Zw(r,n,i,t);n[o]=a,Uu()&&Ng(r,n,a,i),ki(i,!1)}var Zw=(e,t,n,r)=>(ju(!0),nT(t[Ye],r));var Ya=class{ngModuleFactory;componentFactories;constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}},Pd=(()=>{class e{compileModuleSync(n){return new Ka(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){let r=this.compileModuleSync(n),o=hu(n),i=Dg(o.declarations).reduce((a,c)=>{let l=Pn(c);return l&&a.push(new lo(l)),a},[]);return new Ya(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var fy=(()=>{class e{applicationErrorHandler=I(Bt);appRef=I(ho);taskService=I(un);ngZone=I(Be);zonelessEnabled=I(Ni);tracing=I(gr,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Re;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(gi):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(I(Wu,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let n=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(n);return}this.switchToMicrotaskScheduler(),this.taskService.remove(n)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let n=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(n)})})}notify(n){if(!this.zonelessEnabled&&n===5)return;switch(n){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?ym:Vu;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(gi+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let n=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(n),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let n=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(n)}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function hy(){return[{provide:or,useExisting:fy},{provide:Be,useClass:yi},{provide:Ni,useValue:!0}]}function Jw(){return typeof $localize<"u"&&$localize.locale||Wi}var Md=new N("",{factory:()=>I(Md,{optional:!0,skipSelf:!0})||Jw()});var gy=Symbol("InputSignalNode#UNSET"),fC=C(g({},Qs),{transformFn:void 0,applyValueToInputSignal(e,t){ii(e,t)}});function yy(e,t){let n=Object.create(fC);n.value=e,n.transformFn=t?.transform;function r(){if(Ws(n),n.value===gy){let o=null;throw new k(-950,o)}return n.value}return r[ut]=n,r}function py(e,t){return yy(e,t)}function hC(e){return yy(gy,e)}var vy=(py.required=hC,py);var _d=new N(""),pC=new N("");function Gi(e){return!e.moduleRef}function mC(e){let t=Gi(e)?e.r3Injector:e.moduleRef.injector,n=t.get(Be);return n.run(()=>{Gi(e)?e.r3Injector.resolveInjectorInitializers():e.moduleRef.resolveInjectorInitializers();let r=t.get(Bt),o;if(n.runOutsideAngular(()=>{o=n.onError.subscribe({next:r})}),Gi(e)){let i=()=>t.destroy(),a=e.platformInjector.get(_d);a.add(i),t.onDestroy(()=>{o.unsubscribe(),a.delete(i)})}else{let i=()=>e.moduleRef.destroy(),a=e.platformInjector.get(_d);a.add(i),e.moduleRef.onDestroy(()=>{Ai(e.allPlatformModules,e.moduleRef),o.unsubscribe(),a.delete(i)})}return yC(r,n,()=>{let i=t.get(un),a=i.add(),c=t.get(Rd);return c.runInitializers(),c.donePromise.then(()=>{let l=t.get(Md,Wi);if(dy(l||Wi),!t.get(pC,!0))return Gi(e)?t.get(ho):(e.allPlatformModules.push(e.moduleRef),e.moduleRef);if(Gi(e)){let d=t.get(ho);return e.rootComponent!==void 0&&d.bootstrap(e.rootComponent),d}else return gC?.(e.moduleRef,e.allPlatformModules),e.moduleRef}).finally(()=>{i.remove(a)})})})}var gC;function yC(e,t,n){try{let r=n();return zi(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e(r)),r}}var cc=null;function vC(e=[],t){return Ht.create({name:t,providers:[{provide:Di,useValue:"platform"},{provide:_d,useValue:new Set([()=>cc=null])},...e]})}function SC(e=[]){if(cc)return cc;let t=vC(e);return cc=t,cy(),DC(t),t}function DC(e){let t=e.get(ec,null);ke(e,()=>{t?.forEach(n=>n())})}var bC=1e4;var IV=bC-1e3;var kd=(()=>{class e{static __NG_ELEMENT_ID__=EC}return e})();function EC(e){return TC(jt(),Je(),(e&16)===16)}function TC(e,t,n){if(lr(e)&&!n){let r=Ut(e.index,t);return new hr(r,r)}else if(e.type&175){let r=t[ht];return new hr(r,t)}return null}function Sy(e){let{rootComponent:t,appProviders:n,platformProviders:r,platformRef:o}=e;oe(J.BootstrapApplicationStart);try{let i=o?.injector??SC(r),a=[hy(),Sm,...n||[]],c=new Hi({providers:a,parent:i,debugName:"",runEnvironmentInitializers:!1});return mC({r3Injector:c.injector,platformInjector:i,rootComponent:t})}catch(i){return Promise.reject(i)}finally{oe(J.BootstrapApplicationEnd)}}var Dy=null;function fn(){return Dy}function Nd(e){Dy??=e}var qi=class{},po=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:()=>I(by),providedIn:"platform"})}return e})();var by=(()=>{class e extends po{_location;_history;_doc=I(Te);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return fn().getBaseHref(this._doc)}onPopState(n){let r=fn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){let r=fn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,r,o){this._history.pushState(n,r,o)}replaceState(n,r,o){this._history.replaceState(n,r,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function wy(e,t){return e?t?e.endsWith("/")?t.startsWith("/")?e+t.slice(1):e+t:t.startsWith("/")?e+t:`${e}/${t}`:e:t}function Ey(e){let t=e.search(/#|\?|$/);return e[t-1]==="/"?e.slice(0,t-1)+e.slice(t):e}function An(e){return e&&e[0]!=="?"?`?${e}`:e}var lc=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:()=>I(CC),providedIn:"root"})}return e})(),wC=new N(""),CC=(()=>{class e extends lc{_platformLocation;_baseHref;_removeListenerFns=[];constructor(n,r){super(),this._platformLocation=n,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??I(Te).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return wy(this._baseHref,n)}path(n=!1){let r=this._platformLocation.pathname+An(this._platformLocation.search),o=this._platformLocation.hash;return o&&n?`${r}${o}`:r}pushState(n,r,o,i){let a=this.prepareExternalUrl(o+An(i));this._platformLocation.pushState(n,r,a)}replaceState(n,r,o,i){let a=this.prepareExternalUrl(o+An(i));this._platformLocation.replaceState(n,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}static \u0275fac=function(r){return new(r||e)(A(po),A(wC,8))};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),mo=(()=>{class e{_subject=new he;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(n){this._locationStrategy=n;let r=this._locationStrategy.getBaseHref();this._basePath=PC(Ey(Ty(r))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+An(r))}normalize(n){return e.stripTrailingSlash(RC(this._basePath,Ty(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",o=null){this._locationStrategy.pushState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+An(r)),o)}replaceState(n,r="",o=null){this._locationStrategy.replaceState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+An(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(o=>o(n,r))}subscribe(n,r,o){return this._subject.subscribe({next:n,error:r??void 0,complete:o??void 0})}static normalizeQueryParams=An;static joinWithSlash=wy;static stripTrailingSlash=Ey;static \u0275fac=function(r){return new(r||e)(A(lc))};static \u0275prov=M({token:e,factory:()=>IC(),providedIn:"root"})}return e})();function IC(){return new mo(A(lc))}function RC(e,t){if(!e||!t.startsWith(e))return t;let n=t.substring(e.length);return n===""||["/",";","?","#"].includes(n[0])?n:t}function Ty(e){return e.replace(/\/index.html$/,"")}function PC(e){if(new RegExp("^(https?:)?//").test(e)){let[,n]=e.split(/\/\/[^\/]+/);return n}return e}var uc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=fo({type:e});static \u0275inj=ir({})}return e})();function Qi(e,t){t=encodeURIComponent(t);for(let n of e.split(";")){let r=n.indexOf("="),[o,i]=r==-1?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===t)return decodeURIComponent(i)}return null}var yr=class{};var Cy="browser";var Ki=class{_doc;constructor(t){this._doc=t}manager},dc=(()=>{class e extends Ki{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o,i){return n.addEventListener(r,o,i),()=>this.removeEventListener(n,r,o,i)}removeEventListener(n,r,o,i){return n.removeEventListener(r,o,i)}static \u0275fac=function(r){return new(r||e)(A(Te))};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})(),pc=new N(""),Fd=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(n,r){this._zone=r,n.forEach(a=>{a.manager=this});let o=n.filter(a=>!(a instanceof dc));this._plugins=o.slice().reverse();let i=n.find(a=>a instanceof dc);i&&this._plugins.push(i)}addEventListener(n,r,o,i){return this._findPluginFor(r).addEventListener(n,r,o,i)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(i=>i.supports(n)),!r)throw new k(5101,!1);return this._eventNameToPlugin.set(n,r),r}static \u0275fac=function(r){return new(r||e)(A(pc),A(Be))};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})(),xd="ng-app-id";function Iy(e){for(let t of e)t.remove()}function Ry(e,t){let n=t.createElement("style");return n.textContent=e,n}function _C(e,t,n,r){let o=e.head?.querySelectorAll(`style[${xd}="${t}"],link[${xd}="${t}"]`);if(o)for(let i of o)i.removeAttribute(xd),i instanceof HTMLLinkElement?r.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&n.set(i.textContent,{usage:0,elements:[i]})}function Od(e,t){let n=t.createElement("link");return n.setAttribute("rel","stylesheet"),n.setAttribute("href",e),n}var Ld=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(n,r,o,i={}){this.doc=n,this.appId=r,this.nonce=o,_C(n,r,this.inline,this.external),this.hosts.add(n.head)}addStyles(n,r){for(let o of n)this.addUsage(o,this.inline,Ry);r?.forEach(o=>this.addUsage(o,this.external,Od))}removeStyles(n,r){for(let o of n)this.removeUsage(o,this.inline);r?.forEach(o=>this.removeUsage(o,this.external))}addUsage(n,r,o){let i=r.get(n);i?i.usage++:r.set(n,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,o(n,this.doc)))})}removeUsage(n,r){let o=r.get(n);o&&(o.usage--,o.usage<=0&&(Iy(o.elements),r.delete(n)))}ngOnDestroy(){for(let[,{elements:n}]of[...this.inline,...this.external])Iy(n);this.hosts.clear()}addHost(n){this.hosts.add(n);for(let[r,{elements:o}]of this.inline)o.push(this.addElement(n,Ry(r,this.doc)));for(let[r,{elements:o}]of this.external)o.push(this.addElement(n,Od(r,this.doc)))}removeHost(n){this.hosts.delete(n)}addElement(n,r){return this.nonce&&r.setAttribute("nonce",this.nonce),n.appendChild(r)}static \u0275fac=function(r){return new(r||e)(A(Te),A(Xa),A(tc,8),A(ji))};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})(),Ad={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Hd=/%COMP%/g;var My="%COMP%",kC=`_nghost-${My}`,NC=`_ngcontent-${My}`,xC=!0,AC=new N("",{factory:()=>xC});function OC(e){return NC.replace(Hd,e)}function FC(e){return kC.replace(Hd,e)}function _y(e,t){return t.map(n=>n.replace(Hd,e))}var Ud=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(n,r,o,i,a,c,l=null,u=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.defaultRenderer=new Yi(n,a,c,this.tracingService)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;let o=this.getOrCreateRenderer(n,r);return o instanceof hc?o.applyToHost(n):o instanceof Zi&&o.applyStyles(),o}getOrCreateRenderer(n,r){let o=this.rendererByCompId,i=o.get(r.id);if(!i){let a=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(r.encapsulation){case It.Emulated:i=new hc(l,u,r,this.appId,d,a,c,f);break;case It.ShadowDom:return new fc(l,n,r,a,c,this.nonce,f,u);case It.ExperimentalIsolatedShadowDom:return new fc(l,n,r,a,c,this.nonce,f);default:i=new Zi(l,u,r,d,a,c,f);break}o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(n){this.rendererByCompId.delete(n)}static \u0275fac=function(r){return new(r||e)(A(Fd),A(Ld),A(Xa),A(AC),A(Te),A(Be),A(tc),A(gr,8))};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})(),Yi=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,n,r,o){this.eventManager=t,this.doc=n,this.ngZone=r,this.tracingService=o}destroy(){}destroyNode=null;createElement(t,n){return n?this.doc.createElementNS(Ad[n]||n,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,n){(Py(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(Py(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){n.remove()}selectRootElement(t,n){let r=typeof t=="string"?this.doc.querySelector(t):t;if(!r)throw new k(-5104,!1);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;let i=Ad[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){let o=Ad[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(mr.DashCase|mr.Important)?t.style.setProperty(n,r,o&mr.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&mr.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t!=null&&(t[n]=r)}setValue(t,n){t.nodeValue=n}listen(t,n,r,o){if(typeof t=="string"&&(t=fn().getGlobalEventTarget(this.doc,t),!t))throw new k(5102,!1);let i=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(t,n,i)),this.eventManager.addEventListener(t,n,i,o)}decoratePreventDefault(t){return n=>{if(n==="__ngUnwrap__")return t;t(n)===!1&&n.preventDefault()}}};function Py(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var fc=class extends Yi{hostEl;sharedStylesHost;shadowRoot;constructor(t,n,r,o,i,a,c,l){super(t,o,i,c),this.hostEl=n,this.sharedStylesHost=l,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=_y(r.id,u);for(let f of u){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=f,this.shadowRoot.appendChild(p)}let d=r.getExternalStyles?.();if(d)for(let f of d){let p=Od(f,o);a&&p.setAttribute("nonce",a),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(null,n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Zi=class extends Yi{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,n,r,o,i,a,c,l){super(t,i,a,c),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=o;let u=r.styles;this.styles=l?_y(l,u):u,this.styleUrls=r.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&co.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},hc=class extends Zi{contentAttr;hostAttr;constructor(t,n,r,o,i,a,c,l){let u=o+"-"+r.id;super(t,n,r,i,a,c,l,u),this.contentAttr=OC(u),this.hostAttr=FC(u)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,n){let r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}};var mc=class e extends qi{supportsDOMEvents=!0;static makeCurrent(){Nd(new e)}onAndCancel(t,n,r,o){return t.addEventListener(n,r,o),()=>{t.removeEventListener(n,r,o)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.remove()}createElement(t,n){return n=n||this.getDefaultDocument(),n.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return n==="window"?window:n==="document"?t:n==="body"?t.body:null}getBaseHref(t){let n=LC();return n==null?null:HC(n)}resetBaseElement(){Ji=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Qi(document.cookie,t)}},Ji=null;function LC(){return Ji=Ji||document.head.querySelector("base"),Ji?Ji.getAttribute("href"):null}function HC(e){return new URL(e,document.baseURI).pathname}var UC=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})(),ky=["alt","control","meta","shift"],jC={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},BC={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Ny=(()=>{class e extends Ki{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,r,o,i){let a=e.parseEventName(r),c=e.eventCallback(a.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>fn().onAndCancel(n,a.domEventName,c,i))}static parseEventName(n){let r=n.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let i=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),ky.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),a+=u+".")}),a+=i,r.length!=0||i.length===0)return null;let l={};return l.domEventName=o,l.fullKey=a,l}static matchEventFullKeyCode(n,r){let o=jC[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),ky.forEach(a=>{if(a!==o){let c=BC[a];c(n)&&(i+=a+".")}}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return n==="esc"?"escape":n}static \u0275fac=function(r){return new(r||e)(A(Te))};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();function jd(e,t,n){return ee(this,null,function*(){let r=g({rootComponent:e},VC(t,n));return Sy(r)})}function VC(e,t){return{platformRef:t?.platformRef,appProviders:[...qC,...e?.providers??[]],platformProviders:GC}}function $C(){mc.makeCurrent()}function zC(){return new sn}function WC(){return pd(document),document}var GC=[{provide:ji,useValue:Cy},{provide:ec,useValue:$C,multi:!0},{provide:Te,useFactory:WC}];var qC=[{provide:Di,useValue:"root"},{provide:sn,useFactory:zC},{provide:pc,useClass:dc,multi:!0},{provide:pc,useClass:Ny,multi:!0},Ud,Ld,Fd,{provide:pr,useExisting:Ud},{provide:yr,useClass:UC},[]];var Rt=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(n=>{let r=n.indexOf(":");if(r>0){let o=n.slice(0,r),i=n.slice(r+1).trim();this.addHeaderEntry(o,i)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((n,r)=>{this.addHeaderEntry(r,n)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([n,r])=>{this.setHeaderEntries(n,r)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let n=this.headers.get(t.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,n){return this.clone({name:t,value:n,op:"a"})}set(t,n){return this.clone({name:t,value:n,op:"s"})}delete(t,n){return this.clone({name:t,value:n,op:"d"})}maybeSetNormalizedName(t,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,t)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(n=>{this.headers.set(n,t.headers.get(n)),this.normalizedNames.set(n,t.normalizedNames.get(n))})}clone(t){let n=new e;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}applyUpdate(t){let n=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(t.name,n);let o=(t.op==="a"?this.headers.get(n):void 0)||[];o.push(...r),this.headers.set(n,o);break;case"d":let i=t.value;if(!i)this.headers.delete(n),this.normalizedNames.delete(n);else{let a=this.headers.get(n);if(!a)return;a=a.filter(c=>i.indexOf(c)===-1),a.length===0?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,a)}break}}addHeaderEntry(t,n){let r=t.toLowerCase();this.maybeSetNormalizedName(t,r),this.headers.has(r)?this.headers.get(r).push(n):this.headers.set(r,[n])}setHeaderEntries(t,n){let r=(Array.isArray(n)?n:[n]).map(i=>i.toString()),o=t.toLowerCase();this.headers.set(o,r),this.maybeSetNormalizedName(t,o)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>t(this.normalizedNames.get(n),this.headers.get(n)))}};var vo=class{map=new Map;set(t,n){return this.map.set(t,n),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}},yc=class{encodeKey(t){return xy(t)}encodeValue(t){return xy(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function QC(e,t){let n=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{let i=o.indexOf("="),[a,c]=i==-1?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,i)),t.decodeValue(o.slice(i+1))],l=n.get(a)||[];l.push(c),n.set(a,l)}),n}var KC=/%(\d[a-f0-9])/gi,YC={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function xy(e){return encodeURIComponent(e).replace(KC,(t,n)=>YC[n]??t)}function gc(e){return`${e}`}var hn=class e{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new yc,t.fromString){if(t.fromObject)throw new k(2805,!1);this.map=QC(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(n=>{let r=t.fromObject[n],o=Array.isArray(r)?r.map(gc):[gc(r)];this.map.set(n,o)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let n=this.map.get(t);return n?n[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,n){return this.clone({param:t,value:n,op:"a"})}appendAll(t){let n=[];return Object.keys(t).forEach(r=>{let o=t[r];Array.isArray(o)?o.forEach(i=>{n.push({param:r,value:i,op:"a"})}):n.push({param:r,value:o,op:"a"})}),this.clone(n)}set(t,n){return this.clone({param:t,value:n,op:"s"})}delete(t,n){return this.clone({param:t,value:n,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let n=this.encoder.encodeKey(t);return this.map.get(t).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let n=new e({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(t),n}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let n=(t.op==="a"?this.map.get(t.param):void 0)||[];n.push(gc(t.value)),this.map.set(t.param,n);break;case"d":if(t.value!==void 0){let r=this.map.get(t.param)||[],o=r.indexOf(gc(t.value));o!==-1&&r.splice(o,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};function ZC(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ay(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Oy(e){return typeof Blob<"u"&&e instanceof Blob}function Fy(e){return typeof FormData<"u"&&e instanceof FormData}function JC(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var Ly="Content-Type",Hy="Accept",Uy="text/plain",jy="application/json",XC=`${jy}, ${Uy}, */*`,go=class e{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(t,n,r,o){this.url=n,this.method=t.toUpperCase();let i;if(ZC(this.method)||o?(this.body=r!==void 0?r:null,i=o):i=r,i){if(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,this.keepalive=!!i.keepalive,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),i.priority&&(this.priority=i.priority),i.cache&&(this.cache=i.cache),i.credentials&&(this.credentials=i.credentials),typeof i.timeout=="number"){if(i.timeout<1||!Number.isInteger(i.timeout))throw new k(2822,"");this.timeout=i.timeout}i.mode&&(this.mode=i.mode),i.redirect&&(this.redirect=i.redirect),i.integrity&&(this.integrity=i.integrity),i.referrer&&(this.referrer=i.referrer),i.referrerPolicy&&(this.referrerPolicy=i.referrerPolicy),this.transferCache=i.transferCache}if(this.headers??=new Rt,this.context??=new vo,!this.params)this.params=new hn,this.urlWithParams=n;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=n;else{let c=n.indexOf("?"),l=c===-1?"?":c<n.length-1?"&":"";this.urlWithParams=n+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ay(this.body)||Oy(this.body)||Fy(this.body)||JC(this.body)?this.body:this.body instanceof hn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Fy(this.body)?null:Oy(this.body)?this.body.type||null:Ay(this.body)?null:typeof this.body=="string"?Uy:this.body instanceof hn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?jy:null}clone(t={}){let n=t.method||this.method,r=t.url||this.url,o=t.responseType||this.responseType,i=t.keepalive??this.keepalive,a=t.priority||this.priority,c=t.cache||this.cache,l=t.mode||this.mode,u=t.redirect||this.redirect,d=t.credentials||this.credentials,f=t.referrer||this.referrer,p=t.integrity||this.integrity,h=t.referrerPolicy||this.referrerPolicy,S=t.transferCache??this.transferCache,y=t.timeout??this.timeout,v=t.body!==void 0?t.body:this.body,D=t.withCredentials??this.withCredentials,E=t.reportProgress??this.reportProgress,x=t.headers||this.headers,R=t.params||this.params,F=t.context??this.context;return t.setHeaders!==void 0&&(x=Object.keys(t.setHeaders).reduce((Y,lt)=>Y.set(lt,t.setHeaders[lt]),x)),t.setParams&&(R=Object.keys(t.setParams).reduce((Y,lt)=>Y.set(lt,t.setParams[lt]),R)),new e(n,r,v,{params:R,headers:x,context:F,reportProgress:E,responseType:o,withCredentials:D,transferCache:S,keepalive:i,cache:c,priority:a,timeout:y,mode:l,redirect:u,credentials:d,referrer:f,integrity:p,referrerPolicy:h})}},vr=(function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e})(vr||{}),So=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(t,n=200,r="OK"){this.headers=t.headers||new Rt,this.status=t.status!==void 0?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.redirected=t.redirected,this.responseType=t.responseType,this.ok=this.status>=200&&this.status<300}},vc=class e extends So{constructor(t={}){super(t)}type=vr.ResponseHeader;clone(t={}){return new e({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},Xi=class e extends So{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=vr.Response;clone(t={}){return new e({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0,redirected:t.redirected??this.redirected,responseType:t.responseType??this.responseType})}},yo=class extends So{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},e0=200,t0=204;var n0=new N("");var r0=/^\)\]\}',?\n/;var Vd=(()=>{class e{xhrFactory;tracingService=I(gr,{optional:!0});constructor(n){this.xhrFactory=n}maybePropagateTrace(n){return this.tracingService?.propagate?this.tracingService.propagate(n):n}handle(n){if(n.method==="JSONP")throw new k(-2800,!1);let r=this.xhrFactory;return U(null).pipe(Dt(()=>new O(i=>{let a=r.build();if(a.open(n.method,n.urlWithParams),n.withCredentials&&(a.withCredentials=!0),n.headers.forEach((v,D)=>a.setRequestHeader(v,D.join(","))),n.headers.has(Hy)||a.setRequestHeader(Hy,XC),!n.headers.has(Ly)){let v=n.detectContentTypeHeader();v!==null&&a.setRequestHeader(Ly,v)}if(n.timeout&&(a.timeout=n.timeout),n.responseType){let v=n.responseType.toLowerCase();a.responseType=v!=="json"?v:"text"}let c=n.serializeBody(),l=null,u=()=>{if(l!==null)return l;let v=a.statusText||"OK",D=new Rt(a.getAllResponseHeaders()),E=a.responseURL||n.url;return l=new vc({headers:D,status:a.status,statusText:v,url:E}),l},d=this.maybePropagateTrace(()=>{let{headers:v,status:D,statusText:E,url:x}=u(),R=null;D!==t0&&(R=typeof a.response>"u"?a.responseText:a.response),D===0&&(D=R?e0:0);let F=D>=200&&D<300;if(n.responseType==="json"&&typeof R=="string"){let Y=R;R=R.replace(r0,"");try{R=R!==""?JSON.parse(R):null}catch(lt){R=Y,F&&(F=!1,R={error:lt,text:R})}}F?(i.next(new Xi({body:R,headers:v,status:D,statusText:E,url:x||void 0})),i.complete()):i.error(new yo({error:R,headers:v,status:D,statusText:E,url:x||void 0}))}),f=this.maybePropagateTrace(v=>{let{url:D}=u(),E=new yo({error:v,status:a.status||0,statusText:a.statusText||"Unknown Error",url:D||void 0});i.error(E)}),p=f;n.timeout&&(p=this.maybePropagateTrace(v=>{let{url:D}=u(),E=new yo({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:D||void 0});i.error(E)}));let h=!1,S=this.maybePropagateTrace(v=>{h||(i.next(u()),h=!0);let D={type:vr.DownloadProgress,loaded:v.loaded};v.lengthComputable&&(D.total=v.total),n.responseType==="text"&&a.responseText&&(D.partialText=a.responseText),i.next(D)}),y=this.maybePropagateTrace(v=>{let D={type:vr.UploadProgress,loaded:v.loaded};v.lengthComputable&&(D.total=v.total),i.next(D)});return a.addEventListener("load",d),a.addEventListener("error",f),a.addEventListener("timeout",p),a.addEventListener("abort",f),n.reportProgress&&(a.addEventListener("progress",S),c!==null&&a.upload&&a.upload.addEventListener("progress",y)),a.send(c),i.next({type:vr.Sent}),()=>{a.removeEventListener("error",f),a.removeEventListener("abort",f),a.removeEventListener("load",d),a.removeEventListener("timeout",p),n.reportProgress&&(a.removeEventListener("progress",S),c!==null&&a.upload&&a.upload.removeEventListener("progress",y)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(r){return new(r||e)(A(yr))};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function o0(e,t){return t(e)}function i0(e,t,n){return(r,o)=>ke(n,()=>t(r,i=>e(i,o)))}var By=new N("",{factory:()=>[]}),Vy=new N(""),$y=new N("",{factory:()=>!0});var $d=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=A(Vd),o},providedIn:"root"})}return e})();var Sc=(()=>{class e{backend;injector;chain=null;pendingTasks=I(La);contributeToStability=I($y);constructor(n,r){this.backend=n,this.injector=r}handle(n){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(By),...this.injector.get(Vy,[])]));this.chain=r.reduceRight((o,i)=>i0(o,i,this.injector),o0)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(n,o=>this.backend.handle(o)).pipe(Cn(r))}else return this.chain(n,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||e)(A($d),A(me))};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),zd=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=A(Sc),o},providedIn:"root"})}return e})();function Bd(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,credentials:e.credentials,transferCache:e.transferCache,timeout:e.timeout,keepalive:e.keepalive,priority:e.priority,cache:e.cache,mode:e.mode,redirect:e.redirect,integrity:e.integrity,referrer:e.referrer,referrerPolicy:e.referrerPolicy}}var Dc=(()=>{class e{handler;constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof go)i=n;else{let l;o.headers instanceof Rt?l=o.headers:l=new Rt(o.headers);let u;o.params&&(o.params instanceof hn?u=o.params:u=new hn({fromObject:o.params})),i=new go(n,r,o.body!==void 0?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,referrerPolicy:o.referrerPolicy,integrity:o.integrity,timeout:o.timeout})}let a=U(i).pipe(Qr(l=>this.handler.handle(l)));if(n instanceof go||o.observe==="events")return a;let c=a.pipe(Ee(l=>l instanceof Xi));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return c.pipe(L(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new k(2806,!1);return l.body}));case"blob":return c.pipe(L(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new k(2807,!1);return l.body}));case"text":return c.pipe(L(l=>{if(l.body!==null&&typeof l.body!="string")throw new k(2808,!1);return l.body}));default:return c.pipe(L(l=>l.body))}case"response":return c;default:throw new k(2809,!1)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new hn().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,Bd(o,r))}post(n,r,o={}){return this.request("POST",n,Bd(o,r))}put(n,r,o={}){return this.request("PUT",n,Bd(o,r))}static \u0275fac=function(r){return new(r||e)(A(zd))};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var s0=new N("",{factory:()=>!0}),a0="XSRF-TOKEN",c0=new N("",{factory:()=>a0}),l0="X-XSRF-TOKEN",u0=new N("",{factory:()=>l0}),d0=(()=>{class e{cookieName=I(c0);doc=I(Te);lastCookieString="";lastToken=null;parseCount=0;getToken(){let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=Qi(n,this.cookieName),this.lastCookieString=n),this.lastToken}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),zy=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=A(d0),o},providedIn:"root"})}return e})();function f0(e,t){if(!I(s0)||e.method==="GET"||e.method==="HEAD")return t(e);try{let o=I(po).href,{origin:i}=new URL(o),{origin:a}=new URL(e.url,i);if(i!==a)return t(e)}catch(o){return t(e)}let n=I(zy).getToken(),r=I(u0);return n!=null&&!e.headers.has(r)&&(e=e.clone({headers:e.headers.set(r,n)})),t(e)}function Wd(...e){let t=[Dc,Sc,{provide:zd,useExisting:Sc},{provide:$d,useFactory:()=>I(n0,{optional:!0})??I(Vd)},{provide:By,useValue:f0,multi:!0}];for(let n of e)t.push(...n.\u0275providers);return Xr(t)}var Wy=(()=>{class e{_doc;constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}static \u0275fac=function(r){return new(r||e)(A(Te))};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ie=(()=>{class e{constructor(){this.raidTierSource=new ce(""),this.regionSource=new ce(""),this.pokemonListSource=new ce(""),this.teraTypeSource=new ce(""),this.moveListSource=new ce(""),this.loadingSource=new ce(!1),this.raidTier=this.raidTierSource.asObservable(),this.regionList=this.regionSource.asObservable(),this.pokemonList=this.pokemonListSource.asObservable(),this.teraType=this.teraTypeSource.asObservable(),this.moveList=this.moveListSource.asObservable(),this.loading=this.loadingSource.asObservable()}changeRaidTier(n){this.raidTierSource.next(n)}changeRegionList(n){this.regionSource.next(n)}changePokemon(n){this.pokemonListSource.next(n)}changeTeraType(n){this.teraTypeSource.next(n)}changeMoveList(n){this.moveListSource.next(n)}changeLoading(n){this.loadingSource.next(n)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Gy=(()=>{class e{constructor(n){this.stateService=n}valueChanged(){let n=document.getElementById("raidTier"),r=n.selectedIndex,o=n.options[r];this.stateService.changeRaidTier(o.value)}static{this.\u0275fac=function(r){return new(r||e)(W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-raid-tier"]],decls:7,vars:0,consts:[["id","raidTier",3,"change"],["value",""],["value","5"],["value","6"]],template:function(r,o){r&1&&(we(0,"select",0),mt("change",function(){return o.valueChanged()}),we(1,"option",1),pe(2,"-- Tier --"),$e(),we(3,"option",2),pe(4,"5 Star"),$e(),we(5,"option",3),pe(6,"6 Star"),$e()())},encapsulation:2})}}return e})();var m=(function(e){return e.Paldea="Paldea",e.Kitakami="Kitakami",e.Terarium="Terarium",e})(m||{}),s=(function(e){return e.Time="Time",e.HP="HP",e})(s||{}),zt=[{name:"Abomasnow",region:m.Paldea,info:{moves:["Energy Ball","Ice Punch","Ice Shard","Leer","Blizzard","Snowscape","Aurora Veil"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Blizzard"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Uses Snowscape"},{type:s.HP,threshold:25,action:"Uses Aurora Veil"}]}},{name:"Altaria",region:m.Paldea,info:{moves:["Dragon Pulse","Hurricane","Sing","Mist","Safeguard","Cotton Guard"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Safeguard"},{type:s.HP,threshold:75,action:"Uses"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Uses Cotton Guard"},{type:s.HP,threshold:25,action:"Uses Sing"}]}},{name:"Amoonguss",region:m.Paldea,info:{moves:["Energy Ball","Sludge Bomb","Spore","Clear Smog","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Grassy Terrain"},{type:s.HP,threshold:75,action:"Uses Spore"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Spore"},{type:s.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Annihilape",region:m.Paldea,info:{moves:["Shadow Claw","Close Combat","Outrage","Leer","Taunt","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Taunt"},{type:s.HP,threshold:75,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:35,action:"Uses Bulk Up"}]}},{name:"Appletun",region:m.Paldea,info:{moves:["Apple Acid","Dragon Pulse","Giga Drain","Body Press","","Growth"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses"},{type:s.HP,threshold:75,action:"Uses Growth"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Arboliva",region:m.Paldea,info:{moves:["Energy Ball","Hyper Voice","Earth Power","Charm","Sunny Day","Growth","Leaf Storm"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Sunny Day"},{type:s.HP,threshold:75,action:"Uses Growth"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Leaf Storm"}]}},{name:"Arcanine",region:m.Paldea,info:{moves:["Flamethrower","Crunch","Extreme Speed","Fire Fang","Sunny Day","Leer"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Sunny Day"},{type:s.HP,threshold:75,action:"Uses Leer"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Armarouge",region:m.Paldea,info:{moves:["Armor Cannon","Psychic","Night Shade","Will-O-Wisp","Sunny Day","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Stats & Status Reset"},{type:s.HP,threshold:75,action:"Uses Sunny Day"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Calm Mind"},{type:s.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Avalugg",region:m.Paldea,info:{moves:["Icicle Crash","Double-Edge","Crunch","Ice Fang","Snowscape","Iron Defense"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Snowscape"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Uses Snowscape"},{type:s.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Baxcalibur",region:m.Paldea,info:{moves:["Dragon Claw","Icicle Crash","Ice Shard","Body Press","Snowscape"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Snowscape"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Snowscape"},{type:s.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Blissey",region:m.Paldea,info:{moves:["Dazzling Gleam","Hyper Voice","Sing","Seismic Toss","Gravity"],specialMoves:["Seismic Toss","Gravity"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Gravity"},{type:s.HP,threshold:75,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Bombirdier",region:m.Paldea,info:{moves:["Rock Slide","Sucker Punch","Brave Bird","Torment","Knock Off","Feather Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Knock Off"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Feather Dance"}]}},{name:"Brambleghast",region:m.Paldea,info:{moves:["Giga Drain","Shadow Ball","Power Whip","Infestation","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Grassy Terrain"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:20,action:"Uses Grassy Terrain"}]}},{name:"Braviary",region:m.Paldea,info:{moves:["Acrobatics","Crush Claw","Superpower","Air Slash","Tailwind","Hone Claws"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Tailwind"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Uses Hone Claws"},{type:s.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Breloom",region:m.Paldea,info:{moves:["Seed Bomb","Mach Punch","Worry Seed","Headbutt","Grassy Terrain","Spore"],specialMoves:["Spore"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Grassy Terrain"},{type:s.HP,threshold:75,action:"Uses Spore"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Bronzong",region:m.Paldea,info:{moves:["Flash Cannon","Extrasensory","Metal Sound","Payback","Rain Dance","Calm Mind","Reflect"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Rain Dance"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Uses Calm Mind"},{type:s.HP,threshold:25,action:"Uses Reflect"}]}},{name:"Camerupt",region:m.Paldea,info:{moves:["Flamethrower","Earth Power","Yawn","Eruption","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Sunny Day"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Ceruledge",region:m.Paldea,info:{moves:["Bitter Blade","Shadow Claw","Psycho Cut","Will-O-Wisp","Sunny Day","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Stats & Status Reset"},{type:s.HP,threshold:75,action:"Uses Sunny Day"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Swords Dance"},{type:s.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Cetitan",region:m.Paldea,info:{moves:["Ice Spinner","Liquidation","Yawn","Entrainment","Snowscape"],specialMoves:["Yawn","Entrainment"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Snowscape"},{type:s.HP,threshold:75,action:"Uses Yawn"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Snowscape"},{type:s.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Clawitzer",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Aura Sphere","Crabhammer","Rain Dance"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Rain Dance"},{type:s.HP,threshold:45,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Water Pulse"}]}},{name:"Cloyster",region:m.Paldea,info:{moves:["Icicle Spear","Hydro Pump","Ice Shard","Supersonic","Shell Smash"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Shell Smash"},{type:s.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Coalossal",region:m.Paldea,info:{moves:["Heat Crash","Stone Edge","Incinerate","Ancient Power","Sandstorm","Tar Shot","Fire Blast"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Sandstorm"},{type:s.HP,threshold:75,action:"Uses Tar Shot"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Fire Blast"}]}},{name:"Copperajah",region:m.Paldea,info:{moves:["Heavy Slam","Strength","Curse","High Horsepower","Sandstorm","Iron Defense"],specialMoves:["Curse"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Sandstorm"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Corviknight",region:m.Paldea,info:{moves:["Steel Wing","Drill Peck","Taunt","Body Press","Iron Defense","Hone Claws"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Stats & Status Reset"},{type:s.HP,threshold:75,action:"Uses Iron Defense"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Hone Claws"}]}},{name:"Delibird",region:m.Paldea,info:{moves:["Present","Drill Peck","Ice Punch","Blizzard","Snowscape"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:s.Time,threshold:85,action:"Uses Snowscape"},{type:s.HP,threshold:75,action:"Uses Present"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Present"}]}},{name:"Ditto",region:m.Paldea,info:{moves:["Transform"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:s.HP,threshold:50,action:"Stats & Status Reset"}]}},{name:"Dondozo",region:m.Paldea,info:{moves:["Order Up","Waterfall","Heavy Slam","Tickle","Rain Dance","Stockpile"],specialMoves:["Stockpile"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Rain Dance"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Stockpile"},{type:s.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Dragalge",region:m.Paldea,info:{moves:["Dragon Pulse","Sludge Bomb","Water Pulse","Toxic","Acid Spray","Draco Meteor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Acid Spray"},{type:s.HP,threshold:75,action:"Uses Draco Meteor"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:30,action:"Uses Draco Meteor"}]}},{name:"Dragapult",region:m.Paldea,info:{moves:["Shadow Ball","Dragon Darts","Thunderbolt","Hex","Reflect","Light Screen"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:s.Time,threshold:85,action:"Uses Reflect"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Light Screen"}]}},{name:"Dragonite",region:m.Paldea,info:{moves:["Dragon Rush","Aerial Ace","Extreme Speed","Hurricane","Safeguard","Dragon Dance","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Safeguard"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Uses Dragon Dance"},{type:s.HP,threshold:35,action:"Uses Rain Dance"}]}},{name:"Drifblim",region:m.Paldea,info:{moves:["Hex","Air Slash","Thunder Wave","Shadow Ball","Will-O-Wisp"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Will-O-Wisp"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Eelektross",region:m.Paldea,info:{moves:["Wild Charge","Flamethrower","Discharge","Crush Claw","Ion Deluge","Thunder Wave","Coil"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Ion Deluge"},{type:s.HP,threshold:75,action:"Uses Thunder Wave"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:75,action:"Uses Thunder Wave"},{type:s.HP,threshold:25,action:"Uses Coil"}]}},{name:"Eevee",region:m.Paldea,info:{moves:["Tera Blast","Take Down","Shadow Ball","Tickle","Yawn","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Yawn"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Falinks",region:m.Paldea,info:{moves:["Megahorn","Reversal","Headbutt","Brick Break","No Retreat"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.HP,threshold:40,action:"Uses No Retreat"},{type:s.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Flapple",region:m.Paldea,info:{moves:["Grav Apple","Dragon Breath","Dragon Rush","Trailblaze","Grassy Terrain","Iron Defense","Dragon Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Grassy Terrain"},{type:s.HP,threshold:75,action:"Uses Iron Defense"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Dragon Dance"},{type:s.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Florges",region:m.Paldea,info:{moves:["Petal Dance","Moonblast","Psychic","Safeguard","Grassy Terrain","Calm Mind"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Grassy Terrain"},{type:s.HP,threshold:75,action:"Uses Calm Mind"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:30,action:"Uses Grassy Terrain"}]}},{name:"Froslass",region:m.Paldea,info:{moves:["Frost Breath","Shadow Ball","Scary Face","Draining Kiss","Snowscape","Disable","Aurora Veil"],specialMoves:["Disable"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:s.Time,threshold:85,action:"Uses Snowscape"},{type:s.HP,threshold:75,action:"Uses Disable"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Snowscape"},{type:s.HP,threshold:25,action:"Uses Aurora Veil"}]}},{name:"Gallade",region:m.Paldea,info:{moves:["Psycho Cut","Brick Break","Shadow Sneak","Fury Cutter","Hypnosis","Disable","Psychic Terrain"],specialMoves:["Disable","Shadow Sneak"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Hypnosis"},{type:s.HP,threshold:75,action:"Uses Disable"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:25,action:"Uses Psychic Terrain"}]}},{name:"Garchomp",region:m.Paldea,info:{moves:["Earthquake","Dragon Claw","Iron Head","Slash","Sandstorm","Bulldoze"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Sandstorm"},{type:s.HP,threshold:75,action:"Uses Bulldoze"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Gardevoir",region:m.Paldea,info:{moves:["Psychic","Moonblast","Disable","Draining Kiss","Misty Terrain","Calm Mind","Psychic Terrain"],specialMoves:["Disable"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Misty Terrain"},{type:s.HP,threshold:75,action:"Uses Calm Mind"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Psychic Terrain"}]}},{name:"Garganacl",region:m.Paldea,info:{moves:["Salt Cure","Rock Slide","Hammer Arm","Sandstorm"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Sandstorm"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Gengar",region:m.Paldea,info:{moves:["Shadow Ball","Sludge Bomb","Confuse Ray","Spite","Hypnosis"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Hypnosis"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Hypnosis"}]}},{name:"Glalie",region:m.Paldea,info:{moves:["Freeze-Dry","Crunch","Headbutt","Frost Breath","Snowscape","Disable"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Snowscape"},{type:s.HP,threshold:75,action:"Uses Disable"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:85,action:"Uses Snowscape"}]}},{name:"Glimmora",region:m.Paldea,info:{moves:["Power Gem","Sludge Bomb","Mortal Spin","Ancient Power","Sandstorm","Tera Blast"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Sandstorm"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:20,action:"Uses Tera Blast"}]}},{name:"Goodra",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Sludge Bomb","Power Whip","Rain Dance","Draco Meteor","Acid Armor"],specialMoves:["Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Rain Dance"},{type:s.HP,threshold:75,action:"Uses Draco Meteor"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Acid Armor"}]}},{name:"Gothitelle",region:m.Paldea,info:{moves:["Psychic","Thunder Wave","Thunderbolt","Stored Power","Calm Mind","Light Screen"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Calm Mind"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Calm Mind"},{type:s.HP,threshold:25,action:"Uses Light Screen"}]}},{name:"Greedent",region:m.Paldea,info:{moves:["Body Slam","Body Press","Bullet Seed","Tail Whip","Stockpile"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Stockpile"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:25,action:"Uses Stockpile"}]}},{name:"Grimmsnarl",region:m.Paldea,info:{moves:["Spirit Break","False Surrender","Scary Face","Foul Play","Light Screen","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Light Screen"},{type:s.HP,threshold:40,action:"Uses Bulk Up"},{type:s.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Gyarados",region:m.Paldea,info:{moves:["Aqua Tail","Twister","Hurricane","Crunch","Scary Face","Taunt","Dragon Dance","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Scary Face"},{type:s.HP,threshold:75,action:"Uses Taunt"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Uses Dragon Dance"},{type:s.HP,threshold:35,action:"Uses Rain Dance"}]}},{name:"Hariyama",region:m.Paldea,info:{moves:["Reversal","Brick Break","Brine","Heavy Slam","Scary Face","Taunt","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Scary Face"},{type:s.HP,threshold:75,action:"Uses Taunt"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Uses Bulk Up"},{type:s.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Hatterene",region:m.Paldea,info:{moves:["Dazzling Gleam","Psychic","Dark Pulse","Charm","Misty Terrain","Calm Mind","Psychic Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Misty Terrain"},{type:s.HP,threshold:75,action:"Uses Calm Mind"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Calm Mind"},{type:s.HP,threshold:20,action:"Uses Psychic Terrain"}]}},{name:"Haxorus",region:m.Paldea,info:{moves:["Dragon Claw","Crunch","Giga Impact","First Impression","Harden","Dragon Dance"],specialMoves:["Harden","First Impression"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Harden"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Dragon Dance"},{type:s.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Hippowdon",region:m.Paldea,info:{moves:["Earthquake","Yawn","Rock Slide","Body Slam","Stockpile"],specialMoves:["Stockpile"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Yawn"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Stockpile"}]}},{name:"Honchkrow",region:m.Paldea,info:{moves:["Night Slash","Hurricane","Haze","Wing Attack","Nasty Plot"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:25,action:"Uses Nasty Plot"}]}},{name:"Houndoom",region:m.Paldea,info:{moves:["Flamethrower","Crunch","Taunt","Will-O-Wisp","Sunny Day","Howl"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Sunny Day"},{type:s.HP,threshold:75,action:"Uses Howl"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Hydreigon",region:m.Paldea,info:{moves:["Dark Pulse","Dragon Pulse","Scary Face","Dragon Rush","Taunt","Reflect","Nasty Plot"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Taunt"},{type:s.HP,threshold:75,action:"Uses Reflect"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Indeedee (Male)",formName:"indeedee",region:m.Paldea,info:{moves:["Psychic","Hyper Voice","Shadow Ball","Trick Room","Play Nice","Calm Mind"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Play Nice"},{type:s.HP,threshold:75,action:"Uses Calm Mind"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Indeedee (Female)",formName:"indeedee",imageAlt:"-f",region:m.Paldea,info:{moves:["Psychic","Hyper Voice","Shadow Ball","Trick Room","Play Nice","Calm Mind"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Play Nice"},{type:s.HP,threshold:75,action:"Uses Calm Mind"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Kingambit",region:m.Paldea,info:{moves:["Iron Head","Night Slash","Torment","Slash","Taunt","Metal Burst"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Taunt"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Torment"},{type:s.Time,threshold:15,action:"Uses Metal Burst"}]}},{name:"Krookodile",region:m.Paldea,info:{moves:["Earthquake","Crunch","Sand Tomb","Counter","Torment","Hone Claws"],specialMoves:["Counter"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Torment"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:35,action:"Uses Hone Claws"}]}},{name:"Luxray",region:m.Paldea,info:{moves:["Crunch","Wild Charge","Discharge","Thunder Wave","Electric Terrain","Leer"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Electric Terrain"},{type:s.HP,threshold:75,action:"Uses Leer"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:35,action:"Uses Electric Terrain"}]}},{name:"Mabosstiff",region:m.Paldea,info:{moves:["Crunch","Play Rough","Take Down","Swagger","Taunt"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Taunt"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Magnezone",region:m.Paldea,info:{moves:["Thunderbolt","Flash Cannon","Tri Attack","Thunder Wave","Magnet Rise","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Magnet Rise"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Electric Terrain"},{type:s.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Mimikyu",region:m.Paldea,info:{moves:["Play Rough","Shadow Claw","Will-O-Wisp","Shadow Sneak","Light Screen","Taunt"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Light Screen"},{type:s.HP,threshold:75,action:"Uses Taunt"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Will-O-Wisp"},{type:s.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Mismagius",region:m.Paldea,info:{moves:["Mystical Fire","Shadow Ball","Confuse Ray","Taunt","Light Screen","Nasty Plot"],specialMoves:["Light Screen"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Light Screen"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:25,action:"Uses Nasty Plot"}]}},{name:"Mudsdale",region:m.Paldea,info:{moves:["High Horsepower","Body Press","Rock Smash","Heavy Slam","Scary Face","Iron Defense"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Scary Face"},{type:s.Time,threshold:75,action:"Uses Iron Defense"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"}]}},{name:"Noivern",region:m.Paldea,info:{moves:["Air Slash","Dragon Pulse","Acrobatics","Boomburst","Tailwind"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:s.Time,threshold:85,action:"Uses Tailwind"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Uses Tailwind"},{type:s.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Oranguru",region:m.Paldea,info:{moves:["Facade","Psychic","Stored Power","Yawn","Calm Mind","Light Screen"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Calm Mind"},{type:s.HP,threshold:75,action:"Uses Light Screen"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Calm Mind"},{type:s.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Orthworm",region:m.Paldea,info:{moves:["Iron Head","Earthquake","Stomping Tantrum","Wrap","Sandstorm","Coil"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Sandstorm"},{type:s.HP,threshold:75,action:"Uses Coil"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Palafin",region:m.Paldea,info:{moves:["Liquidation","Acrobatics","Charm","Boomburst","Rain Dance","Bulk Up"],specialMoves:["Boomburst"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:85,action:"Uses Rain Dance"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Bulk Up"},{type:s.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Passimian",region:m.Paldea,info:{moves:["Reversal","Rock Smash","Facade","Gunk Shot","Taunt","Trailblaze","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Taunt"},{type:s.HP,threshold:75,action:"Uses Trailblaze"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Bulk Up"}]}},{name:"Pawmot",region:m.Paldea,info:{moves:["Wild Charge","Close Combat","Nuzzle","Sweet Kiss","Double Shock"],specialMoves:["Sweet Kiss"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:s.Time,threshold:80,action:"Uses Nuzzle"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:20,action:"Uses Double Shock"}]}},{name:"Pincurchin",region:m.Paldea,info:{moves:["Zing Zap","Thunder","Surf","Poison Jab","Rain Dance","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Rain Dance"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Polteageist",region:m.Paldea,info:{moves:["Shadow Ball","Mega Drain","Astonish","Will-O-Wisp","Shell Smash"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:35,action:"Uses Shell Smash"},{type:s.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Raichu",region:m.Paldea,info:{moves:["Discharge","Iron Tail","Charm","Nuzzle","Electric Terrain","Thunder Wave"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:s.Time,threshold:85,action:"Uses Electric Terrain"},{type:s.HP,threshold:75,action:"Uses Thunder Wave"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Electric Terrain"}]}},{name:"Revavroom",region:m.Paldea,info:{moves:["Spin Out","Taunt","Gunk Shot","Overheat","Scary Face","Shift Gear"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Scary Face"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Shift Gear"},{type:s.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Rotom",region:m.Paldea,info:{moves:["Discharge","Uproar","Hex","Thunder Wave","Charge","Eerie Impulse"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Charge"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Eerie Impulse"}]}},{name:"Sableye",region:m.Paldea,info:{moves:["Shadow Claw","Foul Play","Will-O-Wisp","Night Shade","Flatter","Torment"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:s.Time,threshold:85,action:"Player Stats & Status Reset"},{type:s.HP,threshold:75,action:"Uses Flatter"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Uses Torment"},{type:s.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Salamence",region:m.Paldea,info:{moves:["Dragon Rush","Aerial Ace","Hyper Voice","Draco Meteor","Dragon Dance","Focus Energy"],specialMoves:["Dragon Rush"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Uses Dragon Dance"},{type:s.HP,threshold:25,action:"Uses Focus Energy"}]}},{name:"Scizor",region:m.Paldea,info:{moves:["Iron Head","X-Scissor","Bullet Punch","Slash","Iron Defense","Focus Energy"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Iron Defense"},{type:s.HP,threshold:75,action:"Uses Focus Energy"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Player Stats & Status Reset"}]}},{name:"Scyther",region:m.Paldea,info:{moves:["Aerial Ace","X-Scissor","Slash","Agility","Focus Energy","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Focus Energy"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Uses Swords Dance"}]}},{name:"Slaking",region:m.Paldea,info:{moves:["Facade","Shadow Claw","Play Rough","Swagger","Encore"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Encore"},{type:s.HP,threshold:75,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Reduce Tera Orb Charge"}]}},{name:"Slowbro",region:m.Paldea,info:{moves:["Zen Headbutt","Liquidation","Yawn","Water Pulse","Curse"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Curse"},{type:s.HP,threshold:70,action:"Uses Yawn"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Curse"}]}},{name:"Slowking",region:m.Paldea,info:{moves:["Psychic","Surf","Yawn","Water Pulse","Psychic Terrain","Calm Mind"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Psychic Terrain"},{type:s.HP,threshold:70,action:"Uses Yawn"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Calm Mind"}]}},{name:"Staraptor",region:m.Paldea,info:{moves:["Close Combat","Brave Bird","Quick Attack","Double-Edge"],specialMoves:["Double-Edge"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Stats & Status Reset"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Brave Bird"}]}},{name:"Talonflame",region:m.Paldea,info:{moves:["Acrobatics","Flare Blitz","Steel Wing","Heat Wave","Bulk Up"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:s.Time,threshold:85,action:"Uses Bulk Up"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:30,action:"Uses Bulk Up"}]}},{name:"Tatsugiri (Curly)",formName:"tatsugiri",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:75,action:"Uses Chilling Water"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tatsugiri (Droopy)",formName:"tatsugiri",imageAlt:"-d",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:75,action:"Uses Chilling Water"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tatsugiri (Stretchy)",formName:"tatsugiri",imageAlt:"-s",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:75,action:"Uses Chilling Water"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tauros (Fire)",formName:"taurospaldeablaze",imageAlt:"-b",region:m.Paldea,info:{moves:["Flare Blitz","Close Combat","Flamethrower","Headbutt","Work Up","Sunny Day"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Work Up"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Sunny Day"},{type:s.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Tauros (Water)",formName:"taurospaldeaaqua",imageAlt:"-a",region:m.Paldea,info:{moves:["Wave Crash","Close Combat","Surf","Headbutt","Work Up","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Work Up"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Rain Dance"},{type:s.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Tinkaton",region:m.Paldea,info:{moves:["Gigaton Hammer","Play Rough","Brutal Swing","Rock Smash","Misty Terrain","Thunder Wave","Charm"],specialMoves:["Charm","Misty Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:80,action:"Uses Misty Terrain"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Thunder Wave"},{type:s.HP,threshold:25,action:"Uses Charm"}]}},{name:"Toxtricity (Amped)",formName:"toxtricity",region:m.Paldea,info:{moves:["Overdrive","Poison Jab","Nuzzle","Boomburst","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Electric Terrain"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Toxtricity (Low Key)",formName:"toxtricity",imageAlt:"-l",region:m.Paldea,info:{moves:["Overdrive","Poison Jab","Nuzzle","Boomburst","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Electric Terrain"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Tsareena",region:m.Paldea,info:{moves:["High Jump Kick","Power Whip","Stomp","Trop Kick","Reflect","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Reflect"},{type:s.HP,threshold:75,action:"Uses Grassy Terrain"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Grassy Terrain"}]}},{name:"Tyranitar",region:m.Paldea,info:{moves:["Rock Slide","Crunch","Screech","Dark Pulse","Dragon Dance","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:75,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Uses Dragon Dance"},{type:s.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Volcarona",region:m.Paldea,info:{moves:["Fire Blast","Bug Buzz","Hurricane","Will-O-Wisp","Sunny Day","Quiver Dance"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Sunny Day"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Quiver Dance"},{type:s.HP,threshold:20,action:"Uses Quiver Dance"}]}},{name:"Weavile",region:m.Paldea,info:{moves:["Ice Punch","Night Slash","Taunt","Facade","Reflect","Swords Dance"],specialMoves:["Reflect"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:s.Time,threshold:85,action:"Uses Reflect"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:25,action:"Uses Swords Dance"}]}},{name:"Zoroark",region:m.Paldea,info:{moves:["Night Daze","Shadow Claw","Taunt","Hyper Voice","Torment","Nasty Plot"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Uses Torment"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Ambipom",region:m.Kitakami,info:{moves:["Double Hit","Screech","Fury Swipes","Knock Off","Trailblaze","Sand Attack"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:s.HP,threshold:90,action:"Uses Trailblaze"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Sand Attack"},{type:s.HP,threshold:15,action:"Uses Sand Attack"}]}},{name:"Basculegion (Male)",formName:"basculegion",region:m.Kitakami,info:{moves:["Liquidation","Aqua Jet","Shadow Ball","Scary Face","Rain Dance","Wave Crash"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Rain Dance"},{type:s.HP,threshold:75,action:"Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Rain Dance"},{type:s.HP,threshold:10,action:"Uses Wave Crash"}]}},{name:"Basculegion (Female)",formName:"basculegion",imageAlt:"-f",region:m.Kitakami,info:{moves:["Liquidation","Aqua Jet","Shadow Ball","Scary Face","Rain Dance","Hydro Pump"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Rain Dance"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Rain Dance"},{type:s.HP,threshold:10,action:"Uses Hydro Pump"}]}},{name:"Chandelure",region:m.Kitakami,info:{moves:["Shadow Ball","Heat Wave","Confuse Ray","Flamethrower","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.HP,threshold:95,action:"Uses Sunny Day"},{type:s.HP,threshold:80,action:"Player Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Sunny Day"},{type:s.HP,threshold:20,action:"Uses Heat Wave"}]}},{name:"Conkeldurr",region:m.Kitakami,info:{moves:["Hammer Arm","Stone Edge","Superpower","Scary Face","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:90,action:"Stats & Status Reset"},{type:s.HP,threshold:65,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Bulk Up"},{type:s.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Dusknoir",region:m.Kitakami,info:{moves:["Fire Punch","Brick Break","Shadow Ball","Shadow Punch","Trick Room","Poltergeist"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:90,action:"Uses Trick Room"},{type:s.HP,threshold:65,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Poltergeist"}]}},{name:"Gliscor",region:m.Kitakami,info:{moves:["Poison Jab","Earthquake","Acrobatics","X-Scissor","Sandstorm","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Sandstorm"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Swords Dance"},{type:s.Time,threshold:15,action:"Uses Sandstorm"}]}},{name:"Golem",region:m.Kitakami,info:{moves:["Earthquake","Stone Edge","Heavy Slam","Defense Curl"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:90,action:"Uses Defense Curl"},{type:s.Time,threshold:70,action:"Uses Defense Curl"},{type:s.Time,threshold:50,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Earthquake"}]}},{name:"Kommo-o",formName:"kommoo",region:m.Kitakami,info:{moves:["Brick Break","Dragon Claw","Boomburst","Scary Face","Clangorous Soul"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:60,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Uses Clangorous Soul"},{type:s.HP,threshold:10,action:"Uses Clangorous Soul"}]}},{name:"Ludicolo",region:m.Kitakami,info:{moves:["Energy Ball","Surf","Fake Out","Trailblaze","Rain Dance"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:90,action:"Uses Rain Dance"},{type:s.HP,threshold:65,action:"Stats & Status Reset"},{type:s.HP,threshold:30,action:"Stats & Status Reset"},{type:s.HP,threshold:10,action:"Uses Surf"}]}},{name:"Mamoswine",region:m.Kitakami,info:{moves:["Earthquake","Blizzard","Ice Shard","Ancient Power","Snowscape","Amnesia"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Snowscape"},{type:s.HP,threshold:75,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Uses Amnesia"},{type:s.HP,threshold:10,action:"Uses Earthquake"}]}},{name:"Mandibuzz",region:m.Kitakami,info:{moves:["Rock Tomb","Dark Pulse","Toxic","Foul Play","Taunt","Nasty Plot"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:90,action:"Uses Taunt"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Nasty Plot"},{type:s.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Mienshao",region:m.Kitakami,info:{moves:["Aura Sphere","Poison Jab","Taunt","Acrobatics","Bulk Up"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:s.Time,threshold:90,action:"Uses Taunt"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Bulk Up"},{type:s.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Milotic",region:m.Kitakami,info:{moves:["Chilling Water","Surf","Dragon Pulse","Attract","Rain Dance","Hydro Pump"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:90,action:"Uses Rain Dance"},{type:s.HP,threshold:65,action:"Stats & Status Reset"},{type:s.HP,threshold:35,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Ninetales",region:m.Kitakami,info:{moves:["Flamethrower","Extrasensory","Will-O-Wisp","Hypnosis","Nasty Plot"],specialMoves:["Hypnosis"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:85,action:"Stats & Status Reset"},{type:s.HP,threshold:60,action:"Player Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Politoed",region:m.Kitakami,info:{moves:["Surf","Hyper Voice","Weather Ball","Encore","Rain Dance","Hydro Pump"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:90,action:"Player Stats & Status Reset"},{type:s.HP,threshold:75,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Uses Rain Dance"},{type:s.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Poliwrath",region:m.Kitakami,info:{moves:["Liquidation","Brick Break","Haze","Hydro Pump","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Rain Dance"},{type:s.HP,threshold:70,action:"Player Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Probopass",region:m.Kitakami,info:{moves:["Body Press","Power Gem","Flash Cannon","Harden","Gravity","Zap Cannon"],specialMoves:["Harden"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:90,action:"Uses Gravity"},{type:s.HP,threshold:75,action:"Uses Zap Cannon"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Zap Cannon"}]}},{name:"Shiftry",region:m.Kitakami,info:{moves:["Fake Out","Sucker Punch","Leaf Blade","Extrasensory","Sunny Day","Leaf Storm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:90,action:"Uses Sunny Day"},{type:s.HP,threshold:65,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Stats & Status Reset"},{type:s.HP,threshold:10,action:"Uses Leaf Storm"}]}},{name:"Sinistcha",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.HP,threshold:85,action:"Stats & Status Reset"},{type:s.HP,threshold:75,action:"Uses Grassy Terrain"},{type:s.HP,threshold:40,action:"Uses Grassy Terrain"},{type:s.HP,threshold:15,action:"Uses Matcha Gotcha"}]}},{name:"Snorlax",region:m.Kitakami,info:{moves:["Body Slam","Heavy Slam","Bite","Mud-Slap","Curse"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Curse"},{type:s.HP,threshold:70,action:"Player Stats & Status Reset"},{type:s.HP,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Trevenant",region:m.Kitakami,info:{moves:["Wood Hammer","Shadow Claw","Will-O-Wisp","Hex","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Grassy Terrain"},{type:s.HP,threshold:75,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Grassy Terrain"},{type:s.HP,threshold:20,action:"Uses Will-O-Wisp"}]}},{name:"Victreebel",region:m.Kitakami,info:{moves:["Sludge Bomb","Power Whip","Acid Spray","Trailblaze","Sunny Day"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:90,action:"Player Stats & Status Reset"},{type:s.HP,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Uses Sunny Day"},{type:s.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Vikavolt",region:m.Kitakami,info:{moves:["Discharge","Bug Buzz","Solar Beam","Zap Cannon"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:90,action:"Uses Discharge"},{type:s.HP,threshold:75,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Zap Cannon"},{type:s.HP,threshold:20,action:"Uses Zap Cannon"}]}},{name:"Yanmega",region:m.Kitakami,info:{moves:["Bug Buzz","Air Slash","Quick Attack","Hypnosis","Supersonic"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.HP,threshold:90,action:"Stats & Status Reset"},{type:s.HP,threshold:70,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Uses Supersonic"}]}},{name:"Alcremie",region:m.Terarium,info:{moves:["Dazzling Gleam","Psychic","Encore","Psyshock","Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.HP,threshold:90,action:"Uses Encore"},{type:s.HP,threshold:50,action:"Uses Acid Armor"},{type:s.HP,threshold:25,action:"Uses Acid Armor"},{type:s.Time,threshold:30,action:"Reduce Tera Orb Charge"}]}},{name:"Duraludon",region:m.Terarium,info:{moves:["Flash Cannon","Dragon Pulse","Breaking Swipe","Metal Sound","Light Screen","Draco Meteor","Iron Defense"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.HP,threshold:99,action:"Uses Light Screen"},{type:s.HP,threshold:50,action:"Uses Draco Meteor"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:30,action:"Uses Iron Defense"}]}},{name:"Electivire",region:m.Terarium,info:{moves:["Discharge","Thunder Punch","Fire Punch","Ice Punch","Thunder Wave","Electric Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.HP,threshold:75,action:"Uses Thunder Wave"},{type:s.HP,threshold:60,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Uses Electric Terrain"},{type:s.HP,threshold:25,action:"Uses Discharge"}]}},{name:"Excadrill",region:m.Terarium,info:{moves:["Drill Run","Iron Head","X-Scissor","Rapid Spin","Sandstorm","Earthquake"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Sandstorm"},{type:s.HP,threshold:75,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Uses Sandstorm"},{type:s.HP,threshold:15,action:"Uses Earthquake"}]}},{name:"Exeggutor",region:m.Terarium,info:{moves:["Psychic","Energy Ball","Uproar","Bulldoze","Sunny Day","Growth"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:99,action:"Uses Sunny Day"},{type:s.HP,threshold:90,action:"Uses Growth"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"}]}},{name:"Flygon",region:m.Terarium,info:{moves:["Dragon Pulse","Scorching Sands","Earthquake","Flamethrower","Sandstorm","Boomburst"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:s.HP,threshold:100,action:"Uses Sandstorm"},{type:s.HP,threshold:50,action:"Uses Boomburst"},{type:s.Time,threshold:30,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:30,action:"Uses Boomburst"}]}},{name:"Golurk",region:m.Terarium,info:{moves:["Shadow Punch","Drain Punch","Heavy Slam","Iron Defense","Gravity","Reflect"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.HP,threshold:90,action:"Uses Gravity"},{type:s.HP,threshold:70,action:"Player Stats & Status Reset"},{type:s.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:20,action:"Uses Reflect"}]}},{name:"Hitmonchan",region:m.Terarium,info:{moves:["Mach Punch","Mega Punch","Thunder Punch","Throat Chop","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.HP,threshold:95,action:"Uses Focus Energy"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Uses Bulk Up"},{type:s.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Hitmonlee",region:m.Terarium,info:{moves:["Low Sweep","Mega Kick","Blaze Kick","Scary Face","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.HP,threshold:95,action:"Uses Focus Energy"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Uses Bulk Up"},{type:s.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Hitmontop",region:m.Terarium,info:{moves:["Triple Kick","Sucker Punch","Gyro Ball","Triple Axel","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:s.HP,threshold:95,action:"Uses Focus Energy"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Uses Bulk Up"},{type:s.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Kingdra",region:m.Terarium,info:{moves:["Dragon Pulse","Hydro Pump","Flash Cannon","Yawn","Rain Dance","Focus Energy"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Rain Dance"},{type:s.HP,threshold:50,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Uses Focus Energy"}]}},{name:"Lapras",region:m.Terarium,info:{moves:["Ice Beam","Freeze-Dry","Sparkling Aria","Body Press","Sing","Mist","Snowscape"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.HP,threshold:95,action:"Uses Sing"},{type:s.HP,threshold:70,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Uses Mist"},{type:s.HP,threshold:30,action:"Uses Snowscape"}]}},{name:"Magmortar",region:m.Terarium,info:{moves:["Flamethrower","Psychic","Focus Blast","Clear Smog","Sunny Day","Will-O-Wisp"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Sunny Day"},{type:s.HP,threshold:75,action:"Uses Will-O-Wisp"},{type:s.HP,threshold:50,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Malamar",region:m.Terarium,info:{moves:["Foul Play","Psycho Cut","Night Slash","Taunt","Topsy-Turvy","Superpower"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.HP,threshold:95,action:"Uses Topsy-Turvy"},{type:s.HP,threshold:75,action:"Uses Superpower"},{type:s.HP,threshold:75,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Player Stats & Status Reset"}]}},{name:"Metagross",region:m.Terarium,info:{moves:["Zen Headbutt","Meteor Mash","Agility","Bullet Punch","Light Screen","Magnet Rise"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.HP,threshold:90,action:"Uses Light Screen"},{type:s.HP,threshold:50,action:"Uses Magnet Rise"},{type:s.HP,threshold:25,action:"Stats & Status Reset"},{type:s.Time,threshold:20,action:"Reduce Tera Orb Charge"}]}},{name:"Minior",region:m.Terarium,info:{moves:["Power Gem","Acrobatics","Take Down","Swift","Sandstorm","Shell Smash"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.HP,threshold:90,action:"Uses Sandstorm"},{type:s.HP,threshold:49,action:"Player Stats & Status Reset"},{type:s.HP,threshold:49,action:"Uses Shell Smash"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"}]}},{name:"Porygon-Z",formName:"porygonz",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Magnet Rise"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.HP,threshold:100,action:"Uses Magnet Rise"},{type:s.HP,threshold:70,action:"Player Stats & Status Reset"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.HP,threshold:10,action:"Player Stats & Status Reset"}]}},{name:"Porygon2",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Magnet Rise"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.HP,threshold:100,action:"Uses Magnet Rise"},{type:s.HP,threshold:70,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Stats & Status Reset"},{type:s.HP,threshold:10,action:"Stats & Status Reset"}]}},{name:"Reuniclus",region:m.Terarium,info:{moves:["Psychic","Psyshock","Gravity","Shadow Ball","Psychic Terrain","Reflect"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.HP,threshold:75,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Uses Psychic Terrain"},{type:s.HP,threshold:49,action:"Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Reflect"}]}},{name:"Rhyperior",region:m.Terarium,info:{moves:["Earthquake","Rock Wrecker","Brick Break","Surf","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.HP,threshold:75,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Uses Sandstorm"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:20,action:"Uses Rock Wrecker"}]}},{name:"Skarmory",region:m.Terarium,info:{moves:["Steel Wing","Drill Peck","X-Scissor","Feint","Iron Defense","Swords Dance","Tailwind"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.HP,threshold:90,action:"Uses Iron Defense"},{type:s.HP,threshold:70,action:"Uses Swords Dance"},{type:s.HP,threshold:30,action:"Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Tailwind"}]}}],Wt=[{name:"Amoonguss",region:m.Paldea,info:{moves:["Energy Ball","Foul Play","Spore","Sludge Bomb","Grassy Terrain"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:s.Time,threshold:90,action:"Uses Grassy Terrain"},{type:s.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Grassy Terrain"}]}},{name:"Annihilape",region:m.Paldea,info:{moves:["Close Combat","Shadow Claw","Assurance","Focus Energy","Bulk Up","Rage Fist"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.Time,threshold:95,action:"Stats & Status Reset"},{type:s.HP,threshold:90,action:"Uses Bulk Up"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Bulk Up"},{type:s.Time,threshold:5,action:"Uses Rage Fist"}]}},{name:"Armarouge",region:m.Paldea,info:{moves:["Armor Cannon","Psychic","Night Shade","Will-O-Wisp","Calm Mind","Sunny Day"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:s.Time,threshold:90,action:"Uses Calm Mind"},{type:s.Time,threshold:65,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Avalugg",region:m.Paldea,info:{moves:["Icicle Crash","Heavy Slam","Snowscape","Ice Spinner","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:s.Time,threshold:90,action:"Uses Snowscape"},{type:s.Time,threshold:75,action:"Uses Iron Defense"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Baxcalibur",region:m.Paldea,info:{moves:["Icicle Spear","Dragon Rush","Snowscape","Body Press"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.Time,threshold:80,action:"Uses Snowscape"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Snowscape"},{type:s.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Blissey",region:m.Paldea,info:{moves:["Dazzling Gleam","Hyper Voice","Sing","Light Screen","Defense Curl"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:s.HP,threshold:95,action:"Uses Defense Curl"},{type:s.HP,threshold:75,action:"Uses Defense Curl"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Sing"},{type:s.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Bombirdier",region:m.Paldea,info:{moves:["Rock Slide","Acrobatics","Knock Off","Feather Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.Time,threshold:80,action:"Uses Knock Off"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Feather Dance"}]}},{name:"Breloom",region:m.Paldea,info:{moves:["Bullet Seed","Low Sweep","Spore","Aerial Ace","Grassy Terrain"],specialMoves:["Spore"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.Time,threshold:80,action:"Uses Grassy Terrain"},{type:s.HP,threshold:75,action:"Uses Spore"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Ceruledge",region:m.Paldea,info:{moves:["Bitter Blade","Shadow Claw","Psycho Cut","Will-O-Wisp","Sunny Day"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.Time,threshold:85,action:"Stats & Status Reset"},{type:s.Time,threshold:65,action:"Uses Will-O-Wisp"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Cetitan",region:m.Paldea,info:{moves:["Ice Spinner","Body Slam","Snowscape","Stomping Tantrum","Yawn"],specialMoves:["Yawn"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:s.Time,threshold:95,action:"Stats & Status Reset"},{type:s.Time,threshold:75,action:"Uses Snowscape"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Yawn"}]}},{name:"Clawitzer",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Aura Sphere","Crabhammer","Rain Dance"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:s.Time,threshold:85,action:"Uses Rain Dance"},{type:s.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Water Pulse"}]}},{name:"Clodsire",region:m.Paldea,info:{moves:["Earthquake","Poison Jab","Megahorn","Yawn"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:s.Time,threshold:95,action:"Player Stats & Status Reset"},{type:s.HP,threshold:75,action:"Uses Yawn"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Earthquake"}]}},{name:"Corviknight",region:m.Paldea,info:{moves:["Iron Head","Drill Peck","Body Press","Hone Claws","Tailwind"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:s.Time,threshold:90,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:75,action:"Uses Hone Claws"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Tailwind"}]}},{name:"Cyclizar",region:m.Paldea,info:{moves:["Double-Edge","Dragon Claw","Dragon Pulse","Knock Off","Shift Gear"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:s.Time,threshold:95,action:"Stats & Status Reset"},{type:s.Time,threshold:80,action:"Uses Knock Off"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Dachsbun",region:m.Paldea,info:{moves:["Play Rough","Double-Edge","Bite","Baby-Doll Eyes"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:s.Time,threshold:95,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Play Rough"}]}},{name:"Ditto",region:m.Paldea,info:{moves:["Transform"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Dondozo",region:m.Paldea,info:{moves:["Wave Crash","Order Up","Heavy Slam","Yawn","Rain Dance","Curse"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:s.Time,threshold:95,action:"Stats & Status Reset"},{type:s.HP,threshold:75,action:"Uses Rain Dance"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Curse"}]}},{name:"Dragalge",region:m.Paldea,info:{moves:["Dragon Pulse","Sludge Bomb","Water Pulse","Toxic","Acid Spray","Draco Meteor"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:s.Time,threshold:85,action:"Uses Acid Spray"},{type:s.HP,threshold:75,action:"Uses Draco Meteor"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:30,action:"Uses Draco Meteor"}]}},{name:"Dragapult",region:m.Paldea,info:{moves:["Shadow Ball","Dragon Pulse","Thunderbolt","Flamethrower","Reflect","Light Screen"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:s.Time,threshold:85,action:"Uses Reflect"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Light Screen"}]}},{name:"Dragonite",region:m.Paldea,info:{moves:["Dragon Rush","Extreme Speed","Dragon Dance","Aqua Tail","Light Screen"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.HP,threshold:95,action:"Stats & Status Reset"},{type:s.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:65,action:"Uses Light Screen"},{type:s.Time,threshold:50,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Dragon Dance"}]}},{name:"Espeon",region:m.Paldea,info:{moves:["Tera Blast","Psychic","Psyshock","Tickle","Psychic Terrain","Calm Mind"],specialMoves:["Tickle"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:s.HP,threshold:90,action:"Uses Psychic Terrain"},{type:s.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Calm Mind"},{type:s.HP,threshold:20,action:"Uses Psychic Terrain"}]}},{name:"Farigiraf",region:m.Paldea,info:{moves:["Twin Beam","Hyper Voice","Low Kick","Uproar","Agility"],specialMoves:["Uproar"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:s.Time,threshold:90,action:"Uses Agility"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Uproar"}]}},{name:"Flareon",region:m.Paldea,info:{moves:["Tera Blast","Flare Blitz","Lava Plume","Will-O-Wisp","Sunny Day","Curse"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.HP,threshold:90,action:"Uses Sunny Day"},{type:s.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Curse"},{type:s.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Frosmoth",region:m.Paldea,info:{moves:["Blizzard","Bug Buzz","Hurricane","Snowscape"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:s.Time,threshold:80,action:"Uses Snowscape"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Gallade",region:m.Paldea,info:{moves:["Psycho Cut","Close Combat","Will-O-Wisp","Aerial Ace","Hypnosis","Disable","Psychic Terrain"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.Time,threshold:85,action:"Uses Hypnosis"},{type:s.HP,threshold:75,action:"Uses Disable"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:25,action:"Uses Psychic Terrain"}]}},{name:"Garchomp",region:m.Paldea,info:{moves:["Outrage","Earthquake","Flamethrower","Rock Slide","Swords Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.HP,threshold:90,action:"Stats & Status Reset"},{type:s.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Swords Dance"},{type:s.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Gardevoir",region:m.Paldea,info:{moves:["Moonblast","Psychic","Calm Mind","Thunder Wave","Misty Terrain","Psychic Terrain"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:s.Time,threshold:85,action:"Uses Misty Terrain"},{type:s.HP,threshold:75,action:"Uses Calm Mind"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Psychic Terrain"}]}},{name:"Garganacl",region:m.Paldea,info:{moves:["Stone Edge","Heavy Slam","Salt Cure","Hammer Arm","Sandstorm","Rock Slide"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:s.HP,threshold:90,action:"Uses Sandstorm"},{type:s.Time,threshold:60,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Gengar",region:m.Paldea,info:{moves:["Shadow Ball","Sludge Bomb","Dazzling Gleam","Will-O-Wisp","Hypnosis"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:s.Time,threshold:85,action:"Uses Hypnosis"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Hypnosis"}]}},{name:"Glaceon",region:m.Paldea,info:{moves:["Tera Blast","Ice Beam","Blizzard","Charm","Snowscape","Calm Mind"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:s.HP,threshold:90,action:"Uses Snowscape"},{type:s.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Calm Mind"},{type:s.HP,threshold:20,action:"Uses Snowscape"}]}},{name:"Glimmora",region:m.Paldea,info:{moves:["Power Gem","Sludge Wave","Hyper Beam","Rock Polish","Sandstorm"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:s.HP,threshold:90,action:"Uses Sandstorm"},{type:s.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:55,action:"Reduce Tera Orb Charge"},{type:s.Time,threshold:50,action:"Reduce Tera Orb Charge"}]}},{name:"Goodra",region:m.Paldea,info:{moves:["Dragon Pulse","Surf","Sludge Bomb","Power Whip","Rain Dance"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:s.HP,threshold:90,action:"Uses Rain Dance"},{type:s.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Rain Dance"}]}},{name:"Grafaiai",region:m.Paldea,info:{moves:["Knock Off","Gunk Shot","Take Down","Flatter","Toxic"],specialMoves:["Toxic"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:s.Time,threshold:95,action:"Stats & Status Reset"},{type:s.HP,threshold:75,action:"Uses Toxic"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Gunk Shot"}]}},{name:"Gyarados",region:m.Paldea,info:{moves:["Aqua Tail","Crunch","Hurricane","Ice Fang","Taunt","Dragon Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.HP,threshold:90,action:"Stats & Status Reset"},{type:s.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Taunt"},{type:s.HP,threshold:20,action:"Uses Dragon Dance"}]}},{name:"Haxorus",region:m.Paldea,info:{moves:["Outrage","Crunch","Giga Impact","First Impression","Dragon Dance"],specialMoves:["First Impression"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.Time,threshold:90,action:"Stats & Status Reset"},{type:s.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Dragon Dance"}]}},{name:"Heracross",region:m.Paldea,info:{moves:["Megahorn","Close Combat","Thrash","Leer","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.HP,threshold:75,action:"Uses Bulk Up"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Hippowdon",region:m.Paldea,info:{moves:["Earthquake","Ice Fang","Yawn","Rock Slide"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:s.Time,threshold:90,action:"Uses Yawn"},{type:s.HP,threshold:60,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Yawn"}]}},{name:"Hydreigon",region:m.Paldea,info:{moves:["Dark Pulse","Dragon Pulse","Crunch","Taunt","Work Up","Nasty Plot"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:s.HP,threshold:85,action:"Uses Taunt"},{type:s.Time,threshold:75,action:"Uses Work Up"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Stats & Status Reset"},{type:s.Time,threshold:20,action:"Uses Nasty Plot"}]}},{name:"Jolteon",region:m.Paldea,info:{moves:["Tera Blast","Thunderbolt","Shadow Ball","Thunder Wave","Electric Terrain","Calm Mind"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:s.HP,threshold:90,action:"Uses Electric Terrain"},{type:s.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Calm Mind"},{type:s.HP,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Kilowattrel",region:m.Paldea,info:{moves:["Hurricane","Thunder","Uproar","Scary Face","Charge","Rain Dance"],specialMoves:["Charge","Rain Dance"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:s.HP,threshold:90,action:"Uses Charge"},{type:s.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Kingambit",region:m.Paldea,info:{moves:["Iron Head","Night Slash","Kowtow Cleave","Thunder Wave","Swords Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.Time,threshold:85,action:"Stats & Status Reset"},{type:s.Time,threshold:65,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Klawf",region:m.Paldea,info:{moves:["Stone Edge","Rock Smash","X-Scissor","Sandstorm","Knock Off","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:s.Time,threshold:95,action:"Stats & Status Reset"},{type:s.HP,threshold:80,action:"Uses Knock Off"},{type:s.HP,threshold:49,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Leafeon",region:m.Paldea,info:{moves:["Tera Blast","Leaf Blade","Double Kick","Charm","Sunny Day","Swords Dance"],specialMoves:["Double Kick"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.HP,threshold:90,action:"Uses Sunny Day"},{type:s.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Swords Dance"},{type:s.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Lycanroc",imageAlt:"-d",region:m.Paldea,info:{moves:["Accelerock","Rock Slide","Crunch","Taunt","Sandstorm"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.Time,threshold:80,action:"Uses Sandstorm"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Mabosstiff",region:m.Paldea,info:{moves:["Crunch","Reversal","Outrage","Take Down","Taunt"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.Time,threshold:80,action:"Uses Taunt"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Magnezone",region:m.Paldea,info:{moves:["Thunder","Flash Cannon","Tri Attack","Thunder Wave","Rain Dance","Iron Defense","Electric Terrain"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:s.HP,threshold:80,action:"Uses Rain Dance"},{type:s.Time,threshold:75,action:"Uses Iron Defense"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Thunder Wave"},{type:s.Time,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Maushold",imageAlt:"-f",region:m.Paldea,info:{moves:["Play Rough","Take Down","Low Kick","Charm","Tidy Up"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:s.Time,threshold:95,action:"Stats & Status Reset"},{type:s.Time,threshold:75,action:"Uses Charm"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Tidy Up"}]}},{name:"Mimikyu",region:m.Paldea,info:{moves:["Play Rough","Shadow Claw","Shadow Sneak","Wood Hammer","Misty Terrain","Swords Dance"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:s.Time,threshold:90,action:"Uses Misty Terrain"},{type:s.Time,threshold:75,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Orthworm",region:m.Paldea,info:{moves:["Iron Head","Earthquake","Smack Down","Sandstorm","Coil"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:s.Time,threshold:95,action:"Uses Coil"},{type:s.HP,threshold:80,action:"Uses Sandstorm"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Sandstorm"}]}},{name:"Pawmot",region:m.Paldea,info:{moves:["Wild Charge","Close Combat","Double Shock","Nuzzle","Electric Terrain"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.Time,threshold:95,action:"Stats & Status Reset"},{type:s.HP,threshold:80,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Electric Terrain"}]}},{name:"Pelipper",region:m.Paldea,info:{moves:["Hurricane","Hydro Pump","Mist","Supersonic","Rain Dance","Agility"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:s.HP,threshold:90,action:"Uses Rain Dance"},{type:s.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Agility"},{type:s.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Pincurchin",region:m.Paldea,info:{moves:["Zing Zap","Thunder","Surf","Poison Jab","Thunder Wave","Electric Terrain"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.Time,threshold:90,action:"Uses Thunder Wave"},{type:s.Time,threshold:65,action:"Uses Electric Terrain"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Revavroom",region:m.Paldea,info:{moves:["Gunk Shot","Overheat","Iron Head","Taunt","Scary Face","Shift Gear"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.Time,threshold:85,action:"Uses Scary Face"},{type:s.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Shift Gear"},{type:s.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Salamence",region:m.Paldea,info:{moves:["Outrage","Dual Wingbeat","Flamethrower","Tera Blast","Dragon Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.HP,threshold:90,action:"Stats & Status Reset"},{type:s.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Dragon Dance"},{type:s.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Scizor",region:m.Paldea,info:{moves:["X-Scissor","Bullet Punch","Close Combat","Iron Head","Iron Defense","Focus Energy"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.Time,threshold:85,action:"Uses Iron Defense"},{type:s.HP,threshold:75,action:"Uses Focus Energy"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Slowking",region:m.Paldea,info:{moves:["Surf","Psyshock","Trick Room","Flamethrower","Light Screen","Rain Dance","Calm Mind"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:s.Time,threshold:70,action:"Uses Light Screen"},{type:s.HP,threshold:90,action:"Uses Rain Dance"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Calm Mind"},{type:s.HP,threshold:20,action:"Uses Trick Room"}]}},{name:"Staraptor",region:m.Paldea,info:{moves:["Close Combat","Brave Bird","Double-Edge","Feather Dance"],specialMoves:["Double-Edge","Feather Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.Time,threshold:85,action:"Stats & Status Reset"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Brave Bird"}]}},{name:"Sylveon",region:m.Paldea,info:{moves:["Tera Blast","Hyper Voice","Moonblast","Yawn","Misty Terrain","Calm Mind"],specialMoves:["Yawn"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:s.HP,threshold:90,action:"Uses Misty Terrain"},{type:s.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Calm Mind"},{type:s.HP,threshold:20,action:"Uses Misty Terrain"}]}},{name:"Talonflame",region:m.Paldea,info:{moves:["Brave Bird","Flare Blitz","Flamethrower","Tera Blast","Sunny Day","Swords Dance"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:s.HP,threshold:90,action:"Uses Sunny Day"},{type:s.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Tauros",formName:"taurospaldeacombat",imageAlt:"-p",region:m.Paldea,info:{moves:["Close Combat","Thrash","Zen Headbutt","Raging Bull","Bulk Up","Screech"],specialMoves:["Screech"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.Time,threshold:95,action:"Stats & Status Reset"},{type:s.HP,threshold:90,action:"Uses Bulk Up"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Screech"}]}},{name:"Tauros (Fire)",formName:"taurospaldeablaze",imageAlt:"-b",region:m.Paldea,info:{moves:["Flare Blitz","Close Combat","Flamethrower","Headbutt","Sunny Day","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.HP,threshold:90,action:"Uses Sunny Day"},{type:s.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Bulk Up"},{type:s.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Tauros (Water)",formName:"taurospaldeaaqua",imageAlt:"-a",region:m.Paldea,info:{moves:["Wave Crash","Close Combat","Surf","Headbutt","Rain Dance","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.HP,threshold:90,action:"Uses Rain Dance"},{type:s.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Bulk Up"},{type:s.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Tinkaton",region:m.Paldea,info:{moves:["Gigaton Hammer","Play Rough","Knock Off","Thunder Wave","Misty Terrain","Sweet Kiss"],specialMoves:["Misty Terrain"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:s.Time,threshold:90,action:"Uses Misty Terrain"},{type:s.HP,threshold:75,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Sweet Kiss"},{type:s.HP,threshold:15,action:"Uses Sweet Kiss"}]}},{name:"Toedscruel",region:m.Paldea,info:{moves:["Energy Ball","Earth Power","Spore","Hex","Grassy Terrain"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:s.HP,threshold:90,action:"Uses Grassy Terrain"},{type:s.Time,threshold:75,action:"Uses Spore"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Spore"}]}},{name:"Torkoal",region:m.Paldea,info:{moves:["Lava Plume","Yawn","Clear Smog","Body Slam","Sunny Day","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:s.HP,threshold:90,action:"Uses Sunny Day"},{type:s.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Yawn"},{type:s.HP,threshold:20,action:"Uses Iron Defense"}]}},{name:"Toxapex",region:m.Paldea,info:{moves:["Water Pulse","Liquidation","Poison Jab","Pin Missile","Chilling Water","Toxic"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:s.HP,threshold:95,action:"Uses Chilling Water"},{type:s.Time,threshold:75,action:"Uses Toxic"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Chilling Water"}]}},{name:"Tyranitar",region:m.Paldea,info:{moves:["Stone Edge","Crunch","Screech","Rock Blast","Iron Defense"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:s.HP,threshold:90,action:"Stats & Status Reset"},{type:s.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Crunch"},{type:s.HP,threshold:20,action:"Uses Iron Defense"}]}},{name:"Umbreon",region:m.Paldea,info:{moves:["Tera Blast","Dark Pulse","Foul Play","Tickle","Calm Mind","Curse"],specialMoves:["Curse","Tickle"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:s.HP,threshold:90,action:"Uses Calm Mind"},{type:s.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Curse"},{type:s.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Vaporeon",region:m.Paldea,info:{moves:["Tera Blast","Surf","Hyper Voice","Yawn","Rain Dance","Calm Mind"],specialMoves:["Yawn"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:s.HP,threshold:90,action:"Uses Rain Dance"},{type:s.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Calm Mind"},{type:s.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Volcarona",region:m.Paldea,info:{moves:["Bug Buzz","Flamethrower","Hurricane","Tailwind","Amnesia","Sunny Day","Light Screen","Quiver Dance"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:s.HP,threshold:85,action:"Uses Amnesia"},{type:s.HP,threshold:75,action:"Uses Sunny Day"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Light Screen"},{type:s.Time,threshold:20,action:"Uses Quiver Dance"}]}},{name:"Ambipom",region:m.Kitakami,info:{moves:["Double Hit","Ice Punch","Fire Punch","Thunder Punch","Screech"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:s.HP,threshold:90,action:"Player Stats & Status Reset"},{type:s.HP,threshold:89,action:"Uses Screech"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:20,action:"Uses Double Hit"}]}},{name:"Basculegion (Male)",formName:"basculegion",region:m.Kitakami,info:{moves:["Wave Crash","Aqua Jet","Crunch","Scary Face","Icy Wind","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:95,action:"Uses Icy Wind"},{type:s.HP,threshold:80,action:"Stats & Status Reset"},{type:s.HP,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Uses Rain Dance"},{type:s.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Basculegion (Female)",formName:"basculegion",imageAlt:"-f",region:m.Kitakami,info:{moves:["Surf","Aqua Jet","Shadow Ball","Scary Face","Icy Wind","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:95,action:"Uses Icy Wind"},{type:s.HP,threshold:80,action:"Stats & Status Reset"},{type:s.HP,threshold:60,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Uses Rain Dance"},{type:s.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Chandelure",region:m.Kitakami,info:{moves:["Flamethrower","Shadow Ball","Will-O-Wisp","Poltergeist","Heat Wave","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.HP,threshold:90,action:"Player Stats & Status Reset"},{type:s.HP,threshold:75,action:"Uses Heat Wave"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:40,action:"Uses Sunny Day"},{type:s.HP,threshold:35,action:"Stats & Status Reset"}]}},{name:"Clefable",region:m.Kitakami,info:{moves:["Moonblast","Psychic","Meteor Mash","Encore","Dazzling Gleam","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:95,action:"Uses Encore"},{type:s.HP,threshold:40,action:"Uses Dazzling Gleam"},{type:s.HP,threshold:41,action:"Uses Dazzling Gleam"},{type:s.HP,threshold:60,action:"Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Conkeldurr",region:m.Kitakami,info:{moves:["Rock Slide","Close Combat","Mach Punch","Slam","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.HP,threshold:90,action:"Stats & Status Reset"},{type:s.HP,threshold:89,action:"Uses Bulk Up"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:49,action:"Uses Bulk Up"},{type:s.Time,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Crawdaunt",region:m.Kitakami,info:{moves:["Aqua Jet","Crabhammer","Crunch","Giga Impact","Leer","Swords Dance"],specialMoves:["Aqua Jet"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.HP,threshold:90,action:"Stats & Status Reset"},{type:s.HP,threshold:65,action:"Player Stats & Status Reset"},{type:s.HP,threshold:60,action:"Uses Leer"},{type:s.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Dusknoir",region:m.Kitakami,info:{moves:["Poltergeist","Dark Pulse","Will-O-Wisp","Ice Punch","Gravity","Spite"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.HP,threshold:95,action:"Uses Gravity"},{type:s.HP,threshold:70,action:"Uses Spite"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:30,action:"Uses Spite"},{type:s.HP,threshold:10,action:"Stats & Status Reset"}]}},{name:"Gliscor",region:m.Kitakami,info:{moves:["Acrobatics","Knock Off","Quick Attack","Earthquake","Sandstorm","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Sandstorm"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Swords Dance"},{type:s.Time,threshold:15,action:"Uses Sandstorm"},{type:s.Time,threshold:5,action:"Uses Earthquake"}]}},{name:"Golem",region:m.Kitakami,info:{moves:["Earthquake","Rock Slide","Flail","Smack Down","Stone Edge","Iron Defense"],specialMoves:["Flail"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.HP,threshold:95,action:"Stats & Status Reset"},{type:s.HP,threshold:85,action:"Uses Stone Edge"},{type:s.Time,threshold:45,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:30,action:"Stats & Status Reset"},{type:s.HP,threshold:29,action:"Uses Iron Defense"}]}},{name:"Kommo-o",formName:"kommoo",region:m.Kitakami,info:{moves:["Focus Blast","Dragon Claw","Iron Head","Scary Face","Clangorous Soul","Reversal"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.HP,threshold:60,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Uses Clangorous Soul"},{type:s.HP,threshold:30,action:"Uses Clangorous Soul"},{type:s.Time,threshold:10,action:"Uses Reversal"}]}},{name:"Leavanny",region:m.Kitakami,info:{moves:["Leaf Blade","X-Scissor","Grassy Glide","Sticky Web","Grassy Terrain","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.HP,threshold:95,action:"Stats & Status Reset"},{type:s.HP,threshold:90,action:"Uses Grassy Terrain"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Ludicolo",region:m.Kitakami,info:{moves:["Energy Ball","Hydro Pump","Fake Out","Chilling Water","Rain Dance","Teeter Dance"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Rain Dance"},{type:s.HP,threshold:90,action:"Stats & Status Reset"},{type:s.HP,threshold:70,action:"Uses Chilling Water"},{type:s.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.Time,threshold:20,action:"Uses Teeter Dance"}]}},{name:"Mamoswine",region:m.Kitakami,info:{moves:["Icicle Crash","Ice Shard","Bulldoze","Freeze-Dry","Snowscape","Amnesia","Earthquake"],specialMoves:["Freeze-Dry"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Snowscape"},{type:s.HP,threshold:75,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Uses Amnesia"},{type:s.HP,threshold:10,action:"Uses Earthquake"},{type:s.Time,threshold:45,action:"Reduce Tera Orb Charge"}]}},{name:"Mandibuzz",region:m.Kitakami,info:{moves:["Dual Wingbeat","Dark Pulse","Toxic","Bone Rush","Snarl"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.HP,threshold:95,action:"Player Stats & Status Reset"},{type:s.HP,threshold:90,action:"Uses Snarl"},{type:s.HP,threshold:75,action:"Uses Snarl"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:40,action:"Uses Snarl"}]}},{name:"Mienshao",region:m.Kitakami,info:{moves:["Aerial Ace","Brick Break","Aura Sphere","Reversal","Calm Mind"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:s.HP,threshold:90,action:"Uses Calm Mind"},{type:s.HP,threshold:65,action:"Player Stats & Status Reset"},{type:s.HP,threshold:40,action:"Uses Calm Mind"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.Time,threshold:20,action:"Uses Aura Sphere"}]}},{name:"Milotic",region:m.Kitakami,info:{moves:["Dragon Pulse","Water Pulse","Safeguard","Aqua Tail","Coil","Hypnosis","Rain Dance"],specialMoves:["Hypnosis"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:99,action:"Player Stats & Status Reset"},{type:s.HP,threshold:75,action:"Uses Coil"},{type:s.HP,threshold:70,action:"Uses Hypnosis"},{type:s.Time,threshold:60,action:"Uses Rain Dance"},{type:s.Time,threshold:10,action:"Uses Hypnosis"}]}},{name:"Morpeko",region:m.Kitakami,info:{moves:["Aura Wheel","Lash Out","Thunder Wave","Torment","Taunt","Electric Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Taunt"},{type:s.HP,threshold:75,action:"Uses Taunt"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:30,action:"Uses Electric Terrain"},{type:s.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Ninetales",region:m.Kitakami,info:{moves:["Flamethrower","Extrasensory","Will-O-Wisp","Burning Jealousy","Heat Wave","Sunny Day"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:90,action:"Player Stats & Status Reset"},{type:s.HP,threshold:75,action:"Uses Heat Wave"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.HP,threshold:25,action:"Uses Sunny Day"},{type:s.Time,threshold:10,action:"Uses Heat Wave"}]}},{name:"Politoed",region:m.Kitakami,info:{moves:["Chilling Water","Surf","Ice Beam","Encore","Amnesia"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.HP,threshold:85,action:"Uses Chilling Water"},{type:s.HP,threshold:70,action:"Stats & Status Reset"},{type:s.HP,threshold:50,action:"Player Stats & Status Reset"},{type:s.HP,threshold:30,action:"Stats & Status Reset"},{type:s.HP,threshold:29,action:"Uses Amnesia"}]}},{name:"Poliwrath",region:m.Kitakami,info:{moves:["Brick Break","Liquidation","Focus Blast","Haze","Rain Dance","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:95,action:"Uses Rain Dance"},{type:s.HP,threshold:70,action:"Player Stats & Status Reset"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:45,action:"Uses Bulk Up"},{type:s.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Quagsire",region:m.Kitakami,info:{moves:["Earthquake","Liquidation","Yawn","Toxic","Curse","Rain Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.HP,threshold:90,action:"Player Stats & Status Reset"},{type:s.HP,threshold:75,action:"Stats & Status Reset"},{type:s.HP,threshold:70,action:"Uses Curse"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:30,action:"Uses Rain Dance"}]}},{name:"Shiftry",region:m.Kitakami,info:{moves:["Leaf Blade","Sucker Punch","Fake Out","Extrasensory","Sunny Day","Trailblaze","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Sunny Day"},{type:s.HP,threshold:90,action:"Player Stats & Status Reset"},{type:s.HP,threshold:70,action:"Uses Trailblaze"},{type:s.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Sinistcha",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.HP,threshold:85,action:"Stats & Status Reset"},{type:s.HP,threshold:75,action:"Uses Grassy Terrain"},{type:s.HP,threshold:40,action:"Uses Grassy Terrain"},{type:s.HP,threshold:15,action:"Uses Matcha Gotcha"},{type:s.Time,threshold:10,action:"Uses Matcha Gotcha"}]}},{name:"Sinistcha (Masterpiece)",formName:"sinistchamasterpiece",imageAlt:"-m",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.HP,threshold:85,action:"Stats & Status Reset"},{type:s.HP,threshold:75,action:"Uses Grassy Terrain"},{type:s.HP,threshold:40,action:"Uses Grassy Terrain"},{type:s.HP,threshold:15,action:"Uses Matcha Gotcha"},{type:s.Time,threshold:10,action:"Uses Matcha Gotcha"}]}},{name:"Snorlax",region:m.Kitakami,info:{moves:["Facade","Crunch","Yawn","Heavy Slam"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.HP,threshold:95,action:"Stats & Status Reset"},{type:s.HP,threshold:70,action:"Stats & Status Reset"},{type:s.HP,threshold:40,action:"Stats & Status Reset"},{type:s.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:20,action:"Stats & Status Reset"}]}},{name:"Trevenant",region:m.Kitakami,info:{moves:["Wood Hammer","Shadow Claw","Forest's Curse","Will-O-Wisp","Grassy Terrain","Disable"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.HP,threshold:100,action:"Uses Grassy Terrain"},{type:s.HP,threshold:75,action:"Uses Disable"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Wood Hammer"}]}},{name:"Yanmega",region:m.Kitakami,info:{moves:["Bug Buzz","Air Slash","Quick Attack","Ancient Power"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.HP,threshold:95,action:"Uses Ancient Power"},{type:s.HP,threshold:85,action:"Uses Ancient Power"},{type:s.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Ancient Power"}]}},{name:"Alcremie",region:m.Terarium,info:{moves:["Dazzling Gleam","Psychic","Encore","Psyshock","Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.HP,threshold:90,action:"Uses Encore"},{type:s.HP,threshold:50,action:"Uses Acid Armor"},{type:s.HP,threshold:25,action:"Uses Acid Armor"},{type:s.Time,threshold:30,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Dugtrio",formName:"dugtrioalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Bulldoze","Iron Head","Ancient Power","Metal Claw","Sandstorm","Earthquake"],specialMoves:["Ancient Power"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:s.HP,threshold:90,action:"Stats & Status Reset"},{type:s.Time,threshold:80,action:"Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Uses Sandstorm"},{type:s.HP,threshold:25,action:"Uses Earthquake"}]}},{name:"Duraludon",region:m.Terarium,info:{moves:["Flash Cannon","Dragon Pulse","Breaking Swipe","Metal Claw","Stealth Rock","Light Screen","Reflect"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Stealth Rock"},{type:s.HP,threshold:80,action:"Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:40,action:"Uses Light Screen"},{type:s.HP,threshold:35,action:"Uses Reflect"}]}},{name:"Electivire",region:m.Terarium,info:{moves:["Discharge","Thunder Punch","Earthquake","Brick Break","Electric Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Electric Terrain"},{type:s.HP,threshold:70,action:"Player Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Uses Electric Terrain"},{type:s.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Excadrill",region:m.Terarium,info:{moves:["Iron Head","Earthquake","Drill Run","Slash","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Sandstorm"},{type:s.HP,threshold:80,action:"Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:40,action:"Uses Sandstorm"},{type:s.Time,threshold:25,action:"Uses Sandstorm"}]}},{name:"Exeggutor",formName:"exeggutoralola",imageAlt:"-a",region:m.Terarium,info:{moves:["Dragon Hammer","Extrasensory","Seed Bomb","Hypnosis","Trick Room"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.HP,threshold:80,action:"Player Stats & Status Reset"},{type:s.HP,threshold:65,action:"Uses Hypnosis"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:40,action:"Uses Trick Room"},{type:s.HP,threshold:33,action:"Player Stats & Status Reset"}]}},{name:"Flygon",region:m.Terarium,info:{moves:["Earthquake","Dragon Claw","Quick Attack","Breaking Swipe","Dragon Dance","Draco Meteor"],specialMoves:["Quick Attack"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:s.HP,threshold:80,action:"Stats & Status Reset"},{type:s.HP,threshold:79,action:"Uses Dragon Dance"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:45,action:"Uses Dragon Dance"},{type:s.HP,threshold:5,action:"Uses Draco Meteor"}]}},{name:"Golem",formName:"golemalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Heavy Slam","Body Slam","Rock Slide","Discharge","Giga Impact"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:s.HP,threshold:90,action:"Stats & Status Reset"},{type:s.Time,threshold:80,action:"Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Uses Rock Slide"},{type:s.HP,threshold:25,action:"Uses Giga Impact"}]}},{name:"Golurk",region:m.Terarium,info:{moves:["Dynamic Punch","Shadow Punch","Heavy Slam","Ice Punch","Curse"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.HP,threshold:90,action:"Player Stats & Status Reset"},{type:s.HP,threshold:95,action:"Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Uses Curse"},{type:s.HP,threshold:35,action:"Uses Curse"}]}},{name:"Kingdra",region:m.Terarium,info:{moves:["Draco Meteor","Dragon Pulse","Water Pulse","Flash Cannon","Focus Energy","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Focus Energy"},{type:s.HP,threshold:65,action:"Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:40,action:"Uses Rain Dance"},{type:s.HP,threshold:5,action:"Uses Draco Meteor"}]}},{name:"Kleavor",region:m.Terarium,info:{moves:["X-Scissor","Close Combat","Air Cutter","Night Slash","Stone Axe","Swords Dance"],specialMoves:["Night Slash"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.HP,threshold:95,action:"Uses Stone Axe"},{type:s.HP,threshold:75,action:"Player Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:35,action:"Uses Swords Dance"},{type:s.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Lapras",region:m.Terarium,info:{moves:["Blizzard","Hydro Pump","Body Slam","Sing","Snowscape","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Snowscape"},{type:s.HP,threshold:50,action:"Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Uses Rain Dance"},{type:s.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Magmortar",region:m.Terarium,info:{moves:["Lava Plume","Psychic","Scorching Sands","Taunt","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Taunt"},{type:s.HP,threshold:95,action:"Uses Sunny Day"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Player Stats & Status Reset"},{type:s.HP,threshold:20,action:"Uses Lava Plume"}]}},{name:"Malamar",region:m.Terarium,info:{moves:["Psycho Cut","Night Slash","Foul Play","Pluck","Taunt","Topsy-Turvy"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Taunt"},{type:s.HP,threshold:80,action:"Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Uses Topsy-Turvy"},{type:s.HP,threshold:25,action:"Uses Topsy-Turvy"}]}},{name:"Metagross",region:m.Terarium,info:{moves:["Zen Headbutt","Iron Head","Heavy Slam","Aerial Ace","Agility","Hone Claws"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Agility"},{type:s.HP,threshold:80,action:"Uses Iron Head"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:40,action:"Uses Hone Claws"},{type:s.HP,threshold:20,action:"Uses Hone Claws"}]}},{name:"Muk",formName:"mukalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Crunch","Hex","Gunk Shot","Flamethrower","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.HP,threshold:90,action:"Stats & Status Reset"},{type:s.Time,threshold:80,action:"Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Uses Toxic"},{type:s.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Ninetales",formName:"ninetalesalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Moonblast","Blizzard","Ice Shard","Dazzling Gleam","Aurora Veil","Calm Mind","Snowscape"],specialMoves:["Moonblast"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Aurora Veil"},{type:s.HP,threshold:80,action:"Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:40,action:"Uses Calm Mind"},{type:s.HP,threshold:24,action:"Uses Snowscape"}]}},{name:"Overqwil",region:m.Terarium,info:{moves:["Barb Barrage","Crunch","Pin Missile","Fell Stinger","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Toxic"},{type:s.HP,threshold:80,action:"Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Uses Toxic"},{type:s.HP,threshold:25,action:"Uses Barb Barrage"}]}},{name:"Porygon-Z",formName:"porygonz",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Thunder Wave","Trick Room"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:95,action:"Stats & Status Reset"},{type:s.HP,threshold:75,action:"Uses Thunder Wave"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Uses Trick Room"},{type:s.HP,threshold:45,action:"Player Stats & Status Reset"}]}},{name:"Porygon2",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Thunder Wave","Trick Room"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:95,action:"Player Stats & Status Reset"},{type:s.HP,threshold:75,action:"Uses Thunder Wave"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Uses Trick Room"},{type:s.HP,threshold:45,action:"Stats & Status Reset"}]}},{name:"Reuniclus",region:m.Terarium,info:{moves:["Psychic","Fire Punch","Swift","Rock Tomb","Reflect","Light Screen","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Reflect"},{type:s.HP,threshold:80,action:"Uses Light Screen"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:40,action:"Player Stats & Status Reset"},{type:s.HP,threshold:35,action:"Uses Calm Mind"}]}},{name:"Rhyperior",region:m.Terarium,info:{moves:["Earthquake","Rock Wrecker","Megahorn","Rock Polish","Sandstorm","Iron Defense"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Sandstorm"},{type:s.HP,threshold:50,action:"Uses Iron Defense"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:25,action:"Uses Rock Wrecker"},{type:s.HP,threshold:5,action:"Uses Earthquake"}]}},{name:"Sandslash",formName:"sandslashalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Ice Spinner","Iron Head","Earthquake","Triple Axel","Snowscape","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Snowscape"},{type:s.HP,threshold:80,action:"Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:80,action:"Uses Swords Dance"},{type:s.HP,threshold:35,action:"Player Stats & Status Reset"}]}},{name:"Skarmory",region:m.Terarium,info:{moves:["Drill Peck","Steel Wing","Night Slash","Slash","Taunt","Iron Defense"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Taunt"},{type:s.HP,threshold:80,action:"Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:45,action:"Uses Iron Defense"},{type:s.HP,threshold:44,action:"Player Stats & Status Reset"}]}},{name:"Slowbro",formName:"slowbrogalar",imageAlt:"-g",region:m.Terarium,info:{moves:["Shell Side Arm","Zen Headbutt","Chilling Water","Rock Blast","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.HP,threshold:90,action:"Stats & Status Reset"},{type:s.Time,threshold:80,action:"Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Uses Toxic"},{type:s.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Slowking",formName:"slowkinggalar",imageAlt:"-g",region:m.Terarium,info:{moves:["Eerie Spell","Power Gem","Yawn","Acid Spray","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.HP,threshold:90,action:"Stats & Status Reset"},{type:s.Time,threshold:80,action:"Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:50,action:"Uses Toxic"},{type:s.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Whimsicott",region:m.Terarium,info:{moves:["Energy Ball","Moonblast","Encore","Hurricane","Taunt"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:s.Time,threshold:100,action:"Uses Taunt"},{type:s.HP,threshold:80,action:"Stats & Status Reset"},{type:s.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:s.HP,threshold:40,action:"Stats & Status Reset"}]}}];var qy=(()=>{class e{constructor(n){this.stateService=n}ngOnInit(){Object.keys(m).map(r=>{let o=document.createElement("option");o.value=r,o.text=m[r],o.text=="Paldea"&&(o.selected=!0,this.stateService.changeRegionList(o.value)),document.getElementById("regionList").add(o)})}valueChanged(){let n=document.getElementById("regionList"),r=n.selectedIndex,o=n.options[r];this.stateService.changeRegionList(o.value)}static{this.\u0275fac=function(r){return new(r||e)(W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-region"]],decls:3,vars:0,consts:[["id","regionList",3,"change"],["value",""]],template:function(r,o){r&1&&(we(0,"select",0),mt("change",function(){return o.valueChanged()}),we(1,"option",1),pe(2,"-- Region --"),$e()())},encapsulation:2})}}return e})();function Do(e){return e.toLowerCase().replace(/\w/,t=>t.toUpperCase())}function pn(e){(e?[e]:["pokemonTypes","pokemonImageNormal","pokemonImageShiny","pokemonAbility","pokemonStatsWrapper","pokemonActions","pokemonMoves","pokemonHerbs","pokemonTypeAdvantages","pokemonTeraWeaknesses","pokemonTeraAdvantages"]).forEach(n=>{let r=document.getElementById(n);r&&(r.innerHTML="")})}function fe(e,t){e.innerHTML+=t}function es(e){return`<div class="typeMatchupText ${e.name}">${Do(e.name)} - ${e.multiplier}x</div>`}function Gd(e,t,n){return String(e).padStart(t,n)}function bo(e,t){if(!!!e)throw new Error(t)}function Qy(e){return typeof e=="object"&&e!==null}function Ky(e,t){if(!!!e)throw new Error(t??"Unexpected invariant triggered.")}var m0=/\r\n|[\n\r]/g;function Eo(e,t){let n=0,r=1;for(let o of e.body.matchAll(m0)){if(typeof o.index=="number"||Ky(!1),o.index>=t)break;n=o.index+o[0].length,r+=1}return{line:r,column:t+1-n}}function qd(e){return bc(e.source,Eo(e.source,e.start))}function bc(e,t){let n=e.locationOffset.column-1,r="".padStart(n)+e.body,o=t.line-1,i=e.locationOffset.line-1,a=t.line+i,c=t.line===1?n:0,l=t.column+c,u=`${e.name}:${a}:${l}
`,d=r.split(/\r\n|[\n\r]/g),f=d[o];if(f.length>120){let p=Math.floor(l/80),h=l%80,S=[];for(let y=0;y<f.length;y+=80)S.push(f.slice(y,y+80));return u+Yy([[`${a} |`,S[0]],...S.slice(1,p+1).map(y=>["|",y]),["|","^".padStart(h)],["|",S[p+1]]])}return u+Yy([[`${a-1} |`,d[o-1]],[`${a} |`,f],["|","^".padStart(l)],[`${a+1} |`,d[o+1]]])}function Yy(e){let t=e.filter(([r,o])=>o!==void 0),n=Math.max(...t.map(([r])=>r.length));return t.map(([r,o])=>r.padStart(n)+(o?" "+o:"")).join(`
`)}function g0(e){let t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}var Ec=class e extends Error{constructor(t,...n){var r,o,i;let{nodes:a,source:c,positions:l,path:u,originalError:d,extensions:f}=g0(n);super(t),this.name="GraphQLError",this.path=u??void 0,this.originalError=d??void 0,this.nodes=Zy(Array.isArray(a)?a:a?[a]:void 0);let p=Zy((r=this.nodes)===null||r===void 0?void 0:r.map(S=>S.loc).filter(S=>S!=null));this.source=c??(p==null||(o=p[0])===null||o===void 0?void 0:o.source),this.positions=l??p?.map(S=>S.start),this.locations=l&&c?l.map(S=>Eo(c,S)):p?.map(S=>Eo(S.source,S.start));let h=Qy(d?.extensions)?d?.extensions:void 0;this.extensions=(i=f??h)!==null&&i!==void 0?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),d!=null&&d.stack?Object.defineProperty(this,"stack",{value:d.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,e):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(let n of this.nodes)n.loc&&(t+=`

`+qd(n.loc));else if(this.source&&this.locations)for(let n of this.locations)t+=`

`+bc(this.source,n);return t}toJSON(){let t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}};function Zy(e){return e===void 0||e.length===0?void 0:e}function be(e,t,n){return new Ec(`Syntax Error: ${n}`,{source:e,positions:[t]})}var To=class{constructor(t,n,r){this.start=t.start,this.end=n.end,this.startToken=t,this.endToken=n,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}},Sr=class{constructor(t,n,r,o,i,a){this.kind=t,this.start=n,this.end=r,this.line=o,this.column=i,this.value=a,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}},Qd={Name:[],Document:["definitions"],OperationDefinition:["description","name","variableDefinitions","directives","selectionSet"],VariableDefinition:["description","variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["description","name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],TypeCoordinate:["name"],MemberCoordinate:["name","memberName"],ArgumentCoordinate:["name","fieldName","argumentName"],DirectiveCoordinate:["name"],DirectiveArgumentCoordinate:["name","argumentName"]},y0=new Set(Object.keys(Qd));function Kd(e){let t=e?.kind;return typeof t=="string"&&y0.has(t)}var ze=(function(e){return e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription",e})(ze||{});var Tc=(function(e){return e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION",e})(Tc||{});var w=(function(e){return e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",e.TYPE_COORDINATE="TypeCoordinate",e.MEMBER_COORDINATE="MemberCoordinate",e.ARGUMENT_COORDINATE="ArgumentCoordinate",e.DIRECTIVE_COORDINATE="DirectiveCoordinate",e.DIRECTIVE_ARGUMENT_COORDINATE="DirectiveArgumentCoordinate",e})(w||{});function wc(e){return e===9||e===32}function wo(e){return e>=48&&e<=57}function Jy(e){return e>=97&&e<=122||e>=65&&e<=90}function Yd(e){return Jy(e)||e===95}function Xy(e){return Jy(e)||wo(e)||e===95}function ev(e){var t;let n=Number.MAX_SAFE_INTEGER,r=null,o=-1;for(let a=0;a<e.length;++a){var i;let c=e[a],l=v0(c);l!==c.length&&(r=(i=r)!==null&&i!==void 0?i:a,o=a,a!==0&&l<n&&(n=l))}return e.map((a,c)=>c===0?a:a.slice(n)).slice((t=r)!==null&&t!==void 0?t:0,o+1)}function v0(e){let t=0;for(;t<e.length&&wc(e.charCodeAt(t));)++t;return t}function tv(e,t){let n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),o=r.length===1,i=r.length>1&&r.slice(1).every(h=>h.length===0||wc(h.charCodeAt(0))),a=n.endsWith('\\"""'),c=e.endsWith('"')&&!a,l=e.endsWith("\\"),u=c||l,d=!(t!=null&&t.minimize)&&(!o||e.length>70||u||i||a),f="",p=o&&wc(e.charCodeAt(0));return(d&&!p||i)&&(f+=`
`),f+=n,(d||u)&&(f+=`
`),'"""'+f+'"""'}var b=(function(e){return e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.DOT=".",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment",e})(b||{});var ns=class{constructor(t){let n=new Sr(b.SOF,0,0,0,0);this.source=t,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==b.EOF)do if(t.next)t=t.next;else{let n=S0(this,t.end);t.next=n,n.prev=t,t=n}while(t.kind===b.COMMENT);return t}};function rv(e){return e===b.BANG||e===b.DOLLAR||e===b.AMP||e===b.PAREN_L||e===b.PAREN_R||e===b.DOT||e===b.SPREAD||e===b.COLON||e===b.EQUALS||e===b.AT||e===b.BRACKET_L||e===b.BRACKET_R||e===b.BRACE_L||e===b.PIPE||e===b.BRACE_R}function Co(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function Cc(e,t){return ov(e.charCodeAt(t))&&iv(e.charCodeAt(t+1))}function ov(e){return e>=55296&&e<=56319}function iv(e){return e>=56320&&e<=57343}function Dr(e,t){let n=e.source.body.codePointAt(t);if(n===void 0)return b.EOF;if(n>=32&&n<=126){let r=String.fromCodePoint(n);return r==='"'?`'"'`:`"${r}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function Ce(e,t,n,r,o){let i=e.line,a=1+n-e.lineStart;return new Sr(t,n,r,i,a,o)}function S0(e,t){let n=e.source.body,r=n.length,o=t;for(;o<r;){let i=n.charCodeAt(o);switch(i){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++e.line,e.lineStart=o;continue;case 13:n.charCodeAt(o+1)===10?o+=2:++o,++e.line,e.lineStart=o;continue;case 35:return D0(e,o);case 33:return Ce(e,b.BANG,o,o+1);case 36:return Ce(e,b.DOLLAR,o,o+1);case 38:return Ce(e,b.AMP,o,o+1);case 40:return Ce(e,b.PAREN_L,o,o+1);case 41:return Ce(e,b.PAREN_R,o,o+1);case 46:if(n.charCodeAt(o+1)===46&&n.charCodeAt(o+2)===46)return Ce(e,b.SPREAD,o,o+3);break;case 58:return Ce(e,b.COLON,o,o+1);case 61:return Ce(e,b.EQUALS,o,o+1);case 64:return Ce(e,b.AT,o,o+1);case 91:return Ce(e,b.BRACKET_L,o,o+1);case 93:return Ce(e,b.BRACKET_R,o,o+1);case 123:return Ce(e,b.BRACE_L,o,o+1);case 124:return Ce(e,b.PIPE,o,o+1);case 125:return Ce(e,b.BRACE_R,o,o+1);case 34:return n.charCodeAt(o+1)===34&&n.charCodeAt(o+2)===34?I0(e,o):E0(e,o)}if(wo(i)||i===45)return b0(e,o,i);if(Yd(i))return R0(e,o);throw be(e.source,o,i===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Co(i)||Cc(n,o)?`Unexpected character: ${Dr(e,o)}.`:`Invalid character: ${Dr(e,o)}.`)}return Ce(e,b.EOF,r,r)}function D0(e,t){let n=e.source.body,r=n.length,o=t+1;for(;o<r;){let i=n.charCodeAt(o);if(i===10||i===13)break;if(Co(i))++o;else if(Cc(n,o))o+=2;else break}return Ce(e,b.COMMENT,t,o,n.slice(t+1,o))}function b0(e,t,n){let r=e.source.body,o=t,i=n,a=!1;if(i===45&&(i=r.charCodeAt(++o)),i===48){if(i=r.charCodeAt(++o),wo(i))throw be(e.source,o,`Invalid number, unexpected digit after 0: ${Dr(e,o)}.`)}else o=Zd(e,o,i),i=r.charCodeAt(o);if(i===46&&(a=!0,i=r.charCodeAt(++o),o=Zd(e,o,i),i=r.charCodeAt(o)),(i===69||i===101)&&(a=!0,i=r.charCodeAt(++o),(i===43||i===45)&&(i=r.charCodeAt(++o)),o=Zd(e,o,i),i=r.charCodeAt(o)),i===46||Yd(i))throw be(e.source,o,`Invalid number, expected digit but got: ${Dr(e,o)}.`);return Ce(e,a?b.FLOAT:b.INT,t,o,r.slice(t,o))}function Zd(e,t,n){if(!wo(n))throw be(e.source,t,`Invalid number, expected digit but got: ${Dr(e,t)}.`);let r=e.source.body,o=t+1;for(;wo(r.charCodeAt(o));)++o;return o}function E0(e,t){let n=e.source.body,r=n.length,o=t+1,i=o,a="";for(;o<r;){let c=n.charCodeAt(o);if(c===34)return a+=n.slice(i,o),Ce(e,b.STRING,t,o+1,a);if(c===92){a+=n.slice(i,o);let l=n.charCodeAt(o+1)===117?n.charCodeAt(o+2)===123?T0(e,o):w0(e,o):C0(e,o);a+=l.value,o+=l.size,i=o;continue}if(c===10||c===13)break;if(Co(c))++o;else if(Cc(n,o))o+=2;else throw be(e.source,o,`Invalid character within String: ${Dr(e,o)}.`)}throw be(e.source,o,"Unterminated string.")}function T0(e,t){let n=e.source.body,r=0,o=3;for(;o<12;){let i=n.charCodeAt(t+o++);if(i===125){if(o<5||!Co(r))break;return{value:String.fromCodePoint(r),size:o}}if(r=r<<4|ts(i),r<0)break}throw be(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+o)}".`)}function w0(e,t){let n=e.source.body,r=nv(n,t+2);if(Co(r))return{value:String.fromCodePoint(r),size:6};if(ov(r)&&n.charCodeAt(t+6)===92&&n.charCodeAt(t+7)===117){let o=nv(n,t+8);if(iv(o))return{value:String.fromCodePoint(r,o),size:12}}throw be(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function nv(e,t){return ts(e.charCodeAt(t))<<12|ts(e.charCodeAt(t+1))<<8|ts(e.charCodeAt(t+2))<<4|ts(e.charCodeAt(t+3))}function ts(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function C0(e,t){let n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw be(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function I0(e,t){let n=e.source.body,r=n.length,o=e.lineStart,i=t+3,a=i,c="",l=[];for(;i<r;){let u=n.charCodeAt(i);if(u===34&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34){c+=n.slice(a,i),l.push(c);let d=Ce(e,b.BLOCK_STRING,t,i+3,ev(l).join(`
`));return e.line+=l.length-1,e.lineStart=o,d}if(u===92&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34&&n.charCodeAt(i+3)===34){c+=n.slice(a,i),a=i+1,i+=4;continue}if(u===10||u===13){c+=n.slice(a,i),l.push(c),u===13&&n.charCodeAt(i+1)===10?i+=2:++i,c="",a=i,o=i;continue}if(Co(u))++i;else if(Cc(n,i))i+=2;else throw be(e.source,i,`Invalid character within String: ${Dr(e,i)}.`)}throw be(e.source,i,"Unterminated string.")}function R0(e,t){let n=e.source.body,r=n.length,o=t+1;for(;o<r;){let i=n.charCodeAt(o);if(Xy(i))++o;else break}return Ce(e,b.NAME,t,o,n.slice(t,o))}function Io(e){return Ic(e,[])}function Ic(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return P0(e,t);default:return String(e)}}function P0(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";let n=[...t,e];if(M0(e)){let r=e.toJSON();if(r!==e)return typeof r=="string"?r:Ic(r,n)}else if(Array.isArray(e))return k0(e,n);return _0(e,n)}function M0(e){return typeof e.toJSON=="function"}function _0(e,t){let n=Object.entries(e);return n.length===0?"{}":t.length>2?"["+N0(e)+"]":"{ "+n.map(([o,i])=>o+": "+Ic(i,t)).join(", ")+" }"}function k0(e,t){if(e.length===0)return"[]";if(t.length>2)return"[Array]";let n=Math.min(10,e.length),r=e.length-n,o=[];for(let i=0;i<n;++i)o.push(Ic(e[i],t));return r===1?o.push("... 1 more item"):r>1&&o.push(`... ${r} more items`),"["+o.join(", ")+"]"}function N0(e){let t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){let n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}var x0=globalThis.process&&!0,sv=x0?function(t,n){return t instanceof n}:function(t,n){if(t instanceof n)return!0;if(typeof t=="object"&&t!==null){var r;let o=n.prototype[Symbol.toStringTag],i=Symbol.toStringTag in t?t[Symbol.toStringTag]:(r=t.constructor)===null||r===void 0?void 0:r.name;if(o===i){let a=Io(t);throw new Error(`Cannot use ${o} "${a}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};var Ro=class{constructor(t,n="GraphQL request",r={line:1,column:1}){typeof t=="string"||bo(!1,`Body must be a string. Received: ${Io(t)}.`),this.body=t,this.name=n,this.locationOffset=r,this.locationOffset.line>0||bo(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||bo(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}};function av(e){return sv(e,Ro)}function Pc(e,t){let n=new Jd(e,t),r=n.parseDocument();return Object.defineProperty(r,"tokenCount",{enumerable:!1,value:n.tokenCount}),r}var Jd=class{constructor(t,n={}){let i=n,{lexer:r}=i,o=ve(i,["lexer"]);if(r)this._lexer=r;else{let a=av(t)?t:new Ro(t);this._lexer=new ns(a)}this._options=o,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){let t=this.expectToken(b.NAME);return this.node(t,{kind:w.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:w.DOCUMENT,definitions:this.many(b.SOF,this.parseDefinition,b.EOF)})}parseDefinition(){if(this.peek(b.BRACE_L))return this.parseOperationDefinition();let t=this.peekDescription(),n=t?this._lexer.lookahead():this._lexer.token;if(t&&n.kind===b.BRACE_L)throw be(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are not supported on shorthand queries.");if(n.kind===b.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition()}if(t)throw be(this._lexer.source,this._lexer.token.start,"Unexpected description, only GraphQL definitions support descriptions.");if(n.value==="extend")return this.parseTypeSystemExtension()}throw this.unexpected(n)}parseOperationDefinition(){let t=this._lexer.token;if(this.peek(b.BRACE_L))return this.node(t,{kind:w.OPERATION_DEFINITION,operation:ze.QUERY,description:void 0,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});let n=this.parseDescription(),r=this.parseOperationType(),o;return this.peek(b.NAME)&&(o=this.parseName()),this.node(t,{kind:w.OPERATION_DEFINITION,operation:r,description:n,name:o,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){let t=this.expectToken(b.NAME);switch(t.value){case"query":return ze.QUERY;case"mutation":return ze.MUTATION;case"subscription":return ze.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(b.PAREN_L,this.parseVariableDefinition,b.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:w.VARIABLE_DEFINITION,description:this.parseDescription(),variable:this.parseVariable(),type:(this.expectToken(b.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(b.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){let t=this._lexer.token;return this.expectToken(b.DOLLAR),this.node(t,{kind:w.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:w.SELECTION_SET,selections:this.many(b.BRACE_L,this.parseSelection,b.BRACE_R)})}parseSelection(){return this.peek(b.SPREAD)?this.parseFragment():this.parseField()}parseField(){let t=this._lexer.token,n=this.parseName(),r,o;return this.expectOptionalToken(b.COLON)?(r=n,o=this.parseName()):o=n,this.node(t,{kind:w.FIELD,alias:r,name:o,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(b.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){let n=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(b.PAREN_L,n,b.PAREN_R)}parseArgument(t=!1){let n=this._lexer.token,r=this.parseName();return this.expectToken(b.COLON),this.node(n,{kind:w.ARGUMENT,name:r,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){let t=this._lexer.token;this.expectToken(b.SPREAD);let n=this.expectOptionalKeyword("on");return!n&&this.peek(b.NAME)?this.node(t,{kind:w.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:w.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){let t=this._lexer.token,n=this.parseDescription();return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:w.FRAGMENT_DEFINITION,description:n,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:w.FRAGMENT_DEFINITION,description:n,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){let n=this._lexer.token;switch(n.kind){case b.BRACKET_L:return this.parseList(t);case b.BRACE_L:return this.parseObject(t);case b.INT:return this.advanceLexer(),this.node(n,{kind:w.INT,value:n.value});case b.FLOAT:return this.advanceLexer(),this.node(n,{kind:w.FLOAT,value:n.value});case b.STRING:case b.BLOCK_STRING:return this.parseStringLiteral();case b.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:w.BOOLEAN,value:!0});case"false":return this.node(n,{kind:w.BOOLEAN,value:!1});case"null":return this.node(n,{kind:w.NULL});default:return this.node(n,{kind:w.ENUM,value:n.value})}case b.DOLLAR:if(t)if(this.expectToken(b.DOLLAR),this._lexer.token.kind===b.NAME){let r=this._lexer.token.value;throw be(this._lexer.source,n.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){let t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:w.STRING,value:t.value,block:t.kind===b.BLOCK_STRING})}parseList(t){let n=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:w.LIST,values:this.any(b.BRACKET_L,n,b.BRACKET_R)})}parseObject(t){let n=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:w.OBJECT,fields:this.any(b.BRACE_L,n,b.BRACE_R)})}parseObjectField(t){let n=this._lexer.token,r=this.parseName();return this.expectToken(b.COLON),this.node(n,{kind:w.OBJECT_FIELD,name:r,value:this.parseValueLiteral(t)})}parseDirectives(t){let n=[];for(;this.peek(b.AT);)n.push(this.parseDirective(t));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){let n=this._lexer.token;return this.expectToken(b.AT),this.node(n,{kind:w.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){let t=this._lexer.token,n;if(this.expectOptionalToken(b.BRACKET_L)){let r=this.parseTypeReference();this.expectToken(b.BRACKET_R),n=this.node(t,{kind:w.LIST_TYPE,type:r})}else n=this.parseNamedType();return this.expectOptionalToken(b.BANG)?this.node(t,{kind:w.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:w.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(b.STRING)||this.peek(b.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");let r=this.parseConstDirectives(),o=this.many(b.BRACE_L,this.parseOperationTypeDefinition,b.BRACE_R);return this.node(t,{kind:w.SCHEMA_DEFINITION,description:n,directives:r,operationTypes:o})}parseOperationTypeDefinition(){let t=this._lexer.token,n=this.parseOperationType();this.expectToken(b.COLON);let r=this.parseNamedType();return this.node(t,{kind:w.OPERATION_TYPE_DEFINITION,operation:n,type:r})}parseScalarTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");let r=this.parseName(),o=this.parseConstDirectives();return this.node(t,{kind:w.SCALAR_TYPE_DEFINITION,description:n,name:r,directives:o})}parseObjectTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");let r=this.parseName(),o=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(t,{kind:w.OBJECT_TYPE_DEFINITION,description:n,name:r,interfaces:o,directives:i,fields:a})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(b.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(b.BRACE_L,this.parseFieldDefinition,b.BRACE_R)}parseFieldDefinition(){let t=this._lexer.token,n=this.parseDescription(),r=this.parseName(),o=this.parseArgumentDefs();this.expectToken(b.COLON);let i=this.parseTypeReference(),a=this.parseConstDirectives();return this.node(t,{kind:w.FIELD_DEFINITION,description:n,name:r,arguments:o,type:i,directives:a})}parseArgumentDefs(){return this.optionalMany(b.PAREN_L,this.parseInputValueDef,b.PAREN_R)}parseInputValueDef(){let t=this._lexer.token,n=this.parseDescription(),r=this.parseName();this.expectToken(b.COLON);let o=this.parseTypeReference(),i;this.expectOptionalToken(b.EQUALS)&&(i=this.parseConstValueLiteral());let a=this.parseConstDirectives();return this.node(t,{kind:w.INPUT_VALUE_DEFINITION,description:n,name:r,type:o,defaultValue:i,directives:a})}parseInterfaceTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");let r=this.parseName(),o=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(t,{kind:w.INTERFACE_TYPE_DEFINITION,description:n,name:r,interfaces:o,directives:i,fields:a})}parseUnionTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseUnionMemberTypes();return this.node(t,{kind:w.UNION_TYPE_DEFINITION,description:n,name:r,directives:o,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(b.EQUALS)?this.delimitedMany(b.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();return this.node(t,{kind:w.ENUM_TYPE_DEFINITION,description:n,name:r,directives:o,values:i})}parseEnumValuesDefinition(){return this.optionalMany(b.BRACE_L,this.parseEnumValueDefinition,b.BRACE_R)}parseEnumValueDefinition(){let t=this._lexer.token,n=this.parseDescription(),r=this.parseEnumValueName(),o=this.parseConstDirectives();return this.node(t,{kind:w.ENUM_VALUE_DEFINITION,description:n,name:r,directives:o})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw be(this._lexer.source,this._lexer.token.start,`${Rc(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");let r=this.parseName(),o=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();return this.node(t,{kind:w.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:r,directives:o,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(b.BRACE_L,this.parseInputValueDef,b.BRACE_R)}parseTypeSystemExtension(){let t=this._lexer.lookahead();if(t.kind===b.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");let n=this.parseConstDirectives(),r=this.optionalMany(b.BRACE_L,this.parseOperationTypeDefinition,b.BRACE_R);if(n.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:w.SCHEMA_EXTENSION,directives:n,operationTypes:r})}parseScalarTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");let n=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(t,{kind:w.SCALAR_TYPE_EXTENSION,name:n,directives:r})}parseObjectTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");let n=this.parseName(),r=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(r.length===0&&o.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:w.OBJECT_TYPE_EXTENSION,name:n,interfaces:r,directives:o,fields:i})}parseInterfaceTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");let n=this.parseName(),r=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(r.length===0&&o.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:w.INTERFACE_TYPE_EXTENSION,name:n,interfaces:r,directives:o,fields:i})}parseUnionTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseUnionMemberTypes();if(r.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:w.UNION_TYPE_EXTENSION,name:n,directives:r,types:o})}parseEnumTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();if(r.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:w.ENUM_TYPE_EXTENSION,name:n,directives:r,values:o})}parseInputObjectTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");let n=this.parseName(),r=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();if(r.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:w.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:r,fields:o})}parseDirectiveDefinition(){let t=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(b.AT);let r=this.parseName(),o=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");let a=this.parseDirectiveLocations();return this.node(t,{kind:w.DIRECTIVE_DEFINITION,description:n,name:r,arguments:o,repeatable:i,locations:a})}parseDirectiveLocations(){return this.delimitedMany(b.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){let t=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(Tc,n.value))return n;throw this.unexpected(t)}parseSchemaCoordinate(){let t=this._lexer.token,n=this.expectOptionalToken(b.AT),r=this.parseName(),o;!n&&this.expectOptionalToken(b.DOT)&&(o=this.parseName());let i;return(n||o)&&this.expectOptionalToken(b.PAREN_L)&&(i=this.parseName(),this.expectToken(b.COLON),this.expectToken(b.PAREN_R)),n?i?this.node(t,{kind:w.DIRECTIVE_ARGUMENT_COORDINATE,name:r,argumentName:i}):this.node(t,{kind:w.DIRECTIVE_COORDINATE,name:r}):o?i?this.node(t,{kind:w.ARGUMENT_COORDINATE,name:r,fieldName:o,argumentName:i}):this.node(t,{kind:w.MEMBER_COORDINATE,name:r,memberName:o}):this.node(t,{kind:w.TYPE_COORDINATE,name:r})}node(t,n){return this._options.noLocation!==!0&&(n.loc=new To(t,this._lexer.lastToken,this._lexer.source)),n}peek(t){return this._lexer.token.kind===t}expectToken(t){let n=this._lexer.token;if(n.kind===t)return this.advanceLexer(),n;throw be(this._lexer.source,n.start,`Expected ${cv(t)}, found ${Rc(n)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){let n=this._lexer.token;if(n.kind===b.NAME&&n.value===t)this.advanceLexer();else throw be(this._lexer.source,n.start,`Expected "${t}", found ${Rc(n)}.`)}expectOptionalKeyword(t){let n=this._lexer.token;return n.kind===b.NAME&&n.value===t?(this.advanceLexer(),!0):!1}unexpected(t){let n=t??this._lexer.token;return be(this._lexer.source,n.start,`Unexpected ${Rc(n)}.`)}any(t,n,r){this.expectToken(t);let o=[];for(;!this.expectOptionalToken(r);)o.push(n.call(this));return o}optionalMany(t,n,r){if(this.expectOptionalToken(t)){let o=[];do o.push(n.call(this));while(!this.expectOptionalToken(r));return o}return[]}many(t,n,r){this.expectToken(t);let o=[];do o.push(n.call(this));while(!this.expectOptionalToken(r));return o}delimitedMany(t,n){this.expectOptionalToken(t);let r=[];do r.push(n.call(this));while(this.expectOptionalToken(t));return r}advanceLexer(){let{maxTokens:t}=this._options,n=this._lexer.advance();if(n.kind!==b.EOF&&(++this._tokenCounter,t!==void 0&&this._tokenCounter>t))throw be(this._lexer.source,n.start,`Document contains more that ${t} tokens. Parsing aborted.`)}};function Rc(e){let t=e.value;return cv(e.kind)+(t!=null?` "${t}"`:"")}function cv(e){return rv(e)?`"${e}"`:e}function lv(e){return`"${e.replace(A0,O0)}"`}var A0=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function O0(e){return F0[e.charCodeAt(0)]}var F0=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"];var mn=Object.freeze({});function Ie(e,t,n=Qd){let r=new Map;for(let D of Object.values(w))r.set(D,Xd(t,D));let o,i=Array.isArray(e),a=[e],c=-1,l=[],u=e,d,f,p=[],h=[];do{c++;let D=c===a.length,E=D&&l.length!==0;if(D){if(d=h.length===0?void 0:p[p.length-1],u=f,f=h.pop(),E)if(i){u=u.slice();let R=0;for(let[F,Y]of l){let lt=F-R;Y===null?(u.splice(lt,1),R++):u[lt]=Y}}else{u=g({},u);for(let[R,F]of l)u[R]=F}c=o.index,a=o.keys,l=o.edits,i=o.inArray,o=o.prev}else if(f){if(d=i?c:a[c],u=f[d],u==null)continue;p.push(d)}let x;if(!Array.isArray(u)){var S,y;Kd(u)||bo(!1,`Invalid AST Node: ${Io(u)}.`);let R=D?(S=r.get(u.kind))===null||S===void 0?void 0:S.leave:(y=r.get(u.kind))===null||y===void 0?void 0:y.enter;if(x=R?.call(t,u,d,f,p,h),x===mn)break;if(x===!1){if(!D){p.pop();continue}}else if(x!==void 0&&(l.push([d,x]),!D))if(Kd(x))u=x;else{p.pop();continue}}if(x===void 0&&E&&l.push([d,u]),D)p.pop();else{var v;o={inArray:i,index:c,keys:a,edits:l,prev:o},i=Array.isArray(u),a=i?u:(v=n[u.kind])!==null&&v!==void 0?v:[],c=-1,l=[],f&&h.push(f),f=u}}while(o!==void 0);return l.length!==0?l[l.length-1][1]:e}function Xd(e,t){let n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function Po(e){return Ie(e,H0)}var L0=80,H0={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>P(e.definitions,`

`)},OperationDefinition:{leave(e){let t=ef(e.variableDefinitions)?B(`(
`,P(e.variableDefinitions,`
`),`
)`):B("(",P(e.variableDefinitions,", "),")"),n=B("",e.description,`
`)+P([e.operation,P([e.name,t]),P(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r,description:o})=>B("",o,`
`)+e+": "+t+B(" = ",n)+B(" ",P(r," "))},SelectionSet:{leave:({selections:e})=>Pt(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:o}){let i=B("",e,": ")+t,a=i+B("(",P(n,", "),")");return a.length>L0&&(a=i+B(`(
`,Mc(P(n,`
`)),`
)`)),P([a,P(r," "),o]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+B(" ",P(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>P(["...",B("on ",e),P(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:o,description:i})=>B("",i,`
`)+`fragment ${e}${B("(",P(n,", "),")")} on ${t} ${B("",P(r," ")," ")}`+o},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?tv(e):lv(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+P(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+P(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+B("(",P(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>B("",e,`
`)+P(["schema",P(t," "),Pt(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>B("",e,`
`)+P(["scalar",t,P(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:o})=>B("",e,`
`)+P(["type",t,B("implements ",P(n," & ")),P(r," "),Pt(o)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:o})=>B("",e,`
`)+t+(ef(n)?B(`(
`,Mc(P(n,`
`)),`
)`):B("(",P(n,", "),")"))+": "+r+B(" ",P(o," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:o})=>B("",e,`
`)+P([t+": "+n,B("= ",r),P(o," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:o})=>B("",e,`
`)+P(["interface",t,B("implements ",P(n," & ")),P(r," "),Pt(o)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>B("",e,`
`)+P(["union",t,P(n," "),B("= ",P(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>B("",e,`
`)+P(["enum",t,P(n," "),Pt(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>B("",e,`
`)+P([t,P(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>B("",e,`
`)+P(["input",t,P(n," "),Pt(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,repeatable:r,locations:o})=>B("",e,`
`)+"directive @"+t+(ef(n)?B(`(
`,Mc(P(n,`
`)),`
)`):B("(",P(n,", "),")"))+(r?" repeatable":"")+" on "+P(o," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>P(["extend schema",P(e," "),Pt(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>P(["extend scalar",e,P(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>P(["extend type",e,B("implements ",P(t," & ")),P(n," "),Pt(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>P(["extend interface",e,B("implements ",P(t," & ")),P(n," "),Pt(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>P(["extend union",e,P(t," "),B("= ",P(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>P(["extend enum",e,P(t," "),Pt(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>P(["extend input",e,P(t," "),Pt(n)]," ")},TypeCoordinate:{leave:({name:e})=>e},MemberCoordinate:{leave:({name:e,memberName:t})=>P([e,B(".",t)])},ArgumentCoordinate:{leave:({name:e,fieldName:t,argumentName:n})=>P([e,B(".",t),B("(",n,":)")])},DirectiveCoordinate:{leave:({name:e})=>P(["@",e])},DirectiveArgumentCoordinate:{leave:({name:e,argumentName:t})=>P(["@",e,B("(",t,":)")])}};function P(e,t=""){var n;return(n=e?.filter(r=>r).join(t))!==null&&n!==void 0?n:""}function Pt(e){return B(`{
`,Mc(P(e,`
`)),`
}`)}function B(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function Mc(e){return B("  ",e.replace(/\n/g,`
  `))}function ef(e){var t;return(t=e?.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}function br(e){try{return e()}catch(t){}}var Mo=br(()=>globalThis)||br(()=>window)||br(()=>self)||br(()=>global)||br(function(){return br.constructor("return this")()});var rs="4.1.3";var uv=new Map;function os(e){let t=uv.get(e)||1;return uv.set(e,t+1),`${e}:${t}:${Math.random().toString(36).slice(2)}`}function is(e,t=0){let n=os("stringifyForDisplay");return JSON.stringify(e,(r,o)=>o===void 0?n:o,t).split(JSON.stringify(n)).join("<undefined>")}var dv="Invariant Violation",tf=class e extends Error{constructor(t=dv){super(t),this.name=dv,Object.setPrototypeOf(this,e.prototype)}},hv=["debug","log","warn","error","silent"],W0=hv.indexOf("silent");function T(e,...t){if(!e)throw ge(...t)}function _c(e){return function(t,...n){if(hv.indexOf(e)>=W0){let r=console[e]||console.log;if(typeof t=="number"){let o=t;t=pv(o),t||(t=mv(o,n),n=[])}r(t,...n)}}}T.debug=_c("debug");T.log=_c("log");T.warn=_c("warn");T.error=_c("error");function ge(e,...t){return new tf(pv(e,t)||mv(e,t))}var fv=Symbol.for("ApolloErrorMessageHandler_"+rs);function nf(e){if(typeof e=="string")return e;try{return is(e,2).slice(0,1e3)}catch(t){return"<non-serializable>"}}function pv(e,t=[]){if(e)return Mo[fv]&&Mo[fv](e,t.map(nf))}function mv(e,t=[]){if(e)return typeof e=="string"?t.reduce((n,r)=>n.replace(/%[sdfo]/,nf(r)),e):`An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#${encodeURIComponent(JSON.stringify({version:rs,message:e,args:t.map(nf)}))}`}function gn(e,t,n,r){if(n.kind===w.INT||n.kind===w.FLOAT)e[t.value]=Number(n.value);else if(n.kind===w.BOOLEAN||n.kind===w.STRING)e[t.value]=n.value;else if(n.kind===w.OBJECT){let o={};n.fields.map(i=>gn(o,i.name,i.value,r)),e[t.value]=o}else if(n.kind===w.VARIABLE){let o=(r||{})[n.name.value];e[t.value]=o}else if(n.kind===w.LIST)e[t.value]=n.values.map(o=>{let i={};return gn(i,t,o,r),i[t.value]});else if(n.kind===w.ENUM)e[t.value]=n.value;else if(n.kind===w.NULL)e[t.value]=null;else throw ge(19,t.value,n.kind)}function Er(e,t){if(e.arguments&&e.arguments.length){let n={};return e.arguments.forEach(({name:r,value:o})=>gn(n,r,o,t)),n}return null}var G0=Symbol.for("apollo.cacheSize"),Me=g({},Mo[G0]);function xe(e,t){return e.definitions.find(n=>n.kind==="OperationDefinition"&&!!n.name)?.name.value??t}var q0=()=>Object.create(null),{forEach:Q0,slice:gv}=Array.prototype,{hasOwnProperty:K0}=Object.prototype,Fe=class e{constructor(t=!0,n=q0){this.weakness=t,this.makeData=n}lookup(){return this.lookupArray(arguments)}lookupArray(t){let n=this;return Q0.call(t,r=>n=n.getChildTrie(r)),K0.call(n,"data")?n.data:n.data=this.makeData(gv.call(t))}peek(){return this.peekArray(arguments)}peekArray(t){let n=this;for(let r=0,o=t.length;n&&r<o;++r){let i=n.mapFor(t[r],!1);n=i&&i.get(t[r])}return n&&n.data}remove(){return this.removeArray(arguments)}removeArray(t){let n;if(t.length){let r=t[0],o=this.mapFor(r,!1),i=o&&o.get(r);i&&(n=i.removeArray(gv.call(t,1)),!i.data&&!i.weak&&!(i.strong&&i.strong.size)&&o.delete(r))}else n=this.data,delete this.data;return n}getChildTrie(t){let n=this.mapFor(t,!0),r=n.get(t);return r||n.set(t,r=new e(this.weakness,this.makeData)),r}mapFor(t,n){return this.weakness&&Y0(t)?this.weak||(n?this.weak=new WeakMap:void 0):this.strong||(n?this.strong=new Map:void 0)}};function Y0(e){switch(typeof e){case"object":if(e===null)break;case"function":return!0}return!1}function Z0(){}var On=class{constructor(t=1/0,n=Z0){this.max=t,this.dispose=n,this.map=new Map,this.newest=null,this.oldest=null}has(t){return this.map.has(t)}get(t){let n=this.getNode(t);return n&&n.value}get size(){return this.map.size}getNode(t){let n=this.map.get(t);if(n&&n!==this.newest){let{older:r,newer:o}=n;o&&(o.older=r),r&&(r.newer=o),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=o)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(t,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(t){let n=this.map.get(t);return n?(n===this.newest&&(this.newest=n.older),n===this.oldest&&(this.oldest=n.newer),n.newer&&(n.newer.older=n.older),n.older&&(n.older.newer=n.newer),this.map.delete(t),this.dispose(n.value,t),!0):!1}};function rf(){}var J0=rf,X0=typeof WeakRef<"u"?WeakRef:function(e){return{deref:()=>e}},eI=typeof WeakMap<"u"?WeakMap:Map,tI=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:rf,unregister:rf}},nI=10024,qt=class{constructor(t=1/0,n=J0){this.max=t,this.dispose=n,this.map=new eI,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{let r=this.unfinalizedNodes.values();for(let o=0;o<nI;o++){let i=r.next().value;if(!i)break;this.unfinalizedNodes.delete(i);let a=i.key;delete i.key,i.keyRef=new X0(a),this.registry.register(a,i,i)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new tI(this.deleteNode.bind(this))}has(t){return this.map.has(t)}get(t){let n=this.getNode(t);return n&&n.value}getNode(t){let n=this.map.get(t);if(n&&n!==this.newest){let{older:r,newer:o}=n;o&&(o.older=r),r&&(r.newer=o),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=o)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.scheduleFinalization(r),this.map.set(t,r),this.size++,r.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(t){t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.size--;let n=t.key||t.keyRef&&t.keyRef.deref();this.dispose(t.value,n),t.keyRef?this.registry.unregister(t):this.unfinalizedNodes.delete(t),n&&this.map.delete(n)}delete(t){let n=this.map.get(t);return n?(this.deleteNode(n),!0):!1}scheduleFinalization(t){this.unfinalizedNodes.add(t),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}};var of=new WeakSet;function yv(e){e.size<=(e.max||-1)||of.has(e)||(of.add(e),setTimeout(()=>{e.clean(),of.delete(e)},100))}var Tr=function(e,t){let n=new qt(e,t);return n.set=function(r,o){let i=qt.prototype.set.call(this,r,o);return yv(this),i},n},sf=function(e,t){let n=new On(e,t);return n.set=function(r,o){let i=On.prototype.set.call(this,r,o);return yv(this),i},n};function kc(e,{max:t,makeCacheKey:n=r=>r}){let r=new Fe(!0),o=new Tr(t);return(...i)=>{let a=r.lookupArray(n(i)),c=o.get(a);if(c){if(c.error)throw c.error;return c.result}let l=o.set(a,{});try{return l.result=e(...i)}catch(u){throw l.error=u,u}}}var We=kc((e,t)=>{T(e&&e.kind==="Document",1);let n=e.definitions.filter(r=>r.kind==="OperationDefinition");!1,t&&T(n.length==1&&n[0].operation===t,4,t,t,n[0].operation),Ie(e,{Field(r,o,i,a){if(r.alias&&(r.alias.value==="__typename"||r.alias.value.startsWith("__ac_"))&&r.alias.value!==r.name.value){let c=e,l=[];for(let u of a)c=c[u],c.kind===w.FIELD&&l.push(c.alias?.value||c.name.value);throw l.splice(-1,1,r.name.value),ge(5,r.alias.value,l.join("."),n[0].operation,xe(e,"(anonymous)"))}}})},{max:Me.checkDocument||2e3});var{toString:rI}=Object.prototype;function cf(e){return af(e)}function af(e,t){switch(rI.call(e)){case"[object Array]":{if(t=t||new Map,t.has(e))return t.get(e);let n=e.slice(0);return t.set(e,n),n.forEach(function(r,o){n[o]=af(r,t)}),n}case"[object Object]":{if(t=t||new Map,t.has(e))return t.get(e);let n=Object.create(Object.getPrototypeOf(e));return t.set(e,n),Object.keys(e).forEach(r=>{n[r]=af(e[r],t)}),n}default:return e}}function lf(e){return e.length===0?le:new O(t=>{let{length:n}=e,r=new Array(n),o=new Map;e.forEach((l,u)=>{o.has(l)||o.set(l,new Set),o.get(l).add(u)});let i=o.size,a=o.size,c;o.forEach((l,u)=>{let d=!1,f=u.subscribe({next:p=>{l.forEach(h=>r[h]=p),d||(d=!0,a--),a||(c||=new Set(e.filter(h=>h.dirty)),c.delete(u),c.size||(t.next(r.slice()),c=void 0))},complete:()=>{i--,i||t.complete()},error:t.error.bind(t)});t.add(f)})})}function gt(...e){let t={};return e.forEach(n=>{n&&Reflect.ownKeys(n).forEach(r=>{let o=n[r];o!==void 0&&(t[r]=o)})}),t}function Mt(e=[]){let t={};return e.forEach(n=>{t[n.name.value]=n}),t}function de(e){return e!==null&&typeof e=="object"}var{hasOwnProperty:oI}=Object.prototype,iI=function(e,t,n){return this.merge(e[n],t[n])},vv=e=>isNaN(+e)?{}:[],tt=class{options;reconciler;constructor(t={}){this.options=t,this.reconciler=t.reconciler||iI}merge(t,n,r={}){let o=r.atPath;if(o?.length){let[i,...a]=o;t===void 0&&(t=vv(i));let c=t[i];c===void 0&&a.length&&(c=vv(a[0]));let l=this.merge(c,n,C(g({},r),{atPath:a}));return c!==l&&(t=this.shallowCopyForMerge(t),t[i]=l),t}return Array.isArray(t)&&Array.isArray(n)&&this.options.arrayMerge==="truncate"&&t.length>n.length&&(t=t.slice(0,n.length),this.pastCopies.add(t)),de(n)&&de(t)?(Object.keys(n).forEach(i=>{if(oI.call(t,i)){let a=t[i];if(n[i]!==a){let c=this.reconciler(t,n,i);c!==a&&(t=this.shallowCopyForMerge(t),t[i]=c)}}else t=this.shallowCopyForMerge(t),t[i]=n[i]}),t):n}isObject=de;pastCopies=new Set;shallowCopyForMerge(t){return de(t)&&(this.pastCopies.has(t)||(Array.isArray(t)?t=t.slice(0):t=g({__proto__:Object.getPrototypeOf(t)},t),this.pastCopies.add(t))),t}};function wr(e){let t={},n=e&&e.variableDefinitions;return n&&n.length&&n.forEach(r=>{r.defaultValue&&gn(t,r.variable.name,r.defaultValue)}),t}function Fn(e,t){switch(e.kind){case"InlineFragment":return e;case"FragmentSpread":{let n=e.name.value;if(typeof t=="function")return t(n);let r=t&&t[n];return T(r,9,n),r||null}default:return null}}function uf(e,t){let n=t,r=[];return e.definitions.forEach(i=>{if(i.kind==="OperationDefinition")throw ge(10,i.operation,i.name?` named '${i.name.value}'`:"");i.kind==="FragmentDefinition"&&r.push(i)}),typeof n>"u"&&(T(r.length===1,11,r.length),n=r[0].name.value),C(g({},e),{definitions:[{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:n}}]}},...e.definitions]})}function ss(e){T(e.kind==="Document",6),T(e.definitions.length<=1,7);let t=e.definitions[0];return T(t.kind==="FragmentDefinition",8),t}function _t(e){return e.definitions.filter(t=>t.kind==="FragmentDefinition")}function _o(e){We(e);let t;for(let n of e.definitions){if(n.kind==="OperationDefinition")return n;n.kind==="FragmentDefinition"&&!t&&(t=n)}if(t)return t;throw ge(12)}function Le(e){return We(e),e.definitions.filter(t=>t.kind==="OperationDefinition")[0]}function as(e){let t=Le(e);return T(t&&t.operation==="query",13),t}var sI={};function cs(e,t){sI[e]=t}var Ae=Object.assign(function(t){return JSON.stringify(t,aI)},{reset(){ko=new sf(Me.canonicalStringify||1e3)}});!1;var ko;Ae.reset();function aI(e,t){if(t&&typeof t=="object"){let n=Object.getPrototypeOf(t);if(n===Object.prototype||n===null){let r=Object.keys(t);if(r.every(cI))return t;let o=JSON.stringify(r),i=ko.get(o);if(!i){r.sort();let c=JSON.stringify(r);i=ko.get(c)||r,ko.set(o,i),ko.set(c,i)}let a=Object.create(n);return i.forEach(c=>{a[c]=t[c]}),a}}return t}function cI(e,t,n){return t===0||n[t-1]<=e}var lI=["connection","include","skip","client","rest","export","nonreactive","stream"],ls=Ae,us=Object.assign(function(e,t,n){if(t&&n&&n.connection&&n.connection.key){if(n.connection.filter&&n.connection.filter.length>0){let o=n.connection.filter?n.connection.filter:[];o.sort();let i={};o.forEach(c=>{i[c]=t[c]});let a=ls(i);if(a!=="{}")return`${n.connection.key}(${a})`}return n.connection.key}let r=e;if(t){let o=ls(t);o!=="{}"&&(r+=`(${o})`)}return n&&Object.keys(n).forEach(o=>{lI.indexOf(o)===-1&&(n[o]&&Object.keys(n[o]).length?r+=`@${o}(${ls(n[o])})`:r+=`@${o}`)}),r},{setStringify(e){let t=ls;return ls=e,t}});function yn(e){return!!e.errors?.length}function Qt(e,t,n){let r=new Set(e),o=r.size;return Ie(t,{Directive(i){if(r.delete(i.name.value)&&(!n||!r.size))return mn}}),n?!r.size:r.size<o}function df(e){let t=!1;return Ie(e,{Directive:{enter(n){if(n.name.value==="client"&&n.arguments&&(t=n.arguments.some(r=>r.name.value==="always"&&r.value.kind==="BooleanValue"&&r.value.value===!0),t))return mn}}}),t}var se=Array.isArray;function ff(e){return de(e)&&e.kind==="Document"&&Array.isArray(e.definitions)}function Kt(e){return e.kind==="Field"}function Cr(e){return Array.isArray(e)&&e.length>0}function Yt(e){return{__ref:String(e)}}function Sv(e){let t=new Set([e]);return t.forEach(n=>{de(n)&&uI(n)===n&&Object.getOwnPropertyNames(n).forEach(r=>{de(n[r])&&t.add(n[r])})}),e}function uI(e){if(!1)try{Object.freeze(e)}catch(t){if(t instanceof TypeError)return null;throw t}return e}function Ln(e){return!1,e}function hf(e){let t=e[0]||{},n=e.length;if(n>1){let r=new tt;for(let o=1;o<n;++o)t=r.merge(t,e[o])}return t}function ds(e,t){return gt(e,t,t.variables&&{variables:gt(g(g({},e&&e.variables),t.variables))})}function Nc(e){return e.catch(()=>{}),e}function pf(e,t){We(t);let n=Dv(""),r=Dv(""),o=v=>{for(let D=0,E;D<v.length&&(E=v[D]);++D)if(!se(E)){if(E.kind===w.OPERATION_DEFINITION)return n(E.name&&E.name.value);if(E.kind===w.FRAGMENT_DEFINITION)return r(E.name.value)}return T.error(14),null},i=0;for(let v=t.definitions.length-1;v>=0;--v)t.definitions[v].kind===w.OPERATION_DEFINITION&&++i;let a=dI(e),c=v=>Cr(v)&&v.map(a).some(D=>D&&D.remove),l=new Map,u=!1,d={enter(v){if(c(v.directives))return u=!0,null}},f=Ie(t,{Field:d,InlineFragment:d,VariableDefinition:{enter(){return!1}},Variable:{enter(v,D,E,x,R){let F=o(R);F&&F.variables.add(v.name.value)}},FragmentSpread:{enter(v,D,E,x,R){if(c(v.directives))return u=!0,null;let F=o(R);F&&F.fragmentSpreads.add(v.name.value)}},FragmentDefinition:{enter(v,D,E,x){l.set(JSON.stringify(x),v)},leave(v,D,E,x){let R=l.get(JSON.stringify(x));if(v===R)return v;if(i>0&&v.selectionSet.selections.every(F=>F.kind===w.FIELD&&F.name.value==="__typename"))return r(v.name.value).removed=!0,u=!0,null}},Directive:{leave(v){if(a(v))return u=!0,null}}});if(!u)return t;let p=v=>(v.transitiveVars||(v.transitiveVars=new Set(v.variables),v.removed||v.fragmentSpreads.forEach(D=>{p(r(D)).transitiveVars.forEach(E=>{v.transitiveVars.add(E)})})),v),h=new Set;f.definitions.forEach(v=>{v.kind===w.OPERATION_DEFINITION?p(n(v.name&&v.name.value)).fragmentSpreads.forEach(D=>{h.add(D)}):v.kind===w.FRAGMENT_DEFINITION&&i===0&&!r(v.name.value).removed&&h.add(v.name.value)}),h.forEach(v=>{p(r(v)).fragmentSpreads.forEach(D=>{h.add(D)})});let S=v=>!!(!h.has(v)||r(v).removed),y={enter(v){if(S(v.name.value))return null}};return fI(Ie(f,{FragmentSpread:y,FragmentDefinition:y,OperationDefinition:{leave(v){if(v.variableDefinitions){let D=p(n(v.name&&v.name.value)).transitiveVars;if(D.size<v.variableDefinitions.length)return C(g({},v),{variableDefinitions:v.variableDefinitions.filter(E=>D.has(E.variable.name.value))})}}}}))}function Dv(e){let t=new Map;return function(r=e){let o=t.get(r);return o||t.set(r,o={variables:new Set,fragmentSpreads:new Set}),o}}function dI(e){let t=new Map,n=new Map;return e.forEach(r=>{r&&(r.name?t.set(r.name,r):r.test&&n.set(r.test,r))}),r=>{let o=t.get(r.name.value);return!o&&n.size&&n.forEach((i,a)=>{a(r)&&(o=i)}),o}}function bv(e,t){return!e||e.selectionSet.selections.every(n=>n.kind===w.FRAGMENT_SPREAD&&bv(t[n.name.value],t))}function fI(e){return bv(Le(e)||ss(e),Mt(_t(e)))?null:e}function mf(e){return Ie(e,{FragmentSpread(t){if(!t.directives?.some(({name:n})=>n.value==="unmask"))return null}})}function st(e){return e.alias?e.alias.value:e.name.value}function vn({directives:e},t){return!e||!e.length?!0:pI(e).every(({directive:n,ifArgument:r})=>{let o=!1;return r.value.kind==="Variable"?(o=t&&t[r.value.name.value],T(o!==void 0,15,n.name.value)):o=r.value.value,n.name.value==="skip"?!o:o})}function hI({name:{value:e}}){return e==="skip"||e==="include"}function pI(e){let t=[];return e&&e.length&&e.forEach(n=>{if(!hI(n))return;let r=n.arguments,o=n.name.value;T(r&&r.length===1,16,o);let i=r[0];T(i.name&&i.name.value==="if",17,o);let a=i.value;T(a&&(a.kind==="Variable"||a.kind==="BooleanValue"),18,o),t.push({directive:n,ifArgument:i})}),t}function gf(e,t){let n=null;e.directives&&(n={},e.directives.forEach(o=>{n[o.name.value]={},o.arguments&&o.arguments.forEach(({name:i,value:a})=>gn(n[o.name.value],i,a,t))}));let r=null;return e.arguments&&e.arguments.length&&(r={},e.arguments.forEach(({name:o,value:i})=>gn(r,o,i,t))),us(e.name.value,r,n)}function Hn(e){let t={data:e.data};return e.error&&(t.error=e.error),t}function No(e,t=()=>{}){return n=>new O(r=>{let o=t();return n.subscribe({next(i){let a;try{a=e(i,o)}catch(c){r.error(c)}a!==void 0&&r.next(a)},error(i){r.error(i)},complete(){r.complete()}})})}var{toString:Ev,hasOwnProperty:mI}=Object.prototype,Tv=Function.prototype.toString,yf=new Map;function K(e,t){try{return vf(e,t)}finally{yf.clear()}}function vf(e,t){if(e===t)return!0;let n=Ev.call(e),r=Ev.call(t);if(n!==r)return!1;switch(n){case"[object Array]":if(e.length!==t.length)return!1;case"[object Object]":{if(Cv(e,t))return!0;let o=wv(e),i=wv(t),a=o.length;if(a!==i.length)return!1;for(let c=0;c<a;++c)if(!mI.call(t,o[c]))return!1;for(let c=0;c<a;++c){let l=o[c];if(!vf(e[l],t[l]))return!1}return!0}case"[object Error]":return e.name===t.name&&e.message===t.message;case"[object Number]":if(e!==e)return t!==t;case"[object Boolean]":case"[object Date]":return+e==+t;case"[object RegExp]":case"[object String]":return e==`${t}`;case"[object Map]":case"[object Set]":{if(e.size!==t.size)return!1;if(Cv(e,t))return!0;let o=e.entries(),i=n==="[object Map]";for(;;){let a=o.next();if(a.done)break;let[c,l]=a.value;if(!t.has(c)||i&&!vf(l,t.get(c)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":e=new Uint8Array(e),t=new Uint8Array(t);case"[object DataView]":{let o=e.byteLength;if(o===t.byteLength)for(;o--&&e[o]===t[o];);return o===-1}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{let o=Tv.call(e);return o!==Tv.call(t)?!1:!vI(o,yI)}}return!1}function wv(e){return Object.keys(e).filter(gI,e)}function gI(e){return this[e]!==void 0}var yI="{ [native code] }";function vI(e,t){let n=e.length-t.length;return n>=0&&e.indexOf(t,n)===n}function Cv(e,t){let n=yf.get(e);if(n){if(n.has(t))return!0}else yf.set(e,n=new Set);return n.add(t),!1}function fs(e,a,l,i){var c=a,{data:t}=c,n=ve(c,["data"]);var u=l,{data:r}=u,o=ve(u,["data"]);return K(n,o)&&xc(_o(e).selectionSet,t,r,{fragmentMap:Mt(_t(e)),variables:i})}function xc(e,t,n,r){if(t===n)return!0;let o=new Set;return e.selections.every(i=>{if(o.has(i)||(o.add(i),!vn(i,r.variables))||Iv(i))return!0;if(Kt(i)){let a=st(i),c=t&&t[a],l=n&&n[a],u=i.selectionSet;if(!u)return K(c,l);let d=Array.isArray(c),f=Array.isArray(l);if(d!==f)return!1;if(d&&f){let p=c.length;if(l.length!==p)return!1;for(let h=0;h<p;++h)if(!xc(u,c[h],l[h],r))return!1;return!0}return xc(u,c,l,r)}else{let a=Fn(i,r.fragmentMap);if(a)return Iv(a)?!0:xc(a.selectionSet,t,n,r)}})}function Iv(e){return!!e.directives&&e.directives.some(SI)}function SI(e){return e.name.value==="nonreactive"}function DI(e,t){let n,r;function o(i){return i!==n&&(n=i,r=t(n)),r}return Object.assign(e.pipe(L(o),Xn({bufferSize:1,refCount:!0})),{getCurrentResult:()=>o(e.getCurrentResult())})}var hs=kc(function(t,n,r){return DI(t,r)},{max:1,makeCacheKey:e=>e.slice(0,2)});var ps=Symbol.for("apollo.result.extensions"),at=Symbol.for("apollo.result.streamInfo"),Sf=Symbol.for("apollo.observableQuery.variablesUnknown");var He=null,Rv={},bI=1,EI=()=>class{constructor(){this.id=["slot",bI++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let t=He;t;t=t.parent)if(this.id in t.slots){let n=t.slots[this.id];if(n===Rv)break;return t!==He&&(He.slots[this.id]=n),!0}return He&&(He.slots[this.id]=Rv),!1}getValue(){if(this.hasValue())return He.slots[this.id]}withValue(t,n,r,o){let i={__proto__:null,[this.id]:t},a=He;He={parent:a,slots:i};try{return n.apply(o,r)}finally{He=a}}static bind(t){let n=He;return function(){let r=He;try{return He=n,t.apply(this,arguments)}finally{He=r}}}static noContext(t,n,r){if(He){let o=He;try{return He=null,t.apply(r,n)}finally{He=o}}else return t.apply(r,n)}};function Pv(e){try{return e()}catch(t){}}var Df="@wry/context:Slot",TI=Pv(()=>globalThis)||Pv(()=>global)||Object.create(null),Mv=TI,Sn=Mv[Df]||Array[Df]||(function(e){try{Object.defineProperty(Mv,Df,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}})(EI());var{bind:_v,noContext:kv}=Sn;var Ir=new Sn;var{hasOwnProperty:Nv}=Object.prototype,ms=Array.from||function(e){let t=[];return e.forEach(n=>t.push(n)),t};function xo(e){let{unsubscribe:t}=e;typeof t=="function"&&(e.unsubscribe=void 0,t())}var gs=[],II=100;function Ao(e,t){if(!e)throw new Error(t||"assertion failure")}function Av(e,t){let n=e.length;return n>0&&n===t.length&&e[n-1]===t[n-1]}function Ov(e){switch(e.length){case 0:throw new Error("unknown value");case 1:return e[0];case 2:throw e[1]}}function Fv(e){return e.slice(0)}var Lv=(()=>{class e{constructor(n){this.fn=n,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++e.count}peek(){if(this.value.length===1&&!Un(this))return xv(this),this.value[0]}recompute(n){return Ao(!this.recomputing,"already recomputing"),xv(this),Un(this)?RI(this,n):Ov(this.value)}setDirty(){this.dirty||(this.dirty=!0,Hv(this),xo(this))}dispose(){this.setDirty(),$v(this),bf(this,(n,r)=>{n.setDirty(),zv(n,this)})}forget(){this.dispose()}dependOn(n){n.add(this),this.deps||(this.deps=gs.pop()||new Set),this.deps.add(n)}forgetDeps(){this.deps&&(ms(this.deps).forEach(n=>n.delete(this)),this.deps.clear(),gs.push(this.deps),this.deps=null)}}return e.count=0,e})();function xv(e){let t=Ir.getValue();if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),Un(e)?jv(t,e):Bv(t,e),t}function RI(e,t){return $v(e),Ir.withValue(e,PI,[e,t]),_I(e,t)&&MI(e),Ov(e.value)}function PI(e,t){e.recomputing=!0;let{normalizeResult:n}=e,r;n&&e.value.length===1&&(r=Fv(e.value)),e.value.length=0;try{if(e.value[0]=e.fn.apply(null,t),n&&r&&!Av(r,e.value))try{e.value[0]=n(e.value[0],r[0])}catch(o){}}catch(o){e.value[1]=o}e.recomputing=!1}function Un(e){return e.dirty||!!(e.dirtyChildren&&e.dirtyChildren.size)}function MI(e){e.dirty=!1,!Un(e)&&Uv(e)}function Hv(e){bf(e,jv)}function Uv(e){bf(e,Bv)}function bf(e,t){let n=e.parents.size;if(n){let r=ms(e.parents);for(let o=0;o<n;++o)t(r[o],e)}}function jv(e,t){Ao(e.childValues.has(t)),Ao(Un(t));let n=!Un(e);if(!e.dirtyChildren)e.dirtyChildren=gs.pop()||new Set;else if(e.dirtyChildren.has(t))return;e.dirtyChildren.add(t),n&&Hv(e)}function Bv(e,t){Ao(e.childValues.has(t)),Ao(!Un(t));let n=e.childValues.get(t);n.length===0?e.childValues.set(t,Fv(t.value)):Av(n,t.value)||e.setDirty(),Vv(e,t),!Un(e)&&Uv(e)}function Vv(e,t){let n=e.dirtyChildren;n&&(n.delete(t),n.size===0&&(gs.length<II&&gs.push(n),e.dirtyChildren=null))}function $v(e){e.childValues.size>0&&e.childValues.forEach((t,n)=>{zv(e,n)}),e.forgetDeps(),Ao(e.dirtyChildren===null)}function zv(e,t){t.parents.delete(e),e.childValues.delete(t),Vv(e,t)}function _I(e,t){if(typeof e.subscribe=="function")try{xo(e),e.unsubscribe=e.subscribe.apply(null,t)}catch(n){return e.setDirty(),!1}return!0}var kI={setDirty:!0,dispose:!0,forget:!0};function ys(e){let t=new Map,n=e&&e.subscribe;function r(o){let i=Ir.getValue();if(i){let a=t.get(o);a||t.set(o,a=new Set),i.dependOn(a),typeof n=="function"&&(xo(a),a.unsubscribe=n(o))}}return r.dirty=function(i,a){let c=t.get(i);if(c){let l=a&&Nv.call(kI,a)?a:"setDirty";ms(c).forEach(u=>u[l]()),t.delete(i),xo(c)}},r}var Wv;function Tf(...e){return(Wv||(Wv=new Fe(typeof WeakMap=="function"))).lookupArray(e)}var Ef=new Set;function Dn(e,{max:t=Math.pow(2,16),keyArgs:n,makeCacheKey:r=Tf,normalizeResult:o,subscribe:i,cache:a=On}=Object.create(null)){let c=typeof a=="function"?new a(t,p=>p.dispose()):a,l=function(){let p=r.apply(null,n?n.apply(null,arguments):arguments);if(p===void 0)return e.apply(null,arguments);let h=c.get(p);h||(c.set(p,h=new Lv(e)),h.normalizeResult=o,h.subscribe=i,h.forget=()=>c.delete(p));let S=h.recompute(Array.prototype.slice.call(arguments));return c.set(p,h),Ef.add(c),Ir.hasValue()||(Ef.forEach(y=>y.clean()),Ef.clear()),S};Object.defineProperty(l,"size",{get:()=>c.size,configurable:!1,enumerable:!1}),Object.freeze(l.options={max:t,keyArgs:n,makeCacheKey:r,normalizeResult:o,subscribe:i,cache:c});function u(p){let h=p&&c.get(p);h&&h.setDirty()}l.dirtyKey=u,l.dirty=function(){u(r.apply(null,arguments))};function d(p){let h=p&&c.get(p);if(h)return h.peek()}l.peekKey=d,l.peek=function(){return d(r.apply(null,arguments))};function f(p){return p?c.delete(p):!1}return l.forgetKey=f,l.forget=function(){return f(r.apply(null,arguments))},l.makeCacheKey=r,l.getKey=n?function(){return r.apply(null,n.apply(null,arguments))}:r,Object.freeze(l)}function wf(...e){return Tf.bind(null,...e)}function Cf(){throw new Error("only supported in development mode")}var Gv=Cf,qv=Cf,Qv=Cf;var vs=class{isIncrementalResult(t){return!1}prepareRequest(t){return T(!Qt(["defer","stream"],t.query),67),t}extractErrors(){}startRequest=void 0};function If(e,{client:t}){let n={query:e.query,variables:e.variables||{},extensions:e.extensions||{},operationName:xe(e.query),operationType:Le(e.query).operation},r=g({},e.context),o=a=>{typeof a=="function"?r=g(g({},r),a(i())):r=g(g({},r),a)},i=()=>Object.freeze(g({},r));return Object.defineProperty(n,"setContext",{enumerable:!1,value:o}),Object.defineProperty(n,"getContext",{enumerable:!1,value:i}),Object.defineProperty(n,"client",{enumerable:!1,value:t}),n}var jn=class e{static empty(){return new e(()=>le)}static from(t){if(t.length===0)return e.empty();let[n,...r]=t;return n.concat(...r)}static split(t,n,r=new e((o,i)=>i(o))){let o=new e((i,a)=>{let c=t(i);return!1,c?n.request(i,a):r.request(i,a)});return Object.assign(o,{left:n,right:r})}static execute(t,n,r){return t.request(If(n,r),()=>(!1,le))}static concat(...t){return e.from(t)}constructor(t){t&&(this.request=t)}split(t,n,r){return this.concat(e.split(t,n,r))}concat(...t){return t.length===0?this:t.reduce(this.combine.bind(this),this)}combine(t,n){let r=new e((o,i)=>t.request(o,a=>n.request(a,i)));return Object.assign(r,{left:t,right:n})}request(t,n){throw ge(65)}left;right};var Rr=jn.execute;function NI(e){return e}var bn=class e{transform;cached;resultCache=new WeakSet;getCacheKey(t){return[t]}static identity(){return new e(NI,{cache:!1})}static split(t,n,r=e.identity()){return Object.assign(new e(o=>(t(o)?n:r).transformDocument(o),{cache:!1}),{left:n,right:r})}constructor(t,n={}){this.transform=t,n.getCacheKey&&(this.getCacheKey=n.getCacheKey),this.cached=n.cache!==!1,this.resetCache()}resetCache(){if(this.cached){let t=new Fe;this.performWork=Dn(e.prototype.performWork.bind(this),{makeCacheKey:n=>{let r=this.getCacheKey(n);if(r)return T(Array.isArray(r),20),t.lookupArray(r)},max:Me["documentTransform.cache"],cache:qt})}}performWork(t){return We(t),this.transform(t)}transformDocument(t){if(this.resultCache.has(t))return t;let n=this.performWork(t);return this.resultCache.add(n),n}concat(t){return Object.assign(new e(n=>t.transformDocument(this.transformDocument(n)),{cache:!1}),{left:this,right:t})}left;right};var Ss,Bn=Object.assign(e=>{let t=Ss.get(e);return t||(t=Po(e),Ss.set(e,t)),t},{reset(){Ss=new Tr(Me.print||2e3)}});Bn.reset();!1;function G(e){return!!(e&&typeof e=="object"&&typeof e.__ref=="string")}var Kv={kind:w.FIELD,name:{kind:w.NAME,value:"__typename"}},Pr=Object.assign(function(e){return Ie(e,{SelectionSet:{enter(t,n,r){if(r&&r.kind===w.OPERATION_DEFINITION)return;let{selections:o}=t;if(!o||o.some(c=>c.kind===w.FIELD&&(c.name.value==="__typename"||c.name.value.lastIndexOf("__",0)===0)))return;let a=r;if(!(a.kind===w.FIELD&&a.directives&&a.directives.some(c=>c.name.value==="export")))return C(g({},t),{selections:[...o,Kv]})}}})},{added(e){return e===Kv}});function Ds(e){return e===7||e===8}function Mr(e){return!Ds(e)}var Oo=class{assumeImmutableResults=!1;lookupFragment(t){return null}batch(t){let n=typeof t.optimistic=="string"?t.optimistic:t.optimistic===!1?null:void 0,r;return this.performTransaction(()=>r=t.update(this),n),r}recordOptimisticTransaction(t,n){this.performTransaction(t,n)}transformDocument(t){return t}transformForLink(t){return t}identify(t){}gc(){return[]}modify(t){return!1}readQuery(t,n=!!t.optimistic){return this.read(C(g({},t),{rootId:t.id||"ROOT_QUERY",optimistic:n}))}fragmentWatches=new Fe(!0);watchFragment(t){let{fragment:n,fragmentName:r,from:o}=t,i=this.getFragmentDoc(n,r),c=(Array.isArray(o)?o:[o]).map(h=>{let S=h==null?h:this.toCacheId(h);if(!1){let y=r||ss(n).name.value;S===void 0&&!1&&T.warn(113,y)}return S});if(!Array.isArray(o)){let h=this.watchSingleFragment(c[0],i,t);return o===null?h:hs(h,Symbol.for("apollo.transform.individualResult"),S=>C(g({},S),{data:S.data??{}}))}let l;function u(h){let S=h.reduce((y,v,D)=>(y.data.push(v.data),y.complete&&=v.complete,y.dataState=y.complete?"complete":"partial",v.missing&&(y.missing||={},y.missing[D]=v.missing),y),{data:[],dataState:"complete",complete:!0});return K(l,S)||(l=S),l}if(c.length===0)return AI;let d=!1,f=c.map(h=>this.watchSingleFragment(h,i,t)),p=lf(f).pipe(L(u),Pe({subscribe:()=>d=!0,unsubscribe:()=>d=!1}),Xn({bufferSize:1,refCount:!0}));return Object.assign(p,{getCurrentResult:()=>{if(d&&l)return l;let h=f.map(S=>S.getCurrentResult());return u(h)}})}onAfterBroadcast=t=>t();watchSingleFragment(t,n,r){if(t===null)return xI;let{optimistic:o=!0,variables:i}=r,a=[n,Ae({id:t,optimistic:o,variables:i})],c=this.fragmentWatches.lookupArray(a);if(!c.observable){let f=function(h){let S=h.result;return(!d||!fs(n,{data:d.data},{data:S},r.variables))&&(d={data:S,dataState:h.complete?"complete":"partial",complete:h.complete},h.missing&&(d.missing=h.missing.missing)),d};var l=f;let u=!1,d,p=new O(h=>{u=!0;let S=this.watch({variables:i,returnPartialData:!0,id:t,query:n,optimistic:o,immediate:!0,callback:y=>{p.dirty=!0,this.onAfterBroadcast(()=>{h.next(f(y)),p.dirty=!1})}});return()=>{u=!1,S(),this.fragmentWatches.removeArray(a)}}).pipe(Bl(),Ft({connector:()=>new Kn(1),resetOnRefCountZero:()=>jl(0)}));c.observable=Object.assign(p,{dirty:!1,getCurrentResult:()=>u&&d?d:f(this.diff({id:t,query:n,returnPartialData:!0,optimistic:o,variables:i}))})}return c.observable}getFragmentDoc=Dn(uf,{max:Me["cache.fragmentQueryDocuments"]||1e3,cache:qt,makeCacheKey:wf(this)});readFragment(t,n=!!t.optimistic){let r=t.from!==void 0?this.toCacheId(t.from):t.id;return this.read(C(g({},t),{query:this.getFragmentDoc(t.fragment,t.fragmentName),rootId:r,optimistic:n}))}writeQuery(o){var i=o,{id:t,data:n}=i,r=ve(i,["id","data"]);return this.write(Object.assign(r,{dataId:t||"ROOT_QUERY",result:n}))}writeFragment(i){var a=i,{data:t,fragment:n,fragmentName:r}=a,o=ve(a,["data","fragment","fragmentName"]);let c=o.from!==void 0?this.toCacheId(o.from):o.id;return this.write(Object.assign(o,{query:this.getFragmentDoc(n,r),dataId:c,result:t}))}updateQuery(t,n){return this.batch({update(r){let o=r.readQuery(t),i=n(o);return i==null?o:(r.writeQuery(C(g({},t),{data:i})),i)}})}updateFragment(t,n){return this.batch({update(r){let o=r.readFragment(t),i=n(o);return i==null?o:(r.writeFragment(C(g({},t),{data:i})),i)}})}toCacheId(t){return typeof t=="string"?t:this.identify(t)}};!1;var Yv=Object.freeze({data:null,dataState:"complete",complete:!0}),xI=Object.assign(new O(e=>{e.next(Yv)}),{dirty:!1,getCurrentResult:()=>Yv}),Zv=Object.freeze({data:[],dataState:"complete",complete:!0}),AI=Object.assign(new O(e=>{e.next(Zv)}),{getCurrentResult:()=>Zv});var bs=class e extends Error{message;path;query;variables;constructor(t,n,r,o){if(super(t),this.message=t,this.path=n,this.query=r,this.variables=o,this.name="MissingFieldError",Array.isArray(this.path)){this.missing=this.message;for(let i=this.path.length-1;i>=0;--i)this.missing={[this.path[i]]:this.missing}}else this.missing=this.path;this.__proto__=e.prototype}missing};var{hasOwnProperty:ye}=Object.prototype;function Oc({__typename:e,id:t,_id:n},r){if(typeof e=="string"&&(r&&(r.keyObject=t!=null?{id:t}:n!=null?{_id:n}:void 0),t==null&&n!=null&&(t=n),t!=null))return`${e}:${typeof t=="number"||typeof t=="string"?t:JSON.stringify(t)}`}var OI={dataIdFromObject:Oc,resultCaching:!0};function Jv(e){return gt(OI,e)}function Xv(e,t){return G(t)?e.get(t.__ref,"__typename"):t&&t.__typename}var Rf=/^[_a-z][_0-9a-z]*/i;function kt(e){let t=e.match(Rf);return t?t[0]:e}function Ac(e,t,n){return de(t)?se(t)?t.every(r=>Ac(e,r,n)):e.selections.every(r=>{if(Kt(r)&&vn(r,n)){let o=st(r);return ye.call(t,o)&&(!r.selectionSet||Ac(r.selectionSet,t[o],n))}return!0}):!1}function Vn(e){return de(e)&&!G(e)&&!se(e)}function eS(){return new tt}function Fc(e,t){let n=Mt(_t(e));return{fragmentMap:n,lookupFragment(r){let o=n[r];return!o&&t&&(o=t.lookup(r)),o||null}}}var Lc={},Pf=()=>Lc,tS={},_r=class{policies;group;data={};constructor(t,n){this.policies=t,this.group=n}toObject(){return g({},this.data)}has(t){return this.lookup(t,!0)!==void 0}get(t,n){if(this.group.depend(t,n),ye.call(this.data,t)){let r=this.data[t];if(r&&ye.call(r,n))return r[n]}if(n==="__typename"&&ye.call(this.policies.rootTypenamesById,t))return this.policies.rootTypenamesById[t];if(this instanceof Zt)return this.parent.get(t,n)}lookup(t,n){if(n&&this.group.depend(t,"__exists"),ye.call(this.data,t))return this.data[t];if(this instanceof Zt)return this.parent.lookup(t,n);if(this.policies.rootTypenamesById[t])return{}}merge(t,n){let r;G(t)&&(t=t.__ref),G(n)&&(n=n.__ref);let o=typeof t=="string"?this.lookup(r=t):t,i=typeof n=="string"?this.lookup(r=n):n;if(!i)return;T(typeof r=="string",99);let a=new tt({reconciler:FI}).merge(o,i);if(this.data[r]=a,a!==o&&(delete this.refs[r],this.group.caching)){let c={};o||(c.__exists=1),Object.keys(i).forEach(l=>{if(!o||o[l]!==a[l]){c[l]=1;let u=kt(l);u!==l&&!this.policies.hasKeyArgs(a.__typename,u)&&(c[u]=1),a[l]===void 0&&!(this instanceof Zt)&&delete a[l]}}),c.__typename&&!(o&&o.__typename)&&this.policies.rootTypenamesById[r]===a.__typename&&delete c.__typename,Object.keys(c).forEach(l=>this.group.dirty(r,l))}}modify(t,n,r){let o=this.lookup(t);if(o){let i={},a=!1,c=!0,l={DELETE:Lc,INVALIDATE:tS,isReference:G,toReference:this.toReference,canRead:this.canRead,readField:(u,d)=>this.policies.readField(typeof u=="string"?{fieldName:u,from:d||Yt(t)}:u,{store:this})};if(Object.keys(o).forEach(u=>{let d=kt(u),f=o[u];if(f===void 0)return;let p=typeof n=="function"?n:n[u]||(r?void 0:n[d]);if(p){let h=p===Pf?Lc:p(Ln(f),C(g({},l),{fieldName:d,storeFieldName:u,storage:this.getStorage(t,u)}));if(h===tS)this.group.dirty(t,u);else if(h===Lc&&(h=void 0),h!==f&&(i[u]=h,a=!0,f=h,!1)){let S=y=>{if(this.lookup(y.__ref)===void 0)return!1,!0};if(G(h))S(h);else if(Array.isArray(h)){let y=!1,v;for(let D of h){if(G(D)){if(y=!0,S(D))break}else if(typeof D=="object"&&D){let[E]=this.policies.identify(D);E&&(v=D)}if(y&&v!==void 0){!1;break}}}}}f!==void 0&&(c=!1)}),a)return this.merge(t,i),c&&(this instanceof Zt?this.data[t]=void 0:delete this.data[t],this.group.dirty(t,"__exists")),!0}return!1}delete(t,n,r){let o=this.lookup(t);if(o){let i=this.getFieldValue(o,"__typename"),a=n&&r?this.policies.getStoreFieldName({typename:i,fieldName:n,args:r}):n;return this.modify(t,a?{[a]:Pf}:Pf,!!r)}return!1}evict(t,n){let r=!1;return t.id&&(ye.call(this.data,t.id)&&(r=this.delete(t.id,t.fieldName,t.args)),this instanceof Zt&&this!==n&&(r=this.parent.evict(t,n)||r),(t.fieldName||r)&&this.group.dirty(t.id,t.fieldName||"__exists")),r}clear(){this.replace(null)}extract(){let t=this.toObject(),n=[];return this.getRootIdSet().forEach(r=>{ye.call(this.policies.rootTypenamesById,r)||n.push(r)}),n.length&&(t.__META={extraRootIds:n.sort()}),t}replace(t){if(Object.keys(this.data).forEach(r=>{t&&ye.call(t,r)||this.delete(r)}),t){let n=t,{__META:r}=n,o=ve(n,["__META"]);Object.keys(o).forEach(i=>{this.merge(i,o[i])}),r&&r.extraRootIds.forEach(this.retain,this)}}rootIds={};retain(t){return this.rootIds[t]=(this.rootIds[t]||0)+1}release(t){if(this.rootIds[t]>0){let n=--this.rootIds[t];return n||delete this.rootIds[t],n}return 0}getRootIdSet(t=new Set){return Object.keys(this.rootIds).forEach(t.add,t),this instanceof Zt?this.parent.getRootIdSet(t):Object.keys(this.policies.rootTypenamesById).forEach(t.add,t),t}gc(){let t=this.getRootIdSet(),n=this.toObject();t.forEach(o=>{ye.call(n,o)&&(Object.keys(this.findChildRefIds(o)).forEach(t.add,t),delete n[o])});let r=Object.keys(n);if(r.length){let o=this;for(;o instanceof Zt;)o=o.parent;r.forEach(i=>o.delete(i))}return r}refs={};findChildRefIds(t){if(!ye.call(this.refs,t)){let n=this.refs[t]={},r=this.data[t];if(!r)return n;let o=new Set([r]);o.forEach(i=>{G(i)&&(n[i.__ref]=!0),de(i)&&Object.keys(i).forEach(a=>{let c=i[a];de(c)&&o.add(c)})})}return this.refs[t]}makeCacheKey(){return this.group.keyMaker.lookupArray(arguments)}getFieldValue=(t,n)=>Ln(G(t)?this.get(t.__ref,n):t&&t[n]);canRead=t=>G(t)?this.has(t.__ref):typeof t=="object";toReference=(t,n)=>{if(typeof t=="string")return Yt(t);if(G(t))return t;let[r]=this.policies.identify(t);if(r){let o=Yt(r);return n&&this.merge(r,t),o}};get supportsResultCaching(){return this.group.caching}},Hc=class{caching;parent;d=null;keyMaker;constructor(t,n=null){this.caching=t,this.parent=n,this.resetCaching()}resetCaching(){this.d=this.caching?ys():null,this.keyMaker=new Fe}depend(t,n){if(this.d){this.d(Mf(t,n));let r=kt(n);r!==n&&this.d(Mf(t,r)),this.parent&&this.parent.depend(t,n)}}dirty(t,n){this.d&&this.d.dirty(Mf(t,n),n==="__exists"?"forget":"setDirty")}};function Mf(e,t){return t+"#"+e}function Nf(e,t){kr(e)&&e.group.depend(t,"__exists")}var _f=class extends _r{constructor({policies:t,resultCaching:n=!0,seed:r}){super(t,new Hc(n)),r&&this.replace(r)}stump=new kf(this);addLayer(t,n){return this.stump.addLayer(t,n)}removeLayer(){return this}storageTrie=new Fe;getStorage(){return this.storageTrie.lookupArray(arguments)}};_r.Root=_f;var Zt=class e extends _r{id;parent;replay;group;constructor(t,n,r,o){super(n.policies,o),this.id=t,this.parent=n,this.replay=r,this.group=o,r(this)}addLayer(t,n){return new e(t,this,n,this.group)}removeLayer(t){let n=this.parent.removeLayer(t);return t===this.id?(this.group.caching&&Object.keys(this.data).forEach(r=>{let o=this.data[r],i=n.lookup(r);i?o?o!==i&&Object.keys(o).forEach(a=>{K(o[a],i[a])||this.group.dirty(r,a)}):(this.group.dirty(r,"__exists"),Object.keys(i).forEach(a=>{this.group.dirty(r,a)})):this.delete(r)}),n):n===this.parent?this:n.addLayer(this.id,this.replay)}toObject(){return g(g({},this.parent.toObject()),this.data)}findChildRefIds(t){let n=this.parent.findChildRefIds(t);return ye.call(this.data,t)?g(g({},n),super.findChildRefIds(t)):n}getStorage(...t){let n=this.parent;for(;n.parent;)n=n.parent;return n.getStorage(...t)}},kf=class extends Zt{constructor(t){super("EntityStore.Stump",t,()=>{},new Hc(t.group.caching,t.group))}removeLayer(){return this}merge(t,n){return this.parent.merge(t,n)}};function FI(e,t,n){let r=e[n],o=t[n];return K(r,o)?r:o}function kr(e){return!!(e&&e.supportsResultCaching)}var Fo=new Sn;function nS(e){let t=e.directives?.find(({name:r})=>r.value==="unmask");if(!t)return"mask";let n=t.arguments?.find(({name:r})=>r.value==="mode");return!1,n&&"value"in n.value&&n.value.value==="migrate"?"migrate":"unmask"}function Uc(e,t,n){return Fo.withValue(!0,()=>{let r=Es(e,t,n,!1);return Object.isFrozen(e)&&Ln(r),r})}function LI(e,t){if(t.has(e))return t.get(e);let n=Array.isArray(e)?[]:{};return t.set(e,n),n}function Es(e,t,n,r,o){let{knownChanged:i}=n,a=LI(e,n.mutableTargets);if(Array.isArray(e)){for(let[c,l]of Array.from(e.entries())){if(l===null){a[c]=null;continue}let u=Es(l,t,n,r,void 0);i.has(u)&&i.add(a),a[c]=u}return i.has(a)?a:e}for(let c of t.selections){let l;if(r&&i.add(a),c.kind===w.FIELD){let u=st(c),d=c.selectionSet;if(l=a[u]||e[u],l===void 0)continue;if(d&&l!==null){let f=Es(e[u],d,n,r,void 0);i.has(f)&&(l=f)}a[u]=l,!1}if(c.kind===w.INLINE_FRAGMENT&&(!c.typeCondition||n.cache.fragmentMatches(c,e.__typename))&&(l=Es(e,c.selectionSet,n,r,o)),c.kind===w.FRAGMENT_SPREAD){let u=c.name.value,d=n.fragmentMap[u]||(n.fragmentMap[u]=n.cache.lookupFragment(u));T(d,39,u);let f=nS(c);f!=="mask"&&(l=Es(e,d.selectionSet,n,f==="migrate",o))}i.has(l)&&i.add(a)}return"__typename"in e&&!("__typename"in a)&&(a.__typename=e.__typename),Object.keys(a).length!==Object.keys(e).length&&i.add(a),i.has(a)?a:e}function HI(e,t,n,r,o){let i=()=>(Fo.getValue()||(!1,i=()=>t),t);return{get(){return i()},set(a){i=()=>a},enumerable:!0,configurable:!0}}function xf(e,t,n,r){let o=t.definitions.filter(a=>a.kind===w.FRAGMENT_DEFINITION);typeof r>"u"&&(T(o.length===1,41,o.length),r=o[0].name.value);let i=o.find(a=>a.name.value===r);return T(!!i,42,r),e==null||K(e,{})?e:Uc(e,i.selectionSet,{operationType:"fragment",operationName:i.name.value,fragmentMap:Mt(_t(t)),cache:n,mutableTargets:new WeakMap,knownChanged:new WeakSet})}function Af(e,t,n){let r=Le(t);return T(r,43),e==null?e:Uc(e,r.selectionSet,{operationType:r.operation,operationName:r.name?.value,fragmentMap:Mt(_t(t)),cache:n,mutableTargets:new WeakMap,knownChanged:new WeakSet})}var rS={};function Of(e){let t=JSON.stringify(e);return rS[t]||(rS[t]={})}function Ff(e){let t=Of(e);return t.keyFieldsFn||(t.keyFieldsFn=(n,r)=>{let o=(a,c)=>r.readField(c,a),i=r.keyObject=Hf(e,a=>{let c=Lo(r.storeObject,a,o);return c===void 0&&n!==r.storeObject&&ye.call(n,a[0])&&(c=Lo(n,a,iS)),T(c!==void 0,102,a.join("."),n),c});return`${r.typename}:${JSON.stringify(i)}`})}function Lf(e){let t=Of(e);return t.keyArgsFn||(t.keyArgsFn=(n,{field:r,variables:o,fieldName:i})=>{let a=Hf(e,l=>{let u=l[0],d=u.charAt(0);if(d==="@"){if(r&&Cr(r.directives)){let f=u.slice(1),p=r.directives.find(S=>S.name.value===f),h=p&&Er(p,o);return h&&Lo(h,l.slice(1))}return}if(d==="$"){let f=u.slice(1);if(o&&ye.call(o,f)){let p=l.slice(0);return p[0]=f,Lo(o,p)}return}if(n)return Lo(n,l)}),c=JSON.stringify(a);return(n||c!=="{}")&&(i+=":"+c),i})}function Hf(e,t){let n=new tt;return oS(e).reduce((r,o)=>{let i=t(o);if(i!==void 0){for(let a=o.length-1;a>=0;--a)i={[o[a]]:i};r=n.merge(r,i)}return r},{})}function oS(e){let t=Of(e);if(!t.paths){let n=t.paths=[],r=[];e.forEach((o,i)=>{se(o)?(oS(o).forEach(a=>n.push(r.concat(a))),r.length=0):(r.push(o),se(e[i+1])||(n.push(r.slice(0)),r.length=0))})}return t.paths}function iS(e,t){return e[t]}function Lo(e,t,n){return n=n||iS,sS(t.reduce(function r(o,i){return se(o)?o.map(a=>r(a,i)):o&&n(o,i)},e))}function sS(e){return de(e)?se(e)?e.map(sS):Hf(Object.keys(e).sort(),t=>Lo(e,t)):e}var Uf=new Sn,aS=new WeakMap;function Ts(e){let t=aS.get(e);return t||aS.set(e,t={vars:new Set,dep:ys()}),t}function jf(e){Ts(e).vars.forEach(t=>t.forgetCache(e))}function cS(e){Ts(e).vars.forEach(t=>t.attachCache(e))}function Bf(e){let t=new Set,n=new Set,r=function(i){if(arguments.length>0){if(e!==i){e=i,t.forEach(c=>{Ts(c).dep.dirty(r),UI(c)});let a=Array.from(n);n.clear(),a.forEach(c=>c(e))}}else{let a=Uf.getValue();a&&(o(a),Ts(a).dep(r))}return e};r.onNextChange=i=>(n.add(i),()=>{n.delete(i)});let o=r.attachCache=i=>(t.add(i),Ts(i).vars.add(r),r);return r.forgetCache=i=>t.delete(i),r}function UI(e){e.broadcastWatches&&e.broadcastWatches()}function Vf(e){return e.args!==void 0?e.args:e.field?Er(e.field,e.variables):null}var jI=()=>{},lS=(e,t)=>t.fieldName,uS=(e,t,{mergeObjects:n})=>n(e,t),dS=(e,t)=>t,fS=(e,t,{streamFieldInfo:n,existingData:r})=>{if(!e&&!r)return t;let o=[],i=e??r,a=n?.isLastChunk?t.length:Math.max(i.length,t.length);for(let c=0;c<a;c++)o[c]=t[c]===void 0?i[c]:t[c];return o},jc=class{config;typePolicies={};toBeAdded={};supertypeMap=new Map;fuzzySubtypes=new Map;cache;rootIdsByTypename={};rootTypenamesById={};usingPossibleTypes=!1;constructor(t){this.config=t,this.config=g({dataIdFromObject:Oc},t),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),t.possibleTypes&&this.addPossibleTypes(t.possibleTypes),t.typePolicies&&this.addTypePolicies(t.typePolicies)}identify(t,n){let r=this,o=n&&(n.typename||n.storeObject?.__typename)||t.__typename;if(o===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];let i=n&&n.storeObject||t,a=C(g({},n),{typename:o,storeObject:i,readField:n&&n.readField||((...d)=>{let f=Bc(d,i);return r.readField(f,{store:r.cache.data,variables:f.variables})})}),c,l=o&&this.getTypePolicy(o),u=l&&l.keyFn||this.config.dataIdFromObject;return Fo.withValue(!0,()=>{for(;u;){let d=u(g(g({},t),i),a);if(se(d))u=Ff(d);else{c=d;break}}}),c=c?String(c):void 0,a.keyObject?[c,a.keyObject]:[c]}addTypePolicies(t){Object.keys(t).forEach(n=>{let c=t[n],{queryType:r,mutationType:o,subscriptionType:i}=c,a=ve(c,["queryType","mutationType","subscriptionType"]);r&&this.setRootTypename("Query",n),o&&this.setRootTypename("Mutation",n),i&&this.setRootTypename("Subscription",n),ye.call(this.toBeAdded,n)?this.toBeAdded[n].push(a):this.toBeAdded[n]=[a]})}updateTypePolicy(t,n,r){let o=this.getTypePolicy(t),{keyFields:i,fields:a}=n;function c(l,u){l.merge=typeof u=="function"?u:u===!0?uS:u===!1?dS:l.merge}c(o,n.merge),o.keyFn=i===!1?jI:se(i)?Ff(i):typeof i=="function"?i:o.keyFn,a&&Object.keys(a).forEach(l=>{let u=r[l];(!u||u?.typename!==t)&&(u=r[l]={typename:t});let d=a[l];if(typeof d=="function")u.read=d;else{let{keyArgs:f,read:p,merge:h}=d;u.keyFn=f===!1?lS:se(f)?Lf(f):typeof f=="function"?f:u.keyFn,typeof p=="function"&&(u.read=p),c(u,h)}u.read&&u.merge&&(u.keyFn=u.keyFn||lS)})}setRootTypename(t,n=t){let r="ROOT_"+t.toUpperCase(),o=this.rootTypenamesById[r];n!==o&&(T(!o||o===t,103,t),o&&delete this.rootIdsByTypename[o],this.rootIdsByTypename[n]=r,this.rootTypenamesById[r]=n)}addPossibleTypes(t){this.usingPossibleTypes=!0,Object.keys(t).forEach(n=>{this.getSupertypeSet(n,!0),t[n].forEach(r=>{this.getSupertypeSet(r,!0).add(n);let o=r.match(Rf);(!o||o[0]!==r)&&this.fuzzySubtypes.set(r,new RegExp(r))})})}getTypePolicy(t){if(!ye.call(this.typePolicies,t)){let r=this.typePolicies[t]={};r.fields={};let o=this.supertypeMap.get(t);!o&&this.fuzzySubtypes.size&&(o=this.getSupertypeSet(t,!0),this.fuzzySubtypes.forEach((i,a)=>{if(i.test(t)){let c=this.supertypeMap.get(a);c&&c.forEach(l=>o.add(l))}})),o&&o.size&&o.forEach(i=>{let l=this.getTypePolicy(i),{fields:a}=l,c=ve(l,["fields"]);Object.assign(r,c),Object.assign(r.fields,a)})}let n=this.toBeAdded[t];return n&&n.length&&n.splice(0).forEach(r=>{this.updateTypePolicy(t,r,this.typePolicies[t].fields)}),this.typePolicies[t]}getFieldPolicy(t,n){if(t)return this.getTypePolicy(t).fields[n]}getSupertypeSet(t,n){let r=this.supertypeMap.get(t);return!r&&n&&this.supertypeMap.set(t,r=new Set),r}fragmentMatches(t,n,r,o){if(!t.typeCondition)return!0;if(!n)return!1;let i=t.typeCondition.name.value;if(n===i)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(i)){let a=this.getSupertypeSet(n,!0),c=[a],l=f=>{let p=this.getSupertypeSet(f,!1);p&&p.size&&c.indexOf(p)<0&&c.push(p)},u=!!(r&&this.fuzzySubtypes.size),d=!1;for(let f=0;f<c.length;++f){let p=c[f];if(p.has(i))return a.has(i)||(d&&!1&&T.warn(104,n,i),a.add(i)),!0;p.forEach(l),u&&f===c.length-1&&Ac(t.selectionSet,r,o)&&(u=!1,d=!0,this.fuzzySubtypes.forEach((h,S)=>{let y=n.match(h);y&&y[0]===n&&l(S)}))}}return!1}hasKeyArgs(t,n){let r=this.getFieldPolicy(t,n);return!!(r&&r.keyFn)}getStoreFieldName(t){let{typename:n,fieldName:r}=t,o=this.getFieldPolicy(n,r),i,a=o&&o.keyFn;if(a&&n){let c={typename:n,fieldName:r,field:t.field||null,variables:t.variables},l=Vf(t);for(;a;){let u=a(l,c);if(se(u))a=Lf(u);else{i=u||r;break}}}return i===void 0&&(i=t.field?gf(t.field,t.variables):us(r,Vf(t))),i===!1?r:r===kt(i)?i:r+":"+i}readField(t,n){let r=t.from;if(!r||!(t.field||t.fieldName))return;if(t.typename===void 0){let d=n.store.getFieldValue(r,"__typename");d&&(t.typename=d)}let i=this.getStoreFieldName(t),a=kt(i),c=n.store.getFieldValue(r,i),l=this.getFieldPolicy(t.typename,a),u=l&&l.read;if(u){let d=hS(this,r,t,n,n.store.getStorage(G(r)?r.__ref:r,i));return Uf.withValue(this.cache,u,[c,d])}return c}getReadFunction(t,n){let r=this.getFieldPolicy(t,n);return r&&r.read}getMergeFunction(t,n,r){let o=this.getFieldPolicy(t,n),i=o&&o.merge;return!i&&r&&(o=this.getTypePolicy(r),i=o&&o.merge),i}runMergeFunction(t,n,{field:r,typename:o,merge:i,path:a},c,l){let u=t;if(i===uS)return pS(c.store)(t,n);if(i===dS)return n;c.overwrite&&(t=void 0);let d=c.extensions?.[at]?.deref()?.peekArray(a);if(d){let{current:p,previous:h}=d;if(h&&K(h.incoming,n)&&K(h.streamFieldInfo,p))return h.result}let f=i(t,n,BI(this,void 0,{typename:o,fieldName:r.name.value,field:r,variables:c.variables,path:a},c,l||{},u));return d&&(d.previous={incoming:n,streamFieldInfo:d.current,result:f}),f}};function hS(e,t,n,r,o){let i=e.getStoreFieldName(n),a=kt(i),c=n.variables||r.variables,{toReference:l,canRead:u}=r.store;return{args:Vf(n),field:n.field||null,fieldName:a,storeFieldName:i,variables:c,isReference:G,toReference:l,storage:o,cache:e.cache,canRead:u,readField(...d){return e.readField(Bc(d,t,c),r)},mergeObjects:pS(r.store)}}function BI(e,t,n,r,o,i){var l;let a=C(g({},hS(e,t,n,r,o)),{extensions:r.extensions,existingData:i}),c=r.extensions;if(c&&at in c){let u=c,{[l=at]:d}=u,f=ve(u,[Bs(l)]),p=d?.deref()?.peekArray(n.path);p&&(a.streamFieldInfo=p.current),a.extensions=Object.keys(f).length===0?void 0:f}return a}function Bc(e,t,n){let{0:r,1:o,length:i}=e,a;return typeof r=="string"?a={fieldName:r,from:i>1?o:t}:(a=g({},r),ye.call(a,"from")||(a.from=t)),!1,a.variables===void 0&&(a.variables=n),a}function pS(e){return function(n,r){if(se(n)||se(r))throw ge(106);if(de(n)&&de(r)){let o=e.getFieldValue(n,"__typename"),i=e.getFieldValue(r,"__typename");if(o&&i&&o!==i)return r;if(G(n)&&Vn(r))return e.merge(n.__ref,r),n;if(Vn(n)&&G(r))return e.merge(n,r.__ref),r;if(Vn(n)&&Vn(r))return g(g({},n),r)}return r}}function mS(e){return[e.selectionSet,e.objectOrReference,e.context]}var Vc=class{executeSelectionSet;executeSubSelectedArray;config;knownResults=new WeakMap;constructor(t){this.config=t,this.executeSelectionSet=Dn(n=>{let r=mS(n),o=this.executeSelectionSet.peek(...r);return o||(Nf(n.context.store,n.enclosingRef.__ref),this.execSelectionSetImpl(n))},{max:Me["inMemoryCache.executeSelectionSet"]||5e4,keyArgs:mS,makeCacheKey(n,r,o){if(kr(o.store))return o.store.makeCacheKey(n,G(r)?r.__ref:r,o.varString)}}),this.executeSubSelectedArray=Dn(n=>(Nf(n.context.store,n.enclosingRef.__ref),this.execSubSelectedArrayImpl(n)),{max:Me["inMemoryCache.executeSubSelectedArray"]||1e4,makeCacheKey({field:n,array:r,context:o}){if(kr(o.store))return o.store.makeCacheKey(n,r,o.varString)}})}diffQueryAgainstStore({store:t,query:n,rootId:r="ROOT_QUERY",variables:o,returnPartialData:i=!0}){let a=this.config.cache.policies;o=g(g({},wr(as(n))),o);let c=Yt(r),l=this.executeSelectionSet({selectionSet:_o(n).selectionSet,objectOrReference:c,enclosingRef:c,context:g({store:t,query:n,policies:a,variables:o,varString:Ae(o)},Fc(n,this.config.fragments))}),u;l.missing&&(u=new bs(VI(l.missing),l.missing,n,o));let d=!u,{result:f}=l;return{result:d?f:i?Object.keys(f).length===0?null:f:null,complete:d,missing:u}}isFresh(t,n,r,o){if(kr(o.store)&&this.knownResults.get(t)===r){let i=this.executeSelectionSet.peek(r,n,o);if(i&&t===i.result)return!0}return!1}execSelectionSetImpl({selectionSet:t,objectOrReference:n,enclosingRef:r,context:o}){if(G(n)&&!o.policies.rootTypenamesById[n.__ref]&&!o.store.has(n.__ref))return{result:{},missing:`Dangling reference to missing ${n.__ref} object`};let{variables:i,policies:a,store:c}=o,l=c.getFieldValue(n,"__typename"),u=[],d,f=new tt;typeof l=="string"&&!a.rootIdsByTypename[l]&&u.push({__typename:l});function p(D,E){return D.missing&&(d=f.merge(d,{[E]:D.missing})),D.result}let h=new Set(t.selections);h.forEach(D=>{if(vn(D,i))if(Kt(D)){let E=a.readField({fieldName:D.name.value,field:D,variables:o.variables,from:n},o),x=st(D);E===void 0?Pr.added(D)||(d=f.merge(d,{[x]:`Can't find field '${D.name.value}' on ${G(n)?n.__ref+" object":"object "+JSON.stringify(n,null,2)}`})):se(E)?E.length>0&&(E=p(this.executeSubSelectedArray({field:D,array:E,enclosingRef:r,context:o}),x)):D.selectionSet&&E!=null&&(E=p(this.executeSelectionSet({selectionSet:D.selectionSet,objectOrReference:E,enclosingRef:G(E)?E:r,context:o}),x)),E!==void 0&&u.push({[x]:E})}else{let E=Fn(D,o.lookupFragment);if(!E&&D.kind===w.FRAGMENT_SPREAD)throw ge(107,D.name.value);E&&a.fragmentMatches(E,l)&&E.selectionSet.selections.forEach(h.add,h)}});let y={result:hf(u),missing:d},v=Ln(y);return v.result&&this.knownResults.set(v.result,t),v}execSubSelectedArrayImpl({field:t,array:n,enclosingRef:r,context:o}){let i,a=new tt;function c(l,u){return l.missing&&(i=a.merge(i,{[u]:l.missing})),l.result}return t.selectionSet&&(n=n.filter(l=>l===void 0||o.store.canRead(l))),n=n.map((l,u)=>l===null?null:se(l)?c(this.executeSubSelectedArray({field:t,array:l,enclosingRef:r,context:o}),u):t.selectionSet?c(this.executeSelectionSet({selectionSet:t.selectionSet,objectOrReference:l,enclosingRef:G(l)?l:r,context:o}),u):(!1,l)),{result:n,missing:i}}};function VI(e){try{JSON.stringify(e,(t,n)=>{if(typeof n=="string")throw n;return n})}catch(t){return t}}function $I(e,t,n){if(!t.selectionSet){let r=new Set([n]);r.forEach(o=>{de(o)&&(T(!G(o),108,Xv(e,o),t.name.value),Object.values(o).forEach(r.add,r))})}}function $f(e,t,n){let r=`${t}${n}`,o=e.flavors.get(r);return o||e.flavors.set(r,o=e.clientOnly===t&&e.deferred===n?e:C(g({},e),{clientOnly:t,deferred:n})),o}var $c=class{cache;reader;fragments;constructor(t,n,r){this.cache=t,this.reader=n,this.fragments=r}writeToStore(t,{query:n,result:r,dataId:o,variables:i,overwrite:a,extensions:c}){let l=Le(n),u=eS();i=g(g({},wr(l)),i);let d=C(g({store:t,written:{},merge(p,h){return u.merge(p,h)},variables:i,varString:Ae(i)},Fc(n,this.fragments)),{overwrite:!!a,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map,extensions:c}),f=this.processSelectionSet({result:r||{},dataId:o,selectionSet:l.selectionSet,mergeTree:{map:new Map},context:d,path:[]});if(!G(f))throw ge(109,r);return d.incomingById.forEach(({storeObject:p,mergeTree:h,fieldNodeSet:S},y)=>{let v=Yt(y);if(h&&h.map.size){let D=this.applyMerges(h,v,p,d);if(G(D))return;p=D}if(!1){let D={};S.forEach(R=>{R.selectionSet&&(D[R.name.value]=!0)});let E=R=>D[kt(R)]===!0,x=R=>{let F=h&&h.map.get(R);return!!(F&&F.info&&F.info.merge)};Object.keys(p).forEach(R=>{E(R)&&!x(R)&&zI(v,p,R,d.store)})}t.merge(y,p)}),t.retain(f.__ref),f}processSelectionSet({dataId:t,result:n,selectionSet:r,context:o,mergeTree:i,path:a}){let{policies:c}=this.cache,l={},u=t&&c.rootTypenamesById[t]||Wf(n,r,o.fragmentMap)||t&&o.store.get(t,"__typename");typeof u=="string"&&(l.__typename=u);let d=(...p)=>{let h=Bc(p,l,o.variables);if(G(h.from)){let S=o.incomingById.get(h.from.__ref);if(S){let y=c.readField(C(g({},h),{from:S.storeObject}),o);if(y!==void 0)return y}}return c.readField(h,o)},f=new Set;this.flattenFields(r,n,o,u).forEach((p,h)=>{let S=st(h),y=n[S],v=[...a,h.name.value];if(f.add(h),y!==void 0){let D=c.getStoreFieldName({typename:u,fieldName:h.name.value,field:h,variables:p.variables}),E=gS(i,D),x=this.processFieldValue(y,h,h.selectionSet?$f(p,!1,!1):p,E,v),R;h.selectionSet&&(G(x)||Vn(x))&&(R=d("__typename",x));let F=c.getMergeFunction(u,h.name.value,R);F?E.info={field:h,typename:u,merge:F,path:v}:Qt(["stream"],h)&&Array.isArray(x)&&p.extensions?.[at]?E.info={field:h,typename:u,merge:fS,path:v}:yS(i,D),l=p.merge(l,{[D]:x})}else!1});try{let[p,h]=c.identify(n,{typename:u,selectionSet:r,fragmentMap:o.fragmentMap,storeObject:l,readField:d});t=t||p,h&&(l=o.merge(l,h))}catch(p){if(!t)throw p}if(typeof t=="string"){let p=Yt(t),h=o.written[t]||(o.written[t]=[]);if(h.indexOf(r)>=0||(h.push(r),this.reader&&this.reader.isFresh(n,p,r,o)))return p;let S=o.incomingById.get(t);return S?(S.storeObject=o.merge(S.storeObject,l),S.mergeTree=zf(S.mergeTree,i),f.forEach(y=>S.fieldNodeSet.add(y))):o.incomingById.set(t,{storeObject:l,mergeTree:zc(i)?void 0:i,fieldNodeSet:f}),p}return l}processFieldValue(t,n,r,o,i){return!n.selectionSet||t===null?t:se(t)?t.map((a,c)=>{let l=this.processFieldValue(a,n,r,gS(o,c),[...i,c]);return yS(o,c),l}):this.processSelectionSet({result:t,selectionSet:n.selectionSet,context:r,mergeTree:o,path:i})}flattenFields(t,n,r,o=Wf(n,t,r.fragmentMap)){let i=new Map,{policies:a}=this.cache,c=new Fe(!1);return(function l(u,d){let f=c.lookup(u,d.clientOnly,d.deferred);f.visited||(f.visited=!0,u.selections.forEach(p=>{if(!vn(p,r.variables))return;let{clientOnly:h,deferred:S}=d;if(!(h&&S)&&Cr(p.directives)&&p.directives.forEach(y=>{let v=y.name.value;if(v==="client"&&(h=!0),v==="defer"){let D=Er(y,r.variables);(!D||D.if!==!1)&&(S=!0)}}),Kt(p)){let y=i.get(p);y&&(h=h&&y.clientOnly,S=S&&y.deferred),i.set(p,$f(r,h,S))}else{let y=Fn(p,r.lookupFragment);if(!y&&p.kind===w.FRAGMENT_SPREAD)throw ge(111,p.name.value);y&&a.fragmentMatches(y,o,n,r.variables)&&l(y.selectionSet,$f(r,h,S))}}))})(t,r),i}applyMerges(t,n,r,o,i){if(t.map.size&&!G(r)){let a=!se(r)&&(G(n)||Vn(n))?n:void 0,c=r;a&&!i&&(i=[G(a)?a.__ref:a]);let l,u=(d,f)=>se(d)?typeof f=="number"?d[f]:void 0:o.store.getFieldValue(d,String(f));t.map.forEach((d,f)=>{let p=u(a,f),h=u(c,f);if(h===void 0)return;i&&i.push(f);let S=this.applyMerges(d,p,h,o,i);S!==h&&(l=l||new Map,l.set(f,S)),i&&T(i.pop()===f)}),l&&(r=se(c)?c.slice(0):g({},c),l.forEach((d,f)=>{r[f]=d}))}return t.info?this.cache.policies.runMergeFunction(n,r,t.info,o,i&&o.store.getStorage(...i)):r}},SS=[];function gS({map:e},t){return e.has(t)||e.set(t,SS.pop()||{map:new Map}),e.get(t)}function zf(e,t){if(e===t||!t||zc(t))return e;if(!e||zc(e))return t;let n=e.info&&t.info?g(g({},e.info),t.info):e.info||t.info,r=e.map.size&&t.map.size,o=r?new Map:e.map.size?e.map:t.map,i={info:n,map:o};if(r){let a=new Set(t.map.keys());e.map.forEach((c,l)=>{i.map.set(l,zf(c,t.map.get(l))),a.delete(l)}),a.forEach(c=>{i.map.set(c,zf(t.map.get(c),e.map.get(c)))})}return i}function zc(e){return!e||!(e.info||e.map.size)}function yS({map:e},t){let n=e.get(t);n&&zc(n)&&(SS.push(n),e.delete(t))}var vS=new Set;function zI(e,t,n,r){let o=f=>{let p=r.getFieldValue(f,n);return typeof p=="object"&&p},i=o(e);if(!i)return;let a=o(t);if(!a||G(i)||K(i,a)||Object.keys(i).every(f=>r.getFieldValue(a,f)!==void 0))return;let c=r.getFieldValue(e,"__typename")||r.getFieldValue(t,"__typename"),l=kt(n),u=`${c}.${l}`;if(vS.has(u))return;vS.add(u);let d=[];!se(i)&&!se(a)&&[i,a].forEach(f=>{let p=r.getFieldValue(f,"__typename");typeof p=="string"&&!d.includes(p)&&d.push(p)}),!1}function Wf(e,t,n){let r;for(let o of t.selections)if(Kt(o)){if(o.name.value==="__typename")return e[st(o)]}else r?r.push(o):r=[o];if(typeof e.__typename=="string")return e.__typename;if(r)for(let o of r){let i=Wf(e,Fn(o,n).selectionSet,n);if(typeof i=="string")return i}}var Nr=class extends Oo{data;optimisticData;config;watches=new Set;storeReader;storeWriter;addTypenameTransform=new bn(Pr);maybeBroadcastWatch;assumeImmutableResults=!0;policies;makeVar=Bf;constructor(t={}){super(),this.config=Jv(t),this.policies=new jc({cache:this,dataIdFromObject:this.config.dataIdFromObject,possibleTypes:this.config.possibleTypes,typePolicies:this.config.typePolicies}),this.init()}init(){let t=this.data=new _r.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=t.stump,this.resetResultCache()}resetResultCache(){let{fragments:t}=this.config;this.addTypenameTransform.resetCache(),t?.resetCaches(),this.storeWriter=new $c(this,this.storeReader=new Vc({cache:this,fragments:t}),t),this.maybeBroadcastWatch=Dn((n,r)=>this.broadcastWatch(n,r),{max:Me["inMemoryCache.maybeBroadcastWatch"]||5e3,makeCacheKey:n=>{let r=n.optimistic?this.optimisticData:this.data;if(kr(r)){let{optimistic:o,id:i,variables:a}=n;return r.makeCacheKey(n.query,n.callback,Ae({optimistic:o,id:i,variables:a}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach(n=>n.resetCaching())}restore(t){return this.init(),t&&this.data.replace(t),this}extract(t=!1){return(t?this.optimisticData:this.data).extract()}read(t){let{returnPartialData:n=!1}=t;return this.storeReader.diffQueryAgainstStore(C(g({},t),{store:t.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:n})).result}write(t){try{return++this.txCount,this.storeWriter.writeToStore(this.data,t)}finally{!--this.txCount&&t.broadcast!==!1&&this.broadcastWatches()}}modify(t){if(ye.call(t,"id")&&!t.id)return!1;let n=t.optimistic?this.optimisticData:this.data;try{return++this.txCount,n.modify(t.id||"ROOT_QUERY",t.fields,!1)}finally{!--this.txCount&&t.broadcast!==!1&&this.broadcastWatches()}}diff(t){return this.storeReader.diffQueryAgainstStore(C(g({},t),{store:t.optimistic?this.optimisticData:this.data,rootId:t.id||"ROOT_QUERY",config:this.config}))}watch(t){return this.watches.size||cS(this),this.watches.add(t),t.immediate&&this.maybeBroadcastWatch(t),()=>{this.watches.delete(t)&&!this.watches.size&&jf(this),this.maybeBroadcastWatch.forget(t)}}gc(t){Ae.reset(),Bn.reset();let n=this.optimisticData.gc();return t&&!this.txCount&&t.resetResultCache&&this.resetResultCache(),n}retain(t,n){return(n?this.optimisticData:this.data).retain(t)}release(t,n){return(n?this.optimisticData:this.data).release(t)}identify(t){if(G(t))return t.__ref;try{return this.policies.identify(t)[0]}catch(n){!1}}evict(t){if(!t.id){if(ye.call(t,"id"))return!1;t=C(g({},t),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(t,this.data)}finally{!--this.txCount&&t.broadcast!==!1&&this.broadcastWatches()}}reset(t){return this.init(),Ae.reset(),t&&t.discardWatches?(this.watches.forEach(n=>this.maybeBroadcastWatch.forget(n)),this.watches.clear(),jf(this)):this.broadcastWatches(),Promise.resolve()}removeOptimistic(t){let n=this.optimisticData.removeLayer(t);n!==this.optimisticData&&(this.optimisticData=n,this.broadcastWatches())}txCount=0;batch(t){let{update:n,optimistic:r=!0,removeOptimistic:o,onWatchUpdated:i}=t,a,c=u=>{let{data:d,optimisticData:f}=this;++this.txCount,u&&(this.data=this.optimisticData=u);try{return a=n(this)}finally{--this.txCount,this.data=d,this.optimisticData=f}},l=new Set;return i&&!this.txCount&&this.broadcastWatches(C(g({},t),{onWatchUpdated(u){return l.add(u),!1}})),typeof r=="string"?this.optimisticData=this.optimisticData.addLayer(r,c):r===!1?c(this.data):c(),typeof o=="string"&&(this.optimisticData=this.optimisticData.removeLayer(o)),i&&l.size?(this.broadcastWatches(C(g({},t),{onWatchUpdated(u,d){let f=i.call(this,u,d);return f!==!1&&l.delete(u),f}})),l.size&&l.forEach(u=>this.maybeBroadcastWatch.dirty(u))):this.broadcastWatches(t),a}performTransaction(t,n){return this.batch({update:t,optimistic:n||n!==null})}transformDocument(t){return this.addTypenameTransform.transformDocument(this.addFragmentsToDocument(t))}fragmentMatches(t,n){return this.policies.fragmentMatches(t,n)}lookupFragment(t){return this.config.fragments?.lookup(t)||null}resolvesClientField(t,n){return!!this.policies.getReadFunction(t,n)}broadcastWatches(t){if(!this.txCount){let n=this.onAfterBroadcast,r=new Set;this.onAfterBroadcast=o=>{r.add(o)};try{this.watches.forEach(o=>this.maybeBroadcastWatch(o,t)),r.forEach(o=>o())}finally{this.onAfterBroadcast=n}}}addFragmentsToDocument(t){let{fragments:n}=this.config;return n?n.transform(t):t}broadcastWatch(t,n){let{lastDiff:r}=t,o=this.diff(t);n&&(t.optimistic&&typeof n.optimistic=="string"&&(o.fromOptimisticTransaction=!0),n.onWatchUpdated&&n.onWatchUpdated.call(this,t,o,r)===!1)||(!r||!K(r.result,o.result))&&t.callback(t.lastDiff=o,r)}};!1;function Ho(e,t){return typeof e=="object"&&e!==null&&e[Symbol.for("apollo.error")]===t}function Uo(e){Object.defineProperty(e,Symbol.for("apollo.error"),{value:e.name,enumerable:!1,writable:!1,configurable:!1})}function DS(e){return e.map(t=>t.message||"Error message not found.").join(`
`)}var bS=(()=>{class e extends Error{static is(n){return Ho(n,"CombinedProtocolErrors")}static formatMessage=DS;errors;constructor(n){super(e.formatMessage(n,{defaultFormatMessage:DS})),this.name="CombinedProtocolErrors",this.errors=n,Uo(this),Object.setPrototypeOf(this,e.prototype)}}return e})();function ES(e){return e!==null&&typeof e=="object"&&typeof e.message=="string"&&typeof e.name=="string"&&(typeof e.stack=="string"||typeof e.stack>"u")}var Wc=class e extends Error{static is(t){return Ho(t,"UnconventionalError")}constructor(t){super("An error of unexpected shape occurred.",{cause:t}),this.name="UnconventionalError",Uo(this),Object.setPrototypeOf(this,e.prototype)}};function TS(e){return e.filter(t=>t).map(t=>t.message||"Error message not found.").join(`
`)}var xr=(()=>{class e extends Error{static is(n){return Ho(n,"CombinedGraphQLErrors")}static formatMessage=TS;errors;data;extensions;constructor(n,r=n.errors||[]){super(e.formatMessage(r,{result:n,defaultFormatMessage:TS})),this.errors=r,this.data=n.data,this.extensions=n.extensions,this.name="CombinedGraphQLErrors",Uo(this),Object.setPrototypeOf(this,e.prototype)}}return e})();var WI=new WeakSet;function Gf(e){WI.add(e)}var Gc=Symbol();function wS(e){return"extensions"in e?bS.is(e.extensions[Gc]):!1}function CS(e){return ES(e)?e:typeof e=="string"?new Error(e,{cause:e}):new Wc(e)}var H=(function(e){return e[e.loading=1]="loading",e[e.setVariables=2]="setVariables",e[e.fetchMore=3]="fetchMore",e[e.refetch=4]="refetch",e[e.poll=6]="poll",e[e.ready=7]="ready",e[e.error=8]="error",e[e.streaming=9]="streaming",e})(H||{});var{assign:IS,hasOwnProperty:GI}=Object,jo={loading:!0,networkStatus:H.loading,data:void 0,dataState:"empty",partial:!0},qf={loading:!1,networkStatus:H.ready,data:void 0,dataState:"empty",partial:!0},Bo=class{options;queryName;variablesUnknown=!1;_lastWrite;get query(){return this.lastQuery}get variables(){return this.options.variables}unsubscribeFromCache;input;subject;isTornDown;queryManager;subscriptions=new Set;waitForNetworkResult;lastQuery;linkSubscription;pollingInfo;get networkStatus(){return this.subject.getValue().result.networkStatus}get cache(){return this.queryManager.cache}constructor({queryManager:t,options:n,transformedQuery:r=t.transform(n.query)}){this.queryManager=t,this.waitForNetworkResult=n.fetchPolicy==="network-only",this.isTornDown=!1,this.subscribeToMore=this.subscribeToMore.bind(this),this.maskResult=this.maskResult.bind(this);let{watchQuery:{fetchPolicy:o="cache-first"}={}}=t.defaultOptions,{fetchPolicy:i=o,initialFetchPolicy:a=i==="standby"?o:i}=n;n[Sf]&&(T(i==="standby",80),this.variablesUnknown=!0),this.lastQuery=r,this.options=C(g({},n),{initialFetchPolicy:a,fetchPolicy:i,variables:this.getVariablesWithDefaults(n.variables)}),this.initializeObservablesQueue(),this["@@observable"]=()=>this,Symbol.observable&&(this[Symbol.observable]=()=>this);let c=Le(this.query);this.queryName=c&&c.name&&c.name.value}initializeObservablesQueue(){this.subject=new ce({query:this.query,variables:this.variables,result:jo,meta:{}});let t=this.subject.pipe(Pe({subscribe:()=>{this.subject.observed||(this.reobserve(),setTimeout(()=>this.updatePolling()))},unsubscribe:()=>{this.subject.observed||this.tearDownQuery()}}),No(({query:n,variables:r,result:o,meta:i},a)=>{let{shouldEmit:c}=i;if(o===jo&&(a.previous=void 0,a.previousVariables=void 0),this.options.fetchPolicy==="standby"||c===2)return;if(c===1)return d();let{previous:l,previousVariables:u}=a;if(l){let f=this.queryManager.getDocumentInfo(n),p=this.queryManager.dataMasking,h=p?f.nonReactiveQuery:n;if((p||f.hasNonreactiveDirective?fs(h,l,o,r):K(l,o))&&K(u,r))return}if(c===3&&(!this.options.notifyOnNetworkStatusChange||K(l,o)))return;return d();function d(){return a.previous=o,a.previousVariables=r,o}},()=>({})));this.pipe=t.pipe.bind(t),this.subscribe=t.subscribe.bind(t),this.input=new he,this.input.complete=()=>{},this.input.pipe(this.operator).subscribe(this.subject)}subscribe;pipe;[Symbol.observable];"@@observable";getCacheDiff({optimistic:t=!0}={}){return this.cache.diff({query:this.query,variables:this.variables,returnPartialData:!0,optimistic:t})}getInitialResult(t){let n=t||this.options.fetchPolicy;this.queryManager.prioritizeCacheValues&&(n==="network-only"||n==="cache-and-network")&&(n="cache-first");let r=()=>{let o=this.getCacheDiff(),i=this.options.returnPartialData||o.complete?o.result??void 0:void 0;return this.maskResult({data:i,dataState:o.complete?"complete":i===void 0?"empty":"partial",loading:!o.complete,networkStatus:o.complete?H.ready:H.loading,partial:!o.complete})};switch(n){case"cache-only":return C(g({},r()),{loading:!1,networkStatus:H.ready});case"cache-first":return r();case"cache-and-network":return C(g({},r()),{loading:!0,networkStatus:H.loading});case"standby":return qf;default:return jo}}resubscribeCache(){let{variables:t,fetchPolicy:n}=this.options,r=this.query,o=n==="standby"||n==="no-cache"||this.waitForNetworkResult,i=!ws({query:r,variables:t},this.unsubscribeFromCache)&&!this.waitForNetworkResult;if((o||i)&&this.unsubscribeFromCache?.(),o||!i)return;let a={query:r,variables:t,optimistic:!0,watcher:this,callback:l=>{let u=this.queryManager.getDocumentInfo(r);if((u.hasClientExports||u.hasForcedResolvers)&&(a.lastDiff=void 0),a.lastOwnDiff===l)return;let{result:d}=this.subject.getValue();!l.complete&&(d.error||d===jo||d===qf)||K(d.data,l.result)||this.scheduleNotify()}},c=this.cache.watch(a);this.unsubscribeFromCache=Object.assign(()=>{this.unsubscribeFromCache=void 0,c()},{query:r,variables:t})}stableLastResult;getCurrentResult(){let{result:t}=this.subject.getValue(),n=t.networkStatus===H.error||this.hasObservers()||this.options.fetchPolicy==="no-cache"?t:this.getInitialResult();return n===jo&&(n=this.getInitialResult()),K(this.stableLastResult,n)||(this.stableLastResult=n),this.stableLastResult}refetch(t){let{fetchPolicy:n}=this.options,r={pollInterval:0};if(n==="no-cache"?r.fetchPolicy="no-cache":r.fetchPolicy="network-only",!1){let o=as(this.query),i=o.variableDefinitions;(!i||!i.some(a=>a.variable.name.value==="variables"))&&!1&&T.warn(81,t,o.name?.value||o)}return t&&!K(this.variables,t)&&(r.variables=this.options.variables=this.getVariablesWithDefaults(g(g({},this.variables),t))),this._lastWrite=void 0,this._reobserve(r,{newNetworkStatus:H.refetch})}fetchMore({query:t,variables:n,context:r,errorPolicy:o,updateQuery:i}){T(this.options.fetchPolicy!=="cache-only",82,xe(this.query,"(anonymous)"));let a=C(g({},gt(this.options,{errorPolicy:"none"},{query:t,context:r,errorPolicy:o})),{variables:t?n:g(g({},this.variables),n),fetchPolicy:"no-cache",notifyOnNetworkStatusChange:this.options.notifyOnNetworkStatusChange});a.query=this.transformDocument(a.query),this.lastQuery=t?this.transformDocument(this.options.query):a.query;let c=!1,l=this.options.fetchPolicy!=="no-cache";l||T(i,83);let{finalize:u,pushNotification:d}=this.pushOperation(H.fetchMore);d({source:"newNetworkStatus",kind:"N",value:{}},{shouldEmit:3});let{promise:f,operator:p}=RS(),{observable:h}=this.queryManager.fetchObservableWithInfo(a,{networkStatus:H.fetchMore,exposeExtensions:!0}),S=h.pipe(p,Ee(y=>y.kind==="N"&&y.source==="network")).subscribe({next:y=>{c=!1;let v=y.value,D=v[ps];if(Ds(y.value.networkStatus)&&u(),l){let E=this.getCacheDiff();this.cache.batch({update:x=>{i?x.updateQuery({query:this.query,variables:this.variables,returnPartialData:!0,optimistic:!1,extensions:D},R=>i(R,{fetchMoreResult:v.data,variables:a.variables})):x.writeQuery({query:a.query,variables:a.variables,data:v.data,extensions:D})},onWatchUpdated:(x,R)=>{if(x.watcher===this&&!K(R.result,E.result)){c=!0;let F=this.getCurrentResult();Mr(v.networkStatus)&&d({kind:"N",source:"network",value:C(g({},F),{networkStatus:v.networkStatus===H.error?H.ready:v.networkStatus,loading:!1,data:R.result,dataState:v.dataState==="streaming"?"streaming":"complete"})})}}})}else{let E=this.getCurrentResult(),x=i(E.data,{fetchMoreResult:v.data,variables:a.variables});d({kind:"N",value:C(g({},E),{networkStatus:H.ready,loading:!1,data:x,dataState:E.dataState==="streaming"?"streaming":"complete"}),source:"network"})}}});return Nc(f.then(y=>Hn(this.maskResult(y))).finally(()=>{if(S.unsubscribe(),u(),l&&!c){let y=this.getCurrentResult();y.dataState==="streaming"?d({kind:"N",source:"network",value:C(g({},y),{dataState:"complete",networkStatus:H.ready})}):d({kind:"N",source:"newNetworkStatus",value:{}},{shouldEmit:1})}}))}subscribeToMore(t){let n=this.queryManager.startGraphQLSubscription({query:t.document,variables:t.variables,context:t.context}).subscribe({next:r=>{let{updateQuery:o,onError:i}=t,{error:a}=r;if(a){i?i(a):T.error(84,a);return}o&&this.updateQuery((c,l)=>o(c,g({subscriptionData:r},l)))}});return this.subscriptions.add(n),()=>{this.subscriptions.delete(n)&&n.unsubscribe()}}applyOptions(t){let n=gt(this.options,t||{});IS(this.options,n),this.updatePolling()}setVariables(t){return ee(this,null,function*(){return t=this.getVariablesWithDefaults(t),K(this.variables,t)?Hn(this.getCurrentResult()):(this.options.variables=t,this.hasObservers()?this._reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:t},{newNetworkStatus:H.setVariables}):Hn(this.getCurrentResult()))})}updateQuery(t){let{queryManager:n}=this,{result:r,complete:o}=this.getCacheDiff({optimistic:!1}),i=t(r,{variables:this.variables,complete:!!o,previousData:r});i&&(this.cache.writeQuery({query:this.options.query,data:i,variables:this.variables}),n.broadcastQueries())}startPolling(t){this.options.pollInterval=t,this.updatePolling()}stopPolling(){this.options.pollInterval=0,this.updatePolling()}applyNextFetchPolicy(t,n){if(n.nextFetchPolicy){let{fetchPolicy:r="cache-first",initialFetchPolicy:o=r}=n;r==="standby"||(typeof n.nextFetchPolicy=="function"?n.fetchPolicy=n.nextFetchPolicy.call(n,r,{reason:t,options:n,observable:this,initialFetchPolicy:o}):t==="variables-changed"?n.fetchPolicy=o:n.fetchPolicy=n.nextFetchPolicy)}return n.fetchPolicy}fetch(t,n,r,o){let i=this.options.fetchPolicy;t.context??={};let a=!1,c=()=>{a=!0},l=v=>new O(D=>{try{return v.subscribe({next(E){a=!0,D.next(E)},error:E=>D.error(E),complete:()=>D.complete()})}finally{a||(h.override=n,this.input.next({kind:"N",source:"newNetworkStatus",value:{resetError:!0},query:f,variables:p,meta:{shouldEmit:3,fetchPolicy:i}}))}}),{observable:u,fromLink:d}=this.queryManager.fetchObservableWithInfo(t,{networkStatus:n,query:r,onCacheHit:c,fetchQueryOperator:l,observableQuery:this}),{query:f,variables:p}=this,h={abort:()=>{y.unsubscribe()},query:f,variables:p};this.activeOperations.add(h);let S=n==H.refetch||n==H.setVariables;u=u.pipe(o,Ft());let y=u.pipe(Pe({next:v=>{v.source==="newNetworkStatus"||v.kind==="N"&&v.value.loading?h.override=n:delete h.override},finalize:()=>this.activeOperations.delete(h)})).subscribe({next:v=>{let D={};S&&v.kind==="N"&&"loading"in v.value&&!v.value.loading&&(S=!1,D.shouldEmit=1),this.input.next(C(g({},v),{query:f,variables:p,meta:D}))}});return{fromLink:d,subscription:y,observable:u}}didWarnCacheOnlyPolling=!1;updatePolling(){if(this.queryManager.ssrMode)return;let{pollingInfo:t,options:{fetchPolicy:n,pollInterval:r}}=this;if(!r||!this.hasObservers()||n==="cache-only"){!1,this.cancelPolling();return}if(t?.interval===r)return;let o=t||(this.pollingInfo={});o.interval=r;let i=()=>{this.pollingInfo&&(!Mr(this.networkStatus)&&!this.options.skipPollAttempt?.()?this._reobserve({fetchPolicy:this.options.initialFetchPolicy==="no-cache"?"no-cache":"network-only"},{newNetworkStatus:H.poll}).then(a,a):a())},a=()=>{let c=this.pollingInfo;c&&(clearTimeout(c.timeout),c.timeout=setTimeout(i,c.interval))};a()}cancelPolling(){this.pollingInfo&&(clearTimeout(this.pollingInfo.timeout),delete this.pollingInfo)}reobserve(t){return this._reobserve(t)}_reobserve(t,n){this.isTornDown=!1;let{newNetworkStatus:r}=n||{};this.queryManager.obsQueries.add(this);let o=r===H.refetch||r===H.poll,i=this.variables,a=this.options.fetchPolicy,c=gt(this.options,t||{});this.variablesUnknown&&=c.fetchPolicy==="standby";let l=o?c:IS(this.options,c),u=this.transformDocument(l.query);this.lastQuery=u,t&&"variables"in t&&(l.variables=this.getVariablesWithDefaults(t.variables)),o||(this.updatePolling(),t&&t.variables&&!K(t.variables,i)&&l.fetchPolicy!=="standby"&&(l.fetchPolicy===a||typeof l.nextFetchPolicy=="function")&&(this.applyNextFetchPolicy("variables-changed",l),r===void 0&&(r=H.setVariables)));let d=this.networkStatus;r||(r=H.loading,d!==H.loading&&t?.variables&&!K(t.variables,i)&&(r=H.setVariables),l.fetchPolicy==="standby"&&(r=H.ready)),l.fetchPolicy==="standby"&&this.cancelPolling(),this.resubscribeCache();let{promise:f,operator:p}=RS(l.fetchPolicy==="standby"?{data:void 0}:void 0),{subscription:h,observable:S,fromLink:y}=this.fetch(l,r,u,p);!o&&(y||!this.linkSubscription)&&(this.linkSubscription&&this.linkSubscription.unsubscribe(),this.linkSubscription=h);let v=Object.assign(Nc(f.then(D=>Hn(this.maskResult(D))).finally(()=>{!this.hasObservers()&&this.activeOperations.size===0&&this.tearDownQuery()})),{retain:()=>{let D=S.subscribe({}),E=()=>D.unsubscribe();return f.then(E,E),v}});return v}hasObservers(){return this.subject.observed}stop(){this.subject.complete(),this.initializeObservablesQueue(),this.tearDownQuery()}tearDownQuery(){this.isTornDown||(this.resetNotifications(),this.unsubscribeFromCache?.(),this.linkSubscription&&(this.linkSubscription.unsubscribe(),delete this.linkSubscription),this.stopPolling(),this.subscriptions.forEach(t=>t.unsubscribe()),this.subscriptions.clear(),this.queryManager.obsQueries.delete(this),this.isTornDown=!0,this.abortActiveOperations(),this._lastWrite=void 0)}transformDocument(t){return this.queryManager.transform(t)}maskResult(t){let n=this.queryManager.maskOperation({document:this.query,data:t.data,fetchPolicy:this.options.fetchPolicy,cause:this});return n===t.data?t:C(g({},t),{data:n})}dirty=!1;notifyTimeout;resetNotifications(){this.notifyTimeout&&(clearTimeout(this.notifyTimeout),this.notifyTimeout=void 0),this.dirty=!1}scheduleNotify(){this.dirty||(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout(()=>this.notify(!0),0)))}notify(t=!1){if(!t){let r=this.queryManager.getDocumentInfo(this.query);if(r.hasClientExports||r.hasForcedResolvers)return}let{dirty:n}=this;if(this.resetNotifications(),n&&(this.options.fetchPolicy==="cache-only"||this.options.fetchPolicy==="cache-and-network"||!this.activeOperations.size)){let r=this.getCacheDiff();K(r.result,this.getCacheDiff({optimistic:!1}).result)?this.reobserveCacheFirst():this.input.next({kind:"N",value:{data:r.result,dataState:r.complete?"complete":r.result?"partial":"empty",networkStatus:H.ready,loading:!1,error:void 0,partial:!r.complete},source:"cache",query:this.query,variables:this.variables,meta:{}})}}activeOperations=new Set;pushOperation(t){let n=!1,{query:r,variables:o}=this,i=()=>{this.activeOperations.delete(a)},a={override:t,abort:()=>{n=!0,i()},query:r,variables:o};return this.activeOperations.add(a),{finalize:i,pushNotification:(c,l)=>{n||this.input.next(C(g({},c),{query:r,variables:o,meta:g({},l)}))}}}calculateNetworkStatus(t){return t===H.streaming?t:Array.from(this.activeOperations.values()).reverse().find(r=>ws(r,this)&&r.override!==void 0)?.override??t}abortActiveOperations(){this.activeOperations.forEach(t=>t.abort())}reset(){let t=this.options.fetchPolicy==="cache-only";this.setResult(t?qf:jo,{shouldEmit:t?1:2}),this.abortActiveOperations()}setResult(t,n){this.input.next({source:"setResult",kind:"N",value:t,query:this.query,variables:this.variables,meta:g({},n)})}operator=No(t=>{let{query:n,variables:r,meta:o}=t;if(t.source==="setResult")return{query:n,variables:r,result:t.value,meta:o};if(t.kind==="C"||!ws(t,this))return;let i,a=this.subject.getValue();if(t.source==="cache"){if(i=t.value,i.networkStatus===H.ready&&i.partial&&(!this.options.returnPartialData||a.result.networkStatus===H.error)&&this.options.fetchPolicy!=="cache-only")return}else if(t.source==="network")this.waitForNetworkResult&&(this.waitForNetworkResult=!1,this.resubscribeCache()),i=t.kind==="E"?C(g({},ws(a,t)?a.result:{data:void 0,dataState:"empty",partial:!0}),{error:t.error,networkStatus:H.error,loading:!1}):t.value,t.kind==="E"&&i.dataState==="streaming"&&(i.dataState="complete"),i.error&&(o.shouldEmit=1);else if(t.source==="newNetworkStatus"){let c=ws(a,t)?a.result:this.getInitialResult(o.fetchPolicy),{resetError:l}=t.value,u=l?void 0:c.error,d=u?H.error:H.ready;i=C(g({},c),{error:u,networkStatus:d})}return T(i),i.error||delete i.error,i.networkStatus=this.calculateNetworkStatus(i.networkStatus),i.loading=Mr(i.networkStatus),i=this.maskResult(i),{query:n,variables:r,result:i,meta:o}});reobserveCacheFirst(){let{fetchPolicy:t,nextFetchPolicy:n}=this.options;t==="cache-and-network"||t==="network-only"?this.reobserve({fetchPolicy:"cache-first",nextFetchPolicy(r,o){return this.nextFetchPolicy=n,typeof this.nextFetchPolicy=="function"?this.nextFetchPolicy(r,o):t}}):this.reobserve()}getVariablesWithDefaults(t){return this.queryManager.getVariables(this.query,t)}};function PS(e){!1}function ws(e,t){return!!(e&&t&&e.query===t.query&&K(e.variables,t.variables))}function RS(e){let t=e,n,r,o=new Promise((a,c)=>{n=a,r=c}),i=Pe({next(a){if(a.kind==="E")return r(a.error);a.kind==="N"&&a.source!=="newNetworkStatus"&&!a.value.loading&&(t=a.value)},finalize:()=>{if(t)n(t);else{let a="The operation was aborted.",c="AbortError";r(typeof DOMException<"u"?new DOMException(a,c):Object.assign(new Error(a),{name:c}))}}});return{promise:o,operator:i}}var MS={},Vo=new WeakMap;function Qf(e,t){let n=e[t];typeof n=="function"&&(e[t]=function(){return Vo.set(e,(Vo.get(e)+1)%1e15),n.apply(this,arguments)})}var _S=new WeakMap,$o=class{lastRequestId=1;cache;queryManager;id;observableQuery;incremental;constructor(t,n){let r=this.cache=t.cache,o=(_S.get(t)||0)+1;_S.set(t,o),this.id=o+"",this.observableQuery=n,this.queryManager=t,Vo.has(r)||(Vo.set(r,0),Qf(r,"evict"),Qf(r,"modify"),Qf(r,"reset"))}_lastWrite;get lastWrite(){return(this.observableQuery||this)._lastWrite}set lastWrite(t){(this.observableQuery||this)._lastWrite=t}resetLastWrite(){this.lastWrite=void 0}shouldWrite(t,n){let{lastWrite:r}=this;return!(r&&r.dmCount===Vo.get(this.cache)&&K(n,r.variables)&&K(t.data,r.result.data)&&t.extensions?.[at]===r.result.extensions?.[at])}get hasNext(){return this.incremental?this.incremental.hasNext:!1}maybeHandleIncrementalResult(t,n,r){let{incrementalHandler:o}=this.queryManager;return o.isIncrementalResult(n)?(this.incremental||=o.startRequest({query:r}),this.incremental.handle(t,n)):n}markQueryResult(t,{document:n,variables:r,errorPolicy:o,cacheWriteBehavior:i}){let a={query:n,variables:r,returnPartialData:!0,optimistic:!0};this.observableQuery?.resetNotifications();let c=i===0,l=c?void 0:this.cache.diff(a),u=this.maybeHandleIncrementalResult(l?.result,t,n);return c||(Kf(u,o)?this.cache.batch({onWatchUpdated:(d,f)=>{d.watcher===this.observableQuery&&(d.lastOwnDiff=f)},update:d=>{if(this.shouldWrite(u,r))d.writeQuery({query:n,data:u.data,variables:r,overwrite:i===1,extensions:u.extensions}),this.lastWrite={result:u,variables:r,dmCount:Vo.get(this.cache)};else if(l&&l.complete){u=C(g({},u),{data:l.result});return}let f=d.diff(a);f.complete&&(u=C(g({},u),{data:f.result}))}}):this.lastWrite=void 0),u}markMutationResult(t,n,r=this.cache){let o=[],i=n.cacheWriteBehavior===0,a=this.maybeHandleIncrementalResult(i?void 0:r.diff({id:"ROOT_MUTATION",query:this.queryManager.getDocumentInfo(n.document).asQuery,variables:n.variables,optimistic:!1,returnPartialData:!0}).result,t,n.document);if(n.errorPolicy==="ignore"&&(a=C(g({},a),{errors:[]})),yn(a)&&n.errorPolicy==="none")return Promise.resolve(a);let c=()=>C(g({},a),{dataState:this.hasNext?"streaming":"complete"});if(!i&&Kf(a,n.errorPolicy)){o.push({result:a.data,dataId:"ROOT_MUTATION",query:n.document,variables:n.variables,extensions:a.extensions});let{updateQueries:u}=n;u&&this.queryManager.getObservableQueries("all").forEach(d=>{let f=d&&d.queryName;if(!f||!Object.hasOwnProperty.call(u,f))return;let p=u[f],{query:h,variables:S}=d,{result:y,complete:v}=d.getCacheDiff({optimistic:!1});if(v&&y){let D=p(y,{mutationResult:c(),queryName:h&&xe(h)||void 0,queryVariables:S});D&&o.push({result:D,dataId:"ROOT_QUERY",query:h,variables:S})}})}let l=n.refetchQueries;if(typeof l=="function"&&(l=l(c())),o.length>0||(l||"").length>0||n.update||n.onQueryUpdated||n.removeOptimistic){let u=[];if(this.queryManager.refetchQueries({updateCache:d=>{i||o.forEach(p=>d.write(p));let{update:f}=n;if(f){if(!i){let p=d.diff({id:"ROOT_MUTATION",query:this.queryManager.getDocumentInfo(n.document).asQuery,variables:n.variables,optimistic:!1,returnPartialData:!0});p.complete&&(a=C(g({},a),{data:p.result}))}this.hasNext||f(d,a,{context:n.context,variables:n.variables})}!i&&!n.keepRootFields&&!this.hasNext&&d.modify({id:"ROOT_MUTATION",fields(p,{fieldName:h,DELETE:S}){return h==="__typename"?p:S}})},include:l,optimistic:!1,removeOptimistic:n.removeOptimistic,onQueryUpdated:n.onQueryUpdated||null}).forEach(d=>u.push(d)),n.awaitRefetchQueries||n.onQueryUpdated)return Promise.all(u).then(()=>a)}return Promise.resolve(a)}markMutationOptimistic(t,n){let r=typeof t=="function"?t(n.variables,{IGNORE:MS}):t;return r===MS?!1:(this.cache.recordOptimisticTransaction(o=>{try{this.markMutationResult({data:r},n,o)}catch(i){T.error(i)}},this.id),!0)}markSubscriptionResult(t,{document:n,variables:r,errorPolicy:o,cacheWriteBehavior:i}){i!==0&&(Kf(t,o)&&this.cache.write({query:n,result:t.data,dataId:"ROOT_SUBSCRIPTION",variables:r,extensions:t.extensions}),this.queryManager.broadcastQueries())}};function Kf(e,t="none"){let n=t==="ignore"||t==="all",r=!yn(e);return!r&&n&&e.data&&(r=!0),r}var qc=class{defaultOptions;client;clientOptions;assumeImmutableResults;documentTransform;ssrMode;defaultContext;dataMasking;incrementalHandler;localState;queryDeduplication;prioritizeCacheValues=!1;onBroadcast;mutationStore;obsQueries=new Set;fetchCancelFns=new Map;constructor(t){let n=new bn(o=>this.cache.transformDocument(o),{cache:!1});this.client=t.client,this.defaultOptions=t.defaultOptions,this.queryDeduplication=t.queryDeduplication,this.clientOptions=t.clientOptions,this.ssrMode=t.ssrMode,this.assumeImmutableResults=t.assumeImmutableResults,this.dataMasking=t.dataMasking,this.localState=t.localState,this.incrementalHandler=t.incrementalHandler;let r=t.documentTransform;this.documentTransform=r?n.concat(r).concat(n):n,this.defaultContext=t.defaultContext||{},(this.onBroadcast=t.onBroadcast)&&(this.mutationStore={})}get link(){return this.client.link}get cache(){return this.client.cache}stop(){this.obsQueries.forEach(t=>t.stop()),this.cancelPendingFetches(ge(87))}cancelPendingFetches(t){this.fetchCancelFns.forEach(n=>n(t)),this.fetchCancelFns.clear()}mutate(h){return ee(this,arguments,function*({mutation:t,variables:n,optimisticResponse:r,updateQueries:o,refetchQueries:i=[],awaitRefetchQueries:a=!1,update:c,onQueryUpdated:l,fetchPolicy:u,errorPolicy:d,keepRootFields:f,context:p}){let S=new $o(this);t=this.cache.transformForLink(this.transform(t));let{hasClientExports:y}=this.getDocumentInfo(t);n=this.getVariables(t,n),y&&(!1,n=yield this.localState.getExportedVariables({client:this.client,document:t,variables:n,context:p}));let v=this.mutationStore&&(this.mutationStore[S.id]={mutation:t,variables:n,loading:!0,error:null}),D=r&&S.markMutationOptimistic(r,{document:t,variables:n,cacheWriteBehavior:u==="no-cache"?0:2,errorPolicy:d,context:p,updateQueries:o,update:c,keepRootFields:f});return this.broadcastQueries(),new Promise((E,x)=>{let R={};return this.getObservableFromLink(t,C(g({},p),{optimisticResponse:D?r:void 0}),n,u,{},!1).observable.pipe(kS(),De(F=>{let Y=g({},F);return ue(S.markMutationResult(Y,{document:t,variables:n,cacheWriteBehavior:u==="no-cache"?0:2,errorPolicy:d,context:p,update:c,updateQueries:o,awaitRefetchQueries:a,refetchQueries:i,removeOptimistic:D?S.id:void 0,onQueryUpdated:l,keepRootFields:f}))})).pipe(L(F=>{if(yn(F)&&d==="none")throw new xr(Yf(F));return v&&(v.loading=!1,v.error=null),F})).subscribe({next:F=>{if(this.broadcastQueries(),!S.hasNext){let Y={data:this.maskOperation({document:t,data:F.data,fetchPolicy:u,cause:R})};yn(F)&&(Y.error=new xr(F)),Object.keys(F.extensions||{}).length&&(Y.extensions=F.extensions),E(Y)}},error:F=>{if(v&&(v.loading=!1,v.error=F),D&&this.cache.removeOptimistic(S.id),this.broadcastQueries(),d==="ignore")return E({data:void 0});if(d==="all")return E({data:void 0,error:F});x(F)}})})})}fetchQuery(t,n){return We(t.query,ze.QUERY),ee(this,null,function*(){return Hl(this.fetchObservableWithInfo(t,{networkStatus:n}).observable.pipe(No(r=>{switch(r.kind){case"E":throw r.error;case"N":if(r.source!=="newNetworkStatus")return Hn(r.value)}})),{defaultValue:{data:void 0}})})}transform(t){return this.documentTransform.transformDocument(t)}transformCache=new Tr(Me["queryManager.getDocumentInfo"]||2e3);getDocumentInfo(t){let{transformCache:n}=this;if(!n.has(t)){let o=Le(t),i={hasClientExports:Qt(["client","export"],t,!0),hasForcedResolvers:df(t),hasNonreactiveDirective:Qt(["nonreactive"],t),hasIncrementalDirective:Qt(["defer"],t),nonReactiveQuery:QI(t),clientQuery:Qt(["client"],t)?t:null,serverQuery:pf([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"},{name:"unmask"}],t),operationType:o?.operation,defaultVars:wr(o),asQuery:C(g({},t),{definitions:t.definitions.map(a=>a.kind==="OperationDefinition"&&a.operation!=="query"?C(g({},a),{operation:"query"}):a)})};n.set(t,i)}let r=n.get(t);if(r.violation)throw r.violation;return r}getVariables(t,n){let r=this.getDocumentInfo(t).defaultVars,o=Object.entries(n??{}).map(([i,a])=>[i,a===void 0?r[i]:a]);return g(g({},r),Object.fromEntries(o))}watchQuery(t){We(t.query,ze.QUERY);let n=this.transform(t.query);return t=C(g({},t),{variables:this.getVariables(n,t.variables)}),typeof t.notifyOnNetworkStatusChange>"u"&&(t.notifyOnNetworkStatusChange=!0),new Bo({queryManager:this,options:t,transformedQuery:n})}query(t){let n=this.transform(t.query);return this.fetchQuery(C(g({},t),{query:n})).then(r=>C(g({},r),{data:this.maskOperation({document:n,data:r?.data,fetchPolicy:t.fetchPolicy})}))}requestIdCounter=1;generateRequestId(){return this.requestIdCounter++}clearStore(t={discardWatches:!0}){return this.cancelPendingFetches(ge(89)),this.obsQueries.forEach(n=>{n.reset()}),this.mutationStore&&(this.mutationStore={}),this.cache.reset(t)}getObservableQueries(t="active"){let n=new Set,r=new Map,o=new Map,i=new Set;return Array.isArray(t)&&t.forEach(a=>{if(typeof a=="string")r.set(a,a),o.set(a,!1);else if(ff(a)){let c=Bn(this.transform(a));r.set(c,xe(a)),o.set(c,!1)}else de(a)&&a.query&&i.add(a)}),this.obsQueries.forEach(a=>{let c=Bn(this.transform(a.options.query));if(t==="all"){n.add(a);return}let{queryName:l,options:{fetchPolicy:u}}=a;t==="active"&&u==="standby"||(t==="active"||l&&o.has(l)||c&&o.has(c))&&(n.add(a),l&&o.set(l,!0),c&&o.set(c,!0))}),i.size&&i.forEach(a=>{let c=new Bo({queryManager:this,options:C(g({},a),{fetchPolicy:"network-only"})});n.add(c)}),!1,n}refetchObservableQueries(t=!1){let n=[];return this.getObservableQueries(t?"all":"active").forEach(r=>{let{fetchPolicy:o}=r.options;(t||o!=="standby")&&o!=="cache-only"&&n.push(r.refetch())}),this.broadcastQueries(),Promise.all(n)}startGraphQLSubscription(t){let{query:n,variables:r}=t,{fetchPolicy:o="cache-first",errorPolicy:i="none",context:a={},extensions:c={}}=t;We(n,ze.SUBSCRIPTION),n=this.transform(n),r=this.getVariables(n,r);let l;!1;let u=(this.getDocumentInfo(n).hasClientExports?ue(this.localState.getExportedVariables({client:this.client,document:n,variables:r,context:a})):U(r)).pipe(De(d=>{let{observable:f,restart:p}=this.getObservableFromLink(n,a,d,o,c),h=new $o(this);return l=p,f.pipe(L(S=>{h.markSubscriptionResult(S,{document:n,variables:d,errorPolicy:i,cacheWriteBehavior:o==="no-cache"?0:2});let y={data:S.data??void 0};return yn(S)?y.error=new xr(S):wS(S)&&(y.error=S.extensions[Gc],delete S.extensions[Gc]),S.extensions&&Object.keys(S.extensions).length&&(y.extensions=S.extensions),y.error&&i==="none"&&(y.data=void 0),i==="ignore"&&delete y.error,y}),Ot(S=>i==="ignore"?U({data:void 0}):U({data:void 0,error:S})),Ee(S=>!!(S.data||S.error)))}));return Object.assign(u,{restart:()=>l?.()})}broadcastQueries(){this.onBroadcast&&this.onBroadcast(),this.obsQueries.forEach(t=>t.notify())}inFlightLinkObservables=new Fe(!1);getObservableFromLink(t,n,r,o,i,a=n?.queryDeduplication??this.queryDeduplication){let c={},{serverQuery:l,clientQuery:u,operationType:d,hasIncrementalDirective:f}=this.getDocumentInfo(t),p=xe(t),h={client:this.client};if(l){let{inFlightLinkObservables:y,link:v}=this;try{let E=function(x){return new O(R=>{function F(){return x.subscribe({next:R.next.bind(R),complete:R.complete.bind(R),error:R.error.bind(R)})}let Y=F();return c.restart||=()=>{Y.unsubscribe(),Y=F()},()=>{Y.unsubscribe(),c.restart=void 0}})};var S=E;let D=this.incrementalHandler.prepareRequest({query:l,variables:r,context:C(g(g({},this.defaultContext),n),{queryDeduplication:a}),extensions:i});if(n=D.context,a){let x=Bn(l),R=Ae(r);c=y.lookup(x,R),c.observable||(c.observable=Rr(v,D,h).pipe(E,Cn(()=>{y.peek(x,R)===c&&y.remove(x,R)}),d===ze.SUBSCRIPTION?Ft():Xn({refCount:!0})))}else c.observable=Rr(v,D,h).pipe(E)}catch(D){c.observable=Jn(()=>D)}}else c.observable=U({data:{}});if(u){let{operation:y}=Le(t);!1,T(!f,94,y[0].toUpperCase()+y.slice(1),p??"(anonymous)"),c.observable=c.observable.pipe(De(v=>ue(this.localState.execute({client:this.client,document:u,remoteResult:v,context:n,variables:r,fetchPolicy:o}))))}return{restart:()=>c.restart?.(),observable:c.observable.pipe(Ot(y=>{throw y=CS(y),Gf(y),y}))}}getResultsFromLink(t,{queryInfo:n,cacheWriteBehavior:r,observableQuery:o,exposeExtensions:i}){let a=n.lastRequestId=this.generateRequestId(),{errorPolicy:c}=t,l=this.cache.transformForLink(t.query);return this.getObservableFromLink(l,t.context,t.variables,t.fetchPolicy).observable.pipe(L(u=>{let d=n.markQueryResult(u,C(g({},t),{document:l,cacheWriteBehavior:r})),f=yn(d);if(f&&c==="none")throw n.resetLastWrite(),o?.resetNotifications(),new xr(Yf(d));let p=g({data:d.data},n.hasNext?{loading:!0,networkStatus:H.streaming,dataState:"streaming",partial:!0}:{dataState:d.data?"complete":"empty",loading:!1,networkStatus:H.ready,partial:!d.data});return i&&"extensions"in d&&(p[ps]=d.extensions),f&&(c==="none"&&(p.data=void 0,p.dataState="empty"),c!=="ignore"&&(p.error=new xr(Yf(d)),p.dataState!=="streaming"&&(p.networkStatus=H.error))),p}),Ot(u=>{if(a>=n.lastRequestId&&c==="none")throw n.resetLastWrite(),o?.resetNotifications(),u;let d={data:void 0,dataState:"empty",loading:!1,networkStatus:H.ready,partial:!0};return c!=="ignore"&&(d.error=u,d.networkStatus=H.error),U(d)}))}fetchObservableWithInfo(t,{networkStatus:n=H.loading,query:r=t.query,fetchQueryOperator:o=l=>l,onCacheHit:i=()=>{},observableQuery:a,exposeExtensions:c}){let l=this.getVariables(r,t.variables),u=this.defaultOptions.watchQuery,{fetchPolicy:d=u&&u.fetchPolicy||"cache-first",errorPolicy:f=u&&u.errorPolicy||"none",returnPartialData:p=!1,notifyOnNetworkStatusChange:h=!0,context:S={}}=t;this.prioritizeCacheValues&&(d==="network-only"||d==="cache-and-network")&&(d="cache-first");let y=Object.assign({},t,{query:r,variables:l,fetchPolicy:d,errorPolicy:f,returnPartialData:p,notifyOnNetworkStatusChange:h,context:S}),v=new $o(this,a),D=Y=>{y.variables=Y;let lt=d==="no-cache"?0:n===H.refetch&&y.refetchWritePolicy!=="merge"?1:2,Sl=this.fetchQueryByPolicy(y,{queryInfo:v,cacheWriteBehavior:lt,onCacheHit:i,observableQuery:a,exposeExtensions:c});return Sl.observable=Sl.observable.pipe(o),y.fetchPolicy!=="standby"&&a?.applyNextFetchPolicy("after-fetch",t),Sl},E=()=>{this.fetchCancelFns.delete(v.id)};this.fetchCancelFns.set(v.id,Y=>{x.next({kind:"E",error:Y,source:"network"})});let x=new he,R,F;if(this.getDocumentInfo(y.query).hasClientExports)!1,R=ue(this.localState.getExportedVariables({client:this.client,document:y.query,variables:y.variables,context:y.context})).pipe(De(Y=>D(Y).observable)),F=!0;else{let Y=D(y.variables);F=Y.fromLink,R=Y.observable}return{observable:new O(Y=>{Y.add(E),R.subscribe(Y),x.subscribe(Y)}).pipe(Ft()),fromLink:F}}refetchQueries({updateCache:t,include:n,optimistic:r=!1,removeOptimistic:o=r?os("refetchQueries"):void 0,onQueryUpdated:i}){let a=new Map;n&&this.getObservableQueries(n).forEach(l=>{if(l.options.fetchPolicy==="cache-only"||l.variablesUnknown)return;let u=l.getCurrentResult();a.set(l,{oq:l,lastDiff:{result:u?.data,complete:!u?.partial}})});let c=new Map;if(t){let l=new Set;this.cache.batch({update:t,optimistic:r&&o||!1,removeOptimistic:o,onWatchUpdated(u,d,f){let p=u.watcher;if(p instanceof Bo&&!l.has(p)){if(l.add(p),i){a.delete(p);let h=i(p,d,f);return h===!0&&(h=p.refetch().retain()),h!==!1&&c.set(p,h),h}i!==null&&p.options.fetchPolicy!=="cache-only"&&a.set(p,{oq:p,lastDiff:f,diff:d})}}})}return a.size&&a.forEach(({oq:l,lastDiff:u,diff:d})=>{let f;i&&(d||(d=l.getCacheDiff()),f=i(l,d,u)),(!i||f===!0)&&(f=l.refetch().retain()),f!==!1&&c.set(l,f)}),o&&this.cache.removeOptimistic(o),c}noCacheWarningsByCause=new WeakSet;maskOperation(t){let{document:n,data:r}=t;if(!1){let{fetchPolicy:o,cause:i={}}=t,a=Le(n)?.operation;this.dataMasking&&o==="no-cache"&&!qI(n)&&!this.noCacheWarningsByCause.has(i)&&(this.noCacheWarningsByCause.add(i),!1)}return this.dataMasking?Af(r,n,this.cache):r}maskFragment(t){let{data:n,fragment:r,fragmentName:o}=t;return this.dataMasking?xf(n,r,this.cache,o):n}fetchQueryByPolicy({query:t,variables:n,fetchPolicy:r,errorPolicy:o,returnPartialData:i,context:a},{cacheWriteBehavior:c,onCacheHit:l,queryInfo:u,observableQuery:d,exposeExtensions:f}){let p=()=>this.cache.diff({query:t,variables:n,returnPartialData:!0,optimistic:!0}),h=(y,v)=>{let D=y.result;!1;let E=R=>(!y.complete&&!i&&(R=void 0),{data:R,dataState:y.complete?"complete":R?"partial":"empty",loading:Mr(v),networkStatus:v,partial:!y.complete}),x=R=>U({kind:"N",value:E(R),source:"cache"});return(y.complete||i)&&this.getDocumentInfo(t).hasForcedResolvers?(!1,l(),ue(this.localState.execute({client:this.client,document:t,remoteResult:D?{data:D}:void 0,context:a,variables:n,onlyRunForcedResolvers:!0,returnPartialData:!0,fetchPolicy:r}).then(R=>({kind:"N",value:E(R.data||void 0),source:"cache"})))):o==="none"&&v===H.refetch&&y.missing?x(void 0):x(D||void 0)},S=()=>this.getResultsFromLink({query:t,variables:n,context:a,fetchPolicy:r,errorPolicy:o},{cacheWriteBehavior:c,queryInfo:u,observableQuery:d,exposeExtensions:f}).pipe(kS(),Vl(),L(y=>C(g({},y),{source:"network"})));switch(r){default:case"cache-first":{let y=p();return y.complete?{fromLink:!1,observable:h(y,H.ready)}:i?{fromLink:!0,observable:At(h(y,H.loading),S())}:{fromLink:!0,observable:S()}}case"cache-and-network":{let y=p();return y.complete||i?{fromLink:!0,observable:At(h(y,H.loading),S())}:{fromLink:!0,observable:S()}}case"cache-only":return{fromLink:!1,observable:At(h(p(),H.ready))};case"network-only":return{fromLink:!0,observable:S()};case"no-cache":return{fromLink:!0,observable:S()};case"standby":return{fromLink:!1,observable:le}}}};function kS(){let e=!1;return Pe({next(){e=!0},complete(){T(e,98)}})}function qI(e){let t=!0;return Ie(e,{FragmentSpread:n=>{if(t=!!n.directives&&n.directives.some(r=>r.name.value==="unmask"),!t)return mn}}),t}function QI(e){return Ie(e,{FragmentSpread:t=>{if(!t.directives?.some(n=>n.name.value==="unmask"))return C(g({},t),{directives:[...t.directives||[],{kind:w.DIRECTIVE,name:{kind:w.NAME,value:"nonreactive"}}]})}})}function Yf(e){var a;if(e.extensions?.[at]==null)return e;let o=e,{extensions:i}=o,c=i,{[a=at]:t}=c,n=ve(c,[Bs(a)]),r=ve(o,["extensions"]);return Object.keys(n).length>0&&(r.extensions=n),r}var NS=!1,Ar=class{link;cache;disableNetworkFetches;set prioritizeCacheValues(t){this.queryManager.prioritizeCacheValues=t}get prioritizeCacheValues(){return this.queryManager.prioritizeCacheValues}version;queryDeduplication;defaultOptions;devtoolsConfig;queryManager;devToolsHookCb;resetStoreCallbacks=[];clearStoreCallbacks=[];constructor(t){!1;let{cache:n,documentTransform:r,ssrMode:o=!1,ssrForceFetchDelay:i=0,queryDeduplication:a=!0,defaultOptions:c,defaultContext:l,assumeImmutableResults:u=n.assumeImmutableResults,localState:d,devtools:f,dataMasking:p,link:h,incrementalHandler:S=new vs,experiments:y=[]}=t;this.link=h,this.cache=n,this.queryDeduplication=a,this.defaultOptions=c||{},this.devtoolsConfig=C(g({},f),{enabled:f?.enabled??!1}),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.watchFragment=this.watchFragment.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.refetchObservableQueries=this.refetchObservableQueries.bind(this),this.version=rs,this.queryManager=new qc({client:this,defaultOptions:this.defaultOptions,defaultContext:l,documentTransform:r,queryDeduplication:a,ssrMode:o,dataMasking:!!p,clientOptions:t,incrementalHandler:S,assumeImmutableResults:u,onBroadcast:this.devtoolsConfig.enabled?()=>{this.devToolsHookCb&&this.devToolsHookCb()}:void 0,localState:d}),this.prioritizeCacheValues=o||i>0,i&&setTimeout(()=>{this.prioritizeCacheValues=!1},i),this.devtoolsConfig.enabled&&this.connectToDevTools(),y.forEach(v=>v.call(this,t))}connectToDevTools(){if(typeof window>"u")return;let t=window,n=Symbol.for("apollo.devtools");(t[n]=t[n]||[]).push(this),t.__APOLLO_CLIENT__=this,!NS&&!1&&(NS=!0,window.document&&window.top===window.self&&/^(https?|file):$/.test(window.location.protocol)&&setTimeout(()=>{if(!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__){let r=window.navigator,o=r&&r.userAgent,i;typeof o=="string"&&(o.indexOf("Chrome/")>-1?i="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":o.indexOf("Firefox/")>-1&&(i="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),i&&!1&&T.log("Download the Apollo DevTools for a better development experience: %s",i)}},1e4))}get documentTransform(){return this.queryManager.documentTransform}get localState(){return this.queryManager.localState}set localState(t){this.queryManager.localState=t}stop(){this.queryManager.stop()}watchQuery(t){return this.defaultOptions.watchQuery&&(t=ds(this.defaultOptions.watchQuery,t)),this.queryManager.watchQuery(t)}query(t){return this.defaultOptions.query&&(t=ds(this.defaultOptions.query,t)),!1,this.queryManager.query(t)}mutate(t){let n=ds(gt({fetchPolicy:"network-only",errorPolicy:"none"},this.defaultOptions.mutate),t);return!1,We(n.mutation,ze.MUTATION),this.queryManager.mutate(n)}subscribe(t){let n={},r=this.queryManager.startGraphQLSubscription(t),o=r.pipe(L(i=>C(g({},i),{data:this.queryManager.maskOperation({document:t.query,data:i.data,fetchPolicy:t.fetchPolicy,cause:n})})));return Object.assign(o,{restart:r.restart})}readQuery(t,n=!1){return this.cache.readQuery(C(g({},t),{query:this.transform(t.query)}),n)}watchFragment(t){let n=this.queryManager.dataMasking,r=this.cache.watchFragment(C(g({},t),{fragment:this.transform(t.fragment,n)}));return r}readFragment(t,n=!1){return this.cache.readFragment(C(g({},t),{fragment:this.transform(t.fragment)}),n)}writeQuery(t){let n=this.cache.writeQuery(t);return t.broadcast!==!1&&this.queryManager.broadcastQueries(),n}writeFragment(t){let n=this.cache.writeFragment(t);return t.broadcast!==!1&&this.queryManager.broadcastQueries(),n}__actionHookForDevTools(t){this.devToolsHookCb=t}__requestRaw(t){return Rr(this.link,t,{client:this})}resetStore(){return Promise.resolve().then(()=>this.queryManager.clearStore({discardWatches:!1})).then(()=>Promise.all(this.resetStoreCallbacks.map(t=>t()))).then(()=>this.refetchObservableQueries())}clearStore(){return Promise.resolve().then(()=>this.queryManager.clearStore({discardWatches:!0})).then(()=>Promise.all(this.clearStoreCallbacks.map(t=>t())))}onResetStore(t){return this.resetStoreCallbacks.push(t),()=>{this.resetStoreCallbacks=this.resetStoreCallbacks.filter(n=>n!==t)}}onClearStore(t){return this.clearStoreCallbacks.push(t),()=>{this.clearStoreCallbacks=this.clearStoreCallbacks.filter(n=>n!==t)}}reFetchObservableQueries;refetchObservableQueries(t){return this.queryManager.refetchObservableQueries(t)}refetchQueries(t){let n=this.queryManager.refetchQueries(t),r=[],o=[];n.forEach((a,c)=>{r.push(c),o.push(a)});let i=Promise.all(o);return i.queries=r,i.results=o,i.catch(a=>{!1}),i}getObservableQueries(t="active"){return this.queryManager.getObservableQueries(t)}extract(t){return this.cache.extract(t)}restore(t){return this.cache.restore(t)}setLink(t){this.link=t}get defaultContext(){return this.queryManager.defaultContext}maskedFragmentTransform=new bn(mf);transform(t,n=!1){let r=this.queryManager.transform(t);return n?this.maskedFragmentTransform.transformDocument(r):r}};!1;var Qc=new Map,Zf=new Map,xS=!0,Kc=!1;function AS(e){return e.replace(/[\s,]+/g," ").trim()}function KI(e){return AS(e.source.body.substring(e.start,e.end))}function YI(e){var t=new Set,n=[];return e.definitions.forEach(function(r){if(r.kind==="FragmentDefinition"){var o=r.name.value,i=KI(r.loc),a=Zf.get(o);a&&!a.has(i)?xS&&console.warn("Warning: fragment with name "+o+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):a||Zf.set(o,a=new Set),a.add(i),t.has(i)||(t.add(i),n.push(r))}else n.push(r)}),li(li({},e),{definitions:n})}function ZI(e){var t=new Set(e.definitions);t.forEach(function(r){r.loc&&delete r.loc,Object.keys(r).forEach(function(o){var i=r[o];i&&typeof i=="object"&&t.add(i)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}function JI(e){var t=AS(e);if(!Qc.has(t)){var n=Pc(e,{experimentalFragmentVariables:Kc,allowLegacyFragmentVariables:Kc});if(!n||n.kind!=="Document")throw new Error("Not a valid GraphQL document.");Qc.set(t,ZI(YI(n)))}return Qc.get(t)}function $n(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];typeof e=="string"&&(e=[e]);var r=e[0];return t.forEach(function(o,i){o&&o.kind==="Document"?r+=o.loc.source.body:r+=o,r+=e[i+1]}),JI(r)}function OS(){Qc.clear(),Zf.clear()}function FS(){xS=!1}function LS(){Kc=!0}function HS(){Kc=!1}var Cs={gql:$n,resetCaches:OS,disableFragmentWarnings:FS,enableExperimentalFragmentVariables:LS,disableExperimentalFragmentVariables:HS};(function(e){e.gql=Cs.gql,e.resetCaches=Cs.resetCaches,e.disableFragmentWarnings=Cs.disableFragmentWarnings,e.enableExperimentalFragmentVariables=Cs.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=Cs.disableExperimentalFragmentVariables})($n||($n={}));$n.default=$n;function US(e){return new O(t=>(e().then(n=>{t.closed||(t.next(n),t.complete())},n=>{t.closed||t.error(n)}),()=>t.unsubscribe()))}function XI(e,t){return t?e.pipe(L(n=>C(g({},n),{loading:!1})),di({data:void 0,loading:!0})):e.pipe(L(n=>C(g({},n),{loading:!1})))}var Xf=class{zone;constructor(t){this.zone=t}now=Date.now;schedule(t,n=0,r){return this.zone.run(()=>Ll.schedule(t,n,r))}};function eh(e,t){return e.pipe(Zn(new Xf(t)))}var th=class{obsQuery;valueChanges;constructor(t,n){this.obsQuery=t,this.valueChanges=eh(ue(this.obsQuery),n)}get options(){return this.obsQuery.options}get variables(){return this.obsQuery.variables}getCurrentResult(){return this.obsQuery.getCurrentResult()}refetch(t){return this.obsQuery.refetch(t)}fetchMore(t){return this.obsQuery.fetchMore(t)}subscribeToMore(t){return this.obsQuery.subscribeToMore(t)}updateQuery(t){return this.obsQuery.updateQuery(t)}stopPolling(){return this.obsQuery.stopPolling()}startPolling(t){return this.obsQuery.startPolling(t)}setVariables(t){return this.obsQuery.setVariables(t)}reobserve(t){return this.obsQuery.reobserve(t)}},jS=new N("APOLLO_FLAGS"),BS=new N("APOLLO_OPTIONS"),eR=new N("APOLLO_NAMED_OPTIONS"),Yc=class{ngZone;flags;_client;useMutationLoading;constructor(t,n,r){this.ngZone=t,this.flags=n,this._client=r,this.useMutationLoading=n?.useMutationLoading??!1}watchQuery(t){return new th(this.ensureClient().watchQuery(g({},t)),this.ngZone)}query(t){return US(()=>this.ensureClient().query(g({},t)))}mutate(t){return XI(US(()=>this.ensureClient().mutate(g({},t))),t.useMutationLoading??this.useMutationLoading)}watchFragment(t){let i=t,{useZone:n}=i,r=ve(i,["useZone"]),o=this.ensureClient().watchFragment(g({},r));return n!==!0?o:eh(o,this.ngZone)}subscribe(t){let i=t,{useZone:n}=i,r=ve(i,["useZone"]),o=this.ensureClient().subscribe(g({},r));return n!==!0?o:eh(o,this.ngZone)}get client(){return this.ensureClient()}set client(t){if(this._client)throw new Error("Client has been already defined");this._client=t}ensureClient(){return this.checkInstance(),this._client}checkInstance(){if(this._client)return!0;throw new Error("Client has not been defined yet")}},nh=(()=>{class e extends Yc{map=new Map;constructor(n,r,o,i){if(super(n,i),r&&this.createDefault(r),o&&typeof o=="object"){for(let a in o)if(o.hasOwnProperty(a)){let c=o[a];this.create(c,a)}}}create(n,r){Jf(r)?this.createNamed(r,n):this.createDefault(n)}default(){return this}use(n){return Jf(n)?this.map.get(n):this.default()}createDefault(n){if(this._client)throw new Error("Apollo has been already created.");this.client=this.ngZone.runOutsideAngular(()=>new Ar(n))}createNamed(n,r){if(this.map.has(n))throw new Error(`Client ${n} has been already created`);this.map.set(n,new Yc(this.ngZone,this.flags,this.ngZone.runOutsideAngular(()=>new Ar(r))))}removeClient(n){Jf(n)?this.map.delete(n):this._client=void 0}static \u0275fac=function(r){return new(r||e)(A(Be),A(BS,8),A(eR,8),A(jS,8))};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();function Jf(e){return!!e&&e!=="default"}function VS(e,t={}){return[nh,{provide:BS,useFactory:e},{provide:jS,useValue:t}]}var tR=$n,rh=tR;var $S=rh`
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
`,zS=rh`
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
`;var yt=(()=>{class e{constructor(n){this.apollo=n}getAbilities(){return this.pokemon.pipe(L(n=>n.getPokemon.abilities))}getDexNumber(){return this.pokemon.pipe(L(n=>n.getPokemon.num))}getMove(n){return this.apollo.query({query:zS,variables:{move:n}}).pipe(L(r=>r.data),Ee(r=>r!==void 0))}getMoves(){return this.pokemon.pipe(L(n=>{let r=[],o=["dreamworldMoves","eggMoves","eventMoves","tmMoves","tutorMoves","virtualTransferMoves","levelUpMoves"],i=c=>{c&&Object.keys(c).forEach(l=>{let u=c[l];u&&o.forEach(d=>{let f=u[d];Array.isArray(f)&&f.forEach(p=>{r.push(p.move)})})})},a=c=>{c&&c.forEach(l=>{i(l.learnsets),a(l.preevolutions),a(l.evolutions)})};return i(n.getPokemon.learnsets),a(n.getPokemon.preevolutions??null),a(n.getPokemon.evolutions??null),r}))}getPokemon(n){return this.pokemon=this.apollo.query({query:$S,variables:{pokemon:n}}).pipe(L(r=>r.data),Ee(r=>r!==void 0)),this.pokemon}getStats(){return this.pokemon.pipe(L(n=>n.getPokemon.baseStats))}getTypes(){return this.pokemon.pipe(L(n=>n.getPokemon.types))}static{this.\u0275fac=function(r){return new(r||e)(A(nh))}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var WS=(()=>{class e{constructor(n,r){this.stateService=n,this.graphqlService=r,this.pokemonList=document.getElementById("pokemonList"),this.raidTier="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n,this.populatePokemonList()}),this.stateService.regionList.subscribe(n=>{this.region=n,this.populatePokemonList()})}ngAfterViewInit(){this.pokemonList=document.getElementById("pokemonList")}populatePokemonList(){this.pokemonList&&(this.resetPokemonList(),(this.raidTier=="5"?zt:Wt).sort((r,o)=>r.name.localeCompare(o.name)).filter(r=>r.region==m[this.region]).forEach(r=>{let o=document.createElement("option");o.value=r.name,o.text=r.name,r.formName&&(o.id=r.formName),this.pokemonList.add(o)}))}resetPokemonList(){this.pokemonList.innerHTML="",this.pokemonList.innerHTML='<option value="">-- Pokemon --</option>'}valueChanged(){let n=document.getElementById("pokemonList"),r=n.selectedIndex,o=n.options[r];if(o){let i=o.id;if(pn(),o.value){this.graphqlService.getPokemon(i||o.value.toLowerCase()),this.stateService.changePokemon(o.value);let a=document.getElementById("pokemonContent");a&&(a.style.display="none"),this.stateService.changeLoading(!0)}}}static{this.\u0275fac=function(r){return new(r||e)(W(ie),W(yt))}}static{this.\u0275cmp=X({type:e,selectors:[["app-pokemon-list"]],decls:3,vars:0,consts:[["id","pokemonList",3,"change"],["value",""]],template:function(r,o){r&1&&(we(0,"select",0),mt("change",function(){return o.valueChanged()}),we(1,"option",1),pe(2,"-- Pokemon --"),$e()())},encapsulation:2})}}return e})();var _e=(function(e){return e.Bug="Bug",e.Dark="Dark",e.Dragon="Dragon",e.Electric="Electric",e.Fairy="Fairy",e.Fighting="Fighting",e.Fire="Fire",e.Flying="Flying",e.Ghost="Ghost",e.Grass="Grass",e.Ground="Ground",e.Ice="Ice",e.Normal="Normal",e.Poison="Poison",e.Psychic="Psychic",e.Rock="Rock",e.Steel="Steel",e.Water="Water",e})(_e||{}),Is=[{name:_e.Bug,matchup:{offense:{double:["dark","grass","psychic"],immune:[],normal:["bug","dragon","electric","ground","ice","normal","rock","water"],resisted:["fairy","fighting","fire","flying","ghost","poison","steel"]},defense:{double:["fire","flying","rock"],immune:[],normal:["bug","dark","dragon","electric","fairy","ghost","ice","normal","poison","psychic","steel","water"],resisted:["fighting","grass","ground"]}}},{name:_e.Dark,matchup:{offense:{double:["ghost","psychic"],immune:[],normal:["bug","dragon","electric","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["dark","fairy","fighting"]},defense:{double:["bug","fairy","fighting"],immune:["psychic"],normal:["dragon","electric","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["dark","ghost"]}}},{name:_e.Dragon,matchup:{offense:{double:["dragon"],immune:["fairy"],normal:["bug","dark","electric","fighting","fire","flying","ghost","grass","ground","ice","normal","poison","psychic","rock","water"],resisted:["steel"]},defense:{double:["dragon","fairy","ice"],immune:[],normal:["bug","dark","fighting","flying","ghost","ground","normal","poison","psychic","rock","steel"],resisted:["electric","fire","grass","water"]}}},{name:_e.Electric,matchup:{offense:{double:["flying","water"],immune:["ground"],normal:["bug","dark","fairy","fighting","fire","ghost","ice","normal","poison","psychic","rock","steel"],resisted:["dragon","electric","grass"]},defense:{double:["ground"],immune:[],normal:["bug","dark","dragon","fairy","fighting","fire","ghost","grass","ice","normal","poison","psychic","rock","water"],resisted:["electric","flying","steel"]}}},{name:_e.Fairy,matchup:{offense:{double:["dark","dragon","fighting"],immune:[],normal:["bug","electric","fairy","flying","ghost","grass","ground","ice","normal","psychic","rock","water"],resisted:["fire","poison","steel"]},defense:{double:["poison","steel"],immune:["dragon"],normal:["electric","fairy","fire","flying","ghost","grass","ground","ice","normal","psychic","rock","water"],resisted:["bug","dark","fighting"]}}},{name:_e.Fighting,matchup:{offense:{double:["dark","ice","normal","rock","steel"],immune:["ghost"],normal:["dragon","electric","fighting","fire","grass","ground","water"],resisted:["bug","fairy","flying","poison","psychic"]},defense:{double:["fairy","flying","psychic"],immune:[],normal:["dragon","electric","fighting","fire","ghost","grass","ground","ice","normal","poison","steel","water"],resisted:["bug","dark","rock"]}}},{name:_e.Fire,matchup:{offense:{double:["bug","grass","ice","steel"],immune:[],normal:["dark","electric","fairy","fighting","flying","ghost","ground","normal","poison","psychic"],resisted:["dragon","fire","rock","water"]},defense:{double:["ground","rock","water"],immune:[],normal:["dark","dragon","electric","fighting","flying","ghost","normal","poison","psychic"],resisted:["bug","fairy","fire","grass","ice","steel"]}}},{name:_e.Flying,matchup:{offense:{double:["bug","fighting","grass"],immune:[],normal:["dark","dragon","fairy","fire","flying","ghost","ground","ice","normal","poison","psychic","water"],resisted:["electric","rock","steel"]},defense:{double:["electric","ice","rock"],immune:["ground"],normal:["dark","dragon","fairy","fire","flying","ghost","normal","poison","psychic","steel","water"],resisted:["bug","fighting","grass"]}}},{name:_e.Ghost,matchup:{offense:{double:["ghost","psychic"],immune:["normal"],normal:["bug","dragon","electric","fairy","fighting","fire","flying","grass","ground","ice","poison","rock","steel","water"],resisted:["dark"]},defense:{double:["dark","ghost"],immune:["fighting","normal"],normal:["dragon","electric","fairy","fire","flying","grass","ground","ice","psychic","rock","steel","water"],resisted:["bug","poison"]}}},{name:_e.Grass,matchup:{offense:{double:["ground","rock","water"],immune:[],normal:["dark","electric","fairy","fighting","ghost","ice","normal","psychic"],resisted:["bug","dragon","fire","flying","grass","poison","steel"]},defense:{double:["bug","fire","flying","ice","poison"],immune:[],normal:["dark","dragon","fairy","fighting","ghost","normal","psychic","rock","steel"],resisted:["electric","grass","ground","water"]}}},{name:_e.Ground,matchup:{offense:{double:["electric","fire","poison","rock","steel"],immune:["flying"],normal:["dark","dragon","fairy","fighting","ghost","ground","ice","normal","psychic","water"],resisted:["bug","grass"]},defense:{double:["grass","ice","water"],immune:["electric"],normal:["bug","dark","dragon","fairy","fighting","fire","flying","ghost","ground","normal","psychic","steel"],resisted:["poison","rock"]}}},{name:_e.Ice,matchup:{offense:{double:["dragon","flying","grass","ground"],immune:[],normal:["bug","dark","electric","fairy","fighting","ghost","normal","poison","psychic","rock"],resisted:["fire","ice","steel","water"]},defense:{double:["fighting","fire","rock","steel"],immune:[],normal:["bug","dark","dragon","electric","fairy","flying","ghost","grass","ground","normal","poison","psychic","water"],resisted:["ice"]}}},{name:_e.Normal,matchup:{offense:{double:[],immune:["ghost"],normal:["bug","dark","dragon","electric","fairy","fighting","fire","flying","grass","ground","ice","normal","poison","psychic","water"],resisted:["rock","steel"]},defense:{double:["fighting"],immune:["ghost"],normal:["bug","dark","dragon","electric","fairy","fire","flying","grass","ground","ice","normal","poison","psychic","rock","steel","water"],resisted:[]}}},{name:_e.Poison,matchup:{offense:{double:["fairy","grass"],immune:["steel"],normal:["bug","dark","dragon","electric","fighting","fire","flying","ice","normal","psychic","water"],resisted:["ghost","ground","poison","rock"]},defense:{double:["ground","psychic"],immune:[],normal:["dark","dragon","electric","fire","flying","ghost","ice","normal","rock","steel","water"],resisted:["bug","fairy","fighting","grass","poison"]}}},{name:_e.Psychic,matchup:{offense:{double:["fighting","poison"],immune:["dark"],normal:["bug","dragon","electric","fairy","fire","flying","ghost","grass","ground","ice","normal","rock","water"],resisted:["psychic","steel"]},defense:{double:["bug","dark","ghost"],immune:[],normal:["dragon","electric","fairy","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["fighting","psychic"]}}},{name:_e.Rock,matchup:{offense:{double:["bug","fire","flying","ice"],immune:[],normal:["dark","dragon","electric","fairy","ghost","grass","normal","poison","psychic","rock","water"],resisted:["fighting","ground","steel"]},defense:{double:["fighting","grass","ground","steel","water"],immune:[],normal:["bug","dark","dragon","electric","fairy","ghost","ice","psychic","rock"],resisted:["fire","flying","normal","poison"]}}},{name:_e.Steel,matchup:{offense:{double:["fairy","ice","rock"],immune:[],normal:["bug","dark","dragon","fighting","flying","ghost","grass","ground","normal","poison","psychic"],resisted:["electric","fire","steel","water"]},defense:{double:["fighting","fire","ground"],immune:["poison"],normal:["dark","electric","ghost","water"],resisted:["bug","dragon","fairy","flying","grass","ice","normal","psychic","rock","steel"]}}},{name:_e.Water,matchup:{offense:{double:["fire","ground","rock"],immune:[],normal:["bug","dark","electric","fairy","fighting","flying","ghost","ice","normal","poison","psychic","steel"],resisted:["dragon","grass","water"]},defense:{double:["electric","grass"],immune:[],normal:["bug","dark","dragon","fairy","fighting","flying","ghost","ground","normal","poison","psychic","rock"],resisted:["fire","ice","steel","water"]}}}];var GS=(()=>{class e{constructor(n){this.stateService=n}ngOnInit(){Is.forEach(n=>{let r=document.createElement("option");r.value=n.name,r.text=n.name,document.getElementById("teraList").add(r)})}valueChanged(){let n=document.getElementById("teraList"),r=n.selectedIndex,o=n.options[r];this.stateService.changeTeraType(o.value)}static{this.\u0275fac=function(r){return new(r||e)(W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-tera-type"]],decls:3,vars:0,consts:[["id","teraList",3,"change"],["value",""]],template:function(r,o){r&1&&(we(0,"select",0),mt("change",function(){return o.valueChanged()}),we(1,"option",1),pe(2,"-- Tera Type --"),$e()())},encapsulation:2})}}return e})();var qS=(()=>{class e{constructor(n){this.stateService=n,this.raidTier="",this.pokemonList="",this.teraType="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n}),this.stateService.teraType.subscribe(n=>{this.teraType=n}),this.stateService.regionList.subscribe(n=>{this.region=n})}shareRaid(){let n=location.origin+"/tera-raid-info/";n+=this.raidTier,n+="/"+this.region,n+="/"+this.pokemonList,n+="/"+this.teraType,navigator.clipboard.writeText(n);let r=document.getElementById("shareText");r.innerText="Copied to Clipboard"}shareRaidMouseOut(){let n=document.getElementById("shareText");n.innerText="Share Raid"}static{this.\u0275fac=function(r){return new(r||e)(W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-share-raid"]],decls:3,vars:0,consts:[["id","shareRaid",1,"share",3,"click","mouseout"],["id","shareText",1,"shareText"]],template:function(r,o){r&1&&(we(0,"div",0),mt("click",function(){return o.shareRaid()})("mouseout",function(){return o.shareRaidMouseOut()}),we(1,"div",1),pe(2,"Share Raid"),$e()())},encapsulation:2})}}return e})();var QS=(()=>{class e{constructor(n,r){this.grapghqlService=n,this.stateService=r,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setImages()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setImages(){this.pokemonList&&this.grapghqlService.getDexNumber().subscribe(n=>{let r=this.raidTier=="5"?zt:Wt,o="";r.filter(i=>i.name==this.pokemonList&&i.region==m[this.region]).forEach(i=>{i.imageAlt&&(o=i.imageAlt)}),fe(document.getElementById("pokemonImageNormal"),`<img alt="Normal" title="Normal" src="./assets/pokemon/${Gd(n,3,"0")}${o}.png" />`),fe(document.getElementById("pokemonImageShiny"),`<img alt="Shiny" title="Shiny" src="./assets/pokemon/shiny/${Gd(n,3,"0")}${o}.png" />`)})}static{this.\u0275fac=function(r){return new(r||e)(W(yt),W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-pokemon-images"]],decls:2,vars:0,consts:[["id","pokemonImageNormal",1,"imgNormal"],["id","pokemonImageShiny",1,"imgShiny"]],template:function(r,o){r&1&&Ne(0,"div",0)(1,"div",1)},encapsulation:2})}}return e})();var KS=(()=>{class e{constructor(n,r){this.graphqlService=n,this.stateService=r,this.pokemonList=""}ngOnInit(){this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setTypes()})}setTypes(){this.pokemonList&&this.graphqlService.getTypes().subscribe(n=>{n.forEach(r=>{fe(document.getElementById("pokemonTypes"),this.createTypeDisplay(r.name))})})}createTypeDisplay(n){return`<div class="typeText ${n.toLowerCase()}">${n}</div>`}static{this.\u0275fac=function(r){return new(r||e)(W(yt),W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-pokemon-types"]],decls:1,vars:0,consts:[["id","pokemonTypes"]],template:function(r,o){r&1&&Ne(0,"div",0)},encapsulation:2})}}return e})();var YS=(()=>{class e{constructor(n,r){this.graphqlService=n,this.stateService=r,this.raidTier="",this.pokemonList=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setAbilities()})}setAbilities(){if(this.pokemonList){let n=document.getElementById("pokemonAbility");this.graphqlService.getAbilities().subscribe(r=>{fe(n,"<h3>Ability:</h3>"),fe(n,this.createAbilityDiv(r.first)),r.second&&fe(n,this.createAbilityDiv(r.second)),this.canShowHidden()&&r.hidden&&fe(n,this.createAbilityDiv(r.hidden,!0))})}}createAbilityDiv(n,r){return`<div class="typeMatchupText" data-info="${n.shortDesc}">${n.name}${r?" (H)":""}</div>`}canShowHidden(){return this.raidTier=="6"||this.raidTier=="5"&&this.pokemonList=="Ditto"}static{this.\u0275fac=function(r){return new(r||e)(W(yt),W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-pokemon-ability"]],decls:1,vars:0,consts:[["id","pokemonAbility"]],template:function(r,o){r&1&&Ne(0,"div",0)},encapsulation:2})}}return e})();var ZS=(()=>{class e{constructor(n,r){this.graphqlService=n,this.stateService=r}ngOnInit(){this.stateService.pokemonList.subscribe(n=>{n&&this.setStats()})}setStats(){this.graphqlService.getStats().subscribe(n=>{fe(document.getElementById("pokemonStatsWrapper"),this.createStatsDisplay(n))})}createStatsDisplay(n){let r='<div id="pokemonStats"><h3>Base Stats</h3>';return r+=`<div class="stat hp"><p>HP</p><p data-label="HP">${n.hp}</p></div>`,r+=`<div class="stat at"><p>Atk</p><p data-label="Atk">${n.attack}</p></div>`,r+=`<div class="stat df"><p>Def</p><p data-label="Def">${n.defense}</p></div>`,r+=`<div class="stat sa"><p>Sp.Atk</p><p data-label="Sp. Atk">${n.specialattack}</p></div>`,r+=`<div class="stat sd"><p>Sp.Def</p><p data-label="Sp. Def">${n.specialdefense}</p></div>`,r+=`<div class="stat sp"><p>Spd</p><p data-label="Spd">${n.speed}</p></div></div>`,r}static{this.\u0275fac=function(r){return new(r||e)(W(yt),W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-pokemon-stats"]],decls:1,vars:0,consts:[["id","pokemonStatsWrapper"]],template:function(r,o){r&1&&Ne(0,"div",0)},encapsulation:2})}}return e})();var Zc=(()=>{class e{advantages(n,r=!1){let o=[];return Is.filter(i=>i.name.includes(n)).forEach(i=>{let a=i.matchup.offense;a.double.forEach(c=>{o.push({name:c,multiplier:2})}),r&&(a.resisted.forEach(c=>{o.push({name:c,multiplier:.5})}),a.immune.forEach(c=>{o.push({name:c,multiplier:0})}))}),o}weaknesses(n){let r=[];return Is.filter(o=>o.name.includes(n)).forEach(o=>{let i=o.matchup.defense;i.double.forEach(a=>{r.push({name:a,multiplier:2})}),i.resisted.forEach(a=>{r.push({name:a,multiplier:.5})}),i.immune.forEach(a=>{r.push({name:a,multiplier:0})})}),r}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var XS=(()=>{class e{constructor(n,r,o){this.stateService=n,this.typeCalcService=r,this.graphqlService=o,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setMoves()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setMoves(){let n=document.getElementById("pokemonMoves"),r=this.raidTier=="5"?zt:Wt,o=[],i=[],a=[],c=[];this.pokemonList&&(r.filter(l=>l.name==this.pokemonList&&l.region==m[this.region]).forEach(l=>{l.info.specialMoves&&l.info.specialMoves.sort((u,d)=>u.localeCompare(d)).forEach(u=>{i.push(u),this.graphqlService.getMove(u.toLowerCase().replaceAll(" ","").replaceAll("-","")).subscribe(d=>{o.push(d.getMove)})}),l.info.moves.forEach(u=>{i.push(u)})}),this.graphqlService.getMoves().subscribe(l=>{fe(n,"<h3>Moves:</h3>"),i.forEach(p=>{o.push(...l.filter(h=>h.name==p))}),[...new Map(o.map(p=>[p.key,p])).values()].sort((p,h)=>p.name.localeCompare(h.name)).sort((p,h)=>p.category!="Status"&&h.category=="Status"?-1:(h.category!="Status"&&p.category=="Status",1)).forEach(p=>{let h=this.createMoveDiv(p);fe(document.getElementById("pokemonMoves"),h),a.push(h),p.category!="Status"&&c.push(p.type)}),this.stateService.changeMoveList(a.join("")),c=[...new Set(c)];let d=[];c.forEach(p=>{let h=this.typeCalcService.advantages(p);d=d.concat(h)});let f=[];d=[...new Map(d.map(p=>[p.name,p])).values()],d.sort((p,h)=>p.name.localeCompare(h.name)).forEach(p=>{f.push(es(p))}),f.length&&fe(document.getElementById("pokemonTypeAdvantages"),"<h3>Type Advantages:</h3>"+f.join(""))}))}createMoveDiv(n){let r=`<div class="typeMatchupText ${n.type.toLowerCase()}">${n.name}`;if(r+='<div class="moveStats">',r+=`<div class="type">${n.category.toString()}</div>`,r+=`<div class="bp">Pwr: ${n.basePower=="0"?"--":n.basePower}</div>`,r+=`<div class="pp">PP: ${n.pp}</div>`,r+=`<div class="acc">Acc: ${n.accuracy}</div>`,r+=`<div class="desc">${n.desc=="No additional effect."?n.shortDesc:n.desc}</div>`,n.category!="Status"){let o=this.typeCalcService.advantages(n.type.toString()),i=[];o.forEach(a=>{a.multiplier==2&&i.push(`${Do(a.name)}`)}),i.length&&(r+=`<div class="adv">Advantages: ${i.join(", ")}</div>`)}return r+="</div></div>",r}static{this.\u0275fac=function(r){return new(r||e)(W(ie),W(Zc),W(yt))}}static{this.\u0275cmp=X({type:e,selectors:[["app-pokemon-moves"]],decls:1,vars:0,consts:[["id","pokemonMoves",1,"pokemonMoves"]],template:function(r,o){r&1&&Ne(0,"div",0)},encapsulation:2})}}return e})();var eD=(()=>{class e{constructor(n){this.stateService=n,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setActions()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setActions(){this.pokemonList&&(fe(document.getElementById("pokemonActions"),"<h3>Actions:</h3>"),(this.raidTier=="5"?zt:Wt).filter(r=>r.name==this.pokemonList&&r.region==m[this.region]).forEach(r=>{r.info.actions?.sort((o,i)=>i.threshold-o.threshold).forEach(o=>{fe(document.getElementById("pokemonActions"),this.createActionDiv(o))})}))}createActionDiv(n){return`<div class="actions ${n.type.toLowerCase()}-${n.threshold.toString()}" data-info="${n.threshold.toString()}% ${n.type.toString()} Remaining">${n.action}</div>`}static{this.\u0275fac=function(r){return new(r||e)(W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-pokemon-actions"]],decls:1,vars:0,consts:[[1,"pokemonActions"]],template:function(r,o){r&1&&Ne(0,"div",0)},encapsulation:2})}}return e})();var tD=(()=>{class e{constructor(n){this.stateService=n,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.setHerbs()}),this.stateService.regionList.subscribe(n=>{this.region=n})}setHerbs(){this.pokemonList&&(fe(document.getElementById("pokemonHerbs"),"<h3>Herbs Dropped:</h3>"),(this.raidTier=="5"?zt:Wt).filter(r=>r.name==this.pokemonList&&r.region==m[this.region]).forEach(r=>{r.info.herbs.sort((o,i)=>o.name.localeCompare(i.name)).forEach(o=>{fe(document.getElementById("pokemonHerbs"),this.createHerbDiv(o))})}))}createHerbDiv(n){return`<div class="herbPill ${n.name.toLowerCase()}">${n.name} - ${n.chance}%</div>`}static{this.\u0275fac=function(r){return new(r||e)(W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-pokemon-herbs"]],decls:1,vars:0,consts:[[1,"pokemonHerbs"]],template:function(r,o){r&1&&Ne(0,"div",0)},encapsulation:2})}}return e})();var nD=(()=>{class e{constructor(n,r){this.stateService=n,this.typeCalcService=r,this.raidTier="",this.pokemonList="",this.teraType="",this.moveList=""}ngOnInit(){this.stateService.raidTier.subscribe(n=>{this.raidTier=n}),this.stateService.pokemonList.subscribe(n=>{this.pokemonList=n,this.handleChange()}),this.stateService.teraType.subscribe(n=>{this.teraType=n,this.handleChange()}),this.stateService.moveList.subscribe(n=>{this.moveList=n,this.handleChange()})}handleChange(){this.pokemonList&&(pn("pokemonTeraAdvantages"),pn("pokemonTeraWeaknesses"),this.pokemonList&&(this.raidTier&&this.teraType&&this.setTypeWeaknesses(),this.moveList&&this.teraType&&this.moveList.includes("Tera Blast")&&this.setTeraTypeAdvantages()),this.teraType?(this.pokemonList&&this.raidTier&&this.setTypeWeaknesses(),this.moveList.includes("Tera Blast")&&this.setTeraTypeAdvantages()):(pn("pokemonTeraAdvantages"),pn("pokemonTeraWeaknesses")),this.stateService.changeLoading(!1))}setTeraTypeAdvantages(){pn("pokemonTeraAdvantages");let n=[];this.typeCalcService.advantages(this.teraType).forEach(o=>{n.push(es(o))}),n.length&&fe(document.getElementById("pokemonTeraAdvantages"),"<h3>Tera Advantages:</h3>"+n.join(""))}setTypeWeaknesses(){pn("pokemonTeraWeaknesses");let n=[];this.typeCalcService.weaknesses(this.teraType).forEach(o=>{n.push(es(o))}),n.length&&fe(document.getElementById("pokemonTeraWeaknesses"),"<h3>Tera Weaknesses:</h3>"+n.join(""))}static{this.\u0275fac=function(r){return new(r||e)(W(ie),W(Zc))}}static{this.\u0275cmp=X({type:e,selectors:[["app-pokemon-type-matchups"]],decls:3,vars:0,consts:[["id","pokemonTypeAdvantages",1,"pokemonTypeMatchups"],["id","pokemonTeraWeaknesses",1,"pokemonTypeMatchups"],["id","pokemonTeraAdvantages",1,"pokemonTypeMatchups"]],template:function(r,o){r&1&&Ne(0,"div",0)(1,"div",1)(2,"div",2)},encapsulation:2})}}return e})();var Jc=(()=>{class e{constructor(n){this.stateService=n,this.title="Tera Raid Info"}ngOnInit(){this.stateService.changeRegionList("Paldea"),this.stateService.loading.subscribe(n=>{document.getElementById("dataLoading").hidden=!n,n==!1&&(document.getElementById("pokemonContent").style.display="")})}ngAfterViewInit(){document.getElementById("dataLoading").hidden=!0,this.deleteCache(),this.autoPopulateSelections()}autoPopulateSelections(n,r){let o=n||window.location.href,i=r||window.location.origin;if(o.replace(i,"").length>1&&o.replace(i+"/tera-raid-info/","")){let c=o.replace(i+"/tera-raid-info/","").split("/"),l=new Event("change");if(Number(c[0])){let u=document.getElementById("raidTier");u.value=c[0],u.dispatchEvent(l)}if(c[1]){let u=document.getElementById("regionList");for(let d=0;d<u.length;d++){let f=u[d];f.text==c[1]&&(u.selectedIndex=f.index)}u.dispatchEvent(l)}if(c[2]){let u=Do(c[2].replaceAll("%20"," ").toLowerCase()),d=u.match(/(\(.*\))/);if(d){let p=d[0].split(" ");for(let h=0;h<p.length;h++)u=u.replaceAll(p[h],Do(p[h]))}let f=document.getElementById("pokemonList");f.value=u,f.dispatchEvent(l)}if(c[3]){let u=document.getElementById("teraList");for(let d=0;d<u.length;d++){let f=u[d];f.text==c[3]&&(u.selectedIndex=f.index)}u.dispatchEvent(l)}}}deleteCache(){typeof caches<"u"&&caches.delete("tera-raid-info-1")}static{this.\u0275fac=function(r){return new(r||e)(W(ie))}}static{this.\u0275cmp=X({type:e,selectors:[["app-root"]],decls:35,vars:0,consts:[[1,"header"],[1,"dropdowns"],["id","dataLoading","hidden","true"],["src","./assets/icons/pokeball.gif"],["id","pokemonContent","hidden","false",1,"content"],["id","pokemon"],[1,"pokemonImageWrapper"],["id","pokemonActions"],["id","pokemonHerbs"],[1,"pokemonTypesWrapper"],[1,"footer"],["href","https://github.com/kyle-undefined","target","_blank"],["href","https://www.serebii.net/","target","_blank"],["href","https://www.flaticon.com/authors/creatype","target","_blank"],["href","https://github.com/favware/graphql-pokemon","target","_blank"]],template:function(r,o){r&1&&(it(0,"header",0)(1,"h1"),pe(2,"Tera Raid Info"),Xe(),it(3,"div",1),$t(4,"app-raid-tier")(5,"app-region")(6,"app-pokemon-list")(7,"app-tera-type")(8,"app-share-raid"),Xe()(),it(9,"div",2),$t(10,"img",3),Xe(),it(11,"div",4)(12,"div",5)(13,"div",6),$t(14,"app-pokemon-images"),Xe(),$t(15,"app-pokemon-types"),Xe(),$t(16,"app-pokemon-stats")(17,"app-pokemon-ability")(18,"app-pokemon-moves")(19,"app-pokemon-actions",7)(20,"app-pokemon-herbs",8)(21,"app-pokemon-type-matchups",9),Xe(),it(22,"footer",10),pe(23," By: "),it(24,"a",11),pe(25,"Kyle Undefined"),Xe(),pe(26," - Design: CronikCRS - Images: "),it(27,"a",12),pe(28,"Serebii"),Xe(),pe(29," & "),it(30,"a",13),pe(31,"Creatype"),Xe(),pe(32," - Data: "),it(33,"a",14),pe(34,"GraphQL-Pokemon"),Xe()())},dependencies:[uc,Gy,qy,WS,GS,qS,QS,KS,YS,ZS,XS,eD,tD,nD],encapsulation:2})}}return e})();var V="primary",Ls=Symbol("RouteTitle"),ch=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}};function Ko(e){return new ch(e)}function oh(e,t,n){for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(o[0]===":")n[o.substring(1)]=i;else if(o!==i.path)return!1}return!0}function oR(e,t,n){let r=n.path.split("/"),o=r.indexOf("**");if(o===-1){if(r.length>e.length||n.pathMatch==="full"&&(t.hasChildren()||r.length<e.length))return null;let l={},u=e.slice(0,r.length);return oh(r,u,l)?{consumed:u,posParams:l}:null}if(o!==r.lastIndexOf("**"))return null;let i=r.slice(0,o),a=r.slice(o+1);if(i.length+a.length>e.length||n.pathMatch==="full"&&t.hasChildren()&&n.path!=="**")return null;let c={};return!oh(i,e.slice(0,i.length),c)||!oh(a,e.slice(e.length-a.length),c)?null:{consumed:e,posParams:c}}function ol(e){return new Promise((t,n)=>{e.pipe(rn()).subscribe({next:r=>t(r),error:r=>n(r)})})}function iR(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!Jt(e[n],t[n]))return!1;return!0}function Jt(e,t){let n=e?lh(e):void 0,r=t?lh(t):void 0;if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!fD(e[o],t[o]))return!1;return!0}function lh(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function fD(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;let n=[...e].sort(),r=[...t].sort();return n.every((o,i)=>r[i]===o)}else return e===t}function sR(e){return e.length>0?e[e.length-1]:null}function Ur(e){return ma(e)?e:zi(e)?ue(Promise.resolve(e)):U(e)}function hD(e){return ma(e)?ol(e):Promise.resolve(e)}var aR={exact:mD,subset:gD},pD={exact:cR,subset:lR,ignored:()=>!0};function rD(e,t,n){return aR[n.paths](e.root,t.root,n.matrixParams)&&pD[n.queryParams](e.queryParams,t.queryParams)&&!(n.fragment==="exact"&&e.fragment!==t.fragment)}function cR(e,t){return Jt(e,t)}function mD(e,t,n){if(!Fr(e.segments,t.segments)||!tl(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(let r in t.children)if(!e.children[r]||!mD(e.children[r],t.children[r],n))return!1;return!0}function lR(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>fD(e[n],t[n]))}function gD(e,t,n){return yD(e,t,t.segments,n)}function yD(e,t,n,r){if(e.segments.length>n.length){let o=e.segments.slice(0,n.length);return!(!Fr(o,n)||t.hasChildren()||!tl(o,n,r))}else if(e.segments.length===n.length){if(!Fr(e.segments,n)||!tl(e.segments,n,r))return!1;for(let o in t.children)if(!e.children[o]||!gD(e.children[o],t.children[o],r))return!1;return!0}else{let o=n.slice(0,e.segments.length),i=n.slice(e.segments.length);return!Fr(e.segments,o)||!tl(e.segments,o,r)||!e.children[V]?!1:yD(e.children[V],t,i,r)}}function tl(e,t,n){return t.every((r,o)=>pD[n](e[o].parameters,r.parameters))}var Xt=class{root;queryParams;fragment;_queryParamMap;constructor(t=new ne([],{}),n={},r=null){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap??=Ko(this.queryParams),this._queryParamMap}toString(){return fR.serialize(this)}},ne=class{segments;children;parent=null;constructor(t,n){this.segments=t,this.children=n,Object.values(n).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return nl(this)}},Or=class{path;parameters;_parameterMap;constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap??=Ko(this.parameters),this._parameterMap}toString(){return SD(this)}};function uR(e,t){return Fr(e,t)&&e.every((n,r)=>Jt(n.parameters,t[r].parameters))}function Fr(e,t){return e.length!==t.length?!1:e.every((n,r)=>n.path===t[r].path)}function dR(e,t){let n=[];return Object.entries(e.children).forEach(([r,o])=>{r===V&&(n=n.concat(t(o,r)))}),Object.entries(e.children).forEach(([r,o])=>{r!==V&&(n=n.concat(t(o,r)))}),n}var pl=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:()=>new Lr,providedIn:"root"})}return e})(),Lr=class{parse(t){let n=new dh(t);return new Xt(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){let n=`/${Rs(t.root,!0)}`,r=mR(t.queryParams),o=typeof t.fragment=="string"?`#${hR(t.fragment)}`:"";return`${n}${r}${o}`}},fR=new Lr;function nl(e){return e.segments.map(t=>SD(t)).join("/")}function Rs(e,t){if(!e.hasChildren())return nl(e);if(t){let n=e.children[V]?Rs(e.children[V],!1):"",r=[];return Object.entries(e.children).forEach(([o,i])=>{o!==V&&r.push(`${o}:${Rs(i,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}else{let n=dR(e,(r,o)=>o===V?[Rs(e.children[V],!1)]:[`${o}:${Rs(r,!1)}`]);return Object.keys(e.children).length===1&&e.children[V]!=null?`${nl(e)}/${n[0]}`:`${nl(e)}/(${n.join("//")})`}}function vD(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Xc(e){return vD(e).replace(/%3B/gi,";")}function hR(e){return encodeURI(e)}function uh(e){return vD(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function rl(e){return decodeURIComponent(e)}function oD(e){return rl(e.replace(/\+/g,"%20"))}function SD(e){return`${uh(e.path)}${pR(e.parameters)}`}function pR(e){return Object.entries(e).map(([t,n])=>`;${uh(t)}=${uh(n)}`).join("")}function mR(e){let t=Object.entries(e).map(([n,r])=>Array.isArray(r)?r.map(o=>`${Xc(n)}=${Xc(o)}`).join("&"):`${Xc(n)}=${Xc(r)}`).filter(n=>n);return t.length?`?${t.join("&")}`:""}var gR=/^[^\/()?;#]+/;function ih(e){let t=e.match(gR);return t?t[0]:""}var yR=/^[^\/()?;=#]+/;function vR(e){let t=e.match(yR);return t?t[0]:""}var SR=/^[^=?&#]+/;function DR(e){let t=e.match(SR);return t?t[0]:""}var bR=/^[^&#]+/;function ER(e){let t=e.match(bR);return t?t[0]:""}var dh=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ne([],{}):new ne([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(t=0){if(t>50)throw new k(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let n=[];for(this.peekStartsWith("(")||n.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),n.push(this.parseSegment());let r={};this.peekStartsWith("/(")&&(this.capture("/"),r=this.parseParens(!0,t));let o={};return this.peekStartsWith("(")&&(o=this.parseParens(!1,t)),(n.length>0||Object.keys(r).length>0)&&(o[V]=new ne(n,r)),o}parseSegment(){let t=ih(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new k(4009,!1);return this.capture(t),new Or(rl(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let n=vR(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let o=ih(this.remaining);o&&(r=o,this.capture(r))}t[rl(n)]=rl(r)}parseQueryParam(t){let n=DR(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let a=ER(this.remaining);a&&(r=a,this.capture(r))}let o=oD(n),i=oD(r);if(t.hasOwnProperty(o)){let a=t[o];Array.isArray(a)||(a=[a],t[o]=a),a.push(i)}else t[o]=i}parseParens(t,n){let r={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let o=ih(this.remaining),i=this.remaining[o.length];if(i!=="/"&&i!==")"&&i!==";")throw new k(4010,!1);let a;o.indexOf(":")>-1?(a=o.slice(0,o.indexOf(":")),this.capture(a),this.capture(":")):t&&(a=V);let c=this.parseChildren(n+1);r[a??V]=Object.keys(c).length===1&&c[V]?c[V]:new ne([],c),this.consumeOptional("//")}return r}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new k(4011,!1)}};function DD(e){return e.segments.length>0?new ne([],{[V]:e}):e}function bD(e){let t={};for(let[r,o]of Object.entries(e.children)){let i=bD(o);if(r===V&&i.segments.length===0&&i.hasChildren())for(let[a,c]of Object.entries(i.children))t[a]=c;else(i.segments.length>0||i.hasChildren())&&(t[r]=i)}let n=new ne(e.segments,t);return TR(n)}function TR(e){if(e.numberOfChildren===1&&e.children[V]){let t=e.children[V];return new ne(e.segments.concat(t.segments),t.children)}return e}function Yo(e){return e instanceof Xt}function wR(e,t,n=null,r=null,o=new Lr){let i=ED(e);return TD(i,t,n,r,o)}function ED(e){let t;function n(i){let a={};for(let l of i.children){let u=n(l);a[l.outlet]=u}let c=new ne(i.url,a);return i===e&&(t=c),c}let r=n(e.root),o=DD(r);return t??o}function TD(e,t,n,r,o){let i=e;for(;i.parent;)i=i.parent;if(t.length===0)return sh(i,i,i,n,r,o);let a=CR(t);if(a.toRoot())return sh(i,i,new ne([],{}),n,r,o);let c=IR(a,i,e),l=c.processChildren?Ms(c.segmentGroup,c.index,a.commands):CD(c.segmentGroup,c.index,a.commands);return sh(i,c.segmentGroup,l,n,r,o)}function il(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function Ns(e){return typeof e=="object"&&e!=null&&e.outlets}function iD(e,t,n){e||="\u0275";let r=new Xt;return r.queryParams={[e]:t},n.parse(n.serialize(r)).queryParams[e]}function sh(e,t,n,r,o,i){let a={};for(let[u,d]of Object.entries(r??{}))a[u]=Array.isArray(d)?d.map(f=>iD(u,f,i)):iD(u,d,i);let c;e===t?c=n:c=wD(e,t,n);let l=DD(bD(c));return new Xt(l,a,o)}function wD(e,t,n){let r={};return Object.entries(e.children).forEach(([o,i])=>{i===t?r[o]=n:r[o]=wD(i,t,n)}),new ne(e.segments,r)}var sl=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&il(r[0]))throw new k(4003,!1);let o=r.find(Ns);if(o&&o!==sR(r))throw new k(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function CR(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new sl(!0,0,e);let t=0,n=!1,r=e.reduce((o,i,a)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let c={};return Object.entries(i.outlets).forEach(([l,u])=>{c[l]=typeof u=="string"?u.split("/"):u}),[...o,{outlets:c}]}if(i.segmentPath)return[...o,i.segmentPath]}return typeof i!="string"?[...o,i]:a===0?(i.split("/").forEach((c,l)=>{l==0&&c==="."||(l==0&&c===""?n=!0:c===".."?t++:c!=""&&o.push(c))}),o):[...o,i]},[]);return new sl(n,t,r)}var Go=class{segmentGroup;processChildren;index;constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}};function IR(e,t,n){if(e.isAbsolute)return new Go(t,!0,0);if(!n)return new Go(t,!1,NaN);if(n.parent===null)return new Go(n,!0,0);let r=il(e.commands[0])?0:1,o=n.segments.length-1+r;return RR(n,o,e.numberOfDoubleDots)}function RR(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new k(4005,!1);o=r.segments.length}return new Go(r,!1,o-i)}function PR(e){return Ns(e[0])?e[0].outlets:{[V]:e}}function CD(e,t,n){if(e??=new ne([],{}),e.segments.length===0&&e.hasChildren())return Ms(e,t,n);let r=MR(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){let i=new ne(e.segments.slice(0,r.pathIndex),{});return i.children[V]=new ne(e.segments.slice(r.pathIndex),e.children),Ms(i,0,o)}else return r.match&&o.length===0?new ne(e.segments,{}):r.match&&!e.hasChildren()?fh(e,t,n):r.match?Ms(e,0,o):fh(e,t,n)}function Ms(e,t,n){if(n.length===0)return new ne(e.segments,{});{let r=PR(n),o={};if(Object.keys(r).some(i=>i!==V)&&e.children[V]&&e.numberOfChildren===1&&e.children[V].segments.length===0){let i=Ms(e.children[V],t,n);return new ne(e.segments,i.children)}return Object.entries(r).forEach(([i,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(o[i]=CD(e.children[i],t,a))}),Object.entries(e.children).forEach(([i,a])=>{r[i]===void 0&&(o[i]=a)}),new ne(e.segments,o)}}function MR(e,t,n){let r=0,o=t,i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;let a=e.segments[o],c=n[r];if(Ns(c))break;let l=`${c}`,u=r<n.length-1?n[r+1]:null;if(o>0&&l===void 0)break;if(l&&u&&typeof u=="object"&&u.outlets===void 0){if(!aD(l,u,a))return i;r+=2}else{if(!aD(l,{},a))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}function fh(e,t,n){let r=e.segments.slice(0,t),o=0;for(;o<n.length;){let i=n[o];if(Ns(i)){let l=_R(i.outlets);return new ne(r,l)}if(o===0&&il(n[0])){let l=e.segments[t];r.push(new Or(l.path,sD(n[0]))),o++;continue}let a=Ns(i)?i.outlets[V]:`${i}`,c=o<n.length-1?n[o+1]:null;a&&c&&il(c)?(r.push(new Or(a,sD(c))),o+=2):(r.push(new Or(a,{})),o++)}return new ne(r,{})}function _R(e){let t={};return Object.entries(e).forEach(([n,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(t[n]=fh(new ne([],{}),0,r))}),t}function sD(e){let t={};return Object.entries(e).forEach(([n,r])=>t[n]=`${r}`),t}function aD(e,t,n){return e==n.path&&Jt(t,n.parameters)}var _s="imperative",Ue=(function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e})(Ue||{}),vt=class{id;url;constructor(t,n){this.id=t,this.url=n}},Zo=class extends vt{type=Ue.NavigationStart;navigationTrigger;restoredState;constructor(t,n,r="imperative",o=null){super(t,n),this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},zn=class extends vt{urlAfterRedirects;type=Ue.NavigationEnd;constructor(t,n,r){super(t,n),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ge=(function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e[e.Aborted=4]="Aborted",e})(Ge||{}),al=(function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e})(al||{}),xt=class extends vt{reason;code;type=Ue.NavigationCancel;constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function ID(e){return e instanceof xt&&(e.code===Ge.Redirect||e.code===Ge.SupersededByNewNavigation)}var Wn=class extends vt{reason;code;type=Ue.NavigationSkipped;constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o}},Jo=class extends vt{error;target;type=Ue.NavigationError;constructor(t,n,r,o){super(t,n),this.error=r,this.target=o}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},xs=class extends vt{urlAfterRedirects;state;type=Ue.RoutesRecognized;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},hh=class extends vt{urlAfterRedirects;state;type=Ue.GuardsCheckStart;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ph=class extends vt{urlAfterRedirects;state;shouldActivate;type=Ue.GuardsCheckEnd;constructor(t,n,r,o,i){super(t,n),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},mh=class extends vt{urlAfterRedirects;state;type=Ue.ResolveStart;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},gh=class extends vt{urlAfterRedirects;state;type=Ue.ResolveEnd;constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},yh=class{route;type=Ue.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},vh=class{route;type=Ue.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Sh=class{snapshot;type=Ue.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Dh=class{snapshot;type=Ue.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},bh=class{snapshot;type=Ue.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Eh=class{snapshot;type=Ue.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Xo=class{},ei=class{url;navigationBehaviorOptions;constructor(t,n){this.url=t,this.navigationBehaviorOptions=n}};function kR(e){return!(e instanceof Xo)&&!(e instanceof ei)}var Th=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new Hs(this.rootInjector)}},Hs=(()=>{class e{rootInjector;contexts=new Map;constructor(n){this.rootInjector=n}onChildOutletCreated(n,r){let o=this.getOrCreateContext(n);o.outlet=r,this.contexts.set(n,o)}onChildOutletDestroyed(n){let r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new Th(this.rootInjector),this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}static \u0275fac=function(r){return new(r||e)(A(me))};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),cl=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){let n=wh(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){let n=wh(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){let n=Ch(t,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==t)}pathFromRoot(t){return Ch(t,this._root).map(n=>n.value)}};function wh(e,t){if(e===t.value)return t;for(let n of t.children){let r=wh(e,n);if(r)return r}return null}function Ch(e,t){if(e===t.value)return[t];for(let n of t.children){let r=Ch(e,n);if(r.length)return r.unshift(t),r}return[]}var ct=class{value;children;constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}};function Wo(e){let t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t}var ll=class extends cl{snapshot;constructor(t,n){super(t),this.snapshot=n,Ah(this,t)}toString(){return this.snapshot.toString()}};function RD(e,t){let n=NR(e,t),r=new ce([new Or("",{})]),o=new ce({}),i=new ce({}),a=new ce({}),c=new ce(""),l=new Hr(r,o,a,c,i,V,e,n.root);return l.snapshot=n.root,new ll(new ct(l,[]),n)}function NR(e,t){let n={},r={},o={},a=new qo([],n,o,"",r,V,e,null,{},t);return new dl("",new ct(a,[]))}var Hr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,n,r,o,i,a,c,l){this.urlSubject=t,this.paramsSubject=n,this.queryParamsSubject=r,this.fragmentSubject=o,this.dataSubject=i,this.outlet=a,this.component=c,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(L(u=>u[Ls]))??U(void 0),this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(L(t=>Ko(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(L(t=>Ko(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ul(e,t,n="emptyOnly"){let r,{routeConfig:o}=e;return t!==null&&(n==="always"||o?.path===""||!t.component&&!t.routeConfig?.loadComponent)?r={params:g(g({},t.params),e.params),data:g(g({},t.data),e.data),resolve:g(g(g(g({},e.data),t.data),o?.data),e._resolvedData)}:r={params:g({},e.params),data:g({},e.data),resolve:g(g({},e.data),e._resolvedData??{})},o&&MD(o)&&(r.resolve[Ls]=o.title),r}var qo=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Ls]}constructor(t,n,r,o,i,a,c,l,u,d){this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=a,this.component=c,this.routeConfig=l,this._resolve=u,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ko(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ko(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(r=>r.toString()).join("/"),n=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${n}')`}},dl=class extends cl{url;constructor(t,n){super(n),this.url=t,Ah(this,n)}toString(){return PD(this._root)}};function Ah(e,t){t.value._routerState=e,t.children.forEach(n=>Ah(e,n))}function PD(e){let t=e.children.length>0?` { ${e.children.map(PD).join(", ")} } `:"";return`${e.value}${t}`}function ah(e){if(e.snapshot){let t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,Jt(t.queryParams,n.queryParams)||e.queryParamsSubject.next(n.queryParams),t.fragment!==n.fragment&&e.fragmentSubject.next(n.fragment),Jt(t.params,n.params)||e.paramsSubject.next(n.params),iR(t.url,n.url)||e.urlSubject.next(n.url),Jt(t.data,n.data)||e.dataSubject.next(n.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function Ih(e,t){let n=Jt(e.params,t.params)&&uR(e.url,t.url),r=!e.parent!=!t.parent;return n&&!r&&(!e.parent||Ih(e.parent,t.parent))}function MD(e){return typeof e.title=="string"||e.title===null}var xR=new N(""),_D=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=V;activateEvents=new Ve;deactivateEvents=new Ve;attachEvents=new Ve;detachEvents=new Ve;routerOutletData=vy();parentContexts=I(Hs);location=I(Vi);changeDetector=I(kd);inputBinder=I(ml,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(n){if(n.name){let{firstChange:r,previousValue:o}=n.name;if(r)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(n){return this.parentContexts.getContext(n)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let n=this.parentContexts.getContext(this.name);n?.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new k(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new k(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new k(4012,!1);this.location.detach();let n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){let n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new k(4013,!1);this._activatedRoute=n;let o=this.location,a=n.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new Rh(n,c,o.injector,this.routerOutletData);this.activated=o.createComponent(a,{index:o.length,injector:l,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(r){return new(r||e)};static \u0275dir=sc({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Za]})}return e})(),Rh=class{route;childContexts;parent;outletData;constructor(t,n,r,o){this.route=t,this.childContexts=n,this.parent=r,this.outletData=o}get(t,n){return t===Hr?this.route:t===Hs?this.childContexts:t===xR?this.outletData:this.parent.get(t,n)}},ml=new N("");var kD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=X({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(r,o){r&1&&$t(0,"router-outlet")},dependencies:[_D],encapsulation:2})}return e})();function Oh(e){let t=e.children&&e.children.map(Oh),n=t?C(g({},e),{children:t}):g({},e);return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==V&&(n.component=kD),n}function AR(e,t,n){let r=As(e,t._root,n?n._root:void 0);return new ll(r,t)}function As(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){let r=n.value;r._futureSnapshot=t.value;let o=OR(e,t,n);return new ct(r,o)}else{if(e.shouldAttach(t.value)){let i=e.retrieve(t.value);if(i!==null){let a=i.route;return a.value._futureSnapshot=t.value,a.children=t.children.map(c=>As(e,c)),a}}let r=FR(t.value),o=t.children.map(i=>As(e,i));return new ct(r,o)}}function OR(e,t,n){return t.children.map(r=>{for(let o of n.children)if(e.shouldReuseRoute(r.value,o.value.snapshot))return As(e,r,o);return As(e,r)})}function FR(e){return new Hr(new ce(e.url),new ce(e.params),new ce(e.queryParams),new ce(e.fragment),new ce(e.data),e.outlet,e.component,e)}var Os=class{redirectTo;navigationBehaviorOptions;constructor(t,n){this.redirectTo=t,this.navigationBehaviorOptions=n}},ND="ngNavigationCancelingError";function fl(e,t){let{redirectTo:n,navigationBehaviorOptions:r}=Yo(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,o=xD(!1,Ge.Redirect);return o.url=n,o.navigationBehaviorOptions=r,o}function xD(e,t){let n=new Error(`NavigationCancelingError: ${e||""}`);return n[ND]=!0,n.cancellationCode=t,n}function LR(e){return AD(e)&&Yo(e.url)}function AD(e){return!!e&&e[ND]}var Ph=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,n,r,o,i){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=o,this.inputBindingEnabled=i}activate(t){let n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),ah(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){let o=Wo(n);t.children.forEach(i=>{let a=i.value.outlet;this.deactivateRoutes(i,o[a],r),delete o[a]}),Object.values(o).forEach(i=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(o===i)if(o.component){let a=r.getContext(o.outlet);a&&this.deactivateChildRoutes(t,n,a.children)}else this.deactivateChildRoutes(t,n,r);else i&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=Wo(t);for(let a of Object.values(i))this.deactivateRouteAndItsChildren(a,o);if(r&&r.outlet){let a=r.outlet.detach(),c=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:a,route:t,contexts:c})}}deactivateRouteAndOutlet(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=Wo(t);for(let a of Object.values(i))this.deactivateRouteAndItsChildren(a,o);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(t,n,r){let o=Wo(n);t.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new Eh(i.value.snapshot))}),t.children.length&&this.forwardEvent(new Dh(t.value.snapshot))}activateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(ah(o),o===i)if(o.component){let a=r.getOrCreateContext(o.outlet);this.activateChildRoutes(t,n,a.children)}else this.activateChildRoutes(t,n,r);else if(o.component){let a=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let c=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),a.children.onOutletReAttached(c.contexts),a.attachRef=c.componentRef,a.route=c.route.value,a.outlet&&a.outlet.attach(c.componentRef,c.route.value),ah(c.route.value),this.activateChildRoutes(t,null,a.children)}else a.attachRef=null,a.route=o,a.outlet&&a.outlet.activateWith(o,a.injector),this.activateChildRoutes(t,null,a.children)}else this.activateChildRoutes(t,null,r)}},hl=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},Qo=class{component;route;constructor(t,n){this.component=t,this.route=n}};function HR(e,t,n){let r=e._root,o=t?t._root:null;return Ps(r,o,n,[r.value])}function UR(e){let t=e.routeConfig?e.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:e,guards:t}}function ni(e,t){let n=Symbol(),r=t.get(e,n);return r===n?typeof e=="function"&&!au(e)?e:t.get(e):r}function Ps(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=Wo(t);return e.children.forEach(a=>{jR(a,i[a.value.outlet],n,r.concat([a.value]),o),delete i[a.value.outlet]}),Object.entries(i).forEach(([a,c])=>ks(c,n.getContext(a),o)),o}function jR(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,a=t?t.value:null,c=n?n.getContext(e.value.outlet):null;if(a&&i.routeConfig===a.routeConfig){let l=BR(a,i,i.routeConfig.runGuardsAndResolvers);l?o.canActivateChecks.push(new hl(r)):(i.data=a.data,i._resolvedData=a._resolvedData),i.component?Ps(e,t,c?c.children:null,r,o):Ps(e,t,n,r,o),l&&c&&c.outlet&&c.outlet.isActivated&&o.canDeactivateChecks.push(new Qo(c.outlet.component,a))}else a&&ks(t,c,o),o.canActivateChecks.push(new hl(r)),i.component?Ps(e,null,c?c.children:null,r,o):Ps(e,null,n,r,o);return o}function BR(e,t,n){if(typeof n=="function")return ke(t._environmentInjector,()=>n(e,t));switch(n){case"pathParamsChange":return!Fr(e.url,t.url);case"pathParamsOrQueryParamsChange":return!Fr(e.url,t.url)||!Jt(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Ih(e,t)||!Jt(e.queryParams,t.queryParams);default:return!Ih(e,t)}}function ks(e,t,n){let r=Wo(e),o=e.value;Object.entries(r).forEach(([i,a])=>{o.component?t?ks(a,t.children.getContext(i),n):ks(a,null,n):ks(a,t,n)}),o.component?t&&t.outlet&&t.outlet.isActivated?n.canDeactivateChecks.push(new Qo(t.outlet.component,o)):n.canDeactivateChecks.push(new Qo(null,o)):n.canDeactivateChecks.push(new Qo(null,o))}function Us(e){return typeof e=="function"}function VR(e){return typeof e=="boolean"}function $R(e){return e&&Us(e.canLoad)}function zR(e){return e&&Us(e.canActivate)}function WR(e){return e&&Us(e.canActivateChild)}function GR(e){return e&&Us(e.canDeactivate)}function qR(e){return e&&Us(e.canMatch)}function OD(e){return e instanceof tn||e?.name==="EmptyError"}var el=Symbol("INITIAL_VALUE");function ti(){return Dt(e=>Ul(e.map(t=>t.pipe(nn(1),di(el)))).pipe(L(t=>{for(let n of t)if(n!==!0){if(n===el)return el;if(n===!1||QR(n))return n}return!0}),Ee(t=>t!==el),nn(1)))}function QR(e){return Yo(e)||e instanceof Os}function FD(e){return e.aborted?U(void 0).pipe(nn(1)):new O(t=>{let n=()=>{t.next(),t.complete()};return e.addEventListener("abort",n),()=>e.removeEventListener("abort",n)})}function LD(e){return fi(FD(e))}function KR(e){return De(t=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:o,canDeactivateChecks:i}}=t;return i.length===0&&o.length===0?U(C(g({},t),{guardsResult:!0})):YR(i,n,r).pipe(De(a=>a&&VR(a)?ZR(n,o,e):U(a)),L(a=>C(g({},t),{guardsResult:a})))})}function YR(e,t,n){return ue(e).pipe(De(r=>nP(r.component,r.route,n,t)),rn(r=>r!==!0,!0))}function ZR(e,t,n){return ue(t).pipe(Qr(r=>At(XR(r.route.parent,n),JR(r.route,n),tP(e,r.path),eP(e,r.route))),rn(r=>r!==!0,!0))}function JR(e,t){return e!==null&&t&&t(new bh(e)),U(!0)}function XR(e,t){return e!==null&&t&&t(new Sh(e)),U(!0)}function eP(e,t){let n=t.routeConfig?t.routeConfig.canActivate:null;if(!n||n.length===0)return U(!0);let r=n.map(o=>ui(()=>{let i=t._environmentInjector,a=ni(o,i),c=zR(a)?a.canActivate(t,e):ke(i,()=>a(t,e));return Ur(c).pipe(rn())}));return U(r).pipe(ti())}function tP(e,t){let n=t[t.length-1],o=t.slice(0,t.length-1).reverse().map(i=>UR(i)).filter(i=>i!==null).map(i=>ui(()=>{let a=i.guards.map(c=>{let l=i.node._environmentInjector,u=ni(c,l),d=WR(u)?u.canActivateChild(n,e):ke(l,()=>u(n,e));return Ur(d).pipe(rn())});return U(a).pipe(ti())}));return U(o).pipe(ti())}function nP(e,t,n,r){let o=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!o||o.length===0)return U(!0);let i=o.map(a=>{let c=t._environmentInjector,l=ni(a,c),u=GR(l)?l.canDeactivate(e,t,n,r):ke(c,()=>l(e,t,n,r));return Ur(u).pipe(rn())});return U(i).pipe(ti())}function rP(e,t,n,r,o){let i=t.canLoad;if(i===void 0||i.length===0)return U(!0);let a=i.map(c=>{let l=ni(c,e),u=$R(l)?l.canLoad(t,n):ke(e,()=>l(t,n)),d=Ur(u);return o?d.pipe(LD(o)):d});return U(a).pipe(ti(),HD(r))}function HD(e){return Al(Pe(t=>{if(typeof t!="boolean")throw fl(e,t)}),L(t=>t===!0))}function oP(e,t,n,r,o){let i=t.canMatch;if(!i||i.length===0)return U(!0);let a=i.map(c=>{let l=ni(c,e),u=qR(l)?l.canMatch(t,n):ke(e,()=>l(t,n));return Ur(u).pipe(LD(o))});return U(a).pipe(ti(),HD(r))}var En=class e extends Error{segmentGroup;constructor(t){super(),this.segmentGroup=t||null,Object.setPrototypeOf(this,e.prototype)}},Fs=class e extends Error{urlTree;constructor(t){super(),this.urlTree=t,Object.setPrototypeOf(this,e.prototype)}};function iP(e){throw new k(4e3,!1)}function sP(e){throw xD(!1,Ge.GuardRejected)}var Mh=class{urlSerializer;urlTree;constructor(t,n){this.urlSerializer=t,this.urlTree=n}lineralizeSegments(t,n){return ee(this,null,function*(){let r=[],o=n.root;for(;;){if(r=r.concat(o.segments),o.numberOfChildren===0)return r;if(o.numberOfChildren>1||!o.children[V])throw iP(`${t.redirectTo}`);o=o.children[V]}})}applyRedirectCommands(t,n,r,o,i){return ee(this,null,function*(){let a=yield aP(n,o,i);if(a instanceof Xt)throw new Fs(a);let c=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),t,r);if(a[0]==="/")throw new Fs(c);return c})}applyRedirectCreateUrlTree(t,n,r,o){let i=this.createSegmentGroup(t,n.root,r,o);return new Xt(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){let r={};return Object.entries(t).forEach(([o,i])=>{if(typeof i=="string"&&i[0]===":"){let c=i.substring(1);r[o]=n[c]}else r[o]=i}),r}createSegmentGroup(t,n,r,o){let i=this.createSegments(t,n.segments,r,o),a={};return Object.entries(n.children).forEach(([c,l])=>{a[c]=this.createSegmentGroup(t,l,r,o)}),new ne(i,a)}createSegments(t,n,r,o){return n.map(i=>i.path[0]===":"?this.findPosParam(t,i,o):this.findOrReturn(i,r))}findPosParam(t,n,r){let o=r[n.path.substring(1)];if(!o)throw new k(4001,!1);return o}findOrReturn(t,n){let r=0;for(let o of n){if(o.path===t.path)return n.splice(r),o;r++}return t}};function aP(e,t,n){if(typeof e=="string")return Promise.resolve(e);let r=e,{queryParams:o,fragment:i,routeConfig:a,url:c,outlet:l,params:u,data:d,title:f,paramMap:p,queryParamMap:h}=t;return ol(Ur(ke(n,()=>r({params:u,data:d,queryParams:o,fragment:i,routeConfig:a,url:c,outlet:l,title:f,paramMap:p,queryParamMap:h}))))}function cP(e,t){return e.providers&&!e._injector&&(e._injector=$i(e.providers,t,`Route: ${e.path}`)),e._injector??t}function Nt(e){return e.outlet||V}function lP(e,t){let n=e.filter(r=>Nt(r)===t);return n.push(...e.filter(r=>Nt(r)!==t)),n}var _h={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function uP(e,t,n,r,o,i){let a=UD(e,t,n);return a.matched?(r=cP(t,r),oP(r,t,n,o,i).pipe(L(c=>c===!0?a:g({},_h)))):U(a)}function UD(e,t,n){if(t.path==="")return t.pathMatch==="full"&&(e.hasChildren()||n.length>0)?g({},_h):{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};let o=(t.matcher||oR)(n,e,t);if(!o)return g({},_h);let i={};Object.entries(o.posParams??{}).forEach(([c,l])=>{i[c]=l.path});let a=o.consumed.length>0?g(g({},i),o.consumed[o.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:o.consumed,remainingSegments:n.slice(o.consumed.length),parameters:a,positionalParamSegments:o.posParams??{}}}function cD(e,t,n,r){return n.length>0&&hP(e,n,r)?{segmentGroup:new ne(t,fP(r,new ne(n,e.children))),slicedSegments:[]}:n.length===0&&pP(e,n,r)?{segmentGroup:new ne(e.segments,dP(e,n,r,e.children)),slicedSegments:n}:{segmentGroup:new ne(e.segments,e.children),slicedSegments:n}}function dP(e,t,n,r){let o={};for(let i of n)if(gl(e,t,i)&&!r[Nt(i)]){let a=new ne([],{});o[Nt(i)]=a}return g(g({},r),o)}function fP(e,t){let n={};n[V]=t;for(let r of e)if(r.path===""&&Nt(r)!==V){let o=new ne([],{});n[Nt(r)]=o}return n}function hP(e,t,n){return n.some(r=>gl(e,t,r)&&Nt(r)!==V)}function pP(e,t,n){return n.some(r=>gl(e,t,r))}function gl(e,t,n){return(e.hasChildren()||t.length>0)&&n.pathMatch==="full"?!1:n.path===""}function mP(e,t,n){return t.length===0&&!e.children[n]}var kh=class{};function gP(e,t,n,r,o,i,a="emptyOnly",c){return ee(this,null,function*(){return new Nh(e,t,n,r,o,a,i,c).recognize()})}var yP=31,Nh=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,n,r,o,i,a,c,l){this.injector=t,this.configLoader=n,this.rootComponentType=r,this.config=o,this.urlTree=i,this.paramsInheritanceStrategy=a,this.urlSerializer=c,this.abortSignal=l,this.applyRedirects=new Mh(this.urlSerializer,this.urlTree)}noMatchError(t){return new k(4002,`'${t.segmentGroup}'`)}recognize(){return ee(this,null,function*(){let t=cD(this.urlTree.root,[],[],this.config).segmentGroup,{children:n,rootSnapshot:r}=yield this.match(t),o=new ct(r,n),i=new dl("",o),a=wR(r,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(a),{state:i,tree:a}})}match(t){return ee(this,null,function*(){let n=new qo([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),V,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,t,V,n),rootSnapshot:n}}catch(r){if(r instanceof Fs)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof En?this.noMatchError(r):r}})}processSegmentGroup(t,n,r,o,i){return ee(this,null,function*(){if(r.segments.length===0&&r.hasChildren())return this.processChildren(t,n,r,i);let a=yield this.processSegment(t,n,r,r.segments,o,!0,i);return a instanceof ct?[a]:[]})}processChildren(t,n,r,o){return ee(this,null,function*(){let i=[];for(let l of Object.keys(r.children))l==="primary"?i.unshift(l):i.push(l);let a=[];for(let l of i){let u=r.children[l],d=lP(n,l),f=yield this.processSegmentGroup(t,d,u,l,o);a.push(...f)}let c=jD(a);return vP(c),c})}processSegment(t,n,r,o,i,a,c){return ee(this,null,function*(){for(let l of n)try{return yield this.processSegmentAgainstRoute(l._injector??t,n,l,r,o,i,a,c)}catch(u){if(u instanceof En||OD(u))continue;throw u}if(mP(r,o,i))return new kh;throw new En(r)})}processSegmentAgainstRoute(t,n,r,o,i,a,c,l){return ee(this,null,function*(){if(Nt(r)!==a&&(a===V||!gl(o,i,r)))throw new En(o);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(t,o,r,i,a,l);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(t,o,n,r,i,a,l);throw new En(o)})}expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,a,c){return ee(this,null,function*(){let{matched:l,parameters:u,consumedSegments:d,positionalParamSegments:f,remainingSegments:p}=UD(n,o,i);if(!l)throw new En(n);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>yP&&(this.allowRedirects=!1));let h=new qo(i,u,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,lD(o),Nt(o),o.component??o._loadedComponent??null,o,uD(o),t),S=ul(h,c,this.paramsInheritanceStrategy);if(h.params=Object.freeze(S.params),h.data=Object.freeze(S.data),this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let y=yield this.applyRedirects.applyRedirectCommands(d,o.redirectTo,f,h,t),v=yield this.applyRedirects.lineralizeSegments(o,y);return this.processSegment(t,r,n,v.concat(p),a,!1,c)})}matchSegmentAgainstRoute(t,n,r,o,i,a){return ee(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=yield ol(uP(n,r,o,t,this.urlSerializer,this.abortSignal));if(r.path==="**"&&(n.children={}),!c?.matched)throw new En(n);t=r._injector??t;let{routes:l}=yield this.getChildConfig(t,r,o),u=r._loadedInjector??t,{parameters:d,consumedSegments:f,remainingSegments:p}=c,h=new qo(f,d,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,lD(r),Nt(r),r.component??r._loadedComponent??null,r,uD(r),t),S=ul(h,a,this.paramsInheritanceStrategy);h.params=Object.freeze(S.params),h.data=Object.freeze(S.data);let{segmentGroup:y,slicedSegments:v}=cD(n,f,p,l);if(v.length===0&&y.hasChildren()){let x=yield this.processChildren(u,l,y,h);return new ct(h,x)}if(l.length===0&&v.length===0)return new ct(h,[]);let D=Nt(r)===i,E=yield this.processSegment(u,l,y,v,D?V:i,!0,h);return new ct(h,E instanceof ct?[E]:[])})}getChildConfig(t,n,r){return ee(this,null,function*(){if(n.children)return{routes:n.children,injector:t};if(n.loadChildren){if(n._loadedRoutes!==void 0){let i=n._loadedNgModuleFactory;return i&&!n._loadedInjector&&(n._loadedInjector=i.create(t).injector),{routes:n._loadedRoutes,injector:n._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield ol(rP(t,n,r,this.urlSerializer,this.abortSignal))){let i=yield this.configLoader.loadChildren(t,n);return n._loadedRoutes=i.routes,n._loadedInjector=i.injector,n._loadedNgModuleFactory=i.factory,i}throw sP(n)}return{routes:[],injector:t}})}};function vP(e){e.sort((t,n)=>t.value.outlet===V?-1:n.value.outlet===V?1:t.value.outlet.localeCompare(n.value.outlet))}function SP(e){let t=e.value.routeConfig;return t&&t.path===""}function jD(e){let t=[],n=new Set;for(let r of e){if(!SP(r)){t.push(r);continue}let o=t.find(i=>r.value.routeConfig===i.value.routeConfig);o!==void 0?(o.children.push(...r.children),n.add(o)):t.push(r)}for(let r of n){let o=jD(r.children);t.push(new ct(r.value,o))}return t.filter(r=>!n.has(r))}function lD(e){return e.data||{}}function uD(e){return e.resolve||{}}function DP(e,t,n,r,o,i,a){return De(c=>ee(null,null,function*(){let{state:l,tree:u}=yield gP(e,t,n,r,c.extractedUrl,o,i,a);return C(g({},c),{targetSnapshot:l,urlAfterRedirects:u})}))}function bP(e){return De(t=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=t;if(!r.length)return U(t);let o=new Set(r.map(c=>c.route)),i=new Set;for(let c of o)if(!i.has(c))for(let l of BD(c))i.add(l);let a=0;return ue(i).pipe(Qr(c=>o.has(c)?EP(c,n,e):(c.data=ul(c,c.parent,e).resolve,U(void 0))),Pe(()=>a++),ga(1),De(c=>a===i.size?U(t):le))})}function BD(e){let t=e.children.map(n=>BD(n)).flat();return[e,...t]}function EP(e,t,n){let r=e.routeConfig,o=e._resolve;return r?.title!==void 0&&!MD(r)&&(o[Ls]=r.title),ui(()=>(e.data=ul(e,e.parent,n).resolve,TP(o,e,t).pipe(L(i=>(e._resolvedData=i,e.data=g(g({},e.data),i),null)))))}function TP(e,t,n){let r=lh(e);if(r.length===0)return U({});let o={};return ue(r).pipe(De(i=>wP(e[i],t,n).pipe(rn(),Pe(a=>{if(a instanceof Os)throw fl(new Lr,a);o[i]=a}))),ga(1),L(()=>o),Ot(i=>OD(i)?le:Jn(i)))}function wP(e,t,n){let r=t._environmentInjector,o=ni(e,r),i=o.resolve?o.resolve(t,n):ke(r,()=>o(t,n));return Ur(i)}function dD(e){return Dt(t=>{let n=e(t);return n?ue(n).pipe(L(()=>t)):U(t)})}var VD=(()=>{class e{buildTitle(n){let r,o=n.root;for(;o!==void 0;)r=this.getResolvedTitleForRoute(o)??r,o=o.children.find(i=>i.outlet===V);return r}getResolvedTitleForRoute(n){return n.data[Ls]}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:()=>I(CP),providedIn:"root"})}return e})(),CP=(()=>{class e extends VD{title;constructor(n){super(),this.title=n}updateTitle(n){let r=this.buildTitle(n);r!==void 0&&this.title.setTitle(r)}static \u0275fac=function(r){return new(r||e)(A(Wy))};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),yl=new N("",{factory:()=>({})}),vl=new N(""),$D=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=I(Pd);loadComponent(n,r){return ee(this,null,function*(){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let o=ee(this,null,function*(){try{let i=yield hD(ke(n,()=>r.loadComponent())),a=yield WD(zD(i));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=a,a}finally{this.componentLoaders.delete(r)}});return this.componentLoaders.set(r,o),o})}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=ee(this,null,function*(){try{let i=yield IP(r,this.compiler,n,this.onLoadEndListener);return r._loadedRoutes=i.routes,r._loadedInjector=i.injector,r._loadedNgModuleFactory=i.factory,i}finally{this.childrenLoaders.delete(r)}});return this.childrenLoaders.set(r,o),o}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function IP(e,t,n,r){return ee(this,null,function*(){let o=yield hD(ke(n,()=>e.loadChildren())),i=yield WD(zD(o)),a;i instanceof ic||Array.isArray(i)?a=i:a=yield t.compileModuleAsync(i),r&&r(e);let c,l,u=!1,d;return Array.isArray(a)?(l=a,u=!0):(c=a.create(n).injector,d=a,l=c.get(vl,[],{optional:!0,self:!0}).flat()),{routes:l.map(Oh),injector:c,factory:d}})}function RP(e){return e&&typeof e=="object"&&"default"in e}function zD(e){return RP(e)?e.default:e}function WD(e){return ee(this,null,function*(){return e})}var Fh=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:()=>I(PP),providedIn:"root"})}return e})(),PP=(()=>{class e{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,r){return n}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),GD=new N("");var MP=()=>{},qD=new N(""),QD=(()=>{class e{currentNavigation=io(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=io(null);events=new he;transitionAbortWithErrorSubject=new he;configLoader=I($D);environmentInjector=I(me);destroyRef=I(xn);urlSerializer=I(pl);rootContexts=I(Hs);location=I(mo);inputBindingEnabled=I(ml,{optional:!0})!==null;titleStrategy=I(VD);options=I(yl,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=I(Fh);createViewTransition=I(GD,{optional:!0});navigationErrorHandler=I(qD,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>U(void 0);rootComponentType=null;destroyed=!1;constructor(){let n=o=>this.events.next(new yh(o)),r=o=>this.events.next(new vh(o));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=n,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(n){let r=++this.navigationId;dn(()=>{this.transitions?.next(C(g({},n),{extractedUrl:this.urlHandlingStrategy.extract(n.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r}))})}setupNavigations(n){return this.transitions=new ce(null),this.transitions.pipe(Ee(r=>r!==null),Dt(r=>{let o=!1,i=new AbortController,a=()=>!o&&this.currentTransition?.id===r.id;return U(r).pipe(Dt(c=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,"",Ge.SupersededByNewNavigation),le;this.currentTransition=r;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:l?C(g({},l),{previousNavigation:null}):null,abort:()=>i.abort()});let u=!n.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=c.extras.onSameUrlNavigation??n.onSameUrlNavigation;if(!u&&d!=="reload")return this.events.next(new Wn(c.id,this.urlSerializer.serialize(c.rawUrl),"",al.IgnoredSameUrlNavigation)),c.resolve(!1),le;if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return U(c).pipe(Dt(f=>(this.events.next(new Zo(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?le:Promise.resolve(f))),DP(this.environmentInjector,this.configLoader,this.rootComponentType,n.config,this.urlSerializer,this.paramsInheritanceStrategy,i.signal),Pe(f=>{r.targetSnapshot=f.targetSnapshot,r.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=f.urlAfterRedirects,h));let p=new xs(f.id,this.urlSerializer.serialize(f.extractedUrl),this.urlSerializer.serialize(f.urlAfterRedirects),f.targetSnapshot);this.events.next(p)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:f,extractedUrl:p,source:h,restoredState:S,extras:y}=c,v=new Zo(f,this.urlSerializer.serialize(p),h,S);this.events.next(v);let D=RD(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=C(g({},c),{targetSnapshot:D,urlAfterRedirects:p,extras:C(g({},y),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(E=>(E.finalUrl=p,E)),U(r)}else return this.events.next(new Wn(c.id,this.urlSerializer.serialize(c.extractedUrl),"",al.IgnoredByUrlHandlingStrategy)),c.resolve(!1),le}),L(c=>{let l=new hh(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);return this.events.next(l),this.currentTransition=r=C(g({},c),{guards:HR(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),r}),KR(c=>this.events.next(c)),Dt(c=>{if(r.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw fl(this.urlSerializer,c.guardsResult);let l=new ph(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);if(this.events.next(l),!a())return le;if(!c.guardsResult)return this.cancelNavigationTransition(c,"",Ge.GuardRejected),le;if(c.guards.canActivateChecks.length===0)return U(c);let u=new mh(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);if(this.events.next(u),!a())return le;let d=!1;return U(c).pipe(bP(this.paramsInheritanceStrategy),Pe({next:()=>{d=!0;let f=new gh(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(f)},complete:()=>{d||this.cancelNavigationTransition(c,"",Ge.NoDataFromResolver)}}))}),dD(c=>{let l=d=>{let f=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let p=d._environmentInjector;f.push(this.configLoader.loadComponent(p,d.routeConfig).then(h=>{d.component=h}))}for(let p of d.children)f.push(...l(p));return f},u=l(c.targetSnapshot.root);return u.length===0?U(c):ue(Promise.all(u).then(()=>c))}),dD(()=>this.afterPreactivation()),Dt(()=>{let{currentSnapshot:c,targetSnapshot:l}=r,u=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return u?ue(u).pipe(L(()=>r)):U(r)}),nn(1),L(c=>{let l=AR(n.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);this.currentTransition=r=c=C(g({},c),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new Xo),a()&&(new Ph(n.routeReuseStrategy,r.targetRouterState,r.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),a()&&(o=!0,this.currentNavigation.update(u=>(u.abort=MP,u)),this.lastSuccessfulNavigation.set(dn(this.currentNavigation)),this.events.next(new zn(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0)))}),fi(FD(i.signal).pipe(Ee(()=>!o&&!r.targetRouterState),Pe(()=>{this.cancelNavigationTransition(r,i.signal.reason+"",Ge.Aborted)}))),Pe({complete:()=>{o=!0}}),fi(this.transitionAbortWithErrorSubject.pipe(Pe(c=>{throw c}))),Cn(()=>{i.abort(),o||this.cancelNavigationTransition(r,"",Ge.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ot(c=>{if(o=!0,this.destroyed)return r.resolve(!1),le;if(AD(c))this.events.next(new xt(r.id,this.urlSerializer.serialize(r.extractedUrl),c.message,c.cancellationCode)),LR(c)?this.events.next(new ei(c.url,c.navigationBehaviorOptions)):r.resolve(!1);else{let l=new Jo(r.id,this.urlSerializer.serialize(r.extractedUrl),c,r.targetSnapshot??void 0);try{let u=ke(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(u instanceof Os){let{message:d,cancellationCode:f}=fl(this.urlSerializer,u);this.events.next(new xt(r.id,this.urlSerializer.serialize(r.extractedUrl),d,f)),this.events.next(new ei(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(l),c}catch(u){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(u)}}return le}))}))}cancelNavigationTransition(n,r,o){let i=new xt(n.id,this.urlSerializer.serialize(n.extractedUrl),r,o);this.events.next(i),n.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let n=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=dn(this.currentNavigation),o=r?.targetBrowserUrl??r?.extractedUrl;return n.toString()!==o?.toString()&&!r?.extras.skipLocationChange}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function _P(e){return e!==_s}var KD=new N("");var kP=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:()=>I(NP),providedIn:"root"})}return e})(),xh=class{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}shouldDestroyInjector(t){return!0}},NP=(()=>{class e extends xh{static \u0275fac=(()=>{let n;return function(o){return(n||(n=Ja(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Lh=(()=>{class e{urlSerializer=I(pl);options=I(yl,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=I(mo);urlHandlingStrategy=I(Fh);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Xt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:n,initialUrl:r,targetBrowserUrl:o}){let i=n!==void 0?this.urlHandlingStrategy.merge(n,r):r,a=o??i;return a instanceof Xt?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:n,finalUrl:r,initialUrl:o}){r&&n?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,o),this.routerState=n):this.rawUrlTree=o}routerState=RD(null,I(me));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:()=>I(xP),providedIn:"root"})}return e})(),xP=(()=>{class e extends Lh{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(n){return this.location.subscribe(r=>{r.type==="popstate"&&setTimeout(()=>{n(r.url,r.state,"popstate")})})}handleRouterEvent(n,r){n instanceof Zo?this.updateStateMemento():n instanceof Wn?this.commitTransition(r):n instanceof xs?this.urlUpdateStrategy==="eager"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):n instanceof Xo?(this.commitTransition(r),this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):n instanceof xt&&!ID(n)?this.restoreHistory(r):n instanceof Jo?this.restoreHistory(r,!0):n instanceof zn&&(this.lastSuccessfulId=n.id,this.currentPageId=this.browserPageId)}setBrowserUrl(n,{extras:r,id:o}){let{replaceUrl:i,state:a}=r;if(this.location.isCurrentPathEqualTo(n)||i){let c=this.browserPageId,l=g(g({},a),this.generateNgRouterState(o,c));this.location.replaceState(n,"",l)}else{let c=g(g({},a),this.generateNgRouterState(o,this.browserPageId+1));this.location.go(n,"",c)}}restoreHistory(n,r=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,i=this.currentPageId-o;i!==0?this.location.historyGo(i):this.getCurrentUrlTree()===n.finalUrl&&i===0&&(this.resetInternalState(n),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetInternalState(n),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:n}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(n,r){return this.canceledNavigationResolution==="computed"?{navigationId:n,\u0275routerPageId:r}:{navigationId:n}}static \u0275fac=(()=>{let n;return function(o){return(n||(n=Ja(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function YD(e,t){e.events.pipe(Ee(n=>n instanceof zn||n instanceof xt||n instanceof Jo||n instanceof Wn),L(n=>n instanceof zn||n instanceof Wn?0:(n instanceof xt?n.code===Ge.Redirect||n.code===Ge.SupersededByNewNavigation:!1)?2:1),Ee(n=>n!==2),nn(1)).subscribe(()=>{t()})}var ZD={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},JD={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Hh=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=I(Cd);stateManager=I(Lh);options=I(yl,{optional:!0})||{};pendingTasks=I(un);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=I(QD);urlSerializer=I(pl);location=I(mo);urlHandlingStrategy=I(Fh);injector=I(me);_events=new he;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=I(kP);injectorCleanup=I(KD,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=I(vl,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!I(ml,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:n=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Re;subscribeToNavigationEvents(){let n=this.navigationTransitions.events.subscribe(r=>{try{let o=this.navigationTransitions.currentTransition,i=dn(this.navigationTransitions.currentNavigation);if(o!==null&&i!==null){if(this.stateManager.handleRouterEvent(r,i),r instanceof xt&&r.code!==Ge.Redirect&&r.code!==Ge.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof zn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof ei){let a=r.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(r.url,o.currentRawUrl),l=g({scroll:o.extras.scroll,browserUrl:o.extras.browserUrl,info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:o.extras.replaceUrl||this.urlUpdateStrategy==="eager"||_P(o.source)},a);this.scheduleNavigation(c,_s,null,l,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}kR(r)&&this._events.next(r)}catch(o){this.navigationTransitions.transitionAbortWithErrorSubject.next(o)}});this.eventsSubscription.add(n)}resetRootComponentType(n){this.routerState.root.component=n,this.navigationTransitions.rootComponentType=n}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),_s,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((n,r,o)=>{this.navigateToSyncWithBrowser(n,o,r)})}navigateToSyncWithBrowser(n,r,o){let i={replaceUrl:!0},a=o?.navigationId?o:null;if(o){let l=g({},o);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(i.state=l)}let c=this.parseUrl(n);this.scheduleNavigation(c,r,a,i).catch(l=>{this.disposed||this.injector.get(Bt)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return dn(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(n){this.config=n.map(Oh),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(n,r={}){let{relativeTo:o,queryParams:i,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:a,d=null;switch(c??this.options.defaultQueryParamsHandling){case"merge":d=g(g({},this.currentUrlTree.queryParams),i);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let p=o?o.snapshot:this.routerState.snapshot.root;f=ED(p)}catch(p){(typeof n[0]!="string"||n[0][0]!=="/")&&(n=[]),f=this.currentUrlTree.root}return TD(f,n,d,u??null,this.urlSerializer)}navigateByUrl(n,r={skipLocationChange:!1}){let o=Yo(n)?n:this.parseUrl(n),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,_s,null,r)}navigate(n,r={skipLocationChange:!1}){return AP(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){try{return this.urlSerializer.parse(n)}catch(r){return this.console.warn(Zr(4018,!1)),this.urlSerializer.parse("/")}}isActive(n,r){let o;if(r===!0?o=g({},ZD):r===!1?o=g({},JD):o=r,Yo(n))return rD(this.currentUrlTree,n,o);let i=this.parseUrl(n);return rD(this.currentUrlTree,i,o)}removeEmptyProps(n){return Object.entries(n).reduce((r,[o,i])=>(i!=null&&(r[o]=i),r),{})}scheduleNavigation(n,r,o,i,a){if(this.disposed)return Promise.resolve(!1);let c,l,u;a?(c=a.resolve,l=a.reject,u=a.promise):u=new Promise((f,p)=>{c=f,l=p});let d=this.pendingTasks.add();return YD(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:n,extras:i,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function AP(e){for(let t=0;t<e.length;t++)if(e[t]==null)throw new k(4008,!1)}var OP=new N("");function Uh(e,...t){return Xr([{provide:vl,multi:!0,useValue:e},[],{provide:Hr,useFactory:FP},{provide:ac,multi:!0,useFactory:LP},t.map(n=>n.\u0275providers)])}function FP(){return I(Hh).routerState.root}function LP(){let e=I(Ht);return t=>{let n=e.get(ho);if(t!==n.components[0])return;let r=e.get(Hh),o=e.get(HP);e.get(UP)===1&&r.initialNavigation(),e.get(jP,null,{optional:!0})?.setUpPreloading(),e.get(OP,null,{optional:!0})?.init(),r.resetRootComponentType(n.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var HP=new N("",{factory:()=>new he}),UP=new N("",{factory:()=>1});var jP=new N("");var XD=[{path:"",component:Jc},{path:"**",redirectTo:""}];var VP=(e,t,n)=>{let r=["POST","PUT","PATCH"].indexOf(e.method.toUpperCase())!==-1,o=u=>["variables","extensions"].indexOf(u.toLowerCase())!==-1,i=e.body.length,a=e.options&&e.options.useMultipart,c;if(a){if(i)return new O(u=>u.error(new Error("File upload is not available when combined with Batching")));if(!r)return new O(u=>u.error(new Error("File upload is not available when GET is used")));if(!n)return new O(u=>u.error(new Error(`To use File upload you need to pass "extractFiles" function from "extract-files" library to HttpLink's options`)));c=n(e.body),a=!!c.files.size}let l={};if(i){if(!r)return new O(u=>u.error(new Error("Batching is not available for GET requests")));l={body:e.body}}else{let u=a?c.clone:e.body;r?l={body:u}:l={params:Object.keys(e.body).reduce((f,p)=>{let h=e.body[p];return f[p]=o(p)?JSON.stringify(h):h,f},{})}}if(a&&r){let u=new FormData;u.append("operations",JSON.stringify(l.body));let d={},f=c.files,p=0;f.forEach(h=>{d[++p]=h}),u.append("map",JSON.stringify(d)),p=0,f.forEach((h,S)=>{u.append(++p+"",S,S.name)}),l.body=u}return t.request(e.method,e.url,g(g({observe:"response",responseType:"json",reportProgress:!1},l),e.options))},$P=(e,t)=>e&&t?t.keys().reduce((r,o)=>r.set(o,t.getAll(o)),e):t||e,eb=(e,t)=>e&&t?[...e.keys()].reduce((n,r)=>n.set(r,e.get(r)),t):t||e;function zP(...e){return e.find(t=>typeof t<"u")}function WP(e){let t=e.headers&&e.headers instanceof Rt?e.headers:new Rt(e.headers);if(e.clientAwareness){let{name:n,version:r}=e.clientAwareness;n&&!t.has("apollographql-client-name")&&(t=t.set("apollographql-client-name",n)),r&&!t.has("apollographql-client-version")&&(t=t.set("apollographql-client-version",r))}return t}var GP={batchInterval:10,batchMax:10,uri:"graphql",method:"POST",withCredentials:!1,includeQuery:!0,includeExtensions:!1,useMultipart:!1};function ri(e,t,n){return zP(e[n],t[n],GP[n])}var jh=class extends jn{httpClient;options;requester;print=Po;constructor(t,n){super(),this.httpClient=t,this.options=n,this.options.operationPrinter&&(this.print=this.options.operationPrinter),this.requester=r=>new O(o=>{let i=r.getContext(),a=ri(i,this.options,"method"),c=ri(i,this.options,"includeQuery"),l=ri(i,this.options,"includeExtensions"),u=ri(i,this.options,"uri"),d=ri(i,this.options,"withCredentials"),f=ri(i,this.options,"useMultipart"),p=this.options.useGETForQueries===!0,h=eb(i.httpContext,eb(this.options.httpContext,new vo)),S=r.query.definitions.some(E=>E.kind==="OperationDefinition"&&E.operation==="query");p&&S&&(a="GET");let y={method:a,url:typeof u=="function"?u(r):u,body:{operationName:r.operationName,variables:r.variables},options:{withCredentials:d,useMultipart:f,headers:this.options.headers,context:h}};l&&(y.body.extensions=r.extensions),c&&(y.body.query=this.print(r.query));let v=WP(i);y.options.headers=$P(y.options.headers,v);let D=VP(y,this.httpClient,this.options.extractFiles).subscribe({next:E=>{r.setContext({response:E}),o.next(E.body)},error:E=>o.error(E),complete:()=>o.complete()});return()=>{D.closed||D.unsubscribe()}})}request(t){return this.requester(t)}},tb=(()=>{class e{httpClient;constructor(n){this.httpClient=n}create(n){return new jh(this.httpClient,n)}static \u0275fac=function(r){return new(r||e)(A(Dc))};static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();jd(Jc,{providers:[Uh(XD),Wd(),VS(()=>{let e=I(tb);return{cache:new Nr,link:e.create({uri:"https://graphqlpokemon.favware.tech/v8"})}})]}).catch(e=>console.error(e));
