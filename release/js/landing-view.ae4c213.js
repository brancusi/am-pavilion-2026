(function(){
'use strict';
var $goog$functions$throttle$$, $cljs$core$rand_int$$, $amp$hooks$use_scroll_trigger$use_scroll_trigger$$, $amp$components$sections$teaser_section$teaser_section$$, $amp$hooks$use_window_resize$use_window_size$$, $amp$components$navs$donation_nav$donation_nav$$, $amp$components$navs$logo_nav$logo_nav$$, $amp$hooks$use_scroll_progress$use_scroll_progress$cljs$0core$0IFn$0_invoke$0arity$0variadic$$, $amp$components$navs$progress_menu$progress_menu$$, $amp$components$navs$progress_menu$progress_menu_v2$$, 
$amp$components$hover_title$hover_title$$, $amp$components$ui$playable_text$playable_text$$, $amp$components$nav_link$nav_link$$, $amp$components$playful_titles$hero_menu$$, $amp$components$playful_titles$playful_titles$$, $amp$components$elements$lazy_image_gallery$check_column_dimensions$$, $amp$components$elements$lazy_image_gallery$aspect_column$$, $amp$components$elements$lazy_image_gallery$find_closest_size$$, $amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$, $amp$components$elements$lazy_image_gallery$image_layer$$, 
$amp$components$elements$lazy_image_gallery$caption_layer$$, $amp$components$elements$lazy_image_gallery$image_card$$, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $amp$components$sections$about_biennale$title$$, $amp$components$sections$about_biennale$copy_block$$, $amp$components$sections$about_biennale$about_biennale_section$$, $amp$components$sections$contact_section$contact_section$$, $amp$components$sections$artist_section$artist_section$$, $amp$components$sections$curators_section$curator_card$$, 
$amp$components$sections$curators_section$curators_section$$, $amp$components$sections$in_minor_keys$pull_quote$$, $amp$components$sections$in_minor_keys$curator_card$$, $amp$components$sections$in_minor_keys$preview$$, $amp$components$sections$in_minor_keys$details$$, $amp$components$sections$in_minor_keys$in_minor_keys$$, $amp$components$sections$location_section$preview$$, $amp$components$sections$location_section$details$$, $amp$components$sections$location_section$location_section$$, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, 
$amp$components$sections$site_footer$site_footer$$, $amp$components$sections$non_profit$title$$, $amp$components$sections$non_profit$copy_block$$, $amp$components$sections$non_profit$non_profit_section$$, $amp$components$sections$team_section$team_member_card$$, $amp$components$sections$team_section$team_members$$, $amp$components$sections$team_section$team_section$$, $amp$components$sections$video_section$video_section$$, $amp$components$sections$quote_section$quote_section$$, $amp$components$sections$work_overview$work_overview$$, 
$cljs$cst$769$images$$, $cljs$cst$778$visible_QMARK_$$, $cljs$cst$801$from$$, $cljs$cst$770$is_visible_QMARK_$$, $cljs$cst$762$on_click_handler$$, $cljs$cst$774$force_on_QMARK_$$, $cljs$cst$771$image_gallery_container_ref$$, $cljs$cst$773$gradient_class$$, $cljs$cst$767$target_ref$$, $cljs$cst$776$img$$, $cljs$cst$753$boxDecorationBreak$$, $cljs$cst$765$writing$$, $cljs$cst$797$flash_images_handler$$, $cljs$cst$768$other$$, $cljs$cst$759$current_index$$, $cljs$cst$764$on_mouse_out_handler$$, $cljs$cst$754$WebkitBoxDecorationBreak$$, 
$cljs$cst$758$total_count$$, $cljs$cst$763$on_mouse_over_handler$$, $cljs$cst$779$attribution$$, $cljs$cst$766$click$$, $cljs$cst$795$social$$, $cljs$cst$800$quote$$, $cljs$cst$760$hover_title_ref$$, $cljs$cst$777$bio$$, $cljs$cst$756$throttle_interval$$, $cljs$cst$796$email$$, $cljs$cst$802$to$$, $cljs$cst$757$total_sections$$, $cljs$cst$761$is_playing_QMARK_$$, $cljs$cst$772$copy$$;
$goog$functions$throttle$$ = function($f$jscomp$29$$, $interval$jscomp$1$$) {
  function $fire$$() {
    $timeout$jscomp$4$$ = $APP.$goog$global$$.setTimeout($handleTimeout$$, $interval$jscomp$1$$);
    let $args$jscomp$13$$ = $storedArgs$$;
    $storedArgs$$ = [];
    $f$jscomp$29$$.apply(void 0, $args$jscomp$13$$);
  }
  function $handleTimeout$$() {
    $timeout$jscomp$4$$ = 0;
    $shouldFire$$ && ($shouldFire$$ = !1, $fire$$());
  }
  let $timeout$jscomp$4$$ = 0, $shouldFire$$ = !1, $storedArgs$$ = [];
  return function($var_args$jscomp$67$$) {
    $storedArgs$$ = arguments;
    $timeout$jscomp$4$$ ? $shouldFire$$ = !0 : $fire$$();
  };
};
$cljs$core$rand_int$$ = function($n$jscomp$162$$) {
  return Math.floor(Math.random() * $n$jscomp$162$$);
};
$amp$hooks$use_scroll_trigger$use_scroll_trigger$$ = function($var_args$jscomp$418$$) {
  for (var $args__5882__auto__$jscomp$35_argseq__5883__auto__$jscomp$35$$ = [], $len__5876__auto___50331$$ = arguments.length, $i__5877__auto___50332$$ = 0;;) {
    if ($i__5877__auto___50332$$ < $len__5876__auto___50331$$) {
      $args__5882__auto__$jscomp$35_argseq__5883__auto__$jscomp$35$$.push(arguments[$i__5877__auto___50332$$]), $i__5877__auto___50332$$ += 1;
    } else {
      break;
    }
  }
  $args__5882__auto__$jscomp$35_argseq__5883__auto__$jscomp$35$$ = 1 < $args__5882__auto__$jscomp$35_argseq__5883__auto__$jscomp$35$$.length ? new $APP.$cljs$core$IndexedSeq$$($args__5882__auto__$jscomp$35_argseq__5883__auto__$jscomp$35$$.slice(1), 0, null) : null;
  return $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(arguments[0], $args__5882__auto__$jscomp$35_argseq__5883__auto__$jscomp$35$$);
};
$amp$components$sections$teaser_section$teaser_section$$ = function($G__64081_props__41634__auto__$jscomp$9_vec__64074$$) {
  $APP.$helix$core$extract_cljs_props$$($G__64081_props__41634__auto__$jscomp$9_vec__64074$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ref$$ = $APP.$helix$hooks$use_ref$$("outer-ref");
  $G__64081_props__41634__auto__$jscomp$9_vec__64074$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$390$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64081_props__41634__auto__$jscomp$9_vec__64074$$, 0, null);
  var $is_active_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64081_props__41634__auto__$jscomp$9_vec__64074$$, 1, null), $clone_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$753$boxDecorationBreak$$, "clone", $cljs$cst$754$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__64081_props__41634__auto__$jscomp$9_vec__64074$$ = function() {
    return {id:"teaser", ref:$outer_ref$$, className:"relative w-full min-h-screen overflow-hidden", children:[function() {
      var $G__64085_G__64089$jscomp$inline_3644$$ = {"allow-audio?":!1, "playback-id":"Izp5007Abkc00t4Ubns7pAiqq2zG7JIp01tvAoaVOny7O00", "should-play?":$is_active_QMARK_$jscomp$4$$};
      $G__64085_G__64089$jscomp$inline_3644$$ = {className:"absolute inset-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$teaser_section$lazy_video$$, $G__64085_G__64089$jscomp$inline_3644$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$teaser_section$lazy_video$$, $G__64085_G__64089$jscomp$inline_3644$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64085_G__64089$jscomp$inline_3644$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64085_G__64089$jscomp$inline_3644$$);
    }(), function() {
      var $G__64097$jscomp$1$$ = {className:"absolute inset-0 z-[1] pointer-events-none", style:{background:$APP.$helix$impl$props$__GT_js$$("linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.1) 100%), linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.05) 50%)")}};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64097$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64097$jscomp$1$$);
    }(), function() {
      var $G__64103$jscomp$1$$ = function() {
        return {className:"relative z-10 flex flex-col justify-center\n               min-h-screen px-6 sm:px-12 lg:px-20\n               py-16 sm:py-24\n               max-w-4xl", children:[function() {
          var $G__64107_G__64111$jscomp$inline_3647$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/70 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"The Studio"};
          $G__64107_G__64111$jscomp$inline_3647$$ = {className:"font-display font-bold uppercase tracking-wider\n                leading-relaxed text-4xl sm:text-5xl lg:text-6xl text-white mb-6", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64107_G__64111$jscomp$inline_3647$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64107_G__64111$jscomp$inline_3647$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__64107_G__64111$jscomp$inline_3647$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__64107_G__64111$jscomp$inline_3647$$);
        }(), function() {
          var $G__64115_G__64119$jscomp$inline_3650$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/50 px-3 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"A living studio at the heart of the Venice Biennale"};
          $G__64115_G__64119$jscomp$inline_3650$$ = {className:"font-display text-sm sm:text-base uppercase tracking-[0.15em]\n                leading-loose text-white/90 mb-8 max-w-xl", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64115_G__64119$jscomp$inline_3650$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64115_G__64119$jscomp$inline_3650$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64115_G__64119$jscomp$inline_3650$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64115_G__64119$jscomp$inline_3650$$);
        }(), function() {
          var $G__64126$jscomp$1_G__64130$jscomp$inline_4060_G__64134$jscomp$inline_4061$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"Over six months, sculptor Zadik Zadikian and his team will occupy the Arsenale Militare—casting, assembling, and building in real time. Nothing is fixed. Nothing is final. The work is the making itself."};
          $G__64126$jscomp$1_G__64130$jscomp$inline_4060_G__64134$jscomp$inline_4061$$ = {className:"font-display text-base sm:text-lg leading-relaxed text-white/90", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64126$jscomp$1_G__64130$jscomp$inline_4060_G__64134$jscomp$inline_4061$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64126$jscomp$1_G__64130$jscomp$inline_4060_G__64134$jscomp$inline_4061$$)};
          $G__64126$jscomp$1_G__64130$jscomp$inline_4060_G__64134$jscomp$inline_4061$$ = {className:"space-y-3 mb-10 max-w-lg", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64126$jscomp$1_G__64130$jscomp$inline_4060_G__64134$jscomp$inline_4061$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64126$jscomp$1_G__64130$jscomp$inline_4060_G__64134$jscomp$inline_4061$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64126$jscomp$1_G__64130$jscomp$inline_4060_G__64134$jscomp$inline_4061$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64126$jscomp$1_G__64130$jscomp$inline_4060_G__64134$jscomp$inline_4061$$);
        }(), function() {
          var $G__64138$$ = function() {
            return {className:"grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10", children:[function() {
              var $G__64142$jscomp$1$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__64146$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-display font-semibold text-[10px] uppercase tracking-[0.2em] text-amber-300"), children:"Opening"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64146$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64146$jscomp$1$$);
                }(), function() {
                  var $G__64150_G__64154$jscomp$inline_3656$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"9 May – 22 November 2026"};
                  $G__64150_G__64154$jscomp$inline_3656$$ = {className:"font-display text-xs sm:text-sm text-white/90", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64150_G__64154$jscomp$inline_3656$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64150_G__64154$jscomp$inline_3656$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64150_G__64154$jscomp$inline_3656$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64150_G__64154$jscomp$inline_3656$$);
                }(), function() {
                  var $G__64158$$ = {className:"font-display font-medium text-xs text-amber-200/80 mt-1", children:"Preview: 6, 7, 8 May"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64158$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64158$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64142$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64142$jscomp$1$$);
            }(), function() {
              var $G__64162$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__64166$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-display font-semibold text-[10px] uppercase tracking-[0.2em] text-amber-300"), children:"Venue"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64166$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64166$$);
                }(), function() {
                  var $G__64172_G__64177$jscomp$inline_3659$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"Arsenale Militare, Venice"};
                  $G__64172_G__64177$jscomp$inline_3659$$ = {href:"https://maps.app.goo.gl/QvYkqwN1Bv7L9VDn7", target:"_blank", rel:"noopener noreferrer", className:"font-display text-xs sm:text-sm text-white/90 hover:text-white\n                      underline underline-offset-4 decoration-white/30 hover:decoration-white/60\n                      transition-colors block whitespace-nowrap", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", 
                  $G__64172_G__64177$jscomp$inline_3659$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64172_G__64177$jscomp$inline_3659$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__64172_G__64177$jscomp$inline_3659$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__64172_G__64177$jscomp$inline_3659$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64162$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64162$$);
            }(), function() {
              var $G__64181$jscomp$1$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__64185$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-display font-semibold text-[10px] uppercase tracking-[0.2em] text-amber-300"), children:"Pavilion"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64185$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64185$jscomp$1$$);
                }(), function() {
                  var $G__64189$jscomp$1_G__64193$jscomp$inline_3662$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"Republic of Armenia"};
                  $G__64189$jscomp$1_G__64193$jscomp$inline_3662$$ = {className:"font-display text-xs sm:text-sm text-white/90", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64189$jscomp$1_G__64193$jscomp$inline_3662$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64189$jscomp$1_G__64193$jscomp$inline_3662$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64189$jscomp$1_G__64193$jscomp$inline_3662$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64189$jscomp$1_G__64193$jscomp$inline_3662$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64181$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64181$jscomp$1$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64138$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64138$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64103$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64103$jscomp$1$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64081_props__41634__auto__$jscomp$9_vec__64074$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64081_props__41634__auto__$jscomp$9_vec__64074$$);
};
$amp$hooks$use_window_resize$use_window_size$$ = function() {
  var $G__44911_45053_vec__44900$$ = $APP.$helix$hooks$use_state$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$width$$, window.innerWidth, $APP.$cljs$cst$419$height$$, window.innerHeight], null)), $dimensions$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__44911_45053_vec__44900$$, 0, null), $set_dimensions_BANG_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__44911_45053_vec__44900$$, 1, null), $resize_handler$jscomp$1$$ = 
  function() {
    function $G__45028$$($var_args$jscomp$486$$) {
      var $G__45049__i__$jscomp$446$$ = null;
      if (arguments.length > 0) {
        $G__45049__i__$jscomp$446$$ = 0;
        for (var $G__45049__a$$ = Array(arguments.length - 0); $G__45049__i__$jscomp$446$$ < $G__45049__a$$.length;) {
          $G__45049__a$$[$G__45049__i__$jscomp$446$$] = arguments[$G__45049__i__$jscomp$446$$ + 0], ++$G__45049__i__$jscomp$446$$;
        }
        $G__45049__i__$jscomp$446$$ = new $APP.$cljs$core$IndexedSeq$$($G__45049__a$$, 0, null);
      }
      return $G__45028__delegate$$.call(this, $G__45049__i__$jscomp$446$$);
    }
    function $G__45028__delegate$$() {
      var $G__44910$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$width$$, window.innerWidth, $APP.$cljs$cst$419$height$$, window.innerHeight], null);
      return $set_dimensions_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_dimensions_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__44910$$) : $set_dimensions_BANG_$jscomp$1$$.call(null, $G__44910$$);
    }
    $G__45028$$.$cljs$lang$maxFixedArity$ = 0;
    $G__45028$$.$cljs$lang$applyTo$ = function($_$jscomp$447_arglist__45052$$) {
      $_$jscomp$447_arglist__45052$$ = $APP.$cljs$core$seq$$($_$jscomp$447_arglist__45052$$);
      return $G__45028__delegate$$($_$jscomp$447_arglist__45052$$);
    };
    $G__45028$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__45028__delegate$$;
    return $G__45028$$;
  }();
  $G__44911_45053_vec__44900$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    window.addEventListener("resize", $resize_handler$jscomp$1$$);
    $resize_handler$jscomp$1$$();
    return function() {
      return window.removeEventListener("resize", $resize_handler$jscomp$1$$);
    };
  });
  var $G__44912_45054$$ = [];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__44911_45053_vec__44900$$, $G__44912_45054$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__44911_45053_vec__44900$$, $G__44912_45054$$);
  return $dimensions$jscomp$4$$;
};
$amp$components$navs$donation_nav$donation_nav$$ = function($G__64706_G__64729_is_desktop_QMARK_$jscomp$1_props__41640__auto__$jscomp$32$$) {
  $APP.$helix$core$extract_cljs_props$$($G__64706_G__64729_is_desktop_QMARK_$jscomp$1_props__41640__auto__$jscomp$32$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__64706_G__64729_is_desktop_QMARK_$jscomp$1_props__41640__auto__$jscomp$32$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  var $dimensions$jscomp$5$$ = $amp$hooks$use_window_resize$use_window_size$$(), $is_active_QMARK_$jscomp$5_vec__64690$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$364$start$$, function() {
    return window.innerHeight;
  }, $APP.$cljs$cst$390$end$$, "1000000px", $APP.$cljs$cst$392$markers_QMARK_$$, !1, $APP.$cljs$cst$393$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$5_vec__64690$$, 0, null);
  $is_active_QMARK_$jscomp$5_vec__64690$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$5_vec__64690$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$69$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$440$opacity$$, 1], null), $APP.$cljs$cst$396$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$440$opacity$$, 0.7], null)]));
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$394$target$$, $comp_ref$$, $APP.$cljs$cst$399$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$730$y$$, 0], null), $APP.$cljs$cst$401$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$730$y$$, -$APP.$cljs$cst$419$height$$.$cljs$core$IFn$_invoke$arity$1$($dimensions$jscomp$5$$)], null), $APP.$cljs$cst$397$is_on_QMARK_$$, 
  $is_active_QMARK_$jscomp$5_vec__64690$$], null));
  if ($APP.$cljs$core$truth_$$($G__64706_G__64729_is_desktop_QMARK_$jscomp$1_props__41640__auto__$jscomp$32$$)) {
    return $G__64706_G__64729_is_desktop_QMARK_$jscomp$1_props__41640__auto__$jscomp$32$$ = function() {
      return {ref:$comp_ref$$, className:"fixed\n                      opacity-90\n                      z-40\n                      text-xl\n                      mr-8\n                      mt-4\n                      top-0\n                      right-0", children:function() {
        var $G__64712$$ = function() {
          return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
            return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
          }};
        }();
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__64712$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__64712$$);
      }()};
    }(), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64706_G__64729_is_desktop_QMARK_$jscomp$1_props__41640__auto__$jscomp$32$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64706_G__64729_is_desktop_QMARK_$jscomp$1_props__41640__auto__$jscomp$32$$);
  }
  $G__64706_G__64729_is_desktop_QMARK_$jscomp$1_props__41640__auto__$jscomp$32$$ = function() {
    return {ref:$comp_ref$$, className:"fixed \n                          opacity-90\n                          z-40\n                          text-xl\n                      w-full\n                          ", children:function() {
      var $G__64733$$ = function() {
        return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
          return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__64733$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__64733$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64706_G__64729_is_desktop_QMARK_$jscomp$1_props__41640__auto__$jscomp$32$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64706_G__64729_is_desktop_QMARK_$jscomp$1_props__41640__auto__$jscomp$32$$);
};
$amp$components$navs$logo_nav$logo_nav$$ = function($G__64518_is_active_QMARK_$jscomp$6_props__41640__auto__$jscomp$33_vec__64513$$) {
  $APP.$helix$core$extract_cljs_props$$($G__64518_is_active_QMARK_$jscomp$6_props__41640__auto__$jscomp$33_vec__64513$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__64518_is_active_QMARK_$jscomp$6_props__41640__auto__$jscomp$33_vec__64513$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$364$start$$, function() {
    return window.innerHeight - window.innerHeight / 8;
  }, $APP.$cljs$cst$390$end$$, "1000000px", $APP.$cljs$cst$392$markers_QMARK_$$, !1, $APP.$cljs$cst$393$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64518_is_active_QMARK_$jscomp$6_props__41640__auto__$jscomp$33_vec__64513$$, 0, null);
  $G__64518_is_active_QMARK_$jscomp$6_props__41640__auto__$jscomp$33_vec__64513$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64518_is_active_QMARK_$jscomp$6_props__41640__auto__$jscomp$33_vec__64513$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$69$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$440$opacity$$, 1], null), $APP.$cljs$cst$396$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$440$opacity$$, 0.7], null)]));
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$394$target$$, $comp_ref$jscomp$1$$, $APP.$cljs$cst$399$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$730$y$$, 0], null), $APP.$cljs$cst$401$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$730$y$$, -250], null), $APP.$cljs$cst$397$is_on_QMARK_$$, $G__64518_is_active_QMARK_$jscomp$6_props__41640__auto__$jscomp$33_vec__64513$$], 
  null));
  $G__64518_is_active_QMARK_$jscomp$6_props__41640__auto__$jscomp$33_vec__64513$$ = function() {
    return {ref:$comp_ref$jscomp$1$$, className:"fixed\n                    opacity-90\n                    z-30\n                    right-8\n                    top-20\n                    flex flex-col items-end gap-3", children:function() {
      var $G__64522$$ = function() {
        return {className:"w-28 lg:w-32", children:[function() {
          var $G__64526$$ = function() {
            return {className:"cursor-pointer", onClick:function() {
              return window.open("https://www.labiennale.org/en/art/2026", "_blank");
            }, children:function() {
              var $G__64530$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"invert dark:invert-0"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__64530$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__64530$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64526$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64526$$);
        }(), function() {
          var $G__64534$$ = function() {
            return {className:"mt-4", children:function() {
              var $G__64538$$ = function() {
                return {title:"Donate Now", "additional-classes":"w-full justify-center", size:$APP.$cljs$cst$718$sm$$, "bg-opacity":0.8, "on-click":function() {
                  return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                }};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__64538$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__64538$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64534$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64534$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64522$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64522$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64518_is_active_QMARK_$jscomp$6_props__41640__auto__$jscomp$33_vec__64513$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64518_is_active_QMARK_$jscomp$6_props__41640__auto__$jscomp$33_vec__64513$$);
};
$amp$hooks$use_scroll_progress$use_scroll_progress$cljs$0core$0IFn$0_invoke$0arity$0variadic$$ = function($total_sections$$) {
  var $current_index$jscomp$1_map__51230__$1$$ = $APP.$cljs$core$__destructure_map$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$756$throttle_interval$$, 10], null)])), $throttle_interval$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($current_index$jscomp$1_map__51230__$1$$, $cljs$cst$756$throttle_interval$$, 500), $G__51234_51244_vec__51231$$ = $APP.$helix$hooks$use_state$$(0);
  $current_index$jscomp$1_map__51230__$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51234_51244_vec__51231$$, 0, null);
  var $set_current_index_BANG_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51234_51244_vec__51231$$, 1, null);
  $G__51234_51244_vec__51231$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $throttled_update_progress$$ = $goog$functions$throttle$$(function() {
      var $index$jscomp$136$$ = function() {
        var $obj51236$$ = document.documentElement;
        if ($obj51236$$ != null) {
          return $obj51236$$.scrollTop;
        }
      }() / (function() {
        var $obj51237$$ = document.documentElement;
        if ($obj51237$$ != null) {
          return $obj51237$$.scrollHeight;
        }
      }() - function() {
        var $obj51238$$ = window;
        if ($obj51238$$ != null) {
          return $obj51238$$.innerHeight;
        }
      }()) * $total_sections$$ | 0;
      return $set_current_index_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_current_index_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($index$jscomp$136$$) : $set_current_index_BANG_$jscomp$1$$.call(null, $index$jscomp$136$$);
    }, $throttle_interval$$);
    window.addEventListener("scroll", $throttled_update_progress$$);
    return function() {
      return window.removeEventListener("scroll", $throttled_update_progress$$);
    };
  });
  var $G__51235_51245$$ = [$total_sections$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__51234_51244_vec__51231$$, $G__51235_51245$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__51234_51244_vec__51231$$, $G__51235_51245$$);
  return $current_index$jscomp$1_map__51230__$1$$;
};
$amp$components$navs$progress_menu$progress_menu$$ = function($G__22633_calculated_index_map__22630_map__22630__$1_props__20370__auto___vec__22627$$, $maybe_ref__20371__auto__$$) {
  $G__22633_calculated_index_map__22630_map__22630__$1_props__20370__auto___vec__22627$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__22633_calculated_index_map__22630_map__22630__$1_props__20370__auto___vec__22627$$), $maybe_ref__20371__auto__$$], null);
  $G__22633_calculated_index_map__22630_map__22630__$1_props__20370__auto___vec__22627$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__22633_calculated_index_map__22630_map__22630__$1_props__20370__auto___vec__22627$$, 0, null);
  $G__22633_calculated_index_map__22630_map__22630__$1_props__20370__auto___vec__22627$$ = $APP.$cljs$core$__destructure_map$$($G__22633_calculated_index_map__22630_map__22630__$1_props__20370__auto___vec__22627$$);
  var $total_sections$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__22633_calculated_index_map__22630_map__22630__$1_props__20370__auto___vec__22627$$, $cljs$cst$757$total_sections$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__22633_calculated_index_map__22630_map__22630__$1_props__20370__auto___vec__22627$$ = $amp$hooks$use_scroll_progress$use_scroll_progress$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($total_sections$jscomp$1$$);
  var $current_active_index$$ = $APP.$cljs$core$min$$.$cljs$core$IFn$_invoke$arity$2$($total_sections$jscomp$1$$ - 1, $G__22633_calculated_index_map__22630_map__22630__$1_props__20370__auto___vec__22627$$);
  $G__22633_calculated_index_map__22630_map__22630__$1_props__20370__auto___vec__22627$$ = function() {
    return {className:"", children:function() {
      return function $amp$components$navs$progress_menu$progress_menu_render_$_iter__22636$$($s__22637$$) {
        return new $APP.$cljs$core$LazySeq$$(null, function() {
          for (;;) {
            var $s__22637__$2_temp__5823__auto__$jscomp$101$$ = $APP.$cljs$core$seq$$($s__22637$$);
            if ($s__22637__$2_temp__5823__auto__$jscomp$101$$) {
              if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__22637__$2_temp__5823__auto__$jscomp$101$$)) {
                var $c__5626__auto__$jscomp$21$$ = $APP.$cljs$core$_chunked_first$$($s__22637__$2_temp__5823__auto__$jscomp$101$$), $size__5627__auto__$jscomp$21$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$21$$), $b__22639$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$21$$);
                return function() {
                  for (var $i__22638$$ = 0;;) {
                    if ($i__22638$$ < $size__5627__auto__$jscomp$21$$) {
                      var $JSCompiler_inline_result$jscomp$2977_i__20548__auto__$jscomp$1_idx$jscomp$inline_3263$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$21$$, $i__22638$$), $JSCompiler_temp_const$jscomp$2976$$ = $b__22639$$;
                      $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$range$cljs$0core$0IFn$0_invoke$0arity$03$$($total_sections$jscomp$1$$), $JSCompiler_inline_result$jscomp$2977_i__20548__auto__$jscomp$1_idx$jscomp$inline_3263$$);
                      var $G__22649$jscomp$inline_3264$$ = {className:$APP.$helix$impl$props$normalize_class$$("w-2 h-2 bg-white rounded-full my-2" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_inline_result$jscomp$2977_i__20548__auto__$jscomp$1_idx$jscomp$inline_3263$$, $current_active_index$$) ? " opacity-100" : null) + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$not_EQ_$cljs$0core$0IFn$0_invoke$0arity$02$$($JSCompiler_inline_result$jscomp$2977_i__20548__auto__$jscomp$1_idx$jscomp$inline_3263$$, 
                      $current_active_index$$) ? " opacity-50" : null))};
                      $JSCompiler_inline_result$jscomp$2977_i__20548__auto__$jscomp$1_idx$jscomp$inline_3263$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__22649$jscomp$inline_3264$$, $JSCompiler_inline_result$jscomp$2977_i__20548__auto__$jscomp$1_idx$jscomp$inline_3263$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22649$jscomp$inline_3264$$, $JSCompiler_inline_result$jscomp$2977_i__20548__auto__$jscomp$1_idx$jscomp$inline_3263$$);
                      $JSCompiler_temp_const$jscomp$2976$$.add($JSCompiler_inline_result$jscomp$2977_i__20548__auto__$jscomp$1_idx$jscomp$inline_3263$$);
                      $i__22638$$ += 1;
                    } else {
                      return !0;
                    }
                  }
                }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__22639$$), $amp$components$navs$progress_menu$progress_menu_render_$_iter__22636$$($APP.$cljs$core$_chunked_rest$$($s__22637__$2_temp__5823__auto__$jscomp$101$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__22639$$), null);
              }
              var $i__20548__auto__$$ = $APP.$cljs$core$first$$($s__22637__$2_temp__5823__auto__$jscomp$101$$);
              return $APP.$cljs$core$cons$$(function() {
                $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$range$cljs$0core$0IFn$0_invoke$0arity$03$$($total_sections$jscomp$1$$), $i__20548__auto__$$);
                var $idx$jscomp$66$$ = $i__20548__auto__$$, $G__22656$$ = {className:$APP.$helix$impl$props$normalize_class$$("w-2 h-2 bg-white rounded-full my-2" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($idx$jscomp$66$$, $current_active_index$$) ? " opacity-100" : null) + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$not_EQ_$cljs$0core$0IFn$0_invoke$0arity$02$$($idx$jscomp$66$$, $current_active_index$$) ? 
                " opacity-50" : null))};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__22656$$, $idx$jscomp$66$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22656$$, $idx$jscomp$66$$);
              }(), $amp$components$navs$progress_menu$progress_menu_render_$_iter__22636$$($APP.$cljs$core$rest$$($s__22637__$2_temp__5823__auto__$jscomp$101$$)));
            }
            return null;
          }
        }, null, null);
      }($APP.$cljs$core$range$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$count$$($APP.$cljs$core$range$cljs$0core$0IFn$0_invoke$0arity$03$$($total_sections$jscomp$1$$))));
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22633_calculated_index_map__22630_map__22630__$1_props__20370__auto___vec__22627$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22633_calculated_index_map__22630_map__22630__$1_props__20370__auto___vec__22627$$);
};
$amp$components$navs$progress_menu$progress_menu_v2$$ = function($G__22680_map__22676_map__22676__$1_props__20370__auto__$jscomp$1_vec__22673$$, $maybe_ref__20371__auto__$jscomp$1$$) {
  $G__22680_map__22676_map__22676__$1_props__20370__auto__$jscomp$1_vec__22673$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__22680_map__22676_map__22676__$1_props__20370__auto__$jscomp$1_vec__22673$$), $maybe_ref__20371__auto__$jscomp$1$$], null);
  $G__22680_map__22676_map__22676__$1_props__20370__auto__$jscomp$1_vec__22673$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__22680_map__22676_map__22676__$1_props__20370__auto__$jscomp$1_vec__22673$$, 0, null);
  $G__22680_map__22676_map__22676__$1_props__20370__auto__$jscomp$1_vec__22673$$ = $APP.$cljs$core$__destructure_map$$($G__22680_map__22676_map__22676__$1_props__20370__auto__$jscomp$1_vec__22673$$);
  var $total_count$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__22680_map__22676_map__22676__$1_props__20370__auto__$jscomp$1_vec__22673$$, $cljs$cst$758$total_count$$), $current_index$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__22680_map__22676_map__22676__$1_props__20370__auto__$jscomp$1_vec__22673$$, $cljs$cst$759$current_index$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__22680_map__22676_map__22676__$1_props__20370__auto__$jscomp$1_vec__22673$$ = function() {
    return {className:"flex items-center gap-0.5", children:function() {
      return function $amp$components$navs$progress_menu$progress_menu_v2_render_$_iter__22683$$($s__22684$$) {
        return new $APP.$cljs$core$LazySeq$$(null, function() {
          for (;;) {
            var $s__22684__$2_temp__5823__auto__$jscomp$102$$ = $APP.$cljs$core$seq$$($s__22684$$);
            if ($s__22684__$2_temp__5823__auto__$jscomp$102$$) {
              if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__22684__$2_temp__5823__auto__$jscomp$102$$)) {
                var $c__5626__auto__$jscomp$22$$ = $APP.$cljs$core$_chunked_first$$($s__22684__$2_temp__5823__auto__$jscomp$102$$), $size__5627__auto__$jscomp$22$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$22$$), $b__22686$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$22$$);
                return function() {
                  for (var $i__22685$$ = 0;;) {
                    if ($i__22685$$ < $size__5627__auto__$jscomp$22$$) {
                      var $JSCompiler_inline_result$jscomp$3472_i__20548__auto__$jscomp$3_idx$jscomp$inline_3667$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$22$$, $i__22685$$), $JSCompiler_temp_const$jscomp$3471$$ = $b__22686$$;
                      $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$range$cljs$0core$0IFn$0_invoke$0arity$03$$($total_count$$), $JSCompiler_inline_result$jscomp$3472_i__20548__auto__$jscomp$3_idx$jscomp$inline_3667$$);
                      var $G__22698$jscomp$inline_3669_active_QMARK_$jscomp$inline_3668$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_inline_result$jscomp$3472_i__20548__auto__$jscomp$3_idx$jscomp$inline_3667$$, $current_index$jscomp$2$$ - 1);
                      $G__22698$jscomp$inline_3669_active_QMARK_$jscomp$inline_3668$$ = {style:{width:$APP.$helix$impl$props$__GT_js$$($G__22698$jscomp$inline_3669_active_QMARK_$jscomp$inline_3668$$ ? "16px" : "6px"), height:$APP.$helix$impl$props$__GT_js$$("3px"), borderRadius:$APP.$helix$impl$props$__GT_js$$("2px"), background:$APP.$helix$impl$props$__GT_js$$($G__22698$jscomp$inline_3669_active_QMARK_$jscomp$inline_3668$$ ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.35)"), transition:$APP.$helix$impl$props$__GT_js$$("all 0.3s ease")}};
                      $JSCompiler_inline_result$jscomp$3472_i__20548__auto__$jscomp$3_idx$jscomp$inline_3667$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__22698$jscomp$inline_3669_active_QMARK_$jscomp$inline_3668$$, $JSCompiler_inline_result$jscomp$3472_i__20548__auto__$jscomp$3_idx$jscomp$inline_3667$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22698$jscomp$inline_3669_active_QMARK_$jscomp$inline_3668$$, $JSCompiler_inline_result$jscomp$3472_i__20548__auto__$jscomp$3_idx$jscomp$inline_3667$$);
                      $JSCompiler_temp_const$jscomp$3471$$.add($JSCompiler_inline_result$jscomp$3472_i__20548__auto__$jscomp$3_idx$jscomp$inline_3667$$);
                      $i__22685$$ += 1;
                    } else {
                      return !0;
                    }
                  }
                }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__22686$$), $amp$components$navs$progress_menu$progress_menu_v2_render_$_iter__22683$$($APP.$cljs$core$_chunked_rest$$($s__22684__$2_temp__5823__auto__$jscomp$102$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__22686$$), null);
              }
              var $i__20548__auto__$jscomp$2$$ = $APP.$cljs$core$first$$($s__22684__$2_temp__5823__auto__$jscomp$102$$);
              return $APP.$cljs$core$cons$$(function() {
                $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$range$cljs$0core$0IFn$0_invoke$0arity$03$$($total_count$$), $i__20548__auto__$jscomp$2$$);
                var $idx$jscomp$68$$ = $i__20548__auto__$jscomp$2$$, $G__22722_active_QMARK_$jscomp$4$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($idx$jscomp$68$$, $current_index$jscomp$2$$ - 1);
                $G__22722_active_QMARK_$jscomp$4$$ = {style:{width:$APP.$helix$impl$props$__GT_js$$($G__22722_active_QMARK_$jscomp$4$$ ? "16px" : "6px"), height:$APP.$helix$impl$props$__GT_js$$("3px"), borderRadius:$APP.$helix$impl$props$__GT_js$$("2px"), background:$APP.$helix$impl$props$__GT_js$$($G__22722_active_QMARK_$jscomp$4$$ ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.35)"), transition:$APP.$helix$impl$props$__GT_js$$("all 0.3s ease")}};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__22722_active_QMARK_$jscomp$4$$, $idx$jscomp$68$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22722_active_QMARK_$jscomp$4$$, $idx$jscomp$68$$);
              }(), $amp$components$navs$progress_menu$progress_menu_v2_render_$_iter__22683$$($APP.$cljs$core$rest$$($s__22684__$2_temp__5823__auto__$jscomp$102$$)));
            }
            return null;
          }
        }, null, null);
      }($APP.$cljs$core$range$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$count$$($APP.$cljs$core$range$cljs$0core$0IFn$0_invoke$0arity$03$$($total_count$$))));
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__22680_map__22676_map__22676__$1_props__20370__auto__$jscomp$1_vec__22673$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__22680_map__22676_map__22676__$1_props__20370__auto__$jscomp$1_vec__22673$$);
};
$amp$components$hover_title$hover_title$$ = function($G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto___vec__282044$$, $G__282073$jscomp$inline_4064_G__282081$jscomp$inline_4065_JSCompiler_inline_result$jscomp$inline_4063_maybe_ref__41676__auto___title$jscomp$18$$) {
  $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto___vec__282044$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto___vec__282044$$), $G__282073$jscomp$inline_4064_G__282081$jscomp$inline_4065_JSCompiler_inline_result$jscomp$inline_4063_maybe_ref__41676__auto___title$jscomp$18$$], null);
  $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto___vec__282044$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto___vec__282044$$, 0, null);
  $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto___vec__282044$$ = $APP.$cljs$core$__destructure_map$$($G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto___vec__282044$$);
  $G__282073$jscomp$inline_4064_G__282081$jscomp$inline_4065_JSCompiler_inline_result$jscomp$inline_4063_maybe_ref__41676__auto___title$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto___vec__282044$$, $APP.$cljs$cst$381$title$$);
  $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto___vec__282044$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto___vec__282044$$, $cljs$cst$760$hover_title_ref$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__282073$jscomp$inline_4064_G__282081$jscomp$inline_4065_JSCompiler_inline_result$jscomp$inline_4063_maybe_ref__41676__auto___title$jscomp$18$$ = {className:"flash-text\n                                 font-mono\n                                 font-bold", textAnchor:"start", alignmentBaseline:"middle", y:"50%", x:"50%", children:$G__282073$jscomp$inline_4064_G__282081$jscomp$inline_4065_JSCompiler_inline_result$jscomp$inline_4063_maybe_ref__41676__auto___title$jscomp$18$$};
  $G__282073$jscomp$inline_4064_G__282081$jscomp$inline_4065_JSCompiler_inline_result$jscomp$inline_4063_maybe_ref__41676__auto___title$jscomp$18$$ = {className:"justify-self-start", height:"100%", width:"100%", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("text", $G__282073$jscomp$inline_4064_G__282081$jscomp$inline_4065_JSCompiler_inline_result$jscomp$inline_4063_maybe_ref__41676__auto___title$jscomp$18$$) : $APP.$helix$core$jsx$$.call(null, 
  "text", $G__282073$jscomp$inline_4064_G__282081$jscomp$inline_4065_JSCompiler_inline_result$jscomp$inline_4063_maybe_ref__41676__auto___title$jscomp$18$$)};
  $G__282073$jscomp$inline_4064_G__282081$jscomp$inline_4065_JSCompiler_inline_result$jscomp$inline_4063_maybe_ref__41676__auto___title$jscomp$18$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__282073$jscomp$inline_4064_G__282081$jscomp$inline_4065_JSCompiler_inline_result$jscomp$inline_4063_maybe_ref__41676__auto___title$jscomp$18$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__282073$jscomp$inline_4064_G__282081$jscomp$inline_4065_JSCompiler_inline_result$jscomp$inline_4063_maybe_ref__41676__auto___title$jscomp$18$$);
  $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto___vec__282044$$ = {className:"absolute \n                  massive-title\n                  h-full\n                  w-full\n                  pointer-events-none", ref:$G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto___vec__282044$$, children:$G__282073$jscomp$inline_4064_G__282081$jscomp$inline_4065_JSCompiler_inline_result$jscomp$inline_4063_maybe_ref__41676__auto___title$jscomp$18$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto___vec__282044$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto___vec__282044$$);
};
$amp$components$ui$playable_text$playable_text$$ = function($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$4$$) {
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$), $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$4$$], null);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$, 0, null);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$ = $APP.$cljs$core$__destructure_map$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$);
  var $text$jscomp$15$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$, $APP.$cljs$cst$406$text$$), $is_playing_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$, $cljs$cst$761$is_playing_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $background_ref$$ = $APP.$helix$hooks$use_ref$$("background-ref"), $text_ref$$ = $APP.$helix$hooks$use_ref$$("text-ref");
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$ = $APP.$helix$hooks$use_state$$(new $APP.$module$node_modules$gsap$dist$gsap$$.gsap.timeline({paused:!0}));
  var $tl$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$, 1, null);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $splitter$$ = $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($text_ref$$)) ? new $APP.$module$node_modules$gsap$SplitText$$.SplitText($APP.$cljs$core$_deref$$($text_ref$$), {type:"words,chars", charsClass:"playable-type-char"}) : null, $chars$jscomp$2$$ = $APP.$cljs$core$truth_$$($splitter$$) ? $splitter$$.chars : null, $ctx$jscomp$18$$ = $APP.$module$node_modules$gsap$dist$gsap$$.gsap.context(function() {
      return $tl$jscomp$1$$.from($APP.$cljs$core$_deref$$($background_ref$$), {width:"0", duration:0.15, ease:"expo.inOut"}).to($APP.$cljs$core$_deref$$($background_ref$$), {width:"100%", duration:0.15, ease:"expo.inOut"}).from($chars$jscomp$2$$, {opacity:0, duration:0.15, ease:"expo.inOut", stagger:0.025}).to($chars$jscomp$2$$, {opacity:1, duration:0.15, ease:"expo.inOut", stagger:0.025});
    }, $outer_ctx$jscomp$1$$);
    return function() {
      return $ctx$jscomp$18$$.revert();
    };
  });
  $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$4$$ = [$text$jscomp$15$$, $text_ref$$, $is_playing_QMARK_$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$4$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$, 
  $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$4$$);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($is_playing_QMARK_$$) ? $tl$jscomp$1$$.play() : $tl$jscomp$1$$.reverse();
  });
  $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$4$$ = [$is_playing_QMARK_$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$4$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$4$$);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$ = function() {
    return {ref:$outer_ctx$jscomp$1$$, children:function() {
      var $G__52086$$ = function() {
        return {ref:$text_ref$$, className:"relative", children:[function() {
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
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$4_vec__52070_vec__52074$$);
};
$amp$components$nav_link$nav_link$$ = function($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$, $maybe_ref__41676__auto__$jscomp$1$$) {
  $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$), $maybe_ref__41676__auto__$jscomp$1$$], null);
  $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$, 0, null);
  $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$ = $APP.$cljs$core$__destructure_map$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$);
  var $on_click_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$, $cljs$cst$762$on_click_handler$$), $on_mouse_over_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$, $cljs$cst$763$on_mouse_over_handler$$), $on_mouse_out_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$, 
  $cljs$cst$764$on_mouse_out_handler$$), $title$jscomp$19$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$, $APP.$cljs$cst$381$title$$), $writing$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$, $cljs$cst$765$writing$$), $section_id$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$, 
  $APP.$cljs$cst$417$section_id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$15$$ = $APP.$helix$hooks$use_ref$$("link-ref");
  $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$ = $APP.$helix$hooks$use_state$$(!1);
  var $is_hovering_QMARK_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$, 0, null), $set_is_hovering_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$, 1, null);
  $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$ = function() {
    return {children:[function() {
      var $G__282294$$ = function() {
        return {ref:$ref$jscomp$15$$, className:"\n                  hero-nav-links\n                  cursor-pointer\n                  font-mono\n                  font-medium\n                  text-6xl", onMouseOver:function() {
          $APP.$cljs$core$tap_GT_$$("mouse over");
          $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $set_is_hovering_BANG_$$.call(null, !0);
          var $G__282298$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$417$section_id$$, $section_id$jscomp$2$$], null);
          return $on_mouse_over_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_mouse_over_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__282298$$) : $on_mouse_over_handler$$.call(null, $G__282298$$);
        }, onMouseOut:function() {
          $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(!1) : $set_is_hovering_BANG_$$.call(null, !1);
          var $G__282299$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$417$section_id$$, $section_id$jscomp$2$$], null);
          return $on_mouse_out_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_mouse_out_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__282299$$) : $on_mouse_out_handler$$.call(null, $G__282299$$);
        }, onClick:function() {
          var $G__282300$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$417$section_id$$, $section_id$jscomp$2$$], null);
          return $on_click_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_click_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__282300$$) : $on_click_handler$$.call(null, $G__282300$$);
        }, children:$title$jscomp$19$$};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("a", $G__282294$$, $section_id$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__282294$$, $section_id$jscomp$2$$);
    }(), function() {
      var $G__282302_G__282306$jscomp$inline_3675$$ = {text:$writing$$, "is-playing?":$is_hovering_QMARK_$$};
      $G__282302_G__282306$jscomp$inline_3675$$ = {className:"whitespace-nowrap\n                                                absolute\n                                                translate-x-full\n                                                bottom-2\n                                                \n                                                self-baseline\n                                                right-0\n                                                 pl-6\n                                                ", 
      children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$ui$playable_text$playable_text$$, $G__282302_G__282306$jscomp$inline_3675$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$ui$playable_text$playable_text$$, $G__282302_G__282306$jscomp$inline_3675$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282302_G__282306$jscomp$inline_3675$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__282302_G__282306$jscomp$inline_3675$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$1_vec__282281_vec__282285$$);
};
$amp$components$playful_titles$hero_menu$$ = function($G__64647_map__64634_map__64634__$1_props__41640__auto__$jscomp$34_vec__64631$$, $maybe_ref__41641__auto__$jscomp$34$$) {
  $G__64647_map__64634_map__64634__$1_props__41640__auto__$jscomp$34_vec__64631$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64647_map__64634_map__64634__$1_props__41640__auto__$jscomp$34_vec__64631$$), $maybe_ref__41641__auto__$jscomp$34$$], null);
  $G__64647_map__64634_map__64634__$1_props__41640__auto__$jscomp$34_vec__64631$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64647_map__64634_map__64634__$1_props__41640__auto__$jscomp$34_vec__64631$$, 0, null);
  $G__64647_map__64634_map__64634__$1_props__41640__auto__$jscomp$34_vec__64631$$ = $APP.$cljs$core$__destructure_map$$($G__64647_map__64634_map__64634__$1_props__41640__auto__$jscomp$34_vec__64631$$);
  var $data$jscomp$141$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64647_map__64634_map__64634__$1_props__41640__auto__$jscomp$34_vec__64631$$, $APP.$cljs$cst$28$data$$), $over$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64647_map__64634_map__64634__$1_props__41640__auto__$jscomp$34_vec__64631$$, $APP.$cljs$cst$69$over$$), $out$jscomp$15$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64647_map__64634_map__64634__$1_props__41640__auto__$jscomp$34_vec__64631$$, 
  $APP.$cljs$cst$396$out$$), $click$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64647_map__64634_map__64634__$1_props__41640__auto__$jscomp$34_vec__64631$$, $cljs$cst$766$click$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__64647_map__64634_map__64634__$1_props__41640__auto__$jscomp$34_vec__64631$$ = function() {
    return {className:"absolute \n                  bg-white/30\n                  font-mono\n                  pointer-events-auto", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__64722_G__64748$jscomp$inline_4068_G__64760$jscomp$inline_4069_p__64654_writing$jscomp$1$$) {
      var $id$jscomp$80$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64722_G__64748$jscomp$inline_4068_G__64760$jscomp$inline_4069_p__64654_writing$jscomp$1$$, 0, null);
      $G__64722_G__64748$jscomp$inline_4068_G__64760$jscomp$inline_4069_p__64654_writing$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64722_G__64748$jscomp$inline_4068_G__64760$jscomp$inline_4069_p__64654_writing$jscomp$1$$, 1, null);
      $G__64722_G__64748$jscomp$inline_4068_G__64760$jscomp$inline_4069_p__64654_writing$jscomp$1$$ = {title:$id$jscomp$80$$, writing:$G__64722_G__64748$jscomp$inline_4068_G__64760$jscomp$inline_4069_p__64654_writing$jscomp$1$$, "section-id":$id$jscomp$80$$, "on-mouse-over-handler":$over$jscomp$1$$, "on-mouse-out-handler":$out$jscomp$15$$, "on-click-handler":$click$$};
      $G__64722_G__64748$jscomp$inline_4068_G__64760$jscomp$inline_4069_p__64654_writing$jscomp$1$$ = {className:"relative flex", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$nav_link$nav_link$$, $G__64722_G__64748$jscomp$inline_4068_G__64760$jscomp$inline_4069_p__64654_writing$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$nav_link$nav_link$$, $G__64722_G__64748$jscomp$inline_4068_G__64760$jscomp$inline_4069_p__64654_writing$jscomp$1$$)};
      $G__64722_G__64748$jscomp$inline_4068_G__64760$jscomp$inline_4069_p__64654_writing$jscomp$1$$ = {className:"flex", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64722_G__64748$jscomp$inline_4068_G__64760$jscomp$inline_4069_p__64654_writing$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64722_G__64748$jscomp$inline_4068_G__64760$jscomp$inline_4069_p__64654_writing$jscomp$1$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__64722_G__64748$jscomp$inline_4068_G__64760$jscomp$inline_4069_p__64654_writing$jscomp$1$$, $id$jscomp$80$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64722_G__64748$jscomp$inline_4068_G__64760$jscomp$inline_4069_p__64654_writing$jscomp$1$$, $id$jscomp$80$$);
    }, $data$jscomp$141$$)};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64647_map__64634_map__64634__$1_props__41640__auto__$jscomp$34_vec__64631$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64647_map__64634_map__64634__$1_props__41640__auto__$jscomp$34_vec__64631$$);
};
$amp$components$playful_titles$playful_titles$$ = function($G__64834_props__41640__auto__$jscomp$35_vec__64790_vec__64793$$) {
  $APP.$helix$core$extract_cljs_props$$($G__64834_props__41640__auto__$jscomp$35_vec__64790_vec__64793$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__64834_props__41640__auto__$jscomp$35_vec__64790_vec__64793$$ = $APP.$amp$providers$main_provider$use_main_state$$();
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64834_props__41640__auto__$jscomp$35_vec__64790_vec__64793$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64834_props__41640__auto__$jscomp$35_vec__64790_vec__64793$$, 1, null);
  var $hover_title_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("hover-title-ref");
  $G__64834_props__41640__auto__$jscomp$35_vec__64790_vec__64793$$ = $APP.$helix$hooks$use_state$$(null);
  var $current_section$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64834_props__41640__auto__$jscomp$35_vec__64790_vec__64793$$, 0, null), $set_current_section_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64834_props__41640__auto__$jscomp$35_vec__64790_vec__64793$$, 1, null), $nav_mouse_over_handler$$ = function() {
    function $G__64804$$($map__64812__$1_p__64807_section_id$jscomp$3$$) {
      $map__64812__$1_p__64807_section_id$jscomp$3$$ = $APP.$cljs$core$__destructure_map$$($map__64812__$1_p__64807_section_id$jscomp$3$$);
      $map__64812__$1_p__64807_section_id$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__64812__$1_p__64807_section_id$jscomp$3$$, $APP.$cljs$cst$417$section_id$$);
      $set_current_section_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_current_section_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($map__64812__$1_p__64807_section_id$jscomp$3$$) : $set_current_section_BANG_$$.call(null, $map__64812__$1_p__64807_section_id$jscomp$3$$);
      return $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to($APP.$cljs$core$_deref$$($hover_title_ref$jscomp$1$$), {opacity:0.8, duration:0.2});
    }
    var $G__64805$$ = [$hover_title_ref$jscomp$1$$];
    return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__64804$$, $G__64805$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__64804$$, $G__64805$$);
  }(), $nav_mouse_out_handler$$ = function() {
    function $G__64825$$() {
      return $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to($APP.$cljs$core$_deref$$($hover_title_ref$jscomp$1$$), {opacity:0, duration:0.2});
    }
    var $G__64826$$ = [$hover_title_ref$jscomp$1$$];
    return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__64825$$, $G__64826$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__64825$$, $G__64826$$);
  }();
  $G__64834_props__41640__auto__$jscomp$35_vec__64790_vec__64793$$ = function() {
    return {className:"relative\n                    w-full \n                    h-full \n                    \n                    ", children:[function() {
      var $G__64844$$ = function() {
        return {className:"relative\n                    w-full \n                    h-full \n                    flex\n                    items-center\n                    justify-items-center\n                    justify-center", children:[function() {
          var $G__64854$$ = {"hover-title-ref":$hover_title_ref$jscomp$1$$, title:$current_section$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$hover_title$hover_title$$, $G__64854$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$hover_title$hover_title$$, $G__64854$$);
        }(), function() {
          var $G__64860$$ = {data:$amp$components$playful_titles$titles$$, over:$nav_mouse_over_handler$$, out:$nav_mouse_out_handler$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$playful_titles$hero_menu$$, $G__64860$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$playful_titles$hero_menu$$, $G__64860$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64844$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64844$$);
    }(), function() {
      var $G__64867$$ = {className:"absolute\n                                     bottom-10\n                           w-full\n                           flex\n                           justify-center\n                           "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64867$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64867$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64834_props__41640__auto__$jscomp$35_vec__64790_vec__64793$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64834_props__41640__auto__$jscomp$35_vec__64790_vec__64793$$);
};
$amp$components$elements$lazy_image_gallery$check_column_dimensions$$ = function($columns$jscomp$3$$) {
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(function($total_height$$, $dimensions$jscomp$6$$) {
    return $total_height$$ + $APP.$cljs$core$second$$($dimensions$jscomp$6$$);
  }, 0, $columns$jscomp$3$$);
};
$amp$components$elements$lazy_image_gallery$aspect_column$$ = function($width$jscomp$40$$, $height$jscomp$38$$) {
  var $initial_images$$ = function() {
    for (var $G__65487_accumulated_height$$ = 0, $G__65488_result$jscomp$135$$ = $APP.$cljs$core$PersistentVector$EMPTY$$;;) {
      if ($G__65487_accumulated_height$$ >= $height$jscomp$38$$) {
        return $G__65488_result$jscomp$135$$;
      }
      var $aspect_ratio$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$components$elements$lazy_image_gallery$aspect_ratios$$, $cljs$core$rand_int$$($APP.$cljs$core$count$$($amp$components$elements$lazy_image_gallery$aspect_ratios$$))), $img_height$$ = Math.round($width$jscomp$40$$ * $aspect_ratio$jscomp$1$$);
      $G__65487_accumulated_height$$ += $img_height$$;
      $G__65488_result$jscomp$135$$ = $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__65488_result$jscomp$135$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$width$jscomp$40$$, $img_height$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$726$aspect_ratio$$, $aspect_ratio$jscomp$1$$], null)));
    }
  }(), $total_height$jscomp$1$$ = $amp$components$elements$lazy_image_gallery$check_column_dimensions$$($initial_images$$), $scale_factor$jscomp$1$$ = $height$jscomp$38$$ / $total_height$jscomp$1$$;
  return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($dimensions$jscomp$7$$) {
    var $w$jscomp$28$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$7$$, 0, null), $h$jscomp$115$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$7$$, 1, null);
    return $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$w$jscomp$28$$, $h$jscomp$115$$ * $scale_factor$jscomp$1$$], null), $APP.$cljs$core$meta$$($dimensions$jscomp$7$$));
  }, $initial_images$$);
};
$amp$components$elements$lazy_image_gallery$find_closest_size$$ = function($target_width$$, $target_height$$) {
  var $sizes$jscomp$1$$ = $APP.$cljs$core$vec$$($APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$val$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$components$elements$lazy_image_gallery$image_sizes$$])));
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(function($closest$$, $h$jscomp$116_p__64423$$) {
    var $w$jscomp$29$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($h$jscomp$116_p__64423$$, 0, null);
    $h$jscomp$116_p__64423$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($h$jscomp$116_p__64423$$, 1, null);
    var $closest_diff$$ = Math.abs($APP.$cljs$core$first$$($closest$$) - $target_width$$) + Math.abs($APP.$cljs$core$second$$($closest$$) - $target_height$$);
    return Math.abs($w$jscomp$29$$ - $target_width$$) + Math.abs($h$jscomp$116_p__64423$$ - $target_height$$) < $closest_diff$$ ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$w$jscomp$29$$, $h$jscomp$116_p__64423$$], null) : $closest$$;
  }, $APP.$cljs$core$first$$($sizes$jscomp$1$$), $sizes$jscomp$1$$);
};
$amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$ = function($width$jscomp$41$$, $height$jscomp$39$$) {
  var $column_width$$ = Math.round($width$jscomp$41$$ / 3);
  return $APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(function() {
    return $amp$components$elements$lazy_image_gallery$aspect_column$$($column_width$$, $height$jscomp$39$$);
  }, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$core$range$cljs$0core$0IFn$0_invoke$0arity$03$$(3)]));
};
$amp$components$elements$lazy_image_gallery$image_layer$$ = function($G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$, $G__64594_65566_maybe_ref__41635__auto__$jscomp$10$$) {
  $G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$), $G__64594_65566_maybe_ref__41635__auto__$jscomp$10$$], null);
  $G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$, 0, null);
  $G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$ = $APP.$cljs$core$__destructure_map$$($G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$);
  var $img_src$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$, $APP.$cljs$cst$438$img_src$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $base_ref$$ = $APP.$helix$hooks$use_ref$$("base-ref"), $transition_ref$$ = $APP.$helix$hooks$use_ref$$("trans-ref");
  $G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$ = $APP.$helix$hooks$use_state$$(null);
  var $current_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$, 0, null), $set_current_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$, 1, null);
  $G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$ = $APP.$helix$hooks$use_state$$(null);
  var $prev_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$, 0, null), $set_prev_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$, 1, null);
  $G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($current_src$$, $img_src$jscomp$5$$) ? null : $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$($current_src$$) : $set_prev_src$$.call(null, $current_src$$);
  });
  $G__64594_65566_maybe_ref__41635__auto__$jscomp$10$$ = [$img_src$jscomp$5$$, $current_src$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$, $G__64594_65566_maybe_ref__41635__auto__$jscomp$10$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$, $G__64594_65566_maybe_ref__41635__auto__$jscomp$10$$);
  $G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$ = function() {
    return {className:"z-10", children:[$APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($prev_src$$) ? $prev_src$$ : $current_src$$) ? function() {
      var $G__64653$$ = function() {
        return {ref:$base_ref$$, src:$APP.$cljs$core$truth_$$($prev_src$$) ? $prev_src$$ : $current_src$$, className:"absolute\n                               z-10\n                               w-full\n                               h-full\n                               object-cover\n                               overflow-hidden", onLoad:function() {
          return $APP.$amp$utils$gsap$to_ref$$($transition_ref$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$440$opacity$$, 0, $APP.$cljs$cst$439$duration$$, 0], null));
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("img", $G__64653$$, "base") : $APP.$helix$core$jsx$$.call(null, "img", $G__64653$$, "base");
    }() : null, $APP.$cljs$core$truth_$$(function() {
      var $or__5142__auto__$jscomp$260$$ = $prev_src$$ == null;
      return $or__5142__auto__$jscomp$260$$ ? $or__5142__auto__$jscomp$260$$ : $img_src$jscomp$5$$;
    }()) ? function() {
      var $G__64690$$ = function() {
        return {src:$img_src$jscomp$5$$, ref:$transition_ref$$, className:"absolute\n                             z-20\n                             w-full\n                             h-full\n                             object-cover\n                             overflow-hidden", style:{opacity:$APP.$helix$impl$props$__GT_js$$(0)}, onLoad:function() {
          return $APP.$amp$utils$gsap$to_ref$$($transition_ref$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$440$opacity$$, 1, $APP.$cljs$cst$439$duration$$, 1, $APP.$cljs$cst$403$onComplete$$, function() {
            $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$(null) : $set_prev_src$$.call(null, null);
            return $set_current_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_current_src$$.$cljs$core$IFn$_invoke$arity$1$($img_src$jscomp$5$$) : $set_current_src$$.call(null, $img_src$jscomp$5$$);
          }], null));
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("img", $G__64690$$, "trans") : $APP.$helix$core$jsx$$.call(null, "img", $G__64690$$, "trans");
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64593_65565_G__64627_map__64556_map__64556__$1_props__41634__auto__$jscomp$10_vec__64553_vec__64573_vec__64576$$);
};
$amp$components$elements$lazy_image_gallery$caption_layer$$ = function($G__64855_map__64851_map__64851__$1_props__41634__auto__$jscomp$11_vec__64848$$, $maybe_ref__41635__auto__$jscomp$11$$) {
  $G__64855_map__64851_map__64851__$1_props__41634__auto__$jscomp$11_vec__64848$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64855_map__64851_map__64851__$1_props__41634__auto__$jscomp$11_vec__64848$$), $maybe_ref__41635__auto__$jscomp$11$$], null);
  $G__64855_map__64851_map__64851__$1_props__41634__auto__$jscomp$11_vec__64848$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64855_map__64851_map__64851__$1_props__41634__auto__$jscomp$11_vec__64848$$, 0, null);
  $G__64855_map__64851_map__64851__$1_props__41634__auto__$jscomp$11_vec__64848$$ = $APP.$cljs$core$__destructure_map$$($G__64855_map__64851_map__64851__$1_props__41634__auto__$jscomp$11_vec__64848$$);
  var $target_ref$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64855_map__64851_map__64851__$1_props__41634__auto__$jscomp$11_vec__64848$$, $cljs$cst$767$target_ref$$), $caption$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64855_map__64851_map__64851__$1_props__41634__auto__$jscomp$11_vec__64848$$, $APP.$cljs$cst$441$caption$$), $credit$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64855_map__64851_map__64851__$1_props__41634__auto__$jscomp$11_vec__64848$$, 
  $APP.$cljs$cst$442$credit$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64855_map__64851_map__64851__$1_props__41634__auto__$jscomp$11_vec__64848$$, $cljs$cst$768$other$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__64855_map__64851_map__64851__$1_props__41634__auto__$jscomp$11_vec__64848$$ = function() {
    return {className:"absolute\n                  z-20\n                  bottom-0 \n                  left-0\n                  w-full\n                  h-12\n                  pointer-events-none", ref:$target_ref$$, children:function() {
      var $G__64860$jscomp$1$$ = function() {
        return {className:"h-full\n                         w-full\n                         bg-slate-900/50 dark:bg-slate-900/60\n                         p-2", children:[function() {
          var $G__64866$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono text-xs", "text-slate-950  dark:text-white"]))), children:$caption$jscomp$3$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64866$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64866$jscomp$1$$);
        }(), function() {
          var $G__64879$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono text-xs", "text-slate-950  dark:text-white"]))), children:$credit$jscomp$3$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64879$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64879$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64860$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64860$jscomp$1$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64855_map__64851_map__64851__$1_props__41634__auto__$jscomp$11_vec__64848$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64855_map__64851_map__64851__$1_props__41634__auto__$jscomp$11_vec__64848$$);
};
$amp$components$elements$lazy_image_gallery$image_card$$ = function($G__64983_map__64908_map__64908__$1_props__41634__auto__$jscomp$12_vec__64904$$, $maybe_ref__41635__auto__$jscomp$12$$) {
  $G__64983_map__64908_map__64908__$1_props__41634__auto__$jscomp$12_vec__64904$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64983_map__64908_map__64908__$1_props__41634__auto__$jscomp$12_vec__64904$$), $maybe_ref__41635__auto__$jscomp$12$$], null);
  $G__64983_map__64908_map__64908__$1_props__41634__auto__$jscomp$12_vec__64904$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64983_map__64908_map__64908__$1_props__41634__auto__$jscomp$12_vec__64904$$, 0, null);
  $G__64983_map__64908_map__64908__$1_props__41634__auto__$jscomp$12_vec__64904$$ = $APP.$cljs$core$__destructure_map$$($G__64983_map__64908_map__64908__$1_props__41634__auto__$jscomp$12_vec__64904$$);
  var $width$jscomp$42$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64983_map__64908_map__64908__$1_props__41634__auto__$jscomp$12_vec__64904$$, $APP.$cljs$cst$418$width$$), $height$jscomp$40$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64983_map__64908_map__64908__$1_props__41634__auto__$jscomp$12_vec__64904$$, $APP.$cljs$cst$419$height$$), $img_src$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64983_map__64908_map__64908__$1_props__41634__auto__$jscomp$12_vec__64904$$, 
  $APP.$cljs$cst$438$img_src$$), $caption$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64983_map__64908_map__64908__$1_props__41634__auto__$jscomp$12_vec__64904$$, $APP.$cljs$cst$441$caption$$), $credit$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64983_map__64908_map__64908__$1_props__41634__auto__$jscomp$12_vec__64904$$, $APP.$cljs$cst$442$credit$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64983_map__64908_map__64908__$1_props__41634__auto__$jscomp$12_vec__64904$$, $cljs$cst$768$other$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64983_map__64908_map__64908__$1_props__41634__auto__$jscomp$12_vec__64904$$, $APP.$cljs$cst$99$key$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64983_map__64908_map__64908__$1_props__41634__auto__$jscomp$12_vec__64904$$, $APP.$cljs$cst$443$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $trigger_ref$$ = $APP.$helix$hooks$use_ref$$("trigger-ref"), $target_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("target-ref");
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($trigger_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$394$target$$, $target_ref$jscomp$1$$, $APP.$cljs$cst$395$initial$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$730$y$$, 100, $APP.$cljs$cst$440$opacity$$, 0], null), $APP.$cljs$cst$69$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
  3, [$APP.$cljs$cst$730$y$$, 0, $APP.$cljs$cst$440$opacity$$, 1, $APP.$cljs$cst$439$duration$$, 0.25], null), $APP.$cljs$cst$396$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$730$y$$, 100, $APP.$cljs$cst$440$opacity$$, 0, $APP.$cljs$cst$439$duration$$, 0.125], null)], null)]));
  $G__64983_map__64908_map__64908__$1_props__41634__auto__$jscomp$12_vec__64904$$ = function() {
    return {ref:$trigger_ref$$, style:{width:$APP.$helix$impl$props$__GT_js$$($width$jscomp$42$$), height:$APP.$helix$impl$props$__GT_js$$($height$jscomp$40$$)}, className:"relative\n                    bg-slate-200/50 dark:bg-white/10\n                    overflow-hidden", children:[function() {
      var $G__64996$$ = {"img-src":$img_src$jscomp$6$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$image_layer$$, $G__64996$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$image_layer$$, $G__64996$$);
    }(), $APP.$cljs$core$truth_$$($caption$jscomp$4$$) ? function() {
      var $G__65002$$ = {"target-ref":$target_ref$jscomp$1$$, caption:$caption$jscomp$4$$, credit:$credit$jscomp$4$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$caption_layer$$, $G__65002$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$caption_layer$$, $G__65002$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64983_map__64908_map__64908__$1_props__41634__auto__$jscomp$12_vec__64904$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64983_map__64908_map__64908__$1_props__41634__auto__$jscomp$12_vec__64904$$);
};
$amp$components$elements$lazy_image_gallery$lazy_image_gallery$$ = function($G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$, $G__65140_65902_maybe_ref__41635__auto__$jscomp$13$$) {
  $G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$), $G__65140_65902_maybe_ref__41635__auto__$jscomp$13$$], null);
  $G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$, 0, null);
  $G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$ = $APP.$cljs$core$__destructure_map$$($G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$);
  var $images$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$, $cljs$cst$769$images$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$, $cljs$cst$770$is_visible_QMARK_$$);
  $G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$, $cljs$cst$771$image_gallery_container_ref$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$2$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $gallery_dimensions$$ = $APP.$amp$hooks$use_container_size$use_container_size$$($G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$);
  $G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$ = $APP.$helix$hooks$use_state$$($amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$(8, 200));
  var $masonary_grid_slots$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$, 0, null), $set_masonary_grid_slots$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$, 1, null);
  $G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $G__65145$$ = $amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$($APP.$cljs$cst$418$width$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$), $APP.$cljs$cst$419$height$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$));
    return $set_masonary_grid_slots$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_masonary_grid_slots$$.$cljs$core$IFn$_invoke$arity$1$($G__65145$$) : $set_masonary_grid_slots$$.call(null, $G__65145$$);
  });
  $G__65140_65902_maybe_ref__41635__auto__$jscomp$13$$ = [$APP.$cljs$cst$418$width$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$), $APP.$cljs$cst$419$height$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$)];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$, $G__65140_65902_maybe_ref__41635__auto__$jscomp$13$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$, 
  $G__65140_65902_maybe_ref__41635__auto__$jscomp$13$$);
  $G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$ = function() {
    return {ref:$outer_ctx$jscomp$2$$, className:"overflow-hidden h-full", children:function() {
      var $G__65158$$ = function() {
        return {className:"columns-3 gap-0 h-full pinstripe", children:$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($idx$jscomp$70$$, $dimensions$jscomp$8_height$jscomp$41$$) {
          var $G__65193_caption$jscomp$5_map__65168$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($images$$, $cljs$core$rand_int$$($APP.$cljs$core$count$$($images$$))), $credit$jscomp$5_map__65168__$1$$ = $APP.$cljs$core$__destructure_map$$($G__65193_caption$jscomp$5_map__65168$$), $sized_image_src_src$jscomp$38$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$5_map__65168__$1$$, $APP.$cljs$cst$429$src$$);
          $G__65193_caption$jscomp$5_map__65168$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$5_map__65168__$1$$, $APP.$cljs$cst$441$caption$$);
          $credit$jscomp$5_map__65168__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$5_map__65168__$1$$, $APP.$cljs$cst$442$credit$$);
          var $aspect_ratio$jscomp$2$$ = $APP.$cljs$cst$726$aspect_ratio$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$meta$$($dimensions$jscomp$8_height$jscomp$41$$)), $closest_height_closest_match$$ = $amp$components$elements$lazy_image_gallery$find_closest_size$$($APP.$cljs$core$first$$($dimensions$jscomp$8_height$jscomp$41$$), $APP.$cljs$core$second$$($dimensions$jscomp$8_height$jscomp$41$$)), $width$jscomp$43$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$8_height$jscomp$41$$, 
          0, null);
          $dimensions$jscomp$8_height$jscomp$41$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$8_height$jscomp$41$$, 1, null);
          var $closest_width$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($closest_height_closest_match$$, 0, null);
          $closest_height_closest_match$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($closest_height_closest_match$$, 1, null);
          $sized_image_src_src$jscomp$38$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($sized_image_src_src$jscomp$38$$) + "?w\x3d" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($closest_width$$) + "\x26h\x3d" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($closest_height_closest_match$$) + "\x26fit\x3dcrop\x26auto\x3dformat,compress\x26crop\x3dfaces,edges";
          $G__65193_caption$jscomp$5_map__65168$$ = {width:$width$jscomp$43$$, height:$dimensions$jscomp$8_height$jscomp$41$$, "img-src":$sized_image_src_src$jscomp$38$$, caption:$G__65193_caption$jscomp$5_map__65168$$, credit:$credit$jscomp$5_map__65168__$1$$, other:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($aspect_ratio$jscomp$2$$), idx:$idx$jscomp$70$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$lazy_image_gallery$image_card$$, $G__65193_caption$jscomp$5_map__65168$$, $idx$jscomp$70$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$image_card$$, $G__65193_caption$jscomp$5_map__65168$$, $idx$jscomp$70$$);
        }, $masonary_grid_slots$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65158$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65158$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__65139_65901_G__65149_image_gallery_container_ref_map__65114_map__65114__$1_props__41634__auto__$jscomp$13_vec__65111_vec__65133$$);
};
$amp$components$sections$about_biennale$title$$ = function($G__66091$jscomp$1_props__41634__auto__$jscomp$14$$) {
  $APP.$helix$core$extract_cljs_props$$($G__66091$jscomp$1_props__41634__auto__$jscomp$14$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__66091$jscomp$1_props__41634__auto__$jscomp$14$$ = function() {
    return {className:"lg:flex\n                  w-full\n                  lg:h-2/5\n                  z-20\n                  items-center\n                  justify-between\n                  bg-black/10\n                  lg:p-12 p-4\n                  lg:text-6xl text-3xl\n                  font-display\n                  font-bold\n                  text-slate-800", children:[function() {
      var $G__66100$$ = function() {
        return {className:"flex flex-col", children:[function() {
          var $G__66106$$ = {className:"", children:"venice"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66106$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__66106$$);
        }(), function() {
          var $G__66115$$ = {className:"", children:"biennale"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66115$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__66115$$);
        }(), function() {
          var $G__66174$jscomp$1$$ = {className:"", children:"2026"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66174$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__66174$jscomp$1$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66100$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66100$$);
    }(), function() {
      var $G__66186$jscomp$1$$ = function() {
        return {className:"flex\n                         flex-col\n                         font-display\n                         font-bold\n                         lg:text-right\n                         italic\n                         text-white/60", children:[function() {
          var $G__66190$$ = {className:"", children:"in"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66190$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__66190$$);
        }(), function() {
          var $G__66196$$ = {className:"", children:"minor"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66196$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__66196$$);
        }(), function() {
          var $G__66202$$ = {className:"", children:"keys"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66202$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__66202$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66186$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66186$jscomp$1$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66091$jscomp$1_props__41634__auto__$jscomp$14$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66091$jscomp$1_props__41634__auto__$jscomp$14$$);
};
$amp$components$sections$about_biennale$copy_block$$ = function($G__66221_map__66219_map__66219__$1_props__41634__auto__$jscomp$15_vec__66216$$, $maybe_ref__41635__auto__$jscomp$15$$) {
  $G__66221_map__66219_map__66219__$1_props__41634__auto__$jscomp$15_vec__66216$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__66221_map__66219_map__66219__$1_props__41634__auto__$jscomp$15_vec__66216$$), $maybe_ref__41635__auto__$jscomp$15$$], null);
  $G__66221_map__66219_map__66219__$1_props__41634__auto__$jscomp$15_vec__66216$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66221_map__66219_map__66219__$1_props__41634__auto__$jscomp$15_vec__66216$$, 0, null);
  $G__66221_map__66219_map__66219__$1_props__41634__auto__$jscomp$15_vec__66216$$ = $APP.$cljs$core$__destructure_map$$($G__66221_map__66219_map__66219__$1_props__41634__auto__$jscomp$15_vec__66216$$);
  var $title$jscomp$20$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66221_map__66219_map__66219__$1_props__41634__auto__$jscomp$15_vec__66216$$, $APP.$cljs$cst$381$title$$), $copy$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66221_map__66219_map__66219__$1_props__41634__auto__$jscomp$15_vec__66216$$, $cljs$cst$772$copy$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__66221_map__66219_map__66219__$1_props__41634__auto__$jscomp$15_vec__66216$$ = function() {
    return {className:"flex flex-col mb-12 font-display", children:[function() {
      var $G__66225$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:$title$jscomp$20$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66225$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__66225$$);
    }(), function() {
      var $G__66231$$ = {className:"text-slate-800", children:$copy$jscomp$1$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66231$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__66231$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66221_map__66219_map__66219__$1_props__41634__auto__$jscomp$15_vec__66216$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66221_map__66219_map__66219__$1_props__41634__auto__$jscomp$15_vec__66216$$);
};
$amp$components$sections$about_biennale$about_biennale_section$$ = function($G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$, $maybe_ref__41635__auto__$jscomp$16$$) {
  $G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$), $maybe_ref__41635__auto__$jscomp$16$$], null);
  $G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$, 0, null);
  $G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$ = $APP.$cljs$core$__destructure_map$$($G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$, $cljs$cst$773$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$, $cljs$cst$770$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$, $cljs$cst$774$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$3$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$3$$);
  var $visited_QMARK_$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$, 1, null);
  $G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$about_biennale$images$$);
  var $images$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$, 1, null);
  var $image_gallery_container_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("image-gallery-container-ref"), $is_desktop_QMARK_$jscomp$2$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$ = function() {
    return {ref:$outer_ctx$jscomp$3$$, className:"h-full \n                        w-full\n                        flex\n                        pink-grad\n                        light-red-grad\n                        items-center\n                        justify-center\n                        font-display\n                        relative", children:function() {
      var $G__66302$$ = function() {
        return {className:"flex \n                               flex-col\n                               overflow-hidden\n                               relative\n                               w-full md:w-10/12 lg:w-full\n                               lg:p-12 p-4", children:[function() {
          var $G__66307$$ = {};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$title$$, $G__66307$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$title$$, $G__66307$$);
        }(), function() {
          var $G__66310$$ = function() {
            return {className:"flex overflow-hidden relative", children:[function() {
              var $G__66318$$ = function() {
                return {className:"lg:w-1/2 \n                                             lg:p-16 p-4", children:[function() {
                  var $G__66326$$ = {title:"the biennale", copy:"The Venice Biennale is the most prestigious platform for contemporary art in the world—the cultural equivalent of the Olympics.  Every two years, nations convene in the Giardini and Arsenale to present the best of their artists.  The 61st International Art Exhibition will run from May 9 to November 22 2026 and, following the unexpected passing of curator Koyo Kouoh, will be realized exactly as she conceived it."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$copy_block$$, $G__66326$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$copy_block$$, $G__66326$$);
                }(), function() {
                  var $G__66334$$ = {title:"The theme: In Minor Keys", copy:"Kouoh’s vision invites us to slow down and listen to the “frequencies of the minor keys,” the quiet tones and lower frequencies that often get lost amid today’s chaos .  In her curatorial text, she describes the minor key as a metaphor for small islands and intimate oases—gardens, courtyards, dance floors—where artists cultivate rich social and ecological worlds .  Rather than celebrating spectacle, the exhibition tunes into “the persistent signals of earth and life,” foregrounding sensory, affective experiences .  As Kouoh’s team notes, “In minor keys are sequences of exhilarating journeys that address the sensate and the affective, inviting visitors to marvel, meditate, dream, revel, reflect and commune in realms where time is not corporate property nor at the mercy of relentlessly accelerated productivity” ."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$copy_block$$, $G__66334$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$copy_block$$, $G__66334$$);
                }(), function() {
                  var $G__66346$$ = {title:"Why this matters to Armenians", copy:"Armenia’s cultural memory is one of quiet endurance, repetition and devotion.  From stone‑carved khachkars to endless rows of hand‑woven carpets, Armenian art has always been a labour of patience and persistence.  Kouoh’s vision of the Biennale as an archipelago of “minor keys” resonates deeply with this ethos.  It is about valuing the handmade over the manufactured, the intimate gesture over the headline‑grabbing spectacle—precisely what Zadik Zadikian will embody in The Studio."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$copy_block$$, $G__66346$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$copy_block$$, $G__66346$$);
                }(), function() {
                  var $G__66354$$ = {className:"", children:"By bringing an Armenian “island” to Venice, we affirm that our heritage belongs on the world’s biggest stage not because it shouts the loudest, but because it teaches the world how to listen.  Supporting the Armenia Pavilion is more than funding an exhibition; it is enabling a sanctuary of slow, deliberate creativity—an oasis of dignity and resilience—within a global conversation on art’s future."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66354$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__66354$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66318$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66318$$);
            }(), $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$2$$) ? $visited_QMARK_$jscomp$5$$ : $is_desktop_QMARK_$jscomp$2$$) ? function() {
              var $G__66372$jscomp$3_G__66376$jscomp$inline_4072_G__66380$jscomp$inline_4073_JSCompiler_inline_result$jscomp$inline_4071$$ = {images:$images$jscomp$1$$, "image-gallery-container-ref":$image_gallery_container_ref$jscomp$1$$};
              $G__66372$jscomp$3_G__66376$jscomp$inline_4072_G__66380$jscomp$inline_4073_JSCompiler_inline_result$jscomp$inline_4071$$ = {className:"absolute h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $G__66372$jscomp$3_G__66376$jscomp$inline_4072_G__66380$jscomp$inline_4073_JSCompiler_inline_result$jscomp$inline_4071$$) : $APP.$helix$core$jsx$$.call(null, 
              $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $G__66372$jscomp$3_G__66376$jscomp$inline_4072_G__66380$jscomp$inline_4073_JSCompiler_inline_result$jscomp$inline_4071$$)};
              $G__66372$jscomp$3_G__66376$jscomp$inline_4072_G__66380$jscomp$inline_4073_JSCompiler_inline_result$jscomp$inline_4071$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66372$jscomp$3_G__66376$jscomp$inline_4072_G__66380$jscomp$inline_4073_JSCompiler_inline_result$jscomp$inline_4071$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66372$jscomp$3_G__66376$jscomp$inline_4072_G__66380$jscomp$inline_4073_JSCompiler_inline_result$jscomp$inline_4071$$);
              $G__66372$jscomp$3_G__66376$jscomp$inline_4072_G__66380$jscomp$inline_4073_JSCompiler_inline_result$jscomp$inline_4071$$ = {ref:$image_gallery_container_ref$jscomp$1$$, className:"ml-8\n                                               w-7/12\n                                               relative\n                                               overflow-hidden", children:$G__66372$jscomp$3_G__66376$jscomp$inline_4072_G__66380$jscomp$inline_4073_JSCompiler_inline_result$jscomp$inline_4071$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66372$jscomp$3_G__66376$jscomp$inline_4072_G__66380$jscomp$inline_4073_JSCompiler_inline_result$jscomp$inline_4071$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66372$jscomp$3_G__66376$jscomp$inline_4072_G__66380$jscomp$inline_4073_JSCompiler_inline_result$jscomp$inline_4071$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66310$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66310$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66302$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66302$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__66298_map__66287_map__66287__$1_props__41634__auto__$jscomp$16_vec__66284_vec__66289_vec__66292$$);
};
$amp$components$sections$contact_section$contact_section$$ = function($G__64903$jscomp$1_map__64895_props__41640__auto__$jscomp$36_vec__64892$$, $maybe_ref__41641__auto__$jscomp$36$$) {
  $G__64903$jscomp$1_map__64895_props__41640__auto__$jscomp$36_vec__64892$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64903$jscomp$1_map__64895_props__41640__auto__$jscomp$36_vec__64892$$), $maybe_ref__41641__auto__$jscomp$36$$], null);
  $G__64903$jscomp$1_map__64895_props__41640__auto__$jscomp$36_vec__64892$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64903$jscomp$1_map__64895_props__41640__auto__$jscomp$36_vec__64892$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__64903$jscomp$1_map__64895_props__41640__auto__$jscomp$36_vec__64892$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__64903$jscomp$1_map__64895_props__41640__auto__$jscomp$36_vec__64892$$ = function() {
    return {className:"relative w-full font-display mt-12", children:[function() {
      var $G__64917$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64917$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64917$$);
    }(), function() {
      var $G__64933_G__64939$jscomp$inline_4076_G__64943$jscomp$inline_4077$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-xl lg:text-2xl italic font-light leading-relaxed", "text-slate-600  dark:text-slate-400"]))), children:"“Culture is where nations become undeniable. It is where influence is built without violence; where history is not only remembered, but translated into future power.”"};
      $G__64933_G__64939$jscomp$inline_4076_G__64943$jscomp$inline_4077$$ = {className:"max-w-3xl text-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64933_G__64939$jscomp$inline_4076_G__64943$jscomp$inline_4077$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64933_G__64939$jscomp$inline_4076_G__64943$jscomp$inline_4077$$)};
      $G__64933_G__64939$jscomp$inline_4076_G__64943$jscomp$inline_4077$$ = {className:"py-16 lg:py-24 px-6 flex justify-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__64933_G__64939$jscomp$inline_4076_G__64943$jscomp$inline_4077$$) : $APP.$helix$core$jsx$$.call(null, "blockquote", $G__64933_G__64939$jscomp$inline_4076_G__64943$jscomp$inline_4077$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64933_G__64939$jscomp$inline_4076_G__64943$jscomp$inline_4077$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64933_G__64939$jscomp$inline_4076_G__64943$jscomp$inline_4077$$);
    }(), function() {
      var $G__64975$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64975$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64975$$);
    }(), function() {
      var $G__64983$jscomp$1$$ = function() {
        return {className:"py-16 lg:py-20 px-6 max-w-5xl mx-auto", children:[function() {
          var $G__64995$jscomp$1$$ = function() {
            return {className:"text-center mb-16", children:[function() {
              var $G__65001$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-2xl lg:text-3xl font-bold uppercase tracking-wider mb-3", "text-slate-900  dark:text-slate-100"]))), children:"Support the Pavilion"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__65001$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__65001$jscomp$1$$);
            }(), function() {
              var $G__65031$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm lg:text-base max-w-xl mx-auto mb-8", "text-slate-600  dark:text-slate-400"]))), children:"Your contribution directly supports Armenia’s national presentation at the 61st Venice Biennale—a sovereign act of cultural visibility on the world stage."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65031$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__65031$$);
            }(), function() {
              var $G__65043$$ = function() {
                return {className:"flex justify-center gap-4 flex-wrap", children:[function() {
                  var $G__65051$$ = function() {
                    return {title:"Donate Now", "on-click":function() {
                      return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                    }};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__65051$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__65051$$);
                }(), function() {
                  var $G__65065$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-[11px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400;hover:text-slate-900 dark:hover:text-white;border;border-slate-200 dark:border-white/15;hover:border-slate-400 dark:hover:border-slate-500;px-6 py-3;transition-colors duration-300 ease-in-out".split(";")))), 
                    onClick:function() {
                      return $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$("section-8") : $scroll_to_id$$.call(null, "section-8");
                    }, children:"Wire Transfer Info →"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__65065$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__65065$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65043$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65043$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64995$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64995$jscomp$1$$);
        }(), function() {
          var $G__65080$$ = function() {
            return {className:"grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-sm", children:[function() {
              var $G__65084$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__65092$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-semibold uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"Get in Touch"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__65092$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__65092$$);
                }(), function() {
                  var $G__65101$$ = {href:"mailto:hello@armenianpavilion2026.org?subject\x3dLet's%20connect", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), children:"hello@armenianpavilion2026.org"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__65101$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__65101$$);
                }(), function() {
                  var $G__65109$$ = {href:"tel:+13234041152", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), children:"+1 323-404-1152"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__65109$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__65109$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65084$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65084$$);
            }(), function() {
              var $G__65119$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__65125$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-semibold uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"501(c)(3) Non-Profit"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__65125$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__65125$$);
                }(), function() {
                  var $G__65133$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"Fallen Angels Inc."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65133$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__65133$$);
                }(), function() {
                  var $G__65204$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-600  dark:text-slate-400"), children:"EIN: 92-2395513"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65204$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__65204$$);
                }(), function() {
                  var $G__65218$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-600  dark:text-slate-400"), children:"Los Angeles, CA"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65218$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__65218$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65119$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65119$$);
            }(), function() {
              var $G__65222$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__65226$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-semibold uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"Quick Links"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__65226$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__65226$$);
                }(), function() {
                  var $G__65230$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$("section-1") : $scroll_to_id$$.call(null, "section-1");
                    }, children:"Press Release"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__65230$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__65230$$);
                }(), function() {
                  var $G__65234$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$("section-3") : $scroll_to_id$$.call(null, "section-3");
                    }, children:"Budget"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__65234$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__65234$$);
                }(), function() {
                  var $G__65239$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$("section-5") : $scroll_to_id$$.call(null, "section-5");
                    }, children:"Committee"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__65239$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__65239$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65222$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65222$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65080$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65080$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64983$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64983$jscomp$1$$);
    }(), function() {
      var $G__65243$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65243$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65243$$);
    }(), function() {
      var $G__65247$$ = function() {
        return {className:"py-6 px-6 flex flex-col sm:flex-row justify-between items-center gap-3 max-w-5xl mx-auto", children:[function() {
          var $G__65251$$ = function() {
            return {className:"flex items-center gap-4", children:[function() {
              var $G__65256$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"h-6 opacity-40 invert dark:invert-0"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__65256$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__65256$$);
            }(), function() {
              var $G__65263$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] uppercase tracking-[0.15em] whitespace-nowrap", "text-slate-600  dark:text-slate-400"]))), children:"Armenia Pavilion · 61st Venice Biennale"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65263$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65263$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65251$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65251$$);
        }(), function() {
          var $G__65275$$ = function() {
            return {className:"flex items-center gap-4", children:[function() {
              var $G__65284$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-600  dark:text-slate-400"]))), children:"© 2026 AZ Studios Inc."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65284$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65284$$);
            }(), function() {
              var $G__65288$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"v" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("ae4c213")};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65288$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65288$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65275$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65275$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65247$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65247$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("footer", $G__64903$jscomp$1_map__64895_props__41640__auto__$jscomp$36_vec__64892$$) : $APP.$helix$core$jsxs$$.call(null, "footer", $G__64903$jscomp$1_map__64895_props__41640__auto__$jscomp$36_vec__64892$$);
};
$amp$components$sections$artist_section$artist_section$$ = function($G__64483$jscomp$1_map__64456_map__64456__$1_props__41634__auto__$jscomp$17_vec__64453_vec__64471$$, $maybe_ref__41635__auto__$jscomp$17$$) {
  $G__64483$jscomp$1_map__64456_map__64456__$1_props__41634__auto__$jscomp$17_vec__64453_vec__64471$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64483$jscomp$1_map__64456_map__64456__$1_props__41634__auto__$jscomp$17_vec__64453_vec__64471$$), $maybe_ref__41635__auto__$jscomp$17$$], null);
  $G__64483$jscomp$1_map__64456_map__64456__$1_props__41634__auto__$jscomp$17_vec__64453_vec__64471$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64483$jscomp$1_map__64456_map__64456__$1_props__41634__auto__$jscomp$17_vec__64453_vec__64471$$, 0, null);
  $G__64483$jscomp$1_map__64456_map__64456__$1_props__41634__auto__$jscomp$17_vec__64453_vec__64471$$ = $APP.$cljs$core$__destructure_map$$($G__64483$jscomp$1_map__64456_map__64456__$1_props__41634__auto__$jscomp$17_vec__64453_vec__64471$$);
  var $id$jscomp$81$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64483$jscomp$1_map__64456_map__64456__$1_props__41634__auto__$jscomp$17_vec__64453_vec__64471$$, $APP.$cljs$cst$200$id$$), $title$jscomp$21$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64483$jscomp$1_map__64456_map__64456__$1_props__41634__auto__$jscomp$17_vec__64453_vec__64471$$, $APP.$cljs$cst$381$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$16$$ = $APP.$helix$hooks$use_ref$$("artist-ref");
  $G__64483$jscomp$1_map__64456_map__64456__$1_props__41634__auto__$jscomp$17_vec__64453_vec__64471$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$16$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$451$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64483$jscomp$1_map__64456_map__64456__$1_props__41634__auto__$jscomp$17_vec__64453_vec__64471$$, 0, null);
  var $visible_QMARK_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64483$jscomp$1_map__64456_map__64456__$1_props__41634__auto__$jscomp$17_vec__64453_vec__64471$$, 1, null), $tag_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$753$boxDecorationBreak$$, "clone", $cljs$cst$754$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__64483$jscomp$1_map__64456_map__64456__$1_props__41634__auto__$jscomp$17_vec__64453_vec__64471$$ = function() {
    return {id:$id$jscomp$81$$, ref:$ref$jscomp$16$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["pt-12 sm:pt-14", "pb-10 sm:pb-12"]))), children:[$APP.$cljs$core$truth_$$($title$jscomp$21$$) ? function() {
      var $G__64501_G__64513$jscomp$inline_3687$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$$), children:$title$jscomp$21$$};
      $G__64501_G__64513$jscomp$inline_3687$$ = {className:"font-display font-bold uppercase tracking-wider\n                      text-2xl sm:text-3xl text-white dark:text-white\n                      leading-relaxed mb-10 px-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64501_G__64513$jscomp$inline_3687$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64501_G__64513$jscomp$inline_3687$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__64501_G__64513$jscomp$inline_3687$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__64501_G__64513$jscomp$inline_3687$$);
    }() : null, function() {
      var $G__64529$jscomp$1$$ = function() {
        return {className:"px-4 sm:flex sm:gap-10 sm:items-start", children:[function() {
          var $G__64541$jscomp$1_G__64548$jscomp$inline_3690$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/zz-portrait-2.jpg", fit:"crop", "aspect-ratio":0.75, "active?":$visible_QMARK_$$};
          $G__64541$jscomp$1_G__64548$jscomp$inline_3690$$ = {className:"w-full sm:w-2/5 flex-shrink-0 aspect-[3/4] rounded-sm overflow-hidden mb-8 sm:mb-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__64541$jscomp$1_G__64548$jscomp$inline_3690$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, 
          $G__64541$jscomp$1_G__64548$jscomp$inline_3690$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64541$jscomp$1_G__64548$jscomp$inline_3690$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64541$jscomp$1_G__64548$jscomp$inline_3690$$);
        }(), function() {
          var $G__64598$jscomp$1$$ = function() {
            return {className:"sm:flex-1 sm:min-w-0", children:[function() {
              var $G__64612$jscomp$1_G__64622$jscomp$inline_3693$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$$), children:"Zadik Zadikian"};
              $G__64612$jscomp$1_G__64622$jscomp$inline_3693$$ = {className:"font-display font-bold uppercase tracking-wider\n                           text-2xl sm:text-3xl text-white dark:text-white mb-1 leading-relaxed", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64612$jscomp$1_G__64622$jscomp$inline_3693$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64612$jscomp$1_G__64622$jscomp$inline_3693$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64612$jscomp$1_G__64622$jscomp$inline_3693$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64612$jscomp$1_G__64622$jscomp$inline_3693$$);
            }(), function() {
              var $G__64647$jscomp$1$$ = {className:"font-display font-medium text-xs uppercase tracking-[0.2em]\n                           text-amber-600 dark:text-amber-300/70 mb-6", children:"Artist"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64647$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64647$jscomp$1$$);
            }(), function() {
              var $G__64664$$ = function() {
                return {className:"border-l-2 border-white/20 pl-6 my-8", children:[function() {
                  var $G__64672$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "italic"]))), children:"“If you want to learn about something, become that thing and then study yourself.”"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64672$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64672$jscomp$1$$);
                }(), function() {
                  var $G__64682$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$amp$styles$label_muted$$]))), children:"— Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__64682$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__64682$jscomp$1$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__64664$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__64664$$);
            }(), function() {
              var $G__64705$jscomp$1$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["Zadik Zadikian (b. 1948, Erevan, Soviet Armenia) has spent over five decades creating works that challenge both the materials and ideologies of contemporary art. A daring escape from the Soviet Union in his youth marked the beginning of an extraordinary journey, from his training under ", 
                function() {
                  var $G__64714$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Benjamino Bufano"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64714$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64714$$);
                }(), " to his longstanding friendship with ", function() {
                  var $G__64724$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Richard Serra"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64724$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64724$jscomp$1$$);
                }(), "."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64705$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__64705$jscomp$1$$);
            }(), function() {
              var $G__64737$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Zadikian’s work, particularly his exploration of gilded forms, has established him as one of the leading sculptors in the realm of contemporary alchemy. His pieces, often crafted from gold leaf, suggest a transcendence of time and place, pushing boundaries while creating worlds that seem to belong to another realm entirely."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64737$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64737$$);
            }(), function() {
              var $G__64751$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$]))), children:"Centered on the most basic unit—the block, or brick—which has been continuously used for building for over eleven millennia, Zadikian’s simplified plaster casts are elemental and foundational: a humble aesthetics where form, beauty, and meaning emerge through the assembly and fluid recombination of humanity’s most common architectural building element."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64751$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64751$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64598$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64598$jscomp$1$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64529$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64529$jscomp$1$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__64483$jscomp$1_map__64456_map__64456__$1_props__41634__auto__$jscomp$17_vec__64453_vec__64471$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__64483$jscomp$1_map__64456_map__64456__$1_props__41634__auto__$jscomp$17_vec__64453_vec__64471$$);
};
$amp$components$sections$curators_section$curator_card$$ = function($G__64743$jscomp$1_map__64686_map__64686__$1_props__41634__auto__$jscomp$18_vec__64683$$, $maybe_ref__41635__auto__$jscomp$18$$) {
  $G__64743$jscomp$1_map__64686_map__64686__$1_props__41634__auto__$jscomp$18_vec__64683$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64743$jscomp$1_map__64686_map__64686__$1_props__41634__auto__$jscomp$18_vec__64683$$), $maybe_ref__41635__auto__$jscomp$18$$], null);
  $G__64743$jscomp$1_map__64686_map__64686__$1_props__41634__auto__$jscomp$18_vec__64683$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64743$jscomp$1_map__64686_map__64686__$1_props__41634__auto__$jscomp$18_vec__64683$$, 0, null);
  $G__64743$jscomp$1_map__64686_map__64686__$1_props__41634__auto__$jscomp$18_vec__64683$$ = $APP.$cljs$core$__destructure_map$$($G__64743$jscomp$1_map__64686_map__64686__$1_props__41634__auto__$jscomp$18_vec__64683$$);
  var $name$jscomp$197$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64743$jscomp$1_map__64686_map__64686__$1_props__41634__auto__$jscomp$18_vec__64683$$, $APP.$cljs$cst$191$name$$), $role$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64743$jscomp$1_map__64686_map__64686__$1_props__41634__auto__$jscomp$18_vec__64683$$, $APP.$cljs$cst$775$role$$), $img$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64743$jscomp$1_map__64686_map__64686__$1_props__41634__auto__$jscomp$18_vec__64683$$, 
  $cljs$cst$776$img$$), $bio$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64743$jscomp$1_map__64686_map__64686__$1_props__41634__auto__$jscomp$18_vec__64683$$, $cljs$cst$777$bio$$), $visible_QMARK_$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64743$jscomp$1_map__64686_map__64686__$1_props__41634__auto__$jscomp$18_vec__64683$$, $cljs$cst$778$visible_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $tag_style$jscomp$1$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$753$boxDecorationBreak$$, "clone", $cljs$cst$754$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__64743$jscomp$1_map__64686_map__64686__$1_props__41634__auto__$jscomp$18_vec__64683$$ = function() {
    return {className:"px-4 sm:flex sm:gap-8 sm:items-start", children:[function() {
      var $G__64772_G__64780$jscomp$inline_3696$$ = {"img-src":$img$jscomp$2$$, fit:"crop", "aspect-ratio":1, "active?":$visible_QMARK_$jscomp$1$$};
      $G__64772_G__64780$jscomp$inline_3696$$ = {className:"float-left mr-4 mb-2 sm:float-none sm:mr-0 sm:mb-0\n               w-20 aspect-square sm:w-36\n               flex-shrink-0 rounded-sm overflow-hidden", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__64772_G__64780$jscomp$inline_3696$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, 
      $G__64772_G__64780$jscomp$inline_3696$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64772_G__64780$jscomp$inline_3696$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64772_G__64780$jscomp$inline_3696$$);
    }(), function() {
      var $G__64790$$ = function() {
        return {className:"sm:flex-1 sm:min-w-0", children:[function() {
          var $G__64798_G__64804$jscomp$inline_3699$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-2 py-0.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$jscomp$1$$), children:$name$jscomp$197$$};
          $G__64798_G__64804$jscomp$inline_3699$$ = {className:"font-display font-bold uppercase tracking-wider\n                    text-lg sm:text-xl text-white dark:text-white mb-1 leading-relaxed", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64798_G__64804$jscomp$inline_3699$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64798_G__64804$jscomp$inline_3699$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64798_G__64804$jscomp$inline_3699$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64798_G__64804$jscomp$inline_3699$$);
        }(), function() {
          var $G__64817$$ = {className:"font-display font-medium text-xs uppercase tracking-[0.2em]\n                    text-amber-600 dark:text-amber-300/70 mb-3", children:$role$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64817$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64817$$);
        }(), function() {
          var $G__64829$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_sm$$, "sm:text-base"]))), children:$bio$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64829$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64829$$);
        }(), function() {
          var $G__64835$jscomp$1$$ = {className:"clear-both sm:hidden"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64835$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64835$jscomp$1$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64790$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64790$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64743$jscomp$1_map__64686_map__64686__$1_props__41634__auto__$jscomp$18_vec__64683$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64743$jscomp$1_map__64686_map__64686__$1_props__41634__auto__$jscomp$18_vec__64683$$);
};
$amp$components$sections$curators_section$curators_section$$ = function($G__64913_map__64900_map__64900__$1_props__41634__auto__$jscomp$19_vec__64897_vec__64909$$, $maybe_ref__41635__auto__$jscomp$19$$) {
  $G__64913_map__64900_map__64900__$1_props__41634__auto__$jscomp$19_vec__64897_vec__64909$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64913_map__64900_map__64900__$1_props__41634__auto__$jscomp$19_vec__64897_vec__64909$$), $maybe_ref__41635__auto__$jscomp$19$$], null);
  $G__64913_map__64900_map__64900__$1_props__41634__auto__$jscomp$19_vec__64897_vec__64909$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64913_map__64900_map__64900__$1_props__41634__auto__$jscomp$19_vec__64897_vec__64909$$, 0, null);
  $G__64913_map__64900_map__64900__$1_props__41634__auto__$jscomp$19_vec__64897_vec__64909$$ = $APP.$cljs$core$__destructure_map$$($G__64913_map__64900_map__64900__$1_props__41634__auto__$jscomp$19_vec__64897_vec__64909$$);
  var $id$jscomp$82$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64913_map__64900_map__64900__$1_props__41634__auto__$jscomp$19_vec__64897_vec__64909$$, $APP.$cljs$cst$200$id$$), $title$jscomp$22$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64913_map__64900_map__64900__$1_props__41634__auto__$jscomp$19_vec__64897_vec__64909$$, $APP.$cljs$cst$381$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$17$$ = $APP.$helix$hooks$use_ref$$("curators-ref");
  $G__64913_map__64900_map__64900__$1_props__41634__auto__$jscomp$19_vec__64897_vec__64909$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$17$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$451$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64913_map__64900_map__64900__$1_props__41634__auto__$jscomp$19_vec__64897_vec__64909$$, 0, null);
  var $visible_QMARK_$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64913_map__64900_map__64900__$1_props__41634__auto__$jscomp$19_vec__64897_vec__64909$$, 1, null), $title_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$753$boxDecorationBreak$$, "clone", $cljs$cst$754$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__64913_map__64900_map__64900__$1_props__41634__auto__$jscomp$19_vec__64897_vec__64909$$ = function() {
    return {id:$id$jscomp$82$$, ref:$ref$jscomp$17$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["pt-12 sm:pt-14", "pb-10 sm:pb-12"]))), children:[$APP.$cljs$core$truth_$$($title$jscomp$22$$) ? function() {
      var $G__64917$jscomp$1_G__64921$jscomp$inline_3702$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($title_style$$), children:$title$jscomp$22$$};
      $G__64917$jscomp$1_G__64921$jscomp$inline_3702$$ = {className:"font-display font-bold uppercase tracking-wider\n                      text-2xl sm:text-3xl text-white dark:text-white\n                      leading-relaxed mb-10 px-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__64917$jscomp$1_G__64921$jscomp$inline_3702$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__64917$jscomp$1_G__64921$jscomp$inline_3702$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__64917$jscomp$1_G__64921$jscomp$inline_3702$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__64917$jscomp$1_G__64921$jscomp$inline_3702$$);
    }() : null, function() {
      var $G__64926$$ = function() {
        return {className:"space-y-8 sm:space-y-12\n              divide-y divide-slate-200/50 dark:divide-white/10", children:function() {
          return function $amp$components$sections$curators_section$curators_section_render_$_iter__64930$$($s__64931$$) {
            return new $APP.$cljs$core$LazySeq$$(null, function() {
              for (;;) {
                var $s__64931__$2_temp__5823__auto__$jscomp$103$$ = $APP.$cljs$core$seq$$($s__64931$$);
                if ($s__64931__$2_temp__5823__auto__$jscomp$103$$) {
                  if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__64931__$2_temp__5823__auto__$jscomp$103$$)) {
                    var $c__5626__auto__$jscomp$23$$ = $APP.$cljs$core$_chunked_first$$($s__64931__$2_temp__5823__auto__$jscomp$103$$), $size__5627__auto__$jscomp$23$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$23$$), $b__64933$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$23$$);
                    return function() {
                      for (var $i__64932$$ = 0;;) {
                        if ($i__64932$$ < $size__5627__auto__$jscomp$23$$) {
                          var $JSCompiler_temp_const$jscomp$3925_map__64994_map__64994__$1$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$23$$, $i__64932$$), $G__65099$jscomp$inline_3985_G__65118$jscomp$inline_3986_curator$jscomp$1$$ = $JSCompiler_temp_const$jscomp$3925_map__64994_map__64994__$1$$ = $APP.$cljs$core$__destructure_map$$($JSCompiler_temp_const$jscomp$3925_map__64994_map__64994__$1$$), $G__65100$jscomp$inline_3987_JSCompiler_inline_result$jscomp$3926_name$jscomp$199$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($JSCompiler_temp_const$jscomp$3925_map__64994_map__64994__$1$$, 
                          $APP.$cljs$cst$191$name$$);
                          $JSCompiler_temp_const$jscomp$3925_map__64994_map__64994__$1$$ = $b__64933$$;
                          $G__65099$jscomp$inline_3985_G__65118$jscomp$inline_3986_curator$jscomp$1$$ = $APP.$helix$impl$props$merge_obj$$({"visible?":$visible_QMARK_$jscomp$2$$}, $APP.$helix$impl$props$_props$cljs$0core$0IFn$0_invoke$0arity$01$$($G__65099$jscomp$inline_3985_G__65118$jscomp$inline_3986_curator$jscomp$1$$));
                          $G__65099$jscomp$inline_3985_G__65118$jscomp$inline_3986_curator$jscomp$1$$ = {className:"pt-8 sm:pt-12 first:pt-0 first:border-t-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$curators_section$curator_card$$, $G__65099$jscomp$inline_3985_G__65118$jscomp$inline_3986_curator$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$curators_section$curator_card$$, 
                          $G__65099$jscomp$inline_3985_G__65118$jscomp$inline_3986_curator$jscomp$1$$)};
                          $G__65100$jscomp$inline_3987_JSCompiler_inline_result$jscomp$3926_name$jscomp$199$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__65099$jscomp$inline_3985_G__65118$jscomp$inline_3986_curator$jscomp$1$$, $G__65100$jscomp$inline_3987_JSCompiler_inline_result$jscomp$3926_name$jscomp$199$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65099$jscomp$inline_3985_G__65118$jscomp$inline_3986_curator$jscomp$1$$, 
                          $G__65100$jscomp$inline_3987_JSCompiler_inline_result$jscomp$3926_name$jscomp$199$$);
                          $JSCompiler_temp_const$jscomp$3925_map__64994_map__64994__$1$$.add($G__65100$jscomp$inline_3987_JSCompiler_inline_result$jscomp$3926_name$jscomp$199$$);
                          $i__64932$$ += 1;
                        } else {
                          return !0;
                        }
                      }
                    }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__64933$$), $amp$components$sections$curators_section$curators_section_render_$_iter__64930$$($APP.$cljs$core$_chunked_rest$$($s__64931__$2_temp__5823__auto__$jscomp$103$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__64933$$), null);
                  }
                  var $map__65163_map__65163__$1$$ = $APP.$cljs$core$first$$($s__64931__$2_temp__5823__auto__$jscomp$103$$), $curator$$ = $map__65163_map__65163__$1$$ = $APP.$cljs$core$__destructure_map$$($map__65163_map__65163__$1$$), $name$jscomp$198$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__65163_map__65163__$1$$, $APP.$cljs$cst$191$name$$);
                  return $APP.$cljs$core$cons$$(function() {
                    var $G__65179_G__65187$jscomp$inline_3708$$ = $APP.$helix$impl$props$merge_obj$$({"visible?":$visible_QMARK_$jscomp$2$$}, $APP.$helix$impl$props$_props$cljs$0core$0IFn$0_invoke$0arity$01$$($curator$$));
                    $G__65179_G__65187$jscomp$inline_3708$$ = {className:"pt-8 sm:pt-12 first:pt-0 first:border-t-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$curators_section$curator_card$$, $G__65179_G__65187$jscomp$inline_3708$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$curators_section$curator_card$$, $G__65179_G__65187$jscomp$inline_3708$$)};
                    var $G__65180$$ = $name$jscomp$198$$;
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__65179_G__65187$jscomp$inline_3708$$, $G__65180$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65179_G__65187$jscomp$inline_3708$$, $G__65180$$);
                  }(), $amp$components$sections$curators_section$curators_section_render_$_iter__64930$$($APP.$cljs$core$rest$$($s__64931__$2_temp__5823__auto__$jscomp$103$$)));
                }
                return null;
              }
            }, null, null);
          }($amp$components$sections$curators_section$curators$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64926$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64926$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__64913_map__64900_map__64900__$1_props__41634__auto__$jscomp$19_vec__64897_vec__64909$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__64913_map__64900_map__64900__$1_props__41634__auto__$jscomp$19_vec__64897_vec__64909$$);
};
$amp$components$sections$in_minor_keys$pull_quote$$ = function($G__69449_map__69447_map__69447__$1_props__41640__auto__$jscomp$37_vec__69444$$, $maybe_ref__41641__auto__$jscomp$37$$) {
  $G__69449_map__69447_map__69447__$1_props__41640__auto__$jscomp$37_vec__69444$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__69449_map__69447_map__69447__$1_props__41640__auto__$jscomp$37_vec__69444$$), $maybe_ref__41641__auto__$jscomp$37$$], null);
  $G__69449_map__69447_map__69447__$1_props__41640__auto__$jscomp$37_vec__69444$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__69449_map__69447_map__69447__$1_props__41640__auto__$jscomp$37_vec__69444$$, 0, null);
  $G__69449_map__69447_map__69447__$1_props__41640__auto__$jscomp$37_vec__69444$$ = $APP.$cljs$core$__destructure_map$$($G__69449_map__69447_map__69447__$1_props__41640__auto__$jscomp$37_vec__69444$$);
  var $text$jscomp$16$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__69449_map__69447_map__69447__$1_props__41640__auto__$jscomp$37_vec__69444$$, $APP.$cljs$cst$406$text$$), $attribution$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__69449_map__69447_map__69447__$1_props__41640__auto__$jscomp$37_vec__69444$$, $cljs$cst$779$attribution$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__69449_map__69447_map__69447__$1_props__41640__auto__$jscomp$37_vec__69444$$ = function() {
    return {className:"border-l-2 border-white/20 pl-6 my-8", children:[function() {
      var $G__69453$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:$text$jscomp$16$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69453$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69453$$);
    }(), function() {
      var $G__69457$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$amp$styles$label_muted$$]))), children:"— " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($attribution$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__69457$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__69457$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__69449_map__69447_map__69447__$1_props__41640__auto__$jscomp$37_vec__69444$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__69449_map__69447_map__69447__$1_props__41640__auto__$jscomp$37_vec__69444$$);
};
$amp$components$sections$in_minor_keys$curator_card$$ = function($G__69468_map__69466_map__69466__$1_props__41640__auto__$jscomp$38_vec__69463$$, $maybe_ref__41641__auto__$jscomp$38$$) {
  $G__69468_map__69466_map__69466__$1_props__41640__auto__$jscomp$38_vec__69463$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__69468_map__69466_map__69466__$1_props__41640__auto__$jscomp$38_vec__69463$$), $maybe_ref__41641__auto__$jscomp$38$$], null);
  $G__69468_map__69466_map__69466__$1_props__41640__auto__$jscomp$38_vec__69463$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__69468_map__69466_map__69466__$1_props__41640__auto__$jscomp$38_vec__69463$$, 0, null);
  $G__69468_map__69466_map__69466__$1_props__41640__auto__$jscomp$38_vec__69463$$ = $APP.$cljs$core$__destructure_map$$($G__69468_map__69466_map__69466__$1_props__41640__auto__$jscomp$38_vec__69463$$);
  var $visible_QMARK_$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__69468_map__69466_map__69466__$1_props__41640__auto__$jscomp$38_vec__69463$$, $cljs$cst$778$visible_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $tag_style$jscomp$2$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$753$boxDecorationBreak$$, "clone", $cljs$cst$754$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__69468_map__69466_map__69466__$1_props__41640__auto__$jscomp$38_vec__69463$$ = function() {
    return {className:"sm:flex sm:gap-8 sm:items-start mb-10", children:[function() {
      var $G__69472_G__69476$jscomp$inline_3711$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/koyo.png", fit:"crop", "aspect-ratio":1, "active?":$visible_QMARK_$jscomp$3$$};
      $G__69472_G__69476$jscomp$inline_3711$$ = {className:"float-left mr-4 mb-2 sm:float-none sm:mr-0 sm:mb-0\n               w-24 aspect-square sm:w-40\n               flex-shrink-0 rounded-sm overflow-hidden", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__69472_G__69476$jscomp$inline_3711$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, 
      $G__69472_G__69476$jscomp$inline_3711$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__69472_G__69476$jscomp$inline_3711$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__69472_G__69476$jscomp$inline_3711$$);
    }(), function() {
      var $G__69480$$ = function() {
        return {className:"sm:flex-1 sm:min-w-0", children:[function() {
          var $G__69484_G__69488$jscomp$inline_3714$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-2 py-0.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$jscomp$2$$), children:"Koyo Kouoh"};
          $G__69484_G__69488$jscomp$inline_3714$$ = {className:"font-display font-bold uppercase tracking-wider\n                    text-lg sm:text-xl text-white dark:text-white mb-1 leading-relaxed", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__69484_G__69488$jscomp$inline_3714$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__69484_G__69488$jscomp$inline_3714$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69484_G__69488$jscomp$inline_3714$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69484_G__69488$jscomp$inline_3714$$);
        }(), function() {
          var $G__69492$$ = {className:"font-display font-medium text-xs uppercase tracking-[0.2em]\n                    text-amber-600 dark:text-amber-300/70 mb-3", children:"Curator, 61st Biennale Arte"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69492$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69492$$);
        }(), function() {
          var $G__69496$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$]))), children:"The curatorial statement for the 61st International Art Exhibition — La Biennale di Venezia — invites us to listen to the minor keys: the quiet tones, the lower frequencies, the persistent signals of earth and life."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69496$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69496$$);
        }(), function() {
          var $G__69500$$ = {className:"clear-both sm:hidden"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__69500$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__69500$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__69480$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__69480$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__69468_map__69466_map__69466__$1_props__41640__auto__$jscomp$38_vec__69463$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__69468_map__69466_map__69466__$1_props__41640__auto__$jscomp$38_vec__69463$$);
};
$amp$components$sections$in_minor_keys$preview$$ = function($G__69513_props__41640__auto__$jscomp$39_vec__69509$$) {
  $APP.$helix$core$extract_cljs_props$$($G__69513_props__41640__auto__$jscomp$39_vec__69509$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$18$$ = $APP.$helix$hooks$use_ref$$("imk-preview-ref");
  $G__69513_props__41640__auto__$jscomp$39_vec__69509$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$18$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$451$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__69513_props__41640__auto__$jscomp$39_vec__69509$$, 0, null);
  var $visible_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__69513_props__41640__auto__$jscomp$39_vec__69509$$, 1, null);
  $G__69513_props__41640__auto__$jscomp$39_vec__69509$$ = function() {
    return {className:"px-4", ref:$ref$jscomp$18$$, children:[function() {
      var $G__69517$$ = {"visible?":$visible_QMARK_$jscomp$4$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$curator_card$$, $G__69517$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$curator_card$$, $G__69517$$);
    }(), function() {
      var $G__69521$$ = function() {
        return {className:"text-center my-10 space-y-1", children:[function() {
          var $G__69525$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Take a deep breath]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69525$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69525$$);
        }(), function() {
          var $G__69529$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Exhale]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69529$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69529$$);
        }(), function() {
          var $G__69533$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Drop your shoulders]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69533$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69533$$);
        }(), function() {
          var $G__69537$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Close your eyes]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69537$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69537$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__69521$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__69521$$);
    }(), function() {
      var $G__69541$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-6"]))), children:"This is an invitation to encounter these words in the immediate physical, meteorological, ambient, and karmic conditions in which they meet you. To shift to a slower gear and tune in to the frequencies of the minor keys. Because, though often lost in the anxious cacophony of the present chaos raging through the world, the music continues. The songs of those producing beauty in spite of tragedy, the tunes of the fugitives recovering from the ruins, the harmonies of those repairing wounds and worlds."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69541$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69541$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__69513_props__41640__auto__$jscomp$39_vec__69509$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__69513_props__41640__auto__$jscomp$39_vec__69509$$);
};
$amp$components$sections$in_minor_keys$details$$ = function($G__69554_props__41640__auto__$jscomp$40_vec__69550$$) {
  $APP.$helix$core$extract_cljs_props$$($G__69554_props__41640__auto__$jscomp$40_vec__69550$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$19$$ = $APP.$helix$hooks$use_ref$$("imk-details-ref");
  $G__69554_props__41640__auto__$jscomp$40_vec__69550$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$19$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$451$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__69554_props__41640__auto__$jscomp$40_vec__69550$$, 0, null);
  var $visible_QMARK_$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__69554_props__41640__auto__$jscomp$40_vec__69550$$, 1, null);
  $G__69554_props__41640__auto__$jscomp$40_vec__69550$$ = function() {
    return {className:"px-4", ref:$ref$jscomp$19$$, children:[function() {
      var $G__69558$$ = {"visible?":$visible_QMARK_$jscomp$5$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$curator_card$$, $G__69558$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$curator_card$$, $G__69558$$);
    }(), function() {
      var $G__69562$$ = function() {
        return {className:"text-center my-10 space-y-1", children:[function() {
          var $G__69566$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Take a deep breath]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69566$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69566$$);
        }(), function() {
          var $G__69570$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Exhale]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69570$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69570$$);
        }(), function() {
          var $G__69574$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Drop your shoulders]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69574$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69574$$);
        }(), function() {
          var $G__69578$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Close your eyes]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69578$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69578$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__69562$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__69562$$);
    }(), function() {
      var $G__69582$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-6"]))), children:"This is an invitation to encounter these words in the immediate physical, meteorological, ambient, and karmic conditions in which they meet you. To shift to a slower gear and tune in to the frequencies of the minor keys. Because, though often lost in the anxious cacophony of the present chaos raging through the world, the music continues. The songs of those producing beauty in spite of tragedy, the tunes of the fugitives recovering from the ruins, the harmonies of those repairing wounds and worlds."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69582$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69582$$);
    }(), function() {
      var $G__69586$$ = {text:"There is a reason, after all, that some people wish to colonize the moon, and others dance before it as an ancient friend.", attribution:"James Baldwin, 1972"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$pull_quote$$, $G__69586$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$pull_quote$$, $G__69586$$);
    }(), function() {
      var $G__69590$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The minor key, in music, alludes both to the structure of a song and to its emotional effects. It is a rich idea, so rich that it quickly overflows its technical definition and spills with metaphor. It summons moods, the blues, the call-and-response, the morna, the second line, the lament, the allegory, the whisper."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69590$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69590$$);
    }(), function() {
      var $G__69594$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The minor keys refuse orchestral bombast and goose-step military marches and come alive in the quiet tones, the lower frequencies, the hums, the consolations of poetry, all portals of improvisation to the elsewhere and the otherwise. The minor keys ask for listening that calls on the emotions and sustains them in return."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69594$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69594$$);
    }(), function() {
      var $G__69598$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The minor keys are also the small islands, worlds amid oceans with distinct and endlessly rich ecosystems, social lives that are articulated, for better and worse, within much larger political forms and ecological stakes. Here, the evocation of the key and the island extends to an archipelago of oases: gardens, courtyards, compounds, lofts, dance floors — the other worlds that artists make, the intimate and convivial universes that refresh and sustain even in terrible times; indeed, especially in terrible times."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69598$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69598$$);
    }(), function() {
      var $G__69602$$ = {text:"Look at the creole garden, you put all species on such a little lick of land: avocados, lemons, yams, sugarcanes… plus thirty or forty other species on this bit of land that doesn’t go more than fifty feet up the side of the hill, they protect each other. In the great Circle, everything is in everything else.", attribution:"Édouard Glissant, 1993"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$pull_quote$$, $G__69602$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$pull_quote$$, $G__69602$$);
    }(), function() {
      var $G__69606$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"These are the cues for an exhibition; an exhibition tuned in to the minor keys; an exhibition that invites listening to the persistent signals of earth and life, connecting to soul frequencies. If, in music, the minor keys are often associated with strangeness, melancholy and sorrow, here their joy, solace, hope, and transcendence manifest as well."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69606$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69606$$);
    }(), function() {
      var $G__69610$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"In the minor keys, sound and sensation are grounding, they hold the cadences, melodies, and silences of resonant worlds that gather and create together a polyphonous assembly of art, convening and communing in convivial collectivity, beaming across the void of alienation and the crackle of conflict."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69610$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69610$$);
    }(), function() {
      var $G__69614$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The 61st edition of the Biennale Arte is grounded in a deep belief in artists as the vital interpreters of the social and psychic condition and catalysts of new relations and possibilities."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69614$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69614$$);
    }(), function() {
      var $G__69618$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The exhibition’s composition is formed by artistic practices that open portals, that refresh and nourish, that prompt relation and relationship, that advance concept and form through networks and schools — understood freely and informally."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69618$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69618$$);
    }(), function() {
      var $G__69622$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The intended effect scrambles cohesion and dissonance in the manner of a free-jazz ensemble, or perhaps, at the scale of the Biennale Arte, a festival of ensembles with a common premise: that poetics liberate and people make beauty together."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69622$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69622$$);
    }(), function() {
      var $G__69626$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Through relation, sharing, and transcendence, the artists and practices that operate in this spirit, like jazz, across methods, scales, senses and forms, propose to visitors an exhibitional experience that is more sensory than didactic, renewing rather than exhausting, and fortifying for the work ahead."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69626$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69626$$);
    }(), function() {
      var $G__69630$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Through a visual and meditative procession, the exhibition prompts all senses to interconnect and meander from one universe to the other, rendering visible the possibilities that reside in the in-between spaces and beyond the portals."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69630$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69630$$);
    }(), function() {
      var $G__69634$$ = {text:"…there is no choice but to tune in like jazzmen to these imperative mutations. The jazzman constantly meditates on the unpredictable, stands within it according to the laws of polyrhythm, and improvises breathtaking moments. We small-island Caribbeans are not ready, but we have this resource. The change will have to be so profound that we will no doubt have to add to the knowledge of jazz, the old totemisms, animisms, analogisms, and other metaphysics too summarily discarded. These old-world poems are already precious scores.", 
      attribution:"Patrick Chamoiseau, 2023"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$pull_quote$$, $G__69634$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$pull_quote$$, $G__69634$$);
    }(), function() {
      var $G__69638$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"In this spirit, the international exhibition of the 61st Biennale Arte intends neither a litany of commentary on world events, nor an inattention or escape from compounding and continuous intersecting crises. Rather, it proposes a radical reconnection with art’s natural habitat and role in society: that is the emotional, the visual, the sensory, the affective, the subjective."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69638$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69638$$);
    }(), function() {
      var $G__69642$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"In Minor Keys are sequences of exhilarating journeys that address the sensate and the affective, inviting visitors to marvel, meditate, dream, revel, reflect, and commune in realms where time is not corporate property nor at the mercy of relentlessly accelerated productivity."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69642$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69642$$);
    }(), function() {
      var $G__69646$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"After all, it is clear by now that the enduring time of capital and empire maligned local, Indigenous and terrestrial knowledges as chimeric, and dismissed co-constitutive artistic practices as artisanal, intended for decoration or devotional rituals."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69646$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69646$$);
    }(), function() {
      var $G__69650$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The ‘civilizing mission’ flattens all with condescending contempt, and in the contemporary era entire societies and ecologies are regarded as collateral damage in the headstrong pursuit of growth supported by ruthlessness and greed. In refusing the spectacle of horror, the time has come to listen to the minor keys, to tune in sotto voce to the whispers, to the lower frequencies; to find the oases, the islands, where the dignity of all living beings is safeguarded."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69650$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69650$$);
    }(), function() {
      var $G__69654$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The exhibition posits that such radical shifts are taking place — indeed, have been underway all along — in the minor keys, and the artists, poets, performers, and filmmakers whom the exhibition will convene are grounded in their commitments to realizing them. Artists are channels to and between the minor keys and listening to, rather than speaking for them is at the core of the curatorial conceit."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69654$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69654$$);
    }(), function() {
      var $G__69658$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The exhibition In Minor Keys stands as a collective score composed together with artists who have built universes of imagination. Artists who work at the boundaries of form, and whose practices can be thought of as intricate melodies to be heard both collectively and on their own terms. These are artists whose practices seamlessly bleed into society."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69658$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69658$$);
    }(), function() {
      var $G__69662$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Artists who accommodate daily life as part of a logical and aesthetically consistent relation of parts. Artists who are exceedingly generous and hospitable to life."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69662$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__69662$$);
    }(), function() {
      var $G__69666$$ = {text:"In our myths, in our songs, that’s where the seeds are. It is not possible to constantly hone on the crisis. You have to have the love and you have to have the magic, that’s also life.", attribution:"Toni Morrison, 1977"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$pull_quote$$, $G__69666$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$pull_quote$$, $G__69666$$);
    }(), function() {
      var $G__69670$$ = function() {
        return {className:"mt-12 mb-6 border-t border-white/10 pt-10", children:[function() {
          var $G__69674$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "mb-6"]))), children:"The Studio — In Minor Keys"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__69674$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__69674$$);
        }(), function() {
          var $G__69678_JSCompiler_temp_const$jscomp$inline_3716$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
          var $G__69682$jscomp$inline_3718_JSCompiler_inline_result$jscomp$inline_3717$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
          $G__69682$jscomp$inline_3718_JSCompiler_inline_result$jscomp$inline_3717$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__69682$jscomp$inline_3718_JSCompiler_inline_result$jscomp$inline_3717$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__69682$jscomp$inline_3718_JSCompiler_inline_result$jscomp$inline_3717$$);
          $G__69678_JSCompiler_temp_const$jscomp$inline_3716$$ = {className:$G__69678_JSCompiler_temp_const$jscomp$inline_3716$$, children:["Zadik Zadikian’s ", $G__69682$jscomp$inline_3718_JSCompiler_inline_result$jscomp$inline_3717$$, " is a practice tuned precisely to these frequencies. In a pavilion where the brick — the most elementary building unit, unchanged for eleven millennia — is cast, stacked, disassembled, and reassembled over six months, simplicity becomes the method and the meaning."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69678_JSCompiler_temp_const$jscomp$inline_3716$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__69678_JSCompiler_temp_const$jscomp$inline_3716$$);
        }(), function() {
          var $G__69686$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__69690$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Doing the work."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__69690$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__69690$$);
            }(), " The minor keys ask for sustained attention, not spectacle. In ", function() {
              var $G__69694$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__69694$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__69694$$);
            }(), ", the act of making is neither performed nor concealed. Plaster is mixed, forms are poured, bricks emerge. Day after day, the labor itself is the statement — a refusal of the accelerated and the disposable in favor of the deliberate and the enduring."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69686$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__69686$$);
        }(), function() {
          var $G__69698$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__69702$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Making simple things."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__69702$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__69702$$);
            }(), " Each brick is humble. It carries no narrative, bears no symbol. Like the creole garden where thirty species protect each other on a lick of land, the individual unit is modest. Its power lives not in what it represents but in what it ", function() {
              var $G__69706$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"is"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__69706$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__69706$$);
            }(), " — material presence, weight, color, surface."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69698$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__69698$$);
        }(), function() {
          var $G__69710_JSCompiler_temp_const$jscomp$inline_3720$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
          var $G__69714$jscomp$inline_3722_JSCompiler_inline_result$jscomp$inline_3721$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Higher-order structures from simplicity."};
          $G__69714$jscomp$inline_3722_JSCompiler_inline_result$jscomp$inline_3721$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__69714$jscomp$inline_3722_JSCompiler_inline_result$jscomp$inline_3721$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__69714$jscomp$inline_3722_JSCompiler_inline_result$jscomp$inline_3721$$);
          $G__69710_JSCompiler_temp_const$jscomp$inline_3720$$ = {className:$G__69710_JSCompiler_temp_const$jscomp$inline_3720$$, children:[$G__69714$jscomp$inline_3722_JSCompiler_inline_result$jscomp$inline_3721$$, " When stacked, these bricks become something else entirely. Composite forms emerge — not designed from above but discovered through assembly. The whole exceeds its parts, not through complexity of component, but through the patient, improvisational logic of combination. Like polyrhythm in jazz, coherence arises from the interplay of simple, repeating elements."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69710_JSCompiler_temp_const$jscomp$inline_3720$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__69710_JSCompiler_temp_const$jscomp$inline_3720$$);
        }(), function() {
          var $G__69718_JSCompiler_temp_const$jscomp$inline_3724$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
          var $G__69722$jscomp$inline_3726_JSCompiler_inline_result$jscomp$inline_3725$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Simplicity is not ease."};
          $G__69722$jscomp$inline_3726_JSCompiler_inline_result$jscomp$inline_3725$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__69722$jscomp$inline_3726_JSCompiler_inline_result$jscomp$inline_3725$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__69722$jscomp$inline_3726_JSCompiler_inline_result$jscomp$inline_3725$$);
          $G__69718_JSCompiler_temp_const$jscomp$inline_3724$$ = {className:$G__69718_JSCompiler_temp_const$jscomp$inline_3724$$, children:[$G__69722$jscomp$inline_3726_JSCompiler_inline_result$jscomp$inline_3725$$, " To cast a perfect brick, to find the right pigment, to know which form belongs beside another — this is the discipline beneath the quiet surface. The minor keys sound gentle, but they demand the deepest listening. The studio is where that discipline lives: not in reaching for the obvious, but in reaching for the precise."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69718_JSCompiler_temp_const$jscomp$inline_3724$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__69718_JSCompiler_temp_const$jscomp$inline_3724$$);
        }(), function() {
          var $G__69726$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__69730$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Reaching for the right tool."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__69730$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__69730$$);
            }(), " Zadikian does not reach for what is always close at hand. He reaches for what is right. The plaster, the mold, the trowel — each chosen not for convenience but for fidelity to the form. In this way, ", function() {
              var $G__69734$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__69734$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__69734$$);
            }(), " enacts the curatorial premise of In Minor Keys: that beauty is made together, through relation, through the handmade, through the refusal to shortcut the work that matters."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__69726$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__69726$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__69670$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__69670$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__69554_props__41640__auto__$jscomp$40_vec__69550$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__69554_props__41640__auto__$jscomp$40_vec__69550$$);
};
$amp$components$sections$in_minor_keys$in_minor_keys$$ = function($G__69745_id$jscomp$83_map__69743_props__41640__auto__$jscomp$41_vec__69740$$, $G__69749$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3728_idx$jscomp$71_maybe_ref__41641__auto__$jscomp$41$$) {
  $G__69745_id$jscomp$83_map__69743_props__41640__auto__$jscomp$41_vec__69740$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__69745_id$jscomp$83_map__69743_props__41640__auto__$jscomp$41_vec__69740$$), $G__69749$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3728_idx$jscomp$71_maybe_ref__41641__auto__$jscomp$41$$], null);
  $G__69745_id$jscomp$83_map__69743_props__41640__auto__$jscomp$41_vec__69740$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__69745_id$jscomp$83_map__69743_props__41640__auto__$jscomp$41_vec__69740$$, 0, null);
  var $map__69743__$1_title$jscomp$23$$ = $APP.$cljs$core$__destructure_map$$($G__69745_id$jscomp$83_map__69743_props__41640__auto__$jscomp$41_vec__69740$$);
  $G__69745_id$jscomp$83_map__69743_props__41640__auto__$jscomp$41_vec__69740$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__69743__$1_title$jscomp$23$$, $APP.$cljs$cst$200$id$$);
  $G__69749$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3728_idx$jscomp$71_maybe_ref__41641__auto__$jscomp$41$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__69743__$1_title$jscomp$23$$, $APP.$cljs$cst$443$idx$$);
  var $subtitle$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__69743__$1_title$jscomp$23$$, $APP.$cljs$cst$727$subtitle$$);
  $map__69743__$1_title$jscomp$23$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__69743__$1_title$jscomp$23$$, $APP.$cljs$cst$381$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__69749$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3728_idx$jscomp$71_maybe_ref__41641__auto__$jscomp$41$$ = {idx:$G__69749$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3728_idx$jscomp$71_maybe_ref__41641__auto__$jscomp$41$$, "section-hint":$subtitle$jscomp$2$$, title:$map__69743__$1_title$jscomp$23$$, "expand-button-label":"Read full statement", "preview-text":$amp$components$sections$in_minor_keys$preview$$, "full-text":$amp$components$sections$in_minor_keys$details$$};
  $G__69749$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3728_idx$jscomp$71_maybe_ref__41641__auto__$jscomp$41$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__69749$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3728_idx$jscomp$71_maybe_ref__41641__auto__$jscomp$41$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$elements$expandable_text_area$expandable_text_area_2$$, 
  $G__69749$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3728_idx$jscomp$71_maybe_ref__41641__auto__$jscomp$41$$);
  $G__69745_id$jscomp$83_map__69743_props__41640__auto__$jscomp$41_vec__69740$$ = {id:$G__69745_id$jscomp$83_map__69743_props__41640__auto__$jscomp$41_vec__69740$$, children:$G__69749$jscomp$inline_3729_JSCompiler_inline_result$jscomp$inline_3728_idx$jscomp$71_maybe_ref__41641__auto__$jscomp$41$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__69745_id$jscomp$83_map__69743_props__41640__auto__$jscomp$41_vec__69740$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__69745_id$jscomp$83_map__69743_props__41640__auto__$jscomp$41_vec__69740$$);
};
$amp$components$sections$location_section$preview$$ = function($G__66760_map__66754_props__41640__auto__$jscomp$42_vec__66751$$, $maybe_ref__41641__auto__$jscomp$42$$) {
  $G__66760_map__66754_props__41640__auto__$jscomp$42_vec__66751$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__66760_map__66754_props__41640__auto__$jscomp$42_vec__66751$$), $maybe_ref__41641__auto__$jscomp$42$$], null);
  $G__66760_map__66754_props__41640__auto__$jscomp$42_vec__66751$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66760_map__66754_props__41640__auto__$jscomp$42_vec__66751$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__66760_map__66754_props__41640__auto__$jscomp$42_vec__66751$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__66760_map__66754_props__41640__auto__$jscomp$42_vec__66751$$ = function() {
    return {className:"px-4", children:function() {
      var $G__66769$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-6"]))), children:["The Armenia Pavilion 2026 is located across ", function() {
          var $G__66781$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"two sites"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66781$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66781$$);
        }(), " within the historic ", function() {
          var $G__66796$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Arsenale of Venice"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66796$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66796$$);
        }(), "—a grand interior studio and a prominent exterior crossing. ", "Together they form a single spatial constellation: ", function() {
          var $G__66808$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"a place for study, for work, to create, share and exhibit"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66808$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66808$$);
        }(), "."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66769$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__66769$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66760_map__66754_props__41640__auto__$jscomp$42_vec__66751$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66760_map__66754_props__41640__auto__$jscomp$42_vec__66751$$);
};
$amp$components$sections$location_section$details$$ = function($G__67252_map__67245_props__41640__auto__$jscomp$43_vec__67242$$, $maybe_ref__41641__auto__$jscomp$43$$) {
  $G__67252_map__67245_props__41640__auto__$jscomp$43_vec__67242$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__67252_map__67245_props__41640__auto__$jscomp$43_vec__67242$$), $maybe_ref__41641__auto__$jscomp$43$$], null);
  $G__67252_map__67245_props__41640__auto__$jscomp$43_vec__67242$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67252_map__67245_props__41640__auto__$jscomp$43_vec__67242$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__67252_map__67245_props__41640__auto__$jscomp$43_vec__67242$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $is_desktop_QMARK_$jscomp$3$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__67252_map__67245_props__41640__auto__$jscomp$43_vec__67242$$ = function() {
    return {className:"space-y-8", children:[function() {
      var $G__67260$$ = function() {
        return {className:"px-4", children:function() {
          var $G__67266$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-6"]))), children:["The Armenia Pavilion 2026 is located across ", function() {
              var $G__67275$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"two sites"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67275$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67275$$);
            }(), " within the historic ", function() {
              var $G__67279$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Arsenale of Venice"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67279$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67279$$);
            }(), "—a grand interior studio and a prominent exterior crossing. ", "Together they form a single spatial constellation: ", function() {
              var $G__67288$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"a place for study, for work, to create, share and exhibit"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67288$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67288$$);
            }(), "."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67266$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67266$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67260$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67260$$);
    }(), function() {
      var $G__67300$$ = function() {
        return {className:"my-8", children:[function() {
          var $G__67308$$ = {dev:!1, "interactive?":$is_desktop_QMARK_$jscomp$3$$, "initial-view":new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$734$longitude$$, 12.349872, $APP.$cljs$cst$735$latitude$$, 45.436114, $APP.$cljs$cst$736$zoom$$, 16.2], null), "ant-paths":new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 7, [$APP.$cljs$cst$742$source_id$$, "directions-ant", $APP.$cljs$cst$741$url$$, 
          "/data/biennale_data.geojson", $APP.$cljs$cst$740$filter$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["\x3d\x3d", new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["geometry-type"], null), "LineString"], null), $APP.$cljs$cst$413$color$$, "#c7630b", $APP.$cljs$cst$418$width$$, 4, $APP.$cljs$cst$414$bg_opacity$$, 0.2, $APP.$cljs$cst$439$duration$$, 2], null)], null), layers:new $APP.$cljs$core$PersistentVector$$(null, 
          5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$127$source$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$200$id$$, "biennale", $APP.$cljs$cst$741$url$$, "/data/biennale_data.geojson"], null), $APP.$cljs$cst$737$layer$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, "biennale-fill", $APP.$cljs$cst$25$type$$, "fill", $APP.$cljs$cst$740$filter$$, new $APP.$cljs$core$PersistentVector$$(null, 
          3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["\x3d\x3d", new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["geometry-type"], null), "Polygon"], null), $APP.$cljs$cst$738$paint$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$780$fill_color$$, "#b91c1c", $APP.$cljs$cst$781$fill_opacity$$, 0.5], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$127$source$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
          2, [$APP.$cljs$cst$200$id$$, "biennale-start", $APP.$cljs$cst$741$url$$, "/data/biennale_data.geojson"], null), $APP.$cljs$cst$737$layer$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, "directions-start", $APP.$cljs$cst$25$type$$, "circle", $APP.$cljs$cst$740$filter$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["\x3d\x3d", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
          ["get", "marker"], null), "start"], null), $APP.$cljs$cst$738$paint$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$782$circle_radius$$, 6, $APP.$cljs$cst$783$circle_color$$, "#0c0cd0", $APP.$cljs$cst$784$circle_stroke_width$$, 2, $APP.$cljs$cst$785$circle_stroke_color$$, "#ffffff"], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$127$source$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$200$id$$, "biennale-end", 
          $APP.$cljs$cst$741$url$$, "/data/biennale_data.geojson"], null), $APP.$cljs$cst$737$layer$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, "directions-end", $APP.$cljs$cst$25$type$$, "circle", $APP.$cljs$cst$740$filter$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["\x3d\x3d", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["get", "marker"], null), "end"], 
          null), $APP.$cljs$cst$738$paint$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$782$circle_radius$$, 6, $APP.$cljs$cst$783$circle_color$$, "#ef4444", $APP.$cljs$cst$784$circle_stroke_width$$, 2, $APP.$cljs$cst$785$circle_stroke_color$$, "#ffffff"], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$127$source$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$200$id$$, "biennale-points", $APP.$cljs$cst$741$url$$, 
          "/data/biennale_data.geojson"], null), $APP.$cljs$cst$737$layer$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, "biennale-point", $APP.$cljs$cst$25$type$$, "circle", $APP.$cljs$cst$740$filter$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["all", new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["\x3d\x3d", new $APP.$cljs$core$PersistentVector$$(null, 1, 
          5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["geometry-type"], null), "Point"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["!", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["has", "marker"], null)], null)], null), $APP.$cljs$cst$738$paint$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$782$circle_radius$$, 8, $APP.$cljs$cst$783$circle_color$$, "#b91c1c", 
          $APP.$cljs$cst$784$circle_stroke_width$$, 2, $APP.$cljs$cst$785$circle_stroke_color$$, "#ffffff"], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$127$source$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$200$id$$, "biennale-labels", $APP.$cljs$cst$741$url$$, "/data/biennale_data.geojson"], null), $APP.$cljs$cst$737$layer$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$200$id$$, "biennale-label", $APP.$cljs$cst$25$type$$, 
          "symbol", $APP.$cljs$cst$740$filter$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["all", new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["\x3d\x3d", new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["geometry-type"], null), "Point"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
          ["!", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["has", "marker"], null)], null)], null), $APP.$cljs$cst$739$layout$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$786$text_field$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["get", "label"], null), $APP.$cljs$cst$787$text_font$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
          ["Source Code Pro Semibold"], null), $APP.$cljs$cst$788$text_size$$, 14, $APP.$cljs$cst$789$text_offset$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [0, -1.5], null), $APP.$cljs$cst$790$text_anchor$$, "bottom", $APP.$cljs$cst$791$text_allow_overlap$$, !0], null), $APP.$cljs$cst$738$paint$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$792$text_color$$, "#be136e", $APP.$cljs$cst$793$text_halo_color$$, "#ffffff", 
          $APP.$cljs$cst$794$text_halo_width$$, 5], null)], null)], null)], null)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$maps$mapbox_map$mapbox_map$$, $G__67308$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$maps$mapbox_map$mapbox_map$$, $G__67308$$);
        }(), function() {
          var $G__67348$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "italic", "mt-4 px-4"]))), children:"* Walking path from the crossing to the pavilion — approximately 8 minutes"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67348$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67348$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67300$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67300$$);
    }(), function() {
      var $G__67368$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-xl", "p-4"]))), children:[function() {
          var $G__67378$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "pb-4"]))), children:"TESA 41"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67378$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67378$$);
        }(), function() {
          var $G__67394$$ = function() {
            return {className:"space-y-6", children:[function() {
              var $G__67400$$ = function() {
                return {children:[function() {
                  var $G__67408$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Tesa 41"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67408$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67408$$);
                }(), " is the primary studio and exhibition space for the Armenia Pavilion—", function() {
                  var $G__67423$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"5,000 square feet"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67423$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67423$$);
                }(), " of expansive industrial volume within the Arsenale that functions as the ", function() {
                  var $G__67431$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"operational and conceptual heart"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67431$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67431$$);
                }(), " of the project."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67400$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67400$$);
            }(), function() {
              var $G__67440$$ = function() {
                return {children:["Defined by scale, clarity, and architectural restraint, the space is built for sustained ", function() {
                  var $G__67446$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"fabrication"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67446$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67446$$);
                }(), ", ", function() {
                  var $G__67454$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"assembly"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67454$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67454$$);
                }(), ", and ", function() {
                  var $G__67462$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"reconfiguration"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67462$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67462$$);
                }(), " across the full duration of the Biennale."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67440$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67440$$);
            }(), function() {
              var $G__67470$$ = function() {
                return {children:["Here, the Pavilion operates as a ", function() {
                  var $G__67478$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"working studio"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67478$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67478$$);
                }(), " rather than a static exhibition—a place of continuous ", function() {
                  var $G__67484$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"making"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67484$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67484$$);
                }(), ", ", function() {
                  var $G__67494$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"stacking"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67494$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67494$$);
                }(), ", ", function() {
                  var $G__67502$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"dismantling"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67502$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67502$$);
                }(), ", and ", function() {
                  var $G__67510$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"rebuilding"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67510$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67510$$);
                }(), ". The interior volume allows the work to expand ", function() {
                  var $G__67518$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"horizontally"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67518$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67518$$);
                }(), " and ", function() {
                  var $G__67522$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"vertically"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67522$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67522$$);
                }(), ", accommodating both monumental arrangements and intimate moments of material attention."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67470$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67470$$);
            }(), function() {
              var $G__67534$$ = function() {
                return {children:[function() {
                  var $G__67538$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Tesa 41"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67538$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67538$$);
                }(), " anchors the Pavilion physically and philosophically—establishing ", function() {
                  var $G__67546$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"the studio as the artwork itself"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67546$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67546$$);
                }(), "."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67534$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67534$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67394$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67394$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67368$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67368$$);
    }(), function() {
      var $G__67558$$ = function() {
        return {className:"w-full flex flex-col gap-4 mt-4", children:function() {
          var $ref$jscomp$20$$ = $APP.$helix$hooks$use_ref$$("loc-tesa-ref"), $G__67569_vec__67565$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$$($ref$jscomp$20$$);
          $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67569_vec__67565$$, 0, null);
          var $is_visible_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67569_vec__67565$$, 1, null);
          $G__67569_vec__67565$$ = function() {
            return {className:"flex flex-col gap-4", ref:$ref$jscomp$20$$, children:[function() {
              var $G__67573_G__67578$jscomp$inline_3732$$ = {"playback-id":"KaA1Jf2AusJZ966KPeZrdwJ5S53kboLO4E4fGLrgTLk", "aspect-ratio":1.77, "should-play?":$is_visible_QMARK_$jscomp$4$$, "allow-audio?":!1};
              $G__67573_G__67578$jscomp$inline_3732$$ = {className:"w-full aspect-[16/9]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$location_section$lazy_video$$, $G__67573_G__67578$jscomp$inline_3732$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$location_section$lazy_video$$, $G__67573_G__67578$jscomp$inline_3732$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67573_G__67578$jscomp$inline_3732$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67573_G__67578$jscomp$inline_3732$$);
            }(), function() {
              var $G__67582$$ = {"enabled?":$is_visible_QMARK_$jscomp$4$$, slides:new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2011.12.05.tif", $APP.$cljs$cst$726$aspect_ratio$$, 1.34, $APP.$cljs$cst$714$active_QMARK_$$, !0], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
              3, [$APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.08.tif", $APP.$cljs$cst$726$aspect_ratio$$, 1.34, $APP.$cljs$cst$714$active_QMARK_$$, !0], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.18.tif", $APP.$cljs$cst$726$aspect_ratio$$, 1.34, $APP.$cljs$cst$714$active_QMARK_$$, 
              !0], null)], null)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_gallery$lazy_image_gallery$$, $G__67582$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_gallery$lazy_image_gallery$$, $G__67582$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67569_vec__67565$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67569_vec__67565$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67558$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67558$$);
    }(), function() {
      var $G__67586$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-xl", "mt-12 p-4"]))), children:[function() {
          var $G__67590$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "pb-4"]))), children:"CROSSING TO THE ARSENALE"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67590$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67590$$);
        }(), function() {
          var $G__67594$$ = function() {
            return {className:"space-y-6", children:[function() {
              var $G__67598$$ = function() {
                return {children:["The outdoor artwork will be installed at the historic crossing grounds near the ", function() {
                  var $G__67602$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Piraeus Lion"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67602$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67602$$);
                }(), ", one of the most recognized landmarks marking the approach to the Arsenale. ", "Positioned at a critical pedestrian junction, this site receives ", function() {
                  var $G__67606$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"exceptionally high foot traffic"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67606$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67606$$);
                }(), " throughout the six-month exhibition period."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67598$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67598$$);
            }(), function() {
              var $G__67611$$ = function() {
                return {children:["Visitors moving between venues, crossing the bridge into the Arsenale, and navigating the surrounding waterfront naturally converge here. ", "The Armenian Pavilion lies less than a ten-minute walk from this point, making the installation both a ", function() {
                  var $G__67615$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"threshold"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67615$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67615$$);
                }(), " and a ", function() {
                  var $G__67619$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"directional marker"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67619$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67619$$);
                }(), "—an early encounter that orients audiences toward the Pavilion."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67611$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67611$$);
            }(), function() {
              var $G__67623$$ = function() {
                return {children:["As a freestanding, architecturally scaled form, it will command attention without obstructing circulation, functioning simultaneously as ", function() {
                  var $G__67627$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"sculpture"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67627$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67627$$);
                }(), ", ", function() {
                  var $G__67632$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"signal"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67632$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67632$$);
                }(), ", and ", function() {
                  var $G__67640$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"prelude"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67640$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67640$$);
                }(), "."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67623$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67623$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67594$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67594$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67586$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67586$$);
    }(), function() {
      var $G__67650_G__67665$jscomp$inline_4085_ref$jscomp$inline_4083$$ = $APP.$helix$hooks$use_ref$$("loc-crossing-ref");
      var $G__67669$jscomp$inline_4087_JSCompiler_inline_result$jscomp$inline_4086_vec__67657$jscomp$inline_4084$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$$($G__67650_G__67665$jscomp$inline_4085_ref$jscomp$inline_4083$$);
      $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67669$jscomp$inline_4087_JSCompiler_inline_result$jscomp$inline_4086_vec__67657$jscomp$inline_4084$$, 0, null);
      $G__67669$jscomp$inline_4087_JSCompiler_inline_result$jscomp$inline_4086_vec__67657$jscomp$inline_4084$$ = {"enabled?":$APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67669$jscomp$inline_4087_JSCompiler_inline_result$jscomp$inline_4086_vec__67657$jscomp$inline_4084$$, 1, null), slides:new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/big_red_walkway/5.jpg", 
      $APP.$cljs$cst$726$aspect_ratio$$, 1.82, $APP.$cljs$cst$441$caption$$, "Crossing at the Arsenale", $APP.$cljs$cst$442$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/big_red_walkway/1.jpg", $APP.$cljs$cst$726$aspect_ratio$$, 1.82, $APP.$cljs$cst$441$caption$$, "Crossing at the Arsenale", $APP.$cljs$cst$442$credit$$, "Render 2026"], null)], null)};
      $G__67669$jscomp$inline_4087_JSCompiler_inline_result$jscomp$inline_4086_vec__67657$jscomp$inline_4084$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_gallery$lazy_image_gallery$$, $G__67669$jscomp$inline_4087_JSCompiler_inline_result$jscomp$inline_4086_vec__67657$jscomp$inline_4084$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_gallery$lazy_image_gallery$$, 
      $G__67669$jscomp$inline_4087_JSCompiler_inline_result$jscomp$inline_4086_vec__67657$jscomp$inline_4084$$);
      $G__67650_G__67665$jscomp$inline_4085_ref$jscomp$inline_4083$$ = {ref:$G__67650_G__67665$jscomp$inline_4085_ref$jscomp$inline_4083$$, children:$G__67669$jscomp$inline_4087_JSCompiler_inline_result$jscomp$inline_4086_vec__67657$jscomp$inline_4084$$};
      $G__67650_G__67665$jscomp$inline_4085_ref$jscomp$inline_4083$$ = {className:"w-full flex flex-col gap-4 mt-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67650_G__67665$jscomp$inline_4085_ref$jscomp$inline_4083$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67650_G__67665$jscomp$inline_4085_ref$jscomp$inline_4083$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67650_G__67665$jscomp$inline_4085_ref$jscomp$inline_4083$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67650_G__67665$jscomp$inline_4085_ref$jscomp$inline_4083$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67252_map__67245_props__41640__auto__$jscomp$43_vec__67242$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67252_map__67245_props__41640__auto__$jscomp$43_vec__67242$$);
};
$amp$components$sections$location_section$location_section$$ = function($G__67713_id$jscomp$84_map__67703_props__41640__auto__$jscomp$44_vec__67700$$, $G__67721$jscomp$inline_3996_JSCompiler_inline_result$jscomp$inline_3995_map__67703__$1_maybe_ref__41641__auto__$jscomp$44_title$jscomp$24$$) {
  $G__67713_id$jscomp$84_map__67703_props__41640__auto__$jscomp$44_vec__67700$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__67713_id$jscomp$84_map__67703_props__41640__auto__$jscomp$44_vec__67700$$), $G__67721$jscomp$inline_3996_JSCompiler_inline_result$jscomp$inline_3995_map__67703__$1_maybe_ref__41641__auto__$jscomp$44_title$jscomp$24$$], null);
  $G__67713_id$jscomp$84_map__67703_props__41640__auto__$jscomp$44_vec__67700$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67713_id$jscomp$84_map__67703_props__41640__auto__$jscomp$44_vec__67700$$, 0, null);
  $G__67721$jscomp$inline_3996_JSCompiler_inline_result$jscomp$inline_3995_map__67703__$1_maybe_ref__41641__auto__$jscomp$44_title$jscomp$24$$ = $APP.$cljs$core$__destructure_map$$($G__67713_id$jscomp$84_map__67703_props__41640__auto__$jscomp$44_vec__67700$$);
  $G__67713_id$jscomp$84_map__67703_props__41640__auto__$jscomp$44_vec__67700$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__67721$jscomp$inline_3996_JSCompiler_inline_result$jscomp$inline_3995_map__67703__$1_maybe_ref__41641__auto__$jscomp$44_title$jscomp$24$$, $APP.$cljs$cst$200$id$$);
  $G__67721$jscomp$inline_3996_JSCompiler_inline_result$jscomp$inline_3995_map__67703__$1_maybe_ref__41641__auto__$jscomp$44_title$jscomp$24$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__67721$jscomp$inline_3996_JSCompiler_inline_result$jscomp$inline_3995_map__67703__$1_maybe_ref__41641__auto__$jscomp$44_title$jscomp$24$$, $APP.$cljs$cst$381$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__67721$jscomp$inline_3996_JSCompiler_inline_result$jscomp$inline_3995_map__67703__$1_maybe_ref__41641__auto__$jscomp$44_title$jscomp$24$$ = {title:$APP.$cljs$core$truth_$$($G__67721$jscomp$inline_3996_JSCompiler_inline_result$jscomp$inline_3995_map__67703__$1_maybe_ref__41641__auto__$jscomp$44_title$jscomp$24$$) ? $G__67721$jscomp$inline_3996_JSCompiler_inline_result$jscomp$inline_3995_map__67703__$1_maybe_ref__41641__auto__$jscomp$44_title$jscomp$24$$ : "The Venue", "expand-button-label":"Explore the venue", 
  "preview-text":$amp$components$sections$location_section$preview$$, "full-text":$amp$components$sections$location_section$details$$};
  $G__67721$jscomp$inline_3996_JSCompiler_inline_result$jscomp$inline_3995_map__67703__$1_maybe_ref__41641__auto__$jscomp$44_title$jscomp$24$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__67721$jscomp$inline_3996_JSCompiler_inline_result$jscomp$inline_3995_map__67703__$1_maybe_ref__41641__auto__$jscomp$44_title$jscomp$24$$) : $APP.$helix$core$jsx$$.call(null, 
  $APP.$amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__67721$jscomp$inline_3996_JSCompiler_inline_result$jscomp$inline_3995_map__67703__$1_maybe_ref__41641__auto__$jscomp$44_title$jscomp$24$$);
  $G__67713_id$jscomp$84_map__67703_props__41640__auto__$jscomp$44_vec__67700$$ = {id:$G__67713_id$jscomp$84_map__67703_props__41640__auto__$jscomp$44_vec__67700$$, children:$G__67721$jscomp$inline_3996_JSCompiler_inline_result$jscomp$inline_3995_map__67703__$1_maybe_ref__41641__auto__$jscomp$44_title$jscomp$24$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67713_id$jscomp$84_map__67703_props__41640__auto__$jscomp$44_vec__67700$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67713_id$jscomp$84_map__67703_props__41640__auto__$jscomp$44_vec__67700$$);
};
$amp$components$sections$mobile_hero_section$mobile_hero_section$$ = function($G__65266_props__41634__auto__$jscomp$20_vec__65256$$) {
  $APP.$helix$core$extract_cljs_props$$($G__65266_props__41634__auto__$jscomp$20_vec__65256$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$4$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__65266_props__41634__auto__$jscomp$20_vec__65256$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ctx$jscomp$4$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$390$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__65266_props__41634__auto__$jscomp$20_vec__65256$$, 0, null);
  var $is_active_QMARK_$jscomp$8$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__65266_props__41634__auto__$jscomp$20_vec__65256$$, 1, null), $clone_style$jscomp$1$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$753$boxDecorationBreak$$, "clone", $cljs$cst$754$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__65266_props__41634__auto__$jscomp$20_vec__65256$$ = function() {
    return {id:"video", ref:$outer_ctx$jscomp$4$$, className:"relative w-full overflow-hidden", children:function() {
      var $G__65274$jscomp$1$$ = function() {
        return {className:"w-full h-screen relative flex flex-col", children:[function() {
          var $G__65281_G__65289$jscomp$inline_3740$$ = {"allow-audio?":!1, "playback-id":"fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo", "should-play?":$is_active_QMARK_$jscomp$8$$};
          $G__65281_G__65289$jscomp$inline_3740$$ = {className:"absolute inset-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$mobile_hero_section$lazy_video_background$$, $G__65281_G__65289$jscomp$inline_3740$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$mobile_hero_section$lazy_video_background$$, $G__65281_G__65289$jscomp$inline_3740$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65281_G__65289$jscomp$inline_3740$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65281_G__65289$jscomp$inline_3740$$);
        }(), function() {
          var $G__65296$$ = function() {
            return {className:"absolute top-20 right-8 z-10", children:function() {
              var $G__65301$$ = function() {
                return {className:"cursor-pointer w-24 sm:w-28 lg:w-32", onClick:function() {
                  return window.open("https://www.labiennale.org/en/art/2026", "_blank");
                }, children:function() {
                  var $G__65312$$ = {src:"images/graphics/61_biennale_logo_red.svg", className:"opacity-90"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__65312$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__65312$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65301$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65301$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65296$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65296$$);
        }(), function() {
          var $G__65324$$ = function() {
            return {className:"relative z-10 flex-1 flex flex-col items-center justify-center px-8", children:[function() {
              var $G__65332$$ = {className:"w-4/5 sm:w-2/3 max-w-2xl aspect-square mb-10 bg-amber-300 opacity-90", style:{WebkitMaskImage:$APP.$helix$impl$props$__GT_js$$("url(images/graphics/the_studio_logo.svg)"), maskImage:$APP.$helix$impl$props$__GT_js$$("url(images/graphics/the_studio_logo.svg)"), WebkitMaskSize:$APP.$helix$impl$props$__GT_js$$("contain"), maskSize:$APP.$helix$impl$props$__GT_js$$("contain"), WebkitMaskRepeat:$APP.$helix$impl$props$__GT_js$$("no-repeat"), maskRepeat:$APP.$helix$impl$props$__GT_js$$("no-repeat"), 
              WebkitMaskPosition:$APP.$helix$impl$props$__GT_js$$("center"), maskPosition:$APP.$helix$impl$props$__GT_js$$("center")}};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65332$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65332$$);
            }(), function() {
              var $G__65347_G__65353$jscomp$inline_3743$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/50 px-3 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"Armenia Pavilion · 61st International Art Exhibition La Biennale di Venezia"};
              $G__65347_G__65353$jscomp$inline_3743$$ = {className:"font-display text-xs sm:text-sm uppercase tracking-[0.2em] max-w-md text-center leading-loose text-white/90", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65347_G__65353$jscomp$inline_3743$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65347_G__65353$jscomp$inline_3743$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65347_G__65353$jscomp$inline_3743$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__65347_G__65353$jscomp$inline_3743$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65324$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65324$$);
        }(), function() {
          var $G__65365_G__65372$jscomp$inline_3746$$ = {className:"text-lg animate-bounce", children:"↓"};
          $G__65365_G__65372$jscomp$inline_3746$$ = {href:"#press-release", className:"absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-1\n                text-white/80 hover:text-white transition-colors\n                font-display text-xs uppercase tracking-[0.2em]", children:["Learn More", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65365_G__65372$jscomp$inline_3746$$) : $APP.$helix$core$jsx$$.call(null, 
          "span", $G__65365_G__65372$jscomp$inline_3746$$)]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__65365_G__65372$jscomp$inline_3746$$) : $APP.$helix$core$jsxs$$.call(null, "a", $G__65365_G__65372$jscomp$inline_3746$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65274$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65274$jscomp$1$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65266_props__41634__auto__$jscomp$20_vec__65256$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65266_props__41634__auto__$jscomp$20_vec__65256$$);
};
$amp$components$sections$site_footer$site_footer$$ = function($G__64905_map__64901_props__41640__auto__$jscomp$45_vec__64898$$, $maybe_ref__41641__auto__$jscomp$45$$) {
  $G__64905_map__64901_props__41640__auto__$jscomp$45_vec__64898$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64905_map__64901_props__41640__auto__$jscomp$45_vec__64898$$), $maybe_ref__41641__auto__$jscomp$45$$], null);
  $G__64905_map__64901_props__41640__auto__$jscomp$45_vec__64898$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64905_map__64901_props__41640__auto__$jscomp$45_vec__64898$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__64905_map__64901_props__41640__auto__$jscomp$45_vec__64898$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$jscomp$1$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__64905_map__64901_props__41640__auto__$jscomp$45_vec__64898$$ = function() {
    return {className:"relative w-full font-display mt-12", children:[function() {
      var $G__64909$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64909$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64909$$);
    }(), function() {
      var $G__64915_G__64923$jscomp$inline_4090_G__64931$jscomp$inline_4091$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-xl lg:text-2xl italic font-light leading-relaxed", "text-slate-600  dark:text-slate-400"]))), children:"“The way you do anything is the way you do everything.”"};
      $G__64915_G__64923$jscomp$inline_4090_G__64931$jscomp$inline_4091$$ = {className:"max-w-3xl text-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64915_G__64923$jscomp$inline_4090_G__64931$jscomp$inline_4091$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64915_G__64923$jscomp$inline_4090_G__64931$jscomp$inline_4091$$)};
      $G__64915_G__64923$jscomp$inline_4090_G__64931$jscomp$inline_4091$$ = {className:"py-16 lg:py-24 px-6 flex justify-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__64915_G__64923$jscomp$inline_4090_G__64931$jscomp$inline_4091$$) : $APP.$helix$core$jsx$$.call(null, "blockquote", $G__64915_G__64923$jscomp$inline_4090_G__64931$jscomp$inline_4091$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64915_G__64923$jscomp$inline_4090_G__64931$jscomp$inline_4091$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64915_G__64923$jscomp$inline_4090_G__64931$jscomp$inline_4091$$);
    }(), function() {
      var $G__64945$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64945$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__64945$$);
    }(), function() {
      var $G__64957$$ = function() {
        return {className:"py-16 lg:py-20 px-6 max-w-5xl mx-auto", children:[function() {
          var $G__64965$$ = function() {
            return {className:"text-center mb-16", children:[function() {
              var $G__64971$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-2xl lg:text-3xl font-semibold uppercase tracking-wider mb-3", "text-slate-900  dark:text-slate-100"]))), children:"Support the Pavilion"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__64971$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__64971$$);
            }(), function() {
              var $G__64985$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm lg:text-base max-w-xl mx-auto mb-8", "text-slate-600  dark:text-slate-400"]))), children:"Your contribution directly supports Armenia’s national presentation at the 61st Venice Biennale."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__64985$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__64985$$);
            }(), function() {
              var $G__65003$$ = function() {
                return {className:"flex justify-center", children:function() {
                  var $G__65007$$ = function() {
                    return {title:"Donate Now", "on-click":function() {
                      return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                    }};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__65007$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__65007$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65003$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65003$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64965$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64965$$);
        }(), function() {
          var $G__65011$$ = function() {
            return {className:"grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-sm", children:[function() {
              var $G__65015$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__65019$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-medium uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"Get in Touch"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__65019$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__65019$$);
                }(), function() {
                  var $G__65027$$ = {href:"mailto:hello@armenianpavilion2026.org?subject\x3dLet's%20connect", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), children:"hello@armenianpavilion2026.org"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__65027$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__65027$$);
                }(), function() {
                  var $G__65041$$ = {href:"tel:+13234041152", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), children:"+1 323-404-1152"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__65041$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__65041$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65015$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65015$$);
            }(), function() {
              var $G__65057$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__65061$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-medium uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"501(c)(3) Non-Profit"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__65061$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__65061$$);
                }(), function() {
                  var $G__65076$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"Fallen Angels Inc."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65076$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__65076$$);
                }(), function() {
                  var $G__65086$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-600  dark:text-slate-400"), children:"EIN: 92-2395513"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65086$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__65086$$);
                }(), function() {
                  var $G__65097$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-600  dark:text-slate-400"), children:"Los Angeles, CA"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65097$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__65097$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65057$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65057$$);
            }(), function() {
              var $G__65105$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__65111$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-medium uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"Quick Links"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__65111$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__65111$$);
                }(), function() {
                  var $G__65117$jscomp$1$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$("video") : $scroll_to_id$jscomp$1$$.call(null, "video");
                    }, children:"The Film"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__65117$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__65117$jscomp$1$$);
                }(), function() {
                  var $G__65129$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$("press-release") : $scroll_to_id$jscomp$1$$.call(null, "press-release");
                    }, children:"Press Release"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__65129$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__65129$$);
                }(), function() {
                  var $G__65135$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$("about-studio") : $scroll_to_id$jscomp$1$$.call(null, "about-studio");
                    }, children:"The Studio"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__65135$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__65135$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65105$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65105$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65011$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65011$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__64957$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__64957$$);
    }(), function() {
      var $G__65148$jscomp$1$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65148$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65148$jscomp$1$$);
    }(), function() {
      var $G__65153$$ = function() {
        return {className:"py-6 px-6 flex flex-col sm:flex-row justify-between items-center gap-3 max-w-5xl mx-auto", children:[function() {
          var $G__65160$$ = function() {
            return {className:"flex items-center gap-4", children:[function() {
              var $G__65166$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"h-6 opacity-40 invert dark:invert-0"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__65166$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__65166$$);
            }(), function() {
              var $G__65174$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] uppercase tracking-[0.15em] whitespace-nowrap", "text-slate-600  dark:text-slate-400"]))), children:"Armenia Pavilion · 61st Venice Biennale"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65174$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65174$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65160$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65160$$);
        }(), function() {
          var $G__65184$$ = function() {
            return {className:"flex items-center gap-4", children:[function() {
              var $G__65192$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-600  dark:text-slate-400"]))), children:"© 2026 AZ Studios Inc."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65192$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65192$jscomp$1$$);
            }(), function() {
              var $G__65198$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"v" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("ae4c213")};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65198$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65198$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65184$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65184$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65153$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65153$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("footer", $G__64905_map__64901_props__41640__auto__$jscomp$45_vec__64898$$) : $APP.$helix$core$jsxs$$.call(null, "footer", $G__64905_map__64901_props__41640__auto__$jscomp$45_vec__64898$$);
};
$amp$components$sections$non_profit$title$$ = function($G__65267_G__65271$jscomp$inline_4094_G__65279$jscomp$inline_4095_props__41640__auto__$jscomp$46$$) {
  $APP.$helix$core$extract_cljs_props$$($G__65267_G__65271$jscomp$inline_4094_G__65279$jscomp$inline_4095_props__41640__auto__$jscomp$46$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__65267_G__65271$jscomp$inline_4094_G__65279$jscomp$inline_4095_props__41640__auto__$jscomp$46$$ = {className:"w-1", children:"support the Armenia Pavilion"};
  $G__65267_G__65271$jscomp$inline_4094_G__65279$jscomp$inline_4095_props__41640__auto__$jscomp$46$$ = {className:"flex flex-col", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65267_G__65271$jscomp$inline_4094_G__65279$jscomp$inline_4095_props__41640__auto__$jscomp$46$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__65267_G__65271$jscomp$inline_4094_G__65279$jscomp$inline_4095_props__41640__auto__$jscomp$46$$)};
  $G__65267_G__65271$jscomp$inline_4094_G__65279$jscomp$inline_4095_props__41640__auto__$jscomp$46$$ = {className:"lg:flex\n                    w-full\n                    lg:h-2/5\n                    z-20\n                    items-center\n                    justify-between\n                    bg-black/10\n                    lg:p-12 p-4\n                    lg:text-6xl text-3xl\n                    font-display\n                    font-bold\n                    text-slate-800", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? 
  $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65267_G__65271$jscomp$inline_4094_G__65279$jscomp$inline_4095_props__41640__auto__$jscomp$46$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65267_G__65271$jscomp$inline_4094_G__65279$jscomp$inline_4095_props__41640__auto__$jscomp$46$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65267_G__65271$jscomp$inline_4094_G__65279$jscomp$inline_4095_props__41640__auto__$jscomp$46$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65267_G__65271$jscomp$inline_4094_G__65279$jscomp$inline_4095_props__41640__auto__$jscomp$46$$);
};
$amp$components$sections$non_profit$copy_block$$ = function($G__65300$jscomp$1_map__65298_map__65298__$1_props__41640__auto__$jscomp$47_vec__65295$$, $maybe_ref__41641__auto__$jscomp$47$$) {
  $G__65300$jscomp$1_map__65298_map__65298__$1_props__41640__auto__$jscomp$47_vec__65295$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__65300$jscomp$1_map__65298_map__65298__$1_props__41640__auto__$jscomp$47_vec__65295$$), $maybe_ref__41641__auto__$jscomp$47$$], null);
  $G__65300$jscomp$1_map__65298_map__65298__$1_props__41640__auto__$jscomp$47_vec__65295$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__65300$jscomp$1_map__65298_map__65298__$1_props__41640__auto__$jscomp$47_vec__65295$$, 0, null);
  $G__65300$jscomp$1_map__65298_map__65298__$1_props__41640__auto__$jscomp$47_vec__65295$$ = $APP.$cljs$core$__destructure_map$$($G__65300$jscomp$1_map__65298_map__65298__$1_props__41640__auto__$jscomp$47_vec__65295$$);
  var $title$jscomp$25$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__65300$jscomp$1_map__65298_map__65298__$1_props__41640__auto__$jscomp$47_vec__65295$$, $APP.$cljs$cst$381$title$$), $copy$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__65300$jscomp$1_map__65298_map__65298__$1_props__41640__auto__$jscomp$47_vec__65295$$, $cljs$cst$772$copy$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__65300$jscomp$1_map__65298_map__65298__$1_props__41640__auto__$jscomp$47_vec__65295$$ = function() {
    return {className:"flex flex-col mb-12 font-display", children:[function() {
      var $G__65304$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:$title$jscomp$25$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65304$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__65304$$);
    }(), function() {
      var $G__65308$$ = {className:"text-slate-800", children:$copy$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65308$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__65308$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65300$jscomp$1_map__65298_map__65298__$1_props__41640__auto__$jscomp$47_vec__65295$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65300$jscomp$1_map__65298_map__65298__$1_props__41640__auto__$jscomp$47_vec__65295$$);
};
$amp$components$sections$non_profit$non_profit_section$$ = function($G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$, $maybe_ref__41641__auto__$jscomp$48$$) {
  $G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$), $maybe_ref__41641__auto__$jscomp$48$$], null);
  $G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$, 0, null);
  $G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$ = $APP.$cljs$core$__destructure_map$$($G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$, $cljs$cst$773$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$, $cljs$cst$770$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$, $cljs$cst$774$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$5$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$5$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$, 1, null);
  $G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$non_profit$images$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$, 1, null);
  $APP.$helix$hooks$use_ref$$("image-gallery-container-ref");
  $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$ = function() {
    return {ref:$outer_ctx$jscomp$5$$, className:"h-full \n                          w-full\n                          flex\n                          blue-purple-grad\n                          light-red-grad\n                          items-center\n                          justify-center\n                          font-display\n                          relative", children:function() {
      var $G__65339$$ = function() {
        return {className:"flex \n                                 flex-col\n                                 overflow-hidden\n                                 relative\n                                 w-full md:w-10/12 lg:w-full\n                                 lg:p-12 p-4", children:[function() {
          var $G__65343$$ = {};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$non_profit$title$$, $G__65343$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$non_profit$title$$, $G__65343$$);
        }(), function() {
          var $G__65346$jscomp$1$$ = function() {
            return {className:"flex overflow-hidden relative", children:function() {
              var $G__65350$$ = function() {
                return {className:"lg:w-1/2 \n                                               lg:p-16 p-4", children:[function() {
                  var $G__65354$$ = {title:"", copy:"Funds go to keep THE STUDIO alive for six months in Venice.  Your support ensures the artist’s residency, covers materials and fabrication, pays our production crew, builds and ships the pavilion, and funds public programs and the exhibition catalogue.  Gifts are handled by Fallen Angels, a registered 501(c)(3) non‑profit; donations to a 501(c)(3) are tax‑deductible"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$non_profit$copy_block$$, $G__65354$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$non_profit$copy_block$$, $G__65354$$);
                }(), function() {
                  var $G__65358$$ = function() {
                    return {className:"flex flex-col mb-12 font-display", children:[function() {
                      var $G__65362$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:"What Your Donation Funds"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65362$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__65362$$);
                    }(), function() {
                      var $G__65366$$ = function() {
                        return {className:"list-disc list-outside ml-5 text-slate-800", children:[function() {
                          var $G__65370$$ = {children:"Artist \x26 team residency in Venice"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__65370$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__65370$$);
                        }(), function() {
                          var $G__65374$$ = {children:"Fabrication materials and modular blocks"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__65374$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__65374$$);
                        }(), function() {
                          var $G__65379$$ = {children:"Production crew \x26 documentation (video, photography, editing)"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__65379$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__65379$$);
                        }(), function() {
                          var $G__65384$$ = {children:"Pavilion build‑out, shipping \x26 logistics"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__65384$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__65384$$);
                        }(), function() {
                          var $G__65388$$ = {children:"Public programs \x26 education"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__65388$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__65388$$);
                        }(), function() {
                          var $G__65392$$ = {children:"Archival filming \x26 catalogue"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__65392$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__65392$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ul", $G__65366$$) : $APP.$helix$core$jsxs$$.call(null, "ul", $G__65366$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65358$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65358$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65350$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65350$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65346$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65346$jscomp$1$$);
        }(), function() {
          var $G__65396$$ = function() {
            return {className:"lg:absolute lg:bottom-[40px] lg:left-1/2 lg:-translate-x-1/2", children:function() {
              var $G__65401$$ = function() {
                return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
                  return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                }};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__65401$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__65401$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65396$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65396$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65339$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65339$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__65335_map__65327_map__65327__$1_props__41640__auto__$jscomp$48_vec__65324_vec__65328_vec__65331$$);
};
$amp$components$sections$team_section$team_member_card$$ = function($G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$, $data$jscomp$142_maybe_ref__41635__auto__$jscomp$21$$) {
  $G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$), $data$jscomp$142_maybe_ref__41635__auto__$jscomp$21$$], null);
  $G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$, 0, null);
  $G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$ = $APP.$cljs$core$__destructure_map$$($G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$);
  $data$jscomp$142_maybe_ref__41635__auto__$jscomp$21$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$, $APP.$cljs$cst$28$data$$);
  var $images$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$, $cljs$cst$769$images$$), $flash_images_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$, $cljs$cst$797$flash_images_handler$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$ = $APP.$cljs$core$__destructure_map$$($data$jscomp$142_maybe_ref__41635__auto__$jscomp$21$$);
  var $name$jscomp$200$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$, $APP.$cljs$cst$191$name$$), $role$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$, $APP.$cljs$cst$775$role$$), $copy$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$, 
  $cljs$cst$772$copy$$), $social$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$, $cljs$cst$795$social$$), $email$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$, $cljs$cst$796$email$$);
  $G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$ = function() {
    return {className:"flex flex-col\n                    mb-16\n                    font-display text-gray-800", children:[function() {
      var $G__66138$$ = function() {
        return {className:"relative inline-block\n                           z-30\n                           w-fit\n                           -mb-6", onMouseEnter:function() {
          return $flash_images_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $flash_images_handler$$.$cljs$core$IFn$_invoke$arity$1$($images$jscomp$3$$) : $flash_images_handler$$.call(null, $images$jscomp$3$$);
        }, children:[function() {
          var $G__66158$jscomp$1$$ = {className:"absolute inset-y-1 inset-x-0\n                                  translate-x-2 translate-y-2\n                                  warm-yellow\n                                  pointer-events-none"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66158$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66158$jscomp$1$$);
        }(), function() {
          var $G__66166$$ = {className:"relative z-10\n                                text-3xl whitespace-nowrap lg:text-2xl font-bold lowercase\n                                pointer-events-none", children:$name$jscomp$200$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66166$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__66166$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66138$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66138$$);
    }(), function() {
      var $G__66178$jscomp$1$$ = {className:"text-6xl lg:text-8xl font-bold lowercase\n                         z-20\n                         mb-4", children:$role$jscomp$1$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66178$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__66178$jscomp$1$$);
    }(), function() {
      var $G__66192$$ = {className:"text-md text-gray-600", children:$copy$jscomp$3$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66192$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__66192$$);
    }(), function() {
      var $G__66206$$ = {className:"my-4\n                          border-gray-900"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("hr", $G__66206$$) : $APP.$helix$core$jsx$$.call(null, "hr", $G__66206$$);
    }(), function() {
      var $G__66210$$ = {className:"text-md text-red-600", children:$social$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66210$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__66210$$);
    }(), function() {
      var $G__66238$$ = {className:"text-md text-red-600", children:$email$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66238$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__66238$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66132$jscomp$1_map__66123_map__66123__$1_map__66124__$1_props__41634__auto__$jscomp$21_vec__66120$$);
};
$amp$components$sections$team_section$team_members$$ = function($G__66340_map__66324_map__66324__$1_props__41634__auto__$jscomp$22_vec__66321$$, $maybe_ref__41635__auto__$jscomp$22$$) {
  $G__66340_map__66324_map__66324__$1_props__41634__auto__$jscomp$22_vec__66321$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__66340_map__66324_map__66324__$1_props__41634__auto__$jscomp$22_vec__66321$$), $maybe_ref__41635__auto__$jscomp$22$$], null);
  $G__66340_map__66324_map__66324__$1_props__41634__auto__$jscomp$22_vec__66321$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66340_map__66324_map__66324__$1_props__41634__auto__$jscomp$22_vec__66321$$, 0, null);
  $G__66340_map__66324_map__66324__$1_props__41634__auto__$jscomp$22_vec__66321$$ = $APP.$cljs$core$__destructure_map$$($G__66340_map__66324_map__66324__$1_props__41634__auto__$jscomp$22_vec__66321$$);
  var $flash_images_handler$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66340_map__66324_map__66324__$1_props__41634__auto__$jscomp$22_vec__66321$$, $cljs$cst$797$flash_images_handler$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__66340_map__66324_map__66324__$1_props__41634__auto__$jscomp$22_vec__66321$$ = function() {
    return {className:"w-full\n                  flex flex-col\n                  items-center justify-center\n                  \n                  ", children:function() {
      var $G__66350$$ = function() {
        return {className:"items-center justify-center\n                         w-full md:w-10/12\n                         lg:pl-32 px-8 py-16", children:[function() {
          var $G__66357$$ = {data:$amp$components$sections$team_section$tony_card_data$$, images:$amp$components$sections$team_section$tony_images$$, "flash-images-handler":$flash_images_handler$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_member_card$$, $G__66357$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_member_card$$, $G__66357$$);
        }(), function() {
          var $G__66363$$ = {data:$amp$components$sections$team_section$tina_card_data$$, images:$amp$components$sections$team_section$tina_images$$, "flash-images-handler":$flash_images_handler$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_member_card$$, $G__66363$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_member_card$$, $G__66363$$);
        }(), function() {
          var $G__66367$$ = {data:$amp$components$sections$team_section$zadik_card_data$$, images:$amp$components$sections$team_section$zadik_images$$, "flash-images-handler":$flash_images_handler$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_member_card$$, $G__66367$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_member_card$$, $G__66367$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66350$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66350$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66340_map__66324_map__66324__$1_props__41634__auto__$jscomp$22_vec__66321$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66340_map__66324_map__66324__$1_props__41634__auto__$jscomp$22_vec__66321$$);
};
$amp$components$sections$team_section$team_section$$ = function($G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$, $maybe_ref__41635__auto__$jscomp$23$$) {
  $G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$), $maybe_ref__41635__auto__$jscomp$23$$], null);
  $G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$, 0, null);
  $G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$ = $APP.$cljs$core$__destructure_map$$($G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$, $cljs$cst$773$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$, $cljs$cst$770$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$, $cljs$cst$774$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$6$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$6$$);
  var $visited_QMARK_$jscomp$7$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$, 1, null);
  $G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$team_section$zadik_images$$);
  var $images$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$, 0, null), $set_images$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$, 1, null), $is_desktop_QMARK_$jscomp$5$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$(), $image_gallery_container_ref$jscomp$3$$ = 
  $APP.$helix$hooks$use_ref$$("image-gallery-container-ref");
  $G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$ = function() {
    return {ref:$outer_ctx$jscomp$6$$, className:"relative\n                        h-full w-full\n                        flex items-end justify-center\n                        pink-grad blue-light-grad", children:function() {
      var $G__66401$$ = function() {
        return {className:"relative\n                               flex\n                               overflow-hidden", children:[function() {
          var $G__66405$jscomp$1_G__66409$jscomp$inline_4005$$ = {className:"overflow-hidden", style:{writingMode:$APP.$helix$impl$props$__GT_js$$("vertical-rl")}, children:"team.թիմ.équipe.equipo.squadra.team.թիմ.équipe.equipo.squadra.team"};
          $G__66405$jscomp$1_G__66409$jscomp$inline_4005$$ = {className:"absolute left-0 top-0\n                                      font-display font-bold text-8xl\n                                      light-blue-font-color\n                                      opacity-30", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66405$jscomp$1_G__66409$jscomp$inline_4005$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__66405$jscomp$1_G__66409$jscomp$inline_4005$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66405$jscomp$1_G__66409$jscomp$inline_4005$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66405$jscomp$1_G__66409$jscomp$inline_4005$$);
        }(), function() {
          var $G__66415$$ = {"flash-images-handler":$set_images$jscomp$2$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_members$$, $G__66415$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_members$$, $G__66415$$);
        }(), $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$5$$) ? $visited_QMARK_$jscomp$7$$ : $is_desktop_QMARK_$jscomp$5$$) ? function() {
          var $G__66419$jscomp$1_G__66423$jscomp$inline_4098_G__66427$jscomp$inline_4099_JSCompiler_inline_result$jscomp$inline_4097$$ = {images:$images$jscomp$4$$, "image-gallery-container-ref":$image_gallery_container_ref$jscomp$3$$};
          $G__66419$jscomp$1_G__66423$jscomp$inline_4098_G__66427$jscomp$inline_4099_JSCompiler_inline_result$jscomp$inline_4097$$ = {className:"absolute h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $G__66419$jscomp$1_G__66423$jscomp$inline_4098_G__66427$jscomp$inline_4099_JSCompiler_inline_result$jscomp$inline_4097$$) : $APP.$helix$core$jsx$$.call(null, 
          $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $G__66419$jscomp$1_G__66423$jscomp$inline_4098_G__66427$jscomp$inline_4099_JSCompiler_inline_result$jscomp$inline_4097$$)};
          $G__66419$jscomp$1_G__66423$jscomp$inline_4098_G__66427$jscomp$inline_4099_JSCompiler_inline_result$jscomp$inline_4097$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66419$jscomp$1_G__66423$jscomp$inline_4098_G__66427$jscomp$inline_4099_JSCompiler_inline_result$jscomp$inline_4097$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66419$jscomp$1_G__66423$jscomp$inline_4098_G__66427$jscomp$inline_4099_JSCompiler_inline_result$jscomp$inline_4097$$);
          $G__66419$jscomp$1_G__66423$jscomp$inline_4098_G__66427$jscomp$inline_4099_JSCompiler_inline_result$jscomp$inline_4097$$ = {ref:$image_gallery_container_ref$jscomp$3$$, className:"relative\n                                        w-8/12\n                                        ml-8\n                                        overflow-hidden", children:$G__66419$jscomp$1_G__66423$jscomp$inline_4098_G__66427$jscomp$inline_4099_JSCompiler_inline_result$jscomp$inline_4097$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66419$jscomp$1_G__66423$jscomp$inline_4098_G__66427$jscomp$inline_4099_JSCompiler_inline_result$jscomp$inline_4097$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66419$jscomp$1_G__66423$jscomp$inline_4098_G__66427$jscomp$inline_4099_JSCompiler_inline_result$jscomp$inline_4097$$);
        }() : null]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66401$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66401$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__66397_map__66389_map__66389__$1_props__41634__auto__$jscomp$23_vec__66386_vec__66390_vec__66393$$);
};
$amp$components$sections$video_section$video_section$$ = function($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$2_vec__149655_vec__149660$$, $G__149671$jscomp$inline_4102_G__149675$jscomp$inline_4103_JSCompiler_inline_result$jscomp$inline_4101_maybe_ref__41676__auto__$jscomp$2_playback_id$$) {
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$2_vec__149655_vec__149660$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$2_vec__149655_vec__149660$$), $G__149671$jscomp$inline_4102_G__149675$jscomp$inline_4103_JSCompiler_inline_result$jscomp$inline_4101_maybe_ref__41676__auto__$jscomp$2_playback_id$$], 
  null);
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$2_vec__149655_vec__149660$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$2_vec__149655_vec__149660$$, 0, null);
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$2_vec__149655_vec__149660$$ = $APP.$cljs$core$__destructure_map$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$2_vec__149655_vec__149660$$);
  $G__149671$jscomp$inline_4102_G__149675$jscomp$inline_4103_JSCompiler_inline_result$jscomp$inline_4101_maybe_ref__41676__auto__$jscomp$2_playback_id$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$2_vec__149655_vec__149660$$, $APP.$cljs$cst$798$playback_id$$);
  var $allow_audio_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$2_vec__149655_vec__149660$$, $APP.$cljs$cst$799$allow_audio_QMARK_$$, !0);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$2_vec__149655_vec__149660$$ = $APP.$amp$providers$main_provider$use_main_state$$();
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$2_vec__149655_vec__149660$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$2_vec__149655_vec__149660$$, 1, null);
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$2_vec__149655_vec__149660$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  var $is_active_QMARK_$jscomp$11_vec__149663$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$2_vec__149655_vec__149660$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$390$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$11_vec__149663$$, 0, null);
  $is_active_QMARK_$jscomp$11_vec__149663$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$11_vec__149663$$, 1, null);
  $G__149671$jscomp$inline_4102_G__149675$jscomp$inline_4103_JSCompiler_inline_result$jscomp$inline_4101_maybe_ref__41676__auto__$jscomp$2_playback_id$$ = {"playback-id":$G__149671$jscomp$inline_4102_G__149675$jscomp$inline_4103_JSCompiler_inline_result$jscomp$inline_4101_maybe_ref__41676__auto__$jscomp$2_playback_id$$, "allow-audio?":$allow_audio_QMARK_$$, "should-play?":$is_active_QMARK_$jscomp$11_vec__149663$$};
  $G__149671$jscomp$inline_4102_G__149675$jscomp$inline_4103_JSCompiler_inline_result$jscomp$inline_4101_maybe_ref__41676__auto__$jscomp$2_playback_id$$ = {className:"h-full\n                           w-full\n                           flex\n                           relative \n                           flex items-center justify-items-center justify-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$video_section$lazy_video_background$$, 
  $G__149671$jscomp$inline_4102_G__149675$jscomp$inline_4103_JSCompiler_inline_result$jscomp$inline_4101_maybe_ref__41676__auto__$jscomp$2_playback_id$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$video_section$lazy_video_background$$, $G__149671$jscomp$inline_4102_G__149675$jscomp$inline_4103_JSCompiler_inline_result$jscomp$inline_4101_maybe_ref__41676__auto__$jscomp$2_playback_id$$)};
  $G__149671$jscomp$inline_4102_G__149675$jscomp$inline_4103_JSCompiler_inline_result$jscomp$inline_4101_maybe_ref__41676__auto__$jscomp$2_playback_id$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149671$jscomp$inline_4102_G__149675$jscomp$inline_4103_JSCompiler_inline_result$jscomp$inline_4101_maybe_ref__41676__auto__$jscomp$2_playback_id$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149671$jscomp$inline_4102_G__149675$jscomp$inline_4103_JSCompiler_inline_result$jscomp$inline_4101_maybe_ref__41676__auto__$jscomp$2_playback_id$$);
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$2_vec__149655_vec__149660$$ = {id:"video", ref:$G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$2_vec__149655_vec__149660$$, className:"absolute\n                    h-full\n                    w-full\n                    overflow-hidden", children:$G__149671$jscomp$inline_4102_G__149675$jscomp$inline_4103_JSCompiler_inline_result$jscomp$inline_4101_maybe_ref__41676__auto__$jscomp$2_playback_id$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$2_vec__149655_vec__149660$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$2_vec__149655_vec__149660$$);
};
$amp$components$sections$quote_section$quote_section$$ = function($G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$8_map__284249_props__41675__auto__$jscomp$3_vec__284246$$, $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$3_vec__284250_vec__284253$$) {
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$8_map__284249_props__41675__auto__$jscomp$3_vec__284246$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$8_map__284249_props__41675__auto__$jscomp$3_vec__284246$$), $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$3_vec__284250_vec__284253$$], 
  null);
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$8_map__284249_props__41675__auto__$jscomp$3_vec__284246$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$8_map__284249_props__41675__auto__$jscomp$3_vec__284246$$, 0, null);
  var $map__284249__$1_to$jscomp$10$$ = $APP.$cljs$core$__destructure_map$$($G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$8_map__284249_props__41675__auto__$jscomp$3_vec__284246$$), $gradient_class$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $cljs$cst$773$gradient_class$$), $quote$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $cljs$cst$800$quote$$), $header$jscomp$5$$ = 
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $APP.$cljs$cst$333$header$$);
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$8_map__284249_props__41675__auto__$jscomp$3_vec__284246$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $cljs$cst$770$is_visible_QMARK_$$);
  var $children$jscomp$28$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $APP.$cljs$cst$101$children$$);
  $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$3_vec__284250_vec__284253$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $cljs$cst$801$from$$);
  $map__284249__$1_to$jscomp$10$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $cljs$cst$802$to$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $from_transition$$ = $APP.$cljs$core$truth_$$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$3_vec__284250_vec__284253$$) ? $APP.$cljs$core$clj__GT_js$$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$3_vec__284250_vec__284253$$) : {opacity:0, duration:0.5, ease:"expo.inOut", stagger:0.1}, $to_transition$$ = $APP.$cljs$core$truth_$$($map__284249__$1_to$jscomp$10$$) ? $APP.$cljs$core$clj__GT_js$$($map__284249__$1_to$jscomp$10$$) : 
  {opacity:1, duration:0.15, ease:"expo.inOut", stagger:0.025}, $outer_ctx$jscomp$8$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $text_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("text-ref");
  $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$3_vec__284250_vec__284253$$ = $APP.$helix$hooks$use_state$$(new $APP.$module$node_modules$gsap$dist$gsap$$.gsap.timeline({paused:!0}));
  var $tl$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$3_vec__284250_vec__284253$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$3_vec__284250_vec__284253$$, 1, null);
  $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$3_vec__284250_vec__284253$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$8$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$3_vec__284250_vec__284253$$, 0, null);
  var $is_active_QMARK_$jscomp$12$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$3_vec__284250_vec__284253$$, 1, null);
  $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$3_vec__284250_vec__284253$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $splitter$jscomp$1$$ = $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($text_ref$jscomp$1$$)) ? new $APP.$module$node_modules$gsap$SplitText$$.SplitText($APP.$cljs$core$_deref$$($text_ref$jscomp$1$$), {type:"words,chars", charsClass:"playable-type-char"}) : null, $chars$jscomp$3$$ = $APP.$cljs$core$truth_$$($splitter$jscomp$1$$) ? $splitter$jscomp$1$$.chars : null, $ctx$jscomp$19$$ = $APP.$module$node_modules$gsap$dist$gsap$$.gsap.context(function() {
      return $tl$jscomp$2$$.from($chars$jscomp$3$$, $from_transition$$).to($chars$jscomp$3$$, $to_transition$$).timeScale(4);
    }, $outer_ctx$jscomp$8$$);
    return function() {
      return $ctx$jscomp$19$$.revert();
    };
  });
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$8_map__284249_props__41675__auto__$jscomp$3_vec__284246$$ = [$quote$jscomp$1$$, $text_ref$jscomp$1$$, $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$8_map__284249_props__41675__auto__$jscomp$3_vec__284246$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$3_vec__284250_vec__284253$$, $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$8_map__284249_props__41675__auto__$jscomp$3_vec__284246$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$3_vec__284250_vec__284253$$, 
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$8_map__284249_props__41675__auto__$jscomp$3_vec__284246$$);
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$8_map__284249_props__41675__auto__$jscomp$3_vec__284246$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($is_active_QMARK_$jscomp$12$$) ? $tl$jscomp$2$$.play() : null;
  });
  $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$3_vec__284250_vec__284253$$ = [$is_active_QMARK_$jscomp$12$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$8_map__284249_props__41675__auto__$jscomp$3_vec__284246$$, $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$3_vec__284250_vec__284253$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$8_map__284249_props__41675__auto__$jscomp$3_vec__284246$$, 
  $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$3_vec__284250_vec__284253$$);
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$8_map__284249_props__41675__auto__$jscomp$3_vec__284246$$ = function() {
    return {ref:$outer_ctx$jscomp$8$$, className:$APP.$helix$impl$props$normalize_class$$("h-full w-full " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($gradient_class$jscomp$3$$) ? $gradient_class$jscomp$3$$ : null)), children:function() {
      var $G__284265$$ = function() {
        return {ref:$text_ref$jscomp$1$$, className:"w-full h-full items-center justify-center flex", children:$APP.$cljs$core$truth_$$($children$jscomp$28$$) ? $children$jscomp$28$$ : function() {
          var $G__284269$$ = function() {
            return {className:"border-2 border-red-500", children:[function() {
              var $G__284273$$ = {children:$header$jscomp$5$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__284273$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__284273$$);
            }(), function() {
              var $G__284277$$ = function() {
                return {children:$APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($line$jscomp$21$$) {
                  var $G__284281$$ = {children:$line$jscomp$21$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("p", $G__284281$$, $line$jscomp$21$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__284281$$, $line$jscomp$21$$);
                }, $quote$jscomp$1$$)};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__284277$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__284277$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__284269$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__284269$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__284265$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__284265$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$8_map__284249_props__41675__auto__$jscomp$3_vec__284246$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$8_map__284249_props__41675__auto__$jscomp$3_vec__284246$$);
};
$amp$components$sections$work_overview$work_overview$$ = function($G__65419_props__41640__auto__$jscomp$49$$) {
  $APP.$helix$core$extract_cljs_props$$($G__65419_props__41640__auto__$jscomp$49$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__65419_props__41640__auto__$jscomp$49$$ = function() {
    return {"section-id":"about-work", children:function() {
      var $G__65426$$ = function() {
        return {className:"flex\n               grey-grad\n                  justify-center\n                  items-center\n                  flex-col\n                  w-full", children:function() {
          var $G__65431$$ = function() {
            return {className:"text-slate-300\n                   font-light\n                   flex\n                   justify-center\n                   flex-col\n                   h-full\n                   py-8\n                   md:w-3/4 w-full\n                   p-8\n                   text-lg\n                   lg:text-2xl", children:[function() {
              var $G__65435$$ = {className:"mt-12\n                        mb-16\n                        font-bold\n                        font-display\n                        text-5xl", children:"THE STUDIO"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65435$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__65435$$);
            }(), function() {
              var $G__65439_G__65443$jscomp$inline_3763$$ = {className:"font-medium text-pink-600", children:":working-studio "};
              $G__65439_G__65443$jscomp$inline_3763$$ = {className:"mb-8", children:["For the full duration of the Biennale, the Armenia Pavilion becomes a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65439_G__65443$jscomp$inline_3763$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65439_G__65443$jscomp$inline_3763$$), "— Zadik Zadikian’s living laboratory, a site where form is made, unmade, and made again."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65439_G__65443$jscomp$inline_3763$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__65439_G__65443$jscomp$inline_3763$$);
            }(), function() {
              var $G__65449_G__65453$jscomp$inline_3766$$ = {className:"font-medium text-pink-600", children:":7–10 people"};
              $G__65449_G__65453$jscomp$inline_3766$$ = {className:"mb-8", children:["Each day, ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65449_G__65453$jscomp$inline_3766$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65449_G__65453$jscomp$inline_3766$$), " move through the space — assistants, fabricators, editors, camera crew — all part of a continuous organism of creation."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65449_G__65453$jscomp$inline_3766$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__65449_G__65453$jscomp$inline_3766$$);
            }(), function() {
              var $G__65457_G__65461$jscomp$inline_3769$$ = {className:"font-medium text-pink-600", children:":architecture-of-change"};
              $G__65457_G__65461$jscomp$inline_3769$$ = {className:"mb-8", children:["They produce thousands of modular units: lightweight foam forms hand-coated in thin plaster, each one a small gesture in a much larger ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65457_G__65461$jscomp$inline_3769$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65457_G__65461$jscomp$inline_3769$$), "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65457_G__65461$jscomp$inline_3769$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__65457_G__65461$jscomp$inline_3769$$);
            }(), function() {
              var $G__65465_G__65469$jscomp$inline_3772$$ = {className:"font-medium text-pink-600", children:"breath"};
              $G__65465_G__65469$jscomp$inline_3772$$ = {className:"mb-8", children:["These units are stacked into structures — walls, pyramids, horizons, interior architectures — shifting daily as fragile formations rise and dissolve like ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65465_G__65469$jscomp$inline_3772$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65465_G__65469$jscomp$inline_3772$$), "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65465_G__65469$jscomp$inline_3772$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__65465_G__65469$jscomp$inline_3772$$);
            }(), function() {
              var $G__65473_G__65477$jscomp$inline_3775$$ = {className:"font-medium text-pink-600", children:":The-artwork"};
              $G__65473_G__65477$jscomp$inline_3775$$ = {className:"mb-12 italic", children:["Nothing is static. Nothing is final. ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65473_G__65477$jscomp$inline_3775$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65473_G__65477$jscomp$inline_3775$$), " is the cycle itself — the rhythm of making, unmaking, and returning again to zero."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65473_G__65477$jscomp$inline_3775$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__65473_G__65477$jscomp$inline_3775$$);
            }(), function() {
              var $G__65481$$ = {className:"mb-8 italic", children:"In Minor Keys — The Philosophy of the Work"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65481$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__65481$$);
            }(), function() {
              var $G__65485_G__65489$jscomp$inline_3778$$ = {className:"font-medium text-pink-600", children:":Structure"};
              $G__65485_G__65489$jscomp$inline_3778$$ = {className:"mb-8", children:["Here, repetition becomes a meditation. Labor becomes devotion. ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65485_G__65489$jscomp$inline_3778$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65485_G__65489$jscomp$inline_3778$$), " is only a temporary embodiment of an ongoing frequency."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65485_G__65489$jscomp$inline_3778$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__65485_G__65489$jscomp$inline_3778$$);
            }(), function() {
              var $G__65493_G__65497$jscomp$inline_3781$$ = {className:"font-medium text-pink-600", children:":organism"};
              $G__65493_G__65497$jscomp$inline_3781$$ = {className:"mb-8", children:["The studio behaves like an ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65493_G__65497$jscomp$inline_3781$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65493_G__65497$jscomp$inline_3781$$), " — sensitive, cyclical, and always in motion, responding to the theme of “In Minor Keys” through gestures rather than declarations."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65493_G__65497$jscomp$inline_3781$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__65493_G__65497$jscomp$inline_3781$$);
            }(), function() {
              var $G__65501_G__65505$jscomp$inline_3784$$ = {className:"font-medium text-pink-600", children:":quiet-resilience"};
              $G__65501_G__65505$jscomp$inline_3784$$ = {className:"mb-8", children:["The material language is intentionally light: foam, plaster, dust. Fragile materials meet fragile cycles — a nod to Armenian histories of endurance, where the act of repeating becomes a form of survival, a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65501_G__65505$jscomp$inline_3784$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65501_G__65505$jscomp$inline_3784$$), 
              "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65501_G__65505$jscomp$inline_3784$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__65501_G__65505$jscomp$inline_3784$$);
            }(), function() {
              var $G__65509$$ = {className:"mb-8", children:"Nothing here reaches for spectacle. The work moves in frequencies, not fireworks. What matters is the pulse — the rhythm of stacking, filming, dismantling, and returning again to the beginning."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65509$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__65509$$);
            }(), function() {
              var $G__65513_G__65518$jscomp$inline_3787$$ = {className:"font-medium text-pink-600", children:":score"};
              $G__65513_G__65518$jscomp$inline_3787$$ = {className:"mb-8", children:["This cycle functions like a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65513_G__65518$jscomp$inline_3787$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65513_G__65518$jscomp$inline_3787$$), ": a choreography of hands, blocks, dust, light. Each day, the studio composes itself anew, only to erase itself by night."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65513_G__65518$jscomp$inline_3787$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__65513_G__65518$jscomp$inline_3787$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65431$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65431$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65426$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65426$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__65419_props__41640__auto__$jscomp$49$$, "about-work") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__65419_props__41640__auto__$jscomp$49$$, "about-work");
};
$APP.$amp$views$landing_view$landing_view$$ = function($G__69759_props__41640__auto__$jscomp$50$$) {
  $APP.$helix$core$extract_cljs_props$$($G__69759_props__41640__auto__$jscomp$50$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $container_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("container-ref"), $is_desktop_QMARK_$jscomp$6$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__69759_props__41640__auto__$jscomp$50$$ = function() {
    return {ref:$container_ref$jscomp$1$$, className:$APP.$helix$impl$props$normalize_class$$("overflow-x-hidden grey-grad " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-900  dark:text-slate-100")), children:[function() {
      var $G__69763_G__69767$jscomp$inline_3341$$ = {};
      $G__69763_G__69767$jscomp$inline_3341$$ = {className:"fixed top-8 right-8 z-50", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$theme_toggle$theme_toggle$$, $G__69763_G__69767$jscomp$inline_3341$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$theme_toggle$theme_toggle$$, $G__69763_G__69767$jscomp$inline_3341$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__69763_G__69767$jscomp$inline_3341$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__69763_G__69767$jscomp$inline_3341$$);
    }(), $APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$6$$) ? function() {
      var $G__69769$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$navs$logo_nav$logo_nav$$, $G__69769$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$navs$logo_nav$logo_nav$$, $G__69769$$);
    }() : null, function() {
      var $G__69771_G__69776$jscomp$inline_3344$$ = {};
      $G__69771_G__69776$jscomp$inline_3344$$ = {"section-id":"hero", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, $G__69771_G__69776$jscomp$inline_3344$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, $G__69771_G__69776$jscomp$inline_3344$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__69771_G__69776$jscomp$inline_3344$$, "hero") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__69771_G__69776$jscomp$inline_3344$$, "hero");
    }(), function() {
      var $G__69778_G__69783$jscomp$inline_3347$$ = {};
      $G__69778_G__69783$jscomp$inline_3347$$ = {"section-id":"teaser", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$teaser_section$teaser_section$$, $G__69778_G__69783$jscomp$inline_3347$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$teaser_section$teaser_section$$, $G__69778_G__69783$jscomp$inline_3347$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__69778_G__69783$jscomp$inline_3347$$, "teaser") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__69778_G__69783$jscomp$inline_3347$$, "teaser");
    }(), function() {
      var $G__69785$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$("w-full max-w-full overflow-x-hidden flex justify-center"), children:function() {
          var $G__69789$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("flex flex-col " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("w-full lg:w-8/12 min-w-0")), children:[function() {
              var $G__69793$$ = {id:"press-release", title:"Press Release"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$sections$press_release$press_release$$, $G__69793$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$sections$press_release$press_release$$, $G__69793$$);
            }(), function() {
              var $G__69797$$ = {id:"about-studio", title:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$sections$about_studio$about_studio$$, $G__69797$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$sections$about_studio$about_studio$$, $G__69797$$);
            }(), function() {
              var $G__69801$$ = {id:"venue", title:"The Venue"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$location_section$location_section$$, $G__69801$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$location_section$location_section$$, $G__69801$$);
            }(), function() {
              var $G__69805$$ = {id:"in-minor-keys", title:"In Minor Keys"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$in_minor_keys$$, $G__69805$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$in_minor_keys$$, $G__69805$$);
            }(), function() {
              var $G__69809$$ = {id:"artist", title:"The Artist"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$artist_section$artist_section$$, $G__69809$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$artist_section$artist_section$$, $G__69809$$);
            }(), function() {
              var $G__69813$$ = {id:"curators", title:"Curators"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$curators_section$curators_section$$, $G__69813$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$curators_section$curators_section$$, $G__69813$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__69789$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__69789$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__69785$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__69785$$);
    }(), function() {
      var $G__69817$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$site_footer$site_footer$$, $G__69817$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$site_footer$site_footer$$, $G__69817$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__69759_props__41640__auto__$jscomp$50$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__69759_props__41640__auto__$jscomp$50$$);
};
$cljs$cst$769$images$$ = new $APP.$cljs$core$Keyword$$(null, "images", "images", 1757475080);
$cljs$cst$778$visible_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "visible?", "visible?", 2129863715);
$cljs$cst$801$from$$ = new $APP.$cljs$core$Keyword$$(null, "from", "from", 1815293044);
$cljs$cst$770$is_visible_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "is-visible?", "is-visible?", 1902717363);
$cljs$cst$762$on_click_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-click-handler", "on-click-handler", 746440723);
$cljs$cst$774$force_on_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "force-on?", "force-on?", -971910051);
$cljs$cst$771$image_gallery_container_ref$$ = new $APP.$cljs$core$Keyword$$(null, "image-gallery-container-ref", "image-gallery-container-ref", 984527810);
$cljs$cst$773$gradient_class$$ = new $APP.$cljs$core$Keyword$$(null, "gradient-class", "gradient-class", 37945374);
$cljs$cst$767$target_ref$$ = new $APP.$cljs$core$Keyword$$(null, "target-ref", "target-ref", -164384803);
$cljs$cst$776$img$$ = new $APP.$cljs$core$Keyword$$(null, "img", "img", 1442687358);
$cljs$cst$753$boxDecorationBreak$$ = new $APP.$cljs$core$Keyword$$(null, "boxDecorationBreak", "boxDecorationBreak", 826536500);
$cljs$cst$765$writing$$ = new $APP.$cljs$core$Keyword$$(null, "writing", "writing", -1486865108);
$cljs$cst$797$flash_images_handler$$ = new $APP.$cljs$core$Keyword$$(null, "flash-images-handler", "flash-images-handler", -431066401);
$cljs$cst$768$other$$ = new $APP.$cljs$core$Keyword$$(null, "other", "other", 995793544);
$cljs$cst$759$current_index$$ = new $APP.$cljs$core$Keyword$$(null, "current-index", "current-index", 821935409);
$cljs$cst$764$on_mouse_out_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-mouse-out-handler", "on-mouse-out-handler", -2132576332);
$cljs$cst$754$WebkitBoxDecorationBreak$$ = new $APP.$cljs$core$Keyword$$(null, "WebkitBoxDecorationBreak", "WebkitBoxDecorationBreak", 1903427859);
$cljs$cst$758$total_count$$ = new $APP.$cljs$core$Keyword$$(null, "total-count", "total-count", -1999441386);
$cljs$cst$763$on_mouse_over_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-mouse-over-handler", "on-mouse-over-handler", -1708524524);
$cljs$cst$779$attribution$$ = new $APP.$cljs$core$Keyword$$(null, "attribution", "attribution", 1937239286);
$cljs$cst$766$click$$ = new $APP.$cljs$core$Keyword$$(null, "click", "click", 1912301393);
$cljs$cst$795$social$$ = new $APP.$cljs$core$Keyword$$(null, "social", "social", -1560314971);
$cljs$cst$800$quote$$ = new $APP.$cljs$core$Keyword$$(null, "quote", "quote", -262615245);
$cljs$cst$760$hover_title_ref$$ = new $APP.$cljs$core$Keyword$$(null, "hover-title-ref", "hover-title-ref", -819024146);
$cljs$cst$777$bio$$ = new $APP.$cljs$core$Keyword$$(null, "bio", "bio", -331851886);
$cljs$cst$756$throttle_interval$$ = new $APP.$cljs$core$Keyword$$(null, "throttle-interval", "throttle-interval", -1862963883);
$cljs$cst$796$email$$ = new $APP.$cljs$core$Keyword$$(null, "email", "email", 1415816706);
$cljs$cst$802$to$$ = new $APP.$cljs$core$Keyword$$(null, "to", "to", 192099007);
$cljs$cst$757$total_sections$$ = new $APP.$cljs$core$Keyword$$(null, "total-sections", "total-sections", -1281238348);
$cljs$cst$761$is_playing_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "is-playing?", "is-playing?", -274112098);
$cljs$cst$772$copy$$ = new $APP.$cljs$core$Keyword$$(null, "copy", "copy", -1077617309);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("landing-view");
var $amp$components$sections$teaser_section$lazy_video$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$components$elements$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$teaser_section$teaser_section$$, '(hooks/use-ref "outer-ref")(use-scroll-trigger outer-ref {:end "bottom"})', null, null) : (void 0).call(null, 
$amp$components$sections$teaser_section$teaser_section$$, '(hooks/use-ref "outer-ref")(use-scroll-trigger outer-ref {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$teaser_section$teaser_section$$, "amp.components.sections.teaser-section/teaser-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$navs$donation_nav$donation_nav$$, '(hooks/use-ref "comp-ref")(use-touch-enabled)(use-window-size)(use-scroll-trigger comp-ref :start (fn [] (win-utils/height)) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y (- (:height dimensions))}, :is-on? is-active?})', 
null, null) : (void 0).call(null, $amp$components$navs$donation_nav$donation_nav$$, '(hooks/use-ref "comp-ref")(use-touch-enabled)(use-window-size)(use-scroll-trigger comp-ref :start (fn [] (win-utils/height)) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y (- (:height dimensions))}, :is-on? is-active?})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$navs$donation_nav$donation_nav$$, 
"amp.components.navs.donation-nav/donation-nav"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$navs$logo_nav$logo_nav$$, '(hooks/use-ref "comp-ref")(use-scroll-trigger comp-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y -250}, :is-on? is-active?})', 
null, null) : (void 0).call(null, $amp$components$navs$logo_nav$logo_nav$$, '(hooks/use-ref "comp-ref")(use-scroll-trigger comp-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y -250}, :is-on? is-active?})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$navs$logo_nav$logo_nav$$, 
"amp.components.navs.logo-nav/logo-nav"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$navs$progress_menu$progress_menu$$, "(use-scroll-progress total-sections {:throttle-interval 10})", null, null) : (void 0).call(null, $amp$components$navs$progress_menu$progress_menu$$, 
"(use-scroll-progress total-sections {:throttle-interval 10})", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$navs$progress_menu$progress_menu$$, "amp.components.navs.progress-menu/progress-menu"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$navs$progress_menu$progress_menu_v2$$, "", null, null) : (void 0).call(null, $amp$components$navs$progress_menu$progress_menu_v2$$, "", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$navs$progress_menu$progress_menu_v2$$, "amp.components.navs.progress-menu/progress-menu-v2"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$hover_title$hover_title$$, "", null, null) : (void 0).call(null, $amp$components$hover_title$hover_title$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$hover_title$hover_title$$, 
"amp.components.hover-title/hover-title"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$ui$playable_text$playable_text$$, '(hooks/use-ref "outer-ctx")(hooks/use-ref "background-ref")(hooks/use-ref "text-ref")(hooks/use-state (new (.-timeline gsap) {:paused true}))(hooks/use-layout-effect [text text-ref is-playing?] (let [splitter (when (clojure.core/deref text-ref) (new SplitText (clojure.core/deref text-ref) {:type "words,chars", :charsClass "playable-type-char"})) chars (when splitter (.-chars splitter)) ctx (.context gsap (fn [] (-\x3e tl (.from (clojure.core/deref background-ref) {:width "0", :duration 0.15, :ease "expo.inOut"}) (.to (clojure.core/deref background-ref) {:width "100%", :duration 0.15, :ease "expo.inOut"}) (.from chars {:opacity 0, :duration 0.15, :ease "expo.inOut", :stagger 0.025}) (.to chars {:opacity 1, :duration 0.15, :ease "expo.inOut", :stagger 0.025}))) outer-ctx)] (fn [] (.revert ctx))))(hooks/use-effect [is-playing?] (if is-playing? (.play tl) (.reverse tl)))', 
null, null) : (void 0).call(null, $amp$components$ui$playable_text$playable_text$$, '(hooks/use-ref "outer-ctx")(hooks/use-ref "background-ref")(hooks/use-ref "text-ref")(hooks/use-state (new (.-timeline gsap) {:paused true}))(hooks/use-layout-effect [text text-ref is-playing?] (let [splitter (when (clojure.core/deref text-ref) (new SplitText (clojure.core/deref text-ref) {:type "words,chars", :charsClass "playable-type-char"})) chars (when splitter (.-chars splitter)) ctx (.context gsap (fn [] (-\x3e tl (.from (clojure.core/deref background-ref) {:width "0", :duration 0.15, :ease "expo.inOut"}) (.to (clojure.core/deref background-ref) {:width "100%", :duration 0.15, :ease "expo.inOut"}) (.from chars {:opacity 0, :duration 0.15, :ease "expo.inOut", :stagger 0.025}) (.to chars {:opacity 1, :duration 0.15, :ease "expo.inOut", :stagger 0.025}))) outer-ctx)] (fn [] (.revert ctx))))(hooks/use-effect [is-playing?] (if is-playing? (.play tl) (.reverse tl)))', 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$ui$playable_text$playable_text$$, "amp.components.ui.playable-text/playable-text"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$nav_link$nav_link$$, '(hooks/use-ref "link-ref")(hooks/use-state false)', null, null) : (void 0).call(null, $amp$components$nav_link$nav_link$$, 
'(hooks/use-ref "link-ref")(hooks/use-state false)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$nav_link$nav_link$$, "amp.components.nav-link/nav-link"));
var $amp$components$playful_titles$titles$$ = new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["venice", "Venice is where everything begins again."], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["biennale", "Biennale means art alive, always becoming."], null), new $APP.$cljs$core$PersistentVector$$(null, 
2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["2026", "2026 marks our shift into becoming."], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["armenian", "Armenian means rhythm, grit, and quiet power."], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["pavilion", "A pavilion becomes a world in motion."], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$playful_titles$hero_menu$$, "", null, null) : (void 0).call(null, $amp$components$playful_titles$hero_menu$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$playful_titles$hero_menu$$, 
"amp.components.playful-titles/hero-menu"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$playful_titles$playful_titles$$, '(use-main-state)(hooks/use-ref "hover-title-ref")(hooks/use-state nil)(hooks/use-callback [hover-title-ref] (fn [{:keys [section-id]}] (set-current-section! section-id) (.to gsap (clojure.core/deref hover-title-ref) {:opacity 0.8, :duration 0.2})))(hooks/use-callback [hover-title-ref] (fn [] (.to gsap (clojure.core/deref hover-title-ref) {:opacity 0, :duration 0.2})))', 
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
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$lazy_image_gallery$image_layer$$, '(hooks/use-ref "base-ref")(hooks/use-ref "trans-ref")(hooks/use-state nil)(hooks/use-state nil)(hooks/use-layout-effect [img-src current-src] (when (not (\x3d current-src img-src)) (set-prev-src current-src)))', 
null, null) : (void 0).call(null, $amp$components$elements$lazy_image_gallery$image_layer$$, '(hooks/use-ref "base-ref")(hooks/use-ref "trans-ref")(hooks/use-state nil)(hooks/use-state nil)(hooks/use-layout-effect [img-src current-src] (when (not (\x3d current-src img-src)) (set-prev-src current-src)))', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$lazy_image_gallery$image_layer$$, "amp.components.elements.lazy-image-gallery/image-layer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$lazy_image_gallery$caption_layer$$, "", null, null) : (void 0).call(null, $amp$components$elements$lazy_image_gallery$caption_layer$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$lazy_image_gallery$caption_layer$$, "amp.components.elements.lazy-image-gallery/caption-layer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$lazy_image_gallery$image_card$$, '(hooks/use-ref "trigger-ref")(hooks/use-ref "target-ref")(use-hover-animations trigger-ref {:target target-ref, :initial {:y 100, :opacity 0}, :over {:y 0, :opacity 1, :duration 0.25}, :out {:y 100, :opacity 0, :duration 0.125}})', 
null, null) : (void 0).call(null, $amp$components$elements$lazy_image_gallery$image_card$$, '(hooks/use-ref "trigger-ref")(hooks/use-ref "target-ref")(use-hover-animations trigger-ref {:target target-ref, :initial {:y 100, :opacity 0}, :over {:y 0, :opacity 1, :duration 0.25}, :out {:y 100, :opacity 0, :duration 0.125}})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$lazy_image_gallery$image_card$$, "amp.components.elements.lazy-image-gallery/image-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, '(hooks/use-ref "outer-ctx")(use-container-size image-gallery-container-ref)(hooks/use-state (build-masonary-grid-slots 3 8 200))(hooks/use-layout-effect [(:width gallery-dimensions) (:height gallery-dimensions)] (set-masonary-grid-slots (build-masonary-grid-slots 3 (:width gallery-dimensions) (:height gallery-dimensions))))', 
null, null) : (void 0).call(null, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, '(hooks/use-ref "outer-ctx")(use-container-size image-gallery-container-ref)(hooks/use-state (build-masonary-grid-slots 3 8 200))(hooks/use-layout-effect [(:width gallery-dimensions) (:height gallery-dimensions)] (set-masonary-grid-slots (build-masonary-grid-slots 3 (:width gallery-dimensions) (:height gallery-dimensions))))', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, 
"amp.components.elements.lazy-image-gallery/lazy-image-gallery"));
var $amp$components$sections$about_biennale$images$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/biennale/metalocus_venice-biennale-corderie-arsenale-photo-giulio-squillacciotti_01.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/biennale/arsenale-venezia.jpg", 
$APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/biennale/6431873131_844b5c6d48_b-112659047.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/biennale/Edificio-E-delle-Sale-dArmi-sud-Arsenale-di-Venezia_01-406863818.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/biennale/GettyImages-1396739612-2882003488.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/biennale/arsenale-venezia-cosa-vedere-come-visitare-408454160.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/biennale/Pavilions-tours-plan.png", 
$APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/biennale/Pavilions-tours-plan.png", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/biennale/IMG_1754-scaled-1386547518.jpg", $APP.$cljs$cst$441$caption$$, null], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$about_biennale$title$$, "", null, null) : (void 0).call(null, $amp$components$sections$about_biennale$title$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$about_biennale$title$$, "amp.components.sections.about-biennale/title"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$about_biennale$copy_block$$, "", null, null) : (void 0).call(null, $amp$components$sections$about_biennale$copy_block$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$about_biennale$copy_block$$, "amp.components.sections.about-biennale/copy-block"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$about_biennale$about_biennale_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', 
null, null) : (void 0).call(null, $amp$components$sections$about_biennale$about_biennale_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$about_biennale$about_biennale_section$$, "amp.components.sections.about-biennale/about-biennale-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$contact_section$contact_section$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $amp$components$sections$contact_section$contact_section$$, 
"(use-scroll-to-id)", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$contact_section$contact_section$$, "amp.components.sections.contact-section/contact-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$artist_section$artist_section$$, '(hooks/use-ref "artist-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : 
(void 0).call(null, $amp$components$sections$artist_section$artist_section$$, '(hooks/use-ref "artist-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$artist_section$artist_section$$, "amp.components.sections.artist-section/artist-section"));
var $amp$components$sections$curators_section$curators$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$name$$, "Tony Shafrazi", $APP.$cljs$cst$775$role$$, "Curator", $cljs$cst$776$img$$, "https://atd-722658831.imgix.net/committee/tony.png", $cljs$cst$777$bio$$, "Tony Shafrazi (b. 1943, Abadan, Iran) is a renowned art dealer, gallerist, and curator. Trained at the Royal College of Art in London, he moved to New York in 1969 and opened the Tony Shafrazi Gallery in 1979, championing Jean-Michel Basquiat, Keith Haring, and Kenny Scharf alongside Picasso, Francis Bacon, and Warhol. He first met Zadik Zadikian while the artist was working with Richard Serra, and has supported his work for decades."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$name$$, "Tina Chakarian", $APP.$cljs$cst$775$role$$, "Curator", $cljs$cst$776$img$$, "https://atd-722658831.imgix.net/committee/tina.png", $cljs$cst$777$bio$$, "Tina Chakarian is a curator based in Boston and Yerevan. Born in Beirut, she studied Visual Arts at UCLA and Tufts University. Since 2015, she has served as Commissioner and Development Director of the Armenian Pavilion at La Biennale di Venezia, playing a central role in shaping Armenia’s sustained presence on the global stage."], 
null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$curators_section$curator_card$$, "", null, null) : (void 0).call(null, $amp$components$sections$curators_section$curator_card$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$curators_section$curator_card$$, "amp.components.sections.curators-section/curator-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$curators_section$curators_section$$, '(hooks/use-ref "curators-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : 
(void 0).call(null, $amp$components$sections$curators_section$curators_section$$, '(hooks/use-ref "curators-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$curators_section$curators_section$$, "amp.components.sections.curators-section/curators-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$in_minor_keys$pull_quote$$, "", null, null) : (void 0).call(null, $amp$components$sections$in_minor_keys$pull_quote$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$in_minor_keys$pull_quote$$, "amp.components.sections.in-minor-keys/pull-quote"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$in_minor_keys$curator_card$$, "", null, null) : (void 0).call(null, $amp$components$sections$in_minor_keys$curator_card$$, "", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$in_minor_keys$curator_card$$, "amp.components.sections.in-minor-keys/curator-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$in_minor_keys$preview$$, '(hooks/use-ref "imk-preview-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$components$sections$in_minor_keys$preview$$, '(hooks/use-ref "imk-preview-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$in_minor_keys$preview$$, "amp.components.sections.in-minor-keys/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$in_minor_keys$details$$, '(hooks/use-ref "imk-details-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$components$sections$in_minor_keys$details$$, '(hooks/use-ref "imk-details-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$in_minor_keys$details$$, "amp.components.sections.in-minor-keys/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$in_minor_keys$in_minor_keys$$, "", null, null) : (void 0).call(null, $amp$components$sections$in_minor_keys$in_minor_keys$$, "", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$in_minor_keys$in_minor_keys$$, "amp.components.sections.in-minor-keys/in-minor-keys"));
var $amp$components$sections$location_section$lazy_video$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$components$elements$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$location_section$preview$$, "", null, null) : (void 0).call(null, $amp$components$sections$location_section$preview$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$location_section$preview$$, "amp.components.sections.location-section/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$location_section$details$$, '(use-touch-enabled)(hooks/use-ref "loc-tesa-ref")(use-intersection-observer ref)(hooks/use-ref "loc-crossing-ref")(use-intersection-observer ref)', 
null, null) : (void 0).call(null, $amp$components$sections$location_section$details$$, '(use-touch-enabled)(hooks/use-ref "loc-tesa-ref")(use-intersection-observer ref)(hooks/use-ref "loc-crossing-ref")(use-intersection-observer ref)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$location_section$details$$, "amp.components.sections.location-section/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$location_section$location_section$$, "", null, null) : (void 0).call(null, $amp$components$sections$location_section$location_section$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$location_section$location_section$$, "amp.components.sections.location-section/location-section"));
var $amp$components$sections$mobile_hero_section$lazy_video_background$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$components$elements$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null) : 
(void 0).call(null, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, "amp.components.sections.mobile-hero-section/mobile-hero-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$site_footer$site_footer$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $amp$components$sections$site_footer$site_footer$$, 
"(use-scroll-to-id)", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$site_footer$site_footer$$, "amp.components.sections.site-footer/site-footer"));
var $amp$components$sections$non_profit$images$$ = new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/biennale/metalocus_venice-biennale-corderie-arsenale-photo-giulio-squillacciotti_01.jpg", $APP.$cljs$cst$441$caption$$, "Arsenale", $APP.$cljs$cst$442$credit$$, "Artnews"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$429$src$$, 
"https://atd-722658831.imgix.net/biennale/arsenale-venezia.jpg", $APP.$cljs$cst$441$caption$$, "Arsenale", $APP.$cljs$cst$442$credit$$, "Artnews"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/biennale/6431873131_844b5c6d48_b-112659047.jpg", $APP.$cljs$cst$441$caption$$, "Arsenale", $APP.$cljs$cst$442$credit$$, "Artnews"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$title$$, "", null, null) : (void 0).call(null, $amp$components$sections$non_profit$title$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$title$$, 
"amp.components.sections.non-profit/title"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$copy_block$$, "", null, null) : (void 0).call(null, $amp$components$sections$non_profit$copy_block$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$copy_block$$, "amp.components.sections.non-profit/copy-block"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$non_profit_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', 
null, null) : (void 0).call(null, $amp$components$sections$non_profit$non_profit_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$non_profit_section$$, "amp.components.sections.non-profit/non-profit-section"));
var $amp$components$sections$team_section$zadik_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/zadik/shovel-nails.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/zadik/zz-portrait.tiff", $APP.$cljs$cst$441$caption$$, 
null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/zadik/single_stack_1970s.tif", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/zadik/golden_water_heater.tif", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-10.psd", 
$APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-76.psd", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/zadik/golden_kitchen.tif", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/2.webp", 
$APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/zadik/ps1_entrance_1.tif", 
$APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-18.psd", 
$APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/2.webp?fit\x3dcrop\x26w\x3d214\x26h\x3d172\x26dpr\x3d2\x26q\x3d50\x26auto\x3dformat%2Ccompress\x26cacheID\x3d1763536997", $APP.$cljs$cst$441$caption$$, null], null)], null), $amp$components$sections$team_section$tina_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 20, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/2.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$441$caption$$, null], null)], null), $amp$components$sections$team_section$tony_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 22, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", 
$APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, 
[$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, 
"https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$441$caption$$, 
null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$441$caption$$, null], null), 
new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, 
"https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", 
$APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, 
[$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$441$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", 
$APP.$cljs$cst$441$caption$$, null], null)], null), $amp$components$sections$team_section$tony_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$191$name$$, "Tony Shafrazi", $APP.$cljs$cst$775$role$$, "Curator", $cljs$cst$795$social$$, "@tonyshafrazi", $cljs$cst$796$email$$, "tony.shafrazi@armenianpavilion2026.org", $cljs$cst$772$copy$$, "Tony Shafrazi (b. 1943, Abadan, Iran) is a renowned art dealer, gallerist, and curator whose career has shaped the contemporary art world. Trained at the Royal College of Art in London, he moved to New York in 1969 and soon became closely associated with figures such as Andy Warhol, Roy Lichtenstein, and Leo Castelli. His early years were marked by bold artistic interventions, before establishing himself as one of the leading dealers of his generation.\n                      \n                      In 1979, he opened the Tony Shafrazi Gallery in New York, championing artists like Jean-Michel Basquiat, Keith Haring, and Kenny Scharf, alongside exhibitions of Picasso, Francis Bacon, Jasper Johns, Carl Andre, and Warhol. Internationally, he advised the Tehran Museum of Contemporary Art in assembling one of the most significant collections of Western modernism outside Europe and the United States.\n                      \n                      Shafrazi first met Zadik Zadikian while the artist was working with Richard Serra, later including him in his historic Tehran exhibition before the 1979 Revolution. Their collaboration forged a lasting connection, and Shafrazi has supported Zadikian’s work over the decades. For this project, he brings unrivaled experience, a global network, and a deep commitment to presenting Armenia on the world stage at the Venice Biennale."], 
null), $amp$components$sections$team_section$tina_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$191$name$$, "Tina Chakarian", $APP.$cljs$cst$775$role$$, "Curator", $cljs$cst$795$social$$, "@tinachakarian", $cljs$cst$796$email$$, "tina.chakarian@armenianpavilion2026.org", $cljs$cst$772$copy$$, "Tina Chakarian is a curator currently living in Boston and Yerevan. \n\nBorn and raised in Beirut, Lebanon, she studied Visual Arts at UCLA and Tufts University. \n\nShe was previously the Development Director at the Armenian Museum of America and an adjunct Professor at several Boston based universities.  Tina serves as a Principal and Creative Director at Chakarian Design Group, LLC, and, co-curates the Midway Artists Studios in Boston. \n\nAs a visual artist, Tina has exhibited a number of installations in the U.S., Lebanon and Armenia, including “Living Utopias” (Yerevan, 2018). \n\nShe has decades of experience in the field of philanthropy, where she combines her skills as an artist and fundraiser, to help support organizations and initiatives closest to her heart. \n"], 
null), $amp$components$sections$team_section$zadik_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$191$name$$, "Zadik Zadikian", $APP.$cljs$cst$775$role$$, "Artist", $cljs$cst$795$social$$, "@zadikzadikian", $cljs$cst$796$email$$, "zadik.zadikian@armenianpavilion2026.org", $cljs$cst$772$copy$$, "Born in 1948 in Yerevan, Soviet Armenia, Zadik Zadikian entered the Art Academy at fifteen and exhibited in Yerevan and Moscow before escaping the Soviet Union at nineteen by swimming across the Arax River in winter. In 1969 he arrived in San Francisco, apprenticing with sculptor Beniamino Bufano, and later moved to New York where he assisted Richard Serra on his first monumental oil-stick wall drawings—one of which was named after him. These encounters with scale, discipline, and radical form became the foundation of his artistic language.\n\nIn 1976, Zadikian gilded his entire 10,000-square-foot studio in industrial gold, an immersive act of transformation that anticipated his project 1000 Bricks Gilded in 24-Karat Gold Leaf (1978). Since then, gold has remained his central medium—at once alchemical and architectural, extravagant yet elemental. His brick-like forms distill structure into essence, revealing permanence through repetition and beauty within order.\n\nReflecting on exile, Zadikian writes: “When I escaped, I lost everything—my family, my country, my world. That void became my canvas. Gold is the witness. Beauty is found within structure. Repetition is the foundation of change.” Now based in Los Angeles, he has recently exhibited at the Brooklyn Museum and Tony Shafrazi’s Gallery Without Walls."], 
null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$team_section$team_member_card$$, "", null, null) : (void 0).call(null, $amp$components$sections$team_section$team_member_card$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$team_section$team_member_card$$, "amp.components.sections.team-section/team-member-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$team_section$team_members$$, "", null, null) : (void 0).call(null, $amp$components$sections$team_section$team_members$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$team_section$team_members$$, "amp.components.sections.team-section/team-members"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$team_section$team_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state zadik-images)(use-touch-enabled)(hooks/use-ref "image-gallery-container-ref")', 
null, null) : (void 0).call(null, $amp$components$sections$team_section$team_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state zadik-images)(use-touch-enabled)(hooks/use-ref "image-gallery-container-ref")', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$team_section$team_section$$, "amp.components.sections.team-section/team-section"));
var $amp$components$sections$video_section$lazy_video_background$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$components$elements$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$video_section$video_section$$, '(use-main-state)(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, 
null) : (void 0).call(null, $amp$components$sections$video_section$video_section$$, '(use-main-state)(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$video_section$video_section$$, "amp.components.sections.video-section/video-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$quote_section$quote_section$$, '(hooks/use-ref "outer-ctx")(hooks/use-ref "text-ref")(hooks/use-state (new (.-timeline gsap) {:paused true}))(use-scroll-trigger outer-ctx)(hooks/use-layout-effect [quote text-ref is-visible?] (let [splitter (when (clojure.core/deref text-ref) (new SplitText (clojure.core/deref text-ref) {:type "words,chars", :charsClass "playable-type-char"})) chars (when splitter (.-chars splitter)) ctx (.context gsap (fn [] (-\x3e tl (.from chars from-transition) (.to chars to-transition) (.timeScale 4))) outer-ctx)] (fn [] (.revert ctx))))(hooks/use-effect [is-active?] (when is-active? (.play tl)))', 
null, null) : (void 0).call(null, $amp$components$sections$quote_section$quote_section$$, '(hooks/use-ref "outer-ctx")(hooks/use-ref "text-ref")(hooks/use-state (new (.-timeline gsap) {:paused true}))(use-scroll-trigger outer-ctx)(hooks/use-layout-effect [quote text-ref is-visible?] (let [splitter (when (clojure.core/deref text-ref) (new SplitText (clojure.core/deref text-ref) {:type "words,chars", :charsClass "playable-type-char"})) chars (when splitter (.-chars splitter)) ctx (.context gsap (fn [] (-\x3e tl (.from chars from-transition) (.to chars to-transition) (.timeScale 4))) outer-ctx)] (fn [] (.revert ctx))))(hooks/use-effect [is-active?] (when is-active? (.play tl)))', 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$quote_section$quote_section$$, "amp.components.sections.quote-section/quote-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$work_overview$work_overview$$, "", null, null) : (void 0).call(null, $amp$components$sections$work_overview$work_overview$$, "", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$work_overview$work_overview$$, "amp.components.sections.work-overview/work-overview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$views$landing_view$landing_view$$, '(hooks/use-ref "container-ref")(use-touch-enabled)', null, null) : (void 0).call(null, $APP.$amp$views$landing_view$landing_view$$, 
'(hooks/use-ref "container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$views$landing_view$landing_view$$, "amp.views.landing-view/landing-view"));
$APP.$module$contents$shadow$loader_mm$$.$setLoaded$();

}).call(this);