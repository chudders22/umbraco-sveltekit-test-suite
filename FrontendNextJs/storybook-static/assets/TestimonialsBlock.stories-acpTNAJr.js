import{n as e}from"./chunk-BEldbCjX.js";import{a as t}from"./iframe-CaRgH72A.js";import{n,t as r}from"./umbracoApi-CjrG0CRC.js";function i({title:e,subTitle:t,testimonials:r}){let i=r?.items??[];return(0,a.jsx)(`section`,{className:`border-y border-zinc-100 bg-white py-8 md:py-12 dark:border-zinc-800 dark:bg-zinc-950`,children:(0,a.jsxs)(`div`,{className:`container mx-auto px-4`,children:[(e||t)&&(0,a.jsxs)(`header`,{className:`mb-8 lg:w-1/2`,children:[e&&(0,a.jsx)(`h2`,{className:`font-display text-3xl font-semibold tracking-widest text-zinc-500 uppercase md:text-4xl dark:text-zinc-400`,children:e}),t&&(0,a.jsx)(`p`,{className:`mt-1 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400`,children:t})]}),i.length===0?(0,a.jsx)(`div`,{className:`rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30`,children:(0,a.jsx)(`p`,{className:`text-sm text-zinc-500 dark:text-zinc-400`,children:`No items added yet.`})}):(0,a.jsx)(`div`,{className:`grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3`,children:i.map((e,t)=>{let r=e.content.properties,i=r.authorImage?.[0];return(0,a.jsxs)(`article`,{className:`group relative flex h-full flex-col border-l-2 border-l-zinc-200 py-1 pl-6 transition-all duration-200 hover:border-l-red-500 dark:border-l-zinc-800 dark:hover:border-l-red-500`,children:[(0,a.jsx)(`div`,{className:`font-display text-6xl leading-none text-red-600/30 dark:text-red-400/20`,"aria-hidden":`true`,children:`“`}),r.quote&&(0,a.jsx)(`blockquote`,{className:`mt-2 flex-1 text-base leading-relaxed text-zinc-600 dark:text-zinc-300`,children:r.quote}),(0,a.jsxs)(`footer`,{className:`mt-6 flex items-center gap-3`,children:[i&&(0,a.jsx)(`img`,{src:n(i.url),alt:i.name,className:`h-10 w-10 shrink-0 rounded-full object-cover`,width:40,height:40}),(0,a.jsxs)(`div`,{children:[r.authorName&&(0,a.jsx)(`p`,{className:`text-sm font-semibold text-zinc-900 dark:text-zinc-50`,children:r.authorName}),(r.authorRole||r.authorCompany)&&(0,a.jsxs)(`p`,{className:`text-sm text-zinc-500 dark:text-zinc-400`,children:[r.authorRole,r.authorRole&&r.authorCompany&&`,\xA0`,r.authorCompany]})]})]})]},t)})})]})})}var a,o=e((()=>{a=t(),r(),i.__docgenInfo={description:``,methods:[],displayName:`TestimonialsBlock`,props:{title:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},subTitle:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},testimonials:{required:!1,tsType:{name:`union`,raw:`{\r
  items: Array<{\r
    content: { contentType: string; properties: TestimonialItem };\r
  }>;\r
} | null`,elements:[{name:`signature`,type:`object`,raw:`{\r
  items: Array<{\r
    content: { contentType: string; properties: TestimonialItem };\r
  }>;\r
}`,signature:{properties:[{key:`items`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{\r
  content: { contentType: string; properties: TestimonialItem };\r
}`,signature:{properties:[{key:`content`,value:{name:`signature`,type:`object`,raw:`{ contentType: string; properties: TestimonialItem }`,signature:{properties:[{key:`contentType`,value:{name:`string`,required:!0}},{key:`properties`,value:{name:`TestimonialItem`,required:!0}}]},required:!0}}]}}],raw:`Array<{\r
  content: { contentType: string; properties: TestimonialItem };\r
}>`,required:!0}}]}},{name:`null`}]},description:``}}}})),s,c,l,u,d,f,p;e((()=>{o(),s={title:`Blocks/TestimonialsBlock`,component:i,tags:[`autodocs`,`snapshot`],parameters:{docs:{description:{component:"A grid of customer testimonials. Corresponds to the `testimonialsBlock` Umbraco content type. Renders a 1→2→3 column responsive grid of testimonial cards. Each card shows a decorative opening quote mark, the `quote` text, and a footer with an optional circular `authorImage`, `authorName`, and combined `authorRole`/`authorCompany` attribution. Props: `title`, `subTitle`, and `testimonials` (a BlockList of `testimonialItem` blocks). Shows a dashed empty-state placeholder when no testimonials are present. Supports dark mode."}}}},c=(e,t)=>[{id:`1`,url:e,name:t,mediaType:`image`,properties:{}}],l={args:{title:`Client Stories`,subTitle:`What our partners say about working with us.`,testimonials:{items:[{content:{contentType:`testimonialItem`,properties:{quote:`The team completely transformed our digital presence. They delivered a headless CMS solution that our editors love, and our page load times dropped by 60%. Could not ask for a better partner.`,authorName:`Sarah Okafor`,authorRole:`Head of Digital`,authorCompany:`Meridian Financial Group`,authorImage:c(`https://i.pravatar.cc/80?img=47`,`Sarah Okafor`)}}},{content:{contentType:`testimonialItem`,properties:{quote:`From discovery to launch in eight weeks. The SvelteKit frontend is blazing fast and our conversion rate has gone up significantly since we relaunched. Exceptional work throughout.`,authorName:`Tom Hargreaves`,authorRole:`CTO`,authorCompany:`Vantage Retail`,authorImage:c(`https://i.pravatar.cc/80?img=12`,`Tom Hargreaves`)}}},{content:{contentType:`testimonialItem`,properties:{quote:`They took the time to understand our workflows before writing a single line of code. The custom Umbraco integrations they built have saved our content team hours every week.`,authorName:`Priya Nair`,authorRole:`Marketing Director`,authorCompany:`Solace Health`,authorImage:null}}}]}}},u={args:{title:`What Clients Say`,testimonials:{items:[{content:{contentType:`testimonialItem`,properties:{quote:`Working with this team was the best technology decision we made last year. They delivered on every promise and the site has been rock-solid in production.`,authorName:`James Whitfield`,authorRole:`CEO`,authorCompany:`Beacon Logistics`,authorImage:c(`https://i.pravatar.cc/80?img=33`,`James Whitfield`)}}}]}}},d={parameters:{docs:{description:{story:"All testimonials without `authorImage` — the avatar slot is omitted and the author name/role row renders flush without the image gap."}}},args:{title:`Testimonials`,subTitle:`Trusted by teams across industries.`,testimonials:{items:[{content:{contentType:`testimonialItem`,properties:{quote:`Our new platform handles three times the traffic without breaking a sweat. The architecture decisions they made have given us room to grow for years.`,authorName:`Fatima Al-Rashid`,authorRole:`VP Engineering`,authorCompany:`CloudPath Technologies`,authorImage:null}}},{content:{contentType:`testimonialItem`,properties:{quote:`The accessibility audit and remediation work they did was genuinely impressive. We passed WCAG 2.1 AA on the first independent review — a first for us.`,authorName:`Oliver Marsh`,authorRole:`Product Owner`,authorCompany:`Civic Connect`,authorImage:null}}},{content:{contentType:`testimonialItem`,properties:{quote:`I appreciated that they pushed back when our brief didn't make sense. That honesty led to a much better product than we originally planned.`,authorName:`Yuki Tanaka`,authorRole:`Digital Lead`,authorCompany:`Orium Agency`,authorImage:null}}}]}}},f={parameters:{docs:{description:{story:`Shows the empty-state placeholder rendered when no testimonial items have been added in the Umbraco backoffice.`}}},args:{title:`Testimonials`,testimonials:{items:[]}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Client Stories',
    subTitle: 'What our partners say about working with us.',
    testimonials: {
      items: [{
        content: {
          contentType: 'testimonialItem',
          properties: {
            quote: 'The team completely transformed our digital presence. They delivered a headless CMS solution that our editors love, and our page load times dropped by 60%. Could not ask for a better partner.',
            authorName: 'Sarah Okafor',
            authorRole: 'Head of Digital',
            authorCompany: 'Meridian Financial Group',
            authorImage: withAvatar('https://i.pravatar.cc/80?img=47', 'Sarah Okafor')
          }
        }
      }, {
        content: {
          contentType: 'testimonialItem',
          properties: {
            quote: 'From discovery to launch in eight weeks. The SvelteKit frontend is blazing fast and our conversion rate has gone up significantly since we relaunched. Exceptional work throughout.',
            authorName: 'Tom Hargreaves',
            authorRole: 'CTO',
            authorCompany: 'Vantage Retail',
            authorImage: withAvatar('https://i.pravatar.cc/80?img=12', 'Tom Hargreaves')
          }
        }
      }, {
        content: {
          contentType: 'testimonialItem',
          properties: {
            quote: 'They took the time to understand our workflows before writing a single line of code. The custom Umbraco integrations they built have saved our content team hours every week.',
            authorName: 'Priya Nair',
            authorRole: 'Marketing Director',
            authorCompany: 'Solace Health',
            authorImage: null
          }
        }
      }]
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'What Clients Say',
    testimonials: {
      items: [{
        content: {
          contentType: 'testimonialItem',
          properties: {
            quote: 'Working with this team was the best technology decision we made last year. They delivered on every promise and the site has been rock-solid in production.',
            authorName: 'James Whitfield',
            authorRole: 'CEO',
            authorCompany: 'Beacon Logistics',
            authorImage: withAvatar('https://i.pravatar.cc/80?img=33', 'James Whitfield')
          }
        }
      }]
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'All testimonials without \`authorImage\` — the avatar slot is omitted and the author name/role row renders flush without the image gap.'
      }
    }
  },
  args: {
    title: 'Testimonials',
    subTitle: 'Trusted by teams across industries.',
    testimonials: {
      items: [{
        content: {
          contentType: 'testimonialItem',
          properties: {
            quote: 'Our new platform handles three times the traffic without breaking a sweat. The architecture decisions they made have given us room to grow for years.',
            authorName: 'Fatima Al-Rashid',
            authorRole: 'VP Engineering',
            authorCompany: 'CloudPath Technologies',
            authorImage: null
          }
        }
      }, {
        content: {
          contentType: 'testimonialItem',
          properties: {
            quote: 'The accessibility audit and remediation work they did was genuinely impressive. We passed WCAG 2.1 AA on the first independent review — a first for us.',
            authorName: 'Oliver Marsh',
            authorRole: 'Product Owner',
            authorCompany: 'Civic Connect',
            authorImage: null
          }
        }
      }, {
        content: {
          contentType: 'testimonialItem',
          properties: {
            quote: "I appreciated that they pushed back when our brief didn't make sense. That honesty led to a much better product than we originally planned.",
            authorName: 'Yuki Tanaka',
            authorRole: 'Digital Lead',
            authorCompany: 'Orium Agency',
            authorImage: null
          }
        }
      }]
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the empty-state placeholder rendered when no testimonial items have been added in the Umbraco backoffice.'
      }
    }
  },
  args: {
    title: 'Testimonials',
    testimonials: {
      items: []
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Single`,`NoImages`,`Empty`]}))();export{l as Default,f as Empty,d as NoImages,u as Single,p as __namedExportsOrder,s as default};