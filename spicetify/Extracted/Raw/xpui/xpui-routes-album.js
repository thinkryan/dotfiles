"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[2342],{90110:(e,n,i)=>{i.d(n,{q:()=>A,o:()=>C});var a=i(67294),t=i(94184),l=i.n(t),d=i(69518),s=i.n(d),m=i(10986),o=i(59823),r=i(20657),c=i(83692),k=i(26010),u=i(69010),v=i(80946),S=i(6116),N=i(38209),g=i(40080);const p="l_MW0G9qeeCKlVJwBykT",F="BKsbV2Xl786X9a09XROH",y="HbKLiGoYM4dpuK8L4TMX",b="_APVWqivXc4YqgsnpFkP",h="VmwiDoU6RpqyzK_n7XRO",E="rEx3EYgBzS8SoY7dmC6x",f="z3zia5snl987x676qe5w";let A;!function(e){e[e.sm=24]="sm",e[e.md=32]="md"}(A||(A={}));const w=e=>{const{currentTarget:n,detail:i}=e;i>0&&n&&n.blur()},C=({uri:e,isFollowing:n,onFollow:i,size:t=A.sm,className:d,onClick:C=(()=>{})})=>{const D={"--size":`${t}px`},{useDownloading:I,useDownloadCapability:T}=(0,a.useContext)(k.I),[R,P]=(0,a.useState)(!1),[U,O]=T(s().isEpisode(e)),[V,x]=(0,a.useState)(!1),{currentAvailability:L,progress:M,beginDownload:_,clearDownload:B}=I(e);((e,n)=>{const i=(0,N.r)(),t=(0,a.useRef)(!1);(0,a.useEffect)((()=>{e===u.V8.DOWNLOADING&&!1===t.current&&(t.current=!0,i.say(r.ag.get("download.downloading",n.totalItems)))}),[i,e,n]);const l=(0,g.D)(e);(0,a.useEffect)((()=>{l===u.V8.DOWNLOADING&&e===u.V8.YES&&(t.current=!1,i.say(r.ag.get("download.complete")))}),[i,l,e])})(L,M);const z=(0,a.useCallback)((e=>{O===u.v$.DOWNLOADING_NOT_ALLOWED?(x(!0),C(e,u.mc.notAllowed)):(!1===n?(i(),P(!0)):_(),C(e,u.mc.download)),w(e)}),[_,O,n,C,i]),q=(0,a.useCallback)((e=>{B(),w(e),C(e,u.mc.clear)}),[B,C]);return(0,a.useEffect)((()=>{!0===R&&!0===n&&(_(),P(!1))}),[n,R,_]),U===u.PQ.NO_DOWNLOAD_CAPABILITY?null:O===u.v$.DOWNLOADING_NOT_ALLOWED?a.createElement("div",{className:F},a.createElement(c.w,{label:r.ag.get("download.download")},a.createElement("button",{className:l()(y,d),role:"switch",onClick:z,"aria-label":r.ag.get("download.download"),"aria-checked":!1},a.createElement(m.D,{iconSize:t}))),V&&a.createElement("div",{className:f},a.createElement(v.E,{withTopLeftPointer:!0,horizontal:!0,onClose:()=>{x(!1)}},r.ag.get("download.upsell")))):L===u.V8.YES?a.createElement(c.w,{label:r.ag.get("download.remove")},a.createElement("button",{className:l()(y,d,b),role:"switch",onClick:q,"aria-label":r.ag.get("download.remove"),"aria-checked":!0},a.createElement(o.E,{iconSize:t}))):L===u.V8.NO?a.createElement(c.w,{label:r.ag.get("download.download")},a.createElement("button",{className:l()(y,d),role:"switch",onClick:z,"aria-label":r.ag.get("download.download"),"aria-checked":!1},a.createElement(m.D,{iconSize:t}))):a.createElement("div",{className:l()(h,d),role:"switch","aria-checked":!0},a.createElement(c.w,{label:r.ag.get("download.cancel")},a.createElement("button",{style:D,className:l()(y,p,d),onClick:q,"aria-label":r.ag.get("download.cancel")})),a.createElement("span",{style:D,className:l()(E,p)},a.createElement(S.e,{"aria-valuetext":r.ag.get("progress.downloading-tracks"),percentage:M.percentage,size:t})))}},22578:(e,n,i)=>{i.d(n,{$:()=>k});var a=i(67294),t=i(64593),l=i(20657),d=i(69691),s=i(8341),m=i(89952),o=i(52883),r=i(24183);function c(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const k=({children:e,usePlayingItem:n})=>{let i=c(e);(e=>{const{mainLandmarkRef:n}=(0,r.Oh)(),i=(0,o.k6)(),t=i.location?.state?.preventMoveFocus,l=(0,a.useRef)(i.length<2);l.current=i.length<2,(0,a.useEffect)((()=>{const i=n.current;!t&&!l.current&&i&&e&&(i.setAttribute("aria-label",e),i.focus())}),[e,n,t])})(e);const{isPlaying:k}=(0,d.IK)(),u=(0,s.Y)((e=>e?.item));return u&&(k||n)&&((0,m.G_)(u)?i=[u.name,u.artists.map((e=>e.name)).join(l.ag.getSeparator())].join(" • "):(0,m.iw)(u)?i=[u.name,u.show.name].join(" • "):(0,m.k6)(u)&&(i=c(l.ag.get("ad-formats.advertisement")))),a.createElement(t.q,{defaultTitle:"Spotify",defer:!1},a.createElement("title",null,i))}},38288:(e,n,i)=>{i.r(n),i.d(n,{default:()=>Oe});var a=i(67294),t=i(46458),l=i(52883),d=i(28760),s=i(62312),m=i(41374),o=i(87577),r=i(40003),c=i(20657),k=i(90110),u=i(95661),v=i(13768),S=i(4232),N=i(70369),g=i(42273),p=i(59482),F=i(72907),y=i(1663),b=i(11414),h=i(18937),E=i(74380),f=i(6489),A=i(91931),w=i(38894);const C=({children:e,content:n,onIntercept:i=(()=>{})})=>{const t=(0,w.g)();let l;try{l=a.Children.only(e)}catch(n){return a.createElement(a.Fragment,null,e)}return t?a.createElement(A.Nt,{trigger:"click",action:"open",placement:"bottom",offset:[0,20],content:n},a.cloneElement(l,{onClick:i})):a.createElement(a.Fragment,null,e)};var D=i(21770),I=i(99450),T=i(1447),R=i(42922),P=i(70108),U=i(56802);const O={container:"WHINADihyTCx2VFxwY8X"},V=({title:e,description:n})=>{const i=(0,t.I0)(),l=(0,T.qT)(),s=(0,U.o)();return(0,a.useEffect)((()=>{s({intent:"open-upsell",type:"view"})}),[s]),a.createElement(A.yv,null,a.createElement("div",{className:O.container},a.createElement(d.Dy,{as:"p",className:O.title,variant:"cello"},e),a.createElement(d.Dy,{as:"p",className:O.description,variant:"mesto"},n),a.createElement("div",{className:O.buttonContainer},a.createElement(D.oM,{onClick:()=>{s({intent:"close-upsell",type:"click"}),l({type:"close"})}},c.ag.get("action-trigger.button.not-now")),a.createElement(I.D,{onClick:()=>{s({intent:"login",type:"click"}),i((0,P.sX)())}},c.ag.get("login")))))},x=e=>a.createElement(R.ZP,{value:"tooltip-with-cta"},a.createElement(V,e)),L=({uri:e,...n})=>{const i=(0,E.j5)();return a.createElement(C,{content:a.createElement(x,{title:c.ag.get("action-trigger.save-library"),description:c.ag.get("action-trigger.save-album")}),onIntercept:()=>i.storeAction(h.wH,{operation:f.pT.ADD,uris:[e]})},a.createElement(b.H,n))};var M=i(55120),_=i(80322),B=i(4236),z=i(53538),q=i(30947),W=i(55911),$=i(32626),Z=i(20246),K=i(94233),Y=i(53646),j=i(98984),G=i(4383),H=i(84242),X=i(55773),Q=i(54444),J=i(7073),ee=i(8247),ne=i(16526),ie=i(43315);var ae=i(18686),te=i(23410),le=i(94321),de=i(29255),se=i(69518),me=i.n(se),oe=i(30005),re=i(21691);const ce=({releases:e})=>a.createElement(oe.v,null,e.map((e=>a.createElement(re.s,{key:e.uri,role:"menuitem",to:me().from(e.uri).toURLPath(!0)},e.name))));var ke=i(67154),ue=i.n(ke),ve=i(52200);const Se={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getRichAlbum"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"albumUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"1"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"discography"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTopTracks"}},{kind:"FragmentSpread",name:{kind:"Name",value:"richPopularReleases"}},{kind:"FragmentSpread",name:{kind:"Name",value:"richAlbums"}},{kind:"FragmentSpread",name:{kind:"Name",value:"richSinglesAndEps"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"relatedContent"}}]}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"message"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTopTracks"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ArtistDiscography"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"topTracks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"4"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"albumOfTrack"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"imageSources"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}}]}}]}}]}}]}},...ve.rD.definitions,...ve.rA.definitions,{kind:"FragmentDefinition",name:{kind:"Name",value:"richPopularReleases"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ArtistDiscography"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"popularReleasesAlbums"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"year"}}]}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richAlbums"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ArtistDiscography"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"albums"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"releases"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"year"}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"imageSources"}}]}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richSinglesAndEps"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ArtistDiscography"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"singles"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"releases"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"year"}}]}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"imageSources"}}]}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"relatedContent"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Artist"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"relatedContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"relatedArtists"}},{kind:"FragmentSpread",name:{kind:"Name",value:"discoveredOn"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"relatedArtists"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"RelatedContent"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"relatedArtists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"20"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"visuals"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"imageSources"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"discoveredOn"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"RelatedContent"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"discoveredOnV2"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"20"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Playlist"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"images"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"imageSources"}}]}}]}}]}}]}}]}}]}}]}}]};var Ne=i(57060),ge=i(34722),pe=i(46309),Fe=i(19480);const ye=({artistId:e,className:n,discoveredOn:i})=>{if(!i)return null;const t=i.filter((e=>(e=>"Playlist"===e?.__typename)(e.data))).map((e=>({...e.data})));return a.createElement(R.ZP,{value:"shelf/discovered-on"},a.createElement(Fe.P,{title:c.ag.get("discovered_on"),total:i.length,seeAllUri:`${(0,ge.GJ)(e)}:discovered-on`,className:n},t.map(((e,n)=>{const i=e;return a.createElement(pe.Z,{index:n,key:i.uri,uri:i.uri,name:i.name,authorName:i.name,description:i.description||"",images:i.images?.items?.[0]?.sources||[]})}))))};var be=i(89477);const he=({artistId:e,className:n,fansAlsoLike:i})=>a.createElement(R.ZP,{value:"shelf/fans-also-like"},a.createElement(Fe.P,{total:i.length,title:c.ag.get("rich-page.fans-also-like"),seeAllUri:`${(0,ge.GJ)(e)}:related`,className:n},i.map(((e,n)=>a.createElement(R.ZP,{value:"card",index:n,key:e.uri},a.createElement(be.I,{index:n,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources||[]})))))),Ee=({artistName:e,artistUri:n,className:i,popularReleases:t})=>a.createElement(R.ZP,{value:"shelf/popular-releases"},a.createElement(Fe.P,{total:t.length,title:c.ag.get("rich-page.popular-releases-by-artist",{artist:e}),className:i},t.map(((i,t)=>a.createElement(R.ZP,{value:"card",index:t,key:i.uri},a.createElement(v.i,ue()({index:t,showType:!0},(0,ge.B$)(i,n,e))))))));var fe=i(70880),Ae=i(55095);const we=({track:{uri:e,name:n,playcount:i,duration:{totalMilliseconds:a},contentRating:t,artists:{items:l},albumOfTrack:d,playability:{playable:s}}},m)=>({uri:e,contextUri:m,totalMilliseconds:a,name:n,contentRating:t?.label||J.KS.None,isPlayable:s,playcount:parseInt(i||"0",10),artists:l.map((e=>({name:e.profile.name,uri:e.uri}))),imageUrl:d?.coverArt?.sources?.length?d?.coverArt.sources[0].url:"",albumUri:d?.uri??""}),Ce="FKHM7enSR0Ny_2IocKZA",De=a.memo((function(e){const{artistId:n,artistName:i,artistUri:t}=e,{albumId:d}=(0,l.UO)(),s=me().albumURI(d).toURI(),m=(o={uri:s},(0,j.a)(Se,o,r));var o,r;if(m.loading||!m.data?.albumUnion)return a.createElement(y.h,{hasError:null!==m.error,errorMessage:c.ag.get("error.not_found.title.album")});const k=m.data.albumUnion.artists.items[0];if(!k)throw new Error("Missing artist in data.");const{discoveredOnV2:u,relatedArtists:v}=k.relatedContent,{topTracks:S,popularReleasesAlbums:N,albums:g,singles:p}=k.discography,F={artistId:n,artistName:i,artistUri:t};return a.createElement("div",{className:"contentSpacing"},a.createElement(fe.j,{rowClassName:Ce,artistUri:t,artistName:i,topTracks:S,topTracksTransformer:we,uri:s}),a.createElement(Ee,{className:Ce,artistUri:t,artistName:i,popularReleases:N.items}),a.createElement(Ne.R,ue()({albums:g,className:Ce},F)),a.createElement(Ae.y,ue()({singles:p,className:Ce},F)),a.createElement(he,{artistId:n,className:Ce,fansAlsoLike:v.items}),a.createElement(ye,{className:Ce,discoveredOn:u.items,artistId:n}))})),Ie={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getAlbumMetadata"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"albumArtists"}},{kind:"FragmentSpread",name:{kind:"Name",value:"albumCoverArt"}},{kind:"FragmentSpread",name:{kind:"Name",value:"albumDiscs"}},{kind:"FragmentSpread",name:{kind:"Name",value:"albumTracksMetadata"}},{kind:"FragmentSpread",name:{kind:"Name",value:"albumReleases"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isoString"}},{kind:"Field",name:{kind:"Name",value:"precision"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}},{kind:"Field",name:{kind:"Name",value:"reason"}}]}},{kind:"Field",name:{kind:"Name",value:"label"}},{kind:"Field",name:{kind:"Name",value:"copyright"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"text"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"courtesyLine"}},{kind:"Field",name:{kind:"Name",value:"saved"}},{kind:"Field",name:{kind:"Name",value:"sharingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shareUrl"}},{kind:"Field",name:{kind:"Name",value:"shareId"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"moreAlbumsByArtist"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumArtists"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"visuals"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sharingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shareUrl"}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumCoverArt"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"extractedColors"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorRaw"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hex"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumDiscs"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"discs"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"number"}},{kind:"Field",name:{kind:"Name",value:"tracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumTracksMetadata"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}},{kind:"Field",name:{kind:"Name",value:"reason"}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumReleases"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"releases"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"moreAlbumsByArtist"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"moreAlbumsByArtist"},name:{kind:"Name",value:"artists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"1"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"discography"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"popularReleases"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"10"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"releases"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"1"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"year"}}]}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}},{kind:"Field",name:{kind:"Name",value:"reason"}}]}},{kind:"Field",name:{kind:"Name",value:"sharingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shareId"}},{kind:"Field",name:{kind:"Name",value:"shareUrl"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]};var Te=i(3702);const Re={album:"n8Bz0c0v17whD3KfMdOk",albumWindowedMessage:"zddjxV2lX9ukNM5QXloA",albumWindowedMessageHeader:"lVqlPjQLuQhK2flsxB78",albumWindowedMessageDescription:"O_EguRjsZ4uI1hHamkOA",moreAlbumsByArtist:"jcaQQxoVnuuhtVwDJU1R",releasesDropdown:"fLS8v3_EfBadEerbGVoR",footer:"in4OjUTflcsoj9RUpf05"};function Pe(e){switch(e){case J.VZ.Single:return c.ag.get("single");case J.VZ.Ep:return c.ag.get("ep");case J.VZ.Compilation:return c.ag.get("compilation");case J.VZ.Album:default:return c.ag.get("album")}}const Ue=({uri:e,album:n})=>{const i=(0,l.k6)(),y=(0,l.TH)(),h=(0,U.o)(),E=(0,B.k)(),{spec:f,logger:A,UBIFragment:w}=(0,Q.fU)(r.createDesktopAlbumEventFactory,{data:{uri:e}}),C=(0,a.useMemo)((()=>f.trackListFactory()),[f]),D=(0,a.useMemo)((()=>f.moreByArtistShelfFactory()),[f]),I=a.useMemo((()=>f.actionBarFactory()),[f]),T=n.moreAlbumsByArtist?.items[0]?.discography?.popularReleases?.items,[R,P]=(0,G.Z)(e),O=(0,t.v9)((e=>e.platform?.isBrowser)),V=(0,X.vI)(ne.k.RichAlbumPage,y),x=(0,o.W6)(ee.F3),j=V||x===ee.Wp.VARIANT;const se=parseInt(new URLSearchParams((0,l.TH)().search).get("index")||"0",10),me=(0,_.Y)(e),{usePlayContextItem:oe,togglePlay:re,isPlaying:ke,isActive:ue}=(0,H.n)({uri:me},{featureIdentifier:"album"}),ve=(0,a.useCallback)((()=>{const n=(0,z.aK)({isPlaying:ke,isActive:ue,spec:I.playButtonFactory(),logger:A,uri:e});re({loggingParams:n})}),[ke,ue,re,I,A,e]),Se=(0,a.useCallback)((async()=>{let n;const i=I.saveButtonFactory();n=R?i.hitDislike({itemToBeDisliked:e}):i.hitLike({itemToBeLiked:e}),A.logInteraction(n),h({targetUri:e,intent:R?"unsave":"save",type:"click"});try{await P(!R)}catch{}}),[h,e,R,P,I,A]),Ne=(0,a.useCallback)(((e,n)=>{if(f){const e=f.headerFactory().artistNameFactory().hitUiNavigate({destination:n.uri});A.logInteraction(e)}}),[A,f]),ge=(0,a.useCallback)((()=>new URLSearchParams(i.location.search.slice(1)).get("highlight")||""),[i.location.search]),pe=n.uri,Fe=n.name,ye=n.type,be=n.date?.isoString,he=n.tracks.totalCount,Ee=(n.coverArt?.sources||[]).map((e=>({url:e.url,width:e.width||void 0,height:e.height||void 0}))),fe=n.coverArt?.extractedColors?.colorRaw.hex,Ae=n.artists.items.map((e=>({name:e.profile.name,images:(e.visuals.avatarImage?.sources||[]).map((e=>({url:e.url,width:e.width||void 0,height:e.height||void 0}))),uri:e.uri,id:e.id}))),we=Ae[0],Ce=n.tracks.items.some((e=>e.track.playability.playable)),Ie=n.playability.reason===J.Ku.CatalogueRestricted,Ue=(0,a.useMemo)((()=>({total_count:n.discs.totalCount,items:n.discs.items.map((e=>({number:e.number,total_tracks:e.tracks.totalCount})))})),[n.discs]),Oe=n.copyright.items,Ve=n.courtesyLine,xe=n.tracks.items.reduce(((e,n)=>e+n.track.duration.totalMilliseconds),0),Le=n.tracks.items.length>0?xe/n.tracks.items.length*n.tracks.totalCount:0,Me=n.tracks.items.length<n.tracks.totalCount,_e=ge(),Be=E;(0,Y.Y5)(fe||null);const ze=(0,a.useCallback)((()=>{const e=`${Fe} - ${Pe(ye)} by ${Ae.map((e=>e.name)).join(c.ag.getSeparator())}`,n=c.ag.get("album.page-title",Fe);return j?e:n}),[Fe,ye,Ae,j]),qe=(0,t.v9)(de.n5),We=(0,t.v9)(le.rZ),$e=(0,t.v9)(de.Gg),Ze=$e.isAnonymous,Ke=$e.overrides?.locale??$e.locale;return(0,te.M)({category:"ralph_cookie_test",action:"remote-config-response",remoteConfigProperty:ee.F3,label:"dwp",context:e,country:qe?We:"",spt:!0,isAnonymous:Ze}),a.createElement("section",{className:Re.album,"data-testid":"album-page"},a.createElement(N.$,null,ze()),a.createElement(g.gF,{backgroundColor:fe},a.createElement(p.W,null,a.createElement(M.$,{size:W.qE.sm,onClick:()=>re(),disabled:!Ce,isPlaying:ke,uri:e}),a.createElement(F.i,{text:Fe,dragUri:e,dragLabel:Fe})),a.createElement($._P,{menu:a.createElement(S.Y,{uri:n.uri,artistUri:Ae?.[0]?.uri,sharingInfo:n.sharingInfo})},a.createElement(g.Oz,{dragUri:pe,images:Ee,name:Fe,placeholderType:"album"})),a.createElement(g.sP,null,a.createElement(g.dy,{small:!0,uppercase:!0},Pe(ye)),a.createElement($._P,{menu:a.createElement(S.Y,{uri:n.uri,artistUri:Ae?.[0]?.uri,sharingInfo:n.sharingInfo})},a.createElement(g.xd,{dragUri:n.uri,dragLabel:n.name},Fe)),a.createElement(g.QS,{creators:Ae,onCreatorClick:Ne,releaseDate:be,totalTracks:he,durationMilliseconds:Le,isEstimatedDuration:Me}))),a.createElement(q.o,{backgroundColor:fe},a.createElement(q.F,null,a.createElement(M.$,{onClick:ve,disabled:!Ce,isPlaying:ke,size:W.qE.lg,uri:e}),a.createElement(L,{isAdded:!!R,onClick:Se,disabled:!E,size:b.q.md,uri:e}),Be?a.createElement(k.o,{uri:e,isFollowing:!!R,onClick:(n,i)=>(0,z.l7)(i,I,A,e),onFollow:Se,size:k.q.md}):null,a.createElement(Z.y,{onShow:()=>(0,z.qq)(I,A),menu:a.createElement(S.Y,{uri:n.uri,artistUri:Ae?.[0]?.uri,sharingInfo:n.sharingInfo})},a.createElement(u.z,{label:c.ag.get("more.label.context",Fe)})))),Ie?a.createElement("div",{className:Re.albumWindowedMessage},a.createElement(d.Dy,{as:"h2",variant:"cello",className:Re.albumWindowedMessageHeader},c.ag.get("windowed.product-album-header")),a.createElement("div",{className:Re.albumWindowedMessageDescription},c.ag.get("windowed.product-album-description"))):null,a.createElement("div",{className:"contentSpacing"},a.createElement(w,{spec:C},a.createElement(Te.L,{ariaLabel:Fe,nrTracks:he,discs:Ue,albumUri:pe,highlightUri:_e,scrollToIndex:se,usePlayContextItem:oe})),a.createElement("div",{className:Re.footer},a.createElement("div",null,n.date?.isoString&&a.createElement(d.Dy,{as:"p",variant:"mesto"},(0,ie.BI)((0,ie.RX)(n.date.isoString),Ke,{year:"numeric",month:"long",day:"numeric"})),a.createElement(K.k,{copyrights:Oe,courtesyLine:Ve})),n.releases.items.length>0&&a.createElement($.xV,{menu:a.createElement(ce,{releases:n.releases.items})},((e,i,t)=>a.createElement("button",{ref:t,className:Re.releasesDropdown,type:"button",onClick:i},a.createElement(d.Dy,{variant:"mesto"},c.ag.get("album-page.more-releases",n.releases.items.length)),e?a.createElement(s.U,{className:Re.chevron,iconSize:16}):a.createElement(m.i,{className:Re.chevron,iconSize:16})))))),j&&O?a.createElement("div",{"data-testid":"rich-album"},a.createElement(De,{artistId:we?.id,artistName:we?.name,artistUri:we?.uri})):a.createElement(a.Fragment,null,T?.length>0&&a.createElement("div",{className:"contentSpacing"},a.createElement(w,{spec:D},a.createElement(ae.q,{index:0,id:"more-albums",className:Re.moreAlbumsByArtist,title:c.ag.get("album-page.more-by-artist",Ae?.[0]?.name),total:T.length,seeAllUri:`${Ae?.[0]?.uri.replace("artist","app:artist")}:discography`,seeAllLabel:c.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0},T.map(((e,n)=>{const i=e.releases.items[0];return a.createElement(v.i,{index:n,key:i.uri,artists:Ae,images:i.coverArt?.sources||[],name:i.name,uri:i.uri,year:i.date?.year,type:i.type,sharingInfo:i.sharingInfo})})))))))},Oe=a.memo((function(){const{albumId:e}=(0,l.UO)(),n=`spotify:album:${e}`,{loading:i,error:t,data:d}=(s={uri:n},m={cacheTime:15*j.y},(0,j.a)(Ie,s,m));var s,m;return i||!d?.album?a.createElement(y.h,{hasError:null!==t,errorMessage:c.ag.get("error.not_found.title.album")}):a.createElement(Ue,{uri:n,album:d.album})}))},38894:(e,n,i)=>{i.d(n,{g:()=>l});var a=i(46458),t=i(29255);const l=()=>(0,a.v9)(t.Gg).isAnonymous},53538:(e,n,i)=>{i.d(n,{aK:()=>d,l7:()=>l,qq:()=>t});var a=i(69010);const t=(e,n)=>{const i=e.contextMenuButtonFactory().hitUiReveal();n.logInteraction(i)},l=(e,n,i,t)=>{let l;e===a.mc.download?l=n.downloadButtonFactory().hitDownload({itemToDownload:t}):e===a.mc.clear&&(l=n.downloadButtonFactory().hitRemoveDownload({itemToRemoveFromDownloads:t})),l&&i.logInteraction(l)},d=({isPlaying:e,isActive:n,spec:i,logger:a,uri:t})=>{let l;return l=e?i.hitPause({itemToBePaused:t}):n?i.hitResume({itemToBeResumed:t}):i.hitPlay({itemToBePlayed:t}),a.logInteraction(l)}},40080:(e,n,i)=>{i.d(n,{D:()=>t});var a=i(67294);function t(e){const n=(0,a.useRef)();return(0,a.useEffect)((()=>{n.current=e}),[e]),n.current}}}]);
//# sourceMappingURL=xpui-routes-album.js.map