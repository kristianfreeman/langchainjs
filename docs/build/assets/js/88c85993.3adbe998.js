"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1438],{5318:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>u});var t=a(7378);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=t.createContext({}),o=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=o(e.components);return t.createElement(p.Provider,{value:n},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=o(a),d=i,u=m["".concat(p,".").concat(d)]||m[d]||h[d]||r;return a?t.createElement(u,l(l({ref:n},c),{},{components:a})):t.createElement(u,l({ref:n},c))}));function u(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var o=2;o<r;o++)l[o]=a[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2458:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var t=a(5773),i=(a(7378),a(5318));const r={id:"chains.internal.qaChainParams",title:"Interface: qaChainParams",sidebar_label:"chains.internal.qaChainParams",custom_edit_url:null},l=void 0,s={unversionedId:"api/interfaces/chains.internal.qaChainParams",id:"api/interfaces/chains.internal.qaChainParams",title:"Interface: qaChainParams",description:"chains.internal.qaChainParams",source:"@site/docs/api/interfaces/chains.internal.qaChainParams.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/chains.internal.qaChainParams",permalink:"/langchainjs/docs/api/interfaces/chains.internal.qaChainParams",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"chains.internal.qaChainParams",title:"Interface: qaChainParams",sidebar_label:"chains.internal.qaChainParams",custom_edit_url:null},sidebar:"sidebar",previous:{title:"chains.internal.VectorDBQAChainInput",permalink:"/langchainjs/docs/api/interfaces/chains.internal.VectorDBQAChainInput"},next:{title:"chains.internal.summarizationChainParams",permalink:"/langchainjs/docs/api/interfaces/chains.internal.summarizationChainParams"}},p={},o=[{value:"Properties",id:"properties",level:2},{value:"combineMapPrompt",id:"combinemapprompt",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"combinePrompt",id:"combineprompt",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"prompt",id:"prompt",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:o},m="wrapper";function h(e){let{components:n,...a}=e;return(0,i.kt)(m,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/chains"},"chains"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/chains.internal"},"internal"),".qaChainParams"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"combinemapprompt"},"combineMapPrompt"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"combineMapPrompt"),": ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/prompts.BasePromptTemplate"},(0,i.kt)("inlineCode",{parentName:"a"},"BasePromptTemplate"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/question_answering/load.ts#L18"},"langchain/src/chains/question_answering/load.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"combineprompt"},"combinePrompt"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"combinePrompt"),": ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/prompts.BasePromptTemplate"},(0,i.kt)("inlineCode",{parentName:"a"},"BasePromptTemplate"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/question_answering/load.ts#L19"},"langchain/src/chains/question_answering/load.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"prompt"},"prompt"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"prompt"),": ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/prompts.BasePromptTemplate"},(0,i.kt)("inlineCode",{parentName:"a"},"BasePromptTemplate"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/question_answering/load.ts#L17"},"langchain/src/chains/question_answering/load.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/question_answering/load.ts#L20"},"langchain/src/chains/question_answering/load.ts:20")))}h.isMDXComponent=!0}}]);