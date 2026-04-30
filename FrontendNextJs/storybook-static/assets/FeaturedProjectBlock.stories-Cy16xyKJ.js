import{n as e}from"./chunk-BEldbCjX.js";import{a as t}from"./iframe-CaRgH72A.js";import{n,t as r}from"./umbracoApi-CjrG0CRC.js";function i({sectionLabel:e,projectTitle:t,description:r,image:i,tags:o,client:s,link:c}){let l=i?.[0],u=c?.[0],d=!!l?.url,f=!!o?.length;return(0,a.jsx)(`section`,{className:`py-12 md:py-20`,children:(0,a.jsxs)(`div`,{className:`container mx-auto px-4`,children:[e&&(0,a.jsx)(`p`,{className:`mb-8 text-xs font-semibold uppercase tracking-widest text-red-600 dark:text-red-500`,children:e}),(0,a.jsxs)(`div`,{className:`grid grid-cols-1 items-center gap-8 lg:grid-cols-5 lg:gap-12`,children:[(0,a.jsx)(`div`,{className:`lg:col-span-3`,children:(0,a.jsx)(`div`,{className:`relative aspect-video overflow-hidden rounded-2xl`,children:d?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`img`,{src:n(l.url),alt:l.name,className:`h-full w-full object-cover`}),(0,a.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-zinc-950/50`,"aria-hidden":`true`})]}):(0,a.jsx)(`div`,{className:`h-full w-full bg-zinc-200 dark:bg-zinc-800`,"aria-hidden":`true`})})}),(0,a.jsxs)(`div`,{className:`lg:col-span-2`,children:[(0,a.jsx)(`div`,{className:`mb-6 h-0.5 w-16 bg-red-600`,"aria-hidden":`true`}),s&&(0,a.jsx)(`p`,{className:`mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400`,children:s}),t&&(0,a.jsx)(`h2`,{className:`font-display mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl`,children:t}),r&&(0,a.jsx)(`p`,{className:`mb-6 leading-relaxed text-zinc-600 dark:text-zinc-300`,children:r}),f&&(0,a.jsx)(`div`,{className:`mb-2 flex flex-wrap gap-2`,children:o.map(e=>(0,a.jsx)(`span`,{className:`inline-flex items-center rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300`,children:e},e))}),u?.url&&(0,a.jsxs)(`a`,{href:u.url,target:u.target??`_self`,className:`group mt-6 flex items-center gap-2 font-semibold text-red-600 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-500 dark:text-red-400 dark:hover:text-red-300`,children:[u.title??`View project`,(0,a.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,className:`h-3.5 w-3.5 transition-transform group-hover:translate-x-1`,"aria-hidden":`true`,children:(0,a.jsx)(`path`,{fillRule:`evenodd`,d:`M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z`,clipRule:`evenodd`})})]})]})]})]})})}var a,o=e((()=>{a=t(),r(),i.__docgenInfo={description:``,methods:[],displayName:`FeaturedProjectBlock`,props:{sectionLabel:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},projectTitle:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},description:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},image:{required:!1,tsType:{name:`union`,raw:`Array<{ url: string; name: string; mediaType: string; id: string; properties: object }> | null`,elements:[{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ url: string; name: string; mediaType: string; id: string; properties: object }`,signature:{properties:[{key:`url`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`mediaType`,value:{name:`string`,required:!0}},{key:`id`,value:{name:`string`,required:!0}},{key:`properties`,value:{name:`object`,required:!0}}]}}],raw:`Array<{ url: string; name: string; mediaType: string; id: string; properties: object }>`},{name:`null`}]},description:``},tags:{required:!1,tsType:{name:`union`,raw:`string[] | null`,elements:[{name:`Array`,elements:[{name:`string`}],raw:`string[]`},{name:`null`}]},description:``},client:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},link:{required:!1,tsType:{name:`union`,raw:`Array<{\r
  title?: string | null;\r
  url?: string | null;\r
  target?: string | null;\r
  route?: { path: string } | null;\r
}> | null`,elements:[{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{\r
  title?: string | null;\r
  url?: string | null;\r
  target?: string | null;\r
  route?: { path: string } | null;\r
}`,signature:{properties:[{key:`title`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`url`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`target`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`route`,value:{name:`union`,raw:`{ path: string } | null`,elements:[{name:`signature`,type:`object`,raw:`{ path: string }`,signature:{properties:[{key:`path`,value:{name:`string`,required:!0}}]}},{name:`null`}],required:!1}}]}}],raw:`Array<{\r
  title?: string | null;\r
  url?: string | null;\r
  target?: string | null;\r
  route?: { path: string } | null;\r
}>`},{name:`null`}]},description:``}}}})),s,c,l,u,d,f;e((()=>{o(),s={title:`Blocks/FeaturedProjectBlock`,component:i,tags:[`autodocs`,`snapshot`],parameters:{docs:{description:{component:"A showcase section for a single featured case study or project. Corresponds to the `featuredProjectBlock` Umbraco content type. Renders a 5-column asymmetric grid: a 3/5-wide image panel (aspect-video, with a gradient overlay) and a 2/5-wide content panel containing an optional `sectionLabel`, `client` attribution, `projectTitle`, `description`, a `tags` array rendered as pill badges, and an optional CTA `link`. When no image is supplied a grey placeholder fills the image slot. All fields except the grid layout are optional."}}}},c=[{id:`proj-img-001`,name:`E-commerce platform dashboard`,mediaType:`Image`,url:`https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop`,properties:{}}],l={args:{sectionLabel:`Featured work`,projectTitle:`Apex Commerce Platform`,description:`A headless e-commerce platform handling 2M+ transactions per month. We rebuilt the entire checkout experience from the ground up, cutting drop-off rates by 34% and reducing time-to-purchase by half.`,image:c,client:`Apex Retail Group`,tags:[`SvelteKit`,`Node.js`,`Stripe`,`PostgreSQL`,`Kubernetes`],link:[{title:`View case study`,url:`/work/apex-commerce`,target:`_self`,route:{path:`/work/apex-commerce`}}]}},u={parameters:{docs:{description:{story:`Shows the block when no image is provided — a grey placeholder fills the image slot, so the layout remains intact.`}}},args:{sectionLabel:`Featured work`,projectTitle:`Luminary SaaS Dashboard`,description:`A real-time analytics dashboard for a fast-growing B2B SaaS product. We designed and engineered a component system that scaled from MVP to Series B without a rewrite.`,image:null,client:`Luminary Technologies`,tags:[`React`,`TypeScript`,`GraphQL`,`AWS`],link:[{title:`View case study`,url:`/work/luminary-dashboard`,target:`_self`,route:{path:`/work/luminary-dashboard`}}]}},d={parameters:{docs:{description:{story:"Minimal variant with only `projectTitle`, `description`, and `image` — demonstrates that `sectionLabel`, `client`, `tags`, and `link` are all optional."}}},args:{projectTitle:`Fieldnotes Mobile App`,description:`A cross-platform mobile app for field service teams. Offline-first architecture with seamless sync when connectivity is restored.`,image:[{id:`proj-img-002`,name:`Mobile app screens`,mediaType:`Image`,url:`https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop`,properties:{}}]}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    sectionLabel: 'Featured work',
    projectTitle: 'Apex Commerce Platform',
    description: 'A headless e-commerce platform handling 2M+ transactions per month. We rebuilt the entire checkout experience from the ground up, cutting drop-off rates by 34% and reducing time-to-purchase by half.',
    image: sampleImage,
    client: 'Apex Retail Group',
    tags: ['SvelteKit', 'Node.js', 'Stripe', 'PostgreSQL', 'Kubernetes'],
    link: [{
      title: 'View case study',
      url: '/work/apex-commerce',
      target: '_self',
      route: {
        path: '/work/apex-commerce'
      }
    }]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the block when no image is provided — a grey placeholder fills the image slot, so the layout remains intact.'
      }
    }
  },
  args: {
    sectionLabel: 'Featured work',
    projectTitle: 'Luminary SaaS Dashboard',
    description: 'A real-time analytics dashboard for a fast-growing B2B SaaS product. We designed and engineered a component system that scaled from MVP to Series B without a rewrite.',
    image: null,
    client: 'Luminary Technologies',
    tags: ['React', 'TypeScript', 'GraphQL', 'AWS'],
    link: [{
      title: 'View case study',
      url: '/work/luminary-dashboard',
      target: '_self',
      route: {
        path: '/work/luminary-dashboard'
      }
    }]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Minimal variant with only \`projectTitle\`, \`description\`, and \`image\` — demonstrates that \`sectionLabel\`, \`client\`, \`tags\`, and \`link\` are all optional.'
      }
    }
  },
  args: {
    projectTitle: 'Fieldnotes Mobile App',
    description: 'A cross-platform mobile app for field service teams. Offline-first architecture with seamless sync when connectivity is restored.',
    image: [{
      id: 'proj-img-002',
      name: 'Mobile app screens',
      mediaType: 'Image',
      url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop',
      properties: {}
    }]
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`NoImage`,`MinimalContent`]}))();export{l as Default,d as MinimalContent,u as NoImage,f as __namedExportsOrder,s as default};