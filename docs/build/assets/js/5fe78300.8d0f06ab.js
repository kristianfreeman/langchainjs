"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7768],{5318:(e,n,a)=>{a.d(n,{Zo:()=>o,kt:()=>m});var t=a(7378);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),p=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},o=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||i;return a?t.createElement(m,l(l({ref:n},o),{},{components:a})):t.createElement(m,l({ref:n},o))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7095:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=a(5773),r=(a(7378),a(5318));const i={id:"chains.ChainInputs",title:"Interface: ChainInputs",sidebar_label:"chains.ChainInputs",custom_edit_url:null},l=void 0,s={unversionedId:"api/interfaces/chains.ChainInputs",id:"api/interfaces/chains.ChainInputs",title:"Interface: ChainInputs",description:"chains.ChainInputs",source:"@site/docs/api/interfaces/chains.ChainInputs.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/chains.ChainInputs",permalink:"/langchainjs/docs/api/interfaces/chains.ChainInputs",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"chains.ChainInputs",title:"Interface: ChainInputs",sidebar_label:"chains.ChainInputs",custom_edit_url:null},sidebar:"sidebar",previous:{title:"base_language.BaseLanguageModelParams",permalink:"/langchainjs/docs/api/interfaces/base_language.BaseLanguageModelParams"},next:{title:"document.DocumentParams",permalink:"/langchainjs/docs/api/interfaces/document.DocumentParams"}},c={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implemented by",id:"implemented-by",level:2},{value:"Properties",id:"properties",level:2},{value:"callbackManager",id:"callbackmanager",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"memory",id:"memory",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"verbose",id:"verbose",level:3},{value:"Defined in",id:"defined-in-2",level:4}],o={toc:p},u="wrapper";function h(e){let{components:n,...a}=e;return(0,r.kt)(u,(0,t.Z)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/chains"},"chains"),".ChainInputs"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ChainInputs"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/agents.internal.AgentExecutorInput"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentExecutorInput"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/chains.internal.LLMChainInput"},(0,r.kt)("inlineCode",{parentName:"a"},"LLMChainInput"))))),(0,r.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/classes/chains.BaseChain"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseChain")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"callbackmanager"},"callbackManager"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"callbackManager"),": ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/callbacks.CallbackManager"},(0,r.kt)("inlineCode",{parentName:"a"},"CallbackManager"))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/base.ts#L12"},"langchain/src/chains/base.ts:12")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"memory"},"memory"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"memory"),": ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/memory.BaseMemory"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseMemory"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/base.ts#L10"},"langchain/src/chains/base.ts:10")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"verbose"},"verbose"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"verbose"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/base.ts#L11"},"langchain/src/chains/base.ts:11")))}h.isMDXComponent=!0}}]);