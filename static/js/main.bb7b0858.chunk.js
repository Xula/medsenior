(this.webpackJsonpmedsenior=this.webpackJsonpmedsenior||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/medsenior.b8f5b770.png"},41:function(e,t,a){e.exports=a(82)},46:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},60:function(e,t,a){},77:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(37),s=a.n(o),c=(a(46),a(47),a(23)),i=a(12),l=a(11),u=a.n(l),m=a(16),p=a(8),d=(a(49),a(17)),f=a.n(d),h=a(24),g=a.n(h);g.a.initializeApp({apiKey:"AIzaSyD7QWzpJl-rrUCyV534tP9xRZOwRv5zD64",authDomain:"medsenior-51473.firebaseapp.com",databaseURL:"https://medsenior-51473.firebaseio.com",projectId:"medsenior-51473",storageBucket:"medsenior-51473.appspot.com",messagingSenderId:"683739806986",appId:"1:683739806986:web:73ff85be04b35e7ca50ef3"});var E=g.a;function b(e){var t=e.history,a=Object(n.useState)(!0),o=Object(p.a)(a,2),s=o[0],c=o[1],i=Object(n.useState)(""),l=Object(p.a)(i,2),d=l[0],h=l[1],g=Object(n.useState)(""),b=Object(p.a)(g,2),v=b[0],O=b[1],j=E.firestore().collection("users");function y(){return(y=Object(m.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),""!==d&&""!==v&&j.where("email","==",d).where("password","==",v).get().then((function(e){e.empty?alert("Usu\xe1rio ou senha incorretos!"):t.push("/home")})).catch((function(e){console.log("Erro ao buscar usu\xe1rios",e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"login-container"},r.a.createElement("img",{src:f.a,alt:"logo",className:"logo"}),r.a.createElement("form",{onSubmit:function(e){return y.apply(this,arguments)},className:"login-form"},r.a.createElement("h1",null,"Entrar"),r.a.createElement("input",{type:"email",placeholder:"Email",onChange:function(e){h(e.target.value)}}),r.a.createElement("input",{type:s?"password":"text",placeholder:"Senha",onChange:function(e){O(e.target.value)}}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),c(!s)},className:"showHide"},"Mostrar/Esconder senha"),r.a.createElement("p",null,"N\xe3o possui conta ainda? ",r.a.createElement("a",{href:"/register"},r.a.createElement("strong",null,"Registre-se aqui"))),r.a.createElement("button",{className:"login-button"},"Entrar")))}a(60);function v(e){var t=e.history,a=Object(n.useState)(!0),o=Object(p.a)(a,2),s=o[0],c=o[1],i=Object(n.useState)(""),l=Object(p.a)(i,2),d=l[0],h=l[1],g=Object(n.useState)(""),b=Object(p.a)(g,2),v=b[0],O=b[1],j=Object(n.useState)(""),y=Object(p.a)(j,2),w=y[0],N=y[1],S=Object(n.useState)([]),q=Object(p.a)(S,2),x=q[0],C=q[1],k=E.firestore().collection("users");function z(e){return D.apply(this,arguments)}function D(){return(D=Object(m.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),n=[],I(d)||n.push("Email invalido!"),v!==w&&n.push("As senhas n\xe3o s\xe3o iguais!"),v.length<6&&n.push("Sua senha deve ter pelo menos 6 caracteres!"),C(n),0===n.length&&(k.doc().set({email:d,password:v}),alert("Registro realizado com sucesso!"),t.push("/login"));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}return r.a.createElement("div",{className:"register-container"},r.a.createElement("img",{src:f.a,alt:"logo",className:"logo"}),r.a.createElement("form",{onSubmit:z,className:"register-form"},r.a.createElement("h1",null,"Novo registro"),r.a.createElement("input",{type:"email",placeholder:"Email",onChange:function(e){h(e.target.value)}}),r.a.createElement("input",{type:s?"password":"text",placeholder:"Senha",onChange:function(e){O(e.target.value)}}),r.a.createElement("input",{type:s?"password":"text",placeholder:"Confirmar senha",onChange:function(e){N(e.target.value)}}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),c(!s)},className:"showHide"},"Mostrar/Esconder senha"),r.a.createElement("button",{className:"register-button",onClick:z},"Registrar-se")),r.a.createElement("ul",{className:"errors",style:0===x.length?{display:"none"}:{display:"block"}},x.map((function(e){return r.a.createElement("li",null,e)}))))}var O=a(38),j=a.n(O);a(77);function y(){var e=Object(n.useState)("Buscando IP..."),t=Object(p.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("http://meuip.com/api/meuip.php");case 2:t=e.sent,a=t.data,o(a),console.log(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:f.a,alt:"logo",className:"logo"}),r.a.createElement("h1",null,"Bem-Vindo!"),r.a.createElement("h2",null,"Agora voc\xea \xe9 um filiado!"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Egestas integer eget aliquet nibh praesent. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Neque ornare aenean euismod elementum nisi. Nec feugiat nisl pretium fusce id velit ut. Est ante in nibh mauris cursus mattis molestie a. Eget mauris pharetra et ultrices neque ornare aenean euismod. Quam quisque id diam vel quam. Molestie nunc non blandit massa enim nec dui nunc."),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"ip"},"IP: ",a),r.a.createElement("div",{className:"logout-button"},r.a.createElement("a",{href:"/"},"LOGOUT"))))}function w(){return r.a.createElement(c.a,null,r.a.createElement(i.a,{path:"/",component:b,exact:!0}),r.a.createElement(i.a,{path:"/login",component:b,exact:!0}),r.a.createElement(i.a,{path:"/register",component:v}),r.a.createElement(i.a,{path:"/home",component:y}))}var N=function(){return r.a.createElement(w,null)};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.bb7b0858.chunk.js.map