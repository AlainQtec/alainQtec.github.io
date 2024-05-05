import{_ as X}from"./q-uemlvruI.js";import{g as Y,q as tt}from"./q-rN_hsXYx.js";const rt={"images.ctfassets.net":"contentful","cdn.builder.io":"builder.io","images.prismic.io":"imgix","www.datocms-assets.com":"imgix","cdn.sanity.io":"imgix","images.unsplash.com":"imgix","cdn.shopify.com":"shopify","s7d1.scene7.com":"scene7","ip.keycdn.com":"keycdn","assets.caisy.io":"bunny","images.contentstack.io":"contentstack","ucarecdn.com":"uploadcare"},et={"imgix.net":"imgix","files.wordpress.com":"wordpress","b-cdn.net":"bunny","storyblok.com":"storyblok","kc-usercontent.com":"kontent.ai","cloudinary.com":"cloudinary","kxcdn.com":"keycdn","imgeng.in":"imageengine","imagekit.io":"imagekit","cloudimg.io":"cloudimage","ucarecdn.com":"uploadcare"},nt={"/cdn-cgi/image/":"cloudflare","/cdn-cgi/imagedelivery/":"cloudflare_images","/_next/image":"nextjs","/_next/static":"nextjs","/_vercel/image":"vercel","/is/image":"scene7","/_ipx/":"ipx","/_image":"astro","/.netlify/images":"netlify"},U=r=>{if(!r)return r;const t=Number(r);return isNaN(t)?r:Math.round(t)},c=(r,t,n,s,e)=>{n?(e&&(n=U(n)),r.searchParams.set(t,n.toString())):s&&r.searchParams.delete(t)},g=(r,t,n)=>{r.searchParams.has(t)||r.searchParams.set(t,n.toString())},x=(r,t)=>{const n=Number(r.searchParams.get(t));return isNaN(n)?void 0:n},F=r=>{const{pathname:t,search:n}=r;return`${t}${n}`},I=r=>r.hostname==="n"?F(r):r.toString(),f=(r,t)=>typeof r=="string"?new URL(r,t??"http://n/"):r,R=new Map(Object.entries(rt)),st=Object.entries(et);function ot(r){return T(r)||at(r)}function T(r){if(typeof r=="string"&&!r.startsWith("https://"))return!1;const{hostname:t}=f(r);if(R.has(t))return R.get(t);for(const[n,s]of st)if(t.endsWith(`.${n}`))return s;return!1}function at(r){const{pathname:t}=f(r);for(const[n,s]of Object.entries(nt))if(t.startsWith(n))return s;return!1}const it=({url:r,width:t,height:n,format:s})=>{const e=f(r);return t&&t>4e3&&(n&&(n=Math.round(n*4e3/t)),t=4e3),n&&n>4e3&&(t&&(t=Math.round(t*4e3/n)),n=4e3),c(e,"w",t,!0,!0),c(e,"h",n,!0,!0),c(e,"fm",s),g(e,"fit","fill"),e},ct=({url:r,width:t,height:n,format:s})=>{const e=f(r);return c(e,"width",t,!0,!0),c(e,"height",n,!0,!0),c(e,"format",s),t&&n&&(g(e,"fit","cover"),g(e,"sharp","true")),e},ut=({url:r,width:t,height:n,format:s})=>{var o;const e=f(r);if(c(e,"w",t,!0,!0),c(e,"h",n,!0,!0),g(e,"fit","min"),s){e.searchParams.set("fm",s);const a=e.searchParams.get("auto");a==="format"?e.searchParams.delete("auto"):a!=null&&a.includes("format")&&e.searchParams.set("auto",a.split(",").filter(i=>i!=="format").join(","))}else e.searchParams.delete("fm"),(o=e.searchParams.get("auto"))!=null&&o.includes("format")||e.searchParams.append("auto","format");return e},lt=/(.+?)(?:_(?:(pico|icon|thumb|small|compact|medium|large|grande|original|master)|(\d*)x(\d*)))?(?:_crop_([a-z]+))?(\.[a-zA-Z]+)(\.png|\.jpg|\.webp|\.avif)?$/,ft=r=>{const t=f(r),n=t.pathname.match(lt);if(!n)throw new Error("Invalid Shopify URL");const[,s,e,o,a,i,u,l]=n;t.pathname=`${s}${u}`;const m=o||t.searchParams.get("width"),d=a||t.searchParams.get("height");return t.searchParams.delete("width"),t.searchParams.delete("height"),{base:t.toString(),width:Number(m)||void 0,height:Number(d)||void 0,format:l?l.slice(1):void 0,params:{crop:i,size:e},cdn:"shopify"}},mt=({base:r,width:t,height:n,format:s,params:e})=>{const o=f(r);return c(o,"width",t,!0,!0),c(o,"height",n,!0,!0),c(o,"crop",e==null?void 0:e.crop),c(o,"format",s),o},dt=({url:r,width:t,height:n})=>{const s=ft(r);if(!s)return;const e={...s,width:t,height:n};return mt(e)},pt=({url:r,width:t,height:n})=>{const s=f(r);return c(s,"w",t,!0,!0),c(s,"h",n,!0,!0),g(s,"crop","1"),s},gt=({url:r,width:t,height:n})=>{const s=f(r);return c(s,"w",t,!0,!0),c(s,"h",n,!0,!0),c(s,"q",x(s,"q"),!0),s},ht=/https?:\/\/(?<host>[^\/]+)\/(?<cloudName>[^\/]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<idAndFormat>[^\s]+)$/g,$t=r=>r?Object.fromEntries(r.split(",").map(t=>t.split("_"))):{},z=({host:r,cloudName:t,assetType:n,deliveryType:s,signature:e,transformations:o={},version:a,id:i,format:u})=>{u&&(o.f=u);const l=Object.entries(o).map(([d,p])=>`${d}_${p}`).join(",");return`https://${[r,t,n,s,e,l,a,i].filter(Boolean).join("/")}`},A=r=>{const n=[...f(r).toString().matchAll(ht)];if(!n.length)throw new Error("Invalid Cloudinary URL");const s=n[0].groups||{},{transformations:e="",idAndFormat:o,...a}=s;delete s.idAndFormat;const i=o.lastIndexOf("."),u=i<0?o:o.slice(0,i),l=i<0?void 0:o.slice(i+1),{w:m,h:d,f:p,...v}=$t(e),h=p&&p!=="auto"?p:l;return{base:z({...a,id:u,transformations:v}),width:Number(m)||void 0,height:Number(d)||void 0,format:h,cdn:"cloudinary",params:{...s,id:s.deliveryType==="fetch"?o:u,format:h,transformations:v}}},vt=({base:r,width:t,height:n,format:s,params:e})=>{var o;const a=A(r.toString()),i={transformations:{},...a.params,...e,format:s||"auto"};return t&&(i.transformations.w=U(t).toString()),n&&(i.transformations.h=U(n).toString()),(o=i.transformations).c||(o.c="lfill"),z(i)},yt=({url:r,width:t,height:n,format:s="auto"})=>{var a,i;const e=A(r);if(!e)throw new Error("Invalid Cloudinary URL");if(((a=e.params)==null?void 0:a.assetType)!=="image")throw new Error("Cloudinary transformer only supports images");if((i=e.params)!=null&&i.signature)throw new Error("Cloudinary transformer does not support signed URLs");const o={...e,width:t,height:n,format:s};return vt(o)},bt=/https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/image\/(?<transformations>[^\/]+)?\/(?<path>.*)$/g,xt=r=>Object.fromEntries(r.split(",").map(t=>t.split("="))),C=({host:r,transformations:t={},path:n})=>{const s=Object.entries(t).map(([o,a])=>`${o}=${a}`).join(",");return`https://${[r,"cdn-cgi","image",s,n].join("/")}`},D=r=>{const t=f(r),n=[...t.toString().matchAll(bt)];if(!n.length)throw new Error("Invalid Cloudflare URL");const s=n[0].groups||{},{transformations:e,...o}=s,{width:a,height:i,f:u,...l}=xt(e);return C({...o,transformations:l}),{base:t.toString(),width:Number(a)||void 0,height:Number(i)||void 0,format:u,cdn:"cloudflare",params:{...s,transformations:l}}},St=({base:r,width:t,height:n,format:s,params:e})=>{var o;const a=D(r.toString()),i={transformations:{},...a.params,...e};return t&&(i.transformations.width=t==null?void 0:t.toString()),n&&(i.transformations.height=n==null?void 0:n.toString()),s&&(i.transformations.f=s==="jpg"?"jpeg":s),(o=i.transformations).fit||(o.fit="cover"),new URL(C(i))},wt=({url:r,width:t,height:n,format:s="auto"})=>{const e=D(r);if(!e)throw new Error("Invalid Cloudflare URL");const o={...e,width:t,height:n,format:s};return St(o)},_t=({url:r,width:t,height:n})=>{const s=f(r);return c(s,"width",t,!0,!0),t&&n&&g(s,"aspect_ratio",`${t}:${n}`),s},Pt=/(?<id>\/f\/\d+\/\d+x\d+\/\w+\/[^\/]+)\/?(?<modifiers>m\/?(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?)?$/g,Ut=/^(?<modifiers>\/(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?\/?)?(?<id>\/f\/.+)$/g,jt=r=>r?Object.fromEntries(r.split(":").map(t=>{if(!t)return[];const[n,s]=t.split("(");return[n,s.replace(")","")]})):{},It=r=>{if(!r)return;const t=Object.entries(r).map(([n,s])=>`${n}(${s??""})`);if(t.length!==0)return`filters:${t.join(":")}`},Ot=r=>{const t=f(r),n=t.hostname==="img2.storyblok.com"?Ut:Pt,[s]=t.pathname.matchAll(n);if(!s||!s.groups)throw new Error("Invalid Storyblok URL");const{id:e,crop:o,width:a,height:i,filters:u,flipx:l,flipy:m}=s.groups,{format:d,...p}=jt(u);return t.hostname==="img2.storyblok.com"&&(t.hostname="a.storyblok.com"),{base:t.origin+e,width:Number(a)||void 0,height:Number(i)||void 0,format:d,params:{crop:o,filters:p,flipx:l,flipy:m},cdn:"storyblok"}},Et=({base:r,width:t=0,height:n=0,format:s,params:e={}})=>{const{crop:o,filters:a,flipx:i="",flipy:u=""}=e,l=`${i}${t}x${u}${n}`;return new URL([r,"m",o,l,It(a),s].filter(Boolean).join("/"))},Rt=({url:r,width:t,height:n,format:s})=>{const e=Ot(r);if(e)return s&&(e.params||(e.params={filters:{}}),e.params.filters||(e.params.filters={}),e.params.filters.format=s),Et({...e,width:t,height:n})},Wt=({url:r,width:t,height:n,format:s})=>{const e=f(r);return c(e,"w",t,!0,!0),c(e,"h",n,!0,!0),c(e,"fm",s,!0),t&&n&&g(e,"fit","crop"),e},W=r=>{const n=f(r).searchParams.get("url");if(!n||!n.startsWith("http"))return!1;const s=T(n);return s?{cdn:s,url:n}:!1},Nt=({base:r,width:t,params:{quality:n=75,root:s="_vercel"}={}})=>{const e=new URL("http://n");return e.pathname=`/${s}/image`,e.searchParams.set("url",r.toString()),c(e,"w",t,!1,!0),g(e,"q",n),F(e)},M=({url:r,width:t,cdn:n})=>{const s=f(r),e=s.pathname.startsWith("/_next/image")||s.pathname.startsWith("/_vercel/image"),o=e?s.searchParams.get("url"):r.toString();if(o)return c(s,"w",t,!0,!0),e?I(s):Nt({base:o,width:t,params:{root:n==="nextjs"?"_next":"_vercel"}})},kt=r=>M({...r,cdn:"nextjs"}),Lt=({url:r,width:t,height:n,format:s})=>{const e=f(r);return c(e,"wid",t,!0,!0),c(e,"hei",n,!0,!0),c(e,"fmt",s,!0),c(e,"qlt",x(e,"qlt"),!0),c(e,"scl",x(e,"scl"),!0),g(e,"fit","crop"),!t&&!n&&g(e,"scl",1),e},qt=({url:r,width:t,height:n,format:s})=>{const e=f(r);return c(e,"width",t,!0,!0),c(e,"height",n,!0,!0),c(e,"format",s,!0),c(e,"quality",x(e,"quality"),!0),g(e,"enlarge",0),e},Ft=({url:r,width:t,height:n,format:s})=>{const e=f(r);return c(e,"width",t,!0,!0),c(e,"height",n,!0,!0),c(e,"format",s),c(e,"quality",x(e,"quality"),!0),e},j={width:"w",height:"h",autoWidthWithFallback:"w_auto",auto_width_fallback:"w_auto",scaleToScreenWidth:"pc",scale_to_screen_width:"pc",crop:"cr",outputFormat:"f",format:"f",fit:"m",fitMethod:"m",compression:"cmpr",sharpness:"s",rotate:"r",inline:"in",keepMeta:"meta",keep_meta:"meta",noOptimization:"pass",no_optimization:"pass",force_download:"dl",max_device_pixel_ratio:"maxdpr",maxDevicePixelRatio:"maxdpr"};function Tt(r){return Object.keys(j).find(s=>j[s]===r)||""}function zt(r){let t=r.toString(),n=[];if(t){let s=t.split("imgeng=");s.length>1&&(n=s[1].split("/"))}return n}function At(r){let t=r.toString(),n="";if(t){let s=t.split("imgeng=");s.length>1?n=s[0].slice(0,-1):n=t}return n}const Ct=({url:r,width:t,height:n,format:s})=>{const e=f(r),o=At(e);let a={};const i=e.toString()===o?[]:zt(e);i.length&&(a=Ht(i)),t&&(a.width=t),n&&(a.height=n),s&&(a.format=s),a.hasOwnProperty("fit")||(a={...a,fit:"cropbox"});let u=Dt(a),l=Mt(u),m=l===""?"":o.includes("?")?"&":"?";return`${o}${m}${l}`};function Dt(r){return Object.entries(r).reduce((t,[n,s])=>t+Bt(n,s),"")}function Mt(r){return r&&r!==""?`imgeng=${r}`:""}function Bt(r,t){let n=j[r];return n&&(t||t===0)?`/${n}_${t}`:""}function Ht(r){let t={};return r.forEach(n=>{let s=n.split("_");if(s.length>1){let e=s[0],o=s[1],a=Tt(e);a&&(t[a]=o)}}),t}const Vt=({url:r,width:t,height:n,format:s})=>{const e=f(r);return c(e,"width",t,!0,!0),c(e,"height",n,!0,!0),c(e,"format",s),e.searchParams.has("format")||g(e,"auto","webp"),t&&n&&g(e,"fit","crop"),e},Zt=/https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/imagedelivery\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g,Jt=r=>{var t;return Object.fromEntries(((t=r==null?void 0:r.split(","))==null?void 0:t.map(n=>n.split("=")))??[])},Kt=({host:r,accountHash:t,transformations:n={},imageId:s})=>{const e=Object.entries(n).map(([a,i])=>`${a}=${i}`).join(",");return`https://${[r,"cdn-cgi","imagedelivery",t,s,e].join("/")}`},B=r=>{const t=f(r),n=[...t.toString().matchAll(Zt)];if(!n.length)throw new Error("Invalid Cloudflare Images URL");const s=n[0].groups||{},{transformations:e,...o}=s,{w:a,h:i,f:u,...l}=Jt(e);return{base:t.toString(),width:Number(a)||void 0,height:Number(i)||void 0,format:u,cdn:"cloudflare_images",params:{...o,transformations:l}}},Qt=({base:r,width:t,height:n,format:s,params:e})=>{var o;const a=B(r.toString()),i={transformations:{},...a.params,...e};return t&&(i.transformations.w=t==null?void 0:t.toString()),n&&(i.transformations.h=n==null?void 0:n.toString()),s&&(i.transformations.f=s),(o=i.transformations).fit||(o.fit="cover"),new URL(Kt(i))},Gt=({url:r,width:t,height:n,format:s="auto"})=>{const e=B(r);if(!e)throw new Error("Invalid Cloudflare Images URL");const o={...e,width:t,height:n,format:s};return Qt(o)},Xt=r=>{const t=f(r),[n,...s]=t.pathname.split("/").slice(1),e=Object.fromEntries(n.split(",").map(o=>{const[a,i]=o.split("_");return[a,i]}));if(e.s){const[o,a]=e.s.split("x");e.w||(e.w=o),e.h||(e.h=a)}return{base:s.join("/"),width:Number(e.w)||void 0,height:Number(e.h)||void 0,quality:Number(e.q)||void 0,format:e.f||"auto",params:e,cdn:"ipx"}},N=({base:r,width:t,height:n,format:s,params:e})=>{const o=(e==null?void 0:e.modifiers)??{};t&&n?o.s=`${t}x${n}`:t?o.w=`${t}`:n&&(o.h=`${n}`),s&&(o.f=s);const a=e!=null&&e.base.endsWith("/")?e==null?void 0:e.base:`${e==null?void 0:e.base}/`,i=Object.entries(o).map(([m,d])=>`${m}_${d}`).join(","),u=r.toString(),l=u.startsWith("/")?u.slice(1):u;return`${a}${i}/${l}`},Yt=r=>{var a,i,u,l;const t=String(r.url),n=f(t),s=n.pathname.startsWith("/_ipx")&&n.hostname!=="n"?`${n.origin}/_ipx`:"/_ipx",e=((i=(a=r.cdnOptions)==null?void 0:a.ipx)==null?void 0:i.base)??s;if(e&&e!=="/"&&t.startsWith(e)){const m=Xt(t.replace(e,""));return N({...m,...r,params:{...(u=r.cdnOptions)==null?void 0:u.ipx,base:e}})}return N({...r,base:t,params:{...(l=r.cdnOptions)==null?void 0:l.ipx,base:e}})},tr=({url:r,width:t,height:n,format:s})=>{const e=f(r),o=I(new URL(e.pathname,e.origin)),a={searchParams:new URLSearchParams};return c(a,"href",o,!0,!0),c(a,"w",t,!0,!0),c(a,"h",n,!0,!0),c(a,"f",s),`/_image?${a.searchParams.toString()}`},rr=new Set(["w","h","q","fm","url","width","height","quality"]),er=r=>{const t=f(r),n=Number(t.searchParams.get("w")??t.searchParams.get("width"))??void 0,s=Number(t.searchParams.get("h")??t.searchParams.get("height"))??void 0,e=Number(t.searchParams.get("q")??t.searchParams.get("quality"))||void 0,o=t.searchParams.get("fm")||void 0,a=t.searchParams.get("url")||"",i={quality:e};return t.searchParams.forEach((u,l)=>{rr.has(l)||(i[l]=u)}),t.search="",{base:a,width:n,height:s,format:o,params:i,cdn:"netlify"}},k=({base:r,width:t,height:n,format:s,params:{site:e,quality:o,...a}={}})=>{const i=f("/.netlify/images",e);return Object.entries(a).forEach(([u,l])=>c(i,u,l)),c(i,"q",o,!0,!0),c(i,"w",t,!0,!0),c(i,"h",n,!0,!0),c(i,"fm",s),g(i,"fit","cover"),i.searchParams.set("url",r.toString()),I(i)},nr=r=>{var n,s;const t=f(r.url);if(t.pathname.startsWith("/.netlify/images")){const{params:e,base:o,format:a}=er(t);return k({base:o,format:a,...r,params:{...e,site:t.hostname==="n"?void 0:t.origin}})}return k({...r,base:r.url,params:{site:(s=(n=r.cdnOptions)==null?void 0:n.netlify)==null?void 0:s.site}})},sr=r=>(r.searchParams.get("tr")||"").split(",").reduce((n,s)=>{const[e,o]=s.split("-");return n[e]=o,n},{}),or=({url:r,width:t,height:n,format:s})=>{const e=f(r),o=sr(e);o.w=t&&Math.round(t),o.h=n&&Math.round(n),o.f||(o.f="auto"),s&&(o.f=s);const a=Object.keys(o).map(i=>{const u=o[i];if(u)return`${i}-${u}`}).filter(i=>i).join(",");return e.searchParams.set("tr",a),e},ar=/^https?:\/\/(?<host>[^\/]+)\/(?<uuid>[^\/]+)/g;function H(r){const t=new URL(r),n=t.pathname+t.search+t.hash,s=n.lastIndexOf("http"),e=n.lastIndexOf("/");let o="";return s>=0?o=n.slice(s):e>=0&&(o=n.slice(e+1)),o}function ir(r){return r.startsWith("http")}function cr(r){const t=new URL(r);return{pathname:t.origin+t.pathname||"",search:t.search||"",hash:t.hash||""}}function ur(r){const t=new URL(r),n=H(r),s=ir(n)?cr(n).pathname:n;return t.pathname=t.pathname.replace(s,""),t.search="",t.hash="",t.toString()}const lr=r=>{if(typeof r!="string"||!r)return"";let t=r.trim();return t.startsWith("-/")?t=t.slice(2):t.startsWith("/")&&(t=t.slice(1)),t.endsWith("/")&&(t=t.slice(0,t.length-1)),t};function fr(r){const t=ur(r),n=new URL(t),s=n.pathname.indexOf("/-/");return s===-1?[]:n.pathname.substring(s).split("/-/").filter(Boolean).map(o=>lr(o))}const mr=r=>r.length?r.reduce((t,n)=>{const[s,e]=n.split("/");return{...t,[s]:e}},{}):{},V=({host:r,uuid:t,operations:n={},filename:s})=>{const e=Object.entries(n).map(([a,i])=>`${a}/${i}`).join("/-/");return`https://${[r,t,e?`-/${e}`:"",s].join("/")}`},Z=r=>{const t=f(r),n=[...t.toString().matchAll(ar)];if(!n.length)throw new Error("Invalid Uploadcare URL");const s=n[0].groups||{},{...e}=s,o=H(t.toString()),{format:a,...i}=mr(fr(t.toString())),u=a&&a!=="auto"?a:"auto";return{base:V({...e,filename:o||void 0,operations:{...i,format:u}}),cdn:"uploadcare",params:{...s,filename:o||void 0,operations:{...i,format:u}}}},dr=({base:r,width:t,height:n,params:s})=>{const e=r.toString(),o=Z(e.endsWith("/")?e:`${e}/`),a={operations:{},...o.params,...s};return t&&n?a.operations={...a.operations,resize:`${t}x${n}`}:(t&&(a.operations={...a.operations,resize:`${t}x`}),n&&(a.operations={...a.operations,resize:`x${n}`})),V(a)},pr=({url:r,width:t,height:n})=>{const s=Z(r);if(!s)throw new Error("Invalid Uploadcare URL");const e={...s,width:t,height:n};return dr(e)},L={vercel:W,nextjs:W};function gr(r,t){if(!(t in L))return!1;const n=L[t];return n?n(r):!1}function w(r,t){const n=ot(r)||t;if(!n)return!1;const s=gr(r,n);return s||{cdn:n,url:r}}const _=r=>({imgix:ut,contentful:it,"builder.io":ct,shopify:dt,wordpress:pt,cloudimage:gt,cloudinary:yt,bunny:_t,storyblok:Rt,cloudflare:wt,vercel:M,nextjs:kt,scene7:Lt,"kontent.ai":Wt,keycdn:qt,directus:Ft,imageengine:Ct,contentstack:Vt,cloudflare_images:Gt,ipx:Yt,astro:tr,netlify:nr,imagekit:or,uploadcare:pr})[r];var J=(r,t)=>{if(!(!r||!t))switch(t){case"constrained":return`(min-width: ${r}px) ${r}px, 100vw`;case"fixed":return`${r}px`;case"fullWidth":return"100vw";default:return}},b=r=>r||r===0?`${r}px`:void 0,hr=({width:r,height:t,aspectRatio:n,layout:s,objectFit:e="cover",background:o})=>{const a=[["object-fit",e]];return o!=null&&o.startsWith("https:")||o!=null&&o.startsWith("http:")||o!=null&&o.startsWith("data:")?(a.push(["background-image",`url(${o})`]),a.push(["background-size","cover"]),a.push(["background-repeat","no-repeat"])):a.push(["background",o]),s==="fixed"&&(a.push(["width",b(r)]),a.push(["height",b(t)])),s==="constrained"&&(a.push(["max-width",b(r)]),a.push(["max-height",b(t)]),a.push(["aspect-ratio",n?`${n}`:void 0]),a.push(["width","100%"])),s==="fullWidth"&&(a.push(["width","100%"]),a.push(["aspect-ratio",n?`${n}`:void 0]),a.push(["height",b(t)])),Object.fromEntries(a.filter(([,i])=>i))},$r=[6016,5120,4480,3840,3200,2560,2048,1920,1668,1280,1080,960,828,750,640],q=24,vr=({width:r,layout:t,resolutions:n=$r})=>{if(t==="fullWidth")return n;if(!r)return[];const s=r*2;return t==="fixed"?[r,s]:t==="constrained"?[r,s,...n.filter(e=>e<s)]:[]},yr=({src:r,width:t,layout:n="constrained",height:s,aspectRatio:e,breakpoints:o,cdn:a,transformer:i,format:u})=>{const l=w(r,a);return l&&!i&&(i=_(l.cdn)),i?(o||(o=vr({width:t,layout:n})),o.sort((m,d)=>m-d).map(m=>{let d;return s&&e&&(d=Math.round(m/e)),{url:l?l.url:r,width:m,height:d,format:u}})):[]},K=r=>{let{src:t,cdn:n,transformer:s}=r;const e=w(t,n);return e&&!s&&(s=_(e.cdn)),s?yr({...r,transformer:s}).map(o=>{const a=s(o);return`${a==null?void 0:a.toString()} ${o.width}w`}).join(`,
`):""};function Q({width:r,height:t,priority:n,layout:s="constrained",aspectRatio:e,...o}){return r=r&&Number(r)||void 0,t=t&&Number(t)||void 0,n?(o.loading||(o.loading="eager"),o.fetchpriority||(o.fetchpriority="high")):(o.loading||(o.loading="lazy"),o.decoding||(o.decoding="async")),o.alt===""&&(o.role||(o.role="presentation")),e?r?t||(t=r/e):t&&(r=t*e):r&&t&&(e=r/t),{width:r,height:t,aspectRatio:e,layout:s,...o}}function wr(r){let{src:t,cdn:n,transformer:s,background:e,layout:o,objectFit:a,breakpoints:i,width:u,height:l,aspectRatio:m,unstyled:d,...p}=Q(r);const v=t?w(t,n):void 0;let h=t;if(v&&(h=v.url,s||(s=_(v.cdn))),s&&e==="auto"){const $=m?Math.round(q/m):void 0,S=s({url:h,width:q,height:$});S&&(e=S.toString())}const y={width:u,height:l,aspectRatio:m,layout:o,objectFit:a,background:e};if(p.sizes||(p.sizes=J(u,o)),d||(p.style={...hr(y),...p.style}),s){p.srcset=K({src:h,width:u,height:l,aspectRatio:m,layout:o,breakpoints:i,transformer:s,cdn:n});const $=s({url:h,width:u,height:l});$&&(h=$),(o==="fullWidth"||o==="constrained")&&(u=void 0,l=void 0)}return{...p,src:h==null?void 0:h.toString(),width:u,height:l}}function br(r){return r?r.startsWith("image/")?{format:r.slice(6),mimeType:r}:{format:r,mimeType:`image/${r==="jpg"?"jpeg":r}`}:{}}function _r({media:r,type:t,...n}){let{src:s,cdn:e,transformer:o,layout:a,breakpoints:i,width:u,height:l,aspectRatio:m,sizes:d,loading:p,decoding:v,...h}=Q(n);const y=s?w(s,e):void 0;let $=s;if(y&&($=y.url,o||(o=_(y.cdn))),!o)return{};const{format:S,mimeType:O}=br(t);d||(d=J(u,a));const G=K({src:$,width:u,height:l,aspectRatio:m,layout:a,breakpoints:i,transformer:o,cdn:e,format:S}),E=o({url:$,width:u,height:l});E&&($=E);const P={...h,sizes:d,srcset:G};return r&&(P.media=r),O&&(P.type=O),P}const Pr=Y(tt(()=>X(()=>import("./q-Bv7OD2vq.js"),[]),"s_W1wZaAVNrf0"));export{Pr as I,_r as a,wr as t};
