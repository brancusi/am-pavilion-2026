(function(){
'use strict';
var $cljs$core$rand_int$$, $amp$hooks$use_scroll_trigger$use_scroll_trigger$$, $amp$components$sections$teaser_section$teaser_section$$, $amp$hooks$use_window_resize$use_window_size$$, $amp$components$navs$donation_nav$donation_nav$$, $amp$components$navs$logo_nav$logo_nav$$, $amp$components$hover_title$hover_title$$, $amp$components$ui$playable_text$playable_text$$, $amp$components$nav_link$nav_link$$, $amp$components$playful_titles$hero_menu$$, $amp$components$playful_titles$playful_titles$$, $amp$components$elements$lazy_image_gallery$check_column_dimensions$$, 
$amp$components$elements$lazy_image_gallery$aspect_column$$, $amp$components$elements$lazy_image_gallery$find_closest_size$$, $amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$, $amp$components$elements$lazy_image_gallery$image_layer$$, $amp$components$elements$lazy_image_gallery$caption_layer$$, $amp$components$elements$lazy_image_gallery$image_card$$, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $amp$components$sections$about_biennale$title$$, $amp$components$sections$about_biennale$copy_block$$, 
$amp$components$sections$about_biennale$about_biennale_section$$, $amp$components$sections$contact_section$contact_section$$, $amp$components$sections$artist_section$artist_section$$, $amp$components$sections$curators_section$curator_card$$, $amp$components$sections$curators_section$curators_section$$, $amp$components$sections$in_minor_keys$pull_quote$$, $amp$components$sections$in_minor_keys$curator_card$$, $amp$components$sections$in_minor_keys$preview$$, $amp$components$sections$in_minor_keys$details$$, 
$amp$components$sections$in_minor_keys$in_minor_keys$$, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, $amp$components$sections$site_footer$site_footer$$, $amp$components$sections$non_profit$title$$, $amp$components$sections$non_profit$copy_block$$, $amp$components$sections$non_profit$non_profit_section$$, $amp$components$sections$team_section$team_member_card$$, $amp$components$sections$team_section$team_members$$, $amp$components$sections$team_section$team_section$$, $amp$components$sections$video_section$video_section$$, 
$amp$components$sections$quote_section$quote_section$$, $amp$components$sections$work_overview$work_overview$$, $cljs$cst$497$images$$, $cljs$cst$506$visible_QMARK_$$, $cljs$cst$514$from$$, $cljs$cst$498$is_visible_QMARK_$$, $cljs$cst$490$on_click_handler$$, $cljs$cst$502$force_on_QMARK_$$, $cljs$cst$499$image_gallery_container_ref$$, $cljs$cst$501$gradient_class$$, $cljs$cst$495$target_ref$$, $cljs$cst$504$img$$, $cljs$cst$483$boxDecorationBreak$$, $cljs$cst$493$writing$$, $cljs$cst$510$flash_images_handler$$, 
$cljs$cst$496$other$$, $cljs$cst$492$on_mouse_out_handler$$, $cljs$cst$484$WebkitBoxDecorationBreak$$, $cljs$cst$491$on_mouse_over_handler$$, $cljs$cst$507$attribution$$, $cljs$cst$494$click$$, $cljs$cst$508$social$$, $cljs$cst$513$quote$$, $cljs$cst$487$hover_title_ref$$, $cljs$cst$505$bio$$, $cljs$cst$486$sm$$, $cljs$cst$509$email$$, $cljs$cst$515$to$$, $cljs$cst$489$is_playing_QMARK_$$, $cljs$cst$500$copy$$;
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
$amp$components$sections$teaser_section$teaser_section$$ = function($G__306951_props__41632__auto__$jscomp$4_vec__306942$$) {
  $APP.$helix$core$extract_cljs_props$$($G__306951_props__41632__auto__$jscomp$4_vec__306942$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ref$$ = $APP.$helix$hooks$use_ref$$("outer-ref");
  $G__306951_props__41632__auto__$jscomp$4_vec__306942$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$390$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__306951_props__41632__auto__$jscomp$4_vec__306942$$, 0, null);
  var $is_active_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__306951_props__41632__auto__$jscomp$4_vec__306942$$, 1, null), $clone_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$483$boxDecorationBreak$$, "clone", $cljs$cst$484$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__306951_props__41632__auto__$jscomp$4_vec__306942$$ = function() {
    return {id:"teaser", ref:$outer_ref$$, className:"relative w-full min-h-screen overflow-hidden", children:[function() {
      var $G__306958_G__306963$jscomp$inline_3508$$ = {"allow-audio?":!1, "playback-id":"Izp5007Abkc00t4Ubns7pAiqq2zG7JIp01tvAoaVOny7O00", "should-play?":$is_active_QMARK_$jscomp$4$$};
      $G__306958_G__306963$jscomp$inline_3508$$ = {className:"absolute inset-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$teaser_section$lazy_video$$, $G__306958_G__306963$jscomp$inline_3508$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$teaser_section$lazy_video$$, $G__306958_G__306963$jscomp$inline_3508$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__306958_G__306963$jscomp$inline_3508$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__306958_G__306963$jscomp$inline_3508$$);
    }(), function() {
      var $G__306971$$ = function() {
        return {className:"relative z-10 flex flex-col justify-center\n               min-h-screen px-6 sm:px-12 lg:px-20\n               py-16 sm:py-24\n               max-w-4xl", children:[function() {
          var $G__306977_G__306981$jscomp$inline_3511$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/70 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"The Studio"};
          $G__306977_G__306981$jscomp$inline_3511$$ = {className:"font-display font-bold uppercase tracking-wider\n                leading-relaxed text-4xl sm:text-5xl lg:text-6xl text-white mb-6", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__306977_G__306981$jscomp$inline_3511$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__306977_G__306981$jscomp$inline_3511$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__306977_G__306981$jscomp$inline_3511$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__306977_G__306981$jscomp$inline_3511$$);
        }(), function() {
          var $G__306994_G__307002$jscomp$inline_3514$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/50 px-3 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"A living studio at the heart of the Venice Biennale"};
          $G__306994_G__307002$jscomp$inline_3514$$ = {className:"font-display text-sm sm:text-base uppercase tracking-[0.15em]\n                leading-loose text-white/90 mb-8 max-w-xl", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__306994_G__307002$jscomp$inline_3514$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__306994_G__307002$jscomp$inline_3514$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__306994_G__307002$jscomp$inline_3514$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__306994_G__307002$jscomp$inline_3514$$);
        }(), function() {
          var $G__307015_G__307023$jscomp$inline_3968_G__307028$jscomp$inline_3969$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"Over six months, sculptor Zadik Zadikian and his team will occupy the Arsenale Militare—casting, assembling, and building in real time. Nothing is fixed. Nothing is final. The work is the making itself."};
          $G__307015_G__307023$jscomp$inline_3968_G__307028$jscomp$inline_3969$$ = {className:"font-display text-xs sm:text-sm leading-relaxed text-white/80", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__307015_G__307023$jscomp$inline_3968_G__307028$jscomp$inline_3969$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307015_G__307023$jscomp$inline_3968_G__307028$jscomp$inline_3969$$)};
          $G__307015_G__307023$jscomp$inline_3968_G__307028$jscomp$inline_3969$$ = {className:"space-y-3 mb-10 max-w-lg", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307015_G__307023$jscomp$inline_3968_G__307028$jscomp$inline_3969$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307015_G__307023$jscomp$inline_3968_G__307028$jscomp$inline_3969$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307015_G__307023$jscomp$inline_3968_G__307028$jscomp$inline_3969$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307015_G__307023$jscomp$inline_3968_G__307028$jscomp$inline_3969$$);
        }(), function() {
          var $G__307040$$ = function() {
            return {className:"grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10", children:[function() {
              var $G__307049$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__307053$$ = {className:"font-display font-medium text-[10px] uppercase tracking-[0.2em] text-amber-300/70", children:"Opening"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307053$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307053$$);
                }(), function() {
                  var $G__307059_G__307065$jscomp$inline_3520$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"9 May – 22 November 2026"};
                  $G__307059_G__307065$jscomp$inline_3520$$ = {className:"font-display text-xs sm:text-sm text-white/90", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__307059_G__307065$jscomp$inline_3520$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307059_G__307065$jscomp$inline_3520$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307059_G__307065$jscomp$inline_3520$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307059_G__307065$jscomp$inline_3520$$);
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
                  var $G__307091_G__307100$jscomp$inline_3523$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"Arsenale Militare, Venice"};
                  $G__307091_G__307100$jscomp$inline_3523$$ = {href:"https://maps.app.goo.gl/QvYkqwN1Bv7L9VDn7", target:"_blank", rel:"noopener noreferrer", className:"font-display text-xs sm:text-sm text-white/90 hover:text-white\n                      underline underline-offset-4 decoration-white/30 hover:decoration-white/60\n                      transition-colors block whitespace-nowrap", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", 
                  $G__307091_G__307100$jscomp$inline_3523$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307091_G__307100$jscomp$inline_3523$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__307091_G__307100$jscomp$inline_3523$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__307091_G__307100$jscomp$inline_3523$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307078$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307078$$);
            }(), function() {
              var $G__307104$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__307111$$ = {className:"font-display font-medium text-[10px] uppercase tracking-[0.2em] text-amber-300/70", children:"Pavilion"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307111$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307111$$);
                }(), function() {
                  var $G__307122_G__307126$jscomp$inline_3526$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"Republic of Armenia"};
                  $G__307122_G__307126$jscomp$inline_3526$$ = {className:"font-display text-xs sm:text-sm text-white/90", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__307122_G__307126$jscomp$inline_3526$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307122_G__307126$jscomp$inline_3526$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307122_G__307126$jscomp$inline_3526$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307122_G__307126$jscomp$inline_3526$$);
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
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__306951_props__41632__auto__$jscomp$4_vec__306942$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__306951_props__41632__auto__$jscomp$4_vec__306942$$);
};
$amp$hooks$use_window_resize$use_window_size$$ = function() {
  var $G__44911_45053_vec__44900$$ = $APP.$helix$hooks$use_state$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$415$width$$, window.innerWidth, $APP.$cljs$cst$416$height$$, window.innerHeight], null)), $dimensions$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__44911_45053_vec__44900$$, 0, null), $set_dimensions_BANG_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__44911_45053_vec__44900$$, 1, null), $resize_handler$jscomp$1$$ = 
  function() {
    function $G__45028$$($var_args$jscomp$440$$) {
      var $G__45049__i__$jscomp$373$$ = null;
      if (arguments.length > 0) {
        $G__45049__i__$jscomp$373$$ = 0;
        for (var $G__45049__a$$ = Array(arguments.length - 0); $G__45049__i__$jscomp$373$$ < $G__45049__a$$.length;) {
          $G__45049__a$$[$G__45049__i__$jscomp$373$$] = arguments[$G__45049__i__$jscomp$373$$ + 0], ++$G__45049__i__$jscomp$373$$;
        }
        $G__45049__i__$jscomp$373$$ = new $APP.$cljs$core$IndexedSeq$$($G__45049__a$$, 0, null);
      }
      return $G__45028__delegate$$.call(this, $G__45049__i__$jscomp$373$$);
    }
    function $G__45028__delegate$$() {
      var $G__44910$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$415$width$$, window.innerWidth, $APP.$cljs$cst$416$height$$, window.innerHeight], null);
      return $set_dimensions_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_dimensions_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__44910$$) : $set_dimensions_BANG_$jscomp$1$$.call(null, $G__44910$$);
    }
    $G__45028$$.$cljs$lang$maxFixedArity$ = 0;
    $G__45028$$.$cljs$lang$applyTo$ = function($_$jscomp$374_arglist__45052$$) {
      $_$jscomp$374_arglist__45052$$ = $APP.$cljs$core$seq$$($_$jscomp$374_arglist__45052$$);
      return $G__45028__delegate$$($_$jscomp$374_arglist__45052$$);
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
  return $dimensions$jscomp$5$$;
};
$amp$components$navs$donation_nav$donation_nav$$ = function($G__45038_G__45075_is_desktop_QMARK_$jscomp$1_props__41634__auto__$jscomp$16$$) {
  $APP.$helix$core$extract_cljs_props$$($G__45038_G__45075_is_desktop_QMARK_$jscomp$1_props__41634__auto__$jscomp$16$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__45038_G__45075_is_desktop_QMARK_$jscomp$1_props__41634__auto__$jscomp$16$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  var $dimensions$jscomp$6$$ = $amp$hooks$use_window_resize$use_window_size$$(), $is_active_QMARK_$jscomp$5_vec__45025$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$364$start$$, function() {
    return window.innerHeight;
  }, $APP.$cljs$cst$390$end$$, "1000000px", $APP.$cljs$cst$392$markers_QMARK_$$, !1, $APP.$cljs$cst$393$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$5_vec__45025$$, 0, null);
  $is_active_QMARK_$jscomp$5_vec__45025$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$5_vec__45025$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$69$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$437$opacity$$, 1], null), $APP.$cljs$cst$396$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$437$opacity$$, 0.7], null)]));
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$394$target$$, $comp_ref$$, $APP.$cljs$cst$399$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$475$y$$, 0], null), $APP.$cljs$cst$401$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$475$y$$, -$APP.$cljs$cst$416$height$$.$cljs$core$IFn$_invoke$arity$1$($dimensions$jscomp$6$$)], null), $APP.$cljs$cst$397$is_on_QMARK_$$, 
  $is_active_QMARK_$jscomp$5_vec__45025$$], null));
  if ($APP.$cljs$core$truth_$$($G__45038_G__45075_is_desktop_QMARK_$jscomp$1_props__41634__auto__$jscomp$16$$)) {
    return $G__45038_G__45075_is_desktop_QMARK_$jscomp$1_props__41634__auto__$jscomp$16$$ = function() {
      return {ref:$comp_ref$$, className:"fixed\n                      opacity-90\n                      z-40\n                      text-xl\n                      mr-8\n                      mt-4\n                      top-0\n                      right-0", children:function() {
        var $G__45046$$ = function() {
          return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
            return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
          }};
        }();
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__45046$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__45046$$);
      }()};
    }(), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45038_G__45075_is_desktop_QMARK_$jscomp$1_props__41634__auto__$jscomp$16$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45038_G__45075_is_desktop_QMARK_$jscomp$1_props__41634__auto__$jscomp$16$$);
  }
  $G__45038_G__45075_is_desktop_QMARK_$jscomp$1_props__41634__auto__$jscomp$16$$ = function() {
    return {ref:$comp_ref$$, className:"fixed \n                          opacity-90\n                          z-40\n                          text-xl\n                      w-full\n                          ", children:function() {
      var $G__45079$$ = function() {
        return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
          return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__45079$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__45079$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45038_G__45075_is_desktop_QMARK_$jscomp$1_props__41634__auto__$jscomp$16$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45038_G__45075_is_desktop_QMARK_$jscomp$1_props__41634__auto__$jscomp$16$$);
};
$amp$components$navs$logo_nav$logo_nav$$ = function($G__44952_is_active_QMARK_$jscomp$6_props__41634__auto__$jscomp$17_vec__44930$$) {
  $APP.$helix$core$extract_cljs_props$$($G__44952_is_active_QMARK_$jscomp$6_props__41634__auto__$jscomp$17_vec__44930$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__44952_is_active_QMARK_$jscomp$6_props__41634__auto__$jscomp$17_vec__44930$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$364$start$$, function() {
    return window.innerHeight - window.innerHeight / 8;
  }, $APP.$cljs$cst$390$end$$, "1000000px", $APP.$cljs$cst$392$markers_QMARK_$$, !1, $APP.$cljs$cst$393$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__44952_is_active_QMARK_$jscomp$6_props__41634__auto__$jscomp$17_vec__44930$$, 0, null);
  $G__44952_is_active_QMARK_$jscomp$6_props__41634__auto__$jscomp$17_vec__44930$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__44952_is_active_QMARK_$jscomp$6_props__41634__auto__$jscomp$17_vec__44930$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$jscomp$1$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$69$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$437$opacity$$, 1], null), $APP.$cljs$cst$396$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$437$opacity$$, 0.7], null)]));
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$394$target$$, $comp_ref$jscomp$1$$, $APP.$cljs$cst$399$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$475$y$$, 0], null), $APP.$cljs$cst$401$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$475$y$$, -250], null), $APP.$cljs$cst$397$is_on_QMARK_$$, $G__44952_is_active_QMARK_$jscomp$6_props__41634__auto__$jscomp$17_vec__44930$$], 
  null));
  $G__44952_is_active_QMARK_$jscomp$6_props__41634__auto__$jscomp$17_vec__44930$$ = function() {
    return {ref:$comp_ref$jscomp$1$$, className:"fixed\n                    opacity-90\n                    z-30\n                    right-8\n                    top-20\n                    flex flex-col items-end gap-3", children:function() {
      var $G__44969$$ = function() {
        return {className:"w-28 lg:w-32", children:[function() {
          var $G__44979$$ = function() {
            return {className:"cursor-pointer", onClick:function() {
              return window.open("https://www.labiennale.org/en/art/2026", "_blank");
            }, children:function() {
              var $G__44983$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"invert dark:invert-0"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__44983$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__44983$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__44979$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__44979$$);
        }(), function() {
          var $G__44987$$ = function() {
            return {className:"mt-4", children:function() {
              var $G__44996$$ = function() {
                return {title:"Donate Now", "additional-classes":"w-full justify-center", size:$cljs$cst$486$sm$$, "bg-opacity":0.8, "on-click":function() {
                  return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                }};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__44996$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__44996$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__44987$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__44987$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__44969$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__44969$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__44952_is_active_QMARK_$jscomp$6_props__41634__auto__$jscomp$17_vec__44930$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__44952_is_active_QMARK_$jscomp$6_props__41634__auto__$jscomp$17_vec__44930$$);
};
$amp$components$hover_title$hover_title$$ = function($G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$1_vec__282044$$, $G__282073$jscomp$inline_3972_G__282081$jscomp$inline_3973_JSCompiler_inline_result$jscomp$inline_3971_maybe_ref__41676__auto__$jscomp$1_title$jscomp$18$$) {
  $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$1_vec__282044$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$1_vec__282044$$), $G__282073$jscomp$inline_3972_G__282081$jscomp$inline_3973_JSCompiler_inline_result$jscomp$inline_3971_maybe_ref__41676__auto__$jscomp$1_title$jscomp$18$$], null);
  $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$1_vec__282044$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$1_vec__282044$$, 0, null);
  $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$1_vec__282044$$ = $APP.$cljs$core$__destructure_map$$($G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$1_vec__282044$$);
  $G__282073$jscomp$inline_3972_G__282081$jscomp$inline_3973_JSCompiler_inline_result$jscomp$inline_3971_maybe_ref__41676__auto__$jscomp$1_title$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$1_vec__282044$$, $APP.$cljs$cst$381$title$$);
  $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$1_vec__282044$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$1_vec__282044$$, $cljs$cst$487$hover_title_ref$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__282073$jscomp$inline_3972_G__282081$jscomp$inline_3973_JSCompiler_inline_result$jscomp$inline_3971_maybe_ref__41676__auto__$jscomp$1_title$jscomp$18$$ = {className:"flash-text\n                                 font-mono\n                                 font-bold", textAnchor:"start", alignmentBaseline:"middle", y:"50%", x:"50%", children:$G__282073$jscomp$inline_3972_G__282081$jscomp$inline_3973_JSCompiler_inline_result$jscomp$inline_3971_maybe_ref__41676__auto__$jscomp$1_title$jscomp$18$$};
  $G__282073$jscomp$inline_3972_G__282081$jscomp$inline_3973_JSCompiler_inline_result$jscomp$inline_3971_maybe_ref__41676__auto__$jscomp$1_title$jscomp$18$$ = {className:"justify-self-start", height:"100%", width:"100%", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("text", $G__282073$jscomp$inline_3972_G__282081$jscomp$inline_3973_JSCompiler_inline_result$jscomp$inline_3971_maybe_ref__41676__auto__$jscomp$1_title$jscomp$18$$) : 
  $APP.$helix$core$jsx$$.call(null, "text", $G__282073$jscomp$inline_3972_G__282081$jscomp$inline_3973_JSCompiler_inline_result$jscomp$inline_3971_maybe_ref__41676__auto__$jscomp$1_title$jscomp$18$$)};
  $G__282073$jscomp$inline_3972_G__282081$jscomp$inline_3973_JSCompiler_inline_result$jscomp$inline_3971_maybe_ref__41676__auto__$jscomp$1_title$jscomp$18$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__282073$jscomp$inline_3972_G__282081$jscomp$inline_3973_JSCompiler_inline_result$jscomp$inline_3971_maybe_ref__41676__auto__$jscomp$1_title$jscomp$18$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__282073$jscomp$inline_3972_G__282081$jscomp$inline_3973_JSCompiler_inline_result$jscomp$inline_3971_maybe_ref__41676__auto__$jscomp$1_title$jscomp$18$$);
  $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$1_vec__282044$$ = {className:"absolute \n                  massive-title\n                  h-full\n                  w-full\n                  pointer-events-none", ref:$G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$1_vec__282044$$, children:$G__282073$jscomp$inline_3972_G__282081$jscomp$inline_3973_JSCompiler_inline_result$jscomp$inline_3971_maybe_ref__41676__auto__$jscomp$1_title$jscomp$18$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$1_vec__282044$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__282059_hover_title_ref_map__282047_map__282047__$1_props__41675__auto__$jscomp$1_vec__282044$$);
};
$amp$components$ui$playable_text$playable_text$$ = function($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$15$$) {
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$), $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$15$$], null);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$, 0, null);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$ = $APP.$cljs$core$__destructure_map$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$);
  var $text$jscomp$15$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$, $APP.$cljs$cst$488$text$$), $is_playing_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$, $cljs$cst$489$is_playing_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $background_ref$$ = $APP.$helix$hooks$use_ref$$("background-ref"), $text_ref$$ = $APP.$helix$hooks$use_ref$$("text-ref");
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$ = $APP.$helix$hooks$use_state$$(new $APP.$module$node_modules$gsap$dist$gsap$$.gsap.timeline({paused:!0}));
  var $tl$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$, 1, null);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $splitter$$ = $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($text_ref$$)) ? new $APP.$module$node_modules$gsap$SplitText$$.SplitText($APP.$cljs$core$_deref$$($text_ref$$), {type:"words,chars", charsClass:"playable-type-char"}) : null, $chars$jscomp$2$$ = $APP.$cljs$core$truth_$$($splitter$$) ? $splitter$$.chars : null, $ctx$$ = $APP.$module$node_modules$gsap$dist$gsap$$.gsap.context(function() {
      return $tl$jscomp$1$$.from($APP.$cljs$core$_deref$$($background_ref$$), {width:"0", duration:0.15, ease:"expo.inOut"}).to($APP.$cljs$core$_deref$$($background_ref$$), {width:"100%", duration:0.15, ease:"expo.inOut"}).from($chars$jscomp$2$$, {opacity:0, duration:0.15, ease:"expo.inOut", stagger:0.025}).to($chars$jscomp$2$$, {opacity:1, duration:0.15, ease:"expo.inOut", stagger:0.025});
    }, $outer_ctx$jscomp$1$$);
    return function() {
      return $ctx$$.revert();
    };
  });
  $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$15$$ = [$text$jscomp$15$$, $text_ref$$, $is_playing_QMARK_$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$15$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$, 
  $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$15$$);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($is_playing_QMARK_$$) ? $tl$jscomp$1$$.play() : $tl$jscomp$1$$.reverse();
  });
  $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$15$$ = [$is_playing_QMARK_$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$15$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$, $G__52078_52099_G__52080_52101_maybe_ref__41910__auto__$jscomp$15$$);
  $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$ = function() {
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
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52077_52098_G__52079_52100_G__52082_map__52073_map__52073__$1_props__41909__auto__$jscomp$15_vec__52070_vec__52074$$);
};
$amp$components$nav_link$nav_link$$ = function($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$, $maybe_ref__41676__auto__$jscomp$2$$) {
  $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$), $maybe_ref__41676__auto__$jscomp$2$$], null);
  $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$, 0, null);
  $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$ = $APP.$cljs$core$__destructure_map$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$);
  var $on_click_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$, $cljs$cst$490$on_click_handler$$), $on_mouse_over_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$, $cljs$cst$491$on_mouse_over_handler$$), $on_mouse_out_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$, 
  $cljs$cst$492$on_mouse_out_handler$$), $title$jscomp$19$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$, $APP.$cljs$cst$381$title$$), $writing$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$, $cljs$cst$493$writing$$), $section_id$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$, 
  $APP.$cljs$cst$414$section_id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$15$$ = $APP.$helix$hooks$use_ref$$("link-ref");
  $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$ = $APP.$helix$hooks$use_state$$(!1);
  var $is_hovering_QMARK_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$, 0, null), $set_is_hovering_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$, 1, null);
  $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$ = function() {
    return {children:[function() {
      var $G__282294$$ = function() {
        return {ref:$ref$jscomp$15$$, className:"\n                  hero-nav-links\n                  cursor-pointer\n                  font-mono\n                  font-medium\n                  text-6xl", onMouseOver:function() {
          $APP.$cljs$core$tap_GT_$$("mouse over");
          $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $set_is_hovering_BANG_$$.call(null, !0);
          var $G__282298$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$414$section_id$$, $section_id$jscomp$2$$], null);
          return $on_mouse_over_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_mouse_over_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__282298$$) : $on_mouse_over_handler$$.call(null, $G__282298$$);
        }, onMouseOut:function() {
          $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_hovering_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(!1) : $set_is_hovering_BANG_$$.call(null, !1);
          var $G__282299$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$414$section_id$$, $section_id$jscomp$2$$], null);
          return $on_mouse_out_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_mouse_out_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__282299$$) : $on_mouse_out_handler$$.call(null, $G__282299$$);
        }, onClick:function() {
          var $G__282300$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$414$section_id$$, $section_id$jscomp$2$$], null);
          return $on_click_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_click_handler$$.$cljs$core$IFn$_invoke$arity$1$($G__282300$$) : $on_click_handler$$.call(null, $G__282300$$);
        }, children:$title$jscomp$19$$};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("a", $G__282294$$, $section_id$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__282294$$, $section_id$jscomp$2$$);
    }(), function() {
      var $G__282302_G__282306$jscomp$inline_3532$$ = {text:$writing$$, "is-playing?":$is_hovering_QMARK_$$};
      $G__282302_G__282306$jscomp$inline_3532$$ = {className:"whitespace-nowrap\n                                                absolute\n                                                translate-x-full\n                                                bottom-2\n                                                \n                                                self-baseline\n                                                right-0\n                                                 pl-6\n                                                ", 
      children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$ui$playable_text$playable_text$$, $G__282302_G__282306$jscomp$inline_3532$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$ui$playable_text$playable_text$$, $G__282302_G__282306$jscomp$inline_3532$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282302_G__282306$jscomp$inline_3532$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__282302_G__282306$jscomp$inline_3532$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__282290_map__282284_map__282284__$1_props__41675__auto__$jscomp$2_vec__282281_vec__282285$$);
};
$amp$components$playful_titles$hero_menu$$ = function($G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$3_vec__282680$$, $maybe_ref__41676__auto__$jscomp$3$$) {
  $G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$3_vec__282680$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$3_vec__282680$$), $maybe_ref__41676__auto__$jscomp$3$$], null);
  $G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$3_vec__282680$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$3_vec__282680$$, 0, null);
  $G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$3_vec__282680$$ = $APP.$cljs$core$__destructure_map$$($G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$3_vec__282680$$);
  var $data$jscomp$134$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$3_vec__282680$$, $APP.$cljs$cst$28$data$$), $over$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$3_vec__282680$$, $APP.$cljs$cst$69$over$$), $out$jscomp$15$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$3_vec__282680$$, 
  $APP.$cljs$cst$396$out$$), $click$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$3_vec__282680$$, $cljs$cst$494$click$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$3_vec__282680$$ = function() {
    return {className:"absolute \n                  bg-white/30\n                  font-mono\n                  pointer-events-auto", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__282699_G__282706$jscomp$inline_3976_G__282710$jscomp$inline_3977_p__282694_writing$jscomp$1$$) {
      var $id$jscomp$69$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282699_G__282706$jscomp$inline_3976_G__282710$jscomp$inline_3977_p__282694_writing$jscomp$1$$, 0, null);
      $G__282699_G__282706$jscomp$inline_3976_G__282710$jscomp$inline_3977_p__282694_writing$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282699_G__282706$jscomp$inline_3976_G__282710$jscomp$inline_3977_p__282694_writing$jscomp$1$$, 1, null);
      $G__282699_G__282706$jscomp$inline_3976_G__282710$jscomp$inline_3977_p__282694_writing$jscomp$1$$ = {title:$id$jscomp$69$$, writing:$G__282699_G__282706$jscomp$inline_3976_G__282710$jscomp$inline_3977_p__282694_writing$jscomp$1$$, "section-id":$id$jscomp$69$$, "on-mouse-over-handler":$over$jscomp$1$$, "on-mouse-out-handler":$out$jscomp$15$$, "on-click-handler":$click$$};
      $G__282699_G__282706$jscomp$inline_3976_G__282710$jscomp$inline_3977_p__282694_writing$jscomp$1$$ = {className:"relative flex", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$nav_link$nav_link$$, $G__282699_G__282706$jscomp$inline_3976_G__282710$jscomp$inline_3977_p__282694_writing$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$nav_link$nav_link$$, $G__282699_G__282706$jscomp$inline_3976_G__282710$jscomp$inline_3977_p__282694_writing$jscomp$1$$)};
      $G__282699_G__282706$jscomp$inline_3976_G__282710$jscomp$inline_3977_p__282694_writing$jscomp$1$$ = {className:"flex", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282699_G__282706$jscomp$inline_3976_G__282710$jscomp$inline_3977_p__282694_writing$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__282699_G__282706$jscomp$inline_3976_G__282710$jscomp$inline_3977_p__282694_writing$jscomp$1$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__282699_G__282706$jscomp$inline_3976_G__282710$jscomp$inline_3977_p__282694_writing$jscomp$1$$, $id$jscomp$69$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__282699_G__282706$jscomp$inline_3976_G__282710$jscomp$inline_3977_p__282694_writing$jscomp$1$$, $id$jscomp$69$$);
    }, $data$jscomp$134$$)};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$3_vec__282680$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__282691_map__282683_map__282683__$1_props__41675__auto__$jscomp$3_vec__282680$$);
};
$amp$components$playful_titles$playful_titles$$ = function($G__282758_props__41675__auto__$jscomp$4_vec__282745_vec__282748$$) {
  $APP.$helix$core$extract_cljs_props$$($G__282758_props__41675__auto__$jscomp$4_vec__282745_vec__282748$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__282758_props__41675__auto__$jscomp$4_vec__282745_vec__282748$$ = $APP.$amp$providers$main_provider$use_main_state$$();
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282758_props__41675__auto__$jscomp$4_vec__282745_vec__282748$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282758_props__41675__auto__$jscomp$4_vec__282745_vec__282748$$, 1, null);
  var $hover_title_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("hover-title-ref");
  $G__282758_props__41675__auto__$jscomp$4_vec__282745_vec__282748$$ = $APP.$helix$hooks$use_state$$(null);
  var $current_section$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282758_props__41675__auto__$jscomp$4_vec__282745_vec__282748$$, 0, null), $set_current_section_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__282758_props__41675__auto__$jscomp$4_vec__282745_vec__282748$$, 1, null), $nav_mouse_over_handler$$ = function() {
    function $G__282751$$($map__282754__$1_p__282753_section_id$jscomp$3$$) {
      $map__282754__$1_p__282753_section_id$jscomp$3$$ = $APP.$cljs$core$__destructure_map$$($map__282754__$1_p__282753_section_id$jscomp$3$$);
      $map__282754__$1_p__282753_section_id$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__282754__$1_p__282753_section_id$jscomp$3$$, $APP.$cljs$cst$414$section_id$$);
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
  $G__282758_props__41675__auto__$jscomp$4_vec__282745_vec__282748$$ = function() {
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
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__282758_props__41675__auto__$jscomp$4_vec__282745_vec__282748$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__282758_props__41675__auto__$jscomp$4_vec__282745_vec__282748$$);
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
      var $aspect_ratio$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$components$elements$lazy_image_gallery$aspect_ratios$$, $cljs$core$rand_int$$($APP.$cljs$core$count$$($amp$components$elements$lazy_image_gallery$aspect_ratios$$))), $img_height$$ = Math.round($width$jscomp$32$$ * $aspect_ratio$jscomp$4$$);
      $G__307947_accumulated_height$$ += $img_height$$;
      $G__307948_result$jscomp$116$$ = $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__307948_result$jscomp$116$$, $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$width$jscomp$32$$, $img_height$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$472$aspect_ratio$$, $aspect_ratio$jscomp$4$$], null)));
    }
  }(), $total_height$jscomp$1$$ = $amp$components$elements$lazy_image_gallery$check_column_dimensions$$($initial_images$$), $scale_factor$jscomp$1$$ = $height$jscomp$29$$ / $total_height$jscomp$1$$;
  return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($dimensions$jscomp$8$$) {
    var $w$jscomp$17$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$8$$, 0, null), $h$jscomp$99$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$8$$, 1, null);
    return $APP.$cljs$core$with_meta$$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$w$jscomp$17$$, $h$jscomp$99$$ * $scale_factor$jscomp$1$$], null), $APP.$cljs$core$meta$$($dimensions$jscomp$8$$));
  }, $initial_images$$);
};
$amp$components$elements$lazy_image_gallery$find_closest_size$$ = function($target_width$jscomp$1$$, $target_height$jscomp$1$$) {
  var $sizes$jscomp$1$$ = $APP.$cljs$core$vec$$($APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$val$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$components$elements$lazy_image_gallery$image_sizes$$])));
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(function($closest$$, $h$jscomp$100_p__307152$$) {
    var $w$jscomp$18$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($h$jscomp$100_p__307152$$, 0, null);
    $h$jscomp$100_p__307152$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($h$jscomp$100_p__307152$$, 1, null);
    var $closest_diff$$ = Math.abs($APP.$cljs$core$first$$($closest$$) - $target_width$jscomp$1$$) + Math.abs($APP.$cljs$core$second$$($closest$$) - $target_height$jscomp$1$$);
    return Math.abs($w$jscomp$18$$ - $target_width$jscomp$1$$) + Math.abs($h$jscomp$100_p__307152$$ - $target_height$jscomp$1$$) < $closest_diff$$ ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$w$jscomp$18$$, $h$jscomp$100_p__307152$$], null) : $closest$$;
  }, $APP.$cljs$core$first$$($sizes$jscomp$1$$), $sizes$jscomp$1$$);
};
$amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$ = function($width$jscomp$33$$, $height$jscomp$30$$) {
  var $column_width$$ = Math.round($width$jscomp$33$$ / 3);
  return $APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(function() {
    return $amp$components$elements$lazy_image_gallery$aspect_column$$($column_width$$, $height$jscomp$30$$);
  }, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$core$range$cljs$0core$0IFn$0_invoke$0arity$03$$(3)]));
};
$amp$components$elements$lazy_image_gallery$image_layer$$ = function($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$, $G__307174_308061_maybe_ref__41633__auto__$jscomp$5$$) {
  $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$), $G__307174_308061_maybe_ref__41633__auto__$jscomp$5$$], null);
  $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$, 0, null);
  $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$ = $APP.$cljs$core$__destructure_map$$($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$);
  var $img_src$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$, $APP.$cljs$cst$435$img_src$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $base_ref$$ = $APP.$helix$hooks$use_ref$$("base-ref"), $transition_ref$$ = $APP.$helix$hooks$use_ref$$("trans-ref");
  $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$ = $APP.$helix$hooks$use_state$$(null);
  var $current_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$, 0, null), $set_current_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$, 1, null);
  $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$ = $APP.$helix$hooks$use_state$$(null);
  var $prev_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$, 0, null), $set_prev_src$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$, 1, null);
  $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($current_src$$, $img_src$jscomp$5$$) ? null : $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$($current_src$$) : $set_prev_src$$.call(null, $current_src$$);
  });
  $G__307174_308061_maybe_ref__41633__auto__$jscomp$5$$ = [$img_src$jscomp$5$$, $current_src$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$, $G__307174_308061_maybe_ref__41633__auto__$jscomp$5$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$, 
  $G__307174_308061_maybe_ref__41633__auto__$jscomp$5$$);
  $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$ = function() {
    return {className:"z-10", children:[$APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($prev_src$$) ? $prev_src$$ : $current_src$$) ? function() {
      var $G__307180$$ = function() {
        return {ref:$base_ref$$, src:$APP.$cljs$core$truth_$$($prev_src$$) ? $prev_src$$ : $current_src$$, className:"absolute\n                               z-10\n                               w-full\n                               h-full\n                               object-cover\n                               overflow-hidden", onLoad:function() {
          return $APP.$amp$utils$gsap$to_ref$$($transition_ref$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$437$opacity$$, 0, $APP.$cljs$cst$436$duration$$, 0], null));
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("img", $G__307180$$, "base") : $APP.$helix$core$jsx$$.call(null, "img", $G__307180$$, "base");
    }() : null, $APP.$cljs$core$truth_$$(function() {
      var $or__5142__auto__$jscomp$125$$ = $prev_src$$ == null;
      return $or__5142__auto__$jscomp$125$$ ? $or__5142__auto__$jscomp$125$$ : $img_src$jscomp$5$$;
    }()) ? function() {
      var $G__307185$$ = function() {
        return {src:$img_src$jscomp$5$$, ref:$transition_ref$$, className:"absolute\n                             z-20\n                             w-full\n                             h-full\n                             object-cover\n                             overflow-hidden", style:{opacity:$APP.$helix$impl$props$__GT_js$$(0)}, onLoad:function() {
          return $APP.$amp$utils$gsap$to_ref$$($transition_ref$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$437$opacity$$, 1, $APP.$cljs$cst$436$duration$$, 1, $APP.$cljs$cst$403$onComplete$$, function() {
            $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_prev_src$$.$cljs$core$IFn$_invoke$arity$1$(null) : $set_prev_src$$.call(null, null);
            return $set_current_src$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_current_src$$.$cljs$core$IFn$_invoke$arity$1$($img_src$jscomp$5$$) : $set_current_src$$.call(null, $img_src$jscomp$5$$);
          }], null));
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("img", $G__307185$$, "trans") : $APP.$helix$core$jsx$$.call(null, "img", $G__307185$$, "trans");
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307173_308060_G__307176_map__307166_map__307166__$1_props__41632__auto__$jscomp$5_vec__307163_vec__307167_vec__307170$$);
};
$amp$components$elements$lazy_image_gallery$caption_layer$$ = function($G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$6_vec__307203$$, $maybe_ref__41633__auto__$jscomp$6$$) {
  $G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$6_vec__307203$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$6_vec__307203$$), $maybe_ref__41633__auto__$jscomp$6$$], null);
  $G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$6_vec__307203$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$6_vec__307203$$, 0, null);
  $G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$6_vec__307203$$ = $APP.$cljs$core$__destructure_map$$($G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$6_vec__307203$$);
  var $target_ref$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$6_vec__307203$$, $cljs$cst$495$target_ref$$), $caption$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$6_vec__307203$$, $APP.$cljs$cst$438$caption$$), $credit$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$6_vec__307203$$, 
  $APP.$cljs$cst$439$credit$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$6_vec__307203$$, $cljs$cst$496$other$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$6_vec__307203$$ = function() {
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
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$6_vec__307203$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307214_map__307206_map__307206__$1_props__41632__auto__$jscomp$6_vec__307203$$);
};
$amp$components$elements$lazy_image_gallery$image_card$$ = function($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$7_vec__307390$$, $maybe_ref__41633__auto__$jscomp$7$$) {
  $G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$7_vec__307390$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$7_vec__307390$$), $maybe_ref__41633__auto__$jscomp$7$$], null);
  $G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$7_vec__307390$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$7_vec__307390$$, 0, null);
  $G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$7_vec__307390$$ = $APP.$cljs$core$__destructure_map$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$7_vec__307390$$);
  var $width$jscomp$34$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$7_vec__307390$$, $APP.$cljs$cst$415$width$$), $height$jscomp$31$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$7_vec__307390$$, $APP.$cljs$cst$416$height$$), $img_src$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$7_vec__307390$$, 
  $APP.$cljs$cst$435$img_src$$), $caption$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$7_vec__307390$$, $APP.$cljs$cst$438$caption$$), $credit$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$7_vec__307390$$, $APP.$cljs$cst$439$credit$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$7_vec__307390$$, $cljs$cst$496$other$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$7_vec__307390$$, $APP.$cljs$cst$99$key$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$7_vec__307390$$, $APP.$cljs$cst$440$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $trigger_ref$$ = $APP.$helix$hooks$use_ref$$("trigger-ref"), $target_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("target-ref");
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($trigger_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$394$target$$, $target_ref$jscomp$1$$, $APP.$cljs$cst$395$initial$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$475$y$$, 100, $APP.$cljs$cst$437$opacity$$, 0], null), $APP.$cljs$cst$69$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
  3, [$APP.$cljs$cst$475$y$$, 0, $APP.$cljs$cst$437$opacity$$, 1, $APP.$cljs$cst$436$duration$$, 0.25], null), $APP.$cljs$cst$396$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$475$y$$, 100, $APP.$cljs$cst$437$opacity$$, 0, $APP.$cljs$cst$436$duration$$, 0.125], null)], null)]));
  $G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$7_vec__307390$$ = function() {
    return {ref:$trigger_ref$$, style:{width:$APP.$helix$impl$props$__GT_js$$($width$jscomp$34$$), height:$APP.$helix$impl$props$__GT_js$$($height$jscomp$31$$)}, className:"relative\n                    bg-slate-200/50 dark:bg-white/10\n                    overflow-hidden", children:[function() {
      var $G__307461$$ = {"img-src":$img_src$jscomp$6$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$image_layer$$, $G__307461$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$image_layer$$, $G__307461$$);
    }(), $APP.$cljs$core$truth_$$($caption$jscomp$3$$) ? function() {
      var $G__307535$$ = {"target-ref":$target_ref$jscomp$1$$, caption:$caption$jscomp$3$$, credit:$credit$jscomp$3$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$caption_layer$$, $G__307535$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$caption_layer$$, $G__307535$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$7_vec__307390$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307441_map__307393_map__307393__$1_props__41632__auto__$jscomp$7_vec__307390$$);
};
$amp$components$elements$lazy_image_gallery$lazy_image_gallery$$ = function($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$, $G__307724_308110_maybe_ref__41633__auto__$jscomp$8$$) {
  $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$), $G__307724_308110_maybe_ref__41633__auto__$jscomp$8$$], null);
  $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$, 0, null);
  $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$ = $APP.$cljs$core$__destructure_map$$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$);
  var $images$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$, $cljs$cst$497$images$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$, $cljs$cst$498$is_visible_QMARK_$$);
  $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$, $cljs$cst$499$image_gallery_container_ref$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$2$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $gallery_dimensions$$ = $APP.$amp$hooks$use_container_size$use_container_size$$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$);
  $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$ = $APP.$helix$hooks$use_state$$($amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$(8, 200));
  var $masonary_grid_slots$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$, 0, null), $set_masonary_grid_slots$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$, 1, null);
  $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $G__307726$$ = $amp$components$elements$lazy_image_gallery$build_masonary_grid_slots$$($APP.$cljs$cst$415$width$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$), $APP.$cljs$cst$416$height$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$));
    return $set_masonary_grid_slots$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_masonary_grid_slots$$.$cljs$core$IFn$_invoke$arity$1$($G__307726$$) : $set_masonary_grid_slots$$.call(null, $G__307726$$);
  });
  $G__307724_308110_maybe_ref__41633__auto__$jscomp$8$$ = [$APP.$cljs$cst$415$width$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$), $APP.$cljs$cst$416$height$$.$cljs$core$IFn$_invoke$arity$1$($gallery_dimensions$$)];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$, $G__307724_308110_maybe_ref__41633__auto__$jscomp$8$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$, 
  $G__307724_308110_maybe_ref__41633__auto__$jscomp$8$$);
  $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$ = function() {
    return {ref:$outer_ctx$jscomp$2$$, className:"overflow-hidden h-full", children:function() {
      var $G__307742$$ = function() {
        return {className:"columns-3 gap-0 h-full pinstripe", children:$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($idx$jscomp$69$$, $dimensions$jscomp$9_height$jscomp$32$$) {
          var $G__307796_caption$jscomp$4_map__307763$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($images$$, $cljs$core$rand_int$$($APP.$cljs$core$count$$($images$$))), $credit$jscomp$4_map__307763__$1$$ = $APP.$cljs$core$__destructure_map$$($G__307796_caption$jscomp$4_map__307763$$), $sized_image_src_src$jscomp$36$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__307763__$1$$, $APP.$cljs$cst$426$src$$);
          $G__307796_caption$jscomp$4_map__307763$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__307763__$1$$, $APP.$cljs$cst$438$caption$$);
          $credit$jscomp$4_map__307763__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__307763__$1$$, $APP.$cljs$cst$439$credit$$);
          var $aspect_ratio$jscomp$5$$ = $APP.$cljs$cst$472$aspect_ratio$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$meta$$($dimensions$jscomp$9_height$jscomp$32$$)), $closest_height_closest_match$$ = $amp$components$elements$lazy_image_gallery$find_closest_size$$($APP.$cljs$core$first$$($dimensions$jscomp$9_height$jscomp$32$$), $APP.$cljs$core$second$$($dimensions$jscomp$9_height$jscomp$32$$)), $width$jscomp$35$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$9_height$jscomp$32$$, 
          0, null);
          $dimensions$jscomp$9_height$jscomp$32$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dimensions$jscomp$9_height$jscomp$32$$, 1, null);
          var $closest_width$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($closest_height_closest_match$$, 0, null);
          $closest_height_closest_match$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($closest_height_closest_match$$, 1, null);
          $sized_image_src_src$jscomp$36$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($sized_image_src_src$jscomp$36$$) + "?w\x3d" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($closest_width$$) + "\x26h\x3d" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($closest_height_closest_match$$) + "\x26fit\x3dcrop\x26auto\x3dformat,compress\x26crop\x3dfaces,edges";
          $G__307796_caption$jscomp$4_map__307763$$ = {width:$width$jscomp$35$$, height:$dimensions$jscomp$9_height$jscomp$32$$, "img-src":$sized_image_src_src$jscomp$36$$, caption:$G__307796_caption$jscomp$4_map__307763$$, credit:$credit$jscomp$4_map__307763__$1$$, other:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($aspect_ratio$jscomp$5$$), idx:$idx$jscomp$69$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$lazy_image_gallery$image_card$$, $G__307796_caption$jscomp$4_map__307763$$, $idx$jscomp$69$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$image_card$$, $G__307796_caption$jscomp$4_map__307763$$, $idx$jscomp$69$$);
        }, $masonary_grid_slots$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307742$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307742$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__307723_308109_G__307734_image_gallery_container_ref_map__307676_map__307676__$1_props__41632__auto__$jscomp$8_vec__307673_vec__307686$$);
};
$amp$components$sections$about_biennale$title$$ = function($G__45099_props__41634__auto__$jscomp$18$$) {
  $APP.$helix$core$extract_cljs_props$$($G__45099_props__41634__auto__$jscomp$18$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__45099_props__41634__auto__$jscomp$18$$ = function() {
    return {className:"lg:flex\n                  w-full\n                  lg:h-2/5\n                  z-20\n                  items-center\n                  justify-between\n                  bg-black/10\n                  lg:p-12 p-4\n                  lg:text-6xl text-3xl\n                  font-display\n                  font-bold\n                  text-slate-800", children:[function() {
      var $G__45107$$ = function() {
        return {className:"flex flex-col", children:[function() {
          var $G__45113$$ = {className:"", children:"venice"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45113$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45113$$);
        }(), function() {
          var $G__45117$$ = {className:"", children:"biennale"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45117$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45117$$);
        }(), function() {
          var $G__45121$$ = {className:"", children:"2026"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45121$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45121$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45107$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45107$$);
    }(), function() {
      var $G__45129$$ = function() {
        return {className:"flex\n                         flex-col\n                         font-display\n                         font-bold\n                         lg:text-right\n                         italic\n                         text-white/60", children:[function() {
          var $G__45135$$ = {className:"", children:"in"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45135$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45135$$);
        }(), function() {
          var $G__45145$$ = {className:"", children:"minor"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45145$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45145$$);
        }(), function() {
          var $G__45153$$ = {className:"", children:"keys"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45153$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45153$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45129$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45129$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45099_props__41634__auto__$jscomp$18$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45099_props__41634__auto__$jscomp$18$$);
};
$amp$components$sections$about_biennale$copy_block$$ = function($G__45175_map__45171_map__45171__$1_props__41634__auto__$jscomp$19_vec__45168$$, $maybe_ref__41635__auto__$jscomp$19$$) {
  $G__45175_map__45171_map__45171__$1_props__41634__auto__$jscomp$19_vec__45168$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__45175_map__45171_map__45171__$1_props__41634__auto__$jscomp$19_vec__45168$$), $maybe_ref__41635__auto__$jscomp$19$$], null);
  $G__45175_map__45171_map__45171__$1_props__41634__auto__$jscomp$19_vec__45168$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45175_map__45171_map__45171__$1_props__41634__auto__$jscomp$19_vec__45168$$, 0, null);
  $G__45175_map__45171_map__45171__$1_props__41634__auto__$jscomp$19_vec__45168$$ = $APP.$cljs$core$__destructure_map$$($G__45175_map__45171_map__45171__$1_props__41634__auto__$jscomp$19_vec__45168$$);
  var $title$jscomp$20$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45175_map__45171_map__45171__$1_props__41634__auto__$jscomp$19_vec__45168$$, $APP.$cljs$cst$381$title$$), $copy$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45175_map__45171_map__45171__$1_props__41634__auto__$jscomp$19_vec__45168$$, $cljs$cst$500$copy$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__45175_map__45171_map__45171__$1_props__41634__auto__$jscomp$19_vec__45168$$ = function() {
    return {className:"flex flex-col mb-12 font-display", children:[function() {
      var $G__45179$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:$title$jscomp$20$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45179$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45179$$);
    }(), function() {
      var $G__45183$$ = {className:"text-slate-800", children:$copy$jscomp$1$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45183$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45183$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45175_map__45171_map__45171__$1_props__41634__auto__$jscomp$19_vec__45168$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45175_map__45171_map__45171__$1_props__41634__auto__$jscomp$19_vec__45168$$);
};
$amp$components$sections$about_biennale$about_biennale_section$$ = function($G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$, $maybe_ref__41635__auto__$jscomp$20$$) {
  $G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$), $maybe_ref__41635__auto__$jscomp$20$$], null);
  $G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$, 0, null);
  $G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$ = $APP.$cljs$core$__destructure_map$$($G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$, $cljs$cst$501$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$, $cljs$cst$498$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$, $cljs$cst$502$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$3$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$3$$);
  var $visited_QMARK_$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$, 1, null);
  $G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$about_biennale$images$$);
  var $images$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$, 1, null);
  var $image_gallery_container_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("image-gallery-container-ref"), $is_desktop_QMARK_$jscomp$2$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$ = function() {
    return {ref:$outer_ctx$jscomp$3$$, className:"h-full \n                        w-full\n                        flex\n                        pink-grad\n                        light-red-grad\n                        items-center\n                        justify-center\n                        font-display\n                        relative", children:function() {
      var $G__45206$$ = function() {
        return {className:"flex \n                               flex-col\n                               overflow-hidden\n                               relative\n                               w-full md:w-10/12 lg:w-full\n                               lg:p-12 p-4", children:[function() {
          var $G__45210$$ = {};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$title$$, $G__45210$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$title$$, $G__45210$$);
        }(), function() {
          var $G__45212$$ = function() {
            return {className:"flex overflow-hidden relative", children:[function() {
              var $G__45216$$ = function() {
                return {className:"lg:w-1/2 \n                                             lg:p-16 p-4", children:[function() {
                  var $G__45221$$ = {title:"the biennale", copy:"The Venice Biennale is the most prestigious platform for contemporary art in the world—the cultural equivalent of the Olympics.  Every two years, nations convene in the Giardini and Arsenale to present the best of their artists.  The 61st International Art Exhibition will run from May 9 to November 22 2026 and, following the unexpected passing of curator Koyo Kouoh, will be realized exactly as she conceived it."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$copy_block$$, $G__45221$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$copy_block$$, $G__45221$$);
                }(), function() {
                  var $G__45225$$ = {title:"The theme: In Minor Keys", copy:"Kouoh’s vision invites us to slow down and listen to the “frequencies of the minor keys,” the quiet tones and lower frequencies that often get lost amid today’s chaos .  In her curatorial text, she describes the minor key as a metaphor for small islands and intimate oases—gardens, courtyards, dance floors—where artists cultivate rich social and ecological worlds .  Rather than celebrating spectacle, the exhibition tunes into “the persistent signals of earth and life,” foregrounding sensory, affective experiences .  As Kouoh’s team notes, “In minor keys are sequences of exhilarating journeys that address the sensate and the affective, inviting visitors to marvel, meditate, dream, revel, reflect and commune in realms where time is not corporate property nor at the mercy of relentlessly accelerated productivity” ."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$copy_block$$, $G__45225$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$copy_block$$, $G__45225$$);
                }(), function() {
                  var $G__45229$$ = {title:"Why this matters to Armenians", copy:"Armenia’s cultural memory is one of quiet endurance, repetition and devotion.  From stone‑carved khachkars to endless rows of hand‑woven carpets, Armenian art has always been a labour of patience and persistence.  Kouoh’s vision of the Biennale as an archipelago of “minor keys” resonates deeply with this ethos.  It is about valuing the handmade over the manufactured, the intimate gesture over the headline‑grabbing spectacle—precisely what Zadik Zadikian will embody in The Studio."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$about_biennale$copy_block$$, $G__45229$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$about_biennale$copy_block$$, $G__45229$$);
                }(), function() {
                  var $G__45233$$ = {className:"", children:"By bringing an Armenian “island” to Venice, we affirm that our heritage belongs on the world’s biggest stage not because it shouts the loudest, but because it teaches the world how to listen.  Supporting the Armenia Pavilion is more than funding an exhibition; it is enabling a sanctuary of slow, deliberate creativity—an oasis of dignity and resilience—within a global conversation on art’s future."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45233$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45233$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45216$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45216$$);
            }(), $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$2$$) ? $visited_QMARK_$jscomp$5$$ : $is_desktop_QMARK_$jscomp$2$$) ? function() {
              var $G__45244_G__45250$jscomp$inline_3980_G__45254$jscomp$inline_3981_JSCompiler_inline_result$jscomp$inline_3979$$ = {images:$images$jscomp$1$$, "image-gallery-container-ref":$image_gallery_container_ref$jscomp$1$$};
              $G__45244_G__45250$jscomp$inline_3980_G__45254$jscomp$inline_3981_JSCompiler_inline_result$jscomp$inline_3979$$ = {className:"absolute h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $G__45244_G__45250$jscomp$inline_3980_G__45254$jscomp$inline_3981_JSCompiler_inline_result$jscomp$inline_3979$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, 
              $G__45244_G__45250$jscomp$inline_3980_G__45254$jscomp$inline_3981_JSCompiler_inline_result$jscomp$inline_3979$$)};
              $G__45244_G__45250$jscomp$inline_3980_G__45254$jscomp$inline_3981_JSCompiler_inline_result$jscomp$inline_3979$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45244_G__45250$jscomp$inline_3980_G__45254$jscomp$inline_3981_JSCompiler_inline_result$jscomp$inline_3979$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45244_G__45250$jscomp$inline_3980_G__45254$jscomp$inline_3981_JSCompiler_inline_result$jscomp$inline_3979$$);
              $G__45244_G__45250$jscomp$inline_3980_G__45254$jscomp$inline_3981_JSCompiler_inline_result$jscomp$inline_3979$$ = {ref:$image_gallery_container_ref$jscomp$1$$, className:"ml-8\n                                               w-7/12\n                                               relative\n                                               overflow-hidden", children:$G__45244_G__45250$jscomp$inline_3980_G__45254$jscomp$inline_3981_JSCompiler_inline_result$jscomp$inline_3979$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45244_G__45250$jscomp$inline_3980_G__45254$jscomp$inline_3981_JSCompiler_inline_result$jscomp$inline_3979$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45244_G__45250$jscomp$inline_3980_G__45254$jscomp$inline_3981_JSCompiler_inline_result$jscomp$inline_3979$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45212$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45212$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45206$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45206$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__45202_map__45192_map__45192__$1_props__41634__auto__$jscomp$20_vec__45189_vec__45193_vec__45196$$);
};
$amp$components$sections$contact_section$contact_section$$ = function($G__307265_map__307246_props__41632__auto__$jscomp$9_vec__307243$$, $maybe_ref__41633__auto__$jscomp$9$$) {
  $G__307265_map__307246_props__41632__auto__$jscomp$9_vec__307243$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__307265_map__307246_props__41632__auto__$jscomp$9_vec__307243$$), $maybe_ref__41633__auto__$jscomp$9$$], null);
  $G__307265_map__307246_props__41632__auto__$jscomp$9_vec__307243$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__307265_map__307246_props__41632__auto__$jscomp$9_vec__307243$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__307265_map__307246_props__41632__auto__$jscomp$9_vec__307243$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__307265_map__307246_props__41632__auto__$jscomp$9_vec__307243$$ = function() {
    return {className:"relative w-full font-display mt-12", children:[function() {
      var $G__307277$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307277$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307277$$);
    }(), function() {
      var $G__307286_G__307294$jscomp$inline_3984_G__307306$jscomp$inline_3985$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-xl lg:text-2xl italic font-light leading-relaxed", "text-slate-600  dark:text-slate-400"]))), children:"“Culture is where nations become undeniable. It is where influence is built without violence; where history is not only remembered, but translated into future power.”"};
      $G__307286_G__307294$jscomp$inline_3984_G__307306$jscomp$inline_3985$$ = {className:"max-w-3xl text-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__307286_G__307294$jscomp$inline_3984_G__307306$jscomp$inline_3985$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__307286_G__307294$jscomp$inline_3984_G__307306$jscomp$inline_3985$$)};
      $G__307286_G__307294$jscomp$inline_3984_G__307306$jscomp$inline_3985$$ = {className:"py-16 lg:py-24 px-6 flex justify-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__307286_G__307294$jscomp$inline_3984_G__307306$jscomp$inline_3985$$) : $APP.$helix$core$jsx$$.call(null, "blockquote", $G__307286_G__307294$jscomp$inline_3984_G__307306$jscomp$inline_3985$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307286_G__307294$jscomp$inline_3984_G__307306$jscomp$inline_3985$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__307286_G__307294$jscomp$inline_3984_G__307306$jscomp$inline_3985$$);
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
              var $G__307804$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"v" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("637a3e0")};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__307804$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__307804$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307788$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307788$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__307740$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__307740$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("footer", $G__307265_map__307246_props__41632__auto__$jscomp$9_vec__307243$$) : $APP.$helix$core$jsxs$$.call(null, "footer", $G__307265_map__307246_props__41632__auto__$jscomp$9_vec__307243$$);
};
$amp$components$sections$artist_section$artist_section$$ = function($G__45657_map__45628_map__45628__$1_props__41634__auto__$jscomp$21_vec__45625_vec__45642$$, $maybe_ref__41635__auto__$jscomp$21$$) {
  $G__45657_map__45628_map__45628__$1_props__41634__auto__$jscomp$21_vec__45625_vec__45642$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__45657_map__45628_map__45628__$1_props__41634__auto__$jscomp$21_vec__45625_vec__45642$$), $maybe_ref__41635__auto__$jscomp$21$$], null);
  $G__45657_map__45628_map__45628__$1_props__41634__auto__$jscomp$21_vec__45625_vec__45642$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45657_map__45628_map__45628__$1_props__41634__auto__$jscomp$21_vec__45625_vec__45642$$, 0, null);
  $G__45657_map__45628_map__45628__$1_props__41634__auto__$jscomp$21_vec__45625_vec__45642$$ = $APP.$cljs$core$__destructure_map$$($G__45657_map__45628_map__45628__$1_props__41634__auto__$jscomp$21_vec__45625_vec__45642$$);
  var $id$jscomp$70$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45657_map__45628_map__45628__$1_props__41634__auto__$jscomp$21_vec__45625_vec__45642$$, $APP.$cljs$cst$200$id$$), $title$jscomp$21$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45657_map__45628_map__45628__$1_props__41634__auto__$jscomp$21_vec__45625_vec__45642$$, $APP.$cljs$cst$381$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$16$$ = $APP.$helix$hooks$use_ref$$("artist-ref");
  $G__45657_map__45628_map__45628__$1_props__41634__auto__$jscomp$21_vec__45625_vec__45642$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$16$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$448$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45657_map__45628_map__45628__$1_props__41634__auto__$jscomp$21_vec__45625_vec__45642$$, 0, null);
  var $visible_QMARK_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45657_map__45628_map__45628__$1_props__41634__auto__$jscomp$21_vec__45625_vec__45642$$, 1, null), $tag_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$483$boxDecorationBreak$$, "clone", $cljs$cst$484$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__45657_map__45628_map__45628__$1_props__41634__auto__$jscomp$21_vec__45625_vec__45642$$ = function() {
    return {id:$id$jscomp$70$$, ref:$ref$jscomp$16$$, className:"py-16 sm:py-20", children:[$APP.$cljs$core$truth_$$($title$jscomp$21$$) ? function() {
      var $G__45664_G__45668$jscomp$inline_3544$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$$), children:$title$jscomp$21$$};
      $G__45664_G__45668$jscomp$inline_3544$$ = {className:"font-display font-bold uppercase tracking-wider\n                      text-2xl sm:text-3xl text-white dark:text-white\n                      leading-relaxed mb-10 px-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__45664_G__45668$jscomp$inline_3544$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__45664_G__45668$jscomp$inline_3544$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__45664_G__45668$jscomp$inline_3544$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__45664_G__45668$jscomp$inline_3544$$);
    }() : null, function() {
      var $G__45673$$ = function() {
        return {className:"px-4 sm:flex sm:gap-10 sm:items-start", children:[function() {
          var $G__45677_G__45681$jscomp$inline_3547$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/zz-portrait-2.jpg", fit:"crop", "aspect-ratio":0.75, "active?":$visible_QMARK_$$};
          $G__45677_G__45681$jscomp$inline_3547$$ = {className:"w-full sm:w-2/5 flex-shrink-0 aspect-[3/4] rounded-sm overflow-hidden mb-8 sm:mb-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__45677_G__45681$jscomp$inline_3547$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, 
          $G__45677_G__45681$jscomp$inline_3547$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45677_G__45681$jscomp$inline_3547$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45677_G__45681$jscomp$inline_3547$$);
        }(), function() {
          var $G__45689$$ = function() {
            return {className:"sm:flex-1 sm:min-w-0", children:[function() {
              var $G__45693_G__45700$jscomp$inline_3550$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$$), children:"Zadik Zadikian"};
              $G__45693_G__45700$jscomp$inline_3550$$ = {className:"font-display font-bold uppercase tracking-wider\n                           text-2xl sm:text-3xl text-white dark:text-white mb-1 leading-relaxed", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__45693_G__45700$jscomp$inline_3550$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__45693_G__45700$jscomp$inline_3550$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45693_G__45700$jscomp$inline_3550$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45693_G__45700$jscomp$inline_3550$$);
            }(), function() {
              var $G__45716$$ = {className:"font-display font-medium text-xs uppercase tracking-[0.2em]\n                           text-amber-600 dark:text-amber-300/70 mb-6", children:"Artist"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45716$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45716$$);
            }(), function() {
              var $G__45731$$ = function() {
                return {className:"border-l-2 border-white/20 pl-6 my-8", children:[function() {
                  var $G__45739$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "italic"]))), children:"“If you want to learn about something, become that thing and then study yourself.”"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45739$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45739$$);
                }(), function() {
                  var $G__45749$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$amp$styles$label_muted$$]))), children:"— Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__45749$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__45749$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__45731$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__45731$$);
            }(), function() {
              var $G__45759$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["Zadik Zadikian (b. 1948, Erevan, Soviet Armenia) has spent over five decades creating works that challenge both the materials and ideologies of contemporary art. A daring escape from the Soviet Union in his youth marked the beginning of an extraordinary journey, from his training under ", 
                function() {
                  var $G__45780$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Benjamino Bufano"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__45780$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__45780$$);
                }(), " to his longstanding friendship with ", function() {
                  var $G__45827$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Richard Serra"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__45827$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__45827$$);
                }(), "."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45759$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__45759$$);
            }(), function() {
              var $G__45856$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Zadikian’s work, particularly his exploration of gilded forms, has established him as one of the leading sculptors in the realm of contemporary alchemy. His pieces, often crafted from gold leaf, suggest a transcendence of time and place, pushing boundaries while creating worlds that seem to belong to another realm entirely."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45856$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45856$$);
            }(), function() {
              var $G__45870$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Centered on the most basic unit—the block, or brick—which has been continuously used for building for over eleven millennia, Zadikian’s simplified plaster casts are elemental and foundational: a humble aesthetics where form, beauty, and meaning emerge through the assembly and fluid recombination of humanity’s most common architectural building element."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45870$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45870$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45689$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45689$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45673$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45673$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__45657_map__45628_map__45628__$1_props__41634__auto__$jscomp$21_vec__45625_vec__45642$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__45657_map__45628_map__45628__$1_props__41634__auto__$jscomp$21_vec__45625_vec__45642$$);
};
$amp$components$sections$curators_section$curator_card$$ = function($G__45486_map__45483_map__45483__$1_props__41634__auto__$jscomp$22_vec__45480$$, $maybe_ref__41635__auto__$jscomp$22$$) {
  $G__45486_map__45483_map__45483__$1_props__41634__auto__$jscomp$22_vec__45480$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__45486_map__45483_map__45483__$1_props__41634__auto__$jscomp$22_vec__45480$$), $maybe_ref__41635__auto__$jscomp$22$$], null);
  $G__45486_map__45483_map__45483__$1_props__41634__auto__$jscomp$22_vec__45480$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45486_map__45483_map__45483__$1_props__41634__auto__$jscomp$22_vec__45480$$, 0, null);
  $G__45486_map__45483_map__45483__$1_props__41634__auto__$jscomp$22_vec__45480$$ = $APP.$cljs$core$__destructure_map$$($G__45486_map__45483_map__45483__$1_props__41634__auto__$jscomp$22_vec__45480$$);
  var $name$jscomp$196$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45486_map__45483_map__45483__$1_props__41634__auto__$jscomp$22_vec__45480$$, $APP.$cljs$cst$191$name$$), $role$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45486_map__45483_map__45483__$1_props__41634__auto__$jscomp$22_vec__45480$$, $APP.$cljs$cst$503$role$$), $img$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45486_map__45483_map__45483__$1_props__41634__auto__$jscomp$22_vec__45480$$, 
  $cljs$cst$504$img$$), $bio$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45486_map__45483_map__45483__$1_props__41634__auto__$jscomp$22_vec__45480$$, $cljs$cst$505$bio$$), $visible_QMARK_$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45486_map__45483_map__45483__$1_props__41634__auto__$jscomp$22_vec__45480$$, $cljs$cst$506$visible_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $tag_style$jscomp$1$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$483$boxDecorationBreak$$, "clone", $cljs$cst$484$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__45486_map__45483_map__45483__$1_props__41634__auto__$jscomp$22_vec__45480$$ = function() {
    return {className:"px-4 sm:flex sm:gap-8 sm:items-start", children:[function() {
      var $G__45490_G__45495$jscomp$inline_3553$$ = {"img-src":$img$jscomp$2$$, fit:"crop", "aspect-ratio":1, "active?":$visible_QMARK_$jscomp$1$$};
      $G__45490_G__45495$jscomp$inline_3553$$ = {className:"float-left mr-4 mb-2 sm:float-none sm:mr-0 sm:mb-0\n               w-20 aspect-square sm:w-36\n               flex-shrink-0 rounded-sm overflow-hidden", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__45490_G__45495$jscomp$inline_3553$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, 
      $G__45490_G__45495$jscomp$inline_3553$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45490_G__45495$jscomp$inline_3553$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45490_G__45495$jscomp$inline_3553$$);
    }(), function() {
      var $G__45499$$ = function() {
        return {className:"sm:flex-1 sm:min-w-0", children:[function() {
          var $G__45503_G__45508$jscomp$inline_3556$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-2 py-0.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$jscomp$1$$), children:$name$jscomp$196$$};
          $G__45503_G__45508$jscomp$inline_3556$$ = {className:"font-display font-bold uppercase tracking-wider\n                    text-lg sm:text-xl text-white dark:text-white mb-1 leading-relaxed", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__45503_G__45508$jscomp$inline_3556$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__45503_G__45508$jscomp$inline_3556$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45503_G__45508$jscomp$inline_3556$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45503_G__45508$jscomp$inline_3556$$);
        }(), function() {
          var $G__45517$$ = {className:"font-display font-medium text-xs uppercase tracking-[0.2em]\n                    text-amber-600 dark:text-amber-300/70 mb-3", children:$role$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45517$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45517$$);
        }(), function() {
          var $G__45521$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_sm$$, "sm:text-base"]))), children:$bio$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45521$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45521$$);
        }(), function() {
          var $G__45525$$ = {className:"clear-both sm:hidden"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45525$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45525$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45499$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45499$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45486_map__45483_map__45483__$1_props__41634__auto__$jscomp$22_vec__45480$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45486_map__45483_map__45483__$1_props__41634__auto__$jscomp$22_vec__45480$$);
};
$amp$components$sections$curators_section$curators_section$$ = function($G__45578_map__45573_map__45573__$1_props__41634__auto__$jscomp$23_vec__45570_vec__45574$$, $maybe_ref__41635__auto__$jscomp$23$$) {
  $G__45578_map__45573_map__45573__$1_props__41634__auto__$jscomp$23_vec__45570_vec__45574$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__45578_map__45573_map__45573__$1_props__41634__auto__$jscomp$23_vec__45570_vec__45574$$), $maybe_ref__41635__auto__$jscomp$23$$], null);
  $G__45578_map__45573_map__45573__$1_props__41634__auto__$jscomp$23_vec__45570_vec__45574$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45578_map__45573_map__45573__$1_props__41634__auto__$jscomp$23_vec__45570_vec__45574$$, 0, null);
  $G__45578_map__45573_map__45573__$1_props__41634__auto__$jscomp$23_vec__45570_vec__45574$$ = $APP.$cljs$core$__destructure_map$$($G__45578_map__45573_map__45573__$1_props__41634__auto__$jscomp$23_vec__45570_vec__45574$$);
  var $id$jscomp$71$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45578_map__45573_map__45573__$1_props__41634__auto__$jscomp$23_vec__45570_vec__45574$$, $APP.$cljs$cst$200$id$$), $title$jscomp$22$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45578_map__45573_map__45573__$1_props__41634__auto__$jscomp$23_vec__45570_vec__45574$$, $APP.$cljs$cst$381$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$17$$ = $APP.$helix$hooks$use_ref$$("curators-ref");
  $G__45578_map__45573_map__45573__$1_props__41634__auto__$jscomp$23_vec__45570_vec__45574$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$17$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$448$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45578_map__45573_map__45573__$1_props__41634__auto__$jscomp$23_vec__45570_vec__45574$$, 0, null);
  var $visible_QMARK_$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45578_map__45573_map__45573__$1_props__41634__auto__$jscomp$23_vec__45570_vec__45574$$, 1, null), $title_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$483$boxDecorationBreak$$, "clone", $cljs$cst$484$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__45578_map__45573_map__45573__$1_props__41634__auto__$jscomp$23_vec__45570_vec__45574$$ = function() {
    return {id:$id$jscomp$71$$, ref:$ref$jscomp$17$$, className:"py-16 sm:py-20", children:[$APP.$cljs$core$truth_$$($title$jscomp$22$$) ? function() {
      var $G__45583_G__45591$jscomp$inline_3559$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($title_style$$), children:$title$jscomp$22$$};
      $G__45583_G__45591$jscomp$inline_3559$$ = {className:"font-display font-bold uppercase tracking-wider\n                      text-2xl sm:text-3xl text-white dark:text-white\n                      leading-relaxed mb-10 px-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__45583_G__45591$jscomp$inline_3559$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__45583_G__45591$jscomp$inline_3559$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__45583_G__45591$jscomp$inline_3559$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__45583_G__45591$jscomp$inline_3559$$);
    }() : null, function() {
      var $G__45595$$ = function() {
        return {className:"space-y-8 sm:space-y-12\n              divide-y divide-slate-200/50 dark:divide-white/10", children:function() {
          return function $amp$components$sections$curators_section$curators_section_render_$_iter__45598$$($s__45599$$) {
            return new $APP.$cljs$core$LazySeq$$(null, function() {
              for (;;) {
                var $s__45599__$2_temp__5823__auto__$jscomp$72$$ = $APP.$cljs$core$seq$$($s__45599$$);
                if ($s__45599__$2_temp__5823__auto__$jscomp$72$$) {
                  if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__45599__$2_temp__5823__auto__$jscomp$72$$)) {
                    var $c__5626__auto__$jscomp$14$$ = $APP.$cljs$core$_chunked_first$$($s__45599__$2_temp__5823__auto__$jscomp$72$$), $size__5627__auto__$jscomp$14$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$14$$), $b__45601$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$14$$);
                    return function() {
                      for (var $i__45600$$ = 0;;) {
                        if ($i__45600$$ < $size__5627__auto__$jscomp$14$$) {
                          var $JSCompiler_temp_const$jscomp$3829_map__45637_map__45637__$1$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$14$$, $i__45600$$), $G__45649$jscomp$inline_3885_G__45655$jscomp$inline_3886_curator$jscomp$1$$ = $JSCompiler_temp_const$jscomp$3829_map__45637_map__45637__$1$$ = $APP.$cljs$core$__destructure_map$$($JSCompiler_temp_const$jscomp$3829_map__45637_map__45637__$1$$), $G__45650$jscomp$inline_3887_JSCompiler_inline_result$jscomp$3830_name$jscomp$198$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($JSCompiler_temp_const$jscomp$3829_map__45637_map__45637__$1$$, 
                          $APP.$cljs$cst$191$name$$);
                          $JSCompiler_temp_const$jscomp$3829_map__45637_map__45637__$1$$ = $b__45601$$;
                          $G__45649$jscomp$inline_3885_G__45655$jscomp$inline_3886_curator$jscomp$1$$ = $APP.$helix$impl$props$merge_obj$$({"visible?":$visible_QMARK_$jscomp$2$$}, $APP.$helix$impl$props$_props$cljs$0core$0IFn$0_invoke$0arity$01$$($G__45649$jscomp$inline_3885_G__45655$jscomp$inline_3886_curator$jscomp$1$$));
                          $G__45649$jscomp$inline_3885_G__45655$jscomp$inline_3886_curator$jscomp$1$$ = {className:"pt-8 sm:pt-12 first:pt-0 first:border-t-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$curators_section$curator_card$$, $G__45649$jscomp$inline_3885_G__45655$jscomp$inline_3886_curator$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$curators_section$curator_card$$, 
                          $G__45649$jscomp$inline_3885_G__45655$jscomp$inline_3886_curator$jscomp$1$$)};
                          $G__45650$jscomp$inline_3887_JSCompiler_inline_result$jscomp$3830_name$jscomp$198$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__45649$jscomp$inline_3885_G__45655$jscomp$inline_3886_curator$jscomp$1$$, $G__45650$jscomp$inline_3887_JSCompiler_inline_result$jscomp$3830_name$jscomp$198$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45649$jscomp$inline_3885_G__45655$jscomp$inline_3886_curator$jscomp$1$$, 
                          $G__45650$jscomp$inline_3887_JSCompiler_inline_result$jscomp$3830_name$jscomp$198$$);
                          $JSCompiler_temp_const$jscomp$3829_map__45637_map__45637__$1$$.add($G__45650$jscomp$inline_3887_JSCompiler_inline_result$jscomp$3830_name$jscomp$198$$);
                          $i__45600$$ += 1;
                        } else {
                          return !0;
                        }
                      }
                    }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__45601$$), $amp$components$sections$curators_section$curators_section_render_$_iter__45598$$($APP.$cljs$core$_chunked_rest$$($s__45599__$2_temp__5823__auto__$jscomp$72$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__45601$$), null);
                  }
                  var $map__45671_map__45671__$1$$ = $APP.$cljs$core$first$$($s__45599__$2_temp__5823__auto__$jscomp$72$$), $curator$$ = $map__45671_map__45671__$1$$ = $APP.$cljs$core$__destructure_map$$($map__45671_map__45671__$1$$), $name$jscomp$197$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__45671_map__45671__$1$$, $APP.$cljs$cst$191$name$$);
                  return $APP.$cljs$core$cons$$(function() {
                    var $G__45697_G__45714$jscomp$inline_3565$$ = $APP.$helix$impl$props$merge_obj$$({"visible?":$visible_QMARK_$jscomp$2$$}, $APP.$helix$impl$props$_props$cljs$0core$0IFn$0_invoke$0arity$01$$($curator$$));
                    $G__45697_G__45714$jscomp$inline_3565$$ = {className:"pt-8 sm:pt-12 first:pt-0 first:border-t-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$curators_section$curator_card$$, $G__45697_G__45714$jscomp$inline_3565$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$curators_section$curator_card$$, $G__45697_G__45714$jscomp$inline_3565$$)};
                    var $G__45698$$ = $name$jscomp$197$$;
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__45697_G__45714$jscomp$inline_3565$$, $G__45698$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45697_G__45714$jscomp$inline_3565$$, $G__45698$$);
                  }(), $amp$components$sections$curators_section$curators_section_render_$_iter__45598$$($APP.$cljs$core$rest$$($s__45599__$2_temp__5823__auto__$jscomp$72$$)));
                }
                return null;
              }
            }, null, null);
          }($amp$components$sections$curators_section$curators$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45595$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45595$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__45578_map__45573_map__45573__$1_props__41634__auto__$jscomp$23_vec__45570_vec__45574$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__45578_map__45573_map__45573__$1_props__41634__auto__$jscomp$23_vec__45570_vec__45574$$);
};
$amp$components$sections$in_minor_keys$pull_quote$$ = function($G__45529_map__45514_map__45514__$1_props__41634__auto__$jscomp$24_vec__45511$$, $maybe_ref__41635__auto__$jscomp$24$$) {
  $G__45529_map__45514_map__45514__$1_props__41634__auto__$jscomp$24_vec__45511$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__45529_map__45514_map__45514__$1_props__41634__auto__$jscomp$24_vec__45511$$), $maybe_ref__41635__auto__$jscomp$24$$], null);
  $G__45529_map__45514_map__45514__$1_props__41634__auto__$jscomp$24_vec__45511$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45529_map__45514_map__45514__$1_props__41634__auto__$jscomp$24_vec__45511$$, 0, null);
  $G__45529_map__45514_map__45514__$1_props__41634__auto__$jscomp$24_vec__45511$$ = $APP.$cljs$core$__destructure_map$$($G__45529_map__45514_map__45514__$1_props__41634__auto__$jscomp$24_vec__45511$$);
  var $text$jscomp$16$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45529_map__45514_map__45514__$1_props__41634__auto__$jscomp$24_vec__45511$$, $APP.$cljs$cst$488$text$$), $attribution$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45529_map__45514_map__45514__$1_props__41634__auto__$jscomp$24_vec__45511$$, $cljs$cst$507$attribution$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__45529_map__45514_map__45514__$1_props__41634__auto__$jscomp$24_vec__45511$$ = function() {
    return {className:"border-l-2 border-white/20 pl-6 my-8", children:[function() {
      var $G__45533$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:$text$jscomp$16$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45533$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45533$$);
    }(), function() {
      var $G__45538$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$amp$styles$label_muted$$]))), children:"— " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($attribution$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__45538$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__45538$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__45529_map__45514_map__45514__$1_props__41634__auto__$jscomp$24_vec__45511$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__45529_map__45514_map__45514__$1_props__41634__auto__$jscomp$24_vec__45511$$);
};
$amp$components$sections$in_minor_keys$curator_card$$ = function($G__45607_map__45605_map__45605__$1_props__41634__auto__$jscomp$25_vec__45602$$, $maybe_ref__41635__auto__$jscomp$25$$) {
  $G__45607_map__45605_map__45605__$1_props__41634__auto__$jscomp$25_vec__45602$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__45607_map__45605_map__45605__$1_props__41634__auto__$jscomp$25_vec__45602$$), $maybe_ref__41635__auto__$jscomp$25$$], null);
  $G__45607_map__45605_map__45605__$1_props__41634__auto__$jscomp$25_vec__45602$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45607_map__45605_map__45605__$1_props__41634__auto__$jscomp$25_vec__45602$$, 0, null);
  $G__45607_map__45605_map__45605__$1_props__41634__auto__$jscomp$25_vec__45602$$ = $APP.$cljs$core$__destructure_map$$($G__45607_map__45605_map__45605__$1_props__41634__auto__$jscomp$25_vec__45602$$);
  var $visible_QMARK_$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45607_map__45605_map__45605__$1_props__41634__auto__$jscomp$25_vec__45602$$, $cljs$cst$506$visible_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $tag_style$jscomp$2$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$483$boxDecorationBreak$$, "clone", $cljs$cst$484$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__45607_map__45605_map__45605__$1_props__41634__auto__$jscomp$25_vec__45602$$ = function() {
    return {className:"sm:flex sm:gap-8 sm:items-start mb-10", children:[function() {
      var $G__45611_G__45615$jscomp$inline_3568$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/koyo.png", fit:"crop", "aspect-ratio":1, "active?":$visible_QMARK_$jscomp$3$$};
      $G__45611_G__45615$jscomp$inline_3568$$ = {className:"float-left mr-4 mb-2 sm:float-none sm:mr-0 sm:mb-0\n               w-24 aspect-square sm:w-40\n               flex-shrink-0 rounded-sm overflow-hidden", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__45611_G__45615$jscomp$inline_3568$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, 
      $G__45611_G__45615$jscomp$inline_3568$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45611_G__45615$jscomp$inline_3568$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45611_G__45615$jscomp$inline_3568$$);
    }(), function() {
      var $G__45630$$ = function() {
        return {className:"sm:flex-1 sm:min-w-0", children:[function() {
          var $G__45636_G__45641$jscomp$inline_3571$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-2 py-0.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$jscomp$2$$), children:"Koyo Kouoh"};
          $G__45636_G__45641$jscomp$inline_3571$$ = {className:"font-display font-bold uppercase tracking-wider\n                    text-lg sm:text-xl text-white dark:text-white mb-1 leading-relaxed", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__45636_G__45641$jscomp$inline_3571$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__45636_G__45641$jscomp$inline_3571$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45636_G__45641$jscomp$inline_3571$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45636_G__45641$jscomp$inline_3571$$);
        }(), function() {
          var $G__45708$$ = {className:"font-display font-medium text-xs uppercase tracking-[0.2em]\n                    text-amber-600 dark:text-amber-300/70 mb-3", children:"Curator, 61st Biennale Arte"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45708$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45708$$);
        }(), function() {
          var $G__45718$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$]))), children:"The curatorial statement for the 61st International Art Exhibition — La Biennale di Venezia — invites us to listen to the minor keys: the quiet tones, the lower frequencies, the persistent signals of earth and life."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45718$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45718$$);
        }(), function() {
          var $G__45737$$ = {className:"clear-both sm:hidden"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45737$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45737$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45630$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45630$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45607_map__45605_map__45605__$1_props__41634__auto__$jscomp$25_vec__45602$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45607_map__45605_map__45605__$1_props__41634__auto__$jscomp$25_vec__45602$$);
};
$amp$components$sections$in_minor_keys$preview$$ = function($G__45852_props__41634__auto__$jscomp$26_vec__45833$$) {
  $APP.$helix$core$extract_cljs_props$$($G__45852_props__41634__auto__$jscomp$26_vec__45833$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$18$$ = $APP.$helix$hooks$use_ref$$("imk-preview-ref");
  $G__45852_props__41634__auto__$jscomp$26_vec__45833$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$18$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$448$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45852_props__41634__auto__$jscomp$26_vec__45833$$, 0, null);
  var $visible_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45852_props__41634__auto__$jscomp$26_vec__45833$$, 1, null);
  $G__45852_props__41634__auto__$jscomp$26_vec__45833$$ = function() {
    return {className:"px-4", ref:$ref$jscomp$18$$, children:[function() {
      var $G__45868$$ = {"visible?":$visible_QMARK_$jscomp$4$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$curator_card$$, $G__45868$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$curator_card$$, $G__45868$$);
    }(), function() {
      var $G__45879$$ = function() {
        return {className:"text-center my-10 space-y-1", children:[function() {
          var $G__45963$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Take a deep breath]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45963$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45963$$);
        }(), function() {
          var $G__45974$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Exhale]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45974$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45974$$);
        }(), function() {
          var $G__45983$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Drop your shoulders]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45983$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45983$$);
        }(), function() {
          var $G__45997$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Close your eyes]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45997$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45997$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45879$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45879$$);
    }(), function() {
      var $G__46007$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-6"]))), children:"This is an invitation to encounter these words in the immediate physical, meteorological, ambient, and karmic conditions in which they meet you. To shift to a slower gear and tune in to the frequencies of the minor keys. Because, though often lost in the anxious cacophony of the present chaos raging through the world, the music continues. The songs of those producing beauty in spite of tragedy, the tunes of the fugitives recovering from the ruins, the harmonies of those repairing wounds and worlds."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46007$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46007$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45852_props__41634__auto__$jscomp$26_vec__45833$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45852_props__41634__auto__$jscomp$26_vec__45833$$);
};
$amp$components$sections$in_minor_keys$details$$ = function($G__46318_props__41634__auto__$jscomp$27_vec__46310$$) {
  $APP.$helix$core$extract_cljs_props$$($G__46318_props__41634__auto__$jscomp$27_vec__46310$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$19$$ = $APP.$helix$hooks$use_ref$$("imk-details-ref");
  $G__46318_props__41634__auto__$jscomp$27_vec__46310$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$19$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$448$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__46318_props__41634__auto__$jscomp$27_vec__46310$$, 0, null);
  var $visible_QMARK_$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__46318_props__41634__auto__$jscomp$27_vec__46310$$, 1, null);
  $G__46318_props__41634__auto__$jscomp$27_vec__46310$$ = function() {
    return {className:"px-4", ref:$ref$jscomp$19$$, children:[function() {
      var $G__46330$$ = {"visible?":$visible_QMARK_$jscomp$5$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$curator_card$$, $G__46330$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$curator_card$$, $G__46330$$);
    }(), function() {
      var $G__46338$$ = function() {
        return {className:"text-center my-10 space-y-1", children:[function() {
          var $G__46381$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Take a deep breath]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46381$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46381$$);
        }(), function() {
          var $G__46390$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Exhale]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46390$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46390$$);
        }(), function() {
          var $G__46410$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Drop your shoulders]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46410$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46410$$);
        }(), function() {
          var $G__46418$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:"[Close your eyes]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46418$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46418$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46338$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__46338$$);
    }(), function() {
      var $G__46425$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-6"]))), children:"This is an invitation to encounter these words in the immediate physical, meteorological, ambient, and karmic conditions in which they meet you. To shift to a slower gear and tune in to the frequencies of the minor keys. Because, though often lost in the anxious cacophony of the present chaos raging through the world, the music continues. The songs of those producing beauty in spite of tragedy, the tunes of the fugitives recovering from the ruins, the harmonies of those repairing wounds and worlds."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46425$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46425$$);
    }(), function() {
      var $G__46433$$ = {text:"There is a reason, after all, that some people wish to colonize the moon, and others dance before it as an ancient friend.", attribution:"James Baldwin, 1972"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$pull_quote$$, $G__46433$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$pull_quote$$, $G__46433$$);
    }(), function() {
      var $G__46439$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The minor key, in music, alludes both to the structure of a song and to its emotional effects. It is a rich idea, so rich that it quickly overflows its technical definition and spills with metaphor. It summons moods, the blues, the call-and-response, the morna, the second line, the lament, the allegory, the whisper."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46439$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46439$$);
    }(), function() {
      var $G__46443$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The minor keys refuse orchestral bombast and goose-step military marches and come alive in the quiet tones, the lower frequencies, the hums, the consolations of poetry, all portals of improvisation to the elsewhere and the otherwise. The minor keys ask for listening that calls on the emotions and sustains them in return."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46443$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46443$$);
    }(), function() {
      var $G__46449$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The minor keys are also the small islands, worlds amid oceans with distinct and endlessly rich ecosystems, social lives that are articulated, for better and worse, within much larger political forms and ecological stakes. Here, the evocation of the key and the island extends to an archipelago of oases: gardens, courtyards, compounds, lofts, dance floors — the other worlds that artists make, the intimate and convivial universes that refresh and sustain even in terrible times; indeed, especially in terrible times."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46449$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46449$$);
    }(), function() {
      var $G__46457$$ = {text:"Look at the creole garden, you put all species on such a little lick of land: avocados, lemons, yams, sugarcanes… plus thirty or forty other species on this bit of land that doesn’t go more than fifty feet up the side of the hill, they protect each other. In the great Circle, everything is in everything else.", attribution:"Édouard Glissant, 1993"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$pull_quote$$, $G__46457$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$pull_quote$$, $G__46457$$);
    }(), function() {
      var $G__46472$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"These are the cues for an exhibition; an exhibition tuned in to the minor keys; an exhibition that invites listening to the persistent signals of earth and life, connecting to soul frequencies. If, in music, the minor keys are often associated with strangeness, melancholy and sorrow, here their joy, solace, hope, and transcendence manifest as well."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46472$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46472$jscomp$1$$);
    }(), function() {
      var $G__46480$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"In the minor keys, sound and sensation are grounding, they hold the cadences, melodies, and silences of resonant worlds that gather and create together a polyphonous assembly of art, convening and communing in convivial collectivity, beaming across the void of alienation and the crackle of conflict."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46480$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46480$$);
    }(), function() {
      var $G__46488$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The 61st edition of the Biennale Arte is grounded in a deep belief in artists as the vital interpreters of the social and psychic condition and catalysts of new relations and possibilities."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46488$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46488$$);
    }(), function() {
      var $G__46497$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The exhibition’s composition is formed by artistic practices that open portals, that refresh and nourish, that prompt relation and relationship, that advance concept and form through networks and schools — understood freely and informally."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46497$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46497$$);
    }(), function() {
      var $G__46505$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The intended effect scrambles cohesion and dissonance in the manner of a free-jazz ensemble, or perhaps, at the scale of the Biennale Arte, a festival of ensembles with a common premise: that poetics liberate and people make beauty together."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46505$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46505$$);
    }(), function() {
      var $G__46509$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Through relation, sharing, and transcendence, the artists and practices that operate in this spirit, like jazz, across methods, scales, senses and forms, propose to visitors an exhibitional experience that is more sensory than didactic, renewing rather than exhausting, and fortifying for the work ahead."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46509$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46509$jscomp$1$$);
    }(), function() {
      var $G__46543$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Through a visual and meditative procession, the exhibition prompts all senses to interconnect and meander from one universe to the other, rendering visible the possibilities that reside in the in-between spaces and beyond the portals."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46543$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46543$jscomp$1$$);
    }(), function() {
      var $G__46557$$ = {text:"…there is no choice but to tune in like jazzmen to these imperative mutations. The jazzman constantly meditates on the unpredictable, stands within it according to the laws of polyrhythm, and improvises breathtaking moments. We small-island Caribbeans are not ready, but we have this resource. The change will have to be so profound that we will no doubt have to add to the knowledge of jazz, the old totemisms, animisms, analogisms, and other metaphysics too summarily discarded. These old-world poems are already precious scores.", 
      attribution:"Patrick Chamoiseau, 2023"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$pull_quote$$, $G__46557$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$pull_quote$$, $G__46557$$);
    }(), function() {
      var $G__46567$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"In this spirit, the international exhibition of the 61st Biennale Arte intends neither a litany of commentary on world events, nor an inattention or escape from compounding and continuous intersecting crises. Rather, it proposes a radical reconnection with art’s natural habitat and role in society: that is the emotional, the visual, the sensory, the affective, the subjective."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46567$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46567$$);
    }(), function() {
      var $G__46629$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"In Minor Keys are sequences of exhilarating journeys that address the sensate and the affective, inviting visitors to marvel, meditate, dream, revel, reflect, and commune in realms where time is not corporate property nor at the mercy of relentlessly accelerated productivity."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46629$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46629$$);
    }(), function() {
      var $G__46637$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"After all, it is clear by now that the enduring time of capital and empire maligned local, Indigenous and terrestrial knowledges as chimeric, and dismissed co-constitutive artistic practices as artisanal, intended for decoration or devotional rituals."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46637$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46637$$);
    }(), function() {
      var $G__46654$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The ‘civilizing mission’ flattens all with condescending contempt, and in the contemporary era entire societies and ecologies are regarded as collateral damage in the headstrong pursuit of growth supported by ruthlessness and greed. In refusing the spectacle of horror, the time has come to listen to the minor keys, to tune in sotto voce to the whispers, to the lower frequencies; to find the oases, the islands, where the dignity of all living beings is safeguarded."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46654$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46654$jscomp$1$$);
    }(), function() {
      var $G__46666$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The exhibition posits that such radical shifts are taking place — indeed, have been underway all along — in the minor keys, and the artists, poets, performers, and filmmakers whom the exhibition will convene are grounded in their commitments to realizing them. Artists are channels to and between the minor keys and listening to, rather than speaking for them is at the core of the curatorial conceit."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46666$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46666$jscomp$1$$);
    }(), function() {
      var $G__46676$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The exhibition In Minor Keys stands as a collective score composed together with artists who have built universes of imagination. Artists who work at the boundaries of form, and whose practices can be thought of as intricate melodies to be heard both collectively and on their own terms. These are artists whose practices seamlessly bleed into society."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46676$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46676$$);
    }(), function() {
      var $G__46685$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Artists who accommodate daily life as part of a logical and aesthetically consistent relation of parts. Artists who are exceedingly generous and hospitable to life."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46685$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46685$$);
    }(), function() {
      var $G__46693$$ = {text:"In our myths, in our songs, that’s where the seeds are. It is not possible to constantly hone on the crisis. You have to have the love and you have to have the magic, that’s also life.", attribution:"Toni Morrison, 1977"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$pull_quote$$, $G__46693$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$pull_quote$$, $G__46693$$);
    }(), function() {
      var $G__46702$$ = function() {
        return {className:"mt-12 mb-6 border-t border-white/10 pt-10", children:[function() {
          var $G__46709$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "mb-6"]))), children:"The Studio — In the Minor Keys"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__46709$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__46709$jscomp$1$$);
        }(), function() {
          var $G__46721$jscomp$1_JSCompiler_temp_const$jscomp$inline_3573$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
          var $G__46729$jscomp$inline_3575_JSCompiler_inline_result$jscomp$inline_3574$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
          $G__46729$jscomp$inline_3575_JSCompiler_inline_result$jscomp$inline_3574$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46729$jscomp$inline_3575_JSCompiler_inline_result$jscomp$inline_3574$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46729$jscomp$inline_3575_JSCompiler_inline_result$jscomp$inline_3574$$);
          $G__46721$jscomp$1_JSCompiler_temp_const$jscomp$inline_3573$$ = {className:$G__46721$jscomp$1_JSCompiler_temp_const$jscomp$inline_3573$$, children:["Zadik Zadikian’s ", $G__46729$jscomp$inline_3575_JSCompiler_inline_result$jscomp$inline_3574$$, " is a practice tuned precisely to these frequencies. In a pavilion where the brick — the most elementary building unit, unchanged for eleven millennia — is cast, stacked, disassembled, and reassembled over six months, simplicity becomes the method and the meaning."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46721$jscomp$1_JSCompiler_temp_const$jscomp$inline_3573$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__46721$jscomp$1_JSCompiler_temp_const$jscomp$inline_3573$$);
        }(), function() {
          var $G__46737$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__46743$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Doing the work."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46743$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46743$jscomp$1$$);
            }(), " The minor keys ask for sustained attention, not spectacle. In ", function() {
              var $G__46753$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46753$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46753$jscomp$1$$);
            }(), ", the act of making is neither performed nor concealed. Plaster is mixed, forms are poured, bricks emerge. Day after day, the labor itself is the statement — a refusal of the accelerated and the disposable in favor of the deliberate and the enduring."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46737$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__46737$$);
        }(), function() {
          var $G__46761$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__46765$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Making simple things."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46765$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46765$jscomp$1$$);
            }(), " Each brick is humble. It carries no narrative, bears no symbol. Like the creole garden where thirty species protect each other on a lick of land, the individual unit is modest. Its power lives not in what it represents but in what it ", function() {
              var $G__46772$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"is"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46772$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46772$$);
            }(), " — material presence, weight, color, surface."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46761$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__46761$$);
        }(), function() {
          var $G__46776_JSCompiler_temp_const$jscomp$inline_3577$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
          var $G__46780$jscomp$inline_3579_JSCompiler_inline_result$jscomp$inline_3578$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Higher-order structures from simplicity."};
          $G__46780$jscomp$inline_3579_JSCompiler_inline_result$jscomp$inline_3578$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46780$jscomp$inline_3579_JSCompiler_inline_result$jscomp$inline_3578$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46780$jscomp$inline_3579_JSCompiler_inline_result$jscomp$inline_3578$$);
          $G__46776_JSCompiler_temp_const$jscomp$inline_3577$$ = {className:$G__46776_JSCompiler_temp_const$jscomp$inline_3577$$, children:[$G__46780$jscomp$inline_3579_JSCompiler_inline_result$jscomp$inline_3578$$, " When stacked, these bricks become something else entirely. Composite forms emerge — not designed from above but discovered through assembly. The whole exceeds its parts, not through complexity of component, but through the patient, improvisational logic of combination. Like polyrhythm in jazz, coherence arises from the interplay of simple, repeating elements."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46776_JSCompiler_temp_const$jscomp$inline_3577$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__46776_JSCompiler_temp_const$jscomp$inline_3577$$);
        }(), function() {
          var $G__46788$jscomp$1_JSCompiler_temp_const$jscomp$inline_3581$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
          var $G__46802$jscomp$inline_3583_JSCompiler_inline_result$jscomp$inline_3582$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Simplicity is not ease."};
          $G__46802$jscomp$inline_3583_JSCompiler_inline_result$jscomp$inline_3582$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46802$jscomp$inline_3583_JSCompiler_inline_result$jscomp$inline_3582$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46802$jscomp$inline_3583_JSCompiler_inline_result$jscomp$inline_3582$$);
          $G__46788$jscomp$1_JSCompiler_temp_const$jscomp$inline_3581$$ = {className:$G__46788$jscomp$1_JSCompiler_temp_const$jscomp$inline_3581$$, children:[$G__46802$jscomp$inline_3583_JSCompiler_inline_result$jscomp$inline_3582$$, " To cast a perfect brick, to find the right pigment, to know which form belongs beside another — this is the discipline beneath the quiet surface. The minor keys sound gentle, but they demand the deepest listening. The studio is where that discipline lives: not in reaching for the obvious, but in reaching for the precise."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46788$jscomp$1_JSCompiler_temp_const$jscomp$inline_3581$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__46788$jscomp$1_JSCompiler_temp_const$jscomp$inline_3581$$);
        }(), function() {
          var $G__46808$jscomp$1$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__46812$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Reaching for the right tool."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46812$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46812$$);
            }(), " Zadikian does not reach for what is always close at hand. He reaches for what is right. The plaster, the mold, the trowel — each chosen not for convenience but for fidelity to the form. In this way, ", function() {
              var $G__46816$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46816$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46816$$);
            }(), " enacts the curatorial premise of In Minor Keys: that beauty is made together, through relation, through the handmade, through the refusal to shortcut the work that matters."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46808$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__46808$jscomp$1$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46702$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__46702$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46318_props__41634__auto__$jscomp$27_vec__46310$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__46318_props__41634__auto__$jscomp$27_vec__46310$$);
};
$amp$components$sections$in_minor_keys$in_minor_keys$$ = function($G__46855_id$jscomp$72_map__46833_props__41634__auto__$jscomp$28_vec__46830$$, $G__46862$jscomp$inline_3586_JSCompiler_inline_result$jscomp$inline_3585_idx$jscomp$70_maybe_ref__41635__auto__$jscomp$28$$) {
  $G__46855_id$jscomp$72_map__46833_props__41634__auto__$jscomp$28_vec__46830$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__46855_id$jscomp$72_map__46833_props__41634__auto__$jscomp$28_vec__46830$$), $G__46862$jscomp$inline_3586_JSCompiler_inline_result$jscomp$inline_3585_idx$jscomp$70_maybe_ref__41635__auto__$jscomp$28$$], null);
  $G__46855_id$jscomp$72_map__46833_props__41634__auto__$jscomp$28_vec__46830$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__46855_id$jscomp$72_map__46833_props__41634__auto__$jscomp$28_vec__46830$$, 0, null);
  var $map__46833__$1_title$jscomp$23$$ = $APP.$cljs$core$__destructure_map$$($G__46855_id$jscomp$72_map__46833_props__41634__auto__$jscomp$28_vec__46830$$);
  $G__46855_id$jscomp$72_map__46833_props__41634__auto__$jscomp$28_vec__46830$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__46833__$1_title$jscomp$23$$, $APP.$cljs$cst$200$id$$);
  $G__46862$jscomp$inline_3586_JSCompiler_inline_result$jscomp$inline_3585_idx$jscomp$70_maybe_ref__41635__auto__$jscomp$28$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__46833__$1_title$jscomp$23$$, $APP.$cljs$cst$440$idx$$);
  var $subtitle$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__46833__$1_title$jscomp$23$$, $APP.$cljs$cst$473$subtitle$$);
  $map__46833__$1_title$jscomp$23$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__46833__$1_title$jscomp$23$$, $APP.$cljs$cst$381$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__46862$jscomp$inline_3586_JSCompiler_inline_result$jscomp$inline_3585_idx$jscomp$70_maybe_ref__41635__auto__$jscomp$28$$ = {idx:$G__46862$jscomp$inline_3586_JSCompiler_inline_result$jscomp$inline_3585_idx$jscomp$70_maybe_ref__41635__auto__$jscomp$28$$, "section-hint":$subtitle$jscomp$2$$, title:$map__46833__$1_title$jscomp$23$$, "expand-button-label":"Read full statement", "preview-text":$amp$components$sections$in_minor_keys$preview$$, "full-text":$amp$components$sections$in_minor_keys$details$$};
  $G__46862$jscomp$inline_3586_JSCompiler_inline_result$jscomp$inline_3585_idx$jscomp$70_maybe_ref__41635__auto__$jscomp$28$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__46862$jscomp$inline_3586_JSCompiler_inline_result$jscomp$inline_3585_idx$jscomp$70_maybe_ref__41635__auto__$jscomp$28$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$elements$expandable_text_area$expandable_text_area_2$$, 
  $G__46862$jscomp$inline_3586_JSCompiler_inline_result$jscomp$inline_3585_idx$jscomp$70_maybe_ref__41635__auto__$jscomp$28$$);
  $G__46855_id$jscomp$72_map__46833_props__41634__auto__$jscomp$28_vec__46830$$ = {id:$G__46855_id$jscomp$72_map__46833_props__41634__auto__$jscomp$28_vec__46830$$, children:$G__46862$jscomp$inline_3586_JSCompiler_inline_result$jscomp$inline_3585_idx$jscomp$70_maybe_ref__41635__auto__$jscomp$28$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46855_id$jscomp$72_map__46833_props__41634__auto__$jscomp$28_vec__46830$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__46855_id$jscomp$72_map__46833_props__41634__auto__$jscomp$28_vec__46830$$);
};
$amp$components$sections$mobile_hero_section$mobile_hero_section$$ = function($G__45911_props__41634__auto__$jscomp$29_vec__45895$$) {
  $APP.$helix$core$extract_cljs_props$$($G__45911_props__41634__auto__$jscomp$29_vec__45895$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$4$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__45911_props__41634__auto__$jscomp$29_vec__45895$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ctx$jscomp$4$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$390$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45911_props__41634__auto__$jscomp$29_vec__45895$$, 0, null);
  var $is_active_QMARK_$jscomp$8$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45911_props__41634__auto__$jscomp$29_vec__45895$$, 1, null), $clone_style$jscomp$1$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$483$boxDecorationBreak$$, "clone", $cljs$cst$484$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__45911_props__41634__auto__$jscomp$29_vec__45895$$ = function() {
    return {id:"video", ref:$outer_ctx$jscomp$4$$, className:"relative w-full overflow-hidden", children:function() {
      var $G__45919$$ = function() {
        return {className:"w-full h-screen relative flex flex-col", children:[function() {
          var $G__45927_G__45935$jscomp$inline_3589$$ = {"allow-audio?":!1, "playback-id":"fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo", "should-play?":$is_active_QMARK_$jscomp$8$$};
          $G__45927_G__45935$jscomp$inline_3589$$ = {className:"absolute inset-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$mobile_hero_section$lazy_video_background$$, $G__45927_G__45935$jscomp$inline_3589$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$mobile_hero_section$lazy_video_background$$, $G__45927_G__45935$jscomp$inline_3589$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45927_G__45935$jscomp$inline_3589$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45927_G__45935$jscomp$inline_3589$$);
        }(), function() {
          var $G__45943$$ = function() {
            return {className:"absolute top-20 right-8 z-10", children:function() {
              var $G__45949$$ = function() {
                return {className:"cursor-pointer w-24 sm:w-28 lg:w-32", onClick:function() {
                  return window.open("https://www.labiennale.org/en/art/2026", "_blank");
                }, children:function() {
                  var $G__45967$$ = {src:"images/graphics/61_biennale_logo_red.svg", className:"opacity-90"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__45967$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__45967$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45949$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45949$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45943$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45943$$);
        }(), function() {
          var $G__45985$$ = function() {
            return {className:"relative z-10 flex-1 flex flex-col items-center justify-center px-8", children:[function() {
              var $G__45991$$ = {className:"w-4/5 sm:w-2/3 max-w-2xl aspect-square mb-10 bg-amber-300 opacity-90", style:{WebkitMaskImage:$APP.$helix$impl$props$__GT_js$$("url(images/graphics/the_studio_logo.svg)"), maskImage:$APP.$helix$impl$props$__GT_js$$("url(images/graphics/the_studio_logo.svg)"), WebkitMaskSize:$APP.$helix$impl$props$__GT_js$$("contain"), maskSize:$APP.$helix$impl$props$__GT_js$$("contain"), WebkitMaskRepeat:$APP.$helix$impl$props$__GT_js$$("no-repeat"), maskRepeat:$APP.$helix$impl$props$__GT_js$$("no-repeat"), 
              WebkitMaskPosition:$APP.$helix$impl$props$__GT_js$$("center"), maskPosition:$APP.$helix$impl$props$__GT_js$$("center")}};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45991$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45991$$);
            }(), function() {
              var $G__46011_G__46019$jscomp$inline_3592$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/50 px-3 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$jscomp$1$$), children:"Armenia Pavilion · 61st International Art Exhibition La Biennale di Venezia"};
              $G__46011_G__46019$jscomp$inline_3592$$ = {className:"font-display text-xs sm:text-sm uppercase tracking-[0.2em] max-w-md text-center leading-loose text-white/90", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46011_G__46019$jscomp$inline_3592$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46011_G__46019$jscomp$inline_3592$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46011_G__46019$jscomp$inline_3592$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46011_G__46019$jscomp$inline_3592$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45985$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45985$$);
        }(), function() {
          var $G__46028_G__46033$jscomp$inline_3595$$ = {className:"text-lg animate-bounce", children:"↓"};
          $G__46028_G__46033$jscomp$inline_3595$$ = {href:"#press-release", className:"absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-1\n                text-white/80 hover:text-white transition-colors\n                font-display text-xs uppercase tracking-[0.2em]", children:["Learn More", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46028_G__46033$jscomp$inline_3595$$) : $APP.$helix$core$jsx$$.call(null, 
          "span", $G__46028_G__46033$jscomp$inline_3595$$)]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__46028_G__46033$jscomp$inline_3595$$) : $APP.$helix$core$jsxs$$.call(null, "a", $G__46028_G__46033$jscomp$inline_3595$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45919$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45919$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45911_props__41634__auto__$jscomp$29_vec__45895$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45911_props__41634__auto__$jscomp$29_vec__45895$$);
};
$amp$components$sections$site_footer$site_footer$$ = function($G__308233_map__308221_props__41632__auto__$jscomp$10_vec__308218$$, $maybe_ref__41633__auto__$jscomp$10$$) {
  $G__308233_map__308221_props__41632__auto__$jscomp$10_vec__308218$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__308233_map__308221_props__41632__auto__$jscomp$10_vec__308218$$), $maybe_ref__41633__auto__$jscomp$10$$], null);
  $G__308233_map__308221_props__41632__auto__$jscomp$10_vec__308218$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__308233_map__308221_props__41632__auto__$jscomp$10_vec__308218$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__308233_map__308221_props__41632__auto__$jscomp$10_vec__308218$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$jscomp$1$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__308233_map__308221_props__41632__auto__$jscomp$10_vec__308218$$ = function() {
    return {className:"relative w-full font-display mt-12", children:[function() {
      var $G__308241$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308241$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308241$$);
    }(), function() {
      var $G__308249_G__308257$jscomp$inline_3991_G__308283$jscomp$inline_3992$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-xl lg:text-2xl italic font-light leading-relaxed", "text-slate-600  dark:text-slate-400"]))), children:"“The way you do anything is the way you do everything.”"};
      $G__308249_G__308257$jscomp$inline_3991_G__308283$jscomp$inline_3992$$ = {className:"max-w-3xl text-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__308249_G__308257$jscomp$inline_3991_G__308283$jscomp$inline_3992$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__308249_G__308257$jscomp$inline_3991_G__308283$jscomp$inline_3992$$)};
      $G__308249_G__308257$jscomp$inline_3991_G__308283$jscomp$inline_3992$$ = {className:"py-16 lg:py-24 px-6 flex justify-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__308249_G__308257$jscomp$inline_3991_G__308283$jscomp$inline_3992$$) : $APP.$helix$core$jsx$$.call(null, "blockquote", $G__308249_G__308257$jscomp$inline_3991_G__308283$jscomp$inline_3992$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308249_G__308257$jscomp$inline_3991_G__308283$jscomp$inline_3992$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__308249_G__308257$jscomp$inline_3991_G__308283$jscomp$inline_3992$$);
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
              var $G__308610$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"v" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("637a3e0")};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__308610$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__308610$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308601$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308601$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__308578$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__308578$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("footer", $G__308233_map__308221_props__41632__auto__$jscomp$10_vec__308218$$) : $APP.$helix$core$jsxs$$.call(null, "footer", $G__308233_map__308221_props__41632__auto__$jscomp$10_vec__308218$$);
};
$amp$components$sections$non_profit$title$$ = function($G__45877_G__45888$jscomp$inline_3995_G__45892$jscomp$inline_3996_props__41634__auto__$jscomp$30$$) {
  $APP.$helix$core$extract_cljs_props$$($G__45877_G__45888$jscomp$inline_3995_G__45892$jscomp$inline_3996_props__41634__auto__$jscomp$30$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__45877_G__45888$jscomp$inline_3995_G__45892$jscomp$inline_3996_props__41634__auto__$jscomp$30$$ = {className:"w-1", children:"support the Armenia Pavilion"};
  $G__45877_G__45888$jscomp$inline_3995_G__45892$jscomp$inline_3996_props__41634__auto__$jscomp$30$$ = {className:"flex flex-col", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__45877_G__45888$jscomp$inline_3995_G__45892$jscomp$inline_3996_props__41634__auto__$jscomp$30$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__45877_G__45888$jscomp$inline_3995_G__45892$jscomp$inline_3996_props__41634__auto__$jscomp$30$$)};
  $G__45877_G__45888$jscomp$inline_3995_G__45892$jscomp$inline_3996_props__41634__auto__$jscomp$30$$ = {className:"lg:flex\n                    w-full\n                    lg:h-2/5\n                    z-20\n                    items-center\n                    justify-between\n                    bg-black/10\n                    lg:p-12 p-4\n                    lg:text-6xl text-3xl\n                    font-display\n                    font-bold\n                    text-slate-800", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? 
  $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45877_G__45888$jscomp$inline_3995_G__45892$jscomp$inline_3996_props__41634__auto__$jscomp$30$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45877_G__45888$jscomp$inline_3995_G__45892$jscomp$inline_3996_props__41634__auto__$jscomp$30$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45877_G__45888$jscomp$inline_3995_G__45892$jscomp$inline_3996_props__41634__auto__$jscomp$30$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45877_G__45888$jscomp$inline_3995_G__45892$jscomp$inline_3996_props__41634__auto__$jscomp$30$$);
};
$amp$components$sections$non_profit$copy_block$$ = function($G__45978_map__45953_map__45953__$1_props__41634__auto__$jscomp$31_vec__45950$$, $maybe_ref__41635__auto__$jscomp$31$$) {
  $G__45978_map__45953_map__45953__$1_props__41634__auto__$jscomp$31_vec__45950$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__45978_map__45953_map__45953__$1_props__41634__auto__$jscomp$31_vec__45950$$), $maybe_ref__41635__auto__$jscomp$31$$], null);
  $G__45978_map__45953_map__45953__$1_props__41634__auto__$jscomp$31_vec__45950$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45978_map__45953_map__45953__$1_props__41634__auto__$jscomp$31_vec__45950$$, 0, null);
  $G__45978_map__45953_map__45953__$1_props__41634__auto__$jscomp$31_vec__45950$$ = $APP.$cljs$core$__destructure_map$$($G__45978_map__45953_map__45953__$1_props__41634__auto__$jscomp$31_vec__45950$$);
  var $title$jscomp$24$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45978_map__45953_map__45953__$1_props__41634__auto__$jscomp$31_vec__45950$$, $APP.$cljs$cst$381$title$$), $copy$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45978_map__45953_map__45953__$1_props__41634__auto__$jscomp$31_vec__45950$$, $cljs$cst$500$copy$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__45978_map__45953_map__45953__$1_props__41634__auto__$jscomp$31_vec__45950$$ = function() {
    return {className:"flex flex-col mb-12 font-display", children:[function() {
      var $G__46013$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:$title$jscomp$24$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46013$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46013$$);
    }(), function() {
      var $G__46024$$ = {className:"text-slate-800", children:$copy$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46024$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46024$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45978_map__45953_map__45953__$1_props__41634__auto__$jscomp$31_vec__45950$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45978_map__45953_map__45953__$1_props__41634__auto__$jscomp$31_vec__45950$$);
};
$amp$components$sections$non_profit$non_profit_section$$ = function($G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$, $maybe_ref__41635__auto__$jscomp$32$$) {
  $G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$), $maybe_ref__41635__auto__$jscomp$32$$], null);
  $G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$, 0, null);
  $G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$ = $APP.$cljs$core$__destructure_map$$($G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$, $cljs$cst$501$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$, $cljs$cst$498$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$, $cljs$cst$502$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$5$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$5$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$, 1, null);
  $G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$non_profit$images$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$, 1, null);
  $APP.$helix$hooks$use_ref$$("image-gallery-container-ref");
  $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$ = function() {
    return {ref:$outer_ctx$jscomp$5$$, className:"h-full \n                          w-full\n                          flex\n                          blue-purple-grad\n                          light-red-grad\n                          items-center\n                          justify-center\n                          font-display\n                          relative", children:function() {
      var $G__46106$$ = function() {
        return {className:"flex \n                                 flex-col\n                                 overflow-hidden\n                                 relative\n                                 w-full md:w-10/12 lg:w-full\n                                 lg:p-12 p-4", children:[function() {
          var $G__46112$$ = {};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$non_profit$title$$, $G__46112$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$non_profit$title$$, $G__46112$$);
        }(), function() {
          var $G__46116$$ = function() {
            return {className:"flex overflow-hidden relative", children:function() {
              var $G__46125$$ = function() {
                return {className:"lg:w-1/2 \n                                               lg:p-16 p-4", children:[function() {
                  var $G__46131$$ = {title:"", copy:"Funds go to keep THE STUDIO alive for six months in Venice.  Your support ensures the artist’s residency, covers materials and fabrication, pays our production crew, builds and ships the pavilion, and funds public programs and the exhibition catalogue.  Gifts are handled by Fallen Angels, a registered 501(c)(3) non‑profit; donations to a 501(c)(3) are tax‑deductible"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$non_profit$copy_block$$, $G__46131$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$non_profit$copy_block$$, $G__46131$$);
                }(), function() {
                  var $G__46143$$ = function() {
                    return {className:"flex flex-col mb-12 font-display", children:[function() {
                      var $G__46153$$ = {className:"font-bold text-4xl text-slate-800 lowercase", children:"What Your Donation Funds"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46153$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46153$$);
                    }(), function() {
                      var $G__46159$$ = function() {
                        return {className:"list-disc list-outside ml-5 text-slate-800", children:[function() {
                          var $G__46165$$ = {children:"Artist \x26 team residency in Venice"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__46165$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__46165$$);
                        }(), function() {
                          var $G__46175$$ = {children:"Fabrication materials and modular blocks"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__46175$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__46175$$);
                        }(), function() {
                          var $G__46276$$ = {children:"Production crew \x26 documentation (video, photography, editing)"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__46276$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__46276$$);
                        }(), function() {
                          var $G__46284$$ = {children:"Pavilion build‑out, shipping \x26 logistics"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__46284$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__46284$$);
                        }(), function() {
                          var $G__46290$$ = {children:"Public programs \x26 education"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__46290$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__46290$$);
                        }(), function() {
                          var $G__46328$$ = {children:"Archival filming \x26 catalogue"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__46328$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__46328$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ul", $G__46159$$) : $APP.$helix$core$jsxs$$.call(null, "ul", $G__46159$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46143$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__46143$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46125$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__46125$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46116$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__46116$$);
        }(), function() {
          var $G__46386$$ = function() {
            return {className:"lg:absolute lg:bottom-[40px] lg:left-1/2 lg:-translate-x-1/2", children:function() {
              var $G__46412$$ = function() {
                return {title:"Donate Now", "additional-classes":"text-2xl", "on-click":function() {
                  return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                }};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__46412$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__46412$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46386$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__46386$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46106$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__46106$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__46094_map__46063_map__46063__$1_props__41634__auto__$jscomp$32_vec__46060_vec__46072_vec__46078$$);
};
$amp$components$sections$team_section$team_member_card$$ = function($G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$, $data$jscomp$135_maybe_ref__41635__auto__$jscomp$33$$) {
  $G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$), $data$jscomp$135_maybe_ref__41635__auto__$jscomp$33$$], null);
  $G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$, 0, null);
  $G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$ = $APP.$cljs$core$__destructure_map$$($G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$);
  $data$jscomp$135_maybe_ref__41635__auto__$jscomp$33$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$, $APP.$cljs$cst$28$data$$);
  var $images$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$, $cljs$cst$497$images$$), $flash_images_handler$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$, $cljs$cst$510$flash_images_handler$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$ = $APP.$cljs$core$__destructure_map$$($data$jscomp$135_maybe_ref__41635__auto__$jscomp$33$$);
  var $name$jscomp$199$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$, $APP.$cljs$cst$191$name$$), $role$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$, $APP.$cljs$cst$503$role$$), $copy$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$, 
  $cljs$cst$500$copy$$), $social$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$, $cljs$cst$508$social$$), $email$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$, $cljs$cst$509$email$$);
  $G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$ = function() {
    return {className:"flex flex-col\n                    mb-16\n                    font-display text-gray-800", children:[function() {
      var $G__46145$$ = function() {
        return {className:"relative inline-block\n                           z-30\n                           w-fit\n                           -mb-6", onMouseEnter:function() {
          return $flash_images_handler$$.$cljs$core$IFn$_invoke$arity$1$ ? $flash_images_handler$$.$cljs$core$IFn$_invoke$arity$1$($images$jscomp$3$$) : $flash_images_handler$$.call(null, $images$jscomp$3$$);
        }, children:[function() {
          var $G__46157$$ = {className:"absolute inset-y-1 inset-x-0\n                                  translate-x-2 translate-y-2\n                                  warm-yellow\n                                  pointer-events-none"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46157$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__46157$$);
        }(), function() {
          var $G__46167$$ = {className:"relative z-10\n                                text-3xl whitespace-nowrap lg:text-2xl font-bold lowercase\n                                pointer-events-none", children:$name$jscomp$199$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46167$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46167$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46145$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__46145$$);
    }(), function() {
      var $G__46179$$ = {className:"text-6xl lg:text-8xl font-bold lowercase\n                         z-20\n                         mb-4", children:$role$jscomp$1$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46179$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46179$$);
    }(), function() {
      var $G__46183$$ = {className:"text-md text-gray-600", children:$copy$jscomp$3$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46183$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46183$$);
    }(), function() {
      var $G__46188$$ = {className:"my-4\n                          border-gray-900"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("hr", $G__46188$$) : $APP.$helix$core$jsx$$.call(null, "hr", $G__46188$$);
    }(), function() {
      var $G__46192$$ = {className:"text-md text-red-600", children:$social$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46192$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46192$$);
    }(), function() {
      var $G__46196$$ = {className:"text-md text-red-600", children:$email$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46196$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46196$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__46135_map__46075_map__46075__$1_map__46117__$1_props__41634__auto__$jscomp$33_vec__46069$$);
};
$amp$components$sections$team_section$team_members$$ = function($G__46254_map__46242_map__46242__$1_props__41634__auto__$jscomp$34_vec__46239$$, $maybe_ref__41635__auto__$jscomp$34$$) {
  $G__46254_map__46242_map__46242__$1_props__41634__auto__$jscomp$34_vec__46239$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__46254_map__46242_map__46242__$1_props__41634__auto__$jscomp$34_vec__46239$$), $maybe_ref__41635__auto__$jscomp$34$$], null);
  $G__46254_map__46242_map__46242__$1_props__41634__auto__$jscomp$34_vec__46239$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__46254_map__46242_map__46242__$1_props__41634__auto__$jscomp$34_vec__46239$$, 0, null);
  $G__46254_map__46242_map__46242__$1_props__41634__auto__$jscomp$34_vec__46239$$ = $APP.$cljs$core$__destructure_map$$($G__46254_map__46242_map__46242__$1_props__41634__auto__$jscomp$34_vec__46239$$);
  var $flash_images_handler$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__46254_map__46242_map__46242__$1_props__41634__auto__$jscomp$34_vec__46239$$, $cljs$cst$510$flash_images_handler$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__46254_map__46242_map__46242__$1_props__41634__auto__$jscomp$34_vec__46239$$ = function() {
    return {className:"w-full\n                  flex flex-col\n                  items-center justify-center\n                  \n                  ", children:function() {
      var $G__46262$$ = function() {
        return {className:"items-center justify-center\n                         w-full md:w-10/12\n                         lg:pl-32 px-8 py-16", children:[function() {
          var $G__46268$$ = {data:$amp$components$sections$team_section$tony_card_data$$, images:$amp$components$sections$team_section$tony_images$$, "flash-images-handler":$flash_images_handler$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_member_card$$, $G__46268$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_member_card$$, $G__46268$$);
        }(), function() {
          var $G__46272$$ = {data:$amp$components$sections$team_section$tina_card_data$$, images:$amp$components$sections$team_section$tina_images$$, "flash-images-handler":$flash_images_handler$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_member_card$$, $G__46272$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_member_card$$, $G__46272$$);
        }(), function() {
          var $G__46280$$ = {data:$amp$components$sections$team_section$zadik_card_data$$, images:$amp$components$sections$team_section$zadik_images$$, "flash-images-handler":$flash_images_handler$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_member_card$$, $G__46280$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_member_card$$, $G__46280$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46262$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__46262$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46254_map__46242_map__46242__$1_props__41634__auto__$jscomp$34_vec__46239$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__46254_map__46242_map__46242__$1_props__41634__auto__$jscomp$34_vec__46239$$);
};
$amp$components$sections$team_section$team_section$$ = function($G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$, $maybe_ref__41635__auto__$jscomp$35$$) {
  $G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$), $maybe_ref__41635__auto__$jscomp$35$$], null);
  $G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$, 0, null);
  $G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$ = $APP.$cljs$core$__destructure_map$$($G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$, $cljs$cst$501$gradient_class$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$, $cljs$cst$498$is_visible_QMARK_$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$, $cljs$cst$502$force_on_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ctx$jscomp$6$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$6$$);
  var $visited_QMARK_$jscomp$7$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$, 1, null);
  $G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$ = $APP.$helix$hooks$use_state$$($amp$components$sections$team_section$zadik_images$$);
  var $images$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$, 0, null), $set_images$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$, 1, null), $is_desktop_QMARK_$jscomp$4$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$(), $image_gallery_container_ref$jscomp$3$$ = 
  $APP.$helix$hooks$use_ref$$("image-gallery-container-ref");
  $G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$ = function() {
    return {ref:$outer_ctx$jscomp$6$$, className:"relative\n                        h-full w-full\n                        flex items-end justify-center\n                        pink-grad blue-light-grad", children:function() {
      var $G__46360$$ = function() {
        return {className:"relative\n                               flex\n                               overflow-hidden", children:[function() {
          var $G__46364_G__46369$jscomp$inline_3896$$ = {className:"overflow-hidden", style:{writingMode:$APP.$helix$impl$props$__GT_js$$("vertical-rl")}, children:"team.թիմ.équipe.equipo.squadra.team.թիմ.équipe.equipo.squadra.team"};
          $G__46364_G__46369$jscomp$inline_3896$$ = {className:"absolute left-0 top-0\n                                      font-display font-bold text-8xl\n                                      light-blue-font-color\n                                      opacity-30", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46364_G__46369$jscomp$inline_3896$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46364_G__46369$jscomp$inline_3896$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46364_G__46369$jscomp$inline_3896$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__46364_G__46369$jscomp$inline_3896$$);
        }(), function() {
          var $G__46377$$ = {"flash-images-handler":$set_images$jscomp$2$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$team_section$team_members$$, $G__46377$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$team_section$team_members$$, $G__46377$$);
        }(), $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$4$$) ? $visited_QMARK_$jscomp$7$$ : $is_desktop_QMARK_$jscomp$4$$) ? function() {
          var $G__46388_G__46398$jscomp$inline_3999_G__46406$jscomp$inline_4000_JSCompiler_inline_result$jscomp$inline_3998$$ = {images:$images$jscomp$4$$, "image-gallery-container-ref":$image_gallery_container_ref$jscomp$3$$};
          $G__46388_G__46398$jscomp$inline_3999_G__46406$jscomp$inline_4000_JSCompiler_inline_result$jscomp$inline_3998$$ = {className:"absolute h-full", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, $G__46388_G__46398$jscomp$inline_3999_G__46406$jscomp$inline_4000_JSCompiler_inline_result$jscomp$inline_3998$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$lazy_image_gallery$lazy_image_gallery$$, 
          $G__46388_G__46398$jscomp$inline_3999_G__46406$jscomp$inline_4000_JSCompiler_inline_result$jscomp$inline_3998$$)};
          $G__46388_G__46398$jscomp$inline_3999_G__46406$jscomp$inline_4000_JSCompiler_inline_result$jscomp$inline_3998$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46388_G__46398$jscomp$inline_3999_G__46406$jscomp$inline_4000_JSCompiler_inline_result$jscomp$inline_3998$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__46388_G__46398$jscomp$inline_3999_G__46406$jscomp$inline_4000_JSCompiler_inline_result$jscomp$inline_3998$$);
          $G__46388_G__46398$jscomp$inline_3999_G__46406$jscomp$inline_4000_JSCompiler_inline_result$jscomp$inline_3998$$ = {ref:$image_gallery_container_ref$jscomp$3$$, className:"relative\n                                        w-8/12\n                                        ml-8\n                                        overflow-hidden", children:$G__46388_G__46398$jscomp$inline_3999_G__46406$jscomp$inline_4000_JSCompiler_inline_result$jscomp$inline_3998$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46388_G__46398$jscomp$inline_3999_G__46406$jscomp$inline_4000_JSCompiler_inline_result$jscomp$inline_3998$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__46388_G__46398$jscomp$inline_3999_G__46406$jscomp$inline_4000_JSCompiler_inline_result$jscomp$inline_3998$$);
        }() : null]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46360$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__46360$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__46356_map__46326_map__46326__$1_props__41634__auto__$jscomp$35_vec__46323_vec__46341_vec__46344$$);
};
$amp$components$sections$video_section$video_section$$ = function($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$5_vec__149655_vec__149660$$, $G__149671$jscomp$inline_4003_G__149675$jscomp$inline_4004_JSCompiler_inline_result$jscomp$inline_4002_maybe_ref__41676__auto__$jscomp$5_playback_id$$) {
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$5_vec__149655_vec__149660$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$5_vec__149655_vec__149660$$), $G__149671$jscomp$inline_4003_G__149675$jscomp$inline_4004_JSCompiler_inline_result$jscomp$inline_4002_maybe_ref__41676__auto__$jscomp$5_playback_id$$], 
  null);
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$5_vec__149655_vec__149660$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$5_vec__149655_vec__149660$$, 0, null);
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$5_vec__149655_vec__149660$$ = $APP.$cljs$core$__destructure_map$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$5_vec__149655_vec__149660$$);
  $G__149671$jscomp$inline_4003_G__149675$jscomp$inline_4004_JSCompiler_inline_result$jscomp$inline_4002_maybe_ref__41676__auto__$jscomp$5_playback_id$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$5_vec__149655_vec__149660$$, $APP.$cljs$cst$511$playback_id$$);
  var $allow_audio_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$5_vec__149655_vec__149660$$, $APP.$cljs$cst$512$allow_audio_QMARK_$$, !0);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$5_vec__149655_vec__149660$$ = $APP.$amp$providers$main_provider$use_main_state$$();
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$5_vec__149655_vec__149660$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$5_vec__149655_vec__149660$$, 1, null);
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$5_vec__149655_vec__149660$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  var $is_active_QMARK_$jscomp$11_vec__149663$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$5_vec__149655_vec__149660$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$390$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$11_vec__149663$$, 0, null);
  $is_active_QMARK_$jscomp$11_vec__149663$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$11_vec__149663$$, 1, null);
  $G__149671$jscomp$inline_4003_G__149675$jscomp$inline_4004_JSCompiler_inline_result$jscomp$inline_4002_maybe_ref__41676__auto__$jscomp$5_playback_id$$ = {"playback-id":$G__149671$jscomp$inline_4003_G__149675$jscomp$inline_4004_JSCompiler_inline_result$jscomp$inline_4002_maybe_ref__41676__auto__$jscomp$5_playback_id$$, "allow-audio?":$allow_audio_QMARK_$$, "should-play?":$is_active_QMARK_$jscomp$11_vec__149663$$};
  $G__149671$jscomp$inline_4003_G__149675$jscomp$inline_4004_JSCompiler_inline_result$jscomp$inline_4002_maybe_ref__41676__auto__$jscomp$5_playback_id$$ = {className:"h-full\n                           w-full\n                           flex\n                           relative \n                           flex items-center justify-items-center justify-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$video_section$lazy_video_background$$, 
  $G__149671$jscomp$inline_4003_G__149675$jscomp$inline_4004_JSCompiler_inline_result$jscomp$inline_4002_maybe_ref__41676__auto__$jscomp$5_playback_id$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$video_section$lazy_video_background$$, $G__149671$jscomp$inline_4003_G__149675$jscomp$inline_4004_JSCompiler_inline_result$jscomp$inline_4002_maybe_ref__41676__auto__$jscomp$5_playback_id$$)};
  $G__149671$jscomp$inline_4003_G__149675$jscomp$inline_4004_JSCompiler_inline_result$jscomp$inline_4002_maybe_ref__41676__auto__$jscomp$5_playback_id$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149671$jscomp$inline_4003_G__149675$jscomp$inline_4004_JSCompiler_inline_result$jscomp$inline_4002_maybe_ref__41676__auto__$jscomp$5_playback_id$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149671$jscomp$inline_4003_G__149675$jscomp$inline_4004_JSCompiler_inline_result$jscomp$inline_4002_maybe_ref__41676__auto__$jscomp$5_playback_id$$);
  $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$5_vec__149655_vec__149660$$ = {id:"video", ref:$G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$5_vec__149655_vec__149660$$, className:"absolute\n                    h-full\n                    w-full\n                    overflow-hidden", children:$G__149671$jscomp$inline_4003_G__149675$jscomp$inline_4004_JSCompiler_inline_result$jscomp$inline_4002_maybe_ref__41676__auto__$jscomp$5_playback_id$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$5_vec__149655_vec__149660$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__149667_map__149658_map__149658__$1_outer_ctx$jscomp$7_props__41675__auto__$jscomp$5_vec__149655_vec__149660$$);
};
$amp$components$sections$quote_section$quote_section$$ = function($G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$6_vec__284246$$, $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$6_vec__284250_vec__284253$$) {
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$6_vec__284246$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$6_vec__284246$$), $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$6_vec__284250_vec__284253$$], 
  null);
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$6_vec__284246$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$6_vec__284246$$, 0, null);
  var $map__284249__$1_to$jscomp$10$$ = $APP.$cljs$core$__destructure_map$$($G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$6_vec__284246$$), $gradient_class$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $cljs$cst$501$gradient_class$$), $quote$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $cljs$cst$513$quote$$), $header$jscomp$5$$ = 
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $APP.$cljs$cst$333$header$$);
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$6_vec__284246$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $cljs$cst$498$is_visible_QMARK_$$);
  var $children$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $APP.$cljs$cst$101$children$$);
  $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$6_vec__284250_vec__284253$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $cljs$cst$514$from$$);
  $map__284249__$1_to$jscomp$10$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__284249__$1_to$jscomp$10$$, $cljs$cst$515$to$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $from_transition$$ = $APP.$cljs$core$truth_$$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$6_vec__284250_vec__284253$$) ? $APP.$cljs$core$clj__GT_js$$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$6_vec__284250_vec__284253$$) : {opacity:0, duration:0.5, ease:"expo.inOut", stagger:0.1}, $to_transition$$ = $APP.$cljs$core$truth_$$($map__284249__$1_to$jscomp$10$$) ? $APP.$cljs$core$clj__GT_js$$($map__284249__$1_to$jscomp$10$$) : 
  {opacity:1, duration:0.15, ease:"expo.inOut", stagger:0.025}, $outer_ctx$jscomp$8$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $text_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("text-ref");
  $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$6_vec__284250_vec__284253$$ = $APP.$helix$hooks$use_state$$(new $APP.$module$node_modules$gsap$dist$gsap$$.gsap.timeline({paused:!0}));
  var $tl$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$6_vec__284250_vec__284253$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$6_vec__284250_vec__284253$$, 1, null);
  $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$6_vec__284250_vec__284253$$ = $amp$hooks$use_scroll_trigger$use_scroll_trigger$$($outer_ctx$jscomp$8$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$6_vec__284250_vec__284253$$, 0, null);
  var $is_active_QMARK_$jscomp$12$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$6_vec__284250_vec__284253$$, 1, null);
  $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$6_vec__284250_vec__284253$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $splitter$jscomp$1$$ = $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($text_ref$jscomp$1$$)) ? new $APP.$module$node_modules$gsap$SplitText$$.SplitText($APP.$cljs$core$_deref$$($text_ref$jscomp$1$$), {type:"words,chars", charsClass:"playable-type-char"}) : null, $chars$jscomp$3$$ = $APP.$cljs$core$truth_$$($splitter$jscomp$1$$) ? $splitter$jscomp$1$$.chars : null, $ctx$jscomp$1$$ = $APP.$module$node_modules$gsap$dist$gsap$$.gsap.context(function() {
      return $tl$jscomp$2$$.from($chars$jscomp$3$$, $from_transition$$).to($chars$jscomp$3$$, $to_transition$$).timeScale(4);
    }, $outer_ctx$jscomp$8$$);
    return function() {
      return $ctx$jscomp$1$$.revert();
    };
  });
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$6_vec__284246$$ = [$quote$jscomp$1$$, $text_ref$jscomp$1$$, $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$6_vec__284246$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$6_vec__284250_vec__284253$$, $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$6_vec__284246$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$6_vec__284250_vec__284253$$, 
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$6_vec__284246$$);
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$6_vec__284246$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($is_active_QMARK_$jscomp$12$$) ? $tl$jscomp$2$$.play() : null;
  });
  $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$6_vec__284250_vec__284253$$ = [$is_active_QMARK_$jscomp$12$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$6_vec__284246$$, $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$6_vec__284250_vec__284253$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$6_vec__284246$$, 
  $G__284256_284286_G__284259_284289_from$jscomp$9_maybe_ref__41676__auto__$jscomp$6_vec__284250_vec__284253$$);
  $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$6_vec__284246$$ = function() {
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
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$6_vec__284246$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__284257_284287_G__284258_284288_G__284261_is_visible_QMARK_$jscomp$6_map__284249_props__41675__auto__$jscomp$6_vec__284246$$);
};
$amp$components$sections$work_overview$work_overview$$ = function($G__46065_props__41634__auto__$jscomp$36$$) {
  $APP.$helix$core$extract_cljs_props$$($G__46065_props__41634__auto__$jscomp$36$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__46065_props__41634__auto__$jscomp$36$$ = function() {
    return {"section-id":"about-work", children:function() {
      var $G__46077$$ = function() {
        return {className:"flex\n               grey-grad\n                  justify-center\n                  items-center\n                  flex-col\n                  w-full", children:function() {
          var $G__46084$$ = function() {
            return {className:"text-slate-300\n                   font-light\n                   flex\n                   justify-center\n                   flex-col\n                   h-full\n                   py-8\n                   md:w-3/4 w-full\n                   p-8\n                   text-lg\n                   lg:text-2xl", children:[function() {
              var $G__46090$$ = {className:"mt-12\n                        mb-16\n                        font-bold\n                        font-display\n                        text-5xl", children:"THE STUDIO"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46090$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46090$$);
            }(), function() {
              var $G__46096_G__46105$jscomp$inline_3612$$ = {className:"font-medium text-pink-600", children:":working-studio "};
              $G__46096_G__46105$jscomp$inline_3612$$ = {className:"mb-8", children:["For the full duration of the Biennale, the Armenia Pavilion becomes a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46096_G__46105$jscomp$inline_3612$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46096_G__46105$jscomp$inline_3612$$), "— Zadik Zadikian’s living laboratory, a site where form is made, unmade, and made again."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46096_G__46105$jscomp$inline_3612$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__46096_G__46105$jscomp$inline_3612$$);
            }(), function() {
              var $G__46114_G__46123$jscomp$inline_3615$$ = {className:"font-medium text-pink-600", children:":7–10 people"};
              $G__46114_G__46123$jscomp$inline_3615$$ = {className:"mb-8", children:["Each day, ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46114_G__46123$jscomp$inline_3615$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46114_G__46123$jscomp$inline_3615$$), " move through the space — assistants, fabricators, editors, camera crew — all part of a continuous organism of creation."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46114_G__46123$jscomp$inline_3615$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__46114_G__46123$jscomp$inline_3615$$);
            }(), function() {
              var $G__46137_G__46147$jscomp$inline_3618$$ = {className:"font-medium text-pink-600", children:":architecture-of-change"};
              $G__46137_G__46147$jscomp$inline_3618$$ = {className:"mb-8", children:["They produce thousands of modular units: lightweight foam forms hand-coated in thin plaster, each one a small gesture in a much larger ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46137_G__46147$jscomp$inline_3618$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46137_G__46147$jscomp$inline_3618$$), "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46137_G__46147$jscomp$inline_3618$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__46137_G__46147$jscomp$inline_3618$$);
            }(), function() {
              var $G__46206_G__46212$jscomp$inline_3621$$ = {className:"font-medium text-pink-600", children:"breath"};
              $G__46206_G__46212$jscomp$inline_3621$$ = {className:"mb-8", children:["These units are stacked into structures — walls, pyramids, horizons, interior architectures — shifting daily as fragile formations rise and dissolve like ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46206_G__46212$jscomp$inline_3621$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46206_G__46212$jscomp$inline_3621$$), "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46206_G__46212$jscomp$inline_3621$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__46206_G__46212$jscomp$inline_3621$$);
            }(), function() {
              var $G__46219_G__46223$jscomp$inline_3624$$ = {className:"font-medium text-pink-600", children:":The-artwork"};
              $G__46219_G__46223$jscomp$inline_3624$$ = {className:"mb-12 italic", children:["Nothing is static. Nothing is final. ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46219_G__46223$jscomp$inline_3624$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46219_G__46223$jscomp$inline_3624$$), " is the cycle itself — the rhythm of making, unmaking, and returning again to zero."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46219_G__46223$jscomp$inline_3624$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__46219_G__46223$jscomp$inline_3624$$);
            }(), function() {
              var $G__46236$$ = {className:"mb-8 italic", children:"In Minor Keys — The Philosophy of the Work"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46236$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46236$$);
            }(), function() {
              var $G__46248_G__46260$jscomp$inline_3627$$ = {className:"font-medium text-pink-600", children:":Structure"};
              $G__46248_G__46260$jscomp$inline_3627$$ = {className:"mb-8", children:["Here, repetition becomes a meditation. Labor becomes devotion. ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46248_G__46260$jscomp$inline_3627$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46248_G__46260$jscomp$inline_3627$$), " is only a temporary embodiment of an ongoing frequency."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46248_G__46260$jscomp$inline_3627$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__46248_G__46260$jscomp$inline_3627$$);
            }(), function() {
              var $G__46286_G__46297$jscomp$inline_3630$$ = {className:"font-medium text-pink-600", children:":organism"};
              $G__46286_G__46297$jscomp$inline_3630$$ = {className:"mb-8", children:["The studio behaves like an ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46286_G__46297$jscomp$inline_3630$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46286_G__46297$jscomp$inline_3630$$), " — sensitive, cyclical, and always in motion, responding to the theme of “In Minor Keys” through gestures rather than declarations."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46286_G__46297$jscomp$inline_3630$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__46286_G__46297$jscomp$inline_3630$$);
            }(), function() {
              var $G__46304_G__46315$jscomp$inline_3633$$ = {className:"font-medium text-pink-600", children:":quiet-resilience"};
              $G__46304_G__46315$jscomp$inline_3633$$ = {className:"mb-8", children:["The material language is intentionally light: foam, plaster, dust. Fragile materials meet fragile cycles — a nod to Armenian histories of endurance, where the act of repeating becomes a form of survival, a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46304_G__46315$jscomp$inline_3633$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46304_G__46315$jscomp$inline_3633$$), 
              "."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46304_G__46315$jscomp$inline_3633$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__46304_G__46315$jscomp$inline_3633$$);
            }(), function() {
              var $G__46334$$ = {className:"mb-8", children:"Nothing here reaches for spectacle. The work moves in frequencies, not fireworks. What matters is the pulse — the rhythm of stacking, filming, dismantling, and returning again to the beginning."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46334$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__46334$$);
            }(), function() {
              var $G__46348_G__46352$jscomp$inline_3636$$ = {className:"font-medium text-pink-600", children:":score"};
              $G__46348_G__46352$jscomp$inline_3636$$ = {className:"mb-8", children:["This cycle functions like a ", $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__46348_G__46352$jscomp$inline_3636$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__46348_G__46352$jscomp$inline_3636$$), ": a choreography of hands, blocks, dust, light. Each day, the studio composes itself anew, only to erase itself by night."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__46348_G__46352$jscomp$inline_3636$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__46348_G__46352$jscomp$inline_3636$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46084$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__46084$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46077$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__46077$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__46065_props__41634__auto__$jscomp$36$$, "about-work") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__46065_props__41634__auto__$jscomp$36$$, "about-work");
};
$APP.$amp$views$landing_view$landing_view$$ = function($G__46938$jscomp$1_props__41634__auto__$jscomp$37$$) {
  $APP.$helix$core$extract_cljs_props$$($G__46938$jscomp$1_props__41634__auto__$jscomp$37$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $container_ref$$ = $APP.$helix$hooks$use_ref$$("container-ref"), $is_desktop_QMARK_$jscomp$5$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__46938$jscomp$1_props__41634__auto__$jscomp$37$$ = function() {
    return {ref:$container_ref$$, className:$APP.$helix$impl$props$normalize_class$$("overflow-x-hidden grey-grad " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-900  dark:text-slate-100")), children:[function() {
      var $G__46944$jscomp$1_G__46948$jscomp$inline_3214$$ = {};
      $G__46944$jscomp$1_G__46948$jscomp$inline_3214$$ = {className:"fixed top-8 right-8 z-50", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$theme_toggle$theme_toggle$$, $G__46944$jscomp$1_G__46948$jscomp$inline_3214$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$theme_toggle$theme_toggle$$, $G__46944$jscomp$1_G__46948$jscomp$inline_3214$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46944$jscomp$1_G__46948$jscomp$inline_3214$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__46944$jscomp$1_G__46948$jscomp$inline_3214$$);
    }(), $APP.$cljs$core$truth_$$($is_desktop_QMARK_$jscomp$5$$) ? function() {
      var $G__46950$jscomp$1$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$navs$logo_nav$logo_nav$$, $G__46950$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$navs$logo_nav$logo_nav$$, $G__46950$jscomp$1$$);
    }() : null, function() {
      var $G__46952$jscomp$1_G__46957$jscomp$inline_3217$$ = {};
      $G__46952$jscomp$1_G__46957$jscomp$inline_3217$$ = {"section-id":"hero", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, $G__46952$jscomp$1_G__46957$jscomp$inline_3217$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, $G__46952$jscomp$1_G__46957$jscomp$inline_3217$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__46952$jscomp$1_G__46957$jscomp$inline_3217$$, "hero") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__46952$jscomp$1_G__46957$jscomp$inline_3217$$, "hero");
    }(), function() {
      var $G__46959_G__46964$jscomp$inline_3220$$ = {};
      $G__46959_G__46964$jscomp$inline_3220$$ = {"section-id":"teaser", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$teaser_section$teaser_section$$, $G__46959_G__46964$jscomp$inline_3220$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$teaser_section$teaser_section$$, $G__46959_G__46964$jscomp$inline_3220$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__46959_G__46964$jscomp$inline_3220$$, "teaser") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$section$section$$, $G__46959_G__46964$jscomp$inline_3220$$, "teaser");
    }(), function() {
      var $G__46966$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$("w-full max-w-full overflow-x-hidden flex justify-center"), children:function() {
          var $G__46970$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("flex flex-col " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("w-full lg:w-8/12 min-w-0")), children:[function() {
              var $G__46978$jscomp$1$$ = {id:"press-release", title:"Press Release"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$sections$press_release$press_release$$, $G__46978$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$sections$press_release$press_release$$, $G__46978$jscomp$1$$);
            }(), function() {
              var $G__46986$jscomp$1$$ = {id:"about-studio", title:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$sections$about_studio$about_studio$$, $G__46986$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$sections$about_studio$about_studio$$, $G__46986$jscomp$1$$);
            }(), function() {
              var $G__46994$jscomp$1$$ = {id:"in-minor-keys", title:"In Minor Keys"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$in_minor_keys$in_minor_keys$$, $G__46994$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$in_minor_keys$in_minor_keys$$, $G__46994$jscomp$1$$);
            }(), function() {
              var $G__47002$$ = {id:"artist", title:"The Artist"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$artist_section$artist_section$$, $G__47002$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$artist_section$artist_section$$, $G__47002$$);
            }(), function() {
              var $G__47010$jscomp$1$$ = {id:"curators", title:"Curators"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$curators_section$curators_section$$, $G__47010$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$curators_section$curators_section$$, $G__47010$jscomp$1$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46970$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__46970$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46966$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__46966$$);
    }(), function() {
      var $G__47018$jscomp$1$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$site_footer$site_footer$$, $G__47018$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$site_footer$site_footer$$, $G__47018$jscomp$1$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__46938$jscomp$1_props__41634__auto__$jscomp$37$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__46938$jscomp$1_props__41634__auto__$jscomp$37$$);
};
$cljs$cst$497$images$$ = new $APP.$cljs$core$Keyword$$(null, "images", "images", 1757475080);
$cljs$cst$506$visible_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "visible?", "visible?", 2129863715);
$cljs$cst$514$from$$ = new $APP.$cljs$core$Keyword$$(null, "from", "from", 1815293044);
$cljs$cst$498$is_visible_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "is-visible?", "is-visible?", 1902717363);
$cljs$cst$490$on_click_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-click-handler", "on-click-handler", 746440723);
$cljs$cst$502$force_on_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "force-on?", "force-on?", -971910051);
$cljs$cst$499$image_gallery_container_ref$$ = new $APP.$cljs$core$Keyword$$(null, "image-gallery-container-ref", "image-gallery-container-ref", 984527810);
$cljs$cst$501$gradient_class$$ = new $APP.$cljs$core$Keyword$$(null, "gradient-class", "gradient-class", 37945374);
$cljs$cst$495$target_ref$$ = new $APP.$cljs$core$Keyword$$(null, "target-ref", "target-ref", -164384803);
$cljs$cst$504$img$$ = new $APP.$cljs$core$Keyword$$(null, "img", "img", 1442687358);
$cljs$cst$483$boxDecorationBreak$$ = new $APP.$cljs$core$Keyword$$(null, "boxDecorationBreak", "boxDecorationBreak", 826536500);
$cljs$cst$493$writing$$ = new $APP.$cljs$core$Keyword$$(null, "writing", "writing", -1486865108);
$cljs$cst$510$flash_images_handler$$ = new $APP.$cljs$core$Keyword$$(null, "flash-images-handler", "flash-images-handler", -431066401);
$cljs$cst$496$other$$ = new $APP.$cljs$core$Keyword$$(null, "other", "other", 995793544);
$cljs$cst$492$on_mouse_out_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-mouse-out-handler", "on-mouse-out-handler", -2132576332);
$cljs$cst$484$WebkitBoxDecorationBreak$$ = new $APP.$cljs$core$Keyword$$(null, "WebkitBoxDecorationBreak", "WebkitBoxDecorationBreak", 1903427859);
$cljs$cst$491$on_mouse_over_handler$$ = new $APP.$cljs$core$Keyword$$(null, "on-mouse-over-handler", "on-mouse-over-handler", -1708524524);
$cljs$cst$507$attribution$$ = new $APP.$cljs$core$Keyword$$(null, "attribution", "attribution", 1937239286);
$cljs$cst$494$click$$ = new $APP.$cljs$core$Keyword$$(null, "click", "click", 1912301393);
$cljs$cst$508$social$$ = new $APP.$cljs$core$Keyword$$(null, "social", "social", -1560314971);
$cljs$cst$513$quote$$ = new $APP.$cljs$core$Keyword$$(null, "quote", "quote", -262615245);
$cljs$cst$487$hover_title_ref$$ = new $APP.$cljs$core$Keyword$$(null, "hover-title-ref", "hover-title-ref", -819024146);
$cljs$cst$505$bio$$ = new $APP.$cljs$core$Keyword$$(null, "bio", "bio", -331851886);
$cljs$cst$486$sm$$ = new $APP.$cljs$core$Keyword$$(null, "sm", "sm", -1402575065);
$cljs$cst$509$email$$ = new $APP.$cljs$core$Keyword$$(null, "email", "email", 1415816706);
$cljs$cst$515$to$$ = new $APP.$cljs$core$Keyword$$(null, "to", "to", 192099007);
$cljs$cst$489$is_playing_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "is-playing?", "is-playing?", -274112098);
$cljs$cst$500$copy$$ = new $APP.$cljs$core$Keyword$$(null, "copy", "copy", -1077617309);
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
var $amp$components$sections$about_biennale$images$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/biennale/metalocus_venice-biennale-corderie-arsenale-photo-giulio-squillacciotti_01.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/biennale/arsenale-venezia.jpg", 
$APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/biennale/6431873131_844b5c6d48_b-112659047.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/biennale/Edificio-E-delle-Sale-dArmi-sud-Arsenale-di-Venezia_01-406863818.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/biennale/GettyImages-1396739612-2882003488.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/biennale/arsenale-venezia-cosa-vedere-come-visitare-408454160.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/biennale/Pavilions-tours-plan.png", 
$APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/biennale/Pavilions-tours-plan.png", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/biennale/IMG_1754-scaled-1386547518.jpg", $APP.$cljs$cst$438$caption$$, null], null)], null);
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
var $amp$components$sections$curators_section$curators$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$name$$, "Tony Shafrazi", $APP.$cljs$cst$503$role$$, "Curator", $cljs$cst$504$img$$, "https://atd-722658831.imgix.net/committee/tony.png", $cljs$cst$505$bio$$, "Tony Shafrazi (b. 1943, Abadan, Iran) is a renowned art dealer, gallerist, and curator. Trained at the Royal College of Art in London, he moved to New York in 1969 and opened the Tony Shafrazi Gallery in 1979, championing Jean-Michel Basquiat, Keith Haring, and Kenny Scharf alongside Picasso, Francis Bacon, and Warhol. He first met Zadik Zadikian while the artist was working with Richard Serra, and has supported his work for decades."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$name$$, "Tina Chakarian", $APP.$cljs$cst$503$role$$, "Curator", $cljs$cst$504$img$$, "https://atd-722658831.imgix.net/committee/tina.png", $cljs$cst$505$bio$$, "Tina Chakarian is a curator based in Boston and Yerevan. Born in Beirut, she studied Visual Arts at UCLA and Tufts University. Since 2015, she has served as Commissioner and Development Director of the Armenian Pavilion at La Biennale di Venezia, playing a central role in shaping Armenia’s sustained presence on the global stage."], 
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
var $amp$components$sections$mobile_hero_section$lazy_video_background$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$components$elements$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null) : 
(void 0).call(null, $amp$components$sections$mobile_hero_section$mobile_hero_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$mobile_hero_section$mobile_hero_section$$, "amp.components.sections.mobile-hero-section/mobile-hero-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$site_footer$site_footer$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $amp$components$sections$site_footer$site_footer$$, 
"(use-scroll-to-id)", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$site_footer$site_footer$$, "amp.components.sections.site-footer/site-footer"));
var $amp$components$sections$non_profit$images$$ = new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/biennale/metalocus_venice-biennale-corderie-arsenale-photo-giulio-squillacciotti_01.jpg", $APP.$cljs$cst$438$caption$$, "Arsenale", $APP.$cljs$cst$439$credit$$, "Artnews"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$426$src$$, 
"https://atd-722658831.imgix.net/biennale/arsenale-venezia.jpg", $APP.$cljs$cst$438$caption$$, "Arsenale", $APP.$cljs$cst$439$credit$$, "Artnews"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/biennale/6431873131_844b5c6d48_b-112659047.jpg", $APP.$cljs$cst$438$caption$$, "Arsenale", $APP.$cljs$cst$439$credit$$, "Artnews"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$title$$, "", null, null) : (void 0).call(null, $amp$components$sections$non_profit$title$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$title$$, 
"amp.components.sections.non-profit/title"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$copy_block$$, "", null, null) : (void 0).call(null, $amp$components$sections$non_profit$copy_block$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$copy_block$$, "amp.components.sections.non-profit/copy-block"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$non_profit$non_profit_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', 
null, null) : (void 0).call(null, $amp$components$sections$non_profit$non_profit_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx)(hooks/use-state images)(hooks/use-ref "image-gallery-container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$non_profit$non_profit_section$$, "amp.components.sections.non-profit/non-profit-section"));
var $amp$components$sections$team_section$zadik_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/zadik/shovel-nails.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/zadik/zz-portrait.tiff", $APP.$cljs$cst$438$caption$$, 
null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/zadik/single_stack_1970s.tif", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/zadik/golden_water_heater.tif", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-10.psd", 
$APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-76.psd", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/zadik/golden_kitchen.tif", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/2.webp", 
$APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/zadik/ps1_entrance_1.tif", 
$APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/zadik/Untitled-18.psd", 
$APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/2.webp?fit\x3dcrop\x26w\x3d214\x26h\x3d172\x26dpr\x3d2\x26q\x3d50\x26auto\x3dformat%2Ccompress\x26cacheID\x3d1763536997", $APP.$cljs$cst$438$caption$$, null], null)], null), $amp$components$sections$team_section$tina_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 20, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/2.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/full_back-1.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/3.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/artwork/0.webp", $APP.$cljs$cst$438$caption$$, null], null)], null), $amp$components$sections$team_section$tony_images$$ = new $APP.$cljs$core$PersistentVector$$(null, 22, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", 
$APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, 
[$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, 
"https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$438$caption$$, 
null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", $APP.$cljs$cst$438$caption$$, null], null), 
new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, 
"https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg", 
$APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, 
[$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg", $APP.$cljs$cst$438$caption$$, null], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$426$src$$, "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg", 
$APP.$cljs$cst$438$caption$$, null], null)], null), $amp$components$sections$team_section$tony_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$191$name$$, "Tony Shafrazi", $APP.$cljs$cst$503$role$$, "Curator", $cljs$cst$508$social$$, "@tonyshafrazi", $cljs$cst$509$email$$, "tony.shafrazi@armenianpavilion2026.org", $cljs$cst$500$copy$$, "Tony Shafrazi (b. 1943, Abadan, Iran) is a renowned art dealer, gallerist, and curator whose career has shaped the contemporary art world. Trained at the Royal College of Art in London, he moved to New York in 1969 and soon became closely associated with figures such as Andy Warhol, Roy Lichtenstein, and Leo Castelli. His early years were marked by bold artistic interventions, before establishing himself as one of the leading dealers of his generation.\n                      \n                      In 1979, he opened the Tony Shafrazi Gallery in New York, championing artists like Jean-Michel Basquiat, Keith Haring, and Kenny Scharf, alongside exhibitions of Picasso, Francis Bacon, Jasper Johns, Carl Andre, and Warhol. Internationally, he advised the Tehran Museum of Contemporary Art in assembling one of the most significant collections of Western modernism outside Europe and the United States.\n                      \n                      Shafrazi first met Zadik Zadikian while the artist was working with Richard Serra, later including him in his historic Tehran exhibition before the 1979 Revolution. Their collaboration forged a lasting connection, and Shafrazi has supported Zadikian’s work over the decades. For this project, he brings unrivaled experience, a global network, and a deep commitment to presenting Armenia on the world stage at the Venice Biennale."], 
null), $amp$components$sections$team_section$tina_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$191$name$$, "Tina Chakarian", $APP.$cljs$cst$503$role$$, "Curator", $cljs$cst$508$social$$, "@tinachakarian", $cljs$cst$509$email$$, "tina.chakarian@armenianpavilion2026.org", $cljs$cst$500$copy$$, "Tina Chakarian is a curator currently living in Boston and Yerevan. \n\nBorn and raised in Beirut, Lebanon, she studied Visual Arts at UCLA and Tufts University. \n\nShe was previously the Development Director at the Armenian Museum of America and an adjunct Professor at several Boston based universities.  Tina serves as a Principal and Creative Director at Chakarian Design Group, LLC, and, co-curates the Midway Artists Studios in Boston. \n\nAs a visual artist, Tina has exhibited a number of installations in the U.S., Lebanon and Armenia, including “Living Utopias” (Yerevan, 2018). \n\nShe has decades of experience in the field of philanthropy, where she combines her skills as an artist and fundraiser, to help support organizations and initiatives closest to her heart. \n"], 
null), $amp$components$sections$team_section$zadik_card_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$191$name$$, "Zadik Zadikian", $APP.$cljs$cst$503$role$$, "Artist", $cljs$cst$508$social$$, "@zadikzadikian", $cljs$cst$509$email$$, "zadik.zadikian@armenianpavilion2026.org", $cljs$cst$500$copy$$, "Born in 1948 in Yerevan, Soviet Armenia, Zadik Zadikian entered the Art Academy at fifteen and exhibited in Yerevan and Moscow before escaping the Soviet Union at nineteen by swimming across the Arax River in winter. In 1969 he arrived in San Francisco, apprenticing with sculptor Beniamino Bufano, and later moved to New York where he assisted Richard Serra on his first monumental oil-stick wall drawings—one of which was named after him. These encounters with scale, discipline, and radical form became the foundation of his artistic language.\n\nIn 1976, Zadikian gilded his entire 10,000-square-foot studio in industrial gold, an immersive act of transformation that anticipated his project 1000 Bricks Gilded in 24-Karat Gold Leaf (1978). Since then, gold has remained his central medium—at once alchemical and architectural, extravagant yet elemental. His brick-like forms distill structure into essence, revealing permanence through repetition and beauty within order.\n\nReflecting on exile, Zadikian writes: “When I escaped, I lost everything—my family, my country, my world. That void became my canvas. Gold is the witness. Beauty is found within structure. Repetition is the foundation of change.” Now based in Los Angeles, he has recently exhibited at the Brooklyn Museum and Tony Shafrazi’s Gallery Without Walls."], 
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