"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1147],{5318:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>k});var l=n(7378);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=l.createContext({}),o=function(e){var a=l.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=o(e.components);return l.createElement(s.Provider,{value:a},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},u=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(n),u=t,k=d["".concat(s,".").concat(u)]||d[u]||b[u]||r;return n?l.createElement(k,i(i({ref:a},p),{},{components:n})):l.createElement(k,i({ref:a},p))}));function k(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c[d]="string"==typeof e?e:t,i[1]=c;for(var o=2;o<r;o++)i[o]=n[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9370:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var l=n(5773),t=(n(7378),n(5318));const r={id:"callbacks.internal.BaseCallbackHandlerInput",title:"Interface: BaseCallbackHandlerInput",sidebar_label:"callbacks.internal.BaseCallbackHandlerInput",custom_edit_url:null},i=void 0,c={unversionedId:"api/interfaces/callbacks.internal.BaseCallbackHandlerInput",id:"api/interfaces/callbacks.internal.BaseCallbackHandlerInput",title:"Interface: BaseCallbackHandlerInput",description:"callbacks.internal.BaseCallbackHandlerInput",source:"@site/docs/api/interfaces/callbacks.internal.BaseCallbackHandlerInput.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/callbacks.internal.BaseCallbackHandlerInput",permalink:"/langchainjs/docs/api/interfaces/callbacks.internal.BaseCallbackHandlerInput",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"callbacks.internal.BaseCallbackHandlerInput",title:"Interface: BaseCallbackHandlerInput",sidebar_label:"callbacks.internal.BaseCallbackHandlerInput",custom_edit_url:null},sidebar:"sidebar",previous:{title:"base_language.internal.AsyncCallerParams",permalink:"/langchainjs/docs/api/interfaces/base_language.internal.AsyncCallerParams"},next:{title:"callbacks.internal.BaseRun",permalink:"/langchainjs/docs/api/interfaces/callbacks.internal.BaseRun"}},s={},o=[{value:"Implemented by",id:"implemented-by",level:2},{value:"Properties",id:"properties",level:2},{value:"alwaysVerbose",id:"alwaysverbose",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"ignoreAgent",id:"ignoreagent",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"ignoreChain",id:"ignorechain",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"ignoreLLM",id:"ignorellm",level:3},{value:"Defined in",id:"defined-in-3",level:4}],p={toc:o},d="wrapper";function b(e){let{components:a,...n}=e;return(0,t.kt)(d,(0,l.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/callbacks"},"callbacks"),".",(0,t.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/callbacks.internal"},"internal"),".BaseCallbackHandlerInput"),(0,t.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/classes/callbacks.BaseCallbackHandler"},(0,t.kt)("inlineCode",{parentName:"a"},"BaseCallbackHandler")))),(0,t.kt)("h2",{id:"properties"},"Properties"),(0,t.kt)("h3",{id:"alwaysverbose"},"alwaysVerbose"),(0,t.kt)("p",null,"\u2022 ",(0,t.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,t.kt)("strong",{parentName:"p"},"alwaysVerbose"),": ",(0,t.kt)("inlineCode",{parentName:"p"},"boolean")),(0,t.kt)("h4",{id:"defined-in"},"Defined in"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/callbacks/base.ts#L12"},"langchain/src/callbacks/base.ts:12")),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"ignoreagent"},"ignoreAgent"),(0,t.kt)("p",null,"\u2022 ",(0,t.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,t.kt)("strong",{parentName:"p"},"ignoreAgent"),": ",(0,t.kt)("inlineCode",{parentName:"p"},"boolean")),(0,t.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/callbacks/base.ts#L15"},"langchain/src/callbacks/base.ts:15")),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"ignorechain"},"ignoreChain"),(0,t.kt)("p",null,"\u2022 ",(0,t.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,t.kt)("strong",{parentName:"p"},"ignoreChain"),": ",(0,t.kt)("inlineCode",{parentName:"p"},"boolean")),(0,t.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/callbacks/base.ts#L14"},"langchain/src/callbacks/base.ts:14")),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"ignorellm"},"ignoreLLM"),(0,t.kt)("p",null,"\u2022 ",(0,t.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,t.kt)("strong",{parentName:"p"},"ignoreLLM"),": ",(0,t.kt)("inlineCode",{parentName:"p"},"boolean")),(0,t.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/callbacks/base.ts#L13"},"langchain/src/callbacks/base.ts:13")))}b.isMDXComponent=!0}}]);