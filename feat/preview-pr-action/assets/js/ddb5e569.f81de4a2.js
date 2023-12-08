"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[5111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={draft:!1,title:"IPNS | CLI",sidebarCollapsible:!1,sidebar_position:8,date:new Date("2023-01-10T09:00:00.000Z"),description:"Learn to create, publish, and manage IPNS records on Fleek, facilitating dynamic updates to IPFS content. Master the steps with our CLI guide from authentication to resolving records.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},o=void 0,s={unversionedId:"CLI/ipns",id:"CLI/ipns",title:"IPNS | CLI",description:"Learn to create, publish, and manage IPNS records on Fleek, facilitating dynamic updates to IPFS content. Master the steps with our CLI guide from authentication to resolving records.",source:"@site/docs/CLI/ipns.md",sourceDirName:"CLI",slug:"/CLI/ipns",permalink:"/docs/CLI/ipns",draft:!1,tags:[{label:"Accounts",permalink:"/docs/tags/accounts"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"Fleek",permalink:"/docs/tags/fleek"}],version:"current",sidebarPosition:8,frontMatter:{draft:!1,title:"IPNS | CLI",sidebarCollapsible:!1,sidebar_position:8,date:"2023-01-10T09:00:00.000Z",description:"Learn to create, publish, and manage IPNS records on Fleek, facilitating dynamic updates to IPFS content. Master the steps with our CLI guide from authentication to resolving records.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},sidebar:"default",previous:{title:"IPFS | CLI",permalink:"/docs/CLI/ipfs"},next:{title:"Sites | CLI",permalink:"/docs/CLI/sites"}},l={},c=[{value:"What is IPNS?",id:"what-is-ipns",level:3},{value:"Creating an IPNS record",id:"creating-an-ipns-record",level:3},{value:"Publishing a record",id:"publishing-a-record",level:3},{value:"Resolving an IPNS record",id:"resolving-an-ipns-record",level:3},{value:"Listing records",id:"listing-records",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"what-is-ipns"},"What is IPNS?"),(0,a.kt)("p",null,"The InterPlanetary Name System (IPNS) is a system for creating mutable pointers to CIDs known as names or IPNS names. IPNS names can be thought of as links that can be updated over time, while retaining the verifiability of content addressing. In this case in particular, they are mostly used to represent IPFS files (through their hashes)."),(0,a.kt)("p",null,"If you want to know more about IPNS and how it works you can read it ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/concepts/ipns/#interplanetary-name-system-ipns"},"here")),(0,a.kt)("h3",{id:"creating-an-ipns-record"},"Creating an IPNS record"),(0,a.kt)("p",null,"Creating an IPNS record refers to the creation of an IPNS record and signing it with a private key. Note: Currently Fleek holds the private key with wich all records ar being sigend, in future iterations there will be an option for the user to manage their own keys."),(0,a.kt)("p",null,"To create an IPNS record using the CLI you need to be authenticated, with a project selected and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," command."),(0,a.kt)("p",null,"You can optionally associate an IPNS record to a Fleek site, this means everytime you deploy your site the IPNS record will be updated so it points to the site CID."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shellscript",metastring:'filename="Creating an IPNS record with Site"  copy',filename:'"Creating',an:!0,IPNS:!0,record:!0,with:!0,'Site"':!0,"":!0,copy:!0},"> fleek ipns create\n> \u2714 Do you want to assign new IPNS record to the site? \u2026 yes\n> ? Choose existing site: \u203a\n> \u276f   next-site\n> Success! IPNS record created.\n> k51qzi5uqu5dh37ejd3k1mp4tcvwvrmapdfflramb7jki3h3fx2yxea1iahzsw\n> This record will be automatically published when site next-site will be deployed.\n> https://ipfs.io/ipns/k51qzi5uqu5dh37ejd3k1mp4tcvwvrmapdfflramb7jki3h3fx2yxea1iahzsw\n")),(0,a.kt)("p",null,"If you don't want to associate the IPNS record with a site, you can use it freely to point to any valid IPFS CID."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shellscript",metastring:'filename="Creating an IPS record"',filename:'"Creating',an:!0,IPS:!0,'record"':!0},"\u276f fleek ipns create\n> \u2714 Do you want to assign new IPNS record to the site? \u2026 no\n> Success! IPNS record created.\n> k51qzi5uqu5dlnp70jxn79ncjowtomxcg6h0nkhspjzibfx83aqiozdg75oyrk\n> You can now publish this record with the following command:\n> fleek ipns publish --name k51qzi5uqu5dlnp70jxn79ncjowtomxcg6h0nkhspjzibfx83aqiozdg75oyrk --hash <ipfsCid>\n> https://ipfs.io/ipns/k51qzi5uqu5dlnp70jxn79ncjowtomxcg6h0nkhspjzibfx83aqiozdg75oyrk\n")),(0,a.kt)("p",null,"After creating the IPNS you can update it with a CID and publish it to the different nodes so it can be resolved."),(0,a.kt)("h3",{id:"publishing-a-record"},"Publishing a record"),(0,a.kt)("p",null,"Publishing an IPNS record means advertising it so that other nodes can resolve it, thus mapping the record to a CID so that the gateway can resolve to it and direct user to the set content."),(0,a.kt)("p",null,"To publish an IPNS record you can do as follows"),(0,a.kt)("p",null,"To publish an IPNS record with a CID using the CLI you need to be authenticated, with a project selected and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shellscript",metastring:'filename="Creating an IPNS record" copy',filename:'"Creating',an:!0,IPNS:!0,'record"':!0,copy:!0},"> fleek ipns publish k51qzi5uqu5didozh8jmvbnowwj2d545yacagcply19yvjz8rhn0i1hrbw2thy QmRG4xcsmoZuXqKuPz3uVBgvo3GZ6k1kLZWhmvzuKtDr9s\nWARN! Fleek CLI is in beta phase, use it under your own responsibility\n> IPNS record published. You can visit it here:\nhttps://ipfs.io/ipns/k51qzi5uqu5didozh8jmvbnowwj2d545yacagcply19yvjz8rhn0i1hrbw2thy\nWARN! IPNS propagation can take 1 up to 30 minutes.\n")),(0,a.kt)("h3",{id:"resolving-an-ipns-record"},"Resolving an IPNS record"),(0,a.kt)("p",null,"Fleek comes with a built in resolver for IPNS that allows you to get the CID based on an IPNS record."),(0,a.kt)("p",null,"You can use the resolver to see if what is mapped to a record (yours or someones elses)."),(0,a.kt)("p",null,"To resolve an IPNS record using the CLI you need to be authenticated, with a project selected and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"resolve")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shellscript",metastring:'filename="Creating an IPNS record" copy',filename:'"Creating',an:!0,IPNS:!0,'record"':!0,copy:!0},"> fleek ipns resolve k51qzi5uqu5didozh8jmvbnowwj2d545yacagcply19yvjz8rhn0i1hrbw2thy\n> Success! /ipfs/QmRG4xcsmoZuXqKuPz3uVBgvo3GZ6k1kLZWhmvzuKtDr9s\n")),(0,a.kt)("h3",{id:"listing-records"},"Listing records"),(0,a.kt)("p",null,"If at any time you want to check all the IPNS records that were created / published with this project you can do so"),(0,a.kt)("p",null,"To list all the IPNS record using the CLI you need to be authenticated, with a project selected and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shellscript",metastring:'filename="Creating an IPNS record" copy',filename:'"Creating',an:!0,IPNS:!0,'record"':!0,copy:!0},"> fleek ipns list\n> Success! /ipfs/QmRG4xcsmoZuXqKuPz3uVBgvo3GZ6k1kLZWhmvzuKtDr9s\nid                         name                                                            hash                                          \n-----------------------------------------------------------------------------------------------------------------------------------------   \nclcuq190y0000jt08mpjw7pdz  k51qzi5uqu5didozh8jmvbnowwj2d545yacagcply19yvjz8rhn0i1hrbw2thy  QmRG4xcsmoZuXqKuPz3uVBgvo3GZ6k1kLZWhmvzuKtDr9s\n")))}u.isMDXComponent=!0}}]);