(this["webpackJsonpbeancount-web"]=this["webpackJsonpbeancount-web"]||[]).push([[14],{119:function(e,t,a){"use strict";var n=a(113),r=a(40),c=a(41),i=a(43),l=a(42),o=a(0),s=a(3);t.a=function(e){return function(t){Object(i.a)(o,t);var a=Object(l.a)(o);function o(){var e;Object(r.a)(this,o);for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).defaultCommodity={currency:"CNY",symbol:"\uffe5"},e.currentCommodity=window.localStorage.getItem("ledgerCurrency"),e}return Object(c.a)(o,[{key:"render",value:function(){return Object(s.jsx)(e,Object(n.a)(Object(n.a)({},this.props),{},{commodity:this.currentCommodity?JSON.parse(this.currentCommodity):this.defaultCommodity}))}}]),o}(o.Component)}},258:function(e,t,a){"use strict";var n=a(2),r=a(1),c=a(6),i=a(14),l=a(0),o=a(12),s=a.n(o),d=a(153),u=void 0;function m(e,t){var a=e.prefixCls,c=e.invalidate,o=e.item,m=e.renderItem,b=e.responsive,f=e.registerSize,h=e.itemKey,v=e.className,p=e.style,j=e.children,O=e.display,g=e.order,y=e.component,x=void 0===y?"div":y,E=Object(i.a)(e,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),w=b&&!O;function C(e){f(h,e)}l.useEffect((function(){return function(){C(null)}}),[]);var N,S=m&&o!==u?m(o):j;c||(N={opacity:w?0:1,height:w?0:u,overflowY:w?"hidden":u,order:b?g:u,pointerEvents:w?"none":u,position:w?"absolute":u});var I={};w&&(I["aria-hidden"]=!0);var k=l.createElement(x,Object(n.a)({className:s()(!c&&a,v),style:Object(r.a)(Object(r.a)({},N),p)},I,E,{ref:t}),S);return b&&(k=l.createElement(d.a,{onResize:function(e){C(e.offsetWidth)}},k)),k}var b=l.forwardRef(m);b.displayName="Item";var f=b,h=a(53);var v=function(e,t){var a=l.useContext(O);if(!a){var r=e.component,c=void 0===r?"div":r,o=Object(i.a)(e,["component"]);return l.createElement(c,Object(n.a)({},o,{ref:t}))}var d=a.className,u=Object(i.a)(a,["className"]),m=e.className,b=Object(i.a)(e,["className"]);return l.createElement(O.Provider,{value:null},l.createElement(f,Object(n.a)({ref:t,className:s()(d,m)},u,b)))},p=l.forwardRef(v);p.displayName="RawItem";var j=p,O=l.createContext(null),g="responsive",y="invalidate";function x(e){return"+ ".concat(e.length," ...")}function E(e,t){var a=e.prefixCls,o=void 0===a?"rc-overflow":a,u=e.data,m=void 0===u?[]:u,b=e.renderItem,v=e.renderRawItem,p=e.itemKey,j=e.itemWidth,E=void 0===j?10:j,w=e.ssr,C=e.style,N=e.className,S=e.maxCount,I=e.renderRest,k=e.renderRawRest,L=e.suffix,R=e.component,P=void 0===R?"div":R,z=e.itemComponent,M=e.onVisibleChange,T=Object(i.a)(e,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),V=function(){var e=Object(l.useState)({}),t=Object(c.a)(e,2)[1],a=Object(l.useRef)([]),n=Object(l.useRef)(!1),r=0,i=0;return Object(l.useEffect)((function(){return function(){n.current=!0}}),[]),function(e){var c=r;return r+=1,a.current.length<c+1&&(a.current[c]=e),[a.current[c],function(e){a.current[c]="function"===typeof e?e(a.current[c]):e,h.a.cancel(i),i=Object(h.a)((function(){n.current||t({})}))}]}}(),A="full"===w,B=V(null),K=Object(c.a)(B,2),D=K[0],H=K[1],q=D||0,F=V(new Map),G=Object(c.a)(F,2),J=G[0],Q=G[1],W=V(0),_=Object(c.a)(W,2),X=_[0],Y=_[1],U=V(0),$=Object(c.a)(U,2),Z=$[0],ee=$[1],te=V(0),ae=Object(c.a)(te,2),ne=ae[0],re=ae[1],ce=Object(l.useState)(null),ie=Object(c.a)(ce,2),le=ie[0],oe=ie[1],se=Object(l.useState)(null),de=Object(c.a)(se,2),ue=de[0],me=de[1],be=l.useMemo((function(){return null===ue&&A?Number.MAX_SAFE_INTEGER:ue||0}),[ue,D]),fe=Object(l.useState)(!1),he=Object(c.a)(fe,2),ve=he[0],pe=he[1],je="".concat(o,"-item"),Oe=Math.max(X,Z),ge=m.length&&S===g,ye=S===y,xe=ge||"number"===typeof S&&m.length>S,Ee=Object(l.useMemo)((function(){var e=m;return ge?e=null===D&&A?m:m.slice(0,Math.min(m.length,q/E)):"number"===typeof S&&(e=m.slice(0,S)),e}),[m,E,D,S,ge]),we=Object(l.useMemo)((function(){return ge?m.slice(be+1):m.slice(Ee.length)}),[m,Ee,ge,be]),Ce=Object(l.useCallback)((function(e,t){var a;return"function"===typeof p?p(e):null!==(a=p&&(null===e||void 0===e?void 0:e[p]))&&void 0!==a?a:t}),[p]),Ne=Object(l.useCallback)(b||function(e){return e},[b]);function Se(e,t){me(e),t||(pe(e<m.length-1),null===M||void 0===M||M(e))}function Ie(e,t){Q((function(a){var n=new Map(a);return null===t?n.delete(e):n.set(e,t),n}))}function ke(e){return J.get(Ce(Ee[e],e))}l.useLayoutEffect((function(){if(q&&Oe&&Ee){var e=ne,t=Ee.length,a=t-1;if(!t)return Se(0),void oe(null);for(var n=0;n<t;n+=1){var r=ke(n);if(void 0===r){Se(n-1,!0);break}if(e+=r,0===a&&e<=q||n===a-1&&e+ke(a)<=q){Se(a),oe(null);break}if(e+Oe>q){Se(n-1),oe(e-r-ne+Z);break}}L&&ke(0)+ne>q&&oe(null)}}),[q,J,Z,ne,Ce,Ee]);var Le=ve&&!!we.length,Re={};null!==le&&ge&&(Re={position:"absolute",left:le,top:0});var Pe,ze={prefixCls:je,responsive:ge,component:z,invalidate:ye},Me=v?function(e,t){var a=Ce(e,t);return l.createElement(O.Provider,{key:a,value:Object(r.a)(Object(r.a)({},ze),{},{order:t,item:e,itemKey:a,registerSize:Ie,display:t<=be})},v(e,t))}:function(e,t){var a=Ce(e,t);return l.createElement(f,Object(n.a)({},ze,{order:t,key:a,item:e,renderItem:Ne,itemKey:a,registerSize:Ie,display:t<=be}))},Te={order:Le?be:Number.MAX_SAFE_INTEGER,className:"".concat(je,"-rest"),registerSize:function(e,t){ee(t),Y(Z)},display:Le};if(k)k&&(Pe=l.createElement(O.Provider,{value:Object(r.a)(Object(r.a)({},ze),Te)},k(we)));else{var Ve=I||x;Pe=l.createElement(f,Object(n.a)({},ze,Te),"function"===typeof Ve?Ve(we):Ve)}var Ae=l.createElement(P,Object(n.a)({className:s()(!ye&&o,N),style:C,ref:t},T),Ee.map(Me),xe?Pe:null,L&&l.createElement(f,Object(n.a)({},ze,{order:be,className:"".concat(je,"-suffix"),registerSize:function(e,t){re(t)},display:!0,style:Re}),L));return ge&&(Ae=l.createElement(d.a,{onResize:function(e,t){H(t.clientWidth)}},Ae)),Ae}var w=l.forwardRef(E);w.displayName="Overflow",w.Item=j,w.RESPONSIVE=g,w.INVALIDATE=y;var C=w;t.a=C},275:function(e,t,a){"use strict";var n=a(273);t.a=n.a},276:function(e,t,a){"use strict";var n=a(165);t.a=n.a},357:function(e,t,a){"use strict";var n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},c=a(8),i=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};i.displayName="DownOutlined";t.a=n.forwardRef(i)},477:function(e,t,a){"use strict";a.r(t);var n=a(40),r=a(41),c=a(43),i=a(42),l=a(468),o=a(0),s=a.n(o),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0022.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"}}]},name:"book",theme:"outlined"},u=a(8),m=function(e,t){return o.createElement(u.a,Object.assign({},e,{ref:t,icon:d}))};m.displayName="BookOutlined";var b=o.forwardRef(m),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"}}]},name:"calendar",theme:"outlined"},h=function(e,t){return o.createElement(u.a,Object.assign({},e,{ref:t,icon:f}))};h.displayName="CalendarOutlined";var v=o.forwardRef(h),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},j=function(e,t){return o.createElement(u.a,Object.assign({},e,{ref:t,icon:p}))};j.displayName="UpOutlined";var O=o.forwardRef(j),g=a(357),y=a(307),x=a(5),E=a(2),w=a(12),C=a.n(w),N=a(107),S=a(29),I=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},k=function(e){var t=e.prefixCls,a=e.className,n=e.hoverable,r=void 0===n||n,c=I(e,["prefixCls","className","hoverable"]);return o.createElement(S.a,null,(function(e){var n=(0,e.getPrefixCls)("card",t),i=C()("".concat(n,"-grid"),a,Object(x.a)({},"".concat(n,"-grid-hoverable"),r));return o.createElement("div",Object(E.a)({},c,{className:i}))}))},L=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},R=function(e){return o.createElement(S.a,null,(function(t){var a=t.getPrefixCls,n=e.prefixCls,r=e.className,c=e.avatar,i=e.title,l=e.description,s=L(e,["prefixCls","className","avatar","title","description"]),d=a("card",n),u=C()("".concat(d,"-meta"),r),m=c?o.createElement("div",{className:"".concat(d,"-meta-avatar")},c):null,b=i?o.createElement("div",{className:"".concat(d,"-meta-title")},i):null,f=l?o.createElement("div",{className:"".concat(d,"-meta-description")},l):null,h=b||f?o.createElement("div",{className:"".concat(d,"-meta-detail")},b,f):null;return o.createElement("div",Object(E.a)({},s,{className:u}),m,h)}))},P=a(462),z=a(275),M=a(276),T=a(54),V=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};var A=function(e){var t,a,n,r=o.useContext(S.b),c=r.getPrefixCls,i=r.direction,l=o.useContext(T.b),s=e.prefixCls,d=e.className,u=e.extra,m=e.headStyle,b=void 0===m?{}:m,f=e.bodyStyle,h=void 0===f?{}:f,v=e.title,p=e.loading,j=e.bordered,O=void 0===j||j,g=e.size,y=e.type,w=e.cover,I=e.actions,L=e.tabList,R=e.children,A=e.activeTabKey,B=e.defaultActiveTabKey,K=e.tabBarExtraContent,D=e.hoverable,H=e.tabProps,q=void 0===H?{}:H,F=V(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),G=c("card",s),J=0===h.padding||"0px"===h.padding?{padding:24}:void 0,Q=o.createElement("div",{className:"".concat(G,"-loading-block")}),W=o.createElement("div",{className:"".concat(G,"-loading-content"),style:J},o.createElement(z.a,{gutter:8},o.createElement(M.a,{span:22},Q)),o.createElement(z.a,{gutter:8},o.createElement(M.a,{span:8},Q),o.createElement(M.a,{span:15},Q)),o.createElement(z.a,{gutter:8},o.createElement(M.a,{span:6},Q),o.createElement(M.a,{span:18},Q)),o.createElement(z.a,{gutter:8},o.createElement(M.a,{span:13},Q),o.createElement(M.a,{span:9},Q)),o.createElement(z.a,{gutter:8},o.createElement(M.a,{span:4},Q),o.createElement(M.a,{span:3},Q),o.createElement(M.a,{span:16},Q))),_=void 0!==A,X=Object(E.a)(Object(E.a)({},q),(t={},Object(x.a)(t,_?"activeKey":"defaultActiveKey",_?A:B),Object(x.a)(t,"tabBarExtraContent",K),t)),Y=L&&L.length?o.createElement(P.a,Object(E.a)({size:"large"},X,{className:"".concat(G,"-head-tabs"),onChange:function(t){var a;null===(a=e.onTabChange)||void 0===a||a.call(e,t)}}),L.map((function(e){return o.createElement(P.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(v||u||Y)&&(n=o.createElement("div",{className:"".concat(G,"-head"),style:b},o.createElement("div",{className:"".concat(G,"-head-wrapper")},v&&o.createElement("div",{className:"".concat(G,"-head-title")},v),u&&o.createElement("div",{className:"".concat(G,"-extra")},u)),Y));var U=w?o.createElement("div",{className:"".concat(G,"-cover")},w):null,$=o.createElement("div",{className:"".concat(G,"-body"),style:h},p?W:R),Z=I&&I.length?o.createElement("ul",{className:"".concat(G,"-actions")},function(e){return e.map((function(t,a){return o.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},o.createElement("span",null,t))}))}(I)):null,ee=Object(N.a)(F,["onTabChange"]),te=g||l,ae=C()(G,(a={},Object(x.a)(a,"".concat(G,"-loading"),p),Object(x.a)(a,"".concat(G,"-bordered"),O),Object(x.a)(a,"".concat(G,"-hoverable"),D),Object(x.a)(a,"".concat(G,"-contain-grid"),function(){var t;return o.Children.forEach(e.children,(function(e){e&&e.type&&e.type===k&&(t=!0)})),t}()),Object(x.a)(a,"".concat(G,"-contain-tabs"),L&&L.length),Object(x.a)(a,"".concat(G,"-").concat(te),te),Object(x.a)(a,"".concat(G,"-type-").concat(y),!!y),Object(x.a)(a,"".concat(G,"-rtl"),"rtl"===i),a),d);return o.createElement("div",Object(E.a)({},ee,{className:ae}),n,U,$,Z)};A.Grid=k,A.Meta=R;var B=A,K=a(353),D=a(480),H=a(484),q=a(60),F=a(44),G=a(119),J=a(3),Q={required:"${label} \u4e0d\u80fd\u4e3a\u7a7a\uff01"},W=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).theme=e.context.theme,e.formRef=s.a.createRef(),e.state={loading:!1,expand:!1,newLedger:!1,selectedLedger:{},ledgers:[],config:{}},e.handleQueryLedgerList=function(){e.setState({loading:!0}),Object(q.b)("/api/ledger",{method:"GET"}).then((function(t){e.setState({ledgers:t,newLedger:0==t.length})})).finally((function(){e.setState({loading:!1})}))},e.handleQueryServerConfig=function(){e.setState({loading:!0}),Object(q.b)("/api/config",{method:"GET"}).then((function(t){t.dataPath?e.setState({config:t}):window.location.href="/web/#/init"})).finally((function(){e.setState({loading:!1})}))},e.handleCreateLedger=function(t){e.setState({loading:!0}),Object(q.b)("/api/ledger",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then((function(t){window.localStorage.setItem("ledgerId",t.ledgerId),t.title&&window.localStorage.setItem("ledgerTitle",t.title),t.currency&&window.localStorage.setItem("ledgerCurrency",JSON.stringify({currency:t.currency,symbol:t.currencySymbol})),e.props.history.replace("/")})).finally((function(){e.setState({loading:!1})}))},e.handleSelectLedger=function(t){e.setState({selectedLedger:t})},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.handleQueryServerConfig(),this.handleQueryLedgerList()}},{key:"render",value:function(){var e=this;return this.context.theme!==this.theme&&(this.theme=this.context.theme),this.state.selectedLedger.mail||this.state.newLedger?Object(J.jsx)("div",{className:"ledger-page",children:Object(J.jsx)("div",{children:Object(J.jsxs)(K.a,{name:"add-account-form",size:"middle",layout:"vertical",ref:this.formRef,onFinish:this.handleCreateLedger,validateMessages:Q,loading:this.state.loading,children:[Object(J.jsx)(K.a.Item,{name:"ledgerName",label:"\u8d26\u672c\u540d\u79f0",initialValue:this.state.selectedLedger.mail||"",rules:[{required:!0}],children:Object(J.jsx)(D.a,{placeholder:"\u4f60\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a\u7684\u8d26\u672c\uff0c\u8d26\u672c\u4e4b\u95f4\u7684\u6570\u636e\u65e0\u6cd5\u4e92\u901a"})}),Object(J.jsx)(K.a.Item,{name:"secret",label:"\u8d26\u672c\u5bc6\u7801",children:Object(J.jsx)(D.a,{type:"password",placeholder:"\u8d26\u672c\u5bc6\u7801"})}),!this.state.selectedLedger.mail&&Object(J.jsxs)(o.Fragment,{children:[Object(J.jsx)("div",{style:{fontSize:14,marginBottom:"2rem",textAlign:"center"},children:Object(J.jsxs)("a",{onClick:function(){e.setState({expand:!e.state.expand})},children:[this.state.expand?Object(J.jsx)(O,{}):Object(J.jsx)(g.a,{})," \u66f4\u591a\u8d26\u672c\u8bbe\u7f6e"]})}),this.state.expand&&Object(J.jsxs)(o.Fragment,{children:[Object(J.jsx)(K.a.Item,{label:"\u8d26\u672c\u5f00\u59cb\u65e5\u671f",name:"startDate",initialValue:this.state.config.startDate,rules:[{required:!0}],children:Object(J.jsx)(D.a,{type:"date",placeholder:"\u8d26\u672c\u5f00\u59cb\u65e5\u671f"})}),Object(J.jsx)(K.a.Item,{label:"\u5e01\u79cd",name:"operatingCurrency",initialValue:this.state.config.operatingCurrency,rules:[{required:!0}],children:Object(J.jsx)(D.a,{placeholder:"\u5e01\u79cd"})}),Object(J.jsx)(K.a.Item,{label:"\u5e73\u8861\u8d26\u6237\u540d\u79f0\u8bbe\u7f6e",name:"openingBalances",initialValue:this.state.config.openingBalances,rules:[{required:!0}],children:Object(J.jsx)(D.a,{placeholder:"\u5e73\u8861\u8d26\u6237\u540d\u79f0\u8bbe\u7f6e"})}),Object(J.jsx)(K.a.Item,{label:"\u4fee\u6539\u6e90\u6587\u4ef6\u65f6\u662f\u5426\u5907\u4efd\u6570\u636e",name:"isBak",valuePropName:"checked",initialValue:this.state.config.isBak,children:Object(J.jsx)(H.a,{})})]})]}),Object(J.jsx)(K.a.Item,{children:Object(J.jsx)(y.a,{type:"primary",block:!0,htmlType:"submit",children:"\u521b\u5efa/\u8fdb\u5165\u4e2a\u4eba\u8d26\u672c"})}),this.state.ledgers.length>0&&Object(J.jsx)(K.a.Item,{children:Object(J.jsx)(y.a,{block:!0,onClick:function(){e.setState({selectedLedger:{},newLedger:!1})},children:"\u8fd4\u56de\u8d26\u672c"})})]})})}):Object(J.jsxs)("div",{className:"ledger-page",children:[Object(J.jsx)("div",{children:Object(J.jsx)(y.a,{block:!0,type:"dashed",icon:Object(J.jsx)(l.a,{}),onClick:function(){e.setState({newLedger:!0})},children:"\u521b\u5efa\u65b0\u8d26\u672c"})}),this.state.ledgers.map((function(t){return Object(J.jsx)(B,{style:{width:"100%",marginTop:16,cursor:"pointer"},loading:e.state.loading,children:Object(J.jsx)(B.Meta,{onClick:function(){e.handleSelectLedger(t)},title:t.title,description:Object(J.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(J.jsxs)("div",{children:[Object(J.jsxs)("span",{children:[Object(J.jsx)(b,{}),"\xa0",t.mail]}),"\xa0\xa0",t.createDate&&Object(J.jsxs)("span",{children:[Object(J.jsx)(v,{}),"\xa0",t.createDate]})]}),Object(J.jsx)("div",{children:Object(J.jsx)("span",{children:t.operatingCurrency})})]})})})}))]})}}]),a}(o.Component);W.contextType=F.a;t.default=Object(G.a)(W)}}]);