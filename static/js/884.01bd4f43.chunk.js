"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{454:function(t,n,e){e.d(n,{Z:function(){return o}});var r,c=e(137),a=e(168),i=e(924).ZP.div(r||(r=(0,a.Z)(["\n  text-align: center;\n  margin-top: 150px;\n"]))),s=e(184);function o(){return(0,s.jsx)(i,{children:(0,s.jsx)(c.VF,{visible:!0,height:"100",width:"100",color:"blue",secondaryColor:"blue",radius:"12.5",ariaLabel:"mutating-dots-loading"})})}},884:function(t,n,e){e.r(n);var r=e(439),c=e(454),a=e(791),i=e(689),s=e(87),o=e(390),u=e(558),p=e(184);n.default=function(){var t,n,e=(0,i.UO)().movieId,l=(0,a.useState)(!0),d=(0,r.Z)(l,2),h=d[0],f=d[1],x=(0,a.useState)(null),v=(0,r.Z)(x,2),g=v[0],j=v[1],m=(0,i.TH)(),w=(0,a.useRef)(null!==(t=null===(n=m.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/movies");if((0,a.useEffect)((function(){e&&(0,o.Y5)("/movie",e).then((function(t){j(t)})).catch(o.NI).finally((function(){return f(!1)}))}),[e]),g){var b=g.poster_path,y=g.title,k=g.original_title,Z=g.release_date,_=g.genres,C=g.vote_average,I=g.overview;return(0,p.jsxs)(u.dE,{children:[(0,p.jsx)(u.Fg,{to:w.current,children:"< BACK"}),(0,p.jsx)("h2",{children:"Movie Details:"}),h&&(0,p.jsx)(c.Z,{}),g&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(u.O2,{children:[(0,p.jsx)("img",{src:b?"http://image.tmdb.org/t/p/w342".concat(b):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zCvwPJgOIZhZJDgdd0Q7Qsfrjqo5JXf-5g&usqp=CAU",alt:y,width:"200"}),(0,p.jsxs)(u.UE,{children:[(0,p.jsx)("h3",{children:k}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Release date:"})," ",Z]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Genres:"})," ",_.map((function(t){var n=t.name;return"".concat(n.toLowerCase()," | ")}))]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Ranking:"})," ",C]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Overview:"})," ",I]})]})]}),(0,p.jsx)("h3",{children:"Additional information:"}),(0,p.jsxs)(u.Z,{children:[(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"reviews",children:"Reviews"})})]}),(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading..."}),children:(0,p.jsx)(i.j3,{})})]})]})}}},390:function(t,n,e){e.d(n,{Hx:function(){return m},NI:function(){return b},Pu:function(){return p},Y5:function(){return x},bI:function(){return h},uV:function(){return g},vw:function(){return l}});var r=e(861),c=e(757),a=e.n(c),i=e(294),s=e(694),o="32e4578d60990bc32696639e780641fd",u="https://api.themoviedb.org/3",p={position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"};function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(u).concat(n,"?api_key=").concat(o),t.next=3,i.Z.get(e);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(n,e){var r,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(u).concat(n,"?api_key=").concat(o,"&query=").concat(e),t.next=3,i.Z.get(r);case 3:return c=t.sent,t.abrupt("return",c.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(n,e){var r,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(u).concat(n,"/").concat(e,"?api_key=").concat(o),t.next=3,i.Z.get(r);case 3:return c=t.sent,t.abrupt("return",c.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t,n){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(a().mark((function t(n,e){var r,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(u).concat(n,"/").concat(e,"/credits?api_key=").concat(o),t.next=3,i.Z.get(r);case 3:return c=t.sent,t.abrupt("return",c.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function t(n,e){var r,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(u).concat(n,"/").concat(e,"/reviews?api_key=").concat(o),t.next=3,i.Z.get(r);case 3:return c=t.sent,t.abrupt("return",c.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(){s.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",p)}}}]);
//# sourceMappingURL=884.01bd4f43.chunk.js.map