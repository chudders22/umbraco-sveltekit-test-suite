import{n as e}from"./chunk-BEldbCjX.js";import{n as t,t as n}from"./NavigationToggle-pXPYnbP4.js";var r,i,a,o;e((()=>{t(),r={title:`Components/Header/NavigationToggle`,component:n,tags:[`autodocs`,`snapshot`],parameters:{docs:{description:{component:"The toggle button for a `NavigationArea` dropdown. Renders the group title as a clickable button with a chevron icon that rotates 180° when the menu is open. Sets `aria-expanded` and `aria-haspopup` for accessibility. Props: `isOpen` (boolean — controls chevron direction and aria state), `title` (the label text), and `onClick` (callback invoked on click)."}}}},i={args:{isOpen:!1,title:`Menu Item`,onClick:()=>console.log(`Toggled!`)}},a={parameters:{docs:{description:{story:"Shows the toggle in its open/active state — the chevron is rotated 180° and `aria-expanded` is `true`."}}},args:{isOpen:!0,title:`Active Menu`,onClick:()=>console.log(`Toggled!`)}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    title: 'Menu Item',
    onClick: () => console.log('Toggled!')
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the toggle in its open/active state — the chevron is rotated 180° and \`aria-expanded\` is \`true\`.'
      }
    }
  },
  args: {
    isOpen: true,
    title: 'Active Menu',
    onClick: () => console.log('Toggled!')
  }
}`,...a.parameters?.docs?.source}}},o=[`ClosedTextMenu`,`OpenTextMenu`]}))();export{i as ClosedTextMenu,a as OpenTextMenu,o as __namedExportsOrder,r as default};