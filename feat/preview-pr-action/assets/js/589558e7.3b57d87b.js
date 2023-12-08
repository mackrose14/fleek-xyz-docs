"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[6052],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=i,y=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(y,r(r({ref:t},c),{},{components:a})):n.createElement(y,r({ref:t},c))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4468:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={draft:!1,title:"Gateways",sidebarCollapsible:!1,sidebar_position:5,date:new Date("2023-01-10T09:00:00.000Z"),description:"Dive into storage private gateways with Fleek. Understand their functioning, set up custom domains, and manage content delivery seamlessly.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Edge Platform","CDN","Guide","Learn","Fleek"]},r=void 0,l={unversionedId:"Gateways/index",id:"Gateways/index",title:"Gateways",description:"Dive into storage private gateways with Fleek. Understand their functioning, set up custom domains, and manage content delivery seamlessly.",source:"@site/docs/Gateways/index.md",sourceDirName:"Gateways",slug:"/Gateways/",permalink:"/docs/Gateways/",draft:!1,tags:[{label:"Edge Platform",permalink:"/docs/tags/edge-platform"},{label:"CDN",permalink:"/docs/tags/cdn"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"Fleek",permalink:"/docs/tags/fleek"}],version:"current",sidebarPosition:5,frontMatter:{draft:!1,title:"Gateways",sidebarCollapsible:!1,sidebar_position:5,date:"2023-01-10T09:00:00.000Z",description:"Dive into storage private gateways with Fleek. Understand their functioning, set up custom domains, and manage content delivery seamlessly.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Edge Platform","CDN","Guide","Learn","Fleek"]},sidebar:"default",previous:{title:"DNS",permalink:"/docs/Domains/custom-domains"},next:{title:"Fleek CLI",permalink:"/docs/CLI/"}},s={},d=[{value:"Introduction",id:"introduction",level:3},{value:"What is a private gateway?",id:"what-is-a-private-gateway",level:3},{value:"Creating a private gateway",id:"creating-a-private-gateway",level:3},{value:"Primary Domains",id:"primary-domains",level:3},{value:"Changing a primary domain",id:"changing-a-primary-domain",level:4},{value:"Deleting a custom domain",id:"deleting-a-custom-domain",level:3},{value:"Deleting a private gateway",id:"deleting-a-private-gateway",level:3}],c={toc:d};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2599).Z,width:"1215",height:"750"})),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In this section we will dive deeper into the IPFS private gateways services and how to use them to serve your content to your users. We will go through the following topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is a private gateway?"),(0,i.kt)("li",{parentName:"ul"},"Creating a private gateway"),(0,i.kt)("li",{parentName:"ul"},"Deleting a private gateway")),(0,i.kt)("h3",{id:"what-is-a-private-gateway"},"What is a private gateway?"),(0,i.kt)("p",null,"A private gateway is a service that allows you to serve your content to your users through a custom domain. This means that you can serve your content through a domain like ",(0,i.kt)("inlineCode",{parentName:"p"},"https://mydomain.com")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"https://ipfs.io/ipfs/<hash>"),"."),(0,i.kt)("p",null,"They are private because this gateway only allow the files pinned in you account to be served. By allowing you to set up a custom domain it gives you an extra branding layer to your content."),(0,i.kt)("h3",{id:"creating-a-private-gateway"},"Creating a private gateway"),(0,i.kt)("p",null,"To create a private gateway you will need to have a Fleek project and a custom domain. Currently we are making mandatory that each private gateway has at least one custom domain associated with it to avoid abuse."),(0,i.kt)("p",null,"To set up the gateway you have to go to the project settings and click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Gateways")," tab. In this tab you will see a list of all the gateways you have created for this project. To create a new gateway you need to add a name for it and click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Gateway")," button. Once the gateways is created a modal will appear to add your first custom domain on top of it."),(0,i.kt)("p",null,"You need to add the domain and in similar fashion to how its added to a site in ",(0,i.kt)("a",{parentName:"p",href:"/docs/Domains/custom-domains"},"Custom domains")," section you will need to configure the DNS provider to point to the gateway. Once you have configured the DNS provider you can click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ok, I have added it")," button and and we will run the verification to make sure its setted up correctly."),(0,i.kt)("p",null,"Once the verification is completed you will see the status of the gateway change to ",(0,i.kt)("inlineCode",{parentName:"p"},"Active")," and you will be able to use it to serve your content. You can access the content on your gateway via the domain like this ",(0,i.kt)("inlineCode",{parentName:"p"},"my-gateway-url/ipfs/<cid>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"my-gateway-url/ipns/<cid>")),(0,i.kt)("p",null,"You can set up more than one domain per gateway. To do this you can click on the three dots icon in the gateway row and select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Domain")," option. This will open a modal where you can add a new domain to the gateway."),(0,i.kt)("h3",{id:"primary-domains"},"Primary Domains"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5310).Z,width:"1215",height:"750"})),(0,i.kt)("p",null,"When you have correctly seted up your first domain it will be marked with the tag of ",(0,i.kt)("inlineCode",{parentName:"p"},"Primary"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"Primary")," domain is the main domain for a storage and it will be used inside of the platform for every action that is related to files as source of truth. For example, when you store a file, the domain that will be used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"view file")," button will be the ",(0,i.kt)("inlineCode",{parentName:"p"},"Primary")," domain."),(0,i.kt)("h4",{id:"changing-a-primary-domain"},"Changing a primary domain"),(0,i.kt)("p",null,"At any point, as long as you have another ",(0,i.kt)("inlineCode",{parentName:"p"},"Active")," domain seted up for the Private Gateway you can change the ",(0,i.kt)("inlineCode",{parentName:"p"},"Primary")," domain. To do this, you need to click on the three dots icon in the custom domains table and select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Make Primary")," option. This will change the ",(0,i.kt)("inlineCode",{parentName:"p"},"Primary")," domain to the one you selected. It is important to remind you that you cannot set a domain as ",(0,i.kt)("inlineCode",{parentName:"p"},"Primary")," if it is not ",(0,i.kt)("inlineCode",{parentName:"p"},"Active"),", meaning that we have verified that the domain is correctly configured in your DNS provider."),(0,i.kt)("h3",{id:"deleting-a-custom-domain"},"Deleting a custom domain"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4824).Z,width:"1215",height:"750"})),(0,i.kt)("p",null,"To delete a custom domain, you can on the three dots icon in the custom domains table and select the delete option. This will remove the custom domain from your Private Gateway and will no longer serving the content of your storage. In the case that you are deleting a ",(0,i.kt)("inlineCode",{parentName:"p"},"primary")," domain, as part of the delete process if you have another ",(0,i.kt)("inlineCode",{parentName:"p"},"active")," domains, you will have to select a new ",(0,i.kt)("inlineCode",{parentName:"p"},"primary")," domain."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you remove all the custom domains from all the private gateways in your project, the content of the storage will still be available through the public IPFS gateways.")),(0,i.kt)("h3",{id:"deleting-a-private-gateway"},"Deleting a private gateway"),(0,i.kt)("p",null,"To delete a private gateway, click on the manage button in the gateway row and select the option to delete the gateway. This will remove the gateway and all the content associated to it. You will be asked to confirm the removal of all associated resources within the gateway. Ensure you check the box to the right to acknowledge this action before proceeding."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3067).Z,width:"1215",height:"750"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When you delete a gateway and the domains associates is an async process so the content might be reflected by your domain for a few minutes. We always recomend that you remove the DNS configuration for the domain to avoid any issues.")))}p.isMDXComponent=!0},3067:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/delete-gateway-059eb8a6f9929a6ea62ad1bf2b455eab.png"},2599:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gateway-ui-b7d2ecaeb31ad092ca5c823a7d9a8c13.png"},4824:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/primary-domain-delete-gw-a7ab49b3eb84d8eab6567ad4aae52a96.png"},5310:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/primary-domain-gw-4108ae470810e0c972efc67132012bac.png"}}]);