(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),c=t(3),l=function(e){var n=e.value,t=e.handleFilterChange;return r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{value:n,onChange:t}),r.a.createElement("br",null))},i=function(e){var n=e.newName,t=e.newNumber,a=e.handleNameChange,o=e.handleNumberChange,u=e.addPerson;return r.a.createElement("form",{onSubmit:u},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:a}),r.a.createElement("br",null),"number: ",r.a.createElement("input",{value:t,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},s=function(e){var n=e.persons,t=e.filter,a=e.deletePerson;return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return a(e.id)}},"delete"))}))},m=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:n.status},n.content)},f=t(2),d=t.n(f),h="/api/persons",b=function(){return d.a.get(h).then((function(e){return e.data}))},v=function(e){return d.a.post(h,e).then((function(e){return e.data}))},p=function(e,n){return d.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},E=function(e){return d.a.delete("".concat(h,"/").concat(e))},g=(t(36),function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),f=Object(c.a)(u,2),d=f[0],h=f[1],g=Object(a.useState)(""),w=Object(c.a)(g,2),C=w[0],j=w[1],O=Object(a.useState)(""),N=Object(c.a)(O,2),k=N[0],L=N[1],S=Object(a.useState)(null),y=Object(c.a)(S,2),P=y[0],T=y[1];Object(a.useEffect)((function(){b().then((function(e){o(e)}))}),[]);var F=function(){return t.filter((function(e){return e.name.toLowerCase()===d.toLowerCase()})).length>0};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(m,{message:P}),r.a.createElement(l,{value:k,handleFilterChange:function(e){L(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(i,{addPerson:function(e){var n={name:d,number:C};if(e.preventDefault(),F()){var a=t.filter((function(e){return e.name.toLowerCase()===d.toLowerCase()}))[0].id;console.log(a),window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))&&p(a,n).then((function(e){o(t.map((function(t){return t.id!==e.id?t:n}))),h(""),j("")}))}else v(n).then((function(e){o(t.concat(e)),T({content:"Added ".concat(e.name),status:"success"}),setTimeout((function(){T(null)}),5e3),h(""),j("")})).catch((function(e){console.log(e.response.data.error),T({content:e.response.data.error,status:"error"}),setTimeout((function(){T(null)}),5e3)}))},newName:d,newNumber:C,handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){j(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(s,{persons:t,filter:k,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));E(e).then((function(){o(t.filter((function(n){return n.id!==e})))})).catch((function(a){T({content:"Information of ".concat(n.name," has already been removed from server"),status:"error"}),setTimeout((function(){T(null)}),5e3),o(t.filter((function(n){return n.id!==e})))}))}}))});u.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5d1af1bd.chunk.js.map