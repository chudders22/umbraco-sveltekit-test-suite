import{n as e}from"./chunk-BEldbCjX.js";import{a as t}from"./iframe-CaRgH72A.js";import{n,t as r}from"./umbracoApi-CjrG0CRC.js";import{n as i,t as a}from"./Logo-BtQLExji.js";import{n as o,t as s}from"./LogoCloud-B0d8HxkR.js";function c(e){return/linkedin/i.test(e)?`<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>`:/github/i.test(e)?`<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>`:/x\.com|twitter/i.test(e)?`<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>`:`<path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>`}function l(e){return/linkedin|github/i.test(e)}function u({addressHeading:e,address:t,addressLinks:r,socialMediaAccounts:i,logos:o,copyright:u,copyrightLinks:f}){let p=o?.content?.properties,m=((i?.content?.properties)?.accounts?.items??[]).map(e=>e.content?.properties),h=new Date().getFullYear(),g=u??`© ${h} 3Chillies. All rights reserved.`;return(0,d.jsx)(`footer`,{className:`border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900`,children:(0,d.jsxs)(`div`,{className:`container mx-auto px-4 py-16 sm:px-6 lg:px-8`,children:[(0,d.jsxs)(`div`,{className:`grid grid-cols-1 gap-12 md:grid-cols-4`,children:[(0,d.jsxs)(`div`,{className:`md:col-span-1`,children:[(0,d.jsx)(`div`,{className:`mb-4 h-0.5 w-8 bg-red-600`,"aria-hidden":`true`}),(0,d.jsx)(`h3`,{className:`mb-5 font-display text-lg font-bold tracking-tight text-zinc-900 dark:text-white`,children:e||`Contact`}),t&&(0,d.jsx)(`p`,{className:`mb-4 whitespace-pre-line text-sm leading-relaxed text-zinc-500 dark:text-zinc-400`,children:t}),r&&r.length>0&&(0,d.jsx)(`ul`,{className:`space-y-2`,children:r.map((e,t)=>(0,d.jsx)(`li`,{children:(0,d.jsx)(`a`,{href:e.url||e.route?.path||`#`,target:e.target??void 0,className:`text-sm font-medium text-red-600 underline-offset-4 transition-all hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-1 focus-visible:outline-none dark:text-red-400 dark:hover:text-red-300`,children:e.title})},t))})]}),(0,d.jsxs)(`div`,{className:`md:col-span-1`,children:[(0,d.jsx)(`div`,{className:`mb-4 h-0.5 w-8 bg-red-600`,"aria-hidden":`true`}),(0,d.jsx)(`h3`,{className:`mb-5 font-display text-lg font-bold tracking-tight text-zinc-900 dark:text-white`,children:`Follow Us`}),m.length>0?(0,d.jsx)(`ul`,{className:`flex flex-wrap gap-4`,children:m.map((e,t)=>{let r=e.link?.[0],i=e.logo?.[0]?.url,a=r?.url||r?.route?.path||`#`;return r?(0,d.jsx)(`li`,{children:(0,d.jsx)(`a`,{href:a,target:r.target??`_blank`,rel:`noopener noreferrer`,"aria-label":r.title??`Social media link`,className:`inline-flex items-center justify-center focus-visible:rounded focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-1 focus-visible:outline-none`,children:i?(0,d.jsx)(`img`,{src:n(i),alt:``,"aria-hidden":`true`,className:`h-12 w-12 object-contain grayscale opacity-50 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90 dark:invert dark:opacity-80 dark:hover:opacity-100`}):(0,d.jsx)(`svg`,{className:`h-12 w-12 shrink-0 grayscale opacity-50 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90 dark:opacity-80 dark:hover:opacity-100`,viewBox:`0 0 24 24`,"aria-hidden":`true`,...l(a)?{fill:`currentColor`}:{fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`},children:(0,d.jsx)(`g`,{dangerouslySetInnerHTML:{__html:c(a)}})})})},t):null})}):(0,d.jsx)(`p`,{className:`text-sm text-zinc-400 dark:text-zinc-600`,children:`No social accounts added yet.`})]}),(0,d.jsxs)(`div`,{className:`md:col-span-2`,children:[(0,d.jsx)(`div`,{className:`mb-4 h-0.5 w-8 bg-red-600`,"aria-hidden":`true`}),(0,d.jsx)(`h3`,{className:`mb-5 font-display text-lg font-bold tracking-tight text-zinc-900 dark:text-white`,children:`Our Partners`}),(0,d.jsx)(s,{logos:p?.logos,standalone:!1})]})]}),(0,d.jsxs)(`div`,{className:`mt-12 flex flex-col items-start justify-between gap-6 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center dark:border-zinc-800`,children:[(0,d.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,d.jsx)(`span`,{className:`block h-8 text-zinc-400 dark:text-zinc-600`,children:(0,d.jsx)(a,{})}),(0,d.jsx)(`p`,{className:`text-sm text-zinc-400 dark:text-zinc-600`,children:g})]}),f&&f.length>0&&(0,d.jsx)(`nav`,{"aria-label":`Footer links`,children:(0,d.jsx)(`ul`,{className:`flex flex-wrap gap-x-6 gap-y-2`,children:f.map((e,t)=>(0,d.jsx)(`li`,{children:(0,d.jsx)(`a`,{href:e.url||e.route?.path||`#`,target:e.target??void 0,className:`text-sm text-zinc-400 underline-offset-4 transition-all hover:text-red-600 hover:underline hover:decoration-red-600 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-1 focus-visible:outline-none dark:text-zinc-500 dark:hover:text-red-400 dark:hover:decoration-red-400`,children:e.title})},t))})})]})]})})}var d,f=e((()=>{d=t(),i(),o(),r(),u.__docgenInfo={description:``,methods:[],displayName:`Footer`}}));function p(e){return{content:{properties:{accounts:{items:e.map(({title:e,url:t})=>({content:{properties:{link:[{title:e,url:t,target:`_blank`,linkType:`External`}]}}}))}}}}}var m,h,g,_,v,y,b,x,S;e((()=>{f(),m={title:`Components/Footer`,component:u,tags:[`autodocs`,`snapshot`],parameters:{layout:`fullscreen`,docs:{description:{component:"The global site footer. Rendered in a four-column grid: address/contact column, social media icons column, and a partner logo cloud spanning two columns. The bottom bar contains the site logo, copyright text (defaults to the current year if not supplied), and optional legal/navigation links. Social icons are rendered via inline SVGs with auto-detected platform paths (LinkedIn, GitHub, X/Twitter) or a generic globe fallback. The `logos` prop expects a nested Umbraco block wrapping a `logoCloudBlock`. All fields are optional. Uses fullscreen layout in Storybook."}}}},h=[{title:`Privacy Policy`,url:`/privacy`,linkType:`Content`},{title:`Terms of Service`,url:`/terms`,linkType:`Content`},{title:`Cookie Policy`,url:`/cookies`,linkType:`Content`}],g=p([{title:`Facebook`,url:`https://facebook.com/3chillies`},{title:`Instagram`,url:`https://instagram.com/3chillies`},{title:`X`,url:`https://x.com/3chillies`},{title:`LinkedIn`,url:`https://linkedin.com/company/3chillies`},{title:`GitHub`,url:`https://github.com/3chillies`}]),_={args:{addressHeading:`Get in Touch`,address:`123 Tech Street
Manchester
M1 2AB`,addressLinks:[{title:`+44 161 123 4567`,url:`tel:+441611234567`,linkType:`External`},{title:`hello@3chillies.co.uk`,url:`mailto:hello@3chillies.co.uk`,linkType:`External`}],copyright:`© 2024 3Chillies. All rights reserved.`,copyrightLinks:h,socialMediaAccounts:g}},v={args:{addressHeading:`Get in Touch`,address:`123 Tech Street
Manchester
M1 2AB`,addressLinks:[{title:`hello@3chillies.co.uk`,url:`mailto:hello@3chillies.co.uk`,linkType:`External`}],copyright:`© 2024 3Chillies. All rights reserved.`,copyrightLinks:h,socialMediaAccounts:p([{title:`Facebook`,url:`https://facebook.com/3chillies`},{title:`Instagram`,url:`https://instagram.com/3chillies`},{title:`X`,url:`https://x.com/3chillies`},{title:`LinkedIn`,url:`https://linkedin.com/company/3chillies`},{title:`YouTube`,url:`https://youtube.com/@3chillies`},{title:`GitHub`,url:`https://github.com/3chillies`},{title:`Bluesky`,url:`https://bsky.app/profile/3chillies.bsky.social`}])}},y={parameters:{docs:{description:{story:`Shows the footer with minimal data — only a contact heading, single-line address, and one contact link. Demonstrates that copyright text and legal links are entirely optional.`}}},args:{addressHeading:`Contact`,address:`123 Tech Street
Manchester`,addressLinks:[{title:`hello@3chillies.co.uk`,url:`mailto:hello@3chillies.co.uk`,linkType:`External`}]}},b={parameters:{docs:{description:{story:"Footer without the `logos` prop — the partner logo cloud column renders an empty-state message from the `LogoCloud` component."}}},args:{addressHeading:`Get in Touch`,address:`123 Tech Street
Manchester
M1 2AB`,addressLinks:[{title:`+44 161 123 4567`,url:`tel:+441611234567`,linkType:`External`},{title:`hello@3chillies.co.uk`,url:`mailto:hello@3chillies.co.uk`,linkType:`External`}],copyrightLinks:h,socialMediaAccounts:g}},x={args:{addressHeading:`Get in Touch`,address:`123 Tech Street
Manchester
M1 2AB`,addressLinks:[{title:`+44 161 123 4567`,url:`tel:+441611234567`,linkType:`External`}],copyright:`© 2024 3Chillies Ltd. Registered in England & Wales No. 12345678.`,copyrightLinks:h,socialMediaAccounts:g}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    addressHeading: 'Get in Touch',
    address: '123 Tech Street\\nManchester\\nM1 2AB',
    addressLinks: [{
      title: '+44 161 123 4567',
      url: 'tel:+441611234567',
      linkType: 'External'
    }, {
      title: 'hello@3chillies.co.uk',
      url: 'mailto:hello@3chillies.co.uk',
      linkType: 'External'
    }],
    copyright: '© 2024 3Chillies. All rights reserved.',
    copyrightLinks: mockFooterLinks,
    socialMediaAccounts: mockSocialAccounts
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    addressHeading: 'Get in Touch',
    address: '123 Tech Street\\nManchester\\nM1 2AB',
    addressLinks: [{
      title: 'hello@3chillies.co.uk',
      url: 'mailto:hello@3chillies.co.uk',
      linkType: 'External'
    }],
    copyright: '© 2024 3Chillies. All rights reserved.',
    copyrightLinks: mockFooterLinks,
    socialMediaAccounts: makeSocialAccounts([{
      title: 'Facebook',
      url: 'https://facebook.com/3chillies'
    }, {
      title: 'Instagram',
      url: 'https://instagram.com/3chillies'
    }, {
      title: 'X',
      url: 'https://x.com/3chillies'
    }, {
      title: 'LinkedIn',
      url: 'https://linkedin.com/company/3chillies'
    }, {
      title: 'YouTube',
      url: 'https://youtube.com/@3chillies'
    }, {
      title: 'GitHub',
      url: 'https://github.com/3chillies'
    }, {
      title: 'Bluesky',
      url: 'https://bsky.app/profile/3chillies.bsky.social'
    }])
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the footer with minimal data — only a contact heading, single-line address, and one contact link. Demonstrates that copyright text and legal links are entirely optional.'
      }
    }
  },
  args: {
    addressHeading: 'Contact',
    address: '123 Tech Street\\nManchester',
    addressLinks: [{
      title: 'hello@3chillies.co.uk',
      url: 'mailto:hello@3chillies.co.uk',
      linkType: 'External'
    }]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Footer without the \`logos\` prop — the partner logo cloud column renders an empty-state message from the \`LogoCloud\` component.'
      }
    }
  },
  args: {
    addressHeading: 'Get in Touch',
    address: '123 Tech Street\\nManchester\\nM1 2AB',
    addressLinks: [{
      title: '+44 161 123 4567',
      url: 'tel:+441611234567',
      linkType: 'External'
    }, {
      title: 'hello@3chillies.co.uk',
      url: 'mailto:hello@3chillies.co.uk',
      linkType: 'External'
    }],
    copyrightLinks: mockFooterLinks,
    socialMediaAccounts: mockSocialAccounts
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    addressHeading: 'Get in Touch',
    address: '123 Tech Street\\nManchester\\nM1 2AB',
    addressLinks: [{
      title: '+44 161 123 4567',
      url: 'tel:+441611234567',
      linkType: 'External'
    }],
    copyright: '© 2024 3Chillies Ltd. Registered in England & Wales No. 12345678.',
    copyrightLinks: mockFooterLinks,
    socialMediaAccounts: mockSocialAccounts
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithSocialLinks`,`MinimalContent`,`NoLogos`,`CustomCopyright`]}))();export{x as CustomCopyright,_ as Default,y as MinimalContent,b as NoLogos,v as WithSocialLinks,S as __namedExportsOrder,m as default};