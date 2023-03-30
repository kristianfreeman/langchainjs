"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8092],{5318:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7378);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(t),u=l,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4809:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=t(5773),l=(t(7378),t(5318));const r={id:"llms.internal.ModelParams-1",title:"Interface: ModelParams",sidebar_label:"llms.internal.ModelParams",custom_edit_url:null},i=void 0,s={unversionedId:"api/interfaces/llms.internal.ModelParams-1",id:"api/interfaces/llms.internal.ModelParams-1",title:"Interface: ModelParams",description:"llms.internal.ModelParams",source:"@site/docs/api/interfaces/llms.internal.ModelParams-1.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/llms.internal.ModelParams-1",permalink:"/langchainjs/docs/api/interfaces/llms.internal.ModelParams-1",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"llms.internal.ModelParams-1",title:"Interface: ModelParams",sidebar_label:"llms.internal.ModelParams",custom_edit_url:null},sidebar:"sidebar",previous:{title:"llms.internal.HFInput",permalink:"/langchainjs/docs/api/interfaces/llms.internal.HFInput"},next:{title:"llms.internal.ModelParams",permalink:"/langchainjs/docs/api/interfaces/llms.internal.ModelParams"}},p={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"frequencyPenalty",id:"frequencypenalty",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"logitBias",id:"logitbias",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"n",id:"n",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"presencePenalty",id:"presencepenalty",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"streaming",id:"streaming",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"temperature",id:"temperature",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"topP",id:"topp",level:3},{value:"Defined in",id:"defined-in-6",level:4}],c={toc:o},d="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/llms"},"llms"),".",(0,l.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/llms.internal"},"internal"),".ModelParams"),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ModelParams"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/llms.internal.OpenAIInput-1"},(0,l.kt)("inlineCode",{parentName:"a"},"OpenAIInput"))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"frequencypenalty"},"frequencyPenalty"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"frequencyPenalty"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Penalizes repeated tokens according to frequency"),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/llms/openai-chat.ts#L22"},"langchain/src/llms/openai-chat.ts:22")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"logitbias"},"logitBias"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"logitBias"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,l.kt)("p",null,"Dictionary used to adjust the probability of specific tokens being generated"),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/llms/openai-chat.ts#L31"},"langchain/src/llms/openai-chat.ts:31")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"n"},"n"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"n"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Number of chat completions to generate for each prompt"),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/llms/openai-chat.ts#L28"},"langchain/src/llms/openai-chat.ts:28")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"presencepenalty"},"presencePenalty"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"presencePenalty"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Penalizes repeated tokens"),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/llms/openai-chat.ts#L25"},"langchain/src/llms/openai-chat.ts:25")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"streaming"},"streaming"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"streaming"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Whether to stream the results or not"),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/llms/openai-chat.ts#L34"},"langchain/src/llms/openai-chat.ts:34")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"temperature"},"temperature"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"temperature"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Sampling temperature to use, between 0 and 2, defaults to 1"),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/llms/openai-chat.ts#L16"},"langchain/src/llms/openai-chat.ts:16")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"topp"},"topP"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"topP"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Total probability mass of tokens to consider at each step, between 0 and 1, defaults to 1"),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/llms/openai-chat.ts#L19"},"langchain/src/llms/openai-chat.ts:19")))}m.isMDXComponent=!0}}]);