"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3356],{5851:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(4848),s=a(8453);const r={title:"Facet Chart Clustered Series Passenger Cars In Use",sidebar_position:2},l="Facet Chart - clustered series, one level",i={id:"Facet Chart/Examples/Gallery/clusteredSeries",title:"Facet Chart Clustered Series Passenger Cars In Use",description:"Passenger cars in use totals, year 2012",source:"@site/docs/Facet Chart/Examples/Gallery/clusteredSeries.md",sourceDirName:"Facet Chart/Examples/Gallery",slug:"/Facet Chart/Examples/Gallery/clusteredSeries",permalink:"/Documentation/docs/Facet Chart/Examples/Gallery/clusteredSeries",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Facet Chart/Examples/Gallery/clusteredSeries.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Facet Chart Clustered Series Passenger Cars In Use",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Facet Chart Browser Shares",permalink:"/Documentation/docs/Facet Chart/Examples/Gallery/browserShares"},next:{title:"Facet Chart Continental Data And Breadcrumb Feature",permalink:"/Documentation/docs/Facet Chart/Examples/Gallery/continentionalData"}},o={},c=[];function d(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"facet-chart---clustered-series-one-level",children:"Facet Chart - clustered series, one level"}),"\n",(0,n.jsx)(t.p,{children:"Passenger cars in use totals, year 2012"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'       function success(data) {\n           t = new FacetChart(\n               settings = {\n                   container: document.getElementById("demo"),\n                   data: {\n                       preloaded: data\n                   },\n                   interaction: { resizing: { enabled: false } },\n                   series: [\n                       { id: "s1", name: "2005", data: { field: "2005" }, style: { fillColor: "red" } },\n                       { id: "s2", name: "2006", data: { field: "2006" }, style: { fillColor: "limegreen" } },\n                       { id: "s3", name: "2007", data: { field: "2007" }, style: { fillColor: "blue" } },\n                       { id: "s4", name: "2008", data: { field: "2008" }, style: { fillColor: "cyan" } },\n                       { id: "s5", name: "2009", data: { field: "2009" }, style: { fillColor: "gray" } },\n                       { id: "s6", name: "2010", data: { field: "2010" }, style: { fillColor: "orange" } },\n                       { id: "s7", name: "2011", data: { field: "2011" }, style: { fillColor: "purple" } },\n                       { id: "s8", name: "2012", data: { field: "2012" }, style: { fillColor: "yellow" } }\n                   ],\n                   facetAxis: {\n                       defaultUnitWidth: 100\n                   }\n               }\n           );\n       }\n       // using a custom library to load CSV data\n       loadCSVObj("/dvsl/data/facet-chart/pc.csv", null, [\n               { type: "string", name: "name" },\n               { type: "decimal", name: "2005" },\n               { type: "decimal", name: "2006" },\n               { type: "decimal", name: "2007" },\n               { type: "decimal", name: "2008" },\n               { type: "decimal", name: "2009" },\n               { type: "decimal", name: "2010" },\n               { type: "decimal", name: "2011" },\n               { type: "decimal", name: "2012" },\n               { type: "string", name: "continent" }\n       ], "\\t", function (data) {\n           data = sortResponse(data, "2012", false);\n           success(data);\n           /* prepare preloaded data */\n       });\n'})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>i});var n=a(6540);const s={},r=n.createContext(s);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);