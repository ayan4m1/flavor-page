(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{MBJH:function(e,r,t){"use strict";var a=t("wx14"),n=t("zLVn"),l=t("TSYQ"),o=t.n(l),s=t("q1tI"),d=t.n(s),c=t("vUet"),i=d.a.forwardRef((function(e,r){var t=e.bsPrefix,l=e.className,s=e.striped,i=e.bordered,u=e.borderless,v=e.hover,m=e.size,f=e.variant,b=e.responsive,p=Object(n.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),E=Object(c.a)(t,"table"),h=o()(l,E,f&&E+"-"+f,m&&E+"-"+m,s&&E+"-striped",i&&E+"-bordered",u&&E+"-borderless",v&&E+"-hover"),w=d.a.createElement("table",Object(a.a)({},p,{className:h,ref:r}));if(b){var g=E+"-responsive";return"string"==typeof b&&(g=g+"-"+b),d.a.createElement("div",{className:g},w)}return w}));r.a=i},oEec:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return d})),t.d(r,"pageQuery",(function(){return c}));var a=t("q1tI"),n=t.n(a),l=t("MBJH"),o=t("7oih"),s=t("qhky");function d(e){var r=e.data,t=r.allVendorsCsv.nodes,a=r.listsJson.flavors.map((function(e){var r=t.find((function(r){return r.code===e.vendorCode}));return Object.assign({},e,{vendor:r})})),d=r.listsJson,c=d.name,i=d.author;return n.a.createElement(o.a,null,n.a.createElement(s.a,{title:c}),n.a.createElement("h1",null,c),n.a.createElement("h3",null,"by"," ",n.a.createElement("a",{href:"https://reddit.com/u/"+i,target:"_blank",rel:"noopener noreferrer"},i)),n.a.createElement(l.a,{striped:!0,hover:!0},n.a.createElement("thead",null,n.a.createElement("th",null,"Vendor"),n.a.createElement("th",null,"Flavor"),n.a.createElement("th",null,"ATF Average %")),n.a.createElement("tbody",null,a.map((function(e){var r,t;return n.a.createElement("tr",{key:e.flavorName},n.a.createElement("td",null,e.vendor?n.a.createElement("a",{href:null===(r=e.vendor)||void 0===r?void 0:r.url,target:"_blank",rel:"noopener noreferrer"},null===(t=e.vendor)||void 0===t?void 0:t.name):e.vendorCode),n.a.createElement("td",null,e.flavorName),n.a.createElement("td",null,e.atfAverage))})))))}var c="398508973"}}]);
//# sourceMappingURL=component---src-pages-list-js-40fdc1b7c5f5c6c2ffae.js.map