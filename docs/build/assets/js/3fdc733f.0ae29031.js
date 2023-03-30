"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7273],{5318:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>h});var t=a(7378);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},o="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),o=p(a),k=r,h=o["".concat(s,".").concat(k)]||o[k]||u[k]||l;return a?t.createElement(h,i(i({ref:n},d),{},{components:a})):t.createElement(h,i({ref:n},d))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[o]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<l;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2803:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var t=a(5773),r=(a(7378),a(5318));const l={id:"callbacks.internal.BaseRun",title:"Interface: BaseRun",sidebar_label:"callbacks.internal.BaseRun",custom_edit_url:null},i=void 0,c={unversionedId:"api/interfaces/callbacks.internal.BaseRun",id:"api/interfaces/callbacks.internal.BaseRun",title:"Interface: BaseRun",description:"callbacks.internal.BaseRun",source:"@site/docs/api/interfaces/callbacks.internal.BaseRun.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/callbacks.internal.BaseRun",permalink:"/langchainjs/docs/api/interfaces/callbacks.internal.BaseRun",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"callbacks.internal.BaseRun",title:"Interface: BaseRun",sidebar_label:"callbacks.internal.BaseRun",custom_edit_url:null},sidebar:"sidebar",previous:{title:"callbacks.internal.BaseCallbackHandlerInput",permalink:"/langchainjs/docs/api/interfaces/callbacks.internal.BaseCallbackHandlerInput"},next:{title:"callbacks.internal.BaseTracerSession",permalink:"/langchainjs/docs/api/interfaces/callbacks.internal.BaseTracerSession"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"end_time",id:"end_time",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"error",id:"error",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"execution_order",id:"execution_order",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"serialized",id:"serialized",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"session_id",id:"session_id",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"start_time",id:"start_time",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-7",level:4}],d={toc:p},o="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(o,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/callbacks"},"callbacks"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/callbacks.internal"},"internal"),".BaseRun"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"BaseRun"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/callbacks.internal.LLMRun"},(0,r.kt)("inlineCode",{parentName:"a"},"LLMRun"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/callbacks.internal.ChainRun"},(0,r.kt)("inlineCode",{parentName:"a"},"ChainRun"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/callbacks.internal.ToolRun"},(0,r.kt)("inlineCode",{parentName:"a"},"ToolRun"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"end_time"},"end","_","time"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"end","_","time"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/callbacks/tracers.ts#L20"},"langchain/src/callbacks/tracers.ts:20")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"error"},"error"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"error"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/callbacks/tracers.ts#L24"},"langchain/src/callbacks/tracers.ts:24")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"execution_order"},"execution","_","order"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"execution","_","order"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/callbacks/tracers.ts#L21"},"langchain/src/callbacks/tracers.ts:21")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"id"},"id"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/callbacks/tracers.ts#L18"},"langchain/src/callbacks/tracers.ts:18")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"serialized"},"serialized"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"serialized"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/callbacks/tracers.ts#L22"},"langchain/src/callbacks/tracers.ts:22")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"session_id"},"session","_","id"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"session","_","id"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/callbacks/tracers.ts#L23"},"langchain/src/callbacks/tracers.ts:23")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"start_time"},"start","_","time"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"start","_","time"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/callbacks/tracers.ts#L19"},"langchain/src/callbacks/tracers.ts:19")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"type"},"type"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"type"),": ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/callbacks.internal#runtype"},(0,r.kt)("inlineCode",{parentName:"a"},"RunType"))),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/callbacks/tracers.ts#L25"},"langchain/src/callbacks/tracers.ts:25")))}u.isMDXComponent=!0}}]);