(function(){
'use strict';
var $amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$, $amp$nav$logo$logo_nav$$, $amp$pages$landing$artist$artist_section$$, $amp$pages$landing$curators$curator_card$$, $amp$pages$landing$curators$curators_section$$, $amp$pages$landing$in_minor_keys$pull_quote$$, $amp$pages$landing$in_minor_keys$curator_card$$, $amp$pages$landing$in_minor_keys$preview$$, $amp$pages$landing$in_minor_keys$details$$, $amp$pages$landing$in_minor_keys$in_minor_keys$$, $amp$pages$landing$venue$preview$$, 
$amp$pages$landing$venue$details$$, $amp$pages$landing$venue$location_section$$, $amp$pages$landing$hero$mobile_hero_section$$, $amp$pages$landing$teaser$teaser_section$$, $cljs$cst$916$visible_QMARK_$$, $cljs$cst$914$img$$, $cljs$cst$912$boxDecorationBreak$$, $cljs$cst$910$markers_QMARK_$$, $cljs$cst$913$WebkitBoxDecorationBreak$$, $cljs$cst$917$attribution$$, $cljs$cst$915$bio$$, $cljs$cst$909$scroll_ref$$, $cljs$cst$911$debug_QMARK_$$;
$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$ = function($ref$jscomp$25$$, $G__50325_50346_p__50310_scroll_ref$$) {
  var $is_active_QMARK_$jscomp$8_map__50312__$1$$ = $APP.$cljs$core$__destructure_map$$($G__50325_50346_p__50310_scroll_ref$$), $on_toggle$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($is_active_QMARK_$jscomp$8_map__50312__$1$$, $APP.$cljs$cst$779$on_toggle$$), $on_enter$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($is_active_QMARK_$jscomp$8_map__50312__$1$$, $APP.$cljs$cst$752$on_enter$$), $start$jscomp$178$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$8_map__50312__$1$$, 
  $APP.$cljs$cst$269$start$$, "top center"), $end$jscomp$48$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$8_map__50312__$1$$, $APP.$cljs$cst$769$end$$, "bottom");
  $G__50325_50346_p__50310_scroll_ref$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($is_active_QMARK_$jscomp$8_map__50312__$1$$, $cljs$cst$909$scroll_ref$$);
  var $markers_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$8_map__50312__$1$$, $cljs$cst$910$markers_QMARK_$$, !1);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$8_map__50312__$1$$, $cljs$cst$911$debug_QMARK_$$, !1);
  var $vec__50313_visited_QMARK_$jscomp$2$$ = $APP.$helix$hooks$use_state$$(!1);
  $is_active_QMARK_$jscomp$8_map__50312__$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__50313_visited_QMARK_$jscomp$2$$, 0, null);
  var $set_is_active_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__50313_visited_QMARK_$jscomp$2$$, 1, null), $G__50324_50345_vec__50316$$ = $APP.$helix$hooks$use_state$$(!1);
  $vec__50313_visited_QMARK_$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__50324_50345_vec__50316$$, 0, null);
  var $set_visited_BANG_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__50324_50345_vec__50316$$, 1, null);
  $G__50324_50345_vec__50316$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $st$jscomp$2$$ = $APP.$module$node_modules$gsap$ScrollTrigger$$.ScrollTrigger.create({trigger:$APP.$cljs$core$_deref$$($ref$jscomp$25$$), start:$start$jscomp$178$$, end:$end$jscomp$48$$, invalidateOnRefresh:!0, onRefresh:function() {
      return null;
    }, onEnter:function($self$jscomp$21$$) {
      $set_visited_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_visited_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $set_visited_BANG_$jscomp$1$$.call(null, !0);
      return $APP.$cljs$core$truth_$$($on_enter$jscomp$1$$) ? $on_enter$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_enter$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($self$jscomp$21$$) : $on_enter$jscomp$1$$.call(null, $self$jscomp$21$$) : null;
    }, onToggle:function($self$jscomp$22$$) {
      var $G__50327_50354$$ = $self$jscomp$22$$.isActive;
      $set_is_active_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_active_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($G__50327_50354$$) : $set_is_active_BANG_$$.call(null, $G__50327_50354$$);
      return $APP.$cljs$core$truth_$$($on_toggle$jscomp$2$$) ? $on_toggle$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_toggle$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$($self$jscomp$22$$) : $on_toggle$jscomp$2$$.call(null, $self$jscomp$22$$) : null;
    }, markers:$markers_QMARK_$$}), $resize_observer$jscomp$1$$ = new ResizeObserver(function() {
      return $APP.$module$node_modules$gsap$ScrollTrigger$$.ScrollTrigger.refresh();
    });
    $resize_observer$jscomp$1$$.observe(document.body);
    return function() {
      $st$jscomp$2$$.kill();
      return $resize_observer$jscomp$1$$.disconnect();
    };
  });
  $G__50325_50346_p__50310_scroll_ref$$ = [$ref$jscomp$25$$, $G__50325_50346_p__50310_scroll_ref$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__50324_50345_vec__50316$$, $G__50325_50346_p__50310_scroll_ref$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__50324_50345_vec__50316$$, $G__50325_50346_p__50310_scroll_ref$$);
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$vec__50313_visited_QMARK_$jscomp$2$$, $is_active_QMARK_$jscomp$8_map__50312__$1$$], null);
};
$amp$nav$logo$logo_nav$$ = function($G__243481_is_active_QMARK_$jscomp$9_props__41575__auto__$jscomp$44_vec__243473$$) {
  $APP.$helix$core$extract_cljs_props$$($G__243481_is_active_QMARK_$jscomp$9_props__41575__auto__$jscomp$44_vec__243473$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__243481_is_active_QMARK_$jscomp$9_props__41575__auto__$jscomp$44_vec__243473$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$269$start$$, function() {
    return window.innerHeight - window.innerHeight / 8;
  }, $APP.$cljs$cst$769$end$$, "1000000px", $cljs$cst$910$markers_QMARK_$$, !1, $cljs$cst$911$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__243481_is_active_QMARK_$jscomp$9_props__41575__auto__$jscomp$44_vec__243473$$, 0, null);
  $G__243481_is_active_QMARK_$jscomp$9_props__41575__auto__$jscomp$44_vec__243473$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__243481_is_active_QMARK_$jscomp$9_props__41575__auto__$jscomp$44_vec__243473$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$);
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$614$target$$, $comp_ref$$, $APP.$cljs$cst$743$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$410$y$$, 0], null), $APP.$cljs$cst$745$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$410$y$$, -250], null), $APP.$cljs$cst$741$is_on_QMARK_$$, $G__243481_is_active_QMARK_$jscomp$9_props__41575__auto__$jscomp$44_vec__243473$$], 
  null));
  $G__243481_is_active_QMARK_$jscomp$9_props__41575__auto__$jscomp$44_vec__243473$$ = function() {
    return {ref:$comp_ref$$, className:"fixed\n                    opacity-90\n                    z-30\n                    right-8\n                    top-20\n                    flex flex-col items-end gap-3", children:function() {
      var $G__243485$$ = function() {
        return {className:"w-28 lg:w-32", children:[function() {
          var $G__243489$$ = function() {
            return {className:"cursor-pointer", onClick:function() {
              return window.open("https://www.labiennale.org/en/art/2026", "_blank");
            }, children:function() {
              var $G__243497$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"invert dark:invert-0"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__243497$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__243497$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__243489$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__243489$$);
        }(), function() {
          var $G__243505$$ = function() {
            return {className:"mt-4", children:function() {
              var $G__243511$$ = function() {
                return {title:"Donate Now", "additional-classes":"w-full justify-center", size:$APP.$cljs$cst$716$sm$$, "bg-opacity":0.8, "on-click":function() {
                  return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                }};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$button$main_button$$, $G__243511$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$button$main_button$$, $G__243511$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__243505$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__243505$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__243485$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__243485$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__243481_is_active_QMARK_$jscomp$9_props__41575__auto__$jscomp$44_vec__243473$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__243481_is_active_QMARK_$jscomp$9_props__41575__auto__$jscomp$44_vec__243473$$);
};
$amp$pages$landing$artist$artist_section$$ = function($G__268383_map__268361_map__268361__$1_props__41575__auto__$jscomp$45_vec__268358_vec__268370$$, $maybe_ref__41576__auto__$jscomp$45$$) {
  $G__268383_map__268361_map__268361__$1_props__41575__auto__$jscomp$45_vec__268358_vec__268370$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__268383_map__268361_map__268361__$1_props__41575__auto__$jscomp$45_vec__268358_vec__268370$$), $maybe_ref__41576__auto__$jscomp$45$$], null);
  $G__268383_map__268361_map__268361__$1_props__41575__auto__$jscomp$45_vec__268358_vec__268370$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268383_map__268361_map__268361__$1_props__41575__auto__$jscomp$45_vec__268358_vec__268370$$, 0, null);
  $G__268383_map__268361_map__268361__$1_props__41575__auto__$jscomp$45_vec__268358_vec__268370$$ = $APP.$cljs$core$__destructure_map$$($G__268383_map__268361_map__268361__$1_props__41575__auto__$jscomp$45_vec__268358_vec__268370$$);
  var $id$jscomp$98$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268383_map__268361_map__268361__$1_props__41575__auto__$jscomp$45_vec__268358_vec__268370$$, $APP.$cljs$cst$286$id$$), $title$jscomp$37$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268383_map__268361_map__268361__$1_props__41575__auto__$jscomp$45_vec__268358_vec__268370$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$26$$ = $APP.$helix$hooks$use_ref$$("artist-ref");
  $G__268383_map__268361_map__268361__$1_props__41575__auto__$jscomp$45_vec__268358_vec__268370$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$26$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$750$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268383_map__268361_map__268361__$1_props__41575__auto__$jscomp$45_vec__268358_vec__268370$$, 0, null);
  var $visible_QMARK_$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268383_map__268361_map__268361__$1_props__41575__auto__$jscomp$45_vec__268358_vec__268370$$, 1, null), $tag_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$912$boxDecorationBreak$$, "clone", $cljs$cst$913$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__268383_map__268361_map__268361__$1_props__41575__auto__$jscomp$45_vec__268358_vec__268370$$ = function() {
    return {id:$id$jscomp$98$$, ref:$ref$jscomp$26$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["pt-12 sm:pt-14", "pb-10 sm:pb-12"]))), children:[$APP.$cljs$core$truth_$$($title$jscomp$37$$) ? function() {
      var $G__268391_JSCompiler_temp_const$jscomp$inline_4073$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_name_lg$$, "mb-10 px-4"])));
      var $G__268403$jscomp$inline_4075_JSCompiler_inline_result$jscomp$inline_4074$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$$), children:$title$jscomp$37$$};
      $G__268403$jscomp$inline_4075_JSCompiler_inline_result$jscomp$inline_4074$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268403$jscomp$inline_4075_JSCompiler_inline_result$jscomp$inline_4074$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268403$jscomp$inline_4075_JSCompiler_inline_result$jscomp$inline_4074$$);
      $G__268391_JSCompiler_temp_const$jscomp$inline_4073$$ = {className:$G__268391_JSCompiler_temp_const$jscomp$inline_4073$$, children:$G__268403$jscomp$inline_4075_JSCompiler_inline_result$jscomp$inline_4074$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__268391_JSCompiler_temp_const$jscomp$inline_4073$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__268391_JSCompiler_temp_const$jscomp$inline_4073$$);
    }() : null, function() {
      var $G__268417$$ = function() {
        return {className:"px-4 sm:flex sm:gap-10 sm:items-start", children:[function() {
          var $G__268429_G__268437$jscomp$inline_4078$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/zz-portrait-2.jpg", fit:"crop", "aspect-ratio":0.75, "active?":$visible_QMARK_$jscomp$5$$};
          $G__268429_G__268437$jscomp$inline_4078$$ = {className:"w-full sm:w-2/5 flex-shrink-0 aspect-[3/4] rounded-sm overflow-hidden mb-8 sm:mb-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__268429_G__268437$jscomp$inline_4078$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__268429_G__268437$jscomp$inline_4078$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268429_G__268437$jscomp$inline_4078$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268429_G__268437$jscomp$inline_4078$$);
        }(), function() {
          var $G__268451$$ = function() {
            return {className:"sm:flex-1 sm:min-w-0", children:[function() {
              var $G__268459_JSCompiler_temp_const$jscomp$inline_4080$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_name_lg$$, "mb-2"])));
              var $G__268467$jscomp$inline_4082_JSCompiler_inline_result$jscomp$inline_4081$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$$), children:"Zadik Zadikian"};
              $G__268467$jscomp$inline_4082_JSCompiler_inline_result$jscomp$inline_4081$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268467$jscomp$inline_4082_JSCompiler_inline_result$jscomp$inline_4081$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268467$jscomp$inline_4082_JSCompiler_inline_result$jscomp$inline_4081$$);
              $G__268459_JSCompiler_temp_const$jscomp$inline_4080$$ = {className:$G__268459_JSCompiler_temp_const$jscomp$inline_4080$$, children:$G__268467$jscomp$inline_4082_JSCompiler_inline_result$jscomp$inline_4081$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__268459_JSCompiler_temp_const$jscomp$inline_4080$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__268459_JSCompiler_temp_const$jscomp$inline_4080$$);
            }(), function() {
              var $G__268492$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_role$$, "mb-6"]))), children:"Artist"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__268492$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__268492$$);
            }(), function() {
              var $G__268497$$ = function() {
                return {className:"border-l-2 border-white/20 pl-6 my-8", children:[function() {
                  var $G__268501$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "italic"]))), children:"“If you want to learn about something, become that thing and then study yourself.”"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__268501$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__268501$$);
                }(), function() {
                  var $G__268507$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$amp$styles$label_muted$$]))), children:"— Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__268507$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__268507$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__268497$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__268497$$);
            }(), function() {
              var $G__268515$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Born in Yerevan, Zadik Zadikian’s life began in extremes. At nineteen—armed only with conviction—he escaped Soviet Armenia by swimming across the Arax River under machine-gun fire. He arrived in America with nothing but the instincts that had guided him since childhood: to build, to shape matter, to seek form through discipline and elemental materials."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__268515$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__268515$$);
            }(), function() {
              var $G__268520$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["In San Francisco, he apprenticed with sculptor ", function() {
                  var $G__268525$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Beniamino Bufano"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268525$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268525$$);
                }(), ", absorbing a lifelong sense of scale, color, and the physical intelligence of large-form making. Drawn to the heat and velocity of New York, he moved east in 1974 and quickly found himself inside the crucible of the Minimalist movement, assisting ", function() {
                  var $G__268532$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Richard Serra"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268532$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268532$$);
                }(), " on the monumental black oil-stick wall drawings—one of which Serra titled ", function() {
                  var $G__268540$$ = {children:"Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("em", $G__268540$$) : $APP.$helix$core$jsx$$.call(null, "em", $G__268540$$);
                }(), "."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__268520$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__268520$$);
            }(), function() {
              var $G__268544$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"This immersion into New York’s severity and possibility forged an artist who has always moved toward intensity: toward weight, clarity, touch. The son of a builder, he grew up with materials—clay, plaster, stone, the raw grammar of structure. In New York, these instincts crystallized. In 1976 he transformed his ten-thousand-square-foot home and studio into a continuous field of industrial gold, an act of totalizing vision that set the tone for everything that followed."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__268544$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__268544$$);
            }(), function() {
              var $G__268577_JSCompiler_temp_const$jscomp$inline_4084$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
              var $G__268585$jscomp$inline_4086_JSCompiler_inline_result$jscomp$inline_4085$$ = {children:"1,000 Bricks Gilded in 24-Karat Gold Leaf"};
              $G__268585$jscomp$inline_4086_JSCompiler_inline_result$jscomp$inline_4085$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("em", $G__268585$jscomp$inline_4086_JSCompiler_inline_result$jscomp$inline_4085$$) : $APP.$helix$core$jsx$$.call(null, "em", $G__268585$jscomp$inline_4086_JSCompiler_inline_result$jscomp$inline_4085$$);
              $G__268577_JSCompiler_temp_const$jscomp$inline_4084$$ = {className:$G__268577_JSCompiler_temp_const$jscomp$inline_4084$$, children:["His 1978 project ", $G__268585$jscomp$inline_4086_JSCompiler_inline_result$jscomp$inline_4085$$, " marked the emergence of his now-signature language: unit-based sculptural forms—bricklike, essential, endlessly recombinable—through which gold becomes not decoration but ontology. For decades, Zadikian has pushed this vocabulary to distill the elemental. His works hover between the geological and the luminous, between ancient memory and future speculation, always returning to the fundamental question: What is born when matter is reduced to its clearest form?"]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__268577_JSCompiler_temp_const$jscomp$inline_4084$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__268577_JSCompiler_temp_const$jscomp$inline_4084$$);
            }(), function() {
              var $G__268634$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$]))), children:"Zadikian’s practice is defined by extremes—of material, of discipline, of vision—and by a lifelong commitment to the structures that underlie both art and the world itself. His is a studio forged through touch, labor, repetition, and the pursuit of a form so essential it borders on the eternal."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__268634$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__268634$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268451$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__268451$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268417$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__268417$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__268383_map__268361_map__268361__$1_props__41575__auto__$jscomp$45_vec__268358_vec__268370$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__268383_map__268361_map__268361__$1_props__41575__auto__$jscomp$45_vec__268358_vec__268370$$);
};
$amp$pages$landing$curators$curator_card$$ = function($G__268387_map__268381_map__268381__$1_props__41575__auto__$jscomp$46_vec__268378$$, $maybe_ref__41576__auto__$jscomp$46$$) {
  $G__268387_map__268381_map__268381__$1_props__41575__auto__$jscomp$46_vec__268378$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__268387_map__268381_map__268381__$1_props__41575__auto__$jscomp$46_vec__268378$$), $maybe_ref__41576__auto__$jscomp$46$$], null);
  $G__268387_map__268381_map__268381__$1_props__41575__auto__$jscomp$46_vec__268378$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268387_map__268381_map__268381__$1_props__41575__auto__$jscomp$46_vec__268378$$, 0, null);
  $G__268387_map__268381_map__268381__$1_props__41575__auto__$jscomp$46_vec__268378$$ = $APP.$cljs$core$__destructure_map$$($G__268387_map__268381_map__268381__$1_props__41575__auto__$jscomp$46_vec__268378$$);
  var $name$jscomp$203$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268387_map__268381_map__268381__$1_props__41575__auto__$jscomp$46_vec__268378$$, $APP.$cljs$cst$165$name$$), $role$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268387_map__268381_map__268381__$1_props__41575__auto__$jscomp$46_vec__268378$$, $APP.$cljs$cst$796$role$$), $img$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268387_map__268381_map__268381__$1_props__41575__auto__$jscomp$46_vec__268378$$, 
  $cljs$cst$914$img$$), $bio$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268387_map__268381_map__268381__$1_props__41575__auto__$jscomp$46_vec__268378$$, $cljs$cst$915$bio$$), $visible_QMARK_$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268387_map__268381_map__268381__$1_props__41575__auto__$jscomp$46_vec__268378$$, $cljs$cst$916$visible_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $tag_style$jscomp$1$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$912$boxDecorationBreak$$, "clone", $cljs$cst$913$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__268387_map__268381_map__268381__$1_props__41575__auto__$jscomp$46_vec__268378$$ = function() {
    return {className:"px-4 sm:flex sm:gap-8 sm:items-start", children:[function() {
      var $G__268397_G__268405$jscomp$inline_4089$$ = {"img-src":$img$jscomp$2$$, fit:"crop", "aspect-ratio":1, "active?":$visible_QMARK_$jscomp$6$$};
      $G__268397_G__268405$jscomp$inline_4089$$ = {className:"float-left mr-4 mb-2 sm:float-none sm:mr-0 sm:mb-0\n               w-20 aspect-square sm:w-36\n               flex-shrink-0 rounded-sm overflow-hidden", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__268397_G__268405$jscomp$inline_4089$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, 
      $G__268397_G__268405$jscomp$inline_4089$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268397_G__268405$jscomp$inline_4089$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268397_G__268405$jscomp$inline_4089$$);
    }(), function() {
      var $G__268415$$ = function() {
        return {className:"sm:flex-1 sm:min-w-0", children:[function() {
          var $G__268427_JSCompiler_temp_const$jscomp$inline_4091$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_name$$, "mb-1"])));
          var $G__268439$jscomp$inline_4093_JSCompiler_inline_result$jscomp$inline_4092$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-2 py-0.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$jscomp$1$$), children:$name$jscomp$203$$};
          $G__268439$jscomp$inline_4093_JSCompiler_inline_result$jscomp$inline_4092$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268439$jscomp$inline_4093_JSCompiler_inline_result$jscomp$inline_4092$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268439$jscomp$inline_4093_JSCompiler_inline_result$jscomp$inline_4092$$);
          $G__268427_JSCompiler_temp_const$jscomp$inline_4091$$ = {className:$G__268427_JSCompiler_temp_const$jscomp$inline_4091$$, children:$G__268439$jscomp$inline_4093_JSCompiler_inline_result$jscomp$inline_4092$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__268427_JSCompiler_temp_const$jscomp$inline_4091$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__268427_JSCompiler_temp_const$jscomp$inline_4091$$);
        }(), function() {
          var $G__268455$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_role$$, "mb-3"]))), children:$role$jscomp$2$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__268455$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__268455$$);
        }(), function() {
          var $G__268469$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:$bio$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__268469$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__268469$$);
        }(), function() {
          var $G__268511$$ = {className:"clear-both sm:hidden"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268511$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268511$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268415$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__268415$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268387_map__268381_map__268381__$1_props__41575__auto__$jscomp$46_vec__268378$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__268387_map__268381_map__268381__$1_props__41575__auto__$jscomp$46_vec__268378$$);
};
$amp$pages$landing$curators$curators_section$$ = function($G__268553_map__268538_map__268538__$1_props__41575__auto__$jscomp$47_vec__268535_vec__268545$$, $maybe_ref__41576__auto__$jscomp$47$$) {
  $G__268553_map__268538_map__268538__$1_props__41575__auto__$jscomp$47_vec__268535_vec__268545$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__268553_map__268538_map__268538__$1_props__41575__auto__$jscomp$47_vec__268535_vec__268545$$), $maybe_ref__41576__auto__$jscomp$47$$], null);
  $G__268553_map__268538_map__268538__$1_props__41575__auto__$jscomp$47_vec__268535_vec__268545$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268553_map__268538_map__268538__$1_props__41575__auto__$jscomp$47_vec__268535_vec__268545$$, 0, null);
  $G__268553_map__268538_map__268538__$1_props__41575__auto__$jscomp$47_vec__268535_vec__268545$$ = $APP.$cljs$core$__destructure_map$$($G__268553_map__268538_map__268538__$1_props__41575__auto__$jscomp$47_vec__268535_vec__268545$$);
  var $id$jscomp$99$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268553_map__268538_map__268538__$1_props__41575__auto__$jscomp$47_vec__268535_vec__268545$$, $APP.$cljs$cst$286$id$$), $title$jscomp$38$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268553_map__268538_map__268538__$1_props__41575__auto__$jscomp$47_vec__268535_vec__268545$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$27$$ = $APP.$helix$hooks$use_ref$$("curators-ref");
  $G__268553_map__268538_map__268538__$1_props__41575__auto__$jscomp$47_vec__268535_vec__268545$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$27$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$750$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268553_map__268538_map__268538__$1_props__41575__auto__$jscomp$47_vec__268535_vec__268545$$, 0, null);
  var $visible_QMARK_$jscomp$7$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268553_map__268538_map__268538__$1_props__41575__auto__$jscomp$47_vec__268535_vec__268545$$, 1, null), $title_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$912$boxDecorationBreak$$, "clone", $cljs$cst$913$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__268553_map__268538_map__268538__$1_props__41575__auto__$jscomp$47_vec__268535_vec__268545$$ = function() {
    return {id:$id$jscomp$99$$, ref:$ref$jscomp$27$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["pt-12 sm:pt-14", "pb-10 sm:pb-12"]))), children:[$APP.$cljs$core$truth_$$($title$jscomp$38$$) ? function() {
      var $G__268559_JSCompiler_temp_const$jscomp$inline_4095$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_name_lg$$, "mb-10 px-4"])));
      var $G__268563$jscomp$inline_4097_JSCompiler_inline_result$jscomp$inline_4096$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($title_style$$), children:$title$jscomp$38$$};
      $G__268563$jscomp$inline_4097_JSCompiler_inline_result$jscomp$inline_4096$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268563$jscomp$inline_4097_JSCompiler_inline_result$jscomp$inline_4096$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268563$jscomp$inline_4097_JSCompiler_inline_result$jscomp$inline_4096$$);
      $G__268559_JSCompiler_temp_const$jscomp$inline_4095$$ = {className:$G__268559_JSCompiler_temp_const$jscomp$inline_4095$$, children:$G__268563$jscomp$inline_4097_JSCompiler_inline_result$jscomp$inline_4096$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__268559_JSCompiler_temp_const$jscomp$inline_4095$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__268559_JSCompiler_temp_const$jscomp$inline_4095$$);
    }() : null, function() {
      var $G__268567$$ = function() {
        return {className:"space-y-8 sm:space-y-12\n              divide-y divide-slate-200/50 dark:divide-white/10", children:function() {
          return function $amp$pages$landing$curators$curators_section_render_$_iter__268572$$($s__268573$$) {
            return new $APP.$cljs$core$LazySeq$$(null, function() {
              for (;;) {
                var $s__268573__$2_temp__5823__auto__$jscomp$118$$ = $APP.$cljs$core$seq$$($s__268573$$);
                if ($s__268573__$2_temp__5823__auto__$jscomp$118$$) {
                  if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__268573__$2_temp__5823__auto__$jscomp$118$$)) {
                    var $c__5626__auto__$jscomp$32$$ = $APP.$cljs$core$_chunked_first$$($s__268573__$2_temp__5823__auto__$jscomp$118$$), $size__5627__auto__$jscomp$32$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$32$$), $b__268575$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$32$$);
                    return function() {
                      for (var $i__268574$$ = 0;;) {
                        if ($i__268574$$ < $size__5627__auto__$jscomp$32$$) {
                          var $JSCompiler_temp_const$jscomp$4178_map__268602_map__268602__$1$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$32$$, $i__268574$$), $G__268628$jscomp$inline_4252_G__268642$jscomp$inline_4253_curator$jscomp$1$$ = $JSCompiler_temp_const$jscomp$4178_map__268602_map__268602__$1$$ = $APP.$cljs$core$__destructure_map$$($JSCompiler_temp_const$jscomp$4178_map__268602_map__268602__$1$$), $G__268629$jscomp$inline_4254_JSCompiler_inline_result$jscomp$4179_name$jscomp$205$$ = 
                          $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($JSCompiler_temp_const$jscomp$4178_map__268602_map__268602__$1$$, $APP.$cljs$cst$165$name$$);
                          $JSCompiler_temp_const$jscomp$4178_map__268602_map__268602__$1$$ = $b__268575$$;
                          $G__268628$jscomp$inline_4252_G__268642$jscomp$inline_4253_curator$jscomp$1$$ = $APP.$helix$impl$props$merge_obj$$({"visible?":$visible_QMARK_$jscomp$7$$}, $APP.$helix$impl$props$_props$cljs$0core$0IFn$0_invoke$0arity$01$$($G__268628$jscomp$inline_4252_G__268642$jscomp$inline_4253_curator$jscomp$1$$));
                          $G__268628$jscomp$inline_4252_G__268642$jscomp$inline_4253_curator$jscomp$1$$ = {className:"pt-8 sm:pt-12 first:pt-0 first:border-t-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$curators$curator_card$$, $G__268628$jscomp$inline_4252_G__268642$jscomp$inline_4253_curator$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$curators$curator_card$$, $G__268628$jscomp$inline_4252_G__268642$jscomp$inline_4253_curator$jscomp$1$$)};
                          $G__268629$jscomp$inline_4254_JSCompiler_inline_result$jscomp$4179_name$jscomp$205$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__268628$jscomp$inline_4252_G__268642$jscomp$inline_4253_curator$jscomp$1$$, $G__268629$jscomp$inline_4254_JSCompiler_inline_result$jscomp$4179_name$jscomp$205$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268628$jscomp$inline_4252_G__268642$jscomp$inline_4253_curator$jscomp$1$$, 
                          $G__268629$jscomp$inline_4254_JSCompiler_inline_result$jscomp$4179_name$jscomp$205$$);
                          $JSCompiler_temp_const$jscomp$4178_map__268602_map__268602__$1$$.add($G__268629$jscomp$inline_4254_JSCompiler_inline_result$jscomp$4179_name$jscomp$205$$);
                          $i__268574$$ += 1;
                        } else {
                          return !0;
                        }
                      }
                    }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__268575$$), $amp$pages$landing$curators$curators_section_render_$_iter__268572$$($APP.$cljs$core$_chunked_rest$$($s__268573__$2_temp__5823__auto__$jscomp$118$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__268575$$), null);
                  }
                  var $map__268674_map__268674__$1$$ = $APP.$cljs$core$first$$($s__268573__$2_temp__5823__auto__$jscomp$118$$), $curator$$ = $map__268674_map__268674__$1$$ = $APP.$cljs$core$__destructure_map$$($map__268674_map__268674__$1$$), $name$jscomp$204$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__268674_map__268674__$1$$, $APP.$cljs$cst$165$name$$);
                  return $APP.$cljs$core$cons$$(function() {
                    var $G__268676_G__268681$jscomp$inline_4103$$ = $APP.$helix$impl$props$merge_obj$$({"visible?":$visible_QMARK_$jscomp$7$$}, $APP.$helix$impl$props$_props$cljs$0core$0IFn$0_invoke$0arity$01$$($curator$$));
                    $G__268676_G__268681$jscomp$inline_4103$$ = {className:"pt-8 sm:pt-12 first:pt-0 first:border-t-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$curators$curator_card$$, $G__268676_G__268681$jscomp$inline_4103$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$curators$curator_card$$, $G__268676_G__268681$jscomp$inline_4103$$)};
                    var $G__268677$$ = $name$jscomp$204$$;
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__268676_G__268681$jscomp$inline_4103$$, $G__268677$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268676_G__268681$jscomp$inline_4103$$, $G__268677$$);
                  }(), $amp$pages$landing$curators$curators_section_render_$_iter__268572$$($APP.$cljs$core$rest$$($s__268573__$2_temp__5823__auto__$jscomp$118$$)));
                }
                return null;
              }
            }, null, null);
          }($amp$pages$landing$curators$curators$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268567$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268567$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__268553_map__268538_map__268538__$1_props__41575__auto__$jscomp$47_vec__268535_vec__268545$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__268553_map__268538_map__268538__$1_props__41575__auto__$jscomp$47_vec__268535_vec__268545$$);
};
$amp$pages$landing$in_minor_keys$pull_quote$$ = function($G__268735_map__268731_map__268731__$1_props__41575__auto__$jscomp$48_vec__268728$$, $maybe_ref__41576__auto__$jscomp$48$$) {
  $G__268735_map__268731_map__268731__$1_props__41575__auto__$jscomp$48_vec__268728$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__268735_map__268731_map__268731__$1_props__41575__auto__$jscomp$48_vec__268728$$), $maybe_ref__41576__auto__$jscomp$48$$], null);
  $G__268735_map__268731_map__268731__$1_props__41575__auto__$jscomp$48_vec__268728$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268735_map__268731_map__268731__$1_props__41575__auto__$jscomp$48_vec__268728$$, 0, null);
  $G__268735_map__268731_map__268731__$1_props__41575__auto__$jscomp$48_vec__268728$$ = $APP.$cljs$core$__destructure_map$$($G__268735_map__268731_map__268731__$1_props__41575__auto__$jscomp$48_vec__268728$$);
  var $text$jscomp$16$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268735_map__268731_map__268731__$1_props__41575__auto__$jscomp$48_vec__268728$$, $APP.$cljs$cst$395$text$$), $attribution$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268735_map__268731_map__268731__$1_props__41575__auto__$jscomp$48_vec__268728$$, $cljs$cst$917$attribution$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__268735_map__268731_map__268731__$1_props__41575__auto__$jscomp$48_vec__268728$$ = function() {
    return {className:"border-l-2 border-white/20 pl-6 my-8", children:[function() {
      var $G__268739$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:$text$jscomp$16$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__268739$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__268739$$);
    }(), function() {
      var $G__268743$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$amp$styles$label_muted$$]))), children:"— " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($attribution$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__268743$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__268743$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__268735_map__268731_map__268731__$1_props__41575__auto__$jscomp$48_vec__268728$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__268735_map__268731_map__268731__$1_props__41575__auto__$jscomp$48_vec__268728$$);
};
$amp$pages$landing$in_minor_keys$curator_card$$ = function($G__268962_map__268878_map__268878__$1_props__41575__auto__$jscomp$49_vec__268875$$, $maybe_ref__41576__auto__$jscomp$49$$) {
  $G__268962_map__268878_map__268878__$1_props__41575__auto__$jscomp$49_vec__268875$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__268962_map__268878_map__268878__$1_props__41575__auto__$jscomp$49_vec__268875$$), $maybe_ref__41576__auto__$jscomp$49$$], null);
  $G__268962_map__268878_map__268878__$1_props__41575__auto__$jscomp$49_vec__268875$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268962_map__268878_map__268878__$1_props__41575__auto__$jscomp$49_vec__268875$$, 0, null);
  $G__268962_map__268878_map__268878__$1_props__41575__auto__$jscomp$49_vec__268875$$ = $APP.$cljs$core$__destructure_map$$($G__268962_map__268878_map__268878__$1_props__41575__auto__$jscomp$49_vec__268875$$);
  var $visible_QMARK_$jscomp$8$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268962_map__268878_map__268878__$1_props__41575__auto__$jscomp$49_vec__268875$$, $cljs$cst$916$visible_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $tag_style$jscomp$2$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$912$boxDecorationBreak$$, "clone", $cljs$cst$913$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__268962_map__268878_map__268878__$1_props__41575__auto__$jscomp$49_vec__268875$$ = function() {
    return {className:"sm:flex sm:gap-8 sm:items-start mb-10", children:[function() {
      var $G__268972_G__269074$jscomp$inline_4106$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/koyo.png", fit:"crop", "aspect-ratio":1, "active?":$visible_QMARK_$jscomp$8$$};
      $G__268972_G__269074$jscomp$inline_4106$$ = {className:"float-left mr-4 mb-2 sm:float-none sm:mr-0 sm:mb-0\n               w-24 aspect-square sm:w-40\n               flex-shrink-0 rounded-sm overflow-hidden", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__268972_G__269074$jscomp$inline_4106$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, 
      $G__268972_G__269074$jscomp$inline_4106$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268972_G__269074$jscomp$inline_4106$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268972_G__269074$jscomp$inline_4106$$);
    }(), function() {
      var $G__269083$$ = function() {
        return {className:"sm:flex-1 sm:min-w-0", children:[function() {
          var $G__269087_JSCompiler_temp_const$jscomp$inline_4108$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_name$$, "mb-1"])));
          var $G__269091$jscomp$inline_4110_JSCompiler_inline_result$jscomp$inline_4109$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-2 py-0.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$jscomp$2$$), children:"Koyo Kouoh"};
          $G__269091$jscomp$inline_4110_JSCompiler_inline_result$jscomp$inline_4109$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269091$jscomp$inline_4110_JSCompiler_inline_result$jscomp$inline_4109$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269091$jscomp$inline_4110_JSCompiler_inline_result$jscomp$inline_4109$$);
          $G__269087_JSCompiler_temp_const$jscomp$inline_4108$$ = {className:$G__269087_JSCompiler_temp_const$jscomp$inline_4108$$, children:$G__269091$jscomp$inline_4110_JSCompiler_inline_result$jscomp$inline_4109$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269087_JSCompiler_temp_const$jscomp$inline_4108$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269087_JSCompiler_temp_const$jscomp$inline_4108$$);
        }(), function() {
          var $G__269095$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_role$$, "mb-3"]))), children:"Curator, 61st Biennale Arte"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269095$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269095$$);
        }(), function() {
          var $G__269101$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$]))), children:"The curatorial statement for the 61st International Art Exhibition — La Biennale di Venezia — invites us to listen to the minor keys: the quiet tones, the lower frequencies, the persistent signals of earth and life."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269101$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269101$$);
        }(), function() {
          var $G__269107$$ = {className:"clear-both sm:hidden"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269107$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__269107$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269083$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269083$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268962_map__268878_map__268878__$1_props__41575__auto__$jscomp$49_vec__268875$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__268962_map__268878_map__268878__$1_props__41575__auto__$jscomp$49_vec__268875$$);
};
$amp$pages$landing$in_minor_keys$preview$$ = function($G__269142_props__41575__auto__$jscomp$50_vec__269138$$) {
  $APP.$helix$core$extract_cljs_props$$($G__269142_props__41575__auto__$jscomp$50_vec__269138$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$28$$ = $APP.$helix$hooks$use_ref$$("imk-preview-ref");
  $G__269142_props__41575__auto__$jscomp$50_vec__269138$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$28$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$750$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__269142_props__41575__auto__$jscomp$50_vec__269138$$, 0, null);
  var $visible_QMARK_$jscomp$9$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__269142_props__41575__auto__$jscomp$50_vec__269138$$, 1, null);
  $G__269142_props__41575__auto__$jscomp$50_vec__269138$$ = function() {
    return {className:"px-4", ref:$ref$jscomp$28$$, children:[function() {
      var $G__269146$$ = {"visible?":$visible_QMARK_$jscomp$9$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$curator_card$$, $G__269146$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$curator_card$$, $G__269146$$);
    }(), function() {
      var $G__269151$$ = function() {
        return {className:"text-center my-10 space-y-1", children:[function() {
          var $G__269156$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Take a deep breath]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269156$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269156$$);
        }(), function() {
          var $G__269163$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Exhale]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269163$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269163$$);
        }(), function() {
          var $G__269169$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Drop your shoulders]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269169$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269169$$);
        }(), function() {
          var $G__269175$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Close your eyes]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269175$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269175$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269151$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269151$$);
    }(), function() {
      var $G__269183$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"This is an invitation to encounter these words in the immediate physical, meteorological, ambient, and karmic conditions in which they meet you. To shift to a slower gear and tune in to the frequencies of the minor keys. Because, though often lost in the anxious cacophony of the present chaos raging through the world, the music continues. The songs of those producing beauty in spite of tragedy, the tunes of the fugitives recovering from the ruins, the harmonies of those repairing wounds and worlds."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269183$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269183$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269142_props__41575__auto__$jscomp$50_vec__269138$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269142_props__41575__auto__$jscomp$50_vec__269138$$);
};
$amp$pages$landing$in_minor_keys$details$$ = function($G__269293_props__41575__auto__$jscomp$51_vec__269288$$) {
  $APP.$helix$core$extract_cljs_props$$($G__269293_props__41575__auto__$jscomp$51_vec__269288$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$29$$ = $APP.$helix$hooks$use_ref$$("imk-details-ref");
  $G__269293_props__41575__auto__$jscomp$51_vec__269288$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$29$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$750$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__269293_props__41575__auto__$jscomp$51_vec__269288$$, 0, null);
  var $visible_QMARK_$jscomp$10$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__269293_props__41575__auto__$jscomp$51_vec__269288$$, 1, null);
  $G__269293_props__41575__auto__$jscomp$51_vec__269288$$ = function() {
    return {className:"px-4", ref:$ref$jscomp$29$$, children:[function() {
      var $G__269297$$ = {"visible?":$visible_QMARK_$jscomp$10$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$curator_card$$, $G__269297$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$curator_card$$, $G__269297$$);
    }(), function() {
      var $G__269301$$ = function() {
        return {className:"text-center my-10 space-y-1", children:[function() {
          var $G__269305$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Take a deep breath]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269305$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269305$$);
        }(), function() {
          var $G__269309$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Exhale]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269309$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269309$$);
        }(), function() {
          var $G__269314$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Drop your shoulders]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269314$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269314$$);
        }(), function() {
          var $G__269318$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Close your eyes]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269318$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269318$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269301$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269301$$);
    }(), function() {
      var $G__269322$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"This is an invitation to encounter these words in the immediate physical, meteorological, ambient, and karmic conditions in which they meet you. To shift to a slower gear and tune in to the frequencies of the minor keys. Because, though often lost in the anxious cacophony of the present chaos raging through the world, the music continues. The songs of those producing beauty in spite of tragedy, the tunes of the fugitives recovering from the ruins, the harmonies of those repairing wounds and worlds."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269322$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269322$$);
    }(), function() {
      var $G__269326$$ = {text:"There is a reason, after all, that some people wish to colonize the moon, and others dance before it as an ancient friend.", attribution:"James Baldwin, 1972"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$pull_quote$$, $G__269326$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$pull_quote$$, $G__269326$$);
    }(), function() {
      var $G__269330$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The minor key, in music, alludes both to the structure of a song and to its emotional effects. It is a rich idea, so rich that it quickly overflows its technical definition and spills with metaphor. It summons moods, the blues, the call-and-response, the morna, the second line, the lament, the allegory, the whisper."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269330$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269330$$);
    }(), function() {
      var $G__269334$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The minor keys refuse orchestral bombast and goose-step military marches and come alive in the quiet tones, the lower frequencies, the hums, the consolations of poetry, all portals of improvisation to the elsewhere and the otherwise. The minor keys ask for listening that calls on the emotions and sustains them in return."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269334$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269334$$);
    }(), function() {
      var $G__269338$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The minor keys are also the small islands, worlds amid oceans with distinct and endlessly rich ecosystems, social lives that are articulated, for better and worse, within much larger political forms and ecological stakes. Here, the evocation of the key and the island extends to an archipelago of oases: gardens, courtyards, compounds, lofts, dance floors — the other worlds that artists make, the intimate and convivial universes that refresh and sustain even in terrible times; indeed, especially in terrible times."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269338$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269338$$);
    }(), function() {
      var $G__269342$$ = {text:"Look at the creole garden, you put all species on such a little lick of land: avocados, lemons, yams, sugarcanes… plus thirty or forty other species on this bit of land that doesn’t go more than fifty feet up the side of the hill, they protect each other. In the great Circle, everything is in everything else.", attribution:"Édouard Glissant, 1993"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$pull_quote$$, $G__269342$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$pull_quote$$, $G__269342$$);
    }(), function() {
      var $G__269346$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"These are the cues for an exhibition; an exhibition tuned in to the minor keys; an exhibition that invites listening to the persistent signals of earth and life, connecting to soul frequencies. If, in music, the minor keys are often associated with strangeness, melancholy and sorrow, here their joy, solace, hope, and transcendence manifest as well."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269346$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269346$$);
    }(), function() {
      var $G__269350$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"In the minor keys, sound and sensation are grounding, they hold the cadences, melodies, and silences of resonant worlds that gather and create together a polyphonous assembly of art, convening and communing in convivial collectivity, beaming across the void of alienation and the crackle of conflict."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269350$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269350$$);
    }(), function() {
      var $G__269354$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The 61st edition of the Biennale Arte is grounded in a deep belief in artists as the vital interpreters of the social and psychic condition and catalysts of new relations and possibilities."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269354$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269354$$);
    }(), function() {
      var $G__269358$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The exhibition’s composition is formed by artistic practices that open portals, that refresh and nourish, that prompt relation and relationship, that advance concept and form through networks and schools — understood freely and informally."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269358$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269358$$);
    }(), function() {
      var $G__269362$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The intended effect scrambles cohesion and dissonance in the manner of a free-jazz ensemble, or perhaps, at the scale of the Biennale Arte, a festival of ensembles with a common premise: that poetics liberate and people make beauty together."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269362$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269362$$);
    }(), function() {
      var $G__269367$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Through relation, sharing, and transcendence, the artists and practices that operate in this spirit, like jazz, across methods, scales, senses and forms, propose to visitors an exhibitional experience that is more sensory than didactic, renewing rather than exhausting, and fortifying for the work ahead."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269367$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269367$$);
    }(), function() {
      var $G__269371$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Through a visual and meditative procession, the exhibition prompts all senses to interconnect and meander from one universe to the other, rendering visible the possibilities that reside in the in-between spaces and beyond the portals."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269371$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269371$$);
    }(), function() {
      var $G__269380$$ = {text:"…there is no choice but to tune in like jazzmen to these imperative mutations. The jazzman constantly meditates on the unpredictable, stands within it according to the laws of polyrhythm, and improvises breathtaking moments. We small-island Caribbeans are not ready, but we have this resource. The change will have to be so profound that we will no doubt have to add to the knowledge of jazz, the old totemisms, animisms, analogisms, and other metaphysics too summarily discarded. These old-world poems are already precious scores.", 
      attribution:"Patrick Chamoiseau, 2023"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$pull_quote$$, $G__269380$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$pull_quote$$, $G__269380$$);
    }(), function() {
      var $G__269384$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"In this spirit, the international exhibition of the 61st Biennale Arte intends neither a litany of commentary on world events, nor an inattention or escape from compounding and continuous intersecting crises. Rather, it proposes a radical reconnection with art’s natural habitat and role in society: that is the emotional, the visual, the sensory, the affective, the subjective."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269384$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269384$$);
    }(), function() {
      var $G__269388$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"In Minor Keys are sequences of exhilarating journeys that address the sensate and the affective, inviting visitors to marvel, meditate, dream, revel, reflect, and commune in realms where time is not corporate property nor at the mercy of relentlessly accelerated productivity."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269388$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269388$$);
    }(), function() {
      var $G__269392$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"After all, it is clear by now that the enduring time of capital and empire maligned local, Indigenous and terrestrial knowledges as chimeric, and dismissed co-constitutive artistic practices as artisanal, intended for decoration or devotional rituals."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269392$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269392$$);
    }(), function() {
      var $G__269396$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The ‘civilizing mission’ flattens all with condescending contempt, and in the contemporary era entire societies and ecologies are regarded as collateral damage in the headstrong pursuit of growth supported by ruthlessness and greed. In refusing the spectacle of horror, the time has come to listen to the minor keys, to tune in sotto voce to the whispers, to the lower frequencies; to find the oases, the islands, where the dignity of all living beings is safeguarded."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269396$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269396$$);
    }(), function() {
      var $G__269404$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The exhibition posits that such radical shifts are taking place — indeed, have been underway all along — in the minor keys, and the artists, poets, performers, and filmmakers whom the exhibition will convene are grounded in their commitments to realizing them. Artists are channels to and between the minor keys and listening to, rather than speaking for them is at the core of the curatorial conceit."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269404$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269404$$);
    }(), function() {
      var $G__269430$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The exhibition In Minor Keys stands as a collective score composed together with artists who have built universes of imagination. Artists who work at the boundaries of form, and whose practices can be thought of as intricate melodies to be heard both collectively and on their own terms. These are artists whose practices seamlessly bleed into society."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269430$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269430$$);
    }(), function() {
      var $G__269437$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Artists who accommodate daily life as part of a logical and aesthetically consistent relation of parts. Artists who are exceedingly generous and hospitable to life."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269437$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269437$$);
    }(), function() {
      var $G__269450$$ = {text:"In our myths, in our songs, that’s where the seeds are. It is not possible to constantly hone on the crisis. You have to have the love and you have to have the magic, that’s also life.", attribution:"Toni Morrison, 1977"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$pull_quote$$, $G__269450$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$pull_quote$$, $G__269450$$);
    }(), function() {
      var $G__269458$$ = function() {
        return {className:"mt-12 mb-6 border-t border-white/10 pt-10", children:[function() {
          var $G__269464$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "mb-6"]))), children:"The Studio — In Minor Keys"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__269464$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__269464$$);
        }(), function() {
          var $G__269468_JSCompiler_temp_const$jscomp$inline_4112$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
          var $G__269472$jscomp$inline_4114_JSCompiler_inline_result$jscomp$inline_4113$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
          $G__269472$jscomp$inline_4114_JSCompiler_inline_result$jscomp$inline_4113$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269472$jscomp$inline_4114_JSCompiler_inline_result$jscomp$inline_4113$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269472$jscomp$inline_4114_JSCompiler_inline_result$jscomp$inline_4113$$);
          $G__269468_JSCompiler_temp_const$jscomp$inline_4112$$ = {className:$G__269468_JSCompiler_temp_const$jscomp$inline_4112$$, children:["Zadik Zadikian’s ", $G__269472$jscomp$inline_4114_JSCompiler_inline_result$jscomp$inline_4113$$, " is a practice tuned precisely to these frequencies. In a pavilion where the brick — the most elementary building unit, unchanged for eleven millennia — is cast, stacked, disassembled, and reassembled over six months, simplicity becomes the method and the meaning."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269468_JSCompiler_temp_const$jscomp$inline_4112$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__269468_JSCompiler_temp_const$jscomp$inline_4112$$);
        }(), function() {
          var $G__269476$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__269480$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Doing the work."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269480$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269480$$);
            }(), " The minor keys ask for sustained attention, not spectacle. In ", function() {
              var $G__269485$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269485$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269485$$);
            }(), ", the act of making is neither performed nor concealed. Plaster is mixed, forms are poured, bricks emerge. Day after day, the labor itself is the statement — a refusal of the accelerated and the disposable in favor of the deliberate and the enduring."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269476$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__269476$$);
        }(), function() {
          var $G__269489$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__269493$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Making simple things."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269493$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269493$$);
            }(), " Each brick is humble. It carries no narrative, bears no symbol. Like the creole garden where thirty species protect each other on a lick of land, the individual unit is modest. Its power lives not in what it represents but in what it ", function() {
              var $G__269497$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"is"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269497$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269497$$);
            }(), " — material presence, weight, color, surface."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269489$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__269489$$);
        }(), function() {
          var $G__269501_JSCompiler_temp_const$jscomp$inline_4116$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
          var $G__269505$jscomp$inline_4118_JSCompiler_inline_result$jscomp$inline_4117$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Higher-order structures from simplicity."};
          $G__269505$jscomp$inline_4118_JSCompiler_inline_result$jscomp$inline_4117$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269505$jscomp$inline_4118_JSCompiler_inline_result$jscomp$inline_4117$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269505$jscomp$inline_4118_JSCompiler_inline_result$jscomp$inline_4117$$);
          $G__269501_JSCompiler_temp_const$jscomp$inline_4116$$ = {className:$G__269501_JSCompiler_temp_const$jscomp$inline_4116$$, children:[$G__269505$jscomp$inline_4118_JSCompiler_inline_result$jscomp$inline_4117$$, " When stacked, these bricks become something else entirely. Composite forms emerge — not designed from above but discovered through assembly. The whole exceeds its parts, not through complexity of component, but through the patient, improvisational logic of combination. Like polyrhythm in jazz, coherence arises from the interplay of simple, repeating elements."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269501_JSCompiler_temp_const$jscomp$inline_4116$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__269501_JSCompiler_temp_const$jscomp$inline_4116$$);
        }(), function() {
          var $G__269509_JSCompiler_temp_const$jscomp$inline_4120$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
          var $G__269513$jscomp$inline_4122_JSCompiler_inline_result$jscomp$inline_4121$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Simplicity is not ease."};
          $G__269513$jscomp$inline_4122_JSCompiler_inline_result$jscomp$inline_4121$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269513$jscomp$inline_4122_JSCompiler_inline_result$jscomp$inline_4121$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269513$jscomp$inline_4122_JSCompiler_inline_result$jscomp$inline_4121$$);
          $G__269509_JSCompiler_temp_const$jscomp$inline_4120$$ = {className:$G__269509_JSCompiler_temp_const$jscomp$inline_4120$$, children:[$G__269513$jscomp$inline_4122_JSCompiler_inline_result$jscomp$inline_4121$$, " To cast a perfect brick, to find the right pigment, to know which form belongs beside another — this is the discipline beneath the quiet surface. The minor keys sound gentle, but they demand the deepest listening. The studio is where that discipline lives: not in reaching for the obvious, but in reaching for the precise."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269509_JSCompiler_temp_const$jscomp$inline_4120$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__269509_JSCompiler_temp_const$jscomp$inline_4120$$);
        }(), function() {
          var $G__269517$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__269521$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Reaching for the right tool."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269521$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269521$$);
            }(), " Zadikian does not reach for what is always close at hand. He reaches for what is right. The plaster, the mold, the trowel — each chosen not for convenience but for fidelity to the form. In this way, ", function() {
              var $G__269525$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269525$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269525$$);
            }(), " enacts the curatorial premise of In Minor Keys: that beauty is made together, through relation, through the handmade, through the refusal to shortcut the work that matters."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269517$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__269517$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269458$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269458$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269293_props__41575__auto__$jscomp$51_vec__269288$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269293_props__41575__auto__$jscomp$51_vec__269288$$);
};
$amp$pages$landing$in_minor_keys$in_minor_keys$$ = function($G__269541_id$jscomp$100_map__269535_props__41575__auto__$jscomp$52_vec__269532$$, $G__269545$jscomp$inline_4125_JSCompiler_inline_result$jscomp$inline_4124_idx$jscomp$77_maybe_ref__41576__auto__$jscomp$52$$) {
  $G__269541_id$jscomp$100_map__269535_props__41575__auto__$jscomp$52_vec__269532$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__269541_id$jscomp$100_map__269535_props__41575__auto__$jscomp$52_vec__269532$$), $G__269545$jscomp$inline_4125_JSCompiler_inline_result$jscomp$inline_4124_idx$jscomp$77_maybe_ref__41576__auto__$jscomp$52$$], null);
  $G__269541_id$jscomp$100_map__269535_props__41575__auto__$jscomp$52_vec__269532$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__269541_id$jscomp$100_map__269535_props__41575__auto__$jscomp$52_vec__269532$$, 0, null);
  var $map__269535__$1_title$jscomp$39$$ = $APP.$cljs$core$__destructure_map$$($G__269541_id$jscomp$100_map__269535_props__41575__auto__$jscomp$52_vec__269532$$);
  $G__269541_id$jscomp$100_map__269535_props__41575__auto__$jscomp$52_vec__269532$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__269535__$1_title$jscomp$39$$, $APP.$cljs$cst$286$id$$);
  $G__269545$jscomp$inline_4125_JSCompiler_inline_result$jscomp$inline_4124_idx$jscomp$77_maybe_ref__41576__auto__$jscomp$52$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__269535__$1_title$jscomp$39$$, $APP.$cljs$cst$755$idx$$);
  var $subtitle$jscomp$9$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__269535__$1_title$jscomp$39$$, $APP.$cljs$cst$768$subtitle$$);
  $map__269535__$1_title$jscomp$39$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__269535__$1_title$jscomp$39$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__269545$jscomp$inline_4125_JSCompiler_inline_result$jscomp$inline_4124_idx$jscomp$77_maybe_ref__41576__auto__$jscomp$52$$ = {idx:$G__269545$jscomp$inline_4125_JSCompiler_inline_result$jscomp$inline_4124_idx$jscomp$77_maybe_ref__41576__auto__$jscomp$52$$, "section-hint":$subtitle$jscomp$9$$, title:$map__269535__$1_title$jscomp$39$$, "expand-button-label":"Read full statement", "preview-text":$amp$pages$landing$in_minor_keys$preview$$, "full-text":$amp$pages$landing$in_minor_keys$details$$};
  $G__269545$jscomp$inline_4125_JSCompiler_inline_result$jscomp$inline_4124_idx$jscomp$77_maybe_ref__41576__auto__$jscomp$52$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__269545$jscomp$inline_4125_JSCompiler_inline_result$jscomp$inline_4124_idx$jscomp$77_maybe_ref__41576__auto__$jscomp$52$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__269545$jscomp$inline_4125_JSCompiler_inline_result$jscomp$inline_4124_idx$jscomp$77_maybe_ref__41576__auto__$jscomp$52$$);
  $G__269541_id$jscomp$100_map__269535_props__41575__auto__$jscomp$52_vec__269532$$ = {id:$G__269541_id$jscomp$100_map__269535_props__41575__auto__$jscomp$52_vec__269532$$, children:$G__269545$jscomp$inline_4125_JSCompiler_inline_result$jscomp$inline_4124_idx$jscomp$77_maybe_ref__41576__auto__$jscomp$52$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269541_id$jscomp$100_map__269535_props__41575__auto__$jscomp$52_vec__269532$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__269541_id$jscomp$100_map__269535_props__41575__auto__$jscomp$52_vec__269532$$);
};
$amp$pages$landing$venue$preview$$ = function($G__47413$jscomp$1_map__47409_props__41658__auto__$jscomp$19_vec__47406$$, $maybe_ref__41659__auto__$jscomp$19$$) {
  $G__47413$jscomp$1_map__47409_props__41658__auto__$jscomp$19_vec__47406$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__47413$jscomp$1_map__47409_props__41658__auto__$jscomp$19_vec__47406$$), $maybe_ref__41659__auto__$jscomp$19$$], null);
  $G__47413$jscomp$1_map__47409_props__41658__auto__$jscomp$19_vec__47406$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__47413$jscomp$1_map__47409_props__41658__auto__$jscomp$19_vec__47406$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__47413$jscomp$1_map__47409_props__41658__auto__$jscomp$19_vec__47406$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__47413$jscomp$1_map__47409_props__41658__auto__$jscomp$19_vec__47406$$ = function() {
    return {className:"px-4", children:function() {
      var $G__47423$jscomp$1$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-base", "mb-6"]))), children:["The Armenia Pavilion 2026 is located across ", function() {
          var $G__47441$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"two sites"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47441$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47441$$);
        }(), " within the historic ", function() {
          var $G__47449$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Arsenale of Venice"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47449$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47449$$);
        }(), "—a grand interior studio and a prominent exterior crossing. ", "Together they form a single spatial constellation: ", function() {
          var $G__47453$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"a place for study, for work, to create, share and exhibit"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47453$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47453$$);
        }(), "."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47423$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__47423$jscomp$1$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47413$jscomp$1_map__47409_props__41658__auto__$jscomp$19_vec__47406$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__47413$jscomp$1_map__47409_props__41658__auto__$jscomp$19_vec__47406$$);
};
$amp$pages$landing$venue$details$$ = function($G__47493$jscomp$1_map__47485_props__41658__auto__$jscomp$20_vec__47482$$, $maybe_ref__41659__auto__$jscomp$20$$) {
  $G__47493$jscomp$1_map__47485_props__41658__auto__$jscomp$20_vec__47482$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__47493$jscomp$1_map__47485_props__41658__auto__$jscomp$20_vec__47482$$), $maybe_ref__41659__auto__$jscomp$20$$], null);
  $G__47493$jscomp$1_map__47485_props__41658__auto__$jscomp$20_vec__47482$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__47493$jscomp$1_map__47485_props__41658__auto__$jscomp$20_vec__47482$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__47493$jscomp$1_map__47485_props__41658__auto__$jscomp$20_vec__47482$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $is_desktop_QMARK_$jscomp$5$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__47493$jscomp$1_map__47485_props__41658__auto__$jscomp$20_vec__47482$$ = function() {
    return {className:"space-y-8", children:[function() {
      var $G__47499$jscomp$1$$ = function() {
        return {className:"px-4", children:function() {
          var $G__47505$jscomp$1$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-base", "mb-6"]))), children:["The Armenia Pavilion 2026 is located across ", function() {
              var $G__47513$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"two sites"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47513$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47513$$);
            }(), " within the historic ", function() {
              var $G__47523$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Arsenale of Venice"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47523$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47523$$);
            }(), "—a grand interior studio and a prominent exterior crossing. ", "Together they form a single spatial constellation: ", function() {
              var $G__47532$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"a place for study, for work, to create, share and exhibit"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47532$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47532$jscomp$1$$);
            }(), "."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47505$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__47505$jscomp$1$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47499$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__47499$jscomp$1$$);
    }(), function() {
      var $G__47543$$ = function() {
        return {className:"my-8", children:[function() {
          var $G__47547$$ = {dev:!1, "interactive?":$is_desktop_QMARK_$jscomp$5$$, "initial-view":$APP.$amp$pages$venue$map_config$initial_view$$, "ant-paths":$APP.$amp$pages$venue$map_config$ant_paths$$, layers:$APP.$amp$pages$venue$map_config$layers$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$map$mapbox_map$$, $G__47547$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$map$mapbox_map$$, $G__47547$$);
        }(), function() {
          var $G__47554$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "italic", "mt-4 px-4"]))), children:"* Walking path from the crossing to the pavilion — approximately 8 minutes"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47554$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__47554$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47543$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47543$$);
    }(), function() {
      var $G__47566$$ = function() {
        return {className:"px-4 flex flex-col sm:flex-row gap-4", children:[function() {
          var $G__47570$$ = {href:"/visit", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-medium;inline-flex items-center gap-2;text-sm uppercase tracking-wider;text-pink-600 dark:text-pink-300;hover:text-pink-700 dark:hover:text-pink-200;transition-colors duration-200".split(";")))), children:"See the full Visitor Guide →"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__47570$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__47570$$);
        }(), function() {
          var $G__47580$$ = {href:"https://maps.app.goo.gl/XBwAbBQcj47eHyq5A", target:"_blank", rel:"noopener noreferrer", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-medium;inline-flex items-center gap-2;text-sm uppercase tracking-wider;text-slate-500  dark:text-slate-500;hover:text-pink-600 dark:hover:text-pink-300;transition-colors duration-200".split(";")))), 
          children:"Open in Maps ↗"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__47580$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__47580$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47566$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47566$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47493$jscomp$1_map__47485_props__41658__auto__$jscomp$20_vec__47482$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47493$jscomp$1_map__47485_props__41658__auto__$jscomp$20_vec__47482$$);
};
$amp$pages$landing$venue$location_section$$ = function($G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$21_vec__47616$$, $G__47637$jscomp$inline_4257_JSCompiler_inline_result$jscomp$inline_4256_map__47619__$1_maybe_ref__41659__auto__$jscomp$21_title$jscomp$40$$) {
  $G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$21_vec__47616$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$21_vec__47616$$), $G__47637$jscomp$inline_4257_JSCompiler_inline_result$jscomp$inline_4256_map__47619__$1_maybe_ref__41659__auto__$jscomp$21_title$jscomp$40$$], null);
  $G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$21_vec__47616$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$21_vec__47616$$, 0, null);
  $G__47637$jscomp$inline_4257_JSCompiler_inline_result$jscomp$inline_4256_map__47619__$1_maybe_ref__41659__auto__$jscomp$21_title$jscomp$40$$ = $APP.$cljs$core$__destructure_map$$($G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$21_vec__47616$$);
  $G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$21_vec__47616$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47637$jscomp$inline_4257_JSCompiler_inline_result$jscomp$inline_4256_map__47619__$1_maybe_ref__41659__auto__$jscomp$21_title$jscomp$40$$, $APP.$cljs$cst$286$id$$);
  $G__47637$jscomp$inline_4257_JSCompiler_inline_result$jscomp$inline_4256_map__47619__$1_maybe_ref__41659__auto__$jscomp$21_title$jscomp$40$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47637$jscomp$inline_4257_JSCompiler_inline_result$jscomp$inline_4256_map__47619__$1_maybe_ref__41659__auto__$jscomp$21_title$jscomp$40$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__47637$jscomp$inline_4257_JSCompiler_inline_result$jscomp$inline_4256_map__47619__$1_maybe_ref__41659__auto__$jscomp$21_title$jscomp$40$$ = {title:$APP.$cljs$core$truth_$$($G__47637$jscomp$inline_4257_JSCompiler_inline_result$jscomp$inline_4256_map__47619__$1_maybe_ref__41659__auto__$jscomp$21_title$jscomp$40$$) ? $G__47637$jscomp$inline_4257_JSCompiler_inline_result$jscomp$inline_4256_map__47619__$1_maybe_ref__41659__auto__$jscomp$21_title$jscomp$40$$ : "The Venue", "expand-button-label":"Explore the venue", 
  "preview-text":$amp$pages$landing$venue$preview$$, "full-text":$amp$pages$landing$venue$details$$};
  $G__47637$jscomp$inline_4257_JSCompiler_inline_result$jscomp$inline_4256_map__47619__$1_maybe_ref__41659__auto__$jscomp$21_title$jscomp$40$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__47637$jscomp$inline_4257_JSCompiler_inline_result$jscomp$inline_4256_map__47619__$1_maybe_ref__41659__auto__$jscomp$21_title$jscomp$40$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__47637$jscomp$inline_4257_JSCompiler_inline_result$jscomp$inline_4256_map__47619__$1_maybe_ref__41659__auto__$jscomp$21_title$jscomp$40$$);
  $G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$21_vec__47616$$ = {id:$G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$21_vec__47616$$, children:$G__47637$jscomp$inline_4257_JSCompiler_inline_result$jscomp$inline_4256_map__47619__$1_maybe_ref__41659__auto__$jscomp$21_title$jscomp$40$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$21_vec__47616$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$21_vec__47616$$);
};
$amp$pages$landing$hero$mobile_hero_section$$ = function($G__56316_props__41646__auto__$jscomp$49_vec__56312$$) {
  $APP.$helix$core$extract_cljs_props$$($G__56316_props__41646__auto__$jscomp$49_vec__56312$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__56316_props__41646__auto__$jscomp$49_vec__56312$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ctx$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$769$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__56316_props__41646__auto__$jscomp$49_vec__56312$$, 0, null);
  var $is_active_QMARK_$jscomp$10$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__56316_props__41646__auto__$jscomp$49_vec__56312$$, 1, null), $clone_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$912$boxDecorationBreak$$, "clone", $cljs$cst$913$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__56316_props__41646__auto__$jscomp$49_vec__56312$$ = function() {
    return {id:"video", ref:$outer_ctx$jscomp$1$$, className:"relative w-full overflow-hidden", children:function() {
      var $G__56320$$ = function() {
        return {className:"w-full h-screen relative flex flex-col", children:[function() {
          var $G__56324_G__56328$jscomp$inline_4130$$ = {"allow-audio?":!1, "playback-id":"fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo", "should-play?":$is_active_QMARK_$jscomp$10$$};
          $G__56324_G__56328$jscomp$inline_4130$$ = {className:"absolute inset-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$hero$lazy_video_background$$, $G__56324_G__56328$jscomp$inline_4130$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$hero$lazy_video_background$$, $G__56324_G__56328$jscomp$inline_4130$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__56324_G__56328$jscomp$inline_4130$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__56324_G__56328$jscomp$inline_4130$$);
        }(), function() {
          var $G__56332$$ = function() {
            return {className:"absolute top-20 right-8 z-20", children:function() {
              var $G__56336$$ = function() {
                return {className:"cursor-pointer w-24 sm:w-28 lg:w-32", onClick:function() {
                  return window.open("https://www.labiennale.org/en/art/2026", "_blank");
                }, children:function() {
                  var $G__56340$$ = {src:"images/graphics/61_biennale_logo_red.svg", className:"opacity-90"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__56340$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__56340$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__56336$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__56336$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__56332$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__56332$$);
        }(), function() {
          var $G__56344$$ = function() {
            return {className:"relative z-10 flex-1 flex flex-col items-center justify-center px-8", children:[function() {
              var $G__56348$jscomp$1$$ = {className:"w-4/5 sm:w-2/3 max-w-2xl aspect-square mb-10 bg-amber-400 opacity-90", style:{WebkitMaskImage:$APP.$helix$impl$props$__GT_js$$("url(images/graphics/the_studio_logo.svg)"), maskImage:$APP.$helix$impl$props$__GT_js$$("url(images/graphics/the_studio_logo.svg)"), WebkitMaskSize:$APP.$helix$impl$props$__GT_js$$("contain"), maskSize:$APP.$helix$impl$props$__GT_js$$("contain"), WebkitMaskRepeat:$APP.$helix$impl$props$__GT_js$$("no-repeat"), maskRepeat:$APP.$helix$impl$props$__GT_js$$("no-repeat"), 
              WebkitMaskPosition:$APP.$helix$impl$props$__GT_js$$("center"), maskPosition:$APP.$helix$impl$props$__GT_js$$("center")}};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__56348$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__56348$jscomp$1$$);
            }(), function() {
              var $G__56354$jscomp$1_JSCompiler_temp_const$jscomp$inline_4132$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-xs sm:text-sm uppercase tracking-[0.2em] max-w-md text-center leading-loose text-white/90"])));
              var $G__56358$jscomp$inline_4134_JSCompiler_inline_result$jscomp$inline_4133$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/50 px-3 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"Armenia Pavilion · 61st International Art Exhibition La Biennale di Venezia"};
              $G__56358$jscomp$inline_4134_JSCompiler_inline_result$jscomp$inline_4133$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__56358$jscomp$inline_4134_JSCompiler_inline_result$jscomp$inline_4133$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__56358$jscomp$inline_4134_JSCompiler_inline_result$jscomp$inline_4133$$);
              $G__56354$jscomp$1_JSCompiler_temp_const$jscomp$inline_4132$$ = {className:$G__56354$jscomp$1_JSCompiler_temp_const$jscomp$inline_4132$$, children:$G__56358$jscomp$inline_4134_JSCompiler_inline_result$jscomp$inline_4133$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__56354$jscomp$1_JSCompiler_temp_const$jscomp$inline_4132$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__56354$jscomp$1_JSCompiler_temp_const$jscomp$inline_4132$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__56344$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__56344$$);
        }(), function() {
          var $G__56362_JSCompiler_temp_const$jscomp$inline_4136$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-1\n                text-white/80 hover:text-white transition-colors", "font-display", "text-xs uppercase tracking-[0.2em]"])));
          var $G__56366$jscomp$inline_4138_JSCompiler_inline_result$jscomp$inline_4137$$ = {className:"text-lg animate-bounce", children:"↓"};
          $G__56366$jscomp$inline_4138_JSCompiler_inline_result$jscomp$inline_4137$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__56366$jscomp$inline_4138_JSCompiler_inline_result$jscomp$inline_4137$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__56366$jscomp$inline_4138_JSCompiler_inline_result$jscomp$inline_4137$$);
          $G__56362_JSCompiler_temp_const$jscomp$inline_4136$$ = {href:"#press-release", className:$G__56362_JSCompiler_temp_const$jscomp$inline_4136$$, children:["Learn More", $G__56366$jscomp$inline_4138_JSCompiler_inline_result$jscomp$inline_4137$$]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__56362_JSCompiler_temp_const$jscomp$inline_4136$$) : $APP.$helix$core$jsxs$$.call(null, "a", $G__56362_JSCompiler_temp_const$jscomp$inline_4136$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__56320$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__56320$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__56316_props__41646__auto__$jscomp$49_vec__56312$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__56316_props__41646__auto__$jscomp$49_vec__56312$$);
};
$amp$pages$landing$teaser$teaser_section$$ = function($G__268899_props__41575__auto__$jscomp$53_vec__268881$$) {
  $APP.$helix$core$extract_cljs_props$$($G__268899_props__41575__auto__$jscomp$53_vec__268881$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ref$$ = $APP.$helix$hooks$use_ref$$("outer-ref");
  $G__268899_props__41575__auto__$jscomp$53_vec__268881$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$769$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268899_props__41575__auto__$jscomp$53_vec__268881$$, 0, null);
  var $is_active_QMARK_$jscomp$11$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268899_props__41575__auto__$jscomp$53_vec__268881$$, 1, null), $label_class$jscomp$1$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-semibold", "text-[10px] uppercase tracking-[0.2em]", "text-amber-600  dark:text-amber-300"])), $clone_style$jscomp$1$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 
  2, [$cljs$cst$912$boxDecorationBreak$$, "clone", $cljs$cst$913$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__268899_props__41575__auto__$jscomp$53_vec__268881$$ = function() {
    return {id:"teaser", ref:$outer_ref$$, className:"relative w-full min-h-screen overflow-hidden", children:[function() {
      var $G__268911_G__268915$jscomp$inline_4141$$ = {"allow-audio?":!1, "playback-id":"Izp5007Abkc00t4Ubns7pAiqq2zG7JIp01tvAoaVOny7O00", "should-play?":$is_active_QMARK_$jscomp$11$$};
      $G__268911_G__268915$jscomp$inline_4141$$ = {className:"absolute inset-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$teaser$lazy_video$$, $G__268911_G__268915$jscomp$inline_4141$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$teaser$lazy_video$$, $G__268911_G__268915$jscomp$inline_4141$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268911_G__268915$jscomp$inline_4141$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268911_G__268915$jscomp$inline_4141$$);
    }(), function() {
      var $G__268929$$ = {className:"absolute inset-0 z-[1] pointer-events-none", style:{background:$APP.$helix$impl$props$__GT_js$$("linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.1) 100%), linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.05) 50%)")}};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268929$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268929$$);
    }(), function() {
      var $G__268941$$ = function() {
        return {className:"relative z-10 flex flex-col justify-center\n               min-h-screen px-6 sm:px-12 lg:px-20\n               py-16 sm:py-24\n               max-w-4xl", children:[function() {
          var $G__268949_JSCompiler_temp_const$jscomp$inline_4143$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-bold", "uppercase tracking-wider\n                leading-relaxed text-4xl sm:text-5xl lg:text-6xl", "text-slate-950  dark:text-white", "mb-6"])));
          var $G__268954$jscomp$inline_4145_JSCompiler_inline_result$jscomp$inline_4144$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/70 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"The Studio"};
          $G__268954$jscomp$inline_4145_JSCompiler_inline_result$jscomp$inline_4144$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268954$jscomp$inline_4145_JSCompiler_inline_result$jscomp$inline_4144$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268954$jscomp$inline_4145_JSCompiler_inline_result$jscomp$inline_4144$$);
          $G__268949_JSCompiler_temp_const$jscomp$inline_4143$$ = {className:$G__268949_JSCompiler_temp_const$jscomp$inline_4143$$, children:$G__268954$jscomp$inline_4145_JSCompiler_inline_result$jscomp$inline_4144$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__268949_JSCompiler_temp_const$jscomp$inline_4143$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__268949_JSCompiler_temp_const$jscomp$inline_4143$$);
        }(), function() {
          var $G__268964_JSCompiler_temp_const$jscomp$inline_4147$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-sm sm:text-base uppercase tracking-[0.15em]\n                leading-loose text-white/90 mb-8 max-w-xl"])));
          var $G__268974$jscomp$inline_4149_JSCompiler_inline_result$jscomp$inline_4148$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/50 px-3 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"A living studio at the heart of the Venice Biennale"};
          $G__268974$jscomp$inline_4149_JSCompiler_inline_result$jscomp$inline_4148$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268974$jscomp$inline_4149_JSCompiler_inline_result$jscomp$inline_4148$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268974$jscomp$inline_4149_JSCompiler_inline_result$jscomp$inline_4148$$);
          $G__268964_JSCompiler_temp_const$jscomp$inline_4147$$ = {className:$G__268964_JSCompiler_temp_const$jscomp$inline_4147$$, children:$G__268974$jscomp$inline_4149_JSCompiler_inline_result$jscomp$inline_4148$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__268964_JSCompiler_temp_const$jscomp$inline_4147$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__268964_JSCompiler_temp_const$jscomp$inline_4147$$);
        }(), function() {
          var $G__268984_G__268993$jscomp$inline_4305_JSCompiler_temp_const$jscomp$inline_4306$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-body", "text-base sm:text-lg leading-relaxed text-white/90"])));
          var $G__268997$jscomp$inline_4308_JSCompiler_inline_result$jscomp$inline_4307$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"Over six months, sculptor Zadik Zadikian and his team will occupy the Arsenale Militare—casting, assembling, and building in real time. Nothing is fixed. Nothing is final. The work is the making itself."};
          $G__268997$jscomp$inline_4308_JSCompiler_inline_result$jscomp$inline_4307$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268997$jscomp$inline_4308_JSCompiler_inline_result$jscomp$inline_4307$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268997$jscomp$inline_4308_JSCompiler_inline_result$jscomp$inline_4307$$);
          $G__268984_G__268993$jscomp$inline_4305_JSCompiler_temp_const$jscomp$inline_4306$$ = {className:$G__268984_G__268993$jscomp$inline_4305_JSCompiler_temp_const$jscomp$inline_4306$$, children:$G__268997$jscomp$inline_4308_JSCompiler_inline_result$jscomp$inline_4307$$};
          $G__268984_G__268993$jscomp$inline_4305_JSCompiler_temp_const$jscomp$inline_4306$$ = {className:"space-y-3 mb-10 max-w-lg", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__268984_G__268993$jscomp$inline_4305_JSCompiler_temp_const$jscomp$inline_4306$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__268984_G__268993$jscomp$inline_4305_JSCompiler_temp_const$jscomp$inline_4306$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268984_G__268993$jscomp$inline_4305_JSCompiler_temp_const$jscomp$inline_4306$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268984_G__268993$jscomp$inline_4305_JSCompiler_temp_const$jscomp$inline_4306$$);
        }(), function() {
          var $G__269007$$ = function() {
            return {className:"grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10", children:[function() {
              var $G__269014$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__269021$$ = {className:$APP.$helix$impl$props$normalize_class$$($label_class$jscomp$1$$), children:"Opening"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269021$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269021$$);
                }(), function() {
                  var $G__269026_JSCompiler_temp_const$jscomp$inline_4155$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-xs sm:text-sm text-white/90"])));
                  var $G__269031$jscomp$inline_4157_JSCompiler_inline_result$jscomp$inline_4156$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"9 May – 22 November 2026"};
                  $G__269031$jscomp$inline_4157_JSCompiler_inline_result$jscomp$inline_4156$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269031$jscomp$inline_4157_JSCompiler_inline_result$jscomp$inline_4156$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269031$jscomp$inline_4157_JSCompiler_inline_result$jscomp$inline_4156$$);
                  $G__269026_JSCompiler_temp_const$jscomp$inline_4155$$ = {className:$G__269026_JSCompiler_temp_const$jscomp$inline_4155$$, children:$G__269031$jscomp$inline_4157_JSCompiler_inline_result$jscomp$inline_4156$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269026_JSCompiler_temp_const$jscomp$inline_4155$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269026_JSCompiler_temp_const$jscomp$inline_4155$$);
                }(), function() {
                  var $G__269035$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-medium", "text-xs", "text-amber-600/80 dark:text-amber-300/80", "mt-1"]))), children:"Preview: 6, 7, 8 May"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269035$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269035$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269014$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269014$$);
            }(), function() {
              var $G__269039$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__269043$$ = {className:$APP.$helix$impl$props$normalize_class$$($label_class$jscomp$1$$), children:"Venue"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269043$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269043$$);
                }(), function() {
                  var $G__269047_JSCompiler_temp_const$jscomp$inline_4159$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-xs sm:text-sm text-white/90 hover:text-white\n                      underline underline-offset-4 decoration-white/30 hover:decoration-white/60\n                      transition-colors block whitespace-nowrap"])));
                  var $G__269051$jscomp$inline_4161_JSCompiler_inline_result$jscomp$inline_4160$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"Arsenale Militare, Venice"};
                  $G__269051$jscomp$inline_4161_JSCompiler_inline_result$jscomp$inline_4160$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269051$jscomp$inline_4161_JSCompiler_inline_result$jscomp$inline_4160$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269051$jscomp$inline_4161_JSCompiler_inline_result$jscomp$inline_4160$$);
                  $G__269047_JSCompiler_temp_const$jscomp$inline_4159$$ = {href:"https://maps.app.goo.gl/QvYkqwN1Bv7L9VDn7", target:"_blank", rel:"noopener noreferrer", className:$G__269047_JSCompiler_temp_const$jscomp$inline_4159$$, children:$G__269051$jscomp$inline_4161_JSCompiler_inline_result$jscomp$inline_4160$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__269047_JSCompiler_temp_const$jscomp$inline_4159$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__269047_JSCompiler_temp_const$jscomp$inline_4159$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269039$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269039$$);
            }(), function() {
              var $G__269056$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__269060$$ = {className:$APP.$helix$impl$props$normalize_class$$($label_class$jscomp$1$$), children:"Pavilion"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269060$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269060$$);
                }(), function() {
                  var $G__269064_JSCompiler_temp_const$jscomp$inline_4163$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-xs sm:text-sm text-white/90"])));
                  var $G__269068$jscomp$inline_4165_JSCompiler_inline_result$jscomp$inline_4164$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"Republic of Armenia"};
                  $G__269068$jscomp$inline_4165_JSCompiler_inline_result$jscomp$inline_4164$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269068$jscomp$inline_4165_JSCompiler_inline_result$jscomp$inline_4164$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269068$jscomp$inline_4165_JSCompiler_inline_result$jscomp$inline_4164$$);
                  $G__269064_JSCompiler_temp_const$jscomp$inline_4163$$ = {className:$G__269064_JSCompiler_temp_const$jscomp$inline_4163$$, children:$G__269068$jscomp$inline_4165_JSCompiler_inline_result$jscomp$inline_4164$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269064_JSCompiler_temp_const$jscomp$inline_4163$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269064_JSCompiler_temp_const$jscomp$inline_4163$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269056$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269056$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269007$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269007$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268941$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__268941$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268899_props__41575__auto__$jscomp$53_vec__268881$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__268899_props__41575__auto__$jscomp$53_vec__268881$$);
};
$APP.$amp$pages$landing$page$landing_view$$ = function($G__56376_props__41646__auto__$jscomp$50$$) {
  $APP.$helix$core$extract_cljs_props$$($G__56376_props__41646__auto__$jscomp$50$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $container_ref$jscomp$4$$ = $APP.$helix$hooks$use_ref$$("container-ref"), $is_desktop_QMARK_$jscomp$6$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__56376_props__41646__auto__$jscomp$50$$ = function() {
    return {ref:$container_ref$jscomp$4$$, className:$APP.$helix$impl$props$normalize_class$$("overflow-x-hidden grey-grad " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-900  dark:text-slate-100")), children:[$APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$6$$) ? function() {
      var $G__56380$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$nav$logo$logo_nav$$, $G__56380$$) : $APP.$helix$core$jsx$$.call(null, $amp$nav$logo$logo_nav$$, $G__56380$$);
    }() : null, function() {
      var $G__56382_G__56387$jscomp$inline_3613$$ = {};
      $G__56382_G__56387$jscomp$inline_3613$$ = {"section-id":"hero", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$hero$mobile_hero_section$$, $G__56382_G__56387$jscomp$inline_3613$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$hero$mobile_hero_section$$, $G__56382_G__56387$jscomp$inline_3613$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$ui$section$section$$, $G__56382_G__56387$jscomp$inline_3613$$, "hero") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section$section$$, $G__56382_G__56387$jscomp$inline_3613$$, "hero");
    }(), function() {
      var $G__56389$jscomp$1_G__56394$jscomp$inline_3616$$ = {};
      $G__56389$jscomp$1_G__56394$jscomp$inline_3616$$ = {"section-id":"teaser", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$teaser$teaser_section$$, $G__56389$jscomp$1_G__56394$jscomp$inline_3616$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$teaser$teaser_section$$, $G__56389$jscomp$1_G__56394$jscomp$inline_3616$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$ui$section$section$$, $G__56389$jscomp$1_G__56394$jscomp$inline_3616$$, "teaser") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section$section$$, $G__56389$jscomp$1_G__56394$jscomp$inline_3616$$, "teaser");
    }(), function() {
      var $G__56396$jscomp$1$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$("w-full max-w-full overflow-x-hidden flex justify-center"), children:function() {
          var $G__56400$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("flex flex-col " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("w-full lg:w-8/12 min-w-0")), children:[function() {
              var $G__56404$jscomp$1$$ = {id:"press-release", title:"Press Release"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$landing$press_release$press_release$$, $G__56404$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$landing$press_release$press_release$$, $G__56404$jscomp$1$$);
            }(), function() {
              var $G__56408$$ = {id:"about-studio", title:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$landing$studio$about_studio$$, $G__56408$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$landing$studio$about_studio$$, $G__56408$$);
            }(), function() {
              var $G__56412$$ = {id:"venue", title:"The Venue"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$venue$location_section$$, $G__56412$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$venue$location_section$$, $G__56412$$);
            }(), function() {
              var $G__56416$jscomp$1$$ = {id:"in-minor-keys", title:"In Minor Keys"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$in_minor_keys$$, $G__56416$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$in_minor_keys$$, $G__56416$jscomp$1$$);
            }(), function() {
              var $G__56420$jscomp$1$$ = {id:"artist", title:"The Artist"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$artist$artist_section$$, $G__56420$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$artist$artist_section$$, $G__56420$jscomp$1$$);
            }(), function() {
              var $G__56424$$ = {id:"curators", title:"Curators"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$curators$curators_section$$, $G__56424$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$curators$curators_section$$, $G__56424$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__56400$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__56400$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__56396$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__56396$jscomp$1$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__56376_props__41646__auto__$jscomp$50$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__56376_props__41646__auto__$jscomp$50$$);
};
$cljs$cst$916$visible_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "visible?", "visible?", 2129863715);
$cljs$cst$914$img$$ = new $APP.$cljs$core$Keyword$$(null, "img", "img", 1442687358);
$cljs$cst$912$boxDecorationBreak$$ = new $APP.$cljs$core$Keyword$$(null, "boxDecorationBreak", "boxDecorationBreak", 826536500);
$cljs$cst$910$markers_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "markers?", "markers?", -2073688636);
$cljs$cst$913$WebkitBoxDecorationBreak$$ = new $APP.$cljs$core$Keyword$$(null, "WebkitBoxDecorationBreak", "WebkitBoxDecorationBreak", 1903427859);
$cljs$cst$917$attribution$$ = new $APP.$cljs$core$Keyword$$(null, "attribution", "attribution", 1937239286);
$cljs$cst$915$bio$$ = new $APP.$cljs$core$Keyword$$(null, "bio", "bio", -331851886);
$cljs$cst$909$scroll_ref$$ = new $APP.$cljs$core$Keyword$$(null, "scroll-ref", "scroll-ref", -1108339867);
$cljs$cst$911$debug_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "debug?", "debug?", -1831756173);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("landing-view");
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$nav$logo$logo_nav$$, '(hooks/use-ref "comp-ref")(use-scroll-trigger comp-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y -250}, :is-on? is-active?})', 
null, null) : (void 0).call(null, $amp$nav$logo$logo_nav$$, '(hooks/use-ref "comp-ref")(use-scroll-trigger comp-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y -250}, :is-on? is-active?})', null, null)), $APP.$helix$core$register_BANG_$$($amp$nav$logo$logo_nav$$, "amp.nav.logo/logo-nav"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$artist$artist_section$$, '(hooks/use-ref "artist-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$pages$landing$artist$artist_section$$, '(hooks/use-ref "artist-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$artist$artist_section$$, "amp.pages.landing.artist/artist-section"));
var $amp$pages$landing$curators$curators$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Tony Shafrazi", $APP.$cljs$cst$796$role$$, "Curator", $cljs$cst$914$img$$, "https://atd-722658831.imgix.net/committee/tony.png", $cljs$cst$915$bio$$, "Tony Shafrazi (b. 1943, Abadan, Iran) is a renowned art dealer, gallerist, and curator. Trained at the Royal College of Art in London, he moved to New York in 1969 and opened the Tony Shafrazi Gallery in 1979, championing Jean-Michel Basquiat, Keith Haring, and Kenny Scharf alongside Picasso, Francis Bacon, and Warhol. He first met Zadik Zadikian while the artist was working with Richard Serra, and has supported his work for decades."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Tina Chakarian", $APP.$cljs$cst$796$role$$, "Curator", $cljs$cst$914$img$$, "https://atd-722658831.imgix.net/committee/tina.png", $cljs$cst$915$bio$$, "Tina Chakarian is a curator based in Boston and Yerevan. Born in Beirut, she studied Visual Arts at UCLA and Tufts University. Since 2015, she has served as Commissioner and Development Director of the Armenian Pavilion at La Biennale di Venezia, playing a central role in shaping Armenia’s sustained presence on the global stage."], 
null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$curators$curator_card$$, "", null, null) : (void 0).call(null, $amp$pages$landing$curators$curator_card$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$curators$curator_card$$, 
"amp.pages.landing.curators/curator-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$curators$curators_section$$, '(hooks/use-ref "curators-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$pages$landing$curators$curators_section$$, '(hooks/use-ref "curators-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$curators$curators_section$$, "amp.pages.landing.curators/curators-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$in_minor_keys$pull_quote$$, "", null, null) : (void 0).call(null, $amp$pages$landing$in_minor_keys$pull_quote$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$in_minor_keys$pull_quote$$, 
"amp.pages.landing.in-minor-keys/pull-quote"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$in_minor_keys$curator_card$$, "", null, null) : (void 0).call(null, $amp$pages$landing$in_minor_keys$curator_card$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$pages$landing$in_minor_keys$curator_card$$, "amp.pages.landing.in-minor-keys/curator-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$in_minor_keys$preview$$, '(hooks/use-ref "imk-preview-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$pages$landing$in_minor_keys$preview$$, '(hooks/use-ref "imk-preview-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$in_minor_keys$preview$$, "amp.pages.landing.in-minor-keys/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$in_minor_keys$details$$, '(hooks/use-ref "imk-details-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$pages$landing$in_minor_keys$details$$, '(hooks/use-ref "imk-details-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$in_minor_keys$details$$, "amp.pages.landing.in-minor-keys/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$in_minor_keys$in_minor_keys$$, "", null, null) : (void 0).call(null, $amp$pages$landing$in_minor_keys$in_minor_keys$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$pages$landing$in_minor_keys$in_minor_keys$$, "amp.pages.landing.in-minor-keys/in-minor-keys"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$venue$preview$$, "", null, null) : (void 0).call(null, $amp$pages$landing$venue$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$venue$preview$$, 
"amp.pages.landing.venue/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$venue$details$$, "(use-touch-enabled)", null, null) : (void 0).call(null, $amp$pages$landing$venue$details$$, "(use-touch-enabled)", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$venue$details$$, "amp.pages.landing.venue/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$venue$location_section$$, "", null, null) : (void 0).call(null, $amp$pages$landing$venue$location_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$venue$location_section$$, 
"amp.pages.landing.venue/location-section"));
var $amp$pages$landing$hero$lazy_video_background$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$ui$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$hero$mobile_hero_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null) : (void 0).call(null, 
$amp$pages$landing$hero$mobile_hero_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$hero$mobile_hero_section$$, "amp.pages.landing.hero/mobile-hero-section"));
var $amp$pages$landing$teaser$lazy_video$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$ui$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$teaser$teaser_section$$, '(hooks/use-ref "outer-ref")(use-scroll-trigger outer-ref {:end "bottom"})', null, null) : (void 0).call(null, 
$amp$pages$landing$teaser$teaser_section$$, '(hooks/use-ref "outer-ref")(use-scroll-trigger outer-ref {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$teaser$teaser_section$$, "amp.pages.landing.teaser/teaser-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$pages$landing$page$landing_view$$, '(hooks/use-ref "container-ref")(use-touch-enabled)', null, null) : (void 0).call(null, $APP.$amp$pages$landing$page$landing_view$$, 
'(hooks/use-ref "container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$pages$landing$page$landing_view$$, "amp.pages.landing.page/landing-view"));
$APP.$module$contents$shadow$loader_set_loaded$$();

}).call(this);