"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9323],{5318:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>k});var n=t(7378);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",o={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=p(t),h=i,k=c["".concat(s,".").concat(h)]||c[h]||o[h]||l;return t?n.createElement(k,r(r({ref:a},m),{},{components:t})):n.createElement(k,r({ref:a},m))}));function k(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=h;var d={};for(var s in a)hasOwnProperty.call(a,s)&&(d[s]=a[s]);d.originalType=e,d[c]="string"==typeof e?e:i,r[1]=d;for(var p=2;p<l;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4364:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=t(5773),i=(t(7378),t(5318));const l={id:"chains",title:"Module: chains",sidebar_label:"chains",sidebar_position:0,custom_edit_url:null},r=void 0,d={unversionedId:"api/modules/chains",id:"api/modules/chains",title:"Module: chains",description:"Modules",source:"@site/docs/api/modules/chains.md",sourceDirName:"api/modules",slug:"/api/modules/chains",permalink:"/langchainjs/docs/api/modules/chains",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"chains",title:"Module: chains",sidebar_label:"chains",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"callbacks",permalink:"/langchainjs/docs/api/modules/callbacks"},next:{title:"chat_models",permalink:"/langchainjs/docs/api/modules/chat_models"}},s={},p=[{value:"Modules",id:"modules",level:2},{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"SerializedAnalyzeDocumentChain",id:"serializedanalyzedocumentchain",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"SerializedBaseChain",id:"serializedbasechain",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"SerializedChatVectorDBQAChain",id:"serializedchatvectordbqachain",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"SerializedLLMChain",id:"serializedllmchain",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"SerializedMapReduceDocumentsChain",id:"serializedmapreducedocumentschain",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"SerializedSqlDatabaseChain",id:"serializedsqldatabasechain",level:3},{value:"Type declaration",id:"type-declaration-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"SerializedStuffDocumentsChain",id:"serializedstuffdocumentschain",level:3},{value:"Type declaration",id:"type-declaration-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"SerializedVectorDBQAChain",id:"serializedvectordbqachain",level:3},{value:"Type declaration",id:"type-declaration-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"Functions",id:"functions",level:2},{value:"loadChain",id:"loadchain",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"loadQAChain",id:"loadqachain",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"loadQAMapReduceChain",id:"loadqamapreducechain",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"loadQAStuffChain",id:"loadqastuffchain",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"loadSummarizationChain",id:"loadsummarizationchain",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-12",level:4}],m={toc:p},c="wrapper";function o(e){let{components:a,...t}=e;return(0,i.kt)(c,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"modules"},"Modules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/modules/chains.internal"},"internal"))),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/classes/chains.AnalyzeDocumentChain"},"AnalyzeDocumentChain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/classes/chains.ChatVectorDBQAChain"},"ChatVectorDBQAChain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/classes/chains.ConversationChain"},"ConversationChain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/classes/chains.ConversationalRetrievalQAChain"},"ConversationalRetrievalQAChain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/classes/chains.LLMChain"},"LLMChain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/classes/chains.MapReduceDocumentsChain"},"MapReduceDocumentsChain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/classes/chains.RetrievalQAChain"},"RetrievalQAChain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/classes/chains.SqlDatabaseChain"},"SqlDatabaseChain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/classes/chains.StuffDocumentsChain"},"StuffDocumentsChain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/classes/chains.VectorDBQAChain"},"VectorDBQAChain"))),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/interfaces/chains.ChainInputs"},"ChainInputs"))),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("h3",{id:"serializedanalyzedocumentchain"},"SerializedAnalyzeDocumentChain"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"SerializedAnalyzeDocumentChain"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"analyze_document_chain"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"combine_document_chain?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/chains#serializedbasechain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedBaseChain")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"combine_document_chain_path?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/serde.ts#L49"},"langchain/src/chains/serde.ts:49")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"serializedbasechain"},"SerializedBaseChain"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"SerializedBaseChain"),": ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/chains#serializedllmchain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedLLMChain"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/chains#serializedvectordbqachain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedVectorDBQAChain"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/chains#serializedstuffdocumentschain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedStuffDocumentsChain"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/chains#serializedsqldatabasechain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedSqlDatabaseChain"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/chains#serializedchatvectordbqachain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedChatVectorDBQAChain"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/chains#serializedmapreducedocumentschain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedMapReduceDocumentsChain"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/chains#serializedanalyzedocumentchain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedAnalyzeDocumentChain"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/serde.ts#L55"},"langchain/src/chains/serde.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"serializedchatvectordbqachain"},"SerializedChatVectorDBQAChain"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"SerializedChatVectorDBQAChain"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"chat-vector-db"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"combine_documents_chain")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/chains#serializedbasechain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedBaseChain")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"combine_documents_chain_path?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"k")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"question_generator")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/chains#serializedllmchain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedLLMChain")))))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/serde.ts#L33"},"langchain/src/chains/serde.ts:33")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"serializedllmchain"},"SerializedLLMChain"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"SerializedLLMChain"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"llm_chain"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"llm?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/llms#serializedllm"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedLLM")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"llm_path?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prompt?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/prompts#serializedbaseprompttemplate"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedBasePromptTemplate")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prompt_path?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/serde.ts#L5"},"langchain/src/chains/serde.ts:5")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"serializedmapreducedocumentschain"},"SerializedMapReduceDocumentsChain"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"SerializedMapReduceDocumentsChain"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"map_reduce_documents_chain"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"combine_document_chain?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/chains#serializedbasechain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedBaseChain")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"combine_document_chain_path?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"llm_chain?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/chains#serializedllmchain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedLLMChain")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"llm_chain_path?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/serde.ts#L41"},"langchain/src/chains/serde.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"serializedsqldatabasechain"},"SerializedSqlDatabaseChain"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"SerializedSqlDatabaseChain"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"sql_database_chain"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"llm")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/llms#serializedllm"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedLLM")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sql_database")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/chains.internal#serializedsqldatabase"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedSqlDatabase")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sql_database_chain_path?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/serde.ts#L13"},"langchain/src/chains/serde.ts:13")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"serializedstuffdocumentschain"},"SerializedStuffDocumentsChain"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"SerializedStuffDocumentsChain"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-5"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"stuff_documents_chain"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"llm_chain?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/chains#serializedllmchain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedLLMChain")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"llm_chain_path?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/serde.ts#L27"},"langchain/src/chains/serde.ts:27")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"serializedvectordbqachain"},"SerializedVectorDBQAChain"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"SerializedVectorDBQAChain"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-6"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"vector_db_qa"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"combine_documents_chain")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/chains#serializedbasechain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedBaseChain")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"combine_documents_chain_path?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"k")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/serde.ts#L20"},"langchain/src/chains/serde.ts:20")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"loadchain"},"loadChain"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"loadChain"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"uri"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"values?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseChain")),">"),(0,i.kt)("p",null,"Load a chain from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchain-hub"},"LangchainHub")," or local filesystem."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("p",null,"Loading from LangchainHub:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { loadChain } from "langchain/chains";\nconst chain = await loadChain("lc://chains/hello-world/chain.json");\nconst res = await chain.call({ topic: "my favorite color" });\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("p",null,"Loading from local filesystem:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { loadChain } from "langchain/chains";\nconst chain = await loadChain("/path/to/chain.json");\n')),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"uri")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"values")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/chains.internal#loadvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"LoadValues")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseChain")),">"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/load.ts#L37"},"langchain/src/chains/load.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"loadqachain"},"loadQAChain"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"loadQAChain"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"llm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"params?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.StuffDocumentsChain"},(0,i.kt)("inlineCode",{parentName:"a"},"StuffDocumentsChain"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.MapReduceDocumentsChain"},(0,i.kt)("inlineCode",{parentName:"a"},"MapReduceDocumentsChain"))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"llm")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/base_language.BaseLanguageModel"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseLanguageModel")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/interfaces/chains.internal.qaChainParams"},(0,i.kt)("inlineCode",{parentName:"a"},"qaChainParams")))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.StuffDocumentsChain"},(0,i.kt)("inlineCode",{parentName:"a"},"StuffDocumentsChain"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.MapReduceDocumentsChain"},(0,i.kt)("inlineCode",{parentName:"a"},"MapReduceDocumentsChain"))),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/question_answering/load.ts#L22"},"langchain/src/chains/question_answering/load.ts:22")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"loadqamapreducechain"},"loadQAMapReduceChain"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"loadQAMapReduceChain"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"llm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"params?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.MapReduceDocumentsChain"},(0,i.kt)("inlineCode",{parentName:"a"},"MapReduceDocumentsChain"))),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"llm")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/base_language.BaseLanguageModel"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseLanguageModel")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/interfaces/chains.internal.MapReduceQAChainParams"},(0,i.kt)("inlineCode",{parentName:"a"},"MapReduceQAChainParams")))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.MapReduceDocumentsChain"},(0,i.kt)("inlineCode",{parentName:"a"},"MapReduceDocumentsChain"))),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/question_answering/load.ts#L72"},"langchain/src/chains/question_answering/load.ts:72")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"loadqastuffchain"},"loadQAStuffChain"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"loadQAStuffChain"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"llm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"params?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.StuffDocumentsChain"},(0,i.kt)("inlineCode",{parentName:"a"},"StuffDocumentsChain"))),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"llm")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/base_language.BaseLanguageModel"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseLanguageModel")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/interfaces/chains.internal.StuffQAChainParams"},(0,i.kt)("inlineCode",{parentName:"a"},"StuffQAChainParams")))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.StuffDocumentsChain"},(0,i.kt)("inlineCode",{parentName:"a"},"StuffDocumentsChain"))),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/question_answering/load.ts#L57"},"langchain/src/chains/question_answering/load.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"loadsummarizationchain"},"loadSummarizationChain"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"loadSummarizationChain"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"llm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"params?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.StuffDocumentsChain"},(0,i.kt)("inlineCode",{parentName:"a"},"StuffDocumentsChain"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.MapReduceDocumentsChain"},(0,i.kt)("inlineCode",{parentName:"a"},"MapReduceDocumentsChain"))),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"llm")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/base_language.BaseLanguageModel"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseLanguageModel")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/interfaces/chains.internal.summarizationChainParams"},(0,i.kt)("inlineCode",{parentName:"a"},"summarizationChainParams")))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.StuffDocumentsChain"},(0,i.kt)("inlineCode",{parentName:"a"},"StuffDocumentsChain"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.MapReduceDocumentsChain"},(0,i.kt)("inlineCode",{parentName:"a"},"MapReduceDocumentsChain"))),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/summarization/load.ts#L16"},"langchain/src/chains/summarization/load.ts:16")))}o.isMDXComponent=!0}}]);