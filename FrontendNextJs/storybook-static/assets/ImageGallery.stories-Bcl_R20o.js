import{n as e}from"./chunk-BEldbCjX.js";import{a as t}from"./iframe-CaRgH72A.js";import{n,t as r}from"./umbracoApi-CjrG0CRC.js";function i({images:e=[]}){return(0,a.jsx)(`div`,{className:`grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3`,children:e.map((e,t)=>(0,a.jsx)(`div`,{className:`group aspect-video overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200 transition-all duration-300 hover:ring-zinc-300 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:ring-zinc-700`,children:(0,a.jsx)(`img`,{src:n(e.url),alt:e.name,className:`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105`})},t))})}var a,o=e((()=>{a=t(),r(),i.__docgenInfo={description:``,methods:[],displayName:`ImageGallery`,props:{images:{required:!1,tsType:{name:`Array`,elements:[{name:`components['schemas']['IApiMediaWithCropsModel']`,raw:`components['schemas']['IApiMediaWithCropsModel']`}],raw:`components['schemas']['IApiMediaWithCropsModel'][]`},description:``,defaultValue:{value:`[]`,computed:!1}}}}})),s,c,l,u,d;e((()=>{o(),s={title:`Blocks/ImageGallery`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"A responsive image grid. Accepts an `images` array of Umbraco `IApiMediaWithCropsModel` objects. Images are arranged in a 1→2→3 column CSS grid (responsive breakpoints) with aspect-video cells, rounded corners, and a subtle zoom-on-hover effect. The component currently renders images in a static grid — a lightbox interaction is not yet implemented. Suitable for blog post galleries and portfolio image sets."}}}},c=(e,t,n)=>({id:e,url:`https://placehold.co/600x400/${t}/ffffff`,name:n,mediaType:`Image`,properties:{},createDate:``,updateDate:``,path:``}),l={args:{images:[{id:`1`,url:`https://placehold.co/1200x675`,name:`Full-width feature image`,mediaType:`Image`,properties:{},createDate:``,updateDate:``,path:``}]}},u={args:{images:[c(`1`,`374151`,`Placeholder 1`),c(`2`,`ea580c`,`Placeholder 2`),c(`3`,`1d4ed8`,`Placeholder 3`)]}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    images: [{
      id: '1',
      url: 'https://placehold.co/1200x675',
      name: 'Full-width feature image',
      mediaType: 'Image',
      properties: {},
      createDate: '',
      updateDate: '',
      path: ''
    } as any]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    images: [makeImage('1', '374151', 'Placeholder 1'), makeImage('2', 'ea580c', 'Placeholder 2'), makeImage('3', '1d4ed8', 'Placeholder 3')]
  }
}`,...u.parameters?.docs?.source}}},d=[`SingleImage`,`Default`]}))();export{u as Default,l as SingleImage,d as __namedExportsOrder,s as default};