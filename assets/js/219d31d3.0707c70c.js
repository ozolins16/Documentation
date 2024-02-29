"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8960],{2619:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var t=a(4848),i=a(8453);const l={title:"Facet Chart Wifi Like Visualization",sidebar_position:8},o="Facet chart - WiFi like visualization",r={id:"Facet Chart/Examples/Gallery/wifiLikeVisualization",title:"Facet Chart Wifi Like Visualization",description:"Example on how to dynamically change style for individual chart columns.",source:"@site/docs/Facet Chart/Examples/Gallery/wifiLikeVisualization.md",sourceDirName:"Facet Chart/Examples/Gallery",slug:"/Facet Chart/Examples/Gallery/wifiLikeVisualization",permalink:"/Documentation/docs/Facet Chart/Examples/Gallery/wifiLikeVisualization",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Facet Chart/Examples/Gallery/wifiLikeVisualization.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Facet Chart Wifi Like Visualization",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Facet Chart Together With Slider And Selection",permalink:"/Documentation/docs/Facet Chart/Examples/Gallery/sliderAndSelection"},next:{title:"Contents Function",permalink:"/Documentation/docs/Facet Chart/Examples/Info Popup/contentsFunction"}},c={},s=[];function u(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"facet-chart---wifi-like-visualization",children:"Facet chart - WiFi like visualization"}),"\n",(0,t.jsx)(n.p,{children:"Example on how to dynamically change style for individual chart columns."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'    //define values so that chart would look like WiFi visualization:\n    var data = {\n        subvalues: [\n            {name: "10%", value: 10, "id": "c10"},\n            {name: "20%", value: 20, "id": "c20"},\n            {name: "30%", value: 30, "id": "c30"},\n            {name: "40%", value: 40, "id": "c40"},\n            {name: "50%", value: 50, "id": "c50"},\n            {name: "60%", value: 60, "id": "c60"},\n            {name: "70%", value: 70, "id": "c70"},\n            {name: "80%", value: 80, "id": "c80"},\n            {name: "90%", value: 90, "id": "c90"},\n            {name: "100%", value: 100, "id": "c100"}\n        ]\n    };\n    var t = new FacetChart({\n        container: document.getElementById("demo"),\n        data: {\n            preloaded: data\n        },\n        series: [\n            {\n                type:"columns",\n                style: {\n                    fillColor: "green"\n                },\n                data: {field: "value"}}\n        ],\n        items: {\n            styleFunction: function (item, data) {\n                var ix = parseInt(item.id.replace("c", ""));\n                for (var i = 0; i < item.values.length; i++) {\n                    var itemVal = item.values[i];\n                    if(ix > value) {\n                        itemVal.style.fillColor = "red";\n                    }\n                }\n            }\n        }\n    });\n\n    //set default / starting value\n    var value = 50;\n    var lastValue = value;\n\n    function randomIntFromInterval(min,max) {\n        return Math.floor(Math.random()*(max-min+1)+min);\n    }\n\n    setInterval(function() {\n        //next value calculation:\n        var p = randomIntFromInterval(0,1) == 1 ? 1 : -1;\n        var mx = 25;\n        var min = Math.max(lastValue - (mx * p), 0);\n        var max = Math.min(lastValue + (mx * p), 100);\n\n        value = randomIntFromInterval(min,max);\n       \n        //update chart:\n        t.updateSettings({});\n        lastValue = value;\n    }, 220);```\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var t=a(6540);const i={},l=t.createContext(i);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);