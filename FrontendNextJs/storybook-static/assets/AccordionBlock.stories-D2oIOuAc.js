import{n as e}from"./chunk-BEldbCjX.js";import{a as t}from"./iframe-CaRgH72A.js";function n({title:e,subTitle:t,items:n,openFirst:i=!1}){let a=n?.items??[];return(0,r.jsx)(`section`,{className:`border-y border-zinc-100 bg-white py-8 md:py-12 dark:border-zinc-800 dark:bg-zinc-950`,children:(0,r.jsxs)(`div`,{className:`container mx-auto`,children:[(e||t)&&(0,r.jsxs)(`header`,{className:`mb-8 lg:w-1/2`,children:[e&&(0,r.jsx)(`h2`,{className:`font-display text-3xl font-semibold tracking-widest text-zinc-500 uppercase md:text-4xl dark:text-zinc-400`,children:e}),t&&(0,r.jsx)(`p`,{className:`mt-1 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400`,children:t})]}),a.length>0?(0,r.jsx)(`div`,{className:`flex flex-col gap-4`,children:a.map((e,t)=>{let n=e.content.properties;return(0,r.jsxs)(`details`,{className:`group border-l-2 border-l-zinc-200 pl-6 transition-colors duration-200   open:border-l-red-500   dark:border-l-zinc-800 dark:open:border-l-red-500`,open:i&&t===0,children:[(0,r.jsxs)(`summary`,{className:`flex cursor-pointer list-none items-center justify-between gap-4 py-1   [&::-webkit-details-marker]:hidden   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset   focus-visible:ring-red-600 dark:focus-visible:ring-red-400`,children:[(0,r.jsx)(`span`,{className:`font-display text-lg font-semibold tracking-tight text-zinc-900 transition-colors duration-200   group-open:text-red-600 dark:text-zinc-50 dark:group-open:text-red-500`,children:n.question??``}),(0,r.jsxs)(`span`,{className:`flex h-5 w-5 shrink-0 items-center justify-center text-zinc-400 transition-colors duration-200 group-open:text-red-500`,"aria-hidden":`true`,children:[(0,r.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,className:`block h-5 w-5 group-open:hidden`,children:(0,r.jsx)(`path`,{d:`M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z`})}),(0,r.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,className:`hidden h-5 w-5 group-open:block`,children:(0,r.jsx)(`path`,{d:`M6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z`})})]})]}),n.answer?.markup&&(0,r.jsx)(`div`,{className:`prose prose-zinc pb-5 pt-3 leading-relaxed dark:prose-invert   prose-p:text-zinc-600 dark:prose-p:text-zinc-300   prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline   dark:prose-a:text-red-400`,dangerouslySetInnerHTML:{__html:n.answer.markup}})]},t)})}):(0,r.jsx)(`div`,{className:`rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30`,children:(0,r.jsx)(`p`,{className:`text-sm text-zinc-500 dark:text-zinc-400`,children:`No items added yet.`})})]})})}var r,i=e((()=>{r=t(),n.__docgenInfo={description:``,methods:[],displayName:`AccordionBlock`,props:{title:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},subTitle:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},items:{required:!1,tsType:{name:`union`,raw:`{\r
  items: Array<{\r
    content: { contentType: string; properties: AccordionItem };\r
  }>;\r
} | null`,elements:[{name:`signature`,type:`object`,raw:`{\r
  items: Array<{\r
    content: { contentType: string; properties: AccordionItem };\r
  }>;\r
}`,signature:{properties:[{key:`items`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{\r
  content: { contentType: string; properties: AccordionItem };\r
}`,signature:{properties:[{key:`content`,value:{name:`signature`,type:`object`,raw:`{ contentType: string; properties: AccordionItem }`,signature:{properties:[{key:`contentType`,value:{name:`string`,required:!0}},{key:`properties`,value:{name:`AccordionItem`,required:!0}}]},required:!0}}]}}],raw:`Array<{\r
  content: { contentType: string; properties: AccordionItem };\r
}>`,required:!0}}]}},{name:`null`}]},description:``},openFirst:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}}));function a(e,t){return{content:{contentType:`accordionItem`,properties:{question:e,answer:{markup:t}}}}}var o,s,c,l,u,d,f,p;e((()=>{i(),o={items:[a(`How much does a typical project cost?`,`<p>Every project is scoped individually, but most of our engagements fall between £15,000 and £150,000 depending on complexity, timeline, and ongoing support requirements. We provide a detailed fixed-price proposal after an initial discovery call so there are never any surprises.</p>`),a(`How long does it take to build a website or web app?`,`<p>A marketing site typically takes 6–10 weeks from kick-off to launch. A complex web application with custom integrations can range from 3 to 9 months. During discovery we agree a delivery roadmap upfront, and we use regular sprint demos to keep you informed throughout.</p>`),a(`What technologies do you work with?`,`<p>We work across the modern web stack. On the frontend we favour <a href="#">SvelteKit</a>, React, and Next.js. On the backend we use .NET, Node.js, and headless CMS platforms like Umbraco and Contentful. We choose the right tool for each project rather than forcing a single stack.</p>`),a(`Do you offer ongoing support and maintenance?`,`<p>Yes — all projects include a 30-day warranty period after launch. Beyond that we offer retainer packages covering hosting management, security updates, feature development, and priority support. Around 70% of our clients move onto a retainer once their initial project is live.</p>`),a(`How do I get started working with you?`,`<p>The best first step is a free 30-minute discovery call. We'll listen to your goals, ask the right questions, and give you an honest assessment of scope and cost. <a href="#">Book a call</a> using the link on our contact page — we typically respond within one business day.</p>`)]},s={items:[a(`How much does a typical project cost?`,`<p>Every project is scoped individually, but most of our engagements fall between £15,000 and £150,000 depending on complexity, timeline, and ongoing support requirements. We provide a detailed fixed-price proposal after an initial discovery call so there are never any surprises.</p>`)]},c={title:`Blocks/AccordionBlock`,component:n,tags:[`autodocs`,`snapshot`],parameters:{docs:{description:{component:"An expandable FAQ-style accordion section. Uses native `<details>`/`<summary>` elements for CSS-only expand/collapse — no JavaScript state required. Corresponds to the `accordionBlock` Umbraco content type. Props: `title` (optional section heading), `subTitle` (optional intro text), `items` (BlockList of `accordionItem` blocks with `question` and `answer` rich text), and `openFirst` (boolean, opens the first item on load). Renders a dashed empty-state placeholder when `items` is empty. Supports dark mode."}}}},l={args:{items:o}},u={args:{title:`Frequently Asked Questions`,subTitle:`Everything you need to know about working with us.`,items:o}},d={parameters:{docs:{description:{story:"Demonstrates the `openFirst` prop — the first accordion item is pre-expanded on load without any JavaScript interaction."}}},args:{items:s,openFirst:!0}},f={parameters:{docs:{description:{story:`Shows the empty-state placeholder rendered when no accordion items have been added in the Umbraco backoffice.`}}},args:{title:`Frequently Asked Questions`,items:{items:[]}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: faqItems
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Frequently Asked Questions',
    subTitle: 'Everything you need to know about working with us.',
    items: faqItems
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the \`openFirst\` prop — the first accordion item is pre-expanded on load without any JavaScript interaction.'
      }
    }
  },
  args: {
    items: singleItem,
    openFirst: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the empty-state placeholder rendered when no accordion items have been added in the Umbraco backoffice.'
      }
    }
  },
  args: {
    title: 'Frequently Asked Questions',
    items: {
      items: []
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithTitle`,`SingleItem`,`Empty`]}))();export{l as Default,f as Empty,d as SingleItem,u as WithTitle,p as __namedExportsOrder,c as default};