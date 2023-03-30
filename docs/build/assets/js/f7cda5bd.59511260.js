"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2019],{5318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,k=d["".concat(s,".").concat(h)]||d[h]||m[h]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(5773),r=(a(7378),a(5318));const l={id:"agents_tools.VectorStoreQATool",title:"Class: VectorStoreQATool",sidebar_label:"agents/tools.VectorStoreQATool",custom_edit_url:null},i=void 0,o={unversionedId:"api/classes/agents_tools.VectorStoreQATool",id:"api/classes/agents_tools.VectorStoreQATool",title:"Class: VectorStoreQATool",description:"agents/tools.VectorStoreQATool",source:"@site/docs/api/classes/agents_tools.VectorStoreQATool.md",sourceDirName:"api/classes",slug:"/api/classes/agents_tools.VectorStoreQATool",permalink:"/langchainjs/docs/api/classes/agents_tools.VectorStoreQATool",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"agents_tools.VectorStoreQATool",title:"Class: VectorStoreQATool",sidebar_label:"agents/tools.VectorStoreQATool",custom_edit_url:null},sidebar:"sidebar",previous:{title:"agents/tools.Serper",permalink:"/langchainjs/docs/api/classes/agents_tools.Serper"},next:{title:"agents/tools.ZapierNLARunAction",permalink:"/langchainjs/docs/api/classes/agents_tools.ZapierNLARunAction"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"callbackManager",id:"callbackmanager",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"chain",id:"chain",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"description",id:"description",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"llm",id:"llm",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"name",id:"name",level:3},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"returnDirect",id:"returndirect",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"vectorStore",id:"vectorstore",level:3},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"verbose",id:"verbose",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"Methods",id:"methods",level:2},{value:"_call",id:"_call",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"call",id:"call",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"getDescription",id:"getdescription",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-11",level:4}],c={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/agents_tools"},"agents/tools"),".VectorStoreQATool"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool"},(0,r.kt)("inlineCode",{parentName:"a"},"Tool"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"VectorStoreQATool"))))),(0,r.kt)("h2",{id:"implements"},"Implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/interfaces/agents_tools.internal.VectorStoreTool"},(0,r.kt)("inlineCode",{parentName:"a"},"VectorStoreTool")))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new VectorStoreQATool"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fields"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fields")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/interfaces/agents_tools.internal.VectorStoreTool"},(0,r.kt)("inlineCode",{parentName:"a"},"VectorStoreTool")))))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool"},"Tool"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool#constructor"},"constructor")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/vectorstore.ts#L22"},"langchain/src/agents/tools/vectorstore.ts:22")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"callbackmanager"},"callbackManager"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"callbackManager"),": ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/callbacks.CallbackManager"},(0,r.kt)("inlineCode",{parentName:"a"},"CallbackManager"))),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool"},"Tool"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool#callbackmanager"},"callbackManager")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/base.ts#L13"},"langchain/src/agents/tools/base.ts:13")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"chain"},"chain"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"chain"),": ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.VectorDBQAChain"},(0,r.kt)("inlineCode",{parentName:"a"},"VectorDBQAChain"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/vectorstore.ts#L20"},"langchain/src/agents/tools/vectorstore.ts:20")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"description"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"overrides-1"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool"},"Tool"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool#description"},"description")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/vectorstore.ts#L18"},"langchain/src/agents/tools/vectorstore.ts:18")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"llm"},"llm"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"llm"),": ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/base_language.BaseLanguageModel"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseLanguageModel"))),(0,r.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/agents_tools.internal.VectorStoreTool"},"VectorStoreTool"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/agents_tools.internal.VectorStoreTool#llm"},"llm")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/vectorstore.ts#L14"},"langchain/src/agents/tools/vectorstore.ts:14")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"overrides-2"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool"},"Tool"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool#name"},"name")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/vectorstore.ts#L16"},"langchain/src/agents/tools/vectorstore.ts:16")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"returndirect"},"returnDirect"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"returnDirect"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool"},"Tool"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool#returndirect"},"returnDirect")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/base.ts#L44"},"langchain/src/agents/tools/base.ts:44")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"vectorstore"},"vectorStore"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"vectorStore"),": ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore"},(0,r.kt)("inlineCode",{parentName:"a"},"VectorStore"))),(0,r.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/agents_tools.internal.VectorStoreTool"},"VectorStoreTool"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/agents_tools.internal.VectorStoreTool#vectorstore"},"vectorStore")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/vectorstore.ts#L12"},"langchain/src/agents/tools/vectorstore.ts:12")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"verbose"},"verbose"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"verbose"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool"},"Tool"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool#verbose"},"verbose")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/base.ts#L11"},"langchain/src/agents/tools/base.ts:11")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"_call"},"_","call"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"_call"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("h4",{id:"overrides-3"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool"},"Tool"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool#_call"},"_call")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/vectorstore.ts#L35"},"langchain/src/agents/tools/vectorstore.ts:35")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"call"},"call"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"call"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"arg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"verbose?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"arg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"verbose?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool"},"Tool"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool#call"},"call")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/base.ts#L22"},"langchain/src/agents/tools/base.ts:22")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getdescription"},"getDescription"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"getDescription"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"description"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/vectorstore.ts#L31"},"langchain/src/agents/tools/vectorstore.ts:31")))}m.isMDXComponent=!0}}]);