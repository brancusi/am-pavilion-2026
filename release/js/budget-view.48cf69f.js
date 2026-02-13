(function(){
shadow$provide[56]=function(ec,Xd,P){function na(Mb,qb){const Ga=Object.keys(Mb);var sa=Object.keys(qb);if(Ga.length!==sa.length)return!1;sa=JSON.stringify(Object.keys(Mb.breakpoints||{}));const ja=JSON.stringify(Object.keys(qb.breakpoints||{}));return sa!==ja?!1:Ga.every(Da=>{const Ba=Mb[Da];Da=qb[Da];return typeof Ba==="function"?`${Ba}`===`${Da}`:Object.prototype.toString.call(Ba)!=="[object Object]"&&!Array.isArray(Ba)||Object.prototype.toString.call(Da)!=="[object Object]"&&!Array.isArray(Da)?
Ba===Da:na(Ba,Da)})}function $a(Mb){return Mb.concat().sort((qb,Ga)=>qb.name>Ga.name?1:-1).map(qb=>qb.options)}P.areOptionsEqual=na;P.arePluginsEqual=function(Mb,qb){if(Mb.length!==qb.length)return!1;Mb=$a(Mb);const Ga=$a(qb);return Mb.every((sa,ja)=>na(sa,Ga[ja]))};P.canUseDOM=function(){return!(typeof window==="undefined"||!window.document||!window.document.createElement)};P.sortAndMapPluginToOptions=$a};
shadow$provide[57]=function(ec,Xd,P){function na(mb){return typeof mb==="boolean"}function $a(mb){return Math.abs(mb)}function Mb(mb){return mb[qb(mb)]}function qb(mb){return Math.max(0,mb.length-1)}function Ga(mb,jb=0){return Array.from(Array(mb),(cc,Wb)=>jb+Wb)}function sa(mb,jb){return[mb,jb].reduce((cc,Wb)=>{Object.keys(Wb).forEach(tc=>{const Gc=cc[tc],Oc=Wb[tc],Rc=Object.prototype.toString.call(Gc)==="[object Object]"&&Object.prototype.toString.call(Oc)==="[object Object]";cc[tc]=Rc?sa(Gc,Oc):
Oc});return cc},{})}function ja(mb,jb){return typeof jb.MouseEvent!=="undefined"&&mb instanceof jb.MouseEvent}function Da(mb,jb){const cc={start:function(){return 0},center:function(Wb){return(jb-Wb)/2},end:function(Wb){return jb-Wb}};return{measure:function(Wb,tc){return typeof mb==="string"?cc[mb](Wb):mb(jb,Wb,tc)}}}function Ba(){let mb=[];const jb={add:function(cc,Wb,tc,Gc={passive:!0}){let Oc;"addEventListener"in cc?(cc.addEventListener(Wb,tc,Gc),Oc=()=>cc.removeEventListener(Wb,tc,Gc)):(cc.addListener(tc),
Oc=()=>cc.removeListener(tc));mb.push(Oc);return jb},clear:function(){mb=mb.filter(cc=>cc())}};return jb}function Fb(mb,jb,cc,Wb){function tc(Sc){if(md){Lc||(Lc=Sc,cc(),cc());var td=Sc-Lc;Lc=Sc;for(ld+=td;ld>=Rc;)cc(),ld-=Rc;Wb(ld/Rc);md&&=jb.requestAnimationFrame(tc)}}function Gc(){jb.cancelAnimationFrame(md);Lc=null;md=ld=0}const Oc=Ba(),Rc=1E3/60;let Lc=null,ld=0,md=0;return{init:function(){Oc.add(mb,"visibilitychange",()=>{mb.hidden&&(Lc=null,ld=0)})},destroy:function(){Gc();Oc.clear()},start:function(){md||=
jb.requestAnimationFrame(tc)},stop:Gc,update:cc,render:Wb}}function Eb(mb,jb){jb=jb==="rtl";const cc=mb==="y",Wb=!cc&&jb?-1:1;return{scroll:cc?"y":"x",cross:cc?"x":"y",startEdge:cc?"top":jb?"right":"left",endEdge:cc?"bottom":jb?"left":"right",measureSize:function(tc){const {height:Gc,width:Oc}=tc;return cc?Gc:Oc},direction:function(tc){return tc*Wb}}}function $b(mb=0,jb=0){function cc(tc){return tc<mb||tc>jb}const Wb=$a(mb-jb);return{length:Wb,max:jb,min:mb,constrain:function(tc){return cc(tc)?tc<
mb?mb:jb:tc},reachedAny:cc,reachedMax:function(tc){return tc>jb},reachedMin:function(tc){return tc<mb},removeOffset:function(tc){return Wb?tc-Wb*Math.ceil((tc-jb)/Wb):tc}}}function va(mb,jb,cc){function Wb(ld){return cc?$a((Oc+ld)%Oc):Gc(ld)}function tc(){return va(mb,Rc,cc)}const {constrain:Gc}=$b(0,mb),Oc=mb+1;let Rc=Wb(jb);const Lc={get:function(){return Rc},set:function(ld){Rc=Wb(ld);return Lc},add:function(ld){return tc().set(Rc+ld)},clone:tc};return Lc}function lb(mb,jb,cc,Wb,tc,Gc,Oc,Rc,Lc,
ld,md,Sc,td,sd,Ad,Qd,Rd,Ce,Fe){function ue(Ya){if(!ja(Ya,Wb)&&Ya.touches.length>=2)return Nf(Ya);var Ue=Gc.readPoint(Ya),Se=Gc.readPoint(Ya,ef);Ue=$a(Ue-Ef);Se=$a(Se-hh);if(!qe&&!ie){if(!Ya.cancelable)return Nf(Ya);qe=Ue>Se;if(!qe)return Nf(Ya)}Se=Gc.pointerMove(Ya);Ue>Qd&&(Jg=!0);ld.useFriction(.3).useDuration(.75);Rc.start();tc.add(Od(Se));Ya.preventDefault()}function Nf(Ya){var Ue=md.byDistance(0,!1).index!==Sc.get();Ya=Gc.pointerUp(Ya)*(Ad?Yd:Ge)[ie?"mouse":"touch"];{var Se=Od(Ya),Te=Sc.add(Math.sign(Se)*
-1);const xg=md.byDistance(Se,!Ad).distance;Ue=Ad||$a(Se)<wf?xg:Rd&&Ue?xg*.5:md.byIndex(Te.get(),0).distance}Ya===0||Ue===0?Ya=0:$a(Ya)<=$a(Ue)?Ya=0:(Se=$a(Ya),Te=$a(Ue),Se=$a(Se-Te),Ya=$a(Se/Ya));Se=Ya;Ya=ze-10*Se;Se=Ce+Se/50;od=qe=!1;lg.clear();ld.useDuration(Ya).useFriction(Se);Lc.distance(Ue,!Ad);ie=!1;td.emit("pointerUp")}function Gd(Ya){Jg&&(Ya.stopPropagation(),Ya.preventDefault(),Jg=!1)}const {cross:ef,direction:Od}=mb,Qe=["INPUT","SELECT","TEXTAREA"],Sf={passive:!1},Re=Ba(),lg=Ba(),wf=$b(50,
225).constrain(sd.measure(20)),Ge={mouse:300,touch:400},Yd={mouse:500,touch:600},ze=Ad?43:25;let Bf=!1,Ef=0,hh=0,od=!1,qe=!1,Jg=!1,ie=!1;return{init:function(Ya){function Ue(Se){if(na(Fe)||Fe(Ya,Se)){{const Gg=ja(Se,Wb);ie=Gg;Jg=Ad&&Gg&&!Se.buttons&&Bf;var Te=tc.get(),xg=Oc.get();Bf=$a(Te-xg)>=2;Gg&&Se.button!==0||Qe.includes(Se.target.nodeName||"")||(od=!0,Gc.pointerDown(Se),ld.useFriction(0).useDuration(0),tc.set(Oc),Te=ie?cc:jb,lg.add(Te,"touchmove",ue,Sf).add(Te,"touchend",Nf).add(Te,"mousemove",
ue,Sf).add(Te,"mouseup",Nf),Ef=Gc.readPoint(Se),hh=Gc.readPoint(Se,ef),td.emit("pointerDown"))}}}Fe&&Re.add(jb,"dragstart",Se=>Se.preventDefault(),Sf).add(jb,"touchmove",()=>{},Sf).add(jb,"touchend",()=>{}).add(jb,"touchstart",Ue).add(jb,"mousedown",Ue).add(jb,"touchcancel",Nf).add(jb,"contextmenu",Nf).add(jb,"click",Gd,!0)},destroy:function(){Re.clear();lg.clear()},pointerDown:function(){return od}}}function fb(mb,jb){function cc(Gc,Oc){Oc=`client${(Oc||mb.scroll)==="x"?"X":"Y"}`;return(ja(Gc,jb)?
Gc:Gc.touches[0])[Oc]}let Wb,tc;return{pointerDown:function(Gc){tc=Wb=Gc;return cc(Gc)},pointerMove:function(Gc){const Oc=cc(Gc)-cc(tc),Rc=Gc.timeStamp-Wb.timeStamp>170;tc=Gc;Rc&&(Wb=Gc);return Oc},pointerUp:function(Gc){if(!Wb||!tc)return 0;var Oc=cc(tc)-cc(Wb);const Rc=Gc.timeStamp-Wb.timeStamp;Gc=Gc.timeStamp-tc.timeStamp>170;Oc/=Rc;return Rc&&!Gc&&$a(Oc)>.1?Oc:0},readPoint:cc}}function ub(){return{measure:function(mb){const {offsetTop:jb,offsetLeft:cc,offsetWidth:Wb,offsetHeight:tc}=mb;return{top:jb,
right:cc+Wb,bottom:jb+tc,left:cc,width:Wb,height:tc}}}}function Sa(mb){return{measure:function(jb){return jb/100*mb}}}function Lb(mb,jb,cc,Wb,tc,Gc,Oc){function Rc(sd){return tc.measureSize(Oc.measure(sd))}const Lc=[mb].concat(Wb);let ld,md,Sc=[],td=!1;return{init:function(sd){Gc&&(md=Rc(mb),Sc=Wb.map(Rc),ld=new ResizeObserver(Ad=>{if(na(Gc)||Gc(sd,Ad))a:for(const Rd of Ad){if(td)break a;var Qd=Rd.target===mb;const Ce=Wb.indexOf(Rd.target);Ad=Qd?md:Sc[Ce];Qd=Rc(Qd?mb:Wb[Ce]);if($a(Qd-Ad)>=.5){sd.reInit();
jb.emit("resize");break}}}),cc.requestAnimationFrame(()=>{Lc.forEach(Ad=>ld.observe(Ad))}))},destroy:function(){td=!0;ld&&ld.disconnect()}}}function Ub(mb,jb,cc,Wb,tc,Gc){function Oc(Qd){md=Qd;return Ad}function Rc(Qd){Sc=Qd;return Ad}let Lc=0,ld=0,md=tc,Sc=Gc,td=mb.get(),sd=0;const Ad={direction:function(){return ld},duration:function(){return md},velocity:function(){return Lc},seek:function(){var Qd=Wb.get()-mb.get();md?(cc.set(mb),Lc+=Qd/md,Lc*=Sc,td+=Lc,mb.add(Lc),Qd=td-sd):(Lc=0,cc.set(Wb),mb.set(Wb));
ld=Math.sign(Qd);sd=td;return Ad},settled:function(){const Qd=Wb.get()-jb.get();return $a(Qd)<.001},useBaseFriction:function(){return Rc(Gc)},useBaseDuration:function(){return Oc(tc)},useFriction:Rc,useDuration:Oc};return Ad}function Bb(mb,jb,cc,Wb,tc){function Gc(){return!ld&&mb.reachedAny(cc.get())&&mb.reachedAny(jb.get())?!0:!1}const Oc=tc.measure(10),Rc=tc.measure(50),Lc=$b(.1,.99);let ld=!1;return{shouldConstrain:Gc,constrain:function(md){if(Gc()){var Sc=mb.reachedMin(jb.get())?"min":"max",td=
$a(mb[Sc]-jb.get());Sc=cc.get()-jb.get();td=Lc.constrain(td/Rc);cc.subtract(Sc*td);!md&&$a(Sc)<Oc&&(cc.set(mb.constrain(cc.get())),Wb.useDuration(25).useBaseFriction())}},toggleActive:function(md){ld=!md}}}function bc(mb,jb,cc,Wb,tc){const Gc=$b(-jb+mb,0),Oc=function(){return cc.map((Lc,ld)=>{const {min:md,max:Sc}=Gc;Lc=Gc.constrain(Lc);const td=!ld;ld=ld===qb(cc);return td?Sc:ld||$a(md-Lc)<=1?md:$a(Sc-Lc)<=1?Sc:Lc}).map(Lc=>parseFloat(Lc.toFixed(3)))}(),Rc=function(){var Lc=Oc[0],ld=Mb(Oc);Lc=Oc.lastIndexOf(Lc);
ld=Oc.indexOf(ld)+1;return $b(Lc,ld)}();return{snapsContained:function(){if(jb<=mb+tc)return[Gc.max];if(Wb==="keepSnaps")return Oc;const {min:Lc,max:ld}=Rc;return Oc.slice(Lc,ld)}(),scrollContainLimit:Rc}}function jc(mb,jb,cc){const Wb=jb[0];mb=cc?Wb-mb:Mb(jb);return{limit:$b(mb,Wb)}}function Cc(mb,jb,cc,Wb){function tc(Rc){return Rc===1?Oc(cc.get()):Rc===-1?Gc(cc.get()):!1}const {reachedMin:Gc,reachedMax:Oc}=$b(jb.min+.1,jb.max+.1);return{loop:function(Rc){if(tc(Rc)){var Lc=Rc*-1*mb;Wb.forEach(ld=>
ld.add(Lc))}}}}function xa(mb){const {max:jb,length:cc}=mb;return{get:function(Wb){Wb-=jb;return cc?Wb/-cc:0}}}function Rb(mb,jb,cc,Wb,tc){const {startEdge:Gc,endEdge:Oc}=mb,{groupSlides:Rc}=tc,Lc=function(){return Rc(Wb).map(md=>Mb(md)[Oc]-md[0][Gc]).map($a)}().map(jb.measure),ld=function(){return Wb.map(md=>cc[Gc]-md[Gc]).map(md=>-$a(md))}();mb=function(){return Rc(ld).map(md=>md[0]).map((md,Sc)=>md+Lc[Sc])}();return{snaps:ld,snapsAligned:mb}}function vc(mb,jb,cc,Wb,tc,Gc){const {groupSlides:Oc}=
tc,{min:Rc,max:Lc}=Wb;return{slideRegistry:function(){const ld=Oc(Gc);return cc.length===1?[Gc]:mb&&jb!=="keepSnaps"?ld.slice(Rc,Lc).map((md,Sc,td)=>{const sd=!Sc;Sc=Sc===qb(td);return sd?(td=Mb(td[0])+1,Ga(td)):Sc?(md=qb(Gc)-Mb(td)[0]+1,Ga(md,Mb(td)[0])):md}):ld}()}}function fd(mb,jb,cc,Wb,tc){function Gc(Sc){return Sc.concat().sort((td,sd)=>$a(td)-$a(sd))[0]}function Oc(Sc){const td=mb?ld(Sc):md(Sc);Sc=jb.map((sd,Ad)=>({diff:Rc(sd-td,0),index:Ad})).sort((sd,Ad)=>$a(sd.diff)-$a(Ad.diff));({index:Sc}=
Sc[0]);return{index:Sc,distance:td}}function Rc(Sc,td){const sd=[Sc,Sc+cc,Sc-cc];if(!mb)return Sc;if(!td)return Gc(sd);Sc=sd.filter(Ad=>Math.sign(Ad)===td);return Sc.length?Gc(Sc):Mb(sd)-cc}const {reachedAny:Lc,removeOffset:ld,constrain:md}=Wb;return{byDistance:function(Sc,td){var sd=tc.get()+Sc;const {index:Ad,distance:Qd}=Oc(sd);sd=!mb&&Lc(sd);if(!td||sd)return{index:Ad,distance:Sc};Sc+=Rc(jb[Ad]-Qd,0);return{index:Ad,distance:Sc}},byIndex:function(Sc,td){const sd=jb[Sc]-tc.get();td=Rc(sd,td);return{index:Sc,
distance:td}},shortcut:Rc}}function zd(mb,jb,cc,Wb,tc,Gc,Oc){function Rc(Lc){const ld=Lc.distance,md=Lc.index!==jb.get();Gc.add(ld);ld&&(Wb.duration()?mb.start():(mb.update(),mb.render(1),mb.update()));md&&(cc.set(jb.get()),jb.set(Lc.index),Oc.emit("select"))}return{distance:function(Lc,ld){Lc=tc.byDistance(Lc,ld);Rc(Lc)},index:function(Lc,ld){Lc=jb.clone().set(Lc);ld=tc.byIndex(Lc.get(),ld);Rc(ld)}}}function ae(mb,jb,cc,Wb,tc,Gc,Oc,Rc){function Lc(Sc){Sc.code==="Tab"&&(md=(new Date).getTime())}const ld=
{passive:!0,capture:!0};let md=0;return{init:function(Sc){function td(sd){if(!((new Date).getTime()-md>10)){Oc.emit("slideFocusStart");mb.scrollLeft=0;var Ad=cc.findIndex(Qd=>Qd.includes(sd));typeof Ad==="number"&&(tc.useDuration(0),Wb.index(Ad,0),Oc.emit("slideFocus"))}}Rc&&(Gc.add(document,"keydown",Lc,!1),jb.forEach((sd,Ad)=>{Gc.add(sd,"focus",Qd=>{(na(Rc)||Rc(Sc,Qd))&&td(Ad)},ld)}))}}}function Ca(mb){function jb(Wb){return typeof Wb==="number"?Wb:Wb.get()}let cc=mb;return{get:function(){return cc},
set:function(Wb){cc=jb(Wb)},add:function(Wb){cc+=jb(Wb)},subtract:function(Wb){cc-=jb(Wb)}}}function yc(mb,jb){function cc(Lc){return`translate3d(${Lc}px,0px,0px)`}function Wb(Lc){return`translate3d(0px,${Lc}px,0px)`}const tc=mb.scroll==="x"?cc:Wb,Gc=jb.style;let Oc=null,Rc=!1;return{clear:function(){Rc||(Gc.transform="",jb.getAttribute("style")||jb.removeAttribute("style"))},to:function(Lc){Rc||(Lc=mb.direction(Lc),Lc=Math.round(Lc*100)/100,Lc!==Oc&&(Gc.transform=tc(Lc),Oc=Lc))},toggleActive:function(Lc){Rc=
!Lc}}}function Ta(mb,jb,cc,Wb,tc,Gc,Oc,Rc,Lc){function ld(Rd,Ce){return Rd.reduce((Fe,ue)=>Fe-tc[ue],Ce)}function md(Rd,Ce){return Rd.reduce((Fe,ue)=>ld(Fe,Ce)>0?Fe.concat([ue]):Fe,[])}function Sc(Rd){return Gc.map((Ce,Fe)=>({start:Ce-Wb[Fe]+.5+Rd,end:Ce+jb-.5+Rd}))}function td(Rd,Ce,Fe){const ue=Sc(Ce);return Rd.map(Nf=>{const Gd=Fe?0:-cc,ef=Fe?cc:0,Od=ue[Nf][Fe?"end":"start"];return{index:Nf,loopPoint:Od,slideLocation:Ca(-1),translate:yc(mb,Lc[Nf]),target:()=>Rc.get()>Od?Gd:ef}})}const sd=Object.keys(tc).map(Number),
Ad=Object.keys(tc).map(Number).reverse(),Qd=function(){const Rd=md(Ad,Oc[0]);return td(Rd,cc,!1)}().concat(function(){const Rd=md(sd,jb-Oc[0]-1);return td(Rd,-cc,!0)}());return{canLoop:function(){return Qd.every(({index:Rd})=>{const Ce=sd.filter(Fe=>Fe!==Rd);return ld(Ce,jb)<=.1})},clear:function(){Qd.forEach(Rd=>Rd.translate.clear())},loop:function(){Qd.forEach(Rd=>{const {target:Ce,translate:Fe,slideLocation:ue}=Rd;Rd=Ce();Rd!==ue.get()&&(Fe.to(Rd),ue.set(Rd))})},loopPoints:Qd}}function kb(mb,jb,
cc){let Wb,tc=!1;return{init:function(Gc){cc&&(Wb=new MutationObserver(Oc=>{if(!tc&&(na(cc)||cc(Gc,Oc)))for(const Rc of Oc)if(Rc.type==="childList"){Gc.reInit();jb.emit("slidesChanged");break}}),Wb.observe(mb,{childList:!0}))},destroy:function(){Wb&&Wb.disconnect();tc=!0}}}function vb(mb,jb,cc,Wb){function tc(md){return Object.keys(Gc).reduce((Sc,td)=>{td=parseInt(td);const {isIntersecting:sd}=Gc[td],Ad=!md&&!sd;(md&&sd||Ad)&&Sc.push(td);return Sc},[])}const Gc={};let Oc=null,Rc=null,Lc,ld=!1;return{init:function(){Lc=
new IntersectionObserver(md=>{ld||(md.forEach(Sc=>{const td=jb.indexOf(Sc.target);Gc[td]=Sc}),Rc=Oc=null,cc.emit("slidesInView"))},{root:mb.parentElement,threshold:Wb});jb.forEach(md=>Lc.observe(md))},destroy:function(){Lc&&Lc.disconnect();ld=!0},get:function(md=!0){if(md&&Oc)return Oc;if(!md&&Rc)return Rc;const Sc=tc(md);md&&(Oc=Sc);md||(Rc=Sc);return Sc}}}function Ac(mb,jb,cc,Wb,tc,Gc){const {measureSize:Oc,startEdge:Rc,endEdge:Lc}=mb,ld=cc[0]&&tc,md=ld?$a(jb[Rc]-cc[0][Rc]):0,Sc=function(){if(!ld)return 0;
const sd=Gc.getComputedStyle(Mb(Wb));return parseFloat(sd.getPropertyValue(`margin-${Lc}`))}(),td=cc.map(Oc);mb=function(){return cc.map((sd,Ad,Qd)=>{const Rd=!Ad,Ce=Ad===qb(Qd);return Rd?td[Ad]+md:Ce?td[Ad]+Sc:Qd[Ad+1][Rc]-sd[Rc]}).map($a)}();return{slideSizes:td,slideSizesWithGaps:mb,startGap:md,endGap:Sc}}function eb(mb,jb,cc,Wb,tc,Gc,Oc,Rc,Lc){function ld(Qd,Rd){return Object.keys(Qd).map(Number).filter(Ce=>Ce%Rd===0).map(Ce=>Qd.slice(Ce,Ce+Rd))}function md(Qd){return Qd.length?Object.keys(Qd).map(Number).reduce((Rd,
Ce,Fe)=>{var ue=Mb(Rd)||0,Nf=ue===0;const Gd=Ce===qb(Qd);ue=tc[Sc]-Gc[ue][Sc];const ef=tc[Sc]-Gc[Ce][td];Nf=!Wb&&Nf?sd(Oc):0;const Od=!Wb&&Gd?sd(Rc):0;ue=$a(ef-Od-(ue+Nf));Fe&&ue>jb+Lc&&Rd.push(Ce);Gd&&Rd.push(Qd.length);return Rd},[]).map((Rd,Ce,Fe)=>Qd.slice(Math.max(Fe[Ce-1]||0),Rd)):[]}const {startEdge:Sc,endEdge:td,direction:sd}=mb,Ad=typeof cc==="number";return{groupSlides:function(Qd){return Ad?ld(Qd,cc):md(Qd)}}}function la(mb,jb,cc,Wb,tc,Gc,Oc){const {align:Rc,axis:Lc,direction:ld,startIndex:md,
loop:Sc,duration:td,dragFree:sd,dragThreshold:Ad,inViewThreshold:Qd,slidesToScroll:Rd,skipSnaps:Ce,containScroll:Fe,watchResize:ue,watchSlides:Nf,watchDrag:Gd,watchFocus:ef}=Gc,Od=ub(),Qe=Od.measure(jb),Sf=cc.map(Od.measure),Re=Eb(Lc,ld),lg=Re.measureSize(Qe),wf=Sa(lg);var Ge=Da(Rc,lg),Yd=!Sc&&!!Fe;const {slideSizes:ze,slideSizesWithGaps:Bf,startGap:Ef,endGap:hh}=Ac(Re,Qe,Sf,cc,Sc||!!Fe,tc),od=eb(Re,lg,Rd,Sc,Qe,Sf,Ef,hh,2),{snaps:qe,snapsAligned:Jg}=Rb(Re,Ge,Qe,Sf,od);Ge=-Mb(qe)+Mb(Bf);const {snapsContained:ie,
scrollContainLimit:Ya}=bc(lg,Ge,Jg,Fe,2),Ue=Yd?ie:Jg,{limit:Se}=jc(Ge,Ue,Sc),Te=va(qb(Ue),md,Sc),xg=Te.clone(),Gg=Object.keys(cc).map(Number),gf=({dragHandler:Xg,scrollBody:Ne,scrollBounds:Yf,options:{loop:Jf}})=>{Jf||Yf.constrain(Xg.pointerDown());Ne.seek()},Yc=({scrollBody:Xg,translate:Ne,location:Yf,offsetLocation:Jf,previousLocation:Yg,scrollLooper:zg,slideLooper:Cf,dragHandler:hg,animation:yh,eventHandler:rg,scrollBounds:uf,options:{loop:Hf}},Zf)=>{var sg=Xg.settled();uf=!uf.shouldConstrain();
(hg=(sg=Hf?sg:sg&&uf)&&!hg.pointerDown())&&yh.stop();Yf=Yf.get()*Zf+Yg.get()*(1-Zf);Jf.set(Yf);Hf&&(zg.loop(Xg.direction()),Cf.loop());Ne.to(Jf.get());hg&&rg.emit("settle");sg||rg.emit("scroll")},wg=Fb(Wb,tc,()=>gf(tf),Xg=>Yc(tf,Xg));var xf=Ue[Te.get()];const Ff=Ca(xf),Ud=Ca(xf),Gf=Ca(xf);xf=Ca(xf);const ah=Ub(Ff,Gf,Ud,xf,td,.68),gg=fd(Sc,Ue,Ge,Se,xf),qg=zd(wg,Te,xg,ah,gg,xf,Oc),ye=xa(Se),af=Ba(),ug=vb(jb,cc,Oc,Qd);({slideRegistry:Yd}=vc(Yd,Fe,Ue,Ya,od,Gg));const hc=ae(mb,cc,Yd,qg,ah,af,Oc,ef),tf=
{ownerDocument:Wb,ownerWindow:tc,eventHandler:Oc,containerRect:Qe,slideRects:Sf,animation:wg,axis:Re,dragHandler:lb(Re,mb,Wb,tc,xf,fb(Re,tc),Ff,wg,qg,ah,gg,Te,Oc,wf,sd,Ad,Ce,.68,Gd),eventStore:af,percentOfView:wf,index:Te,indexPrevious:xg,limit:Se,location:Ff,offsetLocation:Gf,previousLocation:Ud,options:Gc,resizeHandler:Lb(jb,Oc,tc,cc,Re,ue,Od),scrollBody:ah,scrollBounds:Bb(Se,Gf,xf,ah,wf),scrollLooper:Cc(Ge,Se,Gf,[Ff,Gf,Ud,xf]),scrollProgress:ye,scrollSnapList:Ue.map(ye.get),scrollSnaps:Ue,scrollTarget:gg,
scrollTo:qg,slideLooper:Ta(Re,lg,Ge,ze,Bf,qe,Ue,Gf,cc),slideFocus:hc,slidesHandler:kb(jb,Oc,Nf),slidesInView:ug,slideIndexes:Gg,slideRegistry:Yd,slidesToScroll:od,target:xf,translate:yc(Re,jb)};return tf}function Va(){let mb={},jb;const cc={init:function(Wb){jb=Wb},emit:function(Wb){(mb[Wb]||[]).forEach(tc=>tc(jb,Wb));return cc},off:function(Wb,tc){mb[Wb]=(mb[Wb]||[]).filter(Gc=>Gc!==tc);return cc},on:function(Wb,tc){mb[Wb]=(mb[Wb]||[]).concat([tc]);return cc},clear:function(){mb={}}};return cc}function Fa(mb){function jb(cc,
Wb){return sa(cc,Wb||{})}return{mergeOptions:jb,optionsAtMedia:function(cc){const Wb=cc.breakpoints||{},tc=Object.keys(Wb).filter(Gc=>mb.matchMedia(Gc).matches).map(Gc=>Wb[Gc]).reduce((Gc,Oc)=>jb(Gc,Oc),{});return jb(cc,tc)},optionsMediaQueries:function(cc){return cc.map(Wb=>Object.keys(Wb.breakpoints||{})).reduce((Wb,tc)=>Wb.concat(tc),[]).map(mb.matchMedia)}}}function ab(mb){let jb=[];return{init:function(cc,Wb){jb=Wb.filter(({options:tc})=>mb.optionsAtMedia(tc).active!==!1);jb.forEach(tc=>tc.init(cc,
mb));return Wb.reduce((tc,Gc)=>Object.assign(tc,{[Gc.name]:Gc}),{})},destroy:function(){jb=jb.filter(cc=>cc.destroy())}}}function Zb(mb,jb,cc){function Wb(){const {container:ze,slides:Bf}=Sf;wf=(typeof ze==="string"?mb.querySelector(ze):ze)||mb.children[0];const Ef=typeof Bf==="string"?wf.querySelectorAll(Bf):Bf;Ge=[].slice.call(Ef||wf.children)}function tc(ze){const Bf=la(mb,wf,Ge,md,Sc,ze,Qd);return ze.loop&&!Bf.slideLooper.canLoop()?(ze=Object.assign({},ze,{loop:!1}),tc(ze)):Bf}function Gc(ze,
Bf){ef||(Qe=Rd(Qe,ze),Sf=Ce(Qe),Re=Bf||Re,Wb(),Od=tc(Sf),Fe([Qe,...Re.map(({options:Ef})=>Ef)]).forEach(Ef=>Ad.add(Ef,"change",Oc)),Sf.active&&(Od.translate.to(Od.location.get()),Od.animation.init(),Od.slidesInView.init(),Od.slideFocus.init(Yd),Od.eventHandler.init(Yd),Od.resizeHandler.init(Yd),Od.slidesHandler.init(Yd),Od.options.loop&&Od.slideLooper.loop(),wf.offsetParent&&Ge.length&&Od.dragHandler.init(Yd),lg=sd.init(Yd,Re)))}function Oc(ze,Bf){const Ef=ld();Rc();Gc(Rd({startIndex:Ef},ze),Bf);
Qd.emit("reInit")}function Rc(){Od.dragHandler.destroy();Od.eventStore.clear();Od.translate.clear();Od.slideLooper.clear();Od.resizeHandler.destroy();Od.slidesHandler.destroy();Od.slidesInView.destroy();Od.animation.destroy();sd.destroy();Ad.clear()}function Lc(ze,Bf,Ef){Sf.active&&!ef&&(Od.scrollBody.useBaseFriction().useDuration(Bf===!0?0:Sf.duration),Od.scrollTo.index(ze,Ef||0))}function ld(){return Od.index.get()}const md=mb.ownerDocument,Sc=md.defaultView;var td=Fa(Sc);const sd=ab(td),Ad=Ba(),
Qd=Va(),{mergeOptions:Rd,optionsAtMedia:Ce,optionsMediaQueries:Fe}=td,{on:ue,off:Nf,emit:Gd}=Qd;td=Oc;let ef=!1,Od,Qe=Rd(Ic,Zb.globalOptions),Sf=Rd(Qe),Re=[],lg,wf,Ge;const Yd={canScrollNext:function(){return Od.index.add(1).get()!==ld()},canScrollPrev:function(){return Od.index.add(-1).get()!==ld()},containerNode:function(){return wf},internalEngine:function(){return Od},destroy:function(){ef||(ef=!0,Ad.clear(),Rc(),Qd.emit("destroy"),Qd.clear())},off:Nf,on:ue,emit:Gd,plugins:function(){return lg},
previousScrollSnap:function(){return Od.indexPrevious.get()},reInit:td,rootNode:function(){return mb},scrollNext:function(ze){const Bf=Od.index.add(1).get();Lc(Bf,ze,-1)},scrollPrev:function(ze){const Bf=Od.index.add(-1).get();Lc(Bf,ze,1)},scrollProgress:function(){return Od.scrollProgress.get(Od.offsetLocation.get())},scrollSnapList:function(){return Od.scrollSnapList},scrollTo:Lc,selectedScrollSnap:ld,slideNodes:function(){return Ge},slidesInView:function(){return Od.slidesInView.get()},slidesNotInView:function(){return Od.slidesInView.get(!1)}};
Gc(jb,cc);setTimeout(()=>Qd.emit("init"),0);return Yd}const Ic={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};Zb.globalOptions=void 0;Xd.exports=Zb};
shadow$provide[58]=function(ec,Xd,P){function na(Ga={},sa=[]){const ja=$a.useRef(Ga),Da=$a.useRef(sa),[Ba,Fb]=$a.useState(),[Eb,$b]=$a.useState(),va=$a.useCallback(()=>{Ba&&Ba.reInit(ja.current,Da.current)},[Ba]);$a.useEffect(()=>{Mb.areOptionsEqual(ja.current,Ga)||(ja.current=Ga,va())},[Ga,va]);$a.useEffect(()=>{Mb.arePluginsEqual(Da.current,sa)||(Da.current=sa,va())},[sa,va]);$a.useEffect(()=>{if(Mb.canUseDOM()&&Eb){qb.globalOptions=na.globalOptions;const lb=qb(Eb,ja.current,Da.current);Fb(lb);
return()=>lb.destroy()}Fb(void 0)},[Eb,Fb]);return[$b,Ba]}var $a=ec(11),Mb=ec(56),qb=ec(57);na.globalOptions=void 0;Xd.exports=na};
shadow$provide[59]=function(ec,Xd,P){function na(qb,Ga){const sa=qb.scrollSnapList();return typeof Ga==="number"?sa.map(()=>Ga):Ga(sa,qb)}function $a(qb={}){function Ga(){if(!ub)if(Da())jc=!0;else{Bb||fb.emit("autoplay:play");var {ownerWindow:xa}=fb.internalEngine();xa.clearTimeout(Ub);Ub=xa.setTimeout(va,Sa[fb.selectedScrollSnap()]);Lb=(new Date).getTime();fb.emit("autoplay:timerset");Bb=!0}}function sa(){if(!ub){Bb&&fb.emit("autoplay:stop");var {ownerWindow:xa}=fb.internalEngine();xa.clearTimeout(Ub);
Ub=0;Lb=null;fb.emit("autoplay:timerstopped");Bb=!1}}function ja(){if(Da())return jc=Bb,sa();jc&&Ga()}function Da(){const {ownerDocument:xa}=fb.internalEngine();return xa.visibilityState==="hidden"}function Ba(){bc||sa()}function Fb(){bc||Ga()}function Eb(){bc=!0;sa()}function $b(){bc=!1;Ga()}function va(){var {index:xa}=fb.internalEngine();xa=xa.clone().add(1).get();const Rb=fb.scrollSnapList().length-1;xa=lb.stopOnLastSnap&&xa===Rb;fb.canScrollNext()?fb.scrollNext(Cc):fb.scrollTo(0,Cc);fb.emit("autoplay:select");
if(xa)return sa();Ga()}let lb,fb,ub,Sa,Lb=null,Ub=0,Bb=!1,bc=!1,jc=!1,Cc=!1;return{name:"autoplay",options:qb,init:function(xa,Rb){fb=xa;const {mergeOptions:vc,optionsAtMedia:fd}=Rb;xa=vc(Mb,$a.globalOptions);xa=vc(xa,qb);lb=fd(xa);if(!(fb.scrollSnapList().length<=1)){Cc=lb.jump;ub=!1;Sa=na(fb,lb.delay);var {eventStore:zd,ownerDocument:ae}=fb.internalEngine();xa=!!fb.internalEngine().options.watchDrag;Rb=lb.rootNode;var Ca=fb.rootNode();Rb=Rb&&Rb(Ca)||Ca;zd.add(ae,"visibilitychange",ja);if(xa)fb.on("pointerDown",
Ba);if(xa&&!lb.stopOnInteraction)fb.on("pointerUp",Fb);lb.stopOnMouseEnter&&zd.add(Rb,"mouseenter",Eb);lb.stopOnMouseEnter&&!lb.stopOnInteraction&&zd.add(Rb,"mouseleave",$b);if(lb.stopOnFocusIn)fb.on("slideFocusStart",sa);lb.stopOnFocusIn&&!lb.stopOnInteraction&&zd.add(fb.containerNode(),"focusout",Ga);lb.playOnInit&&Ga()}},destroy:function(){fb.off("pointerDown",Ba).off("pointerUp",Fb).off("slideFocusStart",sa);sa();ub=!0;Bb=!1},play:function(xa){typeof xa!=="undefined"&&(Cc=xa);Ga()},stop:function(){Bb&&
sa()},reset:function(){Bb&&Ga()},isPlaying:function(){return Bb},timeUntilNext:function(){if(!Lb)return null;const xa=Sa[fb.selectedScrollSnap()],Rb=(new Date).getTime()-Lb;return xa-Rb}}}const Mb={active:!0,breakpoints:{},delay:4E3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};$a.globalOptions=void 0;Xd.exports=$a};
'use strict';
var $amp$components$icons$ChevronRightIcon$$, $amp$components$icons$InformationCircle$$, $amp$components$icons$ArrowTurnRightUp$$, $amp$hooks$use_scroll_to$use_scroll_to_ref$$, $amp$hooks$use_scroll_to$use_scroll_to_top$cljs$0core$0IFn$0_invoke$0arity$0variadic$$, $amp$components$elements$budget$section_block$section_block$$, $amp$components$elements$expandable_text_area$expandable_text_area$$, $amp$components$elements$expandable_text_area$expandable_text_area_2$$, $amp$hooks$use_intersection_observer$use_intersection_observer$$, 
$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$, $amp$components$ui$overlays$caption_overlay$$, $amp$components$media$lazy_image_gallery$lazy_image_gallery$$, $amp$components$elements$budget$about$preview$$, $amp$components$elements$budget$about$details$$, $amp$components$elements$budget$about$about$$, $amp$components$elements$budget$committe$preview$$, $amp$components$elements$budget$committe$details$$, $amp$components$elements$budget$committe$committee_member_card$$, 
$amp$components$elements$budget$committe$committee_gallery$$, $amp$components$elements$budget$committe$committee$$, $amp$components$elements$budget$budget_table$format_currency$$, $amp$components$elements$budget$budget_table$calculate_section_total_no_tax$$, $amp$components$elements$budget$budget_table$sub_total_all_sections$$, $amp$components$elements$budget$budget_table$total_section$$, $amp$components$elements$budget$budget_table$pad_two_digits$$, $amp$components$elements$budget$budget_table$detail_line_item$$, 
$amp$components$elements$budget$budget_table$section_line_item$$, $amp$components$elements$budget$budget_table$budget_table$$, $amp$components$elements$budget$cost_breakdown$preview$$, $amp$components$elements$budget$cost_breakdown$details$$, $amp$components$elements$budget$cost_breakdown$footer$$, $amp$components$elements$budget$cost_breakdown$cost_breakdown$$, $amp$components$elements$budget$location_section$preview$$, $amp$components$elements$budget$location_section$full_details$$, $amp$components$elements$budget$location_section$location_section$$, 
$amp$components$elements$budget$non_profit$non_profit$$, $amp$components$navs$back_up_nav$back_up_nav$$, $amp$components$sections$press_release$preview$$, $amp$components$sections$press_release$details$$, $amp$components$sections$press_release$footer$$, $amp$components$sections$press_release$press_release$$, $amp$components$sections$budget_section$section_link$$, $amp$components$sections$budget_section$header$$, $amp$components$sections$budget_section$budget_section$$, $cljs$cst$477$preview_text$$, 
$cljs$cst$475$section_hint$$, $cljs$cst$523$outro_complete_callback$$, $cljs$cst$497$delay$$, $cljs$cst$482$on_exit$$, $cljs$cst$492$parent_styles$$, $cljs$cst$483$derefed$$, $cljs$cst$516$the_studio$$, $cljs$cst$476$expand_button_label$$, $cljs$cst$519$documentation$$, $cljs$cst$507$expanded_items$$, $cljs$cst$510$label$$, $cljs$cst$503$tax$$, $cljs$cst$522$intro_complete_callback$$, $cljs$cst$521$active$$, $cljs$cst$514$logistics$$, $cljs$cst$511$location$$, $cljs$cst$501$details$$, $cljs$cst$499$subtitle$$, 
$cljs$cst$509$item$$, $cljs$cst$487$translate$$, $cljs$cst$508$description$$, $cljs$cst$496$enabled_QMARK_$$, $cljs$cst$500$amount$$, $cljs$cst$479$footer_text$$, $cljs$cst$481$root_margin$$, $cljs$cst$490$br$$, $cljs$cst$489$bl$$, $cljs$cst$506$set_expanded_items$$, $cljs$cst$502$rate$$, $cljs$cst$517$marketing$$, $cljs$cst$513$la_prod$$, $cljs$cst$491$center$$, $cljs$cst$495$slides$$, $cljs$cst$478$full_text$$, $cljs$cst$504$cost_data$$, $cljs$cst$485$origin$$, $cljs$cst$474$eyebrow$$, $cljs$cst$515$opening$$, 
$cljs$cst$520$anchor$$, $cljs$cst$480$threshold$$, $cljs$cst$512$admin$$, $cljs$cst$484$tl$$, $cljs$cst$488$tr$$, $cljs$cst$498$loop$$, $cljs$cst$518$publication$$, $cljs$cst$486$pos$$;
$amp$components$icons$ChevronRightIcon$$ = function($G__61984_JSCompiler_temp_const$jscomp$inline_3282_class$$jscomp$2_map__61982_map__61982__$1_props__41909__auto__$jscomp$5_vec__61979$$, $G__61988$jscomp$inline_3284_JSCompiler_inline_result$jscomp$inline_3283_maybe_ref__41910__auto__$jscomp$5$$) {
  $G__61984_JSCompiler_temp_const$jscomp$inline_3282_class$$jscomp$2_map__61982_map__61982__$1_props__41909__auto__$jscomp$5_vec__61979$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__61984_JSCompiler_temp_const$jscomp$inline_3282_class$$jscomp$2_map__61982_map__61982__$1_props__41909__auto__$jscomp$5_vec__61979$$), $G__61988$jscomp$inline_3284_JSCompiler_inline_result$jscomp$inline_3283_maybe_ref__41910__auto__$jscomp$5$$], 
  null);
  $G__61984_JSCompiler_temp_const$jscomp$inline_3282_class$$jscomp$2_map__61982_map__61982__$1_props__41909__auto__$jscomp$5_vec__61979$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__61984_JSCompiler_temp_const$jscomp$inline_3282_class$$jscomp$2_map__61982_map__61982__$1_props__41909__auto__$jscomp$5_vec__61979$$, 0, null);
  $G__61984_JSCompiler_temp_const$jscomp$inline_3282_class$$jscomp$2_map__61982_map__61982__$1_props__41909__auto__$jscomp$5_vec__61979$$ = $APP.$cljs$core$__destructure_map$$($G__61984_JSCompiler_temp_const$jscomp$inline_3282_class$$jscomp$2_map__61982_map__61982__$1_props__41909__auto__$jscomp$5_vec__61979$$);
  $G__61984_JSCompiler_temp_const$jscomp$inline_3282_class$$jscomp$2_map__61982_map__61982__$1_props__41909__auto__$jscomp$5_vec__61979$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__61984_JSCompiler_temp_const$jscomp$inline_3282_class$$jscomp$2_map__61982_map__61982__$1_props__41909__auto__$jscomp$5_vec__61979$$, $APP.$cljs$cst$386$class$$);
  $G__61984_JSCompiler_temp_const$jscomp$inline_3282_class$$jscomp$2_map__61982_map__61982__$1_props__41909__auto__$jscomp$5_vec__61979$$ = $APP.$helix$impl$props$normalize_class$$($G__61984_JSCompiler_temp_const$jscomp$inline_3282_class$$jscomp$2_map__61982_map__61982__$1_props__41909__auto__$jscomp$5_vec__61979$$);
  $G__61988$jscomp$inline_3284_JSCompiler_inline_result$jscomp$inline_3283_maybe_ref__41910__auto__$jscomp$5$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"m8.25 4.5 7.5 7.5-7.5 7.5"};
  $G__61988$jscomp$inline_3284_JSCompiler_inline_result$jscomp$inline_3283_maybe_ref__41910__auto__$jscomp$5$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__61988$jscomp$inline_3284_JSCompiler_inline_result$jscomp$inline_3283_maybe_ref__41910__auto__$jscomp$5$$) : $APP.$helix$core$jsx$$.call(null, "path", $G__61988$jscomp$inline_3284_JSCompiler_inline_result$jscomp$inline_3283_maybe_ref__41910__auto__$jscomp$5$$);
  $G__61984_JSCompiler_temp_const$jscomp$inline_3282_class$$jscomp$2_map__61982_map__61982__$1_props__41909__auto__$jscomp$5_vec__61979$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:$G__61984_JSCompiler_temp_const$jscomp$inline_3282_class$$jscomp$2_map__61982_map__61982__$1_props__41909__auto__$jscomp$5_vec__61979$$, children:$G__61988$jscomp$inline_3284_JSCompiler_inline_result$jscomp$inline_3283_maybe_ref__41910__auto__$jscomp$5$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__61984_JSCompiler_temp_const$jscomp$inline_3282_class$$jscomp$2_map__61982_map__61982__$1_props__41909__auto__$jscomp$5_vec__61979$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__61984_JSCompiler_temp_const$jscomp$inline_3282_class$$jscomp$2_map__61982_map__61982__$1_props__41909__auto__$jscomp$5_vec__61979$$);
};
$amp$components$icons$InformationCircle$$ = function($G__62059_JSCompiler_temp_const$jscomp$inline_3298_class$$jscomp$7_map__62057_map__62057__$1_props__41909__auto__$jscomp$10_vec__62054$$, $G__62063$jscomp$inline_3300_JSCompiler_inline_result$jscomp$inline_3299_maybe_ref__41910__auto__$jscomp$10$$) {
  $G__62059_JSCompiler_temp_const$jscomp$inline_3298_class$$jscomp$7_map__62057_map__62057__$1_props__41909__auto__$jscomp$10_vec__62054$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__62059_JSCompiler_temp_const$jscomp$inline_3298_class$$jscomp$7_map__62057_map__62057__$1_props__41909__auto__$jscomp$10_vec__62054$$), $G__62063$jscomp$inline_3300_JSCompiler_inline_result$jscomp$inline_3299_maybe_ref__41910__auto__$jscomp$10$$], 
  null);
  $G__62059_JSCompiler_temp_const$jscomp$inline_3298_class$$jscomp$7_map__62057_map__62057__$1_props__41909__auto__$jscomp$10_vec__62054$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62059_JSCompiler_temp_const$jscomp$inline_3298_class$$jscomp$7_map__62057_map__62057__$1_props__41909__auto__$jscomp$10_vec__62054$$, 0, null);
  $G__62059_JSCompiler_temp_const$jscomp$inline_3298_class$$jscomp$7_map__62057_map__62057__$1_props__41909__auto__$jscomp$10_vec__62054$$ = $APP.$cljs$core$__destructure_map$$($G__62059_JSCompiler_temp_const$jscomp$inline_3298_class$$jscomp$7_map__62057_map__62057__$1_props__41909__auto__$jscomp$10_vec__62054$$);
  $G__62059_JSCompiler_temp_const$jscomp$inline_3298_class$$jscomp$7_map__62057_map__62057__$1_props__41909__auto__$jscomp$10_vec__62054$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62059_JSCompiler_temp_const$jscomp$inline_3298_class$$jscomp$7_map__62057_map__62057__$1_props__41909__auto__$jscomp$10_vec__62054$$, $APP.$cljs$cst$386$class$$);
  $G__62059_JSCompiler_temp_const$jscomp$inline_3298_class$$jscomp$7_map__62057_map__62057__$1_props__41909__auto__$jscomp$10_vec__62054$$ = $APP.$helix$impl$props$normalize_class$$($G__62059_JSCompiler_temp_const$jscomp$inline_3298_class$$jscomp$7_map__62057_map__62057__$1_props__41909__auto__$jscomp$10_vec__62054$$);
  $G__62063$jscomp$inline_3300_JSCompiler_inline_result$jscomp$inline_3299_maybe_ref__41910__auto__$jscomp$10$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"};
  $G__62063$jscomp$inline_3300_JSCompiler_inline_result$jscomp$inline_3299_maybe_ref__41910__auto__$jscomp$10$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__62063$jscomp$inline_3300_JSCompiler_inline_result$jscomp$inline_3299_maybe_ref__41910__auto__$jscomp$10$$) : $APP.$helix$core$jsx$$.call(null, "path", $G__62063$jscomp$inline_3300_JSCompiler_inline_result$jscomp$inline_3299_maybe_ref__41910__auto__$jscomp$10$$);
  $G__62059_JSCompiler_temp_const$jscomp$inline_3298_class$$jscomp$7_map__62057_map__62057__$1_props__41909__auto__$jscomp$10_vec__62054$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:$G__62059_JSCompiler_temp_const$jscomp$inline_3298_class$$jscomp$7_map__62057_map__62057__$1_props__41909__auto__$jscomp$10_vec__62054$$, children:$G__62063$jscomp$inline_3300_JSCompiler_inline_result$jscomp$inline_3299_maybe_ref__41910__auto__$jscomp$10$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__62059_JSCompiler_temp_const$jscomp$inline_3298_class$$jscomp$7_map__62057_map__62057__$1_props__41909__auto__$jscomp$10_vec__62054$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__62059_JSCompiler_temp_const$jscomp$inline_3298_class$$jscomp$7_map__62057_map__62057__$1_props__41909__auto__$jscomp$10_vec__62054$$);
};
$amp$components$icons$ArrowTurnRightUp$$ = function($G__62129_props$jscomp$11_props__41909__auto__$jscomp$15_vec__62125$$, $G__62133$jscomp$inline_3312_JSCompiler_inline_result$jscomp$3261_maybe_ref__41910__auto__$jscomp$15$$) {
  $G__62129_props$jscomp$11_props__41909__auto__$jscomp$15_vec__62125$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__62129_props$jscomp$11_props__41909__auto__$jscomp$15_vec__62125$$), $G__62133$jscomp$inline_3312_JSCompiler_inline_result$jscomp$3261_maybe_ref__41910__auto__$jscomp$15$$], null);
  $G__62129_props$jscomp$11_props__41909__auto__$jscomp$15_vec__62125$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62129_props$jscomp$11_props__41909__auto__$jscomp$15_vec__62125$$, 0, null);
  $G__62133$jscomp$inline_3312_JSCompiler_inline_result$jscomp$3261_maybe_ref__41910__auto__$jscomp$15$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"m11.99 7.5 3.75-3.75m0 0 3.75 3.75m-3.75-3.75v16.499H4.49"};
  $G__62133$jscomp$inline_3312_JSCompiler_inline_result$jscomp$3261_maybe_ref__41910__auto__$jscomp$15$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:"size-6", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__62133$jscomp$inline_3312_JSCompiler_inline_result$jscomp$3261_maybe_ref__41910__auto__$jscomp$15$$) : $APP.$helix$core$jsx$$.call(null, 
  "path", $G__62133$jscomp$inline_3312_JSCompiler_inline_result$jscomp$3261_maybe_ref__41910__auto__$jscomp$15$$)};
  $G__62129_props$jscomp$11_props__41909__auto__$jscomp$15_vec__62125$$ = $APP.$helix$impl$props$merge_obj$$($G__62133$jscomp$inline_3312_JSCompiler_inline_result$jscomp$3261_maybe_ref__41910__auto__$jscomp$15$$, $APP.$helix$impl$props$_dom_props$cljs$0core$0IFn$0_invoke$0arity$01$$($G__62129_props$jscomp$11_props__41909__auto__$jscomp$15_vec__62125$$));
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__62129_props$jscomp$11_props__41909__auto__$jscomp$15_vec__62125$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__62129_props$jscomp$11_props__41909__auto__$jscomp$15_vec__62125$$);
};
$amp$hooks$use_scroll_to$use_scroll_to_ref$$ = function() {
  var $G__50946$$ = function() {
    function $G__50974$$($ref$jscomp$10$$, $var_args$jscomp$429$$) {
      var $G__50975__i_p__50948$jscomp$1$$ = null;
      if (arguments.length > 1) {
        $G__50975__i_p__50948$jscomp$1$$ = 0;
        for (var $G__50975__a$$ = Array(arguments.length - 1); $G__50975__i_p__50948$jscomp$1$$ < $G__50975__a$$.length;) {
          $G__50975__a$$[$G__50975__i_p__50948$jscomp$1$$] = arguments[$G__50975__i_p__50948$jscomp$1$$ + 1], ++$G__50975__i_p__50948$jscomp$1$$;
        }
        $G__50975__i_p__50948$jscomp$1$$ = new $APP.$cljs$core$IndexedSeq$$($G__50975__a$$, 0, null);
      }
      return $G__50974__delegate$$.call(this, $ref$jscomp$10$$, $G__50975__i_p__50948$jscomp$1$$);
    }
    function $G__50974__delegate$$($ref$jscomp$9_temp__5823__auto__$jscomp$66$$, $duration$jscomp$2_p__50948$$) {
      $duration$jscomp$2_p__50948$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($duration$jscomp$2_p__50948$$, 0, null);
      $ref$jscomp$9_temp__5823__auto__$jscomp$66$$ = $ref$jscomp$9_temp__5823__auto__$jscomp$66$$.current;
      return $APP.$cljs$core$truth_$$($ref$jscomp$9_temp__5823__auto__$jscomp$66$$) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to(window, $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$389$duration$$, $APP.$cljs$core$truth_$$($duration$jscomp$2_p__50948$$) ? $duration$jscomp$2_p__50948$$ : 0.35, $APP.$cljs$cst$390$scrollTo$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$391$y$$, $ref$jscomp$9_temp__5823__auto__$jscomp$66$$, 
      $APP.$cljs$cst$392$autoKill$$, !1], null), $APP.$cljs$cst$393$ease$$, "power2.inOut"], null))) : null;
    }
    $G__50974$$.$cljs$lang$maxFixedArity$ = 1;
    $G__50974$$.$cljs$lang$applyTo$ = function($arglist__50976_p__50948$jscomp$2$$) {
      var $ref$jscomp$11$$ = $APP.$cljs$core$first$$($arglist__50976_p__50948$jscomp$2$$);
      $arglist__50976_p__50948$jscomp$2$$ = $APP.$cljs$core$rest$$($arglist__50976_p__50948$jscomp$2$$);
      return $G__50974__delegate$$($ref$jscomp$11$$, $arglist__50976_p__50948$jscomp$2$$);
    };
    $G__50974$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__50974__delegate$$;
    return $G__50974$$;
  }(), $G__50947$$ = [];
  return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__50946$$, $G__50947$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__50946$$, $G__50947$$);
};
$amp$hooks$use_scroll_to$use_scroll_to_top$cljs$0core$0IFn$0_invoke$0arity$0variadic$$ = function() {
  var $G__50961_map__50960__$1$$ = $APP.$cljs$core$__destructure_map$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$389$duration$$, 1], null)])), $duration$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($G__50961_map__50960__$1$$, $APP.$cljs$cst$389$duration$$, 0.35);
  $G__50961_map__50960__$1$$ = function() {
    function $G__50980$$($var_args$jscomp$431$$) {
      var $G__50982__i__$jscomp$352$$ = null;
      if (arguments.length > 0) {
        $G__50982__i__$jscomp$352$$ = 0;
        for (var $G__50982__a$$ = Array(arguments.length - 0); $G__50982__i__$jscomp$352$$ < $G__50982__a$$.length;) {
          $G__50982__a$$[$G__50982__i__$jscomp$352$$] = arguments[$G__50982__i__$jscomp$352$$ + 0], ++$G__50982__i__$jscomp$352$$;
        }
        $G__50982__i__$jscomp$352$$ = new $APP.$cljs$core$IndexedSeq$$($G__50982__a$$, 0, null);
      }
      return $G__50980__delegate$$.call(this, $G__50982__i__$jscomp$352$$);
    }
    function $G__50980__delegate$$() {
      $APP.$cljs$core$tap_GT_$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$394$scroll_to_top$$, $APP.$cljs$cst$389$duration$$, $duration$jscomp$3$$], null));
      return $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to(window, $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$389$duration$$, $duration$jscomp$3$$, $APP.$cljs$cst$390$scrollTo$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$391$y$$, 0], null), $APP.$cljs$cst$393$ease$$, "power2.inOut"], null)));
    }
    $G__50980$$.$cljs$lang$maxFixedArity$ = 0;
    $G__50980$$.$cljs$lang$applyTo$ = function($_$jscomp$353_arglist__50983$$) {
      $_$jscomp$353_arglist__50983$$ = $APP.$cljs$core$seq$$($_$jscomp$353_arglist__50983$$);
      return $G__50980__delegate$$($_$jscomp$353_arglist__50983$$);
    };
    $G__50980$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__50980__delegate$$;
    return $G__50980$$;
  }();
  var $G__50962$$ = [];
  return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__50961_map__50960__$1$$, $G__50962$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__50961_map__50960__$1$$, $G__50962$$);
};
$amp$components$elements$budget$section_block$section_block$$ = function($G__53066_map__53051_map__53051__$1_props__41909__auto__$jscomp$55_vec__53048$$, $maybe_ref__41910__auto__$jscomp$55$$) {
  $G__53066_map__53051_map__53051__$1_props__41909__auto__$jscomp$55_vec__53048$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__53066_map__53051_map__53051__$1_props__41909__auto__$jscomp$55_vec__53048$$), $maybe_ref__41910__auto__$jscomp$55$$], null);
  $G__53066_map__53051_map__53051__$1_props__41909__auto__$jscomp$55_vec__53048$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__53066_map__53051_map__53051__$1_props__41909__auto__$jscomp$55_vec__53048$$, 0, null);
  $G__53066_map__53051_map__53051__$1_props__41909__auto__$jscomp$55_vec__53048$$ = $APP.$cljs$core$__destructure_map$$($G__53066_map__53051_map__53051__$1_props__41909__auto__$jscomp$55_vec__53048$$);
  var $idx$jscomp$63$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__53066_map__53051_map__53051__$1_props__41909__auto__$jscomp$55_vec__53048$$, $APP.$cljs$cst$463$idx$$), $eyebrow$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__53066_map__53051_map__53051__$1_props__41909__auto__$jscomp$55_vec__53048$$, $cljs$cst$474$eyebrow$$), $title$jscomp$17$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__53066_map__53051_map__53051__$1_props__41909__auto__$jscomp$55_vec__53048$$, 
  $APP.$cljs$cst$373$title$$), $children$jscomp$19$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__53066_map__53051_map__53051__$1_props__41909__auto__$jscomp$55_vec__53048$$, $APP.$cljs$cst$92$children$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__53066_map__53051_map__53051__$1_props__41909__auto__$jscomp$55_vec__53048$$ = function() {
    return {id:"section-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$63$$), children:[function() {
      var $G__53079$$ = function() {
        return {className:"px-4 pt-12 text-slate-100", children:[function() {
          var $G__53083$$ = function() {
            return {className:"mb-6 flex items-center gap-3", children:[function() {
              var $G__53087$$ = {className:"h-px w-10 bg-pink-500/70"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53087$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__53087$$);
            }(), function() {
              var $G__53091$$ = {className:"text-sm tracking-[0.25em] uppercase text-slate-400", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$63$$) + ". " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($eyebrow$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__53091$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__53091$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53083$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__53083$$);
        }(), function() {
          var $G__53097$$ = {className:"\n               \n               font-bold\n               uppercase\n               leading-none\n               text-5xl\n               md:text-7xl\n               ", children:$title$jscomp$17$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__53097$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__53097$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53079$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__53079$$);
    }(), function() {
      var $G__53101$$ = {className:"text-xl text-white-100", children:$children$jscomp$19$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53101$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__53101$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53066_map__53051_map__53051__$1_props__41909__auto__$jscomp$55_vec__53048$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__53066_map__53051_map__53051__$1_props__41909__auto__$jscomp$55_vec__53048$$);
};
$amp$components$elements$expandable_text_area$expandable_text_area$$ = function($G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$, $maybe_ref__41910__auto__$jscomp$56$$) {
  $G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$), $maybe_ref__41910__auto__$jscomp$56$$], null);
  $G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$, 0, null);
  $G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$ = $APP.$cljs$core$__destructure_map$$($G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$);
  var $section_hint$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$, $cljs$cst$475$section_hint$$), $title$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$, $APP.$cljs$cst$373$title$$), $expand_button_label$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$, 
  $cljs$cst$476$expand_button_label$$), $preview_text$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$, $cljs$cst$477$preview_text$$), $full_text$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$, $cljs$cst$478$full_text$$), $footer_text$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$, 
  $cljs$cst$479$footer_text$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$ = $APP.$helix$hooks$use_state$$(!1);
  var $expanded_QMARK_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$, 0, null), $set_expanded$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$, 1, null);
  $G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$ = function() {
    return {idx:1, eyebrow:$section_hint$$, title:$title$jscomp$18$$, children:[function() {
      var $G__62204$$ = function() {
        return {className:"mt-6", children:$APP.$cljs$core$truth_$$($expanded_QMARK_$$) ? $full_text$$ : function() {
          var $G__62208$$ = function() {
            return {children:[$preview_text$$, function() {
              var $G__62212$$ = function() {
                return {className:"flex justify-center mt-6 px-4", children:function() {
                  var $G__62216$$ = function() {
                    return {"on-click":function() {
                      var $G__62220$$ = $APP.$cljs$core$not$$($expanded_QMARK_$$);
                      return $set_expanded$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded$$.$cljs$core$IFn$_invoke$arity$1$($G__62220$$) : $set_expanded$$.call(null, $G__62220$$);
                    }, "class":"px-8 py-3", title:$expand_button_label$$};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__62216$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__62216$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62212$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62212$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62208$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62208$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62204$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62204$$);
    }(), $APP.$cljs$core$truth_$$($footer_text$$) ? $footer_text$$ : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$section_block$section_block$$, $G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$) : $APP.$helix$core$jsxs$$.call(null, $amp$components$elements$budget$section_block$section_block$$, $G__62200_map__62195_map__62195__$1_props__41909__auto__$jscomp$56_vec__62192_vec__62196$$);
};
$amp$components$elements$expandable_text_area$expandable_text_area_2$$ = function($G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$, $maybe_ref__41910__auto__$jscomp$57$$) {
  $G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$), $maybe_ref__41910__auto__$jscomp$57$$], null);
  $G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$, 0, null);
  $G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$ = $APP.$cljs$core$__destructure_map$$($G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$);
  var $section_hint$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$, $cljs$cst$475$section_hint$$), $title$jscomp$19$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$, $APP.$cljs$cst$373$title$$), $expand_button_label$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$, 
  $cljs$cst$476$expand_button_label$$), $preview_text$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$, $cljs$cst$477$preview_text$$), $full_text$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$, $cljs$cst$478$full_text$$), $footer_text$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$, 
  $cljs$cst$479$footer_text$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$ = $APP.$helix$hooks$use_state$$(!1);
  var $expanded_QMARK_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$, 0, null), $set_expanded$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$, 1, null);
  $G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$ = function() {
    return {idx:1, eyebrow:$section_hint$jscomp$1$$, title:$title$jscomp$19$$, children:[function() {
      var $G__62249$$ = function() {
        return {className:"mt-6", children:$APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$1$$) ? function() {
          var $G__62253$$ = {};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($full_text$jscomp$1$$, $G__62253$$) : $APP.$helix$core$jsx$$.call(null, $full_text$jscomp$1$$, $G__62253$$);
        }() : function() {
          var $G__62255$$ = function() {
            return {children:[function() {
              var $G__62259$$ = {};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($preview_text$jscomp$1$$, $G__62259$$) : $APP.$helix$core$jsx$$.call(null, $preview_text$jscomp$1$$, $G__62259$$);
            }(), function() {
              var $G__62261$$ = function() {
                return {className:"flex justify-center mt-6 px-4", children:function() {
                  var $G__62265$$ = function() {
                    return {"on-click":function() {
                      var $G__62268$$ = $APP.$cljs$core$not$$($expanded_QMARK_$jscomp$1$$);
                      return $set_expanded$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__62268$$) : $set_expanded$jscomp$1$$.call(null, $G__62268$$);
                    }, "class":"px-8 py-3", title:$expand_button_label$jscomp$1$$};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__62265$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__62265$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62261$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62261$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62255$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62255$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62249$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62249$$);
    }(), $APP.$cljs$core$truth_$$($footer_text$jscomp$1$$) ? function() {
      var $G__62270$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($footer_text$jscomp$1$$, $G__62270$$) : $APP.$helix$core$jsx$$.call(null, $footer_text$jscomp$1$$, $G__62270$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$section_block$section_block$$, $G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$) : $APP.$helix$core$jsxs$$.call(null, $amp$components$elements$budget$section_block$section_block$$, $G__62245_map__62236_map__62236__$1_props__41909__auto__$jscomp$57_vec__62233_vec__62238$$);
};
$amp$hooks$use_intersection_observer$use_intersection_observer$$ = function($var_args$jscomp$437$$) {
  for (var $args__5882__auto__$jscomp$47$$ = [], $len__5876__auto___53300$$ = arguments.length, $i__5877__auto___53301$$ = 0;;) {
    if ($i__5877__auto___53301$$ < $len__5876__auto___53300$$) {
      $args__5882__auto__$jscomp$47$$.push(arguments[$i__5877__auto___53301$$]), $i__5877__auto___53301$$ += 1;
    } else {
      break;
    }
  }
  return $amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(arguments[0], 1 < $args__5882__auto__$jscomp$47$$.length ? new $APP.$cljs$core$IndexedSeq$$($args__5882__auto__$jscomp$47$$.slice(1), 0, null) : null);
};
$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$ = function($ref$jscomp$15$$, $is_visible_QMARK_$jscomp$7_map__53273__$1_p__53272$$) {
  $is_visible_QMARK_$jscomp$7_map__53273__$1_p__53272$$ = $APP.$cljs$core$__destructure_map$$($is_visible_QMARK_$jscomp$7_map__53273__$1_p__53272$$);
  var $threshold$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_visible_QMARK_$jscomp$7_map__53273__$1_p__53272$$, $cljs$cst$480$threshold$$, 0.1), $root_margin$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_visible_QMARK_$jscomp$7_map__53273__$1_p__53272$$, $cljs$cst$481$root_margin$$, "0px"), $on_enter$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($is_visible_QMARK_$jscomp$7_map__53273__$1_p__53272$$, $APP.$cljs$cst$381$on_enter$$), $on_exit$$ = 
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($is_visible_QMARK_$jscomp$7_map__53273__$1_p__53272$$, $cljs$cst$482$on_exit$$), $G__53280_53303_vec__53274_vec__53277$$ = $APP.$helix$hooks$use_state$$(!1);
  $is_visible_QMARK_$jscomp$7_map__53273__$1_p__53272$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__53280_53303_vec__53274_vec__53277$$, 0, null);
  var $set_is_visible_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__53280_53303_vec__53274_vec__53277$$, 1, null);
  $G__53280_53303_vec__53274_vec__53277$$ = $APP.$helix$hooks$use_state$$(!1);
  var $visited_QMARK_$jscomp$11$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__53280_53303_vec__53274_vec__53277$$, 0, null), $set_visited_BANG_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__53280_53303_vec__53274_vec__53277$$, 1, null);
  $G__53280_53303_vec__53274_vec__53277$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    $APP.$cljs$core$tap_GT_$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$93$ref$$, $ref$jscomp$15$$, $cljs$cst$483$derefed$$, $APP.$cljs$core$_deref$$($ref$jscomp$15$$)], null));
    if ($APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$15$$))) {
      var $observer$$ = new IntersectionObserver(function($c__5673__auto__$jscomp$8_entries$jscomp$3_seq__53282_temp__5823__auto__$jscomp$70$$) {
        $c__5673__auto__$jscomp$8_entries$jscomp$3_seq__53282_temp__5823__auto__$jscomp$70$$ = $APP.$cljs$core$seq$$($c__5673__auto__$jscomp$8_entries$jscomp$3_seq__53282_temp__5823__auto__$jscomp$70$$);
        for (var $G__53311_chunk__53283_seq__53282__$1$$ = null, $G__53310_count__53284$$ = 0, $i__53285$$ = 0;;) {
          if ($i__53285$$ < $G__53310_count__53284$$) {
            var $G__53312_entry$jscomp$27$$ = $G__53311_chunk__53283_seq__53282__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__53285$$), $is_intersecting_53305$$ = $G__53312_entry$jscomp$27$$.isIntersecting;
            $set_is_visible_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_visible_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($is_intersecting_53305$$) : $set_is_visible_BANG_$$.call(null, $is_intersecting_53305$$);
            $APP.$cljs$core$truth_$$($is_intersecting_53305$$) && ($set_visited_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_visited_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $set_visited_BANG_$jscomp$1$$.call(null, !0), $APP.$cljs$core$truth_$$($on_enter$jscomp$1$$) && ($on_enter$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_enter$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__53312_entry$jscomp$27$$) : $on_enter$jscomp$1$$.call(null, $G__53312_entry$jscomp$27$$)));
            $APP.$cljs$core$truth_$$(function() {
              var $and__5140__auto__$jscomp$70$$ = $APP.$cljs$core$not$$($is_intersecting_53305$$);
              return $and__5140__auto__$jscomp$70$$ ? $visited_QMARK_$jscomp$11$$ : $and__5140__auto__$jscomp$70$$;
            }()) && $APP.$cljs$core$truth_$$($on_exit$$) && ($on_exit$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_exit$$.$cljs$core$IFn$_invoke$arity$1$($G__53312_entry$jscomp$27$$) : $on_exit$$.call(null, $G__53312_entry$jscomp$27$$));
            $i__53285$$ += 1;
          } else {
            if ($c__5673__auto__$jscomp$8_entries$jscomp$3_seq__53282_temp__5823__auto__$jscomp$70$$ = $APP.$cljs$core$seq$$($c__5673__auto__$jscomp$8_entries$jscomp$3_seq__53282_temp__5823__auto__$jscomp$70$$)) {
              $G__53311_chunk__53283_seq__53282__$1$$ = $c__5673__auto__$jscomp$8_entries$jscomp$3_seq__53282_temp__5823__auto__$jscomp$70$$;
              if ($APP.$cljs$core$chunked_seq_QMARK_$$($G__53311_chunk__53283_seq__53282__$1$$)) {
                $c__5673__auto__$jscomp$8_entries$jscomp$3_seq__53282_temp__5823__auto__$jscomp$70$$ = $APP.$cljs$core$_chunked_first$$($G__53311_chunk__53283_seq__53282__$1$$), $G__53310_count__53284$$ = $APP.$cljs$core$_chunked_rest$$($G__53311_chunk__53283_seq__53282__$1$$), $G__53311_chunk__53283_seq__53282__$1$$ = $c__5673__auto__$jscomp$8_entries$jscomp$3_seq__53282_temp__5823__auto__$jscomp$70$$, $G__53312_entry$jscomp$27$$ = $APP.$cljs$core$count$$($c__5673__auto__$jscomp$8_entries$jscomp$3_seq__53282_temp__5823__auto__$jscomp$70$$), 
                $c__5673__auto__$jscomp$8_entries$jscomp$3_seq__53282_temp__5823__auto__$jscomp$70$$ = $G__53310_count__53284$$, $G__53310_count__53284$$ = $G__53312_entry$jscomp$27$$;
              } else {
                $G__53312_entry$jscomp$27$$ = $APP.$cljs$core$first$$($G__53311_chunk__53283_seq__53282__$1$$);
                var $is_intersecting_53314$$ = $G__53312_entry$jscomp$27$$.isIntersecting;
                $set_is_visible_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_visible_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($is_intersecting_53314$$) : $set_is_visible_BANG_$$.call(null, $is_intersecting_53314$$);
                $APP.$cljs$core$truth_$$($is_intersecting_53314$$) && ($set_visited_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_visited_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $set_visited_BANG_$jscomp$1$$.call(null, !0), $APP.$cljs$core$truth_$$($on_enter$jscomp$1$$) && ($on_enter$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_enter$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__53312_entry$jscomp$27$$) : $on_enter$jscomp$1$$.call(null, $G__53312_entry$jscomp$27$$)));
                $APP.$cljs$core$truth_$$(function() {
                  var $and__5140__auto__$jscomp$71$$ = $APP.$cljs$core$not$$($is_intersecting_53314$$);
                  return $and__5140__auto__$jscomp$71$$ ? $visited_QMARK_$jscomp$11$$ : $and__5140__auto__$jscomp$71$$;
                }()) && $APP.$cljs$core$truth_$$($on_exit$$) && ($on_exit$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_exit$$.$cljs$core$IFn$_invoke$arity$1$($G__53312_entry$jscomp$27$$) : $on_exit$$.call(null, $G__53312_entry$jscomp$27$$));
                $c__5673__auto__$jscomp$8_entries$jscomp$3_seq__53282_temp__5823__auto__$jscomp$70$$ = $APP.$cljs$core$next$$($G__53311_chunk__53283_seq__53282__$1$$);
                $G__53311_chunk__53283_seq__53282__$1$$ = null;
                $G__53310_count__53284$$ = 0;
              }
              $i__53285$$ = 0;
            } else {
              return null;
            }
          }
        }
      }, {threshold:$threshold$$, rootMargin:$root_margin$$});
      try {
        $observer$$.observe($APP.$cljs$core$_deref$$($ref$jscomp$15$$));
      } catch ($e53298$$) {
        if ($e53298$$ instanceof Error) {
          $APP.$cljs$core$tap_GT_$$($e53298$$);
        } else {
          throw $e53298$$;
        }
      }
      return function() {
        return $observer$$.disconnect();
      };
    }
    return null;
  });
  var $G__53281_53304$$ = [$ref$jscomp$15$$, $threshold$$, $root_margin$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__53280_53303_vec__53274_vec__53277$$, $G__53281_53304$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__53280_53303_vec__53274_vec__53277$$, $G__53281_53304$$);
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$visited_QMARK_$jscomp$11$$, $is_visible_QMARK_$jscomp$7_map__53273__$1_p__53272$$], null);
};
$amp$components$ui$overlays$caption_overlay$$ = function($G__53293_map__53291_parent_styles$jscomp$1_props__41909__auto__$jscomp$58_vec__53288$$, $children$jscomp$20_maybe_ref__41910__auto__$jscomp$58$$) {
  $G__53293_map__53291_parent_styles$jscomp$1_props__41909__auto__$jscomp$58_vec__53288$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__53293_map__53291_parent_styles$jscomp$1_props__41909__auto__$jscomp$58_vec__53288$$), $children$jscomp$20_maybe_ref__41910__auto__$jscomp$58$$], null);
  $G__53293_map__53291_parent_styles$jscomp$1_props__41909__auto__$jscomp$58_vec__53288$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__53293_map__53291_parent_styles$jscomp$1_props__41909__auto__$jscomp$58_vec__53288$$, 0, null);
  var $map__53291__$1_outer_transform_rotation$jscomp$3_rotation__$1$$ = $APP.$cljs$core$__destructure_map$$($G__53293_map__53291_parent_styles$jscomp$1_props__41909__auto__$jscomp$58_vec__53288$$);
  $G__53293_map__53291_parent_styles$jscomp$1_props__41909__auto__$jscomp$58_vec__53288$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__53291__$1_outer_transform_rotation$jscomp$3_rotation__$1$$, $cljs$cst$492$parent_styles$$);
  $children$jscomp$20_maybe_ref__41910__auto__$jscomp$58$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__53291__$1_outer_transform_rotation$jscomp$3_rotation__$1$$, $APP.$cljs$cst$92$children$$);
  var $config$jscomp$10_pos_config_position$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__53291__$1_outer_transform_rotation$jscomp$3_rotation__$1$$, $APP.$cljs$cst$493$position$$);
  $map__53291__$1_outer_transform_rotation$jscomp$3_rotation__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__53291__$1_outer_transform_rotation$jscomp$3_rotation__$1$$, $APP.$cljs$cst$494$rotation$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $map__53291__$1_outer_transform_rotation$jscomp$3_rotation__$1$$ = $APP.$cljs$core$truth_$$($map__53291__$1_outer_transform_rotation$jscomp$3_rotation__$1$$) ? $map__53291__$1_outer_transform_rotation$jscomp$3_rotation__$1$$ : 0;
  $config$jscomp$10_pos_config_position$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$components$ui$overlays$position_configs$$, $APP.$cljs$core$truth_$$($config$jscomp$10_pos_config_position$jscomp$4$$) ? $config$jscomp$10_pos_config_position$jscomp$4$$ : $cljs$cst$484$tl$$);
  $config$jscomp$10_pos_config_position$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($config$jscomp$10_pos_config_position$jscomp$4$$, $map__53291__$1_outer_transform_rotation$jscomp$3_rotation__$1$$, $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($config$jscomp$10_pos_config_position$jscomp$4$$, 0));
  $map__53291__$1_outer_transform_rotation$jscomp$3_rotation__$1$$ = "rotate(" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($map__53291__$1_outer_transform_rotation$jscomp$3_rotation__$1$$) + "deg) " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$487$translate$$.$cljs$core$IFn$_invoke$arity$1$($config$jscomp$10_pos_config_position$jscomp$4$$));
  $G__53293_map__53291_parent_styles$jscomp$1_props__41909__auto__$jscomp$58_vec__53288$$ = {className:$APP.$helix$impl$props$normalize_class$$("absolute whitespace-nowrap " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$486$pos$$.$cljs$core$IFn$_invoke$arity$1$($config$jscomp$10_pos_config_position$jscomp$4$$)) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$485$origin$$.$cljs$core$IFn$_invoke$arity$1$($config$jscomp$10_pos_config_position$jscomp$4$$)) + 
  " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__53293_map__53291_parent_styles$jscomp$1_props__41909__auto__$jscomp$58_vec__53288$$)), style:{transform:$APP.$helix$impl$props$__GT_js$$($map__53291__$1_outer_transform_rotation$jscomp$3_rotation__$1$$)}, children:$children$jscomp$20_maybe_ref__41910__auto__$jscomp$58$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53293_map__53291_parent_styles$jscomp$1_props__41909__auto__$jscomp$58_vec__53288$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__53293_map__53291_parent_styles$jscomp$1_props__41909__auto__$jscomp$58_vec__53288$$);
};
$amp$components$media$lazy_image_gallery$lazy_image_gallery$$ = function($G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$, $G__62576_62828_G__62578_62830_maybe_ref__41910__auto__$jscomp$59$$) {
  $G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$), $G__62576_62828_G__62578_62830_maybe_ref__41910__auto__$jscomp$59$$], 
  null);
  $G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$, 0, null);
  $G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$ = $APP.$cljs$core$__destructure_map$$($G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$);
  var $slides$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$, $cljs$cst$495$slides$$), $enabled_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$, $cljs$cst$496$enabled_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$ = $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$497$delay$$, 7000], null));
  $G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$ = $module$node_modules$embla_carousel_react$cjs$embla_carousel_react_cjs$$($APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$498$loop$$, !0], null)), $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$module$node_modules$embla_carousel_autoplay$cjs$embla_carousel_autoplay_cjs$$($G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$)], 
  null)));
  var $embla_container_ref$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$, 0, null), $embla_api$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$, 1, null), $autoplay$$ = function() {
    function $G__62555$$() {
      return $APP.$cljs$core$truth_$$($embla_api$$) ? $embla_api$$.plugins().autoplay : null;
    }
    var $G__62556$$ = [$embla_api$$];
    return $APP.$helix$hooks$raw_use_memo$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_memo$$.$cljs$core$IFn$_invoke$arity$2$($G__62555$$, $G__62556$$) : $APP.$helix$hooks$raw_use_memo$$.call(null, $G__62555$$, $G__62556$$);
  }();
  $G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$ = $APP.$helix$hooks$use_state$$(1);
  var $current_index$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$, 0, null), $set_current_index_BANG_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$, 1, null), 
  $total_slides$$ = $APP.$cljs$core$count$$($slides$$), $next_slide$$ = function() {
    var $G__62561$$ = $APP.$cljs$core$truth_$$($embla_api$$) ? $embla_api$$.scrollNext : null, $G__62562$$ = [$embla_api$$];
    return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__62561$$, $G__62562$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__62561$$, $G__62562$$);
  }(), $previous_slide$$ = function() {
    var $G__62568$$ = $APP.$cljs$core$truth_$$($embla_api$$) ? $embla_api$$.scrollPrev : null, $G__62569$$ = [$embla_api$$];
    return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__62568$$, $G__62569$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__62568$$, $G__62569$$);
  }(), $on_scroll_handler$$ = function() {
    function $G__62571$$() {
      var $G__62573_JSCompiler_inline_result$jscomp$2194_fexpr__62574$jscomp$inline_2601_index$jscomp$inline_3068$$ = $embla_api$$.scrollProgress;
      $G__62573_JSCompiler_inline_result$jscomp$2194_fexpr__62574$jscomp$inline_2601_index$jscomp$inline_3068$$ = $G__62573_JSCompiler_inline_result$jscomp$2194_fexpr__62574$jscomp$inline_2601_index$jscomp$inline_3068$$.$cljs$core$IFn$_invoke$arity$0$ ? $G__62573_JSCompiler_inline_result$jscomp$2194_fexpr__62574$jscomp$inline_2601_index$jscomp$inline_3068$$.$cljs$core$IFn$_invoke$arity$0$() : $G__62573_JSCompiler_inline_result$jscomp$2194_fexpr__62574$jscomp$inline_2601_index$jscomp$inline_3068$$.call(null);
      $G__62573_JSCompiler_inline_result$jscomp$2194_fexpr__62574$jscomp$inline_2601_index$jscomp$inline_3068$$ = $APP.$cljs$math$round$$($total_slides$$ * $G__62573_JSCompiler_inline_result$jscomp$2194_fexpr__62574$jscomp$inline_2601_index$jscomp$inline_3068$$);
      $G__62573_JSCompiler_inline_result$jscomp$2194_fexpr__62574$jscomp$inline_2601_index$jscomp$inline_3068$$ = ($G__62573_JSCompiler_inline_result$jscomp$2194_fexpr__62574$jscomp$inline_2601_index$jscomp$inline_3068$$ < 0 || $G__62573_JSCompiler_inline_result$jscomp$2194_fexpr__62574$jscomp$inline_2601_index$jscomp$inline_3068$$ >= $total_slides$$ ? 0 : $G__62573_JSCompiler_inline_result$jscomp$2194_fexpr__62574$jscomp$inline_2601_index$jscomp$inline_3068$$) + 1;
      return $set_current_index_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_current_index_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__62573_JSCompiler_inline_result$jscomp$2194_fexpr__62574$jscomp$inline_2601_index$jscomp$inline_3068$$) : $set_current_index_BANG_$jscomp$1$$.call(null, $G__62573_JSCompiler_inline_result$jscomp$2194_fexpr__62574$jscomp$inline_2601_index$jscomp$inline_3068$$);
    }
    var $G__62572$$ = [$embla_api$$];
    return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__62571$$, $G__62572$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__62571$$, $G__62572$$);
  }();
  $G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($autoplay$$) ? $APP.$cljs$core$truth_$$($enabled_QMARK_$$) ? $autoplay$$.play() : $autoplay$$.stop() : null;
  });
  $G__62576_62828_G__62578_62830_maybe_ref__41910__auto__$jscomp$59$$ = [$autoplay$$, $enabled_QMARK_$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$, $G__62576_62828_G__62578_62830_maybe_ref__41910__auto__$jscomp$59$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$, 
  $G__62576_62828_G__62578_62830_maybe_ref__41910__auto__$jscomp$59$$);
  $G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($embla_api$$) ? (console.log($embla_api$$), $embla_api$$.on.$cljs$core$IFn$_invoke$arity$2$ ? $embla_api$$.on.$cljs$core$IFn$_invoke$arity$2$("scroll", $on_scroll_handler$$) : $embla_api$$.on.call(null, "scroll", $on_scroll_handler$$)) : null;
  });
  $G__62576_62828_G__62578_62830_maybe_ref__41910__auto__$jscomp$59$$ = [$embla_api$$, $on_scroll_handler$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$, $G__62576_62828_G__62578_62830_maybe_ref__41910__auto__$jscomp$59$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$, 
  $G__62576_62828_G__62578_62830_maybe_ref__41910__auto__$jscomp$59$$);
  $G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$ = function() {
    return {className:"relative h-full w-full", children:function() {
      var $G__62585$$ = function() {
        return {ref:$embla_container_ref$$, className:"embla h-full w-full", children:[function() {
          var $G__62592$$ = function() {
            return {className:"embla__container h-full w-full flex", children:$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__62615_idx$jscomp$64$$, $map__62601__$1_p__62598$$) {
              $map__62601__$1_p__62598$$ = $APP.$cljs$core$__destructure_map$$($map__62601__$1_p__62598$$);
              var $img_src$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__62601__$1_p__62598$$, $APP.$cljs$cst$433$img_src$$), $credit$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__62601__$1_p__62598$$, $APP.$cljs$cst$436$credit$$), $caption$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__62601__$1_p__62598$$, $APP.$cljs$cst$435$caption$$), $aspect_ratio$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__62601__$1_p__62598$$, 
              $APP.$cljs$cst$442$aspect_ratio$$), $is_active_QMARK_$jscomp$13$$ = $APP.$cljs$core$truth_$$($enabled_QMARK_$$) ? $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($G__62615_idx$jscomp$64$$, $current_index$jscomp$2$$ - 1) : $enabled_QMARK_$$;
              $G__62615_idx$jscomp$64$$ = function() {
                return {className:"embla__slide h-full w-full min-h-screen relative", children:function() {
                  var $G__62622$$ = function() {
                    return {className:"absolute w-full h-full ", children:function() {
                      var $G__62630$$ = function() {
                        return {"img-src":$img_src$jscomp$6$$, "aspect-ratio":$aspect_ratio$jscomp$7$$, "active?":$is_active_QMARK_$jscomp$13$$, children:function() {
                          var $G__62636$$ = function() {
                            return {className:"", children:[function() {
                              var $G__62644_G__62652$jscomp$inline_3728_G__62657$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3727$$ = {className:"italic text-xs", children:$caption$jscomp$4$$};
                              $G__62644_G__62652$jscomp$inline_3728_G__62657$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3727$$ = {children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62644_G__62652$jscomp$inline_3728_G__62657$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3727$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62644_G__62652$jscomp$inline_3728_G__62657$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3727$$)};
                              $G__62644_G__62652$jscomp$inline_3728_G__62657$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3727$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62644_G__62652$jscomp$inline_3728_G__62657$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3727$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62644_G__62652$jscomp$inline_3728_G__62657$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3727$$);
                              $G__62644_G__62652$jscomp$inline_3728_G__62657$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3727$$ = {position:$cljs$cst$484$tl$$, rotation:90, "parent-styles":"font-fira-code\n                               bg-white/70\n                               px-2\n                               text-slate-700", children:$G__62644_G__62652$jscomp$inline_3728_G__62657$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3727$$};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$ui$overlays$caption_overlay$$, $G__62644_G__62652$jscomp$inline_3728_G__62657$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3727$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$ui$overlays$caption_overlay$$, $G__62644_G__62652$jscomp$inline_3728_G__62657$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3727$$);
                            }(), function() {
                              var $G__62669_G__62677$jscomp$inline_3732_G__62685$jscomp$inline_3733_JSCompiler_inline_result$jscomp$inline_3731$$ = {className:"italic text-xs", children:$credit$jscomp$4$$};
                              $G__62669_G__62677$jscomp$inline_3732_G__62685$jscomp$inline_3733_JSCompiler_inline_result$jscomp$inline_3731$$ = {children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62669_G__62677$jscomp$inline_3732_G__62685$jscomp$inline_3733_JSCompiler_inline_result$jscomp$inline_3731$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62669_G__62677$jscomp$inline_3732_G__62685$jscomp$inline_3733_JSCompiler_inline_result$jscomp$inline_3731$$)};
                              $G__62669_G__62677$jscomp$inline_3732_G__62685$jscomp$inline_3733_JSCompiler_inline_result$jscomp$inline_3731$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62669_G__62677$jscomp$inline_3732_G__62685$jscomp$inline_3733_JSCompiler_inline_result$jscomp$inline_3731$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62669_G__62677$jscomp$inline_3732_G__62685$jscomp$inline_3733_JSCompiler_inline_result$jscomp$inline_3731$$);
                              $G__62669_G__62677$jscomp$inline_3732_G__62685$jscomp$inline_3733_JSCompiler_inline_result$jscomp$inline_3731$$ = {position:$cljs$cst$489$bl$$, "parent-styles":"font-fira-code\n                               bg-white/70\n                               px-2\n                               text-slate-700", children:$G__62669_G__62677$jscomp$inline_3732_G__62685$jscomp$inline_3733_JSCompiler_inline_result$jscomp$inline_3731$$};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$ui$overlays$caption_overlay$$, $G__62669_G__62677$jscomp$inline_3732_G__62685$jscomp$inline_3733_JSCompiler_inline_result$jscomp$inline_3731$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$ui$overlays$caption_overlay$$, $G__62669_G__62677$jscomp$inline_3732_G__62685$jscomp$inline_3733_JSCompiler_inline_result$jscomp$inline_3731$$);
                            }()]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62636$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62636$$);
                        }()};
                      }();
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__62630$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__62630$$);
                    }()};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62622$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62622$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__62615_idx$jscomp$64$$, $img_src$jscomp$6$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62615_idx$jscomp$64$$, $img_src$jscomp$6$$);
            }, $slides$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62592$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62592$$);
        }(), function() {
          var $G__62699$$ = function() {
            return {className:"absolute w-full top-1/2 transform -translate-y-1/2", children:function() {
              var $G__62705$$ = function() {
                return {className:"flex justify-between h-full w-full items-center ", children:[function() {
                  var $G__62713_G__62721$jscomp$inline_3656_G__62725$jscomp$inline_3657_JSCompiler_inline_result$jscomp$inline_3655$$ = {};
                  $G__62713_G__62721$jscomp$inline_3656_G__62725$jscomp$inline_3657_JSCompiler_inline_result$jscomp$inline_3655$$ = {className:"w-10 h-10 transition-transform rotate-180 text-red-500", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$icons$ChevronRightIcon$$, $G__62713_G__62721$jscomp$inline_3656_G__62725$jscomp$inline_3657_JSCompiler_inline_result$jscomp$inline_3655$$) : $APP.$helix$core$jsx$$.call(null, 
                  $amp$components$icons$ChevronRightIcon$$, $G__62713_G__62721$jscomp$inline_3656_G__62725$jscomp$inline_3657_JSCompiler_inline_result$jscomp$inline_3655$$)};
                  $G__62713_G__62721$jscomp$inline_3656_G__62725$jscomp$inline_3657_JSCompiler_inline_result$jscomp$inline_3655$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62713_G__62721$jscomp$inline_3656_G__62725$jscomp$inline_3657_JSCompiler_inline_result$jscomp$inline_3655$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62713_G__62721$jscomp$inline_3656_G__62725$jscomp$inline_3657_JSCompiler_inline_result$jscomp$inline_3655$$);
                  $G__62713_G__62721$jscomp$inline_3656_G__62725$jscomp$inline_3657_JSCompiler_inline_result$jscomp$inline_3655$$ = {onClick:$previous_slide$$, className:"w-12 flex items-center ", children:$G__62713_G__62721$jscomp$inline_3656_G__62725$jscomp$inline_3657_JSCompiler_inline_result$jscomp$inline_3655$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62713_G__62721$jscomp$inline_3656_G__62725$jscomp$inline_3657_JSCompiler_inline_result$jscomp$inline_3655$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62713_G__62721$jscomp$inline_3656_G__62725$jscomp$inline_3657_JSCompiler_inline_result$jscomp$inline_3655$$);
                }(), function() {
                  var $G__62735_G__62741$jscomp$inline_3660_G__62749$jscomp$inline_3661_JSCompiler_inline_result$jscomp$inline_3659$$ = {};
                  $G__62735_G__62741$jscomp$inline_3660_G__62749$jscomp$inline_3661_JSCompiler_inline_result$jscomp$inline_3659$$ = {className:"w-10 h-10 transition-transform text-red-500", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$icons$ChevronRightIcon$$, $G__62735_G__62741$jscomp$inline_3660_G__62749$jscomp$inline_3661_JSCompiler_inline_result$jscomp$inline_3659$$) : $APP.$helix$core$jsx$$.call(null, 
                  $amp$components$icons$ChevronRightIcon$$, $G__62735_G__62741$jscomp$inline_3660_G__62749$jscomp$inline_3661_JSCompiler_inline_result$jscomp$inline_3659$$)};
                  $G__62735_G__62741$jscomp$inline_3660_G__62749$jscomp$inline_3661_JSCompiler_inline_result$jscomp$inline_3659$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62735_G__62741$jscomp$inline_3660_G__62749$jscomp$inline_3661_JSCompiler_inline_result$jscomp$inline_3659$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62735_G__62741$jscomp$inline_3660_G__62749$jscomp$inline_3661_JSCompiler_inline_result$jscomp$inline_3659$$);
                  $G__62735_G__62741$jscomp$inline_3660_G__62749$jscomp$inline_3661_JSCompiler_inline_result$jscomp$inline_3659$$ = {onClick:$next_slide$$, className:"w-12 flex justify-end items-center ", children:$G__62735_G__62741$jscomp$inline_3660_G__62749$jscomp$inline_3661_JSCompiler_inline_result$jscomp$inline_3659$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62735_G__62741$jscomp$inline_3660_G__62749$jscomp$inline_3661_JSCompiler_inline_result$jscomp$inline_3659$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62735_G__62741$jscomp$inline_3660_G__62749$jscomp$inline_3661_JSCompiler_inline_result$jscomp$inline_3659$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62705$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62705$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62699$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62699$$);
        }(), function() {
          var $G__62755_G__62763$jscomp$inline_3761_G__62771$jscomp$inline_3762_G__62777$jscomp$inline_3763$$ = {"total-count":$total_slides$$, "current-index":$current_index$jscomp$2$$, "marker-styles":"w-3 h-3 bg-pink-400 rounded-full my-2 border-blue-800 border-2"};
          $G__62755_G__62763$jscomp$inline_3761_G__62771$jscomp$inline_3762_G__62777$jscomp$inline_3763$$ = {className:"", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$navs$progress_menu$progress_menu_v2$$, $G__62755_G__62763$jscomp$inline_3761_G__62771$jscomp$inline_3762_G__62777$jscomp$inline_3763$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$navs$progress_menu$progress_menu_v2$$, $G__62755_G__62763$jscomp$inline_3761_G__62771$jscomp$inline_3762_G__62777$jscomp$inline_3763$$)};
          $G__62755_G__62763$jscomp$inline_3761_G__62771$jscomp$inline_3762_G__62777$jscomp$inline_3763$$ = {className:"flex items-center justify-center w-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62755_G__62763$jscomp$inline_3761_G__62771$jscomp$inline_3762_G__62777$jscomp$inline_3763$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62755_G__62763$jscomp$inline_3761_G__62771$jscomp$inline_3762_G__62777$jscomp$inline_3763$$)};
          $G__62755_G__62763$jscomp$inline_3761_G__62771$jscomp$inline_3762_G__62777$jscomp$inline_3763$$ = {className:"absolute w-full bottom-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62755_G__62763$jscomp$inline_3761_G__62771$jscomp$inline_3762_G__62777$jscomp$inline_3763$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62755_G__62763$jscomp$inline_3761_G__62771$jscomp$inline_3762_G__62777$jscomp$inline_3763$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62755_G__62763$jscomp$inline_3761_G__62771$jscomp$inline_3762_G__62777$jscomp$inline_3763$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62755_G__62763$jscomp$inline_3761_G__62771$jscomp$inline_3762_G__62777$jscomp$inline_3763$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62585$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62585$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62575_62827_G__62577_62829_G__62581_auto_play_opts_map__62536_map__62536__$1_props__41909__auto__$jscomp$59_vec__62533_vec__62546_vec__62549$$);
};
$amp$components$elements$budget$about$preview$$ = function($G__62839_map__62837_props__41909__auto__$jscomp$60_vec__62834$$, $maybe_ref__41910__auto__$jscomp$60$$) {
  $G__62839_map__62837_props__41909__auto__$jscomp$60_vec__62834$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__62839_map__62837_props__41909__auto__$jscomp$60_vec__62834$$), $maybe_ref__41910__auto__$jscomp$60$$], null);
  $G__62839_map__62837_props__41909__auto__$jscomp$60_vec__62834$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62839_map__62837_props__41909__auto__$jscomp$60_vec__62834$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__62839_map__62837_props__41909__auto__$jscomp$60_vec__62834$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__62839_map__62837_props__41909__auto__$jscomp$60_vec__62834$$ = function() {
    return {className:"space-y-4 px-4", children:function() {
      var $G__62843$$ = function() {
        return {className:"text-xl", children:["Over the entire six-month duration of the Biennale, the ", function() {
          var $G__62847$$ = {className:"font-bold text-pink-400", children:"Armenia Pavilion"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62847$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62847$$);
        }(), " will operate as ", function() {
          var $G__62851$$ = {className:"italic", children:"The Studio"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62851$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62851$$);
        }(), ", a functioning atelier where the artist ", function() {
          var $G__62855$$ = {className:"font-medium", children:"Zadik Zadikian"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62855$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62855$$);
        }(), ", with his son Aram and assistants, will be engaged in the process and the study of making things. ", "Located in the ", function() {
          var $G__62859$$ = {className:"font-medium", children:"Arsenale Militare"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62859$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62859$$);
        }(), ", a vast complex of shipyards and armories that for over 900 years was the heart of Venetian naval power, ", "the studio becomes a neutral site where things are studied, formed, cast, assembled, and made through ", function() {
          var $G__62863$$ = {className:"text-white/90", children:"precision, repetition, calibration, attentive labor, and careful consideration"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62863$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62863$$);
        }(), ". Using the art and language of craft—long a part of the culture of Armenia, of Venice, and of human experience everywhere—", "Zadikian actualizes the studio as a workshop of the handmade, the contemplative, and the constantly developing sculpture."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62843$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__62843$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62839_map__62837_props__41909__auto__$jscomp$60_vec__62834$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62839_map__62837_props__41909__auto__$jscomp$60_vec__62834$$);
};
$amp$components$elements$budget$about$details$$ = function($G__62962_map__62958_props__41909__auto__$jscomp$61_vec__62955$$, $maybe_ref__41910__auto__$jscomp$61$$) {
  $G__62962_map__62958_props__41909__auto__$jscomp$61_vec__62955$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__62962_map__62958_props__41909__auto__$jscomp$61_vec__62955$$), $maybe_ref__41910__auto__$jscomp$61$$], null);
  $G__62962_map__62958_props__41909__auto__$jscomp$61_vec__62955$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62962_map__62958_props__41909__auto__$jscomp$61_vec__62955$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__62962_map__62958_props__41909__auto__$jscomp$61_vec__62955$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__62962_map__62958_props__41909__auto__$jscomp$61_vec__62955$$ = function() {
    return {children:function() {
      var $G__62970$$ = function() {
        return {className:"px-4 space-y-4", children:[function() {
          var $G__62976$$ = function() {
            return {className:"text-xl text-slate-100", children:["Over the entire six-month duration of the Biennale, the ", function() {
              var $G__62982$$ = {className:"font-bold text-pink-400", children:"Armenia Pavilion"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62982$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62982$$);
            }(), " will operate as ", function() {
              var $G__62987$$ = {className:"italic", children:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62987$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62987$$);
            }(), ", a functioning atelier where the artist ", function() {
              var $G__62991$$ = {className:"font-medium", children:"Zadik Zadikian"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62991$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62991$$);
            }(), ", with his son Aram and assistants, will be engaged in the process and the study of making things. ", "Located in the ", function() {
              var $G__62995$$ = {className:"font-medium", children:"Arsenale Militare"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62995$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62995$$);
            }(), ", a vast complex of shipyards and armories that for over 900 years was the heart of Venetian naval power, ", "the studio becomes a neutral site where things are studied, formed, cast, assembled, and made through ", function() {
              var $G__62999$$ = {className:"text-white/90", children:"precision, repetition, calibration, attentive labor, and careful consideration"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62999$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62999$$);
            }(), ". Using the art and language of craft—long a part of the culture of Armenia, of Venice, and of human experience everywhere—", "Zadikian actualizes the studio as a workshop of the handmade, the contemplative, and the constantly developing sculpture."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62976$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__62976$$);
        }(), function() {
          var $G__63003$$ = function() {
            return {children:["Centered on the most basic unit—the ", function() {
              var $G__63007$$ = {className:"font-medium", children:"block, or brick"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63007$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63007$$);
            }(), "—which has been continuously used for building for over eleven millennia, ", "Zadikian’s simplified plaster casts are elemental and foundational: a humble aesthetics where form, beauty, and meaning emerge through ", "the assembly and fluid recombination of humanity’s most common architectural building element. ", "Evolving from the block that has remained consistent in his practice for over half a century, ", "these new composite forms extend the human scale, infused with pigments across a broad chromatic spectrum, ", 
            "and—most importantly—remain ", function() {
              var $G__63011$$ = {className:"italic", children:"free of one another and moveable"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63011$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63011$$);
            }(), "."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63003$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63003$$);
        }(), function() {
          var $G__63015_G__63019$jscomp$inline_3426$$ = {className:"font-medium", children:"singular and interdependent"};
          $G__63015_G__63019$jscomp$inline_3426$$ = {children:["Here, the studio encourages experimentation: variances within the basic units that generate unexpected amalgamations—", "multiple distinct forms resolving into a unified whole. ", "Minimal and maximal, the one and the many, the this and the that—", "the primary objects become at once ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63015_G__63019$jscomp$inline_3426$$) : 
          $APP.$helix$core$jsx$$.call(null, "span", $G__63015_G__63019$jscomp$inline_3426$$), "."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63015_G__63019$jscomp$inline_3426$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63015_G__63019$jscomp$inline_3426$$);
        }(), function() {
          var $G__63023$$ = function() {
            return {children:[function() {
              var $G__63027$$ = {className:"italic", children:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63027$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63027$$);
            }(), ", for Zadikian, is ", function() {
              var $G__63031$$ = {className:"font-medium", children:"workroom, factory, and laboratory"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63031$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63031$$);
            }(), " at once: a locus of constant production, invention, and reinvention. ", "It is a place of infinite possibility, where art is not only what is made, but the study of its creation—and what we make of it. ", "Amid Ruskin’s ", function() {
              var $G__63035$$ = {className:"italic", children:"Stones of Venice"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63035$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63035$$);
            }(), ", within the seduction of sensations that bewitch the soul, ", "Zadikian’s open studio reminds us that art can also be about ", function() {
              var $G__63039$$ = {className:"text-white/90", children:"material presence and process"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63039$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63039$$);
            }(), "."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63023$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63023$$);
        }(), function() {
          var $G__63043$$ = function() {
            return {children:["Meaning does not arrive solely through explanation, but through the object’s coming-into-being as witnessed over time. ", "The unit does not arrive as image, symbol, or representation. ", "It exists as a tangible fact—built through internal necessities of ", function() {
              var $G__63047$$ = {className:"font-medium", children:"measure, form, weight, and placement"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63047$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63047$$);
            }(), ". ", "Here, sculpture is distilled to its organic essence—not to empty it of meaning, but to fully accord it its ", function() {
              var $G__63051$$ = {className:"italic", children:"epistemic and haptic"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63051$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63051$$);
            }(), " qualities."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63043$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63043$$);
        }(), function() {
          var $G__63055$$ = function() {
            return {children:["This is why the studio itself matters—why it is foregrounded, front and center. ", "The act of making is not staged, but neither is it hidden. ", "The object’s formation is not only shown as finished; it is witnessed in its making. ", "As the pavilion’s curator, ", function() {
              var $G__63059$$ = {className:"font-semibold text-slate-100", children:"Tony Shafrazi"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63059$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63059$$);
            }(), ", has described it, the studio offers the experience of ", function() {
              var $G__63063$$ = {className:"italic", children:"“seeing and studying art in the making.”"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63063$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63063$$);
            }(), " ", "The work is not fixed in certainty or frozen in stasis; ", "it is the continuous navigation of possibility—the sum of decisions made across the life of a studio practice."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63055$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63055$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62970$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62970$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62962_map__62958_props__41909__auto__$jscomp$61_vec__62955$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62962_map__62958_props__41909__auto__$jscomp$61_vec__62955$$);
};
$amp$components$elements$budget$about$about$$ = function($G__63077_map__63072_map__63072__$1_props__41909__auto__$jscomp$62_vec__63069_vec__63073$$, $maybe_ref__41910__auto__$jscomp$62$$) {
  $G__63077_map__63072_map__63072__$1_props__41909__auto__$jscomp$62_vec__63069_vec__63073$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63077_map__63072_map__63072__$1_props__41909__auto__$jscomp$62_vec__63069_vec__63073$$), $maybe_ref__41910__auto__$jscomp$62$$], null);
  $G__63077_map__63072_map__63072__$1_props__41909__auto__$jscomp$62_vec__63069_vec__63073$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63077_map__63072_map__63072__$1_props__41909__auto__$jscomp$62_vec__63069_vec__63073$$, 0, null);
  $G__63077_map__63072_map__63072__$1_props__41909__auto__$jscomp$62_vec__63069_vec__63073$$ = $APP.$cljs$core$__destructure_map$$($G__63077_map__63072_map__63072__$1_props__41909__auto__$jscomp$62_vec__63069_vec__63073$$);
  var $id$jscomp$68$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63077_map__63072_map__63072__$1_props__41909__auto__$jscomp$62_vec__63069_vec__63073$$, $APP.$cljs$cst$191$id$$), $subtitle$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63077_map__63072_map__63072__$1_props__41909__auto__$jscomp$62_vec__63069_vec__63073$$, $cljs$cst$499$subtitle$$), $title$jscomp$20$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63077_map__63072_map__63072__$1_props__41909__auto__$jscomp$62_vec__63069_vec__63073$$, 
  $APP.$cljs$cst$373$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$11$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__63077_map__63072_map__63072__$1_props__41909__auto__$jscomp$62_vec__63069_vec__63073$$ = $amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ctx$jscomp$11$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$382$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63077_map__63072_map__63072__$1_props__41909__auto__$jscomp$62_vec__63069_vec__63073$$, 0, null);
  var $is_visible_QMARK_$jscomp$8$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63077_map__63072_map__63072__$1_props__41909__auto__$jscomp$62_vec__63069_vec__63073$$, 1, null);
  $G__63077_map__63072_map__63072__$1_props__41909__auto__$jscomp$62_vec__63069_vec__63073$$ = function() {
    return {id:$id$jscomp$68$$, children:[function() {
      var $G__63081$$ = {"section-hint":$subtitle$$, title:$title$jscomp$20$$, "expand-button-label":"Read more", "preview-text":$amp$components$elements$budget$about$preview$$, "full-text":$amp$components$elements$budget$about$details$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__63081$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__63081$$);
    }(), function() {
      var $G__63085_G__63089$jscomp$inline_3429_JSCompiler_inline_result$jscomp$inline_3428$$ = {"enabled?":$is_visible_QMARK_$jscomp$8$$, slides:new $APP.$cljs$core$PersistentVector$$(null, 10, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$433$img_src$$, "https://atd-722658831.imgix.net/blue_yellow/top_view.jpg", $APP.$cljs$cst$442$aspect_ratio$$, 0.75, $APP.$cljs$cst$435$caption$$, "BLUE YELLOW BLUE YELLOW", $APP.$cljs$cst$436$credit$$, 
      "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$433$img_src$$, "https://atd-722658831.imgix.net/blue_yellow/side-2.jpg", $APP.$cljs$cst$442$aspect_ratio$$, 0.75, $APP.$cljs$cst$435$caption$$, "BLUE YELLOW BLUE YELLOW", $APP.$cljs$cst$436$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$433$img_src$$, "https://atd-722658831.imgix.net/blue_yellow/cu-2.jpg", $APP.$cljs$cst$442$aspect_ratio$$, 0.75, $APP.$cljs$cst$435$caption$$, 
      "BLUE YELLOW BLUE YELLOW", $APP.$cljs$cst$436$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$433$img_src$$, "https://atd-722658831.imgix.net/photos/blue_unit_with_hand.jpg", $APP.$cljs$cst$442$aspect_ratio$$, 1.5, $APP.$cljs$cst$435$caption$$, "BLUE BLOCK", $APP.$cljs$cst$436$credit$$, "Los Angeles 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$433$img_src$$, "https://atd-722658831.imgix.net/big_red/outpost.jpg", 
      $APP.$cljs$cst$442$aspect_ratio$$, 0.558, $APP.$cljs$cst$435$caption$$, "THE BIG RED", $APP.$cljs$cst$436$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$433$img_src$$, "https://atd-722658831.imgix.net/big_red/low_side.jpg", $APP.$cljs$cst$442$aspect_ratio$$, 1.77, $APP.$cljs$cst$435$caption$$, "THE BIG RED", $APP.$cljs$cst$436$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$433$img_src$$, 
      "https://atd-722658831.imgix.net/big_red/master.jpg", $APP.$cljs$cst$442$aspect_ratio$$, 1.77, $APP.$cljs$cst$435$caption$$, "THE BIG RED", $APP.$cljs$cst$436$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$433$img_src$$, "https://atd-722658831.imgix.net/big_red/corner_low.jpg", $APP.$cljs$cst$442$aspect_ratio$$, 0.75, $APP.$cljs$cst$435$caption$$, "THE BIG RED", $APP.$cljs$cst$436$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
      4, [$APP.$cljs$cst$433$img_src$$, "https://atd-722658831.imgix.net/big_red/black_leg.jpg", $APP.$cljs$cst$442$aspect_ratio$$, 0.75, $APP.$cljs$cst$435$caption$$, "THE BIG RED", $APP.$cljs$cst$436$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$433$img_src$$, "https://atd-722658831.imgix.net/big_red/flag.jpg", $APP.$cljs$cst$442$aspect_ratio$$, 1.38, $APP.$cljs$cst$435$caption$$, "THE BIG RED", $APP.$cljs$cst$436$credit$$, "Render 2026"], null)], 
      null)};
      $G__63085_G__63089$jscomp$inline_3429_JSCompiler_inline_result$jscomp$inline_3428$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$media$lazy_image_gallery$lazy_image_gallery$$, $G__63085_G__63089$jscomp$inline_3429_JSCompiler_inline_result$jscomp$inline_3428$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$media$lazy_image_gallery$lazy_image_gallery$$, $G__63085_G__63089$jscomp$inline_3429_JSCompiler_inline_result$jscomp$inline_3428$$);
      $G__63085_G__63089$jscomp$inline_3429_JSCompiler_inline_result$jscomp$inline_3428$$ = {className:"mt-6 max-h-screen", ref:$outer_ctx$jscomp$11$$, children:$G__63085_G__63089$jscomp$inline_3429_JSCompiler_inline_result$jscomp$inline_3428$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63085_G__63089$jscomp$inline_3429_JSCompiler_inline_result$jscomp$inline_3428$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63085_G__63089$jscomp$inline_3429_JSCompiler_inline_result$jscomp$inline_3428$$);
    }(), function() {
      var $G__63093$$ = {className:"space-y-4 mt-6"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63093$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63093$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63077_map__63072_map__63072__$1_props__41909__auto__$jscomp$62_vec__63069_vec__63073$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63077_map__63072_map__63072__$1_props__41909__auto__$jscomp$62_vec__63069_vec__63073$$);
};
$amp$components$elements$budget$committe$preview$$ = function($G__63104_map__63102_props__41909__auto__$jscomp$63_vec__63099$$, $maybe_ref__41910__auto__$jscomp$63$$) {
  $G__63104_map__63102_props__41909__auto__$jscomp$63_vec__63099$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63104_map__63102_props__41909__auto__$jscomp$63_vec__63099$$), $maybe_ref__41910__auto__$jscomp$63$$], null);
  $G__63104_map__63102_props__41909__auto__$jscomp$63_vec__63099$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63104_map__63102_props__41909__auto__$jscomp$63_vec__63099$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__63104_map__63102_props__41909__auto__$jscomp$63_vec__63099$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__63104_map__63102_props__41909__auto__$jscomp$63_vec__63099$$ = function() {
    return {className:"space-y-3 p-4", children:function() {
      var $G__63108$$ = function() {
        return {children:[function() {
          var $G__63112$$ = {className:"text-slate-300", children:"To support the scale of this undertaking, a dedicated "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63112$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63112$$);
        }(), function() {
          var $G__63116$$ = {className:"font-semibold text-pink-400", children:"fundraising committee"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63116$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63116$$);
        }(), function() {
          var $G__63120$$ = {className:"text-slate-300", children:" has been formed to guide outreach, steward donor relationships, and advance the fundraising strategy required to deliver an ambitious international project in Venice."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63120$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63120$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63108$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63108$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63104_map__63102_props__41909__auto__$jscomp$63_vec__63099$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63104_map__63102_props__41909__auto__$jscomp$63_vec__63099$$);
};
$amp$components$elements$budget$committe$details$$ = function($G__63131_map__63129_props__41909__auto__$jscomp$64_vec__63126$$, $maybe_ref__41910__auto__$jscomp$64$$) {
  $G__63131_map__63129_props__41909__auto__$jscomp$64_vec__63126$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63131_map__63129_props__41909__auto__$jscomp$64_vec__63126$$), $maybe_ref__41910__auto__$jscomp$64$$], null);
  $G__63131_map__63129_props__41909__auto__$jscomp$64_vec__63126$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63131_map__63129_props__41909__auto__$jscomp$64_vec__63126$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__63131_map__63129_props__41909__auto__$jscomp$64_vec__63126$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__63131_map__63129_props__41909__auto__$jscomp$64_vec__63126$$ = function() {
    return {className:"text-xl text-slate-100 p-4 space-y-3", children:[function() {
      var $G__63135$$ = function() {
        return {children:[function() {
          var $G__63139$$ = {className:"text-slate-300", children:"To support the scale of this undertaking, a dedicated "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63139$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63139$$);
        }(), function() {
          var $G__63143$$ = {className:"font-semibold text-pink-400", children:"fundraising committee"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63143$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63143$$);
        }(), function() {
          var $G__63147$$ = {className:"text-slate-300", children:" has been formed to guide outreach, steward donor relationships, and advance the fundraising strategy required to deliver an ambitious international project in Venice."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63147$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63147$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63135$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63135$$);
    }(), function() {
      var $G__63151$$ = {className:"text-slate-300", children:"The committee works in close coordination with Pavilion leadership to expand networks, cultivate institutional and private support, and sustain momentum across the full duration of the Biennale."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63151$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63151$$);
    }(), function() {
      var $G__63155$$ = function() {
        return {className:"space-y-2", children:[function() {
          var $G__63159$$ = {className:"text-slate-300", children:"The committee is led by:"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63159$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63159$$);
        }(), function() {
          var $G__63163$$ = function() {
            return {className:"ml-6 list-['-'] marker:text-slate-400 text-slate-100", children:[function() {
              var $G__63167$$ = {className:"px-4 italic text-slate-300", children:"Archbishop Hovnan Derderian"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__63167$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__63167$$);
            }(), function() {
              var $G__63171$$ = {className:"px-4 italic text-slate-300", children:"Tony Shafrazi"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__63171$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__63171$$);
            }(), function() {
              var $G__63175$$ = {className:"px-4 italic text-slate-300", children:"Tina Chakarian"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__63175$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__63175$$);
            }(), function() {
              var $G__63179$$ = {className:"px-4 italic text-slate-300", children:"Rafi Ourfalian"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__63179$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__63179$$);
            }(), function() {
              var $G__63183$$ = {className:"px-4 italic text-slate-300", children:"Khachik Khudikyan"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__63183$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__63183$$);
            }(), function() {
              var $G__63187$$ = {className:"px-4 italic text-slate-300", children:"Andranik Torosyan"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__63187$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__63187$$);
            }(), function() {
              var $G__63191$$ = {className:"px-4 italic text-slate-300", children:"Aram Alajajian"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__63191$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__63191$$);
            }(), function() {
              var $G__63195$$ = {className:"px-4 italic text-slate-300", children:"Vik Hovsepian"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__63195$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__63195$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ul", $G__63163$$) : $APP.$helix$core$jsxs$$.call(null, "ul", $G__63163$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63155$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63155$$);
    }(), function() {
      var $G__63199$$ = {className:"text-slate-300", children:"The committee plays an active role in introducing prospective supporters, facilitating conversations, and strengthening long-term relationships that extend beyond opening week—ensuring the Pavilion is resourced, accountable, and delivered at the highest standard."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63199$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63199$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63131_map__63129_props__41909__auto__$jscomp$64_vec__63126$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63131_map__63129_props__41909__auto__$jscomp$64_vec__63126$$);
};
$amp$components$elements$budget$committe$committee_member_card$$ = function($G__63210_map__63208_map__63208__$1_props__41909__auto__$jscomp$65_vec__63205$$, $maybe_ref__41910__auto__$jscomp$65$$) {
  $G__63210_map__63208_map__63208__$1_props__41909__auto__$jscomp$65_vec__63205$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63210_map__63208_map__63208__$1_props__41909__auto__$jscomp$65_vec__63205$$), $maybe_ref__41910__auto__$jscomp$65$$], null);
  $G__63210_map__63208_map__63208__$1_props__41909__auto__$jscomp$65_vec__63205$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63210_map__63208_map__63208__$1_props__41909__auto__$jscomp$65_vec__63205$$, 0, null);
  $G__63210_map__63208_map__63208__$1_props__41909__auto__$jscomp$65_vec__63205$$ = $APP.$cljs$core$__destructure_map$$($G__63210_map__63208_map__63208__$1_props__41909__auto__$jscomp$65_vec__63205$$);
  var $name$jscomp$197$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63210_map__63208_map__63208__$1_props__41909__auto__$jscomp$65_vec__63205$$, $APP.$cljs$cst$182$name$$), $role$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63210_map__63208_map__63208__$1_props__41909__auto__$jscomp$65_vec__63205$$, $APP.$cljs$cst$468$role$$), $img_src$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63210_map__63208_map__63208__$1_props__41909__auto__$jscomp$65_vec__63205$$, 
  $APP.$cljs$cst$433$img_src$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63210_map__63208_map__63208__$1_props__41909__auto__$jscomp$65_vec__63205$$, $APP.$cljs$cst$436$credit$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__63210_map__63208_map__63208__$1_props__41909__auto__$jscomp$65_vec__63205$$ = function() {
    return {className:"w-[150px] aspect-[0.7] relative ml-2 ", children:function() {
      var $G__63214$$ = function() {
        return {"img-src":$img_src$jscomp$7$$, fit:"crop", "aspect-ratio":0.7, "active?":!0, children:function() {
          var $G__63218$$ = function() {
            return {className:"", children:[function() {
              var $G__63222_G__63226$jscomp$inline_3432_JSCompiler_inline_result$jscomp$inline_3431$$ = {className:"italic text-xs", children:$name$jscomp$197$$};
              $G__63222_G__63226$jscomp$inline_3432_JSCompiler_inline_result$jscomp$inline_3431$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63222_G__63226$jscomp$inline_3432_JSCompiler_inline_result$jscomp$inline_3431$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63222_G__63226$jscomp$inline_3432_JSCompiler_inline_result$jscomp$inline_3431$$);
              $G__63222_G__63226$jscomp$inline_3432_JSCompiler_inline_result$jscomp$inline_3431$$ = {position:$cljs$cst$484$tl$$, rotation:90, "parent-styles":"font-fira-code\n                       bg-white/70\n                       px-1\n                       text-slate-500\n                        \n                        ", children:$G__63222_G__63226$jscomp$inline_3432_JSCompiler_inline_result$jscomp$inline_3431$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$ui$overlays$caption_overlay$$, $G__63222_G__63226$jscomp$inline_3432_JSCompiler_inline_result$jscomp$inline_3431$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$ui$overlays$caption_overlay$$, $G__63222_G__63226$jscomp$inline_3432_JSCompiler_inline_result$jscomp$inline_3431$$);
            }(), function() {
              var $G__63231_G__63235$jscomp$inline_3435_JSCompiler_inline_result$jscomp$inline_3434$$ = {className:"italic text-xs", children:$role$jscomp$1$$};
              $G__63231_G__63235$jscomp$inline_3435_JSCompiler_inline_result$jscomp$inline_3434$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63231_G__63235$jscomp$inline_3435_JSCompiler_inline_result$jscomp$inline_3434$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63231_G__63235$jscomp$inline_3435_JSCompiler_inline_result$jscomp$inline_3434$$);
              $G__63231_G__63235$jscomp$inline_3435_JSCompiler_inline_result$jscomp$inline_3434$$ = {position:$cljs$cst$489$bl$$, "parent-styles":"font-fira-code\n                       bg-white/70\n                       px-1\n                       text-slate-500\n                        \n                        ", children:$G__63231_G__63235$jscomp$inline_3435_JSCompiler_inline_result$jscomp$inline_3434$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$ui$overlays$caption_overlay$$, $G__63231_G__63235$jscomp$inline_3435_JSCompiler_inline_result$jscomp$inline_3434$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$ui$overlays$caption_overlay$$, $G__63231_G__63235$jscomp$inline_3435_JSCompiler_inline_result$jscomp$inline_3434$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63218$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63218$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__63214$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__63214$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63210_map__63208_map__63208__$1_props__41909__auto__$jscomp$65_vec__63205$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63210_map__63208_map__63208__$1_props__41909__auto__$jscomp$65_vec__63205$$);
};
$amp$components$elements$budget$committe$committee_gallery$$ = function($G__63326_map__63306_props__41909__auto__$jscomp$66_vec__63303$$, $maybe_ref__41910__auto__$jscomp$66$$) {
  $G__63326_map__63306_props__41909__auto__$jscomp$66_vec__63303$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63326_map__63306_props__41909__auto__$jscomp$66_vec__63303$$), $maybe_ref__41910__auto__$jscomp$66$$], null);
  $G__63326_map__63306_props__41909__auto__$jscomp$66_vec__63303$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63326_map__63306_props__41909__auto__$jscomp$66_vec__63303$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__63326_map__63306_props__41909__auto__$jscomp$66_vec__63303$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__63326_map__63306_props__41909__auto__$jscomp$66_vec__63303$$ = function() {
    return {className:"p-4 w-full", children:function() {
      var $G__63338$$ = function() {
        return {children:[function() {
          var $G__63342_G__63346$jscomp$inline_3438$$ = {className:"text-lg font-semibold text-slate-100", children:"Committee Members"};
          $G__63342_G__63346$jscomp$inline_3438$$ = {className:"pl-4 ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__63342_G__63346$jscomp$inline_3438$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__63342_G__63346$jscomp$inline_3438$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63342_G__63346$jscomp$inline_3438$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63342_G__63346$jscomp$inline_3438$$);
        }(), function() {
          var $G__63350$$ = function() {
            return {className:"mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($name$jscomp$198_p__63353$$) {
              var $credit$jscomp$6_map__63354__$1$$ = $APP.$cljs$core$__destructure_map$$($name$jscomp$198_p__63353$$);
              $name$jscomp$198_p__63353$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$6_map__63354__$1$$, $APP.$cljs$cst$182$name$$);
              var $G__63356_G__63361$jscomp$inline_3441_JSCompiler_temp$jscomp$inline_3440_role$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$6_map__63354__$1$$, $APP.$cljs$cst$468$role$$), $img_src$jscomp$8$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$6_map__63354__$1$$, $APP.$cljs$cst$433$img_src$$);
              $credit$jscomp$6_map__63354__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$6_map__63354__$1$$, $APP.$cljs$cst$436$credit$$);
              $APP.$cljs$core$truth_$$($img_src$jscomp$8$$) ? ($G__63356_G__63361$jscomp$inline_3441_JSCompiler_temp$jscomp$inline_3440_role$jscomp$2$$ = {name:$name$jscomp$198_p__63353$$, role:$G__63356_G__63361$jscomp$inline_3441_JSCompiler_temp$jscomp$inline_3440_role$jscomp$2$$, "img-src":$img_src$jscomp$8$$, credit:$credit$jscomp$6_map__63354__$1$$}, $G__63356_G__63361$jscomp$inline_3441_JSCompiler_temp$jscomp$inline_3440_role$jscomp$2$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? 
              $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$committe$committee_member_card$$, $G__63356_G__63361$jscomp$inline_3441_JSCompiler_temp$jscomp$inline_3440_role$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$committe$committee_member_card$$, $G__63356_G__63361$jscomp$inline_3441_JSCompiler_temp$jscomp$inline_3440_role$jscomp$2$$)) : $G__63356_G__63361$jscomp$inline_3441_JSCompiler_temp$jscomp$inline_3440_role$jscomp$2$$ = 
              null;
              $G__63356_G__63361$jscomp$inline_3441_JSCompiler_temp$jscomp$inline_3440_role$jscomp$2$$ = {children:$G__63356_G__63361$jscomp$inline_3441_JSCompiler_temp$jscomp$inline_3440_role$jscomp$2$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__63356_G__63361$jscomp$inline_3441_JSCompiler_temp$jscomp$inline_3440_role$jscomp$2$$, $name$jscomp$198_p__63353$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63356_G__63361$jscomp$inline_3441_JSCompiler_temp$jscomp$inline_3440_role$jscomp$2$$, $name$jscomp$198_p__63353$$);
            }, $amp$components$elements$budget$committe$committee_members$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63350$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63350$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63338$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63338$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63326_map__63306_props__41909__auto__$jscomp$66_vec__63303$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63326_map__63306_props__41909__auto__$jscomp$66_vec__63303$$);
};
$amp$components$elements$budget$committe$committee$$ = function($G__63385_map__63378_map__63378__$1_props__41909__auto__$jscomp$67_vec__63375$$, $maybe_ref__41910__auto__$jscomp$67$$) {
  $G__63385_map__63378_map__63378__$1_props__41909__auto__$jscomp$67_vec__63375$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63385_map__63378_map__63378__$1_props__41909__auto__$jscomp$67_vec__63375$$), $maybe_ref__41910__auto__$jscomp$67$$], null);
  $G__63385_map__63378_map__63378__$1_props__41909__auto__$jscomp$67_vec__63375$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63385_map__63378_map__63378__$1_props__41909__auto__$jscomp$67_vec__63375$$, 0, null);
  $G__63385_map__63378_map__63378__$1_props__41909__auto__$jscomp$67_vec__63375$$ = $APP.$cljs$core$__destructure_map$$($G__63385_map__63378_map__63378__$1_props__41909__auto__$jscomp$67_vec__63375$$);
  var $id$jscomp$69$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63385_map__63378_map__63378__$1_props__41909__auto__$jscomp$67_vec__63375$$, $APP.$cljs$cst$191$id$$), $subtitle$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63385_map__63378_map__63378__$1_props__41909__auto__$jscomp$67_vec__63375$$, $cljs$cst$499$subtitle$$), $title$jscomp$21$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63385_map__63378_map__63378__$1_props__41909__auto__$jscomp$67_vec__63375$$, 
  $APP.$cljs$cst$373$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__63385_map__63378_map__63378__$1_props__41909__auto__$jscomp$67_vec__63375$$ = function() {
    return {id:$id$jscomp$69$$, className:"space-y-4", children:[function() {
      var $G__63393$$ = {"section-hint":$subtitle$jscomp$1$$, title:$title$jscomp$21$$, "expand-button-label":"Read more", "preview-text":$amp$components$elements$budget$committe$preview$$, "full-text":$amp$components$elements$budget$committe$details$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__63393$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__63393$$);
    }(), function() {
      var $G__63398$$ = {children:$amp$components$elements$budget$committe$committee_members$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$committe$committee_gallery$$, $G__63398$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$committe$committee_gallery$$, $G__63398$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__63385_map__63378_map__63378__$1_props__41909__auto__$jscomp$67_vec__63375$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__63385_map__63378_map__63378__$1_props__41909__auto__$jscomp$67_vec__63375$$);
};
$amp$components$elements$budget$budget_table$format_currency$$ = function($amount$$) {
  return "$" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(Math.round($amount$$).toLocaleString("en-US"));
};
$amp$components$elements$budget$budget_table$calculate_section_total_no_tax$$ = function($details$jscomp$3$$) {
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$500$amount$$, $details$jscomp$3$$));
};
$amp$components$elements$budget$budget_table$sub_total_all_sections$$ = function($cost_data$$) {
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__63229_SHARP__tax_rate$jscomp$inline_1503$$) {
    var $item_details$jscomp$inline_1501_sub_total$jscomp$inline_1502$$ = $cljs$cst$501$details$$.$cljs$core$IFn$_invoke$arity$1$($p1__63229_SHARP__tax_rate$jscomp$inline_1503$$);
    $item_details$jscomp$inline_1501_sub_total$jscomp$inline_1502$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$500$amount$$, $item_details$jscomp$inline_1501_sub_total$jscomp$inline_1502$$));
    $p1__63229_SHARP__tax_rate$jscomp$inline_1503$$ = $cljs$cst$502$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$503$tax$$.$cljs$core$IFn$_invoke$arity$1$($p1__63229_SHARP__tax_rate$jscomp$inline_1503$$));
    return ($p1__63229_SHARP__tax_rate$jscomp$inline_1503$$ > 0 ? $p1__63229_SHARP__tax_rate$jscomp$inline_1503$$ * $item_details$jscomp$inline_1501_sub_total$jscomp$inline_1502$$ : 0) + $item_details$jscomp$inline_1501_sub_total$jscomp$inline_1502$$;
  }, $cost_data$$));
};
$amp$components$elements$budget$budget_table$total_section$$ = function($G__63247_cost_data$jscomp$1_map__63244_map__63244__$1_props__41909__auto__$jscomp$68_vec__63241$$, $maybe_ref__41910__auto__$jscomp$68$$) {
  $G__63247_cost_data$jscomp$1_map__63244_map__63244__$1_props__41909__auto__$jscomp$68_vec__63241$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63247_cost_data$jscomp$1_map__63244_map__63244__$1_props__41909__auto__$jscomp$68_vec__63241$$), $maybe_ref__41910__auto__$jscomp$68$$], null);
  $G__63247_cost_data$jscomp$1_map__63244_map__63244__$1_props__41909__auto__$jscomp$68_vec__63241$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63247_cost_data$jscomp$1_map__63244_map__63244__$1_props__41909__auto__$jscomp$68_vec__63241$$, 0, null);
  $G__63247_cost_data$jscomp$1_map__63244_map__63244__$1_props__41909__auto__$jscomp$68_vec__63241$$ = $APP.$cljs$core$__destructure_map$$($G__63247_cost_data$jscomp$1_map__63244_map__63244__$1_props__41909__auto__$jscomp$68_vec__63241$$);
  $G__63247_cost_data$jscomp$1_map__63244_map__63244__$1_props__41909__auto__$jscomp$68_vec__63241$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63247_cost_data$jscomp$1_map__63244_map__63244__$1_props__41909__auto__$jscomp$68_vec__63241$$, $cljs$cst$504$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $sub_total$jscomp$1$$ = $amp$components$elements$budget$budget_table$sub_total_all_sections$$($G__63247_cost_data$jscomp$1_map__63244_map__63244__$1_props__41909__auto__$jscomp$68_vec__63241$$), $grand_total$$ = $sub_total$jscomp$1$$ + $sub_total$jscomp$1$$ * 0.1;
  $G__63247_cost_data$jscomp$1_map__63244_map__63244__$1_props__41909__auto__$jscomp$68_vec__63241$$ = function() {
    return {className:"flex flex-col", children:[function() {
      var $G__63251$$ = function() {
        return {className:"bg-slate-600 text-slate-100 flex justify-between items-center px-4 py-2 border-t-4 border-t-blue-400", children:[function() {
          var $G__63255_G__63259$jscomp$inline_3444$$ = {className:"text-xl italic", children:"Sub total"};
          $G__63255_G__63259$jscomp$inline_3444$$ = {className:"w-6/12 ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__63255_G__63259$jscomp$inline_3444$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__63255_G__63259$jscomp$inline_3444$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63255_G__63259$jscomp$inline_3444$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63255_G__63259$jscomp$inline_3444$$);
        }(), function() {
          var $G__63263$$ = {className:"w-1/12 "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63263$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63263$$);
        }(), function() {
          var $G__63267_G__63271$jscomp$inline_3447$$ = {className:"font-medium ", children:$amp$components$elements$budget$budget_table$format_currency$$($sub_total$jscomp$1$$)};
          $G__63267_G__63271$jscomp$inline_3447$$ = {className:"w-4/12 flex justify-end items-center space-x-4 ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63267_G__63271$jscomp$inline_3447$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63267_G__63271$jscomp$inline_3447$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63267_G__63271$jscomp$inline_3447$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63267_G__63271$jscomp$inline_3447$$);
        }(), function() {
          var $G__63275$$ = {className:"w-1/12"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63275$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63275$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__63251$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__63251$$);
    }(), function() {
      var $G__63279$$ = function() {
        return {className:"bg-slate-700 text-slate-100 flex justify-between items-center px-4 py-2", children:[function() {
          var $G__63283_G__63288$jscomp$inline_3450$$ = {className:"text-xl italic", children:"Contingency 10%"};
          $G__63283_G__63288$jscomp$inline_3450$$ = {className:"w-6/12 ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__63283_G__63288$jscomp$inline_3450$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__63283_G__63288$jscomp$inline_3450$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63283_G__63288$jscomp$inline_3450$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63283_G__63288$jscomp$inline_3450$$);
        }(), function() {
          var $G__63292$$ = {className:"w-1/12 "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63292$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63292$$);
        }(), function() {
          var $G__63296_G__63300$jscomp$inline_3453$$ = {className:"font-medium ", children:$amp$components$elements$budget$budget_table$format_currency$$($sub_total$jscomp$1$$ * 0.1)};
          $G__63296_G__63300$jscomp$inline_3453$$ = {className:"w-4/12 flex justify-end items-center space-x-4 ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63296_G__63300$jscomp$inline_3453$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63296_G__63300$jscomp$inline_3453$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63296_G__63300$jscomp$inline_3453$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63296_G__63300$jscomp$inline_3453$$);
        }(), function() {
          var $G__63308$$ = {className:"w-1/12"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63308$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63308$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__63279$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__63279$$);
    }(), function() {
      var $G__63312$$ = function() {
        return {className:"bg-slate-600 text-slate-100 flex justify-between items-center px-4 py-4", children:[function() {
          var $G__63316_G__63320$jscomp$inline_3456$$ = {className:"font-semibold text-2xl", children:"TOTAL"};
          $G__63316_G__63320$jscomp$inline_3456$$ = {className:"w-6/12 ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__63316_G__63320$jscomp$inline_3456$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__63316_G__63320$jscomp$inline_3456$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63316_G__63320$jscomp$inline_3456$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63316_G__63320$jscomp$inline_3456$$);
        }(), function() {
          var $G__63324$$ = {className:"w-1/12 "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63324$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63324$$);
        }(), function() {
          var $G__63330_G__63334$jscomp$inline_3459$$ = {className:"font-medium ", children:$amp$components$elements$budget$budget_table$format_currency$$($grand_total$$)};
          $G__63330_G__63334$jscomp$inline_3459$$ = {className:"w-4/12 flex justify-end items-center space-x-4 ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63330_G__63334$jscomp$inline_3459$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63330_G__63334$jscomp$inline_3459$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63330_G__63334$jscomp$inline_3459$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63330_G__63334$jscomp$inline_3459$$);
        }(), function() {
          var $G__63368$$ = {className:"w-1/12"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63368$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63368$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__63312$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__63312$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63247_cost_data$jscomp$1_map__63244_map__63244__$1_props__41909__auto__$jscomp$68_vec__63241$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63247_cost_data$jscomp$1_map__63244_map__63244__$1_props__41909__auto__$jscomp$68_vec__63241$$);
};
$amp$components$elements$budget$budget_table$pad_two_digits$$ = function($n$jscomp$208$$) {
  return $n$jscomp$208$$ < 10 ? "0" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$208$$) : "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$208$$);
};
$amp$components$elements$budget$budget_table$detail_line_item$$ = function($G__63387_G__63439_map__63383_map__63383__$1_props__41909__auto__$jscomp$69_vec__63380$$, $maybe_ref__41910__auto__$jscomp$69$$) {
  $G__63387_G__63439_map__63383_map__63383__$1_props__41909__auto__$jscomp$69_vec__63380$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63387_G__63439_map__63383_map__63383__$1_props__41909__auto__$jscomp$69_vec__63380$$), $maybe_ref__41910__auto__$jscomp$69$$], null);
  $G__63387_G__63439_map__63383_map__63383__$1_props__41909__auto__$jscomp$69_vec__63380$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63387_G__63439_map__63383_map__63383__$1_props__41909__auto__$jscomp$69_vec__63380$$, 0, null);
  $G__63387_G__63439_map__63383_map__63383__$1_props__41909__auto__$jscomp$69_vec__63380$$ = $APP.$cljs$core$__destructure_map$$($G__63387_G__63439_map__63383_map__63383__$1_props__41909__auto__$jscomp$69_vec__63380$$);
  var $idx$jscomp$65$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63387_G__63439_map__63383_map__63383__$1_props__41909__auto__$jscomp$69_vec__63380$$, $APP.$cljs$cst$463$idx$$), $detail$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63387_G__63439_map__63383_map__63383__$1_props__41909__auto__$jscomp$69_vec__63380$$, $APP.$cljs$cst$505$detail$$), $set_expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63387_G__63439_map__63383_map__63383__$1_props__41909__auto__$jscomp$69_vec__63380$$, 
  $cljs$cst$506$set_expanded_items$$), $expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63387_G__63439_map__63383_map__63383__$1_props__41909__auto__$jscomp$69_vec__63380$$, $cljs$cst$507$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $item_id$$ = "detail-item-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$65$$), $description$jscomp$4$$ = $cljs$cst$508$description$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$3$$), $is_odd_detail_QMARK_$$ = !$APP.$cljs$core$even_QMARK_$$($idx$jscomp$65$$);
  if ($APP.$cljs$core$truth_$$($description$jscomp$4$$)) {
    return $G__63387_G__63439_map__63383_map__63383__$1_props__41909__auto__$jscomp$69_vec__63380$$ = function() {
      return {className:$APP.$helix$impl$props$normalize_class$$("cursor-pointer overflow-hidden " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($is_odd_detail_QMARK_$$ ? "bg-slate-700/50" : "")), onClick:function() {
        function $G__63396$$($prev$jscomp$8$$) {
          return $APP.$cljs$core$truth_$$($prev$jscomp$8$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$8$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $prev$jscomp$8$$.call(null, $item_id$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$8$$, $item_id$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$8$$, $item_id$$);
        }
        return $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($G__63396$$) : $set_expanded_items$$.call(null, $G__63396$$);
      }, children:[function() {
        var $G__63400$$ = function() {
          return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
            var $G__63404$$ = {className:"font-mono text-sm text-slate-400 mr-4", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$elements$budget$budget_table$pad_two_digits$$($idx$jscomp$65$$ + 1)) + "."};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63404$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63404$$);
          }(), function() {
            var $G__63409_JSCompiler_temp_const$jscomp$inline_3666$$ = $APP.$cljs$cst$373$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$3$$);
            var $G__63413$jscomp$inline_3668_G__63417$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3667$$ = {};
            $G__63413$jscomp$inline_3668_G__63417$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3667$$ = {className:"w-5 h-5 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$icons$InformationCircle$$, $G__63413$jscomp$inline_3668_G__63417$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3667$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$icons$InformationCircle$$, $G__63413$jscomp$inline_3668_G__63417$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3667$$)};
            $G__63413$jscomp$inline_3668_G__63417$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3667$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63413$jscomp$inline_3668_G__63417$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3667$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63413$jscomp$inline_3668_G__63417$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3667$$);
            $G__63409_JSCompiler_temp_const$jscomp$inline_3666$$ = {className:"justify-start flex-1 flex items-center", children:[$G__63409_JSCompiler_temp_const$jscomp$inline_3666$$, $G__63413$jscomp$inline_3668_G__63417$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3667$$]};
            return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63409_JSCompiler_temp_const$jscomp$inline_3666$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__63409_JSCompiler_temp_const$jscomp$inline_3666$$);
          }(), function() {
            var $G__63419$$ = {className:"text-slate-300 font-medium", children:$amp$components$elements$budget$budget_table$format_currency$$($cljs$cst$500$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$3$$))};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63419$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63419$$);
          }()]};
        }();
        return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63400$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63400$$);
      }(), $APP.$cljs$core$truth_$$($expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $expanded_items$$.call(null, $item_id$$)) ? function() {
        var $G__63423_G__63427$jscomp$inline_3766_G__63431$jscomp$inline_3767_G__63435$jscomp$inline_3768$$ = {className:"px-6 py-4 italic", children:$description$jscomp$4$$};
        $G__63423_G__63427$jscomp$inline_3766_G__63431$jscomp$inline_3767_G__63435$jscomp$inline_3768$$ = {className:"text-base bg-slate-200/10 text-white", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63423_G__63427$jscomp$inline_3766_G__63431$jscomp$inline_3767_G__63435$jscomp$inline_3768$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63423_G__63427$jscomp$inline_3766_G__63431$jscomp$inline_3767_G__63435$jscomp$inline_3768$$)};
        $G__63423_G__63427$jscomp$inline_3766_G__63431$jscomp$inline_3767_G__63435$jscomp$inline_3768$$ = {className:"", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63423_G__63427$jscomp$inline_3766_G__63431$jscomp$inline_3767_G__63435$jscomp$inline_3768$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63423_G__63427$jscomp$inline_3766_G__63431$jscomp$inline_3767_G__63435$jscomp$inline_3768$$)};
        $G__63423_G__63427$jscomp$inline_3766_G__63431$jscomp$inline_3767_G__63435$jscomp$inline_3768$$ = {className:"border-l-8 border-slate-600", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63423_G__63427$jscomp$inline_3766_G__63431$jscomp$inline_3767_G__63435$jscomp$inline_3768$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63423_G__63427$jscomp$inline_3766_G__63431$jscomp$inline_3767_G__63435$jscomp$inline_3768$$)};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63423_G__63427$jscomp$inline_3766_G__63431$jscomp$inline_3767_G__63435$jscomp$inline_3768$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63423_G__63427$jscomp$inline_3766_G__63431$jscomp$inline_3767_G__63435$jscomp$inline_3768$$);
      }() : null]};
    }(), $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__63387_G__63439_map__63383_map__63383__$1_props__41909__auto__$jscomp$69_vec__63380$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__63387_G__63439_map__63383_map__63383__$1_props__41909__auto__$jscomp$69_vec__63380$$);
  }
  $G__63387_G__63439_map__63383_map__63383__$1_props__41909__auto__$jscomp$69_vec__63380$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($is_odd_detail_QMARK_$$ ? "bg-slate-700/50" : ""), children:function() {
      var $G__63443$$ = function() {
        return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
          var $G__63447$$ = {className:"font-mono text-sm text-slate-400 mr-4", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$elements$budget$budget_table$pad_two_digits$$($idx$jscomp$65$$ + 1)) + "."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63447$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63447$$);
        }(), function() {
          var $G__63451$$ = {className:"justify-start flex-1", children:$APP.$cljs$cst$373$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$3$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63451$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63451$$);
        }(), function() {
          var $G__63455$$ = {className:"text-slate-300 font-medium", children:$amp$components$elements$budget$budget_table$format_currency$$($cljs$cst$500$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$3$$))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63455$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63455$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63443$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63443$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__63387_G__63439_map__63383_map__63383__$1_props__41909__auto__$jscomp$69_vec__63380$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__63387_G__63439_map__63383_map__63383__$1_props__41909__auto__$jscomp$69_vec__63380$$);
};
$amp$components$elements$budget$budget_table$section_line_item$$ = function($G__63466_idx$jscomp$66_map__63464_props__41909__auto__$jscomp$70_vec__63461$$, $map__63464__$1_maybe_ref__41910__auto__$jscomp$70_tax_rate$jscomp$1$$) {
  $G__63466_idx$jscomp$66_map__63464_props__41909__auto__$jscomp$70_vec__63461$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63466_idx$jscomp$66_map__63464_props__41909__auto__$jscomp$70_vec__63461$$), $map__63464__$1_maybe_ref__41910__auto__$jscomp$70_tax_rate$jscomp$1$$], null);
  $G__63466_idx$jscomp$66_map__63464_props__41909__auto__$jscomp$70_vec__63461$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63466_idx$jscomp$66_map__63464_props__41909__auto__$jscomp$70_vec__63461$$, 0, null);
  $map__63464__$1_maybe_ref__41910__auto__$jscomp$70_tax_rate$jscomp$1$$ = $APP.$cljs$core$__destructure_map$$($G__63466_idx$jscomp$66_map__63464_props__41909__auto__$jscomp$70_vec__63461$$);
  $G__63466_idx$jscomp$66_map__63464_props__41909__auto__$jscomp$70_vec__63461$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__63464__$1_maybe_ref__41910__auto__$jscomp$70_tax_rate$jscomp$1$$, $APP.$cljs$cst$463$idx$$);
  var $item$jscomp$34$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__63464__$1_maybe_ref__41910__auto__$jscomp$70_tax_rate$jscomp$1$$, $cljs$cst$509$item$$), $set_expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__63464__$1_maybe_ref__41910__auto__$jscomp$70_tax_rate$jscomp$1$$, $cljs$cst$506$set_expanded_items$$), $expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__63464__$1_maybe_ref__41910__auto__$jscomp$70_tax_rate$jscomp$1$$, 
  $cljs$cst$507$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $section_ref$$ = $APP.$helix$hooks$use_ref$$("section-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__63466_idx$jscomp$66_map__63464_props__41909__auto__$jscomp$70_vec__63461$$)), $scroll_to_ref$$ = $amp$hooks$use_scroll_to$use_scroll_to_ref$$(), $item_id$jscomp$1$$ = "item-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__63466_idx$jscomp$66_map__63464_props__41909__auto__$jscomp$70_vec__63461$$), $sub_total$jscomp$2$$ = $amp$components$elements$budget$budget_table$calculate_section_total_no_tax$$($cljs$cst$501$details$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$));
  $map__63464__$1_maybe_ref__41910__auto__$jscomp$70_tax_rate$jscomp$1$$ = $cljs$cst$502$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$503$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$));
  var $tax_label$$ = $cljs$cst$510$label$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$503$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$)), $tax_total$jscomp$1$$ = $sub_total$jscomp$2$$ * $map__63464__$1_maybe_ref__41910__auto__$jscomp$70_tax_rate$jscomp$1$$, $has_tax_QMARK_$jscomp$1$$ = $map__63464__$1_maybe_ref__41910__auto__$jscomp$70_tax_rate$jscomp$1$$ > 0, $total$jscomp$1$$ = $sub_total$jscomp$2$$ + $tax_total$jscomp$1$$, $is_odd$$ = !$APP.$cljs$core$even_QMARK_$$($G__63466_idx$jscomp$66_map__63464_props__41909__auto__$jscomp$70_vec__63461$$);
  $G__63466_idx$jscomp$66_map__63464_props__41909__auto__$jscomp$70_vec__63461$$ = function() {
    return {ref:$section_ref$$, className:$APP.$helix$impl$props$normalize_class$$("overflow-hidden " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($is_odd$$ ? "bg-slate-900" : "bg-slate-800")), children:[function() {
      var $G__63470$$ = function() {
        return {className:"flex justify-between items-center px-4 py-4 cursor-pointer transition-colors", onClick:function() {
          function $G__63473$$($prev$jscomp$9$$) {
            return $APP.$cljs$core$truth_$$($prev$jscomp$9$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$9$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$9$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$9$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$9$$, $item_id$jscomp$1$$);
          }
          return $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__63473$$) : $set_expanded_items$jscomp$1$$.call(null, $G__63473$$);
        }, children:[function() {
          var $G__63475_G__63479$jscomp$inline_3468$$ = {className:"font-semibold text-xl", children:$APP.$cljs$cst$373$title$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$)};
          $G__63475_G__63479$jscomp$inline_3468$$ = {className:"w-6/12 ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__63475_G__63479$jscomp$inline_3468$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__63475_G__63479$jscomp$inline_3468$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63475_G__63479$jscomp$inline_3468$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63475_G__63479$jscomp$inline_3468$$);
        }(), function() {
          var $G__63483$$ = {className:"w-1/12 "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63483$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63483$$);
        }(), function() {
          var $G__63487_G__63491$jscomp$inline_3471$$ = {className:"font-medium", children:$amp$components$elements$budget$budget_table$format_currency$$($total$jscomp$1$$)};
          $G__63487_G__63491$jscomp$inline_3471$$ = {className:"w-4/12 flex justify-end items-center ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63487_G__63491$jscomp$inline_3471$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63487_G__63491$jscomp$inline_3471$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63487_G__63491$jscomp$inline_3471$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63487_G__63491$jscomp$inline_3471$$);
        }(), function() {
          var $G__63495_G__63499$jscomp$inline_3675_JSCompiler_temp_const$jscomp$inline_3676$$ = $APP.$helix$impl$props$normalize_class$$("w-5 h-5 transition-transform " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? "rotate-90" : null));
          var $G__63504$jscomp$inline_3678_JSCompiler_inline_result$jscomp$inline_3677$$ = {};
          $G__63504$jscomp$inline_3678_JSCompiler_inline_result$jscomp$inline_3677$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$icons$ChevronRightIcon$$, $G__63504$jscomp$inline_3678_JSCompiler_inline_result$jscomp$inline_3677$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$icons$ChevronRightIcon$$, $G__63504$jscomp$inline_3678_JSCompiler_inline_result$jscomp$inline_3677$$);
          $G__63495_G__63499$jscomp$inline_3675_JSCompiler_temp_const$jscomp$inline_3676$$ = {className:$G__63495_G__63499$jscomp$inline_3675_JSCompiler_temp_const$jscomp$inline_3676$$, children:$G__63504$jscomp$inline_3678_JSCompiler_inline_result$jscomp$inline_3677$$};
          $G__63495_G__63499$jscomp$inline_3675_JSCompiler_temp_const$jscomp$inline_3676$$ = {className:"w-1/12 flex justify-end items-center ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63495_G__63499$jscomp$inline_3675_JSCompiler_temp_const$jscomp$inline_3676$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63495_G__63499$jscomp$inline_3675_JSCompiler_temp_const$jscomp$inline_3676$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63495_G__63499$jscomp$inline_3675_JSCompiler_temp_const$jscomp$inline_3676$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63495_G__63499$jscomp$inline_3675_JSCompiler_temp_const$jscomp$inline_3676$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63470$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63470$$);
    }(), $APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? function() {
      var $G__63507$$ = function() {
        return {className:"border-l-8 border-slate-600", children:[function() {
          var $G__63517$$ = function() {
            return {className:"", children:[function() {
              var $G__63531_G__63543$jscomp$inline_3479$$ = {className:"px-8 py-4 italic", children:$cljs$cst$508$description$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$)};
              $G__63531_G__63543$jscomp$inline_3479$$ = {className:"text-base bg-slate-200/10 text-white", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63531_G__63543$jscomp$inline_3479$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63531_G__63543$jscomp$inline_3479$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63531_G__63543$jscomp$inline_3479$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63531_G__63543$jscomp$inline_3479$$);
            }(), function() {
              var $G__63553$$ = function() {
                return {className:"", children:$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__63568_idx__$1$$, $G__63567_detail$jscomp$4$$) {
                  $G__63567_detail$jscomp$4$$ = {idx:$G__63568_idx__$1$$, detail:$G__63567_detail$jscomp$4$$, "set-expanded-items":$set_expanded_items$jscomp$1$$, "expanded-items":$expanded_items$jscomp$1$$};
                  $G__63568_idx__$1$$ = "detail-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__63568_idx__$1$$);
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$budget_table$detail_line_item$$, $G__63567_detail$jscomp$4$$, $G__63568_idx__$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$budget_table$detail_line_item$$, $G__63567_detail$jscomp$4$$, $G__63568_idx__$1$$);
                }, $cljs$cst$501$details$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$))};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__63553$$) : $APP.$helix$core$jsx$$.call(null, "ol", $G__63553$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63517$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63517$$);
        }(), function() {
          var $G__63573$$ = function() {
            return {className:"bg-blue-800 flex flex-col", children:[$has_tax_QMARK_$jscomp$1$$ ? function() {
              var $G__63577$$ = function() {
                return {children:[function() {
                  var $G__63581$$ = function() {
                    return {className:"font-semibold text-lg px-8 py-2 flex", children:[function() {
                      var $G__63585$$ = {className:"font-mono text-sm text-slate-400", children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63585$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63585$$);
                    }(), function() {
                      var $G__63589$$ = function() {
                        return {className:"flex justify-between ml-8 w-full text-blue-100", children:[function() {
                          var $G__63593$$ = {children:"Sub total: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63593$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63593$$);
                        }(), function() {
                          var $G__63597$$ = {children:$amp$components$elements$budget$budget_table$format_currency$$($sub_total$jscomp$2$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63597$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63597$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63589$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63589$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63581$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63581$$);
                }(), function() {
                  var $G__63601$$ = function() {
                    return {className:"font-semibold text-lg px-8 py-2  flex", children:[function() {
                      var $G__63605$$ = {className:"font-mono text-sm text-slate-400", children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63605$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63605$$);
                    }(), function() {
                      var $G__63610$$ = function() {
                        return {className:"flex justify-between ml-8 w-full text-blue-100", children:[function() {
                          var $G__63614$$ = {children:$tax_label$$};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63614$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63614$$);
                        }(), function() {
                          var $G__63618$$ = {children:$amp$components$elements$budget$budget_table$format_currency$$($tax_total$jscomp$1$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63618$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63618$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63610$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63610$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63601$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63601$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63577$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63577$$);
            }() : null, function() {
              var $G__63622$$ = function() {
                return {className:"font-semibold bg-blue-900 text-xl px-8 py-4  flex", children:[function() {
                  var $G__63626$$ = {className:"font-mono text-sm text-slate-400", children:"-"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63626$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63626$$);
                }(), function() {
                  var $G__63630$$ = function() {
                    return {className:"flex justify-between ml-8 w-full text-blue-100", children:[function() {
                      var $G__63634$$ = {children:"Total: "};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63634$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63634$$);
                    }(), function() {
                      var $G__63638$$ = {children:$amp$components$elements$budget$budget_table$format_currency$$($total$jscomp$1$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63638$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63638$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63630$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63630$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63622$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63622$$);
            }(), function() {
              var $G__63642$$ = function() {
                return {className:"bg-slate-700 flex p-4 justify-center items-center cursor-pointer", onClick:function() {
                  function $G__63645_63886$$($prev$jscomp$10$$) {
                    return $APP.$cljs$core$truth_$$($prev$jscomp$10$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$10$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$10$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$10$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$10$$, $item_id$jscomp$1$$);
                  }
                  $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__63645_63886$$) : $set_expanded_items$jscomp$1$$.call(null, $G__63645_63886$$);
                  return $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$($section_ref$$) : $scroll_to_ref$$.call(null, $section_ref$$);
                }, children:["CLOSE SECTION", function() {
                  var $G__63648_JSCompiler_temp_const$jscomp$inline_3121$$ = $APP.$helix$impl$props$normalize_class$$("w-5 h-5 transition-transform ml-4 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? "-rotate-90" : null));
                  var $G__63652$jscomp$inline_3123_JSCompiler_inline_result$jscomp$inline_3122$$ = {};
                  $G__63652$jscomp$inline_3123_JSCompiler_inline_result$jscomp$inline_3122$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$icons$ChevronRightIcon$$, $G__63652$jscomp$inline_3123_JSCompiler_inline_result$jscomp$inline_3122$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$icons$ChevronRightIcon$$, $G__63652$jscomp$inline_3123_JSCompiler_inline_result$jscomp$inline_3122$$);
                  $G__63648_JSCompiler_temp_const$jscomp$inline_3121$$ = {className:$G__63648_JSCompiler_temp_const$jscomp$inline_3121$$, children:$G__63652$jscomp$inline_3123_JSCompiler_inline_result$jscomp$inline_3122$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63648_JSCompiler_temp_const$jscomp$inline_3121$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63648_JSCompiler_temp_const$jscomp$inline_3121$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63642$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63642$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63573$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63573$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63507$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63507$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__63466_idx$jscomp$66_map__63464_props__41909__auto__$jscomp$70_vec__63461$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__63466_idx$jscomp$66_map__63464_props__41909__auto__$jscomp$70_vec__63461$$);
};
$amp$components$elements$budget$budget_table$budget_table$$ = function($G__63690_map__63668_map__63668__$1_props__41909__auto__$jscomp$71_vec__63664_vec__63681$$, $maybe_ref__41910__auto__$jscomp$71$$) {
  $G__63690_map__63668_map__63668__$1_props__41909__auto__$jscomp$71_vec__63664_vec__63681$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63690_map__63668_map__63668__$1_props__41909__auto__$jscomp$71_vec__63664_vec__63681$$), $maybe_ref__41910__auto__$jscomp$71$$], null);
  $G__63690_map__63668_map__63668__$1_props__41909__auto__$jscomp$71_vec__63664_vec__63681$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63690_map__63668_map__63668__$1_props__41909__auto__$jscomp$71_vec__63664_vec__63681$$, 0, null);
  $G__63690_map__63668_map__63668__$1_props__41909__auto__$jscomp$71_vec__63664_vec__63681$$ = $APP.$cljs$core$__destructure_map$$($G__63690_map__63668_map__63668__$1_props__41909__auto__$jscomp$71_vec__63664_vec__63681$$);
  var $cost_data$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63690_map__63668_map__63668__$1_props__41909__auto__$jscomp$71_vec__63664_vec__63681$$, $cljs$cst$504$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__63690_map__63668_map__63668__$1_props__41909__auto__$jscomp$71_vec__63664_vec__63681$$ = $APP.$helix$hooks$use_state$$($APP.$cljs$core$PersistentHashSet$EMPTY$$);
  var $expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63690_map__63668_map__63668__$1_props__41909__auto__$jscomp$71_vec__63664_vec__63681$$, 0, null), $set_expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63690_map__63668_map__63668__$1_props__41909__auto__$jscomp$71_vec__63664_vec__63681$$, 1, null);
  $G__63690_map__63668_map__63668__$1_props__41909__auto__$jscomp$71_vec__63664_vec__63681$$ = function() {
    return {className:"w-full text-white", children:[$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__63704_idx$jscomp$67$$, $G__63703_item$jscomp$35$$) {
      $G__63703_item$jscomp$35$$ = {idx:$G__63704_idx$jscomp$67$$, item:$G__63703_item$jscomp$35$$, "set-expanded-items":$set_expanded_items$jscomp$2$$, "expanded-items":$expanded_items$jscomp$2$$};
      $G__63704_idx$jscomp$67$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__63704_idx$jscomp$67$$) + "-section";
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$budget_table$section_line_item$$, $G__63703_item$jscomp$35$$, $G__63704_idx$jscomp$67$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$budget_table$section_line_item$$, $G__63703_item$jscomp$35$$, $G__63704_idx$jscomp$67$$);
    }, $cost_data$jscomp$2$$), function() {
      var $G__63715$$ = {"cost-data":$cost_data$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$budget_table$total_section$$, $G__63715$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$budget_table$total_section$$, $G__63715$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__63690_map__63668_map__63668__$1_props__41909__auto__$jscomp$71_vec__63664_vec__63681$$) : $APP.$helix$core$jsxs$$.call(null, "ol", $G__63690_map__63668_map__63668__$1_props__41909__auto__$jscomp$71_vec__63664_vec__63681$$);
};
$amp$components$elements$budget$cost_breakdown$preview$$ = function($G__64181_map__64175_props__41909__auto__$jscomp$72_vec__64172$$, $maybe_ref__41910__auto__$jscomp$72$$) {
  $G__64181_map__64175_props__41909__auto__$jscomp$72_vec__64172$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64181_map__64175_props__41909__auto__$jscomp$72_vec__64172$$), $maybe_ref__41910__auto__$jscomp$72$$], null);
  $G__64181_map__64175_props__41909__auto__$jscomp$72_vec__64172$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64181_map__64175_props__41909__auto__$jscomp$72_vec__64172$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__64181_map__64175_props__41909__auto__$jscomp$72_vec__64172$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__64181_map__64175_props__41909__auto__$jscomp$72_vec__64172$$ = function() {
    return {className:"text-xl text-slate-100 p-4", children:[function() {
      var $G__64188$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64188$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__64188$$);
    }(), function() {
      var $G__64198$$ = {className:"text-slate-300", children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64198$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64198$$);
    }(), function() {
      var $G__64204$$ = {className:"text-slate-300", children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64204$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64204$$);
    }(), function() {
      var $G__64210$$ = {className:"font-bold text-white", children:"$1.6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64210$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64210$$);
    }(), function() {
      var $G__64221$$ = {className:"text-slate-300", children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64221$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64221$$);
    }(), function() {
      var $G__64230$$ = {className:"font-semibold text-pink-400", children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64230$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64230$$);
    }(), function() {
      var $G__64238$$ = {className:"text-slate-300", children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64238$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64238$$);
    }(), function() {
      var $G__64248$$ = {className:"font-semibold text-pink-400", children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64248$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64248$$);
    }(), function() {
      var $G__64256$$ = {className:"text-slate-300", children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64256$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64256$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64181_map__64175_props__41909__auto__$jscomp$72_vec__64172$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64181_map__64175_props__41909__auto__$jscomp$72_vec__64172$$);
};
$amp$components$elements$budget$cost_breakdown$details$$ = function($G__64369_map__64364_props__41909__auto__$jscomp$73_vec__64361$$, $maybe_ref__41910__auto__$jscomp$73$$) {
  $G__64369_map__64364_props__41909__auto__$jscomp$73_vec__64361$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64369_map__64364_props__41909__auto__$jscomp$73_vec__64361$$), $maybe_ref__41910__auto__$jscomp$73$$], null);
  $G__64369_map__64364_props__41909__auto__$jscomp$73_vec__64361$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64369_map__64364_props__41909__auto__$jscomp$73_vec__64361$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__64369_map__64364_props__41909__auto__$jscomp$73_vec__64361$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__64369_map__64364_props__41909__auto__$jscomp$73_vec__64361$$ = function() {
    return {className:"text-xl text-slate-100 p-4", children:[function() {
      var $G__64373$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64373$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__64373$$);
    }(), function() {
      var $G__64377$$ = {className:"text-slate-300", children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64377$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64377$$);
    }(), function() {
      var $G__64381$$ = {className:"text-slate-300", children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64381$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64381$$);
    }(), function() {
      var $G__64385$$ = {className:"font-bold text-white", children:"$1.6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64385$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64385$$);
    }(), function() {
      var $G__64389$$ = {className:"text-slate-300", children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64389$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64389$$);
    }(), function() {
      var $G__64393$$ = {className:"font-semibold text-pink-400", children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64393$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64393$$);
    }(), function() {
      var $G__64397$$ = {className:"text-slate-300", children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64397$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64397$$);
    }(), function() {
      var $G__64401$$ = {className:"font-semibold text-pink-400", children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64401$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64401$$);
    }(), function() {
      var $G__64405$$ = {className:"text-slate-300", children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64405$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64405$$);
    }(), function() {
      var $G__64409$$ = {className:"block my-6", children:["As Armenia does not maintain a permanent national pavilion in Venice, a venue must be secured through rental—", "as is customary for many smaller and non-permanent participating nations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64409$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__64409$$);
    }(), function() {
      var $G__64413$$ = {className:"text-slate-300", children:"The selected site is located outside the Biennale’s primary zones, enabling a significantly lower base rent—approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64413$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64413$$);
    }(), function() {
      var $G__64417$$ = {className:"font-bold text-white", children:"$195,000"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64417$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64417$$);
    }(), function() {
      var $G__64421$$ = {className:"text-slate-300", children:"—while remaining fully accredited and visible within the official Biennale structure. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64421$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64421$$);
    }(), function() {
      var $G__64425$$ = {className:"text-slate-300", children:"By contrast, venues within the Giardini or Arsenale—when available—typically begin at "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64425$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64425$$);
    }(), function() {
      var $G__64429$$ = {className:"font-bold text-white", children:"$450,000"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64429$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64429$$);
    }(), function() {
      var $G__64433$$ = {className:"text-slate-300", children:" in base rent, before construction, staffing, utilities, logistics, and operating overhead. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64433$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64433$$);
    }(), function() {
      var $G__64437$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__64441$$ = {className:"mt-6", children:"Crucially, the nature of "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64441$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64441$$);
        }(), function() {
          var $G__64446$$ = {className:"font-semibold text-pink-400", children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64446$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64446$$);
        }(), function() {
          var $G__64451$$ = {className:"text-slate-300", children:" makes this venue choice not only strategic but essential. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64451$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64451$$);
        }(), function() {
          var $G__64455$$ = {className:"text-slate-300", children:"The work is conceived to be produced, refined, and evolved "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64455$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64455$$);
        }(), function() {
          var $G__64459$$ = {className:"font-semibold italic text-slate-100", children:"on site"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64459$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64459$$);
        }(), function() {
          var $G__64463$$ = {className:"text-slate-300", children:", allowing the Pavilion to function simultaneously as exhibition space and working studio. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64463$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64463$$);
        }(), function() {
          var $G__64467$$ = {className:"text-slate-300", children:["This approach meets extremely tight production and installation deadlines while maintaining full artistic and technical control—", "conditions that would be far more difficult, costly, or even impossible under a traditional off-site fabrication and transport model. "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64467$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__64467$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64437$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64437$$);
    }(), function() {
      var $G__64471$$ = {className:"block my-6", children:"Rather than directing the majority of resources toward a single, fixed monumental installation, the artist and team have deliberately taken another route. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64471$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64471$$);
    }(), function() {
      var $G__64475$$ = {className:"text-slate-300", children:"By producing the work on site, the Pavilion avoids the need for a pre-fabricated "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64475$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64475$$);
    }(), function() {
      var $G__64479$$ = {className:"font-semibold italic text-slate-100", children:"“grand object”"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64479$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64479$$);
    }(), function() {
      var $G__64483$$ = {className:"text-slate-300", children:" altogether. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64483$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64483$$);
    }(), function() {
      var $G__64487$$ = {className:"text-slate-300", children:"This decision reduces fabrication, crating, international shipping, and risk-related costs, while aligning more precisely with the broader conceptual goals: "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64487$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64487$$);
    }(), function() {
      var $G__64491$$ = {className:"font-semibold text-pink-400", children:"process over spectacle, presence over monumentality,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64491$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64491$$);
    }(), function() {
      var $G__64495$$ = {className:"text-slate-300", children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64495$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64495$$);
    }(), function() {
      var $G__64499$$ = {className:"font-semibold text-pink-400", children:"sustained making over static display"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64499$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64499$$);
    }(), function() {
      var $G__64503$$ = {className:"text-slate-300", children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64503$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64503$$);
    }(), function() {
      var $G__64508$$ = function() {
        return {className:"my-6", children:[function() {
          var $G__64515$$ = {className:"", children:"In this sense, cost efficiency and artistic rigor are not in opposition but mutually reinforcing. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64515$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64515$$);
        }(), function() {
          var $G__64520$$ = {className:"text-slate-300", children:"The Pavilion’s structure distributes resources across time, labor, materials, and public engagement—rather than concentrating them into a single object whose expense would be driven largely by transport and scale rather than meaning. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64520$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64520$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64508$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64508$$);
    }(), function() {
      var $G__64524$$ = function() {
        return {className:"block my-6", children:[function() {
          var $G__64528$$ = {className:"", children:"Despite these efficiencies, the overall cost of operating in Venice during the Biennale remains high. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64528$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64528$$);
        }(), function() {
          var $G__64532$$ = {className:"text-slate-300", children:"Venice’s unique geography, limited infrastructure, and extraordinary demand elevate costs across all categories—logistics, storage, labor, accommodations, and technical services. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64532$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64532$$);
        }(), function() {
          var $G__64536$$ = {className:"text-slate-300", children:"These conditions are shared by all national pavilions and reflect the Biennale’s position as the most visible international platform in contemporary art. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64536$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64536$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64524$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64524$$);
    }(), function() {
      var $G__64540$$ = {className:"mt-6", children:"Unlike projects that culminate at opening, this Pavilion is conceived as a"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64540$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64540$$);
    }(), function() {
      var $G__64544$$ = {className:"font-semibold italic text-slate-100", children:" seven-month operational commitment"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64544$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64544$$);
    }(), function() {
      var $G__64548$$ = {className:"text-slate-300", children:": a living environment that functions simultaneously as exhibition space, working studio, public forum, and diplomatic platform—requiring sustained staffing, materials, logistics, and institutional oversight throughout the duration of the Biennale. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64548$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64548$$);
    }(), function() {
      var $G__64552$$ = {className:"block mt-6", children:"Significant investment secures venue readiness and regulatory compliance, supports curatorial and administrative leadership, funds museum-scale fabrication and specialized craft, and addresses Venice-specific transport, storage, installation, and reverse logistics. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64552$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64552$$);
    }(), function() {
      var $G__64556$$ = function() {
        return {className:"block mt-6", children:[function() {
          var $G__64560$$ = {className:"font-semibold text-pink-400", children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64560$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64560$$);
        }(), function() {
          var $G__64564$$ = {className:"text-slate-300", children:" is budgeted as an ongoing on-site operation, ensuring continuous execution, maintenance, and evolution of the work across the exhibition period—distinguishing the Pavilion from static presentations. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64564$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64564$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64556$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__64556$$);
    }(), function() {
      var $G__64569$$ = {className:"block mt-6", children:"Public visibility and long-term legacy are strengthened through opening week programs, marketing and public relations, publication, and comprehensive film and photographic documentation—ensuring that the Pavilion’s impact extends into international media, scholarship, and institutional archives. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64569$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64569$$);
    }(), function() {
      var $G__64576$$ = {className:"block italic mt-6 font-normal text-lg text-slate-100", children:"A responsible contingency is included to accommodate the realities of an extended international project operating across jurisdictions, timelines, and currencies—ensuring stability, accountability, and the successful delivery of Armenia’s national presentation on the world stage."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64576$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64576$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64369_map__64364_props__41909__auto__$jscomp$73_vec__64361$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64369_map__64364_props__41909__auto__$jscomp$73_vec__64361$$);
};
$amp$components$elements$budget$cost_breakdown$footer$$ = function($G__64588_G__64592$jscomp$inline_3482_map__64586_props__41909__auto__$jscomp$74_vec__64583$$, $maybe_ref__41910__auto__$jscomp$74$$) {
  $G__64588_G__64592$jscomp$inline_3482_map__64586_props__41909__auto__$jscomp$74_vec__64583$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64588_G__64592$jscomp$inline_3482_map__64586_props__41909__auto__$jscomp$74_vec__64583$$), $maybe_ref__41910__auto__$jscomp$74$$], null);
  $G__64588_G__64592$jscomp$inline_3482_map__64586_props__41909__auto__$jscomp$74_vec__64583$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64588_G__64592$jscomp$inline_3482_map__64586_props__41909__auto__$jscomp$74_vec__64583$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__64588_G__64592$jscomp$inline_3482_map__64586_props__41909__auto__$jscomp$74_vec__64583$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__64588_G__64592$jscomp$inline_3482_map__64586_props__41909__auto__$jscomp$74_vec__64583$$ = {"cost-data":$amp$components$elements$budget$cost_breakdown$cost_data$$};
  $G__64588_G__64592$jscomp$inline_3482_map__64586_props__41909__auto__$jscomp$74_vec__64583$$ = {className:"mt-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$budget_table$budget_table$$, $G__64588_G__64592$jscomp$inline_3482_map__64586_props__41909__auto__$jscomp$74_vec__64583$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$budget_table$budget_table$$, $G__64588_G__64592$jscomp$inline_3482_map__64586_props__41909__auto__$jscomp$74_vec__64583$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64588_G__64592$jscomp$inline_3482_map__64586_props__41909__auto__$jscomp$74_vec__64583$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64588_G__64592$jscomp$inline_3482_map__64586_props__41909__auto__$jscomp$74_vec__64583$$);
};
$amp$components$elements$budget$cost_breakdown$cost_breakdown$$ = function($G__64608_id$jscomp$70_map__64606_props__41909__auto__$jscomp$75_vec__64603$$, $G__64612$jscomp$inline_3485_JSCompiler_inline_result$jscomp$inline_3484_maybe_ref__41910__auto__$jscomp$75_subtitle$jscomp$2$$) {
  $G__64608_id$jscomp$70_map__64606_props__41909__auto__$jscomp$75_vec__64603$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64608_id$jscomp$70_map__64606_props__41909__auto__$jscomp$75_vec__64603$$), $G__64612$jscomp$inline_3485_JSCompiler_inline_result$jscomp$inline_3484_maybe_ref__41910__auto__$jscomp$75_subtitle$jscomp$2$$], null);
  $G__64608_id$jscomp$70_map__64606_props__41909__auto__$jscomp$75_vec__64603$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64608_id$jscomp$70_map__64606_props__41909__auto__$jscomp$75_vec__64603$$, 0, null);
  var $map__64606__$1_title$jscomp$22$$ = $APP.$cljs$core$__destructure_map$$($G__64608_id$jscomp$70_map__64606_props__41909__auto__$jscomp$75_vec__64603$$);
  $G__64608_id$jscomp$70_map__64606_props__41909__auto__$jscomp$75_vec__64603$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__64606__$1_title$jscomp$22$$, $APP.$cljs$cst$191$id$$);
  $G__64612$jscomp$inline_3485_JSCompiler_inline_result$jscomp$inline_3484_maybe_ref__41910__auto__$jscomp$75_subtitle$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__64606__$1_title$jscomp$22$$, $cljs$cst$499$subtitle$$);
  $map__64606__$1_title$jscomp$22$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__64606__$1_title$jscomp$22$$, $APP.$cljs$cst$373$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__64612$jscomp$inline_3485_JSCompiler_inline_result$jscomp$inline_3484_maybe_ref__41910__auto__$jscomp$75_subtitle$jscomp$2$$ = {"section-hint":$G__64612$jscomp$inline_3485_JSCompiler_inline_result$jscomp$inline_3484_maybe_ref__41910__auto__$jscomp$75_subtitle$jscomp$2$$, title:$map__64606__$1_title$jscomp$22$$, "expand-button-label":"Read more", "preview-text":$amp$components$elements$budget$cost_breakdown$preview$$, "full-text":$amp$components$elements$budget$cost_breakdown$details$$, "footer-text":$amp$components$elements$budget$cost_breakdown$footer$$};
  $G__64612$jscomp$inline_3485_JSCompiler_inline_result$jscomp$inline_3484_maybe_ref__41910__auto__$jscomp$75_subtitle$jscomp$2$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__64612$jscomp$inline_3485_JSCompiler_inline_result$jscomp$inline_3484_maybe_ref__41910__auto__$jscomp$75_subtitle$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$expandable_text_area$expandable_text_area_2$$, 
  $G__64612$jscomp$inline_3485_JSCompiler_inline_result$jscomp$inline_3484_maybe_ref__41910__auto__$jscomp$75_subtitle$jscomp$2$$);
  $G__64608_id$jscomp$70_map__64606_props__41909__auto__$jscomp$75_vec__64603$$ = {id:$G__64608_id$jscomp$70_map__64606_props__41909__auto__$jscomp$75_vec__64603$$, children:$G__64612$jscomp$inline_3485_JSCompiler_inline_result$jscomp$inline_3484_maybe_ref__41910__auto__$jscomp$75_subtitle$jscomp$2$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64608_id$jscomp$70_map__64606_props__41909__auto__$jscomp$75_vec__64603$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64608_id$jscomp$70_map__64606_props__41909__auto__$jscomp$75_vec__64603$$);
};
$amp$components$elements$budget$location_section$preview$$ = function($G__63515_map__63511_props__41909__auto__$jscomp$76_vec__63508$$, $maybe_ref__41910__auto__$jscomp$76$$) {
  $G__63515_map__63511_props__41909__auto__$jscomp$76_vec__63508$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63515_map__63511_props__41909__auto__$jscomp$76_vec__63508$$), $maybe_ref__41910__auto__$jscomp$76$$], null);
  $G__63515_map__63511_props__41909__auto__$jscomp$76_vec__63508$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63515_map__63511_props__41909__auto__$jscomp$76_vec__63508$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__63515_map__63511_props__41909__auto__$jscomp$76_vec__63508$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__63515_map__63511_props__41909__auto__$jscomp$76_vec__63508$$ = function() {
    return {className:"p-4 mb-12", children:function() {
      var $G__63521$$ = function() {
        return {className:"", children:["The Armenia Pavilion 2026 unfolds across ", function() {
          var $G__63527$$ = {className:"font-semibold", children:"three contiguous sites"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63527$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63527$$);
        }(), " within the historic Arsenale of Venice—", function() {
          var $G__63533$$ = {className:"font-semibold", children:"an interior studio"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63533$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63533$$);
        }(), ", ", function() {
          var $G__63539$$ = {className:"font-semibold", children:"an open-air church courtyard"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63539$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63539$$);
        }(), ", and ", function() {
          var $G__63545$$ = {className:"font-semibold", children:"a canal-side outpost"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63545$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63545$$);
        }(), ". ", "Together, these spaces form a single spatial constellation: ", function() {
          var $G__63551$$ = {className:"", children:"a place of work"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63551$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63551$$);
        }(), ", ", function() {
          var $G__63559$$ = {className:"", children:"a place of weather and ruin"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63559$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63559$$);
        }(), ", and ", function() {
          var $G__63563$$ = {className:"", children:"a public-facing threshold"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63563$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63563$$);
        }(), "—each distinct, yet inseparable."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63521$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63521$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63515_map__63511_props__41909__auto__$jscomp$76_vec__63508$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63515_map__63511_props__41909__auto__$jscomp$76_vec__63508$$);
};
$amp$components$elements$budget$location_section$full_details$$ = function($G__63845_map__63836_map__63836__$1_props__41909__auto__$jscomp$77_vec__63833$$, $maybe_ref__41910__auto__$jscomp$77$$) {
  $G__63845_map__63836_map__63836__$1_props__41909__auto__$jscomp$77_vec__63833$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63845_map__63836_map__63836__$1_props__41909__auto__$jscomp$77_vec__63833$$), $maybe_ref__41910__auto__$jscomp$77$$], null);
  $G__63845_map__63836_map__63836__$1_props__41909__auto__$jscomp$77_vec__63833$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63845_map__63836_map__63836__$1_props__41909__auto__$jscomp$77_vec__63833$$, 0, null);
  $G__63845_map__63836_map__63836__$1_props__41909__auto__$jscomp$77_vec__63833$$ = $APP.$cljs$core$__destructure_map$$($G__63845_map__63836_map__63836__$1_props__41909__auto__$jscomp$77_vec__63833$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63845_map__63836_map__63836__$1_props__41909__auto__$jscomp$77_vec__63833$$, $APP.$cljs$cst$191$id$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63845_map__63836_map__63836__$1_props__41909__auto__$jscomp$77_vec__63833$$, $cljs$cst$499$subtitle$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63845_map__63836_map__63836__$1_props__41909__auto__$jscomp$77_vec__63833$$, $APP.$cljs$cst$373$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__63845_map__63836_map__63836__$1_props__41909__auto__$jscomp$77_vec__63833$$ = function() {
    return {className:"space-y-8", children:function() {
      var $G__63863$$ = function() {
        return {className:"text-slate-100  text-xl", children:[function() {
          var $G__63877$$ = function() {
            return {className:"p-4 mb-12", children:function() {
              var $G__63890$$ = function() {
                return {className:"", children:["The Armenia Pavilion 2026 unfolds across ", function() {
                  var $G__63906$$ = {className:"font-semibold", children:"three contiguous sites"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63906$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63906$$);
                }(), " within the historic Arsenale of Venice—", function() {
                  var $G__63917$$ = {className:"font-semibold", children:"an interior studio"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63917$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63917$$);
                }(), ", ", function() {
                  var $G__63922$$ = {className:"font-semibold", children:"an open-air church courtyard"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63922$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63922$$);
                }(), ", and ", function() {
                  var $G__63931$$ = {className:"font-semibold", children:"a canal-side outpost"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63931$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63931$$);
                }(), ". ", "Together, these spaces form a single spatial constellation: ", function() {
                  var $G__63941$$ = {className:"", children:"a place of work"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63941$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63941$$);
                }(), ", ", function() {
                  var $G__63947$$ = {className:"", children:"a place of weather and ruin"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63947$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63947$$);
                }(), ", and ", function() {
                  var $G__63952$$ = {className:"", children:"a public-facing threshold"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63952$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63952$$);
                }(), "—each distinct, yet inseparable."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63890$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63890$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63877$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63877$$);
        }(), function() {
          var $G__63956$$ = function() {
            return {className:"text-xl ", children:[function() {
              var $G__63960$$ = function() {
                return {className:"p-4", children:[function() {
                  var $G__63964$$ = {className:"text-3xl pb-4 font-bold uppercase", children:"#1 - TESA 41 (MAIN STUDIO)"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63964$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63964$$);
                }(), function() {
                  var $G__63968$$ = function() {
                    return {className:"space-y-6", children:[function() {
                      var $G__63972$$ = function() {
                        return {children:[function() {
                          var $G__63976$$ = {className:"font-semibold text-slate-100", children:"Tesa 41"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63976$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63976$$);
                        }(), " is the primary studio and interior exhibition space for the Armenia Pavilion 2026—", function() {
                          var $G__63980$$ = {className:"font-semibold", children:"5,000 square feet"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63980$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63980$$);
                        }(), " (", function() {
                          var $G__63984$$ = {className:"font-semibold", children:"~464 square meters"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63984$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63984$$);
                        }(), ") of expansive industrial volume that functions as the ", function() {
                          var $G__63988$$ = {className:"italic", children:"operational and conceptual heart"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63988$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63988$$);
                        }(), " of the project."]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63972$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63972$$);
                    }(), function() {
                      var $G__63992$$ = function() {
                        return {children:["Defined by scale, clarity, and architectural restraint, it is built for sustained ", function() {
                          var $G__63996$$ = {className:"font-medium", children:"fabrication"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63996$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63996$$);
                        }(), ", ", function() {
                          var $G__64000$$ = {className:"font-medium", children:"assembly"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64000$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64000$$);
                        }(), ", and ", function() {
                          var $G__64004$$ = {className:"font-medium", children:"reconfiguration"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64004$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64004$$);
                        }(), " across the full duration of the Biennale."]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63992$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63992$$);
                    }(), function() {
                      var $G__64008$$ = function() {
                        return {children:["Here, the Pavilion operates as a ", function() {
                          var $G__64012$$ = {className:"font-semibold", children:"working studio"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64012$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64012$$);
                        }(), " rather than a static exhibition: a place of continuous ", function() {
                          var $G__64016$$ = {className:"font-medium", children:"making"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64016$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64016$$);
                        }(), ", ", function() {
                          var $G__64020$$ = {className:"font-medium", children:"stacking"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64020$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64020$$);
                        }(), ", ", function() {
                          var $G__64024$$ = {className:"font-medium", children:"dismantling"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64024$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64024$$);
                        }(), ", and ", function() {
                          var $G__64028$$ = {className:"font-medium", children:"rebuilding"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64028$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64028$$);
                        }(), ". The interior volume allows the work to expand ", function() {
                          var $G__64032$$ = {className:"font-medium", children:"horizontally"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64032$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64032$$);
                        }(), " and ", function() {
                          var $G__64036$$ = {className:"font-medium", children:"vertically"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64036$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64036$$);
                        }(), ", accommodating both monumental arrangements and intimate moments of material attention."]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64008$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__64008$$);
                    }(), function() {
                      var $G__64040$$ = function() {
                        return {className:"pt-2", children:[function() {
                          var $G__64044$$ = {className:"font-semibold text-slate-100", children:"Tesa 41"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64044$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64044$$);
                        }(), " anchors the Pavilion physically and philosophically—establishing ", function() {
                          var $G__64048$$ = {className:"italic", children:"the studio as the artwork itself"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64048$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64048$$);
                        }(), "."]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64040$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__64040$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63968$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63968$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63960$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63960$$);
            }(), function() {
              var $G__64052$$ = function() {
                return {className:"w-full h-full flex flex-col gap-4 mt-12", children:function() {
                  var $outer_ctx$jscomp$12$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $G__64059_vec__64055$$ = $amp$hooks$use_intersection_observer$use_intersection_observer$$($outer_ctx$jscomp$12$$);
                  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64059_vec__64055$$, 0, null);
                  var $is_visible_QMARK_$jscomp$9$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64059_vec__64055$$, 1, null);
                  $G__64059_vec__64055$$ = function() {
                    return {className:"flex flex-col gap-4", ref:$outer_ctx$jscomp$12$$, children:[function() {
                      var $G__64063_G__64067$jscomp$inline_3488$$ = {"playback-id":"KaA1Jf2AusJZ966KPeZrdwJ5S53kboLO4E4fGLrgTLk", "aspect-ratio":1.77, "should-play?":$is_visible_QMARK_$jscomp$9$$, "allow-audio?":!1};
                      $G__64063_G__64067$jscomp$inline_3488$$ = {className:"w-full aspect-[16/9]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$location_section$lazy_video$$, $G__64063_G__64067$jscomp$inline_3488$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$location_section$lazy_video$$, $G__64063_G__64067$jscomp$inline_3488$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64063_G__64067$jscomp$inline_3488$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64063_G__64067$jscomp$inline_3488$$);
                    }(), function() {
                      var $G__64071_G__64075$jscomp$inline_3491$$ = {"img-src":"https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2011.12.05.tif", "aspect-ratio":1.34, "active?":!0};
                      $G__64071_G__64075$jscomp$inline_3491$$ = {className:"w-full aspect-[1.34]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__64071_G__64075$jscomp$inline_3491$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__64071_G__64075$jscomp$inline_3491$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64071_G__64075$jscomp$inline_3491$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64071_G__64075$jscomp$inline_3491$$);
                    }(), function() {
                      var $G__64079_G__64083$jscomp$inline_3494$$ = {"img-src":"https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.08.tif", "aspect-ratio":1.34, "active?":!0};
                      $G__64079_G__64083$jscomp$inline_3494$$ = {className:"w-full aspect-[1.34]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__64079_G__64083$jscomp$inline_3494$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__64079_G__64083$jscomp$inline_3494$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64079_G__64083$jscomp$inline_3494$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64079_G__64083$jscomp$inline_3494$$);
                    }(), function() {
                      var $G__64087_G__64091$jscomp$inline_3497$$ = {"img-src":"https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.18.tif", "aspect-ratio":1.34, "active?":!0};
                      $G__64087_G__64091$jscomp$inline_3497$$ = {className:"w-full aspect-[1.34]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__64087_G__64091$jscomp$inline_3497$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__64087_G__64091$jscomp$inline_3497$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64087_G__64091$jscomp$inline_3497$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64087_G__64091$jscomp$inline_3497$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64059_vec__64055$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64059_vec__64055$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64052$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64052$$);
            }(), function() {
              var $G__64095$$ = function() {
                return {className:"mt-12", children:[function() {
                  var $G__64099$$ = function() {
                    return {className:"p-4", children:[function() {
                      var $G__64103$$ = {className:"pb-4 text-3xl font-helvetica font-bold uppercase", children:"#2 - GIARDINO 25 (CHURCH COURTYARD)"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64103$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64103$$);
                    }(), function() {
                      var $G__64107$$ = function() {
                        return {className:"space-y-6", children:[function() {
                          var $G__64111$$ = function() {
                            return {children:[function() {
                              var $G__64115$$ = {className:"font-semibold text-slate-100", children:"Giardino 25"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64115$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64115$$);
                            }(), " is an adjacent open-air courtyard formed from the remains of a former church. ", "Only the original perimeter walls remain; the roof has long since collapsed—", "leaving the space exposed to ", function() {
                              var $G__64119$$ = {className:"", children:"light"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64119$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64119$$);
                            }(), ", ", function() {
                              var $G__64123$$ = {className:"", children:"weather"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64123$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64123$$);
                            }(), ", and ", function() {
                              var $G__64127$$ = {className:"", children:"time"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64127$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64127$$);
                            }(), "."]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64111$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__64111$$);
                        }(), function() {
                          var $G__64131_G__64135$jscomp$inline_3500$$ = {className:"italic", children:"quiet intensity"};
                          $G__64131_G__64135$jscomp$inline_3500$$ = {children:["What survives is a richly textured architectural shell marked by age, erosion, and history. ", "The courtyard’s stone walls, uneven surfaces, and traces of former sacred use create an atmosphere of ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64131_G__64135$jscomp$inline_3500$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64131_G__64135$jscomp$inline_3500$$), 
                          " and material depth."]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64131_G__64135$jscomp$inline_3500$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__64131_G__64135$jscomp$inline_3500$$);
                        }(), function() {
                          var $G__64139$$ = function() {
                            return {children:["In contrast to the controlled interior of Tesa 41, Giardino 25 functions as a ", function() {
                              var $G__64143$$ = {className:"font-semibold", children:"threshold space"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64143$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64143$$);
                            }(), "—neither fully inside nor fully outside—where the work enters into direct dialogue with ", function() {
                              var $G__64148$$ = {className:"", children:"ruin"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64148$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64148$$);
                            }(), ", ", function() {
                              var $G__64152$$ = {className:"", children:"open sky"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64152$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64152$$);
                            }(), ", and ", function() {
                              var $G__64156$$ = {className:"", children:"changing light"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64156$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64156$$);
                            }(), "."]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64139$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__64139$$);
                        }(), function() {
                          var $G__64160$$ = function() {
                            return {className:"pt-2", children:[function() {
                              var $G__64164$$ = {className:"font-semibold text-slate-100", children:"Giardino 25"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64164$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64164$$);
                            }(), " extends the Pavilion outward—allowing the project to breathe within an environment shaped as much by ", function() {
                              var $G__64169$$ = {className:"italic", children:"absence"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64169$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64169$$);
                            }(), " as by structure."]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64160$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__64160$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64107$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64107$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64099$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64099$$);
                }(), function() {
                  $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
                  var $G__64177_G__64190$jscomp$inline_3746_outer_ctx$jscomp$inline_3744$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
                  var $G__64196$jscomp$inline_3748_JSCompiler_inline_result$jscomp$inline_3747_vec__64182$jscomp$inline_3745$$ = $amp$hooks$use_intersection_observer$use_intersection_observer$$($G__64177_G__64190$jscomp$inline_3746_outer_ctx$jscomp$inline_3744$$);
                  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64196$jscomp$inline_3748_JSCompiler_inline_result$jscomp$inline_3747_vec__64182$jscomp$inline_3745$$, 0, null);
                  $G__64196$jscomp$inline_3748_JSCompiler_inline_result$jscomp$inline_3747_vec__64182$jscomp$inline_3745$$ = {"playback-id":"00r6626C33zSItHxx4iRh1oJPgP1tsH01qR00bNkN7i4go", "should-play?":$APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64196$jscomp$inline_3748_JSCompiler_inline_result$jscomp$inline_3747_vec__64182$jscomp$inline_3745$$, 1, null), "allow-audio?":!1};
                  $G__64196$jscomp$inline_3748_JSCompiler_inline_result$jscomp$inline_3747_vec__64182$jscomp$inline_3745$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$location_section$lazy_video$$, $G__64196$jscomp$inline_3748_JSCompiler_inline_result$jscomp$inline_3747_vec__64182$jscomp$inline_3745$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$location_section$lazy_video$$, 
                  $G__64196$jscomp$inline_3748_JSCompiler_inline_result$jscomp$inline_3747_vec__64182$jscomp$inline_3745$$);
                  $G__64177_G__64190$jscomp$inline_3746_outer_ctx$jscomp$inline_3744$$ = {className:"", ref:$G__64177_G__64190$jscomp$inline_3746_outer_ctx$jscomp$inline_3744$$, children:$G__64196$jscomp$inline_3748_JSCompiler_inline_result$jscomp$inline_3747_vec__64182$jscomp$inline_3745$$};
                  $G__64177_G__64190$jscomp$inline_3746_outer_ctx$jscomp$inline_3744$$ = {className:"w-full h-full flex flex-col gap-4 mt-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64177_G__64190$jscomp$inline_3746_outer_ctx$jscomp$inline_3744$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64177_G__64190$jscomp$inline_3746_outer_ctx$jscomp$inline_3744$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64177_G__64190$jscomp$inline_3746_outer_ctx$jscomp$inline_3744$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64177_G__64190$jscomp$inline_3746_outer_ctx$jscomp$inline_3744$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64095$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64095$$);
            }(), function() {
              var $G__64208$$ = function() {
                return {className:"mt-12", children:[function() {
                  var $G__64217$$ = function() {
                    return {className:"p-4", children:[function() {
                      var $G__64225$$ = {className:"pb-4 text-3xl font-helvetica font-bold uppercase", children:"#3 — OUTPOST (CANAL WALKWAY)"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64225$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64225$$);
                    }(), function() {
                      var $G__64234$$ = function() {
                        return {className:"space-y-6", children:[function() {
                          var $G__64240$$ = function() {
                            return {children:["The ", function() {
                              var $G__64246$$ = {className:"font-semibold text-slate-100", children:"Outpost"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64246$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64246$$);
                            }(), " occupies a brick- and stone-laid walkway that projects into the main canal of the Arsenale. ", "Positioned directly in front of ", function() {
                              var $G__64254$$ = {className:"font-medium", children:"Tesa 41"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64254$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64254$$);
                            }(), " and ", function() {
                              var $G__64262$$ = {className:"font-medium", children:"Giardino 25"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64262$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64262$$);
                            }(), ", this narrow but critical site serves as the Pavilion’s most ", function() {
                              var $G__64267$$ = {className:"font-semibold", children:"publicly visible point of contact"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64267$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64267$$);
                            }(), "."]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64240$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__64240$$);
                        }(), function() {
                          var $G__64271_G__64275$jscomp$inline_3506$$ = {className:"italic", children:"before"};
                          $G__64271_G__64275$jscomp$inline_3506$$ = {children:["The Outpost can be seen from a major pedestrian route leading into the central Arsenale exhibition grounds. ", "Visitors cross a well-known, heavily trafficked bridge and encounter this site ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64271_G__64275$jscomp$inline_3506$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64271_G__64275$jscomp$inline_3506$$), 
                          " reaching the main Biennale axis."]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64271_G__64275$jscomp$inline_3506$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__64271_G__64275$jscomp$inline_3506$$);
                        }(), function() {
                          var $G__64279$$ = function() {
                            return {children:["As a result, the Outpost functions as a ", function() {
                              var $G__64283$$ = {className:"font-semibold", children:"signal"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64283$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64283$$);
                            }(), " and a ", function() {
                              var $G__64287$$ = {className:"font-semibold", children:"threshold"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64287$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64287$$);
                            }(), "—an early, unavoidable presence that announces the Pavilion to thousands of passersby, including those who may never enter the interior spaces."]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64279$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__64279$$);
                        }(), function() {
                          var $G__64291$$ = {className:"pt-2", children:"This location extends the Pavilion into the daily flow of the Biennale—establishing a continuous visual and conceptual presence along the canal."};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64291$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64291$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64234$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64234$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64217$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64217$$);
                }(), function() {
                  var $G__64298$$ = function() {
                    return {className:"w-full h-full flex flex-col gap-4 mt-12", children:function() {
                      $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
                      var $outer_ctx$jscomp$14$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $G__64308_vec__64304$$ = $amp$hooks$use_intersection_observer$use_intersection_observer$$($outer_ctx$jscomp$14$$);
                      $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64308_vec__64304$$, 0, null);
                      var $is_visible_QMARK_$jscomp$11$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64308_vec__64304$$, 1, null);
                      $G__64308_vec__64304$$ = function() {
                        return {className:"", ref:$outer_ctx$jscomp$14$$, children:[function() {
                          var $G__64312_G__64316$jscomp$inline_3509$$ = {"playback-id":"A602Gnm6A7gpYTl2w4ZnC9xDEnOQQJWbS3dNxhE1O1FE", "should-play?":$is_visible_QMARK_$jscomp$11$$, "allow-audio?":!1};
                          $G__64312_G__64316$jscomp$inline_3509$$ = {className:"w-full aspect-[16/9]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$location_section$lazy_video$$, $G__64312_G__64316$jscomp$inline_3509$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$location_section$lazy_video$$, $G__64312_G__64316$jscomp$inline_3509$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64312_G__64316$jscomp$inline_3509$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64312_G__64316$jscomp$inline_3509$$);
                        }(), function() {
                          var $G__64322_G__64329$jscomp$inline_3512$$ = {"img-src":"https://atd-722658831.imgix.net/big_red/outpost.jpg", "aspect-ratio":0.55, "active?":$is_visible_QMARK_$jscomp$11$$};
                          $G__64322_G__64329$jscomp$inline_3512$$ = {className:"w-full aspect-[0.525]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__64322_G__64329$jscomp$inline_3512$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__64322_G__64329$jscomp$inline_3512$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64322_G__64329$jscomp$inline_3512$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64322_G__64329$jscomp$inline_3512$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64308_vec__64304$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64308_vec__64304$$);
                    }()};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64298$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64298$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64208$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64208$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63956$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63956$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63863$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63863$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63845_map__63836_map__63836__$1_props__41909__auto__$jscomp$77_vec__63833$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63845_map__63836_map__63836__$1_props__41909__auto__$jscomp$77_vec__63833$$);
};
$amp$components$elements$budget$location_section$location_section$$ = function($G__64345_id$jscomp$72_map__64343_props__41909__auto__$jscomp$78_vec__64340$$, $G__64349$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514_maybe_ref__41910__auto__$jscomp$78_subtitle$jscomp$4$$) {
  $G__64345_id$jscomp$72_map__64343_props__41909__auto__$jscomp$78_vec__64340$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64345_id$jscomp$72_map__64343_props__41909__auto__$jscomp$78_vec__64340$$), $G__64349$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514_maybe_ref__41910__auto__$jscomp$78_subtitle$jscomp$4$$], null);
  $G__64345_id$jscomp$72_map__64343_props__41909__auto__$jscomp$78_vec__64340$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64345_id$jscomp$72_map__64343_props__41909__auto__$jscomp$78_vec__64340$$, 0, null);
  var $map__64343__$1_title$jscomp$24$$ = $APP.$cljs$core$__destructure_map$$($G__64345_id$jscomp$72_map__64343_props__41909__auto__$jscomp$78_vec__64340$$);
  $G__64345_id$jscomp$72_map__64343_props__41909__auto__$jscomp$78_vec__64340$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__64343__$1_title$jscomp$24$$, $APP.$cljs$cst$191$id$$);
  $G__64349$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514_maybe_ref__41910__auto__$jscomp$78_subtitle$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__64343__$1_title$jscomp$24$$, $cljs$cst$499$subtitle$$);
  $map__64343__$1_title$jscomp$24$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__64343__$1_title$jscomp$24$$, $APP.$cljs$cst$373$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__64349$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514_maybe_ref__41910__auto__$jscomp$78_subtitle$jscomp$4$$ = {"section-hint":$G__64349$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514_maybe_ref__41910__auto__$jscomp$78_subtitle$jscomp$4$$, title:$map__64343__$1_title$jscomp$24$$, "expand-button-label":"Expand details", "preview-text":$amp$components$elements$budget$location_section$preview$$, "full-text":$amp$components$elements$budget$location_section$full_details$$};
  $G__64349$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514_maybe_ref__41910__auto__$jscomp$78_subtitle$jscomp$4$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__64349$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514_maybe_ref__41910__auto__$jscomp$78_subtitle$jscomp$4$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$expandable_text_area$expandable_text_area_2$$, 
  $G__64349$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514_maybe_ref__41910__auto__$jscomp$78_subtitle$jscomp$4$$);
  $G__64345_id$jscomp$72_map__64343_props__41909__auto__$jscomp$78_vec__64340$$ = {id:$G__64345_id$jscomp$72_map__64343_props__41909__auto__$jscomp$78_vec__64340$$, children:$G__64349$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514_maybe_ref__41910__auto__$jscomp$78_subtitle$jscomp$4$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64345_id$jscomp$72_map__64343_props__41909__auto__$jscomp$78_vec__64340$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64345_id$jscomp$72_map__64343_props__41909__auto__$jscomp$78_vec__64340$$);
};
$amp$components$elements$budget$non_profit$non_profit$$ = function($G__53756_map__53744_map__53744__$1_props__41909__auto__$jscomp$79_vec__53741$$, $maybe_ref__41910__auto__$jscomp$79$$) {
  $G__53756_map__53744_map__53744__$1_props__41909__auto__$jscomp$79_vec__53741$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__53756_map__53744_map__53744__$1_props__41909__auto__$jscomp$79_vec__53741$$), $maybe_ref__41910__auto__$jscomp$79$$], null);
  $G__53756_map__53744_map__53744__$1_props__41909__auto__$jscomp$79_vec__53741$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__53756_map__53744_map__53744__$1_props__41909__auto__$jscomp$79_vec__53741$$, 0, null);
  $G__53756_map__53744_map__53744__$1_props__41909__auto__$jscomp$79_vec__53741$$ = $APP.$cljs$core$__destructure_map$$($G__53756_map__53744_map__53744__$1_props__41909__auto__$jscomp$79_vec__53741$$);
  var $id$jscomp$73$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__53756_map__53744_map__53744__$1_props__41909__auto__$jscomp$79_vec__53741$$, $APP.$cljs$cst$191$id$$), $subtitle$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__53756_map__53744_map__53744__$1_props__41909__auto__$jscomp$79_vec__53741$$, $cljs$cst$499$subtitle$$), $title$jscomp$25$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__53756_map__53744_map__53744__$1_props__41909__auto__$jscomp$79_vec__53741$$, 
  $APP.$cljs$cst$373$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__53756_map__53744_map__53744__$1_props__41909__auto__$jscomp$79_vec__53741$$ = function() {
    return {id:$id$jscomp$73$$, children:function() {
      var $G__53762$$ = function() {
        return {idx:5, eyebrow:$subtitle$jscomp$5$$, title:$title$jscomp$25$$, children:function() {
          var $G__53770$$ = function() {
            return {className:"space-y-8\n                   p-4", children:[function() {
              var $G__53778$$ = function() {
                return {className:"mb-12 text-slate-300", children:[function() {
                  var $G__53785$$ = function() {
                    return {children:["The Armenia Pavilion 2026 is supported through ", function() {
                      var $G__53794$$ = {className:"font-semibold", children:"Fallen Angels Inc."};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__53794$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__53794$$);
                    }(), ", a registered ", function() {
                      var $G__53805$$ = {className:"font-semibold", children:"501(c)(3)"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__53805$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__53805$$);
                    }(), " public non-profit organization. ", function() {
                      var $G__53811$$ = {className:"font-semibold", children:"Contributions are tax deductible"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__53811$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__53811$$);
                    }(), " to the extent permitted by law."]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__53785$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__53785$$);
                }(), function() {
                  var $G__53816$$ = function() {
                    return {className:"mt-6 space-y-1", children:[function() {
                      var $G__53838_G__53861$jscomp$inline_3518$$ = {className:"font-semibold", children:"Organization: "};
                      $G__53838_G__53861$jscomp$inline_3518$$ = {children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__53838_G__53861$jscomp$inline_3518$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__53838_G__53861$jscomp$inline_3518$$), "Fallen Angels Inc."]};
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__53838_G__53861$jscomp$inline_3518$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__53838_G__53861$jscomp$inline_3518$$);
                    }(), function() {
                      var $G__53886$$ = function() {
                        return {children:[function() {
                          var $G__53892$$ = {className:"font-semibold", children:"EIN: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__53892$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__53892$$);
                        }(), function() {
                          var $G__53904$$ = {className:"font-bold text-slate-100", children:"92-2395513"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__53904$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__53904$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__53886$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__53886$$);
                    }(), function() {
                      var $G__53921$$ = function() {
                        return {children:[function() {
                          var $G__53927$$ = {className:"font-semibold", children:"Located in: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__53927$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__53927$$);
                        }(), function() {
                          var $G__53935$$ = {className:"font-bold text-slate-100", children:"Los Angeles, CA"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__53935$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__53935$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__53921$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__53921$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53816$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__53816$$);
                }(), function() {
                  var $G__53944$$ = function() {
                    return {className:"mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10", children:[function() {
                      var $G__53949$$ = function() {
                        return {children:[function() {
                          var $G__53959_G__53965$jscomp$inline_3521$$ = {className:"italic font-normal text-slate-300", children:"Transfers"};
                          $G__53959_G__53965$jscomp$inline_3521$$ = {className:"text-3xl font-helvetica font-bold text-slate-100 mb-4", children:["Domestic ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__53959_G__53965$jscomp$inline_3521$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__53959_G__53965$jscomp$inline_3521$$)]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__53959_G__53965$jscomp$inline_3521$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__53959_G__53965$jscomp$inline_3521$$);
                        }(), function() {
                          var $G__53969$$ = function() {
                            return {className:"space-y-3", children:[function() {
                              var $G__53977$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__53981$$ = {className:"font-semibold", children:"Name:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__53981$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__53981$$);
                                }(), function() {
                                  var $G__53985$$ = {className:"text-right", children:"Fallen Angels Inc."};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__53985$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__53985$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53977$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__53977$$);
                            }(), function() {
                              var $G__53990$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__53994$$ = {className:"font-semibold", children:"Routing:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__53994$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__53994$$);
                                }(), function() {
                                  var $G__54000$$ = {className:"text-right font-bold text-slate-100 tracking-wide", children:"091311229"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__54000$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__54000$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53990$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__53990$$);
                            }(), function() {
                              var $G__54020$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__54027$$ = {className:"font-semibold", children:"Account #:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__54027$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__54027$$);
                                }(), function() {
                                  var $G__54033$$ = {className:"text-right font-bold text-slate-100 tracking-wide", children:"202535309341"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__54033$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__54033$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__54020$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__54020$$);
                            }(), function() {
                              var $G__54041$$ = function() {
                                return {className:"flex items-start justify-between gap-6", children:[function() {
                                  var $G__54059$$ = {className:"font-semibold", children:"Address:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__54059$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__54059$$);
                                }(), function() {
                                  var $G__54071$$ = function() {
                                    return {className:"text-right leading-snug", children:[function() {
                                      var $G__54075$$ = {children:"Choice Financial Group"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__54075$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__54075$$);
                                    }(), function() {
                                      var $G__54079$$ = {children:"4501 23rd Avenue S"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__54079$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__54079$$);
                                    }(), function() {
                                      var $G__54092$$ = {children:"Fargo, ND 58104"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__54092$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__54092$$);
                                    }()]};
                                  }();
                                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__54071$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__54071$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__54041$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__54041$$);
                            }()]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53969$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__53969$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53949$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__53949$$);
                    }(), function() {
                      var $G__54110$$ = function() {
                        return {children:[function() {
                          var $G__54122_G__54128$jscomp$inline_3524$$ = {className:"italic font-normal text-slate-300", children:"Transfers"};
                          $G__54122_G__54128$jscomp$inline_3524$$ = {className:"text-3xl font-helvetica font-bold text-slate-100 mb-4", children:["International ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__54122_G__54128$jscomp$inline_3524$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__54122_G__54128$jscomp$inline_3524$$)]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__54122_G__54128$jscomp$inline_3524$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__54122_G__54128$jscomp$inline_3524$$);
                        }(), function() {
                          var $G__54137$$ = function() {
                            return {className:"space-y-3", children:[function() {
                              var $G__54141$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__54149$$ = {className:"font-semibold", children:"Name:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__54149$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__54149$$);
                                }(), function() {
                                  var $G__54158$$ = {className:"text-right", children:"Fallen Angels Inc."};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__54158$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__54158$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__54141$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__54141$$);
                            }(), function() {
                              var $G__54170$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__54176$$ = {className:"font-semibold", children:"SWIFT/BIC:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__54176$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__54176$$);
                                }(), function() {
                                  var $G__54190$$ = {className:"text-right font-bold text-slate-100 tracking-wide", children:"CHFGUS44021"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__54190$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__54190$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__54170$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__54170$$);
                            }(), function() {
                              var $G__54207$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__54211$$ = {className:"font-semibold", children:"ABA/Routing:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__54211$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__54211$$);
                                }(), function() {
                                  var $G__54215$$ = {className:"text-right font-bold text-slate-100 tracking-wide", children:"091311229"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__54215$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__54215$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__54207$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__54207$$);
                            }(), function() {
                              var $G__54221$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__54225$$ = {className:"font-semibold", children:"IBAN/Account #:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__54225$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__54225$$);
                                }(), function() {
                                  var $G__54231$$ = {className:"text-right font-bold text-slate-100 tracking-wide", children:"202535309341"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__54231$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__54231$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__54221$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__54221$$);
                            }(), function() {
                              var $G__54249$$ = function() {
                                return {className:"flex items-start justify-between gap-6", children:[function() {
                                  var $G__54259$$ = {className:"font-semibold", children:"Address:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__54259$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__54259$$);
                                }(), function() {
                                  var $G__54271$$ = function() {
                                    return {className:"text-right leading-snug", children:[function() {
                                      var $G__54287$$ = {children:"Choice Financial Group"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__54287$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__54287$$);
                                    }(), function() {
                                      var $G__54314$$ = {children:"4501 23rd Avenue S"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__54314$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__54314$$);
                                    }(), function() {
                                      var $G__54325$$ = {children:"Fargo, ND 58104"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__54325$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__54325$$);
                                    }()]};
                                  }();
                                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__54271$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__54271$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__54249$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__54249$$);
                            }()]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__54137$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__54137$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__54110$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__54110$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53944$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__53944$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53778$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__53778$$);
            }(), function() {
              var $G__54366$$ = {className:"p-4 mt-10 text-sm md:text-base text-slate-400", children:"If you would like a receipt letter for your records, please include your name and email address with the transfer memo."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__54366$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__54366$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53770$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__53770$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$section_block$section_block$$, $G__53762$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$section_block$section_block$$, $G__53762$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53756_map__53744_map__53744__$1_props__41909__auto__$jscomp$79_vec__53741$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__53756_map__53744_map__53744__$1_props__41909__auto__$jscomp$79_vec__53741$$);
};
$amp$components$navs$back_up_nav$back_up_nav$$ = function($G__63669_is_active_QMARK_$jscomp$14_props__41909__auto__$jscomp$80_vec__63658$$) {
  $APP.$helix$core$extract_cljs_props$$($G__63669_is_active_QMARK_$jscomp$14_props__41909__auto__$jscomp$80_vec__63658$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $container_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("container-ref"), $button_ref$$ = $APP.$helix$hooks$use_ref$$("button-ref"), $scroll_to_top$$ = $amp$hooks$use_scroll_to$use_scroll_to_top$cljs$0core$0IFn$0_invoke$0arity$0variadic$$();
  $G__63669_is_active_QMARK_$jscomp$14_props__41909__auto__$jscomp$80_vec__63658$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($container_ref$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$356$start$$, function() {
    return window.innerHeight - window.innerHeight / 8;
  }, $APP.$cljs$cst$382$end$$, "1000000px", $APP.$cljs$cst$384$markers_QMARK_$$, !1, $APP.$cljs$cst$385$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63669_is_active_QMARK_$jscomp$14_props__41909__auto__$jscomp$80_vec__63658$$, 0, null);
  $G__63669_is_active_QMARK_$jscomp$14_props__41909__auto__$jscomp$80_vec__63658$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63669_is_active_QMARK_$jscomp$14_props__41909__auto__$jscomp$80_vec__63658$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($button_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$397$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$434$opacity$$, 1], null), $APP.$cljs$cst$398$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$434$opacity$$, 0.7], null)]));
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$395$target$$, $container_ref$jscomp$1$$, $APP.$cljs$cst$401$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$391$y$$, 0, $APP.$cljs$cst$434$opacity$$, 1], null), $APP.$cljs$cst$403$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$391$y$$, -150, $APP.$cljs$cst$434$opacity$$, 0.25], null), $APP.$cljs$cst$399$is_on_QMARK_$$, 
  $G__63669_is_active_QMARK_$jscomp$14_props__41909__auto__$jscomp$80_vec__63658$$], null));
  $G__63669_is_active_QMARK_$jscomp$14_props__41909__auto__$jscomp$80_vec__63658$$ = function() {
    var $G__63674$jscomp$inline_3526_G__63685$jscomp$inline_3528_JSCompiler_inline_result$jscomp$3268_JSCompiler_inline_result$jscomp$inline_3527$$ = {};
    $G__63674$jscomp$inline_3526_G__63685$jscomp$inline_3528_JSCompiler_inline_result$jscomp$3268_JSCompiler_inline_result$jscomp$inline_3527$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$icons$ArrowTurnRightUp$$, $G__63674$jscomp$inline_3526_G__63685$jscomp$inline_3528_JSCompiler_inline_result$jscomp$3268_JSCompiler_inline_result$jscomp$inline_3527$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$icons$ArrowTurnRightUp$$, 
    $G__63674$jscomp$inline_3526_G__63685$jscomp$inline_3528_JSCompiler_inline_result$jscomp$3268_JSCompiler_inline_result$jscomp$inline_3527$$);
    $G__63674$jscomp$inline_3526_G__63685$jscomp$inline_3528_JSCompiler_inline_result$jscomp$3268_JSCompiler_inline_result$jscomp$inline_3527$$ = {ref:$button_ref$$, className:"flex \n                           w-full\n                           h-full\n                           bg-pink-300\n                           opacity-90\n                           font-bold\n                           text-xl\n                           px-4\n                           white-space-no-wrap", onClick:$scroll_to_top$$, 
    children:["To Top ", $G__63674$jscomp$inline_3526_G__63685$jscomp$inline_3528_JSCompiler_inline_result$jscomp$3268_JSCompiler_inline_result$jscomp$inline_3527$$]};
    $G__63674$jscomp$inline_3526_G__63685$jscomp$inline_3528_JSCompiler_inline_result$jscomp$3268_JSCompiler_inline_result$jscomp$inline_3527$$ = $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63674$jscomp$inline_3526_G__63685$jscomp$inline_3528_JSCompiler_inline_result$jscomp$3268_JSCompiler_inline_result$jscomp$inline_3527$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63674$jscomp$inline_3526_G__63685$jscomp$inline_3528_JSCompiler_inline_result$jscomp$3268_JSCompiler_inline_result$jscomp$inline_3527$$);
    return {ref:$container_ref$jscomp$1$$, className:"fixed right-0 cursor-pointer z-30", children:$G__63674$jscomp$inline_3526_G__63685$jscomp$inline_3528_JSCompiler_inline_result$jscomp$3268_JSCompiler_inline_result$jscomp$inline_3527$$};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63669_is_active_QMARK_$jscomp$14_props__41909__auto__$jscomp$80_vec__63658$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63669_is_active_QMARK_$jscomp$14_props__41909__auto__$jscomp$80_vec__63658$$);
};
$amp$components$sections$press_release$preview$$ = function($G__63687_map__63678_props__41909__auto__$jscomp$81_vec__63675$$, $maybe_ref__41910__auto__$jscomp$81$$) {
  $G__63687_map__63678_props__41909__auto__$jscomp$81_vec__63675$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63687_map__63678_props__41909__auto__$jscomp$81_vec__63675$$), $maybe_ref__41910__auto__$jscomp$81$$], null);
  $G__63687_map__63678_props__41909__auto__$jscomp$81_vec__63675$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63687_map__63678_props__41909__auto__$jscomp$81_vec__63675$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__63687_map__63678_props__41909__auto__$jscomp$81_vec__63675$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__63687_map__63678_props__41909__auto__$jscomp$81_vec__63675$$ = function() {
    return {className:"px-4", children:function() {
      var $G__63697$$ = function() {
        return {className:" text-xl", children:[function() {
          var $G__63701$$ = {className:"italic", children:"Yerevan / Los Angeles / Venice — "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63701$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63701$$);
        }(), "The Ministry of Culture of the Republic of Armenia has selected ", function() {
          var $G__63711$$ = {className:"font-semibold", children:"Zadik Zadikian"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63711$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63711$$);
        }(), " to represent Armenia at the ", function() {
          var $G__63717$$ = {className:"font-semibold", children:"61st Venice Biennale Arte"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63717$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63717$$);
        }(), " in 2026. Led by legendary art dealer ", function() {
          var $G__63723$$ = {className:"font-semibold", children:"Tony Shafrazi"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63723$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63723$$);
        }(), " as chief curator, and Tina Chakarian as curator, the Pavilion aligns with Armenia's broader commitment to elevating its cultural presence on the international stage..."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63697$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63697$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63687_map__63678_props__41909__auto__$jscomp$81_vec__63675$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63687_map__63678_props__41909__auto__$jscomp$81_vec__63675$$);
};
$amp$components$sections$press_release$details$$ = function($G__63735_map__63733_props__41909__auto__$jscomp$82_vec__63730$$, $maybe_ref__41910__auto__$jscomp$82$$) {
  $G__63735_map__63733_props__41909__auto__$jscomp$82_vec__63730$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63735_map__63733_props__41909__auto__$jscomp$82_vec__63730$$), $maybe_ref__41910__auto__$jscomp$82$$], null);
  $G__63735_map__63733_props__41909__auto__$jscomp$82_vec__63730$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63735_map__63733_props__41909__auto__$jscomp$82_vec__63730$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__63735_map__63733_props__41909__auto__$jscomp$82_vec__63730$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__63735_map__63733_props__41909__auto__$jscomp$82_vec__63730$$ = function() {
    return {className:"px-4", children:[function() {
      var $G__63739$$ = function() {
        return {className:" text-xl mb-6", children:[function() {
          var $G__63743$$ = {className:"italic", children:"Yerevan / Los Angeles / Venice — "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63743$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63743$$);
        }(), "The Ministry of Culture of the Republic of Armenia has selected ", function() {
          var $G__63747$$ = {className:"font-semibold", children:"Zadik Zadikian"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63747$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63747$$);
        }(), " to represent Armenia at the ", function() {
          var $G__63751$$ = {className:"font-semibold", children:"61st Venice Biennale Arte"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63751$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63751$$);
        }(), " in 2026. Led by legendary art dealer ", function() {
          var $G__63755$$ = {className:"font-semibold", children:"Tony Shafrazi"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63755$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63755$$);
        }(), " as chief curator, and Tina Chakarian as curator, the Pavilion aligns with Armenia's broader commitment to elevating its cultural presence on the international stage."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63739$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63739$$);
    }(), function() {
      var $G__63759$$ = {className:"mb-6", children:"This collaboration marks a historic and deeply resonant moment in both Zadikian's and Shafrazi's lives and careers: a symbolic return to Armenia and a shared mission to present a world-class national Pavilion to a global audience."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63759$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63759$$);
    }(), function() {
      var $G__63763$$ = function() {
        return {className:"mb-6", children:["Zadikian—who left Soviet Armenia at nineteen and experienced a radical cultural rupture upon arriving in the United States—came of age artistically through an uncommon trajectory. From San Francisco during the height of the countercultural moment, working with ", function() {
          var $G__63767$$ = {className:"italic", children:"Benjamin Bufano"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63767$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63767$$);
        }(), ", to New York, where he assisted ", function() {
          var $G__63771$$ = {className:"italic", children:"Richard Serra"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63771$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63771$$);
        }(), " on monumental oil-stick wall drawings—one of which Serra titled ", function() {
          var $G__63775$$ = {className:"italic", children:"Zadikian"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63775$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63775$$);
        }(), "—the artist now returns with a project of uncommon ambition and conceptual rigor."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63763$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63763$$);
    }(), function() {
      var $G__63779_G__63783$jscomp$inline_3531$$ = {className:"font-bold text-pink-400", children:"THE STUDIO "};
      $G__63779_G__63783$jscomp$inline_3531$$ = {className:"mb-6", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63779_G__63783$jscomp$inline_3531$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63779_G__63783$jscomp$inline_3531$$), "transforms the Armenia Pavilion into an active site of sustained, concentrated making. Throughout the Biennale, Zadikian and his team will fabricate primordial plaster units on site—ranging from palm-sized objects to human-scale forms—each one a three-dimensional articulation of distilled color, ratio, and reflectivity."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63779_G__63783$jscomp$inline_3531$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63779_G__63783$jscomp$inline_3531$$);
    }(), function() {
      var $G__63787$$ = {className:"mb-6 italic", children:'"We\'re creating material that transforms by its very nature into sculpture—material with a clarity of line and reflection so immediate that the eye can fly across it," says Zadikian.'};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63787$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63787$$);
    }(), function() {
      var $G__63791$$ = {className:"mb-6 italic", children:"For Shafrazi, the work's insistence on touch is central: \" It's haptic. Do you know how important that is? That's what makes it. \""};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63791$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63791$$);
    }(), function() {
      var $G__63795$$ = {className:"mb-6", children:"The Pavilion privileges a form of seeing grounded in the body—through weight, temperature, balance, and texture—rather than spectacle or narrative. Units will be cast, stacked, dismantled, and restacked throughout the exhibition, remaining in constant motion."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63795$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63795$$);
    }(), function() {
      var $G__63799$$ = function() {
        return {className:"mb-6", children:["By presenting the studio in its raw, working state—without performance or theatrical staging—", function() {
          var $G__63803$$ = {className:"font-bold text-pink-400", children:"THE STUDIO "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63803$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63803$$);
        }(), "aligns closely with the Biennale's curatorial framework, ", function() {
          var $G__63807$$ = {className:"italic", children:"In Minor Keys"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63807$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63807$$);
        }(), ". The work responds not with commentary or illustration, but with material intelligence, meditative clarity, and poetic restraint—tuning visitors to the lower frequencies: the modest, the elemental, the sanctuary."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63799$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63799$$);
    }(), function() {
      var $G__63811$$ = {className:"mb-6", children:"The project marks an inner shift for Zadikian, turning away from the bombast of gold toward a quieter thread that has long run through his practice: plaster and pigment. The work foregrounds the rigor, repetition, and material intelligence that have underpinned his oeuvre for decades."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63811$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63811$$);
    }(), function() {
      var $G__63815_G__63819$jscomp$inline_3534$$ = {className:"font-bold text-pink-400", children:"THE STUDIO "};
      $G__63815_G__63819$jscomp$inline_3534$$ = {children:["In a cultural moment dominated by speed, novelty, and distraction, ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63815_G__63819$jscomp$inline_3534$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63815_G__63819$jscomp$inline_3534$$), "turns toward repetition, exactitude, and touch. Drawing on childhood experiences working with Armenian tuff stone and a lifelong intimacy with plaster, Zadikian produces units that appear plain at first glance, yet reveal unexpected depth through surface, edge, and volume. Together, they form a precise yet open-ended vocabulary—a language of blocks, strata, and intervals that underwrites a larger meditation on resilience, renewal, and the rediscovery of origins."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63815_G__63819$jscomp$inline_3534$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63815_G__63819$jscomp$inline_3534$$);
    }(), function() {
      var $G__63823_G__63827$jscomp$inline_3537$$ = {className:"text-2xl italic", children:"- Nov 15th, 2025 "};
      $G__63823_G__63827$jscomp$inline_3537$$ = {className:"mt-8", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63823_G__63827$jscomp$inline_3537$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63823_G__63827$jscomp$inline_3537$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63823_G__63827$jscomp$inline_3537$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63823_G__63827$jscomp$inline_3537$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63735_map__63733_props__41909__auto__$jscomp$82_vec__63730$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63735_map__63733_props__41909__auto__$jscomp$82_vec__63730$$);
};
$amp$components$sections$press_release$footer$$ = function($G__63843_map__63841_props__41909__auto__$jscomp$83_vec__63838$$, $maybe_ref__41910__auto__$jscomp$83$$) {
  $G__63843_map__63841_props__41909__auto__$jscomp$83_vec__63838$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63843_map__63841_props__41909__auto__$jscomp$83_vec__63838$$), $maybe_ref__41910__auto__$jscomp$83$$], null);
  $G__63843_map__63841_props__41909__auto__$jscomp$83_vec__63838$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63843_map__63841_props__41909__auto__$jscomp$83_vec__63838$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__63843_map__63841_props__41909__auto__$jscomp$83_vec__63838$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__63843_map__63841_props__41909__auto__$jscomp$83_vec__63838$$ = function() {
    return {className:"p-4 italic text-lg text-slate-100", children:[function() {
      var $G__63849$$ = {className:"block mt-6", children:"*Note: As Armenia does not maintain a permanent national pavilion in Venice, the Pavilion must be realized through a rented venue—a standard and widely accepted model for many non-permanent participating nations."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63849$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63849$$);
    }(), function() {
      var $G__63855$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__63859$$ = {className:"text-slate-300", children:"The selected site operates at a base rental cost of approximately "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63859$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63859$$);
        }(), function() {
          var $G__63865$$ = {className:"font-semibold text-white", children:"$195,000"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63865$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63865$$);
        }(), function() {
          var $G__63871$$ = {className:"", children:[", representing a strategic and responsible choice when compared to venues in the Giardini or Arsenale, ", "where base rents—when space is available at all—typically begin at "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63871$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__63871$$);
        }(), function() {
          var $G__63875$$ = {className:"font-semibold text-white", children:"$450,000"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63875$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63875$$);
        }(), function() {
          var $G__63881$$ = {className:"text-slate-300", children:", excluding construction, staffing, and operational expenses. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63881$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63881$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63855$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63855$$);
    }(), function() {
      var $G__63888$$ = {className:"block mt-6", children:["To support the scale and international significance of this undertaking, ", "a dedicated fundraising committee has been formed to guide and advance the project’s philanthropic efforts. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63888$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__63888$$);
    }(), function() {
      var $G__63894$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__63898$$ = {className:"mt-4 text-slate-200", children:"The committee is led by "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63898$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63898$$);
        }(), function() {
          var $G__63904$$ = {className:"font-medium text-white", children:["Archbishop Hovnan Derderian, Tony Shafrazi, Tina Chakarian, Rafi Ourfalian, Khachik Khudikyan, ", "Andranik Torosyan, Aram Alajajian, and Vik Hovsepian."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63904$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__63904$$);
        }(), function() {
          var $G__63910$$ = {className:"text-slate-300", children:", ensuring the Pavilion’s successful realization through coordinated leadership, stewardship, and long-term commitment. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63910$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63910$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63894$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63894$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63843_map__63841_props__41909__auto__$jscomp$83_vec__63838$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63843_map__63841_props__41909__auto__$jscomp$83_vec__63838$$);
};
$amp$components$sections$press_release$press_release$$ = function($G__63933_id$jscomp$74_map__63929_props__41909__auto__$jscomp$84_vec__63926$$, $G__63939$jscomp$inline_3540_JSCompiler_inline_result$jscomp$inline_3539_maybe_ref__41910__auto__$jscomp$84_subtitle$jscomp$6$$) {
  $G__63933_id$jscomp$74_map__63929_props__41909__auto__$jscomp$84_vec__63926$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63933_id$jscomp$74_map__63929_props__41909__auto__$jscomp$84_vec__63926$$), $G__63939$jscomp$inline_3540_JSCompiler_inline_result$jscomp$inline_3539_maybe_ref__41910__auto__$jscomp$84_subtitle$jscomp$6$$], null);
  $G__63933_id$jscomp$74_map__63929_props__41909__auto__$jscomp$84_vec__63926$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63933_id$jscomp$74_map__63929_props__41909__auto__$jscomp$84_vec__63926$$, 0, null);
  var $map__63929__$1_title$jscomp$26$$ = $APP.$cljs$core$__destructure_map$$($G__63933_id$jscomp$74_map__63929_props__41909__auto__$jscomp$84_vec__63926$$);
  $G__63933_id$jscomp$74_map__63929_props__41909__auto__$jscomp$84_vec__63926$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__63929__$1_title$jscomp$26$$, $APP.$cljs$cst$191$id$$);
  $G__63939$jscomp$inline_3540_JSCompiler_inline_result$jscomp$inline_3539_maybe_ref__41910__auto__$jscomp$84_subtitle$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__63929__$1_title$jscomp$26$$, $cljs$cst$499$subtitle$$);
  $map__63929__$1_title$jscomp$26$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__63929__$1_title$jscomp$26$$, $APP.$cljs$cst$373$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__63939$jscomp$inline_3540_JSCompiler_inline_result$jscomp$inline_3539_maybe_ref__41910__auto__$jscomp$84_subtitle$jscomp$6$$ = {"section-hint":$G__63939$jscomp$inline_3540_JSCompiler_inline_result$jscomp$inline_3539_maybe_ref__41910__auto__$jscomp$84_subtitle$jscomp$6$$, title:$map__63929__$1_title$jscomp$26$$, "expand-button-label":"Read full release", "preview-text":$amp$components$sections$press_release$preview$$, "full-text":$amp$components$sections$press_release$details$$, "footer-text":$amp$components$sections$press_release$footer$$};
  $G__63939$jscomp$inline_3540_JSCompiler_inline_result$jscomp$inline_3539_maybe_ref__41910__auto__$jscomp$84_subtitle$jscomp$6$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__63939$jscomp$inline_3540_JSCompiler_inline_result$jscomp$inline_3539_maybe_ref__41910__auto__$jscomp$84_subtitle$jscomp$6$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$expandable_text_area$expandable_text_area_2$$, 
  $G__63939$jscomp$inline_3540_JSCompiler_inline_result$jscomp$inline_3539_maybe_ref__41910__auto__$jscomp$84_subtitle$jscomp$6$$);
  $G__63933_id$jscomp$74_map__63929_props__41909__auto__$jscomp$84_vec__63926$$ = {id:$G__63933_id$jscomp$74_map__63929_props__41909__auto__$jscomp$84_vec__63926$$, children:$G__63939$jscomp$inline_3540_JSCompiler_inline_result$jscomp$inline_3539_maybe_ref__41910__auto__$jscomp$84_subtitle$jscomp$6$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63933_id$jscomp$74_map__63929_props__41909__auto__$jscomp$84_vec__63926$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63933_id$jscomp$74_map__63929_props__41909__auto__$jscomp$84_vec__63926$$);
};
$amp$components$sections$budget_section$section_link$$ = function($G__64652_map__64648_map__64648__$1_props__41909__auto__$jscomp$85_vec__64645$$, $maybe_ref__41910__auto__$jscomp$85$$) {
  $G__64652_map__64648_map__64648__$1_props__41909__auto__$jscomp$85_vec__64645$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64652_map__64648_map__64648__$1_props__41909__auto__$jscomp$85_vec__64645$$), $maybe_ref__41910__auto__$jscomp$85$$], null);
  $G__64652_map__64648_map__64648__$1_props__41909__auto__$jscomp$85_vec__64645$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64652_map__64648_map__64648__$1_props__41909__auto__$jscomp$85_vec__64645$$, 0, null);
  $G__64652_map__64648_map__64648__$1_props__41909__auto__$jscomp$85_vec__64645$$ = $APP.$cljs$core$__destructure_map$$($G__64652_map__64648_map__64648__$1_props__41909__auto__$jscomp$85_vec__64645$$);
  var $title$jscomp$27$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64652_map__64648_map__64648__$1_props__41909__auto__$jscomp$85_vec__64645$$, $APP.$cljs$cst$373$title$$), $anchor$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64652_map__64648_map__64648__$1_props__41909__auto__$jscomp$85_vec__64645$$, $cljs$cst$520$anchor$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$jscomp$1$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__64652_map__64648_map__64648__$1_props__41909__auto__$jscomp$85_vec__64645$$ = function() {
    return {onClick:function() {
      return $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($anchor$jscomp$2$$) : $scroll_to_id$jscomp$1$$.call(null, $anchor$jscomp$2$$);
    }, className:"hover:text-pink-400 transition-colors", children:[$title$jscomp$27$$, " ", function() {
      var $G__64656$$ = {"class":"w-6 h-6 inline-block ml-1"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$icons$ChevronRightIcon$$, $G__64656$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$icons$ChevronRightIcon$$, $G__64656$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__64652_map__64648_map__64648__$1_props__41909__auto__$jscomp$85_vec__64645$$) : $APP.$helix$core$jsxs$$.call(null, "button", $G__64652_map__64648_map__64648__$1_props__41909__auto__$jscomp$85_vec__64645$$);
};
$amp$components$sections$budget_section$header$$ = function($G__64670_props__41909__auto__$jscomp$86$$) {
  $APP.$helix$core$extract_cljs_props$$($G__64670_props__41909__auto__$jscomp$86$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__64670_props__41909__auto__$jscomp$86$$ = function() {
    return {className:"", children:[function() {
      var $G__64674_G__64678$jscomp$inline_3543$$ = {src:"images/graphics/biennale_logo.png"};
      $G__64674_G__64678$jscomp$inline_3543$$ = {className:"w-1/2 lg:w-1/4 lg:max-w-64 mt-4 lg:mt-8 px-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__64674_G__64678$jscomp$inline_3543$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__64674_G__64678$jscomp$inline_3543$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64674_G__64678$jscomp$inline_3543$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64674_G__64678$jscomp$inline_3543$$);
    }(), function() {
      var $G__64682_G__64686$jscomp$inline_3546$$ = {translate:"no", className:"notranslate font-helvetica font-bold text-4xl lg:text-6xl text-white mb-6 uppercase", children:"Armenia Pavilion, Biennale Arte 2026, 61st International Art Exhibition"};
      $G__64682_G__64686$jscomp$inline_3546$$ = {className:"px-4 mt-12 lg:mt-16 max-w-4xl", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__64682_G__64686$jscomp$inline_3546$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__64682_G__64686$jscomp$inline_3546$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64682_G__64686$jscomp$inline_3546$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64682_G__64686$jscomp$inline_3546$$);
    }(), function() {
      var $G__64690$$ = function() {
        return {className:"w-full px-4 mt-16", children:function() {
          var $G__64694$$ = function() {
            return {className:"text-2xl text-white space-y-4 flex flex-col justify-start items-start", children:[function() {
              var $G__64698$$ = {title:"1. Press Release", anchor:"section-1"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__64698$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__64698$$);
            }(), function() {
              var $G__64702$$ = {title:"2. Overview - THE STUDIO", anchor:"section-2"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__64702$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__64702$$);
            }(), function() {
              var $G__64706$$ = {title:"3. Budget", anchor:"section-3"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__64706$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__64706$$);
            }(), function() {
              var $G__64710$$ = {title:"4. Committee", anchor:"section-4"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__64710$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__64710$$);
            }(), function() {
              var $G__64714$$ = {title:"5. Location Details", anchor:"section-5"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__64714$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__64714$$);
            }(), function() {
              var $G__64718$$ = {title:"6. Donation Info", anchor:"section-6"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__64718$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__64718$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64694$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64694$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64690$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64690$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64670_props__41909__auto__$jscomp$86$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64670_props__41909__auto__$jscomp$86$$);
};
$amp$components$sections$budget_section$budget_section$$ = function($G__64738_props__41909__auto__$jscomp$87$$) {
  $APP.$helix$core$extract_cljs_props$$($G__64738_props__41909__auto__$jscomp$87$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__64738_props__41909__auto__$jscomp$87$$ = function() {
    return {"section-id":"budget-section", children:[function() {
      var $G__64746$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$navs$back_up_nav$back_up_nav$$, $G__64746$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$navs$back_up_nav$back_up_nav$$, $G__64746$$);
    }(), function() {
      var $G__64748$$ = function() {
        return {className:"w-full h-full\n               text-white\n               grey-grad\n               flex items-center justify-center flex-col", children:function() {
          var $G__64752$$ = function() {
            return {className:"flex flex-col w-full lg:w-8/12", children:[function() {
              var $G__64756$$ = {};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$header$$, $G__64756$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$header$$, $G__64756$$);
            }(), function() {
              var $G__64758$$ = {id:"section-1", subtitle:"press", title:"press release"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$press_release$press_release$$, $G__64758$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$press_release$press_release$$, $G__64758$$);
            }(), function() {
              var $G__64763$$ = {id:"section-2", subtitle:"overview", title:"about"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$about$about$$, $G__64763$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$about$about$$, $G__64763$$);
            }(), function() {
              var $G__64770$$ = {id:"section-3", subtitle:"financials", title:"budget"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$cost_breakdown$cost_breakdown$$, $G__64770$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$cost_breakdown$cost_breakdown$$, $G__64770$$);
            }(), function() {
              var $G__64774$$ = {id:"section-4", subtitle:"team", title:"committee"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$committe$committee$$, $G__64774$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$committe$committee$$, $G__64774$$);
            }(), function() {
              var $G__64778$$ = {id:"section-5", subtitle:"venue", title:"location information"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$location_section$location_section$$, $G__64778$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$location_section$location_section$$, $G__64778$$);
            }(), function() {
              var $G__64782$$ = {id:"section-6", subtitle:"non-profit", title:"donation information"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$non_profit$non_profit$$, $G__64782$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$non_profit$non_profit$$, $G__64782$$);
            }(), function() {
              var $G__64786$$ = {};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$sections$contact_section$contact_section$$, $G__64786$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$sections$contact_section$contact_section$$, $G__64786$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64752$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64752$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64748$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64748$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__64738_props__41909__auto__$jscomp$87$$, "budget-section") : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$components$section$section$$, $G__64738_props__41909__auto__$jscomp$87$$, "budget-section");
};
$APP.$amp$views$budget_view$budget_view$$ = function($G__64810_64819_G__64813_map__64809_map__64809__$1_props__41909__auto__$jscomp$88_vec__64806$$, $G__64811_64820_maybe_ref__41910__auto__$jscomp$88$$) {
  $G__64810_64819_G__64813_map__64809_map__64809__$1_props__41909__auto__$jscomp$88_vec__64806$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64810_64819_G__64813_map__64809_map__64809__$1_props__41909__auto__$jscomp$88_vec__64806$$), $G__64811_64820_maybe_ref__41910__auto__$jscomp$88$$], null);
  $G__64810_64819_G__64813_map__64809_map__64809__$1_props__41909__auto__$jscomp$88_vec__64806$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64810_64819_G__64813_map__64809_map__64809__$1_props__41909__auto__$jscomp$88_vec__64806$$, 0, null);
  $G__64810_64819_G__64813_map__64809_map__64809__$1_props__41909__auto__$jscomp$88_vec__64806$$ = $APP.$cljs$core$__destructure_map$$($G__64810_64819_G__64813_map__64809_map__64809__$1_props__41909__auto__$jscomp$88_vec__64806$$);
  var $active$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64810_64819_G__64813_map__64809_map__64809__$1_props__41909__auto__$jscomp$88_vec__64806$$, $cljs$cst$521$active$$), $intro_complete_callback$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64810_64819_G__64813_map__64809_map__64809__$1_props__41909__auto__$jscomp$88_vec__64806$$, $cljs$cst$522$intro_complete_callback$$), $outro_complete_callback$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64810_64819_G__64813_map__64809_map__64809__$1_props__41909__auto__$jscomp$88_vec__64806$$, 
  $cljs$cst$523$outro_complete_callback$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$jscomp$2$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__64810_64819_G__64813_map__64809_map__64809__$1_props__41909__auto__$jscomp$88_vec__64806$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($active$jscomp$1$$) ? $intro_complete_callback$$.$cljs$core$IFn$_invoke$arity$0$ ? $intro_complete_callback$$.$cljs$core$IFn$_invoke$arity$0$() : $intro_complete_callback$$.call(null) : $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to($APP.$cljs$core$_deref$$($comp_ref$jscomp$2$$), {opacity:0, onComplete:$outro_complete_callback$$, duration:1});
  });
  $G__64811_64820_maybe_ref__41910__auto__$jscomp$88$$ = [$active$jscomp$1$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__64810_64819_G__64813_map__64809_map__64809__$1_props__41909__auto__$jscomp$88_vec__64806$$, $G__64811_64820_maybe_ref__41910__auto__$jscomp$88$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__64810_64819_G__64813_map__64809_map__64809__$1_props__41909__auto__$jscomp$88_vec__64806$$, $G__64811_64820_maybe_ref__41910__auto__$jscomp$88$$);
  $G__64810_64819_G__64813_map__64809_map__64809__$1_props__41909__auto__$jscomp$88_vec__64806$$ = function() {
    var $G__64817$jscomp$inline_2615_JSCompiler_inline_result$jscomp$2203$$ = {};
    $G__64817$jscomp$inline_2615_JSCompiler_inline_result$jscomp$2203$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$budget_section$$, $G__64817$jscomp$inline_2615_JSCompiler_inline_result$jscomp$2203$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$budget_section$$, $G__64817$jscomp$inline_2615_JSCompiler_inline_result$jscomp$2203$$);
    return {ref:$comp_ref$jscomp$2$$, children:$G__64817$jscomp$inline_2615_JSCompiler_inline_result$jscomp$2203$$};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64810_64819_G__64813_map__64809_map__64809__$1_props__41909__auto__$jscomp$88_vec__64806$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64810_64819_G__64813_map__64809_map__64809__$1_props__41909__auto__$jscomp$88_vec__64806$$);
};
$cljs$cst$477$preview_text$$ = new $APP.$cljs$core$Keyword$$(null, "preview-text", "preview-text", 695562530);
$cljs$cst$475$section_hint$$ = new $APP.$cljs$core$Keyword$$(null, "section-hint", "section-hint", -565211480);
$cljs$cst$523$outro_complete_callback$$ = new $APP.$cljs$core$Keyword$$(null, "outro-complete-callback", "outro-complete-callback", -1973874519);
$cljs$cst$497$delay$$ = new $APP.$cljs$core$Keyword$$(null, "delay", "delay", -574225219);
$cljs$cst$482$on_exit$$ = new $APP.$cljs$core$Keyword$$(null, "on-exit", "on-exit", 1821961613);
$cljs$cst$492$parent_styles$$ = new $APP.$cljs$core$Keyword$$(null, "parent-styles", "parent-styles", 1435939711);
$cljs$cst$483$derefed$$ = new $APP.$cljs$core$Keyword$$(null, "derefed", "derefed", 590684583);
$cljs$cst$516$the_studio$$ = new $APP.$cljs$core$Keyword$$(null, "the-studio", "the-studio", 106848628);
$cljs$cst$476$expand_button_label$$ = new $APP.$cljs$core$Keyword$$(null, "expand-button-label", "expand-button-label", -2041664671);
$cljs$cst$519$documentation$$ = new $APP.$cljs$core$Keyword$$(null, "documentation", "documentation", 1889593999);
$cljs$cst$507$expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "expanded-items", "expanded-items", 749320313);
$cljs$cst$510$label$$ = new $APP.$cljs$core$Keyword$$(null, "label", "label", 1718410804);
$cljs$cst$503$tax$$ = new $APP.$cljs$core$Keyword$$(null, "tax", "tax", -226525810);
$cljs$cst$522$intro_complete_callback$$ = new $APP.$cljs$core$Keyword$$(null, "intro-complete-callback", "intro-complete-callback", 1121849196);
$cljs$cst$521$active$$ = new $APP.$cljs$core$Keyword$$(null, "active", "active", 1895962068);
$cljs$cst$514$logistics$$ = new $APP.$cljs$core$Keyword$$(null, "logistics", "logistics", 712670037);
$cljs$cst$511$location$$ = new $APP.$cljs$core$Keyword$$(null, "location", "location", 1815599388);
$cljs$cst$501$details$$ = new $APP.$cljs$core$Keyword$$(null, "details", "details", 1956795411);
$cljs$cst$499$subtitle$$ = new $APP.$cljs$core$Keyword$$(null, "subtitle", "subtitle", -1614524363);
$cljs$cst$509$item$$ = new $APP.$cljs$core$Keyword$$(null, "item", "item", 249373802);
$cljs$cst$487$translate$$ = new $APP.$cljs$core$Keyword$$(null, "translate", "translate", 1336199447);
$cljs$cst$508$description$$ = new $APP.$cljs$core$Keyword$$(null, "description", "description", -1428560544);
$cljs$cst$496$enabled_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "enabled?", "enabled?", -1376075057);
$cljs$cst$500$amount$$ = new $APP.$cljs$core$Keyword$$(null, "amount", "amount", 364489504);
$cljs$cst$479$footer_text$$ = new $APP.$cljs$core$Keyword$$(null, "footer-text", "footer-text", 782346468);
$cljs$cst$481$root_margin$$ = new $APP.$cljs$core$Keyword$$(null, "root-margin", "root-margin", -1598874814);
$cljs$cst$490$br$$ = new $APP.$cljs$core$Keyword$$(null, "br", "br", 934104792);
$cljs$cst$489$bl$$ = new $APP.$cljs$core$Keyword$$(null, "bl", "bl", 8157834);
$cljs$cst$506$set_expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "set-expanded-items", "set-expanded-items", -112840979);
$cljs$cst$502$rate$$ = new $APP.$cljs$core$Keyword$$(null, "rate", "rate", -1428659698);
$cljs$cst$517$marketing$$ = new $APP.$cljs$core$Keyword$$(null, "marketing", "marketing", 2054879774);
$cljs$cst$513$la_prod$$ = new $APP.$cljs$core$Keyword$$(null, "la-prod", "la-prod", 1444492244);
$cljs$cst$491$center$$ = new $APP.$cljs$core$Keyword$$(null, "center", "center", -748944368);
$cljs$cst$495$slides$$ = new $APP.$cljs$core$Keyword$$(null, "slides", "slides", -1933049910);
$cljs$cst$478$full_text$$ = new $APP.$cljs$core$Keyword$$(null, "full-text", "full-text", 1432444182);
$cljs$cst$504$cost_data$$ = new $APP.$cljs$core$Keyword$$(null, "cost-data", "cost-data", -1991336764);
$cljs$cst$485$origin$$ = new $APP.$cljs$core$Keyword$$(null, "origin", "origin", 1037372088);
$cljs$cst$474$eyebrow$$ = new $APP.$cljs$core$Keyword$$(null, "eyebrow", "eyebrow", 497521636);
$cljs$cst$515$opening$$ = new $APP.$cljs$core$Keyword$$(null, "opening", "opening", 450993708);
$cljs$cst$520$anchor$$ = new $APP.$cljs$core$Keyword$$(null, "anchor", "anchor", 1549638489);
$cljs$cst$480$threshold$$ = new $APP.$cljs$core$Keyword$$(null, "threshold", "threshold", 204221583);
$cljs$cst$512$admin$$ = new $APP.$cljs$core$Keyword$$(null, "admin", "admin", -1239101627);
$cljs$cst$484$tl$$ = new $APP.$cljs$core$Keyword$$(null, "tl", "tl", -35265210);
$cljs$cst$488$tr$$ = new $APP.$cljs$core$Keyword$$(null, "tr", "tr", -1424774646);
$cljs$cst$498$loop$$ = new $APP.$cljs$core$Keyword$$(null, "loop", "loop", -395552849);
$cljs$cst$518$publication$$ = new $APP.$cljs$core$Keyword$$(null, "publication", "publication", -1089697399);
$cljs$cst$486$pos$$ = new $APP.$cljs$core$Keyword$$(null, "pos", "pos", -864607220);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("budget-view");
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$section_block$section_block$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$section_block$section_block$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$section_block$section_block$$, "amp.components.elements.budget.section-block/section-block"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$expandable_text_area$expandable_text_area$$, "(hooks/use-state false)", null, null) : (void 0).call(null, $amp$components$elements$expandable_text_area$expandable_text_area$$, 
"(hooks/use-state false)", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$expandable_text_area$expandable_text_area$$, "amp.components.elements.expandable-text-area/expandable-text-area"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$expandable_text_area$expandable_text_area_2$$, "(hooks/use-state false)", null, null) : (void 0).call(null, $amp$components$elements$expandable_text_area$expandable_text_area_2$$, 
"(hooks/use-state false)", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$expandable_text_area$expandable_text_area_2$$, "amp.components.elements.expandable-text-area/expandable-text-area-2"));
var $module$node_modules$embla_carousel_react$cjs$embla_carousel_react_cjs$$ = $APP.$shadow$js$require$$(58);
var $module$node_modules$embla_carousel_autoplay$cjs$embla_carousel_autoplay_cjs$$ = $APP.$shadow$js$require$$(59);
var $amp$components$ui$overlays$position_configs$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$cljs$cst$484$tl$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [0, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$485$origin$$, "origin-top-left", $cljs$cst$486$pos$$, "top-0 left-0", $cljs$cst$487$translate$$, ""], null), 90, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$485$origin$$, "origin-top-left", $cljs$cst$486$pos$$, "top-0 left-0", $cljs$cst$487$translate$$, 
"translateY(-100%)"], null), -90, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$485$origin$$, "origin-top-left", $cljs$cst$486$pos$$, "top-0 left-0", $cljs$cst$487$translate$$, "translateX(-100%)"], null)], null), $cljs$cst$488$tr$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [0, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$485$origin$$, "origin-top-right", $cljs$cst$486$pos$$, "top-0 right-0", $cljs$cst$487$translate$$, ""], null), 90, new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$cljs$cst$485$origin$$, "origin-top-right", $cljs$cst$486$pos$$, "top-0 right-0", $cljs$cst$487$translate$$, "translateX(100%)"], null), -90, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$485$origin$$, "origin-top-right", $cljs$cst$486$pos$$, "top-0 right-0", $cljs$cst$487$translate$$, "translateY(-100%)"], null)], null), $cljs$cst$489$bl$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [0, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$485$origin$$, "origin-bottom-left", 
$cljs$cst$486$pos$$, "bottom-0 left-0", $cljs$cst$487$translate$$, ""], null), 90, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$485$origin$$, "origin-bottom-left", $cljs$cst$486$pos$$, "bottom-0 left-0", $cljs$cst$487$translate$$, "translateX(-100%)"], null), -90, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$485$origin$$, "origin-bottom-left", $cljs$cst$486$pos$$, "bottom-0 left-0", $cljs$cst$487$translate$$, "translateY(100%)"], null)], null), $cljs$cst$490$br$$, 
new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [0, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$485$origin$$, "origin-bottom-right", $cljs$cst$486$pos$$, "bottom-0 right-0", $cljs$cst$487$translate$$, ""], null), 90, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$485$origin$$, "origin-bottom-right", $cljs$cst$486$pos$$, "bottom-0 right-0", $cljs$cst$487$translate$$, "translateY(100%)"], null), -90, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$485$origin$$, 
"origin-bottom-right", $cljs$cst$486$pos$$, "bottom-0 right-0", $cljs$cst$487$translate$$, "translateX(100%)"], null)], null), $cljs$cst$491$center$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [0, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$485$origin$$, "origin-center", $cljs$cst$486$pos$$, "top-1/2 left-1/2", $cljs$cst$487$translate$$, "translate(-50%, -50%)"], null), 90, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$485$origin$$, "origin-center", $cljs$cst$486$pos$$, 
"top-1/2 left-1/2", $cljs$cst$487$translate$$, "translate(-50%, -50%)"], null), -90, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$485$origin$$, "origin-center", $cljs$cst$486$pos$$, "top-1/2 left-1/2", $cljs$cst$487$translate$$, "translate(-50%, -50%)"], null)], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$ui$overlays$caption_overlay$$, "", null, null) : (void 0).call(null, $amp$components$ui$overlays$caption_overlay$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$ui$overlays$caption_overlay$$, 
"amp.components.ui.overlays/caption-overlay"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$media$lazy_image_gallery$lazy_image_gallery$$, '(use-embla-carousel (clj-\x3ejs {:loop true}) (clj-\x3ejs [(auto-play auto-play-opts)]))(hooks/use-memo [embla-api] (when embla-api (-\x3e embla-api (.plugins) (.-autoplay))))(hooks/use-state 1)(hooks/use-callback [embla-api] (when embla-api (.-scrollNext embla-api)))(hooks/use-callback [embla-api] (when embla-api (.-scrollPrev embla-api)))(hooks/use-callback [embla-api] (fn [_e] (set-current-index! (progress-\x3eindex total-slides ((.-scrollProgress embla-api))))))(hooks/use-layout-effect [autoplay enabled?] (when autoplay (if enabled? (.play autoplay) (.stop autoplay))))(hooks/use-effect [embla-api on-scroll-handler] (when embla-api (js/console.log embla-api) (embla-api.on "scroll" on-scroll-handler)))', 
null, null) : (void 0).call(null, $amp$components$media$lazy_image_gallery$lazy_image_gallery$$, '(use-embla-carousel (clj-\x3ejs {:loop true}) (clj-\x3ejs [(auto-play auto-play-opts)]))(hooks/use-memo [embla-api] (when embla-api (-\x3e embla-api (.plugins) (.-autoplay))))(hooks/use-state 1)(hooks/use-callback [embla-api] (when embla-api (.-scrollNext embla-api)))(hooks/use-callback [embla-api] (when embla-api (.-scrollPrev embla-api)))(hooks/use-callback [embla-api] (fn [_e] (set-current-index! (progress-\x3eindex total-slides ((.-scrollProgress embla-api))))))(hooks/use-layout-effect [autoplay enabled?] (when autoplay (if enabled? (.play autoplay) (.stop autoplay))))(hooks/use-effect [embla-api on-scroll-handler] (when embla-api (js/console.log embla-api) (embla-api.on "scroll" on-scroll-handler)))', 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$media$lazy_image_gallery$lazy_image_gallery$$, "amp.components.media.lazy-image-gallery/lazy-image-gallery"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$about$preview$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$about$preview$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$elements$budget$about$preview$$, "amp.components.elements.budget.about/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$about$details$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$about$details$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$elements$budget$about$details$$, "amp.components.elements.budget.about/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$about$about$$, '(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx {:end "bottom"})', null, null) : (void 0).call(null, 
$amp$components$elements$budget$about$about$$, '(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$about$about$$, "amp.components.elements.budget.about/about"));
var $amp$components$elements$budget$committe$committee_members$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$182$name$$, "Archbishop Derderian", $APP.$cljs$cst$468$role$$, "Committee Lead", $APP.$cljs$cst$433$img_src$$, "https://atd-722658831.imgix.net/committee/hovnan.png", $APP.$cljs$cst$436$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$182$name$$, "Tony Shafrazi", $APP.$cljs$cst$468$role$$, "Chief Curator", $APP.$cljs$cst$433$img_src$$, "https://atd-722658831.imgix.net/committee/tony.png", $APP.$cljs$cst$436$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$182$name$$, "Tina Chakarian", $APP.$cljs$cst$468$role$$, "Curator", $APP.$cljs$cst$433$img_src$$, "https://atd-722658831.imgix.net/committee/tina.png", $APP.$cljs$cst$436$credit$$, "Courtesy of the Committee"], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$182$name$$, "Zadik Zadikian", $APP.$cljs$cst$468$role$$, "Artist", $APP.$cljs$cst$433$img_src$$, "https://atd-722658831.imgix.net/committee/zadik.png", $APP.$cljs$cst$436$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$182$name$$, "Rafi Ourfalian", $APP.$cljs$cst$468$role$$, "Legal Advisor", $APP.$cljs$cst$433$img_src$$, "https://atd-722658831.imgix.net/committee/rafi.png", 
$APP.$cljs$cst$436$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$182$name$$, "Khachik Khudikyan", $APP.$cljs$cst$468$role$$, "Logistics Advisor", $APP.$cljs$cst$433$img_src$$, "https://atd-722658831.imgix.net/committee/chris_car_2.jpg", $APP.$cljs$cst$436$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$182$name$$, "Andranik Torosyan", $APP.$cljs$cst$468$role$$, "Financial Advisor", 
$APP.$cljs$cst$433$img_src$$, "https://atd-722658831.imgix.net/committee/andy.png", $APP.$cljs$cst$436$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$182$name$$, "Aram Alajajian", $APP.$cljs$cst$468$role$$, "Architect", $APP.$cljs$cst$433$img_src$$, "https://atd-722658831.imgix.net/committee/aram.png", $APP.$cljs$cst$436$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$182$name$$, 
"Vik Hovsepian", $APP.$cljs$cst$468$role$$, "Committee Member", $APP.$cljs$cst$436$credit$$, "Courtesy of the Committee", $APP.$cljs$cst$433$img_src$$, "https://atd-722658831.imgix.net/committee/vic.png"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$committe$preview$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$committe$preview$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$committe$preview$$, "amp.components.elements.budget.committe/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$committe$details$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$committe$details$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$committe$details$$, "amp.components.elements.budget.committe/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$committe$committee_member_card$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$committe$committee_member_card$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$committe$committee_member_card$$, "amp.components.elements.budget.committe/committee-member-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$committe$committee_gallery$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$committe$committee_gallery$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$committe$committee_gallery$$, "amp.components.elements.budget.committe/committee-gallery"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$committe$committee$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$committe$committee$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$committe$committee$$, "amp.components.elements.budget.committe/committee"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$budget_table$total_section$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$budget_table$total_section$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$budget_table$total_section$$, "amp.components.elements.budget.budget-table/total-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$budget_table$detail_line_item$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$budget_table$detail_line_item$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$budget_table$detail_line_item$$, "amp.components.elements.budget.budget-table/detail-line-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$budget_table$section_line_item$$, '(hooks/use-ref (str "section-" idx))(use-scroll-to-ref)', null, null) : (void 0).call(null, 
$amp$components$elements$budget$budget_table$section_line_item$$, '(hooks/use-ref (str "section-" idx))(use-scroll-to-ref)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$budget_table$section_line_item$$, "amp.components.elements.budget.budget-table/section-line-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$budget_table$budget_table$$, "(hooks/use-state #{})", null, null) : (void 0).call(null, $amp$components$elements$budget$budget_table$budget_table$$, 
"(hooks/use-state #{})", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$budget_table$budget_table$$, "amp.components.elements.budget.budget-table/budget-table"));
var $amp$components$elements$budget$cost_breakdown$cost_data$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$191$id$$, $cljs$cst$511$location$$, $APP.$cljs$cst$373$title$$, "1. Location Cost", $cljs$cst$508$description$$, "Secures and operates the Venice exhibition venue: exclusive rental, public-facing staffing, required approvals, insurance coverage, minor architectural adjustments, lighting, and statutory taxes—ensuring the Pavilion is compliant, safe, and fully exhibition-ready during peak Biennale demand.", 
$cljs$cst$501$details$$, new $APP.$cljs$core$PersistentVector$$(null, 11, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Base rent", $cljs$cst$500$amount$$, 195000, $cljs$cst$508$description$$, "Base rental fee for Tesa 41, Giardino 25, and the Outpost for the full Biennale period. This reflects Biennale-season demand, limited availability of compliant venues, and excludes all staffing, permits, utilities, and operational services."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Security staff", $cljs$cst$500$amount$$, 30000, $cljs$cst$508$description$$, "Licensed security personnel required during public hours and special events, with increased staffing during opening week and peak visitor periods mandated by venue and municipal regulations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Mediator staff", $cljs$cst$500$amount$$, 30000, $cljs$cst$508$description$$, 
"Trained gallery mediators providing visitor guidance, crowd flow management, and artwork oversight throughout the exhibition’s daily operations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Cleaning", $cljs$cst$500$amount$$, 8500, $cljs$cst$508$description$$, "Weekly professional cleaning and periodic deep cleans required for a high-traffic international exhibition, with elevated frequency during opening week."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$373$title$$, "Utilities", $cljs$cst$500$amount$$, 6000, $cljs$cst$508$description$$, "Electricity, water, and climate control costs for continuous public operation during the Biennale season."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Permits", $cljs$cst$500$amount$$, 12000, $cljs$cst$508$description$$, "Municipal and Biennale permits required for exhibition use, public access, and operational compliance in Venice."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$373$title$$, "Fire cert", $cljs$cst$500$amount$$, 4250, $cljs$cst$508$description$$, "Mandatory fire-safety certification, inspections, and documentation required by Venetian authorities."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Liability ins.", $cljs$cst$500$amount$$, 3000, $cljs$cst$508$description$$, "Public liability insurance covering visitors, staff, and third parties for the duration of the exhibition."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$373$title$$, "Build-outs", $cljs$cst$500$amount$$, 15E3, $cljs$cst$508$description$$, "Minor architectural adjustments and protective build-outs necessary to adapt the venue to exhibition and safety standards."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Lighting", $cljs$cst$500$amount$$, 9500, $cljs$cst$508$description$$, "Supplemental exhibition lighting equipment and installation tailored to the work and existing architectural conditions."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Signage tax", $cljs$cst$500$amount$$, 2E3, $cljs$cst$508$description$$, "Municipal tax associated with exterior and wayfinding signage during the Biennale."], null)], null), $cljs$cst$503$tax$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$502$rate$$, .22, $cljs$cst$510$label$$, "VAT 22%"], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$id$$, $cljs$cst$512$admin$$, 
$APP.$cljs$cst$373$title$$, "2. Admin", $cljs$cst$508$description$$, "Leadership and project management supporting curatorial direction, artist oversight, coordination, compliance, and travel—ensuring continuity across pre-production, opening, and the full Biennale cycle.", $cljs$cst$501$details$$, new $APP.$cljs$core$PersistentVector$$(null, 12, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Admin LA", $cljs$cst$500$amount$$, 
12500, $cljs$cst$508$description$$, "Los Angeles–based administrative support for production, contracting, scheduling, and financial coordination."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Admin Venice", $cljs$cst$500$amount$$, 25E3, $cljs$cst$508$description$$, "On-the-ground administrative coordination in Venice during installation, opening, and peak Biennale periods."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, 
"Curatorial/Artist", $cljs$cst$500$amount$$, 15E3, $cljs$cst$508$description$$, "Curatorial and artist"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Engineer", $cljs$cst$500$amount$$, 6500, $cljs$cst$508$description$$, "Structural and technical consultation related to installation safety and load considerations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Legal", $cljs$cst$500$amount$$, 7500, $cljs$cst$508$description$$, 
"Contract review, compliance, and legal oversight related to international exhibition operations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Accounting", $cljs$cst$500$amount$$, 7500, $cljs$cst$508$description$$, "Professional accounting services ensuring transparent financial reporting and compliance."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Bookkeeping", $cljs$cst$500$amount$$, 2950, $cljs$cst$508$description$$, 
"Ongoing transaction tracking and financial record maintenance."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "HR/Payroll", $cljs$cst$500$amount$$, 3E3, $cljs$cst$508$description$$, "Payroll processing and HR compliance for international and local staff."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Software/tools", $cljs$cst$500$amount$$, 1500, $cljs$cst$508$description$$, "Specialized software subscriptions and tools required for project management and coordination."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Flights/local", $cljs$cst$500$amount$$, 17500, $cljs$cst$508$description$$, "International and regional travel for core team during installation, opening week, and critical milestones."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Lodging/per diem", $cljs$cst$500$amount$$, 32E3, $cljs$cst$508$description$$, "Accommodation and daily expenses during high-demand Biennale periods when rates are elevated."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Dev \x26 scouting", $cljs$cst$500$amount$$, 15E3, $cljs$cst$508$description$$, "Early-stage site visits, venue scouting, and development travel necessary prior to final commitments."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$id$$, $cljs$cst$513$la_prod$$, $APP.$cljs$cst$373$title$$, "3. LA Production", $cljs$cst$508$description$$, "Initial Los Angeles production: materials, casting infrastructure, gilding, studio overhead, and skilled labor—ensuring museum-grade fabrication prior to shipment.", 
$cljs$cst$501$details$$, new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Foam core", $cljs$cst$500$amount$$, 15E3, $cljs$cst$508$description$$, "Lightweight internal cores used to achieve structural integrity while minimizing shipping weight."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Pigments", $cljs$cst$500$amount$$, 17500, 
$cljs$cst$508$description$$, "High-quality pigments integrated into plaster at casting, ensuring color saturation and longevity."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Plaster", $cljs$cst$500$amount$$, 12500, $cljs$cst$508$description$$, "Primary casting material for all sculptural units."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Acrylic", $cljs$cst$500$amount$$, 2500, $cljs$cst$508$description$$, "Binders and surface materials used in finishing and protection."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Gold leaf", $cljs$cst$500$amount$$, 28E3, $cljs$cst$508$description$$, "Genuine 24-karat gold leaf for select units, sourced for consistency and archival quality. 20 packs of 500 leaf gold."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Gold sizing", $cljs$cst$500$amount$$, 3E3, $cljs$cst$508$description$$, "Adhesives and preparation materials required for professional gilding."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Equipment", $cljs$cst$500$amount$$, 18500, $cljs$cst$508$description$$, "3D printer, casting tables, studio tools, and studio equipment required for production."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Mold \x26 Fab", $cljs$cst$500$amount$$, 6500, $cljs$cst$508$description$$, "Custom molds and fabrication aids for repeatable precision. CNC mother units."], null), 
new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Expendables", $cljs$cst$500$amount$$, 2950, $cljs$cst$508$description$$, "Consumable supplies used during casting and finishing."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Glass", $cljs$cst$500$amount$$, 2500, $cljs$cst$508$description$$, "Flat glass surfaces used to achieve smooth casting planes."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, 
"Studio rent (LA)", $cljs$cst$500$amount$$, 17500, $cljs$cst$508$description$$, "LA studio rent for fabrication LA portion of fabrication prior to shipment. 4 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Utilities/ins.", $cljs$cst$500$amount$$, 7500, $cljs$cst$508$description$$, "Utilities and insurance coverage for the LA production facility."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Gilder", $cljs$cst$500$amount$$, 
7500, $cljs$cst$508$description$$, "1 part-time gilding professional for gilding several units."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Casters", $cljs$cst$500$amount$$, 4E4, $cljs$cst$508$description$$, "2 full-time casting professionals for casting and finishing of initial units."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Assistants", $cljs$cst$500$amount$$, 21500, $cljs$cst$508$description$$, "2 studio assistants supporting daily production and quality control."], 
null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$id$$, $cljs$cst$514$logistics$$, $APP.$cljs$cst$373$title$$, "4. Logistics", $cljs$cst$508$description$$, "International and local transport under Biennale conditions: crating, freight, port handling, lagoon transport, installation labor, storage, and reverse logistics.", $cljs$cst$501$details$$, new $APP.$cljs$core$PersistentVector$$(null, 20, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$373$title$$, "Crates", $cljs$cst$500$amount$$, 15E3, $cljs$cst$508$description$$, "15 - 20 pre-fab collapsible crates designed for international fine-art transport."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Supplies", $cljs$cst$500$amount$$, 11800, $cljs$cst$508$description$$, "Packing materials, peanuts, void fill, required to protect works during shipment."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, 
"Packers", $cljs$cst$500$amount$$, 7500, $cljs$cst$508$description$$, "5 professional art handlers for packing at origin. 5 days of packing."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Ship LA–Venice", $cljs$cst$500$amount$$, 35E3, $cljs$cst$508$description$$, "International freight from Los Angeles to Venice during peak shipping season."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Ship Venice–LA", $cljs$cst$500$amount$$, 
35E3, $cljs$cst$508$description$$, "Return shipment following deinstallation."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Insurance", $cljs$cst$500$amount$$, 12500, $cljs$cst$508$description$$, "Fine-art transit insurance covering international and local movement."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Installers", $cljs$cst$500$amount$$, 8500, $cljs$cst$508$description$$, "Skilled installation labor in Venice."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Uninstallers", $cljs$cst$500$amount$$, 12500, $cljs$cst$508$description$$, "Deinstallation labor at exhibition close."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Port handling", $cljs$cst$500$amount$$, 3E3, $cljs$cst$508$description$$, "Port fees and handling charges upon arrival."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, 
"Barge (inbound)", $cljs$cst$500$amount$$, 3500, $cljs$cst$508$description$$, "Lagoon barge transport from port to Venice."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Truck (inbound)", $cljs$cst$500$amount$$, 1500, $cljs$cst$508$description$$, "Short-distance trucking where canal access is limited."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Barge (to site)", $cljs$cst$500$amount$$, 3500, $cljs$cst$508$description$$, 
"Final barge transport to exhibition site."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Forklift", $cljs$cst$500$amount$$, 1500, $cljs$cst$508$description$$, "Mechanical handling for heavy crates."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Handling crew", $cljs$cst$500$amount$$, 1E3, $cljs$cst$508$description$$, "Additional labor for on-site maneuvering."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$373$title$$, "Short storage", $cljs$cst$500$amount$$, 1500, $cljs$cst$508$description$$, "Temporary holding during installation scheduling."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Crate storage", $cljs$cst$500$amount$$, 2500, $cljs$cst$508$description$$, "Secure storage of empty crates during exhibition."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Waste removal", $cljs$cst$500$amount$$, 
1E3, $cljs$cst$508$description$$, "Removal of packing debris under Venetian regulations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Barge (return)", $cljs$cst$500$amount$$, 3500, $cljs$cst$508$description$$, "Lagoon transport for return shipment."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Truck (return)", $cljs$cst$500$amount$$, 1500, $cljs$cst$508$description$$, "Return trucking as required."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$373$title$$, "Port (return)", $cljs$cst$500$amount$$, 3E3, $cljs$cst$508$description$$, "Port handling fees for outbound shipment."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$id$$, $cljs$cst$515$opening$$, $APP.$cljs$cst$373$title$$, "5. Opening Week", $cljs$cst$508$description$$, "Opening reception and first public visibility of the Pavilion: hospitality, staffing, security, rentals, technical support, press and VIP coordination—executed during the Biennale’s most compressed and expensive period.", 
$cljs$cst$501$details$$, new $APP.$cljs$core$PersistentVector$$(null, 17, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Catering food", $cljs$cst$500$amount$$, 8500, $cljs$cst$508$description$$, "Food service for opening events, 150-200 headcount, scaled for international attendance and peak Biennale demand."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Catering drinks", 
$cljs$cst$500$amount$$, 2500, $cljs$cst$508$description$$, "Beverage service for receptions and VIP previews. 150-200 headcount."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Catering staff", $cljs$cst$500$amount$$, 3E3, $cljs$cst$508$description$$, "Professional service staff required for licensed event catering. Cost for catering staff is increased during Biennale opening week."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, 
"Event coord.", $cljs$cst$500$amount$$, 3500, $cljs$cst$508$description$$, "On-site event coordination managing vendors, schedules, and protocol."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Security", $cljs$cst$500$amount$$, 1500, $cljs$cst$508$description$$, "Supplemental security during high-density opening events."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Rentals", $cljs$cst$500$amount$$, 3E3, $cljs$cst$508$description$$, 
"Furniture, tables, and other event equipment rentals."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "A/V \x26 tech", $cljs$cst$500$amount$$, 2E3, $cljs$cst$508$description$$, "Temporary audio-visual support for speeches and presentations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Invitations", $cljs$cst$500$amount$$, 1500, $cljs$cst$508$description$$, "Design and printing of formal invitations for VIP and press."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "VIP/press staff", $cljs$cst$500$amount$$, 3E3, $cljs$cst$508$description$$, "Dedicated personnel supporting accredited guests and journalists during the first several weeks."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "VIP hospitality", $cljs$cst$500$amount$$, 3500, $cljs$cst$508$description$$, "Hospitality expenses aligned with diplomatic and institutional expectations."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "VIP liaison", $cljs$cst$500$amount$$, 2500, $cljs$cst$508$description$$, "Protocol-aware liaison coordinating VIP schedules and access."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Press packets", $cljs$cst$500$amount$$, 1E3, $cljs$cst$508$description$$, "Printed materials distributed to press during previews."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$373$title$$, "Press A/V", $cljs$cst$500$amount$$, 1E3, $cljs$cst$508$description$$, "Playback and display equipment for press briefings."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Interpreter", $cljs$cst$500$amount$$, 1500, $cljs$cst$508$description$$, "Professional interpretation for multilingual audiences."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Water taxis", $cljs$cst$500$amount$$, 
3500, $cljs$cst$508$description$$, "Water taxi transport during peak congestion when rates are elevated."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Public talks", $cljs$cst$500$amount$$, 3E3, $cljs$cst$508$description$$, "Honoraria and costs associated with scheduled public discussions."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Talk staff", $cljs$cst$500$amount$$, 1500, $cljs$cst$508$description$$, "Support staff for audience management during talks."], 
null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$id$$, $cljs$cst$516$the_studio$$, $APP.$cljs$cst$373$title$$, "6. THE STUDIO", $cljs$cst$508$description$$, "Seven-month operation of THE STUDIO on-site: staffing, materials, equipment, lodging, and daily maintenance—supporting continuous making throughout the Biennale.", $cljs$cst$501$details$$, new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$373$title$$, "Full-time asst.", $cljs$cst$500$amount$$, 85E3, $cljs$cst$508$description$$, "3 full-time core studio staff maintaining daily fabrication and reconfiguration. 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Part-time asst.", $cljs$cst$500$amount$$, 45E3, $cljs$cst$508$description$$, "3 part-time supplemental labor scaled to visitor volume and programming peaks. 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$373$title$$, "Temp staff", $cljs$cst$500$amount$$, 18500, $cljs$cst$508$description$$, "Short-term staffing during opening week and special events."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Gilders", $cljs$cst$500$amount$$, 15E3, $cljs$cst$508$description$$, "Specialist gilder engaged on an as-needed basis on site."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Local materials", $cljs$cst$500$amount$$, 
9500, $cljs$cst$508$description$$, "Venice-sourced materials to avoid repeated international shipping."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Expendables", $cljs$cst$500$amount$$, 2500, $cljs$cst$508$description$$, "Consumables required for ongoing studio activity."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Local equip.", $cljs$cst$500$amount$$, 9500, $cljs$cst$508$description$$, "Rental or purchase of equipment impractical to ship internationally."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Lodging/per diem", $cljs$cst$500$amount$$, 55E3, $cljs$cst$508$description$$, "Accommodation and expenses over seven months. Zadik, Aram. Roughly 3750 per person per month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Rubbish", $cljs$cst$500$amount$$, 3500, $cljs$cst$508$description$$, "Regular waste removal under municipal regulations."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$191$id$$, $cljs$cst$517$marketing$$, $APP.$cljs$cst$373$title$$, "7. Marketing", $cljs$cst$508$description$$, "Visibility and communications: branding, website, PR, advertising, and outdoor placements—positioning the Pavilion within the global Biennale discourse.", $cljs$cst$501$details$$, new $APP.$cljs$core$PersistentVector$$(null, 16, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Visual Identity", 
$cljs$cst$500$amount$$, 15E3, $cljs$cst$508$description$$, "Design of a cohesive visual system across all platforms."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Press kit", $cljs$cst$500$amount$$, 8500, $cljs$cst$508$description$$, "Production of comprehensive press materials for international media."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Website", $cljs$cst$500$amount$$, 7500, $cljs$cst$508$description$$, 
"Design, development, and hosting of the Pavilion website. The website will be a key aspect of the project."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "OOH design", $cljs$cst$500$amount$$, 4500, $cljs$cst$508$description$$, "Design for outdoor advertising formats."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Copywriting", $cljs$cst$500$amount$$, 1500, $cljs$cst$508$description$$, "Editorial copy supporting marketing and donor outreach."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "PR writing", $cljs$cst$500$amount$$, 4500, $cljs$cst$508$description$$, "Press releases and feature pitching."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Totem OOH", $cljs$cst$500$amount$$, 1E4, $cljs$cst$508$description$$, "High-visibility outdoor placements during Biennale peak."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, 
"Poster print", $cljs$cst$500$amount$$, 7500, $cljs$cst$508$description$$, "Printing of large-format posters."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "City posters", $cljs$cst$500$amount$$, 3500, $cljs$cst$508$description$$, "Smaller-scale poster distribution across Venice."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Social ad spend", $cljs$cst$500$amount$$, 6500, $cljs$cst$508$description$$, "Targeted social media promotion."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Campaign mgmt", $cljs$cst$500$amount$$, 15E3, $cljs$cst$508$description$$, "Ongoing campaign coordination and optimization."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Digital ads", $cljs$cst$500$amount$$, 8500, $cljs$cst$508$description$$, "Online advertising placements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Print ads", 
$cljs$cst$500$amount$$, 12500, $cljs$cst$508$description$$, "Print placements in international art publications."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "PR pre-open", $cljs$cst$500$amount$$, 12500, $cljs$cst$508$description$$, "Intensive PR outreach leading into opening week."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "PR ongoing", $cljs$cst$500$amount$$, 12500, $cljs$cst$508$description$$, "Sustained PR activity throughout the Biennale run."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Social clips", $cljs$cst$500$amount$$, 7500, $cljs$cst$508$description$$, "Short-form video deliverables for social platforms."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$id$$, $cljs$cst$518$publication$$, $APP.$cljs$cst$373$title$$, "8. Publication", $cljs$cst$508$description$$, "Catalogue and printed materials: commissioned texts, design, editing, and printing—ensuring long-term scholarly presence.", 
$cljs$cst$501$details$$, new $APP.$cljs$core$PersistentVector$$(null, 10, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Curatorial essay", $cljs$cst$500$amount$$, 2500, $cljs$cst$508$description$$, "Primary curatorial text anchoring the publication."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Commissioned essays", $cljs$cst$500$amount$$, 7500, $cljs$cst$508$description$$, 
"Texts by invited writers and scholars."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Wall texts", $cljs$cst$500$amount$$, 1500, $cljs$cst$508$description$$, "Exhibition texts adapted for print."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Catalog design", $cljs$cst$500$amount$$, 14500, $cljs$cst$508$description$$, "Graphic design and layout of the catalogue."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$373$title$$, "Edit \x26 layout", $cljs$cst$500$amount$$, 5E3, $cljs$cst$508$description$$, "Professional editing and final layout preparation."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Catalog print", $cljs$cst$500$amount$$, 25E3, $cljs$cst$508$description$$, "Printing of a limited-run, museum-quality catalogue. 250 Copies."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Tote design", $cljs$cst$500$amount$$, 
3500, $cljs$cst$508$description$$, "Design of branded tote bags."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Tote print", $cljs$cst$500$amount$$, 2500, $cljs$cst$508$description$$, "Production of tote bags."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Stationery design", $cljs$cst$500$amount$$, 3500, $cljs$cst$508$description$$, "Design of printed stationery materials for handouts and press."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$373$title$$, "Stationery print", $cljs$cst$500$amount$$, 2500, $cljs$cst$508$description$$, "Printing of stationery materials for handouts and press."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$id$$, $cljs$cst$519$documentation$$, $APP.$cljs$cst$373$title$$, "9. Documentation", $cljs$cst$508$description$$, "Permanent visual record: film, sound, photography, editing, and social deliverables—supporting press, scholarship, and legacy.", 
$cljs$cst$501$details$$, new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Film equip rentals", $cljs$cst$500$amount$$, 12500, $cljs$cst$508$description$$, "Rental of cinema-grade cameras, lenses, and lighting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Film crew", $cljs$cst$500$amount$$, 18500, $cljs$cst$508$description$$, 
"Professional crew covering installation, opening, and walkthroughs."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Sound crew", $cljs$cst$500$amount$$, 4500, $cljs$cst$508$description$$, "Location sound recording for film documentation."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Install photos", $cljs$cst$500$amount$$, 2500, $cljs$cst$508$description$$, "High-resolution photography during installation."], null), 
new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Final photos", $cljs$cst$500$amount$$, 3500, $cljs$cst$508$description$$, "Completed exhibition photography."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Event photos", $cljs$cst$500$amount$$, 1500, $cljs$cst$508$description$$, "Coverage of opening and public events."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Edit (assembly)", 
$cljs$cst$500$amount$$, 13500, $cljs$cst$508$description$$, "Initial film assembly and rough cut."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Edit (final)", $cljs$cst$500$amount$$, 5E3, $cljs$cst$508$description$$, "Final edit and color correction."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$373$title$$, "Sound mix", $cljs$cst$500$amount$$, 3500, $cljs$cst$508$description$$, "Final audio mixing and mastering."], null)], 
null)], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cost_breakdown$preview$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$cost_breakdown$preview$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cost_breakdown$preview$$, "amp.components.elements.budget.cost-breakdown/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cost_breakdown$details$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$cost_breakdown$details$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cost_breakdown$details$$, "amp.components.elements.budget.cost-breakdown/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cost_breakdown$footer$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$cost_breakdown$footer$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cost_breakdown$footer$$, "amp.components.elements.budget.cost-breakdown/footer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cost_breakdown$cost_breakdown$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$cost_breakdown$cost_breakdown$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cost_breakdown$cost_breakdown$$, "amp.components.elements.budget.cost-breakdown/cost-breakdown"));
var $amp$components$elements$budget$location_section$lazy_video$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$components$elements$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$location_section$preview$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$location_section$preview$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$location_section$preview$$, "amp.components.elements.budget.location-section/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$location_section$full_details$$, '(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)(use-touch-enabled)(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)(use-touch-enabled)(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)', 
null, null) : (void 0).call(null, $amp$components$elements$budget$location_section$full_details$$, '(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)(use-touch-enabled)(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)(use-touch-enabled)(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$location_section$full_details$$, "amp.components.elements.budget.location-section/full-details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$location_section$location_section$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$location_section$location_section$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$location_section$location_section$$, "amp.components.elements.budget.location-section/location-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$non_profit$non_profit$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$non_profit$non_profit$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$non_profit$non_profit$$, "amp.components.elements.budget.non-profit/non-profit"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$navs$back_up_nav$back_up_nav$$, '(hooks/use-ref "container-ref")(hooks/use-ref "button-ref")(use-scroll-to-top {:duration 1})(use-scroll-trigger container-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations button-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target container-ref, :on-to {:y 0, :opacity 1}, :off-to {:y -150, :opacity 0.25}, :is-on? is-active?})', 
null, null) : (void 0).call(null, $amp$components$navs$back_up_nav$back_up_nav$$, '(hooks/use-ref "container-ref")(hooks/use-ref "button-ref")(use-scroll-to-top {:duration 1})(use-scroll-trigger container-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations button-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target container-ref, :on-to {:y 0, :opacity 1}, :off-to {:y -150, :opacity 0.25}, :is-on? is-active?})', 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$navs$back_up_nav$back_up_nav$$, "amp.components.navs.back-up-nav/back-up-nav"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$press_release$preview$$, "", null, null) : (void 0).call(null, $amp$components$sections$press_release$preview$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$press_release$preview$$, "amp.components.sections.press-release/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$press_release$details$$, "", null, null) : (void 0).call(null, $amp$components$sections$press_release$details$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$press_release$details$$, "amp.components.sections.press-release/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$press_release$footer$$, "", null, null) : (void 0).call(null, $amp$components$sections$press_release$footer$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$press_release$footer$$, "amp.components.sections.press-release/footer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$press_release$press_release$$, "", null, null) : (void 0).call(null, $amp$components$sections$press_release$press_release$$, "", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$press_release$press_release$$, "amp.components.sections.press-release/press-release"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$budget_section$section_link$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $amp$components$sections$budget_section$section_link$$, 
"(use-scroll-to-id)", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$budget_section$section_link$$, "amp.components.sections.budget-section/section-link"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$budget_section$header$$, "", null, null) : (void 0).call(null, $amp$components$sections$budget_section$header$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$budget_section$header$$, "amp.components.sections.budget-section/header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$budget_section$budget_section$$, "", null, null) : (void 0).call(null, $amp$components$sections$budget_section$budget_section$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$budget_section$budget_section$$, "amp.components.sections.budget-section/budget-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$views$budget_view$budget_view$$, '(hooks/use-ref "comp-ref")(hooks/use-layout-effect [active] (if active (intro-complete-callback) (.to gsap (clojure.core/deref comp-ref) {:opacity 0, :onComplete outro-complete-callback, :duration 1})))', 
null, null) : (void 0).call(null, $APP.$amp$views$budget_view$budget_view$$, '(hooks/use-ref "comp-ref")(hooks/use-layout-effect [active] (if active (intro-complete-callback) (.to gsap (clojure.core/deref comp-ref) {:opacity 0, :onComplete outro-complete-callback, :duration 1})))', null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$views$budget_view$budget_view$$, "amp.views.budget-view/budget-view"));
$APP.$module$contents$shadow$loader_mm$$.$setLoaded$();

}).call(this);