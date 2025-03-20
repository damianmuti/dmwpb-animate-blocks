(()=>{"use strict";var e,t={87:()=>{const e=window.wp.hooks,t=(window.wp.i18n,window.wp.compose),a=window.wp.components,i=window.wp.blockEditor,n=window.React;var o,l;function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)({}).hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},r.apply(null,arguments)}var s=function(e){return n.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",id:"icon_svg__Layer_1",x:0,y:0,viewBox:"0 0 24 24"},e),o||(o=n.createElement("style",null,".icon_svg__st2{fill:#2b374f}")),n.createElement("path",{d:"m18.1 14.8-3.6-.1-2.1 3c-.3.4-.7.4-1.1.2-.1-.1-.2-.2-.3-.4L9.9 14l-3.5-1.1c-.4-.1-.6-.6-.5-1 .1-.2.2-.3.3-.4l3-2.1-.1-3.6c0-.5.3-.8.7-.8.2 0 .4 0 .5.1l2.9 2.2 3.5-1.2c.4-.1.9.1 1 .5.1.2.1.3 0 .5l-1.2 3.5 2.2 2.9c.3.3.2.8-.2 1.1 0 .2-.2.2-.4.2",style:{fill:"#ffb849"}}),n.createElement("path",{d:"m18.1 14.8-3.6-.1-2.1 3c-.3.4-.7.4-1.1.2-.1-.1-.2-.2-.3-.4L9.9 14l7.6-7.6c.2.2.3.5.2.8l-1.2 3.5 2.2 2.9c.3.3.2.8-.2 1.1 0 .1-.2.1-.4.1",style:{opacity:.26}}),l||(l=n.createElement("path",{d:"M4.7 17.1c-.1 0-.2 0-.3-.1-.2-.2-.2-.5 0-.6l3-3c.2-.2.5-.2.6 0 .2.2.2.5 0 .6l-3 3c-.1.1-.2.1-.3.1M7 17.7c-.1 0-.2 0-.3-.1-.2-.2-.2-.5 0-.6l2.7-2.7c.2-.2.5-.2.6 0s.2.5 0 .6l-2.7 2.7c-.1 0-.2.1-.3.1M9.3 18.3c-.1 0-.2 0-.3-.1-.2-.2-.2-.5 0-.6l1.3-1.3c.2-.2.5-.2.6 0s.2.5 0 .6l-1.3 1.3c-.1.1-.2.1-.3.1M8.1 19.5c-.1 0-.2 0-.3-.1-.2-.2-.2-.5 0-.6l.2-.3c.2-.2.5-.2.6 0s.2.5 0 .6l-.2.2c0 .1-.2.2-.3.2",className:"icon_svg__st2"})),n.createElement("path",{d:"m18.1 14.8-3.6-.1-2.1 3c-.3.4-.7.4-1.1.2-.1-.1-.2-.2-.3-.4L9.9 14l-3.5-1.1c-.4-.1-.6-.6-.5-1 .1-.2.2-.3.3-.4l3-2.1-.1-3.6c0-.5.3-.8.7-.8.2 0 .4 0 .5.1l2.9 2.2 3.5-1.2c.4-.1.9.1 1 .5.1.2.1.3 0 .5l-1.2 3.5 2.2 2.9c.3.3.2.8-.2 1.1 0 .2-.2.2-.4.2z",style:{fill:"none",stroke:"#2b374f",strokeWidth:1.2,strokeMiterlimit:10}}))};const m=window.wp.element,d=(0,m.forwardRef)((function({icon:e,size:t=24,...a},i){return(0,m.cloneElement)(e,{width:t,height:t,...a,ref:i})})),c=window.wp.primitives,p=window.ReactJSXRuntime,b=(0,p.jsx)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,p.jsx)(c.Path,{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"})}),_=["core/paragraph","core/image","core/group","core/columns","core/column","core/heading","core/buttons","core/button"],u={dmwpb__hasAnimation:{type:"boolean",default:!1},dmwpb__animationDirection:{type:"boolean",default:!1},dmwpb__scrollDirection:{type:"string",default:"default"},dmwpb__animationType:{type:"string",default:"fade-in"},dmwpb__animationDelay:{type:"number",default:0},dmwpb__animationDuration:{type:"number",default:500},dmwpb__animationBlur:{type:"number",default:0}};let w=1;const h=(0,t.createHigherOrderComponent)((e=>t=>{if(-1===_.indexOf(t.name))return(0,p.jsx)(e,{...t});const n=e=>{w=e};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(e,{...t}),(0,p.jsx)(i.InspectorControls,{children:(0,p.jsxs)(a.PanelBody,{title:"Animation Settings",icon:s,initialOpen:!!t.attributes.dmwpb__hasAnimation,className:"dmwpb__panel",children:[(0,p.jsx)(a.PanelRow,{className:"animations__row--set",children:(0,p.jsx)(a.ToggleControl,{__nextHasNoMarginBottom:!0,label:"Enable animation on this block?",help:"Set to true to select the animation properties.",checked:t.attributes.dmwpb__hasAnimation,onChange:e=>{t.setAttributes({dmwpb__hasAnimation:Boolean(e)}),n(1),e||t.setAttributes({dmwpb__animationType:u.dmwpb__animationType.default,dmwpb__animationDirection:u.dmwpb__animationDirection.default,dmwpb__animationDelay:u.dmwpb__animationDelay.default,dmwpb__animationDuration:u.dmwpb__animationDuration.default,dmwpb__animationBlur:u.dmwpb__animationBlur.default,dmwpb__scrollDirection:u.dmwpb__scrollDirection.default})}})}),t.attributes.dmwpb__hasAnimation&&(0,p.jsx)(a.PanelRow,{className:"animations__row--set margin--large",children:(0,p.jsx)(a.ToggleControl,{__nextHasNoMarginBottom:!0,label:"Reverse animation?",help:"Set to true to reverse the animation when scrolling back to top of the page.",checked:t.attributes.dmwpb__animationDirection,onChange:e=>{t.setAttributes({dmwpb__animationDirection:Boolean(e)}),n(w+1)}})}),t.attributes.dmwpb__hasAnimation&&(0,p.jsx)(a.PanelRow,{className:"animations__row margin--large",children:(0,p.jsx)(a.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:"Animation type",labelPosition:"left",value:t.attributes.dmwpb__animationType,options:[{label:"Default (Fade-in)",value:"fade-in"},{label:"Fade in top",value:"fade-in-top"},{label:"Fade in right",value:"fade-in-right"},{label:"Fade in bottom",value:"fade-in-bottom"},{label:"Fade in left",value:"fade-in-left"},{label:"Slide in top",value:"slide-in-top"},{label:"Slide in right",value:"slide-in-right"},{label:"Slide in bottom",value:"slide-in-bottom"},{label:"Slide in left",value:"slide-in-left"},{label:"Scale up",value:"scale-up"},{label:"Scale down",value:"scale-down"}],onChange:e=>{t.setAttributes({dmwpb__animationType:String(e)}),n(1)}})}),t.attributes.dmwpb__hasAnimation&&(0,p.jsx)(a.PanelRow,{className:"animations__row",children:(0,p.jsx)(a.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,p.jsxs)(p.Fragment,{children:["Scroll direction ",(o=(0,p.jsxs)("div",{children:["If set to ",(0,p.jsx)("strong",{children:"Default"}),", the animation will occur when the block is inside the viewport while scrolling down.",(0,p.jsx)("br",{}),"If set to ",(0,p.jsx)("strong",{children:"Both ways"}),", the animation will play forwards when the block gets inside the block while scrolling down and backwards when the block is inside the viewport while scrolling up."]}),(0,p.jsx)(a.Tooltip,{placement:"top",text:o,className:"dmwpb__tooltip",children:(0,p.jsx)(d,{icon:b,size:18})}))]}),labelPosition:"left",value:t.attributes.dmwpb__scrollDirection,options:[{label:"Default",value:"default"},{label:"Both ways",value:"both"}],onChange:e=>{t.setAttributes({dmwpb__scrollDirection:String(e)})}})}),t.attributes.dmwpb__hasAnimation&&(0,p.jsxs)(a.PanelRow,{className:"animations__row",children:[(0,p.jsx)(a.__experimentalNumberControl,{__next40pxDefaultSize:!0,label:"Delay",labelPosition:"side",step:"100",min:"0",max:"5000",value:t.attributes.dmwpb__animationDelay,onChange:e=>{t.setAttributes({dmwpb__animationDelay:Number(e)}),n(w+1)}}),(0,p.jsx)(a.Tooltip,{placement:"top",text:(0,p.jsxs)("div",{children:["Value expressed in ",(0,p.jsx)("strong",{children:"miliseconds"})]}),className:"dmwpb__tooltip",children:(0,p.jsx)("span",{className:"row__unit",children:"ms"})})]}),t.attributes.dmwpb__hasAnimation&&(0,p.jsxs)(a.PanelRow,{className:"animations__row",children:[(0,p.jsx)(a.__experimentalNumberControl,{__next40pxDefaultSize:!0,label:"Duration",labelPosition:"side",step:"100",min:"0",max:"5000",value:t.attributes.dmwpb__animationDuration,onChange:e=>{t.setAttributes({dmwpb__animationDuration:Number(e)}),n(w+1)}}),(0,p.jsx)(a.Tooltip,{placement:"top",text:(0,p.jsxs)("div",{children:["Value expressed in ",(0,p.jsx)("strong",{children:"miliseconds"})]}),className:"dmwpb__tooltip",children:(0,p.jsx)("span",{className:"row__unit",children:"ms"})})]}),t.attributes.dmwpb__hasAnimation&&(0,p.jsxs)(a.PanelRow,{className:"animations__row",children:[(0,p.jsx)(a.__experimentalNumberControl,{__next40pxDefaultSize:!0,label:"Blur",labelPosition:"side",step:"5",min:"0",max:"50",value:t.attributes.dmwpb__animationBlur,onChange:e=>{t.setAttributes({dmwpb__animationBlur:Number(e)}),n(w+1)}}),(0,p.jsx)(a.Tooltip,{placement:"top",text:(0,p.jsxs)("div",{children:["Value expressed in ",(0,p.jsx)("strong",{children:"pixels"})]}),className:"dmwpb__tooltip",children:(0,p.jsx)("span",{className:"row__unit",children:"px"})})]})]})}),(0,p.jsx)(i.BlockControls,{children:(0,p.jsx)(a.ToolbarGroup,{children:t.attributes.dmwpb__hasAnimation&&(0,p.jsx)(a.ToolbarButton,{icon:s,label:"This element has an animation",className:"dmwpb__toolbar-icon dmwpb__animation-icon",disabled:!0})})})]});var o}));(0,e.addFilter)("editor.BlockEdit","dmwpb-animate-blocks/add-animation-inspector-controls",h);const x=(0,t.createHigherOrderComponent)((e=>t=>{if(!t.attributes.dmwpb__hasAnimation)return(0,p.jsx)(e,{...t});let a=function(e,t){for(var a=[],i=0;i<t;i++)a.push(e);return a.join(", ")}(`${t.attributes.dmwpb__animationType}`,w),i={};return!0===t.isSelected&&(i={...t.wrapperProps,className:"dmwpb__run-animation",style:{"animation-name":`${t.attributes.dmwpb__animationType}, ${a}`,"animation-delay":`${t.attributes.dmwpb__animationDelay}ms`,"animation-duration":`${t.attributes.dmwpb__animationDuration}ms`,...0!==t.attributes.dmwpb__animationBlur?{"--blur":`${t.attributes.dmwpb__animationBlur}px`}:{},...t.attributes.dmwpb__animationDirection?{"animation-direction":"reverse"}:{},...t.attributes.dmwpb__animationDirection?{"animation-fill-mode":"backwards"}:{}}}),(0,p.jsx)(e,{...t,wrapperProps:i})}),"addDataAttribute");(0,e.addFilter)("editor.BlockListBlock","dmwpb-animate-blocks/add-data-attribute",x),(0,e.addFilter)("blocks.registerBlockType","dmwpb-animate-blocks/add-animation-attributes",(function(e,t){return-1===_.indexOf(t)||(e.attributes={...e.attributes,...u}),e}))}},a={};function i(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,i),o.exports}i.m=t,e=[],i.O=(t,a,n,o)=>{if(!a){var l=1/0;for(d=0;d<e.length;d++){for(var[a,n,o]=e[d],r=!0,s=0;s<a.length;s++)(!1&o||l>=o)&&Object.keys(i.O).every((e=>i.O[e](a[s])))?a.splice(s--,1):(r=!1,o<l&&(l=o));if(r){e.splice(d--,1);var m=n();void 0!==m&&(t=m)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,n,o]},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={385:0,253:0};i.O.j=t=>0===e[t];var t=(t,a)=>{var n,o,[l,r,s]=a,m=0;if(l.some((t=>0!==e[t]))){for(n in r)i.o(r,n)&&(i.m[n]=r[n]);if(s)var d=s(i)}for(t&&t(a);m<l.length;m++)o=l[m],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(d)},a=globalThis.webpackChunkdmwpb_animate_blocks=globalThis.webpackChunkdmwpb_animate_blocks||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=i.O(void 0,[253],(()=>i(87)));n=i.O(n)})();