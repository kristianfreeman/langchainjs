"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1746],{5318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,u=c["".concat(d,".").concat(k)]||c[k]||m[k]||i;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(5773),r=(n(7378),n(5318));const i={id:"document_loaders.DirectoryLoader",title:"Class: DirectoryLoader",sidebar_label:"document_loaders.DirectoryLoader",custom_edit_url:null},o=void 0,l={unversionedId:"api/classes/document_loaders.DirectoryLoader",id:"api/classes/document_loaders.DirectoryLoader",title:"Class: DirectoryLoader",description:"documentloaders.DirectoryLoader",source:"@site/docs/api/classes/document_loaders.DirectoryLoader.md",sourceDirName:"api/classes",slug:"/api/classes/document_loaders.DirectoryLoader",permalink:"/langchainjs/docs/api/classes/document_loaders.DirectoryLoader",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"document_loaders.DirectoryLoader",title:"Class: DirectoryLoader",sidebar_label:"document_loaders.DirectoryLoader",custom_edit_url:null},sidebar:"sidebar",previous:{title:"document_loaders.CollegeConfidentialLoader",permalink:"/langchainjs/docs/api/classes/document_loaders.CollegeConfidentialLoader"},next:{title:"document_loaders.GitbookLoader",permalink:"/langchainjs/docs/api/classes/document_loaders.GitbookLoader"}},d={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"directoryPath",id:"directorypath",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"loaders",id:"loaders",level:3},{value:"Index signature",id:"index-signature",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"recursive",id:"recursive",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"unknown",id:"unknown",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"load",id:"load",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"loadAndSplit",id:"loadandsplit",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"imports",id:"imports",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-7",level:4}],s={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/document_loaders"},"document_loaders"),".DirectoryLoader"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.BaseDocumentLoader"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseDocumentLoader"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"DirectoryLoader"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.NotionLoader"},(0,r.kt)("inlineCode",{parentName:"a"},"NotionLoader"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new DirectoryLoader"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"directoryPath"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"loaders"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"recursive?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown?"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"directoryPath")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"loaders")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"recursive")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/document_loaders#unknownhandling-1"},(0,r.kt)("inlineCode",{parentName:"a"},"UnknownHandling"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"UnknownHandling.Warn"))))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.BaseDocumentLoader"},"BaseDocumentLoader"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.BaseDocumentLoader#constructor"},"constructor")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/document_loaders/directory.ts#L19"},"langchain/src/document_loaders/directory.ts:19")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"directorypath"},"directoryPath"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"directoryPath"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/document_loaders/directory.ts#L20"},"langchain/src/document_loaders/directory.ts:20")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"loaders"},"loaders"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"loaders"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"index-signature"},"Index signature"),(0,r.kt)("p",null,"\u25aa ","[extension: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"]",": (",(0,r.kt)("inlineCode",{parentName:"p"},"filePath"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.BaseDocumentLoader"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseDocumentLoader"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/document_loaders/directory.ts#L21"},"langchain/src/document_loaders/directory.ts:21")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"recursive"},"recursive"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"recursive"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/document_loaders/directory.ts#L24"},"langchain/src/document_loaders/directory.ts:24")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unknown"},"unknown"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"unknown"),": ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/document_loaders#unknownhandling-1"},(0,r.kt)("inlineCode",{parentName:"a"},"UnknownHandling"))," = ",(0,r.kt)("inlineCode",{parentName:"p"},"UnknownHandling.Warn")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/document_loaders/directory.ts#L25"},"langchain/src/document_loaders/directory.ts:25")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"load"},"load"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"load"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document.Document"},(0,r.kt)("inlineCode",{parentName:"a"},"Document")),"[]",">"),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document.Document"},(0,r.kt)("inlineCode",{parentName:"a"},"Document")),"[]",">"),(0,r.kt)("h4",{id:"overrides-1"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.BaseDocumentLoader"},"BaseDocumentLoader"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.BaseDocumentLoader#load"},"load")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/document_loaders/directory.ts#L41"},"langchain/src/document_loaders/directory.ts:41")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"loadandsplit"},"loadAndSplit"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"loadAndSplit"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"splitter?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document.Document"},(0,r.kt)("inlineCode",{parentName:"a"},"Document")),"[]",">"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"splitter")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/text_splitter.TextSplitter"},(0,r.kt)("inlineCode",{parentName:"a"},"TextSplitter")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document.Document"},(0,r.kt)("inlineCode",{parentName:"a"},"Document")),"[]",">"),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.BaseDocumentLoader"},"BaseDocumentLoader"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/document_loaders.BaseDocumentLoader#loadandsplit"},"loadAndSplit")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/document_loaders/base.ts#L15"},"langchain/src/document_loaders/base.ts:15")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"imports"},"imports"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"imports"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"extname"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"readdir"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"PathLike"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"BufferEncoding")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectEncodingOptions")," & {}) => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]",">","(",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"PathLike"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"buffer"')," ","|"," {}) => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer"),"[]",">","(",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"PathLike"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"BufferEncoding")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectEncodingOptions")," & {}) => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[] ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer"),"[]",">","(",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"PathLike"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectEncodingOptions")," & {}) => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Dirent"),"[]",">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"resolve"),": (...",(0,r.kt)("inlineCode",{parentName:"p"},"paths"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"extname"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"readdir"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"PathLike"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"BufferEncoding")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectEncodingOptions")," & {}) => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]",">","(",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"PathLike"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"buffer"')," ","|"," {}) => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer"),"[]",">","(",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"PathLike"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"BufferEncoding")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectEncodingOptions")," & {}) => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[] ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer"),"[]",">","(",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"PathLike"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectEncodingOptions")," & {}) => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Dirent"),"[]",">"," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"resolve"),": (...",(0,r.kt)("inlineCode",{parentName:"p"},"paths"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/document_loaders/directory.ts#L85"},"langchain/src/document_loaders/directory.ts:85")))}m.isMDXComponent=!0}}]);