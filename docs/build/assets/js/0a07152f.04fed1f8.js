"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6108],{5318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),o=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=o(a),u=n,h=c["".concat(i,".").concat(u)]||c[u]||d[u]||s;return a?r.createElement(h,l(l({ref:t},m),{},{components:a})):r.createElement(h,l({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:n,l[1]=p;for(var o=2;o<s;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},373:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var r=a(5773),n=(a(7378),a(5318));const s={id:"prompts.internal.BaseMessagePromptTemplate",title:"Class: BaseMessagePromptTemplate",sidebar_label:"prompts.internal.BaseMessagePromptTemplate",custom_edit_url:null},l=void 0,p={unversionedId:"api/classes/prompts.internal.BaseMessagePromptTemplate",id:"api/classes/prompts.internal.BaseMessagePromptTemplate",title:"Class: BaseMessagePromptTemplate",description:"prompts.internal.BaseMessagePromptTemplate",source:"@site/docs/api/classes/prompts.internal.BaseMessagePromptTemplate.md",sourceDirName:"api/classes",slug:"/api/classes/prompts.internal.BaseMessagePromptTemplate",permalink:"/langchainjs/docs/api/classes/prompts.internal.BaseMessagePromptTemplate",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"prompts.internal.BaseMessagePromptTemplate",title:"Class: BaseMessagePromptTemplate",sidebar_label:"prompts.internal.BaseMessagePromptTemplate",custom_edit_url:null},sidebar:"sidebar",previous:{title:"memory.internal.ChatMessageHistory",permalink:"/langchainjs/docs/api/classes/memory.internal.ChatMessageHistory"},next:{title:"prompts.internal.BaseMessageStringPromptTemplate",permalink:"/langchainjs/docs/api/classes/prompts.internal.BaseMessageStringPromptTemplate"}},i={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"inputVariables",id:"inputvariables",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"formatMessages",id:"formatmessages",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"serialize",id:"serialize",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],m={toc:o},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/prompts"},"prompts"),".",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/prompts.internal"},"internal"),".BaseMessagePromptTemplate"),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"BaseMessagePromptTemplate"))),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/prompts.MessagesPlaceholder"},(0,n.kt)("inlineCode",{parentName:"a"},"MessagesPlaceholder"))),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/prompts.internal.BaseMessageStringPromptTemplate"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseMessageStringPromptTemplate"))))),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new BaseMessagePromptTemplate"),"()"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"inputvariables"},"inputVariables"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,n.kt)("strong",{parentName:"p"},"inputVariables"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/chat.ts#L23"},"langchain/src/prompts/chat.ts:23")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"formatmessages"},"formatMessages"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,n.kt)("strong",{parentName:"p"},"formatMessages"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"values"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/schema.BaseChatMessage"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseChatMessage")),"[]",">"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"values")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#inputvalues"},(0,n.kt)("inlineCode",{parentName:"a"},"InputValues")))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/schema.BaseChatMessage"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseChatMessage")),"[]",">"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/chat.ts#L25"},"langchain/src/prompts/chat.ts:25")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"serialize"},"serialize"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"serialize"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/prompts#serializedmessageprompttemplate"},(0,n.kt)("inlineCode",{parentName:"a"},"SerializedMessagePromptTemplate"))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/prompts#serializedmessageprompttemplate"},(0,n.kt)("inlineCode",{parentName:"a"},"SerializedMessagePromptTemplate"))),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/chat.ts#L27"},"langchain/src/prompts/chat.ts:27")))}d.isMDXComponent=!0}}]);