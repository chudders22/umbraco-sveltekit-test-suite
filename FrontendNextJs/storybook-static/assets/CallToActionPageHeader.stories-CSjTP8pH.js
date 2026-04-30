import{n as e}from"./chunk-BEldbCjX.js";import{a as t}from"./iframe-CaRgH72A.js";function n({heading:e,subheading:t,backgroundImage:n,ctaLink:i}){let a=n?.[0]?.url||``,o=i?.[0];return(0,r.jsxs)(`section`,{className:`relative flex min-h-[75vh] items-center overflow-hidden bg-zinc-900 bg-cover bg-center bg-no-repeat dark:bg-zinc-950`,style:a?{backgroundImage:`url('${a}')`}:void 0,children:[(0,r.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/80 to-zinc-950/30`}),(0,r.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent`}),(0,r.jsx)(`div`,{className:`absolute -top-20 left-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl`,"aria-hidden":`true`}),(0,r.jsx)(`div`,{className:`relative z-10 container mx-auto px-4 py-24 sm:px-6 lg:px-8`,children:(0,r.jsxs)(`div`,{className:`max-w-3xl`,children:[e&&(0,r.jsx)(`h1`,{className:`mb-6 font-display text-5xl leading-none font-bold tracking-tighter text-white md:text-7xl`,children:e}),t&&(0,r.jsx)(`p`,{className:`mb-10 max-w-xl text-lg leading-relaxed text-zinc-300 md:text-xl`,children:t}),o&&o.url&&(0,r.jsxs)(`a`,{href:o.url,target:o.target??void 0,className:`group inline-flex items-center gap-3 rounded-lg bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:gap-4 hover:bg-white focus-visible:ring-2 focus-visible:ring-zinc-50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus-visible:outline-none`,children:[o.title||`Learn More`,(0,r.jsx)(`span`,{className:`transition-transform group-hover:translate-x-0.5`,"aria-hidden":`true`,children:`→`})]})]})})]})}var r,i=e((()=>{r=t(),n.__docgenInfo={description:``,methods:[],displayName:`CallToActionPageHeader`,props:{heading:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},subheading:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},backgroundImage:{required:!1,tsType:{name:`union`,raw:`components['schemas']['IApiMediaWithCropsModel'][] | null`,elements:[{name:`Array`,elements:[{name:`components['schemas']['IApiMediaWithCropsModel']`,raw:`components['schemas']['IApiMediaWithCropsModel']`}],raw:`components['schemas']['IApiMediaWithCropsModel'][]`},{name:`null`}]},description:``},ctaLink:{required:!1,tsType:{name:`union`,raw:`components['schemas']['ApiLinkModel'][] | null`,elements:[{name:`Array`,elements:[{name:`components['schemas']['ApiLinkModel']`,raw:`components['schemas']['ApiLinkModel']`}],raw:`components['schemas']['ApiLinkModel'][]`},{name:`null`}]},description:``}}}})),a,o,s,c;e((()=>{i(),a={title:`PageHeaders/CallToActionPageHeader`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:"A bold, dark cinematic page header intended for top-level landing pages. Corresponds to the `callToActionPageHeader` Umbraco content type. Similar to `HeroBlock` but with a taller minimum height (75vh), a fully dark overlay (no light-mode variant), larger typography (5xl → 7xl), and a light-coloured CTA button. Props: `heading` (rendered as `<h1>`), `subheading`, `backgroundImage` (first item used), and `ctaLink` (first item used). All props are optional — heading and subheading default to nothing if omitted."}}}},o={args:{heading:`Where Leadership Matters.`,subheading:`Transforming clients' performance through the strength of exceptional, world-class leadership.`,backgroundImage:[{id:`123`,name:`Mountains`,mediaType:`Image`,url:`https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop`,properties:{}}],ctaLink:[{url:`/how-we-help`,title:`How We Help`,target:`_self`,route:{path:`/how-we-help`,startItem:{id:`0`,path:`/`}},linkType:`Content`}]}},s={parameters:{docs:{description:{story:"Shows the page header with no `ctaLink` — useful for informational landing pages that don't require a primary call to action."}}},args:{heading:`Global Reach, Local Expertise`,subheading:`Connecting organizations with the leadership talent they need.`,backgroundImage:[{id:`124`,name:`City Skyline`,mediaType:`Image`,url:`https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2670&auto=format&fit=crop`,properties:{}}]}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Where Leadership Matters.',
    subheading: "Transforming clients' performance through the strength of exceptional, world-class leadership.",
    backgroundImage: [{
      id: '123',
      name: 'Mountains',
      mediaType: 'Image',
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop',
      properties: {}
    }],
    ctaLink: [{
      url: '/how-we-help',
      title: 'How We Help',
      target: '_self',
      route: {
        path: '/how-we-help',
        startItem: {
          id: '0',
          path: '/'
        }
      },
      linkType: 'Content'
    }]
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Shows the page header with no \`ctaLink\` — useful for informational landing pages that don't require a primary call to action."
      }
    }
  },
  args: {
    heading: 'Global Reach, Local Expertise',
    subheading: 'Connecting organizations with the leadership talent they need.',
    backgroundImage: [{
      id: '124',
      name: 'City Skyline',
      mediaType: 'Image',
      url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2670&auto=format&fit=crop',
      properties: {}
    }]
  }
}`,...s.parameters?.docs?.source}}},c=[`Default`,`WithoutCTA`]}))();export{o as Default,s as WithoutCTA,c as __namedExportsOrder,a as default};