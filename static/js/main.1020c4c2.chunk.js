(this["webpackJsonplookup-repo"]=this["webpackJsonplookup-repo"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(5),i=a.n(s),l=(a(10),a(2)),r=a(4),o=a(0),u=function(e){var t=e.id,a=e.stateData,n=e.deleteData;return Object(o.jsx)("div",{className:"display-container",children:Object(o.jsx)("ul",{className:"dataUlist",children:a.length>1?a.map((function(e,c){return Object(o.jsxs)("li",{className:"dataList",children:[e.firstName," ",e.lastName," ",Object(o.jsx)(r.a,{style:{color:"red",cursor:"pointer",verticalAlign:"middle"},onClick:function(){return n(a[c].id)}})]},t)})):1===a.length?Object(o.jsxs)("li",{className:"dataList",children:[a[0].firstName," ",a[0].lastName," ",Object(o.jsx)(r.a,{style:{color:"red",cursor:"pointer",verticalAlign:"middle"},onClick:function(){return n(a[0].id)}})]}):0===a.length?Object(o.jsx)("li",{className:"dataList",children:"There is no Data"}):null})})},j=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(l.a)(s,2),r=i[0],j=i[1],d=Object(n.useState)([]),b=Object(l.a)(d,2),m=b[0],O=b[1],h=Object(n.useState)(0),p=Object(l.a)(h,2),f=p[0],x=p[1];return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{className:"form-container",onSubmit:function(e){e.preventDefault(),O(m.concat({id:f,firstName:a,lastName:r})),console.log(m),x(f+1),c(""),j("")},children:[Object(o.jsxs)("div",{className:"my-look-up-container",children:[Object(o.jsx)("label",{class:"my-look-up-label",children:"First Name"}),Object(o.jsx)("input",{type:"text",className:"my-look-up",id:"firstName",name:"firstName",onChange:function(e){return c(e.target.value)},value:a,required:!0})]}),Object(o.jsxs)("div",{className:"my-look-up-container",children:[Object(o.jsx)("label",{class:"my-look-up-label",children:"Last Name"}),Object(o.jsx)("input",{type:"text",className:"my-look-up",id:"lastName",name:"lastName",onChange:function(e){return j(e.target.value)},value:r,required:!0})]}),Object(o.jsx)("button",{type:"submit",id:"my-look-up-btn",children:Object(o.jsx)("span",{style:{fontSize:20},children:"Create"})}),Object(o.jsx)(u,{stateData:m,deleteData:function(e){O(m.filter((function(t){return t.id!==e})))},id:f})]})})},d=function(e){var t=e.title;return Object(o.jsxs)("header",{id:"header",children:[Object(o.jsx)("div",{className:"title-container",children:Object(o.jsx)("h1",{className:"site-title",children:t})}),Object(o.jsx)(j,{})]})};d.defaultProps={title:"Welcome to the Look-up"};var b=d,m=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(b,{})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("container")),O()}},[[12,1,2]]]);
//# sourceMappingURL=main.1020c4c2.chunk.js.map