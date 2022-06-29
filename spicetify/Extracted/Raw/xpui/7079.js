"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7079],{13768:(e,a,t)=>{t.d(a,{i:()=>o});var n=t(67294),i=t(20657),l=t(18261),r=t(48528),s=t(4232),u=t(36590),m=t(51079),c=t(27298);const o=n.memo((function(e){const{images:a,name:t,uri:o,type:d,year:k,sharingInfo:p,latest:g,showType:v,onClick:y,delegatePlayback:N=!1,isPlaying:b,onPlay:f,index:S,navigationUrl:h}=e,E=g?i.ag.get("artist.latest-release"):k;return n.createElement(l._,{menu:n.createElement(s.Y,{uri:o,sharingInfo:p})},n.createElement(u.C,{onClick:y,featureIdentifier:"album",headerText:t,uri:o,index:S,delegatePlayback:N,isPlaying:b,onPlay:f,navigationUrl:h,renderCardImage:()=>n.createElement(m.x,{images:a}),renderSubHeaderContent:()=>n.createElement(n.Fragment,null,E&&n.createElement("time",{dateTime:(k||"").toString()},E),v&&n.createElement("span",{className:c.Z.type},(0,r.R)(d)))}))}))},70369:(e,a,t)=>{t.d(a,{$:()=>n.$});var n=t(22578)},28434:(e,a,t)=>{t.d(a,{k:()=>m});var n=t(67294),i=t(28760),l=t(20657),r=t(28248),s=t(42922);const u="wi2HeHXOI471ZOh8ncCG",m=({nrTracks:e,initialTracks:a,usePlayContextItem:t})=>{const[m,c]=(0,n.useState)(!1),o=(0,n.useCallback)((()=>{c(!m)}),[m]),d=(0,n.useCallback)((({uri:e,contextUri:a,totalMilliseconds:i,name:l,artists:s,contentRating:u,isPlayable:m,playcount:c,imageUrl:o,albumUri:d},k)=>n.createElement(r.l0,{key:e,index:k,uri:e,contextUri:a,totalMilliseconds:i,name:l,artists:s,isPlayable:m,contentRating:u,playcount:c||0,imageUrl:o,albumUri:d,usePlayContextItem:t})),[t]),k=(0,n.useCallback)((e=>e.uri),[]),p=(0,n.useMemo)((()=>[r.QD.INDEX,r.QD.TITLE,r.QD.PLAYS,r.QD.DURATION]),[]);return n.createElement(s.ZP,{value:"artist-popular-tracks-list"},n.createElement(r.Pv,{ariaLabel:l.ag.get("tracklist.popular-tracks"),renderRow:d,nrTracks:Math.min(e,m?10:5),tracks:a,resolveUri:k,columns:p}),e>5?n.createElement("button",{"aria-expanded":m,className:u,onClick:o},n.createElement(i.Dy,{as:"div",variant:"minuetBold"},m?l.ag.get("artist-page.tracks.showless"):l.ag.get("artist-page.tracks.seemore"))):null)}},29464:(e,a,t)=>{t.d(a,{E:()=>m});var n=t(67154),i=t.n(n),l=t(67294),r=t(42922),s=t(34722),u=t(13768);const m=({album:e,index:a,artistURI:t})=>l.createElement(r.ZP,{value:"card",index:a},l.createElement(u.i,i()({index:a,latest:!1,showType:!0},(0,s.B$)(e,t,e.name))))},57060:(e,a,t)=>{t.d(a,{R:()=>c});var n=t(67294),i=t(20657),l=t(42922),r=t(7073),s=t(34722),u=t(19480),m=t(29464);const c=({albums:e,artistName:a,artistId:t,artistUri:c,className:o})=>e?n.createElement(l.ZP,{value:"shelf/albums"},n.createElement(u.P,{total:e.totalCount,title:i.ag.get("rich-page.popular-albums-by-artist",{artist:a}),seeAllUri:`${(0,s.GJ)(t)}:discography:${r.VZ.Album.toLowerCase()}`,seeAllLabel:i.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,className:o},(0,s.Hr)(e.items).map(((e,a)=>n.createElement(m.E,{album:e,index:a,artistURI:c,key:e.uri}))))):null},70880:(e,a,t)=>{t.d(a,{j:()=>u});var n=t(67294),i=t(28760),l=t(20657),r=t(84242),s=t(28434);const u=({artistName:e,artistUri:a,headerClassName:t,rowClassName:u,topTracks:m,topTracksTransformer:c,uri:o})=>{const d=(0,n.useMemo)((()=>m?.items.map((e=>c(e,o)))),[m?.items,c,o]),{usePlayContextItem:k}=(0,r.n)({uri:a},{featureIdentifier:"artist"});return d&&d.length>0?n.createElement("div",{className:u},n.createElement("div",null,n.createElement(i.Dy,{variant:"mesto"},l.ag.get("rich-page.popular-tracks")),n.createElement(i.Dy,{as:"h2",variant:"canon",semanticColor:"textBase",className:t},e)),n.createElement(s.k,{nrTracks:d.length,initialTracks:d,usePlayContextItem:k})):null}},55095:(e,a,t)=>{t.d(a,{y:()=>c});var n=t(67294),i=t(20657),l=t(42922),r=t(7073),s=t(34722),u=t(19480),m=t(29464);const c=({artistId:e,artistName:a,artistUri:t,className:c,singles:o})=>o?n.createElement(l.ZP,{value:"shelf/singles-and-eps"},n.createElement(u.P,{total:o.totalCount,title:i.ag.get("rich-page.popular-singles-and-eps-by-artist",{artist:a}),seeAllUri:`${(0,s.GJ)(e)}:discography:${r.VZ.Single.toLowerCase()}`,seeAllLabel:i.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,className:c},(0,s.Hr)(o.items).map(((e,a)=>n.createElement(m.E,{album:e,index:a,artistURI:t,key:e.uri}))))):null},3702:(e,a,t)=>{t.d(a,{L:()=>o});var n=t(67294),i=t(28248),l=t(42922),r=t(3775),s=t(29064),u=t(9554);t(98984);const m={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"queryAlbumTracks"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"tracks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uid"}},{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"saved"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"discNumber"}},{kind:"Field",name:{kind:"Name",value:"trackNumber"}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"relinkingInformation"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"isRelinked"}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"artists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"10"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]}}]}}]}}]}}]}}]};function c(e){return e.total_count>=2&&e.total_count<=10}const o=n.memo((function({ariaLabel:e,nrTracks:a,discs:t,albumUri:o,highlightUri:d,scrollToIndex:k,usePlayContextItem:p,hasHeaderRow:g=!0}){const v=(0,s.ZO)()===u.W.Web,{request:y}=(0,n.useContext)(r.Ax),N=(0,n.useRef)(null),b=(0,n.useRef)(!1),[f,S]=(0,n.useState)(null);(0,n.useEffect)((()=>{N.current&&(f?N.current.scrollToIndex(f):k&&N.current.scrollToIndex(k))}),[f,k]);const h=(0,n.useMemo)((()=>function(e){return c(e)?e.items.reduce(((e,a)=>(e.push(a.number-1),e.concat(Array(a.total_tracks).fill(a.number)))),[]):null}(t)),[t]),E=(0,n.useCallback)(((e,a)=>y(m,{uri:o,offset:null!==h?e-h[e]:e,limit:a}).then((e=>{if(d&&!f){const a=e?.data?.album?.tracks.items?.findIndex((e=>e.track.uri===d));S(a||-1)}return((e,a)=>{if(!c(a)||!e)return e;let t=0;return e.reduce(((e,a)=>((a.track.trackNumber<t||1===a.track.trackNumber)&&e.push({discNumber:a.track.discNumber}),e.push(a),t=a.track.trackNumber,e)),[])})(e?.data?.album?.tracks.items,t)||[]}))),[y,o,h,d,f,t]),I=(0,n.useCallback)(((e,a)=>{if("discNumber"in e)return n.createElement(i.UT,{key:a+e.discNumber,discNumber:e.discNumber});const{uid:t,track:l}=e;let r;r=l.relinkingInformation?.isRelinked?l.relinkingInformation.uri:l.uri;const s=l.playcount?parseInt(l.playcount,10):0,u=!(b.current||!d||d!==l.uri&&d!==l.relinkingInformation?.uri);return u&&(b.current=!0),n.createElement(i.Ym,{key:a+l.uri,index:a,trackNumber:l.trackNumber,contextUri:o,uri:r,uid:t,duration_ms:l.duration.totalMilliseconds,name:l.name,isPlayable:l.playability.playable,artists:l.artists.items,contentRating:l.contentRating?.label,playcount:s,shouldRenderPlayCount:!v,shouldHighLight:u,usePlayContextItem:p})}),[d,o,v,p]),C=(0,n.useMemo)((()=>(e=>e?[i.QD.INDEX,i.QD.TITLE,i.QD.DURATION]:[i.QD.INDEX,i.QD.TITLE,i.QD.PLAYS,i.QD.DURATION])(v)),[v]),T=(0,n.useCallback)((e=>"track"in e?e.track.uri:""),[]);return n.createElement(l.ZP,{value:"album-tracklist"},n.createElement(i.Pv,{key:o,ariaLabel:e,hasHeaderRow:g,rowPlaceholder:i.uD,columns:C,renderRow:I,resolveUri:T,nrTracks:c(t)?t.total_count+a:a,fetchTracks:E,limit:300,outerRef:N}))}))},23410:(e,a,t)=>{t.d(a,{M:()=>c});var n=t(67294),i=t(82789),l=t(38235),r=t(87577),s=t(89751),u=t(33607),m=t(8271);const c=({category:e,action:a,remoteConfigProperty:t,defaultVariant:c,label:o,context:d,country:k,spt:p=!1,isAnonymous:g=!1})=>{const v=(0,r.W6)(t),y=(0,m.s4)();(0,n.useEffect)((()=>{if(!v||!o)return;const t={category:e,action:a,variant:c??v,label:o,os:(0,u.y)(),...d&&{context:d},...k&&{country:k},...p&&{sp_t:(0,s.vQ)("sp_t")}};g?y.send((0,l.k)(t)):y.send((0,i.x)(t))}),[v,o,e,a,d,k,p,g,y,c])}},94233:(e,a,t)=>{t.d(a,{k:()=>r});var n=t(67294),i=t(28760);const l="rTMkDBDp47Eo12ZEQv4U",r=({copyrights:e,courtesyLine:a})=>{const t=(e||[]).map(((e,a)=>{const t=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let l;return l="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,n.createElement(i.Dy,{as:"p",variant:"finale",key:a,dir:"auto"},`${l} ${t}`)}));return a&&t.unshift(n.createElement(i.Dy,{as:"p",variant:"finale",key:t.length,dir:"auto"},a)),n.createElement("div",{className:l},t)}},34722:(e,a,t)=>{t.d(a,{B$:()=>r,GJ:()=>i,Hr:()=>n,qo:()=>l});const n=e=>e?e.reduce(((e,a)=>(e.push(a.releases.items[0]),e)),[]):[],i=e=>`spotify:app:artist:${e}`,l=e=>`spotify:artist:${e}`,r=(e,a,t)=>({artists:[{uri:a,name:t}],images:e.coverArt?.sources||[],name:e.name,uri:e.uri,year:e.date?.year,type:e.type,sharingInfo:e.sharingInfo})},48528:(e,a,t)=>{t.d(a,{R:()=>l});var n=t(20657),i=t(15066);function l(e){switch(e){case i.n.SINGLE:return n.ag.get("single");case i.n.EP:return n.ag.get("ep");case i.n.COMPILATION:return n.ag.get("compilation");case i.n.ALBUM:default:return n.ag.get("album")}}}}]);
//# sourceMappingURL=7079.js.map