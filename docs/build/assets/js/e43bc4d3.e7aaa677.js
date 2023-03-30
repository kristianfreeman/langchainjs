"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4356],{5318:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>u});var n=a(7378);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),h=p(a),m=s,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||r;return a?n.createElement(u,i(i({ref:t},o),{},{components:a})):n.createElement(u,i({ref:t},o))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[h]="string"==typeof e?e:s,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(5773),s=(a(7378),a(5318));const r={id:"schema.ChatMessage",title:"Class: ChatMessage",sidebar_label:"schema.ChatMessage",custom_edit_url:null},i=void 0,l={unversionedId:"api/classes/schema.ChatMessage",id:"api/classes/schema.ChatMessage",title:"Class: ChatMessage",description:"schema.ChatMessage",source:"@site/docs/api/classes/schema.ChatMessage.md",sourceDirName:"api/classes",slug:"/api/classes/schema.ChatMessage",permalink:"/langchainjs/docs/api/classes/schema.ChatMessage",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"schema.ChatMessage",title:"Class: ChatMessage",sidebar_label:"schema.ChatMessage",custom_edit_url:null},sidebar:"sidebar",previous:{title:"schema.BaseRetriever",permalink:"/langchainjs/docs/api/classes/schema.BaseRetriever"},next:{title:"schema.HumanChatMessage",permalink:"/langchainjs/docs/api/classes/schema.HumanChatMessage"}},c={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"role",id:"role",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"text",id:"text",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"_getType",id:"_gettype",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-3",level:4}],o={toc:p},h="wrapper";function d(e){let{components:t,...a}=e;return(0,s.kt)(h,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema"},"schema"),".ChatMessage"),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/schema.BaseChatMessage"},(0,s.kt)("inlineCode",{parentName:"a"},"BaseChatMessage"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"ChatMessage"))))),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"new ChatMessage"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"text"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"role"),")"),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"text")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"role")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string"))))),(0,s.kt)("h4",{id:"overrides"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/schema.BaseChatMessage"},"BaseChatMessage"),".",(0,s.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/schema.BaseChatMessage#constructor"},"constructor")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/schema/index.ts#L78"},"langchain/src/schema/index.ts:78")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"role"},"role"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"role"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/schema/index.ts#L76"},"langchain/src/schema/index.ts:76")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"text"},"text"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"text"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,"The text of the message."),(0,s.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/schema.BaseChatMessage"},"BaseChatMessage"),".",(0,s.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/schema.BaseChatMessage#text"},"text")),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/schema/index.ts#L47"},"langchain/src/schema/index.ts:47")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"_gettype"},"_","getType"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"_getType"),"(): ",(0,s.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#messagetype"},(0,s.kt)("inlineCode",{parentName:"a"},"MessageType"))),(0,s.kt)("p",null,"The type of the message."),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#messagetype"},(0,s.kt)("inlineCode",{parentName:"a"},"MessageType"))),(0,s.kt)("h4",{id:"overrides-1"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/schema.BaseChatMessage"},"BaseChatMessage"),".",(0,s.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/schema.BaseChatMessage#_gettype"},"_getType")),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/schema/index.ts#L83"},"langchain/src/schema/index.ts:83")))}d.isMDXComponent=!0}}]);