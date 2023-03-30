"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4893],{5318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),p=a,h=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9798:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7378),a=r(8944);const o={tabItem:"tabItem_wHwb"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:r},t)}},3930:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(5773),a=r(7378),o=r(8944),s=r(3457),l=r(3620),i=r(654),c=r(784),u=r(1819);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=m(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,c]=h({queryString:r,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=i??d;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var b=r(6457);const g={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};function y(e){let{className:t,block:r,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,r=u.indexOf(t),n=c[r].value;n!==l&&(d(t),i(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},s,{className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":l===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(v,(0,n.Z)({},e,t)))}function k(e){const t=(0,b.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},4751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=r(5773),a=(r(7378),r(5318)),o=r(3930),s=r(9798);const l={},i="Chroma",c={unversionedId:"modules/indexes/vector_stores/integrations/chroma",id:"modules/indexes/vector_stores/integrations/chroma",title:"Chroma",description:"Chroma is an open-source Apache 2.0 embedding database.",source:"@site/docs/modules/indexes/vector_stores/integrations/chroma.md",sourceDirName:"modules/indexes/vector_stores/integrations",slug:"/modules/indexes/vector_stores/integrations/chroma",permalink:"/langchainjs/docs/modules/indexes/vector_stores/integrations/chroma",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/modules/indexes/vector_stores/integrations/chroma.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Integrations",permalink:"/langchainjs/docs/modules/indexes/vector_stores/integrations/"},next:{title:"HNSWLib",permalink:"/langchainjs/docs/modules/indexes/vector_stores/integrations/hnswlib"}},u={},d=[{value:"Setup",id:"setup",level:2},{value:"Index and query docs",id:"index-and-query-docs",level:2},{value:"Query docs from existing collection",id:"query-docs-from-existing-collection",level:2}],m={toc:d},p="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chroma"},"Chroma"),(0,a.kt)("p",null,"Chroma is an open-source Apache 2.0 embedding database."),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chroma-core/chroma"},"chroma")," with langchainjs."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run chroma inside of docker on your computer ",(0,a.kt)("a",{parentName:"li",href:"https://docs.trychroma.com/api-reference"},"docs")),(0,a.kt)("li",{parentName:"ol"},"Install the chroma js client.")),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -S chromadb\n"))),(0,a.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -S chromadb\n")))),(0,a.kt)("h2",{id:"index-and-query-docs"},"Index and query docs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Chroma } from "langchain/vectorstores";\nimport { OpenAIEmbeddings } from "langchain/embeddings";\n\n// text sample from Godel, Escher, Bach\nconst vectorStore = await Chroma.fromTexts(\n  [\n    "Tortoise: Labyrinth? Labyrinth? Could it Are we in the notorious Little\\\n        Harmonic Labyrinth of the dreaded Majotaur?",\n    "Achilles: Yiikes! What is that?",\n    "Tortoise: They say-although I person never believed it myself-that an I\\\n        Majotaur has created a tiny labyrinth sits in a pit in the middle of\\\n        it, waiting innocent victims to get lost in its fears complexity.\\\n        Then, when they wander and dazed into the center, he laughs and\\\n        laughs at them-so hard, that he laughs them to death!",\n    "Achilles: Oh, no!",\n    "Tortoise: But it\'s only a myth. Courage, Achilles.",\n  ],\n  [{ id: 2 }, { id: 1 }, { id: 3 }],\n  new OpenAIEmbeddings(),\n  {\n    collectionName: "goldel-escher-bach",\n  }\n);\n\n// or alternatively from docs\nconst vectorStore = await Chroma.fromDocuments(docs, new OpenAIEmbeddings(), {\n  collectionName: "goldel-escher-bach",\n});\n\nconst response = await vectorStore.similaritySearch("scared", 2);\n')),(0,a.kt)("h2",{id:"query-docs-from-existing-collection"},"Query docs from existing collection"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Chroma } from "langchain/vectorstores";\nimport { OpenAIEmbeddings } from "langchain/embeddings";\n\nconst vectorStore = await Chroma.fromExistingCollection(\n  new OpenAIEmbeddings(),\n  {\n    collectionName: "goldel-escher-bach",\n  }\n);\n\nconst response = await vectorStore.similaritySearch("scared", 2);\n')))}h.isMDXComponent=!0}}]);