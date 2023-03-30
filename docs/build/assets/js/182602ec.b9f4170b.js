"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1231],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,d=u["".concat(o,".").concat(h)]||u[h]||m[h]||i;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(5773),a=(n(7378),n(5318));const i={hide_table_of_contents:!0},s="RecursiveCharacterTextSplitter",l={unversionedId:"modules/indexes/text_splitters/examples/recursive_character",id:"modules/indexes/text_splitters/examples/recursive_character",title:"RecursiveCharacterTextSplitter",description:'The recommended TextSplitter is the RecursiveCharacterTextSplitter. This will split documents recursively by different characters - starting with "\\n\\n", then "\\n", then " ". This is nice because it will try to keep all the semantically relevant content in the same place for as long as possible.',source:"@site/docs/modules/indexes/text_splitters/examples/recursive_character.mdx",sourceDirName:"modules/indexes/text_splitters/examples",slug:"/modules/indexes/text_splitters/examples/recursive_character",permalink:"/langchainjs/docs/modules/indexes/text_splitters/examples/recursive_character",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/modules/indexes/text_splitters/examples/recursive_character.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"MarkdownTextSplitter",permalink:"/langchainjs/docs/modules/indexes/text_splitters/examples/markdown"},next:{title:"TokenTextSplitter",permalink:"/langchainjs/docs/modules/indexes/text_splitters/examples/token"}},o={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recursivecharactertextsplitter"},(0,a.kt)("inlineCode",{parentName:"h1"},"RecursiveCharacterTextSplitter")),(0,a.kt)("p",null,"The recommended TextSplitter is the ",(0,a.kt)("inlineCode",{parentName:"p"},"RecursiveCharacterTextSplitter"),". This will split documents recursively by different characters - starting with ",(0,a.kt)("inlineCode",{parentName:"p"},'"\\n\\n"'),", then ",(0,a.kt)("inlineCode",{parentName:"p"},'"\\n"'),", then ",(0,a.kt)("inlineCode",{parentName:"p"},'" "'),". This is nice because it will try to keep all the semantically relevant content in the same place for as long as possible."),(0,a.kt)("p",null,"Important parameters to know here are ",(0,a.kt)("inlineCode",{parentName:"p"},"chunkSize")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"chunkOverlap"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"chunkSize")," controls the max size (in terms of number of characters) of the final documents. ",(0,a.kt)("inlineCode",{parentName:"p"},"chunkOverlap")," specifies how much overlap there should be between chunks. This is often helpful to make sure that the text isn't split weirdly. In the example below we set these values to be small (for illustration purposes), but in practice they default to ",(0,a.kt)("inlineCode",{parentName:"p"},"4000")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"200")," respectively."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";\n\nconst text = `Hi.\\n\\nI\'m Harrison.\\n\\nHow? Are? You?\\nOkay then f f f f.\nThis is a weird text to write, but gotta test the splittingggg some how.\\n\\n\nBye!\\n\\n-H.`;\nconst splitter = new RecursiveCharacterTextSplitter({\n  chunkSize: 10,\n  chunkOverlap: 1,\n});\nconst output = splitter.createDocuments([text]);\n')),(0,a.kt)("p",null,"You'll note that in the above example we are splitting a raw text string and getting back a list of documents. We can also split documents directly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Document } from "langchain/document";\nimport { RecursiveCharacterTextSplitter } from "langchain/text_splitter";\n\nconst text = `Hi.\\n\\nI\'m Harrison.\\n\\nHow? Are? You?\\nOkay then f f f f.\nThis is a weird text to write, but gotta test the splittingggg some how.\\n\\n\nBye!\\n\\n-H.`;\nconst splitter = new RecursiveCharacterTextSplitter({\n  chunkSize: 10,\n  chunkOverlap: 1,\n});\nconst docOutput = splitter.splitDocuments([\n  new Document({ pageContent: text }),\n]);\n')))}m.isMDXComponent=!0}}]);