import{n as e}from"./chunk-BEldbCjX.js";import{a as t}from"./iframe-CaRgH72A.js";import{n,t as r}from"./ButtonLink-DaUGW-NC.js";import{n as i,t as a}from"./umbracoApi-CjrG0CRC.js";function o({heading:e,subTitle:t,content:n,image:a,imagePosition:o,link:c}){let l=a?.[0],u=c?.[0],d=!!(e||t||n?.markup),f=!!l?.url,p=!d&&!f,m=o===!0;return(0,s.jsx)(`section`,{className:`bg-white py-12 dark:bg-zinc-950 md:py-20`,children:(0,s.jsx)(`div`,{className:`container mx-auto px-4`,children:p?(0,s.jsx)(`div`,{className:`rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/30`,children:(0,s.jsx)(`p`,{className:`text-sm text-zinc-500 dark:text-zinc-400`,children:`No content available.`})}):(0,s.jsxs)(`div`,{className:`grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24`,children:[(0,s.jsxs)(`div`,{className:m?`order-last`:``,children:[(0,s.jsx)(`div`,{className:`mb-6 h-0.5 w-16 bg-red-600`,"aria-hidden":`true`}),e&&(0,s.jsx)(`h2`,{className:`font-display mb-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl`,children:e}),t&&(0,s.jsx)(`p`,{className:`mb-4 text-lg text-zinc-500 dark:text-zinc-400`,children:t}),n?.markup&&(0,s.jsx)(`div`,{className:`prose prose-zinc mb-6 dark:prose-invert prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-red-400`,dangerouslySetInnerHTML:{__html:n.markup}}),u?.url&&(0,s.jsx)(r,{href:u.url,target:u.target??`_self`,variant:`primary`,label:u.title??`Learn more`,showArrow:!0})]}),(0,s.jsx)(`div`,{className:m?`order-first`:``,children:(0,s.jsx)(`div`,{className:`relative aspect-[4/3] overflow-hidden rounded-2xl`,children:f?(0,s.jsx)(`img`,{src:i(l.url),alt:l.name,className:`h-full w-full object-cover`}):(0,s.jsx)(`div`,{className:`h-full w-full bg-zinc-100 dark:bg-zinc-800`,"aria-hidden":`true`})})})]})})})}var s,c=e((()=>{s=t(),n(),a(),o.__docgenInfo={description:``,methods:[],displayName:`TwoColumnBlock`,props:{heading:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},subTitle:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},content:{required:!1,tsType:{name:`union`,raw:`{ markup?: string | null } | null`,elements:[{name:`signature`,type:`object`,raw:`{ markup?: string | null }`,signature:{properties:[{key:`markup`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}}]}},{name:`null`}]},description:``},image:{required:!1,tsType:{name:`union`,raw:`Array<{ url: string; name: string; mediaType: string; id: string; properties: object }> | null`,elements:[{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ url: string; name: string; mediaType: string; id: string; properties: object }`,signature:{properties:[{key:`url`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`mediaType`,value:{name:`string`,required:!0}},{key:`id`,value:{name:`string`,required:!0}},{key:`properties`,value:{name:`object`,required:!0}}]}}],raw:`Array<{ url: string; name: string; mediaType: string; id: string; properties: object }>`},{name:`null`}]},description:``},imagePosition:{required:!1,tsType:{name:`union`,raw:`boolean | null`,elements:[{name:`boolean`},{name:`null`}]},description:``},link:{required:!1,tsType:{name:`union`,raw:`Array<{\r
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
}>`},{name:`null`}]},description:``}}}})),l,u,d,f,p,m,h,g,_;e((()=>{c(),l={title:`Blocks/TwoColumnBlock`,component:o,tags:[`autodocs`,`snapshot`],parameters:{docs:{description:{component:"A two-column layout with rich text content on one side and an image on the other. Corresponds to the `twoColumnBlock` Umbraco content type. Props: `heading`, `subTitle`, `content` (rich text with `markup` string), `image` (first item used), `imagePosition` (boolean — `true` places the image on the left, `false`/absent places it on the right), and `link` (optional CTA rendered as a primary arrow ButtonLink). When no image is provided a grey placeholder maintains the grid layout. Shows a dashed empty-state when all content props are absent. Supports dark mode."}}}},u=[{id:`img-001`,name:`Team at work`,mediaType:`Image`,url:`https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop`,properties:{}}],d={markup:`<p>We combine deep technical expertise with strategic thinking to deliver digital products that make a real difference. Our cross-functional teams work closely with you from discovery through to launch and beyond.</p>`},f=[{title:`Meet the team`,url:`/about`,target:`_self`,route:{path:`/about`}}],p={args:{heading:`We build products people love to use`,subTitle:`A full-service digital agency with 10+ years of experience.`,content:d,image:u,imagePosition:!1}},m={parameters:{docs:{description:{story:"Sets `imagePosition` to `'left'` (truthy) — the image column is ordered first and the text column is ordered last, placing the image on the left at desktop widths."}}},args:{heading:`Strategy-led, execution-focused`,subTitle:`We start with the why before touching a line of code.`,content:d,image:u,imagePosition:!0}},h={args:{heading:`Our process is built around your goals`,subTitle:`Transparent, collaborative, and relentlessly iterative.`,content:d,image:u,imagePosition:!1,link:f}},g={parameters:{docs:{description:{story:`Shows the block when no image is provided — a grey placeholder fills the image column to maintain the two-column grid structure.`}}},args:{heading:`Trusted by ambitious teams worldwide`,subTitle:`From seed-stage startups to enterprise organisations.`,content:d,image:null,imagePosition:!1,link:f}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'We build products people love to use',
    subTitle: 'A full-service digital agency with 10+ years of experience.',
    content: sampleContent,
    image: sampleImage,
    imagePosition: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Sets \`imagePosition\` to \`'left'\` (truthy) — the image column is ordered first and the text column is ordered last, placing the image on the left at desktop widths."
      }
    }
  },
  args: {
    heading: 'Strategy-led, execution-focused',
    subTitle: 'We start with the why before touching a line of code.',
    content: sampleContent,
    image: sampleImage,
    imagePosition: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Our process is built around your goals',
    subTitle: 'Transparent, collaborative, and relentlessly iterative.',
    content: sampleContent,
    image: sampleImage,
    imagePosition: false,
    link: sampleLink
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the block when no image is provided — a grey placeholder fills the image column to maintain the two-column grid structure.'
      }
    }
  },
  args: {
    heading: 'Trusted by ambitious teams worldwide',
    subTitle: 'From seed-stage startups to enterprise organisations.',
    content: sampleContent,
    image: null,
    imagePosition: false,
    link: sampleLink
  }
}`,...g.parameters?.docs?.source}}},_=[`ImageRight`,`ImageLeft`,`WithLink`,`NoImage`]}))();export{m as ImageLeft,p as ImageRight,g as NoImage,h as WithLink,_ as __namedExportsOrder,l as default};