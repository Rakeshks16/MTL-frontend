(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{113:function(e,t,n){},117:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(63),s=n.n(r),i=n(11),o=n(13),l=n(18),u=n(3),j=n(8),b=n.n(j),d=(n(75),n(19)),m=n(162),O=n(164),p=n(165),h=n(166),f=n(167),x=n(168),v=n(169),g=n(24),N=n.n(g),w=n(68),y=n(163),S=(n(113),n(2));function C(e){var t=e.setShowRegister,n=Object(c.useState)(!1),a=Object(u.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(!1),l=Object(u.a)(i,2),j=l[0],d=l[1],O=Object(c.useRef)(),p=Object(c.useRef)(),h=Object(c.useRef)(),f=function(){var e=Object(o.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:O.current.value,email:p.current.value,password:h.current.value},e.prev=2,e.next=5,N.a.post("/users/register",n);case 5:d(!1),s(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),d(!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:"registerContainer",children:[Object(S.jsxs)("div",{className:"logo",children:[Object(S.jsx)(m.a,{className:"logoIcon"}),Object(S.jsx)("span",{children:"MTL Register"})]}),Object(S.jsxs)("form",{onSubmit:f,children:[Object(S.jsx)("input",{autoFocus:!0,placeholder:"username",ref:O}),Object(S.jsx)("input",{type:"email",placeholder:"email",ref:p}),Object(S.jsx)("input",{type:"password",min:"6",placeholder:"password",ref:h}),Object(S.jsx)("button",{className:"registerBtn",type:"submit",children:"Register"}),r&&Object(S.jsx)("span",{className:"success",children:"Successfull. You can login now"}),j&&Object(S.jsx)("span",{className:"failure",children:Object(S.jsx)("b",{children:"Please enter valid credentials"})})]}),Object(S.jsx)(y.a,{className:"registerCancel",onClick:function(){return t(!1)}})]})}n(117);function k(e){var t=e.setShowLogin,n=e.setCurrentUsername,a=e.myStorage,r=Object(c.useState)(!1),s=Object(u.a)(r,2),i=s[0],l=s[1],j=Object(c.useRef)(),d=Object(c.useRef)(),O=function(){var e=Object(o.a)(b.a.mark((function e(c){var r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),r={username:j.current.value,password:d.current.value},e.prev=2,e.next=5,N.a.post("/users/login",r);case 5:s=e.sent,n(s.data.username),a.setItem("user",s.data.username),t(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),l(!0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:"loginContainer",children:[Object(S.jsxs)("div",{className:"logo",children:[Object(S.jsx)(m.a,{className:"logoIcon"}),Object(S.jsx)("span",{children:"MTL Login"})]}),Object(S.jsxs)("form",{onSubmit:O,children:[Object(S.jsx)("input",{autoFocus:!0,placeholder:"username",ref:j}),Object(S.jsx)("input",{type:"password",min:"6",placeholder:"password",ref:d}),Object(S.jsx)("button",{className:"loginBtn",type:"submit",children:"Login"}),i&&Object(S.jsx)("span",{className:"failure",children:Object(S.jsxs)("b",{children:["Invalid User Credentials",Object(S.jsx)("br",{}),"*Try Again*"]})})]}),Object(S.jsx)(y.a,{className:"loginCancel",onClick:function(){return t(!1)}})]})}var I=n(67),D=function(e){var t=e.handleSubmit,n=e.submitLabel,a=e.hasCancelButton,r=void 0!==a&&a,s=e.handleCancel,i=e.initialText,o=void 0===i?"":i,l=Object(c.useState)(o),j=Object(u.a)(l,2),b=j[0],d=j[1],m=0===b.length;return Object(S.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(b),d("")},className:"comment-form",children:[Object(S.jsx)("textarea",{className:"comment-form-textarea",value:b,onChange:function(e){return d(e.target.value)}}),Object(S.jsx)("div",{className:"but",children:Object(S.jsx)("button",{className:"comment-form-button",disabled:m,children:n})}),r&&Object(S.jsx)("button",{type:"button",className:"comment-form-button comment-form-cancel-button",onClick:s,children:"Cancel"})]})},A=function e(t){var n=t.comment,c=t.replies,a=t.setActiveComment,r=t.activeComment,s=t.updateComment,i=t.deleteComment,o=t.addComment,l=t.parentId,u=void 0===l?null:l,j=t.currentUserId,b=r&&r.id===n.id&&"editing"===r.type,d=r&&r.id===n.id&&"replying"===r.type,m=new Date-new Date(n.createdAt)>3e5,O=j===n.userId&&0===c.length&&!m,p=u||n.id,h=new Date(n.createdAt).toLocaleDateString();return Object(S.jsxs)("div",{className:"comment",children:[Object(S.jsx)("div",{className:"comment-image-container"}),Object(S.jsxs)("div",{className:"comment-right-part",children:[Object(S.jsxs)("div",{className:"comment-content",children:[Object(S.jsx)("div",{className:"comment-author",children:n.username}),Object(S.jsx)("div",{children:h})]}),!b&&Object(S.jsx)("div",{className:"comment-text",children:n.body}),b&&Object(S.jsx)(D,{submitLabel:"Update",hasCancelButton:!0,initialText:n.body,handleSubmit:function(e){return s(e,n.id)},handleCancel:function(){a(null)}}),Object(S.jsx)("div",{className:"comment-actions",children:O&&Object(S.jsx)("div",{className:"comment-action",onClick:function(){return i(n.id)},children:"Delete"})}),d&&Object(S.jsx)(D,{submitLabel:"Reply",handleSubmit:function(e){return o(e,p)}}),c.length>0&&Object(S.jsx)("div",{className:"replies",children:c.map((function(t){return Object(S.jsx)(e,{comment:t,setActiveComment:a,activeComment:r,updateComment:s,deleteComment:i,addComment:o,parentId:n.id,replies:[],currentUserId:j},t.id)}))})]})]},n.id)},R=function(){var e=Object(o.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[{id:"1",body:"First comment",username:"raki",userId:"1",parentId:null,createdAt:"2022-06-16T23:00:33.010+02:00"},{id:"2",body:"Second comment",username:"param",userId:"2",parentId:null,createdAt:"2022-06-16T23:00:33.010+02:00"}]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(b.a.mark((function e(t){var n,c=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:null,e.abrupt("return",{id:Math.random().toString(36).substr(2,9),body:t,parentId:n,userId:"1",username:"raki",createdAt:(new Date).toISOString()});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(o.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{text:t});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(o.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(e){e.commentsUrl;var t=e.currentUserId,n=Object(c.useState)([]),a=Object(u.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(null),j=Object(u.a)(o,2),b=j[0],d=j[1],m=r.filter((function(e){return null===e.parentId})),O=function(e,t){T(e,t).then((function(e){s([e].concat(Object(i.a)(r))),d(null)}))},p=function(e,t){L(e).then((function(){var n=r.map((function(n){return n.id===t?Object(l.a)(Object(l.a)({},n),{},{body:e}):n}));s(n),d(null)}))},h=function(e){z().then((function(){var t=r.filter((function(t){return t.id!==e}));s(t)}))};return Object(c.useEffect)((function(){R().then((function(e){s(e)}))}),[]),Object(S.jsx)("div",{className:"comments",children:Object(S.jsxs)("div",{className:"comment-scroll",children:[Object(S.jsx)(D,{submitLabel:"Send",handleSubmit:O}),Object(S.jsx)("div",{className:"comments-container",children:m.map((function(e){return Object(S.jsx)(A,{comment:e,replies:(n=e.id,r.filter((function(e){return e.parentId===n})).sort((function(e,t){return new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()}))),activeComment:b,setActiveComment:d,addComment:O,deleteComment:h,updateComment:p,currentUserId:t},e.id);var n}))})]})})};n(148);var U=function(){var e=window.localStorage,t=Object(c.useState)(e.getItem("user")),n=Object(u.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)([]),j=Object(u.a)(s,2),g=j[0],y=j[1],D=Object(c.useState)(null),A=Object(u.a)(D,2),R=A[0],T=A[1],L=Object(c.useState)(null),z=Object(u.a)(L,2),U=z[0],B=z[1],F=Object(c.useState)(null),E=Object(u.a)(F,2),Z=E[0],J=E[1],W=Object(c.useState)(null),G=Object(u.a)(W,2),V=G[0],X=G[1],_=Object(c.useState)(1),P=Object(u.a)(_,2),Q=P[0],H=P[1],Y=Object(c.useState)(null),q=Object(u.a)(Y,2),K=q[0],$=q[1],ee=Object(c.useState)({latitude:12.9354553,longitude:77.5348926,zoom:8}),te=Object(u.a)(ee,2),ne=te[0],ce=te[1],ae=Object(c.useState)(!1),re=Object(u.a)(ae,2),se=re[0],ie=re[1],oe=Object(c.useState)(!1),le=Object(u.a)(oe,2),ue=le[0],je=le[1],be=function(){var e=Object(o.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:a,title:Z,desc:V,rating:Q,lat:U.lat,long:U.long,visitDate:K},e.prev=2,e.next=5,N.a.post("/pins",n);case 5:c=e.sent,y([].concat(Object(i.a)(g),[c.data])),B(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("/pins");case 3:t=e.sent,y(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var de=Object(c.useRef)(),me=Object(c.useCallback)((function(e){return ce(e)}),[]),Oe=Object(c.useCallback)((function(e){return me(Object(l.a)(Object(l.a)({},e),{transitionDuration:1e3}))}),[me]);return Object(S.jsx)("div",{style:{height:"100vh",width:"100wh"},children:Object(S.jsxs)(d.e,Object(l.a)(Object(l.a)({ref:de},ne),{},{mapboxApiAccessToken:"pk.eyJ1IjoicmFrZXNoLWstcyIsImEiOiJjbDNjbnR1dW8wMGM2M2RwaGZmd3BndWZzIn0.swX7vIzMSMfEM3p7TpVDZQ",width:"100%",height:"100%",transitionDuration:"100",mapStyle:"mapbox://styles/mapbox/streets-v9",onViewportChange:function(e){return ce(e)},onDblClick:a&&function(e){var t=Object(u.a)(e.lngLat,2),n=t[0],c=t[1];B({lat:c,long:n})},children:[g.map((function(e){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(d.c,{latitude:e.lat,longitude:e.long,offsetLeft:-3*ne.zoom,offsetTop:-6*ne.zoom,children:Object(S.jsx)(m.a,{style:{fontSize:6*ne.zoom,color:a===e.username?"tomato":"slateblue",cursor:"pointer"},onClick:function(){return t=e._id,n=e.lat,c=e.long,T(t),void ce(Object(l.a)(Object(l.a)({},ne),{},{latitude:n,longitude:c}));var t,n,c}})}),e._id===R&&Object(S.jsx)(d.d,{latitude:e.lat,longitude:e.long,closeButton:!0,closeOnClick:!1,onClose:function(){return T(null)},anchor:"left",className:"popup",children:Object(S.jsxs)("div",{className:"card",children:[Object(S.jsx)("label",{children:"Place"}),Object(S.jsx)("h4",{className:"place",children:e.title}),Object(S.jsx)("label",{children:"Review"}),Object(S.jsx)("p",{className:"desc",children:e.desc}),Object(S.jsx)("label",{children:"Rating"}),Object(S.jsx)("div",{className:"stars",children:Array(e.rating).fill(Object(S.jsx)(O.a,{className:"star"}))}),Object(S.jsx)("label",{children:"Tour-Date"}),Object(S.jsx)("p",{className:"visitDate",children:e.visitDate.slice(0,10)}),Object(S.jsx)("label",{children:"Information"}),Object(S.jsxs)("span",{className:"username",children:["Created by ",Object(S.jsx)("b",{children:e.username})]}),Object(S.jsx)("span",{className:"date",children:Object(w.a)(e.createdAt)}),Object(S.jsx)(M,{currentUserId:"1"}),Object(S.jsx)("div",{className:"like",children:Object(S.jsx)(p.a,{className:"delete",style:{cursor:"pointer",marginBottom:"-10px",visibility:a===e.username?"visible":"hidden"},onClick:function(){return t=e._id,e.lat,e.long,void fetch("/pins/".concat(t),{method:"delete"}).then(function(){var e=Object(o.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){T(null)}));var t}})})]})},e._id)]})})),U&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(d.c,{latitude:U.lat,longitude:U.long,offsetLeft:-3*ne.zoom,offsetTop:-6*ne.zoom,children:Object(S.jsx)(m.a,{style:{fontSize:6*ne.zoom,color:"tomato",cursor:"pointer"}})}),Object(S.jsx)(d.d,{latitude:U.lat,longitude:U.long,closeButton:!0,closeOnClick:!1,onClose:function(){return B(null)},anchor:"left",children:Object(S.jsx)("div",{children:Object(S.jsxs)("form",{onSubmit:be,children:[Object(S.jsx)("label",{children:"Title"}),Object(S.jsx)("input",{placeholder:"Enter a title",autoFocus:!0,onChange:function(e){return J(e.target.value)}}),Object(S.jsx)("label",{children:"Description"}),Object(S.jsx)("textarea",{className:"desc",placeholder:"Say us something about this place.",onChange:function(e){return X(e.target.value)}}),Object(S.jsx)("label",{children:"Rating"}),Object(S.jsxs)("select",{onChange:function(e){return H(e.target.value)},children:[Object(S.jsx)("option",{value:"1",children:"1"}),Object(S.jsx)("option",{value:"2",children:"2"}),Object(S.jsx)("option",{value:"3",children:"3"}),Object(S.jsx)("option",{value:"4",children:"4"}),Object(S.jsx)("option",{value:"5",children:"5"})]}),Object(S.jsx)("label",{children:"Tour-Date"}),Object(S.jsx)("input",{className:"visitDate",type:"date",onChange:function(e){return $(e.target.value)}}),Object(S.jsx)("button",{type:"submit",className:"submitButton",children:"Add Pin"})]})})})]}),Object(S.jsxs)("div",{className:"head",style:{height:"10vh",width:"100wh",position:"relative",backgroundColor:"dodgerblue"},children:[Object(S.jsx)("h1",{className:"title",children:"My Travel Log"}),a?Object(S.jsxs)(S.Fragment,{children:[" ",Object(S.jsxs)("div",{className:"icon",children:[Object(S.jsx)(h.a,{style:{fontSize:20}}),Object(S.jsx)("button",{className:"button logout",onClick:function(){r(null),e.removeItem("user")},children:"SignOut"})]}),Object(S.jsxs)("div",{className:"logos",children:[Object(S.jsx)(f.a,{style:{fontSize:20}}),Object(S.jsx)("a",{href:"http://localhost:3005/",className:"button search",children:"Search places"})]})]}):Object(S.jsxs)("div",{className:"buttons",children:[Object(S.jsxs)("button",{className:"button login",onClick:function(){return je(!0)},children:[Object(S.jsx)(x.a,{style:{fontSize:20}}),"SignIn"]}),Object(S.jsxs)("button",{className:"button register",onClick:function(){return ie(!0)},children:[Object(S.jsx)(v.a,{style:{fontSize:20}}),"SignUp"]})]}),se&&Object(S.jsx)(C,{setShowRegister:ie}),ue&&Object(S.jsx)(k,{setShowLogin:je,setCurrentUsername:r,myStorage:e})]}),Object(S.jsx)(I.a,{mapRef:de,onViewportChange:Oe,mapboxApiAccessToken:"pk.eyJ1IjoicmFrZXNoLWstcyIsImEiOiJjbDNjbnR1dW8wMGM2M2RwaGZmd3BndWZzIn0.swX7vIzMSMfEM3p7TpVDZQ",position:"top-right"}),Object(S.jsx)(d.b,{positionOptions:{enableHighAccuracy:!0},showUserLocation:!0,showAccuracyCircle:!1,style:{position:"fixed",right:0,bottom:15,margin:10,marginRight:8}})]}))})};s.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(U,{})}),document.getElementById("root"))},75:function(e,t,n){}},[[149,1,2]]]);
//# sourceMappingURL=main.a4b68bb9.chunk.js.map