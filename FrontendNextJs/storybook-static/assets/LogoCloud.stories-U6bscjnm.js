import{n as e}from"./chunk-BEldbCjX.js";import{n as t,t as n}from"./LogoCloud-B0d8HxkR.js";function r(e,t){return{content:{contentType:`logoBlock`,properties:{logoName:e,logo:[{id:t,name:e,mediaType:`Image`,url:`https://placehold.co/160x60/18181b/ffffff?text=${encodeURIComponent(e)}`,properties:{}}]}}}}var i,a,o,s,c,l,u,d,f;e((()=>{t(),i={items:[r(`Acme Corp`,`acme`),r(`Globex`,`globex`),r(`Initech`,`initech`)]},a={items:[r(`Acme Corp`,`acme`),r(`Globex`,`globex`),r(`Initech`,`initech`),r(`Umbrella`,`umbrella`),r(`Soylent Co`,`soylent`),r(`Cyberdyne`,`cyberdyne`)]},o={items:[r(`Acme Corp`,`acme`),r(`Globex`,`globex`),r(`Initech`,`initech`),r(`Umbrella`,`umbrella`),r(`Soylent Co`,`soylent`),r(`Cyberdyne`,`cyberdyne`),r(`Weyland`,`weyland`),r(`Tyrell Corp`,`tyrell`),r(`Oscorp`,`oscorp`),r(`Massive Dyn`,`massive`),r(`Stark Ind`,`stark`),r(`Wayne Ent`,`wayne`)]},s={title:`Blocks/LogoCloud`,component:n,tags:[`autodocs`,`snapshot`],parameters:{docs:{description:{component:"Displays a horizontal grid of client or partner logos. Corresponds to the `logoCloud` Umbraco content type. Accepts a `logos` BlockList where each item is a `logoBlock` with a `logoName` and `logo` image. In standalone mode (default) logos are centred in a full-width section with a border; in embedded mode (`standalone={false}`) they render in a container-query grid without a section wrapper (used by the Footer). All logos are rendered grayscale with reduced opacity and invert in dark mode. Shows a dashed empty-state placeholder when no logos are present."}}}},c={args:{logos:a}},l={args:{logos:i}},u={parameters:{docs:{description:{story:`Shows the layout with 12 logos — verifies that the flex-wrap grid handles large numbers of logos without breaking the horizontal rhythm.`}}},args:{logos:o}},d={parameters:{docs:{description:{story:`Shows the empty-state placeholder when no logo items have been added in the Umbraco backoffice.`}}},args:{logos:{items:[]}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    logos: sixLogos
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    logos: threeLogos
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the layout with 12 logos — verifies that the flex-wrap grid handles large numbers of logos without breaking the horizontal rhythm.'
      }
    }
  },
  args: {
    logos: twelveLogos
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the empty-state placeholder when no logo items have been added in the Umbraco backoffice.'
      }
    }
  },
  args: {
    logos: {
      items: []
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`FewLogos`,`ManyLogos`,`Empty`]}))();export{c as Default,d as Empty,l as FewLogos,u as ManyLogos,f as __namedExportsOrder,s as default};