(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(9093)}])},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(9361).Z,n=i(4941).Z,a=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i,s=e.src,l=e.sizes,h=e.unoptimized,m=void 0!==h&&h,x=e.priority,S=void 0!==x&&x,k=e.loading,N=e.lazyRoot,I=e.lazyBoundary,C=e.className,R=e.quality,_=e.width,O=e.height,B=e.style,P=e.objectFit,D=e.objectPosition,M=e.onLoadingComplete,Q=e.placeholder,L=void 0===Q?"empty":Q,U=e.blurDataURL,q=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),Z=d.useContext(f.ImageConfigContext),V=d.useMemo(function(){var e=p||Z||A.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return o({},e,{allSizes:t,deviceSizes:i})},[Z]),W=l?"responsive":"intrinsic";"layout"in q&&(q.layout&&(W=q.layout),delete q.layout);var T=E;if("loader"in q){if(q.loader){var F=q.loader;T=function(e){e.config;var t=c(e,["config"]);return F(t)}}delete q.loader}var G="";if(function(e){var t;return"object"==typeof e&&(y(e)||void 0!==e.src)}(s)){var H=y(s)?s.default:s;if(!H.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(H)));if(U=U||H.blurDataURL,G=H.src,(!W||"fill"!==W)&&(O=O||H.height,_=_||H.width,!H.height||!H.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(H)))}s="string"==typeof s?s:G;var K=!S&&("lazy"===k||void 0===k);(s.startsWith("data:")||s.startsWith("blob:"))&&(m=!0,K=!1),b.has(s)&&(K=!1),V.unoptimized&&(m=!0);var J=n(d.useState(!1),2),X=J[0],Y=J[1],$=n(g.useIntersection({rootRef:void 0===N?null:N,rootMargin:I||"200px",disabled:!K}),3),ee=$[0],et=$[1],ei=$[2],er=!K||et,en={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ea={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},eo=!1,es=j(_),el=j(O),ec=j(R),ed=Object.assign({},B,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:D}),eu="blur"!==L||X?{}:{backgroundSize:P||"cover",backgroundPosition:D||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(U,'")')};if("fill"===W)en.display="block",en.position="absolute",en.top=0,en.left=0,en.bottom=0,en.right=0;else if(void 0!==es&&void 0!==el){var eA=el/es,eg=isNaN(eA)?"100%":"".concat(100*eA,"%");"responsive"===W?(en.display="block",en.position="relative",eo=!0,ea.paddingTop=eg):"intrinsic"===W?(en.display="inline-block",en.position="relative",en.maxWidth="100%",eo=!0,ea.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(es,"%27%20height=%27").concat(el,"%27/%3e")):"fixed"===W&&(en.display="inline-block",en.position="relative",en.width=es,en.height=el)}var ef={src:v,srcSet:void 0,sizes:void 0};er&&(ef=w({config:V,src:s,unoptimized:m,layout:W,width:es,quality:ec,sizes:l,loader:T}));var eh=s,em="imagesizes";em="imageSizes";var ep=(r(i={},"imageSrcSet",ef.srcSet),r(i,em,ef.sizes),r(i,"crossOrigin",q.crossOrigin),i),eb=d.default.useLayoutEffect,ev=d.useRef(M),ex=d.useRef(s);d.useEffect(function(){ev.current=M},[M]),eb(function(){ex.current!==s&&(ei(),ex.current=s)},[ei,s]);var ey=o({isLazy:K,imgAttributes:ef,heightInt:el,widthInt:es,qualityInt:ec,layout:W,className:C,imgStyle:ed,blurStyle:eu,loading:k,config:V,unoptimized:m,placeholder:L,loader:T,srcString:eh,onLoadingCompleteRef:ev,setBlurComplete:Y,setIntersection:ee,isVisible:er,noscriptSizes:l},q);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:en},eo?d.default.createElement("span",{style:ea},t?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,d.default.createElement(z,Object.assign({},ey))),S?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+ef.src+ef.srcSet+ef.sizes,rel:"preload",as:"image",href:ef.srcSet?void 0:ef.src},ep))):null)};var o=i(6495).Z,s=i(2648).Z,l=i(1598).Z,c=i(7273).Z,d=l(i(7294)),u=s(i(5443)),A=i(9309),g=i(7190),f=i(9977);i(3794);var h=i(2392);function m(e){return"/"===e[0]?e.slice(1):e}var p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},b=new Set,v="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",x=new Map([["default",function(e){var t=e.config,i=e.src,r=e.width,n=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(r,"&q=").concat(n||75)}],["imgix",function(e){var t=e.config,i=e.src,r=e.width,n=e.quality,a=new URL("".concat(t.path).concat(m(i))),o=a.searchParams;return o.set("auto",o.getAll("auto").join(",")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),n&&o.set("q",n.toString()),a.href}],["cloudinary",function(e){var t,i=e.config,r=e.src,n=e.width,a=["f_auto","c_limit","w_"+n,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(i.path).concat(a).concat(m(r))}],["akamai",function(e){var t=e.config,i=e.src,r=e.width;return"".concat(t.path).concat(m(i),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function y(e){return void 0!==e.default}function w(e){var t=e.config,i=e.src,r=e.unoptimized,n=e.layout,o=e.width,s=e.quality,l=e.sizes,c=e.loader;if(r)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,r){var n=e.deviceSizes,o=e.allSizes;if(r&&("fill"===i||"responsive"===i)){for(var s=/(^|\s)(1?\d?\d)vw/g,l=[];c=s.exec(r);c)l.push(parseInt(c[2]));if(l.length){var c,d,u=.01*(d=Math).min.apply(d,a(l));return{widths:o.filter(function(e){return e>=n[0]*u}),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t||"fill"===i||"responsive"===i?{widths:n,kind:"w"}:{widths:a(new Set([t,2*t].map(function(e){return o.find(function(t){return t>=e})||o[o.length-1]}))),kind:"x"}}(t,o,n,l),u=d.widths,A=d.kind,g=u.length-1;return{sizes:l||"w"!==A?l:"100vw",srcSet:u.map(function(e,r){return"".concat(c({config:t,src:i,quality:s,width:e})," ").concat("w"===A?e:r+1).concat(A)}).join(", "),src:c({config:t,src:i,quality:s,width:u[g]})}}function j(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function E(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",r=x.get(i);if(r)return r(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(A.VALID_LOADERS.join(", "),". Received: ").concat(i))}function S(e,t,i,r,n,a){e&&e.src!==v&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(b.add(t),"blur"===r&&a(!0),null==n?void 0:n.current)){var i=e.naturalWidth,o=e.naturalHeight;n.current({naturalWidth:i,naturalHeight:o})}}))}var z=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),r=e.qualityInt,n=e.layout,a=e.className,s=e.imgStyle,l=e.blurStyle,u=e.isLazy,A=e.placeholder,g=e.loading,f=e.srcString,h=e.config,m=e.unoptimized,p=e.loader,b=e.onLoadingCompleteRef,v=e.setBlurComplete,x=e.setIntersection,y=e.onLoad,j=e.onError,E=(e.isVisible,e.noscriptSizes),z=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=u?"lazy":g,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},z,t,{decoding:"async","data-nimg":n,className:a,style:o({},s,l),ref:d.useCallback(function(e){x(e),(null==e?void 0:e.complete)&&S(e,f,n,A,b,v)},[x,f,n,A,b,v,]),onLoad:function(e){S(e.currentTarget,f,n,A,b,v),y&&y(e)},onError:function(e){"blur"===A&&v(!0),j&&j(e)}})),(u||"blur"===A)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},z,w({config:h,src:f,unoptimized:m,layout:n,width:i,quality:r,sizes:E,loader:p}),{decoding:"async","data-nimg":n,style:s,className:a,loading:g}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,i=e.rootRef,c=e.rootMargin,d=e.disabled||!o,u=r(n.useState(!1),2),A=u[0],g=u[1],f=r(n.useState(null),2),h=f[0],m=f[1];return n.useEffect(function(){if(o){if(!d&&!A&&h&&h.tagName){var e,t,r,n,u,f,m;return t=function(e){return e&&g(e)},u=(n=function(e){var t,i={root:e.root||null,margin:e.rootMargin||""},r=l.find(function(e){return e.root===i.root&&e.margin===i.margin});if(r&&(t=s.get(r)))return t;var n=new Map;return t={id:i,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=n.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)})},e),elements:n},l.push(i),s.set(i,t),t}(r={root:null==i?void 0:i.current,rootMargin:c})).id,f=n.observer,(m=n.elements).set(h,t),f.observe(h),function(){if(m.delete(h),f.unobserve(h),0===m.size){f.disconnect(),s.delete(u);var e=l.findIndex(function(e){return e.root===u.root&&e.margin===u.margin});e>-1&&l.splice(e,1)}}}}else if(!A){var p=a.requestIdleCallback(function(){return g(!0)});return function(){return a.cancelIdleCallback(p)}}},[h,d,c,i,A]),[m,A,n.useCallback(function(){g(!1)},[])]};var n=i(7294),a=i(9311),o="function"==typeof IntersectionObserver,s=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9093:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return m}});var r=i(5893),n=i(9008),a=i.n(n),o=i(8193),s=i(3750),l=i(7294),c={src:"/_next/static/media/1.d96a8e9f.png",height:750,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAuklEQVR42mMwlJdjAmIGIBAPs9Z5BcQngGwZBghgZGiNcWUBYoamUIfuFRWR/9e2ZvxvSfbrBGKGrowgFobdDfEsQMywqTK25kh7/P8rCyr/X1zcHALEDOfm17EwbCsNZwRihgkMDAwHJtbcOTWvbScQM+xZs4IJiBkYTh07xgzEDMcOHco+e+rU/2uXL/+4cfWqJxAzANnMDCcOHWACYoaj+/adP3X0yP8rF87/v3L+3DwgZrh07iwLANqzXdN5ZDtDAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6},d=i(5675),u=i.n(d),A={src:"/_next/static/media/beautysalon1.78b29f4b.png",height:648,width:1337,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAXElEQVR42h3KMQqEMBAF0Nz/RMuW22zhAUQERRDUTo0zmf9jRsVXv0DSzFQEQMpcqQcSgZBzjnKMy6SqVfX//j4z4gkGvox4xtB3bVOrJZKhuG+QKDtg18vdi5cbvd1bMZzhQYwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},g={src:"/_next/static/media/travel1.f67e2c67.png",height:654,width:1334,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/APrr3fnr3f/w4vbl1fnm1//u4frp3Pzq3AD5/P/3+f/m7PXn6/Xd6vTm7fb7+v/7+f8A/Pv/7e/0RHuNa5SjjZaHxNLL+/r//Pb7AP36/+3x91qhr2egrZeVgMbg2vX2+/73/b3+UrNylxM0AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},f={src:"/_next/static/media/champions1.62342d10.png",height:655,width:1345,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAATElEQVR42iXJMRKAIAxEUeIQuP9hnLHzTGoFgR8jvmKL/bIfp4NqVlVggnVzd7nuJyWptUSbAYYNILfW5ZOA+B36CpssZharoZT/eQHlzTTrEbr4fgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},h={src:"/_next/static/media/tcc.7695e172.jpeg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAT/2gAMAwEAAhADEAAAALsI/wD/xAAbEAACAQUAAAAAAAAAAAAAAAACBAASITZTcv/aAAgBAQABPwDGVN4mzzemf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABkRAQACAwAAAAAAAAAAAAAAAAIAAQMREv/aAAgBAwEBPwBtY1yb1VT/2Q==",blurWidth:8,blurHeight:8};function m(){var e=(0,l.useState)(!1),t=e[0],i=e[1];return(0,r.jsxs)("div",{className:t?"dark":"",children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Portfolio"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40",children:[(0,r.jsxs)("section",{className:"min-h-screen",children:[(0,r.jsxs)("nav",{className:"py-10 mb-12 flex justify-between dark:text-white",children:[(0,r.jsx)("h1",{className:"font-burtons text-xl",children:"DevelopedByIgor"}),(0,r.jsxs)("ul",{className:"flex items-center",children:[(0,r.jsx)("li",{children:(0,r.jsx)(s.gLD,{onClick:function(){return i(!t)},className:" cursor-pointer text-2xl"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8",href:"#",children:"Resume"})})]})]}),(0,r.jsxs)("div",{className:"text-center p-10 py-10",children:[(0,r.jsx)("h2",{className:"text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl",children:"Igor Borges"}),(0,r.jsx)("h3",{className:"text-2xl py-2 dark:text-white md:text-3xl",children:"Desenvolvedor Web"}),(0,r.jsx)("p",{className:"text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl",children:"Sou um desenvolvedor com foco na cria\xe7\xe3o e desenvolvimento de sistemas. Sou extremamente motivado para adquirir conhecimento e aprimorar minhas Skills!"}),(0,r.jsxs)("div",{className:"text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400",children:[(0,r.jsxs)("a",{href:"https://www.instagram.com/ig0r_b0rges/",target:"_blank",rel:"noreferrer",children:[" ",(0,r.jsx)(o.t0C,{})]}),(0,r.jsxs)("a",{href:"https://www.linkedin.com/in/igorborges812/",target:"_blank",rel:"noreferrer",children:[" ",(0,r.jsx)(o._iD,{})]}),(0,r.jsxs)("a",{href:"https://github.com/igorborges812",target:"_blank",rel:"noreferrer",children:[" ",(0,r.jsx)(o.RrF,{})]})]}),(0,r.jsx)("div",{className:"mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96",children:(0,r.jsx)(u(),{src:c,layout:"fill",objectFit:"cover"})})]})]}),(0,r.jsxs)("section",{className:"py-10",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-3xl py-1 dark:text-white ",children:"Portf\xf3lio"}),(0,r.jsx)("p",{className:"text-md py-2 leading-8 text-gray-800 dark:text-gray-200",children:"Desde o in\xedcio da minha jornada como desenvolvedor, desenvolvi alguns projetos pessoais que contribuiram para a evolu\xe7\xe3o das minhas skills at\xe9 o presente momento."}),(0,r.jsx)("p",{className:"text-md py-2 leading-8 text-gray-800 dark:text-gray-200",children:"Aqui est\xe3o alguns dos meus projetos."})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap",children:[(0,r.jsx)("div",{className:"basis-1/3 flex-1 ",children:(0,r.jsx)("a",{href:"https://gentle-mermaid-1e264e.netlify.app",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(u(),{className:"rounded-lg object-cover",width:"100%",height:"100%",layout:"responsive",src:A})})}),(0,r.jsx)("div",{className:"basis-1/3 flex-1",children:(0,r.jsx)("a",{href:" https://verdant-medovik-74fa29.netlify.app",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(u(),{className:"rounded-lg object-cover",width:"100%",height:"100%",layout:"responsive",src:g})})}),(0,r.jsx)("div",{className:"basis-1/3 flex-1",children:(0,r.jsxs)("a",{href:"https://jolly-kangaroo-53245a.netlify.app",target:"_blank",rel:"noreferrer",children:[(0,r.jsx)(u(),{className:"rounded-lg object-cover",width:"100%",height:"100%",layout:"responsive",src:f})," "]})}),(0,r.jsx)("div",{className:"basis-1/3 flex-1",children:(0,r.jsx)("a",{href:"https://github.com/igorborges812/TCC--IFC",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(u(),{className:"rounded-lg object-cover",width:"100%",height:"100%",layout:"responsive",src:h})})})]})]})]})]})}},9008:function(e,t,i){e.exports=i(5443)},5675:function(e,t,i){e.exports=i(8045)},8357:function(e,t,i){"use strict";i.d(t,{w_:function(){return l}});var r=i(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(n),o=function(){return(o=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(i[r[n]]=e[r[n]]);return i};function l(e){return function(t){return r.createElement(c,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,i){return r.createElement(t.tag,o({key:i},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var i,n=e.attr,a=e.size,l=e.title,c=s(e,["attr","size","title"]),d=a||t.size||"1em";return t.className&&(i=t.className),e.className&&(i=(i?i+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:i,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==a?r.createElement(a.Consumer,null,function(e){return t(e)}):t(n)}}},function(e){e.O(0,[13,617,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);