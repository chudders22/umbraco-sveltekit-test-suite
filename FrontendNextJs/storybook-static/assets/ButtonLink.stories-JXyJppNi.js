import{n as e}from"./chunk-BEldbCjX.js";import{n as t,t as n}from"./ButtonLink-DaUGW-NC.js";var r,i,a,o,s,c,l;e((()=>{t(),r={title:`Components/ButtonLink`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:"An `<a>` element styled identically to `Button`. Use `ButtonLink` for navigation — internal routes or external URLs — where a real anchor tag is semantically correct. Shares the same four visual variants (`primary`, `secondary`, `outline`, `ghost`) and three sizes (`sm`, `md`, `lg`) as `Button`. Has an optional `showArrow` prop that appends an animated arrow (→) that slides right on hover. For non-navigating actions (e.g. form submit), use `Button` instead."}}},argTypes:{variant:{control:{type:`select`},options:[`primary`,`secondary`,`outline`,`ghost`],description:`Visual style of the link button.`},size:{control:{type:`select`},options:[`sm`,`md`,`lg`],description:`Size of the link button — affects padding and font size.`},href:{control:`text`,description:`The URL the link navigates to.`},target:{control:`text`,description:"Link target attribute, e.g. `_blank` for a new tab. Defaults to `_self`."},label:{control:`text`,description:`Visible link text.`},showArrow:{control:`boolean`,description:`When true, appends an animated → arrow that slides right on hover.`}}},i={args:{variant:`primary`,size:`md`,label:`Primary Link`,href:`#`}},a={args:{variant:`secondary`,size:`md`,label:`Secondary Link`,href:`#`}},o={args:{variant:`outline`,size:`md`,label:`Outline Link`,href:`#`}},s={args:{variant:`ghost`,size:`md`,label:`Ghost Link`,href:`#`}},c={parameters:{docs:{description:{story:"Demonstrates the `showArrow` prop — an animated → arrow is appended to the label and slides right on hover, useful for primary CTAs that imply forward navigation."}}},args:{variant:`primary`,size:`md`,label:`Learn More`,href:`#`,showArrow:!0}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Primary Link',
    href: '#'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md',
    label: 'Secondary Link',
    href: '#'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'md',
    label: 'Outline Link',
    href: '#'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    size: 'md',
    label: 'Ghost Link',
    href: '#'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the \`showArrow\` prop — an animated → arrow is appended to the label and slides right on hover, useful for primary CTAs that imply forward navigation.'
      }
    }
  },
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Learn More',
    href: '#',
    showArrow: true
  }
}`,...c.parameters?.docs?.source}}},l=[`Primary`,`Secondary`,`Outline`,`Ghost`,`WithArrow`]}))();export{s as Ghost,o as Outline,i as Primary,a as Secondary,c as WithArrow,l as __namedExportsOrder,r as default};