"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[2731],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,g=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return r?a.createElement(g,n(n({ref:t},d),{},{components:r})):a.createElement(g,n({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,n[1]=l;for(var c=2;c<i;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(7462),o=(r(7294),r(3905));const i={draft:!1,title:"Storage",sidebarCollapsible:!1,sidebar_position:3,date:new Date("2023-01-10T09:00:00.000Z"),description:"Dive into Fleek's decentralized storage service. Offering support for IPFS, Arweave, and Filecoin, Fleek ensures high availability and performance..",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Edge Platform","CDN","Guide","Learn","Fleek"]},n=void 0,l={unversionedId:"Storage/index",id:"Storage/index",title:"Storage",description:"Dive into Fleek's decentralized storage service. Offering support for IPFS, Arweave, and Filecoin, Fleek ensures high availability and performance..",source:"@site/docs/Storage/index.md",sourceDirName:"Storage",slug:"/Storage/",permalink:"/docs/Storage/",draft:!1,tags:[{label:"Edge Platform",permalink:"/docs/tags/edge-platform"},{label:"CDN",permalink:"/docs/tags/cdn"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"Fleek",permalink:"/docs/tags/fleek"}],version:"current",sidebarPosition:3,frontMatter:{draft:!1,title:"Storage",sidebarCollapsible:!1,sidebar_position:3,date:"2023-01-10T09:00:00.000Z",description:"Dive into Fleek's decentralized storage service. Offering support for IPFS, Arweave, and Filecoin, Fleek ensures high availability and performance..",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Edge Platform","CDN","Guide","Learn","Fleek"]},sidebar:"default",previous:{title:"Invitations",permalink:"/docs/Projects/invites"},next:{title:"Sites",permalink:"/docs/Sites/"}},s={},c=[{value:"Introduction",id:"introduction",level:3},{value:"Add a File or Directory",id:"add-a-file-or-directory",level:3},{value:"Accessing a file or directory",id:"accessing-a-file-or-directory",level:3},{value:"Deleting a file or directory",id:"deleting-a-file-or-directory",level:3},{value:"Content Addressing",id:"content-addressing",level:3}],d={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(977).Z,width:"1215",height:"750"})),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In Fleek we offer a storage service that you can use to store your files in a decentralized way. We support the following protocols:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"IPFS"),(0,o.kt)("li",{parentName:"ul"},"Arweave"),(0,o.kt)("li",{parentName:"ul"},"Filecoin")),(0,o.kt)("p",null,"To guarantee the best performance and availability we use a combination of these protocols. We use IPFS as the main storage protocol and we use Arweave and Filecoin as a backup layer. This allows us to provide a high availability and performance service. By default we are using Filecoin as the backup layer but all the configuration can be changed in the storage settings."),(0,o.kt)("p",null,"Storage is a service unique for every project. This means that you can have different storage configurations for each project you have in Fleek."),(0,o.kt)("h3",{id:"add-a-file-or-directory"},"Add a File or Directory"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We are aware that there is a bug in the UI for some users using Firefox and Linux that prevents the upload dialog box from appearing. We are investigating this issue in the meantime in case you are experiencing this issue please try with another browser. More info ",(0,o.kt)("a",{parentName:"p",href:"https://support.mozilla.org/gl/questions/1375307"},"here"),".")),(0,o.kt)("p",null,"To add a file to your storage you first need to navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Files")," section in your project dashboard and click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Upload File")," button. This will open a modal where you can select one or multiple files to upload."),(0,o.kt)("p",null,"This will be uploaded to IPFS and in the background it will be uploading to Filecoin and/or Arweave depending on your configuration."),(0,o.kt)("p",null,"To add a directory simply select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Upload Directory")," button and select the directory you want to upload."),(0,o.kt)("h3",{id:"accessing-a-file-or-directory"},"Accessing a file or directory"),(0,o.kt)("p",null,"To access a file or directory you can click on the three dots icon in the file or directory row and select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Copy URL")," option. This will copy the URL to your clipboard and you can use it to access the file or directory. By default Fleek will be using Public gateways to surface the content. If you want you can set up a custom domain to access the content that will allow you to have a more performant a branded experience."),(0,o.kt)("p",null,"To do this you can follow the steps in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/Gateways"},"Gateways")," section."),(0,o.kt)("h3",{id:"deleting-a-file-or-directory"},"Deleting a file or directory"),(0,o.kt)("p",null,"To delete a file or directory you can click on the three dots icon in the file or directory row and select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Delete")," option. This will remove the file or directory from your storage. This action is irreversible."),(0,o.kt)("h3",{id:"content-addressing"},"Content Addressing"),(0,o.kt)("p",null,"In Fleek, all files in storage are made content-addressable by using IPFS as the addressability layer, which means all files stored on Fleek are stored on IPFS by default aside from the decentralized-storage layer of choice (Filecoin/Arweave). Each file will receive its unique immutable IPFS content hash to make it addressable under a common denominator/format that is standard in web3."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"IPFS hashes look like: ",(0,o.kt)("inlineCode",{parentName:"li"},"QmX4XRaPP6jBSDiYr3tK7fEBWSA5QURS8WZ87ZvPRJgAqK"))),(0,o.kt)("p",null,"And they can be accessed via either Fleek's gateways, or a public gateways such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ipfs.io/ipfs/<yourhash>"),". While immutable, you can use IPNS to map dynamically changing IPFS hashes to a static hash/record (IPNS). See our CLI/SDK section for instructions on how to manage IPNS records."))}u.isMDXComponent=!0},977:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/storage-ui-4e678c810b3cc80cf0e09b975949143f.png"}}]);