"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{454:function(n,t,e){e.d(t,{Z:function(){return o}});var r,c=e(137),a=e(168),u=e(924).ZP.div(r||(r=(0,a.Z)(["\n  text-align: center;\n  margin-top: 150px;\n"]))),i=e(184);function o(){return(0,i.jsx)(u,{children:(0,i.jsx)(c.VF,{visible:!0,height:"100",width:"100",color:"blue",secondaryColor:"blue",radius:"12.5",ariaLabel:"mutating-dots-loading"})})}},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,c,a=e(439),u=e(791),i=e(689),o=e(390),s=e(454),p=e(168),f=e(924),h=f.ZP.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),l=f.ZP.li(c||(c=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  max-height: 300px;\n  overflow-y: auto;\n"]))),d=e(184),x=function(){var n=(0,i.UO)().movieId,t=(0,u.useState)(!0),e=(0,a.Z)(t,2),r=e[0],c=e[1],p=(0,u.useState)([]),f=(0,a.Z)(p,2),x=f[0],v=f[1];return(0,u.useEffect)((function(){n&&(0,o.Hx)("/movie",n).then((function(n){v(n.results)})).catch(o.NI).finally((function(){return c(!1)}))}),[n]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h3",{children:"Reviews:"}),r&&(0,d.jsx)(s.Z,{}),0!==x.length?(0,d.jsx)(h,{children:x.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,d.jsxs)(l,{children:[(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"Author:"})," ",e]}),(0,d.jsx)("p",{children:r})]},t)}))}):(0,d.jsx)("p",{children:"Sorry! We don't have any reviews for this movie"})]})}},390:function(n,t,e){e.d(t,{Hx:function(){return w},NI:function(){return Z},Pu:function(){return p},Y5:function(){return x},bI:function(){return l},uV:function(){return y},vw:function(){return f}});var r=e(861),c=e(757),a=e.n(c),u=e(294),i=e(694),o="32e4578d60990bc32696639e780641fd",s="https://api.themoviedb.org/3",p={position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"};function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s).concat(t,"?api_key=").concat(o),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s).concat(t,"?api_key=").concat(o,"&query=").concat(e),n.next=3,u.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s).concat(t,"/").concat(e,"?api_key=").concat(o),n.next=3,u.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s).concat(t,"/").concat(e,"/credits?api_key=").concat(o),n.next=3,u.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s).concat(t,"/").concat(e,"/reviews?api_key=").concat(o),n.next=3,u.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(){i.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",p)}}}]);
//# sourceMappingURL=387.5968bfa2.chunk.js.map