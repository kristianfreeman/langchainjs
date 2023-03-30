"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5163],{5318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,u=m["".concat(d,".").concat(k)]||m[k]||c[k]||i;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(5773),r=(n(7378),n(5318));const i={id:"document_loaders.JSONLoader",title:"Class: JSONLoader",sidebar_label:"document_loaders.JSONLoader",custom_edit_url:null},l=void 0,o={unversionedId:"api/classes/document_loaders.JSONLoader",id:"api/classes/document_loaders.JSONLoader",title:"Class: JSONLoader",description:"documentloaders.JSONLoader",source:"@site/docs/api/classes/document_loaders.JSONLoader.md",sourceDirName:"api/classes",slug:"/api/classes/document_loaders.JSONLoader",permalink:"/langchainjs/docs/api/classes/document_loaders.JSONLoader",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"document_loaders.JSONLoader",title:"Class: JSONLoader",sidebar_label:"document_loaders.JSONLoader",custom_edit_url:null},sidebar:"sidebar",previous:{title:"document_loaders.JSONLinesLoader",permalink:"/langchainjs/docs/api/classes/document_loaders.JSONLinesLoader"},next:{title:"document_loaders.NotionLoader",permalink:"/langchainjs/docs/api/classes/document_loaders.NotionLoader"}},d={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"filePathOrBlob",id:"filepathorblob",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"pointers",id:"pointers",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"load",id:"load",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"loadAndSplit",id:"loadandsplit",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"parse",id:"parse",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"imports",id:"imports",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-6",level:4}],s={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/document_loaders"},"document_loaders"),".JSONLoader"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.TextLoader"},(0,r.kt)("inlineCode",{parentName:"a"},"TextLoader"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"JSONLoader"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new JSONLoader"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"filePathOrBlob"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pointers?"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"filePathOrBlob")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Blob")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pointers")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.TextLoader"},"TextLoader"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.TextLoader#constructor"},"constructor")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/document_loaders/json.ts#L7"},"langchain/src/document_loaders/json.ts:7")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"filepathorblob"},"filePathOrBlob"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"filePathOrBlob"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Blob")),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.TextLoader"},"TextLoader"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.TextLoader#filepathorblob"},"filePathOrBlob")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/document_loaders/text.ts#L7"},"langchain/src/document_loaders/text.ts:7")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"pointers"},"pointers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"pointers"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/document_loaders/json.ts#L5"},"langchain/src/document_loaders/json.ts:5")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"load"},"load"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"load"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document.Document"},(0,r.kt)("inlineCode",{parentName:"a"},"Document")),"[]",">"),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document.Document"},(0,r.kt)("inlineCode",{parentName:"a"},"Document")),"[]",">"),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.TextLoader"},"TextLoader"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.TextLoader#load"},"load")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/document_loaders/text.ts#L15"},"langchain/src/document_loaders/text.ts:15")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"loadandsplit"},"loadAndSplit"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"loadAndSplit"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"splitter?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document.Document"},(0,r.kt)("inlineCode",{parentName:"a"},"Document")),"[]",">"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"splitter")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/text_splitter.TextSplitter"},(0,r.kt)("inlineCode",{parentName:"a"},"TextSplitter")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document.Document"},(0,r.kt)("inlineCode",{parentName:"a"},"Document")),"[]",">"),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.TextLoader"},"TextLoader"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.TextLoader#loadandsplit"},"loadAndSplit")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/document_loaders/base.ts#L15"},"langchain/src/document_loaders/base.ts:15")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"parse"},"parse"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"parse"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"raw"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"raw")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,r.kt)("h4",{id:"overrides-1"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.TextLoader"},"TextLoader"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.TextLoader#parse"},"parse")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/document_loaders/json.ts#L12"},"langchain/src/document_loaders/json.ts:12")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"imports"},"imports"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"imports"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"readFile"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"PathLike")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"FileHandle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," {} & ",(0,r.kt)("inlineCode",{parentName:"p"},"Abortable"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"PathLike")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"FileHandle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),": {} & ",(0,r.kt)("inlineCode",{parentName:"p"},"Abortable")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"BufferEncoding"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"PathLike")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"FileHandle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"BufferEncoding")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectEncodingOptions")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"Abortable")," & {}) => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer"),">","  }",">"),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"readFile"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"PathLike")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"FileHandle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," {} & ",(0,r.kt)("inlineCode",{parentName:"p"},"Abortable"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"PathLike")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"FileHandle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),": {} & ",(0,r.kt)("inlineCode",{parentName:"p"},"Abortable")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"BufferEncoding"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"PathLike")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"FileHandle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"BufferEncoding")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectEncodingOptions")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"Abortable")," & {}) => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer"),">","  }",">"),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.TextLoader"},"TextLoader"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.TextLoader#imports"},"imports")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/document_loaders/text.ts#L49"},"langchain/src/document_loaders/text.ts:49")))}c.isMDXComponent=!0}}]);