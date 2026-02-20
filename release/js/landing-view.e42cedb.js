(function(){
'use strict';
var $cljs$core$rand_int$$, $amp$hooks$use_scroll_trigger$use_scroll_trigger$$, $amp$components$sections$teaser_section$teaser_section$$, $amp$hooks$use_window_resize$use_window_size$$, $amp$components$navs$donation_nav$donation_nav$$, $amp$components$navs$logo_nav$logo_nav$$, $amp$components$hover_title$hover_title$$, $amp$components$ui$playable_text$playable_text$$, $amp$components$nav_link$nav_link$$, $amp$components$playful_titles$hero_menu$$, $amp$components$playful_titles$playful_titles$$, $amp$components$elements$lazy_image_gallery$check_column_dimensions$$, 
$amp$components$elements$lazy_image_gallery$aspect_column$$, $amp$components$elements$lazy_image_gallery$find_closest_size$$, $amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$, $amp$components$elements$lazy_image_gallery$image_layer$$, $amp$components$elements$lazy_image_gallery$caption_layer$$, $amp$components$elements$lazy_image_gallery$image_card$$, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $amp$components$sections$about_biennale$title$$, $amp$components$sections$about_biennale$copy_block$$, 
$amp$components$sections$about_biennale$about_biennale_section$$, $amp$components$sections$contact_section$contact_section$$, $amp$components$sections$artist_section$artist_section$$, $amp$components$sections$curators_section$curator_card$$, $amp$components$sections$curators_section$curators_section$$, $amp$components$sections$in_minor_keys$pull_quote$$, $amp$components$sections$in_minor_keys$curator_card$$, $amp$components$sections$in_minor_keys$preview$$, $amp$components$sections$in_minor_keys$details$$, 
$amp$components$sections$in_minor_keys$in_minor_keys$$, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, $amp$components$sections$site_footer$site_footer$$, $amp$components$sections$non_profit$title$$, $amp$components$sections$non_profit$copy_block$$, $amp$components$sections$non_profit$non_profit_section$$, $amp$components$sections$team_section$team_member_card$$, $amp$components$sections$team_section$team_members$$, $amp$components$sections$team_section$team_section$$, $amp$components$sections$video_section$video_section$$, 
$amp$components$sections$quote_section$quote_section$$, $amp$components$sections$work_overview$work_overview$$, $cljs$cst$490$images$$, $cljs$cst$499$visible_QMARK_$$, $cljs$cst$507$from$$, $cljs$cst$491$is_visible_QMARK_$$, $cljs$cst$483$on_click_handler$$, $cljs$cst$495$force_on_QMARK_$$, $cljs$cst$492$image_gallery_container_ref$$, $cljs$cst$494$gradient_class$$, $cljs$cst$488$target_ref$$, $cljs$cst$497$img$$, $cljs$cst$476$boxDecorationBreak$$, $cljs$cst$486$writing$$, $cljs$cst$503$flash_images_handler$$, 
$cljs$cst$489$other$$, $cljs$cst$485$on_mouse_out_handler$$, $cljs$cst$477$WebkitBoxDecorationBreak$$, $cljs$cst$484$on_mouse_over_handler$$, $cljs$cst$500$attribution$$, $cljs$cst$487$click$$, $cljs$cst$501$social$$, $cljs$cst$506$quote$$, $cljs$cst$480$hover_title_ref$$, $cljs$cst$498$bio$$, $cljs$cst$479$sm$$, $cljs$cst$502$email$$, $cljs$cst$508$to$$, $cljs$cst$482$is_playing_QMARK_$$, $cljs$cst$493$copy$$;
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
$amp$components$sections$teaser_section$teaser_section$$ = function($G__306951_props__41632__auto__$jscomp$13_vec__306942$$) {
  $APP.$helix$core$extract_cljs_props$$($G__306951_props__41632__auto__$jscomp$13_vec__306942$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ref$$ = $APP.$helix$hooks$use_ref$$("outer-ref");
  $G__306951_props__41632__auto__$jscomp$13_vec__306942$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$382$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__306951_props__41632__auto__$jscomp$13_vec__306942$$, 0, null);
  var $is_active_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__306951_props__41632__auto__$jscomp$13_vec__306942$$, 1, null), $clone_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$476$boxDecorationBreak$$, "clone", $cljs$cst$477$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__306951_props__41632__auto__$jscomp$13_vec__306942$$ = function() {
    return {id:"teaser", ref:$outer_ref$$, className:"relative w-full min-h-screen overflow-hidden", children:[function() {
      var $G__306958_G__306963$jscomp$inline_3499$$ = {"allow-audio?":!1, "playback-id":"Izp5007Abkc00t4Ubns7pAiqq2zG7JIp01tvAoaVOny7O00", "should-play?":$is_active_QMARK_$jscomp$4$$};
      $G__306958_G__306963$jscomp$inline_3499$$ = {className:"absolute inset-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$teaser_section$lazy_video$$, $G__306958_G__306963$jscomp$inline_3499$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$teaser_section$lazy_video$$, $G__306958_G__306963$jscomp$inline_3499$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__306958_G__306963$jscomp$inline_3499$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__306958_G__306963$jscomp$inline_3499$$);
    }(), function() {
      var $G__306971$$ = function() {
        return {className:"relative z-10 flex flex-col justify-center\n               min-h-screen px-6 sm:px-12 lg:px-20\n               py-16 sm:py-24\n               max-w-4xl", children:[function() {
          var $G__306977_G__306981$jscomp$inline_3502$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/70 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"The Studio"};
          $G__306977_G__306981$jscomp$inline_3502$$ = {className:"font-display font-bold uppercase tracking-wider\n                leading-relaxed text-4xl sm:text-5xl lg:text-6xl text-white mb-6", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__306977_G__306981$jscomp$inline_3502$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__306977_G__306981$jscomp$inline_3502$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__306977_G__306981$jscomp$inline_3502$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__306977_G__306981$jscomp$inline_3502$$);
        }(), function() {
          var $G__306994_G__307002$jscomp$inline_3505$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/50 px-3 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"A living studio at the heart of the Venice Biennale"};
          $G__306994_G__307002$jscomp$inline_3505$$ = {className:"font-display text-sm sm:text-base uppercase tracking-[0.15em]\n                leading-loose text-white/90 mb-8 max-w-xl", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__306994_G__307002$jscomp$inline_3505$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__306994_G__307002$jscomp$inline_3505$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__306994_G__307002$jscomp$inline_3505$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__306994_G__307002$jscomp$inline_3505$$);
        }(), function() {
          var $G__307015_G__307023$jscomp$inline_3979_G__307028$jscomp$inline_3980$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"Over six months, sculptor Zadik Zadikian and his team will occupy the Arsenale Militare—casting, assembling, and building in real time. Nothing is fixed. Nothing is final. The work is the making itself."};
          $G__307015_G__307023$jscomp$inline_3979_G__307028$jscomp$inline_3980$$ = {className:"font-display text-xs sm:text-sm leading-relaxed text-white/80", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__307015_G__307023$jscomp$inline_3979_G__307028$jscomp$inline_3980$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307015_G__307023$jscomp$inline_3979_G__307028$jscomp$inline_3980$$)};
          $G__307015_G__307023$jscomp$inline_3979_G__307028$jscomp$inline_3980$$ = {className:"space-y-3 mb-10 max-w-lg", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307015_G__307023$jscomp$inline_3979_G__307028$jscomp$inline_3980$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307015_G__307023$jscomp$inline_3979_G__307028$jscomp$inline_3980$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307015_G__307023$jscomp$inline_3979_G__307028$jscomp$inline_3980$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307015_G__307023$jscomp$inline_3979_G__307028$jscomp$inline_3980$$);
        }(), function() {
          var $G__307040$$ = function() {
            return {className:"grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10", children:[function() {
              var $G__307049$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__307053$$ = {className:"font-display font-medium text-[10px] uppercase tracking-[0.2em] text-amber-300/70", children:"Opening"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307053$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307053$$);
                }(), function() {
                  var $G__307059_G__307065$jscomp$inline_3511$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"9 May – 22 November 2026"};
                  $G__307059_G__307065$jscomp$inline_3511$$ = {className:"font-display text-xs sm:text-sm text-white/90", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__307059_G__307065$jscomp$inline_3511$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307059_G__307065$jscomp$inline_3511$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307059_G__307065$jscomp$inline_3511$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307059_G__307065$jscomp$inline_3511$$);
                }(), function() {
                  var $G__307072$$ = {className:"font-display font-medium text-[9px] text-amber-200/40 mt-1", children:"Preview: 6, 7, 8 May"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307072$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307072$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307049$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307049$$);
            }(), function() {
              var $G__307078$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__307086$$ = {className:"font-display font-medium text-[10px] uppercase tracking-[0.2em] text-amber-300/70", children:"Venue"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307086$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307086$$);
                }(), function() {
                  var $G__307091_G__307100$jscomp$inline_3514$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"Arsenale Militare, Venice"};
                  $G__307091_G__307100$jscomp$inline_3514$$ = {href:"https://maps.app.goo.gl/QvYkqwN1Bv7L9VDn7", target:"_blank", rel:"noopener noreferrer", className:"font-display text-xs sm:text-sm text-white/90 hover:text-white\n                      underline underline-offset-4 decoration-white/30 hover:decoration-white/60\n                      transition-colors block whitespace-nowrap", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", 
                  $G__307091_G__307100$jscomp$inline_3514$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307091_G__307100$jscomp$inline_3514$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__307091_G__307100$jscomp$inline_3514$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__307091_G__307100$jscomp$inline_3514$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307078$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307078$$);
            }(), function() {
              var $G__307104$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__307111$$ = {className:"font-display font-medium text-[10px] uppercase tracking-[0.2em] text-amber-300/70", children:"Pavilion"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307111$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307111$$);
                }(), function() {
                  var $G__307122_G__307126$jscomp$inline_3517$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"Republic of Armenia"};
                  $G__307122_G__307126$jscomp$inline_3517$$ = {className:"font-display text-xs sm:text-sm text-white/90", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__307122_G__307126$jscomp$inline_3517$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307122_G__307126$jscomp$inline_3517$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307122_G__307126$jscomp$inline_3517$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307122_G__307126$jscomp$inline_3517$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307104$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307104$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307040$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307040$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__306971$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__306971$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__306951_props__41632__auto__$jscomp$13_vec__306942$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__306951_props__41632__auto__$jscomp$13_vec__306942$$);
};
$amp$hooks$use_window_resize$use_window_size$$ = function() {
  var $G__51951_52001_vec__51941$$ = $APP.$helix$hooks$use_state$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$408$width$$, window.innerWidth, $APP.$cljs$cst$409$height$$, window.innerHeight], null)), $dimensions$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51951_52001_vec__51941$$, 0, null), $set_dimensions_BANG_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__51951_52001_vec__51941$$, 1, null), $resize_handler$jscomp$1$$ = 
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
      var $G__51950$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$408$width$$, window.innerWidth, $APP.$cljs$cst$409$height$$, window.innerHeight], null);
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
$amp$components$navs$donation_nav$donation_nav$$ = function($G__282050_G__282087_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$6$$) {
  $APP.$helix$core$extract_cljs_props$$($G__282050_G__282087_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$6$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__282050_G__282087_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$6$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  var $dimensions$jscomp$6$$ = $amp$hooks$use_window_resize$use_window_size$$(), $is_active_QMARK_$jscomp$5_vec__282029$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$356$start$$, function() {
    return window.innerHeight;
  }, $APP.$cljs$cst$382$end$$, "1000000px", $APP.$cljs$cst$384$markers_QMARK_$$, !1, $APP.$cljs$cst$385$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$5_vec__282029$$, 0, null);
  $is_active_QMARK_$jscomp$5_vec__282029$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$5_vec__282029$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$388$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$429$opacity$$, 1], null), $APP.$cljs$cst$389$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$429$opacity$$, 0.7], null)]));
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$386$target$$, $comp_ref$$, $APP.$cljs$cst$392$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$468$y$$, 0], null), $APP.$cljs$cst$394$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$468$y$$, -$APP.$cljs$cst$409$height$$.$cljs$core$IFn$_invoke$arity$1$($dimensions$jscomp$6$$)], null), $APP.$cljs$cst$390$is_on_QMARK_$$, 
  $is_active_QMARK_$jscomp$5_vec__282029$$], null));
  if ($APP.$cljs$core$truth_$$($G__282050_G__282087_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$6$$)) {
    return $G__282050_G__282087_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$6$$ = function() {
      return {ref:$comp_ref$$, className:"fixed\n                      opacity-90\n                      z-40\n                      text-xl\n                      mr-8\n                      mt-4\n                      top-0\n                      right-0", children:function() {
        var $G__282061$$ = function() {
          return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
            return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
          }};
        }();
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__282061$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__282061$$);
      }()};
    }(), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282050_G__282087_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$6$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__282050_G__282087_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$6$$);
  }
  $G__282050_G__282087_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$6$$ = function() {
    return {ref:$comp_ref$$, className:"fixed \n                          opacity-90\n                          z-40\n                          text-xl\n                      w-full\n                          ", children:function() {
      var $G__282097$$ = function() {
        return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
          return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__282097$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__282097$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282050_G__282087_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$6$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__282050_G__282087_is_desktop_QMARK_$jscomp$1_props__41675__auto__$jscomp$6$$);
};
$amp$components$navs$logo_nav$logo_nav$$ = function($G__282067_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$7_vec__282041$$) {
  $APP.$helix$core$extract_cljs_props$$($G__282067_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$7_vec__282041$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__282067_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$7_vec__282041$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$356$start$$, function() {
    return window.innerHeight - window.innerHeight / 8;
  }, $APP.$cljs$cst$382$end$$, "1000000px", $APP.$cljs$cst$384$markers_QMARK_$$, !1, $APP.$cljs$cst$385$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282067_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$7_vec__282041$$, 0, null);
  $G__282067_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$7_vec__282041$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282067_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$7_vec__282041$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$388$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$429$opacity$$, 1], null), $APP.$cljs$cst$389$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$429$opacity$$, 0.7], null)]));
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$386$target$$, $comp_ref$jscomp$1$$, $APP.$cljs$cst$392$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$468$y$$, 0], null), $APP.$cljs$cst$394$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$468$y$$, -250], null), $APP.$cljs$cst$390$is_on_QMARK_$$, $G__282067_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$7_vec__282041$$], 
  null));
  $G__282067_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$7_vec__282041$$ = function() {
    return {ref:$comp_ref$jscomp$1$$, className:"fixed\n                    opacity-90\n                    z-30\n                    right-8\n                    top-20\n                    flex flex-col items-end gap-3", children:function() {
      var $G__282075$$ = function() {
        return {className:"w-28 lg:w-32", children:[function() {
          var $G__282083$$ = function() {
            return {className:"cursor-pointer", onClick:function() {
              return window.open("https://www.labiennale.org/en/art/2026", "_blank");
            }, children:function() {
              var $G__282099$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"invert dark:invert-0"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__282099$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__282099$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282083$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__282083$$);
        }(), function() {
          var $G__282110$$ = function() {
            return {className:"mt-4", children:function() {
              var $G__282116$$ = function() {
                return {title:"Donate Now", "additional-classes":"w-full justify-center", size:$cljs$cst$479$sm$$, "bg-opacity":0.8, "on-click":function() {
                  return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                }};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__282116$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__282116$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282110$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__282110$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282075$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__282075$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282067_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$7_vec__282041$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__282067_is_active_QMARK_$jscomp$6_props__41675__auto__$jscomp$7_vec__282041$$);
};
$amp$components$hover_title$hover_title$$ = function($G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$8_vec__282044$$, $G__282073$jscomp$inline_3983_G__282081$jscomp$inline_3984_JSCompiler_inline_result$jscomp$inline_3982_maybe_ref__41676__auto__$jscomp$8_title$jscomp$18$$) {
  $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$8_vec__282044$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$8_vec__282044$$), $G__282073$jscomp$inline_3983_G__282081$jscomp$inline_3984_JSCompiler_inline_result$jscomp$inline_3982_maybe_ref__41676__auto__$jscomp$8_title$jscomp$18$$], null);
  $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$8_vec__282044$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$8_vec__282044$$, 0, null);
  $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$8_vec__282044$$ = $APP.$cljs$core$__destructure_map$$($G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$8_vec__282044$$);
  $G__282073$jscomp$inline_3983_G__282081$jscomp$inline_3984_JSCompiler_inline_result$jscomp$inline_3982_maybe_ref__41676__auto__$jscomp$8_title$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$8_vec__282044$$, $APP.$cljs$cst$373$title$$);
  $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$8_vec__282044$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$8_vec__282044$$, $cljs$cst$480$hover_title_ref$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__282073$jscomp$inline_3983_G__282081$jscomp$inline_3984_JSCompiler_inline_result$jscomp$inline_3982_maybe_ref__41676__auto__$jscomp$8_title$jscomp$18$$ = {className:"flash-text\n                                 font-mono\n                                 font-bold", textAnchor:"start", alignmentBaseline:"middle", y:"50%", x:"50%", children:$G__282073$jscomp$inline_3983_G__282081$jscomp$inline_3984_JSCompiler_inline_result$jscomp$inline_3982_maybe_ref__41676__auto__$jscomp$8_title$jscomp$18$$};
  $G__282073$jscomp$inline_3983_G__282081$jscomp$inline_3984_JSCompiler_inline_result$jscomp$inline_3982_maybe_ref__41676__auto__$jscomp$8_title$jscomp$18$$ = {className:"justify-self-start", height:"100%", width:"100%", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("text", $G__282073$jscomp$inline_3983_G__282081$jscomp$inline_3984_JSCompiler_inline_result$jscomp$inline_3982_maybe_ref__41676__auto__$jscomp$8_title$jscomp$18$$) : 
  $APP.$helix$core$jsx$$.call(null, "text", $G__282073$jscomp$inline_3983_G__282081$jscomp$inline_3984_JSCompiler_inline_result$jscomp$inline_3982_maybe_ref__41676__auto__$jscomp$8_title$jscomp$18$$)};
  $G__282073$jscomp$inline_3983_G__282081$jscomp$inline_3984_JSCompiler_inline_result$jscomp$inline_3982_maybe_ref__41676__auto__$jscomp$8_title$jscomp$18$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__282073$jscomp$inline_3983_G__282081$jscomp$inline_3984_JSCompiler_inline_result$jscomp$inline_3982_maybe_ref__41676__auto__$jscomp$8_title$jscomp$18$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__282073$jscomp$inline_3983_G__282081$jscomp$inline_3984_JSCompiler_inline_result$jscomp$inline_3982_maybe_ref__41676__auto__$jscomp$8_title$jscomp$18$$);
  $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$8_vec__282044$$ = {className:"absolute \n                  massive-title\n                  h-full\n                  w-full\n                  pointer-events-none", ref:$G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$8_vec__282044$$, children:$G__282073$jscomp$inline_3983_G__282081$jscomp$inline_3984_JSCompiler_inline_result$jscomp$inline_3982_maybe_ref__41676__auto__$jscomp$8_title$jscomp$18$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$8_vec__282044$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$8_vec__282044$$);
};
$amp$components$ui$playable_text$playable_text$$ = function($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$18$$) {
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$), $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$18$$], null);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$, 0, null);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$ = $APP.$cljs$core$__destructure_map$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$);
  var $text$jscomp$15$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$, $APP.$cljs$cst$481$text$$), $is_playing_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$, $cljs$cst$482$is_playing_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $background_ref$$ = $APP.$helix$hooks$use_ref$$("background-ref"), $text_ref$$ = $APP.$helix$hooks$use_ref$$("text-ref");
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$ = $APP.$helix$hooks$use_state$$(new $APP.$module$node_modules$gsap$dist$gsap$$.gsap.timeline({paused:!0}));
  var $tl$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$, 1, null);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $splitter$$ = $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($text_ref$$)) ? new $APP.$module$node_modules$gsap$SplitText$$.SplitText($APP.$cljs$core$_deref$$($text_ref$$), {type:"words,chars", charsClass:"playable-type-char"}) : null, $chars$jscomp$2$$ = $APP.$cljs$core$truth_$$($splitter$$) ? $splitter$$.chars : null, $ctx$$ = $APP.$module$node_modules$gsap$dist$gsap$$.gsap.context(function() {
      return $tl$jscomp$1$$.from($APP.$cljs$core$_deref$$($background_ref$$), {width:"0", duration:0.15, ease:"expo.inOut"}).to($APP.$cljs$core$_deref$$($background_ref$$), {width:"100%", duration:0.15, ease:"expo.inOut"}).from($chars$jscomp$2$$, {opacity:0, duration:0.15, ease:"expo.inOut", stagger:0.025}).to($chars$jscomp$2$$, {opacity:1, duration:0.15, ease:"expo.inOut", stagger:0.025});
    }, $outer_ctx$jscomp$1$$);
    return function() {
      return $ctx$$.revert();
    };
  });
  $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$18$$ = [$text$jscomp$15$$, $text_ref$$, $is_playing_QMARK_$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$18$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$, 
  $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$18$$);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($is_playing_QMARK_$$) ? $tl$jscomp$1$$.play() : $tl$jscomp$1$$.reverse();
  });
  $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$18$$ = [$is_playing_QMARK_$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$18$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$18$$);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$ = function() {
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
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$18_vec__52070_vec__52074$$);
};
$amp$components$nav_link$nav_link$$ = function($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$, $maybe_ref__41676__auto__$jscomp$9$$) {
  $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$), $maybe_ref__41676__auto__$jscomp$9$$], null);
  $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$, 0, null);
  $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$ = $APP.$cljs$core$__destructure_map$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$);
  var $on_click_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$, $cljs$cst$483$on_click_handler$$), $on_mouse_over_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$, $cljs$cst$484$on_mouse_over_handler$$), $on_mouse_out_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$, 
  $cljs$cst$485$on_mouse_out_handler$$), $title$jscomp$19$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$, $APP.$cljs$cst$373$title$$), $writing$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$, $cljs$cst$486$writing$$), $section_id$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$, 
  $APP.$cljs$cst$407$section_id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$15$$ = $APP.$helix$hooks$use_ref$$("link-ref");
  $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$ = $APP.$helix$hooks$use_state$$(!1);
  var $is_hovering_QMARK_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$, 0, null), $set_is_hovering_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$, 1, null);
  $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$ = function() {
    return {children:[function() {
      var $G__282294$$ = function() {
        return {ref:$ref$jscomp$15$$, className:"\n                  hero-nav-links\n                  cursor-pointer\n                  font-mono\n                  font-medium\n                  text-6xl", onMouseOver:function() {
          $APP.$cljs$core$tap_GT_$$("mouse over");
          $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $set_is_hovering_BANG_$$.call(null, !0);
          var $G__282298$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$407$section_id$$, $section_id$jscomp$2$$], null);
          return $on_mouse_over_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_mouse_over_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__282298$$) : $on_mouse_over_handler$$.call(null, $G__282298$$);
        }, onMouseOut:function() {
          $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(!1) : $set_is_hovering_BANG_$$.call(null, !1);
          var $G__282299$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$407$section_id$$, $section_id$jscomp$2$$], null);
          return $on_mouse_out_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_mouse_out_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__282299$$) : $on_mouse_out_handler$$.call(null, $G__282299$$);
        }, onClick:function() {
          var $G__282300$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$407$section_id$$, $section_id$jscomp$2$$], null);
          return $on_click_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_click_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__282300$$) : $on_click_handler$$.call(null, $G__282300$$);
        }, children:$title$jscomp$19$$};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("a", $G__282294$$, $section_id$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__282294$$, $section_id$jscomp$2$$);
    }(), function() {
      var $G__282302_G__282306$jscomp$inline_3523$$ = {text:$writing$$, "is-playing?":$is_hovering_QMARK_$$};
      $G__282302_G__282306$jscomp$inline_3523$$ = {className:"whitespace-nowrap\n                                                absolute\n                                                translate-x-full\n                                                bottom-2\n                                                \n                                                self-baseline\n                                                right-0\n                                                 pl-6\n                                                ", 
      children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$ui$playable_text$playable_text$$, $G__282302_G__282306$jscomp$inline_3523$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$ui$playable_text$playable_text$$, $G__282302_G__282306$jscomp$inline_3523$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282302_G__282306$jscomp$inline_3523$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__282302_G__282306$jscomp$inline_3523$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$9_vec__282281_vec__282285$$);
};
$amp$components$playful_titles$hero_menu$$ = function($G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$10_vec__282680$$, $maybe_ref__41676__auto__$jscomp$10$$) {
  $G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$10_vec__282680$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$10_vec__282680$$), $maybe_ref__41676__auto__$jscomp$10$$], null);
  $G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$10_vec__282680$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$10_vec__282680$$, 0, null);
  $G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$10_vec__282680$$ = $APP.$cljs$core$__destructure_map$$($G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$10_vec__282680$$);
  var $data$jscomp$134$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$10_vec__282680$$, $APP.$cljs$cst$28$data$$), $over$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$10_vec__282680$$, $APP.$cljs$cst$388$over$$), $out$jscomp$15$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$10_vec__282680$$, 
  $APP.$cljs$cst$389$out$$), $click$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$10_vec__282680$$, $cljs$cst$487$click$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$10_vec__282680$$ = function() {
    return {className:"absolute \n                  bg-white/30\n                  font-mono\n                  pointer-events-auto", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__282699_G__282706$jscomp$inline_3987_G__282710$jscomp$inline_3988_p__282694_writing$jscomp$1$$) {
      var $id$jscomp$69$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282699_G__282706$jscomp$inline_3987_G__282710$jscomp$inline_3988_p__282694_writing$jscomp$1$$, 0, null);
      $G__282699_G__282706$jscomp$inline_3987_G__282710$jscomp$inline_3988_p__282694_writing$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282699_G__282706$jscomp$inline_3987_G__282710$jscomp$inline_3988_p__282694_writing$jscomp$1$$, 1, null);
      $G__282699_G__282706$jscomp$inline_3987_G__282710$jscomp$inline_3988_p__282694_writing$jscomp$1$$ = {title:$id$jscomp$69$$, writing:$G__282699_G__282706$jscomp$inline_3987_G__282710$jscomp$inline_3988_p__282694_writing$jscomp$1$$, "section-id":$id$jscomp$69$$, "on-mouse-over-handler":$over$jscomp$1$$, "on-mouse-out-handler":$out$jscomp$15$$, "on-click-handler":$click$$};
      $G__282699_G__282706$jscomp$inline_3987_G__282710$jscomp$inline_3988_p__282694_writing$jscomp$1$$ = {className:"relative flex", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$nav_link$nav_link$$, $G__282699_G__282706$jscomp$inline_3987_G__282710$jscomp$inline_3988_p__282694_writing$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$nav_link$nav_link$$, $G__282699_G__282706$jscomp$inline_3987_G__282710$jscomp$inline_3988_p__282694_writing$jscomp$1$$)};
      $G__282699_G__282706$jscomp$inline_3987_G__282710$jscomp$inline_3988_p__282694_writing$jscomp$1$$ = {className:"flex", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282699_G__282706$jscomp$inline_3987_G__282710$jscomp$inline_3988_p__282694_writing$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__282699_G__282706$jscomp$inline_3987_G__282710$jscomp$inline_3988_p__282694_writing$jscomp$1$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__282699_G__282706$jscomp$inline_3987_G__282710$jscomp$inline_3988_p__282694_writing$jscomp$1$$, $id$jscomp$69$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__282699_G__282706$jscomp$inline_3987_G__282710$jscomp$inline_3988_p__282694_writing$jscomp$1$$, $id$jscomp$69$$);
    }, $data$jscomp$134$$)};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$10_vec__282680$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$10_vec__282680$$);
};
$amp$components$playful_titles$playful_titles$$ = function($G__282758_props__41675__auto__$jscomp$11_vec__282745_vec__282748$$) {
  $APP.$helix$core$extract_cljs_props$$($G__282758_props__41675__auto__$jscomp$11_vec__282745_vec__282748$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__282758_props__41675__auto__$jscomp$11_vec__282745_vec__282748$$ = $APP.$amp$providers$main_provider$use_main_state$$();
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282758_props__41675__auto__$jscomp$11_vec__282745_vec__282748$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282758_props__41675__auto__$jscomp$11_vec__282745_vec__282748$$, 1, null);
  var $hover_title_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("hover-title-ref");
  $G__282758_props__41675__auto__$jscomp$11_vec__282745_vec__282748$$ = $APP.$helix$hooks$use_state$$(null);
  var $current_section$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282758_props__41675__auto__$jscomp$11_vec__282745_vec__282748$$, 0, null), $set_current_section_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282758_props__41675__auto__$jscomp$11_vec__282745_vec__282748$$, 1, null), $nav_mouse_over_handler$$ = function() {
    function $G__282751$$($map__282754__$1_p__282753_section_id$jscomp$3$$) {
      $map__282754__$1_p__282753_section_id$jscomp$3$$ = $APP.$cljs$core$__destructure_map$$($map__282754__$1_p__282753_section_id$jscomp$3$$);
      $map__282754__$1_p__282753_section_id$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__282754__$1_p__282753_section_id$jscomp$3$$, $APP.$cljs$cst$407$section_id$$);
      $set_current_section_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_current_section_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($map__282754__$1_p__282753_section_id$jscomp$3$$) : $set_current_section_BANG_$$.call(null, $map__282754__$1_p__282753_section_id$jscomp$3$$);
      return $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to($APP.$cljs$core$_deref$$($hover_title_ref$jscomp$1$$), {opacity:0.8, duration:0.2});
    }
    var $G__282752$$ = [$hover_title_ref$jscomp$1$$];
    return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__282751$$, $G__282752$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__282751$$, $G__282752$$);
  }(), $nav_mouse_out_handler$$ = function() {
    function $G__282755$$() {
      return $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to($APP.$cljs$core$_deref$$($hover_title_ref$jscomp$1$$), {opacity:0, duration:0.2});
    }
    var $G__282756$$ = [$hover_title_ref$jscomp$1$$];
    return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__282755$$, $G__282756$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__282755$$, $G__282756$$);
  }();
  $G__282758_props__41675__auto__$jscomp$11_vec__282745_vec__282748$$ = function() {
    return {className:"relative\n                    w-full \n                    h-full \n                    \n                    ", children:[function() {
      var $G__282762$$ = function() {
        return {className:"relative\n                    w-full \n                    h-full \n                    flex\n                    items-center\n                    justify-items-center\n                    justify-center", children:[function() {
          var $G__282766$$ = {"hover-title-ref":$hover_title_ref$jscomp$1$$, title:$current_section$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$hover_title$hover_title$$, $G__282766$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$hover_title$hover_title$$, $G__282766$$);
        }(), function() {
          var $G__282770$$ = {data:$amp$components$playful_titles$titles$$, over:$nav_mouse_over_handler$$, out:$nav_mouse_out_handler$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$playful_titles$hero_menu$$, $G__282770$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$playful_titles$hero_menu$$, $G__282770$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282762$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__282762$$);
    }(), function() {
      var $G__282774$$ = {className:"absolute\n                                     bottom-10\n                           w-full\n                           flex\n                           justify-center\n                           "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282774$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__282774$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282758_props__41675__auto__$jscomp$11_vec__282745_vec__282748$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__282758_props__41675__auto__$jscomp$11_vec__282745_vec__282748$$);
};
$amp$components$elements$lazy_image_gallery$check_column_dimensions$$ = function($columns$jscomp$3$$) {
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(function($total_height$$, $dimensions$jscomp$7$$) {
    return $total_height$$ + $APP.$cljs$core$second$$($dimensions$jscomp$7$$);
  }, 0, $columns$jscomp$3$$);
};
$amp$components$elements$lazy_image_gallery$aspect_column$$ = function($width$jscomp$32$$, $height$jscomp$29$$) {
  var $initial_images$$ = function() {
    for (var $G__307947_accumulated_height$$ = 0, $G__307948_result$jscomp$116$$ = $APP.$cljs$core$PersistentVector$EMPTY$$;;) {
      if ($G__307947_accumulated_height$$ >= $height$jscomp$29$$) {
        return $G__307948_result$jscomp$116$$;
      }
      var $aspect_ratio$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$components$elements$lazy_image_gallery$aspect_ratios$$, $cljs$core$rand_int$$($APP.$cljs$core$count$$($amp$components$elements$lazy_image_gallery$aspect_ratios$$))), $img_height$$ = Math.round($width$jscomp$32$$ * $aspect_ratio$jscomp$5$$);
      $G__307947_accumulated_height$$ += $img_height$$;
      $G__307948_result$jscomp$116$$ = $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__307948_result$jscomp$116$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$width$jscomp$32$$, $img_height$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$450$aspect_ratio$$, $aspect_ratio$jscomp$5$$], null)));
    }
  }(), $total_height$jscomp$1$$ = $amp$components$elements$lazy_image_gallery$check_column_dimensions$$($initial_images$$), $scale_factor$jscomp$1$$ = $height$jscomp$29$$ / $total_height$jscomp$1$$;
  return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($dimensions$jscomp$8$$) {
    var $w$jscomp$16$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$8$$, 0, null), $h$jscomp$98$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$8$$, 1, null);
    return $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$w$jscomp$16$$, $h$jscomp$98$$ * $scale_factor$jscomp$1$$], null), $APP.$cljs$core$meta$$($dimensions$jscomp$8$$));
  }, $initial_images$$);
};
$amp$components$elements$lazy_image_gallery$find_closest_size$$ = function($target_width$jscomp$1$$, $target_height$jscomp$1$$) {
  var $sizes$jscomp$1$$ = $APP.$cljs$core$vec$$($APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$val$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$components$elements$lazy_image_gallery$image_sizes$$])));
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(function($closest$$, $h$jscomp$99_p__307152$$) {
    var $w$jscomp$17$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($h$jscomp$99_p__307152$$, 0, null);
    $h$jscomp$99_p__307152$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($h$jscomp$99_p__307152$$, 1, null);
    var $closest_diff$$ = Math.abs($APP.$cljs$core$first$$($closest$$) - $target_width$jscomp$1$$) + Math.abs($APP.$cljs$core$second$$($closest$$) - $target_height$jscomp$1$$);
    return Math.abs($w$jscomp$17$$ - $target_width$jscomp$1$$) + Math.abs($h$jscomp$99_p__307152$$ - $target_height$jscomp$1$$) < $closest_diff$$ ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$w$jscomp$17$$, $h$jscomp$99_p__307152$$], null) : $closest$$;
  }, $APP.$cljs$core$first$$($sizes$jscomp$1$$), $sizes$jscomp$1$$);
};
$amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$ = function($width$jscomp$33$$, $height$jscomp$30$$) {
  var $column_width$$ = Math.round($width$jscomp$33$$ / 3);
  return $APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(function() {
    return $amp$components$elements$lazy_image_gallery$aspect_column$$($column_width$$, $height$jscomp$30$$);
  }, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$core$range$cljs$0core$0IFn$0_invoke$0arity$03$$(3)]));
};
$amp$components$elements$lazy_image_gallery$image_layer$$ = function($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$, $G__307174_308061_maybe_ref__41633__auto__$jscomp$14$$) {
  $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$), $G__307174_308061_maybe_ref__41633__auto__$jscomp$14$$], null);
  $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$, 0, null);
  $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$ = $APP.$cljs$core$__destructure_map$$($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$);
  var $img_src$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$, $APP.$cljs$cst$427$img_src$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $base_ref$$ = $APP.$helix$hooks$use_ref$$("base-ref"), $transition_ref$$ = $APP.$helix$hooks$use_ref$$("trans-ref");
  $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$ = $APP.$helix$hooks$use_state$$(null);
  var $current_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$, 0, null), $set_current_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$, 1, null);
  $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$ = $APP.$helix$hooks$use_state$$(null);
  var $prev_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$, 0, null), $set_prev_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$, 1, null);
  $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($current_src$$, $img_src$jscomp$5$$) ? null : $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$($current_src$$) : $set_prev_src$$.call(null, $current_src$$);
  });
  $G__307174_308061_maybe_ref__41633__auto__$jscomp$14$$ = [$img_src$jscomp$5$$, $current_src$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$, $G__307174_308061_maybe_ref__41633__auto__$jscomp$14$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$, 
  $G__307174_308061_maybe_ref__41633__auto__$jscomp$14$$);
  $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$ = function() {
    return {className:"z-10", children:[$APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($prev_src$$) ? $prev_src$$ : $current_src$$) ? function() {
      var $G__307180$$ = function() {
        return {ref:$base_ref$$, src:$APP.$cljs$core$truth_$$($prev_src$$) ? $prev_src$$ : $current_src$$, className:"absolute\n                               z-10\n                               w-full\n                               h-full\n                               object-cover\n                               overflow-hidden", onLoad:function() {
          return $APP.$amp$utils$gsap$to_ref$$($transition_ref$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$429$opacity$$, 0, $APP.$cljs$cst$428$duration$$, 0], null));
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("img", $G__307180$$, "base") : $APP.$helix$core$jsx$$.call(null, "img", $G__307180$$, "base");
    }() : null, $APP.$cljs$core$truth_$$(function() {
      var $or__5142__auto__$jscomp$125$$ = $prev_src$$ == null;
      return $or__5142__auto__$jscomp$125$$ ? $or__5142__auto__$jscomp$125$$ : $img_src$jscomp$5$$;
    }()) ? function() {
      var $G__307185$$ = function() {
        return {src:$img_src$jscomp$5$$, ref:$transition_ref$$, className:"absolute\n                             z-20\n                             w-full\n                             h-full\n                             object-cover\n                             overflow-hidden", style:{opacity:$APP.$helix$impl$props$__GT_js$$(0)}, onLoad:function() {
          return $APP.$amp$utils$gsap$to_ref$$($transition_ref$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$429$opacity$$, 1, $APP.$cljs$cst$428$duration$$, 1, $APP.$cljs$cst$396$onComplete$$, function() {
            $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$(null) : $set_prev_src$$.call(null, null);
            return $set_current_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_current_src$$.$cljs$core$IFn$_invoke$arity$1$($img_src$jscomp$5$$) : $set_current_src$$.call(null, $img_src$jscomp$5$$);
          }], null));
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("img", $G__307185$$, "trans") : $APP.$helix$core$jsx$$.call(null, "img", $G__307185$$, "trans");
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$14_vec__307163_vec__307167_vec__307170$$);
};
$amp$components$elements$lazy_image_gallery$caption_layer$$ = function($G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$15_vec__307203$$, $maybe_ref__41633__auto__$jscomp$15$$) {
  $G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$15_vec__307203$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$15_vec__307203$$), $maybe_ref__41633__auto__$jscomp$15$$], null);
  $G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$15_vec__307203$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$15_vec__307203$$, 0, null);
  $G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$15_vec__307203$$ = $APP.$cljs$core$__destructure_map$$($G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$15_vec__307203$$);
  var $target_ref$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$15_vec__307203$$, $cljs$cst$488$target_ref$$), $caption$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$15_vec__307203$$, $APP.$cljs$cst$430$caption$$), $credit$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$15_vec__307203$$, 
  $APP.$cljs$cst$431$credit$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$15_vec__307203$$, $cljs$cst$489$other$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$15_vec__307203$$ = function() {
    return {className:"absolute\n                  z-20\n                  bottom-0 \n                  left-0\n                  w-full\n                  h-12\n                  pointer-events-none", ref:$target_ref$$, children:function() {
      var $G__307226$$ = function() {
        return {className:"h-full\n                         w-full\n                         bg-slate-900/50 dark:bg-slate-900/60\n                         p-2", children:[function() {
          var $G__307231$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono text-xs", "text-slate-950  dark:text-white"]))), children:$caption$jscomp$2$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307231$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307231$$);
        }(), function() {
          var $G__307238$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono text-xs", "text-slate-950  dark:text-white"]))), children:$credit$jscomp$2$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307238$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307238$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307226$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307226$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$15_vec__307203$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$15_vec__307203$$);
};
$amp$components$elements$lazy_image_gallery$image_card$$ = function($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$16_vec__307390$$, $maybe_ref__41633__auto__$jscomp$16$$) {
  $G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$16_vec__307390$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$16_vec__307390$$), $maybe_ref__41633__auto__$jscomp$16$$], null);
  $G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$16_vec__307390$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$16_vec__307390$$, 0, null);
  $G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$16_vec__307390$$ = $APP.$cljs$core$__destructure_map$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$16_vec__307390$$);
  var $width$jscomp$34$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$16_vec__307390$$, $APP.$cljs$cst$408$width$$), $height$jscomp$31$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$16_vec__307390$$, $APP.$cljs$cst$409$height$$), $img_src$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$16_vec__307390$$, 
  $APP.$cljs$cst$427$img_src$$), $caption$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$16_vec__307390$$, $APP.$cljs$cst$430$caption$$), $credit$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$16_vec__307390$$, $APP.$cljs$cst$431$credit$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$16_vec__307390$$, $cljs$cst$489$other$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$16_vec__307390$$, $APP.$cljs$cst$90$key$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$16_vec__307390$$, $APP.$cljs$cst$432$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $trigger_ref$$ = $APP.$helix$hooks$use_ref$$("trigger-ref"), $target_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("target-ref");
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($trigger_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$386$target$$, $target_ref$jscomp$1$$, $APP.$cljs$cst$387$initial$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$468$y$$, 100, $APP.$cljs$cst$429$opacity$$, 0], null), $APP.$cljs$cst$388$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
  3, [$APP.$cljs$cst$468$y$$, 0, $APP.$cljs$cst$429$opacity$$, 1, $APP.$cljs$cst$428$duration$$, 0.25], null), $APP.$cljs$cst$389$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$468$y$$, 100, $APP.$cljs$cst$429$opacity$$, 0, $APP.$cljs$cst$428$duration$$, 0.125], null)], null)]));
  $G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$16_vec__307390$$ = function() {
    return {ref:$trigger_ref$$, style:{width:$APP.$helix$impl$props$__GT_js$$($width$jscomp$34$$), height:$APP.$helix$impl$props$__GT_js$$($height$jscomp$31$$)}, className:"relative\n                    bg-slate-200/50 dark:bg-white/10\n                    overflow-hidden", children:[function() {
      var $G__307461$$ = {"img-src":$img_src$jscomp$6$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$image_layer$$, $G__307461$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$image_layer$$, $G__307461$$);
    }(), $APP.$cljs$core$truth_$$($caption$jscomp$3$$) ? function() {
      var $G__307535$$ = {"target-ref":$target_ref$jscomp$1$$, caption:$caption$jscomp$3$$, credit:$credit$jscomp$3$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$caption_layer$$, $G__307535$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$caption_layer$$, $G__307535$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$16_vec__307390$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$16_vec__307390$$);
};
$amp$components$elements$lazy_image_gallery$lazy_image_gallery$$ = function($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$, $G__307724_308110_maybe_ref__41633__auto__$jscomp$17$$) {
  $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$), $G__307724_308110_maybe_ref__41633__auto__$jscomp$17$$], null);
  $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$, 0, null);
  $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$ = $APP.$cljs$core$__destructure_map$$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$);
  var $images$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$, $cljs$cst$490$images$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$, $cljs$cst$491$is_visible_QMARK_$$);
  $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$, $cljs$cst$492$image_gallery_container_ref$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$2$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $gallery_dimensions$$ = $APP.$amp$hooks$use_container_size$use_container_size$$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$);
  $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$ = $APP.$helix$hooks$use_state$$($amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$(8, 200));
  var $masonary_grid_slots$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$, 0, null), $set_masonary_grid_slots$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$, 1, null);
  $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $G__307726$$ = $amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$($APP.$cljs$cst$408$width$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$), $APP.$cljs$cst$409$height$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$));
    return $set_masonary_grid_slots$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_masonary_grid_slots$$.$cljs$core$IFn$_invoke$arity$1$($G__307726$$) : $set_masonary_grid_slots$$.call(null, $G__307726$$);
  });
  $G__307724_308110_maybe_ref__41633__auto__$jscomp$17$$ = [$APP.$cljs$cst$408$width$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$), $APP.$cljs$cst$409$height$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$)];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$, $G__307724_308110_maybe_ref__41633__auto__$jscomp$17$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$, 
  $G__307724_308110_maybe_ref__41633__auto__$jscomp$17$$);
  $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$ = function() {
    return {ref:$outer_ctx$jscomp$2$$, className:"overflow-hidden h-full", children:function() {
      var $G__307742$$ = function() {
        return {className:"columns-3 gap-0 h-full pinstripe", children:$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($idx$jscomp$69$$, $dimensions$jscomp$9_height$jscomp$32$$) {
          var $G__307796_caption$jscomp$4_map__307763$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($images$$, $cljs$core$rand_int$$($APP.$cljs$core$count$$($images$$))), $credit$jscomp$4_map__307763__$1$$ = $APP.$cljs$core$__destructure_map$$($G__307796_caption$jscomp$4_map__307763$$), $sized_image_src_src$jscomp$36$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__307763__$1$$, $APP.$cljs$cst$418$src$$);
          $G__307796_caption$jscomp$4_map__307763$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__307763__$1$$, $APP.$cljs$cst$430$caption$$);
          $credit$jscomp$4_map__307763__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__307763__$1$$, $APP.$cljs$cst$431$credit$$);
          var $aspect_ratio$jscomp$6$$ = $APP.$cljs$cst$450$aspect_ratio$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$meta$$($dimensions$jscomp$9_height$jscomp$32$$)), $closest_height_closest_match$$ = $amp$components$elements$lazy_image_gallery$find_closest_size$$($APP.$cljs$core$first$$($dimensions$jscomp$9_height$jscomp$32$$), $APP.$cljs$core$second$$($dimensions$jscomp$9_height$jscomp$32$$)), $width$jscomp$35$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$9_height$jscomp$32$$, 
          0, null);
          $dimensions$jscomp$9_height$jscomp$32$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$9_height$jscomp$32$$, 1, null);
          var $closest_width$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($closest_height_closest_match$$, 0, null);
          $closest_height_closest_match$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($closest_height_closest_match$$, 1, null);
          $sized_image_src_src$jscomp$36$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($sized_image_src_src$jscomp$36$$) + "?w\x3d" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($closest_width$$) + "\x26h\x3d" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($closest_height_closest_match$$) + "\x26fit\x3dcrop\x26auto\x3dformat,compress\x26crop\x3dfaces,edges";
          $G__307796_caption$jscomp$4_map__307763$$ = {width:$width$jscomp$35$$, height:$dimensions$jscomp$9_height$jscomp$32$$, "img-src":$sized_image_src_src$jscomp$36$$, caption:$G__307796_caption$jscomp$4_map__307763$$, credit:$credit$jscomp$4_map__307763__$1$$, other:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($aspect_ratio$jscomp$6$$), idx:$idx$jscomp$69$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$lazy_image_gallery$image_card$$, $G__307796_caption$jscomp$4_map__307763$$, $idx$jscomp$69$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$image_card$$, $G__307796_caption$jscomp$4_map__307763$$, $idx$jscomp$69$$);
        }, $masonary_grid_slots$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307742$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307742$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$17_vec__307673_vec__307686$$);
};
$amp$components$sections$about_biennale$title$$ = function($G__308405_props__41632__auto__$jscomp$18$$) {
  $APP.$helix$core$extract_cljs_props$$($G__308405_props__41632__auto__$jscomp$18$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__308405_props__41632__auto__$jscomp$18$$ = function() {
    return {className:"lg:flex\n                  w-full\n                  lg:h-2/5\n                  z-20\n                  items-center\n                  justify-between\n                  bg-black/10\n                  lg:p-12 p-4\n                  lg:text-6xl text-3xl\n                  font-display\n                  font-bold\n                  text-slate-800", children:[function() {
      var $G__308413$$ = function() {
        return {className:"flex flex-col", children:[function() {
          var $G__308425$$ = {className:"", children:"venice"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308425$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308425$$);
        }(), function() {
          var $G__308455$$ = {className:"", children:"biennale"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308455$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308455$$);
        }(), function() {
          var $G__308487$$ = {className:"", children:"2026"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308487$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308487$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308413$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308413$$);
    }(), function() {
      var $G__308519$$ = function() {
        return {className:"flex\n                         flex-col\n                         font-display\n                         font-bold\n                         lg:text-right\n                         italic\n                         text-white/60", children:[function() {
          var $G__308537$$ = {className:"", children:"in"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308537$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308537$$);
        }(), function() {
          var $G__308561$$ = {className:"", children:"minor"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308561$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308561$$);
        }(), function() {
          var $G__308570$$ = {className:"", children:"keys"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308570$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308570$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308519$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308519$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308405_props__41632__auto__$jscomp$18$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308405_props__41632__auto__$jscomp$18$$);
};
$amp$components$sections$about_biennale$copy_block$$ = function($G__308680_map__308678_map__308678__$1_props__41632__auto__$jscomp$19_vec__308675$$, $maybe_ref__41633__auto__$jscomp$19$$) {
  $G__308680_map__308678_map__308678__$1_props__41632__auto__$jscomp$19_vec__308675$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__308680_map__308678_map__308678__$1_props__41632__auto__$jscomp$19_vec__308675$$), $maybe_ref__41633__auto__$jscomp$19$$], null);
  $G__308680_map__308678_map__308678__$1_props__41632__auto__$jscomp$19_vec__308675$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308680_map__308678_map__308678__$1_props__41632__auto__$jscomp$19_vec__308675$$, 0, null);
  $G__308680_map__308678_map__308678__$1_props__41632__auto__$jscomp$19_vec__308675$$ = $APP.$cljs$core$__destructure_map$$($G__308680_map__308678_map__308678__$1_props__41632__auto__$jscomp$19_vec__308675$$);
  var $title$jscomp$20$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308680_map__308678_map__308678__$1_props__41632__auto__$jscomp$19_vec__308675$$, $APP.$cljs$cst$373$title$$), $copy$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308680_map__308678_map__308678__$1_props__41632__auto__$jscomp$19_vec__308675$$, $cljs$cst$493$copy$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__308680_map__308678_map__308678__$1_props__41632__auto__$jscomp$19_vec__308675$$ = function() {
    return {className:"flex flex-col mb-12 font-display", children:[function() {
      var $G__308684$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:$title$jscomp$20$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308684$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308684$$);
    }(), function() {
      var $G__308688$$ = {className:"text-slate-800", children:$copy$jscomp$1$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308688$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308688$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308680_map__308678_map__308678__$1_props__41632__auto__$jscomp$19_vec__308675$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308680_map__308678_map__308678__$1_props__41632__auto__$jscomp$19_vec__308675$$);
};
$amp$components$sections$about_biennale$about_biennale_section$$ = function($G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$, $maybe_ref__41633__auto__$jscomp$20$$) {
  $G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$), $maybe_ref__41633__auto__$jscomp$20$$], null);
  $G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$, 0, null);
  $G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$ = $APP.$cljs$core$__destructure_map$$($G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$, $cljs$cst$494$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$, $cljs$cst$491$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$, $cljs$cst$495$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$3$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$3$$);
  var $visited_QMARK_$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$, 1, null);
  $G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$about_biennale$images$$);
  var $images$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$, 1, null);
  var $image_gallery_container_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("image-gallery-container-ref"), $is_desktop_QMARK_$jscomp$2$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$ = function() {
    return {ref:$outer_ctx$jscomp$3$$, className:"h-full \n                        w-full\n                        flex\n                        pink-grad\n                        light-red-grad\n                        items-center\n                        justify-center\n                        font-display\n                        relative", children:function() {
      var $G__308725$$ = function() {
        return {className:"flex \n                               flex-col\n                               overflow-hidden\n                               relative\n                               w-full md:w-10/12 lg:w-full\n                               lg:p-12 p-4", children:[function() {
          var $G__308729$$ = {};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$title$$, $G__308729$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$title$$, $G__308729$$);
        }(), function() {
          var $G__308731$$ = function() {
            return {className:"flex overflow-hidden relative", children:[function() {
              var $G__308735$$ = function() {
                return {className:"lg:w-1/2 \n                                             lg:p-16 p-4", children:[function() {
                  var $G__308739$$ = {title:"the biennale", copy:"The Venice Biennale is the most prestigious platform for contemporary art in the world—the cultural equivalent of the Olympics.  Every two years, nations convene in the Giardini and Arsenale to present the best of their artists.  The 61st International Art Exhibition will run from May 9 to November 22 2026 and, following the unexpected passing of curator Koyo Kouoh, will be realized exactly as she conceived it."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$copy_block$$, $G__308739$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$copy_block$$, $G__308739$$);
                }(), function() {
                  var $G__308743$$ = {title:"The theme: In Minor Keys", copy:"Kouoh’s vision invites us to slow down and listen to the “frequencies of the minor keys,” the quiet tones and lower frequencies that often get lost amid today’s chaos .  In her curatorial text, she describes the minor key as a metaphor for small islands and intimate oases—gardens, courtyards, dance floors—where artists cultivate rich social and ecological worlds .  Rather than celebrating spectacle, the exhibition tunes into “the persistent signals of earth and life,” foregrounding sensory, affective experiences .  As Kouoh’s team notes, “In minor keys are sequences of exhilarating journeys that address the sensate and the affective, inviting visitors to marvel, meditate, dream, revel, reflect and commune in realms where time is not corporate property nor at the mercy of relentlessly accelerated productivity” ."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$copy_block$$, $G__308743$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$copy_block$$, $G__308743$$);
                }(), function() {
                  var $G__308747$$ = {title:"Why this matters to Armenians", copy:"Armenia’s cultural memory is one of quiet endurance, repetition and devotion.  From stone‑carved khachkars to endless rows of hand‑woven carpets, Armenian art has always been a labour of patience and persistence.  Kouoh’s vision of the Biennale as an archipelago of “minor keys” resonates deeply with this ethos.  It is about valuing the handmade over the manufactured, the intimate gesture over the headline‑grabbing spectacle—precisely what Zadik Zadikian will embody in The Studio."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$copy_block$$, $G__308747$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$copy_block$$, $G__308747$$);
                }(), function() {
                  var $G__308751$$ = {className:"", children:"By bringing an Armenian “island” to Venice, we affirm that our heritage belongs on the world’s biggest stage not because it shouts the loudest, but because it teaches the world how to listen.  Supporting the Armenia Pavilion is more than funding an exhibition; it is enabling a sanctuary of slow, deliberate creativity—an oasis of dignity and resilience—within a global conversation on art’s future."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308751$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308751$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308735$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308735$$);
            }(), $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$2$$) ? $visited_QMARK_$jscomp$5$$ : $is_desktop_QMARK_$jscomp$2$$) ? function() {
              var $G__308755_G__308759$jscomp$inline_3991_G__308763$jscomp$inline_3992_JSCompiler_inline_result$jscomp$inline_3990$$ = {images:$images$jscomp$1$$, "image-gallery-container-ref":$image_gallery_container_ref$jscomp$1$$};
              $G__308755_G__308759$jscomp$inline_3991_G__308763$jscomp$inline_3992_JSCompiler_inline_result$jscomp$inline_3990$$ = {className:"absolute h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $G__308755_G__308759$jscomp$inline_3991_G__308763$jscomp$inline_3992_JSCompiler_inline_result$jscomp$inline_3990$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, 
              $G__308755_G__308759$jscomp$inline_3991_G__308763$jscomp$inline_3992_JSCompiler_inline_result$jscomp$inline_3990$$)};
              $G__308755_G__308759$jscomp$inline_3991_G__308763$jscomp$inline_3992_JSCompiler_inline_result$jscomp$inline_3990$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308755_G__308759$jscomp$inline_3991_G__308763$jscomp$inline_3992_JSCompiler_inline_result$jscomp$inline_3990$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308755_G__308759$jscomp$inline_3991_G__308763$jscomp$inline_3992_JSCompiler_inline_result$jscomp$inline_3990$$);
              $G__308755_G__308759$jscomp$inline_3991_G__308763$jscomp$inline_3992_JSCompiler_inline_result$jscomp$inline_3990$$ = {ref:$image_gallery_container_ref$jscomp$1$$, className:"ml-8\n                                               w-7/12\n                                               relative\n                                               overflow-hidden", children:$G__308755_G__308759$jscomp$inline_3991_G__308763$jscomp$inline_3992_JSCompiler_inline_result$jscomp$inline_3990$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308755_G__308759$jscomp$inline_3991_G__308763$jscomp$inline_3992_JSCompiler_inline_result$jscomp$inline_3990$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308755_G__308759$jscomp$inline_3991_G__308763$jscomp$inline_3992_JSCompiler_inline_result$jscomp$inline_3990$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308731$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308731$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308725$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308725$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__308721_map__308710_map__308710__$1_props__41632__auto__$jscomp$20_vec__308707_vec__308714_vec__308717$$);
};
$amp$components$sections$contact_section$contact_section$$ = function($G__307265_map__307246_props__41632__auto__$jscomp$21_vec__307243$$, $maybe_ref__41633__auto__$jscomp$21$$) {
  $G__307265_map__307246_props__41632__auto__$jscomp$21_vec__307243$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__307265_map__307246_props__41632__auto__$jscomp$21_vec__307243$$), $maybe_ref__41633__auto__$jscomp$21$$], null);
  $G__307265_map__307246_props__41632__auto__$jscomp$21_vec__307243$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307265_map__307246_props__41632__auto__$jscomp$21_vec__307243$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__307265_map__307246_props__41632__auto__$jscomp$21_vec__307243$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__307265_map__307246_props__41632__auto__$jscomp$21_vec__307243$$ = function() {
    return {className:"relative w-full font-display mt-12", children:[function() {
      var $G__307277$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307277$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307277$$);
    }(), function() {
      var $G__307286_G__307294$jscomp$inline_3995_G__307306$jscomp$inline_3996$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-xl lg:text-2xl italic font-light leading-relaxed", "text-slate-600  dark:text-slate-400"]))), children:"“Culture is where nations become undeniable. It is where influence is built without violence; where history is not only remembered, but translated into future power.”"};
      $G__307286_G__307294$jscomp$inline_3995_G__307306$jscomp$inline_3996$$ = {className:"max-w-3xl text-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307286_G__307294$jscomp$inline_3995_G__307306$jscomp$inline_3996$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307286_G__307294$jscomp$inline_3995_G__307306$jscomp$inline_3996$$)};
      $G__307286_G__307294$jscomp$inline_3995_G__307306$jscomp$inline_3996$$ = {className:"py-16 lg:py-24 px-6 flex justify-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__307286_G__307294$jscomp$inline_3995_G__307306$jscomp$inline_3996$$) : $APP.$helix$core$jsx$$.call(null, "blockquote", $G__307286_G__307294$jscomp$inline_3995_G__307306$jscomp$inline_3996$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307286_G__307294$jscomp$inline_3995_G__307306$jscomp$inline_3996$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307286_G__307294$jscomp$inline_3995_G__307306$jscomp$inline_3996$$);
    }(), function() {
      var $G__307337$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307337$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307337$$);
    }(), function() {
      var $G__307353$$ = function() {
        return {className:"py-16 lg:py-20 px-6 max-w-5xl mx-auto", children:[function() {
          var $G__307361$$ = function() {
            return {className:"text-center mb-16", children:[function() {
              var $G__307379$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-2xl lg:text-3xl font-bold uppercase tracking-wider mb-3", "text-slate-900  dark:text-slate-100"]))), children:"Support the Pavilion"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__307379$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__307379$$);
            }(), function() {
              var $G__307395$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm lg:text-base max-w-xl mx-auto mb-8", "text-slate-600  dark:text-slate-400"]))), children:"Your contribution directly supports Armenia’s national presentation at the 61st Venice Biennale—a sovereign act of cultural visibility on the world stage."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307395$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307395$$);
            }(), function() {
              var $G__307415$$ = function() {
                return {className:"flex justify-center gap-4 flex-wrap", children:[function() {
                  var $G__307423$$ = function() {
                    return {title:"Donate Now", "on-click":function() {
                      return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                    }};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__307423$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__307423$$);
                }(), function() {
                  var $G__307447$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-[11px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400;hover:text-slate-900 dark:hover:text-white;border;border-slate-200 dark:border-white/15;hover:border-slate-400 dark:hover:border-slate-500;px-6 py-3;transition-colors duration-300 ease-in-out".split(";")))), 
                    onClick:function() {
                      return $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$("section-8") : $scroll_to_id$$.call(null, "section-8");
                    }, children:"Wire Transfer Info →"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__307447$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__307447$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307415$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307415$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307361$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307361$$);
        }(), function() {
          var $G__307499$$ = function() {
            return {className:"grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-sm", children:[function() {
              var $G__307512$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__307523$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-semibold uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"Get in Touch"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__307523$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__307523$$);
                }(), function() {
                  var $G__307533$$ = {href:"mailto:hello@armenianpavilion2026.org?subject\x3dLet's%20connect", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), children:"hello@armenianpavilion2026.org"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__307533$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__307533$$);
                }(), function() {
                  var $G__307548$$ = {href:"tel:+13234041152", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), children:"+1 323-404-1152"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__307548$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__307548$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307512$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307512$$);
            }(), function() {
              var $G__307557$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__307564$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-semibold uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"501(c)(3) Non-Profit"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__307564$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__307564$$);
                }(), function() {
                  var $G__307582$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"Fallen Angels Inc."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307582$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307582$$);
                }(), function() {
                  var $G__307590$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-600  dark:text-slate-400"), children:"EIN: 92-2395513"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307590$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307590$$);
                }(), function() {
                  var $G__307621$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-600  dark:text-slate-400"), children:"Los Angeles, CA"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307621$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307621$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307557$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307557$$);
            }(), function() {
              var $G__307647$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__307651$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-semibold uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"Quick Links"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__307651$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__307651$$);
                }(), function() {
                  var $G__307658$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$("section-1") : $scroll_to_id$$.call(null, "section-1");
                    }, children:"Press Release"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__307658$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__307658$$);
                }(), function() {
                  var $G__307667$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$("section-3") : $scroll_to_id$$.call(null, "section-3");
                    }, children:"Budget"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__307667$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__307667$$);
                }(), function() {
                  var $G__307698$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$$.$cljs$core$IFn$_invoke$arity$1$("section-5") : $scroll_to_id$$.call(null, "section-5");
                    }, children:"Committee"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__307698$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__307698$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307647$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307647$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307499$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307499$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307353$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307353$$);
    }(), function() {
      var $G__307732$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307732$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307732$$);
    }(), function() {
      var $G__307740$$ = function() {
        return {className:"py-6 px-6 flex flex-col sm:flex-row justify-between items-center gap-3 max-w-5xl mx-auto", children:[function() {
          var $G__307754$$ = function() {
            return {className:"flex items-center gap-4", children:[function() {
              var $G__307762$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"h-6 opacity-40 invert dark:invert-0"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__307762$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__307762$$);
            }(), function() {
              var $G__307778$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] uppercase tracking-[0.15em] whitespace-nowrap", "text-slate-600  dark:text-slate-400"]))), children:"Armenia Pavilion · 61st Venice Biennale"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__307778$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307778$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307754$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307754$$);
        }(), function() {
          var $G__307788$$ = function() {
            return {className:"flex items-center gap-4", children:[function() {
              var $G__307795$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-600  dark:text-slate-400"]))), children:"© 2026 AZ Studios Inc."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__307795$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307795$$);
            }(), function() {
              var $G__307804$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"v" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("e42cedb")};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__307804$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307804$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307788$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307788$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307740$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307740$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("footer", $G__307265_map__307246_props__41632__auto__$jscomp$21_vec__307243$$) : $APP.$helix$core$jsxs$$.call(null, "footer", $G__307265_map__307246_props__41632__auto__$jscomp$21_vec__307243$$);
};
$amp$components$sections$artist_section$artist_section$$ = function($G__307397_map__307341_map__307341__$1_props__41632__auto__$jscomp$22_vec__307338_vec__307365$$, $maybe_ref__41633__auto__$jscomp$22$$) {
  $G__307397_map__307341_map__307341__$1_props__41632__auto__$jscomp$22_vec__307338_vec__307365$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__307397_map__307341_map__307341__$1_props__41632__auto__$jscomp$22_vec__307338_vec__307365$$), $maybe_ref__41633__auto__$jscomp$22$$], null);
  $G__307397_map__307341_map__307341__$1_props__41632__auto__$jscomp$22_vec__307338_vec__307365$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307397_map__307341_map__307341__$1_props__41632__auto__$jscomp$22_vec__307338_vec__307365$$, 0, null);
  $G__307397_map__307341_map__307341__$1_props__41632__auto__$jscomp$22_vec__307338_vec__307365$$ = $APP.$cljs$core$__destructure_map$$($G__307397_map__307341_map__307341__$1_props__41632__auto__$jscomp$22_vec__307338_vec__307365$$);
  var $id$jscomp$70$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307397_map__307341_map__307341__$1_props__41632__auto__$jscomp$22_vec__307338_vec__307365$$, $APP.$cljs$cst$191$id$$), $title$jscomp$21$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307397_map__307341_map__307341__$1_props__41632__auto__$jscomp$22_vec__307338_vec__307365$$, $APP.$cljs$cst$373$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$16$$ = $APP.$helix$hooks$use_ref$$("artist-ref");
  $G__307397_map__307341_map__307341__$1_props__41632__auto__$jscomp$22_vec__307338_vec__307365$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$16$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$441$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307397_map__307341_map__307341__$1_props__41632__auto__$jscomp$22_vec__307338_vec__307365$$, 0, null);
  var $visible_QMARK_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307397_map__307341_map__307341__$1_props__41632__auto__$jscomp$22_vec__307338_vec__307365$$, 1, null), $tag_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$476$boxDecorationBreak$$, "clone", $cljs$cst$477$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__307397_map__307341_map__307341__$1_props__41632__auto__$jscomp$22_vec__307338_vec__307365$$ = function() {
    return {id:$id$jscomp$70$$, ref:$ref$jscomp$16$$, className:"py-16 sm:py-20", children:[$APP.$cljs$core$truth_$$($title$jscomp$21$$) ? function() {
      var $G__307408_G__307419$jscomp$inline_3535$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$$), children:$title$jscomp$21$$};
      $G__307408_G__307419$jscomp$inline_3535$$ = {className:"font-display font-bold uppercase tracking-wider\n                      text-2xl sm:text-3xl text-white dark:text-white\n                      leading-relaxed mb-10 px-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__307408_G__307419$jscomp$inline_3535$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307408_G__307419$jscomp$inline_3535$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__307408_G__307419$jscomp$inline_3535$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__307408_G__307419$jscomp$inline_3535$$);
    }() : null, function() {
      var $G__307430$$ = function() {
        return {className:"px-4 sm:flex sm:gap-10 sm:items-start", children:[function() {
          var $G__307438_G__307449$jscomp$inline_3538$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/zz-portrait-2.jpg", fit:"crop", "aspect-ratio":0.75, "active?":$visible_QMARK_$$};
          $G__307438_G__307449$jscomp$inline_3538$$ = {className:"w-full sm:w-2/5 flex-shrink-0 aspect-[3/4] rounded-sm overflow-hidden mb-8 sm:mb-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__307438_G__307449$jscomp$inline_3538$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, 
          $G__307438_G__307449$jscomp$inline_3538$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307438_G__307449$jscomp$inline_3538$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307438_G__307449$jscomp$inline_3538$$);
        }(), function() {
          var $G__307457$$ = function() {
            return {className:"sm:flex-1 sm:min-w-0", children:[function() {
              var $G__307467_G__307472$jscomp$inline_3541$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$$), children:"Zadik Zadikian"};
              $G__307467_G__307472$jscomp$inline_3541$$ = {className:"font-display font-bold uppercase tracking-wider\n                           text-2xl sm:text-3xl text-white dark:text-white mb-1 leading-relaxed", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__307467_G__307472$jscomp$inline_3541$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307467_G__307472$jscomp$inline_3541$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307467_G__307472$jscomp$inline_3541$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307467_G__307472$jscomp$inline_3541$$);
            }(), function() {
              var $G__307492$$ = {className:"font-display font-medium text-xs uppercase tracking-[0.2em]\n                           text-amber-600 dark:text-amber-300/70 mb-6", children:"Artist"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307492$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307492$$);
            }(), function() {
              var $G__307502$$ = function() {
                return {className:"border-l-2 border-white/20 pl-6 my-8", children:[function() {
                  var $G__307513$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "italic"]))), children:"“If you want to learn about something, become that thing and then study yourself.”"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307513$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307513$$);
                }(), function() {
                  var $G__307527$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$amp$styles$label_muted$$]))), children:"— Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__307527$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__307527$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__307502$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__307502$$);
            }(), function() {
              var $G__307553$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["Zadik Zadikian (b. 1948, Erevan, Soviet Armenia) has spent over five decades creating works that challenge both the materials and ideologies of contemporary art. A daring escape from the Soviet Union in his youth marked the beginning of an extraordinary journey, from his training under ", 
                function() {
                  var $G__307562$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Benjamino Bufano"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__307562$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307562$$);
                }(), " to his longstanding friendship with ", function() {
                  var $G__307574$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Richard Serra"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__307574$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307574$$);
                }(), "."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307553$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__307553$$);
            }(), function() {
              var $G__307588$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Zadikian’s work, particularly his exploration of gilded forms, has established him as one of the leading sculptors in the realm of contemporary alchemy. His pieces, often crafted from gold leaf, suggest a transcendence of time and place, pushing boundaries while creating worlds that seem to belong to another realm entirely."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307588$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307588$$);
            }(), function() {
              var $G__307596$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Centered on the most basic unit—the block, or brick—which has been continuously used for building for over eleven millennia, Zadikian’s simplified plaster casts are elemental and foundational: a humble aesthetics where form, beauty, and meaning emerge through the assembly and fluid recombination of humanity’s most common architectural building element."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307596$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307596$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307457$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307457$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307430$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307430$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__307397_map__307341_map__307341__$1_props__41632__auto__$jscomp$22_vec__307338_vec__307365$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__307397_map__307341_map__307341__$1_props__41632__auto__$jscomp$22_vec__307338_vec__307365$$);
};
$amp$components$sections$curators_section$curator_card$$ = function($G__307261_map__307250_map__307250__$1_props__41632__auto__$jscomp$23_vec__307247$$, $maybe_ref__41633__auto__$jscomp$23$$) {
  $G__307261_map__307250_map__307250__$1_props__41632__auto__$jscomp$23_vec__307247$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__307261_map__307250_map__307250__$1_props__41632__auto__$jscomp$23_vec__307247$$), $maybe_ref__41633__auto__$jscomp$23$$], null);
  $G__307261_map__307250_map__307250__$1_props__41632__auto__$jscomp$23_vec__307247$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307261_map__307250_map__307250__$1_props__41632__auto__$jscomp$23_vec__307247$$, 0, null);
  $G__307261_map__307250_map__307250__$1_props__41632__auto__$jscomp$23_vec__307247$$ = $APP.$cljs$core$__destructure_map$$($G__307261_map__307250_map__307250__$1_props__41632__auto__$jscomp$23_vec__307247$$);
  var $name$jscomp$196$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307261_map__307250_map__307250__$1_props__41632__auto__$jscomp$23_vec__307247$$, $APP.$cljs$cst$182$name$$), $role$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307261_map__307250_map__307250__$1_props__41632__auto__$jscomp$23_vec__307247$$, $APP.$cljs$cst$496$role$$), $img$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307261_map__307250_map__307250__$1_props__41632__auto__$jscomp$23_vec__307247$$, 
  $cljs$cst$497$img$$), $bio$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307261_map__307250_map__307250__$1_props__41632__auto__$jscomp$23_vec__307247$$, $cljs$cst$498$bio$$), $visible_QMARK_$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307261_map__307250_map__307250__$1_props__41632__auto__$jscomp$23_vec__307247$$, $cljs$cst$499$visible_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $tag_style$jscomp$1$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$476$boxDecorationBreak$$, "clone", $cljs$cst$477$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__307261_map__307250_map__307250__$1_props__41632__auto__$jscomp$23_vec__307247$$ = function() {
    return {className:"px-4 sm:flex sm:gap-8 sm:items-start", children:[function() {
      var $G__307271_G__307282$jscomp$inline_3544$$ = {"img-src":$img$jscomp$2$$, fit:"crop", "aspect-ratio":1, "active?":$visible_QMARK_$jscomp$1$$};
      $G__307271_G__307282$jscomp$inline_3544$$ = {className:"float-left mr-4 mb-2 sm:float-none sm:mr-0 sm:mb-0\n               w-20 aspect-square sm:w-36\n               flex-shrink-0 rounded-sm overflow-hidden", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__307271_G__307282$jscomp$inline_3544$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, 
      $G__307271_G__307282$jscomp$inline_3544$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307271_G__307282$jscomp$inline_3544$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307271_G__307282$jscomp$inline_3544$$);
    }(), function() {
      var $G__307310$$ = function() {
        return {className:"sm:flex-1 sm:min-w-0", children:[function() {
          var $G__307320_G__307326$jscomp$inline_3547$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-2 py-0.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$jscomp$1$$), children:$name$jscomp$196$$};
          $G__307320_G__307326$jscomp$inline_3547$$ = {className:"font-display font-bold uppercase tracking-wider\n                    text-lg sm:text-xl text-white dark:text-white mb-1 leading-relaxed", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__307320_G__307326$jscomp$inline_3547$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307320_G__307326$jscomp$inline_3547$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307320_G__307326$jscomp$inline_3547$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307320_G__307326$jscomp$inline_3547$$);
        }(), function() {
          var $G__307351$$ = {className:"font-display font-medium text-xs uppercase tracking-[0.2em]\n                    text-amber-600 dark:text-amber-300/70 mb-3", children:$role$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307351$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307351$$);
        }(), function() {
          var $G__307369$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_sm$$, "sm:text-base"]))), children:$bio$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307369$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307369$$);
        }(), function() {
          var $G__307385$$ = {className:"clear-both sm:hidden"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307385$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307385$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307310$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307310$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307261_map__307250_map__307250__$1_props__41632__auto__$jscomp$23_vec__307247$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307261_map__307250_map__307250__$1_props__41632__auto__$jscomp$23_vec__307247$$);
};
$amp$components$sections$curators_section$curators_section$$ = function($G__307517_map__307486_map__307486__$1_props__41632__auto__$jscomp$24_vec__307483_vec__307507$$, $maybe_ref__41633__auto__$jscomp$24$$) {
  $G__307517_map__307486_map__307486__$1_props__41632__auto__$jscomp$24_vec__307483_vec__307507$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__307517_map__307486_map__307486__$1_props__41632__auto__$jscomp$24_vec__307483_vec__307507$$), $maybe_ref__41633__auto__$jscomp$24$$], null);
  $G__307517_map__307486_map__307486__$1_props__41632__auto__$jscomp$24_vec__307483_vec__307507$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307517_map__307486_map__307486__$1_props__41632__auto__$jscomp$24_vec__307483_vec__307507$$, 0, null);
  $G__307517_map__307486_map__307486__$1_props__41632__auto__$jscomp$24_vec__307483_vec__307507$$ = $APP.$cljs$core$__destructure_map$$($G__307517_map__307486_map__307486__$1_props__41632__auto__$jscomp$24_vec__307483_vec__307507$$);
  var $id$jscomp$71$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307517_map__307486_map__307486__$1_props__41632__auto__$jscomp$24_vec__307483_vec__307507$$, $APP.$cljs$cst$191$id$$), $title$jscomp$22$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307517_map__307486_map__307486__$1_props__41632__auto__$jscomp$24_vec__307483_vec__307507$$, $APP.$cljs$cst$373$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$17$$ = $APP.$helix$hooks$use_ref$$("curators-ref");
  $G__307517_map__307486_map__307486__$1_props__41632__auto__$jscomp$24_vec__307483_vec__307507$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$17$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$441$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307517_map__307486_map__307486__$1_props__41632__auto__$jscomp$24_vec__307483_vec__307507$$, 0, null);
  var $visible_QMARK_$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307517_map__307486_map__307486__$1_props__41632__auto__$jscomp$24_vec__307483_vec__307507$$, 1, null), $title_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$476$boxDecorationBreak$$, "clone", $cljs$cst$477$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__307517_map__307486_map__307486__$1_props__41632__auto__$jscomp$24_vec__307483_vec__307507$$ = function() {
    return {id:$id$jscomp$71$$, ref:$ref$jscomp$17$$, className:"py-16 sm:py-20", children:[$APP.$cljs$core$truth_$$($title$jscomp$22$$) ? function() {
      var $G__307531_G__307542$jscomp$inline_3550$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($title_style$$), children:$title$jscomp$22$$};
      $G__307531_G__307542$jscomp$inline_3550$$ = {className:"font-display font-bold uppercase tracking-wider\n                      text-2xl sm:text-3xl text-white dark:text-white\n                      leading-relaxed mb-10 px-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__307531_G__307542$jscomp$inline_3550$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307531_G__307542$jscomp$inline_3550$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__307531_G__307542$jscomp$inline_3550$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__307531_G__307542$jscomp$inline_3550$$);
    }() : null, function() {
      var $G__307568$$ = function() {
        return {className:"space-y-8 sm:space-y-12\n              divide-y divide-slate-200/50 dark:divide-white/10", children:function() {
          return function $amp$components$sections$curators_section$curators_section_render_$_iter__307575$$($s__307576$$) {
            return new $APP.$cljs$core$LazySeq$$(null, function() {
              for (;;) {
                var $s__307576__$2_temp__5823__auto__$jscomp$71$$ = $APP.$cljs$core$seq$$($s__307576$$);
                if ($s__307576__$2_temp__5823__auto__$jscomp$71$$) {
                  if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__307576__$2_temp__5823__auto__$jscomp$71$$)) {
                    var $c__5626__auto__$jscomp$14$$ = $APP.$cljs$core$_chunked_first$$($s__307576__$2_temp__5823__auto__$jscomp$71$$), $size__5627__auto__$jscomp$14$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$14$$), $b__307578$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$14$$);
                    return function() {
                      for (var $i__307577$$ = 0;;) {
                        if ($i__307577$$ < $size__5627__auto__$jscomp$14$$) {
                          var $JSCompiler_temp_const$jscomp$3820_map__307604_map__307604__$1$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$14$$, $i__307577$$), $G__307612$jscomp$inline_3896_G__307625$jscomp$inline_3897_curator$jscomp$1$$ = $JSCompiler_temp_const$jscomp$3820_map__307604_map__307604__$1$$ = $APP.$cljs$core$__destructure_map$$($JSCompiler_temp_const$jscomp$3820_map__307604_map__307604__$1$$), $G__307613$jscomp$inline_3898_JSCompiler_inline_result$jscomp$3821_name$jscomp$198$$ = 
                          $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($JSCompiler_temp_const$jscomp$3820_map__307604_map__307604__$1$$, $APP.$cljs$cst$182$name$$);
                          $JSCompiler_temp_const$jscomp$3820_map__307604_map__307604__$1$$ = $b__307578$$;
                          $G__307612$jscomp$inline_3896_G__307625$jscomp$inline_3897_curator$jscomp$1$$ = $APP.$helix$impl$props$merge_obj$$({"visible?":$visible_QMARK_$jscomp$2$$}, $APP.$helix$impl$props$_props$cljs$0core$0IFn$0_invoke$0arity$01$$($G__307612$jscomp$inline_3896_G__307625$jscomp$inline_3897_curator$jscomp$1$$));
                          $G__307612$jscomp$inline_3896_G__307625$jscomp$inline_3897_curator$jscomp$1$$ = {className:"pt-8 sm:pt-12 first:pt-0 first:border-t-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$curators_section$curator_card$$, $G__307612$jscomp$inline_3896_G__307625$jscomp$inline_3897_curator$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$curators_section$curator_card$$, 
                          $G__307612$jscomp$inline_3896_G__307625$jscomp$inline_3897_curator$jscomp$1$$)};
                          $G__307613$jscomp$inline_3898_JSCompiler_inline_result$jscomp$3821_name$jscomp$198$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__307612$jscomp$inline_3896_G__307625$jscomp$inline_3897_curator$jscomp$1$$, $G__307613$jscomp$inline_3898_JSCompiler_inline_result$jscomp$3821_name$jscomp$198$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307612$jscomp$inline_3896_G__307625$jscomp$inline_3897_curator$jscomp$1$$, 
                          $G__307613$jscomp$inline_3898_JSCompiler_inline_result$jscomp$3821_name$jscomp$198$$);
                          $JSCompiler_temp_const$jscomp$3820_map__307604_map__307604__$1$$.add($G__307613$jscomp$inline_3898_JSCompiler_inline_result$jscomp$3821_name$jscomp$198$$);
                          $i__307577$$ += 1;
                        } else {
                          return !0;
                        }
                      }
                    }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__307578$$), $amp$components$sections$curators_section$curators_section_render_$_iter__307575$$($APP.$cljs$core$_chunked_rest$$($s__307576__$2_temp__5823__auto__$jscomp$71$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__307578$$), null);
                  }
                  var $map__307672_map__307672__$1$$ = $APP.$cljs$core$first$$($s__307576__$2_temp__5823__auto__$jscomp$71$$), $curator$$ = $map__307672_map__307672__$1$$ = $APP.$cljs$core$__destructure_map$$($map__307672_map__307672__$1$$), $name$jscomp$197$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__307672_map__307672__$1$$, $APP.$cljs$cst$182$name$$);
                  return $APP.$cljs$core$cons$$(function() {
                    var $G__307682_G__307690$jscomp$inline_3556$$ = $APP.$helix$impl$props$merge_obj$$({"visible?":$visible_QMARK_$jscomp$2$$}, $APP.$helix$impl$props$_props$cljs$0core$0IFn$0_invoke$0arity$01$$($curator$$));
                    $G__307682_G__307690$jscomp$inline_3556$$ = {className:"pt-8 sm:pt-12 first:pt-0 first:border-t-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$curators_section$curator_card$$, $G__307682_G__307690$jscomp$inline_3556$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$curators_section$curator_card$$, $G__307682_G__307690$jscomp$inline_3556$$)};
                    var $G__307683$$ = $name$jscomp$197$$;
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__307682_G__307690$jscomp$inline_3556$$, $G__307683$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307682_G__307690$jscomp$inline_3556$$, $G__307683$$);
                  }(), $amp$components$sections$curators_section$curators_section_render_$_iter__307575$$($APP.$cljs$core$rest$$($s__307576__$2_temp__5823__auto__$jscomp$71$$)));
                }
                return null;
              }
            }, null, null);
          }($amp$components$sections$curators_section$curators$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307568$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307568$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__307517_map__307486_map__307486__$1_props__41632__auto__$jscomp$24_vec__307483_vec__307507$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__307517_map__307486_map__307486__$1_props__41632__auto__$jscomp$24_vec__307483_vec__307507$$);
};
$amp$components$sections$in_minor_keys$pull_quote$$ = function($G__307331_map__307316_map__307316__$1_props__41632__auto__$jscomp$25_vec__307313$$, $maybe_ref__41633__auto__$jscomp$25$$) {
  $G__307331_map__307316_map__307316__$1_props__41632__auto__$jscomp$25_vec__307313$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__307331_map__307316_map__307316__$1_props__41632__auto__$jscomp$25_vec__307313$$), $maybe_ref__41633__auto__$jscomp$25$$], null);
  $G__307331_map__307316_map__307316__$1_props__41632__auto__$jscomp$25_vec__307313$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307331_map__307316_map__307316__$1_props__41632__auto__$jscomp$25_vec__307313$$, 0, null);
  $G__307331_map__307316_map__307316__$1_props__41632__auto__$jscomp$25_vec__307313$$ = $APP.$cljs$core$__destructure_map$$($G__307331_map__307316_map__307316__$1_props__41632__auto__$jscomp$25_vec__307313$$);
  var $text$jscomp$16$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307331_map__307316_map__307316__$1_props__41632__auto__$jscomp$25_vec__307313$$, $APP.$cljs$cst$481$text$$), $attribution$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307331_map__307316_map__307316__$1_props__41632__auto__$jscomp$25_vec__307313$$, $cljs$cst$500$attribution$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__307331_map__307316_map__307316__$1_props__41632__auto__$jscomp$25_vec__307313$$ = function() {
    return {className:"border-l-2 border-white/20 pl-6 my-8", children:[function() {
      var $G__307345$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:$text$jscomp$16$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307345$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307345$$);
    }(), function() {
      var $G__307371$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$amp$styles$label_muted$$]))), children:"— " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($attribution$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__307371$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__307371$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__307331_map__307316_map__307316__$1_props__41632__auto__$jscomp$25_vec__307313$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__307331_map__307316_map__307316__$1_props__41632__auto__$jscomp$25_vec__307313$$);
};
$amp$components$sections$in_minor_keys$curator_card$$ = function($G__307615_map__307605_map__307605__$1_props__41632__auto__$jscomp$26_vec__307601$$, $maybe_ref__41633__auto__$jscomp$26$$) {
  $G__307615_map__307605_map__307605__$1_props__41632__auto__$jscomp$26_vec__307601$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__307615_map__307605_map__307605__$1_props__41632__auto__$jscomp$26_vec__307601$$), $maybe_ref__41633__auto__$jscomp$26$$], null);
  $G__307615_map__307605_map__307605__$1_props__41632__auto__$jscomp$26_vec__307601$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307615_map__307605_map__307605__$1_props__41632__auto__$jscomp$26_vec__307601$$, 0, null);
  $G__307615_map__307605_map__307605__$1_props__41632__auto__$jscomp$26_vec__307601$$ = $APP.$cljs$core$__destructure_map$$($G__307615_map__307605_map__307605__$1_props__41632__auto__$jscomp$26_vec__307601$$);
  var $visible_QMARK_$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307615_map__307605_map__307605__$1_props__41632__auto__$jscomp$26_vec__307601$$, $cljs$cst$499$visible_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $tag_style$jscomp$2$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$476$boxDecorationBreak$$, "clone", $cljs$cst$477$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__307615_map__307605_map__307605__$1_props__41632__auto__$jscomp$26_vec__307601$$ = function() {
    return {className:"sm:flex sm:gap-8 sm:items-start mb-10", children:[function() {
      var $G__307627_G__307637$jscomp$inline_3559$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/koyo.png", fit:"crop", "aspect-ratio":1, "active?":$visible_QMARK_$jscomp$3$$};
      $G__307627_G__307637$jscomp$inline_3559$$ = {className:"float-left mr-4 mb-2 sm:float-none sm:mr-0 sm:mb-0\n               w-24 aspect-square sm:w-40\n               flex-shrink-0 rounded-sm overflow-hidden", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__307627_G__307637$jscomp$inline_3559$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, 
      $G__307627_G__307637$jscomp$inline_3559$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307627_G__307637$jscomp$inline_3559$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307627_G__307637$jscomp$inline_3559$$);
    }(), function() {
      var $G__307653$$ = function() {
        return {className:"sm:flex-1 sm:min-w-0", children:[function() {
          var $G__307665_G__307678$jscomp$inline_3562$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-2 py-0.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$jscomp$2$$), children:"Koyo Kouoh"};
          $G__307665_G__307678$jscomp$inline_3562$$ = {className:"font-display font-bold uppercase tracking-wider\n                    text-lg sm:text-xl text-white dark:text-white mb-1 leading-relaxed", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__307665_G__307678$jscomp$inline_3562$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307665_G__307678$jscomp$inline_3562$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307665_G__307678$jscomp$inline_3562$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307665_G__307678$jscomp$inline_3562$$);
        }(), function() {
          var $G__307692$$ = {className:"font-display font-medium text-xs uppercase tracking-[0.2em]\n                    text-amber-600 dark:text-amber-300/70 mb-3", children:"Curator, 61st Biennale Arte"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307692$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307692$$);
        }(), function() {
          var $G__307700$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$]))), children:"The curatorial statement for the 61st International Art Exhibition — La Biennale di Venezia — invites us to listen to the minor keys: the quiet tones, the lower frequencies, the persistent signals of earth and life."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307700$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307700$$);
        }(), function() {
          var $G__307709$$ = {className:"clear-both sm:hidden"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307709$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307709$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307653$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307653$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307615_map__307605_map__307605__$1_props__41632__auto__$jscomp$26_vec__307601$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307615_map__307605_map__307605__$1_props__41632__auto__$jscomp$26_vec__307601$$);
};
$amp$components$sections$in_minor_keys$preview$$ = function($G__307819_props__41632__auto__$jscomp$27_vec__307813$$) {
  $APP.$helix$core$extract_cljs_props$$($G__307819_props__41632__auto__$jscomp$27_vec__307813$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$18$$ = $APP.$helix$hooks$use_ref$$("imk-preview-ref");
  $G__307819_props__41632__auto__$jscomp$27_vec__307813$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$18$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$441$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307819_props__41632__auto__$jscomp$27_vec__307813$$, 0, null);
  var $visible_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307819_props__41632__auto__$jscomp$27_vec__307813$$, 1, null);
  $G__307819_props__41632__auto__$jscomp$27_vec__307813$$ = function() {
    return {className:"px-4", ref:$ref$jscomp$18$$, children:[function() {
      var $G__307826$$ = {"visible?":$visible_QMARK_$jscomp$4$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$curator_card$$, $G__307826$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$curator_card$$, $G__307826$$);
    }(), function() {
      var $G__307830$$ = function() {
        return {className:"text-center my-10 space-y-1", children:[function() {
          var $G__307834$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Take a deep breath]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307834$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307834$$);
        }(), function() {
          var $G__307841$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Exhale]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307841$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307841$$);
        }(), function() {
          var $G__307845$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Drop your shoulders]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307845$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307845$$);
        }(), function() {
          var $G__307850$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Close your eyes]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307850$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307850$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307830$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307830$$);
    }(), function() {
      var $G__307854$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-6"]))), children:"This is an invitation to encounter these words in the immediate physical, meteorological, ambient, and karmic conditions in which they meet you. To shift to a slower gear and tune in to the frequencies of the minor keys. Because, though often lost in the anxious cacophony of the present chaos raging through the world, the music continues. The songs of those producing beauty in spite of tragedy, the tunes of the fugitives recovering from the ruins, the harmonies of those repairing wounds and worlds."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307854$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307854$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307819_props__41632__auto__$jscomp$27_vec__307813$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307819_props__41632__auto__$jscomp$27_vec__307813$$);
};
$amp$components$sections$in_minor_keys$details$$ = function($G__308156_props__41632__auto__$jscomp$28_vec__308146$$) {
  $APP.$helix$core$extract_cljs_props$$($G__308156_props__41632__auto__$jscomp$28_vec__308146$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$19$$ = $APP.$helix$hooks$use_ref$$("imk-details-ref");
  $G__308156_props__41632__auto__$jscomp$28_vec__308146$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$19$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$441$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308156_props__41632__auto__$jscomp$28_vec__308146$$, 0, null);
  var $visible_QMARK_$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308156_props__41632__auto__$jscomp$28_vec__308146$$, 1, null);
  $G__308156_props__41632__auto__$jscomp$28_vec__308146$$ = function() {
    return {className:"px-4", ref:$ref$jscomp$19$$, children:[function() {
      var $G__308160$$ = {"visible?":$visible_QMARK_$jscomp$5$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$curator_card$$, $G__308160$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$curator_card$$, $G__308160$$);
    }(), function() {
      var $G__308164$$ = function() {
        return {className:"text-center my-10 space-y-1", children:[function() {
          var $G__308168$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Take a deep breath]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308168$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308168$$);
        }(), function() {
          var $G__308172$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Exhale]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308172$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308172$$);
        }(), function() {
          var $G__308178$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Drop your shoulders]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308178$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308178$$);
        }(), function() {
          var $G__308184$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Close your eyes]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308184$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308184$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308164$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308164$$);
    }(), function() {
      var $G__308192$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-6"]))), children:"This is an invitation to encounter these words in the immediate physical, meteorological, ambient, and karmic conditions in which they meet you. To shift to a slower gear and tune in to the frequencies of the minor keys. Because, though often lost in the anxious cacophony of the present chaos raging through the world, the music continues. The songs of those producing beauty in spite of tragedy, the tunes of the fugitives recovering from the ruins, the harmonies of those repairing wounds and worlds."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308192$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308192$$);
    }(), function() {
      var $G__308196$$ = {text:"There is a reason, after all, that some people wish to colonize the moon, and others dance before it as an ancient friend.", attribution:"James Baldwin, 1972"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$pull_quote$$, $G__308196$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$pull_quote$$, $G__308196$$);
    }(), function() {
      var $G__308200$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The minor key, in music, alludes both to the structure of a song and to its emotional effects. It is a rich idea, so rich that it quickly overflows its technical definition and spills with metaphor. It summons moods, the blues, the call-and-response, the morna, the second line, the lament, the allegory, the whisper."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308200$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308200$$);
    }(), function() {
      var $G__308208$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The minor keys refuse orchestral bombast and goose-step military marches and come alive in the quiet tones, the lower frequencies, the hums, the consolations of poetry, all portals of improvisation to the elsewhere and the otherwise. The minor keys ask for listening that calls on the emotions and sustains them in return."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308208$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308208$$);
    }(), function() {
      var $G__308215$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The minor keys are also the small islands, worlds amid oceans with distinct and endlessly rich ecosystems, social lives that are articulated, for better and worse, within much larger political forms and ecological stakes. Here, the evocation of the key and the island extends to an archipelago of oases: gardens, courtyards, compounds, lofts, dance floors — the other worlds that artists make, the intimate and convivial universes that refresh and sustain even in terrible times; indeed, especially in terrible times."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308215$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308215$$);
    }(), function() {
      var $G__308225$$ = {text:"Look at the creole garden, you put all species on such a little lick of land: avocados, lemons, yams, sugarcanes… plus thirty or forty other species on this bit of land that doesn’t go more than fifty feet up the side of the hill, they protect each other. In the great Circle, everything is in everything else.", attribution:"Édouard Glissant, 1993"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$pull_quote$$, $G__308225$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$pull_quote$$, $G__308225$$);
    }(), function() {
      var $G__308229$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"These are the cues for an exhibition; an exhibition tuned in to the minor keys; an exhibition that invites listening to the persistent signals of earth and life, connecting to soul frequencies. If, in music, the minor keys are often associated with strangeness, melancholy and sorrow, here their joy, solace, hope, and transcendence manifest as well."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308229$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308229$$);
    }(), function() {
      var $G__308237$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"In the minor keys, sound and sensation are grounding, they hold the cadences, melodies, and silences of resonant worlds that gather and create together a polyphonous assembly of art, convening and communing in convivial collectivity, beaming across the void of alienation and the crackle of conflict."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308237$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308237$$);
    }(), function() {
      var $G__308251$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The 61st edition of the Biennale Arte is grounded in a deep belief in artists as the vital interpreters of the social and psychic condition and catalysts of new relations and possibilities."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308251$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308251$$);
    }(), function() {
      var $G__308263$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The exhibition’s composition is formed by artistic practices that open portals, that refresh and nourish, that prompt relation and relationship, that advance concept and form through networks and schools — understood freely and informally."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308263$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308263$$);
    }(), function() {
      var $G__308269$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The intended effect scrambles cohesion and dissonance in the manner of a free-jazz ensemble, or perhaps, at the scale of the Biennale Arte, a festival of ensembles with a common premise: that poetics liberate and people make beauty together."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308269$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308269$$);
    }(), function() {
      var $G__308275$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Through relation, sharing, and transcendence, the artists and practices that operate in this spirit, like jazz, across methods, scales, senses and forms, propose to visitors an exhibitional experience that is more sensory than didactic, renewing rather than exhausting, and fortifying for the work ahead."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308275$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308275$$);
    }(), function() {
      var $G__308288$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Through a visual and meditative procession, the exhibition prompts all senses to interconnect and meander from one universe to the other, rendering visible the possibilities that reside in the in-between spaces and beyond the portals."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308288$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308288$$);
    }(), function() {
      var $G__308296$$ = {text:"…there is no choice but to tune in like jazzmen to these imperative mutations. The jazzman constantly meditates on the unpredictable, stands within it according to the laws of polyrhythm, and improvises breathtaking moments. We small-island Caribbeans are not ready, but we have this resource. The change will have to be so profound that we will no doubt have to add to the knowledge of jazz, the old totemisms, animisms, analogisms, and other metaphysics too summarily discarded. These old-world poems are already precious scores.", 
      attribution:"Patrick Chamoiseau, 2023"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$pull_quote$$, $G__308296$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$pull_quote$$, $G__308296$$);
    }(), function() {
      var $G__308303$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"In this spirit, the international exhibition of the 61st Biennale Arte intends neither a litany of commentary on world events, nor an inattention or escape from compounding and continuous intersecting crises. Rather, it proposes a radical reconnection with art’s natural habitat and role in society: that is the emotional, the visual, the sensory, the affective, the subjective."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308303$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308303$$);
    }(), function() {
      var $G__308313$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"In Minor Keys are sequences of exhilarating journeys that address the sensate and the affective, inviting visitors to marvel, meditate, dream, revel, reflect, and commune in realms where time is not corporate property nor at the mercy of relentlessly accelerated productivity."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308313$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308313$$);
    }(), function() {
      var $G__308319$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"After all, it is clear by now that the enduring time of capital and empire maligned local, Indigenous and terrestrial knowledges as chimeric, and dismissed co-constitutive artistic practices as artisanal, intended for decoration or devotional rituals."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308319$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308319$$);
    }(), function() {
      var $G__308327$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The ‘civilizing mission’ flattens all with condescending contempt, and in the contemporary era entire societies and ecologies are regarded as collateral damage in the headstrong pursuit of growth supported by ruthlessness and greed. In refusing the spectacle of horror, the time has come to listen to the minor keys, to tune in sotto voce to the whispers, to the lower frequencies; to find the oases, the islands, where the dignity of all living beings is safeguarded."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308327$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308327$$);
    }(), function() {
      var $G__308337$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The exhibition posits that such radical shifts are taking place — indeed, have been underway all along — in the minor keys, and the artists, poets, performers, and filmmakers whom the exhibition will convene are grounded in their commitments to realizing them. Artists are channels to and between the minor keys and listening to, rather than speaking for them is at the core of the curatorial conceit."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308337$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308337$$);
    }(), function() {
      var $G__308343$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The exhibition In Minor Keys stands as a collective score composed together with artists who have built universes of imagination. Artists who work at the boundaries of form, and whose practices can be thought of as intricate melodies to be heard both collectively and on their own terms. These are artists whose practices seamlessly bleed into society."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308343$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308343$$);
    }(), function() {
      var $G__308349$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Artists who accommodate daily life as part of a logical and aesthetically consistent relation of parts. Artists who are exceedingly generous and hospitable to life."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308349$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308349$$);
    }(), function() {
      var $G__308381$$ = {text:"In our myths, in our songs, that’s where the seeds are. It is not possible to constantly hone on the crisis. You have to have the love and you have to have the magic, that’s also life.", attribution:"Toni Morrison, 1977"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$pull_quote$$, $G__308381$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$pull_quote$$, $G__308381$$);
    }(), function() {
      var $G__308394$$ = function() {
        return {className:"mt-12 mb-6 border-t border-white/10 pt-10", children:[function() {
          var $G__308401$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "mb-6"]))), children:"The Studio — In the Minor Keys"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__308401$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__308401$$);
        }(), function() {
          var $G__308409_JSCompiler_temp_const$jscomp$inline_3564$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
          var $G__308415$jscomp$inline_3566_JSCompiler_inline_result$jscomp$inline_3565$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
          $G__308415$jscomp$inline_3566_JSCompiler_inline_result$jscomp$inline_3565$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__308415$jscomp$inline_3566_JSCompiler_inline_result$jscomp$inline_3565$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__308415$jscomp$inline_3566_JSCompiler_inline_result$jscomp$inline_3565$$);
          $G__308409_JSCompiler_temp_const$jscomp$inline_3564$$ = {className:$G__308409_JSCompiler_temp_const$jscomp$inline_3564$$, children:["Zadik Zadikian’s ", $G__308415$jscomp$inline_3566_JSCompiler_inline_result$jscomp$inline_3565$$, " is a practice tuned precisely to these frequencies. In a pavilion where the brick — the most elementary building unit, unchanged for eleven millennia — is cast, stacked, disassembled, and reassembled over six months, simplicity becomes the method and the meaning."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308409_JSCompiler_temp_const$jscomp$inline_3564$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__308409_JSCompiler_temp_const$jscomp$inline_3564$$);
        }(), function() {
          var $G__308431$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__308439$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Doing the work."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__308439$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__308439$$);
            }(), " The minor keys ask for sustained attention, not spectacle. In ", function() {
              var $G__308445$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__308445$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__308445$$);
            }(), ", the act of making is neither performed nor concealed. Plaster is mixed, forms are poured, bricks emerge. Day after day, the labor itself is the statement — a refusal of the accelerated and the disposable in favor of the deliberate and the enduring."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308431$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__308431$$);
        }(), function() {
          var $G__308459$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__308471$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Making simple things."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__308471$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__308471$$);
            }(), " Each brick is humble. It carries no narrative, bears no symbol. Like the creole garden where thirty species protect each other on a lick of land, the individual unit is modest. Its power lives not in what it represents but in what it ", function() {
              var $G__308480$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"is"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__308480$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__308480$$);
            }(), " — material presence, weight, color, surface."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308459$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__308459$$);
        }(), function() {
          var $G__308493_JSCompiler_temp_const$jscomp$inline_3568$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
          var $G__308503$jscomp$inline_3570_JSCompiler_inline_result$jscomp$inline_3569$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Higher-order structures from simplicity."};
          $G__308503$jscomp$inline_3570_JSCompiler_inline_result$jscomp$inline_3569$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__308503$jscomp$inline_3570_JSCompiler_inline_result$jscomp$inline_3569$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__308503$jscomp$inline_3570_JSCompiler_inline_result$jscomp$inline_3569$$);
          $G__308493_JSCompiler_temp_const$jscomp$inline_3568$$ = {className:$G__308493_JSCompiler_temp_const$jscomp$inline_3568$$, children:[$G__308503$jscomp$inline_3570_JSCompiler_inline_result$jscomp$inline_3569$$, " When stacked, these bricks become something else entirely. Composite forms emerge — not designed from above but discovered through assembly. The whole exceeds its parts, not through complexity of component, but through the patient, improvisational logic of combination. Like polyrhythm in jazz, coherence arises from the interplay of simple, repeating elements."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308493_JSCompiler_temp_const$jscomp$inline_3568$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__308493_JSCompiler_temp_const$jscomp$inline_3568$$);
        }(), function() {
          var $G__308511_JSCompiler_temp_const$jscomp$inline_3572$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
          var $G__308523$jscomp$inline_3574_JSCompiler_inline_result$jscomp$inline_3573$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Simplicity is not ease."};
          $G__308523$jscomp$inline_3574_JSCompiler_inline_result$jscomp$inline_3573$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__308523$jscomp$inline_3574_JSCompiler_inline_result$jscomp$inline_3573$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__308523$jscomp$inline_3574_JSCompiler_inline_result$jscomp$inline_3573$$);
          $G__308511_JSCompiler_temp_const$jscomp$inline_3572$$ = {className:$G__308511_JSCompiler_temp_const$jscomp$inline_3572$$, children:[$G__308523$jscomp$inline_3574_JSCompiler_inline_result$jscomp$inline_3573$$, " To cast a perfect brick, to find the right pigment, to know which form belongs beside another — this is the discipline beneath the quiet surface. The minor keys sound gentle, but they demand the deepest listening. The studio is where that discipline lives: not in reaching for the obvious, but in reaching for the precise."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308511_JSCompiler_temp_const$jscomp$inline_3572$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__308511_JSCompiler_temp_const$jscomp$inline_3572$$);
        }(), function() {
          var $G__308535$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__308545$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Reaching for the right tool."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__308545$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__308545$$);
            }(), " Zadikian does not reach for what is always close at hand. He reaches for what is right. The plaster, the mold, the trowel — each chosen not for convenience but for fidelity to the form. In this way, ", function() {
              var $G__308557$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__308557$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__308557$$);
            }(), " enacts the curatorial premise of In Minor Keys: that beauty is made together, through relation, through the handmade, through the refusal to shortcut the work that matters."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308535$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__308535$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308394$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308394$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308156_props__41632__auto__$jscomp$28_vec__308146$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308156_props__41632__auto__$jscomp$28_vec__308146$$);
};
$amp$components$sections$in_minor_keys$in_minor_keys$$ = function($G__308614_id$jscomp$72_map__308602_props__41632__auto__$jscomp$29_vec__308597$$, $G__308618$jscomp$inline_3577_JSCompiler_inline_result$jscomp$inline_3576_idx$jscomp$70_maybe_ref__41633__auto__$jscomp$29$$) {
  $G__308614_id$jscomp$72_map__308602_props__41632__auto__$jscomp$29_vec__308597$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__308614_id$jscomp$72_map__308602_props__41632__auto__$jscomp$29_vec__308597$$), $G__308618$jscomp$inline_3577_JSCompiler_inline_result$jscomp$inline_3576_idx$jscomp$70_maybe_ref__41633__auto__$jscomp$29$$], null);
  $G__308614_id$jscomp$72_map__308602_props__41632__auto__$jscomp$29_vec__308597$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308614_id$jscomp$72_map__308602_props__41632__auto__$jscomp$29_vec__308597$$, 0, null);
  var $map__308602__$1_title$jscomp$23$$ = $APP.$cljs$core$__destructure_map$$($G__308614_id$jscomp$72_map__308602_props__41632__auto__$jscomp$29_vec__308597$$);
  $G__308614_id$jscomp$72_map__308602_props__41632__auto__$jscomp$29_vec__308597$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__308602__$1_title$jscomp$23$$, $APP.$cljs$cst$191$id$$);
  $G__308618$jscomp$inline_3577_JSCompiler_inline_result$jscomp$inline_3576_idx$jscomp$70_maybe_ref__41633__auto__$jscomp$29$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__308602__$1_title$jscomp$23$$, $APP.$cljs$cst$432$idx$$);
  var $subtitle$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__308602__$1_title$jscomp$23$$, $APP.$cljs$cst$466$subtitle$$);
  $map__308602__$1_title$jscomp$23$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__308602__$1_title$jscomp$23$$, $APP.$cljs$cst$373$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__308618$jscomp$inline_3577_JSCompiler_inline_result$jscomp$inline_3576_idx$jscomp$70_maybe_ref__41633__auto__$jscomp$29$$ = {idx:$G__308618$jscomp$inline_3577_JSCompiler_inline_result$jscomp$inline_3576_idx$jscomp$70_maybe_ref__41633__auto__$jscomp$29$$, "section-hint":$subtitle$jscomp$2$$, title:$map__308602__$1_title$jscomp$23$$, "expand-button-label":"Read full statement", "preview-text":$amp$components$sections$in_minor_keys$preview$$, "full-text":$amp$components$sections$in_minor_keys$details$$};
  $G__308618$jscomp$inline_3577_JSCompiler_inline_result$jscomp$inline_3576_idx$jscomp$70_maybe_ref__41633__auto__$jscomp$29$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__308618$jscomp$inline_3577_JSCompiler_inline_result$jscomp$inline_3576_idx$jscomp$70_maybe_ref__41633__auto__$jscomp$29$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$elements$expandable_text_area$expandable_text_area_2$$, 
  $G__308618$jscomp$inline_3577_JSCompiler_inline_result$jscomp$inline_3576_idx$jscomp$70_maybe_ref__41633__auto__$jscomp$29$$);
  $G__308614_id$jscomp$72_map__308602_props__41632__auto__$jscomp$29_vec__308597$$ = {id:$G__308614_id$jscomp$72_map__308602_props__41632__auto__$jscomp$29_vec__308597$$, children:$G__308618$jscomp$inline_3577_JSCompiler_inline_result$jscomp$inline_3576_idx$jscomp$70_maybe_ref__41633__auto__$jscomp$29$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308614_id$jscomp$72_map__308602_props__41632__auto__$jscomp$29_vec__308597$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308614_id$jscomp$72_map__308602_props__41632__auto__$jscomp$29_vec__308597$$);
};
$amp$components$sections$mobile_hero_section$mobile_hero_section$$ = function($G__307858_props__41632__auto__$jscomp$30_vec__307837$$) {
  $APP.$helix$core$extract_cljs_props$$($G__307858_props__41632__auto__$jscomp$30_vec__307837$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$4$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__307858_props__41632__auto__$jscomp$30_vec__307837$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ctx$jscomp$4$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$382$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307858_props__41632__auto__$jscomp$30_vec__307837$$, 0, null);
  var $is_active_QMARK_$jscomp$8$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307858_props__41632__auto__$jscomp$30_vec__307837$$, 1, null), $clone_style$jscomp$1$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$476$boxDecorationBreak$$, "clone", $cljs$cst$477$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__307858_props__41632__auto__$jscomp$30_vec__307837$$ = function() {
    return {id:"video", ref:$outer_ctx$jscomp$4$$, className:"relative w-full overflow-hidden", children:function() {
      var $G__307868$$ = function() {
        return {className:"w-screen h-screen relative flex flex-col", children:[function() {
          var $G__307878_G__307890$jscomp$inline_3580$$ = {"allow-audio?":!1, "playback-id":"fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo", "should-play?":$is_active_QMARK_$jscomp$8$$};
          $G__307878_G__307890$jscomp$inline_3580$$ = {className:"absolute inset-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$mobile_hero_section$lazy_video_background$$, $G__307878_G__307890$jscomp$inline_3580$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$mobile_hero_section$lazy_video_background$$, $G__307878_G__307890$jscomp$inline_3580$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307878_G__307890$jscomp$inline_3580$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307878_G__307890$jscomp$inline_3580$$);
        }(), function() {
          var $G__307906$$ = function() {
            return {className:"absolute top-20 right-8 z-10", children:function() {
              var $G__307920$$ = function() {
                return {className:"cursor-pointer w-24 sm:w-28 lg:w-32", onClick:function() {
                  return window.open("https://www.labiennale.org/en/art/2026", "_blank");
                }, children:function() {
                  var $G__307940$$ = {src:"images/graphics/61_biennale_logo_red.svg", className:"opacity-90"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__307940$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__307940$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307920$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307920$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307906$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307906$$);
        }(), function() {
          var $G__307962$$ = function() {
            return {className:"relative z-10 flex-1 flex flex-col items-center justify-center px-8", children:[function() {
              var $G__307973$$ = {className:"w-4/5 sm:w-2/3 max-w-2xl aspect-square mb-10 bg-amber-300 opacity-90", style:{WebkitMaskImage:$APP.$helix$impl$props$__GT_js$$("url(images/graphics/the_studio_logo.svg)"), maskImage:$APP.$helix$impl$props$__GT_js$$("url(images/graphics/the_studio_logo.svg)"), WebkitMaskSize:$APP.$helix$impl$props$__GT_js$$("contain"), maskSize:$APP.$helix$impl$props$__GT_js$$("contain"), WebkitMaskRepeat:$APP.$helix$impl$props$__GT_js$$("no-repeat"), maskRepeat:$APP.$helix$impl$props$__GT_js$$("no-repeat"), 
              WebkitMaskPosition:$APP.$helix$impl$props$__GT_js$$("center"), maskPosition:$APP.$helix$impl$props$__GT_js$$("center")}};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307973$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307973$$);
            }(), function() {
              var $G__308000_G__308008$jscomp$inline_3583$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/50 px-3 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"Armenia Pavilion · 61st International Art Exhibition La Biennale di Venezia"};
              $G__308000_G__308008$jscomp$inline_3583$$ = {className:"font-display text-xs sm:text-sm uppercase tracking-[0.2em] max-w-md text-center leading-loose text-white/90", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__308000_G__308008$jscomp$inline_3583$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__308000_G__308008$jscomp$inline_3583$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308000_G__308008$jscomp$inline_3583$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308000_G__308008$jscomp$inline_3583$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307962$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307962$$);
        }(), function() {
          var $G__308032_G__308043$jscomp$inline_3586$$ = {className:"text-lg animate-bounce", children:"↓"};
          $G__308032_G__308043$jscomp$inline_3586$$ = {href:"#press-release", className:"absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-1\n                text-white/80 hover:text-white transition-colors\n                font-display text-xs uppercase tracking-[0.2em]", children:["Learn More", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__308032_G__308043$jscomp$inline_3586$$) : $APP.$helix$core$jsx$$.call(null, 
          "span", $G__308032_G__308043$jscomp$inline_3586$$)]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__308032_G__308043$jscomp$inline_3586$$) : $APP.$helix$core$jsxs$$.call(null, "a", $G__308032_G__308043$jscomp$inline_3586$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307868$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307868$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307858_props__41632__auto__$jscomp$30_vec__307837$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307858_props__41632__auto__$jscomp$30_vec__307837$$);
};
$amp$components$sections$site_footer$site_footer$$ = function($G__308233_map__308221_props__41632__auto__$jscomp$31_vec__308218$$, $maybe_ref__41633__auto__$jscomp$31$$) {
  $G__308233_map__308221_props__41632__auto__$jscomp$31_vec__308218$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__308233_map__308221_props__41632__auto__$jscomp$31_vec__308218$$), $maybe_ref__41633__auto__$jscomp$31$$], null);
  $G__308233_map__308221_props__41632__auto__$jscomp$31_vec__308218$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308233_map__308221_props__41632__auto__$jscomp$31_vec__308218$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__308233_map__308221_props__41632__auto__$jscomp$31_vec__308218$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$jscomp$1$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__308233_map__308221_props__41632__auto__$jscomp$31_vec__308218$$ = function() {
    return {className:"relative w-full font-display mt-12", children:[function() {
      var $G__308241$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308241$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308241$$);
    }(), function() {
      var $G__308249_G__308257$jscomp$inline_4002_G__308283$jscomp$inline_4003$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-xl lg:text-2xl italic font-light leading-relaxed", "text-slate-600  dark:text-slate-400"]))), children:"“The way you do anything is the way you do everything.”"};
      $G__308249_G__308257$jscomp$inline_4002_G__308283$jscomp$inline_4003$$ = {className:"max-w-3xl text-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308249_G__308257$jscomp$inline_4002_G__308283$jscomp$inline_4003$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308249_G__308257$jscomp$inline_4002_G__308283$jscomp$inline_4003$$)};
      $G__308249_G__308257$jscomp$inline_4002_G__308283$jscomp$inline_4003$$ = {className:"py-16 lg:py-24 px-6 flex justify-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__308249_G__308257$jscomp$inline_4002_G__308283$jscomp$inline_4003$$) : $APP.$helix$core$jsx$$.call(null, "blockquote", $G__308249_G__308257$jscomp$inline_4002_G__308283$jscomp$inline_4003$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308249_G__308257$jscomp$inline_4002_G__308283$jscomp$inline_4003$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308249_G__308257$jscomp$inline_4002_G__308283$jscomp$inline_4003$$);
    }(), function() {
      var $G__308300$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308300$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308300$$);
    }(), function() {
      var $G__308317$$ = function() {
        return {className:"py-16 lg:py-20 px-6 max-w-5xl mx-auto", children:[function() {
          var $G__308329$$ = function() {
            return {className:"text-center mb-16", children:[function() {
              var $G__308341$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-2xl lg:text-3xl font-semibold uppercase tracking-wider mb-3", "text-slate-900  dark:text-slate-100"]))), children:"Support the Pavilion"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__308341$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__308341$$);
            }(), function() {
              var $G__308357$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm lg:text-base max-w-xl mx-auto mb-8", "text-slate-600  dark:text-slate-400"]))), children:"Your contribution directly supports Armenia’s national presentation at the 61st Venice Biennale."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308357$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308357$$);
            }(), function() {
              var $G__308361$$ = function() {
                return {className:"flex justify-center", children:function() {
                  var $G__308365$$ = function() {
                    return {title:"Donate Now", "on-click":function() {
                      return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                    }};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__308365$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__308365$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308361$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308361$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308329$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308329$$);
        }(), function() {
          var $G__308386$$ = function() {
            return {className:"grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-sm", children:[function() {
              var $G__308421$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__308427$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-medium uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"Get in Touch"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__308427$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__308427$$);
                }(), function() {
                  var $G__308437$$ = {href:"mailto:hello@armenianpavilion2026.org?subject\x3dLet's%20connect", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), children:"hello@armenianpavilion2026.org"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__308437$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__308437$$);
                }(), function() {
                  var $G__308447$$ = {href:"tel:+13234041152", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), children:"+1 323-404-1152"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__308447$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__308447$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308421$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308421$$);
            }(), function() {
              var $G__308461$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__308469$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-medium uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"501(c)(3) Non-Profit"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__308469$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__308469$$);
                }(), function() {
                  var $G__308481$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"Fallen Angels Inc."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308481$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308481$$);
                }(), function() {
                  var $G__308491$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-600  dark:text-slate-400"), children:"EIN: 92-2395513"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308491$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308491$$);
                }(), function() {
                  var $G__308501$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-600  dark:text-slate-400"), children:"Los Angeles, CA"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308501$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308501$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308461$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308461$$);
            }(), function() {
              var $G__308509$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__308521$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-medium uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"Quick Links"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__308521$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__308521$$);
                }(), function() {
                  var $G__308533$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$("video") : $scroll_to_id$jscomp$1$$.call(null, "video");
                    }, children:"The Film"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__308533$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__308533$$);
                }(), function() {
                  var $G__308553$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$("press-release") : $scroll_to_id$jscomp$1$$.call(null, "press-release");
                    }, children:"Press Release"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__308553$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__308553$$);
                }(), function() {
                  var $G__308563$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$("about-studio") : $scroll_to_id$jscomp$1$$.call(null, "about-studio");
                    }, children:"The Studio"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__308563$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__308563$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308509$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308509$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308386$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308386$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308317$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308317$$);
    }(), function() {
      var $G__308572$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308572$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308572$$);
    }(), function() {
      var $G__308578$$ = function() {
        return {className:"py-6 px-6 flex flex-col sm:flex-row justify-between items-center gap-3 max-w-5xl mx-auto", children:[function() {
          var $G__308583$$ = function() {
            return {className:"flex items-center gap-4", children:[function() {
              var $G__308588$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"h-6 opacity-40 invert dark:invert-0"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__308588$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__308588$$);
            }(), function() {
              var $G__308593$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] uppercase tracking-[0.15em] whitespace-nowrap", "text-slate-600  dark:text-slate-400"]))), children:"Armenia Pavilion · 61st Venice Biennale"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__308593$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__308593$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308583$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308583$$);
        }(), function() {
          var $G__308601$$ = function() {
            return {className:"flex items-center gap-4", children:[function() {
              var $G__308606$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-600  dark:text-slate-400"]))), children:"© 2026 AZ Studios Inc."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__308606$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__308606$$);
            }(), function() {
              var $G__308610$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"v" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("e42cedb")};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__308610$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__308610$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308601$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308601$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308578$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308578$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("footer", $G__308233_map__308221_props__41632__auto__$jscomp$31_vec__308218$$) : $APP.$helix$core$jsxs$$.call(null, "footer", $G__308233_map__308221_props__41632__auto__$jscomp$31_vec__308218$$);
};
$amp$components$sections$non_profit$title$$ = function($G__308798_G__308816$jscomp$inline_4006_G__308824$jscomp$inline_4007_props__41632__auto__$jscomp$32$$) {
  $APP.$helix$core$extract_cljs_props$$($G__308798_G__308816$jscomp$inline_4006_G__308824$jscomp$inline_4007_props__41632__auto__$jscomp$32$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__308798_G__308816$jscomp$inline_4006_G__308824$jscomp$inline_4007_props__41632__auto__$jscomp$32$$ = {className:"w-1", children:"support the Armenia Pavilion"};
  $G__308798_G__308816$jscomp$inline_4006_G__308824$jscomp$inline_4007_props__41632__auto__$jscomp$32$$ = {className:"flex flex-col", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308798_G__308816$jscomp$inline_4006_G__308824$jscomp$inline_4007_props__41632__auto__$jscomp$32$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308798_G__308816$jscomp$inline_4006_G__308824$jscomp$inline_4007_props__41632__auto__$jscomp$32$$)};
  $G__308798_G__308816$jscomp$inline_4006_G__308824$jscomp$inline_4007_props__41632__auto__$jscomp$32$$ = {className:"lg:flex\n                    w-full\n                    lg:h-2/5\n                    z-20\n                    items-center\n                    justify-between\n                    bg-black/10\n                    lg:p-12 p-4\n                    lg:text-6xl text-3xl\n                    font-display\n                    font-bold\n                    text-slate-800", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? 
  $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308798_G__308816$jscomp$inline_4006_G__308824$jscomp$inline_4007_props__41632__auto__$jscomp$32$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308798_G__308816$jscomp$inline_4006_G__308824$jscomp$inline_4007_props__41632__auto__$jscomp$32$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308798_G__308816$jscomp$inline_4006_G__308824$jscomp$inline_4007_props__41632__auto__$jscomp$32$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308798_G__308816$jscomp$inline_4006_G__308824$jscomp$inline_4007_props__41632__auto__$jscomp$32$$);
};
$amp$components$sections$non_profit$copy_block$$ = function($G__308837_map__308835_map__308835__$1_props__41632__auto__$jscomp$33_vec__308832$$, $maybe_ref__41633__auto__$jscomp$33$$) {
  $G__308837_map__308835_map__308835__$1_props__41632__auto__$jscomp$33_vec__308832$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__308837_map__308835_map__308835__$1_props__41632__auto__$jscomp$33_vec__308832$$), $maybe_ref__41633__auto__$jscomp$33$$], null);
  $G__308837_map__308835_map__308835__$1_props__41632__auto__$jscomp$33_vec__308832$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308837_map__308835_map__308835__$1_props__41632__auto__$jscomp$33_vec__308832$$, 0, null);
  $G__308837_map__308835_map__308835__$1_props__41632__auto__$jscomp$33_vec__308832$$ = $APP.$cljs$core$__destructure_map$$($G__308837_map__308835_map__308835__$1_props__41632__auto__$jscomp$33_vec__308832$$);
  var $title$jscomp$24$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308837_map__308835_map__308835__$1_props__41632__auto__$jscomp$33_vec__308832$$, $APP.$cljs$cst$373$title$$), $copy$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308837_map__308835_map__308835__$1_props__41632__auto__$jscomp$33_vec__308832$$, $cljs$cst$493$copy$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__308837_map__308835_map__308835__$1_props__41632__auto__$jscomp$33_vec__308832$$ = function() {
    return {className:"flex flex-col mb-12 font-display", children:[function() {
      var $G__308841$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:$title$jscomp$24$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308841$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308841$$);
    }(), function() {
      var $G__308846$$ = {className:"text-slate-800", children:$copy$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308846$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308846$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308837_map__308835_map__308835__$1_props__41632__auto__$jscomp$33_vec__308832$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308837_map__308835_map__308835__$1_props__41632__auto__$jscomp$33_vec__308832$$);
};
$amp$components$sections$non_profit$non_profit_section$$ = function($G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$, $maybe_ref__41633__auto__$jscomp$34$$) {
  $G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$), $maybe_ref__41633__auto__$jscomp$34$$], null);
  $G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$, 0, null);
  $G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$ = $APP.$cljs$core$__destructure_map$$($G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$, $cljs$cst$494$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$, $cljs$cst$491$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$, $cljs$cst$495$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$5$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$5$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$, 1, null);
  $G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$non_profit$images$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$, 1, null);
  $APP.$helix$hooks$use_ref$$("image-gallery-container-ref");
  $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$ = function() {
    return {ref:$outer_ctx$jscomp$5$$, className:"h-full \n                          w-full\n                          flex\n                          blue-purple-grad\n                          light-red-grad\n                          items-center\n                          justify-center\n                          font-display\n                          relative", children:function() {
      var $G__308894$$ = function() {
        return {className:"flex \n                                 flex-col\n                                 overflow-hidden\n                                 relative\n                                 w-full md:w-10/12 lg:w-full\n                                 lg:p-12 p-4", children:[function() {
          var $G__308902$$ = {};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$non_profit$title$$, $G__308902$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$non_profit$title$$, $G__308902$$);
        }(), function() {
          var $G__308904$$ = function() {
            return {className:"flex overflow-hidden relative", children:function() {
              var $G__308908$$ = function() {
                return {className:"lg:w-1/2 \n                                               lg:p-16 p-4", children:[function() {
                  var $G__308912$$ = {title:"", copy:"Funds go to keep THE STUDIO alive for six months in Venice.  Your support ensures the artist’s residency, covers materials and fabrication, pays our production crew, builds and ships the pavilion, and funds public programs and the exhibition catalogue.  Gifts are handled by Fallen Angels, a registered 501(c)(3) non‑profit; donations to a 501(c)(3) are tax‑deductible"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$non_profit$copy_block$$, $G__308912$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$non_profit$copy_block$$, $G__308912$$);
                }(), function() {
                  var $G__308922$$ = function() {
                    return {className:"flex flex-col mb-12 font-display", children:[function() {
                      var $G__308926$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:"What Your Donation Funds"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308926$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308926$$);
                    }(), function() {
                      var $G__308932$$ = function() {
                        return {className:"list-disc list-outside ml-5 text-slate-800", children:[function() {
                          var $G__308940$$ = {children:"Artist \x26 team residency in Venice"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__308940$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__308940$$);
                        }(), function() {
                          var $G__308950$$ = {children:"Fabrication materials and modular blocks"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__308950$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__308950$$);
                        }(), function() {
                          var $G__308958$$ = {children:"Production crew \x26 documentation (video, photography, editing)"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__308958$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__308958$$);
                        }(), function() {
                          var $G__308964$$ = {children:"Pavilion build‑out, shipping \x26 logistics"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__308964$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__308964$$);
                        }(), function() {
                          var $G__308972$$ = {children:"Public programs \x26 education"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__308972$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__308972$$);
                        }(), function() {
                          var $G__308976$$ = {children:"Archival filming \x26 catalogue"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__308976$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__308976$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ul", $G__308932$$) : $APP.$helix$core$jsxs$$.call(null, "ul", $G__308932$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308922$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308922$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308908$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308908$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308904$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308904$$);
        }(), function() {
          var $G__308982$$ = function() {
            return {className:"lg:absolute lg:bottom-[40px] lg:left-1/2 lg:-translate-x-1/2", children:function() {
              var $G__308990$$ = function() {
                return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
                  return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                }};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__308990$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__308990$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308982$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308982$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308894$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308894$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__308890_map__308881_map__308881__$1_props__41632__auto__$jscomp$34_vec__308878_vec__308882_vec__308885$$);
};
$amp$components$sections$team_section$team_member_card$$ = function($G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$, $data$jscomp$135_maybe_ref__41633__auto__$jscomp$35$$) {
  $G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$), $data$jscomp$135_maybe_ref__41633__auto__$jscomp$35$$], null);
  $G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$, 0, null);
  $G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$ = $APP.$cljs$core$__destructure_map$$($G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$);
  $data$jscomp$135_maybe_ref__41633__auto__$jscomp$35$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$, $APP.$cljs$cst$28$data$$);
  var $images$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$, $cljs$cst$490$images$$), $flash_images_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$, $cljs$cst$503$flash_images_handler$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$ = $APP.$cljs$core$__destructure_map$$($data$jscomp$135_maybe_ref__41633__auto__$jscomp$35$$);
  var $name$jscomp$199$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$, $APP.$cljs$cst$182$name$$), $role$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$, $APP.$cljs$cst$496$role$$), $copy$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$, 
  $cljs$cst$493$copy$$), $social$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$, $cljs$cst$501$social$$), $email$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$, $cljs$cst$502$email$$);
  $G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$ = function() {
    return {className:"flex flex-col\n                    mb-16\n                    font-display text-gray-800", children:[function() {
      var $G__308780$$ = function() {
        return {className:"relative inline-block\n                           z-30\n                           w-fit\n                           -mb-6", onMouseEnter:function() {
          return $flash_images_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $flash_images_handler$$.$cljs$core$IFn$_invoke$arity$1$($images$jscomp$3$$) : $flash_images_handler$$.call(null, $images$jscomp$3$$);
        }, children:[function() {
          var $G__308785$$ = {className:"absolute inset-y-1 inset-x-0\n                                  translate-x-2 translate-y-2\n                                  warm-yellow\n                                  pointer-events-none"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308785$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308785$$);
        }(), function() {
          var $G__308789$$ = {className:"relative z-10\n                                text-3xl whitespace-nowrap lg:text-2xl font-bold lowercase\n                                pointer-events-none", children:$name$jscomp$199$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308789$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308789$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308780$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308780$$);
    }(), function() {
      var $G__308793$$ = {className:"text-6xl lg:text-8xl font-bold lowercase\n                         z-20\n                         mb-4", children:$role$jscomp$1$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308793$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308793$$);
    }(), function() {
      var $G__308802$$ = {className:"text-md text-gray-600", children:$copy$jscomp$3$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308802$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308802$$);
    }(), function() {
      var $G__308808$$ = {className:"my-4\n                          border-gray-900"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("hr", $G__308808$$) : $APP.$helix$core$jsx$$.call(null, "hr", $G__308808$$);
    }(), function() {
      var $G__308812$$ = {className:"text-md text-red-600", children:$social$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308812$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308812$$);
    }(), function() {
      var $G__308820$$ = {className:"text-md text-red-600", children:$email$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308820$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308820$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308776_map__308773_map__308773__$1_map__308774__$1_props__41632__auto__$jscomp$35_vec__308770$$);
};
$amp$components$sections$team_section$team_members$$ = function($G__308855_map__308852_map__308852__$1_props__41632__auto__$jscomp$36_vec__308849$$, $maybe_ref__41633__auto__$jscomp$36$$) {
  $G__308855_map__308852_map__308852__$1_props__41632__auto__$jscomp$36_vec__308849$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__308855_map__308852_map__308852__$1_props__41632__auto__$jscomp$36_vec__308849$$), $maybe_ref__41633__auto__$jscomp$36$$], null);
  $G__308855_map__308852_map__308852__$1_props__41632__auto__$jscomp$36_vec__308849$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308855_map__308852_map__308852__$1_props__41632__auto__$jscomp$36_vec__308849$$, 0, null);
  $G__308855_map__308852_map__308852__$1_props__41632__auto__$jscomp$36_vec__308849$$ = $APP.$cljs$core$__destructure_map$$($G__308855_map__308852_map__308852__$1_props__41632__auto__$jscomp$36_vec__308849$$);
  var $flash_images_handler$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308855_map__308852_map__308852__$1_props__41632__auto__$jscomp$36_vec__308849$$, $cljs$cst$503$flash_images_handler$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__308855_map__308852_map__308852__$1_props__41632__auto__$jscomp$36_vec__308849$$ = function() {
    return {className:"w-full\n                  flex flex-col\n                  items-center justify-center\n                  \n                  ", children:function() {
      var $G__308859$$ = function() {
        return {className:"items-center justify-center\n                         w-full md:w-10/12\n                         lg:pl-32 px-8 py-16", children:[function() {
          var $G__308863$$ = {data:$amp$components$sections$team_section$tony_card_data$$, images:$amp$components$sections$team_section$tony_images$$, "flash-images-handler":$flash_images_handler$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_member_card$$, $G__308863$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_member_card$$, $G__308863$$);
        }(), function() {
          var $G__308868$$ = {data:$amp$components$sections$team_section$tina_card_data$$, images:$amp$components$sections$team_section$tina_images$$, "flash-images-handler":$flash_images_handler$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_member_card$$, $G__308868$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_member_card$$, $G__308868$$);
        }(), function() {
          var $G__308872$$ = {data:$amp$components$sections$team_section$zadik_card_data$$, images:$amp$components$sections$team_section$zadik_images$$, "flash-images-handler":$flash_images_handler$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_member_card$$, $G__308872$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_member_card$$, $G__308872$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308859$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308859$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308855_map__308852_map__308852__$1_props__41632__auto__$jscomp$36_vec__308849$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308855_map__308852_map__308852__$1_props__41632__auto__$jscomp$36_vec__308849$$);
};
$amp$components$sections$team_section$team_section$$ = function($G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$, $maybe_ref__41633__auto__$jscomp$37$$) {
  $G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$), $maybe_ref__41633__auto__$jscomp$37$$], null);
  $G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$, 0, null);
  $G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$ = $APP.$cljs$core$__destructure_map$$($G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$, $cljs$cst$494$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$, $cljs$cst$491$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$, $cljs$cst$495$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$6$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$6$$);
  var $visited_QMARK_$jscomp$7$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$, 1, null);
  $G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$team_section$zadik_images$$);
  var $images$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$, 0, null), $set_images$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$, 1, null), $is_desktop_QMARK_$jscomp$4$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$(), $image_gallery_container_ref$jscomp$3$$ = 
  $APP.$helix$hooks$use_ref$$("image-gallery-container-ref");
  $G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$ = function() {
    return {ref:$outer_ctx$jscomp$6$$, className:"relative\n                        h-full w-full\n                        flex items-end justify-center\n                        pink-grad blue-light-grad", children:function() {
      var $G__308938$$ = function() {
        return {className:"relative\n                               flex\n                               overflow-hidden", children:[function() {
          var $G__308946_G__308952$jscomp$inline_3907$$ = {className:"overflow-hidden", style:{writingMode:$APP.$helix$impl$props$__GT_js$$("vertical-rl")}, children:"team.թիմ.équipe.equipo.squadra.team.թիմ.équipe.equipo.squadra.team"};
          $G__308946_G__308952$jscomp$inline_3907$$ = {className:"absolute left-0 top-0\n                                      font-display font-bold text-8xl\n                                      light-blue-font-color\n                                      opacity-30", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308946_G__308952$jscomp$inline_3907$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308946_G__308952$jscomp$inline_3907$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308946_G__308952$jscomp$inline_3907$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308946_G__308952$jscomp$inline_3907$$);
        }(), function() {
          var $G__308968$$ = {"flash-images-handler":$set_images$jscomp$2$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_members$$, $G__308968$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_members$$, $G__308968$$);
        }(), $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$4$$) ? $visited_QMARK_$jscomp$7$$ : $is_desktop_QMARK_$jscomp$4$$) ? function() {
          var $G__308980_G__308988$jscomp$inline_4010_G__308996$jscomp$inline_4011_JSCompiler_inline_result$jscomp$inline_4009$$ = {images:$images$jscomp$4$$, "image-gallery-container-ref":$image_gallery_container_ref$jscomp$3$$};
          $G__308980_G__308988$jscomp$inline_4010_G__308996$jscomp$inline_4011_JSCompiler_inline_result$jscomp$inline_4009$$ = {className:"absolute h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $G__308980_G__308988$jscomp$inline_4010_G__308996$jscomp$inline_4011_JSCompiler_inline_result$jscomp$inline_4009$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, 
          $G__308980_G__308988$jscomp$inline_4010_G__308996$jscomp$inline_4011_JSCompiler_inline_result$jscomp$inline_4009$$)};
          $G__308980_G__308988$jscomp$inline_4010_G__308996$jscomp$inline_4011_JSCompiler_inline_result$jscomp$inline_4009$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308980_G__308988$jscomp$inline_4010_G__308996$jscomp$inline_4011_JSCompiler_inline_result$jscomp$inline_4009$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308980_G__308988$jscomp$inline_4010_G__308996$jscomp$inline_4011_JSCompiler_inline_result$jscomp$inline_4009$$);
          $G__308980_G__308988$jscomp$inline_4010_G__308996$jscomp$inline_4011_JSCompiler_inline_result$jscomp$inline_4009$$ = {ref:$image_gallery_container_ref$jscomp$3$$, className:"relative\n                                        w-8/12\n                                        ml-8\n                                        overflow-hidden", children:$G__308980_G__308988$jscomp$inline_4010_G__308996$jscomp$inline_4011_JSCompiler_inline_result$jscomp$inline_4009$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308980_G__308988$jscomp$inline_4010_G__308996$jscomp$inline_4011_JSCompiler_inline_result$jscomp$inline_4009$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308980_G__308988$jscomp$inline_4010_G__308996$jscomp$inline_4011_JSCompiler_inline_result$jscomp$inline_4009$$);
        }() : null]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308938$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308938$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__308930_map__308900_map__308900__$1_props__41632__auto__$jscomp$37_vec__308897_vec__308915_vec__308918$$);
};
$amp$components$sections$video_section$video_section$$ = function($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$12_vec__149655_vec__149660$$, $G__149671$jscomp$inline_4014_G__149675$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4013_maybe_ref__41676__auto__$jscomp$12_playback_id$$) {
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$12_vec__149655_vec__149660$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$12_vec__149655_vec__149660$$), $G__149671$jscomp$inline_4014_G__149675$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4013_maybe_ref__41676__auto__$jscomp$12_playback_id$$], 
  null);
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$12_vec__149655_vec__149660$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$12_vec__149655_vec__149660$$, 0, null);
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$12_vec__149655_vec__149660$$ = $APP.$cljs$core$__destructure_map$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$12_vec__149655_vec__149660$$);
  $G__149671$jscomp$inline_4014_G__149675$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4013_maybe_ref__41676__auto__$jscomp$12_playback_id$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$12_vec__149655_vec__149660$$, $APP.$cljs$cst$504$playback_id$$);
  var $allow_audio_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$12_vec__149655_vec__149660$$, $APP.$cljs$cst$505$allow_audio_QMARK_$$, !0);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$12_vec__149655_vec__149660$$ = $APP.$amp$providers$main_provider$use_main_state$$();
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$12_vec__149655_vec__149660$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$12_vec__149655_vec__149660$$, 1, null);
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$12_vec__149655_vec__149660$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  var $is_active_QMARK_$jscomp$11_vec__149663$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$12_vec__149655_vec__149660$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$382$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$11_vec__149663$$, 0, null);
  $is_active_QMARK_$jscomp$11_vec__149663$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$11_vec__149663$$, 1, null);
  $G__149671$jscomp$inline_4014_G__149675$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4013_maybe_ref__41676__auto__$jscomp$12_playback_id$$ = {"playback-id":$G__149671$jscomp$inline_4014_G__149675$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4013_maybe_ref__41676__auto__$jscomp$12_playback_id$$, "allow-audio?":$allow_audio_QMARK_$$, "should-play?":$is_active_QMARK_$jscomp$11_vec__149663$$};
  $G__149671$jscomp$inline_4014_G__149675$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4013_maybe_ref__41676__auto__$jscomp$12_playback_id$$ = {className:"h-full\n                           w-full\n                           flex\n                           relative \n                           flex items-center justify-items-center justify-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$video_section$lazy_video_background$$, 
  $G__149671$jscomp$inline_4014_G__149675$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4013_maybe_ref__41676__auto__$jscomp$12_playback_id$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$video_section$lazy_video_background$$, $G__149671$jscomp$inline_4014_G__149675$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4013_maybe_ref__41676__auto__$jscomp$12_playback_id$$)};
  $G__149671$jscomp$inline_4014_G__149675$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4013_maybe_ref__41676__auto__$jscomp$12_playback_id$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149671$jscomp$inline_4014_G__149675$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4013_maybe_ref__41676__auto__$jscomp$12_playback_id$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149671$jscomp$inline_4014_G__149675$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4013_maybe_ref__41676__auto__$jscomp$12_playback_id$$);
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$12_vec__149655_vec__149660$$ = {id:"video", ref:$G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$12_vec__149655_vec__149660$$, className:"absolute\n                    h-full\n                    w-full\n                    overflow-hidden", children:$G__149671$jscomp$inline_4014_G__149675$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4013_maybe_ref__41676__auto__$jscomp$12_playback_id$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$12_vec__149655_vec__149660$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$12_vec__149655_vec__149660$$);
};
$amp$components$sections$quote_section$quote_section$$ = function($G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$13_vec__284246$$, $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$13_vec__284250_vec__284253$$) {
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$13_vec__284246$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$13_vec__284246$$), $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$13_vec__284250_vec__284253$$], 
  null);
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$13_vec__284246$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$13_vec__284246$$, 0, null);
  var $map__284249__$1_to$jscomp$10$$ = $APP.$cljs$core$__destructure_map$$($G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$13_vec__284246$$), $gradient_class$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $cljs$cst$494$gradient_class$$), $quote$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $cljs$cst$506$quote$$), $header$jscomp$5$$ = 
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $APP.$cljs$cst$325$header$$);
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$13_vec__284246$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $cljs$cst$491$is_visible_QMARK_$$);
  var $children$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $APP.$cljs$cst$92$children$$);
  $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$13_vec__284250_vec__284253$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $cljs$cst$507$from$$);
  $map__284249__$1_to$jscomp$10$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $cljs$cst$508$to$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $from_transition$$ = $APP.$cljs$core$truth_$$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$13_vec__284250_vec__284253$$) ? $APP.$cljs$core$clj__GT_js$$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$13_vec__284250_vec__284253$$) : {opacity:0, duration:0.5, ease:"expo.inOut", stagger:0.1}, $to_transition$$ = $APP.$cljs$core$truth_$$($map__284249__$1_to$jscomp$10$$) ? $APP.$cljs$core$clj__GT_js$$($map__284249__$1_to$jscomp$10$$) : 
  {opacity:1, duration:0.15, ease:"expo.inOut", stagger:0.025}, $outer_ctx$jscomp$8$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $text_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("text-ref");
  $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$13_vec__284250_vec__284253$$ = $APP.$helix$hooks$use_state$$(new $APP.$module$node_modules$gsap$dist$gsap$$.gsap.timeline({paused:!0}));
  var $tl$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$13_vec__284250_vec__284253$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$13_vec__284250_vec__284253$$, 1, null);
  $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$13_vec__284250_vec__284253$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$8$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$13_vec__284250_vec__284253$$, 0, null);
  var $is_active_QMARK_$jscomp$12$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$13_vec__284250_vec__284253$$, 1, null);
  $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$13_vec__284250_vec__284253$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $splitter$jscomp$1$$ = $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($text_ref$jscomp$1$$)) ? new $APP.$module$node_modules$gsap$SplitText$$.SplitText($APP.$cljs$core$_deref$$($text_ref$jscomp$1$$), {type:"words,chars", charsClass:"playable-type-char"}) : null, $chars$jscomp$3$$ = $APP.$cljs$core$truth_$$($splitter$jscomp$1$$) ? $splitter$jscomp$1$$.chars : null, $ctx$jscomp$1$$ = $APP.$module$node_modules$gsap$dist$gsap$$.gsap.context(function() {
      return $tl$jscomp$2$$.from($chars$jscomp$3$$, $from_transition$$).to($chars$jscomp$3$$, $to_transition$$).timeScale(4);
    }, $outer_ctx$jscomp$8$$);
    return function() {
      return $ctx$jscomp$1$$.revert();
    };
  });
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$13_vec__284246$$ = [$quote$jscomp$1$$, $text_ref$jscomp$1$$, $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$13_vec__284246$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$13_vec__284250_vec__284253$$, $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$13_vec__284246$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$13_vec__284250_vec__284253$$, 
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$13_vec__284246$$);
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$13_vec__284246$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($is_active_QMARK_$jscomp$12$$) ? $tl$jscomp$2$$.play() : null;
  });
  $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$13_vec__284250_vec__284253$$ = [$is_active_QMARK_$jscomp$12$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$13_vec__284246$$, $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$13_vec__284250_vec__284253$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$13_vec__284246$$, 
  $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$13_vec__284250_vec__284253$$);
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$13_vec__284246$$ = function() {
    return {ref:$outer_ctx$jscomp$8$$, className:$APP.$helix$impl$props$normalize_class$$("h-full w-full " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($gradient_class$jscomp$3$$) ? $gradient_class$jscomp$3$$ : null)), children:function() {
      var $G__284265$$ = function() {
        return {ref:$text_ref$jscomp$1$$, className:"w-full h-full items-center justify-center flex", children:$APP.$cljs$core$truth_$$($children$jscomp$18$$) ? $children$jscomp$18$$ : function() {
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
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$13_vec__284246$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$13_vec__284246$$);
};
$amp$components$sections$work_overview$work_overview$$ = function($G__284296_props__41675__auto__$jscomp$14$$) {
  $APP.$helix$core$extract_cljs_props$$($G__284296_props__41675__auto__$jscomp$14$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__284296_props__41675__auto__$jscomp$14$$ = function() {
    return {"section-id":"about-work", children:function() {
      var $G__284301$$ = function() {
        return {className:"flex\n               grey-grad\n                  justify-center\n                  items-center\n                  flex-col\n                  w-full", children:function() {
          var $G__284305$$ = function() {
            return {className:"text-slate-300\n                   font-light\n                   flex\n                   justify-center\n                   flex-col\n                   h-full\n                   py-8\n                   md:w-3/4 w-full\n                   p-8\n                   text-lg\n                   lg:text-2xl", children:[function() {
              var $G__284309$$ = {className:"mt-12\n                        mb-16\n                        font-bold\n                        font-display\n                        text-5xl", children:"THE STUDIO"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__284309$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__284309$$);
            }(), function() {
              var $G__284313_G__284317$jscomp$inline_3603$$ = {className:"font-medium text-pink-600", children:":working-studio "};
              $G__284313_G__284317$jscomp$inline_3603$$ = {className:"mb-8", children:["For the full duration of the Biennale, the Armenia Pavilion becomes a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__284313_G__284317$jscomp$inline_3603$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__284313_G__284317$jscomp$inline_3603$$), "— Zadik Zadikian’s living laboratory, a site where form is made, unmade, and made again."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__284313_G__284317$jscomp$inline_3603$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__284313_G__284317$jscomp$inline_3603$$);
            }(), function() {
              var $G__284321_G__284325$jscomp$inline_3606$$ = {className:"font-medium text-pink-600", children:":7–10 people"};
              $G__284321_G__284325$jscomp$inline_3606$$ = {className:"mb-8", children:["Each day, ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__284321_G__284325$jscomp$inline_3606$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__284321_G__284325$jscomp$inline_3606$$), " move through the space — assistants, fabricators, editors, camera crew — all part of a continuous organism of creation."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__284321_G__284325$jscomp$inline_3606$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__284321_G__284325$jscomp$inline_3606$$);
            }(), function() {
              var $G__284329_G__284333$jscomp$inline_3609$$ = {className:"font-medium text-pink-600", children:":architecture-of-change"};
              $G__284329_G__284333$jscomp$inline_3609$$ = {className:"mb-8", children:["They produce thousands of modular units: lightweight foam forms hand-coated in thin plaster, each one a small gesture in a much larger ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__284329_G__284333$jscomp$inline_3609$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__284329_G__284333$jscomp$inline_3609$$), "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__284329_G__284333$jscomp$inline_3609$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__284329_G__284333$jscomp$inline_3609$$);
            }(), function() {
              var $G__284337_G__284341$jscomp$inline_3612$$ = {className:"font-medium text-pink-600", children:"breath"};
              $G__284337_G__284341$jscomp$inline_3612$$ = {className:"mb-8", children:["These units are stacked into structures — walls, pyramids, horizons, interior architectures — shifting daily as fragile formations rise and dissolve like ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__284337_G__284341$jscomp$inline_3612$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__284337_G__284341$jscomp$inline_3612$$), "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__284337_G__284341$jscomp$inline_3612$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__284337_G__284341$jscomp$inline_3612$$);
            }(), function() {
              var $G__284345_G__284349$jscomp$inline_3615$$ = {className:"font-medium text-pink-600", children:":The-artwork"};
              $G__284345_G__284349$jscomp$inline_3615$$ = {className:"mb-12 italic", children:["Nothing is static. Nothing is final. ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__284345_G__284349$jscomp$inline_3615$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__284345_G__284349$jscomp$inline_3615$$), " is the cycle itself — the rhythm of making, unmaking, and returning again to zero."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__284345_G__284349$jscomp$inline_3615$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__284345_G__284349$jscomp$inline_3615$$);
            }(), function() {
              var $G__284353$$ = {className:"mb-8 italic", children:"In Minor Keys — The Philosophy of the Work"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__284353$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__284353$$);
            }(), function() {
              var $G__284357_G__284361$jscomp$inline_3618$$ = {className:"font-medium text-pink-600", children:":Structure"};
              $G__284357_G__284361$jscomp$inline_3618$$ = {className:"mb-8", children:["Here, repetition becomes a meditation. Labor becomes devotion. ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__284357_G__284361$jscomp$inline_3618$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__284357_G__284361$jscomp$inline_3618$$), " is only a temporary embodiment of an ongoing frequency."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__284357_G__284361$jscomp$inline_3618$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__284357_G__284361$jscomp$inline_3618$$);
            }(), function() {
              var $G__284365_G__284369$jscomp$inline_3621$$ = {className:"font-medium text-pink-600", children:":organism"};
              $G__284365_G__284369$jscomp$inline_3621$$ = {className:"mb-8", children:["The studio behaves like an ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__284365_G__284369$jscomp$inline_3621$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__284365_G__284369$jscomp$inline_3621$$), " — sensitive, cyclical, and always in motion, responding to the theme of “In Minor Keys” through gestures rather than declarations."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__284365_G__284369$jscomp$inline_3621$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__284365_G__284369$jscomp$inline_3621$$);
            }(), function() {
              var $G__284373_G__284377$jscomp$inline_3624$$ = {className:"font-medium text-pink-600", children:":quiet-resilience"};
              $G__284373_G__284377$jscomp$inline_3624$$ = {className:"mb-8", children:["The material language is intentionally light: foam, plaster, dust. Fragile materials meet fragile cycles — a nod to Armenian histories of endurance, where the act of repeating becomes a form of survival, a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__284373_G__284377$jscomp$inline_3624$$) : $APP.$helix$core$jsx$$.call(null, "span", 
              $G__284373_G__284377$jscomp$inline_3624$$), "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__284373_G__284377$jscomp$inline_3624$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__284373_G__284377$jscomp$inline_3624$$);
            }(), function() {
              var $G__284381$$ = {className:"mb-8", children:"Nothing here reaches for spectacle. The work moves in frequencies, not fireworks. What matters is the pulse — the rhythm of stacking, filming, dismantling, and returning again to the beginning."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__284381$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__284381$$);
            }(), function() {
              var $G__284385_G__284389$jscomp$inline_3627$$ = {className:"font-medium text-pink-600", children:":score"};
              $G__284385_G__284389$jscomp$inline_3627$$ = {className:"mb-8", children:["This cycle functions like a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__284385_G__284389$jscomp$inline_3627$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__284385_G__284389$jscomp$inline_3627$$), ": a choreography of hands, blocks, dust, light. Each day, the studio composes itself anew, only to erase itself by night."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__284385_G__284389$jscomp$inline_3627$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__284385_G__284389$jscomp$inline_3627$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__284305$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__284305$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__284301$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__284301$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__284296_props__41675__auto__$jscomp$14$$, "about-work") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__284296_props__41675__auto__$jscomp$14$$, "about-work");
};
$APP.$amp$views$landing_view$landing_view$$ = function($G__309178_props__41632__auto__$jscomp$38$$) {
  $APP.$helix$core$extract_cljs_props$$($G__309178_props__41632__auto__$jscomp$38$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $container_ref$$ = $APP.$helix$hooks$use_ref$$("container-ref"), $is_desktop_QMARK_$jscomp$5$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__309178_props__41632__auto__$jscomp$38$$ = function() {
    return {ref:$container_ref$$, className:$APP.$helix$impl$props$normalize_class$$("overflow-x-hidden grey-grad " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-900  dark:text-slate-100")), children:[function() {
      var $G__309183_G__309188$jscomp$inline_3205$$ = {};
      $G__309183_G__309188$jscomp$inline_3205$$ = {className:"fixed top-8 right-8 z-50", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$theme_toggle$theme_toggle$$, $G__309183_G__309188$jscomp$inline_3205$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$theme_toggle$theme_toggle$$, $G__309183_G__309188$jscomp$inline_3205$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__309183_G__309188$jscomp$inline_3205$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__309183_G__309188$jscomp$inline_3205$$);
    }(), $APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$5$$) ? function() {
      var $G__309198$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$navs$logo_nav$logo_nav$$, $G__309198$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$navs$logo_nav$logo_nav$$, $G__309198$$);
    }() : null, function() {
      var $G__309200_G__309209$jscomp$inline_3208$$ = {};
      $G__309200_G__309209$jscomp$inline_3208$$ = {"section-id":"hero", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, $G__309200_G__309209$jscomp$inline_3208$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, $G__309200_G__309209$jscomp$inline_3208$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__309200_G__309209$jscomp$inline_3208$$, "hero") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__309200_G__309209$jscomp$inline_3208$$, "hero");
    }(), function() {
      var $G__309219_G__309230$jscomp$inline_3211$$ = {};
      $G__309219_G__309230$jscomp$inline_3211$$ = {"section-id":"teaser", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$teaser_section$teaser_section$$, $G__309219_G__309230$jscomp$inline_3211$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$teaser_section$teaser_section$$, $G__309219_G__309230$jscomp$inline_3211$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__309219_G__309230$jscomp$inline_3211$$, "teaser") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__309219_G__309230$jscomp$inline_3211$$, "teaser");
    }(), function() {
      var $G__309235$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$("w-full max-w-full overflow-x-hidden flex justify-center"), children:function() {
          var $G__309243$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("flex flex-col " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("w-full lg:w-8/12 min-w-0")), children:[function() {
              var $G__309253$$ = {id:"press-release", title:"Press Release"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$sections$press_release$press_release$$, $G__309253$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$sections$press_release$press_release$$, $G__309253$$);
            }(), function() {
              var $G__309261$$ = {id:"about-studio", title:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$sections$about_studio$about_studio$$, $G__309261$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$sections$about_studio$about_studio$$, $G__309261$$);
            }(), function() {
              var $G__309272$$ = {id:"in-minor-keys", title:"In Minor Keys"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$in_minor_keys$$, $G__309272$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$in_minor_keys$$, $G__309272$$);
            }(), function() {
              var $G__309315$$ = {id:"artist", title:"The Artist"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$artist_section$artist_section$$, $G__309315$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$artist_section$artist_section$$, $G__309315$$);
            }(), function() {
              var $G__309341$$ = {id:"curators", title:"Curators"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$curators_section$curators_section$$, $G__309341$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$curators_section$curators_section$$, $G__309341$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__309243$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__309243$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__309235$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__309235$$);
    }(), function() {
      var $G__309355$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$site_footer$site_footer$$, $G__309355$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$site_footer$site_footer$$, $G__309355$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__309178_props__41632__auto__$jscomp$38$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__309178_props__41632__auto__$jscomp$38$$);
};
$cljs$cst$490$images$$ = new $APP.$cljs$core$Keyword$$(null, "images", "images", 1757475080);
$cljs$cst$499$visible_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "visible?", "visible?", 2129863715);
$cljs$cst$507$from$$ = new $APP.$cljs$core$Keyword$$(null, "from", "from", 1815293044);
$cljs$cst$491$is_visible_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "is-visible?", "is-visible?", 1902717363);
$cljs$cst$483$on_click_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-click-handler", "on-click-handler", 746440723);
$cljs$cst$495$force_on_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "force-on?", "force-on?", -971910051);
$cljs$cst$492$image_gallery_container_ref$$ = new $APP.$cljs$core$Keyword$$(null, "image-gallery-container-ref", "image-gallery-container-ref", 984527810);
$cljs$cst$494$gradient_class$$ = new $APP.$cljs$core$Keyword$$(null, "gradient-class", "gradient-class", 37945374);
$cljs$cst$488$target_ref$$ = new $APP.$cljs$core$Keyword$$(null, "target-ref", "target-ref", -164384803);
$cljs$cst$497$img$$ = new $APP.$cljs$core$Keyword$$(null, "img", "img", 1442687358);
$cljs$cst$476$boxDecorationBreak$$ = new $APP.$cljs$core$Keyword$$(null, "boxDecorationBreak", "boxDecorationBreak", 826536500);
$cljs$cst$486$writing$$ = new $APP.$cljs$core$Keyword$$(null, "writing", "writing", -1486865108);
$cljs$cst$503$flash_images_handler$$ = new $APP.$cljs$core$Keyword$$(null, "flash-images-handler", "flash-images-handler", -431066401);
$cljs$cst$489$other$$ = new $APP.$cljs$core$Keyword$$(null, "other", "other", 995793544);
$cljs$cst$485$on_mouse_out_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-mouse-out-handler", "on-mouse-out-handler", -2132576332);
$cljs$cst$477$WebkitBoxDecorationBreak$$ = new $APP.$cljs$core$Keyword$$(null, "WebkitBoxDecorationBreak", "WebkitBoxDecorationBreak", 1903427859);
$cljs$cst$484$on_mouse_over_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-mouse-over-handler", "on-mouse-over-handler", -1708524524);
$cljs$cst$500$attribution$$ = new $APP.$cljs$core$Keyword$$(null, "attribution", "attribution", 1937239286);
$cljs$cst$487$click$$ = new $APP.$cljs$core$Keyword$$(null, "click", "click", 1912301393);
$cljs$cst$501$social$$ = new $APP.$cljs$core$Keyword$$(null, "social", "social", -1560314971);
$cljs$cst$506$quote$$ = new $APP.$cljs$core$Keyword$$(null, "quote", "quote", -262615245);
$cljs$cst$480$hover_title_ref$$ = new $APP.$cljs$core$Keyword$$(null, "hover-title-ref", "hover-title-ref", -819024146);
$cljs$cst$498$bio$$ = new $APP.$cljs$core$Keyword$$(null, "bio", "bio", -331851886);
$cljs$cst$479$sm$$ = new $APP.$cljs$core$Keyword$$(null, "sm", "sm", -1402575065);
$cljs$cst$502$email$$ = new $APP.$cljs$core$Keyword$$(null, "email", "email", 1415816706);
$cljs$cst$508$to$$ = new $APP.$cljs$core$Keyword$$(null, "to", "to", 192099007);
$cljs$cst$482$is_playing_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "is-playing?", "is-playing?", -274112098);
$cljs$cst$493$copy$$ = new $APP.$cljs$core$Keyword$$(null, "copy", "copy", -1077617309);
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
var $amp$components$sections$about_biennale$images$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/biennale/metalocus_venice-biennale-corderie-arsenale-photo-giulio-squillacciotti_01.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/biennale/arsenale-venezia.jpg", 
$APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/biennale/6431873131_844b5c6d48_b-112659047.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/biennale/Edificio-E-delle-Sale-dArmi-sud-Arsenale-di-Venezia_01-406863818.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/biennale/GettyImages-1396739612-2882003488.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/biennale/arsenale-venezia-cosa-vedere-come-visitare-408454160.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/biennale/Pavilions-tours-plan.png", 
$APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/biennale/Pavilions-tours-plan.png", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/biennale/IMG_1754-scaled-1386547518.jpg", $APP.$cljs$cst$430$caption$$, null], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$about_biennale$title$$, "", null, null) : (void 0).call(null, $amp$components$sections$about_biennale$title$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$about_biennale$title$$, "amp.components.sections.about-biennale/title"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$about_biennale$copy_block$$, "", null, null) : (void 0).call(null, $amp$components$sections$about_biennale$copy_block$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$about_biennale$copy_block$$, "amp.components.sections.about-biennale/copy-block"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$about_biennale$about_biennale_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', 
null, null) : (void 0).call(null, $amp$components$sections$about_biennale$about_biennale_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$about_biennale$about_biennale_section$$, "amp.components.sections.about-biennale/about-biennale-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$contact_section$contact_section$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $amp$components$sections$contact_section$contact_section$$, 
"(use-scroll-to-id)", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$contact_section$contact_section$$, "amp.components.sections.contact-section/contact-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$artist_section$artist_section$$, '(hooks/use-ref "artist-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : 
(void 0).call(null, $amp$components$sections$artist_section$artist_section$$, '(hooks/use-ref "artist-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$artist_section$artist_section$$, "amp.components.sections.artist-section/artist-section"));
var $amp$components$sections$curators_section$curators$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$182$name$$, "Tony Shafrazi", $APP.$cljs$cst$496$role$$, "Curator", $cljs$cst$497$img$$, "https://atd-722658831.imgix.net/committee/tony.png", $cljs$cst$498$bio$$, "Tony Shafrazi (b. 1943, Abadan, Iran) is a renowned art dealer, gallerist, and curator. Trained at the Royal College of Art in London, he moved to New York in 1969 and opened the Tony Shafrazi Gallery in 1979, championing Jean-Michel Basquiat, Keith Haring, and Kenny Scharf alongside Picasso, Francis Bacon, and Warhol. He first met Zadik Zadikian while the artist was working with Richard Serra, and has supported his work for decades."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$182$name$$, "Tina Chakarian", $APP.$cljs$cst$496$role$$, "Curator", $cljs$cst$497$img$$, "https://atd-722658831.imgix.net/committee/tina.png", $cljs$cst$498$bio$$, "Tina Chakarian is a curator based in Boston and Yerevan. Born in Beirut, she studied Visual Arts at UCLA and Tufts University. Since 2015, she has served as Commissioner and Development Director of the Armenian Pavilion at La Biennale di Venezia, playing a central role in shaping Armenia’s sustained presence on the global stage."], 
null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$curators_section$curator_card$$, "", null, null) : (void 0).call(null, $amp$components$sections$curators_section$curator_card$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$curators_section$curator_card$$, "amp.components.sections.curators-section/curator-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$curators_section$curators_section$$, '(hooks/use-ref "curators-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : 
(void 0).call(null, $amp$components$sections$curators_section$curators_section$$, '(hooks/use-ref "curators-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$curators_section$curators_section$$, "amp.components.sections.curators-section/curators-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$in_minor_keys$pull_quote$$, "", null, null) : (void 0).call(null, $amp$components$sections$in_minor_keys$pull_quote$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$in_minor_keys$pull_quote$$, "amp.components.sections.in-minor-keys/pull-quote"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$in_minor_keys$curator_card$$, "", null, null) : (void 0).call(null, $amp$components$sections$in_minor_keys$curator_card$$, "", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$in_minor_keys$curator_card$$, "amp.components.sections.in-minor-keys/curator-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$in_minor_keys$preview$$, '(hooks/use-ref "imk-preview-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$components$sections$in_minor_keys$preview$$, '(hooks/use-ref "imk-preview-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$in_minor_keys$preview$$, "amp.components.sections.in-minor-keys/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$in_minor_keys$details$$, '(hooks/use-ref "imk-details-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$components$sections$in_minor_keys$details$$, '(hooks/use-ref "imk-details-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$in_minor_keys$details$$, "amp.components.sections.in-minor-keys/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$in_minor_keys$in_minor_keys$$, "", null, null) : (void 0).call(null, $amp$components$sections$in_minor_keys$in_minor_keys$$, "", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$in_minor_keys$in_minor_keys$$, "amp.components.sections.in-minor-keys/in-minor-keys"));
var $amp$components$sections$mobile_hero_section$lazy_video_background$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$components$elements$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null) : 
(void 0).call(null, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, "amp.components.sections.mobile-hero-section/mobile-hero-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$site_footer$site_footer$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $amp$components$sections$site_footer$site_footer$$, 
"(use-scroll-to-id)", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$site_footer$site_footer$$, "amp.components.sections.site-footer/site-footer"));
var $amp$components$sections$non_profit$images$$ = new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/biennale/metalocus_venice-biennale-corderie-arsenale-photo-giulio-squillacciotti_01.jpg", $APP.$cljs$cst$430$caption$$, "Arsenale", $APP.$cljs$cst$431$credit$$, "Artnews"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$418$src$$, 
"https://atd-722658831.imgix.net/biennale/arsenale-venezia.jpg", $APP.$cljs$cst$430$caption$$, "Arsenale", $APP.$cljs$cst$431$credit$$, "Artnews"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/biennale/6431873131_844b5c6d48_b-112659047.jpg", $APP.$cljs$cst$430$caption$$, "Arsenale", $APP.$cljs$cst$431$credit$$, "Artnews"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$title$$, "", null, null) : (void 0).call(null, $amp$components$sections$non_profit$title$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$title$$, 
"amp.components.sections.non-profit/title"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$copy_block$$, "", null, null) : (void 0).call(null, $amp$components$sections$non_profit$copy_block$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$copy_block$$, "amp.components.sections.non-profit/copy-block"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$192$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$71$tag$$, $APP.$cljs$cst$193$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$non_profit_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', 
null, null) : (void 0).call(null, $amp$components$sections$non_profit$non_profit_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$non_profit_section$$, "amp.components.sections.non-profit/non-profit-section"));
var $amp$components$sections$team_section$zadik_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/zadik/shovel-nails.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/zadik/zz-portrait.tiff", $APP.$cljs$cst$430$caption$$, 
null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/zadik/single_stack_1970s.tif", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/zadik/golden_water_heater.tif", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-10.psd", 
$APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-76.psd", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/zadik/golden_kitchen.tif", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/2.webp", 
$APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/zadik/ps1_entrance_1.tif", 
$APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-18.psd", 
$APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/2.webp?fit\x3dcrop\x26w\x3d214\x26h\x3d172\x26dpr\x3d2\x26q\x3d50\x26auto\x3dformat%2Ccompress\x26cacheID\x3d1763536997", $APP.$cljs$cst$430$caption$$, null], null)], null), $amp$components$sections$team_section$tina_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 20, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/2.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$430$caption$$, null], null)], null), $amp$components$sections$team_section$tony_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 22, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", 
$APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, 
[$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, 
"https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$430$caption$$, 
null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$430$caption$$, null], null), 
new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, 
"https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", 
$APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, 
[$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$430$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$418$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", 
$APP.$cljs$cst$430$caption$$, null], null)], null), $amp$components$sections$team_section$tony_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$182$name$$, "Tony Shafrazi", $APP.$cljs$cst$496$role$$, "Curator", $cljs$cst$501$social$$, "@tonyshafrazi", $cljs$cst$502$email$$, "tony.shafrazi@armenianpavilion2026.org", $cljs$cst$493$copy$$, "Tony Shafrazi (b. 1943, Abadan, Iran) is a renowned art dealer, gallerist, and curator whose career has shaped the contemporary art world. Trained at the Royal College of Art in London, he moved to New York in 1969 and soon became closely associated with figures such as Andy Warhol, Roy Lichtenstein, and Leo Castelli. His early years were marked by bold artistic interventions, before establishing himself as one of the leading dealers of his generation.\n                      \n                      In 1979, he opened the Tony Shafrazi Gallery in New York, championing artists like Jean-Michel Basquiat, Keith Haring, and Kenny Scharf, alongside exhibitions of Picasso, Francis Bacon, Jasper Johns, Carl Andre, and Warhol. Internationally, he advised the Tehran Museum of Contemporary Art in assembling one of the most significant collections of Western modernism outside Europe and the United States.\n                      \n                      Shafrazi first met Zadik Zadikian while the artist was working with Richard Serra, later including him in his historic Tehran exhibition before the 1979 Revolution. Their collaboration forged a lasting connection, and Shafrazi has supported Zadikian’s work over the decades. For this project, he brings unrivaled experience, a global network, and a deep commitment to presenting Armenia on the world stage at the Venice Biennale."], 
null), $amp$components$sections$team_section$tina_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$182$name$$, "Tina Chakarian", $APP.$cljs$cst$496$role$$, "Curator", $cljs$cst$501$social$$, "@tinachakarian", $cljs$cst$502$email$$, "tina.chakarian@armenianpavilion2026.org", $cljs$cst$493$copy$$, "Tina Chakarian is a curator currently living in Boston and Yerevan. \n\nBorn and raised in Beirut, Lebanon, she studied Visual Arts at UCLA and Tufts University. \n\nShe was previously the Development Director at the Armenian Museum of America and an adjunct Professor at several Boston based universities.  Tina serves as a Principal and Creative Director at Chakarian Design Group, LLC, and, co-curates the Midway Artists Studios in Boston. \n\nAs a visual artist, Tina has exhibited a number of installations in the U.S., Lebanon and Armenia, including “Living Utopias” (Yerevan, 2018). \n\nShe has decades of experience in the field of philanthropy, where she combines her skills as an artist and fundraiser, to help support organizations and initiatives closest to her heart. \n"], 
null), $amp$components$sections$team_section$zadik_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$182$name$$, "Zadik Zadikian", $APP.$cljs$cst$496$role$$, "Artist", $cljs$cst$501$social$$, "@zadikzadikian", $cljs$cst$502$email$$, "zadik.zadikian@armenianpavilion2026.org", $cljs$cst$493$copy$$, "Born in 1948 in Yerevan, Soviet Armenia, Zadik Zadikian entered the Art Academy at fifteen and exhibited in Yerevan and Moscow before escaping the Soviet Union at nineteen by swimming across the Arax River in winter. In 1969 he arrived in San Francisco, apprenticing with sculptor Beniamino Bufano, and later moved to New York where he assisted Richard Serra on his first monumental oil-stick wall drawings—one of which was named after him. These encounters with scale, discipline, and radical form became the foundation of his artistic language.\n\nIn 1976, Zadikian gilded his entire 10,000-square-foot studio in industrial gold, an immersive act of transformation that anticipated his project 1000 Bricks Gilded in 24-Karat Gold Leaf (1978). Since then, gold has remained his central medium—at once alchemical and architectural, extravagant yet elemental. His brick-like forms distill structure into essence, revealing permanence through repetition and beauty within order.\n\nReflecting on exile, Zadikian writes: “When I escaped, I lost everything—my family, my country, my world. That void became my canvas. Gold is the witness. Beauty is found within structure. Repetition is the foundation of change.” Now based in Los Angeles, he has recently exhibited at the Brooklyn Museum and Tony Shafrazi’s Gallery Without Walls."], 
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