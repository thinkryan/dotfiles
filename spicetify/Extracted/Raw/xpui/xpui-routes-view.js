"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[6450],{71479:(e,t,n)=>{n.r(t),n.d(t,{DISALLOWED_VIEWS:()=>D,View:()=>M,default:()=>x});var l=n(67294),r=n(94184),a=n.n(r),o=n(46458),s=n(20657),c=n(51574),i=n(33241),m=n(31595),u=n(21794),d=n(23809),g=n(70369),E=n(42273),f=n(59482),b=n(72907),v=n(1663),w=n(86964),h=n(29255);const y="XD65NhAD6ebYxMaW9cZZ",A="AJqEY1gblQDvIgjU0jAH",I="Ft1cMGlqDsCbqmXQyeKN",k="zlBEnsMyvUhuHSEtst4Q",p="INYpiFRlwWIZ0vH30xW2",C=e=>"HEADER"===e.rendering,N=e=>{const{title:t,images:n,backgroundColor:r}=e;return l.createElement(l.Fragment,null,((e,t=[],n)=>{if(!e)return l.createElement("div",{className:p});const r=t.filter((e=>"background"===e.name));return l.createElement(E.gF,{backgroundImages:r,backgroundColor:n,size:0===r.length?E.fR.SMALL:E.fR.DEFAULT},l.createElement(f.W,null,l.createElement(b.i,{text:e})),l.createElement(E.sP,null,l.createElement(E.xd,null,e)))})(t,n,r))},D=["ginger-genre-affinity"],M=l.memo((function({viewData:e,viewId:t,backgroundColor:n,isFullyLoaded:r,isGenre:o,isAnonymous:u,getNextPage:d}){const f=e?.name,b=(0,l.useCallback)((()=>D.some((t=>e?.href?.includes(t)))),[e]),h=(0,l.useCallback)((()=>{if(!e)return;const t=b();r||t||d()}),[e,b,r,d]),M=(0,l.useMemo)((()=>{const{content:{items:t=[]}={}}=e||{},n=t.filter(C);return n.length>0?n[0]:null}),[e]),x=(0,l.useMemo)((()=>{const{name:t}=e||{};return M?M.name:n&&t}),[n,M,e]),S=(0,l.useMemo)((()=>o||Boolean(x)),[o,x]),F=(0,l.useMemo)((()=>!(!e||!Array.isArray(e.content.items))&&S),[S,e]),L=(0,E.oX)(t)?l.createElement(E.YD,{isAnonymous:u}):l.createElement(N,{title:M?.name||x,images:M?.images||[],backgroundColor:n}),W=e?.content.items;return e?l.createElement(l.Fragment,null,f?l.createElement(g.$,null,f):null,l.createElement(i.C,{onReachBottom:h},l.createElement("section",{className:y},F&&l.createElement(m.H,{color:n||null}),S?L:l.createElement("div",{className:p}),l.createElement("div",{className:I},S&&L&&l.createElement(c.I,{backgroundColor:n}),l.createElement("div",{className:a()(A,"contentSpacing",{[k]:o})},l.createElement(w.c,{spaces:W,viewName:e.name,viewId:t,isAnonymous:u})))))):l.createElement(v.h,{hasError:!1,errorMessage:s.ag.get("error.not_found.title.page")})})),x=l.memo((function({viewId:e,match:t}){const n=e||t.params.viewId,{isAnonymous:r}=(0,o.v9)(h.Gg),{view:a,getNextPage:s}=(0,d.P)(n),c=!a||null===a.content.next,i=n.endsWith("-page")?n:`${n}-page`,m=(0,o.v9)((e=>e.browse.allItemsStyle?.[i]?.color||"")),g=e=>e.viewId===n||"href"in e&&e.href===(0,u.p)(n),E=(0,o.v9)((e=>e?.browse?.browseAll?.items.some(g)||e?.browse?.topGenres?.items.some(g)||!!m));return l.createElement(M,{viewData:a,isFullyLoaded:c,viewId:n,backgroundColor:m,isGenre:E,isAnonymous:r,getNextPage:s})}))},33241:(e,t,n)=>{n.d(t,{C:()=>i});var l=n(67294),r=n(70131),a=n(94184),o=n.n(a);const s="eqw9lvuoZHrkWMTdyTpY",c="lb08f71wES9AQnKx6e0R",i=l.memo((function(e){const{triggerOnInitialLoad:t=!1,onReachBottom:n,showScrollbar:a=!0,horizontalScroll:i=!1}=e,{ref:m,inView:u}=(0,r.YD)({initialInView:t});return(0,l.useEffect)((()=>{u&&n&&n()}),[u,n]),l.createElement("div",{className:o()({[c]:!a,[s]:i}),"data-testid":"infinite-scroll-list"},e.children,l.createElement("div",{ref:m}))}))}}]);
//# sourceMappingURL=xpui-routes-view.js.map