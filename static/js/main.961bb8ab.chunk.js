(this.webpackJsonpaddress=this.webpackJsonpaddress||[]).push([[0],{125:function(e,a,n){e.exports=n(210)},130:function(e,a,n){},210:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(3),o=n.n(r),c=(n(130),n(218)),m=n(55),u=n(86),i=n(63),h=n(213),p=n(214),s=n(217),E=n(90),d=function(e){var a=e.name,n=e.phone,t=e.handleChange,r=e.handleClick;return l.a.createElement(h.a,null,l.a.createElement(p.a,{span:10},l.a.createElement(s.a,{name:"name",placeholder:"\uc774\ub984",onChange:t,value:a})),l.a.createElement(p.a,{span:10},l.a.createElement(s.a,{name:"phone",placeholder:"\uc804\ud654\ubc88\ud638",onChange:t,value:n})),l.a.createElement(p.a,{span:4},l.a.createElement(E.a,{type:"primary",onClick:r},"\ub4f1\ub85d")))},f=function(e){var a=e.handleSearch;return l.a.createElement(h.a,null,l.a.createElement(p.a,{span:24},l.a.createElement(s.a,{name:"search",placeholder:"\uc804\ud654\ubc88\ud638 \uac80\uc0c9",onChange:a})))},g=n(216),v=n(215),b=function(){var e=Object(t.useState)({name:"",phone:""}),a=Object(i.a)(e,2),n=a[0],r=a[1],o=Object(t.useState)([{name:"\uc544\uc774\ub9b0",phone:"01011112222"},{name:"\uc6ec\ub514",phone:"01022223333"},{name:"\uc608\ub9ac",phone:"01033334444"},{name:"\uc2ac\uae30",phone:"01044445555"},{name:"\uc870\uc774",phone:"01055556666"}]),c=Object(i.a)(o,2),h=c[0],p=c[1],s=Object(t.useState)(h),E=Object(i.a)(s,2),b=E[0],C=E[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(f,{handleSearch:function(e){var a=h.filter((function(a){return e.target.value.length>0?a.phone.indexOf(e.target.value)>-1:a}));C(a)}}),l.a.createElement(d,{name:n.name,phone:n.phone,handleChange:function(e){r(Object(u.a)({},n,Object(m.a)({},e.target.name,e.target.value)))},handleClick:function(e){var a=n.name,t=n.phone;if(0!==a.length)if(0!==t.length){var l=h.concat({name:a,phone:t});p(l),C(l),r(Object(u.a)({},n,{name:"",phone:""}))}else alert("\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.");else alert("\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694.")}})),l.a.createElement(g.a,{footer:l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,"\uac04\ub2e8\ud788 \ub9cc\ub4e0 \uc8fc\uc18c\ub85d"),l.a.createElement("li",null,"\ub9ac\uc561\ud2b8\ub85c \uad6c\ud604"),l.a.createElement("li",null,"expo\ub85c Ios / And\uc5d0\uc11c\ub3c4 \uc0ac\uc6a9\uac00\ub2a5"),l.a.createElement("li",null,"\ub514\uc790\uc778\uc740 antd \ub77c\uc774\ube0c\ub7ec\ub9ac"),l.a.createElement("li",null,"gh-pages \ub85c \ube4c\ub4dc \ud6c4 github.io \ub4f1\ub85d"),l.a.createElement("li",null,"localStorage \ub85c \uc800\uc7a5\ud574\ub3c4 \ub418\ub294\ub370 \uadc0\ucc2e"),l.a.createElement("li",null,"\ub354\ube14\ud074\ub9ad\uc2dc \uc0ad\uc81c\ub428"))),bordered:!0,dataSource:b,renderItem:function(e){return l.a.createElement(g.a.Item,{style:{cursor:"pointer"},onDoubleClick:function(){!function(e){var a=h.filter((function(a){return a.phone!==e}));p(a),C(a)}(e.phone)}},l.a.createElement(v.a.Text,{mark:!0},e.name)," ",e.phone)}}))},C=(n(209),c.a.Header),O=c.a.Footer,j=c.a.Content;var k=function(){return l.a.createElement(c.a,null,l.a.createElement(C,{style:{color:"#FFF"}},"\uc8fc\uc18c\ub85d"),l.a.createElement(c.a,null,l.a.createElement(j,null,l.a.createElement(b,null))),l.a.createElement(O,null,"Footer"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[125,1,2]]]);
//# sourceMappingURL=main.961bb8ab.chunk.js.map