"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4181],{5711:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>h,toc:()=>l});var a=t(5773),i=(t(7378),t(5318)),o=t(6538);const s='import { OpenAI } from "langchain/llms";\nimport { loadSummarizationChain, AnalyzeDocumentChain } from "langchain/chains";\nimport * as fs from "fs";\n\nexport const run = async () => {\n  // In this example, we use the `AnalyzeDocumentChain` to summarize a large text document.\n  const text = fs.readFileSync("state_of_the_union.txt", "utf8");\n  const model = new OpenAI({ temperature: 0 });\n  const combineDocsChain = loadSummarizationChain(model);\n  const chain = new AnalyzeDocumentChain({\n    combineDocumentsChain: combineDocsChain,\n  });\n  const res = await chain.call({\n    input_document: text,\n  });\n  console.log({ res });\n  /*\n  {\n    res: {\n      text: \' President Biden is taking action to protect Americans from the COVID-19 pandemic and Russian aggression, providing economic relief, investing in infrastructure, creating jobs, and fighting inflation.\n      He is also proposing measures to reduce the cost of prescription drugs, protect voting rights, and reform the immigration system. The speaker is advocating for increased economic security, police reform, and the Equality Act, as well as providing support for veterans and military families.\n      The US is making progress in the fight against COVID-19, and the speaker is encouraging Americans to come together and work towards a brighter future.\'\n    }\n  }\n  */\n};\n',c={},r="AnalyzeDocumentChain",h={unversionedId:"modules/chains/other_chains/analyze_document",id:"modules/chains/other_chains/analyze_document",title:"AnalyzeDocumentChain",description:"You can use the AnalyzeDocumentChain, which accepts a single piece of text as input and operates over it.",source:"@site/docs/modules/chains/other_chains/analyze_document.mdx",sourceDirName:"modules/chains/other_chains",slug:"/modules/chains/other_chains/analyze_document",permalink:"/langchainjs/docs/modules/chains/other_chains/analyze_document",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/modules/chains/other_chains/analyze_document.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Other Chains",permalink:"/langchainjs/docs/modules/chains/other_chains/"},next:{title:"SqlDatabaseChain",permalink:"/langchainjs/docs/modules/chains/other_chains/sql"}},m={},l=[],u={toc:l},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"analyzedocumentchain"},(0,i.kt)("inlineCode",{parentName:"h1"},"AnalyzeDocumentChain")),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnalyzeDocumentChain"),", which accepts a single piece of text as input and operates over it.\nThis chain takes care of splitting up the text and then passing it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MapReduceDocumentsChain")," to generate a summary."),(0,i.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},s))}p.isMDXComponent=!0}}]);