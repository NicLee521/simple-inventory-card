var t=Object.create,e=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,o=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,a=(t,e)=>()=>(e||(t((e={exports:{}}).exports,e),t=null),e.exports),s=(t,n)=>{let r={};for(var o in t)e(r,o,{get:t[o],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:"Module"}),r},c=(a,s,c)=>(c=null!=a?t(o(a)):{},((t,o,a,s)=>{if(o&&"object"==typeof o||"function"==typeof o)for(var c,l=r(o),d=0,u=l.length;d<u;d++)c=l[d],i.call(t,c)||c===a||e(t,c,{get:(t=>o[t]).bind(null,c),enumerable:!(s=n(o,c))||s.enumerable});return t})(!s&&a&&a.__esModule&&i.call(a,"default")?c:e(c,"default",{value:a,enumerable:!0}),a)),l="0.6.0",d=globalThis,u=d.ShadowRoot&&(void 0===d.ShadyCSS||d.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,p=Symbol(),h=/* @__PURE__ */new WeakMap,f=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(u&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=h.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&h.set(e,t))}return t}toString(){return this.cssText}},v=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,n,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[r+1],t[0]);return new f(n,t,p)},g=u?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new f("string"==typeof t?t:t+"",void 0,p))(e)})(t):t,{is:m,defineProperty:y,getOwnPropertyDescriptor:b,getOwnPropertyNames:x,getOwnPropertySymbols:_,getPrototypeOf:w}=Object,E=globalThis,$=E.trustedTypes,A=$?$.emptyScript:"",S=E.reactiveElementPolyfillSupport,k=(t,e)=>t,C={toAttribute(t,e){switch(e){case Boolean:t=t?A:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},R=(t,e)=>!m(t,e),I={attribute:!0,type:String,converter:C,reflect:!1,useDefault:!1,hasChanged:R};Symbol.metadata??=Symbol("metadata"),E.litPropertyMetadata??=/* @__PURE__ */new WeakMap;var M=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=I){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(t,n,e);void 0!==r&&y(this.prototype,t,r)}}static getPropertyDescriptor(t,e,n){const{get:r,set:o}=b(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const i=r?.call(this);o?.call(this,e),this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??I}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const t=w(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const t=this.properties,e=[...x(t),..._(t)];for(const n of e)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,n]of e)this.elementProperties.set(t,n)}this._$Eh=/* @__PURE__ */new Map;for(const[e,n]of this.elementProperties){const t=this._$Eu(e,n);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(g(t))}else void 0!==t&&e.push(g(t));return e}static _$Eu(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=/* @__PURE__ */new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=/* @__PURE__ */new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=/* @__PURE__ */new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(u)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const n of e){const e=document.createElement("style"),r=d.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=n.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){const n=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,n);if(void 0!==r&&!0===n.reflect){const o=(void 0!==n.converter?.toAttribute?n.converter:C).toAttribute(e,n.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const n=this.constructor,r=n._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=n.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:C;this._$Em=r;const i=o.fromAttribute(e,t.type);this[r]=i??this._$Ej?.get(r)??i,this._$Em=null}}requestUpdate(t,e,n,r=!1,o){if(void 0!==t){const i=this.constructor;if(!1===r&&(o=this[t]),n??=i.getPropertyOptions(t),!((n.hasChanged??R)(o,e)||n.useDefault&&n.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,n))))return;this.C(t,e,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:r,wrapped:o},i){n&&!(this._$Ej??=/* @__PURE__ */new Map).has(t)&&(this._$Ej.set(t,i??e??this[t]),!0!==o||void 0!==i)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=/* @__PURE__ */new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t){const{wrapped:t}=n,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,n,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=/* @__PURE__ */new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[k("elementProperties")]=/* @__PURE__ */new Map,M[k("finalized")]=/* @__PURE__ */new Map,S?.({ReactiveElement:M}),(E.reactiveElementVersions??=[]).push("2.1.2");var T=globalThis,O=t=>t,D=T.trustedTypes,z=D?D.createPolicy("lit-html",{createHTML:t=>t}):void 0,P="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,j="?"+N,L=`<${j}>`,B=document,U=()=>B.createComment(""),F=t=>null===t||"object"!=typeof t&&"function"!=typeof t,q=Array.isArray,H="[ \t\n\f\r]",V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,W=/-->/g,Q=/>/g,Y=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),G=/'/g,X=/"/g,Z=/^(?:script|style|textarea|title)$/i,K=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),J=K(1),tt=(K(2),K(3),Symbol.for("lit-noChange")),et=Symbol.for("lit-nothing"),nt=/* @__PURE__ */new WeakMap,rt=B.createTreeWalker(B,129);function ot(t,e){if(!q(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z?z.createHTML(e):e}var it=(t,e)=>{const n=t.length-1,r=[];let o,i=2===e?"<svg>":3===e?"<math>":"",a=V;for(let s=0;s<n;s++){const e=t[s];let n,c,l=-1,d=0;for(;d<e.length&&(a.lastIndex=d,c=a.exec(e),null!==c);)d=a.lastIndex,a===V?"!--"===c[1]?a=W:void 0!==c[1]?a=Q:void 0!==c[2]?(Z.test(c[2])&&(o=RegExp("</"+c[2],"g")),a=Y):void 0!==c[3]&&(a=Y):a===Y?">"===c[0]?(a=o??V,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,n=c[1],a=void 0===c[3]?Y:'"'===c[3]?X:G):a===X||a===G?a=Y:a===W||a===Q?a=V:(a=Y,o=void 0);const u=a===Y&&t[s+1].startsWith("/>")?" ":"";i+=a===V?e+L:l>=0?(r.push(n),e.slice(0,l)+P+e.slice(l)+N+u):e+N+(-2===l?s:u)}return[ot(t,i+(t[n]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]},at=class t{constructor({strings:e,_$litType$:n},r){let o;this.parts=[];let i=0,a=0;const s=e.length-1,c=this.parts,[l,d]=it(e,n);if(this.el=t.createElement(l,r),rt.currentNode=this.el.content,2===n||3===n){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=rt.nextNode())&&c.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(P)){const e=d[a++],n=o.getAttribute(t).split(N),r=/([.?@])?(.*)/.exec(e);c.push({type:1,index:i,name:r[2],strings:n,ctor:"."===r[1]?ut:"?"===r[1]?pt:"@"===r[1]?ht:dt}),o.removeAttribute(t)}else t.startsWith(N)&&(c.push({type:6,index:i}),o.removeAttribute(t));if(Z.test(o.tagName)){const t=o.textContent.split(N),e=t.length-1;if(e>0){o.textContent=D?D.emptyScript:"";for(let n=0;n<e;n++)o.append(t[n],U()),rt.nextNode(),c.push({type:2,index:++i});o.append(t[e],U())}}}else if(8===o.nodeType)if(o.data===j)c.push({type:2,index:i});else{let t=-1;for(;-1!==(t=o.data.indexOf(N,t+1));)c.push({type:7,index:i}),t+=N.length-1}i++}}static createElement(t,e){const n=B.createElement("template");return n.innerHTML=t,n}};function st(t,e,n=t,r){if(e===tt)return e;let o=void 0!==r?n._$Co?.[r]:n._$Cl;const i=F(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),void 0===i?o=void 0:(o=new i(t),o._$AT(t,n,r)),void 0!==r?(n._$Co??=[])[r]=o:n._$Cl=o),void 0!==o&&(e=st(t,o._$AS(t,e.values),o,r)),e}var ct=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,r=(t?.creationScope??B).importNode(e,!0);rt.currentNode=r;let o=rt.nextNode(),i=0,a=0,s=n[0];for(;void 0!==s;){if(i===s.index){let e;2===s.type?e=new lt(o,o.nextSibling,this,t):1===s.type?e=new s.ctor(o,s.name,s.strings,this,t):6===s.type&&(e=new ft(o,this,t)),this._$AV.push(e),s=n[++a]}i!==s?.index&&(o=rt.nextNode(),i++)}return rt.currentNode=B,r}p(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},lt=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,r){this.type=2,this._$AH=et,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=st(this,t,e),F(t)?t===et||null==t||""===t?(this._$AH!==et&&this._$AR(),this._$AH=et):t!==this._$AH&&t!==tt&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>q(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==et&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(B.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:n}=t,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=at.createElement(ot(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new ct(r,this),n=t.u(this.options);t.p(e),this.T(n),this._$AH=t}}_$AC(t){let e=nt.get(t.strings);return void 0===e&&nt.set(t.strings,e=new at(t)),e}k(e){q(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of e)o===n.length?n.push(r=new t(this.O(U()),this.O(U()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=O(t).nextSibling;O(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},dt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,r,o){this.type=1,this._$AH=et,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */new String),this.strings=n):this._$AH=et}_$AI(t,e=this,n,r){const o=this.strings;let i=!1;if(void 0===o)t=st(this,t,e,0),i=!F(t)||t!==this._$AH&&t!==tt,i&&(this._$AH=t);else{const r=t;let a,s;for(t=o[0],a=0;a<o.length-1;a++)s=st(this,r[n+a],e,a),s===tt&&(s=this._$AH[a]),i||=!F(s)||s!==this._$AH[a],s===et?t=et:t!==et&&(t+=(s??"")+o[a+1]),this._$AH[a]=s}i&&!r&&this.j(t)}j(t){t===et?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ut=class extends dt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===et?void 0:t}},pt=class extends dt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==et)}},ht=class extends dt{constructor(t,e,n,r,o){super(t,e,n,r,o),this.type=5}_$AI(t,e=this){if((t=st(this,t,e,0)??et)===tt)return;const n=this._$AH,r=t===et&&n!==et||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==et&&(n===et||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ft=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){st(this,t)}},vt=T.litHtmlPolyfillSupport;vt?.(at,lt),(T.litHtmlVersions??=[]).push("3.3.3");var gt=globalThis,mt=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,n)=>{const r=n?.renderBefore??e;let o=r._$litPart$;if(void 0===o){const t=n?.renderBefore??null;r._$litPart$=o=new lt(e.insertBefore(U(),t),t,void 0,n??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return tt}};mt._$litElement$=!0,mt.finalized=!0,gt.litElementHydrateSupport?.({LitElement:mt});var yt=gt.litElementPolyfillSupport;yt?.({LitElement:mt}),(gt.litElementVersions??=[]).push("4.2.2");var bt="simple_inventory",xt="add_item",_t="decrement_item",wt="increment_item",Et="remove_item",$t="update_item",At="scan_barcode",St={EXPORT:`${bt}/export`,GET_HISTORY:`${bt}/get_history`,GET_ITEM_CONSUMPTION_RATES:`${bt}/get_item_consumption_rates`,GET_ITEM:`${bt}/get_item`,IMPORT:`${bt}/import`,LIST_ITEMS:`${bt}/list_items`,LOOKUP_BARCODE_PRODUCT:`${bt}/lookup_barcode_product`,LOOKUP_BY_BARCODE:`${bt}/lookup_by_barcode`,SUBSCRIBE:`${bt}/subscribe`},kt="aliases",Ct="amount",Rt="auto_add_enabled",It="auto_add_id_to_description_enabled",Mt="auto_add_to_list_quantity",Tt="barcode",Ot="category",Dt="description",zt="desired_quantity",Pt="expiry_alert_days",Nt="expiry_date",jt="inventory_id",Lt="location",Bt="name",Ut="old_name",Ft="price",qt="quantity",Ht="todo_list",Vt="todo_quantity_placement",Wt="unit",Qt="serving_size",Yt="servings_per_unit",Gt="calories_per_serving",Xt="protein_g_per_serving",Zt="carbs_g_per_serving",Kt="fat_per_serving",Jt="add-modal",te="edit-modal",ee="aliases",ne="auto-add-enabled",re="auto-add-id-to-description-enabled",oe="auto-add-to-list-quantity",ie="barcode",ae="category",se="description",ce="desired-quantity",le="expiry-alert-days",de="expiry-date",ue="location",pe="name",he="price",fe="quantity",ve="todo-list",ge="todo-quantity-placement",me="unit",ye="serving-size",be="servings-per-unit",xe="calories-per-serving",_e="protein-per-serving",we="carbohydrates-per-serving",Ee="fat-per-serving",$e="add-item-btn",Ae="export-inventory",Se="history-modal",ke="import-inventory",Ce="open-add-modal",Re="overflow-menu-btn",Ie="overflow-menu",Me="edit-history-btn",Te="edit-delete-btn",Oe="history-tab-history",De="history-tab-consumption",ze="history-tab-content",Pe="product-picker",Ne="product-picker-list",je="barcode-scan-btn",Le="barcode-scanner",Be="barcode-viewport",Ue="barcode-scanner-close",Fe="header-expired-badge",qe="header-expiring-badge",He="header-scan-btn",Ve="scan-panel",We="scan-viewport",Qe="scan-close",Ye="scan-action-bar",Ge="scan-action-select",Xe="scan-amount-input",Ze="scan-go-btn",Ke="scan-item-name",Je="scan-item-quantity",tn="scan-add-btn",en="scan-existing-controls",nn="scan-cancel-btn",rn="active-filters",on="active-filters-list",an="advanced-search-toggle",sn="clear-filters",cn="filter-category",ln="filter-expiry",dn="filter-location",un="filter-quantity",pn="search-input",hn="sort-method",fn="cancel-btn",vn="category-group",gn="category-header",mn="close-btn",yn="location-group",bn="location-header",xn="delete-btn",_n="history-link",wn="modal-content",En="save-btn",$n="show",An="close_add_modal",Sn="decrement",kn="increment",Cn="open_edit",Rn="remove",In="view_history",Mn={ALIASES:"",AUTO_ADD_ENABLED:!1,AUTO_ADD_ID_TO_DESCRIPTION_ENABLED:!1,AUTO_ADD_TO_LIST_QUANTITY:0,BARCODE:"",CATEGORY:"",DESCRIPTION:"",DESIRED_QUANTITY:0,EXPIRY_ALERT_DAYS:1,EXPIRY_DATE:"",LOCATION:"",PRICE:0,QUANTITY:1,SORT_METHOD:"name",TODO_LIST:"",TODO_QUANTITY_PLACEMENT:"name",UNIT:"",SERVING_SIZE:"",SERVINGS_PER_UNIT:0,CALORIES_PER_SERVING:0,PROTEIN_PER_SERVING:0,CARBOHYDRATES_PER_SERVING:0,FAT_PER_SERVING:0},Tn="category",On="expiry",Dn="location",zn="name",Pn="quantity",Nn="quantity-low",jn="zero-last",Ln={ZERO:"zero",NONZERO:"nonzero"},Bn={NONE:"none",EXPIRED:"expired",SOON:"soon",FUTURE:"future"},Un=t=>`simple_inventory_filters_${t}`,Fn=100,qn={getInventoryName(t,e){if(t?.attributes?.friendly_name?.trim())return t.attributes.friendly_name;const n=e.split(".");return n.length>1&&(n.at(-1)?.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).filter(t=>"inventory"!==t.toLowerCase()))?.join(" ").trim()||"Inventory"},getInventoryDescription(t){if(t?.attributes?.description)return t.attributes.description},getInventoryId(t,e){const n=t.states[e];if(n?.attributes?.inventory_id)return n.attributes.inventory_id;if(n?.attributes?.unique_id){const t=n.attributes.unique_id;if("string"==typeof t&&t.startsWith("inventory_"))return t.slice(10)}const r=e.split(".");return r.length>1?r[1]:e},extractTodoLists:t=>Object.keys(t.states).filter(t=>t.startsWith("todo.")).map(e=>({id:e,name:t.states[e].attributes?.friendly_name||e.split(".")[1]})),findInventoryEntities:t=>Object.keys(t?.states||{}).filter(e=>{if(!e.startsWith("sensor."))return!1;const n=e.includes("inventory"),r=void 0!==t?.states[e]?.attributes?.inventory_id;return n&&r}).sort(),createEntityOptions:(t,e)=>e.map(e=>({value:e,label:t.states[e]?.attributes?.friendly_name||e}))},Hn=class{static _cache=/* @__PURE__ */new Map;static _loadingPromises=/* @__PURE__ */new Map;static _cardName="simple-inventory-card";static async loadTranslations(t){const e=`${this._cardName}-${t}`;if(this._cache.has(e))return this._cache.get(e);if(this._loadingPromises.has(e))return this._loadingPromises.get(e);const n=this._loadTranslationsInternal(t);this._loadingPromises.set(e,n);try{const t=await n;return this._cache.set(e,t),t}finally{this._loadingPromises.delete(e)}}static async _loadTranslationsInternal(t){const e=[`/local/community/${this._cardName}/translations/${t}.json`,`/hacsfiles/${this._cardName}/translations/${t}.json`,`/local/community/${this._cardName}/${t}.json`,`/hacsfiles/${this._cardName}/${t}.json`];for(const r of e)try{const t=await fetch(r);if(t.ok)return await t.json();console.debug("❌ Failed to load from",r,"Status:",t.status)}catch(n){console.debug(`Failed to load translations from ${r}:`,n)}return"en"!==t?this.loadTranslations("en"):{}}static localize(t,e,n,r){const o=e.split(".");let i=t;for(const s of o){if(!i||"object"!=typeof i||!(s in i))return r||e;i=i[s]}let a="string"==typeof i?i:r||e;return n&&Object.entries(n).forEach(([t,e])=>{a=a.replace(new RegExp(`{${t}}`,"g"),String(e))}),a}};var Vn=["show_header","show_search","show_sort","show_add_button","show_description","show_location","show_category","show_expiry","show_auto_add_info","show_price"],Wn={show_header:"Show header",show_search:"Show search & filters",show_sort:"Show sort controls",show_add_button:"Show add button",show_description:"Show description",show_location:"Show location",show_category:"Show category",show_expiry:"Show expiry date",show_auto_add_info:"Show auto-add info",show_price:"Show price"};var Qn=v`
  .card-config {
    padding: 16px;
  }

  .option {
    margin-bottom: 16px;
  }

  .row {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
  }

  .col {
    flex: 1;
    margin-right: 15px;
  }

  .col:last-child {
    margin-right: 0;
  }

  ha-entity-picker {
    width: 100%;
  }

  .entity-info {
    background: var(--secondary-background-color);
    border-radius: 8px;
    padding: 16px;
    margin-top: 16px;
  }

  .info-header {
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--primary-color);
  }

  .info-content {
    color: var(--primary-text-color);
  }

  .no-entity {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px;
    background: var(--warning-color);
    color: white;
    border-radius: 8px;
    margin-top: 16px;
  }

  .visibility-section {
    margin-top: 16px;
  }

  .section-header {
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--primary-color);
  }

  .visibility-toggles {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .visibility-toggles ha-formfield {
    display: flex;
    align-items: center;
  }
`,Yn=class t extends mt{_translations={};_configSetExternally=!1;constructor(){super(),this._config={entity:"",type:""}}static get properties(){return{hass:{type:Object},_config:{type:Object}}}connectedCallback(){super.connectedCallback(),t._ensureHaComponents().then(()=>this.requestUpdate())}static _haComponentsPromise;static _ensureHaComponents(){return customElements.get("ha-combo-box")&&customElements.get("ha-formfield")&&customElements.get("ha-switch")?Promise.resolve():(this._haComponentsPromise??=(async()=>{try{const t=await(window.loadCardHelpers?.());if(!t)return;await(((await t.createCardElement({type:"entities",entities:[]}))?.constructor)?.getConfigElement?.())}catch(t){console.debug("Failed to preload HA editor components:",t)}})(),this._haComponentsPromise)}async firstUpdated(){await this._loadTranslations()}async updated(t){if(this._configSetExternally&&this.hass&&this._config&&!this._config.entity){const t=qn.findInventoryEntities(this.hass);if(t.length>0){const e={...this._config,type:this._config.type||"custom:simple-inventory-card",entity:t[0]};this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}}if(t.has("hass")&&this.hass){const e=t.get("hass");e&&e.language===this.hass.language&&e.selectedLanguage===this.hass.selectedLanguage||await this._loadTranslations()}}async _loadTranslations(){const t=this.hass?.language||this.hass?.selectedLanguage||"en";try{this._translations=await Hn.loadTranslations(t),this.requestUpdate()}catch(e){console.warn("Failed to load translations:",e),this._translations={}}}setConfig(t){this._config={...t},this._configSetExternally=!0}get _entity(){return this._config?.entity||""}render(){if(!this.hass||!this._config)return J`<div>
        ${Hn.localize(this._translations,"common.loading",void 0,"Loading...")}
      </div>`;const t=qn.findInventoryEntities(this.hass),e=qn.createEntityOptions(this.hass,t);return J`
      <div class="card-config">
        ${function(t,e,n,r,o){return J`
    <div class="option">
      <div class="row">
        <div class="col">
          <ha-combo-box
            .hass=${t}
            .label=${Hn.localize(o,"config.inventory_entity_required",void 0,"Inventory Entity (Required)")}
            .items=${e}
            .value=${n}
            @value-changed=${r}
          ></ha-combo-box>
        </div>
      </div>
    </div>
  `}(this.hass,e,this._entity,this._valueChanged.bind(this),this._translations)}
        ${this._entity?function(t,e,n){const r=t.states[e],o=r?.attributes?.friendly_name||e,i=r?.attributes?.total_items||0;return J`
    <div class="entity-info">
      <div class="info-header">
        ${Hn.localize(n,"config.selected_inventory",void 0,"Selected Inventory:")}
      </div>
      <div class="info-content">
        <strong>${o}</strong>
        <br />
        <small>${e}</small>
        <br />
        <small>
          ${Hn.localize(n,"config.items_count",void 0,"Items")}:
          ${i}
        </small>
      </div>
    </div>
  `}(this.hass,this._entity,this._translations):(n=this._translations,J`
    <div class="no-entity">
      <ha-icon icon="mdi:information-outline"></ha-icon>
      <div>
        ${Hn.localize(n,"config.select_entity_message",void 0,"Please select an inventory entity above")}
      </div>
    </div>
  `)}
        ${this._entity?function(t,e,n){return J`
    <div class="visibility-section">
      <div class="section-header">
        ${Hn.localize(n,"config.display_options",void 0,"Display Options")}
      </div>
      <div class="visibility-toggles">
        ${Vn.map(r=>J`
            <ha-formfield
              .label=${Hn.localize(n,`config.${r}`,void 0,Wn[r])}
            >
              <ha-switch
                .checked=${!1!==t[r]}
                @change=${t=>e(r,t.target.checked)}
              ></ha-switch>
            </ha-formfield>
          `)}
      </div>
    </div>
  `}(this._config,this._toggleChanged.bind(this),this._translations):""}
      </div>
    `;var n}_toggleChanged(t,e){if(!this._config)return;const n={...this._config,[t]:e};this._config=n,this.requestUpdate(),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:n},bubbles:!0,composed:!0}))}_valueChanged(t){if(!this._config)return;const e=t.detail?.value;if(!e||this._entity===e)return;const n={...this._config,entity:e,type:this._config.type||"custom:simple-inventory-card"};this._config=n,this.requestUpdate(),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:n},bubbles:!0,composed:!0}))}static get styles(){return Qn}},Gn={formatDate(t){if(!t)return"";try{let e;if(/^\d+$/.test(t.trim()))e=new Date(Number.parseInt(t.trim()));else if(/^\d{4}-\d{2}-\d{2}$/.test(t.trim())){const[n,r,o]=t.trim().split("-").map(Number);e=new Date(Date.UTC(n,r-1,o))}else e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleDateString("en-US",{timeZone:"UTC"})}catch(e){return console.warn(`Error formatting date "${t}":`,e),t}},isExpired(t){if(!t)return!1;try{const e=new Date(t);if(Number.isNaN(e.getTime()))return!1;const n=/* @__PURE__ */new Date;return e.toISOString().split("T")[0]<n.toISOString().split("T")[0]}catch{return!1}},isExpiringSoon(t,e=7){if(!t)return!1;try{const n=/* @__PURE__ */(new Date).toISOString().split("T")[0],r=new Date(n),o=new Date(t).getTime()-r.getTime(),i=Math.ceil(o/864e5);return i>=0&&i<=e}catch{return!1}},isValidDate(t){try{const e=new Date(t);return!Number.isNaN(e.getTime())}catch{return!1}}},Xn={parseNumber(t,e){if("string"==typeof t&&!t?.trim()||void 0===t)return e;const n=Number("string"==typeof t?t.trim():t);return Number.isNaN(n)||!Number.isFinite(n)?e:n},sanitizeString:(t,e)=>t&&"string"==typeof t?t.trim().slice(0,Math.max(0,e)).trim():"",validateRawFormData(t){const e=[];if(t.name?.trim()||e.push({field:"name",message:"Item name is required"}),t.quantity?.trim()){const n=Number.parseFloat(t.quantity);Number.isNaN(n)?e.push({field:"quantity",message:"Quantity must be a valid number"}):n<0&&e.push({field:"quantity",message:"Quantity cannot be negative"})}if(t.autoAddEnabled){if(t.autoAddToListQuantity?.trim()){const n=Number.parseFloat(t.autoAddToListQuantity);Number.isNaN(n)?e.push({field:"autoAddToListQuantity",message:"Quantity threshold must be a valid number"}):n<0&&e.push({field:"autoAddToListQuantity",message:"Quantity cannot be negative"})}else e.push({field:"autoAddToListQuantity",message:"Quantity threshold is required when auto-add is enabled"});t.todoList?.trim()||e.push({field:"todoList",message:"Todo list selection is required when auto-add is enabled"})}if(t.expiryDate?.trim()&&!Gn.isValidDate(t.expiryDate)&&e.push({field:"expiryDate",message:"Invalid expiry date format"}),t.expiryAlertDays?.trim()){const n=Number.parseFloat(t.expiryAlertDays);Number.isNaN(n)?e.push({field:"expiryAlertDays",message:"Expiry alert days must be a valid number"}):n<0&&e.push({field:"expiryAlertDays",message:"Expiry alert days cannot be negative"})}const n=t.expiryDate?.trim();return t.expiryAlertDays?.trim()&&!n&&e.push({field:"expiryAlertDays",message:"Expiry threshold requires an expiry date to be set"}),{isValid:0===e.length,errors:e}},convertRawFormDataToItemData:t=>({aliases:t.aliases?.trim()||Mn.ALIASES,name:t.name?.trim()||"",quantity:Math.max(0,Xn.parseNumber(t.quantity,Mn.QUANTITY)),autoAddEnabled:Boolean(t.autoAddEnabled),autoAddIdToDescriptionEnabled:Boolean(t.autoAddIdToDescriptionEnabled),autoAddToListQuantity:Math.max(0,Xn.parseNumber(t.autoAddToListQuantity,Mn.AUTO_ADD_TO_LIST_QUANTITY)),todoList:t.todoList?.trim()||Mn.TODO_LIST,expiryDate:t.expiryDate?.trim()||Mn.EXPIRY_DATE,expiryAlertDays:Math.max(0,Xn.parseNumber(t.expiryAlertDays,Mn.EXPIRY_ALERT_DAYS)),category:t.category?.trim()||Mn.CATEGORY,desiredQuantity:Math.max(0,Xn.parseNumber(t.desiredQuantity,Mn.DESIRED_QUANTITY)),location:t.location?.trim()||Mn.LOCATION,unit:t.unit?.trim()||Mn.UNIT,description:t.description?.trim()||Mn.DESCRIPTION,barcode:t.barcode?.trim()||Mn.BARCODE,price:Math.max(0,Xn.parseNumber(t.price,Mn.PRICE)),todoQuantityPlacement:t.todoQuantityPlacement?.trim()||Mn.TODO_QUANTITY_PLACEMENT,servingSize:t.servingSize?.trim()||Mn.SERVING_SIZE,servingsPerUnit:Math.max(0,Xn.parseNumber(t.servingsPerUnit,Mn.SERVINGS_PER_UNIT)),caloriesPerServing:Math.max(0,Xn.parseNumber(t.caloriesPerServing,Mn.CALORIES_PER_SERVING)),proteinPerServing:Math.max(0,Xn.parseNumber(t.proteinPerServing,Mn.PROTEIN_PER_SERVING)),carbohydratesPerServing:Math.max(0,Xn.parseNumber(t.carbohydratesPerServing,Mn.CARBOHYDRATES_PER_SERVING)),fatPerServing:Math.max(0,Xn.parseNumber(t.fatPerServing,Mn.FAT_PER_SERVING))}),sanitizeItemData:t=>({aliases:Xn.sanitizeString(t.aliases,300),autoAddEnabled:Boolean(t.autoAddEnabled),autoAddIdToDescriptionEnabled:Boolean(t.autoAddIdToDescriptionEnabled),autoAddToListQuantity:Math.max(0,Xn.parseNumber(t.autoAddToListQuantity,Mn.AUTO_ADD_TO_LIST_QUANTITY)),barcode:Xn.sanitizeString(t.barcode,100),category:Xn.sanitizeString(t.category,50),description:Xn.sanitizeString(t.description,500),desiredQuantity:Math.max(0,Xn.parseNumber(t.desiredQuantity,Mn.DESIRED_QUANTITY)),expiryAlertDays:Math.max(0,Xn.parseNumber(t.expiryAlertDays,Mn.EXPIRY_ALERT_DAYS)),expiryDate:t.expiryDate||Mn.EXPIRY_DATE,name:Xn.sanitizeString(t.name,100),quantity:Math.max(0,Math.min(999999,Xn.parseNumber(t.quantity,Mn.QUANTITY))),todoList:Xn.sanitizeString(t.todoList,100),todoQuantityPlacement:Xn.sanitizeString(t.todoQuantityPlacement||Mn.TODO_QUANTITY_PLACEMENT,20),price:Math.max(0,Xn.parseNumber(t.price,Mn.PRICE)),unit:Xn.sanitizeString(t.unit,20),location:Xn.sanitizeString(t.location,50),servingSize:Xn.sanitizeString(t.servingSize,50),servingsPerUnit:Math.max(0,Xn.parseNumber(t.servingsPerUnit,Mn.SERVINGS_PER_UNIT)),caloriesPerServing:Math.max(0,Xn.parseNumber(t.caloriesPerServing,Mn.CALORIES_PER_SERVING)),proteinPerServing:Math.max(0,Xn.parseNumber(t.proteinPerServing,Mn.PROTEIN_PER_SERVING)),carbohydratesPerServing:Math.max(0,Xn.parseNumber(t.carbohydratesPerServing,Mn.CARBOHYDRATES_PER_SERVING)),fatPerServing:Math.max(0,Xn.parseNumber(t.fatPerServing,Mn.FAT_PER_SERVING))})};function Zn(t){return t instanceof Error?t.message:String(null!==t&&"object"==typeof t&&"message"in t?t.message:t)}var Kn=class{hass;constructor(t){this.hass=t}async addItem(t,e){try{const n=Xn.sanitizeItemData(e),r=Xn.sanitizeString(t,100);if(!r)return{success:!1,error:"Invalid inventory ID"};if(!n.name)return{success:!1,error:"Item name cannot be empty"};const o={[Rt]:n.autoAddEnabled,[It]:n.autoAddIdToDescriptionEnabled,[Mt]:n.autoAddToListQuantity,[Ot]:n.category,[Dt]:n.description,[zt]:n.desiredQuantity,[Pt]:n.expiryAlertDays,[Nt]:n.expiryDate,[jt]:r,[Lt]:n.location,[Bt]:n.name,[qt]:n.quantity,[Ht]:n.todoList,[Vt]:n.todoQuantityPlacement,[Ft]:n.price,[Wt]:n.unit,[Qt]:n.servingSize,[Yt]:n.servingsPerUnit,[Gt]:n.caloriesPerServing,[Xt]:n.proteinPerServing,[Zt]:n.carbohydratesPerServing,[Kt]:n.fatPerServing};return n.barcode&&(o[Tt]=n.barcode),n.aliases&&(o[kt]=n.aliases),await this.hass.callService(bt,xt,o),{success:!0}}catch(n){return console.error("Error adding item:",n),{success:!1,error:Zn(n)}}}async removeItem(t,e){try{return await this.hass.callService(bt,Et,{[jt]:t,[Bt]:e}),{success:!0}}catch(n){return console.error("Error removing item:",n),{success:!1,error:Zn(n)}}}async incrementItem(t,e,n=1){try{return await this.hass.callService(bt,wt,{[jt]:t,[Bt]:e,[Ct]:n}),{success:!0}}catch(r){return console.error("Error incrementing item:",r),{success:!1,error:Zn(r)}}}async decrementItem(t,e,n=1){try{return await this.hass.callService(bt,_t,{[jt]:t,[Bt]:e,[Ct]:n}),{success:!0}}catch(r){return console.error("Error decrementing item:",r),{success:!1,error:Zn(r)}}}async updateItem(t,e,n){try{const r=Xn.sanitizeItemData(n),o=Xn.sanitizeString(t,100);if(!o)return{success:!1,error:"Invalid inventory ID"};const i={[Rt]:r.autoAddEnabled,[It]:r.autoAddIdToDescriptionEnabled,[Mt]:r.autoAddToListQuantity,[Ot]:r.category,[Dt]:r.description,[zt]:r.desiredQuantity,[Pt]:r.expiryAlertDays,[Nt]:r.expiryDate,[jt]:o,[Lt]:r.location,[Bt]:r.name,[Ut]:e,[qt]:r.quantity,[Ht]:r.todoList,[Vt]:r.todoQuantityPlacement,[Ft]:r.price,[Wt]:r.unit,[Qt]:r.servingSize,[Yt]:r.servingsPerUnit,[Gt]:r.caloriesPerServing,[Xt]:r.proteinPerServing,[Zt]:r.carbohydratesPerServing,[Kt]:r.fatPerServing};return i[Tt]=r.barcode,i[kt]=r.aliases,await this.hass.callService(bt,$t,i),{success:!0}}catch(r){return console.error("Error updating item:",r),{success:!1,error:Zn(r)}}}async scanBarcode(t,e,n,r=1){try{return await this.hass.callService(bt,At,{[jt]:t,[Tt]:e,action:n,[Ct]:r}),{success:!0}}catch(o){return console.error("Error scanning barcode:",o),{success:!1,error:Zn(o)}}}async lookupBarcodeProduct(t){try{return await this.hass.callWS({type:St.LOOKUP_BARCODE_PRODUCT,barcode:t})}catch{return{barcode:t,results:[]}}}async lookupByBarcode(t){try{return await this.hass.callWS({type:St.LOOKUP_BY_BARCODE,barcode:t})}catch{return{items:[]}}}async getItems(t){return(await this.hass.callWS({type:St.LIST_ITEMS,inventory_id:t})).items}async getItem(t,e){try{return(await this.hass.callWS({type:St.GET_ITEM,inventory_id:t,name:e})).item}catch{return null}}async getHistory(t,e){const n={type:St.GET_HISTORY,inventory_id:t};return e?.itemName&&(n.item_name=e.itemName),e?.eventType&&(n.event_type=e.eventType),e?.limit&&(n.limit=e.limit),(await this.hass.callWS(n)).events}async getItemConsumptionRates(t,e,n){const r={type:St.GET_ITEM_CONSUMPTION_RATES,inventory_id:t,item_name:e};return null!==n&&(r.window_days=n),this.hass.callWS(r)}async exportInventory(t,e="json"){return this.hass.callWS({type:St.EXPORT,inventory_id:t,format:e})}async importInventory(t,e,n="json",r="skip"){return this.hass.callWS({type:St.IMPORT,inventory_id:t,data:e,format:n,merge_strategy:r})}},Jn=class{shadowRoot;constructor(t){this.shadowRoot=t}getRawAddModalData(){return{aliases:this.getInputValue(`add-${ee}`),autoAddEnabled:this.getInputChecked(`add-${ne}`),autoAddIdToDescriptionEnabled:this.getInputChecked(`add-${re}`),autoAddToListQuantity:this.getInputValue(`add-${oe}`),barcode:this.getInputValue(`add-${ie}`),category:this.getInputValue(`add-${ae}`),description:this.getInputValue(`add-${se}`),desiredQuantity:this.getInputValue(`add-${ce}`),expiryAlertDays:this.getInputValue(`add-${le}`),expiryDate:this.getInputValue(`add-${de}`),location:this.getInputValue(`add-${ue}`),name:this.getInputValue(`add-${pe}`),quantity:this.getInputValue(`add-${fe}`),todoList:this.getInputValue(`add-${ve}`),todoQuantityPlacement:this.getInputValue(`add-${ge}`),price:this.getInputValue(`add-${he}`),unit:this.getInputValue(`add-${me}`),servingSize:this.getInputValue(`add-${ye}`),servingsPerUnit:this.getInputValue(`add-${be}`),caloriesPerServing:this.getInputValue(`add-${xe}`),proteinPerServing:this.getInputValue(`add-${_e}`),carbohydratesPerServing:this.getInputValue(`add-${we}`),fatPerServing:this.getInputValue(`add-${Ee}`)}}getRawEditModalData(){return{aliases:this.getInputValue(`edit-${ee}`),autoAddEnabled:this.getInputChecked(`edit-${ne}`),autoAddIdToDescriptionEnabled:this.getInputChecked(`edit-${re}`),autoAddToListQuantity:this.getInputValue(`edit-${oe}`),barcode:this.getInputValue(`edit-${ie}`),category:this.getInputValue(`edit-${ae}`),description:this.getInputValue(`edit-${se}`),desiredQuantity:this.getInputValue(`edit-${ce}`),expiryAlertDays:this.getInputValue(`edit-${le}`),expiryDate:this.getInputValue(`edit-${de}`),location:this.getInputValue(`edit-${ue}`),name:this.getInputValue(`edit-${pe}`),quantity:this.getInputValue(`edit-${fe}`),todoList:this.getInputValue(`edit-${ve}`),todoQuantityPlacement:this.getInputValue(`edit-${ge}`),price:this.getInputValue(`edit-${he}`),unit:this.getInputValue(`edit-${me}`),servingSize:this.getInputValue(`edit-${ye}`),servingsPerUnit:this.getInputValue(`edit-${be}`),caloriesPerServing:this.getInputValue(`edit-${xe}`),proteinPerServing:this.getInputValue(`edit-${_e}`),carbohydratesPerServing:this.getInputValue(`edit-${we}`),fatPerServing:this.getInputValue(`edit-${Ee}`)}}populateEditModal(t){const e=[{id:`edit-${oe}`,value:(t.auto_add_to_list_quantity??Mn.AUTO_ADD_TO_LIST_QUANTITY).toString()},{id:`edit-${ee}`,value:t.aliases?.length?t.aliases.join(", "):Mn.ALIASES},{id:`edit-${ie}`,value:t.barcodes?.length?t.barcodes.join(", "):Mn.BARCODE},{id:`edit-${ae}`,value:t.categories?.length?t.categories.join(", "):t.category??Mn.CATEGORY},{id:`edit-${se}`,value:t.description??Mn.DESCRIPTION},{id:`edit-${ce}`,value:0===(t.desired_quantity??Mn.DESIRED_QUANTITY)?"":(t.desired_quantity??Mn.DESIRED_QUANTITY).toString()},{id:`edit-${le}`,value:(t.expiry_alert_days??Mn.EXPIRY_ALERT_DAYS).toString()},{id:`edit-${de}`,value:t.expiry_date??Mn.EXPIRY_DATE},{id:`edit-${ue}`,value:t.locations?.length?t.locations.join(", "):t.location??Mn.LOCATION},{id:`edit-${pe}`,value:t.name??""},{id:`edit-${fe}`,value:(t.quantity??Mn.QUANTITY).toString()},{id:`edit-${ve}`,value:t.todo_list??Mn.TODO_LIST},{id:`edit-${ge}`,value:t.todo_quantity_placement??Mn.TODO_QUANTITY_PLACEMENT},{id:`edit-${he}`,value:0===(t.price??Mn.PRICE)?"":(t.price??Mn.PRICE).toString()},{id:`edit-${me}`,value:t.unit??Mn.UNIT},{id:`edit-${ye}`,value:(t.serving_size??Mn.SERVING_SIZE).toString()},{id:`edit-${be}`,value:(t.servings_per_unit??Mn.SERVINGS_PER_UNIT).toString()},{id:`edit-${xe}`,value:(t.calories_per_serving??Mn.CALORIES_PER_SERVING).toString()},{id:`edit-${_e}`,value:(t.protein_g_per_serving??Mn.PROTEIN_PER_SERVING).toString()},{id:`edit-${we}`,value:(t.carbs_g_per_serving??Mn.CARBOHYDRATES_PER_SERVING).toString()},{id:`edit-${Ee}`,value:(t.fat_per_serving??Mn.FAT_PER_SERVING).toString()}];this.setFormValues(e);const n=this.getElement(`edit-${ne}`),r=this.getElement(`edit-${re}`);n&&(n.checked=t.auto_add_enabled??!1),r&&(r.checked=t.auto_add_id_to_description_enabled??!1)}clearAddModalForm(){const t=[{id:`add-${oe}`,value:Mn.AUTO_ADD_TO_LIST_QUANTITY.toString()},{id:`add-${ee}`,value:Mn.ALIASES},{id:`add-${ie}`,value:Mn.BARCODE},{id:`add-${ae}`,value:Mn.CATEGORY},{id:`add-${se}`,value:Mn.DESCRIPTION},{id:`add-${ce}`,value:""},{id:`add-${le}`,value:Mn.EXPIRY_ALERT_DAYS.toString()},{id:`add-${de}`,value:Mn.EXPIRY_DATE},{id:`add-${ue}`,value:Mn.LOCATION},{id:`add-${pe}`,value:""},{id:`add-${fe}`,value:Mn.QUANTITY.toString()},{id:`add-${ve}`,value:Mn.TODO_LIST},{id:`add-${ge}`,value:Mn.TODO_QUANTITY_PLACEMENT},{id:`add-${he}`,value:""},{id:`add-${me}`,value:Mn.UNIT},{id:`add-${ye}`,value:""},{id:`add-${be}`,value:""},{id:`add-${xe}`,value:""},{id:`add-${_e}`,value:""},{id:`add-${we}`,value:""},{id:`add-${Ee}`,value:""}];this.setFormValues(t);const e=this.getElement(`add-${ne}`),n=this.getElement(`add-${re}`);e&&(e.checked=Mn.AUTO_ADD_ENABLED),n&&(n.checked=Mn.AUTO_ADD_ID_TO_DESCRIPTION_ENABLED)}setFormValues(t){for(const{id:e,value:n}of t){const t=this.getElement(e);t&&(t.value=n)}}getInputValue(t){return this.getElement(t)?.value?.trim()??""}getInputChecked(t){return this.getElement(t)?.checked??!1}getElement(t){return this.shadowRoot.getElementById(t)}},tr=/* @__PURE__ */a((t,e)=>{!function(n,r){"object"==typeof t&&"object"==typeof e?e.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof t?t.Quagga=r():n.Quagga=r()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=90)}([function(t,e,n){var r=n(68);t.exports=function(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(68);function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}t.exports=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(9).default,o=n(150);t.exports=function(t,e){if(e&&("object"==r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return o(t)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(38);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(146)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},function(t,e){function n(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,c,"next",t)}function c(t){n(a,o,i,s,c,"throw",t)}s(void 0)})}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(46),o="object"==typeof self&&self&&self.Object===Object&&self;t.exports=r||o||Function("return this")()},function(t,e){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){t.exports=Array.isArray},function(t,e,n){var r=n(151);function o(){return t.exports=o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=r(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}},t.exports.__esModule=!0,t.exports.default=t.exports,o.apply(null,arguments)}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(102),o=n(108);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},function(t,e,n){var r=n(91);t.exports=n(134)(function(t,e,n){r(t,e,n)})},function(t,e,n){var r=n(152),o=n(153),i=n(66),a=n(154);t.exports=function(t){return r(t)||o(t)||i(t)||a()},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(19),o=n(104),i=n(105),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},function(t,e,n){var r=n(60),o=n(29);t.exports=function(t,e,n,i){var a=!n;n||(n={});for(var s=-1,c=e.length;++s<c;){var l=e[s],d=i?i(n[l],t[l],l,n,t):void 0;void 0===d&&(d=t[l]),a?o(n,l,d):r(n,l,d)}return n}},function(t,e,n){t.exports=n(8).Symbol},function(t,e,n){var r=n(61),o=n(132),i=n(26);t.exports=function(t){return i(t)?r(t,!0):o(t)}},function(t,e,n){var r=n(92),o=n(93),i=n(94),a=n(95),s=n(96);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},function(t,e,n){var r=n(23);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){t.exports=n(14)(Object,"create")},function(t,e,n){var r=n(117);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},function(t,e,n){var r=n(28),o=n(56);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},function(t,e,n){t.exports=n(14)(n(8),"Map")},function(t,e,n){var r=n(17),o=n(10);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,n){var r=n(50);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){var r=n(124);t.exports=function(t){var e=new t.constructor(t.byteLength);return new r(e).set(new r(t)),e}},function(t,e,n){t.exports=n(55)(Object.getPrototypeOf,Object)},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e,n){var r=n(126),o=n(11),i=Object.prototype,a=i.hasOwnProperty,s=i.propertyIsEnumerable;t.exports=r(function(){return arguments}())?r:function(t){return o(t)&&a.call(t,"callee")&&!s.call(t,"callee")}},function(t,e,n){(function(t){var r=n(8),o=n(128),i=e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,s=a&&a.exports===i?r.Buffer:void 0;t.exports=(s?s.isBuffer:void 0)||o}).call(this,n(30)(t))},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,n){(function(t){var r=n(46),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o&&r.process;t.exports=function(){try{return i&&i.require&&i.require("util").types||a&&a.binding&&a.binding("util")}catch(t){}}()}).call(this,n(30)(t))},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},t.exports.__esModule=!0,t.exports.default=t.exports,n(e,r)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(61),o=n(159),i=n(26);t.exports=function(t){return i(t)?r(t):o(t)}},function(t,e,n){var r=n(163),o=n(75),i=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols;t.exports=a?function(t){return null==t?[]:(t=Object(t),r(a(t),function(e){return i.call(t,e)}))}:o},function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},function(t,e,n){var r=n(166),o=n(27),i=n(167),a=n(168),s=n(169),c=n(17),l=n(47),d=l(r),u=l(o),p=l(i),h=l(a),f=l(s),v=c;(r&&"[object DataView]"!=v(new r(/* @__PURE__ */new ArrayBuffer(1)))||o&&"[object Map]"!=v(new o)||i&&"[object Promise]"!=v(i.resolve())||a&&"[object Set]"!=v(new a)||s&&"[object WeakMap]"!=v(new s))&&(v=function(t){var e=c(t),n="[object Object]"==e?t.constructor:void 0,r=n?l(n):"";if(r)switch(r){case d:return"[object DataView]";case u:return"[object Map]";case p:return"[object Promise]";case h:return"[object Set]";case f:return"[object WeakMap]"}return e}),t.exports=v},function(t,e,n){var r=n(12),o=n(180),i=n(181),a=n(184);t.exports=function(t,e){return r(t)?t:o(t,e)?[t]:i(a(t))}},function(t,e,n){var r=n(17),o=n(11);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},function(t,e,n){var r=n(21),o=n(97),i=n(98),a=n(99),s=n(100),c=n(101);function l(t){var e=this.__data__=new r(t);this.size=e.size}l.prototype.clear=o,l.prototype.delete=i,l.prototype.get=a,l.prototype.has=s,l.prototype.set=c,t.exports=l},function(t,e,n){(function(e){t.exports="object"==typeof e&&e&&e.Object===Object&&e}).call(this,n(103))},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e,n){var r=n(109),o=n(116),i=n(118),a=n(119),s=n(120);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},function(t,e,n){var r=n(29),o=n(23);t.exports=function(t,e,n){(void 0!==n&&!o(t[e],n)||void 0===n&&!(e in t))&&r(t,e,n)}},function(t,e,n){var r=n(14);t.exports=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}()},function(t,e,n){(function(t){var r=n(8),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o?r.Buffer:void 0,s=a?a.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=s?s(n):new t.constructor(n);return t.copy(r),r}}).call(this,n(30)(t))},function(t,e,n){var r=n(31);t.exports=function(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}},function(t,e){t.exports=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}},function(t,e,n){var r=n(125),o=n(32),i=n(33);t.exports=function(t){return"function"!=typeof t.constructor||i(t)?{}:r(o(t))}},function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,e,n){var r=n(17),o=n(32),i=n(11),a=Function.prototype,s=Object.prototype,c=a.toString,l=s.hasOwnProperty,d=c.call(Object);t.exports=function(t){if(!i(t)||"[object Object]"!=r(t))return!1;var e=o(t);if(null===e)return!0;var n=l.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==d}},function(t,e,n){var r=n(129),o=n(36),i=n(37),a=i&&i.isTypedArray;t.exports=a?o(a):r},function(t,e){t.exports=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}},function(t,e,n){var r=n(29),o=n(23),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var a=t[e];i.call(t,e)&&o(a,n)&&(void 0!==n||e in t)||r(t,e,n)}},function(t,e,n){var r=n(131),o=n(34),i=n(12),a=n(35),s=n(62),c=n(58),l=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=i(t),d=!n&&o(t),u=!n&&!d&&a(t),p=!n&&!d&&!u&&c(t),h=n||d||u||p,f=h?r(t.length,String):[],v=f.length;for(var g in t)!e&&!l.call(t,g)||h&&("length"==g||u&&("offset"==g||"parent"==g)||p&&("buffer"==g||"byteLength"==g||"byteOffset"==g)||s(g,v))||f.push(g);return f}},function(t,e){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e){t.exports=function(t){return t}},function(t,e,n){var r=n(136),o=Math.max;t.exports=function(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var i=arguments,a=-1,s=o(i.length-e,0),c=Array(s);++a<s;)c[a]=i[e+a];a=-1;for(var l=Array(e+1);++a<e;)l[a]=i[a];return l[e]=n(c),r(t,this,l)}}},function(t,e,n){var r=n(137);t.exports=n(139)(r)},function(t,e,n){var r=n(67);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(9).default,o=n(145);t.exports=function(t){var e=o(t,"string");return"symbol"==r(e)?e:e+""},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e){this.v=t,this.k=e},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(71);function o(){var e,n,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.toStringTag||"@@toStringTag";function c(t,o,i,a){var s=o&&o.prototype instanceof d?o:d,c=Object.create(s.prototype);return r(c,"_invoke",function(t,r,o){var i,a,s,c=0,d=o||[],u=!1,p={p:0,n:0,v:e,a:h,f:h.bind(e,4),d:function(t,n){return i=t,a=0,s=e,p.n=n,l}};function h(t,r){for(a=t,s=r,n=0;!u&&c&&!o&&n<d.length;n++){var o,i=d[n],h=p.p,f=i[2];t>3?(o=f===r)&&(s=i[(a=i[4])?5:(a=3,3)],i[4]=i[5]=e):i[0]<=h&&((o=t<2&&h<i[1])?(a=0,p.v=r,p.n=i[1]):h<f&&(o=t<3||i[0]>r||r>f)&&(i[4]=t,i[5]=r,p.n=f,a=0))}if(o||t>1)return l;throw u=!0,r}return function(o,d,f){if(c>1)throw TypeError("Generator is already running");for(u&&1===d&&h(d,f),a=d,s=f;(n=a<2?e:s)||!u;){i||(a?a<3?(a>1&&(p.n=-1),h(a,s)):p.n=s:p.v=s);try{if(c=2,i){if(a||(o="next"),n=i[o]){if(!(n=n.call(i,s)))throw TypeError("iterator result is not an object");if(!n.done)return n;s=n.value,a<2&&(a=0)}else 1===a&&(n=i.return)&&n.call(i),a<2&&(s=TypeError("The iterator does not provide a '"+o+"' method"),a=1);i=e}else if((n=(u=p.n<0)?s:t.call(r,p))!==l)break}catch(t){i=e,a=1,s=t}finally{c=1}}return{value:n,done:u}}}(t,i,a),!0),c}var l={};function d(){}function u(){}function p(){}n=Object.getPrototypeOf;var h=[][a]?n(n([][a]())):(r(n={},a,function(){return this}),n),f=p.prototype=d.prototype=Object.create(h);function v(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,r(t,s,"GeneratorFunction")),t.prototype=Object.create(f),t}return u.prototype=p,r(f,"constructor",p),r(p,"constructor",u),u.displayName="GeneratorFunction",r(p,s,"GeneratorFunction"),r(f),r(f,s,"Generator"),r(f,a,function(){return this}),r(f,"toString",function(){return"[object Generator]"}),(t.exports=o=function(){return{w:c,m:v}},t.exports.__esModule=!0,t.exports.default=t.exports)()}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){function n(e,r,o,i){var a=Object.defineProperty;try{a({},"",{})}catch(e){a=0}t.exports=n=function(t,e,r,o){function i(e,r){n(t,e,function(t){return this._invoke(e,r,t)})}e?a?a(t,e,{value:r,enumerable:!o,configurable:!o,writable:!o}):t[e]=r:(i("next",0),i("throw",1),i("return",2))},t.exports.__esModule=!0,t.exports.default=t.exports,n(e,r,o,i)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(70),o=n(73);t.exports=function(t,e,n,i,a){return new o(r().w(t,e,n,i),a||Promise)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(69),o=n(71);t.exports=function t(e,n){function i(t,o,a,s){try{var c=e[t](o),l=c.value;return l instanceof r?n.resolve(l.v).then(function(t){i("next",t,a,s)},function(t){i("throw",t,a,s)}):n.resolve(l).then(function(t){c.value=t,a(c)},function(t){return i("throw",t,a,s)})}catch(t){s(t)}}var a;this.next||(o(t.prototype),o(t.prototype,"function"==typeof Symbol&&Symbol.asyncIterator||"@asyncIterator",function(){return this})),o(this,"_invoke",function(t,e,r){function o(){return new n(function(e,n){i(t,r,e,n)})}return a=a?a.then(o,o):o()},!0)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},function(t,e){t.exports=function(){return[]}},function(t,e,n){var r=n(41),o=n(32),i=n(40),a=n(75);t.exports=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,i(t)),t=o(t);return e}:a},function(t,e,n){var r=n(41),o=n(12);t.exports=function(t,e,n){var i=e(t);return o(t)?i:r(i,n(t))}},function(t,e,n){var r=n(77),o=n(76),i=n(20);t.exports=function(t){return r(t,i,o)}},function(t,e,n){var r=n(44);t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},function(t,e,n){var r=n(142),o=n(143),i=n(66),a=n(144);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||a()},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(155);t.exports=function(t,e){if(null==t)return{};var n,o,i=r(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],-1===e.indexOf(n)&&{}.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(74),o=n(156),i=n(179),a=n(43),s=n(18),c=n(190),l=n(191),d=n(78);t.exports=l(function(t,e){var n={};if(null==t)return n;var l=!1;e=r(e,function(e){return e=a(e,t),l||(l=e.length>1),e}),s(t,d(t),n),l&&(n=o(n,7,c));for(var u=e.length;u--;)i(n,e[u]);return n})},function(t,e,n){var r=n(1),o=n(38),i=n(195),a=n(196);function s(e){var n="function"==typeof Map?/* @__PURE__ */new Map:void 0;return t.exports=s=function(t){if(null===t||!i(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return a(t,arguments,r(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)},t.exports.__esModule=!0,t.exports.default=t.exports,s(e)}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},,,,,,,function(t,e,n){t.exports=n(198)},function(t,e,n){var r=n(45),o=n(49),i=n(121),a=n(123),s=n(10),c=n(20),l=n(59);t.exports=function t(e,n,d,u,p){e!==n&&i(n,function(i,c){if(p||(p=new r),s(i))a(e,n,c,d,t,u,p);else{var h=u?u(l(e,c),i,c+"",e,n,p):void 0;void 0===h&&(h=i),o(e,c,h)}},c)}},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,n){var r=n(22),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0||(n==e.length-1?e.pop():o.call(e,n,1),--this.size,0))}},function(t,e,n){var r=n(22);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},function(t,e,n){var r=n(22);t.exports=function(t){return r(this.__data__,t)>-1}},function(t,e,n){var r=n(22);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},function(t,e,n){var r=n(21);t.exports=function(){this.__data__=new r,this.size=0}},function(t,e){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,n){var r=n(21),o=n(27),i=n(48);t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var a=n.__data__;if(!o||a.length<199)return a.push([t,e]),this.size=++n.size,this;n=this.__data__=new i(a)}return n.set(t,e),this.size=n.size,this}},function(t,e,n){var r=n(28),o=n(106),i=n(10),a=n(47),s=/^\[object .+?Constructor\]$/,c=Function.prototype,l=Object.prototype,d=c.toString,u=l.hasOwnProperty,p=RegExp("^"+d.call(u).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(r(t)?p:s).test(a(t))}},function(t,e){var n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(19),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var o=a.call(t);return r&&(e?t[s]=n:delete t[s]),o}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r,o=n(107),i=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!i&&i in t}},function(t,e,n){t.exports=n(8)["__core-js_shared__"]},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,n){var r=n(110),o=n(21),i=n(27);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},function(t,e,n){var r=n(111),o=n(112),i=n(113),a=n(114),s=n(115);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},function(t,e,n){var r=n(24);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,n){var r=n(24),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(e,t)?e[t]:void 0}},function(t,e,n){var r=n(24),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},function(t,e,n){var r=n(24);t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},function(t,e,n){var r=n(25);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,n){var r=n(25);t.exports=function(t){return r(this,t).get(t)}},function(t,e,n){var r=n(25);t.exports=function(t){return r(this,t).has(t)}},function(t,e,n){var r=n(25);t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},function(t,e,n){t.exports=n(122)()},function(t,e){t.exports=function(t){return function(e,n,r){for(var o=-1,i=Object(e),a=r(e),s=a.length;s--;){var c=a[t?s:++o];if(!1===n(i[c],c,i))break}return e}}},function(t,e,n){var r=n(49),o=n(51),i=n(52),a=n(53),s=n(54),c=n(34),l=n(12),d=n(127),u=n(35),p=n(28),h=n(10),f=n(57),v=n(58),g=n(59),m=n(130);t.exports=function(t,e,n,y,b,x,_){var w=g(t,n),E=g(e,n),$=_.get(E);if($)r(t,n,$);else{var A=x?x(w,E,n+"",t,e,_):void 0,S=void 0===A;if(S){var k=l(E),C=!k&&u(E),R=!k&&!C&&v(E);A=E,k||C||R?l(w)?A=w:d(w)?A=a(w):C?(S=!1,A=o(E,!0)):R?(S=!1,A=i(E,!0)):A=[]:f(E)||c(E)?(A=w,c(w)?A=m(w):h(w)&&!p(w)||(A=s(E))):S=!1}S&&(_.set(E,A),b(A,E,y,x,_),_.delete(E)),r(t,n,A)}}},function(t,e,n){t.exports=n(8).Uint8Array},function(t,e,n){var r=n(10),o=Object.create;t.exports=function(){function t(){}return function(e){if(!r(e))return{};if(o)return o(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}()},function(t,e,n){var r=n(17),o=n(11);t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},function(t,e,n){var r=n(26),o=n(11);t.exports=function(t){return o(t)&&r(t)}},function(t,e){t.exports=function(){return!1}},function(t,e,n){var r=n(17),o=n(56),i=n(11),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!a[r(t)]}},function(t,e,n){var r=n(18),o=n(20);t.exports=function(t){return r(t,o(t))}},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},function(t,e,n){var r=n(10),o=n(33),i=n(133),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return i(t);var e=o(t),n=[];for(var s in t)("constructor"!=s||!e&&a.call(t,s))&&n.push(s);return n}},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},function(t,e,n){var r=n(135),o=n(140);t.exports=function(t){return r(function(e,n){var r=-1,i=n.length,a=i>1?n[i-1]:void 0,s=i>2?n[2]:void 0;for(a=t.length>3&&"function"==typeof a?(i--,a):void 0,s&&o(n[0],n[1],s)&&(a=i<3?void 0:a,i=1),e=Object(e);++r<i;){var c=n[r];c&&t(e,c,r,a)}return e})}},function(t,e,n){var r=n(63),o=n(64),i=n(65);t.exports=function(t,e){return i(o(t,e,r),t+"")}},function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},function(t,e,n){var r=n(138),o=n(50),i=n(63);t.exports=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:i},function(t,e){t.exports=function(t){return function(){return t}}},function(t,e){var n=Date.now;t.exports=function(t){var e=0,r=0;return function(){var o=n(),i=16-(o-r);if(r=o,i>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},function(t,e,n){var r=n(23),o=n(26),i=n(62),a=n(10);t.exports=function(t,e,n){if(!a(n))return!1;var s=typeof e;return!!("number"==s?o(n)&&i(e,n.length):"string"==s&&e in n)&&r(n[e],t)}},function(t,e){"undefined"!=typeof window&&(window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)})),"function"!=typeof Math.imul&&(Math.imul=function(t,e){var n=65535&t,r=65535&e;return n*r+((t>>>16&65535)*r+n*(e>>>16&65535)<<16>>>0)|0}),"function"!=typeof Object.assign&&(Object.assign=function(t){if(null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var r=arguments[n];if(null!==r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e})},function(t,e){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,s=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(9).default;t.exports=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(69),o=n(70),i=n(147),a=n(72),s=n(73),c=n(148),l=n(149);function d(){var e=o(),n=e.m(d),u=(Object.getPrototypeOf?Object.getPrototypeOf(n):n.__proto__).constructor;function p(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===u||"GeneratorFunction"===(e.displayName||e.name))}var h={throw:1,return:2,break:3,continue:3};function f(t){var e,n;return function(r){e||(e={stop:function(){return n(r.a,2)},catch:function(){return r.v},abrupt:function(t,e){return n(r.a,h[t],e)},delegateYield:function(t,o,i){return e.resultName=o,n(r.d,l(t),i)},finish:function(t){return n(r.f,t)}},n=function(t,n,o){r.p=e.prev,r.n=e.next;try{return t(n,o)}finally{e.next=r.n}}),e.resultName&&(e[e.resultName]=r.v,e.resultName=void 0),e.sent=r.v,e.next=r.n;try{return t.call(this,e)}finally{r.p=e.prev,r.n=e.next}}}return(t.exports=d=function(){return{wrap:function(t,n,r,o){return e.w(f(t),n,r,o&&o.reverse())},isGeneratorFunction:p,mark:e.m,awrap:function(t,e){return new r(t,e)},AsyncIterator:s,async:function(t,e,n,r,o){return(p(e)?a:i)(f(t),e,n,r,o)},keys:c,values:l}},t.exports.__esModule=!0,t.exports.default=t.exports)()}t.exports=d,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(72);t.exports=function(t,e,n,o,i){var a=r(t,e,n,o,i);return a.next().then(function(t){return t.done?t.value:a.next()})},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t){var e=Object(t),n=[];for(var r in e)n.unshift(r);return function t(){for(;n.length;)if((r=n.pop())in e)return t.value=r,t.done=!1,t;return t.done=!0,t}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(9).default;t.exports=function(t){if(null!=t){var e=t["function"==typeof Symbol&&Symbol.iterator||"@@iterator"],n=0;if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}throw new TypeError(r(t)+" is not iterable")},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(1);t.exports=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(67);t.exports=function(t){if(Array.isArray(t))return r(t)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e){if(null==t)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(-1!==e.indexOf(r))continue;n[r]=t[r]}return n},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(45),o=n(157),i=n(60),a=n(158),s=n(161),c=n(51),l=n(53),d=n(162),u=n(164),p=n(165),h=n(78),f=n(42),v=n(170),g=n(171),m=n(54),y=n(12),b=n(35),x=n(175),_=n(10),w=n(177),E=n(39),$=n(20),A={};A["[object Arguments]"]=A["[object Array]"]=A["[object ArrayBuffer]"]=A["[object DataView]"]=A["[object Boolean]"]=A["[object Date]"]=A["[object Float32Array]"]=A["[object Float64Array]"]=A["[object Int8Array]"]=A["[object Int16Array]"]=A["[object Int32Array]"]=A["[object Map]"]=A["[object Number]"]=A["[object Object]"]=A["[object RegExp]"]=A["[object Set]"]=A["[object String]"]=A["[object Symbol]"]=A["[object Uint8Array]"]=A["[object Uint8ClampedArray]"]=A["[object Uint16Array]"]=A["[object Uint32Array]"]=!0,A["[object Error]"]=A["[object Function]"]=A["[object WeakMap]"]=!1,t.exports=function t(e,n,S,k,C,R){var I,M=1&n,T=2&n,O=4&n;if(S&&(I=C?S(e,k,C,R):S(e)),void 0!==I)return I;if(!_(e))return e;var D=y(e);if(D){if(I=v(e),!M)return l(e,I)}else{var z=f(e),P="[object Function]"==z||"[object GeneratorFunction]"==z;if(b(e))return c(e,M);if("[object Object]"==z||"[object Arguments]"==z||P&&!C){if(I=T||P?{}:m(e),!M)return T?u(e,s(I,e)):d(e,a(I,e))}else{if(!A[z])return C?e:{};I=g(e,z,M)}}R||(R=new r);var N=R.get(e);if(N)return N;R.set(e,I),w(e)?e.forEach(function(r){I.add(t(r,n,S,r,e,R))}):x(e)&&e.forEach(function(r,o){I.set(o,t(r,n,S,o,e,R))});var j=D?void 0:(O?T?h:p:T?$:E)(e);return o(j||e,function(r,o){j&&(r=e[o=r]),i(I,o,t(r,n,S,o,e,R))}),I}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}},function(t,e,n){var r=n(18),o=n(39);t.exports=function(t,e){return t&&r(e,o(e),t)}},function(t,e,n){var r=n(33),o=n(160),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=[];for(var n in Object(t))i.call(t,n)&&"constructor"!=n&&e.push(n);return e}},function(t,e,n){t.exports=n(55)(Object.keys,Object)},function(t,e,n){var r=n(18),o=n(20);t.exports=function(t,e){return t&&r(e,o(e),t)}},function(t,e,n){var r=n(18),o=n(40);t.exports=function(t,e){return r(t,o(t),e)}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i}},function(t,e,n){var r=n(18),o=n(76);t.exports=function(t,e){return r(t,o(t),e)}},function(t,e,n){var r=n(77),o=n(40),i=n(39);t.exports=function(t){return r(t,i,o)}},function(t,e,n){t.exports=n(14)(n(8),"DataView")},function(t,e,n){t.exports=n(14)(n(8),"Promise")},function(t,e,n){t.exports=n(14)(n(8),"Set")},function(t,e,n){t.exports=n(14)(n(8),"WeakMap")},function(t,e){var n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&n.call(t,"index")&&(r.index=t.index,r.input=t.input),r}},function(t,e,n){var r=n(31),o=n(172),i=n(173),a=n(174),s=n(52);t.exports=function(t,e,n){var c=t.constructor;switch(e){case"[object ArrayBuffer]":return r(t);case"[object Boolean]":case"[object Date]":return new c(+t);case"[object DataView]":return o(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return s(t,n);case"[object Map]":case"[object Set]":return new c;case"[object Number]":case"[object String]":return new c(t);case"[object RegExp]":return i(t);case"[object Symbol]":return a(t)}}},function(t,e,n){var r=n(31);t.exports=function(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}},function(t,e){var n=/\w*$/;t.exports=function(t){var e=new t.constructor(t.source,n.exec(t));return e.lastIndex=t.lastIndex,e}},function(t,e,n){var r=n(19),o=r?r.prototype:void 0,i=o?o.valueOf:void 0;t.exports=function(t){return i?Object(i.call(t)):{}}},function(t,e,n){var r=n(176),o=n(36),i=n(37),a=i&&i.isMap;t.exports=a?o(a):r},function(t,e,n){var r=n(42),o=n(11);t.exports=function(t){return o(t)&&"[object Map]"==r(t)}},function(t,e,n){var r=n(178),o=n(36),i=n(37),a=i&&i.isSet;t.exports=a?o(a):r},function(t,e,n){var r=n(42),o=n(11);t.exports=function(t){return o(t)&&"[object Set]"==r(t)}},function(t,e,n){var r=n(43),o=n(186),i=n(187),a=n(79);t.exports=function(t,e){return e=r(e,t),null==(t=i(t,e))||delete t[a(o(e))]}},function(t,e,n){var r=n(12),o=n(44),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||a.test(t)||!i.test(t)||null!=e&&t in Object(e)}},function(t,e,n){var r=n(182),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g;t.exports=r(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,function(t,n,r,o){e.push(r?o.replace(i,"$1"):n||t)}),e})},function(t,e,n){var r=n(183);t.exports=function(t){var e=r(t,function(t){return 500===n.size&&n.clear(),t}),n=e.cache;return e}},function(t,e,n){var r=n(48);function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(o.Cache||r),n}o.Cache=r,t.exports=o},function(t,e,n){var r=n(185);t.exports=function(t){return null==t?"":r(t)}},function(t,e,n){var r=n(19),o=n(74),i=n(12),a=n(44),s=r?r.prototype:void 0,c=s?s.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return o(e,t)+"";if(a(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}},function(t,e){t.exports=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},function(t,e,n){var r=n(188),o=n(189);t.exports=function(t,e){return e.length<2?t:r(t,o(e,0,-1))}},function(t,e,n){var r=n(43),o=n(79);t.exports=function(t,e){for(var n=0,i=(e=r(e,t)).length;null!=t&&n<i;)t=t[o(e[n++])];return n&&n==i?t:void 0}},function(t,e){t.exports=function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var i=Array(o);++r<o;)i[r]=t[r+e];return i}},function(t,e,n){var r=n(57);t.exports=function(t){return r(t)?void 0:t}},function(t,e,n){var r=n(192),o=n(64),i=n(65);t.exports=function(t){return i(o(t,void 0,r),t+"")}},function(t,e,n){var r=n(193);t.exports=function(t){return null!=t&&t.length?r(t,1):[]}},function(t,e,n){var r=n(41),o=n(194);t.exports=function t(e,n,i,a,s){var c=-1,l=e.length;for(i||(i=o),s||(s=[]);++c<l;){var d=e[c];n>0&&i(d)?n>1?t(d,n-1,i,a,s):r(s,d):a||(s[s.length]=d)}return s}},function(t,e,n){var r=n(19),o=n(34),i=n(12),a=r?r.isConcatSpreadable:void 0;t.exports=function(t){return i(t)||o(t)||!!(a&&t&&t[a])}},function(t,e){t.exports=function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(197),o=n(38);t.exports=function(t,e,n){if(r())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var a=new(t.bind.apply(t,i));return n&&o(a,n.prototype),a},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){function n(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(t.exports=n=function(){return!!e},t.exports.__esModule=!0,t.exports.default=t.exports)()}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){n.r(e),n.d(e,"BarcodeDecoder",function(){return lr}),n.d(e,"Readers",function(){return a}),n.d(e,"CameraAccess",function(){return Dr}),n.d(e,"ImageDebug",function(){return Ke}),n.d(e,"ImageWrapper",function(){return Qe}),n.d(e,"ResultCollector",function(){return zr});var r={};n.r(r),n.d(r,"create",function(){return w}),n.d(r,"clone",function(){return E}),n.d(r,"copy",function(){return $}),n.d(r,"identity",function(){return A}),n.d(r,"fromValues",function(){return S}),n.d(r,"set",function(){return k}),n.d(r,"transpose",function(){return C}),n.d(r,"invert",function(){return R}),n.d(r,"adjoint",function(){return I}),n.d(r,"determinant",function(){return M}),n.d(r,"multiply",function(){return T}),n.d(r,"rotate",function(){return O}),n.d(r,"scale",function(){return D}),n.d(r,"fromRotation",function(){return z}),n.d(r,"fromScaling",function(){return P}),n.d(r,"str",function(){return N}),n.d(r,"frob",function(){return j}),n.d(r,"LDU",function(){return L}),n.d(r,"add",function(){return B}),n.d(r,"subtract",function(){return U}),n.d(r,"exactEquals",function(){return F}),n.d(r,"equals",function(){return q}),n.d(r,"multiplyScalar",function(){return H}),n.d(r,"multiplyScalarAndAdd",function(){return V}),n.d(r,"mul",function(){return W}),n.d(r,"sub",function(){return Q});var o={};n.r(o),n.d(o,"create",function(){return Y}),n.d(o,"clone",function(){return G}),n.d(o,"fromValues",function(){return X}),n.d(o,"copy",function(){return Z}),n.d(o,"set",function(){return K}),n.d(o,"add",function(){return J}),n.d(o,"subtract",function(){return tt}),n.d(o,"multiply",function(){return et}),n.d(o,"divide",function(){return nt}),n.d(o,"ceil",function(){return rt}),n.d(o,"floor",function(){return ot}),n.d(o,"min",function(){return it}),n.d(o,"max",function(){return at}),n.d(o,"round",function(){return st}),n.d(o,"scale",function(){return ct}),n.d(o,"scaleAndAdd",function(){return lt}),n.d(o,"distance",function(){return dt}),n.d(o,"squaredDistance",function(){return ut}),n.d(o,"length",function(){return pt}),n.d(o,"squaredLength",function(){return ht}),n.d(o,"negate",function(){return ft}),n.d(o,"inverse",function(){return vt}),n.d(o,"normalize",function(){return gt}),n.d(o,"dot",function(){return mt}),n.d(o,"cross",function(){return yt}),n.d(o,"lerp",function(){return bt}),n.d(o,"random",function(){return xt}),n.d(o,"transformMat2",function(){return _t}),n.d(o,"transformMat2d",function(){return wt}),n.d(o,"transformMat3",function(){return Et}),n.d(o,"transformMat4",function(){return $t}),n.d(o,"rotate",function(){return At}),n.d(o,"angle",function(){return St}),n.d(o,"signedAngle",function(){return kt}),n.d(o,"zero",function(){return Ct}),n.d(o,"str",function(){return Rt}),n.d(o,"exactEquals",function(){return It}),n.d(o,"equals",function(){return Mt}),n.d(o,"len",function(){return Ot}),n.d(o,"sub",function(){return Dt}),n.d(o,"mul",function(){return zt}),n.d(o,"div",function(){return Pt}),n.d(o,"dist",function(){return Nt}),n.d(o,"sqrDist",function(){return jt}),n.d(o,"sqrLen",function(){return Lt}),n.d(o,"forEach",function(){return Bt});var i={};n.r(i),n.d(i,"create",function(){return Ut}),n.d(i,"clone",function(){return Ft}),n.d(i,"length",function(){return qt}),n.d(i,"fromValues",function(){return Ht}),n.d(i,"copy",function(){return Vt}),n.d(i,"set",function(){return Wt}),n.d(i,"add",function(){return Qt}),n.d(i,"subtract",function(){return Yt}),n.d(i,"multiply",function(){return Gt}),n.d(i,"divide",function(){return Xt}),n.d(i,"ceil",function(){return Zt}),n.d(i,"floor",function(){return Kt}),n.d(i,"min",function(){return Jt}),n.d(i,"max",function(){return te}),n.d(i,"round",function(){return ee}),n.d(i,"scale",function(){return ne}),n.d(i,"scaleAndAdd",function(){return re}),n.d(i,"distance",function(){return oe}),n.d(i,"squaredDistance",function(){return ie}),n.d(i,"squaredLength",function(){return ae}),n.d(i,"negate",function(){return se}),n.d(i,"inverse",function(){return ce}),n.d(i,"normalize",function(){return le}),n.d(i,"dot",function(){return de}),n.d(i,"cross",function(){return ue}),n.d(i,"lerp",function(){return pe}),n.d(i,"slerp",function(){return he}),n.d(i,"hermite",function(){return fe}),n.d(i,"bezier",function(){return ve}),n.d(i,"random",function(){return ge}),n.d(i,"transformMat4",function(){return me}),n.d(i,"transformMat3",function(){return ye}),n.d(i,"transformQuat",function(){return be}),n.d(i,"rotateX",function(){return xe}),n.d(i,"rotateY",function(){return _e}),n.d(i,"rotateZ",function(){return we}),n.d(i,"angle",function(){return Ee}),n.d(i,"zero",function(){return $e}),n.d(i,"str",function(){return Ae}),n.d(i,"exactEquals",function(){return Se}),n.d(i,"equals",function(){return ke}),n.d(i,"sub",function(){return Ce}),n.d(i,"mul",function(){return Re}),n.d(i,"div",function(){return Ie}),n.d(i,"dist",function(){return Me}),n.d(i,"sqrDist",function(){return Te}),n.d(i,"len",function(){return Oe}),n.d(i,"sqrLen",function(){return De}),n.d(i,"forEach",function(){return ze});var a={};n.r(a),n.d(a,"BarcodeReader",function(){return cn}),n.d(a,"TwoOfFiveReader",function(){return hn}),n.d(a,"NewCodabarReader",function(){return mn}),n.d(a,"Code128Reader",function(){return yn}),n.d(a,"Code32Reader",function(){return kn}),n.d(a,"Code39Reader",function(){return An}),n.d(a,"Code39VINReader",function(){return In}),n.d(a,"Code93Reader",function(){return On}),n.d(a,"EAN2Reader",function(){return Fn}),n.d(a,"EAN5Reader",function(){return Hn}),n.d(a,"EAN8Reader",function(){return Vn}),n.d(a,"EANReader",function(){return Un}),n.d(a,"I2of5Reader",function(){return Wn}),n.d(a,"PharmacodeReader",function(){return Zn}),n.d(a,"UPCEReader",function(){return tr}),n.d(a,"UPCReader",function(){return er});var s=n(9),c=n.n(s),l=n(15),d=n.n(l),u=(n(141),n(80)),p=n.n(u),h=n(2),f=n.n(h),v=n(3),g=n.n(v),m=n(0),y=n.n(m),b="undefined"!=typeof Float32Array?Float32Array:Array,x=Math.random;function _(t){return t>=0?Math.round(t):t%.5==0?Math.floor(t):Math.round(t)}function w(){var t=new b(4);return b!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t}function E(t){var e=new b(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function $(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function A(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function S(t,e,n,r){var o=new b(4);return o[0]=t,o[1]=e,o[2]=n,o[3]=r,o}function k(t,e,n,r,o){return t[0]=e,t[1]=n,t[2]=r,t[3]=o,t}function C(t,e){if(t===e){var n=e[1];t[1]=e[2],t[2]=n}else t[0]=e[0],t[1]=e[2],t[2]=e[1],t[3]=e[3];return t}function R(t,e){var n=e[0],r=e[1],o=e[2],i=e[3],a=n*i-o*r;return a?(a=1/a,t[0]=i*a,t[1]=-r*a,t[2]=-o*a,t[3]=n*a,t):null}function I(t,e){var n=e[0];return t[0]=e[3],t[1]=-e[1],t[2]=-e[2],t[3]=n,t}function M(t){return t[0]*t[3]-t[2]*t[1]}function T(t,e,n){var r=e[0],o=e[1],i=e[2],a=e[3],s=n[0],c=n[1],l=n[2],d=n[3];return t[0]=r*s+i*c,t[1]=o*s+a*c,t[2]=r*l+i*d,t[3]=o*l+a*d,t}function O(t,e,n){var r=e[0],o=e[1],i=e[2],a=e[3],s=Math.sin(n),c=Math.cos(n);return t[0]=r*c+i*s,t[1]=o*c+a*s,t[2]=r*-s+i*c,t[3]=o*-s+a*c,t}function D(t,e,n){var r=e[0],o=e[1],i=e[2],a=e[3],s=n[0],c=n[1];return t[0]=r*s,t[1]=o*s,t[2]=i*c,t[3]=a*c,t}function z(t,e){var n=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=n,t[2]=-n,t[3]=r,t}function P(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=e[1],t}function N(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function j(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]+t[3]*t[3])}function L(t,e,n,r){return t[2]=r[2]/r[0],n[0]=r[0],n[1]=r[1],n[3]=r[3]-t[2]*n[1],[t,e,n]}function B(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t}function U(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t}function F(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}function q(t,e){var n=t[0],r=t[1],o=t[2],i=t[3],a=e[0],s=e[1],c=e[2],l=e[3];return Math.abs(n-a)<=1e-6*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(r-s)<=1e-6*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(o-c)<=1e-6*Math.max(1,Math.abs(o),Math.abs(c))&&Math.abs(i-l)<=1e-6*Math.max(1,Math.abs(i),Math.abs(l))}function H(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t}function V(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t[3]=e[3]+n[3]*r,t}var W=T,Q=U;function Y(){var t=new b(2);return b!=Float32Array&&(t[0]=0,t[1]=0),t}function G(t){var e=new b(2);return e[0]=t[0],e[1]=t[1],e}function X(t,e){var n=new b(2);return n[0]=t,n[1]=e,n}function Z(t,e){return t[0]=e[0],t[1]=e[1],t}function K(t,e,n){return t[0]=e,t[1]=n,t}function J(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}function tt(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function et(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t}function nt(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t}function rt(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t}function ot(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t}function it(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t}function at(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t}function st(t,e){return t[0]=_(e[0]),t[1]=_(e[1]),t}function ct(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}function lt(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t}function dt(t,e){var n=e[0]-t[0],r=e[1]-t[1];return Math.sqrt(n*n+r*r)}function ut(t,e){var n=e[0]-t[0],r=e[1]-t[1];return n*n+r*r}function pt(t){var e=t[0],n=t[1];return Math.sqrt(e*e+n*n)}function ht(t){var e=t[0],n=t[1];return e*e+n*n}function ft(t,e){return t[0]=-e[0],t[1]=-e[1],t}function vt(t,e){return t[0]=1/e[0],t[1]=1/e[1],t}function gt(t,e){var n=e[0],r=e[1],o=n*n+r*r;return o>0&&(o=1/Math.sqrt(o)),t[0]=e[0]*o,t[1]=e[1]*o,t}function mt(t,e){return t[0]*e[0]+t[1]*e[1]}function yt(t,e,n){var r=e[0]*n[1]-e[1]*n[0];return t[0]=t[1]=0,t[2]=r,t}function bt(t,e,n,r){var o=e[0],i=e[1];return t[0]=o+r*(n[0]-o),t[1]=i+r*(n[1]-i),t}function xt(t,e){e=void 0===e?1:e;var n=2*x()*Math.PI;return t[0]=Math.cos(n)*e,t[1]=Math.sin(n)*e,t}function _t(t,e,n){var r=e[0],o=e[1];return t[0]=n[0]*r+n[2]*o,t[1]=n[1]*r+n[3]*o,t}function wt(t,e,n){var r=e[0],o=e[1];return t[0]=n[0]*r+n[2]*o+n[4],t[1]=n[1]*r+n[3]*o+n[5],t}function Et(t,e,n){var r=e[0],o=e[1];return t[0]=n[0]*r+n[3]*o+n[6],t[1]=n[1]*r+n[4]*o+n[7],t}function $t(t,e,n){var r=e[0],o=e[1];return t[0]=n[0]*r+n[4]*o+n[12],t[1]=n[1]*r+n[5]*o+n[13],t}function At(t,e,n,r){var o=e[0]-n[0],i=e[1]-n[1],a=Math.sin(r),s=Math.cos(r);return t[0]=o*s-i*a+n[0],t[1]=o*a+i*s+n[1],t}function St(t,e){var n=t[0],r=t[1],o=e[0],i=e[1];return Math.abs(Math.atan2(r*o-n*i,n*o+r*i))}function kt(t,e){var n=t[0],r=t[1],o=e[0],i=e[1];return Math.atan2(n*i-r*o,n*o+r*i)}function Ct(t){return t[0]=0,t[1]=0,t}function Rt(t){return"vec2("+t[0]+", "+t[1]+")"}function It(t,e){return t[0]===e[0]&&t[1]===e[1]}function Mt(t,e){var n=t[0],r=t[1],o=e[0],i=e[1];return Math.abs(n-o)<=1e-6*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(r-i)<=1e-6*Math.max(1,Math.abs(r),Math.abs(i))}var Tt,Ot=pt,Dt=tt,zt=et,Pt=nt,Nt=dt,jt=ut,Lt=ht,Bt=(Tt=Y(),function(t,e,n,r,o,i){var a,s;for(e||(e=2),n||(n=0),s=r?Math.min(r*e+n,t.length):t.length,a=n;a<s;a+=e)Tt[0]=t[a],Tt[1]=t[a+1],o(Tt,Tt,i),t[a]=Tt[0],t[a+1]=Tt[1];return t});function Ut(){var t=new b(3);return b!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function Ft(t){var e=new b(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function qt(t){var e=t[0],n=t[1],r=t[2];return Math.sqrt(e*e+n*n+r*r)}function Ht(t,e,n){var r=new b(3);return r[0]=t,r[1]=e,r[2]=n,r}function Vt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Wt(t,e,n,r){return t[0]=e,t[1]=n,t[2]=r,t}function Qt(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function Yt(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}function Gt(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t}function Xt(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t}function Zt(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}function Kt(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}function Jt(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t}function te(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t}function ee(t,e){return t[0]=_(e[0]),t[1]=_(e[1]),t[2]=_(e[2]),t}function ne(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function re(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t}function oe(t,e){var n=e[0]-t[0],r=e[1]-t[1],o=e[2]-t[2];return Math.sqrt(n*n+r*r+o*o)}function ie(t,e){var n=e[0]-t[0],r=e[1]-t[1],o=e[2]-t[2];return n*n+r*r+o*o}function ae(t){var e=t[0],n=t[1],r=t[2];return e*e+n*n+r*r}function se(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function ce(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function le(t,e){var n=e[0],r=e[1],o=e[2],i=n*n+r*r+o*o;return i>0&&(i=1/Math.sqrt(i)),t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t}function de(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function ue(t,e,n){var r=e[0],o=e[1],i=e[2],a=n[0],s=n[1],c=n[2];return t[0]=o*c-i*s,t[1]=i*a-r*c,t[2]=r*s-o*a,t}function pe(t,e,n,r){var o=e[0],i=e[1],a=e[2];return t[0]=o+r*(n[0]-o),t[1]=i+r*(n[1]-i),t[2]=a+r*(n[2]-a),t}function he(t,e,n,r){var o=Math.acos(Math.min(Math.max(de(e,n),-1),1)),i=Math.sin(o),a=Math.sin((1-r)*o)/i,s=Math.sin(r*o)/i;return t[0]=a*e[0]+s*n[0],t[1]=a*e[1]+s*n[1],t[2]=a*e[2]+s*n[2],t}function fe(t,e,n,r,o,i){var a=i*i,s=a*(2*i-3)+1,c=a*(i-2)+i,l=a*(i-1),d=a*(3-2*i);return t[0]=e[0]*s+n[0]*c+r[0]*l+o[0]*d,t[1]=e[1]*s+n[1]*c+r[1]*l+o[1]*d,t[2]=e[2]*s+n[2]*c+r[2]*l+o[2]*d,t}function ve(t,e,n,r,o,i){var a=1-i,s=a*a,c=i*i,l=s*a,d=3*i*s,u=3*c*a,p=c*i;return t[0]=e[0]*l+n[0]*d+r[0]*u+o[0]*p,t[1]=e[1]*l+n[1]*d+r[1]*u+o[1]*p,t[2]=e[2]*l+n[2]*d+r[2]*u+o[2]*p,t}function ge(t,e){e=void 0===e?1:e;var n=2*x()*Math.PI,r=2*x()-1,o=Math.sqrt(1-r*r)*e;return t[0]=Math.cos(n)*o,t[1]=Math.sin(n)*o,t[2]=r*e,t}function me(t,e,n){var r=e[0],o=e[1],i=e[2],a=n[3]*r+n[7]*o+n[11]*i+n[15];return a=a||1,t[0]=(n[0]*r+n[4]*o+n[8]*i+n[12])/a,t[1]=(n[1]*r+n[5]*o+n[9]*i+n[13])/a,t[2]=(n[2]*r+n[6]*o+n[10]*i+n[14])/a,t}function ye(t,e,n){var r=e[0],o=e[1],i=e[2];return t[0]=r*n[0]+o*n[3]+i*n[6],t[1]=r*n[1]+o*n[4]+i*n[7],t[2]=r*n[2]+o*n[5]+i*n[8],t}function be(t,e,n){var r=n[0],o=n[1],i=n[2],a=n[3],s=e[0],c=e[1],l=e[2],d=o*l-i*c,u=i*s-r*l,p=r*c-o*s;return d+=d,u+=u,p+=p,t[0]=s+a*d+o*p-i*u,t[1]=c+a*u+i*d-r*p,t[2]=l+a*p+r*u-o*d,t}function xe(t,e,n,r){var o=[],i=[];return o[0]=e[0]-n[0],o[1]=e[1]-n[1],o[2]=e[2]-n[2],i[0]=o[0],i[1]=o[1]*Math.cos(r)-o[2]*Math.sin(r),i[2]=o[1]*Math.sin(r)+o[2]*Math.cos(r),t[0]=i[0]+n[0],t[1]=i[1]+n[1],t[2]=i[2]+n[2],t}function _e(t,e,n,r){var o=[],i=[];return o[0]=e[0]-n[0],o[1]=e[1]-n[1],o[2]=e[2]-n[2],i[0]=o[2]*Math.sin(r)+o[0]*Math.cos(r),i[1]=o[1],i[2]=o[2]*Math.cos(r)-o[0]*Math.sin(r),t[0]=i[0]+n[0],t[1]=i[1]+n[1],t[2]=i[2]+n[2],t}function we(t,e,n,r){var o=[],i=[];return o[0]=e[0]-n[0],o[1]=e[1]-n[1],o[2]=e[2]-n[2],i[0]=o[0]*Math.cos(r)-o[1]*Math.sin(r),i[1]=o[0]*Math.sin(r)+o[1]*Math.cos(r),i[2]=o[2],t[0]=i[0]+n[0],t[1]=i[1]+n[1],t[2]=i[2]+n[2],t}function Ee(t,e){var n=t[0],r=t[1],o=t[2],i=e[0],a=e[1],s=e[2],c=Math.sqrt((n*n+r*r+o*o)*(i*i+a*a+s*s)),l=c&&de(t,e)/c;return Math.acos(Math.min(Math.max(l,-1),1))}function $e(t){return t[0]=0,t[1]=0,t[2]=0,t}function Ae(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function Se(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}function ke(t,e){var n=t[0],r=t[1],o=t[2],i=e[0],a=e[1],s=e[2];return Math.abs(n-i)<=1e-6*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-a)<=1e-6*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(o-s)<=1e-6*Math.max(1,Math.abs(o),Math.abs(s))}var Ce=Yt,Re=Gt,Ie=Xt,Me=oe,Te=ie,Oe=qt,De=ae,ze=function(){var t=Ut();return function(e,n,r,o,i,a){var s,c;for(n||(n=3),r||(r=0),c=o?Math.min(o*n+r,e.length):e.length,s=r;s<c;s+=n)t[0]=e[s],t[1]=e[s+1],t[2]=e[s+2],i(t,t,a),e[s]=t[0],e[s+1]=t[1],e[s+2]=t[2];return e}}(),Pe=function(t,e){t.fill(e)},Ne=function(t){for(var e=t.length,n=0;e--;)n+=t[e];return n},je=function(t,e){var n=[],r={rad:0,vec:o.clone([0,0])},i={};function a(t){i[t.id]=t,n.push(t)}function s(){var t,e=0;for(t=0;t<n.length;t++)e+=n[t].rad;r.rad=e/n.length,r.vec=o.clone([Math.cos(r.rad),Math.sin(r.rad)])}return a(t),s(),{add:function(t){i[t.id]||(a(t),s())},fits:function(t){return Math.abs(o.dot(t.point.vec,r.vec))>e},getPoints:function(){return n},getCenter:function(){return r}}},Le=function(t,e,n){return{rad:t[n],point:t,id:e}};function Be(t,e){return{x:t,y:e,toVec2:function(){return o.clone([this.x,this.y])},toVec3:function(){return i.clone([this.x,this.y,1])},round:function(){return this.x=this.x>0?Math.floor(this.x+.5):Math.floor(this.x-.5),this.y=this.y>0?Math.floor(this.y+.5):Math.floor(this.y-.5),this}}}function Ue(t,e){var n=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,r=8-n;function o(t,n){for(var r=0,o=t;o<=n;o++)r+=e[o];return r}function i(t,n){for(var r=0,o=t;o<=n;o++)r+=o*e[o];return r}return function(){var r,a,s,c,l=[0],d=(1<<n)-1;e=function(t,e){e||(e=8);for(var n=t.data,r=n.length,o=8-e,i=new Int32Array(1<<e);r--;)i[n[r]>>o]++;return i}(t,n);for(var u=1;u<d;u++)0===(s=(r=o(0,u))*(a=o(u+1,d)))&&(s=1),c=i(0,u)*a-i(u+1,d)*r,l[u]=c*c/s;return function(t){for(var e=0,n=0;n<t.length;n++)t[n]>t[e]&&(e=n);return e}(l)}()<<r}(t);return function(t,e,n){n||(n=t);for(var r=t.data,o=r.length,i=n.data;o--;)i[o]=r[o]<e?1:0}(t,n,e),n}function Fe(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0],n=t[0],r=t[1],o=t[2],i=o*r,a=i*(1-Math.abs(n/60%2-1)),s=o-i,c=0,l=0,d=0;return n<60?(c=i,l=a):n<120?(c=a,l=i):n<180?(l=i,d=a):n<240?(l=a,d=i):n<300?(c=a,d=i):n<360&&(c=i,d=a),e[0]=255*(c+s)|0,e[1]=255*(l+s)|0,e[2]=255*(d+s)|0,e}function qe(t){if(!Number.isFinite(t)||t<1)return[];for(var e=[],n=[],r=Math.sqrt(t),o=1;o<=r;o++)t%o==0&&(n.push(o),o!==t/o&&e.unshift(Math.floor(t/o)));return n.concat(e)}function He(t,e){var n,r=qe(e.x),o=qe(e.y),i=Math.max(e.x,e.y),a=function(t,e){for(var n=0,r=0,o=[];n<t.length&&r<e.length;)t[n]===e[r]?(o.push(t[n]),n++,r++):t[n]>e[r]?r++:n++;return o}(r,o),s=[8,10,15,20,32,60,80],c={"x-small":5,small:4,medium:3,large:2,"x-large":1},l=c[t]||c.medium,d=s[l],u=Math.floor(i/d);function p(t){for(var e=0,n=t[Math.floor(t.length/2)];e<t.length-1&&t[e]<u;)e++;return e>0&&(n=Math.abs(t[e]-u)>Math.abs(t[e-1]-u)?t[e-1]:t[e]),u/n<s[l+1]/s[l]&&u/n>s[l-1]/s[l]?{x:n,y:n}:null}return(n=p(a))||(n=p(qe(i)))||(n=p(qe(u*d))),n||(n={x:Math.max(1,e.x),y:Math.max(1,e.y)}),n}var Ve={top:function(t,e){return"%"===t.unit?Math.floor(e.height*(t.value/100)):null},right:function(t,e){return"%"===t.unit?Math.floor(e.width-e.width*(t.value/100)):null},bottom:function(t,e){return"%"===t.unit?Math.floor(e.height-e.height*(t.value/100)):null},left:function(t,e){return"%"===t.unit?Math.floor(e.width*(t.value/100)):null}};function We(t){if(t<0)throw new Error("expected positive number, received ".concat(t))}var Qe=g()(function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Uint8Array,o=arguments.length>3?arguments[3]:void 0;f()(this,t),y()(this,"data",void 0),y()(this,"size",void 0),y()(this,"indexMapping",void 0),n?this.data=n:(this.data=new r(e.x*e.y),o&&Pe(this.data,0)),this.size=e},[{key:"inImageWithBorder",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return We(e),t.x>=0&&t.y>=0&&t.x<this.size.x+2*e&&t.y<this.size.y+2*e}},{key:"subImageAsCopy",value:function(t,e){We(e.x),We(e.y);for(var n=t.size,r=n.x,o=n.y,i=0;i<r;i++)for(var a=0;a<o;a++)t.data[a*r+i]=this.data[(e.y+a)*this.size.x+e.x+i];return t}},{key:"get",value:function(t,e){return this.data[e*this.size.x+t]}},{key:"getSafe",value:function(t,e){if(!this.indexMapping){this.indexMapping={x:[],y:[]};for(var n=0;n<this.size.x;n++)this.indexMapping.x[n]=n,this.indexMapping.x[n+this.size.x]=n;for(var r=0;r<this.size.y;r++)this.indexMapping.y[r]=r,this.indexMapping.y[r+this.size.y]=r}return this.data[this.indexMapping.y[e+this.size.y]*this.size.x+this.indexMapping.x[t+this.size.x]]}},{key:"set",value:function(t,e,n){return this.data[e*this.size.x+t]=n,delete this.indexMapping,this}},{key:"zeroBorder",value:function(){for(var t=this.size,e=t.x,n=t.y,r=0;r<e;r++)this.data[r]=this.data[(n-1)*e+r]=0;for(var o=1;o<n-1;o++)this.data[o*e]=this.data[o*e+(e-1)]=0;return delete this.indexMapping,this}},{key:"moments",value:function(t){var e,n,r,i,a,s,c,l,d,u,p=this.data,h=this.size.y,f=this.size.x,v=[],g=[],m=Math.PI,y=m/4;if(t<=0)return g;for(a=0;a<t;a++)v[a]={m00:0,m01:0,m10:0,m11:0,m02:0,m20:0,theta:0,rad:0};for(n=0;n<h;n++)for(i=n*n,e=0;e<f;e++)(r=p[n*f+e])>0&&((s=v[r-1]).m00+=1,s.m01+=n,s.m10+=e,s.m11+=e*n,s.m02+=i,s.m20+=e*e);for(a=0;a<t;a++)s=v[a],isNaN(s.m00)||0===s.m00||(l=s.m10/s.m00,d=s.m01/s.m00,c=s.m11/s.m00-l*d,u=(s.m02/s.m00-d*d-(s.m20/s.m00-l*l))/(2*c),u=.5*Math.atan(u)+(c>=0?y:-y)+m,s.theta=(180*u/m+90)%180-90,s.theta<0&&(s.theta+=180),s.rad=u>m?u-m:u,s.vec=o.clone([Math.cos(u),Math.sin(u)]),g.push(s));return g}},{key:"getAsRGBA",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=new Uint8ClampedArray(4*this.size.x*this.size.y),n=0;n<this.size.y;n++)for(var r=0;r<this.size.x;r++){var o=n*this.size.x+r,i=this.get(r,n)*t;e[4*o+0]=i,e[4*o+1]=i,e[4*o+2]=i,e[4*o+3]=255}return e}},{key:"show",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;console.warn("* imagewrapper show getcontext 2d");var n=t.getContext("2d");if(!n)throw new Error("Unable to get canvas context");var r=n.getImageData(0,0,t.width,t.height),o=this.getAsRGBA(e);t.width=this.size.x,t.height=this.size.y;var i=new ImageData(o,r.width,r.height);n.putImageData(i,0,0)}},{key:"overlay",value:function(t,e,n){var r=e<0||e>360?360:e,o=[0,1,1],i=[0,0,0],a=[255,255,255],s=[0,0,0];console.warn("* imagewrapper overlay getcontext 2d");var c=t.getContext("2d");if(!c)throw new Error("Unable to get canvas context");for(var l=c.getImageData(n.x,n.y,this.size.x,this.size.y),d=l.data,u=this.data.length;u--;){o[0]=this.data[u]*r;var h=4*u,f=o[0]<=0?a:o[0]>=360?s:Fe(o,i),v=p()(f,3);d[h]=v[0],d[h+1]=v[1],d[h+2]=v[2],d[h+3]=255}c.putImageData(l,n.x,n.y)}}]),Ye=n(7),Ge=n.n(Ye),Xe=n(6),Ze=n.n(Xe),Ke={drawRect:function(t,e,n,r){n.strokeStyle=r.color,n.fillStyle=r.color,n.lineWidth=r.lineWidth||1,n.beginPath(),n.strokeRect(t.x,t.y,e.x,e.y)},drawPath:function(t,e,n,r){n.strokeStyle=r.color,n.fillStyle=r.color,n.lineWidth=r.lineWidth,n.beginPath(),n.moveTo(t[0][e.x],t[0][e.y]);for(var o=1;o<t.length;o++)n.lineTo(t[o][e.x],t[o][e.y]);n.closePath(),n.stroke()},drawImage:function(t,e,n){var r=n.getImageData(0,0,e.x,e.y),o=r.data,i=o.length,a=t.length;if(i/a!=4)return!1;for(;a--;){var s=t[a];o[--i]=255,o[--i]=s,o[--i]=s,o[--i]=s}return n.putImageData(r,0,0),!0}},Je=n(4),tn=n.n(Je),en=n(1),nn=n.n(en),rn=n(5),on=n.n(rn),an=function(t){return t[t.Forward=1]="Forward",t[t.Reverse=-1]="Reverse",t}({}),sn=g()(function t(e,n){f()(this,t),y()(this,"_row",[]),y()(this,"config",{}),y()(this,"supplements",[]),y()(this,"SINGLE_CODE_ERROR",0),y()(this,"FORMAT","unknown"),y()(this,"CONFIG_KEYS",{}),this._row=[],this.config=e||{},n&&(this.supplements=n)},[{key:"_nextUnset",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e<t.length;e++)if(!t[e])return e;return t.length}},{key:"_matchPattern",value:function(t,e){for(var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.SINGLE_CODE_ERROR||1,o=0,i=0,a=0,s=0,c=0,l=0,d=0;d<t.length;d++)a+=t[d],s+=e[d];if(a<s)return Number.MAX_VALUE;r*=n=a/s;for(var u=0;u<t.length;u++){if(c=t[u],l=e[u]*n,(i=Math.abs(c-l)/l)>r)return Number.MAX_VALUE;o+=i}return o/s}},{key:"_nextSet",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e<t.length;e++)if(t[e])return e;return t.length}},{key:"_correctBars",value:function(t,e,n){for(var r=n.length,o=0;r--;)(o=t[n[r]]*(1-(1-e)/2))>1&&(t[n[r]]=o)}},{key:"decodePattern",value:function(t){this._row=t;var e=this.decode();return null===e?(this._row.reverse(),(e=this.decode())&&(e.direction=an.Reverse,e.start=this._row.length-e.start,e.end=this._row.length-e.end)):e.direction=an.Forward,e&&(e.format=this.FORMAT),e}},{key:"_matchRange",value:function(t,e,n){var r;for(r=t=t<0?0:t;r<e;r++)if(this._row[r]!==n)return!1;return!0}},{key:"_fillCounters",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._nextUnset(this._row),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._row.length,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=[],o=0;r[o]=0;for(var i=t;i<e;i++)this._row[i]^(n?1:0)?r[o]++:(r[++o]=1,n=!n);return r}},{key:"_toCounters",value:function(t,e){var n=e.length,r=this._row.length,o=!this._row[t],i=0;Pe(e,0);for(var a=t;a<r;a++)if(this._row[a]^(o?1:0))e[i]++;else{if(++i===n)break;e[i]=1,o=!o}return e}},{key:"decodeImage",value:function(t){return null}}],[{key:"Exception",get:function(){return{StartNotFoundException:"Start-Info was not found!",CodeNotFoundException:"Code could not be found!",PatternNotFoundException:"Pattern could not be found!"}}}]);y()(sn,"adjacentLineValidationMatches",0);var cn=sn;var ln=[3,1,3,1,1,1],dn=[3,1,1,1,3],un=[[1,1,3,3,1],[3,1,1,1,3],[1,3,1,1,3],[3,3,1,1,1],[1,1,3,1,3],[3,1,3,1,1],[1,3,3,1,1],[1,1,1,3,3],[3,1,1,3,1],[1,3,1,3,1]],pn=ln.reduce(function(t,e){return t+e},0),hn=function(t){function e(){var t;f()(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=function(t,e,n){return e=nn()(e),tn()(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return!!t}()?Reflect.construct(e,n||[],nn()(t).constructor):e.apply(t,n))}(this,e,[].concat(r)),y()(t,"barSpaceRatio",[1,1]),y()(t,"FORMAT","2of5"),y()(t,"SINGLE_CODE_ERROR",.78),y()(t,"AVG_CODE_ERROR",.3),t}return on()(e,t),g()(e,[{key:"_findPattern",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=[],i=0,a={error:Number.MAX_VALUE,code:-1,start:0,end:0},s=0,c=0,l=this.AVG_CODE_ERROR;e||(e=this._nextSet(this._row));for(var d=0;d<t.length;d++)o[d]=0;for(var u=e;u<this._row.length;u++)if(this._row[u]^(n?1:0))o[i]++;else{if(i===o.length-1){s=0;for(var p=0;p<o.length;p++)s+=o[p];if((c=this._matchPattern(o,t))<l)return a.error=c,a.start=u-s,a.end=u,a;if(!r)return null;for(var h=0;h<o.length-2;h++)o[h]=o[h+2];o[o.length-2]=0,o[o.length-1]=0,i--}else i++;o[i]=1,n=!n}return null}},{key:"_findStart",value:function(){for(var t=null,e=this._nextSet(this._row),n=1,r=0;!t;){if(!(t=this._findPattern(ln,e,!1,!0)))return null;if(n=Math.floor((t.end-t.start)/pn),(r=t.start-5*n)>=0&&this._matchRange(r,t.start,0))return t;e=t.end,t=null}return t}},{key:"_verifyTrailingWhitespace",value:function(t){var e=t.end+(t.end-t.start)/2;return e<this._row.length&&this._matchRange(t.end,e,0)?t:null}},{key:"_findEnd",value:function(){this._row.reverse();var t=this._nextSet(this._row),e=this._findPattern(dn,t,!1,!0);if(this._row.reverse(),null===e)return null;var n=e.start;return e.start=this._row.length-e.end,e.end=this._row.length-n,null!==e?this._verifyTrailingWhitespace(e):null}},{key:"_verifyCounterLength",value:function(t){return t.length%10==0}},{key:"_decodeCode",value:function(t){for(var e=this.AVG_CODE_ERROR,n={error:Number.MAX_VALUE,code:-1,start:0,end:0},r=0;r<un.length;r++){var o=this._matchPattern(t,un[r]);o<n.error&&(n.code=r,n.error=o)}return n.error<e?n:null}},{key:"_decodePayload",value:function(t,e,n){for(var r=0,o=t.length,i=[0,0,0,0,0],a=null;r<o;){for(var s=0;s<5;s++)i[s]=t[r]*this.barSpaceRatio[0],r+=2;if(!(a=this._decodeCode(i)))return null;e.push("".concat(a.code)),n.push(a)}return a}},{key:"decode",value:function(t,e){var n=this._findStart();if(!n)return null;var r=this._findEnd();if(!r)return null;var o=this._fillCounters(n.end,r.start,!1);if(!this._verifyCounterLength(o))return null;var i=[];i.push(n);var a=[];return this._decodePayload(o,a,i)?a.length<5?null:(i.push(r),{code:a.join(""),start:n.start,end:r.end,startInfo:n,decodedCodes:i,format:this.FORMAT}):null}}])}(cn);var fn=[48,49,50,51,52,53,54,55,56,57,45,36,58,47,46,43,65,66,67,68],vn=[3,6,9,96,18,66,33,36,48,72,12,24,69,81,84,21,26,41,11,14],gn=[26,41,11,14],mn=function(t){function e(){var t;f()(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=function(t,e,n){return e=nn()(e),tn()(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return!!t}()?Reflect.construct(e,n||[],nn()(t).constructor):e.apply(t,n))}(this,e,[].concat(r)),y()(t,"_counters",[]),y()(t,"FORMAT","codabar"),t}return on()(e,t),g()(e,[{key:"_computeAlternatingThreshold",value:function(t,e){for(var n=Number.MAX_VALUE,r=0,o=0,i=t;i<e;i+=2)(o=this._counters[i])>r&&(r=o),o<n&&(n=o);return(n+r)/2|0}},{key:"_toPattern",value:function(t){var e=t+7;if(e>this._counters.length)return-1;for(var n=this._computeAlternatingThreshold(t,e),r=this._computeAlternatingThreshold(t+1,e),o=64,i=0,a=0,s=0;s<7;s++)i=1&s?r:n,this._counters[t+s]>i&&(a|=o),o>>=1;return a}},{key:"_isStartEnd",value:function(t){for(var e=0;e<gn.length;e++)if(gn[e]===t)return!0;return!1}},{key:"_sumCounters",value:function(t,e){for(var n=0,r=t;r<e;r++)n+=this._counters[r];return n}},{key:"_findStart",value:function(){for(var t=this._nextUnset(this._row),e=1;e<this._counters.length;e++){var n=this._toPattern(e);if(-1!==n&&this._isStartEnd(n))return{start:t+=this._sumCounters(0,e),end:t+this._sumCounters(e,e+8),startCounter:e,endCounter:e+8}}return null}},{key:"_patternToChar",value:function(t){for(var e=0;e<vn.length;e++)if(vn[e]===t)return String.fromCharCode(fn[e]);return null}},{key:"_calculatePatternLength",value:function(t){for(var e=0,n=t;n<t+7;n++)e+=this._counters[n];return e}},{key:"_verifyWhitespace",value:function(t,e){return(t-1<=0||this._counters[t-1]>=this._calculatePatternLength(t)/2)&&(e+8>=this._counters.length||this._counters[e+7]>=this._calculatePatternLength(e)/2)}},{key:"_charToPattern",value:function(t){for(var e=t.charCodeAt(0),n=0;n<fn.length;n++)if(fn[n]===e)return vn[n];return 0}},{key:"_thresholdResultPattern",value:function(t,e){for(var n,r={space:{narrow:{size:0,counts:0,min:0,max:Number.MAX_VALUE},wide:{size:0,counts:0,min:0,max:Number.MAX_VALUE}},bar:{narrow:{size:0,counts:0,min:0,max:Number.MAX_VALUE},wide:{size:0,counts:0,min:0,max:Number.MAX_VALUE}}},o=e,i=0;i<t.length;i++){n=this._charToPattern(t[i]);for(var a=6;a>=0;a--){var s=2==(1&a)?r.bar:r.space,c=1&~n?s.narrow:s.wide;c.size+=this._counters[o+a],c.counts++,n>>=1}o+=8}return["space","bar"].forEach(function(t){var e=r[t];e.wide.min=Math.floor((e.narrow.size/e.narrow.counts+e.wide.size/e.wide.counts)/2),e.narrow.max=Math.ceil(e.wide.min),e.wide.max=Math.ceil((2*e.wide.size+1.5)/e.wide.counts)}),r}},{key:"_validateResult",value:function(t,e){for(var n,r=this._thresholdResultPattern(t,e),o=e,i=0;i<t.length;i++){n=this._charToPattern(t[i]);for(var a=6;a>=0;a--){var s=1&a?r.space:r.bar,c=1&~n?s.narrow:s.wide,l=this._counters[o+a];if(l<c.min||l>c.max)return!1;n>>=1}o+=8}return!0}},{key:"decode",value:function(t,e){if(this._counters=this._fillCounters(),!(e=this._findStart()))return null;var n,r=e.startCounter,o=[];do{if((n=this._toPattern(r))<0)return null;var i=this._patternToChar(n);if(null===i)return null;if(o.push(i),r+=8,o.length>1&&this._isStartEnd(n))break}while(r<this._counters.length);if(o.length-2<4||!this._isStartEnd(n))return null;if(!this._verifyWhitespace(e.startCounter,r-8))return null;if(!this._validateResult(o,e.startCounter))return null;r=r>this._counters.length?this._counters.length:r;var a=e.start+this._sumCounters(e.startCounter,r-8);return{code:o.join(""),start:e.start,end:a,startInfo:e,decodedCodes:o,format:this.FORMAT}}}])}(cn);var yn=function(t){function e(){var t;f()(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=function(t,e,n){return e=nn()(e),tn()(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return!!t}()?Reflect.construct(e,n||[],nn()(t).constructor):e.apply(t,n))}(this,e,[].concat(r)),y()(t,"CODE_SHIFT",98),y()(t,"CODE_C",99),y()(t,"CODE_B",100),y()(t,"CODE_A",101),y()(t,"FNC1",102),y()(t,"START_CODE_A",103),y()(t,"START_CODE_B",104),y()(t,"START_CODE_C",105),y()(t,"STOP_CODE",106),y()(t,"FNC1_CHAR",String.fromCharCode(29)),y()(t,"CODE_PATTERN",[[2,1,2,2,2,2],[2,2,2,1,2,2],[2,2,2,2,2,1],[1,2,1,2,2,3],[1,2,1,3,2,2],[1,3,1,2,2,2],[1,2,2,2,1,3],[1,2,2,3,1,2],[1,3,2,2,1,2],[2,2,1,2,1,3],[2,2,1,3,1,2],[2,3,1,2,1,2],[1,1,2,2,3,2],[1,2,2,1,3,2],[1,2,2,2,3,1],[1,1,3,2,2,2],[1,2,3,1,2,2],[1,2,3,2,2,1],[2,2,3,2,1,1],[2,2,1,1,3,2],[2,2,1,2,3,1],[2,1,3,2,1,2],[2,2,3,1,1,2],[3,1,2,1,3,1],[3,1,1,2,2,2],[3,2,1,1,2,2],[3,2,1,2,2,1],[3,1,2,2,1,2],[3,2,2,1,1,2],[3,2,2,2,1,1],[2,1,2,1,2,3],[2,1,2,3,2,1],[2,3,2,1,2,1],[1,1,1,3,2,3],[1,3,1,1,2,3],[1,3,1,3,2,1],[1,1,2,3,1,3],[1,3,2,1,1,3],[1,3,2,3,1,1],[2,1,1,3,1,3],[2,3,1,1,1,3],[2,3,1,3,1,1],[1,1,2,1,3,3],[1,1,2,3,3,1],[1,3,2,1,3,1],[1,1,3,1,2,3],[1,1,3,3,2,1],[1,3,3,1,2,1],[3,1,3,1,2,1],[2,1,1,3,3,1],[2,3,1,1,3,1],[2,1,3,1,1,3],[2,1,3,3,1,1],[2,1,3,1,3,1],[3,1,1,1,2,3],[3,1,1,3,2,1],[3,3,1,1,2,1],[3,1,2,1,1,3],[3,1,2,3,1,1],[3,3,2,1,1,1],[3,1,4,1,1,1],[2,2,1,4,1,1],[4,3,1,1,1,1],[1,1,1,2,2,4],[1,1,1,4,2,2],[1,2,1,1,2,4],[1,2,1,4,2,1],[1,4,1,1,2,2],[1,4,1,2,2,1],[1,1,2,2,1,4],[1,1,2,4,1,2],[1,2,2,1,1,4],[1,2,2,4,1,1],[1,4,2,1,1,2],[1,4,2,2,1,1],[2,4,1,2,1,1],[2,2,1,1,1,4],[4,1,3,1,1,1],[2,4,1,1,1,2],[1,3,4,1,1,1],[1,1,1,2,4,2],[1,2,1,1,4,2],[1,2,1,2,4,1],[1,1,4,2,1,2],[1,2,4,1,1,2],[1,2,4,2,1,1],[4,1,1,2,1,2],[4,2,1,1,1,2],[4,2,1,2,1,1],[2,1,2,1,4,1],[2,1,4,1,2,1],[4,1,2,1,2,1],[1,1,1,1,4,3],[1,1,1,3,4,1],[1,3,1,1,4,1],[1,1,4,1,1,3],[1,1,4,3,1,1],[4,1,1,1,1,3],[4,1,1,3,1,1],[1,1,3,1,4,1],[1,1,4,1,3,1],[3,1,1,1,4,1],[4,1,1,1,3,1],[2,1,1,4,1,2],[2,1,1,2,1,4],[2,1,1,2,3,2],[2,3,3,1,1,1,2]]),y()(t,"SINGLE_CODE_ERROR",.64),y()(t,"AVG_CODE_ERROR",.3),y()(t,"FORMAT","code_128"),y()(t,"MODULE_INDICES",{bar:[0,2,4],space:[1,3,5]}),t}return on()(e,t),g()(e,[{key:"_decodeCode",value:function(t,e){for(var n={error:Number.MAX_VALUE,code:-1,start:t,end:t,correction:{bar:1,space:1}},r=[0,0,0,0,0,0],o=t,i=!this._row[o],a=0,s=o;s<this._row.length;s++)if(this._row[s]^(i?1:0))r[a]++;else{if(a===r.length-1){e&&this._correct(r,e);for(var c=0;c<this.CODE_PATTERN.length;c++){var l=this._matchPattern(r,this.CODE_PATTERN[c]);l<n.error&&(n.code=c,n.error=l)}return n.end=s,-1===n.code||n.error>this.AVG_CODE_ERROR?null:(this.CODE_PATTERN[n.code]&&(n.correction.bar=this.calculateCorrection(this.CODE_PATTERN[n.code],r,this.MODULE_INDICES.bar),n.correction.space=this.calculateCorrection(this.CODE_PATTERN[n.code],r,this.MODULE_INDICES.space)),n)}r[++a]=1,i=!i}return null}},{key:"_correct",value:function(t,e){this._correctBars(t,e.bar,this.MODULE_INDICES.bar),this._correctBars(t,e.space,this.MODULE_INDICES.space)}},{key:"_findStart",value:function(){for(var t=[0,0,0,0,0,0],e=this._nextSet(this._row),n={error:Number.MAX_VALUE,code:-1,start:0,end:0,correction:{bar:1,space:1}},r=!1,o=0,i=e;i<this._row.length;i++)if(this._row[i]^(r?1:0))t[o]++;else{if(o===t.length-1){for(var a=t.reduce(function(t,e){return t+e},0),s=this.START_CODE_A;s<=this.START_CODE_C;s++){var c=this._matchPattern(t,this.CODE_PATTERN[s]);c<n.error&&(n.code=s,n.error=c)}if(n.error<this.AVG_CODE_ERROR)return n.start=i-a,n.end=i,n.correction.bar=this.calculateCorrection(this.CODE_PATTERN[n.code],t,this.MODULE_INDICES.bar),n.correction.space=this.calculateCorrection(this.CODE_PATTERN[n.code],t,this.MODULE_INDICES.space),n;for(var l=0;l<4;l++)t[l]=t[l+2];t[4]=0,t[5]=0,o--}else o++;t[o]=1,r=!r}return null}},{key:"decode",value:function(t,e){var n=this,r=this._findStart();if(null===r)return null;var o={code:r.code,start:r.start,end:r.end,correction:{bar:r.correction.bar,space:r.correction.space}},i=[];i.push(o);for(var a=o.code,s=function(t){switch(t){case n.START_CODE_A:return n.CODE_A;case n.START_CODE_B:return n.CODE_B;case n.START_CODE_C:return n.CODE_C;default:return null}}(o.code),c=!1,l=!1,d=l,u=!0,p=0,h=[],f=[];!c;){if(d=l,l=!1,null!==(o=this._decodeCode(o.end,o.correction)))switch(o.code!==this.STOP_CODE&&(u=!0),o.code!==this.STOP_CODE&&(h.push(o.code),a+=++p*o.code),i.push(o),s){case this.CODE_A:if(o.code<64)f.push(String.fromCharCode(32+o.code));else if(o.code<96)f.push(String.fromCharCode(o.code-64));else switch(o.code!==this.STOP_CODE&&(u=!1),o.code){case this.CODE_SHIFT:l=!0,s=this.CODE_B;break;case this.CODE_B:s=this.CODE_B;break;case this.CODE_C:s=this.CODE_C;break;case this.FNC1:f.push(this.FNC1_CHAR);break;case this.STOP_CODE:c=!0}break;case this.CODE_B:if(o.code<96)f.push(String.fromCharCode(32+o.code));else switch(o.code!==this.STOP_CODE&&(u=!1),o.code){case this.CODE_SHIFT:l=!0,s=this.CODE_A;break;case this.CODE_A:s=this.CODE_A;break;case this.CODE_C:s=this.CODE_C;break;case this.FNC1:f.push(this.FNC1_CHAR);break;case this.STOP_CODE:c=!0}break;case this.CODE_C:if(o.code<100)f.push(o.code<10?"0"+o.code:o.code);else switch(o.code!==this.STOP_CODE&&(u=!1),o.code){case this.CODE_A:s=this.CODE_A;break;case this.CODE_B:s=this.CODE_B;break;case this.FNC1:f.push(this.FNC1_CHAR);break;case this.STOP_CODE:c=!0}}else c=!0;d&&(s=s===this.CODE_A?this.CODE_B:this.CODE_A)}return null===o?null:(o.end=this._nextUnset(this._row,o.end),this._verifyTrailingWhitespace(o)?(a-=p*h[h.length-1])%103!==h[h.length-1]?null:f.length?(u&&f.splice(f.length-1,1),{code:f.join(""),start:r.start,end:o.end,codeset:s,startInfo:r,decodedCodes:i,endInfo:o,format:this.FORMAT}):null:null)}},{key:"_verifyTrailingWhitespace",value:function(t){var e;return(e=t.end+(t.end-t.start)/2)<this._row.length&&this._matchRange(t.end,e,0)?t:null}},{key:"calculateCorrection",value:function(t,e,n){for(var r=n.length,o=0,i=0;r--;)i+=t[n[r]],o+=e[n[r]];return i/o}}])}(cn),bn=n(13),xn=n.n(bn),_n=n(16),wn=n.n(_n);var En=new Uint16Array(wn()("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%").map(function(t){return t.charCodeAt(0)})),$n=new Uint16Array([52,289,97,352,49,304,112,37,292,100,265,73,328,25,280,88,13,268,76,28,259,67,322,19,274,82,7,262,70,22,385,193,448,145,400,208,133,388,196,148,168,162,138,42]),An=function(t){function e(){var t;f()(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=function(t,e,n){return e=nn()(e),tn()(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return!!t}()?Reflect.construct(e,n||[],nn()(t).constructor):e.apply(t,n))}(this,e,[].concat(r)),y()(t,"FORMAT","code_39"),t}return on()(e,t),g()(e,[{key:"_findStart",value:function(){for(var t=this._nextSet(this._row),e=t,n=new Uint16Array([0,0,0,0,0,0,0,0,0]),r=0,o=!1,i=t;i<this._row.length;i++)if(this._row[i]^(o?1:0))n[r]++;else{if(r===n.length-1){if(148===this._toPattern(n)){var a=Math.floor(Math.max(0,e-(i-e)/4));if(this._matchRange(a,e,0))return{start:e,end:i}}e+=n[0]+n[1];for(var s=0;s<7;s++)n[s]=n[s+2];n[7]=0,n[8]=0,r--}else r++;n[r]=1,o=!o}return null}},{key:"_toPattern",value:function(t){for(var e=t.length,n=0,r=e,o=0;r>3;){n=this._findNextWidth(t,n),r=0;for(var i=0,a=0;a<e;a++)t[a]>n&&(i|=1<<e-1-a,r++,o+=t[a]);if(3===r){for(var s=0;s<e&&r>0;s++)if(t[s]>n&&(r--,2*t[s]>=o))return-1;return i}}return-1}},{key:"_findNextWidth",value:function(t,e){for(var n=Number.MAX_VALUE,r=0;r<t.length;r++)t[r]<n&&t[r]>e&&(n=t[r]);return n}},{key:"_patternToChar",value:function(t){for(var e=0;e<$n.length;e++)if($n[e]===t)return String.fromCharCode(En[e]);return null}},{key:"_verifyTrailingWhitespace",value:function(t,e,n){var r=Ne(n);return 3*(e-t-r)>=r}},{key:"decode",value:function(){var t=new Uint16Array([0,0,0,0,0,0,0,0,0]),e=[],n=this._findStart();if(!n)return null;var r,o,i=this._nextSet(this._row,n.end);do{t=this._toCounters(i,t);var a=this._toPattern(t);if(a<0)return null;if(null===(r=this._patternToChar(a)))return null;e.push(r),o=i,i+=Ne(t),i=this._nextSet(this._row,i)}while("*"!==r);return e.pop(),e.length&&this._verifyTrailingWhitespace(o,i,t)?{code:e.join(""),start:n.start,end:i,startInfo:n,decodedCodes:e,format:this.FORMAT}:null}}])}(cn);var Sn=/[AEIO]/g,kn=function(t){function e(){var t;f()(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=function(t,e,n){return e=nn()(e),tn()(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return!!t}()?Reflect.construct(e,n||[],nn()(t).constructor):e.apply(t,n))}(this,e,[].concat(r)),y()(t,"FORMAT","code_32_reader"),t}return on()(e,t),g()(e,[{key:"_decodeCode32",value:function(t){if(/[^0-9BCDFGHJKLMNPQRSTUVWXYZ]/.test(t))return null;for(var e=0,n=0;n<t.length;n++)e=32*e+"0123456789BCDFGHJKLMNPQRSTUVWXYZ".indexOf(t[n]);var r="".concat(e);return r.length<9&&(r=("000000000"+r).slice(-9)),"A"+r}},{key:"_checkChecksum",value:function(t){return!!t}},{key:"decode",value:function(){var t,n,r,o=(t=e,n=this,"function"==typeof(r=xn()(nn()(t.prototype),"decode",n))?function(t){return r.apply(n,t)}:r)([]);if(!o)return null;var i=o.code;if(!i)return null;if(i=i.replace(Sn,""),!this._checkChecksum(i))return null;var a=this._decodeCode32(i);return a?(o.code=a,o):null}}])}(An);var Cn=/[IOQ]/g,Rn=/[A-Z0-9]{17}/,In=function(t){function e(){var t;f()(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=function(t,e,n){return e=nn()(e),tn()(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return!!t}()?Reflect.construct(e,n||[],nn()(t).constructor):e.apply(t,n))}(this,e,[].concat(r)),y()(t,"FORMAT","code_39_vin"),t}return on()(e,t),g()(e,[{key:"_checkChecksum",value:function(t){return!!t}},{key:"decode",value:function(){var t,n,r,o=(t=e,n=this,"function"==typeof(r=xn()(nn()(t.prototype),"decode",n))?function(t){return r.apply(n,t)}:r)([]);if(!o)return null;var i=o.code;return i&&(i=i.replace(Cn,"")).match(Rn)&&this._checkChecksum(i)?(o.code=i,o):null}}])}(An);var Mn=new Uint16Array(wn()("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*").map(function(t){return t.charCodeAt(0)})),Tn=new Uint16Array([276,328,324,322,296,292,290,336,274,266,424,420,418,404,402,394,360,356,354,308,282,344,332,326,300,278,436,434,428,422,406,410,364,358,310,314,302,468,466,458,366,374,430,294,474,470,306,350]),On=function(t){function e(){var t;f()(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=function(t,e,n){return e=nn()(e),tn()(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return!!t}()?Reflect.construct(e,n||[],nn()(t).constructor):e.apply(t,n))}(this,e,[].concat(r)),y()(t,"FORMAT","code_93"),t}return on()(e,t),g()(e,[{key:"_patternToChar",value:function(t){for(var e=0;e<Tn.length;e++)if(Tn[e]===t)return String.fromCharCode(Mn[e]);return null}},{key:"_toPattern",value:function(t){for(var e=t.length,n=t.reduce(function(t,e){return t+e},0),r=0,o=0;o<e;o++){var i=Math.round(9*t[o]/n);if(i<1||i>4)return-1;if(1&o)r<<=i;else for(var a=0;a<i;a++)r=r<<1|1}return r}},{key:"_findStart",value:function(){for(var t=this._nextSet(this._row),e=t,n=new Uint16Array([0,0,0,0,0,0]),r=0,o=!1,i=t;i<this._row.length;i++)if(this._row[i]^(o?1:0))n[r]++;else{if(r===n.length-1){if(350===this._toPattern(n)){var a=Math.floor(Math.max(0,e-(i-e)/4));if(this._matchRange(a,e,0))return{start:e,end:i}}e+=n[0]+n[1];for(var s=0;s<4;s++)n[s]=n[s+2];n[4]=0,n[5]=0,r--}else r++;n[r]=1,o=!o}return null}},{key:"_verifyEnd",value:function(t,e){return!(t===e||!this._row[e])}},{key:"_decodeExtended",value:function(t){for(var e=t.length,n=[],r=0;r<e;r++){var o=t[r];if(o>="a"&&o<="d"){if(r>e-2)return null;var i=t[++r],a=i.charCodeAt(0),s=void 0;switch(o){case"a":if(!(i>="A"&&i<="Z"))return null;s=String.fromCharCode(a-64);break;case"b":if(i>="A"&&i<="E")s=String.fromCharCode(a-38);else if(i>="F"&&i<="J")s=String.fromCharCode(a-11);else if(i>="K"&&i<="O")s=String.fromCharCode(a+16);else if(i>="P"&&i<="S")s=String.fromCharCode(a+43);else{if(!(i>="T"&&i<="Z"))return null;s=String.fromCharCode(127)}break;case"c":if(i>="A"&&i<="O")s=String.fromCharCode(a-32);else{if("Z"!==i)return null;s=":"}break;case"d":if(!(i>="A"&&i<="Z"))return null;s=String.fromCharCode(a+32);break;default:return console.warn("* code_93_reader _decodeExtended hit default case, this may be an error",s),null}n.push(s)}else n.push(o)}return n}},{key:"_matchCheckChar",value:function(t,e,n){var r=t.slice(0,e),o=r.length;return Mn[r.reduce(function(t,e,r){return t+((-1*r+(o-1))%n+1)*Mn.indexOf(e.charCodeAt(0))},0)%47]===t[e].charCodeAt(0)}},{key:"_verifyChecksums",value:function(t){return this._matchCheckChar(t,t.length-2,20)&&this._matchCheckChar(t,t.length-1,15)}},{key:"decode",value:function(t,e){if(!(e=this._findStart()))return null;var n,r,o=new Uint16Array([0,0,0,0,0,0]),i=[],a=this._nextSet(this._row,e.end);do{o=this._toCounters(a,o);var s=this._toPattern(o);if(s<0)return null;if(null===(r=this._patternToChar(s)))return null;i.push(r),n=a,a+=Ne(o),a=this._nextSet(this._row,a)}while("*"!==r);return i.pop(),i.length&&this._verifyEnd(n,a)&&this._verifyChecksums(i)?(i=i.slice(0,i.length-2),null===(i=this._decodeExtended(i))?null:{code:i.join(""),start:e.start,end:a,startInfo:e,decodedCodes:i,format:this.FORMAT}):null}}])}(cn);function Dn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function zn(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Dn(Object(n),!0).forEach(function(e){y()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Dn(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var Pn=[1,1,1],Nn=[1,1,1,1,1],jn=[1,1,2],Ln=[[3,2,1,1],[2,2,2,1],[2,1,2,2],[1,4,1,1],[1,1,3,2],[1,2,3,1],[1,1,1,4],[1,3,1,2],[1,2,1,3],[3,1,1,2],[1,1,2,3],[1,2,2,2],[2,2,1,2],[1,1,4,1],[2,3,1,1],[1,3,2,1],[4,1,1,1],[2,1,3,1],[3,1,2,1],[2,1,1,3]],Bn=[0,11,13,14,19,25,28,21,22,26],Un=function(t){function e(t,n){var r;return f()(this,e),r=function(t,e,n){return e=nn()(e),tn()(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return!!t}()?Reflect.construct(e,n||[],nn()(t).constructor):e.apply(t,n))}(this,e,[d()({supplements:[]},t),n]),y()(r,"FORMAT","ean_13"),y()(r,"SINGLE_CODE_ERROR",.7),y()(r,"STOP_PATTERN",[1,1,1]),r}return on()(e,t),g()(e,[{key:"_findPattern",value:function(t,e,n,r){var o=new Array(t.length).fill(0),i={error:Number.MAX_VALUE,start:0,end:0},a=0;e||(e=this._nextSet(this._row));for(var s=!1,c=e;c<this._row.length;c++)if(this._row[c]^(n?1:0))o[a]+=1;else{if(a===o.length-1){var l=this._matchPattern(o,t);if(l<.48&&i.error&&l<i.error)return s=!0,i.error=l,i.start=c-o.reduce(function(t,e){return t+e},0),i.end=c,i;if(r){for(var d=0;d<o.length-2;d++)o[d]=o[d+2];o[o.length-2]=0,o[o.length-1]=0,a--}}else a++;o[a]=1,n=!n}return s?i:null}},{key:"_decodeCode",value:function(t,e){var n=[0,0,0,0],r=t,o={error:Number.MAX_VALUE,code:-1,start:t,end:t},i=!this._row[r],a=0;e||(e=Ln.length);for(var s=r;s<this._row.length;s++)if(this._row[s]^(i?1:0))n[a]++;else{if(a===n.length-1){for(var c=0;c<e;c++){var l=this._matchPattern(n,Ln[c]);o.end=s,l<o.error&&(o.code=c,o.error=l)}return o.error>.48?null:o}n[++a]=1,i=!i}return null}},{key:"_findStart",value:function(){for(var t=this._nextSet(this._row),e=null;!e;){if(!(e=this._findPattern(Pn,t,!1,!0)))return null;var n=e.start-(e.end-e.start);if(n>=0&&this._matchRange(n,e.start,0))return e;t=e.end,e=null}return null}},{key:"_calculateFirstDigit",value:function(t){for(var e=0;e<Bn.length;e++)if(t===Bn[e])return e;return null}},{key:"_decodePayload",value:function(t,e,n){for(var r=zn({},t),o=0,i=0;i<6;i++){if(!(r=this._decodeCode(r.end)))return null;r.code>=10?(r.code-=10,o|=1<<5-i):o|=0<<5-i,e.push(r.code),n.push(r)}var a=this._calculateFirstDigit(o);if(null===a)return null;e.unshift(a);var s=this._findPattern(Nn,r.end,!0,!1);if(null===s||!s.end)return null;n.push(s);for(var c=0;c<6;c++){if(!(s=this._decodeCode(s.end,10)))return null;n.push(s),e.push(s.code)}return s}},{key:"_verifyTrailingWhitespace",value:function(t){var e=t.end+(t.end-t.start);return e<this._row.length&&this._matchRange(t.end,e,0)?t:null}},{key:"_findEnd",value:function(t,e){var n=this._findPattern(this.STOP_PATTERN,t,e,!1);return null!==n?this._verifyTrailingWhitespace(n):null}},{key:"_checksum",value:function(t){for(var e=0,n=t.length-2;n>=0;n-=2)e+=t[n];e*=3;for(var r=t.length-1;r>=0;r-=2)e+=t[r];return e%10==0}},{key:"_decodeExtensions",value:function(t){var e=this._nextSet(this._row,t),n=this._findPattern(jn,e,!1,!1);if(null===n)return null;for(var r=0;r<this.supplements.length;r++)try{var o=this.supplements[r].decode(this._row,n.end);if(null!==o)return{code:o.code,start:e,startInfo:n,end:o.end,decodedCodes:o.decodedCodes,format:this.supplements[r].FORMAT}}catch(t){console.error("* decodeExtensions error in ",this.supplements[r],": ",t)}return null}},{key:"decode",value:function(t,e){var n=new Array,r=new Array,o={},i=this._findStart();if(!i)return null;var a={start:i.start,end:i.end};if(r.push(a),!(a=this._decodePayload(a,n,r)))return null;if(!(a=this._findEnd(a.end,!1)))return null;if(r.push(a),!this._checksum(n))return null;if(this.supplements.length>0){var s=this._decodeExtensions(a.end);if(!s)return null;if(!s.decodedCodes)return null;var c=s.decodedCodes[s.decodedCodes.length-1],l={start:c.start+((c.end-c.start)/2|0),end:c.end};if(!this._verifyTrailingWhitespace(l))return null;o={supplement:s,code:n.join("")+s.code}}return zn(zn({code:n.join(""),start:i.start,end:a.end,startInfo:i,decodedCodes:r},o),{},{format:this.FORMAT})}}])}(cn);var Fn=function(t){function e(){var t;f()(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=function(t,e,n){return e=nn()(e),tn()(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return!!t}()?Reflect.construct(e,n||[],nn()(t).constructor):e.apply(t,n))}(this,e,[].concat(r)),y()(t,"FORMAT","ean_2"),t}return on()(e,t),g()(e,[{key:"decode",value:function(t,e){t&&(this._row=t);var n=0,r=e,o=this._row.length,i=[],a=[],s=null;if(void 0===r)return null;for(var c=0;c<2&&r<o;c++){if(!(s=this._decodeCode(r)))return null;a.push(s),i.push(s.code%10),s.code>=10&&(n|=1<<1-c),1!==c&&(r=this._nextSet(this._row,s.end),r=this._nextUnset(this._row,r))}if(2!==i.length||parseInt(i.join(""))%4!==n)return null;var l=this._findStart();return{code:i.join(""),decodedCodes:a,end:s.end,format:this.FORMAT,startInfo:l,start:l.start}}}])}(Un);var qn=[24,20,18,17,12,6,3,10,9,5],Hn=function(t){function e(){var t;f()(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=function(t,e,n){return e=nn()(e),tn()(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return!!t}()?Reflect.construct(e,n||[],nn()(t).constructor):e.apply(t,n))}(this,e,[].concat(r)),y()(t,"FORMAT","ean_5"),t}return on()(e,t),g()(e,[{key:"decode",value:function(t,e){if(void 0===e)return null;t&&(this._row=t);for(var n=0,r=e,o=this._row.length,i=null,a=[],s=[],c=0;c<5&&r<o;c++){if(!(i=this._decodeCode(r)))return null;s.push(i),a.push(i.code%10),i.code>=10&&(n|=1<<4-c),4!==c&&(r=this._nextSet(this._row,i.end),r=this._nextUnset(this._row,r))}if(5!==a.length)return null;if(function(t){for(var e=t.length,n=0,r=e-2;r>=0;r-=2)n+=t[r];n*=3;for(var o=e-1;o>=0;o-=2)n+=t[o];return(n*=3)%10}(a)!==function(t){for(var e=0;e<10;e++)if(t===qn[e])return e;return null}(n))return null;var l=this._findStart();return{code:a.join(""),decodedCodes:s,end:i.end,format:this.FORMAT,startInfo:l,start:l.start}}}])}(Un);var Vn=function(t){function e(){var t;f()(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=function(t,e,n){return e=nn()(e),tn()(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return!!t}()?Reflect.construct(e,n||[],nn()(t).constructor):e.apply(t,n))}(this,e,[].concat(r)),y()(t,"FORMAT","ean_8"),t}return on()(e,t),g()(e,[{key:"_decodePayload",value:function(t,e,n){for(var r=t,o=0;o<4;o++){if(!(r=this._decodeCode(r.end,10)))return null;e.push(r.code),n.push(r)}if(null===(r=this._findPattern(Nn,r.end,!0,!1)))return null;n.push(r);for(var i=0;i<4;i++){if(!(r=this._decodeCode(r.end,10)))return null;n.push(r),e.push(r.code)}return r}}])}(Un);var Wn=function(t){function e(t){var n;return f()(this,e),n=function(t,e,n){return e=nn()(e),tn()(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return!!t}()?Reflect.construct(e,n||[],nn()(t).constructor):e.apply(t,n))}(this,e,[d()({normalizeBarSpaceWidth:!1},t)]),y()(n,"barSpaceRatio",[1,1]),y()(n,"SINGLE_CODE_ERROR",.78),y()(n,"AVG_CODE_ERROR",.38),y()(n,"START_PATTERN",[1,1,1,1]),y()(n,"STOP_PATTERN",[1,1,3]),y()(n,"CODE_PATTERN",[[1,1,3,3,1],[3,1,1,1,3],[1,3,1,1,3],[3,3,1,1,1],[1,1,3,1,3],[3,1,3,1,1],[1,3,3,1,1],[1,1,1,3,3],[3,1,1,3,1],[1,3,1,3,1]]),y()(n,"MAX_CORRECTION_FACTOR",5),y()(n,"FORMAT","i2of5"),t.normalizeBarSpaceWidth&&(n.SINGLE_CODE_ERROR=.38,n.AVG_CODE_ERROR=.09),n.config=t,tn()(n,n)}return on()(e,t),g()(e,[{key:"_matchPattern",value:function(t,n){if(this.config.normalizeBarSpaceWidth){for(var r=[0,0],o=[0,0],i=[0,0],a=this.MAX_CORRECTION_FACTOR,s=1/a,c=0;c<t.length;c++)r[c%2]+=t[c],o[c%2]+=n[c];i[0]=o[0]/r[0],i[1]=o[1]/r[1],i[0]=Math.max(Math.min(i[0],a),s),i[1]=Math.max(Math.min(i[1],a),s),this.barSpaceRatio=i;for(var l=0;l<t.length;l++)t[l]*=this.barSpaceRatio[l%2]}return(d=e,u=this,"function"==typeof(p=xn()(nn()(d.prototype),"_matchPattern",u))?function(t){return p.apply(u,t)}:p)([t,n]);var d,u,p}},{key:"_findPattern",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=new Array(t.length).fill(0),i=0,a={error:Number.MAX_VALUE,start:0,end:0},s=this.AVG_CODE_ERROR;n=n||!1,r=r||!1,e||(e=this._nextSet(this._row));for(var c=e;c<this._row.length;c++)if(this._row[c]^(n?1:0))o[i]++;else{if(i===o.length-1){var l=o.reduce(function(t,e){return t+e},0),d=this._matchPattern(o,t);if(d<s)return a.error=d,a.start=c-l,a.end=c,a;if(!r)return null;for(var u=0;u<o.length-2;u++)o[u]=o[u+2];o[o.length-2]=0,o[o.length-1]=0,i--}else i++;o[i]=1,n=!n}return null}},{key:"_findStart",value:function(){for(var t=0,e=this._nextSet(this._row),n=null,r=1;!n;){if(!(n=this._findPattern(this.START_PATTERN,e,!1,!0)))return null;if(r=Math.floor((n.end-n.start)/4),(t=n.start-10*r)>=0&&this._matchRange(t,n.start,0))return n;e=n.end,n=null}return null}},{key:"_verifyTrailingWhitespace",value:function(t){var e=t.end+(t.end-t.start)/2;return e<this._row.length&&this._matchRange(t.end,e,0)?t:null}},{key:"_findEnd",value:function(){this._row.reverse();var t=this._findPattern(this.STOP_PATTERN);if(this._row.reverse(),null===t)return null;var e=t.start;return t.start=this._row.length-t.end,t.end=this._row.length-e,null!==t?this._verifyTrailingWhitespace(t):null}},{key:"_decodePair",value:function(t){for(var e=[],n=0;n<t.length;n++){var r=this._decodeCode(t[n]);if(!r)return null;e.push(r)}return e}},{key:"_decodeCode",value:function(t){for(var e=this.AVG_CODE_ERROR,n={error:Number.MAX_VALUE,code:-1,start:0,end:0},r=0;r<this.CODE_PATTERN.length;r++){var o=this._matchPattern(t,this.CODE_PATTERN[r]);o<n.error&&(n.code=r,n.error=o)}return n.error<e?n:null}},{key:"_decodePayload",value:function(t,e,n){for(var r=0,o=t.length,i=[[0,0,0,0,0],[0,0,0,0,0]],a=null;r<o;){for(var s=0;s<5;s++)i[0][s]=t[r]*this.barSpaceRatio[0],i[1][s]=t[r+1]*this.barSpaceRatio[1],r+=2;if(!(a=this._decodePair(i)))return null;for(var c=0;c<a.length;c++)e.push(a[c].code+""),n.push(a[c])}return a}},{key:"_verifyCounterLength",value:function(t){return t.length%10==0}},{key:"decode",value:function(t,e){var n=new Array,r=new Array,o=this._findStart();if(!o)return null;r.push(o);var i=this._findEnd();if(!i)return null;var a=this._fillCounters(o.end,i.start,!1);return this._verifyCounterLength(a)&&this._decodePayload(a,n,r)?n.length%2!=0||n.length<6?null:(r.push(i),{code:n.join(""),start:o.start,end:i.end,startInfo:o,decodedCodes:r,format:this.FORMAT}):null}}])}(cn);function Qn(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return Yn(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Yn(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function Yn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var Gn=[2,2.5,3],Xn=function(t){function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return f()(this,e),t=function(t,e,n){return e=nn()(e),tn()(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return!!t}()?Reflect.construct(e,n||[],nn()(t).constructor):e.apply(t,n))}(this,e,[n]),y()(t,"FORMAT","pharmacode"),y()(t,"SINGLE_CODE_ERROR",.7),y()(t,"AVG_CODE_ERROR",.48),t}return on()(e,t),g()(e,[{key:"_findStart",value:function(){for(var t=0;t<this._row.length;){var e=this._nextSet(this._row,t);if(e>=this._row.length)return null;for(var n=e;n<this._row.length&&this._row[n];)n++;var r=n-e;if(r<5)t=n+1;else{var o=e-Math.max(2*r,20);if(o<0)t=n+1;else if(this._matchRange(o,e,0)){var i=Math.max(10*r,50),a=this._nextSet(this._row,n);if(a>=this._row.length)t=n+1;else{if(!(a-n>i))return{start:e,end:n};t=n+1}}else t=n+1}}return null}},{key:"_smoothBarWidths",value:function(t){if(t.length<=2)return t;for(var e=t.slice(),n=1;n<e.length-1;n++){var r=e[n-1],o=e[n],i=[r,o,e[n+1]].sort(function(t,e){return t-e})[1],a=Math.abs(o-i);a>0&&a<=3&&(e[n]=i)}return e}},{key:"_extractBarsAndSpaces",value:function(t){for(var e=[],n=[],r=t,o=0,i=!1;r<this._row.length&&this._row[r];)o++,r++;if(0===o)return null;for(e.push(o),o=0;r<this._row.length&&!this._row[r];)o++,r++;if(0===o||r>=this._row.length)return null;n.push(o);for(var a=6*(e[0]<n[0]?e[0]:.8*n[0]),s=2.5*n[0];r<this._row.length&&e.length<16;){for(o=0;r<this._row.length&&this._row[r];)o++,r++;if(0===o)break;e.push(o),o=0;for(var c=r;r<this._row.length&&!this._row[r];)o++,r++;if(0===o)break;if(o>=a){i=!0,r=c;break}if(e.length>=2&&o>=s){i=!0,r=c;break}if(r>=this._row.length){i=!0,r=c;break}n.push(o),n.length>=2&&(s=n.reduce(function(t,e){return t+e},0)/n.length*2)}return i?e.length<2||e.length>16||n.length!==e.length-1?null:this._validateSpaces(n)&&this._validateBarSizeCount(e)?{bars:this._smoothBarWidths(e),spaces:n,end:r}:null:null}},{key:"_validateBarSizeCount",value:function(t){if(0===t.length)return!1;var e,n=[],r=Qn(t);try{for(r.s();!(e=r.n()).done;){var o,i=e.value,a=!1,s=Qn(n);try{for(s.s();!(o=s.n()).done;){var c=o.value,l=c.reduce(function(t,e){return t+e},0)/c.length;if(Math.abs(i-l)<=.35*l){c.push(i),a=!0;break}}}catch(t){s.e(t)}finally{s.f()}a||n.push([i])}}catch(t){r.e(t)}finally{r.f()}return!(n.length>2)}},{key:"_validateSpaces",value:function(t){if(0===t.length)return!0;var e=t.reduce(function(t,e){return t+e},0)/t.length;if(0===e)return!1;var n=t.reduce(function(t,n){return t+Math.pow(n-e,2)},0)/t.length;return Math.sqrt(n)/e<=.35}},{key:"_validateBarRatios",value:function(t,e){var n=t.reduce(function(t,e){return t+e},0)/t.length,r=t.reduce(function(t,e){return t+Math.abs(e-n)},0)/t.length;if((0===n?0:r/n)<=.1){var o=e.length>0?e.reduce(function(t,e){return t+e},0)/e.length:0;return o>0&&o/n<.7?{narrowWidth:n/2.5,wideRatio:2.5}:{narrowWidth:n,wideRatio:2}}var i=Array.from(new Set(t.slice().sort(function(t,e){return t-e})));if(i.length<2)return{narrowWidth:t.reduce(function(t,e){return t+e},0)/t.length,wideRatio:2};for(var a=[],s=0;s<i.length-1;s++){var c,l=(i[s]+i[s+1])/2,d=[],u=[],p=Qn(t);try{for(p.s();!(c=p.n()).done;){var h=c.value;h<l?d.push(h):u.push(h)}}catch(t){p.e(t)}finally{p.f()}if(0!==d.length&&0!==u.length){for(var f=d.reduce(function(t,e){return t+e},0)/d.length,v=u.reduce(function(t,e){return t+e},0)/u.length,g=v/f,m=Gn[0],y=Math.abs(g-m),b=0,x=Gn;b<x.length;b++){var _=x[b],w=Math.abs(g-_);w<y&&(y=w,m=_)}a.push({threshold:l,narrowBars:d,wideBars:u,avgN:f,avgW:v,ratio:g,ratioDiff:y,matchedRatio:m})}}a.sort(function(t,e){return t.ratioDiff-e.ratioDiff});for(var E=0,$=a;E<$.length;E++){var A=$[E],S=.05*A.matchedRatio;if(!(Math.abs(A.ratio-A.matchedRatio)>S)){var k,C=.15*A.avgN,R=.15*A.avgW,I=!0,M=Qn(A.narrowBars);try{for(M.s();!(k=M.n()).done;){var T=k.value;if(Math.abs(T-A.avgN)>C){I=!1;break}}}catch(t){M.e(t)}finally{M.f()}if(I){var O,D=Qn(A.wideBars);try{for(D.s();!(O=D.n()).done;){var z=O.value;if(Math.abs(z-A.avgW)>R){I=!1;break}}}catch(t){D.e(t)}finally{D.f()}if(I)return{narrowWidth:A.avgN,wideRatio:A.matchedRatio}}}}return null}},{key:"_validatePeriodicity",value:function(t,e){if(t.length>0){var n=t.reduce(function(t,e){return t+e},0)/t.length,r=t.reduce(function(t,e){return t+Math.pow(e-n,2)},0)/t.length;if((0!==n?Math.sqrt(r)/n:0)>.65)return!1}if(e.length>0){var o=e.reduce(function(t,e){return t+e},0)/e.length,i=e.reduce(function(t,e){return t+Math.pow(e-o,2)},0)/e.length;if((0!==o?Math.sqrt(i)/o:0)>.55)return!1}return!0}},{key:"_validateQuietZones",value:function(t,e,n){var r=1*e;if(t.start>=2&&t.start<r)return!1;var o=this._row.length-n;return o<6||!(o<r)}},{key:"_decodeBars",value:function(t,e){for(var n=1.6*(null!=e?e:Math.min.apply(Math,wn()(t))),r=0,o=t.slice().reverse(),i=0;i<o.length;i++)r+=o[i]>n?Math.pow(2,i+1):Math.pow(2,i);for(var a="",s=o.length-1;s>=0;s--)a+=o[s]>n?"W":"N";return{value:r,pattern:a}}},{key:"_verifyTrailingWhitespace",value:function(t,e){var n=Math.min(t+2*e,this._row.length);return this._matchRange(t,n,0)}},{key:"_validatePatternConsistency",value:function(t,e){for(var n=t.start,r=0,o=0,i=0,a=[-2,-1,1,2];i<a.length;i++){var s=n+a[i];if(!(s<0||s>=this._row.length)){o++;var c=this._extractBarsAndSpaces(s);if(c&&c.bars.length===e.length){for(var l=!0,d=0;d<e.length;d++)if(Math.abs(c.bars[d]-e[d])/Math.max(e[d],1)>.25){l=!1;break}l&&r++}}}return o>0&&r>=.5*o}},{key:"decode",value:function(t,e){var n=this._findStart();if(!n)return null;if(n.start>.5*this._row.length)return null;var r=this._extractBarsAndSpaces(n.start);if(!r)return null;var o=r.bars,i=r.spaces,a=r.end;if(o.reduce(function(t,e){return t+e},0)+i.reduce(function(t,e){return t+e},0)<20)return null;if(this._row.length-a<0)return null;if(!this._validateSpaces(i))return null;if(!this._validatePeriodicity(o,i))return null;if(!this._validatePatternConsistency(n,o))return null;var s=this._validateBarRatios(o,i);if(!s)return null;if(!this._validateQuietZones(n,s.narrowWidth,a))return null;var c=this._decodeBars(o,s.narrowWidth);if(!c)return null;var l=c.value;if(l<3||l>131070)return null;var d=o.reduce(function(t,e){return t+e},0)/o.length;this._verifyTrailingWhitespace(a,d);var u=o.map(function(t,e){return{code:t>1.6*Math.min.apply(Math,wn()(o))?1:0,start:0,end:0,error:0}});return{code:l.toString(),start:n.start,end:a,startInfo:n,decodedCodes:u,pattern:c.pattern,format:this.FORMAT}}}])}(cn);y()(Xn,"adjacentLineValidationMatches",1);var Zn=Xn;function Kn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function Jn(t,e,n,r){var o=xn()(nn()(1&r?t.prototype:t),e,n);return 2&r&&"function"==typeof o?function(t){return o.apply(n,t)}:o}var tr=function(t){function e(){var t;f()(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=function(t,e,n){return e=nn()(e),tn()(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return!!t}()?Reflect.construct(e,n||[],nn()(t).constructor):e.apply(t,n))}(this,e,[].concat(r)),y()(t,"CODE_FREQUENCY",[[56,52,50,49,44,38,35,42,41,37],[7,11,13,14,19,25,28,21,22,26]]),y()(t,"STOP_PATTERN",[1/6*7,1/6*7,1/6*7,1/6*7,1/6*7,1/6*7]),y()(t,"FORMAT","upc_e"),t}return on()(e,t),g()(e,[{key:"_decodePayload",value:function(t,e,n){for(var r=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Kn(Object(n),!0).forEach(function(e){y()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Kn(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},t),o=0,i=0;i<6;i++){if(!(r=this._decodeCode(r.end)))return null;r.code>=10&&(r.code=r.code-10,o|=1<<5-i),e.push(r.code),n.push(r)}return this._determineParity(o,e)?r:null}},{key:"_determineParity",value:function(t,e){for(var n=0;n<this.CODE_FREQUENCY.length;n++)for(var r=0;r<this.CODE_FREQUENCY[n].length;r++)if(t===this.CODE_FREQUENCY[n][r])return e.unshift(n),e.push(r),!0;return!1}},{key:"_convertToUPCA",value:function(t){var e=[t[0]],n=t[t.length-2];return(e=n<=2?e.concat(t.slice(1,3)).concat([n,0,0,0,0]).concat(t.slice(3,6)):3===n?e.concat(t.slice(1,4)).concat([0,0,0,0,0]).concat(t.slice(4,6)):4===n?e.concat(t.slice(1,5)).concat([0,0,0,0,0,t[5]]):e.concat(t.slice(1,6)).concat([0,0,0,0,n])).push(t[t.length-1]),e}},{key:"_checksum",value:function(t){return Jn(e,"_checksum",this,3)([this._convertToUPCA(t)])}},{key:"_findEnd",value:function(t,n){return Jn(e,"_findEnd",this,3)([t,!0])}},{key:"_verifyTrailingWhitespace",value:function(t){var e=t.end+(t.end-t.start)/2;return e<this._row.length&&this._matchRange(t.end,e,0)?t:null}}])}(Un);var er=function(t){function e(){var t;f()(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=function(t,e,n){return e=nn()(e),tn()(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return!!t}()?Reflect.construct(e,n||[],nn()(t).constructor):e.apply(t,n))}(this,e,[].concat(r)),y()(t,"FORMAT","upc_a"),t}return on()(e,t),g()(e,[{key:"decode",value:function(t,e){var n=Un.prototype.decode.call(this);return n&&n.code&&13===n.code.length&&"0"===n.code.charAt(0)?(n.code=n.code.substring(1),n):null}}])}(Un),nr={},rr=1,or=-1;nr.getBarcodeLine=function(t,e,n){var r,o,i,a,s,c=0|e.x,l=0|e.y,d=0|n.x,u=0|n.y,p=Math.abs(u-l)>Math.abs(d-c),h=[],f=t.data,v=t.size.x,g=255,m=0;function y(t,e){s=f[e*v+t],g=s<g?s:g,m=s>m?s:m,h.push(s)}p&&(i=c,c=l,l=i,i=d,d=u,u=i),c>d&&(i=c,c=d,d=i,i=l,l=u,u=i);var b=d-c,x=Math.abs(u-l);r=b/2|0,o=l;var _=l<u?1:-1;for(a=c;a<d;a++)p?y(o,a):y(a,o),(r-=x)<0&&(o+=_,r+=b);return{line:h,min:g,max:m}},nr.toBinaryLine=function(t){var e,n,r,o,i,a,s=t.min,c=t.max,l=t.line,d=s+(c-s)/2,u=[],p=(c-s)/12,h=-p;for(r=l[0]>d?rr:or,u.push({pos:0,val:l[0]}),i=0;i<l.length-2;i++)r!==(o=(e=l[i+1]-l[i])+(n=l[i+2]-l[i+1])<h&&l[i+1]<1.5*d?or:e+n>p&&l[i+1]>.5*d?rr:r)&&(u.push({pos:i,val:l[i]}),r=o);for(u.push({pos:l.length,val:l[l.length-1]}),a=u[0].pos;a<u[1].pos;a++)l[a]=l[a]>d?0:1;for(i=1;i<u.length-1;i++)for(p=u[i+1].val>u[i].val?u[i].val+(u[i+1].val-u[i].val)/3*2|0:u[i+1].val+(u[i].val-u[i+1].val)/3|0,a=u[i].pos;a<u[i+1].pos;a++)l[a]=l[a]>p?0:1;return{line:l,threshold:p}},nr.debug={printFrequency:function(t,e){var n,r=e.getContext("2d");for(e.width=t.length,e.height=256,r.beginPath(),r.strokeStyle="blue",n=0;n<t.length;n++)r.moveTo(n,255),r.lineTo(n,255-t[n]);r.stroke(),r.closePath()},printPattern:function(t,e){var n,r=e.getContext("2d");for(e.width=t.length,r.fillColor="black",n=0;n<t.length;n++)1===t[n]&&r.fillRect(n,0,1,100)}};var ir=nr;function ar(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return sr(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?sr(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function sr(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var cr={code_128_reader:yn,ean_reader:Un,ean_5_reader:Hn,ean_2_reader:Fn,ean_8_reader:Vn,code_39_reader:An,code_39_vin_reader:In,codabar_reader:mn,upc_reader:er,upc_e_reader:tr,i2of5_reader:Wn,"2of5_reader":hn,code_93_reader:On,code_32_reader:kn,pharmacode_reader:Zn},lr={registerReader:function(t,e){cr[t]=e},create:function(t,e){var n=[];function r(){t.readers.forEach(function(t){var e,r={},o=[];"object"===c()(t)?(e=t.format,r=t.config):"string"==typeof t&&(e=t),r.supplements&&(o=r.supplements.map(function(t){return new cr[t]}));try{var i=new cr[e](r,o);n.push(i)}catch(t){throw console.error("* Error constructing reader ",e,t),t}})}function o(t){var r,o=null,i=ir.getBarcodeLine(e,t[0],t[1]);ir.toBinaryLine(i);var a=-1;for(r=0;r<n.length&&null===o;r++)"function"==typeof n[r].setImageWrapper&&n[r].setImageWrapper(e),null!==(o=n[r].decodePattern(i.line))&&(a=r);return null===o||a>=0&&n[a]instanceof Zn&&!function(t,e,n,r){var o=Math.round(t[1].y),i=e.start,a=n.constructor,s=a&&a.adjacentLineValidationMatches||0;if(s<=0)return!0;for(var c=0,l=!1,d=0,u=[1,2,3];d<u.length;d++){var p=u[d];if(l)break;for(var h=0,f=[-1,1];h<f.length;h++){var v=f[h];if(l)break;var g=o+p*v;if(!(g<0||g>=r.size.y)){var m={x:t[0].x,y:g},y={x:t[1].x,y:g};try{var b=ir.getBarcodeLine(r,m,y);ir.toBinaryLine(b),n._row=b.line;var x=n._findStart();if(null!==x&&x.start===i&&++c>=s){l=!0;break}}catch(t){}}}}return c>=s}(t,o,n[a],e)?null:{codeResult:o,barcodeLine:i}}function i(t){return a.apply(this,arguments)}function a(){return(a=Ge()(Ze.a.mark(function t(e){var r,o,i,a,s;return Ze.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=null,o=ar(n),t.prev=1,o.s();case 2:if((i=o.n()).done){t.next=5;break}if(!(a=i.value).decodeImage){t.next=4;break}return t.next=3,a.decodeImage(e);case 3:if(!(r=t.sent)){t.next=4;break}return t.abrupt("continue",5);case 4:t.next=2;break;case 5:t.next=7;break;case 6:t.prev=6,s=t.catch(1),o.e(s);case 7:return t.prev=7,o.f(),t.finish(7);case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}},t,null,[[1,6,7,8]])}))).apply(this,arguments)}function s(t){var n,r,i=function(t){return Math.sqrt(Math.pow(Math.abs(t[1].y-t[0].y),2)+Math.pow(Math.abs(t[1].x-t[0].x),2))}(n=function(t){return[{x:(t[1][0]-t[0][0])/2+t[0][0],y:(t[1][1]-t[0][1])/2+t[0][1]},{x:(t[3][0]-t[2][0])/2+t[2][0],y:(t[3][1]-t[2][1])/2+t[2][1]}]}(t)),a=Math.atan2(n[1].y-n[0].y,n[1].x-n[0].x);return null===(n=function(t,n,r){function o(e){var r=e*Math.sin(n),o=e*Math.cos(n);t[0].y-=r,t[0].x-=o,t[1].y+=r,t[1].x+=o}for(o(r);r>1&&(!e.inImageWithBorder(t[0])||!e.inImageWithBorder(t[1]));)o(-(r-=Math.ceil(r/2)));return t}(n,a,Math.floor(.1*i)))?null:(null===(r=o(n))&&(r=function(t,e,n){var r,i,a,s=Math.sqrt(Math.pow(t[1][0]-t[0][0],2)+Math.pow(t[1][1]-t[0][1],2)),c=null,l=Math.sin(n),d=Math.cos(n);for(r=1;r<16&&null===c;r++)a={y:(i=s/16*r*(r%2==0?-1:1))*l,x:i*d},e[0].y+=a.x,e[0].x-=a.y,e[1].y+=a.x,e[1].x-=a.y,c=o(e);return c}(t,n,a)),null===r?null:{codeResult:r.codeResult,line:n,angle:a,pattern:r.barcodeLine.line,threshold:r.barcodeLine.threshold})}return r(),{decodeFromBoundingBox:function(t){return s(t)},decodeFromBoundingBoxes:function(e){var n,r,o=[],i=t.multiple;for(n=0;n<e.length;n++){var a=e[n];if((r=s(a)||{}).box=a,i)o.push(r);else if(r.codeResult)return r}return{barcodes:o}},decodeFromImage:function(t){return Ge()(Ze.a.mark(function e(){var n;return Ze.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=1,i(t);case 1:return n=e.sent,e.abrupt("return",n);case 2:case"end":return e.stop()}},e)}))()},registerReader:function(t,e){if(cr[t])throw new Error("cannot register existing reader",t);cr[t]=e},setReaders:function(e){t.readers=e,n.length=0,r()}}}},dr=function(){var t={};function e(e){return t[e]||(t[e]={subscribers:[]}),t[e]}function n(t,e){t.async?setTimeout(function(){t.callback(e)},4):t.callback(e)}function r(t,n,r){var o;if("function"==typeof n)o={callback:n,async:r};else if(!(o=n).callback)throw new Error("Callback was not specified on options");e(t).subscribers.push(o)}return{subscribe:function(t,e,n){return r(t,e,n)},publish:function(t,r){var o=e(t),i=o.subscribers;i.filter(function(t){return!!t.once}).forEach(function(t){n(t,r)}),o.subscribers=i.filter(function(t){return!t.once}),o.subscribers.forEach(function(t){n(t,r)})},once:function(t,e){r(t,{callback:e,async:arguments.length>2&&void 0!==arguments[2]&&arguments[2],once:!0})},unsubscribe:function(n,r){if(n){var o=e(n);o.subscribers=o&&r?o.subscribers.filter(function(t){return t.callback!==r}):[]}else t={}}}}(),ur=n(81),pr=n.n(ur),hr=n(82),fr=n.n(hr),vr=n(83);var gr=function(t){function e(t,n){var r;return f()(this,e),r=function(t,e,n){return e=nn()(e),tn()(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return!!t}()?Reflect.construct(e,n||[],nn()(t).constructor):e.apply(t,n))}(this,e,[t]),y()(r,"code",void 0),r.code=n,Object.setPrototypeOf(r,e.prototype),r}return on()(e,t),g()(e,[{key:"toJSON",value:function(){return{name:this.name,message:this.message,code:this.code}}}])}(n.n(vr)()(Error)),mr="This may mean that the user has declined camera access, or the browser does not support media APIs. If you are running in iOS, you must use Safari.";function yr(){try{return navigator.mediaDevices.enumerateDevices()}catch(e){var t=new gr("enumerateDevices is not defined. ".concat(mr),-1);return Promise.reject(t)}}function br(t){try{return navigator.mediaDevices.getUserMedia(t)}catch(t){var e=new gr("getUserMedia is not defined. ".concat(mr),-1);return Promise.reject(e)}}var xr,_r=["deviceId"];function wr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function Er(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?wr(Object(n),!0).forEach(function(e){y()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wr(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function $r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return Ar(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ar(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function Ar(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Sr(t){return new Promise(function(e,n){var r=10;!function o(){r>0?t.videoWidth>10&&t.videoHeight>10?e():window.setTimeout(o,500):n(new gr("Unable to play video stream. Is webcam working?",-1)),r--}()})}function kr(t,e){return Cr.apply(this,arguments)}function Cr(){return(Cr=Ge()(Ze.a.mark(function t(e,n){var r;return Ze.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=1,br(n);case 1:if(r=t.sent,xr=r,!e){t.next=2;break}return e.setAttribute("autoplay","true"),e.setAttribute("muted","true"),e.setAttribute("playsinline","true"),e.srcObject=r,e.addEventListener("loadedmetadata",function(){e.play().catch(function(t){console.warn("* Error while trying to play video stream:",t)})}),t.abrupt("return",Sr(e));case 2:return t.abrupt("return",Promise.resolve());case 3:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Rr(t){var e=fr()(t,["facing","minAspectRatio","maxAspectRatio"]);return void 0!==t.minAspectRatio&&t.minAspectRatio>0&&(e.aspectRatio=t.minAspectRatio,console.log("WARNING: Constraint 'minAspectRatio' is deprecated; Use 'aspectRatio' instead")),void 0!==t.facing&&(e.facingMode=t.facing,console.log("WARNING: Constraint 'facing' is deprecated. Use 'facingMode' instead'")),e}function Ir(){var t=Rr(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{});return t&&t.deviceId&&t.facingMode&&delete t.facingMode,Promise.resolve({audio:!1,video:t})}function Mr(){return(Mr=Ge()(Ze.a.mark(function t(e){var n,r,o,i,a,s,c,l,d,u;return Ze.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=1,yr();case 1:if(n=t.sent,r=n.filter(function(t){return"videoinput"===t.kind}),e){t.next=2;break}return t.abrupt("return",r);case 2:o=[],(i=Rr(e)).deviceId,a=pr()(i,_r),s=$r(r),t.prev=3,s.s();case 4:if((c=s.n()).done){t.next=9;break}return l=c.value,t.prev=5,d={audio:!1,video:Er(Er({},a),{},{deviceId:{exact:l.deviceId}})},t.next=6,br(d);case 6:t.sent.getTracks().forEach(function(t){return t.stop()}),o.push(l),t.next=8;break;case 7:t.prev=7,t.catch(5);case 8:t.next=4;break;case 9:t.next=11;break;case 10:t.prev=10,u=t.catch(3),s.e(u);case 11:return t.prev=11,s.f(),t.finish(11);case 12:return t.abrupt("return",o);case 13:case"end":return t.stop()}},t,null,[[3,10,11,12],[5,7]])}))).apply(this,arguments)}function Tr(){if(!xr)return null;var t=xr.getVideoTracks();return t&&null!=t&&t.length?t[0]:null}var Or={requestedVideoElement:null,request:function(t,e){return Ge()(Ze.a.mark(function n(){var r;return Ze.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return Or.requestedVideoElement=t,n.next=1,Ir(e);case 1:return r=n.sent,n.abrupt("return",kr(t,r));case 2:case"end":return n.stop()}},n)}))()},release:function(){var t=xr&&xr.getVideoTracks();return null!==Or.requestedVideoElement&&Or.requestedVideoElement.pause(),new Promise(function(e){setTimeout(function(){t&&t.length&&t.forEach(function(t){return t.stop()}),xr=null,Or.requestedVideoElement=null,e()},0)})},enumerateVideoDevices:function(t){return Mr.apply(this,arguments)},getActiveStream:function(){var t;return null!==(t=xr)&&void 0!==t?t:null},getActiveStreamLabel:function(){var t=Tr();return t?t.label:""},getActiveTrack:Tr,disableTorch:function(){return Ge()(Ze.a.mark(function t(){var e,n;return Ze.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=Tr())){t.next=4;break}return t.prev=1,t.next=2,e.applyConstraints({advanced:[{torch:!1}]});case 2:t.next=4;break;case 3:throw t.prev=3,(n=t.catch(1))instanceof OverconstrainedError&&console.warn("quagga2/CameraAccess: Torch not supported on this device"),n;case 4:case"end":return t.stop()}},t,null,[[1,3]])}))()},enableTorch:function(){return Ge()(Ze.a.mark(function t(){var e,n;return Ze.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=Tr())){t.next=4;break}return t.prev=1,t.next=2,e.applyConstraints({advanced:[{torch:!0}]});case 2:t.next=4;break;case 3:throw t.prev=3,(n=t.catch(1))instanceof OverconstrainedError&&console.warn("quagga2/CameraAccess: Torch not supported on this device"),n;case 4:case"end":return t.stop()}},t,null,[[1,3]])}))()}},Dr=Or,zr={create:function(t){var e,n=document.createElement("canvas"),r=n.getContext("2d",{willReadFrequently:!!t.willReadFrequently}),o=[],i=null!==(e=t.capacity)&&void 0!==e?e:20,a=!0===t.capture;function s(e){return!!i&&e&&!function(t,e){return e&&e.some(function(e){return Object.keys(e).every(function(n){return e[n]===t[n]})})}(e,t.blacklist)&&function(t,e){return"function"!=typeof e||e(t)}(e,t.filter)}return{addResult:function(t,e,c){var l={};s(c)&&(i--,l.codeResult=c,a&&(n.width=e.x,n.height=e.y,Ke.drawImage(t,e,r),l.frame=n.toDataURL()),o.push(l))},getResults:function(){return o}}}},Pr={inputStream:{type:"LiveStream",constraints:{width:640,height:480,facingMode:"environment"},area:{top:"0%",right:"0%",left:"0%",bottom:"0%"},singleChannel:!1},locate:!0,canvas:{createOverlay:!0},decoder:{readers:["code_128_reader"]},locator:{halfSample:!0,patchSize:"medium"}},Nr=Math.PI/180,jr={create:function(t,e){var n,r={},o=t.getConfig(),i=Be(t.getRealWidth(),t.getRealHeight()),a=t.getCanvasSize(),s=Be(t.getWidth(),t.getHeight()),c=t.getTopRight(),l=c.x,d=c.y,u=null,p=null,h=o.willReadFrequently;function f(t,e,n,r,o){var i=Math.floor(r),a=Math.floor(o),s=Math.min(i+1,e-1),c=Math.min(a+1,n-1),l=r-i,d=o-a;return(t[a*e+i]*(1-l)+t[a*e+s]*l)*(1-d)+(t[c*e+i]*(1-l)+t[c*e+s]*l)*d}return(n=e||document.createElement("canvas")).width=a.x,n.height=a.y,u=n.getContext("2d",{willReadFrequently:!!h}),p=new Uint8Array(s.x*s.y),r.attachData=function(t){p=t},r.getData=function(){return p},r.grab=function(){var e=o.halfSample,r=t.getFrame(),c=r,h=0;if(c){if(function(t,e){t.width!==e.x&&(t.width=e.x),t.height!==e.y&&(t.height=e.y)}(n,a,o.debug),"ImageStream"===o.type&&(c=r.img,r.tags&&r.tags.orientation))switch(r.tags.orientation){case 6:h=90*Nr;break;case 8:h=-90*Nr}if(0!==h?(u.translate(a.x/2,a.y/2),u.rotate(h),u.drawImage(c,-a.y/2,-a.x/2,a.y,a.x),u.rotate(-h),u.translate(-a.x/2,-a.y/2)):u.drawImage(c,0,0,a.x,a.y),e)!function(t,e,n){for(var r,o=0,i=e.x,a=Math.floor(t.length/4),s=e.x/2,c=0,l=e.x;i<a;){for(r=0;r<s;r++)n[c]=(.299*t[4*o+0]+.587*t[4*o+1]+.114*t[4*o+2]+(.299*t[4*(o+1)+0]+.587*t[4*(o+1)+1]+.114*t[4*(o+1)+2])+(.299*t[4*i+0]+.587*t[4*i+1]+.114*t[4*i+2])+(.299*t[4*(i+1)+0]+.587*t[4*(i+1)+1]+.114*t[4*(i+1)+2]))/4,c++,o+=2,i+=2;o+=l,i+=l}}(u.getImageData(l,d,s.x,s.y).data,s,p);else{var v=document.createElement("canvas");v.width=i.x,v.height=i.y;var g=v.getContext("2d");0!==h?(g.translate(i.x/2,i.y/2),g.rotate(h),g.drawImage(c,-i.y/2,-i.x/2,i.y,i.x)):g.drawImage(c,0,0,i.x,i.y);var m=g.getImageData(0,0,i.x,i.y).data,y=new Uint8Array(i.x*i.y);!function(t,e,n){var r=t.length/4|0;if(n&&!0===n.singleChannel)for(var o=0;o<r;o++){var i=t[4*o+3];e[o]=0===i?255:t[4*o+0]}else for(var a=0;a<r;a++){var s=t[4*a+3];e[a]=0===s?255:.299*t[4*a+0]+.587*t[4*a+1]+.114*t[4*a+2]}}(m,y,o);for(var b=new Uint8Array(a.x*a.y),x=i.x/a.x,_=i.y/a.y,w=0;w<a.y;w++)for(var E=0;E<a.x;E++){var $=E*x,A=w*_;b[w*a.x+E]=0|f(y,i.x,i.y,$,A)}for(var S=0;S<s.y;S++)for(var k=0;k<s.x;k++){var C=(S+d)*a.x+(k+l);p[S*s.x+k]=b[C]}}return!0}return!1},r.getSize=function(){return s},r}},Lr=jr,Br={274:"orientation"},Ur=Object.keys(Br).map(function(t){return Br[t]});function Fr(t){return new Promise(function(e){var n=new FileReader;n.onload=function(t){return e(t.target.result)},n.readAsArrayBuffer(t)})}function qr(t,e,n){if("Exif"!==function(t,e){for(var n="",r=e;r<e+4;r++)n+=String.fromCharCode(t.getUint8(r));return n}(t,e))return!1;var r,o=e+6;if(18761===t.getUint16(o))r=!1;else{if(19789!==t.getUint16(o))return!1;r=!0}if(42!==t.getUint16(o+2,!r))return!1;var i=t.getUint32(o+4,!r);return!(i<8)&&function(t,e,n,r,o){for(var i=t.getUint16(n,!o),a={},s=0;s<i;s++){var c=n+12*s+2,l=r[t.getUint16(c,!o)];l&&(a[l]=Hr(t,c,e,n,o))}return a}(t,o,o+i,n,r)}function Hr(t,e,n,r,o){var i=t.getUint16(e+2,!o),a=t.getUint32(e+4,!o);if(3===i)if(1===a)return t.getUint16(e+8,!o);return null}function Vr(t,e){return"".concat(t,"image-").concat(e.toString().padStart(3,"0"),".jpg")}var Wr={};function Qr(t,e){t.onload=function(){e.loaded(this)},t.onerror=function(){e.loaded(this)}}Wr.load=function(t,e,n,r,o,i){var a,s,c,l=new Array(r),d=new Array(l.length);if(!1===o)l[0]=t;else for(a=0;a<l.length;a++)c=n+a,l[a]=Vr(t,c);for(d.notLoaded=[],d.addImage=function(t){d.notLoaded.push(t)},d.loaded=function(n){for(var r=d.notLoaded,i=0;i<r.length;i++)if(r[i]===n){r.splice(i,1);for(var a=0;a<l.length;a++){var s=encodeURI(l[a].substr(l[a].lastIndexOf("/")));if(-1!==n.src.lastIndexOf(s)){d[a]={img:n};break}}break}0===r.length&&(!1===o?function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ur;return/^blob:/i.test(t)?function(t){return new Promise(function(e,n){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="blob",r.onreadystatechange=function(){r.readyState!==XMLHttpRequest.DONE||200!==r.status&&0!==r.status||e(this.response)},r.onerror=n,r.send()})}(t).then(Fr).then(function(t){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ur,n=new DataView(t),r=t.byteLength,o=e.reduce(function(t,e){var n=Object.keys(Br).filter(function(t){return Br[t]===e})[0];return n&&(t[n]=e),t},{}),i=2;if(255!==n.getUint8(0)||216!==n.getUint8(1))return!1;for(;i<r;){if(255!==n.getUint8(i))return!1;if(225===n.getUint8(i+1))return qr(n,i+4,o);i+=2+n.getUint16(i+2)}return!1}(t,e)}):Promise.resolve(null)}(t,["orientation"]).then(function(t){d[0].tags=t,e(d)}).catch(function(t){console.log(t),e(d)}):e(d))},a=0;a<l.length;a++)s=new Image,d.addImage(s),Qr(s,d),s.src=l[a]};var Yr,Gr,Xr,Zr,Kr,Jr,to,eo,no,ro,oo,io,ao=Wr,so={createVideoStream:function(t){console.warn("**** InputStreamBrowser createVideoStream");var e,n,r=null,o=["canrecord","ended"],i={},a={x:0,y:0,type:"Point"},s={x:0,y:0,type:"XYSize"},c={getRealWidth:function(){return t.videoWidth},getRealHeight:function(){return t.videoHeight},getWidth:function(){return e},getHeight:function(){return n},setWidth:function(t){e=t},setHeight:function(t){n=t},setInputStream:function(t){r=t,this.setAttribute("src",void 0!==t.src?t.src:"")},ended:function(){return t.ended},getConfig:function(){return r},setAttribute:function(e,n){t&&t.setAttribute(e,n)},pause:function(){t.pause()},play:function(){t.play()},setCurrentTime:function(t){var e;"LiveStream"!==(null===(e=r)||void 0===e?void 0:e.type)&&this.setAttribute("currentTime",t.toString())},addEventListener:function(e,n,r){-1!==o.indexOf(e)?(i[e]||(i[e]=[]),i[e].push(n)):t.addEventListener(e,n,r)},clearEventHandlers:function(){o.forEach(function(e){var n=i[e];n&&n.length>0&&n.forEach(function(n){t.removeEventListener(e,n)})})},trigger:function(o,a){var l,d,u,p,h,f=i[o];if("canrecord"===o&&(p=t.videoWidth,h=t.videoHeight,e=null!==(d=r)&&void 0!==d&&d.size?p/h>1?r.size:Math.floor(p/h*r.size):p,n=null!==(u=r)&&void 0!==u&&u.size?p/h>1?Math.floor(h/p*r.size):r.size:h,s.x=e,s.y=n),f&&f.length>0)for(l=0;l<f.length;l++)f[l].apply(c,a)},setTopRight:function(t){a.x=t.x,a.y=t.y},getTopRight:function(){return a},setCanvasSize:function(t){s.x=t.x,s.y=t.y},getCanvasSize:function(){return s},getFrame:function(){return t}};return c},createLiveStream:function(t){console.warn("**** InputStreamBrowser createLiveStream"),t&&t.setAttribute("autoplay","true");var e=so.createVideoStream(t);return e.ended=function(){return!1},e},createImageStream:function(){var t,e,n=null,r=0,o=0,i=0,a=!0,s=!1,c=null,l=0,d=null,u=!1,p=["canrecord","ended"],h={},f={x:0,y:0,type:"Point"},v={x:0,y:0,type:"XYSize"};function g(t,e){var n,r=h[t];if(r&&r.length>0)for(n=0;n<r.length;n++)r[n].apply(m,e)}var m={trigger:g,getWidth:function(){return t},getHeight:function(){return e},setWidth:function(e){t=e},setHeight:function(t){e=t},getRealWidth:function(){return r},getRealHeight:function(){return o},setInputStream:function(a){var u;n=a,!1===a.sequence?(d=a.src,l=1):(d=a.src,l=a.length),s=!1,ao.load(d,function(a){var l,d;if(c=a,a[0].tags&&a[0].tags.orientation)switch(a[0].tags.orientation){case 6:case 8:r=a[0].img.height,o=a[0].img.width;break;default:r=a[0].img.width,o=a[0].img.height}else r=a[0].img.width,o=a[0].img.height;t=null!==(l=n)&&void 0!==l&&l.size?r/o>1?n.size:Math.floor(r/o*n.size):r,e=null!==(d=n)&&void 0!==d&&d.size?r/o>1?Math.floor(o/r*n.size):n.size:o,v.x=t,v.y=e,s=!0,i=0,setTimeout(function(){g("canrecord",[])},0)},1,l,null===(u=n)||void 0===u?void 0:u.sequence,n)},ended:function(){return u},setAttribute:function(){},getConfig:function(){return n},pause:function(){a=!0},play:function(){a=!1},setCurrentTime:function(t){i=t},addEventListener:function(t,e){-1!==p.indexOf(t)&&(h[t]||(h[t]=[]),h[t].push(e))},clearEventHandlers:function(){Object.keys(h).forEach(function(t){return delete h[t]})},setTopRight:function(t){f.x=t.x,f.y=t.y},getTopRight:function(){return f},setCanvasSize:function(t){v.x=t.x,v.y=t.y},getCanvasSize:function(){return v},getFrame:function(){var t,e;return s?(a||(t=null===(e=c)||void 0===e?void 0:e[i],i<l-1?i++:setTimeout(function(){u=!0,g("ended",[])},0)),t):null}};return m}},co=so,lo={searchDirections:[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]],create:function(t,e){var n,r=t.data,o=e.data,i=this.searchDirections,a=t.size.x;function s(t,e,s,c){var l,d,u;for(l=0;l<i.length;l++){if(d=t.cy+i[t.dir][0],u=t.cx+i[t.dir][1],r[n=d*a+u]===e&&(0===o[n]||o[n]===s))return o[n]=s,t.cy=d,t.cx=u,!0;0===o[n]&&(o[n]=c),t.dir=(t.dir+1)%8}return!1}function c(t,e,n){return{dir:n,x:t,y:e,next:null,prev:null}}return{trace:function(t,e,n,r){return s(t,e,n,r)},contourTracing:function(e,n,r,o,i){return function(e,n,r,o,i){var a,l,d,u=null,p={cx:n,cy:e,dir:0};if(s(p,o,r,i)){a=u=c(n,e,p.dir),d=p.dir,(l=c(p.cx,p.cy,0)).prev=a,a.next=l,l.next=null,a=l;var h=t.size.x*t.size.y,f=0;do{p.dir=(p.dir+6)%8,s(p,o,r,i),d!==p.dir?(a.dir=p.dir,(l=c(p.cx,p.cy,0)).prev=a,a.next=l,l.next=null,a=l):(a.dir=d,a.x=p.cx,a.y=p.cy),d=p.dir}while((p.cx!==n||p.cy!==e)&&++f<h);u.prev=a.prev,a.prev.next=u}return u}(e,n,r,o,i)}}}},uo={createContour2D:function(){return{dir:null,index:null,firstVertex:null,insideContours:null,nextpeer:null,prevpeer:null}},CONTOUR_DIR:{CW_DIR:0,CCW_DIR:1,UNKNOWN_DIR:2},DIR:{OUTSIDE_EDGE:-32767,INSIDE_EDGE:-32766},create:function(t,e){var n=t.data,r=e.data,o=t.size.x,i=t.size.y,a=lo.create(t,e);return{rasterize:function(t){var e,s,c,l,d,u,p,h,f,v,g,m,y=[],b=0;for(m=0;m<400;m++)y[m]=0;for(y[0]=n[0],f=null,u=1;u<i-1;u++)for(l=0,s=y[0],d=1;d<o-1;d++)if(0===r[g=u*o+d])if((e=n[g])!==s){if(0===l)y[c=b+1]=e,s=e,null!==(p=a.contourTracing(u,d,c,e,uo.DIR.OUTSIDE_EDGE))&&(b++,l=c,(h=uo.createContour2D()).dir=uo.CONTOUR_DIR.CW_DIR,h.index=l,h.firstVertex=p,h.nextpeer=f,h.insideContours=null,null!==f&&(f.prevpeer=h),f=h);else if(null!==(p=a.contourTracing(u,d,uo.DIR.INSIDE_EDGE,e,l))){for((h=uo.createContour2D()).firstVertex=p,h.insideContours=null,h.dir=0===t?uo.CONTOUR_DIR.CCW_DIR:uo.CONTOUR_DIR.CW_DIR,h.index=t,v=f;null!==v&&v.index!==l;)v=v.nextpeer;null!==v&&(h.nextpeer=v.insideContours,null!==v.insideContours&&(v.insideContours.prevpeer=h),v.insideContours=h)}}else r[g]=l;else r[g]===uo.DIR.OUTSIDE_EDGE||r[g]===uo.DIR.INSIDE_EDGE?(l=0,s=r[g]===uo.DIR.INSIDE_EDGE?n[g]:y[0]):s=y[l=r[g]];for(v=f;null!==v;)v.index=t,v=v.nextpeer;return{cc:f,count:b}},debug:{drawContour:function(t,e){var n,r,o,i=t.getContext("2d"),a=e;for(i.strokeStyle="red",i.fillStyle="red",i.lineWidth=1,n=null!==a?a.insideContours:null;null!==a;){switch(null!==n?(r=n,n=n.nextpeer):(r=a,n=null!==(a=a.nextpeer)?a.insideContours:null),r.dir){case uo.CONTOUR_DIR.CW_DIR:i.strokeStyle="red";break;case uo.CONTOUR_DIR.CCW_DIR:i.strokeStyle="blue";break;case uo.CONTOUR_DIR.UNKNOWN_DIR:i.strokeStyle="green"}o=r.firstVertex,i.beginPath(),i.moveTo(o.x,o.y);do{o=o.next,i.lineTo(o.x,o.y)}while(o!==r.firstVertex);i.stroke()}}}}}},po=uo,ho={ctx:{binary:null},dom:{binary:null}},fo={x:0,y:0};function vo(t){var e,n,i,a,s,c,l,d=no.size.x,u=no.size.y,p=-no.size.x,h=-no.size.y;for(e=0,n=0;n<t.length;n++)e+=(a=t[n]).rad;for((e=(180*(e/=t.length)/Math.PI+90)%180-90)<0&&(e+=180),e=(180-e)*Math.PI/180,s=r.copy(r.create(),[Math.cos(e),Math.sin(e),-Math.sin(e),Math.cos(e)]),n=0;n<t.length;n++)for(a=t[n],i=0;i<4;i++)o.transformMat2(a.box[i],a.box[i],s);for(n=0;n<t.length;n++)for(a=t[n],i=0;i<4;i++)a.box[i][0]<d&&(d=a.box[i][0]),a.box[i][0]>p&&(p=a.box[i][0]),a.box[i][1]<u&&(u=a.box[i][1]),a.box[i][1]>h&&(h=a.box[i][1]);for(c=[[d,u],[p,u],[p,h],[d,h]],l=Yr.halfSample?2:1,s=r.invert(s,s),i=0;i<4;i++)o.transformMat2(c[i],c[i],s);for(i=0;i<4;i++)o.scale(c[i],c[i],l);return c}function go(t,e){no.subImageAsCopy(Zr,Be(t,e)),io.skeletonize()}function mo(t,e,n,r){var i,a,s,c,l=[],d=[],u=Math.ceil(ro.x/3);if(t.length>=2){for(i=0;i<t.length;i++)t[i].m00>u&&l.push(t[i]);if(l.length>=2){for(s=function(t){var e=function(t,e,n){var r,o,i,a,s=0,c=0,l=[];for(r=0;r<1;r++)l[r]={score:0,item:null};for(r=0;r<t.length;r++)if((o=n.apply(this,[t[r]]))>c)for((i=l[s]).score=o,i.item=t[r],c=Number.MAX_VALUE,a=0;a<1;a++)l[a].score<c&&(c=l[a].score,s=a);return l}(function(t,e,n){var r,o,i,a,s=[];function c(t){var e=!1;for(o=0;o<s.length;o++)(i=s[o]).fits(t)&&(i.add(t),e=!0);return e}for(n||(n="rad"),r=0;r<t.length;r++)c(a=Le(t[r],r,n))||s.push(je(a,.9));return s}(t),0,function(t){return t.getPoints().length}),n=[],r=[];if(1===e.length){n=e[0].item.getPoints();for(var o=0;o<n.length;o++)r.push(n[o].point)}return r}(l),a=0,i=0;i<s.length;i++){var p,h;a+=null!==(p=null===(h=s[i])||void 0===h?void 0:h.rad)&&void 0!==p?p:0}s.length>1&&s.length>=l.length/4*3&&s.length>t.length/4&&(a/=s.length,c={index:e[1]*fo.x+e[0],pos:{x:n,y:r},box:[o.clone([n,r]),o.clone([n+Zr.size.x,r]),o.clone([n+Zr.size.x,r+Zr.size.y]),o.clone([n,r+Zr.size.y])],moments:s,rad:a,vec:o.clone([Math.cos(a),Math.sin(a)])},d.push(c))}}return d}var yo=function(t,e){var n,r,o=t.getWidth(),i=t.getHeight(),a=e.halfSample?.5:1;t.getConfig().area&&(r=function(t,e,n){var r={width:t,height:e},o=Object.keys(n).reduce(function(t,e){if(!Ve[e])return t;var o=function(t){return{value:parseFloat(t),unit:(t.indexOf("%"),t.length,"%")}}(n[e]);return t[e]=Ve[e](o,r),t},{});return{sx:o.left,sy:o.top,sw:o.right-o.left,sh:o.bottom-o.top}}(o,i,t.getConfig().area),t.setTopRight({x:r.sx,y:r.sy}),t.setCanvasSize({x:o,y:i}),o=r.sw,i=r.sh);var s={x:Math.floor(o*a),y:Math.floor(i*a)};if(n=He(e.patchSize,s),t.setWidth(Math.max(Math.floor(Math.floor(s.x/n.x)*(1/a)*n.x),n.x)),t.setHeight(Math.max(Math.floor(Math.floor(s.y/n.y)*(1/a)*n.y),n.y)),t.getWidth()%n.x==0&&t.getHeight()%n.y==0)return!0;throw new Error("Image dimensions do not comply with the current settings: Width (".concat(o," )and height (").concat(i,") must a multiple of ").concat(n.x))},bo=g()(function t(){f()(this,t),y()(this,"config",void 0),y()(this,"inputStream",void 0),y()(this,"framegrabber",void 0),y()(this,"inputImageWrapper",void 0),y()(this,"stopped",!1),y()(this,"initAborted",!1),y()(this,"boxSize",void 0),y()(this,"resultCollector",void 0),y()(this,"decoder",void 0),y()(this,"workerPool",[]),y()(this,"onUIThread",!0),y()(this,"canvasContainer",new _o)}),xo=g()(function t(){f()(this,t),y()(this,"image",void 0),y()(this,"overlay",void 0)}),_o=g()(function t(){f()(this,t),y()(this,"ctx",void 0),y()(this,"dom",void 0),this.ctx=new xo,this.dom=new xo});function wo(t){if("undefined"==typeof document)return null;if(t instanceof HTMLElement&&t.nodeName&&1===t.nodeType)return t;var e="string"==typeof t?t:"#interactive.viewport";return document.querySelector(e)}function Eo(t,e,n){var r=function(t,e){var n=document.querySelector(t);return n||((n=document.createElement("canvas")).className=e),n}(t,e);return{canvas:r,context:r.getContext("2d",{willReadFrequently:n.willReadFrequently})}}function $o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function Ao(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$o(Object(n),!0).forEach(function(e){y()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$o(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var So=[];function ko(t){return Ao(Ao({},t),{},{inputStream:Ao(Ao({},t.inputStream),{},{target:null})})}function Co(t){if(t){var e=t().default;if(!e)return void self.postMessage({event:"error",message:"Quagga could not be created"})}var n;function r(t){self.postMessage({event:"processed",imageData:n.data,result:t},[n.data.buffer])}function o(){self.postMessage({event:"initialized",imageData:n.data},[n.data.buffer])}self.onmessage=function(t){if("init"===t.data.cmd){var i=t.data.config;i.numOfWorkers=0,n=new e.ImageWrapper({x:t.data.size.x,y:t.data.size.y},new Uint8Array(t.data.imageData)),e.init(i,o,n),e.onProcessed(r)}else"process"===t.data.cmd?(n.data=new Uint8Array(t.data.imageData),e.start()):"setReaders"===t.data.cmd?e.setReaders(t.data.readers):"registerReader"===t.data.cmd&&e.registerReader(t.data.name,t.data.reader)}}function Ro(t,e,n){var r,o,i=("undefined"!=typeof __factorySource__&&(o=__factorySource__),r=new Blob(["("+Co.toString()+")("+o+");"],{type:"text/javascript"}),window.URL.createObjectURL(r)),a={worker:new Worker(i),imageData:new Uint8Array(e.getWidth()*e.getHeight()),busy:!0};a.worker.onmessage=function(t){"initialized"===t.data.event?(URL.revokeObjectURL(i),a.busy=!1,a.imageData=new Uint8Array(t.data.imageData),n(a)):"processed"===t.data.event?(a.imageData=new Uint8Array(t.data.imageData),a.busy=!1,"undefined"!=typeof publishResult&&publishResult(t.data.result,a.imageData)):t.data.event},a.worker.postMessage({cmd:"init",size:{x:e.getWidth(),y:e.getHeight()},imageData:a.imageData,config:ko(t)},[a.imageData.buffer])}function Io(t,e,n,r){var o=t-So.length;if(0===o&&r)r();else if(o<0)So.slice(o).forEach(function(t){t.worker.terminate()}),So=So.slice(0,o),r&&r();else{var i=function(e){So.push(e),So.length>=t&&r&&r()};if(e)for(var a=0;a<o;a++)Ro(e,n,i)}}function Mo(t,e,n){for(var r=t.length;r--;)t[r][0]+=e,t[r][1]+=n}var To=function(){return g()(function t(){var e=this;f()(this,t),y()(this,"context",new bo),y()(this,"canRecord",function(t){var n;e.context.initAborted?t(/* @__PURE__ */new Error("Initialization was aborted")):e.context.config?e.context.inputStream?(yo(e.context.inputStream,null===(n=e.context.config)||void 0===n?void 0:n.locator),e.initCanvas(),e.context.framegrabber=Lr.create(e.context.inputStream,e.context.canvasContainer.dom.image),void 0===e.context.config.numOfWorkers&&(e.context.config.numOfWorkers=0),Io(e.context.config.numOfWorkers,e.context.config,e.context.inputStream,function(){var n;0===(null===(n=e.context.config)||void 0===n?void 0:n.numOfWorkers)&&e.initializeData(),e.ready(t)})):t(/* @__PURE__ */new Error("Input stream not initialized")):t(/* @__PURE__ */new Error("Configuration not initialized"))}),y()(this,"update",function(){if(e.context.onUIThread){var t,n=(o=e.context.framegrabber,So.length?!!(i=So.filter(function(t){return!t.busy})[0])&&(o.attachData(i.imageData),o.grab()&&(i.busy=!0,i.worker.postMessage({cmd:"process",imageData:i.imageData},[i.imageData.buffer])),!0):null);n||(e.context.framegrabber.attachData(null===(t=e.context.inputImageWrapper)||void 0===t?void 0:t.data),e.context.framegrabber.grab()&&(n||e.locateAndDecode()))}else{var r;e.context.framegrabber.attachData(null===(r=e.context.inputImageWrapper)||void 0===r?void 0:r.data),e.context.framegrabber.grab(),e.locateAndDecode()}var o,i}),y()(this,"_cachedStyleValues",void 0),y()(this,"_resolvedStyle",void 0)},[{key:"initBuffers",value:function(t){if(this.context.config){var e=function(t,e,n){var r=e||new Qe({x:t.getWidth(),y:t.getHeight(),type:"XYSize"}),i=[o.clone([0,0]),o.clone([0,r.size.y]),o.clone([r.size.x,r.size.y]),o.clone([r.size.x,0])];return function(t,e){Yr=e,oo=t,function(){Gr=Yr.halfSample?new Qe({x:oo.size.x/2|0,y:oo.size.y/2|0}):oo,ro=He(Yr.patchSize,Gr.size),fo.x=Gr.size.x/ro.x|0,fo.y=Gr.size.y/ro.y|0,no=new Qe(Gr.size,void 0,Uint8Array,!1),Kr=new Qe(ro,void 0,Array,!0);var t=ro.x*ro.y*4,e=new ArrayBuffer(Math.max(65536,Math.pow(2,Math.ceil(Math.log2(t)))));Zr=new Qe(ro,new Uint8Array(e,0,ro.x*ro.y)),Xr=new Qe(ro,new Uint8Array(e,ro.x*ro.y*3,ro.x*ro.y),void 0,!0),io=function(t,e,n){"use asm";var r=new t.Uint8Array(n),o=e.size|0,i=t.Math.imul;function a(t,e){t=t|0;e=e|0;var n=0;var i=0;var a=0;var s=0;var c=0;var l=0;var d=0;var u=0;for(n=1;(n|0)<(o-1|0);n=n+1|0){u=u+o|0;for(i=1;(i|0)<(o-1|0);i=i+1|0){s=u-o|0;c=u+o|0;l=i-1|0;d=i+1|0;a=(r[t+s+l|0]|0)+(r[t+s+d|0]|0)+(r[t+u+i|0]|0)+(r[t+c+l|0]|0)+(r[t+c+d|0]|0)|0;if((a|0)==5)r[e+u+i|0]=1;else r[e+u+i|0]=0}}}function s(t,e,n){t=t|0;e=e|0;n=n|0;var a=0;a=i(o,o)|0;while((a|0)>0){a=a-1|0;r[n+a|0]=(r[t+a|0]|0)-(r[e+a|0]|0)|0}}function c(t,e,n){t=t|0;e=e|0;n=n|0;var a=0;a=i(o,o)|0;while((a|0)>0){a=a-1|0;r[n+a|0]=r[t+a|0]|0|(r[e+a|0]|0)|0}}function l(t){t=t|0;var e=0;var n=0;n=i(o,o)|0;while((n|0)>0){n=n-1|0;e=(e|0)+(r[t+n|0]|0)|0}return e|0}function d(t,e){t=t|0;e=e|0;var n=0;n=i(o,o)|0;while((n|0)>0){n=n-1|0;r[t+n|0]=e}}function u(t,e){t=t|0;e=e|0;var n=0;var i=0;var a=0;var s=0;var c=0;var l=0;var d=0;var u=0;for(n=1;(n|0)<(o-1|0);n=n+1|0){u=u+o|0;for(i=1;(i|0)<(o-1|0);i=i+1|0){s=u-o|0;c=u+o|0;l=i-1|0;d=i+1|0;a=(r[t+s+l|0]|0)+(r[t+s+d|0]|0)+(r[t+u+i|0]|0)+(r[t+c+l|0]|0)+(r[t+c+d|0]|0)|0;if((a|0)>0)r[e+u+i|0]=1;else r[e+u+i|0]=0}}}function p(t,e){t=t|0;e=e|0;var n=0;n=i(o,o)|0;while((n|0)>0){n=n-1|0;r[e+n|0]=r[t+n|0]|0}}function h(t){t=t|0;var e=0;var n=0;for(e=0;(e|0)<(o-1|0);e=e+1|0){r[t+e|0]=0;r[t+n|0]=0;n=n+o-1|0;r[t+n|0]=0;n=n+1|0}for(e=0;(e|0)<(o|0);e=e+1|0){r[t+n|0]=0;n=n+1|0}}function f(){var t=0;var e=0;var n=0;var r=0;var f=0;var v=0;e=i(o,o)|0;n=e+e|0;r=n+e|0;d(r,0);h(t);do{a(t,e);u(e,n);s(t,n,n);c(r,n,r);p(e,t);f=l(t)|0;v=(f|0)==0|0}while(!v)}return{skeletonize:f}}({Math:Math,Uint8Array:Uint8Array},{size:ro.x},e),eo=new Qe({x:Gr.size.x/Zr.size.x|0,y:Gr.size.y/Zr.size.y|0},void 0,Array,!0),Jr=new Qe(eo.size,void 0,void 0,!0),to=new Qe(eo.size,void 0,Int32Array,!0)}(),function(){if(!Yr.useWorker&&"undefined"!=typeof document){ho.dom.binary=document.createElement("canvas"),ho.dom.binary.className="binaryBuffer";var t=!!Yr.willReadFrequently;ho.ctx.binary=ho.dom.binary.getContext("2d",{willReadFrequently:t}),ho.dom.binary.width=no.size.x,ho.dom.binary.height=no.size.y}}()}(r,n),{inputImageWrapper:r,boxSize:i}}(this.context.inputStream,t,this.context.config.locator),n=e.inputImageWrapper,r=e.boxSize;this.context.inputImageWrapper=n,this.context.boxSize=r}}},{key:"initializeData",value:function(t){this.context.config&&(this.initBuffers(t),this.context.decoder=lr.create(this.context.config.decoder,this.context.inputImageWrapper))}},{key:"getViewPort",value:function(){return this.context.config&&this.context.config.inputStream?wo(this.context.config.inputStream.target):null}},{key:"ready",value:function(t){this.context.inputStream.play(),t()}},{key:"initCanvas",value:function(){var t=function(t){var e,n,r,o,i,a,s,c,l,d,u=wo(null==t||null===(e=t.config)||void 0===e||null===(n=e.inputStream)||void 0===n?void 0:n.target),p=null==t||null===(r=t.config)||void 0===r||null===(o=r.inputStream)||void 0===o?void 0:o.type;if(!p)return null;var h=!1!==(null==t||null===(i=t.config)||void 0===i||null===(a=i.canvas)||void 0===a?void 0:a.createOverlay),f=function(t,e){var n=e.willReadFrequently,r=e.createOverlay,o=e.debug;if("undefined"!=typeof document){var i=Eo("canvas.imgBuffer","imgBuffer",{willReadFrequently:n,debug:o});i.canvas.width=t.x,i.canvas.height=t.y;var a={canvas:null,context:null};if(r){var s=Eo("canvas.drawingBuffer","drawingBuffer",{willReadFrequently:n,debug:o});s.canvas.width=t.x,s.canvas.height=t.y,a=s}return{dom:{image:i.canvas,overlay:a.canvas},ctx:{image:i.context,overlay:a.context}}}return null}(t.inputStream.getCanvasSize(),{willReadFrequently:!(null==t||null===(s=t.config)||void 0===s||null===(c=s.inputStream)||void 0===c||!c.willReadFrequently),createOverlay:h,debug:null==t||null===(l=t.config)||void 0===l||null===(d=l.locator)||void 0===d?void 0:d.debug});if(!f)return{dom:{image:null,overlay:null},ctx:{image:null,overlay:null}};var v=f.dom;return"undefined"!=typeof document&&u&&("ImageStream"!==p||u.contains(v.image)||u.appendChild(v.image),v.overlay&&!u.contains(v.overlay)&&u.appendChild(v.overlay)),f}(this.context);if(t){var e=t.ctx,n=t.dom;this.context.canvasContainer.dom.image=n.image,this.context.canvasContainer.dom.overlay=n.overlay,this.context.canvasContainer.ctx.image=e.image,this.context.canvasContainer.ctx.overlay=e.overlay}}},{key:"initInputStream",value:function(t){if(this.context.config&&this.context.config.inputStream){var e=this.context.config.inputStream,n=e.type,r=e.constraints,o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"LiveStream",e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;switch(t){case"VideoStream":var r=document.createElement("video");return{video:r,inputStream:n.createVideoStream(r)};case"ImageStream":return{inputStream:n.createImageStream()};case"LiveStream":var o=null;return e&&((o=e.querySelector("video"))||(o=document.createElement("video"),e.appendChild(o))),{video:o,inputStream:n.createLiveStream(o)};default:return console.error("* setupInputStream invalid type ".concat(t)),{video:null,inputStream:null}}}(n,this.getViewPort(),co),i=o.video,a=o.inputStream;"LiveStream"===n&&i&&Dr.request(i,r).then(function(){return a.trigger("canrecord")}).catch(function(e){return t(e)}),a&&(a.setAttribute("preload","auto"),a.setInputStream(this.context.config.inputStream),a.addEventListener("canrecord",this.canRecord.bind(void 0,t))),this.context.inputStream=a}}},{key:"getBoundingBoxes",value:function(){var t;return null!==(t=this.context.config)&&void 0!==t&&t.locate?function(){Yr.halfSample&&function(t,e){for(var n=t.data,r=t.size.x,o=e.data,i=0,a=r,s=n.length,c=r/2,l=0;a<s;){for(var d=0;d<c;d++)o[l]=Math.floor((n[i]+n[i+1]+n[a]+n[a+1])/4),l++,i+=2,a+=2;i+=r,a+=r}}(oo,Gr),Ue(Gr,no),no.zeroBorder();var t=function(){var t,e,n,r,o,i,a=[];for(t=0;t<fo.x;t++)for(e=0;e<fo.y;e++)go(n=Zr.size.x*t,r=Zr.size.y*e),Xr.zeroBorder(),Pe(Kr.data,0),i=po.create(Xr,Kr).rasterize(0),o=Kr.moments(i.count),a=a.concat(mo(o,[t,e],n,r));return a}();if(t.length<fo.x*fo.y*.05)return null;var e=function(t){var e,n,r=0,i=0;function a(){var t;for(t=0;t<to.data.length;t++)if(0===to.data[t]&&1===Jr.data[t])return t;return to.data.length}function s(t){var e,n,i,a,c,l=t%to.size.x,d=t/to.size.x|0;if(t<to.data.length)for(i=eo.data[t],to.data[t]=r,c=0;c<lo.searchDirections.length;c++)n=d+lo.searchDirections[c][0],e=l+lo.searchDirections[c][1],a=n*to.size.x+e,0!==Jr.data[a]?0===to.data[a]&&Math.abs(o.dot(eo.data[a].vec,i.vec))>.95&&s(a):to.data[a]=Number.MAX_VALUE}for(Pe(Jr.data,0),Pe(to.data,0),Pe(eo.data,null),e=0;e<t.length;e++)n=t[e],eo.data[n.index]=n,Jr.data[n.index]=1;for(Jr.zeroBorder();(i=a())<to.data.length;)r++,s(i);return r}(t);if(e<1)return null;var n=function(t){var e,n,r=[];for(e=0;e<t;e++)r.push(0);for(n=to.data.length;n--;)to.data[n]>0&&r[to.data[n]-1]++;return(r=r.map(function(t,e){return{val:t,label:e+1}})).sort(function(t,e){return e.val-t.val}),r.filter(function(t){return t.val>=5})}(e);return 0===n.length?null:function(t){var e,n,r,o,i=[],a=[];for(e=0;e<t.length;e++){for(n=to.data.length,i.length=0;n--;)to.data[n]===t[e].label&&(r=eo.data[n],i.push(r));(o=vo(i))&&a.push(o)}return a}(n)}():[[o.clone(this.context.boxSize[0]),o.clone(this.context.boxSize[1]),o.clone(this.context.boxSize[2]),o.clone(this.context.boxSize[3])]]}},{key:"transformResult",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/* @__PURE__ */new Set,r=this.context.inputStream.getTopRight(),o=r.x,i=r.y;if((0!==o||0!==i)&&(t.barcodes&&t.barcodes.forEach(function(t){return e.transformResult(t,n)}),t.line&&2===t.line.length&&function(t,e,n){t[0].x+=e,t[0].y+=n,t[1].x+=e,t[1].y+=n}(t.line,o,i),t.box&&!n.has(t.box)&&(Mo(t.box,o,i),n.add(t.box)),t.boxes&&t.boxes.length>0))for(var a=0;a<t.boxes.length;a++)n.has(t.boxes[a])||(Mo(t.boxes[a],o,i),n.add(t.boxes[a]))}},{key:"addResult",value:function(t,e){var n=this;e&&this.context.resultCollector&&(t.barcodes?t.barcodes.filter(function(t){return t.codeResult}).forEach(function(t){return n.addResult(t,e)}):t.codeResult&&this.context.resultCollector.addResult(e,this.context.inputStream.getCanvasSize(),t.codeResult))}},{key:"hasCodeResult",value:function(t){return!(!t||!(t.barcodes?t.barcodes.some(function(t){return t.codeResult}):t.codeResult))}},{key:"publishResult",value:function(){var t,e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1?arguments[1]:void 0,o=n;n&&this.context.onUIThread&&(this.transformResult(n),this.addResult(n,r),o=(null==n||null===(e=n.barcodes)||void 0===e?void 0:e.length)>0?n.barcodes:n),dr.publish("processed",o),this.hasCodeResult(n)&&dr.publish("detected",o);var i=this.context.config;i&&!1===i.locate&&null!==(t=i.inputStream)&&void 0!==t&&t.area&&this.drawScannerArea()}},{key:"locateAndDecode",value:(e=Ge()(Ze.a.mark(function t(){var e,n,r,o,i,a;return Ze.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.getBoundingBoxes())){t.next=3;break}return t.next=1,this.context.decoder.decodeFromBoundingBoxes(e);case 1:if(a=t.sent){t.next=2;break}a={};case 2:(r=a).boxes=e,this.publishResult(r,null===(n=this.context.inputImageWrapper)||void 0===n?void 0:n.data),t.next=5;break;case 3:return t.next=4,this.context.decoder.decodeFromImage(this.context.inputImageWrapper);case 4:(o=t.sent)?this.publishResult(o,null===(i=this.context.inputImageWrapper)||void 0===i?void 0:i.data):this.publishResult();case 5:case"end":return t.stop()}},t,this)})),function(){return e.apply(this,arguments)})},{key:"startContinuousUpdate",value:function(){var t,e=this,n=null,r=1e3/((null===(t=this.context.config)||void 0===t?void 0:t.frequency)||60);this.context.stopped=!1;var o=this.context,i=function(t){n=n||t,o.stopped||(t>=n&&(n+=r,e.update()),window.requestAnimationFrame(i))};i(performance.now())}},{key:"start",value:function(){var t,e;this.context.onUIThread&&"LiveStream"===(null===(t=this.context.config)||void 0===t||null===(e=t.inputStream)||void 0===e?void 0:e.type)?this.startContinuousUpdate():this.update()}},{key:"stop",value:(t=Ge()(Ze.a.mark(function t(){var e,n;return Ze.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.context.stopped=!0,this.context.framegrabber||(this.context.initAborted=!0),Io(0),null===(e=this.context.config)||void 0===e||!e.inputStream||"LiveStream"!==this.context.config.inputStream.type){t.next=2;break}return t.next=1,Dr.release();case 1:null===(n=this.context.inputStream)||void 0===n||n.clearEventHandlers();case 2:case"end":return t.stop()}},t,this)})),function(){return t.apply(this,arguments)})},{key:"setReaders",value:function(t){this.context.decoder&&this.context.decoder.setReaders(t),function(t){So.forEach(function(e){return e.worker.postMessage({cmd:"setReaders",readers:t})})}(t)}},{key:"registerReader",value:function(t,e){lr.registerReader(t,e),this.context.decoder&&this.context.decoder.registerReader(t,e),function(t,e){So.forEach(function(n){return n.worker.postMessage({cmd:"registerReader",name:t,reader:e})})}(t,e)}},{key:"drawScannerArea",value:function(){var t,e,n,r=null===(t=this.context.config)||void 0===t||null===(e=t.inputStream)||void 0===e?void 0:e.area;if(r){var o=this.context.canvasContainer.ctx.overlay;if(o&&!1===(null===(n=this.context.config)||void 0===n?void 0:n.locate)&&(void 0!==r.borderColor&&""!==r.borderColor||void 0!==r.borderWidth&&r.borderWidth>0||void 0!==r.backgroundColor&&""!==r.backgroundColor)&&this.context.boxSize){var i=this.context.inputStream.getTopRight(),a=i.x,s=i.y,c=this.context.boxSize,l=c[0],d=c[1],u=c[3],p=l[0]+a,h=l[1]+s,f=u[0]-l[0],v=d[1]-l[1];if(!this._cachedStyleValues||this._cachedStyleValues.borderColor!==r.borderColor||this._cachedStyleValues.borderWidth!==r.borderWidth||this._cachedStyleValues.backgroundColor!==r.backgroundColor){var g,m;this._cachedStyleValues={borderColor:r.borderColor,borderWidth:r.borderWidth,backgroundColor:r.backgroundColor};var y=void 0!==r.borderColor||void 0!==r.borderWidth,b=null!==(g=r.borderColor)&&void 0!==g?g:"rgba(0, 255, 0, 0.5)",x=y?null!==(m=r.borderWidth)&&void 0!==m?m:2:0,_=r.backgroundColor;this._resolvedStyle={color:b,width:x,bg:_}}var w=this._resolvedStyle;w.bg&&(o.fillStyle=w.bg,o.fillRect(p,h,f,v)),w.width>0&&(o.strokeStyle=w.color,o.lineWidth=w.width,o.strokeRect(p,h,f,v))}}}}]);var t,e}(),Oo=new To,Do=Oo.context,zo={init:function(t,e,n){var r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Oo;return e||(r=new Promise(function(t,n){e=function(e){e?n(e):t()}})),o.context.initAborted=!1,o.context.config=d()({},Pr,t),o.context.config.numOfWorkers>0&&(o.context.config.numOfWorkers=0),n?(o.context.onUIThread=!1,o.initializeData(n),e&&e()):o.initInputStream(e),r},start:function(t,e){var n;if(t)return e||(n=new Promise(function(t,n){e=function(e){e?n(e):t()}})),this.init(t,function(t){if(t)e(t);else try{Oo.start(),e()}catch(t){e(t)}}),n;if(!Do.framegrabber)throw new Error("start() was called before init() completed. Call init() first, or call start(config) to combine init and start.");return Oo.start()},stop:function(){return Oo.stop()},pause:function(){Do.stopped=!0},onDetected:function(t){t&&("function"==typeof t||"object"===c()(t)&&t.callback)?dr.subscribe("detected",t):console.trace("* warning: Quagga.onDetected called with invalid callback, ignoring")},offDetected:function(t){dr.unsubscribe("detected",t)},onProcessed:function(t){t&&("function"==typeof t||"object"===c()(t)&&t.callback)?dr.subscribe("processed",t):console.trace("* warning: Quagga.onProcessed called with invalid callback, ignoring")},offProcessed:function(t){dr.unsubscribe("processed",t)},setReaders:function(t){t?Oo.setReaders(t):console.trace("* warning: Quagga.setReaders called with no readers, ignoring")},registerReader:function(t,e){t?e?Oo.registerReader(t,e):console.trace("* warning: Quagga.registerReader called with no reader, ignoring"):console.trace("* warning: Quagga.registerReader called with no name, ignoring")},registerResultCollector:function(t){t&&"function"==typeof t.addResult&&(Do.resultCollector=t)},get canvas(){return Do.canvasContainer},drawScannerArea:function(){return Oo.drawScannerArea()},decodeSingle:function(t,e){var n=this,r=new To;return(t=d()({inputStream:{type:"ImageStream",sequence:!1,size:800,src:t.src},numOfWorkers:1,locator:{halfSample:!1}},t)).numOfWorkers>0&&(t.numOfWorkers=0),t.numOfWorkers>0&&("undefined"==typeof Blob||"undefined"==typeof Worker)&&(console.warn("* no Worker and/or Blob support - forcing numOfWorkers to 0"),t.numOfWorkers=0),new Promise(function(o,i){try{n.init(t,function(){Do.canvasContainer=r.context.canvasContainer,dr.once("processed",function(t){r.stop(),e&&e.call(null,t),o(t)},!0),r.start()},null,r)}catch(t){i(t)}})},get default(){return zo},Readers:a,CameraAccess:Dr,ImageDebug:Ke,ImageWrapper:Qe,ResultCollector:zr};e.default=zo}]).default})}),er=/* @__PURE__ */c(tr()),nr=!1;function rr(){return nr}function or(t,e){return nr&&(er.default.stop(),er.default.offDetected(),nr=!1),t.innerHTML="",new Promise(n=>{er.default.init({inputStream:{type:"LiveStream",target:t,constraints:{facingMode:"environment"}},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader"]},locate:!0,frequency:10},t=>{if(t){const e=t.message||"";return void(e.includes("Permission")||e.includes("permission")||e.includes("NotAllowedError")?n("permission_denied"):n("not_available"))}er.default.offDetected(),er.default.onDetected(t=>{const n=t?.codeResult;if(!n?.code)return;const r=n.decodedCodes?.filter(t=>"number"==typeof t.error).map(t=>t.error);r&&r.length>0&&r.reduce((t,e)=>t+e,0)/r.length>=.2||e(n.code)}),er.default.start(),nr=!0,n(null)})})}function ir(){nr&&(er.default.stop(),er.default.offDetected(),nr=!1)}function ar(){return"undefined"!=typeof navigator&&!!navigator.mediaDevices&&"function"==typeof navigator.mediaDevices.getUserMedia}async function sr(t,e){if("BarcodeDetector"in window)try{const n=new window.BarcodeDetector({formats:["ean_13","ean_8","upc_a","upc_e","code_128"]}),r=await createImageBitmap(t),o=await n.detect(r);return r.close(),o.length>0?(e(o[0].rawValue),null):"not_found"}catch(n){console.warn("BarcodeDetector: error, falling through to Quagga",n)}return new Promise(n=>{const r=new FileReader;r.onload=t=>{const r=t.target?.result;var o,i;(o=r,i=1280,new Promise(t=>{const e=new Image;e.onload=()=>{const n=Math.max(e.naturalWidth,e.naturalHeight);if(n<=i)return void t(o);const r=i/n,a=document.createElement("canvas");a.width=Math.round(e.naturalWidth*r),a.height=Math.round(e.naturalHeight*r);const s=a.getContext("2d");s?(s.drawImage(e,0,0,a.width,a.height),t(a.toDataURL("image/jpeg",.92))):t(o)},e.onerror=()=>t(o),e.src=o})).then(t=>{try{er.default.decodeSingle({src:t,numOfWorkers:0,decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader"]},locate:!0},t=>{if(!t?.codeResult?.code)return void n("not_found");const r=t.codeResult.decodedCodes?.filter(t=>"number"==typeof t.error).map(t=>t.error);r&&r.length>0&&r.reduce((t,e)=>t+e,0)/r.length>=.2?n("not_found"):(e(t.codeResult.code),n(null))})}catch{n("not_found")}}).catch(()=>{n("not_found")})},r.onerror=()=>{n("not_found")},r.readAsDataURL(t)})}function cr(t){return t.value.split(",").map(t=>t.trim()).filter(t=>t.length>0)}function lr(t,e){t.value=e.join(", ")}function dr(t,e,n){t.innerHTML="";for(const r of e){const e=document.createElement("span");e.className="barcode-chip",e.textContent=r;const o=document.createElement("span");o.className="barcode-chip-remove",o.textContent="×",o.addEventListener("click",()=>{const e=cr(n).filter(t=>t!==r);lr(n,e),dr(t,e,n)}),e.appendChild(o),t.appendChild(e)}}function ur(t,e,n,r){const o=cr(e);return!o.includes(t)&&(o.push(t),lr(e,o),dr(n,o,e),r&&r(t),!0)}function pr(t,e,n){const r=t.getElementById(`${e}-${ie}`),o=t.getElementById(`${e}-${ie}-input`),i=t.getElementById(`${e}-barcode-chips`);if(!r||!o||!i)return;dr(i,cr(r),r),o.hasAttribute("data-listeners-bound")||(o.addEventListener("keydown",t=>{if("Enter"===t.key){t.preventDefault();const e=o.value.trim();if(!e)return;ur(e,r,i,n),o.value=""}}),o.setAttribute("data-listeners-bound","true"));const a=t.getElementById(`${e}-${je}`),s=t.getElementById(`${e}-${Le}`),c=t.getElementById(`${e}-${Be}`),l=t.getElementById(`${e}-${Ue}`);if(!(a&&s&&c&&l))return;if(a.hasAttribute("data-listeners-bound"))return;const d=()=>{ir(),s.style.display="none"},u=t=>{const e=s.parentElement?.querySelector(".barcode-scanner-error");e&&e.remove();const n=document.createElement("div");n.className="barcode-scanner-error",n.textContent=t,s.insertAdjacentElement("afterend",n),setTimeout(()=>n.remove(),3e3)};a.addEventListener("click",async()=>{if(!ar()){const t=document.createElement("input");return t.type="file",t.accept="image/*",t.capture="environment",t.style.position="fixed",t.style.top="-9999px",t.style.left="-9999px",t.style.width="0",t.style.height="0",t.style.opacity="0",document.body.appendChild(t),t.addEventListener("change",async()=>{const e=t.files?.[0];document.body.removeChild(t),e&&await sr(e,t=>{ur(t,r,i,n)})&&u(a.dataset["scanner.no_barcode_found"]??"No barcode found in photo")}),void t.click()}if(rr())return void d();s.style.display="block";const t=await or(c,t=>{ur(t,r,i,n),d()});if(t){d();const e="permission_denied"===t?"modal.camera_permission_denied":"modal.camera_not_available",n="permission_denied"===t?"Camera access denied":"Camera not available",r=a.dataset[e]||n;u(r)}}),l.addEventListener("click",()=>{d()}),a.setAttribute("data-listeners-bound","true")}function hr(){rr()&&ir()}function fr(t){return t.value.split(",").map(t=>t.trim()).filter(t=>t.length>0)}function vr(t,e){t.value=e.join(", ")}function gr(t,e,n){t.innerHTML="";for(const r of e){const e=document.createElement("span");e.className="alias-chip",e.textContent=r;const o=document.createElement("span");o.className="alias-chip-remove",o.textContent="×",o.addEventListener("click",()=>{const e=fr(n).filter(t=>t!==r);vr(n,e),gr(t,e,n)}),e.appendChild(o),t.appendChild(e)}}function mr(t,e,n){const r=fr(e);return!r.includes(t)&&(r.push(t),vr(e,r),gr(n,r,e),!0)}function yr(t,e){const n=t.getElementById(`${e}-${ee}`),r=t.getElementById(`${e}-${ee}-input`),o=t.getElementById(`${e}-alias-chips`);n&&r&&o&&(gr(o,fr(n),n),r.hasAttribute("data-listeners-bound")||(r.setAttribute("data-listeners-bound","true"),r.addEventListener("keydown",t=>{if("Enter"===t.key){t.preventDefault();const e=r.value.trim();if(!e)return;for(const t of e.split(",")){const e=t.trim();e&&mr(e,n,o)}r.value=""}})))}var br=class{shadowRoot;formManager;validationManager;boundEscHandler=void 0;constructor(t,e,n){this.shadowRoot=t,this.formManager=e,this.validationManager=n,this.setupEventListeners()}openAddModal(t,e){const n=this.getElement(Jt);n?(this.validationManager.clearError(!0),n.classList.add($n),this.focusElementWithDelay(pe),this.setupExpiryThresholdInteraction(t),this.validationManager.setupValidationListeners(),pr(this.shadowRoot,"add",e),yr(this.shadowRoot,"add")):console.warn("Add modal not found in DOM")}closeAddModal(){hr();const t=this.getElement(Jt);t&&t.classList.remove($n)}openEditModal(t,e,n){const{hass:r,config:o,items:i}=e(),a=o.entity;if(!r.states[a])return console.warn(`Entity not found: ${a}`),{item:void 0,found:!1};const s=i.find(e=>e.name===t);if(!s)return console.warn(`Item not found: ${t}`),{item:void 0,found:!1};this.formManager.populateEditModal(s);const c=this.getElement(te);return c&&(this.validationManager.clearError(!1),c.classList.add($n),this.focusElementWithDelay(pe,!0),this.setupExpiryThresholdInteraction(n),this.validationManager.setupValidationListeners(),pr(this.shadowRoot,"edit"),yr(this.shadowRoot,"edit")),{item:s,found:!0}}closeEditModal(){hr();const t=this.getElement(te);t&&t.classList.remove($n)}closeAllModals(){this.closeAddModal(),this.closeEditModal()}handleModalClick(t){const e=t.target;return e.id===Jt||e.id===te?(t.preventDefault(),t.stopPropagation(),e.id===Jt?this.closeAddModal():this.closeEditModal(),!0):e.dataset.action===An||e.classList.contains(mn)&&e.closest(`#${Jt}`)?(t.preventDefault(),t.stopPropagation(),this.closeAddModal(),!0):e.classList.contains(mn)&&e.closest(`#${te}`)?(t.preventDefault(),t.stopPropagation(),this.closeEditModal(),!0):(e.closest(`.${wn}`),!1)}setupExpiryThresholdInteraction(t){this.setupExpiryThresholdFieldForModal(!0,t),this.setupExpiryThresholdFieldForModal(!1,t)}setupExpiryThresholdFieldForModal(t,e){const n=t?"add":"edit",r=this.getElement(`${n}-${de}`);r&&(this.updateExpiryThresholdState(t,e),r.addEventListener("input",()=>{this.updateExpiryThresholdState(t,e)}),r.addEventListener("change",()=>{this.updateExpiryThresholdState(t,e)}))}updateExpiryThresholdState(t,e){const n=t?"add":"edit",r=this.getElement(`${n}-${de}`),o=this.getElement(`${n}-${le}`);r&&o&&(""!==r.value.trim()?(o.disabled=!1,o.placeholder=Hn.localize(e,"modal.expiry_threshold_placeholder",void 0,"Days before expiry to alert (default: 0)"),o.value.trim()||(o.value="0")):(o.disabled=!0,o.value="",o.placeholder=Hn.localize(e,"modal.set_expiry_first",void 0,"Set expiry date first")))}setupEventListeners(){this.boundEscHandler||(this.boundEscHandler=this.handleEscapeKey.bind(this),document.addEventListener("keydown",this.boundEscHandler))}handleEscapeKey(t){"Escape"===t.key&&this.closeAllModals()}focusElementWithDelay(t,e=!1){setTimeout(()=>{const n=this.getElement(t);n&&(n.focus(),e&&n.select&&n.select())},Fn)}getElement(t){return this.shadowRoot.getElementById(t)}destroy(){hr(),this.boundEscHandler&&(document.removeEventListener("keydown",this.boundEscHandler),this.boundEscHandler=void 0)}},xr=class{shadowRoot;constructor(t){this.shadowRoot=t}highlightInvalidFields(t,e){const n=e?"add":"edit";this.clearFieldErrors(e);for(const r of t){let t="";switch(r.field){case"name":t=`${n}-${pe}`;break;case"quantity":t=`${n}-${fe}`;break;case"autoAddToListQuantity":t=`${n}-${oe}`;break;case"todoList":t=`${n}-${ve}`;break;case"expiryDate":t=`${n}-${de}`;break;case"expiryAlertDays":t=`${n}-${le}`}if(t){const e=this.getElement(t);e&&e.classList.add("input-error")}}}clearFieldErrors(t){const e=t?Jt:te,n=this.getElement(e);if(n)for(const r of n.querySelectorAll(".input-error"))r.classList.remove("input-error")}showError(t,e=!0){const n=e?"add":"edit",r=this.getElement(`${n}-validation-message`),o=r?.querySelector(".validation-text");if(r&&o){o.textContent=t,r.classList.add("show");const n=r.closest(".modal-content");n&&(n.scrollTop=0),setTimeout(()=>{this.clearError(e)},5e3)}else console.error("Validation Error:",t)}clearError(t=!0){const e=t?"add":"edit",n=this.getElement(`${e}-validation-message`);n&&n.classList.remove("show")}setupValidationListeners(){this.setupClearErrorsForModal(!0),this.setupClearErrorsForModal(!1)}setupClearErrorsForModal(t){const e=t?"add":"edit",n=this.getElement(`${e}-${fe}`);if(n?.hasAttribute("data-listeners-bound"))return;const r=[n,this.getElement(`${e}-${oe}`),this.getElement(`${e}-${ve}`),this.getElement(`${e}-${pe}`),this.getElement(`${e}-${de}`)],o=this.getElement(`${e}-${ne}`),i=this.getElement(`${e}-${oe}`),a=this.getElement(`${e}-${ve}`);for(const s of r)if(s){const e=()=>{s.classList.remove("input-error"),this.clearError(t)};s.addEventListener("input",e),s.addEventListener("change",e)}o&&o.addEventListener("change",()=>{o.checked||(i?.classList.remove("input-error"),a?.classList.remove("input-error"),this.clearError(t))}),n&&n.setAttribute("data-listeners-bound","true")}getElement(t){return this.shadowRoot.getElementById(t)}};function _r(t){const e=t.shadowRoot||document,n=e.getElementById(t.id),r=e.getElementById(`${t.id}-trigger`),o=e.getElementById(`${t.id}-dropdown`),i=e.getElementById(`${t.id}-options`),a=e.getElementById(`${t.id}-new-input`),s=e.getElementById(`${t.id}-add-btn`),c=e.getElementById(`${t.id}-chips`);if(!(n&&r&&o&&i))return;let l=!1;const d=new Set(t.options),u=n.value.trim();function p(){const t=n.value.trim();return t?t.split(",").map(t=>t.trim()).filter(Boolean):[]}function h(t){n.value=t.join(", ")}function f(){if(!c)return;const t=p(),e=r.querySelector(".modal-multi-select-label");if(0===t.length)return c.innerHTML="",void(e&&(e.style.display=""));e&&(e.style.display="none"),c.innerHTML="";for(const n of t){const t=document.createElement("span");t.className="modal-multi-select-chip",t.dataset.value=n,t.appendChild(document.createTextNode(n));const e=document.createElement("button");e.type="button",e.className="modal-multi-select-chip-remove",e.dataset.value=n,e.textContent="×",t.appendChild(e),c.appendChild(t)}}function v(){const t=p(),e=Array.from(d).sort((t,e)=>t.localeCompare(e,void 0,{sensitivity:"base"}));i.innerHTML="";for(const n of e){const e=document.createElement("label");e.className="modal-multi-select-option";const r=document.createElement("input");r.type="checkbox",r.value=n,r.checked=t.includes(n);const o=document.createElement("span");o.textContent=n,e.appendChild(r),e.appendChild(o),i.appendChild(e)}}function g(){if(!a)return;const t=a.value.trim();if(!t)return;d.add(t);const e=p();e.includes(t)||e.push(t),h(e),v(),f(),a.value=""}u&&u.split(",").map(t=>t.trim()).filter(Boolean).forEach(t=>d.add(t)),v(),f(),n.hasAttribute("data-listeners-bound")||(n.setAttribute("data-listeners-bound","true"),c&&c.addEventListener("click",t=>{t.stopPropagation();const e=t.target;if(e.classList.contains("modal-multi-select-chip-remove")){const t=e.dataset.value;t&&(h(p().filter(e=>e!==t)),v(),f())}}),r.addEventListener("click",t=>{t.stopPropagation(),e.querySelectorAll(".modal-multi-select-dropdown").forEach(t=>{t!==o&&(t.style.display="none")}),l=!l,o.style.display=l?"block":"none"}),i.addEventListener("change",t=>{const e=t.target;if("checkbox"!==e.type)return;const n=p();if(e.checked)n.includes(e.value)||n.push(e.value);else{const t=n.indexOf(e.value);t>=0&&n.splice(t,1)}h(n),f()}),o.addEventListener("click",t=>{t.stopPropagation()}),s&&s.addEventListener("click",t=>{t.stopPropagation(),g()}),a&&a.addEventListener("keydown",t=>{"Enter"===t.key&&(t.preventDefault(),t.stopPropagation(),g())}),e.addEventListener("click",t=>{r.contains(t.target)||o.contains(t.target)||(o.style.display="none",l=!1)}))}var wr=class{services;getInventoryId;onDataChanged;getFreshState;formManager;validationManager;uiManager;currentEditingItem=void 0;shadowRoot;constructor(t,e,n,r,o){this.services=e,this.getInventoryId=n,this.onDataChanged=r,this.getFreshState=o,this.formManager=new Jn(t),this.validationManager=new xr(t),this.uiManager=new br(t,this.formManager,this.validationManager),this.shadowRoot=t}openAddModal(t,e=[],n=[],r){this.uiManager.openAddModal(t,r),this.initializeAutoCompleteInputs("add",e,n)}closeAddModal(){this.uiManager.closeAddModal()}openEditModal(t,e,n,r=[],o=[]){this.uiManager.openEditModal(t,e,n).found&&(this.currentEditingItem=t,this.initializeAutoCompleteInputs("edit",r,o))}closeEditModal(){this.uiManager.closeEditModal(),this.currentEditingItem=void 0}getCurrentEditingItem(){return this.currentEditingItem}closeAllModals(){this.closeAddModal(),this.closeEditModal()}clearAddModalForm(){this.formManager.clearAddModalForm()}handleModalClick(t){return this.uiManager.handleModalClick(t)}destroy(){this.uiManager.destroy()}async addItem(t){try{this.validationManager.clearError(!0);const e=this.validateAndPrepareFormData(!0);if(!e)return!1;if(e.name&&this.itemNameExists(e.name))return this.validationManager.highlightInvalidFields([{field:"name",message:"Duplicate name"}],!0),this.validationManager.showError(`An item named "${e.name}" already exists in this inventory.`,!0),!1;const n=await this.services.addItem(this.getInventoryId(t.entity),e);return this.handleAddResult(n)}catch(e){return this.handleException(e,"adding",!0)}}async saveEditModal(t){if(!this.currentEditingItem)return!1;try{this.validationManager.clearError(!1);const e=this.validateAndPrepareFormData(!1);if(!e)return!1;if(e.name&&e.name.toLowerCase()!==this.currentEditingItem.toLowerCase()&&this.itemNameExists(e.name))return this.validationManager.highlightInvalidFields([{field:"name",message:"Duplicate name"}],!1),this.validationManager.showError(`An item named "${e.name}" already exists in this inventory.`,!1),!1;const n=await this.services.updateItem(this.getInventoryId(t.entity),this.currentEditingItem,e);return this.handleEditResult(n)}catch(e){return this.handleException(e,"updating",!1)}}validateAndPrepareFormData(t){const e=t?this.formManager.getRawAddModalData():this.formManager.getRawEditModalData(),n=Xn.validateRawFormData(e);return n.isValid?Xn.convertRawFormDataToItemData(e):(this.validationManager.highlightInvalidFields(n.errors,t),void this.validationManager.showError(n.errors[0].message,t))}handleAddResult(t){return t.success?(this.clearAddModalForm(),this.triggerDataChanged(),!0):(this.validationManager.showError(`Error adding item: ${t.error}`,!0),!1)}handleEditResult(t){return t.success?(this.triggerDataChanged(),!0):(this.validationManager.showError(`Error updating item: ${t.error}`,!1),!1)}handleException(t,e,n){return console.error(`Error in ${e} item:`,t),this.validationManager.showError(`An error occurred while ${e} the item`,n),!1}triggerDataChanged(){this.onDataChanged&&this.onDataChanged()}setFreshState(t){this.getFreshState=t}itemNameExists(t){if(!this.getFreshState)return!1;const{items:e}=this.getFreshState();return e.some(e=>e.name.toLowerCase()===t.toLowerCase())}initializeAutoCompleteInputs(t,e,n){setTimeout(()=>{_r({id:`${t}-${ue}`,options:e,shadowRoot:this.shadowRoot}),_r({id:`${t}-${ae}`,options:n,shadowRoot:this.shadowRoot})},0)}},Er={sanitizeHtml:t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),debounce(t,e){let n;return function(...r){n&&clearTimeout(n),n=setTimeout(()=>{n&&(clearTimeout(n),n=void 0),t(...r)},e)}},validateInventoryItems:t=>Array.isArray(t)?t.filter(t=>!(!t||"object"!=typeof t||!t.name||"string"!=typeof t.name)&&(t.quantity="number"==typeof t.quantity&&!Number.isNaN(t.quantity)&&t.quantity>=0?t.quantity:Mn.QUANTITY,t.unit="string"==typeof t.unit?t.unit:Mn.UNIT,t.category="string"==typeof t.category?t.category:Mn.CATEGORY,t.location="string"==typeof t.location?t.location:Mn.LOCATION,t.expiry_date="string"==typeof t.expiry_date?t.expiry_date:Mn.EXPIRY_DATE,t.expiry_alert_days="number"==typeof t.expiry_alert_days&&!Number.isNaN(t.expiry_alert_days)&&t.expiry_alert_days>=0?t.expiry_alert_days:Mn.EXPIRY_ALERT_DAYS,t.todo_list="string"==typeof t.todo_list?t.todo_list:Mn.TODO_LIST,t.auto_add_enabled=Boolean(t.auto_add_enabled),t.auto_add_to_list_quantity="number"==typeof t.auto_add_to_list_quantity&&!Number.isNaN(t.auto_add_to_list_quantity)&&t.auto_add_to_list_quantity>=0?t.auto_add_to_list_quantity:Mn.AUTO_ADD_TO_LIST_QUANTITY,t.auto_add_id_to_description_enabled=Boolean(t.auto_add_id_to_description_enabled),t.description="string"==typeof t.description?t.description:Mn.DESCRIPTION,t.desired_quantity="number"==typeof t.desired_quantity&&!Number.isNaN(t.desired_quantity)&&t.desired_quantity>=0?t.desired_quantity:Mn.DESIRED_QUANTITY,t.todo_quantity_placement="string"==typeof t.todo_quantity_placement?t.todo_quantity_placement:Mn.TODO_QUANTITY_PLACEMENT,!0)):[],groupItemsByCategory:t=>t.reduce((t,e)=>{const n=e.category||"Uncategorized";return t[n]||(t[n]=[]),t[n].push(e),t},{}),groupItemsByLocation:t=>t.reduce((t,e)=>{const n=e.location||"No Location";return t[n]||(t[n]=[]),t[n].push(e),t},{}),hasActiveFilters:t=>Boolean(t.searchText||t.category&&t.category.length>0||t.location&&t.location.length>0||t.quantity&&t.quantity.length>0||t.expiry&&t.expiry.length>0),preserveInputValues(t,e){const n={};for(const r of e){const e=t.getElementById(r);e&&("checkbox"===e.type?n[r]=e.checked:"number"===e.type?n[r]=Number.parseFloat(e.value)||0:n[r]=e.value)}return n},restoreInputValues(t,e){if(e)for(const[n,r]of Object.entries(e)){const e=t.getElementById(n);e&&("checkbox"===e.type?e.checked=Boolean(r):e.value=String(r))}}};function $r(t,e){const n=[];if(t.searchText){const r=Hn.localize(e,"active_filters.search",void 0,"Search");n.push(`<span class="filter-badge search">\n        ${r}: "${t.searchText}"\n      </span>`)}const r=(t,r,o,i)=>{if(t&&t.length>0){const a=Hn.localize(e,r,void 0,i),s=t.length>1?`${a}: ${t.length} ${Hn.localize(e,"active_filters.selected",void 0,"selected")}`:`${a}: ${t[0]}`;n.push(`<span class="filter-badge ${o}">${s}</span>`)}};if(r(t.category,"active_filters.category","category","Category"),r(t.location,"active_filters.location","location","Location"),r(t.quantity,"active_filters.quantity","quantity","Quantity"),t.expiry&&t.expiry.length>0){const r=Hn.localize(e,"active_filters.expiry",void 0,"Expiry");let o;o=t.expiry.length>1?`${r}: ${t.expiry.length} ${Hn.localize(e,"active_filters.selected",void 0,"selected")}`:`${r}: ${Hn.localize(e,`filters.${t.expiry[0]}`,void 0,t.expiry[0])}`,n.push(`<span class="filter-badge expiry">${o}</span>`)}return n}var Ar=class{shadowRoot;searchTimeout=void 0;boundSearchHandler=void 0;constructor(t){this.shadowRoot=t}getCurrentFilters(t){const e=localStorage.getItem(Un(t));if(e)try{const t=JSON.parse(e);return"string"==typeof t.category&&(t.category=t.category?[t.category]:[]),"string"==typeof t.location&&(t.location=t.location?[t.location]:[]),"string"==typeof t.expiry&&(t.expiry=t.expiry?[t.expiry]:[]),"string"==typeof t.quantity&&(t.quantity=t.quantity?[t.quantity]:[]),t.category=Array.isArray(t.category)?t.category:[],t.location=Array.isArray(t.location)?t.location:[],t.quantity=Array.isArray(t.quantity)?t.quantity:[],t.expiry=Array.isArray(t.expiry)?t.expiry:[],t.searchText=t.searchText||"",t.showAdvanced=!!t.showAdvanced,t.sortMethod=t.sortMethod||Mn.SORT_METHOD,t}catch(n){console.error("Error parsing saved filters:",n)}return{category:[],expiry:[],location:[],quantity:[],searchText:"",showAdvanced:!1,sortMethod:Mn.SORT_METHOD}}saveFilters(t,e){localStorage.setItem(Un(t),JSON.stringify(e))}clearFilters(t){const e=this.getCurrentFilters(t),n={category:[],expiry:[],location:[],quantity:[],searchText:"",showAdvanced:e.showAdvanced,sortMethod:e.sortMethod??Mn.SORT_METHOD};this.saveFilters(t,n)}filterItems(t,e){return e&&0!==Object.keys(e).length?t.filter(t=>!(e.searchText&&!this.matchesTextSearch(t,e.searchText))&&(!(e.category&&e.category.length>0&&!(Array.isArray(t.categories)&&t.categories.length>0?t.categories:[t.category||""]).some(t=>e.category.includes(t)))&&(!(e.location&&e.location.length>0&&!(Array.isArray(t.locations)&&t.locations.length>0?t.locations:[t.location||""]).some(t=>e.location.includes(t)))&&(!(e.quantity&&e.quantity.length>0&&!this.matchesQuantityFilter(t,e.quantity))&&!(e.expiry&&e.expiry.length>0&&!this.matchesExpiryFilter(t,e.expiry)))))):[...t]}matchesTextSearch(t,e){const n=e.toLowerCase(),r=(t.name??"").toLowerCase(),o=(t.unit??"").toLowerCase();return!(!r.includes(n)&&!o.includes(n))||(!!(Array.isArray(t.aliases)?t.aliases:[]).some(t=>t.toLowerCase().includes(n))||(!!(Array.isArray(t.categories)&&t.categories.length>0?t.categories:[t.category??""]).some(t=>t.toLowerCase().includes(n))||!!(Array.isArray(t.locations)&&t.locations.length>0?t.locations:[t.location??""]).some(t=>t.toLowerCase().includes(n))))}matchesQuantityFilter(t,e){return e.some(e=>{switch(e){case Ln.ZERO:return 0===t.quantity;case Ln.NONZERO:return t.quantity>0;default:return!0}})}matchesExpiryFilter(t,e){const n=/* @__PURE__ */new Date;return n.setHours(0,0,0,0),e.some(e=>{switch(e){case Bn.NONE:return!t.expiry_date;case Bn.EXPIRED:return!(!t.expiry_date||(t.quantity??0)<=0)&&Gn.isExpired(t.expiry_date);case Bn.SOON:{if(!t.expiry_date||(t.quantity??0)<=0)return!1;const e=t.expiry_alert_days??Mn.EXPIRY_ALERT_DAYS;return Gn.isExpiringSoon(t.expiry_date,e)}case Bn.FUTURE:{if(!t.expiry_date||(t.quantity??0)<=0)return!1;const e=new Date(t.expiry_date),r=t.expiry_alert_days??Mn.EXPIRY_ALERT_DAYS,o=new Date(n);return o.setDate(n.getDate()+r),e>o}default:return!0}})}sortItems(t,e,n){const r=[...t];switch(e){case zn:return this.sortByName(r);case Tn:return this.sortByCategory(r,n);case Dn:return this.sortByLocation(r,n);case Pn:return this.sortByQuantity(r,!1);case Nn:return this.sortByQuantity(r,!0);case On:return this.sortByExpiry(r);case jn:return this.sortZeroLast(r);default:return r}}sortByName(t){return t.sort((t,e)=>{const n=(t.name??"").toLowerCase().trim(),r=(e.name??"").toLowerCase().trim();return n.localeCompare(r,void 0,{numeric:!0,sensitivity:"base"})})}sortByLocation(t,e){return t.sort((t,n)=>{const r=Hn.localize(e,"common.no_location",void 0,"No Location"),o=(t.location??r).toLowerCase().trim(),i=(n.location??r).toLowerCase().trim(),a=o.localeCompare(i);return 0!==a?a:this.compareNames(t.name,n.name)})}sortByCategory(t,e){return t.sort((t,n)=>{const r=Hn.localize(e,"common.uncategorized",void 0,"Uncategorized"),o=(t.category??r).toLowerCase().trim(),i=(n.category??r).toLowerCase().trim(),a=o.localeCompare(i);return 0!==a?a:this.compareNames(t.name,n.name)})}sortByQuantity(t,e=!1){return t.sort((t,n)=>{const r=e?(t.quantity??0)-(n.quantity??0):(n.quantity??0)-(t.quantity??0);return 0!==r?r:this.compareNames(t.name,n.name)})}sortByExpiry(t){return t.sort((t,e)=>{const n=t.expiry_date??"9999-12-31",r=e.expiry_date??"9999-12-31",o=n.localeCompare(r);return 0!==o?o:this.compareNames(t.name,e.name)})}sortZeroLast(t){return t.sort((t,e)=>{const n=(t.quantity??0)>0,r=(e.quantity??0)>0;return n&&!r?-1:!n&&r?1:this.compareNames(t.name,e.name)})}compareNames(t,e){const n=(t??"").toLowerCase().trim(),r=(e??"").toLowerCase().trim();return n.localeCompare(r,void 0,{numeric:!0,sensitivity:"base"})}setupSearchInput(t,e){const n=this.shadowRoot.getElementById(pn);n&&(n.removeEventListener("input",this.boundSearchHandler),this.boundSearchHandler=n=>{const r=n.target.value;this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{const n=this.getCurrentFilters(t);n.searchText=r,this.saveFilters(t,n),e()},300)},n.addEventListener("input",this.boundSearchHandler))}updateFilterIndicators(t,e){const n=this.shadowRoot.getElementById(an);if(n)if(Er.hasActiveFilters(t)){const r=Hn.localize(e,"filters.hide_filters",void 0,"Hide Filters"),o=Hn.localize(e,"filters.filters",void 0,"Filters");n.textContent=t.showAdvanced?`${r} ●`:`${o} ●`,n.style.background="var(--warning-color, #ff9800)"}else{const r=Hn.localize(e,"filters.hide_filters",void 0,"Hide Filters"),o=Hn.localize(e,"filters.filters",void 0,"Filters");n.textContent=t.showAdvanced?r:o,n.style.background="var(--primary-color)"}this.updateActiveFiltersDisplay(t,e)}updateActiveFiltersDisplay(t,e){const n=this.shadowRoot.getElementById(rn),r=this.shadowRoot.getElementById(on);if(n&&r){const o=$r(t,e);o.length>0?(r.innerHTML=o.join(""),n.style.display="block"):n.style.display="none"}}},Sr=v`
  ${v`
  ha-card {
    padding: 16px;
  }

  .inventory-title {
    margin: 0;
    font-size: 1.3em;
    font-weight: bold;
    color: var(--primary-text-color);
  }

  .no-items {
    text-align: center;
    color: var(--secondary-text-color);
    padding: 20px;
  }

  .active-filters {
    display: block;
    padding: 8px 16px;
  }

  .filter-badges-container {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .filter-badge {
    display: inline-block;
    padding: 4px 12px;
    margin: 2px;
    color: white;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .filter-badge.search {
    background: var(--purple-color, #9c27b0);
  }

  .filter-badge.category {
    background: var(--orange-color, #ff9800);
  }

  .filter-badge.location {
    background: var(--blue-color, #2196f3);
  }

  .filter-badge.category,
  .filter-badge.location {
    font-style: normal !important;
    opacity: 1 !important;
  }

  .filter-badge.quantity {
    background: var(--green-color, #4caf50);
    color: white !important;
  }

  .filter-badge.expiry {
    background: var(--red-color, #ff5722);
    border-radius: 12px !important;
  }
`}
  ${v`
  .item-row {
    display: flex;
    flex-direction: column;
    padding: 12px;
    margin-bottom: 8px;
    border: 1px solid var(--divider-color, #e8e8e8);
    border-radius: 8px;
    gap: 8px;
  }

  .item-row.zero-quantity {
    opacity: 0.6;
    background: var(--secondary-background-color, #f5f5f5);
  }

  .item-row.auto-add-enabled {
    border-left: 4px solid var(--success-color, #4caf50);
  }

  .item-info {
    flex: 1;
    min-width: 0;
    max-width: calc(100% - 200px); /* Reserve space for buttons */
  }

  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .item-name {
    font-weight: bold;
    font-size: 1.1em;
    cursor: pointer;
  }

  .category {
    font-style: italic;
    font-size: 0.9em;
    opacity: 0.7;
  }

  .location {
    font-size: 0.9em;
    font-style: italic;
    opacity: 0.7;
  }

  .location-category {
    font-size: 0.9em;
    font-style: italic;
    opacity: 0.7;
  }

  .nutrition-summary {
    color: var(--secondary-text-color);
    font-size: 0.85em;
    font-weight: 500;
  }

  .item-footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;
  }

  .item-footer-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 8px;
  }

  .item-name-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 4px;
    max-width: 100%;
  }

  .item-name-line .item-name {
    flex: 0 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .item-name-line .category {
    flex-shrink: 0;
    font-size: 0.9em;
    opacity: 0.7;
    font-style: italic;
    white-space: nowrap;
    margin-left: auto;
  }

  .item-details {
    color: var(--secondary-text-color);
    font-size: 0.9em;
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }

  .item-controls {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
    align-items: center;
  }

  .quantity {
    font-weight: bold;
    background: var(--primary-color);
    color: white;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.85em;
  }

  .item-price {
    font-weight: 500;
    font-size: 0.85em;
    color: var(--secondary-text-color, #666);
  }

  .expiry {
    font-weight: 500;
    padding: 2px 6px;
    border-radius: 4px;
  }

  .expiry.expired {
    color: var(--error-color, #dc3545);
    background-color: rgba(220, 53, 69, 0.1);
  }

  .expiry.expires-today {
    color: var(--warning-color, #ff9800);
    background-color: rgba(255, 152, 0, 0.1);
    font-weight: 600;
  }

  .expiry.expiring-soon {
    color: var(--warning-color, #ff9800);
    background-color: rgba(255, 152, 0, 0.05);
  }

  .expiry.expiry-safe {
    color: var(--success-color, #4caf50);
    background-color: rgba(76, 175, 80, 0.05);
  }

  .auto-add-info {
    font-size: 0.8em;
    color: var(--success-color);
    font-weight: bold;
    width: 100%;
  }

  .category-group {
    margin-bottom: 20px;
  }

  .location-group {
    margin-bottom: 20px;
  }

  .category-header {
    font-weight: bold;
    font-size: 1.1em;
    color: var(--primary-color);
    margin-bottom: 8px;
    padding: 8px 12px;
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 6px;
    border-left: 4px solid var(--primary-color);
  }

  .location-header {
    font-weight: bold;
    font-size: 1.1em;
    color: var(--primary-color);
    margin-bottom: 8px;
    padding: 8px 12px;
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 6px;
    border-left: 4px solid var(--primary-color);
  }
`}
  ${v`
  .validation-message {
    background: var(--error-color, #f44336);
    color: white;
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 20px;
    font-size: 0.9em;
    display: none;
    align-items: center;
    gap: 8px;
    box-shadow: 0 2px 8px rgba(244, 67, 54, 0.3);
    border-left: 4px solid rgba(255, 255, 255, 0.3);
    position: relative;
  }

  .validation-message.show {
    display: flex;
    animation: slideInDown 0.3s ease-out;
  }

  .validation-message::before {
    content: '⚠️';
    font-size: 1.1em;
    flex-shrink: 0;
  }

  .validation-text {
    flex: 1;
    line-height: 1.4;
    font-weight: 500;
  }

  @keyframes slideInDown {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .input-error {
    border-color: var(--error-color, #f44336) !important;
    box-shadow: 0 0 0 2px rgba(244, 67, 54, 0.2) !important;
    animation: shake 0.3s ease-in-out;
  }

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-2px);
    }
    75% {
      transform: translateX(2px);
    }
  }

  .add-item-form {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 2px solid var(--divider-color);
  }

  .form-header {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 16px;
    color: var(--primary-text-color);
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--primary-text-color);
    font-size: 0.9em;
  }

  .form-row {
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
    min-width: 120px;
  }

  .input-group label {
    font-size: 0.85em;
    color: var(--secondary-text-color);
    font-weight: 500;
  }

  input:not([type='checkbox']),
  select,
  textarea {
    padding: 14px 16px;
    border: 2px solid var(--divider-color);
    border-radius: 8px;
    font-size: 16px;
    background: var(--card-background-color);
    color: var(--primary-text-color);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
    box-sizing: border-box;
  }

  textarea {
    font-family: inherit;
    resize: vertical;
  }

  input:not([type='checkbox']):focus,
  select:focus,
  textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--rgb-primary-color), 0.1);
    transform: translateY(-1px);
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--secondary-text-color);
    opacity: 0.7;
  }

  input[type='checkbox'] {
    appearance: none !important;
    width: 20px !important;
    height: 20px !important;
    border: 2px solid var(--primary-color) !important;
    border-radius: 4px !important;
    background: var(--card-background-color) !important;
    cursor: pointer !important;
    position: relative !important;
    margin: 0 !important;
    padding: 0 !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    flex-shrink: 0 !important;
  }

  input[type='checkbox']:checked {
    background: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
    transform: scale(1.05) !important;
  }

  input[type='checkbox']:checked::after {
    content: '✓' !important;
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) scale(1) !important;
    color: var(--text-primary-color, white) !important;
    font-size: 12px !important;
    font-weight: bold !important;
    animation: checkmark 0.2s ease-in-out !important;
  }

  @keyframes checkmark {
    0% {
      transform: translate(-50%, -50%) scale(0);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  input[type='checkbox']:hover {
    border-color: var(--primary-color) !important;
    box-shadow: 0 0 0 3px rgba(var(--rgb-primary-color, 25, 118, 210), 0.1) !important;
  }

  .checkbox-label {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.95em;
    color: var(--primary-text-color);
    font-weight: 500;
    margin: 0;
    line-height: 1.5;
    padding: 4px 0;
  }

  .auto-add-id-container {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .auto-add-section {
    border-top: 1px solid var(--divider-color);
    padding-top: 20px;
    margin-top: 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 12px;
  }

  .auto-add-section .checkbox-label {
    cursor: pointer;
    font-size: 0.95em;
    color: var(--primary-text-color);
    font-weight: 500;
    margin: 0;
    line-height: 1.5;
    flex: 1;
  }

  .auto-add-section .auto-add-controls {
    flex-basis: 100%;
    margin-top: 8px;
  }

  .auto-add-controls {
    display: none;
    margin-top: 16px;
    padding: 20px;
    background: var(--secondary-background-color, rgba(var(--rgb-primary-color), 0.05));
    border-radius: 12px;
    border: 1px solid var(--divider-color, #e9ecef);
  }

  .auto-add-header {
    display: block;
    font-size: 0.85em;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  input[type='checkbox']:checked + label + .auto-add-controls,
  input[type='checkbox']:checked ~ .auto-add-controls {
    display: block !important;
  }

  #item-auto-add:checked ~ .auto-add-controls,
  #modal-auto-add:checked ~ .auto-add-controls,
  [id$='auto-add']:checked ~ .auto-add-controls,
  [id$='AUTO_ADD']:checked ~ .auto-add-controls {
    display: block !important;
  }

  .auto-add-required {
    border-color: var(--primary-color) !important;
  }

  .auto-add-controls label:has(+ .auto-add-required)::after,
  .auto-add-controls .input-group:has(.auto-add-required) label::after {
    content: ' *';
    color: var(--error-color, #f44336);
    font-weight: bold;
  }

  .auto-add-controls.has-errors {
    border-color: var(--error-color, #f44336);
    background: rgba(244, 67, 54, 0.05);
  }

  .input-error:focus {
    animation: none; /* Stop shake when user focuses to fix */
  }

  .autocomplete-container {
    position: relative;
  }

  .autocomplete-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--card-background-color);
    border: 2px solid var(--divider-color);
    border-top: none;
    border-radius: 0 0 8px 8px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 1000;
    display: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .autocomplete-option {
    padding: 14px 16px;
    cursor: pointer;
    color: var(--primary-text-color);
    font-size: 16px;
    transition: background-color 0.2s ease;
    border-bottom: 1px solid var(--divider-color);
  }

  .autocomplete-option:last-child {
    border-bottom: none;
  }

  .autocomplete-option:hover,
  .autocomplete-option.selected {
    background: var(--secondary-background-color, rgba(var(--rgb-primary-color), 0.05));
  }

  .autocomplete-option.selected {
    background: var(--primary-color);
    color: var(--text-primary-color, white);
  }

  .autocomplete-container input {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 4l3 3 3-3' stroke='%23666' stroke-width='2' fill='none'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    padding-right: 48px;
  }

  .autocomplete-container input:focus {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 4l3 3 3-3' stroke='var(--primary-color)' stroke-width='2' fill='none'/%3E%3C/svg%3E");
  }

  .modal-multi-select-container {
    position: relative;
  }

  .modal-multi-select-trigger {
    padding: 10px 16px;
    border: 2px solid var(--divider-color);
    border-radius: 8px;
    background: var(--card-background-color);
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: 48px;
    gap: 4px;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  .modal-multi-select-trigger:hover {
    border-color: var(--primary-color);
  }

  .modal-multi-select-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .modal-multi-select-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: var(--primary-color);
    color: var(--text-primary-color, white);
    border-radius: 16px;
    padding: 2px 8px;
    font-size: 0.85em;
    line-height: 1.4;
    white-space: nowrap;
  }

  .modal-multi-select-chip-remove {
    background: transparent;
    border: none;
    color: var(--text-primary-color, white);
    cursor: pointer;
    font-size: 1.1em;
    line-height: 1;
    padding: 0 2px;
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }

  .modal-multi-select-chip-remove:hover {
    opacity: 1;
  }

  .modal-multi-select-label {
    color: var(--secondary-text-color);
    font-size: 16px;
  }

  .modal-multi-select-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--card-background-color);
    border: 2px solid var(--divider-color);
    border-top: none;
    border-radius: 0 0 8px 8px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .modal-multi-select-option {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    cursor: pointer;
    border-bottom: 1px solid var(--divider-color);
    gap: 12px;
  }

  .modal-multi-select-option:last-child {
    border-bottom: none;
  }

  .modal-multi-select-option:hover {
    background: var(--secondary-background-color);
  }

  .modal-multi-select-add-new {
    display: flex;
    padding: 8px;
    gap: 8px;
    border-top: 1px solid var(--divider-color);
  }

  .modal-multi-select-add-new input {
    flex: 1;
    min-width: 0;
  }

  .modal-multi-select-add-btn {
    flex-shrink: 0;
    padding: 8px 12px;
    border: 1px solid var(--primary-color);
    border-radius: 6px;
    background: transparent;
    color: var(--primary-color);
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.2s ease;
  }

  .modal-multi-select-add-btn:hover {
    background: var(--primary-color);
    color: var(--text-primary-color, white);
  }

  .multi-select-container {
    position: relative;
  }

  .multi-select-trigger {
    padding: 14px 16px;
    border: 2px solid var(--divider-color);
    border-radius: 8px;
    background: var(--card-background-color);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
  }

  .multi-select-trigger:hover {
    border-color: var(--primary-color);
  }

  .multi-select-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--card-background-color);
    border: 2px solid var(--divider-color);
    border-top: none;
    border-radius: 0 0 8px 8px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .multi-select-option {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    cursor: pointer;
    border-bottom: 1px solid var(--divider-color);
    gap: 12px;
  }

  .multi-select-option:last-child {
    border-bottom: none;
  }

  .multi-select-option:hover {
    background: var(--secondary-background-color);
  }

  .multi-select-option input[type='checkbox'] {
    margin: 0;
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .multi-select-option span {
    flex: 1;
    user-select: none;
  }

  .multi-select-arrow {
    transition: transform 0.3s ease;
    margin-left: 8px;
  }

  .multi-select-trigger.open .multi-select-arrow {
    transform: rotate(180deg);
  }

  .barcode-tag-container {
    border: 2px solid var(--divider-color);
    border-radius: 8px;
    padding: 8px;
    background: var(--card-background-color);
    transition: all 0.3s ease;
  }

  .barcode-tag-container:focus-within {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--rgb-primary-color), 0.1);
  }

  .barcode-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .barcode-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: var(--primary-color);
    color: var(--text-primary-color, white);
    border-radius: 16px;
    padding: 2px 8px;
    font-size: 0.85em;
    line-height: 1.4;
    white-space: nowrap;
  }

  .barcode-chip-remove {
    cursor: pointer;
    opacity: 0.8;
    font-size: 1.1em;
    line-height: 1;
    padding: 0 2px;
    transition: opacity 0.2s ease;
  }

  .barcode-chip-remove:hover {
    opacity: 1;
  }

  .barcode-input-row {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 4px;
  }

  .barcode-input-row input {
    border: none !important;
    box-shadow: none !important;
    padding: 8px !important;
    font-size: 14px !important;
    flex: 1;
    min-width: 0;
  }

  .barcode-input-row input:focus {
    border: none !important;
    box-shadow: none !important;
    transform: none !important;
  }

  .barcode-scan-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;
    color: var(--secondary-text-color);
    border-radius: 4px;
    transition: color 0.2s ease;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .barcode-scan-btn:hover {
    color: var(--primary-color);
  }

  .barcode-scanner-container {
    position: relative;
    background: #000;
    border-radius: 8px;
    margin-top: 8px;
    overflow: hidden;
  }

  .barcode-scanner-viewport {
    max-height: 250px;
    overflow: hidden;
  }

  .barcode-scanner-viewport video {
    width: 100%;
    display: block;
  }

  .barcode-scanner-viewport canvas {
    display: none;
  }

  .barcode-scanner-close {
    position: absolute;
    top: 8px;
    right: 8px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 4px 10px;
    font-size: 0.8em;
    cursor: pointer;
    z-index: 1;
    transition: background 0.2s ease;
  }

  .barcode-scanner-close:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  .barcode-scanner-error {
    color: var(--error-color, #f44336);
    font-size: 0.8em;
    margin-top: 4px;
    padding: 0 4px;
  }

  .alias-tag-container {
    border: 2px solid var(--divider-color);
    border-radius: 8px;
    padding: 8px;
    background: var(--card-background-color);
    transition: all 0.3s ease;
  }

  .alias-tag-container:focus-within {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--rgb-primary-color), 0.1);
  }

  .alias-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .alias-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: var(--primary-color);
    color: var(--text-primary-color, white);
    border-radius: 16px;
    padding: 2px 8px;
    font-size: 0.85em;
    line-height: 1.4;
    white-space: nowrap;
  }

  .alias-chip-remove {
    cursor: pointer;
    opacity: 0.8;
    font-size: 1.1em;
    line-height: 1;
    padding: 0 2px;
    transition: opacity 0.2s ease;
  }

  .alias-chip-remove:hover {
    opacity: 1;
  }

  .alias-input-row {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 4px;
  }

  .alias-input-row input {
    border: none !important;
    box-shadow: none !important;
    padding: 8px !important;
    font-size: 14px !important;
    flex: 1;
    min-width: 0;
  }

  .alias-input-row input:focus {
    border: none !important;
    box-shadow: none !important;
    transform: none !important;
  }

  .product-picker {
    margin-top: 8px;
    background: var(--secondary-background-color, rgba(var(--rgb-primary-color), 0.05));
    border-radius: 8px;
    padding: 12px;
  }

  .product-picker-label {
    font-size: 0.85em;
    color: var(--secondary-text-color);
    margin-bottom: 8px;
    font-weight: 500;
  }

  .product-picker-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .product-picker-item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    cursor: pointer;
    background: var(--card-background-color);
    transition: all 0.2s ease;
  }

  .product-picker-item:hover {
    border-color: var(--primary-color);
    background: rgba(var(--rgb-primary-color, 25, 118, 210), 0.05);
  }

  .product-picker-provider {
    font-size: 0.75em;
    background: var(--primary-color);
    color: var(--text-primary-color, white);
    border-radius: 10px;
    padding: 2px 8px;
    white-space: nowrap;
    font-weight: 500;
  }

  .product-picker-name {
    font-weight: 600;
    font-size: 0.95em;
    color: var(--primary-text-color);
  }

  .product-picker-detail {
    font-size: 0.8em;
    color: var(--secondary-text-color);
    flex-basis: 100%;
  }
`}
  ${v`
  button {
    padding: 14px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    min-height: 48px;
  }

  .primary-btn,
  .save-btn {
    background: var(--primary-color);
    color: var(--text-primary-color, white);
  }

  .primary-btn:hover,
  .save-btn:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(var(--rgb-primary-color), 0.3);
  }

  .add-new-btn {
    padding: 12px 16px;
    background: var(--primary-color);
    color: var(--text-primary-color, white);
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .add-new-btn:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .add-new-btn:active {
    transform: translateY(0);
  }

  .control-btn {
    padding: 8px 12px;
    font-size: 16px;
    font-weight: bold;
    min-width: 40px;
    min-height: 40px;
    background: var(--primary-color);
    color: var(--text-primary-color);
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .control-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    background: var(--disabled-color, #ccc);
    transform: none;
    box-shadow: none;
  }

  .add-btn {
    width: 100%;
    margin-top: 8px;
    padding: 16px;
    font-size: 16px;
    font-weight: bold;
  }

  .toggle-btn {
    padding: 12px 16px;
    background: var(--primary-color);
    color: var(--text-primary-color, white);
    border: none;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;
  }

  .toggle-btn:hover {
    opacity: 0.9;
  }

  .toggle-btn.has-active-filters {
    background: var(--warning-color, #ff9800) !important;
    position: relative;
  }

  .toggle-btn.has-active-filters::after {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    width: 8px;
    height: 8px;
    background: var(--error-color, #f44336);
    border-radius: 50%;
    border: 2px solid var(--card-background-color, white);
  }

  .cancel-btn {
    background: var(--secondary-background-color, #f0f0f0);
    color: var(--primary-text-color);
    border: 2px solid var(--divider-color, #e0e0e0);
  }

  .cancel-btn:hover {
    background: var(--primary-background-color);
    transform: translateY(-1px);
  }

  .close-btn {
    background: transparent;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: var(--secondary-text-color);
    padding: 8px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s ease;
    min-height: auto;
  }

  .close-btn:hover {
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
  }
`}
  ${v`
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
  }

  .modal.show {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    background-color: var(--card-background-color);
    padding: 32px;
    border-radius: 16px;
    width: 90%;
    max-width: 500px;
    max-height: 85vh;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    position: relative;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
    padding-bottom: 16px;
    border-bottom: 2px solid var(--divider-color);
  }

  .modal-header h3 {
    font-size: 1.5em;
    font-weight: 700;
    color: var(--primary-text-color);
    margin: 0;
  }

  .modal-title {
    font-size: 1.5em;
    font-weight: 700;
    color: var(--primary-text-color);
  }

  .nutrition-section {
    margin: 20px 0 4px;
    border-top: 1px solid var(--divider-color);
    border-bottom: 1px solid var(--divider-color);
    padding: 12px 0;
  }

  .nutrition-section summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .nutrition-fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 16px;
    margin-top: 16px;
  }

  .nutrition-field label {
    display: block;
    margin-bottom: 4px;
    font-size: 0.9em;
  }

  .nutrition-input {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .nutrition-input input {
    min-width: 0;
    width: 100%;
  }

  .nutrition-input span {
    color: var(--secondary-text-color);
    font-size: 0.85em;
  }

  .modal-buttons {
    display: flex;
    gap: 16px;
    margin-top: 32px;
    justify-content: flex-end;
  }

  .modal-buttons button {
    padding: 12px 24px;
    min-width: 100px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .modal-secondary-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--divider-color);
  }

  .history-link {
    background: transparent;
    border: none;
    color: var(--primary-color);
    cursor: pointer;
    font-size: 0.9em;
    padding: 4px 0;
    text-decoration: underline;
    transition: opacity 0.2s ease;
  }

  .history-link:hover {
    opacity: 0.8;
  }

  .delete-btn {
    background: transparent;
    border: 1px solid var(--error-color, #f44336);
    color: var(--error-color, #f44336);
    cursor: pointer;
    font-size: 0.85em;
    font-weight: 500;
    padding: 6px 16px;
    border-radius: 6px;
    transition: all 0.2s ease;
  }

  .delete-btn:hover {
    background: var(--error-color, #f44336);
    color: var(--text-primary-color, white);
  }

  .history-view h3 {
    font-size: 1.3em;
    font-weight: 700;
    color: var(--primary-text-color);
    margin: 0 0 16px;
  }

  .history-timeline {
    max-height: 400px;
    overflow-y: auto;
  }

  .history-event {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 1px solid var(--divider-color);
  }

  .history-event:last-child {
    border-bottom: none;
  }

  .history-icon {
    font-size: 1.2em;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .history-details {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  .history-type {
    font-weight: 600;
    font-size: 0.9em;
    color: var(--primary-text-color);
    text-transform: capitalize;
  }

  .history-qty {
    font-size: 0.85em;
    color: var(--secondary-text-color);
    font-family: monospace;
  }

  .history-time {
    font-size: 0.8em;
    color: var(--secondary-text-color);
    opacity: 0.8;
  }

  .history-empty {
    text-align: center;
    padding: 24px 16px;
    color: var(--secondary-text-color);
    font-style: italic;
  }

  .history-tabs {
    display: flex;
    border-bottom: 2px solid var(--divider-color);
    margin-bottom: 20px;
  }

  .history-tab {
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    padding: 8px 16px;
    margin-bottom: -2px;
    font-weight: 600;
    font-size: 0.95em;
    color: var(--secondary-text-color);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .history-tab:hover {
    color: var(--primary-text-color);
  }

  .history-tab.active {
    color: var(--primary-color);
    border-bottom-color: var(--primary-color);
  }

  .consumption-metrics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 16px;
    margin-bottom: 24px;
  }

  .metric-card {
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
    border-radius: 10px;
    padding: 14px;
    text-align: center;
  }

  .metric-value {
    font-size: 1.6em;
    font-weight: 700;
    color: var(--primary-text-color);
  }

  .metric-label {
    font-size: 0.8em;
    color: var(--secondary-text-color);
    margin-top: 4px;
  }

  .depletion-critical {
    color: var(--error-color, #f44336);
  }

  .depletion-warning {
    color: var(--warning-color, #ff9800);
  }

  .depletion-safe {
    color: var(--success-color, #4caf50);
  }

  .window-pills {
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  .window-pill {
    background: transparent;
    border: 1px solid var(--divider-color);
    border-radius: 16px;
    padding: 4px 12px;
    font-size: 0.8em;
    font-weight: 500;
    color: var(--secondary-text-color);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .window-pill:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

  .window-pill.active {
    background: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--text-primary-color, white);
  }

  .consumption-empty {
    text-align: center;
    padding: 32px 16px 24px;
    color: var(--secondary-text-color);
  }

  .consumption-empty-icon {
    font-size: 2.5em;
    margin-bottom: 12px;
  }

  .consumption-empty-title {
    font-weight: 600;
    font-size: 1.1em;
    color: var(--primary-text-color);
    margin: 0 0 8px;
  }

  .consumption-empty-detail {
    font-size: 0.9em;
    margin: 0;
  }

  .consumption-loading {
    text-align: center;
    padding: 32px 16px;
    color: var(--secondary-text-color);
  }
`}
  ${v`
  .controls-row {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 16px;
    margin-top: 8px;
    flex-wrap: wrap;
  }

  .controls-row .sorting-controls {
    flex: 1;
    margin-bottom: 0;
  }

  .search-controls {
    margin-bottom: 20px;
    padding: 12px;
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 8px;
  }

  .search-row {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 0;
  }

  .search-row input {
    flex: 1;
    min-width: 0;
  }

  .search-row input.has-value {
    border-color: var(--warning-color, #ff9800);
    box-shadow: 0 0 0 1px var(--warning-color, #ff9800);
  }

  .sorting-controls {
    margin-bottom: 20px;
    padding: 12px;
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .sorting-controls label {
    font-weight: bold;
    color: var(--primary-text-color);
    white-space: nowrap;
    margin-bottom: 0;
  }

  .sorting-controls select {
    flex: 1;
    max-width: 200px;
  }

  .advanced-filters {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--divider-color);
  }

  .filter-row {
    display: flex;
    gap: 16px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  .filter-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 120px;
    flex: 1;
  }

  .filter-group label {
    font-size: 0.9em;
    font-weight: 500;
    color: var(--secondary-text-color);
  }

  .filter-actions {
    display: flex;
    gap: 12px;
    margin-top: 16px;
  }

  .filter-actions button {
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  #apply-filters {
    background: var(--primary-color);
    color: var(--text-primary-color, white);
    border: none;
  }

  #clear-filters {
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
    border: 1px solid var(--divider-color);
  }

  #apply-filters:hover,
  #clear-filters:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`}
  ${v`
  @media (max-width: 768px) {
    .controls-row {
      flex-direction: column;
      align-items: stretch;
    }

    .add-new-btn {
      width: 100%;
      margin-top: 8px;
    }

    .modal-content {
      padding: 24px;
      margin: 16px;
      width: calc(100% - 32px);
      border-radius: 12px;
    }

    .form-row {
      flex-direction: column;
      gap: 12px;
    }

    .modal-buttons {
      flex-direction: column-reverse;
    }

    .modal-buttons button {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .item-row {
      flex-wrap: nowrap;
    }

    .add-btn {
      width: auto;
      margin-top: 0;
    }
  }
`}
  ${v`
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 12px 16px;
    gap: 8px;
    border-bottom: 1px solid var(--divider-color);
    background-color: var(--card-background-color);
  }

  .header-content {
    flex: 1;
    min-width: 0; /* Allows text to wrap */
  }

  .inventory-title {
    margin: 0 0 2px 0;
    font-size: 1em;
    font-weight: 500;
    color: var(--primary-text-color);
    line-height: 1.2;
  }

  .inventory-description {
    margin: 2px 0 0 0;
    font-size: 0.75em;
    color: var(--secondary-text-color);
    line-height: 1.2;
    opacity: 0.8;
    max-width: 300px;
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .overflow-menu-container {
    position: relative;
  }

  .overflow-menu-btn {
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: var(--primary-text-color);
    padding: 4px 8px;
    border-radius: 4px;
    line-height: 1;
    transition: background-color 0.2s ease;
  }

  .overflow-menu-btn:hover {
    background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
  }

  .overflow-menu {
    position: absolute;
    right: 0;
    top: 100%;
    background: var(--card-background-color);
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 100;
    min-width: 140px;
    overflow: hidden;
  }

  .overflow-menu-item {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 16px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 0.9em;
    color: var(--primary-text-color);
    transition: background-color 0.2s ease;
    text-align: left;
  }

  .overflow-menu-item:hover {
    background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
  }

  .overflow-menu-item + .overflow-menu-item {
    border-top: 1px solid var(--divider-color);
  }

  .expiry-indicators {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }

  .expiring-badge,
  .expired-badge {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.75em;
    font-weight: 500;
    white-space: nowrap;
    border: none;
    cursor: pointer;
    font-family: inherit;
    line-height: inherit;
    transition: opacity 0.15s ease;
  }

  .expiring-badge:hover,
  .expired-badge:hover {
    opacity: 0.75;
  }

  .expiring-badge {
    background-color: rgba(255, 152, 0, 0.12);
    color: var(--warning-color, #e68900);
  }

  .expired-badge {
    background-color: rgba(244, 67, 54, 0.12);
    color: var(--error-color, #d32f2f);
  }

  .expiring-badge ha-icon,
  .expired-badge ha-icon {
    --mdc-icon-size: 13px;
  }

  .header-scan-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--primary-text-color);
    padding: 4px 8px;
    border-radius: 4px;
    line-height: 1;
    display: flex;
    align-items: center;
    transition: background-color 0.2s ease;
  }

  .header-scan-btn:hover {
    background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
  }

  .header-scan-btn svg,
  .header-scan-btn svg * {
    pointer-events: none;
    display: block;
  }

  .scan-panel {
    border-bottom: 1px solid var(--divider-color);
    padding: 8px 16px;
  }

  .scan-panel-viewport-container {
    position: relative;
  }

  .scan-panel-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    color: var(--secondary-text-color);
    font-size: 0.85em;
  }

  .scan-panel-viewport {
    max-height: 250px;
    background: #000;
    border-radius: 8px;
    overflow: hidden;
  }

  .scan-panel-viewport video {
    width: 100%;
    display: block;
  }

  .scan-panel-close {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 4px 12px;
    cursor: pointer;
    font-size: 0.8em;
  }

  .scan-action-bar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 8px 0;
  }

  .scan-info-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .scan-barcode-label {
    font-weight: 500;
    font-size: 0.9em;
    color: var(--primary-text-color);
  }

  .scan-buttons-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .scan-go-btn {
    padding: 6px 20px;
    border: none;
    border-radius: 8px;
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    cursor: pointer;
    font-size: 0.85em;
    font-weight: 500;
  }

  .scan-go-btn:hover {
    opacity: 0.9;
  }

  .scan-cancel-btn {
    padding: 6px 14px;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    background: transparent;
    color: var(--primary-text-color);
    cursor: pointer;
    font-size: 0.85em;
  }

  .scan-cancel-btn:hover {
    background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
  }

  .scan-item-name {
    font-weight: 600;
    font-size: 0.85em;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 200px;
    display: inline-block;
  }

  .scan-item-quantity {
    font-size: 0.8em;
    color: var(--secondary-text-color);
    display: inline-block;
  }

  .scan-existing-controls {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .scan-add-btn {
    padding: 6px 20px;
    border: 1px solid var(--primary-color);
    border-radius: 8px;
    background: transparent;
    color: var(--primary-color);
    cursor: pointer;
    font-size: 0.85em;
    font-weight: 500;
  }

  .scan-add-btn:hover {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }

  .scan-panel-error {
    color: var(--error-color, #d32f2f);
    font-size: 0.85em;
    padding: 4px 0;
  }

  @media (max-width: 600px) {
    .card-header {
      padding: 10px 12px;
    }

    .inventory-description {
      max-width: none;
    }
  }

  @media (max-width: 480px) {
    .card-header {
      padding: 8px 12px;
    }

    .inventory-title {
      font-size: 0.95em;
    }

    .inventory-description {
      font-size: 0.7em;
    }

    .expiring-badge,
    .expired-badge {
      padding: 2px 6px;
      font-size: 0.7em;
    }

    .expiring-badge ha-icon,
    .expired-badge ha-icon {
      --mdc-icon-size: 11px;
    }
  }
`}
`;function kr(t,e,n,r){const o=e.filter(t=>{if(!t.expiry_date||(t.quantity??0)<=0)return!1;const e=t.expiry_alert_days??Mn.EXPIRY_ALERT_DAYS;return Gn.isExpiringSoon(t.expiry_date,e)}).length;const i=function(t){return t.filter(t=>!(!t.expiry_date||(t.quantity??0)<=0)&&Gn.isExpired(t.expiry_date)).length}(e);return`\n      <div class="card-header">\n        <div class="header-content">\n          <h2 class="inventory-title">${Er.sanitizeHtml(t)}</h2>\n          ${r&&r.trim()?`<p class="inventory-description">${Er.sanitizeHtml(r)}</p>`:""}\n        </div>\n        <div class="header-actions">\n          ${i>0||o>0?`\n            <div class="expiry-indicators">\n              ${i>0?`\n                  <button id="${Fe}" class="expired-badge" title="${Hn.localize(n,"header.items_expired",{count:i},`${i} items expired`)}">\n                  <ha-icon icon="mdi:calendar-remove"></ha-icon>\n                  ${i}\n                </button>\n              `:""}\n              ${o>0?`\n                  <button id="${qe}" class="expiring-badge" title="${Hn.localize(n,"header.items_expiring_soon",{count:o},`${o} items expiring soon`)}">\n                  <ha-icon icon="mdi:calendar-alert"></ha-icon>\n                  ${o}\n                </button>\n              `:""}\n            </div>\n          `:""}\n          <button id="${He}" class="header-scan-btn" title="${Hn.localize(n,"header.scan_barcode",void 0,"Scan Barcode")}">\n            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="16" x2="17" y2="16"/></svg>\n          </button>\n          <div class="overflow-menu-container">\n            <button id="${Re}" class="overflow-menu-btn" title="${Hn.localize(n,"header.more_options",void 0,"More options")}">&#8942;</button>\n            <div class="overflow-menu" id="${Ie}" style="display: none;">\n              <button id="${Ae}" class="overflow-menu-item">${Hn.localize(n,"header.export",void 0,"Export")}</button>\n              <button id="${ke}" class="overflow-menu-item">${Hn.localize(n,"header.import",void 0,"Import")}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    `}function Cr(t){return`\n    <div class="multi-select-container">\n      <div class="multi-select-trigger" id="${t.id}-trigger">\n        <span class="multi-select-label" data-placeholder="${t.placeholder}">\n          ${t.selected&&t.selected.length>0?`${t.selected.length} selected`:t.placeholder}\n        </span>\n        <span class="multi-select-arrow">▼</span>\n      </div>\n      <div class="multi-select-dropdown" id="${t.id}-dropdown" style="display: none;">\n        ${t.options.map(e=>{const n=Er.sanitizeHtml(e),r=Er.sanitizeHtml(t.labels?.[e]||e);return`\n              <label class="multi-select-option">\n                <input type="checkbox" value="${n}" ${t.selected&&t.selected.includes(e)?"checked":""}>\n                <span>${r}</span>\n              </label>\n            `}).join("")}\n      </div>\n    </div>\n  `}function Rr(t,e,n,r){return`\n    ${function(t,e){return`\n    <div class="search-row">\n      <input \n        type="text" \n        id="${pn}" \n        placeholder="${Hn.localize(e,"filters.search_placeholder",void 0,"Search items...")}" \n        value="${t.searchText||""}"\n        class="search-input ${t.searchText?"has-value":""}"\n      />\n      <button id="${an}" \n        class="toggle-btn ${Er.hasActiveFilters(t)?"has-active-filters":""}">\n      ${t.showAdvanced?Hn.localize(e,"filters.hide_filters",void 0,"Hide Filters"):Hn.localize(e,"filters.filters",void 0,"Filters")}\n      </button>\n    </div>\n`}(t,r)}\n    ${function(t,e,n,r){return`\n    <div id="advanced-filters" class="advanced-filters" style="display: ${t.showAdvanced?"block":"none"}">\n      ${function(t,e,n){return`\n    <div class="filter-row">\n      <div class="filter-group">\n        <label>\n          ${Hn.localize(n,"filters.category",void 0,"Category")}\n        </label>\n        ${Cr({id:cn,options:e,selected:t.category,placeholder:Hn.localize(n,"filters.all_categories",void 0,"All Categories")})}\n      </div>\n    </div>\n`}(t,e,r)}\n      ${function(t,e,n){return`\n    <div class="filter-row">\n      <div class="filter-group">\n        <label>\n          ${Hn.localize(n,"filters.location",void 0,"Location")}\n        </label>\n        ${Cr({id:dn,options:e,selected:t.location,placeholder:Hn.localize(n,"filters.all_locations",void 0,"All Locations")})}\n      </div>\n    </div>\n`}(t,n,r)}\n      ${function(t,e){return`\n    <div class="filter-row">\n      <div class="filter-group">\n        <label>\n          ${Hn.localize(e,"filters.quantity",void 0,"Quantity")}\n        </label>\n        ${Cr({id:un,options:["zero","nonzero"],selected:t.quantity,placeholder:Hn.localize(e,"filters.all_quantities",void 0,"All Quantities"),labels:{zero:Hn.localize(e,"filters.zero",void 0,"Zero"),nonzero:Hn.localize(e,"filters.non_zero",void 0,"Non-zero")}})}\n      </div>\n    </div>\n  `}(t,r)}\n      ${function(t,e){return`\n    <div class="filter-row">\n      <div class="filter-group">\n        <label>\n          ${Hn.localize(e,"filters.expiry",void 0,"Expiry")}\n        </label>\n        ${Cr({id:ln,options:["none","expired","soon","future"],selected:t.expiry,placeholder:Hn.localize(e,"filters.all_items",void 0,"All Items"),labels:{none:Hn.localize(e,"filters.no_expiry",void 0,"No Expiry"),expired:Hn.localize(e,"filters.expired",void 0,"Expired"),soon:Hn.localize(e,"filters.expiring_soon",void 0,"Expiring Soon"),future:Hn.localize(e,"filters.future",void 0,"Future")}})}\n      </div>\n    </div>\n  `}(t,r)}\n      ${function(t){return`\n    <div class="filter-actions">\n      <button id="${sn}" class="clear-only-btn">\n        ${Hn.localize(t,"filters.clear_all_filters",void 0,"Clear All Filters")}\n      </button>\n    </div>\n`}(r)}\n    </div>\n`}(t,e,n,r)}\n  `}function Ir(t){return`\n    <input type="hidden" id="${t.id}" value="" />\n    <div class="modal-multi-select-container">\n      <div class="modal-multi-select-trigger" id="${t.id}-trigger">\n        <div class="modal-multi-select-chips" id="${t.id}-chips"></div>\n        <span class="modal-multi-select-label">${t.placeholder}</span>\n      </div>\n      <div class="modal-multi-select-dropdown" id="${t.id}-dropdown" style="display: none;">\n        <div class="modal-multi-select-options" id="${t.id}-options">\n          ${t.options.map(t=>{const e=Er.sanitizeHtml(t);return`\n                <label class="modal-multi-select-option">\n                  <input type="checkbox" value="${e}">\n                  <span>${e}</span>\n                </label>\n              `}).join("")}\n        </div>\n        <div class="modal-multi-select-add-new">\n          <input type="text" id="${t.id}-new-input" placeholder="Add new..." />\n          <button type="button" id="${t.id}-add-btn" class="modal-multi-select-add-btn">+</button>\n        </div>\n      </div>\n    </div>\n  `}function Mr(t,e,n,r=[],o=[]){const i=e.id===Jt?"add":"edit";return`\n    <div id="${e.id}" class="modal">\n      <div class="modal-content">\n\n        ${function(t){return`\n    <div class="modal-header">\n      <h3>${t.title}</h3>\n      <button class="${mn}" ${t.closeAction?`data-action="${t.closeAction}"`:""}>\n        ×\n      </button>\n    </div>\n  `}(e)}\n\n        <div class="modal-body">\n          <div id="${i}-validation-message" class="validation-message">\n            <span class="validation-text"></span>\n          </div>\n\n          ${function(t,e){return`\n    <div class="form-group">\n      <label for="${t}-${pe}" class="form-label">\n        ${Hn.localize(e,"modal.name_required",void 0,"Name *")}\n      </label>\n      <input type="text" id="${t}-${pe}" required />\n    </div> \n  `}(i,n)}\n          ${function(t,e){return`\n    <div class="form-group">\n      <label for="${t}-${se}" class="form-label">\n        ${Hn.localize(e,"modal.description",void 0,"Description")}\n      </label>\n      <textarea id="${t}-${se}" rows="3" placeholder="${Hn.localize(e,"modal.description_placeholder",void 0,"Item description")}"></textarea>\n    </div> \n  `}(i,n)}\n          ${function(t,e){return`\n    <div class="form-group">\n      <label for="${t}-${ie}-input" class="form-label">\n        ${Hn.localize(e,"modal.barcode",void 0,"Barcode")}\n      </label>\n      <div class="barcode-tag-container">\n        <div class="barcode-chips" id="${t}-barcode-chips"></div>\n        <div class="barcode-input-row">\n          <input type="text" id="${t}-${ie}-input" placeholder="${Hn.localize(e,"modal.barcode_input_placeholder",void 0,"Type barcode and press Enter")}" />\n          <button type="button" class="barcode-scan-btn" id="${t}-${je}" title="${Hn.localize(e,"modal.scan_barcode",void 0,"Scan with Camera")}">\n            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="16" x2="17" y2="16"/></svg>\n          </button>\n        </div>\n        <div class="barcode-scanner-container" id="${t}-${Le}" style="display:none;">\n          <div class="barcode-scanner-viewport" id="${t}-${Be}"></div>\n          <button type="button" class="barcode-scanner-close" id="${t}-${Ue}">\n            ${Hn.localize(e,"modal.close_scanner",void 0,"Close Scanner")}\n          </button>\n        </div>\n        <input type="hidden" id="${t}-${ie}" />\n      </div>\n    </div>\n  `}(i,n)}\n          ${function(t,e){return`\n    <div class="form-group">\n      <label for="${t}-${ee}-input" class="form-label">\n        ${Hn.localize(e,"modal.aliases",void 0,"Aliases")}\n      </label>\n      <div class="alias-tag-container">\n        <div class="alias-chips" id="${t}-alias-chips"></div>\n        <div class="alias-input-row">\n          <input type="text" id="${t}-${ee}-input" placeholder="${Hn.localize(e,"modal.aliases_input_placeholder",void 0,"Type an alias and press Enter")}" />\n        </div>\n        <input type="hidden" id="${t}-${ee}" />\n      </div>\n    </div>\n  `}(i,n)}\n          ${function(t,e){return`\n    <div class="product-picker" id="${t}-${Pe}" style="display:none;">\n      <div class="product-picker-label">\n        ${Hn.localize(e,"modal.multiple_products_found",void 0,"Multiple products found — select one:")}\n      </div>\n      <div class="product-picker-list" id="${t}-${Ne}">\n      </div>\n    </div>\n  `}(i,n)}\n          ${function(t,e){return`\n    <div class="auto-add-id-container">\n      <input type="checkbox" id="${t}-${re}" class="auto-add-id-checkbox" />\n      <label for="${t}-${re}" class="checkbox-label">\n        ${Hn.localize(e,"modal.auto_add_id_to_description",void 0,"Append inventory ID to item description")}\n      </label>\n    </div>\n  `}(i,n)}\n\n          <div class="form-row">\n            ${function(t,e){return`\n    <div class="input-group">\n      <label for="${t}-${fe}">\n        ${Hn.localize(e,"modal.quantity",void 0,"Quantity")}\n      </label>\n      <input type="number" id="${t}-${fe}" min="0" />\n    </div>\n  `}(i,n)}\n            ${function(t,e){return`\n    <div class="input-group">\n      <label for="${t}-${me}">\n        ${Hn.localize(e,"modal.unit",void 0,"Unit")}\n      </label>\n      <input type="text" id="${t}-${me}" placeholder="${Hn.localize(e,"modal.unit_placeholder",void 0,"kg, pcs, etc.")}" />\n    </div>\n  `}(i,n)}\n          </div>\n\n          <div class="form-row">\n            ${function(t,e){return`\n    <div class="input-group">\n      <label for="${t}-${he}">\n        ${Hn.localize(e,"modal.price",void 0,"Unit Price")}\n      </label>\n      <input type="number" id="${t}-${he}" step="0.01" min="0" placeholder="${Hn.localize(e,"modal.price_placeholder",void 0,"Unit price")}" />\n    </div>\n  `}(i,n)}\n          </div>\n\n          ${function(t){const e=(e,n,r="",o="number")=>`\n    <div class="input-group nutrition-field">\n      <label for="${t}-${e}">${n}</label>\n      <div class="nutrition-input"><input type="${o}" ${"number"===o?'min="0" step="any"':""} id="${t}-${e}" />${r?`<span>${r}</span>`:""}</div>\n    </div>`;return`<details class="nutrition-section" open>\n    <summary>Nutrition</summary>\n    <div class="nutrition-fields">\n      ${e(ye,"Serving size","","text")}\n      ${e(be,"Servings / unit")}\n      ${e(xe,"Calories / serving")}\n      ${e(_e,"Protein / serving","g")}\n      ${e(we,"Carbohydrates / serving","g")}\n      ${e(Ee,"Fat / serving","g")}\n    </div>\n  </details>`}(i)}\n\n          <div class="form-row">\n            ${function(t,e,n=[]){return`\n    <div class="input-group">\n      <label for="${t}-${ae}" class="form-label">\n        ${Hn.localize(e,"modal.category",void 0,"Category")}\n      </label>\n      ${Ir({id:`${t}-${ae}`,placeholder:Hn.localize(e,"modal.category_placeholder",void 0,"Food, Tools, Supplies, etc."),options:n.sort((t,e)=>t.localeCompare(e,void 0,{sensitivity:"base"}))})}\n    </div>\n  `}(i,n,r)}\n            ${function(t,e,n=[]){return`\n    <div class="input-group">\n      <label for="${t}-${ue}" class="form-label">\n        ${Hn.localize(e,"modal.location",void 0,"Location")}\n      </label>\n      ${Ir({id:`${t}-${ue}`,placeholder:Hn.localize(e,"modal.location_placeholder",void 0,"Pantry, Garage Shelf, etc."),options:n.sort((t,e)=>t.localeCompare(e,void 0,{sensitivity:"base"}))})}\n    </div>\n  `}(i,n,o)}\n          </div>\n\n          <div class="form-row">\n            ${function(t,e){return`\n    <div class="input-group">\n      <label for="${t}-${de}" class="form-label">\n        ${Hn.localize(e,"modal.expiry_date",void 0,"Expiry Date")}\n      </label>\n      <input type="date" id="${t}-${de}" />\n    </div>\n  `}(i,n)}\n            ${function(t,e){return`\n    <div class="input-group expiry-threshold-section">\n      <label for="${t}-${le}" class="form-label">\n        ${Hn.localize(e,"modal.expiry_alert_threshold",void 0,"Expiry Alert Threshold")}\n        <span class="optional">\n          ${Hn.localize(e,"modal.days_before_expiry",void 0,"(days before expiry)")}\n        </span>\n      </label>\n      <input \n        type="number" \n        id="${t}-${le}" \n        min="1" \n        max="365"\n        placeholder="${Hn.localize(e,"modal.set_expiry_first",void 0,"Set expiry date first")}"\n        disabled\n      />\n      <small class="help-text">\n        ${Hn.localize(e,"modal.expiry_help_text",void 0,"How many days before expiry to show alerts")}\n      </small>\n    </div>\n  `}(i,n)}\n          </div>\n\n          <div class="form-group auto-add-section">\n            ${function(t,e){return`\n    <input type="checkbox" id="${t}-${ne}" class="auto-add-checkbox" />\n    <label for="${t}-${ne}" class="checkbox-label">\n      ${Hn.localize(e,"modal.auto_add_when_low",void 0,"Auto-add to todo list when low")}\n    </label>\n  `}(i,n)}\n            ${function(t,e,n){return`\n    <div class="auto-add-controls" id="${t}-auto-add-controls">\n      <div class="auto-add-header">${Hn.localize(n,"modal.auto_add_settings",void 0,"Auto-add Settings")}</div>\n\n      <div class="form-row">\n\n        <div class="input-group">\n          <label for="${t}-${oe}">\n            ${Hn.localize(n,"modal.quantity_threshold",void 0,"Quantity Threshold")}\n          </label>\n          <input \n            type="number" \n            id="${t}-${oe}" \n            min="0"\n            class="auto-add-required"\n            placeholder="${Hn.localize(n,"modal.minimum_quantity",void 0,"Minimum quantity")}"\n          />\n        </div>\n\n        <div class="input-group">\n          <label for="${t}-${ve}">${Hn.localize(n,"modal.todo_list",void 0,"Todo List")}</label>\n          <select id="${t}-${ve}" class="auto-add-required">\n            <option value="">${Hn.localize(n,"modal.select_list",void 0,"Select list...")}</option>\n            ${e.map(t=>`<option value="${t.id}">${Er.sanitizeHtml(t.name)}</option>`).join("")}\n          </select>\n        </div>\n\n      </div>\n\n      <div class="form-row">\n\n        <div class="input-group">\n          <label for="${t}-${ce}">\n            ${Hn.localize(n,"modal.desired_quantity",void 0,"Desired Quantity")}\n          </label>\n          <input\n            type="number"\n            id="${t}-${ce}"\n            min="0"\n            placeholder="${Hn.localize(n,"modal.desired_quantity_placeholder",void 0,"Desired stock level (blank = use threshold)")}"\n          />\n        </div>\n\n        <div class="input-group">\n          <label for="${t}-${ge}">\n            ${Hn.localize(n,"modal.todo_quantity_placement",void 0,"Quantity Placement")}\n          </label>\n          <select id="${t}-${ge}">\n            <option value="name">${Hn.localize(n,"modal.todo_quantity_placement_name",void 0,"In name (e.g. Milk (x4))")}</option>\n            <option value="description">${Hn.localize(n,"modal.todo_quantity_placement_description",void 0,"In description")}</option>\n            <option value="none">${Hn.localize(n,"modal.todo_quantity_placement_none",void 0,"Don't show")}</option>\n          </select>\n        </div>\n\n      </div>\n\n    </div>\n  `}(i,t,n)}\n          </div>\n        </div>\n\n        <div class="modal-buttons">\n          <button ${e.primaryButtonId?`id="${e.primaryButtonId}"`:""} class="save-btn">${e.primaryButtonText}</button>\n          <button class="cancel-btn" ${e.closeAction?`data-action="${e.closeAction}"`:""}>\n            ${Hn.localize(n,"modal.cancel",void 0,"Cancel")}\n          </button>\n        </div>\n        ${e.showHistory||e.showDelete?`<div class="modal-secondary-actions">\n              ${e.showHistory?`<button id="${Me}" class="${_n}">${Hn.localize(n,"modal.view_history",void 0,"View History")}</button>`:"<span></span>"}\n              ${e.showDelete?`<button id="${Te}" class="${xn}">${Hn.localize(n,"modal.delete_item",void 0,"Delete Item")}</button>`:""}\n            </div>`:""}\n      </div>\n    </div>\n  `}function Tr(t,e,n,r){const o=t=>{const n=e.find(e=>e.entity_id===t||e.id===t);return n?n.name:t},i=t.expiry_date?((t,e=Mn.EXPIRY_ALERT_DAYS)=>{const r=/* @__PURE__ */new Date;r.setHours(0,0,0,0);const o=/* @__PURE__ */new Date(t+"T00:00:00"),i=Math.floor((o.getTime()-r.getTime())/864e5);if(i<0){const t=Math.abs(i),e=1===t?"expiry.expired_day_ago":"expiry.expired_days_ago";return{class:"expired",label:Hn.localize(n,e,{days:t},`Expired ${t} day${1!==t?"s":""} ago`)}}if(0===i)return{class:"expires-today",label:Hn.localize(n,"expiry.expires_today",void 0,"Expires today")};if(i<=e){const t=1===i?"expiry.expires_in_day":"expiry.expires_in_days";return{class:"expiring-soon",label:Hn.localize(n,t,{days:i},`Expires in ${i} day${1!==i?"s":""}`)}}return{class:"expiry-safe",label:`${t}`}})(t.expiry_date,t.expiry_alert_days):null,a=!1!==r?.show_location,s=!1!==r?.show_category,c=Er.sanitizeHtml(t.name),l=Er.sanitizeHtml(t.description||""),d=Er.sanitizeHtml(t.unit||""),u=(t.servings_per_unit??0)*(t.calories_per_serving??0),p=(t.servings_per_unit??0)*(t.protein_g_per_serving??0),h=d&&"unit"!==d?d.replace(/s$/,""):"unit",f=u>0||p>0?`<div class="nutrition-summary">${u>0?`${u%1==0?u:u.toFixed(1)} kcal/${h}`:""}${u>0&&p>0?" • ":""}${p>0?`${p%1==0?p:p.toFixed(1)}g protein/${h}`:""}</div>`:"";return`\n    <div class="item-row ${0===t.quantity?"zero-quantity":""} ${t.auto_add_enabled?"auto-add-enabled":""}">\n      <div class="item-header">\n        <span class="item-name" data-action="open_edit" data-name="${c}" role="button" tabindex="0">${c}</span>\n        ${(()=>{const e=a&&t.locations&&t.locations.length>0?t.locations.join(", "):a?t.location:"",n=s&&t.categories&&t.categories.length>0?t.categories.join(", "):s?t.category:"",r=Er.sanitizeHtml(e||""),o=Er.sanitizeHtml(n||"");return e&&n?`<span class="location-category">${r} | ${o}</span>`:e?`<span class="location">${r}</span>`:n?`<span class="category">${o}</span>`:""})()}\n      </div>\n      ${!1!==r?.show_description?`<div class="item-description">\n        <span>${l}</span>\n      </div>`:""}\n      ${f}\n      <div class="item-footer">\n        <div class="item-footer-row">\n          <div class="item-details">\n            <span class="quantity">${t.quantity} ${d}</span>\n            ${!1!==r?.show_price&&t.price&&t.price>0?`<span class="item-price">$${(t.price*t.quantity).toFixed(2)}</span>`:""}\n            ${!1!==r?.show_expiry&&i?`<span class="expiry ${i.class}">${i.label}</span>`:""}\n          </div>\n          <div class="item-controls">\n            <button class="control-btn" data-action="decrement" data-name="${c}" ${0===t.quantity?"disabled":""}>➖</button>\n            <button class="control-btn" data-action="increment" data-name="${c}">➕</button>\n          </div>\n        </div>\n        ${!1!==r?.show_auto_add_info&&t.auto_add_enabled?`<div class="auto-add-info">${Hn.localize(n,"items.auto_add_info",{quantity:t.auto_add_to_list_quantity||0,list:o(t.todo_list||"")},`Auto-add at ≤ ${t.auto_add_to_list_quantity||0} → ${o(t.todo_list||"")}`)}</div>`:""}\n      </div>\n    </div>\n  `}var Or=/* @__PURE__ */s({createItemsByCategory:()=>zr,createItemsByLocation:()=>Pr,createItemsList:()=>Dr});function Dr(t,e,n,r,o){return 0===t.length?`<div class="no-items">${Hn.localize(r,"items.no_items",void 0,"No items in inventory")}</div>`:"category"===e?zr(t,n,r,o):"location"===e?Pr(t,n,r,o):t.map(t=>Tr(t,n,r,o)).join("")}function zr(t,e,n,r){const o=Er.groupItemsByCategory(t);return Object.keys(o).sort().map(t=>{const i=Er.sanitizeHtml(t);return`\n        <div class="${vn}">\n          <div class="${gn}">${i}</div>\n          ${o[t].map(t=>Tr(t,e,n,r)).join("")}\n        </div>\n      `}).join("")}function Pr(t,e,n,r){const o=Er.groupItemsByLocation(t);return Object.keys(o).sort().map(t=>{const i=Er.sanitizeHtml(t);return`\n        <div class="${yn}">\n          <div class="${bn}">${i}</div>\n          ${o[t].map(t=>Tr(t,e,n,r)).join("")}\n        </div>\n`}).join("")}function Nr(t,e,n,r,o,i,a,s,c,l,d){const u=!1!==d?.show_header,p=!1!==d?.show_sort,h=!1!==d?.show_add_button,f=!1!==d?.show_search;return`\n    <style>${Sr}</style>\n    <ha-card>\n      ${u?kr(t,s,l,c):""}\n      ${function(t){return`\n    <div id="${Ve}" class="scan-panel" style="display:none;">\n      <div class="scan-panel-viewport-container" id="${We}-container">\n        <div class="scan-panel-loading" id="scan-panel-loading">\n          ${Hn.localize(t,"scanner.starting_camera",void 0,"Starting camera...")}\n        </div>\n        <div class="scan-panel-viewport" id="${We}"></div>\n        <button type="button" class="scan-panel-close" id="${Qe}">\n          ${Hn.localize(t,"modal.close_scanner",void 0,"Close Scanner")}\n        </button>\n      </div>\n      <div class="scan-action-bar" id="${Ye}" style="display:none;">\n        <div class="scan-info-row">\n          <span class="scan-barcode-label" id="scan-barcode-label"></span>\n          <span id="${Ke}" class="scan-item-name" style="display:none;"></span>\n          <span id="${Je}" class="scan-item-quantity" style="display:none;"></span>\n        </div>\n        <span id="${en}" class="scan-existing-controls">\n          <select id="${Ge}" class="scan-action-select">\n            <option value="increment">${Hn.localize(t,"scanner.increment",void 0,"Increment")}</option>\n            <option value="decrement">${Hn.localize(t,"scanner.decrement",void 0,"Decrement")}</option>\n          </select>\n          <input type="number" id="${Xe}" class="scan-amount-input" value="1" min="0.1" step="0.1" />\n        </span>\n        <button type="button" class="scan-add-btn" id="${tn}" style="display:none;">${Hn.localize(t,"scanner.add_new_item",void 0,"Add Item")}</button>\n        <div class="scan-buttons-row">\n          <button type="button" class="scan-go-btn" id="${Ze}" style="display:none;">${Hn.localize(t,"scanner.go",void 0,"Go")}</button>\n          <button type="button" class="scan-cancel-btn" id="${nn}">${Hn.localize(t,"scanner.cancel",void 0,"Cancel")}</button>\n        </div>\n      </div>\n      <div class="scan-panel-error" id="scan-panel-error" style="display:none;"></div>\n    </div>\n  `}(l)}\n\n      ${p||h?`<div class="controls-row">\n        ${p?`<div class="sorting-controls">${function(t,e){return`\n    <label for="${hn}">${Hn.localize(e,"sort.sort_by",void 0,"Sort by:")}</label> \n    <select id="${hn}">\n      <option value="name" ${"name"===t?"selected":""}>\n        ${Hn.localize(e,"sort.name",void 0,"Name")}\n      </option>\n\n      <option value="category" ${"category"===t?"selected":""}>\n        ${Hn.localize(e,"sort.category",void 0,"Category")}\n      </option>\n\n      <option value="location" ${"location"===t?"selected":""}>\n        ${Hn.localize(e,"sort.location",void 0,"Location")}\n      </option>\n\n      <option value="quantity" ${"quantity"===t?"selected":""}>\n        ${Hn.localize(e,"sort.quantity_high",void 0,"Quantity (High)")}\n      </option>\n\n      <option value="quantity-low" ${"quantity-low"===t?"selected":""}>\n        ${Hn.localize(e,"sort.quantity_low",void 0,"Quantity (Low)")}\n      </option>\n\n      <option value="expiry" ${"expiry"===t?"selected":""}>\n        ${Hn.localize(e,"sort.expiry_date",void 0,"Expiry Date")}\n      </option>\n\n      <option value="zero-last" ${"zero-last"===t?"selected":""}>\n        ${Hn.localize(e,"sort.zero_last",void 0,"Zero Last")}\n      </option>\n\n    </select>\n  `}(r,l)}</div>`:""}\n        ${h?`<button id="${Ce}" class="add-new-btn">+ ${Hn.localize(l,"modal.add_item",void 0,"Add Item")}</button>`:""}\n      </div>`:""}\n\n      ${f?`<div class="search-controls">\n        ${Rr(n,o,i,l)}\n      </div>\n      ${function(t,e){const n=$r(t,e),r=n.length>0;return`\n    <div id="${rn}" class="active-filters" style="display: ${r?"block":"none"};">\n      <div id="${on}" class="filter-badges-container">\n        ${n.join("")}\n      </div>\n    </div>\n  `}(n,l)}`:""}\n\n      <div class="items-container">\n        ${e.length>0?Dr(e,r,a,l,d):`<div class="empty-state">${Hn.localize(l,"items.no_items",void 0,"No items in inventory")}</div>`}\n      </div>\n\n      ${function(t,e,n,r){return Mr(t,{id:Jt,title:Hn.localize(e,"modal.add_item",void 0,"Add Item"),primaryButtonText:Hn.localize(e,"modal.add_item",void 0,"Add Item"),primaryButtonId:$e,closeAction:An},e,n,r)}(a,l,o,i)}\n      ${function(t,e,n,r){return Mr(t,{id:te,title:Hn.localize(e,"modal.edit_item",void 0,"Edit Item"),primaryButtonText:Hn.localize(e,"modal.save_changes",void 0,"Save Changes"),showHistory:!0,showDelete:!0},e,n,r)}(a,l,o,i)}\n    </ha-card>\n  `}var jr=class{shadowRoot;constructor(t){this.shadowRoot=t}renderCard(t,e,n,r,o,i,a,s){const c=qn.getInventoryName(t,e),l=qn.getInventoryDescription(t),d=/* @__PURE__ */new Set;n.forEach(t=>{Array.isArray(t.categories)&&t.categories.length>0?t.categories.forEach(t=>{t?.trim()&&d.add(t.trim())}):t.category?.trim()&&d.add(t.category.trim())});const u=[...d].sort(),p=/* @__PURE__ */new Set;n.forEach(t=>{Array.isArray(t.locations)&&t.locations.length>0?t.locations.forEach(t=>{t?.trim()&&p.add(t.trim())}):t.location?.trim()&&p.add(t.location.trim())});const h=[...p].sort();this.shadowRoot.innerHTML=Nr(c,n,r,o,u,h,i,n,l,a,s)}renderError(t,e){const n=e?Hn.localize(e,"common.error",void 0,"Error"):"Error";this.shadowRoot.innerHTML=`\n      <style>${Sr}</style>\n      <ha-card>\n        <div class="card-content">\n          <div class="error-message" style="color: var(--error-color); padding: 16px; text-align: center;">\n            <p><strong>${n}:</strong> ${Er.sanitizeHtml(t)}</p>\n          </div>\n        </div>\n      </ha-card>\n    `}renderLoading(t){const e=t?Hn.localize(t,"common.loading",void 0,"Loading..."):"Loading...";this.shadowRoot.innerHTML=`\n      <style>${Sr}</style>\n      <ha-card>\n        <div class="card-content">\n          <div class="loading-container" style="padding: 16px; text-align: center;">\n            <p>${e}</p>\n          </div>\n        </div>\n      </ha-card>\n    `}},Lr=class{userInteracting=!1;renderTimeout=void 0;_lastEntityState=void 0;_renderCallback=void 0;_debouncedRenderFn=void 0;trackUserInteraction(t){const e=t.querySelectorAll("input, select, textarea");for(const n of e)n.addEventListener("focus",()=>{this.userInteracting=!0}),n.addEventListener("blur",()=>{setTimeout(()=>{this.userInteracting=!1},100)})}hasRealEntityChange(t,e){const n=t.states[e];if(!n)return!1;const r=this._lastEntityState;return this._lastEntityState=n,!r||(r.last_changed!==n.last_changed||r.attributes?.total_items!==n.attributes?.total_items||r.attributes?.total_quantity!==n.attributes?.total_quantity)}debouncedRender(t,e=100){t||this._renderCallback?(this._debouncedRenderFn||(this._debouncedRenderFn=Er.debounce(()=>{this._renderCallback&&this._renderCallback()},e)),this._debouncedRenderFn()):console.warn("No render function provided to debouncedRender")}setRenderCallback(t){this._renderCallback=t}debouncedRenderWithCallback(t,e=100){this.debouncedRender(t,e)}debouncedRenderDefault(t=100){this.debouncedRender(void 0,t)}cleanup(){this.renderTimeout&&(clearTimeout(this.renderTimeout),this.renderTimeout=void 0),this._renderCallback=void 0,this.userInteracting=!1}},Br=class{renderRoot;getHass;getConfig;getTranslations;services;renderCallback;scannedBarcode=null;constructor(t,e,n,r,o,i){this.renderRoot=t,this.getHass=e,this.getConfig=n,this.getTranslations=r,this.services=o,this.renderCallback=i}getScannedBarcode(){return this.scannedBarcode}async showScanPanel(){const t=this.getTranslations();if(!ar()){const e=document.createElement("input");return e.type="file",e.accept="image/*",e.capture="environment",e.style.position="fixed",e.style.top="-9999px",e.style.left="-9999px",e.style.width="0",e.style.height="0",e.style.opacity="0",document.body.appendChild(e),e.addEventListener("change",async()=>{const n=e.files?.[0];if(document.body.removeChild(e),n&&await sr(n,t=>{this.handleScanDetected(t)})){const e=this.renderRoot.getElementById(Ve),n=this.renderRoot.getElementById(`${We}-container`),r=this.renderRoot.getElementById("scan-panel-error");e&&r&&(e.style.display="block",n&&(n.style.display="none"),r.textContent=Hn.localize(t,"scanner.no_barcode_found",void 0,"No barcode found in photo"),r.style.display="block",setTimeout(()=>this.hideScanPanel(),3e3))}}),void e.click()}const e=this.renderRoot.getElementById(Ve);if(!e)return;e.style.display="block";const n=this.renderRoot.getElementById(`${We}-container`),r=this.renderRoot.getElementById(We),o=this.renderRoot.getElementById(Ye),i=this.renderRoot.getElementById("scan-panel-error"),a=this.renderRoot.getElementById("scan-panel-loading");if(n&&(n.style.display="block"),o&&(o.style.display="none"),a&&(a.style.display="flex"),i&&(i.style.display="none",i.textContent=""),r){const e=await or(r,t=>{this.handleScanDetected(t)});if(a&&(a.style.display="none"),e){this.hideScanPanel();const n="permission_denied"===e?"modal.camera_permission_denied":"modal.camera_not_available",r="permission_denied"===e?"Camera access denied":"Camera not available";alert(Hn.localize(t,n,void 0,r))}}}hideScanPanel(){ir(),this.scannedBarcode=null;const t=this.renderRoot.getElementById(Ve);t&&(t.style.display="none")}async handleScanDetected(t){ir(),this.scannedBarcode=t;const e=this.renderRoot.getElementById(Ve);e&&(e.style.display="block");const n=this.renderRoot.getElementById(`${We}-container`),r=this.renderRoot.getElementById(Ye),o=this.renderRoot.getElementById("scan-barcode-label"),i=this.renderRoot.getElementById("scan-panel-error"),a=this.renderRoot.getElementById(Xe),s=this.renderRoot.getElementById(Ge),c=this.renderRoot.getElementById(Ke),l=this.renderRoot.getElementById(Je),d=this.renderRoot.getElementById(en),u=this.renderRoot.getElementById(tn),p=this.renderRoot.getElementById(Ze);n&&(n.style.display="none"),o&&(o.textContent=t),r&&(r.style.display="flex"),i&&(i.style.display="none",i.textContent=""),a&&(a.value="1"),s&&(s.value="increment");const h=this.getConfig(),f=this.getHass(),v=this.getTranslations(),g=qn.getInventoryId(f,h.entity),m=(await this.services.lookupByBarcode(t)).items.filter(t=>t.inventory_id===g);if(m.length>0){const t=m[0];if(c&&(c.textContent=t.name,c.style.display=""),l){const e=t.unit?`${t.quantity} ${t.unit}`:String(t.quantity??0);l.textContent=Hn.localize(v,"scanner.in_stock",{quantity:e},`In stock: ${e}`),l.style.display=""}d&&(d.style.display=""),u&&(u.style.display="none"),p&&(p.style.display="")}else c&&(c.textContent="",c.style.display="none"),l&&(l.textContent="",l.style.display="none"),d&&(d.style.display="none"),u&&(u.style.display=""),p&&(p.style.display="none")}async handleScanGo(){if(!this.scannedBarcode)return;const t=this.renderRoot.getElementById(Ge),e=this.renderRoot.getElementById(Xe),n=t?.value||"increment",r=parseFloat(e?.value||"1")||1,o=this.getConfig(),i=this.getHass(),a=qn.getInventoryId(i,o.entity);if((await this.services.scanBarcode(a,this.scannedBarcode,n,r)).success)this.hideScanPanel(),this.renderCallback();else{const t=this.renderRoot.getElementById("scan-panel-error");t&&(t.textContent=Hn.localize(this.getTranslations(),"scanner.barcode_not_found",void 0,"No item found for this barcode"),t.style.display="block")}}},Ur=class{renderRoot;getTranslations;services;constructor(t,e,n){this.renderRoot=t,this.getTranslations=e,this.services=n}handleBarcodeProductLookup(t){this.services.lookupBarcodeProduct(t).then(t=>{const e=t.results.filter(t=>t.found&&t.product);0!==e.length&&(1!==e.length?this.showProductPicker("add",e):this.selectProduct("add",e[0].product))}).catch(()=>{})}showProductPicker(t,e){const n=this.getTranslations(),r=this.renderRoot.getElementById(`${t}-${Pe}`),o=this.renderRoot.getElementById(`${t}-${Ne}`);r&&o&&(o.innerHTML=e.map((t,e)=>{const r=t.product,o=Hn.localize(n,`modal.provider_${t.provider}`,void 0,t.provider),i=[];return r.brand&&i.push(r.brand),r.category&&i.push(r.category),`\n        <div class="product-picker-item" data-product-index="${e}">\n          <span class="product-picker-provider">${Er.sanitizeHtml(o)}</span>\n          <span class="product-picker-name">${Er.sanitizeHtml(r.name)}</span>\n          ${i.length>0?`<span class="product-picker-detail">${Er.sanitizeHtml(i.join(" — "))}</span>`:""}\n        </div>\n      `}).join(""),r.style.display="block",o.querySelectorAll(".product-picker-item").forEach(n=>{n.addEventListener("click",()=>{const r=e[parseInt(n.dataset.productIndex||"0",10)];r?.product&&(this.selectProduct(t,r.product),this.hideProductPicker(t))})}))}hideProductPicker(t){const e=this.renderRoot.getElementById(`${t}-${Pe}`);e&&(e.style.display="none")}selectProduct(t,e){this.autoFillIfEmpty(`${t}-name`,e.name);const n=[];e.brand&&n.push(e.brand),e.description&&n.push(e.description),n.length>0&&this.autoFillIfEmpty(`${t}-description`,n.join(" - ")),e.category&&this.autoFillIfEmpty(`${t}-category`,e.category),e.unit&&this.autoFillIfEmpty(`${t}-unit`,e.unit);for(const[r,o]of Object.entries({"serving-size":["serving_size"],"servings-per-unit":["servings_per_unit"],"calories-per-serving":["calories_per_serving"],"protein-per-serving":["protein_g_per_serving"],"carbohydrates-per-serving":["carbs_g_per_serving"],"fat-per-serving":["fat_g_per_serving"]})){const n=o.map(t=>e[t]).find(t=>void 0!==t&&""!==t);this.autoFillIfEmpty(`${t}-${r}`,n)}this.hideProductPicker(t)}autoFillIfEmpty(t,e){if(!e)return;const n=this.renderRoot.getElementById(t);n&&!n.value.trim()&&(n.value=e,n.dispatchEvent(new Event("input",{bubbles:!0})))}},Fr={add:"➕",remove:"❌",increment:"⬆️",decrement:"⬇️",transfer:"↔️",update:"✏️"};function qr(t){const e=Fr[t.event_type]||"📝",n="transfer"===t.event_type&&t.location_from&&t.location_to?` (${Er.sanitizeHtml(t.location_from)} → ${Er.sanitizeHtml(t.location_to)})`:"";return`\n    <div class="history-event">\n      <span class="history-icon">${e}</span>\n      <div class="history-details">\n        <span class="history-type">${t.event_type}${n}</span>\n        <span class="history-qty">${t.quantity_before} → ${t.quantity_after} (${t.quantity_before>t.quantity_after?"-":t.quantity_before<t.quantity_after?"+":""}${t.amount})</span>\n        <span class="history-time">${r=t.timestamp,new Date(r).toLocaleString()}</span>\n      </div>\n    </div>\n  `;var r}function Hr(t,e){return null===t?"—":`${t.toFixed(1)}${e}`}function Vr(t){return null===t?"—":`${Math.round(t)}`}function Wr(t){return null===t?"—":`$${t.toFixed(2)}`}function Qr(t,e,n){return Hn.localize(t,e,void 0,n)}function Yr(t){return 0===t.length?'<p class="history-empty">No history recorded yet.</p>':`\n    <div class="history-timeline">\n      ${t.map(qr).join("")}\n    </div>\n  `}var Gr=class{renderRoot;getHass;getConfig;getTranslations;services;constructor(t,e,n,r,o){this.renderRoot=t,this.getHass=e,this.getConfig=n,this.getTranslations=r,this.services=o}async showItemHistory(t){try{const e=this.getHass(),n=this.getConfig(),r=this.getTranslations(),o=qn.getInventoryId(e,n.entity),i=await this.services.getHistory(o,{itemName:t,limit:50}),a=function(t,e,n){const r=Qr(n,"analytics.tab_history","History"),o=Qr(n,"analytics.tab_consumption","Consumption");return`\n    <div class="history-view">\n      <h3>${r}: ${Er.sanitizeHtml(e)}</h3>\n      <div class="history-tabs">\n        <button class="history-tab active" id="${Oe}">${r}</button>\n        <button class="history-tab" id="${De}">${o}</button>\n      </div>\n      <div id="${ze}">\n        ${Yr(t)}\n      </div>\n    </div>\n  `}(i,t,r);this.showHistoryModal(a,i,t,o)}catch(e){console.error("Error fetching history:",e)}}showHistoryModal(t,e,n,r){let o=this.renderRoot.getElementById(Se);o||(o=document.createElement("div"),o.id=Se,o.className="modal",this.renderRoot.appendChild(o)),o.innerHTML=`\n      <div class="modal-content">\n        ${t}\n        <div class="modal-actions">\n          <button class="cancel-btn" id="close-history-modal">Close</button>\n        </div>\n      </div>\n    `,o.classList.add($n),o.querySelector("#close-history-modal")?.addEventListener("click",()=>{o.classList.remove($n)});const i=/* @__PURE__ */new Map;let a=null;const s=o.querySelector(`#${Oe}`),c=o.querySelector(`#${De}`),l=o.querySelector(`#${ze}`);if(!s||!c||!l)return;const d=t=>{s.classList.toggle("active","history"===t),c.classList.toggle("active","consumption"===t)};s.addEventListener("click",()=>{d("history"),l.innerHTML=Yr(e)}),c.addEventListener("click",()=>{d("consumption"),this.loadConsumptionTab(l,r,n,a,i,t=>{a=t})})}async loadConsumptionTab(t,e,n,r,o,i){const a=null!==r?String(r):"all";if(o.has(a))return void this.renderConsumptionContent(t,o.get(a),r,e,n,o,i);const s=this.getTranslations();t.innerHTML=function(t){return`<div class="consumption-loading"><p>${Qr(t,"analytics.loading","Loading...")}</p></div>`}(s);try{const s=await this.services.getItemConsumptionRates(e,n,r);o.set(a,s),this.renderConsumptionContent(t,s,r,e,n,o,i)}catch(c){console.error("Error fetching consumption rates:",c);const e=Hn.localize(s,"analytics.load_error",void 0,"Failed to load consumption data.");t.innerHTML=`<p class="consumption-empty">${Er.sanitizeHtml(e)}</p>`}}renderConsumptionContent(t,e,n,r,o,i,a){const s=this.getTranslations();t.innerHTML=function(t,e,n){if(!t.has_sufficient_data)return`\n      <div class="consumption-empty">\n        <div class="consumption-empty-icon">📊</div>\n        <p class="consumption-empty-title">${Qr(n,"analytics.insufficient_data","Not enough data yet")}</p>\n        <p class="consumption-empty-detail">${Qr(n,"analytics.insufficient_data_detail","Need at least 2 consumption events to calculate rates.")}</p>\n      </div>\n    `;const r=null===(o=t.days_until_depletion)?"":o<=7?"depletion-critical":o<=14?"depletion-warning":"depletion-safe";var o;const i=[{days:30,label:Qr(n,"analytics.window_30","30d")},{days:60,label:Qr(n,"analytics.window_60","60d")},{days:90,label:Qr(n,"analytics.window_90","90d")},{days:null,label:Qr(n,"analytics.window_all","All")}],a=Qr(n,"analytics.per_day","/day");return`\n    <div class="window-pills">\n      ${i.map(t=>`<button class="window-pill${t.days===e||null===t.days&&null===e?" active":""}" data-window="${null!==t.days?String(t.days):"all"}">${t.label}</button>`).join("")}\n    </div>\n    <div class="consumption-metrics">\n      <div class="metric-card">\n        <div class="metric-value">${Hr(t.daily_rate,a)}</div>\n        <div class="metric-label">${Qr(n,"analytics.daily_rate","Daily")}</div>\n      </div>\n      <div class="metric-card">\n        <div class="metric-value">${Hr(t.weekly_rate,"/wk")}</div>\n        <div class="metric-label">${Qr(n,"analytics.weekly_rate","Weekly")}</div>\n      </div>\n      <div class="metric-card">\n        <div class="metric-value ${r}">${Vr(t.days_until_depletion)}</div>\n        <div class="metric-label">${Qr(n,"analytics.days_until_depletion","Days Left")}</div>\n      </div>\n      <div class="metric-card">\n        <div class="metric-value">${Vr(t.avg_restock_days)}</div>\n        <div class="metric-label">${Qr(n,"analytics.avg_restock_days","Avg Restock")}</div>\n      </div>\n      <div class="metric-card">\n        <div class="metric-value">${t.total_consumed}</div>\n        <div class="metric-label">${Qr(n,"analytics.total_consumed","Total Used")}</div>\n      </div>\n      <div class="metric-card">\n        <div class="metric-value">${t.decrement_count}</div>\n        <div class="metric-label">${Qr(n,"analytics.events_tracked","Events")}</div>\n      </div>\n      ${null!==t.total_spend&&t.total_spend>0?`\n      <div class="metric-card">\n        <div class="metric-value">${Wr(t.daily_spend_rate)}</div>\n        <div class="metric-label">${Qr(n,"analytics.daily_spend","Daily Spend")}</div>\n      </div>\n      <div class="metric-card">\n        <div class="metric-value">${Wr(t.weekly_spend_rate)}</div>\n        <div class="metric-label">${Qr(n,"analytics.weekly_spend","Weekly Spend")}</div>\n      </div>\n      <div class="metric-card">\n        <div class="metric-value">${Wr(t.total_spend)}</div>\n        <div class="metric-label">${Qr(n,"analytics.total_spend","Total Spend")}</div>\n      </div>\n      `:""}\n    </div>\n  `}(e,n,s),t.querySelectorAll(".window-pill").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.window,s="all"===n?null:Number(n);a(s),this.loadConsumptionTab(t,r,o,s,i,a)})})}},Xr=class{getHass;getConfig;getTranslations;services;renderCallback;constructor(t,e,n,r,o){this.getHass=t,this.getConfig=e,this.getTranslations=n,this.services=r,this.renderCallback=o}async handleExport(){try{const t=this.getHass(),e=this.getConfig(),n=qn.getInventoryId(t,e.entity),r=await this.services.exportInventory(n,"json"),o=new Blob([JSON.stringify(r.data,null,2)],{type:"application/json"}),i=URL.createObjectURL(o),a=document.createElement("a");a.href=i,a.download=`inventory_${n}.json`,a.click(),URL.revokeObjectURL(i)}catch(t){console.error("Error exporting inventory:",t)}}async handleImport(){const t=document.createElement("input");t.type="file",t.accept=".json,.csv",t.addEventListener("change",async()=>{const e=t.files?.[0];if(e)try{const t=await e.text(),n=this.getHass(),r=this.getConfig(),o=this.getTranslations(),i=qn.getInventoryId(n,r.entity),a=e.name.endsWith(".csv"),s=a?"csv":"json",c=a?t:JSON.parse(t),l=await this.services.importInventory(i,c,s,"skip"),d=Hn.localize(o,"actions.import_result",{added:l.added,updated:l.updated,skipped:l.skipped},`Import complete: ${l.added} added, ${l.updated} updated, ${l.skipped} skipped`);alert(d),this.renderCallback()}catch(n){console.error("Error importing inventory:",n),alert("Import failed. Please check the file format.")}}),t.click()}},Zr={[`${cn}-dropdown`]:"category",[`${dn}-dropdown`]:"location",[`${ln}-dropdown`]:"expiry",[`${un}-dropdown`]:"quantity"},Kr=class{getFreshState;renderRoot;services;modals;filters;config;hass;renderCallback;updateItemsCallback;translations;boundClickHandler=void 0;boundChangeHandler=void 0;boundKeydownHandler=void 0;eventListenersSetup=!1;scanHandler;barcodeProductHandler;historyHandler;importExportHandler;constructor(t,e,n,r,o,i,a,s,c,l){this.getFreshState=c,this.renderRoot=t,this.services=e,this.modals=n,this.filters=r,this.config=o,this.hass=i,this.renderCallback=a,this.updateItemsCallback=s,this.translations=l,this.scanHandler=new Br(t,()=>this.hass,()=>this.config,()=>this.translations,e,a),this.barcodeProductHandler=new Ur(t,()=>this.translations,e),this.historyHandler=new Gr(t,()=>this.hass,()=>this.config,()=>this.translations,e),this.importExportHandler=new Xr(()=>this.hass,()=>this.config,()=>this.translations,e,a)}setupEventListeners(){this.eventListenersSetup||(this.boundClickHandler=t=>{this.handleClick(t).catch(t=>{console.error("Error in handleClick:",t)})},this.boundChangeHandler=t=>{this.handleChange(t)},this.boundKeydownHandler=t=>{this.handleKeydown(t).catch(t=>{console.error("Error in handleKeydown:",t)})},this.renderRoot.addEventListener("click",this.boundClickHandler),this.renderRoot.addEventListener("change",this.boundChangeHandler),this.renderRoot.addEventListener("keydown",this.boundKeydownHandler),this.filters.setupSearchInput(this.config.entity,()=>this.handleSearchChange()),this.eventListenersSetup=!0)}cleanupEventListeners(){this.boundClickHandler&&(this.renderRoot.removeEventListener("click",this.boundClickHandler),this.boundClickHandler=void 0),this.boundChangeHandler&&(this.renderRoot.removeEventListener("change",this.boundChangeHandler),this.boundChangeHandler=void 0),this.boundKeydownHandler&&(this.renderRoot.removeEventListener("keydown",this.boundKeydownHandler),this.boundKeydownHandler=void 0),this.eventListenersSetup=!1}updateDependencies(t,e){this.config=t,this.hass=e}async handleClick(t){const e=t.target;if("BUTTON"===e.tagName&&e.hasAttribute("data-processing"))return t.preventDefault(),void t.stopPropagation();if(e.dataset.action&&e.dataset.name)return t.preventDefault(),t.stopPropagation(),void(await this.handleItemAction(e,e.dataset.action,e.dataset.name));if(this.modals.handleModalClick(t))return;const n=e.closest?.(".multi-select-trigger");if(n)return void this.toggleMultiSelectDropdown(n);if(e.closest?.(".multi-select-dropdown"))return;this.closeAllMultiSelectDropdowns();const r=e.closest?.("button")??e,o=r.id;if(o&&"BUTTON"===r.tagName)switch(o){case Ce:{t.preventDefault(),t.stopPropagation();const e=this.getUniqueLocations(),n=this.getUniqueCategories();this.modals.openAddModal(this.translations,e,n,t=>this.barcodeProductHandler.handleBarcodeProductLookup(t));break}case $e:t.preventDefault(),t.stopPropagation(),r.setAttribute("data-processing","true"),r.setAttribute("disabled","true"),r.style.opacity="0.6",r.style.pointerEvents="none";try{await this.handleAddItem()}finally{setTimeout(()=>{r.removeAttribute("data-processing"),r.removeAttribute("disabled"),r.style.opacity="1",r.style.pointerEvents="auto"},200)}break;case an:t.preventDefault(),t.stopPropagation(),this.toggleAdvancedFilters();break;case sn:t.preventDefault(),t.stopPropagation(),this.clearFilters();break;case Me:t.preventDefault(),t.stopPropagation(),await this.handleEditModalHistory();break;case Te:t.preventDefault(),t.stopPropagation(),await this.handleEditModalDelete();break;case Re:t.preventDefault(),t.stopPropagation(),this.toggleOverflowMenu();break;case Ae:t.preventDefault(),t.stopPropagation(),this.closeOverflowMenu(),await this.importExportHandler.handleExport();break;case ke:t.preventDefault(),t.stopPropagation(),this.closeOverflowMenu(),await this.importExportHandler.handleImport();break;case Fe:t.preventDefault(),t.stopPropagation(),this.applyExpiryBadgeFilter(Bn.EXPIRED);break;case qe:t.preventDefault(),t.stopPropagation(),this.applyExpiryBadgeFilter(Bn.SOON);break;case He:t.preventDefault(),t.stopPropagation(),await this.scanHandler.showScanPanel();break;case Qe:t.preventDefault(),t.stopPropagation(),this.scanHandler.hideScanPanel();break;case Ze:t.preventDefault(),t.stopPropagation(),await this.scanHandler.handleScanGo();break;case tn:t.preventDefault(),t.stopPropagation(),await this.handleScanAddItem();break;case nn:t.preventDefault(),t.stopPropagation(),this.scanHandler.hideScanPanel();break;default:return}else if("BUTTON"===e.tagName){if(e.classList.contains(En)){if(t.preventDefault(),t.stopPropagation(),e.closest(`#${te}`)){e.setAttribute("data-processing","true"),e.setAttribute("disabled","true"),e.style.opacity="0.6",e.style.pointerEvents="none";try{await this.handleSaveEdits()}finally{setTimeout(()=>{e.removeAttribute("data-processing"),e.removeAttribute("disabled"),e.style.opacity="1",e.style.pointerEvents="auto"},200)}}return}if(e.classList.contains(fn))return t.preventDefault(),t.stopPropagation(),void(e.closest(`#${Jt}`)?this.modals.closeAddModal():e.closest(`#${te}`)&&this.modals.closeEditModal())}}handleChange(t){const e=t.target;if(e instanceof HTMLInputElement&&"checkbox"===e.type){const t=e.closest?.(".multi-select-dropdown");if(t)return void this.handleFilterMultiSelectChange(t)}if(e.id===hn){const t=this.filters.getCurrentFilters(this.config.entity);return t.sortMethod=e.value,this.filters.saveFilters(this.config.entity,t),void this.renderCallback()}if(e instanceof HTMLInputElement&&"checkbox"===e.type&&(e.id.includes("auto")||e.id.includes("AUTO_ADD"))&&setTimeout(()=>{const t=e.parentElement?.querySelector(".auto-add-controls");t&&(t.style.display=e.checked?"block":"none")},0),e.id===pn&&e instanceof HTMLInputElement){const t=this.filters.getCurrentFilters(this.config.entity);t.searchText=e.value,this.filters.saveFilters(this.config.entity,t);const n=Er.validateInventoryItems(this.getFreshState().items),r=this.filters.filterItems(n,t),o=this.filters.sortItems(r,"name",this.translations);return this.updateItemsCallback(o,"name"),void this.filters.updateFilterIndicators(t,this.translations)}}async handleKeydown(t){const e=t,n=e.target;"Enter"!==e.key&&" "!==e.key||"button"===n.getAttribute("role")&&n.dataset.action&&n.dataset.name&&(e.preventDefault(),await this.handleItemAction(n,n.dataset.action,n.dataset.name))}handleSearchChange(){if(!this.hass.states[this.config.entity])return;const t=this.filters.getCurrentFilters(this.config.entity),e=this.renderRoot.querySelector(hn)?.value||Mn.SORT_METHOD,n=Er.validateInventoryItems(this.getFreshState().items),r=this.filters.filterItems(n,t),o=this.filters.sortItems(r,e,this.translations);this.updateItemsCallback(o,e),this.filters.updateFilterIndicators(t,this.translations)}async handleItemAction(t,e,n){if(!t.hasAttribute("disabled")&&"true"!==t.getAttribute("aria-disabled")){t.setAttribute("data-processing","true"),t.setAttribute("disabled","true"),t.style.opacity="0.6",t.style.pointerEvents="none";try{const t=qn.getInventoryId(this.hass,this.config.entity);switch(e){case kn:await this.services.incrementItem(t,n),this.renderCallback();break;case Sn:await this.services.decrementItem(t,n),this.renderCallback();break;case Rn:{const e=Hn.localize(this.translations,"actions.confirm_remove",{name:n},`Remove ${n} from inventory?`);confirm(e)&&(await this.services.removeItem(t,n),this.renderCallback());break}case Cn:{const t=this.getFreshState(),e=this.getUniqueLocations(),r=this.getUniqueCategories();this.modals.openEditModal(n,()=>t,this.translations,e,r);break}case In:await this.historyHandler.showItemHistory(n);break;default:console.warn(`Unknown action: ${e}`)}}catch(r){console.error(`Error performing ${e} on ${n}:`,r)}finally{setTimeout(()=>{t.removeAttribute("data-processing"),t.removeAttribute("disabled"),t.style.opacity="1",t.style.pointerEvents="auto"},200)}}}async handleAddItem(){await this.modals.addItem(this.config)&&this.modals.closeAddModal()}async handleSaveEdits(){await this.modals.saveEditModal(this.config)&&this.modals.closeEditModal()}applyExpiryBadgeFilter(t){try{const e=this.filters.getCurrentFilters(this.config.entity);e.expiry=1===e.expiry.length&&e.expiry[0]===t?[]:[t],this.filters.saveFilters(this.config.entity,e),this.applyFiltersWithoutRender(),setTimeout(()=>{this.filters.updateFilterIndicators(e,this.translations)},50)}catch(e){console.error("Error applying expiry badge filter:",e)}}toggleAdvancedFilters(){try{const t=this.filters.getCurrentFilters(this.config.entity);t.showAdvanced=!t.showAdvanced,this.filters.saveFilters(this.config.entity,t),this.renderCallback()}catch(t){console.error("Error toggling advanced filters:",t)}}clearFilters(){try{this.filters.clearFilters(this.config.entity);const t=this.renderRoot.querySelector(pn);t&&(t.value=""),this.renderCallback();const e=this.filters.getCurrentFilters(this.config.entity);setTimeout(()=>{this.filters.updateFilterIndicators(e,this.translations)},50)}catch(t){console.error("Error clearing filters:",t);const e=Hn.localize(this.translations,"errors.clear_filters_error",void 0,"Error clearing filters. Please try again.");alert(e)}}getUniqueLocations(){const t=this.getFreshState().items,e=/* @__PURE__ */new Set;return t.forEach(t=>{Array.isArray(t.locations)?t.locations.forEach(t=>{const n=t?.trim();n&&e.add(n)}):t.location?.trim()&&e.add(t.location.trim())}),Array.from(e).sort((t,e)=>t.localeCompare(e,void 0,{sensitivity:"base"}))}getUniqueCategories(){const t=this.getFreshState().items,e=/* @__PURE__ */new Set;return t.forEach(t=>{Array.isArray(t.categories)?t.categories.forEach(t=>{const n=t?.trim();n&&e.add(n)}):t.category?.trim()&&e.add(t.category.trim())}),Array.from(e).sort((t,e)=>t.localeCompare(e,void 0,{sensitivity:"base"}))}toggleMultiSelectDropdown(t){const e=t.parentElement?.querySelector(".multi-select-dropdown");if(!e)return;const n="block"===e.style.display;this.closeAllMultiSelectDropdowns(),e.style.display=n?"none":"block"}closeAllMultiSelectDropdowns(){this.renderRoot.querySelectorAll(".multi-select-dropdown").forEach(t=>{t.style.display="none"})}handleFilterMultiSelectChange(t){const e=Zr[t.id];if(!e)return;const n=Array.from(t.querySelectorAll('input[type="checkbox"]:checked')).map(t=>t.value),r=this.filters.getCurrentFilters(this.config.entity);r[e]=n,this.filters.saveFilters(this.config.entity,r),this.updateMultiSelectTriggerLabel(t,n.length),this.filters.updateFilterIndicators(r,this.translations),this.applyFiltersWithoutRender()}updateMultiSelectTriggerLabel(t,e){const n=t.parentElement?.querySelector(".multi-select-trigger .multi-select-label");n&&(n.textContent=e>0?`${e} selected`:n.dataset.placeholder??"")}applyFiltersWithoutRender(){const t=this.filters.getCurrentFilters(this.config.entity),e=this.renderRoot.querySelector(`#${hn}`)?.value||t.sortMethod||Mn.SORT_METHOD,n=Er.validateInventoryItems(this.getFreshState().items),r=this.filters.filterItems(n,t),o=this.filters.sortItems(r,e,this.translations);this.updateItemsCallback(o,e)}async handleEditModalHistory(){const t=this.modals.getCurrentEditingItem();t&&(this.modals.closeEditModal(),await this.historyHandler.showItemHistory(t))}async handleEditModalDelete(){const t=this.modals.getCurrentEditingItem();if(!t)return;const e=Hn.localize(this.translations,"actions.confirm_remove",{name:t},`Remove ${t} from inventory?`);if(confirm(e)){const e=qn.getInventoryId(this.hass,this.config.entity);await this.services.removeItem(e,t),this.modals.closeEditModal(),this.renderCallback()}}toggleOverflowMenu(){const t=this.renderRoot.getElementById(Ie);if(!t)return;const e="none"!==t.style.display;t.style.display=e?"none":"block",e||setTimeout(()=>{const e=n=>{t.contains(n.target)||(t.style.display="none",this.renderRoot.removeEventListener("click",e))};this.renderRoot.addEventListener("click",e)},0)}closeOverflowMenu(){const t=this.renderRoot.getElementById(Ie);t&&(t.style.display="none")}async handleScanAddItem(){const t=this.scanHandler.getScannedBarcode();this.scanHandler.hideScanPanel();const e=this.getUniqueLocations(),n=this.getUniqueCategories();this.modals.openAddModal(this.translations,e,n,t=>this.barcodeProductHandler.handleBarcodeProductLookup(t)),t&&setTimeout(()=>{const e=this.renderRoot.getElementById(`add-${ie}`),n=this.renderRoot.getElementById("add-barcode-chips");if(e){if(e.value=t,n){const e=document.createElement("span");e.className="barcode-chip",e.textContent=t,n.innerHTML="",n.appendChild(e)}this.barcodeProductHandler.handleBarcodeProductLookup(t)}},0)}},Jr=class{renderRoot;isInitialized=!1;services;constructor(t){this.renderRoot=t}initialize(t,e,n,r,o,i,a){if(this.isInitialized&&this.services)return this.services;if(t&&e&&this.renderRoot)try{const s=new Kn(t),c=new Ar(this.renderRoot),l=new jr(this.renderRoot),d=new Lr;d.setRenderCallback(n);const u=e=>qn.getInventoryId(t,e),p=new wr(this.renderRoot,s,u,r,i),h=new Kr(this.renderRoot,s,p,c,e,t,n,o,i,a);return this.services={services:s,modals:p,filters:c,renderer:l,state:d,eventHandler:h},this.isInitialized=!0,this.services}catch(s){return void console.error("Failed to initialize modules:",s)}}updateDependencies(t,e){this.services&&this.isInitialized&&this.services.eventHandler.updateDependencies(e,t)}getServices(){return this.isInitialized?this.services:void 0}isReady(){return this.isInitialized&&void 0!==this.services}cleanup(){this.services&&(this.services.eventHandler?.cleanupEventListeners(),this.services.state?.cleanup(),this.services.modals?.destroy()),this.services=void 0,this.isInitialized=!1}},to=class{lifecycleManager;renderRoot;updateTimeout=void 0;saveTimeout=void 0;constructor(t,e){this.lifecycleManager=t,this.renderRoot=e}render(t,e,n,r,o,i){if(t&&e&&this.renderRoot)try{const a=t.entity,s=e.states[a];if(!s){const t=Hn.localize(r,"errors.entity_not_found",{entity:a},`Entity ${a} not found. Please check your configuration.`);return void this.renderError(t)}const c=this.lifecycleManager.getServices();if(!c){const t=Hn.localize(r,"errors.initialization_failed",void 0,"Failed to initialize card components");return void this.renderError(t)}const{filters:l,renderer:d,eventHandler:u,state:p}=c,h=l.getCurrentFilters(a),f=h.sortMethod||Mn.SORT_METHOD,v=i(o),g=l.filterItems(v,h),m=l.sortItems(g,f,r);d.renderCard(s,a,m,h,f,n,r,t),u.setupEventListeners(),l.updateFilterIndicators(h,r),p.trackUserInteraction(this.renderRoot)}catch(a){console.error("Error rendering card:",a);const t=Hn.localize(r,"errors.render_error",void 0,"An error occurred while rendering the card");this.renderError(t)}}updateItemsOnly(t,e,n,r,o){this.renderRoot&&this.renderRoot.querySelector(".items-container")&&Promise.resolve().then(()=>Or).then(({createItemsList:i})=>{const a=this.renderRoot.querySelector(".items-container");a&&(a.innerHTML=i(t,e,n,r||{},o))}).catch(t=>{console.error("Error loading templates:",t)})}debouncedRender(t){this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=setTimeout(()=>t(),100)}refreshAfterSave(t){this.saveTimeout&&clearTimeout(this.saveTimeout),this.saveTimeout=setTimeout(()=>{this.saveTimeout=void 0,t()},50)}renderError(t,e){if(!this.renderRoot)return;const n=this.lifecycleManager.getServices();if(n?.renderer)n.renderer.renderError(t);else{const n=e?Hn.localize(e,"common.error",void 0,"Error"):"Error";this.renderRoot.innerHTML=`\n        <ha-card>\n          <div class="card-content">\n            <div class="error-message" style="color: var(--error-color); padding: 16px; text-align: center;">\n              <p><strong>${n}:</strong> ${Er.sanitizeHtml(t)}</p>\n            </div>\n          </div>\n        </ha-card>\n      `}}cleanup(){this.updateTimeout&&(clearTimeout(this.updateTimeout),this.updateTimeout=void 0),this.saveTimeout&&(clearTimeout(this.saveTimeout),this.saveTimeout=void 0)}},eo="A card to manage your inventories",no=class extends mt{_config=void 0;_hass=void 0;_todoLists=[];_translations={};_items=[];lifecycleManager;renderingCoordinator;constructor(){super(),this.attachShadow({mode:"open"}),this.lifecycleManager=new Jr(this.shadowRoot),this.renderingCoordinator=new to(this.lifecycleManager,this.shadowRoot)}connectedCallback(){}setConfig(t){if(!t.entity)throw new Error("Entity is required");this._config=t}set hass(t){const e=this._hass;if(this._hass=t,!e)return void this._loadTranslations().then(()=>{this._updateTodoLists(),this._fetchItems()});if(e&&(e.language!==t.language||e.selectedLanguage!==t.selectedLanguage))return void this._loadTranslations().then(()=>{this._updateTodoLists(),this.render()});if(this._updateTodoLists(),!e)return void this.render();const n=this._config?.entity;if(n){this.lifecycleManager.updateDependencies(this._hass,this._config);const e=this.lifecycleManager.getServices();if(e&&e.state.hasRealEntityChange(t,n)){const t=this.shadowRoot?.getElementById("scan-panel");if(t&&"none"!==t.style.display)return;e.state.userInteracting?e.state.debouncedRender():this._fetchItems()}}}render(){this._config&&this._hass&&this.shadowRoot&&(this._translations||(this._translations={}),this.lifecycleManager.isReady()||this.lifecycleManager.initialize(this._hass,this._config,()=>{this._fetchItems()},()=>this._refreshAfterSave(),(t,e)=>this._updateItemsOnly(t,e),()=>({hass:this._hass,config:this._config,translations:this._translations,items:this._items}),this._translations)?this.renderingCoordinator.render(this._config,this._hass,this._todoLists,this._translations,this._items,t=>Er.validateInventoryItems(t)):this.renderingCoordinator.renderError("Failed to initialize card components"))}async _loadTranslations(){const t=this._hass?.language||this._hass?.selectedLanguage||"en";try{this._translations=await Hn.loadTranslations(t)}catch(e){console.warn("Failed to load translations:",e),this._translations={}}}localize(t,e,n){return Hn.localize(this._translations,t,e,n)}_refreshAfterSave(){this.renderingCoordinator.refreshAfterSave(()=>{this._fetchItems()})}async _fetchItems(){if(!this._hass||!this._config)return;const t=qn.getInventoryId(this._hass,this._config.entity);if(t){try{const e=this.lifecycleManager.getServices()?.services??new Kn(this._hass);this._items=await e.getItems(t)}catch(e){console.warn("Failed to fetch inventory items:",e)}this.render()}}_updateItemsOnly(t,e){this.renderingCoordinator.updateItemsOnly(t,e,this._todoLists,this._translations,this._config)}_updateTodoLists(){this._hass&&(this._todoLists=qn.extractTodoLists(this._hass))}getCardSize(){return 4}static getConfigElement(){return document.createElement("simple-inventory-config-editor")}static getStubConfig(){return{}}};!async function(){try{const t=document.documentElement.lang||navigator.language.substring(0,2)||"en",e=await Hn.loadTranslations(t),n=Hn.localize(e,"card.description",void 0,eo);if(n!==eo){eo=n;const t=window.customCards?.find(t=>"simple-inventory-card"===t.type);t&&(t.description=eo)}}catch(t){console.warn("Failed to load card description translation:",t)}}(),customElements.get("simple-inventory-card")||customElements.define("simple-inventory-card",no),customElements.get("simple-inventory-config-editor")||customElements.define("simple-inventory-config-editor",Yn),window.customCards=window.customCards||[];var ro={type:"simple-inventory-card",name:"Simple Inventory Card",description:eo,preview:!0,documentationURL:"https://github.com/blaineventurine/simple-inventory-card"};window.customCards.find(t=>"simple-inventory-card"===t.type)||window.customCards.push(ro),globalThis.setTimeout(()=>{const t=new Event("custom_card_update",{bubbles:!0,cancelable:!1});document.dispatchEvent(t)},2e3),console.info(`%c Simple Inventory Card %c ${l}`,"color: steelblue; background: black; font-weight: bold;");export{Yn as ConfigEditor,no as SimpleInventoryCard};