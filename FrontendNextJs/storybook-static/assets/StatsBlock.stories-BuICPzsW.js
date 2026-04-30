import{n as e}from"./chunk-BEldbCjX.js";import{a as t}from"./iframe-CaRgH72A.js";function n(e){return e.replace(/([%+.])/g,`<span class="text-[0.6em] text-red-600 dark:text-red-500">$1</span>`)}function r({title:e,stats:t}){let r=t?.items||[];return(0,i.jsx)(`section`,{className:`py-12 md:py-16`,children:(0,i.jsxs)(`div`,{className:`container mx-auto px-4`,children:[e&&(0,i.jsx)(`h2`,{className:`font-display mb-12 text-left text-3xl font-semibold tracking-widest text-zinc-500 uppercase md:text-4xl dark:text-zinc-400`,children:e}),r.length===0?(0,i.jsx)(`div`,{className:`rounded-xl border border-dashed border-zinc-200 p-12 text-left dark:border-zinc-800`,children:(0,i.jsx)(`p`,{className:`text-sm text-zinc-500 dark:text-zinc-400`,children:`No items added yet.`})}):(0,i.jsx)(`div`,{className:`grid grid-cols-2 gap-8 md:grid-cols-4`,children:r.map((e,t)=>{let r=e.content.properties;return(0,i.jsxs)(`div`,{className:`border-l-2 border-l-zinc-200 py-1 pl-6 text-left dark:border-l-zinc-800`,children:[r.value&&(0,i.jsx)(`p`,{className:`font-display text-4xl font-bold text-zinc-900 md:text-5xl dark:text-white`,dangerouslySetInnerHTML:{__html:n(r.value)}}),r.label&&(0,i.jsx)(`p`,{className:`mt-2 text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-zinc-50`,children:r.label}),r.description&&(0,i.jsx)(`p`,{className:`mt-1 text-sm text-zinc-500 dark:text-zinc-400`,children:r.description})]},t)})})]})})}var i,a=e((()=>{i=t(),r.__docgenInfo={description:``,methods:[],displayName:`StatsBlock`,props:{title:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},stats:{required:!1,tsType:{name:`union`,raw:`{\r
  items: Array<{\r
    content: { contentType: string; properties: StatItem };\r
  }>;\r
} | null`,elements:[{name:`signature`,type:`object`,raw:`{\r
  items: Array<{\r
    content: { contentType: string; properties: StatItem };\r
  }>;\r
}`,signature:{properties:[{key:`items`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{\r
  content: { contentType: string; properties: StatItem };\r
}`,signature:{properties:[{key:`content`,value:{name:`signature`,type:`object`,raw:`{ contentType: string; properties: StatItem }`,signature:{properties:[{key:`contentType`,value:{name:`string`,required:!0}},{key:`properties`,value:{name:`StatItem`,required:!0}}]},required:!0}}]}}],raw:`Array<{\r
  content: { contentType: string; properties: StatItem };\r
}>`,required:!0}}]}},{name:`null`}]},description:``}}}})),o,s,c,l,u,d,f,p;e((()=>{a(),o={title:`Blocks/StatsBlock`,component:r,tags:[`autodocs`,`snapshot`],parameters:{docs:{description:{component:"A grid of key statistics. Corresponds to the `statsBlock` Umbraco content type. Renders a 2→4 column grid where each stat shows a `value`, `label`, and optional `description`. Symbol characters (%, +, .) within `value` are automatically wrapped in brand-red `<span>` elements at a smaller size to visually accent them. Props: `title` (optional section heading) and `stats` (a BlockList of `statItem` blocks). Shows a dashed empty-state placeholder when no stats are present. Supports dark mode."}}}},s=(e,t,n)=>({content:{contentType:`statItem`,properties:{value:e,label:t,description:n??null}}}),c=[s(`200+`,`Projects Delivered`,`Across web, mobile, and enterprise`),s(`12`,`Years Experience`,`Building digital products since 2012`),s(`98%`,`Client Retention`,`Long-term partnerships that last`),s(`40+`,`Expert Team`,`Designers, engineers, and strategists`)],l={args:{stats:{items:c}}},u={parameters:{docs:{description:{story:"Shows the optional `title` section heading above the stats grid — useful when the block needs a label to contextualise the numbers."}}},args:{title:`By the Numbers`,stats:{items:c}}},d={args:{stats:{items:[s(`£50M+`,`Revenue Generated`,`For clients in the past three years`),s(`4.9 / 5`,`Average Rating`,`Based on post-project surveys`)]}}},f={parameters:{docs:{description:{story:`Shows the empty-state placeholder rendered when no stat items have been added in the Umbraco backoffice.`}}},args:{stats:{items:[]}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    stats: {
      items: fourStats
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the optional \`title\` section heading above the stats grid — useful when the block needs a label to contextualise the numbers.'
      }
    }
  },
  args: {
    title: 'By the Numbers',
    stats: {
      items: fourStats
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    stats: {
      items: [makeStat('£50M+', 'Revenue Generated', 'For clients in the past three years'), makeStat('4.9 / 5', 'Average Rating', 'Based on post-project surveys')]
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the empty-state placeholder rendered when no stat items have been added in the Umbraco backoffice.'
      }
    }
  },
  args: {
    stats: {
      items: []
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithTitle`,`TwoStats`,`Empty`]}))();export{l as Default,f as Empty,d as TwoStats,u as WithTitle,p as __namedExportsOrder,o as default};