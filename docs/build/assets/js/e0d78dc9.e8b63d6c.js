"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7997],{5318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,h=c["".concat(o,".").concat(k)]||c[k]||g[k]||l;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},579:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(5773),r=(a(7378),a(5318));const l={id:"agents_tools.BingSerpAPI",title:"Class: BingSerpAPI",sidebar_label:"agents/tools.BingSerpAPI",custom_edit_url:null},i=void 0,s={unversionedId:"api/classes/agents_tools.BingSerpAPI",id:"api/classes/agents_tools.BingSerpAPI",title:"Class: BingSerpAPI",description:"agents/tools.BingSerpAPI",source:"@site/docs/api/classes/agents_tools.BingSerpAPI.md",sourceDirName:"api/classes",slug:"/api/classes/agents_tools.BingSerpAPI",permalink:"/langchainjs/docs/api/classes/agents_tools.BingSerpAPI",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"agents_tools.BingSerpAPI",title:"Class: BingSerpAPI",sidebar_label:"agents/tools.BingSerpAPI",custom_edit_url:null},sidebar:"sidebar",previous:{title:"agents/tools.AIPluginTool",permalink:"/langchainjs/docs/api/classes/agents_tools.AIPluginTool"},next:{title:"agents/tools.Calculator",permalink:"/langchainjs/docs/api/classes/agents_tools.Calculator"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"callbackManager",id:"callbackmanager",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"description",id:"description",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"key",id:"key",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"name",id:"name",level:3},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"params",id:"params",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"returnDirect",id:"returndirect",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"verbose",id:"verbose",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"Methods",id:"methods",level:2},{value:"_call",id:"_call",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"call",id:"call",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-9",level:4}],d={toc:p},c="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/agents_tools"},"agents/tools"),".BingSerpAPI"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool"},(0,r.kt)("inlineCode",{parentName:"a"},"Tool"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"BingSerpAPI"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new BingSerpAPI"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"apiKey?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"params?"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"apiKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"process.env.BingApiKey"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool"},"Tool"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool#constructor"},"constructor")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/bingserpapi.ts#L13"},"langchain/src/agents/tools/bingserpapi.ts:13")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"callbackmanager"},"callbackManager"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"callbackManager"),": ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/callbacks.CallbackManager"},(0,r.kt)("inlineCode",{parentName:"a"},"CallbackManager"))),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool"},"Tool"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool#callbackmanager"},"callbackManager")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/base.ts#L13"},"langchain/src/agents/tools/base.ts:13")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"description"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"a search engine. useful for when you need to answer questions about current events. input should be a search query."')),(0,r.kt)("h4",{id:"overrides-1"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool"},"Tool"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool#description"},"description")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/bingserpapi.ts#L6"},"langchain/src/agents/tools/bingserpapi.ts:6")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"key"},"key"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"key"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/bingserpapi.ts#L9"},"langchain/src/agents/tools/bingserpapi.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"bing-search"')),(0,r.kt)("h4",{id:"overrides-2"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool"},"Tool"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool#name"},"name")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/bingserpapi.ts#L4"},"langchain/src/agents/tools/bingserpapi.ts:4")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"params"},"params"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"params"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/bingserpapi.ts#L11"},"langchain/src/agents/tools/bingserpapi.ts:11")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"returndirect"},"returnDirect"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"returnDirect"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool"},"Tool"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool#returndirect"},"returnDirect")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/base.ts#L44"},"langchain/src/agents/tools/base.ts:44")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"verbose"},"verbose"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"verbose"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool"},"Tool"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool#verbose"},"verbose")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/base.ts#L11"},"langchain/src/agents/tools/base.ts:11")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"_call"},"_","call"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"_call"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("h4",{id:"overrides-3"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool"},"Tool"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool#_call"},"_call")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/bingserpapi.ts#L29"},"langchain/src/agents/tools/bingserpapi.ts:29")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"call"},"call"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"call"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"arg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"verbose?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"arg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"verbose?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool"},"Tool"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/agents.Tool#call"},"call")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/agents/tools/base.ts#L22"},"langchain/src/agents/tools/base.ts:22")))}g.isMDXComponent=!0}}]);