"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[6309],{40771:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67154),r=a.n(n),l=a(67294),s=a(67892);const c=({href:e,children:t,...a})=>l.createElement(s.Z,r()({to:e},a),t)},41632:(e,t,a)=>{a.d(t,{c:()=>m});var n=a(67294),r=a(28760),l=a(18261),s=a(28137),c=a(36590),i=a(51079),o=a(47418),u=a(11186);const m=({name:e,uri:t,images:a,authorName:m,isHero:d,onClick:E,testId:g,index:p,requestId:f})=>{let A;return A=d?n.createElement(o.Z,{index:p,onClick:E,headerText:e,featureIdentifier:"audiobook",uri:t,isPlayable:!1,renderCardImage:()=>n.createElement(i.x,{isHero:!0,images:a}),renderSubHeaderContent:()=>n.createElement(n.Fragment,null,n.createElement(r.Dy,{variant:"mesto"},m),n.createElement(u.k,null,"AUDIOBOOK")),testId:g,requestId:f}):n.createElement(c.C,{index:p,onClick:E,headerText:e,featureIdentifier:"audiobook",uri:t,isPlayable:!1,renderCardImage:()=>n.createElement(i.x,{images:a}),renderSubHeaderContent:()=>n.createElement(r.Dy,{as:"div",variant:"mesto"},m),testId:g,requestId:f}),n.createElement(l._,{menu:n.createElement(s.X,{uri:t})},A)}},94522:(e,t,a)=>{a.d(t,{g:()=>E});var n=a(67294),r=a(94184),l=a.n(r);function s(){const e=(e,t)=>{switch(t.type){case"INVALIDATE":return{...e,isValid:!1};case"CACHE_ITEMS":return e.isValid?{...e,items:{...e.items,...t.data},hasData:!0}:{isValid:!0,items:{...t.data},hasData:!0};default:throw new Error("Action not supported")}},[t,a]=(0,n.useReducer)(e,{items:{},isValid:!0,hasData:!1});return{cacheItems:(0,n.useCallback)(((e,t)=>{const n=e.reduce(((e,a,n)=>(e[n+t]=a,e)),{});a({type:"CACHE_ITEMS",data:n})}),[a]),getCachedItems:(0,n.useCallback)(((e,a)=>{const n=[],r=[];for(let l=e;l<=a;l++)t.items[l]||n.push(l),r.push(t.items[l]);return t.isValid?{items:r,missing:n.length>0?{firstMissingIndex:Math.min(...n),lastMissingIndex:Math.max(...n)}:null}:{items:r,missing:{firstMissingIndex:e,lastMissingIndex:a}}}),[t]),invalidateCache:(0,n.useCallback)((()=>{a({type:"INVALIDATE"})}),[a]),hasCachedData:t.hasData}}var c=a(63926),i=a(77323);const o=({renderItems:e,nrItems:t,estimatedItemMaxHeight:a,scrollNodeRef:r,nrRowsOverscan:l=5})=>{const s=(0,n.useRef)(null),o=(0,n.useRef)(null),u=(0,n.useRef)(null),m=(0,n.useRef)(0),d=(0,n.useRef)({rowCount:0,rowHeight:a,columnCount:1}),[E,g]=(0,n.useState)({firstItemToRender:0,lastItemToRender:-1}),p=(0,n.useCallback)(((e,t)=>{const a=r.current;if(!a)return;const n=Math.floor(a.offsetHeight/t)+2*l;d.current={rowCount:n,rowHeight:t,columnCount:e}}),[l,r]),f=(0,n.useCallback)((()=>{const e=r.current;if(!e)return;const a=Math.floor((e.scrollTop-m.current)/d.current.rowHeight),n=Math.max(a-l,0),s=n*d.current.columnCount,c=Math.min((n+d.current.rowCount-1)*d.current.columnCount-1,t-1);s===E.firstItemToRender&&c===E.lastItemToRender||g({firstItemToRender:s,lastItemToRender:c})}),[E.firstItemToRender,E.lastItemToRender,t,l,r]),A=(0,n.useCallback)((t=>e(E.firstItemToRender,E.lastItemToRender,t)),[E.firstItemToRender,E.lastItemToRender,e]),h=(0,n.useCallback)((({columnCount:e,rowHeight:t})=>{const a=t+c.w;a!==d.current.rowHeight&&e>0&&(p(e,a),f())}),[p,f]);(0,n.useEffect)((()=>{const e=u.current,t=r.current;e&&t&&(m.current=e.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop)}),[r]),(0,n.useEffect)((()=>{if(!window.IntersectionObserver)return()=>{};const e=new window.IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&f()}))}));return s.current&&e.observe(s.current),o.current&&e.observe(o.current),()=>{e.disconnect()}}),[f]);const C=Math.ceil(t/d.current.columnCount),y=Math.min(C*d.current.rowHeight,d.current.rowHeight*(l-2)),b=d.current.rowHeight*(E.firstItemToRender/d.current.columnCount),T=E.lastItemToRender/d.current.columnCount+1<C?d.current.rowHeight*(C-d.current.rowCount)-b:0;return n.createElement("div",{ref:u,className:i.Z.wrapper,style:{height:C*d.current.rowHeight+"px"}},n.createElement("div",{ref:s,className:i.Z.topSentinel,style:{height:`${b+y}px`}},n.createElement("div",{style:{height:`${y}px`}})),n.createElement("div",{style:{transform:`translateY(${b}px)`}},n.createElement(c.T,{render:A,onLayoutChange:h})),n.createElement("div",{ref:o,className:i.Z.bottomSentinel,style:{height:`${T+y}px`}},n.createElement("div",{style:{height:`${y}px`}})))};var u=a(32648),m=a(56170);const d="lA3jnNwnLc3CoYKT06Vz";function E({renderCard:e,nrCards:t,fetchData:a,limit:r=50,cardGridApiRef:c}){const{scrollNodeRef:i}=(0,n.useContext)(u.VX),{invalidateCache:E,getItemsFromCache:g,hasCachedData:p}=function(e){const{getCachedItems:t,cacheItems:a,invalidateCache:r,hasCachedData:l}=s(),c=(0,n.useRef)(!1),i=(0,n.useRef)(!1);(0,n.useEffect)((()=>(i.current=!0,()=>{i.current=!1})));const o=(0,n.useCallback)(((t,n)=>{const r=Math.max(t,0);c.current||(c.current=!0,e(r,n).then((e=>{c.current=!1,e.length>0&&i.current&&a(e,r)})))}),[a,e]);return{invalidateCache:r,getItemsFromCache:(0,n.useCallback)(((e,a,n)=>{const{items:r,missing:l}=t(e,a);if(l){const{firstMissingIndex:t,lastMissingIndex:r}=l;r===a?o(t,n):t===e?o(r-n+1,n):o(t,r-t+1)}return r}),[o,t]),hasCachedData:l}}(a);(0,n.useImperativeHandle)(c,(()=>({update:()=>E()})));return n.createElement("div",{className:l()({[d]:!p})},n.createElement(o,{renderItems:(a,l,s)=>{const c=g(a,l,r);return-1===l&&t>0?[n.createElement(m.P,{key:"placeholder",index:0})]:c.map(((t,r)=>(t?e(t,a+r,s):null)??n.createElement(m.P,{key:r,index:r})))},scrollNodeRef:i,nrItems:t,estimatedItemMaxHeight:500}))}},22578:(e,t,a)=>{a.d(t,{$:()=>d});var n=a(67294),r=a(64593),l=a(20657),s=a(69691),c=a(8341),i=a(89952),o=a(52883),u=a(24183);function m(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const d=({children:e,usePlayingItem:t})=>{let a=m(e);(e=>{const{mainLandmarkRef:t}=(0,u.Oh)(),a=(0,o.k6)(),r=a.location?.state?.preventMoveFocus,l=(0,n.useRef)(a.length<2);l.current=a.length<2,(0,n.useEffect)((()=>{const a=t.current;!r&&!l.current&&a&&e&&(a.setAttribute("aria-label",e),a.focus())}),[e,t,r])})(e);const{isPlaying:d}=(0,s.IK)(),E=(0,c.Y)((e=>e?.item));return E&&(d||t)&&((0,i.G_)(E)?a=[E.name,E.artists.map((e=>e.name)).join(l.ag.getSeparator())].join(" • "):(0,i.iw)(E)?a=[E.name,E.show.name].join(" • "):(0,i.k6)(E)&&(a=m(l.ag.get("ad-formats.advertisement")))),n.createElement(r.q,{defaultTitle:"Spotify",defer:!1},n.createElement("title",null,a))}},70369:(e,t,a)=>{a.d(t,{$:()=>n.$});var n=a(22578)},19565:(e,t,a)=>{a.d(t,{u:()=>p});var n=a(67294),r=a(94184),l=a.n(r),s=a(28760),c=a(99450),i=a(51775),o=a(40771);const u="FvfvGU3jvHRskUU9v9_8",m="Q9AlbZn2EGzy3MTWXa8X",d="mxmxS0y8LiwSs5nueKPT",E="GXxVAveNFStY3pBI_NO4",g="eHcXC2s97InYP7rMNT0H",p=n.memo((function(e){const{children:t,message:a,title:r,linkTitle:p,linkTo:f,onClick:A,renderInline:h=!1}=e,{isXSOnly:C,isSMOnly:y}=(0,i.e)(),b=C||y;return n.createElement("section",{className:l()(u,{[m]:h})},t,n.createElement(s.Dy,{as:"h1",variant:b?"cello":"alto",className:E},r),n.createElement(s.Dy,{variant:b?"mesto":"ballad",className:g},a),p&&(f||A)&&n.createElement(c.D,{colorSet:"invertedLight",className:d,href:f,onClick:A,component:o.Z},p))}))},95289:(e,t,a)=>{a.d(t,{A:()=>C});var n=a(67294),r=a(94184),l=a.n(r),s=a(28760),c=a(62312),i=a(41374),o=a(20246),u=a(58238),m=a(91883),d=a(30005),E=a(36652),g=a(21691),p=a(28248);const f=({heading:e,selected:t,onSelect:a,options:r,sortOrder:l})=>{let c;return l&&(l===p.kn.ASC||l===p.kn.SECONDARY_ASC?c=n.createElement(u.C,{iconSize:16}):l!==p.kn.DESC&&l!==p.kn.SECONDARY_DESC||(c=n.createElement(m.B,{iconSize:16}))),n.createElement(d.v,null,e?n.createElement(E.F,null,e):null,r.map((({key:e,value:r})=>n.createElement(g.s,{role:"menuitemradio","aria-checked":e===t.key&&!c,key:e,onClick:()=>a(e),icon:e===t.key&&c},n.createElement(s.Dy,{variant:"mesto"},r)))))},A="w6j_vX6SF5IxSXrrkYw5",h="CbHJjxYxldG7uUPMYMaP";const C=({heading:e,options:t,selected:a,onSelect:r,isSelectionChanged:u,sortOrder:m,variant:d="mesto",semanticColor:E,disabled:g,onClick:p})=>{const[C]=t;a||(a=C);const y=u?u(a):a!==C;return n.createElement(o.y,{menu:n.createElement(f,{selected:a,options:t,onSelect:r,sortOrder:m,heading:e})},((e,t,r)=>n.createElement("button",{className:l()(A,{[h]:y}),onClick:e=>{g||(p?.(e),t(e))},ref:r,type:"button"},n.createElement(s.Dy,{semanticColor:E,variant:d},a.value),e?n.createElement(c.U,{iconSize:16}):n.createElement(i.i,{iconSize:16}))))}},1463:(e,t,a)=>{a.d(t,{n:()=>R});var n=a(67294),r=a(94184),l=a.n(r),s=a(52883),c=a(28760),i=a(62312),o=a(41374),u=a(20657),m=a(32648),d=a(64005),E=a(85951);var g=a(32626),p=a(43031),f=a(30005),A=a(21691);const h="BkpKedcdaMGbvgXMlmcg",C="muYk5XIwKmqR9iNibk_f",y="queue-tabBar-header",b="m20ShRDiGGDpJ5LSABTi",T="Hvv0e7WKQ4kyftgSQJhg",I="yxf_6IsQEmHjijEBUMTP",L="oaNVBli46GtVjaQKB15g",k="JdlKTdpMquftpMwwegZo",S="Nts_ArOCGeROTDZND3M6",v="FvDsfgxSvLvL3q8d7nQv",D=({items:e,activeItemId:t})=>n.createElement(f.v,null,e.map((e=>e.disabled?n.createElement(A.s,{key:e.uri,disabled:!0,role:"menuitemradio",className:I,onClick:e.handleClick},e.title):n.createElement(A.s,{key:e.uri,role:"menuitemradio",to:e.to,exact:!0,"aria-checked":e.itemId===t,className:I,activeClassName:L,onClick:e.handleClick},e.title)))),R=n.memo((function({isCentered:e,links:t,landmarkLabel:a,className:r}){const f=(0,n.useRef)(null),[A,I]=(0,n.useState)([]),[R,_]=(0,n.useState)(0),[O,N]=(0,n.useState)([]),x=function(){const[e,t]=(0,n.useState)(window.innerWidth),{scrollNodeChildRef:a}=(0,n.useContext)(m.VX),r=(0,d.y)((e=>{e?.width&&t(e.width)}),250);return(0,E.y)({refOrElement:a,observeOnly:"width",onResize:r}),e}()??1/0,{pathname:P}=(0,s.TH)(),B=t.find((e=>e.to===P));return(0,n.useEffect)((()=>{f.current&&_(f.current.clientWidth)}),[x]),(0,n.useEffect)((()=>{if(!f.current)return;const e=Array.from(f.current.children).map((e=>e.clientWidth));I(e)}),[t]),(0,n.useEffect)((()=>{if(!f.current)return;if(A.slice(0,-1).reduce(((e,t)=>e+t),0)<=R)return void N([]);const e=A.reduce(((e,t)=>e>t?e:t),0),t=[];let a=e;A.forEach(((e,n)=>{R>=a+e?a+=e:t.push(n)})),N(t)}),[R,A]),n.createElement("nav",{className:l()(r,h),"aria-label":a},n.createElement("ul",{className:e?C:S,ref:f},t.filter(((e,t)=>!O.includes(t))).map((e=>(e?.render??(e=>e))(n.createElement("li",{key:e.to,className:y},e.disabled?n.createElement("div",{className:k},n.createElement(c.Dy,{variant:"mestoBold"},e.title)):n.createElement(p.O,{exact:!0,className:k,activeClassName:L,to:e.to,onClick:e.handleClick},n.createElement(c.Dy,{variant:"mestoBold"},e.title)))))),O.length||0===A.length?n.createElement("li",{className:y},n.createElement(g.xV,{renderInline:!0,menu:n.createElement(D,{items:t.filter(((e,t)=>O.includes(t))),activeItemId:B?.itemId})},((e,t,a)=>n.createElement("button",{className:l()(b,{[T]:B}),type:"button",onClick:t,ref:a},n.createElement(c.Dy,{variant:"mestoBold"},B?B.title:u.ag.get("more")),e?n.createElement(i.U,{iconSize:16,className:v}):n.createElement(o.i,{iconSize:16,className:v}))))):null))}))},1834:(e,t,a)=>{a.d(t,{$:()=>c,Q:()=>s});var n=a(67294),r=a(22583),l=a(97641);const s=(0,n.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:l.oT.ADDED_AT}),c=n.memo((function({uri:e,children:t,defaultSortOption:a}){return n.createElement(r.r,{uri:e,defaultState:a,sortContext:s},t)}))},97641:(e,t,a)=>{a.d(t,{Aq:()=>m,Bf:()=>v,EY:()=>A,G5:()=>y,JV:()=>D,MY:()=>i,Ru:()=>o,ZP:()=>h,a6:()=>p,aY:()=>L,e3:()=>g,ei:()=>c,o$:()=>d,oT:()=>s,pT:()=>I,rJ:()=>S,u3:()=>k,w0:()=>b});var n=a(20657),r=a(74483),l=a(9659);let s;!function(e){e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER"}(s||(s={}));const c={"show-alphabetical":s.SHOW_ALPHABETICAL,"book-alphabetical":s.BOOK_ALPHABETICAL,"episode-alphabetical":s.EPISODE_ALPHABETICAL,"playlist-alphabetical":s.PLAYLIST_ALPHABETICAL,"album-alphabetical":s.ALBUM_ALPHABETICAL,"recently-added":s.ADDED_AT,"creator-name":s.CREATOR_NAME,"creator-name-alphabetical":s.CREATOR_NAME_ALPHABETICAL,"album-creator-name":s.ALBUM_CREATOR_NAME,"recently-played":s.RECENTLY_PLAYED,"playlist-most-relevant":s.MOST_RELEVANT,"playlist-custom-order":s.CUSTOM_ORDER},i={[s.RECENTLY_PLAYED]:{key:"recently-played",get value(){return n.ag.get("collection.sort.recently-played")}},[s.ADDED_AT]:{key:"recently-added",get value(){return n.ag.get("collection.sort.recently-added")}},[s.SHOW_ALPHABETICAL]:{key:"show-alphabetical",get value(){return n.ag.get("collection.sort.alphabetical")}},[s.BOOK_ALPHABETICAL]:{key:"book-alphabetical",get value(){return n.ag.get("collection.sort.alphabetical")}},[s.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",get value(){return n.ag.get("collection.sort.alphabetical")}},[s.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",get value(){return n.ag.get("collection.sort.alphabetical")}},[s.ALBUM_CREATOR_NAME]:{key:"album-creator-name",get value(){return n.ag.get("collection.sort.creator")}},[s.CREATOR_NAME]:{key:"creator-name",get value(){return n.ag.get("collection.sort.creator")}},[s.CREATOR_NAME_ALPHABETICAL]:{key:"creator-name-alphabetical",get value(){return n.ag.get("collection.sort.alphabetical")}},[s.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",get value(){return n.ag.get("collection.sort.alphabetical")}},[s.MOST_RELEVANT]:{key:"playlist-most-relevant",get value(){return n.ag.get("collection.sort.most-relevant")}},[s.CUSTOM_ORDER]:{key:"playlist-custom-order",get value(){return n.ag.get("collection.sort.custom-order")}}},o=[s.ADDED_AT,s.ALBUM_ALPHABETICAL,s.CREATOR_NAME],u={[s.ADDED_AT]:{field:r.lY.ADDED_AT,order:r.As.DESC},[s.ALBUM_ALPHABETICAL]:{field:r.lY.NAME,order:r.As.ASC},[s.CREATOR_NAME]:{field:r.lY.ARTIST_NAME,order:r.As.ASC}},m=e=>{if(o.includes(e))return u[e]},d=[s.ADDED_AT,s.CREATOR_NAME_ALPHABETICAL],E={[s.ADDED_AT]:{field:r.hx.ADDED_AT,order:r.As.DESC},[s.CREATOR_NAME_ALPHABETICAL]:{field:r.hx.NAME,order:r.As.ASC}},g=e=>{if(d.includes(e))return E[e]},p=[s.ADDED_AT,s.SHOW_ALPHABETICAL],f={[s.ADDED_AT]:{field:r.hx.ADDED_AT,order:r.As.DESC},[s.SHOW_ALPHABETICAL]:{field:r.aW.NAME,order:r.As.ASC}},A=e=>{if(p.includes(e))return f[e]},h=[s.ADDED_AT,s.BOOK_ALPHABETICAL],C={[s.ADDED_AT]:r.VN.ADDED_AT,[s.BOOK_ALPHABETICAL]:r.VN.NAME},y=e=>{if(h.includes(e))return C[e]},b=[s.MOST_RELEVANT,s.RECENTLY_PLAYED,s.ADDED_AT,s.PLAYLIST_ALPHABETICAL,s.CUSTOM_ORDER],T={[s.ADDED_AT]:{field:l.bD.ADDED_AT,order:l.As.DESC},[s.RECENTLY_PLAYED]:{field:l.bD.RECENTLY_PLAYED,order:l.As.ASC},[s.PLAYLIST_ALPHABETICAL]:{field:l.bD.NAME,order:l.As.ASC},[s.MOST_RELEVANT]:{field:l.bD.RELEVANCE,order:l.As.DESC},[s.CUSTOM_ORDER]:void 0},I=e=>{if(b.includes(e))return T[e]},L=s.ADDED_AT,k=s.ADDED_AT,S=s.ADDED_AT,v=s.MOST_RELEVANT,D=s.ADDED_AT},86652:(e,t,a)=>{a.d(t,{h:()=>E});var n=a(67294),r=a(98816),l=a(61048),s=a(45342),c=a(54444),i=a(95289),o=a(1834),u=a(97641);const m=n.memo((function({sortOptions:e,onSort:t}){const{sortState:a,setSortState:r}=(0,n.useContext)(o.Q),l=(0,n.useCallback)((e=>{const a=u.ei[e];t?.(a),r(a)}),[t,r]),s=e.map((e=>u.MY[e])),c=u.MY[a];return n.createElement(i.A,{options:s,onSelect:l,selected:c})})),d="VuUpAVlUW_OfMfOcDEID",E=n.memo((function({filterPlaceholder:e,sortOptions:t}){const{spec:a,logger:i}=(0,c.fU)(r.createDesktopSearchBarEventFactory,{}),o=(0,n.useContext)(s.H),u=(0,n.useCallback)((()=>{i.logInteraction(a.filterFieldFactory().keyStrokeFilter())}),[i,a]),E=(0,n.useCallback)((()=>{i.logInteraction(a.filterFieldFactory().hitClearFilter())}),[i,a]),g=(0,n.useCallback)((()=>{i.logInteraction(a.sortButtonFactory().hitSort())}),[i,a]);return n.createElement("div",{className:d},o?.getCapabilities().canFilter?n.createElement(n.Suspense,{fallback:null},n.createElement(l.K,{placeholder:e,onFilter:u,onClear:E})):null,o?.getCapabilities().canSort?n.createElement(m,{sortOptions:t,onSort:g}):null)}))},47032:(e,t,a)=>{a.d(t,{$:()=>n.$,Q:()=>n.Q});var n=a(1834)},38911:(e,t,a)=>{a.d(t,{Aq:()=>n.Aq,Bf:()=>n.Bf,EY:()=>n.EY,G5:()=>n.G5,JV:()=>n.JV,Ru:()=>n.Ru,ZP:()=>n.ZP,a6:()=>n.a6,aY:()=>n.aY,e3:()=>n.e3,o$:()=>n.o$,oT:()=>n.oT,pT:()=>n.pT,rJ:()=>n.rJ,u3:()=>n.u3,w0:()=>n.w0});var n=a(97641)},3528:(e,t,a)=>{a.r(t),a.d(t,{default:()=>lt});var n=a(67294),r=a(46458),l=a(87577),s=a(73305),c=a(20657),i=a(70369),o=a(35796),u=a(13983),m=a(49207);const d=(0,a(20573).P1)((e=>e.features),(e=>e?.enableShows||!1));var E=a(28760),g=a(72803),p=a(3634),f=a(94522),A=a(19565),h=a(84200),C=a(1663),y=a(22423),b=a(42922),T=a(45342),I=a(54444),L=a(86652),k=a(47032),S=a(38911),v=a(6489),D=a(76391);function R(e,t,a){const n={...a};return n.entities=t?e.items||[]:n.entities.concat(e.items||[]),n.total=e.totalLength,n.next=e.next,n}function _(e,t){const a={...t},n=t.entities.filter((t=>t.uri!==e));return a.total=(t.total||0)-(t.entities.length-n.length),a.entities=n,a}const O={offset:0,limit:1},N=()=>{const e=(0,n.useContext)(T.H);return(e=>{const[t,a]=(0,n.useState)(null),r=(0,n.useCallback)((async()=>{if(!e)return;const t=await e();a(t?.totalLength||0)}),[e]);return(0,n.useEffect)((()=>{null===t&&r()}),[t,r]),{total:t}})((0,n.useCallback)((()=>e?e?.getShows(O):Promise.resolve({totalLength:0})),[e]))};var x=a(37999);const P=n.memo((function({nrAlbums:e}){const t=(0,n.useContext)(T.H),{filter:a}=(0,n.useContext)(y.fo),{sortState:r}=(0,n.useContext)(k.Q),l=(0,n.useRef)(null),[i,o]=(0,n.useState)(e),{spec:u,UBIFragment:m}=(0,I.fU)(g.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:albums",identifier:s.W.YOURLIBRARY_ALBUMS}}),d=(0,n.useMemo)((()=>u.headerFactory()),[u]),A=(0,n.useCallback)((async(e,n)=>{const l=await t.getAlbums({offset:e,limit:n,filter:a,sort:(0,S.Aq)(r)});return l.totalLength!==i&&o(l.totalLength),l.items}),[t,a,r,i]),h=(0,n.useCallback)(((e,t)=>n.createElement(b.ZP,{key:e.uri,value:"card",index:t},n.createElement(p.r,{index:t,uri:e.uri,name:e.name,images:e.images,artists:e.artists,sharingInfo:e.sharingInfo}))),[]);return(0,n.useEffect)((()=>{l.current&&l.current.update()}),[r,a,e]),n.createElement(m,{spec:u},n.createElement(m,{spec:d},n.createElement("div",{className:x.Z.header},n.createElement(E.Dy,{as:"h1",variant:"canon"},c.ag.get("albums")),n.createElement(n.Suspense,{fallback:null},n.createElement(L.h,{filterPlaceholder:c.ag.get("collection.filter.albums"),sortOptions:S.Ru})))),n.createElement(f.g,{nrCards:i,renderCard:h,fetchData:A,cardGridApiRef:l}))})),B=n.memo((function(){const{total:e}=(()=>{const e=(0,n.useContext)(T.H),[t,a]=(0,n.useState)(null),r=(0,n.useCallback)((async()=>{if(!e)return;const t=await(e?.getAlbums(O));a(t?.totalLength||0)}),[e]);return(0,n.useEffect)((()=>{null===t&&r()}),[t,r]),(0,D.b)(v.EW.UPDATE,r),{total:t}})();return null===e?n.createElement(C.h,{hasError:!1,errorMessage:c.ag.get("error.request-collection-albums-failure")}):e?n.createElement(P,{nrAlbums:e}):n.createElement(A.u,{linkTo:"/search",linkTitle:c.ag.get("collection.empty-page.albums-cta"),message:c.ag.get("collection.empty-page.albums-subtitle"),title:c.ag.get("collection.empty-page.albums-title")},n.createElement(h.Z,null))})),w=n.memo((function(){return n.createElement(k.$,{uri:"collection/albums",defaultSortOption:S.aY},n.createElement(y.hz,{uri:"collection/albums"},n.createElement(B,null)))}));var M=a(5843),H=a(89477),Y=a(63926),U=a(33241),F=a(66257);const V=n.memo((function({nrArtists:e}){const t=(0,n.useContext)(T.H),{filter:a}=(0,n.useContext)(y.fo),{sortState:r}=(0,n.useContext)(k.Q),l=(0,n.useRef)(null),[i,o]=(0,n.useState)(e),{spec:u,UBIFragment:m}=(0,I.fU)(g.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:artists",identifier:s.W.YOURLIBRARY_ARTISTS}}),d=(0,n.useMemo)((()=>u.headerFactory()),[u]),p=(0,n.useCallback)((async(e,n)=>{const l=await t.getArtists({offset:e,limit:n,filter:a,sort:(0,S.e3)(r)});return l.totalLength!==i&&o(l.totalLength),l.items}),[t,a,r,i]),A=(0,n.useCallback)(((e,t)=>n.createElement(b.ZP,{key:e.uri,value:"card",index:t},n.createElement(H.I,{index:t,name:e.name,uri:e.uri,images:e.images}))),[]);return(0,n.useEffect)((()=>{l.current&&l.current.update()}),[r,a,e]),n.createElement(m,{spec:u},n.createElement(m,{spec:d},n.createElement("div",{className:x.Z.header},n.createElement(E.Dy,{as:"h1",variant:"canon"},c.ag.get("artists")),n.createElement(n.Suspense,{fallback:null},n.createElement(L.h,{filterPlaceholder:c.ag.get("collection.filter.artists"),sortOptions:S.o$})))),n.createElement(f.g,{nrCards:i,renderCard:A,fetchData:p,cardGridApiRef:l}))})),Z=n.memo((function({nrArtists:e}){const t=(0,n.useContext)(T.H),[a,r]=(0,n.useState)({entities:[],total:e}),l=(0,n.useRef)(!1),s=(0,n.useRef)(!1),i=(0,n.useCallback)((async()=>{if(!s.current&&!l.current){l.current=!0;const e=await t.getArtists({offset:a.next??void 0});e.next||(s.current=!0),l.current=!1,a.next&&e.next===a.next||r(R(e,!1,a))}}),[t,a]),o=(0,n.useCallback)((e=>{r(_(e,a))}),[a]);return n.createElement(U.C,{onReachBottom:i,triggerOnInitialLoad:!0},n.createElement("div",{className:x.Z.header},n.createElement(E.Dy,{as:"h1",variant:"canon"},c.ag.get("artists"))),n.createElement(F.r,{onLibraryItemRemove:o},n.createElement(b.ZP,{value:"EntitiesGrid"},n.createElement(Y.T,{render:()=>a.entities.map(((e,t)=>n.createElement(b.ZP,{key:e.uri,value:"card",index:t},n.createElement(H.I,{index:t,uri:e.uri,name:e.name,images:e.images}))))}))))})),W=n.memo((function(){const{total:e}=(()=>{const e=(0,n.useContext)(T.H),[t,a]=(0,n.useState)(null),r=(0,n.useCallback)((async()=>{if(!e)return;const t=await(e?.getArtists(O));a(t?.totalLength||0)}),[e]);return(0,n.useEffect)((()=>{null===t&&r()}),[t,r]),(0,D.b)(v.EW.UPDATE,r),{total:t}})(),t=(0,n.useContext)(T.H),{canFetchArtistsWithOffset:a}=t.getCapabilities();return null===e?n.createElement(C.h,{hasError:!1,errorMessage:c.ag.get("error.request-collection-artists-failure")}):e>0?a?n.createElement(V,{nrArtists:e}):n.createElement(Z,{nrArtists:e}):n.createElement(A.u,{message:c.ag.get("collection.empty-page.artists-subtitle"),title:c.ag.get("collection.empty-page.artists-title"),linkTo:"/search",linkTitle:c.ag.get("collection.empty-page.artists-cta")},n.createElement(M.a,{iconSize:64}))})),G=n.memo((function(){return n.createElement(k.$,{uri:"collection/artists",defaultSortOption:S.u3},n.createElement(y.hz,{uri:"collection/artists"},n.createElement(W,null)))}));var K=a(41632),$=a(48064);const J=n.memo((function({nrBooks:e}){const t=(0,n.useContext)(T.H),{filter:a}=(0,n.useContext)(y.fo),{sortState:r}=(0,n.useContext)(k.Q),[l,c]=(0,n.useState)(e),{spec:i,UBIFragment:o}=(0,I.fU)(g.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:audiobooks",identifier:s.W.YOURLIBRARY_AUDIOBOOKS}}),u=(0,n.useMemo)((()=>i.headerFactory()),[i]),m=(0,n.useRef)(null),d=(0,n.useCallback)((async(e,n)=>{const s=await t.getBooks({offset:e,limit:n,filter:a,sort:(0,S.G5)(r)});return s.totalLength!==l&&c(s.totalLength),s.items}),[t,a,r,l]),p=(0,n.useCallback)(((e,t)=>n.createElement(b.ZP,{key:e.uri,value:"card",index:t},n.createElement(K.c,{index:t,uri:e.uri,name:e.name,images:e.images,authorName:e.authorName}))),[]);return(0,n.useEffect)((()=>{m.current&&m.current.update()}),[r,a,e]),n.createElement(o,{spec:i},n.createElement(o,{spec:u},n.createElement("div",{className:x.Z.header},n.createElement(E.Dy,{as:"h1",variant:"canon"},"Audiobooks"),n.createElement(L.h,{filterPlaceholder:"Search in Audiobooks",sortOptions:S.ZP}))),n.createElement(f.g,{nrCards:l,renderCard:p,fetchData:d,cardGridApiRef:m}))})),q=n.memo((function(){const{total:e}=(()=>{const e=(0,n.useContext)(T.H),[t,a]=(0,n.useState)(null),r=(0,n.useCallback)((async()=>{if(!e)return;const t=await(e?.getBooks(O));a(t?.totalLength||0)}),[e]);return(0,n.useEffect)((()=>{null===t&&r()}),[t,r]),(0,D.b)(v.EW.UPDATE,r),{total:t}})();return null===e?n.createElement(C.h,{hasError:!1,errorMessage:c.ag.get("error.request-collection-albums-failure")}):e>0?n.createElement(J,{nrBooks:e}):n.createElement(A.u,{linkTo:"/search",linkTitle:c.ag.get("collection.empty-page.books-cta"),message:c.ag.get("collection.empty-page.books-subtitle"),title:c.ag.get("collection.empty-page.books-title")},n.createElement($.Z,null))})),z=n.memo((function(){return n.createElement(k.$,{uri:"collection/albums",defaultSortOption:S.JV},n.createElement(y.hz,{uri:"collection/books"},n.createElement(q,null)))}));var X=a(46309),Q=a(55508),j=a(73425),ee=a(36590),te=a(51079),ae=a(72573),ne=a(98620),re=a(13947),le=a(64005),se=a(72131),ce=a(45788),ie=a(66393),oe=a(23248),ue=a(84242),me=a(69691),de=a(28230);const Ee="tlNAdRNP5lIeiD85nMcL",ge="FmJEtzkC9046pKloStht",pe=()=>{const e=(0,de.g)("images/playlist-folder-filled.svg");return n.createElement("div",{className:Ee},n.createElement("img",{src:e,alt:c.ag.get("local-files"),className:ge}))},fe=function({uri:e,name:t,images:a,index:r}){const l=(0,ce.u)(),s=(0,n.useRef)(null),i=(0,n.useRef)(!0),o=(0,n.useContext)(ie.t),{isPlaying:u}=(0,me.cR)(se.b),{togglePlay:m}=(0,ue.n)({uri:se.b,pages:[{items:s.current?.map((e=>({...e,provider:null})))||[]}]},{featureIdentifier:"local_files"});(0,n.useEffect)((()=>(i.current=!0,()=>{i.current=!1})),[]);const[d]=(0,oe.z)(ae.J,!1),E=(0,le.y)((async(e,t)=>{if(!s.current){const e=await o.getTracks();s.current=e}i&&m({loggingParams:t},{uri:se.b,pages:[{items:s.current?.map((e=>({...e,provider:null})))||[]}]})}),re.s_);return l.canFetchAllTracks&&d?n.createElement(ee.Z,{index:r,delegatePlayback:!0,delegateLogging:!0,isPlaying:u,onPlay:E,headerText:t,featureIdentifier:"local_files",uri:e,renderCardImage:()=>n.createElement(te.x,{images:a,FallbackComponent:pe}),renderSubHeaderContent:()=>n.createElement("span",null,c.ag.get("local-files.description"))}):null},Ae=({index:e})=>{const t=(0,ne.gB)();return n.createElement(n.Suspense,{fallback:null},n.createElement(fe,{index:e,name:t.name,uri:t.uri,images:t.images}))};var he=a(49068),Ce=a(64269),ye=a(29255),be=a(72138),Te=a(63282),Ie=a(42781),Le=a(38470),ke=a(94184),Se=a.n(ke),ve=a(47418),De=a(39561);const Re="VYdojyqT_bc44_XgSBX0",_e="Tfsn0Rm0B0bxLs52ngAm",Oe="aex9qhUIr88JmeSSjzVp",Ne="bHDZIXLLeX6nALEVwdgA",xe="DMK0vDpuH1lQpq5KL4yS",Pe="J2c2ttSpTJZDK24dZjny",Be="nMYPrV7uEdDk8YlfNqLe",we="miVtYJxEHVF9msmBVLgs";function Me(e,t=null){return Array.from(new Array(e).keys()).map((e=>n.createElement("div",{className:Pe,style:{width:t?`${t}ch`:void 0},key:e})))}const He=({index:e,onClick:t})=>{const a=(0,De.MY)({limit:7}),{user:l}=(0,r.v9)(ye.Gg),s=(0,ne.I2)(l?.id);return s?n.createElement(ve.Z,{index:e,className:Se()(Re,_e),onClick:t,headerText:s.name,featureIdentifier:"your_library",uri:s.uri,ariaPlayLabel:c.ag.get("playlist.a11y.play",s.name),ariaPauseLabel:c.ag.get("playlist.a11y.pause",s.name),renderCardImage:()=>n.createElement("div",{className:Ne},n.createElement("div",{className:xe},a?a.items.map((({uri:e,name:t,artists:[a]},r)=>n.createElement("span",{key:e},n.createElement("span",{className:we},r?" • ":""),n.createElement("span",{dir:"auto"},a.name),n.createElement("span",{dir:"auto",className:we},t)))):Me(3))),renderSubHeaderContent:()=>n.createElement("div",{className:Be},a?`${a.totalLength} ${s.name}`:Me(1,s.name.length))}):null},Ye=({index:e})=>{const t=(0,De.j$)({limit:7}),{user:a}=(0,r.v9)(ye.Gg),l=(0,ne.bl)(a?.id);return l?n.createElement(ve.Z,{index:e,className:Se()(Re,Oe),headerText:l.name,featureIdentifier:"your_library",uri:l.uri,ariaPlayLabel:c.ag.get("playlist.a11y.play",l.name),ariaPauseLabel:c.ag.get("playlist.a11y.pause",l.name),renderCardImage:()=>n.createElement("div",{className:Ne},n.createElement("div",{className:xe},t?t.items.map((({uri:e,name:t,show:a},r)=>n.createElement("span",{key:e},n.createElement("span",{className:we},r?" • ":""),n.createElement("span",{dir:"auto"},t),n.createElement("span",{dir:"auto",className:we},a.name)))):Me(3))),renderSubHeaderContent:()=>n.createElement("div",{className:Be},t?c.ag.get("tracklist-header.episodes-counter",t.totalLength):Me(1,l.name.length))}):null},Ue=(e,t,a)=>n.createElement(b.ZP,{key:e.uri??t,value:"card",index:t},a),Fe=(e,t,a)=>{switch(e.type){case Ie.p.LIKED_SONGS:return Ue(e,t,a>1?n.createElement(He,{key:e.uri,index:t}):n.createElement(j.p,{key:e.uri,index:t}));case Ie.p.YOUR_EPISODES:return Ue(e,t,n.createElement(Ce.T,{key:e.uri,index:t}));case Ie.p.LOCAL_FILES:return Ue(e,t,n.createElement(Ae,{key:e.uri,index:t}));case Ie.p.PLAYLIST:return Ue(e,t,n.createElement(X.Z,{key:e.uri,index:t,name:e.name,uri:e.uri,images:e.images,description:e.description,authorName:e.owner?.displayName}));case"placeholder":return Ue(e,t,n.createElement(X.Z,{index:t,key:e.uri,uri:e.uri,name:"",images:[],description:"",authorName:""}));case"empty":return n.createElement(n.Fragment,{key:t});case"folder":return null;default:return(0,Le._)(e),null}},Ve=n.memo((function({nrPlaylists:e,showYourEpisodesCard:t,showLocalFilesCard:a}){const{filter:l}=(0,n.useContext)(y.fo),{sortState:i}=(0,n.useContext)(k.Q),o=(0,n.useContext)(be.BS),[u,m]=(0,n.useState)(e),d=(0,n.useRef)(null),p=(0,r.v9)(ye.Gg).user,{spec:A,UBIFragment:h}=(0,I.fU)(g.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:playlists",identifier:s.W.YOURLIBRARY_PLAYLISTS}}),C=(0,n.useMemo)((()=>A.headerFactory()),[A]),b=(0,n.useMemo)((()=>{const e=[];if(l)return e;const n=(0,ne.I2)(p?.id);n&&(e.push(n),e.push({uri:"",type:"empty"}));const r=t?(0,ne.bl)(p?.id):null;r&&e.push(r);const s=a?(0,ne.gB)():null;return s&&e.push(s),e}),[l,a,t,p]),T=(0,n.useCallback)((()=>{d?.current&&d.current.update()}),[d]);(0,be.iu)(T);const v=(0,n.useCallback)((async(e,t)=>{const a=b.slice(e),n=e-(b.length-a.length),r=await o.getContents({offset:n,limit:t,filter:l,sort:(0,S.pT)(i),flatten:!0,decorateImagesAndOwner:!0});return r.totalItemCount!==u&&m(r.totalItemCount),a.concat(r.items)}),[b,o,l,i,u]);return(0,n.useEffect)((()=>{d.current&&d.current.update()}),[i,l,e]),n.createElement(h,{spec:A},n.createElement(h,{spec:C},n.createElement("div",{className:x.Z.header},n.createElement(E.Dy,{as:"h1",variant:"canon"},c.ag.get("playlists")),n.createElement(n.Suspense,{fallback:null},n.createElement(L.h,{filterPlaceholder:c.ag.get("collection.filter.playlists"),sortOptions:S.w0})))),n.createElement(f.g,{nrCards:u+b.length,renderCard:Fe,fetchData:v,cardGridApiRef:d}))})),Ze=n.memo((function(){const e=(0,be.Rt)(),t=(0,he.x)(),a=(0,ce.u)(),{createPlaylist:r}=(0,Te.K)(),[l]=(0,oe.z)(ae.J,!1),s=(0,n.useCallback)((()=>{r()}),[r]);return null===e||null===t?n.createElement(C.h,{hasError:!1,errorMessage:c.ag.get("error.request-collection-albums-failure")}):e?.playlistCount?n.createElement(Ve,{nrPlaylists:e.playlistCount,showYourEpisodesCard:t.totalLength>0,showLocalFilesCard:a.canFetchAllTracks&&l}):n.createElement(A.u,{linkTitle:c.ag.get("collection.empty-page.playlists-cta"),onClick:s,title:c.ag.get("collection.empty-page.playlists-title"),message:c.ag.get("collection.empty-page.playlists-subtitle")},n.createElement(Q.Z,null))})),We=n.memo((function(){return n.createElement(k.$,{uri:"collection/playlists",defaultSortOption:S.Bf},n.createElement(y.hz,{uri:"collection/playlists"},n.createElement(Ze,null)))}));var Ge=a(95332),Ke=a(21794),$e=a(23809),Je=a(143),qe=a(19480);const ze=()=>{const e="ginger-audio-shows-top-20-web",{view:t}=(0,$e.P)(e);if(!t)return null;const{content:a,name:r}=t,{total:l=0,items:s}=a;return n.createElement(qe.P,{title:r,total:l,seeAllUri:(0,Ke.p)(e)},s.filter((e=>"show"===e.type)).map(((e,t)=>n.createElement(Ge._,{key:e.uri,name:e.name,uri:e.uri,images:e.images,publisher:e.publisher,mediaType:{audio:Je.E.AUDIO,video:Je.E.VIDEO,mixed:Je.E.MIXED}[e.media_type]??Je.E.AUDIO,sharingInfo:null,index:t}))))},Xe=n.memo((function({nrShows:e}){const t=(0,n.useContext)(T.H),{filter:a}=(0,n.useContext)(y.fo),{sortState:l}=(0,n.useContext)(k.Q),i=(0,n.useRef)(!1),o=(0,n.useRef)({entities:[],total:e}),[u,m]=(0,n.useState)(0),{user:d}=(0,r.v9)(ye.Gg),{spec:p,UBIFragment:f}=(0,I.fU)(g.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:podcasts",identifier:s.W.YOURLIBRARY_SHOWS}}),A=(0,n.useMemo)((()=>p.headerFactory()),[p]),h=(0,n.useCallback)((async(e,n,r=!1)=>{if(!i.current){i.current=!r;const s=await t.getShows({offset:e,limit:n,filter:a,sort:(0,S.EY)(l)});o.current=R(s,r,o.current),i.current=!1,m((e=>e+1))}}),[t,a,l,o]),C=(0,n.useCallback)((e=>{o.current=_(e,o.current),m((e=>e+1))}),[]);(0,n.useEffect)((()=>{h(0,50,!!u)}),[a,l]);const v=(0,n.useCallback)((()=>{o.current.entities.length!==o.current.total&&h(o.current.entities.length,50)}),[h,o]);return n.createElement(f,{spec:p},n.createElement(U.C,{onReachBottom:v},n.createElement(f,{spec:A},n.createElement("div",{className:x.Z.header},n.createElement(E.Dy,{as:"h1",variant:"canon"},c.ag.get("podcasts")),n.createElement(n.Suspense,{fallback:null},n.createElement(L.h,{filterPlaceholder:c.ag.get("collection.filter.podcasts"),sortOptions:S.a6})))),n.createElement(F.r,{onLibraryItemRemove:C},n.createElement(b.ZP,{value:"EntitiesGrid"},n.createElement(Y.T,{render:()=>{const e=(0,ne.bl)(d?.id),t=a||!e||0===o.current.entities.length?[]:[n.createElement(n.Suspense,{fallback:null,key:"your-episodes-card"},n.createElement(Ye,{index:0}))],r=t.length>0;return t.concat(o.current.entities.map(((e,t)=>{const a=r?t+1:t;return n.createElement(b.ZP,{key:e.uri,value:"card",index:a},n.createElement(Ge._,{index:a,name:e.name,uri:e.uri,images:e.images,publisher:e.publisher,mediaType:e.mediaType,sharingInfo:null}))})))}})))))})),Qe=n.memo((function(){const{total:e}=N(),{productState:t}=(0,r.v9)(ye.Gg),a=!!t&&parseInt(t.ads,10)>0;return null===e?n.createElement(C.h,{hasError:!1,errorMessage:c.ag.get("error.request-collection-shows-failure")}):e?n.createElement(Xe,{nrShows:e}):n.createElement("div",{className:Se()(x.Z.emptyStateContainer,{[x.Z.adBarEnabled]:a})},n.createElement(A.u,{linkTo:"/genre/podcasts-web",linkTitle:c.ag.get("collection.empty-page.shows-cta"),message:c.ag.get("collection.empty-page.shows-subtitle"),title:c.ag.get("collection.empty-page.shows-title"),renderInline:!0},n.createElement($.Z,null)),n.createElement(ze,null))})),je=n.memo((function(){return n.createElement(k.$,{uri:"collection/podcasts",defaultSortOption:S.rJ},n.createElement(y.hz,{uri:"collection/podcasts"},n.createElement(Qe,null)))}));var et=a(48414),tt=a(1463),at=a(28638);const nt=({isAudiobooksEnabled:e})=>{const t=(0,r.v9)(d),{spec:a,logger:l}=(0,I.fU)(et.createDesktopLibraryTopbarEventFactory,{}),s=(0,n.useMemo)((()=>[{title:c.ag.get("playlists"),itemId:"collection.tab-playlists",to:"/collection/playlists",uri:"spotify:app:collection:playlists"},...t?[{title:c.ag.get("podcasts"),itemId:"collection.tab-podcasts",to:"/collection/podcasts",uri:"spotify:app:collection:podcasts"}]:[],...e?[{title:"Audiobooks",itemId:"collection.tab-audiobooks",to:"/collection/audiobooks",uri:"spotify:app:collection:audiobooks"}]:[],{title:c.ag.get("artists"),itemId:"collection.tab-artists",to:"/collection/artists",uri:"spotify:app:collection:artists"},{title:c.ag.get("albums"),itemId:"collection.tab-albums",to:"/collection/albums",uri:"spotify:app:collection:albums"}].map(((e,t)=>{const n=e.uri;return{...e,handleClick:()=>{const e=a.linkFactory({position:t,uri:n}).hitUiNavigate({destination:n});l.logInteraction(e)}}}))),[t,e,l,a]);return n.createElement(at.w,null,n.createElement(tt.n,{className:x.Z.tabBar,links:s}))},rt=n.lazy((async()=>await a.e(4246).then(a.bind(a,33377)))),lt=()=>{const e=(0,r.v9)(d),t=(0,l.W6)(m.uB);return(0,u.z)("your_library"),n.createElement("section",{className:"contentSpacing"},n.createElement(i.$,null,c.ag.get("collection.page-title")),n.createElement(o.N,{path:"/collection/artists",pageId:s.W.YOURLIBRARY_ARTISTS},n.createElement(G,null)),n.createElement(o.N,{path:"/collection/albums",pageId:s.W.YOURLIBRARY_ALBUMS},n.createElement(w,null)),n.createElement(o.N,{path:"/collection/playlists",pageId:s.W.YOURLIBRARY_PLAYLISTS},n.createElement(We,null)),e&&n.createElement(o.N,{path:"/collection/podcasts",pageId:s.W.YOURLIBRARY_SHOWS},n.createElement(je,null)),t&&n.createElement(o.N,{path:"/collection/audiobooks",pageId:s.W.YOURLIBRARY_AUDIOBOOKS},n.createElement(z,null)),n.createElement(o.N,{path:"/collection/music-downloads",pageId:s.W.YOURLIBRARY_DOWNLOADS},n.createElement(rt,null)),n.createElement(nt,{isAudiobooksEnabled:t}))}},72573:(e,t,a)=>{a.d(t,{J:()=>n.J});var n=a(70765)},33241:(e,t,a)=>{a.d(t,{C:()=>o});var n=a(67294),r=a(70131),l=a(94184),s=a.n(l);const c="eqw9lvuoZHrkWMTdyTpY",i="lb08f71wES9AQnKx6e0R",o=n.memo((function(e){const{triggerOnInitialLoad:t=!1,onReachBottom:a,showScrollbar:l=!0,horizontalScroll:o=!1}=e,{ref:u,inView:m}=(0,r.YD)({initialInView:t});return(0,n.useEffect)((()=>{m&&a&&a()}),[m,a]),n.createElement("div",{className:s()({[i]:!l,[c]:o}),"data-testid":"infinite-scroll-list"},e.children,n.createElement("div",{ref:u}))}))},23809:(e,t,a)=>{a.d(t,{P:()=>d});var n=a(67294),r=a(26991),l=a(88767),s=a(26529),c=a(94321),i=a(29255),o=a(46458),u=a(87577),m=a(8247);const d=(e,t)=>{const a=(()=>{const e=(0,u.W6)(m.Xf),t=(0,o.v9)(c.rZ),{locale:a,overrides:r}=(0,o.v9)(i.Gg),l=r?.country||t,s=r?.locale||a;return(0,n.useMemo)((()=>{const t=["album","playlist","artist","show","station","episode"];return e&&t.push("uri_link"),{country:l,locale:s,types:t.join(",")}}),[l,e,s])})(),{data:d,fetchNextPage:E}=(0,l.useInfiniteQuery)(["useView",e,a],(async({pageParam:t})=>void 0===t?async function(e,t){const{body:a}=await r.kO.getView(s.b.getInstance(),e,t);return a}(e,a):async function(e){const{body:t}=await r.TV.getGeneric(s.b.getInstance(),e);return t}(t)),{cacheTime:t?.cacheTime??18e5,staleTime:t?.staleTime??3e5,getNextPageParam:e=>e.content.next??void 0,getPreviousPageParam:e=>e.content.previous??void 0});return{view:(0,n.useMemo)((()=>d?.pages.reduce(((e,t)=>({...e,content:{...e.content,href:t.content.href,next:t.content.next,offset:t.content.offset,previous:t.content.previous,total:t.content.total,items:e.content.items.concat(t.content.items)}})))),[d?.pages]),getNextPage:E}}},37999:(e,t,a)=>{a.d(t,{Z:()=>n});const n={header:"fLqEiE5HwKr9eFCbJgeu",tabBar:"tUg9tRrSVbtjHJ4WHnxw",AddToPlaylistIcon:"Hbwta1_s02edtdkgJ7qZ",emptyStateContainer:"nHGnfkVXCk9YYVitV6eu",adBarEnabled:"YV8aNrRwNwFaMozM_Bfo"}}}]);
//# sourceMappingURL=xpui-routes-collection.js.map