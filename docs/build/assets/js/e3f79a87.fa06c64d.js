"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4139],{5318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||b[d]||i;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2612:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(5773),a=(r(7378),r(5318));const i={id:"vectorstores.internal.SupabaseLibArgs",title:"Interface: SupabaseLibArgs",sidebar_label:"vectorstores.internal.SupabaseLibArgs",custom_edit_url:null},s=void 0,o={unversionedId:"api/interfaces/vectorstores.internal.SupabaseLibArgs",id:"api/interfaces/vectorstores.internal.SupabaseLibArgs",title:"Interface: SupabaseLibArgs",description:"vectorstores.internal.SupabaseLibArgs",source:"@site/docs/api/interfaces/vectorstores.internal.SupabaseLibArgs.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/vectorstores.internal.SupabaseLibArgs",permalink:"/langchainjs/docs/api/interfaces/vectorstores.internal.SupabaseLibArgs",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"vectorstores.internal.SupabaseLibArgs",title:"Interface: SupabaseLibArgs",sidebar_label:"vectorstores.internal.SupabaseLibArgs",custom_edit_url:null},sidebar:"sidebar",previous:{title:"vectorstores.internal.PineconeLibArgs",permalink:"/langchainjs/docs/api/interfaces/vectorstores.internal.PineconeLibArgs"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"client",id:"client",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"queryName",id:"queryname",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"tableName",id:"tablename",level:3},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:c},u="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/vectorstores"},"vectorstores"),".",(0,a.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/vectorstores.internal"},"internal"),".SupabaseLibArgs"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"client"},"client"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"client"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"public"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/supabase.ts#L19"},"langchain/src/vectorstores/supabase.ts:19")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"queryname"},"queryName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"queryName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/supabase.ts#L21"},"langchain/src/vectorstores/supabase.ts:21")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tablename"},"tableName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"tableName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/vectorstores/supabase.ts#L20"},"langchain/src/vectorstores/supabase.ts:20")))}b.isMDXComponent=!0}}]);