"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5338],{5318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7378);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,p=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),h=s(a),d=p,u=h["".concat(o,".").concat(d)]||h[d]||c[d]||r;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function u(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[h]="string"==typeof e?e:p,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},295:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(5773),p=(a(7378),a(5318));const r={id:"prompts.FewShotPromptTemplateInput",title:"Interface: FewShotPromptTemplateInput",sidebar_label:"prompts.FewShotPromptTemplateInput",custom_edit_url:null},l=void 0,i={unversionedId:"api/interfaces/prompts.FewShotPromptTemplateInput",id:"api/interfaces/prompts.FewShotPromptTemplateInput",title:"Interface: FewShotPromptTemplateInput",description:"prompts.FewShotPromptTemplateInput",source:"@site/docs/api/interfaces/prompts.FewShotPromptTemplateInput.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/prompts.FewShotPromptTemplateInput",permalink:"/langchainjs/docs/api/interfaces/prompts.FewShotPromptTemplateInput",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"prompts.FewShotPromptTemplateInput",title:"Interface: FewShotPromptTemplateInput",sidebar_label:"prompts.FewShotPromptTemplateInput",custom_edit_url:null},sidebar:"sidebar",previous:{title:"prompts.BasePromptTemplateInput",permalink:"/langchainjs/docs/api/interfaces/prompts.BasePromptTemplateInput"},next:{title:"prompts.PromptTemplateInput",permalink:"/langchainjs/docs/api/interfaces/prompts.PromptTemplateInput"}},o={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implemented by",id:"implemented-by",level:2},{value:"Properties",id:"properties",level:2},{value:"examplePrompt",id:"exampleprompt",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"exampleSelector",id:"exampleselector",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"exampleSeparator",id:"exampleseparator",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"examples",id:"examples",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"inputVariables",id:"inputvariables",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"outputParser",id:"outputparser",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"partialVariables",id:"partialvariables",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"prefix",id:"prefix",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"suffix",id:"suffix",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"templateFormat",id:"templateformat",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"validateTemplate",id:"validatetemplate",level:3},{value:"Defined in",id:"defined-in-10",level:4}],m={toc:s},h="wrapper";function c(e){let{components:t,...a}=e;return(0,p.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/prompts"},"prompts"),".FewShotPromptTemplateInput"),(0,p.kt)("p",null,"Input common to all prompt templates."),(0,p.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/prompts.BasePromptTemplateInput"},(0,p.kt)("inlineCode",{parentName:"a"},"BasePromptTemplateInput"))),(0,p.kt)("p",{parentName:"li"},"\u21b3 ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"FewShotPromptTemplateInput"))))),(0,p.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/classes/prompts.FewShotPromptTemplate"},(0,p.kt)("inlineCode",{parentName:"a"},"FewShotPromptTemplate")))),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"exampleprompt"},"examplePrompt"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"examplePrompt"),": ",(0,p.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/prompts.PromptTemplate"},(0,p.kt)("inlineCode",{parentName:"a"},"PromptTemplate"))),(0,p.kt)("p",null,"An ",(0,p.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/prompts.PromptTemplate"},"PromptTemplate")," used to format a single example."),(0,p.kt)("h4",{id:"defined-in"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/few_shot.ts#L41"},"langchain/src/prompts/few_shot.ts:41")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"exampleselector"},"exampleSelector"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"exampleSelector"),": ",(0,p.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/prompts.BaseExampleSelector"},(0,p.kt)("inlineCode",{parentName:"a"},"BaseExampleSelector"))),(0,p.kt)("p",null,"An ",(0,p.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/prompts.BaseExampleSelector"},"BaseExampleSelector")," Examples to format into the prompt. Exactly one of this or\n",(0,p.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/prompts.FewShotPromptTemplateInput#examples"},"examples")," must be\nprovided."),(0,p.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/few_shot.ts#L36"},"langchain/src/prompts/few_shot.ts:36")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"exampleseparator"},"exampleSeparator"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"exampleSeparator"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("p",null,"String separator used to join the prefix, the examples, and suffix."),(0,p.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/few_shot.ts#L46"},"langchain/src/prompts/few_shot.ts:46")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"examples"},"examples"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"examples"),": ",(0,p.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#example"},(0,p.kt)("inlineCode",{parentName:"a"},"Example")),"[]"),(0,p.kt)("p",null,"Examples to format into the prompt. Exactly one of this or\n",(0,p.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/prompts.FewShotPromptTemplateInput#exampleselector"},"exampleSelector")," must be\nprovided."),(0,p.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/few_shot.ts#L29"},"langchain/src/prompts/few_shot.ts:29")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"inputvariables"},"inputVariables"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"inputVariables"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,p.kt)("p",null,"A list of variable names the prompt template expects"),(0,p.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/prompts.BasePromptTemplateInput"},"BasePromptTemplateInput"),".",(0,p.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/prompts.BasePromptTemplateInput#inputvariables"},"inputVariables")),(0,p.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/base.ts#L34"},"langchain/src/prompts/base.ts:34")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"outputparser"},"outputParser"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"outputParser"),": ",(0,p.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/schema.BaseOutputParser"},(0,p.kt)("inlineCode",{parentName:"a"},"BaseOutputParser"))),(0,p.kt)("p",null,"How to parse the output of calling an LLM on this formatted prompt"),(0,p.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/prompts.BasePromptTemplateInput"},"BasePromptTemplateInput"),".",(0,p.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/prompts.BasePromptTemplateInput#outputparser"},"outputParser")),(0,p.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/base.ts#L39"},"langchain/src/prompts/base.ts:39")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"partialvariables"},"partialVariables"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"partialVariables"),": ",(0,p.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#partialvalues"},(0,p.kt)("inlineCode",{parentName:"a"},"PartialValues"))),(0,p.kt)("p",null,"Partial variables"),(0,p.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/prompts.BasePromptTemplateInput"},"BasePromptTemplateInput"),".",(0,p.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/prompts.BasePromptTemplateInput#partialvariables"},"partialVariables")),(0,p.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/base.ts#L42"},"langchain/src/prompts/base.ts:42")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"prefix"},"prefix"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"prefix"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("p",null,"A prompt template string to put before the examples."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},'""')),(0,p.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/few_shot.ts#L53"},"langchain/src/prompts/few_shot.ts:53")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"suffix"},"suffix"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"suffix"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("p",null,"A prompt template string to put after the examples."),(0,p.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/few_shot.ts#L58"},"langchain/src/prompts/few_shot.ts:58")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"templateformat"},"templateFormat"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"templateFormat"),": ",(0,p.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/prompts.internal#templateformat"},(0,p.kt)("inlineCode",{parentName:"a"},"TemplateFormat"))),(0,p.kt)("p",null,"The format of the prompt template. Options are: 'f-string', 'jinja-2'"),(0,p.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/few_shot.ts#L63"},"langchain/src/prompts/few_shot.ts:63")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"validatetemplate"},"validateTemplate"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"validateTemplate"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"Whether or not to try validating the template on initialization."),(0,p.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/few_shot.ts#L68"},"langchain/src/prompts/few_shot.ts:68")))}c.isMDXComponent=!0}}]);