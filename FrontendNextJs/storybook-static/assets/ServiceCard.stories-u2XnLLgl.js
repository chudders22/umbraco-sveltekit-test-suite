import{n as e}from"./chunk-BEldbCjX.js";import{n as t,t as n}from"./ServiceCard-TQdmeutU.js";var r,i,a,o,s;e((()=>{t(),r={title:`Blocks/ServicesBlock/ServiceCard`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:'An individual service card used within the `ServicesBlock` grid. Renders a left-border accent card with a `title`, optional `description`, and an optional `link`. When a link is present, the entire card is made clickable via a full-inset invisible anchor (with a visible "Learn more" arrow CTA). The left border and title colour transition to brand red on hover/focus. `image` is accepted from Umbraco\'s `ServiceBlockItemPropertiesModel` schema but is not currently rendered by this card. Supports dark mode.'}}}},i={args:{title:`Executive Search`,description:`We identify and secure senior leaders who match your strategy, culture, and growth stage.`,image:[{id:`1`,name:`Executive Search`,mediaType:`Image`,url:`https://placehold.co/900x540/0f172a/ffffff?text=Executive+Search`,properties:{}}],link:[{title:`Explore service`,url:`/services/executive-search`,target:`_self`,linkType:`External`}]}},a={parameters:{docs:{description:{story:"Card without an image — since `ServiceCard` does not render an image, this is visually identical to the default. Confirms that the image prop being absent has no effect on rendering."}}},args:{title:`Leadership Advisory`,description:`Support for succession planning, role design, and long-term leadership capability.`,link:[{title:`See advisory offer`,url:`/services/leadership-advisory`,target:`_self`,linkType:`External`}]}},o={parameters:{docs:{description:{story:'Card without a `link` prop — the card is not clickable, the full-inset anchor and "Learn more" arrow are omitted, and the hover state has no effect.'}}},args:{title:`Interim Leadership`,description:`Rapid access to experienced interim leaders for high-priority transitions.`,image:[{id:`2`,name:`Interim Leadership`,mediaType:`Image`,url:`https://placehold.co/900x540/1e293b/ffffff?text=Interim+Leadership`,properties:{}}]}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Executive Search',
    description: 'We identify and secure senior leaders who match your strategy, culture, and growth stage.',
    image: [{
      id: '1',
      name: 'Executive Search',
      mediaType: 'Image',
      url: 'https://placehold.co/900x540/0f172a/ffffff?text=Executive+Search',
      properties: {}
    }],
    link: [{
      title: 'Explore service',
      url: '/services/executive-search',
      target: '_self',
      linkType: 'External'
    }]
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Card without an image — since \`ServiceCard\` does not render an image, this is visually identical to the default. Confirms that the image prop being absent has no effect on rendering.'
      }
    }
  },
  args: {
    title: 'Leadership Advisory',
    description: 'Support for succession planning, role design, and long-term leadership capability.',
    link: [{
      title: 'See advisory offer',
      url: '/services/leadership-advisory',
      target: '_self',
      linkType: 'External'
    }]
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Card without a \`link\` prop — the card is not clickable, the full-inset anchor and "Learn more" arrow are omitted, and the hover state has no effect.'
      }
    }
  },
  args: {
    title: 'Interim Leadership',
    description: 'Rapid access to experienced interim leaders for high-priority transitions.',
    image: [{
      id: '2',
      name: 'Interim Leadership',
      mediaType: 'Image',
      url: 'https://placehold.co/900x540/1e293b/ffffff?text=Interim+Leadership',
      properties: {}
    }]
  }
}`,...o.parameters?.docs?.source}}},s=[`Default`,`NoImage`,`NoLink`]}))();export{i as Default,a as NoImage,o as NoLink,s as __namedExportsOrder,r as default};