(function(){
'use strict';
var $amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$, $amp$nav$logo$logo_nav$$, $amp$pages$landing$artist$artist_section$$, $amp$pages$landing$curators$curator_card$$, $amp$pages$landing$curators$curators_section$$, $amp$pages$landing$in_minor_keys$pull_quote$$, $amp$pages$landing$in_minor_keys$curator_card$$, $amp$pages$landing$in_minor_keys$preview$$, $amp$pages$landing$in_minor_keys$details$$, $amp$pages$landing$in_minor_keys$in_minor_keys$$, $amp$pages$landing$venue$preview$$, 
$amp$pages$landing$venue$details$$, $amp$pages$landing$venue$location_section$$, $amp$pages$landing$hero$mobile_hero_section$$, $amp$pages$landing$teaser$teaser_section$$, $cljs$cst$974$visible_QMARK_$$, $cljs$cst$972$img$$, $cljs$cst$970$boxDecorationBreak$$, $cljs$cst$968$markers_QMARK_$$, $cljs$cst$971$WebkitBoxDecorationBreak$$, $cljs$cst$975$attribution$$, $cljs$cst$973$bio$$, $cljs$cst$967$scroll_ref$$, $cljs$cst$969$debug_QMARK_$$;
$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$ = function($ref$jscomp$26$$, $G__35749_35769_p__35732_scroll_ref$$) {
  var $is_active_QMARK_$jscomp$8_map__35734__$1$$ = $APP.$cljs$core$__destructure_map$$($G__35749_35769_p__35732_scroll_ref$$), $on_toggle$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($is_active_QMARK_$jscomp$8_map__35734__$1$$, $APP.$cljs$cst$832$on_toggle$$), $on_enter$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($is_active_QMARK_$jscomp$8_map__35734__$1$$, $APP.$cljs$cst$766$on_enter$$), $start$jscomp$178$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$8_map__35734__$1$$, 
  $APP.$cljs$cst$269$start$$, "top center"), $end$jscomp$48$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$8_map__35734__$1$$, $APP.$cljs$cst$783$end$$, "bottom");
  $G__35749_35769_p__35732_scroll_ref$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($is_active_QMARK_$jscomp$8_map__35734__$1$$, $cljs$cst$967$scroll_ref$$);
  var $markers_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$8_map__35734__$1$$, $cljs$cst$968$markers_QMARK_$$, !1);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$8_map__35734__$1$$, $cljs$cst$969$debug_QMARK_$$, !1);
  var $vec__35740_visited_QMARK_$jscomp$2$$ = $APP.$helix$hooks$use_state$$(!1);
  $is_active_QMARK_$jscomp$8_map__35734__$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__35740_visited_QMARK_$jscomp$2$$, 0, null);
  var $set_is_active_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__35740_visited_QMARK_$jscomp$2$$, 1, null), $G__35748_35768_vec__35743$$ = $APP.$helix$hooks$use_state$$(!1);
  $vec__35740_visited_QMARK_$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35748_35768_vec__35743$$, 0, null);
  var $set_visited_BANG_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35748_35768_vec__35743$$, 1, null);
  $G__35748_35768_vec__35743$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $st$jscomp$2$$ = $APP.$module$node_modules$gsap$ScrollTrigger$$.ScrollTrigger.create({trigger:$APP.$cljs$core$_deref$$($ref$jscomp$26$$), start:$start$jscomp$178$$, end:$end$jscomp$48$$, invalidateOnRefresh:!0, onRefresh:function() {
      return null;
    }, onEnter:function($self$jscomp$21$$) {
      $set_visited_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_visited_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $set_visited_BANG_$jscomp$1$$.call(null, !0);
      return $APP.$cljs$core$truth_$$($on_enter$jscomp$1$$) ? $on_enter$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_enter$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($self$jscomp$21$$) : $on_enter$jscomp$1$$.call(null, $self$jscomp$21$$) : null;
    }, onToggle:function($self$jscomp$22$$) {
      var $G__35750_35770$$ = $self$jscomp$22$$.isActive;
      $set_is_active_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_active_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($G__35750_35770$$) : $set_is_active_BANG_$$.call(null, $G__35750_35770$$);
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
  $G__35749_35769_p__35732_scroll_ref$$ = [$ref$jscomp$26$$, $G__35749_35769_p__35732_scroll_ref$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__35748_35768_vec__35743$$, $G__35749_35769_p__35732_scroll_ref$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__35748_35768_vec__35743$$, $G__35749_35769_p__35732_scroll_ref$$);
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$vec__35740_visited_QMARK_$jscomp$2$$, $is_active_QMARK_$jscomp$8_map__35734__$1$$], null);
};
$amp$nav$logo$logo_nav$$ = function($G__35889_is_active_QMARK_$jscomp$9_props__22175__auto__$jscomp$162_vec__35885$$) {
  $APP.$helix$core$extract_cljs_props$$($G__35889_is_active_QMARK_$jscomp$9_props__22175__auto__$jscomp$162_vec__35885$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__35889_is_active_QMARK_$jscomp$9_props__22175__auto__$jscomp$162_vec__35885$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$269$start$$, function() {
    return window.innerHeight - window.innerHeight / 8;
  }, $APP.$cljs$cst$783$end$$, "1000000px", $cljs$cst$968$markers_QMARK_$$, !1, $cljs$cst$969$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35889_is_active_QMARK_$jscomp$9_props__22175__auto__$jscomp$162_vec__35885$$, 0, null);
  $G__35889_is_active_QMARK_$jscomp$9_props__22175__auto__$jscomp$162_vec__35885$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35889_is_active_QMARK_$jscomp$9_props__22175__auto__$jscomp$162_vec__35885$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$);
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$620$target$$, $comp_ref$$, $APP.$cljs$cst$748$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$413$y$$, 0], null), $APP.$cljs$cst$750$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$413$y$$, -250], null), $APP.$cljs$cst$746$is_on_QMARK_$$, $G__35889_is_active_QMARK_$jscomp$9_props__22175__auto__$jscomp$162_vec__35885$$], 
  null));
  $G__35889_is_active_QMARK_$jscomp$9_props__22175__auto__$jscomp$162_vec__35885$$ = function() {
    return {ref:$comp_ref$$, className:"fixed\n                    opacity-90\n                    z-30\n                    right-8\n                    top-20\n                    flex flex-col items-end gap-3", children:function() {
      var $G__35898$$ = function() {
        return {className:"w-28 lg:w-32", children:[function() {
          var $G__35902$$ = function() {
            return {className:"cursor-pointer", onClick:function() {
              return window.open("https://www.labiennale.org/en/art/2026", "_blank");
            }, children:function() {
              var $G__35906$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"invert dark:invert-0"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__35906$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__35906$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35902$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35902$$);
        }(), function() {
          var $G__35910$$ = function() {
            return {className:"mt-4", children:function() {
              var $G__35914$$ = function() {
                return {title:"Donate Now", "additional-classes":"w-full justify-center", size:$APP.$cljs$cst$721$sm$$, "bg-opacity":0.8, "on-click":function() {
                  return $APP.$reitit$frontend$easy$push_state$cljs$0core$0IFn$0_invoke$0arity$01$$();
                }};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$button$main_button$$, $G__35914$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$button$main_button$$, $G__35914$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35910$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35910$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35898$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35898$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35889_is_active_QMARK_$jscomp$9_props__22175__auto__$jscomp$162_vec__35885$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35889_is_active_QMARK_$jscomp$9_props__22175__auto__$jscomp$162_vec__35885$$);
};
$amp$pages$landing$artist$artist_section$$ = function($G__36111_map__36086_map__36086__$1_props__22175__auto__$jscomp$163_vec__36083_vec__36099$$, $maybe_ref__22176__auto__$jscomp$163$$) {
  $G__36111_map__36086_map__36086__$1_props__22175__auto__$jscomp$163_vec__36083_vec__36099$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__36111_map__36086_map__36086__$1_props__22175__auto__$jscomp$163_vec__36083_vec__36099$$), $maybe_ref__22176__auto__$jscomp$163$$], null);
  $G__36111_map__36086_map__36086__$1_props__22175__auto__$jscomp$163_vec__36083_vec__36099$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36111_map__36086_map__36086__$1_props__22175__auto__$jscomp$163_vec__36083_vec__36099$$, 0, null);
  $G__36111_map__36086_map__36086__$1_props__22175__auto__$jscomp$163_vec__36083_vec__36099$$ = $APP.$cljs$core$__destructure_map$$($G__36111_map__36086_map__36086__$1_props__22175__auto__$jscomp$163_vec__36083_vec__36099$$);
  var $id$jscomp$98$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36111_map__36086_map__36086__$1_props__22175__auto__$jscomp$163_vec__36083_vec__36099$$, $APP.$cljs$cst$286$id$$), $title$jscomp$39$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36111_map__36086_map__36086__$1_props__22175__auto__$jscomp$163_vec__36083_vec__36099$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$27$$ = $APP.$helix$hooks$use_ref$$("artist-ref");
  $G__36111_map__36086_map__36086__$1_props__22175__auto__$jscomp$163_vec__36083_vec__36099$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$27$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$764$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36111_map__36086_map__36086__$1_props__22175__auto__$jscomp$163_vec__36083_vec__36099$$, 0, null);
  var $visible_QMARK_$jscomp$6$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36111_map__36086_map__36086__$1_props__22175__auto__$jscomp$163_vec__36083_vec__36099$$, 1, null), $tag_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$970$boxDecorationBreak$$, "clone", $cljs$cst$971$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__36111_map__36086_map__36086__$1_props__22175__auto__$jscomp$163_vec__36083_vec__36099$$ = function() {
    return {id:$id$jscomp$98$$, ref:$ref$jscomp$27$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["pt-12 sm:pt-14", "pb-10 sm:pb-12"]))), children:[$APP.$cljs$core$truth_$$($title$jscomp$39$$) ? function() {
      var $G__36121_JSCompiler_temp_const$jscomp$inline_4189$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_name_lg$$, "mb-10 px-4"])));
      var $G__36130$jscomp$inline_4191_JSCompiler_inline_result$jscomp$inline_4190$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-200/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$$), children:$title$jscomp$39$$};
      $G__36130$jscomp$inline_4191_JSCompiler_inline_result$jscomp$inline_4190$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__36130$jscomp$inline_4191_JSCompiler_inline_result$jscomp$inline_4190$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__36130$jscomp$inline_4191_JSCompiler_inline_result$jscomp$inline_4190$$);
      $G__36121_JSCompiler_temp_const$jscomp$inline_4189$$ = {className:$G__36121_JSCompiler_temp_const$jscomp$inline_4189$$, children:$G__36130$jscomp$inline_4191_JSCompiler_inline_result$jscomp$inline_4190$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__36121_JSCompiler_temp_const$jscomp$inline_4189$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__36121_JSCompiler_temp_const$jscomp$inline_4189$$);
    }() : null, function() {
      var $G__36139$$ = function() {
        return {className:"px-4 sm:flex sm:gap-10 sm:items-start", children:[function() {
          var $G__36147_G__36154$jscomp$inline_4194$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/zz-portrait-2.jpg", fit:"crop", "aspect-ratio":0.75, "active?":$visible_QMARK_$jscomp$6$$};
          $G__36147_G__36154$jscomp$inline_4194$$ = {className:"w-full sm:w-2/5 flex-shrink-0 aspect-[3/4] rounded-sm overflow-hidden mb-8 sm:mb-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__36147_G__36154$jscomp$inline_4194$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__36147_G__36154$jscomp$inline_4194$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36147_G__36154$jscomp$inline_4194$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36147_G__36154$jscomp$inline_4194$$);
        }(), function() {
          var $G__36163$$ = function() {
            return {className:"sm:flex-1 sm:min-w-0", children:[function() {
              var $G__36172_JSCompiler_temp_const$jscomp$inline_4196$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_name_lg$$, "mb-2"])));
              var $G__36176$jscomp$inline_4198_JSCompiler_inline_result$jscomp$inline_4197$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-200/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$$), children:"Zadik Zadikian"};
              $G__36176$jscomp$inline_4198_JSCompiler_inline_result$jscomp$inline_4197$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__36176$jscomp$inline_4198_JSCompiler_inline_result$jscomp$inline_4197$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__36176$jscomp$inline_4198_JSCompiler_inline_result$jscomp$inline_4197$$);
              $G__36172_JSCompiler_temp_const$jscomp$inline_4196$$ = {className:$G__36172_JSCompiler_temp_const$jscomp$inline_4196$$, children:$G__36176$jscomp$inline_4198_JSCompiler_inline_result$jscomp$inline_4197$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36172_JSCompiler_temp_const$jscomp$inline_4196$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36172_JSCompiler_temp_const$jscomp$inline_4196$$);
            }(), function() {
              var $G__36183$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_role$$, "mb-6"]))), children:"Artist"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36183$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36183$$);
            }(), function() {
              var $G__36187$$ = function() {
                return {className:"border-l-2 border-white/20 pl-6 my-8", children:[function() {
                  var $G__36191$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "italic"]))), children:"“If you want to learn about something, become that thing and then study yourself.”"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36191$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36191$$);
                }(), function() {
                  var $G__36195$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$amp$styles$label_muted$$]))), children:"— Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__36195$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__36195$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__36187$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__36187$$);
            }(), function() {
              var $G__36199$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Born in Yerevan, Zadik Zadikian’s life began in extremes. At nineteen—armed only with conviction—he escaped Soviet Armenia by swimming across the Arax River under machine-gun fire. He arrived in America with nothing but the instincts that had guided him since childhood: to build, to shape matter, to seek form through discipline and elemental materials."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36199$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36199$$);
            }(), function() {
              var $G__36203$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["In San Francisco, he apprenticed with sculptor ", function() {
                  var $G__36207$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Beniamino Bufano"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__36207$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__36207$$);
                }(), ", absorbing a lifelong sense of scale, color, and the physical intelligence of large-form making. Drawn to the heat and velocity of New York, he moved east in 1974 and quickly found himself inside the crucible of the Minimalist movement, assisting ", function() {
                  var $G__36211$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Richard Serra"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__36211$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__36211$$);
                }(), " on the monumental black oil-stick wall drawings—one of which Serra titled ", function() {
                  var $G__36215$$ = {children:"Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("em", $G__36215$$) : $APP.$helix$core$jsx$$.call(null, "em", $G__36215$$);
                }(), "."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36203$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__36203$$);
            }(), function() {
              var $G__36224$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"This immersion into New York’s severity and possibility forged an artist who has always moved toward intensity: toward weight, clarity, touch. The son of a builder, he grew up with materials—clay, plaster, stone, the raw grammar of structure. In New York, these instincts crystallized. In 1976 he transformed his ten-thousand-square-foot home and studio into a continuous field of industrial gold, an act of totalizing vision that set the tone for everything that followed."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36224$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36224$$);
            }(), function() {
              var $G__36233_JSCompiler_temp_const$jscomp$inline_4200$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
              var $G__36237$jscomp$inline_4202_JSCompiler_inline_result$jscomp$inline_4201$$ = {children:"1,000 Bricks Gilded in 24-Karat Gold Leaf"};
              $G__36237$jscomp$inline_4202_JSCompiler_inline_result$jscomp$inline_4201$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("em", $G__36237$jscomp$inline_4202_JSCompiler_inline_result$jscomp$inline_4201$$) : $APP.$helix$core$jsx$$.call(null, "em", $G__36237$jscomp$inline_4202_JSCompiler_inline_result$jscomp$inline_4201$$);
              $G__36233_JSCompiler_temp_const$jscomp$inline_4200$$ = {className:$G__36233_JSCompiler_temp_const$jscomp$inline_4200$$, children:["His 1978 project ", $G__36237$jscomp$inline_4202_JSCompiler_inline_result$jscomp$inline_4201$$, " marked the emergence of his now-signature language: unit-based sculptural forms—bricklike, essential, endlessly recombinable—through which gold becomes not decoration but ontology. For decades, Zadikian has pushed this vocabulary to distill the elemental. His works hover between the geological and the luminous, between ancient memory and future speculation, always returning to the fundamental question: What is born when matter is reduced to its clearest form?"]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36233_JSCompiler_temp_const$jscomp$inline_4200$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__36233_JSCompiler_temp_const$jscomp$inline_4200$$);
            }(), function() {
              var $G__36244$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$]))), children:"Zadikian’s practice is defined by extremes—of material, of discipline, of vision—and by a lifelong commitment to the structures that underlie both art and the world itself. His is a studio forged through touch, labor, repetition, and the pursuit of a form so essential it borders on the eternal."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36244$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36244$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36163$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36163$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36139$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36139$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__36111_map__36086_map__36086__$1_props__22175__auto__$jscomp$163_vec__36083_vec__36099$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__36111_map__36086_map__36086__$1_props__22175__auto__$jscomp$163_vec__36083_vec__36099$$);
};
$amp$pages$landing$curators$curator_card$$ = function($G__36388_map__36377_map__36377__$1_props__22175__auto__$jscomp$164_vec__36373$$, $maybe_ref__22176__auto__$jscomp$164$$) {
  $G__36388_map__36377_map__36377__$1_props__22175__auto__$jscomp$164_vec__36373$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__36388_map__36377_map__36377__$1_props__22175__auto__$jscomp$164_vec__36373$$), $maybe_ref__22176__auto__$jscomp$164$$], null);
  $G__36388_map__36377_map__36377__$1_props__22175__auto__$jscomp$164_vec__36373$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36388_map__36377_map__36377__$1_props__22175__auto__$jscomp$164_vec__36373$$, 0, null);
  $G__36388_map__36377_map__36377__$1_props__22175__auto__$jscomp$164_vec__36373$$ = $APP.$cljs$core$__destructure_map$$($G__36388_map__36377_map__36377__$1_props__22175__auto__$jscomp$164_vec__36373$$);
  var $name$jscomp$203$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36388_map__36377_map__36377__$1_props__22175__auto__$jscomp$164_vec__36373$$, $APP.$cljs$cst$165$name$$), $role$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36388_map__36377_map__36377__$1_props__22175__auto__$jscomp$164_vec__36373$$, $APP.$cljs$cst$849$role$$), $img$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36388_map__36377_map__36377__$1_props__22175__auto__$jscomp$164_vec__36373$$, 
  $cljs$cst$972$img$$), $bio$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36388_map__36377_map__36377__$1_props__22175__auto__$jscomp$164_vec__36373$$, $cljs$cst$973$bio$$), $visible_QMARK_$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36388_map__36377_map__36377__$1_props__22175__auto__$jscomp$164_vec__36373$$, $cljs$cst$974$visible_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $tag_style$jscomp$1$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$970$boxDecorationBreak$$, "clone", $cljs$cst$971$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__36388_map__36377_map__36377__$1_props__22175__auto__$jscomp$164_vec__36373$$ = function() {
    return {className:"px-4 sm:flex sm:gap-8 sm:items-start", children:[function() {
      var $G__36393_G__36397$jscomp$inline_4205$$ = {"img-src":$img$jscomp$2$$, fit:"crop", "aspect-ratio":1, "active?":$visible_QMARK_$jscomp$7$$};
      $G__36393_G__36397$jscomp$inline_4205$$ = {className:"float-left mr-4 mb-2 sm:float-none sm:mr-0 sm:mb-0\n               w-20 aspect-square sm:w-36\n               flex-shrink-0 rounded-sm overflow-hidden", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__36393_G__36397$jscomp$inline_4205$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, 
      $G__36393_G__36397$jscomp$inline_4205$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36393_G__36397$jscomp$inline_4205$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36393_G__36397$jscomp$inline_4205$$);
    }(), function() {
      var $G__36407$$ = function() {
        return {className:"sm:flex-1 sm:min-w-0", children:[function() {
          var $G__36411_JSCompiler_temp_const$jscomp$inline_4207$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_name$$, "mb-1"])));
          var $G__36416$jscomp$inline_4209_JSCompiler_inline_result$jscomp$inline_4208$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-200/90 dark:bg-white/10 px-2 py-0.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$jscomp$1$$), children:$name$jscomp$203$$};
          $G__36416$jscomp$inline_4209_JSCompiler_inline_result$jscomp$inline_4208$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__36416$jscomp$inline_4209_JSCompiler_inline_result$jscomp$inline_4208$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__36416$jscomp$inline_4209_JSCompiler_inline_result$jscomp$inline_4208$$);
          $G__36411_JSCompiler_temp_const$jscomp$inline_4207$$ = {className:$G__36411_JSCompiler_temp_const$jscomp$inline_4207$$, children:$G__36416$jscomp$inline_4209_JSCompiler_inline_result$jscomp$inline_4208$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36411_JSCompiler_temp_const$jscomp$inline_4207$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36411_JSCompiler_temp_const$jscomp$inline_4207$$);
        }(), function() {
          var $G__36430$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_role$$, "mb-3"]))), children:$role$jscomp$2$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36430$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36430$$);
        }(), function() {
          var $G__36444$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:$bio$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36444$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36444$$);
        }(), function() {
          var $G__36471$$ = {className:"clear-both sm:hidden"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36471$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36471$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36407$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36407$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36388_map__36377_map__36377__$1_props__22175__auto__$jscomp$164_vec__36373$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36388_map__36377_map__36377__$1_props__22175__auto__$jscomp$164_vec__36373$$);
};
$amp$pages$landing$curators$curators_section$$ = function($G__36581_map__36565_map__36565__$1_props__22175__auto__$jscomp$165_vec__36562_vec__36576$$, $maybe_ref__22176__auto__$jscomp$165$$) {
  $G__36581_map__36565_map__36565__$1_props__22175__auto__$jscomp$165_vec__36562_vec__36576$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__36581_map__36565_map__36565__$1_props__22175__auto__$jscomp$165_vec__36562_vec__36576$$), $maybe_ref__22176__auto__$jscomp$165$$], null);
  $G__36581_map__36565_map__36565__$1_props__22175__auto__$jscomp$165_vec__36562_vec__36576$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36581_map__36565_map__36565__$1_props__22175__auto__$jscomp$165_vec__36562_vec__36576$$, 0, null);
  $G__36581_map__36565_map__36565__$1_props__22175__auto__$jscomp$165_vec__36562_vec__36576$$ = $APP.$cljs$core$__destructure_map$$($G__36581_map__36565_map__36565__$1_props__22175__auto__$jscomp$165_vec__36562_vec__36576$$);
  var $id$jscomp$99$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36581_map__36565_map__36565__$1_props__22175__auto__$jscomp$165_vec__36562_vec__36576$$, $APP.$cljs$cst$286$id$$), $title$jscomp$40$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36581_map__36565_map__36565__$1_props__22175__auto__$jscomp$165_vec__36562_vec__36576$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$28$$ = $APP.$helix$hooks$use_ref$$("curators-ref");
  $G__36581_map__36565_map__36565__$1_props__22175__auto__$jscomp$165_vec__36562_vec__36576$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$28$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$764$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36581_map__36565_map__36565__$1_props__22175__auto__$jscomp$165_vec__36562_vec__36576$$, 0, null);
  var $visible_QMARK_$jscomp$8$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36581_map__36565_map__36565__$1_props__22175__auto__$jscomp$165_vec__36562_vec__36576$$, 1, null), $title_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$970$boxDecorationBreak$$, "clone", $cljs$cst$971$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__36581_map__36565_map__36565__$1_props__22175__auto__$jscomp$165_vec__36562_vec__36576$$ = function() {
    return {id:$id$jscomp$99$$, ref:$ref$jscomp$28$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["pt-12 sm:pt-14", "pb-10 sm:pb-12"]))), children:[$APP.$cljs$core$truth_$$($title$jscomp$40$$) ? function() {
      var $G__36585_JSCompiler_temp_const$jscomp$inline_4211$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_name_lg$$, "mb-10 px-4"])));
      var $G__36589$jscomp$inline_4213_JSCompiler_inline_result$jscomp$inline_4212$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-200/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($title_style$$), children:$title$jscomp$40$$};
      $G__36589$jscomp$inline_4213_JSCompiler_inline_result$jscomp$inline_4212$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__36589$jscomp$inline_4213_JSCompiler_inline_result$jscomp$inline_4212$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__36589$jscomp$inline_4213_JSCompiler_inline_result$jscomp$inline_4212$$);
      $G__36585_JSCompiler_temp_const$jscomp$inline_4211$$ = {className:$G__36585_JSCompiler_temp_const$jscomp$inline_4211$$, children:$G__36589$jscomp$inline_4213_JSCompiler_inline_result$jscomp$inline_4212$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__36585_JSCompiler_temp_const$jscomp$inline_4211$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__36585_JSCompiler_temp_const$jscomp$inline_4211$$);
    }() : null, function() {
      var $G__36593$$ = function() {
        return {className:"space-y-8 sm:space-y-12\n              divide-y divide-slate-200/50 dark:divide-white/10", children:function() {
          return function $amp$pages$landing$curators$curators_section_render_$_iter__36596$$($s__36597$$) {
            return new $APP.$cljs$core$LazySeq$$(null, function() {
              for (;;) {
                var $s__36597__$2_temp__5823__auto__$jscomp$121$$ = $APP.$cljs$core$seq$$($s__36597$$);
                if ($s__36597__$2_temp__5823__auto__$jscomp$121$$) {
                  if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__36597__$2_temp__5823__auto__$jscomp$121$$)) {
                    var $c__5626__auto__$jscomp$34$$ = $APP.$cljs$core$_chunked_first$$($s__36597__$2_temp__5823__auto__$jscomp$121$$), $size__5627__auto__$jscomp$34$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$34$$), $b__36599$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$34$$);
                    return function() {
                      for (var $i__36598$$ = 0;;) {
                        if ($i__36598$$ < $size__5627__auto__$jscomp$34$$) {
                          var $JSCompiler_temp_const$jscomp$4298_map__36600_map__36600__$1$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$34$$, $i__36598$$), $G__36602$jscomp$inline_4366_G__36607$jscomp$inline_4367_curator$jscomp$1$$ = $JSCompiler_temp_const$jscomp$4298_map__36600_map__36600__$1$$ = $APP.$cljs$core$__destructure_map$$($JSCompiler_temp_const$jscomp$4298_map__36600_map__36600__$1$$), $G__36603$jscomp$inline_4368_JSCompiler_inline_result$jscomp$4299_name$jscomp$205$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($JSCompiler_temp_const$jscomp$4298_map__36600_map__36600__$1$$, 
                          $APP.$cljs$cst$165$name$$);
                          $JSCompiler_temp_const$jscomp$4298_map__36600_map__36600__$1$$ = $b__36599$$;
                          $G__36602$jscomp$inline_4366_G__36607$jscomp$inline_4367_curator$jscomp$1$$ = $APP.$helix$impl$props$merge_obj$$({"visible?":$visible_QMARK_$jscomp$8$$}, $APP.$helix$impl$props$_props$cljs$0core$0IFn$0_invoke$0arity$01$$($G__36602$jscomp$inline_4366_G__36607$jscomp$inline_4367_curator$jscomp$1$$));
                          $G__36602$jscomp$inline_4366_G__36607$jscomp$inline_4367_curator$jscomp$1$$ = {className:"pt-8 sm:pt-12 first:pt-0 first:border-t-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$curators$curator_card$$, $G__36602$jscomp$inline_4366_G__36607$jscomp$inline_4367_curator$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$curators$curator_card$$, $G__36602$jscomp$inline_4366_G__36607$jscomp$inline_4367_curator$jscomp$1$$)};
                          $G__36603$jscomp$inline_4368_JSCompiler_inline_result$jscomp$4299_name$jscomp$205$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__36602$jscomp$inline_4366_G__36607$jscomp$inline_4367_curator$jscomp$1$$, $G__36603$jscomp$inline_4368_JSCompiler_inline_result$jscomp$4299_name$jscomp$205$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36602$jscomp$inline_4366_G__36607$jscomp$inline_4367_curator$jscomp$1$$, 
                          $G__36603$jscomp$inline_4368_JSCompiler_inline_result$jscomp$4299_name$jscomp$205$$);
                          $JSCompiler_temp_const$jscomp$4298_map__36600_map__36600__$1$$.add($G__36603$jscomp$inline_4368_JSCompiler_inline_result$jscomp$4299_name$jscomp$205$$);
                          $i__36598$$ += 1;
                        } else {
                          return !0;
                        }
                      }
                    }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__36599$$), $amp$pages$landing$curators$curators_section_render_$_iter__36596$$($APP.$cljs$core$_chunked_rest$$($s__36597__$2_temp__5823__auto__$jscomp$121$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__36599$$), null);
                  }
                  var $map__36610_map__36610__$1$$ = $APP.$cljs$core$first$$($s__36597__$2_temp__5823__auto__$jscomp$121$$), $curator$$ = $map__36610_map__36610__$1$$ = $APP.$cljs$core$__destructure_map$$($map__36610_map__36610__$1$$), $name$jscomp$204$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__36610_map__36610__$1$$, $APP.$cljs$cst$165$name$$);
                  return $APP.$cljs$core$cons$$(function() {
                    var $G__36612_G__36618$jscomp$inline_4219$$ = $APP.$helix$impl$props$merge_obj$$({"visible?":$visible_QMARK_$jscomp$8$$}, $APP.$helix$impl$props$_props$cljs$0core$0IFn$0_invoke$0arity$01$$($curator$$));
                    $G__36612_G__36618$jscomp$inline_4219$$ = {className:"pt-8 sm:pt-12 first:pt-0 first:border-t-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$curators$curator_card$$, $G__36612_G__36618$jscomp$inline_4219$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$curators$curator_card$$, $G__36612_G__36618$jscomp$inline_4219$$)};
                    var $G__36613$$ = $name$jscomp$204$$;
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__36612_G__36618$jscomp$inline_4219$$, $G__36613$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36612_G__36618$jscomp$inline_4219$$, $G__36613$$);
                  }(), $amp$pages$landing$curators$curators_section_render_$_iter__36596$$($APP.$cljs$core$rest$$($s__36597__$2_temp__5823__auto__$jscomp$121$$)));
                }
                return null;
              }
            }, null, null);
          }($amp$pages$landing$curators$curators$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36593$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36593$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__36581_map__36565_map__36565__$1_props__22175__auto__$jscomp$165_vec__36562_vec__36576$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__36581_map__36565_map__36565__$1_props__22175__auto__$jscomp$165_vec__36562_vec__36576$$);
};
$amp$pages$landing$in_minor_keys$pull_quote$$ = function($G__36641_map__36639_map__36639__$1_props__22175__auto__$jscomp$166_vec__36636$$, $maybe_ref__22176__auto__$jscomp$166$$) {
  $G__36641_map__36639_map__36639__$1_props__22175__auto__$jscomp$166_vec__36636$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__36641_map__36639_map__36639__$1_props__22175__auto__$jscomp$166_vec__36636$$), $maybe_ref__22176__auto__$jscomp$166$$], null);
  $G__36641_map__36639_map__36639__$1_props__22175__auto__$jscomp$166_vec__36636$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36641_map__36639_map__36639__$1_props__22175__auto__$jscomp$166_vec__36636$$, 0, null);
  $G__36641_map__36639_map__36639__$1_props__22175__auto__$jscomp$166_vec__36636$$ = $APP.$cljs$core$__destructure_map$$($G__36641_map__36639_map__36639__$1_props__22175__auto__$jscomp$166_vec__36636$$);
  var $text$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36641_map__36639_map__36639__$1_props__22175__auto__$jscomp$166_vec__36636$$, $APP.$cljs$cst$398$text$$), $attribution$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36641_map__36639_map__36639__$1_props__22175__auto__$jscomp$166_vec__36636$$, $cljs$cst$975$attribution$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__36641_map__36639_map__36639__$1_props__22175__auto__$jscomp$166_vec__36636$$ = function() {
    return {className:"border-l-2 border-white/20 pl-6 my-8", children:[function() {
      var $G__36645$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:$text$jscomp$18$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36645$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36645$$);
    }(), function() {
      var $G__36649$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$amp$styles$label_muted$$]))), children:"— " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($attribution$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__36649$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__36649$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__36641_map__36639_map__36639__$1_props__22175__auto__$jscomp$166_vec__36636$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__36641_map__36639_map__36639__$1_props__22175__auto__$jscomp$166_vec__36636$$);
};
$amp$pages$landing$in_minor_keys$curator_card$$ = function($G__36660_map__36658_map__36658__$1_props__22175__auto__$jscomp$167_vec__36655$$, $maybe_ref__22176__auto__$jscomp$167$$) {
  $G__36660_map__36658_map__36658__$1_props__22175__auto__$jscomp$167_vec__36655$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__36660_map__36658_map__36658__$1_props__22175__auto__$jscomp$167_vec__36655$$), $maybe_ref__22176__auto__$jscomp$167$$], null);
  $G__36660_map__36658_map__36658__$1_props__22175__auto__$jscomp$167_vec__36655$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36660_map__36658_map__36658__$1_props__22175__auto__$jscomp$167_vec__36655$$, 0, null);
  $G__36660_map__36658_map__36658__$1_props__22175__auto__$jscomp$167_vec__36655$$ = $APP.$cljs$core$__destructure_map$$($G__36660_map__36658_map__36658__$1_props__22175__auto__$jscomp$167_vec__36655$$);
  var $visible_QMARK_$jscomp$9$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36660_map__36658_map__36658__$1_props__22175__auto__$jscomp$167_vec__36655$$, $cljs$cst$974$visible_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $tag_style$jscomp$2$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$970$boxDecorationBreak$$, "clone", $cljs$cst$971$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__36660_map__36658_map__36658__$1_props__22175__auto__$jscomp$167_vec__36655$$ = function() {
    return {className:"sm:flex sm:gap-8 sm:items-start mb-10", children:[function() {
      var $G__36664_G__36668$jscomp$inline_4222$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/koyo.png", fit:"crop", "aspect-ratio":1, "active?":$visible_QMARK_$jscomp$9$$};
      $G__36664_G__36668$jscomp$inline_4222$$ = {className:"float-left mr-4 mb-2 sm:float-none sm:mr-0 sm:mb-0\n               w-24 aspect-square sm:w-40\n               flex-shrink-0 rounded-sm overflow-hidden", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__36664_G__36668$jscomp$inline_4222$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, 
      $G__36664_G__36668$jscomp$inline_4222$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36664_G__36668$jscomp$inline_4222$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36664_G__36668$jscomp$inline_4222$$);
    }(), function() {
      var $G__36672$$ = function() {
        return {className:"sm:flex-1 sm:min-w-0", children:[function() {
          var $G__36676_JSCompiler_temp_const$jscomp$inline_4224$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_name$$, "mb-1"])));
          var $G__36680$jscomp$inline_4226_JSCompiler_inline_result$jscomp$inline_4225$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-200/90 dark:bg-white/10 px-2 py-0.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$jscomp$2$$), children:"Koyo Kouoh"};
          $G__36680$jscomp$inline_4226_JSCompiler_inline_result$jscomp$inline_4225$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__36680$jscomp$inline_4226_JSCompiler_inline_result$jscomp$inline_4225$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__36680$jscomp$inline_4226_JSCompiler_inline_result$jscomp$inline_4225$$);
          $G__36676_JSCompiler_temp_const$jscomp$inline_4224$$ = {className:$G__36676_JSCompiler_temp_const$jscomp$inline_4224$$, children:$G__36680$jscomp$inline_4226_JSCompiler_inline_result$jscomp$inline_4225$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36676_JSCompiler_temp_const$jscomp$inline_4224$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36676_JSCompiler_temp_const$jscomp$inline_4224$$);
        }(), function() {
          var $G__36684$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_role$$, "mb-3"]))), children:"Curator, 61st Biennale Arte"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36684$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36684$$);
        }(), function() {
          var $G__36688$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$]))), children:"The curatorial statement for the 61st International Art Exhibition — La Biennale di Venezia — invites us to listen to the minor keys: the quiet tones, the lower frequencies, the persistent signals of earth and life."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36688$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36688$$);
        }(), function() {
          var $G__36692$$ = {className:"clear-both sm:hidden"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36692$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36692$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36672$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36672$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36660_map__36658_map__36658__$1_props__22175__auto__$jscomp$167_vec__36655$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36660_map__36658_map__36658__$1_props__22175__auto__$jscomp$167_vec__36655$$);
};
$amp$pages$landing$in_minor_keys$preview$$ = function($G__36711_props__22175__auto__$jscomp$168_vec__36707$$) {
  $APP.$helix$core$extract_cljs_props$$($G__36711_props__22175__auto__$jscomp$168_vec__36707$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$29$$ = $APP.$helix$hooks$use_ref$$("imk-preview-ref");
  $G__36711_props__22175__auto__$jscomp$168_vec__36707$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$29$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$764$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36711_props__22175__auto__$jscomp$168_vec__36707$$, 0, null);
  var $visible_QMARK_$jscomp$10$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36711_props__22175__auto__$jscomp$168_vec__36707$$, 1, null);
  $G__36711_props__22175__auto__$jscomp$168_vec__36707$$ = function() {
    return {className:"px-4", ref:$ref$jscomp$29$$, children:[function() {
      var $G__36715$$ = {"visible?":$visible_QMARK_$jscomp$10$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$curator_card$$, $G__36715$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$curator_card$$, $G__36715$$);
    }(), function() {
      var $G__36723$$ = function() {
        return {className:"text-center my-10 space-y-1", children:[function() {
          var $G__36729$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Take a deep breath]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36729$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36729$$);
        }(), function() {
          var $G__36735$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Exhale]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36735$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36735$$);
        }(), function() {
          var $G__36743$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Drop your shoulders]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36743$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36743$$);
        }(), function() {
          var $G__36747$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Close your eyes]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36747$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36747$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36723$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36723$$);
    }(), function() {
      var $G__36755$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"This is an invitation to encounter these words in the immediate physical, meteorological, ambient, and karmic conditions in which they meet you. To shift to a slower gear and tune in to the frequencies of the minor keys. Because, though often lost in the anxious cacophony of the present chaos raging through the world, the music continues. The songs of those producing beauty in spite of tragedy, the tunes of the fugitives recovering from the ruins, the harmonies of those repairing wounds and worlds."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36755$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36755$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36711_props__22175__auto__$jscomp$168_vec__36707$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36711_props__22175__auto__$jscomp$168_vec__36707$$);
};
$amp$pages$landing$in_minor_keys$details$$ = function($G__36823_props__22175__auto__$jscomp$169_vec__36819$$) {
  $APP.$helix$core$extract_cljs_props$$($G__36823_props__22175__auto__$jscomp$169_vec__36819$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$30$$ = $APP.$helix$hooks$use_ref$$("imk-details-ref");
  $G__36823_props__22175__auto__$jscomp$169_vec__36819$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$30$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$764$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36823_props__22175__auto__$jscomp$169_vec__36819$$, 0, null);
  var $visible_QMARK_$jscomp$11$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36823_props__22175__auto__$jscomp$169_vec__36819$$, 1, null);
  $G__36823_props__22175__auto__$jscomp$169_vec__36819$$ = function() {
    return {className:"px-4", ref:$ref$jscomp$30$$, children:[function() {
      var $G__36831$$ = {"visible?":$visible_QMARK_$jscomp$11$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$curator_card$$, $G__36831$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$curator_card$$, $G__36831$$);
    }(), function() {
      var $G__36835$$ = function() {
        return {className:"text-center my-10 space-y-1", children:[function() {
          var $G__36839$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Take a deep breath]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36839$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36839$$);
        }(), function() {
          var $G__36843$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Exhale]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36843$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36843$$);
        }(), function() {
          var $G__36848$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Drop your shoulders]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36848$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36848$$);
        }(), function() {
          var $G__36852$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Close your eyes]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36852$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36852$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36835$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36835$$);
    }(), function() {
      var $G__36857$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"This is an invitation to encounter these words in the immediate physical, meteorological, ambient, and karmic conditions in which they meet you. To shift to a slower gear and tune in to the frequencies of the minor keys. Because, though often lost in the anxious cacophony of the present chaos raging through the world, the music continues. The songs of those producing beauty in spite of tragedy, the tunes of the fugitives recovering from the ruins, the harmonies of those repairing wounds and worlds."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36857$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36857$$);
    }(), function() {
      var $G__36861$$ = {text:"There is a reason, after all, that some people wish to colonize the moon, and others dance before it as an ancient friend.", attribution:"James Baldwin, 1972"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$pull_quote$$, $G__36861$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$pull_quote$$, $G__36861$$);
    }(), function() {
      var $G__36866$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The minor key, in music, alludes both to the structure of a song and to its emotional effects. It is a rich idea, so rich that it quickly overflows its technical definition and spills with metaphor. It summons moods, the blues, the call-and-response, the morna, the second line, the lament, the allegory, the whisper."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36866$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36866$$);
    }(), function() {
      var $G__36874$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The minor keys refuse orchestral bombast and goose-step military marches and come alive in the quiet tones, the lower frequencies, the hums, the consolations of poetry, all portals of improvisation to the elsewhere and the otherwise. The minor keys ask for listening that calls on the emotions and sustains them in return."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36874$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36874$$);
    }(), function() {
      var $G__36878$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The minor keys are also the small islands, worlds amid oceans with distinct and endlessly rich ecosystems, social lives that are articulated, for better and worse, within much larger political forms and ecological stakes. Here, the evocation of the key and the island extends to an archipelago of oases: gardens, courtyards, compounds, lofts, dance floors — the other worlds that artists make, the intimate and convivial universes that refresh and sustain even in terrible times; indeed, especially in terrible times."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36878$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36878$$);
    }(), function() {
      var $G__36882$$ = {text:"Look at the creole garden, you put all species on such a little lick of land: avocados, lemons, yams, sugarcanes… plus thirty or forty other species on this bit of land that doesn’t go more than fifty feet up the side of the hill, they protect each other. In the great Circle, everything is in everything else.", attribution:"Édouard Glissant, 1993"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$pull_quote$$, $G__36882$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$pull_quote$$, $G__36882$$);
    }(), function() {
      var $G__36890$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"These are the cues for an exhibition; an exhibition tuned in to the minor keys; an exhibition that invites listening to the persistent signals of earth and life, connecting to soul frequencies. If, in music, the minor keys are often associated with strangeness, melancholy and sorrow, here their joy, solace, hope, and transcendence manifest as well."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36890$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36890$$);
    }(), function() {
      var $G__36896$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"In the minor keys, sound and sensation are grounding, they hold the cadences, melodies, and silences of resonant worlds that gather and create together a polyphonous assembly of art, convening and communing in convivial collectivity, beaming across the void of alienation and the crackle of conflict."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36896$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36896$$);
    }(), function() {
      var $G__36902$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The 61st edition of the Biennale Arte is grounded in a deep belief in artists as the vital interpreters of the social and psychic condition and catalysts of new relations and possibilities."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36902$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36902$$);
    }(), function() {
      var $G__36906$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The exhibition’s composition is formed by artistic practices that open portals, that refresh and nourish, that prompt relation and relationship, that advance concept and form through networks and schools — understood freely and informally."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36906$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36906$$);
    }(), function() {
      var $G__36911$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The intended effect scrambles cohesion and dissonance in the manner of a free-jazz ensemble, or perhaps, at the scale of the Biennale Arte, a festival of ensembles with a common premise: that poetics liberate and people make beauty together."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36911$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36911$$);
    }(), function() {
      var $G__36915$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Through relation, sharing, and transcendence, the artists and practices that operate in this spirit, like jazz, across methods, scales, senses and forms, propose to visitors an exhibitional experience that is more sensory than didactic, renewing rather than exhausting, and fortifying for the work ahead."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36915$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36915$$);
    }(), function() {
      var $G__36919$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Through a visual and meditative procession, the exhibition prompts all senses to interconnect and meander from one universe to the other, rendering visible the possibilities that reside in the in-between spaces and beyond the portals."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36919$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36919$$);
    }(), function() {
      var $G__36923$$ = {text:"…there is no choice but to tune in like jazzmen to these imperative mutations. The jazzman constantly meditates on the unpredictable, stands within it according to the laws of polyrhythm, and improvises breathtaking moments. We small-island Caribbeans are not ready, but we have this resource. The change will have to be so profound that we will no doubt have to add to the knowledge of jazz, the old totemisms, animisms, analogisms, and other metaphysics too summarily discarded. These old-world poems are already precious scores.", 
      attribution:"Patrick Chamoiseau, 2023"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$pull_quote$$, $G__36923$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$pull_quote$$, $G__36923$$);
    }(), function() {
      var $G__36927$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"In this spirit, the international exhibition of the 61st Biennale Arte intends neither a litany of commentary on world events, nor an inattention or escape from compounding and continuous intersecting crises. Rather, it proposes a radical reconnection with art’s natural habitat and role in society: that is the emotional, the visual, the sensory, the affective, the subjective."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36927$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36927$$);
    }(), function() {
      var $G__36931$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"In Minor Keys are sequences of exhilarating journeys that address the sensate and the affective, inviting visitors to marvel, meditate, dream, revel, reflect, and commune in realms where time is not corporate property nor at the mercy of relentlessly accelerated productivity."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36931$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36931$$);
    }(), function() {
      var $G__36935$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"After all, it is clear by now that the enduring time of capital and empire maligned local, Indigenous and terrestrial knowledges as chimeric, and dismissed co-constitutive artistic practices as artisanal, intended for decoration or devotional rituals."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36935$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36935$$);
    }(), function() {
      var $G__36939$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The ‘civilizing mission’ flattens all with condescending contempt, and in the contemporary era entire societies and ecologies are regarded as collateral damage in the headstrong pursuit of growth supported by ruthlessness and greed. In refusing the spectacle of horror, the time has come to listen to the minor keys, to tune in sotto voce to the whispers, to the lower frequencies; to find the oases, the islands, where the dignity of all living beings is safeguarded."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36939$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36939$$);
    }(), function() {
      var $G__36943$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The exhibition posits that such radical shifts are taking place — indeed, have been underway all along — in the minor keys, and the artists, poets, performers, and filmmakers whom the exhibition will convene are grounded in their commitments to realizing them. Artists are channels to and between the minor keys and listening to, rather than speaking for them is at the core of the curatorial conceit."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36943$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36943$$);
    }(), function() {
      var $G__36947$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The exhibition In Minor Keys stands as a collective score composed together with artists who have built universes of imagination. Artists who work at the boundaries of form, and whose practices can be thought of as intricate melodies to be heard both collectively and on their own terms. These are artists whose practices seamlessly bleed into society."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36947$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36947$$);
    }(), function() {
      var $G__36951$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Artists who accommodate daily life as part of a logical and aesthetically consistent relation of parts. Artists who are exceedingly generous and hospitable to life."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36951$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36951$$);
    }(), function() {
      var $G__36955$$ = {text:"In our myths, in our songs, that’s where the seeds are. It is not possible to constantly hone on the crisis. You have to have the love and you have to have the magic, that’s also life.", attribution:"Toni Morrison, 1977"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$pull_quote$$, $G__36955$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$pull_quote$$, $G__36955$$);
    }(), function() {
      var $G__36959$$ = function() {
        return {className:"mt-12 mb-6 border-t border-white/10 pt-10", children:[function() {
          var $G__36963$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "mb-6"]))), children:"The Studio — In Minor Keys"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__36963$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__36963$$);
        }(), function() {
          var $G__36967_JSCompiler_temp_const$jscomp$inline_4228$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
          var $G__36971$jscomp$inline_4230_JSCompiler_inline_result$jscomp$inline_4229$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
          $G__36971$jscomp$inline_4230_JSCompiler_inline_result$jscomp$inline_4229$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__36971$jscomp$inline_4230_JSCompiler_inline_result$jscomp$inline_4229$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__36971$jscomp$inline_4230_JSCompiler_inline_result$jscomp$inline_4229$$);
          $G__36967_JSCompiler_temp_const$jscomp$inline_4228$$ = {className:$G__36967_JSCompiler_temp_const$jscomp$inline_4228$$, children:["Zadik Zadikian’s ", $G__36971$jscomp$inline_4230_JSCompiler_inline_result$jscomp$inline_4229$$, " is a practice tuned precisely to these frequencies. In a pavilion where the brick — the most elementary building unit, unchanged for eleven millennia — is cast, stacked, disassembled, and reassembled over six months, simplicity becomes the method and the meaning."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36967_JSCompiler_temp_const$jscomp$inline_4228$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__36967_JSCompiler_temp_const$jscomp$inline_4228$$);
        }(), function() {
          var $G__36975$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__36979$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Doing the work."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__36979$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__36979$$);
            }(), " The minor keys ask for sustained attention, not spectacle. In ", function() {
              var $G__36983$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__36983$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__36983$$);
            }(), ", the act of making is neither performed nor concealed. Plaster is mixed, forms are poured, bricks emerge. Day after day, the labor itself is the statement — a refusal of the accelerated and the disposable in favor of the deliberate and the enduring."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36975$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__36975$$);
        }(), function() {
          var $G__36987$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__36991$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Making simple things."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__36991$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__36991$$);
            }(), " Each brick is humble. It carries no narrative, bears no symbol. Like the creole garden where thirty species protect each other on a lick of land, the individual unit is modest. Its power lives not in what it represents but in what it ", function() {
              var $G__36995$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"is"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__36995$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__36995$$);
            }(), " — material presence, weight, color, surface."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36987$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__36987$$);
        }(), function() {
          var $G__36999_JSCompiler_temp_const$jscomp$inline_4232$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
          var $G__37003$jscomp$inline_4234_JSCompiler_inline_result$jscomp$inline_4233$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Higher-order structures from simplicity."};
          $G__37003$jscomp$inline_4234_JSCompiler_inline_result$jscomp$inline_4233$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__37003$jscomp$inline_4234_JSCompiler_inline_result$jscomp$inline_4233$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__37003$jscomp$inline_4234_JSCompiler_inline_result$jscomp$inline_4233$$);
          $G__36999_JSCompiler_temp_const$jscomp$inline_4232$$ = {className:$G__36999_JSCompiler_temp_const$jscomp$inline_4232$$, children:[$G__37003$jscomp$inline_4234_JSCompiler_inline_result$jscomp$inline_4233$$, " When stacked, these bricks become something else entirely. Composite forms emerge — not designed from above but discovered through assembly. The whole exceeds its parts, not through complexity of component, but through the patient, improvisational logic of combination. Like polyrhythm in jazz, coherence arises from the interplay of simple, repeating elements."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36999_JSCompiler_temp_const$jscomp$inline_4232$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__36999_JSCompiler_temp_const$jscomp$inline_4232$$);
        }(), function() {
          var $G__37007_JSCompiler_temp_const$jscomp$inline_4236$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
          var $G__37011$jscomp$inline_4238_JSCompiler_inline_result$jscomp$inline_4237$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Simplicity is not ease."};
          $G__37011$jscomp$inline_4238_JSCompiler_inline_result$jscomp$inline_4237$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__37011$jscomp$inline_4238_JSCompiler_inline_result$jscomp$inline_4237$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__37011$jscomp$inline_4238_JSCompiler_inline_result$jscomp$inline_4237$$);
          $G__37007_JSCompiler_temp_const$jscomp$inline_4236$$ = {className:$G__37007_JSCompiler_temp_const$jscomp$inline_4236$$, children:[$G__37011$jscomp$inline_4238_JSCompiler_inline_result$jscomp$inline_4237$$, " To cast a perfect brick, to find the right pigment, to know which form belongs beside another — this is the discipline beneath the quiet surface. The minor keys sound gentle, but they demand the deepest listening. The studio is where that discipline lives: not in reaching for the obvious, but in reaching for the precise."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__37007_JSCompiler_temp_const$jscomp$inline_4236$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__37007_JSCompiler_temp_const$jscomp$inline_4236$$);
        }(), function() {
          var $G__37015$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__37019$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Reaching for the right tool."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__37019$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__37019$$);
            }(), " Zadikian does not reach for what is always close at hand. He reaches for what is right. The plaster, the mold, the trowel — each chosen not for convenience but for fidelity to the form. In this way, ", function() {
              var $G__37023$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__37023$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__37023$$);
            }(), " enacts the curatorial premise of In Minor Keys: that beauty is made together, through relation, through the handmade, through the refusal to shortcut the work that matters."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__37015$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__37015$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36959$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36959$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36823_props__22175__auto__$jscomp$169_vec__36819$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36823_props__22175__auto__$jscomp$169_vec__36819$$);
};
$amp$pages$landing$in_minor_keys$in_minor_keys$$ = function($G__37035_id$jscomp$100_map__37033_props__22175__auto__$jscomp$170_vec__37030$$, $G__37039$jscomp$inline_4241_JSCompiler_inline_result$jscomp$inline_4240_idx$jscomp$78_maybe_ref__22176__auto__$jscomp$170$$) {
  $G__37035_id$jscomp$100_map__37033_props__22175__auto__$jscomp$170_vec__37030$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__37035_id$jscomp$100_map__37033_props__22175__auto__$jscomp$170_vec__37030$$), $G__37039$jscomp$inline_4241_JSCompiler_inline_result$jscomp$inline_4240_idx$jscomp$78_maybe_ref__22176__auto__$jscomp$170$$], null);
  $G__37035_id$jscomp$100_map__37033_props__22175__auto__$jscomp$170_vec__37030$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__37035_id$jscomp$100_map__37033_props__22175__auto__$jscomp$170_vec__37030$$, 0, null);
  var $map__37033__$1_title$jscomp$41$$ = $APP.$cljs$core$__destructure_map$$($G__37035_id$jscomp$100_map__37033_props__22175__auto__$jscomp$170_vec__37030$$);
  $G__37035_id$jscomp$100_map__37033_props__22175__auto__$jscomp$170_vec__37030$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__37033__$1_title$jscomp$41$$, $APP.$cljs$cst$286$id$$);
  $G__37039$jscomp$inline_4241_JSCompiler_inline_result$jscomp$inline_4240_idx$jscomp$78_maybe_ref__22176__auto__$jscomp$170$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__37033__$1_title$jscomp$41$$, $APP.$cljs$cst$769$idx$$);
  var $subtitle$jscomp$9$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__37033__$1_title$jscomp$41$$, $APP.$cljs$cst$782$subtitle$$);
  $map__37033__$1_title$jscomp$41$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__37033__$1_title$jscomp$41$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__37039$jscomp$inline_4241_JSCompiler_inline_result$jscomp$inline_4240_idx$jscomp$78_maybe_ref__22176__auto__$jscomp$170$$ = {idx:$G__37039$jscomp$inline_4241_JSCompiler_inline_result$jscomp$inline_4240_idx$jscomp$78_maybe_ref__22176__auto__$jscomp$170$$, "section-hint":$subtitle$jscomp$9$$, title:$map__37033__$1_title$jscomp$41$$, "expand-button-label":"Read full statement", "preview-text":$amp$pages$landing$in_minor_keys$preview$$, "full-text":$amp$pages$landing$in_minor_keys$details$$};
  $G__37039$jscomp$inline_4241_JSCompiler_inline_result$jscomp$inline_4240_idx$jscomp$78_maybe_ref__22176__auto__$jscomp$170$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__37039$jscomp$inline_4241_JSCompiler_inline_result$jscomp$inline_4240_idx$jscomp$78_maybe_ref__22176__auto__$jscomp$170$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__37039$jscomp$inline_4241_JSCompiler_inline_result$jscomp$inline_4240_idx$jscomp$78_maybe_ref__22176__auto__$jscomp$170$$);
  $G__37035_id$jscomp$100_map__37033_props__22175__auto__$jscomp$170_vec__37030$$ = {id:$G__37035_id$jscomp$100_map__37033_props__22175__auto__$jscomp$170_vec__37030$$, children:$G__37039$jscomp$inline_4241_JSCompiler_inline_result$jscomp$inline_4240_idx$jscomp$78_maybe_ref__22176__auto__$jscomp$170$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37035_id$jscomp$100_map__37033_props__22175__auto__$jscomp$170_vec__37030$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__37035_id$jscomp$100_map__37033_props__22175__auto__$jscomp$170_vec__37030$$);
};
$amp$pages$landing$venue$preview$$ = function($G__36717_map__36706_props__22175__auto__$jscomp$171_vec__36703$$, $maybe_ref__22176__auto__$jscomp$171$$) {
  $G__36717_map__36706_props__22175__auto__$jscomp$171_vec__36703$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__36717_map__36706_props__22175__auto__$jscomp$171_vec__36703$$), $maybe_ref__22176__auto__$jscomp$171$$], null);
  $G__36717_map__36706_props__22175__auto__$jscomp$171_vec__36703$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36717_map__36706_props__22175__auto__$jscomp$171_vec__36703$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__36717_map__36706_props__22175__auto__$jscomp$171_vec__36703$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__36717_map__36706_props__22175__auto__$jscomp$171_vec__36703$$ = function() {
    return {className:"px-4", children:function() {
      var $G__36727$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-base", "mb-6"]))), children:["The Armenia Pavilion 2026 is located across ", function() {
          var $G__36739$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"two sites"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__36739$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__36739$$);
        }(), " within the historic ", function() {
          var $G__36749$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Arsenale of Venice"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__36749$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__36749$$);
        }(), "—a grand interior studio and a prominent exterior crossing. ", "Together they form a single spatial constellation: ", function() {
          var $G__36759$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"a place for study, for work, to create, share and exhibit"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__36759$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__36759$$);
        }(), "."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36727$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__36727$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36717_map__36706_props__22175__auto__$jscomp$171_vec__36703$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36717_map__36706_props__22175__auto__$jscomp$171_vec__36703$$);
};
$amp$pages$landing$venue$details$$ = function($G__36772_map__36770_props__22175__auto__$jscomp$172_vec__36767$$, $maybe_ref__22176__auto__$jscomp$172$$) {
  $G__36772_map__36770_props__22175__auto__$jscomp$172_vec__36767$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__36772_map__36770_props__22175__auto__$jscomp$172_vec__36767$$), $maybe_ref__22176__auto__$jscomp$172$$], null);
  $G__36772_map__36770_props__22175__auto__$jscomp$172_vec__36767$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36772_map__36770_props__22175__auto__$jscomp$172_vec__36767$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__36772_map__36770_props__22175__auto__$jscomp$172_vec__36767$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $is_desktop_QMARK_$jscomp$5$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__36772_map__36770_props__22175__auto__$jscomp$172_vec__36767$$ = function() {
    return {className:"space-y-8", children:[function() {
      var $G__36776$$ = function() {
        return {className:"px-4", children:function() {
          var $G__36780$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-base", "mb-6"]))), children:["The Armenia Pavilion 2026 is located across ", function() {
              var $G__36784$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"two sites"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__36784$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__36784$$);
            }(), " within the historic ", function() {
              var $G__36788$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Arsenale of Venice"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__36788$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__36788$$);
            }(), "—a grand interior studio and a prominent exterior crossing. ", "Together they form a single spatial constellation: ", function() {
              var $G__36792$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"a place for study, for work, to create, share and exhibit"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__36792$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__36792$$);
            }(), "."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36780$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__36780$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36776$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36776$$);
    }(), function() {
      var $G__36796$$ = function() {
        return {className:"my-8", children:[function() {
          var $G__36800$$ = {dev:!1, "interactive?":$is_desktop_QMARK_$jscomp$5$$, "initial-view":$APP.$amp$pages$venue$map_config$initial_view$$, "ant-paths":$APP.$amp$pages$venue$map_config$ant_paths$$, layers:$APP.$amp$pages$venue$map_config$layers$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$map$mapbox_map$$, $G__36800$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$map$mapbox_map$$, $G__36800$$);
        }(), function() {
          var $G__36804$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "italic", "mt-4 px-4"]))), children:"* Walking path from the crossing to the pavilion — approximately 8 minutes"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36804$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36804$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36796$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36796$$);
    }(), function() {
      var $G__36809$$ = function() {
        return {className:"px-4 flex flex-col sm:flex-row gap-4", children:[function() {
          var $G__36816$$ = {href:"/visit", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-medium;inline-flex items-center gap-2;text-sm uppercase tracking-wider;text-pink-600 dark:text-pink-300;hover:text-pink-700 dark:hover:text-pink-200;transition-colors duration-200".split(";")))), children:"See the full Visitor Guide →"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__36816$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__36816$$);
        }(), function() {
          var $G__36825$$ = {href:"https://maps.app.goo.gl/XBwAbBQcj47eHyq5A", target:"_blank", rel:"noopener noreferrer", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-medium;inline-flex items-center gap-2;text-sm uppercase tracking-wider;text-slate-500  dark:text-slate-500;hover:text-pink-600 dark:hover:text-pink-300;transition-colors duration-200".split(";")))), 
          children:"Open in Maps ↗"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__36825$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__36825$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36809$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36809$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36772_map__36770_props__22175__auto__$jscomp$172_vec__36767$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36772_map__36770_props__22175__auto__$jscomp$172_vec__36767$$);
};
$amp$pages$landing$venue$location_section$$ = function($G__36886_id$jscomp$101_map__36872_props__22175__auto__$jscomp$173_vec__36869$$, $G__36894$jscomp$inline_4371_JSCompiler_inline_result$jscomp$inline_4370_map__36872__$1_maybe_ref__22176__auto__$jscomp$173_title$jscomp$42$$) {
  $G__36886_id$jscomp$101_map__36872_props__22175__auto__$jscomp$173_vec__36869$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__36886_id$jscomp$101_map__36872_props__22175__auto__$jscomp$173_vec__36869$$), $G__36894$jscomp$inline_4371_JSCompiler_inline_result$jscomp$inline_4370_map__36872__$1_maybe_ref__22176__auto__$jscomp$173_title$jscomp$42$$], null);
  $G__36886_id$jscomp$101_map__36872_props__22175__auto__$jscomp$173_vec__36869$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36886_id$jscomp$101_map__36872_props__22175__auto__$jscomp$173_vec__36869$$, 0, null);
  $G__36894$jscomp$inline_4371_JSCompiler_inline_result$jscomp$inline_4370_map__36872__$1_maybe_ref__22176__auto__$jscomp$173_title$jscomp$42$$ = $APP.$cljs$core$__destructure_map$$($G__36886_id$jscomp$101_map__36872_props__22175__auto__$jscomp$173_vec__36869$$);
  $G__36886_id$jscomp$101_map__36872_props__22175__auto__$jscomp$173_vec__36869$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36894$jscomp$inline_4371_JSCompiler_inline_result$jscomp$inline_4370_map__36872__$1_maybe_ref__22176__auto__$jscomp$173_title$jscomp$42$$, $APP.$cljs$cst$286$id$$);
  $G__36894$jscomp$inline_4371_JSCompiler_inline_result$jscomp$inline_4370_map__36872__$1_maybe_ref__22176__auto__$jscomp$173_title$jscomp$42$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36894$jscomp$inline_4371_JSCompiler_inline_result$jscomp$inline_4370_map__36872__$1_maybe_ref__22176__auto__$jscomp$173_title$jscomp$42$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__36894$jscomp$inline_4371_JSCompiler_inline_result$jscomp$inline_4370_map__36872__$1_maybe_ref__22176__auto__$jscomp$173_title$jscomp$42$$ = {title:$APP.$cljs$core$truth_$$($G__36894$jscomp$inline_4371_JSCompiler_inline_result$jscomp$inline_4370_map__36872__$1_maybe_ref__22176__auto__$jscomp$173_title$jscomp$42$$) ? $G__36894$jscomp$inline_4371_JSCompiler_inline_result$jscomp$inline_4370_map__36872__$1_maybe_ref__22176__auto__$jscomp$173_title$jscomp$42$$ : "The Venue", "expand-button-label":"Explore the venue", 
  "preview-text":$amp$pages$landing$venue$preview$$, "full-text":$amp$pages$landing$venue$details$$};
  $G__36894$jscomp$inline_4371_JSCompiler_inline_result$jscomp$inline_4370_map__36872__$1_maybe_ref__22176__auto__$jscomp$173_title$jscomp$42$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__36894$jscomp$inline_4371_JSCompiler_inline_result$jscomp$inline_4370_map__36872__$1_maybe_ref__22176__auto__$jscomp$173_title$jscomp$42$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__36894$jscomp$inline_4371_JSCompiler_inline_result$jscomp$inline_4370_map__36872__$1_maybe_ref__22176__auto__$jscomp$173_title$jscomp$42$$);
  $G__36886_id$jscomp$101_map__36872_props__22175__auto__$jscomp$173_vec__36869$$ = {id:$G__36886_id$jscomp$101_map__36872_props__22175__auto__$jscomp$173_vec__36869$$, children:$G__36894$jscomp$inline_4371_JSCompiler_inline_result$jscomp$inline_4370_map__36872__$1_maybe_ref__22176__auto__$jscomp$173_title$jscomp$42$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36886_id$jscomp$101_map__36872_props__22175__auto__$jscomp$173_vec__36869$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36886_id$jscomp$101_map__36872_props__22175__auto__$jscomp$173_vec__36869$$);
};
$amp$pages$landing$hero$mobile_hero_section$$ = function($G__37051_props__22175__auto__$jscomp$174_vec__37047$$) {
  $APP.$helix$core$extract_cljs_props$$($G__37051_props__22175__auto__$jscomp$174_vec__37047$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__37051_props__22175__auto__$jscomp$174_vec__37047$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ctx$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$783$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__37051_props__22175__auto__$jscomp$174_vec__37047$$, 0, null);
  var $is_active_QMARK_$jscomp$10$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__37051_props__22175__auto__$jscomp$174_vec__37047$$, 1, null), $clone_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$970$boxDecorationBreak$$, "clone", $cljs$cst$971$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__37051_props__22175__auto__$jscomp$174_vec__37047$$ = function() {
    return {id:"video", ref:$outer_ctx$jscomp$1$$, className:"relative w-full overflow-hidden", children:function() {
      var $G__37055$$ = function() {
        return {className:"w-full h-screen relative flex flex-col", children:[function() {
          var $G__37059_G__37063$jscomp$inline_4246$$ = {"allow-audio?":!1, "playback-id":"fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo", "should-play?":$is_active_QMARK_$jscomp$10$$};
          $G__37059_G__37063$jscomp$inline_4246$$ = {className:"absolute inset-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$hero$lazy_video_background$$, $G__37059_G__37063$jscomp$inline_4246$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$hero$lazy_video_background$$, $G__37059_G__37063$jscomp$inline_4246$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37059_G__37063$jscomp$inline_4246$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__37059_G__37063$jscomp$inline_4246$$);
        }(), function() {
          var $G__37067$$ = function() {
            return {className:"absolute top-20 right-8 z-20", children:function() {
              var $G__37071$$ = function() {
                return {className:"cursor-pointer w-24 sm:w-28 lg:w-32", onClick:function() {
                  return window.open("https://www.labiennale.org/en/art/2026", "_blank");
                }, children:function() {
                  var $G__37076$$ = {src:"images/graphics/61_biennale_logo_red.svg", className:"opacity-90"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__37076$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__37076$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37071$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__37071$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37067$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__37067$$);
        }(), function() {
          var $G__37080$$ = function() {
            return {className:"relative z-10 flex-1 flex flex-col items-center justify-center px-8", children:[function() {
              var $G__37084$$ = {className:"w-4/5 sm:w-2/3 max-w-2xl aspect-square mb-10 bg-amber-400 opacity-90", style:{WebkitMaskImage:$APP.$helix$impl$props$__GT_js$$("url(images/graphics/the_studio_logo.svg)"), maskImage:$APP.$helix$impl$props$__GT_js$$("url(images/graphics/the_studio_logo.svg)"), WebkitMaskSize:$APP.$helix$impl$props$__GT_js$$("contain"), maskSize:$APP.$helix$impl$props$__GT_js$$("contain"), WebkitMaskRepeat:$APP.$helix$impl$props$__GT_js$$("no-repeat"), maskRepeat:$APP.$helix$impl$props$__GT_js$$("no-repeat"), 
              WebkitMaskPosition:$APP.$helix$impl$props$__GT_js$$("center"), maskPosition:$APP.$helix$impl$props$__GT_js$$("center")}};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37084$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__37084$$);
            }(), function() {
              var $G__37090_JSCompiler_temp_const$jscomp$inline_4248$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-xs sm:text-sm uppercase tracking-[0.2em] max-w-md text-center leading-loose text-white/90"])));
              var $G__37094$jscomp$inline_4250_JSCompiler_inline_result$jscomp$inline_4249$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/50 px-3 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"Armenia Pavilion · 61st International Art Exhibition La Biennale di Venezia"};
              $G__37094$jscomp$inline_4250_JSCompiler_inline_result$jscomp$inline_4249$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__37094$jscomp$inline_4250_JSCompiler_inline_result$jscomp$inline_4249$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__37094$jscomp$inline_4250_JSCompiler_inline_result$jscomp$inline_4249$$);
              $G__37090_JSCompiler_temp_const$jscomp$inline_4248$$ = {className:$G__37090_JSCompiler_temp_const$jscomp$inline_4248$$, children:$G__37094$jscomp$inline_4250_JSCompiler_inline_result$jscomp$inline_4249$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__37090_JSCompiler_temp_const$jscomp$inline_4248$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__37090_JSCompiler_temp_const$jscomp$inline_4248$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37080$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__37080$$);
        }(), function() {
          var $G__37098_JSCompiler_temp_const$jscomp$inline_4252$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-1\n                text-white/80 hover:text-white transition-colors", "font-display", "text-xs uppercase tracking-[0.2em]"])));
          var $G__37109$jscomp$inline_4254_JSCompiler_inline_result$jscomp$inline_4253$$ = {className:"text-lg animate-bounce", children:"↓"};
          $G__37109$jscomp$inline_4254_JSCompiler_inline_result$jscomp$inline_4253$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__37109$jscomp$inline_4254_JSCompiler_inline_result$jscomp$inline_4253$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__37109$jscomp$inline_4254_JSCompiler_inline_result$jscomp$inline_4253$$);
          $G__37098_JSCompiler_temp_const$jscomp$inline_4252$$ = {href:"#press-release", className:$G__37098_JSCompiler_temp_const$jscomp$inline_4252$$, children:["Learn More", $G__37109$jscomp$inline_4254_JSCompiler_inline_result$jscomp$inline_4253$$]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__37098_JSCompiler_temp_const$jscomp$inline_4252$$) : $APP.$helix$core$jsxs$$.call(null, "a", $G__37098_JSCompiler_temp_const$jscomp$inline_4252$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37055$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__37055$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37051_props__22175__auto__$jscomp$174_vec__37047$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__37051_props__22175__auto__$jscomp$174_vec__37047$$);
};
$amp$pages$landing$teaser$teaser_section$$ = function($G__37114_props__22175__auto__$jscomp$175_vec__37105$$) {
  $APP.$helix$core$extract_cljs_props$$($G__37114_props__22175__auto__$jscomp$175_vec__37105$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ref$$ = $APP.$helix$hooks$use_ref$$("outer-ref");
  $G__37114_props__22175__auto__$jscomp$175_vec__37105$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$783$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__37114_props__22175__auto__$jscomp$175_vec__37105$$, 0, null);
  var $is_active_QMARK_$jscomp$11$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__37114_props__22175__auto__$jscomp$175_vec__37105$$, 1, null), $label_class$jscomp$1$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-semibold", "text-[10px] uppercase tracking-[0.2em]", "text-amber-600  dark:text-amber-300"])), $clone_style$jscomp$1$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 
  2, [$cljs$cst$970$boxDecorationBreak$$, "clone", $cljs$cst$971$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__37114_props__22175__auto__$jscomp$175_vec__37105$$ = function() {
    return {id:"teaser", ref:$outer_ref$$, className:"relative w-full min-h-screen overflow-hidden", children:[function() {
      var $G__37118_G__37122$jscomp$inline_4257$$ = {"allow-audio?":!1, "playback-id":"Izp5007Abkc00t4Ubns7pAiqq2zG7JIp01tvAoaVOny7O00", "should-play?":$is_active_QMARK_$jscomp$11$$};
      $G__37118_G__37122$jscomp$inline_4257$$ = {className:"absolute inset-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$teaser$lazy_video$$, $G__37118_G__37122$jscomp$inline_4257$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$teaser$lazy_video$$, $G__37118_G__37122$jscomp$inline_4257$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37118_G__37122$jscomp$inline_4257$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__37118_G__37122$jscomp$inline_4257$$);
    }(), function() {
      var $G__37126$$ = {className:"absolute inset-0 z-[1] pointer-events-none", style:{background:$APP.$helix$impl$props$__GT_js$$("linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.1) 100%), linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.05) 50%)")}};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37126$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__37126$$);
    }(), function() {
      var $G__37132$$ = function() {
        return {className:"relative z-10 flex flex-col justify-center\n               min-h-screen px-6 sm:px-12 lg:px-20\n               py-16 sm:py-24\n               max-w-4xl", children:[function() {
          var $G__37136_JSCompiler_temp_const$jscomp$inline_4259$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-bold", "uppercase tracking-wider\n                leading-relaxed text-4xl sm:text-5xl lg:text-6xl", "text-slate-950  dark:text-white", "mb-6"])));
          var $G__37140$jscomp$inline_4261_JSCompiler_inline_result$jscomp$inline_4260$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/70 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"The Studio"};
          $G__37140$jscomp$inline_4261_JSCompiler_inline_result$jscomp$inline_4260$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__37140$jscomp$inline_4261_JSCompiler_inline_result$jscomp$inline_4260$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__37140$jscomp$inline_4261_JSCompiler_inline_result$jscomp$inline_4260$$);
          $G__37136_JSCompiler_temp_const$jscomp$inline_4259$$ = {className:$G__37136_JSCompiler_temp_const$jscomp$inline_4259$$, children:$G__37140$jscomp$inline_4261_JSCompiler_inline_result$jscomp$inline_4260$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__37136_JSCompiler_temp_const$jscomp$inline_4259$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__37136_JSCompiler_temp_const$jscomp$inline_4259$$);
        }(), function() {
          var $G__37144_JSCompiler_temp_const$jscomp$inline_4263$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-sm sm:text-base uppercase tracking-[0.15em]\n                leading-loose text-white/90 mb-8 max-w-xl"])));
          var $G__37148$jscomp$inline_4265_JSCompiler_inline_result$jscomp$inline_4264$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/50 px-3 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"A living studio at the heart of the Venice Biennale"};
          $G__37148$jscomp$inline_4265_JSCompiler_inline_result$jscomp$inline_4264$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__37148$jscomp$inline_4265_JSCompiler_inline_result$jscomp$inline_4264$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__37148$jscomp$inline_4265_JSCompiler_inline_result$jscomp$inline_4264$$);
          $G__37144_JSCompiler_temp_const$jscomp$inline_4263$$ = {className:$G__37144_JSCompiler_temp_const$jscomp$inline_4263$$, children:$G__37148$jscomp$inline_4265_JSCompiler_inline_result$jscomp$inline_4264$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__37144_JSCompiler_temp_const$jscomp$inline_4263$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__37144_JSCompiler_temp_const$jscomp$inline_4263$$);
        }(), function() {
          var $G__37152_G__37156$jscomp$inline_4423_JSCompiler_temp_const$jscomp$inline_4424$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-body", "text-base sm:text-lg leading-relaxed text-white/90"])));
          var $G__37160$jscomp$inline_4426_JSCompiler_inline_result$jscomp$inline_4425$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"Over six months, sculptor Zadik Zadikian and his team will occupy the Arsenale Militare—casting, assembling, and building in real time. Nothing is fixed. Nothing is final. The work is the making itself."};
          $G__37160$jscomp$inline_4426_JSCompiler_inline_result$jscomp$inline_4425$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__37160$jscomp$inline_4426_JSCompiler_inline_result$jscomp$inline_4425$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__37160$jscomp$inline_4426_JSCompiler_inline_result$jscomp$inline_4425$$);
          $G__37152_G__37156$jscomp$inline_4423_JSCompiler_temp_const$jscomp$inline_4424$$ = {className:$G__37152_G__37156$jscomp$inline_4423_JSCompiler_temp_const$jscomp$inline_4424$$, children:$G__37160$jscomp$inline_4426_JSCompiler_inline_result$jscomp$inline_4425$$};
          $G__37152_G__37156$jscomp$inline_4423_JSCompiler_temp_const$jscomp$inline_4424$$ = {className:"space-y-3 mb-10 max-w-lg", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__37152_G__37156$jscomp$inline_4423_JSCompiler_temp_const$jscomp$inline_4424$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__37152_G__37156$jscomp$inline_4423_JSCompiler_temp_const$jscomp$inline_4424$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37152_G__37156$jscomp$inline_4423_JSCompiler_temp_const$jscomp$inline_4424$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__37152_G__37156$jscomp$inline_4423_JSCompiler_temp_const$jscomp$inline_4424$$);
        }(), function() {
          var $G__37164$$ = function() {
            return {className:"grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10", children:[function() {
              var $G__37168$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__37172$$ = {className:$APP.$helix$impl$props$normalize_class$$($label_class$jscomp$1$$), children:"Opening"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__37172$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__37172$$);
                }(), function() {
                  var $G__37176_JSCompiler_temp_const$jscomp$inline_4271$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-xs sm:text-sm text-white/90"])));
                  var $G__37180$jscomp$inline_4273_JSCompiler_inline_result$jscomp$inline_4272$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"9 May – 22 November 2026"};
                  $G__37180$jscomp$inline_4273_JSCompiler_inline_result$jscomp$inline_4272$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__37180$jscomp$inline_4273_JSCompiler_inline_result$jscomp$inline_4272$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__37180$jscomp$inline_4273_JSCompiler_inline_result$jscomp$inline_4272$$);
                  $G__37176_JSCompiler_temp_const$jscomp$inline_4271$$ = {className:$G__37176_JSCompiler_temp_const$jscomp$inline_4271$$, children:$G__37180$jscomp$inline_4273_JSCompiler_inline_result$jscomp$inline_4272$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__37176_JSCompiler_temp_const$jscomp$inline_4271$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__37176_JSCompiler_temp_const$jscomp$inline_4271$$);
                }(), function() {
                  var $G__37184$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-medium", "text-xs", "text-amber-600/80 dark:text-amber-300/80", "mt-1"]))), children:"Preview: 6, 7, 8 May"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__37184$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__37184$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37168$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__37168$$);
            }(), function() {
              var $G__37188$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__37192$$ = {className:$APP.$helix$impl$props$normalize_class$$($label_class$jscomp$1$$), children:"Venue"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__37192$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__37192$$);
                }(), function() {
                  var $G__37196_JSCompiler_temp_const$jscomp$inline_4275$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-xs sm:text-sm text-white/90 hover:text-white\n                      underline underline-offset-4 decoration-white/30 hover:decoration-white/60\n                      transition-colors block whitespace-nowrap"])));
                  var $G__37200$jscomp$inline_4277_JSCompiler_inline_result$jscomp$inline_4276$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"Arsenale Militare, Venice"};
                  $G__37200$jscomp$inline_4277_JSCompiler_inline_result$jscomp$inline_4276$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__37200$jscomp$inline_4277_JSCompiler_inline_result$jscomp$inline_4276$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__37200$jscomp$inline_4277_JSCompiler_inline_result$jscomp$inline_4276$$);
                  $G__37196_JSCompiler_temp_const$jscomp$inline_4275$$ = {href:"https://maps.app.goo.gl/QvYkqwN1Bv7L9VDn7", target:"_blank", rel:"noopener noreferrer", className:$G__37196_JSCompiler_temp_const$jscomp$inline_4275$$, children:$G__37200$jscomp$inline_4277_JSCompiler_inline_result$jscomp$inline_4276$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__37196_JSCompiler_temp_const$jscomp$inline_4275$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__37196_JSCompiler_temp_const$jscomp$inline_4275$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37188$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__37188$$);
            }(), function() {
              var $G__37204$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__37208$$ = {className:$APP.$helix$impl$props$normalize_class$$($label_class$jscomp$1$$), children:"Pavilion"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__37208$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__37208$$);
                }(), function() {
                  var $G__37212_JSCompiler_temp_const$jscomp$inline_4279$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-xs sm:text-sm text-white/90"])));
                  var $G__37216$jscomp$inline_4281_JSCompiler_inline_result$jscomp$inline_4280$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"Republic of Armenia"};
                  $G__37216$jscomp$inline_4281_JSCompiler_inline_result$jscomp$inline_4280$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__37216$jscomp$inline_4281_JSCompiler_inline_result$jscomp$inline_4280$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__37216$jscomp$inline_4281_JSCompiler_inline_result$jscomp$inline_4280$$);
                  $G__37212_JSCompiler_temp_const$jscomp$inline_4279$$ = {className:$G__37212_JSCompiler_temp_const$jscomp$inline_4279$$, children:$G__37216$jscomp$inline_4281_JSCompiler_inline_result$jscomp$inline_4280$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__37212_JSCompiler_temp_const$jscomp$inline_4279$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__37212_JSCompiler_temp_const$jscomp$inline_4279$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37204$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__37204$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37164$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__37164$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37132$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__37132$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37114_props__22175__auto__$jscomp$175_vec__37105$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__37114_props__22175__auto__$jscomp$175_vec__37105$$);
};
$APP.$amp$pages$landing$page$landing_view$$ = function($G__37256_props__22175__auto__$jscomp$176$$) {
  $APP.$helix$core$extract_cljs_props$$($G__37256_props__22175__auto__$jscomp$176$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $container_ref$jscomp$4$$ = $APP.$helix$hooks$use_ref$$("container-ref"), $is_desktop_QMARK_$jscomp$6$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__37256_props__22175__auto__$jscomp$176$$ = function() {
    return {ref:$container_ref$jscomp$4$$, className:$APP.$helix$impl$props$normalize_class$$("overflow-x-hidden grey-grad " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-900  dark:text-slate-100")), children:[$APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$6$$) ? function() {
      var $G__37260$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$nav$logo$logo_nav$$, $G__37260$$) : $APP.$helix$core$jsx$$.call(null, $amp$nav$logo$logo_nav$$, $G__37260$$);
    }() : null, function() {
      var $G__37262_G__37267$jscomp$inline_3704$$ = {};
      $G__37262_G__37267$jscomp$inline_3704$$ = {"section-id":"hero", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$hero$mobile_hero_section$$, $G__37262_G__37267$jscomp$inline_3704$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$hero$mobile_hero_section$$, $G__37262_G__37267$jscomp$inline_3704$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$ui$section$section$$, $G__37262_G__37267$jscomp$inline_3704$$, "hero") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section$section$$, $G__37262_G__37267$jscomp$inline_3704$$, "hero");
    }(), function() {
      var $G__37269_G__37274$jscomp$inline_3707$$ = {};
      $G__37269_G__37274$jscomp$inline_3707$$ = {"section-id":"teaser", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$teaser$teaser_section$$, $G__37269_G__37274$jscomp$inline_3707$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$teaser$teaser_section$$, $G__37269_G__37274$jscomp$inline_3707$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$ui$section$section$$, $G__37269_G__37274$jscomp$inline_3707$$, "teaser") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section$section$$, $G__37269_G__37274$jscomp$inline_3707$$, "teaser");
    }(), function() {
      var $G__37276$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$("w-full max-w-full overflow-x-hidden flex justify-center"), children:function() {
          var $G__37280$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("flex flex-col " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("w-full lg:w-8/12 min-w-0")), children:[function() {
              var $G__37284$$ = {id:"press-release", title:"Press Release"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$landing$press_release$press_release$$, $G__37284$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$landing$press_release$press_release$$, $G__37284$$);
            }(), function() {
              var $G__37289$$ = {id:"about-studio", title:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$landing$studio$about_studio$$, $G__37289$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$landing$studio$about_studio$$, $G__37289$$);
            }(), function() {
              var $G__37325$$ = {id:"venue", title:"The Venue"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$venue$location_section$$, $G__37325$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$venue$location_section$$, $G__37325$$);
            }(), function() {
              var $G__37333$$ = {id:"in-minor-keys", title:"In Minor Keys"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$in_minor_keys$in_minor_keys$$, $G__37333$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$in_minor_keys$in_minor_keys$$, $G__37333$$);
            }(), function() {
              var $G__37338$$ = {id:"artist", title:"The Artist"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$artist$artist_section$$, $G__37338$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$artist$artist_section$$, $G__37338$$);
            }(), function() {
              var $G__37342$$ = {id:"curators", title:"Curators"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$landing$curators$curators_section$$, $G__37342$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$landing$curators$curators_section$$, $G__37342$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37280$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__37280$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37276$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__37276$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__37256_props__22175__auto__$jscomp$176$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__37256_props__22175__auto__$jscomp$176$$);
};
$cljs$cst$974$visible_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "visible?", "visible?", 2129863715);
$cljs$cst$972$img$$ = new $APP.$cljs$core$Keyword$$(null, "img", "img", 1442687358);
$cljs$cst$970$boxDecorationBreak$$ = new $APP.$cljs$core$Keyword$$(null, "boxDecorationBreak", "boxDecorationBreak", 826536500);
$cljs$cst$968$markers_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "markers?", "markers?", -2073688636);
$cljs$cst$971$WebkitBoxDecorationBreak$$ = new $APP.$cljs$core$Keyword$$(null, "WebkitBoxDecorationBreak", "WebkitBoxDecorationBreak", 1903427859);
$cljs$cst$975$attribution$$ = new $APP.$cljs$core$Keyword$$(null, "attribution", "attribution", 1937239286);
$cljs$cst$973$bio$$ = new $APP.$cljs$core$Keyword$$(null, "bio", "bio", -331851886);
$cljs$cst$967$scroll_ref$$ = new $APP.$cljs$core$Keyword$$(null, "scroll-ref", "scroll-ref", -1108339867);
$cljs$cst$969$debug_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "debug?", "debug?", -1831756173);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("landing-view");
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$nav$logo$logo_nav$$, '(hooks/use-ref "comp-ref")(use-scroll-trigger comp-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y -250}, :is-on? is-active?})', 
null, null) : (void 0).call(null, $amp$nav$logo$logo_nav$$, '(hooks/use-ref "comp-ref")(use-scroll-trigger comp-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y -250}, :is-on? is-active?})', null, null)), $APP.$helix$core$register_BANG_$$($amp$nav$logo$logo_nav$$, "amp.nav.logo/logo-nav"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$artist$artist_section$$, '(hooks/use-ref "artist-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$pages$landing$artist$artist_section$$, '(hooks/use-ref "artist-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$artist$artist_section$$, "amp.pages.landing.artist/artist-section"));
var $amp$pages$landing$curators$curators$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Tony Shafrazi", $APP.$cljs$cst$849$role$$, "Curator", $cljs$cst$972$img$$, "https://atd-722658831.imgix.net/committee/tony.png", $cljs$cst$973$bio$$, "Tony Shafrazi (b. 1943, Abadan, Iran) is a renowned art dealer, gallerist, and curator. Trained at the Royal College of Art in London, he moved to New York in 1969 and opened the Tony Shafrazi Gallery in 1979, championing Jean-Michel Basquiat, Keith Haring, and Kenny Scharf alongside Picasso, Francis Bacon, and Warhol. He first met Zadik Zadikian while the artist was working with Richard Serra, and has supported his work for decades."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Tina Chakarian", $APP.$cljs$cst$849$role$$, "Curator", $cljs$cst$972$img$$, "https://atd-722658831.imgix.net/committee/tina.png", $cljs$cst$973$bio$$, "Tina Chakarian is a curator based in Boston and Yerevan. Born in Beirut, she studied Visual Arts at UCLA and Tufts University. Since 2015, she has served as Commissioner and Development Director of the Armenian Pavilion at La Biennale di Venezia, playing a central role in shaping Armenia’s sustained presence on the global stage."], 
null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$curators$curator_card$$, "", null, null) : (void 0).call(null, $amp$pages$landing$curators$curator_card$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$curators$curator_card$$, 
"amp.pages.landing.curators/curator-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$curators$curators_section$$, '(hooks/use-ref "curators-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$pages$landing$curators$curators_section$$, '(hooks/use-ref "curators-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$curators$curators_section$$, "amp.pages.landing.curators/curators-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$in_minor_keys$pull_quote$$, "", null, null) : (void 0).call(null, $amp$pages$landing$in_minor_keys$pull_quote$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$in_minor_keys$pull_quote$$, 
"amp.pages.landing.in-minor-keys/pull-quote"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$in_minor_keys$curator_card$$, "", null, null) : (void 0).call(null, $amp$pages$landing$in_minor_keys$curator_card$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$pages$landing$in_minor_keys$curator_card$$, "amp.pages.landing.in-minor-keys/curator-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$in_minor_keys$preview$$, '(hooks/use-ref "imk-preview-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$pages$landing$in_minor_keys$preview$$, '(hooks/use-ref "imk-preview-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$in_minor_keys$preview$$, "amp.pages.landing.in-minor-keys/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$in_minor_keys$details$$, '(hooks/use-ref "imk-details-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$pages$landing$in_minor_keys$details$$, '(hooks/use-ref "imk-details-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$in_minor_keys$details$$, "amp.pages.landing.in-minor-keys/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$in_minor_keys$in_minor_keys$$, "", null, null) : (void 0).call(null, $amp$pages$landing$in_minor_keys$in_minor_keys$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$pages$landing$in_minor_keys$in_minor_keys$$, "amp.pages.landing.in-minor-keys/in-minor-keys"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$venue$preview$$, "", null, null) : (void 0).call(null, $amp$pages$landing$venue$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$venue$preview$$, 
"amp.pages.landing.venue/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$venue$details$$, "(use-touch-enabled)", null, null) : (void 0).call(null, $amp$pages$landing$venue$details$$, "(use-touch-enabled)", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$venue$details$$, "amp.pages.landing.venue/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$venue$location_section$$, "", null, null) : (void 0).call(null, $amp$pages$landing$venue$location_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$venue$location_section$$, 
"amp.pages.landing.venue/location-section"));
var $amp$pages$landing$hero$lazy_video_background$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$ui$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$hero$mobile_hero_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null) : (void 0).call(null, 
$amp$pages$landing$hero$mobile_hero_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$hero$mobile_hero_section$$, "amp.pages.landing.hero/mobile-hero-section"));
var $amp$pages$landing$teaser$lazy_video$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$ui$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$landing$teaser$teaser_section$$, '(hooks/use-ref "outer-ref")(use-scroll-trigger outer-ref {:end "bottom"})', null, null) : (void 0).call(null, 
$amp$pages$landing$teaser$teaser_section$$, '(hooks/use-ref "outer-ref")(use-scroll-trigger outer-ref {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$landing$teaser$teaser_section$$, "amp.pages.landing.teaser/teaser-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$pages$landing$page$landing_view$$, '(hooks/use-ref "container-ref")(use-touch-enabled)', null, null) : (void 0).call(null, $APP.$amp$pages$landing$page$landing_view$$, 
'(hooks/use-ref "container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$pages$landing$page$landing_view$$, "amp.pages.landing.page/landing-view"));
$APP.$module$contents$shadow$loader_set_loaded$$();

}).call(this);