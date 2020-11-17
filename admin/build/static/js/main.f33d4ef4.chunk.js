(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{132:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(18),i=t.n(o),l=(t(85),t(13)),c=(t(90),t(3)),u=t(8),d=t(4),m=t(17),s=t(35),f=t(31);function p(){var e=Object(c.a)(["\n  outline: 0;\n  background-color: #0066f5;\n  border: none;\n  border-radius: 30px;\n  cursor: pointer;\n  display: inline-block;\n  height: 40px;\n  font-size: 15px;\n  color: #fff;\n  position: relative;\n  text-decoration: none;\n  padding: 0 1.8em 2.5px;\n  transition-duration: .3s;\n  text-transform: capitalize;\n  transition-property: background-color, opacity, color, transform, box-shadow;\n  transition-timing-function: ease-in-out;\n  user-select: none;\n  transform-style: preserve-3d;\n  will-change: background-color, opacity, color, transform, box-shadow;\n  box-shadow: 0 2px 4px 0 rgba(10, 46, 101, .08);\n"]);return p=function(){return e},e}var b=d.b.button(p()),g=function(e){var n=e.label,t=Object(f.a)(e,["label"]);return r.a.createElement(b,t,n)};function v(){var e=Object(c.a)(["\n  font-size: 12px;\n  color: red;\n"]);return v=function(){return e},e}function E(){var e=Object(c.a)(["\n  font-size: 12px;\n  margin: 0;\n"]);return E=function(){return e},e}function h(){var e=Object(c.a)(["\n  border: none;\n  outline: none;\n  padding: 10px;\n  display: block;\n  background: #edf2f7;\n  border-radius: 0.25rem;\n  width: 100%;\n"]);return h=function(){return e},e}function x(){var e=Object(c.a)(["\n  margin-bottom: 10px;\n"]);return x=function(){return e},e}var y,j=d.b.div(x()),w=d.b.input(h()),O=d.b.label(E()),k=d.b.div(v()),S={TextInput:function(e){var n=e.label,t=e.register,a=e.name,o=e.error,i=e.type,l=void 0===i?"text":i,c=Object(f.a)(e,["label","register","name","error","type"]);return r.a.createElement(j,null,n&&r.a.createElement(O,null,n),r.a.createElement(w,Object.assign({type:l,ref:t,name:a},c)),o&&r.a.createElement(k,null,o.message))}},C=t(15),I=C.a().shape({email:C.b().email().required(),password:C.b().required()}),z=t(2),F=t.n(z),q=t(9),B=t(69),R=t.n(B);y="https://api.isuites.xyz";var M=window.localStorage.getItem("__token"),T=R.a.create({baseURL:y,headers:{Authorization:"Bearer: ".concat(M)}}),_=function(){var e=Object(q.a)(F.a.mark((function e(n){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),W=function(){var e=Object(q.a)(F.a.mark((function e(n){var t,a,r=arguments;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,T.post(n,t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),L=function(){var e=Object(q.a)(F.a.mark((function e(n,t){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.put(n,t);case 2:return a=e.sent,e.abrupt("return",a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),P=function(){return _("/company/all")},A=function(e){return W("/company/create",e)},H=function(e){return L("/company/".concat(e._id),e)},N=function(){return window.localStorage.getItem("__token")};function J(){var e=Object(c.a)(["\n  border: 1px solid rgba(0, 102, 245, .15);\n  background-color: #fff;\n  width: 350px;\n  padding: 20px 20px;\n  min-height: 200px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 1px 15px 18px rgba(0 ,0 , 0, .03);\n  border-radius: 6px;\n\n  p {\n    font-size: 15px;\n    margin: 0;\n    padding: 0;\n    text-align: center;\n  }\n"]);return J=function(){return e},e}var D=d.b.form(J()),U=function(e){var n=Object(a.useState)(null),t=Object(u.a)(n,2),o=t[0],i=t[1],c=Object(l.b)(),d=Object(m.c)({resolver:Object(s.a)(I)}),f=d.register,p=d.handleSubmit,b=d.errors;return r.a.createElement(D,{onSubmit:p((function(e){var n;(n=e,W("/admin/login",n)).then((function(e){var n;e&&e.result?(n=e.result.token,window.localStorage.setItem("__token",n),c("/dashboard")):i("Invalid login credentials.")})).catch((function(e){return i("Error Occured, try again.")}))}))},r.a.createElement("div",null,o&&r.a.createElement("div",null,o),r.a.createElement(S.TextInput,{label:"Email",name:"email",type:"email",register:f,error:!!b.email,placeholder:"Enter email"}),r.a.createElement(S.TextInput,{register:f,label:"Password",name:"password",type:"password",error:b.password,placeholder:"Enter password"}),r.a.createElement(g,{label:"Login",type:"submit"})))},V=t(70),$=t.n(V);function G(){var e=Object(c.a)(["\n  flex-basis: 30%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return G=function(){return e},e}function K(){var e=Object(c.a)(["\n  flex-basis: 70%;\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 100vh;\n"]);return K=function(){return e},e}function Q(){var e=Object(c.a)(["\n  display: flex;\n"]);return Q=function(){return e},e}var X=d.b.div(Q()),Y=d.b.div(K(),$.a),Z=d.b.div(G()),ee=function(e){return r.a.createElement(X,null,r.a.createElement(Y,null,"\xa0"),r.a.createElement(Z,null,r.a.createElement("div",null,r.a.createElement(U,null))))},ne=function(){return r.a.createElement(l.a,null,r.a.createElement(ee,{path:"/"}))},te=function(){var e=Object(l.b)();return Object(a.useEffect)((function(){N()&&e("/dashboard")}),[]),r.a.createElement(ne,null)},ae=t(20),re=function(e){var n=Object(a.useState)({loading:!0,error:null,data:null}),t=Object(u.a)(n,2),r=t[0],o=t[1];return Object(ae.a)({},r,{executeFn:function(){return e.apply(void 0,arguments).then((function(e){return o(Object(ae.a)({},r,{loading:!1,data:e.result})),e})).catch((function(e){return o(Object(ae.a)({},r,{loading:!1,error:e})),e}))}})},oe=t(16),ie=Object(oe.atom)({key:"companies",default:{loading:!1,error:!1,data:null}}),le=t(137);function ce(){var e=Object(c.a)(["\n  flex-basis: 45%;\n  margin-top: 50px;\n  border: 1px solid rgba(0, 102, 245, .15);\n  background-color: #fff;\n  padding: 40px 40px 30px;\n  min-height: 200px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 1px 15px 18px rgba(0 ,0 , 0, .03);\n  border-radius: 6px;\n\n  table {\n    font-size: 14px;\n    width: 100%;\n    text-align: center;\n\n    thead {\n      height: 70px;\n      background: whitesmoke;\n    }\n\n    tr {\n      height: 30px;\n    }\n\n  }\n"]);return ce=function(){return e},e}function ue(){var e=Object(c.a)(["\n  flex-basis: 50%;\n\n  div {\n    margin-top: 10px;\n    margin-left: 200px;\n  }\n"]);return ue=function(){return e},e}function de(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 90%;\n  margin: 0 auto;\n\n  h2 {\n    font-size: 120px;\n  }\n\n"]);return de=function(){return e},e}function me(){var e=Object(c.a)(["\n  font-size: 120px;\n  margin-left: 250px;\n  color: rgba(15, 21, 64, .2);\n  font-weight: bold;\n  margin-top: 50px;\n  user-select: none;\n"]);return me=function(){return e},e}var se=d.b.h2(me()),fe=d.b.div(de()),pe=d.b.div(ue()),be=d.b.div(ce()),ge=function(){var e=Object(oe.useRecoilValue)(ie),n=e.data;return e.loading?"Loading":r.a.createElement(r.a.Fragment,null,r.a.createElement(se,null,"Companies"),r.a.createElement(fe,null,r.a.createElement(pe,null,r.a.createElement("div",null,r.a.createElement("p",null,"List of companies on HMS."))),r.a.createElement(be,null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"S/N"),r.a.createElement("th",null,"Company"),r.a.createElement("th",null,"Subdomain"))),r.a.createElement("tbody",null,n.map((function(e,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,++n),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.subdomain))})))))))};function ve(){var e=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return ve=function(){return e},e}var Ee=d.b.div(ve()),he=function(e){var n=e.children;return r.a.createElement(Ee,null,r.a.createElement("div",null,n))},xe=t(136),ye=function(e){var n=e.open,t=void 0===n||n,a=e.title,o=e.children,i=e.handleClose;return r.a.createElement(xe.a,{show:t,onHide:i,animation:!1,size:"md"},r.a.createElement(xe.a.Header,{closeButton:!0},r.a.createElement(xe.a.Title,null,a," ")),r.a.createElement(xe.a.Body,null,o))},je=t(5),we=C.a().shape({company:C.b().label("Company name").required("Company name is required"),subdomain:C.b().required("Subdomain is required"),manager:C.b().required("Managers name is required"),email:C.b().email("Invalid Emaail address").required("Email is required"),password:C.b().required("Password is required")}),Oe=function(e){var n=e.error,t=(e.loading,e.data,e.company,e.submitForm),a=Object(m.c)({resolver:Object(s.a)(we)}),o=a.register,i=a.handleSubmit,l=a.errors,c=a.formState.isSubmitting;return r.a.createElement("form",{onSubmit:i(t)},n&&r.a.createElement("div",null,n),r.a.createElement(S.TextInput,{name:"company",placeholder:"Company",label:"Company Name",register:o,error:l.company}),r.a.createElement(S.TextInput,{name:"subdomain",placeholder:"Subdomain",label:"Company Subdomain",register:o,error:l.subdomain}),r.a.createElement(S.TextInput,{name:"manager",placeholder:"Managers name",label:"Managers name",register:o,error:l.manager}),r.a.createElement(S.TextInput,{name:"email",placeholder:"Email",label:"Managers Email",register:o,error:l.email}),r.a.createElement(S.TextInput,{name:"password",placeholder:"Password",label:"Managers Password",register:o,error:l.password}),r.a.createElement(g,{label:"Add company",disabled:c,type:"submit"}))},ke=function(e){var n=e.company,t=e.closeModal,o=re(n?H:A),i=o.error,l=o.loading,c=o.data,d=o.executeFn,m=Object(oe.useRecoilState)(ie),s=Object(u.a)(m,2),f=s[0],p=s[1];return Object(a.useEffect)((function(){c&&(p(Object(ae.a)({},f,{loading:!1,data:[].concat(Object(je.a)(f.data),[c.company])})),t())}),[c]),r.a.createElement(Oe,{company:n,error:i,loading:l,data:c,submitForm:d})},Se=function(){var e=Object(a.useState)(!1),n=Object(u.a)(e,2),t=n[0],o=n[1],i=function(){return o(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{label:"Add company",onClick:function(){return o(!0)}}),r.a.createElement(ye,{open:t,title:"Create new company",handleClose:i},r.a.createElement(ke,{closeModal:i})))};function Ce(){var e=Object(c.a)(["\n  text-align: center;\n  width: 500px;\n  margin-top: 200px;\n\n  div {\n    margin-bottom: 10px;\n  }\n"]);return Ce=function(){return e},e}var Ie=d.b.div(Ce()),ze=function(){return r.a.createElement("div",null,r.a.createElement(he,null,r.a.createElement(Ie,null,r.a.createElement("div",null,"No company created yet. Click to create new company."),r.a.createElement(Se,null))))};function Fe(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 0 40px;\n\n  button {\n    margin-top: 25px;\n  }\n"]);return Fe=function(){return e},e}function qe(){var e=Object(c.a)(["\n  padding: 10px 5px;\n  font-size: 30px;\n  margin-top: 10px;\n  font-weight: bold;\n  width: fit-content;\n"]);return qe=function(){return e},e}var Be=d.b.h2(qe()),Re=d.b.div(Fe()),Me=function(e){var n=e.companies;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Re,null,r.a.createElement(Be,null,"Dashboard"),r.a.createElement(Se,null)),le.a(n)?r.a.createElement(ze,null):r.a.createElement(ge,{companies:n}))};function Te(){var e=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n"]);return Te=function(){return e},e}var _e=d.b.div(Te()),We=function(){return r.a.createElement(_e,null,"Loading...")},Le=function(){var e=Object(oe.useRecoilState)(ie),n=Object(u.a)(e,2),t=n[0],o=n[1],i=re(P),l=i.loading,c=i.error,d=i.data,m=i.executeFn;return console.log({companies:t}),Object(a.useEffect)((function(){o(Object(ae.a)({},t,{loading:!0})),m()}),[]),Object(a.useEffect)((function(){!l&&d&&o(Object(ae.a)({},t,{loading:!1,data:d}))}),[l,d]),l?r.a.createElement(We,null):c?r.a.createElement("div",null,"Could not fetch this data"):r.a.createElement(Me,{companies:d})},Pe=function(){var e=Object(l.b)();return Object(a.useEffect)((function(){N()||e("/")}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(Le,{path:"/"})))},Ae=function(){return r.a.createElement("div",null,"Page not found")},He=function(){return r.a.createElement(l.a,null,r.a.createElement(te,{path:"/"}),r.a.createElement(Pe,{path:"/dashboard"}),r.a.createElement(Ae,{default:!0}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ne=t(76),Je=t.n(Ne),De=t(77),Ue=t.n(De),Ve=t(78),$e=t.n(Ve),Ge=t(79),Ke=t.n(Ge);function Qe(){var e=Object(c.a)(["\n  @font-face {\n    font-family: font-bold;\n    src: url(",");\n  }\n  @font-face {\n    font-family: font-semibold;\n    src: url(",");\n  }\n  @font-face {\n    font-family: font-regular;\n    src: url(",");\n  }\n  @font-face {\n    font-family: font-medium;\n    src: url(",");\n  }\n  body {\n    background: #f4f7fa;\n    font-family: font-regular;\n  }\n"]);return Qe=function(){return e},e}var Xe=Object(d.a)(Qe(),Je.a,Ue.a,$e.a,Ke.a);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe.RecoilRoot,null,r.a.createElement(Xe,null),r.a.createElement(He,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,n,t){e.exports=t.p+"static/media/loginformbackground.4556371f.jpg"},76:function(e,n,t){e.exports=t.p+"static/media/BRFirmaCW-Bold.c57ee9ed.woff2"},77:function(e,n,t){e.exports=t.p+"static/media/BRFirmaCW-SemiBold.9b995a2d.woff2"},78:function(e,n,t){e.exports=t.p+"static/media/BRFirmaCW-Regular.94934930.woff2"},79:function(e,n,t){e.exports=t.p+"static/media/BRFirmaCW-Medium.638ff989.woff2"},80:function(e,n,t){e.exports=t(132)},85:function(e,n,t){}},[[80,1,2]]]);
//# sourceMappingURL=main.f33d4ef4.chunk.js.map