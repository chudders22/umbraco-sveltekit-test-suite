import{n as e}from"./chunk-BEldbCjX.js";import{a as t}from"./iframe-CaRgH72A.js";function n({headingText:e}){return e?(0,r.jsx)(`h2`,{className:`font-display text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl lg:text-5xl dark:text-zinc-50`,children:e}):null}var r,i=e((()=>{r=t(),n.__docgenInfo={description:``,methods:[],displayName:`HeadingBlock`}})),a,o,s,c;e((()=>{i(),a={title:`Blocks/HeadingBlock`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:"A minimal section heading block. Corresponds to the `heading` Umbraco content type. Renders a single styled `<h2>` tag using the display font at large sizes (3xl → 4xl → 5xl). The `headingText` prop is required — if omitted the component renders nothing. Use this block to break up page content with section titles. For headings with body copy, consider `TwoColumnBlock` or other content blocks instead."}}}},o={args:{headingText:`This Is a Heading`}},s={parameters:{docs:{description:{story:`Shows how the heading wraps at longer lengths — useful for verifying line-height and tracking at large display sizes.`}}},args:{headingText:`A Longer Heading That Spans Multiple Words Across The Page`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    headingText: 'This Is a Heading'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows how the heading wraps at longer lengths — useful for verifying line-height and tracking at large display sizes.'
      }
    }
  },
  args: {
    headingText: 'A Longer Heading That Spans Multiple Words Across The Page'
  }
}`,...s.parameters?.docs?.source}}},c=[`Default`,`LongHeading`]}))();export{o as Default,s as LongHeading,c as __namedExportsOrder,a as default};