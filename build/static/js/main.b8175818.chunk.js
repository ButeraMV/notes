(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){t.exports=n(39)},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=n(14),i=n(2),l=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},e.content,r.a.createElement("button",{onClick:n},a))},m=function(t){var e=t.message;return null===e?null:r.a.createElement("div",{className:"error"},e)},f=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2019"))},s=n(3),p=n.n(s),d=function(){var t=p.a.get("/api/notes"),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then(function(t){return t.data.concat(e)})},v=function(t){return p.a.post("/api/notes",t).then(function(t){return t.data})},E=function(t,e){return p.a.put("".concat("/api/notes","/").concat(t),e).then(function(t){return t.data})},b=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),p=s[0],b=s[1],h=Object(a.useState)(!0),g=Object(i.a)(h,2),O=g[0],j=g[1],S=Object(a.useState)(null),w=Object(i.a)(S,2),k=w[0],y=w[1];Object(a.useEffect)(function(){d().then(function(t){return o(t)})},[]);var N=O?n:n.filter(function(t){return t.important}),C=function(t){var e=n.find(function(e){return e.id===t}),a=Object(u.a)({},e,{important:!e.important});E(t,a).then(function(e){o(n.map(function(n){return n.id!==t?n:e}))}).catch(function(a){y("Note '".concat(e.content,"' was already removed from server")),setTimeout(function(){y(null)},5e3),o(n.filter(function(e){return e.id!==t}))})};return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(m,{message:k}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return j(!O)}},"show ",O?"important":"all")),r.a.createElement("ul",null,N.map(function(t){return r.a.createElement(l,{key:t.id,note:t,toggleImportance:function(){return C(t.id)}})})),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:p,date:(new Date).toISOString(),important:Math.random()>.5,id:n.length+1};v(e).then(function(t){o(n.concat(t)),b("")})}},r.a.createElement("input",{value:p,onChange:function(t){b(t.target.value)}}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement(f,null))};n(38);c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b8175818.chunk.js.map