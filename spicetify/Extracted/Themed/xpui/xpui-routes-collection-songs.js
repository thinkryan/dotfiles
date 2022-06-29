"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7553],{8294:(e,t,a)=>{a.d(t,{p:()=>y});var l=a(67294),r=a(20657),n=a(1838),s=a(35308),i=a(22423),o=a(28248),c=a(78462),u=a(42922),m=a(45342),d=a(49961),g=a(39412);const f=new Set(c.P0),p=new Set([]),y=l.memo((function({nrTracks:e,collectionUri:t,columns:a,uri:y,sortable:E=!0,scrollToUri:b,usePlayContextItem:k,outerDomRef:h}){const C=(0,l.useContext)(m.H),P=(0,l.useRef)(null),[S,w]=(0,l.useState)(e),{filter:D}=(0,l.useContext)(i.fo),x=(0,l.useRef)((()=>{})),[v,R]=(0,l.useState)([]),{sortState:T,setSortState:L}=(0,l.useContext)(c.Gb),_=(0,l.useCallback)((e=>{L((0,n.VK)(e,T))}),[L,T]);(0,l.useEffect)((()=>{P.current&&P.current.update()}),[T,D]),(0,l.useEffect)((()=>{P.current&&""===D&&P.current.scrollToFirstSelected()}),[D,S]),(0,l.useEffect)((()=>{w(e)}),[e]),(0,l.useEffect)((()=>{P.current&&b&&P.current.scrollToItem({uri:b})}),[b]);const I=(0,l.useCallback)((e=>{const t=e.map((e=>e.uri));x.current(),C?.remove(...t)}),[C]),U=(0,l.useCallback)(((e,t)=>{x.current=t,e.length>1?R(e):I(e)}),[I]),A=(0,l.useCallback)((async(e,t)=>{const a=await(C?.getTracks({offset:e,limit:t,uri:y,sort:(0,g.w)(T),filter:D})),l=a?.totalLength,r=a?.items||[];return"number"==typeof l&&l!==S&&w(l),r}),[D,C,S,T,y]),F=(0,l.useCallback)(((e,a)=>{const r=(0,d.X)(e.album?.images,{desiredSize:40,desiredLabel:"small"});return l.createElement(o.dx,{key:a+e.uri,index:a,contextUri:t,uri:e.uri,isPlayable:e.isPlayable,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,albumOrShow:e.album,isExplicit:e.isExplicit,isCollaborative:!1,isMixedMedia:!1,isPaywalled:!1,isUserSubscribed:!1,isLocal:e.isLocal,addedBy:[],dateAdded:e.addedAt,hasDecoratedAddedBy:!1,release_date:"",isMOGEFRestricted:e.is19PlusOnly,type:e.type,imgUrl:r?.url||"",onMove:()=>{},onInsert:()=>{},usePlayContextItem:k,allowedDropTypes:[],isDisliked:!1,playlistName:""})}),[t,k]);return l.createElement(l.Fragment,null,l.createElement(u.ZP,{value:"liked-songs-tracklist"},l.createElement(o.Pv,{ariaLabel:r.ag.get("sidebar.liked_songs"),key:t,hasHeaderRow:!0,columns:a,sortableColumns:C?.getCapabilities().canSort&&E?f:p,sortState:T,onSort:_,renderRow:F,resolveUri:e=>e.uri,resolveUid:e=>e.uri,onRemove:U,nrTracks:S,fetchTracks:A,limit:50,canFetchAllTracks:C?.getCapabilities().canFetchAllTracks,outerRef:P,outerDomRef:h})),l.createElement(s.h,{title:r.ag.get("remove_from_your_liked_songs"),isOpen:v.length>0,tracks:v,onClose:e=>{e.stopPropagation(),R([])},onRemove:I}))}))},42002:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var l=a(67294),r=a(46458),n=a(52883),s=a(72756),i=a(20657),o=a(90110),c=a(70369),u=a(19565),m=a(61048),d=a(1663),g=a(55120),f=a(2751),p=a(35213),y=a(22423),E=a(28248),b=a(78462),k=a(61412),h=a(69846),C=a(23232),P=a(1169),S=a(4236),w=a(30947),D=a(55911),x=a(53646),v=a(88247),R=a(45342),T=a(84242),L=a(29255),_=a(12498),I=a(25916),U=a(39412),A=a(8294);const F=l.lazy((()=>Promise.all([a.e(1814),a.e(3186),a.e(682)]).then(a.bind(a,23186)))),O=[E.QD.INDEX,E.QD.TITLE,E.QD.ALBUM,E.QD.ADDED_AT,E.QD.DURATION],M="your_library",z=({metadata:e,canFilter:t,canSort:a})=>{const{uri:r,name:E,totalLength:h}=e,{filterBoxApiRef:R,filterBoxDomRef:L,tracklistDomRef:I,handleKeyDown:F}=(0,P.Q)(),z=(0,S.k)()&&h>0,B=h>0,N=(0,x.Y5)("#5038a0"),{filter:Q}=(0,l.useContext)(y.fo),{sortState:K}=(0,l.useContext)(b.Gb),q=(0,n.k6)(),G="POP"!==q.action?new URLSearchParams(q.location.search).get("uri"):null,{isPlaying:H,togglePlay:Z,usePlayContextItem:$}=(0,T.n)((0,v.I)(r,(0,U.w)(K),Q),{featureIdentifier:M,referrerIdentifier:"your_library"}),X=()=>Z();return l.createElement("section",{role:"presentation",className:f.Z.playlist,"data-testid":"playlist-page",onKeyDown:F},l.createElement(c.$,null,i.ag.get("playlist.page-title",E)),l.createElement(C.s,{metadata:e,isPlaying:H,togglePlay:X,backgroundColor:N}),l.createElement(w.o,{backgroundColor:N},l.createElement(w.F,null,B?l.createElement(g.$,{onClick:X,isPlaying:H,size:D.qE.lg,uri:r,ariaPauseLabel:i.ag.get("playlist.a11y.pause",E),ariaPlayLabel:i.ag.get("playlist.a11y.play",E)}):null,e.totalLength>0&&l.createElement(_.v,{uri:r,renderEnabled:()=>l.createElement(k.v,{uri:r})}),z?l.createElement(o.o,{uri:r,isFollowing:!0,onFollow:()=>{},size:o.q.md}):null,t&&a&&l.createElement("div",{className:f.Z.searchBoxContainer},l.createElement(l.Suspense,{fallback:null},l.createElement(m.K,{placeholder:i.ag.get("playlist.search_in_playlist"),filterBoxApiRef:R,outerRef:L})),l.createElement(p.l,{columns:b.P0})))),l.createElement("div",{className:"contentSpacing"},h>0?l.createElement(l.Suspense,{fallback:l.createElement(d.h,{hasError:!1,errorMessage:i.ag.get("error.request-collection-tracks-failure")})},l.createElement(A.p,{nrTracks:h,columns:O,collectionUri:r,scrollToUri:G,usePlayContextItem:$,outerDomRef:I})):l.createElement(u.u,{message:i.ag.get("collection.empty-page.songs-subtitle"),title:i.ag.get("collection.empty-page.songs-title"),linkTo:"/search",linkTitle:i.ag.get("collection.empty-page.songs-cta"),renderInline:!0},l.createElement(s.F,null))))},B=l.memo((function(){const e=(0,I.b)(),t=(0,l.useContext)(R.H).getCapabilities(),a=(0,r.v9)(L.n5),{isEnhanced:n}=(0,h.U)(`spotify:user:${a}:collection`);if(e){const a=l.createElement(b.kz,{uri:e.uri},l.createElement(y.hz,{uri:e.uri},l.createElement(z,{metadata:e,canFilter:t.canFilter&&e.totalLength>0,canSort:t.canSort&&e.totalLength>0})));return l.createElement(_.v,{uri:e.uri,renderEnabled:()=>n?l.createElement(l.Suspense,{fallback:null},l.createElement(b.kz,{uri:e.uri},l.createElement(F,{metadata:{...e,collaborators:{count:1,items:[{isOwner:!0,user:e.owner,tracksAdded:e.totalLength}]}},capabilities:t,featureIdentifier:M}))):a,renderDisabled:()=>a})}return l.createElement(d.h,{hasError:!1,errorMessage:i.ag.get("error.not_found.title.playlist"),loadOffline:t.canModifyOffline})}))},23232:(e,t,a)=>{a.d(t,{s:()=>l.s});var l=a(40786)}}]);
//# sourceMappingURL=xpui-routes-collection-songs.js.map