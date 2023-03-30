"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5393],{5318:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>k});var n=t(7378);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var h=n.createContext({}),c=function(e){var a=n.useContext(h),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(h.Provider,{value:a},e.children)},d="mdxType",o={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,h=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,k=d["".concat(h,".").concat(m)]||d[m]||o[m]||r;return t?n.createElement(k,l(l({ref:a},p),{},{components:t})):n.createElement(k,l({ref:a},p))}));function k(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var s={};for(var h in a)hasOwnProperty.call(a,h)&&(s[h]=a[h]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4479:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=t(5773),i=(t(7378),t(5318));const r={id:"chains.ChatVectorDBQAChain",title:"Class: ChatVectorDBQAChain",sidebar_label:"chains.ChatVectorDBQAChain",custom_edit_url:null},l=void 0,s={unversionedId:"api/classes/chains.ChatVectorDBQAChain",id:"api/classes/chains.ChatVectorDBQAChain",title:"Class: ChatVectorDBQAChain",description:"chains.ChatVectorDBQAChain",source:"@site/docs/api/classes/chains.ChatVectorDBQAChain.md",sourceDirName:"api/classes",slug:"/api/classes/chains.ChatVectorDBQAChain",permalink:"/langchainjs/docs/api/classes/chains.ChatVectorDBQAChain",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"chains.ChatVectorDBQAChain",title:"Class: ChatVectorDBQAChain",sidebar_label:"chains.ChatVectorDBQAChain",custom_edit_url:null},sidebar:"sidebar",previous:{title:"chains.BaseChain",permalink:"/langchainjs/docs/api/classes/chains.BaseChain"},next:{title:"chains.ConversationChain",permalink:"/langchainjs/docs/api/classes/chains.ConversationChain"}},h={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"callbackManager",id:"callbackmanager",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"chatHistoryKey",id:"chathistorykey",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"combineDocumentsChain",id:"combinedocumentschain",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"inputKey",id:"inputkey",level:3},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"k",id:"k",level:3},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"memory",id:"memory",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"outputKey",id:"outputkey",level:3},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"questionGeneratorChain",id:"questiongeneratorchain",level:3},{value:"Implementation of",id:"implementation-of-4",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"returnSourceDocuments",id:"returnsourcedocuments",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"vectorstore",id:"vectorstore",level:3},{value:"Implementation of",id:"implementation-of-5",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"verbose",id:"verbose",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"Accessors",id:"accessors",level:2},{value:"inputKeys",id:"inputkeys",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"Methods",id:"methods",level:2},{value:"_call",id:"_call",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"_chainType",id:"_chaintype",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"apply",id:"apply",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"call",id:"call",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"run",id:"run",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"serialize",id:"serialize",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"deserialize",id:"deserialize",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"fromLLM",id:"fromllm",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-20",level:4}],p={toc:c},d="wrapper";function o(e){let{components:a,...t}=e;return(0,i.kt)(d,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/chains"},"chains"),".ChatVectorDBQAChain"),(0,i.kt)("p",null,"Base interface that all chains must implement."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseChain"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ChatVectorDBQAChain"))))),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/interfaces/chains.internal.ChatVectorDBQAChainInput"},(0,i.kt)("inlineCode",{parentName:"a"},"ChatVectorDBQAChainInput")))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new ChatVectorDBQAChain"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"fields"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fields")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fields.combineDocumentsChain")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/chains.BaseChain"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseChain")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fields.inputKey?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fields.k?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fields.outputKey?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fields.questionGeneratorChain")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/chains.LLMChain"},(0,i.kt)("inlineCode",{parentName:"a"},"LLMChain")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fields.returnSourceDocuments?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fields.vectorstore")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore"},(0,i.kt)("inlineCode",{parentName:"a"},"VectorStore")))))),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#constructor"},"constructor")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/chat_vector_db_chain.ts#L65"},"langchain/src/chains/chat_vector_db_chain.ts:65")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"callbackmanager"},"callbackManager"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"callbackManager"),": ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/callbacks.CallbackManager"},(0,i.kt)("inlineCode",{parentName:"a"},"CallbackManager"))),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#callbackmanager"},"callbackManager")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/base.ts#L25"},"langchain/src/chains/base.ts:25")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"chathistorykey"},"chatHistoryKey"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"chatHistoryKey"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"chat_history"')),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/chat_vector_db_chain.ts#L49"},"langchain/src/chains/chat_vector_db_chain.ts:49")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"combinedocumentschain"},"combineDocumentsChain"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"combineDocumentsChain"),": ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseChain"))),(0,i.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/chains.internal.ChatVectorDBQAChainInput"},"ChatVectorDBQAChainInput"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/chains.internal.ChatVectorDBQAChainInput#combinedocumentschain"},"combineDocumentsChain")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/chat_vector_db_chain.ts#L59"},"langchain/src/chains/chat_vector_db_chain.ts:59")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inputkey"},"inputKey"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"inputKey"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"question"')),(0,i.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/chains.internal.ChatVectorDBQAChainInput"},"ChatVectorDBQAChainInput"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/chains.internal.ChatVectorDBQAChainInput#inputkey"},"inputKey")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/chat_vector_db_chain.ts#L47"},"langchain/src/chains/chat_vector_db_chain.ts:47")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"k"},"k"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"k"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"4")),(0,i.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/chains.internal.ChatVectorDBQAChainInput"},"ChatVectorDBQAChainInput"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/chains.internal.ChatVectorDBQAChainInput#k"},"k")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/chat_vector_db_chain.ts#L45"},"langchain/src/chains/chat_vector_db_chain.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"memory"},"memory"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"memory"),": ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/memory.BaseMemory"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseMemory"))),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#memory"},"memory")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/base.ts#L21"},"langchain/src/chains/base.ts:21")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"outputkey"},"outputKey"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"outputKey"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"result"')),(0,i.kt)("h4",{id:"implementation-of-3"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/chains.internal.ChatVectorDBQAChainInput"},"ChatVectorDBQAChainInput"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/chains.internal.ChatVectorDBQAChainInput#outputkey"},"outputKey")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/chat_vector_db_chain.ts#L55"},"langchain/src/chains/chat_vector_db_chain.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"questiongeneratorchain"},"questionGeneratorChain"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"questionGeneratorChain"),": ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.LLMChain"},(0,i.kt)("inlineCode",{parentName:"a"},"LLMChain"))),(0,i.kt)("h4",{id:"implementation-of-4"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/chains.internal.ChatVectorDBQAChainInput"},"ChatVectorDBQAChainInput"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/chains.internal.ChatVectorDBQAChainInput#questiongeneratorchain"},"questionGeneratorChain")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/chat_vector_db_chain.ts#L61"},"langchain/src/chains/chat_vector_db_chain.ts:61")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"returnsourcedocuments"},"returnSourceDocuments"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"returnSourceDocuments"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/chat_vector_db_chain.ts#L63"},"langchain/src/chains/chat_vector_db_chain.ts:63")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"vectorstore"},"vectorstore"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"vectorstore"),": ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore"},(0,i.kt)("inlineCode",{parentName:"a"},"VectorStore"))),(0,i.kt)("h4",{id:"implementation-of-5"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/chains.internal.ChatVectorDBQAChainInput"},"ChatVectorDBQAChainInput"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/chains.internal.ChatVectorDBQAChainInput#vectorstore"},"vectorstore")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/chat_vector_db_chain.ts#L57"},"langchain/src/chains/chat_vector_db_chain.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"verbose"},"verbose"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"verbose"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#verbose"},"verbose")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/base.ts#L23"},"langchain/src/chains/base.ts:23")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"inputkeys"},"inputKeys"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"inputKeys"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"overrides-1"},"Overrides"),(0,i.kt)("p",null,"BaseChain.inputKeys"),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/chat_vector_db_chain.ts#L51"},"langchain/src/chains/chat_vector_db_chain.ts:51")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"_call"},"_","call"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"_call"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"values"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainValues")),">"),(0,i.kt)("p",null,"Run the core logic of this chain and return the output"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"values")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainValues")))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainValues")),">"),(0,i.kt)("h4",{id:"overrides-2"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#_call"},"_call")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/chat_vector_db_chain.ts#L85"},"langchain/src/chains/chat_vector_db_chain.ts:85")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_chaintype"},"_","chainType"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"_chainType"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},'"chat-vector-db"')),(0,i.kt)("p",null,"Return the string type key uniquely identifying this class of chain."),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"chat-vector-db"')),(0,i.kt)("h4",{id:"overrides-3"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#_chaintype"},"_chainType")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/chat_vector_db_chain.ts#L125"},"langchain/src/chains/chat_vector_db_chain.ts:125")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"apply"},"apply"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"apply"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"inputs"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainValues")),">"),(0,i.kt)("p",null,"Call the chain on all inputs in the list"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"inputs")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainValues")),"[]")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainValues")),">"),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#apply"},"apply")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/base.ts#L109"},"langchain/src/chains/base.ts:109")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"call"},"call"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"call"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"values"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainValues")),">"),(0,i.kt)("p",null,"Run the core logic of this chain and add to output if desired."),(0,i.kt)("p",null,"Wraps ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.ChatVectorDBQAChain#_call"},"_call")," and handles memory."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"values")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainValues")))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainValues")),">"),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#call"},"call")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/base.ts#L79"},"langchain/src/chains/base.ts:79")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"run"},"run"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"run"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"input")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#run"},"run")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/base.ts#L55"},"langchain/src/chains/base.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"serialize"},"serialize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"serialize"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/chains#serializedchatvectordbqachain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedChatVectorDBQAChain"))),(0,i.kt)("p",null,"Return a json-like object representing this chain."),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/chains#serializedchatvectordbqachain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedChatVectorDBQAChain"))),(0,i.kt)("h4",{id:"overrides-4"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#serialize"},"serialize")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/chat_vector_db_chain.ts#L160"},"langchain/src/chains/chat_vector_db_chain.ts:160")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"deserialize"},"deserialize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"deserialize"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"values"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.ChatVectorDBQAChain"},(0,i.kt)("inlineCode",{parentName:"a"},"ChatVectorDBQAChain")),">"),(0,i.kt)("p",null,"Load a chain from a json-like object describing it."),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/chains#serializedchatvectordbqachain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedChatVectorDBQAChain")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"values")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/chains.internal#loadvalues-1"},(0,i.kt)("inlineCode",{parentName:"a"},"LoadValues")))))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.ChatVectorDBQAChain"},(0,i.kt)("inlineCode",{parentName:"a"},"ChatVectorDBQAChain")),">"),(0,i.kt)("h4",{id:"overrides-5"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#deserialize"},"deserialize")),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/chat_vector_db_chain.ts#L129"},"langchain/src/chains/chat_vector_db_chain.ts:129")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fromllm"},"fromLLM"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"fromLLM"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"llm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"vectorstore"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.ChatVectorDBQAChain"},(0,i.kt)("inlineCode",{parentName:"a"},"ChatVectorDBQAChain"))),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"llm")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/base_language.BaseLanguageModel"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseLanguageModel")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vectorstore")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/vectorstores.VectorStore"},(0,i.kt)("inlineCode",{parentName:"a"},"VectorStore")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.inputKey?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.k?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.outputKey?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.qaTemplate?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.questionGeneratorTemplate?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.returnSourceDocuments?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.ChatVectorDBQAChain"},(0,i.kt)("inlineCode",{parentName:"a"},"ChatVectorDBQAChain"))),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/chat_vector_db_chain.ts#L169"},"langchain/src/chains/chat_vector_db_chain.ts:169")))}o.isMDXComponent=!0}}]);