(function(){
'use strict';
var $amp$pages$venue$page$lang_toggle$$, $amp$pages$venue$page$walking_directions$$, $amp$pages$venue$page$water_taxi_directions$$, $amp$pages$venue$page$getting_there_section$$, $amp$pages$venue$page$hero_section$$, $amp$pages$venue$page$about_section$$, $amp$pages$venue$page$studio_section$$, $amp$pages$venue$page$outdoor_section$$, $amp$pages$venue$page$arsenale_section$$, $cljs$cst$782$entrance_warn$$, $cljs$cst$784$entrance_name$$, $cljs$cst$796$on_change$$, $cljs$cst$787$route_steps$$, $cljs$cst$790$before_body$$, 
$cljs$cst$795$lang$$, $cljs$cst$788$route_title$$, $cljs$cst$781$address_title$$, $cljs$cst$791$map_caption$$, $cljs$cst$793$before_quote$$, $cljs$cst$783$entrance_title$$, $cljs$cst$786$authorized$$, $cljs$cst$789$entrance_body$$, $cljs$cst$779$en$$, $cljs$cst$792$marine_label$$, $cljs$cst$785$entrance_lead$$, $cljs$cst$794$it$$, $cljs$cst$780$before_title$$;
$amp$pages$venue$page$lang_toggle$$ = function($G__41268_props__34324__auto__$jscomp$18$$, $maybe_ref__34325__auto__$jscomp$18$$) {
  var $vec__41262$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__41268_props__34324__auto__$jscomp$18$$), $maybe_ref__34325__auto__$jscomp$18$$], null), $map__41265$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__41262$$, 0, null), $map__41265__$1$$ = $APP.$cljs$core$__destructure_map$$($map__41265$$), $lang$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__41265__$1$$, 
  $cljs$cst$795$lang$$), $on_change$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__41265__$1$$, $cljs$cst$796$on_change$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__41268_props__34324__auto__$jscomp$18$$ = function() {
    return {className:"flex items-center gap-4 mb-6", children:function() {
      return function $amp$pages$venue$page$lang_toggle_render_$_iter__41271$$($s__41272$$) {
        return new $APP.$cljs$core$LazySeq$$(null, function() {
          for (;;) {
            var $temp__5823__auto__$jscomp$113$$ = $APP.$cljs$core$seq$$($s__41272$$);
            if ($temp__5823__auto__$jscomp$113$$) {
              var $s__41272__$2$$ = $temp__5823__auto__$jscomp$113$$;
              if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__41272__$2$$)) {
                var $c__5626__auto__$jscomp$30$$ = $APP.$cljs$core$_chunked_first$$($s__41272__$2$$), $size__5627__auto__$jscomp$30$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$30$$), $b__41274$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$30$$);
                return function() {
                  for (var $i__41273$$ = 0;;) {
                    if ($i__41273$$ < $size__5627__auto__$jscomp$30$$) {
                      var $vec__41280$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$30$$, $i__41273$$), $k$jscomp$363$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__41280$$, 0, null), $label$jscomp$17$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__41280$$, 1, null);
                      $APP.$cljs$core$chunk_append$$($b__41274$$, function() {
                        var $G__41289$$ = function() {
                          return {type:"button", onClick:function($i__41273$jscomp$1$$, $G__41288$jscomp$1$$, $vec__41280$jscomp$1$$, $k$jscomp$364$$, $label$jscomp$18$$, $c__5626__auto__$jscomp$31$$, $size__5627__auto__$jscomp$31$$, $b__41274$jscomp$1$$, $s__41272__$2$jscomp$1$$, $temp__5823__auto__$jscomp$114$$, $G__41267$jscomp$1$$, $vec__41262$jscomp$1$$, $map__41265$jscomp$1$$, $map__41265__$1$jscomp$1$$, $lang$jscomp$1$$, $on_change$jscomp$3$$) {
                            return function() {
                              return $on_change$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_change$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$($k$jscomp$364$$) : $on_change$jscomp$3$$.call(null, $k$jscomp$364$$);
                            };
                          }($i__41273$$, "button", $vec__41280$$, $k$jscomp$363$$, $label$jscomp$17$$, $c__5626__auto__$jscomp$30$$, $size__5627__auto__$jscomp$30$$, $b__41274$$, $s__41272__$2$$, $temp__5823__auto__$jscomp$113$$, "div", $vec__41262$$, $map__41265$$, $map__41265__$1$$, $lang$$, $on_change$jscomp$2$$), "aria-pressed":$APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($k$jscomp$363$$, $lang$$), className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", 
                          "font-semibold", "uppercase", "tracking-[0.15em]", "text-sm", "py-2 pr-2", "hover:text-pink-600 dark:hover:text-pink-300 transition-colors", $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($k$jscomp$363$$, $lang$$) ? $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-pink-700   dark:text-pink-300", "underline underline-offset-4 decoration-2"])) : "text-slate-500  dark:text-slate-500"]))), 
                          children:$label$jscomp$17$$};
                        }(), $G__41290$$ = $APP.$cljs$core$name$$($k$jscomp$363$$);
                        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("button", $G__41289$$, $G__41290$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__41289$$, $G__41290$$);
                      }());
                      $i__41273$$ += 1;
                    } else {
                      return !0;
                    }
                  }
                }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__41274$$), $amp$pages$venue$page$lang_toggle_render_$_iter__41271$$($APP.$cljs$core$_chunked_rest$$($s__41272__$2$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__41274$$), null);
              }
              var $vec__41315$$ = $APP.$cljs$core$first$$($s__41272__$2$$), $k$jscomp$362$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__41315$$, 0, null), $label$jscomp$16$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__41315$$, 1, null);
              return $APP.$cljs$core$cons$$(function() {
                var $G__41325$$ = function() {
                  return {type:"button", onClick:function($G__41324$jscomp$1$$, $vec__41315$jscomp$1$$, $k$jscomp$365$$, $label$jscomp$19$$, $s__41272__$2$jscomp$2$$, $temp__5823__auto__$jscomp$115$$, $G__41267$jscomp$2$$, $vec__41262$jscomp$2$$, $map__41265$jscomp$2$$, $map__41265__$1$jscomp$2$$, $lang$jscomp$2$$, $on_change$jscomp$4$$) {
                    return function() {
                      return $on_change$jscomp$4$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_change$jscomp$4$$.$cljs$core$IFn$_invoke$arity$1$($k$jscomp$365$$) : $on_change$jscomp$4$$.call(null, $k$jscomp$365$$);
                    };
                  }("button", $vec__41315$$, $k$jscomp$362$$, $label$jscomp$16$$, $s__41272__$2$$, $temp__5823__auto__$jscomp$113$$, "div", $vec__41262$$, $map__41265$$, $map__41265__$1$$, $lang$$, $on_change$jscomp$2$$), "aria-pressed":$APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($k$jscomp$362$$, $lang$$), className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", 
                  "font-semibold", "uppercase", "tracking-[0.15em]", "text-sm", "py-2 pr-2", "hover:text-pink-600 dark:hover:text-pink-300 transition-colors", $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($k$jscomp$362$$, $lang$$) ? $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-pink-700   dark:text-pink-300", "underline underline-offset-4 decoration-2"])) : "text-slate-500  dark:text-slate-500"]))), children:$label$jscomp$16$$};
                }(), $G__41326$$ = $APP.$cljs$core$name$$($k$jscomp$362$$);
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("button", $G__41325$$, $G__41326$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__41325$$, $G__41326$$);
              }(), $amp$pages$venue$page$lang_toggle_render_$_iter__41271$$($APP.$cljs$core$rest$$($s__41272__$2$$)));
            }
            return null;
          }
        }, null, null);
      }(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$794$it$$, "Italiano"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$779$en$$, "English"], null)], null));
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41268_props__34324__auto__$jscomp$18$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__41268_props__34324__auto__$jscomp$18$$);
};
$amp$pages$venue$page$walking_directions$$ = function($G__41376_map__41362_props__34324__auto__$jscomp$19_vec__41359$$, $maybe_ref__34325__auto__$jscomp$19$$) {
  $G__41376_map__41362_props__34324__auto__$jscomp$19_vec__41359$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__41376_map__41362_props__34324__auto__$jscomp$19_vec__41359$$), $maybe_ref__34325__auto__$jscomp$19$$], null);
  $G__41376_map__41362_props__34324__auto__$jscomp$19_vec__41359$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__41376_map__41362_props__34324__auto__$jscomp$19_vec__41359$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__41376_map__41362_props__34324__auto__$jscomp$19_vec__41359$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $is_desktop_QMARK_$jscomp$2$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__41376_map__41362_props__34324__auto__$jscomp$19_vec__41359$$ = function() {
    return {className:"mb-16", children:[function() {
      var $G__41380$$ = function() {
        return {className:"px-4", children:[function() {
          var $G__41388$$ = {text:"On Foot"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$sub_heading$$, $G__41388$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$sub_heading$$, $G__41388$$);
        }(), function() {
          var $G__41396$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["The pavilion sits inside the Arsenale, roughly an ", function() {
              var $G__41409$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"eight-minute walk"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41409$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41409$$);
            }(), " from the crossing at the ", function() {
              var $G__41413$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Piraeus Lion"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41413$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41413$$);
            }(), ". Follow the highlighted route on the map to ", function() {
              var $G__41419$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Tesa 41"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41419$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41419$$);
            }(), "."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41396$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__41396$$);
        }(), function() {
          var $G__41423_G__41427$jscomp$inline_3933$$ = {title:"Address"};
          $G__41423_G__41427$jscomp$inline_3933$$ = {className:"mb-8", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$address_block$$, $G__41423_G__41427$jscomp$inline_3933$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$address_block$$, $G__41423_G__41427$jscomp$inline_3933$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41423_G__41427$jscomp$inline_3933$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__41423_G__41427$jscomp$inline_3933$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41380$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41380$$);
    }(), function() {
      var $G__41431$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$map_button$$, $G__41431$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$map_button$$, $G__41431$$);
    }(), function() {
      var $G__41433$$ = function() {
        return {className:"mb-6", children:[function() {
          var $G__41437$$ = {dev:!1, "interactive?":$is_desktop_QMARK_$jscomp$2$$, "initial-view":$APP.$amp$pages$venue$map_config$initial_view$$, "ant-paths":$APP.$amp$pages$venue$map_config$ant_paths$$, layers:$APP.$amp$pages$venue$map_config$layers$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$map$mapbox_map$$, $G__41437$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$map$mapbox_map$$, $G__41437$$);
        }(), function() {
          var $G__41441$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "italic", "text-slate-600  dark:text-slate-400", "mt-4 px-4"]))), children:"Walking path from the crossing to the pavilion — approximately 8 minutes"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41441$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__41441$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41433$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41433$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41376_map__41362_props__34324__auto__$jscomp$19_vec__41359$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41376_map__41362_props__34324__auto__$jscomp$19_vec__41359$$);
};
$amp$pages$venue$page$water_taxi_directions$$ = function($G__41525_map__41498_props__34324__auto__$jscomp$20_vec__41493_vec__41509$$, $maybe_ref__34325__auto__$jscomp$20$$) {
  $G__41525_map__41498_props__34324__auto__$jscomp$20_vec__41493_vec__41509$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__41525_map__41498_props__34324__auto__$jscomp$20_vec__41493_vec__41509$$), $maybe_ref__34325__auto__$jscomp$20$$], null);
  $G__41525_map__41498_props__34324__auto__$jscomp$20_vec__41493_vec__41509$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__41525_map__41498_props__34324__auto__$jscomp$20_vec__41493_vec__41509$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__41525_map__41498_props__34324__auto__$jscomp$20_vec__41493_vec__41509$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__41525_map__41498_props__34324__auto__$jscomp$20_vec__41493_vec__41509$$ = $APP.$helix$hooks$use_state$$($cljs$cst$794$it$$);
  var $lang$jscomp$3$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__41525_map__41498_props__34324__auto__$jscomp$20_vec__41493_vec__41509$$, 0, null), $set_lang$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__41525_map__41498_props__34324__auto__$jscomp$20_vec__41493_vec__41509$$, 1, null), $c$jscomp$227$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$pages$venue$page$water_taxi_copy$$, $lang$jscomp$3$$);
  $G__41525_map__41498_props__34324__auto__$jscomp$20_vec__41493_vec__41509$$ = function() {
    return {className:"mb-8", children:[function() {
      var $G__41535$$ = function() {
        return {className:"px-4", children:[function() {
          var $G__41545$$ = {text:"By Water Taxi"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$sub_heading$$, $G__41545$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$sub_heading$$, $G__41545$$);
        }(), function() {
          var $G__41556$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["Water taxis can bring guests directly to the pavilion’s landing inside the ", function() {
              var $G__41565$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Arsenale Militare"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41565$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41565$$);
            }(), ". Access is approved by the Marine Office, but the driver must follow the procedure below. ", function() {
              var $G__41573$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"Show these instructions to your driver — they are in Italian by default, with English available."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41573$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41573$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41556$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__41556$$);
        }(), function() {
          var $G__41584$$ = {lang:$lang$jscomp$3$$, "on-change":$set_lang$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$lang_toggle$$, $G__41584$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$lang_toggle$$, $G__41584$$);
        }(), function() {
          var $G__41590$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "mb-1"]))), children:$APP.$cljs$cst$288$title$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h4", $G__41590$$) : $APP.$helix$core$jsx$$.call(null, "h4", $G__41590$$);
        }(), function() {
          var $G__41603$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$label_muted$$, "mb-6"]))), children:$APP.$cljs$cst$775$subtitle$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41603$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__41603$$);
        }(), function() {
          var $G__41616$$ = function() {
            return {className:"space-y-3 mb-8", children:[function() {
              var $G__41622$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, $APP.$amp$styles$em_strong$$]))), children:$APP.$cljs$core$first$$($cljs$cst$786$authorized$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41622$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__41622$$);
            }(), function() {
              var $G__41640$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:$APP.$cljs$core$second$$($cljs$cst$786$authorized$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41640$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__41640$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41616$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41616$$);
        }(), function() {
          var $G__41651$$ = function() {
            return {className:"mb-8", children:function() {
              var $G__41657$$ = {children:[function() {
                var $G__41659$$ = {text:$cljs$cst$780$before_title$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$), "warn?":!0};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$mini_heading$$, $G__41659$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$mini_heading$$, $G__41659$$);
              }(), function() {
                var $G__41664$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-2"]))), children:$cljs$cst$790$before_body$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41664$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__41664$$);
              }(), function() {
                var $G__41668$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$, "mb-4"]))), children:$cljs$cst$793$before_quote$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41668$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__41668$$);
              }(), function() {
                var $G__41672$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$label_muted$$, "mb-1"]))), children:$cljs$cst$792$marine_label$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41672$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__41672$$);
              }(), function() {
                var $G__41676$$ = $APP.$helix$impl$props$merge_obj$$({}, $APP.$helix$impl$props$_props$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$amp$ui$directions$marine_office_phone$$));
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$phone_link$$, $G__41676$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$phone_link$$, $G__41676$$);
              }()]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$callout$$, $G__41657$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$ui$directions$callout$$, $G__41657$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41651$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__41651$$);
        }(), function() {
          var $G__41680$$ = function() {
            return {className:"mb-8", children:function() {
              var $G__41684$$ = {children:[function() {
                var $G__41686$$ = {text:$cljs$cst$783$entrance_title$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$), "warn?":!0};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$mini_heading$$, $G__41686$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$mini_heading$$, $G__41686$$);
              }(), function() {
                var $G__41690$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-2"]))), children:$cljs$cst$785$entrance_lead$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41690$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__41690$$);
              }(), function() {
                var $G__41694$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-semibold", "text-lg", "text-slate-900  dark:text-slate-100", "mb-3"]))), children:$cljs$cst$784$entrance_name$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41694$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__41694$$);
              }(), function() {
                var $G__41698$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-2"]))), children:$cljs$cst$789$entrance_body$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41698$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__41698$$);
              }(), function() {
                var $G__41702$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-body", "text-base", "font-medium", "text-rose-600   dark:text-rose-400", "leading-relaxed"]))), children:$cljs$cst$782$entrance_warn$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41702$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__41702$$);
              }()]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$callout$$, $G__41684$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$ui$directions$callout$$, $G__41684$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41680$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__41680$$);
        }(), function() {
          var $G__41707$$ = function() {
            return {className:"mb-8", children:[function() {
              var $G__41711$$ = {text:$cljs$cst$788$route_title$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$mini_heading$$, $G__41711$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$mini_heading$$, $G__41711$$);
            }(), function() {
              var $G__41716$$ = {steps:$cljs$cst$787$route_steps$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$numbered_steps$$, $G__41716$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$numbered_steps$$, $G__41716$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41707$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41707$$);
        }(), function() {
          var $G__41724_G__41730$jscomp$inline_3936$$ = {title:$cljs$cst$781$address_title$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
          $G__41724_G__41730$jscomp$inline_3936$$ = {className:"mb-8", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$address_block$$, $G__41724_G__41730$jscomp$inline_3936$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$address_block$$, $G__41724_G__41730$jscomp$inline_3936$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41724_G__41730$jscomp$inline_3936$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__41724_G__41730$jscomp$inline_3936$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41535$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41535$$);
    }(), function() {
      var $G__41740$$ = function() {
        return {className:"mb-8", children:[function() {
          var $G__41744$$ = {src:"/images/graphics/water_taxi_route.jpg", alt:"Map of the Arsenale showing the only permitted water taxi entrance at Rio delle Galeazze and the route south to the Armenian Pavilion drop-off point", loading:"lazy", className:"w-full h-auto"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__41744$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__41744$$);
        }(), function() {
          var $G__41750$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "italic", "text-slate-600  dark:text-slate-400", "mt-4 px-4"]))), children:$cljs$cst$791$map_caption$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41750$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__41750$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41740$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41740$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41525_map__41498_props__34324__auto__$jscomp$20_vec__41493_vec__41509$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41525_map__41498_props__34324__auto__$jscomp$20_vec__41493_vec__41509$$);
};
$amp$pages$venue$page$getting_there_section$$ = function($G__41772_map__41770_props__34324__auto__$jscomp$21_vec__41767$$, $maybe_ref__34325__auto__$jscomp$21$$) {
  $G__41772_map__41770_props__34324__auto__$jscomp$21_vec__41767$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__41772_map__41770_props__34324__auto__$jscomp$21_vec__41767$$), $maybe_ref__34325__auto__$jscomp$21$$], null);
  $G__41772_map__41770_props__34324__auto__$jscomp$21_vec__41767$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__41772_map__41770_props__34324__auto__$jscomp$21_vec__41767$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__41772_map__41770_props__34324__auto__$jscomp$21_vec__41767$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__41772_map__41770_props__34324__auto__$jscomp$21_vec__41767$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$("pb-10 sm:pb-12"), children:[function() {
      var $G__41776$$ = function() {
        return {className:"px-4", children:[function() {
          var $G__41781$$ = {text:"Directions"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__41781$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__41781$$);
        }(), function() {
          var $G__41785$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$venue$page$venue_display$$, "mb-8"]))), children:"Getting There"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__41785$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__41785$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41776$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41776$$);
    }(), function() {
      var $G__41789$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$walking_directions$$, $G__41789$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$walking_directions$$, $G__41789$$);
    }(), function() {
      var $G__41791$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$water_taxi_directions$$, $G__41791$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$water_taxi_directions$$, $G__41791$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41772_map__41770_props__34324__auto__$jscomp$21_vec__41767$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41772_map__41770_props__34324__auto__$jscomp$21_vec__41767$$);
};
$amp$pages$venue$page$hero_section$$ = function($G__41835_map__41826_props__34324__auto__$jscomp$22_vec__41823$$, $maybe_ref__34325__auto__$jscomp$22$$) {
  $G__41835_map__41826_props__34324__auto__$jscomp$22_vec__41823$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__41835_map__41826_props__34324__auto__$jscomp$22_vec__41823$$), $maybe_ref__34325__auto__$jscomp$22$$], null);
  $G__41835_map__41826_props__34324__auto__$jscomp$22_vec__41823$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__41835_map__41826_props__34324__auto__$jscomp$22_vec__41823$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__41835_map__41826_props__34324__auto__$jscomp$22_vec__41823$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__41835_map__41826_props__34324__auto__$jscomp$22_vec__41823$$ = function() {
    return {className:"pt-10 pb-4 px-4", children:[function() {
      var $G__41839$$ = {text:"Venice · Arsenale Militare"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__41839$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__41839$$);
    }(), function() {
      var $G__41854$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$venue$page$venue_display$$, "mb-8"]))), children:"Visit the pavilion"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__41854$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__41854$$);
    }(), function() {
      var $G__41873$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-4"]))), children:["The Armenia Pavilion unfolds across ", function() {
          var $G__41884$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"two sites"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41884$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41884$$);
        }(), " within the historic Arsenale of Venice. Reach it ", function() {
          var $G__41898$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"on foot"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41898$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41898$$);
        }(), " through the Biennale grounds, or arrive by ", function() {
          var $G__41920$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"water taxi"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41920$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41920$$);
        }(), " directly at the pavilion’s landing."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41873$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__41873$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41835_map__41826_props__34324__auto__$jscomp$22_vec__41823$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41835_map__41826_props__34324__auto__$jscomp$22_vec__41823$$);
};
$amp$pages$venue$page$about_section$$ = function($G__41976_map__41973_props__34324__auto__$jscomp$23_vec__41970$$, $maybe_ref__34325__auto__$jscomp$23$$) {
  $G__41976_map__41973_props__34324__auto__$jscomp$23_vec__41970$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__41976_map__41973_props__34324__auto__$jscomp$23_vec__41970$$), $maybe_ref__34325__auto__$jscomp$23$$], null);
  $G__41976_map__41973_props__34324__auto__$jscomp$23_vec__41970$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__41976_map__41973_props__34324__auto__$jscomp$23_vec__41970$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__41976_map__41973_props__34324__auto__$jscomp$23_vec__41970$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__41976_map__41973_props__34324__auto__$jscomp$23_vec__41970$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["pb-10 sm:pb-12", "px-4"]))), children:[function() {
      var $G__41985$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$venue$page$venue_display$$, "mb-8"]))), children:"About"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__41985$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__41985$$);
    }(), function() {
      var $G__41989$$ = function() {
        return {className:"space-y-6", children:[function() {
          var $G__41993$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_lg$$), children:["The Armenia Pavilion unfolds across ", function() {
              var $G__41997$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"two sites"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41997$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41997$$);
            }(), " within the historic Arsenale of Venice—a ", function() {
              var $G__42005$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"5,000-square-foot interior studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42005$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42005$$);
            }(), " and a monumental ", function() {
              var $G__42013$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"outdoor sculpture"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42013$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42013$$);
            }(), " at the gates of the complex."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41993$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__41993$$);
        }(), function() {
          var $G__42021_JSCompiler_temp_const$jscomp$inline_3938$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$);
          var $G__42029$jscomp$inline_3940_JSCompiler_inline_result$jscomp$inline_3939$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"a place for study, for work, to create, share, and exhibit"};
          $G__42029$jscomp$inline_3940_JSCompiler_inline_result$jscomp$inline_3939$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42029$jscomp$inline_3940_JSCompiler_inline_result$jscomp$inline_3939$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42029$jscomp$inline_3940_JSCompiler_inline_result$jscomp$inline_3939$$);
          $G__42021_JSCompiler_temp_const$jscomp$inline_3938$$ = {className:$G__42021_JSCompiler_temp_const$jscomp$inline_3938$$, children:["Together they form a single constellation: ", $G__42029$jscomp$inline_3940_JSCompiler_inline_result$jscomp$inline_3939$$, ". Over six months the Pavilion operates not as a static exhibition ", "but as a living workshop—open, evolving, and built in real time."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__42021_JSCompiler_temp_const$jscomp$inline_3938$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__42021_JSCompiler_temp_const$jscomp$inline_3938$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41989$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41989$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41976_map__41973_props__34324__auto__$jscomp$23_vec__41970$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41976_map__41973_props__34324__auto__$jscomp$23_vec__41970$$);
};
$amp$pages$venue$page$studio_section$$ = function($G__42081_map__42076_props__34324__auto__$jscomp$24_vec__42073_vec__42077$$, $maybe_ref__34325__auto__$jscomp$24$$) {
  $G__42081_map__42076_props__34324__auto__$jscomp$24_vec__42073_vec__42077$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__42081_map__42076_props__34324__auto__$jscomp$24_vec__42073_vec__42077$$), $maybe_ref__34325__auto__$jscomp$24$$], null);
  $G__42081_map__42076_props__34324__auto__$jscomp$24_vec__42073_vec__42077$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__42081_map__42076_props__34324__auto__$jscomp$24_vec__42073_vec__42077$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__42081_map__42076_props__34324__auto__$jscomp$24_vec__42073_vec__42077$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$14$$ = $APP.$helix$hooks$use_ref$$("studio-ref");
  $G__42081_map__42076_props__34324__auto__$jscomp$24_vec__42073_vec__42077$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$$($ref$jscomp$14$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__42081_map__42076_props__34324__auto__$jscomp$24_vec__42073_vec__42077$$, 0, null);
  var $is_visible_QMARK_$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__42081_map__42076_props__34324__auto__$jscomp$24_vec__42073_vec__42077$$, 1, null);
  $G__42081_map__42076_props__34324__auto__$jscomp$24_vec__42073_vec__42077$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$("pb-10 sm:pb-12"), children:[function() {
      var $G__42086$$ = function() {
        return {className:"px-4", children:[function() {
          var $G__42090$$ = {text:"Interior · Tesa 41"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__42090$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__42090$$);
        }(), function() {
          var $G__42094$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$venue$page$venue_display$$, "mb-8"]))), children:"The Studio"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__42094$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__42094$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__42086$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__42086$$);
    }(), function() {
      var $G__42099$$ = function() {
        return {className:"px-4 space-y-6", children:[function() {
          var $G__42103$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_lg$$), children:[function() {
              var $G__42107$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Tesa 41"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42107$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42107$$);
            }(), " is the primary studio and exhibition space for the Armenia Pavilion—", function() {
              var $G__42111$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"5,000 square feet"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42111$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42111$$);
            }(), " of expansive industrial volume within the Arsenale that functions as the ", function() {
              var $G__42119$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"operational and conceptual heart"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42119$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42119$$);
            }(), " of the project."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__42103$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__42103$$);
        }(), function() {
          var $G__42129$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:["Here, the Pavilion operates as a ", function() {
              var $G__42135$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"working studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42135$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42135$$);
            }(), " rather than a static exhibition—a place of continuous ", function() {
              var $G__42143$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"making"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42143$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42143$$);
            }(), ", ", function() {
              var $G__42151$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"stacking"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42151$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42151$$);
            }(), ", ", function() {
              var $G__42159$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"dismantling"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42159$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42159$$);
            }(), ", and ", function() {
              var $G__42167$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"rebuilding"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42167$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42167$$);
            }(), ". The interior volume allows the work to expand ", function() {
              var $G__42173$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"horizontally"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42173$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42173$$);
            }(), " and ", function() {
              var $G__42181$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"vertically"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42181$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42181$$);
            }(), ", accommodating both monumental arrangements and intimate moments of material attention."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__42129$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__42129$$);
        }(), function() {
          var $G__42192$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:["Defined by scale, clarity, and architectural restraint, the space is built for sustained ", function() {
              var $G__42196$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"fabrication"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42196$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42196$$);
            }(), ", ", function() {
              var $G__42201$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"assembly"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42201$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42201$$);
            }(), ", and ", function() {
              var $G__42205$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"reconfiguration"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42205$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42205$$);
            }(), " across the full duration of the Biennale."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__42192$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__42192$$);
        }(), function() {
          var $G__42214_JSCompiler_temp_const$jscomp$inline_3942$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$])));
          var $G__42226$jscomp$inline_3944_JSCompiler_inline_result$jscomp$inline_3943$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"the studio as the artwork itself"};
          $G__42226$jscomp$inline_3944_JSCompiler_inline_result$jscomp$inline_3943$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42226$jscomp$inline_3944_JSCompiler_inline_result$jscomp$inline_3943$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42226$jscomp$inline_3944_JSCompiler_inline_result$jscomp$inline_3943$$);
          $G__42214_JSCompiler_temp_const$jscomp$inline_3942$$ = {className:$G__42214_JSCompiler_temp_const$jscomp$inline_3942$$, children:["Tesa 41 anchors the Pavilion physically and philosophically—establishing ", $G__42226$jscomp$inline_3944_JSCompiler_inline_result$jscomp$inline_3943$$, "."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__42214_JSCompiler_temp_const$jscomp$inline_3942$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__42214_JSCompiler_temp_const$jscomp$inline_3942$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__42099$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__42099$$);
    }(), function() {
      var $G__42241$$ = function() {
        return {className:"w-full flex flex-col gap-4 mt-8", ref:$ref$jscomp$14$$, children:[function() {
          var $G__42253_G__42260$jscomp$inline_3947$$ = {"playback-id":"KaA1Jf2AusJZ966KPeZrdwJ5S53kboLO4E4fGLrgTLk", "aspect-ratio":1.77, "should-play?":$is_visible_QMARK_$jscomp$2$$, "allow-audio?":!1};
          $G__42253_G__42260$jscomp$inline_3947$$ = {className:"w-full aspect-[16/9]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$lazy_video$$, $G__42253_G__42260$jscomp$inline_3947$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$lazy_video$$, $G__42253_G__42260$jscomp$inline_3947$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__42253_G__42260$jscomp$inline_3947$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__42253_G__42260$jscomp$inline_3947$$);
        }(), function() {
          var $G__42274$$ = {"enabled?":$is_visible_QMARK_$jscomp$2$$, slides:$amp$pages$venue$page$tesa_41_slides$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__42274$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__42274$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__42241$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__42241$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__42081_map__42076_props__34324__auto__$jscomp$24_vec__42073_vec__42077$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__42081_map__42076_props__34324__auto__$jscomp$24_vec__42073_vec__42077$$);
};
$amp$pages$venue$page$outdoor_section$$ = function($G__42384_map__42362_props__34324__auto__$jscomp$25_vec__42359_vec__42373$$, $maybe_ref__34325__auto__$jscomp$25$$) {
  $G__42384_map__42362_props__34324__auto__$jscomp$25_vec__42359_vec__42373$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__42384_map__42362_props__34324__auto__$jscomp$25_vec__42359_vec__42373$$), $maybe_ref__34325__auto__$jscomp$25$$], null);
  $G__42384_map__42362_props__34324__auto__$jscomp$25_vec__42359_vec__42373$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__42384_map__42362_props__34324__auto__$jscomp$25_vec__42359_vec__42373$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__42384_map__42362_props__34324__auto__$jscomp$25_vec__42359_vec__42373$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$15$$ = $APP.$helix$hooks$use_ref$$("outdoor-ref");
  $G__42384_map__42362_props__34324__auto__$jscomp$25_vec__42359_vec__42373$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$$($ref$jscomp$15$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__42384_map__42362_props__34324__auto__$jscomp$25_vec__42359_vec__42373$$, 0, null);
  var $is_visible_QMARK_$jscomp$3$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__42384_map__42362_props__34324__auto__$jscomp$25_vec__42359_vec__42373$$, 1, null);
  $G__42384_map__42362_props__34324__auto__$jscomp$25_vec__42359_vec__42373$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$("pb-10 sm:pb-12"), children:[function() {
      var $G__42388$$ = function() {
        return {className:"px-4", children:[function() {
          var $G__42393$$ = {text:"Exterior · Arsenale Crossing"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__42393$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__42393$$);
        }(), function() {
          var $G__42398$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$venue$page$venue_display$$, "mb-8"]))), children:"The Outdoor Piece"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__42398$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__42398$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__42388$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__42388$$);
    }(), function() {
      var $G__42402$$ = function() {
        return {className:"px-4 space-y-6", children:[function() {
          var $G__42406$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_lg$$), children:["The outdoor artwork will be installed at the historic crossing grounds near the ", function() {
              var $G__42410$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Piraeus Lion"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42410$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42410$$);
            }(), ", one of the most recognized landmarks marking the approach to the Arsenale. ", "Positioned at a critical pedestrian junction, this site receives ", function() {
              var $G__42416$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"exceptionally high foot traffic"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42416$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42416$$);
            }(), " throughout the six-month exhibition period."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__42406$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__42406$$);
        }(), function() {
          var $G__42425$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:["Visitors moving between venues, crossing the bridge into the Arsenale, and navigating the surrounding waterfront naturally converge here. ", "The Armenian Pavilion lies less than a ten-minute walk from this point, making the installation both a ", function() {
              var $G__42435$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"threshold"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42435$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42435$$);
            }(), " and a ", function() {
              var $G__42443$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"directional marker"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42443$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42443$$);
            }(), "—an early encounter that orients audiences toward the Pavilion."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__42425$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__42425$$);
        }(), function() {
          var $G__42453_JSCompiler_temp_const$jscomp$inline_3949$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$])));
          var $G__42459$jscomp$inline_3951_JSCompiler_inline_result$jscomp$inline_3950$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"sculpture, signal, and prelude"};
          $G__42459$jscomp$inline_3951_JSCompiler_inline_result$jscomp$inline_3950$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42459$jscomp$inline_3951_JSCompiler_inline_result$jscomp$inline_3950$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42459$jscomp$inline_3951_JSCompiler_inline_result$jscomp$inline_3950$$);
          $G__42453_JSCompiler_temp_const$jscomp$inline_3949$$ = {className:$G__42453_JSCompiler_temp_const$jscomp$inline_3949$$, children:["A freestanding, architecturally scaled form—functioning simultaneously as ", $G__42459$jscomp$inline_3951_JSCompiler_inline_result$jscomp$inline_3950$$, "."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__42453_JSCompiler_temp_const$jscomp$inline_3949$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__42453_JSCompiler_temp_const$jscomp$inline_3949$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__42402$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__42402$$);
    }(), function() {
      var $G__42472_G__42499$jscomp$inline_3954_JSCompiler_inline_result$jscomp$inline_3953$$ = {"enabled?":$is_visible_QMARK_$jscomp$3$$, slides:$amp$pages$venue$page$crossing_slides$$};
      $G__42472_G__42499$jscomp$inline_3954_JSCompiler_inline_result$jscomp$inline_3953$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__42472_G__42499$jscomp$inline_3954_JSCompiler_inline_result$jscomp$inline_3953$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__42472_G__42499$jscomp$inline_3954_JSCompiler_inline_result$jscomp$inline_3953$$);
      $G__42472_G__42499$jscomp$inline_3954_JSCompiler_inline_result$jscomp$inline_3953$$ = {className:"w-full flex flex-col gap-4 mt-8", ref:$ref$jscomp$15$$, children:$G__42472_G__42499$jscomp$inline_3954_JSCompiler_inline_result$jscomp$inline_3953$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__42472_G__42499$jscomp$inline_3954_JSCompiler_inline_result$jscomp$inline_3953$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__42472_G__42499$jscomp$inline_3954_JSCompiler_inline_result$jscomp$inline_3953$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__42384_map__42362_props__34324__auto__$jscomp$25_vec__42359_vec__42373$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__42384_map__42362_props__34324__auto__$jscomp$25_vec__42359_vec__42373$$);
};
$amp$pages$venue$page$arsenale_section$$ = function($G__42588_map__42580_props__34324__auto__$jscomp$26_vec__42577$$, $maybe_ref__34325__auto__$jscomp$26$$) {
  $G__42588_map__42580_props__34324__auto__$jscomp$26_vec__42577$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__42588_map__42580_props__34324__auto__$jscomp$26_vec__42577$$), $maybe_ref__34325__auto__$jscomp$26$$], null);
  $G__42588_map__42580_props__34324__auto__$jscomp$26_vec__42577$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__42588_map__42580_props__34324__auto__$jscomp$26_vec__42577$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__42588_map__42580_props__34324__auto__$jscomp$26_vec__42577$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__42588_map__42580_props__34324__auto__$jscomp$26_vec__42577$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$("pb-10 sm:pb-12"), children:[function() {
      var $G__42597$$ = function() {
        return {className:"px-4", children:[function() {
          var $G__42605$$ = {text:"History"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__42605$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__42605$$);
        }(), function() {
          var $G__42614$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$venue$page$venue_display$$, "mb-8"]))), children:"Arsenale Militare"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__42614$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__42614$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__42597$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__42597$$);
    }(), function() {
      var $G__42624$$ = function() {
        return {className:"px-4 space-y-6", children:[function() {
          var $G__42628$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_lg$$), children:["The ", function() {
              var $G__42636$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Arsenale di Venezia"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42636$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42636$$);
            }(), " is one of the largest and oldest shipbuilding complexes in the world. ", "Founded in the ", function() {
              var $G__42640$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"12th century"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42640$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42640$$);
            }(), ", it served as the engine of Venetian naval power for over ", function() {
              var $G__42650$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"seven centuries"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42650$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42650$$);
            }(), "—at its peak employing 16,000 workers and capable of producing a fully outfitted warship in a single day."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__42628$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__42628$$);
        }(), function() {
          var $G__42660$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:["Spanning roughly ", function() {
              var $G__42666$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"45 hectares"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42666$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42666$$);
            }(), " of covered halls, dry docks, and open yards, the Arsenale is a monumental index of ", function() {
              var $G__42683$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"industrial ingenuity"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42683$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42683$$);
            }(), ". Its massive brick walls, timber-roofed warehouses (", function() {
              var $G__42693$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"tese"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42693$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42693$$);
            }(), "), and water-accessed basins represent a proto-industrial system that anticipated modern assembly-line production by centuries."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__42660$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__42660$$);
        }(), function() {
          var $G__42705$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:["Since ", function() {
              var $G__42717$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"1980"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42717$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42717$$);
            }(), ", the Arsenale has served as a primary exhibition site for the ", function() {
              var $G__42725$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Venice Biennale"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42725$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42725$$);
            }(), "—its raw, monumental spaces providing a counterpoint to the refined galleries of the Giardini. ", "National pavilions, large-scale installations, and the central International Exhibition share this vast industrial landscape, ", "transforming shipbuilding halls into some of the most powerful exhibition spaces in the world."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__42705$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__42705$$);
        }(), function() {
          var $G__42741_JSCompiler_temp_const$jscomp$inline_3956$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$])));
          var $G__42757$jscomp$inline_3958_JSCompiler_inline_result$jscomp$inline_3957$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"working within"};
          $G__42757$jscomp$inline_3958_JSCompiler_inline_result$jscomp$inline_3957$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__42757$jscomp$inline_3958_JSCompiler_inline_result$jscomp$inline_3957$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__42757$jscomp$inline_3958_JSCompiler_inline_result$jscomp$inline_3957$$);
          $G__42741_JSCompiler_temp_const$jscomp$inline_3956$$ = {className:$G__42741_JSCompiler_temp_const$jscomp$inline_3956$$, children:["Tesa 41 sits within this historic matrix—one of the original covered warehouses now given over to artistic production. ", "The Armenia Pavilion's presence continues a tradition of nations ", $G__42757$jscomp$inline_3958_JSCompiler_inline_result$jscomp$inline_3957$$, " the Arsenale's industrial grain, not against it."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__42741_JSCompiler_temp_const$jscomp$inline_3956$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__42741_JSCompiler_temp_const$jscomp$inline_3956$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__42624$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__42624$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__42588_map__42580_props__34324__auto__$jscomp$26_vec__42577$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__42588_map__42580_props__34324__auto__$jscomp$26_vec__42577$$);
};
$APP.$amp$pages$venue$page$venue_view$$ = function($G__42786_props__34324__auto__$jscomp$27_vec__42779$$, $maybe_ref__34325__auto__$jscomp$27$$) {
  $G__42786_props__34324__auto__$jscomp$27_vec__42779$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__42786_props__34324__auto__$jscomp$27_vec__42779$$), $maybe_ref__34325__auto__$jscomp$27$$], null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__42786_props__34324__auto__$jscomp$27_vec__42779$$, 0, null);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__42786_props__34324__auto__$jscomp$27_vec__42779$$ = {children:[function() {
    var $G__42790$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$hero_section$$, $G__42790$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$hero_section$$, $G__42790$$);
  }(), function() {
    var $G__42794$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$getting_there_section$$, $G__42794$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$getting_there_section$$, $G__42794$$);
  }(), function() {
    var $G__42798$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$about_section$$, $G__42798$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$about_section$$, $G__42798$$);
  }(), function() {
    var $G__42802$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$studio_section$$, $G__42802$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$studio_section$$, $G__42802$$);
  }(), function() {
    var $G__42808$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$outdoor_section$$, $G__42808$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$outdoor_section$$, $G__42808$$);
  }(), function() {
    var $G__42812$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$arsenale_section$$, $G__42812$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$arsenale_section$$, $G__42812$$);
  }()]};
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$page_shell$page_shell$$, $G__42786_props__34324__auto__$jscomp$27_vec__42779$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$ui$page_shell$page_shell$$, $G__42786_props__34324__auto__$jscomp$27_vec__42779$$);
};
$cljs$cst$782$entrance_warn$$ = new $APP.$cljs$core$Keyword$$(null, "entrance-warn", "entrance-warn", -1946460286);
$cljs$cst$784$entrance_name$$ = new $APP.$cljs$core$Keyword$$(null, "entrance-name", "entrance-name", -1694418012);
$cljs$cst$796$on_change$$ = new $APP.$cljs$core$Keyword$$(null, "on-change", "on-change", -732046149);
$cljs$cst$787$route_steps$$ = new $APP.$cljs$core$Keyword$$(null, "route-steps", "route-steps", 93562344);
$cljs$cst$790$before_body$$ = new $APP.$cljs$core$Keyword$$(null, "before-body", "before-body", -371941191);
$cljs$cst$795$lang$$ = new $APP.$cljs$core$Keyword$$(null, "lang", "lang", -1819677104);
$cljs$cst$788$route_title$$ = new $APP.$cljs$core$Keyword$$(null, "route-title", "route-title", 1170023563);
$cljs$cst$781$address_title$$ = new $APP.$cljs$core$Keyword$$(null, "address-title", "address-title", -712977214);
$cljs$cst$791$map_caption$$ = new $APP.$cljs$core$Keyword$$(null, "map-caption", "map-caption", 412601788);
$cljs$cst$793$before_quote$$ = new $APP.$cljs$core$Keyword$$(null, "before-quote", "before-quote", -740470883);
$cljs$cst$783$entrance_title$$ = new $APP.$cljs$core$Keyword$$(null, "entrance-title", "entrance-title", 2033188260);
$cljs$cst$786$authorized$$ = new $APP.$cljs$core$Keyword$$(null, "authorized", "authorized", 509904454);
$cljs$cst$789$entrance_body$$ = new $APP.$cljs$core$Keyword$$(null, "entrance-body", "entrance-body", 900345106);
$cljs$cst$779$en$$ = new $APP.$cljs$core$Keyword$$(null, "en", "en", 88457073);
$cljs$cst$792$marine_label$$ = new $APP.$cljs$core$Keyword$$(null, "marine-label", "marine-label", 1180851357);
$cljs$cst$785$entrance_lead$$ = new $APP.$cljs$core$Keyword$$(null, "entrance-lead", "entrance-lead", 1359435269);
$cljs$cst$794$it$$ = new $APP.$cljs$core$Keyword$$(null, "it", "it", 1023594544);
$cljs$cst$780$before_title$$ = new $APP.$cljs$core$Keyword$$(null, "before-title", "before-title", -1761149984);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("venue-view");
var $amp$pages$venue$page$lazy_video$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$ui$video_background$video_background$$;
})), $amp$pages$venue$page$venue_display$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-semibold", "uppercase", "leading-none text-3xl sm:text-5xl md:text-7xl", "text-slate-900  dark:text-slate-100"])), $amp$pages$venue$page$tesa_41_slides$$ = new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$731$img_src$$, 
"https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2011.12.05.tif", $APP.$cljs$cst$740$aspect_ratio$$, 1.34, $APP.$cljs$cst$394$active_QMARK_$$, !0], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$731$img_src$$, "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.08.tif", $APP.$cljs$cst$740$aspect_ratio$$, 1.34, $APP.$cljs$cst$394$active_QMARK_$$, !0], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$731$img_src$$, "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.18.tif", $APP.$cljs$cst$740$aspect_ratio$$, 1.34, $APP.$cljs$cst$394$active_QMARK_$$, !0], null)], null), $amp$pages$venue$page$crossing_slides$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$731$img_src$$, "https://atd-722658831.imgix.net/big_red_walkway/5.jpg", 
$APP.$cljs$cst$740$aspect_ratio$$, 1.82, $APP.$cljs$cst$713$caption$$, "Crossing at the Arsenale", $APP.$cljs$cst$714$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$731$img_src$$, "https://atd-722658831.imgix.net/big_red_walkway/1.jpg", $APP.$cljs$cst$740$aspect_ratio$$, 1.82, $APP.$cljs$cst$713$caption$$, "Crossing at the Arsenale", $APP.$cljs$cst$714$credit$$, "Render 2026"], null)], null), $amp$pages$venue$page$water_taxi_copy$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$cljs$cst$779$en$$, $APP.$cljs$core$PersistentHashMap$fromArrays$$([$cljs$cst$780$before_title$$, $cljs$cst$781$address_title$$, $cljs$cst$782$entrance_warn$$, $cljs$cst$783$entrance_title$$, $cljs$cst$784$entrance_name$$, $cljs$cst$785$entrance_lead$$, $cljs$cst$786$authorized$$, $cljs$cst$787$route_steps$$, $cljs$cst$788$route_title$$, $APP.$cljs$cst$288$title$$, $cljs$cst$789$entrance_body$$, $APP.$cljs$cst$775$subtitle$$, $cljs$cst$790$before_body$$, $cljs$cst$791$map_caption$$, $cljs$cst$792$marine_label$$, 
$cljs$cst$793$before_quote$$], ["Before entering", "Address", "Do not use any other entrance to the Arsenale.", "Only permitted entrance", "Galeazze – North Lagoon side – Rio delle Galeazze", "There is only one entrance for water taxis:", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["This water taxi is authorized to enter the military Arsenale area because it is carrying guests visiting the Armenian Pavilion.", "The Marine Office is aware and has approved access for water taxis transporting visitors to the Armenian Pavilion."], 
null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["Approach from the north side of the lagoon.", "Enter through the only permitted taxi entrance: Galeazze – Rio delle Galeazze.", "Continue south along Rio delle Galeazze, following the route shown on the map.", "Proceed to the Armenian Pavilion landing."], null), "Route", "Water Taxi Instructions", "The taxi must approach from the north side of the lagoon and enter through Rio delle Galeazze.", 
"Authorized access to the Arsenale – Armenian Pavilion", "Call the Marine Office and say:", "Water taxi route — enter from the North Lagoon via Rio delle Galeazze and continue south to the pavilion drop-off point", "Marine Office", "“I am arriving with a visitor for the Armenian Pavilion.”"]), $cljs$cst$794$it$$, $APP.$cljs$core$PersistentHashMap$fromArrays$$([$cljs$cst$780$before_title$$, $cljs$cst$781$address_title$$, $cljs$cst$782$entrance_warn$$, $cljs$cst$783$entrance_title$$, $cljs$cst$784$entrance_name$$, 
$cljs$cst$785$entrance_lead$$, $cljs$cst$786$authorized$$, $cljs$cst$787$route_steps$$, $cljs$cst$788$route_title$$, $APP.$cljs$cst$288$title$$, $cljs$cst$789$entrance_body$$, $APP.$cljs$cst$775$subtitle$$, $cljs$cst$790$before_body$$, $cljs$cst$791$map_caption$$, $cljs$cst$792$marine_label$$, $cljs$cst$793$before_quote$$], ["Prima di entrare", "Indirizzo", "NON è consentito utilizzare nessun altro ingresso dell’Arsenale.", "Unico ingresso consentito", "Galeazze – lato Laguna Nord – Rio delle Galeazze", 
"Esiste un solo ingresso per i taxi acquei:", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["Questo taxi è autorizzato a entrare nell’area dell’Arsenale Militare perché trasporta ospiti diretti al Padiglione Armenia.", "L’Ufficio della Marina è informato e ha dato il permesso di accesso ai taxi acquei che accompagnano visitatori al Padiglione Armenia."], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
["Arrivare dal lato della Laguna Nord.", "Entrare dall’unico ingresso consentito ai taxi: Galeazze – Rio delle Galeazze.", "Proseguire verso sud lungo il Rio delle Galeazze, seguendo il percorso indicato sulla mappa.", "Raggiungere l’approdo del Padiglione Armenia."], null), "Percorso", "Istruzioni per il taxi acqueo", "Il taxi deve obbligatoriamente arrivare dalla Laguna Nord ed entrare attraverso il Rio delle Galeazze.", "Accesso autorizzato all’Arsenale – Padiglione Armenia", "Chiamare l’Ufficio della Marina e comunicare:", 
"Percorso del taxi acqueo — entrare dalla Laguna Nord tramite il Rio delle Galeazze e proseguire verso sud fino all’approdo del padiglione", "Ufficio della Marina", "«Sto arrivando con un visitatore diretto al Padiglione Armenia.»"])], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$302$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$303$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$venue$page$lang_toggle$$, "", null, null) : (void 0).call(null, $amp$pages$venue$page$lang_toggle$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$venue$page$lang_toggle$$, 
"amp.pages.venue.page/lang-toggle"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$302$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$303$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$venue$page$walking_directions$$, "(use-touch-enabled)", null, null) : (void 0).call(null, $amp$pages$venue$page$walking_directions$$, "(use-touch-enabled)", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$venue$page$walking_directions$$, "amp.pages.venue.page/walking-directions"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$302$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$303$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$venue$page$water_taxi_directions$$, "(hooks/use-state :it)", null, null) : (void 0).call(null, $amp$pages$venue$page$water_taxi_directions$$, 
"(hooks/use-state :it)", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$venue$page$water_taxi_directions$$, "amp.pages.venue.page/water-taxi-directions"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$302$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$303$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$venue$page$getting_there_section$$, "", null, null) : (void 0).call(null, $amp$pages$venue$page$getting_there_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$venue$page$getting_there_section$$, 
"amp.pages.venue.page/getting-there-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$302$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$303$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$venue$page$hero_section$$, "", null, null) : (void 0).call(null, $amp$pages$venue$page$hero_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$venue$page$hero_section$$, 
"amp.pages.venue.page/hero-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$302$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$303$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$venue$page$about_section$$, "", null, null) : (void 0).call(null, $amp$pages$venue$page$about_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$venue$page$about_section$$, 
"amp.pages.venue.page/about-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$302$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$303$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$venue$page$studio_section$$, '(hooks/use-ref "studio-ref")(use-intersection-observer ref)', null, null) : (void 0).call(null, $amp$pages$venue$page$studio_section$$, 
'(hooks/use-ref "studio-ref")(use-intersection-observer ref)', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$venue$page$studio_section$$, "amp.pages.venue.page/studio-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$302$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$303$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$venue$page$outdoor_section$$, '(hooks/use-ref "outdoor-ref")(use-intersection-observer ref)', null, null) : (void 0).call(null, $amp$pages$venue$page$outdoor_section$$, 
'(hooks/use-ref "outdoor-ref")(use-intersection-observer ref)', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$venue$page$outdoor_section$$, "amp.pages.venue.page/outdoor-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$302$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$303$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$venue$page$arsenale_section$$, "", null, null) : (void 0).call(null, $amp$pages$venue$page$arsenale_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$venue$page$arsenale_section$$, 
"amp.pages.venue.page/arsenale-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$302$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$303$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$pages$venue$page$venue_view$$, "", null, null) : (void 0).call(null, $APP.$amp$pages$venue$page$venue_view$$, "", null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$pages$venue$page$venue_view$$, 
"amp.pages.venue.page/venue-view"));
$APP.$module$contents$shadow$loader_set_loaded$$();

}).call(this);