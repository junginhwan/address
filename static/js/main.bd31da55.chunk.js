(this.webpackJsonpaddress=this.webpackJsonpaddress||[]).push([[0],{125:function(e,a,n){e.exports=n(210)},130:function(e,a,n){},210:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(3),o=n.n(r),c=(n(130),n(218)),m=n(56),u=n(85),i=n(47),h=n(213),s=n(214),p=n(217),E=n(89),d=n(216),f=n(215),v=function(){var e=Object(t.useState)({name:"",phone:""}),a=Object(i.a)(e,2),n=a[0],r=a[1],o=Object(t.useState)(""),c=Object(i.a)(o,2),v=c[0],g=c[1],b=Object(t.useState)([{name:"\ub538",phone:"01011112222"},{name:"\uc544\ub0b4",phone:"01022223333"},{name:"\ub098",phone:"01033334444"},{name:"\ud615",phone:"01044445555"},{name:"\uc5c4\ub9c8",phone:"01055556666"}]),O=Object(i.a)(b,2),j=O[0],w=O[1],k=Object(t.useState)(j),C=Object(i.a)(k,2),S=C[0],y=C[1],x=function(e){r(Object(u.a)({},n,Object(m.a)({},e.target.name,e.target.value)))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(h.a,null,l.a.createElement(s.a,{span:24},l.a.createElement(p.a,{name:"search",placeholder:"\uc804\ud654\ubc88\ud638 \uac80\uc0c9",onChange:function(e){g(e.target.value);var a=j.filter((function(e){return e.phone.indexOf(v)>-1}));y(a)}}))),l.a.createElement(h.a,null,l.a.createElement(s.a,{span:10},l.a.createElement(p.a,{name:"name",placeholder:"\uc774\ub984",onChange:x,value:n.name})),l.a.createElement(s.a,{span:10},l.a.createElement(p.a,{name:"phone",placeholder:"\uc804\ud654\ubc88\ud638",onChange:x,value:n.phone})),l.a.createElement(s.a,{span:4},l.a.createElement(E.a,{type:"primary",onClick:function(e){var a=n.name,t=n.phone;if(0!==a.length)if(0!==t.length){var l=j.concat({name:a,phone:t});w(l),r(Object(u.a)({},n,{name:"",phone:""}))}else alert("\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.");else alert("\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694.")}},"\ub4f1\ub85d")))),l.a.createElement(d.a,{header:l.a.createElement("div",null,"\uc8fc\uc18c\ub85d"),footer:l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,"\uac04\ub2e8\ud788 \ub9cc\ub4e0 \uc8fc\uc18c\ub85d"),l.a.createElement("li",null,"\ub9ac\uc561\ud2b8\ub85c \uad6c\ud604"),l.a.createElement("li",null,"expo\ub85c Ios / And\uc5d0\uc11c\ub3c4 \uc0ac\uc6a9\uac00\ub2a5"),l.a.createElement("li",null,"\ub514\uc790\uc778\uc740 antd \ub77c\uc774\ube0c\ub7ec\ub9ac"),l.a.createElement("li",null,"gh-pages \ub85c \ube4c\ub4dc \ud6c4 github.io \ub4f1\ub85d"),l.a.createElement("li",null,"localStorage \ub85c \uc800\uc7a5\ud574\ub3c4 \ub418\ub294\ub370 \uadc0\ucc2e"),l.a.createElement("li",null,"\ub354\ube14\ud074\ub9ad\uc2dc \uc0ad\uc81c\ub428"))),bordered:!0,dataSource:S,renderItem:function(e){return l.a.createElement(d.a.Item,{style:{cursor:"pointer"},onDoubleClick:function(){!function(e){var a=j.filter((function(a){return a.phone!==e}));w(a)}(e.phone)}},l.a.createElement(f.a.Text,{mark:!0},e.name)," ",e.phone)}}))},g=(n(209),c.a.Header),b=c.a.Footer,O=c.a.Content;var j=function(){return l.a.createElement(c.a,null,l.a.createElement(g,null,"\uc8fc\uc18c\ub85d"),l.a.createElement(c.a,null,l.a.createElement(O,null,l.a.createElement(v,null))),l.a.createElement(b,null,"Footer"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[125,1,2]]]);
//# sourceMappingURL=main.bd31da55.chunk.js.map