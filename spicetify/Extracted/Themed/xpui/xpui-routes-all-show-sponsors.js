"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[6923],{18693:(e,o,t)=>{t.d(o,{F:()=>a,m:()=>c});var s=t(67294),n=t(64005),r=t(31604);const a=420;function c({episodeBase62Id:e,getEpisodeSponsors:o,fetchedEpisodeSponsorsData:c=[],version:i}){const[u,d]=(0,s.useState)(c),f=(0,s.useCallback)((async()=>{try{if(!e)throw new Error("episodeBase62Id is required to fetch episode sponsors");const s=o??(await Promise.resolve().then(t.bind(t,11401))).getEpisodeSponsors;d(await s(e,{version:i}))}catch(e){d([])}}),[e,o,i]),h=(0,n.y)(f,a);return(0,s.useEffect)((function(){c.length||h()}),[h,c.length]),(0,r.H)(h),{fetchedEpisodeSponsorsData:u}}},39111:(e,o,t)=>{t.r(o),t.d(o,{AllShowSponsors:()=>w,default:()=>p});var s=t(67154),n=t.n(s),r=t(67294),a=t(52883),c=t(69518),i=t.n(c),u=t(72125),d=t(28975),f=t(77186),h=t(51976);const l=(0,r.lazy)((()=>Promise.all([t.e(1814),t.e(9818)]).then(t.bind(t,39818))));function w(e){const{showId:o}=(0,a.UO)(),t=(0,r.useMemo)((()=>i().showURI(o).toURI()),[o]),{location:{state:{showSponsorsData:s}={}}}=(0,f.P)(),{showSponsorsData:c}=(0,h.O)({showId:o,showSponsorsData:s});return c?.length?r.createElement(l,n()({uri:t,showId:o,showSponsorsData:c},e)):r.createElement(u.A,{to:(0,d.mH)(o)})}const p=w},51976:(e,o,t)=>{t.d(o,{O:()=>c});var s=t(67294),n=t(64005),r=t(18693),a=t(31604);function c({showId:e,showSponsorsData:o=[],getShowSponsors:c}){const[i,u]=(0,s.useState)(o),d=(0,s.useCallback)((async()=>{let o=!0;const s=(...e)=>{o&&u(...e)};try{if(!e)throw new Error("showId is required to fetch show sponsors");const o=c??(await Promise.resolve().then(t.bind(t,1709))).getShowSponsors;s(await o(e))}catch(e){s([])}return()=>{o=!1}}),[e,c]),f=(0,n.y)(d,r.F);return(0,s.useEffect)((function(){o.length||f()}),[f,o.length]),(0,a.H)(f),{showSponsorsData:i}}},31604:(e,o,t)=>{t.d(o,{H:()=>u});var s=t(67294),n=t(87577),r=t(49207),a=t(40080),c=t(8341),i=t(89952);function u(e){const o=(0,n.W6)(r.oF),t=(0,c.Y)((e=>{const o=e?.item??void 0;return(0,i.k6)(o)&&o.isPodcastAd?o.id??void 0:void 0})),u=(0,a.D)(t);(0,s.useEffect)((function(){t!==u&&Boolean(t)&&setTimeout(e,o)}),[e,t,u,o])}},77186:(e,o,t)=>{t.d(o,{P:()=>r});var s=t(67294),n=t(52883);function r(){const e=(0,n.k6)(),{listen:o,location:t}=e;return(0,s.useEffect)((function(){return o(((e,o)=>{"POP"===o&&(e.state={...t.state,...e.state})}))})),e}},40080:(e,o,t)=>{t.d(o,{D:()=>n});var s=t(67294);function n(e){const o=(0,s.useRef)();return(0,s.useEffect)((()=>{o.current=e}),[e]),o.current}}}]);
//# sourceMappingURL=xpui-routes-all-show-sponsors.js.map