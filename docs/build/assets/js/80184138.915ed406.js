"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5761],{5318:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(7378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||a;return t?o.createElement(m,c(c({ref:n},p),{},{components:t})):o.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6617:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=t(5773),r=(t(7378),t(5318));const a={},c="Tracing",i={unversionedId:"production/tracing",id:"production/tracing",title:"Tracing",description:"Similar to the Python langchain package, JS langchain also supports tracing.",source:"@site/docs/production/tracing.md",sourceDirName:"production",slug:"/production/tracing",permalink:"/langchainjs/docs/production/tracing",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/production/tracing.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Deployment",permalink:"/langchainjs/docs/production/deployment"},next:{title:"Helicone",permalink:"/langchainjs/docs/ecosystem/helicone"}},l={},s=[],p={toc:s},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tracing"},"Tracing"),(0,r.kt)("p",null,"Similar to the Python ",(0,r.kt)("inlineCode",{parentName:"p"},"langchain")," package, JS ",(0,r.kt)("inlineCode",{parentName:"p"},"langchain")," also supports tracing."),(0,r.kt)("p",null,"You can view an overview of tracing ",(0,r.kt)("a",{parentName:"p",href:"https://langchain.readthedocs.io/en/latest/tracing.html"},"here."),"\nTo spin up the tracing backend, run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose up")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up")," if on using an older version of ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),") in the ",(0,r.kt)("inlineCode",{parentName:"p"},"langchain")," directory.\nYou can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"langchain-server")," command if you have the python ",(0,r.kt)("inlineCode",{parentName:"p"},"langchain")," package installed."),(0,r.kt)("p",null,"Here's an example of how to use tracing in ",(0,r.kt)("inlineCode",{parentName:"p"},"langchain.js"),". All that needs to be done is setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"LANGCHAIN_HANDLER")," environment variable to ",(0,r.kt)("inlineCode",{parentName:"p"},"langchain"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { OpenAI } from "langchain";\nimport { initializeAgentExecutor } from "langchain/agents";\nimport { SerpAPI, Calculator } from "langchain/tools";\nimport process from "process";\n\nexport const run = async () => {\n  process.env.LANGCHAIN_HANDLER = "langchain";\n  const model = new OpenAI({ temperature: 0 });\n  const tools = [new SerpAPI(), new Calculator()];\n\n  const executor = await initializeAgentExecutor(\n    tools,\n    model,\n    "zero-shot-react-description",\n    true\n  );\n  console.log("Loaded agent.");\n\n  const input = `Who is Olivia Wilde\'s boyfriend? What is his current age raised to the 0.23 power?`;\n\n  console.log(`Executing with input "${input}"...`);\n\n  const result = await executor.call({ input });\n\n  console.log(`Got output ${result.output}`);\n};\n')),(0,r.kt)("p",null,"We are actively working on improving tracing to work better with concurrency. For now, the best way to use tracing with concurrency is to follow the below example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { OpenAI } from "langchain";\nimport { initializeAgentExecutor } from "langchain/agents";\nimport { SerpAPI, Calculator } from "langchain/tools";\nimport process from "process";\nimport {\n  CallbackManager,\n  LangChainTracer,\n  ConsoleCallbackHandler,\n} from "langchain/callbacks";\n\nexport const run = async () => {\n  process.env.LANGCHAIN_HANDLER = "langchain";\n  const model = new OpenAI({ temperature: 0 });\n  const tools = [new SerpAPI(), new Calculator()];\n\n  const executor = await initializeAgentExecutor(\n    tools,\n    model,\n    "zero-shot-react-description",\n    true\n  );\n  console.log("Loaded agent.");\n\n  const input = `Who is Olivia Wilde\'s boyfriend? What is his current age raised to the 0.23 power?`;\n\n  console.log(`Executing with input "${input}"...`);\n\n  // This will result in a lot of errors, because the shared Tracer is not concurrency-safe.\n  const [resultA, resultB, resultC] = await Promise.all([\n    executor.call({ input }),\n    executor.call({ input }),\n    executor.call({ input }),\n  ]);\n\n  console.log(`Got output ${resultA.output}`);\n  console.log(`Got output ${resultB.output}`);\n  console.log(`Got output ${resultC.output}`);\n\n  // This will work, because each executor has its own Tracer, avoiding concurrency issues.\n  console.log("---Now with concurrency-safe tracing---");\n\n  const executors = [];\n  for (let i = 0; i < 3; i += 1) {\n    const callbackManager = new CallbackManager();\n    callbackManager.addHandler(new ConsoleCallbackHandler());\n    callbackManager.addHandler(new LangChainTracer());\n\n    const model = new OpenAI({ temperature: 0, callbackManager });\n    const tools = [new SerpAPI(), new Calculator()];\n    for (const tool of tools) {\n      tool.callbackManager = callbackManager;\n    }\n    const executor = await initializeAgentExecutor(\n      tools,\n      model,\n      "zero-shot-react-description",\n      true,\n      callbackManager\n    );\n    executor.agent.llmChain.callbackManager = callbackManager;\n    executors.push(executor);\n  }\n\n  const results = await Promise.all(\n    executors.map((executor) => executor.call({ input }))\n  );\n  for (const result of results) {\n    console.log(`Got output ${result.output}`);\n  }\n};\n')))}g.isMDXComponent=!0}}]);