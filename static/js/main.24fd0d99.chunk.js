(this["webpackJsonpfake-lottery_react"]=this["webpackJsonpfake-lottery_react"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),s=a.n(r),u=a(1);a(9);var m=e=>{const t=[...e.usersNumbers],a=(a,l)=>{t[l]=+a.target.value,a.target.value>(5!==l?69:24)||"00"===a.target.value?t[l]=+a.target.value.substr(0,1):a.target.value.length>2&&(t[l]=+a.target.value.substr(0,2)),n(),e.setUsersNumbers(t),console.log(a.target.value,l,t)},n=()=>{Object.values(t).every(e=>+e>0)?e.setIsEnable(!1):e.setIsEnable(!0)};return l.a.createElement("div",{className:"input-form"},l.a.createElement("form",null,l.a.createElement("input",{value:e.usersNumbers[0],type:"number",className:"numbox",onChange:e=>a(e,0),required:!0}),l.a.createElement("input",{value:e.usersNumbers[1],type:"number",className:"numbox",onChange:e=>a(e,1),required:!0}),l.a.createElement("input",{value:e.usersNumbers[2],type:"number",className:"numbox",onChange:e=>a(e,2),required:!0}),l.a.createElement("input",{value:e.usersNumbers[3],type:"number",className:"numbox",onChange:e=>a(e,3),required:!0}),l.a.createElement("input",{value:e.usersNumbers[4],type:"number",className:"numbox",onChange:e=>a(e,4),required:!0}),l.a.createElement("input",{value:e.usersNumbers[5],type:"number",className:"specialNumBox",onChange:e=>a(e,5),required:!0})),l.a.createElement("button",{className:"btn btn1",disabled:e.isEnable},"PLAY"),l.a.createElement("button",{className:"btn btn5",disabled:e.isEnable},"Clear"))};var c=e=>l.a.createElement("div",null,l.a.createElement("h1",null,"Stats"),l.a.createElement("table",{className:"center"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"User number"),l.a.createElement("td",null,e.userNumbers.map((e,t)=>5!==t?l.a.createElement("span",{className:"white-cir"},e):l.a.createElement("span",{className:"red-cir"},e)))),l.a.createElement("tr",null,l.a.createElement("td",null,"Win number"),l.a.createElement("td",null,"0")),l.a.createElement("tr",null,l.a.createElement("td",null,"Same number"),l.a.createElement("td",null,"0")),l.a.createElement("tr",null,l.a.createElement("td",null,"total win"),l.a.createElement("td",null,"0")))));var b=e=>l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn3",onClick:()=>{let t=[];for(let e=0;e<25;e++){let e=Math.floor(68*Math.random()+1);t.includes(e)||t.push(e)}t=[...new Set(t)],t.length=5,t.sort((e,t)=>e-t).push(Math.ceil(24*Math.random())),console.log(t),e.setUsersNumbers(t.map(e=>+e<10?"0"+e:e)),e.setIsEnable(!1)}},"Random"));function o(){const e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(["","","","","",""]),o=Object(u.a)(s,2),E=o[0],i=o[1];return l.a.createElement("div",{className:"App"},l.a.createElement("h1",{className:"h1-main"},"lottery simulator"),l.a.createElement(m,{usersNumbers:E,setUsersNumbers:e=>i(e),isEnable:a,setIsEnable:e=>r(e)}),l.a.createElement(b,{setIsEnable:e=>r(e),setUsersNumbers:e=>i(e)}),E.join(" "),l.a.createElement(c,{userNumbers:E}))}const E=document.getElementById("root");s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o,null)),E)},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.24fd0d99.chunk.js.map