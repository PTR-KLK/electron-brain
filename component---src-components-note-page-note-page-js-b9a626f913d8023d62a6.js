(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},X8hv:function(e,t,n){var r=n("sXyB"),o=n("RIqP"),a=n("lSNA"),c=n("8OQS");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=n("q1tI"),f=n("7ljp").mdx,p=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=c(e,["scope","children"]),i=p(t),s=u.useMemo((function(){if(!n)return null;var e=l({React:u,mdx:f},i),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return u.createElement(s,l({},a))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},efAv:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("8k0H"),c=n("vOnD"),i=n("C75p"),l=n("Wbzz"),u=c.default.section.withConfig({displayName:"references__Container",componentId:"sc-14xxj6i-0"})(["flex-direction:column;padding:1rem 0;margin:0 0 1rem;"," p{margin:0 1rem;font-weight:bold;}ul{margin:1rem 1rem 0;}"],(function(e){var t=e.theme;return Object(i.d)(t)})),f=function(e){var t=e.arr,n=e.heading;return 0===t.length?null:o.a.createElement(u,null,o.a.createElement("p",null,n),o.a.createElement("ul",null,t.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(l.Link,{to:e.fields.slug},e.frontmatter.title))}))))},p=n("7ljp"),s=n("A2+M"),d={a:function(e){return 0===(t=e.href).indexOf("//")||!(-1===t.indexOf("://")||-1===t.indexOf(".")||-1===t.indexOf("/")||t.indexOf(":")>t.indexOf("/"))&&t.indexOf("://")<t.indexOf(".")?o.a.createElement("a",{href:e.href,target:"_blank",rel:"noreferrer noopener"},e.children):o.a.createElement(l.Link,{to:e.href},e.children);var t}},m=c.default.article.withConfig({displayName:"article__Container",componentId:"sc-1mxug0k-0"})(["width:calc(100% - 2rem);height:100%;flex:1;"]),b=function(e){return new Date(e).toLocaleDateString()},g=function(e){var t=e.data,n=t.body,r=t.frontmatter,a=r.title,c=r.date,i=r.last_modified;return o.a.createElement(m,null,o.a.createElement("h2",null,a),o.a.createElement("p",null,"Published: ",b(c),i!==c?" | Modified: "+b(i):null),o.a.createElement(p.MDXProvider,{components:d},o.a.createElement(s.MDXRenderer,null,n)))},h=n("d6gv"),y=n("vrFN"),O=n("ma3e"),v=n("/MKj"),x=Object(v.b)(null,(function(e){return{toggleGraph:function(){return e({type:"TOGGLE_GRAPH"})}}}))((function(e){var t=e.toggleGraph;return o.a.createElement("button",{"aria-label":"Toggle graph",title:"Toggle graph",onClick:t},o.a.createElement(O.b,null))}));t.default=Object(v.b)((function(e){return{graph:e.graph}}),null)((function(e){var t=e.data,n=e.graph,r=t.mdx;return o.a.createElement(a.a,{button:o.a.createElement(x,null)},o.a.createElement(y.a,{title:r.frontmatter.title,description:r.frontmatter.excerpt}),n?o.a.createElement(h.a,{data:[r]}):null,o.a.createElement(g,{data:r}),o.a.createElement(f,{heading:"In this note:",arr:r.outboundReferences}),o.a.createElement(f,{heading:"Reffered in:",arr:r.inboundReferences}))}))},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},sXyB:function(e,t,n){var r=n("SksO"),o=n("b48C");function a(t,n,c){return o()?e.exports=a=Reflect.construct:e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},a.apply(null,arguments)}e.exports=a}}]);
//# sourceMappingURL=component---src-components-note-page-note-page-js-b9a626f913d8023d62a6.js.map