"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2024],{5318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),i=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(a),m=n,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9798:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7378),n=a(8944);const o={tabItem:"tabItem_wHwb"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:a},t)}},3930:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(5773),n=a(7378),o=a(8944),l=a(3457),s=a(3620),u=a(654),i=a(784),c=a(1819);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,i]=f({queryString:a,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),h=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),b(e)}),[i,b,o]),tabValues:o}}var h=a(6457);const g={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};function y(e){let{className:t,block:a,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=i[a].value;r!==s&&(d(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},2:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=a(5773),n=(a(7378),a(5318)),o=a(3930),l=a(9798);const s={hide_table_of_contents:!0},u="PDF files",i={unversionedId:"modules/indexes/document_loaders/examples/file_loaders/pdf",id:"modules/indexes/document_loaders/examples/file_loaders/pdf",title:"PDF files",description:"This example goes over how to load data from PDF files. By default, one document will be created for each page in the PDF file, you can change this behavior by setting the splitPages option to false.",source:"@site/docs/modules/indexes/document_loaders/examples/file_loaders/pdf.md",sourceDirName:"modules/indexes/document_loaders/examples/file_loaders",slug:"/modules/indexes/document_loaders/examples/file_loaders/pdf",permalink:"/langchainjs/docs/modules/indexes/document_loaders/examples/file_loaders/pdf",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/modules/indexes/document_loaders/examples/file_loaders/pdf.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Notion markdown export",permalink:"/langchainjs/docs/modules/indexes/document_loaders/examples/file_loaders/notion_markdown"},next:{title:"Subtitles",permalink:"/langchainjs/docs/modules/indexes/document_loaders/examples/file_loaders/subtitles"}},c={},d=[],p={toc:d},m="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pdf-files"},"PDF files"),(0,n.kt)("p",null,"This example goes over how to load data from PDF files. By default, one document will be created for each page in the PDF file, you can change this behavior by setting the ",(0,n.kt)("inlineCode",{parentName:"p"},"splitPages")," option to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("h1",{id:"setup"},"Setup"),(0,n.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install pdfjs-dist\n"))),(0,n.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add pdfjs-dist\n")))),(0,n.kt)("h1",{id:"usage-one-document-per-page"},"Usage, one document per page"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'import { PDFLoader } from "langchain/document_loaders";\n\nconst loader = new PDFLoader("src/document_loaders/example_data/example.pdf");\n\nconst docs = await loader.load();\n')),(0,n.kt)("h1",{id:"usage-one-document-per-file"},"Usage, one document per file"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'import { PDFLoader } from "langchain/document_loaders";\n\nconst loader = new PDFLoader("src/document_loaders/example_data/example.pdf", {\n  splitPages: false,\n});\n\nconst docs = await loader.load();\n')))}f.isMDXComponent=!0}}]);