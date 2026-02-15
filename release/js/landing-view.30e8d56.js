(function(){
'use strict';
var $cljs$core$rand_int$$, $amp$components$fragments$about_me$about_event$$, $amp$components$sections$quote_section$quote_section$$, $amp$components$sections$video_section$video_section$$, $amp$components$ui$lower_panel_cta$lower_panel_cta$$, $amp$components$hero_header$hero_header$$, $amp$hooks$use_window_resize$use_window_size$$, $amp$components$navs$donation_nav$donation_nav$$, $amp$components$navs$logo_nav$logo_nav$$, $amp$components$hover_title$hover_title$$, $amp$components$ui$playable_text$playable_text$$, 
$amp$components$nav_link$nav_link$$, $amp$components$playful_titles$hero_menu$$, $amp$components$playful_titles$playful_titles$$, $amp$components$elements$lazy_image_gallery$check_column_dimensions$$, $amp$components$elements$lazy_image_gallery$aspect_column$$, $amp$components$elements$lazy_image_gallery$find_closest_size$$, $amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$, $amp$components$elements$lazy_image_gallery$image_layer$$, $amp$components$elements$lazy_image_gallery$caption_layer$$, 
$amp$components$elements$lazy_image_gallery$image_card$$, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $amp$components$sections$about_biennale$title$$, $amp$components$sections$about_biennale$copy_block$$, $amp$components$sections$about_biennale$about_biennale_section$$, $amp$components$writing_card$writing_card$$, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, $amp$components$sections$non_profit$title$$, $amp$components$sections$non_profit$copy_block$$, 
$amp$components$sections$non_profit$non_profit_section$$, $amp$components$sections$team_section$team_member_card$$, $amp$components$sections$team_section$team_members$$, $amp$components$sections$team_section$team_section$$, $amp$components$sections$work_overview$work_overview$$, $cljs$cst$462$images$$, $cljs$cst$446$from$$, $cljs$cst$454$on_click_handler$$, $cljs$cst$449$cta_title$$, $cljs$cst$463$image_gallery_container_ref$$, $cljs$cst$459$target_ref$$, $cljs$cst$457$writing$$, $cljs$cst$465$stagger$$, 
$cljs$cst$469$flash_images_handler$$, $cljs$cst$460$other$$, $cljs$cst$456$on_mouse_out_handler$$, $cljs$cst$455$on_mouse_over_handler$$, $cljs$cst$458$click$$, $cljs$cst$467$social$$, $cljs$cst$445$quote$$, $cljs$cst$451$hover_title_ref$$, $cljs$cst$468$email$$, $cljs$cst$447$to$$, $cljs$cst$453$is_playing_QMARK_$$, $cljs$cst$464$copy$$;
$cljs$core$rand_int$$ = function($n$jscomp$162$$) {
  return Math.floor(Math.random() * $n$jscomp$162$$);
};
$amp$components$fragments$about_me$about_event$$ = function($G__51700_props__41909__auto__$jscomp$17$$) {
  $APP.$helix$core$extract_cljs_props$$($G__51700_props__41909__auto__$jscomp$17$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__51700_props__41909__auto__$jscomp$17$$ = function() {
    return {className:"flex\n                  justify-center\n                  flex-col\n                  ", children:function() {
      var $G__51704$$ = function() {
        return {className:"text-slate-800\n                         bg-white/50\n                         backdrop-blur-md\n                         p-8", children:function() {
          var $G__51708$$ = function() {
            return {className:"flex flex-col", children:[function() {
              var $G__51712$$ = {className:"text-2xl \n                       lg:text-4xl \n                       mb-4", children:"THE STUDIO"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__51712$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__51712$$);
            }(), function() {
              var $G__51716$$ = {className:"text-md lg:text-xl mb-4", children:"The Armenia Pavilion at the 2026 Venice Biennale becomes Zadik Zadikian’s living, breathing studio."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__51716$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__51716$$);
            }(), function() {
              var $G__51720$$ = {className:"text-md lg:text-xl mb-4", children:"Every day, a team fabricates simple units of plaster and pigment."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__51720$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__51720$$);
            }(), function() {
              var $G__51724$$ = {className:"text-md lg:text-xl mb-4", children:"Structures rise, fall, and rise again — walls, pyramids, horizons."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__51724$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__51724$$);
            }(), function() {
              var $G__51728$$ = {className:"text-md lg:text-xl", children:"Nothing is fixed. Nothing is final."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__51728$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__51728$$);
            }(), function() {
              var $G__51732$$ = {className:"text-md lg:text-xl", children:"The cycle of work is the work itself."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__51732$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__51732$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__51708$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__51708$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__51704$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__51704$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__51700_props__41909__auto__$jscomp$17$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__51700_props__41909__auto__$jscomp$17$$);
};
$amp$components$sections$quote_section$quote_section$$ = function($G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$18_vec__51760$$, $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$18_vec__51773_vec__51776$$) {
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$18_vec__51760$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$18_vec__51760$$), $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$18_vec__51773_vec__51776$$], null);
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$18_vec__51760$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$18_vec__51760$$, 0, null);
  var $map__51763__$1_to$jscomp$10$$ = $APP.$cljs$core$__destructure_map$$($G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$18_vec__51760$$), $gradient_class$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $APP.$cljs$cst$441$gradient_class$$), $quote$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $cljs$cst$445$quote$$), $header$jscomp$5$$ = 
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $APP.$cljs$cst$325$header$$);
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$18_vec__51760$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $APP.$cljs$cst$442$is_visible_QMARK_$$);
  var $children$jscomp$16$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $APP.$cljs$cst$92$children$$);
  $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$18_vec__51773_vec__51776$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $cljs$cst$446$from$$);
  $map__51763__$1_to$jscomp$10$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $cljs$cst$447$to$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $from_transition$$ = $APP.$cljs$core$truth_$$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$18_vec__51773_vec__51776$$) ? $APP.$cljs$core$clj__GT_js$$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$18_vec__51773_vec__51776$$) : {opacity:0, duration:0.5, ease:"expo.inOut", stagger:0.1}, $to_transition$$ = $APP.$cljs$core$truth_$$($map__51763__$1_to$jscomp$10$$) ? $APP.$cljs$core$clj__GT_js$$($map__51763__$1_to$jscomp$10$$) : {opacity:1, 
  duration:0.15, ease:"expo.inOut", stagger:0.025}, $outer_ctx$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $text_ref$$ = $APP.$helix$hooks$use_ref$$("text-ref");
  $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$18_vec__51773_vec__51776$$ = $APP.$helix$hooks$use_state$$(new $APP.$module$node_modules$gsap$dist$gsap$$.gsap.timeline({paused:!0}));
  var $tl$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$18_vec__51773_vec__51776$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$18_vec__51773_vec__51776$$, 1, null);
  $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$18_vec__51773_vec__51776$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$1$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$18_vec__51773_vec__51776$$, 0, null);
  var $is_active_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$18_vec__51773_vec__51776$$, 1, null);
  $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$18_vec__51773_vec__51776$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $splitter$$ = $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($text_ref$$)) ? new $APP.$module$node_modules$gsap$SplitText$$.SplitText($APP.$cljs$core$_deref$$($text_ref$$), {type:"words,chars", charsClass:"playable-type-char"}) : null, $chars$jscomp$2$$ = $APP.$cljs$core$truth_$$($splitter$$) ? $splitter$$.chars : null, $ctx$$ = $APP.$module$node_modules$gsap$dist$gsap$$.gsap.context(function() {
      return $tl$jscomp$1$$.from($chars$jscomp$2$$, $from_transition$$).to($chars$jscomp$2$$, $to_transition$$).timeScale(4);
    }, $outer_ctx$jscomp$1$$);
    return function() {
      return $ctx$$.revert();
    };
  });
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$18_vec__51760$$ = [$quote$jscomp$1$$, $text_ref$$, $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$18_vec__51760$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$18_vec__51773_vec__51776$$, $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$18_vec__51760$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$18_vec__51773_vec__51776$$, 
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$18_vec__51760$$);
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$18_vec__51760$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($is_active_QMARK_$jscomp$4$$) ? $tl$jscomp$1$$.play() : null;
  });
  $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$18_vec__51773_vec__51776$$ = [$is_active_QMARK_$jscomp$4$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$18_vec__51760$$, $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$18_vec__51773_vec__51776$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$18_vec__51760$$, 
  $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$18_vec__51773_vec__51776$$);
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$18_vec__51760$$ = function() {
    return {ref:$outer_ctx$jscomp$1$$, className:$APP.$helix$impl$props$normalize_class$$("h-full w-full " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($gradient_class$jscomp$1$$) ? $gradient_class$jscomp$1$$ : null)), children:function() {
      var $G__51814$$ = function() {
        return {ref:$text_ref$$, className:"w-full h-full items-center justify-center flex", children:$APP.$cljs$core$truth_$$($children$jscomp$16$$) ? $children$jscomp$16$$ : function() {
          var $G__51819$$ = function() {
            return {className:"border-2 border-red-500", children:[function() {
              var $G__51825$$ = {children:$header$jscomp$5$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__51825$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__51825$$);
            }(), function() {
              var $G__51853$$ = function() {
                return {children:$APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($line$jscomp$21$$) {
                  var $G__51858$$ = {children:$line$jscomp$21$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("p", $G__51858$$, $line$jscomp$21$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__51858$$, $line$jscomp$21$$);
                }, $quote$jscomp$1$$)};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__51853$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__51853$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__51819$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__51819$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__51814$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__51814$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$18_vec__51760$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$18_vec__51760$$);
};
$amp$components$sections$video_section$video_section$$ = function($G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$19_vec__51826_vec__51834$$, $G__51845$jscomp$inline_3741_G__51849$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3740_maybe_ref__41910__auto__$jscomp$19_playback_id$$) {
  $G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$19_vec__51826_vec__51834$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$19_vec__51826_vec__51834$$), $G__51845$jscomp$inline_3741_G__51849$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3740_maybe_ref__41910__auto__$jscomp$19_playback_id$$], 
  null);
  $G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$19_vec__51826_vec__51834$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$19_vec__51826_vec__51834$$, 0, null);
  $G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$19_vec__51826_vec__51834$$ = $APP.$cljs$core$__destructure_map$$($G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$19_vec__51826_vec__51834$$);
  $G__51845$jscomp$inline_3741_G__51849$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3740_maybe_ref__41910__auto__$jscomp$19_playback_id$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$19_vec__51826_vec__51834$$, $APP.$cljs$cst$448$playback_id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$19_vec__51826_vec__51834$$ = $APP.$amp$providers$main_provider$use_main_state$$();
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$19_vec__51826_vec__51834$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$19_vec__51826_vec__51834$$, 1, null);
  $G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$19_vec__51826_vec__51834$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  var $is_active_QMARK_$jscomp$5_vec__51837$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$19_vec__51826_vec__51834$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$382$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$5_vec__51837$$, 0, null);
  $is_active_QMARK_$jscomp$5_vec__51837$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$5_vec__51837$$, 1, null);
  $G__51845$jscomp$inline_3741_G__51849$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3740_maybe_ref__41910__auto__$jscomp$19_playback_id$$ = {"playback-id":$G__51845$jscomp$inline_3741_G__51849$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3740_maybe_ref__41910__auto__$jscomp$19_playback_id$$, "should-play?":$is_active_QMARK_$jscomp$5_vec__51837$$};
  $G__51845$jscomp$inline_3741_G__51849$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3740_maybe_ref__41910__auto__$jscomp$19_playback_id$$ = {className:"h-full\n                           w-full\n                           flex\n                           relative \n                           flex items-center justify-items-center justify-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$video_section$lazy_video_background$$, 
  $G__51845$jscomp$inline_3741_G__51849$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3740_maybe_ref__41910__auto__$jscomp$19_playback_id$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$video_section$lazy_video_background$$, $G__51845$jscomp$inline_3741_G__51849$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3740_maybe_ref__41910__auto__$jscomp$19_playback_id$$)};
  $G__51845$jscomp$inline_3741_G__51849$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3740_maybe_ref__41910__auto__$jscomp$19_playback_id$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__51845$jscomp$inline_3741_G__51849$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3740_maybe_ref__41910__auto__$jscomp$19_playback_id$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__51845$jscomp$inline_3741_G__51849$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3740_maybe_ref__41910__auto__$jscomp$19_playback_id$$);
  $G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$19_vec__51826_vec__51834$$ = {id:"video", ref:$G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$19_vec__51826_vec__51834$$, className:"absolute\n                    h-full\n                    w-full\n                    overflow-hidden", children:$G__51845$jscomp$inline_3741_G__51849$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3740_maybe_ref__41910__auto__$jscomp$19_playback_id$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$19_vec__51826_vec__51834$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$19_vec__51826_vec__51834$$);
};
$amp$components$ui$lower_panel_cta$lower_panel_cta$$ = function($G__22681_map__22669_map__22669__$1_props__20433__auto__$jscomp$1_vec__22666$$, $maybe_ref__20434__auto__$jscomp$1$$) {
  $G__22681_map__22669_map__22669__$1_props__20433__auto__$jscomp$1_vec__22666$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__22681_map__22669_map__22669__$1_props__20433__auto__$jscomp$1_vec__22666$$), $maybe_ref__20434__auto__$jscomp$1$$], null);
  $G__22681_map__22669_map__22669__$1_props__20433__auto__$jscomp$1_vec__22666$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__22681_map__22669_map__22669__$1_props__20433__auto__$jscomp$1_vec__22666$$, 0, null);
  $G__22681_map__22669_map__22669__$1_props__20433__auto__$jscomp$1_vec__22666$$ = $APP.$cljs$core$__destructure_map$$($G__22681_map__22669_map__22669__$1_props__20433__auto__$jscomp$1_vec__22666$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__22681_map__22669_map__22669__$1_props__20433__auto__$jscomp$1_vec__22666$$, $APP.$cljs$cst$92$children$$);
  var $on_click$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__22681_map__22669_map__22669__$1_props__20433__auto__$jscomp$1_vec__22666$$, $APP.$cljs$cst$386$on_click$$), $cta_title$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__22681_map__22669_map__22669__$1_props__20433__auto__$jscomp$1_vec__22666$$, $cljs$cst$449$cta_title$$), $is_visible_QMARK_$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__22681_map__22669_map__22669__$1_props__20433__auto__$jscomp$1_vec__22666$$, 
  $APP.$cljs$cst$442$is_visible_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__22681_map__22669_map__22669__$1_props__20433__auto__$jscomp$1_vec__22666$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$("flex \n                       w-full\n                       justify-between\n                       items-center\n                       mt-1\n                       px-8\n                       py-4\n                       bg-black/20\n                       text-white\n                       backdrop-blur-md\n                       transition-all\n                       duration-500\n                       ease-out\n                       " + 
    $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($is_visible_QMARK_$jscomp$2$$) ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0")), children:[function() {
      var $G__22689_G__22693$jscomp$inline_3351$$ = {className:"text-md lg:text-md font-fira-code", children:"THE STUDIO will open from May 9 to November 22, 2026"};
      $G__22689_G__22693$jscomp$inline_3351$$ = {children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__22689_G__22693$jscomp$inline_3351$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__22689_G__22693$jscomp$inline_3351$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22689_G__22693$jscomp$inline_3351$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22689_G__22693$jscomp$inline_3351$$);
    }(), function() {
      var $G__22706_G__22710$jscomp$inline_3354$$ = {title:$cta_title$$, "additional-classes":"text-2xl", "on-click":$on_click$jscomp$1$$};
      $G__22706_G__22710$jscomp$inline_3354$$ = {className:"flex justify-end", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__22706_G__22710$jscomp$inline_3354$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__22706_G__22710$jscomp$inline_3354$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22706_G__22710$jscomp$inline_3354$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22706_G__22710$jscomp$inline_3354$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22681_map__22669_map__22669__$1_props__20433__auto__$jscomp$1_vec__22666$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__22681_map__22669_map__22669__$1_props__20433__auto__$jscomp$1_vec__22666$$);
};
$amp$components$hero_header$hero_header$$ = function($G__23020_props__20433__auto__$jscomp$2_vec__23012$$) {
  $APP.$helix$core$extract_cljs_props$$($G__23020_props__20433__auto__$jscomp$2_vec__23012$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$3$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $scroll_to_id$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__23020_props__20433__auto__$jscomp$2_vec__23012$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ctx$jscomp$3$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$382$end$$, "bottom"], null)]));
  var $visited_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__23020_props__20433__auto__$jscomp$2_vec__23012$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__23020_props__20433__auto__$jscomp$2_vec__23012$$, 1, null);
  $G__23020_props__20433__auto__$jscomp$2_vec__23012$$ = function() {
    return {id:"hero", ref:$outer_ctx$jscomp$3$$, className:"relative\n                    h-screen\n                    w-screen\n                    overflow-hidden", children:function() {
      var $G__23026$$ = function() {
        return {className:"h-full\n                           w-full\n                           relative \n                           flex items-center\n                           justify-items-center justify-center", children:[function() {
          var $G__23032_G__23043$jscomp$inline_3357$$ = {"playback-id":"Izp5007Abkc00t4Ubns7pAiqq2zG7JIp01tvAoaVOny7O00"};
          $G__23032_G__23043$jscomp$inline_3357$$ = {className:"z-10 absolute w-full h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$video_section$video_section$$, $G__23032_G__23043$jscomp$inline_3357$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$video_section$video_section$$, $G__23032_G__23043$jscomp$inline_3357$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23032_G__23043$jscomp$inline_3357$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__23032_G__23043$jscomp$inline_3357$$);
        }(), function() {
          var $G__23057$$ = function() {
            return {className:"z-20 absolute w-full h-full", children:[function() {
              var $G__23066$$ = {className:"w-full h-full absolute pink-grad opacity-30"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23066$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__23066$$);
            }(), function() {
              var $G__23072$$ = function() {
                return {className:"flex \n                                         flex-col\n                                         w-1/2 lg:w-3/4 xl:w-1/2\n                                         h-full\n                                         items-center\n                                         justify-center\n                                         mx-auto\n                                         px-4", children:[function() {
                  var $G__23077_G__23091$jscomp$inline_3038$$ = {};
                  $G__23077_G__23091$jscomp$inline_3038$$ = {className:"\n                                          \n                                                                      font-medium\n                                                                      font-fira-code\n                                                                      flex\n                                                                      items-center\n                                                                      justify-center", 
                  children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$fragments$about_me$about_event$$, $G__23077_G__23091$jscomp$inline_3038$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$fragments$about_me$about_event$$, $G__23077_G__23091$jscomp$inline_3038$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23077_G__23091$jscomp$inline_3038$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__23077_G__23091$jscomp$inline_3038$$);
                }(), function() {
                  var $G__23099$$ = function() {
                    return {"cta-title":"Learn More", "is-visible?":$visited_QMARK_$jscomp$4$$, "on-click":function() {
                      return $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$("about-work") : $scroll_to_id$$.call(null, "about-work");
                    }};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$ui$lower_panel_cta$lower_panel_cta$$, $G__23099$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$ui$lower_panel_cta$lower_panel_cta$$, $G__23099$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23072$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__23072$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23057$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__23057$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23026$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__23026$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23020_props__20433__auto__$jscomp$2_vec__23012$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__23020_props__20433__auto__$jscomp$2_vec__23012$$);
};
$amp$hooks$use_window_resize$use_window_size$$ = function() {
  var $G__51951_52001_vec__51941$$ = $APP.$helix$hooks$use_state$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$411$width$$, window.innerWidth, $APP.$cljs$cst$412$height$$, window.innerHeight], null)), $dimensions$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51951_52001_vec__51941$$, 0, null), $set_dimensions_BANG_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51951_52001_vec__51941$$, 1, null), $resize_handler$jscomp$1$$ = 
  function() {
    function $G__51997$$($var_args$jscomp$436$$) {
      var $G__51999__i__$jscomp$370$$ = null;
      if (arguments.length > 0) {
        $G__51999__i__$jscomp$370$$ = 0;
        for (var $G__51999__a$$ = Array(arguments.length - 0); $G__51999__i__$jscomp$370$$ < $G__51999__a$$.length;) {
          $G__51999__a$$[$G__51999__i__$jscomp$370$$] = arguments[$G__51999__i__$jscomp$370$$ + 0], ++$G__51999__i__$jscomp$370$$;
        }
        $G__51999__i__$jscomp$370$$ = new $APP.$cljs$core$IndexedSeq$$($G__51999__a$$, 0, null);
      }
      return $G__51997__delegate$$.call(this, $G__51999__i__$jscomp$370$$);
    }
    function $G__51997__delegate$$() {
      var $G__51950$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$411$width$$, window.innerWidth, $APP.$cljs$cst$412$height$$, window.innerHeight], null);
      return $set_dimensions_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_dimensions_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__51950$$) : $set_dimensions_BANG_$jscomp$1$$.call(null, $G__51950$$);
    }
    $G__51997$$.$cljs$lang$maxFixedArity$ = 0;
    $G__51997$$.$cljs$lang$applyTo$ = function($_$jscomp$371_arglist__52000$$) {
      $_$jscomp$371_arglist__52000$$ = $APP.$cljs$core$seq$$($_$jscomp$371_arglist__52000$$);
      return $G__51997__delegate$$($_$jscomp$371_arglist__52000$$);
    };
    $G__51997$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__51997__delegate$$;
    return $G__51997$$;
  }();
  $G__51951_52001_vec__51941$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    window.addEventListener("resize", $resize_handler$jscomp$1$$);
    $resize_handler$jscomp$1$$();
    return function() {
      return window.removeEventListener("resize", $resize_handler$jscomp$1$$);
    };
  });
  var $G__51952_52002$$ = [];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__51951_52001_vec__51941$$, $G__51952_52002$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__51951_52001_vec__51941$$, $G__51952_52002$$);
  return $dimensions$jscomp$5$$;
};
$amp$components$navs$donation_nav$donation_nav$$ = function($G__22789_G__22881_is_desktop_QMARK_$jscomp$1_props__20433__auto__$jscomp$3$$) {
  $APP.$helix$core$extract_cljs_props$$($G__22789_G__22881_is_desktop_QMARK_$jscomp$1_props__20433__auto__$jscomp$3$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__22789_G__22881_is_desktop_QMARK_$jscomp$1_props__20433__auto__$jscomp$3$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  var $dimensions$jscomp$6$$ = $amp$hooks$use_window_resize$use_window_size$$(), $is_active_QMARK_$jscomp$7_vec__22755$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$356$start$$, function() {
    return window.innerHeight;
  }, $APP.$cljs$cst$382$end$$, "1000000px", $APP.$cljs$cst$384$markers_QMARK_$$, !1, $APP.$cljs$cst$385$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$7_vec__22755$$, 0, null);
  $is_active_QMARK_$jscomp$7_vec__22755$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$7_vec__22755$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$396$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$431$opacity$$, 1], null), $APP.$cljs$cst$397$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$431$opacity$$, 0.7], null)]));
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$394$target$$, $comp_ref$$, $APP.$cljs$cst$400$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$390$y$$, 0], null), $APP.$cljs$cst$402$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$390$y$$, -$APP.$cljs$cst$412$height$$.$cljs$core$IFn$_invoke$arity$1$($dimensions$jscomp$6$$)], null), $APP.$cljs$cst$398$is_on_QMARK_$$, 
  $is_active_QMARK_$jscomp$7_vec__22755$$], null));
  if ($APP.$cljs$core$truth_$$($G__22789_G__22881_is_desktop_QMARK_$jscomp$1_props__20433__auto__$jscomp$3$$)) {
    return $G__22789_G__22881_is_desktop_QMARK_$jscomp$1_props__20433__auto__$jscomp$3$$ = function() {
      return {ref:$comp_ref$$, className:"fixed\n                      opacity-90\n                      z-40\n                      text-xl\n                      mr-8\n                      mt-4\n                      top-0\n                      right-0", children:function() {
        var $G__22810$$ = function() {
          return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
            return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
          }};
        }();
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__22810$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__22810$$);
      }()};
    }(), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22789_G__22881_is_desktop_QMARK_$jscomp$1_props__20433__auto__$jscomp$3$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22789_G__22881_is_desktop_QMARK_$jscomp$1_props__20433__auto__$jscomp$3$$);
  }
  $G__22789_G__22881_is_desktop_QMARK_$jscomp$1_props__20433__auto__$jscomp$3$$ = function() {
    return {ref:$comp_ref$$, className:"fixed \n                          opacity-90\n                          z-40\n                          text-xl\n                      w-full\n                          ", children:function() {
      var $G__22913$$ = function() {
        return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
          return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__22913$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__22913$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22789_G__22881_is_desktop_QMARK_$jscomp$1_props__20433__auto__$jscomp$3$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22789_G__22881_is_desktop_QMARK_$jscomp$1_props__20433__auto__$jscomp$3$$);
};
$amp$components$navs$logo_nav$logo_nav$$ = function($G__144749_is_active_QMARK_$jscomp$8_props__41917__auto___vec__144745$$) {
  $APP.$helix$core$extract_cljs_props$$($G__144749_is_active_QMARK_$jscomp$8_props__41917__auto___vec__144745$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__144749_is_active_QMARK_$jscomp$8_props__41917__auto___vec__144745$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$356$start$$, function() {
    return window.innerHeight - window.innerHeight / 8;
  }, $APP.$cljs$cst$382$end$$, "1000000px", $APP.$cljs$cst$384$markers_QMARK_$$, !1, $APP.$cljs$cst$385$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__144749_is_active_QMARK_$jscomp$8_props__41917__auto___vec__144745$$, 0, null);
  $G__144749_is_active_QMARK_$jscomp$8_props__41917__auto___vec__144745$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__144749_is_active_QMARK_$jscomp$8_props__41917__auto___vec__144745$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$396$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$431$opacity$$, 1], null), $APP.$cljs$cst$397$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$431$opacity$$, 0.7], null)]));
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$394$target$$, $comp_ref$jscomp$1$$, $APP.$cljs$cst$400$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$390$y$$, 0], null), $APP.$cljs$cst$402$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$390$y$$, -250], null), $APP.$cljs$cst$398$is_on_QMARK_$$, $G__144749_is_active_QMARK_$jscomp$8_props__41917__auto___vec__144745$$], 
  null));
  $G__144749_is_active_QMARK_$jscomp$8_props__41917__auto___vec__144745$$ = function() {
    return {ref:$comp_ref$jscomp$1$$, className:"fixed \n                    cursor-pointer\n                    opacity-90\n                    z-30\n                    text-xl\n                    ml-4\n                    mt-4\n                    w-1/5\n                    lg:w-32", onClick:function() {
      return window.open("https://www.labiennale.org/en/art/2026", "_blank");
    }, children:function() {
      var $G__144753$$ = {src:"images/graphics/61_biennale_logo.png"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__144753$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__144753$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__144749_is_active_QMARK_$jscomp$8_props__41917__auto___vec__144745$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__144749_is_active_QMARK_$jscomp$8_props__41917__auto___vec__144745$$);
};
$amp$components$hover_title$hover_title$$ = function($G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$20_vec__52048$$, $G__52057$jscomp$inline_3745_G__52061$jscomp$inline_3746_JSCompiler_inline_result$jscomp$inline_3744_maybe_ref__41910__auto__$jscomp$20_title$jscomp$13$$) {
  $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$20_vec__52048$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$20_vec__52048$$), $G__52057$jscomp$inline_3745_G__52061$jscomp$inline_3746_JSCompiler_inline_result$jscomp$inline_3744_maybe_ref__41910__auto__$jscomp$20_title$jscomp$13$$], null);
  $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$20_vec__52048$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$20_vec__52048$$, 0, null);
  $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$20_vec__52048$$ = $APP.$cljs$core$__destructure_map$$($G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$20_vec__52048$$);
  $G__52057$jscomp$inline_3745_G__52061$jscomp$inline_3746_JSCompiler_inline_result$jscomp$inline_3744_maybe_ref__41910__auto__$jscomp$20_title$jscomp$13$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$20_vec__52048$$, $APP.$cljs$cst$373$title$$);
  $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$20_vec__52048$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$20_vec__52048$$, $cljs$cst$451$hover_title_ref$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__52057$jscomp$inline_3745_G__52061$jscomp$inline_3746_JSCompiler_inline_result$jscomp$inline_3744_maybe_ref__41910__auto__$jscomp$20_title$jscomp$13$$ = {className:"flash-text\n                                 font-fira-code\n                                 font-bold", textAnchor:"start", alignmentBaseline:"middle", y:"50%", x:"50%", children:$G__52057$jscomp$inline_3745_G__52061$jscomp$inline_3746_JSCompiler_inline_result$jscomp$inline_3744_maybe_ref__41910__auto__$jscomp$20_title$jscomp$13$$};
  $G__52057$jscomp$inline_3745_G__52061$jscomp$inline_3746_JSCompiler_inline_result$jscomp$inline_3744_maybe_ref__41910__auto__$jscomp$20_title$jscomp$13$$ = {className:"justify-self-start", height:"100%", width:"100%", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("text", $G__52057$jscomp$inline_3745_G__52061$jscomp$inline_3746_JSCompiler_inline_result$jscomp$inline_3744_maybe_ref__41910__auto__$jscomp$20_title$jscomp$13$$) : 
  $APP.$helix$core$jsx$$.call(null, "text", $G__52057$jscomp$inline_3745_G__52061$jscomp$inline_3746_JSCompiler_inline_result$jscomp$inline_3744_maybe_ref__41910__auto__$jscomp$20_title$jscomp$13$$)};
  $G__52057$jscomp$inline_3745_G__52061$jscomp$inline_3746_JSCompiler_inline_result$jscomp$inline_3744_maybe_ref__41910__auto__$jscomp$20_title$jscomp$13$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__52057$jscomp$inline_3745_G__52061$jscomp$inline_3746_JSCompiler_inline_result$jscomp$inline_3744_maybe_ref__41910__auto__$jscomp$20_title$jscomp$13$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__52057$jscomp$inline_3745_G__52061$jscomp$inline_3746_JSCompiler_inline_result$jscomp$inline_3744_maybe_ref__41910__auto__$jscomp$20_title$jscomp$13$$);
  $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$20_vec__52048$$ = {className:"absolute \n                  massive-title\n                  h-full\n                  w-full\n                  pointer-events-none", ref:$G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$20_vec__52048$$, children:$G__52057$jscomp$inline_3745_G__52061$jscomp$inline_3746_JSCompiler_inline_result$jscomp$inline_3744_maybe_ref__41910__auto__$jscomp$20_title$jscomp$13$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$20_vec__52048$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$20_vec__52048$$);
};
$amp$components$ui$playable_text$playable_text$$ = function($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$21$$) {
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$), $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$21$$], null);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$, 0, null);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$ = $APP.$cljs$core$__destructure_map$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$);
  var $text$jscomp$15$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$, $APP.$cljs$cst$452$text$$), $is_playing_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$, $cljs$cst$453$is_playing_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$4$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $background_ref$$ = $APP.$helix$hooks$use_ref$$("background-ref"), $text_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("text-ref");
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$ = $APP.$helix$hooks$use_state$$(new $APP.$module$node_modules$gsap$dist$gsap$$.gsap.timeline({paused:!0}));
  var $tl$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$, 1, null);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $splitter$jscomp$1$$ = $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($text_ref$jscomp$1$$)) ? new $APP.$module$node_modules$gsap$SplitText$$.SplitText($APP.$cljs$core$_deref$$($text_ref$jscomp$1$$), {type:"words,chars", charsClass:"playable-type-char"}) : null, $chars$jscomp$3$$ = $APP.$cljs$core$truth_$$($splitter$jscomp$1$$) ? $splitter$jscomp$1$$.chars : null, $ctx$jscomp$1$$ = $APP.$module$node_modules$gsap$dist$gsap$$.gsap.context(function() {
      return $tl$jscomp$2$$.from($APP.$cljs$core$_deref$$($background_ref$$), {width:"0", duration:0.15, ease:"expo.inOut"}).to($APP.$cljs$core$_deref$$($background_ref$$), {width:"100%", duration:0.15, ease:"expo.inOut"}).from($chars$jscomp$3$$, {opacity:0, duration:0.15, ease:"expo.inOut", stagger:0.025}).to($chars$jscomp$3$$, {opacity:1, duration:0.15, ease:"expo.inOut", stagger:0.025});
    }, $outer_ctx$jscomp$4$$);
    return function() {
      return $ctx$jscomp$1$$.revert();
    };
  });
  $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$21$$ = [$text$jscomp$15$$, $text_ref$jscomp$1$$, $is_playing_QMARK_$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$21$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$, 
  $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$21$$);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($is_playing_QMARK_$$) ? $tl$jscomp$2$$.play() : $tl$jscomp$2$$.reverse();
  });
  $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$21$$ = [$is_playing_QMARK_$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$21$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$21$$);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$ = function() {
    return {ref:$outer_ctx$jscomp$4$$, children:function() {
      var $G__52086$$ = function() {
        return {ref:$text_ref$jscomp$1$$, className:"relative", children:[function() {
          var $G__52090$$ = {ref:$background_ref$$, className:"absolute h-full playable-text-background"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52090$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52090$$);
        }(), function() {
          var $G__52094$$ = {className:"playable-text-chars p-2", children:$text$jscomp$15$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52094$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52094$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52086$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52086$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$21_vec__52070_vec__52074$$);
};
$amp$components$nav_link$nav_link$$ = function($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$, $maybe_ref__41910__auto__$jscomp$22$$) {
  $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$), $maybe_ref__41910__auto__$jscomp$22$$], null);
  $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$, 0, null);
  $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$ = $APP.$cljs$core$__destructure_map$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$);
  var $on_click_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$, $cljs$cst$454$on_click_handler$$), $on_mouse_over_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$, $cljs$cst$455$on_mouse_over_handler$$), $on_mouse_out_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$, 
  $cljs$cst$456$on_mouse_out_handler$$), $title$jscomp$14$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$, $APP.$cljs$cst$373$title$$), $writing$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$, $cljs$cst$457$writing$$), $section_id$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$, 
  $APP.$cljs$cst$410$section_id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$14$$ = $APP.$helix$hooks$use_ref$$("link-ref");
  $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$ = $APP.$helix$hooks$use_state$$(!1);
  var $is_hovering_QMARK_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$, 0, null), $set_is_hovering_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$, 1, null);
  $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$ = function() {
    return {children:[function() {
      var $G__52125$$ = function() {
        return {ref:$ref$jscomp$14$$, className:"\n                  hero-nav-links\n                  cursor-pointer\n                  font-fira-code\n                  font-medium\n                  text-6xl", onMouseOver:function() {
          $APP.$cljs$core$tap_GT_$$("mouse over");
          $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $set_is_hovering_BANG_$$.call(null, !0);
          var $G__52129$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$410$section_id$$, $section_id$jscomp$2$$], null);
          return $on_mouse_over_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_mouse_over_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__52129$$) : $on_mouse_over_handler$$.call(null, $G__52129$$);
        }, onMouseOut:function() {
          $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(!1) : $set_is_hovering_BANG_$$.call(null, !1);
          var $G__52130$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$410$section_id$$, $section_id$jscomp$2$$], null);
          return $on_mouse_out_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_mouse_out_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__52130$$) : $on_mouse_out_handler$$.call(null, $G__52130$$);
        }, onClick:function() {
          var $G__52134$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$410$section_id$$, $section_id$jscomp$2$$], null);
          return $on_click_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_click_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__52134$$) : $on_click_handler$$.call(null, $G__52134$$);
        }, children:$title$jscomp$14$$};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("a", $G__52125$$, $section_id$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__52125$$, $section_id$jscomp$2$$);
    }(), function() {
      var $G__52136_G__52140$jscomp$inline_3363$$ = {text:$writing$$, "is-playing?":$is_hovering_QMARK_$$};
      $G__52136_G__52140$jscomp$inline_3363$$ = {className:"whitespace-nowrap\n                                                absolute\n                                                translate-x-full\n                                                bottom-2\n                                                \n                                                self-baseline\n                                                right-0\n                                                 pl-6\n                                                ", 
      children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$ui$playable_text$playable_text$$, $G__52136_G__52140$jscomp$inline_3363$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$ui$playable_text$playable_text$$, $G__52136_G__52140$jscomp$inline_3363$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52136_G__52140$jscomp$inline_3363$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52136_G__52140$jscomp$inline_3363$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$22_vec__52110_vec__52117$$);
};
$amp$components$playful_titles$hero_menu$$ = function($G__22649$jscomp$1_map__22645_map__22645__$1_props__20433__auto__$jscomp$4_vec__22642$$, $maybe_ref__20434__auto__$jscomp$4$$) {
  $G__22649$jscomp$1_map__22645_map__22645__$1_props__20433__auto__$jscomp$4_vec__22642$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__22649$jscomp$1_map__22645_map__22645__$1_props__20433__auto__$jscomp$4_vec__22642$$), $maybe_ref__20434__auto__$jscomp$4$$], null);
  $G__22649$jscomp$1_map__22645_map__22645__$1_props__20433__auto__$jscomp$4_vec__22642$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__22649$jscomp$1_map__22645_map__22645__$1_props__20433__auto__$jscomp$4_vec__22642$$, 0, null);
  $G__22649$jscomp$1_map__22645_map__22645__$1_props__20433__auto__$jscomp$4_vec__22642$$ = $APP.$cljs$core$__destructure_map$$($G__22649$jscomp$1_map__22645_map__22645__$1_props__20433__auto__$jscomp$4_vec__22642$$);
  var $data$jscomp$134$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__22649$jscomp$1_map__22645_map__22645__$1_props__20433__auto__$jscomp$4_vec__22642$$, $APP.$cljs$cst$28$data$$), $over$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__22649$jscomp$1_map__22645_map__22645__$1_props__20433__auto__$jscomp$4_vec__22642$$, $APP.$cljs$cst$396$over$$), $out$jscomp$15$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__22649$jscomp$1_map__22645_map__22645__$1_props__20433__auto__$jscomp$4_vec__22642$$, 
  $APP.$cljs$cst$397$out$$), $click$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__22649$jscomp$1_map__22645_map__22645__$1_props__20433__auto__$jscomp$4_vec__22642$$, $cljs$cst$458$click$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__22649$jscomp$1_map__22645_map__22645__$1_props__20433__auto__$jscomp$4_vec__22642$$ = function() {
    return {className:"absolute \n                  bg-white/30\n                  font-fira-code\n                  pointer-events-auto", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__22657$jscomp$1_G__22662$jscomp$inline_3749_G__22671$jscomp$inline_3750_p__22652_writing$jscomp$1$$) {
      var $id$jscomp$67$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__22657$jscomp$1_G__22662$jscomp$inline_3749_G__22671$jscomp$inline_3750_p__22652_writing$jscomp$1$$, 0, null);
      $G__22657$jscomp$1_G__22662$jscomp$inline_3749_G__22671$jscomp$inline_3750_p__22652_writing$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__22657$jscomp$1_G__22662$jscomp$inline_3749_G__22671$jscomp$inline_3750_p__22652_writing$jscomp$1$$, 1, null);
      $G__22657$jscomp$1_G__22662$jscomp$inline_3749_G__22671$jscomp$inline_3750_p__22652_writing$jscomp$1$$ = {title:$id$jscomp$67$$, writing:$G__22657$jscomp$1_G__22662$jscomp$inline_3749_G__22671$jscomp$inline_3750_p__22652_writing$jscomp$1$$, "section-id":$id$jscomp$67$$, "on-mouse-over-handler":$over$jscomp$1$$, "on-mouse-out-handler":$out$jscomp$15$$, "on-click-handler":$click$$};
      $G__22657$jscomp$1_G__22662$jscomp$inline_3749_G__22671$jscomp$inline_3750_p__22652_writing$jscomp$1$$ = {className:"relative flex", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$nav_link$nav_link$$, $G__22657$jscomp$1_G__22662$jscomp$inline_3749_G__22671$jscomp$inline_3750_p__22652_writing$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$nav_link$nav_link$$, $G__22657$jscomp$1_G__22662$jscomp$inline_3749_G__22671$jscomp$inline_3750_p__22652_writing$jscomp$1$$)};
      $G__22657$jscomp$1_G__22662$jscomp$inline_3749_G__22671$jscomp$inline_3750_p__22652_writing$jscomp$1$$ = {className:"flex", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22657$jscomp$1_G__22662$jscomp$inline_3749_G__22671$jscomp$inline_3750_p__22652_writing$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22657$jscomp$1_G__22662$jscomp$inline_3749_G__22671$jscomp$inline_3750_p__22652_writing$jscomp$1$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__22657$jscomp$1_G__22662$jscomp$inline_3749_G__22671$jscomp$inline_3750_p__22652_writing$jscomp$1$$, $id$jscomp$67$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22657$jscomp$1_G__22662$jscomp$inline_3749_G__22671$jscomp$inline_3750_p__22652_writing$jscomp$1$$, $id$jscomp$67$$);
    }, $data$jscomp$134$$)};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22649$jscomp$1_map__22645_map__22645__$1_props__20433__auto__$jscomp$4_vec__22642$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22649$jscomp$1_map__22645_map__22645__$1_props__20433__auto__$jscomp$4_vec__22642$$);
};
$amp$components$playful_titles$playful_titles$$ = function($G__22849_props__20433__auto__$jscomp$5_vec__22768_vec__22771$$) {
  $APP.$helix$core$extract_cljs_props$$($G__22849_props__20433__auto__$jscomp$5_vec__22768_vec__22771$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__22849_props__20433__auto__$jscomp$5_vec__22768_vec__22771$$ = $APP.$amp$providers$main_provider$use_main_state$$();
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__22849_props__20433__auto__$jscomp$5_vec__22768_vec__22771$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__22849_props__20433__auto__$jscomp$5_vec__22768_vec__22771$$, 1, null);
  var $hover_title_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("hover-title-ref");
  $G__22849_props__20433__auto__$jscomp$5_vec__22768_vec__22771$$ = $APP.$helix$hooks$use_state$$(null);
  var $current_section$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__22849_props__20433__auto__$jscomp$5_vec__22768_vec__22771$$, 0, null), $set_current_section_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__22849_props__20433__auto__$jscomp$5_vec__22768_vec__22771$$, 1, null), $nav_mouse_over_handler$$ = function() {
    function $G__22784$$($map__22802__$1$jscomp$1_p__22795_section_id$jscomp$3$$) {
      $map__22802__$1$jscomp$1_p__22795_section_id$jscomp$3$$ = $APP.$cljs$core$__destructure_map$$($map__22802__$1$jscomp$1_p__22795_section_id$jscomp$3$$);
      $map__22802__$1$jscomp$1_p__22795_section_id$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__22802__$1$jscomp$1_p__22795_section_id$jscomp$3$$, $APP.$cljs$cst$410$section_id$$);
      $set_current_section_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_current_section_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($map__22802__$1$jscomp$1_p__22795_section_id$jscomp$3$$) : $set_current_section_BANG_$$.call(null, $map__22802__$1$jscomp$1_p__22795_section_id$jscomp$3$$);
      return $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to($APP.$cljs$core$_deref$$($hover_title_ref$jscomp$1$$), {opacity:0.8, duration:0.2});
    }
    var $G__22785$$ = [$hover_title_ref$jscomp$1$$];
    return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__22784$$, $G__22785$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__22784$$, $G__22785$$);
  }(), $nav_mouse_out_handler$$ = function() {
    function $G__22831$$() {
      return $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to($APP.$cljs$core$_deref$$($hover_title_ref$jscomp$1$$), {opacity:0, duration:0.2});
    }
    var $G__22832$$ = [$hover_title_ref$jscomp$1$$];
    return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__22831$$, $G__22832$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__22831$$, $G__22832$$);
  }();
  $G__22849_props__20433__auto__$jscomp$5_vec__22768_vec__22771$$ = function() {
    return {className:"relative\n                    w-full \n                    h-full \n                    \n                    ", children:[function() {
      var $G__22870$$ = function() {
        return {className:"relative\n                    w-full \n                    h-full \n                    flex\n                    items-center\n                    justify-items-center\n                    justify-center", children:[function() {
          var $G__22885$$ = {"hover-title-ref":$hover_title_ref$jscomp$1$$, title:$current_section$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$hover_title$hover_title$$, $G__22885$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$hover_title$hover_title$$, $G__22885$$);
        }(), function() {
          var $G__22900$$ = {data:$amp$components$playful_titles$titles$$, over:$nav_mouse_over_handler$$, out:$nav_mouse_out_handler$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$playful_titles$hero_menu$$, $G__22900$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$playful_titles$hero_menu$$, $G__22900$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22870$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__22870$$);
    }(), function() {
      var $G__22922$$ = {className:"absolute\n                                     bottom-10\n                           w-full\n                           flex\n                           justify-center\n                           "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22922$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22922$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22849_props__20433__auto__$jscomp$5_vec__22768_vec__22771$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__22849_props__20433__auto__$jscomp$5_vec__22768_vec__22771$$);
};
$amp$components$elements$lazy_image_gallery$check_column_dimensions$$ = function($columns$jscomp$3$$) {
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(function($total_height$$, $dimensions$jscomp$7$$) {
    return $total_height$$ + $APP.$cljs$core$second$$($dimensions$jscomp$7$$);
  }, 0, $columns$jscomp$3$$);
};
$amp$components$elements$lazy_image_gallery$aspect_column$$ = function($width$jscomp$32$$, $height$jscomp$29$$) {
  var $initial_images$$ = function() {
    for (var $G__52505_accumulated_height$$ = 0, $G__52506_result$jscomp$116$$ = $APP.$cljs$core$PersistentVector$EMPTY$$;;) {
      if ($G__52505_accumulated_height$$ >= $height$jscomp$29$$) {
        return $G__52506_result$jscomp$116$$;
      }
      var $aspect_ratio$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$components$elements$lazy_image_gallery$aspect_ratios$$, $cljs$core$rand_int$$($APP.$cljs$core$count$$($amp$components$elements$lazy_image_gallery$aspect_ratios$$))), $img_height$$ = Math.round($width$jscomp$32$$ * $aspect_ratio$jscomp$4$$);
      $G__52505_accumulated_height$$ += $img_height$$;
      $G__52506_result$jscomp$116$$ = $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__52506_result$jscomp$116$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$width$jscomp$32$$, $img_height$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$439$aspect_ratio$$, $aspect_ratio$jscomp$4$$], null)));
    }
  }(), $total_height$jscomp$1$$ = $amp$components$elements$lazy_image_gallery$check_column_dimensions$$($initial_images$$), $scale_factor$jscomp$1$$ = $height$jscomp$29$$ / $total_height$jscomp$1$$;
  return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($dimensions$jscomp$8$$) {
    var $w$jscomp$16$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$8$$, 0, null), $h$jscomp$98$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$8$$, 1, null);
    return $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$w$jscomp$16$$, $h$jscomp$98$$ * $scale_factor$jscomp$1$$], null), $APP.$cljs$core$meta$$($dimensions$jscomp$8$$));
  }, $initial_images$$);
};
$amp$components$elements$lazy_image_gallery$find_closest_size$$ = function($target_width$jscomp$1$$, $target_height$jscomp$1$$) {
  var $sizes$jscomp$1$$ = $APP.$cljs$core$vec$$($APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$val$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$components$elements$lazy_image_gallery$image_sizes$$])));
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(function($closest$$, $h$jscomp$99_p__52154$$) {
    var $w$jscomp$17$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($h$jscomp$99_p__52154$$, 0, null);
    $h$jscomp$99_p__52154$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($h$jscomp$99_p__52154$$, 1, null);
    var $closest_diff$$ = Math.abs($APP.$cljs$core$first$$($closest$$) - $target_width$jscomp$1$$) + Math.abs($APP.$cljs$core$second$$($closest$$) - $target_height$jscomp$1$$);
    return Math.abs($w$jscomp$17$$ - $target_width$jscomp$1$$) + Math.abs($h$jscomp$99_p__52154$$ - $target_height$jscomp$1$$) < $closest_diff$$ ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$w$jscomp$17$$, $h$jscomp$99_p__52154$$], null) : $closest$$;
  }, $APP.$cljs$core$first$$($sizes$jscomp$1$$), $sizes$jscomp$1$$);
};
$amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$ = function($width$jscomp$33$$, $height$jscomp$30$$) {
  var $column_width$$ = Math.round($width$jscomp$33$$ / 3);
  return $APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(function() {
    return $amp$components$elements$lazy_image_gallery$aspect_column$$($column_width$$, $height$jscomp$30$$);
  }, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$core$range$cljs$0core$0IFn$0_invoke$0arity$03$$(3)]));
};
$amp$components$elements$lazy_image_gallery$image_layer$$ = function($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$, $G__52212_52508_maybe_ref__41910__auto__$jscomp$23$$) {
  $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$), $G__52212_52508_maybe_ref__41910__auto__$jscomp$23$$], null);
  $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$, 0, null);
  $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$ = $APP.$cljs$core$__destructure_map$$($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$);
  var $img_src$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$, $APP.$cljs$cst$430$img_src$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $base_ref$$ = $APP.$helix$hooks$use_ref$$("base-ref"), $transition_ref$$ = $APP.$helix$hooks$use_ref$$("trans-ref");
  $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$ = $APP.$helix$hooks$use_state$$(null);
  var $current_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$, 0, null), $set_current_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$, 1, null);
  $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$ = $APP.$helix$hooks$use_state$$(null);
  var $prev_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$, 0, null), $set_prev_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$, 1, null);
  $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($current_src$$, $img_src$jscomp$4$$) ? null : $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$($current_src$$) : $set_prev_src$$.call(null, $current_src$$);
  });
  $G__52212_52508_maybe_ref__41910__auto__$jscomp$23$$ = [$img_src$jscomp$4$$, $current_src$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$, $G__52212_52508_maybe_ref__41910__auto__$jscomp$23$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$, $G__52212_52508_maybe_ref__41910__auto__$jscomp$23$$);
  $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$ = function() {
    return {className:"z-10", children:[$APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($prev_src$$) ? $prev_src$$ : $current_src$$) ? function() {
      var $G__52224$$ = function() {
        return {ref:$base_ref$$, src:$APP.$cljs$core$truth_$$($prev_src$$) ? $prev_src$$ : $current_src$$, className:"absolute\n                               z-10\n                               w-full\n                               h-full\n                               object-cover\n                               overflow-hidden", onLoad:function() {
          return $APP.$amp$utils$gsap$to_ref$$($transition_ref$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$431$opacity$$, 0, $APP.$cljs$cst$388$duration$$, 0], null));
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("img", $G__52224$$, "base") : $APP.$helix$core$jsx$$.call(null, "img", $G__52224$$, "base");
    }() : null, $APP.$cljs$core$truth_$$(function() {
      var $or__5142__auto__$jscomp$120$$ = $prev_src$$ == null;
      return $or__5142__auto__$jscomp$120$$ ? $or__5142__auto__$jscomp$120$$ : $img_src$jscomp$4$$;
    }()) ? function() {
      var $G__52270$$ = function() {
        return {src:$img_src$jscomp$4$$, ref:$transition_ref$$, className:"absolute\n                             z-20\n                             w-full\n                             h-full\n                             object-cover\n                             overflow-hidden", style:{opacity:$APP.$helix$impl$props$__GT_js$$(0)}, onLoad:function() {
          return $APP.$amp$utils$gsap$to_ref$$($transition_ref$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$431$opacity$$, 1, $APP.$cljs$cst$388$duration$$, 1, $APP.$cljs$cst$404$onComplete$$, function() {
            $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$(null) : $set_prev_src$$.call(null, null);
            return $set_current_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_current_src$$.$cljs$core$IFn$_invoke$arity$1$($img_src$jscomp$4$$) : $set_current_src$$.call(null, $img_src$jscomp$4$$);
          }], null));
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("img", $G__52270$$, "trans") : $APP.$helix$core$jsx$$.call(null, "img", $G__52270$$, "trans");
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$23_vec__52187_vec__52195_vec__52198$$);
};
$amp$components$elements$lazy_image_gallery$caption_layer$$ = function($G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$24_vec__52310$$, $maybe_ref__41910__auto__$jscomp$24$$) {
  $G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$24_vec__52310$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$24_vec__52310$$), $maybe_ref__41910__auto__$jscomp$24$$], null);
  $G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$24_vec__52310$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$24_vec__52310$$, 0, null);
  $G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$24_vec__52310$$ = $APP.$cljs$core$__destructure_map$$($G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$24_vec__52310$$);
  var $target_ref$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$24_vec__52310$$, $cljs$cst$459$target_ref$$), $caption$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$24_vec__52310$$, $APP.$cljs$cst$432$caption$$), $credit$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$24_vec__52310$$, 
  $APP.$cljs$cst$433$credit$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$24_vec__52310$$, $cljs$cst$460$other$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$24_vec__52310$$ = function() {
    return {className:"absolute\n                  z-20\n                  bottom-0 \n                  left-0\n                  w-full\n                  h-12\n                  pointer-events-none", ref:$target_ref$$, children:function() {
      var $G__52321$$ = function() {
        return {className:"h-full\n                         w-full\n                         bg-slate-900/50\n                         p-2", children:[function() {
          var $G__52325$$ = {className:"text-white \n                              font-fira-code\n                              text-xs", children:$caption$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52325$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52325$$);
        }(), function() {
          var $G__52329$$ = {className:"text-white \n                              font-fira-code\n                              text-xs", children:$credit$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52329$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52329$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52321$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52321$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$24_vec__52310$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$24_vec__52310$$);
};
$amp$components$elements$lazy_image_gallery$image_card$$ = function($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$25_vec__52367$$, $maybe_ref__41910__auto__$jscomp$25$$) {
  $G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$25_vec__52367$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$25_vec__52367$$), $maybe_ref__41910__auto__$jscomp$25$$], null);
  $G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$25_vec__52367$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$25_vec__52367$$, 0, null);
  $G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$25_vec__52367$$ = $APP.$cljs$core$__destructure_map$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$25_vec__52367$$);
  var $width$jscomp$34$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$25_vec__52367$$, $APP.$cljs$cst$411$width$$), $height$jscomp$31$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$25_vec__52367$$, $APP.$cljs$cst$412$height$$), $img_src$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$25_vec__52367$$, 
  $APP.$cljs$cst$430$img_src$$), $caption$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$25_vec__52367$$, $APP.$cljs$cst$432$caption$$), $credit$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$25_vec__52367$$, $APP.$cljs$cst$433$credit$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$25_vec__52367$$, $cljs$cst$460$other$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$25_vec__52367$$, $APP.$cljs$cst$90$key$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$25_vec__52367$$, $APP.$cljs$cst$461$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $trigger_ref$$ = $APP.$helix$hooks$use_ref$$("trigger-ref"), $target_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("target-ref");
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($trigger_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$394$target$$, $target_ref$jscomp$1$$, $APP.$cljs$cst$395$initial$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$390$y$$, 100, $APP.$cljs$cst$431$opacity$$, 0], null), $APP.$cljs$cst$396$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
  3, [$APP.$cljs$cst$390$y$$, 0, $APP.$cljs$cst$431$opacity$$, 1, $APP.$cljs$cst$388$duration$$, 0.25], null), $APP.$cljs$cst$397$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$390$y$$, 100, $APP.$cljs$cst$431$opacity$$, 0, $APP.$cljs$cst$388$duration$$, 0.125], null)], null)]));
  $G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$25_vec__52367$$ = function() {
    return {ref:$trigger_ref$$, style:{width:$APP.$helix$impl$props$__GT_js$$($width$jscomp$34$$), height:$APP.$helix$impl$props$__GT_js$$($height$jscomp$31$$)}, className:"relative\n                    bg-white/10\n                    overflow-hidden", children:[function() {
      var $G__52423$$ = {"img-src":$img_src$jscomp$5$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$image_layer$$, $G__52423$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$image_layer$$, $G__52423$$);
    }(), $APP.$cljs$core$truth_$$($caption$jscomp$2$$) ? function() {
      var $G__52446$$ = {"target-ref":$target_ref$jscomp$1$$, caption:$caption$jscomp$2$$, credit:$credit$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$caption_layer$$, $G__52446$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$caption_layer$$, $G__52446$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$25_vec__52367$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$25_vec__52367$$);
};
$amp$components$elements$lazy_image_gallery$lazy_image_gallery$$ = function($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$, $G__52465_52510_maybe_ref__41910__auto__$jscomp$26$$) {
  $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$), $G__52465_52510_maybe_ref__41910__auto__$jscomp$26$$], null);
  $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$, 0, null);
  $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$ = $APP.$cljs$core$__destructure_map$$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$);
  var $images$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$, $cljs$cst$462$images$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$, $APP.$cljs$cst$442$is_visible_QMARK_$$);
  $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$, $cljs$cst$463$image_gallery_container_ref$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$5$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $gallery_dimensions$$ = $APP.$amp$hooks$use_container_size$use_container_size$$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$);
  $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$ = $APP.$helix$hooks$use_state$$($amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$(8, 200));
  var $masonary_grid_slots$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$, 0, null), $set_masonary_grid_slots$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$, 1, null);
  $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $G__52470$$ = $amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$($APP.$cljs$cst$411$width$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$), $APP.$cljs$cst$412$height$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$));
    return $set_masonary_grid_slots$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_masonary_grid_slots$$.$cljs$core$IFn$_invoke$arity$1$($G__52470$$) : $set_masonary_grid_slots$$.call(null, $G__52470$$);
  });
  $G__52465_52510_maybe_ref__41910__auto__$jscomp$26$$ = [$APP.$cljs$cst$411$width$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$), $APP.$cljs$cst$412$height$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$)];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$, $G__52465_52510_maybe_ref__41910__auto__$jscomp$26$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$, 
  $G__52465_52510_maybe_ref__41910__auto__$jscomp$26$$);
  $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$ = function() {
    return {ref:$outer_ctx$jscomp$5$$, className:"overflow-hidden h-full", children:function() {
      var $G__52476$$ = function() {
        return {className:"columns-3\n                               gap-0\n                               h-full", style:{backgroundImage:$APP.$helix$impl$props$__GT_js$$("repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.1) 4px, rgba(255,255,255,0.1) 5px)")}, children:$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($idx$jscomp$62$$, $dimensions$jscomp$9_height$jscomp$32$$) {
          var $G__52500_caption$jscomp$3_map__52489$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($images$$, $cljs$core$rand_int$$($APP.$cljs$core$count$$($images$$))), $credit$jscomp$3_map__52489__$1$$ = $APP.$cljs$core$__destructure_map$$($G__52500_caption$jscomp$3_map__52489$$), $sized_image_src_src$jscomp$36$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$3_map__52489__$1$$, $APP.$cljs$cst$421$src$$);
          $G__52500_caption$jscomp$3_map__52489$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$3_map__52489__$1$$, $APP.$cljs$cst$432$caption$$);
          $credit$jscomp$3_map__52489__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$3_map__52489__$1$$, $APP.$cljs$cst$433$credit$$);
          var $aspect_ratio$jscomp$5$$ = $APP.$cljs$cst$439$aspect_ratio$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$meta$$($dimensions$jscomp$9_height$jscomp$32$$)), $closest_height_closest_match$$ = $amp$components$elements$lazy_image_gallery$find_closest_size$$($APP.$cljs$core$first$$($dimensions$jscomp$9_height$jscomp$32$$), $APP.$cljs$core$second$$($dimensions$jscomp$9_height$jscomp$32$$)), $width$jscomp$35$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$9_height$jscomp$32$$, 
          0, null);
          $dimensions$jscomp$9_height$jscomp$32$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$9_height$jscomp$32$$, 1, null);
          var $closest_width$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($closest_height_closest_match$$, 0, null);
          $closest_height_closest_match$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($closest_height_closest_match$$, 1, null);
          $sized_image_src_src$jscomp$36$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($sized_image_src_src$jscomp$36$$) + "?w\x3d" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($closest_width$$) + "\x26h\x3d" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($closest_height_closest_match$$) + "\x26fit\x3dcrop\x26auto\x3dformat,compress\x26crop\x3dfaces,edges";
          $G__52500_caption$jscomp$3_map__52489$$ = {width:$width$jscomp$35$$, height:$dimensions$jscomp$9_height$jscomp$32$$, "img-src":$sized_image_src_src$jscomp$36$$, caption:$G__52500_caption$jscomp$3_map__52489$$, credit:$credit$jscomp$3_map__52489__$1$$, other:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($aspect_ratio$jscomp$5$$), idx:$idx$jscomp$62$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$lazy_image_gallery$image_card$$, $G__52500_caption$jscomp$3_map__52489$$, $idx$jscomp$62$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$image_card$$, $G__52500_caption$jscomp$3_map__52489$$, $idx$jscomp$62$$);
        }, $masonary_grid_slots$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52476$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52476$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$26_vec__52457_vec__52461$$);
};
$amp$components$sections$about_biennale$title$$ = function($G__52554_props__41909__auto__$jscomp$27$$) {
  $APP.$helix$core$extract_cljs_props$$($G__52554_props__41909__auto__$jscomp$27$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__52554_props__41909__auto__$jscomp$27$$ = function() {
    return {className:"lg:flex\n                  w-full\n                  lg:h-2/5\n                  z-20\n                  items-center\n                  justify-between\n                  bg-black/10\n                  lg:p-12 p-4\n                  lg:text-6xl text-3xl\n                  font-futura\n                  font-bold\n                  text-slate-800", children:[function() {
      var $G__52562$$ = function() {
        return {className:"flex flex-col", children:[function() {
          var $G__52569$$ = {className:"", children:"venice"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52569$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52569$$);
        }(), function() {
          var $G__52581$$ = {className:"", children:"biennale"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52581$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52581$$);
        }(), function() {
          var $G__52589$$ = {className:"", children:"2026"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52589$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52589$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52562$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52562$$);
    }(), function() {
      var $G__52597$$ = function() {
        return {className:"flex\n                         flex-col\n                         font-futura\n                         font-bold\n                         lg:text-right\n                         italic\n                         text-white/60", children:[function() {
          var $G__52603$$ = {className:"", children:"in"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52603$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52603$$);
        }(), function() {
          var $G__52620$$ = {className:"", children:"minor"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52620$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52620$$);
        }(), function() {
          var $G__52638$$ = {className:"", children:"keys"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52638$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52638$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52597$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52597$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52554_props__41909__auto__$jscomp$27$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52554_props__41909__auto__$jscomp$27$$);
};
$amp$components$sections$about_biennale$copy_block$$ = function($G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$28_vec__52710$$, $maybe_ref__41910__auto__$jscomp$28$$) {
  $G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$28_vec__52710$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$28_vec__52710$$), $maybe_ref__41910__auto__$jscomp$28$$], null);
  $G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$28_vec__52710$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$28_vec__52710$$, 0, null);
  $G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$28_vec__52710$$ = $APP.$cljs$core$__destructure_map$$($G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$28_vec__52710$$);
  var $title$jscomp$15$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$28_vec__52710$$, $APP.$cljs$cst$373$title$$), $copy$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$28_vec__52710$$, $cljs$cst$464$copy$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$28_vec__52710$$ = function() {
    return {className:"flex flex-col mb-12 font-futura", children:[function() {
      var $G__52724$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:$title$jscomp$15$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52724$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52724$$);
    }(), function() {
      var $G__52734$$ = {className:"text-slate-800", children:$copy$jscomp$1$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52734$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52734$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$28_vec__52710$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$28_vec__52710$$);
};
$amp$components$sections$about_biennale$about_biennale_section$$ = function($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$, $maybe_ref__41910__auto__$jscomp$29$$) {
  $G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$), $maybe_ref__41910__auto__$jscomp$29$$], null);
  $G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$, 0, null);
  $G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$ = $APP.$cljs$core$__destructure_map$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$, $APP.$cljs$cst$441$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$, $APP.$cljs$cst$442$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$, $APP.$cljs$cst$443$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$6$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$6$$);
  var $visited_QMARK_$jscomp$7$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$, 1, null);
  $G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$about_biennale$images$$);
  var $images$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$, 1, null);
  var $image_gallery_container_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("image-gallery-container-ref"), $is_desktop_QMARK_$jscomp$2$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$ = function() {
    return {ref:$outer_ctx$jscomp$6$$, className:"h-full \n                        w-full\n                        flex\n                        pink-grad\n                        light-red-grad\n                        items-center\n                        justify-center\n                        font-futura\n                        relative", children:function() {
      var $G__52992$$ = function() {
        return {className:"flex \n                               flex-col\n                               overflow-hidden\n                               relative\n                               w-full md:w-10/12 lg:w-full\n                               lg:p-12 p-4", children:[function() {
          var $G__52996$$ = {};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$title$$, $G__52996$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$title$$, $G__52996$$);
        }(), function() {
          var $G__52998$$ = function() {
            return {className:"flex overflow-hidden relative", children:[function() {
              var $G__53002$$ = function() {
                return {className:"lg:w-1/2 \n                                             lg:p-16 p-4", children:[function() {
                  var $G__53006$$ = {title:"the biennale", copy:"The Venice Biennale is the most prestigious platform for contemporary art in the world—the cultural equivalent of the Olympics.  Every two years, nations convene in the Giardini and Arsenale to present the best of their artists.  The 61st International Art Exhibition will run from May 9 to November 22 2026 and, following the unexpected passing of curator Koyo Kouoh, will be realized exactly as she conceived it."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$copy_block$$, $G__53006$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$copy_block$$, $G__53006$$);
                }(), function() {
                  var $G__53010$$ = {title:"The theme: In Minor Keys", copy:"Kouoh’s vision invites us to slow down and listen to the “frequencies of the minor keys,” the quiet tones and lower frequencies that often get lost amid today’s chaos .  In her curatorial text, she describes the minor key as a metaphor for small islands and intimate oases—gardens, courtyards, dance floors—where artists cultivate rich social and ecological worlds .  Rather than celebrating spectacle, the exhibition tunes into “the persistent signals of earth and life,” foregrounding sensory, affective experiences .  As Kouoh’s team notes, “In minor keys are sequences of exhilarating journeys that address the sensate and the affective, inviting visitors to marvel, meditate, dream, revel, reflect and commune in realms where time is not corporate property nor at the mercy of relentlessly accelerated productivity” ."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$copy_block$$, $G__53010$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$copy_block$$, $G__53010$$);
                }(), function() {
                  var $G__53014$$ = {title:"Why this matters to Armenians", copy:"Armenia’s cultural memory is one of quiet endurance, repetition and devotion.  From stone‑carved khachkars to endless rows of hand‑woven carpets, Armenian art has always been a labour of patience and persistence.  Kouoh’s vision of the Biennale as an archipelago of “minor keys” resonates deeply with this ethos.  It is about valuing the handmade over the manufactured, the intimate gesture over the headline‑grabbing spectacle—precisely what Zadik Zadikian will embody in The Studio."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$copy_block$$, $G__53014$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$copy_block$$, $G__53014$$);
                }(), function() {
                  var $G__53018$$ = {className:"", children:"By bringing an Armenian “island” to Venice, we affirm that our heritage belongs on the world’s biggest stage not because it shouts the loudest, but because it teaches the world how to listen.  Supporting the Armenia Pavilion is more than funding an exhibition; it is enabling a sanctuary of slow, deliberate creativity—an oasis of dignity and resilience—within a global conversation on art’s future."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__53018$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__53018$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53002$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__53002$$);
            }(), $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$2$$) ? $visited_QMARK_$jscomp$7$$ : $is_desktop_QMARK_$jscomp$2$$) ? function() {
              var $G__53022_G__53026$jscomp$inline_3753_G__53030$jscomp$inline_3754_JSCompiler_inline_result$jscomp$inline_3752$$ = {images:$images$jscomp$1$$, "image-gallery-container-ref":$image_gallery_container_ref$jscomp$1$$};
              $G__53022_G__53026$jscomp$inline_3753_G__53030$jscomp$inline_3754_JSCompiler_inline_result$jscomp$inline_3752$$ = {className:"absolute h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $G__53022_G__53026$jscomp$inline_3753_G__53030$jscomp$inline_3754_JSCompiler_inline_result$jscomp$inline_3752$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, 
              $G__53022_G__53026$jscomp$inline_3753_G__53030$jscomp$inline_3754_JSCompiler_inline_result$jscomp$inline_3752$$)};
              $G__53022_G__53026$jscomp$inline_3753_G__53030$jscomp$inline_3754_JSCompiler_inline_result$jscomp$inline_3752$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53022_G__53026$jscomp$inline_3753_G__53030$jscomp$inline_3754_JSCompiler_inline_result$jscomp$inline_3752$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__53022_G__53026$jscomp$inline_3753_G__53030$jscomp$inline_3754_JSCompiler_inline_result$jscomp$inline_3752$$);
              $G__53022_G__53026$jscomp$inline_3753_G__53030$jscomp$inline_3754_JSCompiler_inline_result$jscomp$inline_3752$$ = {ref:$image_gallery_container_ref$jscomp$1$$, className:"ml-8\n                                               w-7/12\n                                               relative\n                                               overflow-hidden", children:$G__53022_G__53026$jscomp$inline_3753_G__53030$jscomp$inline_3754_JSCompiler_inline_result$jscomp$inline_3752$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53022_G__53026$jscomp$inline_3753_G__53030$jscomp$inline_3754_JSCompiler_inline_result$jscomp$inline_3752$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__53022_G__53026$jscomp$inline_3753_G__53030$jscomp$inline_3754_JSCompiler_inline_result$jscomp$inline_3752$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52998$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52998$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52992$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52992$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$29_vec__52977_vec__52981_vec__52984$$);
};
$amp$components$writing_card$writing_card$$ = function($G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$30_vec__52241$$, $maybe_ref__41910__auto__$jscomp$30$$) {
  $G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$30_vec__52241$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$30_vec__52241$$), $maybe_ref__41910__auto__$jscomp$30$$], null);
  $G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$30_vec__52241$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$30_vec__52241$$, 0, null);
  $G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$30_vec__52241$$ = $APP.$cljs$core$__destructure_map$$($G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$30_vec__52241$$);
  var $children$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$30_vec__52241$$, $APP.$cljs$cst$92$children$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$7$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$30_vec__52241$$ = function() {
    return {id:"hero", ref:$outer_ctx$jscomp$7$$, className:"absolute\n                    pointer-events-none\n                    h-screen\n                    w-screen\n                    overflow-hidden", children:function() {
      var $G__52253$$ = function() {
        return {className:"h-full\n                           w-full\n                           relative \n                           flex items-center\n                           justify-items-center justify-center", children:function() {
          var $G__52258$$ = function() {
            return {className:"z-20 absolute w-full h-full", children:[function() {
              var $G__52262$$ = {className:"w-full h-full absolute opacity-30"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52262$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52262$$);
            }(), function() {
              var $G__52266$$ = {"section-id":"main-quote", from:new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$431$opacity$$, 0, $APP.$cljs$cst$388$duration$$, 0.5, $APP.$cljs$cst$392$ease$$, "expo.inOut", $cljs$cst$465$stagger$$, 0.02], null), children:$children$jscomp$18$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$quote_section$quote_section$$, $G__52266$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$quote_section$quote_section$$, $G__52266$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52258$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52258$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52253$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52253$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$30_vec__52241$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$30_vec__52241$$);
};
$amp$components$sections$mobile_hero_section$mobile_hero_section$$ = function($G__22841_props__20433__auto__$jscomp$6_vec__22818_vec__22821$$) {
  $APP.$helix$core$extract_cljs_props$$($G__22841_props__20433__auto__$jscomp$6_vec__22818_vec__22821$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__22841_props__20433__auto__$jscomp$6_vec__22818_vec__22821$$ = $APP.$amp$providers$main_provider$use_main_state$$();
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__22841_props__20433__auto__$jscomp$6_vec__22818_vec__22821$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__22841_props__20433__auto__$jscomp$6_vec__22818_vec__22821$$, 1, null);
  var $outer_ctx$jscomp$8$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__22841_props__20433__auto__$jscomp$6_vec__22818_vec__22821$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ctx$jscomp$8$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$382$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__22841_props__20433__auto__$jscomp$6_vec__22818_vec__22821$$, 0, null);
  var $is_active_QMARK_$jscomp$10$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__22841_props__20433__auto__$jscomp$6_vec__22818_vec__22821$$, 1, null);
  $G__22841_props__20433__auto__$jscomp$6_vec__22818_vec__22821$$ = function() {
    return {id:"video", ref:$outer_ctx$jscomp$8$$, className:"relative\n                    h-full\n                    w-full\n                    \n                    overflow-hidden", children:function() {
      var $G__22851$$ = function() {
        return {className:"w-screen h-screen \n                           flex\n                           flex-col\n                           relative \n                           flex items-center justify-items-center justify-center", children:[function() {
          var $G__22871$$ = function() {
            return {className:"absolute\n                                  h-screen\n                                  w-screen", children:[function() {
              var $G__22884$$ = {children:$is_active_QMARK_$jscomp$10$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__22884$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__22884$$);
            }(), function() {
              var $G__22906$$ = {"playback-id":"fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo", "should-play?":$is_active_QMARK_$jscomp$10$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$mobile_hero_section$lazy_video_background$$, $G__22906$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$mobile_hero_section$lazy_video_background$$, $G__22906$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22871$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__22871$$);
        }(), function() {
          var $G__22932$jscomp$1$$ = function() {
            return {className:"absolute deep-yellow opacity-70 w-3/4 p-4", children:function() {
              var $G__22943$$ = function() {
                return {className:"font-futura", children:[function() {
                  var $G__22948$$ = {className:"text-5xl font-bold", children:"venice biennale 2026 Armenia Pavilion"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__22948$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__22948$$);
                }(), function() {
                  var $G__22970_G__22980$jscomp$inline_3372$$ = {className:"font-bold uppercase", children:"The Studio"};
                  $G__22970_G__22980$jscomp$inline_3372$$ = {className:"text-4xl mt-4 italic", children:["Be a Patron of ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__22970_G__22980$jscomp$inline_3372$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__22970_G__22980$jscomp$inline_3372$$)]};
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__22970_G__22980$jscomp$inline_3372$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__22970_G__22980$jscomp$inline_3372$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22943$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__22943$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22932$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22932$jscomp$1$$);
        }(), function() {
          var $G__23028$$ = function() {
            return {className:"absolute bottom-0 pb-4", children:function() {
              var $G__23053$$ = function() {
                return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
                  return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                }};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__23053$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__23053$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23028$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__23028$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22851$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__22851$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22841_props__20433__auto__$jscomp$6_vec__22818_vec__22821$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22841_props__20433__auto__$jscomp$6_vec__22818_vec__22821$$);
};
$amp$components$sections$non_profit$title$$ = function($G__22732_G__22736$jscomp$inline_3757_G__22744$jscomp$inline_3758_props__20433__auto__$jscomp$7$$) {
  $APP.$helix$core$extract_cljs_props$$($G__22732_G__22736$jscomp$inline_3757_G__22744$jscomp$inline_3758_props__20433__auto__$jscomp$7$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__22732_G__22736$jscomp$inline_3757_G__22744$jscomp$inline_3758_props__20433__auto__$jscomp$7$$ = {className:"w-1", children:"support the Armenia Pavilion"};
  $G__22732_G__22736$jscomp$inline_3757_G__22744$jscomp$inline_3758_props__20433__auto__$jscomp$7$$ = {className:"flex flex-col", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__22732_G__22736$jscomp$inline_3757_G__22744$jscomp$inline_3758_props__20433__auto__$jscomp$7$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__22732_G__22736$jscomp$inline_3757_G__22744$jscomp$inline_3758_props__20433__auto__$jscomp$7$$)};
  $G__22732_G__22736$jscomp$inline_3757_G__22744$jscomp$inline_3758_props__20433__auto__$jscomp$7$$ = {className:"lg:flex\n                    w-full\n                    lg:h-2/5\n                    z-20\n                    items-center\n                    justify-between\n                    bg-black/10\n                    lg:p-12 p-4\n                    lg:text-6xl text-3xl\n                    font-futura\n                    font-bold\n                    text-slate-800", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? 
  $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22732_G__22736$jscomp$inline_3757_G__22744$jscomp$inline_3758_props__20433__auto__$jscomp$7$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22732_G__22736$jscomp$inline_3757_G__22744$jscomp$inline_3758_props__20433__auto__$jscomp$7$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22732_G__22736$jscomp$inline_3757_G__22744$jscomp$inline_3758_props__20433__auto__$jscomp$7$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22732_G__22736$jscomp$inline_3757_G__22744$jscomp$inline_3758_props__20433__auto__$jscomp$7$$);
};
$amp$components$sections$non_profit$copy_block$$ = function($G__22779_map__22762_map__22762__$1_props__20433__auto__$jscomp$8_vec__22759$$, $maybe_ref__20434__auto__$jscomp$8$$) {
  $G__22779_map__22762_map__22762__$1_props__20433__auto__$jscomp$8_vec__22759$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__22779_map__22762_map__22762__$1_props__20433__auto__$jscomp$8_vec__22759$$), $maybe_ref__20434__auto__$jscomp$8$$], null);
  $G__22779_map__22762_map__22762__$1_props__20433__auto__$jscomp$8_vec__22759$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__22779_map__22762_map__22762__$1_props__20433__auto__$jscomp$8_vec__22759$$, 0, null);
  $G__22779_map__22762_map__22762__$1_props__20433__auto__$jscomp$8_vec__22759$$ = $APP.$cljs$core$__destructure_map$$($G__22779_map__22762_map__22762__$1_props__20433__auto__$jscomp$8_vec__22759$$);
  var $title$jscomp$16$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__22779_map__22762_map__22762__$1_props__20433__auto__$jscomp$8_vec__22759$$, $APP.$cljs$cst$373$title$$), $copy$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__22779_map__22762_map__22762__$1_props__20433__auto__$jscomp$8_vec__22759$$, $cljs$cst$464$copy$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__22779_map__22762_map__22762__$1_props__20433__auto__$jscomp$8_vec__22759$$ = function() {
    return {className:"flex flex-col mb-12 font-futura", children:[function() {
      var $G__22783$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:$title$jscomp$16$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__22783$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__22783$$);
    }(), function() {
      var $G__22794$jscomp$1$$ = {className:"text-slate-800", children:$copy$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__22794$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__22794$jscomp$1$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22779_map__22762_map__22762__$1_props__20433__auto__$jscomp$8_vec__22759$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__22779_map__22762_map__22762__$1_props__20433__auto__$jscomp$8_vec__22759$$);
};
$amp$components$sections$non_profit$non_profit_section$$ = function($G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$, $maybe_ref__20434__auto__$jscomp$9$$) {
  $G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$), $maybe_ref__20434__auto__$jscomp$9$$], null);
  $G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$, 0, null);
  $G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$ = $APP.$cljs$core$__destructure_map$$($G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$, $APP.$cljs$cst$441$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$, $APP.$cljs$cst$442$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$, $APP.$cljs$cst$443$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$9$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$9$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$, 1, null);
  $G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$non_profit$images$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$, 1, null);
  $APP.$helix$hooks$use_ref$$("image-gallery-container-ref");
  $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$ = function() {
    return {ref:$outer_ctx$jscomp$9$$, className:"h-full \n                          w-full\n                          flex\n                          blue-purple-grad\n                          light-red-grad\n                          items-center\n                          justify-center\n                          font-futura\n                          relative", children:function() {
      var $G__23156$$ = function() {
        return {className:"flex \n                                 flex-col\n                                 overflow-hidden\n                                 relative\n                                 w-full md:w-10/12 lg:w-full\n                                 lg:p-12 p-4", children:[function() {
          var $G__23166$$ = {};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$non_profit$title$$, $G__23166$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$non_profit$title$$, $G__23166$$);
        }(), function() {
          var $G__23172$$ = function() {
            return {className:"flex overflow-hidden relative", children:function() {
              var $G__23178$$ = function() {
                return {className:"lg:w-1/2 \n                                               lg:p-16 p-4", children:[function() {
                  var $G__23188$$ = {title:"", copy:"Funds go to keep THE STUDIO alive for six months in Venice.  Your support ensures the artist’s residency, covers materials and fabrication, pays our production crew, builds and ships the pavilion, and funds public programs and the exhibition catalogue.  Gifts are handled by Fallen Angels, a registered 501(c)(3) non‑profit; donations to a 501(c)(3) are tax‑deductible"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$non_profit$copy_block$$, $G__23188$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$non_profit$copy_block$$, $G__23188$$);
                }(), function() {
                  var $G__23198$$ = function() {
                    return {className:"flex flex-col mb-12 font-futura", children:[function() {
                      var $G__23207$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:"What Your Donation Funds"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__23207$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__23207$$);
                    }(), function() {
                      var $G__23217$$ = function() {
                        return {className:"list-disc list-outside ml-5 text-slate-800", children:[function() {
                          var $G__23221$$ = {children:"Artist \x26 team residency in Venice"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__23221$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__23221$$);
                        }(), function() {
                          var $G__23229$$ = {children:"Fabrication materials and modular blocks"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__23229$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__23229$$);
                        }(), function() {
                          var $G__23239$$ = {children:"Production crew \x26 documentation (video, photography, editing)"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__23239$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__23239$$);
                        }(), function() {
                          var $G__23253$$ = {children:"Pavilion build‑out, shipping \x26 logistics"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__23253$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__23253$$);
                        }(), function() {
                          var $G__23263$$ = {children:"Public programs \x26 education"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__23263$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__23263$$);
                        }(), function() {
                          var $G__23267$$ = {children:"Archival filming \x26 catalogue"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__23267$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__23267$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ul", $G__23217$$) : $APP.$helix$core$jsxs$$.call(null, "ul", $G__23217$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23198$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__23198$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23178$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__23178$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23172$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__23172$$);
        }(), function() {
          var $G__23272$$ = function() {
            return {className:"lg:absolute lg:bottom-[40px] lg:left-1/2 lg:-translate-x-1/2", children:function() {
              var $G__23276$$ = function() {
                return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
                  return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                }};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__23276$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__23276$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23272$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__23272$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23156$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__23156$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__23148_map__23084_map__23084__$1_props__20433__auto__$jscomp$9_vec__23081_vec__23126_vec__23129$$);
};
$amp$components$sections$team_section$team_member_card$$ = function($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$, $data$jscomp$135_maybe_ref__41910__auto__$jscomp$31$$) {
  $G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$), $data$jscomp$135_maybe_ref__41910__auto__$jscomp$31$$], null);
  $G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$, 0, null);
  $G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$ = $APP.$cljs$core$__destructure_map$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$);
  $data$jscomp$135_maybe_ref__41910__auto__$jscomp$31$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$, $APP.$cljs$cst$28$data$$);
  var $images$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$, $cljs$cst$462$images$$), $flash_images_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$, $cljs$cst$469$flash_images_handler$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$ = $APP.$cljs$core$__destructure_map$$($data$jscomp$135_maybe_ref__41910__auto__$jscomp$31$$);
  var $name$jscomp$196$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$, $APP.$cljs$cst$182$name$$), $role$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$, $APP.$cljs$cst$466$role$$), $copy$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$, 
  $cljs$cst$464$copy$$), $social$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$, $cljs$cst$467$social$$), $email$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$, $cljs$cst$468$email$$);
  $G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$ = function() {
    return {className:"flex flex-col\n                    mb-16\n                    font-futura text-gray-800", children:[function() {
      var $G__52605$$ = function() {
        return {className:"relative inline-block\n                           z-30\n                           w-fit\n                           -mb-6", onMouseEnter:function() {
          return $flash_images_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $flash_images_handler$$.$cljs$core$IFn$_invoke$arity$1$($images$jscomp$3$$) : $flash_images_handler$$.call(null, $images$jscomp$3$$);
        }, children:[function() {
          var $G__52614$$ = {className:"absolute inset-y-1 inset-x-0\n                                  translate-x-2 translate-y-2\n                                  warm-yellow\n                                  pointer-events-none"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52614$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52614$$);
        }(), function() {
          var $G__52622$$ = {className:"relative z-10\n                                text-3xl whitespace-nowrap lg:text-2xl font-bold lowercase\n                                pointer-events-none", children:$name$jscomp$196$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52622$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52622$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52605$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52605$$);
    }(), function() {
      var $G__52642$$ = {className:"text-6xl lg:text-8xl font-bold lowercase\n                         z-20\n                         mb-4", children:$role$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52642$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52642$$);
    }(), function() {
      var $G__52652$$ = {className:"text-md text-gray-600", children:$copy$jscomp$3$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52652$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52652$$);
    }(), function() {
      var $G__52664$$ = {className:"my-4\n                          border-gray-900"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("hr", $G__52664$$) : $APP.$helix$core$jsx$$.call(null, "hr", $G__52664$$);
    }(), function() {
      var $G__52674$$ = {className:"text-md text-red-600", children:$social$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52674$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52674$$);
    }(), function() {
      var $G__52685$$ = {className:"text-md text-red-600", children:$email$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52685$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52685$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$31_vec__52574$$);
};
$amp$components$sections$team_section$team_members$$ = function($G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$32_vec__52707$$, $maybe_ref__41910__auto__$jscomp$32$$) {
  $G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$32_vec__52707$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$32_vec__52707$$), $maybe_ref__41910__auto__$jscomp$32$$], null);
  $G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$32_vec__52707$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$32_vec__52707$$, 0, null);
  $G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$32_vec__52707$$ = $APP.$cljs$core$__destructure_map$$($G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$32_vec__52707$$);
  var $flash_images_handler$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$32_vec__52707$$, $cljs$cst$469$flash_images_handler$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$32_vec__52707$$ = function() {
    return {className:"w-full\n                  flex flex-col\n                  items-center justify-center\n                  \n                  ", children:function() {
      var $G__52726$$ = function() {
        return {className:"items-center justify-center\n                         w-full md:w-10/12\n                         lg:pl-32 px-8 py-16", children:[function() {
          var $G__52732$$ = {data:$amp$components$sections$team_section$tony_card_data$$, images:$amp$components$sections$team_section$tony_images$$, "flash-images-handler":$flash_images_handler$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_member_card$$, $G__52732$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_member_card$$, $G__52732$$);
        }(), function() {
          var $G__52744$$ = {data:$amp$components$sections$team_section$tina_card_data$$, images:$amp$components$sections$team_section$tina_images$$, "flash-images-handler":$flash_images_handler$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_member_card$$, $G__52744$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_member_card$$, $G__52744$$);
        }(), function() {
          var $G__52755$$ = {data:$amp$components$sections$team_section$zadik_card_data$$, images:$amp$components$sections$team_section$zadik_images$$, "flash-images-handler":$flash_images_handler$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_member_card$$, $G__52755$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_member_card$$, $G__52755$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52726$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52726$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$32_vec__52707$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$32_vec__52707$$);
};
$amp$components$sections$team_section$team_section$$ = function($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$, $maybe_ref__41910__auto__$jscomp$33$$) {
  $G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$), $maybe_ref__41910__auto__$jscomp$33$$], null);
  $G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$, 0, null);
  $G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$ = $APP.$cljs$core$__destructure_map$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$, $APP.$cljs$cst$441$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$, $APP.$cljs$cst$442$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$, $APP.$cljs$cst$443$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$10$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$10$$);
  var $visited_QMARK_$jscomp$10$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$, 1, null);
  $G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$team_section$zadik_images$$);
  var $images$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$, 0, null), $set_images$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$, 1, null), $is_desktop_QMARK_$jscomp$4$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$(), $image_gallery_container_ref$jscomp$3$$ = 
  $APP.$helix$hooks$use_ref$$("image-gallery-container-ref");
  $G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$ = function() {
    return {ref:$outer_ctx$jscomp$10$$, className:"relative\n                        h-full w-full\n                        flex items-end justify-center\n                        pink-grad blue-light-grad", children:function() {
      var $G__52880$$ = function() {
        return {className:"relative\n                               flex\n                               overflow-hidden", children:[function() {
          var $G__52888_G__52898$jscomp$inline_3669$$ = {className:"overflow-hidden", style:{writingMode:$APP.$helix$impl$props$__GT_js$$("vertical-rl")}, children:"team.թիմ.équipe.equipo.squadra.team.թիմ.équipe.equipo.squadra.team"};
          $G__52888_G__52898$jscomp$inline_3669$$ = {className:"absolute left-0 top-0\n                                      font-futura font-bold text-8xl\n                                      light-blue-font-color\n                                      opacity-30", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52888_G__52898$jscomp$inline_3669$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52888_G__52898$jscomp$inline_3669$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52888_G__52898$jscomp$inline_3669$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52888_G__52898$jscomp$inline_3669$$);
        }(), function() {
          var $G__52922$$ = {"flash-images-handler":$set_images$jscomp$2$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_members$$, $G__52922$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_members$$, $G__52922$$);
        }(), $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$4$$) ? $visited_QMARK_$jscomp$10$$ : $is_desktop_QMARK_$jscomp$4$$) ? function() {
          var $G__52940_G__52948$jscomp$inline_3761_G__52952$jscomp$inline_3762_JSCompiler_inline_result$jscomp$inline_3760$$ = {images:$images$jscomp$4$$, "image-gallery-container-ref":$image_gallery_container_ref$jscomp$3$$};
          $G__52940_G__52948$jscomp$inline_3761_G__52952$jscomp$inline_3762_JSCompiler_inline_result$jscomp$inline_3760$$ = {className:"absolute h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $G__52940_G__52948$jscomp$inline_3761_G__52952$jscomp$inline_3762_JSCompiler_inline_result$jscomp$inline_3760$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, 
          $G__52940_G__52948$jscomp$inline_3761_G__52952$jscomp$inline_3762_JSCompiler_inline_result$jscomp$inline_3760$$)};
          $G__52940_G__52948$jscomp$inline_3761_G__52952$jscomp$inline_3762_JSCompiler_inline_result$jscomp$inline_3760$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52940_G__52948$jscomp$inline_3761_G__52952$jscomp$inline_3762_JSCompiler_inline_result$jscomp$inline_3760$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52940_G__52948$jscomp$inline_3761_G__52952$jscomp$inline_3762_JSCompiler_inline_result$jscomp$inline_3760$$);
          $G__52940_G__52948$jscomp$inline_3761_G__52952$jscomp$inline_3762_JSCompiler_inline_result$jscomp$inline_3760$$ = {ref:$image_gallery_container_ref$jscomp$3$$, className:"relative\n                                        w-8/12\n                                        ml-8\n                                        overflow-hidden", children:$G__52940_G__52948$jscomp$inline_3761_G__52952$jscomp$inline_3762_JSCompiler_inline_result$jscomp$inline_3760$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52940_G__52948$jscomp$inline_3761_G__52952$jscomp$inline_3762_JSCompiler_inline_result$jscomp$inline_3760$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52940_G__52948$jscomp$inline_3761_G__52952$jscomp$inline_3762_JSCompiler_inline_result$jscomp$inline_3760$$);
        }() : null]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52880$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52880$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$33_vec__52827_vec__52847_vec__52850$$);
};
$amp$components$sections$work_overview$work_overview$$ = function($G__22838_props__20433__auto__$jscomp$10$$) {
  $APP.$helix$core$extract_cljs_props$$($G__22838_props__20433__auto__$jscomp$10$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__22838_props__20433__auto__$jscomp$10$$ = function() {
    return {"section-id":"about-work", children:function() {
      var $G__22847$$ = function() {
        return {className:"flex\n               grey-grad\n                  justify-center\n                  items-center\n                  flex-col\n                  w-full", children:function() {
          var $G__22861$$ = function() {
            return {className:"text-slate-300\n                   font-light\n                   flex\n                   justify-center\n                   flex-col\n                   h-full\n                   py-8\n                   md:w-3/4 w-full\n                   p-8\n                   text-lg\n                   lg:text-2xl", children:[function() {
              var $G__22896$$ = {className:"mt-12\n                        mb-16\n                        font-bold\n                        font-futura\n                        text-5xl", children:"THE STUDIO"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__22896$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__22896$$);
            }(), function() {
              var $G__22926_G__22934$jscomp$inline_3383$$ = {className:"font-medium text-pink-600", children:":working-studio "};
              $G__22926_G__22934$jscomp$inline_3383$$ = {className:"mb-8", children:["For the full duration of the Biennale, the Armenia Pavilion becomes a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__22926_G__22934$jscomp$inline_3383$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__22926_G__22934$jscomp$inline_3383$$), "— Zadik Zadikian’s living laboratory, a site where form is made, unmade, and made again."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__22926_G__22934$jscomp$inline_3383$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__22926_G__22934$jscomp$inline_3383$$);
            }(), function() {
              var $G__22952_G__22960$jscomp$inline_3386$$ = {className:"font-medium text-pink-600", children:":7–10 people"};
              $G__22952_G__22960$jscomp$inline_3386$$ = {className:"mb-8", children:["Each day, ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__22952_G__22960$jscomp$inline_3386$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__22952_G__22960$jscomp$inline_3386$$), " move through the space — assistants, fabricators, editors, camera crew — all part of a continuous organism of creation."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__22952_G__22960$jscomp$inline_3386$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__22952_G__22960$jscomp$inline_3386$$);
            }(), function() {
              var $G__22966_G__22978$jscomp$inline_3389$$ = {className:"font-medium text-pink-600", children:":architecture-of-change"};
              $G__22966_G__22978$jscomp$inline_3389$$ = {className:"mb-8", children:["They produce thousands of modular units: lightweight foam forms hand-coated in thin plaster, each one a small gesture in a much larger ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__22966_G__22978$jscomp$inline_3389$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__22966_G__22978$jscomp$inline_3389$$), "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__22966_G__22978$jscomp$inline_3389$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__22966_G__22978$jscomp$inline_3389$$);
            }(), function() {
              var $G__22989_G__22993$jscomp$inline_3392$$ = {className:"font-medium text-pink-600", children:"breath"};
              $G__22989_G__22993$jscomp$inline_3392$$ = {className:"mb-8", children:["These units are stacked into structures — walls, pyramids, horizons, interior architectures — shifting daily as fragile formations rise and dissolve like ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__22989_G__22993$jscomp$inline_3392$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__22989_G__22993$jscomp$inline_3392$$), "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__22989_G__22993$jscomp$inline_3392$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__22989_G__22993$jscomp$inline_3392$$);
            }(), function() {
              var $G__23018_G__23041$jscomp$inline_3395$$ = {className:"font-medium text-pink-600", children:":The-artwork"};
              $G__23018_G__23041$jscomp$inline_3395$$ = {className:"mb-12 italic", children:["Nothing is static. Nothing is final. ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__23018_G__23041$jscomp$inline_3395$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__23018_G__23041$jscomp$inline_3395$$), " is the cycle itself — the rhythm of making, unmaking, and returning again to zero."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__23018_G__23041$jscomp$inline_3395$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__23018_G__23041$jscomp$inline_3395$$);
            }(), function() {
              var $G__23080$$ = {className:"mb-8 italic", children:"In Minor Keys — The Philosophy of the Work"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__23080$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__23080$$);
            }(), function() {
              var $G__23093_G__23101$jscomp$inline_3398$$ = {className:"font-medium text-pink-600", children:":Structure"};
              $G__23093_G__23101$jscomp$inline_3398$$ = {className:"mb-8", children:["Here, repetition becomes a meditation. Labor becomes devotion. ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__23093_G__23101$jscomp$inline_3398$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__23093_G__23101$jscomp$inline_3398$$), " is only a temporary embodiment of an ongoing frequency."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__23093_G__23101$jscomp$inline_3398$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__23093_G__23101$jscomp$inline_3398$$);
            }(), function() {
              var $G__23109_G__23115$jscomp$inline_3401$$ = {className:"font-medium text-pink-600", children:":organism"};
              $G__23109_G__23115$jscomp$inline_3401$$ = {className:"mb-8", children:["The studio behaves like an ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__23109_G__23115$jscomp$inline_3401$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__23109_G__23115$jscomp$inline_3401$$), " — sensitive, cyclical, and always in motion, responding to the theme of “In Minor Keys” through gestures rather than declarations."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__23109_G__23115$jscomp$inline_3401$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__23109_G__23115$jscomp$inline_3401$$);
            }(), function() {
              var $G__23121_G__23133$jscomp$inline_3404$$ = {className:"font-medium text-pink-600", children:":quiet-resilience"};
              $G__23121_G__23133$jscomp$inline_3404$$ = {className:"mb-8", children:["The material language is intentionally light: foam, plaster, dust. Fragile materials meet fragile cycles — a nod to Armenian histories of endurance, where the act of repeating becomes a form of survival, a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__23121_G__23133$jscomp$inline_3404$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__23121_G__23133$jscomp$inline_3404$$), 
              "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__23121_G__23133$jscomp$inline_3404$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__23121_G__23133$jscomp$inline_3404$$);
            }(), function() {
              var $G__23144$$ = {className:"mb-8", children:"Nothing here reaches for spectacle. The work moves in frequencies, not fireworks. What matters is the pulse — the rhythm of stacking, filming, dismantling, and returning again to the beginning."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__23144$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__23144$$);
            }(), function() {
              var $G__23164_G__23180$jscomp$inline_3407$$ = {className:"font-medium text-pink-600", children:":score"};
              $G__23164_G__23180$jscomp$inline_3407$$ = {className:"mb-8", children:["This cycle functions like a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__23164_G__23180$jscomp$inline_3407$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__23164_G__23180$jscomp$inline_3407$$), ": a choreography of hands, blocks, dust, light. Each day, the studio composes itself anew, only to erase itself by night."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__23164_G__23180$jscomp$inline_3407$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__23164_G__23180$jscomp$inline_3407$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22861$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__22861$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22847$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22847$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__22838_props__20433__auto__$jscomp$10$$, "about-work") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__22838_props__20433__auto__$jscomp$10$$, "about-work");
};
$APP.$amp$views$landing_view$landing_view$$ = function($G__23459$jscomp$1_props__20433__auto__$jscomp$11$$) {
  $APP.$helix$core$extract_cljs_props$$($G__23459$jscomp$1_props__20433__auto__$jscomp$11$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $container_ref$$ = $APP.$helix$hooks$use_ref$$("container-ref"), $is_desktop_QMARK_$jscomp$5$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__23459$jscomp$1_props__20433__auto__$jscomp$11$$ = function() {
    return {ref:$container_ref$$, className:"", children:[$APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$5$$) ? function() {
      var $G__23483$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$navs$logo_nav$logo_nav$$, $G__23483$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$navs$logo_nav$logo_nav$$, $G__23483$$);
    }() : null, function() {
      var $G__23525$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$navs$donation_nav$donation_nav$$, $G__23525$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$navs$donation_nav$donation_nav$$, $G__23525$$);
    }(), function() {
      var $G__23527_G__23537$jscomp$inline_3410$$ = {"total-sections":3};
      $G__23527_G__23537$jscomp$inline_3410$$ = {className:"fixed z-20 justify-center items-center top-1/2 -translate-y-1/2 left-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$navs$progress_menu$progress_menu$$, $G__23527_G__23537$jscomp$inline_3410$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$navs$progress_menu$progress_menu$$, $G__23527_G__23537$jscomp$inline_3410$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23527_G__23537$jscomp$inline_3410$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__23527_G__23537$jscomp$inline_3410$$);
    }(), $APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$5$$) ? function() {
      var $G__23549$$ = function() {
        return {"section-id":"video", children:function() {
          var $G__23564$$ = function() {
            return {className:"w-screen h-screen relative", children:[function() {
              var $G__23577_G__23590$jscomp$inline_3413$$ = {"playback-id":"fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo"};
              $G__23577_G__23590$jscomp$inline_3413$$ = {className:"absolute w-full h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$video_section$video_section$$, $G__23577_G__23590$jscomp$inline_3413$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$video_section$video_section$$, $G__23577_G__23590$jscomp$inline_3413$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23577_G__23590$jscomp$inline_3413$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__23577_G__23590$jscomp$inline_3413$$);
            }(), function() {
              var $G__23605_G__23610$jscomp$inline_3077$$ = {};
              $G__23605_G__23610$jscomp$inline_3077$$ = {className:"absolute w-full h-full pointer-events-none", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$playful_titles$playful_titles$$, $G__23605_G__23610$jscomp$inline_3077$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$playful_titles$playful_titles$$, $G__23605_G__23610$jscomp$inline_3077$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23605_G__23610$jscomp$inline_3077$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__23605_G__23610$jscomp$inline_3077$$);
            }(), function() {
              var $G__23613$$ = function() {
                return {className:"absolute bottom-[40px] left-1/2 -translate-x-1/2", children:function() {
                  var $G__23619$$ = function() {
                    return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
                      return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                    }};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__23619$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__23619$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23613$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__23613$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23564$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__23564$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__23549$$, "video") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__23549$$, "video");
    }() : function() {
      var $G__23635_G__23695$jscomp$inline_3080$$ = {};
      $G__23635_G__23695$jscomp$inline_3080$$ = {"section-id":"mobile-hero", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, $G__23635_G__23695$jscomp$inline_3080$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, $G__23635_G__23695$jscomp$inline_3080$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__23635_G__23695$jscomp$inline_3080$$, "mobile-hero") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__23635_G__23695$jscomp$inline_3080$$, "mobile-hero");
    }(), $APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$5$$) ? function() {
      var $G__23701_G__23710$jscomp$inline_3083$$ = {};
      $G__23701_G__23710$jscomp$inline_3083$$ = {"section-id":"hero", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$hero_header$hero_header$$, $G__23701_G__23710$jscomp$inline_3083$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$hero_header$hero_header$$, $G__23701_G__23710$jscomp$inline_3083$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__23701_G__23710$jscomp$inline_3083$$, "hero") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__23701_G__23710$jscomp$inline_3083$$, "hero");
    }() : null, function() {
      var $G__23712$$ = function() {
        return {"img-src":"https://atd-722658831.imgix.net/stacks/FileName_205932_001DenoisedBeauty_ViewLayer_012.tif", children:function() {
          var $G__23716$$ = function() {
            return {children:[function() {
              var $G__23720$$ = {children:"Rendering - "};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__23720$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__23720$$);
            }(), function() {
              var $G__23725$$ = {className:"italic font-bold", children:"THE ORANGE ONE"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__23725$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__23725$$);
            }(), function() {
              var $G__23729$$ = {children:" - © Zadik Zadikian 2026"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__23729$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__23729$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23716$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__23716$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$views$hero_image_view$hero_image_view$$, $G__23712$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$views$hero_image_view$hero_image_view$$, $G__23712$$);
    }(), function() {
      var $G__23735$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$work_overview$work_overview$$, $G__23735$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$work_overview$work_overview$$, $G__23735$$);
    }(), function() {
      var $G__23737$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_section$$, $G__23737$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_section$$, $G__23737$$);
    }(), function() {
      var $G__23740$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$about_biennale_section$$, $G__23740$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$about_biennale_section$$, $G__23740$$);
    }(), function() {
      var $G__23742$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$non_profit$non_profit_section$$, $G__23742$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$non_profit$non_profit_section$$, $G__23742$$);
    }(), function() {
      var $G__23744$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$sections$contact_section$contact_section$$, $G__23744$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$sections$contact_section$contact_section$$, $G__23744$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__23459$jscomp$1_props__20433__auto__$jscomp$11$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__23459$jscomp$1_props__20433__auto__$jscomp$11$$);
};
$cljs$cst$462$images$$ = new $APP.$cljs$core$Keyword$$(null, "images", "images", 1757475080);
$cljs$cst$446$from$$ = new $APP.$cljs$core$Keyword$$(null, "from", "from", 1815293044);
$cljs$cst$454$on_click_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-click-handler", "on-click-handler", 746440723);
$cljs$cst$449$cta_title$$ = new $APP.$cljs$core$Keyword$$(null, "cta-title", "cta-title", -565700885);
$cljs$cst$463$image_gallery_container_ref$$ = new $APP.$cljs$core$Keyword$$(null, "image-gallery-container-ref", "image-gallery-container-ref", 984527810);
$cljs$cst$459$target_ref$$ = new $APP.$cljs$core$Keyword$$(null, "target-ref", "target-ref", -164384803);
$cljs$cst$457$writing$$ = new $APP.$cljs$core$Keyword$$(null, "writing", "writing", -1486865108);
$cljs$cst$465$stagger$$ = new $APP.$cljs$core$Keyword$$(null, "stagger", "stagger", -689791930);
$cljs$cst$469$flash_images_handler$$ = new $APP.$cljs$core$Keyword$$(null, "flash-images-handler", "flash-images-handler", -431066401);
$cljs$cst$460$other$$ = new $APP.$cljs$core$Keyword$$(null, "other", "other", 995793544);
$cljs$cst$456$on_mouse_out_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-mouse-out-handler", "on-mouse-out-handler", -2132576332);
$cljs$cst$455$on_mouse_over_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-mouse-over-handler", "on-mouse-over-handler", -1708524524);
$cljs$cst$458$click$$ = new $APP.$cljs$core$Keyword$$(null, "click", "click", 1912301393);
$cljs$cst$467$social$$ = new $APP.$cljs$core$Keyword$$(null, "social", "social", -1560314971);
$cljs$cst$445$quote$$ = new $APP.$cljs$core$Keyword$$(null, "quote", "quote", -262615245);
$cljs$cst$451$hover_title_ref$$ = new $APP.$cljs$core$Keyword$$(null, "hover-title-ref", "hover-title-ref", -819024146);
$cljs$cst$468$email$$ = new $APP.$cljs$core$Keyword$$(null, "email", "email", 1415816706);
$cljs$cst$447$to$$ = new $APP.$cljs$core$Keyword$$(null, "to", "to", 192099007);
$cljs$cst$453$is_playing_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "is-playing?", "is-playing?", -274112098);
$cljs$cst$464$copy$$ = new $APP.$cljs$core$Keyword$$(null, "copy", "copy", -1077617309);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("landing-view");
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$fragments$about_me$about_event$$, "", null, null) : (void 0).call(null, $amp$components$fragments$about_me$about_event$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$fragments$about_me$about_event$$, "amp.components.fragments.about-me/about-event"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$quote_section$quote_section$$, '(hooks/use-ref "outer-ctx")(hooks/use-ref "text-ref")(hooks/use-state (new (.-timeline gsap) {:paused true}))(use-scroll-trigger outer-ctx)(hooks/use-layout-effect [quote text-ref is-visible?] (let [splitter (when (clojure.core/deref text-ref) (new SplitText (clojure.core/deref text-ref) {:type "words,chars", :charsClass "playable-type-char"})) chars (when splitter (.-chars splitter)) ctx (.context gsap (fn [] (-\x3e tl (.from chars from-transition) (.to chars to-transition) (.timeScale 4))) outer-ctx)] (fn [] (.revert ctx))))(hooks/use-effect [is-active?] (when is-active? (.play tl)))', 
null, null) : (void 0).call(null, $amp$components$sections$quote_section$quote_section$$, '(hooks/use-ref "outer-ctx")(hooks/use-ref "text-ref")(hooks/use-state (new (.-timeline gsap) {:paused true}))(use-scroll-trigger outer-ctx)(hooks/use-layout-effect [quote text-ref is-visible?] (let [splitter (when (clojure.core/deref text-ref) (new SplitText (clojure.core/deref text-ref) {:type "words,chars", :charsClass "playable-type-char"})) chars (when splitter (.-chars splitter)) ctx (.context gsap (fn [] (-\x3e tl (.from chars from-transition) (.to chars to-transition) (.timeScale 4))) outer-ctx)] (fn [] (.revert ctx))))(hooks/use-effect [is-active?] (when is-active? (.play tl)))', 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$quote_section$quote_section$$, "amp.components.sections.quote-section/quote-section"));
var $amp$components$sections$video_section$lazy_video_background$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$components$elements$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$video_section$video_section$$, '(use-main-state)(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, 
null) : (void 0).call(null, $amp$components$sections$video_section$video_section$$, '(use-main-state)(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$video_section$video_section$$, "amp.components.sections.video-section/video-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$ui$lower_panel_cta$lower_panel_cta$$, "", null, null) : (void 0).call(null, $amp$components$ui$lower_panel_cta$lower_panel_cta$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$ui$lower_panel_cta$lower_panel_cta$$, "amp.components.ui.lower-panel-cta/lower-panel-cta"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$hero_header$hero_header$$, '(hooks/use-ref "outer-ctx")(use-scroll-to-id)(use-scroll-trigger outer-ctx {:end "bottom"})', null, null) : 
(void 0).call(null, $amp$components$hero_header$hero_header$$, '(hooks/use-ref "outer-ctx")(use-scroll-to-id)(use-scroll-trigger outer-ctx {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$hero_header$hero_header$$, "amp.components.hero-header/hero-header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$navs$donation_nav$donation_nav$$, '(hooks/use-ref "comp-ref")(use-touch-enabled)(use-window-size)(use-scroll-trigger comp-ref :start (fn [] (win-utils/height)) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y (- (:height dimensions))}, :is-on? is-active?})', 
null, null) : (void 0).call(null, $amp$components$navs$donation_nav$donation_nav$$, '(hooks/use-ref "comp-ref")(use-touch-enabled)(use-window-size)(use-scroll-trigger comp-ref :start (fn [] (win-utils/height)) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y (- (:height dimensions))}, :is-on? is-active?})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$navs$donation_nav$donation_nav$$, 
"amp.components.navs.donation-nav/donation-nav"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$navs$logo_nav$logo_nav$$, '(hooks/use-ref "comp-ref")(use-scroll-trigger comp-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y -250}, :is-on? is-active?})', 
null, null) : (void 0).call(null, $amp$components$navs$logo_nav$logo_nav$$, '(hooks/use-ref "comp-ref")(use-scroll-trigger comp-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y -250}, :is-on? is-active?})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$navs$logo_nav$logo_nav$$, 
"amp.components.navs.logo-nav/logo-nav"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$hover_title$hover_title$$, "", null, null) : (void 0).call(null, $amp$components$hover_title$hover_title$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$hover_title$hover_title$$, 
"amp.components.hover-title/hover-title"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$ui$playable_text$playable_text$$, '(hooks/use-ref "outer-ctx")(hooks/use-ref "background-ref")(hooks/use-ref "text-ref")(hooks/use-state (new (.-timeline gsap) {:paused true}))(hooks/use-layout-effect [text text-ref is-playing?] (let [splitter (when (clojure.core/deref text-ref) (new SplitText (clojure.core/deref text-ref) {:type "words,chars", :charsClass "playable-type-char"})) chars (when splitter (.-chars splitter)) ctx (.context gsap (fn [] (-\x3e tl (.from (clojure.core/deref background-ref) {:width "0", :duration 0.15, :ease "expo.inOut"}) (.to (clojure.core/deref background-ref) {:width "100%", :duration 0.15, :ease "expo.inOut"}) (.from chars {:opacity 0, :duration 0.15, :ease "expo.inOut", :stagger 0.025}) (.to chars {:opacity 1, :duration 0.15, :ease "expo.inOut", :stagger 0.025}))) outer-ctx)] (fn [] (.revert ctx))))(hooks/use-effect [is-playing?] (if is-playing? (.play tl) (.reverse tl)))', 
null, null) : (void 0).call(null, $amp$components$ui$playable_text$playable_text$$, '(hooks/use-ref "outer-ctx")(hooks/use-ref "background-ref")(hooks/use-ref "text-ref")(hooks/use-state (new (.-timeline gsap) {:paused true}))(hooks/use-layout-effect [text text-ref is-playing?] (let [splitter (when (clojure.core/deref text-ref) (new SplitText (clojure.core/deref text-ref) {:type "words,chars", :charsClass "playable-type-char"})) chars (when splitter (.-chars splitter)) ctx (.context gsap (fn [] (-\x3e tl (.from (clojure.core/deref background-ref) {:width "0", :duration 0.15, :ease "expo.inOut"}) (.to (clojure.core/deref background-ref) {:width "100%", :duration 0.15, :ease "expo.inOut"}) (.from chars {:opacity 0, :duration 0.15, :ease "expo.inOut", :stagger 0.025}) (.to chars {:opacity 1, :duration 0.15, :ease "expo.inOut", :stagger 0.025}))) outer-ctx)] (fn [] (.revert ctx))))(hooks/use-effect [is-playing?] (if is-playing? (.play tl) (.reverse tl)))', 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$ui$playable_text$playable_text$$, "amp.components.ui.playable-text/playable-text"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$nav_link$nav_link$$, '(hooks/use-ref "link-ref")(hooks/use-state false)', null, null) : (void 0).call(null, $amp$components$nav_link$nav_link$$, 
'(hooks/use-ref "link-ref")(hooks/use-state false)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$nav_link$nav_link$$, "amp.components.nav-link/nav-link"));
var $amp$components$playful_titles$titles$$ = new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["venice", "Venice is where everything begins again."], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["biennale", "Biennale means art alive, always becoming."], null), new $APP.$cljs$core$PersistentVector$$(null, 
2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["2026", "2026 marks our shift into becoming."], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["armenian", "Armenian means rhythm, grit, and quiet power."], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["pavilion", "A pavilion becomes a world in motion."], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$playful_titles$hero_menu$$, "", null, null) : (void 0).call(null, $amp$components$playful_titles$hero_menu$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$playful_titles$hero_menu$$, 
"amp.components.playful-titles/hero-menu"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$playful_titles$playful_titles$$, '(use-main-state)(hooks/use-ref "hover-title-ref")(hooks/use-state nil)(hooks/use-callback [hover-title-ref] (fn [{:keys [section-id]}] (set-current-section! section-id) (.to gsap (clojure.core/deref hover-title-ref) {:opacity 0.8, :duration 0.2})))(hooks/use-callback [hover-title-ref] (fn [] (.to gsap (clojure.core/deref hover-title-ref) {:opacity 0, :duration 0.2})))', 
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
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$lazy_image_gallery$image_layer$$, '(hooks/use-ref "base-ref")(hooks/use-ref "trans-ref")(hooks/use-state nil)(hooks/use-state nil)(hooks/use-layout-effect [img-src current-src] (when (not (\x3d current-src img-src)) (set-prev-src current-src)))', 
null, null) : (void 0).call(null, $amp$components$elements$lazy_image_gallery$image_layer$$, '(hooks/use-ref "base-ref")(hooks/use-ref "trans-ref")(hooks/use-state nil)(hooks/use-state nil)(hooks/use-layout-effect [img-src current-src] (when (not (\x3d current-src img-src)) (set-prev-src current-src)))', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$lazy_image_gallery$image_layer$$, "amp.components.elements.lazy-image-gallery/image-layer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$lazy_image_gallery$caption_layer$$, "", null, null) : (void 0).call(null, $amp$components$elements$lazy_image_gallery$caption_layer$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$lazy_image_gallery$caption_layer$$, "amp.components.elements.lazy-image-gallery/caption-layer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$lazy_image_gallery$image_card$$, '(hooks/use-ref "trigger-ref")(hooks/use-ref "target-ref")(use-hover-animations trigger-ref {:target target-ref, :initial {:y 100, :opacity 0}, :over {:y 0, :opacity 1, :duration 0.25}, :out {:y 100, :opacity 0, :duration 0.125}})', 
null, null) : (void 0).call(null, $amp$components$elements$lazy_image_gallery$image_card$$, '(hooks/use-ref "trigger-ref")(hooks/use-ref "target-ref")(use-hover-animations trigger-ref {:target target-ref, :initial {:y 100, :opacity 0}, :over {:y 0, :opacity 1, :duration 0.25}, :out {:y 100, :opacity 0, :duration 0.125}})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$lazy_image_gallery$image_card$$, "amp.components.elements.lazy-image-gallery/image-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, '(hooks/use-ref "outer-ctx")(use-container-size image-gallery-container-ref)(hooks/use-state (build-masonary-grid-slots 3 8 200))(hooks/use-layout-effect [(:width gallery-dimensions) (:height gallery-dimensions)] (set-masonary-grid-slots (build-masonary-grid-slots 3 (:width gallery-dimensions) (:height gallery-dimensions))))', 
null, null) : (void 0).call(null, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, '(hooks/use-ref "outer-ctx")(use-container-size image-gallery-container-ref)(hooks/use-state (build-masonary-grid-slots 3 8 200))(hooks/use-layout-effect [(:width gallery-dimensions) (:height gallery-dimensions)] (set-masonary-grid-slots (build-masonary-grid-slots 3 (:width gallery-dimensions) (:height gallery-dimensions))))', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, 
"amp.components.elements.lazy-image-gallery/lazy-image-gallery"));
var $amp$components$sections$about_biennale$images$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/biennale/metalocus_venice-biennale-corderie-arsenale-photo-giulio-squillacciotti_01.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/biennale/arsenale-venezia.jpg", 
$APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/biennale/6431873131_844b5c6d48_b-112659047.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/biennale/Edificio-E-delle-Sale-dArmi-sud-Arsenale-di-Venezia_01-406863818.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/biennale/GettyImages-1396739612-2882003488.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/biennale/arsenale-venezia-cosa-vedere-come-visitare-408454160.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/biennale/Pavilions-tours-plan.png", 
$APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/biennale/Pavilions-tours-plan.png", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/biennale/IMG_1754-scaled-1386547518.jpg", $APP.$cljs$cst$432$caption$$, null], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$about_biennale$title$$, "", null, null) : (void 0).call(null, $amp$components$sections$about_biennale$title$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$about_biennale$title$$, "amp.components.sections.about-biennale/title"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$about_biennale$copy_block$$, "", null, null) : (void 0).call(null, $amp$components$sections$about_biennale$copy_block$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$about_biennale$copy_block$$, "amp.components.sections.about-biennale/copy-block"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$about_biennale$about_biennale_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', 
null, null) : (void 0).call(null, $amp$components$sections$about_biennale$about_biennale_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$about_biennale$about_biennale_section$$, "amp.components.sections.about-biennale/about-biennale-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$writing_card$writing_card$$, '(hooks/use-ref "outer-ctx")', null, null) : (void 0).call(null, $amp$components$writing_card$writing_card$$, 
'(hooks/use-ref "outer-ctx")', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$writing_card$writing_card$$, "amp.components.writing-card/writing-card"));
var $amp$components$sections$mobile_hero_section$lazy_video_background$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$components$elements$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, '(use-main-state)(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', 
null, null) : (void 0).call(null, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, '(use-main-state)(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, "amp.components.sections.mobile-hero-section/mobile-hero-section"));
var $amp$components$sections$non_profit$images$$ = new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/biennale/metalocus_venice-biennale-corderie-arsenale-photo-giulio-squillacciotti_01.jpg", $APP.$cljs$cst$432$caption$$, "Arsenale", $APP.$cljs$cst$433$credit$$, "Artnews"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$421$src$$, 
"https://atd-722658831.imgix.net/biennale/arsenale-venezia.jpg", $APP.$cljs$cst$432$caption$$, "Arsenale", $APP.$cljs$cst$433$credit$$, "Artnews"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/biennale/6431873131_844b5c6d48_b-112659047.jpg", $APP.$cljs$cst$432$caption$$, "Arsenale", $APP.$cljs$cst$433$credit$$, "Artnews"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$title$$, "", null, null) : (void 0).call(null, $amp$components$sections$non_profit$title$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$title$$, 
"amp.components.sections.non-profit/title"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$copy_block$$, "", null, null) : (void 0).call(null, $amp$components$sections$non_profit$copy_block$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$copy_block$$, "amp.components.sections.non-profit/copy-block"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$non_profit_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', 
null, null) : (void 0).call(null, $amp$components$sections$non_profit$non_profit_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$non_profit_section$$, "amp.components.sections.non-profit/non-profit-section"));
var $amp$components$sections$team_section$zadik_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/zadik/shovel-nails.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/zadik/zz-portrait.tiff", $APP.$cljs$cst$432$caption$$, 
null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/zadik/single_stack_1970s.tif", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/zadik/golden_water_heater.tif", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-10.psd", 
$APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-76.psd", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/zadik/golden_kitchen.tif", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/2.webp", 
$APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/zadik/ps1_entrance_1.tif", 
$APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-18.psd", 
$APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/2.webp?fit\x3dcrop\x26w\x3d214\x26h\x3d172\x26dpr\x3d2\x26q\x3d50\x26auto\x3dformat%2Ccompress\x26cacheID\x3d1763536997", $APP.$cljs$cst$432$caption$$, null], null)], null), $amp$components$sections$team_section$tina_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 20, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/2.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$432$caption$$, null], null)], null), $amp$components$sections$team_section$tony_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 22, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", 
$APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, 
[$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, 
"https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$432$caption$$, 
null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$432$caption$$, null], null), 
new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, 
"https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", 
$APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, 
[$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$432$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$421$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", 
$APP.$cljs$cst$432$caption$$, null], null)], null), $amp$components$sections$team_section$tony_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$182$name$$, "Tony Shafrazi", $APP.$cljs$cst$466$role$$, "Curator", $cljs$cst$467$social$$, "@tonyshafrazi", $cljs$cst$468$email$$, "tony.shafrazi@armenianpavilion2026.org", $cljs$cst$464$copy$$, "Tony Shafrazi (b. 1943, Abadan, Iran) is a renowned art dealer, gallerist, and curator whose career has shaped the contemporary art world. Trained at the Royal College of Art in London, he moved to New York in 1969 and soon became closely associated with figures such as Andy Warhol, Roy Lichtenstein, and Leo Castelli. His early years were marked by bold artistic interventions, before establishing himself as one of the leading dealers of his generation.\n                      \n                      In 1979, he opened the Tony Shafrazi Gallery in New York, championing artists like Jean-Michel Basquiat, Keith Haring, and Kenny Scharf, alongside exhibitions of Picasso, Francis Bacon, Jasper Johns, Carl Andre, and Warhol. Internationally, he advised the Tehran Museum of Contemporary Art in assembling one of the most significant collections of Western modernism outside Europe and the United States.\n                      \n                      Shafrazi first met Zadik Zadikian while the artist was working with Richard Serra, later including him in his historic Tehran exhibition before the 1979 Revolution. Their collaboration forged a lasting connection, and Shafrazi has supported Zadikian’s work over the decades. For this project, he brings unrivaled experience, a global network, and a deep commitment to presenting Armenia on the world stage at the Venice Biennale."], 
null), $amp$components$sections$team_section$tina_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$182$name$$, "Tina Chakarian", $APP.$cljs$cst$466$role$$, "Curator", $cljs$cst$467$social$$, "@tinachakarian", $cljs$cst$468$email$$, "tina.chakarian@armenianpavilion2026.org", $cljs$cst$464$copy$$, "Tina Chakarian is a curator currently living in Boston and Yerevan. \n\nBorn and raised in Beirut, Lebanon, she studied Visual Arts at UCLA and Tufts University. \n\nShe was previously the Development Director at the Armenian Museum of America and an adjunct Professor at several Boston based universities.  Tina serves as a Principal and Creative Director at Chakarian Design Group, LLC, and, co-curates the Midway Artists Studios in Boston. \n\nAs a visual artist, Tina has exhibited a number of installations in the U.S., Lebanon and Armenia, including “Living Utopias” (Yerevan, 2018). \n\nShe has decades of experience in the field of philanthropy, where she combines her skills as an artist and fundraiser, to help support organizations and initiatives closest to her heart. \n"], 
null), $amp$components$sections$team_section$zadik_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$182$name$$, "Zadik Zadikian", $APP.$cljs$cst$466$role$$, "Artist", $cljs$cst$467$social$$, "@zadikzadikian", $cljs$cst$468$email$$, "zadik.zadikian@armenianpavilion2026.org", $cljs$cst$464$copy$$, "Born in 1948 in Yerevan, Soviet Armenia, Zadik Zadikian entered the Art Academy at fifteen and exhibited in Yerevan and Moscow before escaping the Soviet Union at nineteen by swimming across the Arax River in winter. In 1969 he arrived in San Francisco, apprenticing with sculptor Beniamino Bufano, and later moved to New York where he assisted Richard Serra on his first monumental oil-stick wall drawings—one of which was named after him. These encounters with scale, discipline, and radical form became the foundation of his artistic language.\n\nIn 1976, Zadikian gilded his entire 10,000-square-foot studio in industrial gold, an immersive act of transformation that anticipated his project 1000 Bricks Gilded in 24-Karat Gold Leaf (1978). Since then, gold has remained his central medium—at once alchemical and architectural, extravagant yet elemental. His brick-like forms distill structure into essence, revealing permanence through repetition and beauty within order.\n\nReflecting on exile, Zadikian writes: “When I escaped, I lost everything—my family, my country, my world. That void became my canvas. Gold is the witness. Beauty is found within structure. Repetition is the foundation of change.” Now based in Los Angeles, he has recently exhibited at the Brooklyn Museum and Tony Shafrazi’s Gallery Without Walls."], 
null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$team_section$team_member_card$$, "", null, null) : (void 0).call(null, $amp$components$sections$team_section$team_member_card$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$team_section$team_member_card$$, "amp.components.sections.team-section/team-member-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$team_section$team_members$$, "", null, null) : (void 0).call(null, $amp$components$sections$team_section$team_members$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$team_section$team_members$$, "amp.components.sections.team-section/team-members"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$team_section$team_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state zadik-images)(use-touch-enabled)(hooks/use-ref "image-gallery-container-ref")', 
null, null) : (void 0).call(null, $amp$components$sections$team_section$team_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state zadik-images)(use-touch-enabled)(hooks/use-ref "image-gallery-container-ref")', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$team_section$team_section$$, "amp.components.sections.team-section/team-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$work_overview$work_overview$$, "", null, null) : (void 0).call(null, $amp$components$sections$work_overview$work_overview$$, "", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$work_overview$work_overview$$, "amp.components.sections.work-overview/work-overview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$views$landing_view$landing_view$$, '(hooks/use-ref "container-ref")(use-touch-enabled)', null, null) : (void 0).call(null, $APP.$amp$views$landing_view$landing_view$$, 
'(hooks/use-ref "container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$views$landing_view$landing_view$$, "amp.views.landing-view/landing-view"));
$APP.$module$contents$shadow$loader_mm$$.$setLoaded$();

}).call(this);