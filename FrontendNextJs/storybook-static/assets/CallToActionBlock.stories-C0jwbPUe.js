import{n as e}from"./chunk-BEldbCjX.js";import{a as t}from"./iframe-CaRgH72A.js";import{n,t as r}from"./ButtonLink-DaUGW-NC.js";import{n as i,t as a}from"./umbracoApi-CjrG0CRC.js";function o({heading:e,text:t,actions:n,image:a}){let o=i(a?.[0]?.url),c=a?.[0]?.name||e||`Call to action`;return(0,s.jsxs)(`section`,{className:`relative overflow-hidden border-y border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-950`,children:[(0,s.jsx)(`div`,{className:`absolute inset-0 bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_right,black_40%,transparent_90%)] dark:hidden`,"aria-hidden":`true`}),(0,s.jsx)(`div`,{className:`absolute inset-0 hidden bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_right,black_40%,transparent_90%)] dark:block`,"aria-hidden":`true`}),(0,s.jsxs)(`div`,{className:`relative flex flex-col items-stretch md:flex-row`,children:[(0,s.jsxs)(`div`,{className:`flex flex-1 flex-col justify-center gap-6 px-8 py-8 md:px-12 lg:px-16 lg:py-12`,children:[(0,s.jsx)(`div`,{className:`h-0.5 w-32 bg-red-600`,"aria-hidden":`true`}),e&&(0,s.jsx)(`h2`,{className:`font-display text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl lg:text-5xl dark:text-zinc-50`,children:e}),t?.markup&&(0,s.jsx)(`div`,{className:`prose max-w-none text-lg prose-p:text-zinc-600 dark:prose-p:text-zinc-300 prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-red-400`,dangerouslySetInnerHTML:{__html:t.markup}}),n&&n.length>0&&(0,s.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:n.map((e,t)=>(0,s.jsx)(r,{href:e.url||e.route?.path||`#`,target:e.target||`_self`,variant:t===0?`primary`:`outline`,label:e.title||`Learn More`,showArrow:t===0},t))})]}),o&&(0,s.jsxs)(`div`,{className:`relative flex-1 self-stretch`,children:[(0,s.jsx)(`img`,{src:o,alt:c,className:`h-full min-h-[300px] w-full object-cover`,loading:`lazy`}),(0,s.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-zinc-950 dark:via-zinc-950/70`})]})]})]})}var s,c=e((()=>{s=t(),n(),a(),o.__docgenInfo={description:``,methods:[],displayName:`CallToActionBlock`}})),l,u,d,f,p;e((()=>{c(),l={title:`Blocks/CallToActionBlock`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:"A full-width call-to-action section. Corresponds to the `callToActionBlock` Umbraco content type. Renders a two-column layout: text content (heading, rich text body, action links) on the left, and an optional background image on the right with a gradient overlay that blends it into the text side. The first action link is always rendered as a primary button with an arrow; subsequent links use the outline style. All fields are optional — heading only, no image, and text-only variants all render gracefully. Features a decorative dot-grid texture that adapts to light and dark mode."}}}},u={args:{heading:`Ready to Transform Your Business?`,text:{markup:`<p>Join thousands of companies that trust us to deliver <strong>exceptional results</strong>. Get started today and see the difference.</p>`,blocks:[]},actions:[{url:`/get-started`,title:`Get Started`,target:`_self`,route:{path:`/get-started`,startItem:{id:`0`,path:`/`}},linkType:`Content`},{url:`/learn-more`,title:`Learn More`,target:`_self`,route:{path:`/learn-more`,startItem:{id:`0`,path:`/`}},linkType:`Content`}],image:[{id:`200`,name:`Team collaboration`,mediaType:`Image`,url:`https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop`,properties:{}}]}},d={parameters:{docs:{description:{story:`Shows the CTA block without an image — the text content expands to fill the full width.`}}},args:{heading:`Start Your Journey Today`,text:{markup:`<p>We offer comprehensive solutions tailored to your needs. Our team of experts is ready to help you succeed.</p>`,blocks:[]},actions:[{url:`/contact`,title:`Contact Us`,target:`_self`,route:{path:`/contact`,startItem:{id:`0`,path:`/`}},linkType:`Content`}]}},f={parameters:{docs:{description:{story:`Minimal variant with only a heading — demonstrates that all other fields (text, actions, image) are optional and the block renders cleanly with just the heading present.`}}},args:{heading:`Let's Build Something Great Together`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Ready to Transform Your Business?',
    text: {
      markup: '<p>Join thousands of companies that trust us to deliver <strong>exceptional results</strong>. Get started today and see the difference.</p>',
      blocks: []
    },
    actions: [{
      url: '/get-started',
      title: 'Get Started',
      target: '_self',
      route: {
        path: '/get-started',
        startItem: {
          id: '0',
          path: '/'
        }
      },
      linkType: 'Content'
    }, {
      url: '/learn-more',
      title: 'Learn More',
      target: '_self',
      route: {
        path: '/learn-more',
        startItem: {
          id: '0',
          path: '/'
        }
      },
      linkType: 'Content'
    }],
    image: [{
      id: '200',
      name: 'Team collaboration',
      mediaType: 'Image',
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop',
      properties: {}
    }]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the CTA block without an image — the text content expands to fill the full width.'
      }
    }
  },
  args: {
    heading: 'Start Your Journey Today',
    text: {
      markup: '<p>We offer comprehensive solutions tailored to your needs. Our team of experts is ready to help you succeed.</p>',
      blocks: []
    },
    actions: [{
      url: '/contact',
      title: 'Contact Us',
      target: '_self',
      route: {
        path: '/contact',
        startItem: {
          id: '0',
          path: '/'
        }
      },
      linkType: 'Content'
    }]
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Minimal variant with only a heading — demonstrates that all other fields (text, actions, image) are optional and the block renders cleanly with just the heading present.'
      }
    }
  },
  args: {
    heading: "Let's Build Something Great Together"
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithoutImage`,`HeadingOnly`]}))();export{u as Default,f as HeadingOnly,d as WithoutImage,p as __namedExportsOrder,l as default};