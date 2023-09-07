"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[9867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={draft:!1,title:"Invitations",sidebarCollapsible:!1,sidebar_position:3,date:new Date("2023-01-10T09:00:00.000Z"),description:"Welcome to the documentation for the beta of Fleek.xyz(opens in a new tab). Whether you are an expert or an absolute beginner, you'll find your answers here.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},i=void 0,s={unversionedId:"Projects/invites",id:"Projects/invites",title:"Invitations",description:"Welcome to the documentation for the beta of Fleek.xyz(opens in a new tab). Whether you are an expert or an absolute beginner, you'll find your answers here.",source:"@site/docs/Projects/invites.md",sourceDirName:"Projects",slug:"/Projects/invites",permalink:"/docs/Projects/invites",draft:!1,tags:[{label:"Accounts",permalink:"/docs/tags/accounts"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"Fleek",permalink:"/docs/tags/fleek"}],version:"current",sidebarPosition:3,frontMatter:{draft:!1,title:"Invitations",sidebarCollapsible:!1,sidebar_position:3,date:"2023-01-10T09:00:00.000Z",description:"Welcome to the documentation for the beta of Fleek.xyz(opens in a new tab). Whether you are an expert or an absolute beginner, you'll find your answers here.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},sidebar:"default",previous:{title:"Projects",permalink:"/docs/Projects/"},next:{title:"Sites",permalink:"/docs/Sites/"}},l={},c=[{value:"Inviting a new user",id:"inviting-a-new-user",level:3}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Invites are a way to grant access to a another user to one of your projects. The Invited users will be able to perform most of the actions that the owner of the project can do like"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Managing sites"),(0,o.kt)("li",{parentName:"ul"},"Managing domains"),(0,o.kt)("li",{parentName:"ul"},"Managing files"),(0,o.kt)("li",{parentName:"ul"},"Managing Gateways")),(0,o.kt)("p",null,"But will be restricted from doing actions like"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deleting the project"),(0,o.kt)("li",{parentName:"ul"},"Inviting new members")),(0,o.kt)("h3",{id:"inviting-a-new-user"},"Inviting a new user"),(0,o.kt)("p",null,"To invite a new user into your project you need to go to the project settins and select the teams tab. There you will find a list of members in the project and a button to generate a link to invite a new user."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Project Members",src:n(8040).Z,width:"1184",height:"616"}))),(0,o.kt)("p",null,"This link is a unique link that will grant acces once to a user to the project. Once the user has used the link to access the project, the link will be invalidated and a new link will need to be generated to invite a new user. It is not linked to what authentication method the user uses to access the project, so its their choice if they want to use wallet, email or github to access the project."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Invite Link",src:n(1729).Z,width:"442",height:"363"}))))}p.isMDXComponent=!0},1729:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/invite-link-5922071936bb2d947dd6a66778e96938.png"},8040:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/invites-2de711a58f1ed67309c14af44ca07267.png"}}]);