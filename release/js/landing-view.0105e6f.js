(function(){
'use strict';
var $cljs$core$rand_int$$, $amp$components$fragments$about_me$about_event$$, $amp$components$sections$quote_section$quote_section$$, $amp$components$sections$video_section$video_section$$, $amp$components$ui$lower_panel_cta$lower_panel_cta$$, $amp$components$hero_header$hero_header$$, $amp$hooks$use_window_resize$use_window_size$$, $amp$components$navs$donation_nav$donation_nav$$, $amp$components$navs$logo_nav$logo_nav$$, $amp$components$hover_title$hover_title$$, $amp$components$ui$playable_text$playable_text$$, 
$amp$components$nav_link$nav_link$$, $amp$components$playful_titles$hero_menu$$, $amp$components$playful_titles$playful_titles$$, $amp$components$elements$lazy_image_gallery$check_column_dimensions$$, $amp$components$elements$lazy_image_gallery$aspect_column$$, $amp$components$elements$lazy_image_gallery$find_closest_size$$, $amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$, $amp$components$elements$lazy_image_gallery$image_layer$$, $amp$components$elements$lazy_image_gallery$caption_layer$$, 
$amp$components$elements$lazy_image_gallery$image_card$$, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $amp$components$sections$about_biennale$title$$, $amp$components$sections$about_biennale$copy_block$$, $amp$components$sections$about_biennale$about_biennale_section$$, $amp$components$writing_card$writing_card$$, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, $amp$components$sections$non_profit$title$$, $amp$components$sections$non_profit$copy_block$$, 
$amp$components$sections$non_profit$non_profit_section$$, $amp$components$sections$team_section$team_member_card$$, $amp$components$sections$team_section$team_members$$, $amp$components$sections$team_section$team_section$$, $amp$components$sections$work_overview$work_overview$$, $cljs$cst$464$images$$, $cljs$cst$457$on_mouse_over_handler$$, $cljs$cst$448$from$$, $cljs$cst$460$click$$, $cljs$cst$469$social$$, $cljs$cst$447$quote$$, $cljs$cst$456$on_click_handler$$, $cljs$cst$453$hover_title_ref$$, 
$cljs$cst$451$cta_title$$, $cljs$cst$465$image_gallery_container_ref$$, $cljs$cst$454$text$$, $cljs$cst$461$target_ref$$, $cljs$cst$470$email$$, $cljs$cst$459$writing$$, $cljs$cst$449$to$$, $cljs$cst$467$stagger$$, $cljs$cst$471$flash_images_handler$$, $cljs$cst$455$is_playing_QMARK_$$, $cljs$cst$462$other$$, $cljs$cst$466$copy$$, $cljs$cst$458$on_mouse_out_handler$$;
$cljs$core$rand_int$$ = function($n$jscomp$162$$) {
  return Math.floor(Math.random() * $n$jscomp$162$$);
};
$amp$components$fragments$about_me$about_event$$ = function($G__51700_props__41909__auto__$jscomp$25$$) {
  $APP.$helix$core$extract_cljs_props$$($G__51700_props__41909__auto__$jscomp$25$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__51700_props__41909__auto__$jscomp$25$$ = function() {
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
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__51700_props__41909__auto__$jscomp$25$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__51700_props__41909__auto__$jscomp$25$$);
};
$amp$components$sections$quote_section$quote_section$$ = function($G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$26_vec__51760$$, $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$26_vec__51773_vec__51776$$) {
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$26_vec__51760$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$26_vec__51760$$), $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$26_vec__51773_vec__51776$$], null);
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$26_vec__51760$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$26_vec__51760$$, 0, null);
  var $map__51763__$1_to$jscomp$10$$ = $APP.$cljs$core$__destructure_map$$($G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$26_vec__51760$$), $gradient_class$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $APP.$cljs$cst$444$gradient_class$$), $quote$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $cljs$cst$447$quote$$), $header$jscomp$5$$ = 
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $APP.$cljs$cst$325$header$$);
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$26_vec__51760$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $APP.$cljs$cst$445$is_visible_QMARK_$$);
  var $children$jscomp$16$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $APP.$cljs$cst$92$children$$);
  $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$26_vec__51773_vec__51776$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $cljs$cst$448$from$$);
  $map__51763__$1_to$jscomp$10$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $cljs$cst$449$to$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $from_transition$$ = $APP.$cljs$core$truth_$$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$26_vec__51773_vec__51776$$) ? $APP.$cljs$core$clj__GT_js$$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$26_vec__51773_vec__51776$$) : {opacity:0, duration:0.5, ease:"expo.inOut", stagger:0.1}, $to_transition$$ = $APP.$cljs$core$truth_$$($map__51763__$1_to$jscomp$10$$) ? $APP.$cljs$core$clj__GT_js$$($map__51763__$1_to$jscomp$10$$) : {opacity:1, 
  duration:0.15, ease:"expo.inOut", stagger:0.025}, $outer_ctx$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $text_ref$$ = $APP.$helix$hooks$use_ref$$("text-ref");
  $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$26_vec__51773_vec__51776$$ = $APP.$helix$hooks$use_state$$(new $APP.$module$node_modules$gsap$dist$gsap$$.gsap.timeline({paused:!0}));
  var $tl$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$26_vec__51773_vec__51776$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$26_vec__51773_vec__51776$$, 1, null);
  $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$26_vec__51773_vec__51776$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$1$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$26_vec__51773_vec__51776$$, 0, null);
  var $is_active_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$26_vec__51773_vec__51776$$, 1, null);
  $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$26_vec__51773_vec__51776$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $splitter$$ = $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($text_ref$$)) ? new $APP.$module$node_modules$gsap$SplitText$$.SplitText($APP.$cljs$core$_deref$$($text_ref$$), {type:"words,chars", charsClass:"playable-type-char"}) : null, $chars$jscomp$2$$ = $APP.$cljs$core$truth_$$($splitter$$) ? $splitter$$.chars : null, $ctx$$ = $APP.$module$node_modules$gsap$dist$gsap$$.gsap.context(function() {
      return $tl$jscomp$1$$.from($chars$jscomp$2$$, $from_transition$$).to($chars$jscomp$2$$, $to_transition$$).timeScale(4);
    }, $outer_ctx$jscomp$1$$);
    return function() {
      return $ctx$$.revert();
    };
  });
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$26_vec__51760$$ = [$quote$jscomp$1$$, $text_ref$$, $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$26_vec__51760$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$26_vec__51773_vec__51776$$, $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$26_vec__51760$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$26_vec__51773_vec__51776$$, 
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$26_vec__51760$$);
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$26_vec__51760$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($is_active_QMARK_$jscomp$4$$) ? $tl$jscomp$1$$.play() : null;
  });
  $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$26_vec__51773_vec__51776$$ = [$is_active_QMARK_$jscomp$4$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$26_vec__51760$$, $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$26_vec__51773_vec__51776$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$26_vec__51760$$, 
  $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$26_vec__51773_vec__51776$$);
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$26_vec__51760$$ = function() {
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
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$26_vec__51760$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$1_map__51763_props__41909__auto__$jscomp$26_vec__51760$$);
};
$amp$components$sections$video_section$video_section$$ = function($G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$27_vec__51826_vec__51834$$, $G__51845$jscomp$inline_3704_G__51849$jscomp$inline_3705_JSCompiler_inline_result$jscomp$inline_3703_maybe_ref__41910__auto__$jscomp$27_playback_id$$) {
  $G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$27_vec__51826_vec__51834$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$27_vec__51826_vec__51834$$), $G__51845$jscomp$inline_3704_G__51849$jscomp$inline_3705_JSCompiler_inline_result$jscomp$inline_3703_maybe_ref__41910__auto__$jscomp$27_playback_id$$], 
  null);
  $G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$27_vec__51826_vec__51834$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$27_vec__51826_vec__51834$$, 0, null);
  $G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$27_vec__51826_vec__51834$$ = $APP.$cljs$core$__destructure_map$$($G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$27_vec__51826_vec__51834$$);
  $G__51845$jscomp$inline_3704_G__51849$jscomp$inline_3705_JSCompiler_inline_result$jscomp$inline_3703_maybe_ref__41910__auto__$jscomp$27_playback_id$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$27_vec__51826_vec__51834$$, $APP.$cljs$cst$450$playback_id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$27_vec__51826_vec__51834$$ = $APP.$amp$providers$main_provider$use_main_state$$();
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$27_vec__51826_vec__51834$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$27_vec__51826_vec__51834$$, 1, null);
  $G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$27_vec__51826_vec__51834$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  var $is_active_QMARK_$jscomp$5_vec__51837$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$27_vec__51826_vec__51834$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$382$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$5_vec__51837$$, 0, null);
  $is_active_QMARK_$jscomp$5_vec__51837$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$5_vec__51837$$, 1, null);
  $G__51845$jscomp$inline_3704_G__51849$jscomp$inline_3705_JSCompiler_inline_result$jscomp$inline_3703_maybe_ref__41910__auto__$jscomp$27_playback_id$$ = {"playback-id":$G__51845$jscomp$inline_3704_G__51849$jscomp$inline_3705_JSCompiler_inline_result$jscomp$inline_3703_maybe_ref__41910__auto__$jscomp$27_playback_id$$, "should-play?":$is_active_QMARK_$jscomp$5_vec__51837$$};
  $G__51845$jscomp$inline_3704_G__51849$jscomp$inline_3705_JSCompiler_inline_result$jscomp$inline_3703_maybe_ref__41910__auto__$jscomp$27_playback_id$$ = {className:"h-full\n                           w-full\n                           flex\n                           relative \n                           flex items-center justify-items-center justify-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$video_section$lazy_video_background$$, 
  $G__51845$jscomp$inline_3704_G__51849$jscomp$inline_3705_JSCompiler_inline_result$jscomp$inline_3703_maybe_ref__41910__auto__$jscomp$27_playback_id$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$video_section$lazy_video_background$$, $G__51845$jscomp$inline_3704_G__51849$jscomp$inline_3705_JSCompiler_inline_result$jscomp$inline_3703_maybe_ref__41910__auto__$jscomp$27_playback_id$$)};
  $G__51845$jscomp$inline_3704_G__51849$jscomp$inline_3705_JSCompiler_inline_result$jscomp$inline_3703_maybe_ref__41910__auto__$jscomp$27_playback_id$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__51845$jscomp$inline_3704_G__51849$jscomp$inline_3705_JSCompiler_inline_result$jscomp$inline_3703_maybe_ref__41910__auto__$jscomp$27_playback_id$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__51845$jscomp$inline_3704_G__51849$jscomp$inline_3705_JSCompiler_inline_result$jscomp$inline_3703_maybe_ref__41910__auto__$jscomp$27_playback_id$$);
  $G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$27_vec__51826_vec__51834$$ = {id:"video", ref:$G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$27_vec__51826_vec__51834$$, className:"absolute\n                    h-full\n                    w-full\n                    overflow-hidden", children:$G__51845$jscomp$inline_3704_G__51849$jscomp$inline_3705_JSCompiler_inline_result$jscomp$inline_3703_maybe_ref__41910__auto__$jscomp$27_playback_id$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$27_vec__51826_vec__51834$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__51841_map__51829_map__51829__$1_outer_ctx$jscomp$2_props__41909__auto__$jscomp$27_vec__51826_vec__51834$$);
};
$amp$components$ui$lower_panel_cta$lower_panel_cta$$ = function($G__62296_map__62294_map__62294__$1_props__41909__auto__$jscomp$28_vec__62291$$, $maybe_ref__41910__auto__$jscomp$28$$) {
  $G__62296_map__62294_map__62294__$1_props__41909__auto__$jscomp$28_vec__62291$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__62296_map__62294_map__62294__$1_props__41909__auto__$jscomp$28_vec__62291$$), $maybe_ref__41910__auto__$jscomp$28$$], null);
  $G__62296_map__62294_map__62294__$1_props__41909__auto__$jscomp$28_vec__62291$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62296_map__62294_map__62294__$1_props__41909__auto__$jscomp$28_vec__62291$$, 0, null);
  $G__62296_map__62294_map__62294__$1_props__41909__auto__$jscomp$28_vec__62291$$ = $APP.$cljs$core$__destructure_map$$($G__62296_map__62294_map__62294__$1_props__41909__auto__$jscomp$28_vec__62291$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62296_map__62294_map__62294__$1_props__41909__auto__$jscomp$28_vec__62291$$, $APP.$cljs$cst$92$children$$);
  var $on_click$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62296_map__62294_map__62294__$1_props__41909__auto__$jscomp$28_vec__62291$$, $APP.$cljs$cst$387$on_click$$), $cta_title$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62296_map__62294_map__62294__$1_props__41909__auto__$jscomp$28_vec__62291$$, $cljs$cst$451$cta_title$$), $is_visible_QMARK_$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62296_map__62294_map__62294__$1_props__41909__auto__$jscomp$28_vec__62291$$, 
  $APP.$cljs$cst$445$is_visible_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__62296_map__62294_map__62294__$1_props__41909__auto__$jscomp$28_vec__62291$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$("flex \n                       w-full\n                       justify-between\n                       items-center\n                       mt-1\n                       px-8\n                       py-4\n                       bg-black/20\n                       text-white\n                       backdrop-blur-md\n                       transition-all\n                       duration-500\n                       ease-out\n                       " + 
    $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($is_visible_QMARK_$jscomp$2$$) ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0")), children:[function() {
      var $G__62300_G__62305$jscomp$inline_3342$$ = {className:"text-md lg:text-md font-fira-code", children:"THE STUDIO will open from May 9 to November 22, 2026"};
      $G__62300_G__62305$jscomp$inline_3342$$ = {children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62300_G__62305$jscomp$inline_3342$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__62300_G__62305$jscomp$inline_3342$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62300_G__62305$jscomp$inline_3342$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62300_G__62305$jscomp$inline_3342$$);
    }(), function() {
      var $G__62312_G__62316$jscomp$inline_3345$$ = {title:$cta_title$$, "additional-classes":"text-2xl", "on-click":$on_click$jscomp$1$$};
      $G__62312_G__62316$jscomp$inline_3345$$ = {className:"flex justify-end", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__62312_G__62316$jscomp$inline_3345$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__62312_G__62316$jscomp$inline_3345$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62312_G__62316$jscomp$inline_3345$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62312_G__62316$jscomp$inline_3345$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62296_map__62294_map__62294__$1_props__41909__auto__$jscomp$28_vec__62291$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62296_map__62294_map__62294__$1_props__41909__auto__$jscomp$28_vec__62291$$);
};
$amp$components$hero_header$hero_header$$ = function($G__62790_props__41909__auto__$jscomp$29_vec__62786$$) {
  $APP.$helix$core$extract_cljs_props$$($G__62790_props__41909__auto__$jscomp$29_vec__62786$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$3$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $scroll_to_id$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__62790_props__41909__auto__$jscomp$29_vec__62786$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ctx$jscomp$3$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$382$end$$, "bottom"], null)]));
  var $visited_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62790_props__41909__auto__$jscomp$29_vec__62786$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62790_props__41909__auto__$jscomp$29_vec__62786$$, 1, null);
  $G__62790_props__41909__auto__$jscomp$29_vec__62786$$ = function() {
    return {id:"hero", ref:$outer_ctx$jscomp$3$$, className:"relative\n                    h-screen\n                    w-screen\n                    overflow-hidden", children:function() {
      var $G__62794$$ = function() {
        return {className:"h-full\n                           w-full\n                           relative \n                           flex items-center\n                           justify-items-center justify-center", children:[function() {
          var $G__62798_G__62802$jscomp$inline_3348$$ = {"playback-id":"Izp5007Abkc00t4Ubns7pAiqq2zG7JIp01tvAoaVOny7O00"};
          $G__62798_G__62802$jscomp$inline_3348$$ = {className:"z-10 absolute w-full h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$video_section$video_section$$, $G__62798_G__62802$jscomp$inline_3348$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$video_section$video_section$$, $G__62798_G__62802$jscomp$inline_3348$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62798_G__62802$jscomp$inline_3348$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62798_G__62802$jscomp$inline_3348$$);
        }(), function() {
          var $G__62806$$ = function() {
            return {className:"z-20 absolute w-full h-full", children:[function() {
              var $G__62810$$ = {className:"w-full h-full absolute pink-grad opacity-30"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62810$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62810$$);
            }(), function() {
              var $G__62814$$ = function() {
                return {className:"flex \n                                         flex-col\n                                         w-1/2 lg:w-3/4 xl:w-1/2\n                                         h-full\n                                         items-center\n                                         justify-center\n                                         mx-auto\n                                         px-4", children:[function() {
                  var $G__62818_G__62822$jscomp$inline_3016$$ = {};
                  $G__62818_G__62822$jscomp$inline_3016$$ = {className:"\n                                          \n                                                                      font-medium\n                                                                      font-fira-code\n                                                                      flex\n                                                                      items-center\n                                                                      justify-center", 
                  children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$fragments$about_me$about_event$$, $G__62818_G__62822$jscomp$inline_3016$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$fragments$about_me$about_event$$, $G__62818_G__62822$jscomp$inline_3016$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62818_G__62822$jscomp$inline_3016$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62818_G__62822$jscomp$inline_3016$$);
                }(), function() {
                  var $G__62824$$ = function() {
                    return {"cta-title":"Learn More", "is-visible?":$visited_QMARK_$jscomp$4$$, "on-click":function() {
                      return $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$("about-work") : $scroll_to_id$$.call(null, "about-work");
                    }};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$ui$lower_panel_cta$lower_panel_cta$$, $G__62824$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$ui$lower_panel_cta$lower_panel_cta$$, $G__62824$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62814$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62814$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62806$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62806$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62794$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62794$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62790_props__41909__auto__$jscomp$29_vec__62786$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62790_props__41909__auto__$jscomp$29_vec__62786$$);
};
$amp$hooks$use_window_resize$use_window_size$$ = function() {
  var $G__51951_52001_vec__51941$$ = $APP.$helix$hooks$use_state$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$415$width$$, window.innerWidth, $APP.$cljs$cst$416$height$$, window.innerHeight], null)), $dimensions$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51951_52001_vec__51941$$, 0, null), $set_dimensions_BANG_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51951_52001_vec__51941$$, 1, null), $resize_handler$jscomp$1$$ = 
  function() {
    function $G__51997$$($var_args$jscomp$436$$) {
      var $G__51999__i__$jscomp$369$$ = null;
      if (arguments.length > 0) {
        $G__51999__i__$jscomp$369$$ = 0;
        for (var $G__51999__a$$ = Array(arguments.length - 0); $G__51999__i__$jscomp$369$$ < $G__51999__a$$.length;) {
          $G__51999__a$$[$G__51999__i__$jscomp$369$$] = arguments[$G__51999__i__$jscomp$369$$ + 0], ++$G__51999__i__$jscomp$369$$;
        }
        $G__51999__i__$jscomp$369$$ = new $APP.$cljs$core$IndexedSeq$$($G__51999__a$$, 0, null);
      }
      return $G__51997__delegate$$.call(this, $G__51999__i__$jscomp$369$$);
    }
    function $G__51997__delegate$$() {
      var $G__51950$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$415$width$$, window.innerWidth, $APP.$cljs$cst$416$height$$, window.innerHeight], null);
      return $set_dimensions_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_dimensions_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__51950$$) : $set_dimensions_BANG_$jscomp$1$$.call(null, $G__51950$$);
    }
    $G__51997$$.$cljs$lang$maxFixedArity$ = 0;
    $G__51997$$.$cljs$lang$applyTo$ = function($_$jscomp$370_arglist__52000$$) {
      $_$jscomp$370_arglist__52000$$ = $APP.$cljs$core$seq$$($_$jscomp$370_arglist__52000$$);
      return $G__51997__delegate$$($_$jscomp$370_arglist__52000$$);
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
$amp$components$navs$donation_nav$donation_nav$$ = function($G__62353_G__62368_is_desktop_QMARK_$jscomp$1_props__41909__auto__$jscomp$30$$) {
  $APP.$helix$core$extract_cljs_props$$($G__62353_G__62368_is_desktop_QMARK_$jscomp$1_props__41909__auto__$jscomp$30$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__62353_G__62368_is_desktop_QMARK_$jscomp$1_props__41909__auto__$jscomp$30$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  var $dimensions$jscomp$6$$ = $amp$hooks$use_window_resize$use_window_size$$(), $is_active_QMARK_$jscomp$7_vec__62339$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$356$start$$, function() {
    return window.innerHeight;
  }, $APP.$cljs$cst$382$end$$, "1000000px", $APP.$cljs$cst$384$markers_QMARK_$$, !1, $APP.$cljs$cst$385$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$7_vec__62339$$, 0, null);
  $is_active_QMARK_$jscomp$7_vec__62339$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$7_vec__62339$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$397$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$434$opacity$$, 1], null), $APP.$cljs$cst$398$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$434$opacity$$, 0.7], null)]));
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$395$target$$, $comp_ref$$, $APP.$cljs$cst$401$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$391$y$$, 0], null), $APP.$cljs$cst$403$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$391$y$$, -$APP.$cljs$cst$416$height$$.$cljs$core$IFn$_invoke$arity$1$($dimensions$jscomp$6$$)], null), $APP.$cljs$cst$399$is_on_QMARK_$$, 
  $is_active_QMARK_$jscomp$7_vec__62339$$], null));
  if ($APP.$cljs$core$truth_$$($G__62353_G__62368_is_desktop_QMARK_$jscomp$1_props__41909__auto__$jscomp$30$$)) {
    return $G__62353_G__62368_is_desktop_QMARK_$jscomp$1_props__41909__auto__$jscomp$30$$ = function() {
      return {ref:$comp_ref$$, className:"fixed\n                      opacity-90\n                      z-40\n                      text-xl\n                      mr-8\n                      mt-4\n                      top-0\n                      right-0", children:function() {
        var $G__62359$$ = function() {
          return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
            return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
          }};
        }();
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__62359$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__62359$$);
      }()};
    }(), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62353_G__62368_is_desktop_QMARK_$jscomp$1_props__41909__auto__$jscomp$30$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62353_G__62368_is_desktop_QMARK_$jscomp$1_props__41909__auto__$jscomp$30$$);
  }
  $G__62353_G__62368_is_desktop_QMARK_$jscomp$1_props__41909__auto__$jscomp$30$$ = function() {
    return {ref:$comp_ref$$, className:"fixed \n                          opacity-90\n                          z-40\n                          text-xl\n                      w-full\n                          ", children:function() {
      var $G__62372$$ = function() {
        return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
          return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__62372$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__62372$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62353_G__62368_is_desktop_QMARK_$jscomp$1_props__41909__auto__$jscomp$30$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62353_G__62368_is_desktop_QMARK_$jscomp$1_props__41909__auto__$jscomp$30$$);
};
$amp$components$navs$logo_nav$logo_nav$$ = function($G__52012_is_active_QMARK_$jscomp$8_props__41909__auto__$jscomp$31_vec__52008$$) {
  $APP.$helix$core$extract_cljs_props$$($G__52012_is_active_QMARK_$jscomp$8_props__41909__auto__$jscomp$31_vec__52008$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__52012_is_active_QMARK_$jscomp$8_props__41909__auto__$jscomp$31_vec__52008$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$356$start$$, function() {
    return window.innerHeight - window.innerHeight / 8;
  }, $APP.$cljs$cst$382$end$$, "1000000px", $APP.$cljs$cst$384$markers_QMARK_$$, !1, $APP.$cljs$cst$385$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52012_is_active_QMARK_$jscomp$8_props__41909__auto__$jscomp$31_vec__52008$$, 0, null);
  $G__52012_is_active_QMARK_$jscomp$8_props__41909__auto__$jscomp$31_vec__52008$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52012_is_active_QMARK_$jscomp$8_props__41909__auto__$jscomp$31_vec__52008$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$397$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$434$opacity$$, 1], null), $APP.$cljs$cst$398$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$434$opacity$$, 0.7], null)]));
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$395$target$$, $comp_ref$jscomp$1$$, $APP.$cljs$cst$401$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$391$y$$, 0], null), $APP.$cljs$cst$403$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$391$y$$, -250], null), $APP.$cljs$cst$399$is_on_QMARK_$$, $G__52012_is_active_QMARK_$jscomp$8_props__41909__auto__$jscomp$31_vec__52008$$], 
  null));
  $G__52012_is_active_QMARK_$jscomp$8_props__41909__auto__$jscomp$31_vec__52008$$ = function() {
    return {ref:$comp_ref$jscomp$1$$, className:"fixed \n                    cursor-pointer\n                    opacity-90\n                    z-30\n                    text-xl\n                    ml-4\n                    mt-4\n                    w-1/5\n                    lg:w-32", onClick:function() {
      return window.open("https://www.labiennale.org/en/art/2026", "_blank");
    }, children:function() {
      var $G__52016$$ = {src:"images/graphics/biennale_logo.png"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__52016$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__52016$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52012_is_active_QMARK_$jscomp$8_props__41909__auto__$jscomp$31_vec__52008$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52012_is_active_QMARK_$jscomp$8_props__41909__auto__$jscomp$31_vec__52008$$);
};
$amp$components$hover_title$hover_title$$ = function($G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$32_vec__52048$$, $G__52057$jscomp$inline_3708_G__52061$jscomp$inline_3709_JSCompiler_inline_result$jscomp$inline_3707_maybe_ref__41910__auto__$jscomp$32_title$jscomp$13$$) {
  $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$32_vec__52048$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$32_vec__52048$$), $G__52057$jscomp$inline_3708_G__52061$jscomp$inline_3709_JSCompiler_inline_result$jscomp$inline_3707_maybe_ref__41910__auto__$jscomp$32_title$jscomp$13$$], null);
  $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$32_vec__52048$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$32_vec__52048$$, 0, null);
  $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$32_vec__52048$$ = $APP.$cljs$core$__destructure_map$$($G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$32_vec__52048$$);
  $G__52057$jscomp$inline_3708_G__52061$jscomp$inline_3709_JSCompiler_inline_result$jscomp$inline_3707_maybe_ref__41910__auto__$jscomp$32_title$jscomp$13$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$32_vec__52048$$, $APP.$cljs$cst$373$title$$);
  $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$32_vec__52048$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$32_vec__52048$$, $cljs$cst$453$hover_title_ref$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__52057$jscomp$inline_3708_G__52061$jscomp$inline_3709_JSCompiler_inline_result$jscomp$inline_3707_maybe_ref__41910__auto__$jscomp$32_title$jscomp$13$$ = {className:"flash-text\n                                 font-fira-code\n                                 font-bold", textAnchor:"start", alignmentBaseline:"middle", y:"50%", x:"50%", children:$G__52057$jscomp$inline_3708_G__52061$jscomp$inline_3709_JSCompiler_inline_result$jscomp$inline_3707_maybe_ref__41910__auto__$jscomp$32_title$jscomp$13$$};
  $G__52057$jscomp$inline_3708_G__52061$jscomp$inline_3709_JSCompiler_inline_result$jscomp$inline_3707_maybe_ref__41910__auto__$jscomp$32_title$jscomp$13$$ = {className:"justify-self-start", height:"100%", width:"100%", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("text", $G__52057$jscomp$inline_3708_G__52061$jscomp$inline_3709_JSCompiler_inline_result$jscomp$inline_3707_maybe_ref__41910__auto__$jscomp$32_title$jscomp$13$$) : 
  $APP.$helix$core$jsx$$.call(null, "text", $G__52057$jscomp$inline_3708_G__52061$jscomp$inline_3709_JSCompiler_inline_result$jscomp$inline_3707_maybe_ref__41910__auto__$jscomp$32_title$jscomp$13$$)};
  $G__52057$jscomp$inline_3708_G__52061$jscomp$inline_3709_JSCompiler_inline_result$jscomp$inline_3707_maybe_ref__41910__auto__$jscomp$32_title$jscomp$13$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__52057$jscomp$inline_3708_G__52061$jscomp$inline_3709_JSCompiler_inline_result$jscomp$inline_3707_maybe_ref__41910__auto__$jscomp$32_title$jscomp$13$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__52057$jscomp$inline_3708_G__52061$jscomp$inline_3709_JSCompiler_inline_result$jscomp$inline_3707_maybe_ref__41910__auto__$jscomp$32_title$jscomp$13$$);
  $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$32_vec__52048$$ = {className:"absolute \n                  massive-title\n                  h-full\n                  w-full\n                  pointer-events-none", ref:$G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$32_vec__52048$$, children:$G__52057$jscomp$inline_3708_G__52061$jscomp$inline_3709_JSCompiler_inline_result$jscomp$inline_3707_maybe_ref__41910__auto__$jscomp$32_title$jscomp$13$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$32_vec__52048$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$32_vec__52048$$);
};
$amp$components$ui$playable_text$playable_text$$ = function($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$33$$) {
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$), $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$33$$], null);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$, 0, null);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$ = $APP.$cljs$core$__destructure_map$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$);
  var $text$jscomp$15$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$, $cljs$cst$454$text$$), $is_playing_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$, $cljs$cst$455$is_playing_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$4$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $background_ref$$ = $APP.$helix$hooks$use_ref$$("background-ref"), $text_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("text-ref");
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$ = $APP.$helix$hooks$use_state$$(new $APP.$module$node_modules$gsap$dist$gsap$$.gsap.timeline({paused:!0}));
  var $tl$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$, 1, null);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $splitter$jscomp$1$$ = $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($text_ref$jscomp$1$$)) ? new $APP.$module$node_modules$gsap$SplitText$$.SplitText($APP.$cljs$core$_deref$$($text_ref$jscomp$1$$), {type:"words,chars", charsClass:"playable-type-char"}) : null, $chars$jscomp$3$$ = $APP.$cljs$core$truth_$$($splitter$jscomp$1$$) ? $splitter$jscomp$1$$.chars : null, $ctx$jscomp$1$$ = $APP.$module$node_modules$gsap$dist$gsap$$.gsap.context(function() {
      return $tl$jscomp$2$$.from($APP.$cljs$core$_deref$$($background_ref$$), {width:"0", duration:0.15, ease:"expo.inOut"}).to($APP.$cljs$core$_deref$$($background_ref$$), {width:"100%", duration:0.15, ease:"expo.inOut"}).from($chars$jscomp$3$$, {opacity:0, duration:0.15, ease:"expo.inOut", stagger:0.025}).to($chars$jscomp$3$$, {opacity:1, duration:0.15, ease:"expo.inOut", stagger:0.025});
    }, $outer_ctx$jscomp$4$$);
    return function() {
      return $ctx$jscomp$1$$.revert();
    };
  });
  $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$33$$ = [$text$jscomp$15$$, $text_ref$jscomp$1$$, $is_playing_QMARK_$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$33$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$, 
  $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$33$$);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($is_playing_QMARK_$$) ? $tl$jscomp$2$$.play() : $tl$jscomp$2$$.reverse();
  });
  $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$33$$ = [$is_playing_QMARK_$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$33$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$33$$);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$ = function() {
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
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$33_vec__52070_vec__52074$$);
};
$amp$components$nav_link$nav_link$$ = function($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$, $maybe_ref__41910__auto__$jscomp$34$$) {
  $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$), $maybe_ref__41910__auto__$jscomp$34$$], null);
  $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$, 0, null);
  $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$ = $APP.$cljs$core$__destructure_map$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$);
  var $on_click_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$, $cljs$cst$456$on_click_handler$$), $on_mouse_over_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$, $cljs$cst$457$on_mouse_over_handler$$), $on_mouse_out_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$, 
  $cljs$cst$458$on_mouse_out_handler$$), $title$jscomp$14$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$, $APP.$cljs$cst$373$title$$), $writing$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$, $cljs$cst$459$writing$$), $section_id$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$, 
  $APP.$cljs$cst$414$section_id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$14$$ = $APP.$helix$hooks$use_ref$$("link-ref");
  $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$ = $APP.$helix$hooks$use_state$$(!1);
  var $is_hovering_QMARK_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$, 0, null), $set_is_hovering_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$, 1, null);
  $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$ = function() {
    return {children:[function() {
      var $G__52125$$ = function() {
        return {ref:$ref$jscomp$14$$, className:"\n                  hero-nav-links\n                  cursor-pointer\n                  font-fira-code\n                  font-medium\n                  text-6xl", onMouseOver:function() {
          $APP.$cljs$core$tap_GT_$$("mouse over");
          $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $set_is_hovering_BANG_$$.call(null, !0);
          var $G__52129$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$414$section_id$$, $section_id$jscomp$2$$], null);
          return $on_mouse_over_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_mouse_over_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__52129$$) : $on_mouse_over_handler$$.call(null, $G__52129$$);
        }, onMouseOut:function() {
          $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(!1) : $set_is_hovering_BANG_$$.call(null, !1);
          var $G__52130$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$414$section_id$$, $section_id$jscomp$2$$], null);
          return $on_mouse_out_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_mouse_out_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__52130$$) : $on_mouse_out_handler$$.call(null, $G__52130$$);
        }, onClick:function() {
          var $G__52134$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$414$section_id$$, $section_id$jscomp$2$$], null);
          return $on_click_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_click_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__52134$$) : $on_click_handler$$.call(null, $G__52134$$);
        }, children:$title$jscomp$14$$};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("a", $G__52125$$, $section_id$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__52125$$, $section_id$jscomp$2$$);
    }(), function() {
      var $G__52136_G__52140$jscomp$inline_3354$$ = {text:$writing$$, "is-playing?":$is_hovering_QMARK_$$};
      $G__52136_G__52140$jscomp$inline_3354$$ = {className:"whitespace-nowrap\n                                                absolute\n                                                translate-x-full\n                                                bottom-2\n                                                \n                                                self-baseline\n                                                right-0\n                                                 pl-6\n                                                ", 
      children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$ui$playable_text$playable_text$$, $G__52136_G__52140$jscomp$inline_3354$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$ui$playable_text$playable_text$$, $G__52136_G__52140$jscomp$inline_3354$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52136_G__52140$jscomp$inline_3354$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52136_G__52140$jscomp$inline_3354$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$34_vec__52110_vec__52117$$);
};
$amp$components$playful_titles$hero_menu$$ = function($G__62229_map__62226_map__62226__$1_props__41909__auto__$jscomp$35_vec__62223$$, $maybe_ref__41910__auto__$jscomp$35$$) {
  $G__62229_map__62226_map__62226__$1_props__41909__auto__$jscomp$35_vec__62223$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__62229_map__62226_map__62226__$1_props__41909__auto__$jscomp$35_vec__62223$$), $maybe_ref__41910__auto__$jscomp$35$$], null);
  $G__62229_map__62226_map__62226__$1_props__41909__auto__$jscomp$35_vec__62223$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62229_map__62226_map__62226__$1_props__41909__auto__$jscomp$35_vec__62223$$, 0, null);
  $G__62229_map__62226_map__62226__$1_props__41909__auto__$jscomp$35_vec__62223$$ = $APP.$cljs$core$__destructure_map$$($G__62229_map__62226_map__62226__$1_props__41909__auto__$jscomp$35_vec__62223$$);
  var $data$jscomp$134$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62229_map__62226_map__62226__$1_props__41909__auto__$jscomp$35_vec__62223$$, $APP.$cljs$cst$28$data$$), $over$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62229_map__62226_map__62226__$1_props__41909__auto__$jscomp$35_vec__62223$$, $APP.$cljs$cst$397$over$$), $out$jscomp$15$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62229_map__62226_map__62226__$1_props__41909__auto__$jscomp$35_vec__62223$$, 
  $APP.$cljs$cst$398$out$$), $click$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62229_map__62226_map__62226__$1_props__41909__auto__$jscomp$35_vec__62223$$, $cljs$cst$460$click$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__62229_map__62226_map__62226__$1_props__41909__auto__$jscomp$35_vec__62223$$ = function() {
    return {className:"absolute \n                  bg-white/30\n                  font-fira-code\n                  pointer-events-auto", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__62272_G__62278$jscomp$inline_3712_G__62282$jscomp$inline_3713_p__62237_writing$jscomp$1$$) {
      var $id$jscomp$67$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62272_G__62278$jscomp$inline_3712_G__62282$jscomp$inline_3713_p__62237_writing$jscomp$1$$, 0, null);
      $G__62272_G__62278$jscomp$inline_3712_G__62282$jscomp$inline_3713_p__62237_writing$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62272_G__62278$jscomp$inline_3712_G__62282$jscomp$inline_3713_p__62237_writing$jscomp$1$$, 1, null);
      $G__62272_G__62278$jscomp$inline_3712_G__62282$jscomp$inline_3713_p__62237_writing$jscomp$1$$ = {title:$id$jscomp$67$$, writing:$G__62272_G__62278$jscomp$inline_3712_G__62282$jscomp$inline_3713_p__62237_writing$jscomp$1$$, "section-id":$id$jscomp$67$$, "on-mouse-over-handler":$over$jscomp$1$$, "on-mouse-out-handler":$out$jscomp$15$$, "on-click-handler":$click$$};
      $G__62272_G__62278$jscomp$inline_3712_G__62282$jscomp$inline_3713_p__62237_writing$jscomp$1$$ = {className:"relative flex", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$nav_link$nav_link$$, $G__62272_G__62278$jscomp$inline_3712_G__62282$jscomp$inline_3713_p__62237_writing$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$nav_link$nav_link$$, $G__62272_G__62278$jscomp$inline_3712_G__62282$jscomp$inline_3713_p__62237_writing$jscomp$1$$)};
      $G__62272_G__62278$jscomp$inline_3712_G__62282$jscomp$inline_3713_p__62237_writing$jscomp$1$$ = {className:"flex", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62272_G__62278$jscomp$inline_3712_G__62282$jscomp$inline_3713_p__62237_writing$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62272_G__62278$jscomp$inline_3712_G__62282$jscomp$inline_3713_p__62237_writing$jscomp$1$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__62272_G__62278$jscomp$inline_3712_G__62282$jscomp$inline_3713_p__62237_writing$jscomp$1$$, $id$jscomp$67$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62272_G__62278$jscomp$inline_3712_G__62282$jscomp$inline_3713_p__62237_writing$jscomp$1$$, $id$jscomp$67$$);
    }, $data$jscomp$134$$)};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62229_map__62226_map__62226__$1_props__41909__auto__$jscomp$35_vec__62223$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62229_map__62226_map__62226__$1_props__41909__auto__$jscomp$35_vec__62223$$);
};
$amp$components$playful_titles$playful_titles$$ = function($G__62459_props__41909__auto__$jscomp$36_vec__62382_vec__62385$$) {
  $APP.$helix$core$extract_cljs_props$$($G__62459_props__41909__auto__$jscomp$36_vec__62382_vec__62385$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__62459_props__41909__auto__$jscomp$36_vec__62382_vec__62385$$ = $APP.$amp$providers$main_provider$use_main_state$$();
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62459_props__41909__auto__$jscomp$36_vec__62382_vec__62385$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62459_props__41909__auto__$jscomp$36_vec__62382_vec__62385$$, 1, null);
  var $hover_title_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("hover-title-ref");
  $G__62459_props__41909__auto__$jscomp$36_vec__62382_vec__62385$$ = $APP.$helix$hooks$use_state$$(null);
  var $current_section$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62459_props__41909__auto__$jscomp$36_vec__62382_vec__62385$$, 0, null), $set_current_section_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62459_props__41909__auto__$jscomp$36_vec__62382_vec__62385$$, 1, null), $nav_mouse_over_handler$$ = function() {
    function $G__62388$$($map__62392__$1_p__62390_section_id$jscomp$3$$) {
      $map__62392__$1_p__62390_section_id$jscomp$3$$ = $APP.$cljs$core$__destructure_map$$($map__62392__$1_p__62390_section_id$jscomp$3$$);
      $map__62392__$1_p__62390_section_id$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__62392__$1_p__62390_section_id$jscomp$3$$, $APP.$cljs$cst$414$section_id$$);
      $set_current_section_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_current_section_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($map__62392__$1_p__62390_section_id$jscomp$3$$) : $set_current_section_BANG_$$.call(null, $map__62392__$1_p__62390_section_id$jscomp$3$$);
      return $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to($APP.$cljs$core$_deref$$($hover_title_ref$jscomp$1$$), {opacity:0.8, duration:0.2});
    }
    var $G__62389$$ = [$hover_title_ref$jscomp$1$$];
    return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__62388$$, $G__62389$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__62388$$, $G__62389$$);
  }(), $nav_mouse_out_handler$$ = function() {
    function $G__62418$$() {
      return $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to($APP.$cljs$core$_deref$$($hover_title_ref$jscomp$1$$), {opacity:0, duration:0.2});
    }
    var $G__62419$$ = [$hover_title_ref$jscomp$1$$];
    return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__62418$$, $G__62419$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__62418$$, $G__62419$$);
  }();
  $G__62459_props__41909__auto__$jscomp$36_vec__62382_vec__62385$$ = function() {
    return {className:"relative\n                    w-full \n                    h-full \n                    \n                    ", children:[function() {
      var $G__62483$$ = function() {
        return {className:"relative\n                    w-full \n                    h-full \n                    flex\n                    items-center\n                    justify-items-center\n                    justify-center", children:[function() {
          var $G__62503$$ = {"hover-title-ref":$hover_title_ref$jscomp$1$$, title:$current_section$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$hover_title$hover_title$$, $G__62503$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$hover_title$hover_title$$, $G__62503$$);
        }(), function() {
          var $G__62558$$ = {data:$amp$components$playful_titles$titles$$, over:$nav_mouse_over_handler$$, out:$nav_mouse_out_handler$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$playful_titles$hero_menu$$, $G__62558$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$playful_titles$hero_menu$$, $G__62558$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62483$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62483$$);
    }(), function() {
      var $G__62564$$ = {className:"absolute\n                                     bottom-10\n                           w-full\n                           flex\n                           justify-center\n                           "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62564$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62564$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62459_props__41909__auto__$jscomp$36_vec__62382_vec__62385$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62459_props__41909__auto__$jscomp$36_vec__62382_vec__62385$$);
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
      $G__52506_result$jscomp$116$$ = $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__52506_result$jscomp$116$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$width$jscomp$32$$, $img_height$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$442$aspect_ratio$$, $aspect_ratio$jscomp$4$$], null)));
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
$amp$components$elements$lazy_image_gallery$image_layer$$ = function($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$, $G__52212_52508_maybe_ref__41910__auto__$jscomp$37$$) {
  $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$), $G__52212_52508_maybe_ref__41910__auto__$jscomp$37$$], null);
  $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$, 0, null);
  $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$ = $APP.$cljs$core$__destructure_map$$($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$);
  var $img_src$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$, $APP.$cljs$cst$433$img_src$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $base_ref$$ = $APP.$helix$hooks$use_ref$$("base-ref"), $transition_ref$$ = $APP.$helix$hooks$use_ref$$("trans-ref");
  $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$ = $APP.$helix$hooks$use_state$$(null);
  var $current_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$, 0, null), $set_current_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$, 1, null);
  $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$ = $APP.$helix$hooks$use_state$$(null);
  var $prev_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$, 0, null), $set_prev_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$, 1, null);
  $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($current_src$$, $img_src$jscomp$4$$) ? null : $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$($current_src$$) : $set_prev_src$$.call(null, $current_src$$);
  });
  $G__52212_52508_maybe_ref__41910__auto__$jscomp$37$$ = [$img_src$jscomp$4$$, $current_src$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$, $G__52212_52508_maybe_ref__41910__auto__$jscomp$37$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$, $G__52212_52508_maybe_ref__41910__auto__$jscomp$37$$);
  $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$ = function() {
    return {className:"z-10", children:[$APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($prev_src$$) ? $prev_src$$ : $current_src$$) ? function() {
      var $G__52224$$ = function() {
        return {ref:$base_ref$$, src:$APP.$cljs$core$truth_$$($prev_src$$) ? $prev_src$$ : $current_src$$, className:"absolute\n                               z-10\n                               w-full\n                               h-full\n                               object-cover\n                               overflow-hidden", onLoad:function() {
          return $APP.$amp$utils$gsap$to_ref$$($transition_ref$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$434$opacity$$, 0, $APP.$cljs$cst$389$duration$$, 0], null));
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("img", $G__52224$$, "base") : $APP.$helix$core$jsx$$.call(null, "img", $G__52224$$, "base");
    }() : null, $APP.$cljs$core$truth_$$(function() {
      var $or__5142__auto__$jscomp$122$$ = $prev_src$$ == null;
      return $or__5142__auto__$jscomp$122$$ ? $or__5142__auto__$jscomp$122$$ : $img_src$jscomp$4$$;
    }()) ? function() {
      var $G__52270$$ = function() {
        return {src:$img_src$jscomp$4$$, ref:$transition_ref$$, className:"absolute\n                             z-20\n                             w-full\n                             h-full\n                             object-cover\n                             overflow-hidden", style:{opacity:$APP.$helix$impl$props$__GT_js$$(0)}, onLoad:function() {
          return $APP.$amp$utils$gsap$to_ref$$($transition_ref$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$434$opacity$$, 1, $APP.$cljs$cst$389$duration$$, 1, $APP.$cljs$cst$405$onComplete$$, function() {
            $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$(null) : $set_prev_src$$.call(null, null);
            return $set_current_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_current_src$$.$cljs$core$IFn$_invoke$arity$1$($img_src$jscomp$4$$) : $set_current_src$$.call(null, $img_src$jscomp$4$$);
          }], null));
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("img", $G__52270$$, "trans") : $APP.$helix$core$jsx$$.call(null, "img", $G__52270$$, "trans");
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52211_52507_G__52217_map__52190_map__52190__$1_props__41909__auto__$jscomp$37_vec__52187_vec__52195_vec__52198$$);
};
$amp$components$elements$lazy_image_gallery$caption_layer$$ = function($G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$38_vec__52310$$, $maybe_ref__41910__auto__$jscomp$38$$) {
  $G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$38_vec__52310$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$38_vec__52310$$), $maybe_ref__41910__auto__$jscomp$38$$], null);
  $G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$38_vec__52310$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$38_vec__52310$$, 0, null);
  $G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$38_vec__52310$$ = $APP.$cljs$core$__destructure_map$$($G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$38_vec__52310$$);
  var $target_ref$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$38_vec__52310$$, $cljs$cst$461$target_ref$$), $caption$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$38_vec__52310$$, $APP.$cljs$cst$435$caption$$), $credit$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$38_vec__52310$$, 
  $APP.$cljs$cst$436$credit$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$38_vec__52310$$, $cljs$cst$462$other$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$38_vec__52310$$ = function() {
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
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$38_vec__52310$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52316_map__52313_map__52313__$1_props__41909__auto__$jscomp$38_vec__52310$$);
};
$amp$components$elements$lazy_image_gallery$image_card$$ = function($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$39_vec__52367$$, $maybe_ref__41910__auto__$jscomp$39$$) {
  $G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$39_vec__52367$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$39_vec__52367$$), $maybe_ref__41910__auto__$jscomp$39$$], null);
  $G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$39_vec__52367$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$39_vec__52367$$, 0, null);
  $G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$39_vec__52367$$ = $APP.$cljs$core$__destructure_map$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$39_vec__52367$$);
  var $width$jscomp$34$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$39_vec__52367$$, $APP.$cljs$cst$415$width$$), $height$jscomp$31$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$39_vec__52367$$, $APP.$cljs$cst$416$height$$), $img_src$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$39_vec__52367$$, 
  $APP.$cljs$cst$433$img_src$$), $caption$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$39_vec__52367$$, $APP.$cljs$cst$435$caption$$), $credit$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$39_vec__52367$$, $APP.$cljs$cst$436$credit$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$39_vec__52367$$, $cljs$cst$462$other$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$39_vec__52367$$, $APP.$cljs$cst$90$key$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$39_vec__52367$$, $APP.$cljs$cst$463$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $trigger_ref$$ = $APP.$helix$hooks$use_ref$$("trigger-ref"), $target_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("target-ref");
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($trigger_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$395$target$$, $target_ref$jscomp$1$$, $APP.$cljs$cst$396$initial$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$391$y$$, 100, $APP.$cljs$cst$434$opacity$$, 0], null), $APP.$cljs$cst$397$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
  3, [$APP.$cljs$cst$391$y$$, 0, $APP.$cljs$cst$434$opacity$$, 1, $APP.$cljs$cst$389$duration$$, 0.25], null), $APP.$cljs$cst$398$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$391$y$$, 100, $APP.$cljs$cst$434$opacity$$, 0, $APP.$cljs$cst$389$duration$$, 0.125], null)], null)]));
  $G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$39_vec__52367$$ = function() {
    return {ref:$trigger_ref$$, style:{width:$APP.$helix$impl$props$__GT_js$$($width$jscomp$34$$), height:$APP.$helix$impl$props$__GT_js$$($height$jscomp$31$$)}, className:"relative\n                    bg-white/10\n                    overflow-hidden", children:[function() {
      var $G__52423$$ = {"img-src":$img_src$jscomp$5$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$image_layer$$, $G__52423$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$image_layer$$, $G__52423$$);
    }(), $APP.$cljs$core$truth_$$($caption$jscomp$2$$) ? function() {
      var $G__52446$$ = {"target-ref":$target_ref$jscomp$1$$, caption:$caption$jscomp$2$$, credit:$credit$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$caption_layer$$, $G__52446$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$caption_layer$$, $G__52446$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$39_vec__52367$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52407_map__52370_map__52370__$1_props__41909__auto__$jscomp$39_vec__52367$$);
};
$amp$components$elements$lazy_image_gallery$lazy_image_gallery$$ = function($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$, $G__52465_52510_maybe_ref__41910__auto__$jscomp$40$$) {
  $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$), $G__52465_52510_maybe_ref__41910__auto__$jscomp$40$$], null);
  $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$, 0, null);
  $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$ = $APP.$cljs$core$__destructure_map$$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$);
  var $images$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$, $cljs$cst$464$images$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$, $APP.$cljs$cst$445$is_visible_QMARK_$$);
  $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$, $cljs$cst$465$image_gallery_container_ref$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$5$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $gallery_dimensions$$ = $APP.$amp$hooks$use_container_size$use_container_size$$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$);
  $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$ = $APP.$helix$hooks$use_state$$($amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$(8, 200));
  var $masonary_grid_slots$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$, 0, null), $set_masonary_grid_slots$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$, 1, null);
  $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $G__52470$$ = $amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$($APP.$cljs$cst$415$width$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$), $APP.$cljs$cst$416$height$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$));
    return $set_masonary_grid_slots$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_masonary_grid_slots$$.$cljs$core$IFn$_invoke$arity$1$($G__52470$$) : $set_masonary_grid_slots$$.call(null, $G__52470$$);
  });
  $G__52465_52510_maybe_ref__41910__auto__$jscomp$40$$ = [$APP.$cljs$cst$415$width$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$), $APP.$cljs$cst$416$height$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$)];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$, $G__52465_52510_maybe_ref__41910__auto__$jscomp$40$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$, 
  $G__52465_52510_maybe_ref__41910__auto__$jscomp$40$$);
  $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$ = function() {
    return {ref:$outer_ctx$jscomp$5$$, className:"overflow-hidden h-full", children:function() {
      var $G__52476$$ = function() {
        return {className:"columns-3\n                               gap-0\n                               h-full", style:{backgroundImage:$APP.$helix$impl$props$__GT_js$$("repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.1) 4px, rgba(255,255,255,0.1) 5px)")}, children:$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($idx$jscomp$62$$, $dimensions$jscomp$9_height$jscomp$32$$) {
          var $G__52500_caption$jscomp$3_map__52489$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($images$$, $cljs$core$rand_int$$($APP.$cljs$core$count$$($images$$))), $credit$jscomp$3_map__52489__$1$$ = $APP.$cljs$core$__destructure_map$$($G__52500_caption$jscomp$3_map__52489$$), $sized_image_src_src$jscomp$36$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$3_map__52489__$1$$, $APP.$cljs$cst$425$src$$);
          $G__52500_caption$jscomp$3_map__52489$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$3_map__52489__$1$$, $APP.$cljs$cst$435$caption$$);
          $credit$jscomp$3_map__52489__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$3_map__52489__$1$$, $APP.$cljs$cst$436$credit$$);
          var $aspect_ratio$jscomp$5$$ = $APP.$cljs$cst$442$aspect_ratio$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$meta$$($dimensions$jscomp$9_height$jscomp$32$$)), $closest_height_closest_match$$ = $amp$components$elements$lazy_image_gallery$find_closest_size$$($APP.$cljs$core$first$$($dimensions$jscomp$9_height$jscomp$32$$), $APP.$cljs$core$second$$($dimensions$jscomp$9_height$jscomp$32$$)), $width$jscomp$35$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$9_height$jscomp$32$$, 
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
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__52464_52509_G__52472_image_gallery_container_ref_map__52460_map__52460__$1_props__41909__auto__$jscomp$40_vec__52457_vec__52461$$);
};
$amp$components$sections$about_biennale$title$$ = function($G__52554_props__41909__auto__$jscomp$41$$) {
  $APP.$helix$core$extract_cljs_props$$($G__52554_props__41909__auto__$jscomp$41$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__52554_props__41909__auto__$jscomp$41$$ = function() {
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
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52554_props__41909__auto__$jscomp$41$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52554_props__41909__auto__$jscomp$41$$);
};
$amp$components$sections$about_biennale$copy_block$$ = function($G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$42_vec__52710$$, $maybe_ref__41910__auto__$jscomp$42$$) {
  $G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$42_vec__52710$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$42_vec__52710$$), $maybe_ref__41910__auto__$jscomp$42$$], null);
  $G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$42_vec__52710$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$42_vec__52710$$, 0, null);
  $G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$42_vec__52710$$ = $APP.$cljs$core$__destructure_map$$($G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$42_vec__52710$$);
  var $title$jscomp$15$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$42_vec__52710$$, $APP.$cljs$cst$373$title$$), $copy$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$42_vec__52710$$, $cljs$cst$466$copy$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$42_vec__52710$$ = function() {
    return {className:"flex flex-col mb-12 font-futura", children:[function() {
      var $G__52724$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:$title$jscomp$15$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52724$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52724$$);
    }(), function() {
      var $G__52734$$ = {className:"text-slate-800", children:$copy$jscomp$1$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52734$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52734$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$42_vec__52710$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52718_map__52714_map__52714__$1_props__41909__auto__$jscomp$42_vec__52710$$);
};
$amp$components$sections$about_biennale$about_biennale_section$$ = function($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$, $maybe_ref__41910__auto__$jscomp$43$$) {
  $G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$), $maybe_ref__41910__auto__$jscomp$43$$], null);
  $G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$, 0, null);
  $G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$ = $APP.$cljs$core$__destructure_map$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$, $APP.$cljs$cst$444$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$, $APP.$cljs$cst$445$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$, $APP.$cljs$cst$446$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$6$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$6$$);
  var $visited_QMARK_$jscomp$7$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$, 1, null);
  $G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$about_biennale$images$$);
  var $images$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$, 1, null);
  var $image_gallery_container_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("image-gallery-container-ref"), $is_desktop_QMARK_$jscomp$2$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$ = function() {
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
              var $G__53022_G__53026$jscomp$inline_3716_G__53030$jscomp$inline_3717_JSCompiler_inline_result$jscomp$inline_3715$$ = {images:$images$jscomp$1$$, "image-gallery-container-ref":$image_gallery_container_ref$jscomp$1$$};
              $G__53022_G__53026$jscomp$inline_3716_G__53030$jscomp$inline_3717_JSCompiler_inline_result$jscomp$inline_3715$$ = {className:"absolute h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $G__53022_G__53026$jscomp$inline_3716_G__53030$jscomp$inline_3717_JSCompiler_inline_result$jscomp$inline_3715$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, 
              $G__53022_G__53026$jscomp$inline_3716_G__53030$jscomp$inline_3717_JSCompiler_inline_result$jscomp$inline_3715$$)};
              $G__53022_G__53026$jscomp$inline_3716_G__53030$jscomp$inline_3717_JSCompiler_inline_result$jscomp$inline_3715$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53022_G__53026$jscomp$inline_3716_G__53030$jscomp$inline_3717_JSCompiler_inline_result$jscomp$inline_3715$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__53022_G__53026$jscomp$inline_3716_G__53030$jscomp$inline_3717_JSCompiler_inline_result$jscomp$inline_3715$$);
              $G__53022_G__53026$jscomp$inline_3716_G__53030$jscomp$inline_3717_JSCompiler_inline_result$jscomp$inline_3715$$ = {ref:$image_gallery_container_ref$jscomp$1$$, className:"ml-8\n                                               w-7/12\n                                               relative\n                                               overflow-hidden", children:$G__53022_G__53026$jscomp$inline_3716_G__53030$jscomp$inline_3717_JSCompiler_inline_result$jscomp$inline_3715$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__53022_G__53026$jscomp$inline_3716_G__53030$jscomp$inline_3717_JSCompiler_inline_result$jscomp$inline_3715$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__53022_G__53026$jscomp$inline_3716_G__53030$jscomp$inline_3717_JSCompiler_inline_result$jscomp$inline_3715$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52998$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52998$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52992$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52992$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__52988_map__52980_map__52980__$1_props__41909__auto__$jscomp$43_vec__52977_vec__52981_vec__52984$$);
};
$amp$components$writing_card$writing_card$$ = function($G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$44_vec__52241$$, $maybe_ref__41910__auto__$jscomp$44$$) {
  $G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$44_vec__52241$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$44_vec__52241$$), $maybe_ref__41910__auto__$jscomp$44$$], null);
  $G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$44_vec__52241$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$44_vec__52241$$, 0, null);
  $G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$44_vec__52241$$ = $APP.$cljs$core$__destructure_map$$($G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$44_vec__52241$$);
  var $children$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$44_vec__52241$$, $APP.$cljs$cst$92$children$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$7$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$44_vec__52241$$ = function() {
    return {id:"hero", ref:$outer_ctx$jscomp$7$$, className:"absolute\n                    pointer-events-none\n                    h-screen\n                    w-screen\n                    overflow-hidden", children:function() {
      var $G__52253$$ = function() {
        return {className:"h-full\n                           w-full\n                           relative \n                           flex items-center\n                           justify-items-center justify-center", children:function() {
          var $G__52258$$ = function() {
            return {className:"z-20 absolute w-full h-full", children:[function() {
              var $G__52262$$ = {className:"w-full h-full absolute opacity-30"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52262$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52262$$);
            }(), function() {
              var $G__52266$$ = {"section-id":"main-quote", from:new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$434$opacity$$, 0, $APP.$cljs$cst$389$duration$$, 0.5, $APP.$cljs$cst$393$ease$$, "expo.inOut", $cljs$cst$467$stagger$$, 0.02], null), children:$children$jscomp$18$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$quote_section$quote_section$$, $G__52266$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$quote_section$quote_section$$, $G__52266$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52258$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52258$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52253$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52253$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$44_vec__52241$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52249_map__52244_map__52244__$1_props__41909__auto__$jscomp$44_vec__52241$$);
};
$amp$components$sections$mobile_hero_section$mobile_hero_section$$ = function($G__62405_props__41909__auto__$jscomp$45_vec__62396_vec__62399$$) {
  $APP.$helix$core$extract_cljs_props$$($G__62405_props__41909__auto__$jscomp$45_vec__62396_vec__62399$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__62405_props__41909__auto__$jscomp$45_vec__62396_vec__62399$$ = $APP.$amp$providers$main_provider$use_main_state$$();
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62405_props__41909__auto__$jscomp$45_vec__62396_vec__62399$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62405_props__41909__auto__$jscomp$45_vec__62396_vec__62399$$, 1, null);
  var $outer_ctx$jscomp$8$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__62405_props__41909__auto__$jscomp$45_vec__62396_vec__62399$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ctx$jscomp$8$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$382$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62405_props__41909__auto__$jscomp$45_vec__62396_vec__62399$$, 0, null);
  var $is_active_QMARK_$jscomp$10$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62405_props__41909__auto__$jscomp$45_vec__62396_vec__62399$$, 1, null);
  $G__62405_props__41909__auto__$jscomp$45_vec__62396_vec__62399$$ = function() {
    return {id:"video", ref:$outer_ctx$jscomp$8$$, className:"relative\n                    h-full\n                    w-full\n                    \n                    overflow-hidden", children:function() {
      var $G__62413$$ = function() {
        return {className:"w-screen h-screen \n                           flex\n                           flex-col\n                           relative \n                           flex items-center justify-items-center justify-center", children:[function() {
          var $G__62417$$ = function() {
            return {className:"absolute\n                                  h-screen\n                                  w-screen", children:[function() {
              var $G__62423$$ = {children:$is_active_QMARK_$jscomp$10$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62423$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__62423$$);
            }(), function() {
              var $G__62433$$ = {"playback-id":"fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo", "should-play?":$is_active_QMARK_$jscomp$10$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$mobile_hero_section$lazy_video_background$$, $G__62433$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$mobile_hero_section$lazy_video_background$$, $G__62433$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62417$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62417$$);
        }(), function() {
          var $G__62441$$ = function() {
            return {className:"absolute deep-yellow opacity-70 w-3/4 p-4", children:function() {
              var $G__62447$$ = function() {
                return {className:"font-futura", children:[function() {
                  var $G__62455$$ = {className:"text-5xl font-bold", children:"venice biennale 2026 Armenia Pavilion"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62455$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__62455$$);
                }(), function() {
                  var $G__62463_G__62471$jscomp$inline_3363$$ = {className:"font-bold uppercase", children:"The Studio"};
                  $G__62463_G__62471$jscomp$inline_3363$$ = {className:"text-4xl mt-4 italic", children:["Be a Patron of ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62463_G__62471$jscomp$inline_3363$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62463_G__62471$jscomp$inline_3363$$)]};
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62463_G__62471$jscomp$inline_3363$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__62463_G__62471$jscomp$inline_3363$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62447$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62447$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62441$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62441$$);
        }(), function() {
          var $G__62487$$ = function() {
            return {className:"absolute bottom-0 pb-4", children:function() {
              var $G__62497$$ = function() {
                return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
                  return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                }};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__62497$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__62497$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62487$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62487$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62413$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62413$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62405_props__41909__auto__$jscomp$45_vec__62396_vec__62399$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62405_props__41909__auto__$jscomp$45_vec__62396_vec__62399$$);
};
$amp$components$sections$non_profit$title$$ = function($G__62318_G__62324$jscomp$inline_3720_G__62329$jscomp$inline_3721_props__41909__auto__$jscomp$46$$) {
  $APP.$helix$core$extract_cljs_props$$($G__62318_G__62324$jscomp$inline_3720_G__62329$jscomp$inline_3721_props__41909__auto__$jscomp$46$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__62318_G__62324$jscomp$inline_3720_G__62329$jscomp$inline_3721_props__41909__auto__$jscomp$46$$ = {className:"w-1", children:"support the Armenia Pavilion"};
  $G__62318_G__62324$jscomp$inline_3720_G__62329$jscomp$inline_3721_props__41909__auto__$jscomp$46$$ = {className:"flex flex-col", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62318_G__62324$jscomp$inline_3720_G__62329$jscomp$inline_3721_props__41909__auto__$jscomp$46$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__62318_G__62324$jscomp$inline_3720_G__62329$jscomp$inline_3721_props__41909__auto__$jscomp$46$$)};
  $G__62318_G__62324$jscomp$inline_3720_G__62329$jscomp$inline_3721_props__41909__auto__$jscomp$46$$ = {className:"lg:flex\n                    w-full\n                    lg:h-2/5\n                    z-20\n                    items-center\n                    justify-between\n                    bg-black/10\n                    lg:p-12 p-4\n                    lg:text-6xl text-3xl\n                    font-futura\n                    font-bold\n                    text-slate-800", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? 
  $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62318_G__62324$jscomp$inline_3720_G__62329$jscomp$inline_3721_props__41909__auto__$jscomp$46$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62318_G__62324$jscomp$inline_3720_G__62329$jscomp$inline_3721_props__41909__auto__$jscomp$46$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62318_G__62324$jscomp$inline_3720_G__62329$jscomp$inline_3721_props__41909__auto__$jscomp$46$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62318_G__62324$jscomp$inline_3720_G__62329$jscomp$inline_3721_props__41909__auto__$jscomp$46$$);
};
$amp$components$sections$non_profit$copy_block$$ = function($G__62347_map__62345_map__62345__$1_props__41909__auto__$jscomp$47_vec__62342$$, $maybe_ref__41910__auto__$jscomp$47$$) {
  $G__62347_map__62345_map__62345__$1_props__41909__auto__$jscomp$47_vec__62342$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__62347_map__62345_map__62345__$1_props__41909__auto__$jscomp$47_vec__62342$$), $maybe_ref__41910__auto__$jscomp$47$$], null);
  $G__62347_map__62345_map__62345__$1_props__41909__auto__$jscomp$47_vec__62342$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62347_map__62345_map__62345__$1_props__41909__auto__$jscomp$47_vec__62342$$, 0, null);
  $G__62347_map__62345_map__62345__$1_props__41909__auto__$jscomp$47_vec__62342$$ = $APP.$cljs$core$__destructure_map$$($G__62347_map__62345_map__62345__$1_props__41909__auto__$jscomp$47_vec__62342$$);
  var $title$jscomp$16$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62347_map__62345_map__62345__$1_props__41909__auto__$jscomp$47_vec__62342$$, $APP.$cljs$cst$373$title$$), $copy$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62347_map__62345_map__62345__$1_props__41909__auto__$jscomp$47_vec__62342$$, $cljs$cst$466$copy$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__62347_map__62345_map__62345__$1_props__41909__auto__$jscomp$47_vec__62342$$ = function() {
    return {className:"flex flex-col mb-12 font-futura", children:[function() {
      var $G__62351$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:$title$jscomp$16$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62351$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__62351$$);
    }(), function() {
      var $G__62361$$ = {className:"text-slate-800", children:$copy$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62361$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__62361$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62347_map__62345_map__62345__$1_props__41909__auto__$jscomp$47_vec__62342$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62347_map__62345_map__62345__$1_props__41909__auto__$jscomp$47_vec__62342$$);
};
$amp$components$sections$non_profit$non_profit_section$$ = function($G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$, $maybe_ref__41910__auto__$jscomp$48$$) {
  $G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$), $maybe_ref__41910__auto__$jscomp$48$$], null);
  $G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$, 0, null);
  $G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$ = $APP.$cljs$core$__destructure_map$$($G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$, $APP.$cljs$cst$444$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$, $APP.$cljs$cst$445$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$, $APP.$cljs$cst$446$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$9$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$9$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$, 1, null);
  $G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$non_profit$images$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$, 1, null);
  $APP.$helix$hooks$use_ref$$("image-gallery-container-ref");
  $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$ = function() {
    return {ref:$outer_ctx$jscomp$9$$, className:"h-full \n                          w-full\n                          flex\n                          blue-purple-grad\n                          light-red-grad\n                          items-center\n                          justify-center\n                          font-futura\n                          relative", children:function() {
      var $G__62445$$ = function() {
        return {className:"flex \n                                 flex-col\n                                 overflow-hidden\n                                 relative\n                                 w-full md:w-10/12 lg:w-full\n                                 lg:p-12 p-4", children:[function() {
          var $G__62453$$ = {};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$non_profit$title$$, $G__62453$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$non_profit$title$$, $G__62453$$);
        }(), function() {
          var $G__62461$$ = function() {
            return {className:"flex overflow-hidden relative", children:function() {
              var $G__62469$$ = function() {
                return {className:"lg:w-1/2 \n                                               lg:p-16 p-4", children:[function() {
                  var $G__62479$$ = {title:"", copy:"Funds go to keep THE STUDIO alive for six months in Venice.  Your support ensures the artist’s residency, covers materials and fabrication, pays our production crew, builds and ships the pavilion, and funds public programs and the exhibition catalogue.  Gifts are handled by Fallen Angels, a registered 501(c)(3) non‑profit; donations to a 501(c)(3) are tax‑deductible"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$non_profit$copy_block$$, $G__62479$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$non_profit$copy_block$$, $G__62479$$);
                }(), function() {
                  var $G__62485$$ = function() {
                    return {className:"flex flex-col mb-12 font-futura", children:[function() {
                      var $G__62495$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:"What Your Donation Funds"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62495$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__62495$$);
                    }(), function() {
                      var $G__62505$$ = function() {
                        return {className:"list-disc list-outside ml-5 text-slate-800", children:[function() {
                          var $G__62509$$ = {children:"Artist \x26 team residency in Venice"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__62509$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__62509$$);
                        }(), function() {
                          var $G__62513$$ = {children:"Fabrication materials and modular blocks"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__62513$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__62513$$);
                        }(), function() {
                          var $G__62517$$ = {children:"Production crew \x26 documentation (video, photography, editing)"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__62517$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__62517$$);
                        }(), function() {
                          var $G__62521$$ = {children:"Pavilion build‑out, shipping \x26 logistics"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__62521$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__62521$$);
                        }(), function() {
                          var $G__62525$$ = {children:"Public programs \x26 education"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__62525$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__62525$$);
                        }(), function() {
                          var $G__62529$$ = {children:"Archival filming \x26 catalogue"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__62529$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__62529$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ul", $G__62505$$) : $APP.$helix$core$jsxs$$.call(null, "ul", $G__62505$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62485$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62485$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62469$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62469$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62461$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62461$$);
        }(), function() {
          var $G__62538$$ = function() {
            return {className:"lg:absolute lg:bottom-[40px] lg:left-1/2 lg:-translate-x-1/2", children:function() {
              var $G__62542$$ = function() {
                return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
                  return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                }};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__62542$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__62542$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62538$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62538$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62445$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62445$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__62437_map__62411_map__62411__$1_props__41909__auto__$jscomp$48_vec__62408_vec__62424_vec__62427$$);
};
$amp$components$sections$team_section$team_member_card$$ = function($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$, $data$jscomp$135_maybe_ref__41910__auto__$jscomp$49$$) {
  $G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$), $data$jscomp$135_maybe_ref__41910__auto__$jscomp$49$$], null);
  $G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$, 0, null);
  $G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$ = $APP.$cljs$core$__destructure_map$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$);
  $data$jscomp$135_maybe_ref__41910__auto__$jscomp$49$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$, $APP.$cljs$cst$28$data$$);
  var $images$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$, $cljs$cst$464$images$$), $flash_images_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$, $cljs$cst$471$flash_images_handler$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$ = $APP.$cljs$core$__destructure_map$$($data$jscomp$135_maybe_ref__41910__auto__$jscomp$49$$);
  var $name$jscomp$196$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$, $APP.$cljs$cst$182$name$$), $role$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$, $APP.$cljs$cst$468$role$$), $copy$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$, 
  $cljs$cst$466$copy$$), $social$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$, $cljs$cst$469$social$$), $email$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$, $cljs$cst$470$email$$);
  $G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$ = function() {
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
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52595_map__52577_map__52577__$1_map__52587__$1_props__41909__auto__$jscomp$49_vec__52574$$);
};
$amp$components$sections$team_section$team_members$$ = function($G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$50_vec__52707$$, $maybe_ref__41910__auto__$jscomp$50$$) {
  $G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$50_vec__52707$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$50_vec__52707$$), $maybe_ref__41910__auto__$jscomp$50$$], null);
  $G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$50_vec__52707$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$50_vec__52707$$, 0, null);
  $G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$50_vec__52707$$ = $APP.$cljs$core$__destructure_map$$($G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$50_vec__52707$$);
  var $flash_images_handler$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$50_vec__52707$$, $cljs$cst$471$flash_images_handler$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$50_vec__52707$$ = function() {
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
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$50_vec__52707$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52716_map__52711_map__52711__$1_props__41909__auto__$jscomp$50_vec__52707$$);
};
$amp$components$sections$team_section$team_section$$ = function($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$, $maybe_ref__41910__auto__$jscomp$51$$) {
  $G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$), $maybe_ref__41910__auto__$jscomp$51$$], null);
  $G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$, 0, null);
  $G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$ = $APP.$cljs$core$__destructure_map$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$, $APP.$cljs$cst$444$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$, $APP.$cljs$cst$445$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$, $APP.$cljs$cst$446$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$10$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$10$$);
  var $visited_QMARK_$jscomp$10$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$, 1, null);
  $G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$team_section$zadik_images$$);
  var $images$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$, 0, null), $set_images$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$, 1, null), $is_desktop_QMARK_$jscomp$4$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$(), $image_gallery_container_ref$jscomp$3$$ = 
  $APP.$helix$hooks$use_ref$$("image-gallery-container-ref");
  $G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$ = function() {
    return {ref:$outer_ctx$jscomp$10$$, className:"relative\n                        h-full w-full\n                        flex items-end justify-center\n                        pink-grad blue-light-grad", children:function() {
      var $G__52880$$ = function() {
        return {className:"relative\n                               flex\n                               overflow-hidden", children:[function() {
          var $G__52888_G__52898$jscomp$inline_3644$$ = {className:"overflow-hidden", style:{writingMode:$APP.$helix$impl$props$__GT_js$$("vertical-rl")}, children:"team.թիմ.équipe.equipo.squadra.team.թիմ.équipe.equipo.squadra.team"};
          $G__52888_G__52898$jscomp$inline_3644$$ = {className:"absolute left-0 top-0\n                                      font-futura font-bold text-8xl\n                                      light-blue-font-color\n                                      opacity-30", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__52888_G__52898$jscomp$inline_3644$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__52888_G__52898$jscomp$inline_3644$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52888_G__52898$jscomp$inline_3644$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52888_G__52898$jscomp$inline_3644$$);
        }(), function() {
          var $G__52922$$ = {"flash-images-handler":$set_images$jscomp$2$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_members$$, $G__52922$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_members$$, $G__52922$$);
        }(), $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$4$$) ? $visited_QMARK_$jscomp$10$$ : $is_desktop_QMARK_$jscomp$4$$) ? function() {
          var $G__52940_G__52948$jscomp$inline_3724_G__52952$jscomp$inline_3725_JSCompiler_inline_result$jscomp$inline_3723$$ = {images:$images$jscomp$4$$, "image-gallery-container-ref":$image_gallery_container_ref$jscomp$3$$};
          $G__52940_G__52948$jscomp$inline_3724_G__52952$jscomp$inline_3725_JSCompiler_inline_result$jscomp$inline_3723$$ = {className:"absolute h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $G__52940_G__52948$jscomp$inline_3724_G__52952$jscomp$inline_3725_JSCompiler_inline_result$jscomp$inline_3723$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, 
          $G__52940_G__52948$jscomp$inline_3724_G__52952$jscomp$inline_3725_JSCompiler_inline_result$jscomp$inline_3723$$)};
          $G__52940_G__52948$jscomp$inline_3724_G__52952$jscomp$inline_3725_JSCompiler_inline_result$jscomp$inline_3723$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52940_G__52948$jscomp$inline_3724_G__52952$jscomp$inline_3725_JSCompiler_inline_result$jscomp$inline_3723$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52940_G__52948$jscomp$inline_3724_G__52952$jscomp$inline_3725_JSCompiler_inline_result$jscomp$inline_3723$$);
          $G__52940_G__52948$jscomp$inline_3724_G__52952$jscomp$inline_3725_JSCompiler_inline_result$jscomp$inline_3723$$ = {ref:$image_gallery_container_ref$jscomp$3$$, className:"relative\n                                        w-8/12\n                                        ml-8\n                                        overflow-hidden", children:$G__52940_G__52948$jscomp$inline_3724_G__52952$jscomp$inline_3725_JSCompiler_inline_result$jscomp$inline_3723$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52940_G__52948$jscomp$inline_3724_G__52952$jscomp$inline_3725_JSCompiler_inline_result$jscomp$inline_3723$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52940_G__52948$jscomp$inline_3724_G__52952$jscomp$inline_3725_JSCompiler_inline_result$jscomp$inline_3723$$);
        }() : null]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52880$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52880$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__52872_map__52830_map__52830__$1_props__41909__auto__$jscomp$51_vec__52827_vec__52847_vec__52850$$);
};
$amp$components$sections$work_overview$work_overview$$ = function($G__62596_props__41909__auto__$jscomp$52$$) {
  $APP.$helix$core$extract_cljs_props$$($G__62596_props__41909__auto__$jscomp$52$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__62596_props__41909__auto__$jscomp$52$$ = function() {
    return {"section-id":"about-work", children:function() {
      var $G__62603$$ = function() {
        return {className:"flex\n               grey-grad\n                  justify-center\n                  items-center\n                  flex-col\n                  w-full", children:function() {
          var $G__62607$$ = function() {
            return {className:"text-slate-300\n                   font-light\n                   flex\n                   justify-center\n                   flex-col\n                   h-full\n                   py-8\n                   md:w-3/4 w-full\n                   p-8\n                   text-lg\n                   lg:text-2xl", children:[function() {
              var $G__62611$$ = {className:"mt-12\n                        mb-16\n                        font-bold\n                        font-futura\n                        text-5xl", children:"THE STUDIO"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62611$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__62611$$);
            }(), function() {
              var $G__62620_G__62628$jscomp$inline_3374$$ = {className:"font-medium text-pink-600", children:":working-studio "};
              $G__62620_G__62628$jscomp$inline_3374$$ = {className:"mb-8", children:["For the full duration of the Biennale, the Armenia Pavilion becomes a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62620_G__62628$jscomp$inline_3374$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62620_G__62628$jscomp$inline_3374$$), "— Zadik Zadikian’s living laboratory, a site where form is made, unmade, and made again."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62620_G__62628$jscomp$inline_3374$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__62620_G__62628$jscomp$inline_3374$$);
            }(), function() {
              var $G__62640_G__62646$jscomp$inline_3377$$ = {className:"font-medium text-pink-600", children:":7–10 people"};
              $G__62640_G__62646$jscomp$inline_3377$$ = {className:"mb-8", children:["Each day, ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62640_G__62646$jscomp$inline_3377$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62640_G__62646$jscomp$inline_3377$$), " move through the space — assistants, fabricators, editors, camera crew — all part of a continuous organism of creation."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62640_G__62646$jscomp$inline_3377$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__62640_G__62646$jscomp$inline_3377$$);
            }(), function() {
              var $G__62658_G__62664$jscomp$inline_3380$$ = {className:"font-medium text-pink-600", children:":architecture-of-change"};
              $G__62658_G__62664$jscomp$inline_3380$$ = {className:"mb-8", children:["They produce thousands of modular units: lightweight foam forms hand-coated in thin plaster, each one a small gesture in a much larger ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62658_G__62664$jscomp$inline_3380$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62658_G__62664$jscomp$inline_3380$$), "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62658_G__62664$jscomp$inline_3380$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__62658_G__62664$jscomp$inline_3380$$);
            }(), function() {
              var $G__62671_G__62679$jscomp$inline_3383$$ = {className:"font-medium text-pink-600", children:"breath"};
              $G__62671_G__62679$jscomp$inline_3383$$ = {className:"mb-8", children:["These units are stacked into structures — walls, pyramids, horizons, interior architectures — shifting daily as fragile formations rise and dissolve like ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62671_G__62679$jscomp$inline_3383$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62671_G__62679$jscomp$inline_3383$$), "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62671_G__62679$jscomp$inline_3383$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__62671_G__62679$jscomp$inline_3383$$);
            }(), function() {
              var $G__62689_G__62693$jscomp$inline_3386$$ = {className:"font-medium text-pink-600", children:":The-artwork"};
              $G__62689_G__62693$jscomp$inline_3386$$ = {className:"mb-12 italic", children:["Nothing is static. Nothing is final. ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62689_G__62693$jscomp$inline_3386$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62689_G__62693$jscomp$inline_3386$$), " is the cycle itself — the rhythm of making, unmaking, and returning again to zero."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62689_G__62693$jscomp$inline_3386$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__62689_G__62693$jscomp$inline_3386$$);
            }(), function() {
              var $G__62697$$ = {className:"mb-8 italic", children:"In Minor Keys — The Philosophy of the Work"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62697$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__62697$$);
            }(), function() {
              var $G__62707_G__62715$jscomp$inline_3389$$ = {className:"font-medium text-pink-600", children:":Structure"};
              $G__62707_G__62715$jscomp$inline_3389$$ = {className:"mb-8", children:["Here, repetition becomes a meditation. Labor becomes devotion. ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62707_G__62715$jscomp$inline_3389$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62707_G__62715$jscomp$inline_3389$$), " is only a temporary embodiment of an ongoing frequency."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62707_G__62715$jscomp$inline_3389$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__62707_G__62715$jscomp$inline_3389$$);
            }(), function() {
              var $G__62727_G__62731$jscomp$inline_3392$$ = {className:"font-medium text-pink-600", children:":organism"};
              $G__62727_G__62731$jscomp$inline_3392$$ = {className:"mb-8", children:["The studio behaves like an ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62727_G__62731$jscomp$inline_3392$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62727_G__62731$jscomp$inline_3392$$), " — sensitive, cyclical, and always in motion, responding to the theme of “In Minor Keys” through gestures rather than declarations."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62727_G__62731$jscomp$inline_3392$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__62727_G__62731$jscomp$inline_3392$$);
            }(), function() {
              var $G__62739_G__62747$jscomp$inline_3395$$ = {className:"font-medium text-pink-600", children:":quiet-resilience"};
              $G__62739_G__62747$jscomp$inline_3395$$ = {className:"mb-8", children:["The material language is intentionally light: foam, plaster, dust. Fragile materials meet fragile cycles — a nod to Armenian histories of endurance, where the act of repeating becomes a form of survival, a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62739_G__62747$jscomp$inline_3395$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62739_G__62747$jscomp$inline_3395$$), 
              "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62739_G__62747$jscomp$inline_3395$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__62739_G__62747$jscomp$inline_3395$$);
            }(), function() {
              var $G__62753$$ = {className:"mb-8", children:"Nothing here reaches for spectacle. The work moves in frequencies, not fireworks. What matters is the pulse — the rhythm of stacking, filming, dismantling, and returning again to the beginning."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62753$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__62753$$);
            }(), function() {
              var $G__62761_G__62769$jscomp$inline_3398$$ = {className:"font-medium text-pink-600", children:":score"};
              $G__62761_G__62769$jscomp$inline_3398$$ = {className:"mb-8", children:["This cycle functions like a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62761_G__62769$jscomp$inline_3398$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62761_G__62769$jscomp$inline_3398$$), ": a choreography of hands, blocks, dust, light. Each day, the studio composes itself anew, only to erase itself by night."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62761_G__62769$jscomp$inline_3398$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__62761_G__62769$jscomp$inline_3398$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62607$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62607$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62603$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62603$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__62596_props__41909__auto__$jscomp$52$$, "about-work") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__62596_props__41909__auto__$jscomp$52$$, "about-work");
};
$APP.$amp$views$landing_view$landing_view$$ = function($G__62873_props__41909__auto__$jscomp$53$$) {
  $APP.$helix$core$extract_cljs_props$$($G__62873_props__41909__auto__$jscomp$53$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $container_ref$$ = $APP.$helix$hooks$use_ref$$("container-ref"), $is_desktop_QMARK_$jscomp$5$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__62873_props__41909__auto__$jscomp$53$$ = function() {
    return {ref:$container_ref$$, className:"", children:[$APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$5$$) ? function() {
      var $G__62877$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$navs$logo_nav$logo_nav$$, $G__62877$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$navs$logo_nav$logo_nav$$, $G__62877$$);
    }() : null, function() {
      var $G__62879$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$navs$donation_nav$donation_nav$$, $G__62879$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$navs$donation_nav$donation_nav$$, $G__62879$$);
    }(), function() {
      var $G__62881_G__62886$jscomp$inline_3401$$ = {"total-sections":3};
      $G__62881_G__62886$jscomp$inline_3401$$ = {className:"fixed z-20 justify-center items-center top-1/2 -translate-y-1/2 left-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$navs$progress_menu$progress_menu$$, $G__62881_G__62886$jscomp$inline_3401$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$navs$progress_menu$progress_menu$$, $G__62881_G__62886$jscomp$inline_3401$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62881_G__62886$jscomp$inline_3401$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62881_G__62886$jscomp$inline_3401$$);
    }(), $APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$5$$) ? function() {
      var $G__62890$$ = function() {
        return {"section-id":"video", children:function() {
          var $G__62895$$ = function() {
            return {className:"w-screen h-screen relative", children:[function() {
              var $G__62899_G__62903$jscomp$inline_3404$$ = {"playback-id":"fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo"};
              $G__62899_G__62903$jscomp$inline_3404$$ = {className:"absolute w-full h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$video_section$video_section$$, $G__62899_G__62903$jscomp$inline_3404$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$video_section$video_section$$, $G__62899_G__62903$jscomp$inline_3404$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62899_G__62903$jscomp$inline_3404$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62899_G__62903$jscomp$inline_3404$$);
            }(), function() {
              var $G__62907_G__62911$jscomp$inline_3055$$ = {};
              $G__62907_G__62911$jscomp$inline_3055$$ = {className:"absolute w-full h-full pointer-events-none", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$playful_titles$playful_titles$$, $G__62907_G__62911$jscomp$inline_3055$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$playful_titles$playful_titles$$, $G__62907_G__62911$jscomp$inline_3055$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62907_G__62911$jscomp$inline_3055$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62907_G__62911$jscomp$inline_3055$$);
            }(), function() {
              var $G__62913$$ = function() {
                return {className:"absolute bottom-[40px] left-1/2 -translate-x-1/2", children:function() {
                  var $G__62917$$ = function() {
                    return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
                      return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                    }};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__62917$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__62917$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62913$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62913$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62895$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62895$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__62890$$, "video") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__62890$$, "video");
    }() : function() {
      var $G__62921_G__62926$jscomp$inline_3058$$ = {};
      $G__62921_G__62926$jscomp$inline_3058$$ = {"section-id":"mobile-hero", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, $G__62921_G__62926$jscomp$inline_3058$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, $G__62921_G__62926$jscomp$inline_3058$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__62921_G__62926$jscomp$inline_3058$$, "mobile-hero") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__62921_G__62926$jscomp$inline_3058$$, "mobile-hero");
    }(), $APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$5$$) ? function() {
      var $G__62928_G__62933$jscomp$inline_3061$$ = {};
      $G__62928_G__62933$jscomp$inline_3061$$ = {"section-id":"hero", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$hero_header$hero_header$$, $G__62928_G__62933$jscomp$inline_3061$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$hero_header$hero_header$$, $G__62928_G__62933$jscomp$inline_3061$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__62928_G__62933$jscomp$inline_3061$$, "hero") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__62928_G__62933$jscomp$inline_3061$$, "hero");
    }() : null, function() {
      var $G__62935$$ = function() {
        return {"img-src":"https://atd-722658831.imgix.net/stacks/FileName_205932_001DenoisedBeauty_ViewLayer_012.tif", children:function() {
          var $G__62939$$ = function() {
            return {children:[function() {
              var $G__62943$$ = {children:"Rendering - "};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62943$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62943$$);
            }(), function() {
              var $G__62948$$ = {className:"italic font-bold", children:"THE ORANGE ONE"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62948$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62948$$);
            }(), function() {
              var $G__62952$$ = {children:" - © Zadik Zadikian 2026"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62952$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62952$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62939$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62939$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$views$hero_image_view$hero_image_view$$, $G__62935$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$views$hero_image_view$hero_image_view$$, $G__62935$$);
    }(), function() {
      var $G__62960$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$work_overview$work_overview$$, $G__62960$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$work_overview$work_overview$$, $G__62960$$);
    }(), function() {
      var $G__62964$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_section$$, $G__62964$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_section$$, $G__62964$$);
    }(), function() {
      var $G__62968$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$about_biennale_section$$, $G__62968$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$about_biennale_section$$, $G__62968$$);
    }(), function() {
      var $G__62974$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$non_profit$non_profit_section$$, $G__62974$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$non_profit$non_profit_section$$, $G__62974$$);
    }(), function() {
      var $G__62978$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$sections$contact_section$contact_section$$, $G__62978$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$sections$contact_section$contact_section$$, $G__62978$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62873_props__41909__auto__$jscomp$53$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62873_props__41909__auto__$jscomp$53$$);
};
$cljs$cst$464$images$$ = new $APP.$cljs$core$Keyword$$(null, "images", "images", 1757475080);
$cljs$cst$457$on_mouse_over_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-mouse-over-handler", "on-mouse-over-handler", -1708524524);
$cljs$cst$448$from$$ = new $APP.$cljs$core$Keyword$$(null, "from", "from", 1815293044);
$cljs$cst$460$click$$ = new $APP.$cljs$core$Keyword$$(null, "click", "click", 1912301393);
$cljs$cst$469$social$$ = new $APP.$cljs$core$Keyword$$(null, "social", "social", -1560314971);
$cljs$cst$447$quote$$ = new $APP.$cljs$core$Keyword$$(null, "quote", "quote", -262615245);
$cljs$cst$456$on_click_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-click-handler", "on-click-handler", 746440723);
$cljs$cst$453$hover_title_ref$$ = new $APP.$cljs$core$Keyword$$(null, "hover-title-ref", "hover-title-ref", -819024146);
$cljs$cst$451$cta_title$$ = new $APP.$cljs$core$Keyword$$(null, "cta-title", "cta-title", -565700885);
$cljs$cst$465$image_gallery_container_ref$$ = new $APP.$cljs$core$Keyword$$(null, "image-gallery-container-ref", "image-gallery-container-ref", 984527810);
$cljs$cst$454$text$$ = new $APP.$cljs$core$Keyword$$(null, "text", "text", -1790561697);
$cljs$cst$461$target_ref$$ = new $APP.$cljs$core$Keyword$$(null, "target-ref", "target-ref", -164384803);
$cljs$cst$470$email$$ = new $APP.$cljs$core$Keyword$$(null, "email", "email", 1415816706);
$cljs$cst$459$writing$$ = new $APP.$cljs$core$Keyword$$(null, "writing", "writing", -1486865108);
$cljs$cst$449$to$$ = new $APP.$cljs$core$Keyword$$(null, "to", "to", 192099007);
$cljs$cst$467$stagger$$ = new $APP.$cljs$core$Keyword$$(null, "stagger", "stagger", -689791930);
$cljs$cst$471$flash_images_handler$$ = new $APP.$cljs$core$Keyword$$(null, "flash-images-handler", "flash-images-handler", -431066401);
$cljs$cst$455$is_playing_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "is-playing?", "is-playing?", -274112098);
$cljs$cst$462$other$$ = new $APP.$cljs$core$Keyword$$(null, "other", "other", 995793544);
$cljs$cst$466$copy$$ = new $APP.$cljs$core$Keyword$$(null, "copy", "copy", -1077617309);
$cljs$cst$458$on_mouse_out_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-mouse-out-handler", "on-mouse-out-handler", -2132576332);
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
var $amp$components$sections$about_biennale$images$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/biennale/metalocus_venice-biennale-corderie-arsenale-photo-giulio-squillacciotti_01.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/biennale/arsenale-venezia.jpg", 
$APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/biennale/6431873131_844b5c6d48_b-112659047.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/biennale/Edificio-E-delle-Sale-dArmi-sud-Arsenale-di-Venezia_01-406863818.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/biennale/GettyImages-1396739612-2882003488.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/biennale/arsenale-venezia-cosa-vedere-come-visitare-408454160.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/biennale/Pavilions-tours-plan.png", 
$APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/biennale/Pavilions-tours-plan.png", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/biennale/IMG_1754-scaled-1386547518.jpg", $APP.$cljs$cst$435$caption$$, null], null)], null);
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
var $amp$components$sections$non_profit$images$$ = new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/biennale/metalocus_venice-biennale-corderie-arsenale-photo-giulio-squillacciotti_01.jpg", $APP.$cljs$cst$435$caption$$, "Arsenale", $APP.$cljs$cst$436$credit$$, "Artnews"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$425$src$$, 
"https://atd-722658831.imgix.net/biennale/arsenale-venezia.jpg", $APP.$cljs$cst$435$caption$$, "Arsenale", $APP.$cljs$cst$436$credit$$, "Artnews"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/biennale/6431873131_844b5c6d48_b-112659047.jpg", $APP.$cljs$cst$435$caption$$, "Arsenale", $APP.$cljs$cst$436$credit$$, "Artnews"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$title$$, "", null, null) : (void 0).call(null, $amp$components$sections$non_profit$title$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$title$$, 
"amp.components.sections.non-profit/title"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$copy_block$$, "", null, null) : (void 0).call(null, $amp$components$sections$non_profit$copy_block$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$copy_block$$, "amp.components.sections.non-profit/copy-block"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$non_profit_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', 
null, null) : (void 0).call(null, $amp$components$sections$non_profit$non_profit_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$non_profit_section$$, "amp.components.sections.non-profit/non-profit-section"));
var $amp$components$sections$team_section$zadik_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/zadik/shovel-nails.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/zadik/zz-portrait.tiff", $APP.$cljs$cst$435$caption$$, 
null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/zadik/single_stack_1970s.tif", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/zadik/golden_water_heater.tif", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-10.psd", 
$APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-76.psd", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/zadik/golden_kitchen.tif", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/2.webp", 
$APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/zadik/ps1_entrance_1.tif", 
$APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-18.psd", 
$APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/2.webp?fit\x3dcrop\x26w\x3d214\x26h\x3d172\x26dpr\x3d2\x26q\x3d50\x26auto\x3dformat%2Ccompress\x26cacheID\x3d1763536997", $APP.$cljs$cst$435$caption$$, null], null)], null), $amp$components$sections$team_section$tina_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 20, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/2.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$435$caption$$, null], null)], null), $amp$components$sections$team_section$tony_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 22, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", 
$APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, 
[$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, 
"https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$435$caption$$, 
null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$435$caption$$, null], null), 
new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, 
"https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", 
$APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, 
[$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$435$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$425$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", 
$APP.$cljs$cst$435$caption$$, null], null)], null), $amp$components$sections$team_section$tony_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$182$name$$, "Tony Shafrazi", $APP.$cljs$cst$468$role$$, "Curator", $cljs$cst$469$social$$, "@tonyshafrazi", $cljs$cst$470$email$$, "tony.shafrazi@armenianpavilion2026.org", $cljs$cst$466$copy$$, "Tony Shafrazi (b. 1943, Abadan, Iran) is a renowned art dealer, gallerist, and curator whose career has shaped the contemporary art world. Trained at the Royal College of Art in London, he moved to New York in 1969 and soon became closely associated with figures such as Andy Warhol, Roy Lichtenstein, and Leo Castelli. His early years were marked by bold artistic interventions, before establishing himself as one of the leading dealers of his generation.\n                      \n                      In 1979, he opened the Tony Shafrazi Gallery in New York, championing artists like Jean-Michel Basquiat, Keith Haring, and Kenny Scharf, alongside exhibitions of Picasso, Francis Bacon, Jasper Johns, Carl Andre, and Warhol. Internationally, he advised the Tehran Museum of Contemporary Art in assembling one of the most significant collections of Western modernism outside Europe and the United States.\n                      \n                      Shafrazi first met Zadik Zadikian while the artist was working with Richard Serra, later including him in his historic Tehran exhibition before the 1979 Revolution. Their collaboration forged a lasting connection, and Shafrazi has supported Zadikian’s work over the decades. For this project, he brings unrivaled experience, a global network, and a deep commitment to presenting Armenia on the world stage at the Venice Biennale."], 
null), $amp$components$sections$team_section$tina_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$182$name$$, "Tina Chakarian", $APP.$cljs$cst$468$role$$, "Curator", $cljs$cst$469$social$$, "@tinachakarian", $cljs$cst$470$email$$, "tina.chakarian@armenianpavilion2026.org", $cljs$cst$466$copy$$, "Tina Chakarian is a curator currently living in Boston and Yerevan. \n\nBorn and raised in Beirut, Lebanon, she studied Visual Arts at UCLA and Tufts University. \n\nShe was previously the Development Director at the Armenian Museum of America and an adjunct Professor at several Boston based universities.  Tina serves as a Principal and Creative Director at Chakarian Design Group, LLC, and, co-curates the Midway Artists Studios in Boston. \n\nAs a visual artist, Tina has exhibited a number of installations in the U.S., Lebanon and Armenia, including “Living Utopias” (Yerevan, 2018). \n\nShe has decades of experience in the field of philanthropy, where she combines her skills as an artist and fundraiser, to help support organizations and initiatives closest to her heart. \n"], 
null), $amp$components$sections$team_section$zadik_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$182$name$$, "Zadik Zadikian", $APP.$cljs$cst$468$role$$, "Artist", $cljs$cst$469$social$$, "@zadikzadikian", $cljs$cst$470$email$$, "zadik.zadikian@armenianpavilion2026.org", $cljs$cst$466$copy$$, "Born in 1948 in Yerevan, Soviet Armenia, Zadik Zadikian entered the Art Academy at fifteen and exhibited in Yerevan and Moscow before escaping the Soviet Union at nineteen by swimming across the Arax River in winter. In 1969 he arrived in San Francisco, apprenticing with sculptor Beniamino Bufano, and later moved to New York where he assisted Richard Serra on his first monumental oil-stick wall drawings—one of which was named after him. These encounters with scale, discipline, and radical form became the foundation of his artistic language.\n\nIn 1976, Zadikian gilded his entire 10,000-square-foot studio in industrial gold, an immersive act of transformation that anticipated his project 1000 Bricks Gilded in 24-Karat Gold Leaf (1978). Since then, gold has remained his central medium—at once alchemical and architectural, extravagant yet elemental. His brick-like forms distill structure into essence, revealing permanence through repetition and beauty within order.\n\nReflecting on exile, Zadikian writes: “When I escaped, I lost everything—my family, my country, my world. That void became my canvas. Gold is the witness. Beauty is found within structure. Repetition is the foundation of change.” Now based in Los Angeles, he has recently exhibited at the Brooklyn Museum and Tony Shafrazi’s Gallery Without Walls."], 
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