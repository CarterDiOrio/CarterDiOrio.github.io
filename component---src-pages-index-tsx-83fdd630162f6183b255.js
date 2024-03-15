"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[691,845],{7200:function(t,e,r){r.r(e),r.d(e,{Head:function(){return i}});var n=r(4808),o=r(5893);e.default=()=>(0,o.jsx)(n.default,{});const i=()=>(0,o.jsx)("title",{children:"Carter DiOrio"})},4808:function(t,e,r){r.r(e),r.d(e,{Head:function(){return h},default:function(){return v}});var n=r(4842),o=r(4160);const i=t=>{var e,r;return{id:t.id,frontmatter:{...t.frontmatter,tags:null!==(e=null===(r=t.frontmatter.tags)||void 0===r?void 0:r.split(","))&&void 0!==e?e:[]}}};var a=()=>(0,o.K2)("975752791").allFile.nodes.map((t=>i(t.childMdx)));var l=()=>{const t=(0,o.K2)("3916053823"),e=i(t.mdx),r=t.allFile.nodes.find((t=>t.childMarkdownRemark.frontmatter.project==e.frontmatter.title)).childMarkdownRemark,n={html:r.html,...r.frontmatter};return{project:e,description:n}},c=r(7294),u=r(795),s="card-module--card--63c6d",d="card-module--smallCard--a5e76",f=r(5277);var p=t=>{let{project:e,description:r,featured:n}=t;const o=c.useRef(null),[i,a]=c.useState(n?s:d),l=c.useCallback((()=>{o.current&&(o.current.clientWidth>800?a(s):a(d))}),[]);return c.useEffect((()=>{if(n)return window.addEventListener("resize",l),l(),()=>{window.removeEventListener("resize",l)}}),[]),(0,f.tZ)(u.Zb,{variant:"recipe",children:(0,f.tZ)("a",{href:"/projects/"+e.frontmatter.url,sx:{all:"unset"},children:(0,f.BX)("div",{ref:o,className:i,children:[(0,f.BX)("div",{className:"card-module--description--fae86",children:[(0,f.BX)("div",{className:"card-module--content--23b6e",children:[(0,f.tZ)(u.X6,{variant:"cardtitle",children:e.frontmatter.title}),e.frontmatter.subtitle&&(0,f.tZ)(u.xv,{variant:"caption",children:e.frontmatter.subtitle}),(0,f.tZ)(u.xv,{variant:"caption",children:e.frontmatter.date}),r&&(0,f.tZ)("div",{dangerouslySetInnerHTML:{__html:r.html}})]}),e.frontmatter.tags.length>0&&(0,f.tZ)(u.xu,{sx:{marginTop:"auto",display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"8px 8px"},children:e.frontmatter.tags.map((t=>(0,f.tZ)(u.Ct,{variant:"pill",children:t})))})]}),(0,f.tZ)(u.Ee,{className:"card-module--media--1b5ba",alt:"image",src:e.frontmatter.picture,variant:"primary"})]})})})},m=r(5182);const h=()=>(0,f.tZ)("title",{children:"Projects"});var v=()=>{const t=a().sort(((t,e)=>t.frontmatter.order-e.frontmatter.order)),e=l();return(0,f.BX)(n.Z,{children:[(0,f.tZ)(u.xu,{children:(0,f.tZ)(p,{project:e.project,description:e.description,featured:!0})}),(0,f.tZ)(u.iz,{}),(0,f.tZ)(m.G,{columnsCountBreakPoints:{500:1,900:2,1600:3},children:(0,f.tZ)(m.Z,{gutter:"16px",children:t.filter((t=>t.id!=e.project.id)).map((t=>(0,f.tZ)(p,{project:t,featured:!1},t.id)))})})]})}},5182:function(t,e,r){r.d(e,{G:function(){return d},Z:function(){return f}});var n=r(7294);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}var a=function(t){var e,r;function a(){return t.apply(this,arguments)||this}r=t,(e=a).prototype=Object.create(r.prototype),e.prototype.constructor=e,i(e,r);var l=a.prototype;return l.getColumns=function(){var t=this.props,e=t.children,r=t.columnsCount,o=Array.from({length:r},(function(){return[]}));return n.Children.forEach(e,(function(t,e){t&&n.isValidElement(t)&&o[e%r].push(t)})),o},l.renderColumns=function(){var t=this.props.gutter;return this.getColumns().map((function(e,r){return n.createElement("div",{key:r,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:t}},e.map((function(t){return t})))}))},l.render=function(){var t=this.props,e=t.gutter,r=t.className,i=t.style;return n.createElement("div",{style:o({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:e},i),className:r},this.renderColumns())},a}(n.Component);a.propTypes={},a.defaultProps={columnsCount:3,gutter:"0",className:null,style:{}};var l=a,c="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,u=function(){var t=function(){var t=(0,n.useState)(!1),e=t[0],r=t[1];return c((function(){r(!0)}),[]),e}(),e=(0,n.useState)(0),r=e[0],o=e[1],i=(0,n.useCallback)((function(){t&&o(window.innerWidth)}),[t]);return c((function(){if(t)return window.addEventListener("resize",i),i(),function(){return window.removeEventListener("resize",i)}}),[t,i]),r},s=function(t){var e=t.columnsCountBreakPoints,r=void 0===e?{350:1,750:2,900:3}:e,o=t.children,i=t.className,a=void 0===i?null:i,l=t.style,c=void 0===l?null:l,s=u(),d=(0,n.useMemo)((function(){var t=Object.keys(r).sort((function(t,e){return t-e})),e=t.length>0?r[t[0]]:1;return t.forEach((function(t){t<s&&(e=r[t])})),e}),[s,r]);return n.createElement("div",{className:a,style:c},n.Children.map(o,(function(t,e){return n.cloneElement(t,{key:e,columnsCount:d})})))};s.propTypes={};var d=s,f=l}}]);
//# sourceMappingURL=component---src-pages-index-tsx-83fdd630162f6183b255.js.map