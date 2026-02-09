(function(){
shadow$provide[46]=function(qc,Wd,V){function qa(nc,zb){const Cb=Object.keys(nc);var Ja=Object.keys(zb);if(Cb.length!==Ja.length)return!1;Ja=JSON.stringify(Object.keys(nc.breakpoints||{}));const Ia=JSON.stringify(Object.keys(zb.breakpoints||{}));return Ja!==Ia?!1:Cb.every(Oa=>{const Ma=nc[Oa];Oa=zb[Oa];return typeof Ma==="function"?`${Ma}`===`${Oa}`:Object.prototype.toString.call(Ma)!=="[object Object]"&&!Array.isArray(Ma)||Object.prototype.toString.call(Oa)!=="[object Object]"&&!Array.isArray(Oa)?
Ma===Oa:qa(Ma,Oa)})}function fb(nc){return nc.concat().sort((zb,Cb)=>zb.name>Cb.name?1:-1).map(zb=>zb.options)}V.areOptionsEqual=qa;V.arePluginsEqual=function(nc,zb){if(nc.length!==zb.length)return!1;nc=fb(nc);const Cb=fb(zb);return nc.every((Ja,Ia)=>qa(Ja,Cb[Ia]))};V.canUseDOM=function(){return!(typeof window==="undefined"||!window.document||!window.document.createElement)};V.sortAndMapPluginToOptions=fb};
shadow$provide[47]=function(qc,Wd,V){function qa(sb){return typeof sb==="boolean"}function fb(sb){return Math.abs(sb)}function nc(sb){return sb[zb(sb)]}function zb(sb){return Math.max(0,sb.length-1)}function Cb(sb,Za=0){return Array.from(Array(sb),(Sb,Gb)=>Za+Gb)}function Ja(sb,Za){return[sb,Za].reduce((Sb,Gb)=>{Object.keys(Gb).forEach(gc=>{const vc=Sb[gc],wc=Gb[gc],Ic=Object.prototype.toString.call(vc)==="[object Object]"&&Object.prototype.toString.call(wc)==="[object Object]";Sb[gc]=Ic?Ja(vc,wc):
wc});return Sb},{})}function Ia(sb,Za){return typeof Za.MouseEvent!=="undefined"&&sb instanceof Za.MouseEvent}function Oa(sb,Za){const Sb={start:function(){return 0},center:function(Gb){return(Za-Gb)/2},end:function(Gb){return Za-Gb}};return{measure:function(Gb,gc){return typeof sb==="string"?Sb[sb](Gb):sb(Za,Gb,gc)}}}function Ma(){let sb=[];const Za={add:function(Sb,Gb,gc,vc={passive:!0}){let wc;"addEventListener"in Sb?(Sb.addEventListener(Gb,gc,vc),wc=()=>Sb.removeEventListener(Gb,gc,vc)):(Sb.addListener(gc),
wc=()=>Sb.removeListener(gc));sb.push(wc);return Za},clear:function(){sb=sb.filter(Sb=>Sb())}};return Za}function Fb(sb,Za,Sb,Gb){function gc(Cc){if($c){xc||(xc=Cc,Sb(),Sb());var ed=Cc-xc;xc=Cc;for(Tc+=ed;Tc>=Ic;)Sb(),Tc-=Ic;Gb(Tc/Ic);$c&&=Za.requestAnimationFrame(gc)}}function vc(){Za.cancelAnimationFrame($c);xc=null;$c=Tc=0}const wc=Ma(),Ic=1E3/60;let xc=null,Tc=0,$c=0;return{init:function(){wc.add(sb,"visibilitychange",()=>{sb.hidden&&(xc=null,Tc=0)})},destroy:function(){vc();wc.clear()},start:function(){$c||=
Za.requestAnimationFrame(gc)},stop:vc,update:Sb,render:Gb}}function Bb(sb,Za){Za=Za==="rtl";const Sb=sb==="y",Gb=!Sb&&Za?-1:1;return{scroll:Sb?"y":"x",cross:Sb?"x":"y",startEdge:Sb?"top":Za?"right":"left",endEdge:Sb?"bottom":Za?"left":"right",measureSize:function(gc){const {height:vc,width:wc}=gc;return Sb?vc:wc},direction:function(gc){return gc*Gb}}}function ec(sb=0,Za=0){function Sb(gc){return gc<sb||gc>Za}const Gb=fb(sb-Za);return{length:Gb,max:Za,min:sb,constrain:function(gc){return Sb(gc)?gc<
sb?sb:Za:gc},reachedAny:Sb,reachedMax:function(gc){return gc>Za},reachedMin:function(gc){return gc<sb},removeOffset:function(gc){return Gb?gc-Gb*Math.ceil((gc-Za)/Gb):gc}}}function ya(sb,Za,Sb){function Gb(Tc){return Sb?fb((wc+Tc)%wc):vc(Tc)}function gc(){return ya(sb,Ic,Sb)}const {constrain:vc}=ec(0,sb),wc=sb+1;let Ic=Gb(Za);const xc={get:function(){return Ic},set:function(Tc){Ic=Gb(Tc);return xc},add:function(Tc){return gc().set(Ic+Tc)},clone:gc};return xc}function hc(sb,Za,Sb,Gb,gc,vc,wc,Ic,xc,
Tc,$c,Cc,ed,bd,kd,Ad,Dd,le,se){function ce(La){if(!Ia(La,Gb)&&La.touches.length>=2)return xf(La);var De=vc.readPoint(La),ze=vc.readPoint(La,Te);De=fb(De-ef);ze=fb(ze-Tg);if(!$d&&!Xd){if(!La.cancelable)return xf(La);$d=De>ze;if(!$d)return xf(La)}ze=vc.pointerMove(La);De>Ad&&(xg=!0);Tc.useFriction(.3).useDuration(.75);Ic.start();gc.add(Fd(ze));La.preventDefault()}function xf(La){var De=$c.byDistance(0,!1).index!==Cc.get();La=vc.pointerUp(La)*(kd?Jd:ve)[Xd?"mouse":"touch"];{var ze=Fd(La),Ee=Cc.add(Math.sign(ze)*
-1);const Mg=$c.byDistance(ze,!kd).distance;De=kd||fb(ze)<jf?Mg:Dd&&De?Mg*.5:$c.byIndex(Ee.get(),0).distance}La===0||De===0?La=0:fb(La)<=fb(De)?La=0:(ze=fb(La),Ee=fb(De),ze=fb(ze-Ee),La=fb(ze/La));ze=La;La=he-10*ze;ze=le+ze/50;Yc=$d=!1;Tf.clear();Tc.useDuration(La).useFriction(ze);xc.distance(De,!kd);Xd=!1;ed.emit("pointerUp")}function qd(La){xg&&(La.stopPropagation(),La.preventDefault(),xg=!1)}const {cross:Te,direction:Fd}=sb,Ie=["INPUT","SELECT","TEXTAREA"],yf={passive:!1},Le=Ma(),Tf=Ma(),jf=ec(50,
225).constrain(bd.measure(20)),ve={mouse:300,touch:400},Jd={mouse:500,touch:600},he=kd?43:25;let kf=!1,ef=0,Tg=0,Yc=!1,$d=!1,xg=!1,Xd=!1;return{init:function(La){function De(ze){if(qa(se)||se(La,ze)){{const yg=Ia(ze,Gb);Xd=yg;xg=kd&&yg&&!ze.buttons&&kf;var Ee=gc.get(),Mg=wc.get();kf=fb(Ee-Mg)>=2;yg&&ze.button!==0||Ie.includes(ze.target.nodeName||"")||(Yc=!0,vc.pointerDown(ze),Tc.useFriction(0).useDuration(0),gc.set(wc),Ee=Xd?Sb:Za,Tf.add(Ee,"touchmove",ce,yf).add(Ee,"touchend",xf).add(Ee,"mousemove",
ce,yf).add(Ee,"mouseup",xf),ef=vc.readPoint(ze),Tg=vc.readPoint(ze,Te),ed.emit("pointerDown"))}}}se&&Le.add(Za,"dragstart",ze=>ze.preventDefault(),yf).add(Za,"touchmove",()=>{},yf).add(Za,"touchend",()=>{}).add(Za,"touchstart",De).add(Za,"mousedown",De).add(Za,"touchcancel",xf).add(Za,"contextmenu",xf).add(Za,"click",qd,!0)},destroy:function(){Le.clear();Tf.clear()},pointerDown:function(){return Yc}}}function gb(sb,Za){function Sb(vc,wc){wc=`client${(wc||sb.scroll)==="x"?"X":"Y"}`;return(Ia(vc,Za)?
vc:vc.touches[0])[wc]}let Gb,gc;return{pointerDown:function(vc){gc=Gb=vc;return Sb(vc)},pointerMove:function(vc){const wc=Sb(vc)-Sb(gc),Ic=vc.timeStamp-Gb.timeStamp>170;gc=vc;Ic&&(Gb=vc);return wc},pointerUp:function(vc){if(!Gb||!gc)return 0;var wc=Sb(gc)-Sb(Gb);const Ic=vc.timeStamp-Gb.timeStamp;vc=vc.timeStamp-gc.timeStamp>170;wc/=Ic;return Ic&&!vc&&fb(wc)>.1?wc:0},readPoint:Sb}}function xb(){return{measure:function(sb){const {offsetTop:Za,offsetLeft:Sb,offsetWidth:Gb,offsetHeight:gc}=sb;return{top:Za,
right:Sb+Gb,bottom:Za+gc,left:Sb,width:Gb,height:gc}}}}function Na(sb){return{measure:function(Za){return Za/100*sb}}}function $b(sb,Za,Sb,Gb,gc,vc,wc){function Ic(bd){return gc.measureSize(wc.measure(bd))}const xc=[sb].concat(Gb);let Tc,$c,Cc=[],ed=!1;return{init:function(bd){vc&&($c=Ic(sb),Cc=Gb.map(Ic),Tc=new ResizeObserver(kd=>{if(qa(vc)||vc(bd,kd))a:for(const Dd of kd){if(ed)break a;var Ad=Dd.target===sb;const le=Gb.indexOf(Dd.target);kd=Ad?$c:Cc[le];Ad=Ic(Ad?sb:Gb[le]);if(fb(Ad-kd)>=.5){bd.reInit();
Za.emit("resize");break}}}),Sb.requestAnimationFrame(()=>{xc.forEach(kd=>Tc.observe(kd))}))},destroy:function(){ed=!0;Tc&&Tc.disconnect()}}}function Hb(sb,Za,Sb,Gb,gc,vc){function wc(Ad){$c=Ad;return kd}function Ic(Ad){Cc=Ad;return kd}let xc=0,Tc=0,$c=gc,Cc=vc,ed=sb.get(),bd=0;const kd={direction:function(){return Tc},duration:function(){return $c},velocity:function(){return xc},seek:function(){var Ad=Gb.get()-sb.get();$c?(Sb.set(sb),xc+=Ad/$c,xc*=Cc,ed+=xc,sb.add(xc),Ad=ed-bd):(xc=0,Sb.set(Gb),sb.set(Gb));
Tc=Math.sign(Ad);bd=ed;return kd},settled:function(){const Ad=Gb.get()-Za.get();return fb(Ad)<.001},useBaseFriction:function(){return Ic(vc)},useBaseDuration:function(){return wc(gc)},useFriction:Ic,useDuration:wc};return kd}function rb(sb,Za,Sb,Gb,gc){function vc(){return!Tc&&sb.reachedAny(Sb.get())&&sb.reachedAny(Za.get())?!0:!1}const wc=gc.measure(10),Ic=gc.measure(50),xc=ec(.1,.99);let Tc=!1;return{shouldConstrain:vc,constrain:function($c){if(vc()){var Cc=sb.reachedMin(Za.get())?"min":"max",ed=
fb(sb[Cc]-Za.get());Cc=Sb.get()-Za.get();ed=xc.constrain(ed/Ic);Sb.subtract(Cc*ed);!$c&&fb(Cc)<wc&&(Sb.set(sb.constrain(Sb.get())),Gb.useDuration(25).useBaseFriction())}},toggleActive:function($c){Tc=!$c}}}function sc(sb,Za,Sb,Gb,gc){const vc=ec(-Za+sb,0),wc=function(){return Sb.map((xc,Tc)=>{const {min:$c,max:Cc}=vc;xc=vc.constrain(xc);const ed=!Tc;Tc=Tc===zb(Sb);return ed?Cc:Tc||fb($c-xc)<=1?$c:fb(Cc-xc)<=1?Cc:xc}).map(xc=>parseFloat(xc.toFixed(3)))}(),Ic=function(){var xc=wc[0],Tc=nc(wc);xc=wc.lastIndexOf(xc);
Tc=wc.indexOf(Tc)+1;return ec(xc,Tc)}();return{snapsContained:function(){if(Za<=sb+gc)return[vc.max];if(Gb==="keepSnaps")return wc;const {min:xc,max:Tc}=Ic;return wc.slice(xc,Tc)}(),scrollContainLimit:Ic}}function lc(sb,Za,Sb){const Gb=Za[0];sb=Sb?Gb-sb:nc(Za);return{limit:ec(sb,Gb)}}function Wc(sb,Za,Sb,Gb){function gc(Ic){return Ic===1?wc(Sb.get()):Ic===-1?vc(Sb.get()):!1}const {reachedMin:vc,reachedMax:wc}=ec(Za.min+.1,Za.max+.1);return{loop:function(Ic){if(gc(Ic)){var xc=Ic*-1*sb;Gb.forEach(Tc=>
Tc.add(xc))}}}}function ta(sb){const {max:Za,length:Sb}=sb;return{get:function(Gb){Gb-=Za;return Sb?Gb/-Sb:0}}}function Pb(sb,Za,Sb,Gb,gc){const {startEdge:vc,endEdge:wc}=sb,{groupSlides:Ic}=gc,xc=function(){return Ic(Gb).map($c=>nc($c)[wc]-$c[0][vc]).map(fb)}().map(Za.measure),Tc=function(){return Gb.map($c=>Sb[vc]-$c[vc]).map($c=>-fb($c))}();sb=function(){return Ic(Tc).map($c=>$c[0]).map(($c,Cc)=>$c+xc[Cc])}();return{snaps:Tc,snapsAligned:sb}}function Qc(sb,Za,Sb,Gb,gc,vc){const {groupSlides:wc}=
gc,{min:Ic,max:xc}=Gb;return{slideRegistry:function(){const Tc=wc(vc);return Sb.length===1?[vc]:sb&&Za!=="keepSnaps"?Tc.slice(Ic,xc).map(($c,Cc,ed)=>{const bd=!Cc;Cc=Cc===zb(ed);return bd?(ed=nc(ed[0])+1,Cb(ed)):Cc?($c=zb(vc)-nc(ed)[0]+1,Cb($c,nc(ed)[0])):$c}):Tc}()}}function ld(sb,Za,Sb,Gb,gc){function vc(Cc){return Cc.concat().sort((ed,bd)=>fb(ed)-fb(bd))[0]}function wc(Cc){const ed=sb?Tc(Cc):$c(Cc);Cc=Za.map((bd,kd)=>({diff:Ic(bd-ed,0),index:kd})).sort((bd,kd)=>fb(bd.diff)-fb(kd.diff));({index:Cc}=
Cc[0]);return{index:Cc,distance:ed}}function Ic(Cc,ed){const bd=[Cc,Cc+Sb,Cc-Sb];if(!sb)return Cc;if(!ed)return vc(bd);Cc=bd.filter(kd=>Math.sign(kd)===ed);return Cc.length?vc(Cc):nc(bd)-Sb}const {reachedAny:xc,removeOffset:Tc,constrain:$c}=Gb;return{byDistance:function(Cc,ed){var bd=gc.get()+Cc;const {index:kd,distance:Ad}=wc(bd);bd=!sb&&xc(bd);if(!ed||bd)return{index:kd,distance:Cc};Cc+=Ic(Za[kd]-Ad,0);return{index:kd,distance:Cc}},byIndex:function(Cc,ed){const bd=Za[Cc]-gc.get();ed=Ic(bd,ed);return{index:Cc,
distance:ed}},shortcut:Ic}}function Hd(sb,Za,Sb,Gb,gc,vc,wc){function Ic(xc){const Tc=xc.distance,$c=xc.index!==Za.get();vc.add(Tc);Tc&&(Gb.duration()?sb.start():(sb.update(),sb.render(1),sb.update()));$c&&(Sb.set(Za.get()),Za.set(xc.index),wc.emit("select"))}return{distance:function(xc,Tc){xc=gc.byDistance(xc,Tc);Ic(xc)},index:function(xc,Tc){xc=Za.clone().set(xc);Tc=gc.byIndex(xc.get(),Tc);Ic(Tc)}}}function ke(sb,Za,Sb,Gb,gc,vc,wc,Ic){function xc(Cc){Cc.code==="Tab"&&($c=(new Date).getTime())}const Tc=
{passive:!0,capture:!0};let $c=0;return{init:function(Cc){function ed(bd){if(!((new Date).getTime()-$c>10)){wc.emit("slideFocusStart");sb.scrollLeft=0;var kd=Sb.findIndex(Ad=>Ad.includes(bd));typeof kd==="number"&&(gc.useDuration(0),Gb.index(kd,0),wc.emit("slideFocus"))}}Ic&&(vc.add(document,"keydown",xc,!1),Za.forEach((bd,kd)=>{vc.add(bd,"focus",Ad=>{(qa(Ic)||Ic(Cc,Ad))&&ed(kd)},Tc)}))}}}function sa(sb){function Za(Gb){return typeof Gb==="number"?Gb:Gb.get()}let Sb=sb;return{get:function(){return Sb},
set:function(Gb){Sb=Za(Gb)},add:function(Gb){Sb+=Za(Gb)},subtract:function(Gb){Sb-=Za(Gb)}}}function oc(sb,Za){function Sb(xc){return`translate3d(${xc}px,0px,0px)`}function Gb(xc){return`translate3d(0px,${xc}px,0px)`}const gc=sb.scroll==="x"?Sb:Gb,vc=Za.style;let wc=null,Ic=!1;return{clear:function(){Ic||(vc.transform="",Za.getAttribute("style")||Za.removeAttribute("style"))},to:function(xc){Ic||(xc=sb.direction(xc),xc=Math.round(xc*100)/100,xc!==wc&&(vc.transform=gc(xc),wc=xc))},toggleActive:function(xc){Ic=
!xc}}}function Kb(sb,Za,Sb,Gb,gc,vc,wc,Ic,xc){function Tc(Dd,le){return Dd.reduce((se,ce)=>se-gc[ce],le)}function $c(Dd,le){return Dd.reduce((se,ce)=>Tc(se,le)>0?se.concat([ce]):se,[])}function Cc(Dd){return vc.map((le,se)=>({start:le-Gb[se]+.5+Dd,end:le+Za-.5+Dd}))}function ed(Dd,le,se){const ce=Cc(le);return Dd.map(xf=>{const qd=se?0:-Sb,Te=se?Sb:0,Fd=ce[xf][se?"end":"start"];return{index:xf,loopPoint:Fd,slideLocation:sa(-1),translate:oc(sb,xc[xf]),target:()=>Ic.get()>Fd?qd:Te}})}const bd=Object.keys(gc).map(Number),
kd=Object.keys(gc).map(Number).reverse(),Ad=function(){const Dd=$c(kd,wc[0]);return ed(Dd,Sb,!1)}().concat(function(){const Dd=$c(bd,Za-wc[0]-1);return ed(Dd,-Sb,!0)}());return{canLoop:function(){return Ad.every(({index:Dd})=>{const le=bd.filter(se=>se!==Dd);return Tc(le,Za)<=.1})},clear:function(){Ad.forEach(Dd=>Dd.translate.clear())},loop:function(){Ad.forEach(Dd=>{const {target:le,translate:se,slideLocation:ce}=Dd;Dd=le();Dd!==ce.get()&&(se.to(Dd),ce.set(Dd))})},loopPoints:Ad}}function ac(sb,Za,
Sb){let Gb,gc=!1;return{init:function(vc){Sb&&(Gb=new MutationObserver(wc=>{if(!gc&&(qa(Sb)||Sb(vc,wc)))for(const Ic of wc)if(Ic.type==="childList"){vc.reInit();Za.emit("slidesChanged");break}}),Gb.observe(sb,{childList:!0}))},destroy:function(){Gb&&Gb.disconnect();gc=!0}}}function jc(sb,Za,Sb,Gb){function gc($c){return Object.keys(vc).reduce((Cc,ed)=>{ed=parseInt(ed);const {isIntersecting:bd}=vc[ed],kd=!$c&&!bd;($c&&bd||kd)&&Cc.push(ed);return Cc},[])}const vc={};let wc=null,Ic=null,xc,Tc=!1;return{init:function(){xc=
new IntersectionObserver($c=>{Tc||($c.forEach(Cc=>{const ed=Za.indexOf(Cc.target);vc[ed]=Cc}),Ic=wc=null,Sb.emit("slidesInView"))},{root:sb.parentElement,threshold:Gb});Za.forEach($c=>xc.observe($c))},destroy:function(){xc&&xc.disconnect();Tc=!0},get:function($c=!0){if($c&&wc)return wc;if(!$c&&Ic)return Ic;const Cc=gc($c);$c&&(wc=Cc);$c||(Ic=Cc);return Cc}}}function Mc(sb,Za,Sb,Gb,gc,vc){const {measureSize:wc,startEdge:Ic,endEdge:xc}=sb,Tc=Sb[0]&&gc,$c=Tc?fb(Za[Ic]-Sb[0][Ic]):0,Cc=function(){if(!Tc)return 0;
const bd=vc.getComputedStyle(nc(Gb));return parseFloat(bd.getPropertyValue(`margin-${xc}`))}(),ed=Sb.map(wc);sb=function(){return Sb.map((bd,kd,Ad)=>{const Dd=!kd,le=kd===zb(Ad);return Dd?ed[kd]+$c:le?ed[kd]+Cc:Ad[kd+1][Ic]-bd[Ic]}).map(fb)}();return{slideSizes:ed,slideSizesWithGaps:sb,startGap:$c,endGap:Cc}}function Wa(sb,Za,Sb,Gb,gc,vc,wc,Ic,xc){function Tc(Ad,Dd){return Object.keys(Ad).map(Number).filter(le=>le%Dd===0).map(le=>Ad.slice(le,le+Dd))}function $c(Ad){return Ad.length?Object.keys(Ad).map(Number).reduce((Dd,
le,se)=>{var ce=nc(Dd)||0,xf=ce===0;const qd=le===zb(Ad);ce=gc[Cc]-vc[ce][Cc];const Te=gc[Cc]-vc[le][ed];xf=!Gb&&xf?bd(wc):0;const Fd=!Gb&&qd?bd(Ic):0;ce=fb(Te-Fd-(ce+xf));se&&ce>Za+xc&&Dd.push(le);qd&&Dd.push(Ad.length);return Dd},[]).map((Dd,le,se)=>Ad.slice(Math.max(se[le-1]||0),Dd)):[]}const {startEdge:Cc,endEdge:ed,direction:bd}=sb,kd=typeof Sb==="number";return{groupSlides:function(Ad){return kd?Tc(Ad,Sb):$c(Ad)}}}function fc(sb,Za,Sb,Gb,gc,vc,wc){const {align:Ic,axis:xc,direction:Tc,startIndex:$c,
loop:Cc,duration:ed,dragFree:bd,dragThreshold:kd,inViewThreshold:Ad,slidesToScroll:Dd,skipSnaps:le,containScroll:se,watchResize:ce,watchSlides:xf,watchDrag:qd,watchFocus:Te}=vc,Fd=xb(),Ie=Fd.measure(Za),yf=Sb.map(Fd.measure),Le=Bb(xc,Tc),Tf=Le.measureSize(Ie),jf=Na(Tf);var ve=Oa(Ic,Tf),Jd=!Cc&&!!se;const {slideSizes:he,slideSizesWithGaps:kf,startGap:ef,endGap:Tg}=Mc(Le,Ie,yf,Sb,Cc||!!se,gc),Yc=Wa(Le,Tf,Dd,Cc,Ie,yf,ef,Tg,2),{snaps:$d,snapsAligned:xg}=Pb(Le,ve,Ie,yf,Yc);ve=-nc($d)+nc(kf);const {snapsContained:Xd,
scrollContainLimit:La}=sc(Tf,ve,xg,se,2),De=Jd?Xd:xg,{limit:ze}=lc(ve,De,Cc),Ee=ya(zb(De),$c,Cc),Mg=Ee.clone(),yg=Object.keys(Sb).map(Number),qf=({dragHandler:Fg,scrollBody:Je,scrollBounds:Of,options:{loop:sf}})=>{sf||Of.constrain(Fg.pointerDown());Je.seek()},Hc=({scrollBody:Fg,translate:Je,location:Of,offsetLocation:sf,previousLocation:Og,scrollLooper:cg,slideLooper:tf,dragHandler:If,animation:kh,eventHandler:rg,scrollBounds:ff,options:{loop:of}},Pf)=>{var Xf=Fg.settled();ff=!ff.shouldConstrain();
(If=(Xf=of?Xf:Xf&&ff)&&!If.pointerDown())&&kh.stop();Of=Of.get()*Pf+Og.get()*(1-Pf);sf.set(Of);of&&(cg.loop(Fg.direction()),tf.loop());Je.to(sf.get());If&&rg.emit("settle");Xf||rg.emit("scroll")},$f=Fb(Gb,gc,()=>qf(bf),Fg=>Hc(bf,Fg));var Bf=De[Ee.get()];const zf=sa(Bf),Id=sa(Bf),rf=sa(Bf);Bf=sa(Bf);const Ng=Hb(zf,rf,Id,Bf,ed,.68),Hf=ld(Cc,De,ve,ze,Bf),ag=Hd($f,Ee,Mg,Ng,Hf,Bf,wc),ue=ta(ze),Me=Ma(),zg=jc(Za,Sb,wc,Ad);({slideRegistry:Jd}=Qc(Jd,se,De,La,Yc,yg));const Jb=ke(sb,Sb,Jd,ag,Ng,Me,wc,Te),bf=
{ownerDocument:Gb,ownerWindow:gc,eventHandler:wc,containerRect:Ie,slideRects:yf,animation:$f,axis:Le,dragHandler:hc(Le,sb,Gb,gc,Bf,gb(Le,gc),zf,$f,ag,Ng,Hf,Ee,wc,jf,bd,kd,le,.68,qd),eventStore:Me,percentOfView:jf,index:Ee,indexPrevious:Mg,limit:ze,location:zf,offsetLocation:rf,previousLocation:Id,options:vc,resizeHandler:$b(Za,wc,gc,Sb,Le,ce,Fd),scrollBody:Ng,scrollBounds:rb(ze,rf,Bf,Ng,jf),scrollLooper:Wc(ve,ze,rf,[zf,rf,Id,Bf]),scrollProgress:ue,scrollSnapList:De.map(ue.get),scrollSnaps:De,scrollTarget:Hf,
scrollTo:ag,slideLooper:Kb(Le,Tf,ve,he,kf,$d,De,rf,Sb),slideFocus:Jb,slidesHandler:ac(Za,wc,xf),slidesInView:zg,slideIndexes:yg,slideRegistry:Jd,slidesToScroll:Yc,target:Bf,translate:oc(Le,Za)};return bf}function Sc(){let sb={},Za;const Sb={init:function(Gb){Za=Gb},emit:function(Gb){(sb[Gb]||[]).forEach(gc=>gc(Za,Gb));return Sb},off:function(Gb,gc){sb[Gb]=(sb[Gb]||[]).filter(vc=>vc!==gc);return Sb},on:function(Gb,gc){sb[Gb]=(sb[Gb]||[]).concat([gc]);return Sb},clear:function(){sb={}}};return Sb}function mb(sb){function Za(Sb,
Gb){return Ja(Sb,Gb||{})}return{mergeOptions:Za,optionsAtMedia:function(Sb){const Gb=Sb.breakpoints||{},gc=Object.keys(Gb).filter(vc=>sb.matchMedia(vc).matches).map(vc=>Gb[vc]).reduce((vc,wc)=>Za(vc,wc),{});return Za(Sb,gc)},optionsMediaQueries:function(Sb){return Sb.map(Gb=>Object.keys(Gb.breakpoints||{})).reduce((Gb,gc)=>Gb.concat(gc),[]).map(sb.matchMedia)}}}function Wb(sb){let Za=[];return{init:function(Sb,Gb){Za=Gb.filter(({options:gc})=>sb.optionsAtMedia(gc).active!==!1);Za.forEach(gc=>gc.init(Sb,
sb));return Gb.reduce((gc,vc)=>Object.assign(gc,{[vc.name]:vc}),{})},destroy:function(){Za=Za.filter(Sb=>Sb.destroy())}}}function Zc(sb,Za,Sb){function Gb(){const {container:he,slides:kf}=yf;jf=(typeof he==="string"?sb.querySelector(he):he)||sb.children[0];const ef=typeof kf==="string"?jf.querySelectorAll(kf):kf;ve=[].slice.call(ef||jf.children)}function gc(he){const kf=fc(sb,jf,ve,$c,Cc,he,Ad);return he.loop&&!kf.slideLooper.canLoop()?(he=Object.assign({},he,{loop:!1}),gc(he)):kf}function vc(he,
kf){Te||(Ie=Dd(Ie,he),yf=le(Ie),Le=kf||Le,Gb(),Fd=gc(yf),se([Ie,...Le.map(({options:ef})=>ef)]).forEach(ef=>kd.add(ef,"change",wc)),yf.active&&(Fd.translate.to(Fd.location.get()),Fd.animation.init(),Fd.slidesInView.init(),Fd.slideFocus.init(Jd),Fd.eventHandler.init(Jd),Fd.resizeHandler.init(Jd),Fd.slidesHandler.init(Jd),Fd.options.loop&&Fd.slideLooper.loop(),jf.offsetParent&&ve.length&&Fd.dragHandler.init(Jd),Tf=bd.init(Jd,Le)))}function wc(he,kf){const ef=Tc();Ic();vc(Dd({startIndex:ef},he),kf);
Ad.emit("reInit")}function Ic(){Fd.dragHandler.destroy();Fd.eventStore.clear();Fd.translate.clear();Fd.slideLooper.clear();Fd.resizeHandler.destroy();Fd.slidesHandler.destroy();Fd.slidesInView.destroy();Fd.animation.destroy();bd.destroy();kd.clear()}function xc(he,kf,ef){yf.active&&!Te&&(Fd.scrollBody.useBaseFriction().useDuration(kf===!0?0:yf.duration),Fd.scrollTo.index(he,ef||0))}function Tc(){return Fd.index.get()}const $c=sb.ownerDocument,Cc=$c.defaultView;var ed=mb(Cc);const bd=Wb(ed),kd=Ma(),
Ad=Sc(),{mergeOptions:Dd,optionsAtMedia:le,optionsMediaQueries:se}=ed,{on:ce,off:xf,emit:qd}=Ad;ed=wc;let Te=!1,Fd,Ie=Dd(fd,Zc.globalOptions),yf=Dd(Ie),Le=[],Tf,jf,ve;const Jd={canScrollNext:function(){return Fd.index.add(1).get()!==Tc()},canScrollPrev:function(){return Fd.index.add(-1).get()!==Tc()},containerNode:function(){return jf},internalEngine:function(){return Fd},destroy:function(){Te||(Te=!0,kd.clear(),Ic(),Ad.emit("destroy"),Ad.clear())},off:xf,on:ce,emit:qd,plugins:function(){return Tf},
previousScrollSnap:function(){return Fd.indexPrevious.get()},reInit:ed,rootNode:function(){return sb},scrollNext:function(he){const kf=Fd.index.add(1).get();xc(kf,he,-1)},scrollPrev:function(he){const kf=Fd.index.add(-1).get();xc(kf,he,1)},scrollProgress:function(){return Fd.scrollProgress.get(Fd.offsetLocation.get())},scrollSnapList:function(){return Fd.scrollSnapList},scrollTo:xc,selectedScrollSnap:Tc,slideNodes:function(){return ve},slidesInView:function(){return Fd.slidesInView.get()},slidesNotInView:function(){return Fd.slidesInView.get(!1)}};
vc(Za,Sb);setTimeout(()=>Ad.emit("init"),0);return Jd}const fd={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};Zc.globalOptions=void 0;Wd.exports=Zc};
shadow$provide[48]=function(qc,Wd,V){function qa(Cb={},Ja=[]){const Ia=fb.useRef(Cb),Oa=fb.useRef(Ja),[Ma,Fb]=fb.useState(),[Bb,ec]=fb.useState(),ya=fb.useCallback(()=>{Ma&&Ma.reInit(Ia.current,Oa.current)},[Ma]);fb.useEffect(()=>{nc.areOptionsEqual(Ia.current,Cb)||(Ia.current=Cb,ya())},[Cb,ya]);fb.useEffect(()=>{nc.arePluginsEqual(Oa.current,Ja)||(Oa.current=Ja,ya())},[Ja,ya]);fb.useEffect(()=>{if(nc.canUseDOM()&&Bb){zb.globalOptions=qa.globalOptions;const hc=zb(Bb,Ia.current,Oa.current);Fb(hc);
return()=>hc.destroy()}Fb(void 0)},[Bb,Fb]);return[ec,Ma]}var fb=qc(11),nc=qc(46),zb=qc(47);qa.globalOptions=void 0;Wd.exports=qa};
shadow$provide[49]=function(qc,Wd,V){function qa(zb,Cb){const Ja=zb.scrollSnapList();return typeof Cb==="number"?Ja.map(()=>Cb):Cb(Ja,zb)}function fb(zb={}){function Cb(){if(!xb)if(Oa())lc=!0;else{rb||gb.emit("autoplay:play");var {ownerWindow:ta}=gb.internalEngine();ta.clearTimeout(Hb);Hb=ta.setTimeout(ya,Na[gb.selectedScrollSnap()]);$b=(new Date).getTime();gb.emit("autoplay:timerset");rb=!0}}function Ja(){if(!xb){rb&&gb.emit("autoplay:stop");var {ownerWindow:ta}=gb.internalEngine();ta.clearTimeout(Hb);
Hb=0;$b=null;gb.emit("autoplay:timerstopped");rb=!1}}function Ia(){if(Oa())return lc=rb,Ja();lc&&Cb()}function Oa(){const {ownerDocument:ta}=gb.internalEngine();return ta.visibilityState==="hidden"}function Ma(){sc||Ja()}function Fb(){sc||Cb()}function Bb(){sc=!0;Ja()}function ec(){sc=!1;Cb()}function ya(){var {index:ta}=gb.internalEngine();ta=ta.clone().add(1).get();const Pb=gb.scrollSnapList().length-1;ta=hc.stopOnLastSnap&&ta===Pb;gb.canScrollNext()?gb.scrollNext(Wc):gb.scrollTo(0,Wc);gb.emit("autoplay:select");
if(ta)return Ja();Cb()}let hc,gb,xb,Na,$b=null,Hb=0,rb=!1,sc=!1,lc=!1,Wc=!1;return{name:"autoplay",options:zb,init:function(ta,Pb){gb=ta;const {mergeOptions:Qc,optionsAtMedia:ld}=Pb;ta=Qc(nc,fb.globalOptions);ta=Qc(ta,zb);hc=ld(ta);if(!(gb.scrollSnapList().length<=1)){Wc=hc.jump;xb=!1;Na=qa(gb,hc.delay);var {eventStore:Hd,ownerDocument:ke}=gb.internalEngine();ta=!!gb.internalEngine().options.watchDrag;Pb=hc.rootNode;var sa=gb.rootNode();Pb=Pb&&Pb(sa)||sa;Hd.add(ke,"visibilitychange",Ia);if(ta)gb.on("pointerDown",
Ma);if(ta&&!hc.stopOnInteraction)gb.on("pointerUp",Fb);hc.stopOnMouseEnter&&Hd.add(Pb,"mouseenter",Bb);hc.stopOnMouseEnter&&!hc.stopOnInteraction&&Hd.add(Pb,"mouseleave",ec);if(hc.stopOnFocusIn)gb.on("slideFocusStart",Ja);hc.stopOnFocusIn&&!hc.stopOnInteraction&&Hd.add(gb.containerNode(),"focusout",Cb);hc.playOnInit&&Cb()}},destroy:function(){gb.off("pointerDown",Ma).off("pointerUp",Fb).off("slideFocusStart",Ja);Ja();xb=!0;rb=!1},play:function(ta){typeof ta!=="undefined"&&(Wc=ta);Cb()},stop:function(){rb&&
Ja()},reset:function(){rb&&Cb()},isPlaying:function(){return rb},timeUntilNext:function(){if(!$b)return null;const ta=Na[gb.selectedScrollSnap()],Pb=(new Date).getTime()-$b;return ta-Pb}}}const nc={active:!0,breakpoints:{},delay:4E3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};fb.globalOptions=void 0;Wd.exports=fb};
'use strict';
var $amp$components$icons$ChevronRightIcon$$, $amp$components$icons$InformationCircle$$, $amp$components$icons$ArrowTurnRightUp$$, $cljs$core$even_QMARK_$$, $amp$hooks$use_scroll_to$use_scroll_to_ref$$, $amp$hooks$use_scroll_to$use_scroll_to_top$cljs$0core$0IFn$0_invoke$0arity$0variadic$$, $amp$components$elements$budget$section_block$section_block$$, $amp$components$elements$expandable_text_area$expandable_text_area$$, $amp$components$elements$expandable_text_area$expandable_text_area_2$$, $amp$hooks$use_intersection_observer$use_intersection_observer$$, 
$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$, $amp$components$ui$overlays$caption_overlay$$, $amp$components$media$lazy_image_gallery$lazy_image_gallery$$, $amp$components$elements$budget$about$preview$$, $amp$components$elements$budget$about$details$$, $amp$components$elements$budget$about$about$$, $amp$components$elements$budget$committe$preview$$, $amp$components$elements$budget$committe$details$$, $amp$components$elements$budget$committe$committee_member_card$$, 
$amp$components$elements$budget$committe$committee_gallery$$, $amp$components$elements$budget$committe$committee$$, $amp$components$elements$budget$budget_table$format_currency$$, $amp$components$elements$budget$budget_table$calculate_section_total_no_tax$$, $amp$components$elements$budget$budget_table$sub_total_all_sections$$, $amp$components$elements$budget$budget_table$total_section$$, $amp$components$elements$budget$budget_table$pad_two_digits$$, $amp$components$elements$budget$budget_table$detail_line_item$$, 
$amp$components$elements$budget$budget_table$section_line_item$$, $amp$components$elements$budget$budget_table$budget_table$$, $amp$components$elements$budget$cost_breakdown$preview$$, $amp$components$elements$budget$cost_breakdown$details$$, $amp$components$elements$budget$cost_breakdown$footer$$, $amp$components$elements$budget$cost_breakdown$cost_breakdown$$, $amp$components$elements$budget$location_section$preview$$, $amp$components$elements$budget$location_section$full_details$$, $amp$components$elements$budget$location_section$location_section$$, 
$amp$components$elements$budget$non_profit$non_profit$$, $amp$components$navs$back_up_nav$back_up_nav$$, $amp$components$sections$press_release$preview$$, $amp$components$sections$press_release$details$$, $amp$components$sections$press_release$footer$$, $amp$components$sections$press_release$press_release$$, $amp$components$sections$budget_section$section_link$$, $amp$components$sections$budget_section$header$$, $amp$components$sections$budget_section$budget_section$$, $cljs$core$_PLUS_$$;
$amp$components$icons$ChevronRightIcon$$ = function($G__26905_JSCompiler_temp_const$jscomp$inline_2996_class$$jscomp$2_map__26902_map__26902__$1_props__21778__auto__$jscomp$5_vec__26899$$, $G__26915$jscomp$inline_2998_JSCompiler_inline_result$jscomp$inline_2997_maybe_ref__21780__auto__$jscomp$5$$) {
  $G__26905_JSCompiler_temp_const$jscomp$inline_2996_class$$jscomp$2_map__26902_map__26902__$1_props__21778__auto__$jscomp$5_vec__26899$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__26905_JSCompiler_temp_const$jscomp$inline_2996_class$$jscomp$2_map__26902_map__26902__$1_props__21778__auto__$jscomp$5_vec__26899$$), $G__26915$jscomp$inline_2998_JSCompiler_inline_result$jscomp$inline_2997_maybe_ref__21780__auto__$jscomp$5$$], 
  null);
  $G__26905_JSCompiler_temp_const$jscomp$inline_2996_class$$jscomp$2_map__26902_map__26902__$1_props__21778__auto__$jscomp$5_vec__26899$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__26905_JSCompiler_temp_const$jscomp$inline_2996_class$$jscomp$2_map__26902_map__26902__$1_props__21778__auto__$jscomp$5_vec__26899$$, 0, null);
  $G__26905_JSCompiler_temp_const$jscomp$inline_2996_class$$jscomp$2_map__26902_map__26902__$1_props__21778__auto__$jscomp$5_vec__26899$$ = $APP.$cljs$core$__destructure_map$$($G__26905_JSCompiler_temp_const$jscomp$inline_2996_class$$jscomp$2_map__26902_map__26902__$1_props__21778__auto__$jscomp$5_vec__26899$$);
  $G__26905_JSCompiler_temp_const$jscomp$inline_2996_class$$jscomp$2_map__26902_map__26902__$1_props__21778__auto__$jscomp$5_vec__26899$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__26905_JSCompiler_temp_const$jscomp$inline_2996_class$$jscomp$2_map__26902_map__26902__$1_props__21778__auto__$jscomp$5_vec__26899$$, $APP.$cljs$cst$476$class$$);
  $G__26905_JSCompiler_temp_const$jscomp$inline_2996_class$$jscomp$2_map__26902_map__26902__$1_props__21778__auto__$jscomp$5_vec__26899$$ = $APP.$helix$impl$props$normalize_class$$($G__26905_JSCompiler_temp_const$jscomp$inline_2996_class$$jscomp$2_map__26902_map__26902__$1_props__21778__auto__$jscomp$5_vec__26899$$);
  $G__26915$jscomp$inline_2998_JSCompiler_inline_result$jscomp$inline_2997_maybe_ref__21780__auto__$jscomp$5$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"m8.25 4.5 7.5 7.5-7.5 7.5"};
  $G__26915$jscomp$inline_2998_JSCompiler_inline_result$jscomp$inline_2997_maybe_ref__21780__auto__$jscomp$5$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__26915$jscomp$inline_2998_JSCompiler_inline_result$jscomp$inline_2997_maybe_ref__21780__auto__$jscomp$5$$) : $APP.$helix$core$jsx$$.call(null, "path", $G__26915$jscomp$inline_2998_JSCompiler_inline_result$jscomp$inline_2997_maybe_ref__21780__auto__$jscomp$5$$);
  $G__26905_JSCompiler_temp_const$jscomp$inline_2996_class$$jscomp$2_map__26902_map__26902__$1_props__21778__auto__$jscomp$5_vec__26899$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:$G__26905_JSCompiler_temp_const$jscomp$inline_2996_class$$jscomp$2_map__26902_map__26902__$1_props__21778__auto__$jscomp$5_vec__26899$$, children:$G__26915$jscomp$inline_2998_JSCompiler_inline_result$jscomp$inline_2997_maybe_ref__21780__auto__$jscomp$5$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__26905_JSCompiler_temp_const$jscomp$inline_2996_class$$jscomp$2_map__26902_map__26902__$1_props__21778__auto__$jscomp$5_vec__26899$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__26905_JSCompiler_temp_const$jscomp$inline_2996_class$$jscomp$2_map__26902_map__26902__$1_props__21778__auto__$jscomp$5_vec__26899$$);
};
$amp$components$icons$InformationCircle$$ = function($G__26958_JSCompiler_temp_const$jscomp$inline_3000_class$$jscomp$4_map__26956_map__26956__$1_props__21778__auto__$jscomp$7_vec__26953$$, $G__26963$jscomp$inline_3002_JSCompiler_inline_result$jscomp$inline_3001_maybe_ref__21780__auto__$jscomp$7$$) {
  $G__26958_JSCompiler_temp_const$jscomp$inline_3000_class$$jscomp$4_map__26956_map__26956__$1_props__21778__auto__$jscomp$7_vec__26953$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__26958_JSCompiler_temp_const$jscomp$inline_3000_class$$jscomp$4_map__26956_map__26956__$1_props__21778__auto__$jscomp$7_vec__26953$$), $G__26963$jscomp$inline_3002_JSCompiler_inline_result$jscomp$inline_3001_maybe_ref__21780__auto__$jscomp$7$$], 
  null);
  $G__26958_JSCompiler_temp_const$jscomp$inline_3000_class$$jscomp$4_map__26956_map__26956__$1_props__21778__auto__$jscomp$7_vec__26953$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__26958_JSCompiler_temp_const$jscomp$inline_3000_class$$jscomp$4_map__26956_map__26956__$1_props__21778__auto__$jscomp$7_vec__26953$$, 0, null);
  $G__26958_JSCompiler_temp_const$jscomp$inline_3000_class$$jscomp$4_map__26956_map__26956__$1_props__21778__auto__$jscomp$7_vec__26953$$ = $APP.$cljs$core$__destructure_map$$($G__26958_JSCompiler_temp_const$jscomp$inline_3000_class$$jscomp$4_map__26956_map__26956__$1_props__21778__auto__$jscomp$7_vec__26953$$);
  $G__26958_JSCompiler_temp_const$jscomp$inline_3000_class$$jscomp$4_map__26956_map__26956__$1_props__21778__auto__$jscomp$7_vec__26953$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__26958_JSCompiler_temp_const$jscomp$inline_3000_class$$jscomp$4_map__26956_map__26956__$1_props__21778__auto__$jscomp$7_vec__26953$$, $APP.$cljs$cst$476$class$$);
  $G__26958_JSCompiler_temp_const$jscomp$inline_3000_class$$jscomp$4_map__26956_map__26956__$1_props__21778__auto__$jscomp$7_vec__26953$$ = $APP.$helix$impl$props$normalize_class$$($G__26958_JSCompiler_temp_const$jscomp$inline_3000_class$$jscomp$4_map__26956_map__26956__$1_props__21778__auto__$jscomp$7_vec__26953$$);
  $G__26963$jscomp$inline_3002_JSCompiler_inline_result$jscomp$inline_3001_maybe_ref__21780__auto__$jscomp$7$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"};
  $G__26963$jscomp$inline_3002_JSCompiler_inline_result$jscomp$inline_3001_maybe_ref__21780__auto__$jscomp$7$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__26963$jscomp$inline_3002_JSCompiler_inline_result$jscomp$inline_3001_maybe_ref__21780__auto__$jscomp$7$$) : $APP.$helix$core$jsx$$.call(null, "path", $G__26963$jscomp$inline_3002_JSCompiler_inline_result$jscomp$inline_3001_maybe_ref__21780__auto__$jscomp$7$$);
  $G__26958_JSCompiler_temp_const$jscomp$inline_3000_class$$jscomp$4_map__26956_map__26956__$1_props__21778__auto__$jscomp$7_vec__26953$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:$G__26958_JSCompiler_temp_const$jscomp$inline_3000_class$$jscomp$4_map__26956_map__26956__$1_props__21778__auto__$jscomp$7_vec__26953$$, children:$G__26963$jscomp$inline_3002_JSCompiler_inline_result$jscomp$inline_3001_maybe_ref__21780__auto__$jscomp$7$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__26958_JSCompiler_temp_const$jscomp$inline_3000_class$$jscomp$4_map__26956_map__26956__$1_props__21778__auto__$jscomp$7_vec__26953$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__26958_JSCompiler_temp_const$jscomp$inline_3000_class$$jscomp$4_map__26956_map__26956__$1_props__21778__auto__$jscomp$7_vec__26953$$);
};
$amp$components$icons$ArrowTurnRightUp$$ = function($G__27050_props$jscomp$11_props__21778__auto__$jscomp$12_vec__27046$$, $G__27054$jscomp$inline_3014_JSCompiler_inline_result$jscomp$2974_maybe_ref__21780__auto__$jscomp$12$$) {
  $G__27050_props$jscomp$11_props__21778__auto__$jscomp$12_vec__27046$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__27050_props$jscomp$11_props__21778__auto__$jscomp$12_vec__27046$$), $G__27054$jscomp$inline_3014_JSCompiler_inline_result$jscomp$2974_maybe_ref__21780__auto__$jscomp$12$$], null);
  $G__27050_props$jscomp$11_props__21778__auto__$jscomp$12_vec__27046$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__27050_props$jscomp$11_props__21778__auto__$jscomp$12_vec__27046$$, 0, null);
  $G__27054$jscomp$inline_3014_JSCompiler_inline_result$jscomp$2974_maybe_ref__21780__auto__$jscomp$12$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"m11.99 7.5 3.75-3.75m0 0 3.75 3.75m-3.75-3.75v16.499H4.49"};
  $G__27054$jscomp$inline_3014_JSCompiler_inline_result$jscomp$2974_maybe_ref__21780__auto__$jscomp$12$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:"size-6", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__27054$jscomp$inline_3014_JSCompiler_inline_result$jscomp$2974_maybe_ref__21780__auto__$jscomp$12$$) : $APP.$helix$core$jsx$$.call(null, 
  "path", $G__27054$jscomp$inline_3014_JSCompiler_inline_result$jscomp$2974_maybe_ref__21780__auto__$jscomp$12$$)};
  $G__27050_props$jscomp$11_props__21778__auto__$jscomp$12_vec__27046$$ = $APP.$helix$impl$props$merge_obj$$($G__27054$jscomp$inline_3014_JSCompiler_inline_result$jscomp$2974_maybe_ref__21780__auto__$jscomp$12$$, $APP.$helix$impl$props$_dom_props$cljs$0core$0IFn$0_invoke$0arity$01$$($G__27050_props$jscomp$11_props__21778__auto__$jscomp$12_vec__27046$$));
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__27050_props$jscomp$11_props__21778__auto__$jscomp$12_vec__27046$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__27050_props$jscomp$11_props__21778__auto__$jscomp$12_vec__27046$$);
};
$cljs$core$even_QMARK_$$ = function($n$jscomp$88$$) {
  if ($APP.$cljs$core$integer_QMARK_$$($n$jscomp$88$$)) {
    return ($n$jscomp$88$$ & 1) === 0;
  }
  throw Error(["Argument must be an integer: ", $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$88$$)].join(""));
};
$amp$hooks$use_scroll_to$use_scroll_to_ref$$ = function() {
  var $G__27059$$ = function() {
    function $G__27109$$($ref$jscomp$10$$, $var_args$jscomp$416$$) {
      var $G__27110__i_p__27061$jscomp$1$$ = null;
      if (arguments.length > 1) {
        $G__27110__i_p__27061$jscomp$1$$ = 0;
        for (var $G__27110__a$$ = Array(arguments.length - 1); $G__27110__i_p__27061$jscomp$1$$ < $G__27110__a$$.length;) {
          $G__27110__a$$[$G__27110__i_p__27061$jscomp$1$$] = arguments[$G__27110__i_p__27061$jscomp$1$$ + 1], ++$G__27110__i_p__27061$jscomp$1$$;
        }
        $G__27110__i_p__27061$jscomp$1$$ = new $APP.$cljs$core$IndexedSeq$$($G__27110__a$$, 0, null);
      }
      return $G__27109__delegate$$.call(this, $ref$jscomp$10$$, $G__27110__i_p__27061$jscomp$1$$);
    }
    function $G__27109__delegate$$($ref$jscomp$9_temp__5823__auto__$jscomp$64$$, $duration$jscomp$2_p__27061$$) {
      $duration$jscomp$2_p__27061$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($duration$jscomp$2_p__27061$$, 0, null);
      $ref$jscomp$9_temp__5823__auto__$jscomp$64$$ = $ref$jscomp$9_temp__5823__auto__$jscomp$64$$.current;
      return $APP.$cljs$core$truth_$$($ref$jscomp$9_temp__5823__auto__$jscomp$64$$) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to(window, $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$479$duration$$, $APP.$cljs$core$truth_$$($duration$jscomp$2_p__27061$$) ? $duration$jscomp$2_p__27061$$ : 0.35, $APP.$cljs$cst$480$scrollTo$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$481$y$$, $ref$jscomp$9_temp__5823__auto__$jscomp$64$$, 
      $APP.$cljs$cst$482$autoKill$$, !1], null), $APP.$cljs$cst$483$ease$$, "power2.inOut"], null))) : null;
    }
    $G__27109$$.$cljs$lang$maxFixedArity$ = 1;
    $G__27109$$.$cljs$lang$applyTo$ = function($arglist__27112_p__27061$jscomp$2$$) {
      var $ref$jscomp$11$$ = $APP.$cljs$core$first$$($arglist__27112_p__27061$jscomp$2$$);
      $arglist__27112_p__27061$jscomp$2$$ = $APP.$cljs$core$rest$$($arglist__27112_p__27061$jscomp$2$$);
      return $G__27109__delegate$$($ref$jscomp$11$$, $arglist__27112_p__27061$jscomp$2$$);
    };
    $G__27109$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__27109__delegate$$;
    return $G__27109$$;
  }(), $G__27060$$ = [];
  return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__27059$$, $G__27060$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__27059$$, $G__27060$$);
};
$amp$hooks$use_scroll_to$use_scroll_to_top$cljs$0core$0IFn$0_invoke$0arity$0variadic$$ = function() {
  var $G__27081_map__27077__$1$$ = $APP.$cljs$core$__destructure_map$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$479$duration$$, 1], null)])), $duration$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($G__27081_map__27077__$1$$, $APP.$cljs$cst$479$duration$$, 0.35);
  $G__27081_map__27077__$1$$ = function() {
    function $G__27121$$($var_args$jscomp$418$$) {
      var $G__27124__i__$jscomp$346$$ = null;
      if (arguments.length > 0) {
        $G__27124__i__$jscomp$346$$ = 0;
        for (var $G__27124__a$$ = Array(arguments.length - 0); $G__27124__i__$jscomp$346$$ < $G__27124__a$$.length;) {
          $G__27124__a$$[$G__27124__i__$jscomp$346$$] = arguments[$G__27124__i__$jscomp$346$$ + 0], ++$G__27124__i__$jscomp$346$$;
        }
        $G__27124__i__$jscomp$346$$ = new $APP.$cljs$core$IndexedSeq$$($G__27124__a$$, 0, null);
      }
      return $G__27121__delegate$$.call(this, $G__27124__i__$jscomp$346$$);
    }
    function $G__27121__delegate$$() {
      $APP.$cljs$core$tap_GT_$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$139$type$$, $APP.$cljs$cst$484$scroll_to_top$$, $APP.$cljs$cst$479$duration$$, $duration$jscomp$3$$], null));
      return $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to(window, $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$479$duration$$, $duration$jscomp$3$$, $APP.$cljs$cst$480$scrollTo$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$481$y$$, 0], null), $APP.$cljs$cst$483$ease$$, "power2.inOut"], null)));
    }
    $G__27121$$.$cljs$lang$maxFixedArity$ = 0;
    $G__27121$$.$cljs$lang$applyTo$ = function($_$jscomp$347_arglist__27125$$) {
      $_$jscomp$347_arglist__27125$$ = $APP.$cljs$core$seq$$($_$jscomp$347_arglist__27125$$);
      return $G__27121__delegate$$($_$jscomp$347_arglist__27125$$);
    };
    $G__27121$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__27121__delegate$$;
    return $G__27121$$;
  }();
  var $G__27082$$ = [];
  return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__27081_map__27077__$1$$, $G__27082$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__27081_map__27077__$1$$, $G__27082$$);
};
$amp$components$elements$budget$section_block$section_block$$ = function($G__28350_map__28345_map__28345__$1_props__21778__auto__$jscomp$52_vec__28342$$, $maybe_ref__21780__auto__$jscomp$52$$) {
  $G__28350_map__28345_map__28345__$1_props__21778__auto__$jscomp$52_vec__28342$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28350_map__28345_map__28345__$1_props__21778__auto__$jscomp$52_vec__28342$$), $maybe_ref__21780__auto__$jscomp$52$$], null);
  $G__28350_map__28345_map__28345__$1_props__21778__auto__$jscomp$52_vec__28342$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28350_map__28345_map__28345__$1_props__21778__auto__$jscomp$52_vec__28342$$, 0, null);
  $G__28350_map__28345_map__28345__$1_props__21778__auto__$jscomp$52_vec__28342$$ = $APP.$cljs$core$__destructure_map$$($G__28350_map__28345_map__28345__$1_props__21778__auto__$jscomp$52_vec__28342$$);
  var $idx$jscomp$61$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28350_map__28345_map__28345__$1_props__21778__auto__$jscomp$52_vec__28342$$, $APP.$cljs$cst$553$idx$$), $eyebrow$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28350_map__28345_map__28345__$1_props__21778__auto__$jscomp$52_vec__28342$$, $cljs$cst$564$eyebrow$$), $title$jscomp$17$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28350_map__28345_map__28345__$1_props__21778__auto__$jscomp$52_vec__28342$$, 
  $APP.$cljs$cst$463$title$$), $children$jscomp$19$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28350_map__28345_map__28345__$1_props__21778__auto__$jscomp$52_vec__28342$$, $APP.$cljs$cst$198$children$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__28350_map__28345_map__28345__$1_props__21778__auto__$jscomp$52_vec__28342$$ = function() {
    return {id:["section-", $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$61$$)].join(""), children:[function() {
      var $G__28355$$ = function() {
        return {className:"px-4 pt-12 text-slate-100", children:[function() {
          var $G__28362$$ = function() {
            return {className:"mb-6 flex items-center gap-3", children:[function() {
              var $G__28366$$ = {className:"h-px w-10 bg-pink-500/70"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28366$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28366$$);
            }(), function() {
              var $G__28372$$ = {className:"text-sm tracking-[0.25em] uppercase text-slate-400", children:[$APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$61$$), ". ", $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($eyebrow$$)].join("")};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28372$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28372$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28362$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28362$$);
        }(), function() {
          var $G__28377$$ = {className:"\n               \n               font-bold\n               uppercase\n               leading-none\n               text-5xl\n               md:text-7xl\n               ", children:$title$jscomp$17$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__28377$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__28377$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28355$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28355$$);
    }(), function() {
      var $G__28390$$ = {className:"text-xl text-white-100", children:$children$jscomp$19$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28390$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28390$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28350_map__28345_map__28345__$1_props__21778__auto__$jscomp$52_vec__28342$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28350_map__28345_map__28345__$1_props__21778__auto__$jscomp$52_vec__28342$$);
};
$amp$components$elements$expandable_text_area$expandable_text_area$$ = function($G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$, $maybe_ref__21780__auto__$jscomp$53$$) {
  $G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$), $maybe_ref__21780__auto__$jscomp$53$$], null);
  $G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$, 0, null);
  $G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$ = $APP.$cljs$core$__destructure_map$$($G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$);
  var $section_hint$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$, $cljs$cst$565$section_hint$$), $title$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$, $APP.$cljs$cst$463$title$$), $expand_button_label$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$, 
  $cljs$cst$566$expand_button_label$$), $preview_text$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$, $cljs$cst$567$preview_text$$), $full_text$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$, $cljs$cst$568$full_text$$), $footer_text$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$, 
  $cljs$cst$569$footer_text$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$ = $APP.$helix$hooks$use_state$$(!1);
  var $expanded_QMARK_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$, 0, null), $set_expanded$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$, 1, null);
  $G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$ = function() {
    return {idx:1, eyebrow:$section_hint$$, title:$title$jscomp$18$$, children:[function() {
      var $G__28781$$ = function() {
        return {className:"mt-6", children:$APP.$cljs$core$truth_$$($expanded_QMARK_$$) ? $full_text$$ : function() {
          var $G__28786$$ = function() {
            return {children:[$preview_text$$, function() {
              var $G__28790$$ = function() {
                return {className:"flex justify-center mt-6 px-4", children:function() {
                  var $G__28794$$ = function() {
                    return {"on-click":function() {
                      var $G__28799$$ = $APP.$cljs$core$not$$($expanded_QMARK_$$);
                      return $set_expanded$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded$$.$cljs$core$IFn$_invoke$arity$1$($G__28799$$) : $set_expanded$$.call(null, $G__28799$$);
                    }, "class":"px-8 py-3", title:$expand_button_label$$};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__28794$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__28794$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28790$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28790$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28786$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28786$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28781$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28781$$);
    }(), $APP.$cljs$core$truth_$$($footer_text$$) ? $footer_text$$ : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$section_block$section_block$$, $G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$) : $APP.$helix$core$jsxs$$.call(null, $amp$components$elements$budget$section_block$section_block$$, $G__28777_map__28772_map__28772__$1_props__21778__auto__$jscomp$53_vec__28769_vec__28773$$);
};
$amp$components$elements$expandable_text_area$expandable_text_area_2$$ = function($G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$, $maybe_ref__21780__auto__$jscomp$54$$) {
  $G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$), $maybe_ref__21780__auto__$jscomp$54$$], null);
  $G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$, 0, null);
  $G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$ = $APP.$cljs$core$__destructure_map$$($G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$);
  var $section_hint$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$, $cljs$cst$565$section_hint$$), $title$jscomp$19$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$, $APP.$cljs$cst$463$title$$), $expand_button_label$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$, 
  $cljs$cst$566$expand_button_label$$), $preview_text$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$, $cljs$cst$567$preview_text$$), $full_text$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$, $cljs$cst$568$full_text$$), $footer_text$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$, 
  $cljs$cst$569$footer_text$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$ = $APP.$helix$hooks$use_state$$(!1);
  var $expanded_QMARK_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$, 0, null), $set_expanded$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$, 1, null);
  $G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$ = function() {
    return {idx:1, eyebrow:$section_hint$jscomp$1$$, title:$title$jscomp$19$$, children:[function() {
      var $G__28831$$ = function() {
        return {className:"mt-6", children:$APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$1$$) ? function() {
          var $G__28845$$ = {};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($full_text$jscomp$1$$, $G__28845$$) : $APP.$helix$core$jsx$$.call(null, $full_text$jscomp$1$$, $G__28845$$);
        }() : function() {
          var $G__28859$$ = function() {
            return {children:[function() {
              var $G__28873$$ = {};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($preview_text$jscomp$1$$, $G__28873$$) : $APP.$helix$core$jsx$$.call(null, $preview_text$jscomp$1$$, $G__28873$$);
            }(), function() {
              var $G__28880$$ = function() {
                return {className:"flex justify-center mt-6 px-4", children:function() {
                  var $G__28892$$ = function() {
                    return {"on-click":function() {
                      var $G__28907$$ = $APP.$cljs$core$not$$($expanded_QMARK_$jscomp$1$$);
                      return $set_expanded$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__28907$$) : $set_expanded$jscomp$1$$.call(null, $G__28907$$);
                    }, "class":"px-8 py-3", title:$expand_button_label$jscomp$1$$};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__28892$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__28892$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28880$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28880$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28859$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28859$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28831$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28831$$);
    }(), $APP.$cljs$core$truth_$$($footer_text$jscomp$1$$) ? function() {
      var $G__28944$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($footer_text$jscomp$1$$, $G__28944$$) : $APP.$helix$core$jsx$$.call(null, $footer_text$jscomp$1$$, $G__28944$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$section_block$section_block$$, $G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$) : $APP.$helix$core$jsxs$$.call(null, $amp$components$elements$budget$section_block$section_block$$, $G__28825_map__28811_map__28811__$1_props__21778__auto__$jscomp$54_vec__28808_vec__28821$$);
};
$amp$hooks$use_intersection_observer$use_intersection_observer$$ = function($var_args$jscomp$424$$) {
  for (var $args__5755__auto__$jscomp$45$$ = [], $len__5749__auto___29111$$ = arguments.length, $i__5750__auto___29112$$ = 0;;) {
    if ($i__5750__auto___29112$$ < $len__5749__auto___29111$$) {
      $args__5755__auto__$jscomp$45$$.push(arguments[$i__5750__auto___29112$$]), $i__5750__auto___29112$$ += 1;
    } else {
      break;
    }
  }
  return $amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(arguments[0], 1 < $args__5755__auto__$jscomp$45$$.length ? new $APP.$cljs$core$IndexedSeq$$($args__5755__auto__$jscomp$45$$.slice(1), 0, null) : null);
};
$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$ = function($ref$jscomp$15$$, $is_visible_QMARK_$jscomp$7_map__28951__$1_p__28950$$) {
  $is_visible_QMARK_$jscomp$7_map__28951__$1_p__28950$$ = $APP.$cljs$core$__destructure_map$$($is_visible_QMARK_$jscomp$7_map__28951__$1_p__28950$$);
  var $threshold$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_visible_QMARK_$jscomp$7_map__28951__$1_p__28950$$, $cljs$cst$570$threshold$$, 0.1), $root_margin$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_visible_QMARK_$jscomp$7_map__28951__$1_p__28950$$, $cljs$cst$571$root_margin$$, "0px"), $on_enter$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($is_visible_QMARK_$jscomp$7_map__28951__$1_p__28950$$, $APP.$cljs$cst$471$on_enter$$), $on_exit$$ = 
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($is_visible_QMARK_$jscomp$7_map__28951__$1_p__28950$$, $cljs$cst$572$on_exit$$), $G__28989_29114_vec__28962_vec__28965$$ = $APP.$helix$hooks$use_state$$(!1);
  $is_visible_QMARK_$jscomp$7_map__28951__$1_p__28950$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28989_29114_vec__28962_vec__28965$$, 0, null);
  var $set_is_visible_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28989_29114_vec__28962_vec__28965$$, 1, null);
  $G__28989_29114_vec__28962_vec__28965$$ = $APP.$helix$hooks$use_state$$(!1);
  var $visited_QMARK_$jscomp$11$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28989_29114_vec__28962_vec__28965$$, 0, null), $set_visited_BANG_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28989_29114_vec__28962_vec__28965$$, 1, null);
  $G__28989_29114_vec__28962_vec__28965$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    $APP.$cljs$core$tap_GT_$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$199$ref$$, $ref$jscomp$15$$, $cljs$cst$573$derefed$$, $APP.$cljs$core$_deref$$($ref$jscomp$15$$)], null));
    if ($APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$15$$))) {
      var $observer$$ = new IntersectionObserver(function($c__5548__auto__$jscomp$10_entries$jscomp$3_seq__29019_temp__5823__auto__$jscomp$68$$) {
        $c__5548__auto__$jscomp$10_entries$jscomp$3_seq__29019_temp__5823__auto__$jscomp$68$$ = $APP.$cljs$core$seq$$($c__5548__auto__$jscomp$10_entries$jscomp$3_seq__29019_temp__5823__auto__$jscomp$68$$);
        for (var $G__29122_chunk__29020_seq__29019__$1$$ = null, $G__29121_count__29021$$ = 0, $i__29022$$ = 0;;) {
          if ($i__29022$$ < $G__29121_count__29021$$) {
            var $G__29123_entry$jscomp$26$$ = $G__29122_chunk__29020_seq__29019__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__29022$$), $is_intersecting_29116$$ = $G__29123_entry$jscomp$26$$.isIntersecting;
            $set_is_visible_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_visible_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($is_intersecting_29116$$) : $set_is_visible_BANG_$$.call(null, $is_intersecting_29116$$);
            $APP.$cljs$core$truth_$$($is_intersecting_29116$$) && ($set_visited_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_visited_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $set_visited_BANG_$jscomp$1$$.call(null, !0), $APP.$cljs$core$truth_$$($on_enter$jscomp$1$$) && ($on_enter$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_enter$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__29123_entry$jscomp$26$$) : $on_enter$jscomp$1$$.call(null, $G__29123_entry$jscomp$26$$)));
            $APP.$cljs$core$truth_$$(function() {
              var $and__5023__auto__$jscomp$65$$ = $APP.$cljs$core$not$$($is_intersecting_29116$$);
              return $and__5023__auto__$jscomp$65$$ ? $visited_QMARK_$jscomp$11$$ : $and__5023__auto__$jscomp$65$$;
            }()) && $APP.$cljs$core$truth_$$($on_exit$$) && ($on_exit$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_exit$$.$cljs$core$IFn$_invoke$arity$1$($G__29123_entry$jscomp$26$$) : $on_exit$$.call(null, $G__29123_entry$jscomp$26$$));
            $i__29022$$ += 1;
          } else {
            if ($c__5548__auto__$jscomp$10_entries$jscomp$3_seq__29019_temp__5823__auto__$jscomp$68$$ = $APP.$cljs$core$seq$$($c__5548__auto__$jscomp$10_entries$jscomp$3_seq__29019_temp__5823__auto__$jscomp$68$$)) {
              $G__29122_chunk__29020_seq__29019__$1$$ = $c__5548__auto__$jscomp$10_entries$jscomp$3_seq__29019_temp__5823__auto__$jscomp$68$$;
              if ($APP.$cljs$core$chunked_seq_QMARK_$$($G__29122_chunk__29020_seq__29019__$1$$)) {
                $c__5548__auto__$jscomp$10_entries$jscomp$3_seq__29019_temp__5823__auto__$jscomp$68$$ = $APP.$cljs$core$_chunked_first$$($G__29122_chunk__29020_seq__29019__$1$$), $G__29121_count__29021$$ = $APP.$cljs$core$_chunked_rest$$($G__29122_chunk__29020_seq__29019__$1$$), $G__29122_chunk__29020_seq__29019__$1$$ = $c__5548__auto__$jscomp$10_entries$jscomp$3_seq__29019_temp__5823__auto__$jscomp$68$$, $G__29123_entry$jscomp$26$$ = $APP.$cljs$core$count$$($c__5548__auto__$jscomp$10_entries$jscomp$3_seq__29019_temp__5823__auto__$jscomp$68$$), 
                $c__5548__auto__$jscomp$10_entries$jscomp$3_seq__29019_temp__5823__auto__$jscomp$68$$ = $G__29121_count__29021$$, $G__29121_count__29021$$ = $G__29123_entry$jscomp$26$$;
              } else {
                $G__29123_entry$jscomp$26$$ = $APP.$cljs$core$first$$($G__29122_chunk__29020_seq__29019__$1$$);
                var $is_intersecting_29125$$ = $G__29123_entry$jscomp$26$$.isIntersecting;
                $set_is_visible_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_visible_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($is_intersecting_29125$$) : $set_is_visible_BANG_$$.call(null, $is_intersecting_29125$$);
                $APP.$cljs$core$truth_$$($is_intersecting_29125$$) && ($set_visited_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_visited_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $set_visited_BANG_$jscomp$1$$.call(null, !0), $APP.$cljs$core$truth_$$($on_enter$jscomp$1$$) && ($on_enter$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_enter$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__29123_entry$jscomp$26$$) : $on_enter$jscomp$1$$.call(null, $G__29123_entry$jscomp$26$$)));
                $APP.$cljs$core$truth_$$(function() {
                  var $and__5023__auto__$jscomp$66$$ = $APP.$cljs$core$not$$($is_intersecting_29125$$);
                  return $and__5023__auto__$jscomp$66$$ ? $visited_QMARK_$jscomp$11$$ : $and__5023__auto__$jscomp$66$$;
                }()) && $APP.$cljs$core$truth_$$($on_exit$$) && ($on_exit$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_exit$$.$cljs$core$IFn$_invoke$arity$1$($G__29123_entry$jscomp$26$$) : $on_exit$$.call(null, $G__29123_entry$jscomp$26$$));
                $c__5548__auto__$jscomp$10_entries$jscomp$3_seq__29019_temp__5823__auto__$jscomp$68$$ = $APP.$cljs$core$next$$($G__29122_chunk__29020_seq__29019__$1$$);
                $G__29122_chunk__29020_seq__29019__$1$$ = null;
                $G__29121_count__29021$$ = 0;
              }
              $i__29022$$ = 0;
            } else {
              return null;
            }
          }
        }
      }, {threshold:$threshold$$, rootMargin:$root_margin$$});
      try {
        $observer$$.observe($APP.$cljs$core$_deref$$($ref$jscomp$15$$));
      } catch ($e29080$$) {
        if ($e29080$$ instanceof Error) {
          $APP.$cljs$core$tap_GT_$$($e29080$$);
        } else {
          throw $e29080$$;
        }
      }
      return function() {
        return $observer$$.disconnect();
      };
    }
    return null;
  });
  var $G__28990_29115$$ = [$ref$jscomp$15$$, $threshold$$, $root_margin$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__28989_29114_vec__28962_vec__28965$$, $G__28990_29115$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__28989_29114_vec__28962_vec__28965$$, $G__28990_29115$$);
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$visited_QMARK_$jscomp$11$$, $is_visible_QMARK_$jscomp$7_map__28951__$1_p__28950$$], null);
};
$amp$components$ui$overlays$caption_overlay$$ = function($G__28975_map__28956_parent_styles$jscomp$1_props__21778__auto__$jscomp$55_vec__28953$$, $children$jscomp$20_maybe_ref__21780__auto__$jscomp$55$$) {
  $G__28975_map__28956_parent_styles$jscomp$1_props__21778__auto__$jscomp$55_vec__28953$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28975_map__28956_parent_styles$jscomp$1_props__21778__auto__$jscomp$55_vec__28953$$), $children$jscomp$20_maybe_ref__21780__auto__$jscomp$55$$], null);
  $G__28975_map__28956_parent_styles$jscomp$1_props__21778__auto__$jscomp$55_vec__28953$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28975_map__28956_parent_styles$jscomp$1_props__21778__auto__$jscomp$55_vec__28953$$, 0, null);
  var $map__28956__$1_outer_transform_rotation$jscomp$3_rotation__$1$$ = $APP.$cljs$core$__destructure_map$$($G__28975_map__28956_parent_styles$jscomp$1_props__21778__auto__$jscomp$55_vec__28953$$);
  $G__28975_map__28956_parent_styles$jscomp$1_props__21778__auto__$jscomp$55_vec__28953$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__28956__$1_outer_transform_rotation$jscomp$3_rotation__$1$$, $cljs$cst$582$parent_styles$$);
  $children$jscomp$20_maybe_ref__21780__auto__$jscomp$55$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__28956__$1_outer_transform_rotation$jscomp$3_rotation__$1$$, $APP.$cljs$cst$198$children$$);
  var $config$jscomp$10_pos_config_position$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__28956__$1_outer_transform_rotation$jscomp$3_rotation__$1$$, $APP.$cljs$cst$583$position$$);
  $map__28956__$1_outer_transform_rotation$jscomp$3_rotation__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__28956__$1_outer_transform_rotation$jscomp$3_rotation__$1$$, $APP.$cljs$cst$584$rotation$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $map__28956__$1_outer_transform_rotation$jscomp$3_rotation__$1$$ = $APP.$cljs$core$truth_$$($map__28956__$1_outer_transform_rotation$jscomp$3_rotation__$1$$) ? $map__28956__$1_outer_transform_rotation$jscomp$3_rotation__$1$$ : 0;
  $config$jscomp$10_pos_config_position$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$components$ui$overlays$position_configs$$, $APP.$cljs$core$truth_$$($config$jscomp$10_pos_config_position$jscomp$4$$) ? $config$jscomp$10_pos_config_position$jscomp$4$$ : $cljs$cst$574$tl$$);
  $config$jscomp$10_pos_config_position$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($config$jscomp$10_pos_config_position$jscomp$4$$, $map__28956__$1_outer_transform_rotation$jscomp$3_rotation__$1$$, $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($config$jscomp$10_pos_config_position$jscomp$4$$, 0));
  $map__28956__$1_outer_transform_rotation$jscomp$3_rotation__$1$$ = ["rotate(", $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($map__28956__$1_outer_transform_rotation$jscomp$3_rotation__$1$$), "deg) ", $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$577$translate$$.$cljs$core$IFn$_invoke$arity$1$($config$jscomp$10_pos_config_position$jscomp$4$$))].join("");
  $G__28975_map__28956_parent_styles$jscomp$1_props__21778__auto__$jscomp$55_vec__28953$$ = {className:$APP.$helix$impl$props$normalize_class$$(["absolute whitespace-nowrap ", $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$576$pos$$.$cljs$core$IFn$_invoke$arity$1$($config$jscomp$10_pos_config_position$jscomp$4$$)), " ", $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$575$origin$$.$cljs$core$IFn$_invoke$arity$1$($config$jscomp$10_pos_config_position$jscomp$4$$)), " ", 
  $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__28975_map__28956_parent_styles$jscomp$1_props__21778__auto__$jscomp$55_vec__28953$$)].join("")), style:{transform:$APP.$helix$impl$props$__GT_js$$($map__28956__$1_outer_transform_rotation$jscomp$3_rotation__$1$$)}, children:$children$jscomp$20_maybe_ref__21780__auto__$jscomp$55$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28975_map__28956_parent_styles$jscomp$1_props__21778__auto__$jscomp$55_vec__28953$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28975_map__28956_parent_styles$jscomp$1_props__21778__auto__$jscomp$55_vec__28953$$);
};
$amp$components$media$lazy_image_gallery$lazy_image_gallery$$ = function($G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$, $G__29154_29395_G__29156_29399_maybe_ref__21780__auto__$jscomp$56$$) {
  $G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$), $G__29154_29395_G__29156_29399_maybe_ref__21780__auto__$jscomp$56$$], 
  null);
  $G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$, 0, null);
  $G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$ = $APP.$cljs$core$__destructure_map$$($G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$);
  var $slides$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$, $cljs$cst$585$slides$$), $enabled_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$, $cljs$cst$586$enabled_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$ = $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$587$delay$$, 7000], null));
  $G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$ = $module$node_modules$embla_carousel_react$cjs$embla_carousel_react_cjs$$($APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$588$loop$$, !0], null)), $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$module$node_modules$embla_carousel_autoplay$cjs$embla_carousel_autoplay_cjs$$($G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$)], 
  null)));
  var $embla_container_ref$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$, 0, null), $embla_api$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$, 1, null), $autoplay$$ = function() {
    function $G__29142$$() {
      return $APP.$cljs$core$truth_$$($embla_api$$) ? $embla_api$$.plugins().autoplay : null;
    }
    var $G__29143$$ = [$embla_api$$];
    return $APP.$helix$hooks$raw_use_memo$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_memo$$.$cljs$core$IFn$_invoke$arity$2$($G__29142$$, $G__29143$$) : $APP.$helix$hooks$raw_use_memo$$.call(null, $G__29142$$, $G__29143$$);
  }();
  $G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$ = $APP.$helix$hooks$use_state$$(1);
  var $current_index$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$, 0, null), $set_current_index_BANG_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$, 1, null), 
  $total_slides$$ = $APP.$cljs$core$count$$($slides$$), $next_slide$$ = function() {
    var $G__29144$$ = $APP.$cljs$core$truth_$$($embla_api$$) ? $embla_api$$.scrollNext : null, $G__29145$$ = [$embla_api$$];
    return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__29144$$, $G__29145$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__29144$$, $G__29145$$);
  }(), $previous_slide$$ = function() {
    var $G__29146$$ = $APP.$cljs$core$truth_$$($embla_api$$) ? $embla_api$$.scrollPrev : null, $G__29147$$ = [$embla_api$$];
    return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__29146$$, $G__29147$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__29146$$, $G__29147$$);
  }(), $on_scroll_handler$$ = function() {
    function $G__29148$$() {
      var $G__29150_JSCompiler_inline_result$jscomp$2016_fexpr__29152$jscomp$inline_2442_index$jscomp$inline_2829$$ = $embla_api$$.scrollProgress;
      $G__29150_JSCompiler_inline_result$jscomp$2016_fexpr__29152$jscomp$inline_2442_index$jscomp$inline_2829$$ = $G__29150_JSCompiler_inline_result$jscomp$2016_fexpr__29152$jscomp$inline_2442_index$jscomp$inline_2829$$.$cljs$core$IFn$_invoke$arity$0$ ? $G__29150_JSCompiler_inline_result$jscomp$2016_fexpr__29152$jscomp$inline_2442_index$jscomp$inline_2829$$.$cljs$core$IFn$_invoke$arity$0$() : $G__29150_JSCompiler_inline_result$jscomp$2016_fexpr__29152$jscomp$inline_2442_index$jscomp$inline_2829$$.call(null);
      $G__29150_JSCompiler_inline_result$jscomp$2016_fexpr__29152$jscomp$inline_2442_index$jscomp$inline_2829$$ = $APP.$cljs$math$round$$($total_slides$$ * $G__29150_JSCompiler_inline_result$jscomp$2016_fexpr__29152$jscomp$inline_2442_index$jscomp$inline_2829$$);
      $G__29150_JSCompiler_inline_result$jscomp$2016_fexpr__29152$jscomp$inline_2442_index$jscomp$inline_2829$$ = ($G__29150_JSCompiler_inline_result$jscomp$2016_fexpr__29152$jscomp$inline_2442_index$jscomp$inline_2829$$ < 0 || $G__29150_JSCompiler_inline_result$jscomp$2016_fexpr__29152$jscomp$inline_2442_index$jscomp$inline_2829$$ >= $total_slides$$ ? 0 : $G__29150_JSCompiler_inline_result$jscomp$2016_fexpr__29152$jscomp$inline_2442_index$jscomp$inline_2829$$) + 1;
      return $set_current_index_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_current_index_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__29150_JSCompiler_inline_result$jscomp$2016_fexpr__29152$jscomp$inline_2442_index$jscomp$inline_2829$$) : $set_current_index_BANG_$jscomp$1$$.call(null, $G__29150_JSCompiler_inline_result$jscomp$2016_fexpr__29152$jscomp$inline_2442_index$jscomp$inline_2829$$);
    }
    var $G__29149$$ = [$embla_api$$];
    return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__29148$$, $G__29149$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__29148$$, $G__29149$$);
  }();
  $G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($autoplay$$) ? $APP.$cljs$core$truth_$$($enabled_QMARK_$$) ? $autoplay$$.play() : $autoplay$$.stop() : null;
  });
  $G__29154_29395_G__29156_29399_maybe_ref__21780__auto__$jscomp$56$$ = [$autoplay$$, $enabled_QMARK_$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$, $G__29154_29395_G__29156_29399_maybe_ref__21780__auto__$jscomp$56$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$, 
  $G__29154_29395_G__29156_29399_maybe_ref__21780__auto__$jscomp$56$$);
  $G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($embla_api$$) ? (console.log($embla_api$$), $embla_api$$.on.$cljs$core$IFn$_invoke$arity$2$ ? $embla_api$$.on.$cljs$core$IFn$_invoke$arity$2$("scroll", $on_scroll_handler$$) : $embla_api$$.on.call(null, "scroll", $on_scroll_handler$$)) : null;
  });
  $G__29154_29395_G__29156_29399_maybe_ref__21780__auto__$jscomp$56$$ = [$embla_api$$, $on_scroll_handler$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$, $G__29154_29395_G__29156_29399_maybe_ref__21780__auto__$jscomp$56$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$, 
  $G__29154_29395_G__29156_29399_maybe_ref__21780__auto__$jscomp$56$$);
  $G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$ = function() {
    return {className:"relative h-full w-full", children:function() {
      var $G__29172$$ = function() {
        return {ref:$embla_container_ref$$, className:"embla h-full w-full", children:[function() {
          var $G__29176$$ = function() {
            return {className:"embla__container h-full w-full flex", children:$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__29184_idx$jscomp$62$$, $map__29182__$1_p__29179$$) {
              $map__29182__$1_p__29179$$ = $APP.$cljs$core$__destructure_map$$($map__29182__$1_p__29179$$);
              var $img_src$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__29182__$1_p__29179$$, $APP.$cljs$cst$523$img_src$$), $credit$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__29182__$1_p__29179$$, $APP.$cljs$cst$526$credit$$), $caption$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__29182__$1_p__29179$$, $APP.$cljs$cst$525$caption$$), $aspect_ratio$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__29182__$1_p__29179$$, 
              $APP.$cljs$cst$532$aspect_ratio$$), $is_active_QMARK_$jscomp$13$$ = $APP.$cljs$core$truth_$$($enabled_QMARK_$$) ? $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($G__29184_idx$jscomp$62$$, $current_index$jscomp$2$$ - 1) : $enabled_QMARK_$$;
              $G__29184_idx$jscomp$62$$ = function() {
                return {className:"embla__slide h-full w-full min-h-screen relative", children:function() {
                  var $G__29189$$ = function() {
                    return {className:"absolute w-full h-full ", children:function() {
                      var $G__29193$$ = function() {
                        return {"img-src":$img_src$jscomp$6$$, "aspect-ratio":$aspect_ratio$jscomp$7$$, "active?":$is_active_QMARK_$jscomp$13$$, children:function() {
                          var $G__29201$$ = function() {
                            return {className:"", children:[function() {
                              var $G__29207_G__29213$jscomp$inline_3440_G__29220$jscomp$inline_3441_JSCompiler_inline_result$jscomp$inline_3439$$ = {className:"italic text-xs", children:$caption$jscomp$4$$};
                              $G__29207_G__29213$jscomp$inline_3440_G__29220$jscomp$inline_3441_JSCompiler_inline_result$jscomp$inline_3439$$ = {children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29207_G__29213$jscomp$inline_3440_G__29220$jscomp$inline_3441_JSCompiler_inline_result$jscomp$inline_3439$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29207_G__29213$jscomp$inline_3440_G__29220$jscomp$inline_3441_JSCompiler_inline_result$jscomp$inline_3439$$)};
                              $G__29207_G__29213$jscomp$inline_3440_G__29220$jscomp$inline_3441_JSCompiler_inline_result$jscomp$inline_3439$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29207_G__29213$jscomp$inline_3440_G__29220$jscomp$inline_3441_JSCompiler_inline_result$jscomp$inline_3439$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29207_G__29213$jscomp$inline_3440_G__29220$jscomp$inline_3441_JSCompiler_inline_result$jscomp$inline_3439$$);
                              $G__29207_G__29213$jscomp$inline_3440_G__29220$jscomp$inline_3441_JSCompiler_inline_result$jscomp$inline_3439$$ = {position:$cljs$cst$574$tl$$, rotation:90, "parent-styles":"font-fira-code\n                               bg-white/70\n                               px-2\n                               text-slate-700", children:$G__29207_G__29213$jscomp$inline_3440_G__29220$jscomp$inline_3441_JSCompiler_inline_result$jscomp$inline_3439$$};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$ui$overlays$caption_overlay$$, $G__29207_G__29213$jscomp$inline_3440_G__29220$jscomp$inline_3441_JSCompiler_inline_result$jscomp$inline_3439$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$ui$overlays$caption_overlay$$, $G__29207_G__29213$jscomp$inline_3440_G__29220$jscomp$inline_3441_JSCompiler_inline_result$jscomp$inline_3439$$);
                            }(), function() {
                              var $G__29232_G__29240$jscomp$inline_3444_G__29246$jscomp$inline_3445_JSCompiler_inline_result$jscomp$inline_3443$$ = {className:"italic text-xs", children:$credit$jscomp$4$$};
                              $G__29232_G__29240$jscomp$inline_3444_G__29246$jscomp$inline_3445_JSCompiler_inline_result$jscomp$inline_3443$$ = {children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29232_G__29240$jscomp$inline_3444_G__29246$jscomp$inline_3445_JSCompiler_inline_result$jscomp$inline_3443$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29232_G__29240$jscomp$inline_3444_G__29246$jscomp$inline_3445_JSCompiler_inline_result$jscomp$inline_3443$$)};
                              $G__29232_G__29240$jscomp$inline_3444_G__29246$jscomp$inline_3445_JSCompiler_inline_result$jscomp$inline_3443$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29232_G__29240$jscomp$inline_3444_G__29246$jscomp$inline_3445_JSCompiler_inline_result$jscomp$inline_3443$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29232_G__29240$jscomp$inline_3444_G__29246$jscomp$inline_3445_JSCompiler_inline_result$jscomp$inline_3443$$);
                              $G__29232_G__29240$jscomp$inline_3444_G__29246$jscomp$inline_3445_JSCompiler_inline_result$jscomp$inline_3443$$ = {position:$cljs$cst$579$bl$$, "parent-styles":"font-fira-code\n                               bg-white/70\n                               px-2\n                               text-slate-700", children:$G__29232_G__29240$jscomp$inline_3444_G__29246$jscomp$inline_3445_JSCompiler_inline_result$jscomp$inline_3443$$};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$ui$overlays$caption_overlay$$, $G__29232_G__29240$jscomp$inline_3444_G__29246$jscomp$inline_3445_JSCompiler_inline_result$jscomp$inline_3443$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$ui$overlays$caption_overlay$$, $G__29232_G__29240$jscomp$inline_3444_G__29246$jscomp$inline_3445_JSCompiler_inline_result$jscomp$inline_3443$$);
                            }()]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29201$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29201$$);
                        }()};
                      }();
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__29193$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__29193$$);
                    }()};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29189$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29189$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__29184_idx$jscomp$62$$, $img_src$jscomp$6$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29184_idx$jscomp$62$$, $img_src$jscomp$6$$);
            }, $slides$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29176$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29176$$);
        }(), function() {
          var $G__29266$$ = function() {
            return {className:"absolute w-full top-1/2 transform -translate-y-1/2", children:function() {
              var $G__29272$$ = function() {
                return {className:"flex justify-between h-full w-full items-center ", children:[function() {
                  var $G__29276_G__29283$jscomp$inline_3326_G__29294$jscomp$inline_3327_JSCompiler_inline_result$jscomp$inline_3325$$ = {};
                  $G__29276_G__29283$jscomp$inline_3326_G__29294$jscomp$inline_3327_JSCompiler_inline_result$jscomp$inline_3325$$ = {className:"w-10 h-10 transition-transform rotate-180 text-red-500", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$icons$ChevronRightIcon$$, $G__29276_G__29283$jscomp$inline_3326_G__29294$jscomp$inline_3327_JSCompiler_inline_result$jscomp$inline_3325$$) : $APP.$helix$core$jsx$$.call(null, 
                  $amp$components$icons$ChevronRightIcon$$, $G__29276_G__29283$jscomp$inline_3326_G__29294$jscomp$inline_3327_JSCompiler_inline_result$jscomp$inline_3325$$)};
                  $G__29276_G__29283$jscomp$inline_3326_G__29294$jscomp$inline_3327_JSCompiler_inline_result$jscomp$inline_3325$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29276_G__29283$jscomp$inline_3326_G__29294$jscomp$inline_3327_JSCompiler_inline_result$jscomp$inline_3325$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29276_G__29283$jscomp$inline_3326_G__29294$jscomp$inline_3327_JSCompiler_inline_result$jscomp$inline_3325$$);
                  $G__29276_G__29283$jscomp$inline_3326_G__29294$jscomp$inline_3327_JSCompiler_inline_result$jscomp$inline_3325$$ = {onClick:$previous_slide$$, className:"w-12 flex items-center ", children:$G__29276_G__29283$jscomp$inline_3326_G__29294$jscomp$inline_3327_JSCompiler_inline_result$jscomp$inline_3325$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29276_G__29283$jscomp$inline_3326_G__29294$jscomp$inline_3327_JSCompiler_inline_result$jscomp$inline_3325$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29276_G__29283$jscomp$inline_3326_G__29294$jscomp$inline_3327_JSCompiler_inline_result$jscomp$inline_3325$$);
                }(), function() {
                  var $G__29299_G__29307$jscomp$inline_3330_G__29311$jscomp$inline_3331_JSCompiler_inline_result$jscomp$inline_3329$$ = {};
                  $G__29299_G__29307$jscomp$inline_3330_G__29311$jscomp$inline_3331_JSCompiler_inline_result$jscomp$inline_3329$$ = {className:"w-10 h-10 transition-transform text-red-500", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$icons$ChevronRightIcon$$, $G__29299_G__29307$jscomp$inline_3330_G__29311$jscomp$inline_3331_JSCompiler_inline_result$jscomp$inline_3329$$) : $APP.$helix$core$jsx$$.call(null, 
                  $amp$components$icons$ChevronRightIcon$$, $G__29299_G__29307$jscomp$inline_3330_G__29311$jscomp$inline_3331_JSCompiler_inline_result$jscomp$inline_3329$$)};
                  $G__29299_G__29307$jscomp$inline_3330_G__29311$jscomp$inline_3331_JSCompiler_inline_result$jscomp$inline_3329$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29299_G__29307$jscomp$inline_3330_G__29311$jscomp$inline_3331_JSCompiler_inline_result$jscomp$inline_3329$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29299_G__29307$jscomp$inline_3330_G__29311$jscomp$inline_3331_JSCompiler_inline_result$jscomp$inline_3329$$);
                  $G__29299_G__29307$jscomp$inline_3330_G__29311$jscomp$inline_3331_JSCompiler_inline_result$jscomp$inline_3329$$ = {onClick:$next_slide$$, className:"w-12 flex justify-end items-center ", children:$G__29299_G__29307$jscomp$inline_3330_G__29311$jscomp$inline_3331_JSCompiler_inline_result$jscomp$inline_3329$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29299_G__29307$jscomp$inline_3330_G__29311$jscomp$inline_3331_JSCompiler_inline_result$jscomp$inline_3329$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29299_G__29307$jscomp$inline_3330_G__29311$jscomp$inline_3331_JSCompiler_inline_result$jscomp$inline_3329$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29272$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29272$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29266$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29266$$);
        }(), function() {
          var $G__29326_G__29332$jscomp$inline_3473_G__29368$jscomp$inline_3474_G__29376$jscomp$inline_3475$$ = {"total-count":$total_slides$$, "current-index":$current_index$jscomp$2$$, "marker-styles":"w-3 h-3 bg-pink-400 rounded-full my-2 border-blue-800 border-2"};
          $G__29326_G__29332$jscomp$inline_3473_G__29368$jscomp$inline_3474_G__29376$jscomp$inline_3475$$ = {className:"", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$navs$progress_menu$progress_menu_v2$$, $G__29326_G__29332$jscomp$inline_3473_G__29368$jscomp$inline_3474_G__29376$jscomp$inline_3475$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$navs$progress_menu$progress_menu_v2$$, $G__29326_G__29332$jscomp$inline_3473_G__29368$jscomp$inline_3474_G__29376$jscomp$inline_3475$$)};
          $G__29326_G__29332$jscomp$inline_3473_G__29368$jscomp$inline_3474_G__29376$jscomp$inline_3475$$ = {className:"flex items-center justify-center w-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29326_G__29332$jscomp$inline_3473_G__29368$jscomp$inline_3474_G__29376$jscomp$inline_3475$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29326_G__29332$jscomp$inline_3473_G__29368$jscomp$inline_3474_G__29376$jscomp$inline_3475$$)};
          $G__29326_G__29332$jscomp$inline_3473_G__29368$jscomp$inline_3474_G__29376$jscomp$inline_3475$$ = {className:"absolute w-full bottom-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29326_G__29332$jscomp$inline_3473_G__29368$jscomp$inline_3474_G__29376$jscomp$inline_3475$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29326_G__29332$jscomp$inline_3473_G__29368$jscomp$inline_3474_G__29376$jscomp$inline_3475$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29326_G__29332$jscomp$inline_3473_G__29368$jscomp$inline_3474_G__29376$jscomp$inline_3475$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29326_G__29332$jscomp$inline_3473_G__29368$jscomp$inline_3474_G__29376$jscomp$inline_3475$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29172$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29172$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29153_29394_G__29155_29398_G__29168_auto_play_opts_map__29135_map__29135__$1_props__21778__auto__$jscomp$56_vec__29132_vec__29136_vec__29139$$);
};
$amp$components$elements$budget$about$preview$$ = function($G__29602_map__29595_props__21778__auto__$jscomp$57_vec__29592$$, $maybe_ref__21780__auto__$jscomp$57$$) {
  $G__29602_map__29595_props__21778__auto__$jscomp$57_vec__29592$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__29602_map__29595_props__21778__auto__$jscomp$57_vec__29592$$), $maybe_ref__21780__auto__$jscomp$57$$], null);
  $G__29602_map__29595_props__21778__auto__$jscomp$57_vec__29592$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29602_map__29595_props__21778__auto__$jscomp$57_vec__29592$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__29602_map__29595_props__21778__auto__$jscomp$57_vec__29592$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__29602_map__29595_props__21778__auto__$jscomp$57_vec__29592$$ = function() {
    return {className:"space-y-4 px-4", children:function() {
      var $G__29610$$ = function() {
        return {className:"text-xl", children:["Over the entire six-month duration of the Biennale, the ", function() {
          var $G__29622$$ = {className:"font-bold text-pink-400", children:"Armenia Pavilion"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29622$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29622$$);
        }(), " will operate as ", function() {
          var $G__29635$$ = {className:"italic", children:"The Studio"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29635$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29635$$);
        }(), ", a functioning atelier where the artist ", function() {
          var $G__29652$$ = {className:"font-medium", children:"Zadik Zadikian"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29652$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29652$$);
        }(), ", with his son Aram and assistants, will be engaged in the process and the study of making things. ", "Located in the ", function() {
          var $G__29691$$ = {className:"font-medium", children:"Arsenale Militare"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29691$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29691$$);
        }(), ", a vast complex of shipyards and armories that for over 900 years was the heart of Venetian naval power, ", "the studio becomes a neutral site where things are studied, formed, cast, assembled, and made through ", function() {
          var $G__29728$$ = {className:"text-white/90", children:"precision, repetition, calibration, attentive labor, and careful consideration"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29728$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29728$$);
        }(), ". Using the art and language of craft—long a part of the culture of Armenia, of Venice, and of human experience everywhere—", "Zadikian actualizes the studio as a workshop of the handmade, the contemplative, and the constantly developing sculpture."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29610$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__29610$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29602_map__29595_props__21778__auto__$jscomp$57_vec__29592$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29602_map__29595_props__21778__auto__$jscomp$57_vec__29592$$);
};
$amp$components$elements$budget$about$details$$ = function($G__30267_map__30264_props__21778__auto__$jscomp$58_vec__30261$$, $maybe_ref__21780__auto__$jscomp$58$$) {
  $G__30267_map__30264_props__21778__auto__$jscomp$58_vec__30261$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__30267_map__30264_props__21778__auto__$jscomp$58_vec__30261$$), $maybe_ref__21780__auto__$jscomp$58$$], null);
  $G__30267_map__30264_props__21778__auto__$jscomp$58_vec__30261$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30267_map__30264_props__21778__auto__$jscomp$58_vec__30261$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__30267_map__30264_props__21778__auto__$jscomp$58_vec__30261$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__30267_map__30264_props__21778__auto__$jscomp$58_vec__30261$$ = function() {
    return {children:function() {
      var $G__30271$$ = function() {
        return {className:"px-4 space-y-4", children:[function() {
          var $G__30288$$ = function() {
            return {className:"text-xl text-slate-100", children:["Over the entire six-month duration of the Biennale, the ", function() {
              var $G__30306$$ = {className:"font-bold text-pink-400", children:"Armenia Pavilion"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30306$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30306$$);
            }(), " will operate as ", function() {
              var $G__30326$$ = {className:"italic", children:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30326$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30326$$);
            }(), ", a functioning atelier where the artist ", function() {
              var $G__30344$$ = {className:"font-medium", children:"Zadik Zadikian"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30344$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30344$$);
            }(), ", with his son Aram and assistants, will be engaged in the process and the study of making things. ", "Located in the ", function() {
              var $G__30360$$ = {className:"font-medium", children:"Arsenale Militare"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30360$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30360$$);
            }(), ", a vast complex of shipyards and armories that for over 900 years was the heart of Venetian naval power, ", "the studio becomes a neutral site where things are studied, formed, cast, assembled, and made through ", function() {
              var $G__30424$$ = {className:"text-white/90", children:"precision, repetition, calibration, attentive labor, and careful consideration"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30424$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30424$$);
            }(), ". Using the art and language of craft—long a part of the culture of Armenia, of Venice, and of human experience everywhere—", "Zadikian actualizes the studio as a workshop of the handmade, the contemplative, and the constantly developing sculpture."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30288$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30288$$);
        }(), function() {
          var $G__30454$$ = function() {
            return {children:["Centered on the most basic unit—the ", function() {
              var $G__30462$$ = {className:"font-medium", children:"block, or brick"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30462$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30462$$);
            }(), "—which has been continuously used for building for over eleven millennia, ", "Zadikian’s simplified plaster casts are elemental and foundational: a humble aesthetics where form, beauty, and meaning emerge through ", "the assembly and fluid recombination of humanity’s most common architectural building element. ", "Evolving from the block that has remained consistent in his practice for over half a century, ", "these new composite forms extend the human scale, infused with pigments across a broad chromatic spectrum, ", 
            "and—most importantly—remain ", function() {
              var $G__30472$$ = {className:"italic", children:"free of one another and moveable"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30472$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30472$$);
            }(), "."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30454$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30454$$);
        }(), function() {
          var $G__30482_G__30614$jscomp$inline_3128$$ = {className:"font-medium", children:"singular and interdependent"};
          $G__30482_G__30614$jscomp$inline_3128$$ = {children:["Here, the studio encourages experimentation: variances within the basic units that generate unexpected amalgamations—", "multiple distinct forms resolving into a unified whole. ", "Minimal and maximal, the one and the many, the this and the that—", "the primary objects become at once ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30482_G__30614$jscomp$inline_3128$$) : 
          $APP.$helix$core$jsx$$.call(null, "span", $G__30482_G__30614$jscomp$inline_3128$$), "."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30482_G__30614$jscomp$inline_3128$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30482_G__30614$jscomp$inline_3128$$);
        }(), function() {
          var $G__30623$$ = function() {
            return {children:[function() {
              var $G__30631$$ = {className:"italic", children:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30631$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30631$$);
            }(), ", for Zadikian, is ", function() {
              var $G__30638$$ = {className:"font-medium", children:"workroom, factory, and laboratory"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30638$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30638$$);
            }(), " at once: a locus of constant production, invention, and reinvention. ", "It is a place of infinite possibility, where art is not only what is made, but the study of its creation—and what we make of it. ", "Amid Ruskin’s ", function() {
              var $G__30652$$ = {className:"italic", children:"Stones of Venice"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30652$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30652$$);
            }(), ", within the seduction of sensations that bewitch the soul, ", "Zadikian’s open studio reminds us that art can also be about ", function() {
              var $G__30658$$ = {className:"text-white/90", children:"material presence and process"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30658$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30658$$);
            }(), "."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30623$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30623$$);
        }(), function() {
          var $G__30672$$ = function() {
            return {children:["Meaning does not arrive solely through explanation, but through the object’s coming-into-being as witnessed over time. ", "The unit does not arrive as image, symbol, or representation. ", "It exists as a tangible fact—built through internal necessities of ", function() {
              var $G__30680$$ = {className:"font-medium", children:"measure, form, weight, and placement"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30680$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30680$$);
            }(), ". ", "Here, sculpture is distilled to its organic essence—not to empty it of meaning, but to fully accord it its ", function() {
              var $G__30688$$ = {className:"italic", children:"epistemic and haptic"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30688$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30688$$);
            }(), " qualities."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30672$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30672$$);
        }(), function() {
          var $G__30706$$ = function() {
            return {children:["This is why the studio itself matters—why it is foregrounded, front and center. ", "The act of making is not staged, but neither is it hidden. ", "The object’s formation is not only shown as finished; it is witnessed in its making. ", "As the pavilion’s curator, ", function() {
              var $G__30718$$ = {className:"font-semibold text-slate-100", children:"Tony Shafrazi"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30718$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30718$$);
            }(), ", has described it, the studio offers the experience of ", function() {
              var $G__30730$$ = {className:"italic", children:"“seeing and studying art in the making.”"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30730$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30730$$);
            }(), " ", "The work is not fixed in certainty or frozen in stasis; ", "it is the continuous navigation of possibility—the sum of decisions made across the life of a studio practice."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30706$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30706$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30271$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30271$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30267_map__30264_props__21778__auto__$jscomp$58_vec__30261$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30267_map__30264_props__21778__auto__$jscomp$58_vec__30261$$);
};
$amp$components$elements$budget$about$about$$ = function($G__30920_map__30868_map__30868__$1_props__21778__auto__$jscomp$59_vec__30864_vec__30879$$, $maybe_ref__21780__auto__$jscomp$59$$) {
  $G__30920_map__30868_map__30868__$1_props__21778__auto__$jscomp$59_vec__30864_vec__30879$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__30920_map__30868_map__30868__$1_props__21778__auto__$jscomp$59_vec__30864_vec__30879$$), $maybe_ref__21780__auto__$jscomp$59$$], null);
  $G__30920_map__30868_map__30868__$1_props__21778__auto__$jscomp$59_vec__30864_vec__30879$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30920_map__30868_map__30868__$1_props__21778__auto__$jscomp$59_vec__30864_vec__30879$$, 0, null);
  $G__30920_map__30868_map__30868__$1_props__21778__auto__$jscomp$59_vec__30864_vec__30879$$ = $APP.$cljs$core$__destructure_map$$($G__30920_map__30868_map__30868__$1_props__21778__auto__$jscomp$59_vec__30864_vec__30879$$);
  var $id$jscomp$67$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__30920_map__30868_map__30868__$1_props__21778__auto__$jscomp$59_vec__30864_vec__30879$$, $APP.$cljs$cst$290$id$$), $subtitle$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__30920_map__30868_map__30868__$1_props__21778__auto__$jscomp$59_vec__30864_vec__30879$$, $cljs$cst$589$subtitle$$), $title$jscomp$20$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__30920_map__30868_map__30868__$1_props__21778__auto__$jscomp$59_vec__30864_vec__30879$$, 
  $APP.$cljs$cst$463$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$11$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__30920_map__30868_map__30868__$1_props__21778__auto__$jscomp$59_vec__30864_vec__30879$$ = $amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ctx$jscomp$11$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$472$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30920_map__30868_map__30868__$1_props__21778__auto__$jscomp$59_vec__30864_vec__30879$$, 0, null);
  var $is_visible_QMARK_$jscomp$8$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30920_map__30868_map__30868__$1_props__21778__auto__$jscomp$59_vec__30864_vec__30879$$, 1, null);
  $G__30920_map__30868_map__30868__$1_props__21778__auto__$jscomp$59_vec__30864_vec__30879$$ = function() {
    return {id:$id$jscomp$67$$, children:[function() {
      var $G__30939$$ = {"section-hint":$subtitle$$, title:$title$jscomp$20$$, "expand-button-label":"Read more", "preview-text":$amp$components$elements$budget$about$preview$$, "full-text":$amp$components$elements$budget$about$details$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__30939$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__30939$$);
    }(), function() {
      var $G__30943_G__30947$jscomp$inline_3131_JSCompiler_inline_result$jscomp$inline_3130$$ = {"enabled?":$is_visible_QMARK_$jscomp$8$$, slides:new $APP.$cljs$core$PersistentVector$$(null, 10, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$523$img_src$$, "https://atd-722658831.imgix.net/blue_yellow/top_view.jpg", $APP.$cljs$cst$532$aspect_ratio$$, 0.75, $APP.$cljs$cst$525$caption$$, "BLUE YELLOW BLUE YELLOW", $APP.$cljs$cst$526$credit$$, 
      "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$523$img_src$$, "https://atd-722658831.imgix.net/blue_yellow/side-2.jpg", $APP.$cljs$cst$532$aspect_ratio$$, 0.75, $APP.$cljs$cst$525$caption$$, "BLUE YELLOW BLUE YELLOW", $APP.$cljs$cst$526$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$523$img_src$$, "https://atd-722658831.imgix.net/blue_yellow/cu-2.jpg", $APP.$cljs$cst$532$aspect_ratio$$, 0.75, $APP.$cljs$cst$525$caption$$, 
      "BLUE YELLOW BLUE YELLOW", $APP.$cljs$cst$526$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$523$img_src$$, "https://atd-722658831.imgix.net/photos/blue_unit_with_hand.jpg", $APP.$cljs$cst$532$aspect_ratio$$, 1.5, $APP.$cljs$cst$525$caption$$, "BLUE BLOCK", $APP.$cljs$cst$526$credit$$, "Los Angeles 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$523$img_src$$, "https://atd-722658831.imgix.net/big_red/outpost.jpg", 
      $APP.$cljs$cst$532$aspect_ratio$$, 0.558, $APP.$cljs$cst$525$caption$$, "THE BIG RED", $APP.$cljs$cst$526$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$523$img_src$$, "https://atd-722658831.imgix.net/big_red/low_side.jpg", $APP.$cljs$cst$532$aspect_ratio$$, 1.77, $APP.$cljs$cst$525$caption$$, "THE BIG RED", $APP.$cljs$cst$526$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$523$img_src$$, 
      "https://atd-722658831.imgix.net/big_red/master.jpg", $APP.$cljs$cst$532$aspect_ratio$$, 1.77, $APP.$cljs$cst$525$caption$$, "THE BIG RED", $APP.$cljs$cst$526$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$523$img_src$$, "https://atd-722658831.imgix.net/big_red/corner_low.jpg", $APP.$cljs$cst$532$aspect_ratio$$, 0.75, $APP.$cljs$cst$525$caption$$, "THE BIG RED", $APP.$cljs$cst$526$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
      4, [$APP.$cljs$cst$523$img_src$$, "https://atd-722658831.imgix.net/big_red/black_leg.jpg", $APP.$cljs$cst$532$aspect_ratio$$, 0.75, $APP.$cljs$cst$525$caption$$, "THE BIG RED", $APP.$cljs$cst$526$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$523$img_src$$, "https://atd-722658831.imgix.net/big_red/flag.jpg", $APP.$cljs$cst$532$aspect_ratio$$, 1.38, $APP.$cljs$cst$525$caption$$, "THE BIG RED", $APP.$cljs$cst$526$credit$$, "Render 2026"], null)], 
      null)};
      $G__30943_G__30947$jscomp$inline_3131_JSCompiler_inline_result$jscomp$inline_3130$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$media$lazy_image_gallery$lazy_image_gallery$$, $G__30943_G__30947$jscomp$inline_3131_JSCompiler_inline_result$jscomp$inline_3130$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$media$lazy_image_gallery$lazy_image_gallery$$, $G__30943_G__30947$jscomp$inline_3131_JSCompiler_inline_result$jscomp$inline_3130$$);
      $G__30943_G__30947$jscomp$inline_3131_JSCompiler_inline_result$jscomp$inline_3130$$ = {className:"mt-6 max-h-screen", ref:$outer_ctx$jscomp$11$$, children:$G__30943_G__30947$jscomp$inline_3131_JSCompiler_inline_result$jscomp$inline_3130$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30943_G__30947$jscomp$inline_3131_JSCompiler_inline_result$jscomp$inline_3130$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30943_G__30947$jscomp$inline_3131_JSCompiler_inline_result$jscomp$inline_3130$$);
    }(), function() {
      var $G__30972$$ = {className:"space-y-4 mt-6"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30972$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30972$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30920_map__30868_map__30868__$1_props__21778__auto__$jscomp$59_vec__30864_vec__30879$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30920_map__30868_map__30868__$1_props__21778__auto__$jscomp$59_vec__30864_vec__30879$$);
};
$amp$components$elements$budget$committe$preview$$ = function($G__29088_map__29086_props__21778__auto__$jscomp$60_vec__29083$$, $maybe_ref__21780__auto__$jscomp$60$$) {
  $G__29088_map__29086_props__21778__auto__$jscomp$60_vec__29083$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__29088_map__29086_props__21778__auto__$jscomp$60_vec__29083$$), $maybe_ref__21780__auto__$jscomp$60$$], null);
  $G__29088_map__29086_props__21778__auto__$jscomp$60_vec__29083$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29088_map__29086_props__21778__auto__$jscomp$60_vec__29083$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__29088_map__29086_props__21778__auto__$jscomp$60_vec__29083$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__29088_map__29086_props__21778__auto__$jscomp$60_vec__29083$$ = function() {
    return {className:"space-y-3 p-4", children:function() {
      var $G__29092$$ = function() {
        return {children:[function() {
          var $G__29096$$ = {className:"text-slate-300", children:"To support the scale of this undertaking, a dedicated "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29096$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29096$$);
        }(), function() {
          var $G__29100$$ = {className:"font-semibold text-pink-400", children:"fundraising committee"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29100$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29100$$);
        }(), function() {
          var $G__29104$$ = {className:"text-slate-300", children:" has been formed to guide outreach, steward donor relationships, and advance the fundraising strategy required to deliver an ambitious international project in Venice."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29104$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29104$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29092$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__29092$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29088_map__29086_props__21778__auto__$jscomp$60_vec__29083$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29088_map__29086_props__21778__auto__$jscomp$60_vec__29083$$);
};
$amp$components$elements$budget$committe$details$$ = function($G__29290_map__29256_props__21778__auto__$jscomp$61_vec__29253$$, $maybe_ref__21780__auto__$jscomp$61$$) {
  $G__29290_map__29256_props__21778__auto__$jscomp$61_vec__29253$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__29290_map__29256_props__21778__auto__$jscomp$61_vec__29253$$), $maybe_ref__21780__auto__$jscomp$61$$], null);
  $G__29290_map__29256_props__21778__auto__$jscomp$61_vec__29253$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29290_map__29256_props__21778__auto__$jscomp$61_vec__29253$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__29290_map__29256_props__21778__auto__$jscomp$61_vec__29253$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__29290_map__29256_props__21778__auto__$jscomp$61_vec__29253$$ = function() {
    return {className:"text-xl text-slate-100 p-4 space-y-3", children:[function() {
      var $G__29372$$ = function() {
        return {children:[function() {
          var $G__29409$$ = {className:"text-slate-300", children:"To support the scale of this undertaking, a dedicated "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29409$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29409$$);
        }(), function() {
          var $G__29415$$ = {className:"font-semibold text-pink-400", children:"fundraising committee"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29415$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29415$$);
        }(), function() {
          var $G__29421$$ = {className:"text-slate-300", children:" has been formed to guide outreach, steward donor relationships, and advance the fundraising strategy required to deliver an ambitious international project in Venice."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29421$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29421$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29372$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__29372$$);
    }(), function() {
      var $G__29428$$ = {className:"text-slate-300", children:"The committee works in close coordination with Pavilion leadership to expand networks, cultivate institutional and private support, and sustain momentum across the full duration of the Biennale."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29428$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__29428$$);
    }(), function() {
      var $G__29434$$ = function() {
        return {className:"space-y-2", children:[function() {
          var $G__29439$$ = {className:"text-slate-300", children:"The committee is led by:"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29439$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__29439$$);
        }(), function() {
          var $G__29445$$ = function() {
            return {className:"ml-6 list-['-'] marker:text-slate-400 text-slate-100", children:[function() {
              var $G__29449$$ = {className:"px-4 italic text-slate-300", children:"Archbishop Hovnan Derderian"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__29449$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__29449$$);
            }(), function() {
              var $G__29453$$ = {className:"px-4 italic text-slate-300", children:"Tony Shafrazi"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__29453$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__29453$$);
            }(), function() {
              var $G__29459$$ = {className:"px-4 italic text-slate-300", children:"Tina Chakarian"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__29459$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__29459$$);
            }(), function() {
              var $G__29465$$ = {className:"px-4 italic text-slate-300", children:"Rafi Ourfalian"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__29465$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__29465$$);
            }(), function() {
              var $G__29471$$ = {className:"px-4 italic text-slate-300", children:"Khachik Khudikyan"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__29471$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__29471$$);
            }(), function() {
              var $G__29477$$ = {className:"px-4 italic text-slate-300", children:"Andranik Torosyan"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__29477$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__29477$$);
            }(), function() {
              var $G__29482$$ = {className:"px-4 italic text-slate-300", children:"Aram Alajajian"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__29482$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__29482$$);
            }(), function() {
              var $G__29908$$ = {className:"px-4 italic text-slate-300", children:"Vik Hovsepian"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__29908$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__29908$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ul", $G__29445$$) : $APP.$helix$core$jsxs$$.call(null, "ul", $G__29445$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29434$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29434$$);
    }(), function() {
      var $G__29920$$ = {className:"text-slate-300", children:"The committee plays an active role in introducing prospective supporters, facilitating conversations, and strengthening long-term relationships that extend beyond opening week—ensuring the Pavilion is resourced, accountable, and delivered at the highest standard."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29920$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__29920$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29290_map__29256_props__21778__auto__$jscomp$61_vec__29253$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29290_map__29256_props__21778__auto__$jscomp$61_vec__29253$$);
};
$amp$components$elements$budget$committe$committee_member_card$$ = function($G__30033_map__30028_map__30028__$1_props__21778__auto__$jscomp$62_vec__30025$$, $maybe_ref__21780__auto__$jscomp$62$$) {
  $G__30033_map__30028_map__30028__$1_props__21778__auto__$jscomp$62_vec__30025$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__30033_map__30028_map__30028__$1_props__21778__auto__$jscomp$62_vec__30025$$), $maybe_ref__21780__auto__$jscomp$62$$], null);
  $G__30033_map__30028_map__30028__$1_props__21778__auto__$jscomp$62_vec__30025$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30033_map__30028_map__30028__$1_props__21778__auto__$jscomp$62_vec__30025$$, 0, null);
  $G__30033_map__30028_map__30028__$1_props__21778__auto__$jscomp$62_vec__30025$$ = $APP.$cljs$core$__destructure_map$$($G__30033_map__30028_map__30028__$1_props__21778__auto__$jscomp$62_vec__30025$$);
  var $name$jscomp$185$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__30033_map__30028_map__30028__$1_props__21778__auto__$jscomp$62_vec__30025$$, $APP.$cljs$cst$282$name$$), $role$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__30033_map__30028_map__30028__$1_props__21778__auto__$jscomp$62_vec__30025$$, $APP.$cljs$cst$558$role$$), $img_src$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__30033_map__30028_map__30028__$1_props__21778__auto__$jscomp$62_vec__30025$$, 
  $APP.$cljs$cst$523$img_src$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__30033_map__30028_map__30028__$1_props__21778__auto__$jscomp$62_vec__30025$$, $APP.$cljs$cst$526$credit$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__30033_map__30028_map__30028__$1_props__21778__auto__$jscomp$62_vec__30025$$ = function() {
    return {className:"w-[150px] aspect-[0.7] relative ml-2 ", children:function() {
      var $G__30037$$ = function() {
        return {"img-src":$img_src$jscomp$7$$, fit:"crop", "aspect-ratio":0.7, "active?":!0, children:function() {
          var $G__30041$$ = function() {
            return {className:"", children:[function() {
              var $G__30046_G__30051$jscomp$inline_3134_JSCompiler_inline_result$jscomp$inline_3133$$ = {className:"italic text-xs", children:$name$jscomp$185$$};
              $G__30046_G__30051$jscomp$inline_3134_JSCompiler_inline_result$jscomp$inline_3133$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30046_G__30051$jscomp$inline_3134_JSCompiler_inline_result$jscomp$inline_3133$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30046_G__30051$jscomp$inline_3134_JSCompiler_inline_result$jscomp$inline_3133$$);
              $G__30046_G__30051$jscomp$inline_3134_JSCompiler_inline_result$jscomp$inline_3133$$ = {position:$cljs$cst$574$tl$$, rotation:90, "parent-styles":"font-fira-code\n                       bg-white/70\n                       px-1\n                       text-slate-500\n                        \n                        ", children:$G__30046_G__30051$jscomp$inline_3134_JSCompiler_inline_result$jscomp$inline_3133$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$ui$overlays$caption_overlay$$, $G__30046_G__30051$jscomp$inline_3134_JSCompiler_inline_result$jscomp$inline_3133$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$ui$overlays$caption_overlay$$, $G__30046_G__30051$jscomp$inline_3134_JSCompiler_inline_result$jscomp$inline_3133$$);
            }(), function() {
              var $G__30059_G__30063$jscomp$inline_3137_JSCompiler_inline_result$jscomp$inline_3136$$ = {className:"italic text-xs", children:$role$jscomp$1$$};
              $G__30059_G__30063$jscomp$inline_3137_JSCompiler_inline_result$jscomp$inline_3136$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30059_G__30063$jscomp$inline_3137_JSCompiler_inline_result$jscomp$inline_3136$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30059_G__30063$jscomp$inline_3137_JSCompiler_inline_result$jscomp$inline_3136$$);
              $G__30059_G__30063$jscomp$inline_3137_JSCompiler_inline_result$jscomp$inline_3136$$ = {position:$cljs$cst$579$bl$$, "parent-styles":"font-fira-code\n                       bg-white/70\n                       px-1\n                       text-slate-500\n                        \n                        ", children:$G__30059_G__30063$jscomp$inline_3137_JSCompiler_inline_result$jscomp$inline_3136$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$ui$overlays$caption_overlay$$, $G__30059_G__30063$jscomp$inline_3137_JSCompiler_inline_result$jscomp$inline_3136$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$ui$overlays$caption_overlay$$, $G__30059_G__30063$jscomp$inline_3137_JSCompiler_inline_result$jscomp$inline_3136$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30041$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30041$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__30037$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__30037$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30033_map__30028_map__30028__$1_props__21778__auto__$jscomp$62_vec__30025$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30033_map__30028_map__30028__$1_props__21778__auto__$jscomp$62_vec__30025$$);
};
$amp$components$elements$budget$committe$committee_gallery$$ = function($G__30156_map__30143_props__21778__auto__$jscomp$63_vec__30140$$, $maybe_ref__21780__auto__$jscomp$63$$) {
  $G__30156_map__30143_props__21778__auto__$jscomp$63_vec__30140$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__30156_map__30143_props__21778__auto__$jscomp$63_vec__30140$$), $maybe_ref__21780__auto__$jscomp$63$$], null);
  $G__30156_map__30143_props__21778__auto__$jscomp$63_vec__30140$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30156_map__30143_props__21778__auto__$jscomp$63_vec__30140$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__30156_map__30143_props__21778__auto__$jscomp$63_vec__30140$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__30156_map__30143_props__21778__auto__$jscomp$63_vec__30140$$ = function() {
    return {className:"p-4 w-full", children:function() {
      var $G__30166$$ = function() {
        return {children:[function() {
          var $G__30173_G__30488$jscomp$inline_3140$$ = {className:"text-lg font-semibold text-slate-100", children:"Committee Members"};
          $G__30173_G__30488$jscomp$inline_3140$$ = {className:"pl-4 ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__30173_G__30488$jscomp$inline_3140$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__30173_G__30488$jscomp$inline_3140$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30173_G__30488$jscomp$inline_3140$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30173_G__30488$jscomp$inline_3140$$);
        }(), function() {
          var $G__30500$$ = function() {
            return {className:"mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($name$jscomp$186_p__30507$$) {
              var $credit$jscomp$6_map__30512__$1$$ = $APP.$cljs$core$__destructure_map$$($name$jscomp$186_p__30507$$);
              $name$jscomp$186_p__30507$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$6_map__30512__$1$$, $APP.$cljs$cst$282$name$$);
              var $G__30551_G__30710$jscomp$inline_3143_JSCompiler_temp$jscomp$inline_3142_role$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$6_map__30512__$1$$, $APP.$cljs$cst$558$role$$), $img_src$jscomp$8$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$6_map__30512__$1$$, $APP.$cljs$cst$523$img_src$$);
              $credit$jscomp$6_map__30512__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$6_map__30512__$1$$, $APP.$cljs$cst$526$credit$$);
              $APP.$cljs$core$truth_$$($img_src$jscomp$8$$) ? ($G__30551_G__30710$jscomp$inline_3143_JSCompiler_temp$jscomp$inline_3142_role$jscomp$2$$ = {name:$name$jscomp$186_p__30507$$, role:$G__30551_G__30710$jscomp$inline_3143_JSCompiler_temp$jscomp$inline_3142_role$jscomp$2$$, "img-src":$img_src$jscomp$8$$, credit:$credit$jscomp$6_map__30512__$1$$}, $G__30551_G__30710$jscomp$inline_3143_JSCompiler_temp$jscomp$inline_3142_role$jscomp$2$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? 
              $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$committe$committee_member_card$$, $G__30551_G__30710$jscomp$inline_3143_JSCompiler_temp$jscomp$inline_3142_role$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$committe$committee_member_card$$, $G__30551_G__30710$jscomp$inline_3143_JSCompiler_temp$jscomp$inline_3142_role$jscomp$2$$)) : $G__30551_G__30710$jscomp$inline_3143_JSCompiler_temp$jscomp$inline_3142_role$jscomp$2$$ = 
              null;
              $G__30551_G__30710$jscomp$inline_3143_JSCompiler_temp$jscomp$inline_3142_role$jscomp$2$$ = {children:$G__30551_G__30710$jscomp$inline_3143_JSCompiler_temp$jscomp$inline_3142_role$jscomp$2$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__30551_G__30710$jscomp$inline_3143_JSCompiler_temp$jscomp$inline_3142_role$jscomp$2$$, $name$jscomp$186_p__30507$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30551_G__30710$jscomp$inline_3143_JSCompiler_temp$jscomp$inline_3142_role$jscomp$2$$, $name$jscomp$186_p__30507$$);
            }, $amp$components$elements$budget$committe$committee_members$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30500$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30500$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30166$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30166$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30156_map__30143_props__21778__auto__$jscomp$63_vec__30140$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30156_map__30143_props__21778__auto__$jscomp$63_vec__30140$$);
};
$amp$components$elements$budget$committe$committee$$ = function($G__30779_map__30765_map__30765__$1_props__21778__auto__$jscomp$64_vec__30762$$, $maybe_ref__21780__auto__$jscomp$64$$) {
  $G__30779_map__30765_map__30765__$1_props__21778__auto__$jscomp$64_vec__30762$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__30779_map__30765_map__30765__$1_props__21778__auto__$jscomp$64_vec__30762$$), $maybe_ref__21780__auto__$jscomp$64$$], null);
  $G__30779_map__30765_map__30765__$1_props__21778__auto__$jscomp$64_vec__30762$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30779_map__30765_map__30765__$1_props__21778__auto__$jscomp$64_vec__30762$$, 0, null);
  $G__30779_map__30765_map__30765__$1_props__21778__auto__$jscomp$64_vec__30762$$ = $APP.$cljs$core$__destructure_map$$($G__30779_map__30765_map__30765__$1_props__21778__auto__$jscomp$64_vec__30762$$);
  var $id$jscomp$68$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__30779_map__30765_map__30765__$1_props__21778__auto__$jscomp$64_vec__30762$$, $APP.$cljs$cst$290$id$$), $subtitle$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__30779_map__30765_map__30765__$1_props__21778__auto__$jscomp$64_vec__30762$$, $cljs$cst$589$subtitle$$), $title$jscomp$21$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__30779_map__30765_map__30765__$1_props__21778__auto__$jscomp$64_vec__30762$$, 
  $APP.$cljs$cst$463$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__30779_map__30765_map__30765__$1_props__21778__auto__$jscomp$64_vec__30762$$ = function() {
    return {id:$id$jscomp$68$$, className:"space-y-4", children:[function() {
      var $G__30791$$ = {"section-hint":$subtitle$jscomp$1$$, title:$title$jscomp$21$$, "expand-button-label":"Read more", "preview-text":$amp$components$elements$budget$committe$preview$$, "full-text":$amp$components$elements$budget$committe$details$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__30791$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__30791$$);
    }(), function() {
      var $G__30803$$ = {children:$amp$components$elements$budget$committe$committee_members$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$committe$committee_gallery$$, $G__30803$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$committe$committee_gallery$$, $G__30803$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__30779_map__30765_map__30765__$1_props__21778__auto__$jscomp$64_vec__30762$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__30779_map__30765_map__30765__$1_props__21778__auto__$jscomp$64_vec__30762$$);
};
$amp$components$elements$budget$budget_table$format_currency$$ = function($amount$$) {
  return ["$", $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(Math.round($amount$$).toLocaleString("en-US"))].join("");
};
$amp$components$elements$budget$budget_table$calculate_section_total_no_tax$$ = function($details$jscomp$3$$) {
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$590$amount$$, $details$jscomp$3$$));
};
$amp$components$elements$budget$budget_table$sub_total_all_sections$$ = function($cost_data$$) {
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__29289_SHARP__tax_rate$jscomp$inline_1454$$) {
    var $item_details$jscomp$inline_1452_sub_total$jscomp$inline_1453$$ = $cljs$cst$591$details$$.$cljs$core$IFn$_invoke$arity$1$($p1__29289_SHARP__tax_rate$jscomp$inline_1454$$);
    $item_details$jscomp$inline_1452_sub_total$jscomp$inline_1453$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$590$amount$$, $item_details$jscomp$inline_1452_sub_total$jscomp$inline_1453$$));
    $p1__29289_SHARP__tax_rate$jscomp$inline_1454$$ = $cljs$cst$592$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$593$tax$$.$cljs$core$IFn$_invoke$arity$1$($p1__29289_SHARP__tax_rate$jscomp$inline_1454$$));
    return ($p1__29289_SHARP__tax_rate$jscomp$inline_1454$$ > 0 ? $p1__29289_SHARP__tax_rate$jscomp$inline_1454$$ * $item_details$jscomp$inline_1452_sub_total$jscomp$inline_1453$$ : 0) + $item_details$jscomp$inline_1452_sub_total$jscomp$inline_1453$$;
  }, $cost_data$$));
};
$amp$components$elements$budget$budget_table$total_section$$ = function($G__29358_cost_data$jscomp$1_map__29349_map__29349__$1_props__21778__auto__$jscomp$65_vec__29346$$, $maybe_ref__21780__auto__$jscomp$65$$) {
  $G__29358_cost_data$jscomp$1_map__29349_map__29349__$1_props__21778__auto__$jscomp$65_vec__29346$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__29358_cost_data$jscomp$1_map__29349_map__29349__$1_props__21778__auto__$jscomp$65_vec__29346$$), $maybe_ref__21780__auto__$jscomp$65$$], null);
  $G__29358_cost_data$jscomp$1_map__29349_map__29349__$1_props__21778__auto__$jscomp$65_vec__29346$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29358_cost_data$jscomp$1_map__29349_map__29349__$1_props__21778__auto__$jscomp$65_vec__29346$$, 0, null);
  $G__29358_cost_data$jscomp$1_map__29349_map__29349__$1_props__21778__auto__$jscomp$65_vec__29346$$ = $APP.$cljs$core$__destructure_map$$($G__29358_cost_data$jscomp$1_map__29349_map__29349__$1_props__21778__auto__$jscomp$65_vec__29346$$);
  $G__29358_cost_data$jscomp$1_map__29349_map__29349__$1_props__21778__auto__$jscomp$65_vec__29346$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__29358_cost_data$jscomp$1_map__29349_map__29349__$1_props__21778__auto__$jscomp$65_vec__29346$$, $cljs$cst$594$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $sub_total$jscomp$1$$ = $amp$components$elements$budget$budget_table$sub_total_all_sections$$($G__29358_cost_data$jscomp$1_map__29349_map__29349__$1_props__21778__auto__$jscomp$65_vec__29346$$), $grand_total$$ = $sub_total$jscomp$1$$ + $sub_total$jscomp$1$$ * 0.1;
  $G__29358_cost_data$jscomp$1_map__29349_map__29349__$1_props__21778__auto__$jscomp$65_vec__29346$$ = function() {
    return {className:"flex flex-col", children:[function() {
      var $G__29364$$ = function() {
        return {className:"bg-slate-600 text-slate-100 flex justify-between items-center px-4 py-2 border-t-4 border-t-blue-400", children:[function() {
          var $G__29370_G__29383$jscomp$inline_3146$$ = {className:"text-xl italic", children:"Sub total"};
          $G__29370_G__29383$jscomp$inline_3146$$ = {className:"w-6/12 ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__29370_G__29383$jscomp$inline_3146$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__29370_G__29383$jscomp$inline_3146$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29370_G__29383$jscomp$inline_3146$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29370_G__29383$jscomp$inline_3146$$);
        }(), function() {
          var $G__29389$$ = {className:"w-1/12 "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29389$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29389$$);
        }(), function() {
          var $G__29393_G__29401$jscomp$inline_3149$$ = {className:"font-medium ", children:$amp$components$elements$budget$budget_table$format_currency$$($sub_total$jscomp$1$$)};
          $G__29393_G__29401$jscomp$inline_3149$$ = {className:"w-4/12 flex justify-end items-center space-x-4 ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29393_G__29401$jscomp$inline_3149$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29393_G__29401$jscomp$inline_3149$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29393_G__29401$jscomp$inline_3149$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29393_G__29401$jscomp$inline_3149$$);
        }(), function() {
          var $G__29405$$ = {className:"w-1/12"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29405$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29405$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__29364$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__29364$$);
    }(), function() {
      var $G__29413$$ = function() {
        return {className:"bg-slate-700 text-slate-100 flex justify-between items-center px-4 py-2", children:[function() {
          var $G__29425_G__29435$jscomp$inline_3152$$ = {className:"text-xl italic", children:"Contingency 10%"};
          $G__29425_G__29435$jscomp$inline_3152$$ = {className:"w-6/12 ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__29425_G__29435$jscomp$inline_3152$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__29425_G__29435$jscomp$inline_3152$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29425_G__29435$jscomp$inline_3152$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29425_G__29435$jscomp$inline_3152$$);
        }(), function() {
          var $G__29457$$ = {className:"w-1/12 "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29457$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29457$$);
        }(), function() {
          var $G__29469_G__29483$jscomp$inline_3155$$ = {className:"font-medium ", children:$amp$components$elements$budget$budget_table$format_currency$$($sub_total$jscomp$1$$ * 0.1)};
          $G__29469_G__29483$jscomp$inline_3155$$ = {className:"w-4/12 flex justify-end items-center space-x-4 ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29469_G__29483$jscomp$inline_3155$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29469_G__29483$jscomp$inline_3155$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29469_G__29483$jscomp$inline_3155$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29469_G__29483$jscomp$inline_3155$$);
        }(), function() {
          var $G__29487$$ = {className:"w-1/12"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29487$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29487$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__29413$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__29413$$);
    }(), function() {
      var $G__29491$$ = function() {
        return {className:"bg-slate-600 text-slate-100 flex justify-between items-center px-4 py-4", children:[function() {
          var $G__29495_G__29499$jscomp$inline_3158$$ = {className:"font-semibold text-2xl", children:"TOTAL"};
          $G__29495_G__29499$jscomp$inline_3158$$ = {className:"w-6/12 ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__29495_G__29499$jscomp$inline_3158$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__29495_G__29499$jscomp$inline_3158$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29495_G__29499$jscomp$inline_3158$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29495_G__29499$jscomp$inline_3158$$);
        }(), function() {
          var $G__29503$$ = {className:"w-1/12 "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29503$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29503$$);
        }(), function() {
          var $G__29507_G__29511$jscomp$inline_3161$$ = {className:"font-medium ", children:$amp$components$elements$budget$budget_table$format_currency$$($grand_total$$)};
          $G__29507_G__29511$jscomp$inline_3161$$ = {className:"w-4/12 flex justify-end items-center space-x-4 ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29507_G__29511$jscomp$inline_3161$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29507_G__29511$jscomp$inline_3161$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29507_G__29511$jscomp$inline_3161$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29507_G__29511$jscomp$inline_3161$$);
        }(), function() {
          var $G__29515$$ = {className:"w-1/12"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29515$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29515$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__29491$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__29491$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29358_cost_data$jscomp$1_map__29349_map__29349__$1_props__21778__auto__$jscomp$65_vec__29346$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29358_cost_data$jscomp$1_map__29349_map__29349__$1_props__21778__auto__$jscomp$65_vec__29346$$);
};
$amp$components$elements$budget$budget_table$pad_two_digits$$ = function($n$jscomp$204$$) {
  return $n$jscomp$204$$ < 10 ? ["0", $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$204$$)].join("") : $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$204$$);
};
$amp$components$elements$budget$budget_table$detail_line_item$$ = function($G__29526_G__29569_map__29524_map__29524__$1_props__21778__auto__$jscomp$66_vec__29521$$, $maybe_ref__21780__auto__$jscomp$66$$) {
  $G__29526_G__29569_map__29524_map__29524__$1_props__21778__auto__$jscomp$66_vec__29521$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__29526_G__29569_map__29524_map__29524__$1_props__21778__auto__$jscomp$66_vec__29521$$), $maybe_ref__21780__auto__$jscomp$66$$], null);
  $G__29526_G__29569_map__29524_map__29524__$1_props__21778__auto__$jscomp$66_vec__29521$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29526_G__29569_map__29524_map__29524__$1_props__21778__auto__$jscomp$66_vec__29521$$, 0, null);
  $G__29526_G__29569_map__29524_map__29524__$1_props__21778__auto__$jscomp$66_vec__29521$$ = $APP.$cljs$core$__destructure_map$$($G__29526_G__29569_map__29524_map__29524__$1_props__21778__auto__$jscomp$66_vec__29521$$);
  var $idx$jscomp$63$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__29526_G__29569_map__29524_map__29524__$1_props__21778__auto__$jscomp$66_vec__29521$$, $APP.$cljs$cst$553$idx$$), $detail$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__29526_G__29569_map__29524_map__29524__$1_props__21778__auto__$jscomp$66_vec__29521$$, $APP.$cljs$cst$595$detail$$), $set_expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__29526_G__29569_map__29524_map__29524__$1_props__21778__auto__$jscomp$66_vec__29521$$, 
  $cljs$cst$596$set_expanded_items$$), $expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__29526_G__29569_map__29524_map__29524__$1_props__21778__auto__$jscomp$66_vec__29521$$, $cljs$cst$597$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $item_id$$ = ["detail-item-", $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$63$$)].join(""), $description$jscomp$4$$ = $cljs$cst$598$description$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$3$$), $is_odd_detail_QMARK_$$ = !$cljs$core$even_QMARK_$$($idx$jscomp$63$$);
  if ($APP.$cljs$core$truth_$$($description$jscomp$4$$)) {
    return $G__29526_G__29569_map__29524_map__29524__$1_props__21778__auto__$jscomp$66_vec__29521$$ = function() {
      return {className:$APP.$helix$impl$props$normalize_class$$(["cursor-pointer overflow-hidden ", $is_odd_detail_QMARK_$$ ? "bg-slate-700/50" : ""].join("")), onClick:function() {
        function $G__29529$$($prev$jscomp$8$$) {
          return $APP.$cljs$core$truth_$$($prev$jscomp$8$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$8$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $prev$jscomp$8$$.call(null, $item_id$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$8$$, $item_id$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$8$$, $item_id$$);
        }
        return $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($G__29529$$) : $set_expanded_items$$.call(null, $G__29529$$);
      }, children:[function() {
        var $G__29531$$ = function() {
          return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
            var $G__29535$$ = {className:"font-mono text-sm text-slate-400 mr-4", children:[$amp$components$elements$budget$budget_table$pad_two_digits$$($idx$jscomp$63$$ + 1), "."].join("")};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29535$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29535$$);
          }(), function() {
            var $G__29539_JSCompiler_temp_const$jscomp$inline_3336$$ = $APP.$cljs$cst$463$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$3$$);
            var $G__29543$jscomp$inline_3338_G__29547$jscomp$inline_3339_JSCompiler_inline_result$jscomp$inline_3337$$ = {};
            $G__29543$jscomp$inline_3338_G__29547$jscomp$inline_3339_JSCompiler_inline_result$jscomp$inline_3337$$ = {className:"w-5 h-5 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$icons$InformationCircle$$, $G__29543$jscomp$inline_3338_G__29547$jscomp$inline_3339_JSCompiler_inline_result$jscomp$inline_3337$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$icons$InformationCircle$$, $G__29543$jscomp$inline_3338_G__29547$jscomp$inline_3339_JSCompiler_inline_result$jscomp$inline_3337$$)};
            $G__29543$jscomp$inline_3338_G__29547$jscomp$inline_3339_JSCompiler_inline_result$jscomp$inline_3337$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29543$jscomp$inline_3338_G__29547$jscomp$inline_3339_JSCompiler_inline_result$jscomp$inline_3337$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29543$jscomp$inline_3338_G__29547$jscomp$inline_3339_JSCompiler_inline_result$jscomp$inline_3337$$);
            $G__29539_JSCompiler_temp_const$jscomp$inline_3336$$ = {className:"justify-start flex-1 flex items-center", children:[$G__29539_JSCompiler_temp_const$jscomp$inline_3336$$, $G__29543$jscomp$inline_3338_G__29547$jscomp$inline_3339_JSCompiler_inline_result$jscomp$inline_3337$$]};
            return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29539_JSCompiler_temp_const$jscomp$inline_3336$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__29539_JSCompiler_temp_const$jscomp$inline_3336$$);
          }(), function() {
            var $G__29549$$ = {className:"text-slate-300 font-medium", children:$amp$components$elements$budget$budget_table$format_currency$$($cljs$cst$590$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$3$$))};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29549$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29549$$);
          }()]};
        }();
        return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29531$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29531$$);
      }(), $APP.$cljs$core$truth_$$($expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $expanded_items$$.call(null, $item_id$$)) ? function() {
        var $G__29553_G__29557$jscomp$inline_3478_G__29561$jscomp$inline_3479_G__29565$jscomp$inline_3480$$ = {className:"px-6 py-4 italic", children:$description$jscomp$4$$};
        $G__29553_G__29557$jscomp$inline_3478_G__29561$jscomp$inline_3479_G__29565$jscomp$inline_3480$$ = {className:"text-base bg-slate-200/10 text-white", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29553_G__29557$jscomp$inline_3478_G__29561$jscomp$inline_3479_G__29565$jscomp$inline_3480$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__29553_G__29557$jscomp$inline_3478_G__29561$jscomp$inline_3479_G__29565$jscomp$inline_3480$$)};
        $G__29553_G__29557$jscomp$inline_3478_G__29561$jscomp$inline_3479_G__29565$jscomp$inline_3480$$ = {className:"", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29553_G__29557$jscomp$inline_3478_G__29561$jscomp$inline_3479_G__29565$jscomp$inline_3480$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29553_G__29557$jscomp$inline_3478_G__29561$jscomp$inline_3479_G__29565$jscomp$inline_3480$$)};
        $G__29553_G__29557$jscomp$inline_3478_G__29561$jscomp$inline_3479_G__29565$jscomp$inline_3480$$ = {className:"border-l-8 border-slate-600", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29553_G__29557$jscomp$inline_3478_G__29561$jscomp$inline_3479_G__29565$jscomp$inline_3480$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29553_G__29557$jscomp$inline_3478_G__29561$jscomp$inline_3479_G__29565$jscomp$inline_3480$$)};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29553_G__29557$jscomp$inline_3478_G__29561$jscomp$inline_3479_G__29565$jscomp$inline_3480$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29553_G__29557$jscomp$inline_3478_G__29561$jscomp$inline_3479_G__29565$jscomp$inline_3480$$);
      }() : null]};
    }(), $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__29526_G__29569_map__29524_map__29524__$1_props__21778__auto__$jscomp$66_vec__29521$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__29526_G__29569_map__29524_map__29524__$1_props__21778__auto__$jscomp$66_vec__29521$$);
  }
  $G__29526_G__29569_map__29524_map__29524__$1_props__21778__auto__$jscomp$66_vec__29521$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($is_odd_detail_QMARK_$$ ? "bg-slate-700/50" : ""), children:function() {
      var $G__29574$$ = function() {
        return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
          var $G__29578$$ = {className:"font-mono text-sm text-slate-400 mr-4", children:[$amp$components$elements$budget$budget_table$pad_two_digits$$($idx$jscomp$63$$ + 1), "."].join("")};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29578$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29578$$);
        }(), function() {
          var $G__29582$$ = {className:"justify-start flex-1", children:$APP.$cljs$cst$463$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$3$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29582$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29582$$);
        }(), function() {
          var $G__29586$$ = {className:"text-slate-300 font-medium", children:$amp$components$elements$budget$budget_table$format_currency$$($cljs$cst$590$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$3$$))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29586$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29586$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29574$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29574$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__29526_G__29569_map__29524_map__29524__$1_props__21778__auto__$jscomp$66_vec__29521$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__29526_G__29569_map__29524_map__29524__$1_props__21778__auto__$jscomp$66_vec__29521$$);
};
$amp$components$elements$budget$budget_table$section_line_item$$ = function($G__29606_idx$jscomp$64_map__29600_props__21778__auto__$jscomp$67_vec__29597$$, $map__29600__$1_maybe_ref__21780__auto__$jscomp$67_tax_rate$jscomp$1$$) {
  $G__29606_idx$jscomp$64_map__29600_props__21778__auto__$jscomp$67_vec__29597$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__29606_idx$jscomp$64_map__29600_props__21778__auto__$jscomp$67_vec__29597$$), $map__29600__$1_maybe_ref__21780__auto__$jscomp$67_tax_rate$jscomp$1$$], null);
  $G__29606_idx$jscomp$64_map__29600_props__21778__auto__$jscomp$67_vec__29597$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29606_idx$jscomp$64_map__29600_props__21778__auto__$jscomp$67_vec__29597$$, 0, null);
  $map__29600__$1_maybe_ref__21780__auto__$jscomp$67_tax_rate$jscomp$1$$ = $APP.$cljs$core$__destructure_map$$($G__29606_idx$jscomp$64_map__29600_props__21778__auto__$jscomp$67_vec__29597$$);
  $G__29606_idx$jscomp$64_map__29600_props__21778__auto__$jscomp$67_vec__29597$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__29600__$1_maybe_ref__21780__auto__$jscomp$67_tax_rate$jscomp$1$$, $APP.$cljs$cst$553$idx$$);
  var $item$jscomp$34$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__29600__$1_maybe_ref__21780__auto__$jscomp$67_tax_rate$jscomp$1$$, $cljs$cst$599$item$$), $set_expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__29600__$1_maybe_ref__21780__auto__$jscomp$67_tax_rate$jscomp$1$$, $cljs$cst$596$set_expanded_items$$), $expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__29600__$1_maybe_ref__21780__auto__$jscomp$67_tax_rate$jscomp$1$$, 
  $cljs$cst$597$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $section_ref$$ = $APP.$helix$hooks$use_ref$$(["section-", $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__29606_idx$jscomp$64_map__29600_props__21778__auto__$jscomp$67_vec__29597$$)].join("")), $scroll_to_ref$$ = $amp$hooks$use_scroll_to$use_scroll_to_ref$$(), $item_id$jscomp$1$$ = ["item-", $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__29606_idx$jscomp$64_map__29600_props__21778__auto__$jscomp$67_vec__29597$$)].join(""), $sub_total$jscomp$2$$ = $amp$components$elements$budget$budget_table$calculate_section_total_no_tax$$($cljs$cst$591$details$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$));
  $map__29600__$1_maybe_ref__21780__auto__$jscomp$67_tax_rate$jscomp$1$$ = $cljs$cst$592$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$593$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$));
  var $tax_label$$ = $APP.$cljs$cst$600$label$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$593$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$)), $tax_total$jscomp$1$$ = $sub_total$jscomp$2$$ * $map__29600__$1_maybe_ref__21780__auto__$jscomp$67_tax_rate$jscomp$1$$, $has_tax_QMARK_$jscomp$1$$ = $map__29600__$1_maybe_ref__21780__auto__$jscomp$67_tax_rate$jscomp$1$$ > 0, $total$jscomp$1$$ = $sub_total$jscomp$2$$ + $tax_total$jscomp$1$$, $is_odd$$ = !$cljs$core$even_QMARK_$$($G__29606_idx$jscomp$64_map__29600_props__21778__auto__$jscomp$67_vec__29597$$);
  $G__29606_idx$jscomp$64_map__29600_props__21778__auto__$jscomp$67_vec__29597$$ = function() {
    return {ref:$section_ref$$, className:$APP.$helix$impl$props$normalize_class$$(["overflow-hidden ", $is_odd$$ ? "bg-slate-900" : "bg-slate-800"].join("")), children:[function() {
      var $G__29615$$ = function() {
        return {className:"flex justify-between items-center px-4 py-4 cursor-pointer transition-colors", onClick:function() {
          function $G__29620$$($prev$jscomp$9$$) {
            return $APP.$cljs$core$truth_$$($prev$jscomp$9$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$9$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$9$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$9$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$9$$, $item_id$jscomp$1$$);
          }
          return $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__29620$$) : $set_expanded_items$jscomp$1$$.call(null, $G__29620$$);
        }, children:[function() {
          var $G__29627_G__29631$jscomp$inline_3170$$ = {className:"font-semibold text-xl", children:$APP.$cljs$cst$463$title$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$)};
          $G__29627_G__29631$jscomp$inline_3170$$ = {className:"w-6/12 ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__29627_G__29631$jscomp$inline_3170$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__29627_G__29631$jscomp$inline_3170$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29627_G__29631$jscomp$inline_3170$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29627_G__29631$jscomp$inline_3170$$);
        }(), function() {
          var $G__29637$$ = {className:"w-1/12 "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29637$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29637$$);
        }(), function() {
          var $G__29643_G__29647$jscomp$inline_3173$$ = {className:"font-medium", children:$amp$components$elements$budget$budget_table$format_currency$$($total$jscomp$1$$)};
          $G__29643_G__29647$jscomp$inline_3173$$ = {className:"w-4/12 flex justify-end items-center ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29643_G__29647$jscomp$inline_3173$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29643_G__29647$jscomp$inline_3173$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29643_G__29647$jscomp$inline_3173$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29643_G__29647$jscomp$inline_3173$$);
        }(), function() {
          var $G__29659_G__29669$jscomp$inline_3345_JSCompiler_temp_const$jscomp$inline_3346$$ = $APP.$helix$impl$props$normalize_class$$(["w-5 h-5 transition-transform ", $APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? "rotate-90" : null].join(""));
          var $G__29689$jscomp$inline_3348_JSCompiler_inline_result$jscomp$inline_3347$$ = {};
          $G__29689$jscomp$inline_3348_JSCompiler_inline_result$jscomp$inline_3347$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$icons$ChevronRightIcon$$, $G__29689$jscomp$inline_3348_JSCompiler_inline_result$jscomp$inline_3347$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$icons$ChevronRightIcon$$, $G__29689$jscomp$inline_3348_JSCompiler_inline_result$jscomp$inline_3347$$);
          $G__29659_G__29669$jscomp$inline_3345_JSCompiler_temp_const$jscomp$inline_3346$$ = {className:$G__29659_G__29669$jscomp$inline_3345_JSCompiler_temp_const$jscomp$inline_3346$$, children:$G__29689$jscomp$inline_3348_JSCompiler_inline_result$jscomp$inline_3347$$};
          $G__29659_G__29669$jscomp$inline_3345_JSCompiler_temp_const$jscomp$inline_3346$$ = {className:"w-1/12 flex justify-end items-center ", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29659_G__29669$jscomp$inline_3345_JSCompiler_temp_const$jscomp$inline_3346$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29659_G__29669$jscomp$inline_3345_JSCompiler_temp_const$jscomp$inline_3346$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29659_G__29669$jscomp$inline_3345_JSCompiler_temp_const$jscomp$inline_3346$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29659_G__29669$jscomp$inline_3345_JSCompiler_temp_const$jscomp$inline_3346$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29615$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29615$$);
    }(), $APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? function() {
      var $G__29715$$ = function() {
        return {className:"border-l-8 border-slate-600", children:[function() {
          var $G__29726$$ = function() {
            return {className:"", children:[function() {
              var $G__29744_G__29758$jscomp$inline_3181$$ = {className:"px-8 py-4 italic", children:$cljs$cst$598$description$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$)};
              $G__29744_G__29758$jscomp$inline_3181$$ = {className:"text-base bg-slate-200/10 text-white", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29744_G__29758$jscomp$inline_3181$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__29744_G__29758$jscomp$inline_3181$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29744_G__29758$jscomp$inline_3181$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29744_G__29758$jscomp$inline_3181$$);
            }(), function() {
              var $G__29778$$ = function() {
                return {className:"", children:$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__29786_idx__$1$$, $G__29785_detail$jscomp$4$$) {
                  $G__29785_detail$jscomp$4$$ = {idx:$G__29786_idx__$1$$, detail:$G__29785_detail$jscomp$4$$, "set-expanded-items":$set_expanded_items$jscomp$1$$, "expanded-items":$expanded_items$jscomp$1$$};
                  $G__29786_idx__$1$$ = ["detail-", $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__29786_idx__$1$$)].join("");
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$budget_table$detail_line_item$$, $G__29785_detail$jscomp$4$$, $G__29786_idx__$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$budget_table$detail_line_item$$, $G__29785_detail$jscomp$4$$, $G__29786_idx__$1$$);
                }, $cljs$cst$591$details$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$))};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__29778$$) : $APP.$helix$core$jsx$$.call(null, "ol", $G__29778$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29726$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29726$$);
        }(), function() {
          var $G__29799$$ = function() {
            return {className:"bg-blue-800 flex flex-col", children:[$has_tax_QMARK_$jscomp$1$$ ? function() {
              var $G__29807$$ = function() {
                return {children:[function() {
                  var $G__29813$$ = function() {
                    return {className:"font-semibold text-lg px-8 py-2 flex", children:[function() {
                      var $G__29821$$ = {className:"font-mono text-sm text-slate-400", children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29821$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29821$$);
                    }(), function() {
                      var $G__29831$$ = function() {
                        return {className:"flex justify-between ml-8 w-full text-blue-100", children:[function() {
                          var $G__29839$$ = {children:"Sub total: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29839$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29839$$);
                        }(), function() {
                          var $G__29847$$ = {children:$amp$components$elements$budget$budget_table$format_currency$$($sub_total$jscomp$2$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29847$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29847$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29831$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29831$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29813$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29813$$);
                }(), function() {
                  var $G__29858$$ = function() {
                    return {className:"font-semibold text-lg px-8 py-2  flex", children:[function() {
                      var $G__29866$$ = {className:"font-mono text-sm text-slate-400", children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29866$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29866$$);
                    }(), function() {
                      var $G__29876$$ = function() {
                        return {className:"flex justify-between ml-8 w-full text-blue-100", children:[function() {
                          var $G__29882$$ = {children:$tax_label$$};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29882$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29882$$);
                        }(), function() {
                          var $G__29890$$ = {children:$amp$components$elements$budget$budget_table$format_currency$$($tax_total$jscomp$1$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29890$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29890$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29876$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29876$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29858$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29858$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29807$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29807$$);
            }() : null, function() {
              var $G__29930$$ = function() {
                return {className:"font-semibold bg-blue-900 text-xl px-8 py-4  flex", children:[function() {
                  var $G__29936$$ = {className:"font-mono text-sm text-slate-400", children:"-"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29936$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29936$$);
                }(), function() {
                  var $G__29942$$ = function() {
                    return {className:"flex justify-between ml-8 w-full text-blue-100", children:[function() {
                      var $G__29950$$ = {children:"Total: "};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29950$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29950$$);
                    }(), function() {
                      var $G__30012$$ = {children:$amp$components$elements$budget$budget_table$format_currency$$($total$jscomp$1$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30012$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30012$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29942$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29942$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29930$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29930$$);
            }(), function() {
              var $G__30016$$ = function() {
                return {className:"bg-slate-700 flex p-4 justify-center items-center cursor-pointer", onClick:function() {
                  function $G__30019_30408$$($prev$jscomp$10$$) {
                    return $APP.$cljs$core$truth_$$($prev$jscomp$10$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$10$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$10$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$10$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$10$$, $item_id$jscomp$1$$);
                  }
                  $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__30019_30408$$) : $set_expanded_items$jscomp$1$$.call(null, $G__30019_30408$$);
                  return $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$($section_ref$$) : $scroll_to_ref$$.call(null, $section_ref$$);
                }, children:["CLOSE SECTION", function() {
                  var $G__30022_JSCompiler_temp_const$jscomp$inline_2882$$ = $APP.$helix$impl$props$normalize_class$$(["w-5 h-5 transition-transform ml-4 ", $APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? "-rotate-90" : null].join(""));
                  var $G__30030$jscomp$inline_2884_JSCompiler_inline_result$jscomp$inline_2883$$ = {};
                  $G__30030$jscomp$inline_2884_JSCompiler_inline_result$jscomp$inline_2883$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$icons$ChevronRightIcon$$, $G__30030$jscomp$inline_2884_JSCompiler_inline_result$jscomp$inline_2883$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$icons$ChevronRightIcon$$, $G__30030$jscomp$inline_2884_JSCompiler_inline_result$jscomp$inline_2883$$);
                  $G__30022_JSCompiler_temp_const$jscomp$inline_2882$$ = {className:$G__30022_JSCompiler_temp_const$jscomp$inline_2882$$, children:$G__30030$jscomp$inline_2884_JSCompiler_inline_result$jscomp$inline_2883$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30022_JSCompiler_temp_const$jscomp$inline_2882$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30022_JSCompiler_temp_const$jscomp$inline_2882$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30016$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30016$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29799$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29799$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29715$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29715$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__29606_idx$jscomp$64_map__29600_props__21778__auto__$jscomp$67_vec__29597$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__29606_idx$jscomp$64_map__29600_props__21778__auto__$jscomp$67_vec__29597$$);
};
$amp$components$elements$budget$budget_table$budget_table$$ = function($G__30117_map__30104_map__30104__$1_props__21778__auto__$jscomp$68_vec__30101_vec__30111$$, $maybe_ref__21780__auto__$jscomp$68$$) {
  $G__30117_map__30104_map__30104__$1_props__21778__auto__$jscomp$68_vec__30101_vec__30111$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__30117_map__30104_map__30104__$1_props__21778__auto__$jscomp$68_vec__30101_vec__30111$$), $maybe_ref__21780__auto__$jscomp$68$$], null);
  $G__30117_map__30104_map__30104__$1_props__21778__auto__$jscomp$68_vec__30101_vec__30111$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30117_map__30104_map__30104__$1_props__21778__auto__$jscomp$68_vec__30101_vec__30111$$, 0, null);
  $G__30117_map__30104_map__30104__$1_props__21778__auto__$jscomp$68_vec__30101_vec__30111$$ = $APP.$cljs$core$__destructure_map$$($G__30117_map__30104_map__30104__$1_props__21778__auto__$jscomp$68_vec__30101_vec__30111$$);
  var $cost_data$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__30117_map__30104_map__30104__$1_props__21778__auto__$jscomp$68_vec__30101_vec__30111$$, $cljs$cst$594$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__30117_map__30104_map__30104__$1_props__21778__auto__$jscomp$68_vec__30101_vec__30111$$ = $APP.$helix$hooks$use_state$$($APP.$cljs$core$PersistentHashSet$EMPTY$$);
  var $expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30117_map__30104_map__30104__$1_props__21778__auto__$jscomp$68_vec__30101_vec__30111$$, 0, null), $set_expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30117_map__30104_map__30104__$1_props__21778__auto__$jscomp$68_vec__30101_vec__30111$$, 1, null);
  $G__30117_map__30104_map__30104__$1_props__21778__auto__$jscomp$68_vec__30101_vec__30111$$ = function() {
    return {className:"w-full text-white", children:[$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__30126_idx$jscomp$65$$, $G__30125_item$jscomp$35$$) {
      $G__30125_item$jscomp$35$$ = {idx:$G__30126_idx$jscomp$65$$, item:$G__30125_item$jscomp$35$$, "set-expanded-items":$set_expanded_items$jscomp$2$$, "expanded-items":$expanded_items$jscomp$2$$};
      $G__30126_idx$jscomp$65$$ = [$APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__30126_idx$jscomp$65$$), "-section"].join("");
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$budget_table$section_line_item$$, $G__30125_item$jscomp$35$$, $G__30126_idx$jscomp$65$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$budget_table$section_line_item$$, $G__30125_item$jscomp$35$$, $G__30126_idx$jscomp$65$$);
    }, $cost_data$jscomp$2$$), function() {
      var $G__30145$$ = {"cost-data":$cost_data$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$budget_table$total_section$$, $G__30145$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$budget_table$total_section$$, $G__30145$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__30117_map__30104_map__30104__$1_props__21778__auto__$jscomp$68_vec__30101_vec__30111$$) : $APP.$helix$core$jsxs$$.call(null, "ol", $G__30117_map__30104_map__30104__$1_props__21778__auto__$jscomp$68_vec__30101_vec__30111$$);
};
$amp$components$elements$budget$cost_breakdown$preview$$ = function($G__30664_map__30646_props__21778__auto__$jscomp$69_vec__30643$$, $maybe_ref__21780__auto__$jscomp$69$$) {
  $G__30664_map__30646_props__21778__auto__$jscomp$69_vec__30643$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__30664_map__30646_props__21778__auto__$jscomp$69_vec__30643$$), $maybe_ref__21780__auto__$jscomp$69$$], null);
  $G__30664_map__30646_props__21778__auto__$jscomp$69_vec__30643$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30664_map__30646_props__21778__auto__$jscomp$69_vec__30643$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__30664_map__30646_props__21778__auto__$jscomp$69_vec__30643$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__30664_map__30646_props__21778__auto__$jscomp$69_vec__30643$$ = function() {
    return {className:"text-xl text-slate-100 p-4", children:[function() {
      var $G__30674$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30674$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__30674$$);
    }(), function() {
      var $G__30684$$ = {className:"text-slate-300", children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30684$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30684$$);
    }(), function() {
      var $G__30702$$ = {className:"text-slate-300", children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30702$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30702$$);
    }(), function() {
      var $G__30724$$ = {className:"font-bold text-white", children:"$1.6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30724$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30724$$);
    }(), function() {
      var $G__30738$$ = {className:"text-slate-300", children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30738$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30738$$);
    }(), function() {
      var $G__30744$$ = {className:"font-semibold text-pink-400", children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30744$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30744$$);
    }(), function() {
      var $G__30771$$ = {className:"text-slate-300", children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30771$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30771$$);
    }(), function() {
      var $G__30781$$ = {className:"font-semibold text-pink-400", children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30781$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30781$$);
    }(), function() {
      var $G__30795$$ = {className:"text-slate-300", children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30795$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30795$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30664_map__30646_props__21778__auto__$jscomp$69_vec__30643$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30664_map__30646_props__21778__auto__$jscomp$69_vec__30643$$);
};
$amp$components$elements$budget$cost_breakdown$details$$ = function($G__30983_map__30980_props__21778__auto__$jscomp$70_vec__30977$$, $maybe_ref__21780__auto__$jscomp$70$$) {
  $G__30983_map__30980_props__21778__auto__$jscomp$70_vec__30977$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__30983_map__30980_props__21778__auto__$jscomp$70_vec__30977$$), $maybe_ref__21780__auto__$jscomp$70$$], null);
  $G__30983_map__30980_props__21778__auto__$jscomp$70_vec__30977$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30983_map__30980_props__21778__auto__$jscomp$70_vec__30977$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__30983_map__30980_props__21778__auto__$jscomp$70_vec__30977$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__30983_map__30980_props__21778__auto__$jscomp$70_vec__30977$$ = function() {
    return {className:"text-xl text-slate-100 p-4", children:[function() {
      var $G__30987$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30987$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__30987$$);
    }(), function() {
      var $G__30991$$ = {className:"text-slate-300", children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30991$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30991$$);
    }(), function() {
      var $G__30995$$ = {className:"text-slate-300", children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30995$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30995$$);
    }(), function() {
      var $G__30999$$ = {className:"font-bold text-white", children:"$1.6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30999$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30999$$);
    }(), function() {
      var $G__31005$$ = {className:"text-slate-300", children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31005$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31005$$);
    }(), function() {
      var $G__31011$$ = {className:"font-semibold text-pink-400", children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31011$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31011$$);
    }(), function() {
      var $G__31016$$ = {className:"text-slate-300", children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31016$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31016$$);
    }(), function() {
      var $G__31020$$ = {className:"font-semibold text-pink-400", children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31020$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31020$$);
    }(), function() {
      var $G__31024$$ = {className:"text-slate-300", children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31024$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31024$$);
    }(), function() {
      var $G__31028$$ = {className:"block my-6", children:["As Armenia does not maintain a permanent national pavilion in Venice, a venue must be secured through rental—", "as is customary for many smaller and non-permanent participating nations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31028$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__31028$$);
    }(), function() {
      var $G__31032$$ = {className:"text-slate-300", children:"The selected site is located outside the Biennale’s primary zones, enabling a significantly lower base rent—approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31032$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31032$$);
    }(), function() {
      var $G__31036$$ = {className:"font-bold text-white", children:"$195,000"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31036$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31036$$);
    }(), function() {
      var $G__31040$$ = {className:"text-slate-300", children:"—while remaining fully accredited and visible within the official Biennale structure. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31040$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31040$$);
    }(), function() {
      var $G__31044$$ = {className:"text-slate-300", children:"By contrast, venues within the Giardini or Arsenale—when available—typically begin at "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31044$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31044$$);
    }(), function() {
      var $G__31048$$ = {className:"font-bold text-white", children:"$450,000"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31048$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31048$$);
    }(), function() {
      var $G__31052$$ = {className:"text-slate-300", children:" in base rent, before construction, staffing, utilities, logistics, and operating overhead. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31052$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31052$$);
    }(), function() {
      var $G__31056$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__31060$$ = {className:"mt-6", children:"Crucially, the nature of "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31060$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31060$$);
        }(), function() {
          var $G__31064$$ = {className:"font-semibold text-pink-400", children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31064$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31064$$);
        }(), function() {
          var $G__31068$$ = {className:"text-slate-300", children:" makes this venue choice not only strategic but essential. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31068$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31068$$);
        }(), function() {
          var $G__31072$$ = {className:"text-slate-300", children:"The work is conceived to be produced, refined, and evolved "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31072$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31072$$);
        }(), function() {
          var $G__31076$$ = {className:"font-semibold italic text-slate-100", children:"on site"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31076$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31076$$);
        }(), function() {
          var $G__31080$$ = {className:"text-slate-300", children:", allowing the Pavilion to function simultaneously as exhibition space and working studio. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31080$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31080$$);
        }(), function() {
          var $G__31084$$ = {className:"text-slate-300", children:["This approach meets extremely tight production and installation deadlines while maintaining full artistic and technical control—", "conditions that would be far more difficult, costly, or even impossible under a traditional off-site fabrication and transport model. "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31084$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__31084$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__31056$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__31056$$);
    }(), function() {
      var $G__31088$$ = {className:"block my-6", children:"Rather than directing the majority of resources toward a single, fixed monumental installation, the artist and team have deliberately taken another route. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31088$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31088$$);
    }(), function() {
      var $G__31092$$ = {className:"text-slate-300", children:"By producing the work on site, the Pavilion avoids the need for a pre-fabricated "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31092$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31092$$);
    }(), function() {
      var $G__31096$$ = {className:"font-semibold italic text-slate-100", children:"“grand object”"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31096$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31096$$);
    }(), function() {
      var $G__31100$$ = {className:"text-slate-300", children:" altogether. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31100$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31100$$);
    }(), function() {
      var $G__31104$$ = {className:"text-slate-300", children:"This decision reduces fabrication, crating, international shipping, and risk-related costs, while aligning more precisely with the broader conceptual goals: "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31104$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31104$$);
    }(), function() {
      var $G__31108$$ = {className:"font-semibold text-pink-400", children:"process over spectacle, presence over monumentality,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31108$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31108$$);
    }(), function() {
      var $G__31112$$ = {className:"text-slate-300", children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31112$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31112$$);
    }(), function() {
      var $G__31116$$ = {className:"font-semibold text-pink-400", children:"sustained making over static display"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31116$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31116$$);
    }(), function() {
      var $G__31120$$ = {className:"text-slate-300", children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31120$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31120$$);
    }(), function() {
      var $G__31124$$ = function() {
        return {className:"my-6", children:[function() {
          var $G__31129$$ = {className:"", children:"In this sense, cost efficiency and artistic rigor are not in opposition but mutually reinforcing. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31129$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31129$$);
        }(), function() {
          var $G__31133$$ = {className:"text-slate-300", children:"The Pavilion’s structure distributes resources across time, labor, materials, and public engagement—rather than concentrating them into a single object whose expense would be driven largely by transport and scale rather than meaning. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31133$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31133$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__31124$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__31124$$);
    }(), function() {
      var $G__31138$$ = function() {
        return {className:"block my-6", children:[function() {
          var $G__31142$$ = {className:"", children:"Despite these efficiencies, the overall cost of operating in Venice during the Biennale remains high. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31142$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31142$$);
        }(), function() {
          var $G__31146$$ = {className:"text-slate-300", children:"Venice’s unique geography, limited infrastructure, and extraordinary demand elevate costs across all categories—logistics, storage, labor, accommodations, and technical services. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31146$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31146$$);
        }(), function() {
          var $G__31150$$ = {className:"text-slate-300", children:"These conditions are shared by all national pavilions and reflect the Biennale’s position as the most visible international platform in contemporary art. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31150$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31150$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__31138$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__31138$$);
    }(), function() {
      var $G__31154$$ = {className:"mt-6", children:"Unlike projects that culminate at opening, this Pavilion is conceived as a"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31154$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31154$$);
    }(), function() {
      var $G__31158$$ = {className:"font-semibold italic text-slate-100", children:" seven-month operational commitment"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31158$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31158$$);
    }(), function() {
      var $G__31162$$ = {className:"text-slate-300", children:": a living environment that functions simultaneously as exhibition space, working studio, public forum, and diplomatic platform—requiring sustained staffing, materials, logistics, and institutional oversight throughout the duration of the Biennale. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31162$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31162$$);
    }(), function() {
      var $G__31166$$ = {className:"block mt-6", children:"Significant investment secures venue readiness and regulatory compliance, supports curatorial and administrative leadership, funds museum-scale fabrication and specialized craft, and addresses Venice-specific transport, storage, installation, and reverse logistics. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31166$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31166$$);
    }(), function() {
      var $G__31170$$ = function() {
        return {className:"block mt-6", children:[function() {
          var $G__31174$$ = {className:"font-semibold text-pink-400", children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31174$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31174$$);
        }(), function() {
          var $G__31178$$ = {className:"text-slate-300", children:" is budgeted as an ongoing on-site operation, ensuring continuous execution, maintenance, and evolution of the work across the exhibition period—distinguishing the Pavilion from static presentations. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31178$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31178$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31170$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__31170$$);
    }(), function() {
      var $G__31185$$ = {className:"block mt-6", children:"Public visibility and long-term legacy are strengthened through opening week programs, marketing and public relations, publication, and comprehensive film and photographic documentation—ensuring that the Pavilion’s impact extends into international media, scholarship, and institutional archives. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31185$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31185$$);
    }(), function() {
      var $G__31189$$ = {className:"block italic mt-6 font-normal text-lg text-slate-100", children:"A responsible contingency is included to accommodate the realities of an extended international project operating across jurisdictions, timelines, and currencies—ensuring stability, accountability, and the successful delivery of Armenia’s national presentation on the world stage."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__31189$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__31189$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30983_map__30980_props__21778__auto__$jscomp$70_vec__30977$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30983_map__30980_props__21778__auto__$jscomp$70_vec__30977$$);
};
$amp$components$elements$budget$cost_breakdown$footer$$ = function($G__31208_G__31212$jscomp$inline_3184_map__31206_props__21778__auto__$jscomp$71_vec__31203$$, $maybe_ref__21780__auto__$jscomp$71$$) {
  $G__31208_G__31212$jscomp$inline_3184_map__31206_props__21778__auto__$jscomp$71_vec__31203$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__31208_G__31212$jscomp$inline_3184_map__31206_props__21778__auto__$jscomp$71_vec__31203$$), $maybe_ref__21780__auto__$jscomp$71$$], null);
  $G__31208_G__31212$jscomp$inline_3184_map__31206_props__21778__auto__$jscomp$71_vec__31203$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__31208_G__31212$jscomp$inline_3184_map__31206_props__21778__auto__$jscomp$71_vec__31203$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__31208_G__31212$jscomp$inline_3184_map__31206_props__21778__auto__$jscomp$71_vec__31203$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__31208_G__31212$jscomp$inline_3184_map__31206_props__21778__auto__$jscomp$71_vec__31203$$ = {"cost-data":$amp$components$elements$budget$cost_breakdown$cost_data$$};
  $G__31208_G__31212$jscomp$inline_3184_map__31206_props__21778__auto__$jscomp$71_vec__31203$$ = {className:"mt-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$budget_table$budget_table$$, $G__31208_G__31212$jscomp$inline_3184_map__31206_props__21778__auto__$jscomp$71_vec__31203$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$budget_table$budget_table$$, $G__31208_G__31212$jscomp$inline_3184_map__31206_props__21778__auto__$jscomp$71_vec__31203$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__31208_G__31212$jscomp$inline_3184_map__31206_props__21778__auto__$jscomp$71_vec__31203$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__31208_G__31212$jscomp$inline_3184_map__31206_props__21778__auto__$jscomp$71_vec__31203$$);
};
$amp$components$elements$budget$cost_breakdown$cost_breakdown$$ = function($G__31234_id$jscomp$69_map__31226_props__21778__auto__$jscomp$72_vec__31223$$, $G__31241$jscomp$inline_3187_JSCompiler_inline_result$jscomp$inline_3186_maybe_ref__21780__auto__$jscomp$72_subtitle$jscomp$2$$) {
  $G__31234_id$jscomp$69_map__31226_props__21778__auto__$jscomp$72_vec__31223$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__31234_id$jscomp$69_map__31226_props__21778__auto__$jscomp$72_vec__31223$$), $G__31241$jscomp$inline_3187_JSCompiler_inline_result$jscomp$inline_3186_maybe_ref__21780__auto__$jscomp$72_subtitle$jscomp$2$$], null);
  $G__31234_id$jscomp$69_map__31226_props__21778__auto__$jscomp$72_vec__31223$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__31234_id$jscomp$69_map__31226_props__21778__auto__$jscomp$72_vec__31223$$, 0, null);
  var $map__31226__$1_title$jscomp$22$$ = $APP.$cljs$core$__destructure_map$$($G__31234_id$jscomp$69_map__31226_props__21778__auto__$jscomp$72_vec__31223$$);
  $G__31234_id$jscomp$69_map__31226_props__21778__auto__$jscomp$72_vec__31223$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__31226__$1_title$jscomp$22$$, $APP.$cljs$cst$290$id$$);
  $G__31241$jscomp$inline_3187_JSCompiler_inline_result$jscomp$inline_3186_maybe_ref__21780__auto__$jscomp$72_subtitle$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__31226__$1_title$jscomp$22$$, $cljs$cst$589$subtitle$$);
  $map__31226__$1_title$jscomp$22$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__31226__$1_title$jscomp$22$$, $APP.$cljs$cst$463$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__31241$jscomp$inline_3187_JSCompiler_inline_result$jscomp$inline_3186_maybe_ref__21780__auto__$jscomp$72_subtitle$jscomp$2$$ = {"section-hint":$G__31241$jscomp$inline_3187_JSCompiler_inline_result$jscomp$inline_3186_maybe_ref__21780__auto__$jscomp$72_subtitle$jscomp$2$$, title:$map__31226__$1_title$jscomp$22$$, "expand-button-label":"Read more", "preview-text":$amp$components$elements$budget$cost_breakdown$preview$$, "full-text":$amp$components$elements$budget$cost_breakdown$details$$, "footer-text":$amp$components$elements$budget$cost_breakdown$footer$$};
  $G__31241$jscomp$inline_3187_JSCompiler_inline_result$jscomp$inline_3186_maybe_ref__21780__auto__$jscomp$72_subtitle$jscomp$2$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__31241$jscomp$inline_3187_JSCompiler_inline_result$jscomp$inline_3186_maybe_ref__21780__auto__$jscomp$72_subtitle$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$expandable_text_area$expandable_text_area_2$$, 
  $G__31241$jscomp$inline_3187_JSCompiler_inline_result$jscomp$inline_3186_maybe_ref__21780__auto__$jscomp$72_subtitle$jscomp$2$$);
  $G__31234_id$jscomp$69_map__31226_props__21778__auto__$jscomp$72_vec__31223$$ = {id:$G__31234_id$jscomp$69_map__31226_props__21778__auto__$jscomp$72_vec__31223$$, children:$G__31241$jscomp$inline_3187_JSCompiler_inline_result$jscomp$inline_3186_maybe_ref__21780__auto__$jscomp$72_subtitle$jscomp$2$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__31234_id$jscomp$69_map__31226_props__21778__auto__$jscomp$72_vec__31223$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__31234_id$jscomp$69_map__31226_props__21778__auto__$jscomp$72_vec__31223$$);
};
$amp$components$elements$budget$location_section$preview$$ = function($G__29681_map__29667_props__21778__auto__$jscomp$73_vec__29664$$, $maybe_ref__21780__auto__$jscomp$73$$) {
  $G__29681_map__29667_props__21778__auto__$jscomp$73_vec__29664$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__29681_map__29667_props__21778__auto__$jscomp$73_vec__29664$$), $maybe_ref__21780__auto__$jscomp$73$$], null);
  $G__29681_map__29667_props__21778__auto__$jscomp$73_vec__29664$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29681_map__29667_props__21778__auto__$jscomp$73_vec__29664$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__29681_map__29667_props__21778__auto__$jscomp$73_vec__29664$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__29681_map__29667_props__21778__auto__$jscomp$73_vec__29664$$ = function() {
    return {className:"p-4 mb-12", children:function() {
      var $G__29696$$ = function() {
        return {className:"", children:["The Armenia Pavilion 2026 unfolds across ", function() {
          var $G__29706$$ = {className:"font-semibold", children:"three contiguous sites"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29706$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29706$$);
        }(), " within the historic Arsenale of Venice—", function() {
          var $G__29716$$ = {className:"font-semibold", children:"an interior studio"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29716$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29716$$);
        }(), ", ", function() {
          var $G__29730$$ = {className:"font-semibold", children:"an open-air church courtyard"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29730$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29730$$);
        }(), ", and ", function() {
          var $G__29748$$ = {className:"font-semibold", children:"a canal-side outpost"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29748$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29748$$);
        }(), ". ", "Together, these spaces form a single spatial constellation: ", function() {
          var $G__29764$$ = {className:"", children:"a place of work"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29764$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29764$$);
        }(), ", ", function() {
          var $G__29771$$ = {className:"", children:"a place of weather and ruin"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29771$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29771$$);
        }(), ", and ", function() {
          var $G__29776$$ = {className:"", children:"a public-facing threshold"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29776$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29776$$);
        }(), "—each distinct, yet inseparable."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29696$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__29696$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29681_map__29667_props__21778__auto__$jscomp$73_vec__29664$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29681_map__29667_props__21778__auto__$jscomp$73_vec__29664$$);
};
$amp$components$elements$budget$location_section$full_details$$ = function($G__30065_map__30057_map__30057__$1_props__21778__auto__$jscomp$74_vec__30053$$, $maybe_ref__21780__auto__$jscomp$74$$) {
  $G__30065_map__30057_map__30057__$1_props__21778__auto__$jscomp$74_vec__30053$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__30065_map__30057_map__30057__$1_props__21778__auto__$jscomp$74_vec__30053$$), $maybe_ref__21780__auto__$jscomp$74$$], null);
  $G__30065_map__30057_map__30057__$1_props__21778__auto__$jscomp$74_vec__30053$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30065_map__30057_map__30057__$1_props__21778__auto__$jscomp$74_vec__30053$$, 0, null);
  $G__30065_map__30057_map__30057__$1_props__21778__auto__$jscomp$74_vec__30053$$ = $APP.$cljs$core$__destructure_map$$($G__30065_map__30057_map__30057__$1_props__21778__auto__$jscomp$74_vec__30053$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__30065_map__30057_map__30057__$1_props__21778__auto__$jscomp$74_vec__30053$$, $APP.$cljs$cst$290$id$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__30065_map__30057_map__30057__$1_props__21778__auto__$jscomp$74_vec__30053$$, $cljs$cst$589$subtitle$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__30065_map__30057_map__30057__$1_props__21778__auto__$jscomp$74_vec__30053$$, $APP.$cljs$cst$463$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__30065_map__30057_map__30057__$1_props__21778__auto__$jscomp$74_vec__30053$$ = function() {
    return {className:"space-y-8", children:function() {
      var $G__30071$$ = function() {
        return {className:"text-slate-100  text-xl", children:[function() {
          var $G__30075$$ = function() {
            return {className:"p-4 mb-12", children:function() {
              var $G__30079$$ = function() {
                return {className:"", children:["The Armenia Pavilion 2026 unfolds across ", function() {
                  var $G__30084$$ = {className:"font-semibold", children:"three contiguous sites"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30084$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30084$$);
                }(), " within the historic Arsenale of Venice—", function() {
                  var $G__30088$$ = {className:"font-semibold", children:"an interior studio"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30088$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30088$$);
                }(), ", ", function() {
                  var $G__30092$$ = {className:"font-semibold", children:"an open-air church courtyard"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30092$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30092$$);
                }(), ", and ", function() {
                  var $G__30098$$ = {className:"font-semibold", children:"a canal-side outpost"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30098$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30098$$);
                }(), ". ", "Together, these spaces form a single spatial constellation: ", function() {
                  var $G__30106$$ = {className:"", children:"a place of work"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30106$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30106$$);
                }(), ", ", function() {
                  var $G__30110$$ = {className:"", children:"a place of weather and ruin"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30110$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30110$$);
                }(), ", and ", function() {
                  var $G__30119$$ = {className:"", children:"a public-facing threshold"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30119$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30119$$);
                }(), "—each distinct, yet inseparable."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30079$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30079$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30075$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30075$$);
        }(), function() {
          var $G__30128$$ = function() {
            return {className:"text-xl ", children:[function() {
              var $G__30135$$ = function() {
                return {className:"p-4", children:[function() {
                  var $G__30139$$ = {className:"text-3xl pb-4 font-bold uppercase", children:"#1 - TESA 41 (MAIN STUDIO)"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30139$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__30139$$);
                }(), function() {
                  var $G__30151$$ = function() {
                    return {className:"space-y-6", children:[function() {
                      var $G__30157$$ = function() {
                        return {children:[function() {
                          var $G__30164$$ = {className:"font-semibold text-slate-100", children:"Tesa 41"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30164$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30164$$);
                        }(), " is the primary studio and interior exhibition space for the Armenia Pavilion 2026—", function() {
                          var $G__30174$$ = {className:"font-semibold", children:"5,000 square feet"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30174$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30174$$);
                        }(), " (", function() {
                          var $G__30184$$ = {className:"font-semibold", children:"~464 square meters"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30184$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30184$$);
                        }(), ") of expansive industrial volume that functions as the ", function() {
                          var $G__30190$$ = {className:"italic", children:"operational and conceptual heart"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30190$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30190$$);
                        }(), " of the project."]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30157$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30157$$);
                    }(), function() {
                      var $G__30200$$ = function() {
                        return {children:["Defined by scale, clarity, and architectural restraint, it is built for sustained ", function() {
                          var $G__30206$$ = {className:"font-medium", children:"fabrication"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30206$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30206$$);
                        }(), ", ", function() {
                          var $G__30214$$ = {className:"font-medium", children:"assembly"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30214$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30214$$);
                        }(), ", and ", function() {
                          var $G__30224$$ = {className:"font-medium", children:"reconfiguration"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30224$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30224$$);
                        }(), " across the full duration of the Biennale."]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30200$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30200$$);
                    }(), function() {
                      var $G__30232$$ = function() {
                        return {children:["Here, the Pavilion operates as a ", function() {
                          var $G__30238$$ = {className:"font-semibold", children:"working studio"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30238$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30238$$);
                        }(), " rather than a static exhibition: a place of continuous ", function() {
                          var $G__30383$$ = {className:"font-medium", children:"making"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30383$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30383$$);
                        }(), ", ", function() {
                          var $G__30418$$ = {className:"font-medium", children:"stacking"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30418$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30418$$);
                        }(), ", ", function() {
                          var $G__30448$$ = {className:"font-medium", children:"dismantling"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30448$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30448$$);
                        }(), ", and ", function() {
                          var $G__30511$$ = {className:"font-medium", children:"rebuilding"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30511$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30511$$);
                        }(), ". The interior volume allows the work to expand ", function() {
                          var $G__30532$$ = {className:"font-medium", children:"horizontally"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30532$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30532$$);
                        }(), " and ", function() {
                          var $G__30542$$ = {className:"font-medium", children:"vertically"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30542$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30542$$);
                        }(), ", accommodating both monumental arrangements and intimate moments of material attention."]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30232$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30232$$);
                    }(), function() {
                      var $G__30555$$ = function() {
                        return {className:"pt-2", children:[function() {
                          var $G__30563$$ = {className:"font-semibold text-slate-100", children:"Tesa 41"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30563$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30563$$);
                        }(), " anchors the Pavilion physically and philosophically—establishing ", function() {
                          var $G__30571$$ = {className:"italic", children:"the studio as the artwork itself"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30571$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30571$$);
                        }(), "."]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30555$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30555$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30151$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30151$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30135$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30135$$);
            }(), function() {
              var $G__30585$$ = function() {
                return {className:"w-full h-full flex flex-col gap-4 mt-12", children:function() {
                  var $outer_ctx$jscomp$12$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $G__30597_vec__30593$$ = $amp$hooks$use_intersection_observer$use_intersection_observer$$($outer_ctx$jscomp$12$$);
                  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30597_vec__30593$$, 0, null);
                  var $is_visible_QMARK_$jscomp$9$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30597_vec__30593$$, 1, null);
                  $G__30597_vec__30593$$ = function() {
                    return {className:"flex flex-col gap-4", ref:$outer_ctx$jscomp$12$$, children:[function() {
                      var $G__30604_G__30610$jscomp$inline_3190$$ = {"playback-id":"KaA1Jf2AusJZ966KPeZrdwJ5S53kboLO4E4fGLrgTLk", "aspect-ratio":1.77, "should-play?":$is_visible_QMARK_$jscomp$9$$, "allow-audio?":!1};
                      $G__30604_G__30610$jscomp$inline_3190$$ = {className:"w-full aspect-[16/9]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$location_section$lazy_video$$, $G__30604_G__30610$jscomp$inline_3190$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$location_section$lazy_video$$, $G__30604_G__30610$jscomp$inline_3190$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30604_G__30610$jscomp$inline_3190$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30604_G__30610$jscomp$inline_3190$$);
                    }(), function() {
                      var $G__30619_G__30625$jscomp$inline_3193$$ = {"img-src":"https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2011.12.05.tif", "aspect-ratio":1.34, "active?":!0};
                      $G__30619_G__30625$jscomp$inline_3193$$ = {className:"w-full aspect-[1.34]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__30619_G__30625$jscomp$inline_3193$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__30619_G__30625$jscomp$inline_3193$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30619_G__30625$jscomp$inline_3193$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30619_G__30625$jscomp$inline_3193$$);
                    }(), function() {
                      var $G__30636_G__30648$jscomp$inline_3196$$ = {"img-src":"https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.08.tif", "aspect-ratio":1.34, "active?":!0};
                      $G__30636_G__30648$jscomp$inline_3196$$ = {className:"w-full aspect-[1.34]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__30636_G__30648$jscomp$inline_3196$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__30636_G__30648$jscomp$inline_3196$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30636_G__30648$jscomp$inline_3196$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30636_G__30648$jscomp$inline_3196$$);
                    }(), function() {
                      var $G__30656_G__30666$jscomp$inline_3199$$ = {"img-src":"https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.18.tif", "aspect-ratio":1.34, "active?":!0};
                      $G__30656_G__30666$jscomp$inline_3199$$ = {className:"w-full aspect-[1.34]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__30656_G__30666$jscomp$inline_3199$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__30656_G__30666$jscomp$inline_3199$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30656_G__30666$jscomp$inline_3199$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30656_G__30666$jscomp$inline_3199$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30597_vec__30593$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30597_vec__30593$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30585$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30585$$);
            }(), function() {
              var $G__30686$$ = function() {
                return {className:"mt-12", children:[function() {
                  var $G__30696$$ = function() {
                    return {className:"p-4", children:[function() {
                      var $G__30704$$ = {className:"pb-4 text-3xl font-helvetica font-bold uppercase", children:"#2 - GIARDINO 25 (CHURCH COURTYARD)"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30704$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__30704$$);
                    }(), function() {
                      var $G__30722$$ = function() {
                        return {className:"space-y-6", children:[function() {
                          var $G__30732$$ = function() {
                            return {children:[function() {
                              var $G__30740$$ = {className:"font-semibold text-slate-100", children:"Giardino 25"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30740$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30740$$);
                            }(), " is an adjacent open-air courtyard formed from the remains of a former church. ", "Only the original perimeter walls remain; the roof has long since collapsed—", "leaving the space exposed to ", function() {
                              var $G__30751$$ = {className:"", children:"light"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30751$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30751$$);
                            }(), ", ", function() {
                              var $G__30756$$ = {className:"", children:"weather"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30756$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30756$$);
                            }(), ", and ", function() {
                              var $G__30767$$ = {className:"", children:"time"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30767$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30767$$);
                            }(), "."]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30732$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30732$$);
                        }(), function() {
                          var $G__30775_G__30783$jscomp$inline_3202$$ = {className:"italic", children:"quiet intensity"};
                          $G__30775_G__30783$jscomp$inline_3202$$ = {children:["What survives is a richly textured architectural shell marked by age, erosion, and history. ", "The courtyard’s stone walls, uneven surfaces, and traces of former sacred use create an atmosphere of ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30775_G__30783$jscomp$inline_3202$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30775_G__30783$jscomp$inline_3202$$), 
                          " and material depth."]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30775_G__30783$jscomp$inline_3202$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30775_G__30783$jscomp$inline_3202$$);
                        }(), function() {
                          var $G__30797$$ = function() {
                            return {children:["In contrast to the controlled interior of Tesa 41, Giardino 25 functions as a ", function() {
                              var $G__30805$$ = {className:"font-semibold", children:"threshold space"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30805$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30805$$);
                            }(), "—neither fully inside nor fully outside—where the work enters into direct dialogue with ", function() {
                              var $G__30809$$ = {className:"", children:"ruin"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30809$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30809$$);
                            }(), ", ", function() {
                              var $G__30815$$ = {className:"", children:"open sky"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30815$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30815$$);
                            }(), ", and ", function() {
                              var $G__30819$$ = {className:"", children:"changing light"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30819$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30819$$);
                            }(), "."]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30797$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30797$$);
                        }(), function() {
                          var $G__30823$$ = function() {
                            return {className:"pt-2", children:[function() {
                              var $G__30827$$ = {className:"font-semibold text-slate-100", children:"Giardino 25"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30827$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30827$$);
                            }(), " extends the Pavilion outward—allowing the project to breathe within an environment shaped as much by ", function() {
                              var $G__30831$$ = {className:"italic", children:"absence"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30831$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30831$$);
                            }(), " as by structure."]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30823$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30823$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30722$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30722$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30696$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30696$$);
                }(), function() {
                  $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
                  var $G__30835_G__30843$jscomp$inline_3458_outer_ctx$jscomp$inline_3456$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
                  var $G__30847$jscomp$inline_3460_JSCompiler_inline_result$jscomp$inline_3459_vec__30839$jscomp$inline_3457$$ = $amp$hooks$use_intersection_observer$use_intersection_observer$$($G__30835_G__30843$jscomp$inline_3458_outer_ctx$jscomp$inline_3456$$);
                  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30847$jscomp$inline_3460_JSCompiler_inline_result$jscomp$inline_3459_vec__30839$jscomp$inline_3457$$, 0, null);
                  $G__30847$jscomp$inline_3460_JSCompiler_inline_result$jscomp$inline_3459_vec__30839$jscomp$inline_3457$$ = {"playback-id":"00r6626C33zSItHxx4iRh1oJPgP1tsH01qR00bNkN7i4go", "should-play?":$APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30847$jscomp$inline_3460_JSCompiler_inline_result$jscomp$inline_3459_vec__30839$jscomp$inline_3457$$, 1, null), "allow-audio?":!1};
                  $G__30847$jscomp$inline_3460_JSCompiler_inline_result$jscomp$inline_3459_vec__30839$jscomp$inline_3457$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$location_section$lazy_video$$, $G__30847$jscomp$inline_3460_JSCompiler_inline_result$jscomp$inline_3459_vec__30839$jscomp$inline_3457$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$location_section$lazy_video$$, 
                  $G__30847$jscomp$inline_3460_JSCompiler_inline_result$jscomp$inline_3459_vec__30839$jscomp$inline_3457$$);
                  $G__30835_G__30843$jscomp$inline_3458_outer_ctx$jscomp$inline_3456$$ = {className:"", ref:$G__30835_G__30843$jscomp$inline_3458_outer_ctx$jscomp$inline_3456$$, children:$G__30847$jscomp$inline_3460_JSCompiler_inline_result$jscomp$inline_3459_vec__30839$jscomp$inline_3457$$};
                  $G__30835_G__30843$jscomp$inline_3458_outer_ctx$jscomp$inline_3456$$ = {className:"w-full h-full flex flex-col gap-4 mt-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30835_G__30843$jscomp$inline_3458_outer_ctx$jscomp$inline_3456$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30835_G__30843$jscomp$inline_3458_outer_ctx$jscomp$inline_3456$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30835_G__30843$jscomp$inline_3458_outer_ctx$jscomp$inline_3456$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30835_G__30843$jscomp$inline_3458_outer_ctx$jscomp$inline_3456$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30686$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30686$$);
            }(), function() {
              var $G__30851$$ = function() {
                return {className:"mt-12", children:[function() {
                  var $G__30856$$ = function() {
                    return {className:"p-4", children:[function() {
                      var $G__30860$$ = {className:"pb-4 text-3xl font-helvetica font-bold uppercase", children:"#3 — OUTPOST (CANAL WALKWAY)"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30860$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__30860$$);
                    }(), function() {
                      var $G__30866$$ = function() {
                        return {className:"space-y-6", children:[function() {
                          var $G__30872$$ = function() {
                            return {children:["The ", function() {
                              var $G__30876$$ = {className:"font-semibold text-slate-100", children:"Outpost"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30876$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30876$$);
                            }(), " occupies a brick- and stone-laid walkway that projects into the main canal of the Arsenale. ", "Positioned directly in front of ", function() {
                              var $G__30883$$ = {className:"font-medium", children:"Tesa 41"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30883$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30883$$);
                            }(), " and ", function() {
                              var $G__30887$$ = {className:"font-medium", children:"Giardino 25"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30887$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30887$$);
                            }(), ", this narrow but critical site serves as the Pavilion’s most ", function() {
                              var $G__30891$$ = {className:"font-semibold", children:"publicly visible point of contact"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30891$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30891$$);
                            }(), "."]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30872$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30872$$);
                        }(), function() {
                          var $G__30895_G__30899$jscomp$inline_3208$$ = {className:"italic", children:"before"};
                          $G__30895_G__30899$jscomp$inline_3208$$ = {children:["The Outpost can be seen from a major pedestrian route leading into the central Arsenale exhibition grounds. ", "Visitors cross a well-known, heavily trafficked bridge and encounter this site ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30895_G__30899$jscomp$inline_3208$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30895_G__30899$jscomp$inline_3208$$), 
                          " reaching the main Biennale axis."]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30895_G__30899$jscomp$inline_3208$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30895_G__30899$jscomp$inline_3208$$);
                        }(), function() {
                          var $G__30903$$ = function() {
                            return {children:["As a result, the Outpost functions as a ", function() {
                              var $G__30907$$ = {className:"font-semibold", children:"signal"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30907$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30907$$);
                            }(), " and a ", function() {
                              var $G__30911$$ = {className:"font-semibold", children:"threshold"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30911$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30911$$);
                            }(), "—an early, unavoidable presence that announces the Pavilion to thousands of passersby, including those who may never enter the interior spaces."]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30903$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30903$$);
                        }(), function() {
                          var $G__30916$$ = {className:"pt-2", children:"This location extends the Pavilion into the daily flow of the Biennale—establishing a continuous visual and conceptual presence along the canal."};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30916$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__30916$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30866$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30866$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30856$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30856$$);
                }(), function() {
                  var $G__30922$$ = function() {
                    return {className:"w-full h-full flex flex-col gap-4 mt-12", children:function() {
                      $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
                      var $outer_ctx$jscomp$14$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $G__30931_vec__30925$$ = $amp$hooks$use_intersection_observer$use_intersection_observer$$($outer_ctx$jscomp$14$$);
                      $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30931_vec__30925$$, 0, null);
                      var $is_visible_QMARK_$jscomp$11$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30931_vec__30925$$, 1, null);
                      $G__30931_vec__30925$$ = function() {
                        return {className:"", ref:$outer_ctx$jscomp$14$$, children:[function() {
                          var $G__30935_G__30949$jscomp$inline_3211$$ = {"playback-id":"A602Gnm6A7gpYTl2w4ZnC9xDEnOQQJWbS3dNxhE1O1FE", "should-play?":$is_visible_QMARK_$jscomp$11$$, "allow-audio?":!1};
                          $G__30935_G__30949$jscomp$inline_3211$$ = {className:"w-full aspect-[16/9]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$location_section$lazy_video$$, $G__30935_G__30949$jscomp$inline_3211$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$location_section$lazy_video$$, $G__30935_G__30949$jscomp$inline_3211$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30935_G__30949$jscomp$inline_3211$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30935_G__30949$jscomp$inline_3211$$);
                        }(), function() {
                          var $G__30955_G__30959$jscomp$inline_3214$$ = {"img-src":"https://atd-722658831.imgix.net/big_red/outpost.jpg", "aspect-ratio":0.55, "active?":$is_visible_QMARK_$jscomp$11$$};
                          $G__30955_G__30959$jscomp$inline_3214$$ = {className:"w-full aspect-[0.525]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__30955_G__30959$jscomp$inline_3214$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__30955_G__30959$jscomp$inline_3214$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30955_G__30959$jscomp$inline_3214$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30955_G__30959$jscomp$inline_3214$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30931_vec__30925$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30931_vec__30925$$);
                    }()};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30922$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30922$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30851$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30851$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30128$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30128$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30071$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30071$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30065_map__30057_map__30057__$1_props__21778__auto__$jscomp$74_vec__30053$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30065_map__30057_map__30057__$1_props__21778__auto__$jscomp$74_vec__30053$$);
};
$amp$components$elements$budget$location_section$location_section$$ = function($G__30970_id$jscomp$71_map__30968_props__21778__auto__$jscomp$75_vec__30965$$, $G__31003$jscomp$inline_3217_JSCompiler_inline_result$jscomp$inline_3216_maybe_ref__21780__auto__$jscomp$75_subtitle$jscomp$4$$) {
  $G__30970_id$jscomp$71_map__30968_props__21778__auto__$jscomp$75_vec__30965$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__30970_id$jscomp$71_map__30968_props__21778__auto__$jscomp$75_vec__30965$$), $G__31003$jscomp$inline_3217_JSCompiler_inline_result$jscomp$inline_3216_maybe_ref__21780__auto__$jscomp$75_subtitle$jscomp$4$$], null);
  $G__30970_id$jscomp$71_map__30968_props__21778__auto__$jscomp$75_vec__30965$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30970_id$jscomp$71_map__30968_props__21778__auto__$jscomp$75_vec__30965$$, 0, null);
  var $map__30968__$1_title$jscomp$24$$ = $APP.$cljs$core$__destructure_map$$($G__30970_id$jscomp$71_map__30968_props__21778__auto__$jscomp$75_vec__30965$$);
  $G__30970_id$jscomp$71_map__30968_props__21778__auto__$jscomp$75_vec__30965$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__30968__$1_title$jscomp$24$$, $APP.$cljs$cst$290$id$$);
  $G__31003$jscomp$inline_3217_JSCompiler_inline_result$jscomp$inline_3216_maybe_ref__21780__auto__$jscomp$75_subtitle$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__30968__$1_title$jscomp$24$$, $cljs$cst$589$subtitle$$);
  $map__30968__$1_title$jscomp$24$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__30968__$1_title$jscomp$24$$, $APP.$cljs$cst$463$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__31003$jscomp$inline_3217_JSCompiler_inline_result$jscomp$inline_3216_maybe_ref__21780__auto__$jscomp$75_subtitle$jscomp$4$$ = {"section-hint":$G__31003$jscomp$inline_3217_JSCompiler_inline_result$jscomp$inline_3216_maybe_ref__21780__auto__$jscomp$75_subtitle$jscomp$4$$, title:$map__30968__$1_title$jscomp$24$$, "expand-button-label":"Expand details", "preview-text":$amp$components$elements$budget$location_section$preview$$, "full-text":$amp$components$elements$budget$location_section$full_details$$};
  $G__31003$jscomp$inline_3217_JSCompiler_inline_result$jscomp$inline_3216_maybe_ref__21780__auto__$jscomp$75_subtitle$jscomp$4$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__31003$jscomp$inline_3217_JSCompiler_inline_result$jscomp$inline_3216_maybe_ref__21780__auto__$jscomp$75_subtitle$jscomp$4$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$expandable_text_area$expandable_text_area_2$$, 
  $G__31003$jscomp$inline_3217_JSCompiler_inline_result$jscomp$inline_3216_maybe_ref__21780__auto__$jscomp$75_subtitle$jscomp$4$$);
  $G__30970_id$jscomp$71_map__30968_props__21778__auto__$jscomp$75_vec__30965$$ = {id:$G__30970_id$jscomp$71_map__30968_props__21778__auto__$jscomp$75_vec__30965$$, children:$G__31003$jscomp$inline_3217_JSCompiler_inline_result$jscomp$inline_3216_maybe_ref__21780__auto__$jscomp$75_subtitle$jscomp$4$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30970_id$jscomp$71_map__30968_props__21778__auto__$jscomp$75_vec__30965$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30970_id$jscomp$71_map__30968_props__21778__auto__$jscomp$75_vec__30965$$);
};
$amp$components$elements$budget$non_profit$non_profit$$ = function($G__29797_map__29791_map__29791__$1_props__21778__auto__$jscomp$76_vec__29788$$, $maybe_ref__21780__auto__$jscomp$76$$) {
  $G__29797_map__29791_map__29791__$1_props__21778__auto__$jscomp$76_vec__29788$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__29797_map__29791_map__29791__$1_props__21778__auto__$jscomp$76_vec__29788$$), $maybe_ref__21780__auto__$jscomp$76$$], null);
  $G__29797_map__29791_map__29791__$1_props__21778__auto__$jscomp$76_vec__29788$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29797_map__29791_map__29791__$1_props__21778__auto__$jscomp$76_vec__29788$$, 0, null);
  $G__29797_map__29791_map__29791__$1_props__21778__auto__$jscomp$76_vec__29788$$ = $APP.$cljs$core$__destructure_map$$($G__29797_map__29791_map__29791__$1_props__21778__auto__$jscomp$76_vec__29788$$);
  var $id$jscomp$72$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__29797_map__29791_map__29791__$1_props__21778__auto__$jscomp$76_vec__29788$$, $APP.$cljs$cst$290$id$$), $subtitle$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__29797_map__29791_map__29791__$1_props__21778__auto__$jscomp$76_vec__29788$$, $cljs$cst$589$subtitle$$), $title$jscomp$25$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__29797_map__29791_map__29791__$1_props__21778__auto__$jscomp$76_vec__29788$$, 
  $APP.$cljs$cst$463$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__29797_map__29791_map__29791__$1_props__21778__auto__$jscomp$76_vec__29788$$ = function() {
    return {id:$id$jscomp$72$$, children:function() {
      var $G__29805$$ = function() {
        return {idx:5, eyebrow:$subtitle$jscomp$5$$, title:$title$jscomp$25$$, children:function() {
          var $G__29815$$ = function() {
            return {className:"space-y-8\n                   p-4", children:[function() {
              var $G__29823$$ = function() {
                return {className:"mb-12 text-slate-300", children:[function() {
                  var $G__29829$$ = function() {
                    return {children:["The Armenia Pavilion 2026 is supported through ", function() {
                      var $G__29837$$ = {className:"font-semibold", children:"Fallen Angels Inc."};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29837$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29837$$);
                    }(), ", a registered ", function() {
                      var $G__29845$$ = {className:"font-semibold", children:"501(c)(3)"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29845$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29845$$);
                    }(), " public non-profit organization. ", function() {
                      var $G__29853$$ = {className:"font-semibold", children:"Contributions are tax deductible"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29853$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29853$$);
                    }(), " to the extent permitted by law."]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29829$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__29829$$);
                }(), function() {
                  var $G__29860$$ = function() {
                    return {className:"mt-6 space-y-1", children:[function() {
                      var $G__29868_G__29874$jscomp$inline_3220$$ = {className:"font-semibold", children:"Organization: "};
                      $G__29868_G__29874$jscomp$inline_3220$$ = {children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29868_G__29874$jscomp$inline_3220$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29868_G__29874$jscomp$inline_3220$$), "Fallen Angels Inc."]};
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29868_G__29874$jscomp$inline_3220$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__29868_G__29874$jscomp$inline_3220$$);
                    }(), function() {
                      var $G__29886$$ = function() {
                        return {children:[function() {
                          var $G__29892$$ = {className:"font-semibold", children:"EIN: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29892$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29892$$);
                        }(), function() {
                          var $G__29898$$ = {className:"font-bold text-slate-100", children:"92-2395513"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29898$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29898$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29886$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__29886$$);
                    }(), function() {
                      var $G__29906$$ = function() {
                        return {children:[function() {
                          var $G__29924$$ = {className:"font-semibold", children:"Located in: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29924$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29924$$);
                        }(), function() {
                          var $G__29956$$ = {className:"font-bold text-slate-100", children:"Los Angeles, CA"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29956$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29956$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29906$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__29906$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29860$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29860$$);
                }(), function() {
                  var $G__29981$$ = function() {
                    return {className:"mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10", children:[function() {
                      var $G__29991$$ = function() {
                        return {children:[function() {
                          var $G__30001_G__30005$jscomp$inline_3223$$ = {className:"italic font-normal text-slate-300", children:"Transfers"};
                          $G__30001_G__30005$jscomp$inline_3223$$ = {className:"text-3xl font-helvetica font-bold text-slate-100 mb-4", children:["Domestic ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30001_G__30005$jscomp$inline_3223$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30001_G__30005$jscomp$inline_3223$$)]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30001_G__30005$jscomp$inline_3223$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30001_G__30005$jscomp$inline_3223$$);
                        }(), function() {
                          var $G__30009$$ = function() {
                            return {className:"space-y-3", children:[function() {
                              var $G__30304$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__30324$$ = {className:"font-semibold", children:"Name:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30324$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30324$$);
                                }(), function() {
                                  var $G__30348$$ = {className:"text-right", children:"Fallen Angels Inc."};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30348$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30348$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30304$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30304$$);
                            }(), function() {
                              var $G__30367$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__30379$$ = {className:"font-semibold", children:"Routing:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30379$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30379$$);
                                }(), function() {
                                  var $G__30385$$ = {className:"text-right font-bold text-slate-100 tracking-wide", children:"091311229"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30385$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30385$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30367$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30367$$);
                            }(), function() {
                              var $G__30391$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__30395$$ = {className:"font-semibold", children:"Account #:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30395$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30395$$);
                                }(), function() {
                                  var $G__30399$$ = {className:"text-right font-bold text-slate-100 tracking-wide", children:"202535309341"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30399$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30399$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30391$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30391$$);
                            }(), function() {
                              var $G__30403$$ = function() {
                                return {className:"flex items-start justify-between gap-6", children:[function() {
                                  var $G__30407$$ = {className:"font-semibold", children:"Address:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30407$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30407$$);
                                }(), function() {
                                  var $G__30412$$ = function() {
                                    return {className:"text-right leading-snug", children:[function() {
                                      var $G__30416$$ = {children:"Choice Financial Group"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30416$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__30416$$);
                                    }(), function() {
                                      var $G__30423$$ = {children:"4501 23rd Avenue S"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30423$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__30423$$);
                                    }(), function() {
                                      var $G__30428$$ = {children:"Fargo, ND 58104"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30428$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__30428$$);
                                    }()]};
                                  }();
                                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30412$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30412$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30403$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30403$$);
                            }()]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30009$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30009$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29991$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29991$$);
                    }(), function() {
                      var $G__30436$$ = function() {
                        return {children:[function() {
                          var $G__30440_G__30444$jscomp$inline_3226$$ = {className:"italic font-normal text-slate-300", children:"Transfers"};
                          $G__30440_G__30444$jscomp$inline_3226$$ = {className:"text-3xl font-helvetica font-bold text-slate-100 mb-4", children:["International ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30440_G__30444$jscomp$inline_3226$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30440_G__30444$jscomp$inline_3226$$)]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30440_G__30444$jscomp$inline_3226$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30440_G__30444$jscomp$inline_3226$$);
                        }(), function() {
                          var $G__30450$$ = function() {
                            return {className:"space-y-3", children:[function() {
                              var $G__30456$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__30464$$ = {className:"font-semibold", children:"Name:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30464$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30464$$);
                                }(), function() {
                                  var $G__30470$$ = {className:"text-right", children:"Fallen Angels Inc."};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30470$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30470$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30456$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30456$$);
                            }(), function() {
                              var $G__30478$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__30490$$ = {className:"font-semibold", children:"SWIFT/BIC:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30490$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30490$$);
                                }(), function() {
                                  var $G__30496$$ = {className:"text-right font-bold text-slate-100 tracking-wide", children:"CHFGUS44021"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30496$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30496$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30478$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30478$$);
                            }(), function() {
                              var $G__30506$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__30514$$ = {className:"font-semibold", children:"ABA/Routing:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30514$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30514$$);
                                }(), function() {
                                  var $G__30520$$ = {className:"text-right font-bold text-slate-100 tracking-wide", children:"091311229"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30520$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30520$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30506$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30506$$);
                            }(), function() {
                              var $G__30526$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__30530$$ = {className:"font-semibold", children:"IBAN/Account #:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30530$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30530$$);
                                }(), function() {
                                  var $G__30540$$ = {className:"text-right font-bold text-slate-100 tracking-wide", children:"202535309341"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30540$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30540$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30526$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30526$$);
                            }(), function() {
                              var $G__30550$$ = function() {
                                return {className:"flex items-start justify-between gap-6", children:[function() {
                                  var $G__30561$$ = {className:"font-semibold", children:"Address:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30561$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30561$$);
                                }(), function() {
                                  var $G__30569$$ = function() {
                                    return {className:"text-right leading-snug", children:[function() {
                                      var $G__30577$$ = {children:"Choice Financial Group"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30577$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__30577$$);
                                    }(), function() {
                                      var $G__30581$$ = {children:"4501 23rd Avenue S"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30581$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__30581$$);
                                    }(), function() {
                                      var $G__30587$$ = {children:"Fargo, ND 58104"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30587$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__30587$$);
                                    }()]};
                                  }();
                                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30569$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30569$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30550$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30550$$);
                            }()]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30450$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30450$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30436$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30436$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29981$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29981$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29823$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29823$$);
            }(), function() {
              var $G__30602$$ = {className:"p-4 mt-10 text-sm md:text-base text-slate-400", children:"If you would like a receipt letter for your records, please include your name and email address with the transfer memo."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30602$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__30602$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29815$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29815$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$section_block$section_block$$, $G__29805$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$section_block$section_block$$, $G__29805$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29797_map__29791_map__29791__$1_props__21778__auto__$jscomp$76_vec__29788$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29797_map__29791_map__29791__$1_props__21778__auto__$jscomp$76_vec__29788$$);
};
$amp$components$navs$back_up_nav$back_up_nav$$ = function($G__29732_is_active_QMARK_$jscomp$14_props__21778__auto__$jscomp$77_vec__29692$$) {
  $APP.$helix$core$extract_cljs_props$$($G__29732_is_active_QMARK_$jscomp$14_props__21778__auto__$jscomp$77_vec__29692$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $container_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("container-ref"), $button_ref$$ = $APP.$helix$hooks$use_ref$$("button-ref"), $scroll_to_top$$ = $amp$hooks$use_scroll_to$use_scroll_to_top$cljs$0core$0IFn$0_invoke$0arity$0variadic$$();
  $G__29732_is_active_QMARK_$jscomp$14_props__21778__auto__$jscomp$77_vec__29692$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($container_ref$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$446$start$$, function() {
    return window.innerHeight - window.innerHeight / 8;
  }, $APP.$cljs$cst$472$end$$, "1000000px", $APP.$cljs$cst$474$markers_QMARK_$$, !1, $APP.$cljs$cst$475$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29732_is_active_QMARK_$jscomp$14_props__21778__auto__$jscomp$77_vec__29692$$, 0, null);
  $G__29732_is_active_QMARK_$jscomp$14_props__21778__auto__$jscomp$77_vec__29692$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29732_is_active_QMARK_$jscomp$14_props__21778__auto__$jscomp$77_vec__29692$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($button_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$487$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$524$opacity$$, 1], null), $APP.$cljs$cst$488$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$524$opacity$$, 0.7], null)]));
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$485$target$$, $container_ref$jscomp$1$$, $APP.$cljs$cst$491$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$481$y$$, 0, $APP.$cljs$cst$524$opacity$$, 1], null), $APP.$cljs$cst$493$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$481$y$$, -150, $APP.$cljs$cst$524$opacity$$, 0.25], null), $APP.$cljs$cst$489$is_on_QMARK_$$, 
  $G__29732_is_active_QMARK_$jscomp$14_props__21778__auto__$jscomp$77_vec__29692$$], null));
  $G__29732_is_active_QMARK_$jscomp$14_props__21778__auto__$jscomp$77_vec__29692$$ = function() {
    var $G__29746$jscomp$inline_3228_G__29763$jscomp$inline_3230_JSCompiler_inline_result$jscomp$2981_JSCompiler_inline_result$jscomp$inline_3229$$ = {};
    $G__29746$jscomp$inline_3228_G__29763$jscomp$inline_3230_JSCompiler_inline_result$jscomp$2981_JSCompiler_inline_result$jscomp$inline_3229$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$icons$ArrowTurnRightUp$$, $G__29746$jscomp$inline_3228_G__29763$jscomp$inline_3230_JSCompiler_inline_result$jscomp$2981_JSCompiler_inline_result$jscomp$inline_3229$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$icons$ArrowTurnRightUp$$, 
    $G__29746$jscomp$inline_3228_G__29763$jscomp$inline_3230_JSCompiler_inline_result$jscomp$2981_JSCompiler_inline_result$jscomp$inline_3229$$);
    $G__29746$jscomp$inline_3228_G__29763$jscomp$inline_3230_JSCompiler_inline_result$jscomp$2981_JSCompiler_inline_result$jscomp$inline_3229$$ = {ref:$button_ref$$, className:"flex \n                           w-full\n                           h-full\n                           bg-pink-300\n                           opacity-90\n                           font-bold\n                           text-xl\n                           px-4\n                           white-space-no-wrap", onClick:$scroll_to_top$$, 
    children:["To Top ", $G__29746$jscomp$inline_3228_G__29763$jscomp$inline_3230_JSCompiler_inline_result$jscomp$2981_JSCompiler_inline_result$jscomp$inline_3229$$]};
    $G__29746$jscomp$inline_3228_G__29763$jscomp$inline_3230_JSCompiler_inline_result$jscomp$2981_JSCompiler_inline_result$jscomp$inline_3229$$ = $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29746$jscomp$inline_3228_G__29763$jscomp$inline_3230_JSCompiler_inline_result$jscomp$2981_JSCompiler_inline_result$jscomp$inline_3229$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29746$jscomp$inline_3228_G__29763$jscomp$inline_3230_JSCompiler_inline_result$jscomp$2981_JSCompiler_inline_result$jscomp$inline_3229$$);
    return {ref:$container_ref$jscomp$1$$, className:"fixed right-0 cursor-pointer z-30", children:$G__29746$jscomp$inline_3228_G__29763$jscomp$inline_3230_JSCompiler_inline_result$jscomp$2981_JSCompiler_inline_result$jscomp$inline_3229$$};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29732_is_active_QMARK_$jscomp$14_props__21778__auto__$jscomp$77_vec__29692$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29732_is_active_QMARK_$jscomp$14_props__21778__auto__$jscomp$77_vec__29692$$);
};
$amp$components$sections$press_release$preview$$ = function($G__29674_map__29657_props__21778__auto__$jscomp$78_vec__29654$$, $maybe_ref__21780__auto__$jscomp$78$$) {
  $G__29674_map__29657_props__21778__auto__$jscomp$78_vec__29654$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__29674_map__29657_props__21778__auto__$jscomp$78_vec__29654$$), $maybe_ref__21780__auto__$jscomp$78$$], null);
  $G__29674_map__29657_props__21778__auto__$jscomp$78_vec__29654$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29674_map__29657_props__21778__auto__$jscomp$78_vec__29654$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__29674_map__29657_props__21778__auto__$jscomp$78_vec__29654$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__29674_map__29657_props__21778__auto__$jscomp$78_vec__29654$$ = function() {
    return {className:"px-4", children:function() {
      var $G__29683$$ = function() {
        return {className:" text-xl", children:[function() {
          var $G__29698$$ = {className:"italic", children:"Yerevan / Los Angeles / Venice — "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29698$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29698$$);
        }(), "The Ministry of Culture of the Republic of Armenia has selected ", function() {
          var $G__29710$$ = {className:"font-semibold", children:"Zadik Zadikian"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29710$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29710$$);
        }(), " to represent Armenia at the ", function() {
          var $G__29718$$ = {className:"font-semibold", children:"61st Venice Biennale Arte"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29718$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29718$$);
        }(), " in 2026. Led by legendary art dealer ", function() {
          var $G__29734$$ = {className:"font-semibold", children:"Tony Shafrazi"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29734$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29734$$);
        }(), " as chief curator, and Tina Chakarian as curator, the Pavilion aligns with Armenia's broader commitment to elevating its cultural presence on the international stage..."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29683$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__29683$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29674_map__29657_props__21778__auto__$jscomp$78_vec__29654$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29674_map__29657_props__21778__auto__$jscomp$78_vec__29654$$);
};
$amp$components$sections$press_release$details$$ = function($G__29918_map__29912_props__21778__auto__$jscomp$79_vec__29909$$, $maybe_ref__21780__auto__$jscomp$79$$) {
  $G__29918_map__29912_props__21778__auto__$jscomp$79_vec__29909$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__29918_map__29912_props__21778__auto__$jscomp$79_vec__29909$$), $maybe_ref__21780__auto__$jscomp$79$$], null);
  $G__29918_map__29912_props__21778__auto__$jscomp$79_vec__29909$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29918_map__29912_props__21778__auto__$jscomp$79_vec__29909$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__29918_map__29912_props__21778__auto__$jscomp$79_vec__29909$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__29918_map__29912_props__21778__auto__$jscomp$79_vec__29909$$ = function() {
    return {className:"px-4", children:[function() {
      var $G__29928$$ = function() {
        return {className:" text-xl mb-6", children:[function() {
          var $G__29944$$ = {className:"italic", children:"Yerevan / Los Angeles / Venice — "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29944$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29944$$);
        }(), "The Ministry of Culture of the Republic of Armenia has selected ", function() {
          var $G__29954$$ = {className:"font-semibold", children:"Zadik Zadikian"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29954$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29954$$);
        }(), " to represent Armenia at the ", function() {
          var $G__29960$$ = {className:"font-semibold", children:"61st Venice Biennale Arte"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29960$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29960$$);
        }(), " in 2026. Led by legendary art dealer ", function() {
          var $G__29966$$ = {className:"font-semibold", children:"Tony Shafrazi"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29966$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29966$$);
        }(), " as chief curator, and Tina Chakarian as curator, the Pavilion aligns with Armenia's broader commitment to elevating its cultural presence on the international stage."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29928$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__29928$$);
    }(), function() {
      var $G__29970$$ = {className:"mb-6", children:"This collaboration marks a historic and deeply resonant moment in both Zadikian's and Shafrazi's lives and careers: a symbolic return to Armenia and a shared mission to present a world-class national Pavilion to a global audience."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29970$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__29970$$);
    }(), function() {
      var $G__29974$$ = function() {
        return {className:"mb-6", children:["Zadikian—who left Soviet Armenia at nineteen and experienced a radical cultural rupture upon arriving in the United States—came of age artistically through an uncommon trajectory. From San Francisco during the height of the countercultural moment, working with ", function() {
          var $G__29979$$ = {className:"italic", children:"Benjamin Bufano"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29979$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29979$$);
        }(), ", to New York, where he assisted ", function() {
          var $G__29985$$ = {className:"italic", children:"Richard Serra"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29985$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29985$$);
        }(), " on monumental oil-stick wall drawings—one of which Serra titled ", function() {
          var $G__29993$$ = {className:"italic", children:"Zadikian"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29993$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29993$$);
        }(), "—the artist now returns with a project of uncommon ambition and conceptual rigor."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29974$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__29974$$);
    }(), function() {
      var $G__29999_G__30180$jscomp$inline_3233$$ = {className:"font-bold text-pink-400", children:"THE STUDIO "};
      $G__29999_G__30180$jscomp$inline_3233$$ = {className:"mb-6", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29999_G__30180$jscomp$inline_3233$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29999_G__30180$jscomp$inline_3233$$), "transforms the Armenia Pavilion into an active site of sustained, concentrated making. Throughout the Biennale, Zadikian and his team will fabricate primordial plaster units on site—ranging from palm-sized objects to human-scale forms—each one a three-dimensional articulation of distilled color, ratio, and reflectivity."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29999_G__30180$jscomp$inline_3233$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__29999_G__30180$jscomp$inline_3233$$);
    }(), function() {
      var $G__30188$$ = {className:"mb-6 italic", children:'"We\'re creating material that transforms by its very nature into sculpture—material with a clarity of line and reflection so immediate that the eye can fly across it," says Zadikian.'};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30188$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__30188$$);
    }(), function() {
      var $G__30196$$ = {className:"mb-6 italic", children:"For Shafrazi, the work's insistence on touch is central: \" It's haptic. Do you know how important that is? That's what makes it. \""};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30196$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__30196$$);
    }(), function() {
      var $G__30204$$ = {className:"mb-6", children:"The Pavilion privileges a form of seeing grounded in the body—through weight, temperature, balance, and texture—rather than spectacle or narrative. Units will be cast, stacked, dismantled, and restacked throughout the exhibition, remaining in constant motion."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30204$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__30204$$);
    }(), function() {
      var $G__30212$$ = function() {
        return {className:"mb-6", children:["By presenting the studio in its raw, working state—without performance or theatrical staging—", function() {
          var $G__30220$$ = {className:"font-bold text-pink-400", children:"THE STUDIO "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30220$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30220$$);
        }(), "aligns closely with the Biennale's curatorial framework, ", function() {
          var $G__30228$$ = {className:"italic", children:"In Minor Keys"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30228$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30228$$);
        }(), ". The work responds not with commentary or illustration, but with material intelligence, meditative clarity, and poetic restraint—tuning visitors to the lower frequencies: the modest, the elemental, the sanctuary."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30212$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30212$$);
    }(), function() {
      var $G__30236$$ = {className:"mb-6", children:"The project marks an inner shift for Zadikian, turning away from the bombast of gold toward a quieter thread that has long run through his practice: plaster and pigment. The work foregrounds the rigor, repetition, and material intelligence that have underpinned his oeuvre for decades."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30236$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__30236$$);
    }(), function() {
      var $G__30244_G__30248$jscomp$inline_3236$$ = {className:"font-bold text-pink-400", children:"THE STUDIO "};
      $G__30244_G__30248$jscomp$inline_3236$$ = {children:["In a cultural moment dominated by speed, novelty, and distraction, ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30244_G__30248$jscomp$inline_3236$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30244_G__30248$jscomp$inline_3236$$), "turns toward repetition, exactitude, and touch. Drawing on childhood experiences working with Armenian tuff stone and a lifelong intimacy with plaster, Zadikian produces units that appear plain at first glance, yet reveal unexpected depth through surface, edge, and volume. Together, they form a precise yet open-ended vocabulary—a language of blocks, strata, and intervals that underwrites a larger meditation on resilience, renewal, and the rediscovery of origins."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30244_G__30248$jscomp$inline_3236$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__30244_G__30248$jscomp$inline_3236$$);
    }(), function() {
      var $G__30253_G__30257$jscomp$inline_3239$$ = {className:"text-2xl italic", children:"- Nov 15th, 2025 "};
      $G__30253_G__30257$jscomp$inline_3239$$ = {className:"mt-8", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30253_G__30257$jscomp$inline_3239$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30253_G__30257$jscomp$inline_3239$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__30253_G__30257$jscomp$inline_3239$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__30253_G__30257$jscomp$inline_3239$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29918_map__29912_props__21778__auto__$jscomp$79_vec__29909$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29918_map__29912_props__21778__auto__$jscomp$79_vec__29909$$);
};
$amp$components$sections$press_release$footer$$ = function($G__30280_map__30278_props__21778__auto__$jscomp$80_vec__30275$$, $maybe_ref__21780__auto__$jscomp$80$$) {
  $G__30280_map__30278_props__21778__auto__$jscomp$80_vec__30275$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__30280_map__30278_props__21778__auto__$jscomp$80_vec__30275$$), $maybe_ref__21780__auto__$jscomp$80$$], null);
  $G__30280_map__30278_props__21778__auto__$jscomp$80_vec__30275$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30280_map__30278_props__21778__auto__$jscomp$80_vec__30275$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__30280_map__30278_props__21778__auto__$jscomp$80_vec__30275$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__30280_map__30278_props__21778__auto__$jscomp$80_vec__30275$$ = function() {
    return {className:"p-4 italic text-lg text-slate-100", children:[function() {
      var $G__30284$$ = {className:"block mt-6", children:"*Note: As Armenia does not maintain a permanent national pavilion in Venice, the Pavilion must be realized through a rented venue—a standard and widely accepted model for many non-permanent participating nations."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30284$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30284$$);
    }(), function() {
      var $G__30290$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__30294$$ = {className:"text-slate-300", children:"The selected site operates at a base rental cost of approximately "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30294$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30294$$);
        }(), function() {
          var $G__30300$$ = {className:"font-semibold text-white", children:"$195,000"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30300$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30300$$);
        }(), function() {
          var $G__30308$$ = {className:"", children:[", representing a strategic and responsible choice when compared to venues in the Giardini or Arsenale, ", "where base rents—when space is available at all—typically begin at "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30308$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__30308$$);
        }(), function() {
          var $G__30316$$ = {className:"font-semibold text-white", children:"$450,000"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30316$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30316$$);
        }(), function() {
          var $G__30320$$ = {className:"text-slate-300", children:", excluding construction, staffing, and operational expenses. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30320$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30320$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30290$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30290$$);
    }(), function() {
      var $G__30330$$ = {className:"block mt-6", children:["To support the scale and international significance of this undertaking, ", "a dedicated fundraising committee has been formed to guide and advance the project’s philanthropic efforts. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30330$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__30330$$);
    }(), function() {
      var $G__30336$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__30340$$ = {className:"mt-4 text-slate-200", children:"The committee is led by "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30340$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30340$$);
        }(), function() {
          var $G__30346$$ = {className:"font-medium text-white", children:["Archbishop Hovnan Derderian, Tony Shafrazi, Tina Chakarian, Rafi Ourfalian, Khachik Khudikyan, ", "Andranik Torosyan, Aram Alajajian, and Vik Hovsepian."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30346$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__30346$$);
        }(), function() {
          var $G__30354$$ = {className:"text-slate-300", children:", ensuring the Pavilion’s successful realization through coordinated leadership, stewardship, and long-term commitment. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__30354$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__30354$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30336$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30336$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30280_map__30278_props__21778__auto__$jscomp$80_vec__30275$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__30280_map__30278_props__21778__auto__$jscomp$80_vec__30275$$);
};
$amp$components$sections$press_release$press_release$$ = function($G__30504_id$jscomp$73_map__30375_props__21778__auto__$jscomp$81_vec__30372$$, $G__30538$jscomp$inline_3242_JSCompiler_inline_result$jscomp$inline_3241_maybe_ref__21780__auto__$jscomp$81_subtitle$jscomp$6$$) {
  $G__30504_id$jscomp$73_map__30375_props__21778__auto__$jscomp$81_vec__30372$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__30504_id$jscomp$73_map__30375_props__21778__auto__$jscomp$81_vec__30372$$), $G__30538$jscomp$inline_3242_JSCompiler_inline_result$jscomp$inline_3241_maybe_ref__21780__auto__$jscomp$81_subtitle$jscomp$6$$], null);
  $G__30504_id$jscomp$73_map__30375_props__21778__auto__$jscomp$81_vec__30372$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__30504_id$jscomp$73_map__30375_props__21778__auto__$jscomp$81_vec__30372$$, 0, null);
  var $map__30375__$1_title$jscomp$26$$ = $APP.$cljs$core$__destructure_map$$($G__30504_id$jscomp$73_map__30375_props__21778__auto__$jscomp$81_vec__30372$$);
  $G__30504_id$jscomp$73_map__30375_props__21778__auto__$jscomp$81_vec__30372$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__30375__$1_title$jscomp$26$$, $APP.$cljs$cst$290$id$$);
  $G__30538$jscomp$inline_3242_JSCompiler_inline_result$jscomp$inline_3241_maybe_ref__21780__auto__$jscomp$81_subtitle$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__30375__$1_title$jscomp$26$$, $cljs$cst$589$subtitle$$);
  $map__30375__$1_title$jscomp$26$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__30375__$1_title$jscomp$26$$, $APP.$cljs$cst$463$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__30538$jscomp$inline_3242_JSCompiler_inline_result$jscomp$inline_3241_maybe_ref__21780__auto__$jscomp$81_subtitle$jscomp$6$$ = {"section-hint":$G__30538$jscomp$inline_3242_JSCompiler_inline_result$jscomp$inline_3241_maybe_ref__21780__auto__$jscomp$81_subtitle$jscomp$6$$, title:$map__30375__$1_title$jscomp$26$$, "expand-button-label":"Read full release", "preview-text":$amp$components$sections$press_release$preview$$, "full-text":$amp$components$sections$press_release$details$$, "footer-text":$amp$components$sections$press_release$footer$$};
  $G__30538$jscomp$inline_3242_JSCompiler_inline_result$jscomp$inline_3241_maybe_ref__21780__auto__$jscomp$81_subtitle$jscomp$6$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__30538$jscomp$inline_3242_JSCompiler_inline_result$jscomp$inline_3241_maybe_ref__21780__auto__$jscomp$81_subtitle$jscomp$6$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$expandable_text_area$expandable_text_area_2$$, 
  $G__30538$jscomp$inline_3242_JSCompiler_inline_result$jscomp$inline_3241_maybe_ref__21780__auto__$jscomp$81_subtitle$jscomp$6$$);
  $G__30504_id$jscomp$73_map__30375_props__21778__auto__$jscomp$81_vec__30372$$ = {id:$G__30504_id$jscomp$73_map__30375_props__21778__auto__$jscomp$81_vec__30372$$, children:$G__30538$jscomp$inline_3242_JSCompiler_inline_result$jscomp$inline_3241_maybe_ref__21780__auto__$jscomp$81_subtitle$jscomp$6$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__30504_id$jscomp$73_map__30375_props__21778__auto__$jscomp$81_vec__30372$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__30504_id$jscomp$73_map__30375_props__21778__auto__$jscomp$81_vec__30372$$);
};
$amp$components$sections$budget_section$section_link$$ = function($G__31363_map__31361_map__31361__$1_props__21778__auto__$jscomp$82_vec__31358$$, $maybe_ref__21780__auto__$jscomp$82$$) {
  $G__31363_map__31361_map__31361__$1_props__21778__auto__$jscomp$82_vec__31358$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__31363_map__31361_map__31361__$1_props__21778__auto__$jscomp$82_vec__31358$$), $maybe_ref__21780__auto__$jscomp$82$$], null);
  $G__31363_map__31361_map__31361__$1_props__21778__auto__$jscomp$82_vec__31358$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__31363_map__31361_map__31361__$1_props__21778__auto__$jscomp$82_vec__31358$$, 0, null);
  $G__31363_map__31361_map__31361__$1_props__21778__auto__$jscomp$82_vec__31358$$ = $APP.$cljs$core$__destructure_map$$($G__31363_map__31361_map__31361__$1_props__21778__auto__$jscomp$82_vec__31358$$);
  var $title$jscomp$27$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__31363_map__31361_map__31361__$1_props__21778__auto__$jscomp$82_vec__31358$$, $APP.$cljs$cst$463$title$$), $anchor$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__31363_map__31361_map__31361__$1_props__21778__auto__$jscomp$82_vec__31358$$, $cljs$cst$610$anchor$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$jscomp$1$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__31363_map__31361_map__31361__$1_props__21778__auto__$jscomp$82_vec__31358$$ = function() {
    return {onClick:function() {
      return $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($anchor$jscomp$2$$) : $scroll_to_id$jscomp$1$$.call(null, $anchor$jscomp$2$$);
    }, className:"hover:text-pink-400 transition-colors", children:[$title$jscomp$27$$, " ", function() {
      var $G__31367$$ = {"class":"w-6 h-6 inline-block ml-1"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$icons$ChevronRightIcon$$, $G__31367$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$icons$ChevronRightIcon$$, $G__31367$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__31363_map__31361_map__31361__$1_props__21778__auto__$jscomp$82_vec__31358$$) : $APP.$helix$core$jsxs$$.call(null, "button", $G__31363_map__31361_map__31361__$1_props__21778__auto__$jscomp$82_vec__31358$$);
};
$amp$components$sections$budget_section$header$$ = function($G__31378_props__21778__auto__$jscomp$83$$) {
  $APP.$helix$core$extract_cljs_props$$($G__31378_props__21778__auto__$jscomp$83$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__31378_props__21778__auto__$jscomp$83$$ = function() {
    return {className:"", children:[function() {
      var $G__31383_G__31387$jscomp$inline_3245$$ = {src:"images/graphics/biennale_logo.png"};
      $G__31383_G__31387$jscomp$inline_3245$$ = {className:"w-1/2 lg:w-1/4 lg:max-w-64 mt-4 lg:mt-8 px-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__31383_G__31387$jscomp$inline_3245$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__31383_G__31387$jscomp$inline_3245$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__31383_G__31387$jscomp$inline_3245$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__31383_G__31387$jscomp$inline_3245$$);
    }(), function() {
      var $G__31391_G__31395$jscomp$inline_3248$$ = {translate:"no", className:"notranslate font-helvetica font-bold text-4xl lg:text-6xl text-white mb-6 uppercase", children:"Armenia Pavilion, Biennale Arte 2026, 61st International Art Exhibition"};
      $G__31391_G__31395$jscomp$inline_3248$$ = {className:"px-4 mt-12 lg:mt-16 max-w-4xl", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__31391_G__31395$jscomp$inline_3248$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__31391_G__31395$jscomp$inline_3248$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__31391_G__31395$jscomp$inline_3248$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__31391_G__31395$jscomp$inline_3248$$);
    }(), function() {
      var $G__31399$$ = function() {
        return {className:"w-full px-4 mt-16", children:function() {
          var $G__31403$$ = function() {
            return {className:"text-2xl text-white space-y-4 flex flex-col justify-start items-start", children:[function() {
              var $G__31407$$ = {title:"1. Press Release", anchor:"section-1"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__31407$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__31407$$);
            }(), function() {
              var $G__31411$$ = {title:"2. Overview - THE STUDIO", anchor:"section-2"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__31411$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__31411$$);
            }(), function() {
              var $G__31416$$ = {title:"3. Budget", anchor:"section-3"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__31416$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__31416$$);
            }(), function() {
              var $G__31426$$ = {title:"4. Committee", anchor:"section-4"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__31426$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__31426$$);
            }(), function() {
              var $G__31430$$ = {title:"5. Location Details", anchor:"section-5"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__31430$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__31430$$);
            }(), function() {
              var $G__31434$$ = {title:"6. Donation Info", anchor:"section-6"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__31434$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__31434$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__31403$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__31403$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__31399$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__31399$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__31378_props__21778__auto__$jscomp$83$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__31378_props__21778__auto__$jscomp$83$$);
};
$amp$components$sections$budget_section$budget_section$$ = function($G__31450_props__21778__auto__$jscomp$84$$) {
  $APP.$helix$core$extract_cljs_props$$($G__31450_props__21778__auto__$jscomp$84$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__31450_props__21778__auto__$jscomp$84$$ = function() {
    return {"section-id":"budget-section", children:[function() {
      var $G__31457$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$navs$back_up_nav$back_up_nav$$, $G__31457$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$navs$back_up_nav$back_up_nav$$, $G__31457$$);
    }(), function() {
      var $G__31459$$ = function() {
        return {className:"w-full h-full\n               text-white\n               grey-grad\n               flex items-center justify-center flex-col", children:function() {
          var $G__31463$$ = function() {
            return {className:"flex flex-col w-full lg:w-8/12", children:[function() {
              var $G__31467$$ = {};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$header$$, $G__31467$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$header$$, $G__31467$$);
            }(), function() {
              var $G__31469$$ = {id:"section-1", subtitle:"press", title:"press release"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$press_release$press_release$$, $G__31469$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$press_release$press_release$$, $G__31469$$);
            }(), function() {
              var $G__31473$$ = {id:"section-2", subtitle:"overview", title:"about"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$about$about$$, $G__31473$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$about$about$$, $G__31473$$);
            }(), function() {
              var $G__31477$$ = {id:"section-3", subtitle:"financials", title:"budget"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$cost_breakdown$cost_breakdown$$, $G__31477$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$cost_breakdown$cost_breakdown$$, $G__31477$$);
            }(), function() {
              var $G__31481$$ = {id:"section-4", subtitle:"team", title:"committee"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$committe$committee$$, $G__31481$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$committe$committee$$, $G__31481$$);
            }(), function() {
              var $G__31485$$ = {id:"section-5", subtitle:"venue", title:"location information"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$location_section$location_section$$, $G__31485$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$location_section$location_section$$, $G__31485$$);
            }(), function() {
              var $G__31489$$ = {id:"section-6", subtitle:"non-profit", title:"donation information"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$non_profit$non_profit$$, $G__31489$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$non_profit$non_profit$$, $G__31489$$);
            }(), function() {
              var $G__31494$$ = {};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$sections$contact_section$contact_section$$, $G__31494$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$sections$contact_section$contact_section$$, $G__31494$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__31463$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__31463$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__31459$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__31459$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__31450_props__21778__auto__$jscomp$84$$, "budget-section") : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$components$section$section$$, $G__31450_props__21778__auto__$jscomp$84$$, "budget-section");
};
$APP.$amp$views$budget_view$budget_view$$ = function($G__31549_31577_G__31566_map__31529_map__31529__$1_props__21778__auto__$jscomp$85_vec__31526$$, $G__31550_31578_maybe_ref__21780__auto__$jscomp$85$$) {
  $G__31549_31577_G__31566_map__31529_map__31529__$1_props__21778__auto__$jscomp$85_vec__31526$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__31549_31577_G__31566_map__31529_map__31529__$1_props__21778__auto__$jscomp$85_vec__31526$$), $G__31550_31578_maybe_ref__21780__auto__$jscomp$85$$], null);
  $G__31549_31577_G__31566_map__31529_map__31529__$1_props__21778__auto__$jscomp$85_vec__31526$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__31549_31577_G__31566_map__31529_map__31529__$1_props__21778__auto__$jscomp$85_vec__31526$$, 0, null);
  $G__31549_31577_G__31566_map__31529_map__31529__$1_props__21778__auto__$jscomp$85_vec__31526$$ = $APP.$cljs$core$__destructure_map$$($G__31549_31577_G__31566_map__31529_map__31529__$1_props__21778__auto__$jscomp$85_vec__31526$$);
  var $active$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__31549_31577_G__31566_map__31529_map__31529__$1_props__21778__auto__$jscomp$85_vec__31526$$, $APP.$cljs$cst$611$active$$), $intro_complete_callback$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__31549_31577_G__31566_map__31529_map__31529__$1_props__21778__auto__$jscomp$85_vec__31526$$, $APP.$cljs$cst$612$intro_complete_callback$$), $outro_complete_callback$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__31549_31577_G__31566_map__31529_map__31529__$1_props__21778__auto__$jscomp$85_vec__31526$$, 
  $APP.$cljs$cst$613$outro_complete_callback$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$jscomp$2$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__31549_31577_G__31566_map__31529_map__31529__$1_props__21778__auto__$jscomp$85_vec__31526$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($active$jscomp$1$$) ? $intro_complete_callback$$.$cljs$core$IFn$_invoke$arity$0$ ? $intro_complete_callback$$.$cljs$core$IFn$_invoke$arity$0$() : $intro_complete_callback$$.call(null) : $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to($APP.$cljs$core$_deref$$($comp_ref$jscomp$2$$), {opacity:0, onComplete:$outro_complete_callback$$, duration:1});
  });
  $G__31550_31578_maybe_ref__21780__auto__$jscomp$85$$ = [$active$jscomp$1$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__31549_31577_G__31566_map__31529_map__31529__$1_props__21778__auto__$jscomp$85_vec__31526$$, $G__31550_31578_maybe_ref__21780__auto__$jscomp$85$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__31549_31577_G__31566_map__31529_map__31529__$1_props__21778__auto__$jscomp$85_vec__31526$$, $G__31550_31578_maybe_ref__21780__auto__$jscomp$85$$);
  $G__31549_31577_G__31566_map__31529_map__31529__$1_props__21778__auto__$jscomp$85_vec__31526$$ = function() {
    var $G__31570$jscomp$inline_2456_JSCompiler_inline_result$jscomp$2025$$ = {};
    $G__31570$jscomp$inline_2456_JSCompiler_inline_result$jscomp$2025$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$budget_section$$, $G__31570$jscomp$inline_2456_JSCompiler_inline_result$jscomp$2025$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$budget_section$$, $G__31570$jscomp$inline_2456_JSCompiler_inline_result$jscomp$2025$$);
    return {ref:$comp_ref$jscomp$2$$, children:$G__31570$jscomp$inline_2456_JSCompiler_inline_result$jscomp$2025$$};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__31549_31577_G__31566_map__31529_map__31529__$1_props__21778__auto__$jscomp$85_vec__31526$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__31549_31577_G__31566_map__31529_map__31529__$1_props__21778__auto__$jscomp$85_vec__31526$$);
};
$cljs$core$_PLUS_$$ = function $cljs$core$_PLUS_$$($var_args$jscomp$132$$) {
  switch(arguments.length) {
    case 0:
      return $cljs$core$_PLUS_$$.$cljs$core$IFn$_invoke$arity$0$();
    case 1:
      return $cljs$core$_PLUS_$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$_PLUS_$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      for (var $args_arr__5774__auto__$jscomp$14$$ = [], $len__5749__auto___22807$$ = arguments.length, $i__5750__auto___22808$$ = 0;;) {
        if ($i__5750__auto___22808$$ < $len__5749__auto___22807$$) {
          $args_arr__5774__auto__$jscomp$14$$.push(arguments[$i__5750__auto___22808$$]), $i__5750__auto___22808$$ += 1;
        } else {
          break;
        }
      }
      return $cljs$core$_PLUS_$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], 2 < $args_arr__5774__auto__$jscomp$14$$.length ? new $APP.$cljs$core$IndexedSeq$$($args_arr__5774__auto__$jscomp$14$$.slice(2), 0, null) : null);
  }
};
$cljs$core$_PLUS_$$.$cljs$core$IFn$_invoke$arity$0$ = function() {
  return 0;
};
$cljs$core$_PLUS_$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$199$$) {
  return $x$jscomp$199$$;
};
$cljs$core$_PLUS_$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$200$$, $y$jscomp$92$$) {
  return $x$jscomp$200$$ + $y$jscomp$92$$;
};
$cljs$core$_PLUS_$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($x$jscomp$201$$, $y$jscomp$93$$, $more$jscomp$2$$) {
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$_PLUS_$$, $x$jscomp$201$$ + $y$jscomp$93$$, $more$jscomp$2$$);
};
$cljs$core$_PLUS_$$.$cljs$lang$applyTo$ = function($G__20330_seq20328$$) {
  var $G__20329$$ = $APP.$cljs$core$first$$($G__20330_seq20328$$), $seq20328__$1_seq20328__$2$$ = $APP.$cljs$core$next$$($G__20330_seq20328$$);
  $G__20330_seq20328$$ = $APP.$cljs$core$first$$($seq20328__$1_seq20328__$2$$);
  $seq20328__$1_seq20328__$2$$ = $APP.$cljs$core$next$$($seq20328__$1_seq20328__$2$$);
  return this.$cljs$core$IFn$_invoke$arity$variadic$($G__20329$$, $G__20330_seq20328$$, $seq20328__$1_seq20328__$2$$);
};
$cljs$core$_PLUS_$$.$cljs$lang$maxFixedArity$ = 2;
var $cljs$cst$567$preview_text$$ = new $APP.$cljs$core$Keyword$$(null, "preview-text", "preview-text", 695562530), $cljs$cst$565$section_hint$$ = new $APP.$cljs$core$Keyword$$(null, "section-hint", "section-hint", -565211480), $cljs$cst$587$delay$$ = new $APP.$cljs$core$Keyword$$(null, "delay", "delay", -574225219), $cljs$cst$572$on_exit$$ = new $APP.$cljs$core$Keyword$$(null, "on-exit", "on-exit", 1821961613), $cljs$cst$582$parent_styles$$ = new $APP.$cljs$core$Keyword$$(null, "parent-styles", "parent-styles", 
1435939711), $cljs$cst$573$derefed$$ = new $APP.$cljs$core$Keyword$$(null, "derefed", "derefed", 590684583), $cljs$cst$606$the_studio$$ = new $APP.$cljs$core$Keyword$$(null, "the-studio", "the-studio", 106848628), $cljs$cst$566$expand_button_label$$ = new $APP.$cljs$core$Keyword$$(null, "expand-button-label", "expand-button-label", -2041664671), $cljs$cst$609$documentation$$ = new $APP.$cljs$core$Keyword$$(null, "documentation", "documentation", 1889593999), $cljs$cst$597$expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, 
"expanded-items", "expanded-items", 749320313), $cljs$cst$593$tax$$ = new $APP.$cljs$core$Keyword$$(null, "tax", "tax", -226525810), $cljs$cst$604$logistics$$ = new $APP.$cljs$core$Keyword$$(null, "logistics", "logistics", 712670037), $cljs$cst$601$location$$ = new $APP.$cljs$core$Keyword$$(null, "location", "location", 1815599388), $cljs$cst$591$details$$ = new $APP.$cljs$core$Keyword$$(null, "details", "details", 1956795411), $cljs$cst$589$subtitle$$ = new $APP.$cljs$core$Keyword$$(null, "subtitle", 
"subtitle", -1614524363), $cljs$cst$599$item$$ = new $APP.$cljs$core$Keyword$$(null, "item", "item", 249373802), $cljs$cst$577$translate$$ = new $APP.$cljs$core$Keyword$$(null, "translate", "translate", 1336199447), $cljs$cst$598$description$$ = new $APP.$cljs$core$Keyword$$(null, "description", "description", -1428560544), $cljs$cst$586$enabled_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "enabled?", "enabled?", -1376075057), $cljs$cst$590$amount$$ = new $APP.$cljs$core$Keyword$$(null, "amount", 
"amount", 364489504), $cljs$cst$569$footer_text$$ = new $APP.$cljs$core$Keyword$$(null, "footer-text", "footer-text", 782346468), $cljs$cst$571$root_margin$$ = new $APP.$cljs$core$Keyword$$(null, "root-margin", "root-margin", -1598874814), $cljs$cst$580$br$$ = new $APP.$cljs$core$Keyword$$(null, "br", "br", 934104792), $cljs$cst$579$bl$$ = new $APP.$cljs$core$Keyword$$(null, "bl", "bl", 8157834), $cljs$cst$596$set_expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "set-expanded-items", "set-expanded-items", 
-112840979), $cljs$cst$592$rate$$ = new $APP.$cljs$core$Keyword$$(null, "rate", "rate", -1428659698), $cljs$cst$607$marketing$$ = new $APP.$cljs$core$Keyword$$(null, "marketing", "marketing", 2054879774), $cljs$cst$603$la_prod$$ = new $APP.$cljs$core$Keyword$$(null, "la-prod", "la-prod", 1444492244), $cljs$cst$581$center$$ = new $APP.$cljs$core$Keyword$$(null, "center", "center", -748944368), $cljs$cst$585$slides$$ = new $APP.$cljs$core$Keyword$$(null, "slides", "slides", -1933049910), $cljs$cst$568$full_text$$ = 
new $APP.$cljs$core$Keyword$$(null, "full-text", "full-text", 1432444182), $cljs$cst$594$cost_data$$ = new $APP.$cljs$core$Keyword$$(null, "cost-data", "cost-data", -1991336764), $cljs$cst$575$origin$$ = new $APP.$cljs$core$Keyword$$(null, "origin", "origin", 1037372088), $cljs$cst$564$eyebrow$$ = new $APP.$cljs$core$Keyword$$(null, "eyebrow", "eyebrow", 497521636), $cljs$cst$605$opening$$ = new $APP.$cljs$core$Keyword$$(null, "opening", "opening", 450993708), $cljs$cst$610$anchor$$ = new $APP.$cljs$core$Keyword$$(null, 
"anchor", "anchor", 1549638489), $cljs$cst$570$threshold$$ = new $APP.$cljs$core$Keyword$$(null, "threshold", "threshold", 204221583), $cljs$cst$602$admin$$ = new $APP.$cljs$core$Keyword$$(null, "admin", "admin", -1239101627), $cljs$cst$574$tl$$ = new $APP.$cljs$core$Keyword$$(null, "tl", "tl", -35265210), $cljs$cst$578$tr$$ = new $APP.$cljs$core$Keyword$$(null, "tr", "tr", -1424774646), $cljs$cst$588$loop$$ = new $APP.$cljs$core$Keyword$$(null, "loop", "loop", -395552849), $cljs$cst$608$publication$$ = 
new $APP.$cljs$core$Keyword$$(null, "publication", "publication", -1089697399), $cljs$cst$576$pos$$ = new $APP.$cljs$core$Keyword$$(null, "pos", "pos", -864607220);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("budget-view");
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$section_block$section_block$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$section_block$section_block$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$section_block$section_block$$, "amp.components.elements.budget.section-block/section-block"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$expandable_text_area$expandable_text_area$$, "(hooks/use-state false)", null, null) : (void 0).call(null, $amp$components$elements$expandable_text_area$expandable_text_area$$, 
"(hooks/use-state false)", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$expandable_text_area$expandable_text_area$$, "amp.components.elements.expandable-text-area/expandable-text-area"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$expandable_text_area$expandable_text_area_2$$, "(hooks/use-state false)", null, null) : (void 0).call(null, $amp$components$elements$expandable_text_area$expandable_text_area_2$$, 
"(hooks/use-state false)", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$expandable_text_area$expandable_text_area_2$$, "amp.components.elements.expandable-text-area/expandable-text-area-2"));
var $module$node_modules$embla_carousel_react$cjs$embla_carousel_react_cjs$$ = $APP.$shadow$js$require$$(48);
var $module$node_modules$embla_carousel_autoplay$cjs$embla_carousel_autoplay_cjs$$ = $APP.$shadow$js$require$$(49);
var $amp$components$ui$overlays$position_configs$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$cljs$cst$574$tl$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [0, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$575$origin$$, "origin-top-left", $cljs$cst$576$pos$$, "top-0 left-0", $cljs$cst$577$translate$$, ""], null), 90, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$575$origin$$, "origin-top-left", $cljs$cst$576$pos$$, "top-0 left-0", $cljs$cst$577$translate$$, 
"translateY(-100%)"], null), -90, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$575$origin$$, "origin-top-left", $cljs$cst$576$pos$$, "top-0 left-0", $cljs$cst$577$translate$$, "translateX(-100%)"], null)], null), $cljs$cst$578$tr$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [0, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$575$origin$$, "origin-top-right", $cljs$cst$576$pos$$, "top-0 right-0", $cljs$cst$577$translate$$, ""], null), 90, new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$cljs$cst$575$origin$$, "origin-top-right", $cljs$cst$576$pos$$, "top-0 right-0", $cljs$cst$577$translate$$, "translateX(100%)"], null), -90, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$575$origin$$, "origin-top-right", $cljs$cst$576$pos$$, "top-0 right-0", $cljs$cst$577$translate$$, "translateY(-100%)"], null)], null), $cljs$cst$579$bl$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [0, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$575$origin$$, "origin-bottom-left", 
$cljs$cst$576$pos$$, "bottom-0 left-0", $cljs$cst$577$translate$$, ""], null), 90, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$575$origin$$, "origin-bottom-left", $cljs$cst$576$pos$$, "bottom-0 left-0", $cljs$cst$577$translate$$, "translateX(-100%)"], null), -90, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$575$origin$$, "origin-bottom-left", $cljs$cst$576$pos$$, "bottom-0 left-0", $cljs$cst$577$translate$$, "translateY(100%)"], null)], null), $cljs$cst$580$br$$, 
new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [0, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$575$origin$$, "origin-bottom-right", $cljs$cst$576$pos$$, "bottom-0 right-0", $cljs$cst$577$translate$$, ""], null), 90, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$575$origin$$, "origin-bottom-right", $cljs$cst$576$pos$$, "bottom-0 right-0", $cljs$cst$577$translate$$, "translateY(100%)"], null), -90, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$575$origin$$, 
"origin-bottom-right", $cljs$cst$576$pos$$, "bottom-0 right-0", $cljs$cst$577$translate$$, "translateX(100%)"], null)], null), $cljs$cst$581$center$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [0, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$575$origin$$, "origin-center", $cljs$cst$576$pos$$, "top-1/2 left-1/2", $cljs$cst$577$translate$$, "translate(-50%, -50%)"], null), 90, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$575$origin$$, "origin-center", $cljs$cst$576$pos$$, 
"top-1/2 left-1/2", $cljs$cst$577$translate$$, "translate(-50%, -50%)"], null), -90, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$575$origin$$, "origin-center", $cljs$cst$576$pos$$, "top-1/2 left-1/2", $cljs$cst$577$translate$$, "translate(-50%, -50%)"], null)], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$ui$overlays$caption_overlay$$, "", null, null) : (void 0).call(null, $amp$components$ui$overlays$caption_overlay$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$ui$overlays$caption_overlay$$, 
"amp.components.ui.overlays/caption-overlay"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$media$lazy_image_gallery$lazy_image_gallery$$, '(use-embla-carousel (clj-\x3ejs {:loop true}) (clj-\x3ejs [(auto-play auto-play-opts)]))(hooks/use-memo [embla-api] (when embla-api (-\x3e embla-api (.plugins) (.-autoplay))))(hooks/use-state 1)(hooks/use-callback [embla-api] (when embla-api (.-scrollNext embla-api)))(hooks/use-callback [embla-api] (when embla-api (.-scrollPrev embla-api)))(hooks/use-callback [embla-api] (fn [_e] (set-current-index! (progress-\x3eindex total-slides ((.-scrollProgress embla-api))))))(hooks/use-layout-effect [autoplay enabled?] (when autoplay (if enabled? (.play autoplay) (.stop autoplay))))(hooks/use-effect [embla-api on-scroll-handler] (when embla-api (js/console.log embla-api) (embla-api.on "scroll" on-scroll-handler)))', 
null, null) : (void 0).call(null, $amp$components$media$lazy_image_gallery$lazy_image_gallery$$, '(use-embla-carousel (clj-\x3ejs {:loop true}) (clj-\x3ejs [(auto-play auto-play-opts)]))(hooks/use-memo [embla-api] (when embla-api (-\x3e embla-api (.plugins) (.-autoplay))))(hooks/use-state 1)(hooks/use-callback [embla-api] (when embla-api (.-scrollNext embla-api)))(hooks/use-callback [embla-api] (when embla-api (.-scrollPrev embla-api)))(hooks/use-callback [embla-api] (fn [_e] (set-current-index! (progress-\x3eindex total-slides ((.-scrollProgress embla-api))))))(hooks/use-layout-effect [autoplay enabled?] (when autoplay (if enabled? (.play autoplay) (.stop autoplay))))(hooks/use-effect [embla-api on-scroll-handler] (when embla-api (js/console.log embla-api) (embla-api.on "scroll" on-scroll-handler)))', 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$media$lazy_image_gallery$lazy_image_gallery$$, "amp.components.media.lazy-image-gallery/lazy-image-gallery"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$about$preview$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$about$preview$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$elements$budget$about$preview$$, "amp.components.elements.budget.about/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$about$details$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$about$details$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$elements$budget$about$details$$, "amp.components.elements.budget.about/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$about$about$$, '(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx {:end "bottom"})', null, null) : (void 0).call(null, 
$amp$components$elements$budget$about$about$$, '(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$about$about$$, "amp.components.elements.budget.about/about"));
var $amp$components$elements$budget$committe$committee_members$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$282$name$$, "Archbishop Derderian", $APP.$cljs$cst$558$role$$, "Committee Lead", $APP.$cljs$cst$523$img_src$$, "https://atd-722658831.imgix.net/committee/hovnan.png", $APP.$cljs$cst$526$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$282$name$$, "Tony Shafrazi", $APP.$cljs$cst$558$role$$, "Chief Curator", $APP.$cljs$cst$523$img_src$$, "https://atd-722658831.imgix.net/committee/tony.png", $APP.$cljs$cst$526$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$282$name$$, "Tina Chakarian", $APP.$cljs$cst$558$role$$, "Curator", $APP.$cljs$cst$523$img_src$$, "https://atd-722658831.imgix.net/committee/tina.png", $APP.$cljs$cst$526$credit$$, "Courtesy of the Committee"], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$282$name$$, "Zadik Zadikian", $APP.$cljs$cst$558$role$$, "Artist", $APP.$cljs$cst$523$img_src$$, "https://atd-722658831.imgix.net/committee/zadik.png", $APP.$cljs$cst$526$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$282$name$$, "Rafi Ourfalian", $APP.$cljs$cst$558$role$$, "Legal Advisor", $APP.$cljs$cst$523$img_src$$, "https://atd-722658831.imgix.net/committee/rafi.png", 
$APP.$cljs$cst$526$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$282$name$$, "Khachik Khudikyan", $APP.$cljs$cst$558$role$$, "Logistics Advisor", $APP.$cljs$cst$523$img_src$$, "https://atd-722658831.imgix.net/committee/chris_car_2.jpg", $APP.$cljs$cst$526$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$282$name$$, "Andranik Torosyan", $APP.$cljs$cst$558$role$$, "Financial Advisor", 
$APP.$cljs$cst$523$img_src$$, "https://atd-722658831.imgix.net/committee/andy.png", $APP.$cljs$cst$526$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$282$name$$, "Aram Alajajian", $APP.$cljs$cst$558$role$$, "Architect", $APP.$cljs$cst$523$img_src$$, "https://atd-722658831.imgix.net/committee/aram.png", $APP.$cljs$cst$526$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$282$name$$, 
"Vik Hovsepian", $APP.$cljs$cst$558$role$$, "Committee Member", $APP.$cljs$cst$526$credit$$, "Courtesy of the Committee", $APP.$cljs$cst$523$img_src$$, "https://atd-722658831.imgix.net/committee/vic.png"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$committe$preview$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$committe$preview$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$committe$preview$$, "amp.components.elements.budget.committe/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$committe$details$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$committe$details$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$committe$details$$, "amp.components.elements.budget.committe/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$committe$committee_member_card$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$committe$committee_member_card$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$committe$committee_member_card$$, "amp.components.elements.budget.committe/committee-member-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$committe$committee_gallery$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$committe$committee_gallery$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$committe$committee_gallery$$, "amp.components.elements.budget.committe/committee-gallery"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$committe$committee$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$committe$committee$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$committe$committee$$, "amp.components.elements.budget.committe/committee"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$budget_table$total_section$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$budget_table$total_section$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$budget_table$total_section$$, "amp.components.elements.budget.budget-table/total-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$budget_table$detail_line_item$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$budget_table$detail_line_item$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$budget_table$detail_line_item$$, "amp.components.elements.budget.budget-table/detail-line-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$budget_table$section_line_item$$, '(hooks/use-ref (str "section-" idx))(use-scroll-to-ref)', null, null) : (void 0).call(null, 
$amp$components$elements$budget$budget_table$section_line_item$$, '(hooks/use-ref (str "section-" idx))(use-scroll-to-ref)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$budget_table$section_line_item$$, "amp.components.elements.budget.budget-table/section-line-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$budget_table$budget_table$$, "(hooks/use-state #{})", null, null) : (void 0).call(null, $amp$components$elements$budget$budget_table$budget_table$$, 
"(hooks/use-state #{})", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$budget_table$budget_table$$, "amp.components.elements.budget.budget-table/budget-table"));
var $amp$components$elements$budget$cost_breakdown$cost_data$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$290$id$$, $cljs$cst$601$location$$, $APP.$cljs$cst$463$title$$, "1. Location Cost", $cljs$cst$598$description$$, "Secures and operates the Venice exhibition venue: exclusive rental, public-facing staffing, required approvals, insurance coverage, minor architectural adjustments, lighting, and statutory taxes—ensuring the Pavilion is compliant, safe, and fully exhibition-ready during peak Biennale demand.", 
$cljs$cst$591$details$$, new $APP.$cljs$core$PersistentVector$$(null, 11, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Base rent", $cljs$cst$590$amount$$, 195000, $cljs$cst$598$description$$, "Base rental fee for Tesa 41, Giardino 25, and the Outpost for the full Biennale period. This reflects Biennale-season demand, limited availability of compliant venues, and excludes all staffing, permits, utilities, and operational services."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Security staff", $cljs$cst$590$amount$$, 30000, $cljs$cst$598$description$$, "Licensed security personnel required during public hours and special events, with increased staffing during opening week and peak visitor periods mandated by venue and municipal regulations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Mediator staff", $cljs$cst$590$amount$$, 30000, $cljs$cst$598$description$$, 
"Trained gallery mediators providing visitor guidance, crowd flow management, and artwork oversight throughout the exhibition’s daily operations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Cleaning", $cljs$cst$590$amount$$, 8500, $cljs$cst$598$description$$, "Weekly professional cleaning and periodic deep cleans required for a high-traffic international exhibition, with elevated frequency during opening week."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$463$title$$, "Utilities", $cljs$cst$590$amount$$, 6000, $cljs$cst$598$description$$, "Electricity, water, and climate control costs for continuous public operation during the Biennale season."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Permits", $cljs$cst$590$amount$$, 12000, $cljs$cst$598$description$$, "Municipal and Biennale permits required for exhibition use, public access, and operational compliance in Venice."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$463$title$$, "Fire cert", $cljs$cst$590$amount$$, 4250, $cljs$cst$598$description$$, "Mandatory fire-safety certification, inspections, and documentation required by Venetian authorities."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Liability ins.", $cljs$cst$590$amount$$, 3000, $cljs$cst$598$description$$, "Public liability insurance covering visitors, staff, and third parties for the duration of the exhibition."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$463$title$$, "Build-outs", $cljs$cst$590$amount$$, 15E3, $cljs$cst$598$description$$, "Minor architectural adjustments and protective build-outs necessary to adapt the venue to exhibition and safety standards."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Lighting", $cljs$cst$590$amount$$, 9500, $cljs$cst$598$description$$, "Supplemental exhibition lighting equipment and installation tailored to the work and existing architectural conditions."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Signage tax", $cljs$cst$590$amount$$, 2E3, $cljs$cst$598$description$$, "Municipal tax associated with exterior and wayfinding signage during the Biennale."], null)], null), $cljs$cst$593$tax$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$592$rate$$, .22, $APP.$cljs$cst$600$label$$, "VAT 22%"], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$290$id$$, $cljs$cst$602$admin$$, 
$APP.$cljs$cst$463$title$$, "2. Admin", $cljs$cst$598$description$$, "Leadership and project management supporting curatorial direction, artist oversight, coordination, compliance, and travel—ensuring continuity across pre-production, opening, and the full Biennale cycle.", $cljs$cst$591$details$$, new $APP.$cljs$core$PersistentVector$$(null, 12, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Admin LA", $cljs$cst$590$amount$$, 
12500, $cljs$cst$598$description$$, "Los Angeles–based administrative support for production, contracting, scheduling, and financial coordination."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Admin Venice", $cljs$cst$590$amount$$, 25E3, $cljs$cst$598$description$$, "On-the-ground administrative coordination in Venice during installation, opening, and peak Biennale periods."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, 
"Curatorial/Artist", $cljs$cst$590$amount$$, 15E3, $cljs$cst$598$description$$, "Curatorial and artist"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Engineer", $cljs$cst$590$amount$$, 6500, $cljs$cst$598$description$$, "Structural and technical consultation related to installation safety and load considerations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Legal", $cljs$cst$590$amount$$, 7500, $cljs$cst$598$description$$, 
"Contract review, compliance, and legal oversight related to international exhibition operations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Accounting", $cljs$cst$590$amount$$, 7500, $cljs$cst$598$description$$, "Professional accounting services ensuring transparent financial reporting and compliance."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Bookkeeping", $cljs$cst$590$amount$$, 2950, $cljs$cst$598$description$$, 
"Ongoing transaction tracking and financial record maintenance."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "HR/Payroll", $cljs$cst$590$amount$$, 3E3, $cljs$cst$598$description$$, "Payroll processing and HR compliance for international and local staff."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Software/tools", $cljs$cst$590$amount$$, 1500, $cljs$cst$598$description$$, "Specialized software subscriptions and tools required for project management and coordination."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Flights/local", $cljs$cst$590$amount$$, 17500, $cljs$cst$598$description$$, "International and regional travel for core team during installation, opening week, and critical milestones."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Lodging/per diem", $cljs$cst$590$amount$$, 32E3, $cljs$cst$598$description$$, "Accommodation and daily expenses during high-demand Biennale periods when rates are elevated."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Dev \x26 scouting", $cljs$cst$590$amount$$, 15E3, $cljs$cst$598$description$$, "Early-stage site visits, venue scouting, and development travel necessary prior to final commitments."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$290$id$$, $cljs$cst$603$la_prod$$, $APP.$cljs$cst$463$title$$, "3. LA Production", $cljs$cst$598$description$$, "Initial Los Angeles production: materials, casting infrastructure, gilding, studio overhead, and skilled labor—ensuring museum-grade fabrication prior to shipment.", 
$cljs$cst$591$details$$, new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Foam core", $cljs$cst$590$amount$$, 15E3, $cljs$cst$598$description$$, "Lightweight internal cores used to achieve structural integrity while minimizing shipping weight."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Pigments", $cljs$cst$590$amount$$, 17500, 
$cljs$cst$598$description$$, "High-quality pigments integrated into plaster at casting, ensuring color saturation and longevity."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Plaster", $cljs$cst$590$amount$$, 12500, $cljs$cst$598$description$$, "Primary casting material for all sculptural units."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Acrylic", $cljs$cst$590$amount$$, 2500, $cljs$cst$598$description$$, "Binders and surface materials used in finishing and protection."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Gold leaf", $cljs$cst$590$amount$$, 28E3, $cljs$cst$598$description$$, "Genuine 24-karat gold leaf for select units, sourced for consistency and archival quality. 20 packs of 500 leaf gold."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Gold sizing", $cljs$cst$590$amount$$, 3E3, $cljs$cst$598$description$$, "Adhesives and preparation materials required for professional gilding."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Equipment", $cljs$cst$590$amount$$, 18500, $cljs$cst$598$description$$, "3D printer, casting tables, studio tools, and studio equipment required for production."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Mold \x26 Fab", $cljs$cst$590$amount$$, 6500, $cljs$cst$598$description$$, "Custom molds and fabrication aids for repeatable precision. CNC mother units."], null), 
new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Expendables", $cljs$cst$590$amount$$, 2950, $cljs$cst$598$description$$, "Consumable supplies used during casting and finishing."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Glass", $cljs$cst$590$amount$$, 2500, $cljs$cst$598$description$$, "Flat glass surfaces used to achieve smooth casting planes."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, 
"Studio rent (LA)", $cljs$cst$590$amount$$, 17500, $cljs$cst$598$description$$, "LA studio rent for fabrication LA portion of fabrication prior to shipment. 4 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Utilities/ins.", $cljs$cst$590$amount$$, 7500, $cljs$cst$598$description$$, "Utilities and insurance coverage for the LA production facility."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Gilder", $cljs$cst$590$amount$$, 
7500, $cljs$cst$598$description$$, "1 part-time gilding professional for gilding several units."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Casters", $cljs$cst$590$amount$$, 4E4, $cljs$cst$598$description$$, "2 full-time casting professionals for casting and finishing of initial units."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Assistants", $cljs$cst$590$amount$$, 21500, $cljs$cst$598$description$$, "2 studio assistants supporting daily production and quality control."], 
null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$290$id$$, $cljs$cst$604$logistics$$, $APP.$cljs$cst$463$title$$, "4. Logistics", $cljs$cst$598$description$$, "International and local transport under Biennale conditions: crating, freight, port handling, lagoon transport, installation labor, storage, and reverse logistics.", $cljs$cst$591$details$$, new $APP.$cljs$core$PersistentVector$$(null, 20, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$463$title$$, "Crates", $cljs$cst$590$amount$$, 15E3, $cljs$cst$598$description$$, "15 - 20 pre-fab collapsible crates designed for international fine-art transport."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Supplies", $cljs$cst$590$amount$$, 11800, $cljs$cst$598$description$$, "Packing materials, peanuts, void fill, required to protect works during shipment."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, 
"Packers", $cljs$cst$590$amount$$, 7500, $cljs$cst$598$description$$, "5 professional art handlers for packing at origin. 5 days of packing."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Ship LA–Venice", $cljs$cst$590$amount$$, 35E3, $cljs$cst$598$description$$, "International freight from Los Angeles to Venice during peak shipping season."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Ship Venice–LA", $cljs$cst$590$amount$$, 
35E3, $cljs$cst$598$description$$, "Return shipment following deinstallation."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Insurance", $cljs$cst$590$amount$$, 12500, $cljs$cst$598$description$$, "Fine-art transit insurance covering international and local movement."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Installers", $cljs$cst$590$amount$$, 8500, $cljs$cst$598$description$$, "Skilled installation labor in Venice."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Uninstallers", $cljs$cst$590$amount$$, 12500, $cljs$cst$598$description$$, "Deinstallation labor at exhibition close."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Port handling", $cljs$cst$590$amount$$, 3E3, $cljs$cst$598$description$$, "Port fees and handling charges upon arrival."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, 
"Barge (inbound)", $cljs$cst$590$amount$$, 3500, $cljs$cst$598$description$$, "Lagoon barge transport from port to Venice."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Truck (inbound)", $cljs$cst$590$amount$$, 1500, $cljs$cst$598$description$$, "Short-distance trucking where canal access is limited."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Barge (to site)", $cljs$cst$590$amount$$, 3500, $cljs$cst$598$description$$, 
"Final barge transport to exhibition site."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Forklift", $cljs$cst$590$amount$$, 1500, $cljs$cst$598$description$$, "Mechanical handling for heavy crates."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Handling crew", $cljs$cst$590$amount$$, 1E3, $cljs$cst$598$description$$, "Additional labor for on-site maneuvering."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$463$title$$, "Short storage", $cljs$cst$590$amount$$, 1500, $cljs$cst$598$description$$, "Temporary holding during installation scheduling."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Crate storage", $cljs$cst$590$amount$$, 2500, $cljs$cst$598$description$$, "Secure storage of empty crates during exhibition."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Waste removal", $cljs$cst$590$amount$$, 
1E3, $cljs$cst$598$description$$, "Removal of packing debris under Venetian regulations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Barge (return)", $cljs$cst$590$amount$$, 3500, $cljs$cst$598$description$$, "Lagoon transport for return shipment."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Truck (return)", $cljs$cst$590$amount$$, 1500, $cljs$cst$598$description$$, "Return trucking as required."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$463$title$$, "Port (return)", $cljs$cst$590$amount$$, 3E3, $cljs$cst$598$description$$, "Port handling fees for outbound shipment."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$290$id$$, $cljs$cst$605$opening$$, $APP.$cljs$cst$463$title$$, "5. Opening Week", $cljs$cst$598$description$$, "Opening reception and first public visibility of the Pavilion: hospitality, staffing, security, rentals, technical support, press and VIP coordination—executed during the Biennale’s most compressed and expensive period.", 
$cljs$cst$591$details$$, new $APP.$cljs$core$PersistentVector$$(null, 17, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Catering food", $cljs$cst$590$amount$$, 8500, $cljs$cst$598$description$$, "Food service for opening events, 150-200 headcount, scaled for international attendance and peak Biennale demand."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Catering drinks", 
$cljs$cst$590$amount$$, 2500, $cljs$cst$598$description$$, "Beverage service for receptions and VIP previews. 150-200 headcount."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Catering staff", $cljs$cst$590$amount$$, 3E3, $cljs$cst$598$description$$, "Professional service staff required for licensed event catering. Cost for catering staff is increased during Biennale opening week."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, 
"Event coord.", $cljs$cst$590$amount$$, 3500, $cljs$cst$598$description$$, "On-site event coordination managing vendors, schedules, and protocol."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Security", $cljs$cst$590$amount$$, 1500, $cljs$cst$598$description$$, "Supplemental security during high-density opening events."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Rentals", $cljs$cst$590$amount$$, 3E3, $cljs$cst$598$description$$, 
"Furniture, tables, and other event equipment rentals."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "A/V \x26 tech", $cljs$cst$590$amount$$, 2E3, $cljs$cst$598$description$$, "Temporary audio-visual support for speeches and presentations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Invitations", $cljs$cst$590$amount$$, 1500, $cljs$cst$598$description$$, "Design and printing of formal invitations for VIP and press."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "VIP/press staff", $cljs$cst$590$amount$$, 3E3, $cljs$cst$598$description$$, "Dedicated personnel supporting accredited guests and journalists during the first several weeks."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "VIP hospitality", $cljs$cst$590$amount$$, 3500, $cljs$cst$598$description$$, "Hospitality expenses aligned with diplomatic and institutional expectations."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "VIP liaison", $cljs$cst$590$amount$$, 2500, $cljs$cst$598$description$$, "Protocol-aware liaison coordinating VIP schedules and access."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Press packets", $cljs$cst$590$amount$$, 1E3, $cljs$cst$598$description$$, "Printed materials distributed to press during previews."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$463$title$$, "Press A/V", $cljs$cst$590$amount$$, 1E3, $cljs$cst$598$description$$, "Playback and display equipment for press briefings."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Interpreter", $cljs$cst$590$amount$$, 1500, $cljs$cst$598$description$$, "Professional interpretation for multilingual audiences."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Water taxis", $cljs$cst$590$amount$$, 
3500, $cljs$cst$598$description$$, "Water taxi transport during peak congestion when rates are elevated."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Public talks", $cljs$cst$590$amount$$, 3E3, $cljs$cst$598$description$$, "Honoraria and costs associated with scheduled public discussions."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Talk staff", $cljs$cst$590$amount$$, 1500, $cljs$cst$598$description$$, "Support staff for audience management during talks."], 
null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$290$id$$, $cljs$cst$606$the_studio$$, $APP.$cljs$cst$463$title$$, "6. THE STUDIO", $cljs$cst$598$description$$, "Seven-month operation of THE STUDIO on-site: staffing, materials, equipment, lodging, and daily maintenance—supporting continuous making throughout the Biennale.", $cljs$cst$591$details$$, new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$463$title$$, "Full-time asst.", $cljs$cst$590$amount$$, 85E3, $cljs$cst$598$description$$, "3 full-time core studio staff maintaining daily fabrication and reconfiguration. 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Part-time asst.", $cljs$cst$590$amount$$, 45E3, $cljs$cst$598$description$$, "3 part-time supplemental labor scaled to visitor volume and programming peaks. 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$463$title$$, "Temp staff", $cljs$cst$590$amount$$, 18500, $cljs$cst$598$description$$, "Short-term staffing during opening week and special events."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Gilders", $cljs$cst$590$amount$$, 15E3, $cljs$cst$598$description$$, "Specialist gilder engaged on an as-needed basis on site."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Local materials", $cljs$cst$590$amount$$, 
9500, $cljs$cst$598$description$$, "Venice-sourced materials to avoid repeated international shipping."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Expendables", $cljs$cst$590$amount$$, 2500, $cljs$cst$598$description$$, "Consumables required for ongoing studio activity."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Local equip.", $cljs$cst$590$amount$$, 9500, $cljs$cst$598$description$$, "Rental or purchase of equipment impractical to ship internationally."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Lodging/per diem", $cljs$cst$590$amount$$, 55E3, $cljs$cst$598$description$$, "Accommodation and expenses over seven months. Zadik, Aram. Roughly 3750 per person per month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Rubbish", $cljs$cst$590$amount$$, 3500, $cljs$cst$598$description$$, "Regular waste removal under municipal regulations."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$290$id$$, $cljs$cst$607$marketing$$, $APP.$cljs$cst$463$title$$, "7. Marketing", $cljs$cst$598$description$$, "Visibility and communications: branding, website, PR, advertising, and outdoor placements—positioning the Pavilion within the global Biennale discourse.", $cljs$cst$591$details$$, new $APP.$cljs$core$PersistentVector$$(null, 16, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Visual Identity", 
$cljs$cst$590$amount$$, 15E3, $cljs$cst$598$description$$, "Design of a cohesive visual system across all platforms."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Press kit", $cljs$cst$590$amount$$, 8500, $cljs$cst$598$description$$, "Production of comprehensive press materials for international media."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Website", $cljs$cst$590$amount$$, 7500, $cljs$cst$598$description$$, 
"Design, development, and hosting of the Pavilion website. The website will be a key aspect of the project."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "OOH design", $cljs$cst$590$amount$$, 4500, $cljs$cst$598$description$$, "Design for outdoor advertising formats."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Copywriting", $cljs$cst$590$amount$$, 1500, $cljs$cst$598$description$$, "Editorial copy supporting marketing and donor outreach."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "PR writing", $cljs$cst$590$amount$$, 4500, $cljs$cst$598$description$$, "Press releases and feature pitching."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Totem OOH", $cljs$cst$590$amount$$, 1E4, $cljs$cst$598$description$$, "High-visibility outdoor placements during Biennale peak."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, 
"Poster print", $cljs$cst$590$amount$$, 7500, $cljs$cst$598$description$$, "Printing of large-format posters."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "City posters", $cljs$cst$590$amount$$, 3500, $cljs$cst$598$description$$, "Smaller-scale poster distribution across Venice."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Social ad spend", $cljs$cst$590$amount$$, 6500, $cljs$cst$598$description$$, "Targeted social media promotion."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Campaign mgmt", $cljs$cst$590$amount$$, 15E3, $cljs$cst$598$description$$, "Ongoing campaign coordination and optimization."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Digital ads", $cljs$cst$590$amount$$, 8500, $cljs$cst$598$description$$, "Online advertising placements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Print ads", 
$cljs$cst$590$amount$$, 12500, $cljs$cst$598$description$$, "Print placements in international art publications."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "PR pre-open", $cljs$cst$590$amount$$, 12500, $cljs$cst$598$description$$, "Intensive PR outreach leading into opening week."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "PR ongoing", $cljs$cst$590$amount$$, 12500, $cljs$cst$598$description$$, "Sustained PR activity throughout the Biennale run."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Social clips", $cljs$cst$590$amount$$, 7500, $cljs$cst$598$description$$, "Short-form video deliverables for social platforms."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$290$id$$, $cljs$cst$608$publication$$, $APP.$cljs$cst$463$title$$, "8. Publication", $cljs$cst$598$description$$, "Catalogue and printed materials: commissioned texts, design, editing, and printing—ensuring long-term scholarly presence.", 
$cljs$cst$591$details$$, new $APP.$cljs$core$PersistentVector$$(null, 10, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Curatorial essay", $cljs$cst$590$amount$$, 2500, $cljs$cst$598$description$$, "Primary curatorial text anchoring the publication."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Commissioned essays", $cljs$cst$590$amount$$, 7500, $cljs$cst$598$description$$, 
"Texts by invited writers and scholars."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Wall texts", $cljs$cst$590$amount$$, 1500, $cljs$cst$598$description$$, "Exhibition texts adapted for print."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Catalog design", $cljs$cst$590$amount$$, 14500, $cljs$cst$598$description$$, "Graphic design and layout of the catalogue."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$463$title$$, "Edit \x26 layout", $cljs$cst$590$amount$$, 5E3, $cljs$cst$598$description$$, "Professional editing and final layout preparation."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Catalog print", $cljs$cst$590$amount$$, 25E3, $cljs$cst$598$description$$, "Printing of a limited-run, museum-quality catalogue. 250 Copies."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Tote design", $cljs$cst$590$amount$$, 
3500, $cljs$cst$598$description$$, "Design of branded tote bags."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Tote print", $cljs$cst$590$amount$$, 2500, $cljs$cst$598$description$$, "Production of tote bags."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Stationery design", $cljs$cst$590$amount$$, 3500, $cljs$cst$598$description$$, "Design of printed stationery materials for handouts and press."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$463$title$$, "Stationery print", $cljs$cst$590$amount$$, 2500, $cljs$cst$598$description$$, "Printing of stationery materials for handouts and press."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$290$id$$, $cljs$cst$609$documentation$$, $APP.$cljs$cst$463$title$$, "9. Documentation", $cljs$cst$598$description$$, "Permanent visual record: film, sound, photography, editing, and social deliverables—supporting press, scholarship, and legacy.", 
$cljs$cst$591$details$$, new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Film equip rentals", $cljs$cst$590$amount$$, 12500, $cljs$cst$598$description$$, "Rental of cinema-grade cameras, lenses, and lighting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Film crew", $cljs$cst$590$amount$$, 18500, $cljs$cst$598$description$$, 
"Professional crew covering installation, opening, and walkthroughs."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Sound crew", $cljs$cst$590$amount$$, 4500, $cljs$cst$598$description$$, "Location sound recording for film documentation."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Install photos", $cljs$cst$590$amount$$, 2500, $cljs$cst$598$description$$, "High-resolution photography during installation."], null), 
new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Final photos", $cljs$cst$590$amount$$, 3500, $cljs$cst$598$description$$, "Completed exhibition photography."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Event photos", $cljs$cst$590$amount$$, 1500, $cljs$cst$598$description$$, "Coverage of opening and public events."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Edit (assembly)", 
$cljs$cst$590$amount$$, 13500, $cljs$cst$598$description$$, "Initial film assembly and rough cut."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Edit (final)", $cljs$cst$590$amount$$, 5E3, $cljs$cst$598$description$$, "Final edit and color correction."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$463$title$$, "Sound mix", $cljs$cst$590$amount$$, 3500, $cljs$cst$598$description$$, "Final audio mixing and mastering."], null)], 
null)], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cost_breakdown$preview$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$cost_breakdown$preview$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cost_breakdown$preview$$, "amp.components.elements.budget.cost-breakdown/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cost_breakdown$details$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$cost_breakdown$details$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cost_breakdown$details$$, "amp.components.elements.budget.cost-breakdown/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cost_breakdown$footer$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$cost_breakdown$footer$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cost_breakdown$footer$$, "amp.components.elements.budget.cost-breakdown/footer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cost_breakdown$cost_breakdown$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$cost_breakdown$cost_breakdown$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cost_breakdown$cost_breakdown$$, "amp.components.elements.budget.cost-breakdown/cost-breakdown"));
var $amp$components$elements$budget$location_section$lazy_video$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$components$elements$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$location_section$preview$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$location_section$preview$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$location_section$preview$$, "amp.components.elements.budget.location-section/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$location_section$full_details$$, '(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)(use-touch-enabled)(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)(use-touch-enabled)(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)', 
null, null) : (void 0).call(null, $amp$components$elements$budget$location_section$full_details$$, '(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)(use-touch-enabled)(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)(use-touch-enabled)(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$location_section$full_details$$, "amp.components.elements.budget.location-section/full-details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$location_section$location_section$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$location_section$location_section$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$location_section$location_section$$, "amp.components.elements.budget.location-section/location-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$non_profit$non_profit$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$non_profit$non_profit$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$non_profit$non_profit$$, "amp.components.elements.budget.non-profit/non-profit"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$navs$back_up_nav$back_up_nav$$, '(hooks/use-ref "container-ref")(hooks/use-ref "button-ref")(use-scroll-to-top {:duration 1})(use-scroll-trigger container-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations button-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target container-ref, :on-to {:y 0, :opacity 1}, :off-to {:y -150, :opacity 0.25}, :is-on? is-active?})', 
null, null) : (void 0).call(null, $amp$components$navs$back_up_nav$back_up_nav$$, '(hooks/use-ref "container-ref")(hooks/use-ref "button-ref")(use-scroll-to-top {:duration 1})(use-scroll-trigger container-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations button-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target container-ref, :on-to {:y 0, :opacity 1}, :off-to {:y -150, :opacity 0.25}, :is-on? is-active?})', 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$navs$back_up_nav$back_up_nav$$, "amp.components.navs.back-up-nav/back-up-nav"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$press_release$preview$$, "", null, null) : (void 0).call(null, $amp$components$sections$press_release$preview$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$press_release$preview$$, "amp.components.sections.press-release/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$press_release$details$$, "", null, null) : (void 0).call(null, $amp$components$sections$press_release$details$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$press_release$details$$, "amp.components.sections.press-release/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$press_release$footer$$, "", null, null) : (void 0).call(null, $amp$components$sections$press_release$footer$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$press_release$footer$$, "amp.components.sections.press-release/footer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$press_release$press_release$$, "", null, null) : (void 0).call(null, $amp$components$sections$press_release$press_release$$, "", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$press_release$press_release$$, "amp.components.sections.press-release/press-release"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$budget_section$section_link$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $amp$components$sections$budget_section$section_link$$, 
"(use-scroll-to-id)", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$budget_section$section_link$$, "amp.components.sections.budget-section/section-link"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$budget_section$header$$, "", null, null) : (void 0).call(null, $amp$components$sections$budget_section$header$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$budget_section$header$$, "amp.components.sections.budget-section/header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$budget_section$budget_section$$, "", null, null) : (void 0).call(null, $amp$components$sections$budget_section$budget_section$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$budget_section$budget_section$$, "amp.components.sections.budget-section/budget-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$views$budget_view$budget_view$$, '(hooks/use-ref "comp-ref")(hooks/use-layout-effect [active] (if active (intro-complete-callback) (.to gsap (clojure.core/deref comp-ref) {:opacity 0, :onComplete outro-complete-callback, :duration 1})))', 
null, null) : (void 0).call(null, $APP.$amp$views$budget_view$budget_view$$, '(hooks/use-ref "comp-ref")(hooks/use-layout-effect [active] (if active (intro-complete-callback) (.to gsap (clojure.core/deref comp-ref) {:opacity 0, :onComplete outro-complete-callback, :duration 1})))', null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$views$budget_view$budget_view$$, "amp.views.budget-view/budget-view"));
$APP.$module$contents$shadow$loader_mm$$.$setLoaded$();

}).call(this);