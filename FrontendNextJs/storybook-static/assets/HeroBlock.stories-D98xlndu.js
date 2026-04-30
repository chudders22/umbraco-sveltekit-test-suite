import{n as e}from"./chunk-BEldbCjX.js";import{a as t}from"./iframe-CaRgH72A.js";import{n,t as r}from"./umbracoApi-CjrG0CRC.js";function i({heading:e,subheading:t,backgroundImage:r,ctaLink:i}){let o=n(r?.[0]?.url),s=i?.[0];return(0,a.jsxs)(`section`,{className:`relative flex min-h-[40vh] items-center overflow-hidden bg-zinc-50 bg-cover bg-center bg-no-repeat dark:bg-zinc-950`,style:o?{backgroundImage:`url('${o}')`}:void 0,children:[(0,a.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-r from-zinc-50/95 via-zinc-50/75 to-transparent dark:from-zinc-950/95 dark:via-zinc-950/80 dark:to-zinc-950/30`}),(0,a.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-zinc-50/50 to-transparent dark:from-zinc-950/60`}),(0,a.jsx)(`div`,{className:`absolute -top-20 left-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl`,"aria-hidden":`true`}),(0,a.jsx)(`div`,{className:`relative z-10 container mx-auto px-4 py-20 sm:px-6 lg:px-8`,children:(0,a.jsxs)(`div`,{className:`max-w-3xl`,children:[(0,a.jsx)(`div`,{className:`mb-6 h-0.5 w-32 bg-red-600`,"aria-hidden":`true`}),e&&(0,a.jsx)(`h1`,{className:`mb-6 font-display text-4xl leading-none font-bold tracking-tighter text-zinc-900 md:text-6xl dark:text-white`,children:e}),t&&(0,a.jsx)(`p`,{className:`mb-10 max-w-xl text-lg leading-relaxed text-zinc-600 md:text-xl dark:text-zinc-300`,children:t}),s&&s.url&&(0,a.jsxs)(`a`,{href:s.url,target:s.target??void 0,className:`group inline-flex items-center gap-3 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-50 transition-all hover:gap-4 hover:bg-zinc-700 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 focus-visible:outline-none dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-white dark:focus-visible:ring-zinc-50 dark:focus-visible:ring-offset-zinc-950`,children:[s.title||`Learn More`,(0,a.jsx)(`span`,{className:`transition-transform group-hover:translate-x-0.5`,"aria-hidden":`true`,children:`→`})]})]})})]})}var a,o=e((()=>{a=t(),r(),i.__docgenInfo={description:``,methods:[],displayName:`HeroBlock`,props:{heading:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},subheading:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},backgroundImage:{required:!1,tsType:{name:`union`,raw:`components['schemas']['IApiMediaWithCropsModel'][] | null`,elements:[{name:`Array`,elements:[{name:`components['schemas']['IApiMediaWithCropsModel']`,raw:`components['schemas']['IApiMediaWithCropsModel']`}],raw:`components['schemas']['IApiMediaWithCropsModel'][]`},{name:`null`}]},description:``},ctaLink:{required:!1,tsType:{name:`union`,raw:`components['schemas']['ApiLinkModel'][] | null`,elements:[{name:`Array`,elements:[{name:`components['schemas']['ApiLinkModel']`,raw:`components['schemas']['ApiLinkModel']`}],raw:`components['schemas']['ApiLinkModel'][]`},{name:`null`}]},description:``}}}})),s,c,l,u;e((()=>{o(),s={title:`Blocks/HeroBlock`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"A full-width hero section with a CSS background image, directional gradient overlay, and optional content. Props: `heading` (renders as `<h1>`), `subheading`, `backgroundImage` (Umbraco media array — first item used), and `ctaLink` (Umbraco link array — first item used). Minimum height is 40vh. The gradient fades from near-opaque on the left to transparent on the right, adapting for both light and dark modes. Use this for top-of-page hero sections; for page-level headers with a darker cinematic treatment, use `CallToActionPageHeader` instead."}}}},c={args:{heading:`Where Leadership Matters.`,subheading:`Transforming clients' performance through the strength of exceptional, world-class leadership.`,backgroundImage:[{id:`123`,name:`Mountains`,mediaType:`Image`,url:`https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop`,properties:{}}],ctaLink:[{url:`/how-we-help`,title:`How We Help`,target:`_self`,route:{path:`/how-we-help`,startItem:{id:`0`,path:`/`}},linkType:`Content`}]}},l={parameters:{docs:{description:{story:"Shows the hero with no `ctaLink` — the CTA button is omitted entirely, leaving only the heading and subheading over the background image."}}},args:{heading:`Global Reach, Local Expertise`,subheading:`Connecting organizations with the leadership talent they need.`,backgroundImage:[{id:`124`,name:`City Skyline`,mediaType:`Image`,url:`https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2670&auto=format&fit=crop`,properties:{}}]}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the hero with no \`ctaLink\` — the CTA button is omitted entirely, leaving only the heading and subheading over the background image.'
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
}`,...l.parameters?.docs?.source}}},u=[`Default`,`WithoutCTA`]}))();export{c as Default,l as WithoutCTA,u as __namedExportsOrder,s as default};