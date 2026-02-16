(function(){
'use strict';
var $cljs$core$rand_int$$, $amp$hooks$use_scroll_trigger$use_scroll_trigger$$, $amp$components$sections$teaser_section$teaser_section$$, $amp$hooks$use_window_resize$use_window_size$$, $amp$components$navs$donation_nav$donation_nav$$, $amp$components$navs$logo_nav$logo_nav$$, $amp$components$hover_title$hover_title$$, $amp$components$ui$playable_text$playable_text$$, $amp$components$nav_link$nav_link$$, $amp$components$playful_titles$hero_menu$$, $amp$components$playful_titles$playful_titles$$, $amp$components$elements$lazy_image_gallery$check_column_dimensions$$, 
$amp$components$elements$lazy_image_gallery$aspect_column$$, $amp$components$elements$lazy_image_gallery$find_closest_size$$, $amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$, $amp$components$elements$lazy_image_gallery$image_layer$$, $amp$components$elements$lazy_image_gallery$caption_layer$$, $amp$components$elements$lazy_image_gallery$image_card$$, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $amp$components$sections$about_biennale$title$$, $amp$components$sections$about_biennale$copy_block$$, 
$amp$components$sections$about_biennale$about_biennale_section$$, $amp$components$sections$contact_section$contact_section$$, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, $amp$components$sections$site_footer$site_footer$$, $amp$components$sections$non_profit$title$$, $amp$components$sections$non_profit$copy_block$$, $amp$components$sections$non_profit$non_profit_section$$, $amp$components$sections$team_section$team_member_card$$, $amp$components$sections$team_section$team_members$$, 
$amp$components$sections$team_section$team_section$$, $amp$components$sections$video_section$video_section$$, $amp$components$sections$quote_section$quote_section$$, $amp$components$sections$work_overview$work_overview$$, $cljs$cst$488$images$$, $cljs$cst$501$from$$, $cljs$cst$489$is_visible_QMARK_$$, $cljs$cst$481$on_click_handler$$, $cljs$cst$493$force_on_QMARK_$$, $cljs$cst$490$image_gallery_container_ref$$, $cljs$cst$492$gradient_class$$, $cljs$cst$486$target_ref$$, $cljs$cst$474$boxDecorationBreak$$, 
$cljs$cst$484$writing$$, $cljs$cst$497$flash_images_handler$$, $cljs$cst$487$other$$, $cljs$cst$483$on_mouse_out_handler$$, $cljs$cst$475$WebkitBoxDecorationBreak$$, $cljs$cst$482$on_mouse_over_handler$$, $cljs$cst$485$click$$, $cljs$cst$495$social$$, $cljs$cst$500$quote$$, $cljs$cst$478$hover_title_ref$$, $cljs$cst$477$sm$$, $cljs$cst$496$email$$, $cljs$cst$502$to$$, $cljs$cst$480$is_playing_QMARK_$$, $cljs$cst$491$copy$$;
$cljs$core$rand_int$$ = function($n$jscomp$162$$) {
  return Math.floor(Math.random() * $n$jscomp$162$$);
};
$amp$hooks$use_scroll_trigger$use_scroll_trigger$$ = function($var_args$jscomp$416$$) {
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
$amp$components$sections$teaser_section$teaser_section$$ = function($G__147892_props__41675__auto__$jscomp$18_vec__147882$$) {
  $APP.$helix$core$extract_cljs_props$$($G__147892_props__41675__auto__$jscomp$18_vec__147882$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ref$$ = $APP.$helix$hooks$use_ref$$("outer-ref");
  $G__147892_props__41675__auto__$jscomp$18_vec__147882$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$382$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__147892_props__41675__auto__$jscomp$18_vec__147882$$, 0, null);
  var $is_active_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__147892_props__41675__auto__$jscomp$18_vec__147882$$, 1, null), $clone_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$474$boxDecorationBreak$$, "clone", $cljs$cst$475$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__147892_props__41675__auto__$jscomp$18_vec__147882$$ = function() {
    return {id:"teaser", ref:$outer_ref$$, className:"relative w-full min-h-screen overflow-hidden", children:[function() {
      var $G__147900_G__147910$jscomp$inline_3438$$ = {"playback-id":"Izp5007Abkc00t4Ubns7pAiqq2zG7JIp01tvAoaVOny7O00", "should-play?":$is_active_QMARK_$jscomp$4$$};
      $G__147900_G__147910$jscomp$inline_3438$$ = {className:"absolute inset-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$teaser_section$lazy_video$$, $G__147900_G__147910$jscomp$inline_3438$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$teaser_section$lazy_video$$, $G__147900_G__147910$jscomp$inline_3438$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__147900_G__147910$jscomp$inline_3438$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__147900_G__147910$jscomp$inline_3438$$);
    }(), function() {
      var $G__147919$$ = function() {
        return {className:"relative z-10 flex flex-col justify-center\n               min-h-screen px-6 sm:px-12 lg:px-20\n               py-16 sm:py-24\n               max-w-4xl", children:[function() {
          var $G__147923_G__147930$jscomp$inline_3441$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/70 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"The Studio"};
          $G__147923_G__147930$jscomp$inline_3441$$ = {className:"font-mono font-extrabold uppercase tracking-wider\n                leading-relaxed text-4xl sm:text-5xl lg:text-6xl text-white mb-6", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__147923_G__147930$jscomp$inline_3441$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__147923_G__147930$jscomp$inline_3441$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__147923_G__147930$jscomp$inline_3441$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__147923_G__147930$jscomp$inline_3441$$);
        }(), function() {
          var $G__147935_G__147939$jscomp$inline_3444$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/50 px-3 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"A living studio at the heart of the Venice Biennale"};
          $G__147935_G__147939$jscomp$inline_3444$$ = {className:"font-mono text-sm sm:text-base uppercase tracking-[0.15em]\n                leading-loose text-white/90 mb-8 max-w-xl", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__147935_G__147939$jscomp$inline_3444$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__147935_G__147939$jscomp$inline_3444$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__147935_G__147939$jscomp$inline_3444$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__147935_G__147939$jscomp$inline_3444$$);
        }(), function() {
          var $G__147943_G__147947$jscomp$inline_3874_G__147951$jscomp$inline_3875$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"Over six months, sculptor Zadik Zadikian and his team will occupy the Arsenale Militare—casting, assembling, and building in real time. Nothing is fixed. Nothing is final. The work is the making itself."};
          $G__147943_G__147947$jscomp$inline_3874_G__147951$jscomp$inline_3875$$ = {className:"font-mono text-xs sm:text-sm leading-relaxed text-white/80", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__147943_G__147947$jscomp$inline_3874_G__147951$jscomp$inline_3875$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__147943_G__147947$jscomp$inline_3874_G__147951$jscomp$inline_3875$$)};
          $G__147943_G__147947$jscomp$inline_3874_G__147951$jscomp$inline_3875$$ = {className:"space-y-3 mb-10 max-w-lg", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__147943_G__147947$jscomp$inline_3874_G__147951$jscomp$inline_3875$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__147943_G__147947$jscomp$inline_3874_G__147951$jscomp$inline_3875$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__147943_G__147947$jscomp$inline_3874_G__147951$jscomp$inline_3875$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__147943_G__147947$jscomp$inline_3874_G__147951$jscomp$inline_3875$$);
        }(), function() {
          var $G__147955$$ = function() {
            return {className:"grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10", children:[function() {
              var $G__147959$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__147963$$ = {className:"font-mono font-semibold text-[10px] uppercase tracking-[0.2em] text-amber-300/70", children:"Opening"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__147963$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__147963$$);
                }(), function() {
                  var $G__147968_G__147972$jscomp$inline_3450$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"9 May – 22 November 2026"};
                  $G__147968_G__147972$jscomp$inline_3450$$ = {className:"font-mono text-xs sm:text-sm text-white/90", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__147968_G__147972$jscomp$inline_3450$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__147968_G__147972$jscomp$inline_3450$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__147968_G__147972$jscomp$inline_3450$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__147968_G__147972$jscomp$inline_3450$$);
                }(), function() {
                  var $G__147976$$ = {className:"font-mono font-medium text-[9px] text-amber-200/40 mt-1", children:"Preview: 6, 7, 8 May"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__147976$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__147976$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__147959$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__147959$$);
            }(), function() {
              var $G__147980$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__147984$$ = {className:"font-mono font-semibold text-[10px] uppercase tracking-[0.2em] text-amber-300/70", children:"Venue"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__147984$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__147984$$);
                }(), function() {
                  var $G__147988_G__147992$jscomp$inline_3453$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"Arsenale Militare, Venice"};
                  $G__147988_G__147992$jscomp$inline_3453$$ = {href:"https://maps.app.goo.gl/QvYkqwN1Bv7L9VDn7", target:"_blank", rel:"noopener noreferrer", className:"font-mono text-xs sm:text-sm text-white/90 hover:text-white\n                      underline underline-offset-4 decoration-white/30 hover:decoration-white/60\n                      transition-colors block whitespace-nowrap", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", 
                  $G__147988_G__147992$jscomp$inline_3453$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__147988_G__147992$jscomp$inline_3453$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__147988_G__147992$jscomp$inline_3453$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__147988_G__147992$jscomp$inline_3453$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__147980$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__147980$$);
            }(), function() {
              var $G__147996$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__148000$$ = {className:"font-mono font-semibold text-[10px] uppercase tracking-[0.2em] text-amber-300/70", children:"Pavilion"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__148000$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__148000$$);
                }(), function() {
                  var $G__148004_G__148008$jscomp$inline_3456$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"Republic of Armenia"};
                  $G__148004_G__148008$jscomp$inline_3456$$ = {className:"font-mono text-xs sm:text-sm text-white/90", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__148004_G__148008$jscomp$inline_3456$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__148004_G__148008$jscomp$inline_3456$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__148004_G__148008$jscomp$inline_3456$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__148004_G__148008$jscomp$inline_3456$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__147996$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__147996$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__147955$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__147955$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__147919$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__147919$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__147892_props__41675__auto__$jscomp$18_vec__147882$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__147892_props__41675__auto__$jscomp$18_vec__147882$$);
};
$amp$hooks$use_window_resize$use_window_size$$ = function() {
  var $G__51951_52001_vec__51941$$ = $APP.$helix$hooks$use_state$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$406$width$$, window.innerWidth, $APP.$cljs$cst$407$height$$, window.innerHeight], null)), $dimensions$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51951_52001_vec__51941$$, 0, null), $set_dimensions_BANG_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51951_52001_vec__51941$$, 1, null), $resize_handler$jscomp$1$$ = 
  function() {
    function $G__51997$$($var_args$jscomp$438$$) {
      var $G__51999__i__$jscomp$373$$ = null;
      if (arguments.length > 0) {
        $G__51999__i__$jscomp$373$$ = 0;
        for (var $G__51999__a$$ = Array(arguments.length - 0); $G__51999__i__$jscomp$373$$ < $G__51999__a$$.length;) {
          $G__51999__a$$[$G__51999__i__$jscomp$373$$] = arguments[$G__51999__i__$jscomp$373$$ + 0], ++$G__51999__i__$jscomp$373$$;
        }
        $G__51999__i__$jscomp$373$$ = new $APP.$cljs$core$IndexedSeq$$($G__51999__a$$, 0, null);
      }
      return $G__51997__delegate$$.call(this, $G__51999__i__$jscomp$373$$);
    }
    function $G__51997__delegate$$() {
      var $G__51950$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$406$width$$, window.innerWidth, $APP.$cljs$cst$407$height$$, window.innerHeight], null);
      return $set_dimensions_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_dimensions_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__51950$$) : $set_dimensions_BANG_$jscomp$1$$.call(null, $G__51950$$);
    }
    $G__51997$$.$cljs$lang$maxFixedArity$ = 0;
    $G__51997$$.$cljs$lang$applyTo$ = function($_$jscomp$374_arglist__52000$$) {
      $_$jscomp$374_arglist__52000$$ = $APP.$cljs$core$seq$$($_$jscomp$374_arglist__52000$$);
      return $G__51997__delegate$$($_$jscomp$374_arglist__52000$$);
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
$amp$components$navs$donation_nav$donation_nav$$ = function($G__148216_G__148236_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$19$$) {
  $APP.$helix$core$extract_cljs_props$$($G__148216_G__148236_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$19$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__148216_G__148236_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$19$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  var $dimensions$jscomp$6$$ = $amp$hooks$use_window_resize$use_window_size$$(), $is_active_QMARK_$jscomp$5_vec__148200$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$356$start$$, function() {
    return window.innerHeight;
  }, $APP.$cljs$cst$382$end$$, "1000000px", $APP.$cljs$cst$384$markers_QMARK_$$, !1, $APP.$cljs$cst$385$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$5_vec__148200$$, 0, null);
  $is_active_QMARK_$jscomp$5_vec__148200$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$5_vec__148200$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$388$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$427$opacity$$, 1], null), $APP.$cljs$cst$389$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$427$opacity$$, 0.7], null)]));
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$386$target$$, $comp_ref$$, $APP.$cljs$cst$392$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$466$y$$, 0], null), $APP.$cljs$cst$394$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$466$y$$, -$APP.$cljs$cst$407$height$$.$cljs$core$IFn$_invoke$arity$1$($dimensions$jscomp$6$$)], null), $APP.$cljs$cst$390$is_on_QMARK_$$, 
  $is_active_QMARK_$jscomp$5_vec__148200$$], null));
  if ($APP.$cljs$core$truth_$$($G__148216_G__148236_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$19$$)) {
    return $G__148216_G__148236_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$19$$ = function() {
      return {ref:$comp_ref$$, className:"fixed\n                      opacity-90\n                      z-40\n                      text-xl\n                      mr-8\n                      mt-4\n                      top-0\n                      right-0", children:function() {
        var $G__148224$$ = function() {
          return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
            return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
          }};
        }();
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__148224$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__148224$$);
      }()};
    }(), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148216_G__148236_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$19$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__148216_G__148236_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$19$$);
  }
  $G__148216_G__148236_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$19$$ = function() {
    return {ref:$comp_ref$$, className:"fixed \n                          opacity-90\n                          z-40\n                          text-xl\n                      w-full\n                          ", children:function() {
      var $G__148243$$ = function() {
        return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
          return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__148243$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__148243$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148216_G__148236_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$19$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__148216_G__148236_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$19$$);
};
$amp$components$navs$logo_nav$logo_nav$$ = function($G__148048_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$20_vec__148044$$) {
  $APP.$helix$core$extract_cljs_props$$($G__148048_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$20_vec__148044$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__148048_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$20_vec__148044$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$356$start$$, function() {
    return window.innerHeight - window.innerHeight / 8;
  }, $APP.$cljs$cst$382$end$$, "1000000px", $APP.$cljs$cst$384$markers_QMARK_$$, !1, $APP.$cljs$cst$385$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__148048_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$20_vec__148044$$, 0, null);
  $G__148048_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$20_vec__148044$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__148048_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$20_vec__148044$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$388$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$427$opacity$$, 1], null), $APP.$cljs$cst$389$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$427$opacity$$, 0.7], null)]));
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$386$target$$, $comp_ref$jscomp$1$$, $APP.$cljs$cst$392$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$466$y$$, 0], null), $APP.$cljs$cst$394$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$466$y$$, -250], null), $APP.$cljs$cst$390$is_on_QMARK_$$, $G__148048_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$20_vec__148044$$], 
  null));
  $G__148048_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$20_vec__148044$$ = function() {
    return {ref:$comp_ref$jscomp$1$$, className:"fixed\n                    opacity-90\n                    z-30\n                    ml-4\n                    mt-4\n                    flex flex-col items-start gap-3", children:function() {
      var $G__148052$$ = function() {
        return {className:"w-1/5 lg:w-32", children:[function() {
          var $G__148056$$ = function() {
            return {className:"cursor-pointer", onClick:function() {
              return window.open("https://www.labiennale.org/en/art/2026", "_blank");
            }, children:function() {
              var $G__148060$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"invert dark:invert-0"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__148060$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__148060$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148056$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__148056$$);
        }(), function() {
          var $G__148065$$ = function() {
            return {className:"mt-4", children:function() {
              var $G__148069$$ = function() {
                return {title:"Donate Now", "additional-classes":"w-full justify-center", size:$cljs$cst$477$sm$$, "on-click":function() {
                  return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                }};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__148069$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__148069$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148065$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__148065$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148052$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__148052$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148048_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$20_vec__148044$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__148048_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$20_vec__148044$$);
};
$amp$components$hover_title$hover_title$$ = function($G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$18_vec__52048$$, $G__52057$jscomp$inline_3878_G__52061$jscomp$inline_3879_JSCompiler_inline_result$jscomp$inline_3877_maybe_ref__41910__auto__$jscomp$18_title$jscomp$18$$) {
  $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$18_vec__52048$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$18_vec__52048$$), $G__52057$jscomp$inline_3878_G__52061$jscomp$inline_3879_JSCompiler_inline_result$jscomp$inline_3877_maybe_ref__41910__auto__$jscomp$18_title$jscomp$18$$], null);
  $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$18_vec__52048$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$18_vec__52048$$, 0, null);
  $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$18_vec__52048$$ = $APP.$cljs$core$__destructure_map$$($G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$18_vec__52048$$);
  $G__52057$jscomp$inline_3878_G__52061$jscomp$inline_3879_JSCompiler_inline_result$jscomp$inline_3877_maybe_ref__41910__auto__$jscomp$18_title$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$18_vec__52048$$, $APP.$cljs$cst$373$title$$);
  $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$18_vec__52048$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$18_vec__52048$$, $cljs$cst$478$hover_title_ref$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__52057$jscomp$inline_3878_G__52061$jscomp$inline_3879_JSCompiler_inline_result$jscomp$inline_3877_maybe_ref__41910__auto__$jscomp$18_title$jscomp$18$$ = {className:"flash-text\n                                 font-fira-code\n                                 font-bold", textAnchor:"start", alignmentBaseline:"middle", y:"50%", x:"50%", children:$G__52057$jscomp$inline_3878_G__52061$jscomp$inline_3879_JSCompiler_inline_result$jscomp$inline_3877_maybe_ref__41910__auto__$jscomp$18_title$jscomp$18$$};
  $G__52057$jscomp$inline_3878_G__52061$jscomp$inline_3879_JSCompiler_inline_result$jscomp$inline_3877_maybe_ref__41910__auto__$jscomp$18_title$jscomp$18$$ = {className:"justify-self-start", height:"100%", width:"100%", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("text", $G__52057$jscomp$inline_3878_G__52061$jscomp$inline_3879_JSCompiler_inline_result$jscomp$inline_3877_maybe_ref__41910__auto__$jscomp$18_title$jscomp$18$$) : 
  $APP.$helix$core$jsx$$.call(null, "text", $G__52057$jscomp$inline_3878_G__52061$jscomp$inline_3879_JSCompiler_inline_result$jscomp$inline_3877_maybe_ref__41910__auto__$jscomp$18_title$jscomp$18$$)};
  $G__52057$jscomp$inline_3878_G__52061$jscomp$inline_3879_JSCompiler_inline_result$jscomp$inline_3877_maybe_ref__41910__auto__$jscomp$18_title$jscomp$18$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__52057$jscomp$inline_3878_G__52061$jscomp$inline_3879_JSCompiler_inline_result$jscomp$inline_3877_maybe_ref__41910__auto__$jscomp$18_title$jscomp$18$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__52057$jscomp$inline_3878_G__52061$jscomp$inline_3879_JSCompiler_inline_result$jscomp$inline_3877_maybe_ref__41910__auto__$jscomp$18_title$jscomp$18$$);
  $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$18_vec__52048$$ = {className:"absolute \n                  massive-title\n                  h-full\n                  w-full\n                  pointer-events-none", ref:$G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$18_vec__52048$$, children:$G__52057$jscomp$inline_3878_G__52061$jscomp$inline_3879_JSCompiler_inline_result$jscomp$inline_3877_maybe_ref__41910__auto__$jscomp$18_title$jscomp$18$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$18_vec__52048$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52053_hover_title_ref_map__52051_map__52051__$1_props__41909__auto__$jscomp$18_vec__52048$$);
};
$amp$components$ui$playable_text$playable_text$$ = function($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$19$$) {
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$), $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$19$$], null);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$, 0, null);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$ = $APP.$cljs$core$__destructure_map$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$);
  var $text$jscomp$15$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$, $APP.$cljs$cst$479$text$$), $is_playing_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$, $cljs$cst$480$is_playing_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $background_ref$$ = $APP.$helix$hooks$use_ref$$("background-ref"), $text_ref$$ = $APP.$helix$hooks$use_ref$$("text-ref");
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$ = $APP.$helix$hooks$use_state$$(new $APP.$module$node_modules$gsap$dist$gsap$$.gsap.timeline({paused:!0}));
  var $tl$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$, 1, null);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $splitter$$ = $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($text_ref$$)) ? new $APP.$module$node_modules$gsap$SplitText$$.SplitText($APP.$cljs$core$_deref$$($text_ref$$), {type:"words,chars", charsClass:"playable-type-char"}) : null, $chars$jscomp$2$$ = $APP.$cljs$core$truth_$$($splitter$$) ? $splitter$$.chars : null, $ctx$$ = $APP.$module$node_modules$gsap$dist$gsap$$.gsap.context(function() {
      return $tl$jscomp$1$$.from($APP.$cljs$core$_deref$$($background_ref$$), {width:"0", duration:0.15, ease:"expo.inOut"}).to($APP.$cljs$core$_deref$$($background_ref$$), {width:"100%", duration:0.15, ease:"expo.inOut"}).from($chars$jscomp$2$$, {opacity:0, duration:0.15, ease:"expo.inOut", stagger:0.025}).to($chars$jscomp$2$$, {opacity:1, duration:0.15, ease:"expo.inOut", stagger:0.025});
    }, $outer_ctx$jscomp$1$$);
    return function() {
      return $ctx$$.revert();
    };
  });
  $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$19$$ = [$text$jscomp$15$$, $text_ref$$, $is_playing_QMARK_$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$19$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$, 
  $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$19$$);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($is_playing_QMARK_$$) ? $tl$jscomp$1$$.play() : $tl$jscomp$1$$.reverse();
  });
  $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$19$$ = [$is_playing_QMARK_$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$19$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$19$$);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$ = function() {
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
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$19_vec__52070_vec__52074$$);
};
$amp$components$nav_link$nav_link$$ = function($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$, $maybe_ref__41910__auto__$jscomp$20$$) {
  $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$), $maybe_ref__41910__auto__$jscomp$20$$], null);
  $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$, 0, null);
  $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$ = $APP.$cljs$core$__destructure_map$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$);
  var $on_click_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$, $cljs$cst$481$on_click_handler$$), $on_mouse_over_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$, $cljs$cst$482$on_mouse_over_handler$$), $on_mouse_out_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$, 
  $cljs$cst$483$on_mouse_out_handler$$), $title$jscomp$19$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$, $APP.$cljs$cst$373$title$$), $writing$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$, $cljs$cst$484$writing$$), $section_id$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$, 
  $APP.$cljs$cst$405$section_id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$15$$ = $APP.$helix$hooks$use_ref$$("link-ref");
  $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$ = $APP.$helix$hooks$use_state$$(!1);
  var $is_hovering_QMARK_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$, 0, null), $set_is_hovering_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$, 1, null);
  $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$ = function() {
    return {children:[function() {
      var $G__52125$$ = function() {
        return {ref:$ref$jscomp$15$$, className:"\n                  hero-nav-links\n                  cursor-pointer\n                  font-fira-code\n                  font-medium\n                  text-6xl", onMouseOver:function() {
          $APP.$cljs$core$tap_GT_$$("mouse over");
          $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $set_is_hovering_BANG_$$.call(null, !0);
          var $G__52129$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$405$section_id$$, $section_id$jscomp$2$$], null);
          return $on_mouse_over_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_mouse_over_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__52129$$) : $on_mouse_over_handler$$.call(null, $G__52129$$);
        }, onMouseOut:function() {
          $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(!1) : $set_is_hovering_BANG_$$.call(null, !1);
          var $G__52130$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$405$section_id$$, $section_id$jscomp$2$$], null);
          return $on_mouse_out_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_mouse_out_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__52130$$) : $on_mouse_out_handler$$.call(null, $G__52130$$);
        }, onClick:function() {
          var $G__52134$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$405$section_id$$, $section_id$jscomp$2$$], null);
          return $on_click_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_click_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__52134$$) : $on_click_handler$$.call(null, $G__52134$$);
        }, children:$title$jscomp$19$$};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("a", $G__52125$$, $section_id$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__52125$$, $section_id$jscomp$2$$);
    }(), function() {
      var $G__52136_G__52140$jscomp$inline_3462$$ = {text:$writing$$, "is-playing?":$is_hovering_QMARK_$$};
      $G__52136_G__52140$jscomp$inline_3462$$ = {className:"whitespace-nowrap\n                                                absolute\n                                                translate-x-full\n                                                bottom-2\n                                                \n                                                self-baseline\n                                                right-0\n                                                 pl-6\n                                                ", 
      children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$ui$playable_text$playable_text$$, $G__52136_G__52140$jscomp$inline_3462$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$ui$playable_text$playable_text$$, $G__52136_G__52140$jscomp$inline_3462$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52136_G__52140$jscomp$inline_3462$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52136_G__52140$jscomp$inline_3462$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52121_map__52113_map__52113__$1_props__41909__auto__$jscomp$20_vec__52110_vec__52117$$);
};
$amp$components$playful_titles$hero_menu$$ = function($G__148618_map__148616_map__148616__$1_props__41675__auto__$jscomp$21_vec__148613$$, $maybe_ref__41676__auto__$jscomp$21$$) {
  $G__148618_map__148616_map__148616__$1_props__41675__auto__$jscomp$21_vec__148613$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__148618_map__148616_map__148616__$1_props__41675__auto__$jscomp$21_vec__148613$$), $maybe_ref__41676__auto__$jscomp$21$$], null);
  $G__148618_map__148616_map__148616__$1_props__41675__auto__$jscomp$21_vec__148613$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__148618_map__148616_map__148616__$1_props__41675__auto__$jscomp$21_vec__148613$$, 0, null);
  $G__148618_map__148616_map__148616__$1_props__41675__auto__$jscomp$21_vec__148613$$ = $APP.$cljs$core$__destructure_map$$($G__148618_map__148616_map__148616__$1_props__41675__auto__$jscomp$21_vec__148613$$);
  var $data$jscomp$134$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__148618_map__148616_map__148616__$1_props__41675__auto__$jscomp$21_vec__148613$$, $APP.$cljs$cst$28$data$$), $over$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__148618_map__148616_map__148616__$1_props__41675__auto__$jscomp$21_vec__148613$$, $APP.$cljs$cst$388$over$$), $out$jscomp$15$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__148618_map__148616_map__148616__$1_props__41675__auto__$jscomp$21_vec__148613$$, 
  $APP.$cljs$cst$389$out$$), $click$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__148618_map__148616_map__148616__$1_props__41675__auto__$jscomp$21_vec__148613$$, $cljs$cst$485$click$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__148618_map__148616_map__148616__$1_props__41675__auto__$jscomp$21_vec__148613$$ = function() {
    return {className:"absolute \n                  bg-white/30\n                  font-fira-code\n                  pointer-events-auto", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__148626_G__148631$jscomp$inline_3882_G__148636$jscomp$inline_3883_p__148621_writing$jscomp$1$$) {
      var $id$jscomp$69$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__148626_G__148631$jscomp$inline_3882_G__148636$jscomp$inline_3883_p__148621_writing$jscomp$1$$, 0, null);
      $G__148626_G__148631$jscomp$inline_3882_G__148636$jscomp$inline_3883_p__148621_writing$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__148626_G__148631$jscomp$inline_3882_G__148636$jscomp$inline_3883_p__148621_writing$jscomp$1$$, 1, null);
      $G__148626_G__148631$jscomp$inline_3882_G__148636$jscomp$inline_3883_p__148621_writing$jscomp$1$$ = {title:$id$jscomp$69$$, writing:$G__148626_G__148631$jscomp$inline_3882_G__148636$jscomp$inline_3883_p__148621_writing$jscomp$1$$, "section-id":$id$jscomp$69$$, "on-mouse-over-handler":$over$jscomp$1$$, "on-mouse-out-handler":$out$jscomp$15$$, "on-click-handler":$click$$};
      $G__148626_G__148631$jscomp$inline_3882_G__148636$jscomp$inline_3883_p__148621_writing$jscomp$1$$ = {className:"relative flex", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$nav_link$nav_link$$, $G__148626_G__148631$jscomp$inline_3882_G__148636$jscomp$inline_3883_p__148621_writing$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$nav_link$nav_link$$, $G__148626_G__148631$jscomp$inline_3882_G__148636$jscomp$inline_3883_p__148621_writing$jscomp$1$$)};
      $G__148626_G__148631$jscomp$inline_3882_G__148636$jscomp$inline_3883_p__148621_writing$jscomp$1$$ = {className:"flex", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148626_G__148631$jscomp$inline_3882_G__148636$jscomp$inline_3883_p__148621_writing$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__148626_G__148631$jscomp$inline_3882_G__148636$jscomp$inline_3883_p__148621_writing$jscomp$1$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__148626_G__148631$jscomp$inline_3882_G__148636$jscomp$inline_3883_p__148621_writing$jscomp$1$$, $id$jscomp$69$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__148626_G__148631$jscomp$inline_3882_G__148636$jscomp$inline_3883_p__148621_writing$jscomp$1$$, $id$jscomp$69$$);
    }, $data$jscomp$134$$)};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148618_map__148616_map__148616__$1_props__41675__auto__$jscomp$21_vec__148613$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__148618_map__148616_map__148616__$1_props__41675__auto__$jscomp$21_vec__148613$$);
};
$amp$components$playful_titles$playful_titles$$ = function($G__148764_props__41675__auto__$jscomp$22_vec__148750_vec__148753$$) {
  $APP.$helix$core$extract_cljs_props$$($G__148764_props__41675__auto__$jscomp$22_vec__148750_vec__148753$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__148764_props__41675__auto__$jscomp$22_vec__148750_vec__148753$$ = $APP.$amp$providers$main_provider$use_main_state$$();
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__148764_props__41675__auto__$jscomp$22_vec__148750_vec__148753$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__148764_props__41675__auto__$jscomp$22_vec__148750_vec__148753$$, 1, null);
  var $hover_title_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("hover-title-ref");
  $G__148764_props__41675__auto__$jscomp$22_vec__148750_vec__148753$$ = $APP.$helix$hooks$use_state$$(null);
  var $current_section$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__148764_props__41675__auto__$jscomp$22_vec__148750_vec__148753$$, 0, null), $set_current_section_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__148764_props__41675__auto__$jscomp$22_vec__148750_vec__148753$$, 1, null), $nav_mouse_over_handler$$ = function() {
    function $G__148756$$($map__148760__$1_p__148758_section_id$jscomp$3$$) {
      $map__148760__$1_p__148758_section_id$jscomp$3$$ = $APP.$cljs$core$__destructure_map$$($map__148760__$1_p__148758_section_id$jscomp$3$$);
      $map__148760__$1_p__148758_section_id$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__148760__$1_p__148758_section_id$jscomp$3$$, $APP.$cljs$cst$405$section_id$$);
      $set_current_section_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_current_section_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($map__148760__$1_p__148758_section_id$jscomp$3$$) : $set_current_section_BANG_$$.call(null, $map__148760__$1_p__148758_section_id$jscomp$3$$);
      return $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to($APP.$cljs$core$_deref$$($hover_title_ref$jscomp$1$$), {opacity:0.8, duration:0.2});
    }
    var $G__148757$$ = [$hover_title_ref$jscomp$1$$];
    return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__148756$$, $G__148757$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__148756$$, $G__148757$$);
  }(), $nav_mouse_out_handler$$ = function() {
    function $G__148761$$() {
      return $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to($APP.$cljs$core$_deref$$($hover_title_ref$jscomp$1$$), {opacity:0, duration:0.2});
    }
    var $G__148762$$ = [$hover_title_ref$jscomp$1$$];
    return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__148761$$, $G__148762$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__148761$$, $G__148762$$);
  }();
  $G__148764_props__41675__auto__$jscomp$22_vec__148750_vec__148753$$ = function() {
    return {className:"relative\n                    w-full \n                    h-full \n                    \n                    ", children:[function() {
      var $G__148768$$ = function() {
        return {className:"relative\n                    w-full \n                    h-full \n                    flex\n                    items-center\n                    justify-items-center\n                    justify-center", children:[function() {
          var $G__148772$$ = {"hover-title-ref":$hover_title_ref$jscomp$1$$, title:$current_section$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$hover_title$hover_title$$, $G__148772$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$hover_title$hover_title$$, $G__148772$$);
        }(), function() {
          var $G__148776$$ = {data:$amp$components$playful_titles$titles$$, over:$nav_mouse_over_handler$$, out:$nav_mouse_out_handler$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$playful_titles$hero_menu$$, $G__148776$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$playful_titles$hero_menu$$, $G__148776$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148768$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__148768$$);
    }(), function() {
      var $G__148780$$ = {className:"absolute\n                                     bottom-10\n                           w-full\n                           flex\n                           justify-center\n                           "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148780$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__148780$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148764_props__41675__auto__$jscomp$22_vec__148750_vec__148753$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__148764_props__41675__auto__$jscomp$22_vec__148750_vec__148753$$);
};
$amp$components$elements$lazy_image_gallery$check_column_dimensions$$ = function($columns$jscomp$3$$) {
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(function($total_height$$, $dimensions$jscomp$7$$) {
    return $total_height$$ + $APP.$cljs$core$second$$($dimensions$jscomp$7$$);
  }, 0, $columns$jscomp$3$$);
};
$amp$components$elements$lazy_image_gallery$aspect_column$$ = function($width$jscomp$32$$, $height$jscomp$29$$) {
  var $initial_images$$ = function() {
    for (var $G__149148_accumulated_height$$ = 0, $G__149149_result$jscomp$116$$ = $APP.$cljs$core$PersistentVector$EMPTY$$;;) {
      if ($G__149148_accumulated_height$$ >= $height$jscomp$29$$) {
        return $G__149149_result$jscomp$116$$;
      }
      var $aspect_ratio$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$components$elements$lazy_image_gallery$aspect_ratios$$, $cljs$core$rand_int$$($APP.$cljs$core$count$$($amp$components$elements$lazy_image_gallery$aspect_ratios$$))), $img_height$$ = Math.round($width$jscomp$32$$ * $aspect_ratio$jscomp$5$$);
      $G__149148_accumulated_height$$ += $img_height$$;
      $G__149149_result$jscomp$116$$ = $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__149149_result$jscomp$116$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$width$jscomp$32$$, $img_height$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$448$aspect_ratio$$, $aspect_ratio$jscomp$5$$], null)));
    }
  }(), $total_height$jscomp$1$$ = $amp$components$elements$lazy_image_gallery$check_column_dimensions$$($initial_images$$), $scale_factor$jscomp$1$$ = $height$jscomp$29$$ / $total_height$jscomp$1$$;
  return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($dimensions$jscomp$8$$) {
    var $w$jscomp$16$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$8$$, 0, null), $h$jscomp$98$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$8$$, 1, null);
    return $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$w$jscomp$16$$, $h$jscomp$98$$ * $scale_factor$jscomp$1$$], null), $APP.$cljs$core$meta$$($dimensions$jscomp$8$$));
  }, $initial_images$$);
};
$amp$components$elements$lazy_image_gallery$find_closest_size$$ = function($target_width$jscomp$1$$, $target_height$jscomp$1$$) {
  var $sizes$jscomp$1$$ = $APP.$cljs$core$vec$$($APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$val$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$components$elements$lazy_image_gallery$image_sizes$$])));
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(function($closest$$, $h$jscomp$99_p__148833$$) {
    var $w$jscomp$17$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($h$jscomp$99_p__148833$$, 0, null);
    $h$jscomp$99_p__148833$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($h$jscomp$99_p__148833$$, 1, null);
    var $closest_diff$$ = Math.abs($APP.$cljs$core$first$$($closest$$) - $target_width$jscomp$1$$) + Math.abs($APP.$cljs$core$second$$($closest$$) - $target_height$jscomp$1$$);
    return Math.abs($w$jscomp$17$$ - $target_width$jscomp$1$$) + Math.abs($h$jscomp$99_p__148833$$ - $target_height$jscomp$1$$) < $closest_diff$$ ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$w$jscomp$17$$, $h$jscomp$99_p__148833$$], null) : $closest$$;
  }, $APP.$cljs$core$first$$($sizes$jscomp$1$$), $sizes$jscomp$1$$);
};
$amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$ = function($width$jscomp$33$$, $height$jscomp$30$$) {
  var $column_width$$ = Math.round($width$jscomp$33$$ / 3);
  return $APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(function() {
    return $amp$components$elements$lazy_image_gallery$aspect_column$$($column_width$$, $height$jscomp$30$$);
  }, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$core$range$cljs$0core$0IFn$0_invoke$0arity$03$$(3)]));
};
$amp$components$elements$lazy_image_gallery$image_layer$$ = function($G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$, $G__148998_149151_maybe_ref__41676__auto__$jscomp$23$$) {
  $G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$), $G__148998_149151_maybe_ref__41676__auto__$jscomp$23$$], null);
  $G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$, 0, null);
  $G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$ = $APP.$cljs$core$__destructure_map$$($G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$);
  var $img_src$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$, $APP.$cljs$cst$425$img_src$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $base_ref$$ = $APP.$helix$hooks$use_ref$$("base-ref"), $transition_ref$$ = $APP.$helix$hooks$use_ref$$("trans-ref");
  $G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$ = $APP.$helix$hooks$use_state$$(null);
  var $current_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$, 0, null), $set_current_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$, 1, null);
  $G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$ = $APP.$helix$hooks$use_state$$(null);
  var $prev_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$, 0, null), $set_prev_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$, 1, null);
  $G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($current_src$$, $img_src$jscomp$5$$) ? null : $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$($current_src$$) : $set_prev_src$$.call(null, $current_src$$);
  });
  $G__148998_149151_maybe_ref__41676__auto__$jscomp$23$$ = [$img_src$jscomp$5$$, $current_src$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$, $G__148998_149151_maybe_ref__41676__auto__$jscomp$23$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$, 
  $G__148998_149151_maybe_ref__41676__auto__$jscomp$23$$);
  $G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$ = function() {
    return {className:"z-10", children:[$APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($prev_src$$) ? $prev_src$$ : $current_src$$) ? function() {
      var $G__149041$$ = function() {
        return {ref:$base_ref$$, src:$APP.$cljs$core$truth_$$($prev_src$$) ? $prev_src$$ : $current_src$$, className:"absolute\n                               z-10\n                               w-full\n                               h-full\n                               object-cover\n                               overflow-hidden", onLoad:function() {
          return $APP.$amp$utils$gsap$to_ref$$($transition_ref$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$427$opacity$$, 0, $APP.$cljs$cst$426$duration$$, 0], null));
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("img", $G__149041$$, "base") : $APP.$helix$core$jsx$$.call(null, "img", $G__149041$$, "base");
    }() : null, $APP.$cljs$core$truth_$$(function() {
      var $or__5142__auto__$jscomp$125$$ = $prev_src$$ == null;
      return $or__5142__auto__$jscomp$125$$ ? $or__5142__auto__$jscomp$125$$ : $img_src$jscomp$5$$;
    }()) ? function() {
      var $G__149060$$ = function() {
        return {src:$img_src$jscomp$5$$, ref:$transition_ref$$, className:"absolute\n                             z-20\n                             w-full\n                             h-full\n                             object-cover\n                             overflow-hidden", style:{opacity:$APP.$helix$impl$props$__GT_js$$(0)}, onLoad:function() {
          return $APP.$amp$utils$gsap$to_ref$$($transition_ref$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$427$opacity$$, 1, $APP.$cljs$cst$426$duration$$, 1, $APP.$cljs$cst$396$onComplete$$, function() {
            $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$(null) : $set_prev_src$$.call(null, null);
            return $set_current_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_current_src$$.$cljs$core$IFn$_invoke$arity$1$($img_src$jscomp$5$$) : $set_current_src$$.call(null, $img_src$jscomp$5$$);
          }], null));
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("img", $G__149060$$, "trans") : $APP.$helix$core$jsx$$.call(null, "img", $G__149060$$, "trans");
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__148997_149150_G__149026_map__148962_map__148962__$1_props__41675__auto__$jscomp$23_vec__148959_vec__148981_vec__148984$$);
};
$amp$components$elements$lazy_image_gallery$caption_layer$$ = function($G__149077_map__149075_map__149075__$1_props__41675__auto__$jscomp$24_vec__149072$$, $maybe_ref__41676__auto__$jscomp$24$$) {
  $G__149077_map__149075_map__149075__$1_props__41675__auto__$jscomp$24_vec__149072$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__149077_map__149075_map__149075__$1_props__41675__auto__$jscomp$24_vec__149072$$), $maybe_ref__41676__auto__$jscomp$24$$], null);
  $G__149077_map__149075_map__149075__$1_props__41675__auto__$jscomp$24_vec__149072$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149077_map__149075_map__149075__$1_props__41675__auto__$jscomp$24_vec__149072$$, 0, null);
  $G__149077_map__149075_map__149075__$1_props__41675__auto__$jscomp$24_vec__149072$$ = $APP.$cljs$core$__destructure_map$$($G__149077_map__149075_map__149075__$1_props__41675__auto__$jscomp$24_vec__149072$$);
  var $target_ref$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149077_map__149075_map__149075__$1_props__41675__auto__$jscomp$24_vec__149072$$, $cljs$cst$486$target_ref$$), $caption$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149077_map__149075_map__149075__$1_props__41675__auto__$jscomp$24_vec__149072$$, $APP.$cljs$cst$428$caption$$), $credit$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149077_map__149075_map__149075__$1_props__41675__auto__$jscomp$24_vec__149072$$, 
  $APP.$cljs$cst$429$credit$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149077_map__149075_map__149075__$1_props__41675__auto__$jscomp$24_vec__149072$$, $cljs$cst$487$other$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__149077_map__149075_map__149075__$1_props__41675__auto__$jscomp$24_vec__149072$$ = function() {
    return {className:"absolute\n                  z-20\n                  bottom-0 \n                  left-0\n                  w-full\n                  h-12\n                  pointer-events-none", ref:$target_ref$$, children:function() {
      var $G__149081$$ = function() {
        return {className:"h-full\n                         w-full\n                         bg-slate-900/50 dark:bg-slate-900/60\n                         p-2", children:[function() {
          var $G__149085$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-fira-code text-xs", "text-slate-950  dark:text-white"]))), children:$caption$jscomp$2$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149085$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149085$$);
        }(), function() {
          var $G__149089$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-fira-code text-xs", "text-slate-950  dark:text-white"]))), children:$credit$jscomp$2$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149089$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149089$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149081$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149081$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149077_map__149075_map__149075__$1_props__41675__auto__$jscomp$24_vec__149072$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149077_map__149075_map__149075__$1_props__41675__auto__$jscomp$24_vec__149072$$);
};
$amp$components$elements$lazy_image_gallery$image_card$$ = function($G__149100_map__149098_map__149098__$1_props__41675__auto__$jscomp$25_vec__149095$$, $maybe_ref__41676__auto__$jscomp$25$$) {
  $G__149100_map__149098_map__149098__$1_props__41675__auto__$jscomp$25_vec__149095$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__149100_map__149098_map__149098__$1_props__41675__auto__$jscomp$25_vec__149095$$), $maybe_ref__41676__auto__$jscomp$25$$], null);
  $G__149100_map__149098_map__149098__$1_props__41675__auto__$jscomp$25_vec__149095$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149100_map__149098_map__149098__$1_props__41675__auto__$jscomp$25_vec__149095$$, 0, null);
  $G__149100_map__149098_map__149098__$1_props__41675__auto__$jscomp$25_vec__149095$$ = $APP.$cljs$core$__destructure_map$$($G__149100_map__149098_map__149098__$1_props__41675__auto__$jscomp$25_vec__149095$$);
  var $width$jscomp$34$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149100_map__149098_map__149098__$1_props__41675__auto__$jscomp$25_vec__149095$$, $APP.$cljs$cst$406$width$$), $height$jscomp$31$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149100_map__149098_map__149098__$1_props__41675__auto__$jscomp$25_vec__149095$$, $APP.$cljs$cst$407$height$$), $img_src$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149100_map__149098_map__149098__$1_props__41675__auto__$jscomp$25_vec__149095$$, 
  $APP.$cljs$cst$425$img_src$$), $caption$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149100_map__149098_map__149098__$1_props__41675__auto__$jscomp$25_vec__149095$$, $APP.$cljs$cst$428$caption$$), $credit$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149100_map__149098_map__149098__$1_props__41675__auto__$jscomp$25_vec__149095$$, $APP.$cljs$cst$429$credit$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149100_map__149098_map__149098__$1_props__41675__auto__$jscomp$25_vec__149095$$, $cljs$cst$487$other$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149100_map__149098_map__149098__$1_props__41675__auto__$jscomp$25_vec__149095$$, $APP.$cljs$cst$90$key$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149100_map__149098_map__149098__$1_props__41675__auto__$jscomp$25_vec__149095$$, $APP.$cljs$cst$430$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $trigger_ref$$ = $APP.$helix$hooks$use_ref$$("trigger-ref"), $target_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("target-ref");
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($trigger_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$386$target$$, $target_ref$jscomp$1$$, $APP.$cljs$cst$387$initial$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$466$y$$, 100, $APP.$cljs$cst$427$opacity$$, 0], null), $APP.$cljs$cst$388$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
  3, [$APP.$cljs$cst$466$y$$, 0, $APP.$cljs$cst$427$opacity$$, 1, $APP.$cljs$cst$426$duration$$, 0.25], null), $APP.$cljs$cst$389$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$466$y$$, 100, $APP.$cljs$cst$427$opacity$$, 0, $APP.$cljs$cst$426$duration$$, 0.125], null)], null)]));
  $G__149100_map__149098_map__149098__$1_props__41675__auto__$jscomp$25_vec__149095$$ = function() {
    return {ref:$trigger_ref$$, style:{width:$APP.$helix$impl$props$__GT_js$$($width$jscomp$34$$), height:$APP.$helix$impl$props$__GT_js$$($height$jscomp$31$$)}, className:"relative\n                    bg-slate-200/50 dark:bg-white/10\n                    overflow-hidden", children:[function() {
      var $G__149106$$ = {"img-src":$img_src$jscomp$6$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$image_layer$$, $G__149106$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$image_layer$$, $G__149106$$);
    }(), $APP.$cljs$core$truth_$$($caption$jscomp$3$$) ? function() {
      var $G__149110$$ = {"target-ref":$target_ref$jscomp$1$$, caption:$caption$jscomp$3$$, credit:$credit$jscomp$3$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$caption_layer$$, $G__149110$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$caption_layer$$, $G__149110$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149100_map__149098_map__149098__$1_props__41675__auto__$jscomp$25_vec__149095$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149100_map__149098_map__149098__$1_props__41675__auto__$jscomp$25_vec__149095$$);
};
$amp$components$elements$lazy_image_gallery$lazy_image_gallery$$ = function($G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$, $G__149125_149323_maybe_ref__41676__auto__$jscomp$26$$) {
  $G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$), $G__149125_149323_maybe_ref__41676__auto__$jscomp$26$$], null);
  $G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$, 0, null);
  $G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$ = $APP.$cljs$core$__destructure_map$$($G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$);
  var $images$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$, $cljs$cst$488$images$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$, $cljs$cst$489$is_visible_QMARK_$$);
  $G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$, $cljs$cst$490$image_gallery_container_ref$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$2$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $gallery_dimensions$$ = $APP.$amp$hooks$use_container_size$use_container_size$$($G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$);
  $G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$ = $APP.$helix$hooks$use_state$$($amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$(8, 200));
  var $masonary_grid_slots$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$, 0, null), $set_masonary_grid_slots$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$, 1, null);
  $G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $G__149126$$ = $amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$($APP.$cljs$cst$406$width$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$), $APP.$cljs$cst$407$height$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$));
    return $set_masonary_grid_slots$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_masonary_grid_slots$$.$cljs$core$IFn$_invoke$arity$1$($G__149126$$) : $set_masonary_grid_slots$$.call(null, $G__149126$$);
  });
  $G__149125_149323_maybe_ref__41676__auto__$jscomp$26$$ = [$APP.$cljs$cst$406$width$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$), $APP.$cljs$cst$407$height$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$)];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$, $G__149125_149323_maybe_ref__41676__auto__$jscomp$26$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$, 
  $G__149125_149323_maybe_ref__41676__auto__$jscomp$26$$);
  $G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$ = function() {
    return {ref:$outer_ctx$jscomp$2$$, className:"overflow-hidden h-full", children:function() {
      var $G__149132$$ = function() {
        return {className:"columns-3 gap-0 h-full pinstripe", children:$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($idx$jscomp$69$$, $dimensions$jscomp$9_height$jscomp$32$$) {
          var $G__149143_caption$jscomp$4_map__149135$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($images$$, $cljs$core$rand_int$$($APP.$cljs$core$count$$($images$$))), $credit$jscomp$4_map__149135__$1$$ = $APP.$cljs$core$__destructure_map$$($G__149143_caption$jscomp$4_map__149135$$), $sized_image_src_src$jscomp$36$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__149135__$1$$, $APP.$cljs$cst$416$src$$);
          $G__149143_caption$jscomp$4_map__149135$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__149135__$1$$, $APP.$cljs$cst$428$caption$$);
          $credit$jscomp$4_map__149135__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__149135__$1$$, $APP.$cljs$cst$429$credit$$);
          var $aspect_ratio$jscomp$6$$ = $APP.$cljs$cst$448$aspect_ratio$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$meta$$($dimensions$jscomp$9_height$jscomp$32$$)), $closest_height_closest_match$$ = $amp$components$elements$lazy_image_gallery$find_closest_size$$($APP.$cljs$core$first$$($dimensions$jscomp$9_height$jscomp$32$$), $APP.$cljs$core$second$$($dimensions$jscomp$9_height$jscomp$32$$)), $width$jscomp$35$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$9_height$jscomp$32$$, 
          0, null);
          $dimensions$jscomp$9_height$jscomp$32$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$9_height$jscomp$32$$, 1, null);
          var $closest_width$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($closest_height_closest_match$$, 0, null);
          $closest_height_closest_match$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($closest_height_closest_match$$, 1, null);
          $sized_image_src_src$jscomp$36$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($sized_image_src_src$jscomp$36$$) + "?w\x3d" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($closest_width$$) + "\x26h\x3d" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($closest_height_closest_match$$) + "\x26fit\x3dcrop\x26auto\x3dformat,compress\x26crop\x3dfaces,edges";
          $G__149143_caption$jscomp$4_map__149135$$ = {width:$width$jscomp$35$$, height:$dimensions$jscomp$9_height$jscomp$32$$, "img-src":$sized_image_src_src$jscomp$36$$, caption:$G__149143_caption$jscomp$4_map__149135$$, credit:$credit$jscomp$4_map__149135__$1$$, other:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($aspect_ratio$jscomp$6$$), idx:$idx$jscomp$69$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$lazy_image_gallery$image_card$$, $G__149143_caption$jscomp$4_map__149135$$, $idx$jscomp$69$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$image_card$$, $G__149143_caption$jscomp$4_map__149135$$, $idx$jscomp$69$$);
        }, $masonary_grid_slots$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149132$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149132$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__149124_149322_G__149128_image_gallery_container_ref_map__149120_map__149120__$1_props__41675__auto__$jscomp$26_vec__149117_vec__149121$$);
};
$amp$components$sections$about_biennale$title$$ = function($G__149248_props__41675__auto__$jscomp$27$$) {
  $APP.$helix$core$extract_cljs_props$$($G__149248_props__41675__auto__$jscomp$27$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__149248_props__41675__auto__$jscomp$27$$ = function() {
    return {className:"lg:flex\n                  w-full\n                  lg:h-2/5\n                  z-20\n                  items-center\n                  justify-between\n                  bg-black/10\n                  lg:p-12 p-4\n                  lg:text-6xl text-3xl\n                  font-futura\n                  font-bold\n                  text-slate-800", children:[function() {
      var $G__149252$$ = function() {
        return {className:"flex flex-col", children:[function() {
          var $G__149257$$ = {className:"", children:"venice"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149257$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149257$$);
        }(), function() {
          var $G__149263$$ = {className:"", children:"biennale"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149263$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149263$$);
        }(), function() {
          var $G__149273$$ = {className:"", children:"2026"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149273$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149273$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149252$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149252$$);
    }(), function() {
      var $G__149283$$ = function() {
        return {className:"flex\n                         flex-col\n                         font-futura\n                         font-bold\n                         lg:text-right\n                         italic\n                         text-white/60", children:[function() {
          var $G__149293$$ = {className:"", children:"in"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149293$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149293$$);
        }(), function() {
          var $G__149301$$ = {className:"", children:"minor"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149301$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149301$$);
        }(), function() {
          var $G__149309$$ = {className:"", children:"keys"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149309$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149309$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149283$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149283$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149248_props__41675__auto__$jscomp$27$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149248_props__41675__auto__$jscomp$27$$);
};
$amp$components$sections$about_biennale$copy_block$$ = function($G__149366_map__149357_map__149357__$1_props__41675__auto__$jscomp$28_vec__149354$$, $maybe_ref__41676__auto__$jscomp$28$$) {
  $G__149366_map__149357_map__149357__$1_props__41675__auto__$jscomp$28_vec__149354$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__149366_map__149357_map__149357__$1_props__41675__auto__$jscomp$28_vec__149354$$), $maybe_ref__41676__auto__$jscomp$28$$], null);
  $G__149366_map__149357_map__149357__$1_props__41675__auto__$jscomp$28_vec__149354$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149366_map__149357_map__149357__$1_props__41675__auto__$jscomp$28_vec__149354$$, 0, null);
  $G__149366_map__149357_map__149357__$1_props__41675__auto__$jscomp$28_vec__149354$$ = $APP.$cljs$core$__destructure_map$$($G__149366_map__149357_map__149357__$1_props__41675__auto__$jscomp$28_vec__149354$$);
  var $title$jscomp$20$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149366_map__149357_map__149357__$1_props__41675__auto__$jscomp$28_vec__149354$$, $APP.$cljs$cst$373$title$$), $copy$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149366_map__149357_map__149357__$1_props__41675__auto__$jscomp$28_vec__149354$$, $cljs$cst$491$copy$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__149366_map__149357_map__149357__$1_props__41675__auto__$jscomp$28_vec__149354$$ = function() {
    return {className:"flex flex-col mb-12 font-futura", children:[function() {
      var $G__149379$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:$title$jscomp$20$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149379$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149379$$);
    }(), function() {
      var $G__149387$$ = {className:"text-slate-800", children:$copy$jscomp$1$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149387$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149387$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149366_map__149357_map__149357__$1_props__41675__auto__$jscomp$28_vec__149354$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149366_map__149357_map__149357__$1_props__41675__auto__$jscomp$28_vec__149354$$);
};
$amp$components$sections$about_biennale$about_biennale_section$$ = function($G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$, $maybe_ref__41676__auto__$jscomp$29$$) {
  $G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$), $maybe_ref__41676__auto__$jscomp$29$$], null);
  $G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$, 0, null);
  $G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$ = $APP.$cljs$core$__destructure_map$$($G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$, $cljs$cst$492$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$, $cljs$cst$489$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$, $cljs$cst$493$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$3$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$3$$);
  var $visited_QMARK_$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$, 1, null);
  $G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$about_biennale$images$$);
  var $images$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$, 1, null);
  var $image_gallery_container_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("image-gallery-container-ref"), $is_desktop_QMARK_$jscomp$2$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$ = function() {
    return {ref:$outer_ctx$jscomp$3$$, className:"h-full \n                        w-full\n                        flex\n                        pink-grad\n                        light-red-grad\n                        items-center\n                        justify-center\n                        font-futura\n                        relative", children:function() {
      var $G__149502$$ = function() {
        return {className:"flex \n                               flex-col\n                               overflow-hidden\n                               relative\n                               w-full md:w-10/12 lg:w-full\n                               lg:p-12 p-4", children:[function() {
          var $G__149512$$ = {};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$title$$, $G__149512$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$title$$, $G__149512$$);
        }(), function() {
          var $G__149518$$ = function() {
            return {className:"flex overflow-hidden relative", children:[function() {
              var $G__149522$$ = function() {
                return {className:"lg:w-1/2 \n                                             lg:p-16 p-4", children:[function() {
                  var $G__149527$$ = {title:"the biennale", copy:"The Venice Biennale is the most prestigious platform for contemporary art in the world—the cultural equivalent of the Olympics.  Every two years, nations convene in the Giardini and Arsenale to present the best of their artists.  The 61st International Art Exhibition will run from May 9 to November 22 2026 and, following the unexpected passing of curator Koyo Kouoh, will be realized exactly as she conceived it."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$copy_block$$, $G__149527$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$copy_block$$, $G__149527$$);
                }(), function() {
                  var $G__149531$$ = {title:"The theme: In Minor Keys", copy:"Kouoh’s vision invites us to slow down and listen to the “frequencies of the minor keys,” the quiet tones and lower frequencies that often get lost amid today’s chaos .  In her curatorial text, she describes the minor key as a metaphor for small islands and intimate oases—gardens, courtyards, dance floors—where artists cultivate rich social and ecological worlds .  Rather than celebrating spectacle, the exhibition tunes into “the persistent signals of earth and life,” foregrounding sensory, affective experiences .  As Kouoh’s team notes, “In minor keys are sequences of exhilarating journeys that address the sensate and the affective, inviting visitors to marvel, meditate, dream, revel, reflect and commune in realms where time is not corporate property nor at the mercy of relentlessly accelerated productivity” ."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$copy_block$$, $G__149531$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$copy_block$$, $G__149531$$);
                }(), function() {
                  var $G__149535$$ = {title:"Why this matters to Armenians", copy:"Armenia’s cultural memory is one of quiet endurance, repetition and devotion.  From stone‑carved khachkars to endless rows of hand‑woven carpets, Armenian art has always been a labour of patience and persistence.  Kouoh’s vision of the Biennale as an archipelago of “minor keys” resonates deeply with this ethos.  It is about valuing the handmade over the manufactured, the intimate gesture over the headline‑grabbing spectacle—precisely what Zadik Zadikian will embody in The Studio."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$copy_block$$, $G__149535$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$copy_block$$, $G__149535$$);
                }(), function() {
                  var $G__149540$$ = {className:"", children:"By bringing an Armenian “island” to Venice, we affirm that our heritage belongs on the world’s biggest stage not because it shouts the loudest, but because it teaches the world how to listen.  Supporting the Armenia Pavilion is more than funding an exhibition; it is enabling a sanctuary of slow, deliberate creativity—an oasis of dignity and resilience—within a global conversation on art’s future."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149540$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149540$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149522$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149522$$);
            }(), $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$2$$) ? $visited_QMARK_$jscomp$5$$ : $is_desktop_QMARK_$jscomp$2$$) ? function() {
              var $G__149544_G__149548$jscomp$inline_3886_G__149553$jscomp$inline_3887_JSCompiler_inline_result$jscomp$inline_3885$$ = {images:$images$jscomp$1$$, "image-gallery-container-ref":$image_gallery_container_ref$jscomp$1$$};
              $G__149544_G__149548$jscomp$inline_3886_G__149553$jscomp$inline_3887_JSCompiler_inline_result$jscomp$inline_3885$$ = {className:"absolute h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $G__149544_G__149548$jscomp$inline_3886_G__149553$jscomp$inline_3887_JSCompiler_inline_result$jscomp$inline_3885$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, 
              $G__149544_G__149548$jscomp$inline_3886_G__149553$jscomp$inline_3887_JSCompiler_inline_result$jscomp$inline_3885$$)};
              $G__149544_G__149548$jscomp$inline_3886_G__149553$jscomp$inline_3887_JSCompiler_inline_result$jscomp$inline_3885$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149544_G__149548$jscomp$inline_3886_G__149553$jscomp$inline_3887_JSCompiler_inline_result$jscomp$inline_3885$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149544_G__149548$jscomp$inline_3886_G__149553$jscomp$inline_3887_JSCompiler_inline_result$jscomp$inline_3885$$);
              $G__149544_G__149548$jscomp$inline_3886_G__149553$jscomp$inline_3887_JSCompiler_inline_result$jscomp$inline_3885$$ = {ref:$image_gallery_container_ref$jscomp$1$$, className:"ml-8\n                                               w-7/12\n                                               relative\n                                               overflow-hidden", children:$G__149544_G__149548$jscomp$inline_3886_G__149553$jscomp$inline_3887_JSCompiler_inline_result$jscomp$inline_3885$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149544_G__149548$jscomp$inline_3886_G__149553$jscomp$inline_3887_JSCompiler_inline_result$jscomp$inline_3885$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149544_G__149548$jscomp$inline_3886_G__149553$jscomp$inline_3887_JSCompiler_inline_result$jscomp$inline_3885$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149518$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149518$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149502$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149502$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__149492_map__149476_map__149476__$1_props__41675__auto__$jscomp$29_vec__149473_vec__149482_vec__149485$$);
};
$amp$components$sections$contact_section$contact_section$$ = function($G__148830_map__148828_props__41675__auto__$jscomp$30_vec__148825$$, $maybe_ref__41676__auto__$jscomp$30$$) {
  $G__148830_map__148828_props__41675__auto__$jscomp$30_vec__148825$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__148830_map__148828_props__41675__auto__$jscomp$30_vec__148825$$), $maybe_ref__41676__auto__$jscomp$30$$], null);
  $G__148830_map__148828_props__41675__auto__$jscomp$30_vec__148825$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__148830_map__148828_props__41675__auto__$jscomp$30_vec__148825$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__148830_map__148828_props__41675__auto__$jscomp$30_vec__148825$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__148830_map__148828_props__41675__auto__$jscomp$30_vec__148825$$ = function() {
    return {className:"relative w-full font-mono mt-12", children:[function() {
      var $G__148835$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148835$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__148835$$);
    }(), function() {
      var $G__148842_G__148846$jscomp$inline_3890_G__148850$jscomp$inline_3891$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-xl lg:text-2xl italic font-light leading-relaxed", "text-slate-600  dark:text-slate-400"]))), children:"“Culture is where nations become undeniable. It is where influence is built without violence; where history is not only remembered, but translated into future power.”"};
      $G__148842_G__148846$jscomp$inline_3890_G__148850$jscomp$inline_3891$$ = {className:"max-w-3xl text-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__148842_G__148846$jscomp$inline_3890_G__148850$jscomp$inline_3891$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__148842_G__148846$jscomp$inline_3890_G__148850$jscomp$inline_3891$$)};
      $G__148842_G__148846$jscomp$inline_3890_G__148850$jscomp$inline_3891$$ = {className:"py-16 lg:py-24 px-6 flex justify-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__148842_G__148846$jscomp$inline_3890_G__148850$jscomp$inline_3891$$) : $APP.$helix$core$jsx$$.call(null, "blockquote", $G__148842_G__148846$jscomp$inline_3890_G__148850$jscomp$inline_3891$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148842_G__148846$jscomp$inline_3890_G__148850$jscomp$inline_3891$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__148842_G__148846$jscomp$inline_3890_G__148850$jscomp$inline_3891$$);
    }(), function() {
      var $G__148854$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148854$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__148854$$);
    }(), function() {
      var $G__148858$$ = function() {
        return {className:"py-16 lg:py-20 px-6 max-w-5xl mx-auto", children:[function() {
          var $G__148862$$ = function() {
            return {className:"text-center mb-16", children:[function() {
              var $G__148866$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-2xl lg:text-3xl font-bold uppercase tracking-wider mb-3", "text-slate-900  dark:text-slate-100"]))), children:"Support the Pavilion"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__148866$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__148866$$);
            }(), function() {
              var $G__148870$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm lg:text-base max-w-xl mx-auto mb-8", "text-slate-600  dark:text-slate-400"]))), children:"Your contribution directly supports Armenia’s national presentation at the 61st Venice Biennale—a sovereign act of cultural visibility on the world stage."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__148870$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__148870$$);
            }(), function() {
              var $G__148874$$ = function() {
                return {className:"flex justify-center gap-4 flex-wrap", children:[function() {
                  var $G__148878$$ = function() {
                    return {title:"Donate Now", "on-click":function() {
                      return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                    }};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__148878$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__148878$$);
                }(), function() {
                  var $G__148883$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-[11px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400;hover:text-slate-900 dark:hover:text-white;border;border-slate-200 dark:border-white/15;hover:border-slate-400 dark:hover:border-slate-500;px-6 py-3;transition-colors duration-300 ease-in-out".split(";")))), 
                    onClick:function() {
                      return $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$("section-8") : $scroll_to_id$$.call(null, "section-8");
                    }, children:"Wire Transfer Info →"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__148883$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__148883$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148874$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__148874$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148862$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__148862$$);
        }(), function() {
          var $G__148887$$ = function() {
            return {className:"grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-sm", children:[function() {
              var $G__148891$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__148895$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-semibold uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"Get in Touch"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__148895$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__148895$$);
                }(), function() {
                  var $G__148900$$ = {href:"mailto:hello@armenianpavilion2026.org?subject\x3dLet's%20connect", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), children:"hello@armenianpavilion2026.org"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__148900$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__148900$$);
                }(), function() {
                  var $G__148905$$ = {href:"tel:+13234041152", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), children:"+1 323-404-1152"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__148905$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__148905$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148891$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__148891$$);
            }(), function() {
              var $G__148915$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__148919$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-semibold uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"501(c)(3) Non-Profit"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__148919$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__148919$$);
                }(), function() {
                  var $G__148927$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"Fallen Angels Inc."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__148927$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__148927$$);
                }(), function() {
                  var $G__148937$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-600  dark:text-slate-400"), children:"EIN: 92-2395513"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__148937$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__148937$$);
                }(), function() {
                  var $G__148945$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-600  dark:text-slate-400"), children:"Los Angeles, CA"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__148945$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__148945$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148915$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__148915$$);
            }(), function() {
              var $G__148954$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__148966$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-semibold uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"Quick Links"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__148966$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__148966$$);
                }(), function() {
                  var $G__148976$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$("section-1") : $scroll_to_id$$.call(null, "section-1");
                    }, children:"Press Release"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__148976$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__148976$$);
                }(), function() {
                  var $G__148992$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$("section-3") : $scroll_to_id$$.call(null, "section-3");
                    }, children:"Budget"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__148992$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__148992$$);
                }(), function() {
                  var $G__149004$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$("section-5") : $scroll_to_id$$.call(null, "section-5");
                    }, children:"Committee"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__149004$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__149004$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148954$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__148954$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148887$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__148887$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148858$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__148858$$);
    }(), function() {
      var $G__149014$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149014$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149014$$);
    }(), function() {
      var $G__149024$$ = function() {
        return {className:"py-6 px-6 flex flex-col sm:flex-row justify-between items-center gap-3 max-w-5xl mx-auto", children:[function() {
          var $G__149032$$ = function() {
            return {className:"flex items-center gap-4", children:[function() {
              var $G__149036$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"h-6 opacity-40 invert dark:invert-0"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__149036$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__149036$$);
            }(), function() {
              var $G__149044$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] uppercase tracking-[0.15em] whitespace-nowrap", "text-slate-600  dark:text-slate-400"]))), children:"Armenia Pavilion · 61st Venice Biennale"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__149044$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__149044$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149032$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149032$$);
        }(), function() {
          var $G__149050$$ = function() {
            return {className:"flex items-center gap-4", children:[function() {
              var $G__149054$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-600  dark:text-slate-400"]))), children:"© 2026 AZ Studios Inc."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__149054$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__149054$$);
            }(), function() {
              var $G__149058$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"v" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("db1b006")};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__149058$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__149058$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149050$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149050$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149024$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149024$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("footer", $G__148830_map__148828_props__41675__auto__$jscomp$30_vec__148825$$) : $APP.$helix$core$jsxs$$.call(null, "footer", $G__148830_map__148828_props__41675__auto__$jscomp$30_vec__148825$$);
};
$amp$components$sections$mobile_hero_section$mobile_hero_section$$ = function($G__148923_props__41675__auto__$jscomp$31_vec__148911$$) {
  $APP.$helix$core$extract_cljs_props$$($G__148923_props__41675__auto__$jscomp$31_vec__148911$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$4$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__148923_props__41675__auto__$jscomp$31_vec__148911$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ctx$jscomp$4$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$382$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__148923_props__41675__auto__$jscomp$31_vec__148911$$, 0, null);
  var $is_active_QMARK_$jscomp$8$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__148923_props__41675__auto__$jscomp$31_vec__148911$$, 1, null);
  $G__148923_props__41675__auto__$jscomp$31_vec__148911$$ = function() {
    return {id:"video", ref:$outer_ctx$jscomp$4$$, className:"relative h-full w-full overflow-hidden", children:function() {
      var $G__148929$$ = function() {
        return {className:"w-screen h-screen relative flex flex-col items-start justify-center", children:[function() {
          var $G__148935_G__148943$jscomp$inline_3474$$ = {"playback-id":"fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo", "should-play?":$is_active_QMARK_$jscomp$8$$};
          $G__148935_G__148943$jscomp$inline_3474$$ = {className:"absolute inset-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$mobile_hero_section$lazy_video_background$$, $G__148935_G__148943$jscomp$inline_3474$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$mobile_hero_section$lazy_video_background$$, $G__148935_G__148943$jscomp$inline_3474$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148935_G__148943$jscomp$inline_3474$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__148935_G__148943$jscomp$inline_3474$$);
        }(), function() {
          var $G__148952$$ = function() {
            return {className:"relative z-10 flex flex-col items-start justify-center px-8 text-left gap-6", children:[function() {
              var $G__148964$$ = {src:"images/graphics/61_biennale_logo_red.svg", className:"w-36"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__148964$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__148964$$);
            }(), function() {
              var $G__148972_G__148980$jscomp$inline_3790$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/70 px-3 py-1.5 inline decoration-clone"), style:{boxDecorationBreak:$APP.$helix$impl$props$__GT_js$$("clone"), WebkitBoxDecorationBreak:$APP.$helix$impl$props$__GT_js$$("clone")}, children:"The Studio"};
              $G__148972_G__148980$jscomp$inline_3790$$ = {className:"font-mono font-extrabold uppercase tracking-wider leading-tight text-6xl text-white", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__148972_G__148980$jscomp$inline_3790$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__148972_G__148980$jscomp$inline_3790$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__148972_G__148980$jscomp$inline_3790$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__148972_G__148980$jscomp$inline_3790$$);
            }(), function() {
              var $G__148996_G__149002$jscomp$inline_3793$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/50 px-3 py-1 inline decoration-clone"), style:{boxDecorationBreak:$APP.$helix$impl$props$__GT_js$$("clone"), WebkitBoxDecorationBreak:$APP.$helix$impl$props$__GT_js$$("clone")}, children:"Armenia Pavilion · 61st International Art Exhibition La Biennale di Venezia"};
              $G__148996_G__149002$jscomp$inline_3793$$ = {className:"font-mono text-xs uppercase tracking-[0.2em] max-w-[18rem] leading-loose text-white/90", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__148996_G__149002$jscomp$inline_3793$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__148996_G__149002$jscomp$inline_3793$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__148996_G__149002$jscomp$inline_3793$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__148996_G__149002$jscomp$inline_3793$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148952$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__148952$$);
        }(), function() {
          var $G__149012_G__149020$jscomp$inline_3481$$ = {className:"text-lg animate-bounce", children:"↓"};
          $G__149012_G__149020$jscomp$inline_3481$$ = {href:"#about", className:"absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-1 text-white/80 hover:text-white transition-colors font-mono text-xs uppercase tracking-[0.2em]", children:["Learn More", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__149012_G__149020$jscomp$inline_3481$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__149012_G__149020$jscomp$inline_3481$$)]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__149012_G__149020$jscomp$inline_3481$$) : $APP.$helix$core$jsxs$$.call(null, "a", $G__149012_G__149020$jscomp$inline_3481$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148929$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__148929$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__148923_props__41675__auto__$jscomp$31_vec__148911$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__148923_props__41675__auto__$jscomp$31_vec__148911$$);
};
$amp$components$sections$site_footer$site_footer$$ = function($G__149158_map__149156_props__41675__auto__$jscomp$32_vec__149153$$, $maybe_ref__41676__auto__$jscomp$32$$) {
  $G__149158_map__149156_props__41675__auto__$jscomp$32_vec__149153$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__149158_map__149156_props__41675__auto__$jscomp$32_vec__149153$$), $maybe_ref__41676__auto__$jscomp$32$$], null);
  $G__149158_map__149156_props__41675__auto__$jscomp$32_vec__149153$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149158_map__149156_props__41675__auto__$jscomp$32_vec__149153$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__149158_map__149156_props__41675__auto__$jscomp$32_vec__149153$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$jscomp$1$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__149158_map__149156_props__41675__auto__$jscomp$32_vec__149153$$ = function() {
    return {className:"relative w-full font-mono mt-12", children:[function() {
      var $G__149162$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149162$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149162$$);
    }(), function() {
      var $G__149167_G__149171$jscomp$inline_3894_G__149176$jscomp$inline_3895$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-xl lg:text-2xl italic font-light leading-relaxed", "text-slate-600  dark:text-slate-400"]))), children:"“The way you do anything is the way you do everything.”"};
      $G__149167_G__149171$jscomp$inline_3894_G__149176$jscomp$inline_3895$$ = {className:"max-w-3xl text-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149167_G__149171$jscomp$inline_3894_G__149176$jscomp$inline_3895$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149167_G__149171$jscomp$inline_3894_G__149176$jscomp$inline_3895$$)};
      $G__149167_G__149171$jscomp$inline_3894_G__149176$jscomp$inline_3895$$ = {className:"py-16 lg:py-24 px-6 flex justify-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__149167_G__149171$jscomp$inline_3894_G__149176$jscomp$inline_3895$$) : $APP.$helix$core$jsx$$.call(null, "blockquote", $G__149167_G__149171$jscomp$inline_3894_G__149176$jscomp$inline_3895$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149167_G__149171$jscomp$inline_3894_G__149176$jscomp$inline_3895$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149167_G__149171$jscomp$inline_3894_G__149176$jscomp$inline_3895$$);
    }(), function() {
      var $G__149194$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149194$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149194$$);
    }(), function() {
      var $G__149206$$ = function() {
        return {className:"py-16 lg:py-20 px-6 max-w-5xl mx-auto", children:[function() {
          var $G__149218$$ = function() {
            return {className:"text-center mb-16", children:[function() {
              var $G__149235$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-2xl lg:text-3xl font-bold uppercase tracking-wider mb-3", "text-slate-900  dark:text-slate-100"]))), children:"Support the Pavilion"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__149235$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__149235$$);
            }(), function() {
              var $G__149240$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm lg:text-base max-w-xl mx-auto mb-8", "text-slate-600  dark:text-slate-400"]))), children:"Your contribution directly supports Armenia’s national presentation at the 61st Venice Biennale."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149240$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149240$$);
            }(), function() {
              var $G__149259$$ = function() {
                return {className:"flex justify-center", children:function() {
                  var $G__149279$$ = function() {
                    return {title:"Donate Now", "on-click":function() {
                      return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                    }};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__149279$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__149279$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149259$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149259$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149218$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149218$$);
        }(), function() {
          var $G__149319$$ = function() {
            return {className:"grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-sm", children:[function() {
              var $G__149326$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__149332$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-semibold uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"Get in Touch"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__149332$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__149332$$);
                }(), function() {
                  var $G__149336$$ = {href:"mailto:hello@armenianpavilion2026.org?subject\x3dLet's%20connect", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), children:"hello@armenianpavilion2026.org"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__149336$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__149336$$);
                }(), function() {
                  var $G__149340$$ = {href:"tel:+13234041152", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), children:"+1 323-404-1152"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__149340$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__149340$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149326$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149326$$);
            }(), function() {
              var $G__149345$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__149353$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-semibold uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"501(c)(3) Non-Profit"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__149353$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__149353$$);
                }(), function() {
                  var $G__149361$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"Fallen Angels Inc."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149361$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149361$$);
                }(), function() {
                  var $G__149375$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-600  dark:text-slate-400"), children:"EIN: 92-2395513"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149375$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149375$$);
                }(), function() {
                  var $G__149383$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-600  dark:text-slate-400"), children:"Los Angeles, CA"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149383$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149383$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149345$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149345$$);
            }(), function() {
              var $G__149399$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__149410$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-semibold uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"Quick Links"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__149410$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__149410$$);
                }(), function() {
                  var $G__149418$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$("video") : $scroll_to_id$jscomp$1$$.call(null, "video");
                    }, children:"The Film"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__149418$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__149418$$);
                }(), function() {
                  var $G__149426$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$("press-release") : $scroll_to_id$jscomp$1$$.call(null, "press-release");
                    }, children:"Press Release"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__149426$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__149426$$);
                }(), function() {
                  var $G__149439$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$("about-studio") : $scroll_to_id$jscomp$1$$.call(null, "about-studio");
                    }, children:"The Studio"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__149439$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__149439$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149399$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149399$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149319$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149319$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149206$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149206$$);
    }(), function() {
      var $G__149447$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149447$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149447$$);
    }(), function() {
      var $G__149452$$ = function() {
        return {className:"py-6 px-6 flex flex-col sm:flex-row justify-between items-center gap-3 max-w-5xl mx-auto", children:[function() {
          var $G__149456$$ = function() {
            return {className:"flex items-center gap-4", children:[function() {
              var $G__149460$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"h-6 opacity-40 invert dark:invert-0"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__149460$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__149460$$);
            }(), function() {
              var $G__149464$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] uppercase tracking-[0.15em] whitespace-nowrap", "text-slate-600  dark:text-slate-400"]))), children:"Armenia Pavilion · 61st Venice Biennale"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__149464$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__149464$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149456$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149456$$);
        }(), function() {
          var $G__149468$$ = function() {
            return {className:"flex items-center gap-4", children:[function() {
              var $G__149478$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-600  dark:text-slate-400"]))), children:"© 2026 AZ Studios Inc."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__149478$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__149478$$);
            }(), function() {
              var $G__149494$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"v" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("db1b006")};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__149494$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__149494$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149468$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149468$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149452$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149452$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("footer", $G__149158_map__149156_props__41675__auto__$jscomp$32_vec__149153$$) : $APP.$helix$core$jsxs$$.call(null, "footer", $G__149158_map__149156_props__41675__auto__$jscomp$32_vec__149153$$);
};
$amp$components$sections$non_profit$title$$ = function($G__149496_G__149504$jscomp$inline_3898_G__149514$jscomp$inline_3899_props__41675__auto__$jscomp$33$$) {
  $APP.$helix$core$extract_cljs_props$$($G__149496_G__149504$jscomp$inline_3898_G__149514$jscomp$inline_3899_props__41675__auto__$jscomp$33$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__149496_G__149504$jscomp$inline_3898_G__149514$jscomp$inline_3899_props__41675__auto__$jscomp$33$$ = {className:"w-1", children:"support the Armenia Pavilion"};
  $G__149496_G__149504$jscomp$inline_3898_G__149514$jscomp$inline_3899_props__41675__auto__$jscomp$33$$ = {className:"flex flex-col", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149496_G__149504$jscomp$inline_3898_G__149514$jscomp$inline_3899_props__41675__auto__$jscomp$33$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149496_G__149504$jscomp$inline_3898_G__149514$jscomp$inline_3899_props__41675__auto__$jscomp$33$$)};
  $G__149496_G__149504$jscomp$inline_3898_G__149514$jscomp$inline_3899_props__41675__auto__$jscomp$33$$ = {className:"lg:flex\n                    w-full\n                    lg:h-2/5\n                    z-20\n                    items-center\n                    justify-between\n                    bg-black/10\n                    lg:p-12 p-4\n                    lg:text-6xl text-3xl\n                    font-futura\n                    font-bold\n                    text-slate-800", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? 
  $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149496_G__149504$jscomp$inline_3898_G__149514$jscomp$inline_3899_props__41675__auto__$jscomp$33$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149496_G__149504$jscomp$inline_3898_G__149514$jscomp$inline_3899_props__41675__auto__$jscomp$33$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149496_G__149504$jscomp$inline_3898_G__149514$jscomp$inline_3899_props__41675__auto__$jscomp$33$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149496_G__149504$jscomp$inline_3898_G__149514$jscomp$inline_3899_props__41675__auto__$jscomp$33$$);
};
$amp$components$sections$non_profit$copy_block$$ = function($G__149563_map__149561_map__149561__$1_props__41675__auto__$jscomp$34_vec__149558$$, $maybe_ref__41676__auto__$jscomp$34$$) {
  $G__149563_map__149561_map__149561__$1_props__41675__auto__$jscomp$34_vec__149558$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__149563_map__149561_map__149561__$1_props__41675__auto__$jscomp$34_vec__149558$$), $maybe_ref__41676__auto__$jscomp$34$$], null);
  $G__149563_map__149561_map__149561__$1_props__41675__auto__$jscomp$34_vec__149558$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149563_map__149561_map__149561__$1_props__41675__auto__$jscomp$34_vec__149558$$, 0, null);
  $G__149563_map__149561_map__149561__$1_props__41675__auto__$jscomp$34_vec__149558$$ = $APP.$cljs$core$__destructure_map$$($G__149563_map__149561_map__149561__$1_props__41675__auto__$jscomp$34_vec__149558$$);
  var $title$jscomp$21$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149563_map__149561_map__149561__$1_props__41675__auto__$jscomp$34_vec__149558$$, $APP.$cljs$cst$373$title$$), $copy$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149563_map__149561_map__149561__$1_props__41675__auto__$jscomp$34_vec__149558$$, $cljs$cst$491$copy$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__149563_map__149561_map__149561__$1_props__41675__auto__$jscomp$34_vec__149558$$ = function() {
    return {className:"flex flex-col mb-12 font-futura", children:[function() {
      var $G__149567$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:$title$jscomp$21$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149567$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149567$$);
    }(), function() {
      var $G__149571$$ = {className:"text-slate-800", children:$copy$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149571$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149571$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149563_map__149561_map__149561__$1_props__41675__auto__$jscomp$34_vec__149558$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149563_map__149561_map__149561__$1_props__41675__auto__$jscomp$34_vec__149558$$);
};
$amp$components$sections$non_profit$non_profit_section$$ = function($G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$, $maybe_ref__41676__auto__$jscomp$35$$) {
  $G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$), $maybe_ref__41676__auto__$jscomp$35$$], null);
  $G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$, 0, null);
  $G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$ = $APP.$cljs$core$__destructure_map$$($G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$, $cljs$cst$492$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$, $cljs$cst$489$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$, $cljs$cst$493$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$5$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$5$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$, 1, null);
  $G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$non_profit$images$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$, 1, null);
  $APP.$helix$hooks$use_ref$$("image-gallery-container-ref");
  $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$ = function() {
    return {ref:$outer_ctx$jscomp$5$$, className:"h-full \n                          w-full\n                          flex\n                          blue-purple-grad\n                          light-red-grad\n                          items-center\n                          justify-center\n                          font-futura\n                          relative", children:function() {
      var $G__149592$$ = function() {
        return {className:"flex \n                                 flex-col\n                                 overflow-hidden\n                                 relative\n                                 w-full md:w-10/12 lg:w-full\n                                 lg:p-12 p-4", children:[function() {
          var $G__149596$$ = {};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$non_profit$title$$, $G__149596$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$non_profit$title$$, $G__149596$$);
        }(), function() {
          var $G__149598$$ = function() {
            return {className:"flex overflow-hidden relative", children:function() {
              var $G__149602$$ = function() {
                return {className:"lg:w-1/2 \n                                               lg:p-16 p-4", children:[function() {
                  var $G__149606$$ = {title:"", copy:"Funds go to keep THE STUDIO alive for six months in Venice.  Your support ensures the artist’s residency, covers materials and fabrication, pays our production crew, builds and ships the pavilion, and funds public programs and the exhibition catalogue.  Gifts are handled by Fallen Angels, a registered 501(c)(3) non‑profit; donations to a 501(c)(3) are tax‑deductible"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$non_profit$copy_block$$, $G__149606$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$non_profit$copy_block$$, $G__149606$$);
                }(), function() {
                  var $G__149610$$ = function() {
                    return {className:"flex flex-col mb-12 font-futura", children:[function() {
                      var $G__149614$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:"What Your Donation Funds"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149614$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149614$$);
                    }(), function() {
                      var $G__149618$$ = function() {
                        return {className:"list-disc list-outside ml-5 text-slate-800", children:[function() {
                          var $G__149622$$ = {children:"Artist \x26 team residency in Venice"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__149622$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__149622$$);
                        }(), function() {
                          var $G__149626$$ = {children:"Fabrication materials and modular blocks"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__149626$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__149626$$);
                        }(), function() {
                          var $G__149630$$ = {children:"Production crew \x26 documentation (video, photography, editing)"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__149630$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__149630$$);
                        }(), function() {
                          var $G__149634$$ = {children:"Pavilion build‑out, shipping \x26 logistics"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__149634$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__149634$$);
                        }(), function() {
                          var $G__149639$$ = {children:"Public programs \x26 education"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__149639$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__149639$$);
                        }(), function() {
                          var $G__149643$$ = {children:"Archival filming \x26 catalogue"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__149643$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__149643$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ul", $G__149618$$) : $APP.$helix$core$jsxs$$.call(null, "ul", $G__149618$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149610$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149610$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149602$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149602$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149598$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149598$$);
        }(), function() {
          var $G__149648$$ = function() {
            return {className:"lg:absolute lg:bottom-[40px] lg:left-1/2 lg:-translate-x-1/2", children:function() {
              var $G__149652$$ = function() {
                return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
                  return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                }};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__149652$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__149652$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149648$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149648$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149592$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149592$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__149588_map__149580_map__149580__$1_props__41675__auto__$jscomp$35_vec__149577_vec__149581_vec__149584$$);
};
$amp$components$sections$team_section$team_member_card$$ = function($G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$, $data$jscomp$135_maybe_ref__41676__auto__$jscomp$36$$) {
  $G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$), $data$jscomp$135_maybe_ref__41676__auto__$jscomp$36$$], null);
  $G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$, 0, null);
  $G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$ = $APP.$cljs$core$__destructure_map$$($G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$);
  $data$jscomp$135_maybe_ref__41676__auto__$jscomp$36$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$, $APP.$cljs$cst$28$data$$);
  var $images$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$, $cljs$cst$488$images$$), $flash_images_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$, $cljs$cst$497$flash_images_handler$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$ = $APP.$cljs$core$__destructure_map$$($data$jscomp$135_maybe_ref__41676__auto__$jscomp$36$$);
  var $name$jscomp$196$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$, $APP.$cljs$cst$182$name$$), $role$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$, $APP.$cljs$cst$494$role$$), $copy$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$, 
  $cljs$cst$491$copy$$), $social$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$, $cljs$cst$495$social$$), $email$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$, $cljs$cst$496$email$$);
  $G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$ = function() {
    return {className:"flex flex-col\n                    mb-16\n                    font-futura text-gray-800", children:[function() {
      var $G__149190$$ = function() {
        return {className:"relative inline-block\n                           z-30\n                           w-fit\n                           -mb-6", onMouseEnter:function() {
          return $flash_images_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $flash_images_handler$$.$cljs$core$IFn$_invoke$arity$1$($images$jscomp$3$$) : $flash_images_handler$$.call(null, $images$jscomp$3$$);
        }, children:[function() {
          var $G__149196$$ = {className:"absolute inset-y-1 inset-x-0\n                                  translate-x-2 translate-y-2\n                                  warm-yellow\n                                  pointer-events-none"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149196$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149196$$);
        }(), function() {
          var $G__149202$$ = {className:"relative z-10\n                                text-3xl whitespace-nowrap lg:text-2xl font-bold lowercase\n                                pointer-events-none", children:$name$jscomp$196$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149202$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149202$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149190$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149190$$);
    }(), function() {
      var $G__149208$$ = {className:"text-6xl lg:text-8xl font-bold lowercase\n                         z-20\n                         mb-4", children:$role$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149208$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149208$$);
    }(), function() {
      var $G__149212$$ = {className:"text-md text-gray-600", children:$copy$jscomp$3$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149212$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149212$$);
    }(), function() {
      var $G__149221$$ = {className:"my-4\n                          border-gray-900"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("hr", $G__149221$$) : $APP.$helix$core$jsx$$.call(null, "hr", $G__149221$$);
    }(), function() {
      var $G__149227$$ = {className:"text-md text-red-600", children:$social$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149227$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149227$$);
    }(), function() {
      var $G__149231$$ = {className:"text-md text-red-600", children:$email$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149231$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149231$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149185_map__149180_map__149180__$1_map__149183__$1_props__41675__auto__$jscomp$36_vec__149177$$);
};
$amp$components$sections$team_section$team_members$$ = function($G__149277_map__149267_map__149267__$1_props__41675__auto__$jscomp$37_vec__149264$$, $maybe_ref__41676__auto__$jscomp$37$$) {
  $G__149277_map__149267_map__149267__$1_props__41675__auto__$jscomp$37_vec__149264$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__149277_map__149267_map__149267__$1_props__41675__auto__$jscomp$37_vec__149264$$), $maybe_ref__41676__auto__$jscomp$37$$], null);
  $G__149277_map__149267_map__149267__$1_props__41675__auto__$jscomp$37_vec__149264$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149277_map__149267_map__149267__$1_props__41675__auto__$jscomp$37_vec__149264$$, 0, null);
  $G__149277_map__149267_map__149267__$1_props__41675__auto__$jscomp$37_vec__149264$$ = $APP.$cljs$core$__destructure_map$$($G__149277_map__149267_map__149267__$1_props__41675__auto__$jscomp$37_vec__149264$$);
  var $flash_images_handler$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149277_map__149267_map__149267__$1_props__41675__auto__$jscomp$37_vec__149264$$, $cljs$cst$497$flash_images_handler$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__149277_map__149267_map__149267__$1_props__41675__auto__$jscomp$37_vec__149264$$ = function() {
    return {className:"w-full\n                  flex flex-col\n                  items-center justify-center\n                  \n                  ", children:function() {
      var $G__149285$$ = function() {
        return {className:"items-center justify-center\n                         w-full md:w-10/12\n                         lg:pl-32 px-8 py-16", children:[function() {
          var $G__149295$$ = {data:$amp$components$sections$team_section$tony_card_data$$, images:$amp$components$sections$team_section$tony_images$$, "flash-images-handler":$flash_images_handler$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_member_card$$, $G__149295$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_member_card$$, $G__149295$$);
        }(), function() {
          var $G__149305$$ = {data:$amp$components$sections$team_section$tina_card_data$$, images:$amp$components$sections$team_section$tina_images$$, "flash-images-handler":$flash_images_handler$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_member_card$$, $G__149305$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_member_card$$, $G__149305$$);
        }(), function() {
          var $G__149313$$ = {data:$amp$components$sections$team_section$zadik_card_data$$, images:$amp$components$sections$team_section$zadik_images$$, "flash-images-handler":$flash_images_handler$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_member_card$$, $G__149313$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_member_card$$, $G__149313$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149285$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149285$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149277_map__149267_map__149267__$1_props__41675__auto__$jscomp$37_vec__149264$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149277_map__149267_map__149267__$1_props__41675__auto__$jscomp$37_vec__149264$$);
};
$amp$components$sections$team_section$team_section$$ = function($G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$, $maybe_ref__41676__auto__$jscomp$38$$) {
  $G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$), $maybe_ref__41676__auto__$jscomp$38$$], null);
  $G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$, 0, null);
  $G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$ = $APP.$cljs$core$__destructure_map$$($G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$, $cljs$cst$492$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$, $cljs$cst$489$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$, $cljs$cst$493$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$6$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$6$$);
  var $visited_QMARK_$jscomp$7$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$, 1, null);
  $G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$team_section$zadik_images$$);
  var $images$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$, 0, null), $set_images$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$, 1, null), $is_desktop_QMARK_$jscomp$4$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$(), $image_gallery_container_ref$jscomp$3$$ = 
  $APP.$helix$hooks$use_ref$$("image-gallery-container-ref");
  $G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$ = function() {
    return {ref:$outer_ctx$jscomp$6$$, className:"relative\n                        h-full w-full\n                        flex items-end justify-center\n                        pink-grad blue-light-grad", children:function() {
      var $G__149395$$ = function() {
        return {className:"relative\n                               flex\n                               overflow-hidden", children:[function() {
          var $G__149401_G__149408$jscomp$inline_3802$$ = {className:"overflow-hidden", style:{writingMode:$APP.$helix$impl$props$__GT_js$$("vertical-rl")}, children:"team.թիմ.équipe.equipo.squadra.team.թիմ.équipe.equipo.squadra.team"};
          $G__149401_G__149408$jscomp$inline_3802$$ = {className:"absolute left-0 top-0\n                                      font-futura font-bold text-8xl\n                                      light-blue-font-color\n                                      opacity-30", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149401_G__149408$jscomp$inline_3802$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149401_G__149408$jscomp$inline_3802$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149401_G__149408$jscomp$inline_3802$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149401_G__149408$jscomp$inline_3802$$);
        }(), function() {
          var $G__149422$$ = {"flash-images-handler":$set_images$jscomp$2$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_members$$, $G__149422$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_members$$, $G__149422$$);
        }(), $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$4$$) ? $visited_QMARK_$jscomp$7$$ : $is_desktop_QMARK_$jscomp$4$$) ? function() {
          var $G__149428_G__149435$jscomp$inline_3902_G__149441$jscomp$inline_3903_JSCompiler_inline_result$jscomp$inline_3901$$ = {images:$images$jscomp$4$$, "image-gallery-container-ref":$image_gallery_container_ref$jscomp$3$$};
          $G__149428_G__149435$jscomp$inline_3902_G__149441$jscomp$inline_3903_JSCompiler_inline_result$jscomp$inline_3901$$ = {className:"absolute h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $G__149428_G__149435$jscomp$inline_3902_G__149441$jscomp$inline_3903_JSCompiler_inline_result$jscomp$inline_3901$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, 
          $G__149428_G__149435$jscomp$inline_3902_G__149441$jscomp$inline_3903_JSCompiler_inline_result$jscomp$inline_3901$$)};
          $G__149428_G__149435$jscomp$inline_3902_G__149441$jscomp$inline_3903_JSCompiler_inline_result$jscomp$inline_3901$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149428_G__149435$jscomp$inline_3902_G__149441$jscomp$inline_3903_JSCompiler_inline_result$jscomp$inline_3901$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149428_G__149435$jscomp$inline_3902_G__149441$jscomp$inline_3903_JSCompiler_inline_result$jscomp$inline_3901$$);
          $G__149428_G__149435$jscomp$inline_3902_G__149441$jscomp$inline_3903_JSCompiler_inline_result$jscomp$inline_3901$$ = {ref:$image_gallery_container_ref$jscomp$3$$, className:"relative\n                                        w-8/12\n                                        ml-8\n                                        overflow-hidden", children:$G__149428_G__149435$jscomp$inline_3902_G__149441$jscomp$inline_3903_JSCompiler_inline_result$jscomp$inline_3901$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149428_G__149435$jscomp$inline_3902_G__149441$jscomp$inline_3903_JSCompiler_inline_result$jscomp$inline_3901$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149428_G__149435$jscomp$inline_3902_G__149441$jscomp$inline_3903_JSCompiler_inline_result$jscomp$inline_3901$$);
        }() : null]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149395$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149395$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__149385_map__149351_map__149351__$1_props__41675__auto__$jscomp$38_vec__149348_vec__149365_vec__149369$$);
};
$amp$components$sections$video_section$video_section$$ = function($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$39_vec__149655_vec__149660$$, $G__149671$jscomp$inline_3906_G__149675$jscomp$inline_3907_JSCompiler_inline_result$jscomp$inline_3905_maybe_ref__41676__auto__$jscomp$39_playback_id$$) {
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$39_vec__149655_vec__149660$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$39_vec__149655_vec__149660$$), $G__149671$jscomp$inline_3906_G__149675$jscomp$inline_3907_JSCompiler_inline_result$jscomp$inline_3905_maybe_ref__41676__auto__$jscomp$39_playback_id$$], 
  null);
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$39_vec__149655_vec__149660$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$39_vec__149655_vec__149660$$, 0, null);
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$39_vec__149655_vec__149660$$ = $APP.$cljs$core$__destructure_map$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$39_vec__149655_vec__149660$$);
  $G__149671$jscomp$inline_3906_G__149675$jscomp$inline_3907_JSCompiler_inline_result$jscomp$inline_3905_maybe_ref__41676__auto__$jscomp$39_playback_id$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$39_vec__149655_vec__149660$$, $APP.$cljs$cst$498$playback_id$$);
  var $allow_audio_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$39_vec__149655_vec__149660$$, $APP.$cljs$cst$499$allow_audio_QMARK_$$, !0);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$39_vec__149655_vec__149660$$ = $APP.$amp$providers$main_provider$use_main_state$$();
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$39_vec__149655_vec__149660$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$39_vec__149655_vec__149660$$, 1, null);
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$39_vec__149655_vec__149660$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  var $is_active_QMARK_$jscomp$11_vec__149663$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$39_vec__149655_vec__149660$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$382$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$11_vec__149663$$, 0, null);
  $is_active_QMARK_$jscomp$11_vec__149663$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$11_vec__149663$$, 1, null);
  $G__149671$jscomp$inline_3906_G__149675$jscomp$inline_3907_JSCompiler_inline_result$jscomp$inline_3905_maybe_ref__41676__auto__$jscomp$39_playback_id$$ = {"playback-id":$G__149671$jscomp$inline_3906_G__149675$jscomp$inline_3907_JSCompiler_inline_result$jscomp$inline_3905_maybe_ref__41676__auto__$jscomp$39_playback_id$$, "allow-audio?":$allow_audio_QMARK_$$, "should-play?":$is_active_QMARK_$jscomp$11_vec__149663$$};
  $G__149671$jscomp$inline_3906_G__149675$jscomp$inline_3907_JSCompiler_inline_result$jscomp$inline_3905_maybe_ref__41676__auto__$jscomp$39_playback_id$$ = {className:"h-full\n                           w-full\n                           flex\n                           relative \n                           flex items-center justify-items-center justify-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$video_section$lazy_video_background$$, 
  $G__149671$jscomp$inline_3906_G__149675$jscomp$inline_3907_JSCompiler_inline_result$jscomp$inline_3905_maybe_ref__41676__auto__$jscomp$39_playback_id$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$video_section$lazy_video_background$$, $G__149671$jscomp$inline_3906_G__149675$jscomp$inline_3907_JSCompiler_inline_result$jscomp$inline_3905_maybe_ref__41676__auto__$jscomp$39_playback_id$$)};
  $G__149671$jscomp$inline_3906_G__149675$jscomp$inline_3907_JSCompiler_inline_result$jscomp$inline_3905_maybe_ref__41676__auto__$jscomp$39_playback_id$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149671$jscomp$inline_3906_G__149675$jscomp$inline_3907_JSCompiler_inline_result$jscomp$inline_3905_maybe_ref__41676__auto__$jscomp$39_playback_id$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149671$jscomp$inline_3906_G__149675$jscomp$inline_3907_JSCompiler_inline_result$jscomp$inline_3905_maybe_ref__41676__auto__$jscomp$39_playback_id$$);
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$39_vec__149655_vec__149660$$ = {id:"video", ref:$G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$39_vec__149655_vec__149660$$, className:"absolute\n                    h-full\n                    w-full\n                    overflow-hidden", children:$G__149671$jscomp$inline_3906_G__149675$jscomp$inline_3907_JSCompiler_inline_result$jscomp$inline_3905_maybe_ref__41676__auto__$jscomp$39_playback_id$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$39_vec__149655_vec__149660$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$39_vec__149655_vec__149660$$);
};
$amp$components$sections$quote_section$quote_section$$ = function($G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$6_map__51763_props__41909__auto__$jscomp$21_vec__51760$$, $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$21_vec__51773_vec__51776$$) {
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$6_map__51763_props__41909__auto__$jscomp$21_vec__51760$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$6_map__51763_props__41909__auto__$jscomp$21_vec__51760$$), $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$21_vec__51773_vec__51776$$], null);
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$6_map__51763_props__41909__auto__$jscomp$21_vec__51760$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$6_map__51763_props__41909__auto__$jscomp$21_vec__51760$$, 0, null);
  var $map__51763__$1_to$jscomp$10$$ = $APP.$cljs$core$__destructure_map$$($G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$6_map__51763_props__41909__auto__$jscomp$21_vec__51760$$), $gradient_class$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $cljs$cst$492$gradient_class$$), $quote$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $cljs$cst$500$quote$$), $header$jscomp$5$$ = 
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $APP.$cljs$cst$325$header$$);
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$6_map__51763_props__41909__auto__$jscomp$21_vec__51760$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $cljs$cst$489$is_visible_QMARK_$$);
  var $children$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $APP.$cljs$cst$92$children$$);
  $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$21_vec__51773_vec__51776$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $cljs$cst$501$from$$);
  $map__51763__$1_to$jscomp$10$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__51763__$1_to$jscomp$10$$, $cljs$cst$502$to$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $from_transition$$ = $APP.$cljs$core$truth_$$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$21_vec__51773_vec__51776$$) ? $APP.$cljs$core$clj__GT_js$$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$21_vec__51773_vec__51776$$) : {opacity:0, duration:0.5, ease:"expo.inOut", stagger:0.1}, $to_transition$$ = $APP.$cljs$core$truth_$$($map__51763__$1_to$jscomp$10$$) ? $APP.$cljs$core$clj__GT_js$$($map__51763__$1_to$jscomp$10$$) : {opacity:1, 
  duration:0.15, ease:"expo.inOut", stagger:0.025}, $outer_ctx$jscomp$8$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $text_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("text-ref");
  $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$21_vec__51773_vec__51776$$ = $APP.$helix$hooks$use_state$$(new $APP.$module$node_modules$gsap$dist$gsap$$.gsap.timeline({paused:!0}));
  var $tl$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$21_vec__51773_vec__51776$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$21_vec__51773_vec__51776$$, 1, null);
  $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$21_vec__51773_vec__51776$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$8$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$21_vec__51773_vec__51776$$, 0, null);
  var $is_active_QMARK_$jscomp$12$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$21_vec__51773_vec__51776$$, 1, null);
  $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$21_vec__51773_vec__51776$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $splitter$jscomp$1$$ = $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($text_ref$jscomp$1$$)) ? new $APP.$module$node_modules$gsap$SplitText$$.SplitText($APP.$cljs$core$_deref$$($text_ref$jscomp$1$$), {type:"words,chars", charsClass:"playable-type-char"}) : null, $chars$jscomp$3$$ = $APP.$cljs$core$truth_$$($splitter$jscomp$1$$) ? $splitter$jscomp$1$$.chars : null, $ctx$jscomp$1$$ = $APP.$module$node_modules$gsap$dist$gsap$$.gsap.context(function() {
      return $tl$jscomp$2$$.from($chars$jscomp$3$$, $from_transition$$).to($chars$jscomp$3$$, $to_transition$$).timeScale(4);
    }, $outer_ctx$jscomp$8$$);
    return function() {
      return $ctx$jscomp$1$$.revert();
    };
  });
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$6_map__51763_props__41909__auto__$jscomp$21_vec__51760$$ = [$quote$jscomp$1$$, $text_ref$jscomp$1$$, $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$6_map__51763_props__41909__auto__$jscomp$21_vec__51760$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$21_vec__51773_vec__51776$$, $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$6_map__51763_props__41909__auto__$jscomp$21_vec__51760$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$21_vec__51773_vec__51776$$, 
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$6_map__51763_props__41909__auto__$jscomp$21_vec__51760$$);
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$6_map__51763_props__41909__auto__$jscomp$21_vec__51760$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($is_active_QMARK_$jscomp$12$$) ? $tl$jscomp$2$$.play() : null;
  });
  $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$21_vec__51773_vec__51776$$ = [$is_active_QMARK_$jscomp$12$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$6_map__51763_props__41909__auto__$jscomp$21_vec__51760$$, $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$21_vec__51773_vec__51776$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$6_map__51763_props__41909__auto__$jscomp$21_vec__51760$$, 
  $G__51796_51864_G__51803_51870_from$jscomp$9_maybe_ref__41910__auto__$jscomp$21_vec__51773_vec__51776$$);
  $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$6_map__51763_props__41909__auto__$jscomp$21_vec__51760$$ = function() {
    return {ref:$outer_ctx$jscomp$8$$, className:$APP.$helix$impl$props$normalize_class$$("h-full w-full " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($gradient_class$jscomp$3$$) ? $gradient_class$jscomp$3$$ : null)), children:function() {
      var $G__51814$$ = function() {
        return {ref:$text_ref$jscomp$1$$, className:"w-full h-full items-center justify-center flex", children:$APP.$cljs$core$truth_$$($children$jscomp$18$$) ? $children$jscomp$18$$ : function() {
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
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$6_map__51763_props__41909__auto__$jscomp$21_vec__51760$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__51797_51865_G__51802_51869_G__51806_is_visible_QMARK_$jscomp$6_map__51763_props__41909__auto__$jscomp$21_vec__51760$$);
};
$amp$components$sections$work_overview$work_overview$$ = function($G__149691_props__41675__auto__$jscomp$40$$) {
  $APP.$helix$core$extract_cljs_props$$($G__149691_props__41675__auto__$jscomp$40$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__149691_props__41675__auto__$jscomp$40$$ = function() {
    return {"section-id":"about-work", children:function() {
      var $G__149696$$ = function() {
        return {className:"flex\n               grey-grad\n                  justify-center\n                  items-center\n                  flex-col\n                  w-full", children:function() {
          var $G__149700$$ = function() {
            return {className:"text-slate-300\n                   font-light\n                   flex\n                   justify-center\n                   flex-col\n                   h-full\n                   py-8\n                   md:w-3/4 w-full\n                   p-8\n                   text-lg\n                   lg:text-2xl", children:[function() {
              var $G__149704$$ = {className:"mt-12\n                        mb-16\n                        font-bold\n                        font-futura\n                        text-5xl", children:"THE STUDIO"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149704$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149704$$);
            }(), function() {
              var $G__149711_G__149715$jscomp$inline_3498$$ = {className:"font-medium text-pink-600", children:":working-studio "};
              $G__149711_G__149715$jscomp$inline_3498$$ = {className:"mb-8", children:["For the full duration of the Biennale, the Armenia Pavilion becomes a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__149711_G__149715$jscomp$inline_3498$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__149711_G__149715$jscomp$inline_3498$$), "— Zadik Zadikian’s living laboratory, a site where form is made, unmade, and made again."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149711_G__149715$jscomp$inline_3498$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__149711_G__149715$jscomp$inline_3498$$);
            }(), function() {
              var $G__149721_G__149725$jscomp$inline_3501$$ = {className:"font-medium text-pink-600", children:":7–10 people"};
              $G__149721_G__149725$jscomp$inline_3501$$ = {className:"mb-8", children:["Each day, ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__149721_G__149725$jscomp$inline_3501$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__149721_G__149725$jscomp$inline_3501$$), " move through the space — assistants, fabricators, editors, camera crew — all part of a continuous organism of creation."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149721_G__149725$jscomp$inline_3501$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__149721_G__149725$jscomp$inline_3501$$);
            }(), function() {
              var $G__149730_G__149734$jscomp$inline_3504$$ = {className:"font-medium text-pink-600", children:":architecture-of-change"};
              $G__149730_G__149734$jscomp$inline_3504$$ = {className:"mb-8", children:["They produce thousands of modular units: lightweight foam forms hand-coated in thin plaster, each one a small gesture in a much larger ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__149730_G__149734$jscomp$inline_3504$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__149730_G__149734$jscomp$inline_3504$$), "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149730_G__149734$jscomp$inline_3504$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__149730_G__149734$jscomp$inline_3504$$);
            }(), function() {
              var $G__149738_G__149742$jscomp$inline_3507$$ = {className:"font-medium text-pink-600", children:"breath"};
              $G__149738_G__149742$jscomp$inline_3507$$ = {className:"mb-8", children:["These units are stacked into structures — walls, pyramids, horizons, interior architectures — shifting daily as fragile formations rise and dissolve like ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__149738_G__149742$jscomp$inline_3507$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__149738_G__149742$jscomp$inline_3507$$), "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149738_G__149742$jscomp$inline_3507$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__149738_G__149742$jscomp$inline_3507$$);
            }(), function() {
              var $G__149746_G__149752$jscomp$inline_3510$$ = {className:"font-medium text-pink-600", children:":The-artwork"};
              $G__149746_G__149752$jscomp$inline_3510$$ = {className:"mb-12 italic", children:["Nothing is static. Nothing is final. ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__149746_G__149752$jscomp$inline_3510$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__149746_G__149752$jscomp$inline_3510$$), " is the cycle itself — the rhythm of making, unmaking, and returning again to zero."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149746_G__149752$jscomp$inline_3510$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__149746_G__149752$jscomp$inline_3510$$);
            }(), function() {
              var $G__149756$$ = {className:"mb-8 italic", children:"In Minor Keys — The Philosophy of the Work"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149756$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149756$$);
            }(), function() {
              var $G__149760_G__149764$jscomp$inline_3513$$ = {className:"font-medium text-pink-600", children:":Structure"};
              $G__149760_G__149764$jscomp$inline_3513$$ = {className:"mb-8", children:["Here, repetition becomes a meditation. Labor becomes devotion. ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__149760_G__149764$jscomp$inline_3513$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__149760_G__149764$jscomp$inline_3513$$), " is only a temporary embodiment of an ongoing frequency."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149760_G__149764$jscomp$inline_3513$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__149760_G__149764$jscomp$inline_3513$$);
            }(), function() {
              var $G__149768_G__149772$jscomp$inline_3516$$ = {className:"font-medium text-pink-600", children:":organism"};
              $G__149768_G__149772$jscomp$inline_3516$$ = {className:"mb-8", children:["The studio behaves like an ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__149768_G__149772$jscomp$inline_3516$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__149768_G__149772$jscomp$inline_3516$$), " — sensitive, cyclical, and always in motion, responding to the theme of “In Minor Keys” through gestures rather than declarations."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149768_G__149772$jscomp$inline_3516$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__149768_G__149772$jscomp$inline_3516$$);
            }(), function() {
              var $G__149776_G__149781$jscomp$inline_3519$$ = {className:"font-medium text-pink-600", children:":quiet-resilience"};
              $G__149776_G__149781$jscomp$inline_3519$$ = {className:"mb-8", children:["The material language is intentionally light: foam, plaster, dust. Fragile materials meet fragile cycles — a nod to Armenian histories of endurance, where the act of repeating becomes a form of survival, a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__149776_G__149781$jscomp$inline_3519$$) : $APP.$helix$core$jsx$$.call(null, "span", 
              $G__149776_G__149781$jscomp$inline_3519$$), "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149776_G__149781$jscomp$inline_3519$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__149776_G__149781$jscomp$inline_3519$$);
            }(), function() {
              var $G__149785$$ = {className:"mb-8", children:"Nothing here reaches for spectacle. The work moves in frequencies, not fireworks. What matters is the pulse — the rhythm of stacking, filming, dismantling, and returning again to the beginning."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149785$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__149785$$);
            }(), function() {
              var $G__149789_G__149793$jscomp$inline_3522$$ = {className:"font-medium text-pink-600", children:":score"};
              $G__149789_G__149793$jscomp$inline_3522$$ = {className:"mb-8", children:["This cycle functions like a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__149789_G__149793$jscomp$inline_3522$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__149789_G__149793$jscomp$inline_3522$$), ": a choreography of hands, blocks, dust, light. Each day, the studio composes itself anew, only to erase itself by night."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__149789_G__149793$jscomp$inline_3522$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__149789_G__149793$jscomp$inline_3522$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149700$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149700$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149696$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149696$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__149691_props__41675__auto__$jscomp$40$$, "about-work") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__149691_props__41675__auto__$jscomp$40$$, "about-work");
};
$APP.$amp$views$landing_view$landing_view$$ = function($G__149871_props__41675__auto__$jscomp$41$$) {
  $APP.$helix$core$extract_cljs_props$$($G__149871_props__41675__auto__$jscomp$41$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $container_ref$$ = $APP.$helix$hooks$use_ref$$("container-ref"), $is_desktop_QMARK_$jscomp$5$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__149871_props__41675__auto__$jscomp$41$$ = function() {
    return {ref:$container_ref$$, className:$APP.$helix$impl$props$normalize_class$$("overflow-x-hidden grey-grad " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-900  dark:text-slate-100")), children:[function() {
      var $G__149891_G__149899$jscomp$inline_3148$$ = {};
      $G__149891_G__149899$jscomp$inline_3148$$ = {className:"fixed top-2 right-2 sm:top-4 sm:right-4 z-50", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$theme_toggle$theme_toggle$$, $G__149891_G__149899$jscomp$inline_3148$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$theme_toggle$theme_toggle$$, $G__149891_G__149899$jscomp$inline_3148$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149891_G__149899$jscomp$inline_3148$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149891_G__149899$jscomp$inline_3148$$);
    }(), $APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$5$$) ? function() {
      var $G__149905$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$navs$logo_nav$logo_nav$$, $G__149905$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$navs$logo_nav$logo_nav$$, $G__149905$$);
    }() : null, $APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$5$$) ? function() {
      var $G__149911$$ = function() {
        return {"section-id":"video", children:function() {
          var $G__149920$$ = function() {
            return {className:"w-screen h-screen relative", children:[function() {
              var $G__149928_G__149932$jscomp$inline_3525$$ = {"playback-id":"fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo"};
              $G__149928_G__149932$jscomp$inline_3525$$ = {className:"absolute w-full h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$video_section$video_section$$, $G__149928_G__149932$jscomp$inline_3525$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$video_section$video_section$$, $G__149928_G__149932$jscomp$inline_3525$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149928_G__149932$jscomp$inline_3525$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149928_G__149932$jscomp$inline_3525$$);
            }(), function() {
              var $G__149940_G__149944$jscomp$inline_3153$$ = {};
              $G__149940_G__149944$jscomp$inline_3153$$ = {className:"absolute w-full h-full pointer-events-none", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$playful_titles$playful_titles$$, $G__149940_G__149944$jscomp$inline_3153$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$playful_titles$playful_titles$$, $G__149940_G__149944$jscomp$inline_3153$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149940_G__149944$jscomp$inline_3153$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149940_G__149944$jscomp$inline_3153$$);
            }(), function() {
              var $G__149950$$ = function() {
                return {className:"absolute bottom-[40px] left-1/2 -translate-x-1/2", children:function() {
                  var $G__149956$$ = function() {
                    return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
                      return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                    }};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__149956$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__149956$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149950$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149950$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149920$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149920$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__149911$$, "video") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__149911$$, "video");
    }() : function() {
      var $G__149966_G__149975$jscomp$inline_3156$$ = {};
      $G__149966_G__149975$jscomp$inline_3156$$ = {"section-id":"mobile-hero", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, $G__149966_G__149975$jscomp$inline_3156$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, $G__149966_G__149975$jscomp$inline_3156$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__149966_G__149975$jscomp$inline_3156$$, "mobile-hero") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__149966_G__149975$jscomp$inline_3156$$, "mobile-hero");
    }(), function() {
      var $G__149978_G__149983$jscomp$inline_3159$$ = {};
      $G__149978_G__149983$jscomp$inline_3159$$ = {"section-id":"teaser", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$teaser_section$teaser_section$$, $G__149978_G__149983$jscomp$inline_3159$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$teaser_section$teaser_section$$, $G__149978_G__149983$jscomp$inline_3159$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__149978_G__149983$jscomp$inline_3159$$, "teaser") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__149978_G__149983$jscomp$inline_3159$$, "teaser");
    }(), function() {
      var $G__149985$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$("w-full max-w-full overflow-x-hidden flex justify-center"), children:function() {
          var $G__149990$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("flex flex-col " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("w-full lg:w-8/12 min-w-0")), children:[function() {
              var $G__149994$$ = {id:"press-release", title:"Press Release"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$sections$press_release$press_release$$, $G__149994$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$sections$press_release$press_release$$, $G__149994$$);
            }(), function() {
              var $G__149998$$ = {id:"about-studio", title:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$sections$about_studio$about_studio$$, $G__149998$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$sections$about_studio$about_studio$$, $G__149998$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149990$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149990$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149985$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149985$$);
    }(), function() {
      var $G__150003$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$site_footer$site_footer$$, $G__150003$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$site_footer$site_footer$$, $G__150003$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149871_props__41675__auto__$jscomp$41$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__149871_props__41675__auto__$jscomp$41$$);
};
$cljs$cst$488$images$$ = new $APP.$cljs$core$Keyword$$(null, "images", "images", 1757475080);
$cljs$cst$501$from$$ = new $APP.$cljs$core$Keyword$$(null, "from", "from", 1815293044);
$cljs$cst$489$is_visible_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "is-visible?", "is-visible?", 1902717363);
$cljs$cst$481$on_click_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-click-handler", "on-click-handler", 746440723);
$cljs$cst$493$force_on_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "force-on?", "force-on?", -971910051);
$cljs$cst$490$image_gallery_container_ref$$ = new $APP.$cljs$core$Keyword$$(null, "image-gallery-container-ref", "image-gallery-container-ref", 984527810);
$cljs$cst$492$gradient_class$$ = new $APP.$cljs$core$Keyword$$(null, "gradient-class", "gradient-class", 37945374);
$cljs$cst$486$target_ref$$ = new $APP.$cljs$core$Keyword$$(null, "target-ref", "target-ref", -164384803);
$cljs$cst$474$boxDecorationBreak$$ = new $APP.$cljs$core$Keyword$$(null, "boxDecorationBreak", "boxDecorationBreak", 826536500);
$cljs$cst$484$writing$$ = new $APP.$cljs$core$Keyword$$(null, "writing", "writing", -1486865108);
$cljs$cst$497$flash_images_handler$$ = new $APP.$cljs$core$Keyword$$(null, "flash-images-handler", "flash-images-handler", -431066401);
$cljs$cst$487$other$$ = new $APP.$cljs$core$Keyword$$(null, "other", "other", 995793544);
$cljs$cst$483$on_mouse_out_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-mouse-out-handler", "on-mouse-out-handler", -2132576332);
$cljs$cst$475$WebkitBoxDecorationBreak$$ = new $APP.$cljs$core$Keyword$$(null, "WebkitBoxDecorationBreak", "WebkitBoxDecorationBreak", 1903427859);
$cljs$cst$482$on_mouse_over_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-mouse-over-handler", "on-mouse-over-handler", -1708524524);
$cljs$cst$485$click$$ = new $APP.$cljs$core$Keyword$$(null, "click", "click", 1912301393);
$cljs$cst$495$social$$ = new $APP.$cljs$core$Keyword$$(null, "social", "social", -1560314971);
$cljs$cst$500$quote$$ = new $APP.$cljs$core$Keyword$$(null, "quote", "quote", -262615245);
$cljs$cst$478$hover_title_ref$$ = new $APP.$cljs$core$Keyword$$(null, "hover-title-ref", "hover-title-ref", -819024146);
$cljs$cst$477$sm$$ = new $APP.$cljs$core$Keyword$$(null, "sm", "sm", -1402575065);
$cljs$cst$496$email$$ = new $APP.$cljs$core$Keyword$$(null, "email", "email", 1415816706);
$cljs$cst$502$to$$ = new $APP.$cljs$core$Keyword$$(null, "to", "to", 192099007);
$cljs$cst$480$is_playing_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "is-playing?", "is-playing?", -274112098);
$cljs$cst$491$copy$$ = new $APP.$cljs$core$Keyword$$(null, "copy", "copy", -1077617309);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("landing-view");
var $amp$components$sections$teaser_section$lazy_video$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$components$elements$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$teaser_section$teaser_section$$, '(hooks/use-ref "outer-ref")(use-scroll-trigger outer-ref {:end "bottom"})', null, null) : (void 0).call(null, 
$amp$components$sections$teaser_section$teaser_section$$, '(hooks/use-ref "outer-ref")(use-scroll-trigger outer-ref {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$teaser_section$teaser_section$$, "amp.components.sections.teaser-section/teaser-section"));
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
var $amp$components$sections$about_biennale$images$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/biennale/metalocus_venice-biennale-corderie-arsenale-photo-giulio-squillacciotti_01.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/biennale/arsenale-venezia.jpg", 
$APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/biennale/6431873131_844b5c6d48_b-112659047.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/biennale/Edificio-E-delle-Sale-dArmi-sud-Arsenale-di-Venezia_01-406863818.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/biennale/GettyImages-1396739612-2882003488.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/biennale/arsenale-venezia-cosa-vedere-come-visitare-408454160.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/biennale/Pavilions-tours-plan.png", 
$APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/biennale/Pavilions-tours-plan.png", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/biennale/IMG_1754-scaled-1386547518.jpg", $APP.$cljs$cst$428$caption$$, null], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$about_biennale$title$$, "", null, null) : (void 0).call(null, $amp$components$sections$about_biennale$title$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$about_biennale$title$$, "amp.components.sections.about-biennale/title"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$about_biennale$copy_block$$, "", null, null) : (void 0).call(null, $amp$components$sections$about_biennale$copy_block$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$about_biennale$copy_block$$, "amp.components.sections.about-biennale/copy-block"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$about_biennale$about_biennale_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', 
null, null) : (void 0).call(null, $amp$components$sections$about_biennale$about_biennale_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$about_biennale$about_biennale_section$$, "amp.components.sections.about-biennale/about-biennale-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$contact_section$contact_section$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $amp$components$sections$contact_section$contact_section$$, 
"(use-scroll-to-id)", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$contact_section$contact_section$$, "amp.components.sections.contact-section/contact-section"));
var $amp$components$sections$mobile_hero_section$lazy_video_background$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$components$elements$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null) : 
(void 0).call(null, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, "amp.components.sections.mobile-hero-section/mobile-hero-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$site_footer$site_footer$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $amp$components$sections$site_footer$site_footer$$, 
"(use-scroll-to-id)", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$site_footer$site_footer$$, "amp.components.sections.site-footer/site-footer"));
var $amp$components$sections$non_profit$images$$ = new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/biennale/metalocus_venice-biennale-corderie-arsenale-photo-giulio-squillacciotti_01.jpg", $APP.$cljs$cst$428$caption$$, "Arsenale", $APP.$cljs$cst$429$credit$$, "Artnews"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$416$src$$, 
"https://atd-722658831.imgix.net/biennale/arsenale-venezia.jpg", $APP.$cljs$cst$428$caption$$, "Arsenale", $APP.$cljs$cst$429$credit$$, "Artnews"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/biennale/6431873131_844b5c6d48_b-112659047.jpg", $APP.$cljs$cst$428$caption$$, "Arsenale", $APP.$cljs$cst$429$credit$$, "Artnews"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$title$$, "", null, null) : (void 0).call(null, $amp$components$sections$non_profit$title$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$title$$, 
"amp.components.sections.non-profit/title"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$copy_block$$, "", null, null) : (void 0).call(null, $amp$components$sections$non_profit$copy_block$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$copy_block$$, "amp.components.sections.non-profit/copy-block"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$non_profit_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', 
null, null) : (void 0).call(null, $amp$components$sections$non_profit$non_profit_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$non_profit_section$$, "amp.components.sections.non-profit/non-profit-section"));
var $amp$components$sections$team_section$zadik_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/zadik/shovel-nails.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/zadik/zz-portrait.tiff", $APP.$cljs$cst$428$caption$$, 
null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/zadik/single_stack_1970s.tif", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/zadik/golden_water_heater.tif", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-10.psd", 
$APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-76.psd", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/zadik/golden_kitchen.tif", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/2.webp", 
$APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/zadik/ps1_entrance_1.tif", 
$APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-18.psd", 
$APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/2.webp?fit\x3dcrop\x26w\x3d214\x26h\x3d172\x26dpr\x3d2\x26q\x3d50\x26auto\x3dformat%2Ccompress\x26cacheID\x3d1763536997", $APP.$cljs$cst$428$caption$$, null], null)], null), $amp$components$sections$team_section$tina_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 20, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/2.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$428$caption$$, null], null)], null), $amp$components$sections$team_section$tony_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 22, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", 
$APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, 
[$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, 
"https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$428$caption$$, 
null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$428$caption$$, null], null), 
new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, 
"https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", 
$APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, 
[$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$428$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$416$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", 
$APP.$cljs$cst$428$caption$$, null], null)], null), $amp$components$sections$team_section$tony_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$182$name$$, "Tony Shafrazi", $APP.$cljs$cst$494$role$$, "Curator", $cljs$cst$495$social$$, "@tonyshafrazi", $cljs$cst$496$email$$, "tony.shafrazi@armenianpavilion2026.org", $cljs$cst$491$copy$$, "Tony Shafrazi (b. 1943, Abadan, Iran) is a renowned art dealer, gallerist, and curator whose career has shaped the contemporary art world. Trained at the Royal College of Art in London, he moved to New York in 1969 and soon became closely associated with figures such as Andy Warhol, Roy Lichtenstein, and Leo Castelli. His early years were marked by bold artistic interventions, before establishing himself as one of the leading dealers of his generation.\n                      \n                      In 1979, he opened the Tony Shafrazi Gallery in New York, championing artists like Jean-Michel Basquiat, Keith Haring, and Kenny Scharf, alongside exhibitions of Picasso, Francis Bacon, Jasper Johns, Carl Andre, and Warhol. Internationally, he advised the Tehran Museum of Contemporary Art in assembling one of the most significant collections of Western modernism outside Europe and the United States.\n                      \n                      Shafrazi first met Zadik Zadikian while the artist was working with Richard Serra, later including him in his historic Tehran exhibition before the 1979 Revolution. Their collaboration forged a lasting connection, and Shafrazi has supported Zadikian’s work over the decades. For this project, he brings unrivaled experience, a global network, and a deep commitment to presenting Armenia on the world stage at the Venice Biennale."], 
null), $amp$components$sections$team_section$tina_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$182$name$$, "Tina Chakarian", $APP.$cljs$cst$494$role$$, "Curator", $cljs$cst$495$social$$, "@tinachakarian", $cljs$cst$496$email$$, "tina.chakarian@armenianpavilion2026.org", $cljs$cst$491$copy$$, "Tina Chakarian is a curator currently living in Boston and Yerevan. \n\nBorn and raised in Beirut, Lebanon, she studied Visual Arts at UCLA and Tufts University. \n\nShe was previously the Development Director at the Armenian Museum of America and an adjunct Professor at several Boston based universities.  Tina serves as a Principal and Creative Director at Chakarian Design Group, LLC, and, co-curates the Midway Artists Studios in Boston. \n\nAs a visual artist, Tina has exhibited a number of installations in the U.S., Lebanon and Armenia, including “Living Utopias” (Yerevan, 2018). \n\nShe has decades of experience in the field of philanthropy, where she combines her skills as an artist and fundraiser, to help support organizations and initiatives closest to her heart. \n"], 
null), $amp$components$sections$team_section$zadik_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$182$name$$, "Zadik Zadikian", $APP.$cljs$cst$494$role$$, "Artist", $cljs$cst$495$social$$, "@zadikzadikian", $cljs$cst$496$email$$, "zadik.zadikian@armenianpavilion2026.org", $cljs$cst$491$copy$$, "Born in 1948 in Yerevan, Soviet Armenia, Zadik Zadikian entered the Art Academy at fifteen and exhibited in Yerevan and Moscow before escaping the Soviet Union at nineteen by swimming across the Arax River in winter. In 1969 he arrived in San Francisco, apprenticing with sculptor Beniamino Bufano, and later moved to New York where he assisted Richard Serra on his first monumental oil-stick wall drawings—one of which was named after him. These encounters with scale, discipline, and radical form became the foundation of his artistic language.\n\nIn 1976, Zadikian gilded his entire 10,000-square-foot studio in industrial gold, an immersive act of transformation that anticipated his project 1000 Bricks Gilded in 24-Karat Gold Leaf (1978). Since then, gold has remained his central medium—at once alchemical and architectural, extravagant yet elemental. His brick-like forms distill structure into essence, revealing permanence through repetition and beauty within order.\n\nReflecting on exile, Zadikian writes: “When I escaped, I lost everything—my family, my country, my world. That void became my canvas. Gold is the witness. Beauty is found within structure. Repetition is the foundation of change.” Now based in Los Angeles, he has recently exhibited at the Brooklyn Museum and Tony Shafrazi’s Gallery Without Walls."], 
null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$team_section$team_member_card$$, "", null, null) : (void 0).call(null, $amp$components$sections$team_section$team_member_card$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$team_section$team_member_card$$, "amp.components.sections.team-section/team-member-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$team_section$team_members$$, "", null, null) : (void 0).call(null, $amp$components$sections$team_section$team_members$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$team_section$team_members$$, "amp.components.sections.team-section/team-members"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$team_section$team_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state zadik-images)(use-touch-enabled)(hooks/use-ref "image-gallery-container-ref")', 
null, null) : (void 0).call(null, $amp$components$sections$team_section$team_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state zadik-images)(use-touch-enabled)(hooks/use-ref "image-gallery-container-ref")', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$team_section$team_section$$, "amp.components.sections.team-section/team-section"));
var $amp$components$sections$video_section$lazy_video_background$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$components$elements$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$video_section$video_section$$, '(use-main-state)(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, 
null) : (void 0).call(null, $amp$components$sections$video_section$video_section$$, '(use-main-state)(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$video_section$video_section$$, "amp.components.sections.video-section/video-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$quote_section$quote_section$$, '(hooks/use-ref "outer-ctx")(hooks/use-ref "text-ref")(hooks/use-state (new (.-timeline gsap) {:paused true}))(use-scroll-trigger outer-ctx)(hooks/use-layout-effect [quote text-ref is-visible?] (let [splitter (when (clojure.core/deref text-ref) (new SplitText (clojure.core/deref text-ref) {:type "words,chars", :charsClass "playable-type-char"})) chars (when splitter (.-chars splitter)) ctx (.context gsap (fn [] (-\x3e tl (.from chars from-transition) (.to chars to-transition) (.timeScale 4))) outer-ctx)] (fn [] (.revert ctx))))(hooks/use-effect [is-active?] (when is-active? (.play tl)))', 
null, null) : (void 0).call(null, $amp$components$sections$quote_section$quote_section$$, '(hooks/use-ref "outer-ctx")(hooks/use-ref "text-ref")(hooks/use-state (new (.-timeline gsap) {:paused true}))(use-scroll-trigger outer-ctx)(hooks/use-layout-effect [quote text-ref is-visible?] (let [splitter (when (clojure.core/deref text-ref) (new SplitText (clojure.core/deref text-ref) {:type "words,chars", :charsClass "playable-type-char"})) chars (when splitter (.-chars splitter)) ctx (.context gsap (fn [] (-\x3e tl (.from chars from-transition) (.to chars to-transition) (.timeScale 4))) outer-ctx)] (fn [] (.revert ctx))))(hooks/use-effect [is-active?] (when is-active? (.play tl)))', 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$quote_section$quote_section$$, "amp.components.sections.quote-section/quote-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$work_overview$work_overview$$, "", null, null) : (void 0).call(null, $amp$components$sections$work_overview$work_overview$$, "", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$work_overview$work_overview$$, "amp.components.sections.work-overview/work-overview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$views$landing_view$landing_view$$, '(hooks/use-ref "container-ref")(use-touch-enabled)', null, null) : (void 0).call(null, $APP.$amp$views$landing_view$landing_view$$, 
'(hooks/use-ref "container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$views$landing_view$landing_view$$, "amp.views.landing-view/landing-view"));
$APP.$module$contents$shadow$loader_mm$$.$setLoaded$();

}).call(this);