"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[3727],{22578:(e,t,a)=>{a.d(t,{$:()=>d});var i=a(67294),n=a(64593),r=a(20657),l=a(69691),s=a(8341),c=a(89952),u=a(52883),o=a(24183);function m(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const d=({children:e,usePlayingItem:t})=>{let a=m(e);(e=>{const{mainLandmarkRef:t}=(0,o.Oh)(),a=(0,u.k6)(),n=a.location?.state?.preventMoveFocus,r=(0,i.useRef)(a.length<2);r.current=a.length<2,(0,i.useEffect)((()=>{const a=t.current;!n&&!r.current&&a&&e&&(a.setAttribute("aria-label",e),a.focus())}),[e,t,n])})(e);const{isPlaying:d}=(0,l.IK)(),E=(0,s.Y)((e=>e?.item));return E&&(d||t)&&((0,c.G_)(E)?a=[E.name,E.artists.map((e=>e.name)).join(r.ag.getSeparator())].join(" • "):(0,c.iw)(E)?a=[E.name,E.show.name].join(" • "):(0,c.k6)(E)&&(a=m(r.ag.get("ad-formats.advertisement")))),i.createElement(n.q,{defaultTitle:"Spotify",defer:!1},i.createElement("title",null,a))}},70369:(e,t,a)=>{a.d(t,{$:()=>i.$});var i=a(22578)},1463:(e,t,a)=>{a.d(t,{n:()=>T});var i=a(67294),n=a(94184),r=a.n(n),l=a(52883),s=a(28760),c=a(62312),u=a(41374),o=a(20657),m=a(32648),d=a(64005),E=a(85951);var g=a(32626),p=a(43031),y=a(30005),f=a(21691);const h="BkpKedcdaMGbvgXMlmcg",b="muYk5XIwKmqR9iNibk_f",x="queue-tabBar-header",v="m20ShRDiGGDpJ5LSABTi",k="Hvv0e7WKQ4kyftgSQJhg",C="yxf_6IsQEmHjijEBUMTP",N="oaNVBli46GtVjaQKB15g",I="JdlKTdpMquftpMwwegZo",P="Nts_ArOCGeROTDZND3M6",w="FvDsfgxSvLvL3q8d7nQv",U=({items:e,activeItemId:t})=>i.createElement(y.v,null,e.map((e=>e.disabled?i.createElement(f.s,{key:e.uri,disabled:!0,role:"menuitemradio",className:C,onClick:e.handleClick},e.title):i.createElement(f.s,{key:e.uri,role:"menuitemradio",to:e.to,exact:!0,"aria-checked":e.itemId===t,className:C,activeClassName:N,onClick:e.handleClick},e.title)))),T=i.memo((function({isCentered:e,links:t,landmarkLabel:a,className:n}){const y=(0,i.useRef)(null),[f,C]=(0,i.useState)([]),[T,A]=(0,i.useState)(0),[O,D]=(0,i.useState)([]),R=function(){const[e,t]=(0,i.useState)(window.innerWidth),{scrollNodeChildRef:a}=(0,i.useContext)(m.VX),n=(0,d.y)((e=>{e?.width&&t(e.width)}),250);return(0,E.y)({refOrElement:a,observeOnly:"width",onResize:n}),e}()??1/0,{pathname:S}=(0,l.TH)(),L=t.find((e=>e.to===S));return(0,i.useEffect)((()=>{y.current&&A(y.current.clientWidth)}),[R]),(0,i.useEffect)((()=>{if(!y.current)return;const e=Array.from(y.current.children).map((e=>e.clientWidth));C(e)}),[t]),(0,i.useEffect)((()=>{if(!y.current)return;if(f.slice(0,-1).reduce(((e,t)=>e+t),0)<=T)return void D([]);const e=f.reduce(((e,t)=>e>t?e:t),0),t=[];let a=e;f.forEach(((e,i)=>{T>=a+e?a+=e:t.push(i)})),D(t)}),[T,f]),i.createElement("nav",{className:r()(n,h),"aria-label":a},i.createElement("ul",{className:e?b:P,ref:y},t.filter(((e,t)=>!O.includes(t))).map((e=>(e?.render??(e=>e))(i.createElement("li",{key:e.to,className:x},e.disabled?i.createElement("div",{className:I},i.createElement(s.Dy,{variant:"mestoBold"},e.title)):i.createElement(p.O,{exact:!0,className:I,activeClassName:N,to:e.to,onClick:e.handleClick},i.createElement(s.Dy,{variant:"mestoBold"},e.title)))))),O.length||0===f.length?i.createElement("li",{className:x},i.createElement(g.xV,{renderInline:!0,menu:i.createElement(U,{items:t.filter(((e,t)=>O.includes(t))),activeItemId:L?.itemId})},((e,t,a)=>i.createElement("button",{className:r()(v,{[k]:L}),type:"button",onClick:t,ref:a},i.createElement(s.Dy,{variant:"mestoBold"},L?L.title:o.ag.get("more")),e?i.createElement(c.U,{iconSize:16,className:w}):i.createElement(u.i,{iconSize:16,className:w}))))):null))}))},41239:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Le});var i=a(67294),n=a(73305),r=a(72125),l=a(35796),s=a(9832),c=a(68960),u=a(28760),o=a(20657),m=a(80053);const d="gTvMl6pwfRD9PobMSB5x",E="hNAQG0TAe2WFYyf_iZEB",g="Zhzrb2k9nQRActS2lp4U",p=()=>i.createElement("div",{className:d},i.createElement(m.Y,{iconSize:64}),i.createElement(u.Dy,{as:"h1",variant:"alto",semanticColor:"textBase",className:E},o.ag.get("history.empty-title")),i.createElement("p",null,o.ag.get("history.empty-description")));var y=a(69518),f=a.n(y),h=a(28248),b=a(47991),x=a(42922),v=a(26991),k=a(26529);const C=[];function N(e,t=!0){const[a,n]=(0,i.useState)({});return(0,i.useEffect)((()=>{if(!t)return;const i=Array.from(new Set(e)),r=i.filter((e=>f().isTrack(e)&&!a[e])),l=i.filter((e=>f().isEpisode(e)&&!a[e])),s=r.length?v.fQ.getTracks(k.b.getInstance(),r.map((e=>f().from(e).getBase62Id()))).then((e=>e.body.tracks||C)):Promise.resolve(C),c=l.map((e=>v.UY.getEpisodeGraphQL(k.b.getInstance(),f().from(e).getBase62Id()).then((e=>e?.body||{})).catch((t=>(console.error(t),{uri:e})))));Promise.all([s,...c]).then((([e,...t])=>{const a={},i={};e.forEach((e=>{a[e?.linked_from?.uri||e.uri]=e})),t.forEach((e=>{i[e.uri]=e})),(e.length>0||t.length>0)&&n((e=>({...e,...a,...i})))}))}),[e,a,t]),e.map((e=>a[e]))}var I=a(42781),P=a(49961),w=a(25988),U=a(26921),T=a(86213),A=a(27481),O=a(83384),D=a(82760),R=a(18261),S=a(85576),L=a(87257),q=a(57978),_=a(26010),M=a(84242),Q=a(84788);const B=i.memo((function({uri:e,name:t,duration_ms:a,index:n,imgUrl:r,artists:l,album:s,isExplicit:c,isMOGEFRestricted:u,type:m}){const{useCurrentAvailability:d}=(0,i.useContext)(_.I),[E,g]=d(e),{isActive:p,isPlaying:y,triggerPlay:h,togglePlay:b}=(0,M.n)({uri:e},{featureIdentifier:"history"}),{badges:v,hasBadges:k}=(0,Q.r)({offlineAvailability:g,isExplicit:c,isMOGEFRestricted:u}),C=E,N=l?.map((e=>e.name)).join(o.ag.getSeparator())||"";let I;return f().isEpisode(e)?I=i.createElement(w.k,{uri:e,contextUri:e,showUri:l?.[0]?.uri}):f().isLocalTrack(e)?I=i.createElement(U.N,{uri:e,contextUri:e}):f().isTrack(e)&&(I=i.createElement(T.$,{uri:e,contextUri:e,albumUri:s?.uri,artists:l})),i.createElement(x.ZP,{value:"row",index:n},i.createElement(R._,{menu:I},i.createElement(D.c,{uri:e,contextUri:e,index:n,ariaRowIndex:n,onTriggerPlay:()=>{h()},isActive:p,isPlayable:C,ageRestricted:u,dragMetadata:{name:t,createdBy:N}},i.createElement(A.vZ,{ariaColIndex:0},i.createElement(A.VG,{uri:e,src:r,isPlaying:y,isActive:p,isLocked:!1,onClick:()=>{b()},isEpisode:f().isEpisode(e),playAriaLabel:o.ag.get("tracklist.a11y.play",t,N)}),i.createElement(A.vm,null,i.createElement(A.Wh,{titleText:t},t),k&&i.createElement(A.g3,null,v.download&&i.createElement(S.G,{size:16}),v.explicit&&i.createElement(L.N,null),v.nineteen&&i.createElement(q.X,{className:O.Z.nineteen,size:16})),i.createElement(A.K9,null,f().isTrack(e)?i.createElement(A.T6,{artists:l}):l[0].name))),i.createElement(A.UA,{ariaColIndex:2},i.createElement(A.BM,{nonInteractive:f().isLocalTrack(e),uri:s.uri,name:s.name,creatorUri:l?.[0]?.uri},s.name)),i.createElement(A.mU,{ariaColIndex:1},!f().isLocalTrack(e)&&i.createElement(A.qS,{uri:e,type:m}),i.createElement(A.A$,{duration:a}),i.createElement(A.Zv,{menu:I,label:o.ag.get("more.label.track",t,N)})))))}),((e,t)=>e.uri===t.uri)),G=i.memo((function({items:e}){const t=N(e.map((e=>e.uri))),a=(0,i.useMemo)((()=>t.map(((t,a)=>e[a].isLocal?e[a]:t))),[t,e]),n=(0,i.useCallback)(((e,t)=>{if((a=e).type===I.p.TRACK&&f().isTrack(a.uri)){const a=(0,P.X)(e.album?.images,{desiredSize:40});return i.createElement(B,{key:t+e.uri,index:t,uri:(0,b.$)(e),name:e.name,duration_ms:e.duration_ms,imgUrl:a?.url||"",album:e.album,artists:e.artists,isExplicit:e.explicit,isMOGEFRestricted:(e.tags||[]).includes("MOGEF-19+"),type:I.p.TRACK})}var a;if((e=>e.type===I.p.EPISODE)(e)){const a=(0,P.X)(e.show?.images,{desiredSize:40});return i.createElement(B,{key:t+e.uri,index:t,uri:(0,b.$)(e),name:e.name,duration_ms:e.duration_ms,imgUrl:a?.url||"",album:{name:e.show.name,uri:e.show.uri},artists:[{name:e.show.publisher,uri:""}],isExplicit:e.explicit,isMOGEFRestricted:!1,type:I.p.EPISODE})}return(e=>e.type===I.p.TRACK&&f().isLocalTrack(e.uri))(e)?i.createElement(B,{key:t+e.uri,index:t,uri:e.uri,name:e.name,duration_ms:e.duration,imgUrl:e.imageUrl||"",album:{name:e.album?.name||"",uri:""},artists:[{name:e.artist?.name||"",uri:""}],isExplicit:e.isExplicit,isMOGEFRestricted:!1,type:I.p.LOCAL_FILES}):i.createElement(h.hU,{height:`${h.dN}px`})}),[]),r=(0,i.useMemo)((()=>[h.QD.TITLE,h.QD.ALBUM_OR_PODCAST,h.QD.DURATION]),[]),l=(0,i.useCallback)((e=>e.uri),[]);return i.createElement(i.Fragment,null,i.createElement(x.ZP,{value:"play-history-tracklist"},i.createElement(h.Pv,{ariaLabel:"play-history",hasHeaderRow:!0,columns:r,renderRow:n,resolveUri:l,tracks:a,nrTracks:a.length,rowPlaceholder:h.hU,limit:50})))})),$="dt3fysZYdQ6hhWfpmjAu",F="n6LsTkKvpO88xeRyRTdw",Z=()=>{const e=(0,s.U5)();return e&&e.items.length>0?i.createElement("div",{className:$},i.createElement(u.Dy,{as:"h1",variant:"canon",semanticColor:"textBase",className:F},o.ag.get("view.recently-played")),i.createElement(G,{items:e.items})):i.createElement(p,null)};var K=a(94184),W=a.n(K),z=a(70369),H=a(67892),X=a(23716),Y=a(34891),j=a(86081);var V=a(14472),J=a(24209);const ee=({onClick:e})=>i.createElement(J.P,{onClick:e,buttonSize:"sm"},o.ag.get("queue.clear-queue"));var te=a(73012),ae=a(21770),ie=a(99450),ne=(a(29298),a(85105));const re="i9rTNwKyT_NMDghd8q65",le="DXBMXJD8Zoj4V8MxIVTB",se="UEtqSfWDubkNdPIaEkfA",ce="I_Rc74Je7W4sk6KAVR05",ue=i.memo((function({onClose:e,onConfirm:t,isOpen:a,itemCount:n}){const r=(0,i.useCallback)((a=>{t(),e(a)}),[t,e]),l=o.ag.get("queue.confirm-title",n);return i.createElement(ne.Z,{shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,onRequestClose:e,contentLabel:l,isOpen:a},i.createElement("div",{className:re},i.createElement(u.Dy,{as:"h2",variant:"cello",className:le},l),i.createElement(u.Dy,{as:"p",variant:"mesto",className:se,paddingBottom:te.g4V},o.ag.get("queue.confirm-message")),i.createElement("div",{className:W()("encore-light-theme",ce)},i.createElement(ae.oM,{onClick:e},o.ag.get("queue.cancel-button")),i.createElement(ie.D,{onClick:r},o.ag.get("queue.confirm-button")))))}));var oe=a(76),me=a(17470);const de=()=>i.createElement("div",{className:d},i.createElement(me.S,{iconSize:64}),i.createElement(u.Dy,{as:"h1",variant:"alto",semanticColor:"textBase",className:E},o.ag.get("queue.empty-title")),i.createElement("p",null,o.ag.get("queue.empty-description")),i.createElement(oe.OL,{to:"/search",className:g},i.createElement(ie.D,{colorSet:"invertedLight"},o.ag.get("queue.fine-something"))));let Ee;!function(e){e[e.NowPlaying=0]="NowPlaying",e[e.NextInQueue=1]="NextInQueue",e[e.NextUp=2]="NextUp"}(Ee||(Ee={}));var ge=a(56802),pe=a(89952);const ye=(e,t)=>{const a=N(e.slice(0,50).map((e=>e.uri)),t);return t?e.reduce(((e,t,i)=>(a[i]&&e.push(((e,t)=>(0,pe.G_)(e)&&(e=>"track"===e.type)(t)?{...e,name:t.name,album:{...e.album,name:t.album.name,images:t.album.images,uri:t.album.uri},artists:t.artists.map((e=>({name:e.name,uri:e.uri,type:I.p.ARTIST}))),duration:{milliseconds:t.duration_ms},isExplicit:t.explicit,is19PlusOnly:(t.tags||[]).includes("MOGEF-19+")}:(0,pe.iw)(e)&&(e=>"episode"===e.type)(t)?{...e,name:t.name,show:{...e.show,name:t.show.name,images:t.show.images,uri:t.show.uri},duration:{milliseconds:t.duration_ms}}:e)(t,a[i])),e)),[]):e};var fe=a(47307),he=a(22345),be=a(99191),xe=a(69691);let ve;!function(e){e.TRACK="track",e.EPISODE="episode",e.CHAPTER="chapter",e.LOCAL="local"}(ve||(ve={}));const ke=i.memo((function({uri:e,uid:t,contextUri:a,name:n,duration_ms:r,artists:l,index:s,rowNumberOffset:c,imgUrl:u,isExplicit:m,isPlayable:d,isMOGEFRestricted:E,album:g,type:p,section:y,usePlayContextItem:h,isAutoPlay:b=!1,isEnhanced:v}){const k=(0,X.g)(),{useCurrentAvailability:C}=(0,i.useContext)(_.I),[N,I]=C(e),{triggerPlay:P,togglePlay:M}=h({uid:t,uri:e,index:s}),{isActive:B,isPlaying:G}=(0,xe.$o)(e),$=(0,i.useCallback)((()=>{t?P({},(()=>k.skipToNext({uri:e,uid:t}))):P()}),[k,P,e,t]),F=(0,i.useCallback)((()=>{t?M({},(()=>k.skipToNext({uri:e,uid:t}))):M()}),[k,M,e,t]),Z=d&&(f().isLocalTrack(e)||N),K=p===ve.TRACK,W=p===ve.EPISODE,z=p===ve.CHAPTER,H=W&&"video"===g?.mediaType,Y=p===ve.LOCAL,j=l?.map((e=>e.name)).join(o.ag.getSeparator())||"",{badges:V,hasBadges:J}=(0,Q.r)({offlineAvailability:I,isExplicit:m,isMOGEFRestricted:E,isEnhanced:v});let ee;ee=W?i.createElement(w.k,{uri:e,uid:b?void 0:t,showUri:g.uri,contextUri:a}):z?i.createElement(he.r,{uri:e,uid:b?void 0:t,showUri:g.uri,contextUri:a}):Y?i.createElement(U.N,{uri:e,uid:b?void 0:t,contextUri:a}):i.createElement(T.$,{uri:e,uid:b?void 0:t,albumUri:g.uri,artists:l,contextUri:a});const te=(0,i.useCallback)(((a,i)=>{const{meta:n,uris:r}=a,l=r.map((e=>({uri:e,uid:null})));let s;s=i===D.W.Before?{before:{uri:e,uid:t??null}}:{after:{uri:e,uid:t??null}},n.section===Ee.NowPlaying?k.addToQueue(l):n.origin===Ee.NowPlaying?k.insertIntoQueue(l,s):k.reorderQueue(l,s)}),[k,t,e]),ae=(0,i.useCallback)(((a,i)=>{const{uids:n}=a,r=n.map((e=>({uri:"",uid:e})));let l;l=i===D.W.Before?{before:{uri:e,uid:t??null}}:{after:{uri:e,uid:t??null}},k.reorderQueue(r,l)}),[k,t,e]),ie=b?[]:[be.aN[f().Type.TRACK],be.aN[f().Type.EPISODE]];return i.createElement(x.ZP,{value:"row",index:s},i.createElement(R._,{menu:ee},i.createElement(D.c,{uri:e,contextUri:a,index:s,onTriggerPlay:$,isActive:y===Ee.NowPlaying&&B,ariaRowIndex:s,isPlayable:Z,ageRestricted:E,dragMetadata:{name:n,createdBy:j,sectionId:y},onInsert:(e,t,a,i,n)=>{te({uris:e,dropIndex:t,meta:n},a)},onMove:(e,t,a,i)=>{ae({uids:e,dropIndex:t,meta:i},a)},allowedDropTypes:ie},i.createElement(A.Dd,{ariaColIndex:0},i.createElement(A.Du,{uri:e,playAriaLabel:o.ag.get("tracklist.a11y.play",n,j),isPlaying:y===Ee.NowPlaying&&G,isActive:y===Ee.NowPlaying&&B,onClick:()=>{F()}},i.createElement(A.km,null,s+c+1))),i.createElement(A.vZ,{ariaColIndex:1},i.createElement(A.lD,{src:u,isVideo:H,isEpisode:W||z}),i.createElement(A.vm,null,i.createElement(A.Wh,{titleText:n},n),J&&i.createElement(A.g3,null,V.enhanced&&i.createElement(fe._,{iconSize:16,className:O.Z.enhanced,title:o.ag.get("web-player.enhance.button_text_enhanced"),"aria-label":o.ag.get("web-player.enhance.button_text_enhanced")}),V.download&&i.createElement(S.G,{size:16}),V.explicit&&i.createElement(L.N,null),V.nineteen&&i.createElement(q.X,{className:O.Z.nineteen,size:16})),i.createElement(A.K9,null,K&&i.createElement(A.T6,{artists:l}),(W||Y)&&!H&&j))),i.createElement(A.UA,{ariaColIndex:2},i.createElement(A.BM,{nonInteractive:Y,uri:g.uri,name:g.name,creatorUri:l?.[0]?.uri},g.name)),i.createElement(A.mU,{ariaColIndex:3},!Y&&i.createElement(A.qS,{uri:e,type:p}),i.createElement(A.A$,{duration:r}),i.createElement(A.Zv,{menu:ee,label:o.ag.get("more.label.track",n,j)})))))}),((e,t)=>e.uri===t.uri&&e.index===t.index)),Ce=i.memo((function({tracks:e,ariaLabel:t,contextUri:a,rowNumberOffset:n=0,section:r,usePlayContextItem:l}){const s=(0,ge.o)(),c=(0,X.g)(),u=ye(e,!c.getCapabilities().hasDecoratedQueue),o=(0,i.useCallback)(((e,t)=>{s({intent:"remove-from-queue",type:"click"}),c.removeFromQueue(e.map((e=>({uid:e.id,uri:e.uri})))).then(t)}),[c,s]),m=(0,i.useCallback)(((e,t)=>{if((0,pe.iw)(e)){const s=(0,P.X)(e.show?.images,{desiredSize:40});return i.createElement(ke,{key:`${t}${n}${e.uid}`,index:t,rowNumberOffset:n,imgUrl:s?.url||"",uri:(0,b.$)(e),uid:e.uid??e.uri,contextUri:a,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.show.name,uri:e.show.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:ve.EPISODE,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider})}if((0,pe.G7)(e)){const s=(0,P.X)(e.images||void 0,{desiredSize:40});return i.createElement(ke,{key:`${t}${n}${e.uid}`,index:t,rowNumberOffset:n,imgUrl:s?.url||"",uri:(0,b.$)(e),uid:e.uid??e.uri,contextUri:a,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.book.name,uri:e.book.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:ve.CHAPTER,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider})}if((0,pe.G_)(e)||(0,pe.RB)(e)){const s=(0,P.X)(e?.album?.images,{desiredSize:40}),c=e.type===I.p.TRACK?e:null;return i.createElement(ke,{key:`${t}${n}${e.uid}`,index:t,rowNumberOffset:n,imgUrl:s?.url||"",uri:(0,b.$)(e),uid:e.uid??e.uri,contextUri:a,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,album:e.album,isExplicit:c?.isExplicit??!1,isPlayable:!0,isMOGEFRestricted:c?.is19PlusOnly??!1,type:c?.isLocal?ve.LOCAL:ve.TRACK,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider,isEnhanced:"enhanced_recommendation"===e.metadata?.provider})}return i.createElement(h.Lb,{height:`${h.dN}px`})}),[n,a,r,l]),d=(0,i.useMemo)((()=>[h.QD.INDEX,h.QD.TITLE,h.QD.ALBUM,h.QD.DURATION]),[]),E=(0,i.useCallback)((e=>e.uri),[]),g=(0,i.useCallback)((e=>e.uid??e.uri),[]);return u&&i.createElement(h.Pv,{ariaLabel:t,tracks:u,nrTracks:u.length,onRemove:o,renderRow:m,resolveUri:E,resolveUid:g,columns:d})})),Ne="rHpv7osDRvs3SUPMpQ_g",Ie="DG9CsoFIptJhAneKoo_F",Pe="jf2HafzDEI9jn7Yo05eM",we="H3Puuvc2nV0GoZRrfpRS",Ue="HckHyQocDDePWQL2baOY",Te=()=>{const{uri:e,description:t}=(0,V.$)(),a=(0,X.g)(),{current:n,nextUp:r,queued:l}=function(){const e=(0,X.g)(),[t,a]=(0,i.useState)(e.getQueue());return(0,j.G)(Y.rg.QUEUE_UPDATE,(e=>a(e.data))),t}(),[s,c]=(0,i.useState)(!1),m=(0,i.useCallback)((()=>{c(!1)}),[c]),d=(0,i.useCallback)((()=>{a.clearQueue(),c(!1)}),[a]),E=(0,i.useCallback)((()=>{c(!0)}),[c]),{usePlayContextItem:g}=(0,M.n)({uri:e??""},{featureIdentifier:"queue"}),p="autoplay"===n?.provider,y=r.filter((e=>p?e:"autoplay"!==e.provider)),f=!!l?.length,h=!!y?.length;return!1===(n||f||h)?i.createElement(de,null):i.createElement("section",{className:Ne},i.createElement(z.$,null,o.ag.get("queue.page-title")),i.createElement(u.Dy,{as:"h1",variant:"canon",semanticColor:"textBase",className:Ie},o.ag.get("playback-control.queue")),n&&e&&i.createElement(i.Fragment,null,i.createElement(u.Dy,{as:"h2",variant:"balladBold",semanticColor:"textSubdued"},o.ag.get("queue.now-playing")),i.createElement(x.ZP,{value:"now-playing"},i.createElement(Ce,{ariaLabel:o.ag.get("queue.now-playing"),tracks:[n],contextUri:e,section:Ee.NowPlaying,usePlayContextItem:g}))),f&&e&&i.createElement(i.Fragment,null,i.createElement("div",{className:W()(Ue,Pe)},i.createElement(u.Dy,{as:"h2",variant:"balladBold",semanticColor:"textSubdued"},o.ag.get("queue.next-in-queue")),f&&i.createElement(ee,{onClick:E})),i.createElement(x.ZP,{value:"next-in-queue"},i.createElement(Ce,{ariaLabel:o.ag.get("queue.next-in-queue"),tracks:l,rowNumberOffset:1,contextUri:"spotify:app:queue:NextInQueue",section:Ee.NextInQueue,usePlayContextItem:g}))),h&&e&&i.createElement(i.Fragment,null,i.createElement(u.Dy,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",className:W()(Pe,"standalone-ellipsis-one-line")},t&&!p?i.createElement(i.Fragment,null,o.ag.get("queue.next-from")," ",i.createElement(H.r,{className:we,to:e},t)):o.ag.get("queue.next-up")),i.createElement(x.ZP,{value:"next-up"},i.createElement(Ce,{ariaLabel:o.ag.get("queue.next-up"),tracks:y,rowNumberOffset:1+(l?.length||0),contextUri:"spotify:app:queue:NextUp",section:Ee.NextUp,usePlayContextItem:g}))),i.createElement(ue,{itemCount:l?.length||0,isOpen:s,onClose:m,onConfirm:d}))};var Ae=a(1463),Oe=a(28638),De=a(26089);const Re="vhW0kRN8JJD5UwW4TdXi",Se=()=>{const e=(0,c.Y)(),t=(0,i.useCallback)((e=>i.createElement(De.v,{placement:"bottomEnd",arrow:"topStart",title:o.ag.get("pick-and-shuffle.upsell.title.queue")},e)),[]),a=(0,i.useMemo)((()=>[{title:o.ag.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue",render:t,disabled:e},{title:o.ag.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]),[e,t]);return i.createElement(Oe.w,null,i.createElement(Ae.n,{className:Re,links:a}))},Le=()=>{const e=(0,s.nF)(),t=(0,c.Y)();return i.createElement("section",{className:"contentSpacing"},t&&i.createElement(r.A,{from:"/queue",to:"/history"}),e&&i.createElement(l.N,{path:"/history",pageId:n.W.NOWPLAYING_HISTORY},i.createElement(Z,null)),i.createElement(l.N,{path:"/queue",pageId:n.W.NOWPLAYING_QUEUE},i.createElement(i.Suspense,{fallback:null},i.createElement(Te,null))),e&&i.createElement(Se,null))}},47991:(e,t,a)=>{a.d(t,{$:()=>i});const i=e=>e?.linked_from?.uri||e.uri}}]);
//# sourceMappingURL=xpui-routes-queue.js.map