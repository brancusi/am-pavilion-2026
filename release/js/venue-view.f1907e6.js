(function(){
'use strict';
var $amp$pages$venue$page$walking_directions$$, $amp$pages$venue$page$water_taxi_directions$$, $amp$pages$venue$page$getting_there_section$$, $amp$pages$venue$page$hero_section$$, $amp$pages$venue$page$about_section$$, $amp$pages$venue$page$studio_section$$, $amp$pages$venue$page$outdoor_section$$, $amp$pages$venue$page$arsenale_section$$, $cljs$cst$793$route_steps$$, $cljs$cst$787$address_title$$, $cljs$cst$798$marine_label$$;
$amp$pages$venue$page$walking_directions$$ = function($G__40467_map__40464_props__34324__auto__$jscomp$17_vec__40461$$, $maybe_ref__34325__auto__$jscomp$17$$) {
  $G__40467_map__40464_props__34324__auto__$jscomp$17_vec__40461$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__40467_map__40464_props__34324__auto__$jscomp$17_vec__40461$$), $maybe_ref__34325__auto__$jscomp$17$$], null);
  $G__40467_map__40464_props__34324__auto__$jscomp$17_vec__40461$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__40467_map__40464_props__34324__auto__$jscomp$17_vec__40461$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__40467_map__40464_props__34324__auto__$jscomp$17_vec__40461$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $is_desktop_QMARK_$jscomp$2$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__40467_map__40464_props__34324__auto__$jscomp$17_vec__40461$$ = function() {
    return {className:"mb-16", children:[function() {
      var $G__40472$$ = function() {
        return {className:"px-4", children:[function() {
          var $G__40480$$ = {text:"On Foot"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$sub_heading$$, $G__40480$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$sub_heading$$, $G__40480$$);
        }(), function() {
          var $G__40496$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["The pavilion sits inside the Arsenale, roughly an ", function() {
              var $G__40504$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"eight-minute walk"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__40504$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__40504$$);
            }(), " from the crossing at the ", function() {
              var $G__40516$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Piraeus Lion"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__40516$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__40516$$);
            }(), ". Follow the highlighted route on the map to ", function() {
              var $G__40524$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Tesa 41"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__40524$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__40524$$);
            }(), "."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40496$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__40496$$);
        }(), function() {
          var $G__40534_G__40540$jscomp$inline_3951$$ = {title:"Address"};
          $G__40534_G__40540$jscomp$inline_3951$$ = {className:"mb-8", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$address_block$$, $G__40534_G__40540$jscomp$inline_3951$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$address_block$$, $G__40534_G__40540$jscomp$inline_3951$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40534_G__40540$jscomp$inline_3951$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__40534_G__40540$jscomp$inline_3951$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40472$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__40472$$);
    }(), function() {
      var $G__40551$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$map_button$$, $G__40551$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$map_button$$, $G__40551$$);
    }(), function() {
      var $G__40554$$ = function() {
        return {className:"mb-6", children:[function() {
          var $G__40558$$ = {dev:!1, "interactive?":$is_desktop_QMARK_$jscomp$2$$, "initial-view":$APP.$amp$pages$venue$map_config$initial_view$$, "ant-paths":$APP.$amp$pages$venue$map_config$ant_paths$$, layers:$APP.$amp$pages$venue$map_config$layers$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$map$mapbox_map$$, $G__40558$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$map$mapbox_map$$, $G__40558$$);
        }(), function() {
          var $G__40563$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "italic", "text-slate-600  dark:text-slate-400", "mt-4 px-4"]))), children:"Walking path from the crossing to the pavilion — approximately 8 minutes"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40563$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__40563$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40554$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__40554$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40467_map__40464_props__34324__auto__$jscomp$17_vec__40461$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__40467_map__40464_props__34324__auto__$jscomp$17_vec__40461$$);
};
$amp$pages$venue$page$water_taxi_directions$$ = function($G__40641_map__40634_props__34324__auto__$jscomp$18_vec__40631_vec__40636$$, $maybe_ref__34325__auto__$jscomp$18$$) {
  $G__40641_map__40634_props__34324__auto__$jscomp$18_vec__40631_vec__40636$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__40641_map__40634_props__34324__auto__$jscomp$18_vec__40631_vec__40636$$), $maybe_ref__34325__auto__$jscomp$18$$], null);
  $G__40641_map__40634_props__34324__auto__$jscomp$18_vec__40631_vec__40636$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__40641_map__40634_props__34324__auto__$jscomp$18_vec__40631_vec__40636$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__40641_map__40634_props__34324__auto__$jscomp$18_vec__40631_vec__40636$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__40641_map__40634_props__34324__auto__$jscomp$18_vec__40631_vec__40636$$ = $APP.$helix$hooks$use_state$$($APP.$cljs$cst$761$it$$);
  var $lang$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__40641_map__40634_props__34324__auto__$jscomp$18_vec__40631_vec__40636$$, 0, null), $set_lang$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__40641_map__40634_props__34324__auto__$jscomp$18_vec__40631_vec__40636$$, 1, null), $c$jscomp$227$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$pages$venue$page$water_taxi_copy$$, $lang$jscomp$4$$);
  $G__40641_map__40634_props__34324__auto__$jscomp$18_vec__40631_vec__40636$$ = function() {
    return {className:"mb-8", children:[function() {
      var $G__40645$$ = function() {
        return {className:"px-4", children:[function() {
          var $G__40650$$ = {text:"By Water Taxi"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$sub_heading$$, $G__40650$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$sub_heading$$, $G__40650$$);
        }(), function() {
          var $G__40658$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["Water taxis can bring guests directly to the pavilion’s landing inside the ", function() {
              var $G__40662$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Arsenale Militare"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__40662$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__40662$$);
            }(), ". Access is approved by the Marine Office, but the driver must follow the procedure below. ", function() {
              var $G__40671$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"Show these instructions to your driver — they are in Italian by default, with English available."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__40671$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__40671$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40658$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__40658$$);
        }(), function() {
          var $G__40679$$ = {lang:$lang$jscomp$4$$, "on-change":$set_lang$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$lang_toggle$$, $G__40679$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$lang_toggle$$, $G__40679$$);
        }(), function() {
          var $G__40687$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "mb-1"]))), children:$APP.$cljs$cst$288$title$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h4", $G__40687$$) : $APP.$helix$core$jsx$$.call(null, "h4", $G__40687$$);
        }(), function() {
          var $G__40693$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$label_muted$$, "mb-6"]))), children:$APP.$cljs$cst$782$subtitle$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40693$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__40693$$);
        }(), function() {
          var $G__40702$$ = function() {
            return {className:"space-y-3 mb-8", children:[function() {
              var $G__40707$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, $APP.$amp$styles$em_strong$$]))), children:$APP.$cljs$core$first$$($APP.$cljs$cst$792$authorized$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40707$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__40707$$);
            }(), function() {
              var $G__40716$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:$APP.$cljs$core$second$$($APP.$cljs$cst$792$authorized$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40716$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__40716$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40702$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__40702$$);
        }(), function() {
          var $G__40726$$ = function() {
            return {className:"mb-8", children:function() {
              var $G__40732$$ = {children:[function() {
                var $G__40736$$ = {text:$APP.$cljs$cst$786$before_title$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$), "warn?":!0};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$mini_heading$$, $G__40736$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$mini_heading$$, $G__40736$$);
              }(), function() {
                var $G__40741$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-2"]))), children:$APP.$cljs$cst$796$before_body$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40741$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__40741$$);
              }(), function() {
                var $G__40747$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$, "mb-4"]))), children:$APP.$cljs$cst$799$before_quote$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40747$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__40747$$);
              }(), function() {
                var $G__40751$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$label_muted$$, "mb-1"]))), children:$cljs$cst$798$marine_label$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40751$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__40751$$);
              }(), function() {
                var $G__40755$$ = $APP.$helix$impl$props$merge_obj$$({}, $APP.$helix$impl$props$_props$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$amp$ui$directions$marine_office_phone$$));
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$phone_link$$, $G__40755$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$phone_link$$, $G__40755$$);
              }()]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$callout$$, $G__40732$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$ui$directions$callout$$, $G__40732$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40726$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__40726$$);
        }(), function() {
          var $G__40768$$ = function() {
            return {className:"mb-8", children:function() {
              var $G__40772$$ = {children:[function() {
                var $G__40774$$ = {text:$APP.$cljs$cst$789$entrance_title$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$), "warn?":!0};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$mini_heading$$, $G__40774$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$mini_heading$$, $G__40774$$);
              }(), function() {
                var $G__40784$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-2"]))), children:$APP.$cljs$cst$791$entrance_lead$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40784$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__40784$$);
              }(), function() {
                var $G__40798$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-semibold", "text-lg", "text-slate-900  dark:text-slate-100", "mb-3"]))), children:$APP.$cljs$cst$790$entrance_name$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40798$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__40798$$);
              }(), function() {
                var $G__40810$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-2"]))), children:$APP.$cljs$cst$795$entrance_body$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40810$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__40810$$);
              }(), function() {
                var $G__40824$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-body", "text-base", "font-medium", "text-rose-600   dark:text-rose-400", "leading-relaxed"]))), children:$APP.$cljs$cst$788$entrance_warn$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40824$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__40824$$);
              }()]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$callout$$, $G__40772$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$ui$directions$callout$$, $G__40772$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40768$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__40768$$);
        }(), function() {
          var $G__40834$$ = function() {
            return {className:"mb-8", children:[function() {
              var $G__40838$$ = {text:$APP.$cljs$cst$794$route_title$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$mini_heading$$, $G__40838$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$mini_heading$$, $G__40838$$);
            }(), function() {
              var $G__40852$$ = {steps:$cljs$cst$793$route_steps$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$numbered_steps$$, $G__40852$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$numbered_steps$$, $G__40852$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40834$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__40834$$);
        }(), function() {
          var $G__40866_G__40874$jscomp$inline_3954$$ = {title:$cljs$cst$787$address_title$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
          $G__40866_G__40874$jscomp$inline_3954$$ = {className:"mb-8", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$address_block$$, $G__40866_G__40874$jscomp$inline_3954$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$address_block$$, $G__40866_G__40874$jscomp$inline_3954$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40866_G__40874$jscomp$inline_3954$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__40866_G__40874$jscomp$inline_3954$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40645$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__40645$$);
    }(), function() {
      var $G__40890$$ = function() {
        return {className:"mb-8", children:[function() {
          var $G__40898$$ = {src:"/images/graphics/water_taxi_route.jpg", alt:"Map of the Arsenale showing the only permitted water taxi entrance at Rio delle Galeazze and the route south to the Armenian Pavilion drop-off point", loading:"lazy", className:"w-full h-auto"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__40898$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__40898$$);
        }(), function() {
          var $G__40908$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "italic", "text-slate-600  dark:text-slate-400", "mt-4 px-4"]))), children:$APP.$cljs$cst$797$map_caption$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40908$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__40908$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40890$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__40890$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40641_map__40634_props__34324__auto__$jscomp$18_vec__40631_vec__40636$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__40641_map__40634_props__34324__auto__$jscomp$18_vec__40631_vec__40636$$);
};
$amp$pages$venue$page$getting_there_section$$ = function($G__40977_map__40967_props__34324__auto__$jscomp$19_vec__40964$$, $maybe_ref__34325__auto__$jscomp$19$$) {
  $G__40977_map__40967_props__34324__auto__$jscomp$19_vec__40964$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__40977_map__40967_props__34324__auto__$jscomp$19_vec__40964$$), $maybe_ref__34325__auto__$jscomp$19$$], null);
  $G__40977_map__40967_props__34324__auto__$jscomp$19_vec__40964$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__40977_map__40967_props__34324__auto__$jscomp$19_vec__40964$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__40977_map__40967_props__34324__auto__$jscomp$19_vec__40964$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__40977_map__40967_props__34324__auto__$jscomp$19_vec__40964$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$("pb-10 sm:pb-12"), children:[function() {
      var $G__40987$$ = function() {
        return {className:"px-4", children:[function() {
          var $G__40991$$ = {text:"Directions"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__40991$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__40991$$);
        }(), function() {
          var $G__40995$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$venue$page$venue_display$$, "mb-8"]))), children:"Getting There"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__40995$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__40995$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40987$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__40987$$);
    }(), function() {
      var $G__41005$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$walking_directions$$, $G__41005$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$walking_directions$$, $G__41005$$);
    }(), function() {
      var $G__41011$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$water_taxi_directions$$, $G__41011$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$water_taxi_directions$$, $G__41011$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40977_map__40967_props__34324__auto__$jscomp$19_vec__40964$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__40977_map__40967_props__34324__auto__$jscomp$19_vec__40964$$);
};
$amp$pages$venue$page$hero_section$$ = function($G__41049_map__41041_props__34324__auto__$jscomp$20_vec__41038$$, $maybe_ref__34325__auto__$jscomp$20$$) {
  $G__41049_map__41041_props__34324__auto__$jscomp$20_vec__41038$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__41049_map__41041_props__34324__auto__$jscomp$20_vec__41038$$), $maybe_ref__34325__auto__$jscomp$20$$], null);
  $G__41049_map__41041_props__34324__auto__$jscomp$20_vec__41038$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__41049_map__41041_props__34324__auto__$jscomp$20_vec__41038$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__41049_map__41041_props__34324__auto__$jscomp$20_vec__41038$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__41049_map__41041_props__34324__auto__$jscomp$20_vec__41038$$ = function() {
    return {className:"pt-10 pb-4 px-4", children:[function() {
      var $G__41069$$ = {text:"Venice · Arsenale Militare"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__41069$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__41069$$);
    }(), function() {
      var $G__41074$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$venue$page$venue_display$$, "mb-8"]))), children:"Visit the pavilion"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__41074$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__41074$$);
    }(), function() {
      var $G__41079$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-4"]))), children:["The Armenia Pavilion unfolds across ", function() {
          var $G__41084$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"two sites"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41084$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41084$$);
        }(), " within the historic Arsenale of Venice. Reach it ", function() {
          var $G__41096$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"on foot"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41096$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41096$$);
        }(), " through the Biennale grounds, or arrive by ", function() {
          var $G__41102$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"water taxi"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41102$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41102$$);
        }(), " directly at the pavilion’s landing."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41079$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__41079$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41049_map__41041_props__34324__auto__$jscomp$20_vec__41038$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41049_map__41041_props__34324__auto__$jscomp$20_vec__41038$$);
};
$amp$pages$venue$page$about_section$$ = function($G__41161_map__41155_props__34324__auto__$jscomp$21_vec__41152$$, $maybe_ref__34325__auto__$jscomp$21$$) {
  $G__41161_map__41155_props__34324__auto__$jscomp$21_vec__41152$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__41161_map__41155_props__34324__auto__$jscomp$21_vec__41152$$), $maybe_ref__34325__auto__$jscomp$21$$], null);
  $G__41161_map__41155_props__34324__auto__$jscomp$21_vec__41152$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__41161_map__41155_props__34324__auto__$jscomp$21_vec__41152$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__41161_map__41155_props__34324__auto__$jscomp$21_vec__41152$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__41161_map__41155_props__34324__auto__$jscomp$21_vec__41152$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["pb-10 sm:pb-12", "px-4"]))), children:[function() {
      var $G__41169$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$venue$page$venue_display$$, "mb-8"]))), children:"About"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__41169$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__41169$$);
    }(), function() {
      var $G__41173$$ = function() {
        return {className:"space-y-6", children:[function() {
          var $G__41179$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_lg$$), children:["The Armenia Pavilion unfolds across ", function() {
              var $G__41185$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"two sites"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41185$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41185$$);
            }(), " within the historic Arsenale of Venice—a ", function() {
              var $G__41193$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"5,000-square-foot interior studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41193$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41193$$);
            }(), " and a monumental ", function() {
              var $G__41197$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"outdoor sculpture"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41197$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41197$$);
            }(), " at the gates of the complex."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41179$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__41179$$);
        }(), function() {
          var $G__41202_JSCompiler_temp_const$jscomp$inline_3956$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$);
          var $G__41206$jscomp$inline_3958_JSCompiler_inline_result$jscomp$inline_3957$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"a place for study, for work, to create, share, and exhibit"};
          $G__41206$jscomp$inline_3958_JSCompiler_inline_result$jscomp$inline_3957$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41206$jscomp$inline_3958_JSCompiler_inline_result$jscomp$inline_3957$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41206$jscomp$inline_3958_JSCompiler_inline_result$jscomp$inline_3957$$);
          $G__41202_JSCompiler_temp_const$jscomp$inline_3956$$ = {className:$G__41202_JSCompiler_temp_const$jscomp$inline_3956$$, children:["Together they form a single constellation: ", $G__41206$jscomp$inline_3958_JSCompiler_inline_result$jscomp$inline_3957$$, ". Over six months the Pavilion operates not as a static exhibition ", "but as a living workshop—open, evolving, and built in real time."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41202_JSCompiler_temp_const$jscomp$inline_3956$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__41202_JSCompiler_temp_const$jscomp$inline_3956$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41173$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41173$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41161_map__41155_props__34324__auto__$jscomp$21_vec__41152$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41161_map__41155_props__34324__auto__$jscomp$21_vec__41152$$);
};
$amp$pages$venue$page$studio_section$$ = function($G__41265_map__41249_props__34324__auto__$jscomp$22_vec__41246_vec__41255$$, $maybe_ref__34325__auto__$jscomp$22$$) {
  $G__41265_map__41249_props__34324__auto__$jscomp$22_vec__41246_vec__41255$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__41265_map__41249_props__34324__auto__$jscomp$22_vec__41246_vec__41255$$), $maybe_ref__34325__auto__$jscomp$22$$], null);
  $G__41265_map__41249_props__34324__auto__$jscomp$22_vec__41246_vec__41255$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__41265_map__41249_props__34324__auto__$jscomp$22_vec__41246_vec__41255$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__41265_map__41249_props__34324__auto__$jscomp$22_vec__41246_vec__41255$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$14$$ = $APP.$helix$hooks$use_ref$$("studio-ref");
  $G__41265_map__41249_props__34324__auto__$jscomp$22_vec__41246_vec__41255$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$$($ref$jscomp$14$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__41265_map__41249_props__34324__auto__$jscomp$22_vec__41246_vec__41255$$, 0, null);
  var $is_visible_QMARK_$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__41265_map__41249_props__34324__auto__$jscomp$22_vec__41246_vec__41255$$, 1, null);
  $G__41265_map__41249_props__34324__auto__$jscomp$22_vec__41246_vec__41255$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$("pb-10 sm:pb-12"), children:[function() {
      var $G__41271$$ = function() {
        return {className:"px-4", children:[function() {
          var $G__41275$$ = {text:"Interior · Tesa 41"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__41275$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__41275$$);
        }(), function() {
          var $G__41279$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$venue$page$venue_display$$, "mb-8"]))), children:"The Studio"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__41279$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__41279$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41271$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41271$$);
    }(), function() {
      var $G__41286$$ = function() {
        return {className:"px-4 space-y-6", children:[function() {
          var $G__41294$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_lg$$), children:[function() {
              var $G__41300$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Tesa 41"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41300$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41300$$);
            }(), " is the primary studio and exhibition space for the Armenia Pavilion—", function() {
              var $G__41308$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"5,000 square feet"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41308$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41308$$);
            }(), " of expansive industrial volume within the Arsenale that functions as the ", function() {
              var $G__41312$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"operational and conceptual heart"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41312$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41312$$);
            }(), " of the project."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41294$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__41294$$);
        }(), function() {
          var $G__41316$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:["Here, the Pavilion operates as a ", function() {
              var $G__41321$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"working studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41321$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41321$$);
            }(), " rather than a static exhibition—a place of continuous ", function() {
              var $G__41325$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"making"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41325$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41325$$);
            }(), ", ", function() {
              var $G__41329$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"stacking"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41329$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41329$$);
            }(), ", ", function() {
              var $G__41334$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"dismantling"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41334$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41334$$);
            }(), ", and ", function() {
              var $G__41338$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"rebuilding"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41338$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41338$$);
            }(), ". The interior volume allows the work to expand ", function() {
              var $G__41342$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"horizontally"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41342$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41342$$);
            }(), " and ", function() {
              var $G__41347$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"vertically"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41347$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41347$$);
            }(), ", accommodating both monumental arrangements and intimate moments of material attention."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41316$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__41316$$);
        }(), function() {
          var $G__41354$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:["Defined by scale, clarity, and architectural restraint, the space is built for sustained ", function() {
              var $G__41362$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"fabrication"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41362$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41362$$);
            }(), ", ", function() {
              var $G__41370$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"assembly"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41370$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41370$$);
            }(), ", and ", function() {
              var $G__41378$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"reconfiguration"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41378$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41378$$);
            }(), " across the full duration of the Biennale."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41354$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__41354$$);
        }(), function() {
          var $G__41389_JSCompiler_temp_const$jscomp$inline_3960$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$])));
          var $G__41396$jscomp$inline_3962_JSCompiler_inline_result$jscomp$inline_3961$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"the studio as the artwork itself"};
          $G__41396$jscomp$inline_3962_JSCompiler_inline_result$jscomp$inline_3961$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41396$jscomp$inline_3962_JSCompiler_inline_result$jscomp$inline_3961$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41396$jscomp$inline_3962_JSCompiler_inline_result$jscomp$inline_3961$$);
          $G__41389_JSCompiler_temp_const$jscomp$inline_3960$$ = {className:$G__41389_JSCompiler_temp_const$jscomp$inline_3960$$, children:["Tesa 41 anchors the Pavilion physically and philosophically—establishing ", $G__41396$jscomp$inline_3962_JSCompiler_inline_result$jscomp$inline_3961$$, "."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41389_JSCompiler_temp_const$jscomp$inline_3960$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__41389_JSCompiler_temp_const$jscomp$inline_3960$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41286$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41286$$);
    }(), function() {
      var $G__41409$$ = function() {
        return {className:"w-full flex flex-col gap-4 mt-8", ref:$ref$jscomp$14$$, children:[function() {
          var $G__41415_G__41425$jscomp$inline_3965$$ = {"playback-id":"KaA1Jf2AusJZ966KPeZrdwJ5S53kboLO4E4fGLrgTLk", "aspect-ratio":1.77, "should-play?":$is_visible_QMARK_$jscomp$2$$, "allow-audio?":!1};
          $G__41415_G__41425$jscomp$inline_3965$$ = {className:"w-full aspect-[16/9]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$lazy_video$$, $G__41415_G__41425$jscomp$inline_3965$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$lazy_video$$, $G__41415_G__41425$jscomp$inline_3965$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41415_G__41425$jscomp$inline_3965$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__41415_G__41425$jscomp$inline_3965$$);
        }(), function() {
          var $G__41433$$ = {"enabled?":$is_visible_QMARK_$jscomp$2$$, slides:$amp$pages$venue$page$tesa_41_slides$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__41433$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__41433$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41409$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41409$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41265_map__41249_props__34324__auto__$jscomp$22_vec__41246_vec__41255$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41265_map__41249_props__34324__auto__$jscomp$22_vec__41246_vec__41255$$);
};
$amp$pages$venue$page$outdoor_section$$ = function($G__41532_map__41504_props__34324__auto__$jscomp$23_vec__41501_vec__41517$$, $maybe_ref__34325__auto__$jscomp$23$$) {
  $G__41532_map__41504_props__34324__auto__$jscomp$23_vec__41501_vec__41517$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__41532_map__41504_props__34324__auto__$jscomp$23_vec__41501_vec__41517$$), $maybe_ref__34325__auto__$jscomp$23$$], null);
  $G__41532_map__41504_props__34324__auto__$jscomp$23_vec__41501_vec__41517$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__41532_map__41504_props__34324__auto__$jscomp$23_vec__41501_vec__41517$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__41532_map__41504_props__34324__auto__$jscomp$23_vec__41501_vec__41517$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$15$$ = $APP.$helix$hooks$use_ref$$("outdoor-ref");
  $G__41532_map__41504_props__34324__auto__$jscomp$23_vec__41501_vec__41517$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$$($ref$jscomp$15$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__41532_map__41504_props__34324__auto__$jscomp$23_vec__41501_vec__41517$$, 0, null);
  var $is_visible_QMARK_$jscomp$3$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__41532_map__41504_props__34324__auto__$jscomp$23_vec__41501_vec__41517$$, 1, null);
  $G__41532_map__41504_props__34324__auto__$jscomp$23_vec__41501_vec__41517$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$("pb-10 sm:pb-12"), children:[function() {
      var $G__41546$$ = function() {
        return {className:"px-4", children:[function() {
          var $G__41552$$ = {text:"Exterior · Arsenale Crossing"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__41552$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__41552$$);
        }(), function() {
          var $G__41566$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$venue$page$venue_display$$, "mb-8"]))), children:"The Outdoor Piece"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__41566$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__41566$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41546$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41546$$);
    }(), function() {
      var $G__41579$$ = function() {
        return {className:"px-4 space-y-6", children:[function() {
          var $G__41589$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_lg$$), children:["The outdoor artwork will be installed at the historic crossing grounds near the ", function() {
              var $G__41599$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Piraeus Lion"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41599$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41599$$);
            }(), ", one of the most recognized landmarks marking the approach to the Arsenale. ", "Positioned at a critical pedestrian junction, this site receives ", function() {
              var $G__41610$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"exceptionally high foot traffic"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41610$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41610$$);
            }(), " throughout the six-month exhibition period."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41589$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__41589$$);
        }(), function() {
          var $G__41627$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:["Visitors moving between venues, crossing the bridge into the Arsenale, and navigating the surrounding waterfront naturally converge here. ", "The Armenian Pavilion lies less than a ten-minute walk from this point, making the installation both a ", function() {
              var $G__41643$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"threshold"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41643$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41643$$);
            }(), " and a ", function() {
              var $G__41663$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"directional marker"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41663$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41663$$);
            }(), "—an early encounter that orients audiences toward the Pavilion."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41627$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__41627$$);
        }(), function() {
          var $G__41670_JSCompiler_temp_const$jscomp$inline_3967$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$])));
          var $G__41676$jscomp$inline_3969_JSCompiler_inline_result$jscomp$inline_3968$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"sculpture, signal, and prelude"};
          $G__41676$jscomp$inline_3969_JSCompiler_inline_result$jscomp$inline_3968$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41676$jscomp$inline_3969_JSCompiler_inline_result$jscomp$inline_3968$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41676$jscomp$inline_3969_JSCompiler_inline_result$jscomp$inline_3968$$);
          $G__41670_JSCompiler_temp_const$jscomp$inline_3967$$ = {className:$G__41670_JSCompiler_temp_const$jscomp$inline_3967$$, children:["A freestanding, architecturally scaled form—functioning simultaneously as ", $G__41676$jscomp$inline_3969_JSCompiler_inline_result$jscomp$inline_3968$$, "."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41670_JSCompiler_temp_const$jscomp$inline_3967$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__41670_JSCompiler_temp_const$jscomp$inline_3967$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41579$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41579$$);
    }(), function() {
      var $G__41680_G__41688$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971$$ = {"enabled?":$is_visible_QMARK_$jscomp$3$$, slides:$amp$pages$venue$page$crossing_slides$$};
      $G__41680_G__41688$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__41680_G__41688$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__41680_G__41688$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971$$);
      $G__41680_G__41688$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971$$ = {className:"w-full flex flex-col gap-4 mt-8", ref:$ref$jscomp$15$$, children:$G__41680_G__41688$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41680_G__41688$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__41680_G__41688$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41532_map__41504_props__34324__auto__$jscomp$23_vec__41501_vec__41517$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41532_map__41504_props__34324__auto__$jscomp$23_vec__41501_vec__41517$$);
};
$amp$pages$venue$page$arsenale_section$$ = function($G__41727_map__41725_props__34324__auto__$jscomp$24_vec__41722$$, $maybe_ref__34325__auto__$jscomp$24$$) {
  $G__41727_map__41725_props__34324__auto__$jscomp$24_vec__41722$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__41727_map__41725_props__34324__auto__$jscomp$24_vec__41722$$), $maybe_ref__34325__auto__$jscomp$24$$], null);
  $G__41727_map__41725_props__34324__auto__$jscomp$24_vec__41722$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__41727_map__41725_props__34324__auto__$jscomp$24_vec__41722$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__41727_map__41725_props__34324__auto__$jscomp$24_vec__41722$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__41727_map__41725_props__34324__auto__$jscomp$24_vec__41722$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$("pb-10 sm:pb-12"), children:[function() {
      var $G__41731$$ = function() {
        return {className:"px-4", children:[function() {
          var $G__41735$$ = {text:"History"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__41735$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__41735$$);
        }(), function() {
          var $G__41744$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$venue$page$venue_display$$, "mb-8"]))), children:"Arsenale Militare"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__41744$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__41744$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41731$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41731$$);
    }(), function() {
      var $G__41754$$ = function() {
        return {className:"px-4 space-y-6", children:[function() {
          var $G__41762$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_lg$$), children:["The ", function() {
              var $G__41774$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Arsenale di Venezia"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41774$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41774$$);
            }(), " is one of the largest and oldest shipbuilding complexes in the world. ", "Founded in the ", function() {
              var $G__41788$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"12th century"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41788$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41788$$);
            }(), ", it served as the engine of Venetian naval power for over ", function() {
              var $G__41800$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"seven centuries"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41800$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41800$$);
            }(), "—at its peak employing 16,000 workers and capable of producing a fully outfitted warship in a single day."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41762$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__41762$$);
        }(), function() {
          var $G__41814$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:["Spanning roughly ", function() {
              var $G__41824$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"45 hectares"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41824$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41824$$);
            }(), " of covered halls, dry docks, and open yards, the Arsenale is a monumental index of ", function() {
              var $G__41838$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"industrial ingenuity"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41838$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41838$$);
            }(), ". Its massive brick walls, timber-roofed warehouses (", function() {
              var $G__41848$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"tese"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41848$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41848$$);
            }(), "), and water-accessed basins represent a proto-industrial system that anticipated modern assembly-line production by centuries."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41814$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__41814$$);
        }(), function() {
          var $G__41866$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:["Since ", function() {
              var $G__41872$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"1980"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41872$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41872$$);
            }(), ", the Arsenale has served as a primary exhibition site for the ", function() {
              var $G__41881$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Venice Biennale"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41881$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41881$$);
            }(), "—its raw, monumental spaces providing a counterpoint to the refined galleries of the Giardini. ", "National pavilions, large-scale installations, and the central International Exhibition share this vast industrial landscape, ", "transforming shipbuilding halls into some of the most powerful exhibition spaces in the world."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41866$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__41866$$);
        }(), function() {
          var $G__41891_JSCompiler_temp_const$jscomp$inline_3974$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$])));
          var $G__41895$jscomp$inline_3976_JSCompiler_inline_result$jscomp$inline_3975$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"working within"};
          $G__41895$jscomp$inline_3976_JSCompiler_inline_result$jscomp$inline_3975$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__41895$jscomp$inline_3976_JSCompiler_inline_result$jscomp$inline_3975$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__41895$jscomp$inline_3976_JSCompiler_inline_result$jscomp$inline_3975$$);
          $G__41891_JSCompiler_temp_const$jscomp$inline_3974$$ = {className:$G__41891_JSCompiler_temp_const$jscomp$inline_3974$$, children:["Tesa 41 sits within this historic matrix—one of the original covered warehouses now given over to artistic production. ", "The Armenia Pavilion's presence continues a tradition of nations ", $G__41895$jscomp$inline_3976_JSCompiler_inline_result$jscomp$inline_3975$$, " the Arsenale's industrial grain, not against it."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__41891_JSCompiler_temp_const$jscomp$inline_3974$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__41891_JSCompiler_temp_const$jscomp$inline_3974$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41754$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41754$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__41727_map__41725_props__34324__auto__$jscomp$24_vec__41722$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__41727_map__41725_props__34324__auto__$jscomp$24_vec__41722$$);
};
$APP.$amp$pages$venue$page$venue_view$$ = function($G__41927_props__34324__auto__$jscomp$25_vec__41923$$, $maybe_ref__34325__auto__$jscomp$25$$) {
  $G__41927_props__34324__auto__$jscomp$25_vec__41923$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__41927_props__34324__auto__$jscomp$25_vec__41923$$), $maybe_ref__34325__auto__$jscomp$25$$], null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__41927_props__34324__auto__$jscomp$25_vec__41923$$, 0, null);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__41927_props__34324__auto__$jscomp$25_vec__41923$$ = {children:[function() {
    var $G__41929$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$hero_section$$, $G__41929$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$hero_section$$, $G__41929$$);
  }(), function() {
    var $G__41933$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$opening_hours$$, $G__41933$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$opening_hours$$, $G__41933$$);
  }(), function() {
    var $G__41937$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$getting_there_section$$, $G__41937$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$getting_there_section$$, $G__41937$$);
  }(), function() {
    var $G__41939$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$about_section$$, $G__41939$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$about_section$$, $G__41939$$);
  }(), function() {
    var $G__41943$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$studio_section$$, $G__41943$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$studio_section$$, $G__41943$$);
  }(), function() {
    var $G__41947$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$outdoor_section$$, $G__41947$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$outdoor_section$$, $G__41947$$);
  }(), function() {
    var $G__41949$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$arsenale_section$$, $G__41949$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$arsenale_section$$, $G__41949$$);
  }()]};
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$page_shell$page_shell$$, $G__41927_props__34324__auto__$jscomp$25_vec__41923$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$ui$page_shell$page_shell$$, $G__41927_props__34324__auto__$jscomp$25_vec__41923$$);
};
$cljs$cst$793$route_steps$$ = new $APP.$cljs$core$Keyword$$(null, "route-steps", "route-steps", 93562344);
$cljs$cst$787$address_title$$ = new $APP.$cljs$core$Keyword$$(null, "address-title", "address-title", -712977214);
$cljs$cst$798$marine_label$$ = new $APP.$cljs$core$Keyword$$(null, "marine-label", "marine-label", 1180851357);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("venue-view");
var $amp$pages$venue$page$lazy_video$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$ui$video_background$video_background$$;
})), $amp$pages$venue$page$venue_display$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-semibold", "uppercase", "leading-none text-3xl sm:text-5xl md:text-7xl", "text-slate-900  dark:text-slate-100"])), $amp$pages$venue$page$tesa_41_slides$$ = new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$734$img_src$$, 
"https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2011.12.05.tif", $APP.$cljs$cst$743$aspect_ratio$$, 1.34, $APP.$cljs$cst$395$active_QMARK_$$, !0], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.08.tif", $APP.$cljs$cst$743$aspect_ratio$$, 1.34, $APP.$cljs$cst$395$active_QMARK_$$, !0], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
3, [$APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.18.tif", $APP.$cljs$cst$743$aspect_ratio$$, 1.34, $APP.$cljs$cst$395$active_QMARK_$$, !0], null)], null), $amp$pages$venue$page$crossing_slides$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/big_red_walkway/5.jpg", 
$APP.$cljs$cst$743$aspect_ratio$$, 1.82, $APP.$cljs$cst$716$caption$$, "Crossing at the Arsenale", $APP.$cljs$cst$717$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/big_red_walkway/1.jpg", $APP.$cljs$cst$743$aspect_ratio$$, 1.82, $APP.$cljs$cst$716$caption$$, "Crossing at the Arsenale", $APP.$cljs$cst$717$credit$$, "Render 2026"], null)], null), $amp$pages$venue$page$water_taxi_copy$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$APP.$cljs$cst$760$en$$, $APP.$cljs$core$PersistentHashMap$fromArrays$$([$APP.$cljs$cst$786$before_title$$, $cljs$cst$787$address_title$$, $APP.$cljs$cst$788$entrance_warn$$, $APP.$cljs$cst$789$entrance_title$$, $APP.$cljs$cst$790$entrance_name$$, $APP.$cljs$cst$791$entrance_lead$$, $APP.$cljs$cst$792$authorized$$, $cljs$cst$793$route_steps$$, $APP.$cljs$cst$794$route_title$$, $APP.$cljs$cst$288$title$$, $APP.$cljs$cst$795$entrance_body$$, $APP.$cljs$cst$782$subtitle$$, $APP.$cljs$cst$796$before_body$$, 
$APP.$cljs$cst$797$map_caption$$, $cljs$cst$798$marine_label$$, $APP.$cljs$cst$799$before_quote$$], ["Before entering", "Address", "Do not use any other entrance to the Arsenale.", "Only permitted entrance", "Galeazze – North Lagoon side – Rio delle Galeazze", "There is only one entrance for water taxis:", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["This water taxi is authorized to enter the military Arsenale area because it is carrying guests visiting the Armenian Pavilion.", 
"The Marine Office is aware and has approved access for water taxis transporting visitors to the Armenian Pavilion."], null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["Approach from the north side of the lagoon.", "Enter through the only permitted taxi entrance: Galeazze – Rio delle Galeazze.", "Continue south along Rio delle Galeazze, following the route shown on the map.", "Proceed to the Armenian Pavilion landing."], null), "Route", "Water Taxi Instructions", 
"The taxi must approach from the north side of the lagoon and enter through Rio delle Galeazze.", "Authorized access to the Arsenale – Armenian Pavilion", "Call the Marine Office and say:", "Water taxi route — enter from the North Lagoon via Rio delle Galeazze and continue south to the pavilion drop-off point", "Marine Office", "“I am arriving with a visitor for the Armenian Pavilion.”"]), $APP.$cljs$cst$761$it$$, $APP.$cljs$core$PersistentHashMap$fromArrays$$([$APP.$cljs$cst$786$before_title$$, 
$cljs$cst$787$address_title$$, $APP.$cljs$cst$788$entrance_warn$$, $APP.$cljs$cst$789$entrance_title$$, $APP.$cljs$cst$790$entrance_name$$, $APP.$cljs$cst$791$entrance_lead$$, $APP.$cljs$cst$792$authorized$$, $cljs$cst$793$route_steps$$, $APP.$cljs$cst$794$route_title$$, $APP.$cljs$cst$288$title$$, $APP.$cljs$cst$795$entrance_body$$, $APP.$cljs$cst$782$subtitle$$, $APP.$cljs$cst$796$before_body$$, $APP.$cljs$cst$797$map_caption$$, $cljs$cst$798$marine_label$$, $APP.$cljs$cst$799$before_quote$$], 
["Prima di entrare", "Indirizzo", "NON è consentito utilizzare nessun altro ingresso dell’Arsenale.", "Unico ingresso consentito", "Galeazze – lato Laguna Nord – Rio delle Galeazze", "Esiste un solo ingresso per i taxi acquei:", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["Questo taxi è autorizzato a entrare nell’area dell’Arsenale Militare perché trasporta ospiti diretti al Padiglione Armenia.", "L’Ufficio della Marina è informato e ha dato il permesso di accesso ai taxi acquei che accompagnano visitatori al Padiglione Armenia."], 
null), new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["Arrivare dal lato della Laguna Nord.", "Entrare dall’unico ingresso consentito ai taxi: Galeazze – Rio delle Galeazze.", "Proseguire verso sud lungo il Rio delle Galeazze, seguendo il percorso indicato sulla mappa.", "Raggiungere l’approdo del Padiglione Armenia."], null), "Percorso", "Istruzioni per il taxi acqueo", "Il taxi deve obbligatoriamente arrivare dalla Laguna Nord ed entrare attraverso il Rio delle Galeazze.", 
"Accesso autorizzato all’Arsenale – Padiglione Armenia", "Chiamare l’Ufficio della Marina e comunicare:", "Percorso del taxi acqueo — entrare dalla Laguna Nord tramite il Rio delle Galeazze e proseguire verso sud fino all’approdo del padiglione", "Ufficio della Marina", "«Sto arrivando con un visitatore diretto al Padiglione Armenia.»"])], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$venue$page$walking_directions$$, "(use-touch-enabled)", null, null) : (void 0).call(null, $amp$pages$venue$page$walking_directions$$, "(use-touch-enabled)", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$venue$page$walking_directions$$, "amp.pages.venue.page/walking-directions"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$venue$page$water_taxi_directions$$, "(hooks/use-state :it)", null, null) : (void 0).call(null, $amp$pages$venue$page$water_taxi_directions$$, 
"(hooks/use-state :it)", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$venue$page$water_taxi_directions$$, "amp.pages.venue.page/water-taxi-directions"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$venue$page$getting_there_section$$, "", null, null) : (void 0).call(null, $amp$pages$venue$page$getting_there_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$venue$page$getting_there_section$$, 
"amp.pages.venue.page/getting-there-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$venue$page$hero_section$$, "", null, null) : (void 0).call(null, $amp$pages$venue$page$hero_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$venue$page$hero_section$$, 
"amp.pages.venue.page/hero-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$venue$page$about_section$$, "", null, null) : (void 0).call(null, $amp$pages$venue$page$about_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$venue$page$about_section$$, 
"amp.pages.venue.page/about-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$venue$page$studio_section$$, '(hooks/use-ref "studio-ref")(use-intersection-observer ref)', null, null) : (void 0).call(null, $amp$pages$venue$page$studio_section$$, 
'(hooks/use-ref "studio-ref")(use-intersection-observer ref)', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$venue$page$studio_section$$, "amp.pages.venue.page/studio-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$venue$page$outdoor_section$$, '(hooks/use-ref "outdoor-ref")(use-intersection-observer ref)', null, null) : (void 0).call(null, $amp$pages$venue$page$outdoor_section$$, 
'(hooks/use-ref "outdoor-ref")(use-intersection-observer ref)', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$venue$page$outdoor_section$$, "amp.pages.venue.page/outdoor-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$venue$page$arsenale_section$$, "", null, null) : (void 0).call(null, $amp$pages$venue$page$arsenale_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$venue$page$arsenale_section$$, 
"amp.pages.venue.page/arsenale-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$pages$venue$page$venue_view$$, "", null, null) : (void 0).call(null, $APP.$amp$pages$venue$page$venue_view$$, "", null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$pages$venue$page$venue_view$$, 
"amp.pages.venue.page/venue-view"));
$APP.$module$contents$shadow$loader_set_loaded$$();

}).call(this);