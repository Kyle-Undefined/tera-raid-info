"use strict";(self.webpackChunktera_raid_info=self.webpackChunktera_raid_info||[]).push([[179],{533:()=>{function ye(e){return"function"==typeof e}function Wi(e){const n=e(r=>{Error.call(r),r.stack=(new Error).stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}const Gi=Wi(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:\n${n.map((r,o)=>`${o+1}) ${r.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=n});function br(e,t){if(e){const n=e.indexOf(t);0<=n&&e.splice(n,1)}}class Mt{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;const{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(const i of n)i.remove(this);else n.remove(this);const{initialTeardown:r}=this;if(ye(r))try{r()}catch(i){t=i instanceof Gi?i.errors:[i]}const{_finalizers:o}=this;if(o){this._finalizers=null;for(const i of o)try{Bh(i)}catch(s){t=t??[],s instanceof Gi?t=[...t,...s.errors]:t.push(s)}}if(t)throw new Gi(t)}}add(t){var n;if(t&&t!==this)if(this.closed)Bh(t);else{if(t instanceof Mt){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(t)}}_hasParent(t){const{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){const{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){const{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&br(n,t)}remove(t){const{_finalizers:n}=this;n&&br(n,t),t instanceof Mt&&t._removeParent(this)}}Mt.EMPTY=(()=>{const e=new Mt;return e.closed=!0,e})();const Lh=Mt.EMPTY;function Uh(e){return e instanceof Mt||e&&"closed"in e&&ye(e.remove)&&ye(e.add)&&ye(e.unsubscribe)}function Bh(e){ye(e)?e():e.unsubscribe()}const zn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Qi={setTimeout(e,t,...n){const{delegate:r}=Qi;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){const{delegate:t}=Qi;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function jh(e){Qi.setTimeout(()=>{const{onUnhandledError:t}=zn;if(!t)throw e;t(e)})}function Vh(){}const L0=ic("C",void 0,void 0);function ic(e,t,n){return{kind:e,value:t,error:n}}let Wn=null;function Ki(e){if(zn.useDeprecatedSynchronousErrorHandling){const t=!Wn;if(t&&(Wn={errorThrown:!1,error:null}),e(),t){const{errorThrown:n,error:r}=Wn;if(Wn=null,n)throw r}}else e()}class sc extends Mt{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,Uh(t)&&t.add(this)):this.destination=z0}static create(t,n,r){return new Io(t,n,r)}next(t){this.isStopped?cc(function B0(e){return ic("N",e,void 0)}(t),this):this._next(t)}error(t){this.isStopped?cc(function U0(e){return ic("E",void 0,e)}(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?cc(L0,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const V0=Function.prototype.bind;function ac(e,t){return V0.call(e,t)}class $0{constructor(t){this.partialObserver=t}next(t){const{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){Yi(r)}}error(t){const{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){Yi(r)}else Yi(t)}complete(){const{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){Yi(n)}}}class Io extends sc{constructor(t,n,r){let o;if(super(),ye(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&zn.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&ac(t.next,i),error:t.error&&ac(t.error,i),complete:t.complete&&ac(t.complete,i)}):o=t}this.destination=new $0(o)}}function Yi(e){zn.useDeprecatedSynchronousErrorHandling?function j0(e){zn.useDeprecatedSynchronousErrorHandling&&Wn&&(Wn.errorThrown=!0,Wn.error=e)}(e):jh(e)}function cc(e,t){const{onStoppedNotification:n}=zn;n&&Qi.setTimeout(()=>n(e,t))}const z0={closed:!0,next:Vh,error:function q0(e){throw e},complete:Vh},Ji="function"==typeof Symbol&&Symbol.observable||"@@observable";function $h(e){return e}let we=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){const r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){const i=function G0(e){return e&&e instanceof sc||function W0(e){return e&&ye(e.next)&&ye(e.error)&&ye(e.complete)}(e)&&Uh(e)}(n)?n:new Io(n,r,o);return Ki(()=>{const{operator:s,source:a}=this;i.add(s?s.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return new(r=zh(r))((o,i)=>{const s=new Io({next:a=>{try{n(a)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return null===(r=this.source)||void 0===r?void 0:r.subscribe(n)}[Ji](){return this}pipe(...n){return function qh(e){return 0===e.length?$h:1===e.length?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}(n)(this)}toPromise(n){return new(n=zh(n))((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function zh(e){var t;return null!==(t=e??zn.Promise)&&void 0!==t?t:Promise}const Q0=Wi(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});let Xi=(()=>{class e extends we{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){const r=new Wh(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Q0}next(n){Ki(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const r of this.currentObservers)r.next(n)}})}error(n){Ki(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;const{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){Ki(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return(null===(n=this.observers)||void 0===n?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){const{hasError:r,isStopped:o,observers:i}=this;return r||o?Lh:(this.currentObservers=null,i.push(n),new Mt(()=>{this.currentObservers=null,br(i,n)}))}_checkFinalizedStatuses(n){const{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){const n=new we;return n.source=this,n}}return e.create=(t,n)=>new Wh(t,n),e})();class Wh extends Xi{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.next)||void 0===r||r.call(n,t)}error(t){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.error)||void 0===r||r.call(n,t)}complete(){var t,n;null===(n=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===n||n.call(t)}_subscribe(t){var n,r;return null!==(r=null===(n=this.source)||void 0===n?void 0:n.subscribe(t))&&void 0!==r?r:Lh}}function Gn(e){return t=>{if(function K0(e){return ye(e?.lift)}(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Mo(e,t,n,r,o){return new Y0(e,t,n,r,o)}class Y0 extends sc{constructor(t,n,r,o,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(l){t.error(l)}}:super._next,this._error=o?function(a){try{o(a)}catch(l){t.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:n}=this;super.unsubscribe(),!n&&(null===(t=this.onFinalize)||void 0===t||t.call(this))}}}function at(e,t){return Gn((n,r)=>{let o=0;n.subscribe(Mo(r,i=>{r.next(e.call(t,i,o++))}))})}var lc=function(e,t){return(lc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])})(e,t)};function kt(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}lc(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var w=function(){return w=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++)for(var i in n=arguments[r])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},w.apply(this,arguments)};function qt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function zt(e,t,n,r){return new(n||(n=Promise))(function(i,s){function a(d){try{u(r.next(d))}catch(h){s(h)}}function l(d){try{u(r.throw(d))}catch(h){s(h)}}function u(d){d.done?i(d.value):function o(i){return i instanceof n?i:new n(function(s){s(i)})}(d.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}function sn(e,t){var r,o,i,n={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=a(0),s.throw=a(1),s.return=a(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(d){return function l(u){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,u[0]&&(n=0)),n;)try{if(r=1,o&&(i=2&u[0]?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(!(i=(i=n.trys).length>0&&i[i.length-1])&&(6===u[0]||2===u[0])){n=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(6===u[0]&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(d){u=[6,d],o=0}finally{r=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,d])}}}function Ue(e,t,n){if(n||2===arguments.length)for(var i,r=0,o=t.length;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function Tn(e){return this instanceof Tn?(this.v=e,this):new Tn(e)}function Kh(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=function dc(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(a,l){!function o(i,s,a,l){Promise.resolve(l).then(function(u){i({value:u,done:a})},s)}(a,l,(s=e[i](s)).done,s.value)})}}}"function"==typeof SuppressedError&&SuppressedError;const Yh=e=>e&&"number"==typeof e.length&&"function"!=typeof e;function Jh(e){return ye(e?.then)}function Xh(e){return ye(e[Ji])}function Zh(e){return Symbol.asyncIterator&&ye(e?.[Symbol.asyncIterator])}function ef(e){return new TypeError(`You provided ${null!==e&&"object"==typeof e?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const tf=function Sw(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();function nf(e){return ye(e?.[tf])}function rf(e){return function Qh(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,r=n.apply(e,t||[]),i=[];return o=Object.create(("function"==typeof AsyncIterator?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",function s(p){return function(y){return Promise.resolve(y).then(p,h)}}),o[Symbol.asyncIterator]=function(){return this},o;function a(p,y){r[p]&&(o[p]=function(g){return new Promise(function(b,v){i.push([p,g,b,v])>1||l(p,g)})},y&&(o[p]=y(o[p])))}function l(p,y){try{!function u(p){p.value instanceof Tn?Promise.resolve(p.value.v).then(d,h):f(i[0][2],p)}(r[p](y))}catch(g){f(i[0][3],g)}}function d(p){l("next",p)}function h(p){l("throw",p)}function f(p,y){p(y),i.shift(),i.length&&l(i[0][0],i[0][1])}}(this,arguments,function*(){const n=e.getReader();try{for(;;){const{value:r,done:o}=yield Tn(n.read());if(o)return yield Tn(void 0);yield yield Tn(r)}}finally{n.releaseLock()}})}function of(e){return ye(e?.getReader)}function En(e){if(e instanceof we)return e;if(null!=e){if(Xh(e))return function bw(e){return new we(t=>{const n=e[Ji]();if(ye(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(e);if(Yh(e))return function Dw(e){return new we(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}(e);if(Jh(e))return function ww(e){return new we(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,jh)})}(e);if(Zh(e))return sf(e);if(nf(e))return function Pw(e){return new we(t=>{for(const n of e)if(t.next(n),t.closed)return;t.complete()})}(e);if(of(e))return function Tw(e){return sf(rf(e))}(e)}throw ef(e)}function sf(e){return new we(t=>{(function Ew(e,t){var n,r,o,i;return zt(this,void 0,void 0,function*(){try{for(n=Kh(e);!(r=yield n.next()).done;)if(t.next(r.value),t.closed)return}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})})(e,t).catch(n=>t.error(n))})}function Cn(e,t,n,r=0,o=!1){const i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function Zi(e,t,n=1/0){return ye(t)?Zi((r,o)=>at((i,s)=>t(r,i,o,s))(En(e(r,o))),n):("number"==typeof t&&(n=t),Gn((r,o)=>function Cw(e,t,n,r,o,i,s,a){const l=[];let u=0,d=0,h=!1;const f=()=>{h&&!l.length&&!u&&t.complete()},p=g=>u<r?y(g):l.push(g),y=g=>{i&&t.next(g),u++;let b=!1;En(n(g,d++)).subscribe(Mo(t,v=>{o?.(v),i?p(v):t.next(v)},()=>{b=!0},void 0,()=>{if(b)try{for(u--;l.length&&u<r;){const v=l.shift();s?Cn(t,s,()=>y(v)):y(v)}f()}catch(v){t.error(v)}}))};return e.subscribe(Mo(t,p,()=>{h=!0,f()})),()=>{a?.()}}(r,o,e,n)))}function af(e=1/0){return Zi($h,e)}const cf=new we(e=>e.complete());function fc(e){return e[e.length-1]}function es(e){return function Iw(e){return e&&ye(e.schedule)}(fc(e))?e.pop():void 0}function pc(e,t=0){return Gn((n,r)=>{n.subscribe(Mo(r,o=>Cn(r,e,()=>r.next(o),t),()=>Cn(r,e,()=>r.complete(),t),o=>Cn(r,e,()=>r.error(o),t)))})}function lf(e,t=0){return Gn((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function uf(e,t){if(!e)throw new Error("Iterable cannot be null");return new we(n=>{Cn(n,t,()=>{const r=e[Symbol.asyncIterator]();Cn(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function ko(e,t){return t?function xw(e,t){if(null!=e){if(Xh(e))return function kw(e,t){return En(e).pipe(lf(t),pc(t))}(e,t);if(Yh(e))return function Ow(e,t){return new we(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}(e,t);if(Jh(e))return function Rw(e,t){return En(e).pipe(lf(t),pc(t))}(e,t);if(Zh(e))return uf(e,t);if(nf(e))return function Aw(e,t){return new we(n=>{let r;return Cn(n,t,()=>{r=e[tf](),Cn(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){return void n.error(s)}i?n.complete():n.next(o)},0,!0)}),()=>ye(r?.return)&&r.return()})}(e,t);if(of(e))return function Nw(e,t){return uf(rf(e),t)}(e,t)}throw ef(e)}(e,t):En(e)}function yc(e,t,...n){if(!0===t)return void e();if(!1===t)return;const r=new Io({next:()=>{r.unsubscribe(),e()}});return En(t(...n)).subscribe(r)}function se(e){for(let t in e)if(e[t]===se)return t;throw Error("Could not find renamed property on target object.")}function ae(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(ae).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function gc(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}const Lw=se({__forward_ref__:se});function vc(e){return e.__forward_ref__=vc,e.toString=function(){return ae(this())},e}function F(e){return function Sc(e){return"function"==typeof e&&e.hasOwnProperty(Lw)&&e.__forward_ref__===vc}(e)?e():e}function bc(e){return e&&!!e.\u0275providers}class N extends Error{constructor(t,n){super(ts(t,n)),this.code=t}}function ts(e,t){return`NG0${Math.abs(e)}${t?": "+t.trim():""}`}function ee(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():function B(e){return"string"==typeof e?e:null==e?"":String(e)}(e)}function ns(e,t){throw new N(-201,!1)}function bt(e,t){null==e&&function te(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}(t,e,null,"!=")}function X(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function an(e){return{providers:e.providers||[],imports:e.imports||[]}}function rs(e){return hf(e,os)||hf(e,pf)}function hf(e,t){return e.hasOwnProperty(t)?e[t]:null}function ff(e){return e&&(e.hasOwnProperty(Dc)||e.hasOwnProperty(zw))?e[Dc]:null}const os=se({\u0275prov:se}),Dc=se({\u0275inj:se}),pf=se({ngInjectableDef:se}),zw=se({ngInjectorDef:se});var U=(()=>((U=U||{})[U.Default=0]="Default",U[U.Host=1]="Host",U[U.Self=2]="Self",U[U.SkipSelf=4]="SkipSelf",U[U.Optional=8]="Optional",U))();let wc;function Dt(e){const t=wc;return wc=e,t}function yf(e,t,n){const r=rs(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&U.Optional?null:void 0!==t?t:void ns(ae(e))}const ue=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),Ro={},Pc="__NG_DI_FLAG__",is="ngTempTokenPath",Gw="ngTokenPath",Qw=/\n/gm,Kw="\u0275",mf="__source";let Oo;function Dr(e){const t=Oo;return Oo=e,t}function Yw(e,t=U.Default){if(void 0===Oo)throw new N(-203,!1);return null===Oo?yf(e,void 0,t):Oo.get(e,t&U.Optional?null:void 0,t)}function j(e,t=U.Default){return(function Ww(){return wc}()||Yw)(F(e),t)}function Ao(e,t=U.Default){return j(e,ss(t))}function ss(e){return typeof e>"u"||"number"==typeof e?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function Tc(e){const t=[];for(let n=0;n<e.length;n++){const r=F(e[n]);if(Array.isArray(r)){if(0===r.length)throw new N(900,!1);let o,i=U.Default;for(let s=0;s<r.length;s++){const a=r[s],l=Jw(a);"number"==typeof l?-1===l?o=a.token:i|=l:o=a}t.push(j(o,i))}else t.push(j(r))}return t}function Jw(e){return e[Pc]}function cn(e){return{toString:e}.toString()}var Wt=(()=>((Wt=Wt||{})[Wt.OnPush=0]="OnPush",Wt[Wt.Default=1]="Default",Wt))(),Gt=(()=>{return(e=Gt||(Gt={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",Gt;var e})();const ln={},Z=[],as=se({\u0275cmp:se}),Ec=se({\u0275dir:se}),Cc=se({\u0275pipe:se}),vf=se({\u0275mod:se}),un=se({\u0275fac:se}),xo=se({__NG_ELEMENT_ID__:se});let eP=0;function Xe(e){return cn(()=>{const t=function bf(e){const t={};return{type:e.type,providersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:t,exportAs:e.exportAs||null,standalone:!0===e.standalone,selectors:e.selectors||Z,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Sf(e.inputs,t),outputs:Sf(e.outputs)}}(e),n={...t,decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection===Wt.OnPush,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&e.dependencies||null,getStandaloneInjector:null,data:e.data||{},encapsulation:e.encapsulation||Gt.Emulated,id:"c"+eP++,styles:e.styles||Z,_:null,schemas:e.schemas||null,tView:null};!function Df(e){e.features?.forEach(t=>t(e))}(n);const r=e.dependencies;return n.directiveDefs=cs(r,!1),n.pipeDefs=cs(r,!0),n})}function nP(e){return ne(e)||Ge(e)}function rP(e){return null!==e}function In(e){return cn(()=>({type:e.type,bootstrap:e.bootstrap||Z,declarations:e.declarations||Z,imports:e.imports||Z,exports:e.exports||Z,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function Sf(e,t){if(null==e)return ln;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}function ne(e){return e[as]||null}function Ge(e){return e[Ec]||null}function lt(e){return e[Cc]||null}function cs(e,t){if(!e)return null;const n=t?lt:nP;return()=>("function"==typeof e?e():e).map(r=>n(r)).filter(rP)}const dn=0,k=1,z=2,ve=3,Rt=4,Qn=5,Qe=6,wr=7,Pe=8,ls=9,us=10,G=11,_c=12,Ho=13,wf=14,Pr=15,Ke=16,Lo=17,Tr=18,Qt=19,Uo=20,Pf=21,de=22,Ic=1,Tf=2,ds=7,Er=9,Ze=10;function mt(e){return Array.isArray(e)&&"object"==typeof e[Ic]}function Ot(e){return Array.isArray(e)&&!0===e[Ic]}function Mc(e){return 0!=(4&e.flags)}function Bo(e){return e.componentOffset>-1}function fs(e){return 1==(1&e.flags)}function At(e){return!!e.template}function iP(e){return 0!=(256&e[z])}function Kn(e,t){return e.hasOwnProperty(un)?e[un]:null}class cP{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}function _f(e){return e.type.prototype.ngOnChanges&&(e.setInput=uP),lP}function lP(){const e=Mf(this),t=e?.current;if(t){const n=e.previous;if(n===ln)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function uP(e,t,n,r){const o=this.declaredInputs[n],i=Mf(e)||function dP(e,t){return e[If]=t}(e,{previous:ln,current:null}),s=i.current||(i.current={}),a=i.previous,l=a[o];s[o]=new cP(l&&l.currentValue,t,a===ln),e[r]=t}const If="__ngSimpleChanges__";function Mf(e){return e[If]||null}const Pt=function(e,t,n){};function Be(e){for(;Array.isArray(e);)e=e[dn];return e}function gt(e,t){return Be(t[e.index])}function ut(e,t){const n=t[e];return mt(n)?n:n[dn]}function ms(e){return 64==(64&e[z])}function Mn(e,t){return null==t?null:e[t]}function Af(e){e[Tr]=0}function Rc(e,t){e[Qn]+=t;let n=e,r=e[ve];for(;null!==r&&(1===t&&1===n[Qn]||-1===t&&0===n[Qn]);)r[Qn]+=t,n=r,r=r[ve]}const V={lFrame:$f(null),bindingsEnabled:!0};function xf(){return V.bindingsEnabled}function C(){return V.lFrame.lView}function J(){return V.lFrame.tView}function je(){let e=Ff();for(;null!==e&&64===e.type;)e=e.parent;return e}function Ff(){return V.lFrame.currentTNode}function Kt(e,t){const n=V.lFrame;n.currentTNode=e,n.isParent=t}function Oc(){return V.lFrame.isParent}function CP(e,t){const n=V.lFrame;n.bindingIndex=n.bindingRootIndex=e,Nc(t)}function Nc(e){V.lFrame.currentDirectiveIndex=e}function Fc(e){V.lFrame.currentQueryIndex=e}function IP(e){const t=e[k];return 2===t.type?t.declTNode:1===t.type?e[Qe]:null}function jf(e,t,n){if(n&U.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&U.Host||(o=IP(i),null===o||(i=i[Pr],10&o.type))););if(null===o)return!1;t=o,e=i}const r=V.lFrame=Vf();return r.currentTNode=t,r.lView=e,!0}function Hc(e){const t=Vf(),n=e[k];V.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function Vf(){const e=V.lFrame,t=null===e?null:e.child;return null===t?$f(e):t}function $f(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function qf(){const e=V.lFrame;return V.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const zf=qf;function Lc(){const e=qf();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Yn(e){V.lFrame.selectedIndex=e}function gs(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:u,ngOnDestroy:d}=i;s&&(e.contentHooks??(e.contentHooks=[])).push(-n,s),a&&((e.contentHooks??(e.contentHooks=[])).push(n,a),(e.contentCheckHooks??(e.contentCheckHooks=[])).push(n,a)),l&&(e.viewHooks??(e.viewHooks=[])).push(-n,l),u&&((e.viewHooks??(e.viewHooks=[])).push(n,u),(e.viewCheckHooks??(e.viewCheckHooks=[])).push(n,u)),null!=d&&(e.destroyHooks??(e.destroyHooks=[])).push(n,d)}}function vs(e,t,n){Wf(e,t,3,n)}function Ss(e,t,n,r){(3&e[z])===n&&Wf(e,t,n,r)}function Uc(e,t){let n=e[z];(3&n)===t&&(n&=2047,n+=1,e[z]=n)}function Wf(e,t,n,r){const i=r??-1,s=t.length-1;let a=0;for(let l=void 0!==r?65535&e[Tr]:0;l<s;l++)if("number"==typeof t[l+1]){if(a=t[l],null!=r&&a>=r)break}else t[l]<0&&(e[Tr]+=65536),(a<i||-1==i)&&(HP(e,n,t,l),e[Tr]=(4294901760&e[Tr])+l+2),l++}function HP(e,t,n,r){const o=n[r]<0,i=n[r+1],a=e[o?-n[r]:n[r]];if(o){if(e[z]>>11<e[Tr]>>16&&(3&e[z])===t){e[z]+=2048,Pt(4,a,i);try{i.call(a)}finally{Pt(5,a,i)}}}else{Pt(4,a,i);try{i.call(a)}finally{Pt(5,a,i)}}}const Ir=-1;class Vo{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function jc(e,t,n){let r=0;for(;r<n.length;){const o=n[r];if("number"==typeof o){if(0!==o)break;r++;const i=n[r++],s=n[r++],a=n[r++];e.setAttribute(t,s,a,i)}else{const i=o,s=n[++r];Qf(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function Gf(e){return 3===e||4===e||6===e}function Qf(e){return 64===e.charCodeAt(0)}function $o(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||Kf(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function Kf(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const a=e[i++];if("number"==typeof a){if(a===t){s=-1;break}if(a>t){s=i-1;break}}}for(;i<e.length;){const a=e[i];if("number"==typeof a)break;if(a===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}function bs(e){return 32767&e}function Ds(e,t){let n=function jP(e){return e>>16}(e),r=t;for(;n>0;)r=r[Pr],n--;return r}let Vc=!0;function ws(e){const t=Vc;return Vc=e,t}const Jf=255,Xf=5;let VP=0;const Yt={};function Ps(e,t){const n=Zf(e,t);if(-1!==n)return n;const r=t[k];r.firstCreatePass&&(e.injectorIndex=t.length,$c(r.data,e),$c(t,null),$c(r.blueprint,null));const o=qc(e,t),i=e.injectorIndex;if(function Yf(e){return e!==Ir}(o)){const s=bs(o),a=Ds(o,t),l=a[k].data;for(let u=0;u<8;u++)t[i+u]=a[s+u]|l[s+u]}return t[i+8]=o,i}function $c(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Zf(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function qc(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){if(r=sp(o),null===r)return Ir;if(n++,o=o[Pr],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return Ir}function zc(e,t,n){!function $P(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(xo)&&(r=n[xo]),null==r&&(r=n[xo]=VP++);const o=r&Jf;t.data[e+(o>>Xf)]|=1<<o}(e,t,n)}function ep(e,t,n){if(n&U.Optional||void 0!==e)return e;ns()}function tp(e,t,n,r){if(n&U.Optional&&void 0===r&&(r=null),!(n&(U.Self|U.Host))){const o=e[ls],i=Dt(void 0);try{return o?o.get(t,r,n&U.Optional):yf(t,r,n&U.Optional)}finally{Dt(i)}}return ep(r,0,n)}function np(e,t,n,r=U.Default,o){if(null!==e){if(1024&t[z]){const s=function KP(e,t,n,r,o){let i=e,s=t;for(;null!==i&&null!==s&&1024&s[z]&&!(256&s[z]);){const a=rp(i,s,n,r|U.Self,Yt);if(a!==Yt)return a;let l=i.parent;if(!l){const u=s[Pf];if(u){const d=u.get(n,Yt,r);if(d!==Yt)return d}l=sp(s),s=s[Pr]}i=l}return o}(e,t,n,r,Yt);if(s!==Yt)return s}const i=rp(e,t,n,r,Yt);if(i!==Yt)return i}return tp(t,n,r,o)}function rp(e,t,n,r,o){const i=function WP(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(xo)?e[xo]:void 0;return"number"==typeof t?t>=0?t&Jf:GP:t}(n);if("function"==typeof i){if(!jf(t,e,r))return r&U.Host?ep(o,0,r):tp(t,n,r,o);try{const s=i(r);if(null!=s||r&U.Optional)return s;ns()}finally{zf()}}else if("number"==typeof i){let s=null,a=Zf(e,t),l=Ir,u=r&U.Host?t[Ke][Qe]:null;for((-1===a||r&U.SkipSelf)&&(l=-1===a?qc(e,t):t[a+8],l!==Ir&&ip(r,!1)?(s=t[k],a=bs(l),t=Ds(l,t)):a=-1);-1!==a;){const d=t[k];if(op(i,a,d.data)){const h=zP(a,t,n,s,r,u);if(h!==Yt)return h}l=t[a+8],l!==Ir&&ip(r,t[k].data[a+8]===u)&&op(i,a,t)?(s=d,a=bs(l),t=Ds(l,t)):a=-1}}return o}function zP(e,t,n,r,o,i){const s=t[k],a=s.data[e+8],d=function Ts(e,t,n,r,o){const i=e.providerIndexes,s=t.data,a=1048575&i,l=e.directiveStart,d=i>>20,f=o?a+d:e.directiveEnd;for(let p=r?a:a+d;p<f;p++){const y=s[p];if(p<l&&n===y||p>=l&&y.type===n)return p}if(o){const p=s[l];if(p&&At(p)&&p.type===n)return l}return null}(a,s,n,null==r?Bo(a)&&Vc:r!=s&&0!=(3&a.type),o&U.Host&&i===a);return null!==d?Jn(t,s,d,a):Yt}function Jn(e,t,n,r){let o=e[n];const i=t.data;if(function LP(e){return e instanceof Vo}(o)){const s=o;s.resolving&&function Uw(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new N(-200,`Circular dependency in DI detected for ${e}${n}`)}(ee(i[n]));const a=ws(s.canSeeViewProviders);s.resolving=!0;const l=s.injectImpl?Dt(s.injectImpl):null;jf(e,r,U.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&function FP(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=_f(t);(n.preOrderHooks??(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks??(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks??(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks??(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks??(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==l&&Dt(l),ws(a),s.resolving=!1,zf()}}return o}function op(e,t,n){return!!(n[t+(e>>Xf)]&1<<e)}function ip(e,t){return!(e&U.Self||e&U.Host&&t)}class Mr{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return np(this._tNode,this._lView,t,ss(r),n)}}function GP(){return new Mr(je(),C())}function sp(e){const t=e[k],n=t.type;return 2===n?t.declTNode:1===n?e[Qe]:null}class H{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=X({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}function Xn(e,t){e.forEach(n=>Array.isArray(n)?Xn(n,t):t(n))}function Es(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}var dt=(()=>((dt=dt||{})[dt.Important=1]="Important",dt[dt.DashCase=2]="DashCase",dt))();const nl=new Map;let DT=0;const ol="__ngContext__";function Ye(e,t){mt(t)?(e[ol]=t[Uo],function PT(e){nl.set(e[Uo],e)}(t)):e[ol]=t}let il;function sl(e,t){return il(e,t)}function Yo(e){const t=e[ve];return Ot(t)?t[ve]:t}function al(e){return Mp(e[Ho])}function cl(e){return Mp(e[Rt])}function Mp(e){for(;null!==e&&!Ot(e);)e=e[Rt];return e}function Fr(e,t,n,r,o){if(null!=r){let i,s=!1;Ot(r)?i=r:mt(r)&&(s=!0,r=r[dn]);const a=Be(r);0===e&&null!==n?null==o?xp(t,n,a):Zn(t,n,a,o||null,!0):1===e&&null!==n?Zn(t,n,a,o||null,!0):2===e?function yl(e,t,n){const r=function Rs(e,t){return e.parentNode(t)}(e,t);r&&function $T(e,t,n,r){e.removeChild(t,n,r)}(e,r,t,n)}(t,a,s):3===e&&t.destroyNode(a),null!=i&&function WT(e,t,n,r,o){const i=n[ds];i!==Be(n)&&Fr(t,e,r,i,o);for(let a=Ze;a<n.length;a++){const l=n[a];Jo(l[k],l,e,t,r,i)}}(t,e,i,n,o)}}function ul(e,t,n){return e.createElement(t,n)}function Rp(e,t){const n=e[Er],r=n.indexOf(t),o=t[ve];512&t[z]&&(t[z]&=-513,Rc(o,-1)),n.splice(r,1)}function hl(e,t){if(!(128&t[z])){t[z]&=-65,t[z]|=128,function VT(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof Vo)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const a=o[i[s]],l=i[s+1];Pt(4,a,l);try{l.call(a)}finally{Pt(5,a,l)}}else{Pt(4,o,i);try{i.call(o)}finally{Pt(5,o,i)}}}}}(e,t),function jT(e,t){const n=e.cleanup,r=t[wr];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+3];s>=0?r[o=s]():r[o=-s].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)(0,r[i])();t[wr]=null}}(e,t),1===t[k].type&&t[G].destroy();const n=t[Lo];if(null!==n&&Ot(t[ve])){n!==t[ve]&&Rp(n,t);const r=t[Qt];null!==r&&r.detachView(e)}!function TT(e){nl.delete(e[Uo])}(t)}}function Ap(e,t,n){return function Np(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[dn];{const{componentOffset:o}=r;if(o>-1){const{encapsulation:i}=e.data[r.directiveStart+o];if(i===Gt.None||i===Gt.Emulated)return null}return gt(r,n)}}(e,t.parent,n)}function Zn(e,t,n,r,o){e.insertBefore(t,n,r,o)}function xp(e,t,n){e.appendChild(t,n)}function Fp(e,t,n,r,o){null!==r?Zn(e,t,n,r,o):xp(e,t,n)}let fl,vl,Up=function Lp(e,t,n){return 40&e.type?gt(e,n):null};function Os(e,t,n,r){const o=Ap(e,r,t),i=t[G],a=function Hp(e,t,n){return Up(e,t,n)}(r.parent||t[Qe],r,t);if(null!=o)if(Array.isArray(n))for(let l=0;l<n.length;l++)Fp(i,o,n[l],a,!1);else Fp(i,o,n,a,!1);void 0!==fl&&fl(i,r,t,n,o)}function jp(e,t){return null!==t?e[Ke][Qe].projection[t.projection]:null}function ml(e,t,n,r,o,i,s){for(;null!=n;){const a=r[n.index],l=n.type;if(s&&0===t&&(a&&Ye(Be(a),r),n.flags|=2),32!=(32&n.flags))if(8&l)ml(e,t,n.child,r,o,i,!1),Fr(t,e,o,a,i);else if(32&l){const u=sl(n,r);let d;for(;d=u();)Fr(t,e,o,d,i);Fr(t,e,o,a,i)}else 16&l?Vp(e,t,r,n,o,i):Fr(t,e,o,a,i);n=s?n.projectionNext:n.next}}function Jo(e,t,n,r,o,i){ml(n,r,e.firstChild,t,o,i,!1)}function Vp(e,t,n,r,o,i){const s=n[Ke],l=s[Qe].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++)Fr(t,e,o,l[u],i);else ml(e,t,l,s[ve],o,i,!0)}function $p(e,t,n){""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}function qp(e,t,n){const{mergedAttrs:r,classes:o,styles:i}=n;null!==r&&jc(e,t,r),null!==o&&$p(e,t,o),null!==i&&function QT(e,t,n){e.setAttribute(t,"style",n)}(e,t,i)}const oy=new H("ENVIRONMENT_INITIALIZER"),iy=new H("INJECTOR",-1),sy=new H("INJECTOR_DEF_TYPES");class ay{get(t,n=Ro){if(n===Ro){const r=new Error(`NullInjectorError: No provider for ${ae(t)}!`);throw r.name="NullInjectorError",r}return n}}function PE(...e){return{\u0275providers:cy(0,e),\u0275fromNgModule:!0}}function cy(e,...t){const n=[],r=new Set;let o;return Xn(t,i=>{const s=i;Tl(s,n,[],r)&&(o||(o=[]),o.push(s))}),void 0!==o&&ly(o,n),n}function ly(e,t){for(let n=0;n<e.length;n++){const{providers:o}=e[n];El(o,i=>{t.push(i)})}}function Tl(e,t,n,r){if(!(e=F(e)))return!1;let o=null,i=ff(e);const s=!i&&ne(e);if(i||s){if(s&&!s.standalone)return!1;o=e}else{const l=e.ngModule;if(i=ff(l),!i)return!1;o=l}const a=r.has(o);if(s){if(a)return!1;if(r.add(o),s.dependencies){const l="function"==typeof s.dependencies?s.dependencies():s.dependencies;for(const u of l)Tl(u,t,n,r)}}else{if(!i)return!1;{if(null!=i.imports&&!a){let u;r.add(o);try{Xn(i.imports,d=>{Tl(d,t,n,r)&&(u||(u=[]),u.push(d))})}finally{}void 0!==u&&ly(u,t)}if(!a){const u=Kn(o)||(()=>new o);t.push({provide:o,useFactory:u,deps:Z},{provide:sy,useValue:o,multi:!0},{provide:oy,useValue:()=>j(o),multi:!0})}const l=i.providers;null==l||a||El(l,d=>{t.push(d)})}}return o!==e&&void 0!==e.providers}function El(e,t){for(let n of e)bc(n)&&(n=n.\u0275providers),Array.isArray(n)?El(n,t):t(n)}const TE=se({provide:String,useValue:se});function Cl(e){return null!==e&&"object"==typeof e&&TE in e}function er(e){return"function"==typeof e}const _l=new H("Set Injector scope."),Hs={},CE={};let Il;function Ls(){return void 0===Il&&(Il=new ay),Il}class tr{}class hy extends tr{get destroyed(){return this._destroyed}constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,kl(t,s=>this.processProvider(s)),this.records.set(iy,Lr(void 0,this)),o.has("environment")&&this.records.set(tr,Lr(void 0,this));const i=this.records.get(_l);null!=i&&"string"==typeof i.value&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(sy.multi,Z,U.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const t of this._ngOnDestroyHooks)t.ngOnDestroy();for(const t of this._onDestroyHooks)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(t){this._onDestroyHooks.push(t)}runInContext(t){this.assertNotDestroyed();const n=Dr(this),r=Dt(void 0);try{return t()}finally{Dr(n),Dt(r)}}get(t,n=Ro,r=U.Default){this.assertNotDestroyed(),r=ss(r);const o=Dr(this),i=Dt(void 0);try{if(!(r&U.SkipSelf)){let a=this.records.get(t);if(void 0===a){const l=function RE(e){return"function"==typeof e||"object"==typeof e&&e instanceof H}(t)&&rs(t);a=l&&this.injectableDefInScope(l)?Lr(Ml(t),Hs):null,this.records.set(t,a)}if(null!=a)return this.hydrate(t,a)}return(r&U.Self?Ls():this.parent).get(t,n=r&U.Optional&&n===Ro?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[is]=s[is]||[]).unshift(ae(t)),o)throw s;return function Xw(e,t,n,r){const o=e[is];throw t[mf]&&o.unshift(t[mf]),e.message=function Zw(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&e.charAt(1)==Kw?e.slice(2):e;let o=ae(t);if(Array.isArray(t))o=t.map(ae).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let a=t[s];i.push(s+":"+("string"==typeof a?JSON.stringify(a):ae(a)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(Qw,"\n  ")}`}("\n"+e.message,o,n,r),e[Gw]=o,e[is]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{Dt(i),Dr(o)}}resolveInjectorInitializers(){const t=Dr(this),n=Dt(void 0);try{const r=this.get(oy.multi,Z,U.Self);for(const o of r)o()}finally{Dr(t),Dt(n)}}toString(){const t=[],n=this.records;for(const r of n.keys())t.push(ae(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new N(205,!1)}processProvider(t){let n=er(t=F(t))?t:F(t&&t.provide);const r=function IE(e){return Cl(e)?Lr(void 0,e.useValue):Lr(function fy(e,t,n){let r;if(er(e)){const o=F(e);return Kn(o)||Ml(o)}if(Cl(e))r=()=>F(e.useValue);else if(function dy(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...Tc(e.deps||[]));else if(function uy(e){return!(!e||!e.useExisting)}(e))r=()=>j(F(e.useExisting));else{const o=F(e&&(e.useClass||e.provide));if(!function ME(e){return!!e.deps}(e))return Kn(o)||Ml(o);r=()=>new o(...Tc(e.deps))}return r}(e),Hs)}(t);if(er(t)||!0!==t.multi)this.records.get(n);else{let o=this.records.get(n);o||(o=Lr(void 0,Hs,!0),o.factory=()=>Tc(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){return n.value===Hs&&(n.value=CE,n.value=n.factory()),"object"==typeof n.value&&n.value&&function kE(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(t){if(!t.providedIn)return!1;const n=F(t.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function Ml(e){const t=rs(e),n=null!==t?t.factory:Kn(e);if(null!==n)return n;if(e instanceof H)throw new N(204,!1);if(e instanceof Function)return function _E(e){const t=e.length;if(t>0)throw function Wo(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}(t,"?"),new N(204,!1);const n=function qw(e){return e&&(e[os]||e[pf])||null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new N(204,!1)}function Lr(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function kl(e,t){for(const n of e)Array.isArray(n)?kl(n,t):n&&bc(n)?kl(n.\u0275providers,t):t(n)}class OE{}class py{}class NE{resolveComponentFactory(t){throw function AE(e){const t=Error(`No component factory found for ${ae(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let Us=(()=>{class e{}return e.NULL=new NE,e})();function xE(){return Ur(je(),C())}function Ur(e,t){return new Br(gt(e,t))}let Br=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=xE,e})();class my{}let LE=(()=>{class e{}return e.\u0275prov=X({token:e,providedIn:"root",factory:()=>null}),e})();class Rl{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const UE=new Rl("15.2.10"),Ol={},Al="ngOriginalError";function Nl(e){return e[Al]}class jr{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&Nl(t);for(;n&&Nl(n);)n=Nl(n);return n||null}}function Sy(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}const by="ng-template";function YE(e,t,n){let r=0,o=!0;for(;r<e.length;){let i=e[r++];if("string"==typeof i&&o){const s=e[r++];if(n&&"class"===i&&-1!==Sy(s.toLowerCase(),t,0))return!0}else{if(1===i){for(;r<e.length&&"string"==typeof(i=e[r++]);)if(i.toLowerCase()===t)return!0;return!1}"number"==typeof i&&(o=!1)}}return!1}function Dy(e){return 4===e.type&&e.value!==by}function JE(e,t,n){return t===(4!==e.type||n?e.value:by)}function XE(e,t,n){let r=4;const o=e.attrs||[],i=function tC(e){for(let t=0;t<e.length;t++)if(Gf(e[t]))return t;return e.length}(o);let s=!1;for(let a=0;a<t.length;a++){const l=t[a];if("number"!=typeof l){if(!s)if(4&r){if(r=2|1&r,""!==l&&!JE(e,l,n)||""===l&&1===t.length){if(Nt(r))return!1;s=!0}}else{const u=8&r?l:t[++a];if(8&r&&null!==e.attrs){if(!YE(e.attrs,u,n)){if(Nt(r))return!1;s=!0}continue}const h=ZE(8&r?"class":l,o,Dy(e),n);if(-1===h){if(Nt(r))return!1;s=!0;continue}if(""!==u){let f;f=h>i?"":o[h+1].toLowerCase();const p=8&r?f:null;if(p&&-1!==Sy(p,u,0)||2&r&&u!==f){if(Nt(r))return!1;s=!0}}}}else{if(!s&&!Nt(r)&&!Nt(l))return!1;if(s&&Nt(l))continue;s=!1,r=l|1&r}}return Nt(r)||s}function Nt(e){return 0==(1&e)}function ZE(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let a=t[++o];for(;"string"==typeof a;)a=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function nC(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function wy(e,t,n=!1){for(let r=0;r<t.length;r++)if(XE(e,t[r],n))return!0;return!1}function Py(e,t){return e?":not("+t.trim()+")":t}function oC(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const a=e[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!Nt(s)&&(t+=Py(i,o),o=""),r=s,i=i||!Nt(r);n++}return""!==o&&(t+=Py(i,o)),t}const $={};function Iy(e,t=null,n=null,r){const o=My(e,t,n,r);return o.resolveInjectorInitializers(),o}function My(e,t=null,n=null,r,o=new Set){const i=[n||Z,PE(e)];return r=r||("object"==typeof e?void 0:ae(e)),new hy(i,t||Ls(),r||null,o)}let nr=(()=>{class e{static create(n,r){if(Array.isArray(n))return Iy({name:""},r,n,"");{const o=n.name??"";return Iy({name:o},n.parent,n.providers,o)}}}return e.THROW_IF_NOT_FOUND=Ro,e.NULL=new ay,e.\u0275prov=X({token:e,providedIn:"any",factory:()=>j(iy)}),e.__NG_ELEMENT_ID__=-1,e})();function O(e,t=U.Default){const n=C();return null===n?j(e,t):np(je(),n,F(e),t)}function Fy(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const i=n[r+1];if(-1!==i){const s=e.data[i];Fc(n[r]),s.contentQueries(2,t[i],i)}}}function js(e,t,n,r,o,i,s,a,l,u,d){const h=t.blueprint.slice();return h[dn]=o,h[z]=76|r,(null!==d||e&&1024&e[z])&&(h[z]|=1024),Af(h),h[ve]=h[Pr]=e,h[Pe]=n,h[us]=s||e&&e[us],h[G]=a||e&&e[G],h[_c]=l||e&&e[_c]||null,h[ls]=u||e&&e[ls]||null,h[Qe]=i,h[Uo]=function wT(){return DT++}(),h[Pf]=d,h[Ke]=2==t.type?e[Ke]:h,h}function qr(e,t,n,r,o){let i=e.data[t];if(null===i)i=function Ul(e,t,n,r,o){const i=Ff(),s=Oc(),l=e.data[t]=function OC(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=l),null!==i&&(s?null==i.child&&null!==l.parent&&(i.child=l):null===i.next&&(i.next=l,l.prev=i)),l}(e,t,n,r,o),function EP(){return V.lFrame.inI18n}()&&(i.flags|=32);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function jo(){const e=V.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return Kt(i,!0),i}function ti(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function Bl(e,t,n){Hc(t);try{const r=e.viewQuery;null!==r&&Kl(1,r,n);const o=e.template;null!==o&&Hy(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Fy(e,t),e.staticViewQueries&&Kl(2,e.viewQuery,n);const i=e.components;null!==i&&function MC(e,t){for(let n=0;n<t.length;n++)XC(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[z]&=-5,Lc()}}function Vs(e,t,n,r){const o=t[z];if(128!=(128&o)){Hc(t);try{Af(t),function Lf(e){return V.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&Hy(e,t,n,2,r);const s=3==(3&o);if(s){const u=e.preOrderCheckHooks;null!==u&&vs(t,u,null)}else{const u=e.preOrderHooks;null!==u&&Ss(t,u,0,null),Uc(t,0)}if(function YC(e){for(let t=al(e);null!==t;t=cl(t)){if(!t[Tf])continue;const n=t[Er];for(let r=0;r<n.length;r++){const o=n[r];512&o[z]||Rc(o[ve],1),o[z]|=512}}}(t),function KC(e){for(let t=al(e);null!==t;t=cl(t))for(let n=Ze;n<t.length;n++){const r=t[n],o=r[k];ms(r)&&Vs(o,r,o.template,r[Pe])}}(t),null!==e.contentQueries&&Fy(e,t),s){const u=e.contentCheckHooks;null!==u&&vs(t,u)}else{const u=e.contentHooks;null!==u&&Ss(t,u,1),Uc(t,1)}!function _C(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)Yn(~o);else{const i=o,s=n[++r],a=n[++r];CP(s,i),a(2,t[i])}}}finally{Yn(-1)}}(e,t);const a=e.components;null!==a&&function IC(e,t){for(let n=0;n<t.length;n++)JC(e,t[n])}(t,a);const l=e.viewQuery;if(null!==l&&Kl(2,l,r),s){const u=e.viewCheckHooks;null!==u&&vs(t,u)}else{const u=e.viewHooks;null!==u&&Ss(t,u,2),Uc(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),t[z]&=-41,512&t[z]&&(t[z]&=-513,Rc(t[ve],-1))}finally{Lc()}}}function Hy(e,t,n,r,o){const i=function tt(){return V.lFrame.selectedIndex}(),s=2&r;try{Yn(-1),s&&t.length>de&&function Ty(e,t,n,r){if(!r)if(3==(3&t[z])){const i=e.preOrderCheckHooks;null!==i&&vs(t,i,n)}else{const i=e.preOrderHooks;null!==i&&Ss(t,i,0,n)}Yn(n)}(e,t,de,!1),Pt(s?2:0,o),n(r,o)}finally{Yn(i),Pt(s?3:1,o)}}function jl(e,t,n){if(Mc(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}function Ly(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=ql(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function ql(e,t,n,r,o,i,s,a,l,u){const d=de+r,h=d+o,f=function kC(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:$);return n}(d,h),p="function"==typeof u?u():u;return f[k]={type:e,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:t,data:f.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:l,consts:p,incompleteFirstPass:!1}}function By(e,t,n,r){for(let o in e)if(e.hasOwnProperty(o)){n=null===n?{}:n;const i=e[o];null===r?jy(n,t,o,i):r.hasOwnProperty(o)&&jy(n,t,r[o],i)}return n}function jy(e,t,n,r){e.hasOwnProperty(n)?e[n].push(t,r):e[n]=[t,r]}function Vy(e,t,n,r,o,i){for(let u=0;u<r.length;u++)zc(Ps(n,t),e,r[u].type);!function qC(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}(n,e.data.length,r.length);for(let u=0;u<r.length;u++){const d=r[u];d.providersResolver&&d.providersResolver(d)}let s=!1,a=!1,l=ti(e,t,r.length,null);for(let u=0;u<r.length;u++){const d=r[u];n.mergedAttrs=$o(n.mergedAttrs,d.hostAttrs),zC(e,n,t,l,d),$C(l,d,o),null!==d.contentQueries&&(n.flags|=4),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(n.flags|=64);const h=d.type.prototype;!s&&(h.ngOnChanges||h.ngOnInit||h.ngDoCheck)&&((e.preOrderHooks??(e.preOrderHooks=[])).push(n.index),s=!0),!a&&(h.ngOnChanges||h.ngDoCheck)&&((e.preOrderCheckHooks??(e.preOrderCheckHooks=[])).push(n.index),a=!0),l++}!function AC(e,t,n){const o=t.directiveEnd,i=e.data,s=t.attrs,a=[];let l=null,u=null;for(let d=t.directiveStart;d<o;d++){const h=i[d],f=n?n.get(h):null,y=f?f.outputs:null;l=By(h.inputs,d,l,f?f.inputs:null),u=By(h.outputs,d,u,y);const g=null===l||null===s||Dy(t)?null:QC(l,d,s);a.push(g)}null!==l&&(l.hasOwnProperty("class")&&(t.flags|=8),l.hasOwnProperty("style")&&(t.flags|=16)),t.initialInputs=a,t.inputs=l,t.outputs=u}(e,n,i)}function $y(e,t,n){const r=n.directiveStart,o=n.directiveEnd,i=n.index,s=function _P(){return V.lFrame.currentDirectiveIndex}();try{Yn(i);for(let a=r;a<o;a++){const l=e.data[a],u=t[a];Nc(a),(null!==l.hostBindings||0!==l.hostVars||null!==l.hostAttrs)&&BC(l,u)}}finally{Yn(-1),Nc(s)}}function BC(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Wl(e,t,n){t.componentOffset=n,(e.components??(e.components=[])).push(t.index)}function $C(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;At(t)&&(n[""]=e)}}function zC(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=Kn(o.type)),s=new Vo(i,At(o),O);e.blueprint[r]=s,n[r]=s,function HC(e,t,n,r,o){const i=o.hostBindings;if(i){let s=e.hostBindingOpCodes;null===s&&(s=e.hostBindingOpCodes=[]);const a=~t.index;(function LC(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(s)!=a&&s.push(a),s.push(n,r,i)}}(e,t,r,ti(e,n,o.hostVars,$),o)}function GC(e,t,n,r,o,i){const s=i[t];if(null!==s){const a=r.setInput;for(let l=0;l<s.length;){const u=s[l++],d=s[l++],h=s[l++];null!==a?r.setInput(n,h,u,d):n[d]=h}}}function QC(e,t,n){let r=null,o=0;for(;o<n.length;){const i=n[o];if(0!==i)if(5!==i){if("number"==typeof i)break;if(e.hasOwnProperty(i)){null===r&&(r=[]);const s=e[i];for(let a=0;a<s.length;a+=2)if(s[a]===t){r.push(i,s[a+1],n[o+1]);break}}o+=2}else o+=2;else o+=4}return r}function JC(e,t){const n=ut(t,e);if(ms(n)){const r=n[k];48&n[z]?Vs(r,n,r.template,n[Pe]):n[Qn]>0&&Ql(n)}}function Ql(e){for(let r=al(e);null!==r;r=cl(r))for(let o=Ze;o<r.length;o++){const i=r[o];if(ms(i))if(512&i[z]){const s=i[k];Vs(s,i,s.template,i[Pe])}else i[Qn]>0&&Ql(i)}const n=e[k].components;if(null!==n)for(let r=0;r<n.length;r++){const o=ut(n[r],e);ms(o)&&o[Qn]>0&&Ql(o)}}function XC(e,t){const n=ut(t,e),r=n[k];(function ZC(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),Bl(r,n,n[Pe])}function $s(e,t){return e[Ho]?e[wf][Rt]=t:e[Ho]=t,e[wf]=t,t}function qs(e){for(;e;){e[z]|=32;const t=Yo(e);if(iP(e)&&!t)return e;e=t}return null}function zs(e,t,n,r=!0){const o=t[us];o.begin&&o.begin();try{Vs(e,t,e.template,n)}catch(s){throw r&&Qy(t,s),s}finally{o.end&&o.end()}}function Kl(e,t,n){Fc(0),t(e,n)}function zy(e){return e[wr]||(e[wr]=[])}function Wy(e){return e.cleanup||(e.cleanup=[])}function Qy(e,t){const n=e[ls],r=n?n.get(jr,null):null;r&&r.handleError(t)}function Yl(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],a=n[i++],l=t[s],u=e.data[s];null!==u.setInput?u.setInput(l,o,r,a):l[a]=o}}function Ws(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const a=t[s];"number"==typeof a?i=a:1==i?o=gc(o,a):2==i&&(r=gc(r,a+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}function Gs(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(Be(i)),Ot(i))for(let a=Ze;a<i.length;a++){const l=i[a],u=l[k].firstChild;null!==u&&Gs(l[k],l,u,r)}const s=n.type;if(8&s)Gs(e,t,n.child,r);else if(32&s){const a=sl(n,t);let l;for(;l=a();)r.push(l)}else if(16&s){const a=jp(t,n);if(Array.isArray(a))r.push(...a);else{const l=Yo(t[Ke]);Gs(l[k],l,a,r,!0)}}n=o?n.projectionNext:n.next}return r}class ni{get rootNodes(){const t=this._lView,n=t[k];return Gs(n,t,n.firstChild,[])}constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[Pe]}set context(t){this._lView[Pe]=t}get destroyed(){return 128==(128&this._lView[z])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[ve];if(Ot(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(function dl(e,t){if(e.length<=Ze)return;const n=Ze+t,r=e[n];if(r){const o=r[Lo];null!==o&&o!==e&&Rp(o,r),t>0&&(e[n-1][Rt]=r[Rt]);const i=Es(e,Ze+t);!function xT(e,t){Jo(e,t,t[G],2,null,null),t[dn]=null,t[Qe]=null}(r[k],r);const s=i[Qt];null!==s&&s.detachView(i[k]),r[ve]=null,r[Rt]=null,r[z]&=-65}return r}(t,r),Es(n,r))}this._attachedToViewContainer=!1}!function Op(e,t){if(!(128&t[z])){const n=t[G];n.destroyNode&&Jo(e,t,n,3,null,null),function LT(e){let t=e[Ho];if(!t)return hl(e[k],e);for(;t;){let n=null;if(mt(t))n=t[Ho];else{const r=t[Ze];r&&(n=r)}if(!n){for(;t&&!t[Rt]&&t!==e;)mt(t)&&hl(t[k],t),t=t[ve];null===t&&(t=e),mt(t)&&hl(t[k],t),n=t&&t[Rt]}t=n}}(t)}}(this._lView[k],this._lView)}onDestroy(t){!function Uy(e,t,n,r){const o=zy(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&Wy(e).push(r,o.length-1))}(this._lView[k],this._lView,null,t)}markForCheck(){qs(this._cdRefInjectingView||this._lView)}detach(){this._lView[z]&=-65}reattach(){this._lView[z]|=64}detectChanges(){zs(this._lView[k],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new N(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function HT(e,t){Jo(e,t,t[G],2,null,null)}(this._lView[k],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new N(902,!1);this._appRef=t}}class e_ extends ni{constructor(t){super(t),this._view=t}detectChanges(){const t=this._view;zs(t[k],t,t[Pe],!1)}checkNoChanges(){}get context(){return null}}class Ky extends Us{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=ne(t);return new ri(n,this.ngModule)}}function Yy(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}class n_{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){r=ss(r);const o=this.injector.get(t,Ol,r);return o!==Ol||n===Ol?o:this.parentInjector.get(t,n,r)}}class ri extends py{get inputs(){return Yy(this.componentDef.inputs)}get outputs(){return Yy(this.componentDef.outputs)}constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=function iC(e){return e.map(oC).join(",")}(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}create(t,n,r,o){let i=(o=o||this.ngModule)instanceof tr?o:o?.injector;i&&null!==this.componentDef.getStandaloneInjector&&(i=this.componentDef.getStandaloneInjector(i)||i);const s=i?new n_(t,i):t,a=s.get(my,null);if(null===a)throw new N(407,!1);const l=s.get(LE,null),u=a.createRenderer(null,this.componentDef),d=this.componentDef.selectors[0][0]||"div",h=r?function RC(e,t,n){return e.selectRootElement(t,n===Gt.ShadowDom)}(u,r,this.componentDef.encapsulation):ul(u,d,function t_(e){const t=e.toLowerCase();return"svg"===t?"svg":"math"===t?"math":null}(d)),f=this.componentDef.onPush?288:272,p=ql(0,null,null,1,0,null,null,null,null,null),y=js(null,p,null,f,null,null,a,u,l,s,null);let g,b;Hc(y);try{const v=this.componentDef;let D,S=null;v.findHostDirectiveDefs?(D=[],S=new Map,v.findHostDirectiveDefs(v,D,S),D.push(v)):D=[v];const P=function o_(e,t){const n=e[k],r=de;return e[r]=t,qr(n,r,2,"#host",null)}(y,h),E=function i_(e,t,n,r,o,i,s,a){const l=o[k];!function s_(e,t,n,r){for(const o of e)t.mergedAttrs=$o(t.mergedAttrs,o.hostAttrs);null!==t.mergedAttrs&&(Ws(t,t.mergedAttrs,!0),null!==n&&qp(r,n,t))}(r,e,t,s);const u=i.createRenderer(t,n),d=js(o,Ly(n),null,n.onPush?32:16,o[e.index],e,i,u,a||null,null,null);return l.firstCreatePass&&Wl(l,e,r.length-1),$s(o,d),o[e.index]=d}(P,h,v,D,y,a,u);b=function Of(e,t){return e.data[t]}(p,de),h&&function c_(e,t,n,r){if(r)jc(e,n,["ng-version",UE.full]);else{const{attrs:o,classes:i}=function sC(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!Nt(o))break;o=i}r++}return{attrs:t,classes:n}}(t.selectors[0]);o&&jc(e,n,o),i&&i.length>0&&$p(e,n,i.join(" "))}}(u,v,h,r),void 0!==n&&function l_(e,t,n){const r=e.projection=[];for(let o=0;o<t.length;o++){const i=n[o];r.push(null!=i?Array.from(i):null)}}(b,this.ngContentSelectors,n),g=function a_(e,t,n,r,o,i){const s=je(),a=o[k],l=gt(s,o);Vy(a,o,s,n,null,r);for(let d=0;d<n.length;d++)Ye(Jn(o,a,s.directiveStart+d,s),o);$y(a,o,s),l&&Ye(l,o);const u=Jn(o,a,s.directiveStart+s.componentOffset,s);if(e[Pe]=o[Pe]=u,null!==i)for(const d of i)d(u,t);return jl(a,s,e),u}(E,v,D,S,y,[u_]),Bl(p,y,null)}finally{Lc()}return new r_(this.componentType,g,Ur(b,y),y,b)}}class r_ extends OE{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new e_(o),this.componentType=t}setInput(t,n){const r=this._tNode.inputs;let o;if(null!==r&&(o=r[t])){const i=this._rootLView;Yl(i[k],i,o,t,n),qs(ut(this._tNode.index,i))}}get injector(){return new Mr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}function u_(){const e=je();gs(C()[k],e)}function Zl(e,t,n,r,o){const s=o?"class":"style";Yl(e,n,t.inputs[s],s,r)}function he(e,t,n,r){const o=C(),i=J(),s=de+e,a=o[G],l=i.firstCreatePass?function I_(e,t,n,r,o,i){const s=t.consts,l=qr(t,e,2,r,Mn(s,o));return function zl(e,t,n,r){if(xf()){const o=null===r?null:{"":-1},i=function jC(e,t){const n=e.directiveRegistry;let r=null,o=null;if(n)for(let i=0;i<n.length;i++){const s=n[i];if(wy(t,s.selectors,!1))if(r||(r=[]),At(s))if(null!==s.findHostDirectiveDefs){const a=[];o=o||new Map,s.findHostDirectiveDefs(s,a,o),r.unshift(...a,s),Wl(e,t,a.length)}else r.unshift(s),Wl(e,t,0);else o=o||new Map,s.findHostDirectiveDefs?.(s,r,o),r.push(s)}return null===r?null:[r,o]}(e,n);let s,a;null===i?s=a=null:[s,a]=i,null!==s&&Vy(e,t,n,s,o,a),o&&function VC(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new N(-301,!1);r.push(t[o],i)}}}(n,r,o)}n.mergedAttrs=$o(n.mergedAttrs,n.attrs)}(t,n,l,Mn(s,i)),null!==l.attrs&&Ws(l,l.attrs,!1),null!==l.mergedAttrs&&Ws(l,l.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,l),l}(s,i,o,t,n,r):i.data[s],u=o[s]=ul(a,t,function xP(){return V.lFrame.currentNamespace}()),d=fs(l);return Kt(l,!0),qp(a,u,l),32!=(32&l.flags)&&Os(i,o,u,l),0===function gP(){return V.lFrame.elementDepthCount}()&&Ye(u,o),function vP(){V.lFrame.elementDepthCount++}(),d&&(function Vl(e,t,n){xf()&&(function UC(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;Bo(n)&&function WC(e,t,n){const r=gt(t,e),o=Ly(n),i=e[us],s=$s(e,js(e,o,null,n.onPush?32:16,r,t,i,i.createRenderer(r,n),null,null,null));e[t.index]=s}(t,n,e.data[o+n.componentOffset]),e.firstCreatePass||Ps(n,t),Ye(r,t);const s=n.initialInputs;for(let a=o;a<i;a++){const l=e.data[a],u=Jn(t,e,a,n);Ye(u,t),null!==s&&GC(0,a-o,u,l,0,s),At(l)&&(ut(n.index,t)[Pe]=Jn(t,e,a,n))}}(e,t,n,gt(n,t)),64==(64&n.flags)&&$y(e,t,n))}(i,o,l),jl(i,l,o)),null!==r&&function $l(e,t,n=gt){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],a=-1===s?n(t,e):e[s];e[o++]=a}}}(o,l),he}function Me(){let e=je();Oc()?function Ac(){V.lFrame.isParent=!1}():(e=e.parent,Kt(e,!1));const t=e;!function SP(){V.lFrame.elementDepthCount--}();const n=J();return n.firstCreatePass&&(gs(n,e),Mc(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function UP(e){return 0!=(8&e.flags)}(t)&&Zl(n,t,C(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function BP(e){return 0!=(16&e.flags)}(t)&&Zl(n,t,C(),t.stylesWithoutHost,!1),Me}function nt(e,t,n,r){return he(e,t,n,r),Me(),nt}function nu(e){return!!e&&"function"==typeof e.then}const R_=function pm(e){return!!e&&"function"==typeof e.subscribe};function or(e,t,n,r){const o=C(),i=J(),s=je();return function mm(e,t,n,r,o,i,s){const a=fs(r),u=e.firstCreatePass&&Wy(e),d=t[Pe],h=zy(t);let f=!0;if(3&r.type||s){const g=gt(r,t),b=s?s(g):g,v=h.length,D=s?P=>s(Be(P[r.index])):r.index;let S=null;if(!s&&a&&(S=function O_(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const a=t[wr],l=o[i+2];return a.length>l?a[l]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==S)(S.__ngLastListenerFn__||S).__ngNextListenerFn__=i,S.__ngLastListenerFn__=i,f=!1;else{i=vm(r,t,d,i,!1);const P=n.listen(b,o,i);h.push(i,P),u&&u.push(o,D,v,v+1)}}else i=vm(r,t,d,i,!1);const p=r.outputs;let y;if(f&&null!==p&&(y=p[o])){const g=y.length;if(g)for(let b=0;b<g;b+=2){const E=t[y[b]][y[b+1]].subscribe(i),_=h.length;h.push(i,E),u&&u.push(o,r.index,_,-(_+1))}}}(i,o,o[G],s,e,t,r),or}function gm(e,t,n,r){try{return Pt(6,t,n),!1!==n(r)}catch(o){return Qy(e,o),!1}finally{Pt(7,t,n)}}function vm(e,t,n,r,o){return function i(s){if(s===Function)return r;qs(e.componentOffset>-1?ut(e.index,t):t);let l=gm(t,n,r,s),u=i.__ngNextListenerFn__;for(;u;)l=gm(t,n,u,s)&&l,u=u.__ngNextListenerFn__;return o&&!1===l&&(s.preventDefault(),s.returnValue=!1),l}}function Ve(e,t=""){const n=C(),r=J(),o=e+de,i=r.firstCreatePass?qr(r,o,1,t,null):r.data[o],s=n[o]=function ll(e,t){return e.createText(t)}(n[G],t);Os(r,n,s,i),Kt(i,!1)}const no="en-US";let dg=no;class ro{}class TM{}class Hg extends ro{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Ky(this);const r=function yt(e,t){const n=e[vf]||null;if(!n&&!0===t)throw new Error(`Type ${ae(e)} does not have '\u0275mod' property.`);return n}(t);this._bootstrapComponents=function yn(e){return e instanceof Function?e():e}(r.bootstrap),this._r3Injector=My(t,n,[{provide:ro,useValue:this},{provide:Us,useValue:this.componentFactoryResolver}],ae(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(t)}get injector(){return this._r3Injector}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class yu extends TM{constructor(t){super(),this.moduleType=t}create(t){return new Hg(this.moduleType,t)}}function gu(e){return t=>{setTimeout(e,void 0,t)}}const gn=class ek extends Xi{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&"object"==typeof t){const l=t;o=l.next?.bind(l),i=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(i=gu(i),o&&(o=gu(o)),s&&(s=gu(s)));const a=super.subscribe({next:o,error:i,complete:s});return t instanceof Mt&&t.add(a),a}};function oa(...e){}const wv=new H("Application Initializer");let ia=(()=>{class e{constructor(n){this.appInits=n,this.resolve=oa,this.reject=oa,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(nu(i))n.push(i);else if(R_(i)){const s=new Promise((a,l)=>{i.subscribe({complete:a,error:l})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(j(wv,8))},e.\u0275prov=X({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const pi=new H("AppId",{providedIn:"root",factory:function Pv(){return`${Mu()}${Mu()}${Mu()}`}});function Mu(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Tv=new H("Platform Initializer"),ku=new H("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),Sn=new H("LocaleId",{providedIn:"root",factory:()=>Ao(Sn,U.Optional|U.SkipSelf)||function Hk(){return typeof $localize<"u"&&$localize.locale||no}()}),Vk=(()=>Promise.resolve(0))();function Ru(e){typeof Zone>"u"?Vk.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}class $e{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new gn(!1),this.onMicrotaskEmpty=new gn(!1),this.onStable=new gn(!1),this.onError=new gn(!1),typeof Zone>"u")throw new N(908,!1);Zone.assertZonePatched();const o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function $k(){let e=ue.requestAnimationFrame,t=ue.cancelAnimationFrame;if(typeof Zone<"u"&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function Wk(e){const t=()=>{!function zk(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(ue,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,Au(e),e.isCheckStableRunning=!0,Ou(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),Au(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,a)=>{try{return _v(e),n.invokeTask(o,i,s,a)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),Iv(e)}},onInvoke:(n,r,o,i,s,a,l)=>{try{return _v(e),n.invoke(o,i,s,a,l)}finally{e.shouldCoalesceRunChangeDetection&&t(),Iv(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,Au(e),Ou(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!$e.isInAngularZone())throw new N(909,!1)}static assertNotInAngularZone(){if($e.isInAngularZone())throw new N(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,qk,oa,oa);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const qk={};function Ou(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Au(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function _v(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Iv(e){e._nesting--,Ou(e)}class Gk{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new gn,this.onMicrotaskEmpty=new gn,this.onStable=new gn,this.onError=new gn}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}const Mv=new H(""),sa=new H("");let Fu,Nu=(()=>{class e{constructor(n,r,o){this._ngZone=n,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,Fu||(function Qk(e){Fu=e}(o),o.addToWindow(r)),this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{$e.assertNotInAngularZone(),Ru(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Ru(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(j($e),j(xu),j(sa))},e.\u0275prov=X({token:e,factory:e.\u0275fac}),e})(),xu=(()=>{class e{constructor(){this._applications=new Map}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){return Fu?.findTestabilityInTree(this,n,r)??null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=X({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();const bn=!1;let On=null;const kv=new H("AllowMultipleToken"),Hu=new H("PlatformDestroyListeners"),Kk=new H("appBootstrapListener");function Ov(e,t,n=[]){const r=`Platform: ${t}`,o=new H(r);return(i=[])=>{let s=Lu();if(!s||s.injector.get(kv,!1)){const a=[...n,...i,{provide:o,useValue:!0}];e?e(a):function Xk(e){if(On&&!On.get(kv,!1))throw new N(400,!1);On=e;const t=e.get(Nv);(function Rv(e){const t=e.get(Tv,null);t&&t.forEach(n=>n())})(e)}(function Av(e=[],t){return nr.create({name:t,providers:[{provide:_l,useValue:"platform"},{provide:Hu,useValue:new Set([()=>On=null])},...e]})}(a,r))}return function eR(e){const t=Lu();if(!t)throw new N(401,!1);return t}()}}function Lu(){return On?.get(Nv)??null}let Nv=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const o=function Fv(e,t){let n;return n="noop"===e?new Gk:("zone.js"===e?void 0:e)||new $e(t),n}(r?.ngZone,function xv(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!e||!e.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!e||!e.ngZoneRunCoalescing)||!1}}(r)),i=[{provide:$e,useValue:o}];return o.run(()=>{const s=nr.create({providers:i,parent:this.injector,name:n.moduleType.name}),a=n.create(s),l=a.injector.get(jr,null);if(!l)throw new N(402,!1);return o.runOutsideAngular(()=>{const u=o.onError.subscribe({next:d=>{l.handleError(d)}});a.onDestroy(()=>{aa(this._modules,a),u.unsubscribe()})}),function Hv(e,t,n){try{const r=n();return nu(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(l,o,()=>{const u=a.injector.get(ia);return u.runInitializers(),u.donePromise.then(()=>(function hg(e){bt(e,"Expected localeId to be defined"),"string"==typeof e&&(dg=e.toLowerCase().replace(/_/g,"-"))}(a.injector.get(Sn,no)||no),this._moduleDoBootstrap(a),a))})})}bootstrapModule(n,r=[]){const o=Lv({},r);return function Yk(e,t,n){const r=new yu(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(Uu);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new N(-403,!1);n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new N(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());const n=this._injector.get(Hu,null);n&&(n.forEach(r=>r()),n.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(j(nr))},e.\u0275prov=X({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();function Lv(e,t){return Array.isArray(t)?t.reduce(Lv,e):{...e,...t}}let Uu=(()=>{class e{get destroyed(){return this._destroyed}get injector(){return this._injector}constructor(n,r,o){this._zone=n,this._injector=r,this._exceptionHandler=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new we(a=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{a.next(this._stable),a.complete()})}),s=new we(a=>{let l;this._zone.runOutsideAngular(()=>{l=this._zone.onStable.subscribe(()=>{$e.assertNotInAngularZone(),Ru(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,a.next(!0))})})});const u=this._zone.onUnstable.subscribe(()=>{$e.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{a.next(!1)}))});return()=>{l.unsubscribe(),u.unsubscribe()}});this.isStable=function Fw(...e){const t=es(e),n=function Mw(e,t){return"number"==typeof fc(e)?e.pop():t}(e,1/0),r=e;return r.length?1===r.length?En(r[0]):af(n)(ko(r,t)):cf}(i,s.pipe(function Hw(e={}){const{connector:t=(()=>new Xi),resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=e;return i=>{let s,a,l,u=0,d=!1,h=!1;const f=()=>{a?.unsubscribe(),a=void 0},p=()=>{f(),s=l=void 0,d=h=!1},y=()=>{const g=s;p(),g?.unsubscribe()};return Gn((g,b)=>{u++,!h&&!d&&f();const v=l=l??t();b.add(()=>{u--,0===u&&!h&&!d&&(a=yc(y,o))}),v.subscribe(b),!s&&u>0&&(s=new Io({next:D=>v.next(D),error:D=>{h=!0,f(),a=yc(p,n,D),v.error(D)},complete:()=>{d=!0,f(),a=yc(p,r),v.complete()}}),En(g).subscribe(s))})(i)}}()))}bootstrap(n,r){const o=n instanceof py;if(!this._injector.get(ia).done){!o&&function Fo(e){const t=ne(e)||Ge(e)||lt(e);return null!==t&&t.standalone}(n);throw new N(405,bn)}let s;s=o?n:this._injector.get(Us).resolveComponentFactory(n),this.componentTypes.push(s.componentType);const a=function Jk(e){return e.isBoundToModule}(s)?void 0:this._injector.get(ro),u=s.create(nr.NULL,[],r||s.selector,a),d=u.location.nativeElement,h=u.injector.get(Mv,null);return h?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),aa(this.components,u),h?.unregisterApplication(d)}),this._loadComponent(u),u}tick(){if(this._runningTick)throw new N(101,!1);try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;aa(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n);const r=this._injector.get(Kk,[]);r.push(...this._bootstrapListeners),r.forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>aa(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new N(406,!1);const n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return e.\u0275fac=function(n){return new(n||e)(j($e),j(tr),j(jr))},e.\u0275prov=X({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function aa(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const gR=Ov(null,"core",[]);let vR=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(j(Uu))},e.\u0275mod=In({type:e}),e.\u0275inj=an({}),e})(),qu=null;function da(){return qu}class DR{}const nn=new H("DocumentToken");function oS(e,t){t=encodeURIComponent(t);for(const n of e.split(";")){const r=n.indexOf("="),[o,i]=-1==r?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===t)return decodeURIComponent(i)}return null}let HO=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=In({type:e}),e.\u0275inj=an({}),e})();class pS{}class pA extends DR{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class ad extends pA{static makeCurrent(){!function bR(e){qu||(qu=e)}(new ad)}onAndCancel(t,n,r){return t.addEventListener(n,r,!1),()=>{t.removeEventListener(n,r,!1)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,n){return(n=n||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return"window"===n?window:"document"===n?t:"body"===n?t.body:null}getBaseHref(t){const n=function yA(){return Si=Si||document.querySelector("base"),Si?Si.getAttribute("href"):null}();return null==n?null:function mA(e){Pa=Pa||document.createElement("a"),Pa.setAttribute("href",e);const t=Pa.pathname;return"/"===t.charAt(0)?t:`/${t}`}(n)}resetBaseElement(){Si=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return oS(document.cookie,t)}}let Pa,Si=null;const SS=new H("TRANSITION_ID"),vA=[{provide:wv,useFactory:function gA(e,t,n){return()=>{n.get(ia).donePromise.then(()=>{const r=da(),o=t.querySelectorAll(`style[ng-transition="${e}"]`);for(let i=0;i<o.length;i++)r.remove(o[i])})}},deps:[SS,nn,nr],multi:!0}];let bA=(()=>{class e{build(){return new XMLHttpRequest}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=X({token:e,factory:e.\u0275fac}),e})();const Ta=new H("EventManagerPlugins");let Ea=(()=>{class e{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(o=>{o.manager=this}),this._plugins=n.slice().reverse()}addEventListener(n,r,o){return this._findPluginFor(r).addEventListener(n,r,o)}addGlobalEventListener(n,r,o){return this._findPluginFor(r).addGlobalEventListener(n,r,o)}getZone(){return this._zone}_findPluginFor(n){const r=this._eventNameToPlugin.get(n);if(r)return r;const o=this._plugins;for(let i=0;i<o.length;i++){const s=o[i];if(s.supports(n))return this._eventNameToPlugin.set(n,s),s}throw new Error(`No event manager plugin found for event ${n}`)}}return e.\u0275fac=function(n){return new(n||e)(j(Ta),j($e))},e.\u0275prov=X({token:e,factory:e.\u0275fac}),e})();class bS{constructor(t){this._doc=t}addGlobalEventListener(t,n,r){const o=da().getGlobalEventTarget(this._doc,t);if(!o)throw new Error(`Unsupported event target ${o} for event ${n}`);return this.addEventListener(o,n,r)}}let DS=(()=>{class e{constructor(){this.usageCount=new Map}addStyles(n){for(const r of n)1===this.changeUsageCount(r,1)&&this.onStyleAdded(r)}removeStyles(n){for(const r of n)0===this.changeUsageCount(r,-1)&&this.onStyleRemoved(r)}onStyleRemoved(n){}onStyleAdded(n){}getAllStyles(){return this.usageCount.keys()}changeUsageCount(n,r){const o=this.usageCount;let i=o.get(n)??0;return i+=r,i>0?o.set(n,i):o.delete(n),i}ngOnDestroy(){for(const n of this.getAllStyles())this.onStyleRemoved(n);this.usageCount.clear()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=X({token:e,factory:e.\u0275fac}),e})(),bi=(()=>{class e extends DS{constructor(n){super(),this.doc=n,this.styleRef=new Map,this.hostNodes=new Set,this.resetHostNodes()}onStyleAdded(n){for(const r of this.hostNodes)this.addStyleToHost(r,n)}onStyleRemoved(n){const r=this.styleRef;r.get(n)?.forEach(i=>i.remove()),r.delete(n)}ngOnDestroy(){super.ngOnDestroy(),this.styleRef.clear(),this.resetHostNodes()}addHost(n){this.hostNodes.add(n);for(const r of this.getAllStyles())this.addStyleToHost(n,r)}removeHost(n){this.hostNodes.delete(n)}addStyleToHost(n,r){const o=this.doc.createElement("style");o.textContent=r,n.appendChild(o);const i=this.styleRef.get(r);i?i.push(o):this.styleRef.set(r,[o])}resetHostNodes(){const n=this.hostNodes;n.clear(),n.add(this.doc.head)}}return e.\u0275fac=function(n){return new(n||e)(j(nn))},e.\u0275prov=X({token:e,factory:e.\u0275fac}),e})();const cd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},ld=/%COMP%/g,TS=new H("RemoveStylesOnCompDestory",{providedIn:"root",factory:()=>!1});function ES(e,t){return t.flat(100).map(n=>n.replace(ld,e))}function CS(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let ud=(()=>{class e{constructor(n,r,o,i){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestory=i,this.rendererByCompId=new Map,this.defaultRenderer=new dd(n)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;const o=this.getOrCreateRenderer(n,r);return o instanceof MS?o.applyToHost(n):o instanceof hd&&o.applyStyles(),o}getOrCreateRenderer(n,r){const o=this.rendererByCompId;let i=o.get(r.id);if(!i){const s=this.eventManager,a=this.sharedStylesHost,l=this.removeStylesOnCompDestory;switch(r.encapsulation){case Gt.Emulated:i=new MS(s,a,r,this.appId,l);break;case Gt.ShadowDom:return new _A(s,a,n,r);default:i=new hd(s,a,r,l)}i.onDestroy=()=>o.delete(r.id),o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}begin(){}end(){}}return e.\u0275fac=function(n){return new(n||e)(j(Ea),j(bi),j(pi),j(TS))},e.\u0275prov=X({token:e,factory:e.\u0275fac}),e})();class dd{constructor(t){this.eventManager=t,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(t,n){return n?document.createElementNS(cd[n]||n,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,n){(IS(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(IS(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){t&&t.removeChild(n)}selectRootElement(t,n){let r="string"==typeof t?document.querySelector(t):t;if(!r)throw new Error(`The selector "${t}" did not match any elements`);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;const i=cd[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){const o=cd[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(dt.DashCase|dt.Important)?t.style.setProperty(n,r,o&dt.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&dt.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t[n]=r}setValue(t,n){t.nodeValue=n}listen(t,n,r){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,n,CS(r)):this.eventManager.addEventListener(t,n,CS(r))}}function IS(e){return"TEMPLATE"===e.tagName&&void 0!==e.content}class _A extends dd{constructor(t,n,r,o){super(t),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const i=ES(o.id,o.styles);for(const s of i){const a=document.createElement("style");a.textContent=s,this.shadowRoot.appendChild(a)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(this.nodeOrShadowRoot(t),n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}}class hd extends dd{constructor(t,n,r,o,i=r.id){super(t),this.sharedStylesHost=n,this.removeStylesOnCompDestory=o,this.rendererUsageCount=0,this.styles=ES(i,r.styles)}applyStyles(){this.sharedStylesHost.addStyles(this.styles),this.rendererUsageCount++}destroy(){this.removeStylesOnCompDestory&&(this.sharedStylesHost.removeStyles(this.styles),this.rendererUsageCount--,0===this.rendererUsageCount&&this.onDestroy?.())}}class MS extends hd{constructor(t,n,r,o,i){const s=o+"-"+r.id;super(t,n,r,i,s),this.contentAttr=function TA(e){return"_ngcontent-%COMP%".replace(ld,e)}(s),this.hostAttr=function EA(e){return"_nghost-%COMP%".replace(ld,e)}(s)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,n){const r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}}let IA=(()=>{class e extends bS{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o){return n.addEventListener(r,o,!1),()=>this.removeEventListener(n,r,o)}removeEventListener(n,r,o){return n.removeEventListener(r,o)}}return e.\u0275fac=function(n){return new(n||e)(j(nn))},e.\u0275prov=X({token:e,factory:e.\u0275fac}),e})();const kS=["alt","control","meta","shift"],MA={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},kA={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let RA=(()=>{class e extends bS{constructor(n){super(n)}supports(n){return null!=e.parseEventName(n)}addEventListener(n,r,o){const i=e.parseEventName(r),s=e.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>da().onAndCancel(n,i.domEventName,s))}static parseEventName(n){const r=n.toLowerCase().split("."),o=r.shift();if(0===r.length||"keydown"!==o&&"keyup"!==o)return null;const i=e._normalizeKey(r.pop());let s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),kS.forEach(u=>{const d=r.indexOf(u);d>-1&&(r.splice(d,1),s+=u+".")}),s+=i,0!=r.length||0===i.length)return null;const l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(n,r){let o=MA[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),!(null==o||!o)&&(o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),kS.forEach(s=>{s!==o&&(0,kA[s])(n)&&(i+=s+".")}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return"esc"===n?"escape":n}}return e.\u0275fac=function(n){return new(n||e)(j(nn))},e.\u0275prov=X({token:e,factory:e.\u0275fac}),e})();const OS=[{provide:ku,useValue:"browser"},{provide:Tv,useValue:function OA(){ad.makeCurrent()},multi:!0},{provide:nn,useFactory:function NA(){return function XT(e){vl=e}(document),document},deps:[]}],xA=Ov(gR,"browser",OS),AS=new H(""),NS=[{provide:sa,useClass:class SA{addToWindow(t){ue.getAngularTestability=(r,o=!0)=>{const i=t.findTestabilityInTree(r,o);if(null==i)throw new Error("Could not find testability for element.");return i},ue.getAllAngularTestabilities=()=>t.getAllTestabilities(),ue.getAllAngularRootElements=()=>t.getAllRootElements(),ue.frameworkStabilizers||(ue.frameworkStabilizers=[]),ue.frameworkStabilizers.push(r=>{const o=ue.getAllAngularTestabilities();let i=o.length,s=!1;const a=function(l){s=s||l,i--,0==i&&r(s)};o.forEach(function(l){l.whenStable(a)})})}findTestabilityInTree(t,n,r){return null==n?null:t.getTestability(n)??(r?da().isShadowRoot(n)?this.findTestabilityInTree(t,n.host,!0):this.findTestabilityInTree(t,n.parentElement,!0):null)}},deps:[]},{provide:Mv,useClass:Nu,deps:[$e,xu,sa]},{provide:Nu,useClass:Nu,deps:[$e,xu,sa]}],xS=[{provide:_l,useValue:"root"},{provide:jr,useFactory:function AA(){return new jr},deps:[]},{provide:Ta,useClass:IA,multi:!0,deps:[nn,$e,ku]},{provide:Ta,useClass:RA,multi:!0,deps:[nn]},{provide:ud,useClass:ud,deps:[Ea,bi,pi,TS]},{provide:my,useExisting:ud},{provide:DS,useExisting:bi},{provide:bi,useClass:bi,deps:[nn]},{provide:Ea,useClass:Ea,deps:[Ta,$e]},{provide:pS,useClass:bA,deps:[]},[]];let FA=(()=>{class e{constructor(n){}static withServerTransition(n){return{ngModule:e,providers:[{provide:pi,useValue:n.appId},{provide:SS,useExisting:pi},vA]}}}return e.\u0275fac=function(n){return new(n||e)(j(AS,12))},e.\u0275mod=In({type:e}),e.\u0275inj=an({providers:[...xS,...NS],imports:[HO,vR]}),e})();typeof window<"u"&&window;var re=(()=>{return(e=re||(re={}))[e.loading=1]="loading",e[e.setVariables=2]="setVariables",e[e.fetchMore=3]="fetchMore",e[e.refetch=4]="refetch",e[e.poll=6]="poll",e[e.ready=7]="ready",e[e.error=8]="error",re;var e})();function Di(e){return!!e&&e<7}var yd="Invariant Violation",LS=Object.setPrototypeOf,qA=void 0===LS?function(e,t){return e.__proto__=t,e}:LS,US=function(e){function t(n){void 0===n&&(n=yd);var r=e.call(this,"number"==typeof n?yd+": "+n+" (see https://github.com/apollographql/invariant-packages)":n)||this;return r.framesToPop=1,r.name=yd,qA(r,t.prototype),r}return kt(t,e),t}(Error);function cr(e,t){if(!e)throw new US(t)}var e,Ca=["debug","log","warn","error","silent"],md=Ca.indexOf("log");function _a(e){return function(){if(Ca.indexOf(e)>=md)return(console[e]||console.log).apply(console,arguments)}}(e=cr||(cr={})).debug=_a("debug"),e.log=_a("log"),e.warn=_a("warn"),e.error=_a("error");var gd="3.12.6";function Bt(e){try{return e()}catch{}}const vd=Bt(function(){return globalThis})||Bt(function(){return window})||Bt(function(){return self})||Bt(function(){return global})||Bt(function(){return Bt.constructor("return this")()});var BS=new Map;function Sd(e){var t=BS.get(e)||1;return BS.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function jS(e,t){void 0===t&&(t=0);var n=Sd("stringifyForDisplay");return JSON.stringify(e,function(r,o){return void 0===o?n:o},t).split(JSON.stringify(n)).join("<undefined>")}function Ia(e){return function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if("number"==typeof t){var o=t;(t=bd(o))||(t=Dd(o,n),n=[])}e.apply(void 0,[t].concat(n))}}var A=Object.assign(function(t,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];t||cr(t,bd(n,r)||Dd(n,r))},{debug:Ia(cr.debug),log:Ia(cr.log),warn:Ia(cr.warn),error:Ia(cr.error)});function it(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new US(bd(e,t)||Dd(e,t))}var VS=Symbol.for("ApolloErrorMessageHandler_"+gd);function $S(e){if("string"==typeof e)return e;try{return jS(e,2).slice(0,1e3)}catch{return"<non-serializable>"}}function bd(e,t){if(void 0===t&&(t=[]),e)return vd[VS]&&vd[VS](e,t.map($S))}function Dd(e,t){if(void 0===t&&(t=[]),e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:gd,message:e,args:t.map($S)})))}function qS(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wd(e,t,n){return t&&zS(e.prototype,t),n&&zS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}globalThis;var Pd=function(){return"function"==typeof Symbol},Td=function(e){return Pd()&&Boolean(Symbol[e])},Ed=function(e){return Td(e)?Symbol[e]:"@@"+e};Pd()&&!Td("observable")&&(Symbol.observable=Symbol("observable"));var GA=Ed("iterator"),Cd=Ed("observable"),WS=Ed("species");function Ma(e,t){var n=e[t];if(null!=n){if("function"!=typeof n)throw new TypeError(n+" is not a function");return n}}function wi(e){var t=e.constructor;return void 0!==t&&null===(t=t[WS])&&(t=void 0),void 0!==t?t:le}function so(e){so.log?so.log(e):setTimeout(function(){throw e})}function ka(e){Promise.resolve().then(function(){try{e()}catch(t){so(t)}})}function GS(e){var t=e._cleanup;if(void 0!==t&&(e._cleanup=void 0,t))try{if("function"==typeof t)t();else{var n=Ma(t,"unsubscribe");n&&n.call(t)}}catch(r){so(r)}}function _d(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function QS(e,t,n){e._state="running";var r=e._observer;try{var o=Ma(r,t);switch(t){case"next":o&&o.call(r,n);break;case"error":if(_d(e),!o)throw n;o.call(r,n);break;case"complete":_d(e),o&&o.call(r)}}catch(i){so(i)}"closed"===e._state?GS(e):"running"===e._state&&(e._state="ready")}function Id(e,t,n){if("closed"!==e._state){if("buffering"===e._state)return void e._queue.push({type:t,value:n});if("ready"!==e._state)return e._state="buffering",e._queue=[{type:t,value:n}],void ka(function(){return function KA(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var n=0;n<t.length&&(QS(e,t[n].type,t[n].value),"closed"!==e._state);++n);}}(e)});QS(e,t,n)}}var YA=function(){function e(n,r){this._cleanup=void 0,this._observer=n,this._queue=void 0,this._state="initializing";var o=new JA(this);try{this._cleanup=r.call(void 0,o)}catch(i){o.error(i)}"initializing"===this._state&&(this._state="ready")}return e.prototype.unsubscribe=function(){"closed"!==this._state&&(_d(this),GS(this))},wd(e,[{key:"closed",get:function(){return"closed"===this._state}}]),e}(),JA=function(){function e(n){this._subscription=n}var t=e.prototype;return t.next=function(r){Id(this._subscription,"next",r)},t.error=function(r){Id(this._subscription,"error",r)},t.complete=function(){Id(this._subscription,"complete")},wd(e,[{key:"closed",get:function(){return"closed"===this._subscription._state}}]),e}(),le=function(){function e(n){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if("function"!=typeof n)throw new TypeError("Observable initializer must be a function");this._subscriber=n}var t=e.prototype;return t.subscribe=function(r){return("object"!=typeof r||null===r)&&(r={next:r,error:arguments[1],complete:arguments[2]}),new YA(r,this._subscriber)},t.forEach=function(r){var o=this;return new Promise(function(i,s){if("function"==typeof r)var l=o.subscribe({next:function(u){try{r(u,a)}catch(d){s(d),l.unsubscribe()}},error:s,complete:i});else s(new TypeError(r+" is not a function"));function a(){l.unsubscribe(),i()}})},t.map=function(r){var o=this;if("function"!=typeof r)throw new TypeError(r+" is not a function");return new(wi(this))(function(s){return o.subscribe({next:function(a){try{a=r(a)}catch(l){return s.error(l)}s.next(a)},error:function(a){s.error(a)},complete:function(){s.complete()}})})},t.filter=function(r){var o=this;if("function"!=typeof r)throw new TypeError(r+" is not a function");return new(wi(this))(function(s){return o.subscribe({next:function(a){try{if(!r(a))return}catch(l){return s.error(l)}s.next(a)},error:function(a){s.error(a)},complete:function(){s.complete()}})})},t.reduce=function(r){var o=this;if("function"!=typeof r)throw new TypeError(r+" is not a function");var i=wi(this),s=arguments.length>1,a=!1,u=arguments[1];return new i(function(d){return o.subscribe({next:function(h){var f=!a;if(a=!0,!f||s)try{u=r(u,h)}catch(p){return d.error(p)}else u=h},error:function(h){d.error(h)},complete:function(){if(!a&&!s)return d.error(new TypeError("Cannot reduce an empty sequence"));d.next(u),d.complete()}})})},t.concat=function(){for(var r=this,o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];var a=wi(this);return new a(function(l){var u,d=0;return function h(f){u=f.subscribe({next:function(p){l.next(p)},error:function(p){l.error(p)},complete:function(){d===i.length?(u=void 0,l.complete()):h(a.from(i[d++]))}})}(r),function(){u&&(u.unsubscribe(),u=void 0)}})},t.flatMap=function(r){var o=this;if("function"!=typeof r)throw new TypeError(r+" is not a function");var i=wi(this);return new i(function(s){var a=[],l=o.subscribe({next:function(d){if(r)try{d=r(d)}catch(f){return s.error(f)}var h=i.from(d).subscribe({next:function(f){s.next(f)},error:function(f){s.error(f)},complete:function(){var f=a.indexOf(h);f>=0&&a.splice(f,1),u()}});a.push(h)},error:function(d){s.error(d)},complete:function(){u()}});function u(){l.closed&&0===a.length&&s.complete()}return function(){a.forEach(function(d){return d.unsubscribe()}),l.unsubscribe()}})},t[Cd]=function(){return this},e.from=function(r){var o="function"==typeof this?this:e;if(null==r)throw new TypeError(r+" is not an object");var i=Ma(r,Cd);if(i){var s=i.call(r);if(Object(s)!==s)throw new TypeError(s+" is not an object");return function QA(e){return e instanceof le}(s)&&s.constructor===o?s:new o(function(a){return s.subscribe(a)})}if(Td("iterator")&&(i=Ma(r,GA)))return new o(function(a){ka(function(){if(!a.closed){for(var u,l=function zA(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function WA(e,t){if(e){if("string"==typeof e)return qS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qS(e,t)}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(i.call(r));!(u=l()).done;)if(a.next(u.value),a.closed)return;a.complete()}})});if(Array.isArray(r))return new o(function(a){ka(function(){if(!a.closed){for(var l=0;l<r.length;++l)if(a.next(r[l]),a.closed)return;a.complete()}})});throw new TypeError(r+" is not observable")},e.of=function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return new("function"==typeof this?this:e)(function(a){ka(function(){if(!a.closed){for(var l=0;l<o.length;++l)if(a.next(o[l]),a.closed)return;a.complete()}})})},wd(e,null,[{key:WS,get:function(){return this}}]),e}();function be(e){return null!==e&&"object"==typeof e}function Ra(e,t){if(!Boolean(e))throw new Error(t)}Pd()&&Object.defineProperty(le,Symbol("extensions"),{value:{symbol:Cd,hostReportError:so},configurable:!0});const ZA=10,KS=2;function Md(e){return Oa(e,[])}function Oa(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return function eN(e,t){if(null===e)return"null";if(t.includes(e))return"[Circular]";const n=[...t,e];if(function tN(e){return"function"==typeof e.toJSON}(e)){const r=e.toJSON();if(r!==e)return"string"==typeof r?r:Oa(r,n)}else if(Array.isArray(e))return function rN(e,t){if(0===e.length)return"[]";if(t.length>KS)return"[Array]";const n=Math.min(ZA,e.length),r=e.length-n,o=[];for(let i=0;i<n;++i)o.push(Oa(e[i],t));return 1===r?o.push("... 1 more item"):r>1&&o.push(`... ${r} more items`),"["+o.join(", ")+"]"}(e,n);return function nN(e,t){const n=Object.entries(e);return 0===n.length?"{}":t.length>KS?"["+function oN(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if("Object"===t&&"function"==typeof e.constructor){const n=e.constructor.name;if("string"==typeof n&&""!==n)return n}return t}(e)+"]":"{ "+n.map(([o,i])=>o+": "+Oa(i,t)).join(", ")+" }"}(e,n)}(e,t);default:return String(e)}}class iN{constructor(t,n,r){this.start=t.start,this.end=n.end,this.startToken=t,this.endToken=n,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class YS{constructor(t,n,r,o,i,s){this.kind=t,this.start=n,this.end=r,this.line=o,this.column=i,this.value=s,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const JS={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},sN=new Set(Object.keys(JS));function XS(e){const t=e?.kind;return"string"==typeof t&&sN.has(t)}var lr=(()=>(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"}(lr||(lr={})),lr))(),I=(()=>(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"}(I||(I={})),I))();const Nn=Object.freeze({});function jt(e,t,n=JS){const r=new Map;for(const v of Object.values(I))r.set(v,kd(t,v));let o,d,h,i=Array.isArray(e),s=[e],a=-1,l=[],u=e;const f=[],p=[];do{a++;const v=a===s.length,D=v&&0!==l.length;if(v){if(d=0===p.length?void 0:f[f.length-1],u=h,h=p.pop(),D)if(i){u=u.slice();let P=0;for(const[E,_]of l){const q=E-P;null===_?(u.splice(q,1),P++):u[q]=_}}else{u=Object.defineProperties({},Object.getOwnPropertyDescriptors(u));for(const[P,E]of l)u[P]=E}a=o.index,s=o.keys,l=o.edits,i=o.inArray,o=o.prev}else if(h){if(d=i?a:s[a],u=h[d],null==u)continue;f.push(d)}let S;if(!Array.isArray(u)){var y,g;if(XS(u)||Ra(!1,`Invalid AST Node: ${Md(u)}.`),S=(v?null===(y=r.get(u.kind))||void 0===y?void 0:y.leave:null===(g=r.get(u.kind))||void 0===g?void 0:g.enter)?.call(t,u,d,h,f,p),S===Nn)break;if(!1===S){if(!v){f.pop();continue}}else if(void 0!==S&&(l.push([d,S]),!v)){if(!XS(S)){f.pop();continue}u=S}}var b;void 0===S&&D&&l.push([d,u]),v?f.pop():(o={inArray:i,index:a,keys:s,edits:l,prev:o},i=Array.isArray(u),s=i?u:null!==(b=n[u.kind])&&void 0!==b?b:[],a=-1,l=[],h&&p.push(h),h=u)}while(void 0!==o);return 0!==l.length?l[l.length-1][1]:e}function kd(e,t){const n=e[t];return"object"==typeof n?n:"function"==typeof n?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function aN(e,t){var n=t,r=[];return e.definitions.forEach(function(i){if("OperationDefinition"===i.kind)throw it(85,i.operation,i.name?" named '".concat(i.name.value,"'"):"");"FragmentDefinition"===i.kind&&r.push(i)}),typeof n>"u"&&(A(1===r.length,86,r.length),n=r[0].name.value),w(w({},e),{definitions:Ue([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:n}}]}}],e.definitions,!0)})}function ao(e){void 0===e&&(e=[]);var t={};return e.forEach(function(n){t[n.name.value]=n}),t}function Aa(e,t){switch(e.kind){case"InlineFragment":return e;case"FragmentSpread":var n=e.name.value;if("function"==typeof t)return t(n);var r=t&&t[n];return A(r,87,n),r||null;default:return null}}function Rd(){}const lN=Rd,uN=typeof WeakRef<"u"?WeakRef:function(e){return{deref:()=>e}},dN=typeof WeakMap<"u"?WeakMap:Map,hN=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:Rd,unregister:Rd}};class Na{constructor(t=1/0,n=lN){this.max=t,this.dispose=n,this.map=new dN,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{const r=this.unfinalizedNodes.values();for(let o=0;o<10024;o++){const i=r.next().value;if(!i)break;this.unfinalizedNodes.delete(i);const s=i.key;delete i.key,i.keyRef=new uN(s),this.registry.register(s,i,i)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new hN(this.deleteNode.bind(this))}has(t){return this.map.has(t)}get(t){const n=this.getNode(t);return n&&n.value}getNode(t){const n=this.map.get(t);if(n&&n!==this.newest){const{older:r,newer:o}=n;o&&(o.older=r),r&&(r.newer=o),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=o)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.scheduleFinalization(r),this.map.set(t,r),this.size++,r.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(t){t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.size--;const n=t.key||t.keyRef&&t.keyRef.deref();this.dispose(t.value,n),t.keyRef?this.registry.unregister(t):this.unfinalizedNodes.delete(t),n&&this.map.delete(n)}delete(t){const n=this.map.get(t);return!!n&&(this.deleteNode(n),!0)}scheduleFinalization(t){this.unfinalizedNodes.add(t),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}}function pN(){}class Od{constructor(t=1/0,n=pN){this.max=t,this.dispose=n,this.map=new Map,this.newest=null,this.oldest=null}has(t){return this.map.has(t)}get(t){const n=this.getNode(t);return n&&n.value}get size(){return this.map.size}getNode(t){const n=this.map.get(t);if(n&&n!==this.newest){const{older:r,newer:o}=n;o&&(o.older=r),r&&(r.newer=o),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=o)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(t,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(t){const n=this.map.get(t);return!!n&&(n===this.newest&&(this.newest=n.older),n===this.oldest&&(this.oldest=n.newer),n.newer&&(n.newer.older=n.older),n.older&&(n.older.newer=n.newer),this.map.delete(t),this.dispose(n.value,t),!0)}}var Ad=new WeakSet;function ZS(e){e.size<=(e.max||-1)||Ad.has(e)||(Ad.add(e),setTimeout(function(){e.clean(),Ad.delete(e)},100))}var eb=function(e,t){var n=new Na(e,t);return n.set=function(r,o){var i=Na.prototype.set.call(this,r,o);return ZS(this),i},n},yN=function(e,t){var n=new Od(e,t);return n.set=function(r,o){var i=Od.prototype.set.call(this,r,o);return ZS(this),i},n},mN=Symbol.for("apollo.cacheSize"),wn=w({},vd[mN]),ur={};function tb(e,t){ur[e]=t}var gN=!1!==globalThis.__DEV__?function DN(){var e,t,n,r,o;if(!1===globalThis.__DEV__)throw new Error("only supported in development mode");return{limits:Object.fromEntries(Object.entries({parser:1e3,canonicalStringify:1e3,print:2e3,"documentTransform.cache":2e3,"queryManager.getDocumentInfo":2e3,"PersistedQueryLink.persistedQueryHashes":2e3,"fragmentRegistry.transform":2e3,"fragmentRegistry.lookup":1e3,"fragmentRegistry.findFragmentSpreads":4e3,"cache.fragmentQueryDocuments":1e3,"removeTypenameFromVariables.getVariableDefinitions":2e3,"inMemoryCache.maybeBroadcastWatch":5e3,"inMemoryCache.executeSelectionSet":5e4,"inMemoryCache.executeSubSelectedArray":1e4}).map(function(t){var n=t[0];return[n,wn[n]||t[1]]})),sizes:w({print:null===(e=ur.print)||void 0===e?void 0:e.call(ur),parser:null===(t=ur.parser)||void 0===t?void 0:t.call(ur),canonicalStringify:null===(n=ur.canonicalStringify)||void 0===n?void 0:n.call(ur),links:xd(this.link),queryManager:{getDocumentInfo:this.queryManager.transformCache.size,documentTransforms:ob(this.queryManager.documentTransform)}},null===(o=(r=this.cache).getMemoryInternals)||void 0===o?void 0:o.call(r))}}:void 0,vN=!1!==globalThis.__DEV__?function wN(){var e=this.config.fragments;return w(w({},nb.apply(this)),{addTypenameDocumentTransform:ob(this.addTypenameTransform),inMemoryCache:{executeSelectionSet:xn(this.storeReader.executeSelectionSet),executeSubSelectedArray:xn(this.storeReader.executeSubSelectedArray),maybeBroadcastWatch:xn(this.maybeBroadcastWatch)},fragmentRegistry:{findFragmentSpreads:xn(e?.findFragmentSpreads),lookup:xn(e?.lookup),transform:xn(e?.transform)}})}:void 0,SN=!1!==globalThis.__DEV__?nb:void 0;function nb(){return{cache:{fragmentQueryDocuments:xn(this.getFragmentDoc)}}}function xn(e){return function PN(e){return!!e&&"dirtyKey"in e}(e)?e.size:void 0}function rb(e){return null!=e}function ob(e){return Nd(e).map(function(t){return{cache:t}})}function Nd(e){return e?Ue(Ue([xn(e?.performWork)],Nd(e?.left),!0),Nd(e?.right),!0).filter(rb):[]}function xd(e){var t;return e?Ue(Ue([null===(t=e?.getMemoryInternals)||void 0===t?void 0:t.call(e)],xd(e?.left),!0),xd(e?.right),!0).filter(rb):[]}var co,Fn=Object.assign(function(t){return JSON.stringify(t,TN)},{reset:function(){co=new yN(wn.canonicalStringify||1e3)}});function TN(e,t){if(t&&"object"==typeof t){var n=Object.getPrototypeOf(t);if(n===Object.prototype||null===n){var r=Object.keys(t);if(r.every(EN))return t;var o=JSON.stringify(r),i=co.get(o);if(!i){r.sort();var s=JSON.stringify(r);i=co.get(s)||r,co.set(o,i),co.set(s,i)}var a=Object.create(n);return i.forEach(function(l){a[l]=t[l]}),a}}return t}function EN(e,t,n){return 0===t||n[t-1]<=e}function lo(e){return{__ref:String(e)}}function oe(e){return Boolean(e&&"object"==typeof e&&"string"==typeof e.__ref)}function uo(e,t,n,r){if(function MN(e){return"IntValue"===e.kind}(n)||function kN(e){return"FloatValue"===e.kind}(n))e[t.value]=Number(n.value);else if(function IN(e){return"BooleanValue"===e.kind}(n)||function _N(e){return"StringValue"===e.kind}(n))e[t.value]=n.value;else if(function ON(e){return"ObjectValue"===e.kind}(n)){var o={};n.fields.map(function(s){return uo(o,s.name,s.value,r)}),e[t.value]=o}else if(function RN(e){return"Variable"===e.kind}(n))e[t.value]=(r||{})[n.name.value];else if(function AN(e){return"ListValue"===e.kind}(n))e[t.value]=n.values.map(function(s){var a={};return uo(a,t,s,r),a[t.value]});else if(function NN(e){return"EnumValue"===e.kind}(n))e[t.value]=n.value;else{if(!function xN(e){return"NullValue"===e.kind}(n))throw it(96,t.value,n.kind);e[t.value]=null}}!1!==globalThis.__DEV__&&tb("canonicalStringify",function(){return co.size}),Fn.reset();var HN=["connection","include","skip","client","rest","export","nonreactive"],Pi=Fn,ib=Object.assign(function(e,t,n){if(t&&n&&n.connection&&n.connection.key){if(n.connection.filter&&n.connection.filter.length>0){var r=n.connection.filter?n.connection.filter:[];r.sort();var o={};return r.forEach(function(a){o[a]=t[a]}),"".concat(n.connection.key,"(").concat(Pi(o),")")}return n.connection.key}var i=e;if(t){var s=Pi(t);i+="(".concat(s,")")}return n&&Object.keys(n).forEach(function(a){-1===HN.indexOf(a)&&(n[a]&&Object.keys(n[a]).length?i+="@".concat(a,"(").concat(Pi(n[a]),")"):i+="@".concat(a))}),i},{setStringify:function(e){var t=Pi;return Pi=e,t}});function xa(e,t){if(e.arguments&&e.arguments.length){var n={};return e.arguments.forEach(function(r){return uo(n,r.name,r.value,t)}),n}return null}function Pn(e){return e.alias?e.alias.value:e.name.value}function Fd(e,t,n){for(var r,o=0,i=t.selections;o<i.length;o++)if(Hn(s=i[o])){if("__typename"===s.name.value)return e[Pn(s)]}else r?r.push(s):r=[s];if("string"==typeof e.__typename)return e.__typename;if(r)for(var a=0,l=r;a<l.length;a++){var s,u=Fd(e,Aa(s=l[a],n).selectionSet,n);if("string"==typeof u)return u}}function Hn(e){return"Field"===e.kind}function ho(e){A(e&&"Document"===e.kind,88);var t=e.definitions.filter(function(n){return"FragmentDefinition"!==n.kind}).map(function(n){if("OperationDefinition"!==n.kind)throw it(89,n.kind);return n});return A(t.length<=1,90,t.length),e}function dr(e){return ho(e),e.definitions.filter(function(t){return"OperationDefinition"===t.kind})[0]}function Ti(e){return e.definitions.filter(function(t){return"OperationDefinition"===t.kind&&!!t.name}).map(function(t){return t.name.value})[0]||null}function fo(e){return e.definitions.filter(function(t){return"FragmentDefinition"===t.kind})}function sb(e){var t=dr(e);return A(t&&"query"===t.operation,91),t}function ab(e){A("Document"===e.kind,92),A(e.definitions.length<=1,93);var t=e.definitions[0];return A("FragmentDefinition"===t.kind,94),t}function Ei(e){ho(e);for(var t,n=0,r=e.definitions;n<r.length;n++){var o=r[n];if("OperationDefinition"===o.kind){var i=o.operation;if("query"===i||"mutation"===i||"subscription"===i)return o}"FragmentDefinition"===o.kind&&!t&&(t=o)}if(t)return t;throw it(95)}function Hd(e){var t=Object.create(null),n=e&&e.variableDefinitions;return n&&n.length&&n.forEach(function(r){r.defaultValue&&uo(t,r.variable.name,r.defaultValue)}),t}function cb(e,t){return t?t(e):le.of()}function Ci(e){return"function"==typeof e?new po(e):e}function Fa(e){return e.request.length<=1}var po=function(){function e(t){t&&(this.request=t)}return e.empty=function(){return new e(function(){return le.of()})},e.from=function(t){return 0===t.length?e.empty():t.map(Ci).reduce(function(n,r){return n.concat(r)})},e.split=function(t,n,r){var s,o=Ci(n),i=Ci(r||new e(cb));return s=Fa(o)&&Fa(i)?new e(function(a){return t(a)?o.request(a)||le.of():i.request(a)||le.of()}):new e(function(a,l){return t(a)?o.request(a,l)||le.of():i.request(a,l)||le.of()}),Object.assign(s,{left:o,right:i})},e.execute=function(t,n){return t.request(function XA(e,t){var n=w({},e);return Object.defineProperty(t,"setContext",{enumerable:!1,value:function(i){n=w(w({},n),"function"==typeof i?i(n):i)}}),Object.defineProperty(t,"getContext",{enumerable:!1,value:function(){return w({},n)}}),t}(n.context,function UN(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName="string"!=typeof t.query?Ti(t.query)||void 0:""),t}(function BN(e){for(var t=["query","operationName","variables","extensions","context"],n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];if(t.indexOf(o)<0)throw it(46,o)}return e}(n))))||le.of()},e.concat=function(t,n){var r=Ci(t);if(Fa(r))return!1!==globalThis.__DEV__&&A.warn(38,r),r;var i,o=Ci(n);return i=Fa(o)?new e(function(s){return r.request(s,function(a){return o.request(a)||le.of()})||le.of()}):new e(function(s,a){return r.request(s,function(l){return o.request(l,a)||le.of()})||le.of()}),Object.assign(i,{left:r,right:o})},e.prototype.split=function(t,n,r){return this.concat(e.split(t,n,r||new e(cb)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(t,n){throw it(39)},e.prototype.onError=function(t,n){if(n&&n.error)return n.error(t),!1;throw t},e.prototype.setOnError=function(t){return this.onError=t,this},e}(),Ld=po.execute;function _i(e,t){var n=e.directives;return!n||!n.length||function $N(e){var t=[];return e&&e.length&&e.forEach(function(n){if(function VN(e){var t=e.name.value;return"skip"===t||"include"===t}(n)){var r=n.arguments,o=n.name.value;A(r&&1===r.length,79,o);var i=r[0];A(i.name&&"if"===i.name.value,80,o);var s=i.value;A(s&&("Variable"===s.kind||"BooleanValue"===s.kind),81,o),t.push({directive:n,ifArgument:i})}}),t}(n).every(function(r){var o=r.directive,i=r.ifArgument,s=!1;return"Variable"===i.value.kind?A(void 0!==(s=t&&t[i.value.name.value]),78,o.name.value):s=i.value.value,"skip"===o.name.value?!s:s})}function hr(e,t,n){var r=new Set(e),o=r.size;return jt(t,{Directive:function(i){if(r.delete(i.name.value)&&(!n||!r.size))return Nn}}),n?!r.size:r.size<o}function jN(e){return e&&hr(["client","export"],e,!0)}function qN(e){var t,n,r=null===(t=e.directives)||void 0===t?void 0:t.find(function(i){return"unmask"===i.name.value});if(!r)return"mask";var o=null===(n=r.arguments)||void 0===n?void 0:n.find(function(i){return"mode"===i.name.value});return!1!==globalThis.__DEV__&&o&&(o.value.kind===I.VARIABLE?!1!==globalThis.__DEV__&&A.warn(82):o.value.kind!==I.STRING?!1!==globalThis.__DEV__&&A.warn(83):"migrate"!==o.value.value&&!1!==globalThis.__DEV__&&A.warn(84,o.value.value)),o&&"value"in o.value&&"migrate"===o.value.value?"migrate":"unmask"}var Ud=function(e,t){var n;try{n=JSON.stringify(e)}catch(o){var r=it(42,t,o.message);throw r.parseError=o,r}return n},lb="ReactNative"==Bt(function(){return navigator.product}),fr="function"==typeof WeakMap&&!(lb&&!global.HermesInternal),Bd="function"==typeof WeakSet,ub="function"==typeof Symbol&&"function"==typeof Symbol.for,Ha=ub&&Symbol.asyncIterator;function db(e){var t={next:function(){return e.read()}};return Ha&&(t[Symbol.asyncIterator]=function(){return this}),t}function rx(e){var t=e;if(function JN(e){return!!e.body}(e)&&(t=e.body),function ZN(e){return!(!Ha||!e[Symbol.asyncIterator])}(t))return function QN(e){var t,n=e[Symbol.asyncIterator]();return(t={next:function(){return n.next()}})[Symbol.asyncIterator]=function(){return this},t}(t);if(function XN(e){return!!e.getReader}(t))return db(t.getReader());if(function ex(e){return!!e.stream}(t))return db(t.stream().getReader());if(function tx(e){return!!e.arrayBuffer}(t))return function YN(e){var t=!1,n={next:function(){return t?Promise.resolve({value:void 0,done:!0}):(t=!0,new Promise(function(r,o){e.then(function(i){r({value:i,done:!1})}).catch(o)}))}};return Ha&&(n[Symbol.asyncIterator]=function(){return this}),n}(t.arrayBuffer());if(function nx(e){return!!e.pipe}(t))return function KN(e){var t=null,n=null,r=!1,o=[],i=[];function s(h){if(!n){if(i.length){var f=i.shift();if(Array.isArray(f)&&f[0])return f[0]({value:h,done:!1})}o.push(h)}}function a(h){n=h,i.slice().forEach(function(p){p[1](h)}),!t||t()}function l(){r=!0,i.slice().forEach(function(f){f[0]({value:void 0,done:!0})}),!t||t()}t=function(){t=null,e.removeListener("data",s),e.removeListener("error",a),e.removeListener("end",l),e.removeListener("finish",l),e.removeListener("close",l)},e.on("data",s),e.on("error",a),e.on("end",l),e.on("finish",l),e.on("close",l);var d={next:function(){return function u(){return new Promise(function(h,f){return n?f(n):o.length?h({value:o.shift(),done:!1}):r?h({value:void 0,done:!0}):void i.push([h,f])})}()}};return Ha&&(d[Symbol.asyncIterator]=function(){return this}),d}(t);throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")}Bt(function(){return window.document.createElement}),Bt(function(){return navigator.userAgent.indexOf("jsdom")>=0});var hb=function(e,t,n){var r=new Error(n);throw r.name="ServerError",r.response=e,r.statusCode=e.status,r.result=t,r},jd=Symbol();function fb(e){return e.hasOwnProperty("graphQLErrors")}var ix=function(e){var t=Ue(Ue(Ue([],e.graphQLErrors,!0),e.clientErrors,!0),e.protocolErrors,!0);return e.networkError&&t.push(e.networkError),t.map(function(n){return be(n)&&n.message||"Error message not found."}).join("\n")},pr=function(e){function t(n){var r=n.graphQLErrors,o=n.protocolErrors,i=n.clientErrors,s=n.networkError,a=n.errorMessage,l=n.extraInfo,u=e.call(this,a)||this;return u.name="ApolloError",u.graphQLErrors=r||[],u.protocolErrors=o||[],u.clientErrors=i||[],u.networkError=s||null,u.message=a||ix(u),u.extraInfo=l,u.cause=Ue(Ue(Ue([s],r||[],!0),o||[],!0),i||[],!0).find(function(d){return!!d})||null,u.__proto__=t.prototype,u}return kt(t,e),t}(Error),De=Array.isArray;function rn(e){return Array.isArray(e)&&e.length>0}var sx=Object.prototype.hasOwnProperty;function pb(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return La(e)}function La(e){var t=e[0]||{},n=e.length;if(n>1)for(var r=new Ln,o=1;o<n;++o)t=r.merge(t,e[o]);return t}var ax=function(e,t,n){return this.merge(e[n],t[n])},Ln=function(){function e(t){void 0===t&&(t=ax),this.reconciler=t,this.isObject=be,this.pastCopies=new Set}return e.prototype.merge=function(t,n){for(var r=this,o=[],i=2;i<arguments.length;i++)o[i-2]=arguments[i];return be(n)&&be(t)?(Object.keys(n).forEach(function(s){if(sx.call(t,s)){var a=t[s];if(n[s]!==a){var l=r.reconciler.apply(r,Ue([t,n,s],o,!1));l!==a&&((t=r.shallowCopyForMerge(t))[s]=l)}}else(t=r.shallowCopyForMerge(t))[s]=n[s]}),t):n},e.prototype.shallowCopyForMerge=function(t){return be(t)&&(this.pastCopies.has(t)||(t=Array.isArray(t)?t.slice(0):w({__proto__:Object.getPrototypeOf(t)},t),this.pastCopies.add(t))),t},e}();function yo(e){return"incremental"in e}function ux(e){return be(e)&&"payload"in e}function yb(e,t){var n=e,r=new Ln;return yo(t)&&rn(t.incremental)&&t.incremental.forEach(function(o){for(var i=o.data,s=o.path,a=s.length-1;a>=0;--a){var l=s[a],d=isNaN(+l)?{}:[];d[l]=i,i=d}n=r.merge(n,i)}),n}var mb=Object.prototype.hasOwnProperty;function hx(e){var t={};return e.split("\n").forEach(function(n){var r=n.indexOf(":");if(r>-1){var o=n.slice(0,r).trim().toLowerCase(),i=n.slice(r+1).trim();t[o]=i}}),t}function gb(e,t){e.status>=300&&hb(e,function(){try{return JSON.parse(t)}catch{return t}}(),"Response not successful: Received status code ".concat(e.status));try{return JSON.parse(t)}catch(o){var r=o;throw r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,r}}function Vd(e){return 9===e||32===e}function Ii(e){return e>=48&&e<=57}function vb(e){return e>=97&&e<=122||e>=65&&e<=90}function Sb(e){return vb(e)||95===e}function mx(e){return vb(e)||Ii(e)||95===e}function gx(e){var t;let n=Number.MAX_SAFE_INTEGER,r=null,o=-1;for(let s=0;s<e.length;++s){var i;const a=e[s],l=vx(a);l!==a.length&&(r=null!==(i=r)&&void 0!==i?i:s,o=s,0!==s&&l<n&&(n=l))}return e.map((s,a)=>0===a?s:s.slice(n)).slice(null!==(t=r)&&void 0!==t?t:0,o+1)}function vx(e){let t=0;for(;t<e.length&&Vd(e.charCodeAt(t));)++t;return t}const Dx=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function wx(e){return Px[e.charCodeAt(0)]}const Px=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"];function bb(e){return jt(e,Ex)}const Ex={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>R(e.definitions,"\n\n")},OperationDefinition:{leave(e){const t=Y("(",R(e.variableDefinitions,", "),")"),n=R([e.operation,R([e.name,t]),R(e.directives," ")]," ");return("query"===n?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r})=>e+": "+t+Y(" = ",n)+Y(" ",R(r," "))},SelectionSet:{leave:({selections:e})=>Vt(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:o}){const i=Y("",e,": ")+t;let s=i+Y("(",R(n,", "),")");return s.length>80&&(s=i+Y("(\n",Ua(R(n,"\n")),"\n)")),R([s,R(r," "),o]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+Y(" ",R(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>R(["...",Y("on ",e),R(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:o})=>`fragment ${e}${Y("(",R(n,", "),")")} on ${t} ${Y("",R(r," ")," ")}`+o},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?function Sx(e,t){const n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),o=1===r.length,i=r.length>1&&r.slice(1).every(p=>0===p.length||Vd(p.charCodeAt(0))),s=n.endsWith('\\"""'),a=e.endsWith('"')&&!s,l=e.endsWith("\\"),u=a||l,d=!(null!=t&&t.minimize)&&(!o||e.length>70||u||i||s);let h="";const f=o&&Vd(e.charCodeAt(0));return(d&&!f||i)&&(h+="\n"),h+=n,(d||u)&&(h+="\n"),'"""'+h+'"""'}(e):function bx(e){return`"${e.replace(Dx,wx)}"`}(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+R(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+R(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+Y("(",R(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>Y("",e,"\n")+R(["schema",R(t," "),Vt(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>Y("",e,"\n")+R(["scalar",t,R(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:o})=>Y("",e,"\n")+R(["type",t,Y("implements ",R(n," & ")),R(r," "),Vt(o)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:o})=>Y("",e,"\n")+t+(Db(n)?Y("(\n",Ua(R(n,"\n")),"\n)"):Y("(",R(n,", "),")"))+": "+r+Y(" ",R(o," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:o})=>Y("",e,"\n")+R([t+": "+n,Y("= ",r),R(o," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:o})=>Y("",e,"\n")+R(["interface",t,Y("implements ",R(n," & ")),R(r," "),Vt(o)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>Y("",e,"\n")+R(["union",t,R(n," "),Y("= ",R(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>Y("",e,"\n")+R(["enum",t,R(n," "),Vt(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>Y("",e,"\n")+R([t,R(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>Y("",e,"\n")+R(["input",t,R(n," "),Vt(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,repeatable:r,locations:o})=>Y("",e,"\n")+"directive @"+t+(Db(n)?Y("(\n",Ua(R(n,"\n")),"\n)"):Y("(",R(n,", "),")"))+(r?" repeatable":"")+" on "+R(o," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>R(["extend schema",R(e," "),Vt(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>R(["extend scalar",e,R(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>R(["extend type",e,Y("implements ",R(t," & ")),R(n," "),Vt(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>R(["extend interface",e,Y("implements ",R(t," & ")),R(n," "),Vt(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>R(["extend union",e,R(t," "),Y("= ",R(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>R(["extend enum",e,R(t," "),Vt(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>R(["extend input",e,R(t," "),Vt(n)]," ")}};function R(e,t=""){var n;return null!==(n=e?.filter(r=>r).join(t))&&void 0!==n?n:""}function Vt(e){return Y("{\n",Ua(R(e,"\n")),"\n}")}function Y(e,t,n=""){return null!=t&&""!==t?e+t+n:""}function Ua(e){return Y("  ",e.replace(/\n/g,"\n  "))}function Db(e){var t;return null!==(t=e?.some(n=>n.includes("\n")))&&void 0!==t&&t}var Mi,yr=Object.assign(function(e){var t=Mi.get(e);return t||(t=bb(e),Mi.set(e,t)),t},{reset:function(){Mi=new eb(wn.print||2e3)}});yr.reset(),!1!==globalThis.__DEV__&&tb("print",function(){return Mi?Mi.size:0});var Mx={http:{includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},headers:{accept:"*/*","content-type":"application/json"},options:{method:"POST"}},wb=function(e,t){return t(e)};function $d(e){return new le(function(t){t.error(e)})}var Tb={kind:I.FIELD,name:{kind:I.NAME,value:"__typename"}};function Eb(e,t){return!e||e.selectionSet.selections.every(function(n){return n.kind===I.FRAGMENT_SPREAD&&Eb(t[n.name.value],t)})}function qd(e){return Eb(dr(e)||ab(e),ao(fo(e)))?null:e}function _b(e){var t=new Map;return function(r){void 0===r&&(r=e);var o=t.get(r);return o||t.set(r,o={variables:new Set,fragmentSpreads:new Set}),o}}function zd(e,t){ho(t);for(var n=_b(""),r=_b(""),o=function(v){for(var D=0,S=void 0;D<v.length&&(S=v[D]);++D)if(!De(S)){if(S.kind===I.OPERATION_DEFINITION)return n(S.name&&S.name.value);if(S.kind===I.FRAGMENT_DEFINITION)return r(S.name.value)}return!1!==globalThis.__DEV__&&A.error(97),null},i=0,s=t.definitions.length-1;s>=0;--s)t.definitions[s].kind===I.OPERATION_DEFINITION&&++i;var a=function Cb(e){var t=new Map,n=new Map;return e.forEach(function(r){r&&(r.name?t.set(r.name,r):r.test&&n.set(r.test,r))}),function(r){var o=t.get(r.name.value);return!o&&n.size&&n.forEach(function(i,s){s(r)&&(o=i)}),o}}(e),l=function(v){return rn(v)&&v.map(a).some(function(D){return D&&D.remove})},u=new Map,d=!1,h={enter:function(v){if(l(v.directives))return d=!0,null}},f=jt(t,{Field:h,InlineFragment:h,VariableDefinition:{enter:function(){return!1}},Variable:{enter:function(v,D,S,P,E){var _=o(E);_&&_.variables.add(v.name.value)}},FragmentSpread:{enter:function(v,D,S,P,E){if(l(v.directives))return d=!0,null;var _=o(E);_&&_.fragmentSpreads.add(v.name.value)}},FragmentDefinition:{enter:function(v,D,S,P){u.set(JSON.stringify(P),v)},leave:function(v,D,S,P){return v===u.get(JSON.stringify(P))?v:i>0&&v.selectionSet.selections.every(function(_){return _.kind===I.FIELD&&"__typename"===_.name.value})?(r(v.name.value).removed=!0,d=!0,null):void 0}},Directive:{leave:function(v){if(a(v))return d=!0,null}}});if(!d)return t;var p=function(v){return v.transitiveVars||(v.transitiveVars=new Set(v.variables),v.removed||v.fragmentSpreads.forEach(function(D){p(r(D)).transitiveVars.forEach(function(S){v.transitiveVars.add(S)})})),v},y=new Set;f.definitions.forEach(function(v){v.kind===I.OPERATION_DEFINITION?p(n(v.name&&v.name.value)).fragmentSpreads.forEach(function(D){y.add(D)}):v.kind===I.FRAGMENT_DEFINITION&&0===i&&!r(v.name.value).removed&&y.add(v.name.value)}),y.forEach(function(v){p(r(v)).fragmentSpreads.forEach(function(D){y.add(D)})});var b={enter:function(v){if(function(v){return!(y.has(v)&&!r(v).removed)}(v.name.value))return null}};return qd(jt(f,{FragmentSpread:b,FragmentDefinition:b,OperationDefinition:{leave:function(v){if(v.variableDefinitions){var D=p(n(v.name&&v.name.value)).transitiveVars;if(D.size<v.variableDefinitions.length)return w(w({},v),{variableDefinitions:v.variableDefinitions.filter(function(S){return D.has(S.variable.name.value)})})}}}}))}var Wd=Object.assign(function(e){return jt(e,{SelectionSet:{enter:function(t,n,r){if(!r||r.kind!==I.OPERATION_DEFINITION){var o=t.selections;if(o&&!o.some(function(a){return Hn(a)&&("__typename"===a.name.value||0===a.name.value.lastIndexOf("__",0))})){var s=r;if(!(Hn(s)&&s.directives&&s.directives.some(function(a){return"export"===a.name.value})))return w(w({},t),{selections:Ue(Ue([],o,!0),[Tb],!1)})}}}}})},{added:function(e){return e===Tb}});function Hx(e){return"query"===Ei(e).operation?e:jt(e,{OperationDefinition:{enter:function(o){return w(w({},o),{operation:"query"})}}})}function Ib(e){return ho(e),zd([{test:function(n){return"client"===n.name.value},remove:!0}],e)}function Lx(e){return ho(e),jt(e,{FragmentSpread:function(t){var n;if(null===(n=t.directives)||void 0===n||!n.some(function(r){return"unmask"===r.name.value}))return w(w({},t),{directives:Ue(Ue([],t.directives||[],!0),[{kind:I.DIRECTIVE,name:{kind:I.NAME,value:"nonreactive"}}],!1)})}})}var Mb=Bt(function(){return fetch}),Ux=function(e){void 0===e&&(e={});var t=e.uri,n=void 0===t?"/graphql":t,r=e.fetch,o=e.print,i=void 0===o?wb:o,s=e.includeExtensions,a=e.preserveHeaderCase,l=e.useGETForQueries,u=e.includeUnusedVariables,d=void 0!==u&&u,h=qt(e,["uri","fetch","print","includeExtensions","preserveHeaderCase","useGETForQueries","includeUnusedVariables"]);!1!==globalThis.__DEV__&&function(e){if(!e&&typeof fetch>"u")throw it(40)}(r||Mb);var f={http:{includeExtensions:s,preserveHeaderCase:a},options:h.fetchOptions,credentials:h.credentials,headers:h.headers};return new po(function(p){var y=function(e,t){return e.getContext().uri||("function"==typeof t?t(e):t||"/graphql")}(p,n),g=p.getContext(),b={};if(g.clientAwareness){var v=g.clientAwareness,D=v.name,S=v.version;D&&(b["apollographql-client-name"]=D),S&&(b["apollographql-client-version"]=S)}var P=w(w({},b),g.headers),E={http:g.http,options:g.fetchOptions,credentials:g.credentials,headers:P};if(hr(["client"],p.query)){var _=Ib(p.query);if(!_)return $d(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));p.query=_}var pe,q=function Pb(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o={},i={};n.forEach(function(h){o=w(w(w({},o),h.options),{headers:w(w({},o.headers),h.headers)}),h.credentials&&(o.credentials=h.credentials),i=w(w({},i),h.http)}),o.headers&&(o.headers=function kx(e,t){if(!t){var n={};return Object.keys(Object(e)).forEach(function(i){n[i.toLowerCase()]=e[i]}),n}var r={};Object.keys(Object(e)).forEach(function(i){r[i.toLowerCase()]={originalName:i,value:e[i]}});var o={};return Object.keys(r).forEach(function(i){o[r[i].originalName]=r[i].value}),o}(o.headers,i.preserveHeaderCase));var u=e.query,d={operationName:e.operationName,variables:e.variables};return i.includeExtensions&&(d.extensions=e.extensions),i.includeQuery&&(d.query=t(u,yr)),{options:o,body:d}}(p,i,Mx,f,E),Q=q.options,ie=q.body;ie.variables&&!d&&(ie.variables=function Ox(e,t){var n=w({},e),r=new Set(Object.keys(e));return jt(t,{Variable:function(o,i,s){s&&"VariableDefinition"!==s.kind&&r.delete(o.name.value)}}),r.forEach(function(o){delete n[o]}),n}(ie.variables,p.query)),!Q.signal&&typeof AbortController<"u"&&(pe=new AbortController,Q.signal=pe.signal);var It,We="OperationDefinition"===(It=Ei(p.query)).kind&&"subscription"===It.operation,qn=hr(["defer"],p.query);if(l&&!p.query.definitions.some(function(It){return"OperationDefinition"===It.kind&&"mutation"===It.operation})&&(Q.method="GET"),qn||We){Q.headers=Q.headers||{};var Fh="multipart/mixed;";We&&qn&&!1!==globalThis.__DEV__&&A.warn(41),We?Fh+="boundary=graphql;subscriptionSpec=1.0,application/json":qn&&(Fh+="deferSpec=20220824,application/json"),Q.headers.accept=Fh}if("GET"===Q.method){var N0=function Rx(e,t){var n=[],r=function(h,f){n.push("".concat(h,"=").concat(encodeURIComponent(f)))};if("query"in t&&r("query",t.query),t.operationName&&r("operationName",t.operationName),t.variables){var o=void 0;try{o=Ud(t.variables,"Variables map")}catch(h){return{parseError:h}}r("variables",o)}if(t.extensions){var i=void 0;try{i=Ud(t.extensions,"Extensions map")}catch(h){return{parseError:h}}r("extensions",i)}var s="",a=e,l=e.indexOf("#");-1!==l&&(s=e.substr(l),a=e.substr(0,l));var u=-1===a.indexOf("?")?"?":"&";return{newURI:a+u+n.join("&")+s}}(y,ie),kL=N0.newURI,x0=N0.parseError;if(x0)return $d(x0);y=kL}else try{Q.body=Ud(ie,"Payload")}catch(It){return $d(It)}return new le(function(It){var RL=r||Bt(function(){return fetch})||Mb,F0=It.next.bind(It);return RL(y,Q).then(function(_o){var Hh;p.setContext({response:_o});var H0=null===(Hh=_o.headers)||void 0===Hh?void 0:Hh.get("content-type");return null!==H0&&/^multipart\/mixed/i.test(H0)?function dx(e,t){return zt(this,void 0,void 0,function(){var n,r,o,i,s,a,l,u,d,h,f,p,y,g,b,v,D,S,P,E,_,q,Q,ie;return sn(this,function(pe){switch(pe.label){case 0:if(void 0===TextDecoder)throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");n=new TextDecoder("utf-8"),r=null===(ie=e.headers)||void 0===ie?void 0:ie.get("content-type"),i=r?.includes(o="boundary=")?r?.substring(r?.indexOf(o)+o.length).replace(/['"]/g,"").replace(/\;(.*)/gm,"").trim():"-",s="\r\n--".concat(i),a="",l=rx(e),u=!0,pe.label=1;case 1:return u?[4,l.next()]:[3,3];case 2:for(d=pe.sent(),f=d.done,p="string"==typeof(h=d.value)?h:n.decode(h),y=a.length-s.length+1,u=!f,g=(a+=p).indexOf(s,y);g>-1;){if(b=void 0,q=[a.slice(0,g),a.slice(g+s.length)],a=q[1],v=(b=q[0]).indexOf("\r\n\r\n"),D=hx(b.slice(0,v)),(S=D["content-type"])&&-1===S.toLowerCase().indexOf("application/json"))throw new Error("Unsupported patch content type: application/json is required.");if(P=b.slice(v))if(E=gb(e,P),Object.keys(E).length>1||"data"in E||"incremental"in E||"errors"in E||"payload"in E)if(ux(E)){if(_={},"payload"in E){if(1===Object.keys(E).length&&null===E.payload)return[2];_=w({},E.payload)}"errors"in E&&(_=w(w({},_),{extensions:w(w({},"extensions"in _?_.extensions:null),(Q={},Q[jd]=E.errors,Q))})),t(_)}else t(E);else if(1===Object.keys(E).length&&"hasNext"in E&&!E.hasNext)return[2];g=a.indexOf(s)}return[3,1];case 3:return[2]}})})}(_o,F0):function px(e){return function(t){return t.text().then(function(n){return gb(t,n)}).then(function(n){return!Array.isArray(n)&&!mb.call(n,"data")&&!mb.call(n,"errors")&&hb(t,n,"Server response was missing for query '".concat(Array.isArray(e)?e.map(function(r){return r.operationName}):e.operationName,"'.")),n})}}(p)(_o).then(F0)}).then(function(){pe=void 0,It.complete()}).catch(function(_o){pe=void 0,function fx(e,t){e.result&&e.result.errors&&e.result.data&&t.next(e.result),t.error(e)}(_o,It)}),function(){pe&&pe.abort()}})})},Bx=function(e){function t(n){void 0===n&&(n={});var r=e.call(this,Ux(n).request)||this;return r.options=n,r}return kt(t,e),t}(po);const{toString:kb,hasOwnProperty:jx}=Object.prototype,Rb=Function.prototype.toString,Gd=new Map;function fe(e,t){try{return Kd(e,t)}finally{Gd.clear()}}const Qd=fe;function Kd(e,t){if(e===t)return!0;const n=kb.call(e);if(n!==kb.call(t))return!1;switch(n){case"[object Array]":if(e.length!==t.length)return!1;case"[object Object]":{if(Ab(e,t))return!0;const o=Ob(e),i=Ob(t),s=o.length;if(s!==i.length)return!1;for(let a=0;a<s;++a)if(!jx.call(t,o[a]))return!1;for(let a=0;a<s;++a){const l=o[a];if(!Kd(e[l],t[l]))return!1}return!0}case"[object Error]":return e.name===t.name&&e.message===t.message;case"[object Number]":if(e!=e)return t!=t;case"[object Boolean]":case"[object Date]":return+e==+t;case"[object RegExp]":case"[object String]":return e==`${t}`;case"[object Map]":case"[object Set]":{if(e.size!==t.size)return!1;if(Ab(e,t))return!0;const o=e.entries(),i="[object Map]"===n;for(;;){const s=o.next();if(s.done)break;const[a,l]=s.value;if(!t.has(a)||i&&!Kd(l,t.get(a)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":e=new Uint8Array(e),t=new Uint8Array(t);case"[object DataView]":{let o=e.byteLength;if(o===t.byteLength)for(;o--&&e[o]===t[o];);return-1===o}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{const o=Rb.call(e);return o===Rb.call(t)&&!function qx(e,t){const n=e.length-t.length;return n>=0&&e.indexOf(t,n)===n}(o,$x)}}return!1}function Ob(e){return Object.keys(e).filter(Vx,e)}function Vx(e){return void 0!==this[e]}const $x="{ [native code] }";function Ab(e,t){let n=Gd.get(e);if(n){if(n.has(t))return!0}else Gd.set(e,n=new Set);return n.add(t),!1}const zx=()=>Object.create(null),{forEach:Wx,slice:Nb}=Array.prototype,{hasOwnProperty:Gx}=Object.prototype;class Un{constructor(t=!0,n=zx){this.weakness=t,this.makeData=n}lookup(){return this.lookupArray(arguments)}lookupArray(t){let n=this;return Wx.call(t,r=>n=n.getChildTrie(r)),Gx.call(n,"data")?n.data:n.data=this.makeData(Nb.call(t))}peek(){return this.peekArray(arguments)}peekArray(t){let n=this;for(let r=0,o=t.length;n&&r<o;++r){const i=n.mapFor(t[r],!1);n=i&&i.get(t[r])}return n&&n.data}remove(){return this.removeArray(arguments)}removeArray(t){let n;if(t.length){const r=t[0],o=this.mapFor(r,!1),i=o&&o.get(r);i&&(n=i.removeArray(Nb.call(t,1)),!i.data&&!i.weak&&(!i.strong||!i.strong.size)&&o.delete(r))}else n=this.data,delete this.data;return n}getChildTrie(t){const n=this.mapFor(t,!0);let r=n.get(t);return r||n.set(t,r=new Un(this.weakness,this.makeData)),r}mapFor(t,n){return this.weakness&&function Qx(e){switch(typeof e){case"object":if(null===e)break;case"function":return!0}return!1}(t)?this.weak||(n?this.weak=new WeakMap:void 0):this.strong||(n?this.strong=new Map:void 0)}}const Kx=()=>Object.create(null),{forEach:Yx,slice:Jx}=Array.prototype,{hasOwnProperty:Xx}=Object.prototype;class Yd{constructor(t=!0,n=Kx){this.weakness=t,this.makeData=n}lookup(...t){return this.lookupArray(t)}lookupArray(t){let n=this;return Yx.call(t,r=>n=n.getChildTrie(r)),Xx.call(n,"data")?n.data:n.data=this.makeData(Jx.call(t))}peek(...t){return this.peekArray(t)}peekArray(t){let n=this;for(let r=0,o=t.length;n&&r<o;++r){const i=this.weakness&&xb(t[r])?n.weak:n.strong;n=i&&i.get(t[r])}return n&&n.data}getChildTrie(t){const n=this.weakness&&xb(t)?this.weak||(this.weak=new WeakMap):this.strong||(this.strong=new Map);let r=n.get(t);return r||n.set(t,r=new Yd(this.weakness,this.makeData)),r}}function xb(e){switch(typeof e){case"object":if(null===e)break;case"function":return!0}return!1}let qe=null;const Fb={};let Zx=1;function Hb(e){try{return e()}catch{}}const Jd="@wry/context:Slot",Lb=Hb(()=>globalThis)||Hb(()=>global)||Object.create(null),Ba=Lb[Jd]||Array[Jd]||function(e){try{Object.defineProperty(Lb,Jd,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}(class{constructor(){this.id=["slot",Zx++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let t=qe;t;t=t.parent)if(this.id in t.slots){const n=t.slots[this.id];if(n===Fb)break;return t!==qe&&(qe.slots[this.id]=n),!0}return qe&&(qe.slots[this.id]=Fb),!1}getValue(){if(this.hasValue())return qe.slots[this.id]}withValue(t,n,r,o){const s=qe;qe={parent:s,slots:{__proto__:null,[this.id]:t}};try{return n.apply(o,r)}finally{qe=s}}static bind(t){const n=qe;return function(){const r=qe;try{return qe=n,t.apply(this,arguments)}finally{qe=r}}}static noContext(t,n,r){if(!qe)return t.apply(r,n);{const o=qe;try{return qe=null,t.apply(r,n)}finally{qe=o}}}}),ki=new Ba,{hasOwnProperty:rF}=Object.prototype,Zd=Array.from||function(e){const t=[];return e.forEach(n=>t.push(n)),t};function ja(e){const{unsubscribe:t}=e;"function"==typeof t&&(e.unsubscribe=void 0,t())}const Ri=[],oF=100;function mo(e,t){if(!e)throw new Error(t||"assertion failure")}function Bb(e,t){const n=e.length;return n>0&&n===t.length&&e[n-1]===t[n-1]}function jb(e){switch(e.length){case 0:throw new Error("unknown value");case 1:return e[0];case 2:throw e[1]}}function Vb(e){return e.slice(0)}let iF=(()=>{class e{constructor(n){this.fn=n,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++e.count}peek(){if(1===this.value.length&&!Bn(this))return $b(this),this.value[0]}recompute(n){return mo(!this.recomputing,"already recomputing"),$b(this),Bn(this)?function sF(e,t){return Kb(e),ki.withValue(e,aF,[e,t]),function lF(e,t){if("function"==typeof e.subscribe)try{ja(e),e.unsubscribe=e.subscribe.apply(null,t)}catch{return e.setDirty(),!1}return!0}(e,t)&&function cF(e){e.dirty=!1,!Bn(e)&&zb(e)}(e),jb(e.value)}(this,n):jb(this.value)}setDirty(){this.dirty||(this.dirty=!0,qb(this),ja(this))}dispose(){this.setDirty(),Kb(this),eh(this,(n,r)=>{n.setDirty(),Yb(n,this)})}forget(){this.dispose()}dependOn(n){n.add(this),this.deps||(this.deps=Ri.pop()||new Set),this.deps.add(n)}forgetDeps(){this.deps&&(Zd(this.deps).forEach(n=>n.delete(this)),this.deps.clear(),Ri.push(this.deps),this.deps=null)}}return e.count=0,e})();function $b(e){const t=ki.getValue();if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),Bn(e)?Wb(t,e):Gb(t,e),t}function aF(e,t){e.recomputing=!0;const{normalizeResult:n}=e;let r;n&&1===e.value.length&&(r=Vb(e.value)),e.value.length=0;try{if(e.value[0]=e.fn.apply(null,t),n&&r&&!Bb(r,e.value))try{e.value[0]=n(e.value[0],r[0])}catch{}}catch(o){e.value[1]=o}e.recomputing=!1}function Bn(e){return e.dirty||!(!e.dirtyChildren||!e.dirtyChildren.size)}function qb(e){eh(e,Wb)}function zb(e){eh(e,Gb)}function eh(e,t){const n=e.parents.size;if(n){const r=Zd(e.parents);for(let o=0;o<n;++o)t(r[o],e)}}function Wb(e,t){mo(e.childValues.has(t)),mo(Bn(t));const n=!Bn(e);if(e.dirtyChildren){if(e.dirtyChildren.has(t))return}else e.dirtyChildren=Ri.pop()||new Set;e.dirtyChildren.add(t),n&&qb(e)}function Gb(e,t){mo(e.childValues.has(t)),mo(!Bn(t));const n=e.childValues.get(t);0===n.length?e.childValues.set(t,Vb(t.value)):Bb(n,t.value)||e.setDirty(),Qb(e,t),!Bn(e)&&zb(e)}function Qb(e,t){const n=e.dirtyChildren;n&&(n.delete(t),0===n.size&&(Ri.length<oF&&Ri.push(n),e.dirtyChildren=null))}function Kb(e){e.childValues.size>0&&e.childValues.forEach((t,n)=>{Yb(e,n)}),e.forgetDeps(),mo(null===e.dirtyChildren)}function Yb(e,t){t.parents.delete(e),e.childValues.delete(t),Qb(e,t)}const uF={setDirty:!0,dispose:!0,forget:!0};function Jb(e){const t=new Map,n=e&&e.subscribe;function r(o){const i=ki.getValue();if(i){let s=t.get(o);s||t.set(o,s=new Set),i.dependOn(s),"function"==typeof n&&(ja(s),s.unsubscribe=n(o))}}return r.dirty=function(i,s){const a=t.get(i);if(a){const l=s&&rF.call(uF,s)?s:"setDirty";Zd(a).forEach(u=>u[l]()),t.delete(i),ja(a)}},r}let Xb;function dF(...e){return(Xb||(Xb=new Yd("function"==typeof WeakMap))).lookupArray(e)}const th=new Set;function Oi(e,{max:t=Math.pow(2,16),keyArgs:n,makeCacheKey:r=dF,normalizeResult:o,subscribe:i,cache:s=Od}=Object.create(null)){const a="function"==typeof s?new s(t,f=>f.dispose()):s,l=function(){const f=r.apply(null,n?n.apply(null,arguments):arguments);if(void 0===f)return e.apply(null,arguments);let p=a.get(f);p||(a.set(f,p=new iF(e)),p.normalizeResult=o,p.subscribe=i,p.forget=()=>a.delete(f));const y=p.recompute(Array.prototype.slice.call(arguments));return a.set(f,p),th.add(a),ki.hasValue()||(th.forEach(g=>g.clean()),th.clear()),y};function u(f){const p=f&&a.get(f);p&&p.setDirty()}function d(f){const p=f&&a.get(f);if(p)return p.peek()}function h(f){return!!f&&a.delete(f)}return Object.defineProperty(l,"size",{get:()=>a.size,configurable:!1,enumerable:!1}),Object.freeze(l.options={max:t,keyArgs:n,makeCacheKey:r,normalizeResult:o,subscribe:i,cache:a}),l.dirtyKey=u,l.dirty=function(){u(r.apply(null,arguments))},l.peekKey=d,l.peek=function(){return d(r.apply(null,arguments))},l.forgetKey=h,l.forget=function(){return h(r.apply(null,arguments))},l.makeCacheKey=r,l.getKey=n?function(){return r.apply(null,n.apply(null,arguments))}:r,Object.freeze(l)}function hF(e){return e}var Zb=function(){function e(t,n){void 0===n&&(n=Object.create(null)),this.resultCache=Bd?new WeakSet:new Set,this.transform=t,n.getCacheKey&&(this.getCacheKey=n.getCacheKey),this.cached=!1!==n.cache,this.resetCache()}return e.prototype.getCacheKey=function(t){return[t]},e.identity=function(){return new e(hF,{cache:!1})},e.split=function(t,n,r){return void 0===r&&(r=e.identity()),Object.assign(new e(function(o){return(t(o)?n:r).transformDocument(o)},{cache:!1}),{left:n,right:r})},e.prototype.resetCache=function(){var t=this;if(this.cached){var n=new Un(fr);this.performWork=Oi(e.prototype.performWork.bind(this),{makeCacheKey:function(r){var o=t.getCacheKey(r);if(o)return A(Array.isArray(o),77),n.lookupArray(o)},max:wn["documentTransform.cache"],cache:Na})}},e.prototype.performWork=function(t){return ho(t),this.transform(t)},e.prototype.transformDocument=function(t){if(this.resultCache.has(t))return t;var n=this.performWork(t);return this.resultCache.add(n),n},e.prototype.concat=function(t){var n=this;return Object.assign(new e(function(r){return t.transformDocument(n.transformDocument(r))},{cache:!1}),{left:this,right:t})},e}();function nh(e,t,n){return new le(function(r){var o={then:function(l){return new Promise(function(u){return u(l())})}};function i(l,u){return function(d){if(l){var h=function(){return r.closed?0:l(d)};o=o.then(h,h).then(function(f){return r.next(f)},function(f){return r.error(f)})}else r[u](d)}}var s={next:i(t,"next"),error:i(n,"error"),complete:function(){o.then(function(){return r.complete()})}},a=e.subscribe(s);return function(){return a.unsubscribe()}})}function Va(e){return rn(rh(e))}function rh(e){var t=rn(e.errors)?e.errors.slice(0):[];return yo(e)&&rn(e.incremental)&&e.incremental.forEach(function(n){n.errors&&t.push.apply(t,n.errors)}),t}function Ai(e,t,n){var r=[];e.forEach(function(o){return o[t]&&r.push(o)}),r.forEach(function(o){return o[t](n)})}function eD(e){function t(n){Object.defineProperty(e,n,{value:le})}return ub&&Symbol.species&&t(Symbol.species),t("@@species"),e}function tD(e){return e&&"function"==typeof e.then}var go=function(e){function t(n){var r=e.call(this,function(o){return r.addObserver(o),function(){return r.removeObserver(o)}})||this;return r.observers=new Set,r.promise=new Promise(function(o,i){r.resolve=o,r.reject=i}),r.handlers={next:function(o){null!==r.sub&&(r.latest=["next",o],r.notify("next",o),Ai(r.observers,"next",o))},error:function(o){var i=r.sub;null!==i&&(i&&setTimeout(function(){return i.unsubscribe()}),r.sub=null,r.latest=["error",o],r.reject(o),r.notify("error",o),Ai(r.observers,"error",o))},complete:function(){var i=r.sub,s=r.sources;if(null!==i){var l=(void 0===s?[]:s).shift();l?tD(l)?l.then(function(u){return r.sub=u.subscribe(r.handlers)},r.handlers.error):r.sub=l.subscribe(r.handlers):(i&&setTimeout(function(){return i.unsubscribe()}),r.sub=null,r.latest&&"next"===r.latest[0]?r.resolve(r.latest[1]):r.resolve(),r.notify("complete"),Ai(r.observers,"complete"))}}},r.nextResultListeners=new Set,r.cancel=function(o){r.reject(o),r.sources=[],r.handlers.error(o)},r.promise.catch(function(o){}),"function"==typeof n&&(n=[new le(n)]),tD(n)?n.then(function(o){return r.start(o)},r.handlers.error):r.start(n),r}return kt(t,e),t.prototype.start=function(n){void 0===this.sub&&(this.sources=Array.from(n),this.handlers.complete())},t.prototype.deliverLastMessage=function(n){if(this.latest){var r=this.latest[0],o=n[r];o&&o.call(n,this.latest[1]),null===this.sub&&"next"===r&&n.complete&&n.complete()}},t.prototype.addObserver=function(n){this.observers.has(n)||(this.deliverLastMessage(n),this.observers.add(n))},t.prototype.removeObserver=function(n){this.observers.delete(n)&&this.observers.size<1&&this.handlers.complete()},t.prototype.notify=function(n,r){var o=this.nextResultListeners;o.size&&(this.nextResultListeners=new Set,o.forEach(function(i){return i(n,r)}))},t.prototype.beforeNext=function(n){var r=!1;this.nextResultListeners.add(function(o,i){r||(r=!0,n(o,i))})},t}(le);function vo(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Object.create(null);return e.forEach(function(r){r&&Object.keys(r).forEach(function(o){var i=r[o];void 0!==i&&(n[o]=i)})}),n}eD(go);var fF=Object.prototype.toString;function nD(e){return oh(e)}function oh(e,t){switch(fF.call(e)){case"[object Array]":if((t=t||new Map).has(e))return t.get(e);var n=e.slice(0);return t.set(e,n),n.forEach(function(o,i){n[i]=oh(o,t)}),n;case"[object Object]":if((t=t||new Map).has(e))return t.get(e);var r=Object.create(Object.getPrototypeOf(e));return t.set(e,r),Object.keys(e).forEach(function(o){r[o]=oh(e[o],t)}),r;default:return e}}function rD(e,t,n,r){var o=t.data,i=qt(t,["data"]),s=n.data,a=qt(n,["data"]);return Qd(i,a)&&$a(Ei(e).selectionSet,o,s,{fragmentMap:ao(fo(e)),variables:r})}function $a(e,t,n,r){if(t===n)return!0;var o=new Set;return e.selections.every(function(i){if(o.has(i)||(o.add(i),!_i(i,r.variables))||oD(i))return!0;if(Hn(i)){var s=Pn(i),a=t&&t[s],l=n&&n[s],u=i.selectionSet;if(!u)return Qd(a,l);var d=Array.isArray(a),h=Array.isArray(l);if(d!==h)return!1;if(d&&h){var f=a.length;if(l.length!==f)return!1;for(var p=0;p<f;++p)if(!$a(u,a[p],l[p],r))return!1;return!0}return $a(u,a,l,r)}var y=Aa(i,r.fragmentMap);return y?!!oD(y)||$a(y.selectionSet,t,n,r):void 0})}function oD(e){return!!e.directives&&e.directives.some(yF)}function yF(e){return"nonreactive"===e.name.value}var iD=Object.assign,mF=Object.hasOwnProperty,ih=function(e){function t(n){var r=n.queryManager,o=n.queryInfo,i=n.options,s=e.call(this,function(b){try{var v=b._subscription._observer;v&&!v.error&&(v.error=gF)}catch{}var D=!s.observers.size;s.observers.add(b);var S=s.last;return S&&S.error?b.error&&b.error(S.error):S&&S.result&&b.next&&b.next(s.maskResult(S.result)),D&&s.reobserve().catch(function(){}),function(){s.observers.delete(b)&&!s.observers.size&&s.tearDownQuery()}})||this;s.observers=new Set,s.subscriptions=new Set,s.queryInfo=o,s.queryManager=r,s.waitForOwnResult=sh(i.fetchPolicy),s.isTornDown=!1,s.subscribeToMore=s.subscribeToMore.bind(s),s.maskResult=s.maskResult.bind(s);var a=r.defaultOptions.watchQuery,u=(void 0===a?{}:a).fetchPolicy,d=void 0===u?"cache-first":u,h=i.fetchPolicy,f=void 0===h?d:h,p=i.initialFetchPolicy,y=void 0===p?"standby"===f?d:f:p;s.options=w(w({},i),{initialFetchPolicy:y,fetchPolicy:f}),s.queryId=o.queryId||r.generateQueryId();var g=dr(s.query);return s.queryName=g&&g.name&&g.name.value,s}return kt(t,e),Object.defineProperty(t.prototype,"query",{get:function(){return this.lastQuery||this.options.query},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"variables",{get:function(){return this.options.variables},enumerable:!1,configurable:!0}),t.prototype.result=function(){var n=this;return new Promise(function(r,o){var i={next:function(a){r(a),n.observers.delete(i),n.observers.size||n.queryManager.removeQuery(n.queryId),setTimeout(function(){s.unsubscribe()},0)},error:o},s=n.subscribe(i)})},t.prototype.resetDiff=function(){this.queryInfo.resetDiff()},t.prototype.getCurrentFullResult=function(n){void 0===n&&(n=!0);var r=this.getLastResult(!0),o=this.queryInfo.networkStatus||r&&r.networkStatus||re.ready,i=w(w({},r),{loading:Di(o),networkStatus:o}),s=this.options.fetchPolicy,a=void 0===s?"cache-first":s;if(!sh(a)&&!this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)if(this.waitForOwnResult)this.queryInfo.updateWatch();else{var l=this.queryInfo.getDiff();(l.complete||this.options.returnPartialData)&&(i.data=l.result),fe(i.data,{})&&(i.data=void 0),l.complete?(delete i.partial,l.complete&&i.networkStatus===re.loading&&("cache-first"===a||"cache-only"===a)&&(i.networkStatus=re.ready,i.loading=!1)):i.partial=!0,!1!==globalThis.__DEV__&&!l.complete&&!this.options.partialRefetch&&!i.loading&&!i.data&&!i.error&&aD(l.missing)}return n&&this.updateLastResult(i),i},t.prototype.getCurrentResult=function(n){return void 0===n&&(n=!0),this.maskResult(this.getCurrentFullResult(n))},t.prototype.isDifferentFromLastResult=function(n,r){if(!this.last)return!0;var o=this.queryManager.getDocumentInfo(this.query),i=this.queryManager.dataMasking;return(i||o.hasNonreactiveDirective?!rD(i?o.nonReactiveQuery:this.query,this.last.result,n,this.variables):!fe(this.last.result,n))||r&&!fe(this.last.variables,r)},t.prototype.getLast=function(n,r){var o=this.last;if(o&&o[n]&&(!r||fe(o.variables,this.variables)))return o[n]},t.prototype.getLastResult=function(n){return this.getLast("result",n)},t.prototype.getLastError=function(n){return this.getLast("error",n)},t.prototype.resetLastResults=function(){delete this.last,this.isTornDown=!1},t.prototype.resetQueryStoreErrors=function(){this.queryManager.resetErrors(this.queryId)},t.prototype.refetch=function(n){var r,o={pollInterval:0},i=this.options.fetchPolicy;if(o.fetchPolicy="cache-and-network"===i?i:"no-cache"===i?"no-cache":"network-only",!1!==globalThis.__DEV__&&n&&mF.call(n,"variables")){var s=sb(this.query),a=s.variableDefinitions;(!a||!a.some(function(l){return"variables"===l.variable.name.value}))&&!1!==globalThis.__DEV__&&A.warn(21,n,(null===(r=s.name)||void 0===r?void 0:r.value)||s)}return n&&!fe(this.options.variables,n)&&(o.variables=this.options.variables=w(w({},this.options.variables),n)),this.queryInfo.resetLastWrite(),this.reobserve(o,re.refetch)},t.prototype.fetchMore=function(n){var r=this,o=w(w({},n.query?n:w(w(w(w({},this.options),{query:this.options.query}),n),{variables:w(w({},this.options.variables),n.variables)})),{fetchPolicy:"no-cache"});o.query=this.transformDocument(o.query);var i=this.queryManager.generateQueryId();this.lastQuery=n.query?this.transformDocument(this.options.query):o.query;var s=this.queryInfo,a=s.networkStatus;s.networkStatus=re.fetchMore,o.notifyOnNetworkStatusChange&&this.observe();var l=new Set,u=n?.updateQuery,d="no-cache"!==this.options.fetchPolicy;return d||A(u,22),this.queryManager.fetchQuery(i,o,re.fetchMore).then(function(h){if(r.queryManager.removeQuery(i),s.networkStatus===re.fetchMore&&(s.networkStatus=a),d)r.queryManager.cache.batch({update:function(y){var g=n.updateQuery;g?y.updateQuery({query:r.query,variables:r.variables,returnPartialData:!0,optimistic:!1},function(b){return g(b,{fetchMoreResult:h.data,variables:o.variables})}):y.writeQuery({query:o.query,variables:o.variables,data:h.data})},onWatchUpdated:function(y){l.add(y.query)}});else{var f=r.getLast("result"),p=u(f.data,{fetchMoreResult:h.data,variables:o.variables});r.reportResult(w(w({},f),{data:p}),r.variables)}return r.maskResult(h)}).finally(function(){d&&!l.has(r.query)&&sD(r)})},t.prototype.subscribeToMore=function(n){var r=this,o=this.queryManager.startGraphQLSubscription({query:n.document,variables:n.variables,context:n.context}).subscribe({next:function(i){var s=n.updateQuery;s&&r.updateQuery(function(a,l){return s(a,{subscriptionData:i,variables:l.variables})})},error:function(i){n.onError?n.onError(i):!1!==globalThis.__DEV__&&A.error(23,i)}});return this.subscriptions.add(o),function(){r.subscriptions.delete(o)&&o.unsubscribe()}},t.prototype.setOptions=function(n){return this.reobserve(n)},t.prototype.silentSetOptions=function(n){var r=vo(this.options,n||{});iD(this.options,r)},t.prototype.setVariables=function(n){return fe(this.variables,n)?this.observers.size?this.result():Promise.resolve():(this.options.variables=n,this.observers.size?this.reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:n},re.setVariables):Promise.resolve())},t.prototype.updateQuery=function(n){var r=this.queryManager,i=n(r.cache.diff({query:this.options.query,variables:this.variables,returnPartialData:!0,optimistic:!1}).result,{variables:this.variables});i&&(r.cache.writeQuery({query:this.options.query,data:i,variables:this.variables}),r.broadcastQueries())},t.prototype.startPolling=function(n){this.options.pollInterval=n,this.updatePolling()},t.prototype.stopPolling=function(){this.options.pollInterval=0,this.updatePolling()},t.prototype.applyNextFetchPolicy=function(n,r){if(r.nextFetchPolicy){var o=r.fetchPolicy,i=void 0===o?"cache-first":o,s=r.initialFetchPolicy,a=void 0===s?i:s;"standby"===i||(r.fetchPolicy="function"==typeof r.nextFetchPolicy?r.nextFetchPolicy(i,{reason:n,options:r,observable:this,initialFetchPolicy:a}):"variables-changed"===n?a:r.nextFetchPolicy)}return r.fetchPolicy},t.prototype.fetch=function(n,r,o){return this.queryManager.setObservableQuery(this),this.queryManager.fetchConcastWithInfo(this.queryId,n,r,o)},t.prototype.updatePolling=function(){var n=this;if(!this.queryManager.ssrMode){var o=this.pollingInfo,i=this.options.pollInterval;if(!i||!this.hasObservers())return void(o&&(clearTimeout(o.timeout),delete this.pollingInfo));if(!o||o.interval!==i){A(i,24),(o||(this.pollingInfo={})).interval=i;var a=function(){var u,d;n.pollingInfo&&(Di(n.queryInfo.networkStatus)||null!==(d=(u=n.options).skipPollAttempt)&&void 0!==d&&d.call(u)?l():n.reobserve({fetchPolicy:"no-cache"===n.options.initialFetchPolicy?"no-cache":"network-only"},re.poll).then(l,l))},l=function(){var u=n.pollingInfo;u&&(clearTimeout(u.timeout),u.timeout=setTimeout(a,u.interval))};l()}}},t.prototype.updateLastResult=function(n,r){void 0===r&&(r=this.variables);var o=this.getLastError();return o&&this.last&&!fe(r,this.last.variables)&&(o=void 0),this.last=w({result:this.queryManager.assumeImmutableResults?n:nD(n),variables:r},o?{error:o}:null)},t.prototype.reobserveAsConcast=function(n,r){var o=this;this.isTornDown=!1;var i=r===re.refetch||r===re.fetchMore||r===re.poll,s=this.options.variables,a=this.options.fetchPolicy,l=vo(this.options,n||{}),u=i?l:iD(this.options,l),d=this.transformDocument(u.query);this.lastQuery=d,i||(this.updatePolling(),n&&n.variables&&!fe(n.variables,s)&&"standby"!==u.fetchPolicy&&(u.fetchPolicy===a||"function"==typeof u.nextFetchPolicy)&&(this.applyNextFetchPolicy("variables-changed",u),void 0===r&&(r=re.setVariables))),this.waitForOwnResult&&(this.waitForOwnResult=sh(u.fetchPolicy));var h=function(){o.concast===y&&(o.waitForOwnResult=!1)},f=u.variables&&w({},u.variables),p=this.fetch(u,r,d),y=p.concast,b={next:function(v){fe(o.variables,f)&&(h(),o.reportResult(v,f))},error:function(v){fe(o.variables,f)&&(fb(v)||(v=new pr({networkError:v})),h(),o.reportError(v,f))}};return!i&&(p.fromLink||!this.concast)&&(this.concast&&this.observer&&this.concast.removeObserver(this.observer),this.concast=y,this.observer=b),y.addObserver(b),y},t.prototype.reobserve=function(n,r){return function pF(e){return e.catch(function(){}),e}(this.reobserveAsConcast(n,r).promise.then(this.maskResult))},t.prototype.resubscribeAfterError=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=this.last;this.resetLastResults();var i=this.subscribe.apply(this,n);return this.last=o,i},t.prototype.observe=function(){this.reportResult(this.getCurrentFullResult(!1),this.variables)},t.prototype.reportResult=function(n,r){var o=this.getLastError(),i=this.isDifferentFromLastResult(n,r);(o||!n.partial||this.options.returnPartialData)&&this.updateLastResult(n,r),(o||i)&&Ai(this.observers,"next",this.maskResult(n))},t.prototype.reportError=function(n,r){var o=w(w({},this.getLastResult()),{error:n,errors:n.graphQLErrors,networkStatus:re.error,loading:!1});this.updateLastResult(o,r),Ai(this.observers,"error",this.last.error=n)},t.prototype.hasObservers=function(){return this.observers.size>0},t.prototype.tearDownQuery=function(){this.isTornDown||(this.concast&&this.observer&&(this.concast.removeObserver(this.observer),delete this.concast,delete this.observer),this.stopPolling(),this.subscriptions.forEach(function(n){return n.unsubscribe()}),this.subscriptions.clear(),this.queryManager.stopQuery(this.queryId),this.observers.clear(),this.isTornDown=!0)},t.prototype.transformDocument=function(n){return this.queryManager.transform(n)},t.prototype.maskResult=function(n){return n&&"data"in n?w(w({},n),{data:this.queryManager.maskOperation({document:this.query,data:n.data,fetchPolicy:this.options.fetchPolicy,id:this.queryId})}):n},t}(le);function sD(e){var t=e.options,n=t.fetchPolicy,r=t.nextFetchPolicy;return"cache-and-network"===n||"network-only"===n?e.reobserve({fetchPolicy:"cache-first",nextFetchPolicy:function(o,i){return this.nextFetchPolicy=r,"function"==typeof this.nextFetchPolicy?this.nextFetchPolicy(o,i):n}}):e.reobserve()}function gF(e){!1!==globalThis.__DEV__&&A.error(25,e.message,e.stack)}function aD(e){!1!==globalThis.__DEV__&&e&&!1!==globalThis.__DEV__&&A.debug(26,e)}function sh(e){return"network-only"===e||"no-cache"===e||"standby"===e}eD(ih);var So=new(fr?WeakMap:Map);function ah(e,t){var n=e[t];"function"==typeof n&&(e[t]=function(){return So.set(e,(So.get(e)+1)%1e15),n.apply(this,arguments)})}function cD(e){e.notifyTimeout&&(clearTimeout(e.notifyTimeout),e.notifyTimeout=void 0)}var ch=function(){function e(t,n){void 0===n&&(n=t.generateQueryId()),this.queryId=n,this.listeners=new Set,this.document=null,this.lastRequestId=1,this.stopped=!1,this.dirty=!1,this.observableQuery=null;var r=this.cache=t.cache;So.has(r)||(So.set(r,0),ah(r,"evict"),ah(r,"modify"),ah(r,"reset"))}return e.prototype.init=function(t){var n=t.networkStatus||re.loading;return this.variables&&this.networkStatus!==re.loading&&!fe(this.variables,t.variables)&&(n=re.setVariables),fe(t.variables,this.variables)||(this.lastDiff=void 0),Object.assign(this,{document:t.document,variables:t.variables,networkError:null,graphQLErrors:this.graphQLErrors||[],networkStatus:n}),t.observableQuery&&this.setObservableQuery(t.observableQuery),t.lastRequestId&&(this.lastRequestId=t.lastRequestId),this},e.prototype.reset=function(){cD(this),this.dirty=!1},e.prototype.resetDiff=function(){this.lastDiff=void 0},e.prototype.getDiff=function(){var t=this.getDiffOptions();if(this.lastDiff&&fe(t,this.lastDiff.options))return this.lastDiff.diff;this.updateWatch(this.variables);var n=this.observableQuery;if(n&&"no-cache"===n.options.fetchPolicy)return{complete:!1};var r=this.cache.diff(t);return this.updateLastDiff(r,t),r},e.prototype.updateLastDiff=function(t,n){this.lastDiff=t?{diff:t,options:n||this.getDiffOptions()}:void 0},e.prototype.getDiffOptions=function(t){var n;return void 0===t&&(t=this.variables),{query:this.document,variables:t,returnPartialData:!0,optimistic:!0,canonizeResults:null===(n=this.observableQuery)||void 0===n?void 0:n.options.canonizeResults}},e.prototype.setDiff=function(t){var r,n=this,o=this.lastDiff&&this.lastDiff.diff;t&&!t.complete&&null!==(r=this.observableQuery)&&void 0!==r&&r.getLastError()||(this.updateLastDiff(t),!this.dirty&&!fe(o&&o.result,t&&t.result)&&(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout(function(){return n.notify()},0))))},e.prototype.setObservableQuery=function(t){var n=this;t!==this.observableQuery&&(this.oqListener&&this.listeners.delete(this.oqListener),this.observableQuery=t,t?(t.queryInfo=this,this.listeners.add(this.oqListener=function(){n.getDiff().fromOptimisticTransaction?t.observe():sD(t)})):delete this.oqListener)},e.prototype.notify=function(){var t=this;cD(this),this.shouldNotify()&&this.listeners.forEach(function(n){return n(t)}),this.dirty=!1},e.prototype.shouldNotify=function(){if(!this.dirty||!this.listeners.size)return!1;if(Di(this.networkStatus)&&this.observableQuery){var t=this.observableQuery.options.fetchPolicy;if("cache-only"!==t&&"cache-and-network"!==t)return!1}return!0},e.prototype.stop=function(){if(!this.stopped){this.stopped=!0,this.reset(),this.cancel(),this.cancel=e.prototype.cancel;var t=this.observableQuery;t&&t.stopPolling()}},e.prototype.cancel=function(){},e.prototype.updateWatch=function(t){var n=this;void 0===t&&(t=this.variables);var r=this.observableQuery;if(!r||"no-cache"!==r.options.fetchPolicy){var o=w(w({},this.getDiffOptions(t)),{watcher:this,callback:function(i){return n.setDiff(i)}});(!this.lastWatch||!fe(o,this.lastWatch))&&(this.cancel(),this.cancel=this.cache.watch(this.lastWatch=o))}},e.prototype.resetLastWrite=function(){this.lastWrite=void 0},e.prototype.shouldWrite=function(t,n){var r=this.lastWrite;return!(r&&r.dmCount===So.get(this.cache)&&fe(n,r.variables)&&fe(t.data,r.result.data))},e.prototype.markResult=function(t,n,r,o){var i=this,s=new Ln,a=rn(t.errors)?t.errors.slice(0):[];if(this.reset(),"incremental"in t&&rn(t.incremental)){var l=yb(this.getDiff().result,t);t.data=l}else if("hasNext"in t&&t.hasNext){var u=this.getDiff();t.data=s.merge(u.result,t.data)}this.graphQLErrors=a,"no-cache"===r.fetchPolicy?this.updateLastDiff({result:t.data,complete:!0},this.getDiffOptions(r.variables)):0!==o&&(lh(t,r.errorPolicy)?this.cache.performTransaction(function(d){if(i.shouldWrite(t,r.variables))d.writeQuery({query:n,data:t.data,variables:r.variables,overwrite:1===o}),i.lastWrite={result:t,variables:r.variables,dmCount:So.get(i.cache)};else if(i.lastDiff&&i.lastDiff.diff.complete)return void(t.data=i.lastDiff.diff.result);var h=i.getDiffOptions(r.variables),f=d.diff(h);!i.stopped&&fe(i.variables,r.variables)&&i.updateWatch(r.variables),i.updateLastDiff(f,h),f.complete&&(t.data=f.result)}):this.lastWrite=void 0)},e.prototype.markReady=function(){return this.networkError=null,this.networkStatus=re.ready},e.prototype.markError=function(t){return this.networkStatus=re.error,this.lastWrite=void 0,this.reset(),t.graphQLErrors&&(this.graphQLErrors=t.graphQLErrors),t.networkError&&(this.networkError=t.networkError),t},e}();function lh(e,t){void 0===t&&(t="none");var n="ignore"===t||"all"===t,r=!Va(e);return!r&&n&&e.data&&(r=!0),r}function qa(e){return!1!==globalThis.__DEV__&&function vF(e){var t=new Set([e]);return t.forEach(function(n){be(n)&&function SF(e){if(!1!==globalThis.__DEV__&&!Object.isFrozen(e))try{Object.freeze(e)}catch(t){if(t instanceof TypeError)return null;throw t}return e}(n)===n&&Object.getOwnPropertyNames(n).forEach(function(r){be(n[r])&&t.add(n[r])})}),e}(e),e}var lD=fr?WeakMap:Map,uD=Bd?WeakSet:Set,uh=new Ba,dD=!1;function hD(){dD||(dD=!0,!1!==globalThis.__DEV__&&A.warn(52))}function fD(e,t,n){return uh.withValue(!0,function(){var r=Ni(e,t,n,!1);return Object.isFrozen(e)&&qa(r),r})}function Ni(e,t,n,r,o){var i,s=n.knownChanged,a=function bF(e,t){if(t.has(e))return t.get(e);var n=Array.isArray(e)?[]:Object.create(null);return t.set(e,n),n}(e,n.mutableTargets);if(Array.isArray(e)){for(var l=0,u=Array.from(e.entries());l<u.length;l++){var d=u[l],h=d[0],f=d[1];if(null!==f){var p=Ni(f,t,n,r,!1!==globalThis.__DEV__?"".concat(o||"","[").concat(h,"]"):void 0);s.has(p)&&s.add(a),a[h]=p}else a[h]=null}return s.has(a)?a:e}for(var y=0,g=t.selections;y<g.length;y++){var b=g[y],v=void 0;if(r&&s.add(a),b.kind===I.FIELD){var D=Pn(b),S=b.selectionSet;if(void 0===(v=a[D]||e[D]))continue;S&&null!==v&&(p=Ni(e[D],S,n,r,!1!==globalThis.__DEV__?"".concat(o||"",".").concat(D):void 0),s.has(p)&&(v=p)),!1===globalThis.__DEV__&&(a[D]=v),!1!==globalThis.__DEV__&&(!r||"__typename"===D||null!==(i=Object.getOwnPropertyDescriptor(a,D))&&void 0!==i&&i.value?(delete a[D],a[D]=v):Object.defineProperty(a,D,DF(D,v,o||"",n.operationName,n.operationType)))}if(b.kind===I.INLINE_FRAGMENT&&(!b.typeCondition||n.cache.fragmentMatches(b,e.__typename))&&(v=Ni(e,b.selectionSet,n,r,o)),b.kind===I.FRAGMENT_SPREAD){var P=b.name.value,E=n.fragmentMap[P]||(n.fragmentMap[P]=n.cache.lookupFragment(P));A(E,47,P);var _=qN(b);"mask"!==_&&(v=Ni(e,E.selectionSet,n,"migrate"===_,o))}s.has(v)&&s.add(a)}return"__typename"in e&&!("__typename"in a)&&(a.__typename=e.__typename),Object.keys(a).length!==Object.keys(e).length&&s.add(a),s.has(a)?a:e}function DF(e,t,n,r,o){var i=function(){return uh.getValue()||(!1!==globalThis.__DEV__&&A.warn(48,r?"".concat(o," '").concat(r,"'"):"anonymous ".concat(o),"".concat(n,".").concat(e).replace(/^\./,"")),i=function(){return t}),t};return{get:function(){return i()},set:function(s){i=function(){return s}},enumerable:!0,configurable:!0}}function pD(e,t,n,r){if(!n.fragmentMatches)return!1!==globalThis.__DEV__&&hD(),e;var o=t.definitions.filter(function(s){return s.kind===I.FRAGMENT_DEFINITION});typeof r>"u"&&(A(1===o.length,49,o.length),r=o[0].name.value);var i=o.find(function(s){return s.name.value===r});return A(!!i,50,r),null==e||Qd(e,{})?e:fD(e,i.selectionSet,{operationType:"fragment",operationName:i.name.value,fragmentMap:ao(fo(t)),cache:n,mutableTargets:new lD,knownChanged:new uD})}var PF=Object.prototype.hasOwnProperty,yD=Object.create(null),TF=function(){function e(t){var n=this;this.clientAwareness={},this.queries=new Map,this.fetchCancelFns=new Map,this.transformCache=new eb(wn["queryManager.getDocumentInfo"]||2e3),this.queryIdCounter=1,this.requestIdCounter=1,this.mutationIdCounter=1,this.inFlightLinkObservables=new Un(!1),this.noCacheWarningsByQueryId=new Set;var r=new Zb(function(i){return n.cache.transformDocument(i)},{cache:!1});this.cache=t.cache,this.link=t.link,this.defaultOptions=t.defaultOptions,this.queryDeduplication=t.queryDeduplication,this.clientAwareness=t.clientAwareness,this.localState=t.localState,this.ssrMode=t.ssrMode,this.assumeImmutableResults=t.assumeImmutableResults,this.dataMasking=t.dataMasking;var o=t.documentTransform;this.documentTransform=o?r.concat(o).concat(r):r,this.defaultContext=t.defaultContext||Object.create(null),(this.onBroadcast=t.onBroadcast)&&(this.mutationStore=Object.create(null))}return e.prototype.stop=function(){var t=this;this.queries.forEach(function(n,r){t.stopQueryNoBroadcast(r)}),this.cancelPendingFetches(it(27))},e.prototype.cancelPendingFetches=function(t){this.fetchCancelFns.forEach(function(n){return n(t)}),this.fetchCancelFns.clear()},e.prototype.mutate=function(t){return zt(this,arguments,void 0,function(n){var r,o,i,s,a,l,u,d=n.mutation,h=n.variables,f=n.optimisticResponse,p=n.updateQueries,y=n.refetchQueries,g=void 0===y?[]:y,b=n.awaitRefetchQueries,v=void 0!==b&&b,D=n.update,S=n.onQueryUpdated,P=n.fetchPolicy,E=void 0===P?(null===(l=this.defaultOptions.mutate)||void 0===l?void 0:l.fetchPolicy)||"network-only":P,_=n.errorPolicy,q=void 0===_?(null===(u=this.defaultOptions.mutate)||void 0===u?void 0:u.errorPolicy)||"none":_,Q=n.keepRootFields,ie=n.context;return sn(this,function(pe){switch(pe.label){case 0:return A(d,28),A("network-only"===E||"no-cache"===E,29),r=this.generateMutationId(),d=this.cache.transformForLink(this.transform(d)),o=this.getDocumentInfo(d).hasClientExports,h=this.getVariables(d,h),o?[4,this.localState.addExportedVariables(d,h,ie)]:[3,2];case 1:h=pe.sent(),pe.label=2;case 2:return i=this.mutationStore&&(this.mutationStore[r]={mutation:d,variables:h,loading:!0,error:null}),s=f&&this.markMutationOptimistic(f,{mutationId:r,document:d,variables:h,fetchPolicy:E,errorPolicy:q,context:ie,updateQueries:p,update:D,keepRootFields:Q}),this.broadcastQueries(),a=this,[2,new Promise(function(on,Co){return nh(a.getObservableFromLink(d,w(w({},ie),{optimisticResponse:s?f:void 0}),h,{},!1),function(We){if(Va(We)&&"none"===q)throw new pr({graphQLErrors:rh(We)});i&&(i.loading=!1,i.error=null);var qn=w({},We);return"function"==typeof g&&(g=g(qn)),"ignore"===q&&Va(qn)&&delete qn.errors,a.markMutationResult({mutationId:r,result:qn,document:d,variables:h,fetchPolicy:E,errorPolicy:q,context:ie,update:D,updateQueries:p,awaitRefetchQueries:v,refetchQueries:g,removeOptimistic:s?r:void 0,onQueryUpdated:S,keepRootFields:Q})}).subscribe({next:function(We){a.broadcastQueries(),(!("hasNext"in We)||!1===We.hasNext)&&on(w(w({},We),{data:a.maskOperation({document:d,data:We.data,fetchPolicy:E,id:r})}))},error:function(We){i&&(i.loading=!1,i.error=We),s&&a.cache.removeOptimistic(r),a.broadcastQueries(),Co(We instanceof pr?We:new pr({networkError:We}))}})})]}})})},e.prototype.markMutationResult=function(t,n){var r=this;void 0===n&&(n=this.cache);var o=t.result,i=[],s="no-cache"===t.fetchPolicy;if(!s&&lh(o,t.errorPolicy)){if(yo(o)||i.push({result:o.data,dataId:"ROOT_MUTATION",query:t.document,variables:t.variables}),yo(o)&&rn(o.incremental)){var a=n.diff({id:"ROOT_MUTATION",query:this.getDocumentInfo(t.document).asQuery,variables:t.variables,optimistic:!1,returnPartialData:!0}),l=void 0;a.result&&(l=yb(a.result,o)),typeof l<"u"&&(o.data=l,i.push({result:l,dataId:"ROOT_MUTATION",query:t.document,variables:t.variables}))}var u=t.updateQueries;u&&this.queries.forEach(function(h,f){var p=h.observableQuery,y=p&&p.queryName;if(y&&PF.call(u,y)){var g=u[y],b=r.queries.get(f),v=b.document,D=b.variables,S=n.diff({query:v,variables:D,returnPartialData:!0,optimistic:!1}),P=S.result;if(S.complete&&P){var _=g(P,{mutationResult:o,queryName:v&&Ti(v)||void 0,queryVariables:D});_&&i.push({result:_,dataId:"ROOT_QUERY",query:v,variables:D})}}})}if(i.length>0||(t.refetchQueries||"").length>0||t.update||t.onQueryUpdated||t.removeOptimistic){var d=[];if(this.refetchQueries({updateCache:function(h){s||i.forEach(function(g){return h.write(g)});var f=t.update,p=!function lx(e){return yo(e)||function cx(e){return"hasNext"in e&&"data"in e}(e)}(o)||yo(o)&&!o.hasNext;if(f){if(!s){var y=h.diff({id:"ROOT_MUTATION",query:r.getDocumentInfo(t.document).asQuery,variables:t.variables,optimistic:!1,returnPartialData:!0});y.complete&&("incremental"in(o=w(w({},o),{data:y.result}))&&delete o.incremental,"hasNext"in o&&delete o.hasNext)}p&&f(h,o,{context:t.context,variables:t.variables})}!s&&!t.keepRootFields&&p&&h.modify({id:"ROOT_MUTATION",fields:function(g,b){return"__typename"===b.fieldName?g:b.DELETE}})},include:t.refetchQueries,optimistic:!1,removeOptimistic:t.removeOptimistic,onQueryUpdated:t.onQueryUpdated||null}).forEach(function(h){return d.push(h)}),t.awaitRefetchQueries||t.onQueryUpdated)return Promise.all(d).then(function(){return o})}return Promise.resolve(o)},e.prototype.markMutationOptimistic=function(t,n){var r=this,o="function"==typeof t?t(n.variables,{IGNORE:yD}):t;return o!==yD&&(this.cache.recordOptimisticTransaction(function(i){try{r.markMutationResult(w(w({},n),{result:{data:o}}),i)}catch(s){!1!==globalThis.__DEV__&&A.error(s)}},n.mutationId),!0)},e.prototype.fetchQuery=function(t,n,r){return this.fetchConcastWithInfo(t,n,r).concast.promise},e.prototype.getQueryStore=function(){var t=Object.create(null);return this.queries.forEach(function(n,r){t[r]={variables:n.variables,networkStatus:n.networkStatus,networkError:n.networkError,graphQLErrors:n.graphQLErrors}}),t},e.prototype.resetErrors=function(t){var n=this.queries.get(t);n&&(n.networkError=void 0,n.graphQLErrors=[])},e.prototype.transform=function(t){return this.documentTransform.transformDocument(t)},e.prototype.getDocumentInfo=function(t){var n=this.transformCache;if(!n.has(t)){var r={hasClientExports:jN(t),hasForcedResolvers:this.localState.shouldForceResolvers(t),hasNonreactiveDirective:hr(["nonreactive"],t),nonReactiveQuery:Lx(t),clientQuery:this.localState.clientQuery(t),serverQuery:zd([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"},{name:"unmask"}],t),defaultVars:Hd(dr(t)),asQuery:w(w({},t),{definitions:t.definitions.map(function(o){return"OperationDefinition"===o.kind&&"query"!==o.operation?w(w({},o),{operation:"query"}):o})})};n.set(t,r)}return n.get(t)},e.prototype.getVariables=function(t,n){return w(w({},this.getDocumentInfo(t).defaultVars),n)},e.prototype.watchQuery=function(t){var n=this.transform(t.query);typeof(t=w(w({},t),{variables:this.getVariables(n,t.variables)})).notifyOnNetworkStatusChange>"u"&&(t.notifyOnNetworkStatusChange=!1);var r=new ch(this),o=new ih({queryManager:this,queryInfo:r,options:t});return o.lastQuery=n,this.queries.set(o.queryId,r),r.init({document:n,observableQuery:o,variables:o.variables}),o},e.prototype.query=function(t,n){var r=this;void 0===n&&(n=this.generateQueryId()),A(t.query,30),A("Document"===t.query.kind,31),A(!t.returnPartialData,32),A(!t.pollInterval,33);var o=this.transform(t.query);return this.fetchQuery(n,w(w({},t),{query:o})).then(function(i){return i&&w(w({},i),{data:r.maskOperation({document:o,data:i.data,fetchPolicy:t.fetchPolicy,id:n})})}).finally(function(){return r.stopQuery(n)})},e.prototype.generateQueryId=function(){return String(this.queryIdCounter++)},e.prototype.generateRequestId=function(){return this.requestIdCounter++},e.prototype.generateMutationId=function(){return String(this.mutationIdCounter++)},e.prototype.stopQueryInStore=function(t){this.stopQueryInStoreNoBroadcast(t),this.broadcastQueries()},e.prototype.stopQueryInStoreNoBroadcast=function(t){var n=this.queries.get(t);n&&n.stop()},e.prototype.clearStore=function(t){return void 0===t&&(t={discardWatches:!0}),this.cancelPendingFetches(it(34)),this.queries.forEach(function(n){n.observableQuery?n.networkStatus=re.loading:n.stop()}),this.mutationStore&&(this.mutationStore=Object.create(null)),this.cache.reset(t)},e.prototype.getObservableQueries=function(t){var n=this;void 0===t&&(t="active");var r=new Map,o=new Map,i=new Map,s=new Set;return Array.isArray(t)&&t.forEach(function(a){if("string"==typeof a)o.set(a,a),i.set(a,!1);else if(function CN(e){return be(e)&&"Document"===e.kind&&Array.isArray(e.definitions)}(a)){var l=yr(n.transform(a));o.set(l,Ti(a)),i.set(l,!1)}else be(a)&&a.query&&s.add(a)}),this.queries.forEach(function(a,l){var u=a.observableQuery,d=a.document;if(u){if("all"===t)return void r.set(l,u);var h=u.queryName;if("standby"===u.options.fetchPolicy||"active"===t&&!u.hasObservers())return;("active"===t||h&&i.has(h)||d&&i.has(yr(d)))&&(r.set(l,u),h&&i.set(h,!0),d&&i.set(yr(d),!0))}}),s.size&&s.forEach(function(a){var l=Sd("legacyOneTimeQuery"),u=n.getQuery(l).init({document:a.query,variables:a.variables}),d=new ih({queryManager:n,queryInfo:u,options:w(w({},a),{fetchPolicy:"network-only"})});A(d.queryId===l),u.setObservableQuery(d),r.set(l,d)}),!1!==globalThis.__DEV__&&i.size&&i.forEach(function(a,l){if(!a){var u=o.get(l);u?!1!==globalThis.__DEV__&&A.warn(35,u):!1!==globalThis.__DEV__&&A.warn(36)}}),r},e.prototype.reFetchObservableQueries=function(t){var n=this;void 0===t&&(t=!1);var r=[];return this.getObservableQueries(t?"all":"active").forEach(function(o,i){var s=o.options.fetchPolicy;o.resetLastResults(),(t||"standby"!==s&&"cache-only"!==s)&&r.push(o.refetch()),n.getQuery(i).setDiff(null)}),this.broadcastQueries(),Promise.all(r)},e.prototype.setObservableQuery=function(t){this.getQuery(t.queryId).setObservableQuery(t)},e.prototype.startGraphQLSubscription=function(t){var n=this,r=t.query,o=t.variables,i=t.fetchPolicy,s=t.errorPolicy,a=void 0===s?"none":s,l=t.context,u=void 0===l?{}:l,d=t.extensions,h=void 0===d?{}:d;r=this.transform(r),o=this.getVariables(r,o);var f=function(y){return n.getObservableFromLink(r,u,y,h).map(function(g){"no-cache"!==i&&(lh(g,a)&&n.cache.write({query:r,result:g.data,dataId:"ROOT_SUBSCRIPTION",variables:y}),n.broadcastQueries());var b=Va(g),v=function ox(e){return!!e.extensions&&Array.isArray(e.extensions[jd])}(g);if(b||v){var D={};if(b&&(D.graphQLErrors=g.errors),v&&(D.protocolErrors=g.extensions[jd]),"none"===a||v)throw new pr(D)}return"ignore"===a&&delete g.errors,g})};if(this.getDocumentInfo(r).hasClientExports){var p=this.localState.addExportedVariables(r,o,u).then(f);return new le(function(y){var g=null;return p.then(function(b){return g=b.subscribe(y)},y.error),function(){return g&&g.unsubscribe()}})}return f(o)},e.prototype.stopQuery=function(t){this.stopQueryNoBroadcast(t),this.broadcastQueries()},e.prototype.stopQueryNoBroadcast=function(t){this.stopQueryInStoreNoBroadcast(t),this.removeQuery(t)},e.prototype.removeQuery=function(t){this.fetchCancelFns.delete(t),this.queries.has(t)&&(this.getQuery(t).stop(),this.queries.delete(t))},e.prototype.broadcastQueries=function(){this.onBroadcast&&this.onBroadcast(),this.queries.forEach(function(t){return t.notify()})},e.prototype.getLocalState=function(){return this.localState},e.prototype.getObservableFromLink=function(t,n,r,o,i){var a,s=this;void 0===i&&(i=null!==(a=n?.queryDeduplication)&&void 0!==a?a:this.queryDeduplication);var l,u=this.getDocumentInfo(t),d=u.serverQuery,h=u.clientQuery;if(d){var p=this.inFlightLinkObservables,y=this.link,g={query:d,variables:r,operationName:Ti(d)||void 0,context:this.prepareContext(w(w({},n),{forceFetch:!i})),extensions:o};if(n=g.context,i){var b=yr(d),v=Fn(r),D=p.lookup(b,v);if(!(l=D.observable)){var S=new go([Ld(y,g)]);l=D.observable=S,S.beforeNext(function(){p.remove(b,v)})}}else l=new go([Ld(y,g)])}else l=new go([le.of({data:{}})]),n=this.prepareContext(n);return h&&(l=nh(l,function(P){return s.localState.runResolvers({document:h,remoteResult:P,context:n,variables:r})})),l},e.prototype.getResultsFromLink=function(t,n,r){var o=t.lastRequestId=this.generateRequestId(),i=this.cache.transformForLink(r.query);return nh(this.getObservableFromLink(i,r.context,r.variables),function(s){var a=rh(s),l=a.length>0,u=r.errorPolicy;if(o>=t.lastRequestId){if(l&&"none"===u)throw t.markError(new pr({graphQLErrors:a}));t.markResult(s,i,r,n),t.markReady()}var d={data:s.data,loading:!1,networkStatus:re.ready};return l&&"none"===u&&(d.data=void 0),l&&"ignore"!==u&&(d.errors=a,d.networkStatus=re.error),d},function(s){var a=fb(s)?s:new pr({networkError:s});throw o>=t.lastRequestId&&t.markError(a),a})},e.prototype.fetchConcastWithInfo=function(t,n,r,o){var i=this;void 0===r&&(r=re.loading),void 0===o&&(o=n.query);var _,q,s=this.getVariables(o,n.variables),a=this.getQuery(t),l=this.defaultOptions.watchQuery,u=n.fetchPolicy,h=n.errorPolicy,p=n.returnPartialData,g=n.notifyOnNetworkStatusChange,v=n.context,S=Object.assign({},n,{query:o,variables:s,fetchPolicy:void 0===u?l&&l.fetchPolicy||"cache-first":u,errorPolicy:void 0===h?l&&l.errorPolicy||"none":h,returnPartialData:void 0!==p&&p,notifyOnNetworkStatusChange:void 0!==g&&g,context:void 0===v?{}:v}),P=function(ie){S.variables=ie;var pe=i.fetchQueryByPolicy(a,S,r);return"standby"!==S.fetchPolicy&&pe.sources.length>0&&a.observableQuery&&a.observableQuery.applyNextFetchPolicy("after-fetch",n),pe},E=function(){return i.fetchCancelFns.delete(t)};if(this.fetchCancelFns.set(t,function(ie){E(),setTimeout(function(){return _.cancel(ie)})}),this.getDocumentInfo(S.query).hasClientExports)_=new go(this.localState.addExportedVariables(S.query,S.variables,S.context).then(P).then(function(ie){return ie.sources})),q=!0;else{var Q=P(S.variables);q=Q.fromLink,_=new go(Q.sources)}return _.promise.then(E,E),{concast:_,fromLink:q}},e.prototype.refetchQueries=function(t){var n=this,r=t.updateCache,o=t.include,i=t.optimistic,s=void 0!==i&&i,a=t.removeOptimistic,l=void 0===a?s?Sd("refetchQueries"):void 0:a,u=t.onQueryUpdated,d=new Map;o&&this.getObservableQueries(o).forEach(function(f,p){d.set(p,{oq:f,lastDiff:n.getQuery(p).getDiff()})});var h=new Map;return r&&this.cache.batch({update:r,optimistic:s&&l||!1,removeOptimistic:l,onWatchUpdated:function(f,p,y){var g=f.watcher instanceof ch&&f.watcher.observableQuery;if(g){if(u){d.delete(g.queryId);var b=u(g,p,y);return!0===b&&(b=g.refetch()),!1!==b&&h.set(g,b),b}null!==u&&d.set(g.queryId,{oq:g,lastDiff:y,diff:p})}}}),d.size&&d.forEach(function(f,p){var v,y=f.oq,g=f.lastDiff,b=f.diff;if(u){if(!b){var D=y.queryInfo;D.reset(),b=D.getDiff()}v=u(y,b,g)}(!u||!0===v)&&(v=y.refetch()),!1!==v&&h.set(y,v),p.indexOf("legacyOneTimeQuery")>=0&&n.stopQueryNoBroadcast(p)}),l&&this.cache.removeOptimistic(l),h},e.prototype.maskOperation=function(t){var n,r,o,i=t.document,s=t.data;if(!1!==globalThis.__DEV__){var a=t.fetchPolicy,l=t.id,u=null===(n=dr(i))||void 0===n?void 0:n.operation,d=(null!==(r=u?.[0])&&void 0!==r?r:"o")+l;this.dataMasking&&"no-cache"===a&&!function cN(e){var t=!0;return jt(e,{FragmentSpread:function(n){if(!(t=!!n.directives&&n.directives.some(function(r){return"unmask"===r.name.value})))return Nn}}),t}(i)&&!this.noCacheWarningsByQueryId.has(d)&&(this.noCacheWarningsByQueryId.add(d),!1!==globalThis.__DEV__&&A.warn(37,null!==(o=Ti(i))&&void 0!==o?o:"Unnamed ".concat(u??"operation")))}return this.dataMasking?function wF(e,t,n){var r;if(!n.fragmentMatches)return!1!==globalThis.__DEV__&&hD(),e;var o=dr(t);return A(o,51),null==e?e:fD(e,o.selectionSet,{operationType:o.operation,operationName:null===(r=o.name)||void 0===r?void 0:r.value,fragmentMap:ao(fo(t)),cache:n,mutableTargets:new lD,knownChanged:new uD})}(s,i,this.cache):s},e.prototype.maskFragment=function(t){var n=t.data;return this.dataMasking?pD(n,t.fragment,this.cache,t.fragmentName):n},e.prototype.fetchQueryByPolicy=function(t,n,r){var o=this,i=n.query,s=n.variables,a=n.fetchPolicy,l=n.refetchWritePolicy,u=n.errorPolicy,d=n.returnPartialData,h=n.context,f=n.notifyOnNetworkStatusChange,p=t.networkStatus;t.init({document:i,variables:s,networkStatus:r});var y=function(){return t.getDiff()},g=function(P,E){void 0===E&&(E=t.networkStatus||re.loading);var _=P.result;!1!==globalThis.__DEV__&&!d&&!fe(_,{})&&aD(P.missing);var q=function(Q){return le.of(w({data:Q,loading:Di(E),networkStatus:E},P.complete?null:{partial:!0}))};return _&&o.getDocumentInfo(i).hasForcedResolvers?o.localState.runResolvers({document:i,remoteResult:{data:_},context:h,variables:s,onlyRunForcedResolvers:!0}).then(function(Q){return q(Q.data||void 0)}):"none"===u&&E===re.refetch&&Array.isArray(P.missing)?q(void 0):q(_)},b="no-cache"===a?0:r===re.refetch&&"merge"!==l?1:2,v=function(){return o.getResultsFromLink(t,b,{query:i,variables:s,context:h,fetchPolicy:a,errorPolicy:u})},D=f&&"number"==typeof p&&p!==r&&Di(r);switch(a){default:case"cache-first":return(S=y()).complete?{fromLink:!1,sources:[g(S,t.markReady())]}:d||D?{fromLink:!0,sources:[g(S),v()]}:{fromLink:!0,sources:[v()]};case"cache-and-network":var S;return(S=y()).complete||d||D?{fromLink:!0,sources:[g(S),v()]}:{fromLink:!0,sources:[v()]};case"cache-only":return{fromLink:!1,sources:[g(y(),t.markReady())]};case"network-only":return D?{fromLink:!0,sources:[g(y()),v()]}:{fromLink:!0,sources:[v()]};case"no-cache":return D?{fromLink:!0,sources:[g(t.getDiff()),v()]}:{fromLink:!0,sources:[v()]};case"standby":return{fromLink:!1,sources:[]}}},e.prototype.getQuery=function(t){return t&&!this.queries.has(t)&&this.queries.set(t,new ch(this,t)),this.queries.get(t)},e.prototype.prepareContext=function(t){void 0===t&&(t={});var n=this.localState.prepareContext(t);return w(w(w({},this.defaultContext),n),{clientAwareness:this.clientAwareness})},e}();function mD(e){return e.kind===I.FIELD||e.kind===I.FRAGMENT_SPREAD||e.kind===I.INLINE_FRAGMENT}var dh=new Ba,vD=new WeakMap;function xi(e){var t=vD.get(e);return t||vD.set(e,t={vars:new Set,dep:Jb()}),t}function SD(e){xi(e).vars.forEach(function(t){return t.forgetCache(e)})}function OF(e){var t=new Set,n=new Set,r=function(i){if(arguments.length>0){if(e!==i){e=i,t.forEach(function(l){xi(l).dep.dirty(r),function AF(e){e.broadcastWatches&&e.broadcastWatches()}(l)});var s=Array.from(n);n.clear(),s.forEach(function(l){return l(e)})}}else{var a=dh.getValue();a&&(o(a),xi(a).dep(r))}return e};r.onNextChange=function(i){return n.add(i),function(){n.delete(i)}};var o=r.attachCache=function(i){return t.add(i),xi(i).vars.add(r),r};return r.forgetCache=function(i){return t.delete(i)},r}var NF=function(){function e(t){var n=t.cache,r=t.client,o=t.resolvers,i=t.fragmentMatcher;this.selectionsToResolveCache=new WeakMap,this.cache=n,r&&(this.client=r),o&&this.addResolvers(o),i&&this.setFragmentMatcher(i)}return e.prototype.addResolvers=function(t){var n=this;this.resolvers=this.resolvers||{},Array.isArray(t)?t.forEach(function(r){n.resolvers=pb(n.resolvers,r)}):this.resolvers=pb(this.resolvers,t)},e.prototype.setResolvers=function(t){this.resolvers={},this.addResolvers(t)},e.prototype.getResolvers=function(){return this.resolvers||{}},e.prototype.runResolvers=function(t){return zt(this,arguments,void 0,function(n){var r=n.document,o=n.remoteResult,i=n.context,s=n.variables,a=n.onlyRunForcedResolvers,l=void 0!==a&&a;return sn(this,function(u){return r?[2,this.resolveDocument(r,o.data,i,s,this.fragmentMatcher,l).then(function(d){return w(w({},o),{data:d.result})})]:[2,o]})})},e.prototype.setFragmentMatcher=function(t){this.fragmentMatcher=t},e.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},e.prototype.clientQuery=function(t){return hr(["client"],t)&&this.resolvers?t:null},e.prototype.serverQuery=function(t){return Ib(t)},e.prototype.prepareContext=function(t){var n=this.cache;return w(w({},t),{cache:n,getCacheKey:function(r){return n.identify(r)}})},e.prototype.addExportedVariables=function(t){return zt(this,arguments,void 0,function(n,r,o){return void 0===r&&(r={}),void 0===o&&(o={}),sn(this,function(i){return n?[2,this.resolveDocument(n,this.buildRootValueFromCache(n,r)||{},this.prepareContext(o),r).then(function(s){return w(w({},r),s.exportedVariables)})]:[2,w({},r)]})})},e.prototype.shouldForceResolvers=function(t){var n=!1;return jt(t,{Directive:{enter:function(r){if("client"===r.name.value&&r.arguments&&(n=r.arguments.some(function(o){return"always"===o.name.value&&"BooleanValue"===o.value.kind&&!0===o.value.value})))return Nn}}}),n},e.prototype.buildRootValueFromCache=function(t,n){return this.cache.diff({query:Hx(t),variables:n,returnPartialData:!0,optimistic:!1}).result},e.prototype.resolveDocument=function(t,n){return zt(this,arguments,void 0,function(r,o,i,s,a,l){var u,d,h,f,p,y,g,b,v,D;return void 0===i&&(i={}),void 0===s&&(s={}),void 0===a&&(a=function(){return!0}),void 0===l&&(l=!1),sn(this,function(P){return u=Ei(r),d=fo(r),h=ao(d),f=this.collectSelectionsToResolve(u,h),y=(p=u.operation)?p.charAt(0).toUpperCase()+p.slice(1):"Query",b=(g=this).cache,v=g.client,D={fragmentMap:h,context:w(w({},i),{cache:b,client:v}),variables:s,fragmentMatcher:a,defaultOperationType:y,exportedVariables:{},selectionsToResolve:f,onlyRunForcedResolvers:l},[2,this.resolveSelectionSet(u.selectionSet,!1,o,D).then(function(E){return{result:E,exportedVariables:D.exportedVariables}})]})})},e.prototype.resolveSelectionSet=function(t,n,r,o){return zt(this,void 0,void 0,function(){var i,s,a,l,u,d=this;return sn(this,function(h){return i=o.fragmentMap,s=o.context,a=o.variables,l=[r],u=function(f){return zt(d,void 0,void 0,function(){var p;return sn(this,function(g){return(n||o.selectionsToResolve.has(f))&&_i(f,a)?Hn(f)?[2,this.resolveField(f,n,r,o).then(function(b){var v;typeof b<"u"&&l.push(((v={})[Pn(f)]=b,v))})]:(function LN(e){return"InlineFragment"===e.kind}(f)?p=f:A(p=i[f.name.value],19,f.name.value),p&&p.typeCondition&&o.fragmentMatcher(r,p.typeCondition.name.value,s)?[2,this.resolveSelectionSet(p.selectionSet,n,r,o).then(function(b){l.push(b)})]:[2]):[2]})})},[2,Promise.all(t.selections.map(u)).then(function(){return La(l)})]})})},e.prototype.resolveField=function(t,n,r,o){return zt(this,void 0,void 0,function(){var i,s,a,l,u,d,h,f,p,y=this;return sn(this,function(g){return r?(i=o.variables,s=t.name.value,a=Pn(t),l=s!==a,u=r[a]||r[s],d=Promise.resolve(u),(!o.onlyRunForcedResolvers||this.shouldForceResolvers(t))&&(h=r.__typename||o.defaultOperationType,(f=this.resolvers&&this.resolvers[h])&&(p=f[l?s:a])&&(d=Promise.resolve(dh.withValue(this.cache,p,[r,xa(t,i),o.context,{field:t,fragmentMap:o.fragmentMap}])))),[2,d.then(function(b){var v,D;if(void 0===b&&(b=u),t.directives&&t.directives.forEach(function(P){"export"===P.name.value&&P.arguments&&P.arguments.forEach(function(E){"as"===E.name.value&&"StringValue"===E.value.kind&&(o.exportedVariables[E.value.value]=b)})}),!t.selectionSet||null==b)return b;var S=null!==(D=null===(v=t.directives)||void 0===v?void 0:v.some(function(P){return"client"===P.name.value}))&&void 0!==D&&D;return Array.isArray(b)?y.resolveSubSelectedArray(t,n||S,b,o):t.selectionSet?y.resolveSelectionSet(t.selectionSet,n||S,b,o):void 0})]):[2,null]})})},e.prototype.resolveSubSelectedArray=function(t,n,r,o){var i=this;return Promise.all(r.map(function(s){return null===s?null:Array.isArray(s)?i.resolveSubSelectedArray(t,n,s,o):t.selectionSet?i.resolveSelectionSet(t.selectionSet,n,s,o):void 0}))},e.prototype.collectSelectionsToResolve=function(t,n){var r=function(s){return!Array.isArray(s)},o=this.selectionsToResolveCache;return function i(s){if(!o.has(s)){var a=new Set;o.set(s,a),jt(s,{Directive:function(l,u,d,h,f){"client"===l.name.value&&f.forEach(function(p){r(p)&&mD(p)&&a.add(p)})},FragmentSpread:function(l,u,d,h,f){var p=n[l.name.value];A(p,20,l.name.value);var y=i(p);y.size>0&&(f.forEach(function(g){r(g)&&mD(g)&&a.add(g)}),a.add(l),y.forEach(function(g){a.add(g)}))}})}return o.get(s)}(t)},e}();function hh(e,t){return vo(e,t,t.variables&&{variables:vo(w(w({},e&&e.variables),t.variables))})}var bD=!1,fh=function(){function e(t){var r,n=this;if(this.resetStoreCallbacks=[],this.clearStoreCallbacks=[],!t.cache)throw it(16);var o=t.uri,a=t.cache,l=t.documentTransform,u=t.ssrMode,d=void 0!==u&&u,h=t.ssrForceFetchDelay,f=void 0===h?0:h,p=t.connectToDevTools,y=t.queryDeduplication,g=void 0===y||y,b=t.defaultOptions,v=t.defaultContext,D=t.assumeImmutableResults,S=void 0===D?a.assumeImmutableResults:D,P=t.resolvers,E=t.typeDefs,_=t.fragmentMatcher,q=t.name,Q=t.version,ie=t.devtools,pe=t.dataMasking,on=t.link;on||(on=o?new Bx({uri:o,credentials:t.credentials,headers:t.headers}):po.empty()),this.link=on,this.cache=a,this.disableNetworkFetches=d||f>0,this.queryDeduplication=g,this.defaultOptions=b||Object.create(null),this.typeDefs=E,this.devtoolsConfig=w(w({},ie),{enabled:null!==(r=ie?.enabled)&&void 0!==r?r:p}),void 0===this.devtoolsConfig.enabled&&(this.devtoolsConfig.enabled=!1!==globalThis.__DEV__),f&&setTimeout(function(){return n.disableNetworkFetches=!1},f),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.watchFragment=this.watchFragment.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this),this.version=gd,this.localState=new NF({cache:a,client:this,resolvers:P,fragmentMatcher:_}),this.queryManager=new TF({cache:this.cache,link:this.link,defaultOptions:this.defaultOptions,defaultContext:v,documentTransform:l,queryDeduplication:g,ssrMode:d,dataMasking:!!pe,clientAwareness:{name:q,version:Q},localState:this.localState,assumeImmutableResults:S,onBroadcast:this.devtoolsConfig.enabled?function(){n.devToolsHookCb&&n.devToolsHookCb({action:{},state:{queries:n.queryManager.getQueryStore(),mutations:n.queryManager.mutationStore||{}},dataWithOptimisticResults:n.cache.extract(!0)})}:void 0}),this.devtoolsConfig.enabled&&this.connectToDevTools()}return e.prototype.connectToDevTools=function(){if(!(typeof window>"u")){var t=window,n=Symbol.for("apollo.devtools");(t[n]=t[n]||[]).push(this),t.__APOLLO_CLIENT__=this,!bD&&!1!==globalThis.__DEV__&&(bD=!0,window.document&&window.top===window.self&&/^(https?|file):$/.test(window.location.protocol)&&setTimeout(function(){if(!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__){var r=window.navigator,o=r&&r.userAgent,i=void 0;"string"==typeof o&&(o.indexOf("Chrome/")>-1?i="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":o.indexOf("Firefox/")>-1&&(i="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),i&&!1!==globalThis.__DEV__&&A.log("Download the Apollo DevTools for a better development experience: %s",i)}},1e4))}},Object.defineProperty(e.prototype,"documentTransform",{get:function(){return this.queryManager.documentTransform},enumerable:!1,configurable:!0}),e.prototype.stop=function(){this.queryManager.stop()},e.prototype.watchQuery=function(t){return this.defaultOptions.watchQuery&&(t=hh(this.defaultOptions.watchQuery,t)),this.disableNetworkFetches&&("network-only"===t.fetchPolicy||"cache-and-network"===t.fetchPolicy)&&(t=w(w({},t),{fetchPolicy:"cache-first"})),this.queryManager.watchQuery(t)},e.prototype.query=function(t){return this.defaultOptions.query&&(t=hh(this.defaultOptions.query,t)),A("cache-and-network"!==t.fetchPolicy,17),this.disableNetworkFetches&&"network-only"===t.fetchPolicy&&(t=w(w({},t),{fetchPolicy:"cache-first"})),this.queryManager.query(t)},e.prototype.mutate=function(t){return this.defaultOptions.mutate&&(t=hh(this.defaultOptions.mutate,t)),this.queryManager.mutate(t)},e.prototype.subscribe=function(t){var n=this,r=this.queryManager.generateQueryId();return this.queryManager.startGraphQLSubscription(t).map(function(o){return w(w({},o),{data:n.queryManager.maskOperation({document:t.query,data:o.data,fetchPolicy:t.fetchPolicy,id:r})})})},e.prototype.readQuery=function(t,n){return void 0===n&&(n=!1),this.cache.readQuery(t,n)},e.prototype.watchFragment=function(t){var n;return this.cache.watchFragment(w(w({},t),((n={})[Symbol.for("apollo.dataMasking")]=this.queryManager.dataMasking,n)))},e.prototype.readFragment=function(t,n){return void 0===n&&(n=!1),this.cache.readFragment(t,n)},e.prototype.writeQuery=function(t){var n=this.cache.writeQuery(t);return!1!==t.broadcast&&this.queryManager.broadcastQueries(),n},e.prototype.writeFragment=function(t){var n=this.cache.writeFragment(t);return!1!==t.broadcast&&this.queryManager.broadcastQueries(),n},e.prototype.__actionHookForDevTools=function(t){this.devToolsHookCb=t},e.prototype.__requestRaw=function(t){return Ld(this.link,t)},e.prototype.resetStore=function(){var t=this;return Promise.resolve().then(function(){return t.queryManager.clearStore({discardWatches:!1})}).then(function(){return Promise.all(t.resetStoreCallbacks.map(function(n){return n()}))}).then(function(){return t.reFetchObservableQueries()})},e.prototype.clearStore=function(){var t=this;return Promise.resolve().then(function(){return t.queryManager.clearStore({discardWatches:!0})}).then(function(){return Promise.all(t.clearStoreCallbacks.map(function(n){return n()}))})},e.prototype.onResetStore=function(t){var n=this;return this.resetStoreCallbacks.push(t),function(){n.resetStoreCallbacks=n.resetStoreCallbacks.filter(function(r){return r!==t})}},e.prototype.onClearStore=function(t){var n=this;return this.clearStoreCallbacks.push(t),function(){n.clearStoreCallbacks=n.clearStoreCallbacks.filter(function(r){return r!==t})}},e.prototype.reFetchObservableQueries=function(t){return this.queryManager.reFetchObservableQueries(t)},e.prototype.refetchQueries=function(t){var n=this.queryManager.refetchQueries(t),r=[],o=[];n.forEach(function(s,a){r.push(a),o.push(s)});var i=Promise.all(o);return i.queries=r,i.results=o,i.catch(function(s){!1!==globalThis.__DEV__&&A.debug(18,s)}),i},e.prototype.getObservableQueries=function(t){return void 0===t&&(t="active"),this.queryManager.getObservableQueries(t)},e.prototype.extract=function(t){return this.cache.extract(t)},e.prototype.restore=function(t){return this.cache.restore(t)},e.prototype.addResolvers=function(t){this.localState.addResolvers(t)},e.prototype.setResolvers=function(t){this.localState.setResolvers(t)},e.prototype.getResolvers=function(){return this.localState.getResolvers()},e.prototype.setLocalStateFragmentMatcher=function(t){this.localState.setFragmentMatcher(t)},e.prototype.setLink=function(t){this.link=this.queryManager.link=t},Object.defineProperty(e.prototype,"defaultContext",{get:function(){return this.queryManager.defaultContext},enumerable:!1,configurable:!0}),e}();function FF(e,t){if(!Boolean(e))throw new Error(t??"Unexpected invariant triggered.")}!1!==globalThis.__DEV__&&(fh.prototype.getMemoryInternals=gN);const HF=/\r\n|[\n\r]/g;function ph(e,t){let n=0,r=1;for(const o of e.body.matchAll(HF)){if("number"==typeof o.index||FF(!1),o.index>=t)break;n=o.index+o[0].length,r+=1}return{line:r,column:t+1-n}}function LF(e){return DD(e.source,ph(e.source,e.start))}function DD(e,t){const n=e.locationOffset.column-1,r="".padStart(n)+e.body,o=t.line-1,s=t.line+(e.locationOffset.line-1),l=t.column+(1===t.line?n:0),u=`${e.name}:${s}:${l}\n`,d=r.split(/\r\n|[\n\r]/g),h=d[o];if(h.length>120){const f=Math.floor(l/80),p=l%80,y=[];for(let g=0;g<h.length;g+=80)y.push(h.slice(g,g+80));return u+wD([[`${s} |`,y[0]],...y.slice(1,f+1).map(g=>["|",g]),["|","^".padStart(p)],["|",y[f+1]]])}return u+wD([[s-1+" |",d[o-1]],[`${s} |`,h],["|","^".padStart(l)],[`${s+1} |`,d[o+1]]])}function wD(e){const t=e.filter(([r,o])=>void 0!==o),n=Math.max(...t.map(([r])=>r.length));return t.map(([r,o])=>r.padStart(n)+(o?" "+o:"")).join("\n")}class yh extends Error{constructor(t,...n){var r,o,i;const{nodes:s,source:a,positions:l,path:u,originalError:d,extensions:h}=function UF(e){const t=e[0];return null==t||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}(n);super(t),this.name="GraphQLError",this.path=u??void 0,this.originalError=d??void 0,this.nodes=PD(Array.isArray(s)?s:s?[s]:void 0);const f=PD(null===(r=this.nodes)||void 0===r?void 0:r.map(y=>y.loc).filter(y=>null!=y));this.source=a??(null==f||null===(o=f[0])||void 0===o?void 0:o.source),this.positions=l??f?.map(y=>y.start),this.locations=l&&a?l.map(y=>ph(a,y)):f?.map(y=>ph(y.source,y.start));const p=function xF(e){return"object"==typeof e&&null!==e}(d?.extensions)?d?.extensions:void 0;this.extensions=null!==(i=h??p)&&void 0!==i?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!=d&&d.stack?Object.defineProperty(this,"stack",{value:d.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,yh):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(t+="\n\n"+LF(n.loc));else if(this.source&&this.locations)for(const n of this.locations)t+="\n\n"+DD(this.source,n);return t}toJSON(){const t={message:this.message};return null!=this.locations&&(t.locations=this.locations),null!=this.path&&(t.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}}function PD(e){return void 0===e||0===e.length?void 0:e}function He(e,t,n){return new yh(`Syntax Error: ${n}`,{source:e,positions:[t]})}var za=(()=>(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"}(za||(za={})),za))(),T=(()=>(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"}(T||(T={})),T))();class BF{constructor(t){const n=new YS(T.SOF,0,0,0,0);this.source=t,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==T.EOF)do{if(t.next)t=t.next;else{const n=VF(this,t.end);t.next=n,n.prev=t,t=n}}while(t.kind===T.COMMENT);return t}}function bo(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function Wa(e,t){return TD(e.charCodeAt(t))&&ED(e.charCodeAt(t+1))}function TD(e){return e>=55296&&e<=56319}function ED(e){return e>=56320&&e<=57343}function mr(e,t){const n=e.source.body.codePointAt(t);if(void 0===n)return T.EOF;if(n>=32&&n<=126){const r=String.fromCodePoint(n);return'"'===r?"'\"'":`"${r}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function Oe(e,t,n,r,o){return new YS(t,n,r,e.line,1+n-e.lineStart,o)}function VF(e,t){const n=e.source.body,r=n.length;let o=t;for(;o<r;){const i=n.charCodeAt(o);switch(i){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++e.line,e.lineStart=o;continue;case 13:10===n.charCodeAt(o+1)?o+=2:++o,++e.line,e.lineStart=o;continue;case 35:return $F(e,o);case 33:return Oe(e,T.BANG,o,o+1);case 36:return Oe(e,T.DOLLAR,o,o+1);case 38:return Oe(e,T.AMP,o,o+1);case 40:return Oe(e,T.PAREN_L,o,o+1);case 41:return Oe(e,T.PAREN_R,o,o+1);case 46:if(46===n.charCodeAt(o+1)&&46===n.charCodeAt(o+2))return Oe(e,T.SPREAD,o,o+3);break;case 58:return Oe(e,T.COLON,o,o+1);case 61:return Oe(e,T.EQUALS,o,o+1);case 64:return Oe(e,T.AT,o,o+1);case 91:return Oe(e,T.BRACKET_L,o,o+1);case 93:return Oe(e,T.BRACKET_R,o,o+1);case 123:return Oe(e,T.BRACE_L,o,o+1);case 124:return Oe(e,T.PIPE,o,o+1);case 125:return Oe(e,T.BRACE_R,o,o+1);case 34:return 34===n.charCodeAt(o+1)&&34===n.charCodeAt(o+2)?KF(e,o):zF(e,o)}if(Ii(i)||45===i)return qF(e,o,i);if(Sb(i))return YF(e,o);throw He(e.source,o,39===i?"Unexpected single quote character ('), did you mean to use a double quote (\")?":bo(i)||Wa(n,o)?`Unexpected character: ${mr(e,o)}.`:`Invalid character: ${mr(e,o)}.`)}return Oe(e,T.EOF,r,r)}function $F(e,t){const n=e.source.body,r=n.length;let o=t+1;for(;o<r;){const i=n.charCodeAt(o);if(10===i||13===i)break;if(bo(i))++o;else{if(!Wa(n,o))break;o+=2}}return Oe(e,T.COMMENT,t,o,n.slice(t+1,o))}function qF(e,t,n){const r=e.source.body;let o=t,i=n,s=!1;if(45===i&&(i=r.charCodeAt(++o)),48===i){if(i=r.charCodeAt(++o),Ii(i))throw He(e.source,o,`Invalid number, unexpected digit after 0: ${mr(e,o)}.`)}else o=mh(e,o,i),i=r.charCodeAt(o);if(46===i&&(s=!0,i=r.charCodeAt(++o),o=mh(e,o,i),i=r.charCodeAt(o)),(69===i||101===i)&&(s=!0,i=r.charCodeAt(++o),(43===i||45===i)&&(i=r.charCodeAt(++o)),o=mh(e,o,i),i=r.charCodeAt(o)),46===i||Sb(i))throw He(e.source,o,`Invalid number, expected digit but got: ${mr(e,o)}.`);return Oe(e,s?T.FLOAT:T.INT,t,o,r.slice(t,o))}function mh(e,t,n){if(!Ii(n))throw He(e.source,t,`Invalid number, expected digit but got: ${mr(e,t)}.`);const r=e.source.body;let o=t+1;for(;Ii(r.charCodeAt(o));)++o;return o}function zF(e,t){const n=e.source.body,r=n.length;let o=t+1,i=o,s="";for(;o<r;){const a=n.charCodeAt(o);if(34===a)return s+=n.slice(i,o),Oe(e,T.STRING,t,o+1,s);if(92!==a){if(10===a||13===a)break;if(bo(a))++o;else{if(!Wa(n,o))throw He(e.source,o,`Invalid character within String: ${mr(e,o)}.`);o+=2}}else{s+=n.slice(i,o);const l=117===n.charCodeAt(o+1)?123===n.charCodeAt(o+2)?WF(e,o):GF(e,o):QF(e,o);s+=l.value,o+=l.size,i=o}}throw He(e.source,o,"Unterminated string.")}function WF(e,t){const n=e.source.body;let r=0,o=3;for(;o<12;){const i=n.charCodeAt(t+o++);if(125===i){if(o<5||!bo(r))break;return{value:String.fromCodePoint(r),size:o}}if(r=r<<4|Fi(i),r<0)break}throw He(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+o)}".`)}function GF(e,t){const n=e.source.body,r=CD(n,t+2);if(bo(r))return{value:String.fromCodePoint(r),size:6};if(TD(r)&&92===n.charCodeAt(t+6)&&117===n.charCodeAt(t+7)){const o=CD(n,t+8);if(ED(o))return{value:String.fromCodePoint(r,o),size:12}}throw He(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function CD(e,t){return Fi(e.charCodeAt(t))<<12|Fi(e.charCodeAt(t+1))<<8|Fi(e.charCodeAt(t+2))<<4|Fi(e.charCodeAt(t+3))}function Fi(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function QF(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:"\n",size:2};case 114:return{value:"\r",size:2};case 116:return{value:"\t",size:2}}throw He(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function KF(e,t){const n=e.source.body,r=n.length;let o=e.lineStart,i=t+3,s=i,a="";const l=[];for(;i<r;){const u=n.charCodeAt(i);if(34===u&&34===n.charCodeAt(i+1)&&34===n.charCodeAt(i+2)){a+=n.slice(s,i),l.push(a);const d=Oe(e,T.BLOCK_STRING,t,i+3,gx(l).join("\n"));return e.line+=l.length-1,e.lineStart=o,d}if(92!==u||34!==n.charCodeAt(i+1)||34!==n.charCodeAt(i+2)||34!==n.charCodeAt(i+3))if(10!==u&&13!==u)if(bo(u))++i;else{if(!Wa(n,i))throw He(e.source,i,`Invalid character within String: ${mr(e,i)}.`);i+=2}else a+=n.slice(s,i),l.push(a),13===u&&10===n.charCodeAt(i+1)?i+=2:++i,a="",s=i,o=i;else a+=n.slice(s,i),s=i+1,i+=4}throw He(e.source,i,"Unterminated string.")}function YF(e,t){const n=e.source.body,r=n.length;let o=t+1;for(;o<r&&mx(n.charCodeAt(o));)++o;return Oe(e,T.NAME,t,o,n.slice(t,o))}const JF=globalThis.process?function(t,n){return t instanceof n}:function(t,n){if(t instanceof n)return!0;if("object"==typeof t&&null!==t){var r;const o=n.prototype[Symbol.toStringTag];if(o===(Symbol.toStringTag in t?t[Symbol.toStringTag]:null===(r=t.constructor)||void 0===r?void 0:r.name)){const s=Md(t);throw new Error(`Cannot use ${o} "${s}" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.`)}}return!1};class _D{constructor(t,n="GraphQL request",r={line:1,column:1}){"string"==typeof t||Ra(!1,`Body must be a string. Received: ${Md(t)}.`),this.body=t,this.name=n,this.locationOffset=r,this.locationOffset.line>0||Ra(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||Ra(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}class Ga{constructor(t,n={}){const r=function XF(e){return JF(e,_D)}(t)?t:new _D(t);this._lexer=new BF(r),this._options=n,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){const t=this.expectToken(T.NAME);return this.node(t,{kind:I.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:I.DOCUMENT,definitions:this.many(T.SOF,this.parseDefinition,T.EOF)})}parseDefinition(){if(this.peek(T.BRACE_L))return this.parseOperationDefinition();const t=this.peekDescription(),n=t?this._lexer.lookahead():this._lexer.token;if(n.kind===T.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw He(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){const t=this._lexer.token;if(this.peek(T.BRACE_L))return this.node(t,{kind:I.OPERATION_DEFINITION,operation:lr.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const n=this.parseOperationType();let r;return this.peek(T.NAME)&&(r=this.parseName()),this.node(t,{kind:I.OPERATION_DEFINITION,operation:n,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const t=this.expectToken(T.NAME);switch(t.value){case"query":return lr.QUERY;case"mutation":return lr.MUTATION;case"subscription":return lr.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(T.PAREN_L,this.parseVariableDefinition,T.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:I.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(T.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(T.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const t=this._lexer.token;return this.expectToken(T.DOLLAR),this.node(t,{kind:I.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:I.SELECTION_SET,selections:this.many(T.BRACE_L,this.parseSelection,T.BRACE_R)})}parseSelection(){return this.peek(T.SPREAD)?this.parseFragment():this.parseField()}parseField(){const t=this._lexer.token,n=this.parseName();let r,o;return this.expectOptionalToken(T.COLON)?(r=n,o=this.parseName()):o=n,this.node(t,{kind:I.FIELD,alias:r,name:o,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(T.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){return this.optionalMany(T.PAREN_L,t?this.parseConstArgument:this.parseArgument,T.PAREN_R)}parseArgument(t=!1){const n=this._lexer.token,r=this.parseName();return this.expectToken(T.COLON),this.node(n,{kind:I.ARGUMENT,name:r,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const t=this._lexer.token;this.expectToken(T.SPREAD);const n=this.expectOptionalKeyword("on");return!n&&this.peek(T.NAME)?this.node(t,{kind:I.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:I.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const t=this._lexer.token;return this.expectKeyword("fragment"),this.node(t,!0===this._options.allowLegacyFragmentVariables?{kind:I.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}:{kind:I.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()}parseValueLiteral(t){const n=this._lexer.token;switch(n.kind){case T.BRACKET_L:return this.parseList(t);case T.BRACE_L:return this.parseObject(t);case T.INT:return this.advanceLexer(),this.node(n,{kind:I.INT,value:n.value});case T.FLOAT:return this.advanceLexer(),this.node(n,{kind:I.FLOAT,value:n.value});case T.STRING:case T.BLOCK_STRING:return this.parseStringLiteral();case T.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:I.BOOLEAN,value:!0});case"false":return this.node(n,{kind:I.BOOLEAN,value:!1});case"null":return this.node(n,{kind:I.NULL});default:return this.node(n,{kind:I.ENUM,value:n.value})}case T.DOLLAR:if(t){if(this.expectToken(T.DOLLAR),this._lexer.token.kind===T.NAME)throw He(this._lexer.source,n.start,`Unexpected variable "$${this._lexer.token.value}" in constant value.`);throw this.unexpected(n)}return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:I.STRING,value:t.value,block:t.kind===T.BLOCK_STRING})}parseList(t){return this.node(this._lexer.token,{kind:I.LIST,values:this.any(T.BRACKET_L,()=>this.parseValueLiteral(t),T.BRACKET_R)})}parseObject(t){return this.node(this._lexer.token,{kind:I.OBJECT,fields:this.any(T.BRACE_L,()=>this.parseObjectField(t),T.BRACE_R)})}parseObjectField(t){const n=this._lexer.token,r=this.parseName();return this.expectToken(T.COLON),this.node(n,{kind:I.OBJECT_FIELD,name:r,value:this.parseValueLiteral(t)})}parseDirectives(t){const n=[];for(;this.peek(T.AT);)n.push(this.parseDirective(t));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){const n=this._lexer.token;return this.expectToken(T.AT),this.node(n,{kind:I.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){const t=this._lexer.token;let n;if(this.expectOptionalToken(T.BRACKET_L)){const r=this.parseTypeReference();this.expectToken(T.BRACKET_R),n=this.node(t,{kind:I.LIST_TYPE,type:r})}else n=this.parseNamedType();return this.expectOptionalToken(T.BANG)?this.node(t,{kind:I.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:I.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(T.STRING)||this.peek(T.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");const r=this.parseConstDirectives(),o=this.many(T.BRACE_L,this.parseOperationTypeDefinition,T.BRACE_R);return this.node(t,{kind:I.SCHEMA_DEFINITION,description:n,directives:r,operationTypes:o})}parseOperationTypeDefinition(){const t=this._lexer.token,n=this.parseOperationType();this.expectToken(T.COLON);const r=this.parseNamedType();return this.node(t,{kind:I.OPERATION_TYPE_DEFINITION,operation:n,type:r})}parseScalarTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");const r=this.parseName(),o=this.parseConstDirectives();return this.node(t,{kind:I.SCALAR_TYPE_DEFINITION,description:n,name:r,directives:o})}parseObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");const r=this.parseName(),o=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(t,{kind:I.OBJECT_TYPE_DEFINITION,description:n,name:r,interfaces:o,directives:i,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(T.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(T.BRACE_L,this.parseFieldDefinition,T.BRACE_R)}parseFieldDefinition(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseName(),o=this.parseArgumentDefs();this.expectToken(T.COLON);const i=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(t,{kind:I.FIELD_DEFINITION,description:n,name:r,arguments:o,type:i,directives:s})}parseArgumentDefs(){return this.optionalMany(T.PAREN_L,this.parseInputValueDef,T.PAREN_R)}parseInputValueDef(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseName();this.expectToken(T.COLON);const o=this.parseTypeReference();let i;this.expectOptionalToken(T.EQUALS)&&(i=this.parseConstValueLiteral());const s=this.parseConstDirectives();return this.node(t,{kind:I.INPUT_VALUE_DEFINITION,description:n,name:r,type:o,defaultValue:i,directives:s})}parseInterfaceTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");const r=this.parseName(),o=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(t,{kind:I.INTERFACE_TYPE_DEFINITION,description:n,name:r,interfaces:o,directives:i,fields:s})}parseUnionTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");const r=this.parseName(),o=this.parseConstDirectives(),i=this.parseUnionMemberTypes();return this.node(t,{kind:I.UNION_TYPE_DEFINITION,description:n,name:r,directives:o,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(T.EQUALS)?this.delimitedMany(T.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");const r=this.parseName(),o=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();return this.node(t,{kind:I.ENUM_TYPE_DEFINITION,description:n,name:r,directives:o,values:i})}parseEnumValuesDefinition(){return this.optionalMany(T.BRACE_L,this.parseEnumValueDefinition,T.BRACE_R)}parseEnumValueDefinition(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseEnumValueName(),o=this.parseConstDirectives();return this.node(t,{kind:I.ENUM_VALUE_DEFINITION,description:n,name:r,directives:o})}parseEnumValueName(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw He(this._lexer.source,this._lexer.token.start,`${Qa(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");const r=this.parseName(),o=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();return this.node(t,{kind:I.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:r,directives:o,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(T.BRACE_L,this.parseInputValueDef,T.BRACE_R)}parseTypeSystemExtension(){const t=this._lexer.lookahead();if(t.kind===T.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const n=this.parseConstDirectives(),r=this.optionalMany(T.BRACE_L,this.parseOperationTypeDefinition,T.BRACE_R);if(0===n.length&&0===r.length)throw this.unexpected();return this.node(t,{kind:I.SCHEMA_EXTENSION,directives:n,operationTypes:r})}parseScalarTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const n=this.parseName(),r=this.parseConstDirectives();if(0===r.length)throw this.unexpected();return this.node(t,{kind:I.SCALAR_TYPE_EXTENSION,name:n,directives:r})}parseObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const n=this.parseName(),r=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(0===r.length&&0===o.length&&0===i.length)throw this.unexpected();return this.node(t,{kind:I.OBJECT_TYPE_EXTENSION,name:n,interfaces:r,directives:o,fields:i})}parseInterfaceTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const n=this.parseName(),r=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(0===r.length&&0===o.length&&0===i.length)throw this.unexpected();return this.node(t,{kind:I.INTERFACE_TYPE_EXTENSION,name:n,interfaces:r,directives:o,fields:i})}parseUnionTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const n=this.parseName(),r=this.parseConstDirectives(),o=this.parseUnionMemberTypes();if(0===r.length&&0===o.length)throw this.unexpected();return this.node(t,{kind:I.UNION_TYPE_EXTENSION,name:n,directives:r,types:o})}parseEnumTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const n=this.parseName(),r=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();if(0===r.length&&0===o.length)throw this.unexpected();return this.node(t,{kind:I.ENUM_TYPE_EXTENSION,name:n,directives:r,values:o})}parseInputObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const n=this.parseName(),r=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();if(0===r.length&&0===o.length)throw this.unexpected();return this.node(t,{kind:I.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:r,fields:o})}parseDirectiveDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(T.AT);const r=this.parseName(),o=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const s=this.parseDirectiveLocations();return this.node(t,{kind:I.DIRECTIVE_DEFINITION,description:n,name:r,arguments:o,repeatable:i,locations:s})}parseDirectiveLocations(){return this.delimitedMany(T.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const t=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(za,n.value))return n;throw this.unexpected(t)}node(t,n){return!0!==this._options.noLocation&&(n.loc=new iN(t,this._lexer.lastToken,this._lexer.source)),n}peek(t){return this._lexer.token.kind===t}expectToken(t){const n=this._lexer.token;if(n.kind===t)return this.advanceLexer(),n;throw He(this._lexer.source,n.start,`Expected ${ID(t)}, found ${Qa(n)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t&&(this.advanceLexer(),!0)}expectKeyword(t){const n=this._lexer.token;if(n.kind!==T.NAME||n.value!==t)throw He(this._lexer.source,n.start,`Expected "${t}", found ${Qa(n)}.`);this.advanceLexer()}expectOptionalKeyword(t){const n=this._lexer.token;return n.kind===T.NAME&&n.value===t&&(this.advanceLexer(),!0)}unexpected(t){const n=t??this._lexer.token;return He(this._lexer.source,n.start,`Unexpected ${Qa(n)}.`)}any(t,n,r){this.expectToken(t);const o=[];for(;!this.expectOptionalToken(r);)o.push(n.call(this));return o}optionalMany(t,n,r){if(this.expectOptionalToken(t)){const o=[];do{o.push(n.call(this))}while(!this.expectOptionalToken(r));return o}return[]}many(t,n,r){this.expectToken(t);const o=[];do{o.push(n.call(this))}while(!this.expectOptionalToken(r));return o}delimitedMany(t,n){this.expectOptionalToken(t);const r=[];do{r.push(n.call(this))}while(this.expectOptionalToken(t));return r}advanceLexer(){const{maxTokens:t}=this._options,n=this._lexer.advance();if(n.kind!==T.EOF&&(++this._tokenCounter,void 0!==t&&this._tokenCounter>t))throw He(this._lexer.source,n.start,`Document contains more that ${t} tokens. Parsing aborted.`)}}function Qa(e){const t=e.value;return ID(e.kind)+(null!=t?` "${t}"`:"")}function ID(e){return function jF(e){return e===T.BANG||e===T.DOLLAR||e===T.AMP||e===T.PAREN_L||e===T.PAREN_R||e===T.SPREAD||e===T.COLON||e===T.EQUALS||e===T.AT||e===T.BRACKET_L||e===T.BRACKET_R||e===T.BRACE_L||e===T.PIPE||e===T.BRACE_R}(e)?`"${e}"`:e}var Ka=new Map,gh=new Map,MD=!0,Ya=!1;function kD(e){return e.replace(/[\s,]+/g," ").trim()}function rH(e){var t=kD(e);if(!Ka.has(t)){var n=function ZF(e,t){const n=new Ga(e,t),r=n.parseDocument();return Object.defineProperty(r,"tokenCount",{enumerable:!1,value:n.tokenCount}),r}(e,{experimentalFragmentVariables:Ya,allowLegacyFragmentVariables:Ya});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");Ka.set(t,function nH(e){var t=new Set(e.definitions);t.forEach(function(r){r.loc&&delete r.loc,Object.keys(r).forEach(function(o){var i=r[o];i&&"object"==typeof i&&t.add(i)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}(function tH(e){var t=new Set,n=[];return e.definitions.forEach(function(r){if("FragmentDefinition"===r.kind){var o=r.name.value,i=function eH(e){return kD(e.source.body.substring(e.start,e.end))}(r.loc),s=gh.get(o);s&&!s.has(i)?MD&&console.warn("Warning: fragment with name "+o+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):s||gh.set(o,s=new Set),s.add(i),t.has(i)||(t.add(i),n.push(r))}else n.push(r)}),w(w({},e),{definitions:n})}(n)))}return Ka.get(t)}function Do(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];"string"==typeof e&&(e=[e]);var r=e[0];return t.forEach(function(o,i){r+=o&&"Document"===o.kind?o.loc.source.body:o,r+=e[i+1]}),rH(r)}var Hi_gql=Do,Hi_resetCaches=function oH(){Ka.clear(),gh.clear()},Hi_disableFragmentWarnings=function iH(){MD=!1},Hi_enableExperimentalFragmentVariables=function sH(){Ya=!0},Hi_disableExperimentalFragmentVariables=function aH(){Ya=!1};(function(e){e.gql=Hi_gql,e.resetCaches=Hi_resetCaches,e.disableFragmentWarnings=Hi_disableFragmentWarnings,e.enableExperimentalFragmentVariables=Hi_enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=Hi_disableExperimentalFragmentVariables})(Do||(Do={})),Do.default=Do;class cH extends Mt{constructor(t,n){super()}schedule(t,n=0){return this}}const Ja={setInterval(e,t,...n){const{delegate:r}=Ja;return r?.setInterval?r.setInterval(e,t,...n):setInterval(e,t,...n)},clearInterval(e){const{delegate:t}=Ja;return(t?.clearInterval||clearInterval)(e)},delegate:void 0};class lH extends cH{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){var r;if(this.closed)return this;this.state=t;const o=this.id,i=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(i,o,n)),this.pending=!0,this.delay=n,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(i,this.id,n),this}requestAsyncId(t,n,r=0){return Ja.setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,n,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return n;null!=n&&Ja.clearInterval(n)}execute(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(t,n);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let o,r=!1;try{this.work(t)}catch(i){r=!0,o=i||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:t,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,br(r,this),null!=t&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,super.unsubscribe()}}}const RD={now:()=>(RD.delegate||Date).now(),delegate:void 0};class Li{constructor(t,n=Li.now){this.schedulerActionCtor=t,this.now=n}schedule(t,n=0,r){return new this.schedulerActionCtor(this,t).schedule(r,n)}}Li.now=RD.now;class dH extends Li{constructor(t,n=Li.now){super(t,n),this.actions=[],this._active=!1}flush(t){const{actions:n}=this;if(this._active)return void n.push(t);let r;this._active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}}}const fH=new class hH extends dH{}(class uH extends lH{constructor(t,n){super(t,n),this.scheduler=t,this.work=n}schedule(t,n=0){return n>0?super.schedule(t,n):(this.delay=n,this.state=t,this.scheduler.flush(this),this)}execute(t,n){return n>0||this.closed?super.execute(t,n):this._execute(t,n)}requestAsyncId(t,n,r=0){return null!=r&&r>0||null==r&&this.delay>0?super.requestAsyncId(t,n,r):(t.flush(this),0)}});function OD(...e){return function pH(){return af(1)}()(ko(e,es(e)))}function AD(e){return new we(t=>(e().then(n=>{t.closed||(t.next(n),t.complete())},n=>{t.closed||t.error(n)}),()=>t.unsubscribe()))}class gH{constructor(t){this.zone=t,this.now=Date.now?Date.now:()=>+new Date}schedule(t,n=0,r){return this.zone.run(()=>fH.schedule(t,n,r))}}function ND(e){return e[Ji]=()=>e,e}function xD(e,t){return e.pipe(pc(new gH(t)))}function FD(e,t,n){return e&&typeof e[t]<"u"?e[t]:n}class SH{constructor(t,n,r){this.obsQuery=t;const o=xD(ko(ND(this.obsQuery)),n);this.valueChanges=r.useInitialLoading?o.pipe(function vH(e){return function(n){return new we(function(o){const i=e.getCurrentResult(),{loading:s,errors:a,error:l,partial:u,data:d}=i,{partialRefetch:h,fetchPolicy:f}=e.options,p=a||l;return h&&u&&(!d||0===Object.keys(d).length)&&"cache-only"!==f&&!s&&!p&&o.next({...i,loading:!0,networkStatus:re.loading}),n.subscribe(o)})}}(this.obsQuery)):o,this.queryId=this.obsQuery.queryId}get options(){return this.obsQuery.options}get variables(){return this.obsQuery.variables}result(){return this.obsQuery.result()}getCurrentResult(){return this.obsQuery.getCurrentResult()}getLastResult(){return this.obsQuery.getLastResult()}getLastError(){return this.obsQuery.getLastError()}resetLastResults(){return this.obsQuery.resetLastResults()}refetch(t){return this.obsQuery.refetch(t)}fetchMore(t){return this.obsQuery.fetchMore(t)}subscribeToMore(t){return this.obsQuery.subscribeToMore(t)}updateQuery(t){return this.obsQuery.updateQuery(t)}stopPolling(){return this.obsQuery.stopPolling()}startPolling(t){return this.obsQuery.startPolling(t)}setOptions(t){return this.obsQuery.setOptions(t)}setVariables(t){return this.obsQuery.setVariables(t)}}const bH=new H("APOLLO_FLAGS"),HD=new H("APOLLO_OPTIONS"),DH=new H("APOLLO_NAMED_OPTIONS");class LD{constructor(t,n,r){this.ngZone=t,this.flags=n,this._client=r,this.useInitialLoading=FD(n,"useInitialLoading",!1),this.useMutationLoading=FD(n,"useMutationLoading",!1)}watchQuery(t){return new SH(this.ensureClient().watchQuery({...t}),this.ngZone,{useInitialLoading:this.useInitialLoading,...t})}query(t){return AD(()=>this.ensureClient().query({...t}))}mutate(t){return function mH(e,t){return t?e.pipe(function yH(...e){const t=es(e);return Gn((n,r)=>{(t?OD(e,n,t):OD(e,n)).subscribe(r)})}({loading:!0}),at(n=>({...n,loading:!!n.loading}))):e.pipe(at(n=>({...n,loading:!1})))}(AD(()=>this.ensureClient().mutate({...t})),t.useMutationLoading??this.useMutationLoading)}subscribe(t,n){const r=ko(ND(this.ensureClient().subscribe({...t})));return n&&!0!==n.useZone?r:xD(r,this.ngZone)}getClient(){return this.client}setClient(t){this.client=t}get client(){return this._client}set client(t){if(this._client)throw new Error("Client has been already defined");this._client=t}ensureClient(){return this.checkInstance(),this._client}checkInstance(){if(!this._client)throw new Error("Client has not been defined yet")}}let UD=(()=>{class e extends LD{constructor(n,r,o,i){if(super(n,i),this._ngZone=n,this.map=new Map,r&&this.createDefault(r),o&&"object"==typeof o)for(let s in o)o.hasOwnProperty(s)&&this.create(o[s],s)}create(n,r){vh(r)?this.createDefault(n):this.createNamed(r,n)}default(){return this}use(n){return vh(n)?this.default():this.map.get(n)}createDefault(n){if(this.getClient())throw new Error("Apollo has been already created.");return this.setClient(new fh(n))}createNamed(n,r){if(this.map.has(n))throw new Error(`Client ${n} has been already created`);this.map.set(n,new LD(this._ngZone,this.flags,new fh(r)))}removeClient(n){vh(n)?this._client=void 0:this.map.delete(n)}}return e.\u0275fac=function(n){return new(n||e)(j($e),j(HD,8),j(DH,8),j(bH,8))},e.\u0275prov=X({token:e,factory:e.\u0275fac}),e})();function vh(e){return!e||"default"===e}const wH=[UD];let PH=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=In({type:e}),e.\u0275inj=an({providers:wH}),e})();const BD=function TH(e,...t){return Do(e,...t)};var jD=function(){function e(){this.assumeImmutableResults=!1,this.getFragmentDoc=Oi(aN,{max:wn["cache.fragmentQueryDocuments"]||1e3,cache:Na})}return e.prototype.lookupFragment=function(t){return null},e.prototype.batch=function(t){var o,n=this;return this.performTransaction(function(){return o=t.update(n)},"string"==typeof t.optimistic?t.optimistic:!1===t.optimistic?null:void 0),o},e.prototype.recordOptimisticTransaction=function(t,n){this.performTransaction(t,n)},e.prototype.transformDocument=function(t){return t},e.prototype.transformForLink=function(t){return t},e.prototype.identify=function(t){},e.prototype.gc=function(){return[]},e.prototype.modify=function(t){return!1},e.prototype.readQuery=function(t,n){return void 0===n&&(n=!!t.optimistic),this.read(w(w({},t),{rootId:t.id||"ROOT_QUERY",optimistic:n}))},e.prototype.watchFragment=function(t){var n=this,r=t.fragment,o=t.fragmentName,i=t.from,s=t.optimistic,a=void 0===s||s,l=qt(t,["fragment","fragmentName","from","optimistic"]),u=this.getFragmentDoc(r,o),d=typeof i>"u"||"string"==typeof i?i:this.identify(i),h=!!t[Symbol.for("apollo.dataMasking")];if(!1!==globalThis.__DEV__){var f=o||ab(r).name.value;d||!1!==globalThis.__DEV__&&A.warn(1,f)}var y,p=w(w({},l),{returnPartialData:!0,id:d,query:u,optimistic:a});return new le(function(g){return n.watch(w(w({},p),{immediate:!0,callback:function(b){var v=h?pD(b.result,r,n,o):b.result;if(!y||!rD(u,{data:y?.result},{data:v})){var D={data:v,complete:!!b.complete};b.missing&&(D.missing=La(b.missing.map(function(S){return S.missing}))),y=w(w({},b),{result:v}),g.next(D)}}}))})},e.prototype.readFragment=function(t,n){return void 0===n&&(n=!!t.optimistic),this.read(w(w({},t),{query:this.getFragmentDoc(t.fragment,t.fragmentName),rootId:t.id,optimistic:n}))},e.prototype.writeQuery=function(t){var n=t.id,r=t.data,o=qt(t,["id","data"]);return this.write(Object.assign(o,{dataId:n||"ROOT_QUERY",result:r}))},e.prototype.writeFragment=function(t){var n=t.id,r=t.data,o=t.fragment,i=t.fragmentName,s=qt(t,["id","data","fragment","fragmentName"]);return this.write(Object.assign(s,{query:this.getFragmentDoc(o,i),dataId:n,result:r}))},e.prototype.updateQuery=function(t,n){return this.batch({update:function(r){var o=r.readQuery(t),i=n(o);return null==i?o:(r.writeQuery(w(w({},t),{data:i})),i)}})},e.prototype.updateFragment=function(t,n){return this.batch({update:function(r){var o=r.readFragment(t),i=n(o);return null==i?o:(r.writeFragment(w(w({},t),{data:i})),i)}})},e}();!1!==globalThis.__DEV__&&(jD.prototype.getMemoryInternals=SN);var VD=function(e){function t(n,r,o,i){var s,a=e.call(this,n)||this;if(a.message=n,a.path=r,a.query=o,a.variables=i,Array.isArray(a.path)){a.missing=a.message;for(var l=a.path.length-1;l>=0;--l)a.missing=((s={})[a.path[l]]=a.missing,s)}else a.missing=a.path;return a.__proto__=t.prototype,a}return kt(t,e),t}(Error),Le=Object.prototype.hasOwnProperty;function Ui(e){return null==e}function $D(e,t){var n=e.__typename,r=e.id,o=e._id;if("string"==typeof n&&(t&&(t.keyObject=Ui(r)?Ui(o)?void 0:{_id:o}:{id:r}),Ui(r)&&!Ui(o)&&(r=o),!Ui(r)))return"".concat(n,":").concat("number"==typeof r||"string"==typeof r?r:JSON.stringify(r))}var qD={dataIdFromObject:$D,addTypename:!0,resultCaching:!0,canonizeResults:!1};function zD(e){var t=e.canonizeResults;return void 0===t?qD.canonizeResults:t}var WD=/^[_a-z][_0-9a-z]*/i;function jn(e){var t=e.match(WD);return t?t[0]:e}function Sh(e,t,n){return!!be(t)&&(De(t)?t.every(function(r){return Sh(e,r,n)}):e.selections.every(function(r){if(Hn(r)&&_i(r,n)){var o=Pn(r);return Le.call(t,o)&&(!r.selectionSet||Sh(r.selectionSet,t[o],n))}return!0}))}function wo(e){return be(e)&&!oe(e)&&!De(e)}function GD(e,t){var n=ao(fo(e));return{fragmentMap:n,lookupFragment:function(r){var o=n[r];return!o&&t&&(o=t.lookup(r)),o||null}}}var Xa=Object.create(null),bh=function(){return Xa},QD=Object.create(null),Bi=function(){function e(t,n){var r=this;this.policies=t,this.group=n,this.data=Object.create(null),this.rootIds=Object.create(null),this.refs=Object.create(null),this.getFieldValue=function(o,i){return qa(oe(o)?r.get(o.__ref,i):o&&o[i])},this.canRead=function(o){return oe(o)?r.has(o.__ref):"object"==typeof o},this.toReference=function(o,i){if("string"==typeof o)return lo(o);if(oe(o))return o;var s=r.policies.identify(o)[0];if(s){var a=lo(s);return i&&r.merge(s,o),a}}}return e.prototype.toObject=function(){return w({},this.data)},e.prototype.has=function(t){return void 0!==this.lookup(t,!0)},e.prototype.get=function(t,n){if(this.group.depend(t,n),Le.call(this.data,t)){var r=this.data[t];if(r&&Le.call(r,n))return r[n]}return"__typename"===n&&Le.call(this.policies.rootTypenamesById,t)?this.policies.rootTypenamesById[t]:this instanceof Vn?this.parent.get(t,n):void 0},e.prototype.lookup=function(t,n){return n&&this.group.depend(t,"__exists"),Le.call(this.data,t)?this.data[t]:this instanceof Vn?this.parent.lookup(t,n):this.policies.rootTypenamesById[t]?Object.create(null):void 0},e.prototype.merge=function(t,n){var o,r=this;oe(t)&&(t=t.__ref),oe(n)&&(n=n.__ref);var i="string"==typeof t?this.lookup(o=t):t,s="string"==typeof n?this.lookup(o=n):n;if(s){A("string"==typeof o,2);var a=new Ln(MH).merge(i,s);if(this.data[o]=a,a!==i&&(delete this.refs[o],this.group.caching)){var l=Object.create(null);i||(l.__exists=1),Object.keys(s).forEach(function(u){if(!i||i[u]!==a[u]){l[u]=1;var d=jn(u);d!==u&&!r.policies.hasKeyArgs(a.__typename,d)&&(l[d]=1),void 0===a[u]&&!(r instanceof Vn)&&delete a[u]}}),l.__typename&&!(i&&i.__typename)&&this.policies.rootTypenamesById[o]===a.__typename&&delete l.__typename,Object.keys(l).forEach(function(u){return r.group.dirty(o,u)})}}},e.prototype.modify=function(t,n){var r=this,o=this.lookup(t);if(o){var i=Object.create(null),s=!1,a=!0,l={DELETE:Xa,INVALIDATE:QD,isReference:oe,toReference:this.toReference,canRead:this.canRead,readField:function(u,d){return r.policies.readField("string"==typeof u?{fieldName:u,from:d||lo(t)}:u,{store:r})}};if(Object.keys(o).forEach(function(u){var d=jn(u),h=o[u];if(void 0!==h){var f="function"==typeof n?n:n[u]||n[d];if(f){var p=f===bh?Xa:f(qa(h),w(w({},l),{fieldName:d,storeFieldName:u,storage:r.getStorage(t,u)}));if(p===QD)r.group.dirty(t,u);else if(p===Xa&&(p=void 0),p!==h&&(i[u]=p,s=!0,h=p,!1!==globalThis.__DEV__)){var y=function(E){if(void 0===r.lookup(E.__ref))return!1!==globalThis.__DEV__&&A.warn(3,E),!0};if(oe(p))y(p);else if(Array.isArray(p))for(var g=!1,b=void 0,v=0,D=p;v<D.length;v++){var S=D[v];if(oe(S)){if(g=!0,y(S))break}else"object"==typeof S&&S&&r.policies.identify(S)[0]&&(b=S);if(g&&void 0!==b){!1!==globalThis.__DEV__&&A.warn(4,b);break}}}}void 0!==h&&(a=!1)}}),s)return this.merge(t,i),a&&(this instanceof Vn?this.data[t]=void 0:delete this.data[t],this.group.dirty(t,"__exists")),!0}return!1},e.prototype.delete=function(t,n,r){var o,i=this.lookup(t);if(i){var s=this.getFieldValue(i,"__typename"),a=n&&r?this.policies.getStoreFieldName({typename:s,fieldName:n,args:r}):n;return this.modify(t,a?((o={})[a]=bh,o):bh)}return!1},e.prototype.evict=function(t,n){var r=!1;return t.id&&(Le.call(this.data,t.id)&&(r=this.delete(t.id,t.fieldName,t.args)),this instanceof Vn&&this!==n&&(r=this.parent.evict(t,n)||r),(t.fieldName||r)&&this.group.dirty(t.id,t.fieldName||"__exists")),r},e.prototype.clear=function(){this.replace(null)},e.prototype.extract=function(){var t=this,n=this.toObject(),r=[];return this.getRootIdSet().forEach(function(o){Le.call(t.policies.rootTypenamesById,o)||r.push(o)}),r.length&&(n.__META={extraRootIds:r.sort()}),n},e.prototype.replace=function(t){var n=this;if(Object.keys(this.data).forEach(function(i){t&&Le.call(t,i)||n.delete(i)}),t){var r=t.__META,o=qt(t,["__META"]);Object.keys(o).forEach(function(i){n.merge(i,o[i])}),r&&r.extraRootIds.forEach(this.retain,this)}},e.prototype.retain=function(t){return this.rootIds[t]=(this.rootIds[t]||0)+1},e.prototype.release=function(t){if(this.rootIds[t]>0){var n=--this.rootIds[t];return n||delete this.rootIds[t],n}return 0},e.prototype.getRootIdSet=function(t){return void 0===t&&(t=new Set),Object.keys(this.rootIds).forEach(t.add,t),this instanceof Vn?this.parent.getRootIdSet(t):Object.keys(this.policies.rootTypenamesById).forEach(t.add,t),t},e.prototype.gc=function(){var t=this,n=this.getRootIdSet(),r=this.toObject();n.forEach(function(s){Le.call(r,s)&&(Object.keys(t.findChildRefIds(s)).forEach(n.add,n),delete r[s])});var o=Object.keys(r);if(o.length){for(var i=this;i instanceof Vn;)i=i.parent;o.forEach(function(s){return i.delete(s)})}return o},e.prototype.findChildRefIds=function(t){if(!Le.call(this.refs,t)){var n=this.refs[t]=Object.create(null),r=this.data[t];if(!r)return n;var o=new Set([r]);o.forEach(function(i){oe(i)&&(n[i.__ref]=!0),be(i)&&Object.keys(i).forEach(function(s){var a=i[s];be(a)&&o.add(a)})})}return this.refs[t]},e.prototype.makeCacheKey=function(){return this.group.keyMaker.lookupArray(arguments)},e}(),KD=function(){function e(t,n){void 0===n&&(n=null),this.caching=t,this.parent=n,this.d=null,this.resetCaching()}return e.prototype.resetCaching=function(){this.d=this.caching?Jb():null,this.keyMaker=new Un(fr)},e.prototype.depend=function(t,n){if(this.d){this.d(Dh(t,n));var r=jn(n);r!==n&&this.d(Dh(t,r)),this.parent&&this.parent.depend(t,n)}},e.prototype.dirty=function(t,n){this.d&&this.d.dirty(Dh(t,n),"__exists"===n?"forget":"setDirty")},e}();function Dh(e,t){return t+"#"+e}function YD(e,t){ji(e)&&e.group.depend(t,"__exists")}!function(e){var t=function(n){function r(o){var s=o.resultCaching,l=o.seed,u=n.call(this,o.policies,new KD(void 0===s||s))||this;return u.stump=new IH(u),u.storageTrie=new Un(fr),l&&u.replace(l),u}return kt(r,n),r.prototype.addLayer=function(o,i){return this.stump.addLayer(o,i)},r.prototype.removeLayer=function(){return this},r.prototype.getStorage=function(){return this.storageTrie.lookupArray(arguments)},r}(e);e.Root=t}(Bi||(Bi={}));var Vn=function(e){function t(n,r,o,i){var s=e.call(this,r.policies,i)||this;return s.id=n,s.parent=r,s.replay=o,s.group=i,o(s),s}return kt(t,e),t.prototype.addLayer=function(n,r){return new t(n,this,r,this.group)},t.prototype.removeLayer=function(n){var r=this,o=this.parent.removeLayer(n);return n===this.id?(this.group.caching&&Object.keys(this.data).forEach(function(i){var s=r.data[i],a=o.lookup(i);a?s?s!==a&&Object.keys(s).forEach(function(l){fe(s[l],a[l])||r.group.dirty(i,l)}):(r.group.dirty(i,"__exists"),Object.keys(a).forEach(function(l){r.group.dirty(i,l)})):r.delete(i)}),o):o===this.parent?this:o.addLayer(this.id,this.replay)},t.prototype.toObject=function(){return w(w({},this.parent.toObject()),this.data)},t.prototype.findChildRefIds=function(n){var r=this.parent.findChildRefIds(n);return Le.call(this.data,n)?w(w({},r),e.prototype.findChildRefIds.call(this,n)):r},t.prototype.getStorage=function(){for(var n=this.parent;n.parent;)n=n.parent;return n.getStorage.apply(n,arguments)},t}(Bi),IH=function(e){function t(n){return e.call(this,"EntityStore.Stump",n,function(){},new KD(n.group.caching,n.group))||this}return kt(t,e),t.prototype.removeLayer=function(){return this},t.prototype.merge=function(n,r){return this.parent.merge(n,r)},t}(Vn);function MH(e,t,n){var r=e[n],o=t[n];return fe(r,o)?r:o}function ji(e){return!!(e instanceof Bi&&e.group.caching)}var JD=function(){function e(){this.known=new(Bd?WeakSet:Set),this.pool=new Un(fr),this.passes=new WeakMap,this.keysByJSON=new Map,this.empty=this.admit({})}return e.prototype.isKnown=function(t){return be(t)&&this.known.has(t)},e.prototype.pass=function(t){if(be(t)){var n=function kH(e){return be(e)?De(e)?e.slice(0):w({__proto__:Object.getPrototypeOf(e)},e):e}(t);return this.passes.set(n,t),n}return t},e.prototype.admit=function(t){var n=this;if(be(t)){var r=this.passes.get(t);if(r)return r;switch(Object.getPrototypeOf(t)){case Array.prototype:if(this.known.has(t))return t;var i=t.map(this.admit,this);return(s=this.pool.lookupArray(i)).array||(this.known.add(s.array=i),!1!==globalThis.__DEV__&&Object.freeze(i)),s.array;case null:case Object.prototype:if(this.known.has(t))return t;var a=Object.getPrototypeOf(t),l=[a],u=this.sortedKeys(t);l.push(u.json);var s,d=l.length;if(u.sorted.forEach(function(p){l.push(n.admit(t[p]))}),!(s=this.pool.lookupArray(l)).object){var h=s.object=Object.create(a);this.known.add(h),u.sorted.forEach(function(p,y){h[p]=l[d+y]}),!1!==globalThis.__DEV__&&Object.freeze(h)}return s.object}}return t},e.prototype.sortedKeys=function(t){var n=Object.keys(t),r=this.pool.lookupArray(n);if(!r.keys){n.sort();var o=JSON.stringify(n);(r.keys=this.keysByJSON.get(o))||this.keysByJSON.set(o,r.keys={sorted:n,json:o})}return r.keys},e}();function XD(e){return[e.selectionSet,e.objectOrReference,e.context,e.context.canonizeResults]}var RH=function(){function e(t){var n=this;this.knownResults=new(fr?WeakMap:Map),this.config=vo(t,{addTypename:!1!==t.addTypename,canonizeResults:zD(t)}),this.canon=t.canon||new JD,this.executeSelectionSet=Oi(function(r){var o,i=r.context.canonizeResults,s=XD(r);s[3]=!i;var a=(o=n.executeSelectionSet).peek.apply(o,s);return a?i?w(w({},a),{result:n.canon.admit(a.result)}):a:(YD(r.context.store,r.enclosingRef.__ref),n.execSelectionSetImpl(r))},{max:this.config.resultCacheMaxSize||wn["inMemoryCache.executeSelectionSet"]||5e4,keyArgs:XD,makeCacheKey:function(r,o,i,s){if(ji(i.store))return i.store.makeCacheKey(r,oe(o)?o.__ref:o,i.varString,s)}}),this.executeSubSelectedArray=Oi(function(r){return YD(r.context.store,r.enclosingRef.__ref),n.execSubSelectedArrayImpl(r)},{max:this.config.resultCacheMaxSize||wn["inMemoryCache.executeSubSelectedArray"]||1e4,makeCacheKey:function(r){var o=r.field,i=r.array,s=r.context;if(ji(s.store))return s.store.makeCacheKey(o,i,s.varString)}})}return e.prototype.resetCanon=function(){this.canon=new JD},e.prototype.diffQueryAgainstStore=function(t){var n=t.store,r=t.query,o=t.rootId,i=void 0===o?"ROOT_QUERY":o,s=t.variables,a=t.returnPartialData,l=void 0===a||a,u=t.canonizeResults,d=void 0===u?this.config.canonizeResults:u,h=this.config.cache.policies;s=w(w({},Hd(sb(r))),s);var y,f=lo(i),p=this.executeSelectionSet({selectionSet:Ei(r).selectionSet,objectOrReference:f,enclosingRef:f,context:w({store:n,query:r,policies:h,variables:s,varString:Fn(s),canonizeResults:d},GD(r,this.config.fragments))});if(p.missing&&(y=[new VD(OH(p.missing),p.missing,r,s)],!l))throw y[0];return{result:p.result,complete:!y,missing:y}},e.prototype.isFresh=function(t,n,r,o){if(ji(o.store)&&this.knownResults.get(t)===r){var i=this.executeSelectionSet.peek(r,n,o,this.canon.isKnown(t));if(i&&t===i.result)return!0}return!1},e.prototype.execSelectionSetImpl=function(t){var n=this,r=t.selectionSet,o=t.objectOrReference,i=t.enclosingRef,s=t.context;if(oe(o)&&!s.policies.rootTypenamesById[o.__ref]&&!s.store.has(o.__ref))return{result:this.canon.empty,missing:"Dangling reference to missing ".concat(o.__ref," object")};var f,a=s.variables,l=s.policies,d=s.store.getFieldValue(o,"__typename"),h=[],p=new Ln;function y(S,P){var E;return S.missing&&(f=p.merge(f,((E={})[P]=S.missing,E))),S.result}this.config.addTypename&&"string"==typeof d&&!l.rootIdsByTypename[d]&&h.push({__typename:d});var g=new Set(r.selections);g.forEach(function(S){var P,E;if(_i(S,a))if(Hn(S)){var _=l.readField({fieldName:S.name.value,field:S,variables:s.variables,from:o},s),q=Pn(S);void 0===_?Wd.added(S)||(f=p.merge(f,((P={})[q]="Can't find field '".concat(S.name.value,"' on ").concat(oe(o)?o.__ref+" object":"object "+JSON.stringify(o,null,2)),P))):De(_)?_.length>0&&(_=y(n.executeSubSelectedArray({field:S,array:_,enclosingRef:i,context:s}),q)):S.selectionSet?null!=_&&(_=y(n.executeSelectionSet({selectionSet:S.selectionSet,objectOrReference:_,enclosingRef:oe(_)?_:i,context:s}),q)):s.canonizeResults&&(_=n.canon.pass(_)),void 0!==_&&h.push(((E={})[q]=_,E))}else{var Q=Aa(S,s.lookupFragment);if(!Q&&S.kind===I.FRAGMENT_SPREAD)throw it(10,S.name.value);Q&&l.fragmentMatches(Q,d)&&Q.selectionSet.selections.forEach(g.add,g)}});var v={result:La(h),missing:f},D=s.canonizeResults?this.canon.admit(v):qa(v);return D.result&&this.knownResults.set(D.result,r),D},e.prototype.execSubSelectedArrayImpl=function(t){var a,n=this,r=t.field,o=t.array,i=t.enclosingRef,s=t.context,l=new Ln;function u(d,h){var f;return d.missing&&(a=l.merge(a,((f={})[h]=d.missing,f))),d.result}return r.selectionSet&&(o=o.filter(s.store.canRead)),o=o.map(function(d,h){return null===d?null:De(d)?u(n.executeSubSelectedArray({field:r,array:d,enclosingRef:i,context:s}),h):r.selectionSet?u(n.executeSelectionSet({selectionSet:r.selectionSet,objectOrReference:d,enclosingRef:oe(d)?d:i,context:s}),h):(!1!==globalThis.__DEV__&&function AH(e,t,n){if(!t.selectionSet){var r=new Set([n]);r.forEach(function(o){be(o)&&(A(!oe(o),11,function CH(e,t){return oe(t)?e.get(t.__ref,"__typename"):t&&t.__typename}(e,o),t.name.value),Object.values(o).forEach(r.add,r))})}}(s.store,r,d),d)}),{result:s.canonizeResults?this.canon.admit(o):o,missing:a}},e}();function OH(e){try{JSON.stringify(e,function(t,n){if("string"==typeof n)throw n;return n})}catch(t){return t}}var ZD=Object.create(null);function wh(e){var t=JSON.stringify(e);return ZD[t]||(ZD[t]=Object.create(null))}function e0(e){var t=wh(e);return t.keyFieldsFn||(t.keyFieldsFn=function(n,r){var o=function(s,a){return r.readField(a,s)},i=r.keyObject=Ph(e,function(s){var a=Po(r.storeObject,s,o);return void 0===a&&n!==r.storeObject&&Le.call(n,s[0])&&(a=Po(n,s,r0)),A(void 0!==a,5,s.join("."),n),a});return"".concat(r.typename,":").concat(JSON.stringify(i))})}function t0(e){var t=wh(e);return t.keyArgsFn||(t.keyArgsFn=function(n,r){var o=r.field,i=r.variables,s=r.fieldName,a=Ph(e,function(u){var d=u[0],h=d.charAt(0);if("@"!==h)if("$"!==h){if(n)return Po(n,u)}else{var g=d.slice(1);if(i&&Le.call(i,g)){var b=u.slice(0);return b[0]=g,Po(i,b)}}else if(o&&rn(o.directives)){var f=d.slice(1),p=o.directives.find(function(v){return v.name.value===f}),y=p&&xa(p,i);return y&&Po(y,u.slice(1))}}),l=JSON.stringify(a);return(n||"{}"!==l)&&(s+=":"+l),s})}function Ph(e,t){var n=new Ln;return n0(e).reduce(function(r,o){var i,s=t(o);if(void 0!==s){for(var a=o.length-1;a>=0;--a)(i={})[o[a]]=s,s=i;r=n.merge(r,s)}return r},Object.create(null))}function n0(e){var t=wh(e);if(!t.paths){var n=t.paths=[],r=[];e.forEach(function(o,i){De(o)?(n0(o).forEach(function(s){return n.push(r.concat(s))}),r.length=0):(r.push(o),De(e[i+1])||(n.push(r.slice(0)),r.length=0))})}return t.paths}function r0(e,t){return e[t]}function Po(e,t,n){return n=n||r0,o0(t.reduce(function r(o,i){return De(o)?o.map(function(s){return r(s,i)}):o&&n(o,i)},e))}function o0(e){return be(e)?De(e)?e.map(o0):Ph(Object.keys(e).sort(),function(t){return Po(e,t)}):e}function Th(e){return void 0!==e.args?e.args:e.field?xa(e.field,e.variables):null}var NH=function(){},s0=function(e,t){return t.fieldName},a0=function(e,t,n){return(0,n.mergeObjects)(e,t)},c0=function(e,t){return t},xH=function(){function e(t){this.config=t,this.typePolicies=Object.create(null),this.toBeAdded=Object.create(null),this.supertypeMap=new Map,this.fuzzySubtypes=new Map,this.rootIdsByTypename=Object.create(null),this.rootTypenamesById=Object.create(null),this.usingPossibleTypes=!1,this.config=w({dataIdFromObject:$D},t),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),t.possibleTypes&&this.addPossibleTypes(t.possibleTypes),t.typePolicies&&this.addTypePolicies(t.typePolicies)}return e.prototype.identify=function(t,n){var r,o=this,i=n&&(n.typename||(null===(r=n.storeObject)||void 0===r?void 0:r.__typename))||t.__typename;if(i===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];var l,s=n&&n.storeObject||t,a=w(w({},n),{typename:i,storeObject:s,readField:n&&n.readField||function(){var h=Eh(arguments,s);return o.readField(h,{store:o.cache.data,variables:h.variables})}}),u=i&&this.getTypePolicy(i),d=u&&u.keyFn||this.config.dataIdFromObject;return uh.withValue(!0,function(){for(;d;){var h=d(w(w({},t),s),a);if(!De(h)){l=h;break}d=e0(h)}}),l=l?String(l):void 0,a.keyObject?[l,a.keyObject]:[l]},e.prototype.addTypePolicies=function(t){var n=this;Object.keys(t).forEach(function(r){var o=t[r],i=o.queryType,s=o.mutationType,a=o.subscriptionType,l=qt(o,["queryType","mutationType","subscriptionType"]);i&&n.setRootTypename("Query",r),s&&n.setRootTypename("Mutation",r),a&&n.setRootTypename("Subscription",r),Le.call(n.toBeAdded,r)?n.toBeAdded[r].push(l):n.toBeAdded[r]=[l]})},e.prototype.updateTypePolicy=function(t,n){var r=this,o=this.getTypePolicy(t),i=n.keyFields,s=n.fields;function a(l,u){l.merge="function"==typeof u?u:!0===u?a0:!1===u?c0:l.merge}a(o,n.merge),o.keyFn=!1===i?NH:De(i)?e0(i):"function"==typeof i?i:o.keyFn,s&&Object.keys(s).forEach(function(l){var u=r.getFieldPolicy(t,l,!0),d=s[l];if("function"==typeof d)u.read=d;else{var h=d.keyArgs,f=d.read,p=d.merge;u.keyFn=!1===h?s0:De(h)?t0(h):"function"==typeof h?h:u.keyFn,"function"==typeof f&&(u.read=f),a(u,p)}u.read&&u.merge&&(u.keyFn=u.keyFn||s0)})},e.prototype.setRootTypename=function(t,n){void 0===n&&(n=t);var r="ROOT_"+t.toUpperCase(),o=this.rootTypenamesById[r];n!==o&&(A(!o||o===t,6,t),o&&delete this.rootIdsByTypename[o],this.rootIdsByTypename[n]=r,this.rootTypenamesById[r]=n)},e.prototype.addPossibleTypes=function(t){var n=this;this.usingPossibleTypes=!0,Object.keys(t).forEach(function(r){n.getSupertypeSet(r,!0),t[r].forEach(function(o){n.getSupertypeSet(o,!0).add(r);var i=o.match(WD);(!i||i[0]!==o)&&n.fuzzySubtypes.set(o,new RegExp(o))})})},e.prototype.getTypePolicy=function(t){var n=this;if(!Le.call(this.typePolicies,t)){var r=this.typePolicies[t]=Object.create(null);r.fields=Object.create(null);var o=this.supertypeMap.get(t);!o&&this.fuzzySubtypes.size&&(o=this.getSupertypeSet(t,!0),this.fuzzySubtypes.forEach(function(s,a){if(s.test(t)){var l=n.supertypeMap.get(a);l&&l.forEach(function(u){return o.add(u)})}})),o&&o.size&&o.forEach(function(s){var a=n.getTypePolicy(s),l=a.fields,u=qt(a,["fields"]);Object.assign(r,u),Object.assign(r.fields,l)})}var i=this.toBeAdded[t];return i&&i.length&&i.splice(0).forEach(function(s){n.updateTypePolicy(t,s)}),this.typePolicies[t]},e.prototype.getFieldPolicy=function(t,n,r){if(t){var o=this.getTypePolicy(t).fields;return o[n]||r&&(o[n]=Object.create(null))}},e.prototype.getSupertypeSet=function(t,n){var r=this.supertypeMap.get(t);return!r&&n&&this.supertypeMap.set(t,r=new Set),r},e.prototype.fragmentMatches=function(t,n,r,o){var i=this;if(!t.typeCondition)return!0;if(!n)return!1;var s=t.typeCondition.name.value;if(n===s)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(s))for(var a=this.getSupertypeSet(n,!0),l=[a],u=function(y){var g=i.getSupertypeSet(y,!1);g&&g.size&&l.indexOf(g)<0&&l.push(g)},d=!(!r||!this.fuzzySubtypes.size),h=!1,f=0;f<l.length;++f){var p=l[f];if(p.has(s))return a.has(s)||(h&&!1!==globalThis.__DEV__&&A.warn(7,n,s),a.add(s)),!0;p.forEach(u),d&&f===l.length-1&&Sh(t.selectionSet,r,o)&&(d=!1,h=!0,this.fuzzySubtypes.forEach(function(y,g){var b=n.match(y);b&&b[0]===n&&u(g)}))}return!1},e.prototype.hasKeyArgs=function(t,n){var r=this.getFieldPolicy(t,n,!1);return!(!r||!r.keyFn)},e.prototype.getStoreFieldName=function(t){var i,n=t.typename,r=t.fieldName,o=this.getFieldPolicy(n,r,!1),s=o&&o.keyFn;if(s&&n)for(var a={typename:n,fieldName:r,field:t.field||null,variables:t.variables},l=Th(t);s;){var u=s(l,a);if(!De(u)){i=u||r;break}s=t0(u)}return void 0===i&&(i=t.field?function FN(e,t){var n=null;e.directives&&(n={},e.directives.forEach(function(o){n[o.name.value]={},o.arguments&&o.arguments.forEach(function(i){return uo(n[o.name.value],i.name,i.value,t)})}));var r=null;return e.arguments&&e.arguments.length&&(r={},e.arguments.forEach(function(o){return uo(r,o.name,o.value,t)})),ib(e.name.value,r,n)}(t.field,t.variables):ib(r,Th(t))),!1===i?r:r===jn(i)?i:r+":"+i},e.prototype.readField=function(t,n){var r=t.from;if(r&&(t.field||t.fieldName)){if(void 0===t.typename){var i=n.store.getFieldValue(r,"__typename");i&&(t.typename=i)}var s=this.getStoreFieldName(t),a=jn(s),l=n.store.getFieldValue(r,s),u=this.getFieldPolicy(t.typename,a,!1),d=u&&u.read;if(d){var h=l0(this,r,t,n,n.store.getStorage(oe(r)?r.__ref:r,s));return dh.withValue(this.cache,d,[l,h])}return l}},e.prototype.getReadFunction=function(t,n){var r=this.getFieldPolicy(t,n,!1);return r&&r.read},e.prototype.getMergeFunction=function(t,n,r){var o=this.getFieldPolicy(t,n,!1),i=o&&o.merge;return!i&&r&&(i=(o=this.getTypePolicy(r))&&o.merge),i},e.prototype.runMergeFunction=function(t,n,r,o,i){var s=r.field,a=r.typename,l=r.merge;return l===a0?u0(o.store)(t,n):l===c0?n:(o.overwrite&&(t=void 0),l(t,n,l0(this,void 0,{typename:a,fieldName:s.name.value,field:s,variables:o.variables},o,i||Object.create(null))))},e}();function l0(e,t,n,r,o){var i=e.getStoreFieldName(n),s=jn(i),a=n.variables||r.variables,l=r.store,u=l.toReference,d=l.canRead;return{args:Th(n),field:n.field||null,fieldName:s,storeFieldName:i,variables:a,isReference:oe,toReference:u,storage:o,cache:e.cache,canRead:d,readField:function(){return e.readField(Eh(arguments,t,a),r)},mergeObjects:u0(r.store)}}function Eh(e,t,n){var s,r=e[0];return"string"==typeof r?s={fieldName:r,from:e.length>1?e[1]:t}:(s=w({},r),Le.call(s,"from")||(s.from=t)),!1!==globalThis.__DEV__&&void 0===s.from&&!1!==globalThis.__DEV__&&A.warn(8,jS(Array.from(e))),void 0===s.variables&&(s.variables=n),s}function u0(e){return function(n,r){if(De(n)||De(r))throw it(9);if(be(n)&&be(r)){var o=e.getFieldValue(n,"__typename"),i=e.getFieldValue(r,"__typename");if(o&&i&&o!==i)return r;if(oe(n)&&wo(r))return e.merge(n.__ref,r),n;if(wo(n)&&oe(r))return e.merge(n,r.__ref),r;if(wo(n)&&wo(r))return w(w({},n),r)}return r}}function Ch(e,t,n){var r="".concat(t).concat(n),o=e.flavors.get(r);return o||e.flavors.set(r,o=e.clientOnly===t&&e.deferred===n?e:w(w({},e),{clientOnly:t,deferred:n})),o}var FH=function(){function e(t,n,r){this.cache=t,this.reader=n,this.fragments=r}return e.prototype.writeToStore=function(t,n){var r=this,o=n.query,i=n.result,s=n.dataId,a=n.variables,l=n.overwrite,u=dr(o),d=function _H(){return new Ln}();a=w(w({},Hd(u)),a);var h=w(w({store:t,written:Object.create(null),merge:function(p,y){return d.merge(p,y)},variables:a,varString:Fn(a)},GD(o,this.fragments)),{overwrite:!!l,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map}),f=this.processSelectionSet({result:i||Object.create(null),dataId:s,selectionSet:u.selectionSet,mergeTree:{map:new Map},context:h});if(!oe(f))throw it(12,i);return h.incomingById.forEach(function(p,y){var g=p.storeObject,b=p.mergeTree,v=p.fieldNodeSet,D=lo(y);if(b&&b.map.size){var S=r.applyMerges(b,D,g,h);if(oe(S))return;g=S}if(!1!==globalThis.__DEV__&&!h.overwrite){var P=Object.create(null);v.forEach(function(q){q.selectionSet&&(P[q.name.value]=!0)}),Object.keys(g).forEach(function(q){(function(q){return!0===P[jn(q)]})(q)&&!function(q){var Q=b&&b.map.get(q);return Boolean(Q&&Q.info&&Q.info.merge)}(q)&&function HH(e,t,n,r){var o=function(h){var f=r.getFieldValue(h,n);return"object"==typeof f&&f},i=o(e);if(i){var s=o(t);if(s&&!oe(i)&&!fe(i,s)&&!Object.keys(i).every(function(h){return void 0!==r.getFieldValue(s,h)})){var a=r.getFieldValue(e,"__typename")||r.getFieldValue(t,"__typename"),l=jn(n),u="".concat(a,".").concat(l);if(!p0.has(u)){p0.add(u);var d=[];!De(i)&&!De(s)&&[i,s].forEach(function(h){var f=r.getFieldValue(h,"__typename");"string"==typeof f&&!d.includes(f)&&d.push(f)}),!1!==globalThis.__DEV__&&A.warn(15,l,a,d.length?"either ensure all objects of type "+d.join(" and ")+" have an ID or a custom merge function, or ":"",u,w({},i),w({},s))}}}}(D,g,q,h.store)})}t.merge(y,g)}),t.retain(f.__ref),f},e.prototype.processSelectionSet=function(t){var n=this,r=t.dataId,o=t.result,i=t.selectionSet,s=t.context,a=t.mergeTree,l=this.cache.policies,u=Object.create(null),d=r&&l.rootTypenamesById[r]||Fd(o,i,s.fragmentMap)||r&&s.store.get(r,"__typename");"string"==typeof d&&(u.__typename=d);var h=function(){var S=Eh(arguments,u,s.variables);if(oe(S.from)){var P=s.incomingById.get(S.from.__ref);if(P){var E=l.readField(w(w({},S),{from:P.storeObject}),s);if(void 0!==E)return E}}return l.readField(S,s)},f=new Set;this.flattenFields(i,o,s,d).forEach(function(S,P){var E,_=Pn(P),q=o[_];if(f.add(P),void 0!==q){var Q=l.getStoreFieldName({typename:d,fieldName:P.name.value,field:P,variables:S.variables}),ie=h0(a,Q),pe=n.processFieldValue(q,P,P.selectionSet?Ch(S,!1,!1):S,ie),on=void 0;P.selectionSet&&(oe(pe)||wo(pe))&&(on=h("__typename",pe));var Co=l.getMergeFunction(d,P.name.value,on);Co?ie.info={field:P,typename:d,merge:Co}:f0(a,Q),u=S.merge(u,((E={})[Q]=pe,E))}else!1!==globalThis.__DEV__&&!S.clientOnly&&!S.deferred&&!Wd.added(P)&&!l.getReadFunction(d,P.name.value)&&!1!==globalThis.__DEV__&&A.error(13,Pn(P),o)});try{var p=l.identify(o,{typename:d,selectionSet:i,fragmentMap:s.fragmentMap,storeObject:u,readField:h}),g=p[1];r=r||p[0],g&&(u=s.merge(u,g))}catch(S){if(!r)throw S}if("string"==typeof r){var b=lo(r),v=s.written[r]||(s.written[r]=[]);if(v.indexOf(i)>=0||(v.push(i),this.reader&&this.reader.isFresh(o,b,i,s)))return b;var D=s.incomingById.get(r);return D?(D.storeObject=s.merge(D.storeObject,u),D.mergeTree=_h(D.mergeTree,a),f.forEach(function(S){return D.fieldNodeSet.add(S)})):s.incomingById.set(r,{storeObject:u,mergeTree:Za(a)?void 0:a,fieldNodeSet:f}),b}return u},e.prototype.processFieldValue=function(t,n,r,o){var i=this;return n.selectionSet&&null!==t?De(t)?t.map(function(s,a){var l=i.processFieldValue(s,n,r,h0(o,a));return f0(o,a),l}):this.processSelectionSet({result:t,selectionSet:n.selectionSet,context:r,mergeTree:o}):!1!==globalThis.__DEV__?nD(t):t},e.prototype.flattenFields=function(t,n,r,o){void 0===o&&(o=Fd(n,t,r.fragmentMap));var i=new Map,s=this.cache.policies,a=new Un(!1);return function l(u,d){var h=a.lookup(u,d.clientOnly,d.deferred);h.visited||(h.visited=!0,u.selections.forEach(function(f){if(_i(f,r.variables)){var p=d.clientOnly,y=d.deferred;if(!(p&&y)&&rn(f.directives)&&f.directives.forEach(function(v){var D=v.name.value;if("client"===D&&(p=!0),"defer"===D){var S=xa(v,r.variables);(!S||!1!==S.if)&&(y=!0)}}),Hn(f)){var g=i.get(f);g&&(p=p&&g.clientOnly,y=y&&g.deferred),i.set(f,Ch(r,p,y))}else{var b=Aa(f,r.lookupFragment);if(!b&&f.kind===I.FRAGMENT_SPREAD)throw it(14,f.name.value);b&&s.fragmentMatches(b,o,n,r.variables)&&l(b.selectionSet,Ch(r,p,y))}}}))}(t,r),i},e.prototype.applyMerges=function(t,n,r,o,i){var s,a=this;if(t.map.size&&!oe(r)){var l=De(r)||!oe(n)&&!wo(n)?void 0:n,u=r;l&&!i&&(i=[oe(l)?l.__ref:l]);var d,h=function(f,p){return De(f)?"number"==typeof p?f[p]:void 0:o.store.getFieldValue(f,String(p))};t.map.forEach(function(f,p){var y=h(l,p),g=h(u,p);if(void 0!==g){i&&i.push(p);var b=a.applyMerges(f,y,g,o,i);b!==g&&(d=d||new Map).set(p,b),i&&A(i.pop()===p)}}),d&&(r=De(u)?u.slice(0):w({},u),d.forEach(function(f,p){r[p]=f}))}return t.info?this.cache.policies.runMergeFunction(n,r,t.info,o,i&&(s=o.store).getStorage.apply(s,i)):r},e}(),d0=[];function h0(e,t){var n=e.map;return n.has(t)||n.set(t,d0.pop()||{map:new Map}),n.get(t)}function _h(e,t){if(e===t||!t||Za(t))return e;if(!e||Za(e))return t;var n=e.info&&t.info?w(w({},e.info),t.info):e.info||t.info,r=e.map.size&&t.map.size,i={info:n,map:r?new Map:e.map.size?e.map:t.map};if(r){var s=new Set(t.map.keys());e.map.forEach(function(a,l){i.map.set(l,_h(a,t.map.get(l))),s.delete(l)}),s.forEach(function(a){i.map.set(a,_h(t.map.get(a),e.map.get(a)))})}return i}function Za(e){return!e||!(e.info||e.map.size)}function f0(e,t){var n=e.map,r=n.get(t);r&&Za(r)&&(d0.push(r),n.delete(t))}var p0=new Set,y0=function(e){function t(n){void 0===n&&(n={});var r=e.call(this)||this;return r.watches=new Set,r.addTypenameTransform=new Zb(Wd),r.assumeImmutableResults=!0,r.makeVar=OF,r.txCount=0,r.config=function EH(e){return vo(qD,e)}(n),r.addTypename=!!r.config.addTypename,r.policies=new xH({cache:r,dataIdFromObject:r.config.dataIdFromObject,possibleTypes:r.config.possibleTypes,typePolicies:r.config.typePolicies}),r.init(),r}return kt(t,e),t.prototype.init=function(){var n=this.data=new Bi.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=n.stump,this.resetResultCache()},t.prototype.resetResultCache=function(n){var r=this,o=this.storeReader,i=this.config.fragments;this.storeWriter=new FH(this,this.storeReader=new RH({cache:this,addTypename:this.addTypename,resultCacheMaxSize:this.config.resultCacheMaxSize,canonizeResults:zD(this.config),canon:n?void 0:o&&o.canon,fragments:i}),i),this.maybeBroadcastWatch=Oi(function(s,a){return r.broadcastWatch(s,a)},{max:this.config.resultCacheMaxSize||wn["inMemoryCache.maybeBroadcastWatch"]||5e3,makeCacheKey:function(s){var a=s.optimistic?r.optimisticData:r.data;if(ji(a))return a.makeCacheKey(s.query,s.callback,Fn({optimistic:s.optimistic,id:s.id,variables:s.variables}))}}),new Set([this.data.group,this.optimisticData.group]).forEach(function(s){return s.resetCaching()})},t.prototype.restore=function(n){return this.init(),n&&this.data.replace(n),this},t.prototype.extract=function(n){return void 0===n&&(n=!1),(n?this.optimisticData:this.data).extract()},t.prototype.read=function(n){var r=n.returnPartialData,o=void 0!==r&&r;try{return this.storeReader.diffQueryAgainstStore(w(w({},n),{store:n.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:o})).result||null}catch(i){if(i instanceof VD)return null;throw i}},t.prototype.write=function(n){try{return++this.txCount,this.storeWriter.writeToStore(this.data,n)}finally{!--this.txCount&&!1!==n.broadcast&&this.broadcastWatches()}},t.prototype.modify=function(n){if(Le.call(n,"id")&&!n.id)return!1;var r=n.optimistic?this.optimisticData:this.data;try{return++this.txCount,r.modify(n.id||"ROOT_QUERY",n.fields)}finally{!--this.txCount&&!1!==n.broadcast&&this.broadcastWatches()}},t.prototype.diff=function(n){return this.storeReader.diffQueryAgainstStore(w(w({},n),{store:n.optimistic?this.optimisticData:this.data,rootId:n.id||"ROOT_QUERY",config:this.config}))},t.prototype.watch=function(n){var r=this;return this.watches.size||function RF(e){xi(e).vars.forEach(function(t){return t.attachCache(e)})}(this),this.watches.add(n),n.immediate&&this.maybeBroadcastWatch(n),function(){r.watches.delete(n)&&!r.watches.size&&SD(r),r.maybeBroadcastWatch.forget(n)}},t.prototype.gc=function(n){var r;Fn.reset(),yr.reset(),this.addTypenameTransform.resetCache(),null===(r=this.config.fragments)||void 0===r||r.resetCaches();var o=this.optimisticData.gc();return n&&!this.txCount&&(n.resetResultCache?this.resetResultCache(n.resetResultIdentities):n.resetResultIdentities&&this.storeReader.resetCanon()),o},t.prototype.retain=function(n,r){return(r?this.optimisticData:this.data).retain(n)},t.prototype.release=function(n,r){return(r?this.optimisticData:this.data).release(n)},t.prototype.identify=function(n){if(oe(n))return n.__ref;try{return this.policies.identify(n)[0]}catch(r){!1!==globalThis.__DEV__&&A.warn(r)}},t.prototype.evict=function(n){if(!n.id){if(Le.call(n,"id"))return!1;n=w(w({},n),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(n,this.data)}finally{!--this.txCount&&!1!==n.broadcast&&this.broadcastWatches()}},t.prototype.reset=function(n){var r=this;return this.init(),Fn.reset(),n&&n.discardWatches?(this.watches.forEach(function(o){return r.maybeBroadcastWatch.forget(o)}),this.watches.clear(),SD(this)):this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(n){var r=this.optimisticData.removeLayer(n);r!==this.optimisticData&&(this.optimisticData=r,this.broadcastWatches())},t.prototype.batch=function(n){var u,r=this,o=n.update,i=n.optimistic,s=void 0===i||i,a=n.removeOptimistic,l=n.onWatchUpdated,d=function(f){var y=r.data,g=r.optimisticData;++r.txCount,f&&(r.data=r.optimisticData=f);try{return u=o(r)}finally{--r.txCount,r.data=y,r.optimisticData=g}},h=new Set;return l&&!this.txCount&&this.broadcastWatches(w(w({},n),{onWatchUpdated:function(f){return h.add(f),!1}})),"string"==typeof s?this.optimisticData=this.optimisticData.addLayer(s,d):!1===s?d(this.data):d(),"string"==typeof a&&(this.optimisticData=this.optimisticData.removeLayer(a)),l&&h.size?(this.broadcastWatches(w(w({},n),{onWatchUpdated:function(f,p){var y=l.call(this,f,p);return!1!==y&&h.delete(f),y}})),h.size&&h.forEach(function(f){return r.maybeBroadcastWatch.dirty(f)})):this.broadcastWatches(n),u},t.prototype.performTransaction=function(n,r){return this.batch({update:n,optimistic:r||null!==r})},t.prototype.transformDocument=function(n){return this.addTypenameToDocument(this.addFragmentsToDocument(n))},t.prototype.fragmentMatches=function(n,r){return this.policies.fragmentMatches(n,r)},t.prototype.lookupFragment=function(n){var r;return(null===(r=this.config.fragments)||void 0===r?void 0:r.lookup(n))||null},t.prototype.broadcastWatches=function(n){var r=this;this.txCount||this.watches.forEach(function(o){return r.maybeBroadcastWatch(o,n)})},t.prototype.addFragmentsToDocument=function(n){var r=this.config.fragments;return r?r.transform(n):n},t.prototype.addTypenameToDocument=function(n){return this.addTypename?this.addTypenameTransform.transformDocument(n):n},t.prototype.broadcastWatch=function(n,r){var o=n.lastDiff,i=this.diff(n);r&&(n.optimistic&&"string"==typeof r.optimistic&&(i.fromOptimisticTransaction=!0),r.onWatchUpdated&&!1===r.onWatchUpdated.call(this,n,i,o))||(!o||!fe(o.result,i.result))&&n.callback(n.lastDiff=i,o)},t}(jD);!1!==globalThis.__DEV__&&(y0.prototype.getMemoryInternals=vN);class ec{}class Ih{}class $t{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(n=>{const r=n.indexOf(":");if(r>0){const o=n.slice(0,r),i=o.toLowerCase(),s=n.slice(r+1).trim();this.maybeSetNormalizedName(o,i),this.headers.has(i)?this.headers.get(i).push(s):this.headers.set(i,[s])}})}:()=>{this.headers=new Map,Object.entries(t).forEach(([n,r])=>{let o;if(o="string"==typeof r?[r]:"number"==typeof r?[r.toString()]:r.map(i=>i.toString()),o.length>0){const i=n.toLowerCase();this.headers.set(i,o),this.maybeSetNormalizedName(n,i)}})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const n=this.headers.get(t.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,n){return this.clone({name:t,value:n,op:"a"})}set(t,n){return this.clone({name:t,value:n,op:"s"})}delete(t,n){return this.clone({name:t,value:n,op:"d"})}maybeSetNormalizedName(t,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,t)}init(){this.lazyInit&&(this.lazyInit instanceof $t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(n=>{this.headers.set(n,t.headers.get(n)),this.normalizedNames.set(n,t.normalizedNames.get(n))})}clone(t){const n=new $t;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof $t?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}applyUpdate(t){const n=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,n);const o=("a"===t.op?this.headers.get(n):void 0)||[];o.push(...r),this.headers.set(n,o);break;case"d":const i=t.value;if(i){let s=this.headers.get(n);if(!s)return;s=s.filter(a=>-1===i.indexOf(a)),0===s.length?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,s)}else this.headers.delete(n),this.normalizedNames.delete(n)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>t(this.normalizedNames.get(n),this.headers.get(n)))}}class jH{encodeKey(t){return m0(t)}encodeValue(t){return m0(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const $H=/%(\d[a-f0-9])/gi,qH={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function m0(e){return encodeURIComponent(e).replace($H,(t,n)=>qH[n]??t)}function tc(e){return`${e}`}class $n{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new jH,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function VH(e,t){const n=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{const i=o.indexOf("="),[s,a]=-1==i?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,i)),t.decodeValue(o.slice(i+1))],l=n.get(s)||[];l.push(a),n.set(s,l)}),n}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(n=>{const r=t.fromObject[n],o=Array.isArray(r)?r.map(tc):[tc(r)];this.map.set(n,o)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const n=this.map.get(t);return n?n[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,n){return this.clone({param:t,value:n,op:"a"})}appendAll(t){const n=[];return Object.keys(t).forEach(r=>{const o=t[r];Array.isArray(o)?o.forEach(i=>{n.push({param:r,value:i,op:"a"})}):n.push({param:r,value:o,op:"a"})}),this.clone(n)}set(t,n){return this.clone({param:t,value:n,op:"s"})}delete(t,n){return this.clone({param:t,value:n,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const n=this.encoder.encodeKey(t);return this.map.get(t).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const n=new $n({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(t),n}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const n=("a"===t.op?this.map.get(t.param):void 0)||[];n.push(tc(t.value)),this.map.set(t.param,n);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const o=r.indexOf(tc(t.value));-1!==o&&r.splice(o,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class zH{constructor(){this.map=new Map}set(t,n){return this.map.set(t,n),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function g0(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function v0(e){return typeof Blob<"u"&&e instanceof Blob}function S0(e){return typeof FormData<"u"&&e instanceof FormData}class Vi{constructor(t,n,r,o){let i;if(this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function WH(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==r?r:null,i=o):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new $t),this.context||(this.context=new zH),this.params){const s=this.params.toString();if(0===s.length)this.urlWithParams=n;else{const a=n.indexOf("?");this.urlWithParams=n+(-1===a?"?":a<n.length-1?"&":"")+s}}else this.params=new $n,this.urlWithParams=n}serializeBody(){return null===this.body?null:g0(this.body)||v0(this.body)||S0(this.body)||function GH(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof $n?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||S0(this.body)?null:v0(this.body)?this.body.type||null:g0(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof $n?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const n=t.method||this.method,r=t.url||this.url,o=t.responseType||this.responseType,i=void 0!==t.body?t.body:this.body,s=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,a=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let l=t.headers||this.headers,u=t.params||this.params;const d=t.context??this.context;return void 0!==t.setHeaders&&(l=Object.keys(t.setHeaders).reduce((h,f)=>h.set(f,t.setHeaders[f]),l)),t.setParams&&(u=Object.keys(t.setParams).reduce((h,f)=>h.set(f,t.setParams[f]),u)),new Vi(n,r,i,{params:u,headers:l,context:d,reportProgress:a,responseType:o,withCredentials:s})}}var Ae=(()=>((Ae=Ae||{})[Ae.Sent=0]="Sent",Ae[Ae.UploadProgress=1]="UploadProgress",Ae[Ae.ResponseHeader=2]="ResponseHeader",Ae[Ae.DownloadProgress=3]="DownloadProgress",Ae[Ae.Response=4]="Response",Ae[Ae.User=5]="User",Ae))();class Mh{constructor(t,n=200,r="OK"){this.headers=t.headers||new $t,this.status=void 0!==t.status?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class kh extends Mh{constructor(t={}){super(t),this.type=Ae.ResponseHeader}clone(t={}){return new kh({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class nc extends Mh{constructor(t={}){super(t),this.type=Ae.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new nc({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class b0 extends Mh{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function Rh(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let D0=(()=>{class e{constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof Vi)i=n;else{let l,u;l=o.headers instanceof $t?o.headers:new $t(o.headers),o.params&&(u=o.params instanceof $n?o.params:new $n({fromObject:o.params})),i=new Vi(n,r,void 0!==o.body?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}const s=function LH(...e){return ko(e,es(e))}(i).pipe(function UH(e,t){return ye(t)?Zi(e,t,1):Zi(e,1)}(l=>this.handler.handle(l)));if(n instanceof Vi||"events"===o.observe)return s;const a=s.pipe(function BH(e,t){return Gn((n,r)=>{let o=0;n.subscribe(Mo(r,i=>e.call(t,i,o++)&&r.next(i)))})}(l=>l instanceof nc));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return a.pipe(at(l=>{if(null!==l.body&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe(at(l=>{if(null!==l.body&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe(at(l=>{if(null!==l.body&&"string"!=typeof l.body)throw new Error("Response is not a string.");return l.body}));default:return a.pipe(at(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:(new $n).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,Rh(o,r))}post(n,r,o={}){return this.request("POST",n,Rh(o,r))}put(n,r,o={}){return this.request("PUT",n,Rh(o,r))}}return e.\u0275fac=function(n){return new(n||e)(j(ec))},e.\u0275prov=X({token:e,factory:e.\u0275fac}),e})();function w0(e,t){return t(e)}function QH(e,t){return(n,r)=>t.intercept(n,{handle:o=>e(o,r)})}const YH=new H("HTTP_INTERCEPTORS"),$i=new H("HTTP_INTERCEPTOR_FNS");function JH(){let e=null;return(t,n)=>(null===e&&(e=(Ao(YH,{optional:!0})??[]).reduceRight(QH,w0)),e(t,n))}let P0=(()=>{class e extends ec{constructor(n,r){super(),this.backend=n,this.injector=r,this.chain=null}handle(n){if(null===this.chain){const r=Array.from(new Set(this.injector.get($i)));this.chain=r.reduceRight((o,i)=>function KH(e,t,n){return(r,o)=>n.runInContext(()=>t(r,i=>e(i,o)))}(o,i,this.injector),w0)}return this.chain(n,r=>this.backend.handle(r))}}return e.\u0275fac=function(n){return new(n||e)(j(Ih),j(tr))},e.\u0275prov=X({token:e,factory:e.\u0275fac}),e})();const tL=/^\)\]\}',?\n/;let E0=(()=>{class e{constructor(n){this.xhrFactory=n}handle(n){if("JSONP"===n.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new we(r=>{const o=this.xhrFactory.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((p,y)=>o.setRequestHeader(p,y.join(","))),n.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){const p=n.detectContentTypeHeader();null!==p&&o.setRequestHeader("Content-Type",p)}if(n.responseType){const p=n.responseType.toLowerCase();o.responseType="json"!==p?p:"text"}const i=n.serializeBody();let s=null;const a=()=>{if(null!==s)return s;const p=o.statusText||"OK",y=new $t(o.getAllResponseHeaders()),g=function nL(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(o)||n.url;return s=new kh({headers:y,status:o.status,statusText:p,url:g}),s},l=()=>{let{headers:p,status:y,statusText:g,url:b}=a(),v=null;204!==y&&(v=typeof o.response>"u"?o.responseText:o.response),0===y&&(y=v?200:0);let D=y>=200&&y<300;if("json"===n.responseType&&"string"==typeof v){const S=v;v=v.replace(tL,"");try{v=""!==v?JSON.parse(v):null}catch(P){v=S,D&&(D=!1,v={error:P,text:v})}}D?(r.next(new nc({body:v,headers:p,status:y,statusText:g,url:b||void 0})),r.complete()):r.error(new b0({error:v,headers:p,status:y,statusText:g,url:b||void 0}))},u=p=>{const{url:y}=a(),g=new b0({error:p,status:o.status||0,statusText:o.statusText||"Unknown Error",url:y||void 0});r.error(g)};let d=!1;const h=p=>{d||(r.next(a()),d=!0);let y={type:Ae.DownloadProgress,loaded:p.loaded};p.lengthComputable&&(y.total=p.total),"text"===n.responseType&&o.responseText&&(y.partialText=o.responseText),r.next(y)},f=p=>{let y={type:Ae.UploadProgress,loaded:p.loaded};p.lengthComputable&&(y.total=p.total),r.next(y)};return o.addEventListener("load",l),o.addEventListener("error",u),o.addEventListener("timeout",u),o.addEventListener("abort",u),n.reportProgress&&(o.addEventListener("progress",h),null!==i&&o.upload&&o.upload.addEventListener("progress",f)),o.send(i),r.next({type:Ae.Sent}),()=>{o.removeEventListener("error",u),o.removeEventListener("abort",u),o.removeEventListener("load",l),o.removeEventListener("timeout",u),n.reportProgress&&(o.removeEventListener("progress",h),null!==i&&o.upload&&o.upload.removeEventListener("progress",f)),o.readyState!==o.DONE&&o.abort()}})}}return e.\u0275fac=function(n){return new(n||e)(j(pS))},e.\u0275prov=X({token:e,factory:e.\u0275fac}),e})();const Oh=new H("XSRF_ENABLED"),C0=new H("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>"XSRF-TOKEN"}),_0=new H("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>"X-XSRF-TOKEN"});class I0{}let iL=(()=>{class e{constructor(n,r,o){this.doc=n,this.platform=r,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=oS(n,this.cookieName),this.lastCookieString=n),this.lastToken}}return e.\u0275fac=function(n){return new(n||e)(j(nn),j(ku),j(C0))},e.\u0275prov=X({token:e,factory:e.\u0275fac}),e})();function sL(e,t){const n=e.url.toLowerCase();if(!Ao(Oh)||"GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return t(e);const r=Ao(I0).getToken(),o=Ao(_0);return null!=r&&!e.headers.has(o)&&(e=e.clone({headers:e.headers.set(o,r)})),t(e)}var Ce=(()=>((Ce=Ce||{})[Ce.Interceptors=0]="Interceptors",Ce[Ce.LegacyInterceptors=1]="LegacyInterceptors",Ce[Ce.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",Ce[Ce.NoXsrfProtection=3]="NoXsrfProtection",Ce[Ce.JsonpSupport=4]="JsonpSupport",Ce[Ce.RequestsMadeViaParent=5]="RequestsMadeViaParent",Ce))();function To(e,t){return{\u0275kind:e,\u0275providers:t}}function aL(...e){const t=[D0,E0,P0,{provide:ec,useExisting:P0},{provide:Ih,useExisting:E0},{provide:$i,useValue:sL,multi:!0},{provide:Oh,useValue:!0},{provide:I0,useClass:iL}];for(const n of e)t.push(...n.\u0275providers);return function wE(e){return{\u0275providers:e}}(t)}const M0=new H("LEGACY_INTERCEPTOR_FN");let lL=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=In({type:e}),e.\u0275inj=an({providers:[aL(To(Ce.LegacyInterceptors,[{provide:M0,useFactory:JH},{provide:$i,useExisting:M0,multi:!0}]))]}),e})();class uL extends po{constructor(t,n){super(),this.httpClient=t,this.options=n,this.print=bb,this.options.operationPrinter&&(this.print=this.options.operationPrinter),this.requester=r=>new le(o=>{const i=r.getContext(),s=(D,S)=>function gr(...e){const t=e.find(n=>typeof n<"u");return typeof t>"u"?e[e.length-1]:t}(i[D],this.options[D],S);let a=s("method","POST");const l=s("includeQuery",!0),u=s("includeExtensions",!1),d=s("uri","graphql"),h=s("withCredentials"),f=s("useMultipart"),p=!0===this.options.useGETForQueries,y=r.query.definitions.some(D=>"OperationDefinition"===D.kind&&"query"===D.operation);p&&y&&(a="GET");const g={method:a,url:"function"==typeof d?d(r):d,body:{operationName:r.operationName,variables:r.variables},options:{withCredentials:h,useMultipart:f,headers:this.options.headers}};u&&(g.body.extensions=r.extensions),l&&(g.body.query=this.print(r.query));const b=function O0(e){let t=e.headers&&e.headers instanceof $t?e.headers:new $t(e.headers);if(e.clientAwareness){const{name:n,version:r}=e.clientAwareness;n&&!t.has("apollographql-client-name")&&(t=t.set("apollographql-client-name",n)),r&&!t.has("apollographql-client-version")&&(t=t.set("apollographql-client-version",r))}return t}(i);g.options.headers=((e,t)=>e&&t?t.keys().reduce((r,o)=>r.set(o,t.getAll(o)),e):t||e)(g.options.headers,b);const v=((e,t,n)=>{const r=-1!==["POST","PUT","PATCH"].indexOf(e.method.toUpperCase()),i=e.body.length;let a,s=e.options&&e.options.useMultipart;if(s){if(i)return new we(u=>u.error(new Error("File upload is not available when combined with Batching")));if(!r)return new we(u=>u.error(new Error("File upload is not available when GET is used")));if(!n)return new we(u=>u.error(new Error('To use File upload you need to pass "extractFiles" function from "extract-files" library to HttpLink\'s options')));a=n(e.body),s=!!a.files.size}let l={};if(i){if(!r)return new we(u=>u.error(new Error("Batching is not available for GET requests")));l={body:e.body}}else l=r?{body:s?a.clone:e.body}:{params:Object.keys(e.body).reduce((h,f)=>{const p=e.body[f];return h[f]=-1!==["variables","extensions"].indexOf(f.toLowerCase())?JSON.stringify(p):p,h},{})};if(s&&r){const u=new FormData;u.append("operations",JSON.stringify(l.body));const d={},h=a.files;let f=0;h.forEach(p=>{d[++f]=p}),u.append("map",JSON.stringify(d)),f=0,h.forEach((p,y)=>{u.append(++f+"",y,y.name)}),l.body=u}return t.request(e.method,e.url,{observe:"response",responseType:"json",reportProgress:!1,...l,...e.options})})(g,this.httpClient,this.options.extractFiles).subscribe({next:D=>{r.setContext({response:D}),o.next(D.body)},error:D=>o.error(D),complete:()=>o.complete()});return()=>{v.closed||v.unsubscribe()}})}request(t){return this.requester(t)}}let dL=(()=>{class e{constructor(n){this.httpClient=n}create(n){return new uL(this.httpClient,n)}}return e.\u0275fac=function(n){return new(n||e)(j(D0))},e.\u0275prov=X({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),hL=(()=>{const t=class{};let e=t;return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=In({type:t}),t.\u0275inj=an({providers:[{provide:HD,useFactory:r=>{const o=new y0;return{link:r.create({uri:"https://graphqlpokemon.favware.tech/v8"}),cache:o,defaultOptions:{query:{fetchPolicy:"network-only",errorPolicy:"all"}}}},deps:[dL]}],imports:[PH]}),e})();class Eo extends Xi{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){const n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){const{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}}let st=(()=>{const t=class{constructor(){this.raidTierSource=new Eo(""),this.regionSource=new Eo(""),this.pokemonListSource=new Eo(""),this.teraTypeSource=new Eo(""),this.moveListSource=new Eo(""),this.loadingSource=new Eo(!1),this.raidTier=this.raidTierSource.asObservable(),this.regionList=this.regionSource.asObservable(),this.pokemonList=this.pokemonListSource.asObservable(),this.teraType=this.teraTypeSource.asObservable(),this.moveList=this.moveListSource.asObservable(),this.loading=this.loadingSource.asObservable()}changeRaidTier(r){this.raidTierSource.next(r)}changeRegionList(r){this.regionSource.next(r)}changePokemon(r){this.pokemonListSource.next(r)}changeTeraType(r){this.teraTypeSource.next(r)}changeMoveList(r){this.moveListSource.next(r)}changeLoading(r){this.loadingSource.next(r)}};let e=t;return t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=X({token:t,factory:t.\u0275fac,providedIn:"root"}),e})();const fL=BD`
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
`,pL=BD`
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
`;let vr=(()=>{const t=class{constructor(r){this.apollo=r}getAbilities(){return this.pokemon.pipe(at(r=>r.getPokemon.abilities))}getDexNumber(){return this.pokemon.pipe(at(r=>r.getPokemon.num))}getMove(r){return this.apollo.query({query:pL,variables:{move:r}}).pipe(at(o=>o.data))}getMoves(){return this.pokemon.pipe(at(r=>{const o=[],i=["dreamworldMoves","eggMoves","eventMoves","tmMoves","tutorMoves","virtualTransferMoves","levelUpMoves"],s=l=>{l&&Object.keys(l).forEach(u=>{const d=l[u];d&&i.forEach(h=>{const f=d[h];Array.isArray(f)&&f.forEach(p=>{o.push(p.move)})})})},a=l=>{l&&l.forEach(u=>{s(u.learnsets),a(u.preevolutions),a(u.evolutions)})};return s(r.getPokemon.learnsets),a(r.getPokemon.preevolutions??null),a(r.getPokemon.evolutions??null),o}))}getPokemon(r){return this.pokemon=this.apollo.query({query:fL,variables:{pokemon:r}}).pipe(at(o=>o.data)),this.pokemon}getStats(){return this.pokemon.pipe(at(r=>r.getPokemon.baseStats))}getTypes(){return this.pokemon.pipe(at(r=>r.getPokemon.types))}};let e=t;return t.\u0275fac=function(o){return new(o||t)(j(UD))},t.\u0275prov=X({token:t,factory:t.\u0275fac,providedIn:"root"}),e})();var _e=(()=>(function(e){e.Bug="Bug",e.Dark="Dark",e.Dragon="Dragon",e.Electric="Electric",e.Fairy="Fairy",e.Fighting="Fighting",e.Fire="Fire",e.Flying="Flying",e.Ghost="Ghost",e.Grass="Grass",e.Ground="Ground",e.Ice="Ice",e.Normal="Normal",e.Poison="Poison",e.Psychic="Psychic",e.Rock="Rock",e.Steel="Steel",e.Water="Water"}(_e||(_e={})),_e))();const Ah=[{name:_e.Bug,matchup:{offense:{double:["dark","grass","psychic"],immune:[],normal:["bug","dragon","electric","ground","ice","normal","rock","water"],resisted:["fairy","fighting","fire","flying","ghost","poison","steel"]},defense:{double:["fire","flying","rock"],immune:[],normal:["bug","dark","dragon","electric","fairy","ghost","ice","normal","poison","psychic","steel","water"],resisted:["fighting","grass","ground"]}}},{name:_e.Dark,matchup:{offense:{double:["ghost","psychic"],immune:[],normal:["bug","dragon","electric","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["dark","fairy","fighting"]},defense:{double:["bug","fairy","fighting"],immune:["psychic"],normal:["dragon","electric","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["dark","ghost"]}}},{name:_e.Dragon,matchup:{offense:{double:["dragon"],immune:["fairy"],normal:["bug","dark","electric","fighting","fire","flying","ghost","grass","ground","ice","normal","poison","psychic","rock","water"],resisted:["steel"]},defense:{double:["dragon","fairy","ice"],immune:[],normal:["bug","dark","fighting","flying","ghost","ground","normal","poison","psychic","rock","steel"],resisted:["electric","fire","grass","water"]}}},{name:_e.Electric,matchup:{offense:{double:["flying","water"],immune:["ground"],normal:["bug","dark","fairy","fighting","fire","ghost","ice","normal","poison","psychic","rock","steel"],resisted:["dragon","electric","grass"]},defense:{double:["ground"],immune:[],normal:["bug","dark","dragon","fairy","fighting","fire","ghost","grass","ice","normal","poison","psychic","rock","water"],resisted:["electric","flying","steel"]}}},{name:_e.Fairy,matchup:{offense:{double:["dark","dragon","fighting"],immune:[],normal:["bug","electric","fairy","flying","ghost","grass","ground","ice","normal","psychic","rock","water"],resisted:["fire","poison","steel"]},defense:{double:["poison","steel"],immune:["dragon"],normal:["electric","fairy","fire","flying","ghost","grass","ground","ice","normal","psychic","rock","water"],resisted:["bug","dark","fighting"]}}},{name:_e.Fighting,matchup:{offense:{double:["dark","ice","normal","rock","steel"],immune:["ghost"],normal:["dragon","electric","fighting","fire","grass","ground","water"],resisted:["bug","fairy","flying","poison","psychic"]},defense:{double:["fairy","flying","psychic"],immune:[],normal:["dragon","electric","fighting","fire","ghost","grass","ground","ice","normal","poison","steel","water"],resisted:["bug","dark","rock"]}}},{name:_e.Fire,matchup:{offense:{double:["bug","grass","ice","steel"],immune:[],normal:["dark","electric","fairy","fighting","flying","ghost","ground","normal","poison","psychic"],resisted:["dragon","fire","rock","water"]},defense:{double:["ground","rock","water"],immune:[],normal:["dark","dragon","electric","fighting","flying","ghost","normal","poison","psychic"],resisted:["bug","fairy","fire","grass","ice","steel"]}}},{name:_e.Flying,matchup:{offense:{double:["bug","fighting","grass"],immune:[],normal:["dark","dragon","fairy","fire","flying","ghost","ground","ice","normal","poison","psychic","water"],resisted:["electric","rock","steel"]},defense:{double:["electric","ice","rock"],immune:["ground"],normal:["dark","dragon","fairy","fire","flying","ghost","normal","poison","psychic","steel","water"],resisted:["bug","fighting","grass"]}}},{name:_e.Ghost,matchup:{offense:{double:["ghost","psychic"],immune:["normal"],normal:["bug","dragon","electric","fairy","fighting","fire","flying","grass","ground","ice","poison","rock","steel","water"],resisted:["dark"]},defense:{double:["dark","ghost"],immune:["fighting","normal"],normal:["dragon","electric","fairy","fire","flying","grass","ground","ice","psychic","rock","steel","water"],resisted:["bug","poison"]}}},{name:_e.Grass,matchup:{offense:{double:["ground","rock","water"],immune:[],normal:["dark","electric","fairy","fighting","ghost","ice","normal","psychic"],resisted:["bug","dragon","fire","flying","grass","poison","steel"]},defense:{double:["bug","fire","flying","ice","poison"],immune:[],normal:["dark","dragon","fairy","fighting","ghost","normal","psychic","rock","steel"],resisted:["electric","grass","ground","water"]}}},{name:_e.Ground,matchup:{offense:{double:["electric","fire","poison","rock","steel"],immune:["flying"],normal:["dark","dragon","fairy","fighting","ghost","ground","ice","normal","psychic","water"],resisted:["bug","grass"]},defense:{double:["grass","ice","water"],immune:["electric"],normal:["bug","dark","dragon","fairy","fighting","fire","flying","ghost","ground","normal","psychic","steel"],resisted:["poison","rock"]}}},{name:_e.Ice,matchup:{offense:{double:["dragon","flying","grass","ground"],immune:[],normal:["bug","dark","electric","fairy","fighting","ghost","normal","poison","psychic","rock"],resisted:["fire","ice","steel","water"]},defense:{double:["fighting","fire","rock","steel"],immune:[],normal:["bug","dark","dragon","electric","fairy","flying","ghost","grass","ground","normal","poison","psychic","water"],resisted:["ice"]}}},{name:_e.Normal,matchup:{offense:{double:[],immune:["ghost"],normal:["bug","dark","dragon","electric","fairy","fighting","fire","flying","grass","ground","ice","normal","poison","psychic","water"],resisted:["rock","steel"]},defense:{double:["fighting"],immune:["ghost"],normal:["bug","dark","dragon","electric","fairy","fire","flying","grass","ground","ice","normal","poison","psychic","rock","steel","water"],resisted:[]}}},{name:_e.Poison,matchup:{offense:{double:["fairy","grass"],immune:["steel"],normal:["bug","dark","dragon","electric","fighting","fire","flying","ice","normal","psychic","water"],resisted:["ghost","ground","poison","rock"]},defense:{double:["ground","psychic"],immune:[],normal:["dark","dragon","electric","fire","flying","ghost","ice","normal","rock","steel","water"],resisted:["bug","fairy","fighting","grass","poison"]}}},{name:_e.Psychic,matchup:{offense:{double:["fighting","poison"],immune:["dark"],normal:["bug","dragon","electric","fairy","fire","flying","ghost","grass","ground","ice","normal","rock","water"],resisted:["psychic","steel"]},defense:{double:["bug","dark","ghost"],immune:[],normal:["dragon","electric","fairy","fire","flying","grass","ground","ice","normal","poison","rock","steel","water"],resisted:["fighting","psychic"]}}},{name:_e.Rock,matchup:{offense:{double:["bug","fire","flying","ice"],immune:[],normal:["dark","dragon","electric","fairy","ghost","grass","normal","poison","psychic","rock","water"],resisted:["fighting","ground","steel"]},defense:{double:["fighting","grass","ground","steel","water"],immune:[],normal:["bug","dark","dragon","electric","fairy","ghost","ice","psychic","rock"],resisted:["fire","flying","normal","poison"]}}},{name:_e.Steel,matchup:{offense:{double:["fairy","ice","rock"],immune:[],normal:["bug","dark","dragon","fighting","flying","ghost","grass","ground","normal","poison","psychic"],resisted:["electric","fire","steel","water"]},defense:{double:["fighting","fire","ground"],immune:["poison"],normal:["dark","electric","ghost","water"],resisted:["bug","dragon","fairy","flying","grass","ice","normal","psychic","rock","steel"]}}},{name:_e.Water,matchup:{offense:{double:["fire","ground","rock"],immune:[],normal:["bug","dark","electric","fairy","fighting","flying","ghost","ice","normal","poison","psychic","steel"],resisted:["dragon","grass","water"]},defense:{double:["electric","grass"],immune:[],normal:["bug","dark","dragon","fairy","fighting","flying","ghost","ground","normal","poison","psychic","rock"],resisted:["fire","ice","steel","water"]}}}];let Nh=(()=>{const t=class{advantages(r,o=!1){const i=[];return Ah.filter(s=>s.name.includes(r)).forEach(s=>{const a=s.matchup.offense;a.double.forEach(l=>{i.push({name:l,multiplier:2})}),o&&(a.resisted.forEach(l=>{i.push({name:l,multiplier:.5})}),a.immune.forEach(l=>{i.push({name:l,multiplier:0})}))}),i}weaknesses(r){const o=[];return Ah.filter(i=>i.name.includes(r)).forEach(i=>{const s=i.matchup.defense;s.double.forEach(a=>{o.push({name:a,multiplier:2})}),s.resisted.forEach(a=>{o.push({name:a,multiplier:.5})}),s.immune.forEach(a=>{o.push({name:a,multiplier:0})})}),o}};let e=t;return t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=X({token:t,factory:t.\u0275fac,providedIn:"root"}),e})();function oc(e){return e.toLowerCase().replace(/\w/,t=>t.toUpperCase())}function Sr(e){(e?[e]:["pokemonTypes","pokemonImageNormal","pokemonImageShiny","pokemonAbility","pokemonStatsWrapper","pokemonActions","pokemonMoves","pokemonHerbs","pokemonTypeAdvantages","pokemonTeraWeaknesses","pokemonTeraAdvantages"]).forEach(n=>{document.getElementById(n).innerHTML=""})}function ze(e,t){e.innerHTML+=t}function xh(e){return`<div class="typeMatchupText ${e.name}">${oc(e.name)} - ${e.multiplier}x</div>`}function A0(e,t,n){return String(e).padStart(t,n)}let yL=(()=>{const t=class{constructor(r){this.stateService=r}valueChanged(){const r=document.getElementById("raidTier");this.stateService.changeRaidTier(r.options[r.selectedIndex].value)}};let e=t;return t.\u0275fac=function(o){return new(o||t)(O(st))},t.\u0275cmp=Xe({type:t,selectors:[["app-raid-tier"]],decls:7,vars:0,consts:[["id","raidTier",3,"change"],["value",""],["value","5"],["value","6"]],template:function(o,i){1&o&&(he(0,"select",0),or("change",function(){return i.valueChanged()}),he(1,"option",1),Ve(2,"-- Tier --"),Me(),he(3,"option",2),Ve(4,"5 Star"),Me(),he(5,"option",3),Ve(6,"6 Star"),Me()())},encapsulation:2}),e})();var m=(()=>(function(e){e.Paldea="Paldea",e.Kitakami="Kitakami",e.Terarium="Terarium"}(m||(m={})),m))(),c=(()=>(function(e){e.Time="Time",e.HP="HP"}(c||(c={})),c))();const qi=[{name:"Abomasnow",region:m.Paldea,info:{moves:["Energy Ball","Ice Punch","Ice Shard","Leer","Blizzard","Snowscape","Aurora Veil"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Blizzard"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Uses Snowscape"},{type:c.HP,threshold:25,action:"Uses Aurora Veil"}]}},{name:"Altaria",region:m.Paldea,info:{moves:["Dragon Pulse","Hurricane","Sing","Mist","Safeguard","Cotton Guard"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Safeguard"},{type:c.HP,threshold:75,action:"Uses"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Uses Cotton Guard"},{type:c.HP,threshold:25,action:"Uses Sing"}]}},{name:"Amoonguss",region:m.Paldea,info:{moves:["Energy Ball","Sludge Bomb","Spore","Clear Smog","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Grassy Terrain"},{type:c.HP,threshold:75,action:"Uses Spore"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Spore"},{type:c.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Annihilape",region:m.Paldea,info:{moves:["Shadow Claw","Close Combat","Outrage","Leer","Taunt","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Taunt"},{type:c.HP,threshold:75,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:35,action:"Uses Bulk Up"}]}},{name:"Appletun",region:m.Paldea,info:{moves:["Apple Acid","Dragon Pulse","Giga Drain","Body Press","","Growth"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses"},{type:c.HP,threshold:75,action:"Uses Growth"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Arboliva",region:m.Paldea,info:{moves:["Energy Ball","Hyper Voice","Earth Power","Charm","Sunny Day","Growth","Leaf Storm"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Sunny Day"},{type:c.HP,threshold:75,action:"Uses Growth"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Leaf Storm"}]}},{name:"Arcanine",region:m.Paldea,info:{moves:["Flamethrower","Crunch","Extreme Speed","Fire Fang","Sunny Day","Leer"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Sunny Day"},{type:c.HP,threshold:75,action:"Uses Leer"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Armarouge",region:m.Paldea,info:{moves:["Armor Cannon","Psychic","Night Shade","Will-O-Wisp","Sunny Day","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Stats & Status Reset"},{type:c.HP,threshold:75,action:"Uses Sunny Day"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Calm Mind"},{type:c.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Avalugg",region:m.Paldea,info:{moves:["Icicle Crash","Double-Edge","Crunch","Ice Fang","Snowscape","Iron Defense"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Snowscape"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Uses Snowscape"},{type:c.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Baxcalibur",region:m.Paldea,info:{moves:["Dragon Claw","Icicle Crash","Ice Shard","Body Press","Snowscape"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Snowscape"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Snowscape"},{type:c.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Blissey",region:m.Paldea,info:{moves:["Dazzling Gleam","Hyper Voice","Sing","Seismic Toss","Gravity"],specialMoves:["Seismic Toss","Gravity"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Gravity"},{type:c.HP,threshold:75,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Bombirdier",region:m.Paldea,info:{moves:["Rock Slide","Sucker Punch","Brave Bird","Torment","Knock Off","Feather Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Knock Off"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Feather Dance"}]}},{name:"Brambleghast",region:m.Paldea,info:{moves:["Giga Drain","Shadow Ball","Power Whip","Infestation","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Grassy Terrain"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:20,action:"Uses Grassy Terrain"}]}},{name:"Braviary",region:m.Paldea,info:{moves:["Acrobatics","Crush Claw","Superpower","Air Slash","Tailwind","Hone Claws"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Tailwind"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Uses Hone Claws"},{type:c.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Breloom",region:m.Paldea,info:{moves:["Seed Bomb","Mach Punch","Worry Seed","Headbutt","Grassy Terrain","Spore"],specialMoves:["Spore"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Grassy Terrain"},{type:c.HP,threshold:75,action:"Uses Spore"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Bronzong",region:m.Paldea,info:{moves:["Flash Cannon","Extrasensory","Metal Sound","Payback","Rain Dance","Calm Mind","Reflect"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Rain Dance"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Uses Calm Mind"},{type:c.HP,threshold:25,action:"Uses Reflect"}]}},{name:"Camerupt",region:m.Paldea,info:{moves:["Flamethrower","Earth Power","Yawn","Eruption","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Sunny Day"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Ceruledge",region:m.Paldea,info:{moves:["Bitter Blade","Shadow Claw","Psycho Cut","Will-O-Wisp","Sunny Day","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Stats & Status Reset"},{type:c.HP,threshold:75,action:"Uses Sunny Day"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Swords Dance"},{type:c.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Cetitan",region:m.Paldea,info:{moves:["Ice Spinner","Liquidation","Yawn","Entrainment","Snowscape"],specialMoves:["Yawn","Entrainment"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Snowscape"},{type:c.HP,threshold:75,action:"Uses Yawn"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Snowscape"},{type:c.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Clawitzer",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Aura Sphere","Crabhammer","Rain Dance"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Rain Dance"},{type:c.HP,threshold:45,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Water Pulse"}]}},{name:"Cloyster",region:m.Paldea,info:{moves:["Icicle Spear","Hydro Pump","Ice Shard","Supersonic","Shell Smash"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Shell Smash"},{type:c.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Coalossal",region:m.Paldea,info:{moves:["Heat Crash","Stone Edge","Incinerate","Ancient Power","Sandstorm","Tar Shot","Fire Blast"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Sandstorm"},{type:c.HP,threshold:75,action:"Uses Tar Shot"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Fire Blast"}]}},{name:"Copperajah",region:m.Paldea,info:{moves:["Heavy Slam","Strength","Curse","High Horsepower","Sandstorm","Iron Defense"],specialMoves:["Curse"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Sandstorm"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Corviknight",region:m.Paldea,info:{moves:["Steel Wing","Drill Peck","Taunt","Body Press","Iron Defense","Hone Claws"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Stats & Status Reset"},{type:c.HP,threshold:75,action:"Uses Iron Defense"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Hone Claws"}]}},{name:"Delibird",region:m.Paldea,info:{moves:["Present","Drill Peck","Ice Punch","Blizzard","Snowscape"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:c.Time,threshold:85,action:"Uses Snowscape"},{type:c.HP,threshold:75,action:"Uses Present"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Present"}]}},{name:"Ditto",region:m.Paldea,info:{moves:["Transform"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:c.HP,threshold:50,action:"Stats & Status Reset"}]}},{name:"Dondozo",region:m.Paldea,info:{moves:["Order Up","Waterfall","Heavy Slam","Tickle","Rain Dance","Stockpile"],specialMoves:["Stockpile"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Rain Dance"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Stockpile"},{type:c.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Dragalge",region:m.Paldea,info:{moves:["Dragon Pulse","Sludge Bomb","Water Pulse","Toxic","Acid Spray","Draco Meteor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Acid Spray"},{type:c.HP,threshold:75,action:"Uses Draco Meteor"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:30,action:"Uses Draco Meteor"}]}},{name:"Dragapult",region:m.Paldea,info:{moves:["Shadow Ball","Dragon Darts","Thunderbolt","Hex","Reflect","Light Screen"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:c.Time,threshold:85,action:"Uses Reflect"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Light Screen"}]}},{name:"Dragonite",region:m.Paldea,info:{moves:["Dragon Rush","Aerial Ace","Extreme Speed","Hurricane","Safeguard","Dragon Dance","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Safeguard"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Uses Dragon Dance"},{type:c.HP,threshold:35,action:"Uses Rain Dance"}]}},{name:"Drifblim",region:m.Paldea,info:{moves:["Hex","Air Slash","Thunder Wave","Shadow Ball","Will-O-Wisp"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Will-O-Wisp"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Eelektross",region:m.Paldea,info:{moves:["Wild Charge","Flamethrower","Discharge","Crush Claw","Ion Deluge","Thunder Wave","Coil"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Ion Deluge"},{type:c.HP,threshold:75,action:"Uses Thunder Wave"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:75,action:"Uses Thunder Wave"},{type:c.HP,threshold:25,action:"Uses Coil"}]}},{name:"Eevee",region:m.Paldea,info:{moves:["Tera Blast","Take Down","Shadow Ball","Tickle","Yawn","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Yawn"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Falinks",region:m.Paldea,info:{moves:["Megahorn","Reversal","Headbutt","Brick Break","No Retreat"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.HP,threshold:40,action:"Uses No Retreat"},{type:c.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Flapple",region:m.Paldea,info:{moves:["Grav Apple","Dragon Breath","Dragon Rush","Trailblaze","Grassy Terrain","Iron Defense","Dragon Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Grassy Terrain"},{type:c.HP,threshold:75,action:"Uses Iron Defense"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Dragon Dance"},{type:c.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Florges",region:m.Paldea,info:{moves:["Petal Dance","Moonblast","Psychic","Safeguard","Grassy Terrain","Calm Mind"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Grassy Terrain"},{type:c.HP,threshold:75,action:"Uses Calm Mind"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:30,action:"Uses Grassy Terrain"}]}},{name:"Froslass",region:m.Paldea,info:{moves:["Frost Breath","Shadow Ball","Scary Face","Draining Kiss","Snowscape","Disable","Aurora Veil"],specialMoves:["Disable"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:c.Time,threshold:85,action:"Uses Snowscape"},{type:c.HP,threshold:75,action:"Uses Disable"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Snowscape"},{type:c.HP,threshold:25,action:"Uses Aurora Veil"}]}},{name:"Gallade",region:m.Paldea,info:{moves:["Psycho Cut","Brick Break","Shadow Sneak","Fury Cutter","Hypnosis","Disable","Psychic Terrain"],specialMoves:["Disable","Shadow Sneak"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Hypnosis"},{type:c.HP,threshold:75,action:"Uses Disable"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:25,action:"Uses Psychic Terrain"}]}},{name:"Garchomp",region:m.Paldea,info:{moves:["Earthquake","Dragon Claw","Iron Head","Slash","Sandstorm","Bulldoze"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Sandstorm"},{type:c.HP,threshold:75,action:"Uses Bulldoze"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Gardevoir",region:m.Paldea,info:{moves:["Psychic","Moonblast","Disable","Draining Kiss","Misty Terrain","Calm Mind","Psychic Terrain"],specialMoves:["Disable"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Misty Terrain"},{type:c.HP,threshold:75,action:"Uses Calm Mind"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Psychic Terrain"}]}},{name:"Garganacl",region:m.Paldea,info:{moves:["Salt Cure","Rock Slide","Hammer Arm","Sandstorm"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Sandstorm"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Gengar",region:m.Paldea,info:{moves:["Shadow Ball","Sludge Bomb","Confuse Ray","Spite","Hypnosis"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Hypnosis"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Hypnosis"}]}},{name:"Glalie",region:m.Paldea,info:{moves:["Freeze-Dry","Crunch","Headbutt","Frost Breath","Snowscape","Disable"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Snowscape"},{type:c.HP,threshold:75,action:"Uses Disable"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:85,action:"Uses Snowscape"}]}},{name:"Glimmora",region:m.Paldea,info:{moves:["Power Gem","Sludge Bomb","Mortal Spin","Ancient Power","Sandstorm","Tera Blast"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Sandstorm"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:20,action:"Uses Tera Blast"}]}},{name:"Goodra",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Sludge Bomb","Power Whip","Rain Dance","Draco Meteor","Acid Armor"],specialMoves:["Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Rain Dance"},{type:c.HP,threshold:75,action:"Uses Draco Meteor"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Acid Armor"}]}},{name:"Gothitelle",region:m.Paldea,info:{moves:["Psychic","Thunder Wave","Thunderbolt","Stored Power","Calm Mind","Light Screen"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Calm Mind"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Calm Mind"},{type:c.HP,threshold:25,action:"Uses Light Screen"}]}},{name:"Greedent",region:m.Paldea,info:{moves:["Body Slam","Body Press","Bullet Seed","Tail Whip","Stockpile"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Stockpile"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:25,action:"Uses Stockpile"}]}},{name:"Grimmsnarl",region:m.Paldea,info:{moves:["Spirit Break","False Surrender","Scary Face","Foul Play","Light Screen","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Light Screen"},{type:c.HP,threshold:40,action:"Uses Bulk Up"},{type:c.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Gyarados",region:m.Paldea,info:{moves:["Aqua Tail","Twister","Hurricane","Crunch","Scary Face","Taunt","Dragon Dance","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Scary Face"},{type:c.HP,threshold:75,action:"Uses Taunt"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Uses Dragon Dance"},{type:c.HP,threshold:35,action:"Uses Rain Dance"}]}},{name:"Hariyama",region:m.Paldea,info:{moves:["Reversal","Brick Break","Brine","Heavy Slam","Scary Face","Taunt","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Scary Face"},{type:c.HP,threshold:75,action:"Uses Taunt"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Uses Bulk Up"},{type:c.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Hatterene",region:m.Paldea,info:{moves:["Dazzling Gleam","Psychic","Dark Pulse","Charm","Misty Terrain","Calm Mind","Psychic Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Misty Terrain"},{type:c.HP,threshold:75,action:"Uses Calm Mind"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Calm Mind"},{type:c.HP,threshold:20,action:"Uses Psychic Terrain"}]}},{name:"Haxorus",region:m.Paldea,info:{moves:["Dragon Claw","Crunch","Giga Impact","First Impression","Harden","Dragon Dance"],specialMoves:["Harden","First Impression"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Harden"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Dragon Dance"},{type:c.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Hippowdon",region:m.Paldea,info:{moves:["Earthquake","Yawn","Rock Slide","Body Slam","Stockpile"],specialMoves:["Stockpile"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Yawn"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Stockpile"}]}},{name:"Honchkrow",region:m.Paldea,info:{moves:["Night Slash","Hurricane","Haze","Wing Attack","Nasty Plot"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:25,action:"Uses Nasty Plot"}]}},{name:"Houndoom",region:m.Paldea,info:{moves:["Flamethrower","Crunch","Taunt","Will-O-Wisp","Sunny Day","Howl"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Sunny Day"},{type:c.HP,threshold:75,action:"Uses Howl"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:35,action:"Uses Sunny Day"}]}},{name:"Hydreigon",region:m.Paldea,info:{moves:["Dark Pulse","Dragon Pulse","Scary Face","Dragon Rush","Taunt","Reflect","Nasty Plot"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Taunt"},{type:c.HP,threshold:75,action:"Uses Reflect"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Indeedee (Male)",formName:"indeedee",region:m.Paldea,info:{moves:["Psychic","Hyper Voice","Shadow Ball","Trick Room","Play Nice","Calm Mind"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Play Nice"},{type:c.HP,threshold:75,action:"Uses Calm Mind"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Indeedee (Female)",formName:"indeedee",imageAlt:"-f",region:m.Paldea,info:{moves:["Psychic","Hyper Voice","Shadow Ball","Trick Room","Play Nice","Calm Mind"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Play Nice"},{type:c.HP,threshold:75,action:"Uses Calm Mind"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Calm Mind"}]}},{name:"Kingambit",region:m.Paldea,info:{moves:["Iron Head","Night Slash","Torment","Slash","Taunt","Metal Burst"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Taunt"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Torment"},{type:c.Time,threshold:15,action:"Uses Metal Burst"}]}},{name:"Krookodile",region:m.Paldea,info:{moves:["Earthquake","Crunch","Sand Tomb","Counter","Torment","Hone Claws"],specialMoves:["Counter"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Torment"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:35,action:"Uses Hone Claws"}]}},{name:"Luxray",region:m.Paldea,info:{moves:["Crunch","Wild Charge","Discharge","Thunder Wave","Electric Terrain","Leer"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Electric Terrain"},{type:c.HP,threshold:75,action:"Uses Leer"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:35,action:"Uses Electric Terrain"}]}},{name:"Mabosstiff",region:m.Paldea,info:{moves:["Crunch","Play Rough","Take Down","Swagger","Taunt"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Taunt"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Magnezone",region:m.Paldea,info:{moves:["Thunderbolt","Flash Cannon","Tri Attack","Thunder Wave","Magnet Rise","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Magnet Rise"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Electric Terrain"},{type:c.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Mimikyu",region:m.Paldea,info:{moves:["Play Rough","Shadow Claw","Will-O-Wisp","Shadow Sneak","Light Screen","Taunt"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Light Screen"},{type:c.HP,threshold:75,action:"Uses Taunt"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Will-O-Wisp"},{type:c.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Mismagius",region:m.Paldea,info:{moves:["Mystical Fire","Shadow Ball","Confuse Ray","Taunt","Light Screen","Nasty Plot"],specialMoves:["Light Screen"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Light Screen"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:25,action:"Uses Nasty Plot"}]}},{name:"Mudsdale",region:m.Paldea,info:{moves:["High Horsepower","Body Press","Rock Smash","Heavy Slam","Scary Face","Iron Defense"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Scary Face"},{type:c.Time,threshold:75,action:"Uses Iron Defense"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"}]}},{name:"Noivern",region:m.Paldea,info:{moves:["Air Slash","Dragon Pulse","Acrobatics","Boomburst","Tailwind"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:c.Time,threshold:85,action:"Uses Tailwind"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Uses Tailwind"},{type:c.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Oranguru",region:m.Paldea,info:{moves:["Facade","Psychic","Stored Power","Yawn","Calm Mind","Light Screen"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Calm Mind"},{type:c.HP,threshold:75,action:"Uses Light Screen"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Calm Mind"},{type:c.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Orthworm",region:m.Paldea,info:{moves:["Iron Head","Earthquake","Stomping Tantrum","Wrap","Sandstorm","Coil"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Sandstorm"},{type:c.HP,threshold:75,action:"Uses Coil"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Palafin",region:m.Paldea,info:{moves:["Liquidation","Acrobatics","Charm","Boomburst","Rain Dance","Bulk Up"],specialMoves:["Boomburst"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:85,action:"Uses Rain Dance"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Bulk Up"},{type:c.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Passimian",region:m.Paldea,info:{moves:["Reversal","Rock Smash","Facade","Gunk Shot","Taunt","Trailblaze","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Taunt"},{type:c.HP,threshold:75,action:"Uses Trailblaze"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Bulk Up"}]}},{name:"Pawmot",region:m.Paldea,info:{moves:["Wild Charge","Close Combat","Nuzzle","Sweet Kiss","Double Shock"],specialMoves:["Sweet Kiss"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:c.Time,threshold:80,action:"Uses Nuzzle"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:20,action:"Uses Double Shock"}]}},{name:"Pincurchin",region:m.Paldea,info:{moves:["Zing Zap","Thunder","Surf","Poison Jab","Rain Dance","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Rain Dance"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Polteageist",region:m.Paldea,info:{moves:["Shadow Ball","Mega Drain","Astonish","Will-O-Wisp","Shell Smash"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:35,action:"Uses Shell Smash"},{type:c.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Raichu",region:m.Paldea,info:{moves:["Discharge","Iron Tail","Charm","Nuzzle","Electric Terrain","Thunder Wave"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:c.Time,threshold:85,action:"Uses Electric Terrain"},{type:c.HP,threshold:75,action:"Uses Thunder Wave"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Electric Terrain"}]}},{name:"Revavroom",region:m.Paldea,info:{moves:["Spin Out","Taunt","Gunk Shot","Overheat","Scary Face","Shift Gear"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Scary Face"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Shift Gear"},{type:c.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Rotom",region:m.Paldea,info:{moves:["Discharge","Uproar","Hex","Thunder Wave","Charge","Eerie Impulse"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Charge"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Eerie Impulse"}]}},{name:"Sableye",region:m.Paldea,info:{moves:["Shadow Claw","Foul Play","Will-O-Wisp","Night Shade","Flatter","Torment"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:c.Time,threshold:85,action:"Player Stats & Status Reset"},{type:c.HP,threshold:75,action:"Uses Flatter"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Uses Torment"},{type:c.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Salamence",region:m.Paldea,info:{moves:["Dragon Rush","Aerial Ace","Hyper Voice","Draco Meteor","Dragon Dance","Focus Energy"],specialMoves:["Dragon Rush"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Uses Dragon Dance"},{type:c.HP,threshold:25,action:"Uses Focus Energy"}]}},{name:"Scizor",region:m.Paldea,info:{moves:["Iron Head","X-Scissor","Bullet Punch","Slash","Iron Defense","Focus Energy"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Iron Defense"},{type:c.HP,threshold:75,action:"Uses Focus Energy"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Player Stats & Status Reset"}]}},{name:"Scyther",region:m.Paldea,info:{moves:["Aerial Ace","X-Scissor","Slash","Agility","Focus Energy","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Focus Energy"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Uses Swords Dance"}]}},{name:"Slaking",region:m.Paldea,info:{moves:["Facade","Shadow Claw","Play Rough","Swagger","Encore"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Encore"},{type:c.HP,threshold:75,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Reduce Tera Orb Charge"}]}},{name:"Slowbro",region:m.Paldea,info:{moves:["Zen Headbutt","Liquidation","Yawn","Water Pulse","Curse"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Curse"},{type:c.HP,threshold:70,action:"Uses Yawn"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Curse"}]}},{name:"Slowking",region:m.Paldea,info:{moves:["Psychic","Surf","Yawn","Water Pulse","Psychic Terrain","Calm Mind"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Psychic Terrain"},{type:c.HP,threshold:70,action:"Uses Yawn"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Calm Mind"}]}},{name:"Staraptor",region:m.Paldea,info:{moves:["Close Combat","Brave Bird","Quick Attack","Double-Edge"],specialMoves:["Double-Edge"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Stats & Status Reset"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Brave Bird"}]}},{name:"Talonflame",region:m.Paldea,info:{moves:["Acrobatics","Flare Blitz","Steel Wing","Heat Wave","Bulk Up"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:c.Time,threshold:85,action:"Uses Bulk Up"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:30,action:"Uses Bulk Up"}]}},{name:"Tatsugiri (Curly)",formName:"tatsugiri",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:75,action:"Uses Chilling Water"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tatsugiri (Droopy)",formName:"tatsugiri",imageAlt:"-d",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:75,action:"Uses Chilling Water"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tatsugiri (Stretchy)",formName:"tatsugiri",imageAlt:"-s",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Rapid Spin","Counter","Chilling Water"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:75,action:"Uses Chilling Water"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Tauros (Fire)",formName:"taurospaldeablaze",imageAlt:"-b",region:m.Paldea,info:{moves:["Flare Blitz","Close Combat","Flamethrower","Headbutt","Work Up","Sunny Day"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Work Up"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Sunny Day"},{type:c.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Tauros (Water)",formName:"taurospaldeaaqua",imageAlt:"-a",region:m.Paldea,info:{moves:["Wave Crash","Close Combat","Surf","Headbutt","Work Up","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Work Up"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Rain Dance"},{type:c.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Tinkaton",region:m.Paldea,info:{moves:["Gigaton Hammer","Play Rough","Brutal Swing","Rock Smash","Misty Terrain","Thunder Wave","Charm"],specialMoves:["Charm","Misty Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:80,action:"Uses Misty Terrain"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Thunder Wave"},{type:c.HP,threshold:25,action:"Uses Charm"}]}},{name:"Toxtricity (Amped)",formName:"toxtricity",region:m.Paldea,info:{moves:["Overdrive","Poison Jab","Nuzzle","Boomburst","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Electric Terrain"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Toxtricity (Low Key)",formName:"toxtricity",imageAlt:"-l",region:m.Paldea,info:{moves:["Overdrive","Poison Jab","Nuzzle","Boomburst","Electric Terrain"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Electric Terrain"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Electric Terrain"}]}},{name:"Tsareena",region:m.Paldea,info:{moves:["High Jump Kick","Power Whip","Stomp","Trop Kick","Reflect","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Reflect"},{type:c.HP,threshold:75,action:"Uses Grassy Terrain"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Grassy Terrain"}]}},{name:"Tyranitar",region:m.Paldea,info:{moves:["Rock Slide","Crunch","Screech","Dark Pulse","Dragon Dance","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:75,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Uses Dragon Dance"},{type:c.HP,threshold:35,action:"Uses Sandstorm"}]}},{name:"Volcarona",region:m.Paldea,info:{moves:["Fire Blast","Bug Buzz","Hurricane","Will-O-Wisp","Sunny Day","Quiver Dance"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Sunny Day"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Quiver Dance"},{type:c.HP,threshold:20,action:"Uses Quiver Dance"}]}},{name:"Weavile",region:m.Paldea,info:{moves:["Ice Punch","Night Slash","Taunt","Facade","Reflect","Swords Dance"],specialMoves:["Reflect"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:c.Time,threshold:85,action:"Uses Reflect"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:25,action:"Uses Swords Dance"}]}},{name:"Zoroark",region:m.Paldea,info:{moves:["Night Daze","Shadow Claw","Taunt","Hyper Voice","Torment","Nasty Plot"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Uses Torment"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Ambipom",region:m.Kitakami,info:{moves:["Double Hit","Screech","Fury Swipes","Knock Off","Trailblaze","Sand Attack"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:c.HP,threshold:90,action:"Uses Trailblaze"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Sand Attack"},{type:c.HP,threshold:15,action:"Uses Sand Attack"}]}},{name:"Basculegion (Male)",formName:"basculegion",region:m.Kitakami,info:{moves:["Liquidation","Aqua Jet","Shadow Ball","Scary Face","Rain Dance","Wave Crash"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Rain Dance"},{type:c.HP,threshold:75,action:"Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Rain Dance"},{type:c.HP,threshold:10,action:"Uses Wave Crash"}]}},{name:"Basculegion (Female)",formName:"basculegion",imageAlt:"-f",region:m.Kitakami,info:{moves:["Liquidation","Aqua Jet","Shadow Ball","Scary Face","Rain Dance","Hydro Pump"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Rain Dance"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Rain Dance"},{type:c.HP,threshold:10,action:"Uses Hydro Pump"}]}},{name:"Chandelure",region:m.Kitakami,info:{moves:["Shadow Ball","Heat Wave","Confuse Ray","Flamethrower","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.HP,threshold:95,action:"Uses Sunny Day"},{type:c.HP,threshold:80,action:"Player Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Sunny Day"},{type:c.HP,threshold:20,action:"Uses Heat Wave"}]}},{name:"Conkeldurr",region:m.Kitakami,info:{moves:["Hammer Arm","Stone Edge","Superpower","Scary Face","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:90,action:"Stats & Status Reset"},{type:c.HP,threshold:65,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Bulk Up"},{type:c.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Dusknoir",region:m.Kitakami,info:{moves:["Fire Punch","Brick Break","Shadow Ball","Shadow Punch","Trick Room","Poltergeist"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:90,action:"Uses Trick Room"},{type:c.HP,threshold:65,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Poltergeist"}]}},{name:"Gliscor",region:m.Kitakami,info:{moves:["Poison Jab","Earthquake","Acrobatics","X-Scissor","Sandstorm","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Sandstorm"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Swords Dance"},{type:c.Time,threshold:15,action:"Uses Sandstorm"}]}},{name:"Golem",region:m.Kitakami,info:{moves:["Earthquake","Stone Edge","Heavy Slam","Defense Curl"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:90,action:"Uses Defense Curl"},{type:c.Time,threshold:70,action:"Uses Defense Curl"},{type:c.Time,threshold:50,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Earthquake"}]}},{name:"Kommo-o",formName:"kommoo",region:m.Kitakami,info:{moves:["Brick Break","Dragon Claw","Boomburst","Scary Face","Clangorous Soul"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:60,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Uses Clangorous Soul"},{type:c.HP,threshold:10,action:"Uses Clangorous Soul"}]}},{name:"Ludicolo",region:m.Kitakami,info:{moves:["Energy Ball","Surf","Fake Out","Trailblaze","Rain Dance"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:90,action:"Uses Rain Dance"},{type:c.HP,threshold:65,action:"Stats & Status Reset"},{type:c.HP,threshold:30,action:"Stats & Status Reset"},{type:c.HP,threshold:10,action:"Uses Surf"}]}},{name:"Mamoswine",region:m.Kitakami,info:{moves:["Earthquake","Blizzard","Ice Shard","Ancient Power","Snowscape","Amnesia"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Snowscape"},{type:c.HP,threshold:75,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Uses Amnesia"},{type:c.HP,threshold:10,action:"Uses Earthquake"}]}},{name:"Mandibuzz",region:m.Kitakami,info:{moves:["Rock Tomb","Dark Pulse","Toxic","Foul Play","Taunt","Nasty Plot"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:90,action:"Uses Taunt"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Nasty Plot"},{type:c.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Mienshao",region:m.Kitakami,info:{moves:["Aura Sphere","Poison Jab","Taunt","Acrobatics","Bulk Up"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:c.Time,threshold:90,action:"Uses Taunt"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Bulk Up"},{type:c.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Milotic",region:m.Kitakami,info:{moves:["Chilling Water","Surf","Dragon Pulse","Attract","Rain Dance","Hydro Pump"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:90,action:"Uses Rain Dance"},{type:c.HP,threshold:65,action:"Stats & Status Reset"},{type:c.HP,threshold:35,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Ninetales",region:m.Kitakami,info:{moves:["Flamethrower","Extrasensory","Will-O-Wisp","Hypnosis","Nasty Plot"],specialMoves:["Hypnosis"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:85,action:"Stats & Status Reset"},{type:c.HP,threshold:60,action:"Player Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:30,action:"Uses Nasty Plot"}]}},{name:"Politoed",region:m.Kitakami,info:{moves:["Surf","Hyper Voice","Weather Ball","Encore","Rain Dance","Hydro Pump"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:90,action:"Player Stats & Status Reset"},{type:c.HP,threshold:75,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Uses Rain Dance"},{type:c.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Poliwrath",region:m.Kitakami,info:{moves:["Liquidation","Brick Break","Haze","Hydro Pump","Rain Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Rain Dance"},{type:c.HP,threshold:70,action:"Player Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:20,action:"Uses Hydro Pump"}]}},{name:"Probopass",region:m.Kitakami,info:{moves:["Body Press","Power Gem","Flash Cannon","Harden","Gravity","Zap Cannon"],specialMoves:["Harden"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:90,action:"Uses Gravity"},{type:c.HP,threshold:75,action:"Uses Zap Cannon"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Zap Cannon"}]}},{name:"Shiftry",region:m.Kitakami,info:{moves:["Fake Out","Sucker Punch","Leaf Blade","Extrasensory","Sunny Day","Leaf Storm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:90,action:"Uses Sunny Day"},{type:c.HP,threshold:65,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Stats & Status Reset"},{type:c.HP,threshold:10,action:"Uses Leaf Storm"}]}},{name:"Sinistcha",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.HP,threshold:85,action:"Stats & Status Reset"},{type:c.HP,threshold:75,action:"Uses Grassy Terrain"},{type:c.HP,threshold:40,action:"Uses Grassy Terrain"},{type:c.HP,threshold:15,action:"Uses Matcha Gotcha"}]}},{name:"Snorlax",region:m.Kitakami,info:{moves:["Body Slam","Heavy Slam","Bite","Mud-Slap","Curse"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Curse"},{type:c.HP,threshold:70,action:"Player Stats & Status Reset"},{type:c.HP,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Trevenant",region:m.Kitakami,info:{moves:["Wood Hammer","Shadow Claw","Will-O-Wisp","Hex","Grassy Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Grassy Terrain"},{type:c.HP,threshold:75,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Grassy Terrain"},{type:c.HP,threshold:20,action:"Uses Will-O-Wisp"}]}},{name:"Victreebel",region:m.Kitakami,info:{moves:["Sludge Bomb","Power Whip","Acid Spray","Trailblaze","Sunny Day"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:90,action:"Player Stats & Status Reset"},{type:c.HP,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Uses Sunny Day"},{type:c.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Vikavolt",region:m.Kitakami,info:{moves:["Discharge","Bug Buzz","Solar Beam","Zap Cannon"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:90,action:"Uses Discharge"},{type:c.HP,threshold:75,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Zap Cannon"},{type:c.HP,threshold:20,action:"Uses Zap Cannon"}]}},{name:"Yanmega",region:m.Kitakami,info:{moves:["Bug Buzz","Air Slash","Quick Attack","Hypnosis","Supersonic"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.HP,threshold:90,action:"Stats & Status Reset"},{type:c.HP,threshold:70,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Uses Supersonic"}]}},{name:"Alcremie",region:m.Terarium,info:{moves:["Dazzling Gleam","Psychic","Encore","Psyshock","Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.HP,threshold:90,action:"Uses Encore"},{type:c.HP,threshold:50,action:"Uses Acid Armor"},{type:c.HP,threshold:25,action:"Uses Acid Armor"},{type:c.Time,threshold:30,action:"Reduce Tera Orb Charge"}]}},{name:"Duraludon",region:m.Terarium,info:{moves:["Flash Cannon","Dragon Pulse","Breaking Swipe","Metal Sound","Light Screen","Draco Meteor","Iron Defense"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.HP,threshold:99,action:"Uses Light Screen"},{type:c.HP,threshold:50,action:"Uses Draco Meteor"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:30,action:"Uses Iron Defense"}]}},{name:"Electivire",region:m.Terarium,info:{moves:["Discharge","Thunder Punch","Fire Punch","Ice Punch","Thunder Wave","Electric Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.HP,threshold:75,action:"Uses Thunder Wave"},{type:c.HP,threshold:60,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Uses Electric Terrain"},{type:c.HP,threshold:25,action:"Uses Discharge"}]}},{name:"Excadrill",region:m.Terarium,info:{moves:["Drill Run","Iron Head","X-Scissor","Rapid Spin","Sandstorm","Earthquake"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Sandstorm"},{type:c.HP,threshold:75,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Uses Sandstorm"},{type:c.HP,threshold:15,action:"Uses Earthquake"}]}},{name:"Exeggutor",region:m.Terarium,info:{moves:["Psychic","Energy Ball","Uproar","Bulldoze","Sunny Day","Growth"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:99,action:"Uses Sunny Day"},{type:c.HP,threshold:90,action:"Uses Growth"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"}]}},{name:"Flygon",region:m.Terarium,info:{moves:["Dragon Pulse","Scorching Sands","Earthquake","Flamethrower","Sandstorm","Boomburst"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:c.HP,threshold:100,action:"Uses Sandstorm"},{type:c.HP,threshold:50,action:"Uses Boomburst"},{type:c.Time,threshold:30,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:30,action:"Uses Boomburst"}]}},{name:"Golurk",region:m.Terarium,info:{moves:["Shadow Punch","Drain Punch","Heavy Slam","Iron Defense","Gravity","Reflect"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.HP,threshold:90,action:"Uses Gravity"},{type:c.HP,threshold:70,action:"Player Stats & Status Reset"},{type:c.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:20,action:"Uses Reflect"}]}},{name:"Hitmonchan",region:m.Terarium,info:{moves:["Mach Punch","Mega Punch","Thunder Punch","Throat Chop","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.HP,threshold:95,action:"Uses Focus Energy"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Uses Bulk Up"},{type:c.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Hitmonlee",region:m.Terarium,info:{moves:["Low Sweep","Mega Kick","Blaze Kick","Scary Face","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.HP,threshold:95,action:"Uses Focus Energy"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Uses Bulk Up"},{type:c.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Hitmontop",region:m.Terarium,info:{moves:["Triple Kick","Sucker Punch","Gyro Ball","Triple Axel","Focus Energy","Bulk Up","Close Combat"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:c.HP,threshold:95,action:"Uses Focus Energy"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Uses Bulk Up"},{type:c.HP,threshold:10,action:"Uses Close Combat"}]}},{name:"Kingdra",region:m.Terarium,info:{moves:["Dragon Pulse","Hydro Pump","Flash Cannon","Yawn","Rain Dance","Focus Energy"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Rain Dance"},{type:c.HP,threshold:50,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Uses Focus Energy"}]}},{name:"Lapras",region:m.Terarium,info:{moves:["Ice Beam","Freeze-Dry","Sparkling Aria","Body Press","Sing","Mist","Snowscape"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.HP,threshold:95,action:"Uses Sing"},{type:c.HP,threshold:70,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Uses Mist"},{type:c.HP,threshold:30,action:"Uses Snowscape"}]}},{name:"Magmortar",region:m.Terarium,info:{moves:["Flamethrower","Psychic","Focus Blast","Clear Smog","Sunny Day","Will-O-Wisp"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Sunny Day"},{type:c.HP,threshold:75,action:"Uses Will-O-Wisp"},{type:c.HP,threshold:50,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Malamar",region:m.Terarium,info:{moves:["Foul Play","Psycho Cut","Night Slash","Taunt","Topsy-Turvy","Superpower"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.HP,threshold:95,action:"Uses Topsy-Turvy"},{type:c.HP,threshold:75,action:"Uses Superpower"},{type:c.HP,threshold:75,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Player Stats & Status Reset"}]}},{name:"Metagross",region:m.Terarium,info:{moves:["Zen Headbutt","Meteor Mash","Agility","Bullet Punch","Light Screen","Magnet Rise"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.HP,threshold:90,action:"Uses Light Screen"},{type:c.HP,threshold:50,action:"Uses Magnet Rise"},{type:c.HP,threshold:25,action:"Stats & Status Reset"},{type:c.Time,threshold:20,action:"Reduce Tera Orb Charge"}]}},{name:"Minior",region:m.Terarium,info:{moves:["Power Gem","Acrobatics","Take Down","Swift","Sandstorm","Shell Smash"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.HP,threshold:90,action:"Uses Sandstorm"},{type:c.HP,threshold:49,action:"Player Stats & Status Reset"},{type:c.HP,threshold:49,action:"Uses Shell Smash"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"}]}},{name:"Porygon-Z",formName:"porygonz",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Magnet Rise"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.HP,threshold:100,action:"Uses Magnet Rise"},{type:c.HP,threshold:70,action:"Player Stats & Status Reset"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.HP,threshold:10,action:"Player Stats & Status Reset"}]}},{name:"Porygon2",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Magnet Rise"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.HP,threshold:100,action:"Uses Magnet Rise"},{type:c.HP,threshold:70,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Stats & Status Reset"},{type:c.HP,threshold:10,action:"Stats & Status Reset"}]}},{name:"Reuniclus",region:m.Terarium,info:{moves:["Psychic","Psyshock","Gravity","Shadow Ball","Psychic Terrain","Reflect"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.HP,threshold:75,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Uses Psychic Terrain"},{type:c.HP,threshold:49,action:"Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Reflect"}]}},{name:"Rhyperior",region:m.Terarium,info:{moves:["Earthquake","Rock Wrecker","Brick Break","Surf","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.HP,threshold:75,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Uses Sandstorm"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:20,action:"Uses Rock Wrecker"}]}},{name:"Skarmory",region:m.Terarium,info:{moves:["Steel Wing","Drill Peck","X-Scissor","Feint","Iron Defense","Swords Dance","Tailwind"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.HP,threshold:90,action:"Uses Iron Defense"},{type:c.HP,threshold:70,action:"Uses Swords Dance"},{type:c.HP,threshold:30,action:"Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Tailwind"}]}}],zi=[{name:"Amoonguss",region:m.Paldea,info:{moves:["Energy Ball","Foul Play","Spore","Sludge Bomb","Grassy Terrain"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:c.Time,threshold:90,action:"Uses Grassy Terrain"},{type:c.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Grassy Terrain"}]}},{name:"Annihilape",region:m.Paldea,info:{moves:["Close Combat","Shadow Claw","Assurance","Focus Energy","Bulk Up","Rage Fist"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.Time,threshold:95,action:"Stats & Status Reset"},{type:c.HP,threshold:90,action:"Uses Bulk Up"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Bulk Up"},{type:c.Time,threshold:5,action:"Uses Rage Fist"}]}},{name:"Armarouge",region:m.Paldea,info:{moves:["Armor Cannon","Psychic","Night Shade","Will-O-Wisp","Calm Mind","Sunny Day"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:c.Time,threshold:90,action:"Uses Calm Mind"},{type:c.Time,threshold:65,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Avalugg",region:m.Paldea,info:{moves:["Icicle Crash","Heavy Slam","Snowscape","Ice Spinner","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:c.Time,threshold:90,action:"Uses Snowscape"},{type:c.Time,threshold:75,action:"Uses Iron Defense"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Baxcalibur",region:m.Paldea,info:{moves:["Icicle Spear","Dragon Rush","Snowscape","Body Press"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.Time,threshold:80,action:"Uses Snowscape"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Snowscape"},{type:c.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Blissey",region:m.Paldea,info:{moves:["Dazzling Gleam","Hyper Voice","Sing","Light Screen","Defense Curl"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:c.HP,threshold:95,action:"Uses Defense Curl"},{type:c.HP,threshold:75,action:"Uses Defense Curl"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Sing"},{type:c.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Bombirdier",region:m.Paldea,info:{moves:["Rock Slide","Acrobatics","Knock Off","Feather Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.Time,threshold:80,action:"Uses Knock Off"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Feather Dance"}]}},{name:"Breloom",region:m.Paldea,info:{moves:["Bullet Seed","Low Sweep","Spore","Aerial Ace","Grassy Terrain"],specialMoves:["Spore"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.Time,threshold:80,action:"Uses Grassy Terrain"},{type:c.HP,threshold:75,action:"Uses Spore"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Ceruledge",region:m.Paldea,info:{moves:["Bitter Blade","Shadow Claw","Psycho Cut","Will-O-Wisp","Sunny Day"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.Time,threshold:85,action:"Stats & Status Reset"},{type:c.Time,threshold:65,action:"Uses Will-O-Wisp"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Cetitan",region:m.Paldea,info:{moves:["Ice Spinner","Body Slam","Snowscape","Stomping Tantrum","Yawn"],specialMoves:["Yawn"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:c.Time,threshold:95,action:"Stats & Status Reset"},{type:c.Time,threshold:75,action:"Uses Snowscape"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Yawn"}]}},{name:"Clawitzer",region:m.Paldea,info:{moves:["Water Pulse","Dragon Pulse","Aura Sphere","Crabhammer","Rain Dance"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:c.Time,threshold:85,action:"Uses Rain Dance"},{type:c.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Water Pulse"}]}},{name:"Clodsire",region:m.Paldea,info:{moves:["Earthquake","Poison Jab","Megahorn","Yawn"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:c.Time,threshold:95,action:"Player Stats & Status Reset"},{type:c.HP,threshold:75,action:"Uses Yawn"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Earthquake"}]}},{name:"Corviknight",region:m.Paldea,info:{moves:["Iron Head","Drill Peck","Body Press","Hone Claws","Tailwind"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:c.Time,threshold:90,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:75,action:"Uses Hone Claws"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Tailwind"}]}},{name:"Cyclizar",region:m.Paldea,info:{moves:["Double-Edge","Dragon Claw","Dragon Pulse","Knock Off","Shift Gear"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:c.Time,threshold:95,action:"Stats & Status Reset"},{type:c.Time,threshold:80,action:"Uses Knock Off"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Dachsbun",region:m.Paldea,info:{moves:["Play Rough","Double-Edge","Bite","Baby-Doll Eyes"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:c.Time,threshold:95,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Play Rough"}]}},{name:"Ditto",region:m.Paldea,info:{moves:["Transform"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Dondozo",region:m.Paldea,info:{moves:["Wave Crash","Order Up","Heavy Slam","Yawn","Rain Dance","Curse"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:c.Time,threshold:95,action:"Stats & Status Reset"},{type:c.HP,threshold:75,action:"Uses Rain Dance"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Curse"}]}},{name:"Dragalge",region:m.Paldea,info:{moves:["Dragon Pulse","Sludge Bomb","Water Pulse","Toxic","Acid Spray","Draco Meteor"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:c.Time,threshold:85,action:"Uses Acid Spray"},{type:c.HP,threshold:75,action:"Uses Draco Meteor"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:30,action:"Uses Draco Meteor"}]}},{name:"Dragapult",region:m.Paldea,info:{moves:["Shadow Ball","Dragon Pulse","Thunderbolt","Flamethrower","Reflect","Light Screen"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:c.Time,threshold:85,action:"Uses Reflect"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Light Screen"}]}},{name:"Dragonite",region:m.Paldea,info:{moves:["Dragon Rush","Extreme Speed","Dragon Dance","Aqua Tail","Light Screen"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.HP,threshold:95,action:"Stats & Status Reset"},{type:c.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:65,action:"Uses Light Screen"},{type:c.Time,threshold:50,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Dragon Dance"}]}},{name:"Espeon",region:m.Paldea,info:{moves:["Tera Blast","Psychic","Psyshock","Tickle","Psychic Terrain","Calm Mind"],specialMoves:["Tickle"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:c.HP,threshold:90,action:"Uses Psychic Terrain"},{type:c.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Calm Mind"},{type:c.HP,threshold:20,action:"Uses Psychic Terrain"}]}},{name:"Farigiraf",region:m.Paldea,info:{moves:["Twin Beam","Hyper Voice","Low Kick","Uproar","Agility"],specialMoves:["Uproar"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:c.Time,threshold:90,action:"Uses Agility"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Uproar"}]}},{name:"Flareon",region:m.Paldea,info:{moves:["Tera Blast","Flare Blitz","Lava Plume","Will-O-Wisp","Sunny Day","Curse"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.HP,threshold:90,action:"Uses Sunny Day"},{type:c.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Curse"},{type:c.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Frosmoth",region:m.Paldea,info:{moves:["Blizzard","Bug Buzz","Hurricane","Snowscape"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:c.Time,threshold:80,action:"Uses Snowscape"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Gallade",region:m.Paldea,info:{moves:["Psycho Cut","Close Combat","Will-O-Wisp","Aerial Ace","Hypnosis","Disable","Psychic Terrain"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.Time,threshold:85,action:"Uses Hypnosis"},{type:c.HP,threshold:75,action:"Uses Disable"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:25,action:"Uses Psychic Terrain"}]}},{name:"Garchomp",region:m.Paldea,info:{moves:["Outrage","Earthquake","Flamethrower","Rock Slide","Swords Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.HP,threshold:90,action:"Stats & Status Reset"},{type:c.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Swords Dance"},{type:c.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Gardevoir",region:m.Paldea,info:{moves:["Moonblast","Psychic","Calm Mind","Thunder Wave","Misty Terrain","Psychic Terrain"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:c.Time,threshold:85,action:"Uses Misty Terrain"},{type:c.HP,threshold:75,action:"Uses Calm Mind"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Psychic Terrain"}]}},{name:"Garganacl",region:m.Paldea,info:{moves:["Stone Edge","Heavy Slam","Salt Cure","Hammer Arm","Sandstorm","Rock Slide"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:c.HP,threshold:90,action:"Uses Sandstorm"},{type:c.Time,threshold:60,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Gengar",region:m.Paldea,info:{moves:["Shadow Ball","Sludge Bomb","Dazzling Gleam","Will-O-Wisp","Hypnosis"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:c.Time,threshold:85,action:"Uses Hypnosis"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Hypnosis"}]}},{name:"Glaceon",region:m.Paldea,info:{moves:["Tera Blast","Ice Beam","Blizzard","Charm","Snowscape","Calm Mind"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:c.HP,threshold:90,action:"Uses Snowscape"},{type:c.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Calm Mind"},{type:c.HP,threshold:20,action:"Uses Snowscape"}]}},{name:"Glimmora",region:m.Paldea,info:{moves:["Power Gem","Sludge Wave","Hyper Beam","Rock Polish","Sandstorm"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:c.HP,threshold:90,action:"Uses Sandstorm"},{type:c.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:55,action:"Reduce Tera Orb Charge"},{type:c.Time,threshold:50,action:"Reduce Tera Orb Charge"}]}},{name:"Goodra",region:m.Paldea,info:{moves:["Dragon Pulse","Surf","Sludge Bomb","Power Whip","Rain Dance"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:c.HP,threshold:90,action:"Uses Rain Dance"},{type:c.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Rain Dance"}]}},{name:"Grafaiai",region:m.Paldea,info:{moves:["Knock Off","Gunk Shot","Take Down","Flatter","Toxic"],specialMoves:["Toxic"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:c.Time,threshold:95,action:"Stats & Status Reset"},{type:c.HP,threshold:75,action:"Uses Toxic"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Gunk Shot"}]}},{name:"Gyarados",region:m.Paldea,info:{moves:["Aqua Tail","Crunch","Hurricane","Ice Fang","Taunt","Dragon Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.HP,threshold:90,action:"Stats & Status Reset"},{type:c.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Taunt"},{type:c.HP,threshold:20,action:"Uses Dragon Dance"}]}},{name:"Haxorus",region:m.Paldea,info:{moves:["Outrage","Crunch","Giga Impact","First Impression","Dragon Dance"],specialMoves:["First Impression"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.Time,threshold:90,action:"Stats & Status Reset"},{type:c.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Dragon Dance"}]}},{name:"Heracross",region:m.Paldea,info:{moves:["Megahorn","Close Combat","Thrash","Leer","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.HP,threshold:75,action:"Uses Bulk Up"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Hippowdon",region:m.Paldea,info:{moves:["Earthquake","Ice Fang","Yawn","Rock Slide"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:c.Time,threshold:90,action:"Uses Yawn"},{type:c.HP,threshold:60,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Yawn"}]}},{name:"Hydreigon",region:m.Paldea,info:{moves:["Dark Pulse","Dragon Pulse","Crunch","Taunt","Work Up","Nasty Plot"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:c.HP,threshold:85,action:"Uses Taunt"},{type:c.Time,threshold:75,action:"Uses Work Up"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Stats & Status Reset"},{type:c.Time,threshold:20,action:"Uses Nasty Plot"}]}},{name:"Jolteon",region:m.Paldea,info:{moves:["Tera Blast","Thunderbolt","Shadow Ball","Thunder Wave","Electric Terrain","Calm Mind"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:c.HP,threshold:90,action:"Uses Electric Terrain"},{type:c.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Calm Mind"},{type:c.HP,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Kilowattrel",region:m.Paldea,info:{moves:["Hurricane","Thunder","Uproar","Scary Face","Charge","Rain Dance"],specialMoves:["Charge","Rain Dance"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:c.HP,threshold:90,action:"Uses Charge"},{type:c.Time,threshold:85,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Kingambit",region:m.Paldea,info:{moves:["Iron Head","Night Slash","Kowtow Cleave","Thunder Wave","Swords Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.Time,threshold:85,action:"Stats & Status Reset"},{type:c.Time,threshold:65,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Klawf",region:m.Paldea,info:{moves:["Stone Edge","Rock Smash","X-Scissor","Sandstorm","Knock Off","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:c.Time,threshold:95,action:"Stats & Status Reset"},{type:c.HP,threshold:80,action:"Uses Knock Off"},{type:c.HP,threshold:49,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Iron Defense"}]}},{name:"Leafeon",region:m.Paldea,info:{moves:["Tera Blast","Leaf Blade","Double Kick","Charm","Sunny Day","Swords Dance"],specialMoves:["Double Kick"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.HP,threshold:90,action:"Uses Sunny Day"},{type:c.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Swords Dance"},{type:c.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Lycanroc",imageAlt:"-d",region:m.Paldea,info:{moves:["Accelerock","Rock Slide","Crunch","Taunt","Sandstorm"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.Time,threshold:80,action:"Uses Sandstorm"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:20,action:"Uses Rock Slide"}]}},{name:"Mabosstiff",region:m.Paldea,info:{moves:["Crunch","Reversal","Outrage","Take Down","Taunt"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.Time,threshold:80,action:"Uses Taunt"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Magnezone",region:m.Paldea,info:{moves:["Thunder","Flash Cannon","Tri Attack","Thunder Wave","Rain Dance","Iron Defense","Electric Terrain"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:c.HP,threshold:80,action:"Uses Rain Dance"},{type:c.Time,threshold:75,action:"Uses Iron Defense"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Thunder Wave"},{type:c.Time,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Maushold",imageAlt:"-f",region:m.Paldea,info:{moves:["Play Rough","Take Down","Low Kick","Charm","Tidy Up"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:c.Time,threshold:95,action:"Stats & Status Reset"},{type:c.Time,threshold:75,action:"Uses Charm"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Tidy Up"}]}},{name:"Mimikyu",region:m.Paldea,info:{moves:["Play Rough","Shadow Claw","Shadow Sneak","Wood Hammer","Misty Terrain","Swords Dance"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:c.Time,threshold:90,action:"Uses Misty Terrain"},{type:c.Time,threshold:75,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Orthworm",region:m.Paldea,info:{moves:["Iron Head","Earthquake","Smack Down","Sandstorm","Coil"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:c.Time,threshold:95,action:"Uses Coil"},{type:c.HP,threshold:80,action:"Uses Sandstorm"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Sandstorm"}]}},{name:"Pawmot",region:m.Paldea,info:{moves:["Wild Charge","Close Combat","Double Shock","Nuzzle","Electric Terrain"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.Time,threshold:95,action:"Stats & Status Reset"},{type:c.HP,threshold:80,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Electric Terrain"}]}},{name:"Pelipper",region:m.Paldea,info:{moves:["Hurricane","Hydro Pump","Mist","Supersonic","Rain Dance","Agility"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:c.HP,threshold:90,action:"Uses Rain Dance"},{type:c.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Agility"},{type:c.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Pincurchin",region:m.Paldea,info:{moves:["Zing Zap","Thunder","Surf","Poison Jab","Thunder Wave","Electric Terrain"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.Time,threshold:90,action:"Uses Thunder Wave"},{type:c.Time,threshold:65,action:"Uses Electric Terrain"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Electric Terrain"}]}},{name:"Revavroom",region:m.Paldea,info:{moves:["Gunk Shot","Overheat","Iron Head","Taunt","Scary Face","Shift Gear"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.Time,threshold:85,action:"Uses Scary Face"},{type:c.HP,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Shift Gear"},{type:c.HP,threshold:20,action:"Uses Shift Gear"}]}},{name:"Salamence",region:m.Paldea,info:{moves:["Outrage","Dual Wingbeat","Flamethrower","Tera Blast","Dragon Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.HP,threshold:90,action:"Stats & Status Reset"},{type:c.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Dragon Dance"},{type:c.HP,threshold:30,action:"Stats & Status Reset"}]}},{name:"Scizor",region:m.Paldea,info:{moves:["X-Scissor","Bullet Punch","Close Combat","Iron Head","Iron Defense","Focus Energy"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.Time,threshold:85,action:"Uses Iron Defense"},{type:c.HP,threshold:75,action:"Uses Focus Energy"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"}]}},{name:"Slowking",region:m.Paldea,info:{moves:["Surf","Psyshock","Trick Room","Flamethrower","Light Screen","Rain Dance","Calm Mind"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:c.Time,threshold:70,action:"Uses Light Screen"},{type:c.HP,threshold:90,action:"Uses Rain Dance"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Calm Mind"},{type:c.HP,threshold:20,action:"Uses Trick Room"}]}},{name:"Staraptor",region:m.Paldea,info:{moves:["Close Combat","Brave Bird","Double-Edge","Feather Dance"],specialMoves:["Double-Edge","Feather Dance"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.Time,threshold:85,action:"Stats & Status Reset"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Brave Bird"}]}},{name:"Sylveon",region:m.Paldea,info:{moves:["Tera Blast","Hyper Voice","Moonblast","Yawn","Misty Terrain","Calm Mind"],specialMoves:["Yawn"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:c.HP,threshold:90,action:"Uses Misty Terrain"},{type:c.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Calm Mind"},{type:c.HP,threshold:20,action:"Uses Misty Terrain"}]}},{name:"Talonflame",region:m.Paldea,info:{moves:["Brave Bird","Flare Blitz","Flamethrower","Tera Blast","Sunny Day","Swords Dance"],herbs:[{name:"Sweet",chance:3.03}],actions:[{type:c.HP,threshold:90,action:"Uses Sunny Day"},{type:c.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Swords Dance"}]}},{name:"Tauros",formName:"taurospaldeacombat",imageAlt:"-p",region:m.Paldea,info:{moves:["Close Combat","Thrash","Zen Headbutt","Raging Bull","Bulk Up","Screech"],specialMoves:["Screech"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.Time,threshold:95,action:"Stats & Status Reset"},{type:c.HP,threshold:90,action:"Uses Bulk Up"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Screech"}]}},{name:"Tauros (Fire)",formName:"taurospaldeablaze",imageAlt:"-b",region:m.Paldea,info:{moves:["Flare Blitz","Close Combat","Flamethrower","Headbutt","Sunny Day","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.HP,threshold:90,action:"Uses Sunny Day"},{type:c.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Bulk Up"},{type:c.HP,threshold:20,action:"Uses Sunny Day"}]}},{name:"Tauros (Water)",formName:"taurospaldeaaqua",imageAlt:"-a",region:m.Paldea,info:{moves:["Wave Crash","Close Combat","Surf","Headbutt","Rain Dance","Bulk Up"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.HP,threshold:90,action:"Uses Rain Dance"},{type:c.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Bulk Up"},{type:c.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Tinkaton",region:m.Paldea,info:{moves:["Gigaton Hammer","Play Rough","Knock Off","Thunder Wave","Misty Terrain","Sweet Kiss"],specialMoves:["Misty Terrain"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:c.Time,threshold:90,action:"Uses Misty Terrain"},{type:c.HP,threshold:75,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Sweet Kiss"},{type:c.HP,threshold:15,action:"Uses Sweet Kiss"}]}},{name:"Toedscruel",region:m.Paldea,info:{moves:["Energy Ball","Earth Power","Spore","Hex","Grassy Terrain"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:c.HP,threshold:90,action:"Uses Grassy Terrain"},{type:c.Time,threshold:75,action:"Uses Spore"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Spore"}]}},{name:"Torkoal",region:m.Paldea,info:{moves:["Lava Plume","Yawn","Clear Smog","Body Slam","Sunny Day","Iron Defense"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:c.HP,threshold:90,action:"Uses Sunny Day"},{type:c.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Yawn"},{type:c.HP,threshold:20,action:"Uses Iron Defense"}]}},{name:"Toxapex",region:m.Paldea,info:{moves:["Water Pulse","Liquidation","Poison Jab","Pin Missile","Chilling Water","Toxic"],herbs:[{name:"Salty",chance:3.03}],actions:[{type:c.HP,threshold:95,action:"Uses Chilling Water"},{type:c.Time,threshold:75,action:"Uses Toxic"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Chilling Water"}]}},{name:"Tyranitar",region:m.Paldea,info:{moves:["Stone Edge","Crunch","Screech","Rock Blast","Iron Defense"],herbs:[{name:"Spicy",chance:3.05}],actions:[{type:c.HP,threshold:90,action:"Stats & Status Reset"},{type:c.Time,threshold:75,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Crunch"},{type:c.HP,threshold:20,action:"Uses Iron Defense"}]}},{name:"Umbreon",region:m.Paldea,info:{moves:["Tera Blast","Dark Pulse","Foul Play","Tickle","Calm Mind","Curse"],specialMoves:["Curse","Tickle"],herbs:[{name:"Sour",chance:3.03}],actions:[{type:c.HP,threshold:90,action:"Uses Calm Mind"},{type:c.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Curse"},{type:c.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Vaporeon",region:m.Paldea,info:{moves:["Tera Blast","Surf","Hyper Voice","Yawn","Rain Dance","Calm Mind"],specialMoves:["Yawn"],herbs:[{name:"Spicy",chance:3.03},{name:"Sweet",chance:3.03},{name:"Salty",chance:3.03},{name:"Bitter",chance:3.03},{name:"Sour",chance:3.03}],actions:[{type:c.HP,threshold:90,action:"Uses Rain Dance"},{type:c.Time,threshold:70,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Calm Mind"},{type:c.HP,threshold:20,action:"Uses Rain Dance"}]}},{name:"Volcarona",region:m.Paldea,info:{moves:["Bug Buzz","Flamethrower","Hurricane","Tailwind","Amnesia","Sunny Day","Light Screen","Quiver Dance"],herbs:[{name:"Bitter",chance:3.03}],actions:[{type:c.HP,threshold:85,action:"Uses Amnesia"},{type:c.HP,threshold:75,action:"Uses Sunny Day"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Light Screen"},{type:c.Time,threshold:20,action:"Uses Quiver Dance"}]}},{name:"Ambipom",region:m.Kitakami,info:{moves:["Double Hit","Ice Punch","Fire Punch","Thunder Punch","Screech"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:c.HP,threshold:90,action:"Player Stats & Status Reset"},{type:c.HP,threshold:89,action:"Uses Screech"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:20,action:"Uses Double Hit"}]}},{name:"Basculegion (Male)",formName:"basculegion",region:m.Kitakami,info:{moves:["Wave Crash","Aqua Jet","Crunch","Scary Face","Icy Wind","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:95,action:"Uses Icy Wind"},{type:c.HP,threshold:80,action:"Stats & Status Reset"},{type:c.HP,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Uses Rain Dance"},{type:c.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Basculegion (Female)",formName:"basculegion",imageAlt:"-f",region:m.Kitakami,info:{moves:["Surf","Aqua Jet","Shadow Ball","Scary Face","Icy Wind","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:95,action:"Uses Icy Wind"},{type:c.HP,threshold:80,action:"Stats & Status Reset"},{type:c.HP,threshold:60,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Uses Rain Dance"},{type:c.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Chandelure",region:m.Kitakami,info:{moves:["Flamethrower","Shadow Ball","Will-O-Wisp","Poltergeist","Heat Wave","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.HP,threshold:90,action:"Player Stats & Status Reset"},{type:c.HP,threshold:75,action:"Uses Heat Wave"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:40,action:"Uses Sunny Day"},{type:c.HP,threshold:35,action:"Stats & Status Reset"}]}},{name:"Clefable",region:m.Kitakami,info:{moves:["Moonblast","Psychic","Meteor Mash","Encore","Dazzling Gleam","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:95,action:"Uses Encore"},{type:c.HP,threshold:40,action:"Uses Dazzling Gleam"},{type:c.HP,threshold:41,action:"Uses Dazzling Gleam"},{type:c.HP,threshold:60,action:"Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Calm Mind"}]}},{name:"Conkeldurr",region:m.Kitakami,info:{moves:["Rock Slide","Close Combat","Mach Punch","Slam","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.HP,threshold:90,action:"Stats & Status Reset"},{type:c.HP,threshold:89,action:"Uses Bulk Up"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:49,action:"Uses Bulk Up"},{type:c.Time,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Crawdaunt",region:m.Kitakami,info:{moves:["Aqua Jet","Crabhammer","Crunch","Giga Impact","Leer","Swords Dance"],specialMoves:["Aqua Jet"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.HP,threshold:90,action:"Stats & Status Reset"},{type:c.HP,threshold:65,action:"Player Stats & Status Reset"},{type:c.HP,threshold:60,action:"Uses Leer"},{type:c.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Dusknoir",region:m.Kitakami,info:{moves:["Poltergeist","Dark Pulse","Will-O-Wisp","Ice Punch","Gravity","Spite"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.HP,threshold:95,action:"Uses Gravity"},{type:c.HP,threshold:70,action:"Uses Spite"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:30,action:"Uses Spite"},{type:c.HP,threshold:10,action:"Stats & Status Reset"}]}},{name:"Gliscor",region:m.Kitakami,info:{moves:["Acrobatics","Knock Off","Quick Attack","Earthquake","Sandstorm","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Sandstorm"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Swords Dance"},{type:c.Time,threshold:15,action:"Uses Sandstorm"},{type:c.Time,threshold:5,action:"Uses Earthquake"}]}},{name:"Golem",region:m.Kitakami,info:{moves:["Earthquake","Rock Slide","Flail","Smack Down","Stone Edge","Iron Defense"],specialMoves:["Flail"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.HP,threshold:95,action:"Stats & Status Reset"},{type:c.HP,threshold:85,action:"Uses Stone Edge"},{type:c.Time,threshold:45,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:30,action:"Stats & Status Reset"},{type:c.HP,threshold:29,action:"Uses Iron Defense"}]}},{name:"Kommo-o",formName:"kommoo",region:m.Kitakami,info:{moves:["Focus Blast","Dragon Claw","Iron Head","Scary Face","Clangorous Soul","Reversal"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.HP,threshold:60,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Uses Clangorous Soul"},{type:c.HP,threshold:30,action:"Uses Clangorous Soul"},{type:c.Time,threshold:10,action:"Uses Reversal"}]}},{name:"Leavanny",region:m.Kitakami,info:{moves:["Leaf Blade","X-Scissor","Grassy Glide","Sticky Web","Grassy Terrain","Swords Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.HP,threshold:95,action:"Stats & Status Reset"},{type:c.HP,threshold:90,action:"Uses Grassy Terrain"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Ludicolo",region:m.Kitakami,info:{moves:["Energy Ball","Hydro Pump","Fake Out","Chilling Water","Rain Dance","Teeter Dance"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Rain Dance"},{type:c.HP,threshold:90,action:"Stats & Status Reset"},{type:c.HP,threshold:70,action:"Uses Chilling Water"},{type:c.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.Time,threshold:20,action:"Uses Teeter Dance"}]}},{name:"Mamoswine",region:m.Kitakami,info:{moves:["Icicle Crash","Ice Shard","Bulldoze","Freeze-Dry","Snowscape","Amnesia","Earthquake"],specialMoves:["Freeze-Dry"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Snowscape"},{type:c.HP,threshold:75,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Uses Amnesia"},{type:c.HP,threshold:10,action:"Uses Earthquake"},{type:c.Time,threshold:45,action:"Reduce Tera Orb Charge"}]}},{name:"Mandibuzz",region:m.Kitakami,info:{moves:["Dual Wingbeat","Dark Pulse","Toxic","Bone Rush","Snarl"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.HP,threshold:95,action:"Player Stats & Status Reset"},{type:c.HP,threshold:90,action:"Uses Snarl"},{type:c.HP,threshold:75,action:"Uses Snarl"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:40,action:"Uses Snarl"}]}},{name:"Mienshao",region:m.Kitakami,info:{moves:["Aerial Ace","Brick Break","Aura Sphere","Reversal","Calm Mind"],herbs:[{name:"Sweet",chance:2.36}],actions:[{type:c.HP,threshold:90,action:"Uses Calm Mind"},{type:c.HP,threshold:65,action:"Player Stats & Status Reset"},{type:c.HP,threshold:40,action:"Uses Calm Mind"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.Time,threshold:20,action:"Uses Aura Sphere"}]}},{name:"Milotic",region:m.Kitakami,info:{moves:["Dragon Pulse","Water Pulse","Safeguard","Aqua Tail","Coil","Hypnosis","Rain Dance"],specialMoves:["Hypnosis"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:99,action:"Player Stats & Status Reset"},{type:c.HP,threshold:75,action:"Uses Coil"},{type:c.HP,threshold:70,action:"Uses Hypnosis"},{type:c.Time,threshold:60,action:"Uses Rain Dance"},{type:c.Time,threshold:10,action:"Uses Hypnosis"}]}},{name:"Morpeko",region:m.Kitakami,info:{moves:["Aura Wheel","Lash Out","Thunder Wave","Torment","Taunt","Electric Terrain"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Taunt"},{type:c.HP,threshold:75,action:"Uses Taunt"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:30,action:"Uses Electric Terrain"},{type:c.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Ninetales",region:m.Kitakami,info:{moves:["Flamethrower","Extrasensory","Will-O-Wisp","Burning Jealousy","Heat Wave","Sunny Day"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:90,action:"Player Stats & Status Reset"},{type:c.HP,threshold:75,action:"Uses Heat Wave"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.HP,threshold:25,action:"Uses Sunny Day"},{type:c.Time,threshold:10,action:"Uses Heat Wave"}]}},{name:"Politoed",region:m.Kitakami,info:{moves:["Chilling Water","Surf","Ice Beam","Encore","Amnesia"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.HP,threshold:85,action:"Uses Chilling Water"},{type:c.HP,threshold:70,action:"Stats & Status Reset"},{type:c.HP,threshold:50,action:"Player Stats & Status Reset"},{type:c.HP,threshold:30,action:"Stats & Status Reset"},{type:c.HP,threshold:29,action:"Uses Amnesia"}]}},{name:"Poliwrath",region:m.Kitakami,info:{moves:["Brick Break","Liquidation","Focus Blast","Haze","Rain Dance","Bulk Up"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:95,action:"Uses Rain Dance"},{type:c.HP,threshold:70,action:"Player Stats & Status Reset"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:45,action:"Uses Bulk Up"},{type:c.HP,threshold:20,action:"Uses Bulk Up"}]}},{name:"Quagsire",region:m.Kitakami,info:{moves:["Earthquake","Liquidation","Yawn","Toxic","Curse","Rain Dance"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.HP,threshold:90,action:"Player Stats & Status Reset"},{type:c.HP,threshold:75,action:"Stats & Status Reset"},{type:c.HP,threshold:70,action:"Uses Curse"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:30,action:"Uses Rain Dance"}]}},{name:"Shiftry",region:m.Kitakami,info:{moves:["Leaf Blade","Sucker Punch","Fake Out","Extrasensory","Sunny Day","Trailblaze","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Sunny Day"},{type:c.HP,threshold:90,action:"Player Stats & Status Reset"},{type:c.HP,threshold:70,action:"Uses Trailblaze"},{type:c.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:30,action:"Uses Swords Dance"}]}},{name:"Sinistcha",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.HP,threshold:85,action:"Stats & Status Reset"},{type:c.HP,threshold:75,action:"Uses Grassy Terrain"},{type:c.HP,threshold:40,action:"Uses Grassy Terrain"},{type:c.HP,threshold:15,action:"Uses Matcha Gotcha"},{type:c.Time,threshold:10,action:"Uses Matcha Gotcha"}]}},{name:"Sinistcha (Masterpiece)",formName:"sinistchamasterpiece",imageAlt:"-m",region:m.Kitakami,info:{moves:["Energy Ball","Shadow Ball","Stun Spore","Scald","Grassy Terrain","Matcha Gotcha"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.HP,threshold:85,action:"Stats & Status Reset"},{type:c.HP,threshold:75,action:"Uses Grassy Terrain"},{type:c.HP,threshold:40,action:"Uses Grassy Terrain"},{type:c.HP,threshold:15,action:"Uses Matcha Gotcha"},{type:c.Time,threshold:10,action:"Uses Matcha Gotcha"}]}},{name:"Snorlax",region:m.Kitakami,info:{moves:["Facade","Crunch","Yawn","Heavy Slam"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.HP,threshold:95,action:"Stats & Status Reset"},{type:c.HP,threshold:70,action:"Stats & Status Reset"},{type:c.HP,threshold:40,action:"Stats & Status Reset"},{type:c.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:20,action:"Stats & Status Reset"}]}},{name:"Trevenant",region:m.Kitakami,info:{moves:["Wood Hammer","Shadow Claw","Forest's Curse","Will-O-Wisp","Grassy Terrain","Disable"],specialMoves:["Disable"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.HP,threshold:100,action:"Uses Grassy Terrain"},{type:c.HP,threshold:75,action:"Uses Disable"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Wood Hammer"}]}},{name:"Yanmega",region:m.Kitakami,info:{moves:["Bug Buzz","Air Slash","Quick Attack","Ancient Power"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.HP,threshold:95,action:"Uses Ancient Power"},{type:c.HP,threshold:85,action:"Uses Ancient Power"},{type:c.Time,threshold:50,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Ancient Power"}]}},{name:"Alcremie",region:m.Terarium,info:{moves:["Dazzling Gleam","Psychic","Encore","Psyshock","Acid Armor"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.HP,threshold:90,action:"Uses Encore"},{type:c.HP,threshold:50,action:"Uses Acid Armor"},{type:c.HP,threshold:25,action:"Uses Acid Armor"},{type:c.Time,threshold:30,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:20,action:"Player Stats & Status Reset"}]}},{name:"Dugtrio",formName:"dugtrioalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Bulldoze","Iron Head","Ancient Power","Metal Claw","Sandstorm","Earthquake"],specialMoves:["Ancient Power"],herbs:[{name:"Sour",chance:2.4}],actions:[{type:c.HP,threshold:90,action:"Stats & Status Reset"},{type:c.Time,threshold:80,action:"Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Uses Sandstorm"},{type:c.HP,threshold:25,action:"Uses Earthquake"}]}},{name:"Duraludon",region:m.Terarium,info:{moves:["Flash Cannon","Dragon Pulse","Breaking Swipe","Metal Claw","Stealth Rock","Light Screen","Reflect"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Stealth Rock"},{type:c.HP,threshold:80,action:"Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:40,action:"Uses Light Screen"},{type:c.HP,threshold:35,action:"Uses Reflect"}]}},{name:"Electivire",region:m.Terarium,info:{moves:["Discharge","Thunder Punch","Earthquake","Brick Break","Electric Terrain"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Electric Terrain"},{type:c.HP,threshold:70,action:"Player Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Uses Electric Terrain"},{type:c.HP,threshold:25,action:"Stats & Status Reset"}]}},{name:"Excadrill",region:m.Terarium,info:{moves:["Iron Head","Earthquake","Drill Run","Slash","Sandstorm"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Sandstorm"},{type:c.HP,threshold:80,action:"Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:40,action:"Uses Sandstorm"},{type:c.Time,threshold:25,action:"Uses Sandstorm"}]}},{name:"Exeggutor",formName:"exeggutoralola",imageAlt:"-a",region:m.Terarium,info:{moves:["Dragon Hammer","Extrasensory","Seed Bomb","Hypnosis","Trick Room"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.HP,threshold:80,action:"Player Stats & Status Reset"},{type:c.HP,threshold:65,action:"Uses Hypnosis"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:40,action:"Uses Trick Room"},{type:c.HP,threshold:33,action:"Player Stats & Status Reset"}]}},{name:"Flygon",region:m.Terarium,info:{moves:["Earthquake","Dragon Claw","Quick Attack","Breaking Swipe","Dragon Dance","Draco Meteor"],specialMoves:["Quick Attack"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:c.HP,threshold:80,action:"Stats & Status Reset"},{type:c.HP,threshold:79,action:"Uses Dragon Dance"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:45,action:"Uses Dragon Dance"},{type:c.HP,threshold:5,action:"Uses Draco Meteor"}]}},{name:"Golem",formName:"golemalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Heavy Slam","Body Slam","Rock Slide","Discharge","Giga Impact"],herbs:[{name:"Sweet",chance:2.4}],actions:[{type:c.HP,threshold:90,action:"Stats & Status Reset"},{type:c.Time,threshold:80,action:"Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Uses Rock Slide"},{type:c.HP,threshold:25,action:"Uses Giga Impact"}]}},{name:"Golurk",region:m.Terarium,info:{moves:["Dynamic Punch","Shadow Punch","Heavy Slam","Ice Punch","Curse"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.HP,threshold:90,action:"Player Stats & Status Reset"},{type:c.HP,threshold:95,action:"Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Uses Curse"},{type:c.HP,threshold:35,action:"Uses Curse"}]}},{name:"Kingdra",region:m.Terarium,info:{moves:["Draco Meteor","Dragon Pulse","Water Pulse","Flash Cannon","Focus Energy","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Focus Energy"},{type:c.HP,threshold:65,action:"Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:40,action:"Uses Rain Dance"},{type:c.HP,threshold:5,action:"Uses Draco Meteor"}]}},{name:"Kleavor",region:m.Terarium,info:{moves:["X-Scissor","Close Combat","Air Cutter","Night Slash","Stone Axe","Swords Dance"],specialMoves:["Night Slash"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.HP,threshold:95,action:"Uses Stone Axe"},{type:c.HP,threshold:75,action:"Player Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:35,action:"Uses Swords Dance"},{type:c.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Lapras",region:m.Terarium,info:{moves:["Blizzard","Hydro Pump","Body Slam","Sing","Snowscape","Rain Dance"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Snowscape"},{type:c.HP,threshold:50,action:"Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Uses Rain Dance"},{type:c.HP,threshold:30,action:"Player Stats & Status Reset"}]}},{name:"Magmortar",region:m.Terarium,info:{moves:["Lava Plume","Psychic","Scorching Sands","Taunt","Sunny Day"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Taunt"},{type:c.HP,threshold:95,action:"Uses Sunny Day"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Player Stats & Status Reset"},{type:c.HP,threshold:20,action:"Uses Lava Plume"}]}},{name:"Malamar",region:m.Terarium,info:{moves:["Psycho Cut","Night Slash","Foul Play","Pluck","Taunt","Topsy-Turvy"],herbs:[{name:"Spicy",chance:2.4},{name:"Sweet",chance:2.4},{name:"Salty",chance:2.4},{name:"Bitter",chance:2.4},{name:"Sour",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Taunt"},{type:c.HP,threshold:80,action:"Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Uses Topsy-Turvy"},{type:c.HP,threshold:25,action:"Uses Topsy-Turvy"}]}},{name:"Metagross",region:m.Terarium,info:{moves:["Zen Headbutt","Iron Head","Heavy Slam","Aerial Ace","Agility","Hone Claws"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Agility"},{type:c.HP,threshold:80,action:"Uses Iron Head"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:40,action:"Uses Hone Claws"},{type:c.HP,threshold:20,action:"Uses Hone Claws"}]}},{name:"Muk",formName:"mukalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Crunch","Hex","Gunk Shot","Flamethrower","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.HP,threshold:90,action:"Stats & Status Reset"},{type:c.Time,threshold:80,action:"Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Uses Toxic"},{type:c.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Ninetales",formName:"ninetalesalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Moonblast","Blizzard","Ice Shard","Dazzling Gleam","Aurora Veil","Calm Mind","Snowscape"],specialMoves:["Moonblast"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Aurora Veil"},{type:c.HP,threshold:80,action:"Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:40,action:"Uses Calm Mind"},{type:c.HP,threshold:24,action:"Uses Snowscape"}]}},{name:"Overqwil",region:m.Terarium,info:{moves:["Barb Barrage","Crunch","Pin Missile","Fell Stinger","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Toxic"},{type:c.HP,threshold:80,action:"Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Uses Toxic"},{type:c.HP,threshold:25,action:"Uses Barb Barrage"}]}},{name:"Porygon-Z",formName:"porygonz",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Thunder Wave","Trick Room"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:95,action:"Stats & Status Reset"},{type:c.HP,threshold:75,action:"Uses Thunder Wave"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Uses Trick Room"},{type:c.HP,threshold:45,action:"Player Stats & Status Reset"}]}},{name:"Porygon2",region:m.Terarium,info:{moves:["Tri Attack","Discharge","Agility","Psybeam","Thunder Wave","Trick Room"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:95,action:"Player Stats & Status Reset"},{type:c.HP,threshold:75,action:"Uses Thunder Wave"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Uses Trick Room"},{type:c.HP,threshold:45,action:"Stats & Status Reset"}]}},{name:"Reuniclus",region:m.Terarium,info:{moves:["Psychic","Fire Punch","Swift","Rock Tomb","Reflect","Light Screen","Calm Mind"],herbs:[{name:"Bitter",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Reflect"},{type:c.HP,threshold:80,action:"Uses Light Screen"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:40,action:"Player Stats & Status Reset"},{type:c.HP,threshold:35,action:"Uses Calm Mind"}]}},{name:"Rhyperior",region:m.Terarium,info:{moves:["Earthquake","Rock Wrecker","Megahorn","Rock Polish","Sandstorm","Iron Defense"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Sandstorm"},{type:c.HP,threshold:50,action:"Uses Iron Defense"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:25,action:"Uses Rock Wrecker"},{type:c.HP,threshold:5,action:"Uses Earthquake"}]}},{name:"Sandslash",formName:"sandslashalola",imageAlt:"-a",region:m.Terarium,info:{moves:["Ice Spinner","Iron Head","Earthquake","Triple Axel","Snowscape","Swords Dance"],herbs:[{name:"Spicy",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Snowscape"},{type:c.HP,threshold:80,action:"Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:80,action:"Uses Swords Dance"},{type:c.HP,threshold:35,action:"Player Stats & Status Reset"}]}},{name:"Skarmory",region:m.Terarium,info:{moves:["Drill Peck","Steel Wing","Night Slash","Slash","Taunt","Iron Defense"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Taunt"},{type:c.HP,threshold:80,action:"Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:45,action:"Uses Iron Defense"},{type:c.HP,threshold:44,action:"Player Stats & Status Reset"}]}},{name:"Slowbro",formName:"slowbrogalar",imageAlt:"-g",region:m.Terarium,info:{moves:["Shell Side Arm","Zen Headbutt","Chilling Water","Rock Blast","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.HP,threshold:90,action:"Stats & Status Reset"},{type:c.Time,threshold:80,action:"Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Uses Toxic"},{type:c.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Slowking",formName:"slowkinggalar",imageAlt:"-g",region:m.Terarium,info:{moves:["Eerie Spell","Power Gem","Yawn","Acid Spray","Toxic"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.HP,threshold:90,action:"Stats & Status Reset"},{type:c.Time,threshold:80,action:"Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:50,action:"Uses Toxic"},{type:c.HP,threshold:25,action:"Player Stats & Status Reset"}]}},{name:"Whimsicott",region:m.Terarium,info:{moves:["Energy Ball","Moonblast","Encore","Hurricane","Taunt"],herbs:[{name:"Salty",chance:2.4}],actions:[{type:c.Time,threshold:100,action:"Uses Taunt"},{type:c.HP,threshold:80,action:"Stats & Status Reset"},{type:c.Time,threshold:40,action:"Reduce Tera Orb Charge"},{type:c.HP,threshold:40,action:"Stats & Status Reset"}]}}];let mL=(()=>{const t=class{constructor(r){this.stateService=r}ngOnInit(){Object.keys(m).map(o=>{const i=document.createElement("option");i.value=o,i.text=m[o],"Paldea"==i.text&&(i.selected=!0,this.stateService.changeRegionList(i.value)),document.getElementById("regionList").add(i)})}valueChanged(){const r=document.getElementById("regionList");this.stateService.changeRegionList(r.options[r.selectedIndex].value)}};let e=t;return t.\u0275fac=function(o){return new(o||t)(O(st))},t.\u0275cmp=Xe({type:t,selectors:[["app-region"]],decls:3,vars:0,consts:[["id","regionList",3,"change"],["value",""]],template:function(o,i){1&o&&(he(0,"select",0),or("change",function(){return i.valueChanged()}),he(1,"option",1),Ve(2,"-- Region --"),Me()())},encapsulation:2}),e})(),gL=(()=>{const t=class{constructor(r,o){this.stateService=r,this.graphqlService=o,this.pokemonList=document.getElementById("pokemonList"),this.raidTier="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(r=>{this.raidTier=r,this.populatePokemonList()}),this.stateService.regionList.subscribe(r=>{this.region=r,this.populatePokemonList()})}ngAfterViewInit(){this.pokemonList=document.getElementById("pokemonList")}populatePokemonList(){this.pokemonList&&(this.resetPokemonList(),("5"==this.raidTier?qi:zi).sort((o,i)=>o.name.localeCompare(i.name)).filter(o=>o.region==m[this.region]).forEach(o=>{const i=document.createElement("option");i.value=o.name,i.text=o.name,o.formName&&(i.id=o.formName),this.pokemonList.add(i)}))}resetPokemonList(){this.pokemonList.innerHTML="",this.pokemonList.innerHTML='<option value="">-- Pokemon --</option>'}valueChanged(){const r=document.getElementById("pokemonList"),i=r.options[r.selectedIndex];if(i){const s=i.id;Sr(),i.value&&(this.graphqlService.getPokemon(s||i.value.toLowerCase()),this.stateService.changePokemon(i.value),document.getElementById("pokemonContent").style.display="none",this.stateService.changeLoading(!0))}}};let e=t;return t.\u0275fac=function(o){return new(o||t)(O(st),O(vr))},t.\u0275cmp=Xe({type:t,selectors:[["app-pokemon-list"]],decls:3,vars:0,consts:[["id","pokemonList",3,"change"],["value",""]],template:function(o,i){1&o&&(he(0,"select",0),or("change",function(){return i.valueChanged()}),he(1,"option",1),Ve(2,"-- Pokemon --"),Me()())},encapsulation:2}),e})(),vL=(()=>{const t=class{constructor(r){this.stateService=r}ngOnInit(){Ah.forEach(r=>{const o=document.createElement("option");o.value=r.name,o.text=r.name,document.getElementById("teraList").add(o)})}valueChanged(){const r=document.getElementById("teraList");this.stateService.changeTeraType(r.options[r.selectedIndex].value)}};let e=t;return t.\u0275fac=function(o){return new(o||t)(O(st))},t.\u0275cmp=Xe({type:t,selectors:[["app-tera-type"]],decls:3,vars:0,consts:[["id","teraList",3,"change"],["value",""]],template:function(o,i){1&o&&(he(0,"select",0),or("change",function(){return i.valueChanged()}),he(1,"option",1),Ve(2,"-- Tera Type --"),Me()())},encapsulation:2}),e})(),SL=(()=>{const t=class{constructor(r){this.stateService=r,this.raidTier="",this.pokemonList="",this.teraType="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(r=>{this.raidTier=r}),this.stateService.pokemonList.subscribe(r=>{this.pokemonList=r}),this.stateService.teraType.subscribe(r=>{this.teraType=r}),this.stateService.regionList.subscribe(r=>{this.region=r})}shareRaid(){let r=location.origin+"/tera-raid-info/";r+=this.raidTier,r+="/"+this.region,r+="/"+this.pokemonList,r+="/"+this.teraType,navigator.clipboard.writeText(r),document.getElementById("shareText").innerText="Copied to Clipboard"}shareRaidMouseOut(){document.getElementById("shareText").innerText="Share Raid"}};let e=t;return t.\u0275fac=function(o){return new(o||t)(O(st))},t.\u0275cmp=Xe({type:t,selectors:[["app-share-raid"]],decls:3,vars:0,consts:[["id","shareRaid",1,"share",3,"click","mouseout"],["id","shareText",1,"shareText"]],template:function(o,i){1&o&&(he(0,"div",0),or("click",function(){return i.shareRaid()})("mouseout",function(){return i.shareRaidMouseOut()}),he(1,"div",1),Ve(2,"Share Raid"),Me()())},encapsulation:2}),e})(),bL=(()=>{const t=class{constructor(r,o){this.grapghqlService=r,this.stateService=o,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(r=>{this.raidTier=r}),this.stateService.pokemonList.subscribe(r=>{this.pokemonList=r,this.setImages()}),this.stateService.regionList.subscribe(r=>{this.region=r})}setImages(){this.pokemonList&&this.grapghqlService.getDexNumber().subscribe(r=>{let i="";("5"==this.raidTier?qi:zi).filter(s=>s.name==this.pokemonList&&s.region==m[this.region]).forEach(s=>{s.imageAlt&&(i=s.imageAlt)}),ze(document.getElementById("pokemonImageNormal"),`<img alt="Normal" title="Normal" src="./assets/pokemon/${A0(r,3,"0")}${i}.png" />`),ze(document.getElementById("pokemonImageShiny"),`<img alt="Shiny" title="Shiny" src="./assets/pokemon/shiny/${A0(r,3,"0")}${i}.png" />`)})}};let e=t;return t.\u0275fac=function(o){return new(o||t)(O(vr),O(st))},t.\u0275cmp=Xe({type:t,selectors:[["app-pokemon-images"]],decls:2,vars:0,consts:[["id","pokemonImageNormal",1,"imgNormal"],["id","pokemonImageShiny",1,"imgShiny"]],template:function(o,i){1&o&&nt(0,"div",0)(1,"div",1)},encapsulation:2}),e})(),DL=(()=>{const t=class{constructor(r,o){this.graphqlService=r,this.stateService=o,this.pokemonList=""}ngOnInit(){this.stateService.pokemonList.subscribe(r=>{this.pokemonList=r,this.setTypes()})}setTypes(){this.pokemonList&&this.graphqlService.getTypes().subscribe(r=>{r.forEach(o=>{ze(document.getElementById("pokemonTypes"),this.createTypeDisplay(o.name))})})}createTypeDisplay(r){return`<div class="typeText ${r.toLowerCase()}">${r}</div>`}};let e=t;return t.\u0275fac=function(o){return new(o||t)(O(vr),O(st))},t.\u0275cmp=Xe({type:t,selectors:[["app-pokemon-types"]],decls:1,vars:0,consts:[["id","pokemonTypes"]],template:function(o,i){1&o&&nt(0,"div",0)},encapsulation:2}),e})(),wL=(()=>{const t=class{constructor(r,o){this.graphqlService=r,this.stateService=o}ngOnInit(){this.stateService.pokemonList.subscribe(r=>{r&&this.setStats()})}setStats(){this.graphqlService.getStats().subscribe(r=>{ze(document.getElementById("pokemonStatsWrapper"),this.createStatsDisplay(r))})}createStatsDisplay(r){let o='<div id="pokemonStats"><h3>Base Stats</h3>';return o+=`<div class="stat hp"><p>HP</p><p data-label="HP">${r.hp}</p></div>`,o+=`<div class="stat at"><p>Atk</p><p data-label="Atk">${r.attack}</p></div>`,o+=`<div class="stat df"><p>Def</p><p data-label="Def">${r.defense}</p></div>`,o+=`<div class="stat sa"><p>Sp.Atk</p><p data-label="Sp. Atk">${r.specialattack}</p></div>`,o+=`<div class="stat sd"><p>Sp.Def</p><p data-label="Sp. Def">${r.specialdefense}</p></div>`,o+=`<div class="stat sp"><p>Spd</p><p data-label="Spd">${r.speed}</p></div></div>`,o}};let e=t;return t.\u0275fac=function(o){return new(o||t)(O(vr),O(st))},t.\u0275cmp=Xe({type:t,selectors:[["app-pokemon-stats"]],decls:1,vars:0,consts:[["id","pokemonStatsWrapper"]],template:function(o,i){1&o&&nt(0,"div",0)},encapsulation:2}),e})(),PL=(()=>{const t=class{constructor(r,o){this.graphqlService=r,this.stateService=o,this.raidTier="",this.pokemonList=""}ngOnInit(){this.stateService.raidTier.subscribe(r=>{this.raidTier=r}),this.stateService.pokemonList.subscribe(r=>{this.pokemonList=r,this.setAbilities()})}setAbilities(){if(this.pokemonList){const r=document.getElementById("pokemonAbility");this.graphqlService.getAbilities().subscribe(o=>{ze(r,"<h3>Ability:</h3>"),ze(r,this.createAbilityDiv(o.first)),o.second&&ze(r,this.createAbilityDiv(o.second)),this.canShowHidden()&&o.hidden&&ze(r,this.createAbilityDiv(o.hidden,!0))})}}createAbilityDiv(r,o){return`<div class="typeMatchupText" data-info="${r.shortDesc}">${r.name}${o?" (H)":""}</div>`}canShowHidden(){return"6"==this.raidTier||"5"==this.raidTier&&"Ditto"==this.pokemonList}};let e=t;return t.\u0275fac=function(o){return new(o||t)(O(vr),O(st))},t.\u0275cmp=Xe({type:t,selectors:[["app-pokemon-ability"]],decls:1,vars:0,consts:[["id","pokemonAbility"]],template:function(o,i){1&o&&nt(0,"div",0)},encapsulation:2}),e})(),TL=(()=>{const t=class{constructor(r,o,i){this.stateService=r,this.typeCalcService=o,this.graphqlService=i,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(r=>{this.raidTier=r}),this.stateService.pokemonList.subscribe(r=>{this.pokemonList=r,this.setMoves()}),this.stateService.regionList.subscribe(r=>{this.region=r})}setMoves(){const r=document.getElementById("pokemonMoves"),i=[],s=[],a=[];let l=[];this.pokemonList&&(("5"==this.raidTier?qi:zi).filter(u=>u.name==this.pokemonList&&u.region==m[this.region]).forEach(u=>{u.info.specialMoves&&u.info.specialMoves.sort((d,h)=>d.localeCompare(h)).forEach(d=>{s.push(d),this.graphqlService.getMove(d.toLowerCase().replaceAll(" ","").replaceAll("-","")).subscribe(h=>{i.push(h.getMove)})}),u.info.moves.forEach(d=>{s.push(d)})}),this.graphqlService.getMoves().subscribe(u=>{ze(r,"<h3>Moves:</h3>"),s.forEach(p=>{i.push(...u.filter(y=>y.name==p))}),[...new Map(i.map(p=>[p.key,p])).values()].sort((p,y)=>p.name.localeCompare(y.name)).sort((p,y)=>"Status"!=p.category&&"Status"==y.category?-1:1).forEach(p=>{const y=this.createMoveDiv(p);ze(document.getElementById("pokemonMoves"),y),a.push(y),"Status"!=p.category&&l.push(p.type)}),this.stateService.changeMoveList(a.join("")),l=[...new Set(l)];let h=[];l.forEach(p=>{const y=this.typeCalcService.advantages(p);h=h.concat(y)});const f=[];h=[...new Map(h.map(p=>[p.name,p])).values()],h.sort((p,y)=>p.name.localeCompare(y.name)).forEach(p=>{f.push(xh(p))}),f.length&&ze(document.getElementById("pokemonTypeAdvantages"),"<h3>Type Advantages:</h3>"+f.join(""))}))}createMoveDiv(r){let o=`<div class="typeMatchupText ${r.type.toLowerCase()}">${r.name}`;if(o+='<div class="moveStats">',o+=`<div class="type">${r.category.toString()}</div>`,o+=`<div class="bp">Pwr: ${"0"==r.basePower?"--":r.basePower}</div>`,o+=`<div class="pp">PP: ${r.pp}</div>`,o+=`<div class="acc">Acc: ${r.accuracy}</div>`,o+=`<div class="desc">${"No additional effect."==r.desc?r.shortDesc:r.desc}</div>`,"Status"!=r.category){const i=this.typeCalcService.advantages(r.type.toString()),s=[];i.forEach(a=>{2==a.multiplier&&s.push(`${oc(a.name)}`)}),s.length&&(o+=`<div class="adv">Advantages: ${s.join(", ")}</div>`)}return o+="</div></div>",o}};let e=t;return t.\u0275fac=function(o){return new(o||t)(O(st),O(Nh),O(vr))},t.\u0275cmp=Xe({type:t,selectors:[["app-pokemon-moves"]],decls:1,vars:0,consts:[["id","pokemonMoves",1,"pokemonMoves"]],template:function(o,i){1&o&&nt(0,"div",0)},encapsulation:2}),e})(),EL=(()=>{const t=class{constructor(r){this.stateService=r,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(r=>{this.raidTier=r}),this.stateService.pokemonList.subscribe(r=>{this.pokemonList=r,this.setActions()}),this.stateService.regionList.subscribe(r=>{this.region=r})}setActions(){this.pokemonList&&(ze(document.getElementById("pokemonActions"),"<h3>Actions:</h3>"),("5"==this.raidTier?qi:zi).filter(o=>o.name==this.pokemonList&&o.region==m[this.region]).forEach(o=>{o.info.actions?.sort((i,s)=>s.threshold-i.threshold).forEach(i=>{ze(document.getElementById("pokemonActions"),this.createActionDiv(i))})}))}createActionDiv(r){return`<div class="actions ${r.type.toLowerCase()}-${r.threshold.toString()}" data-info="${r.threshold.toString()}% ${r.type.toString()} Remaining">${r.action}</div>`}};let e=t;return t.\u0275fac=function(o){return new(o||t)(O(st))},t.\u0275cmp=Xe({type:t,selectors:[["app-pokemon-actions"]],decls:1,vars:0,consts:[[1,"pokemonActions"]],template:function(o,i){1&o&&nt(0,"div",0)},encapsulation:2}),e})(),CL=(()=>{const t=class{constructor(r){this.stateService=r,this.raidTier="",this.pokemonList="",this.region=""}ngOnInit(){this.stateService.raidTier.subscribe(r=>{this.raidTier=r}),this.stateService.pokemonList.subscribe(r=>{this.pokemonList=r,this.setHerbs()}),this.stateService.regionList.subscribe(r=>{this.region=r})}setHerbs(){this.pokemonList&&(ze(document.getElementById("pokemonHerbs"),"<h3>Herbs Dropped:</h3>"),("5"==this.raidTier?qi:zi).filter(o=>o.name==this.pokemonList&&o.region==m[this.region]).forEach(o=>{o.info.herbs.sort((i,s)=>i.name.localeCompare(s.name)).forEach(i=>{ze(document.getElementById("pokemonHerbs"),this.createHerbDiv(i))})}))}createHerbDiv(r){return`<div class="herbPill ${r.name.toLowerCase()}">${r.name} - ${r.chance}%</div>`}};let e=t;return t.\u0275fac=function(o){return new(o||t)(O(st))},t.\u0275cmp=Xe({type:t,selectors:[["app-pokemon-herbs"]],decls:1,vars:0,consts:[[1,"pokemonHerbs"]],template:function(o,i){1&o&&nt(0,"div",0)},encapsulation:2}),e})(),_L=(()=>{const t=class{constructor(r,o){this.stateService=r,this.typeCalcService=o,this.raidTier="",this.pokemonList="",this.teraType="",this.moveList=""}ngOnInit(){this.stateService.raidTier.subscribe(r=>{this.raidTier=r}),this.stateService.pokemonList.subscribe(r=>{this.pokemonList=r,this.handleChange()}),this.stateService.teraType.subscribe(r=>{this.teraType=r,this.handleChange()}),this.stateService.moveList.subscribe(r=>{this.moveList=r,this.handleChange()})}handleChange(){this.pokemonList&&(Sr("pokemonTeraAdvantages"),Sr("pokemonTeraWeaknesses"),this.pokemonList&&(this.raidTier&&this.teraType&&this.setTypeWeaknesses(),this.moveList&&this.teraType&&this.moveList.includes("Tera Blast")&&this.setTeraTypeAdvantages()),this.teraType?(this.pokemonList&&this.raidTier&&this.setTypeWeaknesses(),this.moveList.includes("Tera Blast")&&this.setTeraTypeAdvantages()):(Sr("pokemonTeraAdvantages"),Sr("pokemonTeraWeaknesses")),this.stateService.changeLoading(!1))}setTeraTypeAdvantages(){Sr("pokemonTeraAdvantages");const r=[];this.typeCalcService.advantages(this.teraType).forEach(i=>{r.push(xh(i))}),r.length&&ze(document.getElementById("pokemonTeraAdvantages"),"<h3>Tera Advantages:</h3>"+r.join(""))}setTypeWeaknesses(){Sr("pokemonTeraWeaknesses");const r=[];this.typeCalcService.weaknesses(this.teraType).forEach(i=>{r.push(xh(i))}),r.length&&ze(document.getElementById("pokemonTeraWeaknesses"),"<h3>Tera Weaknesses:</h3>"+r.join(""))}};let e=t;return t.\u0275fac=function(o){return new(o||t)(O(st),O(Nh))},t.\u0275cmp=Xe({type:t,selectors:[["app-pokemon-type-matchups"]],decls:3,vars:0,consts:[["id","pokemonTypeAdvantages",1,"pokemonTypeMatchups"],["id","pokemonTeraWeaknesses",1,"pokemonTypeMatchups"],["id","pokemonTeraAdvantages",1,"pokemonTypeMatchups"]],template:function(o,i){1&o&&nt(0,"div",0)(1,"div",1)(2,"div",2)},encapsulation:2}),e})(),IL=(()=>{const t=class{constructor(r){this.stateService=r,this.title="Tera Raid Info"}ngOnInit(){this.stateService.changeRegionList("Paldea"),this.stateService.loading.subscribe(r=>{document.getElementById("dataLoading").hidden=!r,0==r&&(document.getElementById("pokemonContent").style.display="")})}ngAfterViewInit(){document.getElementById("dataLoading").hidden=!0,this.deleteCache(),this.autoPopulateSelections()}autoPopulateSelections(r,o){const i=r||window.location.href,s=o||window.location.origin;if(i.replace(s,"").length>1&&i.replace(s+"/tera-raid-info/","")){const l=i.replace(s+"/tera-raid-info/","").split("/"),u=new Event("change");if(Number(l[0])){const d=document.getElementById("raidTier");d.value=l[0],d.dispatchEvent(u)}if(l[1]){const d=document.getElementById("regionList");for(let h=0;h<d.length;h++){const f=d[h];f.text==l[1]&&(d.selectedIndex=f.index)}d.dispatchEvent(u)}if(l[2]){let d=oc(l[2].replaceAll("%20"," ").toLowerCase());const h=d.match(/(\(.*\))/);if(h){const p=h[0].split(" ");for(let y=0;y<p.length;y++)d=d.replaceAll(p[y],oc(p[y]))}const f=document.getElementById("pokemonList");f.value=d,f.dispatchEvent(u)}if(l[3]){const d=document.getElementById("teraList");for(let h=0;h<d.length;h++){const f=d[h];f.text==l[3]&&(d.selectedIndex=f.index)}d.dispatchEvent(u)}}}deleteCache(){caches.delete("tera-raid-info-1")}};let e=t;return t.\u0275fac=function(o){return new(o||t)(O(st))},t.\u0275cmp=Xe({type:t,selectors:[["app-root"]],decls:35,vars:0,consts:[[1,"header"],[1,"dropdowns"],["id","dataLoading","hidden","true"],["src","./assets/icons/pokeball.gif"],["id","pokemonContent","hidden","false",1,"content"],["id","pokemon"],[1,"pokemonImageWrapper"],["id","pokemonActions"],["id","pokemonHerbs"],[1,"pokemonTypesWrapper"],[1,"footer"],["href","https://github.com/kyle-undefined","target","_blank"],["href","https://www.serebii.net/","target","_blank"],["href","https://www.flaticon.com/authors/creatype","target","_blank"],["href","https://github.com/favware/graphql-pokemon","target","_blank"]],template:function(o,i){1&o&&(he(0,"header",0)(1,"h1"),Ve(2,"Tera Raid Info"),Me(),he(3,"div",1),nt(4,"app-raid-tier")(5,"app-region")(6,"app-pokemon-list")(7,"app-tera-type")(8,"app-share-raid"),Me()(),he(9,"div",2),nt(10,"img",3),Me(),he(11,"div",4)(12,"div",5)(13,"div",6),nt(14,"app-pokemon-images"),Me(),nt(15,"app-pokemon-types"),Me(),nt(16,"app-pokemon-stats")(17,"app-pokemon-ability")(18,"app-pokemon-moves")(19,"app-pokemon-actions",7)(20,"app-pokemon-herbs",8)(21,"app-pokemon-type-matchups",9),Me(),he(22,"footer",10),Ve(23," By: "),he(24,"a",11),Ve(25,"Kyle Undefined"),Me(),Ve(26," - Design: CronikCRS - Images: "),he(27,"a",12),Ve(28,"Serebii"),Me(),Ve(29," & "),he(30,"a",13),Ve(31,"Creatype"),Me(),Ve(32," - Data: "),he(33,"a",14),Ve(34,"GraphQL-Pokemon"),Me()())},dependencies:[yL,mL,gL,vL,SL,bL,DL,wL,PL,TL,EL,CL,_L],encapsulation:2}),e})(),ML=(()=>{const t=class{};let e=t;return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=In({type:t,bootstrap:[IL]}),t.\u0275inj=an({providers:[st,vr,Nh],imports:[FA,hL,lL]}),e})();xA().bootstrapModule(ML).catch(e=>console.error(e))}},ye=>{ye(ye.s=533)}]);