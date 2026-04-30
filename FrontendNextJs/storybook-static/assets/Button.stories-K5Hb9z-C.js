import{n as e}from"./chunk-BEldbCjX.js";import{n as t,t as n}from"./Button-RAzjmAbI.js";var r,i,a,o,s,c,l;e((()=>{t(),r={title:`Components/Button`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:"A reusable native `<button>` element with four visual variants and three sizes. Use `Button` for actions that do not navigate — form submissions, toggles, modal triggers, and other in-page interactions. For navigation links styled as buttons, use `ButtonLink` instead. Supports a `loading` state that shows a spinner and disables interaction while an async operation is in progress, and a `disabled` state. All variants respond to dark mode."}}},argTypes:{variant:{control:{type:`select`},options:[`primary`,`secondary`,`outline`,`ghost`],description:`Visual style of the button.`},size:{control:{type:`select`},options:[`sm`,`md`,`lg`],description:`Size of the button — affects padding and font size.`},disabled:{control:`boolean`,description:`Disables the button and prevents click events.`},loading:{control:`boolean`,description:`Shows a spinner and disables interaction while an async action is in progress.`},label:{control:`text`,description:`Button label text.`}}},i={args:{variant:`primary`,size:`md`,label:`Primary Button`}},a={args:{variant:`secondary`,size:`md`,label:`Secondary Button`}},o={args:{variant:`outline`,size:`md`,label:`Outline Button`}},s={args:{variant:`ghost`,size:`md`,label:`Ghost Button`}},c={parameters:{docs:{description:{story:`Shows the loading spinner state — used while an async operation (e.g. form submission) is in progress. The button is automatically disabled while loading.`}}},args:{variant:`primary`,size:`md`,loading:!0,label:`Loading...`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Primary Button'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md',
    label: 'Secondary Button'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'md',
    label: 'Outline Button'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    size: 'md',
    label: 'Ghost Button'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the loading spinner state — used while an async operation (e.g. form submission) is in progress. The button is automatically disabled while loading.'
      }
    }
  },
  args: {
    variant: 'primary',
    size: 'md',
    loading: true,
    label: 'Loading...'
  }
}`,...c.parameters?.docs?.source}}},l=[`Primary`,`Secondary`,`Outline`,`Ghost`,`Loading`]}))();export{s as Ghost,c as Loading,o as Outline,i as Primary,a as Secondary,l as __namedExportsOrder,r as default};