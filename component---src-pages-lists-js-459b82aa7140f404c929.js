(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{MBJH:function(e,t,r){"use strict";var a=r("wx14"),n=r("zLVn"),l=r("TSYQ"),s=r.n(l),o=r("q1tI"),d=r.n(o),c=r("vUet"),i=d.a.forwardRef((function(e,t){var r=e.bsPrefix,l=e.className,o=e.striped,i=e.bordered,u=e.borderless,m=e.hover,f=e.size,b=e.variant,p=e.responsive,h=Object(n.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),v=Object(c.a)(r,"table"),E=s()(l,v,b&&v+"-"+b,f&&v+"-"+f,o&&v+"-striped",i&&v+"-bordered",u&&v+"-borderless",m&&v+"-hover"),w=d.a.createElement("table",Object(a.a)({},h,{className:E,ref:t}));if(p){var L=v+"-responsive";return"string"==typeof p&&(L=L+"-"+p),d.a.createElement("div",{className:L},w)}return w}));t.a=i},d3Sn:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return d})),r.d(t,"pageQuery",(function(){return c}));var a=r("Wbzz"),n=r("q1tI"),l=r.n(n),s=r("MBJH"),o=r("7oih");function d(e){var t=e.data.allListsJson.edges.map((function(e){return e.node}));return l.a.createElement(o.a,{title:"Lists"},l.a.createElement("h1",null,"The List of Lists"),l.a.createElement(s.a,{striped:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"List Name"),l.a.createElement("th",null,"Author"),l.a.createElement("th",null,"Date Added"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:e.code},l.a.createElement("td",null,l.a.createElement(a.Link,{to:"/"+e.code},e.name)),l.a.createElement("td",null,l.a.createElement("a",{href:"https://reddit.com/u/"+e.author,target:"_blank",rel:"noopener noreferrer"},e.author)),l.a.createElement("td",null,e.dateAdded))})))))}var c="2396497715"}}]);
//# sourceMappingURL=component---src-pages-lists-js-459b82aa7140f404c929.js.map