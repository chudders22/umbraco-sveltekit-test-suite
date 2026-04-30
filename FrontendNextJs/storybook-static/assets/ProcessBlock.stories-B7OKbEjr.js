import{n as e}from"./chunk-BEldbCjX.js";import{a as t}from"./iframe-CaRgH72A.js";function n({title:e,subTitle:t,steps:n}){let i=n?.items??[];return(0,r.jsx)(`section`,{className:`border-y border-zinc-100 bg-white py-8 md:py-12 dark:border-zinc-800 dark:bg-zinc-950`,children:(0,r.jsxs)(`div`,{className:`container mx-auto px-4`,children:[(e||t)&&(0,r.jsxs)(`header`,{className:`mb-8 lg:w-1/2`,children:[e&&(0,r.jsx)(`h2`,{className:`font-display text-3xl font-semibold tracking-widest text-zinc-500 uppercase md:text-4xl dark:text-zinc-400`,children:e}),t&&(0,r.jsx)(`p`,{className:`mt-1 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400`,children:t})]}),i.length>0?(0,r.jsx)(`div`,{className:`grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4`,children:i.map((e,t)=>{let n=e.content.properties;return(0,r.jsxs)(`div`,{className:`flex flex-col border-t-2 border-t-zinc-100 pt-6 dark:border-t-zinc-800`,children:[(0,r.jsx)(`span`,{className:`font-display mb-4 text-5xl font-bold leading-none text-red-600/20 dark:text-red-400/15`,children:String(t+1).padStart(2,`0`)}),n.title&&(0,r.jsx)(`h3`,{className:`font-display mb-3 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50`,children:n.title}),n.description&&(0,r.jsx)(`p`,{className:`text-sm leading-relaxed text-zinc-500 dark:text-zinc-400`,children:n.description})]},t)})}):(0,r.jsx)(`div`,{className:`rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30`,children:(0,r.jsx)(`p`,{className:`text-sm text-zinc-500 dark:text-zinc-400`,children:`No items added yet.`})})]})})}var r,i=e((()=>{r=t(),n.__docgenInfo={description:``,methods:[],displayName:`ProcessBlock`,props:{title:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},subTitle:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},steps:{required:!1,tsType:{name:`union`,raw:`{\r
  items: Array<{\r
    content: { contentType: string; properties: ProcessStep };\r
  }>;\r
} | null`,elements:[{name:`signature`,type:`object`,raw:`{\r
  items: Array<{\r
    content: { contentType: string; properties: ProcessStep };\r
  }>;\r
}`,signature:{properties:[{key:`items`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{\r
  content: { contentType: string; properties: ProcessStep };\r
}`,signature:{properties:[{key:`content`,value:{name:`signature`,type:`object`,raw:`{ contentType: string; properties: ProcessStep }`,signature:{properties:[{key:`contentType`,value:{name:`string`,required:!0}},{key:`properties`,value:{name:`ProcessStep`,required:!0}}]},required:!0}}]}}],raw:`Array<{\r
  content: { contentType: string; properties: ProcessStep };\r
}>`,required:!0}}]}},{name:`null`}]},description:``}}}}));function a(e,t){return{content:{contentType:`processStep`,properties:{title:e,description:t}}}}var o,s,c,l,u,d,f;e((()=>{i(),o={items:[a(`Discover`,`We start by getting under the skin of your business — understanding your goals, users, and competitive landscape through collaborative workshops and in-depth research.`),a(`Design`,`Using insights from discovery, we craft wireframes and high-fidelity prototypes that balance aesthetic quality with usability, iterated rapidly with your feedback in the loop.`),a(`Build`,`Our engineers bring designs to life using modern, scalable technology. We work in focused sprints, shipping incrementally so you see real progress from day one.`),a(`Launch`,`We handle the full deployment pipeline, performance tuning, and go-live support — then stay on hand to monitor, iterate, and grow the product alongside you.`)]},s={items:[a(`Discover`,`We start by getting under the skin of your business — understanding your goals, users, and competitive landscape through collaborative workshops and in-depth research.`),a(`Build`,`Our engineers bring designs to life using modern, scalable technology. We work in focused sprints, shipping incrementally so you see real progress from day one.`)]},c={title:`Blocks/ProcessBlock`,component:n,tags:[`autodocs`,`snapshot`],parameters:{docs:{description:{component:"A numbered step-by-step process section. Corresponds to the `processBlock` Umbraco content type. Renders a 1→2→4 column responsive grid where each step is automatically numbered (01, 02, …) with the number displayed in a large, lightly tinted red font. Props: `title` (optional section heading), `subTitle` (optional intro text), and `steps` (a BlockList of `processStep` blocks each with `title` and `description`). Shows a dashed empty-state placeholder when no steps are present. Supports dark mode."}}}},l={args:{title:`Our Process`,subTitle:`How we work`,steps:o}},u={parameters:{docs:{description:{story:`Shows the grid with only two steps — verifies that the layout fills columns proportionally when fewer than four items are present.`}}},args:{title:`Our Process`,steps:s}},d={parameters:{docs:{description:{story:`Shows the empty-state placeholder rendered when no process steps have been added in the Umbraco backoffice.`}}},args:{title:`Our Process`,steps:{items:[]}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Our Process',
    subTitle: 'How we work',
    steps: fourSteps
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the grid with only two steps — verifies that the layout fills columns proportionally when fewer than four items are present.'
      }
    }
  },
  args: {
    title: 'Our Process',
    steps: twoSteps
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the empty-state placeholder rendered when no process steps have been added in the Umbraco backoffice.'
      }
    }
  },
  args: {
    title: 'Our Process',
    steps: {
      items: []
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`TwoSteps`,`Empty`]}))();export{l as Default,d as Empty,u as TwoSteps,f as __namedExportsOrder,c as default};