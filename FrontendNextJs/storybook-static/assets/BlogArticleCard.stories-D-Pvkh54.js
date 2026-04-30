import{n as e}from"./chunk-BEldbCjX.js";import{n as t,t as n}from"./BlogArticleCard-DQ3878GC.js";var r,i,a,o,s;e((()=>{t(),r={title:`Blocks/BlogListing/BlogArticleCard`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:'An individual blog post card used within the `BlogListing` grid. Displays the post\'s creation date, title (as a full-card clickable link), a line-clamped excerpt from `metaDescription`, and an animated "Read article" CTA. Accepts a full `BlogArticleContentResponseModel` as its `post` prop. Supports dark mode. The open-graph image is not displayed on this card — only text metadata is shown.'}}}},i={name:`Umbraco Update: Product and strategy highlights from the Winter Keynote`,createDate:`2026-02-12T09:00:00Z`,route:{path:`/blog/umbraco-update`},properties:{metaDescription:`This year’s Umbraco Winter Keynote has just dropped, and in this post we summarise the main points of interest.`,openGraphImage:[{url:`https://placehold.co/800x450/312e81/ffffff?text=Thumbnail`}]}},a={args:{post:i}},o={parameters:{docs:{description:{story:"Shows the card when `openGraphImage` is null — the card layout is unaffected since the image is not rendered on the card itself."}}},args:{post:{...i,properties:{...i.properties,openGraphImage:null}}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    post: mockPost
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the card when \`openGraphImage\` is null — the card layout is unaffected since the image is not rendered on the card itself.'
      }
    }
  },
  args: {
    post: {
      ...mockPost,
      properties: {
        ...mockPost.properties,
        openGraphImage: null
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s=[`Default`,`NoImage`]}))();export{a as Default,o as NoImage,s as __namedExportsOrder,r as default};