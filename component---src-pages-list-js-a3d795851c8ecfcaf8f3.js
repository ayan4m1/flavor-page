(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6xyR":function(e,r,t){"use strict";var n=t("wx14"),a=t("zLVn"),o=t("TSYQ"),l=t.n(o),c=t("q1tI"),i=t.n(c),s=t("vUet"),d=t("YdCC"),u=function(e){return i.a.forwardRef((function(r,t){return i.a.createElement("div",Object(n.a)({},r,{ref:t,className:l()(r.className,e)}))}))},f=t("Wzyw"),b=i.a.forwardRef((function(e,r){var t=e.bsPrefix,o=e.className,c=e.variant,d=e.as,u=void 0===d?"img":d,f=Object(a.a)(e,["bsPrefix","className","variant","as"]),b=Object(s.a)(t,"card-img");return i.a.createElement(u,Object(n.a)({ref:r,className:l()(c?b+"-"+c:b,o)},f))}));b.displayName="CardImg",b.defaultProps={variant:null};var m=b,v=u("h5"),p=u("h6"),y=Object(d.a)("card-body"),g=Object(d.a)("card-title",{Component:v}),O=Object(d.a)("card-subtitle",{Component:p}),j=Object(d.a)("card-link",{Component:"a"}),h=Object(d.a)("card-text",{Component:"p"}),E=Object(d.a)("card-header"),w=Object(d.a)("card-footer"),x=Object(d.a)("card-img-overlay"),P=i.a.forwardRef((function(e,r){var t=e.bsPrefix,o=e.className,d=e.bg,u=e.text,b=e.border,m=e.body,v=e.children,p=e.as,g=void 0===p?"div":p,O=Object(a.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),j=Object(s.a)(t,"card"),h=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return i.a.createElement(f.a.Provider,{value:h},i.a.createElement(g,Object(n.a)({ref:r},O,{className:l()(o,j,d&&"bg-"+d,u&&"text-"+u,b&&"border-"+b)}),m?i.a.createElement(y,null,v):v))}));P.displayName="Card",P.defaultProps={body:!1},P.Img=m,P.Title=g,P.Subtitle=O,P.Body=y,P.Link=j,P.Text=h,P.Header=E,P.Footer=w,P.ImgOverlay=x;r.a=P},MBJH:function(e,r,t){"use strict";var n=t("wx14"),a=t("zLVn"),o=t("TSYQ"),l=t.n(o),c=t("q1tI"),i=t.n(c),s=t("vUet"),d=i.a.forwardRef((function(e,r){var t=e.bsPrefix,o=e.className,c=e.striped,d=e.bordered,u=e.borderless,f=e.hover,b=e.size,m=e.variant,v=e.responsive,p=Object(a.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),y=Object(s.a)(t,"table"),g=l()(o,y,m&&y+"-"+m,b&&y+"-"+b,c&&y+"-striped",d&&y+"-bordered",u&&y+"-borderless",f&&y+"-hover"),O=i.a.createElement("table",Object(n.a)({},p,{className:g,ref:r}));if(v){var j=y+"-responsive";return"string"==typeof v&&(j=j+"-"+v),i.a.createElement("div",{className:j},O)}return O}));r.a=d},oEec:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return y})),t.d(r,"pageQuery",(function(){return g}));var n=t("q1tI"),a=t.n(n),o=t("MBJH"),l=t("6xyR"),c=t("17x9"),i=t.n(c);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){f(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function b(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function m(e){e.cdnSuffix;var r=e.cdnUrl,t=e.countryCode,a=e.style,o=e.svg,l=b(e,["cdnSuffix","cdnUrl","countryCode","style","svg"]);if("string"!=typeof t)return null;if(o){var c="".concat(r).concat(t.toLowerCase(),".").concat("svg");return Object(n.createElement)("img",s({},l,{src:c,style:u({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},a)}))}var i=t.toUpperCase().replace(/./g,(function(e){return String.fromCodePoint(e.charCodeAt(0)+127397)}));return Object(n.createElement)("span",s({role:"img"},l,{style:u({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},a)}),i)}m.propTypes={cdnUrl:i.a.string,countryCode:i.a.string.isRequired,style:i.a.object,svg:i.a.bool},m.defaultProps={cdnUrl:"https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/",svg:!1};var v=m,p=t("7oih");function y(e){var r=e.data,t=r.vendors.nodes,c=r.list.flavors.map((function(e){var r=t.find((function(r){return r.code===e.vendorCode}));return Object.assign({},e,{vendor:r})})),i=r.list,s=i.name,d=i.author,u=i.description;return a.a.createElement(p.a,{title:s},a.a.createElement("h1",null,s),a.a.createElement("h3",null,"by"," ",a.a.createElement("a",{href:"https://reddit.com/u/"+d,target:"_blank",rel:"noopener noreferrer"},d)),u&&a.a.createElement("p",null,u),a.a.createElement(o.a,{striped:!0,hover:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Vendor"),a.a.createElement("th",null,"Flavor"),a.a.createElement("th",null,"ATF Average %"))),a.a.createElement("tbody",null,c.map((function(e){return a.a.createElement(n.Fragment,{key:e.flavorName},a.a.createElement("tr",null,a.a.createElement("td",null,e.vendor?a.a.createElement(n.Fragment,null,e.vendor.country&&a.a.createElement(v,{countryCode:e.vendor.country,svg:!0,style:{fontSize:"32px"}})," ",a.a.createElement("span",null,e.vendor.url?a.a.createElement("a",{href:e.vendor.url,target:"_blank",rel:"noopener noreferrer"},e.vendor.name):e.vendor.name)):e.vendorCode),a.a.createElement("td",null,e.flavorName),a.a.createElement("td",null,e.atfAverage)),e.note&&a.a.createElement("tr",null,a.a.createElement("td",{colSpan:3},a.a.createElement(l.a,{bg:"info",text:"white"},a.a.createElement(l.a.Body,null,e.note)))))})))))}var g="3663432918"}}]);
//# sourceMappingURL=component---src-pages-list-js-a3d795851c8ecfcaf8f3.js.map