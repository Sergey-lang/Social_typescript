(this.webpackJsonpsocial_typescript=this.webpackJsonpsocial_typescript||[]).push([[6],{233:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var r=t(60),n=t(235),s=t(0),c=t.n(s),l=t(238),o=t.n(l),i=t(236),u=t.n(i),m=function(e){var a=e.className,t=e.children,s=e.onClick,l=e.white,i=Object(n.a)(e,["className","children","onClick","white"]);return c.a.createElement("button",Object.assign({},i,{className:o()(u.a.button,a,Object(r.a)({},u.a.white,l)),onClick:s}),t)}},236:function(e,a,t){e.exports={button:"Button_button__2S_e7"}},320:function(e,a,t){e.exports=t.p+"static/media/bg-user.4e482b6b.jpg"},321:function(e,a,t){e.exports={userWrapper:"User_userWrapper__3-y4F",userBox:"User_userBox__Y0i9h",background:"User_background__2cqML",followers:"User_followers__2go3k",friendMeta:"User_friendMeta__1PlIz",userPhoto:"User_userPhoto__1kTy1",friendName:"User_friendName__M_jcp",country:"User_country__3OWbv",friendInfo:"User_friendInfo__3wW2N",frndInfoItem:"User_frndInfoItem__2iEHJ",fieldName:"User_fieldName__1pN0r"}},322:function(e,a,t){e.exports={paginationWrapper:"Paginator_paginationWrapper__Gicbm",numberItem:"Paginator_numberItem__deO7y",selected:"Paginator_selected__PNBZC",pagBtn:"Paginator_pagBtn__2GzKo",prevBtn:"Paginator_prevBtn__kyyWk"}},326:function(e,a,t){e.exports={usersPageWrapper:"Users_usersPageWrapper__2F1Dq",centralUsersMeta:"Users_centralUsersMeta__3cObs",row:"Users_row__-vVkg"}},330:function(e,a,t){e.exports={formWrapper:"UsersSearchForm_formWrapper__3xtcJ",usersForm:"UsersSearchForm_usersForm__310K9",usersSearchInput:"UsersSearchForm_usersSearchInput__3U_GM",usersSelector:"UsersSearchForm_usersSelector__3O-Fp",searchBtn:"UsersSearchForm_searchBtn__3CYZN"}},331:function(e,a,t){e.exports={centralMeta:"UsersPageHeader_centralMeta__2uqGs",leftBlock:"UsersPageHeader_leftBlock__E9XAu",pageTitle:"UsersPageHeader_pageTitle__Al1F-",followCount:"UsersPageHeader_followCount__3blY0"}},335:function(e,a,t){"use strict";t.r(a),t.d(a,"UsersPage",(function(){return D}));var r=t(0),n=t.n(r),s=t(2),c=t(83),l=t.n(c),o=t(320),i=t.n(o),u=t(18),m=t(233),f=t(321),d=t.n(f),_=function(e){var a=e.user,t=e.follow,r=e.unfollow,s=e.followingInProgress,c={backgroundImage:"url(".concat(a.photos.large?a.photos.large:i.a,")")};return n.a.createElement("div",{className:d.a.userWrapper},n.a.createElement("div",{className:d.a.userBox},n.a.createElement("div",{className:d.a.background,style:c},n.a.createElement("span",{className:d.a.followers},"Followers: 120")),n.a.createElement("div",{className:d.a.friendMeta},n.a.createElement("img",{alt:"avatar",src:null!=a.photos.large?a.photos.large:l.a,className:d.a.userPhoto}),n.a.createElement("div",{className:d.a.friendName},n.a.createElement(u.b,{to:"/profile/"+a.id,className:d.a.linkToProfile},a.name),n.a.createElement("span",{className:d.a.country},"California, USA")),n.a.createElement("ul",{className:d.a.friendInfo},n.a.createElement("li",{className:d.a.frndInfoItem},n.a.createElement("span",{className:d.a.fieldName},"User id:"),a.id),n.a.createElement("li",{className:d.a.frndInfoItem},n.a.createElement("span",{className:d.a.fieldName},"Followed:"),a.followed?"Yes":"No")),a.followed?n.a.createElement(m.a,{className:d.a.btn,disabled:s.some((function(e){return e===a.id})),onClick:function(){r(a.id)}},"Unfollow"):n.a.createElement(m.a,{className:d.a.btn,disabled:s.some((function(e){return e===a.id})),onClick:function(){t(a.id)}},"Follow"))))},p=t(11),b=t(84),g=t(60),E=t(239),N=t(238),h=t.n(N),v=t(322),O=t.n(v),j=function(e){for(var a=e.currentPage,t=e.onPageChanged,s=e.pageSize,c=e.totalItemsCount,l=e.portionSize,o=void 0===l?10:l,i=Math.ceil(c/s),u=[],m=1;m<=i;m++)u.push(m);var f=Math.ceil(i/o),d=Object(r.useState)(1),_=Object(E.a)(d,2),p=_[0],b=_[1],N=(p-1)*o+1,v=p*o+1;return n.a.createElement("div",{className:O.a.paginationWrapper},p>1&&n.a.createElement("button",{onClick:function(){b(p-1)},className:"".concat(O.a.pagBtn," ").concat(O.a.prevBtn,"  ")}),u.filter((function(e){return e>=N&&e<=v})).map((function(e,r){return n.a.createElement("span",{key:"number_items".concat(r),className:h()(Object(g.a)({},O.a.selected,a===e),O.a.numberItem),onClick:function(){t(e)}},e)})),f>p&&n.a.createElement("button",{onClick:function(){return b(p+1)},className:O.a.pagBtn}))},w=function(e){return e.usersState.users},S=function(e){return e.usersState.totalUsersCount},U=function(e){return e.usersState.pageSize},k=function(e){return e.usersState.currentPage},P=function(e){return e.usersState.isFetching},F=function(e){return e.usersState.followingInProgress},I=function(e){return e.usersState.filter},C=t(8),B=t(323),y=t(326),W=t.n(y),M=t(332),x=t(330),z=t.n(x),H=function(e){return{}},T=n.a.memo((function(e){var a=Object(p.d)(I);return n.a.createElement(M.c,{enableReinitialize:!0,initialValues:{term:a.term,friend:String(a.friend)},validate:H,onSubmit:function(a,t){var r=t.setSubmitting,n={term:a.term,friend:"null"===a.friend?null:"true"===a.friend};e.onFilterChanged(n),r(!1)}},(function(e){var a=e.isSubmitting;return n.a.createElement("div",{className:z.a.formWrapper},n.a.createElement(M.b,{className:z.a.usersForm},n.a.createElement(M.a,{type:"text",name:"term",className:z.a.usersSearchInput}),n.a.createElement(M.a,{name:"friend",as:"select",className:z.a.usersSelector},n.a.createElement("option",{value:"null"},"All"),n.a.createElement("option",{value:"true"},"Only following"),n.a.createElement("option",{value:"false"},"Only unfollowing")),n.a.createElement(m.a,{type:"submit",disabled:a,className:z.a.searchBtn},"Find")))}))})),A=t(331),G=t.n(A),J=function(e){var a=e.onFilterChanged;return n.a.createElement("div",{className:G.a.centralMeta},n.a.createElement("div",{className:G.a.leftBlock},n.a.createElement("div",{className:G.a.pageTitle},"Friends / Followers",n.a.createElement("span",{className:G.a.followCount},"55"))),n.a.createElement("div",{className:G.a.rightBlock},n.a.createElement(T,{onFilterChanged:a})))},Y=t(67),q=function(e){var a=Object(p.d)(F),t=Object(p.d)(S),c=Object(p.d)(k),l=Object(p.d)(U),o=Object(p.d)(I),i=Object(p.d)(w),u=Object(p.c)(),m=Object(C.g)();Object(r.useEffect)((function(){var e=B.parse(m.location.search.substring(1)),a=c,t=o;switch(e.page&&(a=Number(e.page)),e.term&&(t=Object(s.a)(Object(s.a)({},t),{},{term:e.term})),e.friend){case"null":t=Object(s.a)(Object(s.a)({},t),{},{friend:null});break;case"true":t=Object(s.a)(Object(s.a)({},t),{},{friend:!0});break;case"false":t=Object(s.a)(Object(s.a)({},t),{},{friend:!1})}u(Object(b.b)(a,l,t))}),[]),Object(r.useEffect)((function(){var e={};o.term&&(e.term=o.term),null!==o.friend&&(e.friend=String(o.friend)),1!==c&&(e.page=String(c)),m.push({pathname:Y.b.DEVELOPERS,search:B.stringify(e)})}),[o,c]);var f=function(e){u(Object(b.a)(e))},d=function(e){u(Object(b.c)(e))};return n.a.createElement("div",{className:W.a.usersPageWrapper},n.a.createElement(J,{onFilterChanged:function(e){u(Object(b.b)(1,l,e))}}),n.a.createElement("div",null,n.a.createElement(j,{currentPage:c,onPageChanged:function(e){u(Object(b.b)(e,l,o))},pageSize:l,totalItemsCount:t}),n.a.createElement("div",{className:W.a.centralUsersMeta},n.a.createElement("div",{className:W.a.row},i.map((function(e){return n.a.createElement(_,{key:e.id,user:e,follow:f,unfollow:d,followingInProgress:a})}))))))},V=t(41),D=function(e){var a=Object(p.d)(P);return n.a.createElement(n.a.Fragment,null,a?n.a.createElement(V.a,null):null,n.a.createElement(q,null))}}}]);
//# sourceMappingURL=6.ef2232c1.chunk.js.map