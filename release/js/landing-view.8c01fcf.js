(function(){
'use strict';
var $cljs$core$rand_int$$, $cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$, $amp$components$fragments$about_me$about_event$$, $amp$components$sections$quote_section$quote_section$$, $amp$components$sections$video_section$video_section$$, $amp$components$ui$lower_panel_cta$lower_panel_cta$$, $amp$components$hero_header$hero_header$$, $amp$hooks$use_window_resize$use_window_size$$, $amp$components$navs$donation_nav$donation_nav$$, $amp$components$navs$logo_nav$logo_nav$$, $amp$components$hover_title$hover_title$$, 
$amp$components$ui$playable_text$playable_text$$, $amp$components$nav_link$nav_link$$, $amp$components$playful_titles$hero_menu$$, $amp$components$playful_titles$playful_titles$$, $amp$components$elements$lazy_image_gallery$check_column_dimensions$$, $amp$components$elements$lazy_image_gallery$aspect_column$$, $amp$components$elements$lazy_image_gallery$find_closest_size$$, $amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$, $amp$components$elements$lazy_image_gallery$image_layer$$, 
$amp$components$elements$lazy_image_gallery$caption_layer$$, $amp$components$elements$lazy_image_gallery$image_card$$, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $amp$components$sections$about_biennale$title$$, $amp$components$sections$about_biennale$copy_block$$, $amp$components$sections$about_biennale$about_biennale_section$$, $amp$components$writing_card$writing_card$$, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, $amp$components$sections$non_profit$title$$, 
$amp$components$sections$non_profit$copy_block$$, $amp$components$sections$non_profit$non_profit_section$$, $amp$components$sections$team_section$team_member_card$$, $amp$components$sections$team_section$team_members$$, $amp$components$sections$team_section$team_section$$, $amp$components$sections$work_overview$work_overview$$, $cljs$cst$554$images$$, $cljs$cst$538$from$$, $cljs$cst$546$on_click_handler$$, $cljs$cst$541$cta_title$$, $cljs$cst$555$image_gallery_container_ref$$, $cljs$cst$551$target_ref$$, 
$cljs$cst$549$writing$$, $cljs$cst$557$stagger$$, $cljs$cst$561$flash_images_handler$$, $cljs$cst$552$other$$, $cljs$cst$548$on_mouse_out_handler$$, $cljs$cst$547$on_mouse_over_handler$$, $cljs$cst$550$click$$, $cljs$cst$559$social$$, $cljs$cst$537$quote$$, $cljs$cst$543$hover_title_ref$$, $cljs$cst$560$email$$, $cljs$cst$539$to$$, $cljs$cst$545$is_playing_QMARK_$$, $cljs$cst$556$copy$$;
$cljs$core$rand_int$$ = function($n$jscomp$162$$) {
  return Math.floor(Math.random() * $n$jscomp$162$$);
};
$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$ = function($f$jscomp$229$$, $colls$jscomp$4$$) {
  return $APP.$cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$concat$$, $APP.$cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$map$$, $f$jscomp$229$$, $colls$jscomp$4$$));
};
$amp$components$fragments$about_me$about_event$$ = function($G__27704_props__21778__auto__$jscomp$21$$) {
  $APP.$helix$core$extract_cljs_props$$($G__27704_props__21778__auto__$jscomp$21$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__27704_props__21778__auto__$jscomp$21$$ = function() {
    return {className:"flex\n                  justify-center\n                  flex-col\n                  ", children:function() {
      var $G__27709$$ = function() {
        return {className:"text-slate-800\n                         bg-white/50\n                         backdrop-blur-md\n                         p-8", children:function() {
          var $G__27715$$ = function() {
            return {className:"flex flex-col", children:[function() {
              var $G__27719$$ = {className:"text-2xl \n                       lg:text-4xl \n                       mb-4", children:"THE STUDIO"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__27719$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__27719$$);
            }(), function() {
              var $G__27741$$ = {className:"text-md lg:text-xl mb-4", children:"The Armenia Pavilion at the 2026 Venice Biennale becomes Zadik Zadikian’s living, breathing studio."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__27741$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__27741$$);
            }(), function() {
              var $G__27745$$ = {className:"text-md lg:text-xl mb-4", children:"Every day, a team fabricates simple units of plaster and pigment."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__27745$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__27745$$);
            }(), function() {
              var $G__27751$$ = {className:"text-md lg:text-xl mb-4", children:"Structures rise, fall, and rise again — walls, pyramids, horizons."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__27751$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__27751$$);
            }(), function() {
              var $G__27757$$ = {className:"text-md lg:text-xl", children:"Nothing is fixed. Nothing is final."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__27757$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__27757$$);
            }(), function() {
              var $G__27764$$ = {className:"text-md lg:text-xl", children:"The cycle of work is the work itself."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__27764$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__27764$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__27715$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__27715$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__27709$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__27709$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__27704_props__21778__auto__$jscomp$21$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__27704_props__21778__auto__$jscomp$21$$);
};
$amp$components$sections$quote_section$quote_section$$ = function($G__27749_27868_G__27789_27869_G__27798_is_visible_QMARK_$jscomp$1_map__27727_props__21778__auto__$jscomp$22_vec__27724$$, $G__27748_27867_G__27790_27870_from$jscomp$8_maybe_ref__21780__auto__$jscomp$22_vec__27729_vec__27732$$) {
  $G__27749_27868_G__27789_27869_G__27798_is_visible_QMARK_$jscomp$1_map__27727_props__21778__auto__$jscomp$22_vec__27724$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__27749_27868_G__27789_27869_G__27798_is_visible_QMARK_$jscomp$1_map__27727_props__21778__auto__$jscomp$22_vec__27724$$), $G__27748_27867_G__27790_27870_from$jscomp$8_maybe_ref__21780__auto__$jscomp$22_vec__27729_vec__27732$$], null);
  $G__27749_27868_G__27789_27869_G__27798_is_visible_QMARK_$jscomp$1_map__27727_props__21778__auto__$jscomp$22_vec__27724$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__27749_27868_G__27789_27869_G__27798_is_visible_QMARK_$jscomp$1_map__27727_props__21778__auto__$jscomp$22_vec__27724$$, 0, null);
  var $map__27727__$1_to$jscomp$9$$ = $APP.$cljs$core$__destructure_map$$($G__27749_27868_G__27789_27869_G__27798_is_visible_QMARK_$jscomp$1_map__27727_props__21778__auto__$jscomp$22_vec__27724$$), $gradient_class$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__27727__$1_to$jscomp$9$$, $APP.$cljs$cst$534$gradient_class$$), $quote$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__27727__$1_to$jscomp$9$$, $cljs$cst$537$quote$$), $header$jscomp$5$$ = 
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__27727__$1_to$jscomp$9$$, $APP.$cljs$cst$362$header$$);
  $G__27749_27868_G__27789_27869_G__27798_is_visible_QMARK_$jscomp$1_map__27727_props__21778__auto__$jscomp$22_vec__27724$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__27727__$1_to$jscomp$9$$, $APP.$cljs$cst$535$is_visible_QMARK_$$);
  var $children$jscomp$16$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__27727__$1_to$jscomp$9$$, $APP.$cljs$cst$198$children$$);
  $G__27748_27867_G__27790_27870_from$jscomp$8_maybe_ref__21780__auto__$jscomp$22_vec__27729_vec__27732$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__27727__$1_to$jscomp$9$$, $cljs$cst$538$from$$);
  $map__27727__$1_to$jscomp$9$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__27727__$1_to$jscomp$9$$, $cljs$cst$539$to$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $from_transition$$ = $APP.$cljs$core$truth_$$($G__27748_27867_G__27790_27870_from$jscomp$8_maybe_ref__21780__auto__$jscomp$22_vec__27729_vec__27732$$) ? $APP.$cljs$core$clj__GT_js$$($G__27748_27867_G__27790_27870_from$jscomp$8_maybe_ref__21780__auto__$jscomp$22_vec__27729_vec__27732$$) : {opacity:0, duration:0.5, ease:"expo.inOut", stagger:0.1}, $to_transition$$ = $APP.$cljs$core$truth_$$($map__27727__$1_to$jscomp$9$$) ? $APP.$cljs$core$clj__GT_js$$($map__27727__$1_to$jscomp$9$$) : {opacity:1, 
  duration:0.15, ease:"expo.inOut", stagger:0.025}, $outer_ctx$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $text_ref$$ = $APP.$helix$hooks$use_ref$$("text-ref");
  $G__27748_27867_G__27790_27870_from$jscomp$8_maybe_ref__21780__auto__$jscomp$22_vec__27729_vec__27732$$ = $APP.$helix$hooks$use_state$$(new $APP.$module$node_modules$gsap$dist$gsap$$.gsap.timeline({paused:!0}));
  var $tl$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__27748_27867_G__27790_27870_from$jscomp$8_maybe_ref__21780__auto__$jscomp$22_vec__27729_vec__27732$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__27748_27867_G__27790_27870_from$jscomp$8_maybe_ref__21780__auto__$jscomp$22_vec__27729_vec__27732$$, 1, null);
  $G__27748_27867_G__27790_27870_from$jscomp$8_maybe_ref__21780__auto__$jscomp$22_vec__27729_vec__27732$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$1$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__27748_27867_G__27790_27870_from$jscomp$8_maybe_ref__21780__auto__$jscomp$22_vec__27729_vec__27732$$, 0, null);
  var $is_active_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__27748_27867_G__27790_27870_from$jscomp$8_maybe_ref__21780__auto__$jscomp$22_vec__27729_vec__27732$$, 1, null);
  $G__27748_27867_G__27790_27870_from$jscomp$8_maybe_ref__21780__auto__$jscomp$22_vec__27729_vec__27732$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $splitter$$ = $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($text_ref$$)) ? new $APP.$module$node_modules$gsap$SplitText$$.SplitText($APP.$cljs$core$_deref$$($text_ref$$), {type:"words,chars", charsClass:"playable-type-char"}) : null, $chars$jscomp$2$$ = $APP.$cljs$core$truth_$$($splitter$$) ? $splitter$$.chars : null, $ctx$$ = $APP.$module$node_modules$gsap$dist$gsap$$.gsap.context(function() {
      return $tl$jscomp$1$$.from($chars$jscomp$2$$, $from_transition$$).to($chars$jscomp$2$$, $to_transition$$).timeScale(4);
    }, $outer_ctx$jscomp$1$$);
    return function() {
      return $ctx$$.revert();
    };
  });
  $G__27749_27868_G__27789_27869_G__27798_is_visible_QMARK_$jscomp$1_map__27727_props__21778__auto__$jscomp$22_vec__27724$$ = [$quote$jscomp$1$$, $text_ref$$, $G__27749_27868_G__27789_27869_G__27798_is_visible_QMARK_$jscomp$1_map__27727_props__21778__auto__$jscomp$22_vec__27724$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__27748_27867_G__27790_27870_from$jscomp$8_maybe_ref__21780__auto__$jscomp$22_vec__27729_vec__27732$$, $G__27749_27868_G__27789_27869_G__27798_is_visible_QMARK_$jscomp$1_map__27727_props__21778__auto__$jscomp$22_vec__27724$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__27748_27867_G__27790_27870_from$jscomp$8_maybe_ref__21780__auto__$jscomp$22_vec__27729_vec__27732$$, 
  $G__27749_27868_G__27789_27869_G__27798_is_visible_QMARK_$jscomp$1_map__27727_props__21778__auto__$jscomp$22_vec__27724$$);
  $G__27749_27868_G__27789_27869_G__27798_is_visible_QMARK_$jscomp$1_map__27727_props__21778__auto__$jscomp$22_vec__27724$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($is_active_QMARK_$jscomp$4$$) ? $tl$jscomp$1$$.play() : null;
  });
  $G__27748_27867_G__27790_27870_from$jscomp$8_maybe_ref__21780__auto__$jscomp$22_vec__27729_vec__27732$$ = [$is_active_QMARK_$jscomp$4$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__27749_27868_G__27789_27869_G__27798_is_visible_QMARK_$jscomp$1_map__27727_props__21778__auto__$jscomp$22_vec__27724$$, $G__27748_27867_G__27790_27870_from$jscomp$8_maybe_ref__21780__auto__$jscomp$22_vec__27729_vec__27732$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__27749_27868_G__27789_27869_G__27798_is_visible_QMARK_$jscomp$1_map__27727_props__21778__auto__$jscomp$22_vec__27724$$, 
  $G__27748_27867_G__27790_27870_from$jscomp$8_maybe_ref__21780__auto__$jscomp$22_vec__27729_vec__27732$$);
  $G__27749_27868_G__27789_27869_G__27798_is_visible_QMARK_$jscomp$1_map__27727_props__21778__auto__$jscomp$22_vec__27724$$ = function() {
    return {ref:$outer_ctx$jscomp$1$$, className:$APP.$helix$impl$props$normalize_class$$(["h-full w-full ", $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($gradient_class$jscomp$1$$) ? $gradient_class$jscomp$1$$ : null)].join("")), children:function() {
      var $G__27803$$ = function() {
        return {ref:$text_ref$$, className:"w-full h-full items-center justify-center flex", children:$APP.$cljs$core$truth_$$($children$jscomp$16$$) ? $children$jscomp$16$$ : function() {
          var $G__27811$$ = function() {
            return {className:"border-2 border-red-500", children:[function() {
              var $G__27819$$ = {children:$header$jscomp$5$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__27819$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__27819$$);
            }(), function() {
              var $G__27827$$ = function() {
                return {children:$APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($line$jscomp$21$$) {
                  var $G__27841$$ = {children:$line$jscomp$21$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("p", $G__27841$$, $line$jscomp$21$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__27841$$, $line$jscomp$21$$);
                }, $quote$jscomp$1$$)};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__27827$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__27827$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__27811$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__27811$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__27803$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__27803$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__27749_27868_G__27789_27869_G__27798_is_visible_QMARK_$jscomp$1_map__27727_props__21778__auto__$jscomp$22_vec__27724$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__27749_27868_G__27789_27869_G__27798_is_visible_QMARK_$jscomp$1_map__27727_props__21778__auto__$jscomp$22_vec__27724$$);
};
$amp$components$sections$video_section$video_section$$ = function($G__27850_map__27815_map__27815__$1_outer_ctx$jscomp$2_props__21778__auto__$jscomp$23_vec__27812_vec__27832$$, $G__27858$jscomp$inline_3646_G__27863$jscomp$inline_3647_JSCompiler_inline_result$jscomp$inline_3645_maybe_ref__21780__auto__$jscomp$23_playback_id$$) {
  $G__27850_map__27815_map__27815__$1_outer_ctx$jscomp$2_props__21778__auto__$jscomp$23_vec__27812_vec__27832$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__27850_map__27815_map__27815__$1_outer_ctx$jscomp$2_props__21778__auto__$jscomp$23_vec__27812_vec__27832$$), $G__27858$jscomp$inline_3646_G__27863$jscomp$inline_3647_JSCompiler_inline_result$jscomp$inline_3645_maybe_ref__21780__auto__$jscomp$23_playback_id$$], 
  null);
  $G__27850_map__27815_map__27815__$1_outer_ctx$jscomp$2_props__21778__auto__$jscomp$23_vec__27812_vec__27832$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__27850_map__27815_map__27815__$1_outer_ctx$jscomp$2_props__21778__auto__$jscomp$23_vec__27812_vec__27832$$, 0, null);
  $G__27850_map__27815_map__27815__$1_outer_ctx$jscomp$2_props__21778__auto__$jscomp$23_vec__27812_vec__27832$$ = $APP.$cljs$core$__destructure_map$$($G__27850_map__27815_map__27815__$1_outer_ctx$jscomp$2_props__21778__auto__$jscomp$23_vec__27812_vec__27832$$);
  $G__27858$jscomp$inline_3646_G__27863$jscomp$inline_3647_JSCompiler_inline_result$jscomp$inline_3645_maybe_ref__21780__auto__$jscomp$23_playback_id$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__27850_map__27815_map__27815__$1_outer_ctx$jscomp$2_props__21778__auto__$jscomp$23_vec__27812_vec__27832$$, $APP.$cljs$cst$540$playback_id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__27850_map__27815_map__27815__$1_outer_ctx$jscomp$2_props__21778__auto__$jscomp$23_vec__27812_vec__27832$$ = $APP.$amp$providers$main_provider$use_main_state$$();
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__27850_map__27815_map__27815__$1_outer_ctx$jscomp$2_props__21778__auto__$jscomp$23_vec__27812_vec__27832$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__27850_map__27815_map__27815__$1_outer_ctx$jscomp$2_props__21778__auto__$jscomp$23_vec__27812_vec__27832$$, 1, null);
  $G__27850_map__27815_map__27815__$1_outer_ctx$jscomp$2_props__21778__auto__$jscomp$23_vec__27812_vec__27832$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  var $is_active_QMARK_$jscomp$5_vec__27835$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($G__27850_map__27815_map__27815__$1_outer_ctx$jscomp$2_props__21778__auto__$jscomp$23_vec__27812_vec__27832$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$472$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$5_vec__27835$$, 0, null);
  $is_active_QMARK_$jscomp$5_vec__27835$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$5_vec__27835$$, 1, null);
  $G__27858$jscomp$inline_3646_G__27863$jscomp$inline_3647_JSCompiler_inline_result$jscomp$inline_3645_maybe_ref__21780__auto__$jscomp$23_playback_id$$ = {"playback-id":$G__27858$jscomp$inline_3646_G__27863$jscomp$inline_3647_JSCompiler_inline_result$jscomp$inline_3645_maybe_ref__21780__auto__$jscomp$23_playback_id$$, "should-play?":$is_active_QMARK_$jscomp$5_vec__27835$$};
  $G__27858$jscomp$inline_3646_G__27863$jscomp$inline_3647_JSCompiler_inline_result$jscomp$inline_3645_maybe_ref__21780__auto__$jscomp$23_playback_id$$ = {className:"h-full\n                           w-full\n                           flex\n                           relative \n                           flex items-center justify-items-center justify-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$video_section$lazy_video_background$$, 
  $G__27858$jscomp$inline_3646_G__27863$jscomp$inline_3647_JSCompiler_inline_result$jscomp$inline_3645_maybe_ref__21780__auto__$jscomp$23_playback_id$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$video_section$lazy_video_background$$, $G__27858$jscomp$inline_3646_G__27863$jscomp$inline_3647_JSCompiler_inline_result$jscomp$inline_3645_maybe_ref__21780__auto__$jscomp$23_playback_id$$)};
  $G__27858$jscomp$inline_3646_G__27863$jscomp$inline_3647_JSCompiler_inline_result$jscomp$inline_3645_maybe_ref__21780__auto__$jscomp$23_playback_id$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__27858$jscomp$inline_3646_G__27863$jscomp$inline_3647_JSCompiler_inline_result$jscomp$inline_3645_maybe_ref__21780__auto__$jscomp$23_playback_id$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__27858$jscomp$inline_3646_G__27863$jscomp$inline_3647_JSCompiler_inline_result$jscomp$inline_3645_maybe_ref__21780__auto__$jscomp$23_playback_id$$);
  $G__27850_map__27815_map__27815__$1_outer_ctx$jscomp$2_props__21778__auto__$jscomp$23_vec__27812_vec__27832$$ = {id:"video", ref:$G__27850_map__27815_map__27815__$1_outer_ctx$jscomp$2_props__21778__auto__$jscomp$23_vec__27812_vec__27832$$, className:"absolute\n                    h-full\n                    w-full\n                    overflow-hidden", children:$G__27858$jscomp$inline_3646_G__27863$jscomp$inline_3647_JSCompiler_inline_result$jscomp$inline_3645_maybe_ref__21780__auto__$jscomp$23_playback_id$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__27850_map__27815_map__27815__$1_outer_ctx$jscomp$2_props__21778__auto__$jscomp$23_vec__27812_vec__27832$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__27850_map__27815_map__27815__$1_outer_ctx$jscomp$2_props__21778__auto__$jscomp$23_vec__27812_vec__27832$$);
};
$amp$components$ui$lower_panel_cta$lower_panel_cta$$ = function($G__27805_map__27796_map__27796__$1_props__21778__auto__$jscomp$24_vec__27793$$, $maybe_ref__21780__auto__$jscomp$24$$) {
  $G__27805_map__27796_map__27796__$1_props__21778__auto__$jscomp$24_vec__27793$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__27805_map__27796_map__27796__$1_props__21778__auto__$jscomp$24_vec__27793$$), $maybe_ref__21780__auto__$jscomp$24$$], null);
  $G__27805_map__27796_map__27796__$1_props__21778__auto__$jscomp$24_vec__27793$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__27805_map__27796_map__27796__$1_props__21778__auto__$jscomp$24_vec__27793$$, 0, null);
  $G__27805_map__27796_map__27796__$1_props__21778__auto__$jscomp$24_vec__27793$$ = $APP.$cljs$core$__destructure_map$$($G__27805_map__27796_map__27796__$1_props__21778__auto__$jscomp$24_vec__27793$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__27805_map__27796_map__27796__$1_props__21778__auto__$jscomp$24_vec__27793$$, $APP.$cljs$cst$198$children$$);
  var $on_click$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__27805_map__27796_map__27796__$1_props__21778__auto__$jscomp$24_vec__27793$$, $APP.$cljs$cst$477$on_click$$), $cta_title$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__27805_map__27796_map__27796__$1_props__21778__auto__$jscomp$24_vec__27793$$, $cljs$cst$541$cta_title$$), $is_visible_QMARK_$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__27805_map__27796_map__27796__$1_props__21778__auto__$jscomp$24_vec__27793$$, 
  $APP.$cljs$cst$535$is_visible_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__27805_map__27796_map__27796__$1_props__21778__auto__$jscomp$24_vec__27793$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$(["flex \n                       w-full\n                       justify-between\n                       items-center\n                       mt-1\n                       px-8\n                       py-4\n                       bg-black/20\n                       text-white\n                       backdrop-blur-md\n                       transition-all\n                       duration-500\n                       ease-out\n                       ", 
    $APP.$cljs$core$truth_$$($is_visible_QMARK_$jscomp$2$$) ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"].join("")), children:[function() {
      var $G__27821_G__27829$jscomp$inline_3288$$ = {className:"text-md lg:text-md font-fira-code", children:"THE STUDIO will open from May 9 to November 22, 2026"};
      $G__27821_G__27829$jscomp$inline_3288$$ = {children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__27821_G__27829$jscomp$inline_3288$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__27821_G__27829$jscomp$inline_3288$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__27821_G__27829$jscomp$inline_3288$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__27821_G__27829$jscomp$inline_3288$$);
    }(), function() {
      var $G__27846_G__27852$jscomp$inline_3291$$ = {title:$cta_title$$, "additional-classes":"text-2xl", "on-click":$on_click$jscomp$1$$};
      $G__27846_G__27852$jscomp$inline_3291$$ = {className:"flex justify-end", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__27846_G__27852$jscomp$inline_3291$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__27846_G__27852$jscomp$inline_3291$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__27846_G__27852$jscomp$inline_3291$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__27846_G__27852$jscomp$inline_3291$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__27805_map__27796_map__27796__$1_props__21778__auto__$jscomp$24_vec__27793$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__27805_map__27796_map__27796__$1_props__21778__auto__$jscomp$24_vec__27793$$);
};
$amp$components$hero_header$hero_header$$ = function($G__27976_props__21778__auto__$jscomp$25_vec__27972$$) {
  $APP.$helix$core$extract_cljs_props$$($G__27976_props__21778__auto__$jscomp$25_vec__27972$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$3$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $scroll_to_id$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__27976_props__21778__auto__$jscomp$25_vec__27972$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ctx$jscomp$3$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$472$end$$, "bottom"], null)]));
  var $visited_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__27976_props__21778__auto__$jscomp$25_vec__27972$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__27976_props__21778__auto__$jscomp$25_vec__27972$$, 1, null);
  $G__27976_props__21778__auto__$jscomp$25_vec__27972$$ = function() {
    return {id:"hero", ref:$outer_ctx$jscomp$3$$, className:"relative\n                    h-screen\n                    w-screen\n                    overflow-hidden", children:function() {
      var $G__27981$$ = function() {
        return {className:"h-full\n                           w-full\n                           relative \n                           flex items-center\n                           justify-items-center justify-center", children:[function() {
          var $G__27985_G__27989$jscomp$inline_3294$$ = {"playback-id":"Izp5007Abkc00t4Ubns7pAiqq2zG7JIp01tvAoaVOny7O00"};
          $G__27985_G__27989$jscomp$inline_3294$$ = {className:"z-10 absolute w-full h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$video_section$video_section$$, $G__27985_G__27989$jscomp$inline_3294$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$video_section$video_section$$, $G__27985_G__27989$jscomp$inline_3294$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__27985_G__27989$jscomp$inline_3294$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__27985_G__27989$jscomp$inline_3294$$);
        }(), function() {
          var $G__28005$$ = function() {
            return {className:"z-20 absolute w-full h-full", children:[function() {
              var $G__28017$$ = {className:"w-full h-full absolute pink-grad opacity-30"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28017$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28017$$);
            }(), function() {
              var $G__28025$$ = function() {
                return {className:"flex \n                                         flex-col\n                                         w-1/2 lg:w-3/4 xl:w-1/2\n                                         h-full\n                                         items-center\n                                         justify-center\n                                         mx-auto\n                                         px-4", children:[function() {
                  var $G__28029_G__28037$jscomp$inline_2993$$ = {};
                  $G__28029_G__28037$jscomp$inline_2993$$ = {className:"\n                                          \n                                                                      font-medium\n                                                                      font-fira-code\n                                                                      flex\n                                                                      items-center\n                                                                      justify-center", 
                  children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$fragments$about_me$about_event$$, $G__28029_G__28037$jscomp$inline_2993$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$fragments$about_me$about_event$$, $G__28029_G__28037$jscomp$inline_2993$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28029_G__28037$jscomp$inline_2993$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28029_G__28037$jscomp$inline_2993$$);
                }(), function() {
                  var $G__28044$$ = function() {
                    return {"cta-title":"Learn More", "is-visible?":$visited_QMARK_$jscomp$4$$, "on-click":function() {
                      return $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$("about-work") : $scroll_to_id$$.call(null, "about-work");
                    }};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$ui$lower_panel_cta$lower_panel_cta$$, $G__28044$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$ui$lower_panel_cta$lower_panel_cta$$, $G__28044$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28025$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28025$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28005$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28005$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__27981$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__27981$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__27976_props__21778__auto__$jscomp$25_vec__27972$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__27976_props__21778__auto__$jscomp$25_vec__27972$$);
};
$amp$hooks$use_window_resize$use_window_size$$ = function() {
  var $G__27928_27939_vec__27924$$ = $APP.$helix$hooks$use_state$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$505$width$$, window.innerWidth, $APP.$cljs$cst$506$height$$, window.innerHeight], null)), $dimensions$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__27928_27939_vec__27924$$, 0, null), $set_dimensions_BANG_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__27928_27939_vec__27924$$, 1, null), $resize_handler$jscomp$1$$ = 
  function() {
    function $G__27936$$($var_args$jscomp$425$$) {
      var $G__27937__i__$jscomp$363$$ = null;
      if (arguments.length > 0) {
        $G__27937__i__$jscomp$363$$ = 0;
        for (var $G__27937__a$$ = Array(arguments.length - 0); $G__27937__i__$jscomp$363$$ < $G__27937__a$$.length;) {
          $G__27937__a$$[$G__27937__i__$jscomp$363$$] = arguments[$G__27937__i__$jscomp$363$$ + 0], ++$G__27937__i__$jscomp$363$$;
        }
        $G__27937__i__$jscomp$363$$ = new $APP.$cljs$core$IndexedSeq$$($G__27937__a$$, 0, null);
      }
      return $G__27936__delegate$$.call(this, $G__27937__i__$jscomp$363$$);
    }
    function $G__27936__delegate$$() {
      var $G__27927$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$505$width$$, window.innerWidth, $APP.$cljs$cst$506$height$$, window.innerHeight], null);
      return $set_dimensions_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_dimensions_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__27927$$) : $set_dimensions_BANG_$jscomp$1$$.call(null, $G__27927$$);
    }
    $G__27936$$.$cljs$lang$maxFixedArity$ = 0;
    $G__27936$$.$cljs$lang$applyTo$ = function($_$jscomp$364_arglist__27938$$) {
      $_$jscomp$364_arglist__27938$$ = $APP.$cljs$core$seq$$($_$jscomp$364_arglist__27938$$);
      return $G__27936__delegate$$($_$jscomp$364_arglist__27938$$);
    };
    $G__27936$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__27936__delegate$$;
    return $G__27936$$;
  }();
  $G__27928_27939_vec__27924$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    window.addEventListener("resize", $resize_handler$jscomp$1$$);
    $resize_handler$jscomp$1$$();
    return function() {
      return window.removeEventListener("resize", $resize_handler$jscomp$1$$);
    };
  });
  var $G__27929_27940$$ = [];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__27928_27939_vec__27924$$, $G__27929_27940$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__27928_27939_vec__27924$$, $G__27929_27940$$);
  return $dimensions$jscomp$5$$;
};
$amp$components$navs$donation_nav$donation_nav$$ = function($G__27952_G__27960_is_desktop_QMARK_$jscomp$1_props__21778__auto__$jscomp$26$$) {
  $APP.$helix$core$extract_cljs_props$$($G__27952_G__27960_is_desktop_QMARK_$jscomp$1_props__21778__auto__$jscomp$26$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__27952_G__27960_is_desktop_QMARK_$jscomp$1_props__21778__auto__$jscomp$26$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  var $dimensions$jscomp$6$$ = $amp$hooks$use_window_resize$use_window_size$$(), $is_active_QMARK_$jscomp$7_vec__27948$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$446$start$$, function() {
    return window.innerHeight;
  }, $APP.$cljs$cst$472$end$$, "1000000px", $APP.$cljs$cst$474$markers_QMARK_$$, !1, $APP.$cljs$cst$475$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$7_vec__27948$$, 0, null);
  $is_active_QMARK_$jscomp$7_vec__27948$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$7_vec__27948$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$487$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$524$opacity$$, 1], null), $APP.$cljs$cst$488$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$524$opacity$$, 0.7], null)]));
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$485$target$$, $comp_ref$$, $APP.$cljs$cst$491$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$481$y$$, 0], null), $APP.$cljs$cst$493$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$481$y$$, -$APP.$cljs$cst$506$height$$.$cljs$core$IFn$_invoke$arity$1$($dimensions$jscomp$6$$)], null), $APP.$cljs$cst$489$is_on_QMARK_$$, 
  $is_active_QMARK_$jscomp$7_vec__27948$$], null));
  if ($APP.$cljs$core$truth_$$($G__27952_G__27960_is_desktop_QMARK_$jscomp$1_props__21778__auto__$jscomp$26$$)) {
    return $G__27952_G__27960_is_desktop_QMARK_$jscomp$1_props__21778__auto__$jscomp$26$$ = function() {
      return {ref:$comp_ref$$, className:"fixed\n                      opacity-90\n                      z-40\n                      text-xl\n                      mr-8\n                      mt-4\n                      top-0\n                      right-0", children:function() {
        var $G__27956$$ = function() {
          return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
            return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
          }};
        }();
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__27956$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__27956$$);
      }()};
    }(), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__27952_G__27960_is_desktop_QMARK_$jscomp$1_props__21778__auto__$jscomp$26$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__27952_G__27960_is_desktop_QMARK_$jscomp$1_props__21778__auto__$jscomp$26$$);
  }
  $G__27952_G__27960_is_desktop_QMARK_$jscomp$1_props__21778__auto__$jscomp$26$$ = function() {
    return {ref:$comp_ref$$, className:"fixed \n                          opacity-90\n                          z-40\n                          text-xl\n                      w-full\n                          ", children:function() {
      var $G__27964$$ = function() {
        return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
          return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__27964$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__27964$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__27952_G__27960_is_desktop_QMARK_$jscomp$1_props__21778__auto__$jscomp$26$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__27952_G__27960_is_desktop_QMARK_$jscomp$1_props__21778__auto__$jscomp$26$$);
};
$amp$components$navs$logo_nav$logo_nav$$ = function($G__28009_is_active_QMARK_$jscomp$8_props__21778__auto__$jscomp$27_vec__27998$$) {
  $APP.$helix$core$extract_cljs_props$$($G__28009_is_active_QMARK_$jscomp$8_props__21778__auto__$jscomp$27_vec__27998$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__28009_is_active_QMARK_$jscomp$8_props__21778__auto__$jscomp$27_vec__27998$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$446$start$$, function() {
    return window.innerHeight - window.innerHeight / 8;
  }, $APP.$cljs$cst$472$end$$, "1000000px", $APP.$cljs$cst$474$markers_QMARK_$$, !1, $APP.$cljs$cst$475$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28009_is_active_QMARK_$jscomp$8_props__21778__auto__$jscomp$27_vec__27998$$, 0, null);
  $G__28009_is_active_QMARK_$jscomp$8_props__21778__auto__$jscomp$27_vec__27998$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28009_is_active_QMARK_$jscomp$8_props__21778__auto__$jscomp$27_vec__27998$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$487$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$524$opacity$$, 1], null), $APP.$cljs$cst$488$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$524$opacity$$, 0.7], null)]));
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$485$target$$, $comp_ref$jscomp$1$$, $APP.$cljs$cst$491$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$481$y$$, 0], null), $APP.$cljs$cst$493$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$481$y$$, -250], null), $APP.$cljs$cst$489$is_on_QMARK_$$, $G__28009_is_active_QMARK_$jscomp$8_props__21778__auto__$jscomp$27_vec__27998$$], 
  null));
  $G__28009_is_active_QMARK_$jscomp$8_props__21778__auto__$jscomp$27_vec__27998$$ = function() {
    return {ref:$comp_ref$jscomp$1$$, className:"fixed \n                    cursor-pointer\n                    opacity-90\n                    z-30\n                    text-xl\n                    ml-4\n                    mt-4\n                    w-1/5\n                    lg:w-32", onClick:function() {
      return window.open("https://www.labiennale.org/en/art/2026", "_blank");
    }, children:function() {
      var $G__28013$$ = {src:"images/graphics/biennale_logo.png"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__28013$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__28013$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28009_is_active_QMARK_$jscomp$8_props__21778__auto__$jscomp$27_vec__27998$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28009_is_active_QMARK_$jscomp$8_props__21778__auto__$jscomp$27_vec__27998$$);
};
$amp$components$hover_title$hover_title$$ = function($G__28103_hover_title_ref_map__28101_map__28101__$1_props__21778__auto__$jscomp$28_vec__28098$$, $G__28107$jscomp$inline_3650_G__28111$jscomp$inline_3651_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__21780__auto__$jscomp$28_title$jscomp$13$$) {
  $G__28103_hover_title_ref_map__28101_map__28101__$1_props__21778__auto__$jscomp$28_vec__28098$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28103_hover_title_ref_map__28101_map__28101__$1_props__21778__auto__$jscomp$28_vec__28098$$), $G__28107$jscomp$inline_3650_G__28111$jscomp$inline_3651_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__21780__auto__$jscomp$28_title$jscomp$13$$], null);
  $G__28103_hover_title_ref_map__28101_map__28101__$1_props__21778__auto__$jscomp$28_vec__28098$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28103_hover_title_ref_map__28101_map__28101__$1_props__21778__auto__$jscomp$28_vec__28098$$, 0, null);
  $G__28103_hover_title_ref_map__28101_map__28101__$1_props__21778__auto__$jscomp$28_vec__28098$$ = $APP.$cljs$core$__destructure_map$$($G__28103_hover_title_ref_map__28101_map__28101__$1_props__21778__auto__$jscomp$28_vec__28098$$);
  $G__28107$jscomp$inline_3650_G__28111$jscomp$inline_3651_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__21780__auto__$jscomp$28_title$jscomp$13$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28103_hover_title_ref_map__28101_map__28101__$1_props__21778__auto__$jscomp$28_vec__28098$$, $APP.$cljs$cst$463$title$$);
  $G__28103_hover_title_ref_map__28101_map__28101__$1_props__21778__auto__$jscomp$28_vec__28098$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28103_hover_title_ref_map__28101_map__28101__$1_props__21778__auto__$jscomp$28_vec__28098$$, $cljs$cst$543$hover_title_ref$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__28107$jscomp$inline_3650_G__28111$jscomp$inline_3651_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__21780__auto__$jscomp$28_title$jscomp$13$$ = {className:"flash-text\n                                 font-fira-code\n                                 font-bold", textAnchor:"start", alignmentBaseline:"middle", y:"50%", x:"50%", children:$G__28107$jscomp$inline_3650_G__28111$jscomp$inline_3651_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__21780__auto__$jscomp$28_title$jscomp$13$$};
  $G__28107$jscomp$inline_3650_G__28111$jscomp$inline_3651_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__21780__auto__$jscomp$28_title$jscomp$13$$ = {className:"justify-self-start", height:"100%", width:"100%", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("text", $G__28107$jscomp$inline_3650_G__28111$jscomp$inline_3651_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__21780__auto__$jscomp$28_title$jscomp$13$$) : 
  $APP.$helix$core$jsx$$.call(null, "text", $G__28107$jscomp$inline_3650_G__28111$jscomp$inline_3651_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__21780__auto__$jscomp$28_title$jscomp$13$$)};
  $G__28107$jscomp$inline_3650_G__28111$jscomp$inline_3651_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__21780__auto__$jscomp$28_title$jscomp$13$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__28107$jscomp$inline_3650_G__28111$jscomp$inline_3651_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__21780__auto__$jscomp$28_title$jscomp$13$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__28107$jscomp$inline_3650_G__28111$jscomp$inline_3651_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__21780__auto__$jscomp$28_title$jscomp$13$$);
  $G__28103_hover_title_ref_map__28101_map__28101__$1_props__21778__auto__$jscomp$28_vec__28098$$ = {className:"absolute \n                  massive-title\n                  h-full\n                  w-full\n                  pointer-events-none", ref:$G__28103_hover_title_ref_map__28101_map__28101__$1_props__21778__auto__$jscomp$28_vec__28098$$, children:$G__28107$jscomp$inline_3650_G__28111$jscomp$inline_3651_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__21780__auto__$jscomp$28_title$jscomp$13$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28103_hover_title_ref_map__28101_map__28101__$1_props__21778__auto__$jscomp$28_vec__28098$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28103_hover_title_ref_map__28101_map__28101__$1_props__21778__auto__$jscomp$28_vec__28098$$);
};
$amp$components$ui$playable_text$playable_text$$ = function($G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$, $G__28125_28146_G__28127_28148_maybe_ref__21780__auto__$jscomp$29$$) {
  $G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$), $G__28125_28146_G__28127_28148_maybe_ref__21780__auto__$jscomp$29$$], null);
  $G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$, 0, null);
  $G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$ = $APP.$cljs$core$__destructure_map$$($G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$);
  var $text$jscomp$15$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$, $APP.$cljs$cst$544$text$$), $is_playing_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$, $cljs$cst$545$is_playing_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$4$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $background_ref$$ = $APP.$helix$hooks$use_ref$$("background-ref"), $text_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("text-ref");
  $G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$ = $APP.$helix$hooks$use_state$$(new $APP.$module$node_modules$gsap$dist$gsap$$.gsap.timeline({paused:!0}));
  var $tl$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$, 1, null);
  $G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $splitter$jscomp$1$$ = $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($text_ref$jscomp$1$$)) ? new $APP.$module$node_modules$gsap$SplitText$$.SplitText($APP.$cljs$core$_deref$$($text_ref$jscomp$1$$), {type:"words,chars", charsClass:"playable-type-char"}) : null, $chars$jscomp$3$$ = $APP.$cljs$core$truth_$$($splitter$jscomp$1$$) ? $splitter$jscomp$1$$.chars : null, $ctx$jscomp$1$$ = $APP.$module$node_modules$gsap$dist$gsap$$.gsap.context(function() {
      return $tl$jscomp$2$$.from($APP.$cljs$core$_deref$$($background_ref$$), {width:"0", duration:0.15, ease:"expo.inOut"}).to($APP.$cljs$core$_deref$$($background_ref$$), {width:"100%", duration:0.15, ease:"expo.inOut"}).from($chars$jscomp$3$$, {opacity:0, duration:0.15, ease:"expo.inOut", stagger:0.025}).to($chars$jscomp$3$$, {opacity:1, duration:0.15, ease:"expo.inOut", stagger:0.025});
    }, $outer_ctx$jscomp$4$$);
    return function() {
      return $ctx$jscomp$1$$.revert();
    };
  });
  $G__28125_28146_G__28127_28148_maybe_ref__21780__auto__$jscomp$29$$ = [$text$jscomp$15$$, $text_ref$jscomp$1$$, $is_playing_QMARK_$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$, $G__28125_28146_G__28127_28148_maybe_ref__21780__auto__$jscomp$29$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$, 
  $G__28125_28146_G__28127_28148_maybe_ref__21780__auto__$jscomp$29$$);
  $G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($is_playing_QMARK_$$) ? $tl$jscomp$2$$.play() : $tl$jscomp$2$$.reverse();
  });
  $G__28125_28146_G__28127_28148_maybe_ref__21780__auto__$jscomp$29$$ = [$is_playing_QMARK_$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$, $G__28125_28146_G__28127_28148_maybe_ref__21780__auto__$jscomp$29$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$, $G__28125_28146_G__28127_28148_maybe_ref__21780__auto__$jscomp$29$$);
  $G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$ = function() {
    return {ref:$outer_ctx$jscomp$4$$, children:function() {
      var $G__28133$$ = function() {
        return {ref:$text_ref$jscomp$1$$, className:"relative", children:[function() {
          var $G__28137$$ = {ref:$background_ref$$, className:"absolute h-full playable-text-background"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28137$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28137$$);
        }(), function() {
          var $G__28141$$ = {className:"playable-text-chars p-2", children:$text$jscomp$15$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28141$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28141$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28133$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28133$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28124_28145_G__28126_28147_G__28129_map__28120_map__28120__$1_props__21778__auto__$jscomp$29_vec__28117_vec__28121$$);
};
$amp$components$nav_link$nav_link$$ = function($G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$, $maybe_ref__21780__auto__$jscomp$30$$) {
  $G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$), $maybe_ref__21780__auto__$jscomp$30$$], null);
  $G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$, 0, null);
  $G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$ = $APP.$cljs$core$__destructure_map$$($G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$);
  var $on_click_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$, $cljs$cst$546$on_click_handler$$), $on_mouse_over_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$, $cljs$cst$547$on_mouse_over_handler$$), $on_mouse_out_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$, 
  $cljs$cst$548$on_mouse_out_handler$$), $title$jscomp$14$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$, $APP.$cljs$cst$463$title$$), $writing$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$, $cljs$cst$549$writing$$), $section_id$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$, 
  $APP.$cljs$cst$504$section_id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$14$$ = $APP.$helix$hooks$use_ref$$("link-ref");
  $G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$ = $APP.$helix$hooks$use_state$$(!1);
  var $is_hovering_QMARK_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$, 0, null), $set_is_hovering_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$, 1, null);
  $G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$ = function() {
    return {children:[function() {
      var $G__28163$$ = function() {
        return {ref:$ref$jscomp$14$$, className:"\n                  hero-nav-links\n                  cursor-pointer\n                  font-fira-code\n                  font-medium\n                  text-6xl", onMouseOver:function() {
          $APP.$cljs$core$tap_GT_$$("mouse over");
          $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $set_is_hovering_BANG_$$.call(null, !0);
          var $G__28167$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$504$section_id$$, $section_id$jscomp$2$$], null);
          return $on_mouse_over_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_mouse_over_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__28167$$) : $on_mouse_over_handler$$.call(null, $G__28167$$);
        }, onMouseOut:function() {
          $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(!1) : $set_is_hovering_BANG_$$.call(null, !1);
          var $G__28168$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$504$section_id$$, $section_id$jscomp$2$$], null);
          return $on_mouse_out_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_mouse_out_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__28168$$) : $on_mouse_out_handler$$.call(null, $G__28168$$);
        }, onClick:function() {
          var $G__28169$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$504$section_id$$, $section_id$jscomp$2$$], null);
          return $on_click_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_click_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__28169$$) : $on_click_handler$$.call(null, $G__28169$$);
        }, children:$title$jscomp$14$$};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("a", $G__28163$$, $section_id$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__28163$$, $section_id$jscomp$2$$);
    }(), function() {
      var $G__28171_G__28175$jscomp$inline_3300$$ = {text:$writing$$, "is-playing?":$is_hovering_QMARK_$$};
      $G__28171_G__28175$jscomp$inline_3300$$ = {className:"whitespace-nowrap\n                                                absolute\n                                                translate-x-full\n                                                bottom-2\n                                                \n                                                self-baseline\n                                                right-0\n                                                 pl-6\n                                                ", 
      children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$ui$playable_text$playable_text$$, $G__28171_G__28175$jscomp$inline_3300$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$ui$playable_text$playable_text$$, $G__28171_G__28175$jscomp$inline_3300$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28171_G__28175$jscomp$inline_3300$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28171_G__28175$jscomp$inline_3300$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28159_map__28154_map__28154__$1_props__21778__auto__$jscomp$30_vec__28151_vec__28155$$);
};
$amp$components$playful_titles$hero_menu$$ = function($G__28193_map__28191_map__28191__$1_props__21778__auto__$jscomp$31_vec__28188$$, $maybe_ref__21780__auto__$jscomp$31$$) {
  $G__28193_map__28191_map__28191__$1_props__21778__auto__$jscomp$31_vec__28188$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28193_map__28191_map__28191__$1_props__21778__auto__$jscomp$31_vec__28188$$), $maybe_ref__21780__auto__$jscomp$31$$], null);
  $G__28193_map__28191_map__28191__$1_props__21778__auto__$jscomp$31_vec__28188$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28193_map__28191_map__28191__$1_props__21778__auto__$jscomp$31_vec__28188$$, 0, null);
  $G__28193_map__28191_map__28191__$1_props__21778__auto__$jscomp$31_vec__28188$$ = $APP.$cljs$core$__destructure_map$$($G__28193_map__28191_map__28191__$1_props__21778__auto__$jscomp$31_vec__28188$$);
  var $data$jscomp$132$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28193_map__28191_map__28191__$1_props__21778__auto__$jscomp$31_vec__28188$$, $APP.$cljs$cst$142$data$$), $over$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28193_map__28191_map__28191__$1_props__21778__auto__$jscomp$31_vec__28188$$, $APP.$cljs$cst$487$over$$), $out$jscomp$13$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28193_map__28191_map__28191__$1_props__21778__auto__$jscomp$31_vec__28188$$, 
  $APP.$cljs$cst$488$out$$), $click$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28193_map__28191_map__28191__$1_props__21778__auto__$jscomp$31_vec__28188$$, $cljs$cst$550$click$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__28193_map__28191_map__28191__$1_props__21778__auto__$jscomp$31_vec__28188$$ = function() {
    return {className:"absolute \n                  bg-white/30\n                  font-fira-code\n                  pointer-events-auto", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__28201_G__28206$jscomp$inline_3654_G__28210$jscomp$inline_3655_p__28196_writing$jscomp$1$$) {
      var $id$jscomp$66$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28201_G__28206$jscomp$inline_3654_G__28210$jscomp$inline_3655_p__28196_writing$jscomp$1$$, 0, null);
      $G__28201_G__28206$jscomp$inline_3654_G__28210$jscomp$inline_3655_p__28196_writing$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28201_G__28206$jscomp$inline_3654_G__28210$jscomp$inline_3655_p__28196_writing$jscomp$1$$, 1, null);
      $G__28201_G__28206$jscomp$inline_3654_G__28210$jscomp$inline_3655_p__28196_writing$jscomp$1$$ = {title:$id$jscomp$66$$, writing:$G__28201_G__28206$jscomp$inline_3654_G__28210$jscomp$inline_3655_p__28196_writing$jscomp$1$$, "section-id":$id$jscomp$66$$, "on-mouse-over-handler":$over$jscomp$1$$, "on-mouse-out-handler":$out$jscomp$13$$, "on-click-handler":$click$$};
      $G__28201_G__28206$jscomp$inline_3654_G__28210$jscomp$inline_3655_p__28196_writing$jscomp$1$$ = {className:"relative flex", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$nav_link$nav_link$$, $G__28201_G__28206$jscomp$inline_3654_G__28210$jscomp$inline_3655_p__28196_writing$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$nav_link$nav_link$$, $G__28201_G__28206$jscomp$inline_3654_G__28210$jscomp$inline_3655_p__28196_writing$jscomp$1$$)};
      $G__28201_G__28206$jscomp$inline_3654_G__28210$jscomp$inline_3655_p__28196_writing$jscomp$1$$ = {className:"flex", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28201_G__28206$jscomp$inline_3654_G__28210$jscomp$inline_3655_p__28196_writing$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28201_G__28206$jscomp$inline_3654_G__28210$jscomp$inline_3655_p__28196_writing$jscomp$1$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__28201_G__28206$jscomp$inline_3654_G__28210$jscomp$inline_3655_p__28196_writing$jscomp$1$$, $id$jscomp$66$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28201_G__28206$jscomp$inline_3654_G__28210$jscomp$inline_3655_p__28196_writing$jscomp$1$$, $id$jscomp$66$$);
    }, $data$jscomp$132$$)};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28193_map__28191_map__28191__$1_props__21778__auto__$jscomp$31_vec__28188$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28193_map__28191_map__28191__$1_props__21778__auto__$jscomp$31_vec__28188$$);
};
$amp$components$playful_titles$playful_titles$$ = function($G__28288_props__21778__auto__$jscomp$32_vec__28251_vec__28254$$) {
  $APP.$helix$core$extract_cljs_props$$($G__28288_props__21778__auto__$jscomp$32_vec__28251_vec__28254$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__28288_props__21778__auto__$jscomp$32_vec__28251_vec__28254$$ = $APP.$amp$providers$main_provider$use_main_state$$();
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28288_props__21778__auto__$jscomp$32_vec__28251_vec__28254$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28288_props__21778__auto__$jscomp$32_vec__28251_vec__28254$$, 1, null);
  var $hover_title_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("hover-title-ref");
  $G__28288_props__21778__auto__$jscomp$32_vec__28251_vec__28254$$ = $APP.$helix$hooks$use_state$$(null);
  var $current_section$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28288_props__21778__auto__$jscomp$32_vec__28251_vec__28254$$, 0, null), $set_current_section_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28288_props__21778__auto__$jscomp$32_vec__28251_vec__28254$$, 1, null), $nav_mouse_over_handler$$ = function() {
    function $G__28260$$($map__28270__$1_p__28265_section_id$jscomp$3$$) {
      $map__28270__$1_p__28265_section_id$jscomp$3$$ = $APP.$cljs$core$__destructure_map$$($map__28270__$1_p__28265_section_id$jscomp$3$$);
      $map__28270__$1_p__28265_section_id$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__28270__$1_p__28265_section_id$jscomp$3$$, $APP.$cljs$cst$504$section_id$$);
      $set_current_section_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_current_section_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($map__28270__$1_p__28265_section_id$jscomp$3$$) : $set_current_section_BANG_$$.call(null, $map__28270__$1_p__28265_section_id$jscomp$3$$);
      return $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to($APP.$cljs$core$_deref$$($hover_title_ref$jscomp$1$$), {opacity:0.8, duration:0.2});
    }
    var $G__28261$$ = [$hover_title_ref$jscomp$1$$];
    return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__28260$$, $G__28261$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__28260$$, $G__28261$$);
  }(), $nav_mouse_out_handler$$ = function() {
    function $G__28281$$() {
      return $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to($APP.$cljs$core$_deref$$($hover_title_ref$jscomp$1$$), {opacity:0, duration:0.2});
    }
    var $G__28282$$ = [$hover_title_ref$jscomp$1$$];
    return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__28281$$, $G__28282$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__28281$$, $G__28282$$);
  }();
  $G__28288_props__21778__auto__$jscomp$32_vec__28251_vec__28254$$ = function() {
    return {className:"relative\n                    w-full \n                    h-full \n                    \n                    ", children:[function() {
      var $G__28294$$ = function() {
        return {className:"relative\n                    w-full \n                    h-full \n                    flex\n                    items-center\n                    justify-items-center\n                    justify-center", children:[function() {
          var $G__28299$$ = {"hover-title-ref":$hover_title_ref$jscomp$1$$, title:$current_section$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$hover_title$hover_title$$, $G__28299$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$hover_title$hover_title$$, $G__28299$$);
        }(), function() {
          var $G__28304$$ = {data:$amp$components$playful_titles$titles$$, over:$nav_mouse_over_handler$$, out:$nav_mouse_out_handler$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$playful_titles$hero_menu$$, $G__28304$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$playful_titles$hero_menu$$, $G__28304$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28294$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28294$$);
    }(), function() {
      var $G__28311$$ = {className:"absolute\n                                     bottom-10\n                           w-full\n                           flex\n                           justify-center\n                           "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28311$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28311$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28288_props__21778__auto__$jscomp$32_vec__28251_vec__28254$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28288_props__21778__auto__$jscomp$32_vec__28251_vec__28254$$);
};
$amp$components$elements$lazy_image_gallery$check_column_dimensions$$ = function($columns$jscomp$3$$) {
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(function($total_height$$, $dimensions$jscomp$7$$) {
    return $total_height$$ + $APP.$cljs$core$second$$($dimensions$jscomp$7$$);
  }, 0, $columns$jscomp$3$$);
};
$amp$components$elements$lazy_image_gallery$aspect_column$$ = function($width$jscomp$32$$, $height$jscomp$29$$) {
  var $initial_images$$ = function() {
    for (var $G__28563_accumulated_height$$ = 0, $G__28564_result$jscomp$114$$ = $APP.$cljs$core$PersistentVector$EMPTY$$;;) {
      if ($G__28563_accumulated_height$$ >= $height$jscomp$29$$) {
        return $G__28564_result$jscomp$114$$;
      }
      var $aspect_ratio$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$components$elements$lazy_image_gallery$aspect_ratios$$, $cljs$core$rand_int$$($APP.$cljs$core$count$$($amp$components$elements$lazy_image_gallery$aspect_ratios$$))), $img_height$$ = Math.round($width$jscomp$32$$ * $aspect_ratio$jscomp$4$$);
      $G__28563_accumulated_height$$ += $img_height$$;
      $G__28564_result$jscomp$114$$ = $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__28564_result$jscomp$114$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$width$jscomp$32$$, $img_height$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$532$aspect_ratio$$, $aspect_ratio$jscomp$4$$], null)));
    }
  }(), $total_height$jscomp$1$$ = $amp$components$elements$lazy_image_gallery$check_column_dimensions$$($initial_images$$), $scale_factor$jscomp$1$$ = $height$jscomp$29$$ / $total_height$jscomp$1$$;
  return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($dimensions$jscomp$8$$) {
    var $w$jscomp$16$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$8$$, 0, null), $h$jscomp$96$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$8$$, 1, null);
    return $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$w$jscomp$16$$, $h$jscomp$96$$ * $scale_factor$jscomp$1$$], null), $APP.$cljs$core$meta$$($dimensions$jscomp$8$$));
  }, $initial_images$$);
};
$amp$components$elements$lazy_image_gallery$find_closest_size$$ = function($target_width$jscomp$1$$, $target_height$jscomp$1$$) {
  var $sizes$jscomp$1$$ = $APP.$cljs$core$vec$$($cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$val$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$components$elements$lazy_image_gallery$image_sizes$$])));
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(function($closest$$, $h$jscomp$97_p__28183$$) {
    var $w$jscomp$17$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($h$jscomp$97_p__28183$$, 0, null);
    $h$jscomp$97_p__28183$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($h$jscomp$97_p__28183$$, 1, null);
    var $closest_diff$$ = Math.abs($APP.$cljs$core$first$$($closest$$) - $target_width$jscomp$1$$) + Math.abs($APP.$cljs$core$second$$($closest$$) - $target_height$jscomp$1$$);
    return Math.abs($w$jscomp$17$$ - $target_width$jscomp$1$$) + Math.abs($h$jscomp$97_p__28183$$ - $target_height$jscomp$1$$) < $closest_diff$$ ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$w$jscomp$17$$, $h$jscomp$97_p__28183$$], null) : $closest$$;
  }, $APP.$cljs$core$first$$($sizes$jscomp$1$$), $sizes$jscomp$1$$);
};
$amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$ = function($width$jscomp$33$$, $height$jscomp$30$$) {
  var $column_width$$ = Math.round($width$jscomp$33$$ / 3);
  return $cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(function() {
    return $amp$components$elements$lazy_image_gallery$aspect_column$$($column_width$$, $height$jscomp$30$$);
  }, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$core$range$cljs$0core$0IFn$0_invoke$0arity$03$$(3)]));
};
$amp$components$elements$lazy_image_gallery$image_layer$$ = function($G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$, $G__28229_28566_maybe_ref__21780__auto__$jscomp$33$$) {
  $G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$), $G__28229_28566_maybe_ref__21780__auto__$jscomp$33$$], null);
  $G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$, 0, null);
  $G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$ = $APP.$cljs$core$__destructure_map$$($G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$);
  var $img_src$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$, $APP.$cljs$cst$523$img_src$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $base_ref$$ = $APP.$helix$hooks$use_ref$$("base-ref"), $transition_ref$$ = $APP.$helix$hooks$use_ref$$("trans-ref");
  $G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$ = $APP.$helix$hooks$use_state$$(null);
  var $current_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$, 0, null), $set_current_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$, 1, null);
  $G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$ = $APP.$helix$hooks$use_state$$(null);
  var $prev_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$, 0, null), $set_prev_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$, 1, null);
  $G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($current_src$$, $img_src$jscomp$4$$) ? null : $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$($current_src$$) : $set_prev_src$$.call(null, $current_src$$);
  });
  $G__28229_28566_maybe_ref__21780__auto__$jscomp$33$$ = [$img_src$jscomp$4$$, $current_src$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$, $G__28229_28566_maybe_ref__21780__auto__$jscomp$33$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$, $G__28229_28566_maybe_ref__21780__auto__$jscomp$33$$);
  $G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$ = function() {
    return {className:"z-10", children:[$APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($prev_src$$) ? $prev_src$$ : $current_src$$) ? function() {
      var $G__28237$$ = function() {
        return {ref:$base_ref$$, src:$APP.$cljs$core$truth_$$($prev_src$$) ? $prev_src$$ : $current_src$$, className:"absolute\n                               z-10\n                               w-full\n                               h-full\n                               object-cover\n                               overflow-hidden", onLoad:function() {
          return $APP.$amp$utils$gsap$to_ref$$($transition_ref$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$524$opacity$$, 0, $APP.$cljs$cst$479$duration$$, 0], null));
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("img", $G__28237$$, "base") : $APP.$helix$core$jsx$$.call(null, "img", $G__28237$$, "base");
    }() : null, $APP.$cljs$core$truth_$$(function() {
      var $or__5025__auto__$jscomp$115$$ = $prev_src$$ == null;
      return $or__5025__auto__$jscomp$115$$ ? $or__5025__auto__$jscomp$115$$ : $img_src$jscomp$4$$;
    }()) ? function() {
      var $G__28245$$ = function() {
        return {src:$img_src$jscomp$4$$, ref:$transition_ref$$, className:"absolute\n                             z-20\n                             w-full\n                             h-full\n                             object-cover\n                             overflow-hidden", style:{opacity:$APP.$helix$impl$props$__GT_js$$(0)}, onLoad:function() {
          return $APP.$amp$utils$gsap$to_ref$$($transition_ref$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$524$opacity$$, 1, $APP.$cljs$cst$479$duration$$, 1, $APP.$cljs$cst$495$onComplete$$, function() {
            $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$(null) : $set_prev_src$$.call(null, null);
            return $set_current_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_current_src$$.$cljs$core$IFn$_invoke$arity$1$($img_src$jscomp$4$$) : $set_current_src$$.call(null, $img_src$jscomp$4$$);
          }], null));
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("img", $G__28245$$, "trans") : $APP.$helix$core$jsx$$.call(null, "img", $G__28245$$, "trans");
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28228_28565_G__28231_map__28221_map__28221__$1_props__21778__auto__$jscomp$33_vec__28218_vec__28222_vec__28225$$);
};
$amp$components$elements$lazy_image_gallery$caption_layer$$ = function($G__28319_map__28315_map__28315__$1_props__21778__auto__$jscomp$34_vec__28312$$, $maybe_ref__21780__auto__$jscomp$34$$) {
  $G__28319_map__28315_map__28315__$1_props__21778__auto__$jscomp$34_vec__28312$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28319_map__28315_map__28315__$1_props__21778__auto__$jscomp$34_vec__28312$$), $maybe_ref__21780__auto__$jscomp$34$$], null);
  $G__28319_map__28315_map__28315__$1_props__21778__auto__$jscomp$34_vec__28312$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28319_map__28315_map__28315__$1_props__21778__auto__$jscomp$34_vec__28312$$, 0, null);
  $G__28319_map__28315_map__28315__$1_props__21778__auto__$jscomp$34_vec__28312$$ = $APP.$cljs$core$__destructure_map$$($G__28319_map__28315_map__28315__$1_props__21778__auto__$jscomp$34_vec__28312$$);
  var $target_ref$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28319_map__28315_map__28315__$1_props__21778__auto__$jscomp$34_vec__28312$$, $cljs$cst$551$target_ref$$), $caption$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28319_map__28315_map__28315__$1_props__21778__auto__$jscomp$34_vec__28312$$, $APP.$cljs$cst$525$caption$$), $credit$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28319_map__28315_map__28315__$1_props__21778__auto__$jscomp$34_vec__28312$$, 
  $APP.$cljs$cst$526$credit$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28319_map__28315_map__28315__$1_props__21778__auto__$jscomp$34_vec__28312$$, $cljs$cst$552$other$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__28319_map__28315_map__28315__$1_props__21778__auto__$jscomp$34_vec__28312$$ = function() {
    return {className:"absolute\n                  z-20\n                  bottom-0 \n                  left-0\n                  w-full\n                  h-12\n                  pointer-events-none", ref:$target_ref$$, children:function() {
      var $G__28323$$ = function() {
        return {className:"h-full\n                         w-full\n                         bg-slate-900/50\n                         p-2", children:[function() {
          var $G__28327$$ = {className:"text-white \n                              font-fira-code\n                              text-xs", children:$caption$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28327$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28327$$);
        }(), function() {
          var $G__28331$$ = {className:"text-white \n                              font-fira-code\n                              text-xs", children:$credit$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28331$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28331$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28323$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28323$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28319_map__28315_map__28315__$1_props__21778__auto__$jscomp$34_vec__28312$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28319_map__28315_map__28315__$1_props__21778__auto__$jscomp$34_vec__28312$$);
};
$amp$components$elements$lazy_image_gallery$image_card$$ = function($G__28409_map__28388_map__28388__$1_props__21778__auto__$jscomp$35_vec__28385$$, $maybe_ref__21780__auto__$jscomp$35$$) {
  $G__28409_map__28388_map__28388__$1_props__21778__auto__$jscomp$35_vec__28385$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28409_map__28388_map__28388__$1_props__21778__auto__$jscomp$35_vec__28385$$), $maybe_ref__21780__auto__$jscomp$35$$], null);
  $G__28409_map__28388_map__28388__$1_props__21778__auto__$jscomp$35_vec__28385$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28409_map__28388_map__28388__$1_props__21778__auto__$jscomp$35_vec__28385$$, 0, null);
  $G__28409_map__28388_map__28388__$1_props__21778__auto__$jscomp$35_vec__28385$$ = $APP.$cljs$core$__destructure_map$$($G__28409_map__28388_map__28388__$1_props__21778__auto__$jscomp$35_vec__28385$$);
  var $width$jscomp$34$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28409_map__28388_map__28388__$1_props__21778__auto__$jscomp$35_vec__28385$$, $APP.$cljs$cst$505$width$$), $height$jscomp$31$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28409_map__28388_map__28388__$1_props__21778__auto__$jscomp$35_vec__28385$$, $APP.$cljs$cst$506$height$$), $img_src$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28409_map__28388_map__28388__$1_props__21778__auto__$jscomp$35_vec__28385$$, 
  $APP.$cljs$cst$523$img_src$$), $caption$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28409_map__28388_map__28388__$1_props__21778__auto__$jscomp$35_vec__28385$$, $APP.$cljs$cst$525$caption$$), $credit$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28409_map__28388_map__28388__$1_props__21778__auto__$jscomp$35_vec__28385$$, $APP.$cljs$cst$526$credit$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28409_map__28388_map__28388__$1_props__21778__auto__$jscomp$35_vec__28385$$, $cljs$cst$552$other$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28409_map__28388_map__28388__$1_props__21778__auto__$jscomp$35_vec__28385$$, $APP.$cljs$cst$196$key$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28409_map__28388_map__28388__$1_props__21778__auto__$jscomp$35_vec__28385$$, $APP.$cljs$cst$553$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $trigger_ref$$ = $APP.$helix$hooks$use_ref$$("trigger-ref"), $target_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("target-ref");
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($trigger_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$485$target$$, $target_ref$jscomp$1$$, $APP.$cljs$cst$486$initial$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$481$y$$, 100, $APP.$cljs$cst$524$opacity$$, 0], null), $APP.$cljs$cst$487$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
  3, [$APP.$cljs$cst$481$y$$, 0, $APP.$cljs$cst$524$opacity$$, 1, $APP.$cljs$cst$479$duration$$, 0.25], null), $APP.$cljs$cst$488$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$481$y$$, 100, $APP.$cljs$cst$524$opacity$$, 0, $APP.$cljs$cst$479$duration$$, 0.125], null)], null)]));
  $G__28409_map__28388_map__28388__$1_props__21778__auto__$jscomp$35_vec__28385$$ = function() {
    return {ref:$trigger_ref$$, style:{width:$APP.$helix$impl$props$__GT_js$$($width$jscomp$34$$), height:$APP.$helix$impl$props$__GT_js$$($height$jscomp$31$$)}, className:"relative\n                    bg-white/10\n                    overflow-hidden", children:[function() {
      var $G__28424$$ = {"img-src":$img_src$jscomp$5$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$image_layer$$, $G__28424$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$image_layer$$, $G__28424$$);
    }(), $APP.$cljs$core$truth_$$($caption$jscomp$2$$) ? function() {
      var $G__28435$$ = {"target-ref":$target_ref$jscomp$1$$, caption:$caption$jscomp$2$$, credit:$credit$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$caption_layer$$, $G__28435$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$caption_layer$$, $G__28435$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28409_map__28388_map__28388__$1_props__21778__auto__$jscomp$35_vec__28385$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28409_map__28388_map__28388__$1_props__21778__auto__$jscomp$35_vec__28385$$);
};
$amp$components$elements$lazy_image_gallery$lazy_image_gallery$$ = function($G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$, $G__28525_28570_maybe_ref__21780__auto__$jscomp$36$$) {
  $G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$), $G__28525_28570_maybe_ref__21780__auto__$jscomp$36$$], null);
  $G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$, 0, null);
  $G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$ = $APP.$cljs$core$__destructure_map$$($G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$);
  var $images$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$, $cljs$cst$554$images$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$, $APP.$cljs$cst$535$is_visible_QMARK_$$);
  $G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$, $cljs$cst$555$image_gallery_container_ref$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$5$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $gallery_dimensions$$ = $APP.$amp$hooks$use_container_size$use_container_size$$($G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$);
  $G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$ = $APP.$helix$hooks$use_state$$($amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$(8, 200));
  var $masonary_grid_slots$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$, 0, null), $set_masonary_grid_slots$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$, 1, null);
  $G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $G__28530$$ = $amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$($APP.$cljs$cst$505$width$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$), $APP.$cljs$cst$506$height$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$));
    return $set_masonary_grid_slots$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_masonary_grid_slots$$.$cljs$core$IFn$_invoke$arity$1$($G__28530$$) : $set_masonary_grid_slots$$.call(null, $G__28530$$);
  });
  $G__28525_28570_maybe_ref__21780__auto__$jscomp$36$$ = [$APP.$cljs$cst$505$width$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$), $APP.$cljs$cst$506$height$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$)];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$, $G__28525_28570_maybe_ref__21780__auto__$jscomp$36$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$, 
  $G__28525_28570_maybe_ref__21780__auto__$jscomp$36$$);
  $G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$ = function() {
    return {ref:$outer_ctx$jscomp$5$$, className:"overflow-hidden h-full", children:function() {
      var $G__28544$$ = function() {
        return {className:"columns-3\n                               gap-0\n                               h-full", style:{backgroundImage:$APP.$helix$impl$props$__GT_js$$("repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.1) 4px, rgba(255,255,255,0.1) 5px)")}, children:$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($idx$jscomp$60$$, $dimensions$jscomp$9_height$jscomp$32$$) {
          var $G__28558_caption$jscomp$3_map__28550$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($images$$, $cljs$core$rand_int$$($APP.$cljs$core$count$$($images$$))), $credit$jscomp$3_map__28550__$1$$ = $APP.$cljs$core$__destructure_map$$($G__28558_caption$jscomp$3_map__28550$$), $sized_image_src_src$jscomp$36$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$3_map__28550__$1$$, $APP.$cljs$cst$515$src$$);
          $G__28558_caption$jscomp$3_map__28550$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$3_map__28550__$1$$, $APP.$cljs$cst$525$caption$$);
          $credit$jscomp$3_map__28550__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$3_map__28550__$1$$, $APP.$cljs$cst$526$credit$$);
          var $aspect_ratio$jscomp$5$$ = $APP.$cljs$cst$532$aspect_ratio$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$meta$$($dimensions$jscomp$9_height$jscomp$32$$)), $closest_height_closest_match$$ = $amp$components$elements$lazy_image_gallery$find_closest_size$$($APP.$cljs$core$first$$($dimensions$jscomp$9_height$jscomp$32$$), $APP.$cljs$core$second$$($dimensions$jscomp$9_height$jscomp$32$$)), $width$jscomp$35$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$9_height$jscomp$32$$, 
          0, null);
          $dimensions$jscomp$9_height$jscomp$32$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$9_height$jscomp$32$$, 1, null);
          var $closest_width$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($closest_height_closest_match$$, 0, null);
          $closest_height_closest_match$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($closest_height_closest_match$$, 1, null);
          $sized_image_src_src$jscomp$36$$ = [$APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($sized_image_src_src$jscomp$36$$), "?w\x3d", $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($closest_width$$), "\x26h\x3d", $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($closest_height_closest_match$$), "\x26fit\x3dcrop\x26auto\x3dformat,compress\x26crop\x3dfaces,edges"].join("");
          $G__28558_caption$jscomp$3_map__28550$$ = {width:$width$jscomp$35$$, height:$dimensions$jscomp$9_height$jscomp$32$$, "img-src":$sized_image_src_src$jscomp$36$$, caption:$G__28558_caption$jscomp$3_map__28550$$, credit:$credit$jscomp$3_map__28550__$1$$, other:$APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($aspect_ratio$jscomp$5$$), idx:$idx$jscomp$60$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$lazy_image_gallery$image_card$$, $G__28558_caption$jscomp$3_map__28550$$, $idx$jscomp$60$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$image_card$$, $G__28558_caption$jscomp$3_map__28550$$, $idx$jscomp$60$$);
        }, $masonary_grid_slots$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28544$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28544$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__28524_28569_G__28538_image_gallery_container_ref_map__28506_map__28506__$1_props__21778__auto__$jscomp$36_vec__28503_vec__28517$$);
};
$amp$components$sections$about_biennale$title$$ = function($G__28656_props__21778__auto__$jscomp$37$$) {
  $APP.$helix$core$extract_cljs_props$$($G__28656_props__21778__auto__$jscomp$37$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__28656_props__21778__auto__$jscomp$37$$ = function() {
    return {className:"lg:flex\n                  w-full\n                  lg:h-2/5\n                  z-20\n                  items-center\n                  justify-between\n                  bg-black/10\n                  lg:p-12 p-4\n                  lg:text-6xl text-3xl\n                  font-futura\n                  font-bold\n                  text-slate-800", children:[function() {
      var $G__28665$$ = function() {
        return {className:"flex flex-col", children:[function() {
          var $G__28669$$ = {className:"", children:"venice"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28669$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28669$$);
        }(), function() {
          var $G__28716$$ = {className:"", children:"biennale"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28716$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28716$$);
        }(), function() {
          var $G__28731$$ = {className:"", children:"2026"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28731$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28731$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28665$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28665$$);
    }(), function() {
      var $G__28737$$ = function() {
        return {className:"flex\n                         flex-col\n                         font-futura\n                         font-bold\n                         lg:text-right\n                         italic\n                         text-white/60", children:[function() {
          var $G__28746$$ = {className:"", children:"in"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28746$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28746$$);
        }(), function() {
          var $G__28758$$ = {className:"", children:"minor"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28758$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28758$$);
        }(), function() {
          var $G__28762$$ = {className:"", children:"keys"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28762$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28762$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28737$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28737$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28656_props__21778__auto__$jscomp$37$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28656_props__21778__auto__$jscomp$37$$);
};
$amp$components$sections$about_biennale$copy_block$$ = function($G__28847_map__28816_map__28816__$1_props__21778__auto__$jscomp$38_vec__28813$$, $maybe_ref__21780__auto__$jscomp$38$$) {
  $G__28847_map__28816_map__28816__$1_props__21778__auto__$jscomp$38_vec__28813$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28847_map__28816_map__28816__$1_props__21778__auto__$jscomp$38_vec__28813$$), $maybe_ref__21780__auto__$jscomp$38$$], null);
  $G__28847_map__28816_map__28816__$1_props__21778__auto__$jscomp$38_vec__28813$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28847_map__28816_map__28816__$1_props__21778__auto__$jscomp$38_vec__28813$$, 0, null);
  $G__28847_map__28816_map__28816__$1_props__21778__auto__$jscomp$38_vec__28813$$ = $APP.$cljs$core$__destructure_map$$($G__28847_map__28816_map__28816__$1_props__21778__auto__$jscomp$38_vec__28813$$);
  var $title$jscomp$15$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28847_map__28816_map__28816__$1_props__21778__auto__$jscomp$38_vec__28813$$, $APP.$cljs$cst$463$title$$), $copy$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28847_map__28816_map__28816__$1_props__21778__auto__$jscomp$38_vec__28813$$, $cljs$cst$556$copy$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__28847_map__28816_map__28816__$1_props__21778__auto__$jscomp$38_vec__28813$$ = function() {
    return {className:"flex flex-col mb-12 font-futura", children:[function() {
      var $G__28902$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:$title$jscomp$15$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28902$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28902$$);
    }(), function() {
      var $G__28913$$ = {className:"text-slate-800", children:$copy$jscomp$1$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28913$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28913$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28847_map__28816_map__28816__$1_props__21778__auto__$jscomp$38_vec__28813$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28847_map__28816_map__28816__$1_props__21778__auto__$jscomp$38_vec__28813$$);
};
$amp$components$sections$about_biennale$about_biennale_section$$ = function($G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$, $maybe_ref__21780__auto__$jscomp$39$$) {
  $G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$), $maybe_ref__21780__auto__$jscomp$39$$], null);
  $G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$, 0, null);
  $G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$ = $APP.$cljs$core$__destructure_map$$($G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$, $APP.$cljs$cst$534$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$, $APP.$cljs$cst$535$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$, $APP.$cljs$cst$536$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$6$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$6$$);
  var $visited_QMARK_$jscomp$7$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$, 1, null);
  $G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$about_biennale$images$$);
  var $images$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$, 1, null);
  var $image_gallery_container_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("image-gallery-container-ref"), $is_desktop_QMARK_$jscomp$2$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$ = function() {
    return {ref:$outer_ctx$jscomp$6$$, className:"h-full \n                        w-full\n                        flex\n                        pink-grad\n                        light-red-grad\n                        items-center\n                        justify-center\n                        font-futura\n                        relative", children:function() {
      var $G__28985$$ = function() {
        return {className:"flex \n                               flex-col\n                               overflow-hidden\n                               relative\n                               w-full md:w-10/12 lg:w-full\n                               lg:p-12 p-4", children:[function() {
          var $G__28992$$ = {};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$title$$, $G__28992$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$title$$, $G__28992$$);
        }(), function() {
          var $G__28994$$ = function() {
            return {className:"flex overflow-hidden relative", children:[function() {
              var $G__28998$$ = function() {
                return {className:"lg:w-1/2 \n                                             lg:p-16 p-4", children:[function() {
                  var $G__29002$$ = {title:"the biennale", copy:"The Venice Biennale is the most prestigious platform for contemporary art in the world—the cultural equivalent of the Olympics.  Every two years, nations convene in the Giardini and Arsenale to present the best of their artists.  The 61st International Art Exhibition will run from May 9 to November 22 2026 and, following the unexpected passing of curator Koyo Kouoh, will be realized exactly as she conceived it."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$copy_block$$, $G__29002$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$copy_block$$, $G__29002$$);
                }(), function() {
                  var $G__29006$$ = {title:"The theme: In Minor Keys", copy:"Kouoh’s vision invites us to slow down and listen to the “frequencies of the minor keys,” the quiet tones and lower frequencies that often get lost amid today’s chaos .  In her curatorial text, she describes the minor key as a metaphor for small islands and intimate oases—gardens, courtyards, dance floors—where artists cultivate rich social and ecological worlds .  Rather than celebrating spectacle, the exhibition tunes into “the persistent signals of earth and life,” foregrounding sensory, affective experiences .  As Kouoh’s team notes, “In minor keys are sequences of exhilarating journeys that address the sensate and the affective, inviting visitors to marvel, meditate, dream, revel, reflect and commune in realms where time is not corporate property nor at the mercy of relentlessly accelerated productivity” ."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$copy_block$$, $G__29006$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$copy_block$$, $G__29006$$);
                }(), function() {
                  var $G__29010$$ = {title:"Why this matters to Armenians", copy:"Armenia’s cultural memory is one of quiet endurance, repetition and devotion.  From stone‑carved khachkars to endless rows of hand‑woven carpets, Armenian art has always been a labour of patience and persistence.  Kouoh’s vision of the Biennale as an archipelago of “minor keys” resonates deeply with this ethos.  It is about valuing the handmade over the manufactured, the intimate gesture over the headline‑grabbing spectacle—precisely what Zadik Zadikian will embody in The Studio."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$copy_block$$, $G__29010$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$copy_block$$, $G__29010$$);
                }(), function() {
                  var $G__29014$$ = {className:"", children:"By bringing an Armenian “island” to Venice, we affirm that our heritage belongs on the world’s biggest stage not because it shouts the loudest, but because it teaches the world how to listen.  Supporting the Armenia Pavilion is more than funding an exhibition; it is enabling a sanctuary of slow, deliberate creativity—an oasis of dignity and resilience—within a global conversation on art’s future."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29014$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__29014$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28998$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28998$$);
            }(), $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$2$$) ? $visited_QMARK_$jscomp$7$$ : $is_desktop_QMARK_$jscomp$2$$) ? function() {
              var $G__29018_G__29026$jscomp$inline_3658_G__29030$jscomp$inline_3659_JSCompiler_inline_result$jscomp$inline_3657$$ = {images:$images$jscomp$1$$, "image-gallery-container-ref":$image_gallery_container_ref$jscomp$1$$};
              $G__29018_G__29026$jscomp$inline_3658_G__29030$jscomp$inline_3659_JSCompiler_inline_result$jscomp$inline_3657$$ = {className:"absolute h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $G__29018_G__29026$jscomp$inline_3658_G__29030$jscomp$inline_3659_JSCompiler_inline_result$jscomp$inline_3657$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, 
              $G__29018_G__29026$jscomp$inline_3658_G__29030$jscomp$inline_3659_JSCompiler_inline_result$jscomp$inline_3657$$)};
              $G__29018_G__29026$jscomp$inline_3658_G__29030$jscomp$inline_3659_JSCompiler_inline_result$jscomp$inline_3657$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29018_G__29026$jscomp$inline_3658_G__29030$jscomp$inline_3659_JSCompiler_inline_result$jscomp$inline_3657$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29018_G__29026$jscomp$inline_3658_G__29030$jscomp$inline_3659_JSCompiler_inline_result$jscomp$inline_3657$$);
              $G__29018_G__29026$jscomp$inline_3658_G__29030$jscomp$inline_3659_JSCompiler_inline_result$jscomp$inline_3657$$ = {ref:$image_gallery_container_ref$jscomp$1$$, className:"ml-8\n                                               w-7/12\n                                               relative\n                                               overflow-hidden", children:$G__29018_G__29026$jscomp$inline_3658_G__29030$jscomp$inline_3659_JSCompiler_inline_result$jscomp$inline_3657$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29018_G__29026$jscomp$inline_3658_G__29030$jscomp$inline_3659_JSCompiler_inline_result$jscomp$inline_3657$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29018_G__29026$jscomp$inline_3658_G__29030$jscomp$inline_3659_JSCompiler_inline_result$jscomp$inline_3657$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28994$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28994$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28985$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28985$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__28981_map__28961_map__28961__$1_props__21778__auto__$jscomp$39_vec__28958_vec__28968_vec__28971$$);
};
$amp$components$writing_card$writing_card$$ = function($G__28259_map__28250_map__28250__$1_props__21778__auto__$jscomp$40_vec__28247$$, $maybe_ref__21780__auto__$jscomp$40$$) {
  $G__28259_map__28250_map__28250__$1_props__21778__auto__$jscomp$40_vec__28247$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28259_map__28250_map__28250__$1_props__21778__auto__$jscomp$40_vec__28247$$), $maybe_ref__21780__auto__$jscomp$40$$], null);
  $G__28259_map__28250_map__28250__$1_props__21778__auto__$jscomp$40_vec__28247$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28259_map__28250_map__28250__$1_props__21778__auto__$jscomp$40_vec__28247$$, 0, null);
  $G__28259_map__28250_map__28250__$1_props__21778__auto__$jscomp$40_vec__28247$$ = $APP.$cljs$core$__destructure_map$$($G__28259_map__28250_map__28250__$1_props__21778__auto__$jscomp$40_vec__28247$$);
  var $children$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28259_map__28250_map__28250__$1_props__21778__auto__$jscomp$40_vec__28247$$, $APP.$cljs$cst$198$children$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$7$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__28259_map__28250_map__28250__$1_props__21778__auto__$jscomp$40_vec__28247$$ = function() {
    return {id:"hero", ref:$outer_ctx$jscomp$7$$, className:"absolute\n                    pointer-events-none\n                    h-screen\n                    w-screen\n                    overflow-hidden", children:function() {
      var $G__28269$$ = function() {
        return {className:"h-full\n                           w-full\n                           relative \n                           flex items-center\n                           justify-items-center justify-center", children:function() {
          var $G__28274$$ = function() {
            return {className:"z-20 absolute w-full h-full", children:[function() {
              var $G__28278$$ = {className:"w-full h-full absolute opacity-30"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28278$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28278$$);
            }(), function() {
              var $G__28284$$ = {"section-id":"main-quote", from:new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$524$opacity$$, 0, $APP.$cljs$cst$479$duration$$, 0.5, $APP.$cljs$cst$483$ease$$, "expo.inOut", $cljs$cst$557$stagger$$, 0.02], null), children:$children$jscomp$18$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$quote_section$quote_section$$, $G__28284$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$quote_section$quote_section$$, $G__28284$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28274$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28274$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28269$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28269$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28259_map__28250_map__28250__$1_props__21778__auto__$jscomp$40_vec__28247$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28259_map__28250_map__28250__$1_props__21778__auto__$jscomp$40_vec__28247$$);
};
$amp$components$sections$mobile_hero_section$mobile_hero_section$$ = function($G__28583_props__21778__auto__$jscomp$41_vec__28576_vec__28579$$) {
  $APP.$helix$core$extract_cljs_props$$($G__28583_props__21778__auto__$jscomp$41_vec__28576_vec__28579$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__28583_props__21778__auto__$jscomp$41_vec__28576_vec__28579$$ = $APP.$amp$providers$main_provider$use_main_state$$();
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28583_props__21778__auto__$jscomp$41_vec__28576_vec__28579$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28583_props__21778__auto__$jscomp$41_vec__28576_vec__28579$$, 1, null);
  var $outer_ctx$jscomp$8$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__28583_props__21778__auto__$jscomp$41_vec__28576_vec__28579$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ctx$jscomp$8$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$472$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28583_props__21778__auto__$jscomp$41_vec__28576_vec__28579$$, 0, null);
  var $is_active_QMARK_$jscomp$10$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28583_props__21778__auto__$jscomp$41_vec__28576_vec__28579$$, 1, null);
  $G__28583_props__21778__auto__$jscomp$41_vec__28576_vec__28579$$ = function() {
    return {id:"video", ref:$outer_ctx$jscomp$8$$, className:"relative\n                    h-full\n                    w-full\n                    \n                    overflow-hidden", children:function() {
      var $G__28592$$ = function() {
        return {className:"w-screen h-screen \n                           flex\n                           flex-col\n                           relative \n                           flex items-center justify-items-center justify-center", children:[function() {
          var $G__28599$$ = function() {
            return {className:"absolute\n                                  h-screen\n                                  w-screen", children:[function() {
              var $G__28607$$ = {children:$is_active_QMARK_$jscomp$10$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28607$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28607$$);
            }(), function() {
              var $G__28616$$ = {"playback-id":"fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo", "should-play?":$is_active_QMARK_$jscomp$10$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$mobile_hero_section$lazy_video_background$$, $G__28616$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$mobile_hero_section$lazy_video_background$$, $G__28616$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28599$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28599$$);
        }(), function() {
          var $G__28620$$ = function() {
            return {className:"absolute deep-yellow opacity-70 w-3/4 p-4", children:function() {
              var $G__28625$$ = function() {
                return {className:"font-futura", children:[function() {
                  var $G__28629$$ = {className:"text-5xl font-bold", children:"venice biennale 2026 Armenia Pavilion"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28629$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28629$$);
                }(), function() {
                  var $G__28633_G__28638$jscomp$inline_3309$$ = {className:"font-bold uppercase", children:"The Studio"};
                  $G__28633_G__28638$jscomp$inline_3309$$ = {className:"text-4xl mt-4 italic", children:["Be a Patron of ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__28633_G__28638$jscomp$inline_3309$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__28633_G__28638$jscomp$inline_3309$$)]};
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28633_G__28638$jscomp$inline_3309$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__28633_G__28638$jscomp$inline_3309$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28625$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28625$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28620$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28620$$);
        }(), function() {
          var $G__28643$$ = function() {
            return {className:"absolute bottom-0 pb-4", children:function() {
              var $G__28647$$ = function() {
                return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
                  return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                }};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__28647$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__28647$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28643$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28643$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28592$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28592$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28583_props__21778__auto__$jscomp$41_vec__28576_vec__28579$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28583_props__21778__auto__$jscomp$41_vec__28576_vec__28579$$);
};
$amp$components$sections$non_profit$title$$ = function($G__28590_G__28601$jscomp$inline_3662_G__28611$jscomp$inline_3663_props__21778__auto__$jscomp$42$$) {
  $APP.$helix$core$extract_cljs_props$$($G__28590_G__28601$jscomp$inline_3662_G__28611$jscomp$inline_3663_props__21778__auto__$jscomp$42$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__28590_G__28601$jscomp$inline_3662_G__28611$jscomp$inline_3663_props__21778__auto__$jscomp$42$$ = {className:"w-1", children:"support the Armenia Pavilion"};
  $G__28590_G__28601$jscomp$inline_3662_G__28611$jscomp$inline_3663_props__21778__auto__$jscomp$42$$ = {className:"flex flex-col", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28590_G__28601$jscomp$inline_3662_G__28611$jscomp$inline_3663_props__21778__auto__$jscomp$42$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28590_G__28601$jscomp$inline_3662_G__28611$jscomp$inline_3663_props__21778__auto__$jscomp$42$$)};
  $G__28590_G__28601$jscomp$inline_3662_G__28611$jscomp$inline_3663_props__21778__auto__$jscomp$42$$ = {className:"lg:flex\n                    w-full\n                    lg:h-2/5\n                    z-20\n                    items-center\n                    justify-between\n                    bg-black/10\n                    lg:p-12 p-4\n                    lg:text-6xl text-3xl\n                    font-futura\n                    font-bold\n                    text-slate-800", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? 
  $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28590_G__28601$jscomp$inline_3662_G__28611$jscomp$inline_3663_props__21778__auto__$jscomp$42$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28590_G__28601$jscomp$inline_3662_G__28611$jscomp$inline_3663_props__21778__auto__$jscomp$42$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28590_G__28601$jscomp$inline_3662_G__28611$jscomp$inline_3663_props__21778__auto__$jscomp$42$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28590_G__28601$jscomp$inline_3662_G__28611$jscomp$inline_3663_props__21778__auto__$jscomp$42$$);
};
$amp$components$sections$non_profit$copy_block$$ = function($G__28675_map__28660_map__28660__$1_props__21778__auto__$jscomp$43_vec__28657$$, $maybe_ref__21780__auto__$jscomp$43$$) {
  $G__28675_map__28660_map__28660__$1_props__21778__auto__$jscomp$43_vec__28657$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28675_map__28660_map__28660__$1_props__21778__auto__$jscomp$43_vec__28657$$), $maybe_ref__21780__auto__$jscomp$43$$], null);
  $G__28675_map__28660_map__28660__$1_props__21778__auto__$jscomp$43_vec__28657$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28675_map__28660_map__28660__$1_props__21778__auto__$jscomp$43_vec__28657$$, 0, null);
  $G__28675_map__28660_map__28660__$1_props__21778__auto__$jscomp$43_vec__28657$$ = $APP.$cljs$core$__destructure_map$$($G__28675_map__28660_map__28660__$1_props__21778__auto__$jscomp$43_vec__28657$$);
  var $title$jscomp$16$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28675_map__28660_map__28660__$1_props__21778__auto__$jscomp$43_vec__28657$$, $APP.$cljs$cst$463$title$$), $copy$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28675_map__28660_map__28660__$1_props__21778__auto__$jscomp$43_vec__28657$$, $cljs$cst$556$copy$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__28675_map__28660_map__28660__$1_props__21778__auto__$jscomp$43_vec__28657$$ = function() {
    return {className:"flex flex-col mb-12 font-futura", children:[function() {
      var $G__28680$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:$title$jscomp$16$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28680$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28680$$);
    }(), function() {
      var $G__28714$$ = {className:"text-slate-800", children:$copy$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28714$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28714$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28675_map__28660_map__28660__$1_props__21778__auto__$jscomp$43_vec__28657$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28675_map__28660_map__28660__$1_props__21778__auto__$jscomp$43_vec__28657$$);
};
$amp$components$sections$non_profit$non_profit_section$$ = function($G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$, $maybe_ref__21780__auto__$jscomp$44$$) {
  $G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$), $maybe_ref__21780__auto__$jscomp$44$$], null);
  $G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$, 0, null);
  $G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$ = $APP.$cljs$core$__destructure_map$$($G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$, $APP.$cljs$cst$534$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$, $APP.$cljs$cst$535$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$, $APP.$cljs$cst$536$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$9$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$9$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$, 1, null);
  $G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$non_profit$images$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$, 1, null);
  $APP.$helix$hooks$use_ref$$("image-gallery-container-ref");
  $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$ = function() {
    return {ref:$outer_ctx$jscomp$9$$, className:"h-full \n                          w-full\n                          flex\n                          blue-purple-grad\n                          light-red-grad\n                          items-center\n                          justify-center\n                          font-futura\n                          relative", children:function() {
      var $G__28853$$ = function() {
        return {className:"flex \n                                 flex-col\n                                 overflow-hidden\n                                 relative\n                                 w-full md:w-10/12 lg:w-full\n                                 lg:p-12 p-4", children:[function() {
          var $G__28861$$ = {};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$non_profit$title$$, $G__28861$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$non_profit$title$$, $G__28861$$);
        }(), function() {
          var $G__28863$$ = function() {
            return {className:"flex overflow-hidden relative", children:function() {
              var $G__28869$$ = function() {
                return {className:"lg:w-1/2 \n                                               lg:p-16 p-4", children:[function() {
                  var $G__28875$$ = {title:"", copy:"Funds go to keep THE STUDIO alive for six months in Venice.  Your support ensures the artist’s residency, covers materials and fabrication, pays our production crew, builds and ships the pavilion, and funds public programs and the exhibition catalogue.  Gifts are handled by Fallen Angels, a registered 501(c)(3) non‑profit; donations to a 501(c)(3) are tax‑deductible"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$non_profit$copy_block$$, $G__28875$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$non_profit$copy_block$$, $G__28875$$);
                }(), function() {
                  var $G__28882$$ = function() {
                    return {className:"flex flex-col mb-12 font-futura", children:[function() {
                      var $G__28886$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:"What Your Donation Funds"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28886$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28886$$);
                    }(), function() {
                      var $G__28894$$ = function() {
                        return {className:"list-disc list-outside ml-5 text-slate-800", children:[function() {
                          var $G__28900$$ = {children:"Artist \x26 team residency in Venice"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__28900$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__28900$$);
                        }(), function() {
                          var $G__28909$$ = {children:"Fabrication materials and modular blocks"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__28909$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__28909$$);
                        }(), function() {
                          var $G__28917$$ = {children:"Production crew \x26 documentation (video, photography, editing)"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__28917$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__28917$$);
                        }(), function() {
                          var $G__28921$$ = {children:"Pavilion build‑out, shipping \x26 logistics"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__28921$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__28921$$);
                        }(), function() {
                          var $G__28926$$ = {children:"Public programs \x26 education"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__28926$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__28926$$);
                        }(), function() {
                          var $G__28931$$ = {children:"Archival filming \x26 catalogue"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__28931$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__28931$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ul", $G__28894$$) : $APP.$helix$core$jsxs$$.call(null, "ul", $G__28894$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28882$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28882$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28869$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28869$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28863$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28863$$);
        }(), function() {
          var $G__28935$$ = function() {
            return {className:"lg:absolute lg:bottom-[40px] lg:left-1/2 lg:-translate-x-1/2", children:function() {
              var $G__28939$$ = function() {
                return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
                  return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                }};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__28939$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__28939$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28935$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28935$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28853$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28853$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__28843_map__28820_map__28820__$1_props__21778__auto__$jscomp$44_vec__28817_vec__28832_vec__28835$$);
};
$amp$components$sections$team_section$team_member_card$$ = function($G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$, $data$jscomp$133_maybe_ref__21780__auto__$jscomp$45$$) {
  $G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$), $data$jscomp$133_maybe_ref__21780__auto__$jscomp$45$$], null);
  $G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$, 0, null);
  $G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$ = $APP.$cljs$core$__destructure_map$$($G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$);
  $data$jscomp$133_maybe_ref__21780__auto__$jscomp$45$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$, $APP.$cljs$cst$142$data$$);
  var $images$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$, $cljs$cst$554$images$$), $flash_images_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$, $cljs$cst$561$flash_images_handler$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$ = $APP.$cljs$core$__destructure_map$$($data$jscomp$133_maybe_ref__21780__auto__$jscomp$45$$);
  var $name$jscomp$184$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$, $APP.$cljs$cst$282$name$$), $role$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$, $APP.$cljs$cst$558$role$$), $copy$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$, 
  $cljs$cst$556$copy$$), $social$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$, $cljs$cst$559$social$$), $email$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$, $cljs$cst$560$email$$);
  $G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$ = function() {
    return {className:"flex flex-col\n                    mb-16\n                    font-futura text-gray-800", children:[function() {
      var $G__28686$$ = function() {
        return {className:"relative inline-block\n                           z-30\n                           w-fit\n                           -mb-6", onMouseEnter:function() {
          return $flash_images_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $flash_images_handler$$.$cljs$core$IFn$_invoke$arity$1$($images$jscomp$3$$) : $flash_images_handler$$.call(null, $images$jscomp$3$$);
        }, children:[function() {
          var $G__28690$$ = {className:"absolute inset-y-1 inset-x-0\n                                  translate-x-2 translate-y-2\n                                  warm-yellow\n                                  pointer-events-none"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28690$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28690$$);
        }(), function() {
          var $G__28694$$ = {className:"relative z-10\n                                text-3xl whitespace-nowrap lg:text-2xl font-bold lowercase\n                                pointer-events-none", children:$name$jscomp$184$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28694$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28694$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28686$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28686$$);
    }(), function() {
      var $G__28699$$ = {className:"text-6xl lg:text-8xl font-bold lowercase\n                         z-20\n                         mb-4", children:$role$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28699$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28699$$);
    }(), function() {
      var $G__28704$$ = {className:"text-md text-gray-600", children:$copy$jscomp$3$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28704$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28704$$);
    }(), function() {
      var $G__28710$$ = {className:"my-4\n                          border-gray-900"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("hr", $G__28710$$) : $APP.$helix$core$jsx$$.call(null, "hr", $G__28710$$);
    }(), function() {
      var $G__28718$$ = {className:"text-md text-red-600", children:$social$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28718$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28718$$);
    }(), function() {
      var $G__28724$$ = {className:"text-md text-red-600", children:$email$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28724$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28724$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28682_map__28673_map__28673__$1_map__28678__$1_props__21778__auto__$jscomp$45_vec__28670$$);
};
$amp$components$sections$team_section$team_members$$ = function($G__28750_map__28744_map__28744__$1_props__21778__auto__$jscomp$46_vec__28741$$, $maybe_ref__21780__auto__$jscomp$46$$) {
  $G__28750_map__28744_map__28744__$1_props__21778__auto__$jscomp$46_vec__28741$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__28750_map__28744_map__28744__$1_props__21778__auto__$jscomp$46_vec__28741$$), $maybe_ref__21780__auto__$jscomp$46$$], null);
  $G__28750_map__28744_map__28744__$1_props__21778__auto__$jscomp$46_vec__28741$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__28750_map__28744_map__28744__$1_props__21778__auto__$jscomp$46_vec__28741$$, 0, null);
  $G__28750_map__28744_map__28744__$1_props__21778__auto__$jscomp$46_vec__28741$$ = $APP.$cljs$core$__destructure_map$$($G__28750_map__28744_map__28744__$1_props__21778__auto__$jscomp$46_vec__28741$$);
  var $flash_images_handler$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__28750_map__28744_map__28744__$1_props__21778__auto__$jscomp$46_vec__28741$$, $cljs$cst$561$flash_images_handler$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__28750_map__28744_map__28744__$1_props__21778__auto__$jscomp$46_vec__28741$$ = function() {
    return {className:"w-full\n                  flex flex-col\n                  items-center justify-center\n                  \n                  ", children:function() {
      var $G__28754$$ = function() {
        return {className:"items-center justify-center\n                         w-full md:w-10/12\n                         lg:pl-32 px-8 py-16", children:[function() {
          var $G__28798$$ = {data:$amp$components$sections$team_section$tony_card_data$$, images:$amp$components$sections$team_section$tony_images$$, "flash-images-handler":$flash_images_handler$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_member_card$$, $G__28798$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_member_card$$, $G__28798$$);
        }(), function() {
          var $G__28807$$ = {data:$amp$components$sections$team_section$tina_card_data$$, images:$amp$components$sections$team_section$tina_images$$, "flash-images-handler":$flash_images_handler$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_member_card$$, $G__28807$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_member_card$$, $G__28807$$);
        }(), function() {
          var $G__28841$$ = {data:$amp$components$sections$team_section$zadik_card_data$$, images:$amp$components$sections$team_section$zadik_images$$, "flash-images-handler":$flash_images_handler$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_member_card$$, $G__28841$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_member_card$$, $G__28841$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28754$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28754$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28750_map__28744_map__28744__$1_props__21778__auto__$jscomp$46_vec__28741$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28750_map__28744_map__28744__$1_props__21778__auto__$jscomp$46_vec__28741$$);
};
$amp$components$sections$team_section$team_section$$ = function($G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$, $maybe_ref__21780__auto__$jscomp$47$$) {
  $G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$), $maybe_ref__21780__auto__$jscomp$47$$], null);
  $G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$, 0, null);
  $G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$ = $APP.$cljs$core$__destructure_map$$($G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$, $APP.$cljs$cst$534$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$, $APP.$cljs$cst$535$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$, $APP.$cljs$cst$536$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$10$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$10$$);
  var $visited_QMARK_$jscomp$10$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$, 1, null);
  $G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$team_section$zadik_images$$);
  var $images$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$, 0, null), $set_images$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$, 1, null), $is_desktop_QMARK_$jscomp$4$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$(), $image_gallery_container_ref$jscomp$3$$ = 
  $APP.$helix$hooks$use_ref$$("image-gallery-container-ref");
  $G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$ = function() {
    return {ref:$outer_ctx$jscomp$10$$, className:"relative\n                        h-full w-full\n                        flex items-end justify-center\n                        pink-grad blue-light-grad", children:function() {
      var $G__29050$$ = function() {
        return {className:"relative\n                               flex\n                               overflow-hidden", children:[function() {
          var $G__29054_G__29058$jscomp$inline_3589$$ = {className:"overflow-hidden", style:{writingMode:$APP.$helix$impl$props$__GT_js$$("vertical-rl")}, children:"team.թիմ.équipe.equipo.squadra.team.թիմ.équipe.equipo.squadra.team"};
          $G__29054_G__29058$jscomp$inline_3589$$ = {className:"absolute left-0 top-0\n                                      font-futura font-bold text-8xl\n                                      light-blue-font-color\n                                      opacity-30", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__29054_G__29058$jscomp$inline_3589$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__29054_G__29058$jscomp$inline_3589$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29054_G__29058$jscomp$inline_3589$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29054_G__29058$jscomp$inline_3589$$);
        }(), function() {
          var $G__29064$$ = {"flash-images-handler":$set_images$jscomp$2$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_members$$, $G__29064$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_members$$, $G__29064$$);
        }(), $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$4$$) ? $visited_QMARK_$jscomp$10$$ : $is_desktop_QMARK_$jscomp$4$$) ? function() {
          var $G__29068_G__29072$jscomp$inline_3666_G__29076$jscomp$inline_3667_JSCompiler_inline_result$jscomp$inline_3665$$ = {images:$images$jscomp$4$$, "image-gallery-container-ref":$image_gallery_container_ref$jscomp$3$$};
          $G__29068_G__29072$jscomp$inline_3666_G__29076$jscomp$inline_3667_JSCompiler_inline_result$jscomp$inline_3665$$ = {className:"absolute h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $G__29068_G__29072$jscomp$inline_3666_G__29076$jscomp$inline_3667_JSCompiler_inline_result$jscomp$inline_3665$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, 
          $G__29068_G__29072$jscomp$inline_3666_G__29076$jscomp$inline_3667_JSCompiler_inline_result$jscomp$inline_3665$$)};
          $G__29068_G__29072$jscomp$inline_3666_G__29076$jscomp$inline_3667_JSCompiler_inline_result$jscomp$inline_3665$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29068_G__29072$jscomp$inline_3666_G__29076$jscomp$inline_3667_JSCompiler_inline_result$jscomp$inline_3665$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29068_G__29072$jscomp$inline_3666_G__29076$jscomp$inline_3667_JSCompiler_inline_result$jscomp$inline_3665$$);
          $G__29068_G__29072$jscomp$inline_3666_G__29076$jscomp$inline_3667_JSCompiler_inline_result$jscomp$inline_3665$$ = {ref:$image_gallery_container_ref$jscomp$3$$, className:"relative\n                                        w-8/12\n                                        ml-8\n                                        overflow-hidden", children:$G__29068_G__29072$jscomp$inline_3666_G__29076$jscomp$inline_3667_JSCompiler_inline_result$jscomp$inline_3665$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29068_G__29072$jscomp$inline_3666_G__29076$jscomp$inline_3667_JSCompiler_inline_result$jscomp$inline_3665$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29068_G__29072$jscomp$inline_3666_G__29076$jscomp$inline_3667_JSCompiler_inline_result$jscomp$inline_3665$$);
        }() : null]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29050$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29050$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__29046_map__29038_map__29038__$1_props__21778__auto__$jscomp$47_vec__29035_vec__29039_vec__29042$$);
};
$amp$components$sections$work_overview$work_overview$$ = function($G__28415_props__21778__auto__$jscomp$48$$) {
  $APP.$helix$core$extract_cljs_props$$($G__28415_props__21778__auto__$jscomp$48$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__28415_props__21778__auto__$jscomp$48$$ = function() {
    return {"section-id":"about-work", children:function() {
      var $G__28428$$ = function() {
        return {className:"flex\n               grey-grad\n                  justify-center\n                  items-center\n                  flex-col\n                  w-full", children:function() {
          var $G__28433$$ = function() {
            return {className:"text-slate-300\n                   font-light\n                   flex\n                   justify-center\n                   flex-col\n                   h-full\n                   py-8\n                   md:w-3/4 w-full\n                   p-8\n                   text-lg\n                   lg:text-2xl", children:[function() {
              var $G__28441$$ = {className:"mt-12\n                        mb-16\n                        font-bold\n                        font-futura\n                        text-5xl", children:"THE STUDIO"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28441$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28441$$);
            }(), function() {
              var $G__28446_G__28450$jscomp$inline_3320$$ = {className:"font-medium text-pink-600", children:":working-studio "};
              $G__28446_G__28450$jscomp$inline_3320$$ = {className:"mb-8", children:["For the full duration of the Biennale, the Armenia Pavilion becomes a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__28446_G__28450$jscomp$inline_3320$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__28446_G__28450$jscomp$inline_3320$$), "— Zadik Zadikian’s living laboratory, a site where form is made, unmade, and made again."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28446_G__28450$jscomp$inline_3320$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__28446_G__28450$jscomp$inline_3320$$);
            }(), function() {
              var $G__28454_G__28458$jscomp$inline_3323$$ = {className:"font-medium text-pink-600", children:":7–10 people"};
              $G__28454_G__28458$jscomp$inline_3323$$ = {className:"mb-8", children:["Each day, ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__28454_G__28458$jscomp$inline_3323$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__28454_G__28458$jscomp$inline_3323$$), " move through the space — assistants, fabricators, editors, camera crew — all part of a continuous organism of creation."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28454_G__28458$jscomp$inline_3323$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__28454_G__28458$jscomp$inline_3323$$);
            }(), function() {
              var $G__28463_G__28467$jscomp$inline_3326$$ = {className:"font-medium text-pink-600", children:":architecture-of-change"};
              $G__28463_G__28467$jscomp$inline_3326$$ = {className:"mb-8", children:["They produce thousands of modular units: lightweight foam forms hand-coated in thin plaster, each one a small gesture in a much larger ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__28463_G__28467$jscomp$inline_3326$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__28463_G__28467$jscomp$inline_3326$$), "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28463_G__28467$jscomp$inline_3326$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__28463_G__28467$jscomp$inline_3326$$);
            }(), function() {
              var $G__28471_G__28477$jscomp$inline_3329$$ = {className:"font-medium text-pink-600", children:"breath"};
              $G__28471_G__28477$jscomp$inline_3329$$ = {className:"mb-8", children:["These units are stacked into structures — walls, pyramids, horizons, interior architectures — shifting daily as fragile formations rise and dissolve like ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__28471_G__28477$jscomp$inline_3329$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__28471_G__28477$jscomp$inline_3329$$), "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28471_G__28477$jscomp$inline_3329$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__28471_G__28477$jscomp$inline_3329$$);
            }(), function() {
              var $G__28481_G__28485$jscomp$inline_3332$$ = {className:"font-medium text-pink-600", children:":The-artwork"};
              $G__28481_G__28485$jscomp$inline_3332$$ = {className:"mb-12 italic", children:["Nothing is static. Nothing is final. ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__28481_G__28485$jscomp$inline_3332$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__28481_G__28485$jscomp$inline_3332$$), " is the cycle itself — the rhythm of making, unmaking, and returning again to zero."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28481_G__28485$jscomp$inline_3332$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__28481_G__28485$jscomp$inline_3332$$);
            }(), function() {
              var $G__28489$$ = {className:"mb-8 italic", children:"In Minor Keys — The Philosophy of the Work"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28489$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28489$$);
            }(), function() {
              var $G__28493_G__28497$jscomp$inline_3335$$ = {className:"font-medium text-pink-600", children:":Structure"};
              $G__28493_G__28497$jscomp$inline_3335$$ = {className:"mb-8", children:["Here, repetition becomes a meditation. Labor becomes devotion. ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__28493_G__28497$jscomp$inline_3335$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__28493_G__28497$jscomp$inline_3335$$), " is only a temporary embodiment of an ongoing frequency."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28493_G__28497$jscomp$inline_3335$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__28493_G__28497$jscomp$inline_3335$$);
            }(), function() {
              var $G__28502_G__28510$jscomp$inline_3338$$ = {className:"font-medium text-pink-600", children:":organism"};
              $G__28502_G__28510$jscomp$inline_3338$$ = {className:"mb-8", children:["The studio behaves like an ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__28502_G__28510$jscomp$inline_3338$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__28502_G__28510$jscomp$inline_3338$$), " — sensitive, cyclical, and always in motion, responding to the theme of “In Minor Keys” through gestures rather than declarations."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28502_G__28510$jscomp$inline_3338$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__28502_G__28510$jscomp$inline_3338$$);
            }(), function() {
              var $G__28514_G__28521$jscomp$inline_3341$$ = {className:"font-medium text-pink-600", children:":quiet-resilience"};
              $G__28514_G__28521$jscomp$inline_3341$$ = {className:"mb-8", children:["The material language is intentionally light: foam, plaster, dust. Fragile materials meet fragile cycles — a nod to Armenian histories of endurance, where the act of repeating becomes a form of survival, a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__28514_G__28521$jscomp$inline_3341$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__28514_G__28521$jscomp$inline_3341$$), 
              "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28514_G__28521$jscomp$inline_3341$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__28514_G__28521$jscomp$inline_3341$$);
            }(), function() {
              var $G__28527$$ = {className:"mb-8", children:"Nothing here reaches for spectacle. The work moves in frequencies, not fireworks. What matters is the pulse — the rhythm of stacking, filming, dismantling, and returning again to the beginning."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28527$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__28527$$);
            }(), function() {
              var $G__28532_G__28536$jscomp$inline_3344$$ = {className:"font-medium text-pink-600", children:":score"};
              $G__28532_G__28536$jscomp$inline_3344$$ = {className:"mb-8", children:["This cycle functions like a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__28532_G__28536$jscomp$inline_3344$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__28532_G__28536$jscomp$inline_3344$$), ": a choreography of hands, blocks, dust, light. Each day, the studio composes itself anew, only to erase itself by night."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__28532_G__28536$jscomp$inline_3344$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__28532_G__28536$jscomp$inline_3344$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28433$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__28433$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__28428$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__28428$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__28415_props__21778__auto__$jscomp$48$$, "about-work") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__28415_props__21778__auto__$jscomp$48$$, "about-work");
};
$APP.$amp$views$landing_view$landing_view$$ = function($G__29161_props__21778__auto__$jscomp$49$$) {
  $APP.$helix$core$extract_cljs_props$$($G__29161_props__21778__auto__$jscomp$49$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $container_ref$$ = $APP.$helix$hooks$use_ref$$("container-ref"), $is_desktop_QMARK_$jscomp$5$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__29161_props__21778__auto__$jscomp$49$$ = function() {
    return {ref:$container_ref$$, className:"", children:[$APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$5$$) ? function() {
      var $G__29166$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$navs$logo_nav$logo_nav$$, $G__29166$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$navs$logo_nav$logo_nav$$, $G__29166$$);
    }() : null, function() {
      var $G__29181$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$navs$donation_nav$donation_nav$$, $G__29181$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$navs$donation_nav$donation_nav$$, $G__29181$$);
    }(), function() {
      var $G__29195_G__29205$jscomp$inline_3347$$ = {"total-sections":3};
      $G__29195_G__29205$jscomp$inline_3347$$ = {className:"fixed z-20 justify-center items-center top-1/2 -translate-y-1/2 left-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$navs$progress_menu$progress_menu$$, $G__29195_G__29205$jscomp$inline_3347$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$navs$progress_menu$progress_menu$$, $G__29195_G__29205$jscomp$inline_3347$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29195_G__29205$jscomp$inline_3347$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29195_G__29205$jscomp$inline_3347$$);
    }(), $APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$5$$) ? function() {
      var $G__29217$$ = function() {
        return {"section-id":"video", children:function() {
          var $G__29226$$ = function() {
            return {className:"w-screen h-screen relative", children:[function() {
              var $G__29230_G__29238$jscomp$inline_3350$$ = {"playback-id":"fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo"};
              $G__29230_G__29238$jscomp$inline_3350$$ = {className:"absolute w-full h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$video_section$video_section$$, $G__29230_G__29238$jscomp$inline_3350$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$video_section$video_section$$, $G__29230_G__29238$jscomp$inline_3350$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29230_G__29238$jscomp$inline_3350$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29230_G__29238$jscomp$inline_3350$$);
            }(), function() {
              var $G__29250_G__29258$jscomp$inline_3032$$ = {};
              $G__29250_G__29258$jscomp$inline_3032$$ = {className:"absolute w-full h-full pointer-events-none", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$playful_titles$playful_titles$$, $G__29250_G__29258$jscomp$inline_3032$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$playful_titles$playful_titles$$, $G__29250_G__29258$jscomp$inline_3032$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29250_G__29258$jscomp$inline_3032$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29250_G__29258$jscomp$inline_3032$$);
            }(), function() {
              var $G__29260$$ = function() {
                return {className:"absolute bottom-[40px] left-1/2 -translate-x-1/2", children:function() {
                  var $G__29264$$ = function() {
                    return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
                      return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                    }};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__29264$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__29264$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29260$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__29260$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29226$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29226$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__29217$$, "video") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__29217$$, "video");
    }() : function() {
      var $G__29280_G__29292$jscomp$inline_3035$$ = {};
      $G__29280_G__29292$jscomp$inline_3035$$ = {"section-id":"mobile-hero", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, $G__29280_G__29292$jscomp$inline_3035$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, $G__29280_G__29292$jscomp$inline_3035$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__29280_G__29292$jscomp$inline_3035$$, "mobile-hero") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__29280_G__29292$jscomp$inline_3035$$, "mobile-hero");
    }(), $APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$5$$) ? function() {
      var $G__29296_G__29305$jscomp$inline_3038$$ = {};
      $G__29296_G__29305$jscomp$inline_3038$$ = {"section-id":"hero", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$hero_header$hero_header$$, $G__29296_G__29305$jscomp$inline_3038$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$hero_header$hero_header$$, $G__29296_G__29305$jscomp$inline_3038$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__29296_G__29305$jscomp$inline_3038$$, "hero") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__29296_G__29305$jscomp$inline_3038$$, "hero");
    }() : null, function() {
      var $G__29314$$ = function() {
        return {"img-src":"https://atd-722658831.imgix.net/stacks/FileName_205932_001DenoisedBeauty_ViewLayer_012.tif", children:function() {
          var $G__29318$$ = function() {
            return {children:[function() {
              var $G__29322$$ = {children:"Rendering - "};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29322$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29322$$);
            }(), function() {
              var $G__29330$$ = {className:"italic font-bold", children:"THE ORANGE ONE"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29330$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29330$$);
            }(), function() {
              var $G__29336$$ = {children:" - © Zadik Zadikian 2026"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__29336$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__29336$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29318$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29318$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$views$hero_image_view$hero_image_view$$, $G__29314$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$views$hero_image_view$hero_image_view$$, $G__29314$$);
    }(), function() {
      var $G__29340$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$work_overview$work_overview$$, $G__29340$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$work_overview$work_overview$$, $G__29340$$);
    }(), function() {
      var $G__29342$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_section$$, $G__29342$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_section$$, $G__29342$$);
    }(), function() {
      var $G__29345$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$about_biennale_section$$, $G__29345$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$about_biennale_section$$, $G__29345$$);
    }(), function() {
      var $G__29351$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$non_profit$non_profit_section$$, $G__29351$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$non_profit$non_profit_section$$, $G__29351$$);
    }(), function() {
      var $G__29353$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$sections$contact_section$contact_section$$, $G__29353$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$sections$contact_section$contact_section$$, $G__29353$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__29161_props__21778__auto__$jscomp$49$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__29161_props__21778__auto__$jscomp$49$$);
};
$cljs$cst$554$images$$ = new $APP.$cljs$core$Keyword$$(null, "images", "images", 1757475080);
$cljs$cst$538$from$$ = new $APP.$cljs$core$Keyword$$(null, "from", "from", 1815293044);
$cljs$cst$546$on_click_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-click-handler", "on-click-handler", 746440723);
$cljs$cst$541$cta_title$$ = new $APP.$cljs$core$Keyword$$(null, "cta-title", "cta-title", -565700885);
$cljs$cst$555$image_gallery_container_ref$$ = new $APP.$cljs$core$Keyword$$(null, "image-gallery-container-ref", "image-gallery-container-ref", 984527810);
$cljs$cst$551$target_ref$$ = new $APP.$cljs$core$Keyword$$(null, "target-ref", "target-ref", -164384803);
$cljs$cst$549$writing$$ = new $APP.$cljs$core$Keyword$$(null, "writing", "writing", -1486865108);
$cljs$cst$557$stagger$$ = new $APP.$cljs$core$Keyword$$(null, "stagger", "stagger", -689791930);
$cljs$cst$561$flash_images_handler$$ = new $APP.$cljs$core$Keyword$$(null, "flash-images-handler", "flash-images-handler", -431066401);
$cljs$cst$552$other$$ = new $APP.$cljs$core$Keyword$$(null, "other", "other", 995793544);
$cljs$cst$548$on_mouse_out_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-mouse-out-handler", "on-mouse-out-handler", -2132576332);
$cljs$cst$547$on_mouse_over_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-mouse-over-handler", "on-mouse-over-handler", -1708524524);
$cljs$cst$550$click$$ = new $APP.$cljs$core$Keyword$$(null, "click", "click", 1912301393);
$cljs$cst$559$social$$ = new $APP.$cljs$core$Keyword$$(null, "social", "social", -1560314971);
$cljs$cst$537$quote$$ = new $APP.$cljs$core$Keyword$$(null, "quote", "quote", -262615245);
$cljs$cst$543$hover_title_ref$$ = new $APP.$cljs$core$Keyword$$(null, "hover-title-ref", "hover-title-ref", -819024146);
$cljs$cst$560$email$$ = new $APP.$cljs$core$Keyword$$(null, "email", "email", 1415816706);
$cljs$cst$539$to$$ = new $APP.$cljs$core$Keyword$$(null, "to", "to", 192099007);
$cljs$cst$545$is_playing_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "is-playing?", "is-playing?", -274112098);
$cljs$cst$556$copy$$ = new $APP.$cljs$core$Keyword$$(null, "copy", "copy", -1077617309);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("landing-view");
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$fragments$about_me$about_event$$, "", null, null) : (void 0).call(null, $amp$components$fragments$about_me$about_event$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$fragments$about_me$about_event$$, "amp.components.fragments.about-me/about-event"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$quote_section$quote_section$$, '(hooks/use-ref "outer-ctx")(hooks/use-ref "text-ref")(hooks/use-state (new (.-timeline gsap) {:paused true}))(use-scroll-trigger outer-ctx)(hooks/use-layout-effect [quote text-ref is-visible?] (let [splitter (when (clojure.core/deref text-ref) (new SplitText (clojure.core/deref text-ref) {:type "words,chars", :charsClass "playable-type-char"})) chars (when splitter (.-chars splitter)) ctx (.context gsap (fn [] (-\x3e tl (.from chars from-transition) (.to chars to-transition) (.timeScale 4))) outer-ctx)] (fn [] (.revert ctx))))(hooks/use-effect [is-active?] (when is-active? (.play tl)))', 
null, null) : (void 0).call(null, $amp$components$sections$quote_section$quote_section$$, '(hooks/use-ref "outer-ctx")(hooks/use-ref "text-ref")(hooks/use-state (new (.-timeline gsap) {:paused true}))(use-scroll-trigger outer-ctx)(hooks/use-layout-effect [quote text-ref is-visible?] (let [splitter (when (clojure.core/deref text-ref) (new SplitText (clojure.core/deref text-ref) {:type "words,chars", :charsClass "playable-type-char"})) chars (when splitter (.-chars splitter)) ctx (.context gsap (fn [] (-\x3e tl (.from chars from-transition) (.to chars to-transition) (.timeScale 4))) outer-ctx)] (fn [] (.revert ctx))))(hooks/use-effect [is-active?] (when is-active? (.play tl)))', 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$quote_section$quote_section$$, "amp.components.sections.quote-section/quote-section"));
var $amp$components$sections$video_section$lazy_video_background$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$components$elements$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$video_section$video_section$$, '(use-main-state)(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, 
null) : (void 0).call(null, $amp$components$sections$video_section$video_section$$, '(use-main-state)(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$video_section$video_section$$, "amp.components.sections.video-section/video-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$ui$lower_panel_cta$lower_panel_cta$$, "", null, null) : (void 0).call(null, $amp$components$ui$lower_panel_cta$lower_panel_cta$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$ui$lower_panel_cta$lower_panel_cta$$, "amp.components.ui.lower-panel-cta/lower-panel-cta"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$hero_header$hero_header$$, '(hooks/use-ref "outer-ctx")(use-scroll-to-id)(use-scroll-trigger outer-ctx {:end "bottom"})', null, null) : 
(void 0).call(null, $amp$components$hero_header$hero_header$$, '(hooks/use-ref "outer-ctx")(use-scroll-to-id)(use-scroll-trigger outer-ctx {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$hero_header$hero_header$$, "amp.components.hero-header/hero-header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$navs$donation_nav$donation_nav$$, '(hooks/use-ref "comp-ref")(use-touch-enabled)(use-window-size)(use-scroll-trigger comp-ref :start (fn [] (win-utils/height)) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y (- (:height dimensions))}, :is-on? is-active?})', 
null, null) : (void 0).call(null, $amp$components$navs$donation_nav$donation_nav$$, '(hooks/use-ref "comp-ref")(use-touch-enabled)(use-window-size)(use-scroll-trigger comp-ref :start (fn [] (win-utils/height)) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y (- (:height dimensions))}, :is-on? is-active?})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$navs$donation_nav$donation_nav$$, 
"amp.components.navs.donation-nav/donation-nav"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$navs$logo_nav$logo_nav$$, '(hooks/use-ref "comp-ref")(use-scroll-trigger comp-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y -250}, :is-on? is-active?})', 
null, null) : (void 0).call(null, $amp$components$navs$logo_nav$logo_nav$$, '(hooks/use-ref "comp-ref")(use-scroll-trigger comp-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y -250}, :is-on? is-active?})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$navs$logo_nav$logo_nav$$, 
"amp.components.navs.logo-nav/logo-nav"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$hover_title$hover_title$$, "", null, null) : (void 0).call(null, $amp$components$hover_title$hover_title$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$hover_title$hover_title$$, 
"amp.components.hover-title/hover-title"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$ui$playable_text$playable_text$$, '(hooks/use-ref "outer-ctx")(hooks/use-ref "background-ref")(hooks/use-ref "text-ref")(hooks/use-state (new (.-timeline gsap) {:paused true}))(hooks/use-layout-effect [text text-ref is-playing?] (let [splitter (when (clojure.core/deref text-ref) (new SplitText (clojure.core/deref text-ref) {:type "words,chars", :charsClass "playable-type-char"})) chars (when splitter (.-chars splitter)) ctx (.context gsap (fn [] (-\x3e tl (.from (clojure.core/deref background-ref) {:width "0", :duration 0.15, :ease "expo.inOut"}) (.to (clojure.core/deref background-ref) {:width "100%", :duration 0.15, :ease "expo.inOut"}) (.from chars {:opacity 0, :duration 0.15, :ease "expo.inOut", :stagger 0.025}) (.to chars {:opacity 1, :duration 0.15, :ease "expo.inOut", :stagger 0.025}))) outer-ctx)] (fn [] (.revert ctx))))(hooks/use-effect [is-playing?] (if is-playing? (.play tl) (.reverse tl)))', 
null, null) : (void 0).call(null, $amp$components$ui$playable_text$playable_text$$, '(hooks/use-ref "outer-ctx")(hooks/use-ref "background-ref")(hooks/use-ref "text-ref")(hooks/use-state (new (.-timeline gsap) {:paused true}))(hooks/use-layout-effect [text text-ref is-playing?] (let [splitter (when (clojure.core/deref text-ref) (new SplitText (clojure.core/deref text-ref) {:type "words,chars", :charsClass "playable-type-char"})) chars (when splitter (.-chars splitter)) ctx (.context gsap (fn [] (-\x3e tl (.from (clojure.core/deref background-ref) {:width "0", :duration 0.15, :ease "expo.inOut"}) (.to (clojure.core/deref background-ref) {:width "100%", :duration 0.15, :ease "expo.inOut"}) (.from chars {:opacity 0, :duration 0.15, :ease "expo.inOut", :stagger 0.025}) (.to chars {:opacity 1, :duration 0.15, :ease "expo.inOut", :stagger 0.025}))) outer-ctx)] (fn [] (.revert ctx))))(hooks/use-effect [is-playing?] (if is-playing? (.play tl) (.reverse tl)))', 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$ui$playable_text$playable_text$$, "amp.components.ui.playable-text/playable-text"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$nav_link$nav_link$$, '(hooks/use-ref "link-ref")(hooks/use-state false)', null, null) : (void 0).call(null, $amp$components$nav_link$nav_link$$, 
'(hooks/use-ref "link-ref")(hooks/use-state false)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$nav_link$nav_link$$, "amp.components.nav-link/nav-link"));
var $amp$components$playful_titles$titles$$ = new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["venice", "Venice is where everything begins again."], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["biennale", "Biennale means art alive, always becoming."], null), new $APP.$cljs$core$PersistentVector$$(null, 
2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["2026", "2026 marks our shift into becoming."], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["armenian", "Armenian means rhythm, grit, and quiet power."], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["pavilion", "A pavilion becomes a world in motion."], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$playful_titles$hero_menu$$, "", null, null) : (void 0).call(null, $amp$components$playful_titles$hero_menu$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$playful_titles$hero_menu$$, 
"amp.components.playful-titles/hero-menu"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$playful_titles$playful_titles$$, '(use-main-state)(hooks/use-ref "hover-title-ref")(hooks/use-state nil)(hooks/use-callback [hover-title-ref] (fn [{:keys [section-id]}] (set-current-section! section-id) (.to gsap (clojure.core/deref hover-title-ref) {:opacity 0.8, :duration 0.2})))(hooks/use-callback [hover-title-ref] (fn [] (.to gsap (clojure.core/deref hover-title-ref) {:opacity 0, :duration 0.2})))', 
null, null) : (void 0).call(null, $amp$components$playful_titles$playful_titles$$, '(use-main-state)(hooks/use-ref "hover-title-ref")(hooks/use-state nil)(hooks/use-callback [hover-title-ref] (fn [{:keys [section-id]}] (set-current-section! section-id) (.to gsap (clojure.core/deref hover-title-ref) {:opacity 0.8, :duration 0.2})))(hooks/use-callback [hover-title-ref] (fn [] (.to gsap (clojure.core/deref hover-title-ref) {:opacity 0, :duration 0.2})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$playful_titles$playful_titles$$, 
"amp.components.playful-titles/playful-titles"));
var $amp$components$elements$lazy_image_gallery$aspect_ratios$$ = new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [1, 16 / 9, 4 / 3, .75, .5625], null), $amp$components$elements$lazy_image_gallery$image_sizes$$ = $APP.$cljs$core$PersistentArrayMap$createAsIfByAssoc$$([1, new $APP.$cljs$core$PersistentVector$$(null, 10, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[200, 200], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [300, 300], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [400, 400], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [500, 500], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [600, 600], null), new $APP.$cljs$core$PersistentVector$$(null, 
2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [700, 700], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [800, 800], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [900, 900], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [1000, 1000], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[1200, 1200], null)], null), 16 / 9, new $APP.$cljs$core$PersistentVector$$(null, 10, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [320, 180], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [480, 270], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [640, 360], null), new $APP.$cljs$core$PersistentVector$$(null, 
2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [800, 450], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [960, 540], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [1120, 630], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [1280, 720], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[1440, 810], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [1600, 900], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [1920, 1080], null)], null), 4 / 3, new $APP.$cljs$core$PersistentVector$$(null, 10, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [320, 240], null), new $APP.$cljs$core$PersistentVector$$(null, 
2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [400, 300], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [480, 360], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [640, 480], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [800, 600], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[960, 720], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [1120, 840], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [1280, 960], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [1440, 1080], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [1600, 1200], null)], null), 
.75, new $APP.$cljs$core$PersistentVector$$(null, 10, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [240, 320], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [300, 400], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [360, 480], null), new $APP.$cljs$core$PersistentVector$$(null, 
2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [480, 640], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [600, 800], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [720, 960], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [840, 1120], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[960, 1280], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [1080, 1440], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [1200, 1600], null)], null), .5625, new $APP.$cljs$core$PersistentVector$$(null, 10, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [180, 320], null), new $APP.$cljs$core$PersistentVector$$(null, 
2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [270, 480], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [360, 640], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [450, 800], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [540, 960], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[630, 1120], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [720, 1280], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [810, 1440], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [900, 1600], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [1080, 1920], null)], null)]);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$lazy_image_gallery$image_layer$$, '(hooks/use-ref "base-ref")(hooks/use-ref "trans-ref")(hooks/use-state nil)(hooks/use-state nil)(hooks/use-layout-effect [img-src current-src] (when (not (\x3d current-src img-src)) (set-prev-src current-src)))', 
null, null) : (void 0).call(null, $amp$components$elements$lazy_image_gallery$image_layer$$, '(hooks/use-ref "base-ref")(hooks/use-ref "trans-ref")(hooks/use-state nil)(hooks/use-state nil)(hooks/use-layout-effect [img-src current-src] (when (not (\x3d current-src img-src)) (set-prev-src current-src)))', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$lazy_image_gallery$image_layer$$, "amp.components.elements.lazy-image-gallery/image-layer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$lazy_image_gallery$caption_layer$$, "", null, null) : (void 0).call(null, $amp$components$elements$lazy_image_gallery$caption_layer$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$lazy_image_gallery$caption_layer$$, "amp.components.elements.lazy-image-gallery/caption-layer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$lazy_image_gallery$image_card$$, '(hooks/use-ref "trigger-ref")(hooks/use-ref "target-ref")(use-hover-animations trigger-ref {:target target-ref, :initial {:y 100, :opacity 0}, :over {:y 0, :opacity 1, :duration 0.25}, :out {:y 100, :opacity 0, :duration 0.125}})', 
null, null) : (void 0).call(null, $amp$components$elements$lazy_image_gallery$image_card$$, '(hooks/use-ref "trigger-ref")(hooks/use-ref "target-ref")(use-hover-animations trigger-ref {:target target-ref, :initial {:y 100, :opacity 0}, :over {:y 0, :opacity 1, :duration 0.25}, :out {:y 100, :opacity 0, :duration 0.125}})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$lazy_image_gallery$image_card$$, "amp.components.elements.lazy-image-gallery/image-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, '(hooks/use-ref "outer-ctx")(use-container-size image-gallery-container-ref)(hooks/use-state (build-masonary-grid-slots 3 8 200))(hooks/use-layout-effect [(:width gallery-dimensions) (:height gallery-dimensions)] (set-masonary-grid-slots (build-masonary-grid-slots 3 (:width gallery-dimensions) (:height gallery-dimensions))))', 
null, null) : (void 0).call(null, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, '(hooks/use-ref "outer-ctx")(use-container-size image-gallery-container-ref)(hooks/use-state (build-masonary-grid-slots 3 8 200))(hooks/use-layout-effect [(:width gallery-dimensions) (:height gallery-dimensions)] (set-masonary-grid-slots (build-masonary-grid-slots 3 (:width gallery-dimensions) (:height gallery-dimensions))))', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, 
"amp.components.elements.lazy-image-gallery/lazy-image-gallery"));
var $amp$components$sections$about_biennale$images$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/biennale/metalocus_venice-biennale-corderie-arsenale-photo-giulio-squillacciotti_01.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/biennale/arsenale-venezia.jpg", 
$APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/biennale/6431873131_844b5c6d48_b-112659047.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/biennale/Edificio-E-delle-Sale-dArmi-sud-Arsenale-di-Venezia_01-406863818.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/biennale/GettyImages-1396739612-2882003488.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/biennale/arsenale-venezia-cosa-vedere-come-visitare-408454160.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/biennale/Pavilions-tours-plan.png", 
$APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/biennale/Pavilions-tours-plan.png", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/biennale/IMG_1754-scaled-1386547518.jpg", $APP.$cljs$cst$525$caption$$, null], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$about_biennale$title$$, "", null, null) : (void 0).call(null, $amp$components$sections$about_biennale$title$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$about_biennale$title$$, "amp.components.sections.about-biennale/title"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$about_biennale$copy_block$$, "", null, null) : (void 0).call(null, $amp$components$sections$about_biennale$copy_block$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$about_biennale$copy_block$$, "amp.components.sections.about-biennale/copy-block"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$about_biennale$about_biennale_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', 
null, null) : (void 0).call(null, $amp$components$sections$about_biennale$about_biennale_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$about_biennale$about_biennale_section$$, "amp.components.sections.about-biennale/about-biennale-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$writing_card$writing_card$$, '(hooks/use-ref "outer-ctx")', null, null) : (void 0).call(null, $amp$components$writing_card$writing_card$$, 
'(hooks/use-ref "outer-ctx")', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$writing_card$writing_card$$, "amp.components.writing-card/writing-card"));
var $amp$components$sections$mobile_hero_section$lazy_video_background$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$components$elements$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, '(use-main-state)(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', 
null, null) : (void 0).call(null, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, '(use-main-state)(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, "amp.components.sections.mobile-hero-section/mobile-hero-section"));
var $amp$components$sections$non_profit$images$$ = new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/biennale/metalocus_venice-biennale-corderie-arsenale-photo-giulio-squillacciotti_01.jpg", $APP.$cljs$cst$525$caption$$, "Arsenale", $APP.$cljs$cst$526$credit$$, "Artnews"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$515$src$$, 
"https://atd-722658831.imgix.net/biennale/arsenale-venezia.jpg", $APP.$cljs$cst$525$caption$$, "Arsenale", $APP.$cljs$cst$526$credit$$, "Artnews"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/biennale/6431873131_844b5c6d48_b-112659047.jpg", $APP.$cljs$cst$525$caption$$, "Arsenale", $APP.$cljs$cst$526$credit$$, "Artnews"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$title$$, "", null, null) : (void 0).call(null, $amp$components$sections$non_profit$title$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$title$$, 
"amp.components.sections.non-profit/title"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$copy_block$$, "", null, null) : (void 0).call(null, $amp$components$sections$non_profit$copy_block$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$copy_block$$, "amp.components.sections.non-profit/copy-block"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$non_profit_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', 
null, null) : (void 0).call(null, $amp$components$sections$non_profit$non_profit_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$non_profit_section$$, "amp.components.sections.non-profit/non-profit-section"));
var $amp$components$sections$team_section$zadik_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/zadik/shovel-nails.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/zadik/zz-portrait.tiff", $APP.$cljs$cst$525$caption$$, 
null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/zadik/single_stack_1970s.tif", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/zadik/golden_water_heater.tif", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-10.psd", 
$APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-76.psd", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/zadik/golden_kitchen.tif", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/2.webp", 
$APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/zadik/ps1_entrance_1.tif", 
$APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-18.psd", 
$APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/2.webp?fit\x3dcrop\x26w\x3d214\x26h\x3d172\x26dpr\x3d2\x26q\x3d50\x26auto\x3dformat%2Ccompress\x26cacheID\x3d1763536997", $APP.$cljs$cst$525$caption$$, null], null)], null), $amp$components$sections$team_section$tina_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 20, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/2.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$525$caption$$, null], null)], null), $amp$components$sections$team_section$tony_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 22, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", 
$APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, 
[$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, 
"https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$525$caption$$, 
null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$525$caption$$, null], null), 
new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, 
"https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", 
$APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, 
[$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$525$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$515$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", 
$APP.$cljs$cst$525$caption$$, null], null)], null), $amp$components$sections$team_section$tony_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$282$name$$, "Tony Shafrazi", $APP.$cljs$cst$558$role$$, "Curator", $cljs$cst$559$social$$, "@tonyshafrazi", $cljs$cst$560$email$$, "tony.shafrazi@armenianpavilion2026.org", $cljs$cst$556$copy$$, "Tony Shafrazi (b. 1943, Abadan, Iran) is a renowned art dealer, gallerist, and curator whose career has shaped the contemporary art world. Trained at the Royal College of Art in London, he moved to New York in 1969 and soon became closely associated with figures such as Andy Warhol, Roy Lichtenstein, and Leo Castelli. His early years were marked by bold artistic interventions, before establishing himself as one of the leading dealers of his generation.\n                      \n                      In 1979, he opened the Tony Shafrazi Gallery in New York, championing artists like Jean-Michel Basquiat, Keith Haring, and Kenny Scharf, alongside exhibitions of Picasso, Francis Bacon, Jasper Johns, Carl Andre, and Warhol. Internationally, he advised the Tehran Museum of Contemporary Art in assembling one of the most significant collections of Western modernism outside Europe and the United States.\n                      \n                      Shafrazi first met Zadik Zadikian while the artist was working with Richard Serra, later including him in his historic Tehran exhibition before the 1979 Revolution. Their collaboration forged a lasting connection, and Shafrazi has supported Zadikian’s work over the decades. For this project, he brings unrivaled experience, a global network, and a deep commitment to presenting Armenia on the world stage at the Venice Biennale."], 
null), $amp$components$sections$team_section$tina_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$282$name$$, "Tina Chakarian", $APP.$cljs$cst$558$role$$, "Curator", $cljs$cst$559$social$$, "@tinachakarian", $cljs$cst$560$email$$, "tina.chakarian@armenianpavilion2026.org", $cljs$cst$556$copy$$, "Tina Chakarian is a curator currently living in Boston and Yerevan. \n\nBorn and raised in Beirut, Lebanon, she studied Visual Arts at UCLA and Tufts University. \n\nShe was previously the Development Director at the Armenian Museum of America and an adjunct Professor at several Boston based universities.  Tina serves as a Principal and Creative Director at Chakarian Design Group, LLC, and, co-curates the Midway Artists Studios in Boston. \n\nAs a visual artist, Tina has exhibited a number of installations in the U.S., Lebanon and Armenia, including “Living Utopias” (Yerevan, 2018). \n\nShe has decades of experience in the field of philanthropy, where she combines her skills as an artist and fundraiser, to help support organizations and initiatives closest to her heart. \n"], 
null), $amp$components$sections$team_section$zadik_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$282$name$$, "Zadik Zadikian", $APP.$cljs$cst$558$role$$, "Artist", $cljs$cst$559$social$$, "@zadikzadikian", $cljs$cst$560$email$$, "zadik.zadikian@armenianpavilion2026.org", $cljs$cst$556$copy$$, "Born in 1948 in Yerevan, Soviet Armenia, Zadik Zadikian entered the Art Academy at fifteen and exhibited in Yerevan and Moscow before escaping the Soviet Union at nineteen by swimming across the Arax River in winter. In 1969 he arrived in San Francisco, apprenticing with sculptor Beniamino Bufano, and later moved to New York where he assisted Richard Serra on his first monumental oil-stick wall drawings—one of which was named after him. These encounters with scale, discipline, and radical form became the foundation of his artistic language.\n\nIn 1976, Zadikian gilded his entire 10,000-square-foot studio in industrial gold, an immersive act of transformation that anticipated his project 1000 Bricks Gilded in 24-Karat Gold Leaf (1978). Since then, gold has remained his central medium—at once alchemical and architectural, extravagant yet elemental. His brick-like forms distill structure into essence, revealing permanence through repetition and beauty within order.\n\nReflecting on exile, Zadikian writes: “When I escaped, I lost everything—my family, my country, my world. That void became my canvas. Gold is the witness. Beauty is found within structure. Repetition is the foundation of change.” Now based in Los Angeles, he has recently exhibited at the Brooklyn Museum and Tony Shafrazi’s Gallery Without Walls."], 
null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$team_section$team_member_card$$, "", null, null) : (void 0).call(null, $amp$components$sections$team_section$team_member_card$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$team_section$team_member_card$$, "amp.components.sections.team-section/team-member-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$team_section$team_members$$, "", null, null) : (void 0).call(null, $amp$components$sections$team_section$team_members$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$team_section$team_members$$, "amp.components.sections.team-section/team-members"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$team_section$team_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state zadik-images)(use-touch-enabled)(hooks/use-ref "image-gallery-container-ref")', 
null, null) : (void 0).call(null, $amp$components$sections$team_section$team_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state zadik-images)(use-touch-enabled)(hooks/use-ref "image-gallery-container-ref")', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$team_section$team_section$$, "amp.components.sections.team-section/team-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$work_overview$work_overview$$, "", null, null) : (void 0).call(null, $amp$components$sections$work_overview$work_overview$$, "", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$work_overview$work_overview$$, "amp.components.sections.work-overview/work-overview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$291$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$78$tag$$, $APP.$cljs$cst$292$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$views$landing_view$landing_view$$, '(hooks/use-ref "container-ref")(use-touch-enabled)', null, null) : (void 0).call(null, $APP.$amp$views$landing_view$landing_view$$, 
'(hooks/use-ref "container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$views$landing_view$landing_view$$, "amp.views.landing-view/landing-view"));
$APP.$module$contents$shadow$loader_mm$$.$setLoaded$();

}).call(this);