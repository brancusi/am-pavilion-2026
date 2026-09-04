(function(){
'use strict';
var $amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$, $amp$nav$logo$logo_nav$$, $amp$pages$landing$artist$artist_section$$, $amp$pages$landing$curators$curator_card$$, $amp$pages$landing$curators$curators_section$$, $amp$pages$landing$in_minor_keys$pull_quote$$, $amp$pages$landing$in_minor_keys$curator_card$$, $amp$pages$landing$in_minor_keys$preview$$, $amp$pages$landing$in_minor_keys$details$$, $amp$pages$landing$in_minor_keys$in_minor_keys$$, $amp$pages$landing$venue$preview$$, 
$amp$pages$landing$venue$details$$, $amp$pages$landing$venue$location_section$$, $amp$pages$landing$hero$mobile_hero_section$$, $amp$pages$landing$teaser$teaser_section$$, $cljs$cst$944$visible_QMARK_$$, $cljs$cst$942$img$$, $cljs$cst$940$boxDecorationBreak$$, $cljs$cst$938$markers_QMARK_$$, $cljs$cst$941$WebkitBoxDecorationBreak$$, $cljs$cst$945$attribution$$, $cljs$cst$943$bio$$, $cljs$cst$937$scroll_ref$$, $cljs$cst$939$debug_QMARK_$$;
$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$ = function($ref$jscomp$26$$, $G__50325_50346_p__50310_scroll_ref$$) {
  var $is_active_QMARK_$jscomp$8_map__50312__$1$$ = $APP.$cljs$core$__destructure_map$$($G__50325_50346_p__50310_scroll_ref$$), $on_toggle$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($is_active_QMARK_$jscomp$8_map__50312__$1$$, $APP.$cljs$cst$802$on_toggle$$), $on_enter$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($is_active_QMARK_$jscomp$8_map__50312__$1$$, $APP.$cljs$cst$753$on_enter$$), $start$jscomp$178$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$8_map__50312__$1$$, 
  $APP.$cljs$cst$269$start$$, "top center"), $end$jscomp$48$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$8_map__50312__$1$$, $APP.$cljs$cst$770$end$$, "bottom");
  $G__50325_50346_p__50310_scroll_ref$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($is_active_QMARK_$jscomp$8_map__50312__$1$$, $cljs$cst$937$scroll_ref$$);
  var $markers_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$8_map__50312__$1$$, $cljs$cst$938$markers_QMARK_$$, !1);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$8_map__50312__$1$$, $cljs$cst$939$debug_QMARK_$$, !1);
  var $vec__50313_visited_QMARK_$jscomp$2$$ = $APP.$helix$hooks$use_state$$(!1);
  $is_active_QMARK_$jscomp$8_map__50312__$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__50313_visited_QMARK_$jscomp$2$$, 0, null);
  var $set_is_active_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__50313_visited_QMARK_$jscomp$2$$, 1, null), $G__50324_50345_vec__50316$$ = $APP.$helix$hooks$use_state$$(!1);
  $vec__50313_visited_QMARK_$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__50324_50345_vec__50316$$, 0, null);
  var $set_visited_BANG_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__50324_50345_vec__50316$$, 1, null);
  $G__50324_50345_vec__50316$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $st$jscomp$2$$ = $APP.$module$node_modules$gsap$ScrollTrigger$$.ScrollTrigger.create({trigger:$APP.$cljs$core$_deref$$($ref$jscomp$26$$), start:$start$jscomp$178$$, end:$end$jscomp$48$$, invalidateOnRefresh:!0, onRefresh:function() {
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
  $G__50325_50346_p__50310_scroll_ref$$ = [$ref$jscomp$26$$, $G__50325_50346_p__50310_scroll_ref$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__50324_50345_vec__50316$$, $G__50325_50346_p__50310_scroll_ref$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__50324_50345_vec__50316$$, $G__50325_50346_p__50310_scroll_ref$$);
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$vec__50313_visited_QMARK_$jscomp$2$$, $is_active_QMARK_$jscomp$8_map__50312__$1$$], null);
};
$amp$nav$logo$logo_nav$$ = function($G__45522_is_active_QMARK_$jscomp$9_props__41911__auto__$jscomp$7_vec__45506$$) {
  $APP.$helix$core$extract_cljs_props$$($G__45522_is_active_QMARK_$jscomp$9_props__41911__auto__$jscomp$7_vec__45506$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__45522_is_active_QMARK_$jscomp$9_props__41911__auto__$jscomp$7_vec__45506$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$269$start$$, function() {
    return window.innerHeight - window.innerHeight / 8;
  }, $APP.$cljs$cst$770$end$$, "1000000px", $cljs$cst$938$markers_QMARK_$$, !1, $cljs$cst$939$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45522_is_active_QMARK_$jscomp$9_props__41911__auto__$jscomp$7_vec__45506$$, 0, null);
  $G__45522_is_active_QMARK_$jscomp$9_props__41911__auto__$jscomp$7_vec__45506$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45522_is_active_QMARK_$jscomp$9_props__41911__auto__$jscomp$7_vec__45506$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$);
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$615$target$$, $comp_ref$$, $APP.$cljs$cst$744$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$411$y$$, 0], null), $APP.$cljs$cst$746$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$411$y$$, -250], null), $APP.$cljs$cst$742$is_on_QMARK_$$, $G__45522_is_active_QMARK_$jscomp$9_props__41911__auto__$jscomp$7_vec__45506$$], 
  null));
  $G__45522_is_active_QMARK_$jscomp$9_props__41911__auto__$jscomp$7_vec__45506$$ = function() {
    return {ref:$comp_ref$$, className:"fixed\n                    opacity-90\n                    z-30\n                    right-8\n                    top-20\n                    flex flex-col items-end gap-3", children:function() {
      var $G__45530$$ = function() {
        return {className:"w-28 lg:w-32", children:[function() {
          var $G__45538$$ = function() {
            return {className:"cursor-pointer", onClick:function() {
              return window.open("https://www.labiennale.org/en/art/2026", "_blank");
            }, children:function() {
              var $G__45548$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"invert dark:invert-0"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__45548$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__45548$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45538$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45538$$);
        }(), function() {
          var $G__45556$$ = function() {
            return {className:"mt-4", children:function() {
              var $G__45562$$ = function() {
                return {title:"Donate Now", "additional-classes":"w-full justify-center", size:$APP.$cljs$cst$717$sm$$, "bg-opacity":0.8, "on-click":function() {
                  return $APP.$reitit$frontend$easy$push_state$cljs$0core$0IFn$0_invoke$0arity$01$$();
                }};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$button$main_button$$, $G__45562$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$button$main_button$$, $G__45562$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45556$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45556$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45530$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45530$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45522_is_active_QMARK_$jscomp$9_props__41911__auto__$jscomp$7_vec__45506$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45522_is_active_QMARK_$jscomp$9_props__41911__auto__$jscomp$7_vec__45506$$);
};
$amp$pages$landing$artist$artist_section$$ = function($G__49503$jscomp$1_map__49484_map__49484__$1_props__41642__auto__$jscomp$23_vec__49481_vec__49494$$, $maybe_ref__41643__auto__$jscomp$23$$) {
  $G__49503$jscomp$1_map__49484_map__49484__$1_props__41642__auto__$jscomp$23_vec__49481_vec__49494$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__49503$jscomp$1_map__49484_map__49484__$1_props__41642__auto__$jscomp$23_vec__49481_vec__49494$$), $maybe_ref__41643__auto__$jscomp$23$$], null);
  $G__49503$jscomp$1_map__49484_map__49484__$1_props__41642__auto__$jscomp$23_vec__49481_vec__49494$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__49503$jscomp$1_map__49484_map__49484__$1_props__41642__auto__$jscomp$23_vec__49481_vec__49494$$, 0, null);
  $G__49503$jscomp$1_map__49484_map__49484__$1_props__41642__auto__$jscomp$23_vec__49481_vec__49494$$ = $APP.$cljs$core$__destructure_map$$($G__49503$jscomp$1_map__49484_map__49484__$1_props__41642__auto__$jscomp$23_vec__49481_vec__49494$$);
  var $id$jscomp$98$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__49503$jscomp$1_map__49484_map__49484__$1_props__41642__auto__$jscomp$23_vec__49481_vec__49494$$, $APP.$cljs$cst$286$id$$), $title$jscomp$39$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__49503$jscomp$1_map__49484_map__49484__$1_props__41642__auto__$jscomp$23_vec__49481_vec__49494$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$27$$ = $APP.$helix$hooks$use_ref$$("artist-ref");
  $G__49503$jscomp$1_map__49484_map__49484__$1_props__41642__auto__$jscomp$23_vec__49481_vec__49494$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$27$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$751$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__49503$jscomp$1_map__49484_map__49484__$1_props__41642__auto__$jscomp$23_vec__49481_vec__49494$$, 0, null);
  var $visible_QMARK_$jscomp$6$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__49503$jscomp$1_map__49484_map__49484__$1_props__41642__auto__$jscomp$23_vec__49481_vec__49494$$, 1, null), $tag_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$940$boxDecorationBreak$$, "clone", $cljs$cst$941$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__49503$jscomp$1_map__49484_map__49484__$1_props__41642__auto__$jscomp$23_vec__49481_vec__49494$$ = function() {
    return {id:$id$jscomp$98$$, ref:$ref$jscomp$27$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["pt-12 sm:pt-14", "pb-10 sm:pb-12"]))), children:[$APP.$cljs$core$truth_$$($title$jscomp$39$$) ? function() {
      var $G__49512_JSCompiler_temp_const$jscomp$inline_4166$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_name_lg$$, "mb-10 px-4"])));
      var $G__49516$jscomp$inline_4168_JSCompiler_inline_result$jscomp$inline_4167$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-200/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$$), children:$title$jscomp$39$$};
      $G__49516$jscomp$inline_4168_JSCompiler_inline_result$jscomp$inline_4167$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__49516$jscomp$inline_4168_JSCompiler_inline_result$jscomp$inline_4167$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__49516$jscomp$inline_4168_JSCompiler_inline_result$jscomp$inline_4167$$);
      $G__49512_JSCompiler_temp_const$jscomp$inline_4166$$ = {className:$G__49512_JSCompiler_temp_const$jscomp$inline_4166$$, children:$G__49516$jscomp$inline_4168_JSCompiler_inline_result$jscomp$inline_4167$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__49512_JSCompiler_temp_const$jscomp$inline_4166$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__49512_JSCompiler_temp_const$jscomp$inline_4166$$);
    }() : null, function() {
      var $G__49529$$ = function() {
        return {className:"px-4 sm:flex sm:gap-10 sm:items-start", children:[function() {
          var $G__49533_G__49537$jscomp$inline_4171$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/zz-portrait-2.jpg", fit:"crop", "aspect-ratio":0.75, "active?":$visible_QMARK_$jscomp$6$$};
          $G__49533_G__49537$jscomp$inline_4171$$ = {className:"w-full sm:w-2/5 flex-shrink-0 aspect-[3/4] rounded-sm overflow-hidden mb-8 sm:mb-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__49533_G__49537$jscomp$inline_4171$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__49533_G__49537$jscomp$inline_4171$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__49533_G__49537$jscomp$inline_4171$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__49533_G__49537$jscomp$inline_4171$$);
        }(), function() {
          var $G__49546$$ = function() {
            return {className:"sm:flex-1 sm:min-w-0", children:[function() {
              var $G__49554_JSCompiler_temp_const$jscomp$inline_4173$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_name_lg$$, "mb-2"])));
              var $G__49559$jscomp$inline_4175_JSCompiler_inline_result$jscomp$inline_4174$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-200/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$$), children:"Zadik Zadikian"};
              $G__49559$jscomp$inline_4175_JSCompiler_inline_result$jscomp$inline_4174$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__49559$jscomp$inline_4175_JSCompiler_inline_result$jscomp$inline_4174$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__49559$jscomp$inline_4175_JSCompiler_inline_result$jscomp$inline_4174$$);
              $G__49554_JSCompiler_temp_const$jscomp$inline_4173$$ = {className:$G__49554_JSCompiler_temp_const$jscomp$inline_4173$$, children:$G__49559$jscomp$inline_4175_JSCompiler_inline_result$jscomp$inline_4174$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49554_JSCompiler_temp_const$jscomp$inline_4173$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49554_JSCompiler_temp_const$jscomp$inline_4173$$);
            }(), function() {
              var $G__49566$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_role$$, "mb-6"]))), children:"Artist"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49566$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49566$$);
            }(), function() {
              var $G__49570$$ = function() {
                return {className:"border-l-2 border-white/20 pl-6 my-8", children:[function() {
                  var $G__49577$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "italic"]))), children:"“If you want to learn about something, become that thing and then study yourself.”"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49577$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49577$$);
                }(), function() {
                  var $G__49583$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$amp$styles$label_muted$$]))), children:"— Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__49583$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__49583$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__49570$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__49570$$);
            }(), function() {
              var $G__49595$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Born in Yerevan, Zadik Zadikian’s life began in extremes. At nineteen—armed only with conviction—he escaped Soviet Armenia by swimming across the Arax River under machine-gun fire. He arrived in America with nothing but the instincts that had guided him since childhood: to build, to shape matter, to seek form through discipline and elemental materials."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49595$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49595$$);
            }(), function() {
              var $G__49604$jscomp$1$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["In San Francisco, he apprenticed with sculptor ", function() {
                  var $G__49612$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Beniamino Bufano"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__49612$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__49612$$);
                }(), ", absorbing a lifelong sense of scale, color, and the physical intelligence of large-form making. Drawn to the heat and velocity of New York, he moved east in 1974 and quickly found himself inside the crucible of the Minimalist movement, assisting ", function() {
                  var $G__49624$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Richard Serra"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__49624$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__49624$jscomp$1$$);
                }(), " on the monumental black oil-stick wall drawings—one of which Serra titled ", function() {
                  var $G__49634$$ = {children:"Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("em", $G__49634$$) : $APP.$helix$core$jsx$$.call(null, "em", $G__49634$$);
                }(), "."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49604$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__49604$jscomp$1$$);
            }(), function() {
              var $G__49643$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"This immersion into New York’s severity and possibility forged an artist who has always moved toward intensity: toward weight, clarity, touch. The son of a builder, he grew up with materials—clay, plaster, stone, the raw grammar of structure. In New York, these instincts crystallized. In 1976 he transformed his ten-thousand-square-foot home and studio into a continuous field of industrial gold, an act of totalizing vision that set the tone for everything that followed."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49643$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49643$$);
            }(), function() {
              var $G__49653$jscomp$1_JSCompiler_temp_const$jscomp$inline_4177$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
              var $G__49664$jscomp$inline_4179_JSCompiler_inline_result$jscomp$inline_4178$$ = {children:"1,000 Bricks Gilded in 24-Karat Gold Leaf"};
              $G__49664$jscomp$inline_4179_JSCompiler_inline_result$jscomp$inline_4178$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("em", $G__49664$jscomp$inline_4179_JSCompiler_inline_result$jscomp$inline_4178$$) : $APP.$helix$core$jsx$$.call(null, "em", $G__49664$jscomp$inline_4179_JSCompiler_inline_result$jscomp$inline_4178$$);
              $G__49653$jscomp$1_JSCompiler_temp_const$jscomp$inline_4177$$ = {className:$G__49653$jscomp$1_JSCompiler_temp_const$jscomp$inline_4177$$, children:["His 1978 project ", $G__49664$jscomp$inline_4179_JSCompiler_inline_result$jscomp$inline_4178$$, " marked the emergence of his now-signature language: unit-based sculptural forms—bricklike, essential, endlessly recombinable—through which gold becomes not decoration but ontology. For decades, Zadikian has pushed this vocabulary to distill the elemental. His works hover between the geological and the luminous, between ancient memory and future speculation, always returning to the fundamental question: What is born when matter is reduced to its clearest form?"]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49653$jscomp$1_JSCompiler_temp_const$jscomp$inline_4177$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__49653$jscomp$1_JSCompiler_temp_const$jscomp$inline_4177$$);
            }(), function() {
              var $G__49676$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$]))), children:"Zadikian’s practice is defined by extremes—of material, of discipline, of vision—and by a lifelong commitment to the structures that underlie both art and the world itself. His is a studio forged through touch, labor, repetition, and the pursuit of a form so essential it borders on the eternal."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49676$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49676$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__49546$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__49546$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__49529$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__49529$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__49503$jscomp$1_map__49484_map__49484__$1_props__41642__auto__$jscomp$23_vec__49481_vec__49494$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__49503$jscomp$1_map__49484_map__49484__$1_props__41642__auto__$jscomp$23_vec__49481_vec__49494$$);
};
$amp$pages$landing$curators$curator_card$$ = function($G__49457$jscomp$1_map__49455_map__49455__$1_props__41642__auto__$jscomp$24_vec__49452$$, $maybe_ref__41643__auto__$jscomp$24$$) {
  $G__49457$jscomp$1_map__49455_map__49455__$1_props__41642__auto__$jscomp$24_vec__49452$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__49457$jscomp$1_map__49455_map__49455__$1_props__41642__auto__$jscomp$24_vec__49452$$), $maybe_ref__41643__auto__$jscomp$24$$], null);
  $G__49457$jscomp$1_map__49455_map__49455__$1_props__41642__auto__$jscomp$24_vec__49452$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__49457$jscomp$1_map__49455_map__49455__$1_props__41642__auto__$jscomp$24_vec__49452$$, 0, null);
  $G__49457$jscomp$1_map__49455_map__49455__$1_props__41642__auto__$jscomp$24_vec__49452$$ = $APP.$cljs$core$__destructure_map$$($G__49457$jscomp$1_map__49455_map__49455__$1_props__41642__auto__$jscomp$24_vec__49452$$);
  var $name$jscomp$203$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__49457$jscomp$1_map__49455_map__49455__$1_props__41642__auto__$jscomp$24_vec__49452$$, $APP.$cljs$cst$165$name$$), $role$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__49457$jscomp$1_map__49455_map__49455__$1_props__41642__auto__$jscomp$24_vec__49452$$, $APP.$cljs$cst$819$role$$), $img$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__49457$jscomp$1_map__49455_map__49455__$1_props__41642__auto__$jscomp$24_vec__49452$$, 
  $cljs$cst$942$img$$), $bio$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__49457$jscomp$1_map__49455_map__49455__$1_props__41642__auto__$jscomp$24_vec__49452$$, $cljs$cst$943$bio$$), $visible_QMARK_$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__49457$jscomp$1_map__49455_map__49455__$1_props__41642__auto__$jscomp$24_vec__49452$$, $cljs$cst$944$visible_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $tag_style$jscomp$1$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$940$boxDecorationBreak$$, "clone", $cljs$cst$941$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__49457$jscomp$1_map__49455_map__49455__$1_props__41642__auto__$jscomp$24_vec__49452$$ = function() {
    return {className:"px-4 sm:flex sm:gap-8 sm:items-start", children:[function() {
      var $G__49461_G__49465$jscomp$inline_4182$$ = {"img-src":$img$jscomp$2$$, fit:"crop", "aspect-ratio":1, "active?":$visible_QMARK_$jscomp$7$$};
      $G__49461_G__49465$jscomp$inline_4182$$ = {className:"float-left mr-4 mb-2 sm:float-none sm:mr-0 sm:mb-0\n               w-20 aspect-square sm:w-36\n               flex-shrink-0 rounded-sm overflow-hidden", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__49461_G__49465$jscomp$inline_4182$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, 
      $G__49461_G__49465$jscomp$inline_4182$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__49461_G__49465$jscomp$inline_4182$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__49461_G__49465$jscomp$inline_4182$$);
    }(), function() {
      var $G__49469$jscomp$1$$ = function() {
        return {className:"sm:flex-1 sm:min-w-0", children:[function() {
          var $G__49473_JSCompiler_temp_const$jscomp$inline_4184$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_name$$, "mb-1"])));
          var $G__49477$jscomp$inline_4186_JSCompiler_inline_result$jscomp$inline_4185$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-200/90 dark:bg-white/10 px-2 py-0.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$jscomp$1$$), children:$name$jscomp$203$$};
          $G__49477$jscomp$inline_4186_JSCompiler_inline_result$jscomp$inline_4185$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__49477$jscomp$inline_4186_JSCompiler_inline_result$jscomp$inline_4185$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__49477$jscomp$inline_4186_JSCompiler_inline_result$jscomp$inline_4185$$);
          $G__49473_JSCompiler_temp_const$jscomp$inline_4184$$ = {className:$G__49473_JSCompiler_temp_const$jscomp$inline_4184$$, children:$G__49477$jscomp$inline_4186_JSCompiler_inline_result$jscomp$inline_4185$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49473_JSCompiler_temp_const$jscomp$inline_4184$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49473_JSCompiler_temp_const$jscomp$inline_4184$$);
        }(), function() {
          var $G__49486$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_role$$, "mb-3"]))), children:$role$jscomp$2$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49486$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49486$jscomp$1$$);
        }(), function() {
          var $G__49490$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:$bio$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49490$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49490$$);
        }(), function() {
          var $G__49498$jscomp$1$$ = {className:"clear-both sm:hidden"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__49498$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__49498$jscomp$1$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__49469$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__49469$jscomp$1$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__49457$jscomp$1_map__49455_map__49455__$1_props__41642__auto__$jscomp$24_vec__49452$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__49457$jscomp$1_map__49455_map__49455__$1_props__41642__auto__$jscomp$24_vec__49452$$);
};
$amp$pages$landing$curators$curators_section$$ = function($G__49574_map__49552_map__49552__$1_props__41642__auto__$jscomp$25_vec__49549_vec__49562$jscomp$1$$, $maybe_ref__41643__auto__$jscomp$25$$) {
  $G__49574_map__49552_map__49552__$1_props__41642__auto__$jscomp$25_vec__49549_vec__49562$jscomp$1$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__49574_map__49552_map__49552__$1_props__41642__auto__$jscomp$25_vec__49549_vec__49562$jscomp$1$$), $maybe_ref__41643__auto__$jscomp$25$$], null);
  $G__49574_map__49552_map__49552__$1_props__41642__auto__$jscomp$25_vec__49549_vec__49562$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__49574_map__49552_map__49552__$1_props__41642__auto__$jscomp$25_vec__49549_vec__49562$jscomp$1$$, 0, null);
  $G__49574_map__49552_map__49552__$1_props__41642__auto__$jscomp$25_vec__49549_vec__49562$jscomp$1$$ = $APP.$cljs$core$__destructure_map$$($G__49574_map__49552_map__49552__$1_props__41642__auto__$jscomp$25_vec__49549_vec__49562$jscomp$1$$);
  var $id$jscomp$99$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__49574_map__49552_map__49552__$1_props__41642__auto__$jscomp$25_vec__49549_vec__49562$jscomp$1$$, $APP.$cljs$cst$286$id$$), $title$jscomp$40$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__49574_map__49552_map__49552__$1_props__41642__auto__$jscomp$25_vec__49549_vec__49562$jscomp$1$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$28$$ = $APP.$helix$hooks$use_ref$$("curators-ref");
  $G__49574_map__49552_map__49552__$1_props__41642__auto__$jscomp$25_vec__49549_vec__49562$jscomp$1$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$28$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$751$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__49574_map__49552_map__49552__$1_props__41642__auto__$jscomp$25_vec__49549_vec__49562$jscomp$1$$, 0, null);
  var $visible_QMARK_$jscomp$8$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__49574_map__49552_map__49552__$1_props__41642__auto__$jscomp$25_vec__49549_vec__49562$jscomp$1$$, 1, null), $title_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$940$boxDecorationBreak$$, "clone", $cljs$cst$941$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__49574_map__49552_map__49552__$1_props__41642__auto__$jscomp$25_vec__49549_vec__49562$jscomp$1$$ = function() {
    return {id:$id$jscomp$99$$, ref:$ref$jscomp$28$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["pt-12 sm:pt-14", "pb-10 sm:pb-12"]))), children:[$APP.$cljs$core$truth_$$($title$jscomp$40$$) ? function() {
      var $G__49585_JSCompiler_temp_const$jscomp$inline_4188$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_name_lg$$, "mb-10 px-4"])));
      var $G__49591$jscomp$inline_4190_JSCompiler_inline_result$jscomp$inline_4189$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-200/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($title_style$$), children:$title$jscomp$40$$};
      $G__49591$jscomp$inline_4190_JSCompiler_inline_result$jscomp$inline_4189$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__49591$jscomp$inline_4190_JSCompiler_inline_result$jscomp$inline_4189$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__49591$jscomp$inline_4190_JSCompiler_inline_result$jscomp$inline_4189$$);
      $G__49585_JSCompiler_temp_const$jscomp$inline_4188$$ = {className:$G__49585_JSCompiler_temp_const$jscomp$inline_4188$$, children:$G__49591$jscomp$inline_4190_JSCompiler_inline_result$jscomp$inline_4189$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__49585_JSCompiler_temp_const$jscomp$inline_4188$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__49585_JSCompiler_temp_const$jscomp$inline_4188$$);
    }() : null, function() {
      var $G__49606$$ = function() {
        return {className:"space-y-8 sm:space-y-12\n              divide-y divide-slate-200/50 dark:divide-white/10", children:function() {
          return function $amp$pages$landing$curators$curators_section_render_$_iter__49613$$($s__49615$$) {
            return new $APP.$cljs$core$LazySeq$$(null, function() {
              for (;;) {
                var $s__49615__$2_temp__5823__auto__$jscomp$121$$ = $APP.$cljs$core$seq$$($s__49615$$);
                if ($s__49615__$2_temp__5823__auto__$jscomp$121$$) {
                  if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__49615__$2_temp__5823__auto__$jscomp$121$$)) {
                    var $c__5626__auto__$jscomp$34$$ = $APP.$cljs$core$_chunked_first$$($s__49615__$2_temp__5823__auto__$jscomp$121$$), $size__5627__auto__$jscomp$34$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$34$$), $b__49618$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$34$$);
                    return function() {
                      for (var $i__49617$$ = 0;;) {
                        if ($i__49617$$ < $size__5627__auto__$jscomp$34$$) {
                          var $JSCompiler_temp_const$jscomp$4272_map__49641_map__49641__$1$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$34$$, $i__49617$$), $G__49661$jscomp$inline_4340_G__49670$jscomp$inline_4341_curator$jscomp$1$$ = $JSCompiler_temp_const$jscomp$4272_map__49641_map__49641__$1$$ = $APP.$cljs$core$__destructure_map$$($JSCompiler_temp_const$jscomp$4272_map__49641_map__49641__$1$$), $G__49662$jscomp$inline_4342_JSCompiler_inline_result$jscomp$4273_name$jscomp$205$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($JSCompiler_temp_const$jscomp$4272_map__49641_map__49641__$1$$, 
                          $APP.$cljs$cst$165$name$$);
                          $JSCompiler_temp_const$jscomp$4272_map__49641_map__49641__$1$$ = $b__49618$$;
                          $G__49661$jscomp$inline_4340_G__49670$jscomp$inline_4341_curator$jscomp$1$$ = $APP.$helix$impl$props$merge_obj$$({"visible?":$visible_QMARK_$jscomp$8$$}, $APP.$helix$impl$props$_props$cljs$0core$0IFn$0_invoke$0arity$01$$($G__49661$jscomp$inline_4340_G__49670$jscomp$inline_4341_curator$jscomp$1$$));
                          $G__49661$jscomp$inline_4340_G__49670$jscomp$inline_4341_curator$jscomp$1$$ = {className:"pt-8 sm:pt-12 first:pt-0 first:border-t-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$curators$curator_card$$, $G__49661$jscomp$inline_4340_G__49670$jscomp$inline_4341_curator$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$curators$curator_card$$, $G__49661$jscomp$inline_4340_G__49670$jscomp$inline_4341_curator$jscomp$1$$)};
                          $G__49662$jscomp$inline_4342_JSCompiler_inline_result$jscomp$4273_name$jscomp$205$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__49661$jscomp$inline_4340_G__49670$jscomp$inline_4341_curator$jscomp$1$$, $G__49662$jscomp$inline_4342_JSCompiler_inline_result$jscomp$4273_name$jscomp$205$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__49661$jscomp$inline_4340_G__49670$jscomp$inline_4341_curator$jscomp$1$$, 
                          $G__49662$jscomp$inline_4342_JSCompiler_inline_result$jscomp$4273_name$jscomp$205$$);
                          $JSCompiler_temp_const$jscomp$4272_map__49641_map__49641__$1$$.add($G__49662$jscomp$inline_4342_JSCompiler_inline_result$jscomp$4273_name$jscomp$205$$);
                          $i__49617$$ += 1;
                        } else {
                          return !0;
                        }
                      }
                    }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__49618$$), $amp$pages$landing$curators$curators_section_render_$_iter__49613$$($APP.$cljs$core$_chunked_rest$$($s__49615__$2_temp__5823__auto__$jscomp$121$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__49618$$), null);
                  }
                  var $map__49690_map__49690__$1$$ = $APP.$cljs$core$first$$($s__49615__$2_temp__5823__auto__$jscomp$121$$), $curator$$ = $map__49690_map__49690__$1$$ = $APP.$cljs$core$__destructure_map$$($map__49690_map__49690__$1$$), $name$jscomp$204$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__49690_map__49690__$1$$, $APP.$cljs$cst$165$name$$);
                  return $APP.$cljs$core$cons$$(function() {
                    var $G__49693$jscomp$1_G__49698$jscomp$inline_4196$$ = $APP.$helix$impl$props$merge_obj$$({"visible?":$visible_QMARK_$jscomp$8$$}, $APP.$helix$impl$props$_props$cljs$0core$0IFn$0_invoke$0arity$01$$($curator$$));
                    $G__49693$jscomp$1_G__49698$jscomp$inline_4196$$ = {className:"pt-8 sm:pt-12 first:pt-0 first:border-t-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$curators$curator_card$$, $G__49693$jscomp$1_G__49698$jscomp$inline_4196$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$curators$curator_card$$, $G__49693$jscomp$1_G__49698$jscomp$inline_4196$$)};
                    var $G__49694$$ = $name$jscomp$204$$;
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__49693$jscomp$1_G__49698$jscomp$inline_4196$$, $G__49694$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__49693$jscomp$1_G__49698$jscomp$inline_4196$$, $G__49694$$);
                  }(), $amp$pages$landing$curators$curators_section_render_$_iter__49613$$($APP.$cljs$core$rest$$($s__49615__$2_temp__5823__auto__$jscomp$121$$)));
                }
                return null;
              }
            }, null, null);
          }($amp$pages$landing$curators$curators$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__49606$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__49606$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__49574_map__49552_map__49552__$1_props__41642__auto__$jscomp$25_vec__49549_vec__49562$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__49574_map__49552_map__49552__$1_props__41642__auto__$jscomp$25_vec__49549_vec__49562$jscomp$1$$);
};
$amp$pages$landing$in_minor_keys$pull_quote$$ = function($G__49518_map__49510_map__49510__$1_props__41642__auto__$jscomp$26_vec__49507$$, $maybe_ref__41643__auto__$jscomp$26$$) {
  $G__49518_map__49510_map__49510__$1_props__41642__auto__$jscomp$26_vec__49507$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__49518_map__49510_map__49510__$1_props__41642__auto__$jscomp$26_vec__49507$$), $maybe_ref__41643__auto__$jscomp$26$$], null);
  $G__49518_map__49510_map__49510__$1_props__41642__auto__$jscomp$26_vec__49507$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__49518_map__49510_map__49510__$1_props__41642__auto__$jscomp$26_vec__49507$$, 0, null);
  $G__49518_map__49510_map__49510__$1_props__41642__auto__$jscomp$26_vec__49507$$ = $APP.$cljs$core$__destructure_map$$($G__49518_map__49510_map__49510__$1_props__41642__auto__$jscomp$26_vec__49507$$);
  var $text$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__49518_map__49510_map__49510__$1_props__41642__auto__$jscomp$26_vec__49507$$, $APP.$cljs$cst$396$text$$), $attribution$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__49518_map__49510_map__49510__$1_props__41642__auto__$jscomp$26_vec__49507$$, $cljs$cst$945$attribution$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__49518_map__49510_map__49510__$1_props__41642__auto__$jscomp$26_vec__49507$$ = function() {
    return {className:"border-l-2 border-white/20 pl-6 my-8", children:[function() {
      var $G__49525$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:$text$jscomp$18$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49525$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49525$$);
    }(), function() {
      var $G__49541$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$amp$styles$label_muted$$]))), children:"— " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($attribution$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__49541$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__49541$jscomp$1$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__49518_map__49510_map__49510__$1_props__41642__auto__$jscomp$26_vec__49507$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__49518_map__49510_map__49510__$1_props__41642__auto__$jscomp$26_vec__49507$$);
};
$amp$pages$landing$in_minor_keys$curator_card$$ = function($G__49620_map__49602_map__49602__$1_props__41642__auto__$jscomp$27_vec__49599$jscomp$1$$, $maybe_ref__41643__auto__$jscomp$27$$) {
  $G__49620_map__49602_map__49602__$1_props__41642__auto__$jscomp$27_vec__49599$jscomp$1$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__49620_map__49602_map__49602__$1_props__41642__auto__$jscomp$27_vec__49599$jscomp$1$$), $maybe_ref__41643__auto__$jscomp$27$$], null);
  $G__49620_map__49602_map__49602__$1_props__41642__auto__$jscomp$27_vec__49599$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__49620_map__49602_map__49602__$1_props__41642__auto__$jscomp$27_vec__49599$jscomp$1$$, 0, null);
  $G__49620_map__49602_map__49602__$1_props__41642__auto__$jscomp$27_vec__49599$jscomp$1$$ = $APP.$cljs$core$__destructure_map$$($G__49620_map__49602_map__49602__$1_props__41642__auto__$jscomp$27_vec__49599$jscomp$1$$);
  var $visible_QMARK_$jscomp$9$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__49620_map__49602_map__49602__$1_props__41642__auto__$jscomp$27_vec__49599$jscomp$1$$, $cljs$cst$944$visible_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $tag_style$jscomp$2$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$940$boxDecorationBreak$$, "clone", $cljs$cst$941$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__49620_map__49602_map__49602__$1_props__41642__auto__$jscomp$27_vec__49599$jscomp$1$$ = function() {
    return {className:"sm:flex sm:gap-8 sm:items-start mb-10", children:[function() {
      var $G__49626$jscomp$1_G__49632$jscomp$inline_4199$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/koyo.png", fit:"crop", "aspect-ratio":1, "active?":$visible_QMARK_$jscomp$9$$};
      $G__49626$jscomp$1_G__49632$jscomp$inline_4199$$ = {className:"float-left mr-4 mb-2 sm:float-none sm:mr-0 sm:mb-0\n               w-24 aspect-square sm:w-40\n               flex-shrink-0 rounded-sm overflow-hidden", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__49626$jscomp$1_G__49632$jscomp$inline_4199$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, 
      $G__49626$jscomp$1_G__49632$jscomp$inline_4199$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__49626$jscomp$1_G__49632$jscomp$inline_4199$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__49626$jscomp$1_G__49632$jscomp$inline_4199$$);
    }(), function() {
      var $G__49640$jscomp$1$$ = function() {
        return {className:"sm:flex-1 sm:min-w-0", children:[function() {
          var $G__49649$jscomp$1_JSCompiler_temp_const$jscomp$inline_4201$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_name$$, "mb-1"])));
          var $G__49655$jscomp$inline_4203_JSCompiler_inline_result$jscomp$inline_4202$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-200/90 dark:bg-white/10 px-2 py-0.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$jscomp$2$$), children:"Koyo Kouoh"};
          $G__49655$jscomp$inline_4203_JSCompiler_inline_result$jscomp$inline_4202$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__49655$jscomp$inline_4203_JSCompiler_inline_result$jscomp$inline_4202$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__49655$jscomp$inline_4203_JSCompiler_inline_result$jscomp$inline_4202$$);
          $G__49649$jscomp$1_JSCompiler_temp_const$jscomp$inline_4201$$ = {className:$G__49649$jscomp$1_JSCompiler_temp_const$jscomp$inline_4201$$, children:$G__49655$jscomp$inline_4203_JSCompiler_inline_result$jscomp$inline_4202$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49649$jscomp$1_JSCompiler_temp_const$jscomp$inline_4201$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49649$jscomp$1_JSCompiler_temp_const$jscomp$inline_4201$$);
        }(), function() {
          var $G__49672$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_role$$, "mb-3"]))), children:"Curator, 61st Biennale Arte"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49672$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49672$$);
        }(), function() {
          var $G__49682$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$]))), children:"The curatorial statement for the 61st International Art Exhibition — La Biennale di Venezia — invites us to listen to the minor keys: the quiet tones, the lower frequencies, the persistent signals of earth and life."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49682$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49682$$);
        }(), function() {
          var $G__49686$$ = {className:"clear-both sm:hidden"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__49686$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__49686$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__49640$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__49640$jscomp$1$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__49620_map__49602_map__49602__$1_props__41642__auto__$jscomp$27_vec__49599$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__49620_map__49602_map__49602__$1_props__41642__auto__$jscomp$27_vec__49599$jscomp$1$$);
};
$amp$pages$landing$in_minor_keys$preview$$ = function($G__49711_props__41642__auto__$jscomp$28_vec__49707$$) {
  $APP.$helix$core$extract_cljs_props$$($G__49711_props__41642__auto__$jscomp$28_vec__49707$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$29$$ = $APP.$helix$hooks$use_ref$$("imk-preview-ref");
  $G__49711_props__41642__auto__$jscomp$28_vec__49707$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$29$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$751$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__49711_props__41642__auto__$jscomp$28_vec__49707$$, 0, null);
  var $visible_QMARK_$jscomp$10$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__49711_props__41642__auto__$jscomp$28_vec__49707$$, 1, null);
  $G__49711_props__41642__auto__$jscomp$28_vec__49707$$ = function() {
    return {className:"px-4", ref:$ref$jscomp$29$$, children:[function() {
      var $G__49715$$ = {"visible?":$visible_QMARK_$jscomp$10$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$curator_card$$, $G__49715$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$curator_card$$, $G__49715$$);
    }(), function() {
      var $G__49719$$ = function() {
        return {className:"text-center my-10 space-y-1", children:[function() {
          var $G__49723$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Take a deep breath]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49723$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49723$$);
        }(), function() {
          var $G__49727$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Exhale]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49727$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49727$$);
        }(), function() {
          var $G__49731$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Drop your shoulders]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49731$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49731$jscomp$1$$);
        }(), function() {
          var $G__49735$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Close your eyes]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49735$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49735$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__49719$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__49719$$);
    }(), function() {
      var $G__49739$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"This is an invitation to encounter these words in the immediate physical, meteorological, ambient, and karmic conditions in which they meet you. To shift to a slower gear and tune in to the frequencies of the minor keys. Because, though often lost in the anxious cacophony of the present chaos raging through the world, the music continues. The songs of those producing beauty in spite of tragedy, the tunes of the fugitives recovering from the ruins, the harmonies of those repairing wounds and worlds."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49739$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49739$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__49711_props__41642__auto__$jscomp$28_vec__49707$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__49711_props__41642__auto__$jscomp$28_vec__49707$$);
};
$amp$pages$landing$in_minor_keys$details$$ = function($G__49769$jscomp$1_props__41642__auto__$jscomp$29_vec__49765$$) {
  $APP.$helix$core$extract_cljs_props$$($G__49769$jscomp$1_props__41642__auto__$jscomp$29_vec__49765$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$30$$ = $APP.$helix$hooks$use_ref$$("imk-details-ref");
  $G__49769$jscomp$1_props__41642__auto__$jscomp$29_vec__49765$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$30$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$751$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__49769$jscomp$1_props__41642__auto__$jscomp$29_vec__49765$$, 0, null);
  var $visible_QMARK_$jscomp$11$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__49769$jscomp$1_props__41642__auto__$jscomp$29_vec__49765$$, 1, null);
  $G__49769$jscomp$1_props__41642__auto__$jscomp$29_vec__49765$$ = function() {
    return {className:"px-4", ref:$ref$jscomp$30$$, children:[function() {
      var $G__49773$$ = {"visible?":$visible_QMARK_$jscomp$11$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$curator_card$$, $G__49773$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$curator_card$$, $G__49773$$);
    }(), function() {
      var $G__49777$jscomp$1$$ = function() {
        return {className:"text-center my-10 space-y-1", children:[function() {
          var $G__49782$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Take a deep breath]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49782$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49782$$);
        }(), function() {
          var $G__49789$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Exhale]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49789$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49789$$);
        }(), function() {
          var $G__49799$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Drop your shoulders]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49799$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49799$$);
        }(), function() {
          var $G__49809$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Close your eyes]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49809$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49809$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__49777$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__49777$jscomp$1$$);
    }(), function() {
      var $G__49819$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"This is an invitation to encounter these words in the immediate physical, meteorological, ambient, and karmic conditions in which they meet you. To shift to a slower gear and tune in to the frequencies of the minor keys. Because, though often lost in the anxious cacophony of the present chaos raging through the world, the music continues. The songs of those producing beauty in spite of tragedy, the tunes of the fugitives recovering from the ruins, the harmonies of those repairing wounds and worlds."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49819$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49819$$);
    }(), function() {
      var $G__49825$$ = {text:"There is a reason, after all, that some people wish to colonize the moon, and others dance before it as an ancient friend.", attribution:"James Baldwin, 1972"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$pull_quote$$, $G__49825$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$pull_quote$$, $G__49825$$);
    }(), function() {
      var $G__49841$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The minor key, in music, alludes both to the structure of a song and to its emotional effects. It is a rich idea, so rich that it quickly overflows its technical definition and spills with metaphor. It summons moods, the blues, the call-and-response, the morna, the second line, the lament, the allegory, the whisper."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49841$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49841$jscomp$1$$);
    }(), function() {
      var $G__49849$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The minor keys refuse orchestral bombast and goose-step military marches and come alive in the quiet tones, the lower frequencies, the hums, the consolations of poetry, all portals of improvisation to the elsewhere and the otherwise. The minor keys ask for listening that calls on the emotions and sustains them in return."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49849$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49849$$);
    }(), function() {
      var $G__49857$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The minor keys are also the small islands, worlds amid oceans with distinct and endlessly rich ecosystems, social lives that are articulated, for better and worse, within much larger political forms and ecological stakes. Here, the evocation of the key and the island extends to an archipelago of oases: gardens, courtyards, compounds, lofts, dance floors — the other worlds that artists make, the intimate and convivial universes that refresh and sustain even in terrible times; indeed, especially in terrible times."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49857$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49857$jscomp$1$$);
    }(), function() {
      var $G__49865$$ = {text:"Look at the creole garden, you put all species on such a little lick of land: avocados, lemons, yams, sugarcanes… plus thirty or forty other species on this bit of land that doesn’t go more than fifty feet up the side of the hill, they protect each other. In the great Circle, everything is in everything else.", attribution:"Édouard Glissant, 1993"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$pull_quote$$, $G__49865$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$pull_quote$$, $G__49865$$);
    }(), function() {
      var $G__49873$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"These are the cues for an exhibition; an exhibition tuned in to the minor keys; an exhibition that invites listening to the persistent signals of earth and life, connecting to soul frequencies. If, in music, the minor keys are often associated with strangeness, melancholy and sorrow, here their joy, solace, hope, and transcendence manifest as well."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49873$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49873$jscomp$1$$);
    }(), function() {
      var $G__49881$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"In the minor keys, sound and sensation are grounding, they hold the cadences, melodies, and silences of resonant worlds that gather and create together a polyphonous assembly of art, convening and communing in convivial collectivity, beaming across the void of alienation and the crackle of conflict."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49881$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49881$jscomp$1$$);
    }(), function() {
      var $G__49891$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The 61st edition of the Biennale Arte is grounded in a deep belief in artists as the vital interpreters of the social and psychic condition and catalysts of new relations and possibilities."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49891$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49891$jscomp$1$$);
    }(), function() {
      var $G__49899$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The exhibition’s composition is formed by artistic practices that open portals, that refresh and nourish, that prompt relation and relationship, that advance concept and form through networks and schools — understood freely and informally."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49899$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49899$jscomp$1$$);
    }(), function() {
      var $G__49906$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The intended effect scrambles cohesion and dissonance in the manner of a free-jazz ensemble, or perhaps, at the scale of the Biennale Arte, a festival of ensembles with a common premise: that poetics liberate and people make beauty together."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49906$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49906$$);
    }(), function() {
      var $G__49910$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Through relation, sharing, and transcendence, the artists and practices that operate in this spirit, like jazz, across methods, scales, senses and forms, propose to visitors an exhibitional experience that is more sensory than didactic, renewing rather than exhausting, and fortifying for the work ahead."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49910$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49910$jscomp$1$$);
    }(), function() {
      var $G__49915$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Through a visual and meditative procession, the exhibition prompts all senses to interconnect and meander from one universe to the other, rendering visible the possibilities that reside in the in-between spaces and beyond the portals."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49915$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49915$$);
    }(), function() {
      var $G__49919$jscomp$1$$ = {text:"…there is no choice but to tune in like jazzmen to these imperative mutations. The jazzman constantly meditates on the unpredictable, stands within it according to the laws of polyrhythm, and improvises breathtaking moments. We small-island Caribbeans are not ready, but we have this resource. The change will have to be so profound that we will no doubt have to add to the knowledge of jazz, the old totemisms, animisms, analogisms, and other metaphysics too summarily discarded. These old-world poems are already precious scores.", 
      attribution:"Patrick Chamoiseau, 2023"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$pull_quote$$, $G__49919$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$pull_quote$$, $G__49919$jscomp$1$$);
    }(), function() {
      var $G__49923$jscomp$2$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"In this spirit, the international exhibition of the 61st Biennale Arte intends neither a litany of commentary on world events, nor an inattention or escape from compounding and continuous intersecting crises. Rather, it proposes a radical reconnection with art’s natural habitat and role in society: that is the emotional, the visual, the sensory, the affective, the subjective."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49923$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49923$jscomp$2$$);
    }(), function() {
      var $G__49928$jscomp$2$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"In Minor Keys are sequences of exhilarating journeys that address the sensate and the affective, inviting visitors to marvel, meditate, dream, revel, reflect, and commune in realms where time is not corporate property nor at the mercy of relentlessly accelerated productivity."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49928$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49928$jscomp$2$$);
    }(), function() {
      var $G__49935$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"After all, it is clear by now that the enduring time of capital and empire maligned local, Indigenous and terrestrial knowledges as chimeric, and dismissed co-constitutive artistic practices as artisanal, intended for decoration or devotional rituals."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49935$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49935$jscomp$1$$);
    }(), function() {
      var $G__49944$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The ‘civilizing mission’ flattens all with condescending contempt, and in the contemporary era entire societies and ecologies are regarded as collateral damage in the headstrong pursuit of growth supported by ruthlessness and greed. In refusing the spectacle of horror, the time has come to listen to the minor keys, to tune in sotto voce to the whispers, to the lower frequencies; to find the oases, the islands, where the dignity of all living beings is safeguarded."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49944$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49944$jscomp$1$$);
    }(), function() {
      var $G__49952$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The exhibition posits that such radical shifts are taking place — indeed, have been underway all along — in the minor keys, and the artists, poets, performers, and filmmakers whom the exhibition will convene are grounded in their commitments to realizing them. Artists are channels to and between the minor keys and listening to, rather than speaking for them is at the core of the curatorial conceit."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49952$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49952$jscomp$1$$);
    }(), function() {
      var $G__49960$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The exhibition In Minor Keys stands as a collective score composed together with artists who have built universes of imagination. Artists who work at the boundaries of form, and whose practices can be thought of as intricate melodies to be heard both collectively and on their own terms. These are artists whose practices seamlessly bleed into society."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49960$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49960$jscomp$1$$);
    }(), function() {
      var $G__49968$jscomp$2$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Artists who accommodate daily life as part of a logical and aesthetically consistent relation of parts. Artists who are exceedingly generous and hospitable to life."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49968$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__49968$jscomp$2$$);
    }(), function() {
      var $G__49978$jscomp$2$$ = {text:"In our myths, in our songs, that’s where the seeds are. It is not possible to constantly hone on the crisis. You have to have the love and you have to have the magic, that’s also life.", attribution:"Toni Morrison, 1977"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$pull_quote$$, $G__49978$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$pull_quote$$, $G__49978$jscomp$2$$);
    }(), function() {
      var $G__49984$jscomp$1$$ = function() {
        return {className:"mt-12 mb-6 border-t border-white/10 pt-10", children:[function() {
          var $G__49992$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "mb-6"]))), children:"The Studio — In Minor Keys"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__49992$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__49992$jscomp$1$$);
        }(), function() {
          var $G__49996_JSCompiler_temp_const$jscomp$inline_4205$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
          var $G__50004$jscomp$inline_4207_JSCompiler_inline_result$jscomp$inline_4206$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
          $G__50004$jscomp$inline_4207_JSCompiler_inline_result$jscomp$inline_4206$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__50004$jscomp$inline_4207_JSCompiler_inline_result$jscomp$inline_4206$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__50004$jscomp$inline_4207_JSCompiler_inline_result$jscomp$inline_4206$$);
          $G__49996_JSCompiler_temp_const$jscomp$inline_4205$$ = {className:$G__49996_JSCompiler_temp_const$jscomp$inline_4205$$, children:["Zadik Zadikian’s ", $G__50004$jscomp$inline_4207_JSCompiler_inline_result$jscomp$inline_4206$$, " is a practice tuned precisely to these frequencies. In a pavilion where the brick — the most elementary building unit, unchanged for eleven millennia — is cast, stacked, disassembled, and reassembled over six months, simplicity becomes the method and the meaning."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__49996_JSCompiler_temp_const$jscomp$inline_4205$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__49996_JSCompiler_temp_const$jscomp$inline_4205$$);
        }(), function() {
          var $G__50012$jscomp$1$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__50018$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Doing the work."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__50018$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__50018$jscomp$1$$);
            }(), " The minor keys ask for sustained attention, not spectacle. In ", function() {
              var $G__50026$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__50026$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__50026$jscomp$1$$);
            }(), ", the act of making is neither performed nor concealed. Plaster is mixed, forms are poured, bricks emerge. Day after day, the labor itself is the statement — a refusal of the accelerated and the disposable in favor of the deliberate and the enduring."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__50012$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__50012$jscomp$1$$);
        }(), function() {
          var $G__50032$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__50037$jscomp$2$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Making simple things."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__50037$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__50037$jscomp$2$$);
            }(), " Each brick is humble. It carries no narrative, bears no symbol. Like the creole garden where thirty species protect each other on a lick of land, the individual unit is modest. Its power lives not in what it represents but in what it ", function() {
              var $G__50041$jscomp$2$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"is"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__50041$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__50041$jscomp$2$$);
            }(), " — material presence, weight, color, surface."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__50032$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__50032$$);
        }(), function() {
          var $G__50045$jscomp$2_JSCompiler_temp_const$jscomp$inline_4209$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
          var $G__50049$jscomp$inline_4211_JSCompiler_inline_result$jscomp$inline_4210$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Higher-order structures from simplicity."};
          $G__50049$jscomp$inline_4211_JSCompiler_inline_result$jscomp$inline_4210$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__50049$jscomp$inline_4211_JSCompiler_inline_result$jscomp$inline_4210$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__50049$jscomp$inline_4211_JSCompiler_inline_result$jscomp$inline_4210$$);
          $G__50045$jscomp$2_JSCompiler_temp_const$jscomp$inline_4209$$ = {className:$G__50045$jscomp$2_JSCompiler_temp_const$jscomp$inline_4209$$, children:[$G__50049$jscomp$inline_4211_JSCompiler_inline_result$jscomp$inline_4210$$, " When stacked, these bricks become something else entirely. Composite forms emerge — not designed from above but discovered through assembly. The whole exceeds its parts, not through complexity of component, but through the patient, improvisational logic of combination. Like polyrhythm in jazz, coherence arises from the interplay of simple, repeating elements."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__50045$jscomp$2_JSCompiler_temp_const$jscomp$inline_4209$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__50045$jscomp$2_JSCompiler_temp_const$jscomp$inline_4209$$);
        }(), function() {
          var $G__50053$jscomp$2_JSCompiler_temp_const$jscomp$inline_4213$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
          var $G__50057$jscomp$inline_4215_JSCompiler_inline_result$jscomp$inline_4214$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Simplicity is not ease."};
          $G__50057$jscomp$inline_4215_JSCompiler_inline_result$jscomp$inline_4214$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__50057$jscomp$inline_4215_JSCompiler_inline_result$jscomp$inline_4214$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__50057$jscomp$inline_4215_JSCompiler_inline_result$jscomp$inline_4214$$);
          $G__50053$jscomp$2_JSCompiler_temp_const$jscomp$inline_4213$$ = {className:$G__50053$jscomp$2_JSCompiler_temp_const$jscomp$inline_4213$$, children:[$G__50057$jscomp$inline_4215_JSCompiler_inline_result$jscomp$inline_4214$$, " To cast a perfect brick, to find the right pigment, to know which form belongs beside another — this is the discipline beneath the quiet surface. The minor keys sound gentle, but they demand the deepest listening. The studio is where that discipline lives: not in reaching for the obvious, but in reaching for the precise."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__50053$jscomp$2_JSCompiler_temp_const$jscomp$inline_4213$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__50053$jscomp$2_JSCompiler_temp_const$jscomp$inline_4213$$);
        }(), function() {
          var $G__50061$jscomp$1$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__50065$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Reaching for the right tool."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__50065$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__50065$$);
            }(), " Zadikian does not reach for what is always close at hand. He reaches for what is right. The plaster, the mold, the trowel — each chosen not for convenience but for fidelity to the form. In this way, ", function() {
              var $G__50069$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__50069$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__50069$jscomp$1$$);
            }(), " enacts the curatorial premise of In Minor Keys: that beauty is made together, through relation, through the handmade, through the refusal to shortcut the work that matters."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__50061$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__50061$jscomp$1$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__49984$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__49984$jscomp$1$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__49769$jscomp$1_props__41642__auto__$jscomp$29_vec__49765$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__49769$jscomp$1_props__41642__auto__$jscomp$29_vec__49765$$);
};
$amp$pages$landing$in_minor_keys$in_minor_keys$$ = function($G__50080_id$jscomp$100_map__50078_props__41642__auto__$jscomp$30_vec__50075$$, $G__50084$jscomp$inline_4218_JSCompiler_inline_result$jscomp$inline_4217_idx$jscomp$78_maybe_ref__41643__auto__$jscomp$30$$) {
  $G__50080_id$jscomp$100_map__50078_props__41642__auto__$jscomp$30_vec__50075$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__50080_id$jscomp$100_map__50078_props__41642__auto__$jscomp$30_vec__50075$$), $G__50084$jscomp$inline_4218_JSCompiler_inline_result$jscomp$inline_4217_idx$jscomp$78_maybe_ref__41643__auto__$jscomp$30$$], null);
  $G__50080_id$jscomp$100_map__50078_props__41642__auto__$jscomp$30_vec__50075$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__50080_id$jscomp$100_map__50078_props__41642__auto__$jscomp$30_vec__50075$$, 0, null);
  var $map__50078__$1_title$jscomp$41$$ = $APP.$cljs$core$__destructure_map$$($G__50080_id$jscomp$100_map__50078_props__41642__auto__$jscomp$30_vec__50075$$);
  $G__50080_id$jscomp$100_map__50078_props__41642__auto__$jscomp$30_vec__50075$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__50078__$1_title$jscomp$41$$, $APP.$cljs$cst$286$id$$);
  $G__50084$jscomp$inline_4218_JSCompiler_inline_result$jscomp$inline_4217_idx$jscomp$78_maybe_ref__41643__auto__$jscomp$30$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__50078__$1_title$jscomp$41$$, $APP.$cljs$cst$756$idx$$);
  var $subtitle$jscomp$9$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__50078__$1_title$jscomp$41$$, $APP.$cljs$cst$769$subtitle$$);
  $map__50078__$1_title$jscomp$41$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__50078__$1_title$jscomp$41$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__50084$jscomp$inline_4218_JSCompiler_inline_result$jscomp$inline_4217_idx$jscomp$78_maybe_ref__41643__auto__$jscomp$30$$ = {idx:$G__50084$jscomp$inline_4218_JSCompiler_inline_result$jscomp$inline_4217_idx$jscomp$78_maybe_ref__41643__auto__$jscomp$30$$, "section-hint":$subtitle$jscomp$9$$, title:$map__50078__$1_title$jscomp$41$$, "expand-button-label":"Read full statement", "preview-text":$amp$pages$landing$in_minor_keys$preview$$, "full-text":$amp$pages$landing$in_minor_keys$details$$};
  $G__50084$jscomp$inline_4218_JSCompiler_inline_result$jscomp$inline_4217_idx$jscomp$78_maybe_ref__41643__auto__$jscomp$30$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__50084$jscomp$inline_4218_JSCompiler_inline_result$jscomp$inline_4217_idx$jscomp$78_maybe_ref__41643__auto__$jscomp$30$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__50084$jscomp$inline_4218_JSCompiler_inline_result$jscomp$inline_4217_idx$jscomp$78_maybe_ref__41643__auto__$jscomp$30$$);
  $G__50080_id$jscomp$100_map__50078_props__41642__auto__$jscomp$30_vec__50075$$ = {id:$G__50080_id$jscomp$100_map__50078_props__41642__auto__$jscomp$30_vec__50075$$, children:$G__50084$jscomp$inline_4218_JSCompiler_inline_result$jscomp$inline_4217_idx$jscomp$78_maybe_ref__41643__auto__$jscomp$30$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__50080_id$jscomp$100_map__50078_props__41642__auto__$jscomp$30_vec__50075$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__50080_id$jscomp$100_map__50078_props__41642__auto__$jscomp$30_vec__50075$$);
};
$amp$pages$landing$venue$preview$$ = function($G__47413$jscomp$1_map__47409_props__41658__auto__$jscomp$14_vec__47406$$, $maybe_ref__41659__auto__$jscomp$14$$) {
  $G__47413$jscomp$1_map__47409_props__41658__auto__$jscomp$14_vec__47406$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__47413$jscomp$1_map__47409_props__41658__auto__$jscomp$14_vec__47406$$), $maybe_ref__41659__auto__$jscomp$14$$], null);
  $G__47413$jscomp$1_map__47409_props__41658__auto__$jscomp$14_vec__47406$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__47413$jscomp$1_map__47409_props__41658__auto__$jscomp$14_vec__47406$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__47413$jscomp$1_map__47409_props__41658__auto__$jscomp$14_vec__47406$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__47413$jscomp$1_map__47409_props__41658__auto__$jscomp$14_vec__47406$$ = function() {
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
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47413$jscomp$1_map__47409_props__41658__auto__$jscomp$14_vec__47406$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__47413$jscomp$1_map__47409_props__41658__auto__$jscomp$14_vec__47406$$);
};
$amp$pages$landing$venue$details$$ = function($G__47493$jscomp$2_map__47485_props__41658__auto__$jscomp$15_vec__47482$$, $maybe_ref__41659__auto__$jscomp$15$$) {
  $G__47493$jscomp$2_map__47485_props__41658__auto__$jscomp$15_vec__47482$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__47493$jscomp$2_map__47485_props__41658__auto__$jscomp$15_vec__47482$$), $maybe_ref__41659__auto__$jscomp$15$$], null);
  $G__47493$jscomp$2_map__47485_props__41658__auto__$jscomp$15_vec__47482$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__47493$jscomp$2_map__47485_props__41658__auto__$jscomp$15_vec__47482$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__47493$jscomp$2_map__47485_props__41658__auto__$jscomp$15_vec__47482$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $is_desktop_QMARK_$jscomp$4$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__47493$jscomp$2_map__47485_props__41658__auto__$jscomp$15_vec__47482$$ = function() {
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
          var $G__47547$$ = {dev:!1, "interactive?":$is_desktop_QMARK_$jscomp$4$$, "initial-view":$APP.$amp$pages$venue$map_config$initial_view$$, "ant-paths":$APP.$amp$pages$venue$map_config$ant_paths$$, layers:$APP.$amp$pages$venue$map_config$layers$$};
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
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47493$jscomp$2_map__47485_props__41658__auto__$jscomp$15_vec__47482$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47493$jscomp$2_map__47485_props__41658__auto__$jscomp$15_vec__47482$$);
};
$amp$pages$landing$venue$location_section$$ = function($G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$16_vec__47616$$, $G__47637$jscomp$inline_4345_JSCompiler_inline_result$jscomp$inline_4344_map__47619__$1_maybe_ref__41659__auto__$jscomp$16_title$jscomp$42$$) {
  $G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$16_vec__47616$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$16_vec__47616$$), $G__47637$jscomp$inline_4345_JSCompiler_inline_result$jscomp$inline_4344_map__47619__$1_maybe_ref__41659__auto__$jscomp$16_title$jscomp$42$$], null);
  $G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$16_vec__47616$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$16_vec__47616$$, 0, null);
  $G__47637$jscomp$inline_4345_JSCompiler_inline_result$jscomp$inline_4344_map__47619__$1_maybe_ref__41659__auto__$jscomp$16_title$jscomp$42$$ = $APP.$cljs$core$__destructure_map$$($G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$16_vec__47616$$);
  $G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$16_vec__47616$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47637$jscomp$inline_4345_JSCompiler_inline_result$jscomp$inline_4344_map__47619__$1_maybe_ref__41659__auto__$jscomp$16_title$jscomp$42$$, $APP.$cljs$cst$286$id$$);
  $G__47637$jscomp$inline_4345_JSCompiler_inline_result$jscomp$inline_4344_map__47619__$1_maybe_ref__41659__auto__$jscomp$16_title$jscomp$42$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47637$jscomp$inline_4345_JSCompiler_inline_result$jscomp$inline_4344_map__47619__$1_maybe_ref__41659__auto__$jscomp$16_title$jscomp$42$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__47637$jscomp$inline_4345_JSCompiler_inline_result$jscomp$inline_4344_map__47619__$1_maybe_ref__41659__auto__$jscomp$16_title$jscomp$42$$ = {title:$APP.$cljs$core$truth_$$($G__47637$jscomp$inline_4345_JSCompiler_inline_result$jscomp$inline_4344_map__47619__$1_maybe_ref__41659__auto__$jscomp$16_title$jscomp$42$$) ? $G__47637$jscomp$inline_4345_JSCompiler_inline_result$jscomp$inline_4344_map__47619__$1_maybe_ref__41659__auto__$jscomp$16_title$jscomp$42$$ : "The Venue", "expand-button-label":"Explore the venue", 
  "preview-text":$amp$pages$landing$venue$preview$$, "full-text":$amp$pages$landing$venue$details$$};
  $G__47637$jscomp$inline_4345_JSCompiler_inline_result$jscomp$inline_4344_map__47619__$1_maybe_ref__41659__auto__$jscomp$16_title$jscomp$42$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__47637$jscomp$inline_4345_JSCompiler_inline_result$jscomp$inline_4344_map__47619__$1_maybe_ref__41659__auto__$jscomp$16_title$jscomp$42$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__47637$jscomp$inline_4345_JSCompiler_inline_result$jscomp$inline_4344_map__47619__$1_maybe_ref__41659__auto__$jscomp$16_title$jscomp$42$$);
  $G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$16_vec__47616$$ = {id:$G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$16_vec__47616$$, children:$G__47637$jscomp$inline_4345_JSCompiler_inline_result$jscomp$inline_4344_map__47619__$1_maybe_ref__41659__auto__$jscomp$16_title$jscomp$42$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$16_vec__47616$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__47629$jscomp$1_id$jscomp$101_map__47619_props__41658__auto__$jscomp$16_vec__47616$$);
};
$amp$pages$landing$hero$mobile_hero_section$$ = function($G__56316_props__41646__auto__$jscomp$17_vec__56312$$) {
  $APP.$helix$core$extract_cljs_props$$($G__56316_props__41646__auto__$jscomp$17_vec__56312$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__56316_props__41646__auto__$jscomp$17_vec__56312$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ctx$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$770$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__56316_props__41646__auto__$jscomp$17_vec__56312$$, 0, null);
  var $is_active_QMARK_$jscomp$10$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__56316_props__41646__auto__$jscomp$17_vec__56312$$, 1, null), $clone_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$940$boxDecorationBreak$$, "clone", $cljs$cst$941$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__56316_props__41646__auto__$jscomp$17_vec__56312$$ = function() {
    return {id:"video", ref:$outer_ctx$jscomp$1$$, className:"relative w-full overflow-hidden", children:function() {
      var $G__56320$$ = function() {
        return {className:"w-full h-screen relative flex flex-col", children:[function() {
          var $G__56324_G__56328$jscomp$inline_4223$$ = {"allow-audio?":!1, "playback-id":"fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo", "should-play?":$is_active_QMARK_$jscomp$10$$};
          $G__56324_G__56328$jscomp$inline_4223$$ = {className:"absolute inset-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$hero$lazy_video_background$$, $G__56324_G__56328$jscomp$inline_4223$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$hero$lazy_video_background$$, $G__56324_G__56328$jscomp$inline_4223$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__56324_G__56328$jscomp$inline_4223$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__56324_G__56328$jscomp$inline_4223$$);
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
              var $G__56354$jscomp$1_JSCompiler_temp_const$jscomp$inline_4225$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-xs sm:text-sm uppercase tracking-[0.2em] max-w-md text-center leading-loose text-white/90"])));
              var $G__56358$jscomp$inline_4227_JSCompiler_inline_result$jscomp$inline_4226$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/50 px-3 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"Armenia Pavilion · 61st International Art Exhibition La Biennale di Venezia"};
              $G__56358$jscomp$inline_4227_JSCompiler_inline_result$jscomp$inline_4226$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__56358$jscomp$inline_4227_JSCompiler_inline_result$jscomp$inline_4226$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__56358$jscomp$inline_4227_JSCompiler_inline_result$jscomp$inline_4226$$);
              $G__56354$jscomp$1_JSCompiler_temp_const$jscomp$inline_4225$$ = {className:$G__56354$jscomp$1_JSCompiler_temp_const$jscomp$inline_4225$$, children:$G__56358$jscomp$inline_4227_JSCompiler_inline_result$jscomp$inline_4226$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__56354$jscomp$1_JSCompiler_temp_const$jscomp$inline_4225$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__56354$jscomp$1_JSCompiler_temp_const$jscomp$inline_4225$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__56344$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__56344$$);
        }(), function() {
          var $G__56362_JSCompiler_temp_const$jscomp$inline_4229$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-1\n                text-white/80 hover:text-white transition-colors", "font-display", "text-xs uppercase tracking-[0.2em]"])));
          var $G__56366$jscomp$inline_4231_JSCompiler_inline_result$jscomp$inline_4230$$ = {className:"text-lg animate-bounce", children:"↓"};
          $G__56366$jscomp$inline_4231_JSCompiler_inline_result$jscomp$inline_4230$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__56366$jscomp$inline_4231_JSCompiler_inline_result$jscomp$inline_4230$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__56366$jscomp$inline_4231_JSCompiler_inline_result$jscomp$inline_4230$$);
          $G__56362_JSCompiler_temp_const$jscomp$inline_4229$$ = {href:"#press-release", className:$G__56362_JSCompiler_temp_const$jscomp$inline_4229$$, children:["Learn More", $G__56366$jscomp$inline_4231_JSCompiler_inline_result$jscomp$inline_4230$$]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__56362_JSCompiler_temp_const$jscomp$inline_4229$$) : $APP.$helix$core$jsxs$$.call(null, "a", $G__56362_JSCompiler_temp_const$jscomp$inline_4229$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__56320$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__56320$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__56316_props__41646__auto__$jscomp$17_vec__56312$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__56316_props__41646__auto__$jscomp$17_vec__56312$$);
};
$amp$pages$landing$teaser$teaser_section$$ = function($G__268899_props__41575__auto__$jscomp$33_vec__268881$$) {
  $APP.$helix$core$extract_cljs_props$$($G__268899_props__41575__auto__$jscomp$33_vec__268881$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ref$$ = $APP.$helix$hooks$use_ref$$("outer-ref");
  $G__268899_props__41575__auto__$jscomp$33_vec__268881$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$770$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268899_props__41575__auto__$jscomp$33_vec__268881$$, 0, null);
  var $is_active_QMARK_$jscomp$11$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268899_props__41575__auto__$jscomp$33_vec__268881$$, 1, null), $label_class$jscomp$1$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-semibold", "text-[10px] uppercase tracking-[0.2em]", "text-amber-600  dark:text-amber-300"])), $clone_style$jscomp$1$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 
  2, [$cljs$cst$940$boxDecorationBreak$$, "clone", $cljs$cst$941$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__268899_props__41575__auto__$jscomp$33_vec__268881$$ = function() {
    return {id:"teaser", ref:$outer_ref$$, className:"relative w-full min-h-screen overflow-hidden", children:[function() {
      var $G__268911_G__268915$jscomp$inline_4234$$ = {"allow-audio?":!1, "playback-id":"Izp5007Abkc00t4Ubns7pAiqq2zG7JIp01tvAoaVOny7O00", "should-play?":$is_active_QMARK_$jscomp$11$$};
      $G__268911_G__268915$jscomp$inline_4234$$ = {className:"absolute inset-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$teaser$lazy_video$$, $G__268911_G__268915$jscomp$inline_4234$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$teaser$lazy_video$$, $G__268911_G__268915$jscomp$inline_4234$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268911_G__268915$jscomp$inline_4234$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268911_G__268915$jscomp$inline_4234$$);
    }(), function() {
      var $G__268929$$ = {className:"absolute inset-0 z-[1] pointer-events-none", style:{background:$APP.$helix$impl$props$__GT_js$$("linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.1) 100%), linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.05) 50%)")}};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268929$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268929$$);
    }(), function() {
      var $G__268941$$ = function() {
        return {className:"relative z-10 flex flex-col justify-center\n               min-h-screen px-6 sm:px-12 lg:px-20\n               py-16 sm:py-24\n               max-w-4xl", children:[function() {
          var $G__268949_JSCompiler_temp_const$jscomp$inline_4236$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-bold", "uppercase tracking-wider\n                leading-relaxed text-4xl sm:text-5xl lg:text-6xl", "text-slate-950  dark:text-white", "mb-6"])));
          var $G__268954$jscomp$inline_4238_JSCompiler_inline_result$jscomp$inline_4237$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/70 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"The Studio"};
          $G__268954$jscomp$inline_4238_JSCompiler_inline_result$jscomp$inline_4237$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268954$jscomp$inline_4238_JSCompiler_inline_result$jscomp$inline_4237$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268954$jscomp$inline_4238_JSCompiler_inline_result$jscomp$inline_4237$$);
          $G__268949_JSCompiler_temp_const$jscomp$inline_4236$$ = {className:$G__268949_JSCompiler_temp_const$jscomp$inline_4236$$, children:$G__268954$jscomp$inline_4238_JSCompiler_inline_result$jscomp$inline_4237$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__268949_JSCompiler_temp_const$jscomp$inline_4236$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__268949_JSCompiler_temp_const$jscomp$inline_4236$$);
        }(), function() {
          var $G__268964_JSCompiler_temp_const$jscomp$inline_4240$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-sm sm:text-base uppercase tracking-[0.15em]\n                leading-loose text-white/90 mb-8 max-w-xl"])));
          var $G__268974$jscomp$inline_4242_JSCompiler_inline_result$jscomp$inline_4241$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/50 px-3 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"A living studio at the heart of the Venice Biennale"};
          $G__268974$jscomp$inline_4242_JSCompiler_inline_result$jscomp$inline_4241$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268974$jscomp$inline_4242_JSCompiler_inline_result$jscomp$inline_4241$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268974$jscomp$inline_4242_JSCompiler_inline_result$jscomp$inline_4241$$);
          $G__268964_JSCompiler_temp_const$jscomp$inline_4240$$ = {className:$G__268964_JSCompiler_temp_const$jscomp$inline_4240$$, children:$G__268974$jscomp$inline_4242_JSCompiler_inline_result$jscomp$inline_4241$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__268964_JSCompiler_temp_const$jscomp$inline_4240$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__268964_JSCompiler_temp_const$jscomp$inline_4240$$);
        }(), function() {
          var $G__268984_G__268993$jscomp$inline_4397_JSCompiler_temp_const$jscomp$inline_4398$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-body", "text-base sm:text-lg leading-relaxed text-white/90"])));
          var $G__268997$jscomp$inline_4400_JSCompiler_inline_result$jscomp$inline_4399$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"Over six months, sculptor Zadik Zadikian and his team will occupy the Arsenale Militare—casting, assembling, and building in real time. Nothing is fixed. Nothing is final. The work is the making itself."};
          $G__268997$jscomp$inline_4400_JSCompiler_inline_result$jscomp$inline_4399$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268997$jscomp$inline_4400_JSCompiler_inline_result$jscomp$inline_4399$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268997$jscomp$inline_4400_JSCompiler_inline_result$jscomp$inline_4399$$);
          $G__268984_G__268993$jscomp$inline_4397_JSCompiler_temp_const$jscomp$inline_4398$$ = {className:$G__268984_G__268993$jscomp$inline_4397_JSCompiler_temp_const$jscomp$inline_4398$$, children:$G__268997$jscomp$inline_4400_JSCompiler_inline_result$jscomp$inline_4399$$};
          $G__268984_G__268993$jscomp$inline_4397_JSCompiler_temp_const$jscomp$inline_4398$$ = {className:"space-y-3 mb-10 max-w-lg", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__268984_G__268993$jscomp$inline_4397_JSCompiler_temp_const$jscomp$inline_4398$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__268984_G__268993$jscomp$inline_4397_JSCompiler_temp_const$jscomp$inline_4398$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268984_G__268993$jscomp$inline_4397_JSCompiler_temp_const$jscomp$inline_4398$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268984_G__268993$jscomp$inline_4397_JSCompiler_temp_const$jscomp$inline_4398$$);
        }(), function() {
          var $G__269007$$ = function() {
            return {className:"grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10", children:[function() {
              var $G__269014$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__269021$$ = {className:$APP.$helix$impl$props$normalize_class$$($label_class$jscomp$1$$), children:"Opening"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269021$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269021$$);
                }(), function() {
                  var $G__269026_JSCompiler_temp_const$jscomp$inline_4248$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-xs sm:text-sm text-white/90"])));
                  var $G__269031$jscomp$inline_4250_JSCompiler_inline_result$jscomp$inline_4249$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"9 May – 22 November 2026"};
                  $G__269031$jscomp$inline_4250_JSCompiler_inline_result$jscomp$inline_4249$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269031$jscomp$inline_4250_JSCompiler_inline_result$jscomp$inline_4249$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269031$jscomp$inline_4250_JSCompiler_inline_result$jscomp$inline_4249$$);
                  $G__269026_JSCompiler_temp_const$jscomp$inline_4248$$ = {className:$G__269026_JSCompiler_temp_const$jscomp$inline_4248$$, children:$G__269031$jscomp$inline_4250_JSCompiler_inline_result$jscomp$inline_4249$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269026_JSCompiler_temp_const$jscomp$inline_4248$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269026_JSCompiler_temp_const$jscomp$inline_4248$$);
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
                  var $G__269047_JSCompiler_temp_const$jscomp$inline_4252$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-xs sm:text-sm text-white/90 hover:text-white\n                      underline underline-offset-4 decoration-white/30 hover:decoration-white/60\n                      transition-colors block whitespace-nowrap"])));
                  var $G__269051$jscomp$inline_4254_JSCompiler_inline_result$jscomp$inline_4253$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"Arsenale Militare, Venice"};
                  $G__269051$jscomp$inline_4254_JSCompiler_inline_result$jscomp$inline_4253$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269051$jscomp$inline_4254_JSCompiler_inline_result$jscomp$inline_4253$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269051$jscomp$inline_4254_JSCompiler_inline_result$jscomp$inline_4253$$);
                  $G__269047_JSCompiler_temp_const$jscomp$inline_4252$$ = {href:"https://maps.app.goo.gl/QvYkqwN1Bv7L9VDn7", target:"_blank", rel:"noopener noreferrer", className:$G__269047_JSCompiler_temp_const$jscomp$inline_4252$$, children:$G__269051$jscomp$inline_4254_JSCompiler_inline_result$jscomp$inline_4253$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__269047_JSCompiler_temp_const$jscomp$inline_4252$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__269047_JSCompiler_temp_const$jscomp$inline_4252$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269039$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269039$$);
            }(), function() {
              var $G__269056$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__269060$$ = {className:$APP.$helix$impl$props$normalize_class$$($label_class$jscomp$1$$), children:"Pavilion"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269060$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269060$$);
                }(), function() {
                  var $G__269064_JSCompiler_temp_const$jscomp$inline_4256$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-xs sm:text-sm text-white/90"])));
                  var $G__269068$jscomp$inline_4258_JSCompiler_inline_result$jscomp$inline_4257$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"Republic of Armenia"};
                  $G__269068$jscomp$inline_4258_JSCompiler_inline_result$jscomp$inline_4257$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269068$jscomp$inline_4258_JSCompiler_inline_result$jscomp$inline_4257$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269068$jscomp$inline_4258_JSCompiler_inline_result$jscomp$inline_4257$$);
                  $G__269064_JSCompiler_temp_const$jscomp$inline_4256$$ = {className:$G__269064_JSCompiler_temp_const$jscomp$inline_4256$$, children:$G__269068$jscomp$inline_4258_JSCompiler_inline_result$jscomp$inline_4257$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269064_JSCompiler_temp_const$jscomp$inline_4256$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269064_JSCompiler_temp_const$jscomp$inline_4256$$);
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
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268899_props__41575__auto__$jscomp$33_vec__268881$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__268899_props__41575__auto__$jscomp$33_vec__268881$$);
};
$APP.$amp$pages$landing$page$landing_view$$ = function($G__45625_props__41911__auto__$jscomp$8$$) {
  $APP.$helix$core$extract_cljs_props$$($G__45625_props__41911__auto__$jscomp$8$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $container_ref$jscomp$4$$ = $APP.$helix$hooks$use_ref$$("container-ref"), $is_desktop_QMARK_$jscomp$5$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__45625_props__41911__auto__$jscomp$8$$ = function() {
    return {ref:$container_ref$jscomp$4$$, className:$APP.$helix$impl$props$normalize_class$$("overflow-x-hidden grey-grad " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-900  dark:text-slate-100")), children:[$APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$5$$) ? function() {
      var $G__45629$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$nav$logo$logo_nav$$, $G__45629$$) : $APP.$helix$core$jsx$$.call(null, $amp$nav$logo$logo_nav$$, $G__45629$$);
    }() : null, function() {
      var $G__45631_G__45636$jscomp$inline_3691$$ = {};
      $G__45631_G__45636$jscomp$inline_3691$$ = {"section-id":"hero", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$hero$mobile_hero_section$$, $G__45631_G__45636$jscomp$inline_3691$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$hero$mobile_hero_section$$, $G__45631_G__45636$jscomp$inline_3691$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$ui$section$section$$, $G__45631_G__45636$jscomp$inline_3691$$, "hero") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section$section$$, $G__45631_G__45636$jscomp$inline_3691$$, "hero");
    }(), function() {
      var $G__45638_G__45643$jscomp$inline_3694$$ = {};
      $G__45638_G__45643$jscomp$inline_3694$$ = {"section-id":"teaser", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$teaser$teaser_section$$, $G__45638_G__45643$jscomp$inline_3694$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$teaser$teaser_section$$, $G__45638_G__45643$jscomp$inline_3694$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$ui$section$section$$, $G__45638_G__45643$jscomp$inline_3694$$, "teaser") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section$section$$, $G__45638_G__45643$jscomp$inline_3694$$, "teaser");
    }(), function() {
      var $G__45645$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$("w-full max-w-full overflow-x-hidden flex justify-center"), children:function() {
          var $G__45649$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("flex flex-col " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("w-full lg:w-8/12 min-w-0")), children:[function() {
              var $G__45653$$ = {id:"press-release", title:"Press Release"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$landing$press_release$press_release$$, $G__45653$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$landing$press_release$press_release$$, $G__45653$$);
            }(), function() {
              var $G__45657$$ = {id:"about-studio", title:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$landing$studio$about_studio$$, $G__45657$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$landing$studio$about_studio$$, $G__45657$$);
            }(), function() {
              var $G__45661$$ = {id:"venue", title:"The Venue"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$venue$location_section$$, $G__45661$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$venue$location_section$$, $G__45661$$);
            }(), function() {
              var $G__45665$$ = {id:"in-minor-keys", title:"In Minor Keys"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$in_minor_keys$$, $G__45665$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$in_minor_keys$$, $G__45665$$);
            }(), function() {
              var $G__45669$$ = {id:"artist", title:"The Artist"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$artist$artist_section$$, $G__45669$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$artist$artist_section$$, $G__45669$$);
            }(), function() {
              var $G__45673$$ = {id:"curators", title:"Curators"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$curators$curators_section$$, $G__45673$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$curators$curators_section$$, $G__45673$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45649$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45649$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45645$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45645$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45625_props__41911__auto__$jscomp$8$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45625_props__41911__auto__$jscomp$8$$);
};
$cljs$cst$944$visible_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "visible?", "visible?", 2129863715);
$cljs$cst$942$img$$ = new $APP.$cljs$core$Keyword$$(null, "img", "img", 1442687358);
$cljs$cst$940$boxDecorationBreak$$ = new $APP.$cljs$core$Keyword$$(null, "boxDecorationBreak", "boxDecorationBreak", 826536500);
$cljs$cst$938$markers_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "markers?", "markers?", -2073688636);
$cljs$cst$941$WebkitBoxDecorationBreak$$ = new $APP.$cljs$core$Keyword$$(null, "WebkitBoxDecorationBreak", "WebkitBoxDecorationBreak", 1903427859);
$cljs$cst$945$attribution$$ = new $APP.$cljs$core$Keyword$$(null, "attribution", "attribution", 1937239286);
$cljs$cst$943$bio$$ = new $APP.$cljs$core$Keyword$$(null, "bio", "bio", -331851886);
$cljs$cst$937$scroll_ref$$ = new $APP.$cljs$core$Keyword$$(null, "scroll-ref", "scroll-ref", -1108339867);
$cljs$cst$939$debug_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "debug?", "debug?", -1831756173);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("landing-view");
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$nav$logo$logo_nav$$, '(hooks/use-ref "comp-ref")(use-scroll-trigger comp-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y -250}, :is-on? is-active?})', 
null, null) : (void 0).call(null, $amp$nav$logo$logo_nav$$, '(hooks/use-ref "comp-ref")(use-scroll-trigger comp-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y -250}, :is-on? is-active?})', null, null)), $APP.$helix$core$register_BANG_$$($amp$nav$logo$logo_nav$$, "amp.nav.logo/logo-nav"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$artist$artist_section$$, '(hooks/use-ref "artist-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$pages$landing$artist$artist_section$$, '(hooks/use-ref "artist-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$artist$artist_section$$, "amp.pages.landing.artist/artist-section"));
var $amp$pages$landing$curators$curators$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Tony Shafrazi", $APP.$cljs$cst$819$role$$, "Curator", $cljs$cst$942$img$$, "https://atd-722658831.imgix.net/committee/tony.png", $cljs$cst$943$bio$$, "Tony Shafrazi (b. 1943, Abadan, Iran) is a renowned art dealer, gallerist, and curator. Trained at the Royal College of Art in London, he moved to New York in 1969 and opened the Tony Shafrazi Gallery in 1979, championing Jean-Michel Basquiat, Keith Haring, and Kenny Scharf alongside Picasso, Francis Bacon, and Warhol. He first met Zadik Zadikian while the artist was working with Richard Serra, and has supported his work for decades."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Tina Chakarian", $APP.$cljs$cst$819$role$$, "Curator", $cljs$cst$942$img$$, "https://atd-722658831.imgix.net/committee/tina.png", $cljs$cst$943$bio$$, "Tina Chakarian is a curator based in Boston and Yerevan. Born in Beirut, she studied Visual Arts at UCLA and Tufts University. Since 2015, she has served as Commissioner and Development Director of the Armenian Pavilion at La Biennale di Venezia, playing a central role in shaping Armenia’s sustained presence on the global stage."], 
null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$curators$curator_card$$, "", null, null) : (void 0).call(null, $amp$pages$landing$curators$curator_card$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$curators$curator_card$$, 
"amp.pages.landing.curators/curator-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$curators$curators_section$$, '(hooks/use-ref "curators-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$pages$landing$curators$curators_section$$, '(hooks/use-ref "curators-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$curators$curators_section$$, "amp.pages.landing.curators/curators-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$in_minor_keys$pull_quote$$, "", null, null) : (void 0).call(null, $amp$pages$landing$in_minor_keys$pull_quote$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$in_minor_keys$pull_quote$$, 
"amp.pages.landing.in-minor-keys/pull-quote"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$in_minor_keys$curator_card$$, "", null, null) : (void 0).call(null, $amp$pages$landing$in_minor_keys$curator_card$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$pages$landing$in_minor_keys$curator_card$$, "amp.pages.landing.in-minor-keys/curator-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$in_minor_keys$preview$$, '(hooks/use-ref "imk-preview-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$pages$landing$in_minor_keys$preview$$, '(hooks/use-ref "imk-preview-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$in_minor_keys$preview$$, "amp.pages.landing.in-minor-keys/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$in_minor_keys$details$$, '(hooks/use-ref "imk-details-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$pages$landing$in_minor_keys$details$$, '(hooks/use-ref "imk-details-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$in_minor_keys$details$$, "amp.pages.landing.in-minor-keys/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$in_minor_keys$in_minor_keys$$, "", null, null) : (void 0).call(null, $amp$pages$landing$in_minor_keys$in_minor_keys$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$pages$landing$in_minor_keys$in_minor_keys$$, "amp.pages.landing.in-minor-keys/in-minor-keys"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$venue$preview$$, "", null, null) : (void 0).call(null, $amp$pages$landing$venue$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$venue$preview$$, 
"amp.pages.landing.venue/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$venue$details$$, "(use-touch-enabled)", null, null) : (void 0).call(null, $amp$pages$landing$venue$details$$, "(use-touch-enabled)", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$venue$details$$, "amp.pages.landing.venue/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$venue$location_section$$, "", null, null) : (void 0).call(null, $amp$pages$landing$venue$location_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$venue$location_section$$, 
"amp.pages.landing.venue/location-section"));
var $amp$pages$landing$hero$lazy_video_background$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$ui$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$hero$mobile_hero_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null) : (void 0).call(null, 
$amp$pages$landing$hero$mobile_hero_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$hero$mobile_hero_section$$, "amp.pages.landing.hero/mobile-hero-section"));
var $amp$pages$landing$teaser$lazy_video$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$ui$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$teaser$teaser_section$$, '(hooks/use-ref "outer-ref")(use-scroll-trigger outer-ref {:end "bottom"})', null, null) : (void 0).call(null, 
$amp$pages$landing$teaser$teaser_section$$, '(hooks/use-ref "outer-ref")(use-scroll-trigger outer-ref {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$teaser$teaser_section$$, "amp.pages.landing.teaser/teaser-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$pages$landing$page$landing_view$$, '(hooks/use-ref "container-ref")(use-touch-enabled)', null, null) : (void 0).call(null, $APP.$amp$pages$landing$page$landing_view$$, 
'(hooks/use-ref "container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$pages$landing$page$landing_view$$, "amp.pages.landing.page/landing-view"));
$APP.$module$contents$shadow$loader_set_loaded$$();

}).call(this);