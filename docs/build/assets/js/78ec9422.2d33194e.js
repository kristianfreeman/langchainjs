"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4792],{5318:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>m});var r=n(7378);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=r.createContext({}),o=function(e){var a=r.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=o(e.components);return r.createElement(s.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},f=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(n),f=t,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,l(l({ref:a},p),{},{components:n})):r.createElement(m,l({ref:a},p))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,l=new Array(i);l[0]=f;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c[u]="string"==typeof e?e:t,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6103:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=n(5773),t=(n(7378),n(5318));const i={id:"callbacks.internal.BaseTracerSession",title:"Interface: BaseTracerSession",sidebar_label:"callbacks.internal.BaseTracerSession",custom_edit_url:null},l=void 0,c={unversionedId:"api/interfaces/callbacks.internal.BaseTracerSession",id:"api/interfaces/callbacks.internal.BaseTracerSession",title:"Interface: BaseTracerSession",description:"callbacks.internal.BaseTracerSession",source:"@site/docs/api/interfaces/callbacks.internal.BaseTracerSession.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/callbacks.internal.BaseTracerSession",permalink:"/langchainjs/docs/api/interfaces/callbacks.internal.BaseTracerSession",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"callbacks.internal.BaseTracerSession",title:"Interface: BaseTracerSession",sidebar_label:"callbacks.internal.BaseTracerSession",custom_edit_url:null},sidebar:"sidebar",previous:{title:"callbacks.internal.BaseRun",permalink:"/langchainjs/docs/api/interfaces/callbacks.internal.BaseRun"},next:{title:"callbacks.internal.ChainRun",permalink:"/langchainjs/docs/api/interfaces/callbacks.internal.ChainRun"}},s={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"start_time",id:"start_time",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:o},u="wrapper";function d(e){let{components:a,...n}=e;return(0,t.kt)(u,(0,r.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/callbacks"},"callbacks"),".",(0,t.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/callbacks.internal"},"internal"),".BaseTracerSession"),(0,t.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"strong"},"BaseTracerSession"))),(0,t.kt)("p",{parentName:"li"},"\u21b3 ",(0,t.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/callbacks.internal.TracerSession"},(0,t.kt)("inlineCode",{parentName:"a"},"TracerSession"))))),(0,t.kt)("h2",{id:"properties"},"Properties"),(0,t.kt)("h3",{id:"name"},"name"),(0,t.kt)("p",null,"\u2022 ",(0,t.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,t.kt)("strong",{parentName:"p"},"name"),": ",(0,t.kt)("inlineCode",{parentName:"p"},"string")),(0,t.kt)("h4",{id:"defined-in"},"Defined in"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/callbacks/tracers.ts#L8"},"langchain/src/callbacks/tracers.ts:8")),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"start_time"},"start","_","time"),(0,t.kt)("p",null,"\u2022 ",(0,t.kt)("strong",{parentName:"p"},"start","_","time"),": ",(0,t.kt)("inlineCode",{parentName:"p"},"number")),(0,t.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/callbacks/tracers.ts#L7"},"langchain/src/callbacks/tracers.ts:7")))}d.isMDXComponent=!0}}]);